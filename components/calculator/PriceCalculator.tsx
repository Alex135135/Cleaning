
"use client";
import { services } from "../../data/services";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { adjust } from "../../store/calculatorSlice";
import { selectCounts, selectQuote } from "../../store/selectors";
import { useQuoteTool } from "../../hooks/useQuoteTool";
import CalculatorRow from "./CalculatorRow";
import QuoteForm from "./QuoteForm";
export default function PriceCalculator() {
    const dispatch = useAppDispatch();
    const counts = useAppSelector(selectCounts);
    const { count, total } = useAppSelector(selectQuote);
    useQuoteTool();
    return (
        <section id="price" className="section calculator">
            <div className="section-title">
                <div>
                    <span className="eyebrow">ПРЕДВАРИТЕЛЬНЫЙ РАСЧЁТ</span>
                    <h2>
                        Сколько будет стоить
                        <br />
                        чистота?
                    </h2>
                </div>
                <p>
                    Выберите мебель — стоимость обновится сразу. Точную цену мастер
                    уточнит после осмотра обивки.
                </p>
            </div>
            <div className="calc-grid">
                <div className="calc-list">
                    {services.map((item) => (
                        <CalculatorRow
                            key={item.key}
                            item={item}
                            quantity={counts[item.key]}
                            onAdjust={(delta) => dispatch(adjust({ key: item.key, delta }))}
                        />
                    ))}
                </div>
                <QuoteForm count={count} total={total} />
            </div>
        </section>
    );
}
