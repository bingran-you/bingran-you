import { notFound } from "next/navigation";
import { getPostSlugs } from "@/lib/posts";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Blog post — Bingran You";
export const size = ogSize;
export const contentType = ogContentType;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = await getPostSlugs();
  if (!slugs.includes(slug)) notFound();
  const mod = await import(`@/content/posts/${slug}.mdx`);
  return renderOgImage({
    eyebrow: "Blog",
    title: mod.metadata.title,
    subtitle: mod.metadata.description,
  });
}
