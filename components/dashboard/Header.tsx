import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { User, Sun, Moon } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import SearchBar from "@/components/dashboard/SearchBar";

export default function Header() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const { setTheme, theme } = useTheme();
  const [search, setSearch] = React.useState("");

  const handleSignOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.replace("/sign-in");
    setLoading(false);
  };

  const isDark = theme === "dark";

  return (
    <header className="w-full h-16 flex items-center justify-between px-6 border-b bg-white dark:bg-gray-950 gap-4">
      <h1 className="text-xl font-semibold flex-shrink-0">Dashboard</h1>
      <div className="flex-1 flex justify-center">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
              <User className="w-5 h-5" />
              <span>Account</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut} disabled={loading}>
              {loading ? "Signing out..." : "Sign out"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Toggle
          pressed={isDark}
          aria-label="Toggle theme"
          onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
          className="ml-2"
        >
          {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </Toggle>
      </div>
    </header>
  );
}
