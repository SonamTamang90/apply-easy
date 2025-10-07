import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ReactNode } from "react";

export interface AvatarGroupUser {
  src: string;
  alt: string;
}

export interface AvatarGroupProps {
  users: AvatarGroupUser[];
  max?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
  countText?: string;
  description?: ReactNode;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-11 h-11",
  lg: "w-14 h-14",
};

export function AvatarGroup({
  users,
  max = 4,
  size = "md",
  showCount = true,
  countText,
  description,
}: AvatarGroupProps) {
  const displayUsers = users.slice(0, max);
  const remainingCount = users.length - max;
  const sizeClass = sizeClasses[size];

  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex -space-x-2">
        {displayUsers.map((user, index) => (
          <Avatar key={index} className={`${sizeClass} border-2 border-white`}>
            <AvatarImage src={user.src} alt={user.alt} />
          </Avatar>
        ))}
        {showCount && remainingCount > 0 && (
          <Avatar className={`${sizeClass} bg-black text-white border-2 border-white`}>
            <AvatarFallback className="bg-black text-white text-sm font-medium">
              {countText || `${remainingCount}+`}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
      {description && (
        <div className="text-base text-muted-foreground">{description}</div>
      )}
    </div>
  );
}
