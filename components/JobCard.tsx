"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface JobCardProps {
  jobId: string;
  title: string;
  company: string;
  companyLogoUrl?: string;
  location: string;
  salary?: string;
  tags?: string[];
  description: string;
  datePosted: string;
  onShare?: () => void;
}

export function JobCard({
  jobId,
  title,
  company,
  companyLogoUrl,
  location,
  salary,
  tags = [],
  description,
  datePosted,
  onShare,
}: JobCardProps) {
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-4 p-5 border rounded-lg shadow-sm bg-background">
      {/* Company Logo */}
      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-muted rounded-lg border">
        {companyLogoUrl ? (
          <Image
            src={companyLogoUrl}
            alt={company}
            width={48}
            height={48}
            className="object-cover rounded-lg"
          />
        ) : (
          <span className="text-xl font-bold text-muted-foreground">
            {company.charAt(0)}
          </span>
        )}
      </div>
      {/* Main Info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <h2 className="text-lg font-semibold truncate">{title}</h2>
          <span className="ml-0 md:ml-2 text-sm text-muted-foreground">
            {company}
          </span>
          <span className="ml-0 md:ml-2 text-sm text-muted-foreground">
            {location}
          </span>
          {salary && (
            <span className="ml-0 md:ml-2 text-sm text-green-600 font-medium">
              {salary}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent text-xs px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-muted-foreground">
            Posted {datePosted}
          </span>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="flex flex-col gap-2 items-end mt-3 md:mt-0 md:ml-4">
        <Button
          variant={saved ? "secondary" : "ghost"}
          size="icon"
          aria-label={saved ? "Remove Bookmark" : "Bookmark Job"}
          onClick={() => setSaved((s) => !s)}
          className="rounded-full"
        >
          {saved ? (
            <BookmarkCheck className="w-5 h-5 text-primary" />
          ) : (
            <Bookmark className="w-5 h-5 text-muted-foreground" />
          )}
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={() => router.push(`/recommended-jobs/${jobId}`)}
        >
          View Details
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onShare}
          aria-label="Share Job"
        >
          <Share2 className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
