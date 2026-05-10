"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteNav } from "@/components/site-nav";

// SiteHeader — terminal-aesthetic 64px shell. Wordmark `bingran.you` in mono
// 16/500 with a blinking phosphor caret. Hairline border-bottom appears once
// the page scrolls past 4px (per design system motion brief). Backdrop blur
// over the void background reads as a soft frosted CRT chrome strip.
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-30"
      style={{
        height: "var(--header-h)",
        background: "color-mix(in srgb, var(--paper) 78%, transparent)",
        backdropFilter: "saturate(140%) blur(12px)",
        WebkitBackdropFilter: "saturate(140%) blur(12px)",
        borderBottom: "1px solid",
        borderBottomColor: scrolled ? "var(--rule)" : "transparent",
        transition: "border-color var(--dur-base) var(--ease)",
      }}
    >
      <div
        className="mx-auto flex h-full items-center justify-between"
        style={{ maxWidth: "var(--content-max)", padding: "0 var(--gutter)" }}
      >
        <Link
          href="/"
          className="font-mono text-[16px] font-medium tracking-[-0.01em] text-[var(--ink)] transition-opacity duration-150 hover:opacity-80 inline-flex items-baseline"
        >
          bingran.you
          <span className="term-caret" aria-hidden />
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
