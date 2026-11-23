# bingran.ai

Personal site of [Bingran You](https://bingran.ai), built with Next.js and deployed on Vercel. Old domain `bingranyou.com` redirects here.

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **TypeScript**

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design: one page of plain HTML

The site is one page, `app/page.tsx`, set in the browser's default styles after [noahshinn.com](https://noahshinn.com/): the name, the portrait, then Contact, About, Experience, Education, Papers and Projects as headings over lines and bulleted lists. It has no stylesheet at all.

- The portrait is the way into the Memory Palace: it links to `/palace` (a plain anchor, since `/palace` is a static document served by a rewrite) and shows "Enter the Memory Palace" when pointed at. Nothing else on the page announces it.
- `/about`, `/projects` and `/papers` were pages of their own; `next.config.ts` redirects them to the sections of the page.

## Copy rule: nothing is written for the site

The site carries facts and other people's own words, never prose composed for it:

- **Papers**: title, authors and venue, and an abstract copied verbatim from the paper's arXiv version for `/llms-full.txt` and the structured data.
- **Projects**: the description each project gives itself on its site or repository.
- **About**: the line Bingran's GitHub profile (the repository-root `README.md`) opens with.
- **Experience** and **Education**: worded as on Bingran's LinkedIn (`experience` and `education` in `lib/content.ts`, repeated in `palace-inner/src/components/showcase/Experience.tsx`).
- **Everything else**: names, dates, links and labels.

### Add or update a paper

1. Add the entry to `papers` in `lib/content.ts` (title, link, venue tag, authors, reference, arXiv id, track). A published paper links through its DOI (`https://doi.org/…`), not to the publisher's page. Within a track, the papers Bingran wrote as first or co-first author come first (a test checks this); within each group, papers stand in descending order of their Google Scholar citations, and the higher-impact venue goes first where citations are level.
2. Add its abstract to `content/papers/details.json` under the same `slug`, copied verbatim from `https://arxiv.org/html/<id>`. Inline markup is limited to `<i>`, `<b>`, `<sup>`, `<sub>` and `<code>` (a test enforces this).
3. Mirror the title and venue in `palace-inner/src/components/showcase/Experience.tsx` and in the repository-root `README.md`.

### Add or update a project

1. Edit its entry in `projects` in `lib/content.ts`: the name, a link to its site or repository, and the description it gives itself there, verbatim. BenchFlow the company stands under Experience; under Projects, BenchFlow is its CLI (`github.com/benchflow-ai/benchflow`), and a test checks that the company site is not listed.
2. Mirror the entry in `palace-inner/src/components/showcase/Projects.tsx` and under Selected Work in the repository-root `README.md`.

## Layout

```
app/
  page.tsx                              the site
  layout.tsx                            metadata and structured data
  llms.txt/route.ts                     crawler-friendly site index
  llms-full.txt/route.ts                the index plus every paper's abstract
content/
  papers/details.json                   abstracts, verbatim
lib/
  content.ts                            projects, papers, experience and education
  site.ts                               site URL, person, affiliations, contact links
scripts/
  build-palace.mjs                      build + combine the two Memory Palace apps
palace-outer/                            3D Memory Palace room
palace-inner/                            in-monitor portfolio OS
next.config.ts                          redirects, and rewrites for /palace
```
