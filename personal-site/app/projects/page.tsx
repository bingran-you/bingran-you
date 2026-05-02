import type { Metadata } from "next";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects across AI systems and trapped-ion experiments.",
};

export default function ProjectsPage() {
  const ai = projects.filter((p) => p.track === "ai");
  const ion = projects.filter((p) => p.track === "ion");

  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 text-base text-[var(--muted)] max-w-2xl">
          A snapshot of the things I&apos;m lucky to work on. Most are open
          source; the rest will be when they&apos;re ready.
        </p>
      </header>

      <Section title="AI Builder" items={ai} />
      <Section title="Ion Trapper" items={ion} />
    </div>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: typeof projects;
}) {
  return (
    <section>
      <h2 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)] mb-6">
        {title}
      </h2>
      <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
        {items.map((p) => (
          <li key={p.href}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 py-5 group"
            >
              <span className="text-base font-medium group-hover:underline underline-offset-4">
                {p.name}
              </span>
              <span className="text-sm text-[var(--muted)] leading-relaxed">
                {p.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
