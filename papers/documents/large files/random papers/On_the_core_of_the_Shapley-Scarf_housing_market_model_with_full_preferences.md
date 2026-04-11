# PDF Document: Zhang - 2025 - On the core of the Shapley-Scarf housing market model with full preferences.pdf

**File Path:** Zhang - 2025 - On the core of the Shapley-Scarf housing market model with full preferences.pdf

**Processed Date:** 2026-02-10T18:14:30.006Z

**File Size:** 337.60 KB

**Total Pages:** 36

**Extracted Pages:** 36

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3188

**Title:** On the core of the Shapley-Scarf housing market model with full preferences

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

On the core of the Shapley-Scarf housing market
model with full preferences∗
Jun Zhang†
November 27, 2025
Abstract
We examine core concepts in the classical model of Shapley and Scarf (1974) under
full preferences. Among the standard notions, the strong core may be empty, whereas
the weak core, though always nonempty, can be overly large and include unreason
able allocations. Our main findings are: (1) The exclusion core of Balbuzanov and
Kotowski (2019)—a recent concept shown to outperform standard cores in complex
environments under strict preferences—can also be empty. We establish a necessary
and sufficient condition for its nonemptiness, showing that it is more often nonempty
than the strong core. (2) We introduce two new core concepts, built on the exclusion
core and the strong core respectively, by refining the assumptions on how indiffer
ent agents may block. Both are nonempty and Pareto efficient, and coincide with the
strong core whenever the latter is nonempty. (3) These core concepts are ordered by
set inclusion, with the strong core as the smallest and the weak core as the largest.
Keywords: housing market model; full preferences; strong core; exclusion core
JEL Classification: C71, C78, D78
∗I received useful feedback from seminars and conferences at Singapore Management University, Peking
University HSBC Business School, Zhejiang University, 2024 Social Choice and Welfare Meeting (Paris). Fi
nancial support was provided by the National Natural Science Foundation of China (72122009, 72394391)
and the Wu Jiapei Foundation of the China Information Economics Society (E21103567). †Institute for Social and Economic Research, Nanjing Audit University. Email: zhangjun404@gmail.com
arXiv:2511.21158v1 [econ.TH] 26 Nov 2025

1 Introduction
Understanding market design models from a cooperative perspective has been a tradi
tion in the field, dating back to the seminal contributions of Gale and Shapley (1962)
and Shapley and Scarf (1974). Gale and Shapley (1962) introduce the concept of stable
matching in the two-sided marriage model and establish its existence. Shapley and Scarf
(1974) introduce the one-sided housing market model and prove the nonemptiness of the
core, latter referred to as the weak core. The weak core is based on strong domination
and may include Pareto inefficient allocations. In contrast, the strong core, defined via
weak domination, has been favored in the field because it guarantees Pareto efficiency,
a key desideratum in many market design environments. However, the strong core may
be empty when agents have weak preferences. Since the housing market model has been
extensively studied and played a foundational role in modeling various market design
problems, this paper investigates these issues and seeks appropriate core concepts that
ensure both nonemptiness and Pareto efficiency in the model.
The weak core and the strong core differ in their assumptions on the blocking behav
ior of indifferent agents. In the weak core, an agent joins a blocking coalition only if he
strictly benefits from the deviation, whereas the strong core permits indifferent agents to
participate. This difference is inconsequential in transferable utility environments, since
transfers within a blocking coalition can make all members strictly better off. However,
it becomes crucial in market design settings where transfers are typically prohibited. Al
lowing indifferent agents to join blocking coalitions is essential for achieving Pareto effi
ciency, yet doing so may render the strong core empty. Because Pareto efficiency is central
in market design, the literature often assumes strict preferences, under which the strong
core is nonempty and includes a unique element in the housing market model, and can
be computed via the top trading cycle (TTC) mechanism. Nevertheless, weak preferences
are pervasive in practice and have been considered since the original work of Shapley
and Scarf (1974). For example, in kidney exchange, it is standard to assume that patients
have weak preferences over compatible kidneys. In allocation problems with multi-unit
objects, agents are naturally indifferent among identical copies of the same object. Addi
tional arguments for studying weak preferences can be found in Bogomolnaia and Moulin
(2004), Bogomolnaia et al. (2005), and Erdil and Ergin (2017), among others. We present
the housing market model in Section 2 and define standard core concepts in Section 3.1.
We approach the problem by examining the behavioral foundations of coalition for
mation under standard core concepts. The weak core adopts the standard economics as
sumption that agents are self-interested. In contrast, the strong core assumes that agents
1

are “altruistic”: they may join a blocking coalition to benefit others as long as they are not
harmed. This interpretation, however, is controversial, since indifferent agents may help
someones in the coalition while potentially harming outside agents. We note that the
notion of exclusion rights, recently introduced by Balbuzanov and Kotowski (2019) (here
after BK), offers a new and more compelling interpretation. In the housing market model,
a group of agents directly controls their endowments and holds the right to evict others
who occupy their endowments. By threatening eviction, the group gains indirect control
over those agents’ endowments. Leveraging these indirect control rights, the group can
expand its control over more objects. Under strict preferences, in any blocking coalition
that does not include redundant indifferent agents,1 the object received by each indiffer
ent agent must be directly or indirectly controlled by the strictly better-off agents. Thus,
indifferent agents can be viewed as being compelled to join the coalition under the threat
imposed by the better-off agents. This insight motivates us to build on exclusion rights to
understand coalition formation under weak preferences.
We first examine the exclusion core, a core concept based on exclusion rights, which
is originally defined by BK for their general model that subsumes the housing market
model as a special case. The exclusion core consists of allocations in which no coalition
can strictly benefit all of its members by evicting others from the objects they control. BK
show that, under strict preferences, the exclusion core is more effective than the strong
core in eliminating unintuitive allocations in their model, and the two cores coincide in
the housing market model. BK do not address weak preferences. Thus, we examine this
concept as a potential new solution in the housing market model under weak preferences.
Our examination of the exclusion core under weak preferences is new to the literature.
We obtain the following results. First, it no longer coincides with the strong core and may
also be empty. Second, we identify a necessary and sufficient condition for its nonempti
ness (Proposition 1), which is strictly weaker than the counterpart for the strong core
(Quint and Wako, 2004). So, the exclusion core is more often nonempty than the strong
core. Moreover, whenever the strong core is nonempty, they coincide. Finally, the exclu
sion core fails to satisfy an intuitive property we call equivalence-closedness (Proposition
2), which requires that, for any two allocations that are indifferent to all agents, if one
belongs to a solution, the other also belongs to the solution. This property is intuitive, as
agents’ blocking decisions should depend only on their welfare. Both the strong core and
the weak core satisfy this property. These results are presented in Section 3.2.
The inadequacy of the exclusion core suggests us to reevaluate its definition under
1 In a blocking coalition, a group of indifferent agents is redundant if they allocate their endowments among themselves and thus contribute nothing to the others in the coalition.
2

weak preferences, which leads to our revision of the concept in Section 4. Our first ob
servation is that the notion of control rights needs to be revised under weak preferences.
In BK’s definition, if an agent receives an object owned by a group, the group indirectly
controls the agent’s endowment via threatening to evict him from that object. This threat
is credible under strict preferences, since the agent cannot find other indifferent objects.
Under weak preferences, however, since the agent may view several objects as indifferent,
the threat becomes not credible if there exist other indifferent objects not owned by the
group. We therefore redefine control rights as follows: a group directly controls their
own endowments, and indirectly controls another agent’s endowment if and only if all
objects that the agent views as indifferent to his assignment are controlled by the group.
Our second observation is that the exercise of exclusion rights under weak preferences
is more subtle than under strict preferences, which requires the inclusion of indifferent
agents in blocking coalitions. This is in contrast to BK’s original definition, which pre
cludes indifferent agents from joining blocking coalitions, to ensure the nonemptiness
of the exclusion core in their model. In the housing market model, under weak pref
erences, subtle cases arise when a group of agents I does not control another group J’s
endowments but can still effectively evict others from J’s endowments. In these cases,
all objects that J views as indifferent to their current assignments but are not owned by
J are owned by I. In one case, if I evicts J from I’s endowments, J is able to revert to
their own endowments to maintain their welfare, which effectively allows I to indirectly
evict others from J’s endowments. In another case, if I evicts J from I’s endowments,
J is unable to maintain their welfare by reverting to their own endowments. That is, J
relies on I’s endowments to maintain their welfare. This dependence gives I leverage
to compel J to join their coalition. Our new definition unifies these cases by requiring
that, if a blocking coalition includes indifferent agents, then, for each indifferent agent,
all indifferent objects not owned by their group must be exclusively owned by the group
of strictly better-off agents in the coalition. Equivalently, all indifferent objects for each
indifferent agent in the coalition are owned by the coalition.
Our first solution concept, the rectified exclusion core, requires that if a coalition blocks
an allocation via another one, then (1) at least one member of the coalition is strictly
better off and no member is worse off, (2) every agent harmed by the blocking must be
evicted from an object controlled by the coalition, and (3) if the coalition includes indif
ferent agents, all indifferent objects for indifferent agents must be owned by the coalition.
This definition differs from the exclusion core in that we redefine controlled objects and
allow indifferent agents to join a blocking coalition under condition (3). The rectified
exclusion core is nonempty, Pareto efficient, and equivalence-closed (Theorem 1). It is a
3

superset of the exclusion core and a subset of the weak core, and coincides with the strong
core whenever the strong core is nonempty. To prove its nonemptiness, we propose a gen
eralization of TTC to find its elements (Lemma 1). Our algorithm follows the procedures
of the existing generalizations of TTC in the literature (Alcalde-Unzu and Molis, 2011;
Jaramillo and Manjunath, 2012; Aziz and De Keijzer, 2012; Saban and Sethuraman, 2013;
Plaxton, 2013; Ahmad, 2021). To preserve strategy-proofness of TTC, these algorithms
need to carefully select pointing rules for agents. Since our purpose is only to find el
ements of our solution, we do not select a specific pointing rule, only requiring that at
least one trading cycle is generated in each step. This implies that the outcomes of these
existing algorithms all belong to the rectified exclusion core. Previously, the literature
only shows that the outcomes of these algorithms belong to the weak core and are in the
strong core when the strong core is nonempty.
The notion of exclusion rights is a useful conceptual tool for understanding coalition
formation under weak preferences, which forms the basis for our modification of the ex
clusion core. However, different from the exclusion core and our modification that view
endowments as a distribution of exclusion rights, standard core concepts view endow
ments as something that agents must consume by themselves or exchange with others.
So, they require that a blocking coalition must deviate by reallocating their endowments
among themselves. By imposing this requirement while preserving the above condition
for indifferent agents in a blocking coalition, we introduce another solution concept, the
rectified strong core, in Section 5. It differs from the strong core in one critical aspect: while
the strong core assumes that a single indifferent object suffices to justify the participation
of an indifferent agent in a blocking coalition, the rectified strong core requires that all
indifferent objects for the agent must be owned by the coalition. This distinction van
ishes under strict preferences, but under weak preferences, it reflects opposing extreme
assumptions on the blocking behavior of indifferent agents. The rectified strong core is
nonempty, Pareto efficient, and equivalence-closed (Proposition 3). It is a superset of the
rectified exclusion core and a subset of the weak core. It coincides with the strong core
whenever the latter is nonempty.
Thus, we obtain the following relationships between the various core concepts:
Strong core ⊆ Exclusion core ⊆ Rectified exclusion core ⊆ Rectified strong core ⊆ Weak core.
Except for the weak core, all others coincide with the strong core whenever the latter is
nonempty. In particular, they coincide under strict preferences.
We further examine a special case of our model in Section 6, where agents’ indiffer
ent preferences arise from the existence of multiple copies of objects. So, an agent views
4

