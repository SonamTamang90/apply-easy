import React, { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sortOptions = ["Relevance", "Date", "Salary"];
const jobTypes = ["Full-time", "Part-time", "Remote", "Contract"];
const industries = ["Tech", "Finance", "Healthcare", "Education", "Retail"];
const experienceLevels = ["Entry", "Mid", "Senior", "Lead"];
const salaryRanges = ["$50k+", "$70k+", "$90k+", "$120k+"];
const locations = ["Sydney", "Melbourne", "Brisbane", "Perth", "Remote"];

export function JobFiltersBar() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(sortOptions[0]);
  const [location, setLocation] = useState<string | null>(null);
  const [jobType, setJobType] = useState<string | null>(null);
  const [salary, setSalary] = useState<string | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);
  const [experience, setExperience] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const clearFilters = () => {
    setLocation(null);
    setJobType(null);
    setSalary(null);
    setIndustry(null);
    setExperience(null);
    setSort(sortOptions[0]);
  };

  const hasActiveFilters = !!(
    location ||
    jobType ||
    salary ||
    industry ||
    experience ||
    sort !== sortOptions[0]
  );
  const activeFilterCount = [
    location,
    jobType,
    salary,
    industry,
    experience,
  ].filter(Boolean).length;

  return (
    <>
      <div className="w-full flex items-center gap-3 mb-6">
        <Input
          placeholder="Search jobs by title, company, or keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-0"
        />
        <Button
          variant={hasActiveFilters ? "secondary" : "outline"}
          size="icon"
          onClick={() => setOpen(true)}
          aria-label="Open filters"
          className="relative"
        >
          <SlidersHorizontal className="w-5 h-5" />
          {activeFilterCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </div>
      {/* Filter Chips with Framer Motion */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          <AnimatePresence>
            {location && (
              <motion.span
                key={"location"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center bg-muted border rounded-full px-3 py-1 text-sm"
              >
                Location: {location}
                <button
                  className="ml-2 text-muted-foreground hover:text-destructive focus:outline-none"
                  onClick={() => setLocation(null)}
                  aria-label="Remove location filter"
                  type="button"
                >
                  ×
                </button>
              </motion.span>
            )}
            {jobType && (
              <motion.span
                key={"jobType"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center bg-muted border rounded-full px-3 py-1 text-sm"
              >
                Job Type: {jobType}
                <button
                  className="ml-2 text-muted-foreground hover:text-destructive focus:outline-none"
                  onClick={() => setJobType(null)}
                  aria-label="Remove job type filter"
                  type="button"
                >
                  ×
                </button>
              </motion.span>
            )}
            {salary && (
              <motion.span
                key={"salary"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center bg-muted border rounded-full px-3 py-1 text-sm"
              >
                Salary: {salary}
                <button
                  className="ml-2 text-muted-foreground hover:text-destructive focus:outline-none"
                  onClick={() => setSalary(null)}
                  aria-label="Remove salary filter"
                  type="button"
                >
                  ×
                </button>
              </motion.span>
            )}
            {industry && (
              <motion.span
                key={"industry"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center bg-muted border rounded-full px-3 py-1 text-sm"
              >
                Industry: {industry}
                <button
                  className="ml-2 text-muted-foreground hover:text-destructive focus:outline-none"
                  onClick={() => setIndustry(null)}
                  aria-label="Remove industry filter"
                  type="button"
                >
                  ×
                </button>
              </motion.span>
            )}
            {experience && (
              <motion.span
                key={"experience"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center bg-muted border rounded-full px-3 py-1 text-sm"
              >
                Experience: {experience}
                <button
                  className="ml-2 text-muted-foreground hover:text-destructive focus:outline-none"
                  onClick={() => setExperience(null)}
                  aria-label="Remove experience filter"
                  type="button"
                >
                  ×
                </button>
              </motion.span>
            )}
          </AnimatePresence>
          <Button onClick={clearFilters} variant="ghost" size="sm">
            Clear All
          </Button>
        </div>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg w-full">
          <DialogHeader>
            <DialogTitle>Filter & Sort Jobs</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between"
                >
                  <span>{sort}</span>
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => setSort(option)}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Location Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between"
                >
                  <span>{location || "Location"}</span>
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Location</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {locations.map((l) => (
                  <DropdownMenuItem key={l} onClick={() => setLocation(l)}>
                    {l}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Job Type Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between"
                >
                  <span>{jobType || "Job Type"}</span>
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Job Type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {jobTypes.map((jt) => (
                  <DropdownMenuItem key={jt} onClick={() => setJobType(jt)}>
                    {jt}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Salary Range Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between"
                >
                  <span>{salary || "Salary"}</span>
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Salary Range</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {salaryRanges.map((sr) => (
                  <DropdownMenuItem key={sr} onClick={() => setSalary(sr)}>
                    {sr}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Industry Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between"
                >
                  <span>{industry || "Industry"}</span>
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Industry</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {industries.map((ind) => (
                  <DropdownMenuItem key={ind} onClick={() => setIndustry(ind)}>
                    {ind}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Experience Level Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between"
                >
                  <span>{experience || "Experience"}</span>
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Experience Level</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {experienceLevels.map((exp) => (
                  <DropdownMenuItem
                    key={exp}
                    onClick={() => setExperience(exp)}
                  >
                    {exp}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DialogFooter className="mt-6 flex flex-row gap-2 justify-between">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button variant="secondary" onClick={clearFilters}>
              Clear Filters
            </Button>
            <DialogClose asChild>
              <Button variant="default">Apply</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
