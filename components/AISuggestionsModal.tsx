import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface AISuggestionsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  document: { name: string } | null;
  onAccept: (suggestion: string) => void;
}

export function AISuggestionsModal({
  open,
  onOpenChange,
  document,
  onAccept,
}: AISuggestionsModalProps) {
  const [loading, setLoading] = React.useState(true);
  const [suggestion, setSuggestion] = React.useState<string>("");

  React.useEffect(() => {
    if (open && document) {
      setLoading(true);
      // Simulate AI call
      setTimeout(() => {
        setSuggestion(
          `AI Suggestion for ${document.name}:\n- Add more quantifiable achievements.\n- Use more action verbs.\n- Tailor your summary to the job description.`
        );
        setLoading(false);
      }, 1200);
    }
  }, [open, document]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle>
            <Sparkles className="inline w-5 h-5 mr-2 text-primary" />
            AI Suggestions
          </DialogTitle>
        </DialogHeader>
        {loading ? (
          <div className="py-8 text-center text-muted-foreground">
            Generating suggestions...
          </div>
        ) : (
          <div className="whitespace-pre-line text-sm text-muted-foreground mb-4">
            {suggestion}
          </div>
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Dismiss</Button>
          </DialogClose>
          <Button
            onClick={() => onAccept(suggestion)}
            disabled={loading}
            variant="default"
          >
            Accept Suggestion
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
