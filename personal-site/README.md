# bingran.ai

Personal site of [Bingran You](https://bingran.ai) — built with Next.js + MDX, deployed on Vercel. Old domain `bingranyou.com` 301-redirects here.

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **Tailwind CSS v4** + `@tailwindcss/typography`
- **MDX** via `@next/mdx` for blog content
- **Generated skills catalog** sourced from mirrored `.agents/skills/`
- **TypeScript**

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run dev` regenerates `lib/skills.generated.json` before starting Next.js so the `/skills` catalog stays in sync with the mirrored workspace skills.

## Add a blog post

1. Create `content/posts/{slug}.mdx` with metadata export:
   ```mdx
   export const metadata = {
     title: "My post",
     description: "One-line summary.",
     date: "2026-05-01",
   };

   # Body
   ```
2. Add `"{slug}"` to `postSlugs` in `lib/posts.ts`.
3. Push — Vercel deploys.

## Refresh the skills catalog

When mirrored skills change and you want to refresh the static data without starting the dev server:

```bash
npm run skills:generate
```

## Layout

```
app/
  (personal)/layout.tsx                 shared shell + nav + footer
  (personal)/page.tsx                   home
  (personal)/about/page.tsx             about
  (personal)/projects/page.tsx          projects index
  (personal)/papers/page.tsx            papers index
  (personal)/skills/page.tsx            skills index
  (personal)/skills/[slug]/page.tsx     individual skill page
  (personal)/blog/page.tsx              blog index
  (personal)/blog/[slug]/page.tsx       individual post
  llms.txt/route.ts                     crawler-friendly site index
  llms-full.txt/route.ts                full index + blog bodies
components/
  social-links.tsx                      footer links
  bio-icons.tsx                         homepage icons
content/
  posts/                                MDX blog posts
lib/
  content.ts                            projects + papers + education data
  posts.ts                              blog post registry
  skills.ts                             skills catalog helpers
  skills.generated.json                 generated skills payload
scripts/
  generate-skills-data.mjs              build skills payload + public downloads
mdx-components.tsx                      global MDX component overrides
next.config.ts                          MDX + redirects
```
