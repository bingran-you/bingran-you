# PDF Document: Funaki et al. - 2025 - Characterizations of Proportional Division Value in TU-Games via Fixed-Population Consistency.pdf

**File Path:** Funaki et al. - 2025 - Characterizations of Proportional Division Value in TU-Games via Fixed-Population Consistency.pdf

**Processed Date:** 2026-02-10T18:15:53.283Z

**File Size:** 582.71 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3230

**Title:** Characterizations of Proportional Division Value in TU-Games via Fixed-Population Consistency

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Characterizations of Proportional Division Value in TU-Games
via Fixed-Population Consistency∗
Yukihiko Funaki† Yukio Koriyama‡ Satoshi Nakada§ Yuki Tamura¶
September 29, 2025
Abstract
We study the proportional division value in TU-games, which distributes the worth of the grand coalition in
proportion to each player’s stand-alone worth. Focusing on fixed-population consistency, we characterize the propor
tional division value through three types of axioms: a homogeneity axiom, composition axioms, and a nullified-game
consistency axiom. The homogeneity axiom captures scale invariance with respect to the grand coalition’s worth.
The composition axioms ensure that payoffs remain consistent when the game is decomposed and recomposed. The
nullified-game consistency axiom requires that when some players’ payoffs are fixed, the solution for the remaining
players, computed in the game adjusted to account for these fixed payoffs, coincides with their original payoffs.
Together with efficiency and a fairness-related axiom, these axioms characterize the proportional division value.
Keywords: TU-games, proportional division value, fixed-population consistency.
∗Nakada acknowledges the financial support from Japan Society for the Promotion of Science KAKENHI: No.25K16606. Koriyama
acknowledges the financial support from Investissements d’Avenir, ANR-11-IDEX-0003/Labex Ecodec/ANR-11-LABX-0047. †School of Political Science and Economics, Waseda University. E-mail:funaki@waseda.jp. ‡CREST, Ecole Polytechnique, Institut Polytechnique de Paris. E-mail:yukio.koriyama@polytechnique.edu. §School of Management, Department of Business Economics, Tokyo University of Science. E-mail:snakada@rs.tus.ac.jp. ¶CREST, Ecole Polytechnique, Institut Polytechnique de Paris. E-mail:yuki.tamura@p-
olytechnique.edu.
1
arXiv:2511.05001v1 [econ.TH] 7 Nov 2025

1 Introduction
The proportional division value is one of the simplest and most intuitive solutions in cooperative games with transferable
utility (TU-games): each player receives a share of the grand coalition’s worth proportional to their stand-alone worth.
Despite its intuitive appeal, it has received relatively less axiomatic attention compared to solutions such as the Shapley
value (Shapley, 1953) or other linear solutions.
In this paper, we focus on the consistency properties satisfied by the proportional division value. In particular, we
characterize it through fixed-population consistency, which examines how a solution responds to changes in certain coali
tion worths while keeping the set of players unchanged. Unlike the classical notion of “variable-population” consistency,
where some players may leave after receiving their payoffs, fixed-population consistency applies to settings in which
the player set remains the same and only aspects of the game, such as specific coalition worths, are modified. Since
in many applications the set of participants remains the same over time, this perspective provides a meaningful and
natural benchmark for evaluating solution concepts, highlighting how a solution responds systematically and predictably
to such changes. From a technical standpoint, fixed-population consistency may also require a distinct line of proof,
since the techniques used in the variable-population case cannot always be applied directly.
Our analysis proceeds along three lines. First, we introduce an axiom formalizing homogeneity and another capturing
a notion of normalization, and show that these two axioms suffice to characterize the proportional division value
(Theorem 1). The homogeneity axiom, grand-coalition homogeneity, requires that if the worth of the grand coalition
is scaled up or down by some factor, then each player’s payoff scales proportionally by the same factor. This captures
scale invariance: the solution treats the problem consistently regardless of the magnitude of the grand coalition’s
worth. The normalization axiom, grand-coalition normalization, requires that if each player’s stand-alone worth is
subtracted from the grand coalition’s worth, then each player’s payoff decreases by exactly that amount. This ensures
that individual contributions are respected and that only the surplus (or deficit) generated through cooperation is
allocated systematically.
Second, we develop composition-based axioms, extending Young (1988)’s characterization of the proportional solution
in bankruptcy problems to general TU-games. Composition embodies systematic consistency: large allocation problems
can be decomposed into smaller subproblems and recomposed without altering the outcome. In the bankruptcy context,
this ensures that an allocation recommended by a solution remains unchanged, whether it is determined all at once
or through successive adjustments. Our extension shows that the same principle applies more broadly in cooperative
games (Theorems 2 and 3).
Finally, we study a nullified-game consistency axiom. This axiom requires that when some players’ payoffs are fixed,
the solution for the remaining players, computed in the game adjusted to account for these fixed payoffs, coincides with
their original payoffs. The population of players remains unchanged, but the contributions of the “nullified” players,
whose payoffs have been fixed, are effectively neutralized in the residual game. Combined with efficiency and a fairness
2

condition, this axiom provides two characterizations of the proportional division value (Theorems 4 and 5).
Taken together, our results show that the proportional division value is not only simple and intuitive, but also that,
if one requires solutions to satisfy fixed-population consistency as well as efficiency and/or fairness-related conditions,
it is the unique solution meeting these criteria.
In the literature, characterizations of the proportional division value have been established for universal TU-games
and their subclasses. In addition, variants of the proportional division value, often combined with other solution concepts
such as the Shapley value and the Equal Division, have been proposed and studied.1 For a comprehensive overview,
we refer to Zou (2021). Complementing this work, Funaki and Koriyama (2025) characterize the proportional division
value and its variants under the individual monotonicity axiom, allowing shares to deviate from the stand-alone worth
and, through zero-sum adjustments, to incorporate redistributive social objectives. Separately, Funaki et al. (2025)
study a different class of solutions, linear solutions, and provide characterizations based on either composition axioms
or nullified-game consistency axioms.
The rest of the paper is organized as follows. In Section 2, we define the model. In Section 3, we establish a charac
terization of the proportional division value based on a homogeneity axiom. In Section 4, we provide characterizations
based on composition axioms and discuss the relationship of our results to the characterization of the proportional so
lution in the context of the bankruptcy problem, as derived by Young (1988). In Section 5, we present characterizations
based on nullified-game consistency. Finally, in Section 6, we conclude.
2 The Model
A cooperative game with transferable utility (TU-game) is a pair (N, v), where N is a finite set of players with |N | ≥ 2
and v : 2N → R is a characteristic function satisfying v(∅) = 0. For each S ⊆ N , v(S) represents the worth of coalition
S. Throughout the paper, we fix the player set N and identify each game solely by its characteristic function. Let
Vall denote the set of all TU-games, and let V ⊆ Vall denote the subclass of games with P
k∈N v(k) ̸= 0. Our analysis
focuses on V, except in Lemma 1 (Section 3), which applies to Vall, and in Section 5, where we consider subgames of V.
For each v ∈ V and each α ∈ R, let vα ∈ V be defined by
vα(S) :=

 
 
v(S) if S ̸= N,
α if S = N.
A solution is a function φ : V → RN , where for each v ∈ V and each i ∈ N , φi(v) is the payoff assigned to player i
1Examples include Kamijo and Kongo (2015), Ortmann (2000), Khmelnitskaya and Driessen (2003), Zou et al. (2021), Zou et al. (2022),
and Funaki and Koriyama (2025).
3

