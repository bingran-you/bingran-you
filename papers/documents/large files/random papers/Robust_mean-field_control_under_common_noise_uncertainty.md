# PDF Document: Laurière et al. - 2025 - Robust mean-field control under common noise uncertainty.pdf

**File Path:** Laurière et al. - 2025 - Robust mean-field control under common noise uncertainty.pdf

**Processed Date:** 2026-02-10T18:15:53.909Z

**File Size:** 1044.53 KB

**Total Pages:** 45

**Extracted Pages:** 45

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3564

**Title:** Robust mean-field control under common noise uncertainty

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

ROBUST MEAN-FIELD CONTROL
UNDER COMMON NOISE UNCERTAINTY
MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
Abstract. We propose and analyze a framework for discrete-time robust mean-field control problems under common noise uncertainty. In this framework, the mean-field interaction describes the collective behavior of infinitely many cooperative agents’ state and action, while the common noise—a random disturbance affecting all agents’ state dynamics—is uncertain. A social planner optimizes over open-loop controls on an infinite horizon to maximize the representative agent’s worst-case expected reward,-
 where worst-case corresponds to the most adverse probability measure among all candidates inducing the unknown true law of the common noise process. We refer to this optimization as a robust mean-field control problem under common noise uncertainty. We first show that this problem arises as the asymptotic limit of a cooperative N -agent robust optimization problem, commonly known as propagation of chaos. We then prove the existence of an optimal open-loop control by linking the robust mean field -
