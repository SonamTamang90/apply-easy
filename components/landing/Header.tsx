import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "../layout/Container";

export default function Header() {
  return (
    <Container className="mt-6">
      <header className="border border-gray-200 rounded-lg flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="ApplyEasy Logo" width={32} height={32} />
          <span className="font-bold text-xl tracking-tight">ApplyEasy</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#home"
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            HOME
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            FEATURES
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
          >
            HOW IT WORKS
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium text-gray-700 hover:text-primary transition-colors flex items-center gap-1">
              PRICING
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        <Button variant="brand" size="lg" className="hidden md:block">
          <Link href="/register">GET STARTED</Link>
        </Button>
      </header>
    </Container>
  );
}
