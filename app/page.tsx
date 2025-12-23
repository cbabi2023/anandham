import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ThoughtOfTheDay from "@/components/ThoughtOfTheDay";
import KnowledgePillars from "@/components/KnowledgePillars";
import FeaturedWork from "@/components/FeaturedWork";
import GuruAndSociety from "@/components/GuruAndSociety";
import VisualArchive from "@/components/VisualArchive";
import ResearchArticles from "@/components/ResearchArticles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ThoughtOfTheDay />
      <KnowledgePillars />
      <FeaturedWork />
      <GuruAndSociety />
      <VisualArchive />
      <ResearchArticles />
      <Footer />
    </main>
  );
}
