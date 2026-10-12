import { ArrowUpRight } from "lucide-react";
import { services as items } from "../../data/services";
export default function Services() {
    return (
        <section id="services" className="section services">
            <div className="section-title">
                <div>
                    <span className="eyebrow">УСЛУГИ СТУДИИ</span>
                    <h2>
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
                {items.map((item, i) => (
                    <a href="#price" className="card" key={item.key}>
                        <span className="card-num">0{i + 1} / 04</span>
                        <div className={`furniture ${item.key}`} aria-hidden="true">
                            <span />
                        </div>
                        <div className="card-bottom">
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.note}</p>
                                <b>от {item.price.toLocaleString("ru-RU")} ₽</b>
                            </div>
                            <span className="round-arrow">
                                <ArrowUpRight size={20} />
                            </span>
                        </div>
                    </a>
                ))}
            </div>
            <p className="price-note">
                Демонстрационные цены. Стоимость зависит от размера, материала и
                состояния мебели.
            </p>
        </section>
    );
}
