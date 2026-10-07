"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { questions } from "../../data/questions";
export default function Faq() {
    const [opened, setOpened] = useState<number | null>(0);
    return (
        <section id="faq" className="section faq">
            <div>
                <span className="eyebrow">ХОРОШО ЗНАТЬ</span>
                <h2>Частые вопросы</h2>
                <p>
                    Если ваш случай нестандартный, покажите фотографию мебели специалисту
                    при согласовании работы.
                </p>
            </div>
            <div>
                {questions.map(([q, a], i) => (
                    <div className="question" key={q}>
                        <button
                            aria-expanded={opened === i}
                            onClick={() => setOpened(opened === i ? null : i)}
                        >
                            {q}
                            <ChevronDown size={20} className={opened === i ? "opened" : ""} />
                        </button>
                        {opened === i && <p>{a}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
}
