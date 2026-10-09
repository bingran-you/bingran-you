// PROTOTYPE 11 — Article. The home page set as the first page of a journal
// article, on the page geometry measured from the Nature PDF of the 3D-printed
// ion-trap paper (595.276 × 790.866 pt page, 40 pt left margin, 165 pt meta
// column, two 257 pt body columns, hairline rules). Layout only: the faces are
// open ones (Source Serif 4, Hanken Grotesk), and no journal name, logo or
// badge is reproduced. Where the journal prints "Check for updates", this page
// has the palace button.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hanken_Grotesk, Source_Serif_4 } from "next/font/google";
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

export const metadata: Metadata = { title: "11 · Article" };

const serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--v-serif",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--v-sans",
  display: "swap",
});

const HREF = {
  skillsBench: "https://arxiv.org/abs/2602.12670",
  clawsBench: "https://arxiv.org/abs/2604.05172",
  benchShield: "https://arxiv.org/abs/2609.11028",
  adjoint: "https://www.nature.com/articles/s44310-025-00102-4",
  broadband: "https://arxiv.org/abs/2607.25062",
  multiplexed: "https://doi.org/10.1103/ppm8-8kx5",
  printedTrap: "https://www.nature.com/articles/s41586-025-09474-1",
  ramsey: "https://doi.org/10.1103/PhysRevLett.130.200201",
} as const;

// References are numbered in order of first citation, as the journal does.
// Titles are in the reference style's sentence case; `source` is the tail.
const REFERENCES: { href: string; title: string; source: React.ReactNode }[] = [
  {
    href: HREF.skillsBench,
    title:
      "SkillsBench: benchmarking how well agent skills work across diverse tasks",
    source: (
      <>
        In <i>NeurIPS</i> (2026); preprint at arXiv:2602.12670
      </>
    ),
  },
  {
    href: HREF.clawsBench,
    title:
      "ClawsBench: evaluating capability and safety of LLM productivity agents in simulated workspaces",
    source: (
      <>
        In <i>COLM</i> (2026); preprint at arXiv:2604.05172
      </>
    ),
  },
  {
    href: HREF.benchShield,
    title:
      "BenchShield: formal model-backed instrumentation for reward integrity in LLM-agent evaluation infrastructure",
    source: <>Preprint at arXiv:2609.11028 (2026)</>,
  },
  {
    href: HREF.adjoint,
    title:
      "Individual trapped-ion addressing with adjoint-optimized multimode photonic circuits",
    source: (
      <>
        <i>npj Nanophotonics</i> <b>3</b>, 3 (2026)
      </>
    ),
  },
  {
    href: HREF.broadband,
    title:
      "A broadband, individually addressing two- and three-dimensional photonic integrated circuit for trapped-ion qubit control",
    source: <>Preprint at arXiv:2607.25062 (2026)</>,
  },
  {
    href: HREF.multiplexed,
    title:
      "Temporally multiplexed ion-photon quantum interface via fast ion-chain transport",
    source: (
      <>
        <i>Phys. Rev. Appl.</i> <b>26</b>, 014101 (2026)
      </>
    ),
  },
  {
    href: HREF.printedTrap,
    title:
      "3D-printed micro ion trap technology for quantum information applications",
    source: (
      <>
        <i>Nature</i> <b>645</b>, 362–368 (2025)
      </>
    ),
  },
  {
    href: HREF.ramsey,
    title:
      "Test of causal nonlinear quantum mechanics by Ramsey interferometry with a trapped ion",
    source: (
      <>
        <i>Phys. Rev. Lett.</i> <b>130</b>, 200201 (2023)
      </>
    ),
  },
];

const refNumber = (href: string) =>
  REFERENCES.findIndex((r) => r.href === href) + 1;

// Copy below is verbatim from app/(personal)/about/page.tsx (`facts` and
// `focusAreas`); `cite` ties a sentence to the paper it describes.
type Sentence = { text: string; cite?: string[] };

