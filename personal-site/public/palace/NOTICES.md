# Third-party assets — Memory Palace

The 3D models, baked lighting textures, CRT screen layers, and audio samples
in this directory originate from **Henry Heffernan's `portfolio-website`**
([github.com/henryjeff/portfolio-website](https://github.com/henryjeff/portfolio-website)),
released under the MIT License (Copyright 2024 Henry Heffernan).

We use them substantially unmodified, in keeping with that license. The
upstream license text is reproduced below in full. Any future modifications
we make to these binary assets stay under the same MIT terms; the original
copyright notice and permission notice are preserved.

## Files derived from `henryjeff/portfolio-website`

```
models/computer_setup.glb            ← static/models/Computer/computer_setup.glb
models/baked_computer.jpg            ← static/models/Computer/baked_computer.jpg
models/decor.glb                     ← static/models/Decor/decor.glb
models/baked_decor.jpg               ← static/models/Decor/baked_decor_modified.jpg
models/environment.glb               ← static/models/World/environment.glb
models/baked_environment.jpg         ← static/models/World/baked_environment.jpg
textures/monitor-smudge.jpg          ← static/textures/monitor/layers/compressed/smudges.jpg
textures/monitor-shadow.png          ← static/textures/monitor/layers/compressed/shadow-compressed.png
textures/monitor-scanlines.mp4       ← static/textures/monitor/video/static-texture-layer.mp4
audio/mouse/mouse_down.mp3           ← static/audio/mouse/mouse_down.mp3
audio/mouse/mouse_up.mp3             ← static/audio/mouse/mouse_up.mp3
audio/keyboard/key_1.mp3..key_6.mp3  ← static/audio/keyboard/key_*.mp3
audio/startup.mp3                    ← static/audio/startup/startup.mp3
```

## Upstream MIT License

```
MIT License

Copyright 2024 Henry Heffernan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
```

## What we did NOT take

The inner Windows-98-style React app at
[github.com/henryjeff/portfolio-inner-site](https://github.com/henryjeff/portfolio-inner-site)
has **no LICENSE file** and is therefore reserved-rights by default. We do
not reuse any code or assets from that repository. The content inside our
CRT (the iframe shown when the user clicks the monitor) is our own
`bingran.you` text site.
