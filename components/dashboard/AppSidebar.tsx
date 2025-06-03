import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Gauge,
  Settings,
  Sparkles,
  ClipboardList,
  Users,
  FileText,
  Mic,
  Bookmark,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const sidebarLinks = [
  {
    href: "/dashboard",
    icon: <Gauge className="w-5 h-5 mr-2" />,
    label: "Dashboard",
  },
  {
    href: "/recommended-jobs",
    icon: <Sparkles className="w-5 h-5 mr-2" />,
    label: "Recommended Jobs",
  },
  {
    href: "/applications",
    icon: <ClipboardList className="w-5 h-5 mr-2" />,
    label: "Applications",
  },
  {
    href: "/agencies",
    icon: <Users className="w-5 h-5 mr-2" />,
    label: "Recruitment Agencies",
  },
  {
    href: "/resume",
    icon: <FileText className="w-5 h-5 mr-2" />,
    label: "Resume & Cover Letter",
  },
  {
    href: "/interview-prep",
    icon: <Mic className="w-5 h-5 mr-2" />,
    label: "Interview Prep",
  },
  {
    href: "/saved-jobs",
    icon: <Bookmark className="w-5 h-5 mr-2" />,
    label: "Saved Jobs",
  },
  {
    href: "/settings",
    icon: <Settings className="w-5 h-5 mr-2" />,
    label: "Settings",
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="py-11 flex items-center gap-2 ">
            <Image src="/assets/logo.svg" alt="Logo" width={32} height={32} />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLinks.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    className={clsx(
                      "px-3 h-10 transition-colors text-sm rounded-sm flex items-center text-gray-600 gap-2 hover:bg-gray-200/20",
                      pathname == item.href && "bg-blue-600/10 text-blue-600"
                    )}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span className="">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
