# PDF Document: Ganzfried - 2025 - Computing Evolutionarily Stable Strategies in Multiplayer Games.pdf

**File Path:** Ganzfried - 2025 - Computing Evolutionarily Stable Strategies in Multiplayer Games.pdf

**Processed Date:** 2026-02-10T18:16:47.366Z

**File Size:** 292.84 KB

**Total Pages:** 8

**Extracted Pages:** 8

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3706

**Title:** Computing Evolutionarily Stable Strategies in Multiplayer Games

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Computing Evolutionarily Stable Strategies in Multiplayer Games
Sam Ganzfried Ganzfried Research sam.ganzfried@gmail.com
Abstract
We present an algorithm for computing all evolutionarily stable strategies in nondegenerate normalform games with three or more players.
1 Introduction
While Nash equilibrium has emerged as the standard solution concept in game theory, it is often criticized as being too weak: often games contain multiple Nash equilibria (sometimes even infinitely many), and we want to select one that satisfies other natural properties. For example, one popular concept that refines Nash equilibrium is evolutionarily stable strategy (ESS). A mixed strategy in a two-player symmetric game is an evolutionarily stable strategy if it is robust to being overtaken by a m-
utation strategy. Formally, mixed strategy x∗ is an ESS if for every mixed strategy x that differs from x∗, there exists ε0 = ε0(x) > 0 such that, for all ε ∈ (0, ε0),
(1−ε)u1(x, x∗)+εu1(x, x) < (1−ε)u1(x∗, x∗)+εu1(x∗, x).
From a biological perspective, we can interpret x∗ as a distribution among “normal” individuals within a population, and consider a mutation that makes use of strategy x, assuming that the proportion of the mutation in the population is ε. In an ESS, the expected payoff of the mutation is smaller than the expected payoff of a normal individual, and hence the proportion of mutations will decrease and eventually disappear over time, with the composition of the population returning to being mostly x∗-
. An ESS is therefore a mixed strategy of the column player that is immune to being overtaken by mutations. ESS was initially proposed by mathematical biologists motivated by applications such as population dynamics (e.g., maintaining robustness to mutations within a population of humans or animals) [Maynard Smith and Price, 1973; Maynard Smith, 1982]. A common example game is the 2x2 game where strategies correspond to an “aggressive” Hawk or a “peaceful” Dove strategy. A paper has recently propo-
sed a similar game in which an aggressive malignant cell competes with a passive normal cell for biological energy, which has applications to cancer eradication [Dingli et al., 2009]. While Nash equilibrium is defined for general multiplayer games, ESS is traditionally defined specifically for twoplayer symmetric games. ESS is a refinement of Nash equilibrium. In particular, if x∗ is an ESS, then (x∗, x∗) (i.e.,
the strategy profile where both players play x∗) is a (symmetric) Nash equilibrium [Maschler et al., 2013]. Of course the converse is not necessarily true (not every symmetric Nash equilibrium is an ESS), or else ESS would be a trivial refinement. In fact, ESS is not guaranteed to exist in games with more than two pure strategies per player (while Nash equilibrium is guaranteed to exist in all finite games). For example, while rock-paper-scissors has a mixed strategy Nash equilibrium (which puts e-
qual weight on all three actions), it has no ESS [Maschler et al., 2013] (that work considers a version where payoffs are 1 for a victory, 0 for loss, and 2
3 for a tie). There exists a polynomial-time algorithm for computing Nash equilibrium (NE) in two-player zero-sum games, while for two-player non-zero-sum and multiplayer games computing an NE is PPAD-complete and it is widely conjectured that no efficient (polynomial-time) algorithm exists. However, several algorithms have been devised that perform well in practice. The problem of computing whether a game has an ESS was shown to be both NP-hard and CO-NP hard and also to be contained in Σ2P (the -
class of decision problems that can be solved in nondeterministic polynomial time given access to an NP oracle) [Etessami and Lochbihler, 2008]. Subsequently it was shown that the exact complexity of this problem is that it is Σ2P -complete [Conitzer, 2013], and even more
challenging for more than two players [Blanc and Hansen, 2021]. Note that this result is for determining whether an ESS exists (as discussed above there exist games which have no ESS), not for the complexity of computing an ESS in games for which one exists. Thus, computing an ESS is significantly more difficult than computing an NE, which is not surprising since it is a refinement. Several approaches have been proposed for computing ESS in two-player games [Haigh, 1975; Abakuks, 1980; Broom and R-
ychta ́ˇr, 2013; Bomze, 1992; Mcnamara et al., 1997]. However, we are not aware of approaches for computing ESS in games with 3+ players. Many evolutionary models of tumor ecology involve frequency-dependent interactions among three or more cancer cell phenotypes (e.g., [Basanta et al., 2008; Basanta et al., 2011; Archetti, 2013;  ́Swierniak and Krzes ́lak, 2016]). These systems are naturally formulated as symmetric nplayer games, and ESS provides a biologically meaningful stability concept. Motiv-
ated by this, we develop an algorithm for computing evolutionarily stable strategies in multiplayer symmetric normal-form games. Evolutionarily stable strate
arXiv:2511.20859v1 [cs.GT] 25 Nov 2025

