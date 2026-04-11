# PDF Document: Ma et al. - 2025 - Think, Speak, Decide Language-Augmented Multi-Agent Reinforcement Learning for Economic Decision-Ma.pdf

**File Path:** Ma et al. - 2025 - Think, Speak, Decide Language-Augmented Multi-Agent Reinforcement Learning for Economic Decision-Ma.pdf

**Processed Date:** 2026-02-10T18:15:41.778Z

**File Size:** 1015.19 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3164

**Title:** Think, Speak, Decide: Language-Augmented Multi-Agent Reinforcement Learning for Economic Decision-Making

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Think, Speak, Decide: Language-Augmented Multi-Agent Policy Learning in Economic Environments
Heyang Ma1,2,3,4*, Qirui Mi1,5*, Qipeng Yang6,2,3, Zijun Fan6, 2,3, Bo Li7, Haifeng Zhang1,2,5†
1Institute of Automation, Chinese Academy of Sciences, 2Nanjing Artificial Intelligence Research of IA 3University of Chinese Academy of Sciences, Nanjing, 4University of International Business and Economics 5School of Artificial Intelligence, Chinese Academy of Sciences, 6Nanjing University of Posts and Telecommunications 7School of Economics, Peking University haifeng.zhang@ia.ac.cn
Abstract
Economic decision-making depends not only on structured signals—such as prices and taxes—but also on unstructured language, including peer dialogue and media narratives. While multi-agent reinforcement learning (MARL) has shown promise in optimizing economic decisions, it struggles with the semantic ambiguity and contextual richness of language. We propose LAMP (Language-Augmented Multi-Agent Policy), the first framework to integrate language into economic decision-making, narrowing the gap to rea-
l-world settings. LAMP follows a Think–Speak–Decide pipeline: (1) Think interprets numerical observations to extract short-term shocks and long-term trends, caching high-value reasoning trajectories. (2) Speak crafts and exchanges strategic messages based on the reasoning, updating beliefs by parsing peer communications. (3) Decide fuses numerical data, reasoning, and reflections into a MARL policy to optimize language-augmented decision-making. Experiments in economic simulation show that LAMP ou-
tperforms both MARL and LLM-only baselines in cumulative return (+63.5%, +34.0%), robustness (+18.8%, +59.4%), and interpretability. These results demonstrate the potential of language-augmented policies to deliver more effective and robust economic strategies.
Code — https://github.com/hey0223/LAMP
1 Introduction
Real-world economic settings are rich in multi-agent interactions and decision-making challenges, spanning labor markets, firm pricing, and government policy design. Solving these economic decision-making problems can yield explanatory insights into economic phenomena and prescriptive guidance for policy and strategy design (Tversky and Kahneman 1974; Varian and Varian 1992). However, their characteristics—dynamic interactions, long-term incentives, and uncertainty-make them substantially more cha-
llenging than conventional fixed-rule benchmarks with fully specified dynamics (Charpentier, Elie, and Remlinger 2023;
*These authors contributed equally. †Corresponding author: haifeng.zhang@ia.ac.cn Copyright © 2026, Association for the Advancement of Artificial Intelligence (www.aaai.org). All rights reserved.
Prior Studies Our Target Setting
Input data
Output decision
Public News:
Government issues supportive policies.
House Price Income level
Buy or not?
Scenario: Whether to Buy a House
Input data & Language
House Price Income level Dialogue Text Public News
The housing market is terrible now.
I think prices will drop further.
Output decision
Buy or not?
It will bounce back?
Should I buy a house now?
Figure 1: Comparison of prior studies and our target: Unstructured language signals, alongside structured numerical data, are critical to economic decision-making.
Mi et al. 2024). Recent advances in artificial intelligence (AI), particularly RL, have been applied to model and optimize economic decision-making processes, with applications spanning household savings (Shi 2021a,b; Atashbar and Aruhan Shi 2023), market pricing (Danassis et al. 2023), and tax policy (Zheng et al. 2022; Mi et al. 2024, 2025c). These studies provide evidence that RL can effectively address dynamic, multi-agent economic problems. However, economic decision-making relies not only on-
 numerical signals but also on language-based information, such as peer dialogue and media narratives (Luketina et al. 2019). The above-mentioned RL-based studies largely ignore the impact of language. Standard MARL algorithms typically assume clean, structured communication protocols (Zhu, Dastani, and Wang 2024), whereas real-world economic decisions involve noisy, semantically rich, and sometimes deceptive natural language. LLMs offer powerful tools to process such language. Recent work in poli-
cy evaluation (Li et al. 2024; Hao and Xie 2025), trading (Xiao et al. 2024), and simulation (Mi et al. 2025b) demonstrates LLMs’ potential for language-aware economic modeling. However, most employ LLMs to generate actions or simulate behaviors, without systematically optimizing agents’ policies. This remains insufficient for solving complex economic problems or producing robust, actionable policy in
arXiv:2511.12876v1 [cs.AI] 17 Nov 2025

sights. We therefore focus on the key question: In complex multi-agent economic environments, how can agents interpret and leverage natural-language information to support optimal decisions?
To address this challenge, we propose LAMP (Language-Augmented Multi-Agent Policy Learning), which integrates LLM-driven reasoning and reflection over both numerical observations and textual signals to support optimal decision-making. LAMP follows a unified Think–Speak–Decide pipeline: (1) Think: Agents receive environment observations and generate both short-term shock analysis and long-term trend reasoning via an LLM. High-reward reasoning trajectories are stored in an experience pool for retrie-
val in similar contexts. The long-term reasoning is also passed to the Speak module to inform message generation. (2) Speak: Guided by the Think module, each agent formulates multiple candidate public messages. A lightweight attention-based scorer selects one for broadcast. Other agents parse the message via the LLM, updating their beliefs, trust, and reflective states. These updated reflections are then passed to the Decide module. (3) Decide: The policy network integrates numerical observations,-
 Think’s reasoning outputs, and Speak’s reflections into the RL policy. Under centralized training with a shared critic, agents learn strategies capable of processing reasoning and reflection signals to produce robust, language-aware economic decisions. We evaluate LAMP in TaxAI: it outperforms MARL and LLM-only baselines with up to 63% higher returns and 55% better shock robustness. Its reasoning traces explain language-guided choices, aiding insight and policy.
Our contributions are threefold:
1. Framework: We propose LAMP, a language-augmented MARL framework that models the role of natural language in economic decision-making, bringing it closer to real-world contexts. 2. Mechanism: We introduce the Think–Speak–Decide pipeline, explicitly structuring how agents reason over trends, exchange and interpret strategic messages, and integrate these insights into policy optimization.
3. Empirical Results: LAMP surpasses MARL and LLM-only baselines in language-guided decision performance, while providing interpretable reasoning trajectories for transparent policy analysis.
2 Related Work RL for Economic Decision-Making. Artificial intelligence provides a powerful computational tool for solving complex economic decision-making problems. Early work includes Bayesian structural time series for policy causal inference (Brodersen et al. 2015) and heuristic search for tax design (Małecka-Ziembin ́ska and Ziembin ́ski 2020), but these approaches struggle with real-world complexity. Reinforcement learning (RL) now supports a broad macroeconomic research agenda, including ta-
x policy design (AI Economist (Zheng et al. 2022), TaxAI (Mi et al. 2024)), monetary rule learning (Hinterlang and Ta ̈nzer 2021; Chen et al. 2023), trade bargaining (Sch 2021), heterogeneous
Algorithm 1: Language-Augmented Multi-agent Policy
1: for episode e = 1, 2, . . . do 2: Reset environment; clear short experience 3: for t = 0 to T do 4: Determine news type: type ← long, short, none
5: Generate news: Rtype
t ← THINK(·)type 6: for all agents i do 7: Clear the current step’s experience Hi
k,t
8: if t is long-term checkpoint then 9: Retrieve Hi
k,t from Hlong and Hshort
t,i
10: Generate economic status and reasoning: 11: Lreason(Rtype
t , Oh,i
t , Hi
k,t )
12: if t is long-term checkpoint then 13: Generate statement: vi
t ← SPEAK(Oh,i
t , Rt, ) 14: Self-reflection and update belief and trust: 15: wi→j
t , τ i→j
t , αi
t ← Lreflect(·)
16: Generate action: ai
t ← μθi (oi
t, Etext(vi
t, Rt))
17: Execute at; observe (rt, xt+1); store in D 18: Update Qφ, {θi} from D 19: Harvest top trajectories → short experience Hshort
t,i
20: Harvest top trajectories → long experience Hlong
general equilibrium solvers (Kuriksha 2021; Hill, Bardoscia, and Turrell 2021), and large-population policy learning (Zhao et al. 2025; Mi et al. 2025c). At the microeconomic level, RL has modeled household consumption–saving behavior (Shi 2021a,b), responses to income shocks (Atashbar and Aruhan Shi 2023), and emergent barter and exchange (Johanson et al. 2022; Ozhamaratli and Barucca 2022). While these studies show RL’s effectiveness in economic decision-making, they largely ignore language sign-
als—policy debates, media reports, public opinion—thereby oversimplifying real-world settings.
LLMs for Economic Research. Large language models (LLMs) excel at processing language signals, and recent studies have explored their applications in economics. Homo Silicus models human fairness and risk aversion (Horton 2023). Generative Agents simulate sandbox societies (Park et al. 2023). EconAgent uses LLM agents to evaluate fiscal and monetary policies (Li et al. 2024). Other studies extend LLM agents to policy debate (Hao and Xie 2025), population behavior simulation (Mi et al. 2025a), long-
-term financial planning (Douglas and Verstyuk 2024), and market trading (Xiao et al. 2024; Yu et al. 2024). General platform EconGym (Mi et al. 2025b) benchmarks LLM agents in diverse economic scenarios. While these studies demonstrate the versatility of LLMs in economics, most remain focused on direct action generation or simulation, leaving open questions about their role in optimizing economic policies.
Integration of MARL and LLMs. We focus on combining MARL’s strength in policy optimization for multi-agent settings with LLMs’ capacity to process language signals. Recent work explores this direction: FAMA aligns LLM knowledge for multi-agent coordination (Slumbers et al. 2024); LAMARL uses LLM-generated priors for policy and reward design (Zhu et al. 2025); MAPoRL co-trains LLMs to enhance cooperation (Park et al. 2025); and

