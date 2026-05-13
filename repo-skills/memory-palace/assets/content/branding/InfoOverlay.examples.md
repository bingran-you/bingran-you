# `palace-outer/src/Application/UI/components/InfoOverlay.tsx` — branding swaps

The top-left HUD that types out your name and title once you enter the
3D scene (the typewriter-effect overlay). Already a clean module-level
constant — just edit two lines.

## Where they are

Lines 10–11 in upstream:

```ts
const NAME_TEXT = 'Henry Heffernan';
const TITLE_TEXT = 'Software Engineer @ Stripe';
```

## What to do

Replace with your name and one-liner.

```ts
const NAME_TEXT = 'YOUR_NAME';
const TITLE_TEXT = 'YOUR_TAGLINE';
```

bingranyou.com production reference:

```ts
const NAME_TEXT = 'Bingran You';
const TITLE_TEXT = 'Agentic Builder · Ion Trapper';
```

## Constraints

- Keep `TITLE_TEXT` short (under ~40 chars). The typewriter timing
  is hand-tuned in the same file; very long strings overrun the
  cursor blink.
- The middle-dot `·` (U+00B7) reads better than `|` or `-` for
  separating two beats. Optional.
