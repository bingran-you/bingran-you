import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getPostLastModified,
  getPostMetadata,
  getPostSlugs,
} from "@/lib/posts";
import {
  blogPostingJsonLd,
  jsonLdScriptContent,
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/jsonld";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugs = await getPostSlugs();
  if (!slugs.includes(slug)) return {};
  const metadata = await getPostMetadata(slug);
  const modifiedTime = (await getPostLastModified(slug)).toISOString();
  const description = metadata.description ?? SITE_DESCRIPTION;

  return {
    title: metadata.title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${metadata.title} · ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: new Date(metadata.date).toISOString(),
      modifiedTime,
      authors: [SITE_NAME],
      images: [OG_IMAGE_URL],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@bingran_bry",
      title: `${metadata.title} · ${SITE_NAME}`,
      description,
      images: [OG_IMAGE_URL],
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const slugs = await getPostSlugs();
  if (!slugs.includes(slug)) notFound();
  const { default: Post, metadata } = await import(
    `@/content/posts/${slug}.mdx`
  );
  const modifiedTime = (await getPostLastModified(slug)).toISOString();
  const jsonLd = jsonLdScriptContent(
    blogPostingJsonLd({
      slug,
      title: metadata.title,
      description: metadata.description,
      date: metadata.date,
      modifiedTime,
    }),
  );

  return (
    <article style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          borderBottom: "1px solid var(--rule)",
          paddingBottom: "var(--space-5)",
        }}
      >
        <Link
          href="/blog"
          className="eyebrow inline-block transition-colors duration-150 hover:text-[var(--accent-bright)]"
        >
          back · /blog
        </Link>
        <h1
          className="font-display"
          style={{
            marginTop: "var(--space-2)",
            fontSize: "clamp(36px, 5.6vw, 56px)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-display)",
            fontWeight: 600,
            color: "var(--ink)",
            textWrap: "balance",
          }}
        >
          {metadata.title}
        </h1>
        <time
          className="font-mono tabular-nums"
          style={{
            fontSize: "13px",
            color: "var(--ink-3)",
            letterSpacing: "var(--tracking-mono)",
            marginTop: "var(--space-2)",
          }}
        >
          {metadata.date}
        </time>
      </header>
      <div className="prose max-w-none">
        <Post />
      </div>
    </article>
  );
}
