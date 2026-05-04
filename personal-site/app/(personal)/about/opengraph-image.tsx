import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "About — Bingran You";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "About",
    title: "Bingran You.",
    subtitle:
      "PhD candidate at UC Berkeley, Haeffner Lab. Reliable AI systems × trapped-ion AMO physics.",
  });
}
