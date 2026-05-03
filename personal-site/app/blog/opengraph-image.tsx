import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Blog — Bingran You";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Blog",
    title: "Short notes on agents, ions, and craft.",
    subtitle: "Things I learn, screw up, or want to remember.",
  });
}
