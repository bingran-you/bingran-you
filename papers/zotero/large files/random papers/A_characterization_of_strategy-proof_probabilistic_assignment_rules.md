# PDF Document: Donthu et al. - 2025 - A characterization of strategy-proof probabilistic assignment rules.pdf

**File Path:** Donthu et al. - 2025 - A characterization of strategy-proof probabilistic assignment rules.pdf

**Processed Date:** 2026-02-10T18:13:54.502Z

**File Size:** 313.00 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3231

**Title:** A characterization of strategy-proof probabilistic assignment rules

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A CHARACTERIZATION OF STRATEGY-PROOF
PROBABILISTIC ASSIGNMENT RULES*
Sai Praneeth Donthu†, Souvik Roy‡, Soumyarup Sadhukhan§, and Gogulapati
Sreedurga¶
November, 2025
Abstract
We study the classical probabilistic assignment problem, where finitely many indivisible objects are to be probabilistically or proportionally assigned among an equal number of agents. Each agent has an initial deterministic endowment and a strict preference over the objects. While the deterministic version of this problem is well understood, most notably through the characterization of the Top Trading Cycles (TTC) rule by Ma (1994), much less is known in the probabilistic setting. Motivated by pr-
actical considerations, we introduce a weakened incentive requirement, namely SD-top-strategy-proofness, which precludes only those manipulations that increase the probability of an agent’s top-ranked object. Our first main result shows that, on any free pair at the top (FPT) domain (Sen, 2011), the TTC rule is the unique probabilistic assignment rule satisfying SD–Pareto efficiency, SD–individual rationality, and SD–top-strategy-proofness. We further show that this characterization remains valid -
when Pareto efficiency is replaced by the weaker notion of SD–pair efficiency, provided the domain satisfies the slightly stronger free triple at the top (FTT) condition (Sen, 2011). Finally, we extend these results to the ex post notions of efficiency and individual rationality. Together, our findings generalize the classical deterministic results of Ma (1994) and Ekici (2024) along three dimensions: extending them from deterministic to probabilistic settings, from full strategy-proofness to top--
strategy-proofness, and from the unrestricted domain to the more general FPT and FTT domains.
JEL Classification: C78, D71, D82
*The authors are listed in alphabetical order of their last names. An earlier version of this paper, circulated as “On Probabilistic Assignment Rules” (Gogulapati et al. (2025)), contained preliminary results on this topic. †Indian Institute of Technology Kanpur; Email: praneeth.donthu@gmail.com ‡Indian Statistical Institute, Kolkata; Email: gametheory.souvik@gmail.com §Indian Institute of Technology Kanpur; Email: soumyarups@iitk.ac.in ¶Indian Institute of Technology Hyderabad; Email: gogulapatis-
@alum.iisc.ac.in
1
arXiv:2511.04142v1 [econ.TH] 6 Nov 2025

MSC2010 Subject Classification: 91B14, 91B03, 91B68
Keywords: Probabilistic Assignment; SD-strategy-proofness; SD-Pareto efficiency; SD-pair efficiency; SD-individual rationality; TTC
1 INTRODUCTION
1.1 DESCRIPTION AND MOTIVATION OF THE PROBLEM
We consider the classical assignment problem with initial endowments in the probabilistic setting.
In an assignment problem, a finite set of objects has to be allocated among a finite set of agents
(with the same cardinality) based on their (strict) preferences over the objects. Moreover, the
agents have endowments over the objects. Practical applications of this model can be thought of
as house allocation among existing tenants, course allocation among the faculty members who
have endowments for the courses they taught last time, office space assignment, parking space
assignment, and many others.
A deterministic assignment rule (henceforth, DAR) is a function from the set of reported
preferences to the set of assignments, where an assignment is a 1-1 mapping between the set
of agents and the set of objects. Some desirable properties of deterministic rules are strategy
proofness, Pareto-efficiency, individual rationality, pair-efficiency, etc.; a deterministic rule is
strategy-proof if no agent has an incentive to misreport her preference to get a better outcome.
Pareto efficiency requires that there exists no group of agents who can reshuffle their assignments,
under the deterministic rule, in such a way that all agents in the group are weakly better off, with
at least one agent strictly better off. A weaker notion is that of pair efficiency, which imposes
the same requirement but restricts attention only to groups consisting of two agents. Finally, a
deterministic rule is individually rational if every agent is guaranteed to get a better outcome
than her initial endowment according to her preference.
Ma (1994) shows that on the unrestricted domain (when all possible orderings over the objects
are feasible), a deterministic rule satisfies strategy-proofness, Pareto-efficiency, and individual
rationality if and only if it is the TTC rule, a deterministic rule first introduced in Shapley and
Scarf (1974) in the context of the object reallocation problem. Svensson (1994), Anno (2015),
and Sethuraman (2016) provided shorter proofs of this result. Recently, Ekici (2024) shows that
the same result holds even if we replace Pareto-efficiency with a much weaker condition called
pair-efficiency.
2

In the probabilistic setup, instead of a deterministic rule, a probabilistic assignment rule
(henceforth, PAR) is considered, which assigns a bi-stochastic matrix at every instance of reported
preferences of the agents. Here, the order of a bi-stochastic matrix is the common cardinality
of the agent set and the object set, and each row of the matrix denotes the probabilities of
assigning the objects to a particular agent, whereas the columns represent the probabilities of
assigning a specific object to different agents. In the mechanism design literature, it is well-known
that probabilistic rules are better in terms of fairness consideration when compared to their
deterministic counterpart. For probabilistic rules, the corresponding desirable properties like
strategy-proofness, Pareto-efficiency, individual rationality, and pair-efficiency can be defined
using the first-order stochastic dominance.
In this paper, we investigate the structure of probabilistic rules satisfying the desired properties,
namely, efficiency (both Pareto and pair), individual rationality, and strategy-proofness, under
the assumption that the initial endowment is deterministic. The concept of pair efficiency was
introduced only recently by Ekici (2024). This notion of efficiency is considerably weaker than
the classical Pareto efficiency in the deterministic setting (see Example 1 in Ekici (2024)), and
it becomes even weaker in the probabilistic framework (see Example 1). We also consider a
weaker version of the standard SD-strategy-proofness notion, which allows for better real-life
applicability of our results. To the best of our knowledge, this is the first work that examines
these notions in a probabilistic environment. In what follows, we elaborate on the motivation for
weakening the notion of strategy-proofness and discuss the relevance of assuming deterministic
initial endowments in the probabilistic context.
While Pareto-efficiency, pair efficiency, and individual rationality have straightforward exten
sions in the probabilistic setup using first-order stochastic dominance, many extensions of the
notion of strategy-proofness are possible (see Sen (2011); Aziz (2015); Chun and Yun (2020)). The
most used one in the literature (Gibbard (1977)) assumes that an agent will manipulate if, by
misreporting, she can be better off for at least one upper contour set. No doubt, this is quite a
strong condition and may not be appropriate in a practical scenario, as in reality, agents might
not care for all upper contour sets. Keeping this point in mind, we consider a weakening of
strategy-proofness that we call as SD-top-strategy-proofness. Top-strategy-proofness assumes the
agents only care about manipulation if they can increase the probability of their top alternative.
The deterministic version of top-strategy-proofness implies agents manipulate only if, by misre
porting, they can ensure their top alternative as the outcome. Thus, top-strategy-proofness is the
3

