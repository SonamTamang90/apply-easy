"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export const NavLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle smooth scroll for anchor links on the same page
    if (href.startsWith("/#")) {
      e.preventDefault();
      const elementId = href.substring(2); // Remove '/#'
      const element = document.getElementById(elementId);
      if (element) {
        // Update URL with hash
        window.history.pushState(null, "", href);

        // Scroll to element with offset
        const offset = 100; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      {[
        ["Home", "/"],
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
            className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm uppercase text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
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
                  className="absolute inset-0 rounded-lg bg-[#F5F5F5]"
                  layoutId="hoverBackground"
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
    </>
  );
};
