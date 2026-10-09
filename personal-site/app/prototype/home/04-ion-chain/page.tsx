// PROTOTYPE 04 — Ion Chain. A dark lab frame: the primary navigation is a
// linear chain of trapped ions as a camera sees it, and hovering or focusing
// an ion addresses it with a focused beam. Below the hero every list is a
// per-ion readout, so the same ion carries down the page.

import type { Metadata } from "next";
import { Martian_Mono, Mona_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { SocialLinks } from "@/components/social-links";
import {
  currentProjects,
  displayUrl,
  education,
  nav,
  papers,
  person,
  projects,
  selectedPapers,
} from "../_shared/data";
import { PalaceCta } from "../_shared/palace-cta";
import styles from "./styles.module.css";

const sans = Mona_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--v-sans",
  axes: ["wdth"],
});

const mono = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--v-mono",
  axes: ["wdth"],
});

export const metadata: Metadata = { title: "04 · Ion Chain" };

// Shot noise: every ion in the chain flickers on its own clock.
const FLICKER = [
  ["1.7s", "-0.2s"],
  ["2.3s", "-1.1s"],
  ["1.3s", "-0.6s"],
  ["1.9s", "-1.5s"],
  ["1.5s", "-0.9s"],
  ["2.1s", "-0.4s"],
  ["1.6s", "-1.3s"],
];

/** Per-ion CSS variables: arrival order, flicker clock and brightness. */
function ionVars(index: number, count: number): CSSProperties {
  const [period, phase] = FLICKER[index % FLICKER.length];
  // The illuminating beam is brightest mid-chain, so the outer ions scatter
  // a little less, as they do in a real fluorescence image.
  const offset = count > 1 ? (2 * index) / (count - 1) - 1 : 0;
  return {
    "--v-i": index,
    "--v-period": period,
    "--v-phase": phase,
    "--v-lum": (1 - 0.1 * offset * offset).toFixed(3),
  } as CSSProperties;
}

const pad = (value: number) => String(value).padStart(2, "0");

