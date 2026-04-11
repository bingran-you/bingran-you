# PDF Document: Xu and Zhao - 2025 - Privacy-Constrained Signals.pdf

**File Path:** Xu and Zhao - 2025 - Privacy-Constrained Signals.pdf

**Processed Date:** 2026-02-10T18:13:30.777Z

**File Size:** 483.11 KB

**Total Pages:** 26

**Extracted Pages:** 26

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3234

**Title:** Privacy-Constrained Signals

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Privacy-Constrained Signals
Zhang Xu∗ Wei Zhao†
November 27, 2025
Abstract
This paper provides a unified approach to characterize the set of all feasible signals
subject to privacy constraints. The Blackwell frontier of feasible signals can be de
composed into minimum informative signals achieving the Blackwell frontier of privacy
variables, and conditionally privacy-preserving signals. A complete characterization of
the minimum informative signals is then provided. We apply the framework to ex-post
privacy (including differential and inferential privacy) and to constraints on posterior
means of arbitrary statistics.
∗School of Economics, Renmin University of China. Email : xuzhang@ruc.edu.cn †School of Economics and Management, Tsinghua University. Email : wei.zhao@outlook.fr
1
arXiv:2511.21196v1 [econ.TH] 26 Nov 2025

Contents
1 Introduction 3
2 Model 4
2.1 Privacy-Constrained Signals . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
3 Characterization of Privacy-Constrained Signals 7
4 Blackwell Frontier of Privacy-Permissible Set 12
4.1 Ex-Post Privacy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12
4.2 Posterior-Mean Privacy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14
5 Discussion and Future Work 15
A Appendix 17
A.1 Proofs for Section 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
A.2 Proofs for Section 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
2

1 Introduction
The big data plays a critical role in economic decisions, promoting efficiency in allocation.
At the same time, growing concern on privacy has been drawn. The abuse of sensitive
(personal) data, leading to statistical and price discrimination, imposes negative externality
on the economy as a whole. A natural question is, what is the set of feasible datasets, subject
to privacy constraints on sensitive information? The past literature on this question mainly
focus on perfectly privacy-preserving constraints. However, privacy-preserving constraints
may be too demanding in practical operations. In this spirit, various orders, both complete
and partial, have been proposed to measure the degree of information leakage.
This paper develops a general framework for privacy constraints. We model information
disclosure through signals defined on an abstract state of the world ω ̃ ∈ Ω, and represent
the sensitive information as a random variable θ ̃ : Ω → Θ defined on the same state space.
For instance, if Ω is an n-dimensional space, the sensitive component Θ may correspond to
its first m dimensions with m < n. Following Blackwell (1953), each signal (experiment)
can be represented by the distribution of posteriors it induces. We therefore model privacy
constraints as a subset of distributions over posteriors about the sensitive variable θ ̃, which
we refer to as the privacy-permissible set. A signal is privacy-constrained if the posterior
distribution it induces, when marginalized over Θ, belongs to this permissible set. For the
analysis to be well behaved and natural, we assume that the privacy-permissible set is a
lower set with respect to the Blackwell order, that is, whenever a signal is permissible, any
less informative (in Blackwell sense) signal is also permissible.
To characterize the set of privacy-constrained signals, it is equivalent to describe its
Blackwell frontier, that is, the set of all privacy-constrained signals that are Blackwell
undominated. Theorem 1 reduces this task to characterizing the Blackwell frontier of the
privacy-permissible set itself. Given a distribution over posteriors about the sensitive vari
able, γ ∈ ∆(∆(Θ)), we first construct a minimum-informative extension τγ, which preserves
the marginal distribution over ∆(Θ) while revealing as little information as possible about
the state ω ̃. Afterward, we disclose τγ, and then disclose a Blackwell-undominated signal
among those that are conditionally privacy-preserving given τγ. The latter class of signals
is characterized in Strack and Yang (2024). This sequential procedure yields an element of
the Blackwell frontier of privacy-constrained signals.
Theorem 2 describes how to generate all minimum-informative extensions for a given
γ ∈ ∆(∆(Θ)). Under a minimum-informative extension, each posterior over θ ̃ in the support
of γ is extended to exactly one posterior over the full state ω ̃. Thus, computing a minimum
3

informative extension amounts to assigning a conditional distribution of ω ̃ given θ ̃ to every
element in the support of γ. In the discrete setting, this assignment can be expressed through
a finite collection of linear constraints.
However, characterizing the Blackwell frontier of an abstract privacy-permissible set
remains challenging. In Section 4, we focus on two important classes of privacy constraints
and show how to characterize their Blackwell frontiers. The first class is ex-post privacy,
which encompasses differential privacy Dwork et al. (2006), inferential privacy Ghosh and
Kleinberg (2016); Wang et al. (2025), and Bayesian privacy Eilat et al. (2021). When the
regulator is concerned with ex post privacy loss, the constraint is imposed directly on the
posterior beliefs about the sensitive variable θ ̃. Ex-post privacy specifies a subset of posteriors
over θ ̃, and a signal is ex post privacy-constrained if every realized posterior about θ ̃ lies in this
subset. Proposition 1 shows that under ex-post privacy, characterizing the Blackwell frontier
of the privacy-permissible set reduces to identifying the extreme points of the permissible
posteriors over θ ̃. Proposition 2 further provides an explicit characterization of the Blackwell
frontier under inferential privacy. Related results for the discrete cases of inferential privacy
and differential privacy appear in Xu and Zhao (2025). The second class is posterior-mean
privacy, where the regulator is concerned only with the information revealed about the
posterior mean of a statistic defined on the sensitive variable. In this case, Proposition 3
provides a clean characterization of the corresponding Blackwell frontier.
The remainder of the paper is organized as follows. Section 2 introduces the formal
setting. Section 3 presents the general characterization of privacy-constrained signals. Sec
tion 4 characterizes the Blackwell frontier of the privacy-permissible set for several privacy
constraints. Section 5 offers further discussion. All proofs are collected in the Appendix.
2 Model
Let (Ω, B(Ω), μ0) be a probability space, where B(·) is the Borel σ-algebra generator, (Ω, B(Ω))
is a standard Borel space and μ0 ∈ ∆(Ω) is an interior prior.1 The state is a random variable
ω ̃ ∼ μ0 and ω ∈ Ω is a realization of state. The privacy is formalized as a random variable
θ ̃ : Ω → Θ, where (Θ, B(Θ)) is a standard Borel space. θ ∈ Θ is a realization of privacy. For
example, ω is the vector containing consumer characteristics such as gender, race, willingness
to pay, and history records, and θ is the sensitive subvector consisting of gender and race.
1A Borel space (E, B(E)) is standard if there is an isomorphism ψ : E → F for some F ∈ B(R). An isomorphism is a bijection ψ such that both ψ and ψ−1 are measurable. (  ̧Cinlar (2011), p.11.)
4