gies in multiplayer normal-form games have been previously studied and characterized in the biological and mathematical literature (e.g., [Pe ̃na et al., 2014; Pen ̃a and No ̈ldeke, 2015; Gokhale and Traulsen, 2010; Wu et al., 2013]). A normal-form game consists of a finite set of players N = {1, . . . , n}, a finite set of pure strategies Si for each player i, and a real-valued utility for each player for each strategy vector (aka strategy profile), ui : ×iSi → R. In a symmetric normal-form game-
, all strategy spaces Si are equal and the utility functions satisfy the following symmetry condition: for every player i ∈ N , pure strategy profile (s1, . . . , sn) ∈ Sn, and permutation π of the players,
ui(s1, . . . , sn) = uπ(i)(sπ(1), . . . , sπ(n)).
This allows us to remove the player index of the utility function and just write u(s1, . . . , sn), where it is implied that the utility is for player 1 (we can simply permute the players to obtain the utilities of the other players). We will still write ui for notational convenience, but note that only a single utility function must be specified which will apply to all players. Let Σi denote the set of mixed strategies of player i (probability distributions over elements of Si). If players follow-
 mixed strategy profile x = (x(1), . . . , x(n)), where x(i) ∈ Σi, the expected payoff to player i is
ui(x(1), . . . , x(n)) =
X
s1 ,...,sn ∈S
x(1)
s1 , . . . , x(n)
sn (ui(s1, . . . , sn)).
We write ui(x) = ui(x(i), x(−i)), where x(−i) denotes the vector of strategies of all players except i. If all players follow the same mixed strategy x, then for all players i we have
ui(x) = ui(x, . . . , x) =
X
s1 ,...,sn ∈S
xs1 , . . . , xsn (ui(s1, . . . , sn)).
Definition 1. A mixed strategy profile x∗ is a Nash equilibrium if for each player i ∈ N and for each mixed strategy x(i) ∈ Σi: ui(x∗(i), x∗(−i)) ≥ ui(x(i), x∗(−i)).
Definition 2. A mixed strategy profile x∗ in a symmetric normal-form game is a symmetric Nash equilibrium if it is a Nash equilibrium and: x∗(1) = x∗(2) = . . . = x∗(n).
Definition 3. A mixed strategy x∗ ∈ Σ1 is evolutionarily stable in a symmetric normal-form game if for each mixed strategy x ̸= x∗ exactly one of the following conditions holds:
1. u1(x∗, x∗, . . . , x∗) > u1(x, x∗, . . . , x∗),
2. u1(x∗, x∗, . . . , x∗) = u1(x, x∗, . . . , x∗) and
u1(x∗, x, x∗, . . . , x∗) > u1(x, x, x∗, . . . , x∗).
It has been proven that every symmetric normal-form game has at least one symmetric Nash equilibrium [Nash, 1951]. It is clear from Definition 3 that every evolutionarily stable strategy (ESS) in a symmetric normal-form game must be a symmetric Nash equilibrium (SNE). Following standard practice in the equilibrium computation literature [McKelvey and McLennan, 1996; Govindan and Wilson, 2003; Herings and Peeters, 2010], we restrict attention to nondegenerate symmetric games, for which each support-
 admits at most one symmetric Nash equilibrium. For background on evolutionary stability, see [Weibull, 1995; Cressman, 2003].
2 Algorithm
In this section we present our main algorithm for computing all ESSs in nondegenerate symmetric normal-form games. We present our algorithm just for the three-player case and discuss how it can be extended to n players. The algorithm works by enumerating supports, and for each support computing a symmetric Nash equilibrium (SNE) if it exists (recall that under the nondegeneracy assumption there is at most one SNE for each support). If an SNE x is found, we then run a procedure to test whether x is-
 an ESS. The procedures for computing an SNE given a support, and for testing whether an SNE is an ESS, each involve solving a nonconvex quadratically-constrained program. Note that our algorithm finds all ESSs since it enumerates over all supports; if our goal was just to find one ESS we could halt the algorithm as soon as one ESS is found. If the game does not contain an ESS then the algorithm will correctly output that no ESS exists. If the game is in fact degenerate then our algorithm may fail-
 to find all ESSs, but will never output a non-ESS. Algorithm 1 presents pseudocode for the main algorithm. The input is a payoff tensor A, where A[i, j, k] is the payoff to player 1 when player 1 plays pure strategy i, player 2 plays pure strategy j, and player 3 plays pure strategy k. The algorithm also uses several numerical parameters whose values are given in Table 1. The output of the algorithm is the (possibly empty) set of ESSs. The outer loop iterates over all supports T in increasing ord-
