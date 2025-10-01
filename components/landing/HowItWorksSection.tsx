"use client";
import { Upload, Sparkles, CheckCircle2, Send } from "lucide-react";
import Container from "../layout/Container";
import Image from "next/image";
import SectionIntro from "./SectionIntro";
import { FadeIn, FadeInStagger } from "./FadeIn";

const steps = [
  {
    icon: <Upload className="w-8 h-8 text-primary" />,
    title: "Upload Resume",
    description:
      "Easily upload your resume and cover letters to get started with our secure platform.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Get AI Suggestions",
    description:
      "Receive instant, personalized feedback and optimization tips to make your documents stand out.",
  },
  {
    icon: <Send className="w-8 h-8 text-primary" />,
    title: "Apply to Jobs",
    description:
      "Use your optimized documents to apply to relevant job opportunities with one click.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
    title: "Track & Manage",
    description:
      "Monitor application status, schedule interviews, and manage your entire job search in one place.",
  },
];

export default function HowItWorksSection() {
  const leftSteps = steps.slice(0, 2);
  const rightSteps = steps.slice(2, 4);

  return (
    <section id="howitworks" className="w-full py-16">
      <SectionIntro title="How it works?" className="mb-24">
        Experience our intelligent four-step methodology that transforms your
        applications and connects you with the right opportunities effortlessly.
      </SectionIntro>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* Left side - First 2 steps */}
          <FadeInStagger className="flex flex-col gap-6">
            {leftSteps.map((step, idx) => (
              <FadeIn key={idx}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex-1 flex items-center">
                  <div className="flex flex-col space-y-9 items-start space-x-4">
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-gray-900 text-sm text-white flex items-center justify-center gap-2 font-bold uppercase font-heading">
                        <span className="text-lg">{idx + 1}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-xl">
                        {step.title}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>

          {/* Center - Image */}
          <FadeIn className="flex justify-center">
            <Image
              src="/image-2.png"
              alt="How it works illustration"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </FadeIn>

          {/* Right side - Last 2 steps */}
          <FadeInStagger className="flex flex-col gap-6">
            {rightSteps.map((step, idx) => (
              <FadeIn key={idx + 2}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex-1 flex items-center">
                  <div className="flex flex-col space-y-9 items-start space-x-4">
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-gray-900 text-sm text-white flex items-center justify-center gap-2 font-bold uppercase font-heading">
                        <span className="text-lg">{idx + 3}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-xl">
                        {step.title}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </section>
  );
}
