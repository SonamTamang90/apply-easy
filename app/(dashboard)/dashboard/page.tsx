import { SectionCards } from "@/components/dashboard/section-cards";

export default function DashboardPage() {
  return (
    <div>
      <div className="px-6">
        <h1 className="text-xl font-semibold">Welcome back, Steven</h1>
      </div>
      <div className="mt-6">
        <SectionCards />
      </div>
    </div>
  );
}
