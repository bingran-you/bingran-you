# PDF Document: Jin et al. - 2025 - Hybrid LLM and Higher-Order Quantum Approximate Optimization for CSA Collateral Management.pdf

**File Path:** Jin et al. - 2025 - Hybrid LLM and Higher-Order Quantum Approximate Optimization for CSA Collateral Management.pdf

**Processed Date:** 2026-02-10T18:16:22.154Z

**File Size:** 334.79 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3602

**Title:** Hybrid LLM and Higher-Order Quantum Approximate Optimization for CSA Collateral Management

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Hybrid LLM + Higher-Order Quantum Approximate
Optimization for CSA Collateral Management
Tao Jin Pyligent AI tao.jin@pyligentai.com
Stuart Florescu
Dept. of Computer & Mathematical Sciences, Caltech sfloresc@caltech.edu
Heyu (Andrew) Jin
Department of Economics, UCLA andrewjin@ucla.edu
Abstract—We address finance-native collateral optimization under ISDA Credit Support Annexes (CSAs), where integer lots, Schedule A haircuts, RA/MTA gating, and issuer/currency/class caps create rugged, legally bounded search spaces. We introduce a certifiable hybrid pipeline purpose-built for this domain: (i) an evidence-gated LLM that extracts CSA terms to a normalized JSON (abstain-by-default, span-cited); (ii) a quantum-inspired explorer that interleaves simulated annealing with micro higheror-
der QAOA (HO-QAOA) on binding sub-QUBOs (subset size n ≤ 16, order k ≤ 4) to coordinate multi-asset moves across caps and RA-induced discreteness; (iii) a weighted risk-aware objective (Movement, CVaR, funding-priced overshoot) with an explicit coverage window U ≤ Reff +B; and (iv) CP-SAT as single arbiter to certify feasibility and gaps, including a U-cap precheck that reports the minimal feasible buffer B⋆. Encoding caps/rounding as higher-order terms lets HO-QAOA target the domain couplings tha-
t defeat local swaps. On government bond datasets and multi-CSA inputs, the hybrid improves a strong classical baseline (BL-3) by 9.1%, 9.6%, and 10.7% across representative harnesses, delivering better cost–movement–tail frontiers under governance settings. We release governancegrade artifacts—span citations, valuation matrix audit, weight provenance, QUBO manifests, and CP-SAT traces—to make results auditable and reproducible.
I. INTRODUCTION
Collateral posted under ISDA Credit Support Annexes (CSAs) must satisfy legally binding rules on eligibility, haircuts (Schedule A), rounding (RA), Minimum Transfer Amount (MTA), and concentration limits (issuer/currency/class/global). Integer lots, haircut tiers, and caps create a rugged search space; operational frictions (movement) and funding/tail considerations further complicate the objective. Enterprise diagnostics suggest that suboptimal allocation, trapped liquidity, and fragmented invent-
ories impose material costs, motivating automation and enterprise optimization [1], [2], [3]. We present a domain-specific, certifiable hybrid pipeline for CSA-governed collateral allocation that integrates document understanding, higher-order discrete optimization, and formal certification:
1) Evidence-gated CSA extraction. An abstain-by-default LLM converts CSAs and related legal/financial documents into a normalized, CSA-aware JSON with span citations (thresholds, IA/IM, MTA, RA, eligibility and haircut matrices, regime selectors, caps, inventory metadata, scenarios).
2) Hybrid explorer with micro higher-order QAOA (HOQAOA). We interleave quantum-inspired simulated annealing with micro-HO-QAOA on binding sub-QUBOs
(subset size n ≤ 16, interaction order k ≤ 4), explicitly encoding rounding/caps as higher-order terms to coordinate multi-asset moves that defeat local swaps. This aligns with recent evidence that higher-order QAOA outperforms quadratic QAOA on rugged finance landscapes [10], [11]. We cap k ≤ 4 to limit ancilla overhead and compilation depth.
3) Weighted, risk-aware objective with funding-priced overshoot. We scalarize operational and risk trade-offs as
J = BaseCost abs + λ Movement
+ μ CVaR + γ U − Reff +. (1)
Here λ prices execution/ops churn, μ prices tail risk via CVaR, and γ prices funding on over-posted collateral (“overshoot”) consistent with LVA/FVA [12], [13], [14], [15], [16], [17], [18]. We also enforce an explicit coverage window U ≤ Reff +B to govern buffers.
4) CP-SAT certification with feasibility diagnostics. The incumbent is certified (status, bounds, gap) under identical constraints, and a U-cap pre-check reports the minimal feasible buffer B⋆ when windows are too tight.
5) Governance-grade artifacts. We emit span citations, a valuation matrix audit, weight-provenance JSON, QUBO manifests (subset n, order k, depth p), and CPSAT traces (status, bounds, slacks) for auditability and reproducibility.
Upstream CSA-domain LLM. As an upstream stage, we train a CSA-domain LLM to extract key terms from CSAs and related documents (Schedules, Credit Support Deeds, eligibility matrices). The model is evidence-gated (abstain-by-default with span citations) and emits the CSA-aware data model that directly feeds the optimizer (see CSA-Aware Data Model). Full training data, model architecture, and benchmarks are covered in a separate paper.
Weighted scalarization and provenance. Our weighted formulation traces Pareto-efficient trade-offs [12], [13], with CVaR capturing tail exposure [14], movement reflecting execution frictions [15], and γ dailyizing funding spreads per LVA/FVA principles [16], [17], [18]. We calibrate (λ, μ, γ) from observed ops costs, tail pricing, and funding bps, and record inputs/units in a weights-provenance artifact for governance. Positioning and comparisons. By targeting higher-order domain couplings (RA/MTA-
 interactions and concentration caps) with micro-HO-QAOA, and certifying outcomes with CP
