// PROTOTYPE 02 — Explorer.exe. The home page is a Windows 98 desktop with one
// Explorer window: the menu bar is the site navigation, the lists are Details
// views, and the palace button is the window's default button.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
import { glyphs, icons } from "./pixel-art";
import { PixelIcon } from "./pixel-icon";
import styles from "./styles.module.css";

export const metadata: Metadata = { title: "02 · Explorer.exe" };

const windowTitle = `${person.name} — Home`;

// Which letter each menu underlines. As in a real menu bar no two share one:
// a label whose initial is taken underlines a letter nobody else claims.
const accelerators: Record<string, number> = {
  Projects: 1,
  Papers: 3,
  Posts: 1,
};

export default function Explorer() {
  const objectCount =
    education.length + currentProjects.length + selectedPapers.length;

  return (
    <div className={styles.root}>
      <div className={styles.desktop}>
        <div className={styles.window}>
          <header>
            <div className={styles.titleBar}>
              <Link href="/" className={styles.caption}>
                <PixelIcon art={icons.house} className={styles.icon} />
                <span className={styles.captionText}>{windowTitle}</span>
              </Link>
              <span className={styles.captionButtons} aria-hidden>
                <span className={`${styles.captionButton} ${styles.minimize}`}>
                  <PixelIcon art={glyphs.minimize} />
                </span>
                <span className={`${styles.captionButton} ${styles.maximize}`}>
                  <PixelIcon art={glyphs.maximize} />
                </span>
                <span className={`${styles.captionButton} ${styles.close}`}>
                  <PixelIcon art={glyphs.close} />
                </span>
              </span>
            </div>

            <nav aria-label="Primary" className={styles.menuBar}>
              <span className={styles.grip} aria-hidden />
              <ul className={styles.menu}>
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.menuItem}>
                      <Accelerated
                        label={item.label}
                        at={accelerators[item.label] ?? 0}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.addressBar} aria-hidden>
              <span className={styles.grip} />
              <span className={styles.addressLabel}>
                <Accelerated label="Address" at={1} />
              </span>
              <span className={styles.addressField}>
                <PixelIcon art={icons.document} className={styles.icon} />
                <span className={styles.addressText}>https://bingran.ai/</span>
                <span className={styles.dropdown}>
                  <PixelIcon art={glyphs.dropdown} />
                </span>
              </span>
            </div>
          </header>

          <main className={styles.client}>
            <div className={styles.webView}>
              <div className={styles.portrait}>
                <div className={styles.portraitCrop}>
                  <Image
                    src={person.portrait}
                    alt={person.name}
                    fill
                    priority
                    sizes="(max-width: 600px) 108px, (max-width: 1019px) 212px, 276px"
                    className={styles.portraitImage}
                  />
                </div>
              </div>
              <h1 className={styles.name}>{person.name}</h1>
              <ul className={styles.facts}>
                <li className={styles.fact}>
                  <PixelIcon art={icons.computer} className={styles.icon} />
                  {person.roles[0]}
                </li>
                <li className={styles.fact}>
                  <PixelIcon art={icons.atom} className={styles.icon} />
                  {person.roles[1]}
                </li>
                <li className={styles.fact}>
                  <PixelIcon art={icons.cap} className={styles.icon} />
                  {person.position}
                </li>
              </ul>
              <p className={styles.summary}>{person.summary}</p>
              <hr className={styles.etched} />
              <div className={styles.action}>
                <PalaceCta />
              </div>
            </div>

            <div className={styles.listView}>
              <Group
                title="Education"
                columns={["Name", "Degree", "Period"]}
                className={styles.education}
              >
                {education.map((item) => (
                  <li key={item.institution} className={styles.row}>
                    <span className={styles.lead}>
                      <PixelIcon art={icons.folder} className={styles.icon} />
                      <span className={styles.label}>{item.institution}</span>
                    </span>
                    <span className={styles.body}>{item.degree}</span>
                    <span className={styles.meta}>{item.period}</span>
                    <span className={styles.note}>
                      {[item.location, ...(item.metrics ?? [])].join(" · ")}
                    </span>
                  </li>
                ))}
              </Group>

              <Group
                title="Current projects"
                columns={["Name", "Description", "Location"]}
                all={{ href: "/projects", label: "All projects" }}
                className={styles.projects}
              >
                {currentProjects.map((project) => (
                  <li key={project.name} className={styles.row}>
                    <span className={styles.lead}>
                      <PixelIcon art={icons.globe} className={styles.icon} />
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.label} ${styles.rowLink}`}
                      >
                        {project.name}
                      </a>
                    </span>
                    <span className={styles.body}>{project.description}</span>
                    <span className={styles.meta}>
                      {displayUrl(project.href)}
                      {project.repoHref ? (
                        <a
                          href={project.repoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.repo}
                        >
                          Repo
                          <PixelIcon
                            art={glyphs.external}
                            className={styles.arrow}
                          />
                        </a>
                      ) : null}
                    </span>
                  </li>
                ))}
              </Group>

              <Group
                title="Selected papers"
                columns={["Venue", "Title", "Year"]}
                all={{ href: "/papers", label: "All papers" }}
                className={styles.papers}
              >
                {selectedPapers.map((paper) => (
                  <li key={paper.href} className={styles.row}>
                    <span className={styles.lead}>
                      <PixelIcon art={icons.document} className={styles.icon} />
                      <span className={styles.label}>{paper.venue}</span>
                    </span>
                    <span className={styles.body}>
                      <a
                        href={paper.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.rowLink}
                      >
                        {paper.title}
                      </a>
                    </span>
                    <span className={styles.meta}>{paper.year}</span>
                  </li>
                ))}
              </Group>
            </div>
          </main>

          <footer className={styles.statusBar}>
            <p className={styles.statusPanel}>{objectCount} object(s)</p>
            <p className={styles.statusPanel}>
              © {new Date().getFullYear()} {person.name} · {person.location}
            </p>
            <PixelIcon art={glyphs.grip} className={styles.sizeGrip} />
          </footer>
        </div>
      </div>

      <div className={styles.taskbar}>
        <span className={styles.start} aria-hidden>
          <PixelIcon art={icons.start} className={styles.icon} />
          Start
        </span>
        <nav aria-label="Social" className={styles.quickLaunch}>
          <span className={styles.divider} aria-hidden />
          <span className={styles.grip} aria-hidden />
          <SocialLinks />
        </nav>
        <span className={styles.tasks} aria-hidden>
          <span className={styles.divider} />
          <span className={styles.grip} />
          <span className={styles.task}>
            <PixelIcon art={icons.house} className={styles.icon} />
            <span className={styles.taskLabel}>{windowTitle}</span>
          </span>
          <span className={styles.tray}>{person.location}</span>
        </span>
      </div>
      <div className={styles.gutter} aria-hidden />
    </div>
  );
}

/** A label with one letter underlined, like a keyboard accelerator. */
function Accelerated({ label, at }: { label: string; at: number }) {
  return (
    <>
      {label.slice(0, at)}
      <span className={styles.accel}>{label[at]}</span>
      {label.slice(at + 1)}
    </>
  );
}

function Group({
  title,
  columns,
  all,
  className,
  children,
}: {
  title: string;
  columns: string[];
  all?: { href: string; label: string };
  className: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`${styles.group} ${className}`}>
      <header className={styles.groupHead}>
        <PixelIcon art={icons.folderOpen} className={styles.icon} />
        <h2 className={styles.groupTitle}>{title}</h2>
        {all ? (
          <Link href={all.href} aria-label={all.label} className={styles.all}>
            All
            <PixelIcon art={glyphs.more} className={styles.arrow} />
          </Link>
        ) : null}
      </header>
      <div className={styles.columns} aria-hidden>
        {columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>
      <ul className={styles.rows}>{children}</ul>
    </section>
  );
}