CORY fine-tunes duplicated LLM agents in cooperative settings (Ma et al. 2024). Economic decision-making is typically dynamic, non-cooperative, and long-horizon. Agents must interpret diverse numerical signals alongside semantically rich and potentially noisy language inputs, rendering prior MARL–LLM methods inadequate for such settings.
3 Language-Augmented Multi-Agent Policy
This section first presents a mathematical formulation of the language-augmented multi-agent decision-making problem in economic environments (Section 3.1) and then details our proposed LAMP framework (Section 3.2).
3.1 Problem Formulation
We formulate the economic decision-making problem with language involvement. Building on the economic modeling in TaxAI (Mi et al. 2024), we incorporate language by augmenting each household’s observation as
mi
t = E L(ai
t, ei
t, Og
t ))
Here, L denotes a large language model producing a textual message from inputs, and E denotes an embedding model that maps this text into Rn. For inputs, all agents
share a global observation Og
t . The government observes
Og
t = {Wt, a ̄r,p
t , i ̄r,p
t , e ̄r,p
t } , where Wt denotes the wage, and the remaining terms are group-level averages of assets, income, and efficiency. Each household i observes the same
Og
t and, in addition, its private asset ait and efficiency eit. We then model the economic decision-making problem as a partially observable Markov game M = N, S, O, A, P, R, γ , where N = {1, . . . , Nh}, γ ∈ [0, 1), and P is the transition kernel induced by A = Ag × Ah,1 × · · · × Ah,Nh . At each step, the government’s action
is Ag
t = {τt, ξt, τa,t, ξa,t, rtG}, where τt and ξt parameterize the marginal income-tax schedule, τa,t and ξa,t analogously parameterize the marginal asset-tax schedule, and rtG denotes the expenditure-to-output ratio. Each household
i selects a savings rate and labor supply hit ∈ [0, hmax]:
Ah,i
t = {pit, hit}.
The government policy πg and household policies πi map their observations to actions. The household’s objective is to maximize lifetime utility from consumption and leisure, with consumption increasing utility and labor hours reducing it:
max E0
TN
X
t=0
βt c1−η
t
1 − η − h1+γ
t
1+γ
!
s.t. (1 + τs)ct + at+1 = it − T (it) + at − T a(at)
where ct and ht are consumption and labor, β is the discount factor, η is the relative risk aversion coefficient, and γ is the inverse Frisch elasticity. The government’s objective is GDP growth; the government remains as in TaxAI, full details are provided in Appendix C.
3.2 LAMP Framework
To address the above problem, we propose the LAMP framework (see Pseudocode 1), which comprises three modules:
Symbol Description
Economic Variables
Nh Number of households
Og
t Government observation (wage, group averages)
ai
t, ei
t Asset, efficiency of household i ct, ht Consumption, labor β, η, γ Discount, risk aversion, Frisch elasticity Yt, Gt, Bt, Tt GDP, spending, debt, tax
Framework Variables
Xt Global indicators (Gini, welfare, GDP) L, E Language model, Embedding model σ, Li Shock threshold, long-term step size Rs
t , Rl
Li Short-/long-term news
Hs, Hl Short-/long-term experience ψi
t, Vt Reasoning, public statements mi
t, xt Embedding, fused state
Table 1: Key symbols in the economic problem and LAMP.
Think Think translates global numerical signals into shared news, providing both short- and long-term economic interpretations to guide agents’ reasoning and dialogue. At fixed checkpoints Li, it issues long-term news capturing structural trends. Whenever a key indicator Xt = Gw, W, Y —wealth Gini Gw, social welfare W , or percapita GDP Y —changes by more than a threshold σ, it broadcasts a short-term shock. Then the news type is:
type(t) =

  
  
long, t ∈ {L1, . . . , Ln},
short, mjax Xj,t − Xj,t−1 > σ,
none, otherwise.
This design ensures agents receive timely, context-rich updates—similar to how real-world economic actors rely on news outlets—rather than raw numerical data. A shared LLM-driven news service synthesizes appropriate texts Rshort
t or Rlong
Li and disseminates them to all agents.
Short-term news is generated as:
Rshort
t = LS Og
t , Og
t−1, Rlong
Lk , Lk < t < Lk+1
incorporating the current and previous global observations, as well as the most recent long-term news. Long-term news is generated over a two-step observation window:
Rlong
Li = LL Og
Li−1:Li , i = 1, 2, . . . , n
Upon receiving short-term news, each agent infers its economic status κti ∈ {0, 1, 2} (good / neutral / poor) and pro
duces a private reasoning ψti. Long-term news additionally triggers the Experience Pool and Speak module for deeper reasoning. After each short-term reasoning phase, agent i ranks candidate reasoning trajectories by reward and stores its top k1 reasoning trajectories into a short-term buffer:
Hshort
t,i = Topk1 (Ti)
At each long-term checkpoint k, the system collects the top k2 trajectories (by reward) across all agents and appends