in v. We focus on studying the proportional value: for each v ∈ V and each i ∈ N ,
Pi(v) = v({i})
P
k∈N v({k}) v(N ).
3 A Homogeneity Axiom
We begin by establishing a characterization of the proportional division value based on a homogeneity axiom. This ax
iom requires that if the worth of the grand coalition is multiplied by some factor, then each player’s payoff is multiplied
by the same factor. Equivalently, the solution is homogeneous of degree one with respect to the worth of the grand
coalition. The axiom guarantees that no player’s relative share changes merely because the overall “size of the pie” has
been rescaled. It can therefore be viewed as a consistent criterion, ensuring that the solution remains consistent across
different scales of the cooperative surplus (or deficit).
Grand-Coalition Homogeneity (GH): For each v ∈ V and each α ∈ R,
φ vαv(N) = αφ(v).
Several axioms related to (GH) have been studied in TU-games. The most fundamental of these, which is stronger
than (GH), is Homogeneity: if the worth of every coalition is multiplied by the same factor, each player’s payoff is
multiplied by that factor as well. Funaki and Koriyama (2025) define Weak Homogeneity, which imposes this requirement
only on the unanimity game. They use it to characterize a family of solutions called Weighted Surplus Sharing values.
They also introduce Weak Grand Coalition Homogeneity, a weaker form of (GH), which imposes the (GH) requirement
only on the unanimity game. This axiom is used to characterize the Shifted Proportional Division value, a variant of
the proportional division value in which each player’s stand-alone worth is adjusted so that the total adjustment sums
to zero, and this adjusted worth determines the player’s share.
While homogeneity-type axioms focus on robustness with respect to scaling coalition worths, fairness, introduced by
van den Brink (2002), and weak fairness, introduced by van den Brink et al. (2016), concern additive changes: modifying
the worth of a coalition changes the payoffs of all, or a specified group of, players by the same amount.
Our next axiom states that if each player’s stand-alone worth is subtracted from the worth of the grand coalition,
then the solution should reduce each player’s payoff by exactly their stand-alone worth. Intuitively, this means that each
player’s individual worth is treated as a guaranteed baseline, while the solution allocates only the additional surplus (or
deficit) generated through cooperation. In this way, the axiom decomposes the game into two parts: the individualistic
component, which each player secures independently, and the cooperative component, which corresponds to the incre
mental gains from cooperation. By separating these components, the solution ensures that individual contributions are
4

respected while the cooperative surplus (or deficit) is divided systematically. This interpretation also reflects real-world
bargaining and contractual settings, in which each player’s individual worth is secured first, and negotiations determine
how to share the additional surplus (or deficit) created through cooperation.
Grand-Coalition Normalization (GN): For each v ∈ V and each i ∈ N ,
φi vv(N)−P
k∈N v({k}) = φi(v) − v({i}).
(GH) and (GN) are naturally considered together, as they impose complementary forms of consistency. (GN) ensures
that each player’s stand-alone worth is treated as a guaranteed baseline, so that the solution allocates only the additional
gains or deficits generated by cooperation. (GH), in contrast, requires that all players’ payoffs respond proportionally
when the grand coalition’s worth changes, thereby preserving the relative structure of the allocation under expansion
or contraction of the cooperative surplus. Together, these axioms ensure that the solution accounts for each player’s
individual contribution while adjusting systematically with changes in the total surplus or deficit.
Here is our first characterization of the proportional division value:
Theorem 1. A solution satisfies (GH) and (GN) if and only if it is the proportional division value.
Proof. (⇐) Let v ∈ V, i ∈ N , and α ∈ R.
Pi vαv(N) = v({i})
P
k∈N v({k}) αv(N ) = αPi(v).
Hence, the proportional division value satisfies (GH). Also,
Pi vv(N)−P
k∈N v({k}) = v({i})
P
k∈N v({k}) v(N ) −
X
k∈N
v({k})
!
= v({i})
P
k∈N v({k}) v(N ) −
P
k∈N v({k})
P
k∈N v({k}) v({i}) = Pi(v) − v({i}).
Hence, the proportional division value satisfies (GN).
(⇒) Let φ be a solution satisfying (GH) and (GN).
Let v ∈ V and i ∈ N . By (GH), when v(N ) = 0, φi(v) = 0 = Pi(v). Now suppose that v(N ) ̸= 0. By (GH),
φi vv(N)−P
k∈N v({k}) = φi v
v(N )−P
k∈N v({k})
v(N) v(N) = v(N ) − P
k∈N v({k})
v(N ) φi(v). (1)
By (GN) and (1),
φi (v) = v({i}) + φi vv(N)−P
k∈N v({k}) = v({i}) + v(N ) − P
k∈N v({k})
v(N ) φi(v).
5

Then
φi(v) = v({i})
P
k∈N v({k}) v(N ) = Pi(v).
We provide examples to demonstrate the independence of the axioms used in Theorem 1. First, consider a dictator
ship, where one player always receives the entire worth of the grand coalition. This solution satisfies (GH) but violates
(GN).
Next, we drop (GH). Let |N | = n, and for notational convenience, we label the players so that N = {1, . . . , n}. Let
W = {v ∈ V : for each i ̸= n, v({i}) = 0}. Let x := (xi)n−1
i=1 ∈ Rn−1 be such that Pn−1
i=1 xi = 0. Define the solution φ as
follows: for each v ∈ W, set φ(v) = (x, v(N )),2 and for each v ∈ V \ W, set φ(v) = P (v). The solution violates (GH):
for each v ∈ W and i = 1, . . . , n − 1, φi(v) is fixed at xi, meaning that their payoff is independent of v(N ).
To see that the solution φ satisfies (GN), let v ∈ W. For each i ̸= n, because v({i}) = 0,
φi vv(N)−P
k∈N v({k}) = xi = φi(v).
Moreover, note that v(N ) − P
k∈N v({k}) = v(N ) − v({n}). Hence,
φn vv(N)−P
k∈N v({k}) = v(N ) − v({n}) = φn(v) − v({n}).
Note that for each v ∈ V \ W, φ(v) = P (v). Because the proportional division value satisfies (GN), so does φ.
In the context of TU-games, linearity is a standard axiom that is often imposed, and many well-known solutions,
such as the Shapley value, the Center of Imputation Set (CIS) value, and the Egalitarian Non-Separable Contribution
(ENSC) value (Driessen and Funaki, 1991), satisfy it. Interestingly, however, no linear solution satisfies (GN) on the
entire domain of TU-games. Note that (GN) is well-defined on Vall. Linearity is an algebraic axiom that relies on
closure under addition and scalar multiplication. The restricted domain V (e.g., excluding games with zero total stand
alone worth) is not closed under these operations. For this reason, it is more natural and mathematically consistent
to formulate linearity on Vall rather than on V, ensuring that sums and scalar multiples of games remain within the
domain.3
Lemma 1. (GN) and (L) are incompatible on Vall.
Proof. Suppose that there is a solution φ satisfying (GN) and (L). By (GN) and (L), for each v ∈ Vall and each i ∈ N ,
φi vv(N)−P
k∈N v({k}) = φi(v) − v({i}) ⇐⇒ φi vv(N)−P
k∈N v({k}) − φi(v) = −v({i})
⇐⇒ φi vv(N)−P
k∈N v({k}) − v = −v({i})
⇐⇒ φi (w) = −v({i}),
2This means that each player i ∈ {1, . . . , n − 1} is assigned xi, and player n is assigned v(N ). 3Linearity (L): For each pair v, v′ ∈ Vall and each α ∈ R, φ(v + v′) = φ(v) + φ(v′) and φ(αv) = αφ(v).
6

where
w(S) =

 
 
