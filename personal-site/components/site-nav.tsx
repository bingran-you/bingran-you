"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Editorial nav — serif 17px, ink-2 default, lifts to ink on hover. Active
// item gets weight 600. Mobile drawer reuses same type tokens for consistency.
const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <nav className="hidden sm:flex items-center gap-9">
        {nav.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[17px] transition-colors duration-150 ${
                active
                  ? "font-semibold text-[var(--ink)]"
                  : "text-[var(--ink-2)] hover:text-[var(--ink)]"
              }`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="sm:hidden -mr-2 p-2 text-[var(--ink)]"
      >
        <span className="relative block h-4 w-5" aria-hidden>
          <span
            className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform duration-200 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-current transition-transform duration-200 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        id="mobile-nav-panel"
        className={`sm:hidden absolute left-0 right-0 top-full origin-top border-b border-[var(--rule)] transition duration-200 ease-out ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-1 opacity-0 pointer-events-none"
        }`}
        style={{
          background: "color-mix(in srgb, var(--paper) 95%, transparent)",
          backdropFilter: "saturate(140%) blur(12px)",
          WebkitBackdropFilter: "saturate(140%) blur(12px)",
        }}
      >
        <ul
          className="mx-auto"
          style={{ maxWidth: "var(--content-max)", padding: "8px var(--gutter)" }}
        >
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-[17px] transition ${
                    active
                      ? "font-semibold text-[var(--ink)]"
                      : "text-[var(--ink-2)] hover:text-[var(--ink)]"
                  }`}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
