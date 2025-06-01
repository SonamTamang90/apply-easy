"use client";
import React, { useState, useMemo } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { JobCard } from "@/components/JobCard";
import { JobFiltersBar } from "@/components/JobFiltersBar";
// If you have a global Header component, import it:
// import Header from "@/components/Header";

const mockSavedJobs = [
  {
    jobId: "frontend-dev-1",
    title: "Frontend Developer",
    company: "Tech Solutions",
    companyLogoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Remote",
    employmentType: "Full-time",
    salary: "$100k - $120k",
    tags: ["React", "Remote", "JavaScript"],
    description:
      "Work with a modern React stack to build scalable web apps for global clients.",
    datePosted: "2 days ago",
    dateSaved: "2024-06-10",
    jobType: "Full-time",
  },
  {
    jobId: "backend-dev-2",
    title: "Backend Engineer",
    company: "CloudCore",
    companyLogoUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    location: "Sydney, Australia",
    employmentType: "Contract",
    salary: "$120k - $140k",
    tags: ["Node.js", "API", "Microservices"],
    description:
      "Build robust APIs and microservices for a fast-growing cloud platform.",
    datePosted: "3 days ago",
    dateSaved: "2024-06-09",
    jobType: "Contract",
  },
  {
    jobId: "uiux-designer-3",
    title: "UI/UX Designer",
    company: "Creative Minds",
    companyLogoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Melbourne, Australia",
    employmentType: "Part-time",
    salary: "$90k - $110k",
    tags: ["Figma", "UX", "Hybrid"],
    description: "Design beautiful, user-centric interfaces for SaaS products.",
    datePosted: "1 day ago",
    dateSaved: "2024-06-08",
    jobType: "Part-time",
  },
];

const uniqueLocations = Array.from(
  new Set(mockSavedJobs.map((j) => j.location))
);
const uniqueJobTypes = Array.from(new Set(mockSavedJobs.map((j) => j.jobType)));
const uniqueTags = Array.from(new Set(mockSavedJobs.flatMap((j) => j.tags)));

const SavedJobs = () => {
  // Filter/search state in parent
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState<string | null>(null);
  const [jobType, setJobType] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  // Filtering logic
  const filteredJobs = useMemo(() => {
    return mockSavedJobs.filter((job) => {
      const matchesSearch =
        !search ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase()) ||
        (job.tags &&
          job.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())));
      const matchesLocation = !location || job.location === location;
      const matchesJobType = !jobType || job.jobType === jobType;
      const matchesTag = !tag || (job.tags && job.tags.includes(tag));
      return matchesSearch && matchesLocation && matchesJobType && matchesTag;
    });
  }, [search, location, jobType, tag]);

  return (
    <>
      {/* <Header /> Uncomment if you have a Header component */}
      <div className="max-w-2xl mx-auto py-8 space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Saved Jobs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Saved Jobs</h1>
        <p className="text-muted-foreground mb-6">
          View and manage jobs you&apos;ve saved for later. Apply, review, or
          remove jobs from your list.
        </p>
        {/* Search & Filter Bar */}
        <div className="mb-4">
          <JobFiltersBar
            search={search}
            setSearch={setSearch}
            location={location}
            setLocation={setLocation}
            jobType={jobType}
            setJobType={setJobType}
            tag={tag}
            setTag={setTag}
            locations={uniqueLocations}
            jobTypes={uniqueJobTypes}
            tags={uniqueTags}
          />
        </div>
        <div className="flex flex-col gap-6 mt-8">
          {filteredJobs.length === 0 ? (
            <div className="text-muted-foreground text-center py-12">
              No jobs found for your search/filter.
            </div>
          ) : (
            filteredJobs.map((job) => (
              <JobCard
                key={job.jobId}
                jobId={job.jobId}
                title={job.title}
                company={job.company}
                companyLogoUrl={job.companyLogoUrl}
                location={job.location}
                salary={job.salary}
                tags={job.tags}
                description={job.description}
                datePosted={job.datePosted}
                // You can add more props or customize JobCard for saved jobs if needed
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SavedJobs;
