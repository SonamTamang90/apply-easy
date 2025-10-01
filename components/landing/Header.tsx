import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "../layout/Container";
import { NavLinks } from "./NavLinks";

export default function Header() {
  return (
    <Container className="mt-6">
      <header className="border border-gray-200 rounded-lg flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="ApplyEasy Logo" width={32} height={32} />
          <span className="font-bold text-xl tracking-tight">ApplyEasy</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        <Button variant="brand" size="lg" className="hidden md:block">
          <Link href="/register">GET STARTED</Link>
        </Button>
      </header>
    </Container>
  );
}
