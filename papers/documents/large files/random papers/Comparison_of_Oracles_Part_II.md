# PDF Document: Lagziel et al. - 2025 - Comparison of Oracles Part II.pdf

**File Path:** Lagziel et al. - 2025 - Comparison of Oracles Part II.pdf

**Processed Date:** 2026-02-10T18:14:34.401Z

**File Size:** 617.47 KB

**Total Pages:** 53

**Extracted Pages:** 53

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3168

**Title:** Comparison of Oracles: Part II

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Comparison of Oracles: Part II∗
David Lagziel†
Ben-Gurion University
Ehud Lehrer‡
Durham University
Tao Wang§
CUEB
November 13, 2025
Abstract
This paper studies incomplete-information games in which an information provider, an oracle, publicly discloses information to the players. One oracle is said to dominate another if, in every game, it can replicate the equilibrium outcomes induced by the latter. The companion Part I characterizes dominance under deterministic signaling and under stochastic signaling with a unique common knowledge component. The present paper extends the analysis to general environments and provides a characterizat-
ion of equivalence (mutual dominance) among oracles. To this end, we develop a theory of information loops, thereby extending the seminal work of Blackwell (1951) to strategic environments and Aumann (1976)’s theory of common knowledge.
Journal of Economic Literature classification numbers: C72, D82, D83.
Keywords: oracle; information dominance; signaling function; common knowledge component,
information loops.
∗For their valuable comments, the authors wish to thank participants of the Durham University Economics Seminar, the Adam Smith Business School Micro theory seminar of Glasgow University, INSEAD EPS seminar, the Tel-Aviv University Game Theory Seminar, the Rationality Center Game Theory Seminar, the Technion Game Theory Seminar, the Bar-Ilan University Theoretical Economics Seminar, the Bar-Ilan University Management Seminar, and the BGU Economics seminar. Lagziel acknowledges the support of the I-
srael Science Foundation, Grant #2074/23. Lehrer acknowledges the Israel Science Foundation, Grant #591/21. Wang acknowledges the support of the National Natural Science Foundation of China #72303161. †Department of Economics, Ben-Gurion University of the Negev, Beer-Sheba 8410501, Israel. E-mail: Davidlag@bgu.ac.il.
‡Economics Department, Durham University, Durham DH1 3LB, UK. E-mail: ehud.m.lehrer@durham.ac.uk. §International School of Economics and Management, Capital University of Economics and Business, Beijing 100070, China. E-mail: tao.wang.nau@hotmail.com.
arXiv:2511.04449v2 [econ.TH] 12 Nov 2025

1 Introduction
In settings with incomplete information, whether in peace negotiations, business decisions,
or financial markets, players lack full knowledge of all factors that influence the outcomes of
their decisions. To address such environments, specialized information providers (e.g., peace
mediators, business consultants, and rating agencies) operate as neutral oracles, selectively
disclosing relevant information that can alter strategic behavior and equilibrium outcomes.
This paper studies the role of such oracles in games of incomplete information, modeling them
as agents who transmit information through general signaling functions to the players.
Our primary objective is to characterize when one oracle dominates another and when two
oracles are equivalent. To this end, we define a partial order of dominance: one oracle dominates
another if, in every game, the information structure of the former can induce the same set of
equilibrium outcomes as the latter. Naturally, oracles are equivalent under mutual dominance.1
Building on Aumann (1976), the notion of a common knowledge component (CKC), i.e., the
inclusion-wise smallest set that all players can agree upon, plays a central role in our analysis.
The intuition for this is rather clear. In an incomplete information game, the relevant set of
states for strategic consideration is the corresponding CKC, however an oracle’s knowledge is
not confined to it. Oracles, who typically possess information that the players do not, cannot
always distinguish between states located in different CKCs. Thus, the structure of CKCs
governs the interplay between the players’ subjective knowledge and the oracle’s informational
limitations.
The CKC also defines the boundary between the companion Part I (i.e., Lagziel et al., 2025)
and the present paper.2 Specifically, Part I characterizes dominance when oracles are restricted
to deterministic signaling functions, and when stochastic signals are permitted but the state
space features a unique CKC. Here, we extend the analysis to environments with multiple CKCs
and, in addition, provide a general characterization of equivalence.
1Note that we abstract away from cases in which the oracle has preferences over players’ action profiles or derives utility from their strategic interaction. In this sense, we adopt Blackwell’s approach (see Blackwell, 1951), which focuses on comparing signaling structures (namely, experiments) in decision problems, independently of the sender’s objectives. 2Throughout the paper, we sometimes refer to Lagziel et al. (2025) as “Part I”.
1

Using the structure of multiple CKCs, we introduce the concept of an information loop,
the second key element in our characterization. To formally define these loops and present
the main results of the current study, we first partition the state space into distinct CKCs. An
information loop is then defined as a closed path of states that connects different CKCs through
elements of an oracle’s partition.
For example, assume there are 4 states Ω = {ω1, ω2, ω3, ω4} and two players whose pri
vate information is given by the following partitions: Π1 = {{ω1, ω2}, {ω3}, {ω4}} and Π2 =
{{ω1}, {ω2}, {ω3, ω4}}. The players’ private information induces two CKCs: C1 = {ω1, ω2} and
C2 = {ω3, ω4}. That is, the two players can agree on each of these two events. See the illustra
tion in Figure 1. If the oracle’s information is given by the partition F1 = {{ω1, ω3}, {ω2, ω4}},
we say that a loop exists, as the different partition elements of F1 form a closed path between
the two CKCs. Namely, ω1 ∈ C1 and ω3 ∈ C2 are joined by a partition element of F1 and
the same holds for ω2 ∈ C1 and ω4 ∈ C2. This yields a sequence of states that starts in C1,
transitions to C2, and reverts back again to C1, through different states that serve as entry and
exit points from each CKC.
Ω Π1 Π2
F1
C1 C2
ω1
ω2
ω3
ω4
Figure 1: There are two CKCs {ω1, ω2} and {ω3, ω4}. The oracle’s partition F1 generates a loop (ω1, ω3, ω4, ω2), which is a closed path connecting the two CKCs using the oracle’s partition elements.
Assuming that an oracle does not generate information loops, which includes the case where
the entire state space comprises a unique CKC, we prove that it dominates the other oracle if
and only if its partition refines that of the other within every CKC (see Theorem 1 in Section 3).
Importantly, this result extends the characterization result of Part I given a unique CKC, while
2

the refinement condition does not follow from the criterion used in the deterministic setting.
However, if a loop exists, the characterization becomes more complex. An information loop
imposes (measurability) constraints on the information the oracle can convey. In the previous
example, notice that every signaling function of the oracle over {ω1, ω2} uniquely defines the
signaling over {ω3, ω4}. Thus, the oracle is not free to signal any information it wants in one
CKC, without restricting its ability to convey different information in the other CKC.
An obvious question that goes to the heart of information loops and our results is, why
should we care specifically about the signaling structure over the pairs of states that form the
loop in every CKC? Moreover, why should a loop consist of separate entry and exit points
in every CKC? The answer is that, given a CKC, Bayesian updating depends on the ratio of
signal-probabilities for the different states. Thus, an effective constraint imposes restrictions
over such ratios, thus relating to at least two states in every CKC (while keeping in mind the
refinement condition in every CKC; this is a crucial aspect in Lagziel and Lehrer, 2025).
The concept of information loops hints at a significant connection to Aumann’s theory of
common knowledge, from Aumann (1976). This link appears to be central to understanding
how shared and differing information structures impact equilibrium outcomes in incomplete
information games. For this reason we provide an extensive set of results concerning various
properties of information loops in Section 4.
Specifically, the first property of information loops that we study is non-informativeness. A
loop is called non-informative if, in every CKC that it intersects, all the states of the loop are
in the same partition element of that oracle. We refer to this as non-informativeness because,
conditional on the CKC and loop, the oracle has no information to convey to the players. For
example, in Figure 1, consider an oracle with a trivial partition F ′
1 = Ω = {ω1, ω2, ω3, ω4}. This
partition creates a closed path between the two CKCs, as well as joining all the states of the
loop (given a CKC) to a single partition element of F ′
1. Building on this notion and assuming
that the partition of Oracle 1 refines that of Oracle 2 in every CKC, as in the previously stated
characterization, then non-informative loops do not pose a problem for dominance and Oracle
1 dominates the other (see Theorem 3 in Section 5).
However, once a loop is informative (i.e., in at least one CKC that it intersects, there are
3

ω1 ω2
ω3
ω4
ω5
ω6
F1(ω2)
F1(ω4)
F1(ω4)
C1
C2
C3
Figure 2: An illustration of a fully-informative and irreducible loop, which intersects three CKCs C1, C2 and C3 with two states in each.
states in the loop from different partition elements of the oracle; see Figure 2), then we require
additional conditions for characterization. More specifically, in case there are only two CKCs,
an additional condition is that Oracle 2 also has information loops whose states cover Oracle
1’s loop, roughly stating the up to non-informative set of states, Oracle 2 has similar loops to
those of Oracle 1 (the notion of a cover is formally defined in Section 4). Using this condition
we provide a characterization for the case of two CKCs (see Proposition 3 in Section 5.1).
While the question of characterization in the case of more than two CKCs remains open, we do
provide necessary conditions for dominance in the general case in Theorem 2, building on the
notion of irreducibility.
The notion of irreducibility, which proves crucial for our analysis, splits to two levels. The
first is irreducible loops, which implies that there exists no (smaller) loop that is based on a
strict subset of states taken from the original loop. The second is referred to as type-2 irreducible
loops, and it implies that the loop does not contain four states from the same partition element
of the oracle (again see Figure 2). On the one hand, type-2 irreducibility is a weaker notion
compared to irreducible loops, because it allows for a loop to intersect the same CKC several
times, whereas an irreducible loop cannot. On the other hand, a type-2 irreducible loop must
be informative because it does not allow for the entry and exit point in every CKC to be in
the same partition element of that oracle. In fact, it is fully-informative because this condition
holds in every CKC, rather than in a specific CKC.
The somewhat delicate understanding of the relations between these loops properties allows
us to achieve another main result: the characterization of equivalent oracles. Formally, we say
4

that two oracles are equivalent if they simultaneously dominate one another. The character
ization of equivalence, given in Theorem 4 in Section 6, is based on: (i) equivalence in every
CKC; (ii) equivalence of irreducible-informative loops; and (iii) a cover over loops. To prove
this result, we use type-2 irreducible loops to compare the information of both oracles. Specifi
cally, we consider the sets of type-2 irreducible loops that intersect a joint CKC (i.e., connected
loops), also taking into account sequential intersections (i.e., the transitive closure) where loop
1 is connected to loop 2 which is then connected to loop 3 and so on. We observe the set of
CKCs for each of these groups and refer to these sets as clusters. These are used as building
blocks in our analysis, and we prove that the information of equivalent oracles must match on
these clusters. This, in turn, provides some insight into the possible future characterization of
general dominance between oracles, as well as provides another level of extending the theory of
common knowledge, beyond information loops.
1.1 Relation to literature
Part II takes the comparison of oracles beyond the two benchmark environments handled in Part
I (that is, beyond deterministic signaling and stochastic signaling on a state space with a single
CKC), and develops tools for general stochastic signaling when multiple CKCs interact. The
central contribution is the introduction of information loops and associated notions: balance,
covers, irreducibility (including type-2 irreducibility), and cluster-based aggregation, which to
gether deliver necessary and sufficient conditions in the presence of loops, and a full equivalence
characterization that builds on order-preserving covers of irreducible, fully-informative loops.
Our starting point remains Blackwell’s comparison of experiments (see Blackwell, 1951,
1953), but the object of comparison and the criterion differ in two key ways. First, an oracle
is an experiment generator, namely, it can implement any public experiment measurable with
respect to its partition, rather than being a fixed experiment. Second, the criterion is strategic
and multi-player, so dominance is defined by equality of the sets of Nash-equilibrium outcome
distributions across all games, holding players’ private partitions fixed. These differences matter
only weakly with a single CKC, but are crucial with multiple CKCs, where the loop calculus
captures exactly how measurability forces cross-component co-movement of posteriors.
5