export default function IonChain() {
  return (
    <div
      className={`${styles.root} ${sans.variable} ${mono.variable}`}
      style={{ "--v-n": nav.length } as CSSProperties}
    >
      <header>
        <div className={styles.topline}>
          <Link href="/" className={styles.brand}>
            bingran.you
          </Link>
          <span className={styles.place}>{person.location}</span>
        </div>

        <nav aria-label="Primary" className={styles.trap}>
          <span className={styles.axis} aria-hidden />
          <ul className={styles.chain}>
            {nav.map((item, index) => (
              <li
                key={item.href}
                className={styles.site}
                style={ionVars(index, nav.length)}
              >
                <Link href={item.href} className={styles.ionLink}>
                  <span className={styles.beam} aria-hidden />
                  <Ion />
                  <span className={styles.ionLabel}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.figure} aria-hidden>
            <span className={styles.scale}>
              <span className={styles.scaleLabel}>5 µm</span>
            </span>
            <span className={styles.species}>
              <sup>40</sup>Ca<sup>+</sup> · 397 nm
            </span>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.identity}>
            <h1 className={styles.name}>{person.name}</h1>
            <ul className={styles.roles}>
              {person.roles.map((role) => (
                <li key={role} className={styles.role}>
                  {role}
                </li>
              ))}
            </ul>
            <p className={styles.position}>{person.position}</p>

            <div className={styles.plate}>
              <span className={styles.plateLabel} aria-hidden>
                Console
              </span>
              <div className={styles.bezel}>
                <PalaceCta />
              </div>
            </div>
          </div>

          <figure className={styles.portrait}>
            <div className={styles.lens}>
              <div className={styles.lensView}>
                <div className={styles.lensZoom}>
                  <Image
                    src={person.portrait}
                    alt={person.name}
                    fill
                    priority
                    sizes="(max-width: 720px) 8rem, 16rem"
                    className={styles.portraitImage}
                  />
                </div>
              </div>
            </div>
          </figure>
        </section>

        <div className={styles.frames}>
          <Frame index={1} label="Education" className={styles.frameWide}>
            {education.map((item) => (
              <li key={item.institution} className={styles.row}>
                <div className={`${styles.rowBody} ${styles.edu}`}>
                  <Ion />
                  <p className={styles.rowTitle}>{item.institution}</p>
                  <p className={styles.eduDegree}>
                    {item.degree}
                    <span className={styles.eduPlace}>{item.location}</span>
                  </p>
                  <p className={styles.eduMeta}>
                    <span className={styles.eduPeriod}>{item.period}</span>
                    {item.metrics?.map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </Frame>

          <Frame
            index={2}
            label="Current projects"
            className={styles.frameProjects}
            all={{ href: "/projects", noun: "projects", total: projects.length }}
          >
            {currentProjects.map((project) => (
              <li key={project.name} className={styles.row}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.rowBody} ${styles.rowLink}`}
                >
                  <Ion />
                  <span className={styles.rowHead}>
                    <span className={styles.rowTitle}>{project.name}</span>
                    <span className={styles.rowMeta}>
                      {displayUrl(project.href)}
                      <Arrow diagonal />
                    </span>
                  </span>
                  <span className={styles.rowDesc}>{project.description}</span>
                </a>
                {project.repoHref ? (
                  <a
                    href={project.repoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repo}
                  >
                    Repo
                    <Arrow diagonal />
                  </a>
                ) : null}
              </li>
            ))}
          </Frame>

          <Frame
            index={3}
            label="Selected papers"
            className={styles.framePapers}
            all={{ href: "/papers", noun: "papers", total: papers.length }}
          >
            {selectedPapers.map((paper) => (
              <li key={paper.href} className={styles.row}>
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.rowBody} ${styles.rowLink}`}
                >
                  <Ion />
                  <span className={styles.rowHead}>
                    <span className={styles.venue}>{paper.venue}</span>
                    <span className={styles.rowMeta}>
                      <Arrow diagonal />
                    </span>
                  </span>
                  <span className={styles.rowTitle}>{paper.title}</span>
                  <span className={styles.rowDesc}>{paper.authors}</span>
                </a>
              </li>
            ))}
          </Frame>
        </div>

        <section className={styles.coda}>
          <div className={styles.codaTrap} aria-hidden>
            <Ion />
          </div>
          <p className={styles.codaLead}>{person.summary}</p>
          <p className={styles.codaLine}>{person.craft}</p>
        </section>
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

/** One trapped ion: the nav chain, every list marker and the closing mark. */
function Ion() {
  return (
    <span className={styles.ion} aria-hidden>
      <span className={styles.spot} />
    </span>
  );
}

function Frame({
  index,
  label,
  className,
  all,
  children,
}: {
  index: number;
  label: string;
  className: string;
  /** Present when the frame shows only part of a longer list. */
  all?: { href: string; noun: string; total: number };
  children: ReactNode;
}) {
  const id = `v04-frame-${index}`;
  return (
    <section className={`${styles.frame} ${className}`} aria-labelledby={id}>
      <header className={styles.frameHead}>
        <h2 id={id} className={styles.frameTitle}>
          <span className={styles.frameNo} aria-hidden>
            Frame {pad(index)} /{" "}
          </span>
          {label}
        </h2>
        {all ? (
          <Link
            href={all.href}
            className={styles.all}
            aria-label={`All ${all.total} ${all.noun}`}
          >
            All {all.total}
            <Arrow />
          </Link>
        ) : null}
      </header>
      <ul className={styles.rows}>{children}</ul>
    </section>
  );
}

// Drawn rather than typed: the arrow glyphs sit outside both fonts' Latin
// subsets, so text arrows would fall back to a system face.
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className={styles.arrow}
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
    >
      <path d={diagonal ? "M3 9 9 3M4.25 3H9v4.75" : "M1.5 6h9M7 2.5 10.5 6 7 9.5"} />
    </svg>
  );
}