minimal form of strategy-proofness one may think of.
Throughout this paper, we assume that the initial endowment is deterministic. This assumption
is consistent with the observation that, even when the current endowment is obtained through
a probabilistic rule in the past, the very purpose of such a rule is to generate a deterministic
realization according to the prescribed probability distribution. Consequently, the outcome after
implementation is always deterministic. It is important to emphasize, however, that this does not
diminish the relevance of probabilistic rules in ensuring fairness.
1.2 CONTRIBUTION OF THE PAPER
We have four main results in this paper. In Theorem 1, we provide a characterization of all
SD-Pareto efficient, SD-individually rational, and SD-top-strategy-proof probabilistic rules on
any free pair at the top (FPT) domain by showing that the TTC rule is the unique rule satisfying
these properties. A domain is FPT (Sen (2011)) if for any two objects a and b, there exists a
preference that places a at the best and b at the second-best ranks. FPT domains form a broad
class that includes the unrestricted domain and can be substantially smaller in size. While the
unrestricted domain requires n! preference orderings, an FPT domain may be constituted with as
few as n(n − 1) preferences. The linked domain, introduced by Aswal et al. (2003), serves as an
important example of an FPT domain. Our result generalizes Ma (1994)’s result in three directions:
first, from the deterministic setup to the probabilistic setup; second, from strategy-proofness to
top-strategy-proofness; and third, from the unrestricted domain to any FPT domain.
Next, we move to SD-pair efficiency and show that the same result continues to hold if we
weaken Pareto efficiency to pair efficiency under stochastic dominance, but strengthen the domain
slightly by requiring a free triple at the top (FTT) domain instead of the FPT domain. An FTT
domain requires that for every triplet of objects a, b, and c, there exists a preference with a as the
best, b as the second-best, and c as the third-best object in the preference. Formally, Theorem 2
shows that on any FTT domain, a probabilistic rule is SD-pair efficient, SD-individually rational,
and SD-top-strategy-proof if and only if it is the TTC rule. As in the previous paragraph, this
result generalizes Theorem 1 of Ekici (2024) in three important ways: first, it extends from
a deterministic framework to a probabilistic one; second, from SD-strategy-proofness to SD
top-strategy-proofness; and third, from the unrestricted domain to any FPT domain. Finally,
Theorem 3 and Theorem 4 consider the ex post notions of efficiency and individual rationality
4

(Abdulkadirog ̆ lu and So ̈nmez (1999)) and show that under these ex post notions, the conclusions
of Theorem 1 and Theorem 2 also hold.
1.3 RELATED LITERATURE
There have been quite a few works in the probabilistic setup of the assignment problem with initial
endowments. Athanassoglou and Sethuraman (2011) show that when initial endowments are
probabilistic (also known as fractional endowments), SD-strategy-proofness, SD-Pareto efficiency,
and SD-individual rationality are together incompatible when there are at least four agents and
objects. In a later paper, Aziz (2015) strengthens the result by weakening SD-strategy-proofness
with weak-SD-strategy-proofness. In both their proofs, they started from some specific fractional
endowments and arrived at an impossibility.1 To the best of our knowledge, there is not much
known in the probabilistic setup when the feasible set of initial endowments is restricted.
In a slightly different approach to the probabilistic assignment problem, one of the first papers is
Bogomolnaia and Moulin (2001). They introduce a new probabilistic rule called Probabilistic Serial
(PS rule) and show that it satisfies some nice properties over the Random Priority rule. They also
show an important impossibility result that there is no probabilistic rule satisfying SD-efficiency,
equal treatment of equals, and SD-strategy-proofness. Equal treatment of equals ensures that two
agents with the same preference get the same outcome. Later on, Bogomolnaia and Heo (2012)
characterize the PS rule in terms of SD-efficiency, SD-no-envy, and bounded invariance, where
SD-envy-free requires that every agent prefers their share over others. Bounded invariance is
a weaker notion of SD-strategy-proofness. Chun and Yun (2020) strengthen the impossibility
result of Bogomolnaia and Moulin (2001) by weakening SD-strategy-proofness to upper-contour
strategy-proofness, which only requires that if the upper-contour sets of some objects are the
same in two preference relations, then the sum of probabilities assigned to the objects in the two
upper-contour sets should be the same.
Yılmaz (2009) considers probabilistic assignment problems under weak preferences. Their
main contribution is a recursive solution for the weak preference domain that satisfies individual
rationality, ordinal efficiency and no justified-envy. No justified-envy views an assignment
as unfair if an agent does not prefer his consumption to another agent’s consumption, and
the assignment obtained by swapping their consumptions respects the individual rationality
1See the proofs of Theorem 3 in Athanassoglou and Sethuraman (2011) and Theorem 8 in Aziz (2015) for details.
5

requirement of the latter agent.
Another paper that considers probabilistic allocations with a deterministic initial allocation
is Abdulkadiro  ̆glu and S  ̈onmez (1999). In their setting, there are existing tenants as well as new
applicants. They introduce a deterministic rule called top trading cycles with fixed priority, which
boils down to the TTC rule if there are only existing tenants. They also consider probabilistic
allocations, which are a convex combination of these deterministic rules and show that these
convex combination rules are strategy-proof, efficient, and individually rational.
We organize the paper in the remaining sections as follows: Section 2 introduces the model
and the required definitions. Section 3 describes the TTC rule in an algorithmic way. In Section 4,
we present our two main results under stochastic dominance notions. Further, Section 5 provides
the results on ex post notions of efficiency and individual rationality. Finally, in Section 6, we
discuss some future directions of this work. We put all the missing proofs in the Appendix.
2 PRELIMINARIES
Let N = {1, . . . , n} be a finite set of agents. Except otherwise mentioned, n ≥ 2. Let X = {x1,
. . . , xn} be a finite set of objects. A reflexive, anti-symmetric, transitive, and complete binary
relation (also called a linear order) on the set X is called a preference on X. We denote by P
the set of all preferences on X, also called the unrestricted domain. For P ∈ P and x, y ∈ X,
xPy is interpreted as “x is as good as (that is, weakly preferred to) y according to P”. Since P is
complete and antisymmetric, for distinct x and y, we have either xPy or yPx, and in such cases,
xPy implies x is strictly preferred to y. For ease of writing, we sometimes write a preference P as
P ≡ xyz · · · , implying x is the top-ranked object in P, and y, z are the second and third-ranked
objects, respectively, in P. For P ∈ P and x ∈ X, the upper contour set of x at P, denoted by U(x, P),
is defined as the set of objects that are as good as x in P, i.e., U(x, P) = {y ∈ X | yPx}.2 We
let D ⊆ P denote a domain (of admissible preferences). An element PN = (P1, . . . , Pn) ∈ Dn is
referred to as an (admissible) preference profile in the domain D.
2.1 PROBABILISTIC ASSIGNMENT RULES AND THEIR PROPERTIES
A probabilistic assignment A is a bi-stochastic matrix of order n, i.e., A is an n × n matrix in
which every entry is in between 0 and 1 and every row and column sums are 1 (i.e., 0 ≤ Aij ≤ 1,
2Observe that x ∈ U(x, P) by reflexivity.
6

∑
j∈[n]
Aij = 1, and ∑
i∈[n]
Aij = 1).3 We denote by A the set of all probabilistic assignments. When
each entry of a probabilistic assignment A is either zero or one (but not a proper fraction), then
it is called a deterministic assignment. Note that a deterministic assignment is a permutation
matrix.
The rows of a probabilistic assignment correspond to the agents, and the columns correspond
to the objects. For an agent i and object x, the value Aij denotes the probability with which agent i
receives object xj. Using standard matrix notations, we write Ai• ∈ ∆(X) to denote the probability
distribution in the ith row of A.4 Likewise, A•j ∈ ∆(N) denotes the probability distribution in the
column corresponding to the object xj. Further, with a slight abuse of the above notations, for
any set S ⊆ X, let AiS denote the total probability of the elements in S in the ith row of A. That is,
AiS = ∑
j∈S
Aij. Likewise, for any S ⊆ N, we define ASj to be the total probability of the elements
in S in the jth column of A.
In this paper, we assume that there is an initial deterministic assignment of the objects to
the individuals. Let E (a permutation matrix) denote that initial assignment, also referred to as
initial endowment. For notational simplicity, we assume agent i has the object xi as her initial
assignment. This means essentially E is the identity matrix of order n. Further, with a slight
abuse of notation, sometimes, for convenience, we write the initial endowment E as a vector, i.e.,
E = (x1, . . . , xn).
A probabilistic assignment rule (henceforth, a PAR) is a function φ : Dn → A. The entry
φixj (PN) represents the probability with which agent i receives object xj at the profile PN. A PAR
φ is said to be deterministic assignment rule (henceforth, a DAR and typically denoted by f ) if
for every PN ∈ Dn, φ(PN) is a deterministic assignment.
Given a preference Pi ∈ P of the agent i, we say that the agent i weakly prefers a probability
distribution λ ∈ ∆(X) over a distribution λ′ ∈ ∆(X), if for every xj ∈ X, we have λ(U(x,
Pi)) ≥ λ′(U(x, Pi)). Likewise, agent i strictly prefers λ over λ′ if it weakly prefers λ over λ′ and
there exists some x ∈ X such that λ(U(x, Pi)) > λ′(U(x, Pi)). We write λ ⪰Pi λ′ to indicate that i
weakly prefers λ over λ′, and λ ≻Pi λ′ to indicate that i strongly prefers λ over λ′.
We now introduce the standard notion of strategy-proofness in the probabilistic setting, called
SD-strategy-proofness, which was first introduced in Gibbard (1977).
3For p ∈ N, [p] = {1, . . . , p}. 4We use the notation ∆(S) to denote the set of probability distributions on a finite set S.
7

