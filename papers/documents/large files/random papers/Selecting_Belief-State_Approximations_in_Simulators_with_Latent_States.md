# PDF Document: Jiang - 2025 - Selecting Belief-State Approximations in Simulators with Latent States.pdf

**File Path:** Jiang - 2025 - Selecting Belief-State Approximations in Simulators with Latent States.pdf

**Processed Date:** 2026-02-10T18:18:43.982Z

**File Size:** 522.61 KB

**Total Pages:** 23

**Extracted Pages:** 23

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3425

**Title:** Selecting Belief-State Approximations in Simulators with Latent States

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Selecting Belief-State Approximations
in Simulators with Latent States
Nan Jiang nanjiang@illinois.edu University of Illinois Urbana-Champaign
Abstract
State resetting is a fundamental but often overlooked capability of simulators. It supports sample-based planning by allowing resets to previously encountered simulation states, and enables calibration of simulators using real data by resetting to states observed in realsystem traces. While often taken for granted, state resetting in complex simulators can be nontrivial: when the simulator comes with latent variables (states), state resetting requires sampling from the posterior over the latent st-
ate given the observable history, a.k.a. the belief state (Silver and Veness, 2010). While exact sampling is often infeasible, many approximate belief-state samplers can be constructed, raising the question of how to select among them using only sampling access to the simulator.
In this paper, we show that this problem reduces to a general conditional distributionselection task and develop a new algorithm and analysis under sampling-only access. Building on this reduction, the belief-state selection problem admits two different formulations: latent state-based selection, which directly targets the conditional distribution of the latent state, and observation-based selection, which targets the induced distribution over the observation. Interestingly, these formulations dif-
fer in how their guarantees interact with the downstream roll-out methods: perhaps surprisingly, observation-based selection may fail under the most natural roll-out method (which we call Single-Reset) but enjoys guarantees under the less conventional alternative (which we call RepeatedReset). Together with discussion on issues such as distribution shift and the choice of sampling policies, our paper reveals a rich landscape of algorithmic choices, theoretical nuances, and open questions, in this -
seemingly simple problem.
1. Introduction
Applying reinforcement learning (RL) to real-world domains often relies on training and evaluating policies in simulation. A basic functionality of simulation is state resetting/loading, i.e., setting the simulator into a state that is either previously encountered in simulation or observed in the real system. The former enables sample-based planning—for example, MCTS methods roll-out multiple trajectories from the same state (Kocsis and Szepesv ́ari, 2006; Browne et al., 2012)—while the latter al-
lows one to calibrate the simulator by comparing its predicted next-state to what occurs in reality (Liu et al., 2025).
Despite often taken for granted in research papers, state resetting can be highly nontrivial in complex simulators, especially when they come with latent variables that are introduced to model the generative processes of the observables but cannot be measured in the real systems. Naı ̈ve approaches, such as loading the saved latent states (e.g., loading previously dumped RAM state (Ecoffet et al., 2019)), is not only infeasible in real systems—since the values of the latent variables are nowhere t-
o be found—but also problematic for resetting to a
1
arXiv:2511.20870v1 [cs.LG] 25 Nov 2025

previous simulation state; for example, policies trained with such naı ̈ve resetting may depend their actions on privileged information in the latent states, and thus may face performance degradation when distilled to a policy that operators only on observable information (Jiang, 2019; Weihs et al., 2021). The correct formulation is to view the simulator as a POMDP, which induces an MDP where the observable history (i.e., the sequence of observations and actions) is treated as the state. State re-
setting amounts to using the observable history to set the values of the latent variables. Mathematically, we should sample from the posterior distribution of latent variables conditioned on the observable history, a.k.a. the belief state of the POMDP (Silver and Veness, 2010).
While the belief state is conceptually well-defined for any POMDP, exact sampling from belief states can be computationally demanding, especially when the observation space and the latent state space are high-dimensional and the latent dynamics and the emission process are complex black-boxes. To address this challenge, algorithms for approximately sampling from such a distribution have been proposed: for example, the problem can be viewed as an instance of approximate Bayesian computation (ABC), -
and Silver and Veness (2010) apply rejection sampling to approximate the belief state. However, rejection sampling, when implemented exactly, incurs exponential-in-horizon sample complexity even when the observation space is finite and small, and requires problem-specific heuristics to trade off accuracy for efficiency. Likewise, techniques from related areas such as Simulation-based Inference (SBI) also come with design choices that need to carefully tuned. This naturally gives rise to the follow-
ing question:
Given multiple approximations to the belief state, how can we select from them, and what theoretical guarantees can be obtained?
In this paper, we explore the multi-faceted nature of this problem. We first show that finding a good belief-state approximation can be reduced to a general conditional distributionselection problem, and provide a new algorithm and an analysis for the latter under only sampling access to the candidate conditionals (Section 3). Building on this reduction, we then show that belief-state selection itself admits two distinct formulations: latent state-based selection, which directly targets the poster-
ior of latent state given history, and observation-based selection, which targets the induced observable transition model (Section 4). These two formulations behave differently in the presence of redundant latent variables and, perhaps more importantly, interact in subtle but consequential ways with how we use the selected belief state in downstream tasks. Perhaps surprisingly, we show that, when the selected belief-state approximation is used to estimate Q-values via Monte-Carlo roll-outs, observ-
ation-based selection can have degenerate behavior under the most natural roll-out procedure which we call Single-Reset, but enjoy guarantees under the counter-intuitive Repeated-Reset roll-out (Section 5; see also Table 1). We conclude the paper with further discussions on the issues related to distribution shift and the design of sampling policies. Collectively, these results and insights reveal a rich landscape of choices and nuances in this seemingly simple problem.
2

2. Preliminaries
2.1 MDPs and POMDPs
Markov Decision Processes (MDPs) We consider H-step finite-horizon MDPs, defined by the state space S, action space A, reward function R : S → [0, Rmax], transition function P : S × A → ∆(S), initial state distribution ρ0 ∈ ∆(S); here we assume S, A are finite for convenience, and ∆(·) is the probability simplex. We adopt the convention of layered state space that allows for time-homogeneous notation for time-inhomogeneous quantities: that is, let S = S
0≤t≤H St, where ρ0 is supported on S0. P (s′|s, a) is always
0 unless s ∈ St and s′ ∈ St+1, thus any state that may appear as st always belongs to St. Any policy π : S → ∆(A) (note that this captures time-inhomogeneous policies) induces a distribution over the trajectory (or episode) s0, a0, r0, . . . , sH−1, aH−1, rH−1, sH by the following generative process: s0 ∼ ρ0, ∀t ≥ 0, at ∼ π(·|st), st+1 ∼ P (·|st, at), rt = R(st+1). We use PP π [·] and EP π [·] to denote this distribution and the expectation w.r.t. it.1
A standard objective that measures the performance of a policy π is the expected return, J (π) := EP π [P
t≥0 rt]. Let Vmax = HRmax denote the range of the cumulative rewards. As
a central concept in RL, a (Q)-value function is defined as Qπ
P (s, a) = EP π [P
t′≥t rt|st =
s, at = a] for s ∈ St.
Partially Observable MDPs (POMDPs) A POMDP Γ is specified by an underlying MDP plus an emission process, E : S → ∆(O), which generates observation ot ∈ ∆(O) based on a latent state st ∈ S as ot ∼ E(·|st); similar to before we assume O is layered, i.e., ot is always supported on Ot. An episode in a POMDP is generated similarly to the MDP: s0 ∼ ρ0, and at any time step t, an observation is generated as ot ∼ E(·|st), the agent takes action at that only depends on the observable history o0:t := {o0, .-
 . . , ot} and a0:t−1. Then, a latent transition st+1 ∼ P (·|st, at) occurs and a reward rt is generated, and so on and so forth. We assume that the information of reward rt is always encoded in ot+1, so with a slight abuse of notation we write rt = R(st+1) = R(ot+1). POMDPs are often used to model processes where the observations violate the Markov property. That is, we only observe ot in the real system, and introduce st to explain the dynamics and evolution of ot. In this case, st are latent st-
