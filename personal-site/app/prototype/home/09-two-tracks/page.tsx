// PROTOTYPE 09 — Two Tracks. The home page as a transit strip map: the Agentic
// line and the Ion line leave two shared interchanges, carry their own stations
// and meet again at one terminus, the Memory Palace.

import type { Metadata } from "next";
import { Doto, Radio_Canada_Big } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { SocialLinks } from "@/components/social-links";
import {
  aiPapers,
  currentProjects,
  type DetailedPaper,
  education,
  ionPapers,
  ionProjects,
  nav,
  person,
} from "../_shared/data";
import { PalaceCta } from "../_shared/palace-cta";
import styles from "./styles.module.css";

export const metadata: Metadata = { title: "09 · Two Tracks" };

const sans = Radio_Canada_Big({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--v-sans",
});

const matrix = Doto({
  subsets: ["latin"],
  axes: ["ROND"],
  display: "swap",
  variable: "--v-matrix",
});

const LINES = {
  a: { letter: "A", ...person.tracks.ai },
  i: { letter: "I", ...person.tracks.ion },
} as const;

type LineId = keyof typeof LINES;
type Project = (typeof currentProjects)[number];

const LINE_IDS = Object.keys(LINES) as LineId[];

type Stop = {
  line: LineId;
  name: string;
  href: string;
  detail: ReactNode;
  /** Set on the first stop of a section: the sign that names it. */
  signpost?: { label: string; href: string };
};

function projectStops(line: LineId, projects: Project[]): Stop[] {
  return projects.map((project, n) => ({
    line,
    name: project.name,
    href: project.href,
    signpost: n === 0 ? { label: "Projects", href: "/projects" } : undefined,
    detail: (
      <p className={styles.detail}>
        {project.description}
        {project.repoHref ? (
          <>
            {" "}
            <a
              href={project.repoHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.textLink}
            >
              Repo&nbsp;↗
            </a>
          </>
        ) : null}
      </p>
    ),
  }));
}

function paperStops(line: LineId, papers: DetailedPaper[]): Stop[] {
  return papers.map((paper, n) => ({
    line,
    name: paper.title,
    href: paper.href,
    signpost: n === 0 ? { label: "Papers", href: "/papers" } : undefined,
    detail: (
      <p className={`${styles.detail} ${styles.meta}`}>
        {/* "NeurIPS 2026" → badge "NeurIPS", so every paper reads venue + year. */}
        <span className={styles.badge}>
          {paper.venue.replace(String(paper.year), "").trim()}
        </span>
        <span className={styles.year}>{paper.year}</span>
      </p>
    ),
  }));
}

/** a1, b1, a2, b2 … so the two lines call at stations alternately. */
function interleave<T>(a: T[], b: T[]): T[] {
  const out: T[] = [];
  for (let n = 0; n < Math.max(a.length, b.length); n++) {
    if (n < a.length) out.push(a[n]);
    if (n < b.length) out.push(b[n]);
  }
  return out;
}

const origins = [...education].sort(
  (x, y) => parseInt(x.period, 10) - parseInt(y.period, 10),
);

const stops = interleave(
  [...projectStops("a", currentProjects), ...paperStops("a", aiPapers)],
  [...paperStops("i", ionPapers), ...projectStops("i", ionProjects)],
);

/**
 * Start rows for the desktop map. Every marker sits on a half-step grid: an
 * interchange or a stop spans two rows, the lines take turns one row apart,
 * and a stop that carries a sign-post keeps the row above it clear.
 */
function startRows(stops: Stop[], first: number): number[] {
  const free: Record<LineId, number> = { a: first, i: first };
  let next = first;
  return stops.map((stop) => {
    const start = Math.max(next, free[stop.line] + (stop.signpost ? 1 : 0));
    free[stop.line] = start + 2;
    next = start + 1;
    return start;
  });
}

const stopRows = startRows(stops, 2 * origins.length + 1);
const terminusRow = stopRows[stopRows.length - 1] + 2;

const connections = [{ href: "/", label: "Home" }, ...nav];

/** Grid row on the map; it also staggers the load-in of the station marker. */
function row(n: number): CSSProperties {
  return { "--v-row": n } as CSSProperties;
}

