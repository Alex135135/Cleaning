import { Sparkles } from "lucide-react";
export default function Logo() {
    return (
        <a className="logo" href="#top">
            <span className="logo-icon">
                <Sparkles size={22} />
            </span>
            <span>
                чисто<span className="mint">.</span>
                <small>СТУДИЯ ХИМЧИСТКИ</small>
            </span>
        </a>
    );
}