0 if S ̸= N
−
P
k∈N v({k}) if S = N.
.
Note that w depends only on − P
k∈N v(k) ∈ R, i.e., the total stand-alone worth. This implies that for each pair
v, v′ ∈ V such that P
k∈N v(k) = P
k∈N v′(k), even if there is k ∈ N such that v({k}) ̸= v′({k}), we must have that, for
each i ∈ N , v′({i}) = φi(w) = v({i}). This is impossible.
4 Composition Axioms
4.1 Characterizations
We now define a TU-game version of composition axioms. These axioms were originally introduced in the context of
the bankruptcy problem, where a group of agents has claims on a resource that exceeds what is available, and the
entire resource must be allocated among them according to their claims. Young (1988) and Moulin (2000) proposed
composition axioms in this context.4 Composition axioms describe how a solution should respond when the resource to
be allocated changes after an initial allocation.
Specifically, a solution satisfies a composition axiom if, for a problem that can be decomposed into subproblems,
applying the solution directly to the original problem gives the same outcome as first applying it to a reference subproblem
and then applying it to the residual problem derived from the allocation of that reference subproblem. In the bankruptcy
problem, this gives rise to two scenarios, corresponding to two invariance requirements: one when the resource increases
and one when it decreases.
The first axiom, Composition Up, considers cases in which the resource to be allocated is later found to be larger
than initially estimated. The allocation can be determined in one of two ways. One can apply the allocation solution
directly to the revised resource. Alternatively, one can apply the solution to the initially estimated amount, adjust the
claims based on the resulting allocation, and then reapply the solution to allocate the remaining amount; the sum of the
initial and additional allocations gives the final allocation. Composition Up requires that, in either case, the resulting
allocation is the same.
The second axiom, Composition Down, considers cases in which the resource to be allocated is later found to be
smaller than initially estimated. The allocation can be determined in one of two ways. One can apply the allocation
solution directly to the revised resource. Alternatively, one can apply the solution to the initially estimated amount,
treat the resulting allocation as new claims, and then reapply the solution to allocate the actual amount using these
new claims; this gives the final allocation. Composition Down requires that, in either case, the resulting allocation is
the same.
4Relating to the bankruptcy problem, Moulin (1987) introduced a composition property in the context of the surplus sharing problem.
7

Since TU-games provide a richer framework than the bankruptcy problem, we adapt each composition axiom to fit
the TU-game setting.5
Let
ΥU :=
(
(x, v) ∈ RN × V :
X
k∈N
xk ̸= v(N )
)
and ΥD :=
(
(x, v) ∈ RN × V :
X
k∈N
xk ̸= 0
)
.
We now define residual games. Let U : ΥU → V be such that for each S ⊆ N ,
U (x, v)(S) := v(S) −
X
k∈S
xk .
Composition Up (CU): For each v ∈ V and each α ∈ R,
(φ (vα) , v) ∈ ΥU ⇒ φ(v) = φ (vα) + φ (U (φ (vα) , v)) .
Note that for each v ∈ V and each i ∈ N , we have Pi v
P
k∈N v({k}) = v({i}). Hence, for each i ∈ N ,
U Pv
P
k∈N v({k}) , v (i) = 0,
which implies that U P v
P
k∈N v({k}) , v ∈/ V. Since our objective is to study which fixed-population consistency
axioms the proportional division value satisfies, we impose the (CU) requirement only when the residual game lies
within the class of TU-games under consideration. For the same reason, the (CD) requirement, defined next, is likewise
imposed only when the residual game belongs to this class.
Here is the function that defines residual games corresponding to (CD). Let D : ΥD → V be such that for each
S ⊆ N,
D(x, v)(S) :=

 
 
P
k∈S xk if S ̸= N,
v(N ) if S = N.
Composition Down (CD): For each v ∈ V and each α ∈ R,
(φ (vα) , v) ∈ ΥD ⇒ φ(v) = φ (D (φ (vα) , v)) .
5For a comprehensive discussion of how the composition axioms defined here relate to those studied in the context of the bankruptcy
problem, we refer to Funaki et al. (2025).
8

(CU) and (CD) capture a natural consistency requirement for solutions in TU games. In cooperative settings, the
worth of the grand coalition may change for any reason—new resources may become available, or existing resources may
be reduced—after an initial allocation has been proposed. Both axioms formalize how an allocation for a reference game
can be used to decompose the game into a baseline and a residual component. (CU) requires that the solution applied
to the original game can be expressed as the sum of the solution for a reference payoffs and the solution applied to the
residual game defined by the difference between the initial worth and the reference payoffs. Similarly, (CD) requires
that the solution for the original game coincides with the solution applied to a game in which each coalition’s worth is
replaced by the sum of its members’ reference payoffs, while keeping the grand coalition’s worth unchanged. Together,
these axioms ensure that the solution respects prior payoffs as a meaningful baseline and distributes any residual surplus
consistently. Note that (CU) and (CD) are logically independent. However, when combined with efficiency,6 linearity,
and symmetry,7 (CU) and (CD) become equivalent.8
Our next axiom requires that if a game produces no additional value when all players cooperate—meaning the total
worth of the grand coalition equals the sum of what each player can achieve individually—then each player should
receive exactly what they could achieve on their own. This captures the intuition that when cooperation brings no extra
benefit or loss, it is fair for players to retain their individual contributions.
Strong Inessential-Game Property (SIP): For each v ∈ V,
v(N ) =
X
k∈N
v({k}) ⇒ for each i ∈ N, φi(v) = v({i}).
We note that Ruiz et al. (1996) define a similar axiom, which they call the “inessential game.” Their axiom imposes
the same condition as (SIP) but only for additive games. Since our requirement applies to all games in which the total
stand-alone worth equals the worth of the grand coalition, (SIP) is stronger than their axiom.
Finally, we define a weak continuity.
Grand-Coalition Continuity (GCON): φ is continuous with respect to the grand coalition worth.
We now present characterizations of the proportional division value derived from composition properties.
Theorem 2. The following statements are equivalent.
6The definition is provided below. 7This means that if two players are symmetric, their payoffs should be identical. 8We can also naturally consider a different type of composition down axiom. Funaki et al. (2025) discuss the relationship among them in
details.
9

(i) φ = P .
(ii) φ satisfies (CU), (SIP), (GN), and (GCON).
(iii) φ satisfies (CD), (SIP), (GN), and (GCON).
Proof. (i) ⇒ (ii) and (iii). The proportional division value trivially satisfies (SIP) and (GCON). In addition, Theorem
1 shows that it also satisfies (GN). Therefore, we now focus on (CU) and (CD). Let v ∈ V, α ∈ R, and i ∈ N . First,
suppose that (P (vα) , v) ∈ ΥU .
Pi (vα) + Pi (U (P (vα) , v)) = v({i})
P
k∈N v({k}) α +
v({i}) − v({i})
P
k∈N v({k}) α
P
k∈N v({k}) − v({k})
P
k′∈N v({k′}) α
(v(N ) − α)
= v({i})
P
k∈N v({k}) α +
P
k∈N v({k})−α
P
k∈N v({k}) v({i})
P
k∈N v({k}) − α (v(N ) − α)
= v({i})
P
k∈N v({k}) α + v({i})
P
k∈N v({k}) (v(N ) − α)
= v({i})
P
k∈N v({k}) v(N ) = P (v).
Hence, the proportional division value satisfies (CU).
Now suppose that (P (vα) , v) ∈ ΥD.
Pi (D (P (vα, v))) =
v({i})
P
k∈N v({k}) α
P
k∈N
v({k})
P
k′∈N v({k′}) α
v(N )
= v({i})
P
k∈N v({k}) α × 1
P
k∈N v({k})α
P
k∈N v({k})
× v(N )
= v({i})
P
k∈N v({k}) v(N ) = Pi(v).
Hence, the proportional division value satisfies (CD).
(ii) ⇒ (i). Let φ be a solution satisfying (GN).
Claim 1. For each v ∈ V, each i ∈ N , and each n ∈ Z>0,9
φi (v) = nv({i}) + φi vv(N)−n P
k∈N v({k}) .
Proof of Claim 1. Let v ∈ V and i ∈ N . By (GN),
φi (v) = v({i}) + φi vv(N)−P
k∈N v({k}) .
9We write Z>0 = {n ∈ Z : n > 0}, and use analogous notations for other sets.
10

