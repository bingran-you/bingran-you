import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Bingran You — Agentic Builder & Ion Trapper";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: "Bingran You",
    subtitle:
      "PhD candidate at UC Berkeley. Reliable AI systems × trapped-ion atomic, molecular and optical physics.",
  });
}
