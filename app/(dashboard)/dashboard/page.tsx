import { ChartAreaInteractive, DataTable, SectionCards } from "@/components/dashboard"

import data from "./data.json"

export default function DashboardPage() {
  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </>
  )
}
