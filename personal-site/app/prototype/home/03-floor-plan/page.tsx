// PROTOTYPE 03 — Floor Plan. The home page as sheet A-001 of an architect's
// set for the Memory Palace: every section is a room, the palace button is the
// slab in the entrance wall, and every dimension line carries a count or a
// year computed from the data.

import type { Metadata } from "next";
import { B612_Mono, Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
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

export const metadata: Metadata = { title: "03 · Floor Plan" };

const display = Barlow_Condensed({
  variable: "--v-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = B612_Mono({
  variable: "--v-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const sheetNo = (n: number) => `A-${String(n).padStart(3, "0")}`;
const HOME_SHEET = sheetNo(1);
const DRAWING_TITLE = "Ground floor, home";

/** The seven nav links are filed after this sheet, as A-002 … A-008. */
type SheetHref = (typeof nav)[number]["href"];
const sheetOf = (href: SheetHref) => sheetNo(nav.findIndex((item) => item.href === href) + 2);
const sheets = nav.map((item) => ({ ...item, no: sheetOf(item.href) }));

/** "2018 — Present": the earliest start year to the end of the latest entry. */
const periods = education.map((item) => item.period.split(" — "));
const educationSpan = [
  Math.min(...periods.map(([start]) => Number(start))),
  periods.reduce((latest, period) => (period[0] > latest[0] ? period : latest))[1],
].join(" — ");

const ROTUNDA_TAG = "102 · Rotunda";

export default function FloorPlan() {
  const year = new Date().getFullYear();

  return (
    <div className={`${styles.root} ${display.variable} ${mono.variable}`}>
      <span className={styles.frame} aria-hidden />

      <header className={styles.strip}>
        <Link href="/" className={styles.home}>
          <span className={styles.no}>{HOME_SHEET}</span> {DRAWING_TITLE}
        </Link>
        <nav aria-label="Primary" className={styles.nav}>
          {sheets.map((sheet) => (
            <Link key={sheet.href} href={sheet.href} className={styles.navLink}>
              <span className={styles.navNo} aria-hidden>
                {sheet.no}
              </span>
              {sheet.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className={styles.drawing}>
        <div className={styles.plan}>
          <span className={styles.shell} aria-hidden />
          {/* Grid bubbles; lettered by a CSS counter, so hidden ones skip. */}
          <span className={styles.gridMark} aria-hidden />
          <span className={`${styles.gridMark} ${styles.gridB}`} aria-hidden />
          <span className={`${styles.gridMark} ${styles.gridC}`} aria-hidden />
          <span className={`${styles.gridMark} ${styles.gridD}`} aria-hidden />

          {/* 101 ─────────────────────────────────────────────────────── */}
          <section className={`${styles.room} ${styles.foyer}`}>
            <Walls />
            <p className={styles.tag}>
              <span className={styles.no}>101</span> Foyer
            </p>
            <div className={styles.nameBox}>
              <h1 className={styles.name}>
                {person.givenName} <span>{person.familyName}</span>
              </h1>
            </div>
            <p className={styles.roles}>
              <span>{person.roles[0]}</span>
              <span className={styles.srOnly}> and </span>
              <span className={styles.rolesMark} aria-hidden />
              <span>{person.roles[1]}</span>
            </p>
            <p className={styles.position}>{person.position}</p>

            {/* The entrance: the button is the slab in the wall. No ancestor
                of it is transformed or animated; only the leaves move. */}
            <div className={styles.entrance}>
              <div className={styles.slab}>
                <svg className={styles.tulip} viewBox="0 0 200 100" aria-hidden>
                  <path className={styles.arc} pathLength={1} d="M0 0A100 100 0 0 1 100 100" />
                  <path className={styles.arc} pathLength={1} d="M200 0A100 100 0 0 0 100 100" />
                  <line className={`${styles.leaf} ${styles.leafL}`} pathLength={1} x1="0" y1="100" x2="0" y2="0" />
                  <line className={`${styles.leaf} ${styles.leafR}`} pathLength={1} x1="200" y1="100" x2="200" y2="0" />
                </svg>
                <PalaceCta />
                <p className={styles.entranceNote} aria-hidden>
                  <svg className={styles.leader} viewBox="0 0 44 26">
                    <path d="M1 25 22 4.5H44" />
                    <path className={styles.leaderHead} d="M1 25l2.2-7.4 5.2 5.2z" />
                  </svg>
                  <span>
                    Entrance — Memory Palace
                    <small>Double door · see sheet {sheetOf("/palace")}</small>
                  </span>
                </p>
              </div>
            </div>

            <Door className={styles.doorFoyer} />
            <span className={`${styles.opening} ${styles.openingFoyer}`} aria-hidden />
          </section>

          {/* 102 ─────────────────────────────────────────────────────── */}
          <figure className={`${styles.room} ${styles.rotunda}`} aria-label={ROTUNDA_TAG}>
            <Walls />
            <span className={styles.massTint} aria-hidden />
            <span className={styles.massHatch} aria-hidden />
            <span className={`${styles.axis} ${styles.axisH}`} aria-hidden />
            <span className={`${styles.axis} ${styles.axisV}`} aria-hidden />
            <div className={styles.drum}>
              <span className={styles.ring} aria-hidden />
              <div className={styles.portrait}>
                <Image
                  src={person.portrait}
                  alt={person.name}
                  fill
                  priority
                  sizes="(max-width: 699px) 260px, 360px"
                  className={styles.portraitImage}
                />
              </div>
              <span className={styles.centre} aria-hidden />
              {/* The room tag, lettered round the floor band; --v-i is each
                  letter's offset from the middle of the tag. */}
              <span className={styles.inscription} aria-hidden>
                {[...ROTUNDA_TAG].map((char, i) => (
                  <span
                    key={i}
                    style={{ "--v-i": i - (ROTUNDA_TAG.length - 1) / 2 } as React.CSSProperties}
                  >
                    {char}
                  </span>
                ))}
              </span>
            </div>
            <span className={`${styles.opening} ${styles.openingRotunda}`} aria-hidden />
          </figure>

          {/* 103 ─────────────────────────────────────────────────────── */}
          <section className={`${styles.room} ${styles.study}`} aria-labelledby="room-103">
            <Walls />
            <RoomHead no="103" room="Study" use="Education" id="room-103" />
            <ol className={styles.entries}>
              {education.map((item) => (
                <li key={item.institution} className={styles.entry}>
                  <p className={styles.period}>{item.period}</p>
                  <h3 className={styles.itemTitle}>{item.institution}</h3>
                  <p className={styles.body}>{item.degree}</p>
                  <p className={`${styles.body} ${styles.soft}`}>{item.location}</p>
                  {item.metrics?.length ? (
                    <ul className={styles.metrics}>
                      {item.metrics.map((metric) => (
                        <li key={metric}>{metric}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>
            <Dimension className={styles.dimStudy}>{educationSpan}</Dimension>
            <Door className={styles.doorStudy} />
            <span className={`${styles.opening} ${styles.openingStudy}`} aria-hidden />
          </section>

          {/* 104 ─────────────────────────────────────────────────────── */}
          <section className={`${styles.room} ${styles.workshop}`} aria-labelledby="room-104">
            <Walls />
            <RoomHead no="104" room="Workshop" use="Current projects" id="room-104">
              <SheetRef href="/projects" label={`All ${projects.length} projects`} />
            </RoomHead>
            <ol className={styles.schedule}>
              {currentProjects.map((project, i) => (
                <li key={project.name} className={styles.project}>
                  <span className={styles.mark} aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <span className={styles.itemTitle}>{project.name}</span>{" "}
                      <span className={styles.url}>
                        <Url href={project.href} />
                        {"\u00a0↗"}
                      </span>
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
                  </div>
                  <p className={`${styles.body} ${styles.soft}`}>{project.description}</p>
                </li>
              ))}
            </ol>
            <Dimension className={styles.dimWorkshop}>
              {currentProjects.length} projects
            </Dimension>
            <Door className={styles.doorWorkshop} />
          </section>

          {/* 105 ─────────────────────────────────────────────────────── */}
          <section className={`${styles.room} ${styles.library}`} aria-labelledby="room-105">
            <Walls />
            <RoomHead no="105" room="Library" use="Selected papers" id="room-105">
              <SheetRef href="/papers" label={`All ${papers.length} papers`} />
            </RoomHead>
            <ol className={styles.shelves}>
              {selectedPapers.map((paper, i) => (
                <li key={paper.href} className={styles.paper}>
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.paperLink}
                  >
                    <span className={styles.shelfMark}>
                      <span aria-hidden>105.{i + 1}</span>
                      {paper.venue}
                    </span>{" "}
                    <span className={styles.paperTitle}>{paper.title}</span>{" "}
                    <span className={`${styles.body} ${styles.soft}`}>{paper.authors}</span>
                  </a>
                </li>
              ))}
            </ol>
            <Dimension className={styles.dimLibrary}>
              {selectedPapers.length} papers
            </Dimension>
          </section>
        </div>

        <p className={styles.viewTitle} aria-hidden>
          <span className={styles.viewNo}>1</span>
          <span className={styles.viewName}>Ground floor plan</span>
          <span className={styles.viewScale}>Scale — not to scale</span>
        </p>
      </main>

      <footer className={styles.footer}>
        <section className={styles.notes} aria-labelledby="notes-h">
          <h2 id="notes-h" className={styles.blockTitle}>
            General notes
          </h2>
          <ol>
            <li>{person.summary}</li>
            <li>{person.craft}</li>
            <li>Dimensions are counts and years, not lengths. Do not scale from this drawing.</li>
          </ol>
        </section>

        <nav aria-labelledby="index-h" className={styles.index}>
          <h2 id="index-h" className={styles.blockTitle}>
            Drawing index
          </h2>
          <ol>
            <li>
              <Link href="/" aria-current="page" className={styles.indexLink}>
                <span className={styles.no}>{HOME_SHEET}</span> Home{" "}
                <span className={styles.here}>This sheet</span>
              </Link>
            </li>
            {sheets.map((sheet) => (
              <li key={sheet.href}>
                <Link href={sheet.href} className={styles.indexLink}>
                  <span className={styles.no}>{sheet.no}</span> {sheet.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.titleBlock}>
          <dl>
            <div className={styles.tbProject}>
              <dt>Project</dt>
              <dd>{person.name}</dd>
            </div>
            <div className={styles.tbNorth} aria-hidden>
              <svg viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="17" />
                <path className={styles.northNeedle} d="M24 5 31 35 24 30z" />
                <path d="M24 5 17 35 24 30" />
              </svg>
              <span>N</span>
            </div>
            <div className={styles.tbDrawing}>
              <dt>Drawing</dt>
              <dd>{DRAWING_TITLE}</dd>
            </div>
            <div className={styles.tbSheet}>
              <dt>Sheet</dt>
              <dd>{HOME_SHEET}</dd>
            </div>
            <div className={styles.tbDate}>
              <dt>Date</dt>
              <dd>{year}</dd>
            </div>
            <div className={styles.tbLocation}>
              <dt>Location</dt>
              <dd>{person.location}</dd>
            </div>
            <div className={styles.tbContacts}>
              <dt>Contacts</dt>
              <dd>
                <SocialLinks />
              </dd>
            </div>
          </dl>
        </div>

        <p className={styles.copyright}>
          © {year} {person.name} · {person.location}
        </p>
      </footer>
    </div>
  );
}

/** The four half-walls of a room: poché band plus the inner face line. */
function Walls() {
  return (
    <>
      <span className={`${styles.wall} ${styles.wallT}`} aria-hidden />
      <span className={`${styles.wall} ${styles.wallR}`} aria-hidden />
      <span className={`${styles.wall} ${styles.wallB}`} aria-hidden />
      <span className={`${styles.wall} ${styles.wallL}`} aria-hidden />
    </>
  );
}

/** "github.com/org/repo", allowed to wrap only after a slash. */
function Url({ href }: { href: string }) {
  return displayUrl(href)
    .split("/")
    .map((part, i) => (
      <Fragment key={i}>
        {i > 0 ? (
          <>
            /<wbr />
          </>
        ) : null}
        {part}
      </Fragment>
    ));
}

/** A single-leaf door in a horizontal wall: jambs, open leaf, swing arc. */
function Door({ className }: { className: string }) {
  return (
    <span className={`${styles.door} ${className}`} aria-hidden>
      <svg viewBox="0 0 48 48">
        <path className={styles.arc} pathLength={1} d="M47 1A47 47 0 0 0 0 48" />
        <line className={styles.leaf} pathLength={1} x1="47" y1="48" x2="47" y2="1" />
      </svg>
    </span>
  );
}

function RoomHead({
  no,
  room,
  use,
  id,
  children,
}: {
  no: string;
  room: string;
  use: string;
  id: string;
  children?: React.ReactNode;
}) {
  return (
    <header className={styles.roomHead}>
      <h2 id={id} className={styles.tag}>
        <span className={styles.no}>{no}</span> {room}
        <span className={styles.srOnly}>: </span>
        <span className={styles.use}>{use}</span>
      </h2>
      {children}
    </header>
  );
}

/** Cross-reference bubble: the rest of this room is drawn on another sheet. */
function SheetRef({ href, label }: { href: SheetHref; label: string }) {
  return (
    <Link href={href} className={styles.ref}>
      <span className={styles.refLabel}>{label}</span>
      <span className={styles.srOnly}>, sheet {sheetOf(href)}</span>
      <span className={styles.refBubble} aria-hidden>
        <span>→</span>
        <span>{sheetOf(href)}</span>
      </span>
    </Link>
  );
}

/** A dimension line: ticks, extension stops and a centred figure. */
function Dimension({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`${styles.dim} ${className}`}>
      <span className={styles.dimLine} aria-hidden />
      <span>{children}</span>
      <span className={styles.dimLine} aria-hidden />
    </p>
  );
}
