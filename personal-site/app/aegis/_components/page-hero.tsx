import Link from "next/link";
import { ArrowRight } from "./icons";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function PageHero({ eyebrow, title, lead, primary, secondary }: Props) {
  return (
    <section
      className="ag-grid-bg ag-scanline relative overflow-hidden"
      style={{ paddingTop: "5.5rem", paddingBottom: "5rem" }}
    >
      <div className="ag-glow" />
      <div className="ag-container relative">
        <p className="ag-eyebrow">{eyebrow}</p>
        <h1
          className="ag-display mt-6 max-w-4xl"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.022em",
          }}
        >
          {title}
        </h1>
        <div
          className="mt-6 max-w-2xl text-lg leading-relaxed"
          style={{ color: "var(--ag-fg-mute)" }}
        >
          {lead}
        </div>
        {(primary || secondary) ? (
          <div className="mt-9 flex flex-wrap items-center gap-3">
            {primary ? (
              <Link href={primary.href} className="ag-btn ag-btn-primary">
                {primary.label}
                <ArrowRight className="ag-btn-arrow" />
              </Link>
            ) : null}
            {secondary ? (
              <Link href={secondary.href} className="ag-btn">
                {secondary.label}
                <ArrowRight className="ag-btn-arrow" />
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
