"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProfileSummaryBarProps {
  role: string;
  location: string;
  experience: string;
  jobType: string;
  salaryRange: string;
  industries: string[];
  onEdit?: () => void;
  profileImageUrl?: string;
}

export function ProfileSummaryBar({
  role,
  location,
  experience,
  jobType,
  salaryRange,
  industries,
  onEdit,
  profileImageUrl,
}: ProfileSummaryBarProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 border rounded-lg bg-muted/40 mb-6">
      {/* Profile Image */}
      <div className="flex-shrink-0 flex items-center justify-center">
        {profileImageUrl && (
          <Image
            src={profileImageUrl}
            alt="Profile"
            width={96}
            height={96}
            className="rounded-lg object-cover border shadow-sm"
          />
        )}
      </div>
      {/* Main Info */}
      <div className="flex-1 flex flex-col gap-2 min-w-0">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-xl font-semibold truncate">{role}</span>
          <span className="text-muted-foreground text-sm">{location}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-sm text-muted-foreground">
            {experience} experience
          </span>
          <span className="text-sm text-muted-foreground">{jobType}</span>
          <span className="text-sm text-muted-foreground">{salaryRange}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <span className="text-sm font-medium text-muted-foreground">
            Industries:
          </span>
          {industries.map((ind) => (
            <span
              key={ind}
              className="bg-background px-2 py-0.5 rounded text-sm border"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
      {/* Edit Button */}
      <div className="flex-shrink-0 flex items-center justify-center mt-4 md:mt-0">
        <Button
          variant="outline"
          onClick={onEdit}
          className="whitespace-nowrap"
        >
          Edit Preferences
        </Button>
      </div>
    </div>
  );
}
