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

interface AutoGenerateCoverLetterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (coverLetter: string) => void;
}

export function AutoGenerateCoverLetterModal({
  open,
  onOpenChange,
  onSave,
}: AutoGenerateCoverLetterModalProps) {
  const [jobDesc, setJobDesc] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [coverLetter, setCoverLetter] = React.useState("");

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setCoverLetter(
        `Dear Hiring Manager,\n\nI am excited to apply for this position. My experience and skills closely match your requirements. I am eager to contribute to your team.\n\nBest regards,\nYour Name`
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-full">
        <DialogHeader>
          <DialogTitle>
            <Sparkles className="inline w-5 h-5 mr-2 text-primary" />
            Auto-Generate Cover Letter
          </DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Job Description
          </label>
          <textarea
            className="w-full border rounded p-2 text-sm min-h-[80px]"
            placeholder="Paste the job description here..."
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            disabled={loading}
          />
        </div>
        <Button
          variant="secondary"
          className="mb-4"
          onClick={handleGenerate}
          disabled={loading || !jobDesc}
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Generate Cover Letter
        </Button>
        {loading ? (
          <div className="py-8 text-center text-muted-foreground">
            Generating cover letter...
          </div>
        ) : coverLetter ? (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Generated Cover Letter
            </label>
            <textarea
              className="w-full border rounded p-2 text-sm min-h-[120px]"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />
          </div>
        ) : null}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button
            onClick={() => onSave(coverLetter)}
            disabled={loading || !coverLetter}
            variant="default"
          >
            Save Cover Letter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
