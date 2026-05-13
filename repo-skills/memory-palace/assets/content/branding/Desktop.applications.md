# `palace-inner/src/components/os/Desktop.tsx` — `APPLICATIONS` map

Upstream ships eight apps on the inner Win98 desktop:

- `showcase` — your portfolio explorer (KEEP)
- `doom` — playable Doom shareware embed
- `oregonTrail` — playable Oregon Trail embed
- `scrabble` — Scrabble game
- `henordle` — Wordle clone, branded "henordle"
- `credits` — Henry's credits / about-this-site app
- `thisComputer` — "About This Computer" pane
- (plus Tetris / Snake in newer forks)

Most of these you don't want — `henordle` and `credits` especially are
Henry-personal. The map at the top of `Desktop.tsx` is what controls
which icons appear on the desktop AND which window components get
imported.

## What to do

1. **Decide which apps you keep.** Default recommendation:
   - Keep `showcase` always.
   - Keep `tetris` and `snake` if you want playable games (they're
     fun and impersonal).
   - **Drop `doom`, `oregonTrail`, `scrabble`, `henordle`, `credits`,
     `thisComputer`** unless you specifically want them.

2. **Edit the `APPLICATIONS` map.** Delete the entries you don't want.

3. **Delete the matching imports at the top of the file.** TypeScript
   will yell at you about unused imports if you skip this. Don't try
   to silence with `// @ts-ignore` — actually delete them.

4. **Delete the app source files** under
   `palace-inner/src/components/applications/` for the apps you
   dropped. They're sizable (Doom embed is ~200 KB).

5. **Update any other references.** Search the file for the key
   strings (`'doom'`, `'henordle'`, etc.) — Desktop.tsx renders icons
   from the same keys.

## bingranyou.com production reference

The live site keeps just three apps:

```ts
const APPLICATIONS = {
    showcase: { ... },
    tetris:   { ... },
    snake:    { ... },
};
```

## Constraints

- Don't rename `showcase` — `Desktop.tsx` and the route handlers
  reference that exact key.
- If you drop `doom` and `oregonTrail`, also delete the matching
  iframes / static assets under `palace-inner/src/assets/` to shrink
  your bundle. Both ship ~MB-class binaries.