Definition 1. (SD-Strategy-proofness) A PAR φ is SD-strategy-proof if for every PN ∈ Dn, every
agent i ∈ N, and every P′
i ∈ D,
φi•(PN ) ⪰Pi φi•(P′
i , P−i).
As mentioned in Section 1, below we formally define a weaker notion of SD-strategy-proofness
that we work with in the results.
Definition 2 (SD-top-strategy-proofness). A PAR φ is SD-top-strategy-proof if for every PN ∈ Dn,
every agent i ∈ N, and every P′
i ∈ D,
φiPi(1)(PN ) ≥ φiPi(1)(P′
i , P−i).
Both these properties can be defined similarly for the deterministic assignment rules, and we
refer to them as strategy-proofness and top-strategy-proofness throughout the rest of the paper.
3 TOP TRADING CYCLES (TTC) RULE
In this section, we formally define the well-known Top Trading Cycles (TTC) rule. The standard
formulation of the TTC rule assumes a deterministic initial endowment of objects among agents.
This setting is consistent with the framework adopted in our model, wherein initial endowments
are also deterministic.
Recall that each agent i is initially endowed with a distinct object xi. We use XS to denote the
set of endowments of all the agents in S ⊆ N. We additionally need the following terminology.
For a preference P on X and a subset Y of X, we write P|Y to refer to the restriction of P to Y, that
is, P|Y is the preference on Y such that for all x, y ∈ Y, xP|Yy if and only if xPy. For a preference
profile PN, we write PN|Y to refer to the profile in which all the preferences in PN are restricted to
Y.
We now introduce a particular type of graph. Let S ⊆ N and Pi be a preference on XS for an
agent i ∈ S. The graph G(PS) is defined as follows: the set of nodes is S and there is an edge (i, j)
if and only if Pi = xj · · · . As N is a finite set, the graph G(PN) will have at least one cycle.
We are now ready to define the TTC rule. Consider a preference profile PN. The TTC rule is a
deterministic assignment rule whose step-by-step description at this profile is as follows:
1. Round 1: Let X1 = X, N1 = N, and P1
N1 = PN. Consider the graph G1(P1
N1 ). Let C = (i1,
. . . , ik, i1) be the smallest cycle in the graph. Assign xj+1 to agent j for all j ∈ {1, . . . , k}
8

(where ik+1 = i1).
2. Round 2: Let N2 be the set of remaining agents (that is, the agents who did not belong to
any cycle in the first round). Let X2 = XN2 and P2
N2 be the reduced preference profile of the
agents in N2 to the set of objects in X2, that is, Pi2 = Pi1|X2. Now, consider the graph G2(P2
N2 )
and repeat Round 1.
This continues till all the objects are allocated to some agents. Note that this always results
in a deterministic assignment.
The following theorem is due to Ma (1994). Later on, shorter proofs are found by Svensson
(1994), Anno (2015), and Sethuraman (2016).
Theorem. On the unrestricted domain, TTC is the unique deterministic assignment rule that satisfies
Pareto-efficiency, individual rationality, and strategy-proofness.
4 RESULTS UNDER STOCHASTIC DOMINANCE NOTIONS
As mentioned in Section 1, the primary objective of this paper is to investigate the structure of
desirable probabilistic assignment rules (PARs). Broadly, there exist two principal approaches to
defining properties for PARs, namely, the stochastic dominance (SD) approach and the ex-post
approach. While the SD approach is standard in the literature on probabilistic mechanism design,
the ex-post approach, employed in Abdulkadiro  ̆glu and S  ̈onmez (1999), is based on convex
combinations of the corresponding deterministic properties. We adopt the SD framework in this
section and turn to the ex-post framework in the subsequent section.
We consider two notions of SD-efficiency, both of which extend the classical definition of
efficiency to probabilistic outcomes. The first one is SD-Pareto efficiency, where a probabilistic
outcome is considered more efficient if there exists a subset of agents who strictly prefer it, while
all remaining agents are indifferent.5 The second notion, which we refer to as SD-pair efficiency,
is a weaker criterion. An outcome is SD-pair efficient over another if exactly two agents strictly
prefer it over the other, and all other agents have the same assignment in both. Clearly, SD-pair
efficiency is a special case of SD-Pareto efficiency. Consequently, if an outcome is SD-Pareto
efficient, it is also pairwise Pareto efficient. However, the converse does not necessarily hold. It is
worth emphasizing that, while SD-Pareto efficiency is already well established in the literature, to
5This notion is also known in the literature as ordinal efficiency.
9

the best of our knowledge, the notion of SD-pair efficiency is introduced for the first time in this
paper.
4.1 RESULTS UNDER SD-PARETO EFFICIENCY
We first present a formal definition of SD-Pareto efficiency.
Definition 3. (SD-Pareto efficiency) A probabilistic assignment A is SD-Pareto dominated by
another probabilistic assignment A′ at a profile PN if
A′
i
• ⪰Pi Ai• for all i ∈ N and A′
j
• ≻Pj Aj• for some j ∈ N.
A probabilistic assignment is said to be SD-Pareto efficient if it is not SD-Pareto dominated by
some other probabilistic assignment. A PAR φ is SD-Pareto-efficient if for all PN ∈ Dn, φ(PN) is
SD-Pareto efficient at PN.
Next, we formally define the stochastic dominance version of individual rationality.
Definition 4. (SD-individual Rationality) A PAR φ is SD-individually rational if for every
PN ∈ Dn and every agent i ∈ N, we have
φi•(PN ) ⪰Pi Ei• .
Similarly to before, when we talk about SD-Pareto efficiency and SD-individual rationality
in the deterministic setting, we call them Pareto efficiency and individual rationality. To state
our main result in this section, we define a particular type of domain that was introduced in Sen
(2011).
Definition 5. A domain D is a Free Pair at the Top (FPT) domain if for all distinct x, y ∈ X there
exists P ∈ D such that P ≡ xy · · · .
Note that the unrestricted domain P is an FPT domain. From Ma (1994)’s result, we know
that, on the unrestricted domain, the TTC is the unique Pareto efficient, individually rational,
and strategy-proof DAR when the endowments are deterministic. In this section, we extend this
result to probabilistic assignments and prove that even in such a setting, on any FPT domain, TTC
continues to be the only SD-Pareto-efficient, SD-individually rational, and SD-top-strategy-proof
assignment rule starting from deterministic initial endowments.
10

