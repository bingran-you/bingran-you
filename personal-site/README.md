# bingran.ai

Personal site of [Bingran You](https://bingran.ai), built with Next.js and deployed on Vercel. Old domain `bingranyou.com` redirects here.

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **Tailwind CSS v4**, only for the Memory Palace button
- **TypeScript**

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design: one page of plain HTML

The site is one page, `app/page.tsx`, set in the browser's default styles after [noahshinn.com](https://noahshinn.com/): the name, the portrait, then Contact, About, Education, Papers and Projects as headings over lines and bulleted lists, a rule and the month the page was built. It has no stylesheet of its own. `app/globals.css` imports Tailwind without Preflight, which would reset the browser's defaults, so that the only styled thing on the page is the "Enter the Memory Palace" button.

- `components/palace-cta.tsx`: the button. Its look is fixed by `.palace-cta` and `.palace-cta-slot` in `app/globals.css`; do not restyle it.
- `/about`, `/projects` and `/papers` were pages of their own; `next.config.ts` redirects them to the sections of the page.

## Copy rule: nothing is written for the site

The site carries facts and other people's own words, never prose composed for it:

- **Papers**: title, authors and venue, and an abstract copied verbatim from the paper's arXiv version for `/llms-full.txt` and the structured data.
- **Projects**: the description each project gives itself on its site or repository.
- **About**: the line Bingran's GitHub profile (the repository-root `README.md`) opens with, and his affiliations.
- **Everything else**: names, dates, links and labels.

### Add or update a paper

1. Add the entry to `papers` in `lib/content.ts` (title, link, venue tag, authors, reference, arXiv id, track). A published paper links through its DOI (`https://doi.org/…`), not to the publisher's page. Within a track, papers stand newest first, in descending order of their arXiv numbers.
2. Add its abstract to `content/papers/details.json` under the same `slug`, copied verbatim from `https://arxiv.org/html/<id>`. Inline markup is limited to `<i>`, `<b>`, `<sup>`, `<sub>` and `<code>` (a test enforces this).
3. Mirror the title and venue in `palace-inner/src/components/showcase/Experience.tsx` and in the repository-root `README.md`.

## Layout

```
app/
  page.tsx                              the site
  layout.tsx                            metadata and structured data
  llms.txt/route.ts                     crawler-friendly site index
  llms-full.txt/route.ts                the index plus every paper's abstract
components/
  palace-cta.tsx                        the Memory Palace button
content/
  papers/details.json                   abstracts, verbatim
lib/
  content.ts                            projects + papers + education data
  site.ts                               site URL, person, affiliations, contact links
scripts/
  build-palace.mjs                      build + combine the two Memory Palace apps
palace-outer/                            3D Memory Palace room
palace-inner/                            in-monitor portfolio OS
next.config.ts                          redirects, and rewrites for /palace
```
