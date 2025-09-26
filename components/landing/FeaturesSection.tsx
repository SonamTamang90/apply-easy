import Container from "../layout/Container";

const features = [
  {
    image: "sample.png",
    title: "Simple Task Management",
    description:
      "Effortlessly create, organize, and prioritize tasks with an intuitive interface.",
  },
  {
    image: "sample.png",
    title: "Smart Scheduling",
    description:
      "Set due dates, recurring tasks, and get automated reminders to stay on track.",
  },
  {
    image: "sample.png",
    title: "Team Collaboration",
    description:
      "Work together seamlessly with shared projects and real-time updates.",
  },
  {
    image: "sample.png",
    title: "Progress Analytics",
    description:
      "Track your productivity with detailed insights and performance metrics.",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#edf0f2] rounded-3xl overflow-hidden">
              <div className="p-6 flex justify-center">
                <div className="w-3/4 h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image Placeholder</span>
                </div>
              </div>

              <div className="p-6 text-center">
                {/* <h3 className="text-3xl font-heading font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3> */}
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