Oth, Ot
g, Aih , rh,t, LTR or STR
Long-Term Trend
Short-Term Shock
Otg−∆T - Otg
Ot
g, Ot−1
g
Short-Term Reasoner
Agent i (for i in {1,...,N})
Short-Term Reasoning
Global Observation
Private Observation
k statements candidate
Statement
Household ID Step
Belief
Trust
Reflection
sample Public
Statement Pool
Reflection
step: t -1
Long-Term Reasoning
Private observation
Encoding
Global Observation
Private Observation
Reward
Aih: pti, hit RL Policy
Environment
household
action
Long-Term Reasoning
Short-Term Reasoning
or
Reflection
Encoding
Oth:{ait, eti}
Ot
g: {aതt
p, lҧt
p, eҧt
p,aതtr, lҧtr, eҧtr, Wt}
Long-Term Reasoner
Long-Term Reasoning
Top- k2
samples Top−k3 samples
Top-k1 samples
Short-Term Experience Pool
Long-Term Experience Pool
Long-Term Reasoner
Long-Term Reasoning
Reflection Private observation
Long-Term
Reasoning
Private Observation Global Observation
Long-Term Reasoning
Short-Term Reasoning
Think
Speak Decide
rh,t
Self-Attention
IBA
Aggregated Episode Experience k-NN
Figure 2: Workflow of LAMP: (a) Dual-path Think module extracts long-term trends and short-term shocks into compact reasoning embeddings; (b) Speak module applies self-attention to sample and broadcast a single message and performs a reflection step to update beliefs; (c) Decide module’s policy network concatenates numeric observations with language and reflection embeddings to select actions.
them to the long-term FAISS index:
Hlong
k = Hlong
k−1 ∪ Topk2
Nh
[
i=1
Ti
Before the next long-term reasoning step, agent i retrieves the k3 nearest neighbors from Hlong
k using FAISS, where similarity is computed against a query embedding derived from its current observation O h,i
t , and merges them with
its current Hshort
t,i . This combined set of past high-reward insights is then used as contextual prompts for the LLM:
Hi
k,t = kNNk3 (Hlong
k ) ∪ Hshort
t,i
allowing the agent to remember and reuse successful strategies in similar future scenarios.
Speak Building on the news from Think and each agent’s private reasoning, Speak produces a concise strategic statement per agent, broadcasts it to peers, and returns languagebased peer assessments for the next reasoning step. Inspired by (Xu et al. 2023), the LLM generates three candidate statements for agent i; a self-attention selector S scores them to form a distribution p i,·
t , from which one statement is sampled and broadcast to all agents. Let Vt denote the multiset of broadcast statements. After broadcasting and receiving messages Vt, each agent i uses a Reflection Module Lreflect to interpret the content. This produces an assessment of each peer j, including an estimated wealth tier
(w i→j
t ∈ {low, mid, high}) and a numeric belief confidence
τ i→j
t ∈ [0, 10]. The evaluator also generates a brief self
reflection αti summarizing agent i’s own situation:
w i→j
t , τ i→j
t , αi
t = Lreflect O h,i
t , Vt, ψ i
t
These peer assessments are fed back to S and the LLM policy to guide the next round of reasoning and candidate selection, closing a loop that links language reasoning, dialogue, and adaptive coordination.
Decide Consuming language embeddings from Think and Speak together with numeric observations, Decide compresses language vectors and maps the enriched state to actions under centralized training with decentralized execution (CTDE). All texts (private reasoning and reflection) are encoded by a text encoder Etext, pooled into a fixed-length vec
tor hti, and passed through a small projection P : RD → Rd for dimensionality reduction and feature alignment:
mi
t = P (hti)
∥P (hti)∥2
∈ Rd.
Unless otherwise noted, gradients do not flow into Etext (the encoder is frozen for stability) and only P (·) is updated during RL. At time t, the global observation is concatenated with household language embeddings to form: xt = Og
t , m 1:Nh
t , which, together with the joint action at, is stored in the replay buffer D. We adopt a standard MADDPG framework (Lowe et al. 2017), where a centralized critic minimizes Bellman error, and decentralized actors update their policies by maximizing the expected Q-value

0.0
5.2
10.4 8.52
5.21
7.60 6.53
Stable
Avg. Reward
0.0
1.7
3.3 2.56
1.17
2.28 1.96
1e3 Social Welfare
0.0
5.0
10.1
2.30
5.32
3.19 1.45
1e5 Consumption
0.0
0.8
1.6
0.31
0.78
0.57 0.48
1e6 Labor
0.0
5.2
10.4 8.21
5.07
7.39 6.17
Slowdown
0.0
1.7
3.3 2.10
1.17
1.88 1.57
0.0
5.0
10.1
2.02
4.07 2.65 1.18
0.0
0.8
1.6
0.37
0.74 0.62 0.52
0.0
5.2
10.4 8.18
5.19
7.36 6.24
Crisis
0.0
1.7
3.3 2.33
1.13
2.09 1.77
0.0
5.0
10.1
1.96
5.49
2.71 1.21
0.0
0.8
1.6
0.32
0.86
0.59 0.50
LAMP MADDPG Rule-Based Random
Figure 3: Across three economic environments, LAMP outperforms non-language baselines (Random, rule-based, MADDPG) with higher social welfare and consumption, lower welfare variance, and similar labor usage.
0.0
5.2
10.4 8.52
6.35 6.75 7.44 6.59
Stable
Avg. Reward
0.0
1.7
3.3 2.56
1.90 2.03 2.23 1.98
1e3 Social Welfare
0.0
4.7
9.3
2.30 3.06
4.35
6.21
3.50
1e5 Consumption
0.0
0.8
1.6
0.31
1.03 1.03 1.02 1.03
1e6 Labor
0.0
5.2
10.4 8.21 5.94 6.33 6.95
3.54
Slowdown
0.0
1.7
3.3 2.10
1.78 1.90 2.08
1.06
0.0
4.7
9.3
2.02 2.45
3.42
4.46
1.82
0.0
0.8
1.6
0.37
1.02 1.03 0.96
1.15
0.0
5.2
10.4 8.18 6.03 6.46 7.05
3.68
Crisis
0.0
1.7
3.3 2.33 1.81 1.94 2.11
1.10
0.0
4.7
9.3
1.96
2.73
3.92 5.00
2.10
0.0
0.8
1.6
0.32
1.02 1.03 0.96
1.15
LAMP LLM CoT ReAct Reflection
Figure 4: LAMP vs. other language-based agents (Only-LLM, CoT, ReAct, Reflection) on the same metrics across the three economic environments. LAMP outperforms all these LLM-driven baselines, obtaining higher social welfare and consumption and generally lower welfare variance in each environment.
via deterministic policy gradients. Full optimization details and loss formulations are provided in Appendix C.
4 Experiments
Our experiments address two key questions: 1. How effective is LAMP? (§ 4.2): We compare LAMP with non-language and LLM-based baselines across 3 economic scenarios to evaluate its performance.
2. What drives LAMP’s gains? (§ 4.3): We remove core modules of LAMP to assess their contribution to performance and stability.
4.1 Experimental Setup
Environment All experiments are conducted in TaxAI (Mi et al. 2024), a dynamic economic simulator. It models complex economic interactions between heterogeneous households and a government, and is calibrated with real-world data—making it a realistic and challenging testbed for economic decision-making.
Evaluation Metrics We evaluate LAMP and baselines with five metrics: (1) Average Household Reward — mean reward per step across households; (2) Social Welfare: sum of utilities across all households over the horizon; (3) Total Consumption: aggregate consumption of households; (4) Total Labor: aggregate labor supply in an economy; and (5) Years: number of simulated years before collapse (max 300, higher indicates greater stability). Total Consumption and Total Labor do not directly measure policy p-
erformance, but help analyze policy preferences.
Baselines. We benchmark LAMP against two baseline categories with identical training budgets and horizons. All LLM-based baselines use the same backbone (Qwen2.572B-Instruct-INT4) and prompts. We compare different language models in Appendix C.
(1) Conventional Baselines: Random: Agents select actions uniformly at random. Rule-Based: Economic method based on the utility–production model (details in extended version). MADDPG: Multi-Agent Deep Deterministic Pol

Category Algorithms Avg. Reward ( ↑ ) Social Welfare ( ↑ ) Consumption ( - ) Labor ( - )
Ours LAMP 8.52 ± 0.13 2.56e+03 ± 3.77e+01 2.30e+05 ± 7.52e+04 3.13e+05 ± 8.46e+04
Conventional MADDPG 5.21 ± 0.16 1.17e+03 ± 5.51e+02 5.32e+05 ± 1.31e+05 7.82e+05 ± 3.20e+05 Rule-Based 7.60 ± 0.33 2.28e+03 ± 9.99e+01 3.19e+05 ± 5.46e+04 5.68e+05 ± 6.73e+04 Random 6.53 ± 0.35 1.96e+03 ± 1.06e+02 1.45e+05 ± 3.10e+04 4.84e+05 ± 6.41e+04
LLM-based LLM-Only 6.35 ± 0.32 1.90e+03 ± 9.56e+01 3.06e+05 ± 6.14e+04 1.03e+06 ± 2.18e+05 CoT 6.75 ± 0.34 2.03e+03 ± 1.03e+02 4.35e+05 ± 1.14e+05 1.03e+06 ± 2.19e+05 ReAct 7.44 ± 0.26 2.23e+03 ± 7.92e+01 6.21e+05 ± 1.66e+05 1.02e+06 ± 2.21e+05 Reflection 6.59 ± 0.31 1.98e+03 ± 9.16e+01 3.50e+05 ± 9.51e+04 1.03e+06 ± 2.16e+05
Table 2: Comparison of LAMP with conventional and LLM-based baselines in the real-data–calibrated environment (S1: Economic Stability). Results for S2 and S3 appear in Appendix C. Values are mean ± SD; all runs last 300 years. Notation: (↑) higher is better; (–) non-monotonic. Consumption and Labor jointly shape household utility with non-monotonic effects.
Ablation Setting Avg. Reward ( ↑ ) Social Welfare ( ↑ ) Consumption ( - ) Labor ( - ) Years ( ↑ )
LAMP (Ours) 8.52 2.56e+03 2.30e+05 3.13e+05 3.00e+02
w/o Speak 8.42 (−1%) 2.53e+03 (−1%) 3.24e+05 (+41%) 5.36e+05 (+71%) 3.00e+02 (+0%) w/o Experience Pool 8.45 (−1%) 1.25e+03 (−51%) 5.12e+05 (+122%) 4.50e+05 (+44%) 1.50e+02 (−50%) w/o Long-Term 5.31 (−38%) 1.15e+03 (−55%) 2.27e+05 (−2%) 4.10e+05 (+31%) 2.19e+02 (−27%) w/o Short-Term 8.18 (−4%) 1.67e+03 (−35%) 3.51e+05 (+53%) 5.25e+05 (+68%) 2.08e+02 (−30%) w/o Timing Scheduler 8.52 (−0%) 1.19e+03 (−53%) 3.48e+05 (+51%) 5.70e+05 (+82%) 1.41e+02 (−53%)
Table 3: Ablation under the baseline economy. Percentages denote change vs. LAMP (Ours). Notation: (↑) higher is better; (–) non-monotonic. Consumption and Labor jointly shape household utility with non-monotonic effects.
icy Gradient (Lowe et al. 2017). We also compare different MARL algorithms in Appendix C.
(2) LLM-based Baselines: Only-LLM: Directly query an LLM to generate actions. CoT / ReAct / Reflection: LLM reasoning methods using CoT (Wei et al. 2022), ReAct (Yao et al. 2022), or Reflection (Shinn et al. 2023).
4.2 How effective is LAMP?
We evaluate LAMP and baselines under three settings: • Economic Stability (S1): Matches training conditions, representing a stable macroeconomic scenario.
• Economic Slowdown (S2): Introduces a moderate shift, simulating reduced growth and mild market stress.
• Crisis Shock (S3): Applies a large, coupled shift, modeling severe economic shocks for robustness evaluation. Detailed setup is provided in Appendix C.
Quantifying Gains over LLM-based Baselines. LAMP also outperforms language-integrated baselines, demonstrating the advantage of combining MARL with languageguided policy optimization. In S1, using the same backbone and prompt budget, LAMP surpasses the strongest language baseline (ReAct) with +14.8% higher welfare and +14.5% higher reward, while reducing consumption and labor. Under distribution shifts, the advantage remains: in S2 and S3, welfare gains are +1.0% and +10.4%, reward gains are +16.0-
% and +18.1%, with corresponding reductions in consumption and labor. These results confirm that LAMP’s language-guided coordination improves both stability and efficiency, even in stressed economic conditions.
Representative LLM Reasoning and Reflection
Short-term
Reasoning: “... The family’s personal productivity (0.7741) and wealth (0.0957) place them in a vulnerable position. Given the volatility and risk of instability, the economic status is rated as ‘Bad’.” Economic status: 0
Long-term
Statement: “We should advocate for policies that promote fair wage growth and equitable wealth distribution to stabilize the broader economic environment and ...” Reasoning: “The family should avoid overwork and instead focus on savings, education, and...” Reflection: “The statements from other households highlight the importance of balancing increased labor time... Investing in education and advocating for fairness improves resilience and security.” Economic status: 1
Belief: [0, 1, 0, 0, 0, 1, 1, 1, 0, 2] Trust: [8, 9, 9, 8, 9, 8, 9, 9, 8, 10]
Isolating Language Effects. LAMP consistently outperforms non-language baselines, demonstrating the benefit of language integration in economic decision-making. In S1, LAMP achieves the highest Social Welfare and Average Household Reward. Compared to the strongest non-language baseline (Rule-Based), welfare improves by +12.3% and reward by +12.1%; relative to numeric MARL (MADDPG), gains reach +118.8% and +63.5%, respectively. Efficiency gains are evident from lower Consumption and Labor. Versus R-
ule-Based, LAMP uses –26.5% con

sumption and –44.9% labor (vs. MADDPG: –56.8% and –60.0%), suggesting that higher welfare stems from efficiency rather than brute-force spending or overwork. Under S2 and S3, LAMP consistently outperforms the baselines
Analysis and Insights. We share interesting findings from experiments, supported by LLM outputs: (1) Economic decision-making involves many interdependent variables that change frequently, with causal links often unclear. Purely data-driven MARL starts from scratch, fitting policies without explicit understanding of these variables, making optimal policy search slow and uncertain. (2) LAMP addresses this by using LLM reasoning and reflection at each step to extract concise, high-value insights, wh-
ich are then passed to the MARL component (e.g., MADDPG). These structured signals—hard for pure data-driven methods to obtain—are readily produced by pretrained LLMs. Representative examples (above) illustrate the LLM’s clear interpretation of economic variables and targeted reasoning that enhance decision-making. More examples are shown in Appendix A.
Representative Statements and Experience
Statements
“...advocate fair wage growth and equitable wealth distribution...” “...To navigate the current economic volatility, families should focus on optimizing their work-life balance, ensuring that increased labor does not come at the cost of reduced utility....” “...focus on optimizing our working hours to avoid reducing utility...” “...investing in personal development to enhance longterm productivity and financial stability...”
Experience ID=Household1, Reward=0.95, Personal productivity(e): 1.846, Personal wealth: 0.196, savings ratio:-0.947, working time ratio:-0.963, Reasoning: “...”
4.3 What drives LAMP’s gains?
Speak Module: Strategy Communication & Opponent Modeling. The Speak module enables agents to exchange strategic messages and infer others’ states, providing the coordination essential for high performance. Removing it causes a 1.2% welfare drop alongside sharp increases in labor and consumption. This indicates that, without strategic communication, agents compensate through brute-force effort. With Speak enabled, comparable or higher welfare is achieved with far less input. Representative outputs -
(below) show the mechanism: after detecting widening inequality and low wages, the LLM revises beliefs toward demand fragility and restraint, then recommends disciplined actions such as moderating labor expansion and investing in human capital, thereby reducing overshooting and volatility.
Experience Pool: Enhancing Stability and Efficiency. The experience pool substantially improves efficiency and stability. Removing it cuts social welfare by 50.9% and average household reward by 0.8%, while labor rises 43.6% and consumption surges 122.4%. The unexpected jump in consumption suggests that, without stored successful trajectories, agents overshoot spending and output, oscillating in search of workable strategies. Stability also deteriorates, with 50.2% fewer simulated years sustained -
before failure. Beyond performance, the pool improves interpretability by preserving reasoning traces as an auditable knowledge base explaining why certain strategies are followed.
Reasoning Paths: Trend Tracking & Shock Response. Long-term reasoning is essential for capturing structural trends. Removing it drops average household reward by 37.7% and reduces stable years from 300.0 to 219. Without long-term reasoning, agents become myopic, reacting only to immediate stimuli and producing unstable policies. Short-term reasoning supports rapid adjustment to shocks. Disabling it has a moderate effect on final returns (–3.99% reward) but significantly harms efficiency: labor ris-
es 67.7%, consumption 52.7%, and stable years fall from 300.0 to 208. Trigger timing is critical. LAMP schedules long-term reasoning at fixed intervals and short-term reasoning when indicators deviate. Random triggers keep welfare similar but collapse efficiency: labor increases 81.9%, consumption 51.2%, and stable years drop by 141. This shows aligning reasoning with actual needs reduces turbulence and sustains consistent performance.
We observe an adaptive policy shift in LLM outputs: upon detecting rising inequality—top 10% volatility widening and bottom 50% declining—the LLM revised its earlier “work more” stance. It recommended slightly reducing work hours, increasing savings, delaying non-essential spending, and investing in skills for long-term stability, while publicly supporting progressive taxation and minimum wages.
5 Conclusion
This paper introduced the Language-Augmented Multi-Agent Policy (LAMP) framework, offering a new approach to complex economic decision-making. LAMP leverages LLM reasoning and reflection over language signals—such as peer dialogue and public news—alongside numerical data to inform optimal policies. The framework follows a Think–Speak–Decide pipeline: agents extract short-term shocks and long-term trends, communicate strategic insights, and execute language-informed policies. Experiments demonstrat-
e LAMP’s strong performance and reveal interesting insights: LLM reasoning and reflection dynamically distill key information from numerous, volatile economic variables, enabling agents to make efficient decisions. This contrasts with fully data-driven methods that search for optimal solutions from scratch—a process particularly challenging in economics. We hope this work offers novel methods and insights for AI in economic decision-making.

Acknowledgments
We sincerely thank Prof. Hao Huang from the University of International Business and Economics for his valuable guidance and insightful suggestions during the early stage of this work. This work was supported in part by the National Natural Science Foundation of China under the Original Exploration Program (Grant No. 72450002).
References
Atashbar, T.; and Aruhan Shi, R. 2023. AI and Macroeconomic Modeling: Deep Reinforcement Learning in an RBC Model.
Brodersen, K. H.; Gallusser, F.; Koehler, J.; Remy, N.; and Scott, S. L. 2015. Inferring causal impact using Bayesian structural time-series models.
Charpentier, A.; Elie, R.; and Remlinger, C. 2023. Reinforcement learning in economics and finance. Computational Economics, 62(1): 425–462.
Chen, M.; Joseph, A.; Kumhof, M.; Pan, X.; and Zhou, X. 2023. Deep Reinforcement Learning in a Monetary Model. arxiv:2104.09368.
Danassis, P.; Filos-Ratsikas, A.; Chen, H.; Tambe, M.; and Faltings, B. 2023. AI-driven Prices for Externalities and Sustainability in Production Markets. arxiv:2106.06060.
Douglas, M. R.; and Verstyuk, S. 2024. Consumption and Savings with Large Language Model Agents. Available at SSRN 4909749.
Hao, Y.; and Xie, D. 2025. A Multi-LLM-Agent-Based Framework for Economic and Public Policy Analysis. arXiv preprint arXiv:2502.16879.
Hill, E.; Bardoscia, M.; and Turrell, A. 2021. Solving Heterogeneous General Equilibrium Economic Models with Deep Reinforcement Learning. arXiv:2103.16977.
Hinterlang, N.; and Ta ̈nzer, A. 2021. Optimal monetary policy using reinforcement learning. 51/2021. Deutsche Bundesbank Discussion Paper.
Horton, J. J. 2023. Large language models as simulated economic agents: What can we learn from homo silicus? Technical report, National Bureau of Economic Research.
Johanson, M. B.; Hughes, E.; Timbers, F.; and Leibo, J. Z. 2022. Emergent Bartering Behaviour in Multi-Agent Reinforcement Learning. arxiv:2205.06760.
Kuriksha, A. 2021. An Economy of Neural Networks: Learning from Heterogeneous Experiences. arxiv:2110.11582.
Li, N.; Gao, C.; Li, M.; Li, Y.; and Liao, Q. 2024. EconAgent: Large Language Model-Empowered Agents for Simulating Macroeconomic Activities. In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), 15523–15536.
Lowe, R.; Wu, Y. I.; Tamar, A.; Harb, J.; Pieter Abbeel, O.; and Mordatch, I. 2017. Multi-agent actor-critic for mixed cooperative-competitive environments. Advances in neural information processing systems, 30.
Luketina, J.; Nardelli, N.; Farquhar, G.; Foerster, J.; Andreas, J.; Grefenstette, E.; Whiteson, S.; and Rockta ̈schel, T. 2019. A survey of reinforcement learning informed by natural language. arXiv preprint arXiv:1906.03926.
Ma, H.; Hu, T.; Pu, Z.; Liu, B.; Ai, X.; Liang, Y.; and Chen, M. 2024. Coevolving with the Other You: Fine-Tuning LLM with Sequential Cooperative Multi-Agent Reinforcement Learning. In Advances in Neural Information Processing Systems (NeurIPS) 2024.
Małecka-Ziembin ́ska, E.; and Ziembin ́ski, R. 2020. Application of genetic algorithm to optimal income taxation. Journal of Risk and Financial Management, 13(11): 251.
Mi, Q.; Xia, S.; Song, Y.; Zhang, H.; Zhu, S.; and Wang, J. 2024. TaxAI: A Dynamic Economic Simulator and Benchmark for Multi-agent Reinforcement Learning. In Proceedings of the 23rd International Conference on Autonomous Agents and Multiagent Systems, 1390–1399.
Mi, Q.; Yang, M.; Yu, X.; Zhao, Z.; Deng, C.; An, B.; Zhang, H.; Chen, X.; and Wang, J. 2025a. MF-LLM: Simulating Population Decision Dynamics via a Mean-Field Large Language Model Framework. In Advances in Neural Information Processing Systems (NeurIPS) 2025.
Mi, Q.; Yang, Q.; Fan, Z.; Fan, W.; Ma, H.; Ma, C.; Xia, S.; An, B.; Wang, J.; and Zhang, H. 2025b. EconGym: A Scalable AI Testbed with Diverse Economic Tasks. In Advances in Neural Information Processing Systems (NeurIPS) 2025.
Mi, Q.; Zhao, Z.; Ma, C.; Xia, S.; Song, Y.; Yang, M.; Wang, J.; and Zhang, H. 2025c. Learning Macroeconomic Policies through Dynamic Stackelberg Mean-Field Games. In 28th European Conference on Artificial Intelligence (ECAI) 2025.
Ozhamaratli, F.; and Barucca, P. 2022. Deep Reinforcement Learning for Optimal Investment and Saving Strategy Selection in Heterogeneous Profiles: Intelligent Agents Working towards Retirement. arxiv:2206.05835.
Park, C.; Han, S.; Guo, X.; Ozdaglar, A.; Zhang, K.; and Kim, J. 2025. MAPoRL2: Multi-Agent Post-Co-Training for Collaborative Large Language Models with Reinforcement Learning. In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL) 2025.
Park, J. S.; O’Brien, J.; Cai, C. J.; Morris, M. R.; Liang, P.; and Bernstein, M. S. 2023. Generative agents: Interactive simulacra of human behavior. In Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology, 1–22.
Sch, A. A. O. 2021. Intelligence in the Economy: Emergent Behaviour in International Trade Modelling with Reinforcement Learning.
Shi, R. A. 2021a. Can an AI Agent Hit a Moving Target. arXiv preprint arXiv, 2110.
Shi, R. A. 2021b. Learning from zero: how to make consumption-saving decisions in a stochastic environment with an AI algorithm. arXiv preprint arXiv, 2105.
Shinn, N.; Cassano, F.; Labash, B.; Gopinath, A.; Narasimhan, K.; and Yao, S. 2023. Reflexion: Language

