import { Fragment } from "react";
import { blocksById, isText, type Block, type TextBlock } from "@/lib/article";
import { inlineText, sliceInline } from "@/lib/inline";
import {
  isTextPiece,
  LEADING,
  REFERENCE_INDENT,
  type Layout,
  type Piece,
  type TextPiece,
} from "@/lib/paginate";
import { BoxContent, Label, TEXT_TAG } from "./flow";
import { InlineContent } from "./inline";
import { Sheet } from "./sheet";
import styles from "./article.module.css";
import paged from "./paged.module.css";

/** Where a piece stands on its page, for `.box` and `.piece`. */
const place = ({ x, y, w }: Piece, more?: Record<string, number>) =>
  ({ "--x": x, "--y": y, "--w": w, ...more }) as React.CSSProperties;

const classNames = (...names: (string | false | undefined)[]) =>
  names.filter(Boolean).join(" ");

type TextLinesProps = {
  block: TextBlock;
  piece: TextPiece;
  /** Set where a rule is drawn above the piece. */
  ruled: boolean;
};

/**
 * Lines of a text block as the typesetter broke them, in one flow of text.
 * Each line is a span that cannot wrap. Between two of them stands the
 * space the text has there, or a place to break where it has none: in a
 * broken word, or after a dash. So the document reads on from line to line
 * as the source does. The number of a reference stands beside the first.
 *
 * The block is an ordinary one inside the piece that is placed: a browser
 * leaves no break in a copy of the text between blocks that are placed
 * themselves.
 */
function TextLines({ block, piece, ruled }: TextLinesProps) {
  const Tag = TEXT_TAG[block.kind];
  const text = inlineText(block.content);
  const opens = piece.lines[0][0] === 0;
  const count = piece.lines.length;
  const runsOn = piece.lines[count - 1][1] < text.length;
  return (
    <div
      className={classNames(paged.piece, ruled && paged.ruled)}
      style={place(piece, {
        "--leading": LEADING[block.kind],
        ...(block.label ? { "--hang": REFERENCE_INDENT } : null),
      })}
    >
      <Tag
        id={opens && block.anchor ? block.id : undefined}
        className={classNames(
          styles[block.kind],
          opens && block.indent && styles.indent,
          block.kind === "paragraph" && runsOn && paged.continues,
        )}
      >
        {opens ? <Label block={block} /> : null}
        {piece.lines.map(([start, end, hyphen, track], i) => {
          // The spaces a line ends with are not part of it.
          let stop = end;
          while (stop > start && text[stop - 1] === " ") stop -= 1;
          return (
            <Fragment key={start}>
              <span
                className={classNames(
                  paged.line,
                  i === 0 && paged.first,
                  hyphen === 1 && paged.hyphen,
                  track !== undefined && styles.tracked,
                )}
                style={
                  track === undefined
                    ? undefined
                    : ({ "--track": track } as React.CSSProperties)
                }
              >
                <InlineContent
                  nodes={sliceInline(block.content, start, stop)}
                />
              </span>
              {text.slice(stop, end) || (i < count - 1 ? <wbr /> : null)}
            </Fragment>
          );
        })}
      </Tag>
    </div>
  );
}

type PagesProps = {
  blocks: Block[];
  layout: Layout;
  /** Route the article is on, to mark it in the navigation. */
  current: string;
  /** A note on the first page, before the contacts. */
  footnote?: React.ReactNode;
};

/**
 * An article in pages: each piece of its layout where it was typeset. The
 * title of a paper stands under a rule, which is the head rule where the
 * title opens a page. The sheet of the last page ends under its content.
 */
export function Pages({ blocks, layout, current, footnote }: PagesProps) {
  const byId = blocksById(blocks);
  return layout.pages.map((pieces, i) => (
    <Sheet
      key={i}
      page={i + 1}
      current={current}
      footnote={i === 0 ? footnote : undefined}
      length={i === layout.pages.length - 1 ? layout.length : undefined}
    >
      {pieces.map((piece, n) => {
        const block = byId.get(piece.block);
        if (block && isText(block) && isTextPiece(piece)) {
          const key = `${block.id}:${piece.lines[0][0]}`;
          const ruled = block.kind === "heading" && n > 0;
          return (
            <TextLines key={key} block={block} piece={piece} ruled={ruled} />
          );
        }
        if (block && !isText(block) && !isTextPiece(piece)) {
          const style = place(piece, { "--h": piece.h });
          return (
            <div key={block.id} className={paged.box} style={style}>
              <BoxContent block={block} />
            </div>
          );
        }
        throw new Error(`The layout does not match "${piece.block}".`);
      })}
    </Sheet>
  ));
}
