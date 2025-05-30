"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { ProfileSummaryBar } from "@/components/ProfileSummaryBar";
import { EditPreferencesModal } from "@/components/EditPreferencesModal";
import { JobFiltersBar } from "@/components/JobFiltersBar";

const initialPreferences = {
  role: "Frontend Developer",
  location: "Sydney, Australia",
  experience: "3+ years",
  jobType: "Full-time, Remote",
  salaryRange: "$90k - $120k",
  industries: ["Tech", "SaaS"],
  profileImageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
};

type Preferences = typeof initialPreferences;

const RecommendedJobs = () => {
  const [editOpen, setEditOpen] = React.useState(false);
  const [preferences, setPreferences] =
    React.useState<Preferences>(initialPreferences);

  const handleSavePreferences = (newPrefs: Preferences) => {
    setPreferences({ ...preferences, ...newPrefs });
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold tracking-tight">Recommended Jobs</h1>
      <p className="text-muted-foreground mt-2 mb-4">
        Jobs matched to your profile, experience, and preferences.
      </p>
      <Separator className="my-4" />
      <ProfileSummaryBar {...preferences} onEdit={() => setEditOpen(true)} />
      <JobFiltersBar />
      <EditPreferencesModal
        open={editOpen}
        onOpenChange={setEditOpen}
        initialPreferences={preferences}
        onSave={handleSavePreferences}
      />
    </div>
  );
};

export default RecommendedJobs;
