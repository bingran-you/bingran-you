# Resolvers: The Routing Table for Intelligence

Author: Garry Tan  
Source: long-form X post / public essay notes

---

## Core conclusion

The central claim of this essay is simple: **a resolver is a routing table for context**.

That means when a task of type X appears, the system should load document Y, rule set Z, or the appropriate skill context first, instead of forcing the model to carry everything at all times inside the prompt.

Tan argues that resolvers are one of the most important and most underappreciated pieces of agent architecture. They are nearly invisible when they work well, but their absence leads to slow, systemic failure: misfiled knowledge, unreachable skills, degraded context quality, and eventually a system that feels larger but less coherent.

---

## From a 20,000-line instruction file to a 200-line resolver

Tan begins with a striking confession. He had accumulated around 20,000 lines of instructions inside a giant `CLAUDE.md` file.

That file contained:

- quirks
- conventions
- lessons learned
- workflow rules
- edge cases
- accumulated institutional knowledge

At first, this felt like making the model smarter. In reality, it buried the model under noise.

The symptoms were predictable:

- slower responses
- worse attention
- lower precision
- degraded overall performance

The fix was not a better model. The fix was a better routing structure.

He replaced the giant instruction dump with a much smaller resolver, effectively a decision tree:

- if this is a person, route toward `people/`
- if this is a company, route toward `companies/`
- if this is policy analysis, route toward `civic/`

That smaller resolver improved the system immediately.

The key lesson is that model performance often collapses not because the model lacks intelligence, but because the system insists on presenting all information all the time. A resolver lets the system load the right information only when it matters.

---

## A single misfiling revealed a structural problem

One of the most important stories in the essay concerns a misfiled article.

Tan asked his agent to ingest an essay about OpenAI's industrial policy and regulatory positioning. That article clearly belonged in a policy or civic analysis area. Instead, the system filed it under `sources/`.

On the surface, that looks like a small filing mistake. But when he investigated, he found something much more serious:

- the ingest skill had a hardcoded default path
- it did not consult the resolver first
- it used its own private filing logic
- when uncertain, it dumped content into `sources/`

That led Tan to audit all of the skills that write to his brain repo. Out of 13 such skills:

- only 3 actually referenced the resolver
- the other 10 had their own internal assumptions and hardcoded paths

This is a profound design failure.

The system appears to have a unified knowledge base, but in reality each skill is quietly inventing its own classification logic. That leads not to dramatic collapse, but to a much more dangerous kind of failure:

- information slowly goes to the wrong place
- links stop forming properly
- retrieval quality degrades over time
- the knowledge base turns into a junk drawer

The solution was not to patch each skill one by one forever. The solution was to move from local habits to system-wide governance:

1. every brain-writing skill must read `RESOLVER.md` before creating a page
2. it must also read shared filing rules
3. filing must be determined by primary subject, not by file type, source format, or skill name

This is the moment where Tan stops treating filing mistakes as implementation bugs and starts treating them as governance failures.

---

## Skills can exist and still be unreachable

The second major problem in the essay is skill invisibility.

Tan describes a signature-tracking capability built inside an executive assistant skill. It could:

- track DocuSign deadlines
- surface unsigned documents
- draft reminder messages

The capability itself worked. But if a user asked:

- `check my signatures`
- `what do I need to sign`

nothing happened.

The issue was not that the skill was missing. The issue was that the resolver had no trigger path for it.

This is worse than not having the skill at all.

- If the skill does not exist, the system honestly says it cannot do the task.
- If the skill exists but is unreachable, the system creates the illusion of capability while failing at the moment of need.

That is a critical distinction. It means a system can appear more capable than it actually is, simply because the capability graph and the routing graph have drifted apart.

As systems grow, this gets worse. More and more capabilities are added reactively, by sub-agents, by cron jobs, or by local patches, while the resolver is left behind. The system's real capabilities expand, but its discoverable capabilities do not.

---

## Trigger evals: test routing, not just outputs

To address the problem of skill invocation, Tan built resolver trigger evals.

The idea is straightforward: give the system realistic natural-language inputs and test whether those inputs route to the correct skill.

Examples include:

- `check my signatures` → should reach the signature-handling path
- `who is Pedro Franceschi` → should reach brain search
- `save this article to brain` → should reach the ingest path plus resolver consultation

These tests capture two important failure modes:

- **false negatives**: the correct skill should have fired but did not
- **false positives**: the wrong skill fired because triggers overlapped or were described badly

Tan emphasizes that this is essential because most people evaluate only final output quality. But in agent systems, routing is itself a core part of the product. If the system routes the request incorrectly, the output stage is already compromised.

The broader insight is that **agent evaluation must include dispatch evaluation**. The question is not only whether the answer was good, but whether the request went to the right place in the first place.

---

## check-resolvable: auditing reachability across the whole chain

Trigger evals help test whether particular phrases route correctly. But they do not answer a deeper question:

**Are there skills that have no resolver path at all?**

To answer that, Tan created a meta-skill called `check-resolvable`.

Its purpose is to inspect the entire chain:

`AGENTS.md → resolver trigger → skill file → code path → runnable capability`

This is not testing one prompt against one skill. It is auditing the integrity of the full routing structure.

It asks questions like:

- can this skill actually be reached from the system's natural entry points?
- if not, where in the resolver should it be attached?
- are there any dark capabilities that exist in implementation but not in discoverable routing?

On its first run, `check-resolvable` found 6 unreachable skills out of roughly 40+.