arXiv:2510.26217v1 [q-fin.CP] 30 Oct 2025

SAT, our pipeline improves cost–movement–tail frontiers on realistic government bond datasets and multi-CSA inputs.
II. BACKGROUND AND RELATED WORK
A. Collateral Optimization
Classical formulations encode haircut schedules, eligibility, and concentration limits, with rounding to RA and MTA gating. Pricing practice introduces liquidity/funding adjustments: the Liquidity Valuation Adjustment (LVA) discounts cash collateral at rate rc vs. risk-free r; FVA reflects funding costs on uncollateralized parts [1]. Operating models emphasize enterprise views and the six levers—Documentation, Automation, Transformation, Optimization, Mobilization, Segregation—[3]. We retain MILP/-
CP-SAT certification and augment exploration with quantum-inspired sampling and micro-HO-QAOA near binding corners, shaping the objective with movement penalties and Weighted-CVaR.
B. Related Work
LLMs for CSA extraction. Evidence-gated LLMs achieve 90%+ clause-level accuracy for thresholds, MTA, eligibility, and haircut schedules mapped to CDM-like schemas [4].
Collateral & liquidity efficiency. Guidance urges minimizing trapped liquidity, balancing movement, and reserving buffers [5].
Quantum(-inspired) optimization. QUBO mappings and NISQ-era methods motivate micro-QUBOs near binding constraints [6], [7]. Hybrid solvers. QAOA/VQE sampling paired with classical local search improves quality under resource limits [8]. Hardware performance milestones suggest headroom for small structured QAOA in workflows [9].
Higher-order QAOA for finance. Closest to our setting, Uotila, Ripatti, and Zhao extend QAOA to higher-order (HUBO) portfolio optimization and report 15–25% gains over vanilla (quadratic) QAOA on rugged financial landscapes for n=8–24 variables on NISQ simulators [10], [11]. Their formulation explicitly models multi-asset interactions (e.g., covariance/risk and cardinality) as k>2 terms and uses orderaware partitioning and spectral grouping to set subset sizes n (base n=8–12 for k=2, add 4–8 for c-
onstraints). We borrow three elements: (i) treating CSA caps/eligibility and MTA/rounding couplings as higher-order penalties in microHO-QAOA (e.g., using k=3 terms to model window/MTA interactions and multi-cap couplings); (ii) selecting n ≈ 8–16 via spectral clustering of highly coupled lots, which aligns with their n recommendations and our ancilla budget; and (iii) warm-starting quantum jumps from a classical incumbent (our CP-SAT/SA incumbent), which their results show mitigates barren platea-
us. Conceptually, their “integer shares” mirror our discrete lots xi, and their eligibility screens map to our CSAbased haircut/eligibility flags, making their method particularly applicable to ISDA-CSA collateral allocation.
Benchmarking and noisy regimes. Recent studies benchmark QAOA/HO-QAOA and related hybrids for finance portfolios in noisy settings, including VQE-style variants and noise-aware
compilations (add exact citations). We position our micro-HOQAOA as a targeted jump operator embedded in a certified pipeline rather than a stand-alone solver, and we cap k ≤ 4 to control ancilla overhead.
III. PROBLEM FORMULATION
We pick integer lots xi ∈ Z≥0 for eligible assets i with after-haircut value vi and daily carry cost ci. Coverage U =
P
i vixi. The effective requirement uses RA rounding:
Reff =
l max(E−T −IA−IM, 0) RA
m
RA. (2)
We enforce U ≥ Reff , an optional cap U ≤ Reff +B, and cash/issuer/class/currency/global caps. a) Objective.:
min J =
X
i
cixi + λ ∥x − h∥1
+ μ CVaR(Lx) + γ (U − Reff )+. (3)
CVaR uses a linearization (τ, zs) with scenario weights
P
s ws = 1.
b) Binary/QUBO view.: Integer lots are encoded via bounded binaries yil ∈ {0, 1} s.t. xi = Pmi
l=1 yil with perlot valuation vil = vi and costs cil = ci.
c) HO-QAOA definition and (n, k) roles.: We construct a higher-order Ising Hamiltonian
HP =
X
j
aj Zj +
X
j<k
bjkZj Zk +
X
j<k<l
cjklZj ZkZl + · · ·
where higher-order (k ≥ 3) terms encode multi-asset interactions from caps (issuer/class/currency/global), window coupling (U near Reff ), and lot granularity. The order k denotes the maximum Pauli-Z tensor product degree needed to represent constraints/objective couplings in the subproblem. We use a micro-HO-QAOA on subsets of variables of size n (typically 8−16) selected near binding corners. The HO-QAOA state of depth p is
|γ, β⟩ =
p
Y
l=1
e−iβl
P
j Xj e−iγlHP |+⟩⊗n,
with standard X-mixer; higher-order phase operators e−iγlZj1 ···Zjk are compiled either directly or via ancillas. For k > 2, ancilla qubits linearize/multiply higher moments; if ancillas inflate the subset above nmax, we skip the quantum jump for that iteration and log the reason. Impact of n. Larger n captures more coupled moves across caps/rounding but increases circuit width and optimizer complexity; empirically, n ∈ [8, 16] balances expressivity and run time, reliably crossing rugged neighborh-
oods that defeat local swaps. Order/size crosswalk. Our practical caps (k ≤ 4) and subset limits (n ≤ 16) follow the order-aware guidance observed in higher-order finance QAOA benchmarks, which report best empirical trade-offs around n ≈ 12–18 for k>2 on rugged landscapes with warm starts [10], [11]. Impact of k. Higher k allows direct encoding of multiway caps and overshoot couplings; however, gate compilation depth and noise rise with k. We cap at k ≤ 4 in practice; above this, we fall back to c-
lassical exploration.

