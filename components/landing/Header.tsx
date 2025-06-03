import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-background/80 backdrop-blur border-b border-muted shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            alt="ApplyEasy Logo"
            width={36}
            height={36}
          />
          <span className="font-bold text-xl tracking-tight">ApplyEasy</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="#testimonials"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
          <Link href="/sign-in">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