A signal is a random variable π : Ω × [0, 1] → S, where (S, B(S)) is a standard Borel
space. An element s ∈ S is a signal realization. Let r ̃ be an auxiliary random variable
uniformly distributed on [0, 1]. For each realization (ω, r), the signal realization is given by
π(ω, r). Let λ be the Lebesgue measure and P := μ0 × λ be the product measure induced by
μ0 over Ω and λ over [0, 1]. Then the distribution of π is pπ(·) := P({(ω, r) : π(ω, r) ∈ ·}) (i.e.,
pπ(B) = P({(ω, r) : π(ω, r) ∈ B}), ∀B ∈ B(S), and similarly hereinafter).2 The conditional
probability of π given ω is pπ
ω(·) := P(π ∈ ·|ω).3
Observing signal realization s induces the posterior μs(·) := P(ω ̃ ∈ ·|s). Given signal π,
let μ ̃π denote the associated belief-valued random variable of posterior belief μs. Moreover, let
⟨π⟩ (·) := pπ({s ∈ S : μs ∈ ·}) denote the distribution of μ ̃π. We write (·)θ for the operator
mapping a distribution over Ω or ∆(Ω) to its marginal over Θ or ∆(Θ). For μ ∈ ∆(Ω),
μθ(·) = μ {ω : θ ̃(ω) ∈ ·} , and for τ ∈ ∆(∆(Ω)), τ θ(·) = τ {μ : μθ ∈ ·} . Therefore, μθ
s
represents the posterior about privacy induced by signal realization s, and ⟨π⟩θ represents
the distribution of posteriors about privacy.
To keep the notation clear, we use μ ∈ ∆(Ω) to denote an arbitrary posterior over the
state ω ̃, and ν ∈ ∆(Θ) to denote an arbitrary posterior over the privacy variable θ ̃. Likewise,
we use τ ∈ ∆(∆(Ω)) for an arbitrary distribution over posteriors about ω ̃, and γ ∈ ∆(∆(Θ))
for an arbitrary distribution over posteriors about θ ̃.
Denote Π by the set of all signals. For two signals π, π′ ∈ Π, we say that π Blackwell
dominates π′ and write π ⪰ π′ provided ⟨π⟩ is a mean-preserving spread of ⟨π′⟩ which is also
denoted as ⟨π⟩ ⪰ ⟨π′⟩ (Blackwell 1951, 1953; Strassen 1965).4 Given π ⪰ π′, if π ⪯ π′ also
holds, then π and π′ are Blackwell equivalent, written π ∼ π′; otherwise, π strictly Blackwell
dominates π′, written π ≻ π′. We say that π Blackwell dominates π′ in terms of θ ̃ and write
π ⪰θ π′ if ⟨π⟩θ is a mean-preserving spread of ⟨π′⟩θ. The corresponding relations ∼θ and ≻θ
are defined analogously. Whenever we refer to Blackwell dominance without the qualifier
“in terms of θ ̃,” we mean dominance with respect to ω ̃.
2pπ is a probability measure on (S, B(S)); it is called distribution of π. If S ⊆ R, then F π : R → [0, 1], s.t. F π(s) = pπ(π ≤ s) for all s ∈ R is called the distribution function or CDF of π. 3Since (Ω × [0, 1], B(Ω) ⊗ B([0, 1])) and (S, B(S)) are standard Borel spaces, there exist regular versions of P(π ∈ ·|ω) and P(ω ̃ ∈ ·|s) respectively (C ̧ inlar (2011), Theorem 2.19, p.154). 4 For τ, τ ′ ∈ ∆(∆(Ω)), τ is a mean-preserving spread of τ ′ if there is a dilation K : ∆(Ω) → ∆(∆(Ω)) [i.e., a Ma-
rkov kernel such that ∀μ′ ∈ supp(τ ′), μ′ = R
∆(Ω) μK(dμ|μ′) (mean-preservation)], such that
τ (·) = R
∆(Ω) K(·|μ′)τ ′(dμ′) (spread). The similar definition applies to any γ, γ′ ∈ ∆(∆(Θ)).
5

2.1 Privacy-Constrained Signals
From an informational perspective, each signal can be identified with the posterior distri
bution it induces. Thus, analyzing signals is equivalent to working directly with Bayesian
plausible distributions over posteriors (cf. Blackwell (1953); Kamenica and Gentzkow (2011)).
Let Γ := {γ ∈ ∆(∆(Θ)) : Eγ[ν] = μθ
0} denote the Bayesian-plausible distributions of
posteriors about privacy. If there is no constraint on how much information about privacy
may be disclosed, then any posterior distribution in Γ can be induced. Hence, in general, a
privacy constraint can be imposed directly on the set Γ.
In particular, let
P ⊆Γ
be a nonempty subset containing the posterior distributions about θ ̃ that are allowed to be
disclosed. We refer to P as the privacy-permissible set. To ensure that the privacy constraint
is well behaved, we impose the following assumptions on P.
Assumption 1. P is a lower set with respect to the Blackwell order; that is, if γ ∈ P and
γ′ ⪯ γ, then γ′ ∈ P.
Assumption 1 is natural and is required by any reasonable notion of a privacy constraint.
It states that if a certain amount of information about privacy may be disclosed, then
revealing any less informative disclosure must also be permissible.
Assumption 2. P is a closed set; that is, if {γt}t∈N+ satisfies γt ∈ P for all t ∈ N+ and
γ∗ := limt→∞ γt exists, then γ∗ ∈ P.
Assumption 2 is a technical requirement that simplifies our characterization of privacy
constrained signals. When a decision-maker selects a signal in P to maximize an objective
function, taking the supremum is equivalent to optimizing over the closure of P. Let
P := {γ ∈ P : ∄γ′ ∈ P such that γ′ ≻ γ}
be the Blackwell frontier of P. Under Assumption 1 and 2, P ̸= ∅ and P = {γ ∈ Γ :
∃γ ∈ P such that γ ⪯ γ}.5 P gives several upper bounds of the amount of information
5Let {γt}t∈N+ be a sequence in P such that γt ≺ γt+1 for all t. For each t, let ν ̃t be a belief-valued random variable satisfying ν ̃t ∼ γt. Then {ν ̃t}t∈N+ is a martingale (rigorously, it requires γt+1 is sufficient for γt, see footnote 9). By the martingale convergence theorem (Doob 1951), the limit ν∗ = limt→∞ νt exists. Let γ∗ be the distribution of ν∗. Then, limt→∞ γt = γ∗. By Assumption 2, γ∗ ∈ P. Then, γ∗ ∈ P.
6

can be disclosed about privacy. Moreover, when P is not closed, our characterization of
privacy-constrained signals can be made correct by removing some signals whose induced
distribution over posterior about privacy is in the Blackwell frontier P.
Definition 1. A signal π is a P-privacy-constrained signal if ⟨π⟩θ ∈ P.
Example 1 (Privacy-Preserving Signals). When P = {δμθ
0}, P-privacy-constrained signals
reduce to the privacy-preserving signals introduced by He et al. (2021) and Strack and Yang
(2024). Strack and Yang show that all privacy-preserving signals can be generated by garbling
and reordering of a conditionally revealing quantile signal.
Example 2 (Single-Bound Privacy). A natural generalization of privacy-preserving signals
is to consider P = {γ ∈ Γ : γ ⪯ γ} for some γ ∈ Γ. The element γ provides a single upper
bound on the amount of information that may be disclosed about privacy. A signal π is said
to be γ-privacy-constrained if ⟨π⟩θ ⪯ γ.
This framework also includes differential privacy (Dwork et al. 2006), inferential privacy
(Ghosh and Kleinberg 2016; Wang et al. 2025), and privacy constraints defined through the
posterior mean of a statistic. These concepts are discussed in greater detail in Section 4.
3 Characterization of Privacy-Constrained Signals
Compare with privacy-preserving constraint, our P-privacy constraint allows us to disclose
some information about privacy. Based on this, we can intuitively construct the following
two-stage disclosure rule:
Stage 1. Construct a signal π1 : Ω × [0, 1] → S1 to release permissible information about
privacy θ ̃.
Stage 2. Construct another signal π2 : Ω × [0, 1] → S2, which is conditionally privacy
preserving given π1, i.e., for almost every B ∈ B(Θ) and s1 ∈ S1, s2 ∈ S2,
P(θ ̃ ∈ B|s2, s1) := μθ
(s1,s2)(B) = μθ
s1 (B ).
Let π1 ∨ π2 : Ω × [0, 1] → S1 × S2 denote the join of two signals π1 and π2. When the
state–randomizer pair (ω, r) is realized, the joint signal is π1 ∨ π2(ω, r) = (π1(ω, r), π2(ω, r)).
Observing π1 ∨π2 is equivalent to observing π1 and then π2 sequentially, with beliefs updated
5δa is the Dirac delta function, i.e., δa(x) = 0 if x ̸= a and R δa(x)dx = 1.
7