agents with verbal reinforcement learning, 2023. URL https://arxiv. org/abs/2303.11366, 1.
Slumbers, O.; Mguni, D. H.; Shao, K.; and Wang, J. 2024. Leveraging Large Language Models for Optimised Coordination in Textual Multi-Agent Reinforcement Learning. In Proceedings of the International Conference on Learning Representations (ICLR) 2024.
Tversky, A.; and Kahneman, D. 1974. Judgment under Uncertainty: Heuristics and Biases: Biases in judgments reveal some heuristics of thinking under uncertainty. science, 185(4157): 1124–1131.
Varian, H. R.; and Varian, H. R. 1992. Microeconomic analysis, volume 3. Norton New York.
Wei, J.; Wang, X.; Schuurmans, D.; Bosma, M.; Xia, F.; Chi, E.; Le, Q. V.; Zhou, D.; et al. 2022. Chain-ofthought prompting elicits reasoning in large language models. Advances in neural information processing systems, 35: 24824–24837.
Xiao, Y.; Sun, E.; Luo, D.; and Wang, W. 2024. TradingAgents: Multi-Agents LLM Financial Trading Framework. arXiv preprint arXiv:2412.20138.
Xu, Z.; Yu, C.; Fang, F.; Wang, Y.; and Wu, Y. 2023. Language agents with reinforcement learning for strategic play in the werewolf game. arXiv preprint arXiv:2310.18940.
Yao, S.; Zhao, J.; Yu, D.; Du, N.; Shafran, I.; Narasimhan, K. R.; and Cao, Y. 2022. React: Synergizing reasoning and acting in language models. In The eleventh international conference on learning representations.
Yu, Y.; Yao, Z.; Li, H.; Deng, Z.; Jiang, Y.; Cao, Y.; Chen, Z.; Suchow, J.; Cui, Z.; Liu, R.; et al. 2024. Fincon: A synthesized llm multi-agent system with conceptual verbal reinforcement for enhanced financial decision making. Advances in Neural Information Processing Systems, 37: 137010–137045.
Zhao, Z.; Ma, C.; Mi, Q.; Yang, N.; Yan, X.; Yang, M.; Zhang, H.; Wang, J.; and Yang, Y. 2025. Mean Field Correlated Imitation Learning. In Proceedings of the 24th International Conference on Autonomous Agents and Multiagent Systems, 2364–2372.
Zheng, S.; Trott, A.; Srinivasa, S.; Parkes, D. C.; and Socher, R. 2022. The AI Economist: Taxation policy design via twolevel deep multiagent reinforcement learning. Science Advances, 8(18): eabk2607.
Zhu, C.; Dastani, M.; and Wang, S. 2024. A survey of multiagent deep reinforcement learning with communication. Autonomous Agents and Multi-Agent Systems, 38(1): 4.
Zhu, G.; Zhou, R.; Ji, W.; and Zhao, S. 2025. LAMARL: LLM-Aided Multi-Agent Reinforcement Learning for Cooperative Policy Generation.

