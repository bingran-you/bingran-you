# bingran.ai

Personal site of [Bingran You](https://bingran.ai) — built with Next.js, deployed on Vercel. Old domain `bingranyou.com` redirects here.

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **Tailwind CSS v4**, with CSS Modules for the page furniture
- **TypeScript**

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design: the site is set as a journal article

Every route is one or more sheets of an article: a rule down the left margin, an "Article" running head with the navigation, a bold serif title, hairline rules, two text columns, numbered figures and tables, and a page number at the foot. The geometry (margins, column widths, rules, type sizes and leading) was measured from a printed journal page and is expressed in points times `--pt`; see the header of `components/article/article.module.css`.

From 900 px up a sheet of the home page is one page of 595.276 × 790.866 pt. A page is laid out at one size, that of a sheet at its full width of 1220 px, and scaled to its sheet with a transform, so its text is set at the size it was typeset at in every window. The smallest type on a page is 12.03 px before scaling: a browser's minimum font size of up to 12 px enlarges only super- and subscripts. The home page is typeset: each paper is a block under a rule, and the blocks follow one another down the pages (see Pages below). Narrower windows get the same content in one fluid column on sheets as tall as their content, without a transform; both renderings are in the document and a media query shows one. A page prints no underlines: a link shows its own when it is pointed at or focused, and in the fluid column always.

`/about`, `/projects` and `/papers` each lie on one sheet that ends under its content: a page like those of the article and scaled like them, as long as the typesetter measured it to be (`content/layout/sheets.json`). The last sheet of the article ends under the reference list in the same way. `/posts` lies on a sheet as tall as its content, laid out at the size of the sheet and not scaled; its cards take none of the article's type (`.plain`).

Type: Roboto Serif for text, with Noto Serif behind it for Greek, and Inter for labels, loaded in `app/fonts.ts`. The styles name the families themselves: the variable `next/font` offers also names a local face scaled to the web font's metrics, which would stand before Noto Serif and draw the Greek. Only the upright Latin of Roboto Serif and of Inter is preloaded. Every style's size, weight, optical size, width, tracking and word space is a token in `.page` of `article.module.css`. The faces are loaded with `display: "block"`: a frozen line fits its column in these faces only, so text waits for them instead of showing in a fallback. A reader who blocks web fonts gets Georgia and a system sans at the same sizes, in which a few lines run some points into the gutter. A minimum font size above 12 px makes lines run past their columns and tables outgrow their boxes. Nothing moves such a reader to the fluid column.

- `lib/article.ts` — the home article as a list of blocks: text (inline content as a tree, `lib/inline.ts`) and boxes (title block, figures, tables).
- `lib/paginate.ts` — the page geometry and the pagination rules.
- `content/layout/home.json` — where every line and box stands, written by `npm run typeset`. Geometry only: lines are character ranges of the blocks.
- `content/layout/sheets.json` — how long the sheets of `/about`, `/projects` and `/papers` are, written by the same script.
- `components/article/paged.tsx` — `<Pages>`: places the pieces of a layout on their pages (`paged.module.css`) and draws the rule over a paper's title. The lines of a piece are one flow of text, each a span that cannot wrap, with the space or the break the text has there between two of them; the hyphen of a broken word is drawn by CSS. So the document holds the source text, and a copy or a search reads on from line to line.
- `components/article/flow.tsx` — a block as an element, for the fluid column and the proof view.
- `components/article/sheet.tsx` — `<Sheet>`: one sheet with its margin rule, head rule, footnote and page number. Left-hand and right-hand pages differ as in print.
- `components/article/front.tsx` — `<Front>`: the fact rows, byline, position and affiliations of a title page.
- `components/article/blocks.tsx` — a paper's figure and table, reference entries, the portrait, and the education and project tables (`table.module.css`).
- `components/palace-cta.tsx` — the "Enter the Memory Palace" button. Its look is fixed by `.palace-cta` and `.palace-cta-slot` in `app/globals.css`; do not restyle it. On a scaled page its slot is scaled back, so it keeps its size in CSS px.

Figures keep the width they have on the published page (`printWidth`, in points). One wider than a text column is centred with its caption in two columns underneath; one that fits a column stands in one, beside its paper's abstract and caption in the other. Tables are as wide as in print, or as their contents if that is wider.

### Typeset the home page

Lines are broken and pages made up when the content is written, not in the visitor's browser. With `npm run dev` running:

```bash
npm run typeset                              # or: npm run typeset -- http://localhost:<port>
```

It opens `/proof` (development only) in headless Chrome, reads back where Chrome broke every line and how tall every box is, paginates, writes `content/layout/home.json` and prints how full each page is: the height its parts leave unused at their least distances, how far its gaps have grown to take that up, and what is left. It then opens `/about`, `/projects` and `/papers`, reads where the content of each ends and writes how long their sheets are to `content/layout/sheets.json`. Commit both files. They record a hash of the home page's content and of everything the proof is rendered from and read by: `TYPESET_BY` in `lib/layout.ts` lists the files (the faces, the two stylesheets of the proof, its components, the three routes, the paginator and the typesetter). `next build`, `npm test` and the home page of the development server fail while it is out of date, so run the script after any change to one of them. The result is the same in any window and at any device pixel ratio. The script needs Node 22.18 or later (it runs `lib/paginate.ts` as it is) and Google Chrome; set `CHROME` if Chrome is not in `/Applications`.

It stops with an error when a web font has not loaded, when a kind of text is set on another leading than `LEADING` in `lib/paginate.ts`, when the height of a block is not that of its lines, or when a word it has to keep whole runs across markup.

Hyphenation: a word of seven characters or more may be broken, three or more before the hyphen and four or more after (`hyphenate-limit-chars` on `.paragraph`). The typesetter forbids a break and reads the block again where it would be the third in a row, where the word has a hyphen of its own, or where fewer than three letters would stand on either side. No column ends on a hyphen: where the pages would leave one there, the typesetter keeps that word whole and sets the article again.

Word spaces: the proof sets running text as tight as a line may be (`--track: -12`, in thousandths of an em, with the word spaces drawn together by 0.03 em), so Chrome breaks no line sooner than it has to. The typesetter then gives each line the tracking it is set in on the page, the fourth number of a line in the layout: as tight as it must be to fit, or let out where its word spaces would otherwise be stretched past 1.33 times their width (`LOOSEST` in the script).

Pages: a paper is one block. A rule and its title run across the page (at the top of a page the head rule is that rule), then the line of its authors and venue; its abstract stands in two even columns; its figure follows, then its table. Where that brings a page down to its foot, the figure stands before the abstract instead, under the line of authors and venue, and the abstract opens the next page. The first paper of a track has the track's heading above its rule. Nothing of another paper stands between these parts. The title page opens with the title block, Table 1 beside Fig. 1 and Table 2; the reference list closes the last page, in two columns, and is not left on a page by itself. The sheet of the last page ends under the list.

A page may end between two papers, between the parts of one, or inside an abstract. It then has at least four lines of the abstract in each column (`MIN_LINES`) and as many in one as in the other, and seven lines or more run on. A title never ends a page, and a figure stays with its caption. The gaps between the parts of a page grow to bring its last line or box down to the last baseline: a gap inside a paper by 28 pt at the most (`STRETCH`), one above a paper or above the reference list by twice as much. A page whose gaps cannot take up all of its unused height is left short of the last baseline; a page that leaves the text of a paper unfinished (inside its abstract, or after a figure that stands before it) never is. Where the pages end is chosen for the whole article at once: so that the page that is left the most is left the least, then so that the pages are left the least in all, then so that the fewest of them leave the text of a paper unfinished, then so that the pages are as evenly full as can be.

## Copy rule: nothing is written for the site

The site carries facts and other people's own words, never prose composed for it:

- **Papers** — title, authors, venue, abstract, first figure with its caption and, where the paper has one, its main table, all verbatim from the paper's arXiv version.
- **Projects** — the description each project gives itself on its site or repository.
- **Everything else** — names, dates, links and labels.

### Add or update a paper

1. Add the entry to `papers` in `lib/content.ts` (title, link, venue tag, authors, reference, arXiv id, track). A published paper links through its DOI (`https://doi.org/…`), not to the publisher's page.
2. Add its abstract, figure and table to `content/papers/details.json` under the same `slug`, copied verbatim from `https://arxiv.org/html/<id>`. Inline markup is limited to `<i>`, `<b>`, `<sup>`, `<sub>` and `<code>` (a test enforces this). A `license` named in `LICENSE_HREF` of `lib/article.ts` is linked to its deed in the credit of the figure and the table.
3. Put the figure in `public/papers/` and record its pixel size in `details.json`, together with `printWidth`: the width of the figure (and of the table) on the published page, in points. Measure it in the journal PDF, or in the arXiv PDF when the journal's is not at hand (`pdftoppm -r 144`, then the extent of the ink above the caption).
4. Run `npm run typeset` (see above) and look at every page.
5. Mirror the title and venue in `palace-inner/src/components/showcase/Experience.tsx` and in the repository-root `README.md`.

### Add a post to /posts

See the `social-scraping-policy` skill; `npm run post:add -- <url>` appends to `content/posts/posts.json`.

## Layout

```
app/
  fonts.ts                              the faces of the site
  (personal)/layout.tsx                 the desk every sheet lies on
  (personal)/page.tsx                   home: the article in pages, and fluid
  (personal)/proof/page.tsx             what the typesetter reads (development only)
  (personal)/about/page.tsx             education and contact
  (personal)/projects/page.tsx          projects table
  (personal)/papers/page.tsx            reference list
  (personal)/posts/page.tsx             social posts
  llms.txt/route.ts                     crawler-friendly site index
  llms-full.txt/route.ts                the index plus every paper's abstract
components/
  article/                              sheet, pages, front matter, figures, tables, references
  palace-cta.tsx                        the Memory Palace button
  post-card.tsx                         one card on /posts
content/
  layout/home.json                      the typeset home page
  layout/sheets.json                    the lengths of the sheets that end under their content
  papers/details.json                   abstracts, captions and tables, verbatim
  posts/posts.json                      social posts
lib/
  article.ts                            the home article as blocks
  content.ts                            projects + papers + education data
  inline.ts                             inline content as a tree
  layout.ts                             loads the layout, checks it is current
  paginate.ts                           page geometry and pagination
  site.ts                               site URL, affiliations, navigation, contact links
  posts.ts                              posts loader
public/
  papers/                               one figure per paper
scripts/
  build-palace.mjs                      build + combine the two Memory Palace apps
  typeset.mjs                           typeset the home page
palace-outer/                            3D Memory Palace room
palace-inner/                            in-monitor portfolio OS
next.config.ts                          rewrites for /palace
```
