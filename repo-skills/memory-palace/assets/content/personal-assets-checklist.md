# Personal asset replacement checklist

Upstream ships Henry's personal photos and resume PDF inside the vendor
tree. If you don't replace them, your live `/palace` deploy will show
Henry's face and link to Henry's resume. Walk this checklist before you
deploy.

## `palace-inner/src/assets/pictures/`

Upstream files and what each renders as:

| File | Where it shows up |
|---|---|
| `currentme.jpg` | About page hero / portrait |
| `workingAtComputer.jpg` | About page "what I do" block |
| `neverGiveUp.jpg` | About page narrative |
| `ee.jpg` | About page background or interest section |
| `forehire.jpg` / `forHireGif.gif` | "available for hire" badge in showcase |
| `sparkles.gif` | decorative sparkle animation on hover |
| `contact-gh.png`, `contact-twitter.png`, `contact-in.png` | Contact-page social icons |
| `projects/` (subfolder) | per-project thumbnails referenced from `Projects.tsx` |

### What to do

1. Replace `currentme.jpg`, `workingAtComputer.jpg`, `neverGiveUp.jpg`,
   `ee.jpg` with your own photos. Keep the same filenames so existing
   imports keep working — or rename and update the imports in the
   showcase TSX files.

2. Replace `forehire.jpg` / `forHireGif.gif` with your own banner — or
   delete both and remove the `<ResumeDownload>` "for hire" section.

3. Replace `contact-*.png` with the icon set for whichever social
   channels you actually use. The Contact placeholder in
   `assets/content/Contact.tsx` reads from these.

4. **Repopulate `projects/`** with thumbnails matching the project list
   in `assets/content/Projects.tsx`. One image per project entry.

5. `sparkles.gif` is generic decoration; keep or remove freely.

### Quick clean-slate option

If you don't have photos ready, replace each upstream image with a 1×1
transparent PNG so the layout doesn't collapse, then add real images
incrementally as you have them. Don't ship to production with
upstream's `currentme.jpg` on your About page.

## `palace-inner/src/assets/resume/`

| File | What |
|---|---|
| `Henry_Heffernan_S22_Resume.pdf` | Henry's actual resume |
| `printer.gif` | decorative printer animation |

### What to do

1. Drop your resume PDF into the same dir. Suggested name:
   `YourName_Resume.pdf`.

2. **Delete `Henry_Heffernan_S22_Resume.pdf`**. Don't ship it.

3. Update the import path in
   `palace-inner/src/components/showcase/ResumeDownload.tsx` to point
   at your file.

4. `printer.gif` can stay — it's decorative.

## `palace-inner/public/`

Look for `favicon.ico`, `logo192.png`, `logo512.png`. Upstream ships
generic CRA defaults that you should overwrite with your own.

```bash
# Quick way to scaffold from a 512x512 source:
sharp 512.png --resize 192 > logo192.png
convert 512.png -define icon:auto-resize=16,32,64 favicon.ico
```

## `palace-inner/src/assets/audio/`

Upstream ships Henry's music tracks (break.mp3, house_master.mp3,
edge_unmastered.mp3, dnb_drop_drums.mp3, dnb_snip.mp3). They play
inside Henry's `credits` app, which most adopters drop per
`Desktop.applications.md`. If you keep the `credits` app, replace the
audio with tracks you own or have a license to redistribute.

## After every replacement

Run `make sync` if you also touched the skill, then a local
`npm run build` to make sure no import paths broke.
