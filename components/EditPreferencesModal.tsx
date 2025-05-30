"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Preferences {
  role: string;
  location: string;
  experience: string;
  jobType: string;
  salaryRange: string;
  industries: string[];
  profileImageUrl: string;
}

interface EditPreferencesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialPreferences: Preferences;
  onSave: (prefs: Preferences) => void;
}

export function EditPreferencesModal({
  open,
  onOpenChange,
  initialPreferences,
  onSave,
}: EditPreferencesModalProps) {
  const [form, setForm] = useState<Preferences>(initialPreferences);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleIndustriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      industries: e.target.value.split(",").map((s) => s.trim()),
    });
  };

  const handleSave = () => {
    onSave(form);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle>Edit Job Preferences</DialogTitle>
          <DialogDescription>
            Update your job search preferences to get better recommendations.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <Input name="role" value={form.role} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <Input
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Experience</label>
            <Input
              name="experience"
              value={form.experience}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Job Type</label>
            <Input
              name="jobType"
              value={form.jobType}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Salary Range
            </label>
            <Input
              name="salaryRange"
              value={form.salaryRange}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Industries (comma separated)
            </label>
            <Input
              name="industries"
              value={form.industries.join(", ")}
              onChange={handleIndustriesChange}
            />
          </div>
        </div>
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSave} variant="default">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
