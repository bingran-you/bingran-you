import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Papers — Bingran You";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Papers",
    title: "Selected publications.",
    subtitle: "Across AI agents and trapped-ion physics — Nature, PRL, arXiv.",
  });
}