ates that are not observed in the real-system traces.
Belief States and History-based MDP A key concept in POMDPs is the belief state, b⋆(s|τ ) := PΓ[st = s | τt = τ ], where τt = (o0:t, a0:t−1) is an observable history. It is useful to think of the evolution of the observable variables of a POMDP as a history-based MDP. That is, let the t-step history τt be the state, and upon action at, the reward rt and next-state τt+1 are generated as
st ∼ b⋆(·|τt), st+1 ∼ P (·|st, at), rt = R(st+1), ot+1 ∼ E(·|st+1), τt+1 = (o0:t+1, a0:t).
We use MΓ(ot+1|τt, at) to denote the conditional distribution and the induced MDP dynamics. (Note that since reward rt is encoded in ot+1, it can also be determined from τt+1 and thus is consistent with our MDP formulation.) This MDP naturally fits the layered
1. The distribution also depends on ρ0 and the reward function R, but the different models we will consider often only differ in the transition, so we use the subscript to emphasize the dependence on transition.
3

convention, where Ht, the space of τt, is the t-th step state space. This way, any historydependent policy is simply a Markov policy in the history-based MDP, π : H → ∆(A). Concepts such as value functions for a POMDP can be immediately defined through its history-based MDP, that is, when we mention the Q-function in a POMDP such as Qπ
Γ,
what we mean is Qπ
Γ = Qπ
MΓ .
Additional Notation For two distributions p, q ∈ ∆(X ), define their Total-Variation (TV) distance as DTV(p, q) := P
x∈X |p(x)−q(x)|/2, and let ∥p/q∥∞ := maxx∈X p(x)/q(x).
2.2 Model Selection of Belief-State Approximations
As mentioned in the introduction, we are interested in complex simulators where, when modeled as a POMDP, the latent-state and the observation spaces S and O are potentially very large, and the latent transition and the emission process P and E are complex blackboxes, to which we only have sampling access. While the notion of belief state, b⋆, is conceptually and information-theoretically well-defined, it is not easy to access them in a computationally efficient manner, and methods from ABC, SBI, -
and particle filtering may be used to approximate the said belief state (Cranmer et al., 2020). Since these methods often require domain-specific design choices and heuristics, the model-selection problem naturally arises: given a candidate set of belief-state approximations B = {b(i)}m
i=1 with
b(i) : H → ∆(S), we are interested in selecting the best approximation by interacting with the simulator. Throughout the paper, we will assume realizability as a simplification: Assumption 1 (Realizability). b⋆ ∈ B.
3. Selection of st|τt (“Latent State-based Selection”)
The problem of selecting/learning the posterior distribution in a computationally-efficient manner is closely related to Simulation-based Inference (SBI). As a standard approach in SBI, we can generate trajectories with latent states in the form of (s0:H , o0:H , a0:H−1) using some behavior policy πb : H → ∆(A), and obtain τt = (o0:t, a0:t−1) and st pairs for any 0 ≤ t ≤ H. The joint distribution of (τt, st) generated in this way satisfies that
st ∼ b⋆(·|τt),
and we write τt ∼ Γπb to denote that τt is generated from a trajectory induced by policy πb in POMDP Γ. On the other hand, for any candidate b ∈ B, we can also generate
s ̃t ∼ b(·|τt)
for each τt in the above dataset. Then, testing whether b = b⋆ can be reduced to the problem of conditional 2-sample test based on the samples {(τt, st, s ̃t)}, that is, to tell whether st|τt and s ̃t|τt are identically distributed.2 We call this approach latent statebased selection to distinguish it from alternative approaches we will consider later.
2. Strictly speaking, 2-sample test is different from and arguably harder than the selection problem, since we can leverage the realizability assumption in selection.
4

Reduction to Joint 2-Sample Tests A naı ̈ve approach is to reduce the conditional test to a joint test: we can simply test if (τt, st) is identically distributed as (τt, s ̃t). If the joints are identical, it implies that the conditionals are also identical on the supported τt. Unfortunately, this approach comes with significant practical hurdles: 2-sample tests often involve some kind of discriminator class F that need to be carefully designed (Gretton et al., 2012), which in this case operates -
on H × S. However, given that a history τ ∈ H is a combinatorial object of variable length, designing effective discriminators can be practically challenging. This begs the question:
Can we design algorithms that do not rely on discriminators over the H space?
3.1 Selection of Y |X Conditionals with Y -only Discriminators
We now provide a solution to the general problem of selecting from conditional distributions in the form of P (Y |X), in a way that only requires discriminator classes operating on Y , avoiding the demanding task of feature engineering or neural architecture design over X which are often complex combinatorial objects (such as histories) in our settings of interest.
General Problem Formulation We are given n i.i.d. (X, Y ) pairs, {(Xj, Yj)}, sampled from a real joint distribution (X, Y ) ∼ P ⋆, and the task is to select from m candidate conditionals Pi(y|x) where Pi⋆(y|x) = P ⋆(y|x) for some i⋆ ∈ [m]. Computationally, we assume we can efficiently sample from Pi(·|x) for any given x, but we can only sample joints from P ⋆.
Inspired by Scheff ́e tournament (Devroye and Lugosi, 2001), we first consider the case of m = 2 and later extend to general m via a tournament procedure of pairwise comparison.
Pairwise Comparison between 2 Candidates When m = 2, we propose the following procedure, which requires a discriminator class F : Y → {0, 1} to serve as classifiers: for each Xj in the data sampled from P ⋆,
1. Sample N i.i.d. data points from Pk(·|Xj) for k = 1, 2.
2. Use the above 2N data points to train a classifier fˆj ∈ F that predicts whether Y is sampled from P1(·|Xj) or P2(·|Xj). For theoretical analyses and presentation ease, we assume ERM on 0/1 loss, and adopt the convention (which is w.l.o.g.) that Pi⋆ gets label 1.
3. Use fˆj to classify the real Yj. Additionally sample 1 data point from each of P1(·|Xj)
and P2(·|Xj), denoted as Y (1)
j and Y (2)
j , and classify them with fj as well.
Finally, we choose between P1, P2 based on arg mink∈{1,2} 1
n
P
j fˆj(Yj) − 1
n
P
j fˆj (Y (k)
j ).
For m > 2, we perform the above procedure for each pair of candidate conditionals (data sampled from Pk may be reused in multiple comparisons), and let fˆi,k
j be the classifier
5

trained to distinguish between Pi(·|Xj) and Pk(·|Xj). The final choice is
arg min
i∈[m]
max
k∈[m],k̸=i
1
n
X
j
fˆi,k
j (Yj) − 1
n
X
j
fˆi,k
j (Y (i)
j ) . (1)
In words, for each real data point Xj, we draw “synthetic data” from the candidate conditionals Pi(·|Xj) and Pk(·|Xj) to train a classifier, and apply it to a single “real” data point Yj; in total, nm(m − 1)/2 classifiers will be trained. When i⋆ ∈ {i, k}, the classifier learns to separate Y generated using P ⋆ = Pi⋆ from that using the wrong conditional. Therefore, we
may choose between Pi and Pk based on fˆi,k
j (Yj), which predicts whether Yj (sampled from
P ⋆ = Pi⋆) is more likely to be produced by Pi or Pk. Of course, the signal from classifying a single data point Yj is weak and contains randomness, and aggregating such signals across all j can reduce the noise and amplify the signal.
While the above idea is reasonable, it may run into issues when the data from Pi and Pk are not cleanly separable by F : the algorithm minimizes an overall error rate with a mixture of correct data (from Pi⋆) and incorrect data, but the classifier is eventually only applied to Yj from Pi⋆, meaning that the ultimate loss we suffer is the False Negative Rate of fˆi,k
j, which is only loosely controlled by the overall error rate. In contrast, we follow the spirit of Scheff ́e estimators and treat the classifier fˆi,k
j as an approximate witness of the totalvariation distance between Pi(·|Xj) and Pk(·|Xj), and make the final selection via the IPM loss in Eq.(1), which leads to the relatively weak assumption in the theoretical analysis below.
Theoretical Guarantee We now provide the assumptions and the theoretical guarantees for this procedure. The key assumption we need is that F contains nontrivial classifiers that separate Pi(·|Xj) from Pk(·|Xj) when i⋆ ∈ {i, k}, as formalized by the following assumption. Assumption 2 (Expressivity of F ). Assume F is a finite class. Define
acci,i⋆
X (f ) := 1/2 · Pr
Y ∼P ⋆(·|X)
[f i,i⋆
X (Y ) = 1] + 1/2 · Pr
Y ∼Pi(·|X)
[f i,i⋆
X (Y ) = 0].
For any i ̸= i⋆, let
f i,i⋆
x,⋆ (y) = I[Pi⋆(y|x) > Pi(y|x)] (2)
be the Bayes-optimal classifier for distinguishing between Pi⋆(·|x) and Pi(·|x), and
E (i, i⋆) = EX∼P ⋆
h
acci,i⋆
X (f i,i⋆
X,⋆)
i
− 1/2.
We assume the existence of f i,i⋆
X ∈ F that satisfies the following: for some 0 < α ≤ 1 that applies to all i,
EX∼P ⋆
h
acci,i⋆
X (f i,i⋆
X)
i
≥ 1/2 + α E(i, i⋆).
6

