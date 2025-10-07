"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const MobileMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle smooth scroll for anchor links on the same page
    if (href.startsWith("/#")) {
      e.preventDefault();
      e.stopPropagation();

      const elementId = href.substring(2); // Remove '/#'
      const element = document.getElementById(elementId);

      // Close menu first
      setIsOpen(false);

      if (element) {
        // Small delay to ensure popover closes before scrolling
        setTimeout(() => {
          // Update URL with hash
          window.history.pushState(null, "", href);

          // Scroll to element with offset
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className="flex items-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] lg:w-[calc(100vw-5.5rem)] max-w-7xl" align="end" side="bottom" sideOffset={16} alignOffset={-24}>
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
          <span className="text-sm font-semibold text-gray-900 uppercase">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col space-y-1">
          {[
            ["Features", "/#features"],
            ["How It Works", "/#howitworks"],
            ["Pricing", "/#pricing"],
            ["FAQs", "/#faqs"],
          ].map(([label, href], index) => {
            const isAnchorLink = href.startsWith("/#");
            const Component = isAnchorLink ? "a" : Link;

            return (
              <Component
                key={label}
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="relative rounded-md px-3 py-2 text-sm uppercase text-gray-700 transition-colors hover:text-gray-900"
                onMouseEnter={() => {
                  if (timeoutRef.current) {
                    window.clearTimeout(timeoutRef.current);
                  }
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  timeoutRef.current = window.setTimeout(() => {
                    setHoveredIndex(null);
                  }, 200);
                }}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute inset-0 rounded-md bg-[#F5F5F5]"
                      layoutId="hoverBackgroundMobile"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{label}</span>
              </Component>
            );
          })}
        </nav>
        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
          <Button variant="ghost" size="lg" className="w-full" asChild>
            <Link href="/sign-in" onClick={() => setIsOpen(false)}>
              Sign in
            </Link>
          </Button>
          <Button variant="brand" size="lg" className="w-full" asChild>
            <Link href="/sign-up" onClick={() => setIsOpen(false)}>
              Try free
            </Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
    </>
  );
};
