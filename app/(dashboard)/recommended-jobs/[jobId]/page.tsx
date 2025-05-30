"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const mockJob = {
  title: "Frontend Developer",
  company: "Tech Solutions",
  companyLogoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  location: "Sydney, Australia",
  datePosted: "2 days ago",
  tags: ["Remote", "Top Match"],
  companyWebsite: "https://techsolutions.com",
  companyDescription:
    "Tech Solutions is a leading provider of innovative software solutions for global clients. We value creativity, collaboration, and continuous learning.",
  jobDescription: `We are looking for a talented Frontend Developer to join our team.\n\n**Responsibilities:**\n- Build and maintain scalable web applications using React.\n- Collaborate with designers and backend engineers.\n- Write clean, maintainable code.\n\n**Requirements:**\n- 3+ years experience with React.\n- Strong CSS/JS skills.\n- Experience with REST APIs.\n\n**Benefits:**\n- Flexible remote work.\n- Learning budget.\n- Health insurance.`,
};

const JobDetailsPage = () => {
  const [saved, setSaved] = React.useState(false);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/recommended-jobs">
              Recommended Jobs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{mockJob.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        {/* Company Logo */}
        <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-muted rounded-lg border">
          {mockJob.companyLogoUrl ? (
            <Image
              src={mockJob.companyLogoUrl}
              alt={mockJob.company}
              width={64}
              height={64}
              className="object-cover rounded-lg"
            />
          ) : (
            <span className="text-xl font-bold text-muted-foreground">
              {mockJob.company.charAt(0)}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 truncate">
            {mockJob.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span>{mockJob.company}</span>
            <span>•</span>
            <span>{mockJob.location}</span>
            <span>•</span>
            <span>Posted {mockJob.datePosted}</span>
            {mockJob.tags.map((tag) => (
              <span
                key={tag}
                className="ml-2 bg-accent text-xs px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <Button variant="default" size="lg">
          Apply Now
        </Button>
        <div className="flex gap-2">
          <Button
            variant={saved ? "secondary" : "ghost"}
            size="icon"
            aria-label={saved ? "Remove Bookmark" : "Bookmark Job"}
            onClick={() => setSaved((s) => !s)}
            className="rounded-full"
          >
            {saved ? (
              <BookmarkCheck className="w-5 h-5 text-primary" />
            ) : (
              <Bookmark className="w-5 h-5 text-muted-foreground" />
            )}
          </Button>
          <Button variant="ghost" size="icon" aria-label="Share Job">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </div>
      {/* Company Info (no card, no logo) */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">About {mockJob.company}</h2>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-base font-medium">{mockJob.company}</span>
          <span className="text-sm text-muted-foreground">
            {mockJob.location}
          </span>
          {mockJob.companyWebsite && (
            <a
              href={mockJob.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline text-sm ml-2"
            >
              Website
            </a>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {mockJob.companyDescription}
        </p>
      </div>
      {/* Full Job Description */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Job Description</h2>
        <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
          {mockJob.jobDescription}
        </div>
      </div>
      {/* Why this job? (AI match) */}
      <div className="mb-8 p-4 rounded-lg bg-muted/40">
        <h2 className="text-lg font-semibold mb-2">Why this job?</h2>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>
            You have 3+ years of React experience, matching the job
            requirements.
          </li>
          <li>You prefer remote work, and this job is remote-friendly.</li>
          <li>This company is in your preferred industry: SaaS.</li>
          <li>Your desired salary range matches the job&apos;s offer.</li>
        </ul>
      </div>
    </div>
  );
};

export default JobDetailsPage;
