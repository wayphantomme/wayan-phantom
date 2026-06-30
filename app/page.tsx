import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TechMarquee from "./components/TechMarquee";
import PainPointSection from "./components/PainPointSection";
import ClientsSection from "./components/ClientsSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import RiskReversalSection from "./components/RiskReversalSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TechMarquee />
        <PainPointSection />
        <CapabilitiesSection />
        <ClientsSection />
        <PortfolioSection />
        <ProcessSection />
        <RiskReversalSection />
      </main>
      <Footer />
    </>
  );
}
