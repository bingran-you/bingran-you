"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AegisMark } from "./logo";

const productLinks = [
  {
    href: "/aegis/sentinel",
    label: "Aegis Sentinel",
    blurb: "Runtime hygiene for local agents",
  },
  {
    href: "/aegis/attest",
    label: "Aegis Attest",
    blurb: "Verifies the open web for agents",
  },
  {
    href: "/aegis/cleanse",
    label: "Aegis Cleanse",
    blurb: "Memory hygiene & poison detection",
  },
  {
    href: "/aegis/securebench",
    label: "SecureBench",
    blurb: "Adversarial benchmark for agents",
  },
];

const otherLinks = [
  { href: "/aegis/platform", label: "Platform" },
  { href: "/aegis/research", label: "Research" },
  { href: "/aegis/company", label: "Company" },
];

export function AegisNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-30 backdrop-blur"
      style={{
        background: "rgba(7, 9, 15, 0.72)",
        borderBottom: "1px solid var(--ag-line)",
      }}
    >
      <div className="ag-container flex items-center justify-between gap-6 py-4">
        <Link
          href="/aegis"
          className="flex items-center gap-2.5 transition hover:opacity-90"
        >
          <AegisMark size={22} />
          <span
            className="ag-mono"
            style={{
              fontSize: 13,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "var(--ag-fg)",
            }}
          >
            Aegis
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button
              type="button"
              className="px-3 py-2 text-sm transition"
              style={{
                color:
                  productOpen || pathname?.startsWith("/aegis/sentinel") ||
                  pathname?.startsWith("/aegis/attest") ||
                  pathname?.startsWith("/aegis/cleanse") ||
                  pathname?.startsWith("/aegis/securebench")
                    ? "var(--ag-fg)"
                    : "var(--ag-fg-mute)",
              }}
              aria-expanded={productOpen}
            >
              Products
              <span className="ml-1 inline-block translate-y-[1px] text-[10px] opacity-70">
                ▾
              </span>
            </button>
            {productOpen ? (
              <div
                className="absolute left-0 top-full pt-2"
                style={{ minWidth: 360 }}
              >
                <div
                  className="ag-card overflow-hidden"
                  style={{ background: "var(--ag-surface-2)" }}
                >
                  <ul>
                    {productLinks.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          className="flex flex-col gap-0.5 px-4 py-3 transition hover:bg-white/[0.04]"
                        >
                          <span
                            className="text-sm"
                            style={{ color: "var(--ag-fg)" }}
                          >
                            {p.label}
                          </span>
                          <span
                            className="text-xs"
                            style={{ color: "var(--ag-fg-mute)" }}
                          >
                            {p.blurb}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
          {otherLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm transition"
                style={{
                  color: active ? "var(--ag-fg)" : "var(--ag-fg-mute)",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="https://bingranyou.com/"
            className="text-xs transition"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            ← bingran.you
          </Link>
          <Link
            href="/aegis/waitlist"
            className="ag-btn ag-btn-primary"
            style={{ padding: "0.6rem 1rem" }}
          >
            Join waitlist
            <ArrowRight className="ag-btn-arrow" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
          style={{
            border: "1px solid var(--ag-line)",
            borderRadius: 10,
            padding: 8,
            color: "var(--ag-fg)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            {open ? (
              <path d="M3 3l10 10M13 3L3 13" />
            ) : (
              <>
                <path d="M2 4h12" />
                <path d="M2 8h12" />
                <path d="M2 12h12" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          className="lg:hidden"
          style={{
            borderTop: "1px solid var(--ag-line)",
            background: "var(--ag-canvas)",
          }}
        >
          <div className="ag-container py-4">
            <p className="ag-eyebrow mb-3">Products</p>
            <ul className="mb-5 space-y-2">
              {productLinks.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    onClick={() => setOpen(false)}
                    className="flex flex-col py-2"
                  >
                    <span
                      className="text-sm"
                      style={{ color: "var(--ag-fg)" }}
                    >
                      {p.label}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--ag-fg-mute)" }}
                    >
                      {p.blurb}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="ag-eyebrow mb-3">More</p>
            <ul className="space-y-2">
              {otherLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm"
                    style={{ color: "var(--ag-fg)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm"
                  style={{ color: "var(--ag-fg-mute)" }}
                >
                  ← bingran.you
                </Link>
              </li>
            </ul>
            <Link
              href="/aegis/waitlist"
              onClick={() => setOpen(false)}
              className="ag-btn ag-btn-primary mt-5 w-full justify-center"
            >
              Join waitlist
              <ArrowRight className="ag-btn-arrow" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  );
}
