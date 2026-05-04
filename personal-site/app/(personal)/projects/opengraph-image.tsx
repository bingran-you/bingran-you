import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Projects — Bingran You";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Projects",
    title: "Building reliable AI systems and ion-trap hardware.",
    subtitle: "Open-source agent tooling, applied AI products, and research code.",
  });
}