any two objects as indifferent if and only if all agents view the two objects as indifferent.
In this special model, we show that the strong core may still be empty, whereas the ex
clusion core is nonempty and coincides with the set of outcomes of TTC in an artificial
priority-based allocation model where each object ranks its owners by an arbitrary order.
However, in this special model, the exclusion core is still not equivalence-closed. So, the
rectified exclusion core can still be strictly larger than the exclusion core.
We conclude the paper in Section 7 by discussing other potential solution concepts.
First, Wako et al. (2007) have shown that, in general, the von Neumann-Morgenstern
(vNM) stable set, defined based on either strong domination or weak domination, does
not exist in the housing market model under weak preferences. Second, while Demuynck
et al. (2019) have shown that their myopic stable set, defined based on weak domination,
coincides with the strong core in the housing market model under strict preferences, we
show that, under weak preferences, this solution may include Pareto inefficient alloca
tions. Finally, although the bargaining set introduced by Yılmaz and Yılmaz (2022) is
nonempty, Pareto efficient, and lies between the strong core and the weak core, we show
that it can be strictly larger than the strong core when the latter is nonempty. So, it may
include unintuitive allocations when obviously intuitive allocations exist.
Related literature. The housing market model has been extensively studied. Although
Shapley and Scarf (1974) and Roth and Postlewaite (1977), the two seminal papers on
this model, both consider full preferences, follow-up papers have mostly focused on strict
preferences; see Afacan et al. (2024) for a survey. Among the papers that have addressed
weak preferences, some focus on generalizing TTC to maintain its Pareto efficiency and
strategy-proofness properties that hold under strict preferences, and others are interested
in the set of competitive allocations, because it is nonempty and lies between the strong
core and the weak core. However, we do not think the set of competitive allocations
is a desirable solution, since it often includes Pareto inefficient elements, can be strictly
larger than the strong core when the latter is nonempty, and has anomalies that have been
pointed out by Roth and Postlewaite (1977).2
Specifically, Wako (1984) proves that a nonempty strong core may be a strict subset
of the set of competitive allocations. Wako (1991) proves that the strong core coincides
with the set of competitive allocations if and only if any two competitive allocations are
indifferent to all agents. Quint and Wako (2004) provide a necessary and sufficient con
dition for the strong core to be nonempty, which implies that a nonempty strong core is
2 In some markets, all Pareto efficient allocations in the weak core are not competitive, all competitive allocations are not Pareto efficient, and there exist two allocations that are indifferent to all agents, but one is competitive yet the other is not.
5

essentially single-valued. Bir  ́o et al. (2023) prove that the strong core satisfies the respect
improvement property if being nonempty, and the set of competitive allocations satisfies
the property in a stochastic-dominance sense.3
Several papers have provided cooperative foundations for the set of competitive allo
cations. Wako (1999) shows that this set coincides with a modification of the strong core
based on antisymmetric weak domination.4 Toda (1997) shows that this set is the unique
vNM stable set based on Wako’s antisymmetric weak domination. Kawasaki (2010) and
Klaus et al. (2010) respectively prove that this set is the unique vNM stable set based on
a farsighted version of Wako’s antisymmetric weak domination, or based on a farsighted
version of strong domination if no agent is indifferent between his endowment and any
other object. In these results, additional conditions must be imposed on the domination
relation or on agents’ preferences because a vNM-stable set generally does not exist (Wako
et al., 2007). Ehlers (2004) shows that the strong core is not Nash implementable and the
minimal monotonic extension of the strong core is the set of competitive allocations.5
Alcalde-Unzu and Molis (2011) and Jaramillo and Manjunath (2012) independently
propose the first generalizations of TTC to full preferences that preserve Pareto efficiency
and strategy-proofness. Aziz and De Keijzer (2012) study the computational complex
ity of these algorithms, and Plaxton (2013) proposes another algorithm with enhanced
computational efficiency. Saban and Sethuraman (2013) unify these generalizations by
defining a family of algorithms and derive sufficient conditions on pointing rules to pre
serve strategy-proofness. Ahmad (2021) study weak group strategy-proofness of these
algorithms. Our generalization of TTC to find elements of our proposed cores follow
the common formats of these existing algorithms. But since we do not pursue strategy
proofness, our description shows more flexibility in selecting pointing rules.
There is a literature studying standard cores in the housing market model with exter
nalities (Mumcu and Saglam, 2007; Graziano et al., 2020; Hong and Park, 2022; Dog ̆an et
al., 2011; Aslan and Lain ́e, 2020; Klaus and Meo, 2023). It shows that even the weak core
can be empty under unrestricted strict preferences. So, it typically focuses on restricted
preference domains on which the strong core or other solutions are nonempty.
Finally, following BK, a few papers have further studied the exclusion core. Bal
buzanov and Kotowski (2024) generalize their concept from their original model to a
more general one that incorporates production. Ishida and Park (2025) study a special
3 The respect-improvement property requires that an agent must receive a weakly better assignment when his endowment becomes more desirable for others. 4 Indifferent agents in a blocking coalition must receive the same object in the old and new allocations 5 A monotonic extension of the strong core is a superset of the strong core that satisfies Maskin’s Monotonicty, which is necessary for Nash implementation.
6

case of BK’s model, where agents are partitioned into groups and each group collectively
owns a partitioned group of objects, and show that the strong core and the exclusion
core have a nonempty intersection, though they do not include each other. Zhang (2025)
studies refinements of the exclusion core in BK’s model. All those papers assume strict
preferences. In future research we may explore how to employ the approach in this paper
to address weak preferences in those papers.
2 The housing market model
In the housing market model, a market is represented by a tuple Γ = (I, O, ω, ≿I ), where
I is a finite set of agents, O is a finite set of objects, with |O| = |I|, ω is a one-to-one
mapping from I to O, and ≿I = (≿i)i∈I is a preference profile of agents. For each i ∈ I,
ω(i) is the object owned by i. Each i has a preference relation ≿i on O, which is transitive
and complete but might not be strict. For any distinct o, o′ ∈ O, if o ≿i o′ but o′
i o, then
i strictly prefers o over o′, denoted by o ≻i o′; if o ≿i o′ and o′ ≿i o, then i is indifferent
between o and o′, denoted by o ∼i o′. An agent i accepts an object o if o ≿i ω(i). Every
nonempty C ⊆ I is called a coalition. A coalition C′ is a subcoalition of C if C′ ⊆ C. For
convenience, we often denote a market by M(ω, ≿I ).
An allocation is a one-to-one mapping μ from I to O where μ(i) denotes the object
received by i. An allocation μ is individually rational if, ∀i ∈ I, μ(i) ≿i ω(i). Two alloca
tions μ and μ′ are (welfare) equivalent if, ∀i ∈ I, μ(i) ∼i μ′(i). An allocation σ is a Pareto
improvement over μ for C if, ∀i ∈ C, σ (i) ≿i μ(i), and for some j ∈ C, σ (j) ≻j μ(j). An
allocation is Pareto efficient if it does not have a Pareto improvement for all agents.
We define some useful notations. Given any i ∈ I, for every O′ ⊆ O, let Bi(O′) = {o ∈
O′ : o ≿i o′ for all o′ ∈ O′}, the set of i’s favorite objects among O′. For every o ∈ O, let
Ii(o) = {o′ ∈ O : o′ ∼i o}, the set of objects i views as indifferent with o. For any coalition
C and any allocation μ, let μ(C) = ∪i∈C{μ(i)}, the set of objects assigned to C. Then,
ω(C) is the set of objects owned by C. For any two allocations μ and σ , we call an agent
unaffected from μ to σ if he receives indifferent objects in the two allocations. Then, we
let Cσ>μ = {i ∈ C : σ (i) ≻i μ(i)} and Cσ∼μ = {i ∈ C : σ (i) ∼i μ(i)}, respectively the set of
members of C who become strictly better off from μ to σ and the set of members of C
whose welfare remains unaffected.
Let E denote the set of markets. For each Γ ∈ E, let A(Γ ) denote the set of allocations.
Let 2A(Γ ) denote the power set of A(Γ ). A solution is a correspondence f : E → S
Γ ∈E 2A(Γ )
such that, for every Γ ∈ E, f (Γ ) ∈ 2A(Γ ). We allow f (Γ ) to be empty for some Γ . A solution
f is Pareto efficient if, for every Γ ∈ E, if f (Γ ) is nonempty, all elements of f (Γ ) are Pareto
7

efficient allocations in Γ .
We introduce the following property as a criterion to assess solution concepts. It re
quires that a solution is “closed” regarding equivalent allocations: if one allocation be
longs to the solution, any other equivalent allocation also belongs to the solution. This
property appears intuitive for coalition blocking, as agents should base their blocking
decisions solely on their welfare.
Definition 1. A solution f is equivalence-closed if, for any market Γ and any two equivalent
allocations μ and μ′ in Γ , μ ∈ f (Γ ) if and only if μ′ ∈ f (Γ ).
3 Existing solutions: standard core and exclusion core
3.1 Strong core and weak core
In the standard definition, a coalition blocks an allocation if its members can benefit
from a reallocation of their endowments among themselves. Depending on whether all
members must be strictly better off in the deviation, the definition has two variants.
Definition 2. In a market M(ω, ≿I ), an allocation μ is weakly blocked by a coalition C via
another allocation σ if
1. ∀i ∈ C, σ (i) ≿i μ(i) and ∃j ∈ C, σ (j) ≻j μ(j);
2. σ (C) = ω(C).
The strong core consists of allocations that are not weakly blocked.
In the above definition, if ∀i ∈ C, σ (i) ≻i μ(i), then we say that μ is strongly blocked by C
via σ . The weak core consists of allocations that are not strongly blocked.
When an allocation is weakly (strongly) blocked by a coalition via another allocation,
we say that the first allocation is weakly (strongly) dominated by the second.
The strong core is a subset of the weak core. Under strict preferences, the strong core
is nonempty and a singleton. Under weak preferences, however, the strong core may be
empty, but if nonempty, it must be Pareto efficient. No matter preferences are strict or not,
the weak core is nonempty but may not be Pareto efficient. This difference arises because
unaffected agents are excluded from strong blocking coalitions, yet their participation is
necessary for ensuring Pareto efficiency. See the following example for an illustration.
8