IV. CSA-AWARE DATA MODEL
As an upstream stage, we train a CSA-domain LLM to extract key terms from CSAs and related financial/legal documents (e.g., Schedules, Credit Support Deeds, annexed eligibility matrices). The model is evidence-gated (abstain-bydefault with span citations) and emits a normalized, CSAaware data model that includes terms (Threshold, IA/IM, MTA, RA), eligibility and haircut matrices, regime selectors, concentration caps, inventory metadata, and scenario inputs.We standardize those extraction parameter-
s as inputs/outputs in a governance-ready JSON schema. Key fields:
A. Counterparty & Legal
• csa.meta: governing law (NY/English), bilateral/oneway. • csa.terms: Threshold T , Independent Amount IA, Initial Margin IM, Minimum Transfer Amount (MTA), Rounding Amount (RA), Base Currency, FX conventions. • csa.regime: valuation regime selector in Schedule A; the default may be overridden per asset bucket.
– sp: S&P column (sp_pct) – m1: Moody’s First (m1_pct) – m2: Moody’s Second (m2_pct)
B. Valuation Haircuts and Eligibility
• haircuts.matrix: haircut percentage indexed by (ICAD, bucket, regime).
• eligibility.scheduleA: eligible asset classes and buckets (Govt, Agency, Corp, MBS, TIPS, Cash), issuer ratings/tenor constraints.
C. Caps and Windows
• caps: cash_cap (e.g., 20% of U ), issuer_cap, class_cap, currency_cap, global_cap.
• window: policy buffer B (bps or $), optional hard coverage cap U ≤ Reff + B.
D. Exposure and Scenarios
• exposure: E (base currency) and timestamp; optional path of Et for rolling re-optimization. • scenarios: matrix L (per-asset loss/PNL across scenarios) with weights ws (normalized for CVaR).
E. Inventory and Costs
• inventory: items with id, class, issuer, bucket, currency, price, unit, current lots hi, and per-lot valuation vi after haircut. • costs: daily carry ci ($/lot/day), operational move cost unit for movement.
F. Weights and Provenance
• weights: (λ, μ, γ) with calibration inputs and units: λ (ops amortization per lot over horizon), μ (price per $MM CVaR per day), γ (funding bps → daily carry). • weights_provenance: calibration inputs (ops move cost, horizon days, CVaR price, funding bps), hash, and timestamp.
Algorithm 1 Micro-HO-QAOA Jump (Explore)
In: incumbent x, objective J , graph G, limits (nmax, kmax, p), plateau (S, ε), optional angles (γ(0)
1:p , β(0)
1:p )
1 if PLATEAU(x, S, ε) = FALSE then 2 return x
3 S ← SPECTRALSELECT(G, nmax) ▷ |S| ≤ nmax (typ. 8–16)
4 HP ← BUILDHUBO(S, kmax) ▷ RA/MTA, window, caps; ancillas
for k>2
5 w ← ANCILLAWIDTH(HP ) 6 if w > nmax then
7 return x ▷ skip jump; continue SA + repair
8 |ψ| ← PREP(w); optionally (γl, βl) ← (γ(0)
l , β(0)
l)
9 for l = 1 to p do ▷ mixer ramp allowed
10 |ψ| ← MIX(βl) PHASE(γl, HP )(|ψ|)
11 z ∼ |ψ|; y ← MAPLOTS(z) ▷ ancillas→vars
12 y ← REPAIR(y) ▷ caps/RA/MTA/window
13 x ̃ ← x; x ̃S ← yS
14 if FEASIBLE(x ̃) and J (x ̃) < J (x) then
15 return x ̃ ▷ accept 16 else 17 return x ▷ reject
G. Governance/Audit Toggles
• audit.flags: enable span citations, valuation audit, QUBO manifests, CP-SAT traces. • solver.limits: SA iterations, HO-QAOA nmax, kmax, depth p, and wall constraints.
V. HYBRID PIPELINE (EXPLORE → PROVE →
EXPLAIN/AUDIT)
We create the full workflow with four phases:
A. Phase 1: Explore (Search)
1) Initialization: Compute Reff via (2); derive per-lot vi from haircuts; seed with BL-1 (density greedy). 2) Local search: Simulated annealing (integer neighborhoods; add/swap/remove) with feasibility repair (caps, RA, MTA, window). 3) Spectral subset selection: Build a unitless interaction graph (dual/gradient proxies, feasibility slacks) and pick top-K nodes by |dual|; prune edges by ε to stabilize. 4) Micro-HO-QAOA jump: If improvement < 0.3% over S SA steps, form a sub-QUBO on n ≤ 16 variable-
s (with ancillas if k > 2) and perform one HO-QAOA jump (depth p); accept if J decreases and feasibility holds; otherwise revert.Please see the Algorith 1: Micro-HOQAOA Jump (Explore).
B. Phase 2: Prove (Certification)
We pass the incumbent to CP-SAT with the same constraints and objective components (linearized CVaR and overshoot). We report: status (OPTIMAL/FEASIBLE/INFEASIBLE), incumbent/best bound, MIP gap, and per-constraint slacks.

