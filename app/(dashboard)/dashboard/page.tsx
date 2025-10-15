import { SectionCards } from "@/components/dashboard/section-cards";
import { DataTable } from "@/components/dashboard/data-table";

const sampleData = [
  {
    id: 1,
    header: "Senior Software Engineer",
    type: "Google",
    status: "In Progress",
    target: "Jan 15, 2025",
    reviewer: "$150k - $200k",
    resume: "Tech Leadership CV",
  },
  {
    id: 2,
    header: "Product Manager",
    type: "Microsoft",
    status: "Done",
    target: "Jan 12, 2025",
    reviewer: "$130k - $180k",
    resume: "Product Strategy CV",
  },
  {
    id: 3,
    header: "UX Designer",
    type: "Apple",
    status: "In Progress",
    target: "Jan 10, 2025",
    reviewer: "$120k - $160k",
    resume: "Creative Portfolio CV",
  },
  {
    id: 4,
    header: "Full Stack Developer",
    type: "Netflix",
    status: "In Progress",
    target: "Jan 8, 2025",
    reviewer: "$140k - $180k",
    resume: "Tech Leadership CV",
  },
  {
    id: 5,
    header: "DevOps Engineer",
    type: "Amazon",
    status: "Done",
    target: "Jan 5, 2025",
    reviewer: "$130k - $170k",
    resume: "Tech Leadership CV",
  },
  {
    id: 6,
    header: "Data Scientist",
    type: "Meta",
    status: "In Progress",
    target: "Jan 3, 2025",
    reviewer: "$145k - $195k",
    resume: "Data Analytics CV",
  },
  {
    id: 7,
    header: "Frontend Engineer",
    type: "Airbnb",
    status: "Done",
    target: "Dec 28, 2024",
    reviewer: "$135k - $175k",
    resume: "Tech Leadership CV",
  },
  {
    id: 8,
    header: "Mobile Developer",
    type: "Spotify",
    status: "In Progress",
    target: "Dec 25, 2024",
    reviewer: "$125k - $165k",
    resume: "Mobile Development CV",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-12 pb-6">
      <div className="px-6">
        <h1 className="text-xl font-semibold">Welcome back, Steven</h1>
      </div>
      <div>
        <SectionCards />
      </div>
      <div>
        <DataTable data={sampleData} />
      </div>
    </div>
  );
}
