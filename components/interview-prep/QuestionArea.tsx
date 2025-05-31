import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ReactMediaRecorder,
  ReactMediaRecorderRenderProps,
} from "react-media-recorder";

// TypeScript: Add types for SpeechRecognition and SpeechRecognitionEvent if not present
// These are available in the DOM lib for most TS setups, but if not, fallback to unknown and cast as needed
// @ts-expect-error: SpeechRecognition may not exist on window in all TS configs
const SpeechRecognition =
  typeof window !== "undefined" &&
  ((
    window as unknown as {
      SpeechRecognition?: any;
      webkitSpeechRecognition?: any;
    }
  ).SpeechRecognition ||
    (window as unknown as { webkitSpeechRecognition?: any })
      .webkitSpeechRecognition);
// @ts-expect-error: webkitSpeechRecognition may not exist on window in all TS configs
const isSpeechSupported =
  typeof window !== "undefined" &&
  ("webkitSpeechRecognition" in (window as any) ||
    "SpeechRecognition" in (window as any));

interface QuestionAreaProps {
  question: string;
  answer: string;
  setAnswer: (a: string) => void;
  aiFeedback: string | null;
  loading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  onSave?: () => void;
}

const QuestionArea: React.FC<QuestionAreaProps> = ({
  question,
  answer,
  setAnswer,
  aiFeedback,
  loading,
  handleSubmit,
  onSave,
}) => {
  // Speech-to-text logic
  const recognitionRef = useRef<unknown>(null);

  const handleStartTranscription = () => {
    if (!isSpeechSupported || !SpeechRecognition) return;
    // @ts-expect-error: SpeechRecognition constructor may not be typed
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event: unknown) => {
      // event: SpeechRecognitionEvent, fallback to unknown for compatibility
      const transcript = (event as any).results[0][0].transcript;
      setAnswer(transcript);
    };
    recognitionRef.current = recognition;
    recognition.start();
  };
  const handleStopTranscription = () => {
    if (
      recognitionRef.current &&
      typeof (recognitionRef.current as any).stop === "function"
    ) {
      (recognitionRef.current as any).stop();
    }
  };

  return (
    <div className="mb-4">
      <div className="font-medium mb-2">Q: {question}</div>
      {/* Voice Recording & Speech-to-Text Controls */}
      <div className="flex flex-col gap-2 mb-2">
        <ReactMediaRecorder
          audio
          render={({
            status,
            startRecording,
            stopRecording,
            mediaBlobUrl,
          }: ReactMediaRecorderRenderProps) => (
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  onClick={startRecording}
                  disabled={status === "recording"}
                >
                  Start Recording
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="destructive"
                  onClick={stopRecording}
                  disabled={status !== "recording"}
                >
                  Stop Recording
                </Button>
                <span className="text-xs text-muted-foreground">
                  {status === "recording"
                    ? "Recording..."
                    : status === "stopped"
                    ? "Stopped"
                    : "Idle"}
                </span>
              </div>
              {mediaBlobUrl && (
                <audio controls src={mediaBlobUrl} className="w-full" />
              )}
            </div>
          )}
        />
        {/* Speech-to-Text Controls */}
        {isSpeechSupported && (
          <div className="flex gap-2 items-center">
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={handleStartTranscription}
            >
              Start Speech-to-Text
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={handleStopTranscription}
            >
              Stop Speech-to-Text
            </Button>
          </div>
        )}
      </div>
      {/* Existing answer textarea and submit */}
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border rounded p-2 text-sm min-h-[80px]"
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={loading || !!aiFeedback}
          required
        />
        <Button
          type="submit"
          className="mt-2"
          disabled={loading || !!aiFeedback || !answer.trim()}
        >
          {loading ? "Analyzing..." : "Submit Answer"}
        </Button>
      </form>
      {aiFeedback && (
        <div className="mt-4 p-3 rounded bg-muted text-sm flex flex-col gap-2">
          <div>
            <span className="font-semibold">AI Feedback:</span> {aiFeedback}
          </div>
          {onSave && (
            <Button size="sm" variant="secondary" onClick={onSave}>
              Save Answer
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionArea;
