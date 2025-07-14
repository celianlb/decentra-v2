import BentoGrid from "@/components/home/bento-grid";
import Formations from "@/components/home/formations";
import HeroSection from "@/components/home/hero-section";
import Value from "@/components/home/value";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BentoGrid />
      <Value />
      <Formations />
    </main>
  );
}