Our CKC-based analysis traces back to the epistemic foundations of games, interacting
specifically with the common knowledge ideas of Aumann (1976). For Part II, where the
state space decomposes into multiple CKCs, the right lens is the approximation of common
knowledge by common beliefs `a la Monderer and Samet (1989), who formalize p-belief and
common p-belief, showing how implications that classically require exact common knowledge
can be approximated by sufficiently strong common beliefs. The work of Aumann was also
followed by Mertens and Zamir (1985), who construct a universal type space embedding all
coherent hierarchies of beliefs, thus providing a unified measurable framework for Bayesian
games, and by Brandenburger and Dekel (1993), who clarify the equivalence between hierarchies
of beliefs and type representations, linking them to common knowledge.
Our model builds on these studies by fixing the partition structures while varying only the
oracle’s public experiment. The novel constraints we study arise from global measurability
across CKCs (via loops), not from additional complexity in private belief hierarchies. Our
information loops formalize when public measurability (via the oracle’s information) stitches
distinct CKCs so that posterior ratios must align across components, and when such stitching
is slack (no loops) or binding (informative, irreducible loops). This conceptual bridge clarifies
why refinement within CKCs suffices absent loops, but not in general.
Relative to information design and persuasion, the present analysis is comparative rather
than optimal. The persuasion literature3 asks which experiment maximizes a sender’s objective.
Here the oracle has no objective, but is evaluated by its replication ability. In this sense, this
project complements persuasion by characterizing when two generators of public experiments
are equivalent or when one dominates another.
Closer to us, Kolotilin et al. (2017) analyze persuasion with a privately informed receiver
and establish conditions under which optimal mechanisms can be represented as experiments,
delivering tractable characterizations in linear/monotone environments. Part II treats the play
ers’ experiments as primitives, but evaluates an oracle by the ability to replicate another across
all games with fixed private information, so that the binding obstacles are global measurability
(loops) rather than incentive constraints.
3For a recent survey, see Kamenica (2019).
6

Another strand in the literature studies mediators in games with incomplete information.
Mediators deliver differential recommendations that coordinate players’ actions and implement
variants of correlated equilibria (Forges, 1993). In many formulations the mediator does not
convey additional information about the realized state; i.e., its role is purely coordinative.
Under complete information, Gossner (2000) compares mediating structures by the sets of
correlated equilibria they can induce, calling one device “richer” if it generates a superset. This
characterization uses a notion of compatible interpretation in the spirit of garbling. Part II
departs from this strand in two respects: the oracle’s messages are public and informational
about the state, and comparison is by replication power across all games. With multiple CKCs,
feasibility is governed not by recommendation schemes but by measurability links across CKCs,
captured in our framework by information loops (balance and covers).
Closer to the present project are studies on incomplete-information games that establish
partial orderings of information structures. Peski (2008) obtains a Blackwell-type ordering in
zero-sum games. Lehrer et al. (2010) analyze common-interest games with privately observed,
possibly correlated signals, showing that comparative results hinge on the version of Blackwell
garbling tied to the chosen solution concept. Lehrer et al. (2013) extend garbling to characterize
outcome equivalence. Bergemann and Morris (2016) study n-player environments via Bayes
correlated equilibrium and characterize dominance through individual sufficiency. Part II differs
along two margins crucial with multiple CKCs: (i) players’ private partitions are fixed primitives
while the oracle is an experiment generator of public signals; and (ii) dominance/equivalence
are defined by the ability to reproduce the set of equilibrium outcome distributions in every
game, and thus hinge on the loop calculus rather than garbling alone.
The structure of the paper. The paper is organized as follows. Section 2 depicts the
model. Section 3 provides a characterization of dominance when there are no loops. Section 4
studies the properties of information loops. Section 4 outlines necessary and sufficient conditions
for dominance, as well as a characterization of dominance given two CKCs (in Section 5.1).
Finally, in Section 6 we characterize the equivalence relation between oracles. Appendix A.1
reviews several key results from the companion Part I. The remainder of the appendix contains
the proofs.
7

2 The model
A guided game consists of a Bayesian game together with an oracle. The oracle provides
information intended to enable a different, and preferably broader, set of equilibria. It operates
via signaling, and our analysis characterizes the extent to which oracles can expand the set of
equilibrium payoffs.
We begin by defining the underlying Bayesian game. Let N = {1, 2, . . . , n} be a finite set of
n ≥ 2 players, and let Ω be a non-empty, finite state space. Each player i ∈ N has a non-empty,
finite action set4 Ai and an information partition Πi of Ω. Let A = ×i∈N Ai denote the set of
action profiles. Player i’s utility is ui : Ω × A → R, mapping states and action profiles to
payoffs.
To extend the basic game to a guided game, we introduce an oracle that provides public
information before actions are chosen. The oracle has a partition F of Ω and a countable signal
set S. A signaling strategy of the oracle is an F -measurable function τ : F → ∆(S) with finite
support distributions, used to transmit information to all players N , where ∆(S) denotes the
set of finite-support probability distributions over S. For ω ∈ Ω and s ∈ S, we write τ (s | ω) for
the probability τ (ω)(s) that s is sent when the realized state is ω. Note that any deterministic
strategy τ : F → S is effectively a partition, and we refer to it as such when appropriate.
The guided game evolves as follows. First, the oracle publicly announces a signaling strategy
τ . Then, a state ω ∈ Ω is drawn according to a common prior μ ∈ ∆(Ω). Each player i is
privately informed of Πi(ω), the atom (i.e., set of states) of player i’s partition that contains
ω. Finally, a realization s ∈ S is drawn according to τ (ω) and publicly announced.
Let the join5 Πi ∨ F ′ denote the updated partition of player i given Πi and a partition
F ′. If τ is deterministic, define μi
τ|ω = μ · | [Πi ∨ τ ](ω) ∈ ∆(Ω) as player i’s posterior after
observing Πi(ω) and τ (ω). If τ is stochastic, let μi
τ|ω,s = μ(· | Πi(ω), τ, s) ∈ ∆(Ω) denote
player i’s posterior after observing Πi(ω) and a realized signal s according to τ (ω). Thus, every
strategy τ induces an incomplete-information game G(τ ) = (N, (Ai)i∈N , (μi
τ )i∈N , (ui)i∈N ). Since
the state space and action sets are finite, the Nash equilibria exist. When there is no risk of
4In this framework, Ai is independent of the player’s information, but the setting can also accommodate cases where it is not. 5Coarsest common refinement of Πi and F ′; following Aumann (1976).
8

ambiguity, we denote the incomplete-information game without τ by G.
2.1 Partial ordering of oracles
To discuss the oracle’s role in this framework, we adopt a solution concept, referred to as a
Guided equilibrium, that incorporates the oracle’s strategy. Let σi : Πi × S → ∆(Ai) be a
strategy for player i. A tuple (τ, σ1, . . . , σn) is a Guided equilibrium if (σ1, . . . , σn) is a Nash
equilibrium of the incomplete-information game G(τ ).
This notion of a Guided equilibrium induces a partial order over oracles (that is, over their
partitions) via the sets of equilibria they can generate. Let NED(G(τ )) ⊆ ∆(Ω × A) denote the
set of distributions over Ω × A induced by Nash equilibria given G and τ .6 Now consider two
oracles, Oracle 1 and Oracle 2, and let Fj and τj denote the partition and strategy of Oracle j,
respectively. Using these notations, we define a partial order as follows.
Definition 1 (Partial ordering of Oracles). Oracle 1 dominates Oracle 2, denoted F1 ⪰NE F2,
if for every τ2 and game G, there exists τ1 such that NED(G(τ1)) = NED(G(τ2)).
Informally, dominance means that one oracle can replicate the other’s signaling structure
so as to induce the same set of equilibrium outcomes. A direct comparison of equilibria across
games without conditioning on the signaling rule is problematic because players’ strategies
typically depend on the oracle’s signals.
2.2 More than one CKC: two examples
The partition-refinement condition given in Lagziel et al. (2025) ensures that Oracle 1 can
produce the exact same strategy as Oracle 2. This however, hinges on the existence of a unique
CKC. In case there are several CKCs, Oracle 1 may need to follow a different strategy in order
to match the distribution on posteriors generated by τ2. Namely, τ1 may require more signals
than τ2, even if both oracles have the same (complete) information in every CKC. Let us provide
a concrete example for this.
6A Nash equilibrium (σ1∗, . . . , σ∗n), along with the common prior μ, induce a probability distribution on Ω×A.
Fix ω and an action profile a. The probability of (ω, a) under (σ1∗, . . . , σ∗n), τ and the common prior μ equals μ(ω) P
s∈S τ (s | ω) Qn
i=1 σ∗
i (ai | Πi(ω), s). As multiple equilibria may exist, NED(G(τ )) is a subset of ∆(Ω × A).
9

Example 1. More signals are needed.
Consider a uniformly distributed state space Ω = {ω1, ω2, ω3, ω4}, with two players whose
private information is Π1 = {{ω1, ω2}, {ω3}, {ω4}} and Π2 = {{ω1}, {ω2}, {ω3, ω4}}. The oracles
have the following partitions F1 = {{ω1, ω3}, {ω2}, {ω4}} and F2 = {{ω1}, {ω3}, {ω2, ω4}}. This
information structure is illustrated in Figure 3. Notice that there are two CKCs, {ω1, ω2} and
{ω3, ω4}, and both oracles have complete information in each of these components. That is, F1
refines F2 in every CKC, and vice versa.
Ω Π1 Π2
ω1
ω2
ω3
ω4
(a)
The players’ information
Ω
F1
F2
ω1
ω2
ω3
ω4
(b)
The oracles’ information
Figure 3: On the left, Figure (a) illustrates the information structure of player 1 (blue) and player 2 (red). On the right, Figure (b) portrays the information structure of Oracle 1 (orange) and Oracle 2 (green).
Consider the stochastic strategy τ2 given in Figure 4. Notice it is F2-measurable, as
τ2(s|ω2) = τ2(s|ω4) for every signal s, but not F1-measurable.
τ2(s|ω) s1 s2 s3 ω1 0 1/2 1/2 ω2 1/3 2/3 0 ω3 0 2/3 1/3 ω4 1/3 2/3 0
Figure 4: A stochastic F2-measurable strategy of Oracle 2.
10

The set of τ2-posteriors Post(τ2) is
Post(τ2) =

     
     
(ei, ei), ∀ 1 ≤ i ≤ 4,
3
7, 4
7 , 0, 0 , ej , j = 1, 2,
ek, (0, 0, 1
2, 1
2 ) , k = 3, 4

     
     
,
and we can now try to mimic τ2 using an F1-measurable strategy. First, this requires at least
two signals to distinguish between ω1 and ω2, as well as ω3 and ω4. Second, the posterior
3
7, 4
7 , 0, 0 , e1 requires another signal s so that τ (s|ω1) = α > 0 and τ (s|ω3) = 4
3 α > 0.
However, the F1-measurability requirement implies that τ (s|ω3) = α, and the τ2-posterior
e3, (0, 0, 1
2, 1
2 ) necessitates that τ (s|ω4) = α as well. These conditions are jointly given in
Table (a) within Figure 5.
τ1(s|ω) s3 s4 s5 ω1 α β 0 ω2 4
3α 0 γ ω3 α β 0 ω4 α 0 γ
(a)
τ1(s|ω) s3 s4 s5 s6 ω1 1/2 1/3 0 1/6 ω2 2/3 0 1/3 0 ω3 1/2 1/3 0 1/6 ω4 1/2 0 1/3 1/6
(b)
Figure 5: A strategy τ1, either with 3 signals as given in Table (a), or with 4 signals as in Table (b).
Evidently, it must be that α, β, γ > 0 in order to mimic τ2, but the second and fourth
rows in Table (a) cannot jointly sum to 1 unless α = 0, which eliminates the possibility of
a well-defined mimicking strategy. Thus, in order to mimic the stated strategy τ2, Oracle 1
requires an additional signal as presented in Table (b), in Figure 5. To conclude, though the
oracles’ partitions refine one another in every CKC, they cannot always produce the exact same
strategy when trying to mimic each other.
Example 2. Dominance need not imply refinement with multiple CKCs
In this example we wish to show that when there are multiple CKCs, Oracle 1 can dom
inate Oracle 2 although F1 does not refine F2. To see this, we revisit an example from
Lagziel et al. (2025) in which Π1 = {{ω1, ω2}, {ω3, ω4}}, F1 = {{ω1, ω2, ω3}, {ω4}} and F2 =
11

{{ω1, ω2}, {ω3}, {ω4}}. This is illustrated in Figure 6.
Ω
Π1
F2
F1
ω1
ω2
ω3
ω4
Figure 6: Note that F2 strictly refines F1 and Π1.
Now consider the signaling strategy of Oracle 2 given in Figure 7, where Oracle 2 provides
the players with no additional information regarding states ω1 and ω2. Thus, the posterior
over these states remains the original one. On the other hand, given the states ω3 and ω4,
the strategy τ2 reveals the true state with a positive probability and induces the posterior
(0, 0, 2/5, 3/5) with the remaining probability.
τ2(s|ω) s1 s2 s3 ω1 1/4 0 3/4 ω2 1/4 0 3/4 ω3 0 1/2 1/2 ω4 1/4 0 3/4
Figure 7: A stochastic F2-measurable strategy of Oracle 2.
While Oracle 2 can assign different probabilities to a signal conditioned on ω2 and ω3, Oracle
1 cannot. However, there is a signaling strategy for Oracle 1 that produces the same distribution
over the posteriors as τ2 does. The following strategy τ1, given in Figure 8, does that.
τ1(s|ω) s1 s2 s3 ω1 1/2 0 1/2 ω2 1/2 0 1/2 ω3 1/2 0 1/2 ω4 0 1/4 3/4
Figure 8: A stochastic F1-measurable strategy of Oracle 1.
12

In this example, it is straightforward to prove that Oracle 1 can mimic every strategy τ2 of
Oracle 2, and we prove this result under more general conditions in Theorem 1 and Proposition
3. Yet, it is clear that F1 is not a refinement of F2 in general, but it is a refinement in every
CKC.
3 Multiple CKCs and no loops
We now turn to the general setting in which the players’ information structures induce any
(finite) number of CKCs. Assume that C1, . . . , Cl are mutually exclusive CKCs such that
Ω = Sl
j=1 Cj. A key aspect of our analysis is the presence of measurability constraints, where
different CKCs are connected by atoms of the oracles’ partitions. To understand the significance
of this, consider a setting where F1 does not contain any element intersecting multiple CKCs.
In this case, the characterization result given a unique CKC from Part I (see Theorem 5
in Appendix A.1.2) applies separately to each CKC, as Oracle 1 faces no constraints when
attempting to mimic some strategy of Oracle 2.
However, when elements of Oracle 1’s partition intersect different CKCs, the analysis be
comes more complex, because we must account for measurability constraints when attempting
to use the same strategy τ1 across different CKCs. Such intersections impose constraints on τ1,
preventing us from naively applying previous results.
This issue becomes even more complicated when multiple elements of Oracle 1’s partition
intersect different CKCs, forming what we call an (information) loop.7
Generally, a loop is an ordered sequence of states from different CKCs such that the partition
of an oracle groups together distinct pairs of states from different CKCs, creating a closed path.
The main result of this section, presented in Theorem 1 below, states that in the absence of
such loops, Oracle 1 dominates Oracle 2 if and only if F1 refines F2 in every CKC. The formal
definition of a loop is provided in Definition 2.
Definition 2. An Fi-loop is a sequence (ω1, ω1, ω2, ω2, . . . , ωm, ωm), where m + 1 ≡ 1 and
m ≥ 2, such that
7An (information) loop is different from a loop in graph theory. In graph theory, a loop refers to an edge that connects a vertex to itself.
13

• ωj, ωj ∈ Crj and ωj ̸= ωj for all j = 1, . . . , m.8
• ωj+1 ∈ Fi(ωj) for all j = 1, . . . , m.
• Crj ̸= Crj+1 for all j = 1, . . . , m.
• The sets {ωj, ωj+1} are pairwise disjoint for all j = 1, . . . , m.
To understand information loops, one can view the CKCs as the vertices of a graph. An edge
connects two CKCs if there exist ωj+1 and ωj such that they belong to the same Fi-partition
element (this corresponds to the second requirement). An information loop then parallels an
Eulerian graph, where there is a walk that includes every edge exactly once (the last requirement
in the definition) and ends back at the initial vertex (hence the requirement m + 1 ≡ 1). As
noted at the beginning of this section, the key aspect of the general analysis is to consider the
case when the oracle partition atoms intersect different CKCs, so we require that Crj ̸= Crj+1
for all j = 1, . . . , m.
An example of an F1-loop is provided in Figure 9.(a), which depicts a loop consisting of six
states across three CKCs. Note that a loop can intersect the same CKC multiple times, as long
as the sets {ωj, ωj+1} remain pairwise disjoint for each j.9
We use the concept of a loop in our first general characterization, presented in Theorem 1.
This theorem builds on the assumption that F1 contains no loops and extends the main result
of Part I by showing that one oracle dominates another if the former’s partition refines that of
the latter in every CKC. It is important to note that the proof is extensive, as it must account
for the measurability constraints of τ1 across all CKCs.
Theorem 1. Assume there is no F1-loop. Then, Oracle 1 dominates Oracle 2 if and only if
F1 refines F2 in every CKC.
The proof of Theorem 1 builds on the concept of a sub-strategy. A sub-strategy is a signaling
function without the requirement that the probabilities sum to 1. This relaxation allows us to
study functions that partially mimic a strategy τ2, meaning each posterior is drawn from the set
8Here Crj refers to the CKC that contains the j-th pair of states (ωj, ωj). 9A loop intersects a given CKC once if there is a unique pair of states (ωj, ωj) from the loop that lies in that CKC.
14

ω1 ω1
ω2
ω2
ω3
ω3
F1(ω2)
F1(ω3)
F1(ω1)
C1
C2
C3
(a)
ω1 ω1
ω2
ω2
ω3
ω3
A = F2(ω1) B = F2(ω1)
C1
C2
C3
(b)
Figure 9: Figure (a) depicts an F1-loop with three CKCs and six states overall. Figure (b) illustrates how the F1-loop, presented in (a), is non-balanced with respect to F2. Namely, F2 has two elements A = {ω1, ω2, ω3}, and B = {ω1, ω2, ω3} such that the number of transitions from A to B are 3, while the reverse equals 0.
of τ2-posteriors Post(τ2) and is induced with a probability that does not exceed the probability
with which τ2 induces it. We show that the set of sub-strategies is compact, allowing us to
consider an optimal sub-strategy for mimicking τ2. The proof then proceeds by contradiction:
if the optimal sub-strategy is not a complete strategy, we can extend it by constructing an ad
ditional sub-strategy to complement the optimal one for posteriors that are not fully supported
(relative to the probabilities induced by τ2). This part is rather extensive as it requires some
graph theory and several supporting claims given in the proof in the appendix.
4 Information loops
Previous sections have examined the problem of oracle dominance in the absence of loops,
considering either a unique CKC or multiple CKCs without loops. However, in order to confront
the general question of dominance in the presence of information loops, we need to have a clear
understanding of their properties and implications.
Specifically, when an F1-loop exists, it may create challenges for Oracle 1 in mimicking
Oracle 2, because loops introduce measurability constraints across CKCs. Although Oracle 1
can mimic Oracle 2 within each CKC individually, it may be impossible to do so simultaneously
across CKCs if the required combined strategy is not measurable with respect to F1. This
suggests that any F1-loop must satisfy certain conditions to ensure that such a strategy is
15

indeed F1-measurable. The first condition that we study, which turns out to be a necessary
condition for dominance, is generally referred to as F2-balanced.
The idea starts with an F1-loop. We examine all states in this loop and determine how they
can be covered by two F2-measurable sets. In other words, the loop is divided into two disjoint
sets, each contained in an F2-measurable set, denoted A and B. Next, we count the number
of transitions along the loop from A to B, where the entry point into one CKC is through a
state in A and the exit is through a state in B. We do the same for transitions from B to A.
An F1-loop is called F2-balanced if the number of transitions between A and B is equal in both
directions. The formal definition follows.
Definition 3. An Fi-loop (ω1, ω1, ω2, ω2, . . . , ωm, ωm) is F−i-balanced if for every F−i-measurable
partition of the loop’s states into two disjoint sets {A, B} such that ∪j{ωj, ωj} ⊆ A ∪ B, it fol
lows that:
#(A → B) := |{j; ωj ∈ A and ωj ∈ B}| = |{j; ωj ∈ B and ωj ∈ A}| =: #(B → A). (1)
Note that an F1-loop (ω1, ω1, ω2, ω2, . . . , ωm, ωm), where ωj ∈ F2(ωj) for all j = 1, . . . , m, is
F2-balanced. Figure 9.(b) shows a partition of the F1-loop in 9.(a) into two F2-measurable sets
A and B. Since #(A → B) = 3 while #(B → A) = 0, the F1-loop fails to be F2-balanced.
Why are balanced loops crucial? Consider, for example, a non-balanced loop as depicted in
Figure 9, and assume that τ2(s|ω) = 1
2−1
4 1{ω∈A} for some signal s ∈ S. This imposes a specific
1 : 2 ratio between any two states described in each CKC, so that Πi
τ2(s|ωi)
τ2(s|ωi) = 1
8 . However, since
ωi and ωi+1 belong to the same F1 partition element, the measurability constraints on Oracle 1
along the loop require that τ1(s|ωi) = τ1(s|ωi+1), hence Πi
τ1(s|ωi)
τ1(s|ωi) = 1 for any s in the support
of all states. In other words, Oracle 1 cannot match the ratio dictated by τ2, therefore the key
proportionality lemma from Part I (see Lemma 1 from in Appendix A.1.1) does not hold in at
least one CKC.
If the loop were balanced—say, with A = {ω1, ω2} and B = {ω1, ω2, ω3, ω3}—then the same
strategy τ2 would yield Πi
τ2(s|ωi)
τ2(s|ωi) = 1, as required. In general, when all loops are balanced,
this discrepancy is eliminated for any two such sets A and B. The notion of balanced loops is
16

closely related to the following notion of covered loops, which implies that an F1-loop can be
decomposed to loops of F2.
Definition 4. An Fi-loop (ω1, ω1, ω2, ω2, . . . , ωm, ωm) is F−i-covered if
• The set {1, ..., m} is partitioned to disjoint sets of indices, J, I1, ..., Ir, i.e., {1, ..., m} =
J ∪ (∪r
t=1It).
• For each t = 1, ..., r, (ωj, ωj)
j∈It
is an F−i-loop, also referred to as a sub-loop.10
• J = {j; ωj ∈ F−i(ωj)}.
The cover is order-preserving if every F−i-loop (ωj, ωj)
j∈It
in the cover follows the same
ordering of pairs as the Fi-loop.
In simple terms, the definition states that, given an F1-loop (ω1, ω1, ω2, ω2, . . . , ωm, ωm), we
can partition its states into several F2-loops and a set of states where ωj ∈ F2(ωj). Figure
10 (a) depicts an F1-loop consisting of ((ωj, ωj))j=1,...,4, which is covered by two F2-loops:
(ω1, ω1, ω3, ω3) and (ω2, ω2, ω4, ω4). In this case, the set J (defined in Definition 4) is empty.
Figure 10 (b) depicts a case in which J = {2, 4}, and (ω1, ω1, ω3, ω3) forms an F2-loop, yet it is
not an F2-sub-loop of the original F1-loop since ω1 is linked to ω3 instead of ω3. Actually, if we
set A = {ω2, ω2, ω4, ω4, ω1, ω3} and B = {ω1, ω3}, which are F2-measurable, then #(A → B) =
2, but #(B → A) = 0, so the F1-loop is not F2-balanced. Finally, note that the sub-loops in
Figure 10 (a) are order-preserving. By contrast, the sub-loop (ω1, ω1, ω3, ω3, ω2, ω2) in Figure
10 (c) does not preserve the ordering of the pairs as the F1-loop, since the pair (ω3, ω3) appears
before (ω2, ω2). In Section 5, we show that order-preservation is needed to obtain a necessary
condition for oracle dominance.
The following Proposition 1 proves that an F1-loop is F2-balanced if and only if it is F2
covered. This proposition assists with the proof of Theorem 2 below, which provides a necessary
condition for dominance.
10The order of the pairs (ωj, ωj) in the F−i-loop does not have to coincide with their order under the Fi-loop. For instance, an F1-loop (ω1, ω1, ω2, ω2, ω3, ω3) might be covered by the following F2-loop (ω1, ω1, ω3, ω3, ω2, ω2).
17

ω1 ω1
ω2
ω2
ω4
ω4
ω3 ω3
F2(ω1) F2(ω3)
F2(ω2)
F2(ω4)
ω1 ω1
ω2
ω2
ω4
ω4
ω3 ω3
F2(ω1) F2(ω3)
F2(ω4) F2(ω2) ω1 ω1
ω2
ω2
ω4
ω4
ω3 ω3
F2(ω1) F2(ω1)
F2(ω2)
F2(ω4)
(a) (b) (c)
Figure 10: Two states connected by a colored line are in the same information set of F2. In (a), the F2-sub-loops that cover the F1-loop are order-preserving, i.e., following the ordering of pairs in the original F1-loop, whereas the sub-loop in (c) is not order-preserving. (b) illustrates a case where (ω1, ω1, ω3, ω3) forms an F -2 loop, but it is not an F2-sub-loop of the original F1-loop.
Proposition 1. Let (ω1, ω1, ω2, ω2, . . . , ωm, ωm) be an F1-loop. The following statements are
equivalent:
i. The loop is F2-balanced;
ii. The loop is F2-covered;
iii. For every F2-measurable function f : ω1, ω1, ω2, ω2, . . . , ωm, ωm → (0, ∞),
m
Y
i=1
f (ωi)
f (ωi) = 1.
The next two properties that we study are irreducible and informative loops. Starting with
the former, an Fi-loop is irreducible if it does not have a sub-loop, namely, there exists no
‘smaller’ Fi-loop that comprises a strictly smaller set of states taken solely from the original
loop. Our analysis would use irreducible loops as building blocks to decompose and compare
loops generated by the oracles’ partitions.
Definition 5. Let Li = (ω1, ω1, ω2, ω2, . . . , ωm, ωm) be an Fi-loop. We say that the loop is
irreducible if there exists no strict subset of the set {ωj, ωj : j = 1, . . . , m} that forms an
18

Fi-loop.
We use the definition of an irreducible loop in the context of covers as well, stating that a
cover is irreducible if every loop in the cover is irreducible. Furthermore, the idea of irreducible
loops is closely related to the concept of covers, and specifically to the set J = {j; ωj ∈ F−i(ωj)}
given in Definition 4 above. Specifically, if there exists an Fi-loop with a pair of states (ωj, ωj)
such that ωj ∈ Fi(ωj), then it cannot be irreducible unless it comprises only 4 states.11 We
typically refer to such cases where ωj ∈ Fi(ωj) as non-informative because Oracle i cannot
distinguish between the two states. This condition is essentially equivalent to every F1-loop
being F2-balanced at 0, meaning that for any choice of the specified F2-measurable sets A and
B, the number of transitions between these sets is zero. The following Definition 6 captures
the idea of informative loops, which would later be used in Theorem 3 as a sufficient condition
for dominance.
Definition 6. An Fi-loop (ω1, ω1, ω2, ω2, . . . , ωm, ωm) is Fk-non-informative if Fk(ωj) = Fk(ωj)
for every j. The loop is Fk-fully-informative if Fk(ωj) ̸= Fk(ωj) for every j.
To understand the motivation behind this definition, consider any F1-loop denoted by
(ω1, ω1, ω2, ω2, . . . , ωm, ωm). If this loop is F2-non-informative, it suggests that the ratios τ2(s|ωi)
τ2(s|ωi)
equals 1 for every signal s supported on these states. In simple terms, conditional on any
{ωi, ωi}, Oracle 2 does not provide any additional information, so the constraints that an F1
loop imposes on Oracle 1 in every CKC (i.e., that the product of probability ratios along the
loop equals 1) are met by the measurability requirements of F2.
The following proposition summarizes key properties of informative and irreducible loops. It
states that an irreducible loop intersects every CKC at most once and must be fully informative
(unless it has only 4 states). In addition, the proposition shows that an informative loop has a
fully-informative sub-loop, as well.
Proposition 2. Consider an Fi-loop Li.
• If Li intersects the same CKC more than once, then it is not irreducible.
11In general, the smallest possible loop has at least 4 states, so any such loop is, by definition, irreducible.
19

• If Li is irreducible and consists of at least 6 states, then it is Fi-fully-informative.
• If Li is Fi-informative, then it has an Fi-fully-informative sub-loop.
• If Li is Fi-fully-informative, then it can be decomposed to irreducible Fi-loops.
• If Li is not irreducible, then either it intersects the same CKC more than once, or it has
at least 4 states in the same partition element of Fi.
We use this proposition in the following subsection to provide necessary and sufficient con
ditions for the dominance of one oracle over another.
5 Necessary and Sufficient conditions for dominance
In the following section, we address the general case where F1 has loops, which imposes con
straints on Oracle 1 across CKCs. Due to the complexity of this problem, we divide our analysis
into two parts: a necessary condition for dominance presented in Theorem 2, and a sufficient
condition given in Theorem 3. These theorems depend strongly on the properties of information
loops, and specifically on the notions of covers, irreducibility and non-informativeness.
Starting with the necessary conditions, the following theorem, which builds on Propositions
1 and 2, states that if Oracle 1 dominates Oracle 2, then besides the refinement condition in
every CKC, already established in Theorem 1, it must be that every F1-loop is covered by loops
of F2. In addition, it states that every irreducible F2-loop that covers an irreducible F1-loop is
order-preserving, essentially stating that the two loops coincide.
Theorem 2. If Oracle 1 dominates Oracle 2, then:
• F1 refines F2 in every CKC;
• Any F1-loop has a cover by F2-loops; and
• Every irreducible F2-loop that covers an irreducible F1-loop is order-preserving.
The proof of the first part is immediate, as it follows directly from the main result of Part
I (see Theorem 4 therein cited in Appendix A.1.2). The proof of the second part relies on
20

Proposition 1 by assuming that an F1-loop is not F2-balanced, and constructing a strategy τ2
that Oracle 1 cannot mimic without violating measurability constraints. The last part relies on
Proposition 2, as well as a key lemma from Part I (cited in Appendix A.1.1), by depicting a two
signal strategy τ2 that one cannot mimic without following the same order of pairs throughout
the F2-loop.
Next, we use the understanding regarding covered and balanced loops to present a sufficient
condition for dominance, which indirectly requires that any loop is balanced at 0—meaning
that there are no transitions between sets A and B. This leads to the following Theorem 3,
which uses the non-informative notion for dominance.
Theorem 3. If F1 refines F2 in every CKC and every F1-loop is F2-non-informative, then
Oracle 1 dominates Oracle 2.
Though we do not yet provide a full characterization, it becomes rather clear that the
requirement that every F1-loop is F2-balanced should be the main focus, as it is a necessary
condition, as well as a sufficient one when the balance is set to zero. In the following section
we show that the balance condition is both necessary and sufficient for the case of two CKCs.
5.1 The case of two CKCs
In this section, we assume there are only two CKCs. This assumption simplifies the analysis, as
the case of two CKCs can be resolved using our prior results, allowing us to examine all possible
loops directly. Formally, Proposition 3 states that, given two CKCs, the necessary condition of
an F2-balanced loop from Theorem 2 is also a sufficient condition.
To build intuition, consider the scenario with two CKCs depicted in Figure 11, featuring
an F1-loop (ω1, ω1, ω2, ω2) across four states. Fix some τ2 and assume the loop is F2-balanced.
There are then only two possibilities: either the loop is F2-non-informative, as shown in cases
(a) and (b) in Figure 11, or it is also an F2-loop, illustrated in case (c) in Figure 11. The first
possibility was covered in Theorem 3, while the second allows Oracle 1 to meet the constraints
imposed by the F1-loop when attempting to mimic τ2.
21

Proposition 3. Assume there are only two CKCs. Then, Oracle 1 dominates Oracle 2 if and
only if F1 refines F2 in every CKC and any F1-loop is F2-balanced.
C1 C2
F2
ω1
ω1
ω2
ω2
(a)
C1 C2
F2
ω1
ω1
ω2
ω2
(b)
C1 C2
F2
ω1
ω1
ω2
ω2
(c)
Figure 11: Two CKCs with an F1-loop described by (ω1, ω1, ω2, ω2). Graph (a) and (b) depict two F2-balanced loops, that are also F2-non-informative, and (c) describes an F2-loop. Any other structure of F2 yields a nonbalanced loop.
6 Equivalent oracles
In this section we tackle a parallel question to dominance, which is the problem of oracles’
equivalence. Specifically, we characterize necessary and sufficient conditions such that both
oracles dominate one another simultaneously, as formally given in the following definition:
Definition 7. F1 is equivalent to F2, denoted F1 ∼ F2, if the two oracles dominate one another,
that is, if Fi ⪰NE F−i for every i = 1, 2.
Based on the results for the case that loops do not exist and the case of two CKCs, equiv
alence between oracles obviously requires two-sided refinement within every CKC (i.e., equiva
lence), and that every Fi-loop is F−i-balanced for every Oracle i. This, however, is insufficient
and equivalence also requires that every irreducible Fi-loop with at least 6 states is also an
irreducible F−i-loop. This result is given in the following Theorem 4.
Theorem 4. F1 is equivalent to F2 if and only if for every Oracle i, the partition Fi refines
F−i in every CKC, any Fi-loop has a cover of F−i-loops, and every irreducible Fi-loop with at
least 6 states is an irreducible F−i-loop.
22

The equivalence condition concerning irreducible loops is based on the ability of both oracles
to follow similar measurability constraints when signaling to players in every CKC. That is,
if one oracle is constrained by an information loop, then we require the other to follow suit.
Yet, this still raises the question of why we need to focus on irreducible loops. To understand
this, consider a single partition element of Fi that intersects at least two CKCs where each
intersection contains at least two states. This evidently generates a non-informative loop,
because all pairs are non-informative. But as long as the other oracle cannot distinguish between
the two states in each pair, the ability to separate different pairs in different CKCs is not needed,
as each pair is common knowledge among the players themselves within every CKC.
The proof of Theorem 4 also builds on an intermediate irreducibility notion that we refer
to as type-2 irreducible loop. More formally, an Fi-loop is type-2 irreducible if it does not have
four states from the same partition element of Fi. This notion refines that of fully-informative
loops (as every type-2 irreducible loop is fully-informative), but also weakens that of irreducible
loops, because a type-2 irreducible loop can intersect the same CKC multiple times, and so be
decomposed into sub-loops.
The notion of type-2 irreducible loops is crucial for our analysis and results, but also in a
more general manner. We use type-2 irreducible loops to generate the basic elements, building
blocks, upon which two oracles must match one another (in terms of their information). These
building blocks are referred to as clusters and they are constructed as follows. First, we take
the set of type-2 irreducible loops. Then, we consider such loops that intersect the same CKC
and consider them as connected. Next, we take the transitive-closure of this relation, which
yield disjoint sets of connected type-2 irreducible loops. Finally, we take every such set (of
connected loops) and consider all the CKCs that it intersects; this is a cluster. We prove
that the oracles’ partitions match one another in each of these clusters. That is, the clusters
are the basic structure upon which we derive an equivalence, and later extend it to “simpler”
connections between clusters that involve only a single partition element of Fi.
23

References
Aumann, R. J. (1976). Agreeing to Disagree. The Annals of Statistics 4 (6), 1236–1239. Pub
lisher: Institute of Mathematical Statistics.
Bergemann, D. and S. Morris (2016, May). Bayes correlated equilibrium and the comparison of
information structures in games: Bayes correlated equilibrium. Theoretical Economics 11 (2),
487–522.
Blackwell, D. (1951). Comparison of Experiments. Proceedings of the Second Berkeley Sympo
sium on Mathematical Statistics and Probability 2, 93–102.
Blackwell, D. (1953). Equivalent Comparisons of Experiments. Annals of Mathematical Statis
tics 24 (2), 265–272. Publisher: Institute of Mathematical Statistics.
Brandenburger, A. and E. Dekel (1993, February). Hierarchies of Beliefs and Common Knowl
edge. Journal of Economic Theory 59 (1), 189–198.
Forges, F. (1993, November). Five legitimate definitions of correlated equilibrium in games
with incomplete information. Theory and Decision 35 (3), 277–310.
Gossner, O. (2000, January). Comparison of Information Structures. Games and Economic
Behavior 30 (1), 44–63.
Kamenica, E. (2019, August). Bayesian Persuasion and Information Design. Annual Review of
Economics 11 (1), 249–272.
Kolotilin, A., T. Mylovanov, A. Zapechelnyuk, and M. Li (2017). Persuasion of a Privately
Informed Receiver. Econometrica 85 (6), 1949–1964.
Lagziel, D. and E. Lehrer (2025, October). Constrained Mediation: Bayesian Implementability
of Joint Posteriors. arXiv:2510.20986 [econ].
Lagziel, D., E. Lehrer, and T. Wang (2025, November). Comparison of Oracles: Part I.
arXiv:2505.15955 [econ].
24

Lehrer, E., D. Rosenberg, and E. Shmaya (2010, March). Signaling and mediation in games
with common interests. Games and Economic Behavior 68 (2), 670–682.
Lehrer, E., D. Rosenberg, and E. Shmaya (2013, September). Garbling of signals and outcome
equivalence. Games and Economic Behavior 81, 179–191.
Mertens, J. F. and S. Zamir (1985, March). Formulation of Bayesian analysis for games with
incomplete information. International Journal of Game Theory 14 (1), 1–29.
Monderer, D. and D. Samet (1989, June). Approximating common knowledge with common
beliefs. Games and Economic Behavior 1 (2), 170–190.
Peski, M. (2008, March). Comparison of information structures in zero-sum games. Games and
Economic Behavior 62 (2), 732–735.
A Appendices
A.1 Key results from the companion Part I
A.1.1 Proportionality lemma from Part I
Fix two distinct signals {s1, s2} and assume that the partition F2 = {A1, A2, . . . , Am} has m
elements, as noted. Let p1, p2, . . . , pm be m distinct probabilities such that all ratios of two
distinct numbers from the set A = {pj, 1 − pj : j = 1, 2, . . . , m} are pairwise different.12 Denote
by Post(τi) the set of posteriors induced by the strategy τi. Define the signaling function τ2
such that
τ2(s1|Aj) = 1 − τ2(s2|Aj) = pj, ∀ ≤ j ≤ m. (2)
Given this signaling function and assuming that the state space comprises a unique CKC,
Lemma 1 (from Part I) states that the condition Post(τ1) ⊆ Post(τ2) implies that τ1 is partially
proportional to τ2, restricted to a subset of feasible signals.
12To achieve this, one can consider m distinct prime numbers r1 < r2 < · · · < rm. Define T0 = Q, and for
every j ≥ 1, let Tj be the extended field of Tj−1 with √rj. Take pj ∈ Tj \ Tj−1.
25

Lemma 1. Fix τ2 given in Equation (2) and a unique CKC. If Post(τ1) ⊆ Post(τ2), then for
every signal t ∈ Supp(τ1) there exists a signal s ∈ {s1, s2} and a constant c > 0 such that
τ1(t|ω) = cτ2(s|ω) for every ω ∈ Ω.
A.1.2 Unique CKC, characterization result from Part I
Theorem 5. Assume that Ω comprises a unique common knowledge component. Then, the
following are equivalent:
• F1 refines F2;
• F1 ⪰NE F2;
• For every τ2, there exists τ1, so that Post(τ1) ⊆ Post(τ2);
• For every τ2, there exists τ1, so that Post(τ1) = Post(τ2);
• For every τ2, there exists τ1, so that μτ1 = μτ2.
A.2 Proof of Theorem 1
Proof. One direction is straightforward. Assume, to the contrary, that Oracle 1 dominates
Oracle 2, but F1 does not refine F2 in some CKC. Denote this CKC by C1, and consider the set
of all games in which the payoffs of all players are zero in every ω ∈/ C1, independent of their
actions. Thus, Oracle 1 dominates Oracle 2 in every game restricted to C1, although F1 does
not refine F2 in C1. This contradicts the ket result from Part I (see Theorem 5 in Appendix
A.1.2).
Moving on to the second part, assume to the contrary that F1 refines F2 in every CKC, but
Oracle 1 does not dominate Oracle 2. Therefore, there exists a strategy τ2 such that Oracle 1
cannot produce the same distribution over posteriors as τ2.13 The proof now splits to 4 steps.
13Observe that the condition that Oracle 1 can generate the same distribution over posterior profiles as Oracle 2 implies that Oracle 1 dominates Oracle 2. To see this, consider any game and any signaling strategy τ . Since the players’ strategies depend on the profile of posteriors, we can then abstract away from the underlying private and public information and assume that the players play a Bayesian both Oracles can generate distributions over the profiles of posteriors, which can be generated -
by both Oracles.
26

Step 1: Mimicking sub-strategies.
We start by defining the notion of a sub-strategy, which resembles a strategy, but with
induced probabilities that may sum to less than 1. Formally, a partial distribution p ̃ is a
non-negative function from a finite subset of S to [0, 1] such that P
s∈S p ̃(s) ≤ 1. A partial
distribution differs from a distribution as the probabilities need not sum to 1. Let  ̃∆(S) be the
set of partial distributions on S, and define a sub-strategy τ : Ω →  ̃∆(S) as an F1-measurable
function from Ω to the set of partial distributions on S. That is, τ (s|ω) ≥ 0 and P
s τ (s|ω) ≤ 1,
for every ω and s. Evidently, every F1-measurable strategy is a sub-strategy.
For every sub-strategy τ and every p ∈ (∆(Ω))n, let Pτ (p) be the probability that τ yields
the posterior p, i.e.,
Pτ (p) =
X
(ω,s): τ (s|ω)>0, and (μi
τ |ω,s)i∈N =p
μ(ω)τ (s|ω). (3)
Similarly, define Pτ2(p) for every posterior p given the stated strategy τ2. We say that a sub
strategy τ mimics τ2 if
Pτ (p) ≤ Pτ2(p), for every p ∈ (∆(Ω))n. (4)
Hence, a sub-strategy τ mimics τ2 if, for every posterior p, the probability that τ generates
p does not exceed the probability that τ2 generates it. Note that the null sub-strategy (i.e.,
τ (s|ω) = 0 for every ω and s) also mimics τ2.
Consider any sub-strategy τ that mimics τ2. Because τ2 generates a finite set Post(τ2) of
possible posteriors, there exists a finite number of combinations of posteriors (which does not
exceed 2|Post(τ2)|) that every signal of τ supports. So, if some sub-strategy uses more than
2|Post(τ2)| signals, we can apply the pigeonhole principle to deduce that the additional signals
support similar combinations of posteriors as some other signals. Therefore, for every such
additional signal s, there exists another signal s′ and a constant c > 0 such that τ (s|ω) =
cτ (s′|ω) for every ω, and we can unify the two signals into one. We can thus assume that there
exists a finite set of signals S, such that every mimicking sub-strategy (i.e., that mimics τ2)
uses only signals from S.
27

Step 2: Optimal sub-strategies.
Let Aτ be the set of sub-strategies that mimic τ2. Note that the set of sub-strategies
supported on S is compact, and the (inequality) mimicking condition, Pτ (p) ≤ Pτ2(p) for every
p ∈ (∆(Ω))n, remains valid when considering a converging sequence of sub-strategies. Thus,
Aτ is also compact.
Consider the function H(τ ) = P
p∈Post(τ2) Pτ (p) defined from Aτ to [0, 1]. As a piece
wise linear function of τ , it is a continuous, so τ 1.0 = argmaxτ∈Aτ H(τ ) is well-defined. If
H(τ 1.0) = 1, then τ 1.0 is an F1-measurable strategy that mimics τ2. This contradicts the
original premise (that Oracle 1 cannot induce the same distribution over posteriors as τ2), so
assume to the contrary that τ 1.0 is a proper sub-strategy and H(τ 1.0) < 1. If that is the case
(i.e., if H(τ 1.0) < 1), there exists a posterior p∗ ∈ Post(τ2) so that Pτ1.0(p∗) < Pτ2(p∗).
Step 3: Partially supported and connected posteriors.
For every posterior p ∈ Post(τ2), let Ap = {ω ∈ Ω : pi(ω) > 0 for some player i} be the
set of states on which p is strictly positive, contained in some CKC denoted Cp. We say that a
posterior p ∈ Post(τ2) is partially supported (PS) if Pτ1.0(p) < Pτ2(p), otherwise we say that p
is fully supported (FS). Let us now prove a few supporting claims related to PS posteriors.
Claim 1: If p is PS, then P
s τ 1.0(s|ω) < 1 for every state ω ∈ Ap.
Proof. Fix a posterior p and a state ω0 such that (μi
τ|ω0,s)i∈N = p for some signal s and τ ∈
{τ 1.0, τ2}. There exists a constant αp,ω0, independent of s and τ , such that αp,ω0μ(ω0)τ (s|ω0) =
P
ω∈Ap\{ω0} μ(ω)τ (s|ω). This follows from the fact that, in order to induce the posterior p, the
probabilities induced by τ must maintain the same proportions along the different states in Ap,
independently of either the strategy or the signal. Otherwise, the induced posterior would not
28

match p. Thus, Equation (3) could be re-formulated as follows,
Pτ (p) =
X
(ω,s):(μi
τ |ω,s)i∈N =p
μ(ω)τ (s|ω)
=
X
s:(μi
τ |ω0,s)i∈N =p
μ(ω0)τ (s|ω0) +
X
(ω,s):ω∈Ap\{ω0}, and (μi
τ |ω,s)i∈N =p
μ(ω)τ (s|ω)
= (1 + αp,ω0)μ(ω0)
X
s:(μi
τ |ω0,s)i∈N =p
τ (s|ω0),
which translates to
X
s:(μi
τ |ω0,s)i∈N =p
τ (s|ω0) = Pτ (p)
(1 + αp,ω0)μ(ω0) .
Summing over all p ∈ Supp(τ2), we get
X
s
τ (s|ω0) = 1
μ(ω0)
X
p:(μi
τ |ω0,s)i∈N =p, for some s
Pτ (p)
(1 + αp,ω0) . (5)
Note that the RHS holds for either τ 1.0 or τ2.
Now assume, by contradiction, that p0 is a PS posterior and P
s τ 1.0(s|ω0) = 1 for some
state ω0 ∈ Ap0. Using Equation (5), for both τ2 and τ 1.0, we get
1=
X
s
τ2(s|ω0) = 1
μ(ω0)
X
p:(μi
τ2|ω0,s)i∈N =p, for some s
Pτ2 (p)
(1 + αp,ω0 )
1=
X
s
τ 1.0(s|ω0) = 1
μ(ω0)
X
p:(μi
τ 1.0|ω0,s)i∈N =p, for some s
Pτ1.0 (p)
(1 + αp,ω0) ,
which implies that
X
p:(μi
τ2|ω0,s)i∈N =p, for some s
Pτ2 (p)
(1 + αp,ω0) =
X
p:(μi
τ 1.0|ω0,s)i∈N =p, for some s
Pτ1.0 (p)
(1 + αp,ω0) <
X
p:(μi
τ2|ω0,s)i∈N =p, for some s
Pτ2 (p)
(1 + αp,ω0) ,
where the strict inequality follows from the fact that Pτ1.0(p) ≤ Pτ2(p) for every posterior p,
29

with a strict inequality for p = p0. This yields a contradiction, and the result follows.
Claim 2: If P
s τ 1.0(s|ω) < 1 for some state ω, then there exists a PS posterior p such that
ω ∈ Ap.
Proof. Assume, to the contrary, that P
s τ 1.0(s|ω0) < 1 for some state ω0, and every posterior
p such that ω0 ∈ Ap is FS. Using Equation (5), we deduce that
1=
X
s
τ2(s|ω0)
=1
μ(ω0)
X
p:(μi
τ2|ω0,s)i∈N =p, for some s
Pτ2 (p)
(1 + αp,ω0)
=1
μ(ω0)
X
p:(μi
τ 1.0|ω0,s)i∈N =p, for some s
Pτ1.0 (p)
(1 + αp,ω0)
=
X
s
τ 1.0(s|ω0) < 1,
where the first equality follows from the fact that τ2 is a strategy, the second and fourth
equations follow from Equation (5), the third equality follows from the fact that every posterior p
such that ω0 ∈ Ap is FP, and the last inequality is by assumption. We thus reach a contradiction,
and the result follows.
We will use Claims 1 and 2 to extend τ 1.0, and show that it cannot be a maximum of H. For
this purpose we need to define the notion of connected posteriors. Formally, we say that two
posteriors p, p′ ∈ Post(τ2) are connected if there exist two states (ω, ω′) ∈ Ap × Ap′ ⊆ Cp × Cp′,
where Cp ̸= Cp′ are two distinct CKCs, such that F1(ω) = F1(ω′). Equivalently, in such a
case, we refer to Cp and Cp′ as connected, as well. Let (ω, ω′) and F1(ω) be the connection and
connecting set of p and p′, respectively.14 We can now relate the notion of connected posteriors
to PS ones through the following claim.
Claim 3: Fix a PS posterior p and ω ∈ Ap. Then, for every connection (ω, ω′), there exists a
PS posterior p′ such that ω′ ∈ Ap′ ∩ F1(ω).
14Equivalently, we refer to (ω, ω′) and F1(ω) as the connection and connecting set of the CKCs Cp and Cp′ .
30

Proof. Let p be a PS posterior with a connection (ω, ω′) and F1(ω) = F1(ω′). Using Claim 1,
if p is PS, then P
s τ 1.0(s|ω) < 1 for every ω ∈ Ap, so the F1-measurability constraint implies
that P
s τ 1.0(s|ω′) < 1. Thus, according to Claim 2, there exists a PS posterior p′ such that
ω′ ∈ Ap′, as needed.
Step 4: Extending τ 1.0.
Recall that p∗ is a PS posterior. Let V be the set of all CKCs Cl such that there exists a
sequence of PS posteriors (p∗, p1, . . . , pl) where every two successive posteriors are connected
and Apl ⊆ Cl. Assume that V also contains Cp∗. Let E ⊆ V 2 be the set of couples (C, C′) such
that C and C′ are connected, and denote by P∗ the set of all PS connected posteriors that
generate V . Clearly, (V, E) is a connected graph and we can use it to construct a sub-strategy τ
which mimics τ2 and Post(τ ) = P∗. The proof proceeds by induction on the number of vertices
in V .
Preliminary step: |V | = 1. Assume that Cp∗ is the unique CKC in V . Because p∗ ∈ Post(τ2),
there exists a signal s∗ and state ω ∈ Cp∗ such that τ2(s∗|ω) > 0 and (μi
τ2|ω,s∗ )i∈N = p∗. Define
the sub-strategy τ 1.1(s|ω) = τ2(s∗|ω) for every ω ∈ Ap∗. Recall that F1 refines F2 in every CKC,
therefore τ 1.1 is well defined. Moreover, it is a sub-strategy that mimics τ2 and Post(τ 1.1) = P∗,
as needed.
Induction step: |V | = m. Assume that for every graph (V, E) where |V | = m, there exists a
sub-strategy τ 1.m that mimics τ2, and Post(τ 1.m) = P∗.
Induction proof for |V | = m + 1. Assume that |V | = m + 1. The distance between Cp∗ and
every vertex (i.e., every CKC) in V is defined by the shortest path between the two vertices.
Denote by Cm+1 the vertex in (V, E) with the longest path from Cp∗.
We argue that Cm+1 has exactly one connecting set with the other vertices. Otherwise,
assume that there are at least two connecting sets. If the two originate from the same CKC in
V , then we get an F1-loop, which cannot exist. Thus, we can assume that the two sets originate
from different CKCs, denoted C and C′. Since (V, E) is a connected graph, there exists a path
from Cp∗ to each of these CKCs. Consider the two sequences of connecting sets for these two
31

paths. If the two are pairwise disjoint, then we have an F1-loop from Cp∗ to Cm+1, which again
yields a contradiction. So the sequences must coincide at some stage. Take a truncation of the
sequences from the last stage in which they coincide until Cm+1. The origin of the two paths are
connected CKCs (sharing the same connecting set), denoted Cl and Cl+1, so we now have two
pairwise disjoint sequences between these two connected CKCs till Cm+1, thus generating an
F1-loop. Therefore, we conclude that there is exactly one connecting set, denoted A, between
Cm+1 and the other CKCs in V .
Consider a refinement of F1 where A is partitioned into two disjoint sets, A1 = A \ Cm+1
and A2 = A ∩ Cm+1. In such a case, |V | = m and, according to the induction step, there exists
a mimicking sub-strategy τ 1.m supported on every PS connected posterior in P∗ other than the
ones related to the CKC Cm+1. Let pm+1 denote a PS posterior such that A2 ⊂ Apm+1 ⊆ Cm+1.
In case there is more than one PS posterior, the proof works similarly because every additional
posterior shares the same connecting set A.
According to the induction step, Post(τ 1.m) = P∗ \ {pm+1}, so we need to extend this
sub-strategy to support pm+1 as well. Since pm+1 ∈ Post(τ2), there exists a signal, denoted
s∗ w.l.o.g., and states ω ∈ Apm+1 ⊆ Cm+1 such that τ2(s∗|ω) > 0 and (μi
τ2|ω,s∗ )i∈N = pm+1.
Moreover, because Cm+1 is not connected (neither directly, nor indirectly) to the other CKCs in
V under the refined F1, we can assume that P
s τ 1.m(s|A1) > P
s τ 1.m(s|A2). Otherwise, we can
re-scale τ 1.m in the different unconnected elements of the refined F1. Hence, we can also assume
that there exists a signal, again denoted s∗ w.l.o.g., such that τ 1.m(s∗|A1) > 0 = τ 1.m(s∗|A2).
Define the following function
τ 1.m+1(s|ω) =

 
 
cmτ 1.m(s|ω), for every (ω, s) s.t. τ 1.m(s|ω) > 0,
c2τ 2(s∗|ω), for every (ω, s) s.t. ω ∈ Apm+1, s = s∗,
where the parameters cm > 0 and c2 > 0 are chosen to ensure that τ 1.m+1(s∗|A1) = τ 1.m+1(s∗|A2),
thus sustaining the F1-measurability constraint across the connecting set A, and that τ 1.m+1
remains a sub-strategy that mimics τ2 (ensuring that P
s τ (s|ω) ≤ 1 for every s and ω and the
that Inequality (4) holds). In conclusion, we constructed a sub-strategy that mimics τ2 and
whose support is P∗, and this concludes the induction.
32

Let τ 1∗ be the sub-strategy that mimics τ2 and Pτ1∗(p) > 0 if and only if p ∈ P∗. Assume
that τ 1∗ only uses signals in some set S∗, that are not used by τ 1.0 (i.e., S∗ ∩ S = φ). Define
the following sub-strategy
τ 2.0(s|ω) =

 
 
τ 1.0(s|ω), for every (ω, s) s.t. τ 1.0(s|ω) > 0,
cτ 1∗(s|ω), for every (ω, s) s.t. τ 1∗(s|ω) > 0,
where c is a constant. Since τ 1∗(s|ω) supports only PS posteriors of τ 1.0, for every state
ω where there exists a PS posterior p of τ 1∗(s|ω) such that ω ∈ Ap, it follows from Claim
1 that P
s∈S τ 1.0(s|ω) < 1. Therefore, by choosing c sufficiently small, we can ensure that
P
s∈S∪S∗ τ 2.0(s|ω) = P
s∈S τ 1.0(s|ω) + c P
s∈S∗ τ 1∗(s|ω) < 1. Hence, for the extended strategy
τ 2.0(s|ω), we can guarantee that for every ω ∈ Ω, P
s∈S∪S∗ τ 2.0(s|ω) ≤ 1. We conclude that τ 2.0
is a sub-strategy that mimics τ2 and H(τ 2.0) > H(τ 1.0) due to the extension over PS posteriors.
This contradicts the definition of τ 1.0 as a mimicking sub-strategy that maximizes H. We can
thus conclude that H(τ 1.0) = 1, and τ 1.0 is an F1-measurable strategy that mimics τ2, as needed.
A.3 Proof of Proposition 1
Proof. iii ⇒ i. Suppose that (ω1, ω1, ω2, ω2, . . . , ωm, ωm) is not F2-balanced. It means that
there is a partition {A, B} s.t. #(A → B) ̸= #(B → A). Define
f (ω) =



1, if ω ∈ A,
2, if ω ∈ B.
We obtain,
m
Y
i=1
f (ωi)
f (ωi) = 1
2
#(A→B)
· 2#(B→A) ̸= 1.
This contradicts iii.
i ⇒ ii. Assume i . For every i, let Di = {ωj; ωj ∈ F2(ωi)} ∪ {ωj; ωj ∈ F2(ωi)} be
the set which contains all the states in the loop that share the same information set of F2
33

as ωi. Condition i implies that for every ωi, the partition A = Di and B = (Di)c satisfies
#(A → B) = #(B → A). Note that |{ωj; ωj ∈ F2(ωi)}| = #(A → B) + #(A → A), and
|{ωj; ωj ∈ F2(ωi)}| = #(B → A) + #(A → A), where #(A → A) = |{i ∈ {1, ..., m}; ωi ∈
A, ωi ∈ A}|. It follows from #(A → B) = #(B → A) that
|{ωj; ωj ∈ F2(ωi)}| = |{ωj; ωj ∈ F2(ωi)}| (6)
for every ωi.
Define J = {i; ωi ∈ F2(ωi)}. We show that the rest of the states are decomposed into
F2-loops. Specifically, we show that if a finite set S = {(ωj, ωj); ωj ∈/ F2(ωj)}, not necessarily
an F1-loop, satisfies Eq. (6) for every ωi ∈ S, then it is covered by F2-loops.
When |S| = 2, Eq. (6) implies that this is an F2-loop. We now assume the induction
hypothesis: if Eq. (6) is satisfied for a set S = {(ωj, ωj)} and for every ωi ∈ S, and S contains
less than or equal to m pairs, then it is covered by F2-loops. We proceed by showing this
statement for sets S containing m + 1 pairs.
We start at an arbitrary pair, say (ω1, ω1), and show that it belongs to an F2-loop. Once
this F2-loop is formed, the states outside of this loop satisfy Eq. (6) for every ωi outside of this
loop. By the induction hypothesis, this set is covered by F2-loops.
Due to Eq. (6), there is at least one ωj such that ωj ∈ F2(ω1). Consider now the two pairs,
(ωj, ωj, ω1, ω1). If this is a loop, Eq. (6) remains true when applied to the states out of this loop.
The induction hypothesis completes the argument. Otherwise, there is ωk where k ̸= 1, j, such
that ωk ∈ F2(ωj). Consider now the three pairs, (ωk, ωk, ωj, ωj, ω1, ω1). If this is an F2-loop,
the other states satisfy Eq. (6), and as before, this set is covered by F2-loops. However, if this
is not an F2-loop, Eq. (6) remains true, we annex another pair and continue this way until we
obtain an F2-loop. This loop might cover the entire set, but if not, the remaining states are,
by the induction hypothesis, covered by F2-loops. This shows ii.
ii ⇒ iii. Let f : ω1, ω1, ω2, ω2, . . . , ωm, ωm → (0, ∞) be a positive and F2-measurable
function. Suppose that I1, ..., Ir is a partition of {1, ..., m}, and for each t = 1, ..., r, the set
34

(ωi, ωi)
i∈It
is an F2-loop. Since, (ωi, ωi)
i∈It
is an F2-loop,
Y
i∈It
f (ωi)
f (ωi) = 1,
which implies that
m
Y
i=1
f (ωi)
f (ωi) =
r
Y
t=1
Y
i∈It
f (ωi)
f (ωi) = 1.
This proves iii.
A.4 Proof of Proposition 2
Proof. Fix an Fi-loop Li = (ωj, ωj)
j∈I
where I = {1, 2, . . . , m}. Let Cj denote the CKC that
contains every pair (ωj, ωj).
Proof for first statement: Assume that Li intersects the same CKC at least twice, so
that Cl1 = Cl2, where l1 < l2, is such CKC. Because Li is a loop, the two pairs (ωl1, ωl1)
and (ωl2, ωl2) that are in this CKC cannot be adjacent in the loop Li, i.e., l1 ̸= l2 ± 1. De
fine the following sub-loop of Li by omitting every state from ωl1 to ωl2. Formally, L′
i=
(ω1, ω1, . . . , ωl1−1, ωl1, ωl2, ωl2+1, . . . , ωm, ωm). This is a well-defined sub-loop of Li (as ωl1, ωl2 ∈
Cl1 while all other parts of the sub-loop match those of Li), which implies that Li is not ir
reducible. Note that the part we truncated from the loop Li also forms a sub-loop, namely
L′′
i = (ωl2 , ωl1 , ωl1+1, ωl1+1, . . . , ωl2−1, ωl2−1).
Proof for second statement: Assume, by contradiction, that Li is irreducible, yet it has
a pair of states (ωl, ωl) such that ωl ∈ Fi(ωl). This implies that {ωl−1, ωl, ωl, ωl+1} ⊆ Fi(ωl) =
Fi(ωl+1). We can assume that Cl−1 ̸= Cl+1, otherwise the first statement suggests that Li is not
irreducible. So, define the following sub-loop of Li by L′
i = (ωj, ωj)
j ∈I \{l}
. Note that L′
i is
a well-defined sub-loop, as Cl−1 ̸= Cl+1 and ωl−1 ∈ Fi(ωl+1), thus contradicting the irreducible
property.
Proof for third statement: Assume, w.l.o.g., that Fi(ω1) ̸= Fi(ω1). If Li intersects
the same CKC twice, then we can follow the proof of the first statement, truncate the loop,
and take a sub-loop that has an informative pair of states and intersects every CKC at most
35

once. Thus, w.l.o.g., assume that Li intersects every CKC at most once. Denote the set of
informative pairs by Ic = {j : Fi(ωj) ̸= Fi(ωj)} and define the following ordered sub-loop of
Li by L′
i = (ωj, ωj)
j∈Ic. In simple terms, L′
i is generated from Li by truncating all non
informative pairs (ωj, ωj), where Fi(ωj) = Fi(ωj), similarly to the process used in the proof of
the second statement. Focusing on L′
i, note that: (i) all pairs are pairwise disjoint; (ii) every
CKC is crossed at most once; (iii) ωj+1 ∈ Fi(ωj) as we removed only non-informative pairs;
and (iv) ωj ̸= ωj are both in the same CKC as in the original loop. Hence, L′
i is a well-defined
loop and an Fi-fully-informative sub-loop of Li.
Proof of fourth statement: If the loop Li is irreducible, then the statement holds.
Otherwise, it is not irreducible and we will prove by induction on the number of pairs m in L1.
If m = 2, then Li is irreducible. If m = 3 and Li is not irreducible, then it has a sub-loop with
two pairs. Assume w.l.o.g. that this sub-loop is based on the states {ω1, ω1, ω2, ω2}. It cannot
be that Fi(ω1) = Fi(ω2), because that would make (ω2, ω2) a non-informative pair. So the
sub-loop is (ω1, ω1, ω2, ω2) such that Fi(ω1) = Fi(ω2), but Fi(ω1) = Fi(ω3) and Fi(ω2) = Fi(ω3),
so the pair (ω3, ω3) is non-informative.
Assume the statement holds for m = k pairs, and consider an Li loop with k +1 pairs. If the
loop intersects the same CKC more than once, we can split is to two sub-loops (as previously
done), and use the induction hypothesis for each. Hence, we can assume that the loop does not
intersect the same CKC twice.
Because the loop is not irreducible, there are two states ωi1 and ωi2 that are not adjacent
in the loop (so i1 ≥ i2 + 2), yet Fi(ωi1) = Fi(ωi2). The last equality also suggests that
Fi(ωi1−1) = Fi(ωi2+1). If i1 = i2 + 2, then there exists only one pair between the two states.
This implies that the pair (ωi2+1, ωi2+1) = (ωi1−1, ωi1−1) is non-informative, contradicting the
fact that Li is Fi-fully-informative. So we conclude that i1 ≥ i2 + 3. Define the following two
loops L′
i = (ωi1, ωi1, . . . , ωi2, ωi2) and L′′
i = (ωi2+1, ωi2+1, . . . , ωi1−1, ωi1−1), where the ordering
of states follows the original loop Li. These are two well-defined Fi-loops with less than k + 1
pairs each, so the induction hypothesis holds and the result follows.
If Li does not intersect the same CKC more than once and does not have at least 4 states
in the same partition element, then it is irreducible.
36

Proof of fifth statement: If the loop has a non-informative pair ωj ∈ Fi(ωi), then it
contains 4 states from the same partition element, so assume that the loop is Fi-fully-informative
and that it does not intersect the same CKC more than once. Thus, we need to prove that it
has at least 4 states in the same partition element of Fi.
Consider the strict sub-loop L−
i of Li. It consists of pairs, taken from the original loop.
Because Li does not intersect the same CKC more than once, all the pairs of L−
i are a strict
subset of the pairs of Li. This implies that some pairs were omitted from Li when generating
L−
i , so assume w.l.o.g. that the pair {ω1, ω1} is not included in L−
i . This implies that one
pair {ωj, ωj} precedes in L−
i a different one that it precedes in Li. That is, Fi(ωj) = Fi(ωj+1)
according to Li, whereas Fi(ωj) = Fi(ωk) where k ̸= j + 1, according to L−
i . But also Fi(ωk) =
Fi(ωk−1) according to Li. Thus, {ωj, ωj+1, ωk, ωk−1} are in the same partition element of Li, as
stated and the result follows.
A.5 Proof of Theorem 2
Proof. Suppose that Oracle 1 dominates Oracle 2. If there exists a CKC in which F1 does not
refine F2, Theorem 5 from Part I (see Appendix A.1.2) states that Oracle 1 does not dominate
Oracle 2 in that CKC. In other words, there exists τ2 defined on this CKC, such that for every
τ1, it follows that Post(τ1) ⊈ Post(τ2). We extend the definition of τ2 to the entire state space
in an arbitrary way, and still for every τ1, it follows that Post(τ1) ⊈ Post(τ2), and we can follow
the results of Part I accordingly (specifically, the game of beliefs and Proposition 3 therein).
We proceed to show that any F1-loop is F2-balanced, which is equivalent to the existence
of a cover by loops of F2. Suppose, to the contrary, that an F1-loop (ω1, ω1, ω2, ω2, . . . , ωm, ωm)
is not F2-balanced. This means that there is an F2-measurable partition {A, B} of these states
such that Eq. (1) is not satisfied. We define an F2-measurable signaling function that obtains
two signals, α and β. Over the states of the loop, let
τ2(α|ω) =

 
 
x, if ω ∈ A,
y, if ω ∈ B,
(7)
37

and τ2(β|ω) = 1 − τ2(α|ω). On other states, τ2 is defined arbitrarily. The numbers x, y ∈ (0, 1)
are chosen so that ln x−ln y
ln (1−x)−ln (1−y) is irrational.
Claim 1: If Post(τ1) ⊆ Post(τ2), then any signal of τ1 induces the same posteriors as α does
or as β does in every CKC.
Claim 2: For any signal s of τ1 and for any i, τ1(s|ωi)
τ1(s|ωi) ∈ { x
y , 1−x
1−y , y
x , 1−y
1−x } . Therefore,
m
Y
i=1
τ1(s|ωi)
τ1(s|ωi) = x
y
l1
· 1−x
1−y
l2
·y
x
k1
· 1−y
1−x
k2
,
where l1 + l2 = |{i; ωi ∈ A and ωi ∈ B}| and k1 + k2 = |{i; ωi ∈ B and ωi ∈ A}|.
Claim 3: For any signal s of τ1, Qm
i=1
τ1(s|ωi)
τ1(s|ωi) = 1.
We therefore obtain ( x
y )l1 ( 1−x
1−y )l2 ( y
x )k1 ( 1−y
1−x )k2 = 1. We conclude that there are whole num
bers, say l = l1 − k1 and k = k2 − l2 such that ( x
y )l = ( 1−x
1−y )k. Since ln x−ln y
ln (1−x)−ln (1−y) = ln x
y ln 1−x
1−y
is irrational, l = k = 0, implying that Eq. (1) is satisfied. This is a contradiction, so every
F1-loop is F2-balanced.
Moving on to the third part of the theorem, fix an irreducible F1-loop L1, and consider an
irreducible cover by a unique F2-loop L2, i.e., L2 covers L1 and both are irreducible w.r.t. the
relevant partition. Note that if L2 is also order-preserving, it implies that it matches L1.
Assume, by contradiction, that L2 is not order-preserving and the two loops do not match
one another. Denote L1 = (ω1, ω1, . . . , ωm, ωm) and L2 = (ω1, ω1, ωi2, ωi2, . . . , ωim, ωim). Thus,
there exist indices k > j > 1 such that ωk precedes ωj in L2. In simple terms, it implies that
though L2 consists of the same pairs as L1, the ordering of pairs throughout the two loops
differs, as suggested in Footnote 10.
Since the two loops are irreducible, it follows from Proposition 2 that they intersect every
CKC at most once and that both are fully-informative. Moreover, for every state ω in every loop
Li, every set Fi(ω) contains two states from the loop Li (otherwise, the loop is not irreducible).
So, one can define an Fi-measurable function τi such that τi(s|ωl) = τi(s|ωl−1) ̸= τi(s|ωl′) for
every ωl ̸= ωl′ in the loop.
To simplify the exposition, partition the states of L2 into three disjoint sets: the set A2
1=
38

{ω1, . . . , ωk} contains all the states of L2 from ω1 till ωk (following the order of L2), A2
k=
{ωk, . . . , ωj} contains all the states of L2 from ωk till ωj, and A2
j = {ωj, . . . , ω1} which contains
all remaining states of L2. Follow a similar process with L1, so that A1
1 = {ω1, . . . , ωj} contains
all the states of L1 from ω1 till ωj (following the order of L1), A1
j = {ωj, . . . , ωk} contains all
the states of L1 from ωj till ωk, and A1
k = {ωk, . . . , ω1} which contains all remaining states of
L1.
Denote by Cl the CKC of the pair (ωl, ωl). Fix two distinct signals s1 and s2, and define
the signaling function τ2 as follows:
τ2(s1|ω) = 1 − τ2(s2|ω) =

        
        
p1, if ω ∈ A2
1 = {ω1, . . . , ωk},
p2, if ω ∈ A2
k = {ωk, . . . , ωj},
p3, if ω ∈ A2
j = {ωj, . . . , ω1},
p4, if ω ∈ Ω \ S
i=1,j,k A2
i,
where the probabilities {p1, p2, p3, p4} are chosen as in the strategy defined in Equation (2).
Because the loop is irreducible, intersects every CKC at most once and F2-fully-informative, τ2
is a well-defined F2-measurable function.
The result of Lemma 1 from Part I (see Appendix A.1.1) holds in every CKC of the loop
(though with different probabilities). So given a CKC Cl, if there exists τ1 such that Post(τ1) ⊆
Post(τ2), then for every signal t ∈ Supp(τ1) there exists a signal s ∈ {s1, s2} and a constant
c > 0 such that τ1(t|ω) = cτ2(s|ω) for every ω ∈ Cl. Therefore, in every CKC Cl and for every
signal t, there exists a signal s such that τ2(s|ωl)
τ2(s|ωl) = τ1(t|ωl)
τ1(t|ωl) . Fix such a strategy τ1.
Notice that in every CKC Cl ̸= C1, Cj, Ck and for every signal s ∈ {s1, s2}, we get τ2(s|ωl) =
τ2(s|ωl). Thus, τ1(t|ωl)
τ1(t|ωl) = 1 for every t and every l ̸= i, j, k. This implies that for every feasible
signal t restricted to the loop L1,
τ1(t|ω) =

     
     
at, if ω ∈ A1
1 = {ω1, . . . , ωj},
bt, if ω ∈ A1
j = {ωj, . . . , ωk},
ct, if ω ∈ A1
k = {ωk, . . . , ω1},
39

where at, bt, ct ∈ (0, 1]. Evidently, the parameters at, bt, and ct can vary across the feasible
signals.
In addition, Lemma 1 from Part I (see Appendix A.1.1) states that in every CKC, τ1(t|ω)
is proportional to τ2(si|ω) for some signal si ∈ {s1, s2}. This yields the following constraints:
τ1(t|ω1)
τ1(t|ω1) = ct
at
= τ2(si|ω1)
τ2(si|ω1) ∈
n p3
p1
, 1 − p3
1 − p1
o
,
τ1 (t|ωj )
τ1(t|ωj) = at
bt
= τ2(si|ωj)
τ2(si|ωj) ∈
n p2
p3
, 1 − p2
1 − p3
o
,
τ1(t|ωk)
τ1(t|ωk) = bt
ct
= τ2(si|ωk)
τ2(si|ωk) ∈
n p1
p2
, 1 − p1
1 − p2
o
.
Because the two loops cover one another and specifically because L2 is F1-covered, Proposition
1 states that Qm
l=1
τ1(t|ωil )
τ1(t|ωil) = 1, which leaves only two possibilities for the ratios { ct
at , at
bt , bt
ct }
above: either they equal { p3
p1 , p2
p3 , p1
p2 } respectively, or { 1−p3
1−p1 , 1−p2
1−p3 , 1−p1
1−p2 }. This follows from the
uniqueness of the ratios, as stated in Lemma 1 from Part I (see Appendix A.1.1). Note that
this must hold for every feasible signal t of τ1 across the loop.
τ1(t|ω) t1 t2
ω1 λ1c1 λ2c2
ω1 λ1a1 λ2a2
ωj λ1a1 λ2a2
ωj λ1b1 λ2b2
ωk λ1b1 λ2b2
ωk λ1c1 λ2c2
Figure 12: The structure of τ1 restricted to the states {ω1, ω1, ωj, ωj, ωk, ωk}, where c1
a1 = p3
p1 , b1
c1 = p1
p2 , c2
a2 = 1−p3
1−p1
and b2
c2 = 1−p1
1−p2 and λ1, λ2 > 0.
Thus, if we focus on the states {ω1, ω1, ωj, ωj, ωk, ωk} and group together all signals t with
the same distribution on these states, then for some positive constants λ1, λ2 > 0 we get the
strategy defined in Figure 12. Plugging in the relevant ratios yields the probabilities given in
Figure 13.
Recall that the rows must sum to 1, so that τ1 is a well-defined strategy. So, we get the
40

τ1(t|ω) t1 t2
ω1 λ1c1 λ2c2
ω1 λ1c1
p1
p3 λ2c2
1−p1 1−p3 ωj λ1c1
p1
p3 λ2c2
1−p1 1−p3 ωj λ1c1
p1
p2 λ2c2
1−p1 1−p2
Figure 13: The structure of τ1 restricted to the states {ω1, ω1, ωj, ωj}, where probabilities are presented in terms of c1, c2, λ1 and λ2.
following system of linear equations, in which (x, y) = (λ1c1, λ2c2) and:
x + y = 1,
p1
p3
x + 1 − p1
1 − p3
y = 1,
p1
p2
x + 1 − p1
1 − p2
y = 1,
which does not have a solution since p1, p2, p3 are required to be distinct. Thus, we conclude
that the loops must sustain the same ordering of pairs, and therefore coincide as needed. This
concludes the third and final part of the theorem.
A.6 Proof of Theorem 3
Proof. We first define an auxiliary set Ω, which groups together states that are in the same
partition element of F2 within CKCs. Formally, define the set Ω such that η(ω′) ∈ Ω if and only
if η(ω′) = {ω ∈ Ω : ω, ω′ ∈ Cj, F2(ω) = F2(ω′)}. Accordingly, define the partition F2 to be
discrete in every CKC, such that F2(η(ω)) = F2(η(ω′)) if and only if F2(ω) = F2(ω′). Note that
F2 is essentially a projection of F2 onto Ω. In addition, F1 is defined as follows: (i) discrete in
every CKC, similarly to F2; (ii) F1(η(ω)) = F1(η(ω′)) if ω and ω′ are not in the same CKC, and
there exist ω ∈ η(ω) and ω′ ∈ η(ω′) such that F1(ω) = F1(ω′); and (iii) F1 forms a partition
(i.e., given (i) and (ii), if two elements of F1 contain the same state η(ω), they are unified into
one element).
We now prove that F1 = F2 in every CKC and that there are no F1-loops. Thus, by Theorem
1, any F2-measurable strategy τ2 (which, extended to Ω, is also F2-measurable) can be imitated
by an F1-measurable strategy τ1.
41

Step 1: F1 = F2 in every CKC.
By definition, F2 refines F1, so we need to prove that F1 also refines F2 in every CKC.
Assume, by contradiction, that F1(η(ω)) = F1(η(ω′)) where ω and ω′ are in the same CKC,
whereas F2(η(ω)) ̸= F2(η(ω′)). This suggests that F2(ω) ̸= F2(ω′), which implies that F1(ω) ̸=
F1(ω′). According to the construction of F1, we conclude that the equality F1(η(ω)) = F1(η(ω′))
followed from the partition-formation stage described in (iii) above, through at least one other
CKC. Thus, there exists an F1-loop which connects a state in η(ω) with a state in η(ω′).
Without loss of generality, assume these states are ω and ω′. Because every F1-loop is F2-non
informative, it follows that F2(ω) = F2(ω′), a contradiction.
Step 2: There are no F1-loops.
An F1-loop implies that an F1-loop exists. By construction, all Ω states in every CKC
are F2-equivalent (i.e., grouped together according to F2). Because every F1-loop is F2-non
informative, it implies that the loop consists of only one Ω state in every CKC, and not two.
This contradicts the definition of a loop.
Step 3: F1 can mimic F2.
Fix a strategy τ2, and let τ2 be the projected strategy on Ω. Because F1 = F2 in every
CKC and there are no F1-loops, there exists an F1-measurable strategy τ1 that imitates τ2.
Therefore, one can lift τ1 to Ω to create τ1, whose projection onto Ω matches τ1. Thus, the
strategy τ1 imitates τ2, as needed.
A.7 Proof of Proposition 3
Proof. Denote the two CKCs by C1 and C2. One part of the statement follows directly from
Theorem 2, so assume that F1 refines F2 in every CKC and any F1-loop is F2-balanced. If there
are no F1-loops, then the result follows from Theorem 1, so assume there exists at least one
F1-loop, and every such loop is F2-balanced.
Take any F1-loop (ω1, ω1, ω2, ω2) with four states. We argue that either it is also an F2-loop
or it is F2-non-informative. Otherwise, we can assume (without loss of generality) that F2(ω1) ̸=
F2(ωi), for every i = 1, 2. So, there are only two possibilities left: either F2(ω1) = F2(ω2) or
F2(ω1) ̸= F2(ω2). If F2(ω1) = F2(ω2), then there exists an F2-measurable partition of the four
42

states such that A = {ω1, ω2} and B = {ω1, ω2}, which is not balanced. Otherwise, there exists
another non-balanced F2-measurable partition of the form A = {ω1} and B = {ω1, ω2, ω2}. In
any case, we get a contradiction.
The proof now splits into two cases: either there exists an F1-loop (ω1, ω1, ω2, ω2) and an
index i such that F2(ωi) ̸= F2(ωi), or every such loop is F2-non-informative. If indeed every
such loop is F2-non-informative, Theorem 3 states that Oracle 1 dominates Oracle 2, so we
need only focus on the former.
Assume that there exists an F1-loop (ω1, ω1, ω2, ω2) and an index i such that F2(ωi) ̸= F2(ωi).
Denote this couple by {ω1, ω1} ⊆ C1. The previous conclusion implies that it is also an F2-loop.
We claim that, under these conditions, every τ2 is F1-measurable. Note that F1 refines F2 in
every CKC, so we need to verify that for every (ω, ω) ∈ C1 × C2 such that F1(ω) = F1(ω), it
follows that F2(ω) = F2(ω).
Take (ω, ω) ∈ C1 × C2 such that F1(ω) = F1(ω). If ω = ω1 or ω = ω1, then (ω, ω) are
part of the previously stated F2-loop, so F2(ω) = F2(ω). Otherwise, we can construct two new
F1-loops (ω, ω, ω1, ω2) and (ω, ω, ω2, ω1). Because F2(ω1) ̸= F2(ω1), either F2(ω) ̸= F2(ω1) or
F2(ω) ̸= F2(ω1). The previous conclusion again implies that (ω, ω) are a apart of an F2-loop,
so F2(ω) = F2(ω), as needed.
A.8 Proof of Theorem 4
Proof. We start by assuming that F1 and F2 are equivalent. According to Theorem 2, every
Fi refines F−i in every CKC, and every Fi-loop is covered by F−i-loops. Fix an irreducible
Fi-loop with at least 6 states, denoted Li, and consider a cover by F−i-loops. There are two
possibilities: either the cover constitutes a single loop, or else. If the cover contains a shorter
loop, say L′
−i, then that loop is not Fi-covered because Li is irreducible, and this contradicts
Theorem 2. Moreover, the cover cannot have non-informative pairs where F−i(ωi) = F−i(ωi),
because the two partitions match one another in every CKC and Li is irreducible. So, the cover
consists of a single irreducible F−i-loop, and Theorem 2 states that it is order-preserving. Thus,
Li and L−i coincide as stated.
Moving to the other direction, assume that Fi refines F−i in every CKC, that any Fi-loop
43

has a cover of F−i-loops, and every irreducible Fi-loop with at least 6 states is an irreducible
F−i-loop. Let us prove that Oracle 1 dominates Oracle 2 (and the reverse dominance follows
symmetrically).
We start with two simple observations. First, in case F1 has no loops, then the statement
follows from previous results, so assume F1 has loops. Second, we say that two CKCs C1 and
C2 are connected if there exist ω1 ∈ C1 and ω2 ∈ C2 such that F1(ω1) = F1(ω2). If there exists
a CKC C which is not connected to any other CKC (i.e., for every ω ∈ C, the partition element
F1(ω) ⊆ C), then Oracle 1 dominates Oracle 2 conditional on that CKC and independently of
all other CKCs. Thus, without loss of generality, we can assume that all CKCs are connected,
either directly or sequentially.
For this part, we will need to define the notion of type-2 irreducible loops, which are fully
informative loops that do not have four states in the same information set of the relevant
Fi.
Definition 8. Let Li be an Fi-loop. We say that the loop is type-2 irreducible if it does not
have four states in the same information set (i.e., partition element) of Fi.
We shall use this notion of type-2 irreducible F1-loops as building blocks upon which every
F2-measurable τ2 is also F1-measurable. For that purpose, we start by proving in the following
Claim 1 that every type-2 irreducible F1-loop is also an F2-loop. Next, we will extend this
measurability result to every set of type-2 irreducible F1-loops that intersect the same CKCs,
and finally extend it to all CKCs that these loops intersect. This sets of CKCs, to be later
defined as clusters, will be the basic sets upon which every F2-measurable strategy is also
F1-measurable.
Claim 1. Every type-2 irreducible F1-loop L1 is an F2-loop.
Proof. If L1 is irreducible, then it is also an irreducible F2-loop, and the result holds. Thus
assume that L1 is not irreducible. Using the fifth result in Proposition 2, we deduce that L1
intersects the same CKC more than once. Using the proof of the first result in Proposition 2,
we can decompose L1 into two disjoint strict sub-loops of F1. This can be done repeatedly, so
that L1 is decomposed into sub-loops that do not intersect the same CKC more than once. This
44

implies that every such loop is type-2 irreducible. Thus, every such sub-loop is irreducible, and
so it is also an F2-loop.
Note that the decomposition process occurs within every relevant CKC C and that F1|C =
F2|C. That is, once there are two pairs of the same loop within the same CKC, we can decompose
the loop into two disjoint loops by rearranging these four states. So, one can reverse the process
and recompose the sub-loops of F2 to regenerate the original loop L1, which is now also an F2
loop, as needed.
Once we dealt with individual type-2 irreducible loops, we move to loops that intersect the
same CKC. For that purpose, we need to prove the following supporting, general Claim 2 which
states that every Fi-fully-informative loop Li can be decomposed to type-2 irreducible Fi-loops.
Claim 2. Every Fi-fully-informative loop Li that is not type-2 irreducible can be decomposed
to type-2 irreducible Fi-loops.
Proof. The proof is done by induction on the number of pairs m in Li. If m = 2, then it is
irreducible, as needed. Assume that the statement holds for m = k, and consider a loop with
k + 1 pairs. If it is not type-2 irreducible, then it has four different states {ωj, ωj+1, ωl, ωl+1}
in the same information set of Fi, where l > j + 1 and l + 1 < j so that the two pairs are not
adjacent in the original loop Li (otherwise, the loop has a non-informative pair). Note that an
additional connection may exist, but in any case ωj+1 is in the same partition element as ωj, and
the same holds for ωl and ωl+1. Consider the loops (ωj, ωj, ωl+1, ωl+1, ωl+2, ωl+2, . . . , ωj−1, ωj−1)
and (ωl, ωl, ωj+1, ωj+1, ωj+2, ωj+2, . . . , ωl−1, ωl−1). The two sub-loops are based on the original
loop, other than the first pair, see Figure 14
45

wj wj wj+1 wj+1
wl+1 wl+1 wl wl
Fi
Fi Fi
Figure 14: A fully-informative loop that is not type-2 irreducible, with four states in the same information set of Fi. The red rectangle denotes the same partition element of Fi, and the green edges denote the additional states of the original loop.
Each of these sub-loops is Fi-fully-informative, and has strictly less than k pairs. Thus,
the induction hypothesis holds, and they are either type-2 irreducible, or can be separately
decomposed to type-2 irreducible loops, so the result follows.
Note that even without the induction hypothesis, we can repeat the decomposition process,
so that all the connections of the original loop that are based on information sets of Fi with no
more than two states (in the loop) are kept in one of the sub-loops.
Using Claim 2, we now prove in the following Claim 3, that every F2-measurable strategy
on two type-2 irreducible F1-loops with a joint CKC (i.e., pass through the same CKC) is
F1-measurable.
Claim 3. Fix two type-2 irreducible F1-loops L1 and L′
1 that share at least one CKC. Then,
every τ2|L1∪L′
1 is F1-measurable.
Proof. Fix two type-2 irreducible F1-loop L1 and L′
1, and assume that they share at least one
CKC. Denote L1 = (ω1, ω1, ω2, ω2, . . . , ωm, ωm) and L′
1 = (ω′
1, ω′
1, ω′
2, ω′
2, . . . , ω′
m′ , ω′
m′). Assume,
by contradiction, that there exists a strategy τ2|L1∪L′
1 which is not F1-measurable. As already
proven, each of these loops is also an F2-loop, so the measurability constraint implies that there
exist ω ∈ L1 and ω′ ∈ L′
1 such that F2(ω) ̸= F2(ω′) whereas F1(ω) = F1(ω′). Because F1 and
F2 match one another in every CKC, this suggests that ω and ω′ are in two different CKCs.
Denote a shared CKC by Cj in which there are the pairs (ωj, ωj) and (ω′
j, ω′
j) taken from L1
46

and L′
1 respectively. Note that the two pairs may coincide, as well as contain one of the states
ω and ω′, but not both (because the two are in different CKCs). See Figure 15
Cj
wj wj
w′
j w′
j
F1
F1
w1
w′
1
F1
Figure 15: Two type-2 irreducible loops of F1 that share at least one CKC.
Let us now compose a type-2 irreducible F1 loop, using the fact that F1(ω) = F1(ω′).
Without loss of generality, assume that ω = ω1 and ω′ = ω′
1, and that ω1 is not in Cj. Moreover,
it cannot be the case that ω1 and ω′
1 are both in the same loop, say L1, because L1 is also an
F2-loop and that would imply that either F2(ω) = F2(ω′) in case ω′
1 = ωm, or that L1 is not a
type-2 irreducible loop in case ω′
1 ̸= ωm. Also, it must be that F1(ω′
1) = F1(ω∗) where ω∗ ∈ L1
if and only if ω∗ ∈ {ω1, ωm}, otherwise L1 is not type-2 irreducible.
We now split the proof into four possibilities:
• ω′
1 ∈ Cj.
• ω′
1 ∈/ Cj and |{ωj, ωj} ∩ {ω′
j, ω′
j}| = 0, 1, 2.
Assume that ω′
1 ∈ Cj. Consider the loop (ω1, ω1, ω2, ω2, . . . , ωj, ω′
1). This loop matches L1
up to state ωj and F1(ω1) = F1(ω′
1). Thus, it is a well-defined type-2 irreducible F1-loop, hence
also an F2-loop. Therefore, F2(ω1) = F2(ω′
1) and we reach a contradiction.
Moving on to the next possibility, assume that ω′
1 ∈/ Cj and |{ωj, ωj} ∩ {ω′
j, ω′
j}| = 0.
Consider the loop (ω1, ω1, ω2, ω2, . . . , ωj, ω′
j, ω′
j+1, ω′
j+1, . . . , ω′
1, ω′
1). If ωj and ω′
j are in different
partition elements of F1, then this is a well-defined F1-fully-informative loop. If the two states
are in the same partition element, then we can omit this pair from the loop and get a shorter
47

loop (in terms of pairs). This process could be done repeatedly, until we get a well-defined
F1-fully-informative loop which starts with ω1 and ends with ω′
1. If it is a type-2 irreducible
F1-loop, then it is also an F2-loop, and F2(ω1) = F2(ω′
1). Thus, assume that it is not type-2
irreducible, which implies that it has at least four states in the same partition element of F1.
These four states include neither ω1 nor ω′
1, because that would imply that either L1 or L′
1 is
not type-2 irreducible. Now we can apply Claim 2, to decompose this F1-fully-informative loop
to type-2 irreducible F1-loops, where at least one maintains the connection between ω1 nor ω′
1
(see the comment at the end of the proof of Claim 2). We thus conclude that it is also an
F2-loop and F2(ω1) = F2(ω′
1).
The next possibility is that ω′
1 ∈/ Cj and |{ωj, ωj} ∩ {ω′
j, ω′
j}| = 1. If either ω′
j ∈ {ωj, ωj} or
ω′
j = ωj , then we can follow a similar proof as in the previous case where |{ωj, ωj}∩{ω′
j, ω′
j}| =
0, so assume that ω′
j = ωj. In that case, we can redefine the previous loop by omitting ωj and
ω′
j to get (ω1, ω1, ω2, ω2, . . . , ωj−1, ω′
j+1, ω′
j+1, . . . , ω′
1, ω′
1). Again, this is either a well-defined
F1-fully-informative loop, or could be reduced to such a loop. Applying the same arguments as
before, we conclude that there exists a type-2 irreducible F1-loop which maintains the connection
between ω1 nor ω′
1, so it is also an F2-loop and F2(ω1) = F2(ω′
1).
The last possibility is that ω′
1 ∈/ Cj and |{ωj, ωj}∩{ω′
j, ω′
j}| = 2, but in that case the analysis
in the previous possibilities holds, and we reach the same conclusion that F2(ω1) = F2(ω′
1), as
needed.15
Next, we extend the result of Claim 3 to more than two loops. Specifically, we say that two
loops Li and L′
i are connected if either they share at least one CKC, or there exists a sequence
of loops starting with Li and ending with L′
i where each two consecutive loops share at least
one CKC.
Claim 4. Consider a set A of type-2 irreducible and connected F1-loops, i.e., every two loops
are connected by one of these type-2 irreducible loops. Then, every F2-measurable τ2|A is F1
measurable.
15Note that the proof of Claim 3 also holds if ω and ω′ are not in the original L1 and L′1 loops, respectively,
but are simply states in different CKCs that these loops intersect. That is, if ω and ω′ are in different CKCs that L1 and L′1 intersect and F1(ω) = F1(ω′), we can construct an F1-fully-informative loop that starts with ω
and ends with ω′ in a similar manner as before, and eventually conclude that F2(ω) = F2(ω′).
48

Proof. Let us prove this by induction on the number of loops. The case of two loops is proved
in Claim 3, so assume the statement holds for m loops, and consider a set of m + 1 type-2
irreducible and connected F1-loops. Further assume, by contradiction, that there exists an
F2-measurable strategy over this set that is not F1-measurable. Thus, there exists ω and ω′
such that F2(ω) ̸= F2(ω′) whereas F1(ω) = F1(ω′). Evidently, ω and ω′ are in different loops
and different CKCs. Denote the loops of ω and ω′ by L1 and L′
1, respectively.
If L1 and L′
1 are connected directly (through a joint CKC) or through at most m loops
(including L1 and L′
1), then the induction hypothesis holds and every F2-measurable strategy
this set of loops is F1-measurable, implying that F2(ω) = F2(ω′). Thus, assume that L1 and
L′
1 are connected through a sequence of all the m + 1 loops (including L1 and Lm+1). Note
that ω′ cannot be the in the same partition element as any other state from this set of loops,
other than ω, the state connected to ω in L1, and the state connected to ω′ in L′
1. Otherwise,
either one of these loops is not type-2 irreducible, or the F2-measurability constraints with every
intermediate loop is met (by the induction hypothesis), and again we get that F2(ω) = F2(ω′).
Thus, we can now follow the same stages as in the proof of Claim 3 and generate an F1
fully-informative loop based on the sequence of loops connecting L1 and L′
1 (as well as ω and
ω′), which starts with ω1 and ends with ω′
1. In this case, Claim 2 holds and we get a type-2
irreducible F1-loop, which starts with ω1 and ends with ω′
1, that is also an F2-loop. We therefore
conclude that F2(ω) = F2(ω′) and the induction follows accordingly.
After we established that every F2-measurable strategy over a set of connected loops is
F1-measurable, let us extend this result to all the CKCs that these loops intersect. For that
purpose, let A be a maximal set of connected loops, where every two are connected, and let
CA be the set of all CKCs that intersect one of these loops (that is, every CKC contains a
pair of states from one of these loops). We refer to every CA as a cluster. We argue that
every F2-measurable strategy over a cluster CA is F1-measurable. To see this, recall Footnote
15 which states that the proof of Claim 3 holds for every ω and ω′ in two different CKCs that
intersect two connected loops L1 and L′
1, respectively. Namely, for every two such states ω and
ω′ where F1(ω) = F1(ω′), it follows that F2(ω) = F2(ω′). So, as argued in the proof of Claim 4,
we conclude that every F2-measurable strategy over a cluster is F1-measurable.
49

Observation 1. Every F2-measurable strategy over a cluster is F1-measurable.
Once we have established that every F2-measurable strategy over a cluster is F1-measurable,
let us consider a partition Ω∗ of Ω into clusters and individual CKCs that are not part of clusters.
Note that any two elements of the partition Ω∗ jointly intersect at most one partition element
of F1, otherwise the two components would be in the same cluster. To see this, consider the
different possible intersections of elements in Ω∗. If both elements A1 and A2 are CKCs, then
any two different partition elements of F1 that intersect both A1 and A2 would form a type-2
irreducible F1-loop. Otherwise, one of these elements is a cluster, say A1, and it follows from
previous proofs that for every ω and ω′ that belong to the same cluster (but in different CKCs)
and F1(ω) = F1(ω′), then one can form an F1-fully-informative loop that starts with ω and ends
with ω′. Thus, in case ω and ω′ are in cluster A1 and in different partition elements of F1 that
intersect A2 (whether A2 is a CKC or another cluster), one can form an F1-fully-informative
loop that intersects A1 and A2. Using Claim 2, we can conclude that A1 and A2 belong to the
same cluster. This result is summarized in the following observation.
Observation 2. Fix two elements A1, A2 ∈ Ω∗. Then, there exists at most one partition
element F1(ω) of F1 such that F1(ω) ∩ A1 and F1(ω) ∩ A2 are non-empty sets.
We would now want to prove that Oracle 1 can mimic every F2-measurable strategy de
fined over Ω∗. For this purpose, we present the following Lemma 2 which relates to the F2
measurability constraints over different sets of CKCs, that are not in the same cluster (i.e.,
they are not connected by type-2 irreducible F1-loops).
Lemma 2. Fix two disjoint sets A1, A2 ⊆ Ω that do not intersect the same CKCs, and denote
A = A1 ∪ A2. Assume that:
• For every i and for every F2-measurable τ2|Ai, there exists an F1-measurable τ i
1|Ai, such
that μτ1 |Ai = μτ2 |Ai .
• For every ω1, ω′
1 ∈ A1 and ω2, ω′
2 ∈ A2 such that F1(ω1) = F1(ω2) and F1(ω′
1) = F1(ω′
2),
it follows that F1(ω1) = F1(ω′
1).
Then, for every τ2|A, there exists τ1|A such that μτ1|Ai = μτ2|Ai for every i = 1, 2.
50

Proof. Fix τ2|A and τ i
1|Ai where i = 1, 2, such that μτ2|Ai = μτi
1|Ai for every i. Define the sets
A ̃i = {ωi ∈ Ai : ∃ω−i ∈ A−i, F1(ωi) = F1(ω−i)} for every i = 1, 2. The second condition of the
claim implies that all the states in A ̃1 ∪ A ̃2 are in the same partition element of F1. To see this,
fix ω1 ∈ A ̃1 and, by definition, there exists a state ω2 ∈ A ̃2 such that F1(ω1) = F2(ω2). If there
exists another ω′
1 ∈ A ̃1, it is either connected to ω2 (i.e., F1(ω′
1) = F1(ω2)), or to some ω′
2 ∈ A ̃2,
and in that case the condition implies that F1(ω1) = F1(ω′
1). The same holds for every ω2 ∈ A ̃2
For every i = 1, 2, let Si be the signals induced by τ i
1|Ai. Define the following strategy τ1:
τ1((s1, s2)|ω) =

 
 
τ1
1 (s1|ω)τ 2
1 (s2|A ̃2), if ω ∈ A1, (s1, s2) ∈ S1 × S2,
τ1
1 (s1|A ̃1)τ 2
1 (s2|ω), if ω ∈ A2, (s1, s2) ∈ S1 × S2.
One can easily verify that P
(s1,s2) τ1((s1, s2)|ω) = 1 for every ω, so τ1 is indeed a strategy.
Let us now prove that τ1 is F1-measurable and μτ1|A = μτ2|A. If we restrict τ1 to Ai, it is
clearly F1-measurable as τ −i
1 (s−i|A ̃−i) is fixed for every ω ∈ Ai and si ∈ Si. Thus, consider
τ1((s1, s2)|ω) where ω ∈ A ̃1. All the states in A ̃1 ∪ A ̃2 are in the same partition element of F1,
so for every (ω1, ω2) ∈ A ̃1 × A ̃2 we get
τ1((s1, s2)|ω1) = τ 1
1 (s1|ω1)τ 2
1 (s2|A ̃2)
= τ1
1 (s1|A ̃1)τ 2
1 (s2|A ̃2)
= τ1
1 (s1|A ̃1)τ 2
1 (s2|ω2)
= τ1((s1, s2)|ω2),
and the F1-measurability condition holds. Moreover, for every ωi, ω′
i ∈ Ai and for every (s1, s2)
such that τ i
1(si|ω) > 0 where ω ∈ {ω1, ω′
1}, it follows that
τ1((s1, s2)|ωi, Ai)
τ1((s1, s2)|ω′
i, Ai) = τ i
1(si|ωi)
τi
1(si|ω′
i),
which implies that conditional on Ai, τ1 yields the same distribution over posteriors profiles as
τi
1, thus mimicking τ2 on every Ai, as needed.
51

We can thus finalize the proof using induction on the number of elements in Ω∗. Until now,
we established in Observation 1, Observation 2 and Lemma 2 that, given either |Ω∗| = 1 or
|Ω∗| = 2, then for every F2-measurable strategy τ2|Ω∗, there exists τ1|Ω∗ such that μτ1|A = μτ2|A
for every A ∈ Ω∗. Assume this holds for |Ω∗| = k ≥ 2, and consider |Ω∗| = k + 1.
Denote the elements of Ω∗ by A1, A2, . . . , Ak, Ak+1. If there exists only one partition element
of F1 that intersects Ak+1 and at least one Ai for i ≤ k, then Lemma 2 holds and the result
follows. Thus, assume there are at least two different partition elements F1(ω) = F1(ω1) and
F1(ω′) = F1(ω2) of F1 such that ω, ω′ ∈ Ak+1 and ωi ∈ Ai for every i = 1, 2.
The proof now splits into two parts: either A1 and A2 are connected (i.e., there exists a
sequence of partition elements of F1 that sequentially intersect elements in Ω∗ \ Ak+1, starting
with A1 and ending with A2) or A1 and A2 are unconnected. If they are unconnected, we can
apply Lemma 2 for A1 and Ak+1 and then use the induction hypothesis, so we assume they are
connected.
Whether Ak+1 is a CKC or a cluster and assuming that A1 and A2 are connected, we argue
that there exists a type-2 irreducible F1-loop that include ω and ω′, implying that Ak+1 is part
of a cluster with other elements in Ω∗. To see this, recall whenever ω and ω′ belong to the same
cluster and F1(ω) = F1(ω′), then there exists an F1-fully-informative loop that start with ω
and ends with ω′. So consider such a sequence of states lω→ω′ = (ω, . . . , ω′), which would have
been an F1-loop had F1(ω) = F1(ω′).
Next, fix the entire path of connections of elements in Ω∗ that starts with A1 and ends with
A2. Again, the connection between A1 and A2 implies that there exists a sequence of states
lω1→ω2 = (ω1, . . . , ω2) in Ω∗ \ Ak+1, that would have been an F1-loop had F1(ω1) = F1(ω2).
Hence, consider the sequence of states l = (ω, . . . , ω′, ω2 . . . , ω1) which forms an informative
F1-loop, because F1(ω) ̸= F1(ω′). Using Proposition 2 and Claim 2, we know that this loop has
a type-2 irreducible F1-sub-loop that contains ω and ω′. Thus, Ak+1 is in the same cluster as
other elements in Ω∗, thus contradicting the assumption that |Ω∗| = k + 1.
52

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:34.401Z
- **Text Length:** 107667 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 53 of 53
