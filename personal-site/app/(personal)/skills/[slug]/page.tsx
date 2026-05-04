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
