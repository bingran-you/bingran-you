import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
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
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
      <PageHeader
        eyebrow="catalog / skills"
        title="Skills"
        meta={`${skills.length} entries · build-time`}
        description={
          <>
            A live catalog of the {skills.length} skills loaded into my AI
            agents army. Each is a packaged capability — a self-contained set
            of instructions, references, and helper scripts — that any agent
            in this workspace can pick up at runtime.
          </>
        }
      />
      <p
        className="font-mono"
        style={{
          fontSize: "12px",
          color: "var(--ink-3)",
          letterSpacing: "0.04em",
          marginTop: "calc(-1 * var(--space-4))",
        }}
      >
        Generated from <code className="code-chip">.agents/skills/</code> at build time.
      </p>

      <SkillsBrowser skills={skills} categories={categoriesInUse} />
    </div>
  );
}
