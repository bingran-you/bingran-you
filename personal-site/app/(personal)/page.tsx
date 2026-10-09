import Image from "next/image";
import Link from "next/link";
import {
  EducationTable,
  PaperSection,
  ProjectsTable,
} from "@/components/article/blocks";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import { PalaceCta } from "@/components/palace-cta";
import {
  education,
  getPaperDetail,
  papers,
  projects,
  TRACK_LABEL,
  type Paper,
} from "@/lib/content";
import { jsonLdScriptContent, profilePageJsonLd } from "@/lib/jsonld";
import { PERSON, SITE_URL } from "@/lib/site";

type NumberedPaper = {
  paper: Paper;
  figureNumber: number;
  tableNumber?: number;
};

const hasTable = (paper: Paper) => Boolean(getPaperDetail(paper.slug).table);

/** Fig. 1 is the portrait and Tables 1–2 are on the title page. */
function numberPapers(list: Paper[]): NumberedPaper[] {
  let figure = 1;
  let table = 2;
  return list.map((paper) => ({
    paper,
    figureNumber: ++figure,
    tableNumber: hasTable(paper) ? ++table : undefined,
  }));
}

/** A paper with a table fills a sheet; two without one share a sheet. */
function paginate(list: NumberedPaper[]): NumberedPaper[][] {
  const sheets: NumberedPaper[][] = [];
  for (const entry of list) {
    const last = sheets.at(-1);
    const shares =
      last?.length === 1 &&
      last[0].paper.track === entry.paper.track &&
      !hasTable(last[0].paper) &&
      !hasTable(entry.paper);
    if (shares) last.push(entry);
    else sheets.push([entry]);
  }
  return sheets;
}

export default function Home() {
  const sheets = paginate(numberPapers(papers));
  const firstOfTrack = new Set(
    Object.keys(TRACK_LABEL).map(
      (track) => papers.find((paper) => paper.track === track)?.slug,
    ),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScriptContent(profilePageJsonLd("/")),
        }}
      />

      <Sheet current="/">
        <h1 className={styles.title}>{PERSON.name}</h1>

        <div className={styles.front}>
          <ul className={styles.meta}>
            <li>
              <Link href="/" className={styles.link}>
                {SITE_URL}
              </Link>
            </li>
            <li>
              <a href={`mailto:${PERSON.email}`} className={styles.link}>
                {PERSON.email}
              </a>
            </li>
            <li>
              <a
                href={PERSON.labHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {PERSON.lab}, UC Berkeley
              </a>
            </li>
            <li>{PERSON.location}</li>
            <li className={styles.action}>
              <PalaceCta />
            </li>
          </ul>

          <div>
            <p className={styles.byline}>
              {TRACK_LABEL.ai} | {TRACK_LABEL.ion}
            </p>
            <p className={styles.lead}>{PERSON.position}</p>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.columns}>
            <EducationTable number={1} items={education} />
            <figure className={styles.figure}>
              <div className={styles.plate}>
                <Image
                  src={PERSON.portrait}
                  alt={PERSON.name}
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 560px"
                />
              </div>
              <figcaption className={styles.caption}>
                <b>Fig. 1 | {PERSON.name}.</b>
              </figcaption>
            </figure>
          </div>
          <div className={styles.block}>
            <ProjectsTable number={2} items={projects} />
          </div>
        </div>
      </Sheet>

      {sheets.map((entries, i) => (
        <Sheet key={entries[0].paper.slug} page={i + 2} current="/">
          {entries.map(({ paper, figureNumber, tableNumber }) => (
            <div key={paper.slug} className={styles.entry}>
              {firstOfTrack.has(paper.slug) ? (
                <h2 className={styles.section}>{TRACK_LABEL[paper.track]}</h2>
              ) : null}
              <PaperSection
                paper={paper}
                figureNumber={figureNumber}
                tableNumber={tableNumber}
              />
            </div>
          ))}
        </Sheet>
      ))}
    </>
  );
}
