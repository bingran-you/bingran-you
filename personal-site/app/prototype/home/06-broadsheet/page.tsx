// PROTOTYPE 06 — Broadsheet. A newspaper front page: the name is the
// blackletter nameplate, the home page is the lead story, and the Windows 98
// palace button runs where a 1990s paper would have sold the space to a
// computer shop — as a boxed advertisement under the photograph.

import type { Metadata } from "next";
import {
  Libre_Franklin,
  Manufacturing_Consent,
  Newsreader,
  Playfair,
} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import {
  currentProjects,
  displayUrl,
  education,
  nav,
  person,
  selectedPapers,
  socials,
} from "../_shared/data";
import { PalaceCta } from "../_shared/palace-cta";
import styles from "./styles.module.css";

const blackletter = Manufacturing_Consent({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--v-blackletter",
});
const display = Playfair({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "wdth"],
  variable: "--v-display",
});
const text = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--v-text",
});
const label = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--v-label",
});

export const metadata: Metadata = { title: "06 · Broadsheet" };

const fonts = [blackletter, display, text, label]
  .map((font) => font.variable)
  .join(" ");
const domain = displayUrl(SITE_URL);
const newTab = { target: "_blank", rel: "noopener noreferrer" };

/** Keeps initials with their surname, and "et al." whole, when a byline wraps. */
function tieNames(authors: string): string {
  return authors
    .replace(/\. (?=\p{Lu})/gu, ".\u00a0")
    .replace(/ al\.$/, "\u00a0al.");
}

export default function Broadsheet() {
  const year = new Date().getFullYear();
  const { ai, ion } = person.tracks;

  return (
    <div className={`${styles.root} ${fonts}`}>
      <header className={styles.masthead}>
        <div className={styles.flag}>
          <h1 className={styles.nameplate}>{person.name}</h1>
          <div className={styles.ears}>
            <p className={`${styles.ear} ${styles.earLeft}`}>
              <span className={styles.earLine}>{person.lab}</span>
              <span className={styles.earDot}> · </span>
              <span className={styles.earLine}>{person.school}</span>
            </p>
            <p className={`${styles.ear} ${styles.earRight}`}>
              <span className={styles.earLine}>{person.degree}</span>{" "}
              <span className={styles.earLine}>at {person.school}</span>
            </p>
          </div>
        </div>

        <p className={styles.dateline}>
          <span className={styles.dateItem}>Berkeley, California</span>
          <span className={styles.dateItem}>Late Edition · {year}</span>
          <Link href="/" className={`${styles.dateItem} ${styles.home}`}>
            {domain}
          </Link>
        </p>

        <nav aria-label="Sections" className={styles.index}>
          <ul className={styles.indexList}>
            {nav.map((item) => (
              <li key={item.href} className={styles.indexItem}>
                <Link href={item.href} className={styles.indexLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={styles.sheet}>
        <section className={styles.front} aria-labelledby="lead-headline">
          <header className={styles.leadHead}>
            <p className={styles.kicker}>Profile</p>
            <h2 id="lead-headline" className={styles.headline}>
              <span className={styles.headlineLine}>{person.roles[0]},</span>{" "}
              <span className={styles.headlineLine}>{person.roles[1]}</span>
            </h2>
            <p className={styles.deck}>{person.summary}</p>
          </header>

          <figure className={styles.photo}>
            <div className={styles.photoFrame}>
              <Image
                src={person.portrait}
                alt="Bingran You"
                fill
                priority
                sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 520px"
                className={styles.photoImage}
              />
            </div>
            <figcaption className={styles.caption}>
              <span className={styles.captionName}>{person.name},</span>{" "}
              {person.school}.
            </figcaption>
          </figure>

          <aside className={styles.advert} aria-labelledby="advert-label">
            <p id="advert-label" className={styles.advertLabel}>
              Advertisement
            </p>
            <div className={styles.advertBox}>
              <p className={styles.advertLine}>
                Step into a three-dimensional room.
              </p>
              <PalaceCta />
              <p className={styles.advertAddress} aria-hidden>
                {domain}/palace
              </p>
            </div>
          </aside>

          <div className={styles.leadBody}>
            <div className={styles.columns}>
              {[ai, ion].map((track) => (
                <p key={track.role} className={styles.graf}>
                  <span className={styles.runIn}>{track.role}</span>
                  {" — "}
                  {track.blurb}
                </p>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.below}>
          <section
            className={`${styles.col} ${styles.colEducation}`}
            aria-labelledby="slug-education"
          >
            <h2 id="slug-education" className={styles.slug}>
              Education
            </h2>
            <div className={styles.almanac}>
              {education.map((item) => (
                <article key={item.institution} className={styles.entry}>
                  <h3 className={styles.entryName}>{item.institution}</h3>
                  <dl className={styles.facts}>
                    <Fact term="Degree">{item.degree}</Fact>
                    <Fact term="Location">{item.location}</Fact>
                    <Fact term="Period">{item.period}</Fact>
                    {item.metrics?.length ? (
                      <Fact term="Notes">
                        {item.metrics.map((metric) => (
                          <span key={metric} className={styles.metric}>
                            {metric}
                          </span>
                        ))}
                      </Fact>
                    ) : null}
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section
            className={`${styles.col} ${styles.colProjects}`}
            aria-labelledby="slug-projects"
          >
            <h2 id="slug-projects" className={styles.slug}>
              Current Projects
            </h2>
            <ul className={styles.stories}>
              {currentProjects.map((project) => (
                <li key={project.name} className={styles.story}>
                  <h3 className={styles.briefName}>
                    <a
                      href={project.href}
                      {...newTab}
                      className={styles.headLink}
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className={styles.briefText}>
                    {project.description}
                    {project.repoHref ? (
                      <>
                        {" "}
                        <a
                          href={project.repoHref}
                          {...newTab}
                          className={styles.repo}
                        >
                          Repository&nbsp;↗
                        </a>
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
            <p className={styles.jump}>
              <Link href="/projects" className={styles.jumpLink}>
                Continued at <span className={styles.jumpPath}>/projects</span>{" "}
                →
              </Link>
            </p>
          </section>

          <section
            className={`${styles.col} ${styles.colPapers}`}
            aria-labelledby="slug-papers"
          >
            <h2 id="slug-papers" className={styles.slug}>
              Selected Papers
            </h2>
            <ul className={styles.stories}>
              {selectedPapers.map((paper) => (
                <li key={paper.href} className={styles.story}>
                  <p className={styles.venue}>{paper.venue}</p>
                  <h3 className={styles.paperTitle}>
                    <a href={paper.href} {...newTab} className={styles.headLink}>
                      {paper.title}
                    </a>
                  </h3>
                  <p className={styles.byline}>
                    By {tieNames(paper.authors)}
                  </p>
                </li>
              ))}
            </ul>
            <p className={styles.jump}>
              <Link href="/papers" className={styles.jumpLink}>
                Continued at <span className={styles.jumpPath}>/papers</span> →
              </Link>
            </p>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          © {year} {person.name} · {person.location}
        </p>
        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.href} className={styles.social}>
              <a
                href={social.href}
                {...(social.href.startsWith("mailto:") ? {} : newTab)}
                className={styles.socialLink}
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

function Fact({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className={styles.fact}>
      <dt className={styles.term}>{term}</dt>
      <dd className={styles.detail}>{children}</dd>
    </div>
  );
}
