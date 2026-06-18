"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Ethics", href: "#ethics" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-hairline bg-bone/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Wordmark / company title */}
        <Link
          href="#top"
          className="font-display text-xl font-medium uppercase tracking-[0.42em] text-ink"
        >
          Waltoa
        </Link>

        {/* Subsections */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm tracking-wide text-stone transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={cn(
                "absolute left-0 block h-px w-6 bg-ink transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 block h-px w-6 bg-ink transition-all duration-300",
                open ? "-rotate-45" : ""
              )}
            />
          </span>
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-hairline bg-bone/95 backdrop-blur-md transition-all duration-300 md:hidden",
          open ? "max-h-80" : "max-h-0 border-t-transparent"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display py-2 text-sm tracking-wide text-stone transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
