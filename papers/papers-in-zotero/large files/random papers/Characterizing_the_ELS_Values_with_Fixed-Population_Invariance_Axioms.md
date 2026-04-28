# PDF Document: Funaki et al. - 2025 - Characterizing the ELS Values with Fixed-Population Invariance Axioms.pdf

**File Path:** Funaki et al. - 2025 - Characterizing the ELS Values with Fixed-Population Invariance Axioms.pdf

**Processed Date:** 2026-02-10T18:15:19.420Z

**File Size:** 350.28 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3227

**Title:** Characterizing the ELS Values with Fixed-Population Invariance Axioms

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Characterizing the ELS Values
with Fixed-Population Invariance Axioms∗
Yukihiko Funaki† Yukio Koriyama‡ Satoshi Nakada§ Yuki Tamura¶
November 10, 2025
Abstract
We study efficient, linear, and symmetric (ELS) values, a central family of allocation rules for coop
erative games with transferable-utility (TU-games) that includes the Shapley value, the CIS value, and
the ENSC value. We first show that every ELS value can be written as the Shapley value of a suitably
transformed TU-game. We then introduce three types of invariance axioms for fixed player populations.
The first type consists of composition axioms, and the second type is active-player consistency. Each
of these two types yields a characterization of a subclass of the ELS values that contains the family of
least-square values. Finally, the third type is nullified-game consistency: we define three such axioms,
and each axiom yields a characterization of one of the Shapley, CIS, and ENSC values.
∗We thank seminar participants at Tokyo social choice theory workshop, Waseda University, and Hitotsubashi Summer Institute
2025 for their helpful comments. Funaki and Nakada acknowledge the financial supports from Japan Society for the Promotion
of Science KAKENHI: No. 22H00829 (Funkai), No.25K16606 (Nakada). Koriyama acknowledges the financial support from
Investissements d’Avenir, ANR-11-IDEX-0003/Labex Ecodec/ANR-11-LABX-0047. †School of Political Science and Economics, Waseda University. E-mail:funaki@waseda.jp. ‡CREST, Ecole Polytechnique, Institut Polytechnique de Paris. E-mail:yukio.koriyama@polytechnique.edu. §School of Management, Department of Business Economics, Tokyo University of Science. E-mail:snakada@rs.tus.ac.jp. ¶CREST, Ecole Polytechnique, Institut Polytechnique de Paris. E-mail:yuki.tamura@polytechnique.edu.
1
arXiv:2511.04996v1 [econ.TH] 7 Nov 2025

1 Introduction
Designing allocation rules that satisfy normatively appealing desiderata is a central theme in cooperative
games with transferable utility (TU-games). Since Shapley (1953), a large axiomatic literature has evaluated
solution concepts and proposed axioms, including many forms of invariance. In this paper, we focus on an
idea that underlies several invariance axioms. Start from a problem and an allocation selected by some rule.
Fix certain components of this allocation, and construct a reduced problem by adjusting the original one to
account for those fixed components. The rule is invariant if, in the reduced problem, it assigns the relevant
agents exactly the same payoffs as in the original problem.
Consistency is a prime example of such an invariance axiom. Starting from a problem and an allocation
chosen by the rule, suppose a subset of agents leaves while carrying the components assigned to them. We
then construct the corresponding reduced problem for the agents who remain. The rule is consistent if, in this
reduced problem, it assigns to the remaining agents exactly the same payoffs as in the original problem. This
formulation captures the idea that when some players depart with their allocated shares, the assignments
to those who remain should be unaffected. Consistency is typically formulated in variable-population
frameworks, which model situations in which players may exit and the problem is thereby reduced.
In many applications, however, the set of players is not meant to vary. In intra-firm negotiations, resource
allocation within a community, or cost sharing within a fixed group, the relevant group of agents is given
and does not change. In such fixed-population frameworks, it is natural to ask which allocation rules satisfy
analogous invariance requirements when these requirements are formulated without allowing players to
leave.
This paper studies several fixed-population invariance axioms and identifies which efficient, linear, and
symmetric allocation rules (ELS values) in TU-games satisfy them. Efficiency, linearity, and symmetry are
widely regarded as foundational requirements for allocation rules. The ELS class is broad, encompassing
well-known rules such as the Shapley value (Shapley, 1953), the egalitarian value, the center-of-imputation
set (CIS) value, and its dual, the egalitarian non-separable contribution (ENSC) value (Driessen and Funaki,
1991). Our first result shows that every ELS value can be written as the Shapley value of a suitably
transformed TU-game. We refer to the allocation rules obtained in this way as σ-Shapley values, and we
prove that the class of ELS values coincides with the class of σ-Shapley values (Theorem 1).
We then investigate three types of fixed-population invariance axioms. The first type consists of
composition axioms, which originate in the bankruptcy and surplus-sharing literature (Young, 1988; Moulin,
1987) and which we recently extended to general TU-games in our companion paper (Funaki et al., 2025).
Informally, these axioms require that a large allocation problem can be decomposed into smaller subproblems
2

and then recomposed without changing the final outcome. We study three variants, composition up, insider
guaranteed composition down, and outsider-guaranteed composition down, as natural analogues of the
corresponding axioms in bankruptcy and surplus sharing.
Composition up proceeds in two stages: first, choose any provisional worth for the grand coalition and
allocate as if this provisional worth were the true grand-coalition worth; second, adjust by reducing each
coalition’s worth by what its members received in the first stage and allocate the remainder (or cover any
shortfall) so that the totals match the actual grand-coalition worth. Composition up requires that the sum of
these two stages coincide with the allocation obtained by applying the allocation rule directly to the original
game.
Composition down likewise yields the allocation in two stages without changing the outcome. First,
choose any provisional worth for the grand coalition and compute reference payoffs as if this provisional
worth were the true grand-coalition worth. Then, keeping the grand-coalition worth at its actual level,
transform the game by applying one of the following operations to every proper coalition: (a) replace each
coalition’s worth by the sum of its members’ reference payoffs (the insider-guaranteed version); or (b)
replace each coalition’s worth by the grand-coalition worth minus the sum of the reference payoffs of players
outside the coalition (the outsider-guaranteed version). Composition down requires that the allocation rule
applied to either transformed game coincide with the allocation rule applied directly to the original game.
Within the class of ELS values, we prove that composition up, insider-guaranteed composition down,
and outsider-guaranteed composition down are equivalent, and we characterize the ELS values that satisfy
these equivalent axioms: they are either the egalitarian value or an affine combination of allocation rules
introduced by Dragan (1992) (Theorem 2).
The second axiom, active-player consistency, considers situations in which a coalition of players actively
seeks cooperation from players outside the coalition. Suppose such a coalition negotiates with these external
players, who agree to cooperate on the condition that their payoffs are determined by the underlying rule.
After this agreement is fixed, the remaining worth is distributed among the members of the active coalition.
An allocation rule satisfies active-player consistency if each active player receives exactly the same payoff as
in the original game, regardless of the intermediate bargaining with outsiders. We establish a characterization
of the ELS values that satisfy active-player consistency (Theorem 3). The resulting class coincides with
the affine combinations of allocation rules identified by the composition axioms. We also show that this
subfamily is closely related to the least-square values of Ruiz et al. (1998), which are efficient allocations
that minimize a weighted variance of coalition excesses (Corollary 2). Thus, our result provides a axiomatic
characterization of least-square values via active-player consistency.
3

