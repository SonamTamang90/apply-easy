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

const statusOptions = ["All", "Applied", "Interview", "Offer", "Rejected"];
const sortOptions = ["Date Applied", "Status", "Company"];

export function ApplicationsSearchFilterBar() {
  const [search, setSearch] = React.useState("");
  const [status, setStatus] = React.useState<string>(statusOptions[0]);
  const [sort, setSort] = React.useState<string>(sortOptions[0]);
  const [openDropdown, setOpenDropdown] = React.useState<
    null | "status" | "sort"
  >(null);

  const clearFilters = () => {
    setSearch("");
    setStatus(statusOptions[0]);
    setSort(sortOptions[0]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-end mb-6">
      <div className="flex-1">
        <Input
          placeholder="Search applications by job title or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <DropdownMenu
        open={openDropdown === "status"}
        onOpenChange={(open) => setOpenDropdown(open ? "status" : null)}
      >
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full md:w-40 flex items-center justify-between"
          >
            <span>{status}</span>
            {openDropdown === "status" ? (
              <ChevronUp className="ml-2 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-2 w-4 h-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {statusOptions.map((s) => (
            <DropdownMenuItem
              key={s}
              onClick={() => {
                setStatus(s);
                setOpenDropdown(null);
              }}
            >
              {s}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu
        open={openDropdown === "sort"}
        onOpenChange={(open) => setOpenDropdown(open ? "sort" : null)}
      >
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full md:w-40 flex items-center justify-between"
          >
            <span>{sort}</span>
            {openDropdown === "sort" ? (
              <ChevronUp className="ml-2 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-2 w-4 h-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Sort By</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {sortOptions.map((s) => (
            <DropdownMenuItem
              key={s}
              onClick={() => {
                setSort(s);
                setOpenDropdown(null);
              }}
            >
              {s}
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
