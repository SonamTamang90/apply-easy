"use client"

import * as React from "react"
import { type Icon } from "@tabler/icons-react"
import Image from "next/image"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon?: Icon
    iconSrc?: string
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-1">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className="h-10">
                <a href={item.url}>
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
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
