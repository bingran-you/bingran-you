import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSkills, getSkill } from "@/lib/skills";

export function generateStaticParams() {
  return getAllSkills().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) return { title: "Skill not found" };

  const description =
    skill.description.length > 200
      ? `${skill.description.slice(0, 197).trimEnd()}…`
      : skill.description;

  return {
    title: skill.name,
    description,
    alternates: { canonical: `/skills/${skill.slug}` },
  };
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkill(slug);
  if (!skill) notFound();

  const all = getAllSkills();
  const idx = all.findIndex((s) => s.slug === skill.slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <article className="space-y-10">
      <Link
        href="/skills"
        className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] transition hover:text-foreground"
      >
        ← Skills
      </Link>

      <header className="space-y-4">
        <span className="inline-flex font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
          {skill.category}
        </span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {skill.name}
        </h1>
        <p className="font-mono text-[12px] text-[var(--muted)]">
          {skill.slug}
        </p>
      </header>

      <aside className="grid gap-3 rounded-2xl border border-[var(--border)] p-5 sm:grid-cols-2">
        <Meta label="Author">{skill.source.author}</Meta>
        <Meta label="Collection">{skill.source.collection}</Meta>
        <Meta label="License">
          {skill.license ? skill.license.name : "—"}
        </Meta>
        <Meta label="Updated">
          {new Date(skill.updatedAt).toISOString().slice(0, 10)}
        </Meta>
        <div className="sm:col-span-2 flex flex-wrap gap-2 pt-2">
          <a
            href={skill.downloadUrl}
            download={`${skill.slug}.md`}
            className="inline-flex items-center gap-1.5 rounded-full border border-foreground bg-foreground px-3.5 py-1.5 text-xs text-[var(--background)] transition hover:opacity-90"
          >
            <DownloadIcon className="h-3 w-3" />
            Download SKILL.md
          </a>
          {skill.source.githubUrl ? (
            <a
              href={skill.source.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3.5 py-1.5 text-xs text-[var(--muted)] transition hover:border-foreground/30 hover:text-foreground"
            >
              <GitHubIcon className="h-3 w-3" />
              View source on GitHub
            </a>
          ) : null}
        </div>
      </aside>

      <section>
        <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] mb-4">
          Description
        </h2>
        <p className="text-base leading-relaxed text-foreground">
          {skill.description}
        </p>
      </section>

      {skill.triggers && skill.triggers.length > 0 ? (
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] mb-4">
            Triggers
          </h2>
          <ul className="flex flex-wrap gap-1.5">
            {skill.triggers.map((t) => (
              <li
                key={t}
                className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[11px] text-[var(--muted)]"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {skill.bodyHtml ? (
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] mb-4">
            SKILL.md
          </h2>
          <div
            className="prose prose-neutral max-w-none dark:prose-invert prose-headings:tracking-tight prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-pre:bg-foreground/[0.04] prose-pre:text-foreground prose-pre:border prose-pre:border-[var(--border)] prose-code:font-mono prose-code:text-[13px] prose-code:text-foreground prose-code:bg-foreground/[0.06] prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none prose-a:text-[var(--accent)] prose-a:underline-offset-4"
            dangerouslySetInnerHTML={{ __html: skill.bodyHtml }}
          />
        </section>
      ) : null}

      {skill.license ? (
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] mb-4">
            License
          </h2>
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 font-mono text-[12px] leading-relaxed text-[var(--muted)]">
            {skill.license.text}
          </pre>
        </section>
      ) : null}

      <nav className="flex items-stretch justify-between gap-3 border-t border-[var(--border)] pt-8">
        {prev ? (
          <Link
            href={`/skills/${prev.slug}`}
            className="group flex flex-col gap-1 text-left"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
              ← Prev
            </span>
            <span className="text-sm group-hover:underline underline-offset-4">
              {prev.name}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/skills/${next.slug}`}
            className="group flex flex-col gap-1 text-right"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
              Next →
            </span>
            <span className="text-sm group-hover:underline underline-offset-4">
              {next.name}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}

function Meta({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">
        {label}
      </span>
      <span className="text-sm">{children}</span>
    </div>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8 2v9m0 0L4.5 7.5M8 11l3.5-3.5M2.5 13.5h11" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}
