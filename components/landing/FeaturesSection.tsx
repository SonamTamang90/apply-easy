import Container from "../layout/Container";
import Image from "next/image";
import SectionIntro from "./SectionIntro";
import { FadeIn, FadeInStagger } from "./FadeIn";

const features = [
  {
    icon: "custom",
    customIcon: "/swap.svg",
    title: "Simple Task Management",
    description:
      "Effortlessly discover, save, and organize job opportunities with an intuitive interface.",
  },
  {
    icon: "custom",
    customIcon: "/calendar.svg",
    title: "Smart Scheduling",
    description:
      "Set application deadlines, follow-up reminders, and automated interview scheduling.",
  },
  {
    icon: "custom",
    customIcon: "/users.svg",
    title: "Team Collaboration",
    description:
      "Generate tailored resumes and cover letters with AI-powered application assistance.",
  },
  {
    icon: "custom",
    customIcon: "/activity.svg",
    title: "Progress Analytics",
    description:
      "Track your application progress with detailed insights and response analytics.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-24 bg-[#F5F5F5]">
      <SectionIntro
        title="Powerful features to accelerate your career"
        className="mb-16"
      >
        Innovative smart tools that revolutionize how you find positions, create
        submissions, and land your perfect role quicker.
      </SectionIntro>

      <Container>
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <FadeIn key={idx}>
              <div className="bg-white rounded-2xl overflow-hidden flex items-center p-8 gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                    {feature.icon === "custom" ? (
                      <Image
                        src={feature.customIcon}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    ) : (
                      <feature.icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
