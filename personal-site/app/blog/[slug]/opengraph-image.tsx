import { notFound } from "next/navigation";
import { postSlugs, type PostSlug } from "@/lib/posts";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Blog post — Bingran You";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!postSlugs.includes(slug as PostSlug)) notFound();
  const mod = await import(`@/content/posts/${slug}.mdx`);
  return renderOgImage({
    eyebrow: "Blog",
    title: mod.metadata.title,
    subtitle: mod.metadata.description,
  });
}
