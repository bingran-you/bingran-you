import type { Metadata } from "next";
import { ReferenceItem } from "@/components/article/blocks";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import { papers, TRACK_LABEL, type Track } from "@/lib/content";
import { graphScriptContent, paperJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Papers",
  description:
    "Selected publications across AI agents and trapped-ion physics.",
  alternates: { canonical: "/papers" },
};

const SCHOLAR = "https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en";

export default function PapersPage() {
  const jsonLd = graphScriptContent(papers.map(paperJsonLd));
  const tracks = Object.keys(TRACK_LABEL) as Track[];

  return (
    <Sheet current="/papers">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <h1 className={styles.title}>Papers</h1>

      <div className={styles.body}>
        {tracks.map((track) => (
          <section key={track} className={styles.entry}>
            <h2 className={styles.section}>{TRACK_LABEL[track]}</h2>
            <ol className={styles.references}>
              {papers.map((paper, i) =>
                paper.track === track ? (
                  <ReferenceItem
                    key={paper.slug}
                    paper={paper}
                    number={i + 1}
                  />
                ) : null,
              )}
            </ol>
          </section>
        ))}
        <p className={`${styles.citation} ${styles.entry}`}>
          <a
            href={SCHOLAR}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Google Scholar
          </a>
        </p>
      </div>
    </Sheet>
  );
}
