"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

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

export default function LangQuestionsPage({
  params,
}: {
  params: { lang: string };
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang = decodeURIComponent(params.lang);
  const role = searchParams.get("role");

  // Get questions for the language (optionally filtered by role)
  const questions: { category: string; question: string; role: string }[] =
    (() => {
      const result: { category: string; question: string; role: string }[] = [];
      if (role && MOCK_QUESTIONS[role] && MOCK_QUESTIONS[role][lang]) {
        // Only for the selected role and language
        for (const category of Object.keys(MOCK_QUESTIONS[role][lang])) {
          for (const q of MOCK_QUESTIONS[role][lang][category]) {
            result.push({ category, question: q, role });
          }
        }
      } else {
        // All questions for the language across all roles
        for (const roleKey of Object.keys(MOCK_QUESTIONS)) {
          if (MOCK_QUESTIONS[roleKey][lang]) {
            for (const category of Object.keys(MOCK_QUESTIONS[roleKey][lang])) {
              for (const q of MOCK_QUESTIONS[roleKey][lang][category]) {
                result.push({ category, question: q, role: roleKey });
              }
            }
          }
        }
      }
      return result;
    })();

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-4">
      <button
        className="mb-4 text-primary underline text-sm"
        onClick={() => router.push("/interview-prep")}
      >
        ← Back to Interview Prep
      </button>
      <h1 className="text-2xl font-bold mb-2">
        {lang} Interview Questions{role ? ` (${role})` : ""}
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
                {q.category}{" "}
                {role ? null : (
                  <span className="ml-2 text-xs text-muted-foreground">
                    ({q.role})
                  </span>
                )}
              </div>
              <div className="text-base font-medium">{q.question}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