f i,i⋆
X,⋆ (Eq.(2)) is the best possible classifier for separating Pi⋆(·|X) = P ⋆(·|X) from Pi(·|X)
when i ̸= i⋆, and we can get straightforward guarantees if we simply assume f i,i⋆
X,⋆ ∈ F .
Instead, we only assume F realizes “better-than-trivial” classifier f i,i⋆
X , and the rest of this assumption introduces definitions to quantify what “better-than-trivial” means.
The acci,i⋆
X term is the classification accuracy, with the convention (which is w.l.o.g.) that Pi⋆ is assigned label 1 and Pi is assigned label 0. Note that when F is closed under negation (1− f ∈ F, ∀f ∈ F ), it is trivial to find a classifier in F with 1/2 accuracy, so E(i, i⋆) is a measure of how separable Pi and Pi⋆ are; in fact, E(i, i⋆) = 1/2 · EX∼P ⋆[DTV(Pi(·|X), Pi⋆(·|X))].
Given all these definitions, we require F to contain a classifier f i,i⋆
X whose margin is only a
multiplicative fraction of E(i, i⋆), and this does not need to hold for every X, but only on average w.r.t. the marginal of X.
We are now ready to give the guarantee; the proof is deferred to Appendix A.
Theorem 1 (Sample complexity). Under Assumption 2, for iˆ identified by Eq.(1), with probability at least 1 − δ,
EX∼P ⋆[DTV(Pˆi(·|X), P ⋆(·|X))] ≤ ε,
as long as
n = O log(m/δ)
α2ε2 , N = O log(mn|F |/δ)
α2ε2 .
Invoked on X = τt, Y = st, and P ⋆ is distribution under behavior policy πb, we have
Eτt∼Γπb [DTV(b(·|τt), b⋆(·|τt))] ≤ ε, (3)
where τt ∼ Γπb is a partial trajectory naturally simulated in Γ under policy πb without using resetting.
Related Works The above procedure is closely related to and a variant of the method of Li et al. (2022), both of which can be viewed as the extension of Scheff ́e estimators to conditional distributions. The difference is that Li et al. assume access to the density functions of Pi(y|x), which allows them to explicitly compute the Bayes-optimal classifier in Eq.(2). In contrast, we only allow blackbox sampling access to Pi(·|x), and approximate the above classifier using a discriminator class F via-
 training on sampled synthetic data. What we show is that F does not need to realize the above Bayes-optimal classifier for every single x, and it suffices to have marginally-better-than-trivial classifiers in an average sense. Theoretically, Li et al. show that the sample complexity of the conditional selection problem should not depend on the complexity of the X space (see also Bilodeau et al. (2023)), which is echoed by our motivation of not having to design discriminators over X . In model-bas-
ed RL, similar insights and Scheff ́e-style constructions have been used in learning model dynamics from IPM losses (Sun et al., 2019). The idea of discriminators to help learn or test conditional distributions are also found in the SBI literature (Lueckmann et al., 2021).
Outside belief-state approximation, our procedure may also be relevant to model selection in conditional generative models, such as prompt-based image generation. One potentially
7

relevant property is that our procedure has a low sample-complexity burden on n, the number of “real” data points from P ⋆. In belief-state approximation, both n and N can be increased by spending more computation; in tasks of learning from real datasets, however, the real data (from P ⋆) can be more expensive to collect compared to the synthetic data (from P i), and the independence of n on the complexity of |F| can be appealing.
4. Selection of ot+1|τt, at (“Observation-based Selection”)
We now show that the dynamical-system nature of POMDPs adds interesting twists to the problem and allows for alternative solutions. In particular, we show that choosing the right conditional of st|τt (by reducing to the problem of selecting the conditional distribution of Y |X with X = τt and Y = st) is not the only way to select the belief state approximation. Instead, we can select for the right observable model induced by the belief state approximations.
Observable Model A POMDP Γ and an approximate belief state b together defines an observable model MΓ,b, which is a mapping in the form of H ×A → ∆(O). Using this model MΓ,b, we can efficiently sample the next observation ot+1 given an history τt and action at, as described by the following sampling process: ot+1 ∼ MΓ,b(·|τt, at) is equivalent to
st ∼ b(·|τt), st+1 ∼ P (·|st, at), ot+1 ∼ E(·|st+1). (4)
This model can be equivalently treated as a history-based MDP, as it describes how the next state (length-(t + 1) history) can be sampled from the current state-action pair (length-t history and action): given τt, at, the generative process for τt+1 is simply
ot+1 ∼ MΓ,b(·|τt, at), τt+1 = τt ◦ at ◦ ot+1,
where ◦ is concatenation. It is not hard to see that when b = b⋆, MΓ,b⋆ describes the true history-based MDP induced by POMDP Γ, i.e., MΓ,b⋆ = MΓ. Given that most key RL concepts in POMDPs, such as value functions and optimal policies, can be defined through the induced observable model (see Section 2.1), a natural idea is to apply the conditional selection procedure in Section 3 but with the following setup:
• X = (τt, at), Y = ot+1.
• P ⋆ correspond to generating X, Y pairs by sampling trajectories using some behavior policy πb : H → ∆(A).
• Each candidate b(i) induces a conditional Pi(·|X) = MΓ,b(i)(·|τt, at).
Then under Assumption 2, we can directly invoke Theorem 1 for an expected TV guarantee. For example:
Corollary 2. Bind X = (τt, at) and Y = ot+1 and define P ⋆, {Pi} as described above. Under the conditions of Theorem 1, with probability at least 1 − δ, we will select a belief state approximation b, such that (note that MΓ = MΓ,b⋆)
E(τt,at)∼Γπb [DTV(MΓ,b(·|τt, at), MΓ(·|τt, at))] ≤ ε. (5)
8

Furthermore, such a guarantee are immediately implied from (and thus weaker than) that for latent state-based selection:
Proposition 3. Fixing any τt, at, we have
DTV(MΓ,b(·|τt, at), MΓ(·|τt, at)) ≤ DTV(b(·|τt), b⋆(·|τt)).
Therefore, Eq.(3) immediately implies Eq.(5).
Proof. Conditioned st, the process of generating ot+1 is independent of whether st is generated from b⋆ or b, so the claim is a direct consequence of the data processing inequality.
If the final goal is to compute objects that solely depend on the observable model MΓ, such as value functions or optimal policies, it seems that observation-based selection is an equally legitimate solution. In fact, observation-based selection has an additional advantage of being more robust to misspecification: if the latent state st includes dummy variables that do not affect the observable dynamics, observation-based selection can effectively ignore the errors of b on these inconsequential va-
riables and thus require a weaker version of realizability, while latent state-based selection still treats such b as incorrect and insists on choosing the groundtruth b⋆.
This observation-based selection approach reflects a prevailing theme in RL research on POMDPs, namely behavioral equivalence, that the observable behavior of a POMDP is what ultimately matters, and latent states are ungrounded objects and only a convenient way to help express the observable behavior (e.g., the latent state transition P and emission E are a convenient way to parameterize the observable dynamics MΓ). This philosophy is most pronounced in the research of Predictive State Representat-
ions (Littman and Sutton, 2002; Singh et al., 2004) and minimal information state (Subramanian et al., 2022), and is also manifested in recent statistical results for learning in POMDPs (Zhang and Jiang, 2025) (see also Section 5.3). As we will see next, however, observation-based selection can suffer from surprising degeneracy in downstream use cases when latent state-based selection is well-behaved, which seems to contradict the spirit of behavioral equivalence.3
5. Roll-Out Guarantees and Temporal Consistency
In this section, we investigate how the errors in b (measured in the forms of Eq.(3) or (5)) can affect the downstream RL tasks. We consider the most basic yet representative use of state resetting enabled by an approximate b:
Roll-out: Sample trajectories to obtain a Monte-Carlo estimate of Qπ
Γ(τt, at) for a given target policy π.
This procedure is useful for debugging and simulator selection (Sajed et al., 2018; Liu et al., 2025), enables Monte-Carlo control (Sutton and Barto, 2018), and forms the basis
3. The paradox is resolved by realizing that we rely on P and E for efficient sampling which ground the latent states.
9