at each stage according to Bayes’ rule. It is immediate that if π1 is P-privacy-preserving and
π2 is conditionally privacy-preserving given π1, then the joint signal π1 ∨ π2 is P-privacy
preserving as well. Conditional privacy preservation corresponds to designing π2 separately
for each realization of π1; see Remark 2 in Strack and Yang (2024). In other words, con
structing π2 amounts to constructing a privacy-preserving signal on each posterior belief
induced by π1.
Denote by ΠP the set of P-privacy-constrained signals, and define its Blackwell fron
tier as ΠP := {π ∈ ΠP : ∄π′ ∈ ΠP such that π′ ≻ π}. Any π ∈ ΠP is called a Blackwell
undominated P-privacy-constrained signal. In what follows, we present our main result,
Theorem 1, which characterizes the Blackwell frontier ΠP via two-stage disclosure rules.
Any P-privacy-constrained signal can then be obtained by garbling elements of this frontier.
Lemma 1. A signal is P-privacy-constrained if and only if it is Blackwell dominated by a
signal π′ such that ⟨π′⟩θ ∈ P.
Lemma 1 states that, without loss of generality, constructing the Blackwell frontier
of P-privacy-constrained signals reduces to considering only those signals whose induced
distribution over posteriors about privacy lies on the Blackwell frontier of P. Then, by
garbling these signals in the frontier, we obtain all P-privacy-constrained signals. Therefore,
in what follows, we focus on constructing the Blackwell frontier of P-privacy-constrained
signals from the Blackwell frontier of P.
For each γ ∈ P, we construct its minimum-informative extensions, namely every poste
rior about state τγ ∈ T satisfying
τθ
γ = γ almost surely (Extension),
∄τ ∈ T such that τ θ = γ almost surely, and τ ≺ τγ (Minimum informative).
That is, τγ extends γ from a distribution over posteriors about privacy θ ̃ to a distribution over
posteriors about the full state ω ̃, while revealing the least additional information about the
state needed to sustain the same distribution of posteriors about privacy. Since a posterior
distribution can itself be viewed as a signal, the object τγ provides exactly the first–stage
disclosure we seek. To simplify notation, we use τγ to denote any signal π such that ⟨π⟩ = τγ.6
6Formally, τ can induce a joint distribution over Ω × ∆(Ω), p(ω ̃,μ ̃) such that for any BΩ × B∆(Ω) ∈ B(Ω) ⊗ B(∆(Ω)), p(ω ̃,μ ̃)(BΩ × B∆(Ω)) = R
B∆(Ω) μ(BΩ)τ (dμ). Since ∆(Ω) with the Borel σ-algebra induced
by the weak-∗ topology, is standard Borel, there exists a regular version of conditional distribution of μ ̃ given ω, denoted by pμω ̃ (C ̧ inlar (2011), Theorem 2.18, p.154). Then there exists a measurable function
πτ : Ω × [0, 1] → ∆(Ω), such that πτ (ω, r ̃) has distribution pμω ̃ (Kallenberg (1997), Lemma 2.22, p.34). Therefore, πτ is the signal with ⟨πτ ⟩ = τ .
8

μθ
0
ν1
ν2
...
νn
...
γ∈P
μ1
μ2
...
μn
...
τγ ∈ T γ
q ̃μ1
q ̃μ2
...
q ̃μn
...
q ̃τγ
Mean-Preserving Spread Minimum-Informative Extension
Blackwell-Undominated Conditionally Privacy-Preserving Signals
Figure 1: Construction of Blackwell-Undominated Privacy-Constrained Signals
For a γ ∈ P, the minimum-informative extension need not be unique. Let T γ denote the set
of all minimum-informative extensions of γ.
Theorem 1 (Characterization of Privacy-Constrained Signals). A signal π belongs to the
Blackwell frontier of P -privacy-constrained signals, ΠP, if and only if there exist τγ ∈ T γ for
some γ ∈ P and q ̃τγ that is Blackwell-undominated conditionally privacy-preserving given τγ
such that π is Blackwell equivalent to the joint signal τγ ∨ q ̃τγ .
Briefly, Theorem 1 shows that, once τγ is made public, the remaining task of constructing
the Blackwell frontier of P-privacy-constrained signals reduces to constructing the Blackwell
frontier of privacy-preserving signals, as characterized in Strack and Yang (2024).
The key insight of our approach is that, in order to construct the most informative
signal whose distribution over posteriors about privacy is γ, we begin by identifying the
least informative one. Once this baseline signal is obtained, every signal with the same γ
can be generated by disclosing additional conditionally privacy-preserving information. By
contrast, if one starts with a signal that already contains unnecessary information beyond
what is required to sustain γ, then taking its join with any conditionally privacy-preserving
signal inevitably preserves this extra information, and thus cannot characterize the full set
of feasible signals sustaining γ. Figure 1 summarizes the structure of Blackwell-undominated
privacy-constrained signals described in Theorem 1.
Additionally, the characterization of the minimum-informative extension of a given γ ∈
P is straightforward.
9

Theorem 2 (Characterization of Minimum-Informative Extensions). τ ∈ T is a minimum
informative extension of a γ ∈ P if and only if
(1) τ θ = γ almost surely;
(2) For almost every μ, μˆ ∈ supp(τ ), if μθ = μˆθ almost surely, then μ = μˆ almost surely.
The key condition in Theorem 2 is (2), which requires that, in the minimum-informative
extension, each ν ∈ supp(γ) extends to exactly one μ ∈ ∆(Ω). Otherwise, any two such μ’s
with the same marginal μθ can be merged into a single posterior, implying that the original
extension was not minimal.
Theorem 2 is particularly useful in the discrete setting. Consider finite sets Ω = {ωi}I
i=1,
Θ = {θj}J
j=1 with J < I and let supp(γ) = {νn}N
n=1. By Theorem 2, characterizing the
minimum-informative extensions of γ amounts to allocating, for each ν ∈ supp(γ), a condi
tional distribution over Ω given Θ. For any μ ∈ ∆(Ω), denote by μ(ωi|θj) the conditional
probability of ωi given θj. Any sequence of posterior distributions {μn}N
n=1 constitutes a
minimum-informative extension of γ if and only if it satisfies the following conditions:
μn(ωi) =
J
X
j=1
νn(θj)μn(ωi|θj), for all n, 7 (1)
μ0(ωi|θj) =
N
X
n=1
γ (νn )νn (θj )μn (ωi |θj )
PN
n=1 γ(νn)νn(θj) , for all i, j, (2)
I
X
i=1
μn(ωi|θj) = 1, for all j, n, (3)
μn(ωi|θj) ≥ 0, for all i, j, n. (4)
Given any collection {μn}N
n=1 satisfying these constraints, the associated minimum-informative
extension is the distribution τγ over {μ1}N
n=1 defined by τγ(μn) = γ(μθ
n) = γ(νn) for all n.
Equation (1) ensures that, for each νn, there exists a unique posterior μn such that μθ
n = νn.
By the construction of τγ, it follows immediately that τ θ
γ = γ. Equation (2) guarantees that
the induced distribution τγ satisfies Eτγ [μ] = μ0. Finally, Equations (3) and (4) ensure that
μn(ωi|θj) is a well-defined probability distribution.
7Since θ ̃ is a measurable function of Ω, the realization of ω uniquely determines θ. Hence μn(ωi) =
μn(ωi, θj), and μn(ωi, θj) > 0 only if θj = θ ̃(ωi). Thus, in Equation (1), at most one term in the summation can be positive.
10

To illustrate how our characterization can be used to describe all privacy-constrained
signals, we present a simple example.
Example 3. Consider the following 2 × 2 setting. The state space Ω = X × Θ consists of
a variable of interest X = {x1, x2} and a privacy Θ = {θ1, θ2}. Define γ ∈ Γ \ {δμθ
0 } by
γ = αδν1 + (1 − α)δν2. Now we construct all Blackwell-undominated γ-privacy-constrained
signals (Example 2).
First, by Theorem 2, any minimum-informative extension τγ of γ takes the form τγ =
αδμ1 + (1 − α)δμ2, where μ1 and μ2 satisfy
μ1((xi, θj)) = ν1(θj)μ1(xi|θj), μ2((xi, θj)) = ν2(θj)μ2(xi|θj), for all i, j.
with the pairs {μn(xi|θj)}2
i,j,n=1 that
μ2(x1|θj) = μ0(x1|θj) + αν1(θj)
(1 − α)ν2(θj) [μ0(x1|θj) − μ1(x1|θj)], for all j,
μn(x1|θj) + μn(x2|θj) = 1, μn(xi|θj) ≥ 0, for all i, j, n.
Second, applying Theorem 1, we construct the Blackwell-undominated conditionally privacy
preserving signals associated with each τγ. For each realization μn ∈ τγ, Theorem 1 in Strack
and Yang (2024) implies that there exists a quantile signal q ̃∗
μn such that
q ̃∗
μn(x1, θj) ∼ U [0, μn(x1|θj)] , q ̃∗
μn(x2, θj) ∼ U [μn(x1|θj), 1] ,
which is Blackwell-undominated since revealing the realization of θ ̃ would allow the receiver
to infer the state ω ̃ exactly. By reordering the quantile signal, we can generate all signals
that are Blackwell-undominated and conditionally privacy-preserving given μn. Specifically,
any such reordered quantile signal, denoted by q ̃μn, satisfies
q ̃μn (x1, θj) ∼ U (Iμn(x1|θj)), q ̃μn (x2, θj) ∼ U [0, 1] \ Iμn(x1|θj) ,
where Ia ⊆ [0, 1] is any measurable subset with Lebesgue measure λ(Ia) = a.
Let q ̃τγ denote the collection of these reordered quantile signals across realizations of τγ.
The set of all τγ ∨q ̃τγ then constitutes the Blackwell frontier of γ–privacy-constrained signals.
Now consider a decision-making problem. For a decision maker who seeks to maximize
an objective subject to the γ-privacy constraint, the resulting optimization problem can
11