Theorem 1. Let D be an FPT domain. Then, a PAR on D is SD-Pareto efficient, SD-individually rational,
and SD-top-strategy-proof if and only if it is the TTC rule.
As a corollary of Theorem 1, we get Ma (1994)’s result stated in the previous section.
4.2 RESULTS UNDER SD-PAIR EFFICIENCY
The notion of pair efficiency was introduced in Ekici (2024). We extend this in the probabilistic
setting using stochastic dominance. The notion of SD-pair-efficiency requires that no pair of
agents can be made strictly better off with respect to stochastic dominance by reallocating their
assigned outcomes among themselves, while the allocations of all other agents remain unchanged.
Below we formally define it.
Definition 6. (SD-pair-efficiency) A probabilistic assignment A is SD-pair dominated at a profile
PN by another probabilistic assignment A’ if there exist i, j ∈ N such that
(i) A′
l
• ⪰Pl Al• for all l ∈ {i, j} with A′
h
• ≻Ph Ah• for some h ∈ {i, j}, and
(ii) Ak• = A′
k
• for all k ̸= i, j.
A probabilistic assignment is said to be SD-pair efficient if it is not SD-pair dominated by any
other probabilistic assignment. A probabilistic assignment rule φ is SD-pair efficient if for all
PN ∈ Dn, φ(PN) is SD-pair efficient at PN.
REMARK 1. As we are dealing with strict preferences in this paper, the notion of SD-pair domina
tion becomes equivalent to the following. A probabilistic assignment A is SD-pair dominated at a
profile PN by another probabilistic assignment A’ if there exists (i, j) ∈ N2 such that
(i) A′
l
• ≻Pl Al• for all l ∈ {i, j}, and
(ii) Ak• = A′
k
• for all k ̸= i, j.
□
Ekici (2024) shows that pair efficiency (SD-pair efficiency in the deterministic setting) is much
weaker than Pareto efficiency by providing an example (see Example 1 in Ekici (2024)) of a
preference profile with at least seven agents that has only one Pareto efficient outcome, but more
than 2n pair efficient outcomes. We strengthen the ground even further by providing an example
11

of a preference profile with at least three agents (notice that for two agents, SD-Pareto efficiency
and SD-pair efficiency are equivalent) that has a unique SD-Pareto efficient outcome but infinitely
many SD-pair efficient outcomes.
Example 1. Assume n > 2, and for simplicity we write xn+s = xs for any s ∈ {1, . . . , n}. Consider
the following preference profile PN.
P1 P2 P3 P4 · · · Pn
x1 x2 x3 x4 · · · xn
x2 x3 x4 x5 · · · x1
... ... ... ... · · · ...
Now, for b ∈ [0, 1], consider the following probabilistic assignment Ab, where for all i ∈ N
Aibxi = b and Aibxi+1 = 1 − b.
Note that if b < 1, Ab is SD-Pareto dominated by A1. Further, A1 is the only allocation that is
SD-Pareto efficient at PN. However, each Ab is indeed SD-pair efficient at PN. To see this, assume
for contradiction that for some b ∈ [0, 1], Ab is SD-pair dominated by another assignment B. This
means there exists a pair of agents (r, s) such that Aib• = Bi• for all i ∈/ {r, s} and Bi• ≻Pi Aib• for
all i ∈ {r, s}. This, together with Remark 1 and the fact that Ab assigns probabilities only to the
top two objects of Pr and Ps, it must be that under B, the probabilities of the top object of Pr and
Ps is strictly more than that under Ab, i.e., Brxr > b and Bsxs > b. However, this implies that
the assignments of agents r − 1 and s − 1 in B must also differ from those in Ab to maintain the
bi-stochastic structure. Since Aib• = Bi• for all i ∈/ r, s and n > 2, we have a contradiction.
This shows that there are infinitely many SD-pair efficient allocations (one for each value of b)
at the profile PN. □
The following domain condition was also introduced in Sen (2011). It is stronger than the FPT
condition defined in the previous subsection.
Definition 7. A domain D is a Free Triple at the Top (FTT) domain if for all distinct x, y, z ∈ X
there exists P ∈ D such that P ≡ xyz · · · .
12

Our next result shows that on an FTT domain, a PAR satisfies SD-pair efficiency, SD-individual
rationality, and SD-strategy-proofness if and only if it is the TTC rule.
Theorem 2. Let D be a FTT domain. Then, a PAR on D is SD-pair-efficient, SD-individually rational,
and SD-top-strategy-proof if and only if it is the TTC rule.
REMARK 2. As SD-Pareto efficiency is stronger than SD-pair efficiency, one might think that
Theorem 1 is a corollary of Theorem 2. But this is not true, as Theorem 1 holds for FPT domains,
whereas Theorem 2 requires an FTT domain, a stronger domain condition.
Ekici (2024) shows that, on the full preference domain P, the TTC rule is the unique deter
ministic rule that satisfies pairwise efficiency, individual rationality, and strategy-proofness. We
obtain this result as a corollary of Theorem 2.
5 RESULTS UNDER EX-POST NOTIONS
It is well-known that every bi-stochastic matrix can be written as a convex combination of
permutation matrices (Birkhoff (1946); Von Neumann (1950); Budish et al. (2013)). In view of this,
there is another way of defining Pareto-efficiency and Individual rationality in the probabilistic
setting as introduced in Abdulkadiro  ̆glu and S  ̈onmez (1999).
5.1 RESULTS UNDER EX-POST PARETO EFFICIENCY
We first define ex post Pareto efficiency and ex post individual rationality formally.
Definition 8. (Ex post Pareto efficiency) A probabilistic assignment A is Ex post Pareto efficient
at a profile PN if it can be written as a convex combination of deterministic Pareto efficient
assignments at PN.
A PAR φ : Dn → A is ex post Pareto efficient if for all PN ∈ Dn, φ(PN) is ex post Pareto efficient.
Definition 9. (Ex post individual rationality) A PAR φ : Dn → A is ex post individually rational (ex
post IR) if for all PN ∈ Dn, φ(PN) is a convex combination of deterministic individually rational
assignments in PN.
It is quite straightforward to see that SD-individual rationality is equivalent to ex post individ
ual rationality when the initial endowment is deterministic.6 However, SD-Pareto efficiency and
6We provide a proof of this statement in Appendix C for completeness.
13

P1 P2 P3 P4
caac acbd bdca dbdb
Table 1: Table 1
ex post Pareto efficiency are not equivalent, in general.7 It is known that an ex post Pareto efficient
probabilistic assignment may fail to be SD-Pareto efficiency when n ≥ 4, but every SD-Pareto
probabilistic efficient assignment is ex post Pareto efficient.8 Below, we present an example in
which a probabilistic outcome at a given preference profile is ex post efficient Pareto efficient, i.e,
can be expressed as a convex combination of deterministic Pareto outcomes at the same profile.
However, the probabilistic outcome is SD-Pareto dominated by another outcome at that profile,
and hence, it is not SD-Pareto efficient.9
Example 2. Suppose there are four agents, say {1, 2, 3, 4}, and four alternatives, say {a, b, c, d}.
Consider the preference profile (P1, P2, P3, P4) shown in Table 1. Now, consider the probabilistic
assignment A given in the following table, where the rows represent the agents and the columns
represent the objects, and the cells have the assignment probabilities.
A=
abcd

     

     
11
2
1
200
200 1
2
1 2
31
2
1
200
400 1
2
1 2
First, observe that A is SD-Pareto dominated by B (given in Table 2), where the changes are
marked in red. Thus, A is not SD-Pareto efficient.
7Cho and Do  ̆gan (2016) provide a condition on a preference profile that is necessary and sufficient for the two notions to be equivalent. 8This is proved in Bogomolnaia and Moulin (2001), Lemma 2-(ii). 9Similar examples can be found in Bogomolnaia and Moulin (2001) and Abdulkadirog ̆ lu and So ̈ nmez (2003) (see Example 2).
14

