import { Minus, Plus } from "lucide-react";
import type { Service } from "../../types/service";

interface Props {
    item: Service;
    quantity: number;
    onAdjust: (delta: number) => void;
}

export default function CalculatorRow({ item, quantity, onAdjust }: Props) {
    const handleDecrease = () => {
        if (quantity <= 0) return;
        onAdjust(-1);
    };

    const handleIncrease = () => {
        // Если нужна защита от слишком больших значений — добавь проверку здесь
        onAdjust(1);
    };

    return (
        <div className="calc-row" role="group" aria-labelledby={`title-${item.key}`}>
            <div className="row-content">
                <h3 id={`title-${item.key}`} className="row-title">
                    {item.title}
                </h3>
                <small className="row-price">
                    от {item.price.toLocaleString("ru-RU")} ₽ / шт.
                </small>
            </div>

            <div className="stepper" aria-label="Управление количеством">
                <button
                    type="button"
                    aria-label={`Уменьшить количество ${item.title}`}
                    onClick={handleDecrease}
                    disabled={quantity <= 0}
                    className={quantity <= 0 ? "stepper-btn disabled" : "stepper-btn"}
                >
                    <Minus size={16} />
                </button>

                <span className="stepper-value" aria-live="polite">
                    {quantity}
                </span>

                <button
                    type="button"
                    aria-label={`Увеличить количество ${item.title}`}
                    onClick={handleIncrease}
                    className="stepper-btn"
                >
                    <Plus size={16} />
                </button>
            </div>
        </div>
    );
}