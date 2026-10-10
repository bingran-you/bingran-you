import { papers } from "@/lib/content";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { PERSON } from "@/lib/site";

export const alt = "Papers — Bingran You";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Papers",
    title: PERSON.name,
    subtitle: [...new Set(papers.map((paper) => paper.venue))].join(" · "),
  });
}
