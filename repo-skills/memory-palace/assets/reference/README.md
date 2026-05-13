# Reference

## Live demo

The skill's reference deployment is at
[**bingranyou.com/palace**](https://bingranyou.com/palace).

What you should see when everything is wired correctly:

1. **Boot screen** — black BIOS-style screen with your branded boot
   text typing out, then "Press DEL to enter SETUP, ESC to skip" → "Press
   any key to begin". Click anywhere to dismiss.
2. **3D office room** — fixed camera looking at a Win98-era desk with a
   beige CRT monitor centered. Soft warm lighting, no music by default
   (if the upstream `office.mp3` autoplay is left enabled, you'll hear
   ambient office sounds — see `audio-cleanup.md`).
3. **CRT monitor screen** — the screen face is an iframe rendering the
   inner Win98 desktop. Your start menu icon, your branded OS name down
   the start-menu vertical bar, your custom Showcase window with About
   / Experience / Projects / Contact.

The "Heffernan henry inc" debossed into the CRT chassis is baked-in
geometry from the upstream 3D model — see `baked-texture-replacement.md`
for how to replace it.

## Capturing your own reference screenshot

After you deploy, capture a screenshot of YOUR /palace for your own
README so visitors know what they're getting before they click through
the boot screen.

```bash
# Headless capture from a local build:
npx playwright screenshot \
    --browser chromium \
    --viewport-size 1440,900 \
    --wait-for-selector "#computer-screen" \
    --full-page \
    http://localhost:3000/palace \
    palace-screenshot.png
```

You'll need to drive the boot screen past the "click to begin" gate
first — Playwright `--click` doesn't fire the global click handler the
3D scene listens for. Easiest: temporarily comment out the click gate
in `palace-outer/src/Application/UI/components/LoadingScreen.tsx` for
the screenshot run, then revert.
