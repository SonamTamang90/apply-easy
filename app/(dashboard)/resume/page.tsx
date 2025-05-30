import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { DocumentUploadManager } from "@/components/DocumentUploadManager";

const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Resume &amp; Cover Letter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold tracking-tight">
        Resume &amp; Cover Letter
      </h1>
      <p className="text-muted-foreground mt-2 mb-4">
        Manage and optimize your resume and cover letters for every job
        application.
      </p>
      <DocumentUploadManager />
    </div>
  );
};

export default Resume;