er of their dimension. For each support, we test whether the game has an SNE with that support using Algorithm 2. If there exists an SNE x for support T, we then run Algorithm 3 to test whether or not x is an ESS, and if so we add it to our list of ESSs that is output.
Algorithm 1 Compute all ESSs in a 3-player symmetric normal-form game
Require: Payoff tensor A[i, j, k], number of strategies K Require: Tolerances εs, εp, δ Ensure: Set ESS set 1: ESS set ← ∅
2: for m = 1 to K do
3: for each subset T ⊆ {0, . . . , K − 1} with |T| = m do
4: (status, x) ← SNE SUPPORTQCP(A, T, εs) 5: if status = INFEASIBLE then 6: continue 7: end if
8: if ISESS(A, x, εp, δ) then
9: ESS set ← ESS set ∪ {x} 10: end if 11: end for 12: end for 13: return ESS set
Algorithm 2 tests whether the game has an SNE with given support T by creating and solving a quadratically-constrained feasibility program (QCP). The variables pl represent the non-negative strategy probabilities over the elements of T. We define gi(p) to be the expected payoff of playing pure strategy i when the opposing players play p. Note that gi(p)

is quadratic since it contains products of variables pjpk. For each i ∈ T, we add the constraint gi(p) = gi0(p), and for each i ∈/ T, we add the constraint gi(p) ≤ gi0(p). This ensures that the player is indifferent between all pure strategies in the support and cannot profitably deviate to a strategy outside the support, which is the definition of Nash equilibrium.
Algorithm 2 SNE SUPPORTQCP(A, T, εs)
1: Create a QCP with variables pl ≥ εs for l ∈ T 2: Add constraint P
l∈T pl = 1
3: Define i0 = T [0] 4: Define gi(p) = P
j∈T
P
k∈T A[i, j, k] pjpk. 5: for i ∈ T, i ̸= i0 do
6: Add constraint gi(p) = gi0(p) 7: end for 8: for i ∈/ T do
9: Add constraint gi(p) ≤ gi0(p) 10: end for
11: Solve the QCP 12: if infeasible then 13: return (INFEASIBLE, ⊥) 14: end if
15: Construct x by xi = pi for i ∈ T and xi = 0 otherwise 16: return (FEASIBLE, x)
Given SNE x, Algorithm 3 determines whether it is an ESS. The multilinear payoff to player 1 is defined as
U (a, b, c) =
X
i,j,k
A[i, j, k] aibjck.
We first check whether x is a strict Nash equilibrium. It is well known that in symmetric games any strict SNE is an ESS [Maynard Smith and Price, 1973; Maynard Smith, 1982; Hofbauer and Sigmund, 1998]. Moreover, among symmetric Nash equilibria, strictness is equivalent to being a pure strategy whose chosen action is the unique best response to itself [Maynard Smith, 1982; Hofbauer and Sigmund, 1998]. Consequently, whenever x is pure and satisfies |BR(x)| = 1, we may immediately conclude that x is-
 an ESS. We next test whether a pure mutant can invade x. After applying these efficient preprocessing tests, we apply Algorithm 4 to determine whether x can be invaded by any mixed mutant. Algorithm 4 tests whether an SNE x can be invaded by any mixed mutant by creating and solving a quadraticallyconstrained quadratic program (QCQP). The variables yi represent the non-negative strategy probabilities over the elements of BR(x). Let y denote the extension of y to a Kdimensional strategy (by setting-
 entries not in BR(x) to 0). In order for x to be an ESS, we must ensure that U (x, y, x) > U (y, y, x) for all mixed strategies y ̸= x. For simplicity of notation we use y instead of defining y in the pseudocode. Numerically, we say that y ̸= x when ||y − x||2 ≥ δ. Both the QCP in Algorithm 2 and the QCQP in Algorithm 4 have nonconvex quadratic constraints, and the latter also has a nonconvex quadratic objective. We will solve these numerically using Gurobi’s nonconvex quadratic solver [Gurobi Op-
timization, LLC, 2025]. We will use
Algorithm 3 ISESS(A, x, εp, δ)
1: Let ei be pure strategy placing all mass on action i. 2: Compute gi = U (ei, x, x) for all i 3: Compute v = U (x, x, x)
4: BR(x) = { i : gi ≥ v − εp } 5: /* Strict NE shortcut */
6: if |BR(x)| = 1 and x is pure then 7: return true 8: end if 9: /* Pure-mutant screen */ 10: for each i ∈ BR(x) do 11: Compute u1 ← U (x, ei, x) 12: Compute u2 ← U (ei, ei, x) 13: if u1 + εp ≤ u2 then
14: return false ▷ pure mutant i can invade 15: end if 16: end for
17: (status, F ⋆) ← ESS QCQP(A, x, BR(x), δ) 18: if status = INFEASIBLE then 19: return false ▷ cannot certify ESS 20: end if 21: if F ⋆ < −εp then
22: return false ▷ mixed mutant invades 23: else if F ⋆ > εp then
24: return true ▷ clear positive stability margin 25: else 26: return false ▷ neutral/degenerate, count as not ESS 27: end if
Algorithm 4 ESS QCQP(A, x, BR(x), δ)
1: Create a QCQP with variables yi ≥ 0 for i ∈ BR(x) 2: Add constraint P
i∈BR(x) yi = 1
3: Add constraint P
i∈BR(x)(yi − xi)2 ≥ δ2 4: Define F (y) = U (x, y, x) − U (y, y, x) 5: Solve QCQP minimizing F (y) subject to constraints 6: if infeasible then 7: return (INFEASIBLE, ⊥) 8: end if
9: F ⋆ ← optimal value of F (y) 10: return (FEASIBLE, F ⋆)
Gurobi’s default feasibility tolerance of 10−6 (meaning that it is possible that constraints are violated by up to 10−6). This will influence our selection of the numerical parameters in the algorithm, depicted in Table 1. The parameter εs is used in Algorithm 2 to ensure that pure strategies in the support are played with nonzero probability. Note that our value of εs = 10−4 is larger than Gurobi’s feasibility tolerance. The parameter εp is used in Algorithm 3 to compare payoffs. While it is not -
mentioned in the pseudocode, we recompute F ∗ from the optimal y rather than using the optimal value returned by Gurobi which may have small numerical imprecision. The value of εp = 10−5 is again larger than the feasibility tolerance. The final parameter δ = 10−2 is used in Algorithm 4 to ensure that y differs from x. Note that δ2 = 10−4, which is significantly larger than the feasibility

