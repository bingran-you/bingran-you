import { Fragment } from "react";
import { notFound } from "next/navigation";
import { BoxContent, TextElement } from "@/components/article/flow";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import { homeArticle, isText, type TextBlock } from "@/lib/article";
import { CO_FIRST_NOTE } from "@/lib/content";
import { articleHash } from "@/lib/layout";
import { MEASURE, PAGE, SLACK } from "@/lib/paginate";

// The home article as the typesetter reads it (scripts/typeset.mjs): every
// text block at the width its lines are broken to and every box at the
// width it is placed in, one under the other, on a sheet with the footnotes
// of a first page. The sheet has its full width whatever the window. Only
// the development server serves it.

const width = (points: number) => ({ width: `calc(var(--pt) * ${points})` });

/** The text alone: the number of a reference is not among its lines. */
function ProofText({ block }: { block: TextBlock }) {
  return (
    <TextElement
      block={{ ...block, label: undefined }}
      data-block={block.id}
      data-kind={block.kind}
      style={width(MEASURE[block.kind] - SLACK)}
    />
  );
}

export default function ProofPage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <div className={styles.galley}>
      <Sheet current="/" footnote={CO_FIRST_NOTE} tall>
        <div className={styles.proof} data-proof={articleHash()}>
          {homeArticle().map((block) =>
            isText(block) ? (
              <ProofText key={block.id} block={block} />
            ) : (
              <Fragment key={block.id}>
                <div
                  data-block={block.id}
                  data-box={block.span}
                  style={width(
                    block.span === "column" ? PAGE.columnWidth : PAGE.textWidth,
                  )}
                >
                  <BoxContent block={block} />
                </div>
                {block.caption ? <ProofText block={block.caption} /> : null}
              </Fragment>
            ),
          )}
        </div>
      </Sheet>
    </div>
  );
}