The third are nullified-game consistency axioms, introduced for set-valued solutions by Kaneko and
Nakada (2025) to characterize the core in TU-games. It addresses situations in which some players’ payoffs
are fixed (e.g., by binding agreements or commitments). The requirement is that, when such payoffs are
fixed and the contributions of those players are neutralized, the solution for the remaining players, computed
in the corresponding reduced game, coincides with their payoffs in the original game. Importantly, the
player set remains unchanged; the nullified players simply no longer affect the residual allocation problem.
We study three variants, paralleling the constructions used to define variable-population consistency axioms
in Hart and Mas-Colell (1989), Funaki (1996), and Moulin (1985), and show that, within the ELS values,
they respectively single out the Shapley, CIS, and ENSC values (Theorem 4).
The remainder of the paper is organized as follows. Section 2 introduces the model. Section 3 defines
the ELS values and presents a representation via Shapley values of suitably modified games, yielding
a characterization of all ELS values. Section 4 introduces the composition axioms and active-player
consistency, and establishes a characterization result based on these axioms. Section 5 analyzes nullified
game consistency and provides characterizations of the Shapley, CIS, and ENSC values. Section 6 concludes.
Omitted proofs are collected in the appendices.
2 Preliminaries
Let N = {1, . . . , n} with n ≥ 2 be the set of players. A cooperative game with transferable utility (TU-game)
is a pair (N, v) where the characteristic function v : 2N → R satisfies v(∅) = 0. Throughout, we fix N
and identify a game with its characteristic function v. Let V denote the set of all TU-games on N. A
solution (or allocation rule) is a function φ : V → Rn that assigns to each game v ∈ V a payoff vector
φ(v) = (φi (v))i∈N .
A coalition is any nonempty subset of N. For v ∈ V and i ∈ N, player i is a null player in v if
v(S ∪ {i}) = v(S) for all S ⊆ N \ {i}. Let Null(v) denote the set of null players in v. Let Π be the set of
permutations of N, and write πS := {π(i) : i ∈ S}.
We define four classes of games used throughout the paper. For ∅ ≠ T ⊆ N, the T-unanimity game is
defined by
uT (S) =



1 if T ⊆ S,
0 otherwise.
For v ∈ V, its dual v∗ ∈ V is defined by
v∗(S) = v(N) − v(N \ S) for all S ⊆ N.
4

For x ∈ Rn, we write x = 1
n
Í
i∈N xi. Also, the additive game induced by x, denoted xb ∈ V, is defined by
xb(S) =
∑︁
i∈S
xi for all ∅ ≠ S ⊆ N.
For π ∈ Π and v ∈ V, the π-permutation of v, denoted πv ∈ V, is defined by
πv(πS) = v(S) for all S ⊆ N.
3 ELS values
3.1 Definitions
We study solutions satisfying the following three standard axioms.
Efficiency (E): For any v ∈ V, Í
i∈N φi (v) = v(N).
Linearity (L): For any v, w ∈ V and c, c′ ∈ R, φ(cv + c′w) = cφ(v) + c′φ(w).
Symmetry (SYM): For any π ∈ Π, v ∈ V, and i ∈ N, φi (v) = φπ(i) (πv).
Following convention, we refer to any solution satisfying (E), (L), and (SYM) as an ELS value. Ruiz
et al. (1998) show that any ELS value can be written as an affine combination of the following solutions
introduced by Dragan (1992). For s ∈ {1, . . . , n − 1}, v ∈ V and i ∈ N,
ψs
i (v) = v(N)
n
+ n−1
s
Í
S⊆N:|S|=s v(S)
n
s
−
Í
S⊆N:|S|=s,i∉S v (S)
n−1
s
!
,
and for s = n,
ψn
i (v) = v(N)
n
= EDi(v).
In particular, ψ1 coincides with the CIS value and ψ n−1 coincides with its dual, the ENSC value. Both
were introduced by Driessen and Funaki (1991) and are defined as follows: for any v ∈ V and i ∈ N,
CISi (v) = v({i}) + 1
n
v(N) −
∑︁
k∈N
v ({ k })
!
,
and
E N SCi (v) = C ISi (v∗) = v(N) − v(N \ {i}) + 1
n
v(N) −
∑︁
k∈N
(v(N) − v(N \ {k}))
!
.
Moreover, Dragan (1992) shows that φ(v) = 1
n−1
Ín−1
s=1 ψs (v) coincides with the Shapley value (Shapley,
1953): for any v ∈ V and i ∈ N,
Shi (v) =
∑︁
S ⊆ N :i∉S
|S|!(n − |S| − 1)!
n! (v(S ∪ {i}) − v(S)) .
5

For later use, we state a well-known representation of the ELS values. For derivations of the lemma, see
Weber (1988), Ruiz et al. (1998), Nakada (2024), or Funaki and Koriyama (2025).
Lemma 1.
(i) φ satisfies (L) if and only if, for any i ∈ N, there are constants ( pi (S))S⊆N ∈ R2n−1 such that for any
v ∈ V,
φi (v) =
∑︁
S⊆N
pi (S)v (S).
(ii) φ satisfies (L) and (SYM) if and only if there are constants ( pk )n
k=1 ∈ Rn and (qk )n−1
k=1 ∈ Rn−1 such
that for any v ∈ V and i ∈ N,
φi (v) =
∑︁
S⊆N:|S|=s, i∈S
psv(S) +
∑︁
S⊆N:|S|=s, i∉S
qsv(S).
(iii) φ is an ELS value if and only if the coefficients in (ii) satisfy pn = 1
n and qk = − k
n−k
pk for all
k = 1, . . . , n − 1.
3.2 ELS Values as Shapley Variants
Among the ELS values, the Shapley value is the most prominent. We now show that, in a precise sense, the
converse holds: every ELS value admits a representation as a variant of the Shapley value. This perspective
further clarifies the mathematical structure of the ELS values.
We begin by defining a modification of the Shapley value introduced by Yokote et al. (2016). For v ∈ V
and σ : {1, 2, . . . , n} → R, define vσ ∈ V by vσ (S) := σ(|S|)v(S) for all ∅ ≠ S ⊆ N. The σ-Shapley value
is then σ-Sh(v) := Sh (vσ). By definition, for any σ : {1, 2, . . . , n} → R, the σ-Shapley value satisfies (L)
and (SYM); moreover, if σ(n) = 1, it also satisfies (E).
We note relationships between σ-Shapley values and variants of the Shapley value studied in the
literature. If σ(s) = δn−s for some δ ∈ [0, 1], then the σ-Shapley value coincides with the δ-discounted
Shapley value (Joosten, 1996; Driessen and Radzik, 2002). Yokote et al. (2018) introduce a closely related
class, the r-egalitarian Shapley values, in variable-population frameworks. Because our framework differs
from theirs, a direct comparison is not possible; nevertheless, when σ(n) = 1, the σ-Shapley values are
analogous to the r-egalitarian Shapley values.
As an immediate consequence of Lemma 1, the class of σ-Shapley values is the subclass of solutions
satisfying (L) and (SYM) described below.
Lemma 2. A solution φ satisfies (L) and (SYM), and its coefficients in the representation of Lemma 1 (ii)
satisfy qk = − k
n−k
pk for all k = 1, . . . , n − 1, if and only if there is σ : {1, . . . , n} → R such that φ = σ-Sh.
6