tolerance as well as εp, but still sufficiently small to reasonably approximate an infinitesimal neighborhood around x.
Parameter Value εs 10−4 εp 10−5 δ 10−2
Table 1: Parameter values used in the algorithm.
While we have presented the algorithm just for the 3-player case, it extends naturally to n > 3 players. The main difference is that gi(p) in Algorithm 2 will involve a product of n − 1 variables instead of 2. We can convert these expressions to equivalent expressions that are quadratic by introducing auxiliary variables. For example for n = 4, we can set p12 = p1p2, p123 = p12p3, etc. Thus the programs will have more variables, but they will remain quadratic and can be solved as a QCP with Gurobi-
’s nonconvex quadratic solver. The QCQP solved in Algorithm 4 will remain quadratic for n > 3 players, since the multilinear payoffs U (· · · ) will still be quadratic in y for a given x. In particular, we have
F (y) = U (x, y, x, . . . , x) − U (y, y, x, . . . , x).
Since the first term is linear in y and the second term is quadratic in y, the full expression is quadratic in y. Also note that the number of supports enumerated over in Algorithm 1 remains 2K−1 independently of the number of players n. We also note that while the algorithm is specifically designed for nondegenerate games (for which there is at most one SNE with a given support), the algorithm can still be applied to degenerate games as well. The set of ESSs found is guaranteed to be a subset of -
the full set of ESSs, but the algorithm may fail to find all of the ESSs. The question still remains of how to determine whether a given game is degenerate. Note that for games with uniform random payoffs the set of games that are degenerate has measure zero. So any degenerate game could be converted to a “similar” nondegenerate game by adding small perturbations to the payoffs. Otherwise, it is not trivial to determine whether a game is degenerate and we must apply an additional procedure. One su-
ch procedure is provided in Algorithm 5. After computing an SNE x on support T in Algorithm 1, we can then solve a QCQP that finds the SNE on support T with largest Euclidean distance from x. Let D⋆ denote the optimal objective value. If D⋆ > εdist, then we conclude that there exists another SNE distinct from x on support T, which implies that the game is degenerate. If D⋆ ≤ εdist for all supports T, then we conclude that the game is nondegenerate. We can set εdist = 10−8, which is several orders -
of magnitude larger than the squared distance induced by feasibility tolerance, but still small enough that any distinct SNE on the same support will be separated by more than εdist. If we include this procedure, then we will be solving a QCP and QCQP for each support; but we will know for sure whether we are outputting all ESSs.
3 Experiments
Our first set of experiments is on a set of example games given in Appendix A. The full set of SNE and ESSs for these games
Algorithm 5 SNE MAXDISTQCQP(A, T, x, εs, εdist)
Require: Payoff tensor A; support T ⊆ K; symmetric Nash equilibrium x supported on T; support tolerance εs > 0; distance tolerance εdist > 0. Ensure: Returns TRUE if there exists an SNE on T at distance > εdist from x (degenerate on T); otherwise FALSE. 1: Choose an arbitrary reference action i0 ∈ T.
2: Create a QCQP with variables p′
l for each l ∈ T.
3: Add constraints p′
l ≥ εs for all l ∈ T.
4: Add the normalization constraint P
l∈T p′
l = 1. 5: Define, for each pure action i ∈ {0, . . . , K − 1},
gi(p′) =
X
j∈T
X
k∈T
A[i, j, k] p′
j p′
k.
6: Add equality constraints
gi(p′) = gi0 (p′) for all i ∈ T \ {i0}.
7: Add inequality constraints
gi(p′) ≤ gi0 (p′) for all i ∈/ T.
8: Define the objective
D(p′) =
X
l∈T
(p′
l − xl)2.
9: Set the QCQP to maximize D(p′). 10: Solve the QCQP. 11: if QCP is infeasible then 12: return FALSE ▷ should not occur if x was feasible 13: end if
14: Let D⋆ denote the optimal objective value. 15: if D⋆ > εdist then 16: return TRUE ▷ another SNE exists on T: degenerate 17: else 18: return FALSE ▷ unique SNE on T (nondegenerate) 19: end if
are summarized in Table 2. Note that several of these games are degenerate. For Games 1, 3, 4, 7, and 8, the algorithm correctly found all SNE and ESSs. For Game 2, the algorithm found SNE (1,0), (0,1) and (0.9999, 1 × 10−4). This game is degenerate on the support {0, 1}, and the algorithm only found one SNE for this support (as expected), though it correctly classified that no ESSs exist. For Game 5 the algorithm found SNE (1,0,0) and (0, 0.9999, 1×10−4). The game is degenerate on the support {1,-
 2}, and the algorithm failed to find all SNE, but correctly found the only ESS. For Game 6 the algorithm found SNE (1,0,0), (0,0,1), (0.9999, 0, 1 × 10−4). The game is degenerate on support {0, 2} and the algorithm failed to find all SNE. The algorithm classified all of the SNE it found as ESS, and therefore also failed to find all ESSs in this game. Game 6 has a natural interpretation as a generic frequency-dependent competition model between three phenotypes with asymmetric pairwise advantages.-
 For our next experiments we ran our algorithm on threeplayer symmetric normal-form games with all payoff entries uniformly random on [-1,1]. We generated and solved 100

