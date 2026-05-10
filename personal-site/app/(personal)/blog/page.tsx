import type { Metadata } from "next";
import Link from "next/link";
import { Hairline, PageHeader } from "@/components/page-header";
import { getAllPostsMetadata } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Short notes on AI agents, ion-trap experiments, and craft.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getAllPostsMetadata();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
      <PageHeader
        eyebrow="notes / blog"
        title="Short notes"
        meta={`${posts.length} entries · 2026`}
        description="On agents, ions, and the craft of making complex things dependable."
      />

      <section>
        <Hairline />
        <ul style={{ listStyle: "none" }}>
          {posts.map((post) => (
            <li
              key={post.slug}
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="row-hover group grid gap-3 sm:grid-cols-[140px_1fr] sm:items-baseline"
                style={{
                  padding: "var(--space-5) var(--space-3)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                <time
                  className="font-mono tabular-nums"
                  style={{
                    fontSize: "13px",
                    color: "var(--ink-3)",
                    letterSpacing: "var(--tracking-mono)",
                  }}
                >
                  {post.date}
                </time>
                <div>
                  <h2
                    className="row-title"
                    style={{
                      margin: 0,
                      fontSize: "19px",
                      fontWeight: 700,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.35,
                      color: "var(--ink)",
                      textWrap: "balance",
                      transition: "color var(--dur-fast) var(--ease)",
                    }}
                  >
                    {post.title}
                  </h2>
                  {post.description ? (
                    <p
                      style={{
                        marginTop: 8,
                        fontSize: "15px",
                        color: "var(--ink-2)",
                        lineHeight: 1.55,
                      }}
                    >
                      {post.description}
                    </p>
                  ) : null}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
