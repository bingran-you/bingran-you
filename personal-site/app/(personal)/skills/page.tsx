import type { Metadata } from "next";
import {
  SKILL_CATEGORIES,
  getAllSkills,
  type SkillCategory,
} from "@/lib/skills";
import { SkillsBrowser } from "./_components/skills-browser";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "A live catalog of the skills loaded into Bingran's AI agents — each one a packaged capability the agents can pick up at runtime.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  const skills = getAllSkills();
  const categoriesInUse: SkillCategory[] = SKILL_CATEGORIES.filter((cat) =>
    skills.some((s) => s.category === cat),
  );

  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Skills</h1>
        <p className="mt-3 max-w-2xl text-base text-[var(--muted)]">
          A live catalog of the {skills.length} skills loaded into my AI agents
          army. Each is a packaged capability — a self-contained set of
          instructions, references, and helper scripts — that any agent in this
          workspace can pick up at runtime.
        </p>
        <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
          This page rebuilds whenever{" "}
          <code className="font-mono text-[12px]">.agents/skills/</code>{" "}
          changes.
        </p>
      </header>

      <SkillsBrowser skills={skills} categories={categoriesInUse} />
    </div>
  );
}