Table 2: Summary of symmetric Nash equilibria (SNE) and evolutionarily stable strategies (ESS) for the eight example games.
Game K SNE ESS
1 2 {(0, 1), (1/2, 1/2)} {(0, 1), (1/2, 1/2)}
2 2 All mixed strategies supported on 0,1 (continuum) ∅
3 2 {(1, 0), (0, 1)} {(1, 0)}
4 3 {(1/3, 1/3, 1/3)} ∅
5 3 {(1, 0, 0)} ∪ {(0, x, y) : x, y ≥ 0, x + y = 1} {(1, 0, 0)}
6 3 {(x, 0, 1 − x) : x ∈ [0, 1]} {(x, 0, 1 − x) : x ∈ [0, 1]}
7 3 {(1, 0, 0), (0, 1, 0), (0, 0, 1), (3/7, 4/7, 0), (0, 1/3, 2/3), (0.2, 0.4, 0.4)} {(1, 0, 0), (0, 1, 0)}
8 3 {(0.4311484, 0.3760157, 0.1928359)} {(0.4311484, 0.3760157, 0.1928359)}
games for each number of pure strategies K from 3 to 8. These games are nondegenerate since the set of degenerate games has Lebesgue measure zero. We used the nonconvex quadratic solver from Gurobi version 13.0.0, which guarantees global optimality [Gurobi Optimization, LLC, 2025], with Java version 14.0.2. We used an Intel Core i7-1065G7 processor with base clock speed of 1.30 GHz (and maximum turbo boost speed of up to 3.9 GHz) with 16 GB of RAM under 64-bit Windows 11 (8 logical cores/threads).-
 We used the numerical parameter values given in Table 1. The runtimes from the experiments are given in Table 3. For each K we report the total runtime of Algorithm 1 to find all ESSs, as well as the runtime until the first ESS is found. If no ESSs are found, then we report the time to find the first ESS as the total time of Algorithm 1. For both the total and first runtimes we report the mean with 95% confidence intervals as well as the median. The results indicate that the algorithm is able to -