const ABSTRACT: Sentence[] = [
  {
    text: "I am Bingran You, a PhD candidate in Applied Science & Technology at UC Berkeley, advised in the Haeffner Lab.",
  },
  {
    text: "I build reliable AI systems — agent infrastructure, evaluation harnesses, and applied AI products that need to behave under noisy real-world conditions.",
    cite: [HREF.skillsBench, HREF.clawsBench, HREF.benchShield],
  },
  {
    text: "I run trapped-ion experiments in atomic, molecular and optical physics — integrated photonics for individual ion addressing, ion-photon interfaces, and 3D-printed micro ion traps for scalable hardware.",
    cite: [
      HREF.adjoint,
      HREF.broadband,
      HREF.multiplexed,
      HREF.printedTrap,
    ],
  },
];

const TRACKS: { role: string; sentences: Sentence[] }[] = [
  {
    role: person.roles[0],
    sentences: [
      {
        text: "Agent skills and tool use, with an emphasis on evaluation that mirrors real workflows.",
        cite: [HREF.skillsBench],
      },
      {
        text: "Productivity agents that triage notifications, dispatch background work, and stay out of the way.",
      },
      {
        text: "Open-source benchmarks for measuring agent capability and safety in simulated workspaces.",
        cite: [HREF.clawsBench],
      },
      {
        text: "Reward integrity for agent benchmarks — instrumentation that catches reward hacking in evaluation infrastructure.",
        cite: [HREF.benchShield],
      },
    ],
  },
  {
    role: person.roles[1],
    sentences: [
      {
        text: "Adjoint-optimized integrated photonic circuits for individual trapped-ion addressing.",
        cite: [HREF.adjoint],
      },
      {
        text: "Broadband two- and three-dimensional photonic integrated circuits for individually addressing trapped ions.",
        cite: [HREF.broadband],
      },
      {
        text: "Temporally multiplexed ion-photon interfaces via fast ion-chain transport.",
        cite: [HREF.multiplexed],
      },
      {
        text: "3D-printed micro ion trap technology for scalable atomic-physics platforms.",
        cite: [HREF.printedTrap],
      },
      {
        text: "Trapped-ion Ramsey interferometry probing fundamental physics of single-ion vibrational modes.",
        cite: [HREF.ramsey],
      },
    ],
  },
];

/** "1–3" for a run, "4,5" for a pair: the journal's superscript citation. */
function citationLabel(numbers: number[]): string {
  const sorted = [...numbers].sort((a, b) => a - b);
  const isRun = sorted.every((n, i) => i === 0 || n === sorted[i - 1] + 1);
  return isRun && sorted.length > 2
    ? `${sorted[0]}–${sorted.at(-1)}`
    : sorted.join(",");
}

/** Sentence with its citation set before the final full stop, journal-style. */
function Cited({ sentence }: { sentence: Sentence }) {
  if (!sentence.cite) return <>{sentence.text} </>;
  const numbers = sentence.cite.map(refNumber);
  return (
    <>
      {sentence.text.replace(/\.$/, "")}
      <sup className={styles.cite}>
        <a href={`#ref-${Math.min(...numbers)}`}>{citationLabel(numbers)}</a>
      </sup>
      {". "}
    </>
  );
}

/** "X. Li, B. You, and S. Khan" → "Li, X., You, B. & Khan, S." */
function ReferenceAuthors({ authors }: { authors: string }) {
  const names = authors.split(", ").map((name) => name.replace(/^and /, ""));
  const truncated = names.at(-1) === "et al.";
  if (truncated) names.pop();
  const inverted = names.map((name) => {
    if (name === "…") return name;
    const parts = name.split(" ");
    const surname = parts.pop();
    return `${surname}, ${parts.join(" ")}`;
  });
  return (
    <>
      {inverted.map((name, i) => {
        const last = i === inverted.length - 1;
        const separator = last ? "" : !truncated && i === inverted.length - 2 ? " & " : ", ";
        return (
          <span key={`${name}-${i}`}>
            {name === "You, B." ? <b>{name}</b> : name}
            {separator}
          </span>
        );
      })}
      {truncated ? " et al." : ""}
    </>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 12 9" aria-hidden className={styles.envelope}>
      <rect x="0.5" y="0.5" width="11" height="8" fill="none" stroke="currentColor" />
      <path d="M0.5 0.5 6 5l5.5-4.5" fill="none" stroke="currentColor" />
    </svg>
  );
}