Combining Lemmas 1 and 2, we obtain that every ELS value admits a σ-Shapley representation.
Theorem 1. A solution φ is an ELS value if and only if there is σ : {1, 2, . . . , n} → R with σ(n) = 1 such
that φ = σ-Sh.
Proof. Consider a σ-Shapley value. Then, for any v ∈ V,
∑︁
i∈N
σ-Shi (v) =
∑︁
i∈N
Shi (vσ) = vσ (N) = σ(n)v(N).
Thus the σ-Shapley value satisfies (E) if and only if σ(n) = 1. By Lemma 1 (iii) and Lemma 2, φ is an
ELS value if and only if it can be represented as φ = σ-Sh for some σ with σ(n) = 1. □
4 Composition Axioms and Active-Player Consistency
In this section, we characterize a subclass of the ELS values using two types of invariance axioms: (i) three
composition axioms and (ii) active-player consistency.
4.1 Composition Axioms
In cooperative games, the worth of the grand coalition can change even after an initial allocation, for example,
when available resources expand or contract. Composition axioms take that initial allocation as a reference
and decompose the game into a baseline component and a residual component; operationally, this yields the
same final payoffs as reallocating on the updated grand coalition worth. These axioms were first developed
for the bankruptcy problem and its generalization, the surplus-sharing problem (Young, 1988; Moulin, 1987,
2000), and were later extended to general TU-games by Funaki et al. (2025).
We begin by defining a key operation on games that underpins the composition axioms. For v ∈ V and
t ∈ R, let
vt (S) :=



t if S = N,
v(S) otherwise.
Our first composition axiom, composition up (CU), states that the grand coalition worth can be allocated
in two stages. First, choose any provisional grand coalition worth and allocate as if it were the true grand
coalition worth. Then adjust by reducing each coalition’s worth by what its members received in the first
stage and allocate the remainder (or cover any shortfall) so that the totals match the actual grand coalition
worth. (CU) requires that the sum of these two stages coincide with the allocation obtained by applying the
solution directly to the original game.
7

Composition Up (CU):1 For any v ∈ V and t ∈ R, φ(v) = φ(vt) + φ(U (φ(vt), v)), where
U (x, v)(S) := v(S) −
∑︁
i∈S
xi,
The composition down (CD) axioms state that the allocation can be obtained in two stages without
changing the outcome. First, choose any provisional grand coalition worth and compute the reference
payoffs as if it were the true grand coalition worth. Then, keeping the grand coalition worth at its actual
worth, transform the game by applying one of the following operations to every proper coalition: (a) replace
each coalition’s worth by the sum of its members’ reference payoffs; or (b) replace each coalition’s worth
by the grand coalition worth minus the sum of the reference payoffs of players outside the coalition. (CD)
requires that the solution applied to either transformed game coincide with the solution applied directly to
the original game. We refer to the version based on operation (a) as Insider-Guaranteed Composition Down
(CDI) and the version based on operation (b) as Outsider-Guaranteed Composition Down (CDO).2
Insider-Guaranteed Composition Down (CDI) :3 For any v ∈ V and t ∈ R, φ(v) = φ DI (φ(vt), v) ,
where
DI (x, v) (S) :=



v(N) if S = N
Í
i∈S xi if S ⊊ N .
Outsider-Guaranteed Composition Down (CDO) : For any v ∈ V and t ∈ R, φ(v) = φ DO (φ(vt), v) ,
where
DO (x, v) (S) :=



v(N) − Í
i∉S xi if S ≠ ∅
0 if S = ∅.
Since TU-games provide a richer framework than the bankruptcy problem, there are multiple ways to
define transformed games. Our two transformation operations, applied after fixing the reference payoffs,
are closely related to the standard TU-game extension of a bankruptcy problem and its dual, except that we
omit the usual min and max truncations.
We establish the equivalence of (CU), (CDO), and (CDI) within the class of ELS values, and we
characterize the ELS values that satisfy these composition axioms.
Theorem 2. Suppose that φ is an ELS value. Then the following are equivalent:
(I) φ satisfies (CU).
(II) φ satisfies (CDO).
1In the bankruptcy problem, by its nature, one assumes 0 ≤ t ≤ v(N). In TU-games, however, no such restriction is required. 2The Composition Down introduced in Funaki et al. (2025) is (CDO). 3In the bankruptcy problem, by its nature, one assumes 0 ≤ v(N) ≤ t. In TU-games, however, no such restriction is required.
8

