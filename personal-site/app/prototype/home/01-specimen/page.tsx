// PROTOTYPE 01 — Specimen. Today's Win98 paper theme, art-directed: stacked
// slab name, a numbered ledger with dotted leaders, and rows that select like
// list items instead of every line being a violet underline.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AtomIcon,
  GraduationCapIcon,
  LaptopIcon,
} from "@/components/bio-icons";
import { SocialLinks } from "@/components/social-links";
import {
  currentProjects,
  displayUrl,
  education,
  nav,
  person,
  selectedPapers,
} from "../_shared/data";
import { PalaceCta } from "../_shared/palace-cta";
import styles from "./styles.module.css";

export const metadata: Metadata = { title: "01 · Specimen" };

export default function Specimen() {
  return (
    <div className={styles.root}>
      <header className={styles.masthead}>
        <div className={styles.mastheadInner}>
          <Link href="/" className={styles.brand}>
            bingran.you
          </Link>
          <nav aria-label="Primary" className={styles.nav}>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className={styles.sheet}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.name}>
              Bingran
              <br />
              You
            </h1>
            <ul className={styles.facts}>
              <li className={styles.roles}>
                <span className={styles.fact}>
                  <LaptopIcon className={styles.icon} />
                  {person.roles[0]}
                </span>
                <span className={styles.fact}>
                  <AtomIcon className={styles.icon} />
                  {person.roles[1]}
                </span>
              </li>
              <li className={styles.fact}>
                <GraduationCapIcon className={styles.icon} />
                {person.position}
              </li>
            </ul>
            <div className={styles.cta}>
              <PalaceCta />
            </div>
          </div>

          <figure className={styles.portrait}>
            <div className={`${styles.portraitFrame} halftone-portrait`}>
              <Image
                src={person.portrait}
                alt="Bingran You"
                fill
                priority
                sizes="(max-width: 720px) 9rem, 17rem"
                className={styles.portraitImage}
              />
            </div>
            <figcaption className={styles.caption}>
              Plate 1 · {person.name}
            </figcaption>
          </figure>
        </section>

        <Section index="01" label="Education">
          {education.map((item) => (
            <li key={item.institution} className={styles.entry}>
              <p className={styles.line}>
                <span className={styles.rowTitle}>{item.institution}</span>
                <span className={styles.leader} aria-hidden />
                <span className={styles.meta}>{item.period}</span>
              </p>
              <p className={`${styles.sub} ${styles.split}`}>
                <span>
                  {item.degree} · {item.location}
                </span>
                {item.metrics?.length ? (
                  <span className={styles.meta}>
                    {item.metrics.join(" · ")}
                  </span>
                ) : null}
              </p>
            </li>
          ))}
        </Section>

        <Section index="02" label="Current projects" allHref="/projects">
          {currentProjects.map((project) => (
            <li key={project.name} className={styles.item}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.rowLink}
              >
                <span className={styles.line}>
                  <span className={styles.rowTitle}>{project.name}</span>
                  <span className={styles.leader} aria-hidden />
                  <span className={styles.meta}>
                    {displayUrl(project.href)} ↗
                  </span>
                </span>
                <span className={styles.sub}>{project.description}</span>
              </a>
              {project.repoHref ? (
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repo}
                >
                  Repo ↗
                </a>
              ) : null}
            </li>
          ))}
        </Section>

        <Section index="03" label="Selected papers" allHref="/papers">
          {selectedPapers.map((paper) => (
            <li key={paper.href} className={styles.item}>
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.rowLink} ${styles.paper}`}
              >
                <span className={styles.venue}>{paper.venue}</span>
                <span className={styles.rowTitle}>{paper.title}</span>
                <span className={styles.year}>{paper.year}</span>
              </a>
            </li>
          ))}
        </Section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {person.name} · {person.location}
          </p>
          <div className={styles.socials}>
            <SocialLinks />
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  index,
  label,
  allHref,
  children,
}: {
  index: string;
  label: string;
  allHref?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <header className={styles.rail}>
        <span className={styles.numeral} aria-hidden>
          {index}
        </span>
        <h2 className={styles.label}>{label}</h2>
        {allHref ? (
          <Link href={allHref} className={styles.all}>
            All →
          </Link>
        ) : null}
      </header>
      <ul className={styles.rows}>{children}</ul>
    </section>
  );
}
