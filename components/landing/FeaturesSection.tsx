import Container from "../layout/Container";
import Image from "next/image";

const features = [
  {
    image: "/feature-1.png",
    title: "Simple Task Management",
    description:
      "Effortlessly discover, save, and organize job opportunities with an intuitive interface.",
  },
  {
    image: "/feature-1.svg",
    title: "Smart Scheduling",
    description:
      "Set application deadlines, follow-up reminders, and automated interview scheduling.",
  },
  {
    image: "/feature-1.svg",
    title: "Team Collaboration",
    description:
      "Generate tailored resumes and cover letters with AI-powered application assistance.",
  },
  {
    image: "/feature-1.svg",
    title: "Progress Analytics",
    description:
      "Track your application progress with detailed insights and response analytics.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 bg-background">
      <Container>
        <div className="text-center mb-16">
          <h2 className="max-w-xl text-3xl md:text-[48px] font-medium mb-6 font-heading mx-auto">
            Powerful features to accelerate your career
          </h2>
          <p className="text-base text-gray-700 max-w-lg mx-auto">
            Advanced AI technology that transforms how you discover
            opportunities, craft applications, and secure your ideal job faster.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#edf0f2] rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8">
              <div className="flex justify-center mb-8 relative">
                <div className="w-96 h-96 flex items-center justify-center relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={384}
                    height={384}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#edf0f2] to-transparent pointer-events-none"></div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-2xl font-semibold max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
