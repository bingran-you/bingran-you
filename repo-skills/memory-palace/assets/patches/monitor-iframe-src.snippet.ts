// SNIPPET — locate the line that sets `iframe.src` in
// palace-outer/src/Application/World/MonitorScreen.ts (around line 207 in
// upstream). Replace whatever upstream sets with this exact form.
//
// Two non-obvious requirements baked in:
//
// 1. Path has NO trailing slash. PLAYBOOK §K — Vercel auto-redirects
//    /palace/os/ → /palace/os, and the intermediate hop's text/plain
//    Content-Type makes Chrome stick on the broken-document placeholder.
//    Always point iframe src at the canonical path.
//
// 2. `?cb=` + Date.now() cache-bust. PLAYBOOK §J — Chrome's HTTP cache
//    stores response headers alongside bodies. After deploying a header
//    change (COOP, X-Frame-Options, CSP), `must-revalidate` does NOT
//    force a header refresh — Chrome reuses cached headers across loads.
//    A query-string change forces a fresh response on every parent load,
//    which is essentially free since /palace/os is ~1.7 KB.

iframe.src = '/palace/os?cb=' + Date.now();
