import Image from "next/image";
import {
  getPaperDetail,
  type Education,
  type Paper,
  type Project,
  type TableRow,
} from "@/lib/content";
import styles from "./article.module.css";

/** Inline HTML copied from a paper (see PaperDetail): <i> <b> <sup> <sub> <code>. */
function Verbatim({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

/** "https://www.benchflow.ai/" → "benchflow.ai" */
function displayUrl(href: string): string {
  return href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

/** The author list, with Bingran's name in bold. */
function Authors({ list }: { list: string }) {
  const [before, after] = list.split("You, B.");
  return after === undefined ? (
    <>{list}</>
  ) : (
    <>
      {before}
      <b>You, B.</b>
      {after}
    </>
  );
}

function Source({ paper }: { paper: Paper }) {
  const { reference, arxiv } = paper;
  switch (reference.kind) {
    case "journal":
      return (
        <>
          <i>{reference.journal}</i> <b>{reference.volume}</b>,{" "}
          {reference.pages} ({reference.year})
        </>
      );
    case "conference":
      return (
        <>
          In <i>{reference.name}</i> ({reference.year}); preprint at arXiv:
          {arxiv}
        </>
      );
    case "preprint":
      return (
        <>
          Preprint at arXiv:{arxiv} ({reference.year})
        </>
      );
  }
}

/** One numbered entry of a reference list. */
export function ReferenceItem({
  paper,
  number,
}: {
  paper: Paper;
  number: number;
}) {
  return (
    <li id={`ref-${paper.slug}`}>
      <span>{number}.</span>
      <span>
        <Authors list={paper.authors} />{" "}
        <a
          href={paper.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {paper.title}
        </a>
        . <Source paper={paper} />.
      </span>
    </li>
  );
}

export function DataTable({
  head,
  body,
}: {
  head: TableRow[];
  body: TableRow[];
}) {
  const cells = (row: TableRow, inHead: boolean) =>
    row.cells.map((cell, i) => {
      const Cell = inHead || cell.header ? "th" : "td";
      return (
        <Cell
          key={i}
          colSpan={cell.colSpan}
          rowSpan={cell.rowSpan}
          className={cell.align ? styles[cell.align] : undefined}
        >
          <Verbatim html={cell.html} />
        </Cell>
      );
    });

  return (
    <div className={styles.scroll}>
      <table className={styles.table}>
        <thead>
          {head.map((row, i) => (
            <tr key={i}>{cells(row, true)}</tr>
          ))}
        </thead>
        <tbody>
          {body.map((row, i) => (
            <tr
              key={i}
              className={row.rule && i > 0 ? styles.ruled : undefined}
            >
              {cells(row, false)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type PaperSectionProps = {
  paper: Paper;
  figureNumber: number;
  /** Set when the paper has a table. */
  tableNumber?: number;
};

/**
 * A paper in its own words: title, reference, abstract, first figure and,
 * where it has one, its main table.
 */
export function PaperSection({
  paper,
  figureNumber,
  tableNumber,
}: PaperSectionProps) {
  const detail = getPaperDetail(paper.slug);
  const { figure, table } = detail;
  const beside = figure.height > figure.width;
  const origin = `arXiv:${paper.arxiv}${detail.license ? ` (${detail.license})` : ""}`;

  const text = (
    <div className={styles.text}>
      {detail.abstract.map((paragraph) => (
        <p key={paragraph}>
          <Verbatim html={paragraph} />
        </p>
      ))}
    </div>
  );

  const plate = (
    <figure className={styles.figure}>
      {/* The figure opens at full size: wide plots are small on a phone. */}
      <a href={figure.src} target="_blank" rel="noopener noreferrer">
        <Image
          src={figure.src}
          alt={`Fig. ${figureNumber}`}
          width={figure.width}
          height={figure.height}
          sizes={
            beside
              ? "(max-width: 760px) 100vw, 540px"
              : "(max-width: 760px) 100vw, 1100px"
          }
        />
      </a>
      <figcaption className={styles.caption}>
        <b>Fig. {figureNumber} | </b>
        <Verbatim html={figure.caption} />{" "}
        <span className={styles.credit}>
          {figure.sourceLabel} of {origin}.
        </span>
      </figcaption>
    </figure>
  );

  return (
    <article className={styles.paper} id={paper.slug}>
      <h3 className={styles.heading}>
        <a
          href={paper.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.link} ${styles.quiet}`}
        >
          {paper.title}
        </a>
      </h3>
      <p className={styles.citation}>
        <Authors list={paper.authors} /> <Source paper={paper} />.
        {paper.reference.kind === "journal" ? (
          <>
            {" "}
            <a
              href={`https://arxiv.org/abs/${paper.arxiv}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              arXiv:{paper.arxiv}
            </a>
            .
          </>
        ) : null}
      </p>

      {beside ? (
        <div className={styles.beside}>
          {text}
          {plate}
        </div>
      ) : (
        <>
          {text}
          {plate}
        </>
      )}

      {table && tableNumber ? (
        <div className={styles.block}>
          <p className={styles.tableTitle}>
            <b>Table {tableNumber} | </b>
            <Verbatim html={table.caption} />{" "}
            <span className={styles.credit}>
              {table.sourceLabel} of {origin}.
            </span>
          </p>
          <DataTable head={table.head} body={table.body} />
        </div>
      ) : null}
    </article>
  );
}

export function EducationTable({
  number,
  items,
}: {
  number: number;
  items: Education[];
}) {
  return (
    <div>
      <p className={styles.tableTitle}>
        <b>Table {number} | Education</b>
      </p>
      <div className={styles.scroll}>
        <table className={`${styles.table} ${styles.stack}`}>
          <thead>
            <tr>
              <th scope="col">Institution</th>
              <th scope="col">Degree</th>
              <th scope="col">Period</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.institution}>
                <th scope="row">
                  {item.institution}
                  <span className={styles.note}>
                    {[item.location, ...(item.metrics ?? [])].join(" · ")}
                  </span>
                </th>
                <td>{item.degree}</td>
                <td className={styles.nowrap}>{item.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ProjectsTable({
  number,
  items,
}: {
  number: number;
  items: Project[];
}) {
  return (
    <div>
      <p className={styles.tableTitle}>
        <b>Table {number} | Projects</b>
      </p>
      <div className={styles.scroll}>
        <table className={`${styles.table} ${styles.stack}`}>
          <thead>
            <tr>
              <th scope="col">Project</th>
              <th scope="col">Description</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            {items.map((project, i) => (
              <tr
                key={project.name}
                className={
                  i > 0 && project.track !== items[i - 1].track
                    ? styles.ruled
                    : undefined
                }
              >
                <th scope="row" className={styles.nowrap}>
                  {project.name}
                </th>
                <td>{project.description}</td>
                <td className={styles.nowrap}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {displayUrl(project.href)}
                  </a>
                  {project.repoHref ? (
                    <span className={styles.note}>
                      <a
                        href={project.repoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        {displayUrl(project.repoHref)}
                      </a>
                    </span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
