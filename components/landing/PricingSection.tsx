import Container from "../layout/Container";
import SectionIntro from "./SectionIntro";
import { FadeIn, FadeInStagger } from "./FadeIn";

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started with your job search",
    features: [
      "5 AI cover letters per month",
      "Basic AI resume generator",
      "Application tracking dashboard",
      "Job search with basic filters",
      "Save up to 10 job bookmarks",
      "Standard interview preparation",
    ],
    isPopular: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Everything you need for an active job search",
    features: [
      "Unlimited AI cover letter generation",
      "Advanced AI resume generator",
      "Tailored content based on job requirements",
      "Full application tracking & management",
      "Smart job recommendations",
      "Unlimited job bookmarks",
      "AI-powered interview practice",
      "Role-specific interview questions",
      "Advanced search filters",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "Advanced features for career professionals",
    features: [
      "Everything in Professional",
      "Bulk application management",
      "Multi-language interview preparation",
      "Mock interview sessions with AI feedback",
      "Priority job recommendations",
      "Application deadline reminders",
      "Export applications & resumes",
      "Premium support",
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 bg-background">
      <SectionIntro title="Choose your plan" className="mb-16">
        Start free and upgrade as your career goals evolve. No hidden fees,
        cancel anytime.
      </SectionIntro>
      <Container>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <FadeIn
              key={idx}
              className="relative -m-2 grid grid-cols-1 rounded-[2rem] ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
            >
              <div className="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5">
                <div className="rounded-3xl bg-white p-10 pb-9 ring-1 shadow-2xl ring-black/5">
                  <h2 className="text-sm font-semibold text-gray-900">
                    {plan.name} <span className="sr-only">plan</span>
                  </h2>
                  <p className="mt-2 text-sm/6 text-pretty text-gray-600">
                    {plan.description}
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="text-5xl font-semibold text-gray-950">
                      {plan.price}
                    </div>
                    {plan.period && (
                      <div className="text-sm text-gray-600">
                        <p>USD</p>
                        <p>per month</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-8">
                    <button className="inline-block rounded-md bg-brand px-3.5 py-2 text-center text-sm/6 font-semibold text-black shadow-xs hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                      {plan.price === "Free"
                        ? "Get Started"
                        : "Start Free Trial"}
                    </button>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-sm/6 font-medium text-gray-950">
                      Start applying with:
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {plan.features.map((feature, featureIdx) => (
                        <li
                          key={featureIdx}
                          className="flex items-start gap-4 text-sm/6 text-gray-600"
                        >
                          <span className="inline-flex h-6 items-center">
                            <svg
                              className="size-4 fill-gray-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.236 4.53L8.465 10.5a.75.75 0 00-1.06 1.061l1.732 1.732a.75.75 0 001.154-.114l3.857-5.398z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
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
