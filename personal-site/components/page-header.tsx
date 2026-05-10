import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  titleZh?: string;
  description?: ReactNode;
  meta?: ReactNode;
};

// Editorial page header — `›`-prefixed mono eyebrow in phosphor (top-left),
// optional version meta on top-right, then a paired EN+ZH display title in
// Source Serif 4 (EN) and Noto Serif SC (ZH). Body description sits in a
// tight ~640px column in graphite ink-2. Hairline border-bottom connects to
// the section grid below.
export function PageHeader({
  eyebrow,
  title,
  titleZh,
  description,
  meta,
}: PageHeaderProps) {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--rule)",
        paddingBottom: "var(--space-5)",
        marginBottom: "var(--space-7)",
      }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <div className="eyebrow">{eyebrow}</div>
        {meta ? <div className="mono-meta">{meta}</div> : null}
      </div>
      <h1
        className="font-display"
        style={{
          marginTop: "var(--space-4)",
          fontSize: "clamp(36px, 5.6vw, 56px)",
          fontWeight: 600,
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-display)",
          color: "var(--ink)",
          textWrap: "balance",
        }}
      >
        {title}
      </h1>
      {titleZh ? (
        <div
          lang="zh-Hans"
          className="font-display"
          style={{
            marginTop: "var(--space-2)",
            fontSize: "clamp(24px, 3.4vw, 36px)",
            fontWeight: 500,
            lineHeight: 1.2,
            color: "var(--ink-2)",
            letterSpacing: "0.02em",
          }}
        >
          {titleZh}
        </div>
      ) : null}
      {description ? (
        <div
          style={{
            marginTop: "var(--space-5)",
            fontSize: "17px",
            lineHeight: "var(--leading-normal)",
            color: "var(--ink-2)",
            maxWidth: "640px",
            textWrap: "pretty",
          }}
        >
          {description}
        </div>
      ) : null}
    </header>
  );
}

// Section header — `›` eyebrow + optional version meta + hairline rule. Use
// this between sections inside a page (e.g. "Selected Work · 8 repos" inside
// the Home page). `linkLabel` adds an "All →" affordance flush right below
// the rule.
export function SectionHead({
  eyebrow,
  meta,
  link,
}: {
  eyebrow: string;
  meta?: string;
  link?: { href: string; label: string };
}) {
  return (
    <>
      <div className="section-head">
        <div className="eyebrow">{eyebrow}</div>
        {meta ? <div className="mono-meta">{meta}</div> : null}
      </div>
      {link ? (
        <div
          className="subsection-head"
          style={{ marginTop: "calc(-1 * var(--space-3))", marginBottom: "var(--space-5)" }}
        >
          <span />
          <a
            href={link.href}
            className="font-mono transition-colors duration-150 hover:text-[var(--accent)]"
            style={{
              fontSize: "12px",
              color: "var(--ink-2)",
              letterSpacing: "0.04em",
            }}
          >
            {link.label}
          </a>
        </div>
      ) : null}
    </>
  );
}

// Sub-section label inside a section — for grouping rows under a category
// (e.g. "AGENTIC BUILDER" / "ION TRAPPER" inside the Projects page). Plain
// mono uppercase with NO `›` prefix, since `›` is reserved for top-level
// page labels.
export function SubLabel({ children }: { children: ReactNode }) {
  return (
    <h3
      className="mono-label"
      style={{
        marginTop: "var(--space-7)",
        marginBottom: "var(--space-3)",
      }}
    >
      {children}
    </h3>
  );
}

export function Hairline() {
  return <div className="hairline" />;
}