Again by (GN),
φi vv(N)−P
k∈N v({k}) = v({i}) + φi vv(N)−P
k∈N v({k})−P
k∈N v({k})
= v({i}) + φi vv(N)−2 P
k∈N v({k}) .
Hence,
φi (v) = 2v({i}) + φi vv(N)−2 P
k∈N v({k}) .
By applying an analogous argument repeatedly, we conclude that for each n ∈ Z>0,
φi (v) = nv({i}) + φi vv(N)−n P
k∈N v({k}) .
■
Now in addition to (GN), suppose that φ satisfies (SIP).
Claim 2. For each v ∈ V, each i ∈ N , and each n ∈ Z,
φi vn P
k∈N v({k}) = nv({i}).
Proof of Claim 2. Let v ∈ V and i ∈ N . First by (SIP),
φi v
P
k∈N v({k}) = v({i}).
By Claim 1, for each m ∈ Z>0,
φi v
P
k∈N v({k}) = mv({i}) + φi v(1−m) P
k∈N v({k}) .
Hence,
v({i}) = mv({i}) + φi v(1−m) P
k∈N v({k}) ⇐⇒ φi v(1−m) P
k∈N v({k}) = (1 − m)v({i}).
This implies that for each n ∈ Z≤0,
φi vn P
k∈N v({k}) = nv({i}).
Let n ∈ Z>1. By Claim 1,
φi vn P
k∈N v({k}) = (n − 1)v({i}) + φi v(n−(n−1)) P
k∈N v({k})
= (n − 1)v({i}) + v({i})
= nv({i}).
■
Now suppose that φ also satisfies (CU).
11

Claim 3. For each v ∈ V, each i ∈ N , and each n ∈ Z̸=0,
φi v n−1
n
P
k∈N v({k}) = n − 1
n v({i}).
Proof of Claim 3. Let v ∈ V, i ∈ N , and n ∈ Z̸=0. By Claim 2, when n = −1 or 1, the equation in the claim holds.
Now suppose that n ∈/ {−1, 1}. Let w ∈ V be such that
w(S) =

    
    
1
n v(S) if |S| = 1,
v(S) − n−1
n
P
k∈S v({k}) if 1 < |S| < |N |,
n−1 n
P
k∈N v({k}) if S = N.
By (CU) and Claim 2,10 because 0 ∈ Z,
0 = φi w0 = φi w−(n−1) P
k∈N w({k}) + φi U φ w−(n−1) P
k∈N w({k}) , w0 ,
= −(n − 1)w({i}) + φi U φ w−(n−1) P
k∈N w({k}) , w0 .
Then,
U φ w−(n−1) P
k∈N v({k}) , w0 (S) =

 
 
w(S) + P
k∈S (n − 1) w({k}) if S ̸= N,
0+P
k∈N (n − 1)w({k}) if S = N,
=

    
    
nw(S) if |S| = 1,
w(S) + P
k∈S (n − 1) w({k}) if 1 < |S| < |N |,
P
k∈N (n − 1)w({k}) if S = N,
=

    
    
n1
n v(S) if |S| = 1,
v(S) − n−1
n
P
k∈S v({k}) + P
k∈S
n−1
n v({k}) if 1 < |S| < |N |,
P
k∈N
n−1
n v({k}) if S = N,
=

 
 
v(S) if S ̸= N,
n−1 n
P
k∈N v({k}) if S = N.
Consequently,
φi v n−1
n
P
k∈N v({k}) = (n − 1)w({i}) = n − 1
n v({i}).
■
10Note that for each j ∈ N , φj w−(n−1) P
k∈N w({k}) = −(n − 1)w({j}) = − n−1
n v({j}). Because n ̸= 1, we have
P
k∈N φi w−(n−1) P
k∈N w({k}) ̸= 0. This implies that φ w−(n−1) P
k∈N w({k}) , w0 ∈ Vb.
12

Claim 4. For each v ∈ V, each n ∈ Z̸=0, and each i ∈ N ,
φi v 1
n
P
k∈N v({k}) = 1
n v({i}).
Proof of Claim 4. Let v ∈ V, i ∈ N , and n ∈ Z̸=0. By (GN),
n−1
n v({i}) = φi v n−1
n
P
k∈N v({k}) = v({i}) + φi v( n−1
n −1) P
k∈N v({k})
= v({i}) + φi v− 1
n
P
k∈N v({k}) ,
and by Claim 3,
φi v− 1
n
P
k∈N v({k}) = n − 1
n v({i}) − v({i})
= −1
n v({i}).
■
Claim 5. For each v ∈ V, each i ∈ N , each m ∈ Z≥0, and each n ∈ Z̸=0,
φi v m
n
P
k∈N v({k}) = m
n v({i}).
Proof Claim 5. The proof proceeds by induction on m. The statement holds for m = 0 by Claim 2, and for m = 1 by
Claim 4. Now, suppose m ≥ 2 and that the statement holds up to m − 1. Let v ∈ V, i ∈ N and n ∈ Z̸=0.
Case 1: n = m − 1. By (GN) and Claim 4,
φi v m
n
P
k∈N v({k}) = v({i}) + φi v( m
n −1) P
k∈N v({k})
= v({i}) + φi v 1
n
P
k∈N v({k})
= v({i}) + 1
n v({i})
= n+1
n v({i}) = m
n v({i}).
Case 2: n ̸= m − 1. By (CU),
φi v m
n
P
k∈N v({k}) = xi + φi U x, v m
n
P
k∈N v({k}) ,
where x = φ v m−1
n
P
k∈N v({k}) , and xi = m−1
n v({i}) by the induction hypothesis. Note that
U x, v m
n
P
k∈N v({k}) (S) =

 
 
v(S) − P
k∈S
m−1
n v({k}) if S ̸= N,
m n
P
k∈N v({k}) − P
k∈N
m−1
n v({k}) if S = N,
=

    
    
n−m+1
n v(S) if |S| = 1,
v(S) − P
k∈S
m−1
n v({k}) if 1 < |S| < |N |,
1
n−m+1
n−m+1 n
P
k∈N v({k}) if S = N.
13

Then, we can apply Claim 4 to the game n−m+1
n v and obtain:
φi U x, v m
n
P
k∈N v({k}) = 1
n−m+1
n−m+1
n v({i}) = 1
n v({i}).
Overall,
φi v m
n
P
k∈N v({k}) = m − 1
n v({i}) + 1
n v({i}) = m
n v({i}).
■
Finally, in addition to (SIP), (GN), and (CU), suppose that φ satisfies (GCON). By (GCON) and Claim 5, for each
v ∈ V, each i ∈ N , and each α ∈ R,
φi vα P
k∈N v({k}) = αv({i}).
Let β : V → R be defined by
β(v) := v(N )
P
k∈N v({k}) .
Then, for each v ∈ V and each i ∈ N ,
φi(v) = φi vβ(v) P
k∈N v({k}) = β(v) × v({i}) = v({i})
P
k∈N v({k}) v(N ) = Pi(v).
(iii) ⇒ (i). After Claim 5, the same argument as above applies, since composition axioms are not invoked from that
point onward. Hence, we prove Claim 5 using (CD). In the proof below, we do not rely on Claims 3 or 4, because the
proofs of those claims given earlier use (CU).
Let φ be a solution satisfying (CD), (SIP), and (GN). The proof proceeds by induction on m. The statement holds
for m = 0 by Claim 2.11 Now, suppose m ≥ 1 and that the statement holds up to m − 1. Let v ∈ V, i ∈ N and n ∈ Z̸=0.
Now suppose that the equation in the claim holds for m − 1 ≥ 0. By (CD),
φi v m
n
P
k∈N v({k}) = φi D φ v
P
k∈N v({k}) , v m
n
P
k∈N v({k})
By Claim 2,
φi v
P
k∈N v({k}) = v({i}).
This implies that
Dφv
P
k∈N v({k}) , v m
n
P
k∈N v({k}) (S) =

 
 
