"use client"

import { type Icon } from "@tabler/icons-react"
import Image from "next/image"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavDocuments({
  items,
}: {
  items: {
    name: string
    url: string
    icon?: Icon
    iconSrc?: string
  }[]
}) {

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu className="space-y-1">
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild className="h-10">
              <a href={item.url}>
                {item.iconSrc ? (
                  <Image
                    src={item.iconSrc}
                    alt={item.name}
                    width={22}
                    height={22}
                    className="!size-[22px]"
                  />
                ) : (
                  item.icon && <item.icon />
                )}
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
