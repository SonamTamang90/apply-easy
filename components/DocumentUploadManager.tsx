"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Upload,
  Eye,
  Download,
  Trash2,
  Star,
  StarOff,
  Sparkles,
} from "lucide-react";
import { AISuggestionsModal } from "@/components/AISuggestionsModal";
import { AutoGenerateCoverLetterModal } from "@/components/AutoGenerateCoverLetterModal";
import { motion } from "framer-motion";

interface Document {
  id: string;
  name: string;
  type: string;
  uploadedAt: string;
  isDefault: boolean;
}

const mockDocuments: Document[] = [
  {
    id: "1",
    name: "Resume.pdf",
    type: "PDF",
    uploadedAt: "2024-06-01",
    isDefault: true,
  },
  {
    id: "2",
    name: "CoverLetter.docx",
    type: "DOCX",
    uploadedAt: "2024-05-28",
    isDefault: false,
  },
];

export function DocumentUploadManager() {
  const [documents, setDocuments] = React.useState<Document[]>(mockDocuments);
  const [dragActive, setDragActive] = React.useState(false);
  const [aiModalOpen, setAIModalOpen] = React.useState(false);
  const [aiDoc, setAIDoc] = React.useState<Document | null>(null);
  const [autoGenOpen, setAutoGenOpen] = React.useState(false);

  // Handlers (mocked for now)
  const handleUpload = () => {
    // TODO: Add real upload logic
    alert("File upload not implemented in mock");
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    // TODO: Add real upload logic
    alert("File drop not implemented in mock");
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
  };
  const handleView = (doc: Document) => alert(`View: ${doc.name}`);
  const handleDownload = (doc: Document) => alert(`Download: ${doc.name}`);
  const handleDelete = (doc: Document) =>
    setDocuments((docs) => docs.filter((d) => d.id !== doc.id));
  const handleSetDefault = (doc: Document) =>
    setDocuments((docs) =>
      docs.map((d) => ({ ...d, isDefault: d.id === doc.id }))
    );

  // AI Suggestions
  const handleAISuggestions = (doc: Document) => {
    setAIDoc(doc);
    setAIModalOpen(true);
  };
  const handleAIAccept = (suggestion: string) => {
    setAIModalOpen(false);
    // TODO: Apply suggestion to document
    alert("Suggestion accepted: " + suggestion);
  };

  // Auto-Generate Cover Letter
  const handleAutoGenSave = (coverLetter: string) => {
    setAutoGenOpen(false);
    // TODO: Save generated cover letter as new document
    alert("Cover letter saved!\n" + coverLetter);
  };

  return (
    <div>
      <AutoGenerateCoverLetterModal
        open={autoGenOpen}
        onOpenChange={setAutoGenOpen}
        onSave={handleAutoGenSave}
      />
      <AISuggestionsModal
        open={aiModalOpen}
        onOpenChange={setAIModalOpen}
        document={aiDoc}
        onAccept={handleAIAccept}
      />
      <div className="flex justify-end mb-4">
        <motion.div
          initial={{ background: "linear-gradient(90deg, #6EE7B7, #3B82F6)" }}
          animate={{
            background: [
              "linear-gradient(90deg, #6EE7B7, #3B82F6)",
              "linear-gradient(90deg, #A78BFA, #F472B6)",
              "linear-gradient(90deg, #F472B6, #FBBF24)",
              "linear-gradient(90deg, #6EE7B7, #3B82F6)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ borderRadius: 8, padding: 2, display: "inline-block" }}
        >
          <Button
            variant="secondary"
            onClick={() => setAutoGenOpen(true)}
            className="flex items-center gap-2 relative overflow-hidden bg-transparent text-white shadow-lg"
            style={{
              background: "transparent",
              boxShadow: "0 2px 16px 0 rgba(59,130,246,0.15)",
            }}
          >
            <span
              className="absolute inset-0 z-0"
              style={{
                background: "inherit",
                borderRadius: 6,
                filter: "blur(2px)",
                opacity: 0.7,
              }}
              aria-hidden="true"
            ></span>
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Auto-Generate Cover Letter
            </span>
          </Button>
        </motion.div>
      </div>
      {/* Drag & Drop Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-colors ${
          dragActive ? "border-primary bg-muted/50" : "border-muted"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
        <p className="mb-2 text-sm text-muted-foreground">
          Drag & drop your resume or cover letter here, or
        </p>
        <label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleUpload}
          />
          <Button variant="secondary" type="button">
            Upload File
          </Button>
        </label>
      </div>
      {/* File List */}
      <div className="mt-8">
        {documents.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <div className="text-4xl mb-2">📄</div>
            <div className="text-lg font-medium mb-1">
              No documents uploaded
            </div>
            <div className="text-sm">
              Upload your resume and cover letters to get started.
            </div>
          </div>
        ) : (
          <div className="divide-y border rounded-lg bg-background overflow-hidden">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center gap-4 px-4 py-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium truncate">{doc.name}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {doc.type}
                    </span>
                    {doc.isDefault && (
                      <span className="text-xs text-primary font-semibold ml-2">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Uploaded {doc.uploadedAt}
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleView(doc)}
                    aria-label="View"
                  >
                    <Eye className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDownload(doc)}
                    aria-label="Download"
                  >
                    <Download className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(doc)}
                    aria-label="Delete"
                  >
                    <Trash2 className="w-5 h-5 text-destructive" />
                  </Button>
                  <Button
                    variant={doc.isDefault ? "secondary" : "outline"}
                    size="icon"
                    onClick={() => handleSetDefault(doc)}
                    aria-label={
                      doc.isDefault ? "Unset Default" : "Set as Default"
                    }
                  >
                    {doc.isDefault ? (
                      <Star className="w-5 h-5 text-primary" />
                    ) : (
                      <StarOff className="w-5 h-5 text-muted-foreground" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleAISuggestions(doc)}
                    aria-label="AI Suggestions"
                  >
                    <Sparkles className="w-5 h-5 text-primary" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