control problem to a lifted robust Markov decision problem on the space of probability measures and by establishing the dynamic programming principle and Bellman–Isaac fixed point theorem for the lifted robust Markov decision problem. Finally, we complement our theoretical results with numerical experiments motivated by distribution planning and systemic risk in finance, highlighting the advantages of accounting for common noise uncertainty.
1. Introduction
Mean-field control problems [10, 17], also known as optimal control of McKean–Vlasov dynamics, have emerged as a fundamental framework for optimizing the behavior of large populations of cooperative agents. By considering a social planner or central controller managing an infinite (or very large) number of homogeneous agents, mean-field control problems capture a wide range of scenarios including in economics and finance (e.g., [16,21,33,36]), and robotics (e.g., [25,31,48,52]. One significant ext-
ension of the mean-field control paradigm is the inclusion of common noisea random disturbance affecting the dynamics of all agents (e.g., [22,26,27,57,58,64]). This feature has become prominent because it captures systemic, correlated randomness (such as macroeconomic shocks or environmental disturbances) that affects the entire population simultaneously. In particular, accounting for common noise enhances the realism of mean-field control problems’ applications in financial engineering, includin-
g portfolio optimization, optimal liquidation, or systemic risk (e.g., [2, 18, 62]), as well as in economics, including contract theory or the production of exhaustible resources (e.g., [3, 32, 39]). However, mean-field control problems with common noise inevitably face a key challenge: model uncertainty. When a social planner implements a mean-field control problem with common noise,
Date: November 7, 2025. Key words: mean-field control, common noise uncertainty, robust optimization, propagation of chaos, Markov decision process, dynamic programming. Funding: M. Laurière acknowledges the support of the grant “AI-driven Initiative to Promote Research Paradigm Reform and Empower Discipline Advancement.” Computing resources were provided by NYU Shanghai HPC. A. Neufeld acknowledges the support of the MOE AcRF Tier 2 Grant MOE-T2EP20222-0013. K. Park acknowledges the support of th-
e National Research Foundation of Korea (grant DOI: RS-2025-02633175).
1
arXiv:2511.04515v1 [math.OC] 6 Nov 2025

2 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
it is likely that there is a margin for potential inaccuracies in the model parameters or distributions governing the common noise process. Crucially, because the common noise process affects all agents simultaneously, even small modeling errors in the common noise process can have widespread impact across our prediction of the system’s evolution or our computation of the optimal control. This motivates the need for a robust framework—also known as the worst-case or Knightian approach (e.g., [23, -
29, 37, 38])—in which the social planner seeks an optimal policy that performs robustly under uncertain dynamics of the common noise. In this article, we aim to propose and analyze a discrete-time robust mean-field control problem under common noise uncertainty. The starting point for our problem is based on the two recent works by Carmona et al. [22] and Motte and Pham [57], where infinite time-horizon discounted mean-field control problems with common noise are considered. Both two works establi-
sh the correspondence between the conditional Mckean–Vlasov dynamics for the representative agent’s state (that typically appear in mean-field control problems with common noise) and the lifted Markov decision process on the space of probability measures on the state space. This correspondence enables to articulate dynamic programming Bellman fixed point equations, leading to derive optimal open-loop (and closed-loop Markov) policies for mean-field control problems. Furthermore, [57] establishes t-
he propagation of chaos result which connects the mean-field control problem to a social planner’s optimization problem with a large but finite number of cooperative agents. This ensures that the optimal open-loop policy for the mean-field control problem can be a useful approximation of the optimal policy for such large but finite cooperative agents problems. Building on [22,57], we introduce a probabilistic framework for robust mean-field control problems under common noise uncertainty. This fra-
mework is designed to encompass both the finite cooperative N -agent system and the conditional McKean–Vlasov dynamics when the common noise distribution is unknown (see Section 2.2). In contrast with the fixed probability measure setting in [22,57] which induces a single law for the common noise, we construct a set of probability measures, allowing the common noise to have multiple laws within a prescribed uncertainty measures set (see Definition 2.2). This extension is inspired by the robust Mar-
kov decision framework of [50, 59, 61], which enables to specify a wide range of different uncertainty sets of probability measures and associated transition kernels. Using this framework, we establish three main results. First, we prove a propagation of chaos result linking the finite N -agent robust control problem to its mean-field (infinite-agent) counterpart under common noise uncertainty. Under mild regularity conditions on the system and reward functions, we show that the N -agent robust co-
ntrol problem converges to the robust mean-field control problem as N → ∞ (see Theorem 2.9). This implies that the optimal open-loop policy obtained from the robust mean-field control problem serves as an approximately optimal policy for the finitely many N -agent robust control problem. The proof is based on the Wasserstein convergence rates for empirical measures [14, 35]. In this regard, our propagation of chaos result can be viewed as a robust analog of the results in [57, 58]. Second, we esta-
blish a dynamic programming principle for the robust mean-field control problem by lifting it to the space of probability measures on the state space. To that end, we show that the conditional McKean–Vlasov state dynamics under common noise uncertainty corresponds to a lifted robust Markov decision process on the space of probability measures (see Proposition 2.12). This correspondence allows us to derive the Bellman–Isaacs fixed-point equations for the value function in the lifted space of distri-
butions. The proof relies on Berge’s maximum theorem to construct local (i.e., one time-step) optimal control and worst-case common noise measure (see Proposition 2.15), and the Banach fixed-point theorem to establish the existence and uniqueness of a fixed point for the Bellman–Isaacs operator (see Proposition 2.16). We then construct an optimal open-loop policy for the robust mean-field control problem by aggregating the local

3
optimizers (see Theorem 2.21). A crucial toolkit in this construction is the use of an extrinsic randomization source with an atomless distribution (see Assumption 2.18), which also appears in [22]. This randomization not only facilitates the implementation of randomized policies in a decentralized manner but also ensures that each agent’s distribution of controls aligns with the law of optimal policy prescribed by the social planner. While the existence of a randomization source is not explicitly-
 assumed in [57], a randomization hypothesis on the initial information is imposed therein, which in turn induces a structure from which a randomization source naturally exists; see Remark 3.1 therein. Third, we introduce a closed-loop Markov policy formulation of the robust mean-field control problem. We establish the equivalence between open-loop and closed-loop formulations (Corollary 2.28) and obtain an optimal closed-loop Markov policy. This result can be considered as a robust analog of the -
main results in [22]. Finally, in order to illustrate all our theoretical results, we provide two numerical examples (see Section 3). In the first example, inspired by Example 1 of [22], the central planner’s goal is to steer the population distribution towards a target distribution. In the second example, inspired by the systemic risk model of [18], the central planner’s goal is to stabilize a financial system and avoid that too many institutions default. In both examples, we underscore the impor-
tance and benefits of incorporating common noise uncertainty into mean-field control frameworks.
Related literature. Classic mean-field control problems have been described predominantly in continuous time (see, e.g., [8, 11, 15, 24, 28, 33, 36, 51, 64–66, 68]). Several works [26, 27, 34, 49] have rigorously established the connection between mean-field control and large systems of controlled processes in continuous time settings. Notably, robust mean-field control problems in continuous-time settings, involving uncertainty in the drift or volatility of the common noise, have been investigate-
d in [45,69,70]. The conceptual structure of the arguments in [45] bears certain similarities to ours: in the paper, a centralized control problem under volatility uncertainty of the common noise (analogous to our lifted robust Markov decision problem) is tackled, and then decentralized strategies for the population of agents (analogous to our construction of optimal open-loop policies for the robust mean-field control problem) are obtained. Nevertheless, there are key differences. In particular, -
the continuoustime works rely on the theory of forward-backward stochastic differential equations, which are not suitable in the discrete-time setting we consider. Instead, our analysis requires a measuretheoretic construction of optimal controls and a derivation of the dynamic programming principle on the space of probability measures. Most notably, while the aforementioned works do not establish a propagation of chaos result, our article provides the first such result under common noise uncertai-
nty. Several works on mean-field game and control problems have introduced robustness via min–max formulations (e.g., [19, 20, 44, 54, 74]). However, these models do not consider common noise but idiosyncratic noise which is uncertain. In contrast, our framework explicitly accounts for common noise uncertainty, which introduces fundamentally different technical and conceptual challenges. While extending the model to include both idiosyncratic and common noise uncertainty is of clear interest, such-
 an extension leads to significant technical obstacles that invalidate key arguments used in establishing the propagation of chaos result and the lifted dynamic programming principle. This is beyond the scope of the present paper, and we leave it for future work. Moving away from the above continuous time settings to discrete time settings, some works [40–42, 51, 63] have explored dynamic progarmming principles for discrete time mean-field control problems, but without considering common noise. Mo-
re relevant to our setting, recent worksincluding those we benchmark against [22, 57] and others such as [4, 9, 58]—have investigated

4 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
discrete-time mean-field control problems with common noise. Notably, a recent work [50] by two of the authors of the present article proposes a framework for discrete time mean-field Markov games under model uncertainty. In contrast, we focus on a cooperative control setting (as opposed to a game-theoretic equilibrium) and consider the model uncertainty in the law of the common noise process. This leads to a different optimization structure and our lifted dynamic programming formulation on the sp-
ace of measures is specifically tailored to this social control setting. Furthermore, our propagation of chaos result has no analogue in [50], whose results concern approximate Nash equilibria rather than centralized performance guarantees. Finally, for completeness, we note that a substantial body of work has focused on robust Markov decision processes under model uncertainty, which also underpin our lifted dynamic programming result on the space of probability measures (see, e.g., [5,7,30,53,55,-
56,59–61,71–73] in the optimal control literature, and [43] in the economics literature).
2. Main results
2.1. Notation and preliminaries. Throughout this article, we work with Polish spaces. If X is such a space with corresponding metric dX , we denote by BX its Borel σ-algebra and by P(X) the set of all Borel probability measures on X. Let Cb(X; R) be the set of all bounded and continuous functions f : X → R, endowed with the supremum norm ∥f ∥∞ := supx∈X |f (x)| where | · | denotes the Euclidean norm. For any L ≥ 0, we denote by Lipb,L(X; R) ⊂ Cb(X; R) the set of all L-Lipschitz continuous function-
s. We equip P(X) with the topology induced by weak convergence, i.e., for any μ ∈ P(X) and any (μn)n∈N ⊆ P(X), we have
μn ⇀ μ as n → ∞ ⇔ nli→m∞
Z
X
f (x)μn(dx) =
Z
X
(2.1) f (x)μ(dx) for any f ∈ Cb(X; R).
If X is compact, then the weak topology given in (2.1) is equivalent to the topology induced by the 1-Wasserstein distance WP(X)(·, ·) which we recall to be the following: For any μ, μˆ ∈ P(X), denote by CplX×X (μ, μˆ) ⊂ P(X × X) the subset of all couplings with marginals μ, μˆ. Then the 1-Wasserstein distance between μ and μˆ is defined by
WP(X)(μ, μˆ) := inf
Γ∈CplX×X (μ,μˆ)
Z
X ×X
dX (x, y)Γ(dx, dy).
For each t ∈ N, we use the abbreviation Xt := X × · · · × X for the t-times Cartesian product of the set X. Given a sequence (x0, . . . , xt) ∈ Xt+1 and 0 ≤ s ≤ t, we use the following abbreviation xs:t := (xs, . . . , xt). Then we endow Xt+1 with the corresponding product topology induced by the following metric: for every x0:t, x ̃0:t ∈ Xt+1,
dXt+1 (x0:t, x ̃0:t) :=
t
X
i=0
dX (xi, x ̃i).
The same convention applies to a finite Cartesian product of (possibly different) Polish spaces. For two Polish spaces X and Y , the term ‘kernel’ refers to a Borel measurable map λ : X ∋ x 7→ λ(dy|x) ∈ P(Y ). For every μ ∈ P(X) and kernel λ, we write μ ˆ⊗ λ ∈ P(X × Y ) for the measure given by: for every B ∈ BX×Y , μ ⊗ˆ λ(B) := R
X×Y 1{(x,y)∈B}λ(dy|x)μ(dx). Moreover for every ν ∈ P(Y ), we write μ ⊗ ν ∈ P(X × Y ) for the product measure. Finally, given μ ∈ P(X) we use the notation Lμ(Z) for the law of a random variable Z under μ and use Lμ(Z|Y) for the conditional law of Z given a random variable Y under μ. The same convention applies to a σ-field. We denote by δx ∈ P(X) the Dirac measure at the point x ∈ X.

5
2.2. Propagation of chaos under common noise uncertainty. In this section, we specify what we mean by the discrete-time N -agent model and mean-field control (MFC) model under common noise uncertainty. We then establish the convergence of the N -agent model to the MFC model as the number of agents N goes to infinity. To that end, we begin by defining a canonical space for the mean-field models with infinitely many indistinguishable agents. Denote by G the initial information space and by Θ the ran-
domization source space. Moreover denote by E and E0 idiosyncratic and common noise spaces, respectively. On the space defined by
Ω :=
(
ω := (gi)i∈N, (θi
t)t≥0,i∈N, (ei
t)t≥1,i∈N, (e0
t )t≥1 :
(gi, θi
t) ∈ G × Θ, for t ≥ 0, i ∈ N;
(ei
t, e0
t ) ∈ E × E0, for t ≥ 1, i ∈ N
)
,
we denote, for every ω ∈ Ω,
γi(ω), θi
0(ω) := (gi, θi
0) ∈ G × Θ i ∈ N,
θi
t(ω), εi
t(ω) := (θi
t, ei
t) ∈ Θ × E t ≥ 1, i ∈ N,
ε0
t (ω) := e0
t ∈ E0 t ≥ 1,
(2.2)
so that γi and (θit)t≥0 represent the initial state information of agent i ∈ N and her randomization source process, respectively. Moreover, (εit)t≥1 represents her idiosyncratic noise process and (εt0)t≥1 represents the common noise process for all agents. In what follows, we describe a set of probability measures on the space Ω, which captures model uncertainty in the common noise process.
Definition 2.1 (Filtrations). Consider the following filtrations: for each i ∈ N
· F0 := (Ft0)t≥0 is given by Ft0 := σ(ε01:t) for all t ≥ 1 with F00 = {∅, Ω}. · Fi := (Fti)t≥0 is given by F0i := σ(γi) and Fti := σ(γi, θi0:t−1, εi1:t, ε01:t) for all t ≥ 1. · Gi := (Gti)t≥0 is given by Gti := Fti ∨ σ(θit) for all t ≥ 0 so that Fi ⊆ Gi.
Here Ft0 represents the common noise information shared by all agents at time t. Both Fti and Gti represent the information of agent i at time t, where Gti includes the current randomization source θit, while Fti does not.
Definition 2.2 (Measures). Fix λγ ∈ P(G), λθ ∈ P(Θ), and λε ∈ P(E).
(i) Let P0 ⊆ P(E0) be a non-empty subset of Borel probability measures on E0. Then denote by K0 the set of all (pt)t≥1 consisting of a measure and sequence of kernels such that
p1 ∈ P0; pt : (E0)t−1 ∋ e0
1:t−1 7→ pt(de0
t |e0
1:t−1) ∈ P0 for all t ≥ 2,
inducing model uncertainty in the law of the common noise process (εt0)t≥1. (ii) Denote by Q ⊆ P(Ω) the subset of all Borel probability measures P on Ω induced by some (pt)t≥1 ∈ K0 in the sense that for every B0 ∈ W
i∈N G0i and B1 ∈ W
i∈N G1i
P (γi, θi
0)i∈N ∈ B0 = Qˆ0(B0), P ((γi, θi
0:1, εi
1)i∈N, ε0
1) ∈ B1 = (Qˆ0 ⊗ Qˆp1 )(B1),
where
Qˆ0 (dgi, dθi
0)i∈N := ⊗
i∈N
(λγ ⊗ λθ)(dgi, dθi
0) ∈ P (G × Θ)N
Qˆp1 (dθi
1, dei
1)i∈N, de0
1 := ⊗
i∈N
(λθ ⊗ λε)(dθi
1, dei
1) p1(de0
1) ∈ P (Θ × E)N × E0 ,
whereas for every t ≥ 2 and Bt ∈ W
i∈N Gti
P (γi, θi
0:t, εi
1:t)i∈N, ε0
1:t ∈ Bt = (Qˆ0 ⊗ Qˆp1 ⊗ˆ Qˆp2 ˆ⊗ · · · ⊗ˆ Qˆpt )(Bt),

6 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
where Qˆpt : (E0)t−1 ∋ e01:t−1 7→ Qˆpt ((dθti, deit)i∈N, det0|e01:t−1) ∈ P((Θ × E)N × E0) is defined by
Qˆpt (dθi
t, dei
t)i∈N, de0
t |e0
1:t−1 := ⊗
i∈N
(λθ ⊗ λε)(dθi
t, dei
t) pt(de0
t |e0
1:t−1).
Remark 2.3. By Ionescu–Tulcea’s theorem (see, e.g., [46, Theorem 6.17]), the set Q given in Definition 2.2 is well-defined and the following hold: for every P ∈ Q w.r.t. some (pt)t≥1 ∈ K0
(i) (γi)i∈N, (θit)t≥0,i∈N, (εit)t≥1,i∈N, and (εt0)t≥1 are mutually independent. (ii) (γi)i∈N is independent and identically distributed (i.i.d.) with law λγ. Moreover, (θit)t≥0,i∈N is i.i.d. with law λθ, and (εit)t≥1,i∈N is i.i.d. with law λε. (iii) ε01 is independent of W
i∈N G0i with law p1, whereas for every t ≥ 2 εt0 is conditionally independent of W
i∈N Gti−1 given Ft0−1 (see [46, Lemma 6.9]), satisfying
LP(ε0
t |F 0
t−1) = pt( · |ε0
1:t−1) P-a.s.
We note that when P0 is a singleton (i.e., without uncertainty), the resulting probabilistic framework coincides with the setting in [22, Section 2.1.2] and is also similar to the one in [57, Section 2].
We introduce a dynamical system of mean-field models with indistinguishable N -agents under common noise uncertainty and define the corresponding robust optimization problem. To this end, let us introduce the following elementary components:
Definition 2.4. Let S and A be nonempty compact Polish spaces, representing the state and action spaces, respectively.
(i) F : S × A × P(S × A) × E × E0 → S is a Borel measurable transition function describing the dynamics of each of the N -agents as well as the mean-field model. (ii) r : S × A × P(S × A) → R is a Borel measurable one-step reward function. (iii) β ∈ [0, 1) is a discount factor.
Definition 2.5 (N -agent model). Recall that for each i ∈ N, F0i = σ(γi) (see Definition 2.1). Denote for every i ∈ N by L0
Fi
0
(S) the set of all F0i measurable random variables with values in S.
(i) Denote by Π the set of all open-loop policies (πt)t≥0 in the sense that πt : G × Θt+1 × Et × (E0)t → A is a Borel measurable function for all t ≥ 0. Given (πt) ∈ Π, the action process of agent i ∈ N is given by the open-loop control
ai,π
t := πt(γi, θi
0:t, εi
1:t, ε0
1:t) t ≥ 1, with ai,π
0 := π0(γi, θi
0).
In other words, (ai,π
t )t≥0 is a Gi adapted process (see Definition 2.1). (ii) Fix the initial state ξi ∈ L0
Fi
0
(S) of agent i. Given N ∈ N and (πt)t≥0 ∈ Π, the state and action processes of agent i = 1, . . . , N in the N -agent model under P ∈ Q are given by
(si,N,π
0 := ξi,
si,N,π
t+1 := F(si,N,π
t , ai,π
t ,1
N
PN
j=1 δ(sj,N,π
t ,aj,π
t ), εi
t+1, ε0
t+1) t ≥ 0.
(2.3)
Here we observe that both the law of the initial state and action (si,N,π
0 , ai,π
0 ) and the law of the idiosyncratic noise process (εit)t≥0 do not depend the choice of P ∈ Q (see
Definition 2.2 (iii)). In contrast, the law of (si,N,π
t , ai,π
t ) for t ≥ 1 depends on this choice, due to the model uncertainty in (εt0)t≥1. (iii) The contribution of agent i to the social planner’s gain over an infinite horizon under P ∈ Q is defined by
Ri,N,π :=
∞
X
t=0
βtr(si,N,π
t , ai,π
t ,1
N
PN
j=1 δ(sj,N,π
t ,aj,π
t )) i = 1, . . . , N.

7
Then the social planner’s worst-case expected gain under the common noise uncertainty is
J N,π := inf
P∈Q EP[RN,π] where RN,π := 1
N
N
X
i=1
Ri,N,π ,
and the resulting N -agent optimization problem is given by V N := supπ∈Π J N,π. This problem is a robust analog of the classical N -agent optimization problem of [22, 57].
In light of the propagation of chaos argument, we expect and aim to show that the asymptotic version of the N -agent problem in Definition 2.5, as N → ∞, is given by the following:
Definition 2.6 (MFC model). For each i ∈ N, let ξi ∈ L0
Fi
0
(S) be the fixed initial state of agent i;
see Definition 2.5 (ii).
(i) Given (πt)t≥0 ∈ Π, the state process of agent i ∈ N in the infinite population model under P ∈ Q is governed by the conditional McKean–Vlasov dynamics:



si,π,P
0 := ξi,
si,π,P
t+1 := F(si,π,P
t , ai,π
t , P0
(si,π,P
t ,ai,π
t ), εi
t+1, ε0
t+1) t ≥ 0,
(2.4)
where (ai,π
t )t≥0 is the open-loop control of agent i as defined in Definition 2.5 (i), and P0
(si,π,P
t ,ai,π
t ) is the conditional joint law of (si,π,P
t , ai,π
t ) under P given the common noise
trajectory ε01:t, i.e.,
P0
(si,π,P
t ,ai,π
t ) := LP (si,π,P
t , ai,π
t )|ε0
1:t t ≥ 1
with the convention that P0
(si,π,P
0 ,ai,π
0 ) := LP((si,π,P
0 , ai,π
0 )). Analogously, for every t ≥ 1 let
P0
si,π,P
t
be the conditional law of si,π,P
t under P given the common noise trajectory ε01:t with
the convention that P0
si,π,P
0
:= LP(si,π,P
0 ).
(ii) The contribution of agent i to the social planner’s gain under P ∈ Q is defined by
Ri,π,P :=
∞
X
t=0
βtr(si,π,P
t , ai,π
t , P0
(si,π,P
t ,ai,π
t )) i ∈ N.
Then the social planner’s worst-case expected gain under the common noise uncertainty is
J π := inf
(2.5) P∈Q EP[Rπ,P], where Rπ,P := EP0 [Ri,π,P] = EP0 [R1,π,P] i ∈ N,
where EP0 [·] denotes the conditional expectation under P given (εt0)t≥0 and the quantity Rπ,P is independent of the choice of i due to the indistinguishability of agents. The resulting robust MFC problem is then defined as V := supπ∈Π J π.
The main goal of this section is to rigorously connect the N -agent model in Definition 2.5 with the MFC model in Definition 2.6. We impose the following conditions on the basic components given in Definition 2.4.
Assumption 2.7. The following conditions hold:
(i) There exists some CF > 0 such that for every s, s ̃ ∈ S, a ∈ A, Λ, Λ ̃ ∈ P(S ×A), and e0 ∈ E0
Z
E
dS F(s, a, Λ, e, e0), F(s ̃, a, Λ ̃ , e, e0) λε(de) ≤ CF dS(s, s ̃) + WP(S×A)(Λ,  ̃Λ) ,
where λε is given in Definition 2.5 (i).

8 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
(ii) There exists Cr > 0 such that for every s, s ̃ ∈ S, a ∈ A, and Λ,  ̃Λ ∈ P(S × A)
|r(s, a, Λ)| ≤ Cr, |r(s, a, Λ) − r(s ̃, a, Λ ̃ )| ≤ Cr dS(s, s ̃) + WP(S×A)(Λ,  ̃Λ) .
(iii) β is in [0, 1 ∧ (2CF)−1).
For every N ∈ N, we define the following quantity
MN := sup
t≥0
sup
π∈Π
sup
P∈Q
EP WP(S×A)
1 N
N
X
i=1
δ(si,π,P
t ,ai,π
t ), P0
(s1,π,P
t ,a1,π
(2.6) t ) ,
where for each j = 1, · · · , N , (sj,π,P
t , aj,π
t )t≥0 are the state and action processes of agent j under P in the MFC model, and for each t ≥ 0 P0
(s1,π,P
t ,a1,π
t ) is the conditional joint law of (s1,π,P
t , a1,π
t)
under P given the common noise ε01:t (see Definition 2.6). By the indistinguishability of the N agents, P0
(s1,π,P
t ,a1,π
t ) can equivalently be replaced by P0
(sj,π,P
t ,aj,π
t ) for any j ∈ N.
The following estimates on the sequence (MN )N∈N, as defined in (2.6), follow from standard applications of the non asymptotic bounds for the convergence rate of empirical measures in Wasserstein distance (see [35, Theorem 1], [14, Corollary 1.2]).
Lemma 2.8. Denote by ∆S×A ∈ [0, ∞) the diameter of S × A. Then the following hold:
(i) If S × A ⊂ Rd for some d ∈ N, then for any q > 2 there exists some constant C > 0 (that depends only on d and q) such that for every N ∈ N,
MN ≤ C∆S×A · α(N ) < ∞,
where α : N ∋ N 7→ α(N ) ∈ (0, ∞) is given as follows: α(N ) := N −1/2 for d = 1; α(N ) := N −1/2 log(1 + N ) for d = 2; α(N ) := N −1/d log(1 + N ) for d ≥ 3.
(ii) If for every δ > 0 there exist some constants kS×A > 0 and q > 2 such that the minimal number of balls with radius δ covering S × A, denoted by n(S × A, δ) ∈ N, satisfies
n(S × A, δ) ≤ kS×A ∆S×A · δ−1 q, then there exists some C > 0 (that depends only on kS×A and q) such that for every N ∈ N,
MN ≤ C∆S×A · N − 1
q < ∞.
By using Lemma 2.8, we can obtain a rate of convergence when approximating the N -agent model by the MFC model under model uncertainty in the common noise process.
Theorem 2.9. Suppose that Assumption 2.7 holds. Moreover, we assume that ∆S×A satisfies one of the two settings imposed in Lemma 2.8. Then it holds that for every N ∈ N, i = 1, . . . , N , and t ≥ 0
sup
π∈Π
sup
P∈Q
EP dS (si,N,π
t , si,π,P
(2.7) t ) = O(MN ),
sup
π∈Π
sup
P∈Q
EP WP(S×A)
1 N
N
X
j=1
δ(sj,N,π
t ,aj,π
t ), P0
(si,π,P
t ,ai,π
(2.8) t ) = O(MN ),
where O(·) is the Landau symbol. Moreover, there exists some constant C > 0 (that depends only on CF, Cr and β) such that for N ∈ N sufficiently large
sup
π∈Π
(2.9) |J N,π − J π| ≤ CMN ,
which ensures that |V N − V | = O(MN ). Consequently, any ε-optimal policy for the robust MFC problem V (see Definition 2.6) is O(ε)-optimal for the N -agent robust optimization problem V N (see Definition 2.5) if N is sufficiently large such that MN = O(ε). Conversely, any ε-optimal policy for V N is O(ε)-optimal for V if N ∈ N is sufficiently large such that MN = O(ε).

9
The proofs of Lemma 2.8 and Theorem 2.9 can be found in Section 4.
Remark 2.10. Theorem 2.9 can be viewed as a robust analog of [57, Theorem 2.1]. The overall proof roadmap follows the arguments in the reference, where the convergence rate of the empirical measure (see Lemma 2.8) plays a key role. Moreover, the Lipschitz conditions on the one-step reward and system functions in Assumption 2.7 (i), (ii) (denoted as Hf lip and HFlip therein), together with a certain condition on the discount factor (similar to Assumption 2.7 (iii)), are imposed. While our setting i-
s more rigid due to the uncertainty measures set Q, we are able to obtain the propagation of chaos result by establishing the convergence rate of the empirical measure uniformly over all probability measures P ∈ Q.
2.3. Lifted robust Markov decision processes on the space of probability measures. Theorem 2.9 shows that the robust MFC model in Definition 2.6 serves as a macroscopic approximation of the robust N -agent optimization model in Definition 2.5. By definition of the conditional McKean-Vlasov dynamics (2.4) and the social planner’s worst-case expected gain (2.5), we can without loss of generality consider only one representative agent. Accordingly, we suppress the index i ∈ N representing individual -
agents, and denote the representative agent’s components as follows: the initial information is given by γ, the randomization source process by (θt)t≥0, the idiosyncratic noise by (εt)t≥1, and the information processes by
F := (Ft)t≥0 with F0 := σ(γ) and Ft := σ(γ, θ0:t−1, ε1:t, ε01:t) for all t ≥ 1;
G := (Gt)t≥0 with Gt := Ft ∨ σ(θt) for all t ≥ 0 so that F ⊆ G,
(2.10)
see Definition 2.1. The initial state is then given by ξ ∈ L0
F0 (S). Moreover, we define by
A :=
(
a := (at)t≥0 : a is G adapted and satisfies at = πt(γ, θ0:t, ε1:t, ε01:t) for t ≥ 1
and a0 = π0(γ, θ0) w.r.t. some π ∈ Π
)
(2.11) ,
the set of open-loop controls of the representative agent (see Definition 2.5 (i) for the notation Π). Given a ∈ A, the state process of the representative agent in the infinite population model under P ∈ Q evolves according to the conditional McKean-Vlasov dynamics:
sξ,a,P
t+1 := F(sξ,a,P
t , at, P0
(sξ,a,P
t ,at), εt+1, ε0
t+1) for t ≥ 0, with sξ,a,P
(2.12) 0 := ξ,
where P0
(sξ,a,P
t ,at) is the conditional joint law of (sξ,a,P
t , at) under P given ε01:t for t ≥ 1, with the
convention that P0
(sξ,a,P
0 ,a0) := LP((sξ,a,P
0 , a0)). Here we note that (sξ,a,P
t )t≥0 is F adapted and
(P0
(sξ,a,P
t ,at))t≥0 is F0 adapted (see Lemma 4.1 (ii)).
Then the social planner’s worst-case expected gain under the common noise uncertainty is
J a(ξ) := inf
P∈Q EP[Ra,P(ξ)], where Ra,P(ξ) := EP0
∞
X
t=0
βtr(sξ,a,P
t , at, P0
(sξ,a,P
(2.13) t ,at)) .
Accordingly, the robust MFC problem of the social planner is defined by
V (ξ) := sup
a∈A
J a(ξ), ξ ∈ L0
(2.14) F0 (S).
This formulation coincides with Definition 2.6 (by suppressing the agent index i). We now show how the robust MFC problem given in (2.14) can be lifted to a robust Markov decision process (MDP) under model uncertainty in the space of probability measures. Given ξ ∈ L0
F0 (S), a ∈ A, and P ∈ Q, we define the following F0 adapted processes:
(μξ,a,P
t )t≥0 := (P0
sξ,a,P
t
(2.15) )t≥0 ⊆ P(S),

10 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
(Λξ,a,P
t )t≥0 := (P0
(sξ,a,P
(2.16) t ,at))t≥0 ⊆ P(S × A).
We refer to (2.15) and (2.16) as the lifted state and lifted action processes, respectively. Note that the lifted processes satisfy the following marginal constraint: P-a.s.,
pjS (Λξ,a,P
t ) = μξ,a,P
(2.17) t for all t ≥ 0,
where pjS : P(S × A) ∋ Λ 7→ pjS(Λ) := Λ(· × A) ∈ P(S) denotes the projection function that maps Λ onto its marginal on S. Based on this observation, we first characterize the dynamics of the lifted state processes. To that end, let us introduce some notation and functions defined on the spaces of probability measure, P(S) and P(S × A) (we refer to them as the ‘lifted’ spaces), which is convenient to characterize the dynamics and then to obtain the lifted dynamic programming principle.
Definition 2.11. Let λε ∈ P(E) be given in Definition 2.2. Moreover, let F and r be the transition function and one-step reward function, respectively, as defined in Definition 2.4 (i).
(i) Denote by
U : P(S) ∋ μ ↠ U(μ) := {Λ ∈ P(S × A) : pjS(Λ) = μ} ⊆ P(S × A)
the correspondence (i.e., a set-valued map) inducing the marginal constraint on S. Moreover, denote by gr(U) the graph of U, i.e., gr(U) := {(μ, Λ) ∈ P(S) × P(S × A) : Λ ∈ U(μ)}. (ii) Denote by F : gr(U) × E0 ∋ (μ, Λ, e0) 7→ F(μ, Λ, e0) ∈ P(S) the lifted transition function given by
F(μ, Λ, e0)(ds′) := (Λ ⊗ λε) ◦ F(·, ·, Λ, ·, e0)−1 (ds′),
i.e., the push-forward of Λ ⊗ λε ∈ P(S × A × E) by F(·, ·, Λ, ·, e0) : S × A × E → S. (iii) Let p : gr(U) × P(E0) ∋ (μ, Λ, p) 7→ p(dμ′|μ, Λ, p) ∈ P(P(S)) be a kernel defined by
p(dμ′|μ, Λ, p) := p ◦ F(μ, Λ, ·)−1 (dμ′),
i.e., the push-forward of p ∈ P(E0) by F(μ, Λ, ·) : E0 → P(S). (iv) Denote by r : gr(U) ∋ (μ, Λ) 7→ r(μ, Λ) ∈ R the lifted reward function defined by
r(μ, Λ) :=
Z
S×A
r(s, a, Λ)Λ(ds, da).
The following lemma shows that indeed (μξ,a,P
t )t≥0 given in (2.15) can be seen as an MDP on the space of probability measures.
Proposition 2.12. Let F and p be given in Definition 2.11. Let ξ ∈ L0
F0 (S), a ∈ A, and P ∈ Q
be given where P is induced by some couple (pt)t≥1 ∈ K0 (see Definition 2.2). Then the lifted state and action processes (μξ,a,P
t )t≥0 and (Λξ,a,P
t )t≥0 (see (2.15), (2.16)) satisfy for every t ≥ 0, P-a.s.
μξ,a,P
t+1 = F(pjS (Λξ,a,P
t ), Λξ,a,P
t , ε0
(2.18) t+1),
which implies that P-a.s.
LP(μξ,a,P
1 ) = p( · | pjS (Λξ,a,P
0 ), Λξ,a,P
0 , p1(·)),
LP(μξ,a,P
t+1 ) = p( · | pjS (Λξ,a,P
t ), Λξ,a,P
t , pt+1( · |ε0
1:t)) for all t ≥ 1.
(2.19)
The proof of Proposition 2.12 can be found in Section 5.

11
Remark 2.13. Let ξ ∈ L0
F0 (S), a ∈ A, and P ∈ Q be given. Note that for every t ≥ 0,
EP r(sξ,a,P
t , at, Λξ,a,P
t ) = EP EP
Z
S×A
r(s ̃, a ̃, Λξ,a,P
t )Λξ,a,P
t (ds ̃, d ̃a) F 0
t
= EP r(pjS (Λξ,a,P
t ), Λξ,a,P
t ) = EP r(μξ,a,P
t , Λξ,a,P
t ),
(2.20)
where the first equality holds by Ft0-measurability of Λξ,a,P
t (see Lemma 4.1 (ii)), the second equality follows from the definition of r (see Definition 2.11 (iv)), and the third equality follows from the marginal constraint (2.17).1 Moreover, since r is bounded and β < 1 (see Assumption 2.7), by the dominated convergence theorem we can rewrite J a(ξ) (given in (2.13)) by
J a(ξ) = inf
P∈Q EP
∞
X
t=0
βtr(μξ,a,P
t , Λξ,a,P
(2.21) t ) .
Using Proposition 2.12–particularly the MDP given in (2.19) and the representations (2.20) and (2.21) in Remark 2.13–we can view the robust MFC problem (2.14) as a robust MDP with state and action processes (μξ,a,P
t , Λξ,a,P
t )t≥0 given in (2.15) and (2.16). This leads us to consider the following Bellman-Isaacs operator T defined on Cb(P(S); R): for every V ∈ Cb(P(S); R)
T V (μ) := sup
Λ∈U(μ)
r(μ, Λ) + β inf
p∈P0
Z
P (S )
(2.22) V (μ′)p(dμ′|μ, Λ, p) μ ∈ P(S),
where P0 is given in Definition 2.2 (i), and U, r and p are given in Definition 2.11. Following the framework of the ‘local to global paradigm’ for robust MDP problems (see, e.g., [50, 60, 61]), we first aim to characterize the local (i.e., one time-step) optimizers of the Bellman–Isaacs operator T , and subsequently establish the fixed point theorem. This will then enable us to construct the global optimizers of the robust MFC problem (2.14). To that end, we impose the following conditions on the-
 basic components given in Definition 2.4. These conditions are (slightly) stronger than those in Assumption 2.7, as they contain certain regularity on the arguments in A and E0 along with others on the arguments in S and P(S × A). However, they allow us to have some useful properties on the lifted functions and mappings given in Definition 2.11, which are similar to and appear in a framework for robust MDP problems under model uncertainty (see, e.g., [50, 60, 61]).
Assumption 2.14. The following conditions hold:
(i) The subset P0 (see Definition 2.2 (i)) is compact. (ii) There is some CF > 0 such that2 for every (s, a, Λ, e0), (s ̃, a ̃, Λ ̃, e ̃0) ∈ S × A × P(S × A) × E0
Z
E
dS F(s, a, Λ, e, e0), F(s ̃,  ̃a, Λ ̃ , e, e ̃0) λε(de) ≤ CFdS×A×P(S×A)×E0 (s, a, Λ, e0), (s ̃,  ̃a,  ̃Λ, e ̃0) .
(iii) The reward function r is Lipschitz continuous, in the sense that there is some Cr > 0 such that for every (s, a, Λ), (s ̃, a ̃,  ̃Λ) ∈ S × A × P(S × A)
|r(s, a, Λ) − r(s ̃,  ̃a, Λ ̃ )| ≤ CrdS×A×P(S×A) (s, a, Λ), (s ̃,  ̃a, Λ ̃ ) .
(iv) β is in [0, 1 ∧ (2CF)−1).
1Since (μξ,a,P
t , Λξ,a,P
t ) ∈ gr(U), P-a.s., for all t ≥ 0, the term r(μξ,a,P
t , Λξ,a,P
t ) is well-defined in the P-a.s. sense.
2As noted in Section 2.1, the product space S × A × P(S × A) × E0 is endowed with the corresponding product topology induced by the following metric: for every (s, a, Λ, e0), (s ̃,  ̃a, Λ ̃ , e ̃0) ∈ S × A × P(S × A) × E0,
dS×A×P(S×A)×E0 ((s, a, Λ, e0), (s ̃, a ̃, Λ ̃ , e ̃0)) := dS (s, s ̃) + dA(a, a ̃) + WP(S×A)(Λ, Λ ̃ ) + dE0 (e0, e ̃0).
The same convention applies to S × A × P(S × A) appearing in (iii).

12 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
In the following proposition, we characterize the local optimizers of the Bellman-Isaacs operator T given in (2.22). To that end, we recall that given L ≥ 0, Lipb,L(P(S); R) ⊂ Cb(P(S); R) is the set of all L-Lipschitz continuous functions defined on P(S).
Proposition 2.15. Suppose that Assumption 2.14 (i)–(iii) are satisfied. Then the following holds: For every L ≥ 0 and every V ∈ Lipb,L(P(S); R),
(i) (Local minimizer) There exists a measurable selector p∗ : P(S × A) ∋ Λ 7→ p∗(Λ) ∈ P0 such that for every Λ ∈ P(S × A)
Z
P (S )
V (μ′)p(dμ′| pjS(Λ), Λ, p∗(Λ)) = inf
p∈P0
Z
P (S )
(2.23) V (μ′)p(dμ′| pjS(Λ), Λ, p).
(ii) (Local maximizer) There exists a measurable selector π∗ : P(S) ∋ μ 7→ π∗(μ) ∈ U(μ) satisfying that for every μ ∈ P(S)
r(μ, π∗(μ)) + β inf
p∈P0
Z
P (S )
(2.24) V (μ′)p(dμ′|μ, π∗(μ), p) = T V (μ).
We now apply the Banach fixed-point theorem (see, e.g., [6, Theorem A 3.5]) for the BellmanIsaacs operator T given in (2.22).
Proposition 2.16. Suppose that Assumption 2.14 is satisfied, and let L ≥ 2Cr/(1−2βCF). Then
it holds that T (Lipb,L(P(S); R)) ⊆ Lipb,L(P(S); R), and for every V 1, V 2 ∈ Lipb,L(P(S); R)
(2.25) ∥T V 1 − T V 2∥∞ ≤ β∥V 1 − V 2∥∞.
In particular, there exists a unique V ∗ ∈ Lipb,L(P(S); R) satisfying that T V ∗ = V ∗. Moreover, it
holds for every V ∈ Lipb,L(P(S); R) that V ∗ = limn→∞ T nV .
The proofs of Propositions 2.15 and 2.16 can be found in Section 5.
2.4. Verification theorem. This section aims to establish that the fixed point V ∗ of the BellmanIsaacs operator T (see Proposition 2.16) coincides with the robust MFC problem V of the representative agent (see (2.14)) in the sense that3 V (ξ) = V (L (ξ)) for all ξ ∈ L0
F0 (S).
To that end, we first construct a measure in Q for each open-loop control in A (see (2.11)), using the local minimizer from Proposition 2.15 (i). This will later be used in the verification theorem to derive a worst-case measure in Q by suitably choosing an optimal control in A.
Lemma 2.17. Suppose that Assumption 2.14 is satisfied. Let ξ ∈ L0
F0 (S) be the initial state of the
representative agent. Then for every a ∈ A, there exists Pξ,a ∈ Q induced by some (pξ,a
t )t≥1 ∈ K0
(see Definition 2.2) such that Pξ,a-a.s.
LPξ,a (ε0
1) = pξ,a
1 = p∗(Λξ,a
0 ),
LPξ,a (ε0
t+1 |F 0
t ) = pξ,a
t+1( · |ε0
1:t) = p∗(Λξ,a
t ) for all t ≥ 1,
(2.26)
where p∗ is the local minimizer given in Proposition 2.15 (i), Λξ,a
0 is the joint law of (sξ,a,Pξ,a
0 , a0)
under Pξ,a, and for t ≥ 1 Λξ,a
t is the conditional joint law of (sξ,a,Pξ,a
t , at) under Pξ,a given ε01:t. Consequently, we have
LPξ,a (μξ,a
t+1) = p( · pjS (Λξ,a
t ), Λξ,a
t , p∗(Λξ,a
(2.27) t )), Pξ,a-a.s., for all t ≥ 0,
where p is given in Definition 2.11, and μξ,a
t+1 is the conditional law of sξ,a,Pξ,a
t+1 under Pξ,a given ε01:t+1.
3By construction of the set Q (see Definition 2.2 (ii)), the law of ξ ∈ L0
F0 (S) is invariant w.r.t. the choice of
supporting probability measure P ∈ Q. Therefore, we can and do write L (ξ) := LP(ξ) ∈ P(S) for any P ∈ Q.

13
We now construct an open-loop control in A, using the local maximizer from Proposition 2.15 (ii). Then we will verify that this open-loop control is indeed a maximizer of the robust MFC problem given in (2.14). We impose the following condition.
Assumption 2.18. λθ ∈ P(Θ) given in Definition 2.2 is atomless.
Remark 2.19. Assumption 2.18 also appears in [22] (see Section 2.1.2). Moreover, [57] incorporates this assumption by assuming the existence of a uniform random variable that is independent of the given initial state (see Section 3 therein). This assumption is crucial for constructing an optimal control/policy from the lifted dynamic programming results presented in both references—and consequently in this article as well. In particular, we often use the following properties. Since LP(θ) = λθ for -
all P ∈ Q (see Remark 2.3 (ii)), Assumption 2.18 implies the existence of a sequence (ht)t≥0 of Borel measurable functions ht : Θ → [0, 1] such that under any P ∈ Q,
(ht(θt))t≥0 is i.i.d. with law U[0,1],
i.e., uniform distribution on [0, 1]; see [13, Theorem 9.2.2]. Since all the agents are indistinguishable, such a sequence exists for each agent i ∈ N, and we denote it by (hit)t≥0.
Lemma 2.20. Suppose that Assumptions 2.14 and 2.18 are satisfied. Let ξ ∈ L0
F0 (S) be the
initial state of the representative agent. Then there exists a∗ ∈ A such that for every P ∈ Q,
Λξ,a∗ ,P
t = π∗(μξ,a∗,P
(2.28) t ), P-a.s., for all t ≥ 0,
where π∗ is the local maximizer given in Proposition 2.15 (ii), and (μξ,a∗,P
t )t≥0 and (Λξ,a∗,P
t )t≥0
are given in (2.15) and (2.16), respectively, under (a∗, P).
We are now ready to state the verification theorem for the constructed open-loop control and probability measure in the preceding two lemmas.The proofs of the theorem and preceding lemmas are provided in Section 6.
Theorem 2.21. Suppose that Assumptions 2.14 and 2.18 are satisfied. Let L ≥ 2Cr/(1 − 2βCF)
be given, and let V ∗ ∈ Lipb,L(P(S); R) be such that T V ∗ = V ∗ (see Proposition 2.16). Moreover,
let a∗ ∈ A be such that (2.28) holds for every P ∈ Q (see Lemma 2.20). Moreover, let J a∗ and V be given in (2.13) and (2.14), respectively. Then, for every ξ ∈ L0
F0 (S) the following hold:
(i) V ∗(L (ξ)) = V (ξ), where L (ξ) ∈ P(S) is the law of ξ (see Footnote 3).
(ii) a∗ ∈ A and Pξ,a∗ ∈ Q induced by (pξ,a∗
t )t≥1 ∈ K0 satisfying (2.26), (2.27) (see Lemma 2.17)
are optimal in the sense that
V (ξ) = J a∗ (ξ) = EPξ,a∗
Ra∗ ,Pξ,a∗
(2.29) (ξ) .
Remark 2.22. As a consequence of Theorems 2.9 and 2.21, under Assumptions 2.14 and 2.18 the optimal open-loop policy π∗ ∈ Π of the robust MFC problem V (see Definition 2.6)—which can be obtained from the optimal open-loop control a∗ ∈ A in Theorem 2.21 of the representative robust MFC problem V (ξ) in (2.14)—serves as an approximate of the N -agent optimization problem V N (see Definition 2.5) when N ∈ N is sufficiently large. Lastly, we note that computing the local optimizers from the lifted dyn-
amic programming principle (given in Proposition 2.15) is crucial for deriving the optimal open-loop control of the robust MFC problem. In particular, this step involves implementation of Q-learning (or policy iteration) algorithms for the lifted dynamic programming principle and analyzing their convergence, together with the discretization error arising from of the lifted state and action spaces. While we defer these aspects to future research, in Section 3 we present some numerical examples base-
d on a value iteration type scheme to implement the lifted dynamic programming principle.

14 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
2.5. Connection with a closed-loop Markov policy framework. In this section, we introduce the notion of a closed-loop Markov policy for the robust MFC problem. In particular, following [22, Definition 10], we consider a relaxed version of the robust MFC problem in Definition 2.6, in which individual agents are allowed to sample their actions randomly according to a policy specified by the social planner. As in Sections 2.3 and 2.4, we suppress the index i ∈ N representing individual agents and con-
sider the following representation agent’s robust MFC problem with closed-loop Markov policies.
Definition 2.23. Let Q be the uncertainty measures set given in Definition 2.2. Moreover, let F, G be the filtrations given in (2.10), and let F0 be the filtration generated by the common noise.
(i) Denote by Πc the set of all closed-loop Markov policies πc := (πtc)t≥0 such that for every t ≥ 0 the kernel
πc
t : S × P(S) ∋ (s, μ) 7→ πc
t (da|s, μ) ∈ P(A)
induces a randomized action given a couple of a state and a probability measure on S. (ii) Let ξ ∈ L0
F0 (S) be the fixed initial state. Assume that for any (πc, P) ∈ Πc×Q, the state and
action processes (sξ,πc,P
t , aπc,P
t )t≥0 for the representative agent in the inifinite population
model satisfy that4 (sξ,πc,P
t )t≥0 is F-adapted, (aπc,P
t )t≥0 is G-adapted, and they satisfy
sξ,π c ,P
t+1 := F(sξ,πc,P
t , aπc,P
t , P0
(sξ,πc ,P
t ,aπc,P
t ), εt+1, ε0
t+1) for t ≥ 0, with sξ,πc,P
0 := ξ,
LP(aπc,P
t |Ft) = πc
t ( · |sξ,πc,P
t , P0
sξ,πc ,P
t
) P-a.s. for t ≥ 0,
(2.30)
where P0
(sξ,πc ,P
t ,aπc,P
t ) is the conditional joint law of (sξ,πc,P
t , aπc,P
t ) under P given ε01:t for t ≥ 1,
with the convention that P0
(sξ,πc ,P
0 ,aπc,P
0 ) := LP((sξ,πc,P
0 , aπc,P
0 )). In analogy, P0
sξ,πc ,P
t
is the
conditional law of sξ,πc,P
t under P given ε01:t for t ≥ 1 with P0
sξ,πc ,P
0
:= LP(sξ,πc,P
0 ).
(iii) Accordingly, the robust MFC problem under closed-loop Markov policies is
V c(ξ) := sup
π c ∈Πc
J πc (ξ), ξ ∈ L0
(2.31) F0 (S),
where J πc (ξ) is defined as J πc (ξ) := infP∈Q EP[Rπc,P(ξ)] with
Rπc,P(ξ) := EP0
∞
X
t=0
βtr(sξ,πc,P
t , aπc,P
t , P0
(sξ,πc ,P
t ,aπc,P
t )) .
Remark 2.24. Under Assumption 2.18, the conditional McKean-Vlasov dynamics with closedloop Markov policies, as given in Definition 2.23 (ii), are well-defined. Indeed, by using the random variable ht(θt) ∼ U[0,1] (see Remark 2.19) and the Blackwell–Dubins function ρA : P(A) × [0, 1] → A (see Lemma A.2), we can define, for any πc ∈ Πc and P ∈ Q,
aπc,P
t := ρA πc
t ( · | sξ,πc,P
t , P0
sξ,πc ,P
t
), ht(θt) t ≥ 0.
By the same arguments presented for the proof of Lemma 4.1 (ii), we note that sξ,πc,P
t is Ft measurable and P0
sξ,πc ,P
t
is Ft0 measurable. Consequently, aπc,P
t is Gt measurable by the construction
above. Furthermore, since Ft is independent of θt, the property of ρA ensures that aπc,P
t satisfies the distributional constraint given in (2.30).
4We refer to Remark 2.24 for the well-posedness of (sξ,πc,P
t , aπc,P
t )t≥0 defined as in Definition 2.23 (ii).

15
We aim to show that the robust MFC problem V c given in (2.31) coincides with the open-loop robust MFC problem V given in (2.14). This equivalence will be established by demonstrating that V c(ξ) = V ∗(L (ξ)) for all ξ ∈ L0
F0 (S), where V ∗ is the fixed point of the Bellman–Isaacs operator T given in Proposition 2.16, and L (ξ) ∈ P(S) is the law of ξ (see Footnote 3). To this end, and following the approach in Section 2.3, we begin by examining the dynamics of the lifted state and action processes, defined as follows: for every πc ∈ Πc and P ∈ Q,
(μξ,πc,P
t )t≥0 := (P0
sξ,πc ,P
t
)t≥0 ⊆ P(S),
(Λξ,πc,P
t )t≥0 := (P0
(sξ,πc ,P
t ,aπc,P
t ))t≥0 ⊆ P(S × A).
(2.32)
Here we note that both processes are F0 adapted (see Lemma 4.1).
Lemma 2.25. Suppose that Assumptions 2.14 and 2.18 are satisfied. Let πc ∈ Πc be given and let P ∈ Q be induced by some (pt)t≥1 ∈ K0 (see Definition 2.2). Then,
Λξ,π c ,P
t = μξ,πc,P
t ⊗ˆ πc
t ( · | ·, μξ,πc,P
(2.33) t ) P-a.s. for all t ≥ 0.
Consequently, it holds that P-a.s.
LP(μξ,πc,P
1 ) = p( · | μξ,πc,P
0 , μξ,πc,P
0 ⊗ˆ πc
0( · | ·, μξ,πc,P
0 ), p1(·)),
LP(μξ,πc,P
t+1 ) = p( · | μξ,πc,P
t , μξ,πc,P
t ⊗ˆ πc
t ( · | ·, μξ,πc,P
t ), pt+1( · |ε0
1:t)) for all t ≥ 1.
(2.34)
Then, as in Lemma 2.17, we construct a measure in Q for each closed-loop policy in Πc (see Definition 2.23), using the local minimizer from Proposition 2.15 (i).
Lemma 2.26. Suppose that Assumptions 2.14 and 2.18 are satisfied. For every πc ∈ Πc, there
exists Pξ,πc ∈ Q induced by some (pξ,πc
t )t≥1 ∈ K0 (see Definition 2.2) such that Pξ,πc -a.s.
LPξ,πc (ε0
1) = pξ,πc
1 = p∗(Λξ,πc
0 ),
LPξ,πc (ε0
t+1 | F 0
t ) = pξ,πc
t+1 (· | ε0
1:t) = p∗(Λξ,πc
t ) for all t ≥ 1,
(2.35)
where p∗ is the local minimizer in Proposition 2.15 (i), Λξ,πc
0 is the joint law of (sξ,πc,Pξ,πc
0 , aπc,Pξ,πc
0)
under Pξ,πc , and for t ≥ 1 Λξ,πc
t is the conditional joint law of (sξ,πc,Pξ,πc
t , aπc,Pξ,πc
t ) under Pξ,πc given ε01:t. Consequently, we have
LPξ,πc (μξ,πc
t+1 ) = p( · | pjS (Λξ,πc
t ), Λξ,πc
t , p∗(Λξ,πc
(2.36) t )), Pξ,πc -a.s., for all t ≥ 0,
where p is given in Definition 2.11, and μξ,πc
t+1 is the conditional law of sξ,πc,Pξ,πc
t+1 given ε01:t+1.
The proofs of Lemma 2.25 and 2.26 are presented in Section 7.
Remark 2.27. While the construction of (pξ,πc
t )t≥1 ∈ K0 given in Lemma 2.26 proceeds inductively (as in the proof of Lemma 2.17), the arguments differ from those used therein. This is due to the fact that a closed-loop Markov policy πc ∈ Πc does not determine a fixed action process, but a randomly sampled one. For this, we rely on the Blackwell-Dubins function given in Lemma A.2 together with Remark 2.19 and some measure-theoretic arguments.
Finally, we conclude that the robust MFC problem under the closed-loop Markov policy framework coincides with the fixed point V , and hence with the robust MFC problem under the openloop policy framework.

16 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
Corollary 2.28. Suppose that Assumptions 2.14 and 2.18 are satisfied. Let L ≥ 2Cr/(1 − 2βCF)
be given, and let V ∗ ∈ Lipb,L(P(S); R) be such that T V ∗ = V ∗ (see Proposition 2.16). Define
πc,∗
loc : S × P(S) ∋ (s, μ) 7→ πc,∗
(2.37) loc( · |s, μ) := KS×A( · |s, π∗(μ), μ) ∈ P(A),
i.e., the universal disintegration kernel of π∗(μ) w.r.t. pjS(π∗(μ)) = μ (see Lemma A.3) so that
π∗(μ) = μ ⊗ˆ πc,∗
(2.38) loc( · | ·, μ).
Define πc,∗ := (πc,∗
t )t≥0 ∈ Πc by πc,∗
t := πc,∗
loc for every t ≥ 0 (i.e., stationary closed-loop Markov
policy). Moreover, let V c and J πc,∗ be given in (2.31), and let V be given in (2.14). Then, for every ξ ∈ L0
F0 (S) the following hold:
(i) V ∗(L (ξ)) = V c(ξ) = V (ξ), where L (ξ) ∈ P(S) is the law of ξ (see Footnote 3).
(ii) πc,∗ ∈ Πc and Pξ,πc,∗ induced by (pξ,πc,∗
t )t≥1 ∈ K0 satisfying (2.35), (2.36) (see Lemma 2.26)
are optimal in the sense that
V c(ξ) = J πc,∗ (ξ) = EPξ,πc,∗
Rπ c,∗ ,Pξ,πc,∗
(2.39) (ξ) .
3. Numerical examples
In this section, we apply our robust MFC framework under common noise uncertainty to illustrative examples in distribution matching and financial systemic risk, thereby emphasizing the critical role of incorporating common noise uncertainty into the analysis. In both examples, the algorithm implementing the lifted dynamic programming principle in Proposition 2.15 together with the verification theorem in Theorem 2.21 (or Corollary 2.28) builds upon the value iteration algorithm for the robust MDP -
framework of [61, Section 4.4.1].
3.1. Example 1: Distribution matching. We first consider an example inspired by Example 1 in [22], in which the goal for the central planner is to make the population distribution match a given target distribution. Common noise makes the task harder because it may randomly shift the distribution. To be specific, consider the following basic elements (recall Definition 2.4):5
• S = {1, 2, . . . , |S|} representing a one-dimensional grid world with |S| states; in the experiments, we use |S| = 7 states. • A = {−1, 0, 1}, where the actions are interpreted respectively as moving to the left, staying or moving to the right. • E = {0}, which means that there is no idiosyncratic noise. • E0 = {−1, 0, 1}, where the common noise values are interpreted as the actions but they affect the whole population.
• F : S × A × P(S × A) × E × E0 → S is given by
F(s, a, Λ, e, e0) = max(1, min(|S|, s + a + e0)),
which represents the fact that the agent’s movement is determined by her action and the common noise, and the agent remains at 1 (resp. 7) if she tries to move to the left (resp. right) of this state. • r : S × A × P(S × A) → R is given by
r(s, a, Λ) = ∥ pjS(Λ) − μ∗∥2
2=
X
s∈S
| pjS(Λ)(s) − μ∗(s)|2,
where μ∗ ∈ P(S) is a fixed target distribution which is part of the model’s definition. • β = 0.4 is the discount factor so that Assumptions 2.7 (iii) and 2.14 (iv) are satisfied.
5The code is provided for the sake of completeness at https://github.com/mlauriere/RobustMFMDP.

17
0.0 0.2 0.4 0.6 0.8 1.0 1.2 Perturbation Size
0.050
0.048
0.046
0.044
0.042
0.040
Value
NR Value (mean) Values (mean) Values ± std
Figure 1. Values achieved under ptrue when using the optimal policy for the MFC under pref (red dashed line) or the robust MFC under the uncertainty level δperturb ∈ {0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2} (blue curve) in Example 1. Shaded areas represents ± standard deviation over 8 independent runs.
For the common noise probability measure, we consider the following situation:
• The true common noise distribution ptrue ∈ P(E0) is given by
(3.1) ptrue := vtrue,1δ{ε0=−1} + vtrue,2δ{ε0=0} + vtrue,3δ{ε0=1},
with some probability vector vtrue := (vtrue,1, vtrue,2, vtrue,3) ∈ [0, 1]3, i.e., a simplex. • However, we consider that the central planner does not know this true distribution; she has estimated the common noise distribution to be approximately equal to a reference probability measure pref ∈ P(E0) with the corresponding probability vector vref ∈ [0, 1]3.
As a baseline, the central planner can learn a policy πref which is optimal for the MFC model with common noise distribution pref. Alternatively, she can solve the robust MFC problem and learn a policy πrobust which may be suboptimal for the model with pref but which performs better than πref in the true model with common noise distribution ptrue. We consider the uncertainty set P0 which consists of all perturbed measures p ∈ P(E0) of the reference measure pref, whose corresponding probability vec-
tor v ∈ [0, 1]3 is
(3.2) v := renorm(max(0, vref + vperturb)),
where vperturb ∈ R3 is a perturbation vector constructed as follows: each coordinate is sampled uniformly from [−δperturb, δperturb], with a small δperturb > 0 representing the uncertainty level. The average of the 3 coordinates is then subtracted to each coordinate to ensure that the average of vperturb over coordinates is 0. Under this construction, Assumption 2.14 (i) is satisfied. We implement the above model with: vtrue = (0.2, 0.7, 0.1), vref = (0, 1, 0) and δperturb varying between 0.0 and -
0.8. Figure 1 shows that for moderately small δperturb, the robust policy performs better than the non-robust policy. For large values of δperturb however, the robust policy yields a smaller value: being robust against a large set of possible common noise distributions prevents the policy from performing well on the true distribution. The results are averaged over 8 different runs and the plots shows the mean value and its standard deviation. Figure 2 shows three realizations of trajectories, star-
ting from random initial distributions. We display a few time steps between 0 and 20. We observe that the learnt policy uses the actions with varying proportions depending on the individual state and also depending on the current population distribution. Overall, it uses mostly action 1 (resp. −1) when the state is below (resp. above) the middle state because the target distribution is centered around the middle state.

18 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
0.0
0.2
0.4
0.6
0.8
1.0
Sim 1 Distribution
t=0 Current Target
t = 1 t = 2 t = 5 t = 10 t = 15 t = 20
0.0
0.2
0.4
0.6
0.8
1.0
Policy
a=-1 a=0 a=1
0.0
0.2
0.4
0.6
0.8
1.0
Sim 2 Distribution
t = 0 t = 1 t = 2 t = 5 t = 10 t = 15 t = 20
0.0
0.2
0.4
0.6
0.8
1.0
Policy
0.0
0.2
0.4
0.6
0.8
1.0
Sim 3 Distribution
t = 0 t = 1 t = 2 t = 5 t = 10 t = 15 t = 20
0246
0.0
0.2
0.4
0.6
0.8
1.0
Policy
0246 0246 0246 0246 0246 0246
Figure 2. Three sample trajectories of the population distribution and corresponding action distribution for each state in Example 1. The target distribution to be matched is shown by dashed red lines.
0.0 2.5 5.0 7.5 10.0 12.5 15.0 17.5 20.0 Time
4
3
2
1
0
1
2
3
Cumulative Common Noise
Cumulative Sum of Common Noise over Time
Sim 1 Sim 2 Sim 3
Figure 3. The three trajectories of common noise associated with Figure 2

19
0.0 0.1 0.2 0.3 0.4 0.5 0.6 Perturbation Size
6.350
6.345
6.340
6.335
6.330
6.325
6.320
Value
NR Value (mean) Values (mean) Values ± std
Figure 4. Value achieved under ptrue when using the optimal policy for the MFC with pref (red dashed line) or the optimal policy for the robust MFC with δperturb ∈ {0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6} (blue curve) in Example 2. Shaded areas represents ± standard deviation over 8 independent runs.
The fact that the target distribution is not perfectly matched is due to the impact of the common noise, whose trajectories are displayed in Figure 3. Notice that for the second simulation, the common noise takes several positive values on time steps 17, 18 and 19, leaving little time for the population distribution to adapt and shift back to the target distribution (recall that the possible actions are {−1, 0, 1}, just as the possible common noise values).
3.2. Financial systemic risk. We now consider an example inspired by the systemic risk model proposed by [18]. In this model, the agents are financial institutions, represented by a state which is their log-reserve. They interact by borrowing and lending to each other, or to a central bank. Their evolution is impacted by a common noise which can be interpreted as macroscopic events affecting the whole economy. If a financial institution touches a given threshold, it defaults. There are two main di-
fferences between the model we present below and the original model one: first, the model of [18] was a mean field game (corresponding to non-cooperative players) while we consider a mean field control problem (corresponding to cooperative players); furthermore, the original model was written in continuous space and time whereas we consider a discrete space and time model for the sake of numerical experiments. However, the main ideas underpinning the model are similar. The central planner is to ma-
ke the population distribution match a given target distribution. To be specific, consider the following basic elements (recall Definition 2.4):
• S = {smin, smin + 1, . . . , smax}, which represents a one-dimensional grid world with |S| = smax − smin + 1 states; in the experiments, we use smin = −1, smax = 4, |S| = 5 states. • A = {−1, 0, 1}, which corresponds to lending (if negative) or borrowing (if positive) units. • E = {−1, 0, 1}, which corresponds to idiosyncratic noise. Moreover, the probaility vector of its law λε ∈ P(E) is given by (0.05, 0.9, 0.05). • E0 = {−2, −1, 0, 1, 2}, which corresponds to common noise affecting the whole -
population. • F : S × A × P(S × A) × E × E0 → S is given by
F(s, a, Λ, e, e0) = max(smin, min(smax, s + a + e + e0)) if s > smin,
and F(smin, a, Λ, e, e0) = smin, which represents the fact that the agent’s log-reserve evolution is determined by her action, the individual noise and the common noise, the agent

20 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
0.0
0.2
0.4
0.6
0.8
1.0
Sim 1 Distribution
t = 0 t = 1 t = 2 t = 5 t = 10 t = 15 t = 20
0.2
0.4
0.6
0.8
1.0
Policy
0.0
0.2
0.4
0.6
0.8
1.0
Sim 2 Distribution
t = 0 t = 1 t = 2 t = 5 t = 10 t = 15 t = 20
0.2
0.4
0.6
0.8
1.0
Policy
0.0
0.2
0.4
0.6
0.8
1.0
Sim 3 Distribution
t = 0 t = 1 t = 2 t = 5 t = 10 t = 15 t = 20
024
0.2
0.4
0.6
0.8
1.0
Policy
024 024 024 024 024 024
Figure 5. Three sample trajectories of the population distribution and corresponding action distribution for each state in Example 2.
remains at 1 (resp. 7) if she tries to move to the left (resp. right) of this state, and the agent remains stuck at s = 1 if she ever reaches this state. • r : S × A × P(S × A) → R is given by
r(s, a, Λ) = −a2 + qa(m(Λ) − s)2 − 0.5ε(m(Λ) − s)2 + (m(Λ) − starget)2,
where m(Λ) is given by m(Λ) := R
S s′ pjS(Λ)(ds′) (i.e., the first moment of the state), the
constants q, ε are non-positive and satisfy q2 ≤ ε, and starget is a target state taken equal to 2 in the experiments. The first term is a cost of borrowing / lending, the second and third terms have a mean-reverting effect, and the last term means that the regulator has a target level for the mean of the log-reserves. Here, q represents the incentive to borrowing or lending. We refer to [18] for more details. • β = 0.15 is the discount factor so that Assumptions 2.7 (iii) and 2.14 (iv) are satisf-
ied.

21
0.0 2.5 5.0 7.5 10.0 12.5 15.0 17.5 20.0 Time
6
4
2
0
2
Cumulative Common Noise
Cumulative Sum of Common Noise over Time
Sim 1 Sim 2 Sim 3
Figure 6. Three sample trajectories of common noise, associated to the three distribution trajectories presented in Figure 5.
For the common noise probability measure, we proceed as in the previous example of Section 3.1. The true common noise measure is denoted by ptrue ∈ P(E0) (as in (3.1), but now represented by a 5-dimensional probability vetor vtrue ∈ [0, 1]5). The central planner does not know this true measure and instead relies on a reference probability measure pref ∈ P(E0) with corresponding probability vector vref ∈ [0, 1]5. We then compare, in the true model with ptrue, the performance of πref (an optimal pol-
icy for the model with common noise distribution pref) and the performance of πrobust (a robust policy for pref). The uncertainty set P0 is defined as in (3.2), but adapted to the 5-dimensional setting so that Assumption 2.14 (i) also holds. We implement the above model with: vtrue = (0.1, 0.2, 0.4, 0.2, 0.1), vref = (0, 0, 1, 0, 0) and δperturb varying between 0.0 and 0.6. Figure 4 shows that for moderately small δperturb, the robust policy performs better than the non-robust policy. For large va-
lues of δperturb however, the robust policy yields a smaller value: being robust against a large set of possible common noise distributions prevents the policy from performing well on the true distribution. The results are averaged over 15 different runs and the plots shows the mean value and its standard deviation. Figure 5 shows three realizations of trajectories, starting from random initial distributions. We display a few time steps between 0 and 20. We observe that the learnt policy is pure a-
t the agent level, meaning that in each state, the agent uses one action with probability 1. In fact, the agent uses actions that tend to make the state move towards state 2 or 3. The distribution concentrates (but not completely due to the idiosyncratic noise which tends to make the agent spread). Moreover, the peak is not always at state 2 or 3 due to the impact of the common noise, whose trajectories are displayed in Figure 6.
4. Proof of results in Section 2.2
We begin by verifying the measurability of the state dynamics appearing in both models. We recall the filtrations given in Definition 2.1.
Lemma 4.1. For any π ∈ Π and P ∈ Q, the following statements hold:
(i) For every N ∈ N, i = 1, . . . , N , and t ≥ 0, si,N,π
t given in (2.3) is WN
j=1 F j
t measurable.
(ii) For every i ∈ N and t ≥ 0, si,π,P
t in (2.4) is Fti measurable, and both P0
(si,π,P
t ,ai,π
t ) and
P0
si,π,P
t
are Ft0 measurable.
Proof. We start proving (i). Let N ∈ N and i = 1, . . . , N be given. The statement is shown via an induction over t ≥ 0: Since si,N,π
0 = ξi ∈ L0
Fi
0
(S) (see Definition 2.5), the claim for t = 0 holds.
Now assume that the induction claim holds for some t ≥ 0. Note that si,N,π
t+1 satisfies
si,N,π
t+1 = F(si,N,π
t , ai,π
t ,1
N
PN
j=1 δ(sj,N,π
t ,aj,π
t ), εi
t+1, ε0
t+1)

22 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
where the first three terms are (WN
j=1 Gj
t ) measurable because of the induction assumption and the
definition of the open-loop control αi,π
t in Definition 2.5 (i), and the fact that WN
j=1 F j
t ⊂ WN
j=1 Gj
t.
Hence by the Borel measurability of F, si,N,π
t+1 is (WN
j=1 F j
t+1) measurable (see Definition 2.1). By the induction hypothesis, the statement in (i) holds for all t ≥ 0.
The part (ii) is also shown via an induction over t given any i ∈ N. Since si,π,P
0 = ξi ∈ L0
Fi
0
(S)
(see Definition 2.6), si,π,P
0 is F0i measurable. Moreover, since F00 is trivial, both P0
(si,π,P
0 ,ai,π
0 ) and
P0
si,π,P
0
are Ft0 measurable obviously.
We assume that the claim holds for some t ≥ 0. Note that si,π,P
t+1 satisfies
si,π,P
t+1 = F(si,π,P
t , ai,π
t , P0
(si,π,P
t ,ai,π
t ), εi
t+1, ε0
t+1),
where the first three terms are Gti measurable because of the induction assumption and the fact
that Ft0 ⊂ Gti. Hence by the Borel measurability of F, si,π,P
t+1 is Fti+1 measurable (see Definition 2.1).
Moreover, since ai,π
t+1 is Gti+1 measurable and (γi, θi0:t+1, εi1:t+1) is independent of ε01:t+1 (see Remark 2.3 (i)), we apply Lemma A.1 (ii) to have that both P0
(si,π,P
t+1 ,ai,π
t+1) and P0
si,π,P
t+1
are Ft0+1
measurable. By the induction hypothesis, the statement in (ii) holds. □
4.1. Proof of Lemma 2.8. We start proving (i). Let q > 2 be given. Note that by Lemma 4.1 (ii),
the definition of open-loop controls (see Definition 2.5 (i)), and recalling that Fi ⊂ Gi for any i ∈ N
(si,π,P
t , ai,π
t ) is Gti measurable. Moreover, since the private components (γi)i∈N, (θit)t≥0,i∈N, and (εit)t≥1,i∈N are mutually independent (see Remark 2.3 (i)) and all agents are indistinguishable, it holds for every t ≥ 0, π ∈ Π, and P ∈ Q that (si,π,P
t , ai,π
t )i∈N is (conditionally) i.i.d. given the common noise information Ft0 with law P0
(s1,π,P
t ,a1,π
t ). Therefore, it follows from [35, Theorem 1] that
EP0 h
WP(S×A) 1
N
PN
i=1 δ(si,π,P
t ,ai,π
t ), P0
(s1,π,P
t ,a1,π
t)
i
≤ C Kq(P0
(s1,π,P
t ,a1,π
t )) 1/qα(N ),
where C > 0 does not depends on P0 and N but on d and q, α(·) is defined as in the statment, and Kq(P0
(s1,π,P
t ,a1,π
t )) is given by
Kq (P0
(s1,π,P
t ,a1,π
t )) :=
Z
S×A
|(s, a)|q P0
(s1,π,P
t ,a1,π
t )(ds, da).
Since S × A is a compact subset of Rd, the above quantitiy is uniformly bounded by (∆S×A)q for every t ≥ 0, π ∈ Π, and P ∈ Q. Hence the estimate in part (i) holds.
Last, we prove (ii). Let q > 2 be given. In part (i), we have verified that for every t ≥ 0, π ∈ Π, and P ∈ Q, (si,π,P
t , ai,π
t )i∈N is (conditionally) i.i.d. given Ft0 with law P0
(s1,π,P
t ,a1,π
t ).
Hence, we can apply [14, Corollary 1.2] to obtain that for every t ≥ 0, π ∈ Π, and P ∈ Q
EP0 h
WP(S×A) 1
N
PN
i=1 δ(si,π,P
t ,ai,π
t ), P0
(s1,π,P
t ,a1,π
t)
i
≤c 2
q−2
2
q (kS×A) 1
q ∆S×AN − 1
q,
with some c ≤ 64/3. Therefore, we can obtain the estimate in part (ii), as claimed. □
4.2. Proof of Theorem 2.9. For notational simplicity, throuhgout this proof, denote for every N ∈ N, i = 1, . . . , N , t ≥ 0, π ∈ Π, and P ∈ Q by
ΛN,π
t := 1
N
PN
j=1 δ(sj,N,π
t ,aj,π
t ), ΛN,∞,π,P
t := 1
N
PN
j=1 δ(sj,π,P
t ,aj,π
t ), Λ ̃ i,π,P
t := P0
(si,π,P
t ,ai,π
t ).

23
Let N ∈ N and i = 1, . . . , N be given. We first prove (2.7) and (2.8). The proof uses an induction over t ≥ 0: Since si,N,π
0 = si,π,P
0 for every π ∈ Π, and P ∈ Q (see Definitions 2.5 and 2.6), the claim for t = 0 holds. Now assume that the induction claim holds true for some t ≥ 1. Let π ∈ Π and P ∈ Q be given. Since WN
j=1 F j
t ⊂ WN
j=1 Gj
t (see Definition 2.1), both si,N,π
t given in (2.3) and si,π,P
t given in (2.4) are
(
WN
j=1 Gj
t ) measurable (see Lemma 4.1). Moreover, ai,π
t is Gti measurable (see Definition 2.5 (i)).
Since εit+1 is independent of WN
j=1 Gj
t and εt0+1 (see Remark 2.3 (i), (ii)), we can have the following conditioning
EP[dS (si,N,π
t+1 , si,π,P
t+1 )] = EP[Di,P(si,N,π
t , si,π,P
t , ai,π,P
t , ΛN,π
t ,  ̃Λi,π,P
(4.1) t , e0)],
where for every (s, s ̃) ∈ S, a ∈ A, Λ, Λ ̃ ∈ P(S × A), and e0 ∈ E0
Di,P(s, s ̃, a, Λ, Λ ̃ , e0) :=
Z
E
dS F(s, a, Λ, e, e0), F(s ̃, a,  ̃Λ, e, e0) λε(de)
≤CF dS(s, s ̃) + WP(S×A)(Λ, Λ ̃ ) ,
(4.2)
where the inequality follows from Assumption 2.7 (i). On the other hand, it holds that
EP [WP (S ×A) (ΛN ,π
t ,  ̃Λi,π,P
t )] ≤ EP[WP(S×A)(ΛN,π
t , ΛN,∞,π,P
t )] + EP[WP(S×A)(ΛN,∞,π,P
t , Λ ̃ i,π,P
t )]
≤ EP[dS (si,N,π
t , si,π,P
(4.3) t )] + MN ,
where the second inequality follows from the definition of MN given in (2.6) and the fact that
WP (S ×A) (ΛN ,π
t , ΛN,∞,π,P
t )≤ 1
N
PN
j=1 dS (sj,N,π
t , sj,π,P
t ) together with the indistinguishability. Combining (4.1) with (4.2) and (4.3), we have that
EP[dS (si,N,π
t+1 , si,π,P
t+1 )] ≤ CF 2EP[dS (si,N,π
t , si,π,P
(4.4) t )] + MN .
Since the estimate (4.4) holds for any π ∈ Π and P ∈ Q, by the induction hypothesis we have that the estimate (2.7) holds for all t ≥ 0, as claimed. Moreover, since the estimate (4.3) holds for any π ∈ Π and P ∈ Q, by using (2.7) we have that the other estimate (2.8) holds for all t ≥ 0, as claimed. As N ∈ N and i = 1, . . . , N are given arbitrary, we can conclude that (2.7) and (2.8) hold for all N ∈ N, i = 1, . . . , N , and t ≥ 0.
We now prove (2.9). Note that for every N ∈ N and π ∈ Π
J N,π − J π = inf
P∈Q EP 1
N
N
X
i=1
Ri,N,π − inf
P∈Q EP 1
N
N
X
i=1
Ri,π,P
≤ sup
P∈Q
1 N
N
X
i=1
EPh
|Ri,N,π − Ri,π,P|
i
= sup
P∈Q
EPh
|R1,N,π − R1,π,P|
i
≤
∞
X
t=0
βt sup
P∈Q
EPh
r(s1,N,π
t , a1,π,
t , ΛN,π
t ) − r(s1,π,P
t , a1,π
t , Λ ̃ 1,π,P
t)
i
=: IN,π,
(4.5)
where the equalities follow from the indistinguishability and the last inequality holds because r is bounded (see Assumption 2.7 (ii)).

24 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
Moreover, by the Lipschitz continuity of r(·, a, ·) : S × P(S × A) → R for any a ∈ A (see Assumption 2.7 (ii)), for every N ∈ N and π ∈ Π
IN,π ≤ Cr
∞
X
t=0
βt sup
P∈Q
EPh
dS (s1,N,π
t , s1,π,P
t ) + WP(S×A)(ΛN,π
t ,  ̃Λ1,π,P
t)
i
≤ Cr 2
∞
X
t=0
βtδN
t + MN
1−β ,
(4.6)
where δtN := supπ∈Π supP∈Q EP[dS s1,N,π
t , s1,π,P
t ] for t ≥ 0. Since the estimate given in (4.5) coincides with that of [57, Theorem 2.1]—specifically Eq. (2.17) therein—and Assumption 2.7 (iii) ensures that 2βCr < 1, we can follow the same calculations as
in the proof of [57, Theorem 2.1] (replacing KF with Cr). This yields that P∞
t=0 βtδtN ≤ CMN for some constant C > 0 (that do not depend on N and π); see also [57, Remark 2.4]. Combining this with (4.5) and (4.6) establishes the estimate in (2.9). □
5. Proof of results in Section 2.3
5.1. Proof of Proposition 2.12. We first prove (2.18). For simplicity, denote for every t ≥ 0 by
μt := μξ,a,P
t , Λt := Λξ,a,P
t , νt+1 := LP(ε0
t+1|F 0
(5.1) t ).
Since μt+1 is Ft0+1 measurable, it is sufficient to show that for any bounded Borel measurable
functions gˆ : (E0)t+1 → R and fˆ : S → R,
EP[gˆ(ε0
1:t+1)fˆ(sξ,a,P
t+1 )] = EP gˆ(ε0
1:t+1)
Z
S
fˆ(s′)F(pjS(Λt), Λt, ε0
(5.2) t+1)(ds′) ,
where we note that (pjS(Λt), Λt) ∈ gr(U) (see Definition 2.11 (i)). Note that by Remark 2.3 (i) and (ii), εt+1 is independent of ε01:t+1, st, at, P0
(st,at) (since they
are all Gt ∨ σ(εt0+1) measurable) with LP(εt+1) = λε. Moreover, by (2.12) and Fubini’s theorem
(noting that gˆ and fˆ are both bounded)
EP[gˆ(ε0
1:t+1)fˆ(sξ,a,P
t+1 )] = EP EPh
gˆ(ε0
1:t+1)fˆ(F(sξ,a,P
t , at, Λt, εt+1, ε0
t+1)) e = εt+1
i
=
Z
E
EP gˆ(ε0
1:t+1)fˆ(F(sξ,a,P
t , at, Λt, e, ε0
t+1)) λε(de) =: I .
Note that ε01:t, sξ,a,P
t , at, and Λt are all Gt measurable. Since εt0+1 is conditionally independent of Gt given Ft0 (see Remark 2.3 (iii)), by definition of νt+1 (see (5.1))
I=
Z
E
EP EP
Z
E0
gˆ(ε0
1:t, e0)fˆ F(sξ,a,P
t , at, Λt, e, e0) νt+1(de0) F 0
t λε(de)
=
Z
E
EP
Z
E0
gˆ(ε0
1:t, e0)EPhfˆ(F(sξ,a,P
t , at, Λt, e, e0)) F 0
t
i
νt+1(de0) λε(de) =: II .
Moreover by definition of Λt (see (5.1)) and Fubini’s theorem
II =
Z
E
EP
Z
E0
gˆ(ε0
1:t, e0)
Z
S×A
fˆ(F(s, a, Λt, e, e0))Λt(ds, da)νt+1(de) λε(de)
= EP gˆ(ε0
1:t+1)
Z
S×A×E
fˆ(F(s, a, Λt, e, ε0
t+1))Λt(ds, da)λε(de) .

25
By definition of F (see Definition 2.11 (ii)), the last term above is equal to the second term given in (5.2), as claimed.
We now prove (2.19). Note that by Remark 2.3 (iii) (νt)t≥0 given in (5.1) satisfies P-a.s.
ν1 = p1, νt = pt(·|ε0
1:t−1) for all t ≥ 2,
where (pt)t≥1 ∈ K0 induces the measure P ∈ Q. Let t ≥ 1. It is sufficient to show that for any bounded Borel measurable function f ̃ : P(S) → R
EP[f ̃(μt+1)] = EP
Z
P (S )
(5.3) f ̃(μ′)p dμ′| pjS(Λt), Λt, νt+1 .
By (2.18), we have μt+1 = F(pjS(Λt), Λt, εt0+1) P-a.s.. Moreover, since εt0+1 is conditionally independent of (pjS(Λt), Λt) given Ft0 (as Λt is Gt measurable) with LP(εt0+1|Ft0) = νt+1, it follows that
EP[f ̃(μt+1)] = EPh
EP f F pjS(Λt), Λt, ε0
t+1 F 0
t
i
= EP
Z
E0
f F pjS(Λt), Λt, e0 νt+1(de0) .
By definition of p (see Definition 2.11 (iii)), the claim (5.3) holds. For the case t = 0, note that LP(ε01) = p1 and Λ0 ∈ P(S × A) is deterministic. Thus, it is straightforward to verify that (2.19) holds also for t = 0. This completes the proof. □
5.2. Proof of Proposition 2.15. In what follows, we often make use of the following coupling result along with the continuity of the projection map pjS : P(S × A) → P(S).
Lemma 5.1. The following properties hold:
(i) For every (μ, ζ), (μ ̃, ζ ̃) ∈ P(S) × P(A) and every Λ ∈ CplS×A(μ, ζ), there exists a coupling Λ ̃ ∗ ∈ CplS×A(μ ̃, ζ ̃) such that
WP(S×A)(Λ, Λ ̃ ∗) ≤ WP(S)(μ, μ ̃) + WP(A)(ζ, ζ ̃).
(ii) For every Λ,  ̃Λ ∈ P(S × A), it holds that
WP(S)(pjS(Λ), pjS(Λ ̃ )) ≤ WP(S×A)(Λ, Λ ̃ ).
Thus pjS : P(S × A) → P(S) is continuous.
Proof. We start by proving (i). Let (μ, ζ), (μ ̃, ζ ̃) ∈ P(S) × P(A) and Λ ∈ CplS×A(μ, ζ). Denote by
(5.4) Γ ∈ CplS×S(μ, μ ̃), Υ ∈ CplA×A(ζ, ζ ̃)
the optimal couplings for WP(S)(μ, μ ̃) and WP(A)(ζ, ζ ̃), respectively (whose existence is ensured by [67, Theorem 4.1]). Then we define Ξ ∈ P((S × A)2) by
Ξ(ds, da, ds ̃, d ̃a) := Υζ(d ̃a|a)Λμ(da|s)Γ(ds, ds ̃),
where Λμ : S ∋ s 7→ Λμ(da|s) ∈ P(A) denotes a disintegrating kernel of Λ with respect to its marginal μ = pjS(Λ), i.e.,
(5.5) Λ(ds, da) = Λμ(da|s)μ(ds).
In a similar manner, Υζ : A ∋ a 7→ Υζ(d ̃a|a) ∈ P(A) denotes a disintegrating kernel of Υ with respect to its marginal ζ = pjA(Υ). Then, by (5.4) and (5.5), it holds that R
(s ̃,a ̃)∈S×A Ξ(ds, da, ds ̃, d ̃a) = Λ(ds, da). Moreover by
setting Λ ̃⋄(ds ̃, d ̃a) := R
(s,a)∈S×A Ξ(ds, da, ds ̃, d ̃a), we have that
 ̃Λ⋄ ∈ CplS×A(μ ̃, ζ ̃), Ξ ∈ Cpl(S×A)2 (Λ, Λ ̃ ⋄).

26 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
This implies that
inf
 ̃Λ∈CplS ×A (μ ̃,ζ ̃)
WP(S×A)(Λ, Λ ̃ ) ≤ WP(S×A)(Λ, Λ ̃ ⋄) ≤
Z
(S×A)2
dS×A((s, a), (s ̃,  ̃a))Ξ(ds, da, ds ̃, d ̃a)
=
Z
S×S
dS(s, s ̃)Γ(ds, ds ̃) +
Z
A×A
dA(a,  ̃a)Υ(da, d ̃a)
=WP(S)(μ, μ ̃) + WP(A)(ζ, ζ ̃),
where the last equality follows from the optimality of Γ and Υ (see (5.4)). Combining this with the compactness of CplS×A(μ ̃, ζ ̃) (see [67, Theorem 4.1 & Lemma 4.4]), one can choose Λ ̃ ∗ ∈ CplS×A(μ ̃, ζ ̃) so that
WP(S×A)(Λ,  ̃Λ∗) = inf
 ̃Λ∈CplS ×A (μ ̃,ζ ̃)
WP(S×A)(Λ, Λ ̃ ) ≤ WP(S)(μ, μ ̃) + WP(A)(ζ, ζ ̃),
as claimed.
Next we prove the part (ii). Let Λ, Λ ̃ ∈ P(S × A). Denote by Ξ∗ ∈ Cpl(S×A)2 (Λ,  ̃Λ) the optimal
coupling for WP(S×A)(Λ, Λ ̃). By setting h(s, a) := s for every (s, a) ∈ S × A (i.e., a projection map onto S), denote by
Ξ⋄ := Ξ∗ ◦ (h × h)−1 ∈ P(S × S)
the push-forward of Ξ∗ by the map (h × h) : (S × A)2 → S2. Clearly Ξ⋄ is in CplS×S(pjS(Λ), pjS(  ̃Λ)). Thus,
WP(S)(pjS(Λ), pjS(Λ ̃ )) ≤
Z
S×S
dS(s, s ̃)Ξ⋄(ds, ds ̃) =
Z
(S×A)2
dS(h(s, a), h(s ̃,  ̃a))Ξ∗(ds, da, ds ̃, d ̃a).
Moreover, since dS(h(s, a), h(s ̃,  ̃a)) = dS(s, s ̃) ≤ dS×A((s, a), (s ̃,  ̃a)) for every (s, a), (s ̃,  ̃a) ∈ S × A, by the optimality of Ξ∗ ∈ Cpl(S×A)2 (Λ, Λ ̃ ), the assertion for the part (ii) holds, as claimed. □
The following lemma provides useful properties of the lifted functions defined in Definition 2.11.
Lemma 5.2. Suppose that Assumption 2.14 (ii), (iii) are satisfied. Let U, F, r be given in Definition 2.11. Then the following hold:
(i) U is non-empty, compact-valued and continuous.6 (ii) F satisfies that for every (μ, Λ, e0), (μ ̃,  ̃Λ, e ̃0) ∈ gr(U) × E0,
WP(S) F(μ, Λ, e0), F(μ ̃, Λ ̃ , e ̃0) ≤ CF 2WP(S×A)(Λ, Λ ̃ ) + dE0 (e0, e ̃0) .
(iii) r is bounded. Furthermore, for every (μ, Λ), (μ ̃, Λ ̃) ∈ gr(U)
|r(μ, Λ) − r(μ ̃,  ̃Λ)| ≤ 2CrWP(S×A)(Λ, Λ ̃ ).
Proof. We start by proving (i). Both the non-emptyness and the compact-valuedness of U are clear. Indeed, for every μ ∈ P(S) one can consider the Dirac measure δaˆ(da) ∈ P(A) at some  ̃a ∈ A to obtain that δa ̃(da)μ(ds) ∈ U(μ). Therefore U(μ) is non-empty. Moreover, since pjS : P(S × A) → P(S) is continuous (see Lemma 5.1 (ii)) and P(S × A) is compact (as S × A is compact), U(μ) ⊆ P(S × A) is compact for every μ ∈ P(S), as claimed.
We now claim that U is both upper and lower hemicontinuous. Let μ ∈ P(S) be given. Recalling that gr(U) = {(μ, Λ) ∈ P(S) × P(S × A) | Λ ∈ U(μ)}, let us consider a sequence (μ(n), Λ(n))n∈N ∈ gr(U) such that μ(n) ⇀ μ as n → ∞. Since the subset gr(U) ⊆ P(S) × P(S × A)
6A correspondence between topological spaces is continuous if it is both lower- and upper-hemicontinuous (see, e.g., [1, Definition 17.2, p. 558]).

27
is compact (by the continuity of pjS : P(S ×A) → P(S) and the compactness of P(S)×P(S ×A)), there exists a subsequence
(μ(nk), Λ(nk))k∈N ⊆ (μ(n), Λ(n))n∈N s.t. (μ(nk), Λ(nk)) ⇀ (μ⋆, Λ⋆) as k → ∞
with some (μ⋆, Λ⋆) ∈ Gr(U). Combined with the limit μ(n) ⇀ μ = μ⋆, this ensures that (Λ(n))n∈N has a limit point Λ⋆ ∈ U(μ) = U(μ⋆). Thus, by [1, Theorem 17.20], U is upper hemicontinuous. It remains to show the lower hemicontinuity of U. First note that for every μ ∈ P(S) the set U(μ) ⊆ P(S × A) can be represented by
U(μ) =
[
ζ ∈P (A)
(5.6) CplS×A(μ, ζ).
Then we claim that CplS×A : P(S) × P(A) ∋ (μ, ζ) ↠ CplS×A(μ, ζ) ⊆ P(S × A) is lowerhemicontinuous. To that end, let (μ, ζ) ∈ P(S) × P(A) and Λ ∈ CplS×A(μ, ζ) be given, and consider a sequence (μ(n), ζ(n))n∈N ⊆ P(S) × P(A) such that (μ(n), ζ(n)) ⇀ (μ, ζ) as n → ∞. By Lemma 5.1, for every n ∈ N there exists Λ(n),∗ ∈ CplS×A(μ(n), ζ(n)) such that
WP(S×A)(Λ, Λ(n),∗) ≤ WP(S)(μ, μ(n)) + WP(A)(ζ, ζ(n)).
Combined with the limit (μ(n), ζ(n)) ⇀ (μ, ζ), this ensures that Λ(n),∗ ⇀ Λ as n → ∞. Thus, by [1, Theorem 17.21], CplS×A is lower hemicontinuous. Moreover, by the lower hemicontinuity of CplS×A and the representation given in (5.6), [1, Theorem 17.27] asserts that U is lower hemicontinuous. Therefore, U is continuous, as claimed.
Now we prove the part (ii). Let (μ, Λ, e0), (μ ̃, Λ ̃, e ̃0) ∈ gr(U) × P(E) × E0. For simplicity, let
μ′ := F(μ, Λ, e0), μ ̃′ := F(μ ̃,  ̃Λ, e ̃0).
(5.7)
Then, set idE : E ∋ e 7→ idE(e) := (e, e) ∈ E2. Then we denote the diagonal coupling of λε by
(5.8) Ξ1 := λε ◦ (idE(·))−1 ∈ CplE×E(λε, λε)
so that WP(E)(λε, λε) = R
E×E dE(e, e ̃)Ξ1(de, de ̃) = 0.
Furthermore, we denote the optimal coupling for WP(S×A)(Λ,  ̃Λ) (see [67, Theorem 4.1]) by
(5.9) Ξ2 ∈ Cpl(S×A)2 (Λ, Λ ̃ ).
Using the couplings Ξ1 and Ξ2, we define a coupling Ξ3 ∈ Cpl(S×A×E)2 (Λ ⊗ λε, Λ ̃ ⊗ λε) by
(5.10) Ξ3(ds, da, de, ds ̃, da ̃, de ̃) := Ξ1(de, de ̃)Ξ2(ds, da, ds ̃, d ̃a).
By the definition of F (see Definition 2.11 (ii)) and the setting (5.7), it holds that
Ξ3 ◦ F(·, ·, Λ, ·, e0) × F(·, ·, Λ ̃ , ·, e ̃0) −1 ∈ CplS×S(μ′, μ ̃′),
i.e., the push-forward of Ξ3 by F(·, ·, Λ, ·, e0) × F(·, ·,  ̃Λ, ·, e ̃0) : (S, A, E)2 → S2. Then it holds that
WP(S)(μ′, μ ̃′) ≤
Z
S×S
dS(s, s′) Ξ3 ◦ (F(·, ·, Λ, ·, e0) × F(·, ·, Λ ̃ , ·, e ̃0) −1 (ds, ds′)
=
Z
(S×A×E)2
(5.11) dS(F(s, a, Λ, e, e0), F(s ̃, a ̃,  ̃Λ, e ̃, e ̃0))Ξ3(ds, da, de, ds ̃, da ̃, de ̃)
=
Z
(S×A)2
Z
E
dS(F(s, a, Λ, e, e0), F(s ̃,  ̃a, Λ ̃, e, e ̃0))λε(de)Ξ2(ds, da, ds ̃, d ̃a) =: I,
where the last line follows from the definition of Ξ1 and Ξ3 (see (5.8), (5.10)) and by applying Fubini’s theorem (noting that F maps into the compact space S).

28 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
By Assumption 2.14 (ii) and the triangle inequality,
I ≤CF
Z
(S×A)2
dS×A (s, a), (s ̃,  ̃a) Ξ2(ds, da, ds ̃, d ̃a) + WP(S×A)(Λ,  ̃Λ) + dE0 (e0, e ̃0)
=CF 2WP(S×A)(Λ, Λ ̃ ) + dE0 (e0, e ̃0) ,
where the last equality follows from the optimality of Ξ2 (see (5.9)). Combined with (5.11), this ensures the estimates for F to hold.
We next prove the part (iii). Since S, A, and P(S × A) are all compact and r is continuous (by Assumption 2.7 (i) and Assumption 2.14 (iii)), r is bounded. We prove its 2Cr-Lipschitz continuity. Let (μ, Λ), (μ ̃, Λ ̃) ∈ gr(U) be given. Then it follows from Assumption 2.14 (iii) and the triangle inequality that for every Ξ ∈ CplS×A(Λ,  ̃Λ)
|r(μ, Λ) − r(μ ̃,  ̃Λ)| =
Z
(S×A)2
r(s, a, Λ) − r(s ̃,  ̃a, Λ ̃) Ξ(ds, da, ds ̃, d ̃a)
≤ Cr
Z
S×A
dS×A (s, a), (s ̃,  ̃a) Ξ(ds, da, ds ̃, d ̃a) + WP(S×A)(Λ, Λ ̃ ) .
By taking inifimum over all Ξ ∈ CplS×A(Λ,  ̃Λ) into the above, we can obtain the estimate for r. This completes the proof. □
Using the two preceding lemmas, we now proceed to prove Proposition 2.15.
Proof of Proposition 2.15. We start by proving (i). Let L ≥ 0 and V ∈ Lipb,L(P(S); R) be given. Set S := P(S × A) × P0. Recalling the definition of p (see Definition 2.11 (iii)), define G : S ∋ (Λ, p) 7→ G(Λ, p) ∈ R by
G(Λ, p) :=
Z
P (S )
V (μ′)p(dμ′| pjS(Λ), Λ, p) =
Z
E0
(5.12) V (F(pjS(Λ), Λ, e0))p(de0).
We claim that G is continuous. Consider a sequence (Λ(n), p(n))n∈N ⊆ S such that (Λ(n), p(n)) ⇀ (Λ⋆, p⋆) as n → ∞, with some (Λ⋆, p⋆) ∈ S. By the triangle inequality, for every n ∈ N,
G(Λ(n), p(n)) − G(Λ⋆, p⋆) ≤ G(Λ⋆, p(n)) − G(Λ⋆, p⋆) + G(Λ(n), p(n)) − G(Λ⋆, p(n))
=: I(n) + II(n) .
We will show that I(n)and II(n) vanish as n → ∞. Since V ∈ Lipb,L(P(S); R) and F is continuous (see Lemma 5.2 (ii)), it holds that g⋆(·) := V (F(pjS(Λ⋆), Λ⋆, ·)) ∈ Cb(E0; R). Combined with the limit p(n) ⇀ p⋆, this ensures that
nli→m∞ I(n) = nli→m∞
Z
E0
g⋆(e0)p(n)(de0) −
Z
E0
g⋆(e ̃0)p⋆(de ̃0) = 0.
It remains to show the limit of II(n). We use the L-Lipschitz continuity of V , the estimate of F given in Lemma 5.2 (ii), and the limits Λ(n) ⇀ Λ⋆ and p(n) ⇀ p⋆ to obtain
nli→m∞ II(n) ≤ nli→m∞
Z
E0
V F(pjS(Λ(n)), Λ(n), e0) − V F(pjS(Λ⋆), Λ⋆, e0) p(n)(de0)
≤ 2LCF nli→m∞ WP(S×A)(Λ(n), Λ⋆) = 0.
Therefore G given in (5.12) is continuous, as claimed.

29
Since P0 is compact (see Assumption 2.7 (i)) and G is continuous, an application of Berge’s maximum theorem (see, e.g., [1, Theorem 17.31]) ensures the continuity of the map J : P(S ×A) ∋ Λ 7→ J(Λ) ∈ R given by
J(Λ) := inf
p∈P0
Z
P (S )
(5.13) V (μ′)p(dμ′| pjS(Λ), Λ, p),
and the existence of the measurable selector p∗ : P(S × A) ∋ Λ 7→ p∗(Λ) ∈ P0 satisfying (2.23).
We now prove the part (ii). In analogy to the part (i), the key idea is to apply Berge’s maximum theorem. To that end, we first show that a map H : gr(U) ∈ (μ, Λ) 7→ H(μ, Λ) ∈ R defined by
(5.14) H(μ, Λ) := r(μ, Λ) + β · J(Λ),
with J : P(S × A) → R defined in (5.13) is continuous. That will be achieved in two steps.
Consider a sequence (μ(n), Λ(n))n∈N ⊆ gr(U) such that (μ(n), Λ(n)) ⇀ (μ⋆, Λ⋆) as n → ∞, with some (μ⋆, Λ⋆) ∈ gr(U). By the triangle inequality, it holds that for every n ∈ N,
|H(μ(n), Λ(n)) − H(μ⋆, Λ⋆)| ≤ |r(μ(n), Λ(n)) − r(μ⋆, Λ⋆)| + β · |J (Λ(n)) − J (Λ⋆)|
=: III(n) +β · | IV(n) |.
The limit of III(n) is straightforward. Indeed, by Lemma 5.2 (iii) and the limit Λ(n) ⇀ Λ⋆,
nli→m∞ III(n) ≤ 2Cr nli→m∞ WP(S×A)(Λ(n), Λ⋆) = 0.
It remains to show the limit of | IV(n) |. Recalling the measuarable selector p∗ defined as in the part (i), denote by p⋆ := p∗(Λ⋆) ∈ P0. Then it holds that
J (Λ⋆) =
Z
P (S )
V (μ′)p(dμ′| pjS(Λ⋆), Λ⋆, p⋆) =
Z
E0
(5.15) V (F(μ⋆, Λ⋆, e0))p⋆(de0),
noting that pjS(Λ⋆) = μ⋆ as (μ⋆, Λ⋆) ∈ gr(U).
On the other hand, as p⋆ ∈ P0 does not necessarily optimize J(Λ(n)), it holds that
J (Λ(n)) ≤
Z
P (S )
V (μ′)p(dμ′| pjS(Λ(n)), Λ(n), p⋆) =
Z
E0
(5.16) V (F(μ(n), Λ(n), e0))p⋆(de0),
with pjS(Λ(n)) = μ(n).
By (5.15) and (5.16), it holds that for every n ∈ N and every Γ ∈ CplE0×E0 (p⋆, p⋆),
IV(n) ≤
Z
E0
V (F(μ(n), Λ(n), e0))p⋆(de0) −
Z
E0
V (F(μ⋆, Λ⋆, e0))p⋆(de0)
=
Z
E 0 ×E 0
V (F(μ(n), Λ(n), e0)) − V (F(μ⋆, Λ⋆, e ̃0)) Γ(de0, de ̃0)
≤ 2LCF · WP(S×A)(Λ(n), Λ⋆) +
Z
E 0 ×E 0
dE0 (e0, e ̃0)Γ(de0, de ̃0) ,
(5.17)
where the last inequality follows from the L-Lipschitz continuity of V and the estimate of F given in Lemma 5.2 (ii). By taking infimum over Γ ∈ CplE0×E0 (p⋆, p⋆) in the last equation of (5.17), we have
(5.18) IV(n) ≤ 2LCFWP(S×A)(Λ(n), Λ⋆).
Using the same arguments as presented for (5.18), one can have the lower bound with the same constant, i.e., IV(n) ≥ −2LCFWP(S×A)(Λ(n), Λ⋆).
Combined with the limit Λ(n) ⇀ Λ⋆, this ensures that | IV(n) | vanishes as n → ∞. Therefore H given in (5.14) is continuous as claimed.

30 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
Since U is is non-empty, compact-valued, and continuous (see Lemma 5.2 (ii)) and H is continuous, an application of Berge’s maximum theorem ensures the continuity of T V (see (2.22)) and the existence of the measurable selector π∗ : P(S) ∋ μ 7→ π∗(μ) ∈ U(μ) satisfying (2.24). This completes the proof. □
5.3. Proof of Proposition 2.16. Let V ∈ Lipb,L(P(S); R). We claim that T V ∈ Lipb,L(P(S); R).
From Lemma 5.2 (iii) and the fact that V ∈ Lipb,L(P(S); R), the boundedness of T V is straight
forward. To verify the L-Lipschitz continuity of T V , let μ, μ ̃ ∈ P(S) and denote by
(5.19) D(μ, μ ̃) := T V (μ) − T V (μ ̃).
Then let π∗(μ) ∈ U(μ) be the local maximizer of T V (μ) (see Proposition 2.15 (ii)). Then, denote by ζ⋄ := pjA(π∗(μ)) ∈ P(A) the marginal of π∗(μ) ∈ U(μ) ⊂ P(S × A) on A. Since
π∗(μ) ∈ CplS×A(μ, ζ⋄), by Lemma 5.1 (i) there exists a coupling  ̃Λ⋄ ∈ CplS×A(μ ̃, ζ⋄) such that
(5.20) WP(S×A)(π∗(μ), Λ ̃ ⋄) ≤ WP(S)(μ, μ ̃).
Then since Λ ̃⋄ ∈ U(μ ̃) (which does not necessarily maximize T V (μ ̃)), it holds that
D(μ, μ ̃) ≤ r(μ, π∗(μ)) − r(μ ̃, Λ ̃⋄) + β · J(π∗(μ)) − β · J( ̃Λ⋄) =: D1(μ, μ ̃),
recalling J : P(S × A) → R defined in (5.13) (with noting that pjS(π∗(μ)) = μ and pjS(Λ ̃⋄) = μ ̃).
Let p∗(Λ ̃⋄) ∈ P0 be the local minimizers of J(Λ ̃⋄) (see Proposition 2.15 (i)). Since they do not necessarily minimize J(π∗(μ)), it holds that
D1(μ, μ ̃) ≤ r(μ, π∗(μ)) − r(μ ̃,  ̃Λ⋄) + β
Z
E0
V (F(μ, π∗(μ), e0))p∗(  ̃Λ⋄)(de0)
−β
Z
P (S )
V (F(μ ̃,  ̃Λ⋄, e ̃0))p∗(  ̃Λ⋄)(de ̃0) =: D2(μ, μ ̃),
(5.21)
recalling the definition of p given in Definition 2.11 (iii). Let Γ ∈ CplE0×E0 (p∗(Λ ̃ ⋄), p∗(Λ ̃ ⋄)) be some arbitrary. Then, by the estimates for r and F (given in Lemma 5.2 (ii), (iii)) and V ∈ Lipb,L(P(S); R), it holds that
D2(μ, μ ̃) ≤ r(μ, π∗(μ)) − r(μ ̃, Λ ̃ ⋄) + β
Z
E 0 ×E 0
V (F(μ, π∗(μ), e0)) − V (F(μ ̃,  ̃Λ⋄, e ̃0)) Γ(de0, de ̃0)
(5.22) ≤ 2CrWP(S×A)(π∗(μ), Λ ̃ ⋄)
+ CFLβ 2WP(S×A)(π∗(μ), Λ ̃ ⋄) +
Z
E 0 ×E 0
dE0 (e0, e ̃0)Γ(de0, de ̃0) .
For the last line of (5.22), we take infimum over all Γ ∈ CplE0×E0 (p∗(Λ ̃ ⋄), p∗(  ̃Λ⋄)) and then use the estimate given in (5.20) to obtain
(5.23) D2(μ, μ ̃) ≤ 2Cr + 2CFLβ WP(S)(μ, μ ̃) ≤ LWP(S)(μ, μ ̃),
where the last inequality holds by the inequality L ≥ 2Cr/(1 − 2CFβ) with 2CFβ < 1. By (5.19), (5.21) and (5.23), we have that
T V (μ) − T V (μ ̃) = D(μ, μ ̃) ≤ D1(μ, μ ̃) ≤ D2(μ, μ ̃) ≤ LWP(S)(μ, μ ̃).
Since μ, μ ̃ ∈ P(S) are chosen arbitrary, one can have that T V (·) is L-Lipschitz continuous. Hence, we conclude that T V ∈ Lipb,L(P(S); R).
To verify (2.25), let V , W ∈ Lipb,L(P(S); R). By Proposition 2.15 (ii), for every μ ∈ P(S)
|T V (μ) − T W (μ)| ≤ β sup
p∈P0
Z
P (S )
|V (μ′) − W (μ′)|p(dμ′|μ, π∗(μ), p) ≤ β∥V − W ∥∞,

31
which ensures (2.25) to hold.
Since β < 1 and T (Lipb,L(P(S); R)) ⊆ Lipb,L(P(S); R), T is a contraction on Lipb,L(P(S); R). Hence, an application of the Banach’s fixed point theorem ensures the existence and uniqueness
of V ∗ ∈ Lipb,L(P(S); R) such that for every V ∈ Lipb,L(P(S); R), V ∗ = T V ∗ = limn→∞ T nV . This completes the proof. □
6. Proof of results in Section 2.4
We begin by presenting an observation that plays a key role in the proof of Lemmas 2.17 and 2.20. Recall the set Q given in Definition 2.2 and the filtration G = (Gt)t≥0 given in (2.10).
Lemma 6.1. Denote for every t ≥ 0 by L0
Gt (Z) the set of all Gt measurable random variables
ζt with values in a compact Polish space Z. Then for every ζ0 ∈ L0
G0 (Z) and P, Pe ∈ Q, it holds
that LP(ζ0) = LeP(ζ0). Furthermore, for every t ≥ 1, ζt ∈ L0
Gt (Z), and P, Pe ∈ Q, it holds that
LP(ζt | ε01:t) = LPe(ζt | ε01:t), P-a.s..
Proof. Without loss of generality, we consider the case t ≥ 1, as the case t = 0 can be subsumed into it. Then, let ζt ∈ L0
Gt (Z) and P, Pe ∈ Q be given.
By the same arguments presented for the proof of Lemma 4.1 (ii), LP(ζt | ε01:t) and LPe(ζt | ε01:t)
are Ft0 measurable. Hence it suffices to show that for any bounded Borel measurable functions
gˆt : (E0)t → R and fˆ : Z → R,
EP[gˆt(ε0
1:t)fˆ(ζt)] = EP gˆt(ε0
1:t)
Z
Z
fˆ(z ̃)LeP(ζt | ε0
1:t)(dz ̃) .
Note that since ζt is Gt measurable, there exists a Borel measurable function lˆ : G × Θt+1 × Et × (E0)t → Z such that ζ = lˆ(γ, θ0:t, ε1:t, ε01:t).
Moreover, since ε01:t is independent of γ, θ0:t, ε1:t (see Remark 2.3 (i)),
EP[gˆt(ε0
1:t)fˆ(ζt)] = EP gˆt(ε0
1:t)fˆ lˆ(γ, θ0:t, ε1:t, ε0
1:t)
=
Z
(E 0 )t
gˆt(e0
1:t)EP fˆ lˆ(γ, θ0:t, ε1:t, e0
1:t) LP(ε0
1:t)(de0
1:t)
=
Z
(E 0 )t
gˆt(e0
1:t)EeP fˆ lˆ(γ, θ0:t, ε1:t, e0
1:t) LP(ε0
1:t)(de0
1:t) =: It,
where the second equality holds by Fubini’s theorem and the last equality follows from the fact that LP(γ, θ0:t, ε1:t) = LeP(γ, θ0:t, ε1:t) (see Remark 2.3 (ii)).
Therefore, by definition of LeP(ζt | ε01:t) and LP(ε01:t),
It =
Z
(E 0 )t
gˆt(e0
1:t)EPe EPe[fˆ(ζ)|ε0
1:t = e0
1:t] LP(ε0
1:t)(de0
1:t)
=
Z
(E 0 )t
gˆt(e0
1:t)
Z
Z
fˆ(z )LPe (ζ |ε0
1:t = e1:t)(dz) LP(ε0
1:t)(de0
1:t)
= EP gˆt(ε0
1:t)
Z
Z
fˆ(z ̃)LeP(ζt | ε0
1:t)(dz ̃) ,
as claimed. □
6.1. Proof of Lemma 2.17. We first prove (2.26). Let a ∈ A be given. We will construct
pξ,a
1 ∈ P0 and the sequence of kernels pξ,a
t : (E0)t−1 ∋ e01:t−1 7→ pξ,a
t (et0|e01:t−1) ∈ P0 for t ≥ 2 to
define Pξ,a ∈ Q induced by (pξ,a
t )t≥1 ∈ K0.

32 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
Step 1: Let eP ∈ Q be some arbitrary. Then set
s ̃0 := ξ, Λ ̃ 0 := LeP((s ̃0, a0)),
(6.1)
and define by
pξ,a
(6.2) 1 := p∗(  ̃Λ0) ∈ P0,
where p∗ is given in Proposition 2.15 (i). Next set
s ̃1 := F s ̃0, a0, Λ ̃ 0, ε1, ε0
1 , Λ ̃ 1 := LeP((s ̃1, a1) | ε0
(6.3) 1),
where (s ̃0,  ̃Λ0) are given in (6.1). We see that (s ̃1, a1) are G1 measurable (because s ̃0 ∈ L0
F0 (S),
a0 = π0(γ, θ0), a1 = π1(γ, θ0:1, ε1, ε01)) and ε01 is independent of (γ, θ0:1, ε1) (see Remark 2.3 (iii)).
Moreover, an application of Lemma A.1 (ii) implies that Λ ̃1 is F10 measurable, which ensures the existence of a Borel measurable function l1 : E0 → P(S × A) such that
l1(ε0
(6.4) 1) = Λ ̃ 1.
From this, define pξ,a
2 : E0 ∋ e01 7→ pξ,a
2 (· | e01) ∈ P(E0) by
pξ,a
2 ( · | e0
1) := p∗ l1(e0
(6.5) 1) ∈ P0.
Using the same arguments presented for (6.3)–(6.5), for every t ≥ 1 we inductively set
s ̃t := F(s ̃t−1, at−1, Λ ̃ t−1, εt, ε0
t ),  ̃Λt := LPe((s ̃t, at) | ε0
(6.6) 1:t),
where (s ̃t, at) are Gt measurable, and  ̃Λt is Ft0 measurable. Hence, there exists a Borel measurable function lt : (E0)t → P(S × A) such that
lt(ε0
(6.7) 1:t) = Λ ̃ t.
From this, define pξ,a
t+1 : (E0)t ∋ e01:t 7→ pξ,a
t+1(· | e01:t) ∈ P(E0) by
pξ,a
t+1( · | e0
1:t) := p∗ lt(e0
(6.8) 1:t) ∈ P0.
Using (pξ,a
t )t≥1 ∈ K0, constructed via (6.2), (6.5), and (6.8), we define the measure Pξ,a ∈ Q
induced by this sequence. We underline that the existence of such a measure is ensured by IonescuTulcea’s theorem (see Remark 2.3), and that the above inductive construction is invariant and can be carried out under any Pe ∈ Q.
Step 2: Recall for every t ≥ 0,  ̃Λt is the conditional joint law of (s ̃t, at) given ε01:t under eP, as given
in (6.1), (6.3), and (6.6). We claim that for every t ≥ 0, Pξ,a-a.s.
sξ,a,Pξ,a
t = s ̃t, Λξ,a
(6.9) t =  ̃Λt,
where Λξ,a
t is the conditional joint law of (sξ,a,Pξ,a
t , at) given ε01:t under Pξ,a.
The proof uses an induction over t ≥ 0: For t = 0, clearly sξ,a,Pξ,a
0 = s ̃0 = ξ ∈ L0
F0 (S). Moreover, since a0 is G0 measurable (noting that G0 = σ(γ, θ0)) and LPξ,a (γ, θ0) = L ̃P(γ, θ0) (see
Remark 2.3 (ii)), it holds that Λξ,a
0 =  ̃Λ0.
Assume that the induction claim holds true for some t ≥ 0. For the case t+1, by the conditional McKean-Vlasov dynamics given in (2.12) and the induction hypothesis for t, it holds that Pξ,a-a.s.,
sξ,a,Pξ,a
t+1 = F(sξ,a,Pξ,a
t , at, Λξ,a
t , εt+1, ε0
t+1)
= F(s ̃t, at, Λ ̃ t, εt+1, ε0
t+1) = s ̃t+1,
(6.10)

33
where the second equality holds by the Borel measurability of F (see Definition 2.4 (i)), and the last equality holds by definition (6.6), as claimed. We now show that Λξ,a
t+1 =  ̃Λt+1, Pξ,a-a.s.. By Ft0+1-measurability of (Λξ,a
t+1, Λ ̃ t+1), it suffices to
show that for any bounded Borel measurable functions gˆt+1 : (E0)t+1 → R and fˆ : S × A → R,
EPξ,a [gˆt+1(ε0
1:t+1)fˆ(sξ,a,Pξ,a
t+1 , at+1)] = EPξ,a gˆt+1(ε0
1:t+1)
Z
S×A
(6.11) f (s ̃,  ̃a)Λ ̃ t+1(ds ̃, d ̃a) .
Indeed, by (6.10),
EPξ,a [gˆt+1(ε0
1:t+1)fˆ(sξ,a,Pξ,a
t+1 , at+1)] = EPξ,a [gˆt+1(ε0
1:t+1)fˆ(s ̃t+1, at+1)] =: It+1 .
Moreove, since (s ̃t+1, at+1) are Gt+1 measurable (with Gt+1 = σ(γ, θ0:t+1, ε1:t+1, ε01:t+1)), an application of Lemma 6.1 ensures that Pξ,a-a.s.,
LPξ,a (s ̃t+1, at+1) | ε0
1:t+1 = LeP (s ̃t+1, at+1) | ε0
1:t+1 = Λ ̃ t+1,
which implies that It+1 equals the second term given in (6.11), as claimed. By induction hypothesis, the claim (6.9) holds for all t ≥ 0.
Step 3: Recall that Pξ,a ∈ Q is the measure induced by (pξ,a
t )t≥1 ∈ K0 given in (6.2), (6.5), and
(6.8) (see Step 1). Then from Remark 2.3 (iii), it holds that Pξ,a-a.s.
LPξ,a (ε0
1) = pξ,a
1 ∈ P0,
LPξ,a (ε0
t |F 0
t−1) = pξ,a
t (·|ε0
1:t−1) ∈ P0 for all t ≥ 2.
(6.12)
Moreover, since Λξ,a
t = Λ ̃ t Pξ,a-a.s. for all t ≥ 0 (see (6.9) in Step 2), it holds that Pξ,a-a.s.
pξ,a
1 = p∗(Λξ,a
0 ), pξ,a
t (·|ε0
1:t−1) = p∗ Λξ,a
(6.13) t−1 for all t ≥ 2,
which ensures (2.26) to hold, as claimed.
The proof for (2.27) is straightforward. Indeed, by (2.19) in Proposition 2.12 it holds that Pξ,a-a.s.
LPξ,a (μξ,a
1 ) = p( · | pjS(Λξ,a
0 ), Λξ,a
0 , pξ,a
1 (·))
LPξ,a (μξ,a
t+1) = p( · | pjS (Λξ,a
t ), Λξ,a
t , pξ,a
t ( · |ε0
1:t−1)) for all t ≥ 1.
Combined with (6.13), this ensures (2.27) to hold, as claimed. This completes the proof. □
6.2. Proof of Lemma 2.20. We first introduce some kernels used for constructing a∗ ∈ A. We denote by
(6.14) KS×A : S × P(S × A) × P(S) ∋ (s, Λ, μ) 7→ KS×A( · | s, Λ, μ) ∈ P(A)
the universal disintegration kernel (see Lemma A.3). Then, we define a kernel
(6.15) ψ∗ : S × P(S) ∋ (s, μ) 7→ ψ∗( · |s, μ) := KS×A( · | s, π∗(μ), μ) ∈ P(A),
where π∗ is the local maximizer given in Proposition 2.15 (ii). Moreover, denote by
(6.16) ρA : P(A) × [0, 1] ∋ (η, u) 7→ ρA(η, u) ∈ A
the Blackwell–Dubins function of the action space A (see Lemma A.2).
Step 1. Let Pe ∈ Q be some arbitrary. We will inductively construct a∗ ∈ A over time t ≥ 0. Let
s ̃0 := ξ, μ ̃0 := LeP(s ̃0),
a∗
0 := ρA ψ∗(· | s ̃0, μ ̃0), h0(θ0) ,  ̃Λ0 := LPe((s ̃0, a∗
0)),
(6.17)

34 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
where h0 : Θ → [0, 1] is given in Remark 2.19 (so that h0(θ0) ∼ U[0,1]). In particular, since ξ ∈ L0
F0 (S), s ̃0 is F0 measurable, and a0∗ is G0 measurable. For every t ≥ 1 we inductively define
s ̃t := F(s ̃t−1, a∗
t−1, Λ ̃ t−1, εt, ε0
t ), μ ̃t := LPe(s ̃t | ε0
1:t),
a∗
t := ρA ψ∗( · | s ̃t, μ ̃t), ht(θt) , Λ ̃ t := LeP((s ̃t, a∗
t ) | ε0
1:t),
(6.18)
where ht : Θ → [0, 1] is given in Remark 2.19 (ii) (so that (hu(θu))0≤u≤t is i.i.d. with law U[0,1]). Moreover, by the same arguments presented for the proof of Lemma 4.1, s ̃t is Ft measurable, while at∗ is Gt measurable. Moreover, (μ ̃t,  ̃Λt) are Ft0 measurable. Since a∗ = (at∗)t≥0 constructed via (6.17) and (6.18) is G adapted, it is in A. We underline that the above inductive construction is invariant and can be carried out under any Pe ∈ Q.
Step 2. We claim that for every P ∈ Q,
sξ,a∗ ,P
t = s ̃t, μξ,a∗,P
t = μ ̃t, Λξ,a∗,P
(6.19) t = Λ ̃t, P-a.s., for all t ≥ 0,
where sξ,a∗,P
t , μξ,a∗,P
t , and Λξ,a∗,P
t are given in (2.12), (2.15) and (2.16), respectively, under (a∗, P).
Let P ∈ Q be given. The proof uses an induction over t ≥ 0: For t = 0, clearly sξ,a,P
0 = s ̃0 = ξ ∈ L0
F0 (S). Moreover, since a0∗ is G0 measurable (noting that G0 = σ(γ, θ0)) and LP(γ, θ0) =
LP ̃(γ, θ0) (see Remark 2.3 (ii)), it holds that μξ,a∗,P
0 = μ ̃0 and Λξ,a∗,P
0 = Λ ̃ 0.
Assume that the induction claim holds true for some t ≥ 0. For the case t+1, by the conditional McKean-Vlasov dynamics given in (2.12) and the induction hypothesis for t, it holds that P-a.s.,
sξ,a∗ ,P
t+1 = F(sξ,a∗,P
t , a∗
t , Λξ,a∗,P
t , εt+1, ε0
t+1)
= F(s ̃t, a∗
t ,  ̃Λt, εt+1, ε0
t+1) = s ̃t+1,
(6.20)
where the second equality holds by the Borel measurability of F (see Definition 2.4 (i)), and the last equality holds by definition (6.18). We now show that Λξ,a∗,P
t+1 =  ̃Λt+1, P-a.s.. By Ft0+1-measurability of (Λξ,a∗,P
t+1 , Λ ̃ t+1), it suffices
to show that for any bounded Borel measurable functions gˆt+1 : (E0)t+1 → R and fˆ : S × A → R,
EP[gˆt+1(ε0
1:t+1)fˆ(sξ,a∗,P
t+1 , a∗
t+1)] = EP gˆt+1(ε0
1:t+1)
Z
S×A
(6.21) f (s ̃, a ̃)  ̃Λt+1(ds ̃, d ̃a) .
Indeed, by (6.20),
EP[gˆt+1(ε0
1:t+1)fˆ(sξ,a∗,P
t+1 , a∗
t+1)] = EP[gˆt+1(ε0
1:t+1)fˆ(s ̃t+1, a∗
t+1)] =: It+1 .
Moreover, as (s ̃t+1, at∗+1) is Gt+1 measurable, an application of Lemma 6.1 ensures that P-a.s.
LP (s ̃t+1, a∗
t+1)|ε0
1:t+1 = LeP (s ̃t+1, a∗
t+1)|ε0
1:t+1 =  ̃Λt+1,
which implies that It+1 equals the second term in (6.21), as claimed. Using the same arguments presented for (6.21), we have that μξ,a∗,P
t+1 = μ ̃t+1 P-a.s.. Hence, by induction hypothesis, the claim (6.19) holds.
Step 3. Let P ∈ Q be some arbitrary. Then we claim that (2.28) holds. Without loss of generality, we consider the case t ≥ 1, as the case t = 0 can be subsumed into it.
By the Ft0-measurability of (Λξ,a∗,P
t , μξ,a∗,P
t ), it suffices to show that for any bounded Borel
measurable functions gˆt : (E0)t → R and fˆ : S × A → R,
EP[gˆt(ε0
1:t)fˆ(sξ,a∗,P
t , a∗
t )] = EP gˆt(ε0
1:t)
Z
S×A
f (s ̃,  ̃a)π∗ μξ,a∗,P
(6.22) t (ds ̃, d ̃a) ,
where π∗ is the local maximizer given in Proposition 2.15 (ii).

35
Since gˆ(ε01:t) is Ft0 measurable and it holds that sξ,a∗,P
t = s ̃t, P-a.s. (see (6.19) in Step 2),
EP[gˆt(ε0
1:t)fˆ(sξ,a∗,P
t , a∗
t )] = EP[gˆt(ε0
1:t)fˆ s ̃t, a∗
t]
= EPh
gˆt(ε0
1:t)EP EP[fˆ(s ̃t, a∗
t )|Ft] F 0
t
i
=: It,
where the last equality follows from the tower property with fact that Ft0 ⊂ Ft. Since s ̃t is Ft measurable and ht(θt) ∼ U[0,1] is independent of Ft (noting that Ft does not contain the current randomization source θt),
It = EP gˆt(ε0
1:t)EP EP
Z
A
fˆ(s ̃t,  ̃a)ψ∗(d ̃a | s ̃t, μ ̃t) Ft F 0
t
= EP gˆt(ε0
1:t)EP
Z
S×A
fˆ(s ̃, a ̃)KS×A(d ̃a | s ̃, π∗(μ ̃t), μ ̃t)μ ̃t(ds ̃) F 0
t
= EP gˆt(ε0
1:t)
Z
S×A
fˆ(s ̃, a ̃)π∗(μ ̃t)(ds ̃, d ̃a) ,
(6.23)
where the first equality follows from definition of at∗ given in (6.18), the second equality follows from definition of ψ∗(·|s ̃t, μ ̃t) (see (6.15)) and Ft0-measurability of μ ̃t, and the last equality follows from definition of the universal differentiation kernel KS×A (see (6.14)).
Moreover, since μ ̃t = μξ,a∗,P
t , P-a.s. (see (6.19) in Step 2), the last term in (6.23) equals the second term in (6.22), as claimed. This completes the proof. □
6.3. Proof of Theorem 2.21. For notational simplicity, set μ := L (ξ). Step 1: We claim that for every n ∈ N
I ξ,a∗
n := inf
P∈Q EP
n−1
X
t=0
βt r(sξ,a∗,P
t , a∗
t , Λξ,a∗,P
t ) + βn V ∗(μξ,a∗,P
(6.24) n ) ≥ V ∗(μ),
where for every P ∈ Q, let (μξ,a∗,P
t )t≥0 and (Λξ,a∗,P
t )t≥0 be given by (2.15) and (2.16), respectively. We prove (6.24) via an induction over n. Before proceeding, note that for every P ∈ Q and t ≥ 0,
EP r(sξ,a∗,P
t , a∗
t , Λξ,a∗,P
t ) = EP r(pjS (Λξ,a∗,P
t ) , Λξ,a∗,P
t)
= EP r μξ,a∗,P
t , π∗(μξ,a∗,P
t ),
(6.25)
where the first equality holds by (2.20) in Remark 2.13 and the second equality follows from (2.28) in Lemma 2.20 and the fact that π∗(μ) ∈ U(μ) (see Proposition 2.15 (ii)). Hence by the property (6.25), Iξ,a∗
n given in (6.24) can be represented by
I ξ,a∗
n = inf
P∈Q EP
n−1
X
t=0
βt r μξ,a∗,P
t , π∗(μξ,a∗,P
t ) + βn V ∗(μξ,a∗,P
(6.26) n ) .
Step 1a: For n = 1, let P ∈ Q be induced by some (pt)t≥1 ∈ K0 (see Definition 2.2).
We first note that μξ,a∗,P
0 = μ with trivial F00 and LP(ε01) = p1 ∈ P0 (see Remark 2.3 (iii)). Combined with (2.19) (see Proposition 2.12), this implies that
EP r μξ,a∗,P
0 , π∗(μξ,a∗,P
0 ) + β V ∗(μξ,a∗,P
1 ) = r(μ, π∗(μ)) + β
Z
P (S )
V ∗(μ′)p(dμ′ μ, π∗(μ), p1)
≥ r(μ, π∗(μ)) + β inf
p∈P0
Z
P (S )
(6.27) V ∗(μ′)p(dμ′ μ, π∗(μ), p)
= T V ∗(μ) = V ∗(μ),

36 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
where the last line follows from the optimality of π∗(μ) ∈ U(μ) for T V ∗(μ) (see Proposition 2.15 (ii) for V ∗ ∈ Lipb,L(P(S); R)) and the fixed point result given in Proposition 2.16.
Since (6.27) holds for any P ∈ Q, by (6.26) we have that Iξ,a∗
1 ≥ V ∗(μ).
Step 1b: Assume that (6.24) holds for some n ≥ 1. Let P ∈ Q be induced by some (pt)t≥1 ∈ K0.
Note that μξ,a∗,P
n and LP(ε0n+1|Fn0) are Fn0 measurable and LP(ε0n+1|Fn0) = pn+1(·|ε01:n) ∈ P0 P-a.s. (see Remark 2.3 (ii)). From this, we can use the same arguments presented for (6.27) to have that P-a.s.
EP r μξ,a∗,P
t , π∗(μξ,a∗,P
n ) + βV ∗(μξ,a∗,P
n+1 ) F 0
n
= r(μξ,a∗,P
n , π∗(μξ,a∗,P
n )) + β
Z
P (S )
V ∗(μ′)p(dμ′|μξ,a∗,P
n , π∗(μξ,a∗,P
n ), pn+1(·|ε0
1:n))
≥ r(μξ,a∗,P
n , π∗(μξ,a∗,P
n )) + β inf
p∈P0
Z
P (S )
V ∗(μ′)p(dμ′ μξ,a∗,P
n , π∗(μξ,a∗,P
n ), p)
= T V ∗(μξ,a∗,P
n ) = V ∗(μξ,a∗,P
n ),
which ensures that
EP
n
X
t=0
βt r(μξ,a∗,P
t , π∗(μξ,a∗,P
t )) + βn+1V ∗(μξ,a∗,P
n+1 )
≥ EP
n−1
X
t=0
βt r(μξ,a∗,P
t , π∗(μξ,a∗,P
t )) + βnV ∗(μξ,a∗,P
n ) ≥ Iξ,a∗
n ≥ V ∗(μ),
(6.28)
where the second inequality follows from definition of Iξ,a∗
n given in (6.26) and the last inequality follows from assumption of the induction for n (see (6.24)). As (6.28) holds for any P ∈ Q, we have Iξ,a∗
n+1 ≥ V ∗(μ). Therefore, by the induction hypothesis, (6.24) holds for every n ∈ N. We conclude that the claim for Step 1 holds.
Step 2: We claim that V ∗(μ) ≤ V (ξ). Since r and V ∗ is bounded and β < 1 (see Lemma 5.2 (iii) and V ∗ ∈ Lipb,L(P(S); R)), the dominated convergence theorem asserts that for every μ ∈ P(S)
lim sup
n→∞
I ξ,a∗
n ≤ inf
P∈Q lim sup
n→∞
EP
n−1
X
t=0
βt r μξ,a∗,P
t , π∗(μξ,a∗,P
t ) + lim sup
n→∞
EP βn V ∗(μξ,a∗,P
n)
= inf
P∈Q EP
∞
X
t=0
βt r μξ,a∗,P
t , π∗(μξ,a∗,P
t ) = J a∗ (ξ) ≤ V (ξ),
where the second equality follows from (6.25) and the definition of J a∗ (ξ) (see (2.13)). Combining this with (6.24) (as shown in Step 1), we conclude that
V ∗(μ) ≤ lim sup
n→∞
I ξ,a∗
(6.29) n ≤ J a∗ (ξ) ≤ V (ξ),
as claimed.
Step 3: We claim that V (ξ) ≤ V ∗(μ), which ensures the statement (i) to hold. For every a ∈ A, let Pξ,a ∈ Q be induced by (pξ,a
t )t≥1 ∈ K0 such that (2.26) and (2.27) given in Lemma 2.17 hold.
Then, define Va(ξ) by
Va(ξ) :=EPξ,a
∞
X
t=0
β t r (sξ,a,Pξ,a
t , at, Λξ,a
t ) = EPξ,a
∞
X
t=0
βt r pjS (Λξ,a
t ), Λξ,a
t,

37
where Λξ,a
0 is the joint law of (sξ,a,Pξ,a
0 , a0) under Pξ,a, for t ≥ 1 Λξ,a
t is the conditional joint
law of (sξ,a,Pξ,a
t , at) under Pξ,a given ε01:t, and the last equality follows from the same arguments presented for (6.25). Then by definition of J a(ξ) given in (2.13)
V (ξ) = sup
a∈A
J a(ξ) ≤ sup
a∈A
(6.30) Va(ξ).
Moreover, since r and V ∗ is bounded and β < 1, by the dominated convergence theorem to the sums Pn
t=0 βtr(pjS (Λξ,a
t ), Λξ,a
t ) n ∈ N, we can have that for every a ∈ A
Va(ξ) =
∞
X
t=0
βtEPξ,a r pjS (Λξ,a
t ), Λξ,a
t + βV ∗(μξ,a
t+1) − βV ∗(μξ,a
(6.31) t+1) .
Then it follows from (2.27) in Lemma 2.17 that for every t ≥ 0
EPξ,a r pjS (Λξ,a
t ), Λξ,a
t + βV ∗(μξ,a
t+1) = EPξ,a h
EPξ,a r pjS (Λξ,a
t ), Λξ,a
t + βV ∗(μξ,a
t+1) F 0
t
i
,
=: EPξ,a [J (Λξ,a
t )]
where J (Λξ,a
t ) is Ft0 measurable and satisfies
J (Λξ,a
t ) = r pjS (Λξ,a
t ), Λξ,a
t +β
Z
P (S )
V ∗(μ ̃) p dμ ̃ pjS(Λξ,a
t ), Λξ,a
t , p∗(Λξ,a
t)
= r pjS (Λξ,a
t ), Λξ,a
t + β inf
p∈P0
Z
P (S )
V ∗(μ ̃) p dμ ̃ pjS(Λξ,a
t ), Λξ,a
t ,p
≤ T V ∗(pjS(Λξ,a
t )),
(6.32)
where the equality holds by the local optimality p∗(Λξ,a
t ) ∈ P0 (see Proposition 2.15 (i)) and the
inequality holds by definition of T V ∗(pjS(Λξ,a
t )) (see (2.22))
Combining (6.30)–(6.32) with the marginal constraint (i.e., pjS(Λξ,a
t ) = μξ,a
t Pξ,a-a.s.; see
(2.17)), and the fixed point result (i.e., T V ∗ = V ∗; see Proposition 2.16), we conclude that
V (ξ) ≤ sup
a∈A
∞
X
t=0
βt EPξ,a [V ∗(μξ,a
t )] − βt+1 EPξ,a [V ∗(μξ,a
t+1)] = V ∗(μ),
where the last equality holds by the dominated convergence theorem and the fact that μξ,a
0 = μ,
as claimed.
Step 4: It remains to show that (2.29) holds. Recall that a∗ ∈ A is such that (2.28) holds for every P ∈ Q (see Lemma 2.20). Moreover, let Pξ,a∗ ∈ Q is induced by (pξ,a∗
t )t≥1 ∈ K0 satisfying (2.26) and (2.27) (see Lemma 2.17). By applying the dominated convergence theorem to Pn
t=0(βtV ∗(μξ,a∗
t ) − βt+1V ∗(μξ,a∗
t+1 )) n ∈ N,
V ∗(μ) =
∞
X
t=0
βt EPξ,a∗
V ∗(μξ,a∗
t ) − βt+1 EPξ,a∗
V ∗(μξ,a∗
(6.33) t+1 ) ,
where μξ,a∗
t is the conditional law of sξ,a∗,Pξ,a∗
t given ε01:t. Note that for every μ′ ∈ P(S)
V ∗(μ′) = T V ∗(μ′) = r(μ′, π∗(μ′)) + β
Z
P (S )
(6.34) V ∗(μ ̃′)p dμ ̃′|μ′, π∗(μ′), p∗(π∗(μ′)) .
where the first equality follows from Proposition 2.16 and the second equality follows from the optimality of the local optimizers π∗ and p∗ given in Proposition 2.15.

38 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
From (6.34), it holds that for every t ≥ 0
EPξ,a∗
V ∗(μξ,a∗
t ) = EPξ,a∗
T V ∗(μξ,a∗
t)
= EPξ,a∗
r(μξ,a∗
t , π∗(μξ,a∗
t )) + β
Z
P (S )
V ∗(μ ̃′)p dμ ̃′|μξ,a∗
t , π∗(μξ,a∗
t ), p∗(π∗(μξ,a∗
t ))
= EPξ,a∗
r pjS (Λξ,a∗
t ), Λξ,a∗
t +β
Z
P (S )
V ∗(μ ̃′)p dμ ̃′| pjS (Λξ,a∗
t ), Λξ,a∗
t , p∗(Λξ,a∗
t ) =: It,
where Λξ,a∗
0 is the joint law of (sξ,a∗,Pξ,a∗
0 , a0∗) under Pξ,a∗ , for t ≥ 1 Λξ,a∗
t is the conditional
joint law of (sξ,a∗,Pξ,a∗
t , at∗) under Pξ,a∗ given ε01:t, and the last equality follows from the fact that
Λξ,a∗
t = π∗(μξ,a∗
t ) Pξ,a∗ -a.s.; see Lemma 2.20, and the marginal constraint that pjS(Λξ,a∗
t ) = μξ,a∗
t
Pξ,a∗ -a.s.; see (2.17).
Furthermore, by (2.27) in Lemma 2.17 for (a∗, Pξ,a∗ ), it holds that for every t ≥ 0
It = EPξ,a∗
r pjS (Λξ,a∗
t ), Λξ,a∗
t + βV ∗(μξ,a∗
t+1 ) .
Combined with (6.33), this ensures that
V ∗(μ) =
∞
X
t=0
β t EPξ,a∗
r pjS (Λξ,a∗
t ), Λξ,a∗
t = EPξ,a∗ ∞
X
t=0
βtr pjS (Λξ,a∗
t ), Λξ,a∗
t.
Therefore, by the equality V ∗(μ) = V (ξ) (from Step 2 and Step 3), we conclude that
V ∗(μ) = V (ξ) = sup
a∈A
J a(ξ) = EPξ,a∗ ∞
X
t=0
βtr pjS (Λξ,a∗
t ), Λξ,a∗
t
= EPξ,a∗ ∞
X
t=0
βtr sξ,a∗,Pξ,a∗
t , a∗
t , Λξ,a∗
t = J a∗ (ξ),
where the last line follows from the same arguments presented for (6.25), and the inequality (6.29) given in Step 2. This completes the proof. □
7. Proof of results in Section 2.5
7.1. Proof of Lemma 2.25. We first prove (2.33). For simplicity, denote for every t ≥ 0 by
μt := μξ,πc,P
t , Λt := Λξ,πc,P
t , νt+1 := LP(ε0
t+1|F 0
t ).
As the case for t = 0 can be subsumed into the others for t ≥ 1, we consider the case t ≥ 1. Since Λt and μt are Ft0 measurable, it is sufficient to show that for any bounded Borel measurable functions g : (E0)t → R and f : S × A → R,
EP g(ε0
1:t)f sξ,πc,P
t , aπc,P
t ) = EP g(ε0
1:t)
Z
S×A
f (s′, a′)πc
t d ̃a|s ̃, μt μt(ds ̃) .
Note that g(ε01:t) is Ft0 measurable and sξ,πc,P
t is Ft measurable. Hence, by the distributional
constraint that LP(aπc,P
t |Ft) = πtc(·|sξ,πc,P
t , μt) P-a.s. (see (2.30)) and the tower property,
EP g(ε0
1:t)f (sξ,πc,P
t , aπc,P
t ) = EPh
g(ε0
1:t)EP EP[f (sξ,πc,P
t , aπc,P
t )|Fc
t ] F0
t
i
= EP g(ε0
1:t)
Z
A
f (sξ,πc,P
t ,  ̃a)πc
t (da′|sξ,πc,P
t , μt) =: It .

39
Moreover by the definition of μt and its Ft0-measurability,
It = EP g(ε0
1:t)EP
Z
A
f (sξ,πc,P
t ,  ̃a)πc
t (da′|sξ,πc,P
t , μt) F 0
t
= EP g(ε0
1:t)
Z
S×A
f (s′, a′)πc
t d ̃a|s ̃, μt μt(ds ̃) ,
as claimed.
Moreover, since pjS(μξ,πc,P
t ˆ⊗ πtc(· | ·, μξ,πc,P
t )) = μξ,πc,P
t , we can the same arguments as in the proof of Proposition 2.12 (we refer to Section 5) to get that (2.34) holds P-a.s.. □
7.2. Proof of Lemma 2.26. We first prove (2.35). Step 1: Let πc ∈ Πc be given, and let Pe ∈ Q be some arbitrary. Then set
s ̃0 := ξ, μ ̃0 := LeP(s ̃0),
 ̃a0 := ρA πc
0(· | s ̃0, μ ̃0), h0(θ0) ,
(7.1)
where ρA is the Blackwell-Dubins function on A (see Lemma A.2) and h0 is given in Remark 2.19. Here we note that s ̃0 is F0 measurable (as ξ ∈ L0
F0 (S)) and  ̃a0 is G0 measurable. Then we define by
pξ,πc
1 := p∗ μ ̃0 ˆ⊗ πc
(7.2) 0(· | ·, μ ̃0) ∈ P0,
where p∗ is given in Proposition 2.15 (i). Next, for every t ≥ 1 we inductively set
s ̃t := F s ̃t−1,  ̃at−1, μ ̃t−1 ⊗ˆ πc
t−1(· | ·, μ ̃t−1), εt, ε0
t , μ ̃t := LeP(s ̃t | ε0
1:t),
 ̃at := ρA πc
t (· | s ̃t, μ ̃t), ht(θt) ,
(7.3)
Here, by using the same arguments presented for the proof of Lemma 4.1 (ii), we can deduce that s ̃t is Ft measurable and  ̃at is Gt measurable. Moreover, (μ ̃t, Λ ̃ t) are Ft0 measurable. From this, we can consider a Borel measurable function lt : (E0)t → P(S × A) such that
lt(ε0
1:t) = μ ̃t ⊗ˆ πc
(7.4) t (· | ·, μ ̃t).
Then, define pξ,πc
t+1 : (E0)t ∋ e01:t 7→ pξ,πc
t+1 (· | e01:t) ∈ P(E0) by
pξ,πc
t+1 ( · | e0
1:t) := p∗ lt(e0
(7.5) 1:t) ∈ P0.
Therefore we can define by Pξ,πc ∈ Q the measure induced by (pξ,πc
t )t≥1 ∈ K0 given in (7.2) and (7.5).
Step 2: Recall (μ ̃t)t≥0 given in (7.1) and (7.3). We claim that Pξ,πc -a.s.
μξ,πc
(7.6) t = μ ̃t, for all t ≥ 0,
where μξ,a
0 is the law of sξ,a,Pξ,a
0 under Pξ,a, and for t ≥ 1 μξ,a
t is the conditional law of sξ,a,Pξ,a
t
under Pξ,a given ε01:t.
The proof uses an induction over t ≥ 0: For t = 0, clearly sξ,πc,Pξ,a
0 = s ̃0 = ξ ∈ L0
F0 (S).
Moreover, since LPξ,πc (γ) = L ̃P(γ) (see Remark 2.3 (ii)), it holds that μξ,πc
0 = μ ̃0.
Assume that the induction claim holds for some t ≥ 0. By Ft0+1-measurability of (μξ,πc
t+1 , μ ̃t+1),
it suffices to show that for any bounded Borel measurable functions gˆt+1 : (E0)t+1 → R and fˆ : S → R,
EPξ,πc
gˆt+1(ε0
1:t+1)fˆ(sξ,πc,Pξ,πc
t+1 ) = EPξ,πc
gˆt+1(ε0
1:t+1)
Z
S×A
(7.7) f (s ̃)μ ̃t+1(ds ̃) .

40 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
Indeed, by the conditional McKean-Vlasov dynamics given in (2.30) and Fubini’s theorem
EPξ,πc
gˆt+1(ε0
1:t+1)fˆ(sξ,πc,Pξ,πc
t+1 ) = EPξ,πc h
gˆt+1(ε0
1:t+1)fˆ F(sξ,πc,P
t , aπc,P
t , Λξ,πc
t , εt+1, ε0
t+1)
i
=
Z
E
EPξ,πc h
gˆt+1(ε0
1:t+1)fˆ F(sξ,πc,P
t , aπc,P
t , Λξ,πc
t , e, ε0
t+1)
i
(7.8) λε(de) =: It,
where the second equality holds since εt+1 is independent of Gt ∨ σ(εt0+1) with LPξ,πc (εt+1) = λε (see Remark 2.3 (i), (ii)). Moreover, since εt0+1 is conditionally independent of Gt given Ft0 (see Remark 2.3 (iii)) with
LPξ,πc (εt0+1|Ft0) = pξ,πc
t+1 (de0 | ε01:t) (by definition of Pξ,πc ), and sξ,πc,P
t , aπc,P
t , and Λξ,πc
t are all Gt measurable, we have
It =
Z
E
EPξ,πc Z
E0
gˆt+1(ε0
1:t, e0) DF0
t (e, e0) pξ,πc
t+1 (de0 | ε0
(7.9) 1:t) λε(de)
where for every (e, e0) ∈ E × E0
DF 0
t (e, e0) :=EPξ,πc hfˆ F(sξ,πc,P
t , aπc,P
t , Λξ,πc
t , e, e0) F 0
t
i
=
Z
S×A
fˆ F(s, a, Λξ,πc
t , e, e0) Λξ,πc
t (ds, da).
Moreover, from (2.33) in Lemma 2.25 it holds for every (e, e0) ∈ E × E0 that Pξ,πc -a.s.,
DF 0
t (e, e0) =
Z
S×A
fˆ F s, a, μξ,πc
t ⊗ˆ πc
t (· | ·, μξ,πc
t ) , e, e0 μξ,πc
t ˆ⊗ πc
t (· | ·, μξ,πc
t ) (ds, da)
=
Z
S×A
fˆ F s, a, μ ̃t ⊗ˆ πc
t (· | ·, μ ̃t) , e, e0 μ ̃t ⊗ˆ πc
t (· | ·, μ ̃t) (ds, da)
where the second inequality follows from the induction assumption at t. Furthermore, since s ̃t is Gt measurable (noting that Ft ⊂ Gt), an application of Lemma 6.1
ensures that μ ̃t = LPξ,πc (s ̃t|Ft0) Pξ,πc -a.s.. This implies that Pξ,πc -a.s.
DF 0
t (e, e0) =
Z
S×A
fˆ F s, a, μ ̃t ⊗ˆ πc
t (· | ·, μ ̃t) , e, e0 LPξ,πc (s ̃t|F 0
t ) ˆ⊗ πc
t (· | ·, μ ̃t) (ds, da)
= EPξ,πc Z
A
fˆ F s ̃t, a, μ ̃t ⊗ˆ πc
t (· | ·, μ ̃t) , e, e0 πc
t (da | s ̃t, μ ̃t) F 0
t
(7.10)
= EPξ,πc hfˆ F s ̃t,  ̃at, μ ̃t ⊗ˆ πc
t (· | ·, μ ̃t) , e, e0 F 0
t
i
,
where the last equality holds by definition of  ̃at given in (7.3) (which follows from the property of the Blackwell-Dubins function and the fact that LPξ,πc (ht(θt)) = U[0,1]; see Remark 2.19). Combining (7.9) with (7.9) and (7.8), we hence have
EPξ,πc
gˆt+1(ε0
1:t+1)fˆ(sξ,πc,Pξ,πc
t+1 ) = EPξ,πc h
gˆt+1(ε0
1:t+1)fˆ F s ̃t,  ̃at, μ ̃t ⊗ˆ πc
t (· | ·, μ ̃t) , εt+1, ε0
t+1
i
= EPξ,πc
gˆt+1(ε0
1:t+1)fˆ(s ̃t+1)
= EPξ,πc
gˆt+1(ε0
1:t+1)
Z
S
fˆ(s)LPξ,πc (s ̃t+1|ε0
1:t+1)(ds) ,
where the last line holds by definition of s ̃t+1 given in (7.3). Moreover, since s ̃t+1 is Gt+1 measurable, another application of Lemma 6.1 ensures that
LPξ,πc (s ̃t+1|ε0
1:t+1) = μ ̃t+1, Pξ,πc -a.s.,
which ensures (7.7) to hold, as claimed.

41
By the induction hypothesis, (7.6) holds for all t ≥ 0.
Step 3: Recall that Pξ,πc ∈ Q is the measure induced by (pξ,πc
t )t≥1 ∈ K0 given in (7.2) and (7.5)
(see Step 1). Then from Remark 2.3 (iii), it holds that Pξ,a-a.s.
LPξ,πc (ε0
1) = pξ,πc
1 ∈ P0,
LPξ,πc (ε0
t |F 0
t−1) = pξ,πc
t (·|ε0
1:t−1) ∈ P0 for all t ≥ 2.
(7.11)
Moreover, by (7.6) in Step 2 and (2.33) in Lemma 2.25, it holds that Pξ,πc -a.s.
pξ,πc
1 = p∗(Λξ,πc
0 ), pξ,πc
t (·|ε0
1:t−1) = p∗ Λξ,πc
(7.12) t−1 for all t ≥ 2,
which ensures (2.35) to hold, as claimed. A direct consequence of (2.34) ensures (2.36) to hold, as claimed. This completes the proof. □
7.3. Proof of Corollary 2.28. As the essential arguments of the proof closely follow those of Theorem 2.21, we provide the outline of the proof and omit some details here. Step 1. For notational simplicity, set μ := L (ξ). We first consider for every n ∈ N
I ξ,πc,∗
n := inf
P∈Q EP
n−1
X
t=0
βt r(sξ,πc,∗,P
t , aπc,∗,P
t , Λξ,πc,∗,P
t ) + βn V ∗(μξ,πc,∗,P
n ),
where for each P ∈ Q, (μξ,πc,∗,P
t )t≥0 and (Λξ,πc,∗,P
t )t≥0 are given in (2.32).
Note that by (2.33) in Lemma 2.25 and definition of πc,∗
t = πc,∗
loc given in (2.37) together with the property (2.38), it holds for every P ∈ Q that P-a.s.,
π∗(μξ,πc,∗,P
t ) = Λξ,πc,∗,P
t for all t ≥ 0.
From this, using the same arguments presented for (6.25), we have that for every n ∈ N
I ξ,πc,∗
n = inf
P∈Q EP
n−1
X
t=0
βt r(μξ,πc,∗,P
t , Λξ,πc,∗,P
t ) + βn V ∗(μξ,πc,∗,P
n ).
Hence, from the representation of the Markov decision process of the lifted state process in (2.34) (see Lemma 2.25), we can use the same arguments presented for Steps 1 and 2 in the proof of Theorem 2.21 (that relies on the local optimality of π∗(μξ,πc,∗,P
t ) to T V ∗(μξ,πc,∗,P
t ) in Proposition 2.15 (ii) and the fixed point theorem in Proposition 2.16; see Section 6) to have
V ∗(μ) ≤ lim sup
n→∞
I ξ,πc,∗
n ≤ J πc,∗ (ξ) ≤ V c(ξ).
Step 2. For every πc ∈ Πc, let Pξ,πc ∈ Q be induced by some (pξ,πc
t )t≥1 ∈ K0 satisfying (2.26)
and (2.35) (see Lemma 2.26). Then define Vπc (ξ) by
V πc (ξ) := EPξ,πc ∞
X
t=0
β t r (sξ,πc ,Pξ,πc
t , aπc,Pξ,πc
t , Λξ,πc
t ) = EPξ,πc ∞
X
t=0
βt r pjS (Λξ,πc
t ), Λξ,πc
t,
where Λξ,πc
t is the conditional joint law of (sξ,πc,Pξ,πc
t , aπc,P
t ) under Pξ,πc given ε01:t.
By the local optimality of p∗(Λξ,πc
t ) to T V ∗(pjS (Λξ,πc
t )) (see Proposition 2.15 (i)), we can use the same arguments presented for Step 3 in the proof of Theorem 2.21 to have
V c(ξ) ≤ sup
π c ∈Πc
Vπc (ξ) ≤ sup
π c ∈Πc
∞
X
t=0
βt EPξ,πc
[V ∗(μξ,πc
t )] − βt+1 EPξ,πc
[V ∗(μξ,πc
t+1 )] = V ∗(μ),
where μξ,πc
t is the conditional law of sξ,πc,Pξ,πc
t under Pξ,πc given ε01:t.

42 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
Therefore, we have obtained that V ∗(μ) = V c(ξ), as claimed. In fact, V ∗(μ) = V (ξ) follows from Theorem 2.21. Hence the statement (i) holds.
Step 3. Lastly, we consider Pξ,πc,∗ ∈ Q which is induced by (pξ,πc,∗
t )t≥1 ∈ K0 satisfying (2.35)
and (2.36) (see Lemma 2.26). Then by definition of πc,∗ and of Pξ,πc,∗ (noting that both satisfy the local optimality given in Proposition 2.15), it holds that for every t ≥ 0
EPξ,πc,∗
[V ∗(μξ,πc,∗
t )] = EPξ,πc,∗
[T V ∗(μξ,πc,∗
t )]
= EPξ,πc,∗
r pjS (Λξ,πc,∗
t ), Λξ,πc,∗
t +β
Z
P (S )
V ∗(μ ̃′)p dμ ̃′| pjS (Λξ,πc,∗
t ), Λξ,πc,∗
t , p∗(Λξ,πc,∗
t ).
Hence by using the same arguments presented for Step 4 of the proof of Theorem 2.21, we deduce that (2.39) holds. This completes the proof. □
Appendix A. Supplementary statements
Let us provide some elementary observations on conditional laws.
Lemma A.1. Fix a probability space (Ω ̃ , F ̃, P ̃). Let X be Borel space and Y be measurable space. For every random elements X and Y with values in X and Y , respectively, the following hold:
(i) There exists a kernel kX |Y : Y ∋ y 7→ kX |Y (dx|y) ∈ P(X) such that for every B ∈ B(X), P ̃(X ∈ B|Y) = kX |Y (B|Y)  ̃P-a.s., and kX |Y is unique L ̃P(Y)-a.e.. As a consequence,
kX |Y (· | Y) is σ(Y) measurable and we denote for every ω ̃ ∈ Ω ̃
L ̃P(X |Y)(ω ̃) := kX |Y (·|Y)(ω ̃),
i.e., a conditional law of X given Y; see, e.g., [46, Section 6, p.106–107]. (ii) If X is given by X = φ(Y, Z), where φ : Y × Z → X is a measurable function and Z is a random element in Z and independent of Y, then L ̃P(X |Y) = L ̃P(φ(y, Z))|y=Y and L ̃P(X |Y) is σ(Y) measurable.
Proof. Part (i) is shown in [46, Theorem 6.3]. We proceed to prove (ii), which is a consequence of (i) with an application of Fubini’s theorem. Clearly, it is sufficient to show that for any bounded measurable function g : Y → R and bounded Borel measurable function f : X → R,
E ̃P g(Y)
Z
X
f (x′)L ̃P(X |Y)(dx′) = E ̃P g(Y)
Z
X
f (x′)L ̃P(φ(y, Z))|y=Y (dx′) .
Indeed, by definition of the conditional law L ̃P(X |Y) (given in (i)) it holds that
E ̃P g(Y)
Z
X
f (x′)L ̃P(X |Y)(dx′) = E ̃P g(Y)EP ̃[f (X )|Y] = EP ̃[g(Y)f (X )] =: I,
where the second equality follows from the σ(Y)-measurability of g(Y) and the tower property. Moreover since X = φ(Y, Z), and Y and Z are independent,
I = EP ̃h
g(Y)E ̃P f (φ(Y, Z))|Y
i
=
Z
Y
g(y)E ̃Ph
f (φ(y, Z))
i
L ̃P (Y )(dy)
=
Z
Y
g(y)E ̃P
Z
X
f (x′)L ̃P(φ(y, Z))(dx′) LP ̃(Y)(dy)
= E ̃P g(Y)
Z
X
f (x′)L ̃P(φ(y, Z))|y=Y (dx′) ,
where the second equality follows from definition of L ̃P(φ(y, Z)) and the last one follows from Fubini’s theorem (since both f and g are bounded). The σ(Y)-measurability of L ̃P(X |Y) follows from (i). This concludes the proof. □

43
Lemma A.2 (Blackwell and Dubins [12]). For any Polish space X, there exists a Borel measurable function ρX : P(X) × [0, 1] → X satisfying the following conditions:
(i) for every λ ∈ P(X) and every uniform random variable U ∼ U[0,1], ρX (λ, U ) is distributed according to λ; (ii) for almost every u, the map λ 7→ ρX (λ, u) is continuous w.r.t. the weak topology of P(X).
We call ρX the Blackwell–Dubins function of the space X.
Lemma A.3 (Universal disintegration; see, e.g., [47, Corollarly 1.26]). For any Borel spaces X and Y , there exists a kernel KX×Y : X × P(X × Y ) × P(X) ∋ (x, λ, η) 7→ KX×Y (·|x, λ, η) ∈ P(Y ) such that for every λ ∈ P(X × Y ) and η ∈ P(X) satisfying pjX (λ) ≪ η, it holds that
λ = η ˆ⊗ KX×Y ( · | ·, λ, η),
Moreover, KX×Y ( · |, ·, λ, η) is unique η-a.e. for fixed λ and η.
References
[1] C. D. Aliprantis and K. C. Border. Infinite dimensional analysis: A Hitchhiker’s Guide. Springer, 2006. [2] A. Balata, C. Huré, M. Laurière, H. Pham, and I. Pimentel. A class of finite-dimensional numerically solvable McKean–Vlasov control problems. ESAIM: Proc. Surv., 65:114–144, 2019. [3] M. Basei and H. Pham. A weak martingale approach to linear-quadratic McKean–Vlasov stochastic control problems. J. Optim. Theory Appl., 181:347–382, 2019. [4] N. Bäuerle. Mean field Markov decision processe-
s. Appl. Math. Optim., 88(1):12, 2023. [5] N. Bäuerle and A. Glauner. Distributionally robust Markov decision processes and their connection to risk measures. Math. Oper. Res., 47(3):1757–1780, 2022. [6] N. Bäuerle and U. Rieder. Markov decision processes with applications to finance. Springer Science & Business Media, 2011. [7] E. Bayraktar and T. Chen. Nonparametric adaptive robust control under model uncertainty. SIAM Journal on Control and Optimization, 61(5):2737–2760, 2023.
[8] E. Bayraktar, A. Cosso, and H. Pham. Randomized dynamic programming principle and Feynman–Kac representation for optimal control of McKean–Vlasov dynamics. Trans. Amer. Math. Soc., 370(3):2115–2160, 2018. [9] E. Bayraktar and A. D. Kara. Infinite horizon average cost optimality criteria for mean-field control. SIAM J. Control Optim., 62(5):2776–2806, 2024. [10] A. Bensoussan, J. Frehse, and P. Yam. Mean field games and mean field type control theory, volume 101. New York: Springer-Verlag, 2013-
. [11] A. Bensoussan, P. J. Graber, and S. C. P. Yam. Control on Hilbert spaces and application to some mean field type control problems. Ann. Appl. Probab., 34(4):4085–4136, 2024. [12] D. Blackwell and L. E. Dubins. An extension of Skorohod’s almost sure representation theorem. Proc. Amer. Math. Soc., 89(4):691–692, 1983. [13] V. I. Bogachev. Measure Theory: Volume II. Springer, 2007. [14] E. Boissard and T. Le Gouic. On the mean speed of convergence of empirical and occupation measures in Wasser-
stein distance. In Ann. inst. Henri Poincare (B) Probab. Stat., volume 50, pages 539–563, 2014. [15] M. Burzoni, V. Ignazio, A. M. Reppen, and H. M. Soner. Viscosity solutions for controlled McKean–Vlasov jump-diffusions. SIAM J. Control Optim., 58(3):1676–1699, 2020. [16] R. Carmona. Applications of mean field games in financial engineering and economic theory. preprint, arXiv:2012.05237, 2020. [17] R. Carmona and F. Delarue. Probabilistic theory of mean field games with applications I-II. Spring-
er, 2018. [18] R. Carmona, J.-P. Fouque, and L.-H. Sun. Mean field games and systemic risk. Commun. Math. Sci., 13(4):911933, 2015. [19] R. Carmona, K. Hamidouche, M. Laurière, and Z. Tan. Policy optimization for linear-quadratic zero-sum mean-field type games. In 2020 59th IEEE Conference on Decision and Control (CDC), pages 1038–1043. IEEE, 2020. [20] R. Carmona, K. Hamidouche, M. Laurière, and Z. Tan. Linear-quadratic zero-sum mean-field type games: Optimality conditions and policy optimization-
. J. Dyn. Games, 8(4), 2021. [21] R. Carmona and M. Laurière. Deep learning for mean field games and mean field control with applications to finance. preprint, arXiv:2107.04568, 7, 2021.

44 MATHIEU LAURIÈRE, ARIEL NEUFELD, AND KYUNGHYUN PARK
[22] R. Carmona, M. Laurière, and Z. Tan. Model-free mean-field reinforcement learning: mean-field MDP and mean-field Q-learning. Ann. Appl. Probab., 33(6B):5334–5381, 2023. [23] Z. Chen and L. Epstein. Ambiguity, risk, and asset returns in continuous time. Econometrica, 70(4):1403–1443, 2002. [24] A. Cosso and H. Pham. Zero-sum stochastic differential games of generalized McKean–Vlasov type. J. Math. Pures Appl., 129:180–212, 2019. [25] K. Cui, M. Li, C. Fabian, and H. Koeppl. Scalable task-drive-
n robotic swarm control via collision avoidance and learning mean-field control. In 2023 IEEE International Conference on Robotics and Automation (ICRA), pages 1192–1199. IEEE, 2023. [26] M. F. Djete. Extended mean field control problem: A propagation of chaos result. Electron. J. Probab., 27:1–53, 2022. [27] M. F. Djete, D. Possamaï, and X. Tan. McKean–Vlasov optimal control: limit theory and equivalence between different formulations. Math. Oper. Res., 47(4):2891–2930, 2022. [28] M. F. Djete, D.-
 Possamaï, and X. Tan. McKean–Vlasov optimal control: The dynamic programming principle. Ann. Probab., 50(2):791–833, 2022. [29] J. Dow and S. R. da Costa Werlang. Uncertainty aversion, risk aversion, and the optimal choice of portfolio. Econometrica, pages 197–204, 1992. [30] L. El Ghaoui and A. Nilim. Robust solutions to Markov decision problems with uncertain transition matrices. Oper. Res., 53(5):780–798, 2005. [31] K. Elamvazhuthi and S. Berman. Mean-field models in swarm robotics: A survey. -
Bioinsp. Biomim., 15(1):015001, 2019. [32] R. Elie, E. Hubert, T. Mastrolia, and D. Possamaï. Mean–field moral hazard for optimal energy demand response management. Math. Finance, 31(1):399–473, 2021. [33] M. Fischer and G. Livieri. Continuous time mean-variance portfolio optimization through the mean field approach. ESAIM: Probab. Stat., 20:30–44, 2016. [34] M. Fornasier, S. Lisini, C. Orrieri, and G. Savaré. Mean-field optimal control as gamma-limit of finite agent controls. Eur. J. Appl. Math.,-
 30(6):1153–1186, 2019. [35] N. Fournier and A. Guillin. On the rate of convergence in Wasserstein distance of the empirical measure. Probab. Theory Relat. Fields, 162(3):707–738, 2015.
[36] G. Fu, U. Horst, and X. Xia. A mean-field control problem of optimal portfolio liquidation with semimartingale strategies. Math. Oper. Res., 49(4):2356–2384, 2024. [37] L. Garlappi, R. Uppal, and T. Wang. Portfolio selection with parameter and model uncertainty: A multi-prior approach. Rev. Financial Stud., 20(1):41–81, 2007. [38] I. Gilboa and D. Schmeidler. Maxmin expected utility with non-unique prior. J. Math. Econ., 18(2):141–153, 1989. [39] P. J. Graber. Linear quadratic mean field type-
 control and mean field games with common noise, with application to production of an exhaustible resource. Appl. Math. Optim., 74:459–486, 2016. [40] H. Gu, X. Guo, X. Wei, and R. Xu. Mean-field controls with Q-learning for cooperative MARL: convergence and complexity analysis. SIAM J. Math. Data Sci., 3(4):1168–1196, 2021. [41] H. Gu, X. Guo, X. Wei, and R. Xu. Dynamic programming principles for mean-field controls with learning. Oper. Res., 71(4):1040–1054, 2023. [42] H. Gu, X. Guo, X. Wei, and-
 R. Xu. Mean-field multiagent reinforcement learning: A decentralized network approach. Math. Oper. Res., 50(1):506–536, 2025. [43] L. P. Hansen and T. J. Sargent. Robustness. Princeton University Press, 2008. [44] J. Huang and M. Huang. Robust mean field linear-quadratic-gaussian games with unknown L2-disturbance. SIAM J. Control Optim., 55(5):2811–2840, 2017. [45] J. Huang, B.-C. Wang, and J. Yong. Social optima in mean field linear-quadratic-Gaussian control with volatility uncertainty. SIAM J.-
 Control Optim., 59(2):825–856, 2021. [46] O. Kallenberg. Foundations of modern probability. Probability and its Applications. Springer, New York, 2nd ed., 2002.
[47] O. Kallenberg. Random measures, theory and applications. Springer, 2017.
[48] A. Khamis, A. Hussein, and A. Elmogy. Multi-robot task allocation: A review of the state-of-the-art. Cooperative robots and sensor networks 2015, pages 31–51, 2015.
[49] D. Lacker. Limit theory for controlled McKean–Vlasov dynamics. SIAM J. Control Optim., 55(3):1641–1672, 2017. [50] J. Langner, A. Neufeld, and K. Park. Markov-Nash equilibria in mean-field games under model uncertainty. preprint, arXiv:2410.11652, 2024.

45
[51] M. Laurière and O. Pironneau. Dynamic programming for mean-field type control. J. Optim. Theory Appl., 169(3):902–924, 2016. [52] K. Lerman, A. Martinoli, and A. Galstyan. A review of probabilistic macroscopic models for swarm robotic systems. In International workshop on swarm robotics, pages 143–152. Springer, 2004. [53] M. Li, D. Kuhn, and T. Sutter. Policy gradient algorithms for robust MDPs with non-rectangular uncertainty sets. preprint, arXiv:2305.19004, 2023.
[54] Y. Liang, B.-C. Wang, and H. Zhang. Robust mean field linear quadratic social control: Open-loop and closed-loop strategies. SIAM J. Control Optim., 60(4):2184–2213, 2022. [55] Z. Liu, Q. Bai, J. Blanchet, P. Dong, W. Xu, Z. Zhou, and Z. Zhou. Distributionally robust Q-learning. In International Conference on Machine Learning, pages 13623–13643. PMLR, 2022.
[56] C. I. Lu, J. Sester, and A. Zhang. Distributionally robust deep Q-learning. preprint, arXiv:2505.19058, 2025. [57] M. Motte and H. Pham. Mean-field Markov decision processes with common noise and open-loop controls. Ann. Appl. Probab., 32(2):1421–1458, 2022. [58] M. Motte and H. Pham. Quantitative propagation of chaos for mean field Markov decision process with common noise. Electron. J. Probab., 28:1–24, 2023. [59] A. Neufeld and J. Sester. Robust Q-learning algorithm for Markov decision pro-
cesses under Wasserstein uncertainty. Automatica, 168:111825, 2024. [60] A. Neufeld and J. Sester. Non-concave distributionally robust stochastic control in a discrete time finite horizon setting. To appear in Math. Finance, arXiv:2404.05230, 2025+.
[61] A. Neufeld, J. Sester, and M. Šikić. Markov decision processes under model uncertainty. Math. Finance, 33(3):618–665, 2023. [62] H. Pham. Linear quadratic optimal control of conditional McKean–Vlasov equation with random coefficients and applications. Probab. Uncertain. Quant. Risk, 1:1–26, 2016. [63] H. Pham and X. Wei. Discrete time McKean–Vlasov control problem: A dynamic programming approach. Appl. Math. Optim., 74(3):487–506, 2016. [64] H. Pham and X. Wei. Dynamic programming for optimal-
 control of stochastic McKean–Vlasov dynamics. SIAM J. Control Optim., 55(2):1069–1101, 2017. [65] S. Sanjari and S. Yüksel. Optimal solutions to infinite-player stochastic teams and mean-field teams. IEEE Trans. Autom. Control, 66(3):1071–1086, 2020. [66] H. M. Soner and Q. Yan. Viscosity solutions for McKean–Vlasov control on a torus. SIAM J. Control Optim., 62(2):903–923, 2024. [67] C. Villani. Optimal Transport: Old and New, volume 338. Springer Science & Business Media, 2008. [68] B.-C. Wang -
and J. Huang. Social optima in robust mean field LQG control. In 2017 11th Asian Control Conference (ASCC), pages 2089–2094. IEEE, 2017. [69] B.-C. Wang, J. Huang, and J.-F. Zhang. Social optima in robust mean field LQG control: From finite to infinite horizon. IEEE Trans. Autom. Control, 66(4):1529–1544, 2020. [70] B.-C. Wang and J.-F. Zhang. Social optima in mean field linear-quadratic-gaussian models with markov jump parameters. SIAM J. Control Optim., 55(1):429–456, 2017. [71] W. Wiesemann, D.-
 Kuhn, and B. Rustem. Robust Markov decision processes. Math. Oper. Res., 38(1):153–183, 2013. [72] H. Xu and S. Mannor. Distributionally robust Markov decision processes. Math. Oper. Res., 37(2):288–301, 2012. [73] I. Yang. A convex optimization approach to distributionally robust Markov decision processes with Wasserstein distance. IEEE Control Syst. Lett., 1(1):164–169, 2017. [74] M. A. U. Zaman, M. Lauriere, A. Koppel, and T. Başar. Robust cooperative multi-agent reinforcement learning: A mean-
-field type game perspective. In 6th Annual Learning for Dynamics & Control Conference, pages 770783. PMLR, 2024.
Shanghai Frontiers Science Center of Artificial Intelligence and Deep Learning, and NYUECNU Institute of Mathematical Sciences, NYU Shanghai Email address: mathieu.lauriere@nyu.edu
Division of Mathematical Sciences, Nanyang Technological University Email address: ariel.neufeld@ntu.edu.sg
Division of Mathematical Sciences, Nanyang Technological University Email address: kyunghyun.park@ntu.edu.sg

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:53.909Z
- **Text Length:** 129504 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 45 of 45