find all ESSs quite quickly in these games. For the biggest games K = 8 the mean runtime to find all ESSs is 13.8159 seconds, and the mean runtime to find one ESS is 0.7645 seconds. For K = 3–5, all ESSs are found in a fraction of a second. Since the games are nondegenerate, we know that the algorithm finds all ESSs in each game.
Table 3: Runtime statistics over 100 random symmetric games for each number of pure strategies K. Times reported in seconds. “Total” refers to the time to enumerate all ESSs. “First” is the time to find the first ESS (or conclude none exist).
K Mean Total
(± 95% CI)
Median Total
Mean First (± 95% CI)
Median First
3 0.0145 ± 0.0024 0.0115 0.0056 ± 0.0016 0.0020 4 0.0610 ± 0.0080 0.0510 0.0116 ± 0.0048 0.0030 5 0.2024 ± 0.0133 0.1935 0.0195 ± 0.0090 0.0030 6 1.0262 ± 0.0657 0.9590 0.0375 ± 0.0293 0.0030 7 3.7865 ± 0.3478 3.4465 0.2926 ± 0.2461 0.0040 8 13.8159 ± 0.7600 13.4520 0.7645 ± 0.6527 0.0050
Table 4 provides further insight by showing the number of ESSs found for each K (aggregated over the 100 sampled games). While a small number of games had no ESS, the majority of games had a moderate number of ESSs (1–3). Table 5 gives a breakdown of the number of ESSs found with
each support size, again aggregated over the sampled games. A large number of the ESSs had support size of 1 or 2, which explains why the running times to find the first ESS were so low; however some games had ESSs with larger support sizes.
Table 4: Histogram of ESS counts over 100 random symmetric games for each K. Entry (K, i) is number of games with i ESSs.
K 0 1 2 3 4 567
3 3 46 44 7 0 0 0 0 4 4 38 41 15 2 0 0 0 5 6 25 36 22 10 1 0 0 6 3 26 39 26 5 1 0 0 7 5 22 32 25 11 2 2 1 8 5 16 37 24 13 3 2 0
Table 5: ESS support-size distribution over 100 random symmetric games for each K. Entry (K, s) reports the total number of ESSs found with support size s over all games with K pure strategies.
K s=1 s=2 s=3 s=4 s=5
3 101 54 0 0 0 4 92 62 18 1 0 5 91 97 18 2 0 6 102 69 34 2 0 7 101 101 26 6 0 8 109 86 42 3 1
Table 6 provides a breakdown of the different components of the full ESS computation procedure described in Algorithm 1. The first column is the total number of SNE found, aggregated over the 100 sampled games. The second column is the number of the SNE that trigger the strict NE shortcut in Algorithm 3 and are immediately classified as ESSs. The third column is the number of the non-strict SNE that pass the pure-mutant screen, and the fourth column is the number of remaining SNE that pass the mix-
ed-mutant screen. The final column is the total number of ESSs found, which is equal to the sum of the second and fourth columns. The results indicate that both the strict NE shortcut and the pure-mutant screen play important roles in reducing the set of potential

ESSs that must be tested by solving a nonconvex QCQP. This is important, because solving the mixed-mutant QCQP is significantly more computationally expensive than those two procedures. We can see for example that for K = 8, 109 of the 1375 SNE trigger the strict SNE shortcut (7.9%), and 200 of the remaining 1266 SNE pass the pure-mutant screen. So the pure mutant screening test rules out 1066 of the 1266, or 84.2%, of the non-strict SNE. In total, for K = 8 these two procedures reduce the number-
 of QCQP solves from 1375 to 200, which is a reduction of 85.5%.
K Total SNE Strict SNE Pure-Pass Mixed-Pass Total ESS 3 249 101 57 54 155 4 341 92 101 81 173 5 588 91 145 117 208 6 763 102 153 105 207 7 1014 101 187 133 234 8 1375 109 200 132 241
Table 6: Breakdown of outcomes of the ESS test aggregated over 100 random symmetric K-strategy games. “Total SNE” is the number of symmetric Nash equilibria encountered by the algorithm. “Strict SNE” are equilibria verified as ESS via the strict shortcut. “Pure-Pass” are non-strict SNE that pass the pure-mutant screen (i.e., require solving the mixed-mutant QCQP). “Mixed-Pass” are non-strict SNE for which the mixed-mutant screen finds no profitable mixed mutant. “Total ESS” = Strict SNE + Mixed-Pa-
ss.
4 Conclusion
We introduced the first algorithm for computing evolutionarily stable strategies in nondegenerate symmetric multiplayer normal-form games. Our approach enumerates supports and determines, for each support, whether it contains a symmetric Nash equilibrium and whether that equilibrium is evolutionarily stable. The method combines two efficient preprocessing tests—the strict Nash equilibrium shortcut and a pure-mutant screen—with a final mixed-mutant quadratically-constrained quadratic program that c-
ertifies evolutionary stability. We also developed a procedure for testing whether a given game is degenerate; for degenerate games our algorithm is guaranteed to find a subset of the ESSs. Experiments on eight benchmark games and random games with up to eight strategies demonstrate that the algorithm is fast in practice and reliably finds all ESSs. The breakdown of algorithmic components shows that the preprocessing tests eliminate over 85% of mixed-mutant QCQP solves for K = 8, highlighting the -
practical impact of these refinements. Our results provide the first scalable computational tool for studying evolutionary stability in multiplayer interactions, with potential applications to evolutionary game theory, behavioral ecology, and tumor ecology. Future work includes extending these techniques to structured populations, dynamic stability refinements, and incomplete-information evolutionary models. While our algorithm is only guaranteed to find all ESSs in nondegenerate games, it is stil-
l guaranteed to find a subset of all ESSs if run on degenerate games. Thus, the algorithm may still be useful in practice even on degenerate games. Three of the eight example games considered are degenerate; on the first the algorithm correctly classified that no ESSs exist, on
the second the algorithm correctly found the unique ESS, and on the third the algorithm found three of the infinitely many ESSs. Future work can explore improvements for solving degenerate games. For example, once an SNE x is found for given support T (by solving the QCP in Algorithm 2), we can then solve a second QCP that searches for an additional SNE x′ that satisfies the same constraints with objective of maximizing the Euclidean distance between x′ and x. We can continue this procedure indefi-
nitely to keep finding additional SNE which are ESS candidates until the objective value falls below a numerical tolerance. This may be helpful for specific games of interest which are known to be degenerate (e.g., by applying the degeneracy-testing procedure in Algorithm 5), though it will not be able to solve the general problem of finding all SNE, since the set of SNE for a given support may be infinite (as several of the example games indicate). While the presentation of our algorithm and our -
experiments were focused on 3-player games, our algorithm is straightforwardly applicable to games with n > 3 players. As described in Section 2, the only difference is that QCP for computing an SNE in Algorithm 2 will involve expressions that are degree n−1 polynomial of the variables instead of quadratic. We can convert this to a quadratic program by adding auxiliary variables, e.g., p12 = p1p2, p123 = p12p3. In general for support size s and n players, we will require O(sn−1) variables, which i-
s O(Kn−1) in the worst case where K is the number of pure strategies. So the number of variables is exponential in n, but a polynomial in K (for fixed n). Note that the QCQP for the mixed-mutant test will remain quadratic for n > 3, and the total number of supports enumerated over will remain 2K − 1 independently of n. By contrast, if we were iterating over all possible support combinations to find a Nash equilibrium in a game that is not necessarily symmetric, we would need to consider (2K − 1)n -
support profiles, which is exponential in both K and n. While we presented several preprocessing procedures that are shown to significantly improve computational efficiency—the strict Nash equilibrium shortcut and puremutant screen—our algorithm’s efficiency can likely be further optimized significantly. A support-enumeration approach for computing a Nash equilibrium in n-player normalform games (that are not necessarily symmetric) performs a recursive procedure of iteratively removing conditional-
ly strictly dominated strategies before solving a feasibility program [Porter et al., 2008]. Perhaps this additional preprocessing procedure could be effective in reducing the number of supports considered and/or the size of the corresponding QCPs solved in our algorithm as well. With access to additional computational resources our algorithm could also benefit from parallel computation, most obviously by solving multiple QCPs or QCQPs simultaneously. We showed that for 3player games with K = 8 st-
rategies per player our algorithm is able to run quickly on a laptop without any of these additional enhancements. It is promising that our algorithm can be easily applied to small and moderate-sized games already in its current form, even if the goal is to find all ESSs. For larger games that the algorithm is unable to solve, it is still possible that our algorithm can solve them if augmented by efficiency enhancements such as those described above.