export default function TwoTracks() {
  return (
    <div className={`${styles.root} ${sans.variable} ${matrix.variable}`}>
      <header className={styles.panel}>
        <div className={styles.panelInner}>
          <div className={styles.title}>
            <span className={styles.mark} aria-hidden>
              <Bullet line="a" />
              <Bullet line="i" />
            </span>
            <h1 className={styles.name}>{person.name}</h1>
            <p className={styles.subtitle}>Two tracks, both active</p>
          </div>

          <nav aria-label="Connections" className={styles.cell}>
            <p className={styles.label} aria-hidden>
              Connections
            </p>
            <ul className={styles.connections}>
              {connections.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.connection}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.cell}>
            <p className={styles.label} id="v09-key">
              Key to lines
            </p>
            <ul className={styles.key} aria-labelledby="v09-key">
              {LINE_IDS.map((id) => (
                <li key={id}>
                  <span className={styles.keySymbol}>
                    <Bullet line={id} />
                  </span>
                  {LINES[id].role}
                </li>
              ))}
              <li>
                <span className={styles.keySymbol}>
                  <Glyph kind="interchange" />
                </span>
                Interchange
              </li>
              <li>
                <span className={styles.keySymbol}>
                  <Glyph kind="station" />
                </span>
                Station
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-label="The two lines">
          <p className={styles.craft}>{person.craft}</p>

          <div className={styles.lines}>
            {LINE_IDS.map((id) => (
              <div key={id} className={`${styles.lineRow} ${styles[id]}`}>
                <h2 className={styles.plate}>
                  <span className={styles.plateDisc} aria-hidden>
                    {LINES[id].letter}
                  </span>
                  {LINES[id].role}
                </h2>
                <p className={styles.blurb}>{LINES[id].blurb}</p>
              </div>
            ))}
          </div>

          <p className={styles.position}>
            <Glyph kind="interchange" />
            {person.position}
          </p>

          <figure className={styles.portrait}>
            <div className={styles.portraitRing}>
              <div className={styles.portraitFrame}>
                <Image
                  src={person.portrait}
                  alt={person.name}
                  width={640}
                  height={640}
                  priority
                  sizes="(max-width: 759px) 160px, 330px"
                  className={styles.portraitImage}
                />
              </div>
            </div>
            <figcaption className={styles.here}>You are here</figcaption>
          </figure>
        </section>

        <section
          id="board"
          className={styles.board}
          aria-labelledby="v09-board"
        >
          <div className={styles.screen}>
            <div>
              <p className={styles.boardLabel} id="v09-board">
                Next departure
              </p>
              <p className={styles.boardDestination}>Memory Palace</p>
            </div>
            <p className={styles.boardStatus}>Now boarding</p>
          </div>
          <div className={styles.control}>
            <p className={styles.controlLabel}>Press to board</p>
            <PalaceCta />
          </div>
        </section>

        <section className={styles.map} aria-labelledby="v09-map">
          <h2 id="v09-map" className={styles.sr}>
            Route map
          </h2>

          <ol className={styles.stops}>
            {origins.map((school, n) => (
              <li
                key={school.institution}
                className={styles.junction}
                style={row(2 * n + 1)}
              >
                <div className={styles.junctionMain}>
                  <h3 className={styles.stopName}>
                    <span className={styles.pill} aria-hidden />
                    <span className={styles.sr}>Interchange: </span>
                    {school.institution}
                  </h3>
                  <p className={styles.detail}>{school.period}</p>
                </div>
                <div className={styles.junctionSide}>
                  <p className={styles.degree}>{school.degree}</p>
                  <p className={`${styles.detail} ${styles.meta}`}>
                    <span>{school.location}</span>
                    {school.metrics?.map((metric) => (
                      <span key={metric} className={styles.badge}>
                        {metric}
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            ))}

            {stops.map((stop, n) => (
              <li
                key={stop.href}
                className={`${styles.stop} ${styles[stop.line]}`}
                style={row(stopRows[n])}
              >
                {stop.signpost ? (
                  <p className={styles.signpostRow}>
                    <Link href={stop.signpost.href} className={styles.signpost}>
                      <Bullet line={stop.line} />
                      <span className={styles.signpostLabel}>
                        <span className={styles.sr}>
                          {LINES[stop.line].letter} line:{" "}
                        </span>
                        {stop.signpost.label}
                      </span>
                      <span className={styles.signpostArrow} aria-hidden>
                        →
                      </span>
                    </Link>
                  </p>
                ) : null}
                <h3 className={styles.stopName}>
                  <span className={styles.sr}>
                    {LINES[stop.line].letter} line:{" "}
                  </span>
                  <a
                    href={stop.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.stopLink}
                  >
                    {stop.name}
                  </a>
                </h3>
                {stop.detail}
              </li>
            ))}
          </ol>

          <div className={styles.terminus} style={row(terminusRow)}>
            <div className={styles.junctionMain}>
              <h3 className={styles.stopName}>
                <span className={styles.pill} aria-hidden />
                Memory Palace
              </h3>
              <p className={styles.detail}>Terminus</p>
            </div>
            <p className={`${styles.junctionSide} ${styles.detail}`}>
              <a href="#board" className={styles.textLink}>
                Board at the top of the page&nbsp;↑
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {person.name} · {person.location}
        </p>
        <div className={styles.socials}>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}

function Bullet({ line }: { line: LineId }) {
  return (
    <span className={`${styles.bullet} ${styles[line]}`} aria-hidden>
      {LINES[line].letter}
    </span>
  );
}

/** The map's own symbols at key size: both lines with a marker across them. */
function Glyph({ kind }: { kind: "interchange" | "station" }) {
  return <span className={`${styles.glyph} ${styles[kind]}`} aria-hidden />;
}
