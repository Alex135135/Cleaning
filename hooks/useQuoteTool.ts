"use client";

import { useEffect } from "react";
import { services as items } from "../data/services";
import { setCounts } from "../store/calculatorSlice";
import { useAppDispatch } from "../store/hooks";
import type { Counts, ServiceKey } from "../types/service";

interface ToolRegistrationContext {
    registerTool: (
        tool: {
            name: string;
            title: string;
            description: string;
            inputSchema: object;
            annotations: Record<string, unknown>;
            execute: (input: unknown, opts: { signal: AbortSignal }) => Promise<unknown> | unknown;
        },
        opts: { signal: AbortSignal }
    ) => void | Promise<void>;
}

export function useQuoteTool() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const context = (document as unknown as { modelContext?: ToolRegistrationContext }).modelContext;

        if (!context?.registerTool) {
            console.warn("modelContext not found — tool registration skipped");
            return;
        }

        const ctrl = new AbortController();
        const signal = ctrl.signal;

        const QUOTE_TOOL_NAME = "configure_cleaning_quote";
        const keys: ServiceKey[] = ["sofa", "corner", "chair", "mattress"];

        const inputSchema = {
            type: "object",
            properties: {
                sofa: { type: "integer", minimum: 0, maximum: 9 },
                corner: { type: "integer", minimum: 0, maximum: 9 },
                chair: { type: "integer", minimum: 0, maximum: 9 },
                mattress: { type: "integer", minimum: 0, maximum: 9 },
            },
            required: keys,
            additionalProperties: false,
        } as const;

        const validateInput = (input: unknown): input is Record<ServiceKey, number> => {
            if (!input || typeof input !== "object" || Array.isArray(input)) {
                return false;
            }

            const candidate = input as Record<string, unknown>;

            // проверяем, что все 4 ключа есть и значения — целые числа в диапазоне [0, 9]
            return (
                keys.length === Object.keys(candidate).length &&
                keys.every(
                    (key) =>
                        Number.isInteger(candidate[key]) &&
                        candidate[key] >= 0 &&
                        candidate[key] <= 9
                )
            );
        };

        const execute = (input: unknown) => {
            if (!validateInput(input)) {
                throw new Error("Количество каждого предмета должно быть целым числом от 0 до 9. Укажите количества для sofa, corner, chair, mattress.");
            }

            const next: Counts = Object.fromEntries(
                keys.map((key) => [key, input[key]])
            ) as Counts;

            dispatch(setCounts(next));

            const itemCount = Object.values(next).reduce((a, b) => a + b, 0);
            const estimatedPriceRub = items.reduce(
                (sum, item) => sum + item.price * next[item.key],
                0
            );

            const priceEl = document.getElementById("price");
            if (priceEl) {
                priceEl.scrollIntoView({ behavior: "smooth" });
            }

            return { estimatedPriceRub, itemCount };
        };

        void (async () => {
            try {
                await context.registerTool(
                    {
                        name: QUOTE_TOOL_NAME,
                        title: "Рассчитать химчистку",
                        description:
                            "Выбрать количество предметов мебели и показать предварительную стоимость в калькуляторе.",
                        inputSchema,
                        annotations: { readOnlyHint: false },
                        execute,
                    },
                    { signal }
                );
            } catch (err) {
                if (err instanceof Error && err.name === "AbortError") {
                    // это ожидаемое поведение при размонтировании — не логируем как ошибку
                    return;
                }
                console.error("Failed to register quote tool:", err);
            }
        })();

        return () => ctrl.abort();
    }, [dispatch]);
}