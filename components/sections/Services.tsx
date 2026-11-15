import { ArrowUpRight } from "lucide-react";
import { services as items } from "../../data/services";

export default function Services() {
    // Проверка на пустой массив, чтобы не рендерить лишние обёртки
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <section id="services" className="section services" aria-labelledby="services-heading">
            <div className="section-title">
                <div>
                    <span className="eyebrow">УСЛУГИ СТУДИИ</span>
                    <h2 id="services-heading">
                        Заботимся о мебели,
                        <br />
                        которой вы пользуетесь каждый день.
                    </h2>
                </div>
                <p>
                    От небольшого кресла до семейного дивана — для каждой вещи подбираем
                    подходящую обработку.
                </p>
            </div>

            <div className="cards">
                {items.map((item, i) => {
                    // Валидация данных на уровне рендера — защита от падения при битых данных
                    if (!item || !item.key || !item.title) {
                        console.warn("Пропущен некорректный элемент services:", item);
                        return null;
                    }

                    const total = items.length;
                    const num = i + 1;
                    // Динамический формат нумерации: 01/04, 10/20 и т.д.
                    const formattedNum = num.toString().padStart(2, "0");
                    const formattedTotal = total.toString().padStart(2, "0");

                    return (
                        <a
                            key={item.key}
                            href="#price"
                            className="card"
                            aria-label={`Перейти к ценам на услугу: ${item.title}`}
                            rel="noopener noreferrer"
                        >
                            <span className="card-num">
                                {formattedNum} / {formattedTotal}
                            </span>

                            {/* Если картинка — лучше через img с alt; если это иконка/декоратив — aria-hidden ок */}
                            <div className={`furniture ${item.key}`} aria-hidden="true">
                                <span />
                            </div>

                            <div className="card-bottom">
                                <div>
                                    <h3>{item.title}</h3>
                                    {item.note && <p>{item.note}</p>}
                                    <b>от {item.price?.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}</b>
                                </div>

                                <span className="round-arrow" aria-hidden="true">
                                    <ArrowUpRight size={20} />
                                </span>
                            </div>
                        </a>
                    );
                })}
            </div>

            <p className="price-note">
                Демонстрационные цены. Стоимость зависит от размера, материала и состояния мебели.
            </p>
        </section>
    );
}