be solved in two steps. First, under each minimum-informative extension, one solves an
optimal transport problem (Strack and Yang 2024). Second, one optimizes over the set of
minimum-informative extensions, which reduces to a linear programming problem. For a
general P-privacy constraint, however, an additional third step is required: one must also
optimize over the Blackwell frontier of P.
4 Blackwell Frontier of Privacy-Permissible Set
For a general privacy-permissible set P, characterizing the P-privacy-constrained signals
first requires characterizing the Blackwell frontier of P. In some cases, the Blackwell frontier
is explicitly given, as in Example 2. In other cases, such as differential privacy, the set P
is defined by a collection of constraints, and its Blackwell frontier is not directly evident.
Unfortunately, there is no uniform method for characterizing the Blackwell frontier of an
arbitrary or abstract P. In this section, we focus on two important classes for which the
Blackwell frontier can be analyzed: ex-post privacy and posterior-mean privacy.
4.1 Ex-Post Privacy
When the regulator cares about the ex post cost of disclosing information about privacy, the
constraint applies not to the distribution over posteriors about privacy, but directly to the
posteriors themselves. Formally, let
M ⊆ ∆(Θ)
denote the set of permissible posteriors about privacy. In line with the spirit of Blackwell
closeness in Assumption 1, we assume that M is a compact convex subset of ∆(Θ). If a
signal π is permissible, meaning that every posterior ν ∈ supp(⟨π⟩θ) lies in M, then any less
informative signal π′ ⪯ π is also permissible. It follows that every convex combination of
posteriors in supp(⟨π⟩θ) must also lie in M. To avoid triviality, we assume that μθ
0 ∈ M.
Definition 2. A signal π is a M-ex-post-privacy-constrained signal if ⟨π⟩θ(M) = 1.
Given M, the induced privacy-permissible set is PM := {γ ∈ T : γ(M) = 1}. Since
μθ
0 ∈ M, the set PM is nonempty. Because M is compact and convex, the set PM satisfies
Assumptions 1 and 2. Therefore, M-ex-post privacy is a special case of P-privacy.
12

Let ext M as the the set of extreme points of M, i.e,
ext M := {ν ∈ M : ∄ν′ ̸= ν′′ ∈ M, α ∈ (0, 1) such that ν = αν′ + (1 − α)ν′′}.
Let PM denote the Blackwell frontier of PM as defined previously.
Proposition 1 (Characterization of Blackwell Frontier of Ex-Post Privacy-Permissible Set).
A distribution of posteriors about privacy γ ∈ Γ belongs to PM if and only if γ(ext M) = 1.
Remark 1. When ext M is finite and we restrict attention to distributions γ with finite
support, Proposition 1 becomes immediate. The general case requires substantially more
work. For the “only if ” direction, one must construct a dilation (see footnote 4) to show
that any distribution γ′ with γ′(ext M) < 1 can be mean-preserving spread to a distribution
γ satisfying γ(ext M) = 1. This requires two ingredients. First, for each ν ∈ M there
must exist a probability distribution Pν over ext M such that EPν [ν′] = ν, which follows from
Choquet’s Theorem (Theorem 10.7, p.168, Simon (2011)). Second, the mapping ν 7→ Pν
from M to ∆(ext M) must be measurable. This measurability is ensured by Theorem 9.1 in
Simon (2011) (p.136), together with the Kuratowski–Ryll-Nardzewski measurable selection
theorem (Theorem 6.9.3, p.36, Vol.II, Bogachev (2007)).
By Proposition 1, under M-ex-post privacy the Blackwell frontier of permissible distri
butions over posteriors about privacy, PM, can be generated by first computing the extreme
points of the permissible posterior set M. Any distribution in PM is then obtained by
convex combinations of these extreme points with respect to the prior μθ
0.
Ex-post privacy encompasses all privacy notions that impose constraints directly on
posterior beliefs about privacy and that satisfy Blackwell-closeness. When privacy realiza
tions are finite and the constraints imposed on posteriors are finite and linear, the set M
becomes a convex polytope whose extreme points are finite and can be computed explic
itly. For example, the well-known concept of differential privacy introduced by Dwork et al.
(2006) is defined by a finite collection of linear constraints on posterior beliefs about privacy.
This concept has been adopted by major institutions such as Google, Microsoft, and the
U.S. Census Bureau (Abowd 2018). The characterization of Blackwell frontier of differential
privacy has been conducted by Xu and Zhao (2025).
Similar with differential privacy, Ghosh and Kleinberg (2016) introduces the notion of
inferential privacy in the context of vector-valued datasets. Wang et al. (2025) adapts this
concept to the framework of He et al. (2021), which corresponds to the discrete case of our
setting. Our Definition 3 generalizes inferential privacy to arbitrary standard Borel spaces.
13

Definition 3. For any ε ∈ [0, +∞). A signal π is ε-inferential-privacy-constrained if for
almost every ν ∈ supp(⟨π⟩θ) and B′, B′′ ∈ B(Θ) such that μ0(B′) > 0, μ0(B′′) > 0,
ν(B′)
ν(B′′) ≤ eε · ν(B′)
ν(B′′) . (5)
Let I denote the set of posteriors that satisfy the ε-inferential privacy constraint (5),
PI the privacy-permissible set induced by I, and PI its Blackwell frontier.
Proposition 2. A distribution of posteriors about privacy γ ∈ Γ belongs to PI if and only
if for almost every ν ∈ supp(γ), there is a subset Eν ∈ B(Θ) such that μθ
0(Eν) ∈ (0, 1), and
ν(B) = eεμθ
0(B ∩ Eν) + μθ
0(B \ Eν)
eεμθ
0(Eν) + (1 − μθ
0(Eν)) , (6)
for almost every B ∈ B(Θ).
Proposition 2 provides a clean characterization of the extreme points under ε-inferential
privacy, a setting with infinitely many privacy realizations and linear constraints. An extreme
point of I partitions the privacy realization space into two sets of positive measure, E and Θ\
E. Relative to the prior, the posterior probability assigned to E is increased uniformly, while
the posterior probability assigned to Θ \ E is decreased uniformly. Using Proposition 2, we
can simplify the main characterizations of ε-inferential-private private information structure
presented in Wang et al. (2025).
4.2 Posterior-Mean Privacy
In some settings, an individual’s privacy loss depends only on the posterior expected type
rather than on the full posterior distribution. In other words, the privacy cost associated
with each posterior belief is a linear function of its realization. In this case, a natural privacy
constraint is to impose an upper bound on the distribution of posterior means of a statistic
of the privacy.
Specially, let f ̃ : Θ → R be a one-dimensional statistic of privacy. Denote by νf
0 the
prior distribution of f ̃, and suppose that  ̄κ is a mean-preserving contraction of νf
0 . A signal π
is f -posterior-mean-privacy-constrained (with respect to κ ̄) if the distribution over posterior
means of f ̃ is a mean-preserving contraction of κ ̄. For any γ ∈ Γ, denote the induced
14

