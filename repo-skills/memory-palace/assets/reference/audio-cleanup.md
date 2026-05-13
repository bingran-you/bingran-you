# Audio cleanup

Upstream ships two audio surfaces that you probably want to silence
or replace before deploying:

1. **Outer ambient (`office.mp3`)** — auto-plays on `loadingScreenDone`.
   Soft pencil-on-paper / keyboard typing ambient track from Henry's
   recording session. ~3 MB, loops.
2. **Inner music (`palace-inner/src/assets/audio/*.mp3`)** — Henry's
   own DJ-style tracks (break, house_master, edge_unmastered, dnb_*).
   These play inside the `credits` app. ~30 MB total.

## Outer ambient: short-circuit the autoplay

`palace-outer/src/Application/Audio/AudioSources.ts` registers an
`AmbienceAudio` source and plays it on `loadingScreenDone`. Two ways
to handle it:

### Option A — silence completely (most adopters)

In `AmbienceAudio`'s constructor, short-circuit before the play call:

```diff
  constructor(audio: Audio) {
      super(audio, audio.sources.office);
+     // memory-palace skill: silence Henry's ambient track by default.
+     // Remove this guard if you want to keep the autoplay.
+     return;
      // ...rest of upstream constructor
  }
```

Or comment out the entire `super.on('loadingScreenDone', ...)` listener
that fires the play.

### Option B — replace with your own ambient

Drop your own 1-3 MB looping `.mp3` (e.g. lofi pad, white noise) into
`palace-outer/static/audio/atmosphere/office.mp3` (same filename, the
loader resolves by name). Keep it short and loopable.

### Option C — gate behind the existing mute toggle

`MuteToggle.tsx` already exists in the outer UI. Leave the ambient
playing but default `Audio.muted = true` so the toggle is the user's
opt-in. Best for users who like the ambient but want it muted by
default on mobile.

## Inner music: drop or replace

The `credits` app's audio depends on which tracks ship in
`palace-inner/src/assets/audio/`.

### If you dropped the `credits` app (recommended)

Per `content/branding/Desktop.applications.md`, most adopters delete
the `credits` entry from the `APPLICATIONS` map. After that, you can
also delete the audio files:

```bash
rm palace-inner/src/assets/audio/{break,house_master,edge_unmastered,dnb_drop_drums,dnb_snip}.mp3
```

Verify your inner build still passes after the deletion — TypeScript
will catch any remaining imports.

### If you kept the `credits` app

Replace each `.mp3` with a track you own or have a license to
redistribute. Keep the filenames so existing imports keep working.
Don't ship Henry's tracks in your deploy.
