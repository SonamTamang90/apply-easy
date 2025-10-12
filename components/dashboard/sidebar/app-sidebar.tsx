"use client";

import * as React from "react";
import Image from "next/image";

import { NavDocuments } from "./nav-documents";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/erica.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      iconSrc: "/ category.svg",
    },
    {
      title: "Jobs",
      url: "/dashboard/jobs",
      iconSrc: "/work.svg",
      badge: "New",
    },
    {
      title: "Applications",
      url: "/dashboard/applications",
      iconSrc: "/paper-negative.svg",
    },
    {
      title: "Interview Prep",
      url: "/dashboard/interviews",
      iconSrc: "/voice.svg",
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      iconSrc: "/icons/activity.svg",
    },
  ],
  documents: [
    {
      name: "Resumes",
      url: "/dashboard/documents/resumes",
      iconSrc: "/paper.svg",
    },
    {
      name: "Cover Letters",
      url: "/dashboard/documents/cover-letters",
      iconSrc: "/paper.svg",
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      iconSrc: "/setting.svg",
    },
    {
      title: "Get Help",
      url: "/dashboard/help",
      iconSrc: "/chat.svg",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="#">
                <Image
                  src="/logo.svg"
                  alt="Brand Logo"
                  width={20}
                  height={20}
                  className="!size-5"
                  priority
                />
                <span className="text-base font-semibold">Apply Easy</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
