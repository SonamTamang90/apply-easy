"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp } from "lucide-react";

const industries = ["Tech", "Healthcare", "Finance", "Education", "Retail"];
const locations = ["Remote", "Sydney", "Melbourne", "Brisbane", "Perth"];
const ratings = ["4+ Stars", "3+ Stars", "2+ Stars"];

export function AgencySearchFilterBar() {
  const [search, setSearch] = React.useState("");
  const [industry, setIndustry] = React.useState<string | null>(null);
  const [location, setLocation] = React.useState<string | null>(null);
  const [rating, setRating] = React.useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = React.useState<
    null | "industry" | "location" | "rating"
  >(null);

  const clearFilters = () => {
    setSearch("");
    setIndustry(null);
    setLocation(null);
    setRating(null);
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-end mb-6">
      <div className="flex-1">
        <Input
          placeholder="Search agencies by name, industry, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <DropdownMenu
        open={openDropdown === "industry"}
        onOpenChange={(open) => setOpenDropdown(open ? "industry" : null)}
      >
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full md:w-40 flex items-center justify-between"
          >
            <span>{industry || "Industry"}</span>
            {openDropdown === "industry" ? (
              <ChevronUp className="ml-2 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-2 w-4 h-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Industry</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {industries.map((i) => (
            <DropdownMenuItem
              key={i}
              onClick={() => {
                setIndustry(i);
                setOpenDropdown(null);
              }}
            >
              {i}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu
        open={openDropdown === "location"}
        onOpenChange={(open) => setOpenDropdown(open ? "location" : null)}
      >
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full md:w-40 flex items-center justify-between"
          >
            <span>{location || "Location"}</span>
            {openDropdown === "location" ? (
              <ChevronUp className="ml-2 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-2 w-4 h-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Location</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {locations.map((l) => (
            <DropdownMenuItem
              key={l}
              onClick={() => {
                setLocation(l);
                setOpenDropdown(null);
              }}
            >
              {l}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu
        open={openDropdown === "rating"}
        onOpenChange={(open) => setOpenDropdown(open ? "rating" : null)}
      >
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full md:w-32 flex items-center justify-between"
          >
            <span>{rating || "Rating"}</span>
            {openDropdown === "rating" ? (
              <ChevronUp className="ml-2 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-2 w-4 h-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Rating</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {ratings.map((r) => (
            <DropdownMenuItem
              key={r}
              onClick={() => {
                setRating(r);
                setOpenDropdown(null);
              }}
            >
              {r}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant="secondary"
        onClick={clearFilters}
        className="w-full md:w-auto"
      >
        Clear Filters
      </Button>
    </div>
  );
}
