import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { PERSON, PERSON_SUMMARY } from "@/lib/site";

export const alt = "About — Bingran You";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "About",
    title: PERSON.name,
    subtitle: PERSON_SUMMARY,
  });
}
