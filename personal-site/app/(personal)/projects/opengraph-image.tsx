import { projects } from "@/lib/content";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { PERSON } from "@/lib/site";

export const alt = "Projects — Bingran You";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Projects",
    title: PERSON.name,
    subtitle: projects.map((project) => project.name).join(" · "),
  });
}
