import { SocialLinks } from "@/components/social-links";

// Editorial footer — large paired serif name (Latin · CJK), mono ©/locale
// strip, connect grid of bordered mono badges. The 1px ink border-top frames
// the page close. On dark phosphor canvas the connect badges hover to
// phosphor green fill (per .connect-badge in globals.css).
export function SiteFooter() {
  return (
    <footer
      className="mt-[var(--space-9)] border-t"
      style={{
        borderTopColor: "var(--rule-strong)",
        padding: "var(--space-9) 0 var(--space-7)",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "var(--content-max)", padding: "0 var(--gutter)" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
          <div>
            <div
              className="font-display"
              style={{
                fontSize: "clamp(28px, 4.2vw, 48px)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-display)",
                lineHeight: 1,
                color: "var(--ink)",
              }}
            >
              Bingran You{" "}
              <span style={{ color: "var(--ink-3)", fontWeight: 400 }}>/</span>{" "}
              <span
                lang="zh-Hans"
                className="font-display"
                style={{ fontWeight: 500, fontSize: "0.88em" }}
              >
                尤炳然
              </span>
            </div>
            <div
              className="mt-3 font-mono"
              style={{
                fontSize: "12px",
                color: "var(--ink-3)",
                letterSpacing: "0.04em",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "var(--accent)", marginRight: 8 }}>›</span>
              © {new Date().getFullYear()}
              <span aria-hidden style={{ color: "var(--rule-strong)", margin: "0 8px" }}>
                ·
              </span>
              Berkeley, California
              <span aria-hidden style={{ color: "var(--rule-strong)", margin: "0 8px" }}>
                ·
              </span>
              bingran.you
            </div>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
