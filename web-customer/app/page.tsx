import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ThoughtOfTheDay from "@/components/ThoughtOfTheDay";
import KnowledgePillars from "@/components/KnowledgePillars";
import ContinueReading from "@/components/ContinueReading";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ThoughtOfTheDay />
      <KnowledgePillars />
      <ContinueReading />
      <Footer />
      <MobileNav />
    </main>
  );
}
