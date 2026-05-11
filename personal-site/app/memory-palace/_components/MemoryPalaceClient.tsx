"use client";

import dynamic from "next/dynamic";

// The full 3D scene loads only on the client; Next.js shouldn't try to SSR
// Three.js (it pulls in browser-only WebGL). The wrapper here also lets us
// show a graceful loading state.
const Scene = dynamic(() => import("./Scene").then((m) => m.Scene), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--paper)",
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--ink-3)",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
      }}
    >
      <span>› loading memory palace…</span>
    </div>
  ),
});

export function MemoryPalaceClient() {
  return <Scene />;
}
