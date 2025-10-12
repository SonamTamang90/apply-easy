"use client"

import { type Icon } from "@tabler/icons-react"
import Image from "next/image"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
    iconSrc?: string
    badge?: string
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-1">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} className="h-10">
                {item.iconSrc ? (
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={22}
                    height={22}
                    className="!size-[22px]"
                  />
                ) : (
                  item.icon && <item.icon />
                )}
                <span>{item.title}</span>
                {item.badge && (
                  <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
