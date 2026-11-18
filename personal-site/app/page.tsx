import Image from "next/image";
import { Fragment } from "react";
import { PalaceCta } from "@/components/palace-cta";
import {
  CO_FIRST_NOTE,
  education,
  hasCoFirstAuthors,
  papers,
  projects,
  TRACK_LABEL,
  type Paper,
} from "@/lib/content";
import {
  graphScriptContent,
  jsonLdScriptContent,
  paperJsonLd,
  profilePageJsonLd,
  projectJsonLd,
} from "@/lib/jsonld";
import { AFFILIATIONS, PERSON, SOCIALS } from "@/lib/site";

// The whole site is this one page, set in the browser's default styles after
// noahshinn.com. Only the Memory Palace button brings a style of its own.

type Link = { label: string; href: string };

/** Every link on the page opens in a new tab. */
function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

/** Links in a row, with " | " between them. */
function LinkRow({ links }: { links: readonly Link[] }) {
  return links.map((link, i) => (
    <Fragment key={link.href}>
      {i > 0 ? " | " : null}
      <A href={link.href}>{link.label}</A>
    </Fragment>
  ));
}

/** Where a paper appeared: its journal, its conference or arXiv. */
function venue({ reference }: Paper): string {
  switch (reference.kind) {
    case "journal":
      return `${reference.journal} ${reference.volume}, ${reference.pages} (${reference.year})`;
    case "conference":
      return `${reference.name} ${reference.year}`;
    case "preprint":
      return `arXiv ${reference.year}`;
  }
}

/** The paper and, for a journal paper, its preprint. */
const paperLinks = (paper: Paper): Link[] => [
  { label: "paper", href: paper.href },
  ...(paper.reference.kind === "journal"
    ? [{ label: "arXiv", href: `https://arxiv.org/abs/${paper.arxiv}` }]
    : []),
];

/** The month the page was built, e.g. "11/2026". */
const LAST_UPDATED = new Date().toLocaleDateString("en-US", {
  month: "2-digit",
  year: "numeric",
  timeZone: "America/Los_Angeles",
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScriptContent(profilePageJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: graphScriptContent([
            ...papers.map(paperJsonLd),
            ...projects.map(projectJsonLd),
          ]),
        }}
      />

      <main>
        <h1>{PERSON.name}</h1>
        <p>
          <Image
            src={PERSON.portrait}
            alt={PERSON.name}
            width={160}
            height={160}
            preload
          />
        </p>
        <p>
          <PalaceCta />
        </p>

        <h2 id="contact">Contact</h2>
        <p>
          {PERSON.location}
          <br />
          Email: {PERSON.email.replace("@", "[at]").replaceAll(".", "[dot]")}
          <br />
          <LinkRow links={SOCIALS} />
        </p>

        <h2 id="about">About</h2>
        <p>{PERSON.bio}</p>
        <p>
          {AFFILIATIONS.map((affiliation) => (
            <Fragment key={affiliation.href}>
              <A href={affiliation.href}>{affiliation.name}</A>
              <br />
            </Fragment>
          ))}
          {PERSON.position}
        </p>

        <h2 id="education">Education</h2>
        <ul>
          {education.map((school) => (
            <li key={school.institution}>
              <p>
                <strong>{school.institution}</strong>
                <br />
                {school.degree}
                <br />
                {school.metrics ? (
                  <>
                    {school.metrics.join(" | ")}
                    <br />
                  </>
                ) : null}
                {school.location} | {school.period}
              </p>
            </li>
          ))}
        </ul>

        <h2 id="papers">Papers</h2>
        {Object.entries(TRACK_LABEL).map(([track, label]) => (
          <Fragment key={track}>
            <h3>{label}</h3>
            <ul>
              {papers
                .filter((paper) => paper.track === track)
                .map((paper) => (
                  <li key={paper.slug}>
                    <p>
                      <strong>{paper.title}</strong>
                      <br />
                      {paper.authors}
                      <br />
                      <strong>{venue(paper)}</strong>
                      <br />
                      <LinkRow links={paperLinks(paper)} />
                    </p>
                  </li>
                ))}
            </ul>
          </Fragment>
        ))}
        {papers.some(hasCoFirstAuthors) ? <p>{CO_FIRST_NOTE}</p> : null}

        <h2 id="projects">Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.name}>
              <A href={project.href}>{project.name}</A>
              {project.repoHref ? (
                <>
                  {" "}
                  (<A href={project.repoHref}>repo</A>)
                </>
              ) : null}
              : {project.description}
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <hr />
        Last updated: {LAST_UPDATED}
      </footer>
    </>
  );
}
