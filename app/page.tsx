import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { SkillsSection } from "@/components/landing/skills-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { ProcessSection } from "@/components/landing/process-section";
import { AchievementsSection } from "@/components/landing/achievements-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ProcessSection />
      <AchievementsSection />
      <MetricsSection />
      <IntegrationsSection />
      <PricingSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