B=
abcd

     

     
10 1
2
1
20
21
2 00 1
2
31
2
1
200
400 1
2
1 2
However, in the following, we show that A is ex post Pareto efficient by showing that A can be
decomposed into two deterministic assignments where both are Pareto-efficient at (P1, P2, P3, P4).
Consider the two deterministic assignments, C and D, given in Table 2.
C=
abcd

     

     
11000
20001
30100
40010
D=
abcd

     

     
10100
20010
31000
40001
It can be seen that both C and D are Pareto-efficient at (P1, P2, P3, P4) as C is the outcome of the
TTC rule at (P1, P2, P3, P4) with the initial endowment (a, d, b, c) and D is the outcome of the TTC
rule at (P1, P2, P3, P4) with the initial endowment (b, c, a, d).10 Thus, A is ex post Pareto efficient.
□
Nevertheless, Theorem 3 shows that even under ex post Pareto efficiency and ex post individual
rationality, the conclusion of Theorem 1 still holds.
Theorem 3. Let D be an FPT domain. Then, a PAR on D is ex post Pareto efficient, ex post IR, and
SD-top-strategy-proof if and only if it is the TTC rule.
REMARK 3. As every SD-Pareto efficient assignment is also ex post Pareto efficient (Lemma 2-(ii)
in Bogomolnaia and Moulin (2001)), we may see Theorem 1 as a corollary of Theorem 3.
5.2 RESULTS UNDER EX-POST PAIR EFFICIENCY
In the spirit of ex post Pareto efficiency, we may similarly define ex post pair-efficiency. Below,
we formally define it.
10Recall that the initial endowment (a, d, b, c) means agent 1 is endowed with a, agent 2 is endowed with d, and so on.
15

Definition 10. (Ex post pair-efficiency) A probabilistic assignment A is Ex post pair-efficient at a
profile PN if it can be written as a convex combination of deterministic pair-efficient assignments
at PN.
A PAR φ : Dn → A is ex post pair-efficient if for all PN ∈ Dn, φ(PN) is ex post pair-efficient.
It can be observed that the probabilistic outcome in Example 2 is actually ex post pair-efficient
but not SD-pair efficient, as it can be improved for the agent pair (1, 2) without changing the
assignments of the others. Therefore, an ex post pair efficient allocation may fail to satisfy SD-pair
efficiency. However, similar to SD-Pareto efficiency, it can be shown that every SD-pair efficient
allocation is ex post pair efficient. We omit the proof as it uses the same idea as in Lemma 2-(ii) in
Bogomolnaia and Moulin (2001). Nevertheless, like before, if we replace SD-pair efficiency by ex
post pair efficiency, and SD-individual rationality by ex post individual rationality, the conclusion
of Theorem 2 continues to hold.
Theorem 4. Let D be an FTT domain. Then, a PAR on D is ex post pair efficient, ex post IR, and
SD-top-strategy-proof if and only if it is the TTC rule.
REMARK 4. In the same spirit of Remark 3, we may see Theorem 2 as a corollary of Theorem 4.
6 FUTURE DIRECTIONS
Throughout the paper, we have considered deterministic endowments. A natural question
arises: what happens when the initial endowment is probabilistic? It is shown in the proof of
Theorem 3 of Athanassoglou and Sethuraman (2011) that when there are four agents and the
initial endowment is uniform (that is, each element of the endowment, viewed as an assignment
represented by a bi-stochastic matrix, is equal to 1
4 ), there exists no probabilistic rule satisfying SD
Pareto efficiency, SD-individual rationality, and SD-strategy-proofness. This raises the question of
whether this impossibility extends to arbitrary strictly probabilistic endowments. If not, what
are the necessary and sufficient structures of the initial probabilistic endowments that allow for
such a rule, or whether relaxing Pareto efficiency to the weaker notion of pair efficiency leads to a
possibility? We leave these questions for future research.
16

REFERENCES
[1] Atila Abdulkadirog ̆ lu and Tayfun So ̈nmez. House allocation with existing tenants. Journal of
Economic Theory, 88(2):233–260, 1999.
[2] Atila Abdulkadirog ̆ lu and Tayfun So ̈ nmez. Ordinal efficiency and dominated sets of assign
ments. Journal of Economic Theory, 112(1):157–172, 2003.
[3] Hidekazu Anno. A short proof for the characterization of the core in housing markets.
Economics Letters, 126:66–67, 2015.
[4] Navin Aswal, Shurojit Chatterji, and Arunava Sen. Dictatorial domains. Economic Theory, 22
(1):45–62, 2003.
[5] Stergios Athanassoglou and Jay Sethuraman. House allocation with fractional endowments.
International Journal of Game Theory, 40:481–513, 2011.
[6] Haris Aziz. Generalizing top trading cycles for housing markets with fractional endowments.
arXiv preprint arXiv:1509.03915, 2015.
[7] Garrett Birkhoff. Three observations on linear algebra. Univ. Nac. Tacuman, Rev. Ser. A, 5:
147–151, 1946.
[8] Anna Bogomolnaia and Eun Jeong Heo. Probabilistic assignment of objects: Characterizing
the serial rule. Journal of Economic Theory, 147(5):2072–2082, 2012.
[9] Anna Bogomolnaia and Herve ́ Moulin. A new solution to the random assignment problem.
Journal of Economic theory, 100(2):295–328, 2001.
[10] Eric Budish, Yeon-Koo Che, Fuhito Kojima, and Paul Milgrom. Designing random allocation
mechanisms: Theory and applications. American economic review, 103(2):585–623, 2013.
[11] Wonki Jo Cho and Battal Do  ̆gan. Equivalence of efficiency notions for ordinal assignment
problems. Economics Letters, 146:8–12, 2016.
[12] Youngsub Chun and Kiyong Yun. Upper-contour strategy-proofness in the probabilistic
assignment problem. Social Choice and Welfare, 54:667–687, 2020.
[13]  ̈Ozg  ̈un Ekici. Pair-efficient reallocation of indivisible objects. Theoretical Economics, 19(2):
551–564, 2024.
[14] Allan Gibbard. Manipulation of schemes that mix voting with chance. Econometrica: Journal
of the Econometric Society, pages 665–681, 1977.
[15] Sreedurga Gogulapati, Yadati Narahari, Souvik Roy, and Soumyarup Sadhukhan. On
probabilistic assignment rules, 2025. URL https://arxiv.org/abs/2507.09550.
17

