import AboutSection from "@/components/AboutSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import FeaturesSection from "@/components/FeatureSection";
import GallerySection from "@/components/GalleryCard";
import HeritageSection from "@/components/HeritageSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div >
      <Hero />
      <AboutSection />
      <CommunitiesSection />
      <HeritageSection />
      <GallerySection />
      <FeaturesSection />
    </div>
  );
}