distribution of posterior mean about f ̃ by
κγ(·) := γ({ν ∈ supp(γ) : Eγ[f ̃(θ)] ∈ ·}).
When Θ ⊆ R, the statistic f ̃ captures all moments of θ ̃. Since the distribution of posterior
means of f ̃ depends on the distribution of posteriors about privacy, posterior-mean privacy
is not an ex-post privacy.
Definition 4. A signal π is a f -posterior-mean-privacy-constrained signal if κ⟨π⟩θ ⪯ κ.
Let E denote the set of posteriors that satisfy the f -posterior-mean privacy, PE the
privacy-permissible set induced by E, and PE its Blackwell frontier.
Proposition 3. A distribution of posteriors about privacy γ ∈ Γ belongs to PE if and only
if (1) for almost every ν ∈ supp(γ), there exists y1, y2 ∈ f ̃(Θ) and α ∈ (0, 1], ν puts α on a
point θ1 ∈ f ̃−1(y1) and (1 − α) on another point θ2 ∈ f ̃−1(y2) and (2) κγ = κ.
Proposition 3 characterizes the Blackwell frontier of the privacy-permissible set induced
by posterior-mean privacy. When γ ∈ PE, every realized posterior about privacy is a two
point distribution, and the induced distribution over posterior mean about f ̃ attains the
upper bound.
5 Discussion and Future Work
We provide a characterization of signals that, in the Blackwell sense, do not reveal more
private information than those in a given privacy-permissible set P, where P is a subset
of distributions over posterior beliefs about privacy. Specifically, we show that the most
informative P-privacy-constrained signals can be constructed as the join of two components:
(i) a minimum-informative extension of a distribution on the Blackwell frontier of P, and (ii)
a Blackwell-undominated, conditionally privacy-preserving signal as characterized by Strack
and Yang (2024). We then characterize the Blackwell frontier of the privacy-permissible set,
with particular attention to ex-post privacy and posterior-mean privacy.
This paper has several limitations. First, we do not provide a general method for
identifying the Blackwell frontier of an arbitrary privacy-permissible set. Our current results
apply only to two specific formulations of privacy. Extending these results to more general
notions of privacy remains an important direction for future research.
15

Second, for the general privacy constraint, when there is a unique bound on privacy
information, our approach reduces the decision-making problem to a first-stage optimal
transport problem followed by a second-stage linear program. Although this method is
conceptually clean, it is computationally demanding. Developing a more tractable solution
approach remains an important direction for future research.
References
Abowd, J. M. (2018). The us census bureau adopts differential privacy. In Proceedings of
the 24th ACM SIGKDD international conference on knowledge discovery & data mining,
pp. 2867–2867.
Blackwell, D. (1951). Comparison of experiments. In Proceedings of the second Berkeley
symposium on mathematical statistics and probability, Volume 1, pp. 26.
Blackwell, D. (1953). Equivalent comparisons of experiments. The annals of mathematical
statistics, 265–272.
Bogachev, V. I. (2007). Measure theory. Springer.
C ̧ inlar, E. (2011). Probability and stochastics. Springer.
Doob, J. L. (1951). Continuous parameter martingales. In Proceedings of the Second Berkeley
Symposium on Mathematical Statistics and Probability, Volume 2, pp. 267–276. University
of California Press.
Dwork, C., F. McSherry, K. Nissim, and A. Smith (2006). Calibrating noise to sensitivity in
private data analysis. In Theory of cryptography conference, pp. 265–284.
Eilat, R., K. Eliaz, and X. Mu (2021). Bayesian privacy. Theoretical Economics 16 (4),
1557–1603.
Ghosh, A. and R. Kleinberg (2016). Inferential privacy guarantees for differentially private
mechanisms. arXiv preprint arXiv:1603.01508 .
He, K., F. Sandomirskiy, and O. Tamuz (2021). Private private information. arXiv preprint
arXiv:2112.14356 .
Kallenberg, O. (1997). Foundations of modern probability, Volume 2. Springer.
16

Kamenica, E. and M. Gentzkow (2011). Bayesian persuasion. American Economic Re
view 101 (6), 2590–2615.
Royden, H. and P. Fitzpatrick (2010). Real Analysis. Prentice Hall.
Simon, B. (2011). Convexity: an analytic viewpoint, Volume 187. Cambridge University
Press.
Strack, P. and K. H. Yang (2024). Privacy-preserving signals. Econometrica 92 (6), 1907
1938.
Strassen, V. (1965). The existence of probability measures with given marginals. The Annals
of Mathematical Statistics 36 (2), 423–439.
Wang, S., S. Zheng, Z. Lin, G. Fanti, and Z. S. Wu (2025). Inferentially-private private
information. In Proceedings of the ACM on Web Conference 2025, pp. 2579–2595.
Xu, Z. and W. Zhao (2025). Privacy structure and blackwell frontier. arXiv preprint
arXiv:2511.10226 .
A Appendix
A.1 Proofs for Section 3
Lemma 2. For two signals π, π′, if π ⪰ π′, then π ⪰θ π′.
Proof. Since π ⪰ π′, then there exists a dilation K : ∆(Ω) → ∆(∆(Ω)), such that for almost
every μs′ ∈ supp(⟨π′⟩), μs′ = R
∆(Ω) μsdK(μs|μs′), and ⟨π⟩(·) = R
∆(Ω) K(·|μs′)d⟨π′⟩(μs′) (see
footnote 4). Define Q : ∆(Θ) → ∆(∆(Θ)), such that for ⟨π′⟩θ-almost every ν′ ∈ ∆(Θ) and
all B ∈ B(∆(Θ)),
Q(B|ν′) = E⟨π′⟩ K({μ ∈ ∆(Ω) : μθ ∈ B}|μs′) | μθ
s′ = ν′ .
Then, for almost every ν′ ∈ supp(⟨π′⟩θ),
ν′ = E⟨π′⟩ μθ
s′ | μθ
s′ = ν′
= E⟨π′⟩
Z
∆(Ω)
μθ
sdK(μs|μs′) | μθ
s′ = ν′
17

= E⟨π′⟩
Z
∆(Θ)
νdK({μ ∈ ∆(Ω) : μθ = ν}|μs′) | μθ
s′ = ν′
=
Z
∆(Θ)
νE⟨π′⟩ dK({μ ∈ ∆(Ω) : μθ = ν}|μs′) | μθ
s′ = ν′
=
Z
∆(Θ)
νdQ(ν|ν′).
For almost every B ∈ B(∆(Θ)),
⟨π⟩θ(B) = ⟨π⟩({μ ∈ ∆(Ω) : μθ ∈ B})
= E⟨π′⟩ K({μ ∈ ∆(Ω) : μθ ∈ B}|μs′)
=
Z
∆(Θ)
E⟨π′⟩ K({μ ∈ ∆(Ω) : μθ ∈ B}|μs′) | μθ
s′ = ν′ d⟨π′⟩θ(ν′)
=
Z
∆(Θ)
Q(B|ν′)d⟨π′⟩(ν′).
Therefore, π ⪰θ π′.
For two signals π and π′, we say that π is sufficient for π′ if π ∼ π ∨ π′. It is equal to
say that given π, π′ is independent with ω ̃, i.e., P(π′ ∈ ·|ω, s) = P(π′ ∈ ·|s) almost surely.8
Furthermore, if π ⪰ π′, there exists π′′ ∼ π such that π′′ is sufficient for π′ (Blackwell (1951),
Theorem 6).9 If π ⪰θ π′, then there exists π′′ ∼θ π such that π′′ is sufficient for π′ in terms
of θ ̃, i.e., π′′ ∼θ π′′ ∨ π′.10
8By the definition, π ∼ π ∨ π′ says that P(ω ̃ ∈ ·|s, s′) = P(ω ̃ ∈ ·|s) almost surely. According to Theorem 7 in Blackwell (1951), it is equivalent to P(π′ ∈ ·|ω, s) = P(π′ ∈ ·|s) almost surely. 9The key distinction between Blackwell domination and sufficiency is that sufficiency requires the process from μ ̃π′ to μ ̃π to form a martingale. Blackwell domination, on the other hand, does not impose this martingale requirement, allowing for more general transformations between signals. To understand-
 it, consider the following example: Under signal π, the posterior belief about ω ̃ takes the value 0 (i.e, a distribution putting 1 at ω = 0) with prob 1/4, 1/2 with prob 1/2, and 1 with prob 1/4. Under signal π′, ω ̃ = 1/4 with prob 1/2 and 3/4 with prob 1/2. Sufficiency implies that, conditional on the belief ω ̃ = 1/4 being realized after observing π′, the updated belief after observing π should be ω ̃ = 0 with prob 1/2 and ω ̃ = 1/2 with prob 1/2. In contrast, Blackwell domination allows for -
