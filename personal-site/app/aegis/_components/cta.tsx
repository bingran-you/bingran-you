import Link from "next/link";
import { ArrowRight, ShieldIcon } from "./icons";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function CTASection({
  eyebrow = "Next move",
  title,
  body,
  primary = { href: "/aegis/waitlist", label: "Join the waitlist" },
  secondary,
}: Props) {
  return (
    <section
      className="ag-grid-bg relative overflow-hidden"
      style={{
        paddingTop: "6rem",
        paddingBottom: "7rem",
        background: "var(--ag-canvas-2)",
        borderTop: "1px solid var(--ag-line)",
      }}
    >
      <div className="ag-glow" />
      <div className="ag-container relative text-center">
        <ShieldIcon
          size={32}
          className="ag-text-amber mx-auto"
        />
        <p className="ag-eyebrow mt-4">{eyebrow}</p>
        <h2
          className="ag-display mx-auto mt-5 max-w-3xl"
          style={{
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.022em",
          }}
        >
          {title}
        </h2>
        {body ? (
          <div
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--ag-fg-mute)" }}
          >
            {body}
          </div>
        ) : null}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={primary.href} className="ag-btn ag-btn-primary">
            {primary.label}
            <ArrowRight className="ag-btn-arrow" />
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="ag-btn">
              {secondary.label}
              <ArrowRight className="ag-btn-arrow" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
