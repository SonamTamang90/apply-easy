"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ApplicationsSearchFilterBar } from "@/components/ApplicationsSearchFilterBar";
import {
  ApplicationCard,
  ApplicationCardProps,
} from "@/components/ApplicationCard";
import { ApplicationCardSkeleton } from "@/components/CardSkeleton";
import { PaginationBar } from "@/components/PaginationBar";

const mockApplications: ApplicationCardProps[] = [
  {
    jobTitle: "Frontend Developer",
    company: "Tech Solutions",
    companyLogoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Sydney, Australia",
    dateApplied: "2024-06-01",
    status: "Applied",
    tags: ["Remote", "Top Match"],
  },
  {
    jobTitle: "UI/UX Designer",
    company: "Creative Minds",
    companyLogoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Melbourne, Australia",
    dateApplied: "2024-05-28",
    status: "Interview",
    tags: ["Urgent", "Hybrid"],
  },
  {
    jobTitle: "Backend Engineer",
    company: "CloudCore",
    companyLogoUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    location: "Remote",
    dateApplied: "2024-05-20",
    status: "Rejected",
    tags: ["Remote", "Urgent"],
  },
];

const APPLICATIONS_PER_PAGE = 3;

const Applications = () => {
  const [loading, setLoading] = React.useState(true);
  const [applications] = React.useState(mockApplications);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const totalPages = Math.ceil(applications.length / APPLICATIONS_PER_PAGE);
  const paginatedApplications = applications.slice(
    (currentPage - 1) * APPLICATIONS_PER_PAGE,
    currentPage * APPLICATIONS_PER_PAGE
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
            <BreadcrumbPage>My Applications</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold tracking-tight">My Applications</h1>
      <p className="text-muted-foreground mt-2 mb-4">
        Track the status of your job applications.
      </p>
      <ApplicationsSearchFilterBar />
      <div className="flex flex-col gap-6 mt-8">
        {loading ? (
          Array.from({ length: APPLICATIONS_PER_PAGE }).map((_, idx) => (
            <ApplicationCardSkeleton key={idx} />
          ))
        ) : applications.length > 0 ? (
          paginatedApplications.map((app, idx) => (
            <ApplicationCard key={app.jobTitle + idx} {...app} />
          ))
        ) : (
          <div className="text-center text-muted-foreground py-16">
            <div className="text-4xl mb-2">📭</div>
            <div className="text-lg font-medium mb-1">
              No applications found
            </div>
            <div className="text-sm">
              You haven&apos;t applied to any jobs yet.
            </div>
          </div>
        )}
      </div>
      {!loading && totalPages > 1 && (
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

export default Applications;