different mappings. For example, conditional on ω ̃ = 1/4 after observing π′, the belief after π could be ω ̃ = 1/2 with prob 1/2 and ω ̃ = 1 with prob 1/2. However, we can construct another signal, π′′, by applying the dilation K (as defined in footnote 4) to split π′. By construction, π′′ is sufficient for π′, and π′′ ∼ π. 10We can extend a Markov kernel Q : ∆(Θ) → ∆(∆(Θ)) to a Markov kernel K : ∆(Ω) → ∆(∆(Ω)) by the following construction: for any μ′ ∈ ∆(Ω) with marginal μ′θ = ν′, define K(ν′′ -
⊗ μ′(ω ̃|θ ̃)|μ′) = Q(ν′′|ν′), where μ′(ω ̃|θ ̃) is the conditionally distribution of ω ̃ given θ ̃ induced by μ′. In other words, K(·|μ′) is defined as the pushforward of Q(·|ν′) under the map ν′′ 7→ ν′′ ⊗ μ′(·|θ ̃), which reconstructs a measure on Ω from its marginal ν′′ on Θ and the conditionals μ′(·|θ ̃).
18

Proof of Lemma 1. “If”. Suppose π ⪯ π′ where ⟨π′⟩θ ∈ P. According to Lemma 2, ⟨π⟩θ ⪯
⟨π′⟩θ. Therefore by Assumption 1, π ∈ ΠP.
“Only if”. Suppose ⟨π⟩θ ∈/ P; otherwise the claim is trivial since π ⪯ π. Then, there
exists a signal π′ with ⟨π⟩θ ∈ P such that π′ is sufficient for π in terms of θ ̃. Then, since
⟨π ∨ π′⟩θ = ⟨π′⟩θ ∈ P, π ∨ π′ is a P-privacy-constrained signal. We get π ⪯ π ∨ π′.
Lemma 3. For any signal π with ⟨π⟩θ ∈ P, π ∈ ΠP if and only if there does not exist a
conditionally (given π) privacy-preserving signal q ̃ such that π ≺ π ∨ q ̃.
Proof. “Only if”. Suppose there exists such signal q ̃. Since q ̃ is conditionally privacy
preserving given π, π ∨ q ̃ is P-privacy-constrained. π ≺ π ∨ q ̃ contradicts π ∈ ΠP.
“If”. Suppose there exists a P-privacy-constrained signal π′ such that π ≺ π′. Since
⟨π⟩θ ∈ P, ⟨π′⟩θ = ⟨π⟩θ. W.l.o.g, assume π′ is sufficient for π, i.e., π ∨ π′ ∼ π′. Since
⟨π ∨ π′⟩θ = ⟨π′⟩θ = ⟨π⟩θ, π′ is a conditionally (given π) privacy-preserving signal such that
π ≺ π ∨ π′.
Proof of Theorem 1. “If”. Let τγ ∈ T γ for some γ ∈ P and q ̃ denote a signal which is
Blackwell-undominated conditionally privacy-preserving given τγ. Suppose τγ ∨ q ̃ ∈/ ΠP.
Following Lemma 3, there exists another conditionally (given τγ ∨ q ̃) privacy-preserving
signal q ̃′ such that τγ ∨ q ̃ ≺ τγ ∨ q ̃ ∨ q ̃′. Since ⟨τγ ∨ q ̃ ∨ q ̃′⟩θ = ⟨τγ ∨ q ̃⟩θ = τ θ
γ , q ̃ ∨ q ̃′ is also a
conditionally (given τγ) privacy-preserving signal. Therefore, τγ ∨ q ̃ ≺ τγ ∨ (q ̃∨ q ̃′) contradicts
that q ̃ is Blackwell-undominated among all conditionally privacy-preserving signals given τγ.
“Only if”. For any π ∈ ΠP , if π ∈/ T ⟨π⟩θ , then there exists another signal π1 ∈ ΠP such
that ⟨π1⟩θ = ⟨π⟩θ and π is sufficient of π1. If π1 ∈/ T ⟨π⟩θ , we can find another signal π2 ∈ ΠP
such that ⟨π2⟩θ = ⟨π⟩θ and π1 is sufficient of π2. Continuing this process, if it terminates
in a finite number of steps, we will eventually obtain a signal πN ∈ T ⟨π⟩θ . Otherwise, we
construct a sequence {μ ̃πt}t∈N+, where μ ̃πt is random variable about posterior belief induced
by πt. According to Section 4 in Blackwell (1953), the sequence {μ ̃πt}t∈N forms a reverse
martingale. By the martingale convergence theorem (Doob 1951), μ ̃πt → μ ̃∗ as t → ∞.
Let π∞ be one of the signals that induces μ ̃∗. Then, we have π∞ ∈ T ⟨π⟩θ . Define π∗ as a
unified notation that refers to either πN or π∞. Since π is conditionally privacy-preserving
signal given π∗. Therefore, there is a ⟨π⟩θ ∈ P (Lemma 1), π∗ ∈ T and π is a corresponding
Blackwell-undominated conditional privacy-preserving signal such that π ∼ π∗ ∨ π.
Proof of Theorem 2. “Only if”. If condition (1) is not satisfied, by definition τ ∈/ T γ. Now,
suppose condition (2) is not satisfied. Then, there exists a positive measure set B ∈ supp(τ θ)
19

such that for any μ ∈ supp(τ ) with μθ ∈ B, Qτ (μ|μθ) < 1, where Qτ denotes the conditional
distribution over ∆(Ω) given ∆(Θ) induced by τ . By construction, Qτ is non-degenerate.
We can then construct a new distribution over posteriors, τ ′, such that τ ′θ = τ θ and for
all μθ ∈ supp(τ θ), in the new distribution τ ′, the conditional probability on μˆ = Eτ ({μ ∈
∆(Ω) : μθ = ν}|ν) is 1 given ν ∈ supp(τ θ). τ is a strict mean-preserving spread of τ ′, since
τ (·) = R
∆(Ω) Qτ (·|μ′θ)dτ ′(μ′), and Qτ (·|μθ) is non-degenerate. τ ′ ≺ τ contradicts τ ∈ T γ.
“If”. Suppose there exists a signal τ ′ such that τ ′θ ∈ P and τ ′ ≺ τ . There is a non
degenerate dilatation K : ∆(Ω) → ∆(∆(Ω)) spreads τ ′ to τ . Moreover, since τ satisfies
condition 2, there is a one-to-one mapping from ν ∈ supp(τ θ) to μ ∈ supp(τ ). Therefore, the
kernel Q : ∆(Θ) → ∆(∆(Θ)) defined in Lemma 2 is non-degenerate if K is non-degenerate.
As a result, τ ′θ ≺ τ θ, which contradicts τ ′θ ∈ P.
A.2 Proofs for Section 4
Proof of Proposition 1. “If”. Suppose there exists another γ′ ∈ PM such that γ ≺ γ′, then
there exists a nondegenerate dilation K : ∆(Θ) → ∆(∆(Θ)) such that for almost every
ν ∈ supp(γ),
ν=
Z
∆(Θ)
ν ′ K (dν ′ |ν ).
This means that for almost every ν ∈ supp(γ), it can be expressed by linear combination of
ν′ ∈ supp(γ′). Since K is nondegenerate, there exists a positive measure subset A ⊆ supp(γ)
such that K(ν|ν) < 1 for any ν ∈ A. Hence, ν ∈/ ext M for any ν ∈ A, which is contradicted
with γ(ext M) = 1.
“Only if”. We construct a dilation from M to ∆(ext M). Since (Θ, B(Θ)) is a standard
Borel space, ∆(Θ) embeds into a locally convex space and endowed with the topology of weak
convergence is metrizable. M is a compact convex subset of ∆(Θ), which is also metrizable.
By Choquet’s Theorem (Theorem 10.7, p.168, Simon (2011)), for any ν ∈ M, the set
Φ(ν) :=
n
Pν ∈ ∆(ext M) : ν =
Z
ν ′dPν (ν ′)
o
is nonempty. Moreover, Φ(μ) is closed in the weak-* topology. Define the barycenter map
B : ∆(M) → M by B(Pν) = R ν′dPν = ν. By Simon (2011), Theorem 9.1 (p.136), the
map B is continuous. Consequently, for any open set U ⊆ ∆(ext M), Φ−1(U ) = {ν ∈
M : B−1(ν) ∩ U ̸= ∅} = B(U ), which is an open set. Therefore, by the Kuratowski–Ryll
Nardzewski measurable selection theorem (Theorem 6.9.3, p.36, Vol. II, Bogachev (2007)),
20