(III) φ satisfies (CDI).
(IV) φ is either an affine combination of (ψs)n−1
s=1 , or φ = E D.
We introduce two axioms used to prove Theorem 2; the proof also relies on two lemmas. The proofs of
these lemmas are collected in the appendix.
Inessential Game Property (IGP):4 For any x ∈ Rn and i ∈ N, φi (xb) = xi.
Renegotiation-proofness (RNP): For any v ∈ V and i ∈ N, φi (φ(v)) = φi (v).
Lemma 3. For any s = 1, . . . , n − 1, ψs satisfies (IGP).
Let x ∈ Rn. Suppose that φ is an ELS value. Then, φi (xb) = αnE Di (xb) + Ín−1
s=1 αsψs
i (xb) with Ín
s=1 αs = 1.
By Lemma 3,
φi (xb) = αnx +
n−1
∑︁
s=1
αs
!
xi = αnx + (1 − αn)xi. (1)
Lemma 4. The following implications hold.
(i) (L) and (CU) together imply (RNP).
(ii) (E) and (CDO) together imply (RNP).
(iii) (E) and (CDI) together imply (RNP).
Proof of Theorem 2. (IV) ⇒ (I), (II) and (III): It is straightforward to show that φ = E D satisfies (CU),
(CDO), and (CDI). Let φ be an affine combination of (ψs)n−1
s=1 . Then, by letting αn = 0 in (1), φ satisfies
φ(xb) = x (2)
for any x ∈ Rn. We show that φ satisfies all the composition axioms.
By definition of U, we have U (φ(vt), v) = v − φ(vt). By (2) and (L), φ(vt) + φ(U (φ(vt), v) =
φ(vt) + φ(v) − φ(vt) = φ(v), implying that φ satisfies (CU).
Given v ∈ V and t ∈ R, define the game w ∈ V by w(S) = v(N) − t for any ∅ ≠ S ⊆ N. By definition
of DO, we have DO (φ(vt), v) = φ(vt) + w. By (2) and (L),
φ DO(φ(vt), v) = φ(φ(vt)) + φ(w) = φ(vt) + φ(w) = φ(vt + w).
By definition of w, vt + w = v + w0. Since φ(w0) = 0 by (E) and (SYM), φ(vt + w) = φ(v + w0) =
φ(v) + φ(w0) = φ(v), implying that φ satisfies (CDO).
4This axiom was proposed by Ruiz et al. (1996).
9

By definition of DI, we have DI (φ(vt), v) = φ(vt) + (v(N) − t)uN . By (2) and (L),
φ(DI (φ(vt), v) = φ(φ(vt)) + φ((v(N) − t)uN) = φ(vt) + φ((v(N) − t)uN) = φ(vt + (v(N) − t)uN).
Since vt + (v(N) − t)uN = v by definition of vt, φ satisfies (CDI).
(I), (II) or (III) ⇒ (IV): By Lemma 4, an ELS value that satisfies one of the composition axioms also satisfies
(RNP). Hence, by (1), φi (v) = φi (φ(v)) = αnφ(v) + (1 − αn)φi (v), which is equivalent to
αn φi (v) − φ(v) = 0
for all v ∈ V and i ∈ N. Therefore, either (a) αn = 0, or (b) φi (v) = φ(v) for all v ∈ V and i ∈ N. In case
(a), φ is an affine combination of (ψs)n−1
s=1 ; in case (b), φ coincides with the ED value. □
Note that if we drop (L), the equivalence may fail. For example, the proportional division value satisfies
(CU) and (CDI) on the domain where it is well defined (Funaki et al., 2025). However, it is easy to verify
that this solution does not satisfy (CDO).
4.2 Active-Player Consistency
We now consider a situation in which a coalition of players S takes the initiative and seeks cooperation from
the players outside the coalition. The outsiders agree to participate, but only on the condition that their
payoffs are fixed ex ante: each outsider j insists on receiving exactly the payoff that the solution assigns
to j in the original game. Once these payoffs to outsiders are guaranteed, the only remaining worth to be
allocated is whatever is left after covering those guarantees. Equivalently, we obtain a reduced game in
which, for every coalition T, its effective worth is the original worth minus the total guaranteed payoffs to
the outsiders in T. Active-player consistency (AC) asks that each member of the initiating coalition S should
receive the same payoff in this reduced game as in the original game.
(AC) can be interpreted as an internal consistency requirement. The solution prescribes a feasible payoff
vector for the grand coalition in the original game. The requirement is that any coalition S should be able to
implement its part of this outcome by honoring the outsiders’ prescribed payoffs and reallocating only the
residual worth, without having to revise the payoffs of its own members. In other words, taking the lead in
organizing cooperation should not force the active players to deviate from the payoffs assigned to them by
the solution in the original game.
Formally, given S ⊊ N, let RAC,S : Rn × V → V be defined by
RAC,S (x, v) (T ) := v (T ) −
∑︁
i ∈T \S
xi .
10

Active-Player Consistency (AC): For any v ∈ V, S ⊊ N, and i ∈ S, φi (v) = φi RAC,S (φ(v), v) .
Using (AC), we obtain a characterization of a subclass of the ELS values.
Theorem 3. Suppose that φ is an ELS value. Then the following are equivalent:
(I) φ satisfies (AC).
(II) φ is an affine combination of (ψs)n−1
s=1 .
Proof. Let φ be an ELS value: φi (v) = αnE Di (v) + Ín−1
s=1 αsψs
i (v) with Ín
s=1 αs = 1. For any S ⊊ N,
define φS as follows: for any v ∈ V,
φS
i (v) =



φi (v) if i ∉ S,
0 if i ∈ S.
Then, RAC,S (φ(v), v) = v − φS (v). Moreover, by (1), for any i ∈ S, because φS
i (v) = 0, we have
φi (φS (v)) = αnφS (v). Hence, by (L), (AC) is equivalent to
φi (v) = φi (v − φS (v)) ⇔ φi (φS (v)) = 0 ⇔ αnφS (v) = 0
for any v ∈ V, S ⊊ N, and i ∈ S. This holds if and only if αn = 0, that is, φ is an affine combination of
( ψ s ) n−1
s=1 . □
In Theorem 3, we examined the implications of (AC) within the class of ELS values. However, the full
strength of (L) is not needed for that characterization. In fact, the affine combinations of (ψs)n−1
s=1 can also
be characterized by a weaker axiom. Pick two players i and j. For any group of the remaining players, we
can ask how much that group gains from working with i instead of j. Our next axiom, two-person linear
bargaining (TLB), considers the situation where only i and j are treated as active and all other players are
kept at the payoffs they are already assigned by the solution in the original game. (TLB) requires that, in this
situation, the difference between the payoffs of i and j is determined in a linear way by those comparisons:
each comparison between i’s and j’s contributions is given a fixed weight, and the weighted sum pins down
i’s payoff minus j’s payoff.
Two-Person Linear Bargaining (TLB): For any v ∈ V and i, j ∈ N,
φi RAC,{i, j} (φ(v), v) − φ j RAC,{i, j} (φ(v), v) = γi, j (v (S ∪ {i}) − v (S ∪ { j }))S⊆N\{i, j} ,
where γi, j : R2n−2 → R is a linear function.
11

(TLB) can be viewed as a rule for determining the payoffs between two players once the rest of the
players have effectively been settled. Suppose only players i and j remain to be compared, and all other
players are held at the payoffs already assigned to them by the solution. In that case, (TLB) requires that the
difference between i’s and j’s payoffs be determined in a disciplined way: it must be a fixed linear summary
of how much more valuable it is to include i rather than j in any possible partnership with the others. Thus,
the solution treats the relative payoff of i versus j as an assigned payoff differential based purely on their
comparative contributions, with no additional bargaining terms.
The special cases of the solution satisfying this property as well as (E) and (SYM) are illustrated as
follows:
• Suppose that for any v ∈ V and i, j ∈ N,
φi RAC,{i, j} (φ(v), v) − φ j RAC,{i, j} (φ(v), v) = v ({i}) − v ({ j }).
Then, φ = C IS.
• Suppose that for any v ∈ V and i, j ∈ N,
φi RAC,{i, j} (φ(v), v) − φ j RAC,{i, j} (φ(v), v) = v (N \ { j }) − v (N \ {i}).
Then, φ = E N SC.
• Suppose that for any v ∈ V and i, j ∈ N,
φi RAC,{i, j} (φ(v), v) −φ j RAC,{i, j} (φ(v), v) =
∑︁
T ⊆N\{i, j }
|T |!(n − |T | − 1)!
n! (v(T ∪{i})−v(T ∪{ j })).
Then, φ = Sh.
Lemma 5. The following implications hold.
(i) (L) and (SYM) together imply (TLB).
(ii) (E), (TLB), and (AC) together imply (L).
The second implication of Lemma 5 fails without (TLB). For example, fix α ≠ 1 and define, for v ∈ V
and i ∈ N, φi (v) = (v({i}))α + 1
n (v(N) − Í
k∈N (v({k }))α). Then, while it satisfies (E) and (AC), it violates
(TLB) and (L). Combined with Theorem 3, the above argument characterizes the subclass of ELS values
satisfying (AC).
Corollary 1. Suppose that φ satisfies (E), (TLB), and (SYM). Then the following are equivalent:
(I) φ satisfies (AC).
(II) φ is an affine combination of (ψs)n−1
s=1 .
12

4.3 Connections with Other Subclasses of the ELS Values
We relate our theorems to existing results in the literature. First, Wang et al. (2019) show that a solution
is an affine combination of (ψs)n−1
s=1 if and only if it is an ELS value satisfying (IGP). Our Theorem 2, by
contrast, relies on (RNP), which is weaker than (IGP). Consequently, the family of solutions characterized
by Theorem 2 includes the egalitarian value, whereas the family in Wang et al. (2019) does not. Moreover,
our Theorem 3 shows that, within the class of ELS values, (IGP) and (AC) are equivalent. As a counterpart
to Lemma 4, we now show the logical relationship between (AC) and (RNP).
Lemma 6. (E), (L), and (AC) together imply (RNP).
Second, affine combinations of {ψs}n−1
s=1 include an important class of solutions, the least-square values
of Ruiz et al. (1998). For v ∈ V, x ∈ Rn, and S ⊆ N, define the excess e(S, x) := v(S) − xb(S). Given a
weight function m : {0, 1, . . . , n} → R+, the least-square value with weights m is obtained by
min
x∈Rn
( ∑︁
S⊆N
m (|S|) e(S, x) − e(v, x) 2
)
s.t.
∑︁
i∈N
xi = v(N),
where e(v, x) := 1
2
n −1
Í
∅≠S⊆N e(S, x) is the average excess at x. Ruiz et al. (1998) establish a characterization
of the least-square values based on (IGP) and the following monotonicity axiom.
Coalitional Monotonicity (CM): For any v, w ∈ V and T ⊆ N, if v(T) > w(T) and v(S) = w(S) for all
S ≠ T, then φi (v) ≥ φi (w) for all i ∈ T.
Theorem (Ruiz et al., 1998, Theorem 8). Suppose that φ is an ELS value. Then the following are equivalent:
(I) φ satisfies (IGP) and (CM).
(II) φ is a least-square value.
Because, within the ELS values, (AC) and (IGP) are equivalent, we obtain:
Corollary 2. Suppose that φ is an ELS value. Then the following are equivalent:
(I) φ satisfies (AC) and (CM).
(II) φ is a least-square value.
Relatedly, Wang et al. (2019) characterize a subclass of the ELS values that satisfy (CM), which they
refer to as the ideal values.5
5See Wang et al. (2019) for the definition of ideal values.
13

Theorem (Wang et al., 2019, Theorem 3.2). Suppose that φ is an ELS value. Then the following are
equivalent:
(I) φ satisfies (CM).
(II) φ is an ideal value.
In sum, the affine combinations of {ψs}n−1
s=1 and the ideal values are both subclasses of the ELS values,
and both contain the class of least-square values (Figure 1). Within the class of ELS values, adding (CM)
and (AC) collapses both subclasses to the least-square values. Theorems 2 and 3 show that, within the
ELS values, the composition axioms and active-player consistency both restrict attention to the same affine
combinations of solutions (with the only additional possibility under composition being the egalitarian
value); under (CM) and (AC), this subclass coincides with the least-square values.
ELS values
affine comb
of {ψs }n−1
s=1
ideal values
least-square
values
Figure 1: Relationship between subclasses of the ELS values.
5 Nullified-Game Consistency
We introduce three nullified-game consistency axioms and characterize the Shapley, CIS, and ENSC values,
each via one of these axioms. In this section, we assume n ≥ 3 to exclude trivial cases. The idea of
nullified-game consistency is stated as follows. When the recommended payoffs of a subset of players are
fixed and those players are hypothetically treated as null, the solution restricted to the remaining players
must reproduce their original payoffs. The population of players is unchanged, however, the nullified players
whose shares have been predetermined no longer contribute to coalition worth. Accordingly, when the
solution is applied to the reduced game, in which the contributions of these players are nullified, it must
14

yield exactly the original payoffs for the remaining players. Formally, for v ∈ V and S ⊆ N, the S-nullified
game, denoted v|S ∈ V, is defined by
v|S (T) = v(T ∩ S) for all T ⊆ N.
Specifically, note that for i ∈ N,
v|{i} = v ({i})u{i} and v∗|{i} = v∗({i})u{i} = (v (N) − v (N \ {i}))u{i}.
For S ⊆ N, v ∈ V, and x ∈ RN , let RS (v, x) denote the reduced game on the player set S, obtained by nulli
fying the players in N \ S at the initial allocation x in game v. Analogous to variable-population consistency,
reduced games admit several definitions. We consider three such definitions and, accordingly, introduce
three nullified-game consistency axioms, HM-, F-, or M-nullified game consistency, each corresponding to
each reduced game definition. Let I ∈ {HM, F, M}.
I-Nullified Game Consistency (I-NGC): For any v ∈ V, S ⊆ N with |S| ≥ 2, and i ∈ S,
φi (v) = φi RI,S (φ(v), v) , where
RHM,S (φ(v), v) (T ) =



v(T ∪ (N \ S)) − Í
j∈N\S φ j (v|T∪(N\S)) if T ∩ S ≠ ∅,
0 otherwise,
RF,S (φ(v), v) (T ) =



v(N) − Í
j∈N\S φ j (v|{ j}) if S ⊆ T ,
v(T ∩ S) otherwise,
RM,S (φ(v), v) (T ) =



v(T ∪ (N \ S)) − Í
j∈N\S φ j (v∗|{ j}) if T ∩ S ≠ ∅,
0 otherwise.
The idea of nullified-game consistency was introduced by Kaneko and Nakada (2025) for set-valued
solution concepts. They proposed three consistency axioms and, in each case, characterized the core. In
our setting, (F-NGC) and (M-NGC) are the single-valued counterparts of their Funaki nullified reduced
game property and Moulin nullified reduced game property, respectively. The reduced game used in (F
NGC) is inspired by the projection-reduced game of Funaki (1996), whereas that in (M-NGC) follows the
complement-reduced game of Moulin (1985). A key distinction from the set-valued framework is how the
payoffs of players in N \ S are fixed: Kaneko and Nakada (2025) anchor them by an arbitrary selection from
the solution set, whereas in our single-valued setting they are determined canonically by the single-valued
15

solution φ, via φ j v|{ j} in (F-NGC) and φ j v∗|{ j} in (M-NGC). Finally, (HM-NGC) is a new notion
inspired by the variable-population consistency property of Hart and Mas-Colell (1989): for some T ⊆ S,
each player j ∈ N \ S is assigned φ j v|T∪(N\S) , i.e., the players in N \ S act as a single block that cooperates
with a subset of S.
The final axiom, equal gain for two players, states that when everyone except two players i and j is a
null player, the solution should give i and j the same extra amount over their stand-alone worths. In other
words, if only i and j matter in the game, the solution treats them symmetrically by awarding them equal
incremental gains above what they could secure alone.
Equal gain for two players (EG): For any v ∈ V and i, j ∈ N, if any k ≠ i, j is a null player in v, then
φi (v) − v({i}) = φ j (v) − v({ j }).
We now present characterizations of the Shapley, CIS, and ENSC values, each obtained from one of the
consistency axioms defined above.
Theorem 4. A solution satisfies:
(I) (E), (EG), and (HM-NGC) if and only if it is the Shapley value;
(II) (E), (EG), and (F-NGC) if and only if it is the CIS value; and
(III) (E), (EG), and (M-NGC) if and only if it is the ENSC value.
In variable-population frameworks, two-player standardness is an axiom often used to obtain a charac
terization of a solution via consistency.6 Since our consistency is formulated for a fixed population, (EG)
serves as the corresponding fixed-population analogue of two-player standardness.
We conclude this section by providing examples to demonstrate the independence of the axioms used in
Theorem 4. First we drop (E). Define φ as follows: for any v ∈ V and i ∈ N, φi (v) = v({i}). Then for
any v ∈ V and i, j ∈ N such that any k ≠ i, j is a null player in v, φi (v) − v({i}) = 0 = φ j (v) − v({ j }).
Thus φ satisfies (EG). For any v ∈ V, S ⊆ N with |S| ≥ 2, and i ∈ S, RF,S (φ(v), v) ({i}) = v({i}). Thus for
any v ∈ V, S ⊆ N with |S| ≥ 2, and i ∈ S, φi RF,S (φ(v), v) = v({i}) = φi (v), implying that φ satisfies
(F-NGC). On the other hand, it is trivial to verify that φ violates (E).
Now define φ as follows: for any v ∈ V and i ∈ N, φi (v) = v(N) − v(N \ {i}). Then for any v ∈ V
and i, j ∈ N such that any k ≠ i, j is a null player in v, φi (v) − v({i}) = (v({i, j }) − v({ j })) − v({i}) =
(v({i, j }) − v({i})) − v({ j }) = φ j (v) − v({ j }). Thus φ satisfies (EG). For any v ∈ V and j ∈ N,
φ j v∗|{j} = v∗|{j}(N) − v∗|{j}(N \ { j }).
6For example, Hart and Mas-Colell (1989), Driessen and Funaki (1997), and van den Brink et al. (2016).
16

Because
v∗|{ j} (N \ { j }) = (v(N) − v(N \ { j })) u{ j} (N \ { j }) = 0,
we have
φj v∗|{j} = v(N) − v(N \ { j}).
Then, by definition of φ, for any I ∈ {HM, M}, v ∈ V, S ⊆ N with |S| ≥ 2, and i ∈ S,
φi RI,S (φ(v), v) = RI,S (φ(v), v) (N) − RI,S (φ(v), v) (N \ {i})
= v(N) −
∑︁
j ∈N \S
φj v∗|{j} − ©
«
v(N \ {i}) −
∑︁
j ∈N \S
φj v∗|{j} a
®
¬
= v(N) − v(N \ {i}) = φi (v).
Therefore, it satisfies (HM-NGC) and (M-NGC). On the other hand, it is again trivial to verify that φ violates
(E).
Second we drop (EG). Define φ as follows: there is i ∈ N such that for any v ∈ V, φi (v) = v(N),
and for any j ≠ i, φ j (v) = 0. Then it is trivial to verify that while φ satisfies (E), it violates (EG). To
see that φ satisfies (I-NGC), where I ∈ {HM, F, M}, consider v ∈ V and S ⊆ N with |S| ≥ 2. Then if
i ∈ S, then RI,S (φ(v), v) (N) = v(N). Thus φi RI,S (φ(v), v) = v(N) = φi (v), and for any j ∈ S \ {i},
φ j RI,S (φ(v), v) = 0 = φ j (v). If i ∉ S, then for any j ∈ S, φ j RI,S (φ(v), v) = 0 = φ j (v). Therefore, φ
satisfies (I-NGC).
Finally, if any one of (HM-NGC), (F-NGC), or (M-NGC) is dropped, the remaining axioms (E) and
(EG) are still satisfied by the other two values. Specifically:
• without (HM-NGC), the CIS and ENSC values satisfy (E) and (EG);
• without (F-NGC), the Shapley and ENSC values satisfy (E) and (EG); and
• without (M-NGC), the Shapley and CIS values satisfy (E) and (EG).
6 Conclusion
This paper studies solutions for TU-games from a fixed-population perspective. We keep the set of players
fixed and ask how a solution should behave when parts of the outcome are treated as already settled.
The guiding idea is that certain components of the allocation can be fixed in advance, for example, by
provisional divisions of worth, by guaranteed terms for some players, or by commitments that render some
players effectively neutral, and the solution is then required to handle the remaining part of the problem in
a disciplined way.
17

Within this framework, we obtain structural results for the ELS values. We show that every solution
in this class can be represented as a Shapley value applied to a transformed game, and we use several
invariance requirements to locate familiar solutions within that structure, including the Shapley, CIS, ENSC,
and egalitarian values, as well as least-square values. Rather than treating these solutions as isolated objects,
the analysis explains how they arise from different ways of holding parts of the allocation fixed and resolving
what remains.
This perspective has two consequences. First, it offers a rationale for benchmark solutions in envi
ronments where the relevant group of players is effectively given (for instance, divisions within firms,
committees, or jurisdictions), so that the question is not who participates, but how the joint surplus is
divided. Second, it suggests a way to assess alternative solutions: not only by standard axioms such as
efficiency or symmetry, but also by how they respond when some payoffs are locked in and the rest of the
problem must still be solved.
A natural direction for future research is to move beyond the ELS values and ask to what extent these
fixed-population requirements can serve as a systematic guideline for designing desirable solutions more
generally.
18

Appendix: Omitted Proofs
A Proofs of Results in Section 3.2
Proof of Lemma 2. Fix σ : {1, . . . , n} → R and consider the σ-Shapley value. By definition, it satisfies
(L) and (SYM). Moreover, for any v ∈ V and i ∈ N,
σ-Shi (v) = Shi (vσ) =
∑︁
S ⊆ N :i∉S
|S|!(n − |S| − 1)!
n! (σ(|S| + 1)v(S ∪ {i}) − σ(|S|)v(S))
=
∑︁
S ⊆ N :i ∈S
(|S| − 1)!(n − |S|)!
n!
σ(|S|)v(S) −
∑︁
S ⊆ N :i∉S
|S|!(n − |S| − 1)!
n!
σ(|S|)v(S).
It follows that the σ-Shapley value admits the representation in Lemma 1 (ii), with coefficients satisfying
qk = − k
n−k
pk for all k = 1, . . . , n − 1.
Conversely, suppose that φ satisfies (L) and (SYM), and that in the representation given in Lemma 1 (ii),
the coefficients satisfy qk = − k
n−k
pk for all k = 1, . . . , n − 1. By Lemma 1 (ii),
φi (v) =
∑︁
S ⊆ N :i ∈S
psv(S) +
∑︁
S ⊆ N :i∉S
qsv(S)
=
∑︁
S ⊆ N :i∉S
|S|!(n − |S| − 1)!
n!
nps
(n − 1)!
|S|!(n − |S| − 1)!
v(S ∪ {i}) − (n − 1)!
(|S| − 1)!(n − |S|)!
v(S) .
Let σ(s) := n n−1
s−1 ps for s = 1, . . . , n − 1. Then the representation becomes
φi (v) =
∑︁
S ⊆ N :i∉S
|S|!(n − |S| − 1)!
n! (σ(|S| + 1)v(S ∪ {i}) − σ(|S|)v(S)) = Shi (vσ).
□
B Proofs of Results in Section 4
Proof of Lemma 3. Fix s ∈ {1, . . . , n − 1}. Recall that ψs is defined as follows: for any v ∈ V and i ∈ N,
ψs
i (v) = v (N)
n
+ n−1
s
Í
S:|S|=s v (S)
n
s
−
Í
S:|S|=s,i∉S v (S)
n−1
s
!
.
By denoting V+
i =Í
S:|S|=s:i∈S v (S) and V −
i =Í
S:|S|=s:i∉S v (S), ψs can be written as:
ψs
i (v) = v (N)
n
+ n−1
s
1
n
s
V+
i + V−
i−
n
s
n−1
s
V−
i
!
= v (N)
n
+ n−1
s
1
n
s
V+
i− s
n−s
V−
i
= v (N)
n
+ n−1
n
1
n−1 s−1
V+
i− s
n−s
V−
i.
19

Let x ∈ Rn and v = xb. Then, we have v(N)
n = x and
V+
i− s
n−s
V−
i = n−1
s−1
xi + n − 2
s−2
∑︁
j ≠i
xj − s
n−s
n−2
s−1
∑︁
j ≠i
xj
= n−1
s−1
xi − n
n−1
∑︁
j ≠i
xj
= n−1
s−1
n
n − 1 (xi − x).
This implies that φs
i (xb) = x + (xi − x) = xi. □
Proof of Lemma 4. (i) By definition of U, U (φ(v), v) = v − φ(v). Letting t = v(N) in (CU), φ(v) =
φ(v) + φ(v − φ(v)), and thus φ(v − φ(v)) = 0. By (L), φ(v) = φ(φ(v)).
(ii) and (iii) First, (E) implies that DO (φ(v), v) = DI (φ(v), v) = φ(v). Hence, by letting t = v(N) in (CDO)
and (CDI), we have φ(v) = φ(DO (φ(v))) = φ(DI (φ(v))) = φ(φ(v)). □
Proof of Lemma 5. By Lemma 1 (ii), it is trivial to verify the first implication. To show the second
implication, let v ∈ V. By (TLB) and (AC), for any i, j ∈ N,
φi (v) − φ j (v) = φi RAC,{i, j} (φ(v), v) − φ j RAC,{i, j} (φ(v), v) = γi, j (v (S ∪ {i}) − v (S ∪ { j })S⊆N\{i, j} .
Moreover, by (E), Í
i∈N φi (v) = v(N). By these equations, for any i ∈ N, φi (v) is uniquely determined as
φi (v) = 1
n
v(N) −
∑︁
j ≠i
γ j,i (v (S ∪ { j }) − v (S ∪ {i}))S⊆N\{i, j}
!
.
Since γ j,i is a linear function for any i, j ∈ N, so is φ. □
Proof of Lemma 6. Suppose that φ satisfies (E), (L), and (AC). By (L) and (AC), for any v ∈ V, S ⊊ N,
and i ∈ S, φi φS (v) = 0, where φS (v) = ((0)i∈S, (φi (v))i∉S) ∈ Rn. This together with (L) implies that for
any v ∈ V and i ∈ N,
φi φ(v) =
∑︁
k∈N
φi φN\{k} (v) = φi φN\{i} (v) .
By (E) and the fact that φk φN\{i} (v) = 0 for all k ≠ i, we have
φi φN\{i} (v) = φi (v).
Thus φi φ(v) = φi (v), implying that φ satisfies (RNP).
□
20

C Proof of Theorem 4
For necessity, it suffices to show that the Shapley, CIS, and ENSC values satisfy their respective nullified
game consistency axioms.
Lemma C.1. The following statements hold.
(i) The Shapley value satisfies (HM-NGC).
(ii) The CIS value satisfies (F-NGC).
(iii) The ENSC value satisfies (M-NGC).
Proof. (i) We show that, for any v ∈ V and S ⊆ N with |S| ≥ 2,
P RHM,S (φ(v), v) |S′ = P v|S′∪(N\S) − P v|N\S ∀S′ ⊆ N, (C.3)
where P : V → R is the potential value of the Shapley value
P(v) =
∑︁
S⊆N
(|S| − 1)!(n − |S|)!
n!
v(S).
Abe and Nakada (2023) show that the Shapley value is uniquely represented as Shi (v) = P(v) − P v|N\{i} .
Then by this formula and (C.3), we can see that, for any i ∈ S,
φi RHM,S (φ(v), v) = P RHM,S (φ(v), v) − P RHM,S (φ(v), v)|N\{i}
= P(v) − P(v|N\S) − P(v|N\{i}) − P(v|N\S)
= P(v) − P v|N\{i}
= φi (v).
Now, we show (C.3) by induction. Take any v ∈ V and suppose that |S′| = 1. Let us denote S′ = {i1}
for some i1 ∈ N. Then, by definition, RHM,S (φ(v), v) |{i1} (N) = φi1 v|{i1}∪(N\S) . Since any player j ≠ i1
is null in RHM,S (φ(v), v)|{i1}, we have
P RHM,S (φ(v), v) |{i1} − P RHM,S (φ(v), v) |∅ = φi1 (RHM,S φ(v), v) |{i1}
= φi1 v |{i1}∪(N\S)
= P(v|{i1}∪(N\S)) − P(v|N\S).
Then, because P RHM,S (φ(v), v)|∅ = 0, we have P RHM,S (φ(v), v)|{i1} = P v|{i1}∪(N\S)) − P(v|N\S .
Suppose that (C.3) holds for any S′ ⊆ N with |S′| ≤ k ∈ {1, . . . , n − 1}. Let S′ with |S′| = k + 1.
By definition, RHM,S (φ(v), v) |S′ (N) = Í
j∈S′ φ j v|S′∪(N\S) . Moreover, since any player j ∉ S′ is null
21

in RHM,S (φ(v), v)|S′, we have Í
j∈S′ φ j RHM,S (φ(v), v)|S′ = RHM,S (φ(v), v)|S′ (N). By the induction
hypothesis, rearranging these two equations leads to
|S′|P RHM,S (φ(v), v)|S′ −
∑︁
j ∈S′
P RHM,S (φ(v), v) |S′\{ j } = |S′|P v|S′∪(N\S) −
∑︁
j ∈S′
P(v|(S′\{ j})∪(N\S)))
⇔ |S′|P RHM,S (φ(v), v) |S′ = |S′|P v|S′∪(N\S) +
∑︁
j ∈S′
P RHM,S (φ(v), v) |S′\{ j } − P v |(S′\{ j })∪(N\S)
⇔ |S′|P RHM,S (φ(v), v) |S′ = |S′|P(v|S′∪(N\S)) − |S′|P(v|N\S).
Thus (C.3) holds for |S′| = k + 1.
(ii) Take any v ∈ V and S ⊆ N with |S| ≥ 2. By definition, we have
RF,S (C IS(v), v) ({i}) =



v({i}) if i ∈ S,
0 otherwise.
Moreover,
RF,S (C IS(v), v) (N) = v(N) −
∑︁
j ∈N \S
CISj (v|{j}) = v(N) −
∑︁
j ∈N \S
v({ j})CIS j (u{j}) = v(N) −
∑︁
j ∈N \S
v({ j}).
Therefore, for any i ∈ S,
C ISi (RF,S (C IS(v), v)) = RF,S (C IS(v), v) ({i}) + 1
n
RF,S (C IS(v), v) (N) −
∑︁
j∈N
RF,S (C IS(v), v) ({ j })
!
= v({i}) + 1
n
©
«
v(N) −
∑︁
j ∈N \S
v({ j}) −
∑︁
j ∈S
v({ j})a
®
¬ = CISi (v).
(iii) Take any v ∈ V and S ⊆ N with |S| ≥ 2. By definition, for any j ∈ N \ S,
E NSCj v∗|{ j} = (v(N) − v(N \ { j })) E NSCj (u{ j}) = v(N) − v(N \ { j }).
Hence, RM,S (E N SC (v), v) (N) = v(N) − Í
j∈N\S (v (N) − v (N \ { j })) and
RM,S (φ(v), v) (N \ { j }) =



v(N \ { j}) − Í
j∈N\S (v (N) − v (N \ { j })) if j ∈ S
RM,S (φ(v), v) (N) otherwise.
22

Therefore, for any i ∈ S,
E N SCi RM,S (E N SC (v), v)
= RM,S (φ(v), v) (N) − RM,S (φ(v), v) (N \ {i})
+1
n
RM,S (φ(v), v) (N) −
∑︁
j∈N
RM,S (φ(v), v) (N) − RM,S (φ(v), v) (N \ { j })
!
= v(N) − v(N \ {i}) + 1
n
v(N) −
∑︁
j∈N
(v(N) − v(N \ {i}))
!
= E N SCi (v).
□
The sufficiency of (I) requires two auxiliary lemmas, stated below.
Minimal Right (MR): For any v ∈ V and i ∈ N, if any j ≠ i is null in v, then φi (v) = v(N).
Lemma C.2. (E) and (EG) together imply (MR).
Proof. Let v ∈ V and i ∈ N be such that N \ Null(v) = {i}. For j ≠ i, by (EG),
φi (v) − v({i}) = φ j (v) − v({ j }) = φ j (v).
Then by (E),
v(N) =
∑︁
j∈N
φ j (v) = φi (v) +
∑︁
j ≠i
φj (v)
= φi (v) +
∑︁
j ≠i
(φi (v) − v({i}))
= φi (v) + (n − 1) (φi (v) − v({i})) .
Because any j ≠ i is null in v, v(N) = v({i}). This implies that
v({i}) = φi (v) + (n − 1) (φi (v) − v({i})) ⇔ φi (v) = v({i}).
Overall, φi (v) = v(N). □
Lemma C.3. Suppose that φ satisfies (E), (MR), (HM-NGC). If player i ∈ N is null in v, then player i is
also null in RHM,N\{ j} (φ(v), v) for any j ≠ i.
23

Proof. Let v ∈ V and i ∈ N be such that player i is null in v. For any j ≠ i and T ⊆ N \ {i},
RHM,N\{ j} (φ(v), v) (T ∪{i})−RHM,N\{ j} (φ(v), v) (T ) =



v ({i, j }) − φ j (v|{i, j}) if T = { j },
(v(T ∪ {i, j }) − v(T ∪ { j }))
− φ j (v|T∪{i, j}) − φ j (v|T∪{ j}) if T ≠ { j }.
If T = { j }, since player i is null in v and φ satisfies (MR), we have
v({i, j }) − φ j (v|{i, j}) = v({ j }) − φ j (v|{ j}) = v({ j }) − v({ j }) = 0.
Similarly, if T ≠ { j },
(v (T ∪ {i, j }) − v (T ∪ { j })) − φ j (v|T∪{i, j}) − φ j (v|T∪{ j}) = 0 − φ j (v|T∪{ j}) − φ j (v|T∪{ j}) = 0.
Thus, player i is null in RHM,N\{ j} (φ(v), v). □
Lemma C.4. The following statements hold.
(i) If φ satisfies (E), (EG), and (HM-NGC), then φ = Sh.
(ii) If φ satisfies (E), (EG), and (F-NGC), then φ = C IS.
(iii) If φ satisfies (E), (EG), and (M-NGC), then φ = E N SC.
Proof. (i) Take any v ∈ V and i, j ∈ N. By construction, any k ≠ i, j is a null player in RHM,{i, j} (φ(v), v).
Hence, by (HM-NGC), (EG) and (E), we have
φi (v) − φ j (v) = φi RHM,{i, j} (φ(v), v) − φ j RHM,{i, j} (φ(v), v)
= RHM,{i, j} (φ(v), v) ({i}) − RHM,{i, j} (φ(v), v) ({ j })
=
©
«
v(N \ { j}) −
∑︁
k≠i, j
φk (v|N\{ j})a
®
¬
−
©
«
v(N \ {i}) −
∑︁
k≠i, j
φk (v|N\{i})a
®
¬
= φi (v|N\{ j}) + φ j (v|N\{ j}) − φi (v|N\{i}) + φ j (v|N\{i}) .
Note that |Null(v|N\{k})| ≥ |Null(v)| where k = i, j. Therefore, we show the uniqueness of the solution by
induction on the number of null players in v. We divide the proof into three cases.
Case 1: |Null(v)| ≥ n − 1. In this case, φ is uniquely determined by (E), (EG), and (MR).
Case 2: |Null(v)| = n − 2. For {i, j } = N \ Null(v), by (EG), φi (v) − φ j (v) = v({i}) − v({ j }). Moreover,
by (HM-NGC) and (MR), for any k ∈ Null(v),
φi (v) = φi RHM,{i,k} (φ(v), v) = RHM,{i,k} (φ(v), v) (N) = v (N) −
∑︁
h≠i,k
φh (v|N) = v({i, j }) − φ j (v).
24

Therefore, φi (v) and φ j (v) are uniquely determined.
Induction hypothesis: Suppose that φ is uniquely determined for any v ∈ V with |Null(v)| ≥ k, where
k ∈ {1, . . . , n}.
Case 3: |Null(v)| = k − 1. Take any i ∈ N \ Null(v) and consider RHM,N\{i} (φ(v), v). By Lemma C.3,
|Null(RHM,N\{i} (φ(v), v))| ≥ k. Since φ satisfies (HM-NGC), φ j (v) = φ j RHM,N\{i} (φ(v), v) for any
j ≠ i. Moreover, by the induction hypothesis, the right-hand side is uniquely determined. Therefore, by (E),
φi (v) is also uniquely determined, and hence, φ is uniquely determined for v with |Null(v)| = k − 1.
(ii) Take any v ∈ V and i, j ∈ N. By construction, any k ≠ i, j is a null player in RF,{i, j} (φ(v), v). Hence,
by (F-NGC) and (EG), we have
φi (v) − φ j (v) = φi RF,{i, j} (φ(v), v) − φ j RF,{i, j} (φ(v), v)
= RF,{i, j} (φ(v), v) ({i}) − RF,{i, j} (φ(v), v) ({ j })
= v({i}) − v({ j })
= CISi (v) − CIS j (v).
Since i, j ∈ N are arbitrarily, by (E), we conclude that φi (v) = C ISi (v).
(iii) Take any v ∈ V and i, j ∈ N. By construction, any k ≠ i, j is a null player in RM,{i, j} (φ(v), v). Hence,
by (M-NGC) and (EG), we have
φi (v) − φ j (v) = φi RM,{i, j} (φ(v), v) − φ j RM,{i, j} (φ(v), v)
= RM,{i, j} (φ(v), v) ({i}) − RM,{i, j} (φ(v), v) ({ j })
= v(N \ { j }) − v(N \ {i})
= E N SCi (v) − E N SCj (v).
Since i, j ∈ N are arbitrarily, by (E), we conclude that φi (v) = E N SCi (v).
□
References
Abe, T. and S. Nakada (2023): “Potentials and solutions of cooperative games with a fixed player set,”
International Journal of Game Theory, 52, 757–774.
Dragan, I. (1992): “An average per capita formula for the Shapley value,” LIBERTAS MATHEMATICA
(vol. I-XXXI), 12, 139–146.
25

Driessen, T. and Y. Funaki (1991): “Coincidence of and collinearity between game theoretic solutions,”
OR Spektrum, 13, 15–30.
——— (1997): “Reduced game properties of egalitarian division rules for TU-games,” in Game theoretical
applications to economics and operations research, Springer, 85–103.
Driessen, T. S. and T. Radzik (2002): “A weighted pseudo-potential approach to values for TU-games,”
International Transactions in Operational Research, 9, 303–320.
Funaki, Y. (1996): “Dual axiomatizations of solutions of cooperative games,” Working Paper.
Funaki, Y. and Y. Koriyama (2025): “Deriving egalitarian and proportional principles from individual
monotonicity,” International Journal of Game Theory, 54, 24.
Funaki, Y., Y. Koriyama, S. Nakada, and Y. Tamura (2025): “Characterizations of proportional division
value in TU-games via fixed-population consistency,” Working Paper.
Hart, S. and A. Mas-Colell (1989): “Potential, value, and consistency,” Econometrica, 589–614.
Joosten, R. A. M. G. (1996): “Dynamics, equilibria, and values,” Ph.D. thesis, Maastricht University.
Kaneko, T. and S. Nakada (2025): “Nullified-game consistency and axiomatizations of the Core of
TU-games with a fixed player set,” Economics Letters, 250, 112274.
Moulin, H. (1985): “The separability axiom and equal-sharing methods,” Journal of Economic Theory,
36, 120–148.
——— (1987): “Equal or proportional division of a surplus, and other methods,” International Journal of
Game Theory, 16, 161–186.
——— (2000): “Priority rules and other asymmetric rationing methods,” Econometrica, 68, 643–684.
Nakada, S. (2024): “Shapley meets Debreu: A decision-theoretic foundation for monotonic solutions of
TU-games,” mimeo.
Ruiz, L. M., F. Valenciano, and J. M. Zarzuelo (1996): “The least square prenucleolus and the least
square nucleolus. Two values for TU games based on the excess vector,” International Journal of Game
Theory, 25, 113–134.
26

——— (1998): “The family of least square values for transferable utility games,” Games and Economic
Behavior, 24, 109–130.
Shapley, L. S. (1953): “A value for n-person games,” in Contributions to the Theory of Games (AM-28),
Volume II, ed. by H. W. Kuhn and A. W. Tucker, Princeton, NJ: Princeton University Press, 307–317.
van den Brink, R., Y. Chun, Y. Funaki, and B. Park (2016): “Consistency, population solidarity, and
egalitarian solutions for TU-games,” Theory and Decision, 81, 427–447.
Wang, W., H. Sun, R. van den Brink, and G. Xu (2019): “The family of ideal values for cooperative
games,” Journal of Optimization Theory and Applications, 180, 1065–1086.
Weber, R. J. (1988): Probabilistic values for games, Cambridge University Press, 101–120.
Yokote, K., Y. Funaki, and Y. Kamijo (2016): “A new basis and the Shapley value,” Mathematical social
sciences, 80, 21–24.
Yokote, K., T. Kongo, and Y. Funaki (2018): “The balanced contributions property for equal contributors,”
Games and Economic Behavior, 108, 113–124.
Young, H. P. (1988): “Distributive justice in taxation,” Journal of Economic Theory, 44, 321–335.
27

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:19.420Z
- **Text Length:** 52093 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
