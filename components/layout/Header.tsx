import { ArrowUpRight } from "lucide-react";
import Logo from "../ui/Logo";
export default function Header() {
    return (
        <header className="header">
            <div className="section header-inner">
                <Logo />
                <nav>
                    <a href="#services">Услуги</a>
                    <a href="#how">Как работаем</a>
                    <a href="#price">Цены</a>
                    <a href="#faq">Вопросы</a>
                </nav>
                <a className="header-link" href="#price">
                    Рассчитать стоимость <ArrowUpRight size={17} />
                </a>
            </div>
        </header>
    );
}