there exists a measurable selection P ∗
ν : M → ∆(ext M) such that ν = R ν′dP ∗
ν (ν′) Hence,
the map K : ν 7→ P ∗
ν defines a dilation. If γ(ext M) ̸= 1, then K is nondegenerate, which
implies γ ∈/ PM.
Lemma 4. Suppose γ ∈ PI. For almost every ν ∈ supp(γ), there is a nonnegative measur
able function gν defined for which
ν(B) =
Z
B
gν dμθ
0, for all B ∈ B(Θ). (7)
and gν is essential bounded. Let eεν as the essential supremum of gν, i.e,
μθ
0 θ ∈ Θ : gν(θ) > eεν = 0,
μθ
0 θ ∈ Θ : gν(θ) > eεν − δ > 0, for all δ > 0.
(8)
then, εν < ε and
μθ
0 θ ∈ Θ : gν(θ) ∈ [eεν−ε, eεν ] = 1. (9)
Moreover, if gν ̸= 1 μθ
0-almost surely, then εν > 0 and
μθ
0 θ ∈ Θ : gν(θ) ∈ [eεν−ε, 1) > 0,
μθ
0 θ ∈ Θ : gν(θ) ∈ (1, eεν ] > 0.
(10)
Proof. Suppose γ ∈ PI. Radon-Nikodym Theorem (Royden and Fitzpatrick (2010), p.382)
shows that for almost every ν ∈ supp(γ), gν defined by (7) exists. By the inferential-privacy
constraint (5), for all B ∈ B(Θ) with μθ
0(B) > 0,
e−ε μθ
0(B)
μθ
0(Θ) ≤ ν(B)
ν(Θ) ≤ eε μθ
0(B)
μθ
0(Θ) ⇒ e−εμθ
0(B) ≤ ν(B) ≤ eεμθ
0(B),
which is due to the fact that μθ
0(Θ) = ν(Θ) = 1. Therefore,
μθ
0 θ ∈ Θ : gν(θ) ∈ [e−ε, eε] = 1.
gμ is essentially bounded blow and above. Since the completeness of R, gν has essential
supremum and infimum, denoted as eεν and eεν , respectively.
Since the fact that ν(Θ) = νθ
0 (Θ), if
μθ
0 ({θ ∈ Θ : gν(θ) ∈ [eεν , 1)}) > 0, then
μθ
0 θ ∈ Θ : gν(θ) ∈ (1, eεν ] > 0.
21

Hence, if gν ̸= 1 μθ
0-almost surely, (10) holds and εν < 0 < εν. We need only to show that
εν < ε and εν − εν ≤ ε, which induce (9).
Suppose εν − εν > ε, then for a constant number 0 < ∆ε < 1
2 (εν − εν − ε), we have
(εν − ∆ε) − (εν + ∆ε) > ε. Since the definition of essential supremum and infimum, define
two measurable sets
B1 := θ ∈ Θ : gν(θ) < eεν+∆ε ,
B2 := θ ∈ Θ : gν(θ) > eεν−∆ε ,
μθ
0(B1) > 0 and μθ
0(B2) > 0. Obviously,
ν(B2)
ν(B1) > eεν −∆ε−(εν +∆ε) μθ
0(B2)
μθ
0(B1) > eε μθ
0(B2)
μθ
0(B1) ,
contradicts with (5).
If gν = 1 μθ
0-almost surely, then εν = 0 < ε. Otherwise, since above we show that
εν < 0 < εν and εν − εν ≤ ε, then εν < ε.
Proof of Proposition 2. “If”. We will show that for almost every ν ∈ supp(γ), there does not
exist non-degenerated Kν ∈ ∆(∆(Θ)) such that ν = R
∆(Θ) ν′Kν(dν′) and inferential-privacy
constraint (5) holds almost everywhere on supp(Kν). This statement indicates that γ ∈ PI.
Suppose there is a non-degenerated Kν. Since Kν is non-degenerated, there is a positive
measurable subset M ∈ supp(Kν) and, w.l.o.g, a subset B ⊆ Eν such that for all ν′ ∈ M ,
ν′(B) > ν(B). Because of the inferential-privacy constraint (5), ν′(B)
ν′(Eνc ) ≤ ν(B)
ν(Eνc ) = eε μθ
0 (B ) μθ
0(Eνc ) ,
then ν′(Ec
ν) > ν(Ec
ν). Since the mean-preserving condition, there is another positive mea
surable subset M ′ ∈ supp(Kμ) such that ν′′(Ec
ν) < ν(Ec
ν) holds for all ν′′ ∈ M ′. Again,
due to the constraint (5), ν′′(Eν)
ν′′(Eνc ) ≤ ν(Eν )
ν(Eνc ) = eε μθ
0(Eν ) μθ
0(Eνc) , then ν′′(Eν) < ν(Eν). Therefore
ν′′(Θ) = ν′′(Eν) + ν′′(Ec
ν) < ν(Eν) + ν(Ec
ν) = 1 which contradicts with the fact that ν′′ is a
probability.
“Only if”. Suppose a γ′ for which there is a positive measurable subset M ∈ supp(γ′)
and for each ν ∈ M , there is a positive measurable subset F ⊆ Θ and some ε′ ∈ (0, ε) such
that for any B1 ∈ B(F ) and B2 ∈ B(Θ) with μθ
0(B1) > 0 and μθ
0(B2) > 0,
e−ε′ μθ
0(B1)
μθ
0(B2) ≤ ν(B1)
ν(B2) ≤ eε′ μθ
0(B1)
μθ
0(B2) μθ
0-almost surely. (11)
Then, for a positive constant δ < min{eε−ε′ − 1, 1/ν(F )}, ν can split into ν1 with probability
22

1
2 (1 + δμ(F )) and ν2 with probability 1
2 (1 − δν(F )), where ν1(·) := (1+δ)ν(·∩F )
1+δν(F ) + ν(·\F )
1+δν(F ) ,
ν2(·) := (1−δ)ν(·∩F )
1−δν(F ) + ν(·\F )
1−δν(F ) . Since for B3, B4 ∈ B(Θ) with μθ
0(B4) > 0, almost surely,
ν1(B3)
ν1(B4) = ν1(B3 ∩ F )
ν1(B4) + ν1(B3 \ F )
ν1(B4) ≤ ν(B3 ∩ F )(1 + δ)
ν(B4) + ν(B3 \ F )
ν(B4)
≤ (1 + δ)eε′ νθ
0 (B3 ∩ F )
νθ
0 (B4) + eε νθ
0 (B3 \ F )
νθ
0 (B4) ≤ eε νθ
0 (B3)
μθ
0(B4) ,
ν2(B3)
ν2(B4) = ν2(B3 ∩ F )
ν2(B4) + ν2(B3 \ F )
ν2(B4) ≥ ν(B3 ∩ F )(1 − δ)
ν(B4) + ν(B3 \ F )
ν(B4)
≥ (1 − δ)e−ε′ μθ
0(B3 ∩ F )
μθ
0(B4) + e−ε μθ
0(B3 \ F )
μθ
0(B4) ≥ e−ε μθ
0(B3)
μθ
0(B4) ,
ν1 and ν2 satisfies ε-inferentially private constraint (5). Thus, γ′ ∈/ PI.
Next, we only need to show that if γ′ does not satisfies (6), γ′ has a positive measurable
M ∈ supp(γ′) and for each μ ∈ M , there is a subset F ∈ B(Θ) with μθ
0(F ) > 0 and some
ε′ ∈ (0, ε) such that (11) holds.
Let M be the set of ν ∈ supp(γ′) such that (6) does not hold and there is a measurable
function gν defined by (7). Suppose gν ̸= 1 μθ
0-almost surely, otherwise ν = μθ
0 almost surely
which is a trivial case. Then, εν defined as (8) is contained in (0, ε). Define two measurable
sets B := θ ∈ Θ : gν(θ) = eεν ,
B := θ ∈ Θ : gν(θ) = eεν−ε .
(1) Suppose μθ
0(B) = 0 or μθ
0(B) = 0, and w.l.o.g. assume μθ
0(B) = 0, that is,
μθ
0 θ ∈ Θ : gν(θ) ∈ [eεν−ε, eεν ) = 1.
Similarly as (10), we can show that
μθ
0 θ ∈ Θ : gν(θ) ∈ [1, eεν ) > 0. (12)
(2) Suppose μθ
0(B) > 0 and μθ
0(B) > 0. If μθ
0(B ∪ B) = 1, then ν satisfies (6). Hence, under
the assumption that ν does not satisfy (6),
μθ
0 θ ∈ Θ : gν(θ) ∈ (eεν−ε, eεν ) > 0.
23