of Monte-Carlo Tree Search (Kocsis and Szepesva ́ri, 2006; Silver and Veness, 2010; Browne et al., 2012). Perhaps surprisingly, despite the simplicity of the task, there are many nuances to the question. latent state-based selection and observation-based selection interact in subtle but consequential ways with the roll-out method, and observationbased selection can have degenerate behaviors when used with the most natural roll-out procedure.
5.1 Single-Reset Roll-Out
We now consider what error guarantees can be obtained for estimating Qπ
Γ(τt, at) via Monte
Carlo roll-outs using an approximate belief state b ≈ b⋆, e.g., one with guarantees established in Theorem 1. In particular, the obvious (and seemingly unique) roll-out procedure, which we call “Single-Reset Roll-out” (whose meaning will be clear shortly), is:
Single-Reset Roll-out. Input: τt, at, π.
1. Sample st ∼ b(·|τt).
2. Take given action at, and generate st+1 ∼ P (·|st, at), ot+1 ∼ E(·|st+1).
3. Repeat Step 2 for subsequent time steps by taking actions according to π, and collect PH
t′=t+1 R(ot′) as a Monte-Carlo return.
Since the error due to finite roll-outs can be easily handled by Hoeffding’s inequality, we will focus on the expected value (i.e., assuming infinitely many roll-outs) obtained through the above procedure, denoted as Qπ
1-Reset(Γ,b)(τt, at), and analyze its error relative to the
groundtruth Qπ
Γ(τt, at). Concretely, the guarantee in the form of Eq.(3), obtained via latent state-based selection, immediately implies the proposition below. Since our guarantee for b in Eq.(3) is not pointwise, it should not be surprising that the error bound for Qπ
1-Reset(Γ,b) is also given in an average sense w.r.t. the distribution of trajectories under
πb, since that is what we use to train the classifiers and select for st|τt.
Proposition 4. If Eq.(3) (guarantee for latent state-based selection) holds for some t, then
E(τt,at)∼Γπb [|Qπ
1-Reset(Γ,b)(τt, at) − Qπ
Γ(τt, at)|] ≤ ε · Vmax.
Proof. The procedure for rolling out using b vs. b⋆ is identical after st is sampled, so
E[PH
t′=t+1 R(ot′)|τt, at, st; π] is the same for both b and b⋆, where the expectation is w.r.t. the randomness of the Single-Reset procedure. The final result is just taking its expectation w.r.t. st ∼ b(·|τt) vs. st ∼ b⋆(·|τt), so
|Qπ
1-Reset(Γ,b)(τt, at) − Qπ
Γ(τt, at)| ≤ DTV(b(·|τt), b⋆(·|τt)) · Vmax.
Plugging this into E(τt,at)∼Γπb [·] completes the proof.
As a natural follow-up question, can we obtain similar error bounds from Eq.(5), which is obtained from observation-based selection?
10

5.2 Repeated-Reset Roll-out
Recall that observation-based selection enjoys the guarantee in Eq.(5):
E(τt,at)∼Γπb [DTV(MΓ,b(·|τt, at), MΓ(·|τt, at))] ≤ ε.
It is tempting to provide guarantees for the expected roll-out value by directly reducing to existing MDP analysis, using the following argument: note that MΓ,b and MΓ,b⋆ are two history-based MDPs. When we treat history as state, Eq.(5) is similar to the kind of guarantees obtained from MLE in MDPs,4 which immediately leads to a policy-evaluation guarantee:
Theorem 5. Suppose two MDPs only differ in the transition dynamics, P vs. P ′. In addition, for every t, assume
E(st,at)∼P πb [DTV(P ′(·|st, at), P (·|st, at))] ≤ ε. (6)
When the roll-out policy π = πb, it holds that for every t,
E(st,at)∼P πb [|Qπ
P ′ (st, at) − Qπ
P (st, at)|] ≤ ε(H − t)Vmax.
This result is standard in model-based RL, and we provide its proof in Appendix B for completeness. It is also possible to extend the result to other roll-out policies π ̸= πb by paying for a coverage coefficient, which we will discuss in Section 6.1 but not consider in this section. The exact match between Eq.(6) and Eq.(5) immediately implies that: Corollary 6. If Eq.(5) holds for all t, then for π = πb we have (note that Qπ
Γ = Qπ
MΓ,b⋆ ):
E(τt,at)∼Γπb [|Qπ
MΓ,b (τt, at) − Qπ
Γ(τt, at)|] ≤ ε(H − t)Vmax.
While the guarantee here has an additional horizon factor (H − t), it is nevertheless a solid guarantee. The final piece of the puzzle is the observation that Single-Reset seems to be the only way to sample from Γ using b, so it probably coincides with MΓ,b, i.e.,
Qπ
1-Reset(Γ,b) = Qπ
MΓ,b for any π.
This intuitive statement, however, is in sharp conflict with the following example: Example 1 (Qπb
1-Reset(Γ,b) cannot enjoy the guarantee of Corollary 6). Consider an ar
bitrary POMDP Γ, except that the emission E(·|·) is state-independent at some time step t0. Every candidate b predicts the correct belief state b⋆(·|τt) for any t ̸= t0, but can predict arbitrary distributions for t = t0. In this case, the observable behavior (i.e., the induced law of MΓ,b) of b is indistinguishable from that of b⋆ at any time step, so any b could be selected. However, a Single-Reset roll-out starting at t0 − 1 will generally be incorrect since the arbitrarily generated st0−1 will-
 have a lingering effect, i.e., producing an incorrect distribution of st0 and subsequent latent states.
We are facing a paradox: on one hand, Example 1 shows that observation-based selection cannot enjoy the guarantee in Corollary 6 for Single-Reset roll-out; on the other hand, the observable model MΓ,b, a history-based MDP determined by Γ and b, does enjoy
4. The guarantee of MLE has a square on the TV distance, i.e., E[DTV(·)2] ≤ . . ..
11

