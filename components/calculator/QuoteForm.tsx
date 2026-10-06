"use client";
import { useState, useEffect } from "react";
import { ArrowUpRight, Check } from "lucide-react";
interface Props {
    count: number;
    total: number;
}
export default function QuoteForm({ count, total }: Props) {
    const [name, setName] = useState(""),
        [phone, setPhone] = useState(""),
        [ready, setReady] = useState(false);
    useEffect(() => setReady(false), [count, total, name, phone]);
    return (
        <div className="quote">
            <span className="eyebrow">ВАШ РАСЧЁТ</span>
            <div className="total">
                {total ? `от ${total.toLocaleString("ru-RU")} ₽` : "0 ₽"}
            </div>
            <p>{count ? `${count} предмет(ов) мебели` : "Добавьте мебель слева"}</p>
            <hr />
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
            />
            <label htmlFor="phone">Телефон</label>
            <input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                placeholder="+7 (999) 000-00-00"
            />
            <button
                className="button quote-button"
                disabled={!count || !name.trim() || !phone.trim()}
                onClick={() => setReady(true)}
            >
                Подготовить заявку <ArrowUpRight size={18} />
            </button>
            <small className="disclaimer">
                Демо-сайт: заявка не отправляется. Данные остаются на этой странице.
            </small>
            {ready && (
                <div className="confirmation" role="status">
                    <Check size={17} /> Черновик для {name.trim()} готов: {count}{" "}
                    предмет(ов), от {total.toLocaleString("ru-RU")} ₽. Для приёма заявок
                    нужно подключить контакты бизнеса.
                </div>
            )}
        </div>
    );
}
