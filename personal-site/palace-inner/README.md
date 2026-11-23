# Memory Palace — portfolio OS

This is the in-monitor portfolio for
[Bingran You's Memory Palace](https://bingran.ai/palace). Its windows mirror
the parent site by hand: About follows `PERSON` and `AFFILIATIONS` in
`lib/site.ts`; Experience follows `experience`, `education` and `papers` in
`lib/content.ts`; Projects follows `projects` there, with each project's own
description. They hold facts only, no prose.

The app is built by the parent site's `npm run palace:build` command and served
from `/palace/os/`; do not deploy this directory independently.

This directory is adapted from Henry Heffernan's
[`portfolio-inner-site`](https://github.com/henryjeff/portfolio-inner-site).
See [`NOTICE.md`](NOTICE.md) for attribution and permission details.