Real trace: X O O | O X O O O O X O O X Single-Reset: X O O | X O O O O X O O X O Repeated-Reset: X O O | X X X X X X X X X X
Figure 1: Toy example for illustrating the difference between Single-Reset and Repeated-Reset. In this binary-observation, action-less system, “X” represents the occurrence of an event. Every time an event happens (“X”), the system samples the interval till next event from some distribution. The history of interest is “X O O”, and the first row shows the real trajectory. b always sets the latent state to be 0, i.e., predicts that next event will occur immediately.
a standard guarantee for its induced Q-value. Given that Single-Reset seems to be the only reasonable way to roll-out trajectories using Γ and b, it is reasonable to believe that such roll-outs correspond to the Q-value of MΓ,b. So what gives? Fact 1. Qπ
1-Reset(Γ,b) is not equivalent to Qπ
MΓ,b .
The reason why these two objects are different should be made clear by the following procedure that actually produces roll-outs according to MΓ,b:
Repeated-Reset Roll-out. Input: τt, at, π.
1. Sample st ∼ b(·|τt).
2. Take given action at, and generate st+1 ∼ P (·|st, at), ot+1 ∼ E(·|st+1).
3. Replace st+1 with a fresh sample from b(·|τt+1) where τt+1 = τt ◦ at ◦ ot+1.
4. Repeat Steps 2 and 3 for subsequent time steps by taking actions according to π, and collect PH
t′=t+1 R(ot′) as a Monte-Carlo return.
Single-Reset and Repeated-Reset are equivalent if b = b⋆ but are generally different; see Figure 1 for an example. We conclude this section with the following remarks that reconcile the earlier paradox:
• The main difference between Single-Reset and Repeated-Reset is that, at any time t, the observable trajectory τt is a sufficient statistics for simulating the rest of the trajectory in Repeated-Reset. For Single-Reset, however, the sufficient statistic is (τt, st). Therefore, when we only have observation-based selection guarantee but not that of latent state-based selection, Single-Reset is only guaranteed to produce the correct ot+1, but not future observations due to the lingering effect of p-
ossibly wrong st.
• Observation-based selection can still enjoy the guarantee in Corollary 2 via RepeatedReset roll-out, but it suffers from an additional horizon factor compared to Proposition 4 due to the repeated application of the inaccurate b (c.f. Figure 1). On a related note, Proposition 4 only requires Eq.(3) to hold for the t that is the subscript of the τt we start roll-out from, but Corollary 2 requires Eq.(5) to hold for all t′ ≥ t. Moreover, when the roll-out policy π ̸= πb, Corollary 6 needs to pay fo-
r an additional coverage coefficient (see Section 6.1) while Proposition 4 does not. Therefore, while latent state-based selection + Repeated-Reset can also enjoy Corollary 2 via Proposition 3, it is in
12

Table 1: Relationship between the selection methods and the roll-out methods.
Latent State-based Selection Observation-based Selection Agnostic to redundant
latent variables ✘ ✓(see the end of Section 4)
Single-Reset ✓ Proposition 4 ✘ Example 1 Repeated-Reset ✓ Corollary 2 (worse than Proposition 4)
ferior to latent state-based selection + Single-Reset in both error propagation and computational efficiency.
• As another possible misconception, it may be tempting to think that the observable dynamics of Single-Reset is MΓ,b at time step t and MΓ for subsequent time steps, since all later simulations do not involve the use of the inaccurate b and hence should be “correct”. This is not true due to, again, the lingering effect of wrong st distribution. (In fact, if this held, Corollary 2 would hold for Qπ
1-Reset(Γ,b) without the horizon factor.) That is, although all subsequent simulations seem correct, the induced conditional law of the observables, ot′+1|τt′, at′ for t′ > t is not the same as the true MΓ.
• As potential future directions, it will be interesting to consider if the inconsistency between Single-Reset and Repeated-Reset can be turned into a method for selecting belief-state approximations, and whether the insights can be used to reduce the error accumulation of observation-based selection.
5.3 Case Study: Simulator Selection from Real-System Traces
The previous sections may leave the impression that latent state-based selection is more superior to observation-based selection other than a minor disadvantage regarding redundant latent variables. Below we study a motivating scenario mentioned earlier, where it is beneficial to integrate both latent state-based selection and observationbased selection into the solution and exploit the strength of each.
Problem Setup. Consider the problem of learning from real-system data. Let Γ⋆ be a real system, from which we draw observable trajectories with policy πb. The goal is to use these data trajectories to select among candidate simulators {Γk}K
k=1 that best matches the dynamics of the real system, and as before we assume realizability i.e., Γ⋆ ∈ {Γk}. In a way, this is essentially a model estimation problem in POMDPs, and the standard approach (as mentioned earlier in Section 4) is MLE (Liu et al., 2022):
arg min
k
X
j
log MΓk (o(j)
t+1|τ (j)
t , a(j)
t ),
where all variables with (j) subscript come from the j-th data trajectory.
Unfortunately, this solution is not directly applicable to our setting, since we do not assume probability mass/density access to P or E in any given simulator Γ and thus cannot compute MΓk (·|·). Instead, we can directly leverage our observation-based selection (Section 4):
13

