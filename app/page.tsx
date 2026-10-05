import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import PromiseSection from "../components/sections/Promise";
import Process from "../components/sections/Process";
import Faq from "../components/sections/Faq";
import PriceCalculator from "../components/calculator/PriceCalculator";
import StoreProvider from "../components/StoreProvider";

export default function Home() {
    return (
        <>
            <Header />
            <main id="top">
                <Hero />
                <Services />
                <PromiseSection />
                <Process />
                <StoreProvider>
                    <PriceCalculator />
                </StoreProvider>
                <Faq />
            </main>
            <Footer />
        </>
    );
}