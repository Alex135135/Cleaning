import { Droplets, ShieldCheck, Clock3 } from "lucide-react";
export default function Promise() {
    return (
        <section className="promise">
            <div className="section promise-grid">
                <div>
                    <span className="eyebrow">НАШ ПОДХОД</span>
                    <h2>
                        Чисто — значит
                        <br />
                        <em>бережно.</em>
                    </h2>
                </div>
                <div className="promise-list">
                    <article>
                        <Droplets />
                        <div>
                            <h3>Средство под материал</h3>
                            <p>Проверяем обивку и выбираем способ обработки.</p>
                        </div>
                    </article>
                    <article>
                        <ShieldCheck />
                        <div>
                            <h3>Честный результат</h3>
                            <p>Обсуждаем сложные пятна заранее и не обещаем невозможного.</p>
                        </div>
                    </article>
                    <article>
                        <Clock3 />
                        <div>
                            <h3>Удобно у вас дома</h3>
                            <p>Согласуем время и чистим мебель на месте.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
