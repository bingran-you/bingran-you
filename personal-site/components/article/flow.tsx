import type { BoxBlock, TextBlock } from "@/lib/article";
import { education, projects } from "@/lib/content";
import type { TextKind } from "@/lib/paginate";
import { PERSON } from "@/lib/site";
import { PalaceCta } from "@/components/palace-cta";
import {
  EducationTable,
  PaperImage,
  PaperTable,
  Portrait,
  ProjectsTable,
} from "./blocks";
import { Front } from "./front";
import { InlineContent } from "./inline";
import styles from "./article.module.css";

/** The element each kind of text is. */
export const TEXT_TAG = {
  section: "h2",
  heading: "h3",
  citation: "p",
  paragraph: "p",
  reference: "p",
  caption: "p",
} as const satisfies Record<TextKind, string>;

/** The number of a reference, in front of its text. */
export function Label({ block }: { block: TextBlock }) {
  return block.label ? (
    <span className={styles.label}>{block.label} </span>
  ) : null;
}

type TextElementProps = React.HTMLAttributes<HTMLElement> & {
  block: TextBlock;
  /** Under its figure a caption is the figure's own. */
  as?: "figcaption";
};

/** A text block that runs as wide as the place it is in. */
export function TextElement({ block, as, ...rest }: TextElementProps) {
  const Tag = as ?? TEXT_TAG[block.kind];
  const className = block.indent
    ? `${styles[block.kind]} ${styles.indent}`
    : styles[block.kind];
  return (
    <Tag className={className} {...rest}>
      <Label block={block} />
      <InlineContent nodes={block.content} />
    </Tag>
  );
}

/** What a box holds. A figure is the image alone: its caption is text. */
export function BoxContent({ block }: { block: BoxBlock }) {
  switch (block.kind) {
    case "front":
      return (
        <div className={styles.opening}>
          <h1 className={styles.title}>{PERSON.name}</h1>
          <Front action={<PalaceCta />} />
        </div>
      );
    case "education":
      return <EducationTable number={1} items={education} />;
    case "portrait":
      return <Portrait />;
    case "projects":
      return <ProjectsTable number={2} items={projects} />;
    case "figure":
      return <PaperImage paper={block.paper} number={block.number} />;
    case "table":
      return <PaperTable paper={block.paper} number={block.number} />;
  }
}