P
k∈S v({k}) if S ̸= N,
m n
P
k∈N v({k}) if S = N.
(2)
Let w ∈ V be such that
w(S) =

 
 
1 n
P
k∈S v({k}) if S ̸= N,
m
P
k∈N w({k}) if S = N.
11Note that Claim 2 relies only on (SIP) and (GN).
14

By (CD),
φi(w) = φi D φ wn P
k∈N w({k}) , w .
By Claim 2 and definition of w, φi(w) = mw({i}) = m
n v({i}). Hence,
m
n v({i}) = φi D φ wn P
k∈N w({k}) , w .
Again, by Claim 2,
φi wn P
k∈N w({k}) = nw({i}) = v({i}).
Then,
D φ wn P
k∈N w({k}) , w (S) =

 
 
n
P
k∈S w({k}) if S ̸= N,
m
P
k∈N w({k}) if S = N,
=

 
 
P
k∈S v({k}) if S ̸= N,
m n
P
k∈N v({k}) if S = N.
This is the same game as (2). Consequently,
φi v m
n
P
k∈N v({k}) = φi D φ v
P
k∈N v({k}) , v m
n
P
k∈N v({k})
= φi D φ wn P
k∈N w({k}) , w = m
n v({i}).
We provide examples to demonstrate the independence of the axioms used in Theorem 2. First consider the CIS
value.12 It satisfies (CU), (CD),13 (SIP), and (GCON). However, because the CIS value satisfies (L), by Lemma 1, it
violates (GN).
Second, we drop (SIP). Let α ∈ R>0. Define the solution φ as follows: for each v ∈ V and each i ∈ N , set
φi(v) = Pi vv(N)−α . Because the proportional division value satisfies (CU), (CD), and (GCON), so does φ. However,
because the grand coalition of each v ∈ V is reduced by α, φ violates (SIP). We prove that this solution satisfies (GN).
12Center of Imputation Set (CIS) value: For each v ∈ V and each i ∈ N ,
CISi(v) = v({i}) + 1
|N |

v(N ) −
X
k∈N
v({k})

.
13For a proof that the CIS value satisfies (CU) and (CD), see Funaki et al. (2025).
15

Let v ∈ V and i ∈ N . Then,
φi vv(N)−P
k∈N v({k}) = Pi vv(N )−α−P
k∈N v({k})
= v({i})
P
k∈N v({k}) v(N ) − α −
X
k∈N
v({k})
!
= v({i})
P
k∈N v({k}) (v(N ) − α) −
P
k∈N v({k})
P
k∈N v({k}) v({i})
= Pi vv(N)−α − v({i}) = φi(v) − v({i}).
Hence, φ satisfies (GN).
Third we drop (CU) or (CD). Let |N | = n, and for notational convenience, we label the players so that N =
{1, . . . , n}. Let η : R → R be defined by η(α) := α + sin(2πα). Note that η(α + 1) = η(α) + 1. Let W =
{v ∈ V : v({1}) = 1 and for each i ̸= 1, v({i}) = 0}. Define the solution φ as follows: for each v ∈ W, set φ(v) =
(η(v(N )), 0, . . . , 0), and for each v ∈ V \ W, set φ(v) = P (v). For each v ∈ W, φ satisfies the requirement of (SIP). Also,
the proportional division value satisfies (SIP). As a result, φ satisfies (SIP). Note that η is continuous. Thus φ satisfies
(GCON). On the other hand, there is v ∈ W and α ∈ R such that U (φ (vα, v)) , D (φ (vα, v)) ∈/ W, which implies that φ
violates (CU) and (CD). We prove that this solution satisfies (GN). It suffices to show that for each v ∈ W, the solution
satisfies the requirement of (GN), since v v(N)−P
k∈N v({k}) ∈ W and the proportional division value satisfies (GN). Let
v ∈ W. For each i ̸= 1,
φi vv(N)−P
k∈N v({k}) = 0 = φi(v) − v({i}).
Now,
φ1 vv(N)−P
k∈N v({k}) = φ1 vv(N )−v({1})
= φ1 vv(N)−1
= η (v(N ) − 1)
= η (v(N )) − 1
= φ1(v) − v({1}).
Hence, φ satisfies (GN).
Finally we drop (GCON). Let α ∈ Q>0. Define the solution φ as follows: for each v ∈ V, if for each i ∈ N ,
v({i}) ∈ Z, and v(N ) ∈/ Q, then set φ(v) = P vv(N)−α ; otherwise, set φ(v) = P (v). Because the proportional division
value satisfies (CU), (CD), (SIP), and (GN), so does φ. On the other hand, the solution clearly violates (GCON).
16

4.2 Connection to Composition Axioms in Bankruptcy Problems
Young (1988) establishes a characterization of the proportional solution,14 based on a composition axiom, in the context
of the bankruptcy problem. Since TU-games provide a richer framework than the bankruptcy problem, the composition
axioms we defined above differ from the one in Young (1988). Nevertheless, our characterizations based on (CU) closely
relate to Young’s characterization. To clarify this connection, we next modify (CU) into a form that becomes equivalent
to the axiom defined in the bankruptcy problem when our framework is restricted to that case, assuming that the worth
of the grand coalition represents the endowment to be allocated.
Limited Composition Up (LCU): For each v ∈ V, each α ∈ R, and each i ∈ N ,
0 ≤ α ≤ v(N ) and (φ (vα) , v) ∈ ΥU ⇒ φi(v) = φi (vα) + φi (U (φ(vα), v)) .
Analogously, we modify (CD) into a form that becomes equivalent to the axiom defined in the bankruptcy problem
when our framework is restricted to that case.
Limited Composition Down (LCD): For each v ∈ V, each α ∈ R, and each i ∈ N ,
0 ≤ v(N ) ≤ α and (φ (vα) , α) ∈ ΥD ⇒ φi(v) = φi (D (φ (vα) , v)) .
Young (1988)’s characterization of the proportional solution is derived from two properties: (LCU) and self-duality,
where, for each problem, the recommendation made by a solution coincides with that for the dual of the original prob
lem. Since self-duality, as defined for the bankruptcy problem, cannot be directly applied to TU-games, we modify the
property as follows, which turns out to be related to (GN).
One-Sided Ground-Coalition Normalization (OGN): For each v ∈ V and each i ∈ N ,
1. if P
k∈N v({k}) ≥ v(N ),
φi v
P
k∈N v({k})−v(N) = v({i}) − φi(v) and
2. if P
k∈N v({k}) < v(N ),
φi vv(N)−P
k∈N v({k}) = φi(v) − v({i}).
14We use the term “proportional solution” rather than “proportional division value” in the context of the bankruptcy problem.
17

