import Link from "next/link";
import type { PalaceData } from "./palace-data";
import styles from "./styles.module.css";

export function SsrLayer({ data }: { data: PalaceData }) {
  const { projects, papers, education, about, contact, blogPosts, socialPosts } = data;
  const aiProjects = projects.filter((p) => p.track === "ai");
  const ionProjects = projects.filter((p) => p.track === "ion");
  const aiPapers = papers.filter((p) => p.track === "ai");
  const ionPapers = papers.filter((p) => p.track === "ion");

  return (
    <div className={`palace-fallback ${styles.fallback}`} aria-label="Memory Palace — text index">
      <h1>Bingran You — Memory Palace</h1>
      <p>
        This is the text index of the 3D memory palace at /palace. The same
        content is also available at the regular site pages linked below. The 3D
        scene is rendered with WebGL; this text layer exists for search
        engines, AI agents, JavaScript-free browsers, and assistive tech.
      </p>

      <h2>About</h2>
      {about.facts.map((fact) => (
        <p key={fact}>{fact}</p>
      ))}

      <h2>Focus</h2>
      {about.focus.map((area) => (
        <section key={area.label}>
          <h3>{area.label}</h3>
          <ul>
            {area.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

      <h2>Pages</h2>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/papers">Papers</Link></li>
        <li><Link href="/skills">Skills</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/zero-human-company">Zero-Human Company</Link></li>
        <li><Link href="/one-person-company">One-Person Company</Link></li>
      </ul>

      <h2>Projects — Agentic Builder</h2>
      <ul>
        {aiProjects.map((p) => (
          <li key={p.href}>
            <a href={p.href}>{p.name}</a> — {p.description}
          </li>
        ))}
      </ul>
      <h2>Projects — Ion Trapper</h2>
      <ul>
        {ionProjects.map((p) => (
          <li key={p.href}>
            <a href={p.href}>{p.name}</a> — {p.description}
          </li>
        ))}
      </ul>

      <h2>Papers — Agentic Builder</h2>
      <ul>
        {aiPapers.map((p) => (
          <li key={p.href}>
            <a href={p.href}>{p.title}</a> ({p.venue})
            {p.blurb ? ` — ${p.blurb}` : ""}
          </li>
        ))}
      </ul>
      <h2>Papers — Ion Trapper</h2>
      <ul>
        {ionPapers.map((p) => (
          <li key={p.href}>
            <a href={p.href}>{p.title}</a> ({p.venue})
            {p.blurb ? ` — ${p.blurb}` : ""}
          </li>
        ))}
      </ul>

      <h2>Education</h2>
      <ul>
        {education.map((e) => (
          <li key={`${e.institution}-${e.period}`}>
            <strong>{e.institution}</strong> — {e.degree} ({e.period},{" "}
            {e.location}). {e.summary}
            {e.metrics && e.metrics.length ? ` · ${e.metrics.join(" · ")}` : ""}
          </li>
        ))}
      </ul>

      <h2>Blog</h2>
      <ul>
        {blogPosts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link> ({p.date})
            {p.description ? ` — ${p.description}` : ""}
          </li>
        ))}
      </ul>

      <h2>Recent posts</h2>
      <ul>
        {socialPosts.map((p) => (
          <li key={p.id}>
            <a href={p.url}>
              {p.title || p.description || `${p.platformLabel} post`}
            </a>{" "}
            ({p.platformLabel} · {p.date})
          </li>
        ))}
      </ul>

      <h2>Contact</h2>
      <ul>
        {contact.map((c) => (
          <li key={c.href}>
            {c.label}: <a href={c.href}>{c.display}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
