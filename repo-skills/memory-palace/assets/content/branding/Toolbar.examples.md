# `palace-inner/src/components/os/Toolbar.tsx` — start-menu vertical text

The vertical text running down the side of the Win98 Start menu. Upstream
hardcodes `HeffernanOS`; swap to your OS name.

## Where it is

Around line 99 in upstream:

```tsx
<p style={styles.verticalText}>HeffernanOS</p>
```

## What to do

```tsx
<p style={styles.verticalText}>YOUR_OS_NAME</p>
```

bingranyou.com production reference:

```tsx
<p style={styles.verticalText}>BingranOS</p>
```

## Constraints

- 8–14 characters reads cleanly at the font size. Anything longer
  wraps awkwardly.
- The vertical orientation comes from a CSS transform in `styles.verticalText`
  — you don't need to touch that.
- The string should match what you set as `<b>{OS_NAME}</b>` in
  `LoadingScreen.tsx` so the BIOS and the running OS feel coherent.