123 ω: a b c μ: b a c σ: c a b σ′: a c b
(a) Allocations
≿1 ≿2 ≿3
cab bbc aca
(b) ≿I
≿′
1 ≿′
2 ≿3
b a, b, c b ac ca
(c) ≿′
I
Example 1 (Weak core and Strong core). Three agents 1, 2, 3 respectively own three objects
a, b, c. In the following tables, the left one lists agents’ endowments and the allocations under
our examination. The other two tables represent two preference profiles.
(Strict preferences) In ≿I , since agents’ favorite objects are distinct, σ is the unique Pareto
efficient allocation. The weak core = {μ, σ }, while the strong core = {σ }. μ is weakly blocked by
{1, 2, 3} via σ , and 2 is unaffected from μ to σ . In contrast, μ is not strongly blocked because,
given that 2 cannot be made strictly better off and thus cannot join any blocking coalition, {1, 3}
have no rights to reallocate b.
(Weak preferences) In ≿′
I , both 1 and 3 most prefer 2’s endowment and then prefer their
own endowments, while 2 is indifferent between all objects. Thus, μ and σ ′ are the individually
rational and Pareto efficient allocations for ≿′
I . In μ, 1 and 2 exchange endowments, while in
σ ′, 3 and 2 exchange endowments.
The weak core = {ω, μ, σ ′}. ω is not Pareto efficient, but it is not strongly blocked because 2
cannot be made strictly better off and thus cannot join any blocking coalition.
In contrast, the strong core = ∅. μ and σ ′ are the only candidates for the strong core. But
μ is weakly blocked by {2, 3} via σ ′, while σ ′ is weakly blocked by {1, 2} via μ. Because 2 is
indifferent between a and c, 2 alternates between 1 and 3 in forming weak blocking coalitions.
Under weak preferences, Quint and Wako (2004) provide a necessary and sufficient
condition for the strong core to be nonempty. Their condition uses the following algo
rithm to partition agents into groups.
Partition by minimal self-mapped sets (PMSS)
• Step t ≥ 1: Denote the set of remaining agents by Vt. Generate a directed graph
(Vt, Γt) in which every i ∈ Vt, represented by a node, points to all of the other agents
who own i’s most preferred objects among the remaining. Denote by Γt(i) the set of
agents pointed by i. A set of agents is called a minimal self-mapped set, denoted
by Tt, if ∪i∈Tt Γt(i) = Tt and there does not exist ∅ , T ′ ⊊ Tt such that ∪i∈T ′ Γt(i) = T ′.
Find a minimal self-mapped set Tt. Let Vt+1 = Vt\Tt. If Vt+1 = ∅, stop the algorithm;
otherwise, go to the next step.
9

A minimal self-mapped set is a group of agents for whom all of their most preferred
objects are owned by group, and no strict subset of the group satisfies the same condition.
Given a market, let t∗ denote the last step of PMSS and T ∗ = (T1, T2, . . . , Tt∗) denote the
sequence of minimal self-mapped sets generated in PMSS.
Definition 3 (Quint and Wako, 2004). In a market M(ω, ≿I ), a PMSS T ∗ = (T1, T2, . . . , Tt∗) is
a top trading segmentation (TTS) if, for every Tk ∈ T , there exists a one-to-one mapping μk
from Tk to ω(Tk) such that, for every i ∈ Tk, μk(i) ∈ Bi O\ Sk−1
l=1 ω(Tl) .
In words, a TTS is a sequence of minimal self-mapped sets (T1, T2, . . . , Tt∗) in which each
Tk can distribute their objects among themselves in a way such that each i ∈ Tk obtains
one of his most preferred objects among those owned by Tk ∪ Tk+1 ∪ · · · ∪ Tt∗.
The existence of a TTS is necessary and sufficient for the strong core to be nonempty.
Proposition 0 (Quint and Wako, 2004). In any market M(ω, ≿I ), an allocation μ is in the
strong core if and only if there exists a TTS T ∗ = (T1, T2, . . . , Tt∗) such that, for every Tk ∈ T ∗,
μ(Tk) = ω(Tk) and, for every i ∈ Tk, μ(i) ∈ Bi(O\ Sk−1
l=1 ω(Tl)).
A corollary of this result is that, when the strong core is nonempty, all of its elements
are equivalent, and any allocation equivalent to the elements of the strong core belongs
to the strong core. This implies that the strong core is equivalence-closed. It is easy to
prove that the weak core is also equivalence-closed (see Proposition 2).
3.2 Balbuzanov and Kotowski’s exclusion core
In a general model encompassing the housing market model as a special case, assuming
strict preferences, Balbuzanov and Kotowski (2019) propose the exclusion core as a new
solution concept. The exclusion core and the strong core do not include each other in the
general model, but they coincide in the housing market model under strict preferences.
When preferences are weak, however, the performance of the exclusion core and its rela
tionship with the strong core is unknown. We examine these questions in this subsection.
We first define the exclusion core for the housing market model. Given an allocation
μ, every coalition C directly controls their endowments ω(C). Moreover, C indirectly con
trols the endowments of those who occupy ω(C), and this control right can be extended to
more agents. Formally, the set of objects (directly or indirectly) controlled by a coalition
C in an allocation μ is defined to be
Ω(C|ω, μ) = ω(∪∞
k=0 C ̃ k )
10

where C ̃0 = C and C ̃k = C ̃k−1 ∪ {i ∈ I\C ̃k−1 : μ(i) ∈ ω(C ̃k−1)} for every k ≥ 1.
The exclusion core consists of allocations where no coalition can strictly benefit all of
its members by evicting others from their controlled objects.
Definition 4 (Balbuzanov and Kotowski, 2019). In any market M(ω, ≿I ), an allocation μ is
exclusion blocked by a coalition C via another allocation σ if
1. ∀i ∈ C, σ (i) ≻i μ(i);
2. ∀j ∈ I\C, μ(j) ≻j σ (j) =⇒ μ(j) ∈ Ω(C|ω, μ).
The exclusion core consists of allocations that are not exclusion blocked.
Unlike the strong core, unaffected agents are precluded from joining exclusion block
ing coalitions. Balbuzanov and Kotowski (2019) argue that this is necessary to ensure the
nonemptiness of the exclusion core in their model. However, unlike the weak core, this
restriction does not prevent the exclusion core from achieving Pareto efficiency, since ev
ery Pareto inefficient allocation is exclusion blocked by the set of agents who are strictly
better off in a Pareto improvement.
Our first finding is that, the exclusion core and the strong core no longer coincide in
the housing market model under weak preferences.
Example 1 revisited (∅ = Strong core ⊊ Exclusion core). In ≿′
I , the strong core = ∅, while
the exclusion core = {μ, σ ′}. In either μ or σ , because 2 cannot be made strictly better off, he
cannot join any exclusion blocking coalition. Then, 1 and 3 cannot evict each other.
Second, we find that the exclusion core can also be empty under weak preferences.
Example 2 (Exclusion core = ∅). Consider the following market with three agents.
123 ω: a b c μ: b c a σ: c a b
≿1 ≿2 ≿3
b a, c b cba ac
In any individually rational and Pareto efficient allocation, the three agents must trade
objects in a cycle, leading to μ or σ . Thus, in either μ or σ , every agent controls all objects. So,
3 can exclusion block μ via σ , and 1 can exclusion block σ via μ. So, the exclusion core = ∅.
Finally, the exclusion core is not equivalence-closed.
11

123 ω: a b c μ: a c b σ: b a c δ: b c a η: c a b
≿1 ≿2 ≿3
b a, c b a, c b a, c
Example 3 (Exclusion core is not equivalence-closed). Consider the following market, which
differs from Example 2 in that agents 1 and 3 become indifferent between a and c.
The exclusion core = {μ, σ }. While σ and δ are equivalent, δ is not in the exclusion core,
because it is exclusion blocked by 3 via μ. Similarly, while μ and η are equivalent, η is not in
the exclusion core, because it is exclusion blocked by 1 via σ .
It is clear that agents have equal blocking incentives in equivalent allocations. Thus,
the exclusion core’s violation of equivalence-closedness must be due to the possibility that
agents have unequal exclusion rights in equivalent allocations. That is, for a coalition
C and two equivalent allocations μ and μ′, it might be that Ω(C|ω, μ) , Ω(C|ω, μ′). In
contrast, in the standard core concepts, agents’ blocking rights are determined solely by
their endowments, which are independent of allocations.
We provide a necessary and sufficient condition for the exclusion core to be nonempty.
Proposition 1. In any market M(ω, ≿I ), an allocation μ is in the exclusion core if and only if
μ is Pareto efficient, and there exists a partition of agents T = (T1, T2, . . . , Tt) such that, for every
Tk ∈ T , μ(Tk) = ω(Tk), and, for every i ∈ Tk, μ(i) ∈ Bi O\ Sk−1
l=1 ω(Tl) .
The partition T = (T1, T2, . . . , Tt) in Proposition 1 does not need to be a TTS. That is, the
most preferred objects of Tk ∈ T among O\ Sk−1
l=1 ω(Tl) do not need to be owned exclusively
by Tk. Therefore, the above condition is more relaxed than the corresponding condition
for the strong core in Proposition 0. This implies that the exclusion core is more often
nonempty than the strong core. Example 1 has shown that when the strong core is empty,
the exclusion core may be nonempty.
Proposition 2 is the main result of this section.
Proposition 2. (1) The exclusion core is a superset of the strong core and a subset of the weak
core. (2) It coincides with the strong core when the strong core is nonempty. (3) However, the
strong core and the weak core are equivalence-closed, whereas the exclusion core is not.
12

4 Rectified exclusion core
The possibility for the strong core and the exclusion core to lack predictive power un
der weak preferences motivates us to analyze the underlying causes and seek potential
rectifications. This leads to our proposal of the rectified exclusion core.
We begin our analysis by examining the behavioral foundation for unaffected agents in
a weak blocking coalition. The cooperative approach does not explain why an unaffected
agent may be willing to join such a coalition. In the absence of side payments, a seemingly
intuitive explanation is altruism: unaffected agents are willing to help the others in the
coalition without incurring any cost to themselves. However, this so-called altruism is
inherently biased: it benefits agents within the coalition but may harm those outside it.
In Example 1, under ≿′
I , agent 2 is willing to help either agent 1 or agent 3 and alternates
between them in forming blocking coalitions, which results in an empty strong core.
Balbuzanov and Kotowski’s concept of exclusion rights offers a more plausible expla
nation for the behavior of unaffected agents. Consider strict preferences. Suppose that
a coalition C weakly blocks an allocation μ via another σ , and Cσ∼μ , ∅. Therefore, for
every i ∈ Cσ∼μ, σ (i) = μ(i). If there exists a subcoalition C′ ⊆ Cσ∼μ such that μ(C′) = ω(C′),
let C′ be the largest subcoalition satisfying this condition.6 So, C′ does not contribute ob
jects to the others in the coalition under both μ and σ . Thus, they can removed from the
coalition without any loss. For every i ∈ Cσ∼μ\C′, we must be able to find a chain, denoted
by i → i1 → i2 → · · · → j, in which every agent receives the next agent’s endowment under
μ and the end of the chain is an agent from Cσ>μ. This means that the objects received
by Cσ∼μ\C′ in μ are directly or indirectly controlled by Cσ>μ. Therefore, the participation
of Cσ∼μ\C′ in the coalition can be viewed as the result of threat exerted by Cσ>μ, who
hold exclusion rights over Cσ∼μ\C′. In fact, this is the argument used by Balbuzanov and
Kotowski to prove the equivalence between the strong core and the exclusion core in the
housing market model under strict preferences.
Since exclusion rights can effectively explain coalition formation in standard core con
cepts under strict preferences, we are motivated to examine exclusion rights and the as
sociated concept of the exclusion core under weak preferences.
Reformulating exclusion right The idea behind the exclusion core is that agents have
the right to evict others from the objects they control. Our first observation is that, under
weak preferences, the definition of exclusion rights needs to be reformulated. Regard
less of whether preferences are strict or not, it is natural that every coalition C directly
6 This largest C′ must be unique, because for any two subcoalitions Ca and Cb such that μ(Ca) = ω(Ca) and μ(Cb) = ω(Cb), we have μ(Ca ∪ Cb) = ω(Ca ∪ Cb).
13

