// PROTOTYPE 10 — Atelier. An art-book spread: a light display serif at
// title-page scale, the portrait cut as an arched doorway, and the palace
// button set beneath it as the plaque on that door.

import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  currentProjects,
  education,
  nav,
  person,
  selectedPapers,
  socials,
} from "../_shared/data";
import { PalaceCta } from "../_shared/palace-cta";
import styles from "./styles.module.css";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--v-display",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--v-sans",
});

export const metadata: Metadata = { title: "10 · Atelier" };

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Keeps hyphenated compounds ("LLM-Agent") on one line: U+2060 word joiner. */
const unbroken = (text: string) => text.replace(/-/g, "-\u2060");

export default function Atelier() {
  return (
    <div className={`${styles.root} ${display.variable} ${sans.variable}`}>
      <header className={styles.running}>
        <Link href="/" className={styles.brand}>
          {person.name}
        </Link>
        <nav aria-label="Primary" className={styles.nav}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-labelledby="atelier-name">
          <div className={styles.lede}>
            <p className={styles.overline}>{person.roles.join(" · ")}</p>
            <h1 id="atelier-name" className={styles.name}>
              <span className={styles.given}>{person.givenName}</span>{" "}
              <span className={styles.family}>{person.familyName}</span>
            </h1>
          </div>

          <div className={styles.intro}>
            <p className={styles.position}>{person.position}</p>
            <p className={styles.standfirst}>{person.craft}</p>
          </div>

          <div className={styles.arch}>
            <div className={styles.plate}>
              <Image
                src={person.portrait}
                alt={person.name}
                fill
                priority
                sizes="(max-width: 660px) 65vw, (max-width: 1199px) 36vw, 28vw"
                className={styles.portrait}
              />
            </div>
          </div>

          <div className={styles.plaque}>
            <p className={styles.doorNote}>the door</p>
            <PalaceCta />
          </div>
        </section>

        <section className={styles.summary} aria-label="In one sentence">
          <p className={styles.pull}>{person.summary}</p>
        </section>

        <section className={styles.contents} aria-labelledby="atelier-contents">
          <h2 id="atelier-contents" className={styles.contentsTitle}>
            Contents
          </h2>

          <div className={styles.chapters}>
            <Chapter numeral="I" title="Education">
              {education.map((item) => (
                <li key={item.institution} className={styles.entry}>
                  <p className={styles.kicker}>{item.period}</p>
                  <p className={styles.entryTitle}>{item.institution}</p>
                  <p className={`${styles.detail} ${styles.fact}`}>
                    {item.degree}
                  </p>
                  <p className={styles.detail}>
                    {[item.location, ...(item.metrics ?? [])].map((datum) => (
                      <span key={datum} className={styles.datum}>
                        {datum}
                      </span>
                    ))}
                  </p>
                  <p className={`${styles.detail} ${styles.gloss}`}>
                    {unbroken(item.summary)}
                  </p>
                </li>
              ))}
            </Chapter>

            <Chapter
              numeral="II"
              title="Current projects"
              more={{ href: "/projects", label: "see all projects" }}
            >
              {currentProjects.map((project) => (
                <li key={project.name} className={styles.entry}>
                  <a
                    href={project.href}
                    {...external}
                    className={styles.entryLink}
                  >
                    <span className={styles.entryTitle}>
                      <span className={styles.linkInk}>{project.name}</span>
                    </span>
                    <span className={styles.detail}>
                      {unbroken(project.description)}
                    </span>
                  </a>
                  {project.repoHref ? (
                    <a
                      href={project.repoHref}
                      {...external}
                      className={styles.aside}
                    >
                      repository
                    </a>
                  ) : null}
                </li>
              ))}
            </Chapter>

            <Chapter
              numeral="III"
              title="Selected papers"
              more={{ href: "/papers", label: "see all papers" }}
            >
              {selectedPapers.map((paper) => (
                <li key={paper.href} className={styles.entry}>
                  <a
                    href={paper.href}
                    {...external}
                    className={styles.entryLink}
                  >
                    <span className={styles.kicker}>{paper.venue}</span>
                    <span className={styles.entryTitle}>
                      <span className={styles.linkInk}>
                        {unbroken(paper.title)}
                      </span>
                    </span>
                    <span className={`${styles.detail} ${styles.byline}`}>
                      {paper.authors}
                    </span>
                  </a>
                </li>
              ))}
            </Chapter>
          </div>
        </section>
      </main>

      <footer className={styles.colophon}>
        <span className={styles.device} aria-hidden />
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
      </footer>
    </div>
  );
}

function Chapter({
  numeral,
  title,
  more,
  children,
}: {
  numeral: string;
  title: string;
  more?: { href: string; label: string };
  children: React.ReactNode;
}) {
  return (
    <section className={styles.chapter}>
      <header className={styles.chapterHead}>
        <span className={styles.numeral} aria-hidden>
          {numeral}
        </span>
        <h3 className={styles.chapterTitle}>{title}</h3>
      </header>
      <ul className={styles.entries}>{children}</ul>
      {more ? (
        <Link href={more.href} className={styles.more}>
          {more.label}
        </Link>
      ) : null}
    </section>
  );
}
