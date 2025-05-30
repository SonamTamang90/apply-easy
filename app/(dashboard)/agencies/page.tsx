"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { AgencySearchFilterBar } from "@/components/AgencySearchFilterBar";
import { AgencyCard } from "@/components/AgencyCard";
import { AgencyProfileModal } from "@/components/AgencyProfileModal";
import { CardSkeleton } from "@/components/CardSkeleton";
import { PaginationBar } from "@/components/PaginationBar";

// Define Agency type
interface Agency {
  name: string;
  description: string;
  location: string;
  rating: number;
  tags?: string[];
  logoUrl?: string;
  contactEmail?: string;
  contactPhone?: string;
  website?: string;
}

const mockAgencies: Agency[] = [
  {
    name: "Tech Recruiters",
    description:
      "Specialists in tech and IT roles, connecting top talent with leading companies.",
    location: "Sydney",
    rating: 4.8,
    tags: ["Tech", "Remote", "Top Rated"],
    logoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    contactEmail: "contact@techrecruiters.com",
    contactPhone: "+61 2 1234 5678",
    website: "https://techrecruiters.com",
  },
  {
    name: "Tech Recruiters",
    description:
      "Your trusted partner for IT and software engineering recruitment.",
    location: "Melbourne",
    rating: 4.7,
    tags: ["Tech", "On-site"],
    logoUrl: "https://randomuser.me/api/portraits/men/33.jpg",
    contactEmail: "melbourne@techrecruiters.com",
    contactPhone: "+61 3 2345 6789",
    website: "https://techrecruiters.com/melbourne",
  },
  {
    name: "Tech Recruiters",
    description:
      "Leading tech recruitment agency for startups and enterprises.",
    location: "Brisbane",
    rating: 4.9,
    tags: ["Tech", "Startups", "Remote"],
    logoUrl: "https://randomuser.me/api/portraits/men/34.jpg",
    contactEmail: "brisbane@techrecruiters.com",
    contactPhone: "+61 7 3456 7890",
    website: "https://techrecruiters.com/brisbane",
  },
  {
    name: "Healthcare Connect",
    description:
      "Your partner for healthcare and medical job placements across Australia.",
    location: "Melbourne",
    rating: 4.6,
    tags: ["Healthcare", "On-site"],
    logoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    contactEmail: "info@healthcareconnect.com",
    contactPhone: "+61 3 8765 4321",
    website: "https://healthcareconnect.com",
  },
  {
    name: "Finance Pros",
    description:
      "Expert recruiters for finance, banking, and accounting professionals.",
    location: "Remote",
    rating: 4.7,
    tags: ["Finance", "Remote"],
    logoUrl: "https://randomuser.me/api/portraits/men/65.jpg",
    contactEmail: "hello@financepros.com",
    contactPhone: "+61 7 2345 6789",
    website: "https://financepros.com",
  },
  {
    name: "EduCareers",
    description: "Connecting educators with top schools and institutions.",
    location: "Brisbane",
    rating: 4.5,
    tags: ["Education", "On-site"],
    logoUrl: "https://randomuser.me/api/portraits/women/55.jpg",
    contactEmail: "contact@educareers.com",
    contactPhone: "+61 7 1234 5678",
    website: "https://educareers.com",
  },
  {
    name: "Retail Talent",
    description: "Specialists in retail and customer service recruitment.",
    location: "Perth",
    rating: 4.3,
    tags: ["Retail", "Customer Service"],
    logoUrl: "https://randomuser.me/api/portraits/men/77.jpg",
    contactEmail: "info@retailtalent.com",
    contactPhone: "+61 8 8765 4321",
    website: "https://retailtalent.com",
  },
  {
    name: "Legal Link",
    description: "Connecting legal professionals with top law firms.",
    location: "Sydney",
    rating: 4.9,
    tags: ["Legal", "Top Rated"],
    logoUrl: "https://randomuser.me/api/portraits/men/88.jpg",
    contactEmail: "hello@legallink.com",
    contactPhone: "+61 2 2345 6789",
    website: "https://legallink.com",
  },
  {
    name: "Creative Crew",
    description:
      "Recruitment for creative industries: design, media, and more.",
    location: "Melbourne",
    rating: 4.4,
    tags: ["Creative", "Design", "Media"],
    logoUrl: "https://randomuser.me/api/portraits/women/66.jpg",
    contactEmail: "contact@creativecrew.com",
    contactPhone: "+61 3 3456 7890",
    website: "https://creativecrew.com",
  },
  {
    name: "BuildForce",
    description: "Construction and engineering recruitment specialists.",
    location: "Brisbane",
    rating: 4.2,
    tags: ["Construction", "Engineering"],
    logoUrl: "https://randomuser.me/api/portraits/men/99.jpg",
    contactEmail: "info@buildforce.com",
    contactPhone: "+61 7 4567 8901",
    website: "https://buildforce.com",
  },
  {
    name: "Hospitality Hub",
    description: "Connecting hospitality professionals with top venues.",
    location: "Perth",
    rating: 4.1,
    tags: ["Hospitality", "Food & Beverage"],
    logoUrl: "https://randomuser.me/api/portraits/women/22.jpg",
    contactEmail: "hello@hospitalityhub.com",
    contactPhone: "+61 8 5678 9012",
    website: "https://hospitalityhub.com",
  },
  {
    name: "Green Careers",
    description: "Recruitment for environmental and sustainability roles.",
    location: "Remote",
    rating: 4.6,
    tags: ["Environment", "Sustainability", "Remote"],
    logoUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    contactEmail: "contact@greencareers.com",
    contactPhone: "+61 2 6789 0123",
    website: "https://greencareers.com",
  },
];

const AGENCIES_PER_PAGE = 3;

const RecruitmentAgencies = () => {
  const [selectedAgency, setSelectedAgency] = React.useState<Agency | null>(
    null
  );
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(mockAgencies.length / AGENCIES_PER_PAGE);
  const paginatedAgencies = mockAgencies.slice(
    (currentPage - 1) * AGENCIES_PER_PAGE,
    currentPage * AGENCIES_PER_PAGE
  );

  const handleViewProfile = (agency: Agency) => {
    setSelectedAgency(agency);
    setModalOpen(true);
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold tracking-tight">
        Recruitment Agencies
      </h1>
      <p className="text-muted-foreground mt-2 mb-4">
        Find the best agencies to help you land your next job. Browse, filter,
        and connect with top-rated recruitment agencies tailored to your career
        goals.
      </p>
      <AgencySearchFilterBar />
      <Separator className="my-4" />
      <div className="flex flex-col gap-6">
        {loading
          ? Array.from({ length: AGENCIES_PER_PAGE }).map((_, idx) => (
              <CardSkeleton key={idx} />
            ))
          : paginatedAgencies.map((agency, idx) => (
              <AgencyCard
                key={agency.name + idx}
                {...agency}
                onViewProfile={() => handleViewProfile(agency)}
              />
            ))}
      </div>
      {!loading && (
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          className="mt-8"
        />
      )}
      {selectedAgency && (
        <AgencyProfileModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          {...(selectedAgency as Agency)}
        />
      )}
    </div>
  );
};

export default RecruitmentAgencies;
