import { ArrowUpRight } from "lucide-react";
import Logo from "../ui/Logo";
export default function Footer() {
    return (
        <footer>
            <div className="section footer-main">
                <div>
                    <Logo />
                    <p>
                        Бережный уход за мягкой мебелью
                        <br />в вашем доме.
                    </p>
                </div>
                <div>
                    <span>Выезд на дом · демонстрационный проект</span>
                    <a href="#price">
                        Рассчитать стоимость <ArrowUpRight size={17} />
                    </a>
                </div>
            </div>
            <div className="section footer-bottom">
                <span>© 2026 Чисто. Демонстрационный сайт</span>
                <span>Цены и сведения о студии приведены для примера.</span>
            </div>
        </footer>
    );
}