export default function ArticlePage() {
  const year = new Date().getFullYear();
  const host = displayUrl(SITE_URL);
  const [position, field] = person.degree.split(" in ");
  const byHref = new Map<string, DetailedPaper>(papers.map((p) => [p.href, p]));
  const sitePages = nav.filter((item) => item.href !== "/palace");
  const supplementary = nav.filter((item) =>
    ["/skills", "/blog", "/posts", "/about"].includes(item.href),
  );

  return (
    <div className={`${styles.root} ${serif.variable} ${sans.variable}`}>
      <div className={styles.sheet}>
        <div className={styles.page}>
          <span className={styles.spine} aria-hidden />

          <header className={styles.runningHead}>
            <p className={styles.kind}>Article</p>
            <nav aria-label="Primary" className={styles.nav}>
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <main>
            <h1 className={styles.title}>
              {person.name}: agentic builder <br className={styles.titleBreak} />
              and ion trapper
            </h1>

            <div className={styles.front}>
              <ul className={styles.meta}>
                <li>
                  <Link href="/" className={styles.link}>
                    {SITE_URL}
                  </Link>
                </li>
                <li>Position: {position}</li>
                <li>Field: {field}</li>
                <li>Institution: {person.school}</li>
                <li className={styles.metaAction}>
                  <PalaceCta />
                </li>
              </ul>

              <div className={styles.lead}>
                <p className={styles.authors}>
                  {person.name}
                  <sup>1,2</sup>
                  <a
                    href={`mailto:${person.email}`}
                    className={styles.mail}
                    aria-label={`Email ${person.name}`}
                  >
                    <EnvelopeIcon />
                  </a>
                </p>
                <p className={styles.abstract}>
                  {ABSTRACT.map((sentence) => (
                    <Cited key={sentence.text} sentence={sentence} />
                  ))}
                </p>
              </div>
            </div>

            <div className={styles.body}>
              <div className={styles.column}>
                {TRACKS.map((track) => (
                  <p key={track.role} className={styles.text}>
                    <b className={styles.runIn}>{track.role}.</b>{" "}
                    {track.sentences.map((sentence) => (
                      <Cited key={sentence.text} sentence={sentence} />
                    ))}
                  </p>
                ))}

                <h2 className={styles.heading}>Current projects</h2>
                {currentProjects.map((project) => (
                  <p key={project.name} className={styles.text}>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.runIn} ${styles.link}`}
                    >
                      {project.name}.
                    </a>{" "}
                    {project.description}
                    {project.repoHref ? (
                      <>
                        {" "}
                        The repository is{" "}
                        <a
                          href={project.repoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          on GitHub
                        </a>
                        .
                      </>
                    ) : null}
                  </p>
                ))}

                <h2 className={styles.heading}>Online content</h2>
                <p className={styles.text}>
                  Any{" "}
                  {sitePages.map((item, i) => (
                    <span key={item.href}>
                      <Link href={item.href} className={styles.link}>
                        {item.label.toLowerCase()}
                      </Link>
                      {i < sitePages.length - 2
                        ? ", "
                        : i === sitePages.length - 2
                          ? " and "
                          : ""}
                    </span>
                  ))}{" "}
                  pages are available at{" "}
                  <Link href="/" className={styles.link}>
                    {SITE_URL}
                  </Link>
                  ; a three-dimensional room is at{" "}
                  <Link href="/palace" className={styles.link}>
                    {host}/palace
                  </Link>
                  .
                </p>
              </div>

              <div className={styles.column}>
                <figure className={styles.figure}>
                  <div className={styles.plate}>
                    <Image
                      src={person.portrait}
                      alt={person.name}
                      fill
                      priority
                      sizes="(max-width: 700px) 100vw, 560px"
                      className={styles.portrait}
                    />
                  </div>
                  <figcaption className={styles.caption}>
                    <b>Fig. 1 | {person.name}.</b> {person.position}.
                  </figcaption>
                </figure>

                <table className={styles.table}>
                  <caption className={styles.tableTitle}>
                    Table 1 | Education
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Institution</th>
                      <th scope="col">Degree</th>
                      <th scope="col">Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {education.map((item) => (
                      <tr key={item.institution}>
                        <th scope="row">
                          {item.institution}
                          <span className={styles.cellNote}>
                            {[item.location, ...(item.metrics ?? [])].join(" · ")}
                          </span>
                        </th>
                        <td>{item.degree}</td>
                        <td className={styles.period}>{item.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </main>

          <footer className={styles.footer}>
            <p className={styles.affiliations}>
              <sup>1</sup>
              {field}, University of California, Berkeley, CA, USA.{" "}
              <sup>2</sup>
              {person.lab}, University of California, Berkeley, CA, USA.{" "}
              <EnvelopeIcon />
              e-mail:{" "}
              <a href={`mailto:${person.email}`} className={styles.link}>
                {person.email}
              </a>
              . Also at{" "}
              {socials
                .filter((social) => !social.href.startsWith("mailto:"))
                .map((social, i, all) => (
                  <span key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {social.label}
                    </a>
                    {i < all.length - 1 ? "; " : "."}
                  </span>
                ))}
            </p>
            <p className={styles.folio}>
              <b>1</b>
              <span>
                <Link href="/" className={styles.link}>
                  {host}
                </Link>
              </span>
              <span>
                © {year} {person.name}
              </span>
              <span>{person.location}</span>
            </p>
          </footer>
        </div>
      </div>

      <div className={styles.sheet}>
        <div className={`${styles.page} ${styles.recto}`}>
          <span className={styles.corner} aria-hidden />

          <section aria-label="References">
            <ol className={styles.references}>
              {REFERENCES.map((reference, i) => {
                const paper = byHref.get(reference.href);
                return (
                  <li key={reference.href} id={`ref-${i + 1}`}>
                    <span className={styles.refNumber}>{i + 1}.</span>
                    <span>
                      {paper ? <ReferenceAuthors authors={paper.authors} /> : null}{" "}
                      <a
                        href={reference.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        {reference.title}
                      </a>
                      . {reference.source}.
                    </span>
                  </li>
                );
              })}
            </ol>
          </section>

          <section className={styles.endMatter} aria-label="Additional information">
            <p>
              <b>Data availability</b> Every paper, with its venue, is listed
              at{" "}
              <Link href="/papers" className={styles.link}>
                {host}/papers
              </Link>
              .
            </p>
            <p>
              <b>Code availability</b> Projects, most of them open source, are
              listed at{" "}
              <Link href="/projects" className={styles.link}>
                {host}/projects
              </Link>
              .
            </p>
            <p>
              <b>Additional information</b>
              <br />
              <b>Supplementary information</b> The online version continues at{" "}
              {supplementary.map((item, i) => (
                <span key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {host}
                    {item.href}
                  </Link>
                  {i < supplementary.length - 2
                    ? ", "
                    : i === supplementary.length - 2
                      ? " and "
                      : "."}
                </span>
              ))}
              <br />
              <b>Correspondence and requests for materials</b> should be
              addressed to{" "}
              <a href={`mailto:${person.email}`} className={styles.link}>
                {person.name}
              </a>
              .
            </p>
            <p>
              © {year} {person.name}
            </p>
          </section>

          <footer className={styles.footer}>
            <p className={`${styles.folio} ${styles.folioRecto}`}>
              <span>
                <Link href="/" className={styles.link}>
                  {host}
                </Link>
              </span>
              <span>
                © {year} {person.name}
              </span>
              <span>{person.location}</span>
              <b>2</b>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
