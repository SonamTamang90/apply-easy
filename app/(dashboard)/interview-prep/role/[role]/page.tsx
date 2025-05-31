"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// You may want to move this to a shared file in the future
const MOCK_QUESTIONS: Record<
  string,
  Record<string, Record<string, string[]>>
> = {
  Frontend: {
    JavaScript: {
      Behavioral: ["Tell me about a time you improved a UI component."],
      Technical: ["Explain event delegation in JavaScript."],
      "Company-specific": ["How would you improve our website's performance?"],
      Custom: [],
    },
    React: {
      Behavioral: ["Describe a time you migrated a project to React."],
      Technical: ["What are React hooks?"],
      "Company-specific": ["How would you structure a large React app?"],
      Custom: [],
    },
    // ...other languages
  },
  Backend: {
    Python: {
      Behavioral: ["Tell me about a time you optimized a backend process."],
      Technical: [
        "Explain the GIL in Python.",
        "How do you handle concurrency?",
      ],
      "Company-specific": ["How would you scale our backend services?"],
      Custom: [],
    },
    Node: {
      Behavioral: ["Describe a time you debugged a Node.js server issue."],
      Technical: ["What is the event loop in Node.js?"],
      "Company-specific": ["How would you structure a Node.js API?"],
      Custom: [],
    },
    // ...other languages
  },
  Fullstack: {
    JavaScript: {
      Behavioral: ["How do you balance frontend and backend work?"],
      Technical: ["How do you share code between frontend and backend?"],
      "Company-specific": ["How would you architect a fullstack app?"],
      Custom: [],
    },
    // ...other languages
  },
  Mobile: {
    "React Native": {
      Behavioral: ["Tell me about a time you published a mobile app."],
      Technical: ["How does React Native bridge work?"],
      "Company-specific": ["How would you optimize app startup time?"],
      Custom: [],
    },
    // ...other languages
  },
};

export default function RoleQuestionsPage({
  params,
}: {
  params: { role: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = decodeURIComponent(params.role);
  const lang = searchParams.get("lang");

  // Get questions for the role (optionally filtered by language)
  const questions: { category: string; question: string }[] = (() => {
    if (MOCK_QUESTIONS[role]) {
      if (lang && MOCK_QUESTIONS[role][lang]) {
        // Only for the selected language
        return Object.entries(MOCK_QUESTIONS[role][lang]).flatMap(
          ([category, arr]) => arr.map((q) => ({ category, question: q }))
        );
      } else {
        // All questions for the role (across all languages)
        return Object.values(MOCK_QUESTIONS[role]).flatMap((catObj) =>
          Object.entries(catObj).flatMap(([category, arr]) =>
            arr.map((q) => ({ category, question: q }))
          )
        );
      }
    }
    return [];
  })();

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/interview-prep">
              Interview Prep
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{role}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <button
        className="mb-4 text-primary underline text-sm block sm:hidden"
        onClick={() => router.push("/interview-prep")}
      >
        ← Back to Interview Prep
      </button>
      <h1 className="text-2xl font-bold mb-2">
        {lang ? `${lang} Interview Questions` : `${role} Interview Questions`}
      </h1>
      {questions.length === 0 ? (
        <div className="text-muted-foreground">
          No questions found for this selection.
        </div>
      ) : (
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <div key={idx} className="p-4 border rounded bg-muted/50">
              <div className="text-xs text-muted-foreground mb-1 font-semibold">
                {q.category}
              </div>
              <div className="text-base font-medium">{q.question}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