controls their endowments ω(C) and has the right to evict any others from ω(C) in any al
location. Under strict preferences, C can indirectly control the endowments of the agents
who occupy ω(C) by threatening to evict them from ω(C). This threat is credible because
those agents cannot find other objects as good as ω(C). Under weak preferences, however,
this threat might become incredible, because those agents may find other objects as good
as ω(C). For example, if an agent is indifferent between all objects, then he is not fear of
any threat because he can remain unaffected by consuming his own endowment. There
fore, in our new definition, C indirectly controls an agent i’s endowment in an allocation
μ if, not only μ(i), but also all the objects that i views as good as μ(i) are controlled by C.
Formally, in an allocation μ, the set of objects controlled by a coalition C is
Ω∗(C|ω, μ) = ω(∪∞
k=0 C k ),
where C0 = C, and Ck = Ck−1∪{i ∈ I\Ck−1 : Ii(μ(i)) ⊆ ω(Ck−1)} for every k ≥ 1. Under strict
preferences, Ω∗(C|ω, μ) reduces to the definition used by Balbuzanov and Kotowski.
By replacing Ω(C|ω, μ) with Ω∗(C|ω, μ) in Definition 4, we would obtain a new core
concept, which is larger than the exclusion core. In Example 2, this new core would be
equal to {μ, σ }. Agent 3 cannot exclusion block μ via σ , because 3 directly controls his en
dowment c but does not indirectly control 2’s endowment, since 2 is indifferent between
a and c. Similarly, 1 cannot exclusion block σ via μ. However, we observe that, under
weak preferences, the exercise of exclusion rights also becomes subtle, which requires us
to allow unaffected agents to join exclusion blocking coalitions.
Reformulating exclusion blocking coalition The following two examples illustrate the
scenarios in which we allow unaffected agents to join exclusion blocking coalitions.
Example 4. Consider the following market with three agents. For convenience, we use a graph
to indicate each agent’s favorite object. This convention is followed by other examples in this
section.
123 ω: a b c μ: c a b σ: b a c
≿1 ≿2 ≿3
b a, b b ccc
aa 1 2 3
Since agent 1 most prefers agent 2’s endowment, and 2 views 1’s endowment as one of his
favorite objects but does not accept agent 3’s endowment, the intuitive allocation in this market
is σ , in which 1 and 2 exchange endowments. The strong core = the exclusion core = {σ }.
14

Consider the allocation μ, in which agents exchange endowments along the cycle 1 → 3 →
2 → 1. To rule out μ, we must allow 1 to evict 3 from b. However, if we only replace Ω(C|ω, μ)
with Ω∗(C|ω, μ) in Definition 4, 1 would not indirectly control b by threatening to evict 2 from
a, since 2 is indifferent between a and b.
Nevertheless, if we examine the market more carefully, we will see that 1 can actually
achieve the goal of evicting 3 from b by exercising his direct exclusion right. Specifically, since
1 directly controls a, if 1 evicts 2 from a, 2 must reclaim his endowment b to remain unaffected.
Then, 3 must be evicted from b.
Example 4 illustrates one scenario in which we allow unaffected agents to join an
exclusion blocking coalition: S
i ∈Cσ ∼μ
Ii(μ(i))\ω(Cσ∼μ) ⊆ ω(Cσ>μ), and there exists a one
to-one mapping g : Cσ∼μ → ω(Cσ∼μ) such that for every i ∈ Cσ∼μ, g(i) ∼i μ(i).
In other words, Cσ>μ does not control the endowments of Cσ∼μ, because Cσ∼μ can
remain unaffected by allocating their endowments among themselves. However, aside
from their endowments, all other objects that make Cσ∼μ unaffected are owned by Cσ>μ.
Thus, if Cσ>μ evicts Cσ∼μ from ω(Cσ>μ), Cσ∼μ must revert to ω(Cσ∼μ) to remain unaf
fected, which must evict others from ω(Cσ∼μ). Thus, Cσ>μ can indirectly evict others
from ω(Cσ∼μ) by exercising their direct exclusion rights. To demonstrate this exclusion
right, we allow Cσ∼μ and Cσ>μ to jointly form a coalition. In Example 4, we allow 1 and 2
to form a coalition to evict 3 from b.
Example 5. Consider the following market with five agents.
12345 ω: a b c d e μ: b c d e a σ: b a d c e
≿1 ≿2 ≿3 ≿4 ≿5
b a, c b, d c a
a b c e ... ... ... ... ...
1234
5
The four agents {1, 2, 3, 4} can obtain one of their favorite objects by allocating their endow
ments among themselves: 1 and 2 exchange endowments, and 3 and 4 exchange endowments.
This produces the allocation σ . The strong core = the exclusion core = {σ }.
In the allocation μ, the five agents exchange endowments along the cycle 5 → 1 → 2 → 3 →
4 → 5. To rule out μ, we must allow 4 to evict 5 from a. However, if we only replace Ω(C|ω, μ)
with Ω∗(C|ω, μ) in Definition 4, 4 would not indirectly control 3’s endowment by threatening
to evict 3 from d, since 3 is indifferent between b and d. Therefore, 4 would not indirectly
control the remaining agents’ endowments and would have no right to evict 5.
15

Nevertheless, if we examine the market more carefully, we will find that 4 can achieve the
goal of evicting 5 by exercising his direct exclusion right. Specifically, in μ, if 4 evicts 3 from d,
3 has to obtain b to remain unaffected. Then, there are two cases.
• If 3 can successfully obtain b after being evicted from d, 1 will be evicted from b, which is
his unique favorite object. Then, 4 can leverage this indirect threat to obtain the control
right of 1’s endowment a, and then evict 5.
• If 3 cannot obtain b after being evicted from d, 4’s threat towards 3 becomes credible.
Leveraging this threat, 4 can obtain the control right of c and threaten to evict 2 from
c. To counteract this threat, 2 will need to obtain a to remain unaffected. Similarly as
above, if 2 can successfully obtain a, 5 will be evicted from a. If 2 cannot obtain a, 4’s
indirect threat towards 2 becomes credible, and then 4 can obtain the control right of b.
Then, 4 can threaten 1 to obtain the control right of a, and then evict 5.
Example 5 illustrates another scenario in which we allow unaffected agents to join an
exclusion blocking coalition: although Cσ>μ does not control the endowments of Cσ∼μ, we
have S
i ∈Cσ ∼μ
Ii(μ(i))\ω(Cσ∼μ) ⊆ ω(Cσ>μ), and there does not exist a one-to-one mapping
g : Cσ∼μ → ω(Cσ∼μ) such that, for every i ∈ Cσ∼μ, g(i) ∼i μ(i).
In other words, Cσ∼μ must rely on the endowments of Cσ>μ to remain unaffected. By
leveraging the threat of evicting Cσ∼μ from ω(Cσ>μ), Cσ>μ can indirectly control ω(Cσ∼μ)
and pressure Cσ∼μ to join the coalition. In Example 5, {1, 2, 3} relies on 4’s endowment to
remain unaffected. Thus, we allow {1, 2, 3, 4} to form a coalition to exclusion block μ.
To unify the above scenarios, our definition imposes the following requirement on an
exclusion blocking coalition C: if Cσ∼μ , ∅, then ∀i ∈ Cσ∼μ, Ii(μ(i))\ω(Cσ∼μ) ⊆ ω(Cσ>μ), or
equivalently, Ii(μ(i)) ⊆ ω(C). In words, all the objects that make every i ∈ Cσ∼μ unaffected
are owned by C. In this case, if Cσ>μ evicts Cσ∼μ from ω(Cσ>μ), then, either Cσ∼μ can
revert to their own endowments to remain unaffected, which evicts others from ω(Cσ∼μ),
or Cσ∼μ cannot rely on their own endowments to remain unaffected, thereby justifying
their participation in the coalition.7
Definition 5. In any market M(ω, ≿I ), an allocation μ is rectification exclusion blocked by
a coalition C via another allocation σ if
1. ∀i ∈ C, σ (i) ≿i μ(i), and ∃j ∈ C, σ (j) ≻j μ(j);
7 Our definition accommodates the case that, for every i ∈ Cσ∼μ, Ii(μ(i)) ⊆ ω(Cσ>μ). So, Cσ>μ indirectly controls the endowments of Cσ∼μ. In this case, we have flexibility to define the blocking coalition: either Cσ>μ alone forms a coalition to evict others from ω(Cσ∼μ), or Cσ>μ and Cσ∼μ jointly form a coalition to evict others from ω(Cσ∼μ). A difference is that, if Cσ∼μ does not join the blocking coalition, they are allowed to be harmed by the blocking, but if they join the blocking coalition, th-
ey cannot be harmed.
16

2. ∀k ∈ I\C, μ(k) ≻k σ (k) =⇒ μ(k) ∈ Ω∗(C|ω, μ);
3. ∀i ∈ Cσ∼μ, Ii(μ(i)) ⊆ ω(C).
The rectified exclusion core consists of allocations that are not rectifyingly exclusion blocked.
Our main result in this section is the following theorem.
Theorem 1. (1) The rectified exclusion core is nonempty, Pareto efficient, and equivalence
closed. (2) It is a superset of the exclusion core and a subset of the weak core. (3) It coincides
with the strong core (and with the exclusion core) when the strong core core is nonempty.
We remark on the equivalence-closedness property. As shown in Proposition 2, the
strong core and the weak core satisfy this property, whereas the exclusion core violates
it. The issue with the exclusion core is that a coalition C may have different exclusion
rights in equivalent allocations. After reformulating exclusion rights, we ensure that
Ω∗(C|ω, μ) = Ω∗(C|ω, μ′) whenever μ and μ′ are equivalent. As a result, the rectified ex
clusion core satisfies the property.
4.1 An algorithm to find elements of the rectified exclusion core
We present an algorithm called generalized top trading cycle (GTTC), and prove that all
allocations it finds belong to the rectified exclusion core. This implies that the rectified
exclusion core is nonempty.
Under strict preferences, TTC is an individually rational, Pareto efficient, and strategy
proof mechanism, and its outcome is the unique element of the strong core. Under weak
preferences, the literature has proposed several generalizations of TTC to preserve Pareto
efficiency and strategy-proofness. The procedures of these algorithms are similar in that
their each step essentially consists of three stages. In the departure stage, a group of
agents are removed with their assignments, if there are no beneficial trades involving
them in subsequent steps. In the pointing stage, a rule selects a unique pointee for each
agent such that at least one beneficial trading cycle is formed. These selection rules are
crucial for ensuring strategy-proofness. In the trading stage, cycles formed in the point
ing stage are traded.
Our definition of GTTC is similar to those procedures, but it does not specify a selec
tion rule for the pointing stage. It only requires that at least one beneficial trading cycle
is formed . We prove that this requirement is sufficient to ensure that the outcome of the
algorithm belongs to the rectified exclusion core. If someone wants to achieve strategy
proofness, a specific selection rule in the existing algorithms can be employed.
17

Generalized Top Trading Cycle
Step t ≥ 1: Every step includes three stages.
• Departure: Among the remaining agents, a group of agents is chosen to depart with
the objects they hold if, for every agent in the group, two conditions are met:
1. He holds one of his most preferred objects among the remaining ones;
2. All of his most preferred objects among remaining ones are held by the group.
Once a group departs, there may exist another group that satisfies the above two
conditions. Choose one of such groups and let it depart. Repeat this operation until
there are no groups that are chosen to depart. At any point in this process, an agent
is said to become satisfied if the object he holds becomes one of his most preferred
objects among the remaining ones.
At the end of the departure stage, denote the set of remaining agents by It and the
set of remaining objects by Ot. If It is empty, stop the algorithm. Otherwise, denote
the current allocation by μt such that, for every i ∈ It, μt(i) is the object held by i.
Any i ∈ It is said to be satisfied if μt(i) is among i’s most preferred objects among
Ot. Otherwise, i is said to be unsatisfied.
• Pointing: Let each agent point to one of the others who hold his favorite objects
such that at least one beneficial trading cycle is generated; that is, at least one agent
in the cycle strictly prefers the object held by the pointee to the object he holds.
• Trading: Clear the cycles generated in the Pointing stage such that every agent in
every cycle obtains the object held by the pointee. Go to the next step.
In each step of GTTC, the pointing stage generates at least one beneficial trading cycle.
By trading the cycle, at least one agent obtains a strictly better object than the object he
holds. Since there are finite agents and finite objects, GTTC must stop in finite steps.
When GTTC stops, all agents are involved in departing groups. These groups can be
ordered as a sequence (G1, G2, . . . , Gk) such that each group Gl departs before the group
Gl+1. An agent may become satisfied at some point in the algorithm but departs in a later
step. Once an agent becomes satisfied, he remains satisfied in subsequent steps, until he
departs with his assignment.
Lemma 1. Every outcome of GTTC belongs to the rectified exclusion core.
18

