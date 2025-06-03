import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-muted bg-background py-8 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 px-4">
        <div className="flex items-center gap-2 mb-2">
          <Image
            src="/assets/logo.svg"
            alt="ApplyEasy Logo"
            width={28}
            height={28}
          />
          <span className="font-bold text-lg tracking-tight">ApplyEasy</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground mb-2">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} ApplyEasy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