That means about 15% of the system's capability surface existed in darkness. Users could not naturally invoke those abilities, even though the implementation was already present.

Examples included:

- a flight tracker that nobody could reach through natural language
- a content-idea generator only accessible through cron
- a citation fixer that existed but was absent from the resolver entirely

Tan's comparison of this tool to a linter or audit system is apt. It is not judging elegance. It is asking a simpler and more operationally important question: **can the system actually do what it claims to be able to do?**

---

## Resolvers decay over time

One of the most insightful parts of the essay is Tan's observation that resolvers naturally rot.

A resolver may be excellent on day one:

- all skills are registered
- all trigger descriptions are accurate
- all paths are reachable

But over time:

- new skills get added without resolver updates
- users adopt new phrasings that old triggers do not cover
- old trigger descriptions drift away from real usage
- resolver documents become historical artifacts rather than live routing maps

Tan describes this as a form of context rot.

The system keeps growing, but the routing layer stops accurately representing what the system can actually do. That creates a mismatch between user language and internal capability.

At that point, developers start bypassing the resolver manually, invoking skills directly because they know where things live. But once that happens, the system is no longer truly self-routing. It becomes a filing cabinet operated by a human who knows the hidden drawers.

That is a sign of systemic decay, not maturity.

---

## The endgame: a resolver that learns from traffic

Once you accept that resolvers decay, the next question is obvious: can a resolver learn from real usage?

Tan proposes exactly that.

The idea is to observe live traffic over time:

- which tasks fired the correct skill
- which tasks never found a good match
- which tasks hit the wrong skill
- which skills are never reached naturally

Then, based on that evidence, the system could periodically revise:

- trigger descriptions
- priority rules
- routing order
- missing resolver entries

For example, if the system notices that users often say `is my flight on time` but the resolver only recognizes `check my flight`, it should absorb that new phrasing into the routing layer.

Similarly, if investor-update emails are consistently being captured by a generic PDF-ingest path rather than a more specific investor-update path, the resolver should adjust priorities or trigger specificity.

Tan presents this as the long-term direction of agent governance: **a resolver that can improve itself from observed routing traffic**.

Even if the mechanism is not fully built yet, the design direction matters. Resolvers should not be treated as static documents. They should become living governance artifacts that can be tested, observed, and improved.

---

## Resolvers are fractal

Another powerful insight in the essay is that resolvers do not exist only at the top level. They exist at every layer of the system.

### 1. Skill resolver

At the top level, the resolver routes user intent toward the correct skill.

Examples:

- identify this person → brain ops
- ingest this PDF → pdf-ingest
- check my calendar → calendar skill

### 2. Filing resolver

At the knowledge-base level, the resolver routes content into the right storage location.

Examples:

- people → `people/`
- companies → `companies/`
- policy analysis → `civic/`

### 3. Context resolver

Within a skill itself, there is often another layer of routing.

For an executive assistant skill, that might mean deciding whether a request belongs to:

- email triage
- scheduling
- signature tracking

Seen this way, the resolver is not one isolated design feature. It is a recurring systems pattern.

- top-level routing decides who handles the request
- storage-level routing decides where the information belongs
- intra-skill routing decides which sub-process activates next

That is why Tan says resolvers are everywhere. They are a compositional pattern for managing complexity.

---

## This is not just prompt engineering; it is organization design

The essay ends by reframing the entire issue in management terms.

Tan argues that a sufficiently complex agent system is not just a piece of software. It is an organization.

In that organization:

- skills are like employees
- the resolver is like an org chart plus an intake desk
- filing rules are internal operating procedures
- trigger evals are performance checks
- check-resolvable is audit and compliance

This analogy is powerful because it makes many agent failures easier to understand.

The problem is often not that the model is too weak. The problem is that the system has many specialized workers but no management layer coordinating them.

That is what the resolver becomes: the missing management layer.

And once you see it that way, the challenge shifts. You are no longer just wiring tools together. You are designing an organization that must stay legible, reachable, and coherent as it grows.

That is a much deeper and more durable problem than prompt tweaking.

---

## The most valuable takeaways

If I compress the essay into the most important retained insights, I would keep these:

1. **More context is not automatically better; the key is loading the right context on demand.**
2. **Every skill that writes to a knowledge base should consult the resolver first.**
3. **You must test routing, not just final answers.**
4. **A capability that exists is not necessarily a capability that is reachable.**
5. **Resolvers naturally rot and require ongoing maintenance.**
6. **The long-term goal is a resolver that learns from real traffic.**
7. **As agent systems scale, their hardest problems start to look more like organization design than prompt engineering.**

---

## My judgment

This essay is worth preserving because it clarifies something many people vaguely sense but do not articulate well: **the bottleneck in agent systems is often not model intelligence, but context governance**.

If *Thin Harness, Fat Skills* is about organizing capability, then *Resolvers* is about governing the flow of knowledge, routing, and reachability.

It explains why large systems often become weaker even as they accumulate more tools, more documents, and more prompts:

- capabilities are added faster than routing is maintained
- filing drifts away from meaning
- context grows faster than curation
- user phrasing drifts away from trigger descriptions

Without a strong resolver layer, systems scale in size but not in coherence.

With a resolver layer that is explicit, testable, auditable, and eventually adaptive, the system has a real chance to compound.

---

## One-line ending

**Do not try to make the model know everything all the time; design the system so it knows the right thing at the right moment.**
