# Thin Harness, Fat Skills

Author: Garry Tan  
Source: long-form essay / talk notes

---

## Core thesis

The main idea of this essay is not that models are getting dramatically smarter, but that **the real source of leverage is architecture**.

Garry Tan references Steve Yegge's claim that people using AI coding agents are often 10x to 100x more productive than people using chat-style AI tools, and in some cases vastly more productive than elite engineers from earlier eras. His argument is that this gap is not explained by better models alone. The same people often have access to the same underlying models. What differs is the system around them.

That system, in his framing, is: **thin harness, fat skills**.

In other words:

- the harness should stay thin and focused on execution
- the skills should be fat and carry process, judgment, and domain knowledge

The more complex your system becomes, the more important this distinction gets.

---

## 1. The harness is essential, but it should stay thin

Tan argues that the real product is often the wrapper around the model rather than the model itself.

He points to things like:

- live repo context
- prompt caching
- purpose-built tools
- context bloat minimization
- structured session memory
- parallel sub-agents

None of these make the model intrinsically smarter. What they do is make the model more effective by ensuring that it gets the right context at the right time, without being overwhelmed by noise.

That wrapper is what he calls the harness.

But the crucial point is that the harness should not become a giant, bloated platform. A bad pattern is a fat harness with thin skills:

- too many tool definitions
- every API endpoint wrapped as its own tool
- slow MCP round-trips
- high token overhead
- more latency
- more failure surfaces

Instead, he advocates for purpose-built, narrow, fast tooling and a harness that remains minimal.

The harness should mainly do a few things well:

- run the model in a loop
- manage files and context
- enforce safety and boundaries
- connect the model to deterministic tools

It is an execution layer, not the main repository of intelligence.

---

## 2. Skill files are closer to method calls than prompts

One of the strongest ideas in the essay is Tan's definition of a skill file.

A skill file is not just a prompt. It is a reusable markdown procedure that teaches the model *how* to do something. The user supplies the specific task. The skill supplies the process.

He explicitly compares this to a method call:

- it has a reusable structure
- it accepts parameters
- it produces different outcomes depending on the input

His example is a skill like `/investigate`, which might always follow a seven-step process such as:

- scope the dataset
- build a timeline
- diarize every document
- synthesize
- argue both sides
- cite sources

But the parameters change:

- TARGET
- QUESTION
- DATASET

Point that skill at a safety scientist and millions of legal discovery emails, and it behaves like a medical investigator. Point it at a shell company and campaign finance records, and it behaves like a political forensic analyst.

The skill stays the same. The process stays the same. But the invocation changes the capability surface.

That is why Tan says this is not really prompt engineering. It is closer to software design, with markdown functioning as the programming language for reusable judgment procedures.

---

## 3. Resolvers decide what context gets loaded and when

Even in this essay, Tan introduces a concept that becomes central in his later writing: the resolver.

A resolver is a routing table for context.

That means:

- skills tell the model how to do the work
- resolvers tell the model what to load before doing the work

For example, if a developer is about to change a prompt, the model might first be routed to `docs/EVALS.md`, which says:

- run the eval suite
- compare scores
- if accuracy drops by more than 2%, revert and investigate

The developer may not even know those rules exist. The resolver ensures that the relevant context gets pulled in at the moment it is needed.

Tan also gives a revealing personal example: he used to have a 20,000-line `CLAUDE.md` full of accumulated notes, patterns, and rules. It degraded model performance by burying the model in noise. He eventually reduced that into a much shorter resolver that mainly pointed to the right supporting documents.

The result was better performance, not because the model became more intelligent, but because the system stopped forcing all context into the window at once.

This is the core resolver principle: **do not make the model carry everything all the time; make the system load the right thing at the right moment.**

---

## 4. Latent vs deterministic: separate judgment from reliable execution

Tan introduces another very useful distinction: every step in a system should be classified as either latent or deterministic.

### Latent

This is where model intelligence matters:

- reading
- interpreting
- judging
- synthesizing
- recognizing patterns

### Deterministic

This is where reliability matters more than model flexibility:

- SQL queries
- arithmetic
- code execution
- constraint solving
- combinatorial optimization

His dinner-table example captures the idea well.

An LLM can reasonably seat 8 people at a dinner, because that problem involves soft social judgment. But if you ask it to seat 800 people, it will hallucinate something that sounds plausible but is structurally unreliable. That is no longer a judgment problem. It is a deterministic optimization problem.

The lesson is simple but important: the best systems are ruthless about assigning the right work to the right side.

- use latent space for high-value judgment
- use deterministic systems for trust and correctness

This separation is one of the foundations of good agent design.

---

## 5. Diarization is what makes AI useful for real knowledge work

Tan uses the term diarization in a broader sense than its traditional audio meaning.

Here, it refers to the act of reading all the material related to a subject and producing a structured profile or brief.

That means:

- not merely retrieving snippets
- not just extracting fields
- not just stitching together RAG results
- but actually reading a body of material and distilling it into a coherent structured judgment

