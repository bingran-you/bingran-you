---
name: equity-investment-memo
description: Equity research benchmark — produce a one-page US-stock investment memo from a fixed local data snapshot, with mandatory chapter structure (Decision Card, Dual-Horizon Framing, Verified Facts, Derived Metrics, three-tier scenarios, Triggers, Judgment), arguing from both prospective-buyer and existing-holder viewpoints. Use when evaluating an agent's structured financial-analysis output. Originally authored as a SkillsBench task by Bingran You; copied here as a discoverable, self-contained reference.
metadata:
  source_url: https://github.com/BenchFlow-Hub/galaxies-bingran/tree/main/tasks/equity-investment-memo
  category: finance
  difficulty: hard
  tags:
    - equity-research
    - investment-memo
    - structured-output
    - recent-ipo
    - lock-up
---

# equity-investment-memo

A benchmark task for structured financial-analysis output. The agent is
handed a snapshot of equity data on disk and must produce a tightly
structured one-page investment memo — one that argues from two
viewpoints, separates near-term timing from long-term ownership, and
commits to a three-tier scenario stance with measurable triggers.

This is one of the SkillsBench tasks I wrote. The original — including
the data snapshot under `/root/data/`, the reference oracle, and the
verifier — lives at
[BenchFlow-Hub/galaxies-bingran/tasks/equity-investment-memo](https://github.com/BenchFlow-Hub/galaxies-bingran/tree/main/tasks/equity-investment-memo).
What you'll find here is the **instruction** and the **task config**.

## Instruction

> You are an analyst, helping me for preparing an one-page investment
> decision memo for US stocks. You have a data snapshot for you to
> analysis. The snapshot is under `/root/data/` folder.
>
> Only use data in `/root/data/`. Do not do web search to get any
> external data. Today's date is indicated in the data set.
>
> Save final result as `/root/memo.md`. It has to:
>
> - Answer from the viewpoints of both prospective buyer and existing
>   holder;
> - Highlight recent (in the coming 1-2 quarters) and multi-year
>   perspectives;
> - Provide measurable triggers and three-tier scenarios: bull, base,
>   and bear.
>
> Strictly use the following chapter titles to organize the final
> markdown file:
>
> ```md
> ## Decision Card
> ## Dual-Horizon Framing
>     ### Near-Term Timing View
>     ### Long-Term Ownership View
> ## Verified Facts (note: You need to quote the source URLs word by word in Verified Facts section.)
> ## Derived Metrics (note: for each line you need to display formulas or inputs )
> ## Scenarios with
>     ### Bull Case
>     ### Base Case
>     ### Bear Case
> ## Triggers
> ## Judgment
> ```

## Task config

```toml
version = "1.0"

[metadata]
author_name = "Bingran You"
author_email = "bingran.you@berkeley.edu"
difficulty = "hard"
category = "finance"
tags = ["equity research", "investment memo", "structured output", "recent-ipo", "lock-up"]

[verifier]
timeout_sec = 600.0

[agent]
timeout_sec = 1200.0

[environment]
build_timeout_sec = 600.0
cpus = 1
memory_mb = 2048
storage_mb = 4096
```

## Why it's a good test

- **No web search allowed** — forces the agent to reason from a fixed
  snapshot rather than wander the open web; rewards data discipline.
- **Quote-the-source contract** — the Verified Facts section must quote
  source URLs verbatim, which catches hallucinated citations.
- **Two viewpoints, two horizons** — the four-quadrant frame
  (buyer/holder × near-term/long-term) is a forcing function: a vague
  "this stock is fine" answer can't satisfy all four cells.
- **Three-tier scenarios with triggers** — the agent must commit to
  measurable conditions, not vibes.
