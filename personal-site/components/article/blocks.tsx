import Image from "next/image";
import { credit, reference } from "@/lib/article";
import {
  getPaperDetail,
  type Education,
  type Paper,
  type Project,
  type TableRow,
} from "@/lib/content";
import { parseInline } from "@/lib/inline";
import { PAGE } from "@/lib/paginate";
import { PERSON } from "@/lib/site";
import { Bar, InlineContent } from "./inline";
import { FULL_WIDTH } from "./sheet";
import styles from "./article.module.css";
import tables from "./table.module.css";

/** "https://www.benchflow.ai/" → "benchflow.ai" */
function displayUrl(href: string): string {
  return href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
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
        <InlineContent nodes={reference(paper)} />
      </span>
    </li>
  );
}

/** The largest size of a point on screen, in CSS px (`--pt` in the styles). */
const MAX_PT = FULL_WIDTH / PAGE.width;

/** Width of the fluid column, in CSS px: narrower windows fill their width. */
const FLUID_SIZES = "(max-width: 640px) 100vw, (max-width: 899px) 640px";

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
          className={cell.align ? tables[cell.align] : undefined}
        >
          <InlineContent nodes={parseInline(cell.html)} />
        </Cell>
      );
    });

  return (
    <div className={tables.scroll}>
      <table
        className={`${tables.table} ${tables.fit}`}
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
              className={row.rule && i > 0 ? tables.ruled : undefined}
            >
              {cells(row, false)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * A paper's first figure at its published width, as tall as its recorded
 * size makes it. It opens at full size.
 */
export function PaperImage({
  paper,
  number,
}: {
  paper: Paper;
  number: number;
}) {
  const { figure } = getPaperDetail(paper.slug);
  return (
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
        sizes={`${FLUID_SIZES}, ${Math.round(figure.printWidth * MAX_PT)}px`}
        style={{ aspectRatio: `${figure.width} / ${figure.height}` }}
      />
    </a>
  );
}

/** A paper's main table under its own caption. */
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
    <div>
      <p className={tables.tableTitle}>
        <b>
          Table {number} <Bar />{" "}
        </b>
        <InlineContent nodes={parseInline(table.caption)} />{" "}
        <cite>
          <InlineContent nodes={credit(paper, table.sourceLabel)} />
        </cite>
      </p>
      <DataTable head={table.head} body={table.body} width={table.printWidth} />
    </div>
  );
}

type PortraitProps = {
  /** One to one instead of two to one. */
  square?: boolean;
};

/**
 * The portrait, cropped to a text column. It is preloaded: where a page
 * renders it twice, both ask for the same file.
 */
export function Portrait({ square = false }: PortraitProps) {
  return (
    <div className={square ? `${styles.plate} ${styles.square}` : styles.plate}>
      <Image
        src={PERSON.portrait}
        alt={PERSON.name}
        fill
        preload
        fetchPriority="high"
        sizes={`${FLUID_SIZES}, ${Math.round(PAGE.columnWidth * MAX_PT)}px`}
      />
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
      <p className={tables.tableTitle}>
        <b>
          Table {number} <Bar /> Education
        </b>
      </p>
      <div className={tables.scroll}>
        <table className={`${tables.table} ${tables.stack}`}>
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
                  <span className={tables.note}>
                    {[item.location, ...(item.metrics ?? [])].join(" · ")}
                  </span>
                </th>
                <td>{item.degree}</td>
                <td className={tables.nowrap}>{item.period}</td>
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
      <p className={tables.tableTitle}>
        <b>
          Table {number} <Bar /> Projects
        </b>
      </p>
      <div className={tables.scroll}>
        <table className={`${tables.table} ${tables.stack}`}>
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
                    ? tables.ruled
                    : undefined
                }
              >
                <th scope="row" className={tables.nowrap}>
                  {project.name}
                </th>
                <td>{project.description}</td>
                <td className={tables.nowrap}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {displayUrl(project.href)}
                  </a>
                  {project.repoHref ? (
                    <span className={tables.note}>
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
