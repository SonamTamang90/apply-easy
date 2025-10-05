"use client";
import Container from "../layout/Container";
import SectionIntro from "./SectionIntro";
import { FadeIn, FadeInStagger } from "./FadeIn";
import Image from "next/image";

const steps = [
  {
    step: "1",
    title: "Upload Resume",
    illustration: "/file-upload.svg",
    description: (
      <>
        Easily{" "}
        <span className="text-gray-900 font-semibold">upload your resume</span>{" "}
        and cover letters to get started with our secure platform.
      </>
    ),
  },
  {
    step: "2",
    title: "Get AI Suggestions",
    illustration: "/data-analysis.svg",
    description: (
      <>
        Receive instant,{" "}
        <span className="text-gray-900 font-semibold">
          personalized feedback
        </span>{" "}
        and optimization tips to make your documents stand out.
      </>
    ),
  },
  {
    step: "3",
    title: "Apply & Track",
    illustration: "/hiring.svg",
    description: (
      <>
        <span className="text-gray-900 font-semibold">Apply to jobs</span> with
        optimized documents and{" "}
        <span className="text-gray-900 font-semibold">
          track your application
        </span>{" "}
        status in one place.
      </>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full py-16 bg-white" id="howitworks">
      <SectionIntro title="How it works" className="mb-16">
        Transform your job search journey with our intelligent three-step
        process that streamlines everything from resume optimization to
        application tracking
      </SectionIntro>
      <Container>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-end">
          {steps.map((step, idx) => (
            <FadeIn key={idx}>
              <div
                className={`bg-white rounded-3xl p-1 ${
                  idx === 0
                    ? "md:-rotate-2 md:origin-bottom"
                    : idx === 2
                    ? "md:rotate-2 md:origin-bottom"
                    : ""
                }`}
              >
                <div className="bg-gray-50 rounded-[22px] p-8 h-full flex flex-col">
                  {/* Illustration */}
                  <div className="w-full h-40 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center">
                    {step.illustration ? (
                      <Image
                        src={step.illustration}
                        alt={`Step ${step.step}`}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-gray-400 text-sm">
                        Illustration
                      </span>
                    )}
                  </div>

                  {/* Step number and description */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-500 mb-2">
                      STEP {step.step}
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