C. Phase 3/4: Explain & Audit (Governance)
We emit governance HTML with: objective breakdown; valuation matrix audit; weight provenance; spectral/QUBO manifests (subsets, n, k, p); and CP-SAT traces (status, bounds, slacks). Reproducibility hashes and seeds are included.
D. Baselines and Feasibility (Overshoot & B⋆)
a) Baselines.: We benchmark three progressively stronger heuristics:
• BL-1 (density greedy, cap-safe): ranks assets by costto-valuation density and fills to the window under caps; fast, but can stall near binding corners.
• BL-2 (bucket-first greedy + repair): prioritizes bucket/cap compliance during greedy fill, then repairs to align with the window; tighter coverage, typically higher movement.
• BL-3 (BL-1 seed + 2-opt swaps): starts from BL-1 and applies local pairwise swaps to reduce cost while respecting feasibility; strong local polish, but prone to plateaus.
Hybrid. Uses BL-3 as a seed, then interleaves simulated annealing with a spectral micro-HO-QAOA jump to cross binding constraints and escape BL-3 plateaus, followed by local repair for feasibility.
b) Overshoot and Feasibility: Because lots are discrete, U =Reff is rare. We compute a minimal feasible buffer B⋆ by (i) building any feasible cover without the U -cap, then (ii) greedily reducing U while preserving caps/RA. If the userspecified buffer B < B⋆, we flag infeasible_u_cap and report B⋆ (USD and bps). The objective’s overshoot penalty γ U − Reff + trades off carry versus buffer.
VI. CASE STUDY
A. CSA Summary
Governing law. 2009 New York–law CSA, bilateral.
Base currency & eligibility. USD base; USD/EUR cash and securities per Schedule A (government, agencies, corporates, TIPS, MBS), valuation by rating/tenor.
Threshold/MTA/Rounding. T = 0, IA = 0, IM = 0; MTA = $100,000; RA = $10,000.
Valuation regime. Moody’s First (m1) default; S&P (sp) and Moody’s Second (m2) available. Operational caps. Buffer B=25 bps of Reff ; cash cap = 20% of U . Exposure. E = $130,340,000; Reff computed via (2). Inventory proxy. USD cash and UST ladder (6M–20Y), TIPS, Agency, AAA MBS, IG Corps; per-lot vi after haircuts; lots aligned to RA (cash) and $1MM coupons (bonds).
B. Valuation Regimes
We consider sp, m1 (default), and m2, using the Schedule A matrix for haircuts.
C. Objective and Constraints (shared)
Minimize J = BaseCost abs + λ Movement + μ CVaR + γ Overshoot, subject to Reff ≤ U ≤ Reff +B, cash cap, and integer-lot availability. Units: BaseCost abs [$/day], Movement [lots], CVaR and Overshoot [$].
D. How to Choose Weights (practical guidance)
We calibrate (λ, μ, γ) from operational inputs: (i) per-lot Ops move cost and amortization horizon ⇒ λ, (ii) daily price for 1$MM CVaR ⇒ μ, (iii) annual funding bps ⇒ γ via day-count. Each run logs a weights_provenance.json (inputs, units, calibrated triplet, hash).
E. CP-SAT Results and Meaning
CP-SAT returns OPTIMAL when the incumbent attains the global minimum and the MIP gap is zero; FEASIBLE when a feasible incumbent exists with a nonzero bound-gap; INFEASIBLE when no solution satisfies caps/window/RA. For each case we report per-constraint slacks (cash/issuer/class/currency/global), confirming which limits bind.
F. Harness Setups and Results
We analyze three scenarios. Across harnesses A/B/C, the Hybrid improves the BL-3 objective by 9.1%, 9.6%, and 10.7%, respectively (see tables below).
• Units: BaseCost abs [$/day], Movement [lots], CVaR0.90/Overshoot/UsedValue [$]; all rounded to 2 dp. • CVaR weights normalized (P w = 1.0); governance HTML warns if renormalization occurred. • Weight provenance (.json) and valuation audit are linked in each governance HTML.
a) Harness A: m1, buffer 25 bps, cash cap 20%, practical weights.:
Model BaseCost Movement CVaR Overshoot J
BL-1 100.0 28 540,000 210,000 1,12x BL-2 99.1 35 528,000 195,000 1,10x BL-3 98.7 24 520,000 182,000 1,00x Hybrid 98.4 22 515,000 155,000 0.91x
• Configuration: m1 regime; buffer B = 0.25% of Reff ; cash cap = 20% of Ucap; weights ≈ (λ, μ, γ) = (30.0, 0.001, 1.39 × 10−5 day−1).
• Intent: “Everyday” governance settings with moderate funding and moderate tail price; tests balanced trade-offs. • Effect:
– γ penalizes overshoot enough to cut excess usage without exploding Movement. – μ applies light tail pressure; λ moderates lot churn. – Subset size n stays ≈ 8–16; must-jump triggers rarely.
• Result (vs BL-3): Hybrid improves Objective by ≈ 9.1% with lower Movement and Overshoot; breakdown shows most gains from γ·Overshoot, with some from μ·CVaR.

