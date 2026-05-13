# Baked CRT chassis texture — "Heffernan henry inc" replacement

The CRT monitor's chassis 3D mesh has Henry's name and the words
"henry inc" debossed into the plastic via the baked texture at:

```
palace-outer/static/models/Computer/baked_computer.jpg
```

This is **baked geometry**, not runtime text. The text is part of the
texture map that wraps the chassis mesh — you can't fix it with code.
Three ways to handle it.

## Option A — Photoshop / GIMP the texture (lowest effort)

Open `baked_computer.jpg` in Photoshop / GIMP / any pixel editor.

1. Find the "Heffernan henry inc" lettering in the texture. The text
   is usually on the bottom front strip of the chassis (where the
   manufacturer badge would be on a real Win98-era PC), running
   horizontally.
2. Sample the surrounding chassis color (warm beige, RGB roughly
   `#cdb89c`).
3. Use clone stamp / heal brush to paint over the lettering with the
   surrounding texture. Match the subtle vertical-grain plastic
   pattern.
4. Optionally, paint your own name / brand at the same location using
   a similar deboss effect:
   - Type at ~14 px, slightly off-white
   - 1 px dark inner shadow (mimics the deboss)
   - 1 px light outer shadow on the bottom edge (mimics the highlight)
5. Save back as `baked_computer.jpg` (JPEG quality 90+, keep size
   under upstream's ~600 KB).

Tradeoff: looks slightly off if you don't match the original baking
lighting perfectly. Most viewers won't notice.

## Option B — Blender re-bake from source (highest effort, best result)

Henry's source `.blend` files aren't in the public repos. If you can
get them from Henry directly:

1. Open the chassis mesh in Blender.
2. Edit the chassis decal material (it'll be a separate texture node
   or shader-input — Henry organized them cleanly).
3. Replace the "Heffernan henry inc" text with your own.
4. Bake the diffuse map again with the same lighting setup. Use
   Cycles, 256 samples, bake selected to active object's UV.
5. Export the baked image as JPG, replace
   `static/models/Computer/baked_computer.jpg`.

Tradeoff: requires Blender + the source files + 30 min of bake time.
Best visual result.

## Option C — leave it as an attribution (no work)

Keep the debossed "Heffernan henry inc" as an in-world attribution to
Henry's original work. Document it in your `palace-outer/NOTICE.md`:

> The CRT chassis 3D mesh embosses "Heffernan henry inc" into the
> monitor housing as a visible attribution to Henry's original work.

Henry-the-author tends to appreciate this. Many adopters of CC-style
templates leave a visible in-product credit like this voluntarily even
when the license doesn't require it.

## After replacing the texture

```bash
npm run palace:build
```

Visit `/palace` and rotate the camera to inspect the CRT chassis from
multiple angles — the texture is wrapped, so make sure the
replacement also looks right from the back / sides where the texture
tiles continue.

## Files in the same dir

For reference, this is what `palace-outer/static/models/Computer/`
contains:

- `computer_setup.glb` — the chassis + monitor + keyboard + speakers mesh
- `baked_computer.jpg` — the diffuse map you're editing (contains the
  text you want to remove)

Don't touch `computer_setup.glb` unless you're comfortable with
glTF / Blender export — the mesh is fine as-is, only the texture has
Henry's branding.
