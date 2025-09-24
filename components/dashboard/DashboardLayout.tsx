"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/lib/auth";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import Header from "@/components/dashboard/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = AuthService.isAuthenticated();
      if (!isAuth) {
        router.replace("/sign-in");
      } else {
        setAuthenticated(true);
      }
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  if (loading) return null;
  if (!authenticated) return null;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <div className="[width:var(--sidebar-width)] flex-shrink-0">
          <AppSidebar />
        </div>
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 min-h-0 overflow-auto">
            <div className="p-6">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
