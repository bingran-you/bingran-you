# bingranyou.com

Personal site of [Bingran You](https://bingranyou.com) — built with Next.js + MDX, deployed on Vercel.

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **Tailwind CSS v4** + `@tailwindcss/typography`
- **MDX** via `@next/mdx` with file-based blog routing
- **TypeScript**

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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

## Layout

```
app/
  page.tsx              home
  projects/page.tsx     projects index
  papers/page.tsx       papers index
  blog/page.tsx         blog index
  blog/[slug]/page.tsx  individual post (static, dynamicParams=false)
components/
  social-links.tsx      footer links
content/
  posts/                MDX blog posts
lib/
  content.ts            projects + papers data
  posts.ts              MDX post registry
mdx-components.tsx      global MDX component overrides
next.config.ts          MDX + remark-gfm
```
