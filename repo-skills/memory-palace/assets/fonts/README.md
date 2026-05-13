# Bundled fonts

## Alfa Slab One — Open Font License 1.1

Drop both files into your vendored `palace-inner/src/assets/fonts/`:

- `AlfaSlabOne-Regular.woff2` — 21 KB, the woff2 referenced by the
  `@font-face` block in `assets/patches/font-and-li.snippet.css`.
- `AlfaSlabOne-OFL.txt` — the OFL license; ship it alongside the woff2
  in your vendor copy.

```bash
cp <skill>/assets/fonts/AlfaSlabOne-Regular.woff2 palace-inner/src/assets/fonts/
cp <skill>/assets/fonts/AlfaSlabOne-OFL.txt       palace-inner/src/assets/fonts/
```

**Do NOT drop them into `palace-inner/public/fonts/`.** CRA's css-loader
tries to resolve `/palace/os/fonts/...` absolute paths as JS modules and
fails. The `@font-face` snippet uses a relative `./assets/fonts/...` URL
specifically to avoid that.

Why bundled here (PLAYBOOK §M): the upstream template uses Adobe Typekit
"gastromond" which is domain-locked to Henry's domains and silently
falls back to system serif elsewhere. Google Fonts works but the edge
occasionally 503s. Self-hosting kills both failure modes and adds 21 KB
to your bundle, which is nothing next to the 50 MB of 3D assets.

## The other four fonts (MSSansSerif, Millennium, Millennium-Bold, Terminal)

These ship inside the upstream `portfolio-inner-site` repo at
`src/assets/fonts/`. The `setup.sh` clone preserves them — you don't
need to copy them from here.
