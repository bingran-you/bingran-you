"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import type { Skill, SkillCategory } from "@/lib/skills";
import { buildSkillsViewModel } from "@/lib/skills-browser-vm";

type Props = {
  skills: Skill[];
  categories: SkillCategory[];
};

export function SkillsBrowser({ skills, categories }: Props) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">(
    "All",
  );
  const deferredQuery = useDeferredValue(query);

  const vm = useMemo(
    () =>
      buildSkillsViewModel(skills, categories, {
        query: deferredQuery,
        activeCategory,
      }),
    [skills, categories, deferredQuery, activeCategory],
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search skills, triggers, descriptions…"
            aria-label="Search skills"
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 pl-10 text-sm placeholder:text-[var(--muted)] focus:border-foreground/40 focus:outline-none focus:ring-0"
          />
          <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
        </div>

        <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1 sm:-mx-1 sm:flex-wrap sm:overflow-visible sm:px-1 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <CategoryChip
            label={`All · ${vm.totalCount}`}
            active={activeCategory === "All"}
            onClick={() => setActiveCategory("All")}
          />
          {categories.map((cat) => (
            <CategoryChip
              key={cat}
              label={`${cat} · ${vm.categoryCounts.get(cat) ?? 0}`}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>
      </div>

      {vm.isEmpty ? (
        <div className="py-16 text-center text-sm text-[var(--muted)]">
          <p>
            No skills match{" "}
            <span className="font-mono">&ldquo;{deferredQuery}&rdquo;</span>
            {activeCategory !== "All" ? (
              <>
                {" "}
                in <span className="font-medium">{activeCategory}</span>
              </>
            ) : null}
            .
          </p>
          {vm.queryMatchesAcrossCategories > 0 ? (
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="mt-3 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-foreground transition hover:border-foreground/30"
            >
              Search all categories ({vm.queryMatchesAcrossCategories})
            </button>
          ) : null}
        </div>
      ) : (
        <div className="space-y-12">
          {vm.groups.map(([cat, list]) => (
            <section key={cat}>
              <div className="mb-4 flex items-baseline justify-between">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
                  {cat}
                </h2>
                <span className="font-mono text-[11px] text-[var(--muted)]">
                  {list.length}
                </span>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {list.map((s) => (
                  <li key={s.slug}>
                    <SkillCard skill={s} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 transition hover:border-foreground/30 hover:shadow-[0_1px_0_rgba(0,0,0,0.02),0_8px_24px_-12px_rgba(0,0,0,0.12)]"
    >
      <div className="flex items-start gap-3">
        <SkillIcon slug={skill.slug} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[15px] font-medium leading-tight tracking-tight">
            {skill.name}
          </h3>
          <p className="mt-0.5 truncate font-mono text-[11px] text-[var(--muted)]">
            {skill.slug}
          </p>
        </div>
      </div>
      <p className="line-clamp-3 text-[13px] leading-relaxed text-[var(--muted)]">
        {skill.description}
      </p>
      <div className="mt-auto flex items-center justify-between pt-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">
          {skill.category}
        </span>
        <span className="text-xs text-[var(--muted)] opacity-0 transition group-hover:opacity-100">
          Open →
        </span>
      </div>
    </Link>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-xs transition ${
        active
          ? "border-foreground bg-foreground text-[var(--background)]"
          : "border-[var(--border)] text-[var(--muted)] hover:border-foreground/30 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}

function SkillIcon({ slug }: { slug: string }) {
  const initials = slug
    .split("-")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
  const hue = hashHue(slug);
  return (
    <span
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border font-mono text-[11px] font-semibold tracking-tight"
      style={{
        background: `hsl(${hue} 70% 96%)`,
        color: `hsl(${hue} 60% 32%)`,
        borderColor: `hsl(${hue} 50% 88%)`,
      }}
      aria-hidden
    >
      {initials || "·"}
    </span>
  );
}

function hashHue(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h % 360;
}

function SearchIcon({ className }: { className?: string }) {
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
      <circle cx="7.25" cy="7.25" r="4.75" />
      <path d="m11 11 3 3" />
    </svg>
  );
}