GTTC may not find all elements of the rectified exclusion core. In Example 3, δ and η
are in the rectified exclusion core, but they cannot be found by GTTC.8
5 Rectified strong core
Similar to our motivation for the rectified exclusion core, this section proposes a modi
fication of the strong core to address its emptiness issue. Section 4 has shown that BK’s
exclusion right provides a useful conceptual tool for explaining coalition formation un
der the strong core, based on which we propose the condition “∀i ∈ Cσ∼μ, Ii(μ(i)) ⊆ ω(C)”
to regulate the blocking behavior of unaffected agents under weak preferences. How
ever, exclusion blocking does not need to satisfy the feasibility condition required by
standard core concepts, where a blocking coalition must redistribute their endowments
among themselves (i.e., “σ (C) = ω(C)”). By replacing condition (2) of Definition 5 with
this feasibility condition, we obtain the following concept.
Definition 6. In a market M(ω, ≿I ), an allocation μ is rectification blocked by a coalition C
via another allocation σ if
1. ∀i ∈ C, σ (i) ≿i μ(i), and ∃j ∈ C, σ (j) ≻j μ(j);
2. σ (C) = ω(C);
3. ∀i ∈ Cσ∼μ, Ii(μ(i)) ⊆ ω(C).
The rectified strong core consists of allocations that are not rectification blocked.
Compared to the definition of the strong core, the above definition adds the condition
(3). We formulate their difference as follows: the strong core assumes that an unaffected
agent is willing to join a blocking coalition if and only if the coalition owns one object
that makes him unaffected and assigns the object to him, whereas the rectified strong core
assumes that an unaffected agent is willing to join a blocking coalition if and only if the
coalition owns all the objects that make him unaffected and assigns one of them to him.
Thus, the strong core is a subset of the rectified strong core.
Under strict preferences, this difference vanishes, and the rectified strong core col
lapses to the strong core. As discussed, Cσ∼μ can be viewed as being compelled to join the
coalition due to the threat posed by Cσ>μ. Condition (3) of Definition 6 generalizes this
8 Specifically, in step one of GTTC, 1 and 3 must point to 2 and 2 must point to one of them. Thus, either {1, 2} or {2, 3} form a cycle and exchange their endowments. After that, there is no more beneficial trading cycle. So, GTTC finds either μ or σ .
19

interpretation to settings with weak preferences, which has been discussed in Section
4. In contrast, the conventional definition of the strong core literally applies the same
condition on unaffected agents from strict preferences to weak preferences.
We summarize our results about the rectified strong core in the following proposition.
Proposition 3. (1) The rectified strong core is nonempty, Pareto efficient, and equivalence
closed. (2) It is a superset of the rectified exclusion core and a subset of the weak core. (3) It
coincides with the strong core when the strong core is nonempty.
Theorem 1 and Proposition 3 together imply the following relationships between the
various core concepts discussed in the paper:
Strong core ⊆ Exclusion core ⊆ Rectified exclusion core ⊆ Rectified strong core ⊆ Weak core.
The set inclusion relation between any two core concepts can be strict. In ≿′
I of Exam
ple 1, the strong core is a strict subset of the exclusion core. In Example 3, the nonempty
exclusion core is a strict subset of the rectified exclusion core, which equals {μ, σ , δ, η}. In
Example 6 below, the rectified exclusion core is a strict subset of the rectified strong core.
In ≿I of Example 1, the rectified strong core, coinciding with the strong core, is a strict
subset of the weak core.
Example 6 (Rectified exclusion core ⊊ rectified strong core). Consider the following market.
1234 ω: a b c d μ: b a d c σ: c a b d
≿1 ≿2 ≿3 ≿4
c a, b, c, d b c b dd a ca
d ab 1
2
34
We show that μ is in the rectified strong core, but not in the rectified exclusion core. In μ,
the two pairs {1, 2} and {3, 4} respectively exchange their endowments.
To show that μ is in the rectified strong core, suppose that μ is rectification blocked by
a coalition C via another μ′. Since μ is Pareto efficient, it must be that C ⊊ I. Since 2 is
indifferent between all objects, it does not hold that I2(μ(2)) ⊆ ω(C). Therefore, 2 < C. Since
1 and 3 are the only agents who have not received their most preferred objects in μ, either
1 ∈ Cμ′>μ or 3 ∈ Cμ′>μ (or both). However, because 2 < C, if 3 ∈ C, it is impossible for 3 to
receive b in μ′. Therefore, it must be that 1 ∈ Cμ′>μ. Then, it must be that μ′(1) = c, which
requires 3 ∈ C and 4 < C, since 4 must be worse off in μ′. Therefore, C = {1, 3}. But this means
that μ′(3) = a, which is a contradiction, since 3 is worse off in μ′.
20

We then show that μ is rectification exclusion blocked by C = {1, 3} via σ . Note that both
agents in the coalition are strictly better off in σ , and 4 is the only agent who is worse off in σ .
It is easy to verify that μ(4) = c ∈ {a, c} = Ω∗({1, 3}|ω, μ).
6 Housing market with multiple copies of objects
This section examines a special case of the housing market model in which agents’ in
different preferences stem from the existence of multiple copies of objects. Formally, we
consider a setting in which there exists a finite set of object types, denoted by O. For each
x ∈ O, let Ox ⊆ O denote the set of the copies of x. Therefore, O = ∪x∈OOx. Each i ∈ I
owns an object ω(i) ∈ O and has a preference relation ≿i over O such that, for any distinct
o, o′ ∈ O, o ∼i o′ if and only if o, o′ ∈ Ox for some x ∈ O; that is, o and o′ are different copies
of the same object type. Let Ix denote the set of owners of the copies of x.
In this special model, the strong core may still be empty. In Example 3, a and c can be
viewed as two copies of the same object type. The strong core is empty in the example.
However, we prove that the exclusion core is nonempty. Notably, the exclusion core
coincides with the set of outcomes of TTC in an artificial priority-based allocation model.
Specifically, let each x ∈ O rank the agents in Ix using a priority order ▷x, where i ▷x
j means that i is ranked above j. Given a priority structure (▷x)x∈O, TTC proceeds as
follows: in each step, among the remaining agents and object types, let each agent point
to his most preferred object type, and each object type point to its highest-priority owner;
in each generated cycle, let each agent receive the object owned by the highest-priority
owner of the object type he points to, and then remove them.
This algorithm is a refinement of the generalization of TTC introduced by Abdulka
dirog ̆lu and S ̈onmez (2003) for the school choice model. Their algorithm does not distin
guish between the different copies of the same object type, whereas to obtain our result,
we need to specify the copy of the object type each agent receives. By varying the priority
structure, we obtain different outcomes of TTC. We prove that an allocation belongs to
the exclusion core if and only if it can be found by TTC under some priority structure.
Proposition 4. In the housing market model with multiple copies of objects, the exclusion core
equals the set of the outcomes of TTC in the artificial priority-based allocation model.
We illustrate this proposition by revisiting Example 3.
Example 3 revisited (Finding the exclusion core). We view a and c as two copies of an object
type x, and view b as the unique copy of another object type y.
21

In the first step of our TTC, 1 and 3 point to y, and 2 points to x. If 1 is ranked above 3 in
the priority order for x, then 1 and 2 form a cycle, with 1 receiving b and 2 receiving a. This
finds the allocation σ in the exclusion core. If, instead, 3 is ranked above 1, we then find the
other allocation μ in the exclusion core.
However, if we assign arbitrary copies of object types to agents involved in cycles, we then
also find δ and η, which are not in the exclusion core but are equivalent to its elements.
In this special model, the exclusion core is still not equivalence-closed (see Example
3). Since the rectified exclusion core is equivalence-closed, it must include all allocations
that are equivalent to the elements of the exclusion core. These allocations are exactly
those found by Abdulkadirog ̆lu and So ̈nmez (2003)’s TTC where agents can be assigned
arbitrary copies of the object type they point to when involved in cycles. The set of these
allocations can be viewed as the “equivalence closure” of the exclusion core. However,
Example 7 below shows that this closure may still be strictly smaller than the rectified
exclusion core; that is, the rectified exclusion core may have elements that are not equiv
alent to any element of the exclusion core.
Example 7 (Closure of exclusion core ⊊ rectified exclusion core). Consider the following
market with three object types and five agents. Object a is the only copy of an object type.
Objects b and b′ are two distinct copies of another type, and c and c′ are two distinct copies of
the third type.
1 2 2′ 3 3′ ω: a b b′ c c′ μ: b c c′ a b′ σ: b a c b′ c′
≿1 ≿2 ≿2′ ≿3 ≿3′
b,b′ a a a a a c,c′ c,c′ b,b′ b,b′ c,c′ b b c,c′ c,c′
We show that μ is in the rectified exclusion core, but it is not equivalent to any element of
the exclusion core.
Suppose that μ is rectification exclusion blocked by a coalition C. In μ, only one agent in
{2, 2′, 3′} can be made strictly better off, and the agent must receive object a to be better off.
Thus, to block μ, 3 must be evicted from a. If 1 ∈ C, since he must be unaffected, all owners
of his indifferent objects must belong to C. So, {2, 2′} ⊆ C. Since at least one of 2 and 2′ must
be unaffected, all owners of his indifferent objects must belong to C. So, {3, 3′} ⊆ C, which,
however, is impossible. Thus, 1 < C, which implies that C must indirectly control a. So, C
must directly or indirectly control both b and b′. If C directly controls b and b′, it must be that
{2, 2′} ⊆ C. Then, as above, it must be that {3, 3′} ⊆ C, which is impossible. If C indirectly
controls b and b′, it must be that {3, 3′} ⊆ C, which again is impossible.
22

