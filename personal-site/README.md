# bingran.ai

Personal site of [Bingran You](https://bingran.ai) — built with Next.js, deployed on Vercel. Old domain `bingranyou.com` 301-redirects here.

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

Every route is one or more sheets of an article: a rule down the left margin, an "Article" running head with the navigation, a bold serif title, hairline rules, two text columns, numbered figures and tables, and a page number at the foot. The geometry (margins, column widths, rules, type sizes and leading) was measured from a printed journal page and is expressed in points times `--pt`; see the header of `components/article/article.module.css`. A sheet is as tall as its content.

- `components/article/sheet.tsx` — `<Sheet>`: one sheet with its margin rule, head rule, footnote and page number. Left-hand and right-hand pages differ as in print.
- `components/article/front.tsx` — `<Front>`: the fact rows, byline, position and affiliations of a title page.
- `components/article/blocks.tsx` — a paper in its own words (`<PaperText>`, `<PaperFigure>`, `<PaperTable>`), reference entries, and the education and project tables.
- `components/palace-cta.tsx` — the "Enter the Memory Palace" button. Its look is fixed by `.palace-cta` and `.palace-cta-slot` in `app/globals.css`; do not restyle it.

Figures keep the width they have on the published page (`printWidth`, in points). One wider than a text column is centred with its caption in two columns underneath; one that fits a column stands in the second column beside the text. Tables are as wide as in print, or as their contents if that is wider.

## Copy rule: nothing is written for the site

The site carries facts and other people's own words, never prose composed for it:

- **Papers** — title, authors, venue, abstract, first figure with its caption and, where the paper has one, its main table, all verbatim from the paper's arXiv version.
- **Projects** — the description each project gives itself on its site or repository.
- **Everything else** — names, dates, links and labels.

### Add or update a paper

1. Add the entry to `papers` in `lib/content.ts` (title, link, venue tag, authors, reference, arXiv id, track).
2. Add its abstract, figure and table to `content/papers/details.json` under the same `slug`, copied verbatim from `https://arxiv.org/html/<id>`. Inline markup is limited to `<i>`, `<b>`, `<sup>`, `<sub>` and `<code>` (a test enforces this).
3. Put the figure in `public/papers/` and record its pixel size in `details.json`, together with `printWidth`: the width of the figure (and of the table) on the published page, in points. Measure it in the journal PDF, or in the arXiv PDF when the journal's is not at hand (`pdftoppm -r 144`, then the extent of the ink above the caption).
4. Mirror the title and venue in `palace-inner/src/components/showcase/Experience.tsx` and in the repository-root `README.md`.

### Add a post to /posts

See the `social-scraping-policy` skill; `npm run post:add -- <url>` appends to `content/posts/posts.json`.

## Layout

```
app/
  (personal)/layout.tsx                 the desk every sheet lies on
  (personal)/page.tsx                   home: title page, then every paper
  (personal)/about/page.tsx             education and contact
  (personal)/projects/page.tsx          projects table
  (personal)/papers/page.tsx            reference list
  (personal)/posts/page.tsx             social posts
  llms.txt/route.ts                     crawler-friendly site index
  llms-full.txt/route.ts                the index plus every paper's abstract
components/
  article/                              sheet, front matter, figures, tables, references
  palace-cta.tsx                        the Memory Palace button
  post-card.tsx                         one card on /posts
content/
  papers/details.json                   abstracts, captions and tables, verbatim
  posts/posts.json                      social posts
lib/
  content.ts                            projects + papers + education data
  site.ts                               site URL, affiliations, navigation, contact links
  posts.ts                              posts loader
public/
  papers/                               one figure per paper
scripts/
  build-palace.mjs                      build + combine the two Memory Palace apps
palace-outer/                            3D Memory Palace room
palace-inner/                            in-monitor portfolio OS
next.config.ts                          rewrites for /palace
```