while it is initially designed to select MΓ from {MΓ,b : b ∈ B}, the procedure and analyses immediately apply to the problem here where we select MΓ⋆ from {MΓk }.
But that brings a further problem: observation-based selection requires efficient sampling access to the candidate conditionals, which is MΓ(ot+1|τt, at) for Γ ∈ {Γk} here. That requires having sampling access to the belief state in Γ (Eq.(4)), which is not available. However, that is exactly the problem we have been dealing with so far! So let’s assume that we are given B,5 such that for each Γ ∈ {Γk}, the true belief state b⋆ ∈ B.6 This leads to a two-stage procedure: in Stage 1, for each Γ, we -
select bΓ ∈ B as its belief-state approximation; in Stage 2, we use observation-based selection to select an observable model from {(Γk, bΓk )}.
Solution Solely based on Observation-based Selection Ultimately, we need to select a (Γ, b) pair from {Γk} × B. Given that observable trajectories from Γ⋆ force the use of observation-based selection in the second stage, a natural simplification is to lump the first stage into the second and solve both simultaneously with one unified observationbased selection instance. That is, we select
MΓ⋆ from {MΓ,b : Γ ∈ {Γk}, b ∈ B}.
Invoking the analyses in Corollaries 2 and 6, we immediately have:7 for the selected (Γ, b) pair,
E(τt,at)∼Γ⋆πb [DTV(MΓ,b(·|τt, at), MΓ⋆ (·|τt, at))] ≤ ε0,
E(τt,at)∼Γ⋆πb [|Qπb
MΓ,b (τt, at) − Qπb
Γ⋆ (τt, at)|] ≤ ε0HVmax, (7)
where ε0 can be determined by the number of data trajectories from Γ⋆ through the samplecomplexity statement in Theorem 1.8
The problem is, if we want to roll-out trajectories using the selected (Γ, b) to approximate
Qπb
Γ⋆, the only valid approach is Repeated-Reset (Eq.(7)), and Single-Reset will not enjoy any guarantee given Example 1. However, Repeated-Reset is computationally costly especially when sampling from b has a nontrivial cost, and in practice RepeatedReset is often a bad idea given repeated injection of the error of b ̸= b⋆ (Figure 1). This begs the the question: can we enjoy a guarantee similar to Eq.(7) while rolling out from the selected (Γ, b) using Single-Reset?
Two-Stage Solution We now show that the natural two-stage solution achieves the goal if we use latent state-based selection in the first stage (selecting b for Γ). The analysis turns out to be somewhat nontrivial, which we provide below:
5. The candidate set B can be designed for each Γ ∈ {Γk} separately, but we assume B is the same across candidate simulators for ease of presentation. 6. We still use b⋆ to refer to the true belief state of the simulator Γ under consideration. Note that we do not need to refer to the belief state of the real system Γ⋆ and hence does not give it a notation. 7. We relax (H − t) in Corollary 6 to H here for readability. 8. Concretely, to achieve ε0 error, the number of trajectories needed is O(log(mK-
/δ)/α2ε2
0, where m and K are the sizes of B and {Γk}K
k=1, respectively.
14

Theorem 7. Assume that the selected (Γ, b) satisfies
Eτt∼Γπb [DTV(b(·|τt), b⋆(·|τt))] ≤ ε1. (8)
E(τt,at)∼Γ⋆πb [DTV(MΓ,b(·|τt, at), MΓ⋆ (·|τt, at))] ≤ ε0. (9)
Then
E(τt,at)∼Γ⋆πb [|Qπb
1-Reset(Γ,b)(τt, at) − Qπb
Γ⋆ (τt, at)|] ≤ (2ε0 + 3ε1)HVmax.
The conditions of the theorems are the guarantees of latent state-based selection in Stage 1 (Eq.(3)) and observation-based selection in Stage 2 (Eq.(5) when Γ⋆ is the groundtruth).9 The final guarantee resembles Eq.(7), except that it permits the use of Single-Reset roll-out. The error bound is slightly worse than Eq.(7) by a multiplicative constant and an additional dependence on ε1. However, note that ε0 is determined by the amount of real-system data which often is fixed, while ε1 is determine-
d by the amount of data sampled from each simulator Γ. So overall the guarantee is still comparable to Eq.(7).
Proof of Theorem 7. Eq.(8) implies that E(τt,at)∼Γπb [DTV(MΓ,b(·|τt, at), MΓ(·|τt, at))] ≤ ε1. Both this inequality and Eq.(9), through the sub-additivity of TV distance for product distributions, implies
DTV(M πb
Γ,b, Γ⋆πb ) ≤ ε0H, DTV(M πb
Γ,b, Γπb ) ≤ ε1H.
Therefore, DTV(Γπb, Γ⋆πb) ≤ (ε0 + ε1)H. Next, we have
E(τt,at)∼Γπb [|Qπb
1-Reset(Γ,b)(τt, at) − Qπb
MΓ,b (τt, at)|] ≤ ε1(1 + H)Vmax,
because we can use Qπb
Γ as the bridge term, and both Qπb
1-Reset(Γ,b) and Qπb
MΓ,b are close to it
thanks to Proposition 4 and Corollary 6. On the other hand, Eq.(9) enables the following through Corollary 6:
E(τt,at)∼Γ⋆πb [|Qπb
MΓ,b (τt, at) − Qπb
Γ⋆ (τt, at)|] ≤ ε0HVmax.
Finally, putting everything together:
E(τt,at)∼Γ⋆πb [|Qπb
1-Reset(Γ,b)(τt, at) − Qπb
Γ⋆ (τt, at)|]
≤ E(τt,at)∼Γ⋆πb [|Qπb
1-Reset(Γ,b)(τt, at) − Qπb
MΓ,b (τt, at)|] + ε0HVmax
≤ E(τt,at)∼Γπb [|Qπb
1-Reset(Γ,b)(τt, at) − Qπb
MΓ,b (τt, at)|] + (2ε0 + ε1)HVmax
≤ (2ε0 + 3ε1)HVmax,
where the third line changes the distribution from Γ⋆πb to Γπb by paying the for the TVdistance multiplied by the boundedness of the function.
9. There is a slight caveat in Stage 2’s guarantee due to the violation of realizability, i.e., after stage 1, the true belief state of Γk⋆ = Γ⋆ might have been eliminated. See Appendix D for further discussions.
15

6. Further Discussions
6.1 Generalization to Other Sampling Distributions
The roll-out guarantees in Theorem 1 and Corollary 2 all consider Q-function errors under the distribution (τt, at) ∼ Γπb, under which we train the classifiers to select the beliefstate approximation, and Corollary 2 further restricts the roll-out policy to be π = πb. Naturally, one would wonder what happens when the error is measured under a different sampling distribution (e.g., the occupancy induced from a different roll-in policy π′), and when Repeated-Reset is given a general roll-out policy -
π ̸= πb. These questions are well-understood in the MDP literature (especially offline RL theory) that we can pay some form of coverage coefficient to translate the error from one distribution to another: Proposition 8. Consider an MDP with transition P .
1. ( Single-Reset, extension of Proposition 4) Given any Q : St × A → R where
E(st,at)∼P πb [|Q(st, at) − Qπ
P (st, at)|] ≤ ε for some fixed t, for any roll-in policy π′,
E(st,at)∼P π′ [|Q(st, at) − Qπ
P (st, at)|] ≤ ε · ρπ′
t /ρπb
t∞
, (10)
where ρ(·)
t is the marginal distribution (a.k.a. occupancy) of (st, at) induced by a policy in P .
2. ( Repeated-Reset, extension of Proposition 2) Consider another MDP with transi
tion P ′ where Eq.(6) holds for all t. Let (π′)t ◦ (π)t′−t be the policy that follows π′ for the first t steps and π for the next t′ − t steps, then
E(st,at)∼P π′ [|Qπ
P ′ (st, at) − Qπ
P (st, at)|] ≤ ε ·
H −1
X
t′=t
ρ(π′)t◦(π)t′−t
t /ρπb
t′
∞
.
These results can be directly applied to POMDPs by mapping state st in the proposition to the observable history τt, P to the observable dynamics of Γ (i.e., MΓ,b⋆), Q to Qπ
1-Reset(Γ,b),
and P ′ to MΓ,b. However, while the coverage coefficients that appear in the proposition are often acceptable in MDPs, their behaviors are not as benign in POMDPs: for example, Eq.(10) becomes
E(τt,at)∼Γπ′ [|Q1-Reset(Γ,b)(τt, at) − Qπ
Γ(τt, at)|] ≤ ε · max
τt,at
Pπ′
Γ [τt, at]
Pπb
Γ [τt, at]
!
, (11)
where Pπ′
Γ [τt, at] is the probability assigned to the partial trajectory (τt, at) in Γ under π′ as the sampling policy, and
Pπ′
Γ [τt, at]
Pπb
Γ [τt, at] =
t
Y
t′=0
π′(at′ |τt′ )
πb(at′ |τt′ )
is the infamous cumulative product of importance weights found in importance sampling (Precup et al., 2000). This is actually a general problem whenever we apply MDP results to POMDPs via a reduction to history-based MDPs, and circumventing it often requires
16

algorithms and coverage concepts specifically designed for POMDPs (Zhang and Jiang, 2024). It remains an interesting question whether those ideas (such as the notion of belief & outcome coverage proposed by Zhang and Jiang (2024)) are useful for the belief-state selection problem considered in this paper.
Generalization via Sufficient Statistics A mitigation to the above problem is to make and leverage structural assumptions on b. In particular, we may assume that b(·|τt) is generated via a two-stage procedure:
st ∼ b(·|τt) ⇔ zt = φb(τt), st = b(·|zt).
That is, we first compute the sufficient statistic of τt via a function φb, and then sample st conditioned on zt. (With a slight abuse of notation we reuse b for the conditional distribution in the second stage.) As a starter, if zt is a discrete variable and the correct φb⋆ is known, i.e., φb = φb⋆ ∀b ∈ B, we can improve the guarantee of latent state-based selection in Eq.(11) to the following (see proof in Appendix C):
E(τt,at)∼Γπ′ [|Qπ
1-Reset(Γ,b)(τt, at) − Qπ
Γ(τt, at)|] ≤ ε · mzat x
Pπ′
Γ [zt]
Pπb
Γ [zt]
!
.
Therefore, if zt takes on a small number of values, there is hope that πb may induce an exploratory distribution over zt and covers the distribution under π′. The result can also be easily extended to the case of unknown φb⋆ (i.e., φb can be different for each b), as we can simply replace zt in the above bound with the pair (φb(τt), φb⋆(τt)). In this case, the bound requires πb to induce an exploration joint distribution over the pair of statistics. For continuous-valued φb, favorable coverage gua-
rantees might still be obtainable if structural assumptions are imposed on the b(·|φb) process.
Task-specific Approaches Another route to circumvent the issue related to coverage is to take approaches specific to the task at hand. As an example, for the most basic task of policy evaluation (i.e., estimating Qπ
Γ for a given π), there are simple regression based
methods10 and selection algorithms based on estimating some variant of the Bellman error. For the latter, the coverage guarantee often does not depend on the coverage in the original MDP, but in an MDP compressed through a low-dimensional representation related to the candidate Q-functions (Xie and Jiang, 2021; Zhang and Jiang, 2021; Liu et al., 2025). Such a deviation from the original dynamics may be a desirable property for POMDPs when the coverage in the original dynamics is not well-behaved.
6.2 The Choice of πb: How to Collect Data
For most part of the paper, we assume the πb, which is used to collect the data needed for the selection of the conditional distributions (Section 3), is given. In practice, the choice of πb is an important hyperparameter with nuanced effects, which we already had a glimpse
10. That is, we can generate trajectories in Γ with π′ roll-in at time step t and π roll-out, and split each trajectory into a regression data point (τt, at) 7→ P
t′≥t rt′ . Qπ
1-Reset(Γ,b) and Qπ
MΓ,b are treated as
candidate regressors, and the true Qπ
Γ has the least mean squared error.
17

in Section 5.3: while we choose to select belief-state approximations in each simulator Γ by using the same policy πb as the one used to sample the real-system data, the analysis needs
to handle the mismatch between the roll-in distributions of Γπb and Γ⋆πb, which shows up in the final error bound. While this mismatch is shown to be controlled by (ε0 + ε1), there
is the possibility of using a different roll-in policy πb′ in simulators such that Γπ′
b may be a better approximation of Γ⋆πb than Γπb is. The issue is further complicated when there is misspecification in {Γk} and B, which we leave for future investigation.
Another important motivating scenario for selecting b is to use it for learning a good policy in the simulator. In this case, we want b to be accurate not just under some fixed distributions, but throughout the learning process when we explore using different policies. A naı ̈ve approach is to separately optimize one policy for each candidate b ∈ B, and rolling out these policies in the simulator to find the best performing one. However, given the computational intensity of policy optimization, an-
 interesting question is whether we can adjust the choice of b as policy optimization unfolds and avoid performing m = |B| separate policy optimization processes.
Acknowledgments
The author thanks Akshay Krishnamurthy for valuable discussions on early ideas of the project, Sivaraman Balakrishnan for pointers to relevant work on conditional density estimation, and Preetum Nakkiran and Sam Power for helpful discussions and suggestions related to Bayesian inference.
References
Blair Bilodeau, Dylan J Foster, and Daniel M Roy. Minimax rates for conditional density estimation via empirical entropy. EThe Annals of Statistics, 51(2):762–790, 2023.
Cameron B Browne, Edward Powley, Daniel Whitehouse, Simon M Lucas, Peter I Cowling, Philipp Rohlfshagen, Stephen Tavener, Diego Perez, Spyridon Samothrakis, and Simon Colton. A survey of Monte Carlo tree search methods. EIEEE Transactions on Computational Intelligence and AI in Games, 4(1):1–43, 2012.
Kyle Cranmer, Johann Brehmer, and Gilles Louppe. The frontier of simulation-based inference. EProceedings of the National Academy of Sciences, 117(48):30055–30062, 2020.
Luc Devroye and G ́abor Lugosi. ECombinatorial methods in density estimation. Springer Science & Business Media, 2001.
Adrien Ecoffet, Joost Huizinga, Joel Lehman, Kenneth O Stanley, and Jeff Clune. Go-explore: a new approach for hard-exploration problems. EarXiv preprint arXiv:1901.10995, 2019.
Arthur Gretton, Karsten M Borgwardt, Malte J Rasch, Bernhard Sch ̈olkopf, and Alexander Smola. A kernel two-sample test. EThe journal of machine learning research, 13(1):723773, 2012.
18

Nan Jiang. On value functions and the agent-environment boundary. EarXiv preprint arXiv:1905.13341, 2019.
Levente Kocsis and Csaba Szepesv ́ari. Bandit based monte-carlo planning. In EMachine Learning: ECML 2006, pages 282–293. Springer Berlin Heidelberg, 2006.
Michael Li, Matey Neykov, and Sivaraman Balakrishnan. Minimax optimal conditional density estimation under total variation smoothness. EElectronic Journal of Statistics, 16(2):3937–3972, 2022.
Michael L Littman and Richard S Sutton. Predictive representations of state. In EAdvances in neural information processing systems, pages 1555–1561, 2002.
Pai Liu, Lingfeng Zhao, Shivangi Agarwal, Jinghan Liu, Audrey Huang, Philip Amortila, and Nan Jiang. Model selection for off-policy evaluation: New algorithms and experimental protocol. EarXiv preprint arXiv:2502.08021, 2025.
Qinghua Liu, Praneeth Netrapalli, Csaba Szepesvari, and Chi Jin. Optimistic mle–a generic model-based algorithm for partially observable sequential decision making. EarXiv preprint arXiv:2209.14997, 2022.
Jan-Matthis Lueckmann, Jan Boelts, David Greenberg, Pedro Goncalves, and Jakob Macke. Benchmarking simulation-based inference. In EInternational conference on artificial intelligence and statistics, pages 343–351. PMLR, 2021.
Doina Precup, Richard S Sutton, and Satinder P Singh. Eligibility traces for off-policy policy evaluation. In EProceedings of the Seventeenth International Conference on Machine Learning, pages 759–766, 2000.
Touqir Sajed, Wesley Chung, and Martha White. High-confidence error estimates for learned value functions. EarXiv preprint arXiv:1808.09127, 2018.
David Silver and Joel Veness. Monte-Carlo planning in large POMDPs. EAdvances in Neural Information Processing Systems, 23:2164–2172, 2010.
Satinder Singh, Michael R James, and Matthew R Rudary. Predictive state representations: A new theory for modeling dynamical systems. In EProceedings of the 20th Conference on Uncertainty in Artificial Intelligence, pages 512–519. AUAI Press, 2004.
Jayakumar Subramanian, Amit Sinha, Raihan Seraj, and Aditya Mahajan. Approximate information state for approximate planning and reinforcement learning in partially observed systems. EJournal of Machine Learning Research, 23(12):1–83, 2022.
Wen Sun, Nan Jiang, Akshay Krishnamurthy, Alekh Agarwal, and John Langford. Modelbased RL in Contextual Decision Processes: PAC bounds and Exponential Improvements over Model-free Approaches. In EConference on Learning Theory, 2019.
Richard S Sutton and Andrew G Barto. EReinforcement learning: An introduction. MIT press, 2018.
19

Luca Weihs, Unnat Jain, Iou-Jen Liu, Jordi Salvador, Svetlana Lazebnik, Aniruddha Kembhavi, and Alex Schwing. Bridging the imitation gap by adaptive insubordination. EAdvances in Neural Information Processing Systems, 34:19134–19146, 2021.
Tengyang Xie and Nan Jiang. Batch value-function approximation with only realizability. In EInternational Conference on Machine Learning, pages 11404–11413. PMLR, 2021.
Siyuan Zhang and Nan Jiang. Towards hyperparameter-free policy selection for offline reinforcement learning. EAdvances in Neural Information Processing Systems, 34:1286412875, 2021.
Yuheng Zhang and Nan Jiang. On the curses of future and history in future-dependent value functions for off-policy evaluation. EAdvances in Neural Information Processing Systems, 37:124756–124790, 2024.
Yuheng Zhang and Nan Jiang. Statistical tractability of off-policy evaluation of historydependent policies in pomdps. EarXiv preprint arXiv:2503.01134, 2025.
20

Appendix A. Proof of Section 3
Proof of Theorem 1. In the proof it suffices to only consider the comparison when i⋆ ∈ {i, k}. Under standard concentration argument, the excess risk of ERM on 0/1 classification can be bounded. That is, with the N given in the theorem statement, under the highprobability event we have the following (the union bound is reflected by the logarithmic dependence on n, m, |F| in the sample complexity): let ε′ = αε; for any i ̸= i⋆,
acci,i⋆
Xj (fˆi,i⋆
j ) ≥ acci,i⋆
Xj (f i,i⋆
Xj ) − ε′/24. (12)
We now link acci,i⋆
X (f ) to the discrimination power of f w.r.t. Pi and P ⋆: given that f has binary output, we have Pr[f = 1] = E[f ], and
acci,i⋆
X (f ) = 1/2 · Pr
Y ∼P ⋆(·|X)
[f (Y ) = 1] + 1 − Pr
Y ∼Pi(·|X)
[f (Y ) = 1] (13)
= 1/2 + 1/2 · EY ∼P ⋆(·|X)[f (Y )] − EY ∼Pi(·|X)[f (Y )] .
Replacing acci,i⋆
X (f ) in Eq.(12) with the above expression, we have ∀j,
EY ∼P ⋆(·|Xj )[fˆi,i⋆
j (Y )] − EY ∼Pi(·|Xj)[fˆi,i⋆
j (Y )]
≥ EY ∼P ⋆(·|Xj )[f i,i⋆
Xj (Y )] − EY ∼Pi(·|Xj)[f i,i⋆
Xj (Y )] − ε′/12. (14)
Now we consider the concentration of empirical averages to their (conditional) expectations in the final scoring rule in Eq.(1) when i⋆ ∈ {i, k}: Conditioned on {Xj}n
j=1 and all the synthetic data drawn to train the classifiers (which are independent to the randomness of drawing Yj given Xj), 1
n
P
j fˆi,k
j (Yj) is the average of independent (but generally not identically
distributed) random variables, each of which has conditional mean EY ∼P ⋆(·|Xj)[fˆi,k
j (Y )]. Therefore, by Hoeffding’s inequality, the n in the statement enables that
1
n
X
j
fˆi,k
j (Yj) − 1
n
X
j
EY ∼P ⋆(·|Xj )[fˆi,k
j (Y )] ≤ ε′/12. (15)
The same argument holds for 1
n
P
j fˆi,k
j (Y (i)
j ) since Y (i)
j is holdout data not used in training:
1
n
X
j
fˆi,k
j (Y (i)
j )− 1
n
X
j
EY ∼Pi(·|Xj )[fˆi,k
j (Y )] ≤ ε′/12. (16)
We now consider the final score in Eq.(1) when i⋆ ∈ {i, k}. First consider i = i⋆: the two averages share the same mean, so the difference is always bounded by ε′/6 given the concentration bounds above regardless of k. In the second case, i ̸= i⋆, k = i⋆, where the two averages have different means. Using the concentration bounds above, we have
1
n
X
j
fˆi,i⋆
j (Yj) − 1
n
X
j
fˆi,i⋆
j (Y (i)
j ) (17)
≥1
n
X
j
fˆi,i⋆
j (Yj) − 1
n
X
j
fˆi,i⋆
j (Y (i)
j)
≥1
n
X
j
EY ∼P ⋆(·|Xj )[fˆi,i⋆
j (Y )] − 1
n
X
j
EY ∼Pi(·|Xj )[fˆi,i⋆
j (Y )] − ε′/6. (Eqs.(15) and (16))
21

For the final iˆ being selected, if iˆ ̸= i⋆, it must be the case that its score is less than that of i⋆ which is at most ε′/6, so Eq.(17) for i = iˆ is at most ε′/6, and hence
1
n
X
j
EY ∼P ⋆(·|Xj )[fˆˆi,i⋆
j (Y )] − 1
n
X
j
EY ∼Pi(·|Xj )[fˆˆi,i⋆
j (Y )] ≤ ε′/3.
Combine this with Eq.(14), we have
1
n
X
j
EY ∼P ⋆(·|Xj )[fˆi,i⋆
Xj (Y )] − 1
n
X
j
EY ∼Pi(·|Xj )[f iˆ,i⋆
Xj (Y )] ≤ 5ε′/12.
The next step is to show concentration for the LHS of the above expression. Note that each
term like EY ∼P ⋆(·|Xj)[f i,i⋆
Xj (Y )] is a non-random property of Xj (we need to union bound
over i so that it applies to i = ˆi), so their average concentrates to the population expectation with ε′/12 error under the n in the theorem statement. Putting together,
EX∼P ⋆
h
EY ∼P ⋆(·|X)[fˆi,i⋆
X (Y )] − EY ∼Pi(·|X)[f iˆ,i⋆
X (Y )]
i
≤ ε′/2.
Finally,
2EX∼P ⋆ [accˆi,i⋆
X (fˆi,i⋆
X )] − 1 = EX∼P ⋆
h
EY ∼P ⋆(·|X)[fˆi,i⋆
X (Y )] − EY ∼Pi(·|X)[f iˆ,i⋆
X (Y )]
i
(Eq.(13))
≤ ε′/2.
Given Assumption 2, we have
1/2 + ε′/4 ≥ EX∼P ⋆
h
accˆi,i⋆
X (fˆi,i⋆
X)
i
≥ 1/2 + α · E(ˆi, i⋆),
so E(iˆ, i⋆) ≤ ε′/4α = ε/2. The proof is concluded by noticing that
E(iˆ, i⋆) = 1/2 · EX∼P ⋆ [DTV(Piˆ(·|X), Pi⋆ (·|X))].
Appendix B. Proof of Section 5
Proof of Theorem 5. To avoid dealing with the last time step separately, we take the convention that any notion of value function evaluates to 0 at t = H since there is no future reward afterwards. Then for any t < H, when π = πb,
E(st,at)∼P πb Qπ
P (st, at) − Qπ
P ′ (st, at)
= E(st,at)∼P πb Est+1∼P (·|st,at)[R(st+1) + V π
P (st+1)] − Est+1∼P ′(·|st,at)[R(st+1) + V π
P ′ (st+1)]
≤ E(st,at)∼P πb Est+1∼P (·|st,at)[R(st+1) + V π
P ′ (st+1)] − Est+1∼P ′(·|st,at)[R(st+1) + V π
P ′ (st+1)]
+ Est+1∼P (·|st,at)[V π
P (st+1) − V π
P ′ (st+1)]
≤ E(st,at)∼P πb [DTV(P (·|st, at), P ′(·|st, at)) · Vmax]
+ E(st,at)∼P πb Est+1∼P (·|st,at)[ V π
P (st+1) − V π
P ′ (st+1) ]
≤ εVmax + Est+1∼P πb [ Qπ
P (st+1, π) − Qπ
P ′ (st+1, π) ]
≤ εVmax + E(st+1,at+1)∼P πb [ Qπ
P (st+1, at+1) − Qπ
P ′ (st+1, at+1) ],
22

where the last step uses the fact that π = πb, and inductively expanding the analysis till the end proves the theorem statement.
Appendix C. Proof of Section 6
Proposition 9. If Eq.(3) holds for some t and all b ∈ B share the same sufficient statistics φ, then given any roll-in policy π′, we have
E(τt,at)∼Γπ′ [|Qπ
1-Reset(Γ,b)(τt, at) − Qπ
Γ(τt, at)|] ≤ ε · mzat x
Pπ
Γ[zt]
Pπb
Γ [zt] .
Proof. Following the proof of Proposition 4, we know that the LHS is controlled by
E(τt,at)∼Γπ′ [DTV(b(·|τt), b⋆(·|τt))] = Ezt∼Γπ′ [DTV(b(·|zt), b⋆(·|zt))],
where zt = φ(τt). Similarly, Eq.(3) gives us
ε ≥ Eτt∼Γπb [DTV(b(·|τt), b⋆(·|τt))] = Ezt∼Γπb [DTV(b(·|zt), b⋆(·|zt))].
Performing change of measure w.r.t. zt immediately completes the proof.
Appendix D. Discussion of Theorem 7
As mentioned in Footnote 9, to directly apply our analysis for observation-based selection in the second stage we require realizability, i.e., the MΓ⋆ ∈ {MΓk,bΓk }, where bΓk is the
belief state approximation selected for Γk. This does not always hold, because for Γk⋆ = Γ⋆, the selected bΓk⋆ may not be its true belief state, causing the non-realizability.
There are two fixes to this issue, both still leading to the kind of guarantee in Eq.(9): in the first fix, we can extend the analysis in Theorem 1 to handle misspecification. In the second fix, we can change the algorithm as follows:
1. Run Stage 2 with all {(Γ, b) : Γ ∈ {Γk}, b ∈ B}. This way, realizability is satisfied and we obtain the guarantee for observation-based selection.
2. When running the conditional selection algorithm for both latent state-based selection (Stage 1) and observation-based selection (Stage 2), we do not take the argmin of the score but the version space, i.e., the set of candidate conditionals that is plausible to be the true conditional. In the proof of Theorem 1, this corresponds to the set of Pi whose score is no greater than ε′/6 (see the paragraph below Eq.(16)). It is easy to see that all conditional distributions in the version space enjoy-
 the guarantee of Theorem 1.
3. For each Γ ∈ {Γk}, we pair it with each plausible belief state, and gather such pairs across {Γk}. Then, we take the intersection between this set and the version space of Stage 2. Any (Γ, b) pair in the intersection must enjoy both the guarantee of observation-based selection and that of latent state-based selection, thus satisfying the conditions of Theorem 7.
23

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:43.982Z
- **Text Length:** 60974 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 23 of 23