W.l.o.g., we can assume that (12) holds. Since
0 = μθ
0 θ ∈ Θ : gν(θ) ∈ [eεν , eεν )
= μθ
0
∞
\
n=1
n
θ ∈ Θ : gν(θ) ∈ (e n−1
n εν , eεν )
o
!
,
where the first equality is due to {θ ∈ Θ : gν(θ) ∈ [eεν , eεν )} = ∅ and the second equality
holds since for any θ ∈ Θ for which gν(θ) < eεν , there is N > 0 such that gν(θ) < N−1
N eεν .
Therefore, since the continuity of (finite) measure, there exists N > 0 such that
μθ
0
N
\
n=1
n
θ ∈ Θ : gν(θ) ∈ (e n−1
n εν , eεν )
o
!
< μθ
0 θ ∈ Θ : gν(θ) ∈ [1, eεν ) ,
then
μθ
0
n
θ ∈ Θ : gν(θ) ∈ [1, e N−1
N εν ]
o
> 0. (13)
Denote F :=
n
θ ∈ Θ : gν(θ) ∈ [1, e N−1
N εν ]
o
, then since (13) and (9), for any B1 ∈ B(F )
and B2 ∈ B(Θ) with μ0(B1) > 0 and μ0(B2) > 0,
e−εν μθ
0(B1)
μθ
0(B2) ≤ ν(B1)
ν(B2) ≤ eε− 1
N εν μθ
0(B1)
μθ
0(B2) .
Since εν ∈ (0, ε), we construct a set F satisfying (11).
Proof of Proposition 3. “Only if”. We first show the part (1).
(i) Suppose there is a subset Y ∈ f ̃(Θ) which contains more than two points such that ν
puts a positive probability on f ̃−1(y) for all y ∈ Y . Since Eν[f ̃(θ)] is a combination of
f ̃(θ) for θ ∈ supp(ν), there exists y < Eν[f ̃(θ)] < y such that p := ν({θ ∈ Θ|f ̃(θ) ≤
y}) > 0, p := ν({θ ∈ Θ|f ̃(θ) ≥ y}) > 0, p + p < 1 and there is α ∈ (0, 1) such that
αEν[f ̃(θ)|f ̃(θ) ≤ y] + (1 − α)Eν[f ̃(θ)|f ̃(θ) ≥ y] = Eν[f ̃(θ)]. Denote λ := min{ p
α, p
1−α } <
1. Then ν can be split into ν1(θ) := 1{f ̃(θ) ≤ y}α ν(θ)
p + 1{f ̃(θ) ≥ y}(1 − α) ν(θ)
p
and ν2 = 1
1−λ (ν − λν1) with probability λ and (1 − λ) respectively. Since Eν1[f ̃(θ)] =
Eν[f ̃(θ)] = Eν2[f ̃(θ)], this split does not change the distribution of posterior mean of f ̃.
(ii) Suppose there a positive measure subset of belief such that ν puts α on the set f ̃−1(y1)
and (1 − α) on the set f ̃−1(y2) but supp(ν) ∩ f ̃−1(y1) is not a singleton. Denote
νθ(θ′) := α1{θ′ = θ} + 1{θ′ ∈ f ̃−1(y2)}ν(θ′) for θ ∈ supp(ν) ∩ f ̃−1(y1), then ν =
24

R
supp(ν)∩f ̃−1(y1) νθdν(θ). Since such μ has a split, and notice that Eνθ [f ̃(θ)] = Eν[f ̃(θ)]
for all θ ∈ supp(ν) ∩ f ̃−1(y1), γ has a strictly mean-preserving spreading that cannot
change the induced distribution of posterior mean of f ̃.
Suppose the part (2) does not hold, then κγ is a strictly mean-preserving contraction of
κ, i.e., there exists a non-degenerated dilation K : R → ∆(R), that is, y = R
R y′K(dy′|y) for
all y ∈ supp(κγ), such that
κ(B) =
Z
R
K(B|y)dκγ, ∀B ∈ B(R).
That means, there is a positive measure subset Y ⊆ supp(κγ) such that any y ∈ Y is
split into supp(K(·|y)) according to non-degenerated distribution measure K(·|y). We now
construct a dilation form ∆(Θ) to ∆(∆(Θ)) based on K.
W.l.o.g., suppose the part (1) holds. Denote E as the set of y ∈ supp(κγ) such that
almost surely, all ν ∈ supp(γ) with Eν[f ̃(θ)] = y satisfies supp(ν) ⊆ f ̃−1(y). supp(κγ) \ E
has a positive measure. Otherwise, by the definition of E, κγ disclose full information about
posterior mean of f ̃. Hence κγ = κ, contradiction. Assume Y ⊆ supp(κγ) \ E. For y ∈ Y , it
is comprised by some ν ∈ supp(γ) such that its support consists of two points θ1 ∈ f ̃−1(y1)
and θ2 ∈ f ̃−1(y2) , where y1 < y2. For each y = αy1 + (1 − α)y2, with α ∈ [0, 1], define
νy := αδθ1 + (1 − α)δθ2. If supp(K(·|y)) ⊆ [y1, y2], then ν = R
supp(K(·|y)) νy′ K(y′|y). Thus, γ
has a strictly mean-preserving spread and satisfies the constraint. If supp(K(·|x)) ⊈ [y1, y2],
then there exits a non-degenerated Q(·|y) which is the mean-preserving contraction of K(·|y)
and supp(Q(·|y)) ⊆ [y1, y2]. Following the same argument above, replacing by Q(·|y).
“If”. Suppose there exists another γ′ ∈ PE that strictly Blackwell-dominates γ, then
there is a non-degenerated dilation K : ∆(Θ) → ∆(∆(Θ)), that is, ν = R
∆(Θ) ν′K(dν′|ν),
for all ν ∈ supp(γ), such that γ′(B) = R
∆(Θ) K(B|ν)dγ, for all B ∈ B(∆(Θ)). Define
Q(Y |y) := Eγ[K({ν′ : Eν′[f ̃(θ)] ∈ Y }|νy) | {νy : Eνy [f ̃(θ)] = y}], for almost every Y ∈ B(R).
Because of the part (2) that support set of all ν ∈ supp(γ) contains at most two points, for
all νy such that K(νy|νy) < 1, it must have K({ν : Eν[f ̃(θ)] ̸= y}|νy) > 0. Because K is
non-degenerated, {ν : K(ν|ν) < 1} has a positive measure. Hence, Q is non-degenerated.
The following proof is similar with proof of Lemma 2.
κγ′(Y ) =γ′({ν : Eν[f ̃(θ)] ∈ Y }) =
Z
∆(Θ)
K({ν′ : Eν′[f ̃(θ)] ∈ Y }|ν)dγ(ν)
=
Z
R
Z
{νy:Eνy [f ̃(θ)]=y}
K({ν′ : Eν′[f ̃(θ)] ∈ Y }|νy)dγ(νy)dy =
Z
R
Q(Y |y)dκγ(y),
25

ydκγ(y) =
Z
{νy:Eνy [f ̃(θ)]=x}
ydγ(νy) =
Z
{νy:Eνy [f ̃(θ)]=y}
Z
Θ
f ̃(θ)d
Z
∆(Θ)
ν′K(dν′|νy) dγ(νy)
=
Z
{νy:Eνy [f ̃(θ)]=y}
Z
∆(Θ)
Z
Θ
f ̃(θ)dν ′ K (dν ′ |νy )dγ (νy )
=
Z
{νy:Eνy [f ̃(θ)]=y}
Z
∆(Θ)
Eν ′ [f ̃(θ)]K (dν ′|νy )dγ (νy )
=
Z
{νy:Eνy [f ̃(θ)]=y}
Z
R
y′dK({νy′ : Eνy′ [f ̃(θ)] = y′}|μy)dγ(νy)
=
Z
R
y′Q(dy′|y)dκγ(y) ⇒ y =
Z
R
y′Q(dy′|y) almost surely.
Thus, κγ′ is a strictly mean-preserving spread of κγ = κ, which contradict with γ′ ∈ PE .
26

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:30.777Z
- **Text Length:** 53312 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 26 of 26