In TTC, under any priority structure, in the first step, 1 points to the object type of b and b′,
and both 2 and 2′ point to a. Thus, one of 2 and 2′ must receive a, depending on whose priority
is higher. For instance, if 2 is ranked above 2′ in the priority order, we obtain the allocaiton
σ . However, μ, in which neither of 2 and 2′ receives a, cannot be generated by TTC and is not
equivalent to any element of the exclusion core.
7 Concluding remark
This section concludes the paper by examining other potential solution concepts for the
housing market model. The first solution we consider is the vNM stable set. A set of
allocations is a vNM stable set if each allocation inside the set is not dominated by any
other allocation inside the set (internal stability), and each allocation outside the set is
dominated by an allocation inside the set (external stability). Wako (1991) shows that the
strong core, when it is nonempty, is the unique vNM stable set based on weak domination.
However, Wako et al. (2007) shows that, in general, a vNM stable set based on either
strong or weak domination does not exist. Several papers modify the definition of weak
domination and then prove that the corresponding vNM stable set coincides with the set
of competitive allocations. However, as discussions in the related literature section, the
set of competitive allocations has undesirable features.
Demuynck et al. (2019) introduce the myopic stable set (MSS) for a general class of
social environments. A MSS always exists and is unique for a social environment with a
finite state space. In the housing market model, a weak domination MSS is a set of allo
cations satisfying three conditions: (1) no coalition of agents can benefit from deviating
from an allocation inside the set to an allocation outside the set (deterrence of external
deviations); (2) from any allocation outside the set there is a finite sequence of coalition
blocking that leads to an allocation inside the set (iterated external stability); (3) no strict
subset of the set satisfies the former two conditions (minimality). Demuynck et al. (2019)
have proved that, in the housing market model under strict preferences, the weak domi
nation MSS coincides with the strong core. However, we show that, when preferences are
weak, the weak domination MSS may include Pareto inefficient allocations.
Example 2 revisited (MSS includes Pareto inefficient elements). The allocations μ and σ
are Pareto efficient in the example. Other than ω, there exist three other allocations: μ′(1, 2, 3) =
(a, c, b), σ ′(1, 2, 3) = (b, a, c), and δ(1, 2, 3) = (c, b, a).
The weak domination MSS = {μ, μ′, σ , σ ′}. So, it has Pareto inefficient elements, μ′ and σ ′.
To verify that this set is a MSS, note that μ is weakly dominated by μ′, μ′ is weakly dominated
23

by σ and σ ′, σ is weakly dominated by σ ′, σ ′ is weakly dominated by μ and μ′, δ is weakly
dominated by μ and σ , and ω is weakly dominated by any other allocation.
Note that both the vNM stable set and the MSS are setwise solutions; whether an allo
cation belongs to the set depends on other allocations in the set. In contrast, the various
core concepts discussed in our paper are pointwise solutions; whether an allocation be
longs to a core is a property of the allocation, irrespective of other allocations in the core.
Yılmaz and Yılmaz (2022) propose a solution based on the bargaining set developed
by Aumann and Maschler (1964). Their idea is that, when a coalition blocks an allocation
to reach a new allocation, it should consider the possible counter-blocking of the new
allocation by other coalitions. An allocation is in the bargaining set if whenever it is
blocked by coalition, there exists a counter-blocking of the new allocation by another
coalition that overlaps with the original coalition, and the new coalition blocks the new
allocation by claiming their welfare in the original allocation. When a coalition C weakly
blocks an allocation μ via another σ , there is a degree of freedom to select σ . Yılmaz and
Yılmaz impose the selection rule such that, in σ , all agents outside C who are affected by
the blocking receive their own endowments, and the others who are unaffected keep their
assignments in μ. The bargaining set is nonempty and Pareto efficient, and lies between
the strong core and the weak core. However, it may be strictly larger than the strong core
when the latter is nonempty (Example 8). The bargaining set and our solutions do not
include each other.
Example 8 (∅ , strong core ⊊ bargaining set). Consider a market with five agents.
12345 ω: a b c d e μ: e b a c d δ: b a c e d
≿1 ≿2 ≿3 ≿4 ≿5
b a, b a c, e d e ... c ... ...
... ... 1 3
4
5
2
The strong core = {δ}. We show that μ, which is not in the strong core, is in the bargaining
set. In μ, 2 receives his endowment, and the remaining agents exchange endowments along
a cycle 1 → 5 → 4 → 3 → 1. There exists only one coalition {1, 2} that weakly blocks μ via
an allocation σ in which 1 and 2 exchange endowments. By the selection rule of Yılmaz and
Yılmaz (2022), the other agents receive their own endowments in σ . Then, σ is weakly blocked
by {2, 4, 5} via an allocation μ′ in which 2 receives his endowment, and 4 and 5 exchange their
endowments. In μ′, all members of {2, 4, 5} receive objects indifferent to their assignments in
μ, and the counter-blocking coalition includes one member of the initial blocking coalition (i.e.,
2). Therefore, μ is in the bargaining set defined by Yılmaz and Yılmaz (2022).
24

References
Abdulkadiro ̆glu, Atila and Tayfun S ̈onmez, “School choice: A mechanism design ap
proach,” American economic review, 2003, 93 (3), 729–747.
Afacan, Mustafa Og ̆uz, Gaoji Hu, and Jiangtao Li, “Housing markets since Shapley and
Scarf,” Journal of Mathematical Economics, 2024, 111, 102967.
Ahmad, Ghufran, “Group incentive compatibility in the housing market problem with
weak preferences,” Games and Economic Behavior, 2021, 126, 136–162.
Alcalde-Unzu, Jorge and Elena Molis, “Exchange of indivisible goods and indifferences:
The top trading absorbing sets mechanisms,” Games and Economic Behavior, 2011, 73
(1), 1–16.
Aslan, Fatma and Jean Laine ́, “Competitive equilibria in Shapley–Scarf markets with
couples,” Journal of Mathematical Economics, 2020, 89, 66–78.
Aumann, Robert J and Michael Maschler, “The bargaining set for cooperative games,”
Advances in game theory, 1964, 52 (1), 443–476.
Aziz, Haris and Bart De Keijzer, “Housing markets with indifferences: A tale of two
mechanisms,” in “Proceedings of the AAAI Conference on Artificial Intelligence,”
Vol. 26 2012.
Balbuzanov, Ivan and Maciej H Kotowski, “Endowments, exclusion, and exchange,”
Econometrica, 2019, 87 (5), 1663–1692.
and , “The property rights theory of production networks,” Theoretical Economics,
2024, 19 (4), 1619–1658.
Bir  ́o, Pe ́ter, Flip Klijn, Xenia Klimentova, and Ana Viana, “Shapley–Scarf Housing Mar
kets: Respecting Improvement, Integer Programming, and Kidney Exchange,” Mathe
matics of Operations Research, 2023.
Bogomolnaia, Anna and Herve ́ Moulin, “Random matching under dichotomous prefer
ences,” Econometrica, 2004, 72 (1), 257–279.
, Rajat Deb, and Lars Ehlers, “Strategy-proof assignment on the full preference do
main,” Journal of Economic Theory, 2005, 123 (2), 161–186.
Demuynck, Thomas, P Jean-Jacques Herings, Riccardo D Saulle, and Christian Seel,
“The myopic stable set for social environments,” Econometrica, 2019, 87 (1), 111–138.
Dog ̆an, Onur, Gilbert Laffond, and Jean Laine ́, “The Core of Shapley–Scarf markets with
couples,” Journal of Mathematical Economics, 2011, 47 (1), 60–67.
Ehlers, Lars, “Monotonic and implementable solutions in generalized matching prob
lems,” Journal of Economic Theory, 2004, 114 (2), 358–369.
25

Erdil, Aytek and Haluk Ergin, “Two-sided matching with indifferences,” Journal of Eco
nomic Theory, 2017, 171, 268–292.
Gale, David and Lloyd S Shapley, “College admissions and the stability of marriage,”
American mathematical monthly, 1962, pp. 9–15.
Graziano, Maria Gabriella, Claudia Meo, and Nicholas C Yannelis, “Shapley and Scarf
housing markets with consumption externalities,” Journal of Public Economic Theory,
2020, 22 (5), 1481–1514.
Hong, Miho and Jaeok Park, “Core and top trading cycles in a market with indivisible
goods and externalities,” Journal of Mathematical Economics, 2022, 100, 102627.
Ishida, Wataru and Changwoo Park, “Group incentive-compatible allocation of discrete
resources when ownership is partitioned,” Games and Economic Behavior, 2025.
Jaramillo, Paula and Vikram Manjunath, “The difference indifference makes in strategy
proof allocation of objects,” Journal of Economic Theory, 2012, 147 (5), 1913–1946.
Kawasaki, Ryo, “Farsighted stability of the competitive allocations in an exchange econ
omy with indivisible goods,” Mathematical Social Sciences, 2010, 59 (1), 46–52.
Klaus, Bettina and Claudia Meo, “The core for housing markets with limited externali
ties,” Economic Theory, 2023, pp. 1–33.
, Flip Klijn, and Markus Walzl, “Farsighted house allocation,” Journal of Mathematical
Economics, 2010, 46 (5), 817–824.
Mumcu, Ayse and Ismail Saglam, “The core of a housing market with externalities,”
Economics Bulletin, 2007, 3 (55), 1–5.
Plaxton, C Gregory, “A simple family of top trading cycles mechanisms for housing mar
kets with indifferences,” in “Proceedings of the 24th international conference on game
theory” Citeseer 2013, pp. 1–23.
Quint, Thomas and Jun Wako, “On houseswapping, the strict core, segmentation, and
linear programming,” Mathematics of Operations Research, 2004, 29 (4), 861–877.
Roth, Alvin E and Andrew Postlewaite, “Weak versus strong domination in a market
with indivisible goods,” Journal of Mathematical Economics, 1977, 4 (2), 131–137.
Saban, Daniela and Jay Sethuraman, “House allocation with indifferences: a generaliza
tion and a unified view,” in “Proceedings of the fourteenth ACM conference on Elec
tronic Commerce” 2013, pp. 803–820.
Shapley, Lloyd and Herbert Scarf, “On cores and indivisibility,” Journal of Mathematical
Economics, 1974, 1 (1), 23–37.
Toda, M, “Implementation and characterizations of the competitive solution with indi
visibility,” mimeo, 1997.
26

Wako, Jun, “A note on the strong core of a market with indivisible goods,” Journal of
Mathematical Economics, 1984, 13 (2), 189–194.
, “Some properties of weak domination in an exchange market with indivisible goods,”
The Economic Studies Quarterly, 1991, 42 (4), 303–314.
, “Coalition-proofness of the competitive allocations in an indivisible goods market,”
Fields Institute Communications, 1999, 23, 277–283.
, Kiiko Matsumoto, and Toshiharu Irisawa, “On the nonexistence of vNM stable sets
in an exchange economy with indivisible goods,” mimeo, 2007.
Yılmaz, Murat and O ̈ zgu ̈ r Yılmaz, “Stability of an allocation of objects,” Review of Eco
nomic Design, 2022, 26 (4), 561–580.
Zhang, Jun, “Consistent solutions to the house allocation model with general endow
ments,” working paper, 2025.
27

Appendix
A Proofs of Propositions 1, 2, 3, and 4
Proof of Proposition 1. (If) Suppose that μ is a Pareto efficient allocation, and there exists
a partition of agents T = (T1, T2, . . . , Tt) such that, for every Tk ∈ T , μ(Tk) = ω(Tk), and, for
every i ∈ Tk, μ(i) ∈ Bi O\ Sk−1
l=1 ω(Tl) . We prove that μ is in the exclusion core.
Suppose that μ is exclusion blocked by some coalition C via some σ . Since μ is Pareto
efficient, there must exist an agent who becomes worse off in σ compared to μ. Thus, C
must evict some agent. However, we prove that this is impossible. First, all agents in
T1 cannot join C, because all of them have obtained their favorite objects in μ and thus
cannot be made strictly better off. Given this, because all agents in T2 have obtained
their favorite objects among O\ω(T1), if any agent in T2 joins C, the agent must become
strictly better off by obtaining an object owned by some agent in T1. However, because
μ(T1) = ω(T1), C does not control ω(T1) and thus cannot evict any agent in T1. So, T2
cannot join C. This argument can be inductively applied to all remaining groups in T to
conclude that no agents can join C. Therefore, μ is not exclusion blocked.
(Only if) Suppose that the exclusion core is nonempty, and μ is any allocation in it. So,
μ is Pareto efficient. Moreover, in μ, agents can be partitioned into disjoint groups such
that the agents in each group trade their endowments along a cycle represented by
i1 → i2 → i3 → · · · → ik → i1,
where il → il+1 means that μ(il) = ω(il+1).9 Denote the set of agents in a typical group by
Tk. Therefore, for every Tk, μ(Tk) = ω(Tk), and no strict subset of Tk satisfies this condition.
We prove that these groups can be arranged into an order T = (T1, T2, . . . , Tt) such that, for
every Tk ∈ T and every i ∈ Tk, μ(i) ∈ Bi O\ Sk−1
l=1 ω(Tl) .
First, for every Tk ∈ T , we prove that every i ∈ Tk most prefers his assignment μ(i)
among all objects in ω(Tk). Because the agents in Tk trade their endowments along a cycle
represented above, every agent in Tk controls all objects in ω(Tk). Thus, if any i ∈ Tk
strictly prefers some object in ω(Tk) to μ(i), then i would be able to exclusion block μ,
which is a contradiction. So, every i ∈ Tk must most prefer μ(i) among all objects in ω(Tk).
Second, we prove that there must exist a group in which all agents most prefer their
assignments among all objects. We label this group T1. To find T1, start with any group
Ta. If some ia ∈ Ta strictly prefers an object owned by another group Tb to his assignment
9 If an agent obtains his own endowment, he forms a cycle with himself.
28

