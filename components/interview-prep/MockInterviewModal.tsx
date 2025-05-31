import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import RoleDropdown from "./RoleDropdown";
import CategoryTabs from "./CategoryTabs";
import CustomQuestionInput from "./CustomQuestionInput";
import SessionHistory from "./SessionHistory";
import QuestionArea from "./QuestionArea";

interface MockInterviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedRole: string;
  onRoleChange: (role: string) => void;
  roles: string[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  categories: string[];
  customQuestions: Record<string, string[]>;
  onAddCustomQuestion: (q: string) => void;
  newCustomQuestion: string;
  setNewCustomQuestion: (q: string) => void;
  showHistory: boolean;
  setShowHistory: (v: boolean) => void;
  sessionHistory: {
    question: string;
    answer: string;
    feedback: string;
    category: string;
    role: string;
  }[];
  questions: string[];
  questionIdx: number;
  answer: string;
  setAnswer: (a: string) => void;
  aiFeedback: string | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  handleNext: () => void;
}

type SavedAnswer = {
  question: string;
  answer: string;
  feedback: string;
  category: string;
  role: string;
  savedAt: string;
};

const SAVED_KEY = "interview-prep-saved-answers";

const MockInterviewModal: React.FC<MockInterviewModalProps> = ({
  open,
  onOpenChange,
  selectedRole,
  onRoleChange,
  roles,
  selectedCategory,
  onCategoryChange,
  categories,
  customQuestions,
  onAddCustomQuestion,
  newCustomQuestion,
  setNewCustomQuestion,
  showHistory,
  setShowHistory,
  sessionHistory,
  questions,
  questionIdx,
  answer,
  setAnswer,
  aiFeedback,
  loading,
  handleSubmit,
  handleNext,
}) => {
  const currentQuestion = questions[questionIdx] || "No questions available.";
  const [activeTab, setActiveTab] = useState<"interview" | "saved">(
    "interview"
  );
  const [savedAnswers, setSavedAnswers] = useState<SavedAnswer[]>([]);

  // Load saved answers from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(SAVED_KEY);
      if (data) setSavedAnswers(JSON.parse(data));
    }
  }, [open]);

  // Save to localStorage when savedAnswers changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(SAVED_KEY, JSON.stringify(savedAnswers));
    }
  }, [savedAnswers]);

  const handleSaveAnswer = () => {
    if (!aiFeedback || !answer.trim()) return;
    setSavedAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion,
        answer,
        feedback: aiFeedback,
        category: selectedCategory,
        role: selectedRole,
        savedAt: new Date().toISOString(),
      },
    ]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-full">
        <DialogHeader>
          <DialogTitle>Mock Interview</DialogTitle>
        </DialogHeader>
        {/* Tab Bar */}
        <div className="flex gap-2 mb-4">
          <Button
            variant={activeTab === "interview" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("interview")}
          >
            Mock Interview
          </Button>
          <Button
            variant={activeTab === "saved" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("saved")}
          >
            Saved Answers
          </Button>
        </div>
        {activeTab === "interview" ? (
          <>
            <RoleDropdown
              roles={roles}
              selectedRole={selectedRole}
              onRoleChange={onRoleChange}
            />
            <CategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={onCategoryChange}
            />
            {selectedCategory === "Custom" && (
              <CustomQuestionInput
                value={newCustomQuestion}
                onChange={setNewCustomQuestion}
                onAdd={() => onAddCustomQuestion(newCustomQuestion)}
              />
            )}
            <SessionHistory
              showHistory={showHistory}
              setShowHistory={setShowHistory}
              sessionHistory={sessionHistory}
            />
            <QuestionArea
              question={currentQuestion}
              answer={answer}
              setAnswer={setAnswer}
              aiFeedback={aiFeedback}
              loading={loading}
              handleSubmit={handleSubmit}
              onSave={handleSaveAnswer}
            />
          </>
        ) : (
          <div className="mb-4">
            {savedAnswers.length === 0 ? (
              <div className="text-muted-foreground text-sm">
                No saved answers yet.
              </div>
            ) : (
              <div className="space-y-4 max-h-72 overflow-y-auto">
                {savedAnswers.map((item, idx) => (
                  <div key={idx} className="border rounded p-3 bg-muted/50">
                    <div className="text-xs text-muted-foreground mb-1">
                      <span className="font-semibold">{item.category}</span>{" "}
                      &middot; <span>{item.role}</span> &middot;{" "}
                      <span>{new Date(item.savedAt).toLocaleString()}</span>
                    </div>
                    <div className="font-medium text-sm mb-1">
                      Q: {item.question}
                    </div>
                    <div className="text-sm mb-1">A: {item.answer}</div>
                    <div className="text-xs text-muted-foreground">
                      <span className="font-semibold">AI Feedback:</span>{" "}
                      {item.feedback}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        <DialogFooter>
          {activeTab === "interview" && (
            <Button
              variant="secondary"
              onClick={handleNext}
              disabled={loading || !aiFeedback}
            >
              Next Question
            </Button>
          )}
          <DialogClose asChild>
            <Button variant="ghost">End Interview</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MockInterviewModal;
