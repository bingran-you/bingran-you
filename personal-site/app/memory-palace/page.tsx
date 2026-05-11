import type { Metadata } from "next";
import { MemoryPalaceClient } from "./_components/MemoryPalaceClient";

export const metadata: Metadata = {
  title: "Memory Palace",
  description:
    "A 3D memory palace — Bingran's desk, the CRT, and the phosphor terminal inside.",
  alternates: { canonical: "/memory-palace" },
};

// The 3D scene is a heavy client-only artifact (Three.js, GLSL shaders, post-FX).
// We keep the page-level shell here so the route still appears in the sitemap and
// produces a meaningful <title>, but everything visual lives behind dynamic import.
export default function MemoryPalacePage() {
  return <MemoryPalaceClient />;
}
