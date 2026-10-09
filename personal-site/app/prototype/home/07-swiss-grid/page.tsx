// PROTOTYPE 07 — Swiss Grid. An International-Style poster: "Bingran" set
// across all twelve columns and "You" across exactly six, one accent, every
// edge hung from a grid line. The Win98 palace button is the single found
// object on the sheet.

import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--v-archivo",
});

export const metadata: Metadata = { title: "07 · Swiss Grid" };

const COLUMNS = 12;
const external = { target: "_blank", rel: "noopener noreferrer" } as const;
const twoDigits = (n: number) => String(n).padStart(2, "0");

// Hand kerning for the given name, in em, added to the tracking: "in" and "an"
// close up, "ra" opens so the two letters stop touching. The font's own kerning
// is off for that line (browsers disagree about kerning across elements) and
// its one pair here, r·a at -0.0123em, is folded in — so these three sum to
// exactly that pair and the calibrated width of the word does not move.
const KERN: Record<string, number> = { in: -0.015, ra: 0.0177, an: -0.015 };

// Archivo's Latin subset has ↑ and ↓ but no → or ↗, so those are ↑ turned.
function Arrow({ to }: { to: "right" | "out" }) {
  return (
    <span className={`${styles.arrow} ${styles[to]}`} aria-hidden>
      ↑
    </span>
  );
}

/** Running text that never breaks inside a hyphenated compound ("trapped-ion")
 *  and never starts a line with an ampersand. */
function Text({ children }: { children: string }) {
  const text = children.replace(/ & /g, "\u00a0& ");
  return text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className={styles.nowrap}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function SwissGrid() {
  return (
    <div className={`${styles.root} ${archivo.variable}`}>
      <div className={styles.sheet}>
        <div className={styles.page}>
          <div className={styles.guides} aria-hidden>
            {Array.from({ length: COLUMNS }, (_, i) => (
              <span key={i} />
            ))}
          </div>

          <header className={styles.top}>
            <Link href="/" className={styles.brand}>
              {person.name}
            </Link>
            <nav aria-label="Primary" className={styles.nav}>
              {nav.map((item, i) => (
                <Link key={item.href} href={item.href} className={styles.navLink}>
                  <span className={styles.navIndex} aria-hidden>
                    {twoDigits(i + 1)}
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </header>

          <main>
            <section className={styles.hero}>
              <h1 className={styles.name} aria-label={person.name}>
                <span className={styles.line} aria-hidden>
                  <span className={styles.lineInner}>
                    {[...person.givenName].map((letter, i, all) => (
                      <span
                        key={i}
                        style={
                          {
                            "--v-kern": KERN[letter + (all[i + 1] ?? "")] ?? 0,
                          } as React.CSSProperties
                        }
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </span>{" "}
                <span className={styles.line} aria-hidden>
                  <span className={styles.lineInner}>{person.familyName}</span>
                </span>
              </h1>

              <figure className={styles.portrait}>
                <span className={styles.frame}>
                  <Image
                    src={person.portrait}
                    alt={`Portrait of ${person.name}`}
                    fill
                    priority
                    sizes="(max-width: 599px) 120vw, 40vw"
                    className={styles.portraitImage}
                  />
                </span>
                <figcaption className={styles.coords} aria-hidden>
                  {person.location} — 37.87° N, 122.27° W
                </figcaption>
              </figure>

              <div className={styles.strip}>
                <p className={styles.roles}>
                  {person.roles.map((role) => (
                    <span key={role}>{role}</span>
                  ))}
                </p>
                <p className={styles.position}>
                  <Text>{person.position}</Text>
                </p>
                <p className={styles.summary}>
                  <Text>{person.summary}</Text>
                </p>
              </div>

              <div className={styles.object}>
                <p className={styles.objectLabel}>
                  <span>
                    <span className={styles.down} aria-hidden>
                      ↓
                    </span>
                    3D room
                  </span>
                  <span aria-hidden>/palace</span>
                </p>
                <PalaceCta />
              </div>
            </section>

            <Section index="01" title="Education">
              {education.map((item) => (
                <li key={item.institution} className={styles.row}>
                  <span className={styles.lead}>
                    <span>{item.period}</span>
                  </span>
                  <span className={styles.body}>
                    <span className={styles.rowTitle}>{item.institution}</span>
                    <span>
                      <Text>{item.degree}</Text>
                    </span>
                    <span>{item.location}</span>
                  </span>
                  <span className={styles.aside}>
                    {item.metrics?.map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </span>
                </li>
              ))}
            </Section>

            <Section
              index="02"
              title="Current projects"
              all={{ href: "/projects", label: "All projects" }}
            >
              {currentProjects.map((project) => (
                <li
                  key={project.name}
                  className={`${styles.row} ${styles.linked} ${styles.project}`}
                >
                  <a
                    href={project.href}
                    {...external}
                    className={`${styles.lead} ${styles.rowLink}`}
                  >
                    <span className={styles.rowTitle}>{project.name}</span>
                  </a>
                  <span className={styles.body}>
                    <span>
                      <Text>{project.description}</Text>
                    </span>
                  </span>
                  <span className={styles.aside}>
                    <span className={styles.small}>
                      {displayUrl(project.href)}
                      <Arrow to="out" />
                    </span>
                    {project.repoHref ? (
                      <a
                        href={project.repoHref}
                        {...external}
                        className={`${styles.small} ${styles.repo}`}
                      >
                        Repo
                        <Arrow to="out" />
                      </a>
                    ) : null}
                  </span>
                </li>
              ))}
            </Section>

            <Section
              index="03"
              title="Selected papers"
              all={{ href: "/papers", label: "All papers" }}
            >
              {selectedPapers.map((paper) => (
                <li
                  key={paper.href}
                  className={`${styles.row} ${styles.linked} ${styles.paper}`}
                >
                  <span className={styles.lead}>
                    <span className={styles.label}>{paper.venue}</span>
                  </span>
                  <a
                    href={paper.href}
                    {...external}
                    className={`${styles.body} ${styles.rowLink}`}
                  >
                    <span className={styles.rowTitle}>
                      <Text>{paper.title}</Text>
                    </span>
                  </a>
                  <span className={styles.aside}>
                    <span>{paper.year}</span>
                  </span>
                </li>
              ))}
            </Section>
          </main>

          <footer className={styles.footer}>
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
      </div>
    </div>
  );
}

function Section({
  index,
  title,
  all,
  children,
}: {
  index: string;
  title: string;
  all?: { href: string; label: string };
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHead}>
        <span className={styles.numeral} aria-hidden>
          {index}
        </span>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {all ? (
          <Link
            href={all.href}
            aria-label={all.label}
            className={`${styles.small} ${styles.all}`}
          >
            All
            <Arrow to="right" />
          </Link>
        ) : null}
      </header>
      <ul className={styles.rows}>{children}</ul>
    </section>
  );
}
