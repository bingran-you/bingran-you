import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import layout from "@/content/layout/home.json";
import { homeArticle } from "@/lib/article";
import {
  CO_FIRST_NOTE,
  education,
  getPaperDetail,
  papers,
  projects,
} from "@/lib/content";
import type { Layout } from "@/lib/paginate";
import { AFFILIATIONS, NAV, PERSON, SOCIALS } from "@/lib/site";

/**
 * What the proof of the home article is rendered from and read by: the
 * faces, the type and the page, the components of the proof view, and the
 * typesetter. Each of them decides where a line breaks or how tall a box is.
 */
const TYPESET_BY = [
  "app/fonts.ts",
  "app/(personal)/proof/page.tsx",
  "components/article/article.module.css",
  "components/article/table.module.css",
  "components/article/blocks.tsx",
  "components/article/flow.tsx",
  "components/article/front.tsx",
  "components/article/inline.tsx",
  "components/article/sheet.tsx",
  "lib/article.ts",
  "lib/inline.ts",
  "lib/paginate.ts",
  "scripts/typeset.mjs",
];

/**
 * Identifies everything the home article is typeset from and by. The layout
 * in content/layout records it, so a change of either is noticed.
 */
export function articleHash(): string {
  const content = [
    homeArticle(),
    papers.map((paper) => getPaperDetail(paper.slug)),
    education,
    projects,
    PERSON,
    AFFILIATIONS,
    SOCIALS,
    NAV,
    CO_FIRST_NOTE,
  ];
  const hash = createHash("sha256").update(JSON.stringify(content));
  for (const file of TYPESET_BY) {
    hash.update(
      readFileSync(path.join(/* turbopackIgnore: true */ process.cwd(), file)),
    );
  }
  return hash.digest("hex").slice(0, 16);
}

/**
 * The home article as scripts/typeset.mjs laid it out. Throws when what it
 * was typeset from or by is no longer what it was, which stops the build.
 */
export function homeLayout(): Layout {
  if (layout.hash !== articleHash()) {
    throw new Error(
      "content/layout/home.json is out of date: run `npm run typeset` against the development server.",
    );
  }
  return layout as Layout;
}
