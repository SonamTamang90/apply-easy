import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function CardSkeleton() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-5 border rounded-lg shadow-sm bg-background">
      <div className="flex-shrink-0">
        <Skeleton className="w-16 h-16 rounded-full" />
      </div>
      <div className="flex-1 min-w-0 w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-20 md:ml-2" />
          <Skeleton className="h-4 w-16 md:ml-2" />
        </div>
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-2/3 mt-2" />
        <div className="flex flex-wrap gap-2 mt-2">
          <Skeleton className="h-5 w-14 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
      </div>
      <div className="mt-3 md:mt-0 md:ml-4 w-28">
        <Skeleton className="h-9 w-full rounded-md" />
      </div>
    </div>
  );
}