Appendix
Appendix Table of Contents
A. Representative Text Examples (Section A) B. Prompt Template (Section B) C. Experimental Setup and Results (Section C)
A Representative Text Examples
Short-term
Example 1
Reasoning: “The current economic conditions are characterized by significant economic disparity, with both the top 10% and bottom 50% experiencing severe declines in wealth and income. The surge in wage rates has not translated into proportional gains in productivity or income, indicating a fragile economic environment. The family’s personal productivity (0.7741156555876485) and wealth (0.09572083033270215) place them in a vulnerable position, with low wealth levels and moderate productivity. Give-
n the economic volatility and the potential for increased social unrest and economic instability, the economic status is rated as ’Bad’.” Economic status: 0
Example 2
Reasoning: “The recent economic data indicate a significant improvement in wealth and income for the bottom 50% of the population, with wealth increasing by 259.02% and income by 221.43%. This surge is accompanied by a notable boost in productivity (90.87%) and an overall wage rate increase of 15.34%. These positive trends suggest a more equitable distribution of economic gains, which can drive higher consumer spending and economic growth. The family’s personal productivity (6.79) and wealth (3.48-
) are above average, placing them in a favorable position to benefit from these economic improvements. While maintaining a balance between increased labor time and managed consumption is crucial, the current economic conditions are robust and supportive, warranting a ’Good’ rating.” Economic status: 2
Long-term
Example 1
Statement:“We should advocate for policies that promote fair wage growth and equitable wealth distribution to stabilize the broader economic environment and benefit all families.” Reasoning:“The economic data reveal significant volatility and disparities in wealth, income, and productivity between the top 10% and the bottom 50% of the population. The top 10% experience substantial fluctuations in wealth and income, while the bottom 50% face more erratic and often negative changes. Despite some pos-
itive trends in productivity and wage rates, the overall economic environment remains challenging, with a low wage
rate and persistent wealth gaps. The family’s personal productivity and wealth place them in a moderate but vulnerable position, requiring careful financial management and strategic decisions to improve economic stability and selfutility.Given the neutral economic conditions, the family should focus on maintaining a balance between productivity and personal well-being. Overworking can reduce utility, while prudent consumption and savings can improve financial stability. Investing in education and -
skill development can enhance productivity and long-term economic resilience. Advocating for fair economic policies, such as progressive taxation and minimum wage increases, can help address broader inequalities and create a more stable economic environment, benefiting the family in the long run.” Reflection: “The consensus among the households emphasizes the importance of balancing increased labor time with managed consumption to maintain personal wellbeing and financial stability. This aligns wi-
th our internal reasoning, which highlights the need for careful financial management and strategic decisions. Given our moderate but vulnerable economic position, we should focus on maintaining a balance to avoid overworking, which can reduce utility, while ensuring prudent consumption and savings. Investing in education and skill development will enhance productivity and long-term economic resilience. We should also advocate for fair economic policies to address broader inequalities and create a-
 more stable environment for our family.”
