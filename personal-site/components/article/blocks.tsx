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

/** Width of one text column, in points. */
const COLUMN_WIDTH = 255.5;

/** The largest size of a point on screen, in CSS px (`--pt` in the styles). */
const MAX_PT = 2.05;

/** Hands a printed width, in points, to `.print` and `.fit`. */
const printWidthStyle = (points: number) =>
  ({ "--print-width": points }) as React.CSSProperties;

type DataTableProps = {
  head: TableRow[];
  body: TableRow[];
  /** Width of the table on the published page, in points. */
  width: number;
};

function DataTable({ head, body, width }: DataTableProps) {
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
      <table
        className={`${styles.table} ${styles.fit}`}
        style={printWidthStyle(width)}
      >
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

/** True when the paper's figure is no wider than a text column in print. */
export function fitsColumn(paper: Paper): boolean {
  return getPaperDetail(paper.slug).figure.printWidth <= COLUMN_WIDTH;
}

/** "arXiv:2602.12670 (CC BY 4.0)": where a paper's text and figure come from. */
function origin(paper: Paper): string {
  const { license } = getPaperDetail(paper.slug);
  return `arXiv:${paper.arxiv}${license ? ` (${license})` : ""}`;
}

/** Title, reference and abstract of a paper, in its own words. */
export function PaperText({ paper }: { paper: Paper }) {
  const { abstract } = getPaperDetail(paper.slug);
  return (
    <div id={paper.slug}>
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
      <div className={styles.text}>
        {abstract.map((paragraph) => (
          <p key={paragraph}>
            <Verbatim html={paragraph} />
          </p>
        ))}
      </div>
    </div>
  );
}

type PaperFigureProps = {
  paper: Paper;
  number: number;
  /** Set when the figure stands in one text column instead of across both. */
  column?: boolean;
};

/** A paper's first figure at its published width, under the paper's caption. */
export function PaperFigure({
  paper,
  number,
  column = false,
}: PaperFigureProps) {
  const { figure } = getPaperDetail(paper.slug);
  return (
    <figure
      className={column ? styles.figure : `${styles.figure} ${styles.spanning}`}
    >
      {/* The figure opens at full size: wide plots are small on a phone. */}
      <a
        href={figure.src}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.print}
        style={printWidthStyle(figure.printWidth)}
      >
        <Image
          src={figure.src}
          alt={`Fig. ${number}`}
          width={figure.width}
          height={figure.height}
          sizes={`(max-width: 760px) 100vw, ${Math.round(figure.printWidth * MAX_PT)}px`}
        />
      </a>
      <figcaption className={styles.caption}>
        <b>Fig. {number} | </b>
        <Verbatim html={figure.caption} />{" "}
        <span className={styles.credit}>
          {figure.sourceLabel} of {origin(paper)}.
        </span>
      </figcaption>
    </figure>
  );
}

/** A paper's main table under its own caption. Renders nothing without one. */
export function PaperTable({
  paper,
  number,
}: {
  paper: Paper;
  number: number;
}) {
  const { table } = getPaperDetail(paper.slug);
  if (!table) return null;
  return (
    <div className={styles.block}>
      <p className={styles.tableTitle}>
        <b>Table {number} | </b>
        <Verbatim html={table.caption} />{" "}
        <span className={styles.credit}>
          {table.sourceLabel} of {origin(paper)}.
        </span>
      </p>
      <DataTable head={table.head} body={table.body} width={table.printWidth} />
    </div>
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