Conclusion: Hybrid reduces J by ≈ 9.1% vs BL-3, primarily by trimming Overshoot at similar BaseCost and slightly lower Movement.
b) Harness B: m1, buffer 10 bps, cash cap 15%, tightliquidity weights (higher γ).:
Model BaseCost Movement CVaR Overshoot J
BL-1 101.3 31 556,000 132,000 1,14x BL-2 100.6 37 544,000 121,000 1,11x BL-3 100.2 25 536,000 113,000 1,00x Hybrid 100.0 24 533,000 91,000 0.904x
• Configuration: m1; buffer B = 0.10%; cash cap = 15%; weights ≈ (λ, μ, γ) = (28.57, 0.0025, 2.22 × 10−5 day−1).
• Intent: Tighter liquidity and higher funding pressure; tests robustness when overshoot is expensive and buffer small. • Effect:
– Larger γ materially suppresses overshoot, trading some BaseCost/Movement. – Higher μ drives tail reduction; λ still curbs churn. – n ≈ 8–16; must-jump fires more often to escape SA plateaus. • Result (vs BL-3): Hybrid improves Objective by ≈ 9.6%; gains mainly from γ·Overshoot and μ·CVaR, with Movement contained by λ. Conclusion: With tighter buffer and cash cap, overshoot control dominates. The must-jump rule breaks SA plateaus; J improves ≈ 9.6% vs BL-3.
c) Harness C: m2, buffer 25 bps, cash cap 20%, practical weights.:
Model BaseCost Movement CVaR Overshoot J
BL-1 99.5 27 501,000 204,000 1,13x BL-2 99.0 33 492,000 193,000 1,08x BL-3 98.6 23 485,000 178,000 1,00x Hybrid 98.3 22 480,000 149,000 0.893x
• Configuration: m2; buffer B = 0.25%; cash cap = 20%; weights ≈ (λ, μ, γ) = (30.0, 0.001, 1.39×10−5 day−1). • Intent: Regime sensitivity with tighter haircuts; tests ability to coordinate under higher required usage/tail. • Effect:
– Tighter valuations raise UsedValue and CVaR; Hybrid’s spectral n ≈ 8–16 helps cross binding corners (window/caps/lot granularity). – Must-jump occasionally assists when caps bind. • Result (vs BL-3): Hybrid improves Objective by ≈ 10.7%; breakdown shows meaningful γ · Overshoot and μ·CVaR reductions while keeping Movement controlled. Conclusion: Under tighter m2 haircuts, Hybrid improves J by ≈ 10.7% vs BL-3, keeping n within 8–16 via spectral capping.
G. Weight Selection: Why These Numbers
We target business trade-offs: (i) if Ops capacity is constrained, increase λ to suppress Movement; (ii) if funding
costs dominate, raise γ to push U ↓ (less overshoot); (iii) if tail discipline is paramount, raise μ (CVaR), accept modest BaseCost/Motion increases. Calibration is documented in the weight provenance blob and mirrored in governance HTML.
VII. GOVERNANCE
We produce:
• Span citations (LLM extraction): prompt hash and source spans for each clause (Threshold, MTA, RA, eligibility, haircuts).
• Valuation matrix audit: table mapping instrument → ICAD/bucket/regime → haircut% → vi for full reproducibility. • Weight provenance: calibration inputs/units and (λ, μ, γ), with hashes/timestamps. • QUBO manifests: for each jump: subset IDs, n, k, p, compiled terms, and acceptance decision. • CP-SAT traces: status (OPTIMAL/FEASIBLE/INFEASIBLE), incumbent, best bound, gap, and per-constraint slacks (cash/issuer/class/currency/global); infeasible windows include B⋆.
VIII. ABLATIONS
Spectral stability. Bounding edge weights to [0, 1] and ε-pruning yield stable cluster selection; without pruning, acceptance variance rises. Subset size n and cap. Performance saturates around n ≈ 12; n<8 underfits multi-way caps; n>16 adds overhead and ancilla pressure with diminishing returns. We hard-cap n ≤ 16. Order k and ancillas. Enabling k = 3 captures issuer/class/currency triples and RA/MTA window couplings; k=4 further improves near tight windows at higher compilation cost. We cap k ≤ -
4 to contain ancilla-expanded width. γ/μ sweeps. Increasing γ drives overshoot ↓ and BaseCost ↑ monotonically; increasing μ reduces tail exposure with modest Movement increase. Hybrid dominates BL-3 along both trade-off frontiers. Must-jump rule. Enforcing at least one HO-QAOA jump after S low-improvement SA steps avoids long plateaus and drives consistent Overshoot reductions.
Weighted-CVaR. Pricing tails (μ > 0) smooths the BaseCost–Overshoot frontier and reduces solution churn across scenario sets; renormalization warnings are emitted if P
s ws ̸= 1 and auto-fixed. Overshoot penalty γ. Sweeps show monotone Overshoot↓ and BaseCost↑; Hybrid dominates BL-3 along this frontier, indicating effective cross-cap coordination. Fallback behavior. If ancillas inflate n past nmax or compilation fails, the iteration logs a skip and reverts to SA/BL-3 neighborhoods; solution quality degrades gracefully.
IX. CONCLUSION
We presented a domain-specific, certifiable hybrid optimizer for CSA-governed collateral that unifies evidence

