import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";

import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="">
        <HeroSection />
      </div>
      <div className="flex-1 flex flex-col w-full">
        <FeaturesSection />
        {/* <HowItWorksSection /> */}
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
      </div>
    </div>
  );
}