12
3
45
6
78
9
Figure 1: Suppose there are three groups {1, 2, 3}, {4, 5, 6}, and {7, 8, 9}. The agents in each group trade their endowments along the cycle and most prefer their assignments among the objects owned by the group. Suppose that 2 strictly prefers 4’s endowment to his assignment, 5 strictly prefers 7’s endowment to his assignment, and 9 strictly prefers 3’s endowment of his assignment. Then, {2, 5, 9} can exclusion block the allocation because they control all objects in the three cycles.
μ(ia), we then examine Tb. If some ib ∈ Tb strictly prefers an object owned by another
group Tc to his assignment μ(ib), we then examine Tc. Continuing this search process,
because there are finite groups, we must either find a group in which all agents most
prefer their assignments among all objects, or find a group in which some i strictly prefers
an object owned by a group we have examined to his assignment μ(i). In the former case,
we label the group T1. We prove that the latter case is impossible. In the latter case,
there exists a sequence of groups T ′ = (T ′
1,T ′
2,...,T ′
m) such that, in every T ′
k ∈ T ′\Tm, some
ik strictly prefers the object owned by some agent in T ′
k+1 to his assignment μ(ik), while
some im ∈ T ′
m strictly prefers the object owned by some agent in T ′
1 to his assignment μ(im).
Then, {i1, i2, . . . , im} can form a coalition to exclusion block μ, because these agents control
all of the objects in ∪Tk∈T ′ ω(Tk) (see the illustration in Figure 1). This is a contradiction.
After finding T1, we can repeat the above argument to find the group T2 in which all
agents most prefer their assignments among O\ω(T1). Inductively applying the above
argument, we can find the desired order of groups T = (T1, T2, . . . , Tt). ■
Proof of Proposition 2. (1) By Proposition 0, when the strong core is nonempty, there
exists a TTS T ∗ = (T1, T2, . . . , Tt∗) such that, for every allocation μ in the strong core, every
Tk ∈ T ∗, and every i ∈ Tk, μ(i) ∈ Bi(O\ Sk−1
l=1 ω(Tl)). By Proposition 1, μ is in the exclusion
core. Thus, the exclusion core is a superset of the strong core. Theorem 1 proves that the
exclusion core is a subset of the rectified exclusion core, which is a subset of the weak
core. Thus, the exclusion core is a subset of the weak core.
(2) Theorem 1 proves that the rectified exclusion core coincides with the strong core
when the latter is nonempty. Since the exclusion core lies between the strong core and the
rectified exclusion core, it also coincides with the strong core when the latter is nonempty.
29

(3) Example 3 shows that the exclusion core is not equivalence-closed. In contrast,
both the strong core and the weak core are equivalence-closed: for any two equivalent
allocations μ and μ′, if μ is weakly (strongly) blocked by C via another σ , since σ (C) =
ω(C) and for every i ∈ C, μ′(i) ∼i μ(i), μ′ is also weakly (strongly) blocked by C via σ . ■
Proof of Proposition 3. (1) Since the rectified exclusion core is nonempty, and the recti
fied strong core is a superset of the rectified exclusion core, which is proved below, the
rectified strong core is nonempty.
All elements of the rectified strong core are Pareto efficient, because any Pareto ineffi
cient allocation is rectification blocked by the grand coalition I via a Pareto improvement.
To prove equivalence-closedness, consider any two equivalent allocations μ and μ′ in
any market. We prove that, if μ is in the rectified strong core, μ′ is also in the rectified
strong core. Suppose that μ′ is rectification blocked by a coalition C via another allocation
σ . Then, since Cσ∼μ = Cσ∼μ′ , Cσ>μ = Cσ>μ′ , and for every i ∈ C, Ii(μ(i)) = Ii(μ′(i)), μ is also
rectification blocked by C via σ , which is a contradiction.
(2) We first prove that the rectified strong core is a superset of the rectified exclusion
core. In any market, let μ be any allocation not in the rectified strong core. Suppose that
μ is rectification blocked by a coalition C via another allocation σ . We then prove that μ
is rectification exclusion blocked by C via some allocation σ ′.
Define I1 = {i ∈ I\C : μ(i) ∈ ω(C)} and I2 = {i ∈ I\C : ω(i) ∈ μ(C)}. The two sets may not
be disjoint. It is evident that |I1| = |I2|. Let σ ′ be any allocation such that, ∀i ∈ I\(I1 ∪ C),
σ ′(i) = μ(i); ∀i ∈ C, σ ′(i) = σ (i); and ∀i ∈ I1, σ ′(i) ∈ ω(I2). Then, for any j ∈ I\C such
that μ(j) ≻j σ ′(j), it must be that j ∈ I1 and μ(j) ∈ ω(C). Because Cσ′∼μ = Cσ∼μ, for every
i ∈ Cσ′∼μ, it holds that Ii(μ(i)) ⊆ ω(C). So, μ is rectification exclusion blocked by C via σ ′.
The rectified strong core is a subset of the weak core, because any strong blocking
coalition is a rectification blocking coalition.
(3) When the strong core is nonempty, by Proposition 0, there exists a TTS T ∗ =
(T1, T2, . . . , Tt∗). Let μ be any element of the rectified strong core. In the following, we
prove that, for every Tk ∈ T ∗ and every i ∈ Tk, μ(i) ∈ Bi O\ Sk−1
l=1 ω(Tl) . Then, by Proposi
tion 0, μ is in the strong core. Since the strong core is a subset of the rectified exclusion
core, which is a subset of the rectified strong core, the three cores must coincide.
We first prove that, for every i ∈ T1, μ(i) ∈ Bi(O). Suppose that this is not true. Let μ1
be a one-to-one mapping from T1 to ω(T1) such that, for every i ∈ T1, μ1(i) ∈ Bi(O). Then,
T1 can rectification block μ via an allocation μ′ in which, for every i ∈ T1, μ′(i) = μ1(i). The
key is to verify condition (3) of Definition 6. The condition is satisfied because all of the
most preferred objects for each agent in T1 are owned by T1.
30

Similarly, if it is not true that, for every i ∈ T2, μ(i) ∈ Bi(O\ω(T1)), we then let μ2
be a one-to-one mapping from T2 to ω(T2) such that, for every i ∈ T2, μ2(i) ∈ Bi(O\ω(T1)).
Then, T1 ∪T2 can rectification block μ via an allocation μ′ in which, for every i ∈ T1, μ′(i) =
μ(i), and for every i ∈ T2, μ′(i) = μ2(i). The key is to verify condition (3) of Definition 6.
The condition is satisfied because all of the most preferred objects for each agent in T1 are
owned by T1, and all of the most preferred objects for each agent in T2 among O\ω(T1)
are owned by T2.
The above argument can be inductively applied to each remaining Tk ∈ T ∗ to prove
that, for each i ∈ Tk, μ(i) ∈ Bi O\ Sk−1
l=1 ω(Tl) . ■
Proof of Proposition 4. In any market, let μ be the outcome of TTC in the priority-based
allocation model under some priority structure (▷a)a∈O. Let T = (T1, T2, . . . , Tt) denote the
order of cycles removed in the procedure of TTC, where each Tk represents the set of
agents involved in the corresponding cycle. If multiple cycles are removed in the same
step of TTC, their relative ranking can be arbitrary in the above order. Then, it is obvious
that for each Tk ∈ T , μ(Tk) = ω(Tk), and for each i ∈ Tk, μ(i) ∈ Bi O\ Sk−1
l=1 ω(Tl) . By
Proposition 1, μ is in the exclusion core.
Let μ be any allocation in the exclusion core. By Proposition 1, there exists a partition
of agents T = (T1, T2, . . . , Tt) such that, for every Tk ∈ T , μ(Tk) = ω(Tk), and for every i ∈ Tk,
μ(i) ∈ Bi O\ Sk−1
l=1 ω(Tl) . Moreover, the proof of the “only if” part of Proposition 1 shows
that each Tk ∈ T can be chosen such that the agents in Tk trade their endowments along a
cycle. Therefore, each Tk consists of agents who own copies of distinct object types. Then,
for each a ∈ O, we create a priority order ▷a such that, for any distinct i, j ∈ Ia, i ▷a j if
i ∈ Tk, j ∈ Tk′ , and k < k′. Since for every Tk ∈ T and every i ∈ Tk, μ(i) ∈ Bi O\ Sk−1
l=1 ω(Tl) ,
the outcome of TTC under the created priority structure must be μ. ■
B Proofs of Lemma 1 and Theorem 1
Proof of Lemma 1. Let μ be an outcome of GTTC. We prove that μ is in the rectified
exclusion core.
(Pareto efficiency) We first prove that μ is Pareto efficient. Let (G1, G2, . . . , GK ) be the
order of the departing groups in the procedure of GTTC that generates μ. Every member
of G1 obtains one of his most preferred objects among O. So, they cannot be made strictly
better off. All of their most preferred objects are also held by G1. After G1 departs with
their assignments, every member of G2 obtains one of his most preferred objects among
O\μ(G1). Thus, they cannot be made strictly better off without making any member of
31

