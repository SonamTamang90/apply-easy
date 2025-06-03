import { Card } from "@/components/ui/card";
import { Upload, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <Upload className="w-8 h-8 text-primary" />,
    title: "Upload Resume",
    description: "Easily upload your resume and cover letters to get started.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Get AI Suggestions",
    description:
      "Receive instant, actionable feedback to improve your documents.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
    title: "Apply & Track",
    description: "Apply to jobs and track your progress in one dashboard.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full py-16 bg-muted">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {steps.map((step, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center p-6 text-center shadow h-full w-full md:w-1/3"
            >
              <div className="mb-4">{step.icon}</div>
              <div className="flex items-center justify-center mb-2">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-2">
                  {idx + 1}
                </span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
