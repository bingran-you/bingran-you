# bingran.ai

Personal site of [Bingran You](https://bingran.ai) — built with Next.js, deployed on Vercel. Old domain `bingranyou.com` 301-redirects here.

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **Tailwind CSS v4** + `@tailwindcss/typography`, with CSS Modules for the page furniture
- **Generated skills catalog** sourced from mirrored `.agents/skills/`
- **TypeScript**

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run dev` regenerates `lib/skills.generated.json` before starting Next.js so the `/skills` catalog stays in sync with the mirrored workspace skills. In a checkout without the skill submodules, run `./node_modules/.bin/next dev` instead so the catalog is left alone.

## Design: the site is set as a journal article

Every route is one or more sheets of an article: a rule down the left margin, an "Article" running head with the navigation, a bold serif title, hairline rules, two text columns, numbered figures and tables, and a page number at the foot. The geometry (margins, column widths, type sizes) was measured from a printed journal page and is expressed in points times `--pt`; see the header of `components/article/article.module.css`.

- `components/article/sheet.tsx` — `<Sheet>`: one sheet with its margin rule, running head, footnote and page number.
- `components/article/blocks.tsx` — a paper in its own words (`<PaperSection>`), reference entries, and the education, project and data tables.
- `components/palace-cta.tsx` — the "Enter the Memory Palace" button. Its look is fixed by `.palace-cta` and `.palace-cta-slot` in `app/globals.css`; do not restyle it.

## Copy rule: nothing is written for the site

The site carries facts and other people's own words, never prose composed for it:

- **Papers** — title, authors, venue, abstract, first figure with its caption and, where the paper has one, its main table, all verbatim from the paper's arXiv version.
- **Projects** — the description each project gives itself on its site or repository.
- **Everything else** — names, dates, links and labels.

### Add or update a paper

1. Add the entry to `papers` in `lib/content.ts` (title, link, venue tag, authors, reference, arXiv id, track).
2. Add its abstract, figure and table to `content/papers/details.json` under the same `slug`, copied verbatim from `https://arxiv.org/html/<id>`. Inline markup is limited to `<i>`, `<b>`, `<sup>`, `<sub>` and `<code>` (a test enforces this).
3. Put the figure in `public/papers/` and record its pixel size in `details.json`.
4. Mirror the title and venue in `palace-inner/src/components/showcase/Experience.tsx` and in the repository-root `README.md`.

### Add a post to /posts

See the `social-scraping-policy` skill; `npm run post:add -- <url>` appends to `content/posts/posts.json`.

## Refresh the skills catalog

When mirrored skills change and you want to refresh the static data without starting the dev server:

```bash
npm run skills:generate
```

## Layout

```
app/
  (personal)/layout.tsx                 the desk every sheet lies on
  (personal)/page.tsx                   home: title page, then every paper
  (personal)/about/page.tsx             education and contact
  (personal)/projects/page.tsx          projects table
  (personal)/papers/page.tsx            reference list
  (personal)/posts/page.tsx             social posts
  (personal)/skills/page.tsx            skills index
  (personal)/skills/[slug]/page.tsx     individual skill page
  llms.txt/route.ts                     crawler-friendly site index
  llms-full.txt/route.ts                the index plus every paper's abstract
components/
  article/                              sheet, figures, tables, references
  palace-cta.tsx                        the Memory Palace button
  post-card.tsx                         one card on /posts
content/
  papers/details.json                   abstracts, captions and tables, verbatim
  posts/posts.json                      social posts
lib/
  content.ts                            projects + papers + education data
  site.ts                               site URL, navigation, contact links
  posts.ts                              posts loader
  skills.ts                             skills catalog helpers
  skills.generated.json                 generated skills payload
public/
  papers/                               one figure per paper
scripts/
  generate-skills-data.mjs              build skills payload + public downloads
  build-palace.mjs                      build + combine the two Memory Palace apps
palace-outer/                            3D Memory Palace room
palace-inner/                            in-monitor portfolio OS
next.config.ts                          rewrites for /palace
```
