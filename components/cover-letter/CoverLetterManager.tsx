"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { coverLetterSchema } from "@/lib/validations";

const steps = ["Job Details", "Prompts", "Review & Generate", "Save"];
type CoverLetterForm = z.infer<typeof coverLetterSchema>;

const defaultValues: CoverLetterForm = {
  jobTitle: "",
  companyName: "",
  jobDescription: "",
  interest: "",
  experience: "",
  fit: "",
  generated: "",
  versionName: "",
};

const CoverLetterManager = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [coverLetters, setCoverLetters] = useState<CoverLetterForm[]>([]);
  const [viewIndex, setViewIndex] = useState<number | null>(null);

  const form = useForm<CoverLetterForm>({
    resolver: zodResolver(coverLetterSchema),
    defaultValues,
    mode: "onTouched",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    reset,
  } = form;

  const nextStep = async () => {
    let valid = false;
    if (step === 0) {
      valid = await trigger(["jobTitle", "companyName"]);
    } else if (step === 1) {
      valid = await trigger(["interest", "experience", "fit"]);
    } else if (step === 3) {
      valid = await trigger(["versionName"]);
    } else {
      valid = true;
    }
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));
  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (!val) {
      reset(defaultValues);
      setStep(0);
    }
  };
  const onSubmit = (data: CoverLetterForm) => {
    setCoverLetters((prev) => [...prev, data]);
    handleOpenChange(false);
  };
  const handleDelete = (idx: number) => {
    setCoverLetters((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Cover Letters</h2>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button className="mb-4">Create New Cover Letter</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{steps[step]}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-4">
              {step === 0 && (
                <div className="space-y-4">
                  <div>
                    <Input {...register("jobTitle")} placeholder="Job Title" />
                    {errors.jobTitle && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.jobTitle.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      {...register("companyName")}
                      placeholder="Company Name"
                    />
                    {errors.companyName && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.companyName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <textarea
                      {...register("jobDescription")}
                      placeholder="Job Description (optional)"
                      className="w-full rounded border p-2 min-h-[80px]"
                    />
                  </div>
                </div>
              )}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <textarea
                      {...register("interest")}
                      placeholder="Why are you interested in this role?"
                      className="w-full rounded border p-2 min-h-[60px]"
                    />
                    {errors.interest && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.interest.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <textarea
                      {...register("experience")}
                      placeholder="What relevant experience do you have?"
                      className="w-full rounded border p-2 min-h-[60px]"
                    />
                    {errors.experience && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.experience.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <textarea
                      {...register("fit")}
                      placeholder="What makes you a good fit?"
                      className="w-full rounded border p-2 min-h-[60px]"
                    />
                    {errors.fit && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.fit.message}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="bg-muted rounded p-2 text-sm">
                    <div>
                      <b>Job Title:</b> {getValues("jobTitle")}
                    </div>
                    <div>
                      <b>Company:</b> {getValues("companyName")}
                    </div>
                    {getValues("jobDescription") && (
                      <div>
                        <b>Description:</b> {getValues("jobDescription")}
                      </div>
                    )}
                    <div>
                      <b>Interest:</b> {getValues("interest")}
                    </div>
                    <div>
                      <b>Experience:</b> {getValues("experience")}
                    </div>
                    <div>
                      <b>Fit:</b> {getValues("fit")}
                    </div>
                  </div>
                  <textarea
                    {...register("generated")}
                    placeholder="Generated cover letter (placeholder)"
                    className="w-full rounded border p-2 min-h-[120px]"
                  />
                </div>
              )}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <Input
                      {...register("versionName")}
                      placeholder="Name this version (e.g. Google SWE)"
                    />
                    {errors.versionName && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.versionName.message}
                      </p>
                    )}
                  </div>
                  <div className="bg-muted rounded p-2 text-sm whitespace-pre-wrap">
                    {getValues("generated") || "No cover letter generated yet."}
                  </div>
                </div>
              )}
            </div>
            <DialogFooter>
              {step > 0 && (
                <Button variant="outline" onClick={prevStep} type="button">
                  Back
                </Button>
              )}
              {step < steps.length - 1 ? (
                <Button onClick={nextStep} type="button">
                  Next
                </Button>
              ) : (
                <Button type="submit">Save</Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      <div className="border rounded p-4 bg-muted mt-6">
        {coverLetters.length === 0 ? (
          <p className="text-muted-foreground">No cover letters yet.</p>
        ) : (
          <ul className="space-y-4">
            {coverLetters.map((cl, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between gap-2 bg-background rounded p-3 border"
              >
                <div>
                  <div className="font-semibold">{cl.versionName}</div>
                  <div className="text-sm text-muted-foreground">
                    {cl.jobTitle} @ {cl.companyName}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setViewIndex(idx)}
                  >
                    View
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(idx)}
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* View Modal */}
      <Dialog
        open={viewIndex !== null}
        onOpenChange={(v) => (v ? null : setViewIndex(null))}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cover Letter Details</DialogTitle>
          </DialogHeader>
          {viewIndex !== null && (
            <div className="space-y-2">
              <div className="font-semibold">
                {coverLetters[viewIndex].versionName}
              </div>
              <div className="text-sm text-muted-foreground">
                {coverLetters[viewIndex].jobTitle} @{" "}
                {coverLetters[viewIndex].companyName}
              </div>
              <div className="mt-2 whitespace-pre-wrap text-sm bg-muted rounded p-2">
                {coverLetters[viewIndex].generated ||
                  "No cover letter generated yet."}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CoverLetterManager;
