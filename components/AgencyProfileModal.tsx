import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { AgencyCardProps } from "./AgencyCard";
import Image from "next/image";

interface AgencyProfileModalProps extends AgencyCardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contactEmail?: string;
  contactPhone?: string;
  website?: string;
}

export function AgencyProfileModal({
  open,
  onOpenChange,
  logoUrl,
  name,
  description,
  location,
  rating,
  tags = [],
  contactEmail,
  contactPhone,
  website,
}: AgencyProfileModalProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="max-w-md w-full">
        <SheetHeader>
          <SheetTitle>{name}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center mt-4">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={name}
              width={80}
              height={80}
              className="rounded-full object-cover border mb-2"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-2xl font-bold border mb-2">
              {name.charAt(0)}
            </div>
          )}
          <div className="flex gap-2 mt-2">
            <span className="text-sm text-muted-foreground">{location}</span>
            <span className="text-sm text-yellow-500 font-medium">
              ★ {rating.toFixed(1)}
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
        </div>
        <div className="mt-6 space-y-2 px-4">
          {contactEmail && (
            <div className="text-sm">
              <span className="font-medium">Email:</span> {contactEmail}
            </div>
          )}
          {contactPhone && (
            <div className="text-sm">
              <span className="font-medium">Phone:</span> {contactPhone}
            </div>
          )}
          {website && (
            <div className="text-sm">
              <span className="font-medium">Website:</span>{" "}
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                {website}
              </a>
            </div>
          )}
        </div>
        <div className="px-4">
          <SheetClose asChild>
            <Button className="mt-8 w-full" variant="default">
              Close
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
