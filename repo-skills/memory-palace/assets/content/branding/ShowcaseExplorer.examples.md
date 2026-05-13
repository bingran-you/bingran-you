# `palace-inner/src/components/applications/ShowcaseExplorer.tsx` — window chrome

The "showcase" window that wraps your Home/About/Projects content inside
the OS. Two `<Window>` props drive the chrome.

## Where they are

Around lines 23 + 28 in upstream:

```tsx
<Window
    ...
    windowTitle="Henry Heffernan — Showcase '22"
    ...
    bottomLeftText="© 2022 Henry Heffernan"
    ...
>
```

## What to do

```tsx
windowTitle="YOUR_NAME — Showcase 'YY"
bottomLeftText="© YYYY YOUR_NAME · template by Henry Heffernan (MIT)"
```

bingranyou.com production reference:

```tsx
windowTitle="Bingran You — Showcase '26"
bottomLeftText="© 2026 Bingran You · template by Henry Heffernan (MIT)"
```

## Why the attribution line matters

`bottomLeftText` is the always-visible window footer. **Keeping a
visible "template by Henry Heffernan (MIT)" credit here is the easiest
way to satisfy MIT attribution AND respectfully credit the inner-site
permission.** Don't strip the credit.

If you prefer a less prominent placement (e.g. footer in About.tsx
instead), make sure the attribution still appears somewhere on the
page that loads when a user first lands.
