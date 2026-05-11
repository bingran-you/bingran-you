"use client";

import Link from "next/link";

type Props = {
  viewMode: "default" | "monitor";
  onBack: () => void;
  onEnter: () => void;
};

// HUD — overlay UI rendered above the WebGL canvas. Mirrors the design system
// type stack (mono labels in JetBrains Mono, terminal `›` prompt prefix) so the
// 3D scene feels like a deeper layer of the same universe, not a different site.
export function HUD({ viewMode, onBack, onEnter }: Props) {
  const inMonitor = viewMode === "monitor";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        fontFamily: "var(--font-mono)",
        zIndex: 5,
      }}
    >
      {/* Top-left — back to the plain text site */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 24,
          pointerEvents: "auto",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            color: "#E8EAEC",
            textDecoration: "none",
            fontSize: 13,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            padding: "6px 10px",
            borderRadius: 4,
            background: "rgba(8,9,11,0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.08)",
            transition: "background 150ms ease",
          }}
        >
          <span>←</span>
          <span>bingran.you</span>
        </Link>
      </div>

      {/* Top-right — Memory Palace version badge */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 24,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#E8EAEC",
          padding: "8px 14px",
          borderRadius: 999,
          background: "rgba(8,9,11,0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#E0703A",
            boxShadow: "0 0 8px rgba(224,112,58,0.7)",
          }}
        />
        <span>Memory Palace · v1</span>
      </div>

      {/* Bottom-left — instruction */}
      {!inMonitor && (
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 24,
            color: "#E8EAEC",
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "8px 14px",
            borderRadius: 4,
            background: "rgba(8,9,11,0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          Move mouse to look · Click the monitor to enter
        </div>
      )}

      {/* Bottom-right — plain text site fallback */}
      {!inMonitor && (
        <Link
          href="/"
          style={{
            pointerEvents: "auto",
            position: "absolute",
            bottom: 24,
            right: 24,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            color: "#E8EAEC",
            textDecoration: "none",
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "8px 14px",
            borderRadius: 4,
            background: "rgba(8,9,11,0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.08)",
            transition: "background 150ms ease, color 150ms ease",
          }}
        >
          <span>Plain text site</span>
          <span style={{ color: "#4ade80" }}>→</span>
        </Link>
      )}

      {/* When zoomed into monitor — exit button bottom-center */}
      {inMonitor && (
        <button
          type="button"
          onClick={onBack}
          style={{
            pointerEvents: "auto",
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            color: "#E8EAEC",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            padding: "10px 18px",
            borderRadius: 4,
            background: "rgba(8,9,11,0.7)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(74,222,128,0.4)",
            cursor: "pointer",
          }}
        >
          ← exit monitor
        </button>
      )}

      {/* Static reminder when in default view — invite to click */}
      {!inMonitor && (
        <button
          type="button"
          onClick={onEnter}
          style={{
            pointerEvents: "auto",
            position: "absolute",
            bottom: "50%",
            left: "50%",
            transform: "translate(-50%, 100px)",
            opacity: 0,
          }}
          aria-label="Enter monitor"
        />
      )}
    </div>
  );
}
