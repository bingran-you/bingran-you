// PROTOTYPE — the "Enter the Memory Palace" button, exactly as it ships today.
//
// The markup and class list are copied verbatim from app/(personal)/page.tsx
// (minus the `mt-7` spacing, which each variant owns). The wrapper pins every
// inherited property, so the button renders pixel-identically no matter what
// typography or palette the surrounding variant uses.

import Link from "next/link";
import "./palace-cta.css";

export function PalaceCta() {
  return (
    <span className="proto-palace-cta-slot">
      <Link
        href="/palace"
        className="palace-cta inline-flex items-center gap-3 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--accent-strong)] transition hover:bg-[var(--accent)]/20 hover:border-[var(--accent)]"
      >
        <span aria-hidden className="relative inline-flex h-2 w-2">
          <span className="absolute inset-0 rounded-full bg-[var(--accent)]" />
          <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-70" />
        </span>
        Enter the Memory Palace
        <span aria-hidden>→</span>
      </Link>
    </span>
  );
}
