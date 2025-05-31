import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SessionHistoryProps {
  showHistory: boolean;
  setShowHistory: (v: boolean) => void;
  sessionHistory: {
    question: string;
    answer: string;
    feedback: string;
    category: string;
    role: string;
  }[];
}

const SessionHistory: React.FC<SessionHistoryProps> = ({
  showHistory,
  setShowHistory,
  sessionHistory,
}) => {
  return (
    <div className="mb-4">
      <button
        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-2"
        onClick={() => setShowHistory(!showHistory)}
        type="button"
      >
        {showHistory ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
        Session History
        <span className="ml-2 text-xs text-muted-foreground">
          ({sessionHistory.length})
        </span>
      </button>
      {showHistory && sessionHistory.length > 0 && (
        <div className="border rounded p-2 max-h-40 overflow-y-auto bg-muted/50 mb-2">
          {sessionHistory.map((item, idx) => (
            <div key={idx} className="mb-3 last:mb-0">
              <div className="text-xs text-muted-foreground mb-1">
                <span className="font-semibold">{item.category}</span> &middot;{" "}
                <span>{item.role}</span>
              </div>
              <div className="font-medium text-sm mb-1">Q: {item.question}</div>
              <div className="text-sm mb-1">A: {item.answer}</div>
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold">AI Feedback:</span>{" "}
                {item.feedback}
              </div>
            </div>
          ))}
        </div>
      )}
      {showHistory && sessionHistory.length === 0 && (
        <div className="text-xs text-muted-foreground mb-2">
          No answers yet.
        </div>
      )}
    </div>
  );
};

export default SessionHistory;