In the context of the bankruptcy problem, only the first case arises. This implies that (OGN) is equivalent to
self-duality as defined in the bankruptcy problem when our framework is restricted to that case.
We finally define a symmetric property requiring that, for each game, its solution is the exact opposite of the solution
for the game obtained by reversing the worth of the grand coalition. This axiom reflects the idea that distributing a
positive surplus or distributing an equivalent shortfall should be treated as mirror images of one another.
Ground-Coalition Reversal (GR): For each v ∈ V,
φ(v) = −φ v−v(N) .
Based on these properties, we establish the following equivalences.
Theorem 3. The following statements are equivalent.
(i) φ = P .
(ii) φ satisfies (LCU), (GN), (GR), and (GCON).
(iii) φ satisfies (LCD), (GN), (GR), and (GCON).
(iv) φ satisfies (LCU), (OGN), (GR), and (GCON).
(v) φ satisfies (LCD), (OGN), (GR), and (GCON).
Proof. (ii) ⇐⇒ (iv) and (iii) ⇐⇒ (v). Note that under (GR), (GN) and (OGN) are equivalent. Thus, (ii) and (iv),
as well as (iii) and (v), are equivalent.
(i) ⇒ (ii) and (iv). By Theorems 1 and 2, the proportional division value satisfies (LCU), (LCD), and (GN).
Moreover, it is trivial to verify this solution also satisfies (GR).
(ii) ⇒ (i). Let φ be a solution satisfying (GN) and (GR).
Claim 6. For each v ∈ V, each i ∈ N , and each n ∈ Z,
φi vn P
k∈N v({k}) = nv({i}).
Proof of Claim 6. Let v ∈ V, i ∈ N , and n ∈ Z≥0.
Case 1: n = 1. By Claim 1 and (GR),
φi v
P
k∈N v({k}) = 2v({i}) + φi v− P
k∈N v({k})
= 2v({i}) − φi v
P
k∈N v({k}) .
18

Thus,
φi v
P
k∈N v({k}) = v({i}).
Case 2: n > 1. By Claim 1, (GR), and Case 1,
φi vn P
k∈N v({k}) = (n + 1)v({i}) + φi v(n−(n+1)) P
k∈N v({k})
= (n + 1)v({i}) + φi v− P
k∈N v({k})
= (n + 1)v({i}) − φi v
P
k∈N v({k})
= (n + 1)v({i}) − v({i}) = n({i}).
Moreover, by (GR),
φi v−n P
k∈N v({k}) = −nv({i}).
Case 3: n = 0. By Claim 1, (GR), and Case 1,
φi v0 = v({i}) + φi v− P
k∈N v({k})
= v({i}) − φi v
P
k∈N v({k})
= v({i}) − v({i}) = 0.
■
Claim 7. For each v ∈ V, each i ∈ N , and each m, n ∈ N,
φi v m
2n
P
k∈N v({k}) = mv({i}) − φi vm(1− 1
2n ) P
k∈N v({k}) .
Proof of Claim 7. Let v ∈ V, i ∈ N , and m, n ∈ N. By Claim 1,
φi v m
2n
P
k∈N v({k}) = v({i}) + φi v m
2n
P
k∈N v({k})−P
k∈N v({k})
= v({i}) + φi v( m
2n −1) P
k∈N v({k}) .
Again by Claim 1,
φi v( m
2n −1) P
k∈N v({k}) = v({i}) + φi v( m
2n −1) P
k∈N v({k})−P
k∈N v({k})
= v({i}) + φi v( m
2n −2) P
k∈N v({k}) .
By applying Claim 1 repeatedly,
φi v m
2n
P
k∈N v({k}) = mv({i}) + φi vm( 1
2n −1) P
k∈N v({k}) .
19

Finally, by (GR),
φi vm( 1
2n −1) P
k∈N v({k}) = −φi vm(1− 1
2n ) P
k∈N v({k}) .
Overall,
φi v m
2n
P
k∈N v({k}) = mv({i}) − φi vm(1− 1
2n ) P
k∈N v({k}) .
■
Claim 8. For each v ∈ V, each i ∈ N , and each n ∈ N,
φi v n
2
P
k∈N v({k}) = n
2 v({i}).
Proof of Claim 8. Let v ∈ V, i ∈ N , and n ∈ N. By Claim 7,
φi v n
2
P
k∈N v({k}) = nv({i}) − φi vn(1− 1
2)P
k∈N v({k})
= nv({i}) − φi v n
2
P
k∈N v({k}) .
Thus,
φi v n
2
P
k∈N v({k}) = n
2 v({i}).
■
In addition to (GN) and (GR), suppose that φ satisfies (LCU).
Claim 9. For each v ∈ V, each i ∈ N , and each m, n ∈ Z≥0,
φi v m
2n
P
k∈N v({k}) = m
2n v({i}).
Proof of Claim 9. The statement holds for m = 0 by Claim 6. The proof proceeds by induction on n. The statement
holds for n = 0 and n = 1 by Claims 6 and 8. Now, suppose n ≥ 2 and that the statement holds up to n − 1. Let v ∈ V,
i ∈ N , and m ∈ Z>0.
Case 1: m
2n ≥ 1
2 . By (LCU),
φi v m
2n
P
k∈N v({k}) = φi v 1
2
P
k∈N v({k}) + φi U φ v 1
2
P
k∈N v({k}) , v m
2n
P
k∈N v({k}) .
By Claim 8,
φi v 1
2
P
k∈N v({k}) = 1
2 v({i}).
20

Also,
U φ v1
2
P
k∈N v({k}) , v m
2n
P
k∈N v({k}) (S) =

    
    
1
2 v(S) if |S| = 1,
v(S) − 1
2
P
k∈S v({k}) if 1 < |S| < |N |,
m
2n − 1
2
P
k∈N v({k}) if S = N,
=

    
    
1
2 v(S) if |S| = 1,
v(S) − 1
2
P
k∈S v({k}) if 1 < |S| < |N |,
m−2n−1
2n−1 × 1
2
P
k∈N v({k}) if S = N.
By the induction hypothesis,15
φi U φ v 1
2
P
k∈N v({k}) , v m
2n
P
k∈N v({k}) = m − 2n−1
2n−1 × 1
2 v({i}).
Thus,
φi v m
2n
P
k∈N v({k}) = 1
2 + m − 2n−1
2n−1 × 1
2 v({i}) = 2n−1 + m − 2n−1
2n v({i}) = m
2n v({i}).
Case 2: m
2n < 1
2 . By Claim 7,
φi v m
2n
P
k∈N v({k}) = mv({i}) − φi vm(1− 1
2n ) P
k∈N v({k}) .
Because m
2n < 1
2 , we have m(1 − 1
2n ) > m − 1
2≥1
2 . By Case 1,
φi v m
2n
P
k∈N v({k}) = mv({i}) − m 1 − 1
2n v({i})
=m
2n v({i}).
■
Finally, suppose that φ also satisfies (GCON). By (GCON) and Claim 9, for each v ∈ V, each i ∈ N , and α ∈ R≥0,
φi vα P
k∈N v({k}) = αv({i}).
By (GR), the above equation holds for each α ∈ R.
For each v ∈ V, let β(v) := v(N)
P
k∈N v({k}) . Then for each v ∈ V and each i ∈ N ,
φi(v) = φi vβ(v) P
k∈N v({k}) = β(v)v({i}) = v({i})
P
k∈N v({k}) v(N ) = Pi(v).
(iii) ⇒ (i). After Claim 9, the same argument as above applies, since composition axioms are not invoked from that
point onward. Hence, we prove Claim 9 using (LCD). In the proof below, we rely on Claims 6 and 8, since the proofs
of these claims given above do not use (LCU).
15Because m
2n ≥ 1
2 , we have m − 2n−1 ∈ Z≥0.
21

Let φ be a solution satisfying (LCD), (GN), and (GR). By Claims 6 and 8, when n = 0 or 1, the equation in the
claim holds. Now, suppose n ≥ 2 and that the statement holds up to n − 1. Let v ∈ V, i ∈ N , and m ∈ Z≥0.
Case 1: m
2n ≤ 1
2.
φi v m
2n
P
k∈N v({k}) = φi D φ v m
2n−1
P
k∈N v({k}) , v m
2n
P
k∈N v({k}) .
By the induction hypothesis,
φi v m
2n−1
P
k∈N v({k}) = m
2n−1 v({i}).
Hence,
D φ vm
2n−1
P
k∈N v({k}) , v m
2n
P
k∈N v({k}) (S) =

 
 
m 2n−1
P
k∈S v({k}) if S ̸= N,
m 2n
P
k∈N v({k}) if S = N,
=

 
 