Economic status: 1
Belief: [0, 1, 0, 0, 0, 1, 1, 1, 0, 2] Trust: [8, 9, 9, 8, 9, 8, 9, 9, 8, 10]
Example 2
Statement: “We urge policymakers to implement progressive taxation and minimum wage increases to address the growing wealth and income disparities and promote a more equitable economic environment.” Reasoning: ”The economic data reveal significant volatility and disparities in wealth, income, and productivity between the top 10% and the bottom 50% of the population. The top 10% experience substantial fluctuations in wealth and income, while the bottom 50% face more erratic and often negative chang-
es. Despite some positive trends in productivity and wage rates, the overall economic environment remains challenging, with a low wage rate and persistent wealth gaps. The family’s personal productivity and wealth place them in a moderate but vulnerable position, requiring careful financial management and strategic decisions to improve economic stability and self-utility.Given the neutral economic conditions, the family should focus on maintaining a balance between productivity and personal well-b-
eing. Overworking can reduce utility, while prudent consumption and savings can improve financial stability. Investing in education and skill development can enhance productivity and long-term economic resilience. Advocating for fair economic policies, such as progressive taxation and minimum wage increases, can help address broader inequalities and create a more stable economic environment, benefiting the family in the long run.” Reflection: “The statements from other households highlight the imp-
ortance of balancing increased labor

time with managed consumption to maintain personal well-being and financial stability. Given our moderate but vulnerable economic position, it is crucial to avoid overworking, which can reduce utility, and instead focus on prudent financial management. Investing in education and skill development can enhance productivity and longterm economic resilience. Advocating for fair economic policies can also help address broader inequalities and create a more stable environment, benefiting our family in -
the long run.”
Economic status: 1
Belief: [1, 2, 0, 0, 0, 1, 1, 0, 0, 1] Trust: [8, 7, 8, 8, 9, 8, 9, 8, 8, 6]
B Prompt Template
Long-term reasoning
You are a family decision inferent. Analyze the given data and provide insights. Long-Term News: {long term news} Private Observation:
• Personal productivity (e): {private observation[0]} • Personal wealth: {private observation[1]}
Similar Experiences: {similar experience if similar experience else ”No similar experiences found.”} Your final goal is to improve the self-utility of the current family, where increased labor time reduces utility and increased consumption improves utility, under the Bewley–Aiyagari model. Tasks:
1. Summarize key economic insights in “analysis”. 2. Rate the economic condition as:
• 0 = Bad • 1 = Neutral • 2 = Good
Store this as “economic status”.
3. Based on the current situation and private observation, give suggestions in “reasoning”. 4. Generate 3 unique public statements in “statements”.
Return exactly this JSON (no extra keys or commentary):
{
"analysis": "...", "economic_status": 0, "reasoning": "..." }
Short-term reasoning
You are a family decision inferent. Your goal is to improve the family’s self-utility under the Bewley–Aiyagari model (more labor ↓ utility, more consumption ↑ utility). Inputs:
• Short-Term News: {short term news} • Recent Long-Term News: {recent long term result if
recent long term result else ”None”} • Private Observation:
– Personal productivity (e): {private observation[0]} – Personal wealth: {private observation[1]}
Tasks:
1. Provide a detailed analysis of current economic conditions, considering savings rate and working hours. 2. Rate the economic condition:
• 0 = Bad • 1 = Neutral • 2 = Good
Output: Return exactly this JSON (no extra keys or commentary):
{
"economic_status": 0, "reasoning": "..." }
Reflection and update belief
You are a family decision inferent. Analyze the given other households’ statements and provide private insights. Private Observation:
• Personal productivity (e): {private observation[0]} • Personal wealth: {private observation[1]}
Internal Reasoning: {personal reasoning} Public Personal Statement: {personal statement} Other Households’ Statements: {chr(10).join([f”- stmt” for stmt in other agents statements])} Your final goal is to improve the self-utility of the current family, where increased labor time reduces utility and increased consumption improves utility, under the Bewley–Aiyagari model. Tasks:
1. Classify each household’s wealth level as wealth guesses (0=Low, 1=Medium, 2=High) with exactly {expected num} elements. Notice one has status 2, four have status 1, and five have status 0.
2. Rate each statement’s trustworthiness from 0 (not trustworthy) to 10 (highly trustworthy) as trust levels with exactly {expected num} elements.
3. Provide a brief reflection in reflection text, focusing on yourself, others’ statements, and ensuing economic decisions.
Return exactly this JSON (no extra keys or commentary):
{
"wealth_guesses": [...], "trust_levels": [...], "reflection_text": "..." }
C Experimental Setup and Results
In this appendix, we provide further details on our LAMP framework’s methodology (Appendix C.1) and experimen

