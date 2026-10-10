import Image from "next/image";
import {
  EducationTable,
  fitsColumn,
  PaperFigure,
  PaperTable,
  PaperText,
  ProjectsTable,
} from "@/components/article/blocks";
import { Front } from "@/components/article/front";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import { PalaceCta } from "@/components/palace-cta";
import {
  CO_FIRST_NOTE,
  education,
  getPaperDetail,
  hasCoFirstAuthors,
  papers,
  projects,
  TRACK_LABEL,
  type Paper,
} from "@/lib/content";
import { jsonLdScriptContent, profilePageJsonLd } from "@/lib/jsonld";
import { PERSON } from "@/lib/site";

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

/**
 * A paper with a table fills a sheet; two of a track without one share a
 * sheet. A paper whose figure is one column wide always opens its sheet, so
 * the text can run beside the figure.
 */
function paginate(list: NumberedPaper[]): NumberedPaper[][] {
  const sheets: NumberedPaper[][] = [];
  for (const entry of list) {
    const last = sheets.at(-1);
    const shares =
      last?.length === 1 &&
      last[0].paper.track === entry.paper.track &&
      !hasTable(last[0].paper) &&
      !hasTable(entry.paper) &&
      !fitsColumn(entry.paper);
    if (shares) last.push(entry);
    else sheets.push([entry]);
  }
  return sheets;
}

/** A paper down the page: text in two columns, then its figure and table. */
function Stacked({ paper, figureNumber, tableNumber }: NumberedPaper) {
  return (
    <div className={styles.entry}>
      <PaperText paper={paper} />
      <PaperFigure paper={paper} number={figureNumber} />
      {tableNumber ? <PaperTable paper={paper} number={tableNumber} /> : null}
    </div>
  );
}

/**
 * A paper whose figure is one column wide: the figure stands in the second
 * column and the text runs beside it, followed by the text of the paper that
 * shares the sheet. That paper's own figure spans the page underneath.
 */
function Spread({ entries }: { entries: NumberedPaper[] }) {
  const [first, second] = entries;
  return (
    <div className={styles.entry}>
      <div className={styles.spread}>
        <PaperText paper={first.paper} />
        <PaperFigure paper={first.paper} number={first.figureNumber} column />
        {second ? <PaperText paper={second.paper} /> : null}
      </div>
      {second ? (
        <PaperFigure paper={second.paper} number={second.figureNumber} />
      ) : null}
      {first.tableNumber ? (
        <PaperTable paper={first.paper} number={first.tableNumber} />
      ) : null}
    </div>
  );
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
        <Front action={<PalaceCta />} />

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

      {sheets.map((entries, i) => {
        const [first] = entries;
        const coFirst = entries.some(({ paper }) => hasCoFirstAuthors(paper));
        return (
          <Sheet
            key={first.paper.slug}
            page={i + 2}
            current="/"
            footnote={coFirst ? CO_FIRST_NOTE : undefined}
          >
            {firstOfTrack.has(first.paper.slug) ? (
              <h2 className={styles.section}>
                {TRACK_LABEL[first.paper.track]}
              </h2>
            ) : null}
            {fitsColumn(first.paper) ? (
              <Spread entries={entries} />
            ) : (
              entries.map((entry) => (
                <Stacked key={entry.paper.slug} {...entry} />
              ))
            )}
          </Sheet>
        );
      })}
    </>
  );
}
