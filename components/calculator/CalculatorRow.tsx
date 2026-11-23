import { Minus, Plus } from "lucide-react";
import type { Service } from "../../types/service";

interface Props {
    item: Service;
    quantity: number;
    onAdjust: (delta: number) => void;
    maxQuantity?: number; // опционально: защита от слишком больших значений
}

export default function CalculatorRow({
    item,
    quantity,
    onAdjust,
    maxQuantity,
}: Props) {
    const canDecrease = quantity > 0;
    const canIncrease = maxQuantity === undefined || quantity < maxQuantity;

    const handleDecrease = () => {
        if (!canDecrease) return;
        onAdjust(-1);
    };

    const handleIncrease = () => {
        if (!canIncrease) return;
        onAdjust(1);
    };

    return (
        <div className="calc-row" role="group" aria-labelledby={`title-${item.key}`}>
            <div className="row-content">
                <h3 id={`title-${item.key}`} className="row-title">
                    {item.title}
                </h3>
                <small className="row-price" aria-hidden="true">
                    от {item.price.toLocaleString("ru-RU")} ₽ / шт.
                </small>
                {/* Дублируем цену в aria-label для скринридеров, если это важно в контексте */}
            </div>

            <div
                className="stepper"
                role="group"
                aria-label={`Управление количеством: ${item.title}`}
            >
                <button
                    type="button"
                    aria-label={`Уменьшить количество ${item.title}`}
                    onClick={handleDecrease}
                    disabled={!canDecrease}
                    className={`stepper-btn ${!canDecrease ? "stepper-btn--disabled" : ""}`}
                >
                    <Minus size={16} aria-hidden="true" />
                    <span className="sr-only">Уменьшить</span>
                </button>

                <span
                    className="stepper-value"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {quantity}
                </span>

                <button
                    type="button"
                    aria-label={`Увеличить количество ${item.title}`}
                    onClick={handleIncrease}
                    disabled={!canIncrease}
                    className={`stepper-btn ${!canIncrease ? "stepper-btn--disabled" : ""}`}
                >
                    <Plus size={16} aria-hidden="true" />
                    <span className="sr-only">Увеличить</span>
                </button>
            </div>
        </div>
    );
}