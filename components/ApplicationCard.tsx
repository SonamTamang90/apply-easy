import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface ApplicationCardProps {
  jobTitle: string;
  company: string;
  companyLogoUrl?: string;
  location: string;
  dateApplied: string;
  status: "Applied" | "Interview" | "Offer" | "Rejected";
  tags?: string[];
  onViewDetails?: () => void;
  onWithdraw?: () => void;
}

export function ApplicationCard({
  jobTitle,
  company,
  companyLogoUrl,
  location,
  dateApplied,
  status,
  tags = [],
  onViewDetails,
  onWithdraw,
}: ApplicationCardProps) {
  const statusColor = {
    Applied: "bg-blue-100 text-blue-700",
    Interview: "bg-yellow-100 text-yellow-800",
    Offer: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  }[status];

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
          <h2 className="text-lg font-semibold truncate">{jobTitle}</h2>
          <span className="ml-0 md:ml-2 text-sm text-muted-foreground">
            {company}
          </span>
          <span className="ml-0 md:ml-2 text-sm text-muted-foreground">
            {location}
          </span>
          <span
            className={`ml-0 md:ml-2 text-xs px-2 py-0.5 rounded-full font-medium ${statusColor}`}
          >
            {status}
          </span>
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
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-muted-foreground">
            Applied {dateApplied}
          </span>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="flex flex-col gap-2 items-end mt-3 md:mt-0 md:ml-4">
        <Button
          variant="outline"
          size="sm"
          className="font-medium rounded-lg shadow-sm hover:bg-accent"
          onClick={onViewDetails}
        >
          View Details
        </Button>
        <Button
          variant="destructive"
          size="sm"
          className="font-medium rounded-lg shadow-sm bg-red-100 text-red-700 hover:bg-red-200"
          onClick={onWithdraw}
        >
          Withdraw
        </Button>
      </div>
    </div>
  );
}
