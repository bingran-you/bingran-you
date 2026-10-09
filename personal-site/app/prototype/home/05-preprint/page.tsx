// PROTOTYPE 05 — Preprint. The home page typeset as an APS / PRL-style
// two-column preprint: running head, centred front matter with an inset
// abstract, a booktabs table, FIG. 1 and a numbered reference list. The palace
// button ships as the article's supplemental material.

import type { Metadata } from "next";
import { STIX_Two_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/site";
import {
  currentProjects,
  displayUrl,
  education,
  nav,
  papers,
  person,
  socials,
  type DetailedPaper,
} from "../_shared/data";
import { PalaceCta } from "../_shared/palace-cta";
import styles from "./styles.module.css";

const stix = STIX_Two_Text({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--v-stix",
});

export const metadata: Metadata = { title: "05 · Preprint" };

/** References set under section II. The rest continue beneath FIG. 1, the way
    a float at the head of a column interrupts the list in a two-column paper;
    the split is chosen so both columns end level. */
const REFERENCES_BEFORE_FIGURE = 2;

type Degree = (typeof education)[number];

/** TABLE I is transposed (one column per institution) so it fits a column. */
const educationRows: { label: string; cell: (degree: Degree) => ReactNode }[] =
  [
    { label: "Degree", cell: (degree) => degree.degree },
    { label: "Location", cell: (degree) => degree.location },
    { label: "Period", cell: (degree) => degree.period.replace(" — ", "–") },
    {
      label: "Notes",
      cell: (degree) =>
        degree.metrics?.map((metric) => (
          <span key={metric} className={styles.metric}>
            {metric}
          </span>
        )),
    },
  ];

const external = { target: "_blank", rel: "noopener noreferrer" };
const NBSP = "\u00a0";

export default function Preprint() {
  const year = new Date().getFullYear();
  const site = displayUrl(SITE_URL);
  const [doctorate] = education; // most recent degree first
  const elsewhere = socials.filter((s) => !s.href.startsWith("mailto:"));

  return (
    <div className={`${styles.root} ${stix.variable}`}>
      <div className={styles.sheet}>
        <div className={styles.stamp} aria-hidden>
          <span>{site}</span>
          <span>[cs.AI · physics.atom-ph]</span>
          <span>{year}</span>
        </div>

        <header className={styles.runningHead}>
          <Link href="/" className={styles.brand}>
            {person.name}
          </Link>
          <nav aria-label="Primary">
            <ul className={styles.nav}>
              {nav.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>
          <div className={styles.front}>
            <div className={styles.titleLine}>
              <h1 className={styles.title}>{person.name}</h1>
              <span className={styles.marks}>
                <a href="#fn-email" aria-label="Footnote: email address">
                  *
                </a>
                <span aria-hidden>,</span>
                <a href="#fn-elsewhere" aria-label="Footnote: elsewhere online">
                  †
                </a>
              </span>
            </div>
            <p className={styles.byline}>{person.roles.join(" and ")}</p>
            <p className={styles.affiliation}>
              <span>{person.degree}</span>
              <span>{doctorate.institution}</span>
            </p>
            <p className={styles.dated}>(Dated: {year})</p>
            <p className={styles.abstract}>
              {person.about.join(" ")}
            </p>

            <aside
              className={styles.supplement}
              aria-labelledby="supplement-title"
            >
              <h2 id="supplement-title" className={styles.supplementTitle}>
                Supplemental Material
              </h2>
              <p className={styles.supplementText}>
                A three-dimensional room with a working desktop computer
                accompanies this page.
              </p>
              <div className={styles.supplementAction}>
                <PalaceCta />
              </div>
            </aside>
          </div>

          <div className={styles.body}>
            <div className={styles.column}>
              <section className={styles.education}>
                <h2 className={styles.heading}>I. Education</h2>
                <table className={styles.table}>
                  <caption className={styles.tableCaption}>
                    TABLE I. Institutions and degrees.
                  </caption>
                  <thead>
                    <tr>
                      <td />
                      {education.map((degree) => (
                        <th key={degree.institution} scope="col">
                          {degree.institution}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {educationRows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        {education.map((degree) => (
                          <td key={degree.institution}>{row.cell(degree)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <section>
                <h2 className={styles.heading}>II. Current Projects</h2>
                {currentProjects.map((project) => (
                  <Project key={project.name} project={project} />
                ))}
                <p className={styles.paragraph}>
                  A complete list is maintained at{" "}
                  <Link
                    href="/projects"
                    className={`${styles.link} ${styles.url}`}
                  >
                    {site}/projects
                  </Link>
                  .
                </p>
              </section>

              <section className={styles.references}>
                <h2 className={styles.heading}>References</h2>
                <ol className={styles.referenceList}>
                  {papers.slice(0, REFERENCES_BEFORE_FIGURE).map((paper, i) => (
                    <Reference key={paper.href} paper={paper} number={i + 1} />
                  ))}
                </ol>
              </section>
            </div>

            <div className={styles.column}>
              <figure className={styles.figure}>
                <div className={styles.plate}>
                  <Image
                    src={person.portrait}
                    alt={`Portrait of ${person.name}`}
                    fill
                    priority
                    sizes="(max-width: 28.5em) calc(100vw - 2.5rem), 26rem"
                    className={styles.portrait}
                  />
                </div>
                <figcaption className={styles.figureCaption}>
                  FIG. 1. The author.
                </figcaption>
              </figure>

              <ol
                className={`${styles.referenceList} ${styles.referencesContinued}`}
                start={REFERENCES_BEFORE_FIGURE + 1}
                aria-label="References, continued"
              >
                {papers.slice(REFERENCES_BEFORE_FIGURE).map((paper, i) => (
                  <Reference
                    key={paper.href}
                    paper={paper}
                    number={REFERENCES_BEFORE_FIGURE + i + 1}
                  />
                ))}
              </ol>
              <p className={styles.seeAlso}>
                See also{" "}
                <Link href="/papers" className={`${styles.link} ${styles.url}`}>
                  {site}/papers
                </Link>
                .
              </p>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <p id="fn-email" className={styles.footnote}>
            <span className={styles.footnoteMark} aria-hidden>
              *
            </span>
            <a href={`mailto:${person.email}`} className={styles.link}>
              {person.email}
            </a>
          </p>
          <p id="fn-elsewhere" className={styles.footnote}>
            <span className={styles.footnoteMark} aria-hidden>
              †
            </span>
            Also at{" "}
            {elsewhere.map((social, i) => (
              <span key={social.href}>
                {i === 0 ? "" : i === elsewhere.length - 1 ? ", and " : ", "}
                <a href={social.href} {...external} className={styles.link}>
                  {social.label}
                </a>
              </span>
            ))}
            .
          </p>
          <p className={styles.imprint}>
            © {year} {person.name} · {person.location}
          </p>
          <p className={styles.folio} aria-hidden>
            1
          </p>
        </footer>
      </div>
    </div>
  );
}

/** A project is cited when one of the references is its own paper, i.e. the
    paper's title opens with the project's name ("SkillsBench: …"). */
function citationFor(projectName: string): number | null {
  const index = papers.findIndex((paper) =>
    paper.title.startsWith(`${projectName}:`),
  );
  return index === -1 ? null : index + 1;
}

function Project({ project }: { project: (typeof currentProjects)[number] }) {
  const citation = citationFor(project.name);
  return (
    <p className={styles.paragraph}>
      <strong className={styles.runIn}>
        <a href={project.href} {...external} className={styles.link}>
          {project.name}
        </a>
        .
      </strong>{" "}
      {citation ? (
        <>
          {project.description.replace(/\.$/, "")}{" "}
          <a href={`#ref-${citation}`} className={styles.link}>
            [{citation}]
          </a>
          .
        </>
      ) : (
        project.description
      )}
      {project.repoHref ? (
        <>
          {" "}
          The repository is on{" "}
          <a
            href={project.repoHref}
            {...external}
            aria-label={`${project.name} repository on GitHub`}
            className={styles.link}
          >
            GitHub
          </a>
          .
        </>
      ) : null}
    </p>
  );
}

function Reference({ paper, number }: { paper: DetailedPaper; number: number }) {
  return (
    <li id={`ref-${number}`} className={styles.reference}>
      <span>[{number}]</span>
      <span className={styles.referenceText}>
        <Authors list={paper.authors} />,{" "}
        <a
          href={paper.href}
          {...external}
          className={`${styles.link} ${styles.paperTitle}`}
        >
          <Hyphenable text={paper.title} />
        </a>
        , <JournalReference text={paper.reference} />.
      </span>
    </li>
  );
}

/** Chrome never hyphenates a capitalised English word, which leaves title-case
    paper titles with rivers in a justified column. Putting the initial in its
    own inline box lets the rest of the word hyphenate; shaping, kerning and
    the link's accessible name are unaffected. */
function Hyphenable({ text }: { text: string }) {
  return text
    .split(/\b([A-Z])(?=[a-z]{4,})/)
    .map((part, index) =>
      index % 2 ? <span key={index}>{part}</span> : part,
    );
}

/** "B. You" in bold and "et al." in italics, as an APS reference sets them. */
function Authors({ list }: { list: string }) {
  return list.split(/(\bB\. You\b|et al\.)/).map((part, index) => {
    if (part === "B. You") return <strong key={index}>{part}</strong>;
    if (part === "et al.") return <i key={index}>{part}</i>;
    return part;
  });
}

/** APS sets the volume in bold: "Phys. Rev. Lett. <b>130</b>, 200201 (2023)",
    and volume, page and year never part at a line end. Conference and arXiv
    references have no volume and pass through. */
function JournalReference({ text }: { text: string }) {
  const match = text.match(/^(.+?) (\d+), (.+)$/);
  if (!match) return text;
  const [, journal, volume, pages] = match;
  return (
    <>
      {journal} <b>{volume}</b>,{NBSP}
      {pages.replace(" ", NBSP)}
    </>
  );
}