gated CSA extraction, quantum-inspired search, and higherorder QAOA micro-jumps with CP-SAT certification. By encoding RA/MTA interactions and concentration limits as higher-order couplings, our method coordinates discrete lot moves that defeat purely local heuristics, while a weighted objective (movement, CVaR, funding-priced overshoot) captures the operational and risk economics of posting. Across realistic government bond datasets and multi-CSA inputs, the pipeline—extract, explore, certify, a-
udit—consistently improves cost–movement–tail frontiers over strong classical baselines and yields governance-grade artifacts suitable for operational sign-off.
REFERENCES
[1] B. Genest, D. Rego, and H. Freon, “Collateral Optimization: Liquidity & Funding Value Adjustments, Best Practices,” MPRA Paper No. 62908, 2013. [Online]. Available: https://mpra.ub.uni-muenchen.de/62908/ [2] EY, “Collateral optimization: Capabilities that drive financial resource efficiency,” Ernst & Young LLP, 2020. [Online]. Available: https:// assets.ey.com/content/dam/ey- sites/ey- com/en us/topics/banking- andcapital-markets/ey-collateral-optimization.pdf [3] PwC, “Collateral Management T-
ransformation: Dynamic changes in the collateral ecosystem,” PricewaterhouseCoopers Co., Ltd., 2015. [Online]. Available: https://www.pwc.com/jp/en/industries/financial-services/ assets/collateral-management-transformation.pdf [4] International Swaps and Derivatives Association (ISDA), “Benchmarking Generative AI for CSA Clause Extraction and CDM Representation,” May 2025. [Online]. Available: https : / / www.isda.org / 2025 / 05/15/benchmarking- generative- ai- for- csa- clause- extraction- and- -
cdmrepresentation/ [5] ISDA Future Leaders in Derivatives, “Collateral and Liquidity Efficiency in the Derivatives Market,” May 2025. [Online]. Available: https:// www.isda.org/2025/05/15/isda- future- leaders- in- derivatives- publisheswhitepaper-on-collateral-and-liquidity-efficiency/ [6] Various Authors, “Collateral Portfolio Optimization in Crypto-Backed Stablecoins,” arXiv:2405.08305, 2024. [Online]. Available: https : / / arxiv.org/abs/2405.08305 [7] Various Authors, “Approaching Collateral -
Optimization for NISQ and Quantum-Inspired Computing,” arXiv:2305.16395, 2023. [Online]. Available: https://arxiv.org/abs/2305.16395 [8] Various Authors, “Solving Combinatorial Optimization and ML Problems Using Hybrid Quantum–Classical Systems,” Future Generation Computer Systems, 2025 (early access). [Online]. Available: https:// www.sciencedirect.com/science/article/pii/S0167739X25002298 [9] IonQ Inc., “IonQ Achieves Record Breaking Quantum Performance Milestone of #AQ 64,” Press release, Sept.-
 2025. [Online]. Available: https: //investors.ionq.com/news/news- details/2025/IonQ- Achieves- RecordBreaking-Quantum-Performance-Milestone-of-AQ-64/default.aspx [10] V. Uotila, J. Ripatti, and B. Zhao, “Higher-Order Portfolio Optimization with Quantum Approximate Optimization Algorithm,” in Proc. IEEE Quantum Week (QCE), 2025. [Online]. Available: https: //qce.quantum.ieee.org/2025/program/paper-schedule/ [11] V. Uotila, J. Ripatti, and B. Zhao, “Higher-Order Portfolio Optimization with Quantum -
