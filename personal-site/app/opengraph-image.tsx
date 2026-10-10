import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { PERSON, PERSON_SUMMARY } from "@/lib/site";

export const alt = "Bingran You — Agentic Builder & Ion Trapper";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: PERSON.name,
    subtitle: PERSON_SUMMARY,
  });
}
