"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import type { PalaceData } from "../palace-data";
import styles from "../styles.module.css";
import { Tetris } from "./games/Tetris";
import { Snake } from "./games/Snake";

type TabId =
  | "about"
  | "projects"
  | "papers"
  | "blog"
  | "posts"
  | "skills"
  | "tetris"
  | "snake"
  | "contact";

const TABS: { id: TabId; label: string; glyph: string }[] = [
  { id: "about", label: "About.txt", glyph: "i" },
  { id: "projects", label: "Projects", glyph: "▣" },
  { id: "papers", label: "Papers", glyph: "▤" },
  { id: "blog", label: "Blog", glyph: "❖" },
  { id: "posts", label: "Posts", glyph: "◉" },
  { id: "skills", label: "Skills", glyph: "✦" },
  { id: "tetris", label: "Tetris", glyph: "▢" },
  { id: "snake", label: "Snake", glyph: "▷" },
  { id: "contact", label: "Contact", glyph: "@" },
];

export function BingranOS({
  data,
  visible,
  onClose,
  initialTab,
}: {
  data: PalaceData;
  visible: boolean;
  onClose: () => void;
  initialTab?: string | null;
}) {
  const [tab, setTab] = useState<TabId>(() => {
    const requested = initialTab as TabId | null | undefined;
    return requested && TABS.some((t) => t.id === requested) ? requested : "about";
  });
  const lastVisibleRef = useRef(visible);
  const lastInitialTabRef = useRef(initialTab);

  // Reset tab when the OS opens, honouring an `initialTab` hint if present.
  // We compare against refs so the deps array stays a fixed shape — passing
  // props in as deps triggers a React DEV warning when their reference types
  // shift across renders.
  useEffect(() => {
    const justOpened = visible && !lastVisibleRef.current;
    const initialTabChanged = initialTab !== lastInitialTabRef.current;
    lastVisibleRef.current = visible;
    lastInitialTabRef.current = initialTab;
    if (!visible) return;
    if (justOpened || initialTabChanged) {
      const requested = initialTab as TabId | null | undefined;
      if (requested && TABS.some((t) => t.id === requested)) setTab(requested);
      else if (justOpened) setTab("about");
    }
  });

  return (
    <div
      className={`${styles.osLayer} ${visible ? styles.visible : ""}`}
      aria-hidden={!visible}
    >
      <div
        className={styles.osFrame}
        role="dialog"
        aria-label="BingranOS — bingranyou.com on the monitor"
        aria-modal="true"
      >
        <div className={styles.osBar}>
          <div className={styles.osBarLeft}>
            <span className={styles.osBarDots}>
              <span />
              <span />
              <span />
            </span>
            <span className={styles.osBarBrand}>
              BingranOS · bingranyou.com
            </span>
          </div>
          <button
            type="button"
            className={styles.osBarClose}
            onClick={onClose}
            aria-label="Close BingranOS and return to room"
          >
            Close
          </button>
        </div>

        <div className={styles.osBody}>
          <nav className={styles.osSide} aria-label="BingranOS sections">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`${styles.osIcon} ${tab === t.id ? styles.active : ""}`}
                onClick={() => setTab(t.id)}
                aria-current={tab === t.id ? "page" : undefined}
              >
                <span className={styles.glyph} aria-hidden>
                  {t.glyph}
                </span>
                {t.label}
              </button>
            ))}
          </nav>

          <section className={styles.osWindow}>
            <header className={styles.osWindowBar}>
              <span>{TABS.find((t) => t.id === tab)?.label} — open</span>
              <span aria-hidden>↑ ↓ scroll · esc close</span>
            </header>
            <div className={styles.osContent}>
              {tab === "about" && <AboutTab data={data} />}
              {tab === "projects" && <ProjectsTab data={data} />}
              {tab === "papers" && <PapersTab data={data} />}
              {tab === "blog" && <BlogTab data={data} />}
              {tab === "posts" && <PostsTab data={data} />}
              {tab === "skills" && <SkillsTab />}
              {tab === "tetris" && <Tetris active={visible && tab === "tetris"} />}
              {tab === "snake" && <Snake active={visible && tab === "snake"} />}
              {tab === "contact" && <ContactTab data={data} />}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function AboutTab({ data }: { data: PalaceData }) {
  return (
    <article>
      <h1>About</h1>
      <p
        lang="zh-Hans"
        style={{
          fontFamily: "var(--font-newsreader), serif",
          fontSize: "1.1rem",
          letterSpacing: "0.04em",
          color: "rgba(31, 26, 20, 0.95)",
        }}
      >
        尤炳然 · Bingran You
      </p>
      {data.about.facts.map((f) => (
        <p key={f}>{f}</p>
      ))}

      <h2>Focus</h2>
      {data.about.focus.map((area) => (
        <div key={area.label} style={{ marginBottom: "1.4rem" }}>
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(31, 26, 20, 0.6)",
              margin: "0 0 0.5rem 0",
            }}
          >
            {area.label}
          </p>
          <ul className={styles.osList} style={{ borderTop: "1px solid rgba(31,26,20,0.12)" }}>
            {area.items.map((item) => (
              <li key={item} style={{ padding: "0.7rem 0" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Education</h2>
      <ul className={styles.eduList}>
        {data.education.map((e) => (
          <li key={e.institution}>
            <div>
              <span className={styles.osListMeta}>{e.period}</span>
            </div>
            <div>
              <div className={styles.osListTitle}>{e.institution}</div>
              <div className={styles.osListBlurb}>
                {e.degree} · {e.location}
              </div>
              {e.metrics?.length ? (
                <div
                  className={styles.osListMeta}
                  style={{ marginTop: 4 }}
                >
                  {e.metrics.join(" · ")}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: "1.8rem" }}>
        <Link href="/about" className={styles.linkOut}>
          Full about page →
        </Link>
      </p>
    </article>
  );
}

function ProjectsTab({ data }: { data: PalaceData }) {
  const ai = data.projects.filter((p) => p.track === "ai");
  const ion = data.projects.filter((p) => p.track === "ion");
  return (
    <article>
      <h1>Projects</h1>
      <p>Open source and applied AI work, plus the trapped-ion stack.</p>

      <h2>Agentic Builder</h2>
      <ul className={styles.osList}>
        {ai.map((p) => (
          <li key={p.href}>
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              <span className={styles.osListTitle}>
                {p.emoji} {p.name}
              </span>
              <span className={styles.osListBlurb}>{p.description}</span>
            </a>
          </li>
        ))}
      </ul>

      <h2>Ion Trapper</h2>
      <ul className={styles.osList}>
        {ion.map((p) => (
          <li key={p.href}>
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              <span className={styles.osListTitle}>
                {p.emoji} {p.name}
              </span>
              <span className={styles.osListBlurb}>{p.description}</span>
            </a>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: "1.5rem" }}>
        <Link href="/projects" className={styles.linkOut}>
          All projects →
        </Link>
      </p>
    </article>
  );
}

function PapersTab({ data }: { data: PalaceData }) {
  const ai = data.papers.filter((p) => p.track === "ai");
  const ion = data.papers.filter((p) => p.track === "ion");
  return (
    <article>
      <h1>Papers</h1>
      <p>
        Selected publications. See{" "}
        <a
          href="https://scholar.google.com/citations?user=ZJdz2UkAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#a8431c", textUnderlineOffset: "4px" }}
        >
          Google Scholar
        </a>{" "}
        for the full list.
      </p>

      <h2>Agentic Builder</h2>
      <ul className={styles.osList}>
        {ai.map((p) => (
          <li key={p.href}>
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              <span className={styles.osListMeta}>{p.venue}</span>
              <span className={styles.osListTitle}>{p.title}</span>
              {p.blurb ? (
                <span className={styles.osListBlurb}>{p.blurb}</span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>

      <h2>Ion Trapper</h2>
      <ul className={styles.osList}>
        {ion.map((p) => (
          <li key={p.href}>
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              <span className={styles.osListMeta}>{p.venue}</span>
              <span className={styles.osListTitle}>{p.title}</span>
              {p.blurb ? (
                <span className={styles.osListBlurb}>{p.blurb}</span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: "1.5rem" }}>
        <Link href="/papers" className={styles.linkOut}>
          All papers →
        </Link>
      </p>
    </article>
  );
}

function BlogTab({ data }: { data: PalaceData }) {
  return (
    <article>
      <h1>Blog</h1>
      <p>
        Short notes — on agents, ions, and the craft of making complex things
        dependable.
      </p>
      <ul className={styles.osList}>
        {data.blogPosts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`}>
              <span className={styles.osListMeta}>{p.date}</span>
              <span className={styles.osListTitle}>{p.title}</span>
              {p.description ? (
                <span className={styles.osListBlurb}>{p.description}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: "1.5rem" }}>
        <Link href="/blog" className={styles.linkOut}>
          All posts →
        </Link>
      </p>
    </article>
  );
}

function PostsTab({ data }: { data: PalaceData }) {
  return (
    <article>
      <h1>Recent posts</h1>
      <p>
        Videos and notes I&apos;ve posted across YouTube, X, Xiaohongshu,
        Bilibili and elsewhere — newest first.
      </p>
      <div className={styles.postsGrid}>
        {data.socialPosts.map((p) => (
          <a
            key={p.id}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.postCard}
          >
            <span className={styles.osListMeta}>
              {p.platformLabel} · {p.date}
            </span>
            <span className={styles.postCardTitle}>
              {p.title || p.description || `${p.platformLabel} post`}
            </span>
          </a>
        ))}
      </div>
      <p style={{ marginTop: "1.5rem" }}>
        <Link href="/posts" className={styles.linkOut}>
          All posts →
        </Link>
      </p>
    </article>
  );
}

function SkillsTab() {
  return (
    <article>
      <h1>Skills</h1>
      <p>
        The curated skills catalog — full skill bodies plus browse-friendly
        metadata — lives on its own page.
      </p>
      <p style={{ marginTop: "1rem" }}>
        <Link href="/skills" className={styles.linkOut}>
          Open /skills →
        </Link>
      </p>
    </article>
  );
}

function ContactTab({ data }: { data: PalaceData }) {
  return (
    <article>
      <h1>Contact</h1>
      <p>The usual suspects.</p>
      <div
        className={styles.contactList}
        role="list"
        aria-label="Contact links"
      >
        {data.contact.map((c) => (
          <Fragment key={c.href}>
            <div className="dt">{c.label}</div>
            <div>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                {c.display}
              </a>
            </div>
          </Fragment>
        ))}
      </div>
    </article>
  );
}
