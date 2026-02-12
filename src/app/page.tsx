import { HeroSection } from "@/components/marketing/hero-section";
import { EngineerAdvantage } from "@/components/marketing/engineer-advantage";
import { RealityGap } from "@/components/marketing/reality-gap";
import { SchoolsSection } from "@/components/marketing/schools-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RealityGap />
      <EngineerAdvantage />
      <SchoolsSection />
    </>
  );
}