tal setup and results (Appendix C.2). We elaborate on the mathematical formulations, training procedure, and environment configurations that were summarized in the main text. We also include additional results and explanations, including detailed scenario parameters and expanded discussions of Economic Slowdown (S2) and Crisis Shock (S3) from the main paper.
C.1 Method
Economic Environment and Tax Functions. Our multiagent economic environment (TaxAI) is based on a heterogeneous-agent macroeconomic model with a government and Nh households. In each period, the government sets five policy variables: labor income tax (τt, ξt), wealth
tax (τa,t, ξa,t), and a public spending ratio rtG = Gt/Yt. Here τ and τa control the average tax rates, while ξ and ξa control the progressivity (marginal rate) of the income and wealth taxes. The income and asset tax functions follow nonlinear HSV formulations:
T (it) = it − (1 − τ ) i1−ξ
t
1 − ξ , T a(at) = at − 1 − τa
1 − ξa
a1−ξa
t
where T (·) and T a(·) represent the income and asset tax schedules respectively, and τ, τa, ξ, ξa control the average and marginal tax rates. The total tax revenue Tt is composed of income tax, wealth tax, and consumption tax across all households,
Tt =
N
X
i=1
T (ii
t) + T (ai
t) + τsci
t
.
Think–Speak–Decide Pipeline Recap. In the main text, we introduced the three core modules of LAMP: Think, Speak, and Decide. For completeness, we restate how these modules function and detail how their outputs are integrated into the learning process: (1)Think Module: At specific times, the environment produces a natural-language news description of the state of the economy, which agents use for reasoning. To ensure agents focus on the appropriate temporal scale, we schedule two types of news even-
ts as described in the main text (Section 3). At fixed long-term intervals Li (e.g., every L steps), a long-term news summary Rlong
Li is generated by an LLM
based on the recent trajectory of global observations. This reflects structural trends (e.g. sustained growth slowdown or rising inequality over time). Meanwhile, at any intermediate step, if there is a sudden significant change in key indicators, a short-term news Rshort
t is triggered to announce the shock. Formally, letting Xt = (Gw(t), W (t), Y (t)) represent the current values of critical metrics (wealth Gini, social welfare, and per-capita GDP, respectively), we set a shock threshold σ. If maxj |, Xj,t − Xj,t−1, | > σ for any metric j, then type(t) = short; if t coincides with a long-term checkpoint Li, then type(t) = long; otherwise no news is issued (type(t) = none). This mechanism, summarized by Equation (4) in the main paper, ensures that agents receive t-
imely, context-rich language updates rather than raw numbers – similar to how real economic agents rely on news
media for important developments. In our implementation, we chose σ and L so that long-term news arrives periodically (every few years of simulation) and short-term news flags large quarterly swings in indicators (exact values are chosen to balance frequency of news with not overwhelming the agent with constant messages). Given a news text, each household agent uses a large language model Lreason to interpret the news relative to its own state. The agent produces a short private reasoning ψti whic-
h may include its assessment of the economy (e.g., “good” or “bad” times, encoded as an economic status label 2/1/0) and a rationale for its next action (e.g., “reduce consumption and save more because a recession is coming”). In generating this reasoning, the agent can draw upon an experience pool of past reasoning trajectories. We maintain two experience memories per agent: a short-term memory Hshort
t,i that caches the agent’s top reasoning trajectories from recent steps, and a long-term memory Hlong that indexes high-value reasoning trajectories from across all agents and past episodes using a FAISS similarity index. At the start of a long-term reasoning phase, each agent retrieves a few most relevant past experiences kNNk3 (Hl) (based on similarity of current news and state to past situations) and combines them with its recent short-term experiences Hs
t,i as contextual examples for the LLM prompt. This helps the agent “remember” successful strategies or important lessons from history, improving stability in sparse-reward, long-horizon settings. After the LLM produces the new reasoning ψti, we store the trajectory and its outcome (e.g., obtained reward) back into the shortterm memory, and periodically (at long-term checkpoints) update the long-term memory with top trajectories from all agents. This design mitigates forgetting and allows re-use o-
f good strategies, as evidenced by the performance drop when disabling the experience pool (see ablation results).
(2)Speak Module: After forming its private reasoning, each agent may broadcast a concise public message summarizing its strategy or perspective. To generate a message, we use another LLM Lstmt that takes as input the agent’s state and reasoning and produces a few candidate statements. An internal scoring function (a self-attention mechanism) selects one statement vti to broadcast. At a long-term news step (when agents typically communicate strategic intent), all agents exchange these statements si-
multaneously, resulting in a set Vt = vt1, vt2, . . . , vNh
t visible to everyone. Each agent then interprets the incoming messages using a reflection function Lreflect. This produces: (a) an updated belief about each other agent’s hidden state (for example, agent i may infer whether agent j is likely wealthy or poor based on j’s message, denoted w,i→j
t ∈ low, mid, high), (b) a
trust score τ ,i→j
t ∈ [0, 10] indicating how credible or relevant agent j’s message is according to i, and (c) a short self-reflection αit where agent i articulates any revised understanding of its own situation after hearing others (e.g., “others are optimistic about the market, perhaps I should not be too conservative”). These reflection outputs effectively let agents do opponent modeling and belief updates via language. They are fed back into the Think module in the next cycle (closing the reasoning–communicatio-
n loop) and

Algorithms Avg. Reward Social Welfare Consumption Labor
LAMP (Ours) 8.21 ± 0.12 2.10e+03 ± 6.93e+02 2.02e+05 ± 7.35e+04 3.72e+05 ± 1.42e+05
MADDPG 5.07 ± 0.16 1.17e+03 ± 3.77e+02 4.07e+05 ± 6.46e+04 7.42e+05 ± 1.50e+05 Rule-Based 7.39 ± 0.45 1.88e+03 ± 6.09e+02 2.65e+05 ± 6.35e+04 6.15e+05 ± 1.20e+05 Random 6.17 ± 0.41 1.57e+03 ± 5.20e+02 1.18e+05 ± 2.88e+04 5.20e+05 ± 1.01e+05
LLM-Only 6.01 ± 0.24 6.30e+03 ± 5.68e+03 2.54e+05 ± 3.38e+04 1.06e+06 ± 1.54e+05 CoT 6.33 ± 0.35 1.90e+03 ± 1.06e+02 3.42e+05 ± 8.59e+04 1.03e+06 ± 2.20e+05 ReAct 6.95 ± 0.22 2.08e+03 ± 6.46e+01 4.46e+05 ± 8.47e+04 9.59e+05 ± 1.58e+05 Reflection 3.54 ± 0.40 1.06e+03 ± 1.20e+02 1.82e+05 ± 4.59e+04 1.15e+06 ± 2.42e+05
Table 4: Performance comparison under Scenario S2 (Economic Slowdown).
Algorithms Avg. Reward Social Welfare Consumption Labor
LAMP (Ours) 8.18 ± 0.16 2.33e+03 ± 3.16e+02 1.96e+05 ± 3.14e+04 3.21e+05 ± 5.93e+04
MADDPG 5.19 ± 0.34 1.13e+03 ± 5.69e+02 5.49e+05 ± 3.10e+05 8.61e+05 ± 4.71e+05 Rule-Based 7.36 ± 0.38 2.09e+03 ± 2.53e+02 2.71e+05 ± 4.92e+04 5.95e+05 ± 1.02e+05 Random 6.24 ± 0.29 1.77e+03 ± 2.14e+02 1.21e+05 ± 2.09e+04 5.05e+05 ± 9.87e+04
LLM-Only 6.10 ± 0.23 6.39e+03 ± 5.76e+03 2.82e+05 ± 3.75e+04 1.06e+06 ± 1.54e+05 CoT 6.46 ± 0.35 1.94e+03 ± 1.05e+02 3.92e+05 ± 1.02e+05 1.03e+06 ± 2.20e+05 ReAct 7.05 ± 0.18 2.11e+03 ± 5.53e+01 5.00e+05 ± 7.60e+04 9.58e+05 ± 1.52e+05 Reflection 3.68 ± 0.41 1.10e+03 ± 1.24e+02 2.10e+05 ± 5.60e+04 1.15e+06 ± 2.42e+05
Table 5: Performance comparison under Scenario S3 (Crisis Shock).
also incorporated into the policy’s state input for decisionmaking. In summary, the Speak module enables strategic communication that improves coordination and adaptability: it ensures each agent is not reasoning in isolation, but rather adjusting its policy in light of peers’ stated intentions and perceived credibility.
(3)Decide Module: The Decide stage integrates the numerical and language information to output final actions through a reinforcement learning policy. We use a centralized training, decentralized execution (CTDE) paradigm with an actor–critic algorithm (based on MADDPG). Specifically, during training, a centralized critic Qφ(x, a1, . . . , aNh ) takes as input the joint state and joint action of all agents, and outputs a Q-value (expected cumulative reward) to critique the action choices. The actor-
s (one per agent i with parameters θi) are decentralized poli
cies ait = μθi (oit, , mit) that observe only the agent’s own
local state oit (e.g., its asset ait, efficiency eit, and any private observation like its own income) augmented with its own language-based context mit. Here mit is a fixed-size vector representation of textual inputs relevant to agent i at time t, including its private reasoning ψti and its reflec
tion αit (concatenated or pooled). To obtain mit, we encode the texts with a pretrained language encoder Etext and project it to a lower dimension d using a trainable linear layer P (·). We also L2-normalize the projected vector to unit length to avoid scale issues when combining with numeric inputs. This way, the language information enters the policy network in a controlled, compact form rather than raw text tokens, which greatly improves learning efficiency. The critic state xt at time t consis-
ts of the global numerical state combined with all agents’ language embeddings:
xt = Og
t , m 1:Nh
t , where Og
t is the global observation (available to the critic but not to individual actors during execution). The critic uses this state to evaluate joint actions. We train the critic by minimizing the mean squared Bellman error:
Lcritic = E( xt,at,rt,xt+1)∼D
h
Qφ(xt, at) − yt
2
i
with the target value
yt = rt + γ Qφ′ xt+1, a′
t+1 , a′
t+1 ∼ μ′
θj ,
where φ′ and μ′
θj denote target networks updated by Polyak averaging. For agent i, the actor aims to maximize the expected return
J (θi) = ED
h
Qφ xt, a−i, μθi (o i
t,mi
t)
i
,
yielding the deterministic policy gradient
∇θi J (θi) = ED
h
∇θi μθi (o i
t,mi
t )∇ai Qφ(xt, at)
i
ai=μθi (o i
t ,m i
t)
.
In practice, we minimize the negative-Q actor loss
Lactor(θi) = −ED
h
Qφ xt, a−i, μθi (o i
t,mi
t)
i
,
so that gradient descent on Lactor is equivalent to gradient ascent on J(θi). This setup makes language an explicit, compact control signal via encoder–projection compression, rather than mere raw text concatenation.
C.2 Experimental Setup and Additional Results
Environment Scenarios. We evaluate LAMP and baseline methods in three distinct economic scenarios, all simulated

