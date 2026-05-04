---
name: deep-research
description: Deep web research benchmark — given partial clues about authors and topic, find the exact paper and produce a structured answer file with the paper title and DOIs. Use when the user wants to test or demonstrate an agent's ability to do multi-hop, citation-aware web research from sparse input. Originally authored as a SkillsBench task by Bingran You; copied here as a discoverable, self-contained reference.
metadata:
  source_url: https://github.com/BenchFlow-Hub/galaxies-bingran/tree/main/tasks/deep-research
  category: deep-research
  difficulty: medium
  tags:
    - web-search
    - deep-research
---

# deep-research

A benchmark task that exercises an agent's deep web-research loop: starting
from partial author hints and a vague topic description, locate the exact
target paper and emit a structured answer.

This is one of the SkillsBench tasks I wrote. The original — including
the full sandbox environment, scripts, solution, and verifier — lives at
[BenchFlow-Hub/galaxies-bingran/tasks/deep-research](https://github.com/BenchFlow-Hub/galaxies-bingran/tree/main/tasks/deep-research).
What you'll find here is the **instruction** and the **task config** —
the parts that define what the agent has to do.

## Instruction

> Find a paper published before 06/2024. This paper is about quantum
> networks and fast ion string transportation and second-order
> correlation functions. For the 2 first authors, one of them has gotten
> PhD degree in NYU and become postdoc of UC Berkeley. And another
> finished undergraduate study in China.
>
> Put answer to `/root/final_answer.md` as a markdown file. It has 4
> lines:
>
> 1. The complete title of the paper
> 2. The DOI of the paper (only DOI string, no prefix)
> 3. The DOI of the first co-author (only DOI string, no prefix)
> 4. The DOI of the second co-author (only DOI string, no prefix)

## Task config

```toml
version = "1.0"

[metadata]
author_name = "Bingran You"
author_email = "bingran.you@berkeley.edu"
difficulty = "medium"
category = "deep-research"
tags = ["web-search", "deep-research"]

[verifier]
timeout_sec = 900.0

[agent]
timeout_sec = 400.0

[environment]
build_timeout_sec = 600.0
cpus = 1
memory_mb = 4096
storage_mb = 10240
allow_internet = true

[agent.env]
EXA_API_KEY="${EXA_API_KEY}"
```

## Why it's a good test

- **Multi-hop reasoning** — the agent must cross-reference author career
  history with topic keywords to disambiguate a single paper.
- **Citation discipline** — the answer requires DOIs (paper + author
  ORCID-style IDs), not just titles.
- **Web tool reliance** — the task is intentionally hard to solve from
  cached training data alone; expect the agent to actually search.
