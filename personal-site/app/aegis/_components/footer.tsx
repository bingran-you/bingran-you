import Link from "next/link";
import { AegisMark } from "./logo";

const cols: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Live",
    links: [
      { href: "/aegis/sentinel", label: "Aegis CLI" },
      { href: "/aegis/securebench", label: "SecureBench (alpha)" },
      { href: "/aegis/research#threat-model", label: "Threat catalog" },
    ],
  },
  {
    heading: "Roadmap",
    links: [
      { href: "/aegis/platform", label: "Roadmap overview" },
      { href: "/aegis/attest", label: "Aegis Attest (~Q3)" },
      { href: "/aegis/cleanse", label: "Aegis Cleanse (~Q4)" },
    ],
  },
  {
    heading: "Field notes",
    links: [
      { href: "/aegis/research", label: "Manifesto + notes" },
      { href: "/aegis/research#threat-model", label: "Threat catalog v0.1" },
      { href: "/aegis/research#field-notes", label: "Notes from the laptop" },
      { href: "/aegis/research#vocabulary", label: "Glossary" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/aegis/company", label: "About + founder" },
      { href: "/aegis/company#prior-work", label: "Prior work" },
      { href: "/aegis/waitlist", label: "Send us your incident" },
      { href: "/", label: "Bingran You" },
    ],
  },
];

export function AegisFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--ag-line)",
        background: "var(--ag-canvas-2)",
      }}
    >
      <div className="ag-container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link href="/aegis" className="inline-flex items-center gap-2.5">
              <AegisMark size={22} />
              <span
                className="ag-mono"
                style={{
                  fontSize: 13,
                  letterSpacing: "0.34em",
                  textTransform: "uppercase",
                }}
              >
                Aegis
              </span>
            </Link>
            <p
              className="mt-5 max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--ag-fg-mute)" }}
            >
              Observability for AI agents. One CLI today, three layers on the
              roadmap. Built openly. The deal: send us your incident, we send
              back a forensic report.
            </p>
            <p
              className="ag-mono mt-6 text-[11px] uppercase tracking-[0.28em]"
              style={{ color: "var(--ag-fg-faint)" }}
            >
              Solo-founded · Berkeley · v0.1
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.heading}>
              <p
                className="ag-mono mb-4 text-[11px] uppercase tracking-[0.32em]"
                style={{ color: "var(--ag-fg-faint)" }}
              >
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm transition hover:text-[var(--ag-amber)]"
                      style={{ color: "var(--ag-fg)" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="mt-14 flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid var(--ag-line)" }}
        >
          <p
            className="ag-mono text-[11px] uppercase tracking-[0.28em]"
            style={{ color: "var(--ag-fg-faint)" }}
          >
            © {year} Aegis · A research preview by{" "}
            <Link
              href="/"
              className="hover:text-[var(--ag-amber)]"
              style={{ color: "var(--ag-fg-mute)" }}
            >
              Bingran You
            </Link>
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--ag-fg-faint)" }}
          >
            v0.1 research preview. The CLI ships to early-access partners.
            Sample CLI outputs are illustrative; threat-catalog reproducers
            are real and replayable.
          </p>
        </div>
      </div>
    </footer>
  );
}
