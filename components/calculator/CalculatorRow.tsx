import { Minus, Plus } from "lucide-react";
import type { Service } from "../../types/service";
interface Props {
    item: Service;
    quantity: number;
    onAdjust: (delta: number) => void;
}
export default function CalculatorRow({ item, quantity, onAdjust }: Props) {
    return (
        <div className="calc-row" key={item.key}>
            <div>
                <b>{item.title}</b>
                <small>от {item.price.toLocaleString("ru-RU")} ₽ / шт.</small>
            </div>
            <div className="stepper">
                <button
                    aria-label={`Уменьшить ${item.title}`}
                    onClick={() => {
                        onAdjust(-1);
                    }}
                >
                    <Minus size={16} />
                </button>
                <span>{quantity}</span>
                <button
                    aria-label={`Добавить ${item.title}`}
                    onClick={() => {
                        onAdjust(1);
                    }}
                >
                    <Plus size={16} />
                </button>
            </div>
        </div>
    );
}