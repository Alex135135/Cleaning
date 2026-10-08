import { ArrowUpRight } from "lucide-react";
export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-photo" />
            <div className="hero-overlay" />
            <div className="section hero-inner">
                <div className="hero-copy">
                    <span className="eyebrow hero-eyebrow">
                        ХИМЧИСТКА МЕБЕЛИ С ВЫЕЗДОМ
                    </span>
                    <h1>
                        Уют, к которому
                        <br />
                        хочется <em>вернуться.</em>
                    </h1>
                    <p>
                        Освежим диван, кресло или матрас прямо у вас дома. Бережно подберём
                        способ чистки под материал и расскажем, какого результата ждать.
                    </p>
                    <div className="hero-actions">
                        <a className="button" href="#price">
                            Узнать стоимость <ArrowUpRight size={19} />
                        </a>
                        <a className="under-link" href="#services">
                            Посмотреть услуги ↘
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div>
                            <b>01</b> Приезжаем
                            <br />к вам домой
                        </div>
                        <div>
                            <b>02</b> Подбираем уход
                            <br />
                            под ткань
                        </div>
                        <div>
                            <b>03</b> Показываем
                            <br />
                            результат
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