Approximate Optimization Algorithm,” arXiv:2509.01496, Sept. 2025. [Online]. Available: https://arxiv.org/abs/2509.01496
[12] K. Miettinen, Nonlinear Multiobjective Optimization. Kluwer, 1999. [13] S. Boyd and L. Vandenberghe, Convex Optimization. Cambridge University Press, 2004. [14] R. T. Rockafellar and S. Uryasev, “Optimization of Conditional Valueat-Risk,” Journal of Risk, vol. 2, no. 3, pp. 21–41, 2000. [15] R. Almgren and N. Chriss, “Optimal Execution of Portfolio Transactions,” Journal of Risk, vol. 3, no. 2, pp. 5–39, 2000. [16] V. Piterbarg, “Funding beyond discounting: Collateral agreements and derivativ-
es pricing,” Risk Magazine, vol. 23, no. 2, pp. 97–102, 2010. [17] B. Genest, D. Rego, and H. Freon, “Collateral Optimization: Liquidity & Funding Value Adjustments, Best Practices,” MPRA Paper No. 62908, 2013. Available: https://mpra.ub.uni-muenchen.de/62908/ [18] L. Andersen and D. Duffie, “Funding Value Adjustments,” NBER Working Paper No. 23680, 2017. Available: https://www.nber.org/papers/ w23680

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:22.154Z
- **Text Length:** 28234 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
