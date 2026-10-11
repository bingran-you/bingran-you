import { BoxContent, TextElement } from "@/components/article/flow";
import { Pages } from "@/components/article/paged";
import { Sheet } from "@/components/article/sheet";
import styles from "@/components/article/article.module.css";
import { homeArticle, isText, type Block } from "@/lib/article";
import { CO_FIRST_NOTE } from "@/lib/content";
import { jsonLdScriptContent, profilePageJsonLd } from "@/lib/jsonld";
import { homeLayout } from "@/lib/layout";

/** In the fluid column every section opens a sheet of its own. */
function fluidSheets(blocks: Block[]): Block[][] {
  const sheets: Block[][] = [[]];
  for (const block of blocks) {
    if (block.kind === "section") sheets.push([]);
    sheets[sheets.length - 1].push(block);
  }
  return sheets;
}

/** A block in the fluid column: text, a figure over its caption, or a table. */
function FluidBlock({ block }: { block: Block }) {
  if (isText(block)) return <TextElement block={block} />;
  if (!block.caption) {
    return (
      <div className={styles.block}>
        <BoxContent block={block} />
      </div>
    );
  }
  return (
    <figure className={`${styles.block} ${styles.figure}`}>
      <BoxContent block={block} />
      <TextElement block={block.caption} as="figcaption" />
    </figure>
  );
}

// The article is rendered twice and a media query shows one: in pages, as
// the typesetter laid it out, and in one fluid column for narrow windows.
export default function Home() {
  const blocks = homeArticle();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScriptContent(profilePageJsonLd("/")),
        }}
      />

      <div className={styles.paged}>
        <Pages
          blocks={blocks}
          layout={homeLayout()}
          current="/"
          footnote={CO_FIRST_NOTE}
        />
      </div>

      <div className={styles.fluid}>
        {fluidSheets(blocks).map((sheet, i) => (
          <Sheet
            key={sheet[0].id}
            page={i + 1}
            current="/"
            footnote={i === 0 ? CO_FIRST_NOTE : undefined}
          >
            {sheet.map((block) => (
              <FluidBlock key={block.id} block={block} />
            ))}
          </Sheet>
        ))}
      </div>
    </>
  );
}
