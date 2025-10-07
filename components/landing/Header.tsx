import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "../layout/Container";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  return (
    <Container className="mt-6">
      <header className="border border-gray-200 rounded-lg flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="ApplyEasy Logo"
              width={32}
              height={32}
            />
            <span className="font-bold text-xl tracking-tight">ApplyEasy</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <NavLinks />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="hidden md:block">
            <Button variant="ghost" size="lg">
              Sign in
            </Button>
          </Link>
          <Link href="/sign-up" className="hidden md:block">
            <Button variant="brand" size="lg">
              Try free
            </Button>
          </Link>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>
    </Container>
  );
}
