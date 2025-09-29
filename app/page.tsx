import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import FAQSection from "@/components/landing/FAQSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="">
        <Header />
        <HeroSection />
      </div>
      <main className="flex-1 flex flex-col w-full">
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
