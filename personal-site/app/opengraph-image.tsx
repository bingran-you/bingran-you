import { TRACK_LABEL } from "@/lib/content";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { PERSON, PERSON_SUMMARY } from "@/lib/site";

export const alt = `${PERSON.name} — ${TRACK_LABEL.ai} & ${TRACK_LABEL.ion}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    title: PERSON.name,
    subtitle: PERSON_SUMMARY,
  });
}