m 2n−1
P
k∈S v({k}) if S ̸= N,
1
2× m
2n−1
P
k∈N v({k}) if S = N.
By Claim 8,
φi v m
2n
P
k∈N v({k}) = 1
2× m
2n−1 v({i}) = m
2n v({i}).
Case 2: 1 ≥ m
2n > 1
2 . By (GN) and (GR),
φi v m
2n
P
k∈N v({k}) = v({i}) + φi v( m
2n −1) P
k∈N v({k})
= v({i}) − φi v(1− m
2n ) P
k∈N v({k}) .
Because 1 ≥ m
2n > 1
2 , we have 0 ≤ 1 − m
2n < 1
2 . Then by Case 1,
φi v m
2n
P
k∈N v({k}) = v({i}) − 1 − m
2n v({i}) = m
2n v({i}).
Case 3: m
2n > 1. Let η ∈ N be such that 0 ≤ m
2n − η ≤ 1. By (GN),
φi v m
2n
P
k∈N v({k}) = ηv({i}) + φi v( m
2n −η) P
j∈N v({j}) .
Because 0 ≤ m
2n − η ≤ 1, by Cases 1 and 2,
φi v m
2n
P
k∈N v({k}) = ηv({i}) + m
2n − η v({i}) = m
2n v({i}).
22

5 A Nullified-Game Consistency Axiom
We define a nullified-game consistency axiom, proposed by Kaneko and Nakada (2025).16,17 Given v ∈ V, we say that
player i ∈ N is a null player in v if for each ∅ ̸= S ⊆ N , v(S ∪ {i}) − v(S) = 0. This axiom requires that when
the recommended payoffs of some players are fixed and they are hypothetically considered as null players, the solution
restricted to the remaining players coincides with their original payoffs. In this setting, the population of players is
unchanged, but the “nullified” players—whose payoffs have been fixed—no longer contribute to the residual worth of
coalitions, since their shares are already settled. The axiom therefore requires that the solution applied to the residual
game, in which the contributions of the nullified players are neutralized, reproduces the original payoffs for the remaining
players. This captures the idea that the payoffs among the remaining players depends only on the residual worth available
to them, independent of the fixed payoffs of the nullified players.
In this section, we assume |N | ≥ 3 to exclude trivial cases. Moreover, to guarantee the existence of residual games,
we restrict attention to the subclass Vb := {v ∈ V : either for each i ∈ N, v({i}) ≥ 0, or for each i ∈ N, v({i}) ≤ 0}.
Given S ⊆ N , let RS : RN × Vb → Vall be defined by
RS(x, v)(T ) :=

 
 
v(N ) − P
k∈N\S xk if S ⊆ T
v(T ∩ S) otherwise.
By definition, note that each player i ∈/ S is a null player in RS(x, v).
Projection Nullified-Game Consistency (PNC): For each v ∈ Vb, each S ⊆ N such that there is j ∈ S with
v({j}) ̸= 0, and each i ∈ S,
φi(v) = φi RS (φ(v), v) .
Next, we consider the standard efficiency axiom, which requires that the total payoffs assigned to all players exactly
equal the worth of the grand coalition.
Efficiency (E): For each v ∈ Vb,
X
k∈N
φk(v) = v(N ).
16They name the axiom F-nullified reduced game consistency, which is formulated for multi-valued solutions (or correspondences). This
axiom builds on projection consistency, originally proposed by Funaki (1996) and Funaki and Yamato (2001), which is a variable-population
consistency axiom. For a comprehensive discussion of the concepts, justifications, and relationships between nullified-game consistencies,
including other variants, and variable-population consistencies, we refer to Kaneko and Nakada (2025). 17Dietzenbacher et al. (2024) define a notion called “partial implementation invariance,” a fixed-population consistency axiom in the context
of the bankruptcy problem.
23

The final axiom, Equal Ratio for Two Players (ER), specifies how payoffs are determined in simple two-player envi
ronments. recall that a player is considered a null player if their presence does not change the worth of any coalition.
(ER) requires that, when all other players are null, the ratio of each active player’s payoff to the stand-alone worth
of the other player is equal. In other words, the payoffs between two non-null players should be proportional to their
individual stand-alone worth. This axiom embodies a fairness principle in minimal cooperative settings: when only two
players generate any surplus, their payoffs reflect the relative scale of their contributions, ensuring that no player is
favored disproportionately and that the division respects the relative worth of the players involved.
Equal Ratio for Two Players (ER): For each v ∈ Vb and each pair i, j ∈ N ,
each k ̸= i, j is a null player in v ⇒ φi(v) × v({j}) = φj(v) × v({i}).
Zou et al. (2021) define a similar axiom, which they call proportional-balanced treatment, imposing the same require
ment on games in which either all stand-alone worths are positive or all stand-alone worths are negative. They provide a
characterization of the proportional division value for the subclass of two-player TU games using proportional-balanced
treatment together with efficiency.
It is natural to consider (PNC) and (ER) together, as they capture complementary aspects of fairness and consistency
in cooperative games. (PNC) ensures that payoffs among a subset of players remain unchanged when other players’
payoffs are fixed, while (ER) imposes proportionality in the simplest two-player setting. Together, they express the
principle that the rule should handle residual worth systematically and treat active players’ payoffs in a manner that
reflects their individual contributions.
Here is our characterization of the proportional division value based on (PNC).
Theorem 4. On the domain Vb, a solution satisfies (PNC), (E), and (ER) if and only if it is the proportional division
value.
Proof. (⇐) We prove that the proportional division value satisfies (PNC). Let v ∈ Vb and S ⊆ N be such that there is
24

j ∈ S with v({j}) ̸= 0. By definition,
RS(P (v), v)(T ) =

 
 
v(N ) − P
k∈N \S
v({k})
P
k′∈N v({k′}) v(N ) if S ⊆ T ,
v(T ∩ S) otherwise,
=

 
 
P
k∈S
v({k})
P
k′∈N v({k′}) v(N ) if S ⊆ T ,
v(T ∩ S) otherwise.
Then for each i ∈ S,
1. if S = {i},
Pi rS (P (v), v) =
v({i})
P
k∈N v({k}) v(N )
v({i})
P
k∈N v({k}) v(N ) + P
k̸=i 0
v({i})
P
k∈N v({k}) v(N ) = v({i})
P
k∈N v({k}) v(N ) = Pi(v); and
2. if {i} ⊊ S,
Pi rS (P (v), v) = v({i})
P
k∈S v({k})
X
k∈S
v({k})
P
k′∈N v({k′}) v(N )
!
= v({i})
P
k∈S v({k})
P
k∈S v({k})
P
k′∈N v({k′}) v(N )
= v({i})
P
k′∈N v({k′}) v(N ) = Pi(v).
Hence, the proportional division value satisfies (PNC).
For each v ∈ Vb and each pair i, j ∈ N ,
Pi(v) × v({j}) = v({i})
P
k∈N v({k}) v(N ) × v({j})
= v({j})
P
k∈N v({k}) v(N ) × v({i})
= Pj(v) × v({i}).
This implies that the proportional division value satisfies (ER).
(⇒) Let φ be a solution on Vb satisfying (PNC), (E), and (ER).
Claim 10. For each v ∈ Vb and each pair i, j ∈ N ,
φi(v) × v({j}) = φj(v) × v({i}).
Proof of Claim 10. Let v ∈ Vb and i, j ∈ N .
Case 1: v({i}) + v({j}) = 0. This implies that v({i}) = v({j}) = 0. Then clearly, φi(v) × v({j}) = φj(v) × v({i}).
25