He argues that this is what makes AI genuinely useful for serious knowledge work.

A database query cannot do this. A simple retrieval pipeline cannot do this. The model has to read across contradictions, temporal changes, and multiple documents, then synthesize them into a single coherent view.

That is much closer to what an analyst does than to what a search engine does.

---

## 6. The three-layer architecture

If you combine all the above ideas, you get a three-layer architecture.

### Top layer: fat skills

This is where most of the value lives:

- process
- domain knowledge
- judgment
- methodology

### Middle layer: thin harness

This layer handles:

- model execution loop
- file and context management
- safety boundaries
- tool connection

It should remain as lean as possible.

### Bottom layer: deterministic tools and applications

This includes:

- QueryDB
- ReadDoc
- Search
- Timeline
- other stable, programmatic tools

Tan's directional principle is clear:

- push intelligence upward into skills
- push execution downward into deterministic tooling
- keep the harness thin in the middle

This has an elegant consequence: when models improve, all skills improve with them, while the deterministic foundation stays reliable.

---

## 7. A concrete example: founder enrichment and matching at scale

Tan gives a concrete example from a YC-style environment involving thousands of founders.

The problem:

- thousands of structured applications
- questionnaire answers
- advisor chat transcripts
- public signals such as X posts, GitHub commits, and coding transcripts

Traditional operations teams can manage this at small scale, but not at thousands of participants. No human can hold all those profiles in working memory and notice subtle cross-cutting patterns.

His claim is that models can help, but only if the system is built correctly.

### Enrichment

A skill like `/enrich-founder` would:

- gather all relevant sources
- run enrichments
- diarize the founder
- surface the gap between what the founder says and what they are actually building

For example:

```text
FOUNDER: Maria Santos
COMPANY: Contrail
SAYS: "Datadog for AI agents"
ACTUALLY BUILDING: 80% of commits are in billing modules
```

That gap matters. It reveals that the company may really be a FinOps product rather than an observability product. This kind of judgment is hard to get from keyword search or embeddings alone. It requires full-profile reading and synthesis.

### Matching

Then the same skill-as-method-call idea is applied to matching:

- `/match-breakout` for sector clustering
- `/match-lunch` for serendipitous cross-sector table assignments
- `/match-live` for real-time on-site introductions

Same underlying matching capability, different invocation, different objective function.

The model can also make subtle categorization judgments that pure clustering methods might miss. Someone who self-identifies as developer tools may, after reading transcripts and code, really belong in compliance automation or RegTech.

### Learning loop

After the event, another skill can read surveys, diarize mediocre responses, identify patterns, and write refined rules back into the matching skill itself.

For example:

- if someone says they are AI infra but 80% of the codebase is billing, classify them differently
- if two people in the same group already know each other, penalize that and prefer novel introductions

This turns the skill into a learning artifact. The next run benefits automatically.

That is the compounding behavior Tan is aiming for.

---

## 8. Do not do one-off work; turn repeat work into permanent skills

Tan shares an instruction he gave to his OpenClaw system that captures the entire philosophy.

In essence:

- do not do one-off work if it is the kind of thing that will happen again
- do it manually on a few examples first
- show the result
- if approved, codify it into a skill
- if it should recur automatically, schedule it on a cron

His test is blunt: if he has to ask for the same thing twice, the system failed.

This is not a prompt trick. It is a systems philosophy.

In this architecture:

- every good skill is a permanent upgrade
- it does not forget
- it can run unattended
- it gets better when the underlying model gets better
- it compounds over time

That is where the real leverage comes from.

---

## The most important takeaways

If I compress the essay to the core ideas, I would keep these:

1. **The productivity gap comes more from architecture than from raw model quality.**
2. **The harness should stay thin and focused on execution.**
3. **Skill files are reusable procedures, not disposable prompts.**
4. **Resolvers determine what context gets loaded and when.**
5. **Latent space should handle judgment; deterministic systems should handle trust-critical execution.**
6. **Diarization is what turns a model from a retrieval tool into a knowledge worker.**
7. **The strongest systems convert repeat tasks into reusable skills instead of repeating manual prompting forever.**

---

## My judgment

This essay is especially valuable when read alongside the resolver essay.

If the resolver piece is about governance and context routing, then *Thin Harness, Fat Skills* is about how to organize capability.

What makes it useful is not that it gives a turnkey framework, but that it clarifies several fuzzy truths that many people sense in practice:

- why systems with lots of tools can still feel weak
- why model upgrades alone do not automatically produce strong agents
- why a well-designed skill is more valuable than repeated ad hoc prompting
- why compounding comes from captured process, not from isolated outputs

I largely agree with Tan's framing.

As systems become more complex, **architectural discipline matters more than one-off model cleverness**. The real long-term advantage comes from encoding method, routing context well, and separating judgment from deterministic execution.

---

## One-line ending

**It is not a smarter model alone that creates 100x leverage, but a better system structure that allows model intelligence to compound.**