Scenario Depreciation Rate Consumption Tax Rate Interest Rate Gini Weight
S1: Economic Stability 0.06 0.065 0.04 1 S2: Economic Slowdown 0.12 0.02 0.08 1 S3: Crisis Shock 0.10 0.10 0.10 0.5
Table 6: Hyperparameter settings for the three economic scenarios (S1–S3).
0 25 50 75
Epoch
0
100
200
300
Economic Years
Economic Years vs. Epoch
0 25 50 75
Epoch
75
50
25
0
Actor Loss
Actor Loss vs. Epoch
0 25 50 75
Epoch
0
50
100
Critic Loss
Critic Loss vs. Epoch
0 25 50 75
Epoch
0
100
200
Household Reward
Household Reward vs. Epoch
w/o Experience Pool MADDPG
w/o Timing Scheduler w/o Long-Term
w/o Short-Term w/o Speak
LAMP
Figure 5: Training curves over the first 80 epochs for seven methods: Economic Years, Actor Loss, Critic Loss, and Household Reward. LAMP (solid line) converges to higher and more stable values, with faster and smoother loss reduction and the highest household rewards, highlighting its advantage over baselines and ablation variants.
Model Avg. Reward
DeepSeek-v3.1 8.64 Qwen3-32B 8.35 Gemini-2.5 8.65
Table 7: Average reward of LAMP with different LLM backbones.
in the TaxAI environment described above. Each scenario corresponds to a different setting of structural parameters to mimic various macroeconomic conditions:
S1: Baseline Economic Stability. This scenario uses standard calibrated parameters intended to reflect a stable, growing economy. For instance, the annual capital depreciation rate is set to 6%, the consumption tax rate is 6.5%, and the nominal interest rate is 4%. The government’s social welfare objective gives full weight to inequality aversion (gini weight = 1). This scenario was used to train the agents and represents normal conditions without major external shocks.
S2: Economic Slowdown. In this scenario, we introduce a moderate supply and demand shift to simulate a slowdown or mild recession. We double the depreciation rate to 12% (0.12) – meaning capital assets lose value faster, modeling a slump in productivity or faster obsolescence. To counteract weaker demand, the consumption tax rate is lowered to 2% (down from 6.5%), representing a fiscal stimulus to encourage spending. Meanwhile, we raise the interest rate to 8% (0.08), reflecting tighter credit con-
ditions or an anti-inflationary stance by the monetary authority during the slowdown. The inequality weight remains 1, as in the baseline. These changes result in generally tougher conditions for growth: capital accumulation is harder (due to high depreciation and interest), although consumers get a tax break. We expect agents to adapt by, e.g., saving less (since returns are lower) and working a bit more to maintain income.
Hyperparameter Value Algorithm / Module
qlr 3e-4 MADDPG (critic learning rate) plr 3e-4 MADDPG (actor learning rate) buffer size 1e6 MADDPG (replay buffer) γ 9.75e-1 MADDPG (discount factor) τ 5e-3 MADDPG (target network update) embed dim 5e0 (language embedding size) threshold 4e-1 (shock detection)
Table 8: Key hyperparameters and their corresponding algorithm components or modules.
S3: Crisis Shock. This scenario models a severe economic crisis with coupled shocks. We set a high consumption tax rate of 10%, both to simulate increased fiscal burden (governments raising taxes in a crisis) and to represent high effective prices dampening consumption. The interest rate is also raised to 10%, indicating very tight monetary conditions (e.g., a central bank fighting inflation or risk). The depreciation rate is set to 10%, moderately higher than baseline (though slightly lower than -
S2’s 12%, it still represents a significant supply shock where capital wears out quickly). Additionally, the government’s social welfare function in this scenario places less emphasis on inequality (gini weight = 0.5) – this reflects a crisis policy stance where ensuring basic economic stability and growth might take priority over redistribution. In practice, this means the government agent in S3 is somewhat less penalized by inequality outcomes than in S1/S2, focusing more on aggregate output rec-
overy. For all scenarios, we simulate up to 300 periods (years) or until the economy “collapses” (e.g., if the environment diverges or a policy leads to an infeasible state).We use identical initial conditions across methods for fairness and run multiple random seeds (8) to account for stochasticity in learning and LLM generation. Additional Results Tables 4 and 5 report the key met

rics—Average Household Reward, Social Welfare, Consumption, and Labor—of LAMP and seven baselines under Scenario S2 (Economic Slowdown) and Scenario S3 (Crisis Shock), respectively. In both settings, LAMP achieves the highest welfare and reward while maintaining competitive consumption and labor levels, demonstrating its robustness to macroeconomic shifts. Beyond baseline comparisons, we further replace MADDPG with alternative non-language MARL algorithms and report the resulting average househol-
d rewards under the same real-data–calibrated economy. For MAPPO, LAMP attains an average reward of 8.67 compared to 8.61 for the numeric baseline. LAMP thus consistently matches or slightly outperforms these stronger numeric baselines, indicating that its gains are not tied to a particular MARL backbone. Table 7 varies the LLM backbone (DeepSeek-v3.1, Qwen3-32B, Gemini-2.5) while keeping the rest of LAMP unchanged. The average rewards remain similar across models, suggesting that LAMP’s benefits -
are robust to reasonable changes in the underlying language model.
Key Hyperparameters Summary Table 8 lists the principal hyperparameters from our training configuration, indicating which algorithm or module each pertains to. Hyperparameters such as qlr, plr, buffer size, γ, and τ govern the MADDPG training dynamics. The entropy coefficient (ent coef) and value-loss coefficient (vloss coef) are relevant in soft actor–critic and general actor–critic frameworks. The embedding dimension (embed dim) and shock threshold (threshold) are specific to the LAMP architectu-
re’s language processing and Think module. Except for MADDPG, which was trained for 200 epochs to allow sufficient convergence in the absence of language guidance, all other methods (including LAMP and the LLMbased baselines) were trained for 80 epochs. Empirically, we observed that pure RL methods without LLM involvement require more epochs to reach stable performance.
Analysis of Training Curves for LAMP and Baselines As shown in Figure 5, the four panels plot key metrics over the first 80 training epochs for seven methods. In the top-left panel, LAMP’s solid line converges to a higher, more stable “Economic Years” value, indicating prolonged system stability. The top-right and bottom-left panels show that its Actor and Critic Loss curves decline more rapidly and with reduced oscillation, reflecting more efficient policy and value learning. Finally, in the bott-
om-right panel, LAMP achieves the highest and smoothest Household Reward, demonstrating its superior balance of labor and consumption under the same training budget. Overall, these curves underscore the effectiveness of the language-augmented LAMP framework in multi-agent economic simulations.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:41.778Z
- **Text Length:** 68238 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
