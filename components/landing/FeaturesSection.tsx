import { Card } from "@/components/ui/card";
import { Sparkles, FileText, Briefcase, User } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "AI-Powered Resume Optimization",
    description:
      "Get instant suggestions to improve your resume and stand out to employers.",
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "One-Click Cover Letters",
    description:
      "Auto-generate tailored cover letters for every job application.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Application Tracker",
    description:
      "Keep track of all your job applications in one organized dashboard.",
  },
  {
    icon: <User className="w-8 h-8 text-primary" />,
    title: "Interview Prep",
    description:
      "Practice with AI-driven mock interviews and get actionable feedback.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center p-6 text-center shadow-md h-full"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