A Payoff Tensors for the Example Games
All games are symmetric 3–player. For each action i, A[i, :, :] gives the focal player’s payoff when co–players use j, k.
Game 1 (two–strategy game with pure and mixed ESS)
A[0] = 0 −1
2 0 , A[1] = 2 0
−1 0 .
Game 2 (neutral two–strategy game)
A[0] = 1 0
0 1 , A[1] = 1 0
0 1.
Game 3 (strict dominance of strategy 0)
A[0] = 2 0
0 0 , A[1] = 0 0
0 0.
Game 4 (three–strategy rock–paper–scissors)
A[0] =
0 −1 1 −1 −2 0 1 02
!
, A[1] =
21 0 1 0 −1 0 −1 −2
!
, A[2] =
−2 0 −1 021 −1 1 0
!
.
Game 5 (strict pure ESS at (1, 0, 0))
A[0] =
200 000 000
!
, A[1] = 0, A[2] = 0.
Game 6 (Proliferator–Producer–Invasive tumor game)
A[0] =
2.0 1.0 0.5 3.0 2.5 1.0 1.5 1.0 0.5
!
, A[1] =
1.5 1.0 0.5 1.0 0.8 0.3 0.8 0.5 0.2
!
, A[2] =
2.0 1.5 1.0 1.5 1.0 0.8 1.0 0.8 0.5
!
.
Game 7 (three–strategy game with six SNE and two ESS)
A[0] =
645 423 534
!
, A[1] =
2 3.5 2.5 3.5 5 4 2.5 4 3
!
, A[2] =
4 3.5 4 3.5 3 3.5 4 3.5 4
!
.
Game 8 (random three–strategy game with mixed ESS)
A[0] =
−1.3170 −0.1652 −0.5493 −0.1652 0.9867 0.6025 −0.5493 0.6025 0.2184
!
,
A[1] =
0.9867 −0.3122 0.5599 −0.3122 −1.6110 −0.7390 0.5599 −0.7390 0.1331
!
,
A[2] =
0.2184 0.1757 −0.6659 0.1757 0.1331 −0.7085 −0.6659 −0.7085 −1.5501
!
.

