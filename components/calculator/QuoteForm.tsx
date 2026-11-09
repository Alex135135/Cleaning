"use client";

import { useState } from "react";
import { ArrowUpRight, Check, AlertCircle } from "lucide-react";

interface Props {
    count: number;
    total: number;
}

export default function QuoteForm({ count, total }: Props) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [ready, setReady] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Простая валидация телефона: оставляем только цифры, проверяем длину
    const validatePhone = (value: string) => {
        const digitsOnly = value.replace(/\D/g, "");
        return digitsOnly.length >= 10;
    };

    const handleSubmit = () => {
        setError(null);
        const nameTrimmed = name.trim();
        const phoneTrimmed = phone.trim();

        if (!count) {
            setError("Сначала добавьте мебель в расчёт.");
            return;
        }

        if (!nameTrimmed) {
            setError("Пожалуйста, укажите ваше имя.");
            return;
        }

        if (!phoneTrimmed || !validatePhone(phoneTrimmed)) {
            setError("Введите корректный номер телефона (минимум 10 цифр).");
            return;
        }

        setReady(true);
    };

    return (
        <div className="quote">
            <span className="eyebrow">ВАШ РАСЧЁТ</span>

            <div className="total">
                {total ? `от ${total.toLocaleString("ru-RU")} ₽` : "0 ₽"}
            </div>

            <p>
                {count ? `${count} предмет(ов) мебели` : "Добавьте мебель слева"}
            </p>

            <hr className="hr-thin" />

            {error && (
                <div className="error-message" role="alert">
                    <AlertCircle size={14} className="error-icon" /> {error}
                </div>
            )}

            <label htmlFor="name" className="form-label">
                Ваше имя
            </label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
                className={!name ? "input-empty" : "input-filled"}
                autoComplete="name"
            />

            <label htmlFor="phone" className="form-label">
                Телефон
            </label>
            <input
                id="phone"
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (999) 000-00-00"
                className={!phone ? "input-empty" : "input-filled"}
                autoComplete="tel"
            />

            <button
                type="button"
                className="button quote-button"
                disabled={!count || !name.trim() || !phone.trim()}
                onClick={handleSubmit}
            >
                Подготовить заявку <ArrowUpRight size={18} />
            </button>

            <small className="disclaimer">
                Демо-сайт: заявка не отправляется. Данные остаются на этой странице.
            </small>

            {ready && (
                <div className="confirmation" aria-live="polite">
                    <Check size={17} /> Черновик для {name.trim()} готов: {count}{" "}
                    предмет(ов), от {total.toLocaleString("ru-RU")} ₽. Для приёма заявок
                    нужно подключить контакты бизнеса.
                </div>
            )}
        </div>
    );
}