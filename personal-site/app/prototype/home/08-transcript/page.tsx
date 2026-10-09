// PROTOTYPE 08 — Transcript. The home page is the log of an agent run that
// answers "who is bingran you?": every section is a tool call with its result,
// and the run is waiting on one permission, which the palace button grants.

import type { Metadata } from "next";
import { Cascadia_Code } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  currentProjects,
  education,
  nav,
  papers,
  person,
  projects,
  selectedPapers,
  socials,
} from "../_shared/data";
import { PalaceCta } from "../_shared/palace-cta";
import styles from "./styles.module.css";

const mono = Cascadia_Code({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--v-mono",
});

export const metadata: Metadata = { title: "08 · Transcript" };

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

/** "NeurIPS 2026" → "NeurIPS": the year has its own column. */
function venueName(venue: string): string {
  return venue.replace(/\s+\d{4}$/, "");
}

/** Keeps hyphenated compounds such as "trapped-ion" on one line. */
function unbroken(text: string): React.ReactNode[] {
  return text.split(/(\S+-\S+)/).map((part, index) =>
    index % 2 ? (
      <span key={index} className={styles.nowrap}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function Transcript() {
  return (
    <div className={`${styles.root} ${mono.variable}`}>
      <header className={styles.bar}>
        <div className={`${styles.frame} ${styles.barInner}`}>
          <Link href="/" className={styles.brand}>
            bingran.you
            <span aria-hidden className={styles.brandNote}>
              {" — session"}
            </span>
          </Link>
          <nav aria-label="Primary" className={styles.nav}>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={styles.command}>
                <span aria-hidden className={styles.slash}>
                  /
                </span>
                {item.href.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className={`${styles.frame} ${styles.session}`}>
        <p className={`${styles.turn} ${styles.prompt}`}>
          <span aria-hidden className={styles.caret}>
            &gt;
          </span>
          who is bingran you?
        </p>

        <Step tool="Read" args="identity.md" className={styles.identity}>
          <div className={styles.quote}>
            <div className={styles.dossier}>
              <div>
                <h1 className={styles.name}>{person.name}</h1>
                <div className={styles.facts}>
                  <Key>roles</Key>
                  <p className={styles.roles}>
                    {person.roles[0]}
                    <span className={styles.dot}> · </span>
                    {person.roles[1]}
                  </p>
                  <Key>position</Key>
                  <p>{person.position}</p>
                  <Key>summary</Key>
                  <p className={styles.summary}>{unbroken(person.summary)}</p>
                </div>
              </div>
              <figure className={styles.attachment}>
                <div className={styles.photo}>
                  <Image
                    src={person.portrait}
                    alt="Portrait of Bingran You"
                    fill
                    priority
                    sizes="(max-width: 640px) calc(100vw - 4.5rem), 12rem"
                    className={styles.photoImage}
                  />
                </div>
                <figcaption aria-hidden className={styles.filename}>
                  portrait.jpg
                </figcaption>
              </figure>
            </div>
          </div>
        </Step>

        <Step
          tool="Request"
          args={'open, "/palace"'}
          label="Memory Palace"
          meta="pending"
          className={styles.permission}
        >
          <div className={styles.quote}>
            <div className={styles.card}>
              <p className={styles.ask}>
                The agent wants to enter a three-dimensional room.
              </p>
              <div className={styles.grant}>
                <span aria-hidden className={styles.grantCaret}>
                  &gt;
                </span>
                <PalaceCta />
              </div>
            </div>
          </div>
        </Step>

        <Step
          tool="Read"
          args="education.md"
          label="Education"
          meta={`${education.length} entries`}
          className={styles.education}
        >
          <ul className={styles.tree}>
            {education.map((item) => (
              <li
                key={item.institution}
                className={`${styles.node} ${styles.entry}`}
              >
                <span className={styles.period}>{item.period}</span>
                <span className={styles.school}>{item.institution}</span>
                <span className={styles.degree}>
                  {item.degree}
                  <span className={styles.dot}> · </span>
                  {item.location}
                </span>
                {item.metrics?.length ? (
                  <span className={styles.metrics}>
                    {item.metrics.join(" · ")}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </Step>

        <Step
          tool="List"
          args="projects, current"
          label="Current projects"
          meta={`${currentProjects.length} of ${projects.length}`}
          className={styles.projects}
        >
          <ul className={styles.tree}>
            {currentProjects.map((project) => (
              <li
                key={project.name}
                className={`${styles.node} ${styles.project}`}
              >
                <a href={project.href} {...external} className={styles.title}>
                  {project.name}
                </a>
                <p className={styles.description}>
                  {unbroken(project.description)}
                </p>
                {project.repoHref ? (
                  <a
                    href={project.repoHref}
                    {...external}
                    className={styles.repo}
                  >
                    repo
                  </a>
                ) : null}
              </li>
            ))}
            <li className={styles.node}>
              <Link
                href="/projects"
                aria-label="All projects"
                className={styles.more}
              >
                <span className={styles.arrow}>-&gt;</span> /projects
              </Link>
            </li>
          </ul>
        </Step>

        <Step
          tool="Search"
          args="papers, selected"
          label="Selected papers"
          meta={`${selectedPapers.length} of ${papers.length}`}
          className={styles.papers}
        >
          <ul className={styles.tree}>
            {selectedPapers.map((paper) => (
              <li key={paper.href} className={`${styles.node} ${styles.paper}`}>
                <span className={styles.venue}>{venueName(paper.venue)}</span>
                <a href={paper.href} {...external} className={styles.title}>
                  {unbroken(paper.title)}
                </a>
                <span className={styles.year}>{paper.year}</span>
              </li>
            ))}
            <li className={styles.node}>
              <Link
                href="/papers"
                aria-label="All papers"
                className={styles.more}
              >
                <span className={styles.arrow}>-&gt;</span> /papers
              </Link>
            </li>
          </ul>
        </Step>

        <div aria-hidden className={`${styles.turn} ${styles.input}`}>
          <span className={styles.caret}>&gt;</span>
          <span className={styles.cursor} />
          <span className={styles.placeholder}>try /projects</span>
        </div>

        <span aria-hidden className={styles.unresolved}>
          awaiting permission
        </span>
      </main>

      <footer className={styles.status}>
        <div className={`${styles.frame} ${styles.statusInner}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {person.name} · {person.location}
          </p>
          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  {...(social.href.startsWith("mailto:") ? {} : external)}
                  className={styles.social}
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}

/** A field name beside a value in identity.md. The values speak for
    themselves, so the labels are transcript dressing and stay out of the
    accessibility tree. */
function Key({ children }: { children: string }) {
  return (
    <span aria-hidden className={styles.key}>
      {children}
    </span>
  );
}

/** One tool call: a bullet, `Tool(args)`, an optional result count, then the
    result. `label` is the section's plain name for assistive tech; leave it
    out when the result carries its own heading. */
function Step({
  tool,
  args,
  label,
  meta,
  className,
  children,
}: {
  tool: string;
  args: string;
  label?: string;
  meta?: string;
  className: string;
  children: React.ReactNode;
}) {
  const signature = (
    <span aria-hidden>
      <span className={styles.tool}>{tool}</span>
      <span className={styles.args}>({args})</span>
    </span>
  );

  return (
    <section className={`${styles.step} ${className}`}>
      <header className={styles.call}>
        {label ? (
          <h2 className={styles.signature}>
            <span className={styles.sr}>{label}</span>
            {signature}
          </h2>
        ) : (
          <div className={styles.signature}>{signature}</div>
        )}
        {meta ? <p className={styles.meta}>{meta}</p> : null}
      </header>
      {children}
    </section>
  );
}
