# `palace-outer/src/Application/UI/components/LoadingScreen.tsx` — branding swaps

The BIOS / boot screen the user sees before the 3D scene loads. Upstream
has Henry-specific text embedded as JSX inline strings; you grep them
out and replace.

## Strings to replace

Upstream tokens you'll find in the file and what each renders as:

| Upstream string | Where it appears on screen |
|---|---|
| `HHBIOS` | bold inside the boot header line |
| `(C)2022 henryheffernan.com` | copyright tail of the boot header |
| `HSP S13` | the secondary banner — Henry's "personal" model number gag |
| `Heffernan, Henry Inc.` | the "OS owner" line |
| `Henry Heffernan — Portfolio` | the post-boot welcome line |
| `Henry Heffernan — Portfolio · 2022` | the bottom-of-screen footer |

## The bingranyou.com replacements (production reference)

These are the actual strings in the live site, for your reference:

```diff
-<b>HHBIOS</b>{' '}
+<b>BingranOS</b>{' '}

-<p>HHBIOS (C)2022 henryheffernan.com</p>
+<p>BYBIOS (C)2026 bingranyou.com</p>

-<p>HSP S13 ...</p>
+<p>BingranOS Memory Palace · XX 26</p>

-'Henry Heffernan — Portfolio'
+'Bingran You — Memory Palace'

-<p>Henry Heffernan — Portfolio · 2022</p>
+<p>Bingran You — Memory Palace · 2026</p>
```

## What you should do

Pick your own name + scheme — the exact wording doesn't matter, the
pattern matters. **NAME_OS** for the OS name, **NAME_BIOS** for the
BIOS bootloader name, your own model number, your own footer.

Constraints:

- Keep it ALL CAPS or PascalCase to match the BIOS aesthetic.
- Keep the `<b>` tags on the OS / BIOS tokens — they're rendered with
  the Millennium-Bold weight and a tighter letter-spacing.
- The footer date should reflect the year the site is up, not when
  Henry's original ran.

After the swap, search the file once more for "Heffernan" and "Henry"
to catch anything you missed.
