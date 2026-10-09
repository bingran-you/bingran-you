import type { Metadata } from "next";
import { ProjectsTable } from "@/components/article/blocks";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import { projects } from "@/lib/content";
import { graphScriptContent, projectJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects across AI systems and trapped-ion experiments.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const jsonLd = graphScriptContent(projects.map(projectJsonLd));

  return (
    <Sheet current="/projects">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <h1 className={styles.title}>Projects</h1>

      <div className={styles.body}>
        <ProjectsTable number={1} items={projects} />
      </div>
    </Sheet>
  );
}
