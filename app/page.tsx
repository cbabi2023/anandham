import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ThoughtOfTheDay from "@/components/ThoughtOfTheDay";
import KnowledgePillars from "@/components/KnowledgePillars";
import ContinueReading from "@/components/ContinueReading";
import OfflineLibrary from "@/components/OfflineLibrary";
import FeaturedWork from "@/components/FeaturedWork";
import GuruAndSociety from "@/components/GuruAndSociety";
import VisualArchive from "@/components/VisualArchive";
import ResearchArticles from "@/components/ResearchArticles";
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
      <OfflineLibrary />
      <FeaturedWork />
      <GuruAndSociety />
      <VisualArchive />
      <ResearchArticles />
      <Footer />
      <MobileNav />
    </main>
  );
}