Case 2: v({i}) + v({j}) ̸= 0. This implies that (at least) either v({i}) ̸= 0 or v({j}) ̸= 0. By construction, each k ̸= i, j
is a null player in R{i,j}(φ(v), v).18 Then by (PNC) and (ER),
φi(v) × v({j}) − φj(v) × v({i}) = φi R{i,j} (φ(v), v) × v({j}) − φj R{i,j} (φ(v), v) × v({i})
= φi R{i,j} (φ(v), v) × R{i,j} (φ(v), v) ({j}) − φj R{i,j} (φ(v), v) × R{i,j} (φ(v), v) ({i})
= 0.
■
By summing over all agents on both sides of the equation in Claim 10,
X
k∈N
(φi(v) × v({k})) =
X
k∈N
(φk(v) × v({i})) ⇐⇒ φi(v) ×
X
k∈N
v({k}) = v({i}) ×
X
k∈N
φk (v ).
By (E), P
k∈N φk(v) = v(N ), and thus
φi(v) = v({i})
P
k∈N v({k}) v(N ) = Pi(v).
Relating to (ER), Zou et al. (2021) propose another fairness principle in minimal cooperative settings. Their ax
iom, called grand worth additivity, requires that when two-player games differ only in the worth of the grand coalition,
the solution should behave additively across these games. In other words, the combined payoffs from the two games
should coincide with the payoff in the game formed by summing their grand-coalition worths. While Zou et al. (2021)
formulate this axiom in a variable-population framework, we adapt it to a fixed-population setting. Importantly, their
characterization of the proportional division value in two-player games still applies in our setting with two non-null
players, and together with (PNC), this provides us with an additional characterization of the proportional division
value. Following Zou et al. (2021), to formulate a fixed-population version of the axiom, we restrict attention to the
class VbQ :=
n
v ∈ Vb : for each S ⊆ N, v(S) ∈ Q
o
.
Grand-Coalition Additivity for Two Players (GA): For each pair v, w ∈ VbQ and each pair i, j ∈ N ,
v({i}) = w({i}), v({j}) = w({j}), and each k ̸= i, j is a null player in v and w ⇒ φ(v) + φ(w) = φ(v ⊕ w),
where v ⊕ w ∈ V coincides with v (and hence with w) on all coalitions except the grand coalition, and satisfies
(v ⊕ w)(N ) = v(N ) + w(N ).
18Note that when i = j, R{i,j}(φ(v), v) = R{i,i}(φ(v), v) = R{i}(φ(v), v).
26

Theorem 5. On the domain Vb, a solution satisfies (PNC), (SIP), (GA), and (GCON) if and only if it is the proportional
division value.
Since the proofs of Proposition 3 and Theorem 7 in Zou et al. (2021), which characterizes the proportional division
value in two-player games based on grand worth additivity, also applies in our setting, we omit the proof of Theorem 5.
We can also define a weaker variant of (PNC), in which all players except two are nullified, and refer to it as bilateral
projection nullified-game consistency (BPNC). Notably, even under this weaker condition, the two characterizations of
the proportional division value still holds.
We conclude this section by providing examples to demonstrate the independence of the axioms used in Theorem 4.
We first drop (PNC). Define φ as follows: for each v ∈ Vb, if there are at most |N | − 3 null players, set φ(v) = Sh(v);19
otherwise, set φ(v) = P (v). Because both the Shapley value and the proportional division value satisfy (E), so does φ.
For each game, when at most two players are not null, the proportional division value is applied. Thus φ satisfies (ER).
However, because the Shapely value violates (PNC), so does φ.
We next drop (E). Let α ∈ R>0. Define the solution φ as follows: for each v ∈ Vb, set φ(v) = P (vα). Because the
proportional division value satisfies (PNC) and (ER), so does φ. Because there is v ∈ Vb such that v(N ) ̸= α, φ violates
(E).
Finally, we drop (ER). Define φ as follows: fix i ∈ N , and for each v ∈ Vb, set φi(v) = v(N ), and for each j ̸= i,
φj(v) = 0. Since φ always distributes v(N ) entirely, it satisfies (E). Moreover, because player i receives the entire v(N )
while all other players receive 0, independently of coalition worths, it also satisfies (PNC). On the other hand, for the
same reason, φ violates (ER).
6 Conclusion
We have presented an axiomatic analysis of the proportional division value in TU-games, with a focus on fixed-population
consistency. We showed that the proportional division value can be characterized using homogeneity-based, composition
based, or nullified-game consistency axioms. These results demonstrate that the proportional division value is not only
intuitive but also uniquely determined when fixed-population consistency is combined with mild fairness and/or efficiency
requirements.
Although our focus was on the proportional division value, the fixed-population consistency axioms introduced in
this paper can be applied to other classes of solutions. In our companion paper Funaki et al. (2025), we study linear
solutions and establish characterizations based on fixed-population consistency axioms.
19Sh denotes the Shapley value.
27

References
Dietzenbacher, B., Y. Tamura, and W. Thomson (2024): “Partial-implementation invariance and claims prob
lems,” Social Choice and Welfare, 63, 203–229.
Driessen, T. and Y. Funaki (1991): “Coincidence of and collinearity between game theoretic solutions,” OR Spek
trum, 13, 15–30.
Funaki, Y. (1996): “Dual axiomatizations of solutions of cooperative games,” Working Paper.
Funaki, Y. and Y. Koriyama (2025): “Deriving egalitarian and proportional principles from individual monotonicity,”
International Journal of Game Theory, 54, 24.
Funaki, Y., Y. Koriyama, S. Nakada, and Y. Tamura (2025): “Fixed-population consistency and characteriza
tions of the ELS values,” Working Paper.
Funaki, Y. and T. Yamato (2001): “The core and consistency properties: a general characterisation,” International
Game Theory Review, 3, 175–187.
Kamijo, Y. and T. Kongo (2015): “Properties based on relative contributions for cooperative games with transferable
utilities,” Theory and Decision, 78, 77–87.
Kaneko, T. and S. Nakada (2025): “Nullified-game consistency and axiomatizations of the Core of TU-games with
a fixed player set,” Economics Letters, 250, 112274.
Khmelnitskaya, A. B. and T. S. Driessen (2003): “Semiproportional values for TU games,” Mathematical Methods
of Operations Research, 57, 495–511.
Moulin, H. (1987): “Equal or proportional division of a surplus, and other methods,” International Journal of Game
Theory, 16, 161–186.
——— (2000): “Priority rules and other asymmetric rationing methods,” Econometrica, 68, 643–684.
Ortmann, K. M. (2000): “The proportional value for positive cooperative games,” Mathematical Methods of Operations
Research, 51, 235–248.
Ruiz, L. M., F. Valenciano, and J. M. Zarzuelo (1996): “The least square prenucleolus and the least square
nucleolus. Two values for TU games based on the excess vector,” International Journal of Game Theory, 25, 113–134.
Shapley, L. S. (1953): “A value for n-person games,” in Contributions to the Theory of Games (AM-28), Volume II,
ed. by H. W. Kuhn and A. W. Tucker, Princeton, NJ: Princeton University Press, 307–317.
28

van den Brink, R. (2002): “An axiomatization of the Shapley value using a fairness property,” International Journal
of Game Theory, 30, 309–319.
van den Brink, R., Y. Chun, Y. Funaki, and B. Park (2016): “Consistency, population solidarity, and egalitarian
solutions for TU-games,” Theory and Decision, 81, 427–447.
Young, H. P. (1988): “Distributive justice in taxation,” Journal of Economic Theory, 44, 321–335.
Zou, Z. (2021): “Proportional values for cooperative games,” PhD Thesis, Vrije Universiteit Amsterdam.
Zou, Z., R. van den Brink, Y. Chun, and Y. Funaki (2021): “Axiomatizations of the proportional division value,”
Social Choice and Welfare, 57, 35–62.
Zou, Z., R. van den Brink, and Y. Funaki (2022): “Sharing the surplus and proportional values,” Theory and
Decision, 93, 185–217.
29

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:53.283Z
- **Text Length:** 53556 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
