import { ArrowUpRight } from "lucide-react";

interface HeroProps {
    eyebrowText?: string;
    heading?: string;
    description?: string;
}

export default function Hero({
    eyebrowText = "ХИМЧИСТКА МЕБЕЛИ С ВЫЕЗДОМ",
    heading = "Уют, к которому хочется вернуться.",
    description =
    "Освежим диван, кресло или матрас прямо у вас дома. Бережно подберём способ чистки под материал и расскажем, какого результата ждать.",
}: HeroProps) {
    return (
        <section className="hero" aria-label="Главная секция: химчистка мебели с выездом">
            <div className="hero-photo" role="img" aria-hidden="true" />
            <div className="hero-overlay" aria-hidden="true" />

            <div className="section hero-inner">
                <div className="hero-copy">
                    {eyebrowText && (
                        <span className="eyebrow hero-eyebrow" aria-live="polite">
                            {eyebrowText}
                        </span>
                    )}

                    <h1 className="hero-heading">
                        {heading.split(" ").map((word, idx) =>
                            word === "вернуться." ? <em key={idx}>{word}</em> : <span key={idx}>{word} </span>
                        )}
                    </h1>

                    <p className="hero-description">{description}</p>

                    <div className="hero-actions" role="group" aria-label="Действия">
                        <a className="button" href="#price">
                            Узнать стоимость <ArrowUpRight size={19} className="button-icon" />
                        </a>
                        <a className="under-link" href="#services">
                            Посмотреть услуги ↘
                        </a>
                    </div>

                    <div className="hero-stats" aria-labelledby="stats-heading">
                        <h2 id="stats-heading" className="visually-hidden">
                            Этапы работы
                        </h2>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <b className="stat-number">01</b>
                                <span className="stat-text">Приезжаем к вам домой</span>
                            </div>
                            <div className="stat-item">
                                <b className="stat-number">02</b>
                                <span className="stat-text">Подбираем уход под ткань</span>
                            </div>
                            <div className="stat-item">
                                <b className="stat-number">03</b>
                                <span className="stat-text">Показываем результат</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}