import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sun, Moon, User, Bookmark, ClipboardList } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useTheme } from "next-themes";
import SearchBar from "@/components/dashboard/SearchBar";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { NotificationsSheet } from "@/components/dashboard/NotificationsSheet";

const mockUser = {
  name: "Jane Jackson",
  avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  role: "Software Engineer",
  email: "jane.doe@email.com",
};

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
    <header
      className="
      w-full sticky top-0 z-50 h-16 flex items-center justify-between px-6
      border-b
      bg-white/70 dark:bg-gray-950/70
      backdrop-blur-md
      supports-[backdrop-filter]:bg-white/60
      supports-[backdrop-filter]:backdrop-blur-md
      gap-4
      transition-colors
    "
    >
      <h1 className="text-xl font-semibold flex-shrink-0">Dashboard</h1>
      <div className="flex-1 flex justify-center">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <NotificationsSheet />
        <Sheet>
          <SheetTrigger asChild>
            <button className="relative flex items-center justify-center w-10 h-10 rounded-full p-0 border-0 bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-300 shadow hover:brightness-110 transition-all focus:outline-none">
              <Avatar className="w-9 h-9 border-2 border-white">
                <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
                <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] sm:max-w-md">
            <SheetHeader className="pt-18 border-b border-dashed">
              <div className="flex flex-col items-center gap-2 mt-2 mb-4">
                <div className="relative flex items-center justify-center w-24 h-24 bg-linear-to-r from-blue-500 via-blue-400 to-blue-300  rounded-full shadow">
                  <Avatar className="w-22 h-22">
                    <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
                    <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="font-semibold text-lg mt-2">
                  {mockUser.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {mockUser.email}
                </div>
              </div>
              <SheetTitle className="sr-only">Account</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col pb-8 gap-2 mt-2 px-2 border-b border-dashed">
              <button
                className="w-full flex items-center text-sm gap-2 text-gray-500 text-left px-4 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => router.push("/profile")}
              >
                <User className="w-5 h-5" />
                Profile
              </button>
              <button
                className="w-full flex items-center text-sm gap-2 text-gray-500 text-left px-4 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => router.push("/saved-jobs")}
              >
                <Bookmark className="w-5 h-5" />
                Saved Jobs
                <span className="ml-auto w-6 h-6 bg-blue-100 flex items-center justify-center text-xs text-blue-700 rounded-sm font-bold">
                  5
                </span>
              </button>
              <button
                className="w-full flex items-center text-sm gap-2 text-gray-500 text-left px-4 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => router.push("/applications")}
              >
                <ClipboardList className="w-5 h-5" />
                Applied Jobs
                <span className="ml-auto w-6 h-6 bg-red-100 flex items-center justify-center text-xs text-red-700 rounded-sm font-bold">
                  3
                </span>
              </button>
              <div className="w-full flex items-center gap-2 text-sm text-gray-500 text-left px-4 py-2 rounded-md hover:bg-accent transition-colors">
                {isDark ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
                <span className="flex-1">Mode</span>
                <Switch
                  checked={isDark}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                  aria-label="Toggle theme"
                />
              </div>
            </div>
            <div className="px-4">
              {/* Upgrade to Pro Promo Card */}
              <div className="mt-4 mb-2 rounded-xl p-4 flex items-center gap-4 bg-gradient-to-br from-blue-800 via-blue-500 via-purple-500 to-cyan-400 relative overflow-hidden shadow-lg">
                {/* Glass overlay for modern effect */}
                <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-sm pointer-events-none z-0" />
                <div className="flex-1 relative z-10">
                  <div className="text-lg font-bold text-white/90 mb-1">
                    35% OFF
                  </div>
                  <div className="text-sm text-white/80 mb-3">
                    Get More Done, Faster!
                  </div>
                  <button
                    className="bg-yellow-400 hover:bg-yellow-500 text-sm text-gray-900 font-bold px-4 py-2 rounded-md shadow transition-colors"
                    onClick={() => window.open("/upgrade", "_blank")}
                  >
                    Upgrade to Pro
                  </button>
                </div>
                <Image
                  src="/assets/crown-icon.png"
                  alt="Rocket"
                  width={64}
                  height={64}
                  className="drop-shadow-xl relative z-10"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))" }}
                />
              </div>
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <button
                  className="w-full text-sm bg-red-100 font-bold text-center h-10 px-4 py-2 rounded-md hover:bg-accent transition-colors text-red-700"
                  onClick={handleSignOut}
                  disabled={loading}
                >
                  {loading ? "Signing out..." : "Sign out"}
                </button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
