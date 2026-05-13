// SNIPPET — add this `rewrites` async fn to your host `next.config.ts`.
// If you already have a `rewrites()` returning an array, just append the
// two entries.
//
// Why: `public/palace/index.html` and `public/palace/os/index.html` are
// static files inside Next.js's public dir; rewrites give them clean URLs
// (`/palace`, `/palace/os`) without `.html` suffixes — and let the inner
// iframe load with no trailing slash (PLAYBOOK §K).

async rewrites() {
  return [
    // /palace serves the vendored outer site (webpack build in public/palace/)
    { source: "/palace", destination: "/palace/index.html" },
    // /palace/os serves the vendored inner site (CRA build in public/palace/os/)
    { source: "/palace/os", destination: "/palace/os/index.html" },
  ];
},