References
[Abakuks, 1980] Andris Abakuks. Conditions for evolutionarily stable strategies. Journal of Applied Probability, 17(2):559–562, 1980.
[Archetti, 2013] Marco Archetti. Evolutionary game theory of growth factor production: implications for tumour heterogeneity and resistance. British Journal of Cancer, 109(4):1056–1062, 2013.
[Basanta et al., 2008] David Basanta, Carl Simon, Haralambos Hatzikirou, and Andreas Deutsch. The role of microenvironment and phenotype in the evolution of cancer: a game-theoretic approach. Physical Biology, 5(1):015004, 2008.
[Basanta et al., 2011] David Basanta, Haralambos Hatzikirou, and other. Investigating prostate cancer tumour–stroma interactions: clinical and biological insights from an evolutionary game. PLoS ONE, 6(3):e14769, 2011.
[Blanc and Hansen, 2021] Manon Blanc and Kristoffer Arnsfelt Hansen. Computational complexity of multi-player evolutionarily stable strategies. In Computer Science – Theory and Applications (CSR 2021), volume 12730 of Lecture Notes in Computer Science, pages 44–58. Springer, 2021.
[Bomze, 1992] I. M. Bomze. Detecting all evolutionarily stable strategies. Journal of Optimization Theory and Applications, 75:313–329, 11 1992.
[Broom and Rychta ́ˇr, 2013] Mark Broom and Jan Rycht ́aˇr. Game-Theoretical Models in Biology. CRC Press, 2013.
[Conitzer, 2013] Vincent Conitzer. The exact computational complexity of evolutionarily stable strategies. In Conference on Web and Internet Economics (WINE-13), pages 96–108, 2013.
[Cressman, 2003] Ross Cressman. Evolutionary Dynamics and Extensive Form Games. MIT Press, 2003.
[Dingli et al., 2009] David Dingli, FACC Chalub, FC Santos, Sven Van Segbroeck, and JM Pacheco. Cancer phenotype as the outcome of an evolutionary game between normal and malignant cells. British Journal of Cancer, 101(7):1130–1136, 2009.
[Etessami and Lochbihler, 2008] Kousha Etessami and Andreas Lochbihler. The computational complexity of evolutionarily stable strategies. International Journal of Game Theory, 37(1):93–113, 2008.
[Gokhale and Traulsen, 2010] Chaitanya S. Gokhale and Arne Traulsen. Evolutionary games in the multiverse: d-player games on structured populations. Proceedings of the National National Academy of Sciences, 107(12):5500–5504, 2010.
[Govindan and Wilson, 2003] Srihari Govindan and Robert Wilson. A global Newton method to compute Nash equilibria. Journal of Economic Theory, 110:65–86, 2003.
[Gurobi Optimization, LLC, 2025] Gurobi Optimization, LLC. Gurobi Optimizer Reference Manual, 2025.
[Haigh, 1975] John Haigh. Game theory and evolution. Advances in Applied Probability, 7(1):8–11, 1975.
[Herings and Peeters, 2010] P. Jean-Jacques Herings and Ronald Peeters. Homotopy methods to compute equilibria of Nash games. Economic Theory, 42(1):119–156, 2010.
[Hofbauer and Sigmund, 1998] Josef Hofbauer and Karl Sigmund. Evolutionary Games and Population Dynamics. Cambridge University Press, Cambridge, UK, 1998.
[Maschler et al., 2013] Michael Maschler, Eilon Solan, and Shmuel Zamir. Game Theory. Cambridge University Press, 2013.
[Maynard Smith and Price, 1973] John Maynard Smith and George R. Price. The logic of animal conflict. Nature, 246:15–18, 1973.
[Maynard Smith, 1982] John Maynard Smith. Evolution and the Theory of Games. Cambridge University Press, Cambridge, UK, 1982.
[McKelvey and McLennan, 1996] Richard D. McKelvey and Andrew McLennan. Computation of equilibria in finite games. In H. Amann, D. Kendrick, and J. Rust, editors, Handbook of Computational Economics, volume 1, pages 87–142. Elsevier, 1996.
[Mcnamara et al., 1997] John Mcnamara, James N. Webb, E J Collins, Tama ́s Sze ́kely, and Alasdair I. Houston. A general technique for computing evolutionarily stable strategies based on errors in decision-making. Journal of theoretical biology, 189:211–25, 12 1997.
[Nash, 1951] John Nash. Non-cooperative games. Annals of Mathematics, 54:289–295, 1951.
[Pen ̃a and No ̈ldeke, 2015] Javier Pe ̃na and Georg No ̈ldeke. Evolutionary dynamics of multi-player games. Journal of Theoretical Biology, 382:122–135, 2015.
[Pen ̃a et al., 2014] Javier Pen ̃a, Laurent Lehmann, and Georg No ̈ldeke. Gains from switching and evolutionary stability in multi-player matrix games. Journal of Theoretical Biology, 346:23–33, 2014.
[Porter et al., 2008] Ryan Porter, Eugene Nudelman, and Yoav Shoham. Simple search methods for finding a Nash equilibrium. Games and Economic Behavior, 63(2):642662, 2008.
[  ́Swierniak and Krzes ́lak, 2016] Andrzej S ́ wierniak and Jakub Krzes ́lak. Effects of heterogeneity on cancer: a game theory perspective. Biology Direct, 11(1):1–15, 2016.
[Weibull, 1995] Jo ̈rgen W. Weibull. Evolutionary Game Theory. MIT Press, 1995.
[Wu et al., 2013] Bin Wu, Arne Traulsen, and Chaitanya S. Gokhale. Dynamic properties of cooperative systems with d-player interactions. Physical Review E, 87(2):022802, 2013.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:47.366Z
- **Text Length:** 37670 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 8 of 8
