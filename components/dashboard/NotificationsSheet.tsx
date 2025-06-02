import React, { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Bell,
  CheckCircle2,
  Trash2,
  User,
  Briefcase,
  FileText,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Define Notification type
interface Notification {
  id: number;
  type: "job" | "interview" | "system";
  title: string;
  description: string;
  date: string;
  avatarUrl: string;
  actions: { label: string; variant: "primary" | "secondary" }[];
  read: boolean;
  archived: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "job",
    title: "Frontend Developer at Acme Corp",
    description: "You have a new job recommendation.",
    date: "2h ago",
    avatarUrl: "/assets/company-acme.png",
    actions: [{ label: "View", variant: "primary" }],
    read: false,
    archived: false,
  },
  {
    id: 2,
    type: "interview",
    title: "Interview Scheduled",
    description: "Your interview with Beta Inc. is tomorrow at 10am.",
    date: "1d ago",
    avatarUrl: "/assets/company-beta.png",
    actions: [{ label: "View Details", variant: "primary" }],
    read: false,
    archived: false,
  },
  {
    id: 3,
    type: "system",
    title: "Profile Incomplete",
    description: "Complete your profile to get better job matches.",
    date: "3d ago",
    avatarUrl: "",
    actions: [{ label: "Update Profile", variant: "secondary" }],
    read: true,
    archived: false,
  },
  {
    id: 4,
    type: "job",
    title: "Backend Developer at Gamma LLC",
    description: "A new job matches your skills.",
    date: "4d ago",
    avatarUrl: "/assets/company-gamma.png",
    actions: [{ label: "View", variant: "primary" }],
    read: true,
    archived: true,
  },
];

export function NotificationsSheet() {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  const all = notifications.filter((n) => !n.archived);
  const unread = notifications.filter((n) => !n.read && !n.archived);
  const archived = notifications.filter((n) => n.archived);

  const markAllAsRead = () =>
    setNotifications((n) => n.map((notif) => ({ ...notif, read: true })));
  const clearAll = () =>
    setNotifications((n) => n.map((notif) => ({ ...notif, archived: true })));

  const renderNotification = (n: Notification) => (
    <div
      key={n.id}
      className={`rounded-xl bg-white/70 dark:bg-gray-900/70 shadow p-4 flex gap-3 border-l-4 ${
        n.read ? "opacity-60" : ""
      }`}
      style={{
        borderColor:
          n.type === "job"
            ? "#3b82f6"
            : n.type === "interview"
            ? "#a855f7"
            : "#f59e42",
      }}
    >
      <Avatar className="w-10 h-10">
        {n.avatarUrl ? (
          <AvatarImage src={n.avatarUrl} alt={n.title} />
        ) : (
          <AvatarFallback>
            {n.type === "job" ? (
              <Briefcase />
            ) : n.type === "interview" ? (
              <User />
            ) : (
              <FileText />
            )}
          </AvatarFallback>
        )}
      </Avatar>
      <div className="flex-1">
        <div className="font-semibold flex items-center gap-2">
          {n.title}
          {!n.read && (
            <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full" />
          )}
        </div>
        <div className="text-sm text-muted-foreground">{n.description}</div>
        <div className="text-xs text-muted-foreground mt-1">{n.date}</div>
        <div className="flex gap-2 mt-2">
          {n.actions.map(
            (
              a: { label: string; variant: "primary" | "secondary" },
              i: number
            ) => (
              <button
                key={i}
                className={`px-3 py-1 rounded-md text-xs font-medium ${
                  a.variant === "primary"
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {a.label}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-accent transition-colors focus:outline-none"
          aria-label="Notifications"
        >
          <Bell className="w-6 h-6 text-gray-500" />
          {unread.length > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow">
              {unread.length}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[380px] sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
        </SheetHeader>
        <Tabs defaultValue="all" className="mt-4">
          <TabsList className="flex w-full justify-start gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl p-1 mb-4 shadow-sm border border-gray-200 dark:border-gray-800">
            <TabsTrigger
              value="all"
              className="group flex items-center gap-2 px-4 py-1.5 rounded-lg transition-all data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-200"
            >
              All
              <span
                className="ml-2 px-2 py-0.5 rounded-full text-xs font-semibold transition-all
                data-[state=active]:bg-white data-[state=active]:text-gray-900
                group-data-[state=inactive]:bg-gray-800 group-data-[state=inactive]:text-white
                bg-gray-900 text-white
              "
              >
                {all.length}
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="unread"
              className="group flex items-center gap-2 px-4 py-1.5 rounded-lg transition-all data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900 data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-200"
            >
              Unread
              <span
                className="ml-2 px-2 py-0.5 rounded-full text-xs font-semibold transition-all
                data-[state=active]:bg-blue-600 data-[state=active]:text-white
                group-data-[state=inactive]:bg-blue-100 group-data-[state=inactive]:text-blue-700
                bg-blue-100 text-blue-700
              "
              >
                {unread.length}
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="archived"
              className="group flex items-center gap-2 px-4 py-1.5 rounded-lg transition-all data-[state=active]:bg-green-100 data-[state=active]:text-green-900 data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-700 dark:data-[state=inactive]:text-gray-200"
            >
              Archived
              <span
                className="ml-2 px-2 py-0.5 rounded-full text-xs font-semibold transition-all
                data-[state=active]:bg-green-600 data-[state=active]:text-white
                group-data-[state=inactive]:bg-green-100 group-data-[state=inactive]:text-green-700
                bg-green-100 text-green-700
              "
              >
                {archived.length}
              </span>
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center justify-between mb-2 px-1">
            <button
              className="flex items-center gap-1 text-xs text-blue-600 hover:underline font-medium disabled:opacity-50"
              onClick={markAllAsRead}
              disabled={unread.length === 0}
            >
              <CheckCircle2 className="w-4 h-4" /> Mark all as read
            </button>
            <button
              className="flex items-center gap-1 text-xs text-red-600 hover:underline font-medium disabled:opacity-50"
              onClick={clearAll}
              disabled={all.length === 0}
            >
              <Trash2 className="w-4 h-4" /> Clear all
            </button>
          </div>
          <TabsContent value="all">
            <div className="flex flex-col gap-4 mt-2">
              {all.length === 0 ? (
                <div className="text-muted-foreground text-center py-8">
                  No notifications.
                </div>
              ) : (
                all.map(renderNotification)
              )}
            </div>
          </TabsContent>
          <TabsContent value="unread">
            <div className="flex flex-col gap-4 mt-2">
              {unread.length === 0 ? (
                <div className="text-muted-foreground text-center py-8">
                  No unread notifications.
                </div>
              ) : (
                unread.map(renderNotification)
              )}
            </div>
          </TabsContent>
          <TabsContent value="archived">
            <div className="flex flex-col gap-4 mt-2">
              {archived.length === 0 ? (
                <div className="text-muted-foreground text-center py-8">
                  No archived notifications.
                </div>
              ) : (
                archived.map(renderNotification)
              )}
            </div>
          </TabsContent>
        </Tabs>
        <SheetClose asChild>
          <button className="mt-6 w-full text-sm bg-gray-100 font-bold text-center h-10 px-4 py-2 rounded-md hover:bg-accent transition-colors text-gray-700">
            Close
          </button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