[16] Jinpeng Ma. Strategy-proofness and the strict core in a market with indivisibilities. Interna
tional Journal of Game Theory, 23(1):75–83, 1994.
[17] Arunava Sen. The gibbard random dictatorship theorem: a generalization and a new proof.
SERIEs, 2(4):515–527, 2011.
[18] Jay Sethuraman. An alternative proof of a characterization of the ttc mechanism. Operations
Research Letters, 44(1):107–108, 2016.
[19] Lloyd Shapley and Herbert Scarf. On cores and indivisibility. Journal of mathematical economics,
1(1):23–37, 1974.
[20] Lars-Gunnar Svensson. Queue allocation of indivisible goods. Social Choice and Welfare, 11
(4):323–330, 1994.
[21] John Von Neumann. A certain zero-sum two-person game equivalent to the optimal assign
ment problem1. Contributions to the Theory of Games, (24):5, 1950.
[22]  ̈Ozg  ̈ur Yılmaz. Random assignment under weak preferences. Games and Economic Behavior,
66(1):546–558, 2009.
A PROOF OF THEOREM 1
Proof. The if part of the result follows from (16) as the TTC rule satisfies the three properties in the
deterministic setup. We proceed to show the only-if part by induction on n. As the base case, first
assume that n = 2. If the top-ranked objects of each of the two agents are different, both of them
get their top-ranked objects, and the outcome is that of the TTC rule. If the top-ranked objects of
both the agents are the same, i.e., x1, by SD-individual rationality, agent 1 is assigned the whole
of x1 and hence agent 2 is assigned the whole of x2. This again is the outcome of the TTC rule.
Induction Hypothesis (IH): When there are at most n − 1 agents and objects, any assignment rule
φ satisfying SD-Pareto-efficiency, SD-individual rationality, and SD-top-strategy-proofness is the
TTC rule.
We use IH to prove that the same statement holds for n agents and objects. Let PN be the
preference profile of the agents and construct G(PN) such that an edge (i, j) is present if and only
if Pi(1) = xj. WLG let C = (1, . . . , k, 1) be a cycle in G(PN) (we use k + 1 to denote 1 and 0 to
denote k). First assume that C is a singleton cycle, i.e., k = 1 and hence, P1(1) = x1. Consequently,
by IR, φ1x1(PN) = 1. Now, there are n − 1 remaining agents and objects, and these remaining
18

objects are the initial endowments of these agents. Therefore, by IH, the objects will be allocated
according to the TTC rule, implying φ(PN) is the TTC outcome and completing the proof.
Now assume that C is a non-singleton cycle, i.e., k ≥ 2. Consider a new profile P′
N by modifying
the preferences of agents as follows:
P′
i≡

 
 
xi+1xi · · · , if i ∈ C
Pi, otherwise.
Two observations to be noted here. First, the preference profile P′
N is feasible as D is an FPT
domain, second, as G(PN) = G(P′
N), hence C remains a non-singleton cycle at G(P′
N) as well. We
first prove the following claim, which states that at P′
N, all the objects owned by the agents in C
must be assigned only to the agents in C with probability 1.
Claim 1. For all j ∈ {1, . . . , k}, we have,
φj−1xj (P′
N) + φjxj(P′
N) = 1.
Proof. As φ is SD-individually rational, for every i ∈ C we have, φi{xi+1,xi}(P′
N) = 1. This, together
with |C| = k, yields
∑
i∈C
(φixi+1 (P′
N) + φixi (P′
N)) = k (1)
Further, as C is a cycle, (1) can be rewritten as
∑
{xj| j∈C}
(φj−1xj (P′
N) + φjxj(P′
N)) = k. (2)
Since φ•xj (P′
N) is a probability distribution, each term on the left side of (2) must be at most 1.
That is, for any xj such that ij ∈ C, we have φj−1xj (P′
N) + φjxj(P′
N) ≤ 1. This, when combined
with (2) and the fact that |C| = k, gives
φj−1xj (P′
N) + φjxj(P′
N) = 1.
Hence, the claim follows. ■
19

We now use SD-Pareto efficiency of φ. From Claim (1), endowments of all the agents in C
are assigned to the agents in C with probability 1. We claim that φ(P′
N) assigns xi+1 to each
agent i ∈ C. To see this, consider any other assignment A satisfying Claim 1. Clearly, A is
Pareto-dominated by an assignment A′ where
A′
i
•=

 
 
xi+1, if i ∈ C
Ai•, otherwise.
Thus, by the SD-Pareto efficiency of φ, φ(P′
N) assigns Pi(1) to each agent i ∈ C. Also, this is the
TTC outcome of the agents in C. Formally, we have the following claim.
Claim 2. φ(P′
N) is the TTC assignment for all the agents in the cycle C.
We now proceed to show that the same as in Claim 2 holds for the profile PN as well. We
sequentially change the preferences of the agents in C from P′
i to Pi for i ∈ {1, . . . , k}. First,
consider the case when only the preference of agent 1 is changed to P1, i.e., the underlying profile
is P1N where P11 = P1 and Pi1 = P′
i for all i ∈ {2, . . . , k}. As φ1x1 (P′
N) = 1, by SD-top-strategy
proofness, we have φ1x1(P1N) = 1. Now for agent 2, as P′
2 ≡ x3x2 · · · , by SD-individual rationality,
φ2{x3,x2}(P1N) = 1. This, together with φ1x1 (P1N) = 1, implies φ2x3 (P1N) = 1. We can continue
this way and show that φixi+1(P1N) = 1 for all i ∈ {3, . . . , k}. Thus, the outcome at P1N is the TTC
outcome for the agents in C.
We now use an induction on the number of agents whose preferences are changed to the
preferences in PN. The base case is already shown in the previous paragraph. Suppose the
outcome is the TTC outcome for the agents in C after changing the preferences of agents 1, . . . , l,
i.e., for the profile PlN where
Pil =

 
 
P′
i , if i ∈ {l + 1, . . . , k}
Pi, otherwise.
We show that the same holds for Pl+1
N . By SD-top-strategy-proofness, φl+1xl+2 (Pl+1
N ) = 1. For
agent l + 2, as P′
l+2 ≡ xl+3xl+2 · · · , by SD-individual rationality, φl+2{xl+3,xl+2}(Pl+1
N ) = 1. As
φl+1xl+2 (Pl+1
N ) = 1, this means φl+2xl+3 (Pl+2
N ) = 1. Continuing in this way we have φixi+1 (Pl+1
N )=
1 for all i ∈ {l + 3, . . . , k}. We are now left with showing that φixi+1(Pl+1
N ) = 1 for all i ∈ {1,
20

. . . , l}. We show it for agent 1, and the similar arguments hold for other agents too. Consider
the preference P ̄1 ≡ x2x1 · · · . Note that in the proof so far, we have not used any restriction on
P1 other than the top-ranked alternative of P1 is x2. Thus, the same arguments can be carried
out to show that at (P ̄1, Pl+1
−1 ), φixi+1 (P ̄1, Pl+1
−1 ) = 1 for all i ∈ {l + 1, . . . , k}. This, in particular,
φkx1 (P ̄1, Pl+1
−1 ) = 1, together with SD-individual rationality for agent 1, yields φ1x2(P ̄1, Pl+1
−1 ) = 1.
Now, by SD-top-strategy-proofness, φ1x2(Pl+1
N ) = 1. This completes the induction step, and
hence, it is proved that the outcome at PN coincides with the TTC outcome. The remaining proof
follows by IH as there are fewer than n − 1 agents and objects; these remaining objects are the
initial endowments of these agents. ■
B PROOF OF THEOREM 2
Proof. From (13)’s result, it follows that the TTC rule is SD-pair-efficient, SD-individually rational
and SD-top-strategy-proof. Now we prove the only-if direction using induction on n. First,
assume that n = 2. As for n = 2, SD-Pareto efficiency and SD-pair efficiency are identical; it
follows from Theorem 1 that any PAR satisfying SD-pair efficiency, SD-individual rationality,
and SD-top-strategy-proofness must be the TTC rule. We now consider the following Induction
Hypothesis.
Induction Hypothesis (IH): When there are at most n − 1 agents and objects, every PAR φ satisfying
SD-pair-efficiency, SD-individual rationality, and SD-top-strategy-proofness is the TTC rule.
We use IH to prove that the same statement holds for n agents and objects. We start with a
lemma that will be used quite a few times in the proof. Recall that our assumption the initial
endowment for agent i is xi for all i ∈ {1, . . . , n}. Consider k such that 1 ≤ k ≤ n, and consider
the following preferences of the agents 1, . . . , k.
P ̄i ≡

     
     
