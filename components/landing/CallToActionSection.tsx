"use client";

import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-primary/80 to-secondary flex flex-col items-center text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white drop-shadow">
          Ready to Supercharge Your Job Search?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Join ApplyEasy today and take the next step toward your dream career.
        </p>
        <Button size="lg" className="px-8 py-6 text-lg font-semibold shadow-xl">
          Get Started Free
        </Button>
      </div>
    </section>
  );
}