G1 worse off. Applying this argument inductively to the remaining groups, we conclude
that μ is Pareto efficient.
(Unblock) Since μ is Pareto efficient, it cannot be rectification exclusion blocked by the
grand coalition I. Now, we prove that μ cannot be rectification exclusion blocked by any
coalition C ⊊ I.
Suppose that μ is rectification exclusion blocked by a coalition C via another allocation
σ . Without loss of generality, let C include all agents who are strictly better off in σ ; that
is, Cσ>μ = {i ∈ I : σ (i) ≻i μ(i)}. Among the agents in Cσ>μ, let j∗ be an agent who first
becomes satisfied in the procedure of GTTC. If there are multiple agents who become
satisfied simultaneously, let j∗ be one of them. Since σ (j∗) ≻j∗ μ(j∗), σ (j∗) must be removed
in the algorithm before j∗ becomes satisfied. Let (G1, G2, . . . , GL) be the order of groups
that depart before j∗ becomes satisfied. Then, it must be that σ (j∗) ∈ μ(G1 ∪ G2 ∪ · · · ∪ GL).
We first prove that there exists i∗ ∈ G1 ∪ G2 ∪ · · · ∪ GL such that μ(i∗) ≻i∗ σ (i∗). Since
σ (j∗) ∈ μ(G1 ∪G2 ∪· · ·∪GL) and j∗ < G1 ∪G2 ∪· · ·∪GL, there must exist i∗ ∈ G1 ∪G2 ∪· · ·∪GL
such that σ (i∗) < μ(G1 ∪ G2 ∪ · · · ∪ GL). However, since for every i ∈ G1 ∪ G2 ∪ · · · ∪ GL,
{o ∈ O : o ≿i μ(i)} ⊆ μ(G1 ∪ G2 ∪ · · · ∪ GL), it must be that μ(i∗) ≻i∗ σ (i∗).
Since μ is rectification exclusion blocked by C via σ , μ(i∗) ∈ Ω∗(C|ω, μ). Recall that
Ω∗(C|ω, μ) = ω(∪∞
k=0Ck), where C0 = C, and Ck = Ck−1 ∪ {i ∈ I\Ck−1 : Ii(μ(i)) ⊆ ω(Ck−1)}
for every k ≥ 1. Since i∗ < C, there exists l ≥ 1 such that i∗ ∈ Cl but i∗ < Cl−1. So, μ(i∗) is
the endowment of some i′ ∈ Cl−1. However, Claim 2 below implies that i∗ ∈ Cl−1, which
is a contradiction. So, μ cannot be rectification exclusion blocked by C, meaning that it is
in the rectified exclusion core.
The proof of Claim 2 relies on Claim 1.
Claim 1. In GTTC, for any k ≥ 0, and for any cycle that is generated before j∗ becomes satisfied,
if an agent in the cycle belongs to Ck, then all agents in the cycle belong to Ck.
Claim 2. In GTTC, for any k ≥ 0, if an agent i holds the endowment of some i′ ∈ Ck at some
point before j∗ becomes satisfied, then i ∈ Ck.
Proof of Claim 1. For any k ≥ 0, let (Y1, Y2, . . . , YK ) denote the order of cycles that are
generated before j∗ becomes satisfied and that involve an agent from Ck, where each Yk
represents the set of agents involved in the corresponding cycle. If several cycles are
generated in the same step, their relative ranking is arbitrary in the order. Without loss
of generality, we represent the first cycle Y1 by
i1 → i2 → i3 → · · · → ik → i1,
32

where il → il+1 means that after clearing the cycle, il obtains the object held by il+1. We
assume that i1 ∈ Ck. Let o2 be the object held by i2 in the cycle. After clearing the cycle,
i1 obtains o2. So, o2 ∼i1 μ(i1). There are two cases.
• Case 1: k = 0. It means that i1 ∈ C. Because Y1 is generated before j∗ becomes
satisfied and j∗ is the first agent among Cσ>μ who becomes satisfied, it must be that
i1 ∈ Cμ∼σ . Therefore, Ii1(μ(i1)) ⊆ ω(C). This means that the owner of o2 must belong
to C. If i2 is not the owner of o2, then the owner of o2 must be involved in a cycle
before Y1 is generated. However, this contradicts the definition of Y1. So, i2 must the
owner of o2. Then, similar to i1, it must be that i2 ∈ Cμ∼σ . Applying this argument
inductively to the other agents in the cycle, we conclude that all agents in the cycle
belong to Cμ∼σ .
• Case 2: k > 0. Since i1 ∈ Ck, Ii1(μ(i1)) ⊆ ω(Ck−1). So, the owner of o2 must belong
to Ck−1. If i2 is not the owner of o2, then the owner of o2 must be involved in a
cycle before Y1 is generated. However, because Ck−1 ⊆ Ck, the existence of such a
cycle contradicts the definition of Y1. So, i2 must be the owner of o2. It implies that
i2 ∈ Ck−1 ⊆ Ck. Applying this argument inductively to the other agents in the cycle,
we conclude that all agents in the cycle belong to Ck.
We then consider the second cycle Y2. Without loss of generality, we still represent
the cycle by
i1 → i2 → i3 → · · · → ik → i1,
and assume that i1 ∈ Ck. Let o2 be the object held by i2. After clearing the cycle, i1 obtains
o2. There are two cases.
• Case 1: k = 0. It means that i1 ∈ C. Because Y2 is generated before j∗ becomes
satisfied and j∗ is the first agent among Cσ>μ who becomes satisfied, it must be that
i1 ∈ Cμ∼σ . Therefore, Ii1(μ(i1)) ⊆ ω(C). So, the owner of o2 must belong to C. If i2
is not the owner of o2, then the owner of o2 and i2 must be involved in cycles that
are generated earlier than Y2, and after clearing these cycles, i2 obtains o2. By the
definition of Y1, the owner of o2 and i2 must be involved in Y1. In this case, we have
proved that i2 ∈ Cμ∼σ . If i2 is the owner of o2, then similar to i1, i2 ∈ Cμ∼σ . So, in any
case, we have i2 ∈ Cμ∼σ . Applying these arguments inductively to the other agents
in the cycle, we conclude that all agents in the cycle belong to Cμ∼σ .
• Case 2: k > 0. Since i1 ∈ Ck, Ii1(μ(i1)) ⊆ ω(Ck−1). So, the owner of o2 belongs to
Ck−1. If i2 is not the owner of o2, then the owner of o2 and i2 must be involved in
33

cycles that are generated earlier than Y2, and after clearing these cycles, i2 obtains
o2. Because Ck−1 ⊆ Ck, by the definition of Y1, the owner of o2 and i2 must be
involved in Y1. In this case, we have proved that i2 ∈ Ck. If i2 is the owner of o2, we
directly obtain that i2 ∈ Ck−1 ⊆ Ck. So, in any case, we have i2 ∈ Ck. Applying these
arguments inductively to the other agents in the cycle, we conclude that all agents
in the cycle belong to Ck.
Applying the arguments inductively to the remaining cycles, we prove the claim. □
Proof of Claim 2. If i = i′, obviously i ∈ Ck. If i , i′, since i holds ω(i′) at some point
before j∗ becomes satisfied, i and i′ must be respectively involved in a sequence of cycles
such that an agent i1 first obtains ω(i′) from i′ in a cycle Z1, then an agent i2 obtains ω(i′)
from i1 in a cycle Z2, and so on, until i obtains ω(i′) from an agent ik in a cycle Zk+1. By
Claim 1, since i′ ∈ Ck, all agents in Z1 belong to Ck. Thus, i1 ∈ Ck. Again, by Claim 1,
all agents in Z2 belong to Ck. Thus, i2 ∈ Ck. By applying Claim 1 inductively to all these
cycles, we conclude that all agents in these cycles belong to Ck. Thus, i ∈ Ck. □
This completes the proof of Lemma 1. ■
Proof of Theorem 1. (1) Lemma 1 implies that the rectified exclusion core is nonempty.
By Proposition 3, the rectified exclusion core is a subset of the rectified strong core, which
is Pareto efficient. So, it is Pareto efficient. Below, we prove that it is equivalence-closed.
Let μ and μ′ be two equivalent allocations in a market. Suppose that μ is in the rectified
exclusion core, yet μ′ is not. Let μ′ be rectification exclusion blocked by a coalition C via
another σ . We then prove that μ is also rectification exclusion blocked by C via σ . We
verify the following conditions.
(i) ∀i ∈ C, σ (i) ≿i μ′(i) ∼i μ(i), and ∃j ∈ C, σ (j) ≻j μ′(j) ∼j μ(j).
(ii) ∀k ∈ I\C, μ(k) ≻k σ (k) if and only if μ′(k) ≻k σ (k). Given μ′(k) ∈ Ω∗(C|ω, μ′), to
prove that μ(k) ∈ Ω∗(C|ω, μ), we prove that Ω∗(C|ω, μ) = Ω∗(C|ω, μ′).
Let Ω∗(C|ω, μ) = ω(∪∞
k=0Ck), where C0 = C, and Ck = Ck−1 ∪ {i ∈ I\Ck−1 : Ii(μ(i)) ⊆
ω(Ck−1)} for every k ≥ 1. Let Ω∗(C|ω, μ′) = ω(∪∞
k=0C ̃k), where C ̃0 = C, and C ̃k = C ̃k−1 ∪ {i ∈
I\C ̃k−1 : Ii(μ′(i)) ⊆ ω(C ̃k−1)} for every k ≥ 1. Since Ii(μ(i)) = Ii(μ′(i)) for all i ∈ I, it holds
that Ck = C ̃k for all k ≥ 0. Thus, Ω∗(C|ω, μ) = Ω∗(C|ω, μ′).
(iii) Since Cσ∼μ = Cσ∼μ′ , ∀i ∈ Cσ∼μ, Ii(μ(i)) = Ii(μ′(i)) ⊆ ω(C).
(2) By Proposition 3, the rectified exclusion core is a subset of the rectified strong core,
which is a subset of the weak core. So, the rectified exclusion core is a subset of the weak
core. Below, we prove that it is a superset of the exclusion core.
34

Consider any allocation μ that is rectification exclusion blocked by a coalition C via
another σ . If μ is not Pareto efficient, then it is evident that μ is also exclusion blocked.
If μ is Pareto efficient, there must exist j ∈ I\C such that μ(j) ≻j σ (j), and for every such
j, μ(j) ∈ Ω∗(C|ω, μ). In the following, we prove that, for every such j, μ(j) ∈ Ω(Cσ>μ|ω, μ).
This means that μ is exclusion blocked by Cσ>μ via σ .
It is evident that Ω∗(C|ω, μ) ⊆ Ω(C|ω, μ) and Ω(C|ω, μ) = Ω(Cσ∼μ|ω, μ) ∪ Ω(Cσ>μ|ω, μ).
So, for every j ∈ I\C such that μ(j) ≻j σ (j), either μ(j) ∈ Ω(Cσ∼μ|ω, μ) or μ(j) ∈ Ω(Cσ>μ|ω, μ).
In the latter case, we are done. In the former case, there must exist a chain j → j1 → j2 →
· · · → jm → i, in which every x → y means that agent x obtains agent y’s endowment in
μ, and i ∈ Cσ∼μ, yet every jk < Cσ∼μ (k = 1, . . . , m). We prove that μ(i) ∈ Ω(Cσ>μ|ω, μ). This
implies that μ(j) ∈ Ω(Cσ>μ|ω, μ)
Because i ∈ Cσ∼μ, μ(i) ∈ ω(C). Then, either μ(i) ∈ ω(Cσ>μ) or μ(i) ∈ ω(Cσ∼μ). In the
former case, we are done. In the latter case, μ(i) = ω(i1) for some i1 ∈ Cσ∼μ, and thus
μ(i1) ∈ ω(C). If μ(i1) ∈ ω(Cσ>μ), then μ(i) ∈ Ω(Cσ>μ|ω, μ), and we are done. If μ(i1) ∈
ω(Cσ∼μ), then μ(i1) = ω(i2) for some i2 ∈ Cσ∼μ, and thus μ(i2) ∈ ω(C). Continuing this
process, we will find a chain i → i1 → i2 → . . . → il in which all agents belong to C
and every agent obtains the next agent’s endowment. It is impossible that all of these
agents belong to Cσ∼μ, because otherwise they would form a cycle, which contradicts that
jm < Cσ∼μ obtains i’s endowment. Therefore, the last agent il in the chain must belong to
Cσ>μ, which means that μ(i) ∈ Ω(Cσ>μ|ω, μ).
(3) When the strong core is nonempty, by Proposition 2 and Proposition 3, the ex
clusion core and the rectified strong core both coincide with the strong core. Since the
rectified exclusion core lies between the exclusion core and the rectified strong core, it
must coincide with the strong core and with the exclusion core. ■
35

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:30.006Z
- **Text Length:** 91966 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 36 of 36