x2x1 · · · , if i = 1
xi+1x1xi · · · , if i ∈ {2, . . . , k − 1}
x1xk · · · , if i = k.
(3)
Note that such preferences are feasible as D is an FTT domain. Let l ∈ {1, . . . , k} and we
denote the set of agents {l, . . . , k} by L. Further, let P ̄L = (P ̄l, . . . , P ̄k). We now formally state the
lemma. In the statement and in the proof of the lemma, for notational convenience, we sometimes
21

use k + 1 to denote 1 and 0 to denote k.
Lemma 1. For all P−L ∈ Dn−k+l−1, the following implication holds
either l = 1 or φlxl (P ̄L, P−L) = 0 =⇒ φixi+1 (P ̄L, P−L) = 1 for all i ∈ L .
Proof. Fix P−L ∈ Dn−k+l−1. We complete the proof in two steps. In the first step, we prove the
following claim.
Claim 3. The following two statements hold
(i) ∑
i∈{l,...,k}
φix1 (P ̄L, P−L) = 1, and
(ii) for all j ∈ {l + 1, . . . , k}, φj−1xj (P ̄L, P−L) + φjxj (P ̄L, P−L) = 1.
Proof of the claim: As φ is SD-individually rational, we have the following
(a) φk{x1,xk}(P ̄L, P−L) = 1, and
(b) for every i ∈ {l + 1, . . . , k − 1}, φi{xi+1,x1,xi}(P ̄L, P−L) = 1.
Further, as either l = 1 or φlxl (P ̄L, P−L) = 0, by SD-individual rationality of φ for l, we have
φl{xl+1,x1}(P ̄L, P−L) = 1. Thus, we have
φl{xl+1,x1}(P ̄L, P−L) + φk{x1,xk}(P ̄L, P−L) + ∑
i∈{2,...,k−1}
φi{xi+1,x1,xi}(P ̄L, P−L) = k − l + 1. (4)
Rearranging the terms in (5), we may write
∑
i∈{l,...,k}
φix1 (P ̄L, P−L) + ∑
j∈{l+1,...,k}
φj−1xj (P ̄L, P−L) + φjxj (P ̄L, P−L) = k − l + 1.
Since φ•xi (P′
N) is a probability distribution for all i ∈ {l + 1, . . . , k} ∪ {1}, we have
∑
i∈{l,...,k}
φix1 (P ̄L, P−L)
| {z }
≤1
+∑
j∈{l+1,...,k}
φj−1xj (P ̄L, P−L) + φjxj (P ̄L, P−L)
| {z }
≤1
| {z }
≤k−l−2
= k − l − 1.
22

Hence, we have
∑
i∈{l,...,k}
φix1 (P ̄L, P−L) = 1, and φj−1xj (P ̄L, P−L) + φjxj (P ̄L, P−L) = 1 for all j ∈ {l + 1, . . . , k}.
This completes the proof of the claim. □
We now proceed to complete the proof of the lemma. In order to do so, we prove another
claim.
Claim 4. φkx1 (P ̄L, P−L) = 1.
Proof of the claim: Note that if l = k then by Claim 3-(i), there is nothing to prove. So assume
that l ≤ k − 1 and assume for contradiction that φkx1(P ̄L, P−L) < 1, which in view of Claim 3
implies that for some i ∈ {l, . . . , k − 1}, φix1(P ̄L, P−L) > 0. We contradict this by constructing
a probabilistic assignment A (a bi-stochastic matrix) that SD-pair-dominates φ(P ̄L, P−L) for the
agents (i, i + 1). Construct A as follows:
(i) Aixi+1 = φixi+1 (P ̄L, P−L) + φix1 (P ̄L, P−L), Aix1 = 0, and Aixi = φixi (P ̄L, P−L),
(ii) Ai+1xi+2 = φi+1xi+2 (P ̄L, P−L), Ai+1x1 = φi+1x1 (P ̄L, P−L) + φix1 (P ̄L, P−L), and Ai+1xi+1 =
φi+1xi+1 (P ̄L, P−L) − φix1 (P ̄L, P−L), and
(iii) all the rows of A, except rows i and i + 1, are the same as φ(P′
N), i.e., Ar• = φr•(P ̄L, P−L) for
all r ∈ N \ {i, i + 1}.
We first verify that A is a valid bi-stochastic matrix, implying (i) Arxs ≥ 0 for all r, s ∈ {1, . . . , n}
and (ii) r∑
Arxs = ∑s
Arxs = 1 for all r, s ∈ {1, . . . , n}. Now, (ii) follows as r∑
Arxs = r∑
φrxs (P ̄L,
P−L) and ∑s
Arxs = r∑
φrxs (P ̄L, P−L) for all r, s ∈ {1, . . . , n}. To see (i), we only need to show
Ai+1xi+1 ≥ 0 as all the other terms are either the same as that of φ(P ̄L, P−L) or sum of two elements
of φ(P ̄L, P−L). Note that
Ai+1xi+1 = φi+1xi+1 (P ̄L, P−L) − φix1 (P ̄L, P−L)
≥ φi+1xi+1 (P ̄L, P−L) − φix1 (P ̄L, P−L) − φixi (P ̄L, P−L)
= φi+1xi+1 (P ̄L, P−L) − (1 − φixi+1 (P ̄L, P−L))
= 0.
23

Furthermore, as φix1 (P ̄L, P−L) > 0, we have Aixi+1 > φixi+1 (P ̄L, P−L), implying A ̸= φ(P ̄L, P−L).
Observe that as P ̄i ≡ xi+1x1xi · · · and P ̄i+1 ≡ xi+2x1xi+1 · · · , A SD-pair-dominates φ(P ̄L, P−L)
for agents pair (i, i + 1), a contradiction. Therefore, φkx1(P ̄L, P−L) = 1, and the proof of Claim 4 is
complete. □
What remains to complete the proof of Lemma 1 is to show that φjxj+1(P ̄L, P−L) = 1 for all
l ≤ j ≤ k − 1. Again, if l = k, there is nothing to prove. So, we assume l ≤ k − 1. Note
that by SD-individual rationality of φ for agent l, we have φ1{x2,x1}(P ̄L, P−L) = 1 if l = 1 and
φl{xl+1,x1,xl}(P ̄L, P−L) = 1 if l > 1. This, together with Claim 4 and the assumption that either l = 1
or φlxl (P ̄L, P−L) = 0, implies φlxl+1 (P ̄L, P−L) = 1. If l + 1 = k − 1, there is nothing to prove further.
If l + 1 < k − 1, then by SD-individual rationality of φ for l + 1, we have φl+1{xl+2,x1,xl+1}(P ̄L,
P−L) = 1. As we have already shown φlxl+1 (P ̄L, P−L) = 1 and by Claim 4, φl+1x1 (P ̄L, P−L) = 0, it
follows that φl+1xl+2 (P ̄L, P−L) = 1. Continuing in this way, we can show that φjxj+1 (P ̄L, P−L) = 1
for all j ∈ {l, . . . , k − 1}. This completes the proof of the lemma. ■
We are now ready to prove the theorem. Let PN ∈ Dn be a preference profile of the agents,
and we construct G(PN) as follows: an edge (i, j) is present if and only if Pi(1) = xj. WLG let
C = (1, . . . , p, 1) be a cycle in G(PN) (we use p + 1 to denote 1 and 0 to denote k), i.e, Pi(1) = xi+1
for all i ∈ {1, . . . , p}. First assume that C is a singleton cycle, i.e., p = 1 and hence, P1(1) = x1.
Consequently, by IR, φ1x1(PN) = 1. Now, there are n − 1 remaining agents and objects, and these
remaining objects are the initial endowments of these agents. Therefore, by IH, the objects will
be allocated according to the TTC rule, implying φ(PN) is the TTC outcome and completing the
proof.
Now assume that C is a non-singleton cycle, i.e., k ≥ 2. Consider the preference profile P ̃N:
P ̃i ≡

 
 
