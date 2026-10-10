import type { Metadata } from "next";
import { ProjectsTable } from "@/components/article/blocks";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import { projects } from "@/lib/content";
import { graphScriptContent, projectJsonLd } from "@/lib/jsonld";
import { PERSON } from "@/lib/site";

const names = projects.map((project) => project.name);

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects by ${PERSON.name}: ${names.join(", ")}.`,
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
