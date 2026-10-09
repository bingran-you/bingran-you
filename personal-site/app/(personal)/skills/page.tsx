import type { Metadata } from "next";
import {
  SKILL_CATEGORIES,
  getAllSkills,
  type SkillCategory,
} from "@/lib/skills";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
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
    <Sheet current="/skills">
      <h1 className={styles.title}>Skills</h1>
      <div className={`${styles.body} font-sans`}>
        <p className="mb-6 text-sm text-[var(--muted)]">
          Generated from{" "}
          <code className="font-mono text-[12px]">.agents/skills/</code> at
          build time.
        </p>
        <SkillsBrowser skills={skills} categories={categoriesInUse} />
      </div>
    </Sheet>
  );
}
