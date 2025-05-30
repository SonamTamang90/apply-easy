"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { ProfileSummaryBar } from "@/components/ProfileSummaryBar";
import { EditPreferencesModal } from "@/components/EditPreferencesModal";
import { JobFiltersBar } from "@/components/JobFiltersBar";
import { JobCard } from "@/components/JobCard";
import { CardSkeleton } from "@/components/CardSkeleton";
import { PaginationBar } from "@/components/PaginationBar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const initialPreferences = {
  role: "Frontend Developer",
  location: "Sydney, Australia",
  experience: "3+ years",
  jobType: "Full-time, Remote",
  salaryRange: "$90k - $120k",
  industries: ["Tech", "SaaS"],
  profileImageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
};

type Preferences = typeof initialPreferences;

const JOBS_PER_PAGE = 2;

const RecommendedJobs = () => {
  const [editOpen, setEditOpen] = React.useState(false);
  const [preferences, setPreferences] =
    React.useState<Preferences>(initialPreferences);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleSavePreferences = (newPrefs: Preferences) => {
    setPreferences({ ...preferences, ...newPrefs });
  };

  const mockJobs = [
    {
      jobId: "frontend-developer",
      title: "Frontend Developer",
      company: "Tech Solutions",
      companyLogoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "Sydney, Australia",
      salary: "$100k - $120k",
      tags: ["Remote", "Top Match"],
      description:
        "Work with a modern React stack to build scalable web apps for global clients.",
      datePosted: "2 days ago",
    },
    {
      jobId: "ui-ux-designer",
      title: "UI/UX Designer",
      company: "Creative Minds",
      companyLogoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "Melbourne, Australia",
      salary: "$90k - $110k",
      tags: ["Urgent", "Hybrid"],
      description:
        "Design beautiful, user-centric interfaces for SaaS products.",
      datePosted: "1 day ago",
    },
    {
      jobId: "backend-engineer",
      title: "Backend Engineer",
      company: "CloudCore",
      companyLogoUrl: "https://randomuser.me/api/portraits/men/65.jpg",
      location: "Remote",
      salary: "$120k - $140k",
      tags: ["Remote", "Urgent"],
      description:
        "Build robust APIs and microservices for a fast-growing cloud platform.",
      datePosted: "3 days ago",
    },
  ];

  const totalPages = Math.ceil(mockJobs.length / JOBS_PER_PAGE);
  const paginatedJobs = mockJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  return (
    <div className="max-w-3xl mx-auto py-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Recommended Jobs</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold tracking-tight">Recommended Jobs</h1>
      <p className="text-muted-foreground mt-2 mb-4">
        Jobs matched to your profile, experience, and preferences.
      </p>
      <Separator className="my-4" />
      <ProfileSummaryBar {...preferences} onEdit={() => setEditOpen(true)} />
      <JobFiltersBar />
      <EditPreferencesModal
        open={editOpen}
        onOpenChange={setEditOpen}
        initialPreferences={preferences}
        onSave={handleSavePreferences}
      />
      <div className="flex flex-col gap-6 mt-8">
        {loading
          ? Array.from({ length: JOBS_PER_PAGE }).map((_, idx) => (
              <CardSkeleton key={idx} />
            ))
          : paginatedJobs.map((job) => <JobCard key={job.jobId} {...job} />)}
      </div>
      {!loading && (
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          className="mt-8"
        />
      )}
    </div>
  );
};

export default RecommendedJobs;