P ̄i, if i ∈ {1, . . . , p}
Pi, otherwise,
where P ̄i is defined in (5) with k = p. In view of Lemma 1 with l = 1 and k = p, we can claim
that φixi+1(P ̄L, P−L) = 1 for all i ∈ {1, . . . , k}. Thus, the outcome of φ at P ̃N for the agents in the
cycle C is the TTC outcome. We claim that for the rest of the agents, also, the outcome is the TTC
outcome. This follows from IH as there are fewer than n − 1 agents and objects remaining, with
these remaining objects being the initial endowments of these remaining agents.
24

We now proceed to show that the outcome at PN is also the TTC outcome. Here we invoke
SD-top-strategy-proofness. We sequentially change the preferences of the agents in C from P ̃i to
Pi for i ∈ {1, . . . , k}. First, consider the case when only the preference of agent 1 is changed to P1,
i.e., the underlying profile is P1N
Pi1 ≡

 
 
P ̃i, if i ∈ {2, . . . , p}
Pi, otherwise,
We show that φ(P1N) = φ(P ̃N). As φ1x2(P ̃N) = 1 and P ̃1(1) = P11(1) = x2, by SD-top-strategy
proofness, we have φ1x2(P1N) = 1. For other agents in C, we use Lemma 1 with l = 2 and
k = p. The condition that φ2x2(P1N) = 0 follows as we have φ1x2(P1N) = 1. Thus, by Lemma 1,
φixi+1(P ̃N) = 1 for all i ∈ {1, . . . , p}; the outcome at P1N is the TTC outcome for the agents in C.
Again, we can use IH and show that the conclusion holds for all the agents implying φ(P1N) is the
TTC outcome.
We now use another induction on the number of agents whose preferences are changed to
the preferences in PN. The base case is already shown in the previous paragraph. Suppose the
outcome is the TTC outcome for the agents in C after changing the preferences of agents 1, . . . , t,
i.e., for the profile PtN where
Pit =

 
 
P ̃i, if i ∈ {t + 1, . . . , k}
Pi, otherwise.
We show that the same holds for Pt+1
N . As P ̃t+1(1) = Pt+1(1) = xt+2 and φt+1xt+2 (PtN) = 1, by
SD-top-strategy-proofness, φt+1xt+2 (Pt+1
N ) = 1. For agents in {t + 2, . . . , p}, we can use Lemma 1
with l = t + 2 and k = p where the condition φt+2xt+2 (Pt+1
N ) = 0 follows as φt+1xt+2 (Pt+1
N ) = 1.
Thus, we have φixi+1 (Pt+1
N ) = 1 for all i ∈ {t + 2, . . . , k}.
We are now left with showing that φixi+1 (Pt+1
N ) = 1 for all i ∈ {1, . . . , t}. We show this for i = 1,
and the same arguments hold for other agents as well. Note that in the proof so far, we have
not used any restriction on P1 other than P1(1) = x2, implying the conclusions in the previous
paragraph hold for a particular choice of P1, say Pˆ1 ≡ x2xt+2 · · · . Therefore, we have φt+1xt+2 (Pˆ1,
Pt+1
−1 ) = 1. Further, by SD-individual rationality of φ for agent 1, φ1{x2,xt+2}(Pˆ1, Pt+1
−1 ) = 1. These
two observations together imply φ1x2 (Pˆ1, Pt+1
−1 ) = 1. Now using SD-top-strategy-proofness for
25

agent 1, we may conclude that φ1x2 (Pt+1
N ) = 1. This shows that φixi+1 (Pt+1
N ) = 1 for all i ∈ {1, . . . ,
t}. Now the rest of the proof follows using the IH as the number of agents outside the cycle C is
strictly less than n − 1. ■
C EQUIVALENCE OF SD-INDIVIDUAL RATIONALITY AND EX POST INDIVIDUAL
RATIONALITY
Lemma 2. A PAR φ : Dn → A is SD-individually rational if and only if it is ex post individually rational
when the initial endowment is deterministic.
Proof. (If part:) Recall that E is the deterministic initial endowment, and let φ be a PAR satisfying
ex post individual rationality. Consider a profile PN ∈ Dn. As φ satisfies ex post individual
rationality, this means φ(PN) can be written as a convex combination of deterministic assignments
φ(PN) =
k
t= ∑1
αt f t(PN) with αt ≥ 0 for all t ≤ k and
k
t= ∑1
αt = 1 such that f t(PN) is individually
rational at PN for all t ∈ {1, . . . , k}. This means for any i ∈ N, fit(PN)Rixi for all t ∈ N implying
φi(PN) ⪰Pi xi. Hence, φ is SD-individually rational.
(Only-if part:) Now suppose φ is SD-individually rational where the initial endowment is
deterministic. Consider a profile PN ∈ Dn. By SD-individual rationality φi(PN) ⪰Pi xi for all
i ∈ N. Moreover, as φ(PN) can be written as a convex combination of deterministic assignments
(permutation matrices), say φ(PN) =
k
t= ∑1
αtQt, with αt ≥ 0 for all t ≤ k and
k
t= ∑1
αt = 1, it must be
that Qit· ⪰Pi xi for all t ∈ {1, . . . , k}. Thus, φ is ex-post individually rational. ■
D PROOF OF THEOREM 3
Proof. We go along the lines of the proof of Theorem 1. As SD-individual rationality is equivalent
to ex post individual rationality, we only need to check Claim 2 in the proof of Theorem 1, as
that is the only place where SD-Pareto efficiency is used. Recall that by Claim 1 in the proof of
Theorem 1, for all j ∈ {1, . . . , k}, we have,
φj−1xj (P′
N) + φjxj(P′
N) = 1. (5)
Now we use ex post Pareto efficiency to show that Claim 2 holds, that is, for all agents in
C, φ(P′
N) is the TTC assignment, i.e., for all j ∈ {1, . . . , k}, φj−1xj (P′
N) = 1. In view of (5), we
26

must consider deterministic assignments that assign the endowments of all agents in C to the
agents in C only. Moreover, since all agents in C have different top-ranked alternatives, and these
alternatives are the endowments of agents in C, the only Pareto efficient deterministic assignment
is when agents in C are assigned their top-ranked alternatives. By ex post Pareto efficiency, the
probabilistic outcome is a convex combination of deterministic Pareto efficient outcomes, thus we
must have φj−1xj (P′
N) = 1 for all j ∈ {1, . . . , k}, completing the proof of Claim 2 in the proof of
Theorem 1. This completes the proof of Theorem 3. ■
E PROOF OF THEOREM 4
Proof. Again, we proceed in the lines of the proof of Theorem 1. As SD-individual rationality
is equivalent to ex post individual rationality (Lemma 2), we only need to check Claim 4 in the
proof of Theorem 2, as that is the only place where SD-pair efficiency is used. We restate Claim 4
here.
Claim. φkx1 (P ̄L, P−L) = 1.
Proof of the claim Assume for contradiction that this does not hold, and therefore, by Claim
3-(i), there exists i ∈ {l, . . . , k − 1} such that φix1(P ̄L, P−L) > 0. This means that if we write φ(P ̄L,
P−L) as a convex combination of deterministic assignments, then there must be a deterministic
assignment, say F, such that Fix1 = 1. Further, as φ(P ̄L, P−L) satisfies the condition in Claim 3-(ii),
so does F, implying Fi+1xi+1 = 1. We show a contradiction by arguing that F is not pair efficient
at (P ̄L, P−L). To see this, note that in F, agent i is assigned x1 and agent i + 1 is assigned xi+1.
However, if they swap their assignments, they both will be better off as agent i has xi+1 as her
top-ranked object and agent i + 1 prefers x1 over xi+1. This completes the proof of the claim, and
hence, completes the proof of Theorem 4. ■
27

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:54.502Z
- **Text Length:** 58145 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
