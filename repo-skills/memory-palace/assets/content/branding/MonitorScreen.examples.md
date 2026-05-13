# `palace-outer/src/Application/World/MonitorScreen.ts` — iframe title

Already covered for `iframe.src` by `assets/patches/monitor-iframe-src.snippet.ts`.
This file adds the matching `iframe.title` swap a few lines later.

## Where it is

Around line ~207, right after the `iframe.src` line:

```ts
iframe.title = "Henry Heffernan — Personal Computer";
```

## What to do

```ts
iframe.title = "YOUR_NAME — Personal Computer";
```

bingranyou.com production reference:

```ts
iframe.title = "Bingran You — Personal Computer";
```

## Why this matters

`iframe.title` is what screen readers announce when the focus enters
the inner OS, and it's the accessible label shown in browser DevTools.
Leaving it as Henry's hurts accessibility AND looks weird if anyone
inspects the page.
