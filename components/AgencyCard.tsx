import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkCheck } from "lucide-react";
import Image from "next/image";

export interface AgencyCardProps {
  logoUrl?: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  tags?: string[];
  onViewProfile?: () => void;
}

export function AgencyCard({
  logoUrl,
  name,
  description,
  location,
  rating,
  tags = [],
  onViewProfile,
}: AgencyCardProps) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-4 p-5 pt-8 border rounded-lg shadow-sm bg-background">
      {/* Bookmark Button - use shadcn Button and place outside main content */}
      <div className="absolute top-3 right-3 z-10">
        <Button
          variant={saved ? "secondary" : "ghost"}
          size="icon"
          aria-label={saved ? "Remove Bookmark" : "Bookmark Agency"}
          onClick={() => setSaved((s) => !s)}
          className="rounded-full"
        >
          {saved ? (
            <BookmarkCheck className="w-5 h-5 text-primary" />
          ) : (
            <Bookmark className="w-5 h-5 text-muted-foreground" />
          )}
        </Button>
      </div>
      <div className="flex-shrink-0">
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt={name}
            width={64}
            height={64}
            className="rounded-full object-cover border"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-xl font-bold border">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <h2 className="text-lg font-semibold truncate">{name}</h2>
          <span className="ml-0 md:ml-2 text-sm text-muted-foreground">
            {location}
          </span>
          <span className="ml-0 md:ml-2 text-sm text-yellow-500 font-medium">
            ★ {rating.toFixed(1)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {description}
        </p>
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
      </div>
      <div className="mt-3 md:mt-0 md:ml-4 pt-6">
        <Button variant="secondary" onClick={onViewProfile}>
          View Profile
        </Button>
      </div>
    </div>
  );
}
