"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { usePathname } from "next/navigation";

const getPageTitle = (pathname: string) => {
  const routes: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/dashboard/jobs": "Jobs",
    "/dashboard/applications": "Applications",
    "/dashboard/documents": "Documents",
    "/dashboard/documents/resumes": "Resumes",
    "/dashboard/documents/cover-letters": "Cover Letters",
    "/dashboard/interviews": "Interview Prep",
    "/dashboard/analytics": "Analytics",
    "/dashboard/search": "Search Jobs",
    "/dashboard/settings": "Settings",
    "/dashboard/help": "Get Help",
  };

  return routes[pathname] || "Dashboard";
};

export function SiteHeader() {
  const { toggleSidebar, state } = useSidebar();
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);
  const isCollapsed = state === "collapsed";

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="size-7 -ml-1"
          onClick={toggleSidebar}
        >
          <Image
            src={isCollapsed ? "/icons/arrow-right-circle.svg" : "/icons/arrow-left-circle.svg"}
            alt="Toggle Sidebar"
            width={24}
            height={24}
            className="size-6"
          />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{pageTitle}</h1>
      </div>
      <div className="flex items-center gap-2 px-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
