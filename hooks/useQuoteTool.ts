"use client";
import { useEffect } from "react";
import { services as items } from "../data/services";
import { setCounts } from "../store/calculatorSlice";
import { useAppDispatch } from "../store/hooks";
import type { Counts, ServiceKey } from "../types/service";
export function useQuoteTool() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        type Ctx = {
            registerTool: (
                tool: {
                    name: string;
                    title: string;
                    description: string;
                    inputSchema: object;
                    annotations: object;
                    execute: (input: unknown) => unknown;
                },
                opts: { signal: AbortSignal },
            ) => void | Promise<void>;
        };
        const context = (document as Document & { modelContext?: Ctx })
            .modelContext;
        if (!context?.registerTool) return;
        const ctrl = new AbortController();
        void Promise.resolve(
            context.registerTool(
                {
                    name: "configure_cleaning_quote",
                    title: "Рассчитать химчистку",
                    description:
                        "Выбрать количество предметов мебели и показать предварительную стоимость в калькуляторе.",
                    inputSchema: {
                        type: "object",
                        properties: {
                            sofa: { type: "integer", minimum: 0, maximum: 9 },
                            corner: { type: "integer", minimum: 0, maximum: 9 },
                            chair: { type: "integer", minimum: 0, maximum: 9 },
                            mattress: { type: "integer", minimum: 0, maximum: 9 },
                        },
                        required: ["sofa", "corner", "chair", "mattress"],
                        additionalProperties: false,
                    },
                    annotations: { readOnlyHint: false },
                    execute: (input: unknown) => {
                        if (!input || typeof input !== "object")
                            throw Error("Укажите количества мебели");
                        const candidate = input as Record<string, unknown>;
                        const keys: ServiceKey[] = ["sofa", "corner", "chair", "mattress"];
                        if (
                            Object.keys(candidate).length !== 4 ||
                            keys.some(
                                (key) =>
                                    !Number.isInteger(candidate[key]) ||
                                    (candidate[key] as number) < 0 ||
                                    (candidate[key] as number) > 9,
                            )
                        )
                            throw Error("Количество каждого предмета должно быть от 0 до 9");
                        const next = Object.fromEntries(
                            keys.map((key) => [key, candidate[key]]),
                        ) as Counts;
                        dispatch(setCounts(next));
                        const amount = items.reduce(
                            (sum, item) => sum + item.price * next[item.key],
                            0,
                        );
                        document.getElementById("price")?.scrollIntoView();
                        return {
                            estimatedPriceRub: amount,
                            itemCount: Object.values(next).reduce((a, b) => a + b, 0),
                        };
                    },
                },
                { signal: ctrl.signal },
            ),
        ).catch(() => { });
        return () => ctrl.abort();
    }, [dispatch]);
}
