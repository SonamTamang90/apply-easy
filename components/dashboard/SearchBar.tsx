import React from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder,
}: SearchBarProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search..."}
        className="h-10 rounded-full px-4"
      />
    </div>
  );
}
