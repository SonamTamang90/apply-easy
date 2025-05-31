"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Briefcase, Code, Database, Smartphone } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ROLES = [
  {
    key: "Frontend",
    label: "Frontend",
    desc: "UI, UX, and web apps",
    icon: <Code className="w-6 h-6 text-primary" />,
  },
  {
    key: "Backend",
    label: "Backend",
    desc: "APIs, servers, databases",
    icon: <Database className="w-6 h-6 text-primary" />,
  },
  {
    key: "Fullstack",
    label: "Fullstack",
    desc: "Both frontend & backend",
    icon: <Briefcase className="w-6 h-6 text-primary" />,
  },
  {
    key: "Mobile",
    label: "Mobile",
    desc: "iOS & Android apps",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
  },
];
const LANGUAGES: Record<string, string[]> = {
  Frontend: ["JavaScript", "TypeScript", "React", "Vue", "Angular"],
  Backend: ["Node.js", "Python", "Java", "Go", "Ruby"],
  Fullstack: ["JavaScript", "TypeScript", "Python", "Java"],
  Mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
};
const ALL_LANGUAGES = Array.from(new Set(Object.values(LANGUAGES).flat()));
const LANGUAGE_META: Record<string, { badge?: string; questions: number }> = {
  JavaScript: { badge: "Popular", questions: 24 },
  TypeScript: { badge: "Trending", questions: 12 },
  React: { badge: "Popular", questions: 18 },
  Vue: { questions: 8 },
  Angular: { questions: 7 },
  "Node.js": { badge: "Popular", questions: 15 },
  Python: { badge: "Popular", questions: 20 },
  Java: { questions: 10 },
  Go: { questions: 6 },
  Ruby: { questions: 5 },
  "React Native": { badge: "Trending", questions: 9 },
  Flutter: { questions: 7 },
  Swift: { questions: 8 },
  Kotlin: { questions: 6 },
};

export default function InterviewPrep() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  // When a role is selected, clear language
  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setSelectedLanguage(null);
    router.push(`/interview-prep/role/${encodeURIComponent(role)}`);
  };

  // When a language is selected, clear role
  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setSelectedRole(null);
    router.push(`/interview-prep/lang/${encodeURIComponent(lang)}`);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Interview Prep</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Select the interview mode
      </h1>
      <p className="text-muted-foreground mb-6">
        Practice, prepare, and ace your next interview with AI-powered tools and
        resources.
      </p>
      {/* Role Based Interview Section */}
      <div className="mb-6">
        <div className="mb-2 text-lg font-semibold">
          Which role are you preparing for?
        </div>
        <div className="grid grid-cols-2 gap-4">
          {ROLES.map((role) => (
            <div
              key={role.key}
              className={`p-4 rounded-xl border shadow-sm cursor-pointer transition-all duration-150 bg-white flex flex-col gap-2 hover:shadow-lg hover:-translate-y-1 ${
                selectedRole === role.key
                  ? "border-primary bg-primary/10"
                  : selectedLanguage
                  ? "opacity-50 cursor-not-allowed border-muted"
                  : "border-muted"
              }`}
              onClick={() => {
                if (!selectedLanguage) handleRoleSelect(role.key);
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                {role.icon}
                <span className="font-bold text-lg">{role.label}</span>
              </div>
              <div className="text-xs text-muted-foreground mb-1">
                {role.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Technical Language Section */}
      <div className="mb-6">
        <div className="mb-2 text-lg font-semibold">
          Which language or framework do you want to practice?
        </div>
        <div className="grid grid-cols-2 gap-4">
          {ALL_LANGUAGES.map((lang) => {
            const meta = LANGUAGE_META[lang] || { questions: 0 };
            return (
              <div
                key={lang}
                className={`p-4 rounded-xl border shadow-sm cursor-pointer transition-all duration-150 flex flex-col gap-2 bg-white hover:shadow-lg hover:-translate-y-1 ${
                  selectedLanguage === lang
                    ? "border-primary bg-primary/10"
                    : selectedRole
                    ? "opacity-50 cursor-not-allowed border-muted"
                    : "border-muted"
                }`}
                onClick={() => {
                  if (!selectedRole) handleLanguageSelect(lang);
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-lg">{lang}</h3>
                  {meta.badge && (
                    <span className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary font-semibold ml-2">
                      {meta.badge}
                    </span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">
                  Questions: {meta.questions}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
