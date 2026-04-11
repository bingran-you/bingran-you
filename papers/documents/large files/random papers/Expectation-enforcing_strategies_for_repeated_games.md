# PDF Document: Dimou and McAvoy - 2025 - Expectation-enforcing strategies for repeated games.pdf

**File Path:** Dimou and McAvoy - 2025 - Expectation-enforcing strategies for repeated games.pdf

**Processed Date:** 2026-02-10T18:16:37.591Z

**File Size:** 2223.71 KB

**Total Pages:** 42

**Extracted Pages:** 42

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3219

**Title:** Expectation-enforcing strategies for repeated games

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Expectation-enforcing strategies for repeated games
Nikos Dimou and Alex McAvoy*
Abstract
Originating in evolutionary game theory, the class of “zero-determinant” strategies enables a player to unilaterally enforce linear payoff relationships in simple repeated games. An upshot of this kind of payoff constraint is that it can shape the incentives for the opponent in a predetermined way. An example is when a player ensures that the agents get equal payoffs. While extensively studied in infinite-horizon games, extensions to discounted games, nonlinear payoff relationships, richer strateg-
ic environments, and behaviors with long memory remain incompletely understood. In this paper, we provide necessary and sufficient conditions for a player to enforce arbitrary payoff relationships (linear or nonlinear), in expectation, in discounted games. These conditions characterize precisely which payoff relationships are enforceable using strategies of arbitrary complexity. Our main result establishes that any such enforceable relationship can actually be implemented using a simple two-point -
reactive learning strategy, which conditions on the opponent’s most recent action and the player’s own previous mixed action, using information from only one round into the past. For additive payoff constraints, we show that enforcement is possible using even simpler (reactive) strategies that depend solely on the opponent’s last move. In other words, this tractable class is universal within expectation-enforcing strategies. As examples, we apply these results to characterize extortionate, generou-
s, equalizer, and fair strategies in the iterated prisoner’s dilemma, asymmetric donation game, nonlinear donation game, and the hawk-dove game, identifying precisely when each class of strategy is enforceable and with what minimum discount factor.
1 Introduction
A foundational question in repeated games is how much an individual can shape long-run outcomes without imposing equilibrium discipline on others. Classical work, notably the Folk Theorem [1], characterizes the set of payoffs sustainable in equilibrium, provided the horizon of the game is sufficiently long. In contrast, far less is known about the unilateral problem: how much can a player control the space of possible outcomes, even when the opponent behaves arbitrarily? The space of feasible payo-
ffs against a fixed strategy provides outcome-relevant information not always apparent from the behavioral mechanics of a strategy itself. Importantly, this perspective gives insights into the incentives an opponent faces, whether it be in an adaptive (evolutionary) setting or one of reinforcement learning. In fact, despite the rich space of subgame perfect equilibria in repeated games, reinforcement learning illustrates that gradual modifications of one’s strategy based on self-interested objecti-
ves (i.e., caring about maximizing one’s own payoff) leads to inefficient equilibria [2, 3], which raises a question about how to productively shape incentives.
*Please direct correspondence to A.M. (alexmcavoy@gmail.com).
1
arXiv:2511.19828v1 [econ.TH] 25 Nov 2025

Although we are ultimately interested in repeated games in a general setting, some of the motivation of our approach comes from evolutionary game theory, where there is a broad body of work on cooperation in simple repeated games like the prisoner’s dilemma. The mechanism by which cooperation emerges in the repeated prisoner’s dilemma (“direct reciprocity” [4]) is predicated on the fact that defection now can be punished in the future and cooperation now can be reciprocated in the future [5]. The-
 underlying stage game has two actions, “cooperate” (C) and “defect” (D), and two agents facing one another receive payoffs according to the matrix
CD
C R, R S, T
D T, S P, P
!
, (1)
where T > R > P > S. This payoff ranking ensures that defection is the dominant action, despite mutual cooperation yielding the socially optimal outcome. For this kind of game, Press and Dyson [6] described a new class of “zero-determinant” (ZD) strategies that permit a striking level of control over expected linear payoff outcomes. In the infinitely repeated prisoner’s dilemma, ZD strategies allow player X to choose constants α, β, and γ and unilaterally enforce the equation απX + βπY + γ = 0, wh-
ere πX and πY are the longterm average payoffs of X and Y, respectively. This equation is “enforced” by X in the sense that it holds regardless of the opponent’s behavior in the repeated game. Of course, not all linear relationships are feasible, but several surprising classes of relationships are enforceable in the repeated prisoner’s dilemma, including those in the family κ − πX = χ (κ − πY) for χ ⩾ 1 and κ ∈ [P, R]. Of particular interest are strategies enforcing πX − P = χ (πY − P) for χ > 1, -
which allow X to effectively extort the opponent and claim an unfair share of payoffs beyond those of mutual defection. A concrete example of a ZD strategy is tit-for-tat (TFT) in the (infinite-horizon) iterated prisoner’s dilemma [7, 8], which enforces equal payoffs (χ = 1). Since their discovery, ZD strategies have been investigated in numerous social dilemmas, including iterated public goods [9] and (nonlinear) donation games [10], and their properties have been studied in the contexts of disco-
unted games [11], games with continuous action spaces [10], alternating games [12], evolutionary environments [13–15], multiplayer games [16], human experiments [17, 18], and stochastic, multi-state games [19]. However, the study of ZD strategies remains incomplete. Most work investigates linear payoff relationships in games where both players have access to only two actions. It also is not understood exactly what kinds of payoff constraints can be enforced, even in simple games. Furthermore, ZD s-
trategies are typically derived under the assumption that one is searching within the class of “memory-one” strategies, which specify the player’s reaction depending on the outcome of the previous round only. This class of strategies strikes a balance between mathematical tractability and behavioral complexity, and many famous strategies (including tit-for-tat and win-stay, lose-shift [20]) condition on only the previous round’s outcome. It has been shown that longer finite memory, which is comput-
ationally intractable [21], is not always needed against reasonable opponents, and strategies of reduced memory suffice to produce optimal payoff outcomes in some specific game structures [22, 23]. Even though longer-memory ZD strategies have been developed [24], any advantage they have over memory-one strategies remains unclear. An additional constraint is imposed by discounting, which weights payoffs from future rounds less than current payoffs through a discount factor λ ∈ [0, 1). Discounting r-
eflects time
2

preferences or uncertainty about future interactions, and it restricts the set of enforceable payoff relationships: as λ decreases (placing less weight on the future), fewer relationships can be enforced [11]. Given the restricted range of feasible ZD strategies in discounted games and the limited understanding of longer-memory properties, the following questions naturally arise:
• How much control does a player have against an adaptive opponent?
• Can a player enforce additional payoff relationships by extending memory?
This paper addresses both questions and provides a definitive answer to what is possible and what is implementable by a single player in repeated games. More precisely, we adopt the framework of “autocratic” strategies, which generalize ZD strategies and allow for nonlinear constraints on expected payoffs. We provide necessary and sufficient conditions of which payoff relationships can be enforced using strategies of arbitrary complexity, thus establishing a complete characterization on the level -
of control that a player is able to exert against any adaptive opponent. Our main contribution gives a (perhaps surprising) answer to the second question: extending memory beyond a simple reactive learning structure provides no additional power. In fact, any enforceable payoff relationship can be implemented using a two-point reactive learning strategy. Reactive learning strategies generalize memory-one strategies by conditioning on the opponent’s most recent action and the player’s own previous m-
ixed action (rather than realized action), allowing the player to track their own randomization history. A two-point reactive learning strategy further simplifies this by mixing between just two (fixed) possible responses based on the opponent’s last action. In addition, for additive objective functions, we show that enforcement is possible using even simpler reactive strategies that depend solely on the opponent’s last action. These results demonstrate that reactive learning strategies are univer-
sal within the class of all strategies that endow a player with the ability to control expected payoff outcomes. For any candidate payoff constraint, we give a concrete “next-round correction” condition that is both necessary and sufficient for enforcement. Furthermore, we provide an explicit formula for the minimum discount factor required to enforce a given payoff relationship. This result resolves a number of open problems. First, the problem of identifying the minimum discount factor in games -
with a more complex structure than that of the iterated prisoner’s dilemma has appeared previously in several works, e.g., in [25]. Second, it answers an open question raised by Hilbe et al. [14] regarding the existence of autocratic strategies in discounted games, and extends prior work [11] by providing exact thresholds rather than just existence results. In contrast to the approach that resulted in the discovery of ZD strategies [6], we do not rely on the standard method of studying the transit-
ion probabilities of memory-one strategies adopted by the focal player, as this technique turns out to be prohibitive when dealing with strategies of broad cognitive complexity. Instead, we explore the dynamics of the repeated game by identifying a mechanism that allows one to control the stochastic path of the game and correct past “suboptimal” behaviors or errors. Although we focus on discounted games, which are more realistic, we also extend our techniques to the infinite-horizon regime. The ma-
in theoretical results are applied to several classical games. In the iterated prisoner’s dilemma, we provide exact conditions for extortionate, generous, and equalizing strategies, computing the minimum discount factor required for each class. Our results verify and extend prior work [11, 26] by providing constructive formulas. The generality of our framework also enables important non-existence results. For instance, we prove that symmetric relationships (such as
3

πX = πY in the infinitely repeated prisoner’s dilemma) cannot be enforced in properly discounted games of finite horizon, resolving the question of when fair strategies exist. This shows that tit-for-tat’s ability to enforce equal payoffs is fundamentally limited to the infinite-horizon setting. Beyond symmetric, two-action games, we characterize autocratic strategies in a multiaction nonlinear donation game, an asymmetric donation game, and the hawk-dove game. The nonlinear donation game demonst-
rates that our framework extends naturally to nonlinear payoff relationships, where traditional ZD techniques fail. The asymmetric donation game illustrates the distinction between equality (enforcing πX = πY) and fairness (proportional sharing based on action costs), showing that only the former can sometimes be enforced unilaterally. A final important algorithmic consequence of our characterization is that verifying whether a given payoff relationship is enforceable, as well as computing the min-
imum discount factor and constructing an associated autocratic strategy, can be accomplished in polynomial time using linear programming. This stands in stark contrast to the computational intractability of analyzing general behavioral strategies [21, 27]. Our results thus provide both theoretical closure on the memory question of enforcing payoff constraints, as well as practical tools for computing autocratic strategies. The remainder of this paper is organized as follows. In Section 2, we revie-
w the framework of repeated games and introduce the notion of autocratic strategies, establishing key background results including the pointwise and generalized “next-round correction” conditions. In Section 3, we present our main theoretical contributions: we prove that any enforceable payoff relationship can be implemented using a two-point reactive learning strategy (Theorem 1), characterize the minimum discount factor required for enforcement (Proposition 4), and show that additive payoff cons-
traints admit even simpler reactive implementations (Theorem 2). We also extend our results to the undiscounted setting (λ → 1). In Section 4, we establish computational and structural properties of autocratic strategies, including polynomial-time algorithms for verification and construction, and convexity properties of the space of enforceable relations. Finally, in Section 5, we apply our framework to four examples of social dilemmas [28]: the iterated prisoner’s dilemma, a nonlinear donation ga-
me, an asymmetric donation game, and the hawk-dove game, providing complete characterizations of all linear payoff relationships that can be unilaterally enforced, as well as the minimum average time horizon needed to do so.
2 Background and auxiliary results
2.1 Repeated games and discounting
We consider repeated games between two players, X and Y, with finite action spaces SX and SY, respectively. The players receive short-term payoffs via functions uX : SX × SY → R and uY : SX × SY → R. In each round t ∈ {0, 1, 2, . . . }, players simultaneously choose actions stX, stY ∈
SX × SY from a distribution and receive stage-game payoffs uX stX, stY and uY stX, stY . The game continues with probability λ ∈ [0, 1) after each round. The discounted payoff for player X over a realization of action outcomes is
πX = (1 − λ)
∞
∑
t=0
λtuX stX, stY , (2)
with a similar expression for player Y, with uY replacing uX. The factor 1 − λ normalizes payoffs to be comparable across different continuation probabilities.
4

2.2 Behavioral strategies and histories
Let HT = (SX × SY)T denote the set of all possible histories of length T, representing the sequence of action pairs played from round 0 through round T − 1. We write H = S
T⩾0 HT for the set of
all finite histories, where H0 = {∅} represents the null history at the start of the game. Let ∆ (SX) and ∆ (SY) denote the corresponding spaces of mixed actions (distributions over pure actions). A behavioral strategy for player X is a map σX : H → ∆ (SX) that specifies a mixed action for each possible history. Given strategies σX and σY, we write EσX,σY [·] for the expected value with respect to the probability distribution over infinite sequences of realized play induced by σX and σY. Notably, -
the mean long-term payoffs for X and Y, respectively, are
πX := EσX,σY
"
(1 − λ)
∞
∑
t=0
λtuX stX, stY
#
; (3a)
πY := EσX,σY
"
(1 − λ)
∞
∑
t=0
λtuY stX, stY
#
. (3b)
A behavioral strategy is a “memory-one” strategy if its response depends only on the most recent round of play. Formally, a memory-one strategy for player X consists of (i) an initial mixed action σ0X ∈ ∆ (SX) and (ii) a response rule σX : SX × SY → ∆ (SX) that specifies a mixed action
σX [sX, sY] ∈ ∆ (SX) for each action pair (sX, sY) in the previous round. Importantly, the response depends only on the realized actions (sX, sY), not on how those actions were generated through
randomization. Let Mem1X denote the set of all memory-one strategies for player X.
2.3 Reactive learning strategies
Reactive learning strategies, introduced by McAvoy and Nowak [29], generalize memory-one strategies by allowing a player to condition on their own mixed action from the previous round.
Definition 1. A reactive learning strategy for X consists of an initial action σ0X ∈ ∆ (SX) and a
response rule σX : ∆ (SX) × SY → ∆ (SX).
Let RLX denote the set of all reactive learning strategies for X. Every memory-one strategy naturally induces a reactive learning strategy via the canonical embedding
∗ : Mem1X −→ RLX
: σ0X, σX 7−→ σ0X, σ∗
X , (4)
where the initial actions are the same, and σ∗
X [τX, sY] (·) := EsX∼τX [σX [sX, sY] (·)] over SX. Conversely, restricting a reactive learning strategy to Dirac measures recovers a memory-one response function, σX [sX, sY] := σ∗
X [δsX , sY], where δsX is the point mass at sX.
Definition 2. A sequence τtX
∞
t=0 ⊆ ∆ (SX) is a “chain” of mixed actions derived from σ0X, σ∗
X
if τX0 = σ0X and, for every t ⩾ 1, there exists an action st−1
Y ∈ SY such that τtX = σ∗
X
h
τt−1
X , st−1
Y
i
.
5

2.4 Feasible and enforceable payoffs
The feasible region is the set of all payoff pairs (πY, πX) that can arise from some pair of strategies (note the unusual ordering, which we fix throughout). For a generic two-player game, this forms a convex subset of R2 of full dimension. When a player commits to a strategy, σX, the achievable payoffs as σY varies form a convex subset of the feasible region. For a generic strategy σX, characterizing the geometry of achievable payoff pairs (πY, πX) as σY ranges over all opponent strategies requir-
es detailed knowledge of the repeated game dynamics. There is currently no simple way to determine this payoff region, apart from in special cases, such as two-action games with infinite horizon, where this region is the convex hull of at most 11 points [29].
2.5 Autocratic strategies
The following definition formalizes the notion of unilateral enforcement of expectations:
Definition 3. Let φ : SX × SY → R be a fixed function on the space of joint actions. A strategy σX : H → ∆ (SX) is (φ, λ)-autocratic if, for all opponent strategies σY : H → ∆ (SY),
EσX ,σY
"
(1 − λ)
∞
∑
t=0
λt φ stX, stY
#
= 0. (5)
Intuitively, an autocratic strategy unilaterally enforces a constraint on the expected value of φ, regardless of the opponent’s behavior. When φ (sX, sY) = αuX (sX, sY) + βuY (sX, sY) + γ, this corresponds to enforcing the linear payoff relationship απX + βπY + γ = 0, which is exactly the motivation behind zero-determinant (ZD) strategies [6].
Definition 4. For φ : SX × SY → R and λ ∈ [0, 1], we say that φ ≡ 0 is λ-enforceable if there exists a (φ, λ)-autocratic strategy σX : H → ∆ (SX). We say φ ≡ 0 is enforceable if it is λ-enforceable for some λ ∈ [0, 1].
2.6 The pointwise next-round correction condition
The following result from McAvoy and Hauert [10] provides a sufficient condition for a memoryone strategy to enforce a linear payoff relationship.
Theorem 0 (McAvoy and Hauert [10]). Suppose that σ0X, σX [sX, sY] is a memory-one strategy for X. If there exists a function ψ : SX → R such that
αuX (sX, sY) + βuY (sX, sY) + γ = ψ (sX) − λEs′
X ∼σX [sX,sY] ψ s′
X − (1 − λ) Es′
X ∼σ0X ψ s′
X (6)
holds for every sX ∈ SX and sY ∈ SY, then σ0X, σX [sX, sY] enforces the linear payoff relationship
απX + βπY + γ = 0 (7)
against any behavioral strategy of player Y, including those with infinite memory.
We call Eq. 6 the pointwise next-round correction condition, and we call ψ the enforcement potential. This condition provides a local, action-by-action characterization that guarantees the global payoff constraint Eq. 7.
6

Figure 1: Payoff regions enforced when X plays weighted averages of ALLD (red) and TFT (green) in repeated prisoner’s dilemmas. Each colored region shows the payoff region obtained from the strategy σX := (1 − p) ALLD + pTFT played against 104 randomly-chosen opposing strategies, for p ∈ {k/10}10
k=0. (A,C) Additive prisoner’s dilemma
with (R, S, T, P) = (1, −1, 2, 0): for p ∈/ {0, 1}, the strategy enforces a linear payoff relationship. (B,D) Non-additive prisoner’s dilemma with (R, S, T, P) = (3, 0, 5, 1): the strategy enforces a two-dimensional convex region. While lineenforcing strategies naturally arise in additive games through simple mixtures of well-known strategies, non-additive games require more sophisticated constructions. Panels A and B use λ = 0.9999 (a game with 10,000 rounds, on average, approximating an undiscou-
nted game), and panels C and D use λ = 0.8 (a game with 5 rounds, on average).
7

Example 1 (Tit-for-tat in the undiscounted prisoner’s dilemma). Consider the prisoner’s dilemma with payoff matrix Eq. 1 in the undiscounted setting (λ → 1). The well-known strategy of titfor-tat (TFT) plays C initially and then copies the opponent’s previous action. That is, σ0X = C and σX [sX, sY] = sY for all sX, sY ∈ {C, D}. It is known that TFT enforces the fair relationship πX = πY, or equivalently, φ ≡ 0 where φ (sX, sY) = uY (sX, sY) − uX (sX, sY) [6]. To verify this using the pointwise n-
ext-round correction condition (Eq. 6), we seek an enforcement potential ψ : {C, D} → R such that
φ (sX, sY) = ψ (sX) − ψ (σX [sX, sY]) (8)
for all sX, sY ∈ {C, D}. This equation simplifies to φ (sX, sY) = ψ (sX) − ψ (sY) since TFT satisfies σX [sX, sY] = sY. Taking ψ (C) = 0 and solving, we obtain ψ (D) = T − S. By Theorem 0 (extended to λ = 1), TFT enforces πX = πY against any opponent strategy. This example illustrates how the enforcement potential ψ captures the “correction” that each action provides toward achieving the target payoff relationship.
A natural question is whether the pointwise next-round correction condition is also necessary for enforcing linear payoff relationships. The next example shows that it is not, in general:
Example 2. Consider a two-player, two-action game with payoff matrix
CD
C −1 −2
D +1 +2
!
. (9)
By playing C and D with equal probability in each round, player X can ensure πX = 0 regardless of Y’s strategy. Specifically, the constant mixed strategy with σ0X (C) = σ0X (D) = 1/2 and
σX [sX, sY] = σ0X for all sX, sY ∈ {C, D} enforces πX = 0 for all λ ∈ [0, 1). However, this strategy does not satisfy the pointwise next-round correction condition (Eq. 6) for every action pair (sX, sY) because uX (sX, sY) depends on sY. To see this more explicitly, suppose there exists ψ : SX → R such that Eq. 6 holds with α = 1 and β = γ = 0. By scaling, we may assume ψ (C) = 0. The pointwise next-round correction condition then requires:
−1 = −λσX [C, C] (D) ψ (D) − (1 − λ) σ0X (D) ψ (D) ; (10a)
−2 = −λσX [C, D] (D) ψ (D) − (1 − λ) σ0X (D) ψ (D) ; (10b)
+1 = ψ (D) − λσX [D, C] (D) ψ (D) − (1 − λ) σ0X (D) ψ (D) ; (10c)
+2 = ψ (D) − λσX [D, D] (D) ψ (D) − (1 − λ) σ0X (D) ψ (D) . (10d)
This system has no solution for ψ (D), which shows that the pointwise next-round correction condition (Eq. 6) is sufficient but not necessary for enforcing linear payoff relationships.
2.7 The generalized next-round correction condition
We now extend the pointwise condition to reactive learning strategies. Suppose σ0X, σX [sX, sY] satisfies the pointwise next-round correction condition (Eq. 6) for some enforcement potential ψ : SX → R. For τX ∈ ∆ (SX), define the map Ψ (τX) := EsX∼τX [ψ (sX)] (which we also refer to
8

as an enforcement potential), and recall the induced reactive learning strategy, σ∗
X [τX, sY] (·) := EsX∼τX [σX [sX, sY] (·)].
Let MX ⊆ ∆ (SX) be the reachable set of mixed actions,
MX := \ M ⊆ ∆ (SX) | σ0X ∈ M and σ∗
X [τX, sY] ∈ M for all τX ∈ M and sY ∈ SY . (11)
That is, MX is the smallest subset of ∆ (SX) containing the initial action σ0X and closed under the
response map τX 7→ σ∗
X [τX, sY] for every sY ∈ SY. Let φ (τX, sY) := EsX∼τX [φ (sX, sY)] be the linear extension of φ to mixed actions in the first coordinate. Taking expectations of Eq. 6 with respect to τX ∈ MX yields the generalized nextround correction condition,
φ (τX, sY) = Ψ (τX) − λΨ (σ∗
X [τX, sY]) − (1 − λ) Ψ σ0X (12)
for every τX ∈ MX and sY ∈ SY, where φ (sX, sY) = αuX (sX, sY) + βuY (sX, sY) + γ. Unlike the pointwise condition, we will show that the generalized next-round correction condition is both necessary and sufficient for σ0X, σ∗
X to be autocratic, for general functions φ. We first need a technical lemma, which shows that autocratic strategies can be characterized by enforcement against deterministic sequences:
Lemma 1. A behavioral strategy σX : H → ∆ (SX) is (φ, λ)-autocratic if and only if it enforces φ ≡ 0 with discount factor λ against all exogenous (deterministic) sequences stY
∞
t=0 ⊆ SY.
Proof. The “only if” direction follows immediately since exogenous sequences are behavioral strategies. For the converse, suppose σX enforces φ ≡ 0 against all exogenous sequences. For any behavioral strategy σY : H → ∆ (SY), the tower property of total expectation gives
EσX ,σY
"∞
∑
t=0
λt φ stX, stY
#
= EσX,σY
"
EσX ,σY
"∞
∑
t=0
λt φ stX, stY | stY
∞ t=0
##
= EσX,σY
"
EσX,(stY )∞
t=0
"∞
∑
t=0
λt φ stX, stY | stY
∞ t=0
##
= EσX,σY [0]
= 0, (13)
where the third equality comes from the hypothesis.
The generalized next-round correction condition provides a complete characterization of autocratic reactive learning strategies. Since Eq. 6 implies Eq. 12 by linearity of expectation, the following strengthens the main result of McAvoy and Hauert [10].
Proposition 1. Consider a function φ : SX × SY → R and fix λ ∈ [0, 1). If the generalized next
round correction condition holds for the reactive learning strategy σ0X, σ∗
X , then σ0X, σ∗
X is a (φ, λ)-autocratic strategy.
Proof. By Lemma 1, it suffices to show that σ0X, σ∗
X enforces φ ≡ 0 with discount factor λ against
all exogenous sequences. Consider an arbitrary sequence stY
∞
t=0 ⊆ SY. The strategy σ0X, σ∗
X
9

and this sequence generate a chain of mixed actions τtX
∞
t=0 with τX0 = σ0X and τt+1
X = σ∗
X τtX, stY
for all t ⩾ 0. Let μtX ∈ ∆ (MX × SY)t be the probability distributions defined inductively by
μ0X [∅] := σ∗
X [∅] × σY [∅] = σ0X × δs0Y ; (14a)
μt+1
X τX0 , s0Y , . . . , τtX, stY := μtX τX0 , s0Y , . . . , τt−1
X , st−1
Y
× δσ∗
X [τt−1
X ,st−1
Y ],τtX
× δσY[τt−1
X ,st−1
Y ],stY . (14b)
From this we obtain the marginalized distributions νtX
∞
t=0 over MX × SY defined by
νtX (A × B) := μtX (MX × SY)t−1 × (A × B) . (15)
The generalized next-round correction condition (Eq. 12) gives
E(τX,sY)∼νtX [φ (τX, sY)] = E(τX,sY)∼νtX [Ψ (τX )] − λE(τX,sY)∼νtX [Ψ (σ∗
X [τX, sY])] − (1 − λ) Ψ σ0X .
(16)
Due to the deterministic nature of the exogenous sequence, by induction we find νt+1
X (τX, sY) =
δ{τX=τtX,sY=stY} for every (τX, sY) ∈ MX × SY, where τtX := σ∗
X
h
τt−1
X , st−1
Y
i
for every t ⩾ 1. Thus,
E(τX,sY)∼νtX [Ψ (σ∗
X [τX, sY])] = E(τX,sY)∼νt+1
X [Ψ (τX)] (17)
for every t ⩾ 0. From Eq. 16 and Eq. 17 we deduce the recursion
E(τX,sY)∼νtX [φ (τX, sY )] = E(τX,sY)∼νtX [Ψ (τX )] − λE(τX,sY)∼νt+1
X [Ψ (τX)] − (1 − λ) Ψ σ0X , (18)
which gives a telescoping sum. The result follows by multiplying Eq. 18 by λt and summing over t ⩾ 0.
We next prove that the generalized next-round correction condition is also a necessary condition, and we consider the uniqueness of the enforcement potential Ψ.
Proposition 2. If σ0X, σ∗
X is a reactive learning strategy that is (φ, λ)-autocratic, then there exists
MX ⊆ ∆ (SX) and an enforcement potential Ψ : MX → R such that
(a) limt→∞ λtΨ τtX = 0 for every chain, τtX
∞
t=0 ⊆ MX, derived from σ0X, σ∗
X;
(b) The generalized next-round correction condition holds for all τX ∈ MX and sY ∈ SY.
(c) if MfX ⊆ ∆ (SX) and Ψe : MfX → R also satisfy limt→∞ λtΨe τetX = 0 for chains τetX
∞
t=0 ⊆
MfX, and Eq. 12 holds for all τX ∈ MfX and sY ∈ SY, then MX ⊆ MfX and Ψe |MX − Ψ is constant on MX.
Proof. Let MX be the set of all truncated chains of mixed actions derived from σ∗
X. In particular,
MX is the set of all actions τX ∈ ∆ (SX) for which there exist sequences τX0 , . . . , τXT ⊆ ∆ (SX)
10

and
n
s0Y, . . . , sT−1
Y
o
⊆ SY with τX0 = σ0X, τXT = τX, and τtX = σ∗
X
h
τt−1
X , st−1
Y
i
for 1 ⩽ t ⩽ T. For
τX ∈ MX, with sequences τX0 , . . . , τXT ⊆ ∆ (SX) and
n
s0Y, . . . , sT−1
Y
o
⊆ SY chosen as above, let
Ψ (τX) := −λ−T T−1
∑
t=0
λt φ τtX, stY . (19)
(We define Ψ σ0X := 0.) To see that Eq. 19 gives a well-defined value of Ψ at τX, suppose that
n
τeX0 , . . . , τeXTe
o
⊆ ∆ (SX) and
n
se0Y, . . . , seTe−1
Y
o
⊆ SY are also sequences with τeX0 = σ0X, τeXTe = τX, and
τetX = σ∗
X
h
τet−1
X , set−1
Y
i
for 1 ⩽ t ⩽ Te. For any s∗
Y ∈ SY, we can extend the sequences τtX
T
t=0 and
τetX
Te
t=0 as follows: for each t ⩾ 1, let τT+t
X := σ∗
X
h
τT+t−1
X , s∗
Y
i
and τeTe+t
X := σ∗
X
h
τeTe+t−1
X , s∗
Y
i
. Since
τXT = τeXTe = τX, we have τT+t
X = τeTe+t
X for every t ⩾ 0. Therefore, by the hypothesis,
0=
T−1
∑
t=0
λt φ τtX, stY +
∞
∑
t=T
λt φ τtX, s∗
Y
=
Te−1
∑
t=0
λt φ τetX, setY +
∞
∑
t=Te
λt φ τetX, s∗
Y
=
Te−1
∑
t=0
λt φ τetX, setY + λTe−T ∞
∑
t=T
λt φ τtX, s∗
Y . (20)
It follows immediately that Ψ is well-defined since, from Eq. 20, we obtain
−λ−T T−1
∑
t=0
λt φ τtX, stY = −λ−Te
Te−1
∑
t=0
λt φ τetX, setY . (21)
That limt→∞ λtΨ τtX = 0 for every chain of mixed actions τtX
∞
t=0 derived from σ0X, σ∗
X simi
larly follows from the fact that σ0X, σ∗
X is (φ, λ)-autocratic, which establishes part (a). For part (b), consider τX ∈ MX. We may assume, without a loss of generality, that τX is not the initial action σ0X, since Ψ σ0X = 0. Then, as above, there exist T ⩾ 1 and sequences
τX0 , . . . , τXT ⊆ ∆ (SX) and
n
s0Y, . . . , sT−1
Y
o
⊆ SY with τX0 = σ0X, τXT = τX, and τtX = σ∗
X
h
τt−1
X , st−1
Y
i
for 1 ⩽ t ⩽ T. Let sY ∈ SY, and set τT+1
X := σ∗
X [τX, sY]. By the definition of Ψ, we have
Ψ (τX) − λΨ (σ∗
X [τX, sY]) = Ψ τXT − λΨ τT+1
X
= −λ−T T−1
∑
t=0
λt φ τtX, stY + λλ−(T+1) T
∑
t=0
λt φ τtX, stY
= φ (τX, sY) . (22)
The generalized next-round correction condition follows. Since MX is defined as the set of all chains of mixed actions derived from σ0X, σ∗
X , it follows
that any other such MfX must contain MX. With Ψb := Ψe |MX − Ψe σ0X , we have Ψb σ0X = 0 and
Ψb (σX [τX, sY]) = −λ−1 φ (τX, sY) + λ−1Ψb (τX) (23)
for every τX ∈ MX and sY ∈ SY. Using this recurrence, it follows by induction that Ψb = Ψ, and thus Ψe |MX − Ψ = Ψe σ0X on MX, which completes the proof of part (c).
11

3 Autocratic strategies with short memory
For most of this section, we assume λ ∈ [0, 1); that is, the game terminates with positive probability 1 − λ > 0 after each round. Only in Section 3.3, which covers the undiscounted, infinitehorizon case, do we consider λ → 1. A basic question for implementing autocratic strategies in practice is: how much memory is required? While Definition 3 allows strategies with arbitrary memory, we show that strategies with shorter memory suffice. In this section, we prove that every autocratic strategy, reg-
ardless of its complexity, can be replaced by a two-point reactive learning strategy, which is one that mixes between just two fixed distributions (mixed actions). We proceed in three steps. First, we show that autocratic strategies need only condition on the opponent’s history (Proposition 3). Second, we establish that such strategies correspond to reactive learning strategies with a right-invariance property, which allows longer action histories to be “rolled up” into information that can be car-
ried from round to round. Finally, we construct explicit two-point strategies that enforce any enforceable payoff relationship (Theorem 1).
Proposition 3. Suppose that σX : H → ∆ (SX) is (φ, λ)-autocratic. Then, with the opponentaction history space HY := S
t⩾0 StY (where we interpret S0Y = {∅} as the “empty” history), there
exists an opponent-conditioned strategy, eσX : HY → ∆ (SX), that is also (φ, λ)-autocratic. In particular, it always suffices for X to condition on only the observed history of Y alone.
Proof. Suppose that σX : H → ∆ (SX) is an autocratic strategy for X. If the opponent plays an exogenous sequence of pure actions, stY
∞
t=0, which we denote by σY, then
0 = EσX,σY
"∞
∑
t=0
λt φ stX, stY
#
=
∞
∑
t=0
λt EσX ,σY
h
φ σX
h
s0X, s0Y , . . . , st−1
X , st−1
Y
i
, stY
i
=
∞
∑
t=0
λt φ eσX
h
s0Y, . . . , st−1
Y
i
, stY , (24)
where eσX : HY → ∆ (SX) is defined by eσ0X := σ0X and
eσX
h
s0Y, . . . , st−1
Y
i
stX := E(s0X,...,st−1
X )∈StX
h
σX
h
s0X, s0Y , . . . , st−1
X , st−1
Y
i
stX
i
. (25)
We simply do not track dependence on X’s actions, which we can do because X’s mixed actions determine their own history and we are taking expectations in the evaluation of autocratic strategies. We note that this strategy, while defined using exogenous sequences of opponent (pure) actions, can be used against any opponent, and it remains autocratic by Lemma 1, as desired.
Proposition 3 suggests an interesting connection between autocratic strategies and reactive learning strategies. Consider the map taking a reactive learning strategy, σ0X, σ∗
X , to a behavioral
strategy, U σ0X, σ∗
X : HY → ∆ (SX), with U σ0X, σ∗
X [∅] = σ0X and U σ0X, σ∗
X s0Y, . . . , stY = τt+1
X,
where τi+1
X = σ∗
X τiX, siY for i = 0, . . . , t and τX0 = σ0X. Recall that σ0X, σ∗
X is implicitly based on
a subset MX ⊆ ∆ (SX), such that σ0X ∈ MX and σ∗
X is a map from MX × SY to MX. The map U is not surjective because that would require that if two distinct histories prescribe the same
12

randomization for player X at time t, then they must prescribe the same randomization for X at all T ⩾ t when Y uses the same actions in both sequences thereafter. We can re-frame this problem slightly. We say that σX is “right-invariant” if, whenever σX [α] = σX [β] for α, β ∈ HY, we have σX [αγ] = σX [βγ] for all γ ∈ HY. One can check that if σX : HY → ∆ (SX) is in the image of U , then σX is right-invariant. Conversely, if σX : HY → ∆ (SX) is right-invariant, then σX lifts to a canonical eleme-
nt in the domain of U . One of the goals of this paper is to show that every autocratic strategy, regardless of complexity, can be replaced by a reactive learning strategy, i.e., an element of the preimage of U . In fact, we show that this can be done with a particularly simple and convenient reactive learning strategy.
3.1 Enforcing payoff constraints with short memory
The key to constructing simple autocratic strategies is identifying when two mixed actions can serve as the building blocks for enforcement. Lemma 2 ultimately provides necessary and sufficient conditions: two mixed actions τ+
X and τ−
X can enforce a constraint if their maximum and minimum payoffs satisfy certain inequalities that balance the discounting and allow for stable enforcement across all opponent responses. Intuitively, these inequalities ensure that player X can always find an appropriate mixture of τ+
X and τ−
X in response to any opponent action sY such that the expected payoff remains on
target. The “+” and “−” superscripts suggest their roles: τ+
X typically yields higher values of φ
while τ−
X yields lower values, and the strategy adjusts the mixture to maintain the target.
Lemma 2. Suppose that λ ∈ [0, 1) and that τ±
X ∈ ∆ (SX) satisfy the inequalities
min
sY ∈SY
φ τ+
X , sY ⩾ (1 − λ) max
sY ∈SY
φ τ+
X , sY + λ max
sY ∈SY
φ τ−
X , sY ; (26a)
max
sY ∈SY
φ τ−
X , sY ⩽ λ min
sY ∈SY
φ τ+
X , sY + (1 − λ) min
sY ∈SY
φ τ−
X , sY . (26b)
Then, there exists a function p∗ : [0, 1] × SY → [0, 1] such that, with the reaction
σ∗
X pτ+
X + (1 − p) τ−
X , sY = p∗ [p, sY] τ+
X + (1 − p∗ [p, sY]) τ−
X , (27)
X can enforce φ ≡ K for any K ∈ maxsY∈SY φ τ−
X , sY , minsY∈SY φ τ+
X , sY .
The proof strategy is as follows. By Proposition 1, satisfying the generalized next-round correction condition (Eq. 12) with an appropriate enforcement potential Ψ is sufficient to guarantee that a reactive learning strategy is autocratic. For a two-point strategy that mixes between τ+
X and
τ−
X , the map Ψ is completely determined by just two values: ψ τ+
X and ψ τ−
X . The strategy
begins with an initial mixture σ0X = p0τ+
X + (1 − p0) τ−
X for some p0 ∈ [0, 1], and responds to each
opponent action sY ∈ SY by playing σ∗
X pτ+
X + (1 − p) τ−
X , sY = p∗ [p, sY] τ+
X + (1 − p∗ [p, sY]) τ−
X.
The challenge is to choose ψ τ+
X , ψ τ−
X , and p0 such that Eq. 12 holds and all transition prob
abilities p∗ [p, sY] remain in [0, 1] for every p ∈ [0, 1] and sY ∈ SY. We construct these values explicitly below.
Proof. For two-point strategies, finding an enforcement potential ψ satisfying the generalized next-round correction condition amounts to finding two constants, ψ τ+
X and ψ τ−
X . Let
ψ τ+
X := 1
1 − λ min
sY ∈SY
φ τ+
X , sY ; (28a)
13

ψ τ−
X := 1
1 − λ max
sY ∈SY
φ τ−
X , sY . (28b)
From Eq. 26, we must have ψ τ+
X ⩾ ψ τ−
X . If ψ τ+
X = ψ τ−
X , then Eq. 26 implies that
φ τ+
X , sY = φ τ−
X , sY = ψ τ+
X for every sY ∈ SY, in which case φ ≡ ψ τ+
X = ψ τ−
X can be
enforced by an unconditional strategy. Therefore, we may assume that ψ τ+
X − ψ τ−
X > 0.
Fix K ∈ maxsY∈SY φ τ−
X , sY , minsY∈SY φ τ+
X , sY and consider the response function
p∗ [p, sY] = K − pφ τ+
X , sY − (1 − p) φ τ−
X , sY
λ ψ τ+
X − ψ τ−
X
+ p − (1 − λ) p0
λ . (29)
To have p∗ [p, sY] ∈ [0, 1] for all p ∈ [0, 1] and sY ∈ SY, necessary and sufficient conditions are
K − minsY∈SY φ τ−
X , sY
(1 − λ) ψ τ+
X − ψ τ−
X
−λ
1 − λ ⩽ p0 ⩽ K − maxsY∈SY φ τ−
X , sY
(1 − λ) ψ τ+
X − ψ τ−
X
; (30a)
1 − minsY∈SY φ τ+
X , sY − K
(1 − λ) ψ τ+
X − ψ τ−
X
⩽ p0 ⩽ 1
1−λ
− maxsY∈SY φ τ+
X , sY − K
(1 − λ) ψ τ+
X − ψ τ−
X
. (30b)
The fact that each of these two intervals is non-trivial follows from Eq. 26. Moreover, by the values given in Eq. 28, the two intervals intersect at a unique initial probability, which is
p0 = K − maxsY∈SY φ τ−
X , sY
(1 − λ) ψ τ+
X − ψ τ−
X
= K − maxsY∈SY φ τ−
X , sY
minsY∈SY φ τ+
X , sY − maxsY∈SY φ τ−
X , sY
. (31)
With p0 and p∗ well-defined and taking values in [0, 1], the generalized next-round correction
condition is satisfied for φ − K, and thus (p0, p∗) allows X to enforce φ ≡ K.
Remark 1. In the statement of Lemma 2, we implicitly assume that the mixing probability, p, can be determined by the value of pτ+
X + (1 − p) τ−
X . If p, q ∈ [0, 1] are mixing probabilities satisfying
pτ+
X + (1 − p) τ−
X = qτ+
X + (1 − q) τ−
X , then (p − q) τ+
X = (p − q) τ−
X . If τ+
X ̸= τ−
X , then p = q. If
τ+
X = τ−
X , then the Lemma holds trivially.
We are especially interested in enforcing relationships of the form φ ≡ 0, and there is no loss of generality in setting K = 0 since we can absorb this constant into φ, if necessary. The following result is an immediate consequence of Lemma 2:
Corollary 1. If maxsY∈SY φ τ−
X , sY ⩽ 0 ⩽ minsY∈SY φ τ+
X , sY and the hypotheses of Lemma 2
hold for τ+
X and τ−
X , then X can enforce φ ≡ 0 (using a two-point reactive learning strategy).
Motivated by this result and our focus on enforcing φ ≡ 0, we define the sets
Φ+
X := τX ∈ ∆ (SX) | min
sY ∈SY
φ (τX, sY) ⩾ 0 ; (32a)
Φ−
X := τX ∈ ∆ (SX) | max
sY ∈SY
φ (τX, sY) ⩽ 0 . (32b)
In general, either or both of these sets can be empty. We are now in a position to state and prove our main theoretical result:
14

Theorem 1. Suppose that σX : H → ∆ (SX) is a (φ, λ)-autocratic strategy of arbitrary memory. Then, there exists a two-point reactive learning strategy that is also (φ, λ)-autocratic.
Proof. If λ = 0, then conditioning is irrelevant and only the initial mixed action matters, so the result is trivial. Therefore, we assume that λ > 0 going forward. By Proposition 3, we may assume that σX is a map from HY = S
t⩾0 StY to ∆ (SX). Consider the map defined by
Θ : HY −→ R
: s0Y, . . . , sT−1
Y 7−→ −λ−T T−1
∑
t=0
λt φ σX
h
s0Y, . . . , st−1
Y
i
, stY , (33)
where Θ (∅) := 0. From the definition of Θ, we see that for all h ∈ HY and sY ∈ SY,
φ (σX [h] , sY) = Θ (h) − λΘ (h, sY) . (34)
From this equation, we also see that for every h ∈ HY,
max
sY ∈SY
φ (σX [h] , sY) + λ inf
h∈HY\{∅} Θ (h)
⩽ Θ (h) ⩽ min
sY ∈SY
φ (σX [h] , sY) + λ sup
h∈HY \{∅}
Θ (h) . (35)
To see that these bounds are finite, we note that for any h ∈ HY and sY ∈ SY,
Θ (h) =
∞
∑
t=T
λt−T φ

σX

h, sY, . . . , sY
| {z }
t − T times

 , sY

 , (36)
since σX is (φ, λ)-autocratic. This equation gives ∥Θ∥∞ ⩽ 1
1−λ ∥φ∥∞ < ∞ since φ is bounded.
Fix two sequences of histories, {hn+}∞
n=0 and {hn−}∞
n=0, such that {Θ (hn+)}∞
n=0 converges mono
tonically to suph∈HY\{∅} Θ (h) and {Θ (hn−)}∞
n=0 converges monotonically to infh∈HY\{∅} Θ (h). For every fixed ε > 0, there must then exist Nε ⩾ 0 such that, whenever n ⩾ Nε,
Θ h+
n > sup
h∈HY \{∅}
Θ (h) − 1
2λ ε; (37a)
Θ h−
n < inf
h∈HY\{∅} Θ (h) + 1
2λ ε. (37b)
We note that if suph∈HY\{∅} Θ (h) < 0, then Eq. 37a holds for hn+ = ∅ for all n ⩾ 0. Similarly, if
infh∈HY\{∅} Θ (h) > 0, then Eq. 37b holds when hn− = ∅ for all n ⩾ 0. Consider now the pair,
τ+
X,n, τ−
X,n :=

     
     
(σX [∅] , σX [hn−]) suph∈HY\{∅} Θ (h) < 0,
(σX [hn+] , σX [∅]) infh∈HY\{∅} Θ (h) > 0,
(σX [hn+] , σX [hn−]) otherwise.
(38)
15

Since ∆ (SX) is compact, by passing to subsequences of histories if necessary, we may assume that
n
τ+
X,n
o∞
n=0 and
n
τ−
X,n
o∞
n=0 are convergent sequences in ∆ (SX), with limits τ+
X and τ−
X , respectively.
To complete the proof, using Lemma 2 (Corollary 1), we show that Eq. 26 holds and that τ+
X ∈ Φ+
X
and τ−
X ∈ Φ−
X . To see that Eq. 26 holds, we fix ε > 0 and let n ⩾ Nε and note that
(1 − λ) sup
h∈HY \{∅}
Θ (h) − inf
h∈HY\{∅} Θ (h)
!
< Θ h+
n − Θ h−
n +1
λ ε − λ sup
h∈HY \{∅}
Θ (h) − inf
h∈HY\{∅} Θ (h)
!
(Eq. 37)
⩽ min
sY ∈SY
φ τ+
X,n, sY − max
sY ∈SY
φ τ−
X,n, sY + 1
λ ε. (Eq. 35) (39)
From this inequality, we can conclude that
(1 − λ) max
sY ∈SY
φ τ+
X,n, sY + λ max
sY ∈SY
φ τ−
X,n, sY
⩽ (1 − λ) min
sY ∈SY
φ τ+
X,n, sY + λ max
sY ∈SY
φ τ−
X,n, sY
+ (1 − λ) λ sup
h∈HY \{∅}
Θ (h) − inf
h∈HY\{∅} Θ (h)
!
(Eq. 35)
< (1 − λ) min
sY ∈SY
φ τ+
X,n, sY + λ max
sY ∈SY
φ τ−
X,n, sY
+ λ min
sY ∈SY
φ τ+
X,n, sY − max
sY ∈SY
φ τ−
X,n, sY + 1
λ ε (Eq. 39)
= min
sY ∈SY
φ τ+
X,n, sY + ε; (40a)
λ min
sY ∈SY
φ τ+
X,n, sY + (1 − λ) min
sY ∈SY
φ τ−
X,n, sY
⩾ λ min
sY ∈SY
φ τ+
X,n, sY + (1 − λ) max
sY ∈SY
φ τ−
X,n, sY
− (1 − λ) λ sup
h∈HY \{∅}
Θ (h) − inf
h∈HY\{∅} Θ (h)
!
(Eq. 35)
> λ min
sY ∈SY
φ τ+
X,n, sY + (1 − λ) max
sY ∈SY
φ τ−
X,n, sY
− λ min
sY ∈SY
φ τ+
X,n, sY − max
sY ∈SY
φ τ−
X,n, sY + 1
λ ε (Eq. 39)
= max
sY ∈SY
φ τ−
X,n, sY − ε. (40b)
Since ε > 0 was arbitrary, it follows that Eq. 26 holds for the pair τ+
X , τ−
X.
What remains to be shown is that τ+
X ∈ Φ+
X and τ−
X ∈ Φ−
X , which we establish in three cases:
(i) If suph∈HY\{∅} Θ (h) < 0, then, by Eq. 35,
min
sY ∈SY
φ (σX [∅] , sY) ⩾ −λ sup
h∈HY \{∅}
Θ (h) > 0, (41)
16

and thus minsY∈SY φ τ+
X , sY > 0. For n ⩾ Nε, Eq. 35 and Eq. 37 give
max
sY ∈SY
φ τ−
X,n, sY < (1 − λ) inf
h∈HY\{∅} Θ (h) + 1
2λ ε, (42)
and thus maxsY∈SY φ τ−
X , sY < 0 in the limit, since ε > 0 was arbitrary.
(ii) If infh∈HY\{∅} Θ (h) > 0, then, by Eq. 35,
max
sY ∈SY
φ (σX [∅] , sY) ⩽ −λ inf
h∈HY\{∅} Θ (h) < 0, (43)
which gives maxsY∈SY φ τ−
X , sY < 0. For n ⩾ Nε, Eq. 35 and Eq. 37 give
min
sY ∈SY
φ τ+
X,n, sY > (1 − λ) sup
h∈HY \{∅}
Θ (h) − 1
2λ ε, (44)
so minsY∈SY φ τ+
X , sY > 0 in the limit, since ε > 0 was arbitrary.
(iii) If neither (i) nor (ii) applies, then we deduce that τ+
X ∈ Φ+
X and τ−
X ∈ Φ−
X by taking the
limits of Eq. 42 and Eq. 44 as n → ∞ and noting that ε > 0 was arbitrary.
By Corollary 1, we obtain a two-point reactive learning strategy that is (φ, λ)-autocratic.
Theorem 1 shows that if σX is (φ, λ)-autocratic, then there exist τ±
X ∈ ∆ (SX) satisfying Eq. 26
and maxsY∈SY φ τ−
X , sY ⩽ 0 ⩽ minsY∈SY φ τ+
X , sY . If the latter condition is an equality, then
Eq. 26 implies that maxsY∈SY φ τ+
X , sY ⩽ minsY∈SY φ τ−
X , sY , and thus φ τ+
X , sY = φ τ−
X , sY = 0 for all sY ∈ SY. Therefore, in this case, Eq. 26 holds with λ = 0, and the simple mixed action
τ+
X , played in every round, is (φ, λ)-autocratic for all λ ⩾ 0. (This statement is also true for τ−
X , if
it is distinct from τ+
X .) We refer to this unconditional play as a “trivial” autocratic strategy.
On the other hand, if maxsY∈SY φ τ−
X , sY < minsY∈SY φ τ+
X , sY , then Eq. 26 gives
λ ⩾ max
(
maxsY∈SY φ τ+
X , sY − minsY∈SY φ τ+
X , sY
maxsY∈SY φ τ+
X , sY − maxsY∈SY φ τ−
X , sY
, maxsY∈SY φ τ−
X , sY − minsY∈SY φ τ−
X , sY
minsY∈SY φ τ+
X , sY − minsY∈SY φ τ−
X , sY
)
= 1 − minsY∈SY φ τ+
X , sY − maxsY∈SY φ τ−
X , sY
max maxsY∈SY φ(τ+
X ,sY )−maxsY ∈SY φ(τ−
X ,sY),
minsY ∈SY φ(τ+
X ,sY )−minsY ∈SY φ(τ−
X ,sY)
. (45)
By Lemma 2 and Theorem 1, we immediately have the following result:
Proposition 4. There exists a (φ, λ)-autocratic strategy if and only if Φ+
X, Φ−
X ̸= {} and either (i)
Φ+
X ∩ Φ−
X ̸= {} or (ii) Φ+
X ∩ Φ−
X = {} and λ ⩾ λmin, where
λmin := 1 − sup (τ+
X ,τ−
X )∈Φ+
X ×Φ−
X
minsY∈SY φ τ+
X , sY − maxsY∈SY φ τ−
X , sY
max maxsY∈SY φ(τ+
X ,sY )−maxsY ∈SY φ(τ−
X ,sY),
minsY ∈SY φ(τ+
X ,sY )−minsY ∈SY φ(τ−
X ,sY)
. (46)
(Note that we use the notation {} to denote the empty set to avoid confusion with the null history, ∅.)
17

Remark 2. The minimum discount factor λmin has a natural interpretation: when λ < λmin, the game is too short on average (with expected duration 1/ (1 − λ) rounds) for the player to enforce the constraint. Enforcement requires the player to “correct” deviations from the target payoff relationship over time. If the game terminates too quickly, there is insufficient opportunity for these corrections to bring the expected payoff to the target. Note that λmin depends on the
“distance” between the extreme values of φ at τ+
X and τ−
X : larger swings between φ τ+
X , · and
φ τ−
X , · require more patience (larger λ) to balance out through the discounting mechanism.
Remark 3. With some slight modifications in its proof, Theorem 1 can be extended to the setting where SX and SY are compact sets over Rn and Rm, respectively, and φ is continuous, by invoking the Banach–Alaoglu theorem. More generally, with minimal changes, it can be shown that for SX and SY of any structure, and for any bounded function φ, reduction to short-memory autocratic strategies is still plausible under arbitrarily small extensions of the game length. Rigorously speaking, for any ε > 0 su-
ch that λ + ε < 1, every (φ, λ)-autocratic strategy can be replaced by a two-point reactive learning (φ, λ + ε)-autocratic strategy.
3.2 Additive objective functions and reactive strategies
Definition 5. A function φ : SX × SY → R is additive if there exist functions φX : SX → R and φY : SY → R with φ (sX, sY) = φX (sX) + φY (sY) for all sX ∈ SX and sY ∈ SY.
For additive objective functions, we can strengthen our results considerably. Theorem 1 guarantees that enforcement can be achieved with two-point reactive learning strategies. However, the additive structure, φ (sX, sY) = φX (sX) + φY (sY), allows us to take ψ = φX in the next-round correction condition. Here, we show that two-point reactive learning strategies can be reduced to even simpler reactive strategies that condition solely on the opponent’s last action, without tracking X’s own actions.
Theorem 2. If φ ≡ 0 is λ-enforceable by X and φ is additive, then φ ≡ 0 is λ-enforceable by X using a reactive strategy σX : SY → ∆ (SX).
Proof. Let sY ∈ SY be fixed and suppose that the opponent plays sY unconditionally in every
round. Let σtX [sY] ∞
t=1 ⊆ ∆ (SX) be a sequence for which ∑t∞=0 λt φ σtX [sY] , sY = 0 (making the
dependence on sY explicit). Consider the distribution, σX [sY], defined by
σX [sY] (·) := (1 − λ)
∞
∑
t=1
λt−1σtX [sY] (·) (47)
for each sX ∈ SX and sY ∈ SY. The sequence of measures, eσkX [sY] k⩾1, defined by
eσkX [sY] (·) := (1 − λ)
k
∑
t=1
λt−1σtX [sY] (·) , (48)
then converges in total variation to σX [sY] because
σX [sY] (·) − eσkX [sY] (·) = (1 − λ)
∞
∑
t=k+1
λt−1σtX [sY] (·)
18

⩽ (1 − λ)
∞
∑
t=k+1
λt−1
= λk, (49)
and thus σX [sY] − eσkX [sY] TV ⩽ λk → 0 as k → ∞. It follows, then, that for every sY ∈ SY,
0 = (1 − λ)
∞
∑
t=0
λt φ σtX [sY] , sY
= (1 − λ) φ σ0X, sY + (1 − λ)
∞
∑
t=1
λt φ σtX [sY] , sY
= (1 − λ) φ σ0X, sY + λ tli→m∞ φ eσtX [sY] , sY
= (1 − λ) φ σ0X, sY + λφ (σX [sY] , sY) , (50)
where the last equation is due to the boundedness of φ and the fact that the sequence eσkX [sY] k⩾1 converges to σX [sY] in total variation. Since φ (sX, sY) = φX (sX) + φY (sY), we have
φY (sY) = −λEsX∼σX[sY] [φX (sX)] − (1 − λ) EsX∼σ0X [φX (sX)] , (51)
which is the pointwise next-round correction condition for the reactive strategy σ0X, σX [sY] , giving the desired result.
Remark 4. Although our focus is on finite action spaces, this theorem readily extends to measurable spaces. Only minor additional justification is needed, such as the fact that for each sY ∈ SY, σX [sY] is a probability measure (which follows from the Vitali-Hahn-Saks Theorem [see 30]).
Remark 5. An important feature of the reactive strategy constructed in Theorem 2 is that it uses the same initial mixed action, σ0X, as the original (possibly longer-memory) autocratic strategy. This is crucial for the proof, which relies on taking a weighted average of the mixed actions along the trajectory induced by the original strategy when the opponent plays the same action, sY, repeatedly. The initial action anchors this averaging process, ensuring that the mean converges to the desired enf-
orcement property.
In fact, we can say slightly more about reactive strategies in this context:
Lemma 3. Suppose that λ ∈ [0, 1) and that τ±
X ∈ ∆ (SX) satisfy Eq. 26. If φ is additive, then there
exists a function p∗ : SY → [0, 1] such that, with the two-point reactive strategy
σ∗
X [sY] = p∗ [sY] τ+
X + (1 − p∗ [sY]) τ−
X , (52)
X can enforce φ ≡ K for any K ∈ φX τ−
X + maxsY∈SY φY (sY) , φX τ+
X + minsY∈SY φY (sY) .
Proof. Suppose that φ (sX, sY) = φX (sX) + φY (sY) for all sX ∈ SX and sY ∈ SY, and let ψ = φX. The generalized next-round correction condition is equivalent to
p∗ [p, sY] = K − pφ τ+
X , sY − (1 − p) φ τ−
X , sY
λ ψ τ+
X − ψ τ−
X
+ p − (1 − λ) p0
λ
19

= K − p φX τ+
X − φX τ−
X − φX τ−
X − φY (sY)
λ ψ τ+
X − ψ τ−
X
+ p − (1 − λ) p0
λ
= K − φX τ−
X − φY (sY)
λ φX τ+
X − φX τ−
X
− (1 − λ) p0
λ , (53)
which is independent of p. To ensure p∗ [sY] ∈ [0, 1] for all sY ∈ SY (dropping p), we require
K − φX τ−
X − minsY∈SY φY (sY)
(1 − λ) φX τ+
X − φX τ−
X
−λ
1 − λ ⩽ p0 ⩽ K − φX τ−
X − maxsY∈SY φY (sY)
(1 − λ) φX τ+
X − φX τ−
X
. (54)
Since K ∈ φX τ−
X + maxsY∈SY φY (sY) , φX τ+
X + minsY∈SY φY (sY) , we have the inequalities
K − φX τ−
X − minsY∈SY φY (sY)
(1 − λ) φX τ+
X − φX τ−
X
−λ
1 − λ ⩽ 1; (55a)
K − φX τ−
X − maxsY∈SY φY (sY)
(1 − λ) φX τ+
X − φX τ−
X
⩾ 0. (55b)
By Eq. 26, we have maxsY∈SY φY (sY) − minsY∈SY φY (sY) ⩽ λ φX τ+
X − φX τ−
X , which gives
K − φX τ−
X − minsY∈SY φY (sY)
(1 − λ) φX τ+
X − φX τ−
X
−λ
1 − λ ⩽ K − φX τ−
X − maxsY∈SY φY (sY)
(1 − λ) φX τ+
X − φX τ−
X
. (56)
Therefore, the range of acceptable values of p0 is the interval
"
max
(
K − φX τ−
X − minsY∈SY φY (sY)
(1 − λ) φX τ+
X − φX τ−
X
−λ
1 − λ,0
)
,
min
(
K − φX τ−
X − maxsY∈SY φY (sY)
(1 − λ) φX τ+
X − φX τ−
X
,1
)#
. (57)
Any p0 in this range translates into a valid response function, p∗.
Corollary 2. If φ ≡ 0 is λ-enforceable by X and φ is additive, then φ ≡ 0 is λ-enforceable by X using a two-point reactive strategy.
We further obtain a simplification of Proposition 4:
Proposition 5. Suppose φ is additive. Then, there exists a (φ, λ)-autocratic strategy if and only if Φ+
X, Φ−
X ̸= {} and either (i) φX is constant or (ii) φX is non-constant and λ ⩾ λmin, where
λmin = maxsY∈SY φY (sY) − minsY∈SY φY (sY)
maxsX∈SX φX (sX) − minsX∈SX φX (sX) . (58)
3.3 Infinite-horizon (undiscounted) games
Up until this point, our focus has been on discounted games, which terminate in finitely many rounds with probability one (λ < 1). Although this case is the most realistic from a modeling
20

perspective, we know from classical results that some linear payoff relationships are enforceable in undiscounted, infinite-horizon games. An example is tit-for-tat in the repeated prisoner’s dilemma, which ensures that πX = πY as λ → 1 (and only in the infinite-horizon limit). In this section, we consider this limit more generally. We assume that the undiscounted expectation of φ is Cesa`ro summable, meaning the limit
Tli→m∞
1
T+1
T
∑
t=0
EσX,σY φ stX, stY (59)
exists. Since both action spaces are finite, this limit exists whenever both behavioral strategies σX and σY are finite-memory. We begin with the undiscounted analog of Theorem 1:
Theorem 3. Suppose that σX : H → ∆ (SX) is a (φ, 1)-autocratic strategy of arbitrary memory. Then, there exists a two-point reactive learning strategy that is also (φ, 1)-autocratic.
The proof requires two technical lemmas that establish the existence of appropriate two-point support and the undiscounted analog of the generalized next-round correction condition.
Lemma 4. If φ ≡ 0 is enforceable with λmin = 1, then there exist τ±
X ∈ ∆ (SX) such that
max
sY ∈SY
φ τ+
X , sY > min
sY ∈SY
φ τ+
X , sY = 0 = max
sY ∈SY
φ τ−
X , sY > min
sY ∈SY
φ τ−
X , sY . (60)
Proof. Suppose φ ≡ 0 is enforceable in expectation by some behavioral strategy σX with initial
action σ0X and discount factor λ = 1. We first show that the sets Φ+
X and Φ−
X defined in Eq. 32 are non-empty. Suppose by contradiction that this fails. Then either minsY∈SY φ (τX, sY) < 0 for all τX ∈ ∆ (SX), or maxsY∈SY φ (τX, sY) > 0 for all τX ∈ ∆ (SX). Assume the first case holds (the second is analogous). Let a := maxτX∈∆(SX) minsY∈SY φ (τX, sY) < 0 and suppose that Y
plays stY := argminsY∈SY φ τtX, sY at each round t, where τtX is the mixed action generated by
σ0X, σX at time t. This implies (T + 1)−1 ∑tT=0 φ τtX, stY ⩽ a for every T ⩾ 0. Taking limits, we
obtain limT→∞ (T + 1)−1 ∑tT=0 φ τtX, stY ⩽ a < 0, contradicting the assumption that σX is (φ, 1)
autocratic. As a result, Φ+
X, Φ−
X ̸= {}. Next, suppose there exist τ+
X ∈ Φ+
X and τ−
X ∈ Φ−
X such
that minsY∈SY φ τ+
X , sY ⩾ 0 ⩾ maxsY∈SY φ τ−
X , sY , at least one of which is strict. Since no trivial
autocratic strategies exist, by Proposition 4 there exists λ∗ < 1 and a (φ, λ∗)-autocratic strategy, but this finding is a contradiction because λmin = 1.
Lemma 5. Suppose that Φ+
X, Φ−
X ̸= {}. Then, there exist a set MX ⊆ ∆ (SX), a (two-point)
response function σ∗
X : MX × SY → MX, and an enforcement potential Ψ : MX → R such that
φ (τX, sY) = Ψ (τX) − Ψ (σ∗
X [τX, sY]) (61)
for all τX ∈ MX and sY ∈ SY.
Proof. The proof parallels that of Lemma 2. Consider the response function p∗ from Eq. 29 with K = 0 and λ = 1, let ψ τ−
X = 0, and choose ψ τ+
X satisfying
ψ τ+
X ⩾ max max
sY ∈SY
φ τ+
X , sY , − min
sY ∈SY
φ τ−
X , sY . (62)
Then, assuming no unconditional strategies exist (otherwise Eq. 61 holds trivially), we deduce that ψ τ+
X − ψ τ−
X > 0, which ensures Im (p∗) ⊆ [0, 1]. Defining MX and Ψ as in Lemma 2 (with p0 now free in [0, 1]), we obtain Eq. 61.
21

Eq. 61 serves as the undiscounted generalized next-round correction condition, representing the limiting case of Eq. 12 as λ → 1. We now prove Theorem 3.
Proof of Theorem 3. Assume, without loss of generality, that no trivial strategies exist. We consider two cases. In the first case, if there exists a (φ, λ)-autocratic strategy for some λ ∈ [0, 1), then by the proof of Theorem 1, the separation sets Φ+
X and Φ−
X are non-empty. In the second case,
if no (φ, λ)-autocratic strategy exists for any λ ∈ [0, 1), then by Lemma 4 there exist τ±
X∈
∆ (SX) satisfying Eq. 60, which also implies Φ+
X, Φ−
X ̸= {}. In either case, Lemma 5 ensures that Eq. 61 holds. Following the proof of Proposition 1, for any behavioral strategy σY, we derive a sequence of marginalized distributions νtX
∞
t=0 over ∆ (SX) × SY. Telescoping the undiscounted
generalized next-round correction condition yields
1
T+1
T
∑
t=0
E(τX,sY)∼νtX [φ (τX, sY)] = 1
T + 1 E(τX,sY)∼ν0X [Ψ (τX )] − E(τX,sY)∼νT+1
X [Ψ (τX)] (63)
for every T ⩾ 0. By boundedness of Ψ and the dominated convergence theorem, the right-hand side of Eq. 63 converges to 0 as T → ∞.
Remark 6. It is important to highlight that, unlike the discounted case, the initial action σ0X plays no part in the enforceability of φ; any “suboptimal” initial choice will eventually be corrected as the stage game repeats itself infinitely many times. It plays a major role, however, in the conditioning structure of the response function, σ∗
X. If p∗ [p, sY] ∈ {0, 1}, then p ∈ {0, 1} and
sY ∈
n
argmaxsY∈SY φ τ−
X , sY , argminsY∈SY φ τ+
X , sY
o
. Inductively, we deduce that if p0 ∈ (0, 1),
then Im (p∗) ⊆ (0, 1). This essentially means that the Markov chain generated by σ0X, σ∗
X (and any behavioral strategy of Y) is ergodic. However, if X desires to enforce φ ≡ 0 via a simple reactive learning strategy, they can do so by choosing p0 = 0 or p0 = 1.
By Lemmas 4, 5 and Theorem 3, we obtain a version of Propositions 1-2 and 4 in the case where a payoff constraint is only enforceable in the undiscounted setting.
Proposition 6. A function φ : SX × SY → R is enforceable with λmin = 1 if and only if Φ+
X, Φ−
X ̸= {} and
Φ+
X = τX ∈ ∆ (SX) | max
sY ∈SY
φ (τX, sY) > min
sY ∈SY
φ (τX, sY) = 0 ; (64)
Φ−
X = τX ∈ ∆ (SX) | min
sY ∈SY
φ (τX, sY) < max
sY ∈SY
φ (τX, sY) = 0 . (65)
Proposition 7. A function φ : SX × SY → R is enforceable with λmin = 1 if and only if there exist
a set MX ⊆ ∆ (SX), an initial action σ0X ∈ MX, a response function σ∗
X : MX × SY → MX, and
an enforcement potential Ψ : MX → R such that Eq. 61 holds for all τX ∈ MX and sY ∈ SY, and the generalized next-round correction condition (Eq. 12) never holds for any λ < 1.
The following result extends [11, Proposition 6]. In simple terms, a player’s control over the long-run payoff outcome is not altered if the game is arbitrarily extended.
Proposition 8. Fix φ : SX × SY → R and λ ∈ [0, 1]. If there exists a (φ, λ)-autocratic strategy,
then there exists a (two-point reactive learning) (φ, λ∗)-autocratic strategy for any λ∗ ∈ [λ, 1].
22

Proof. If λ = 0 or 1, then we have nothing to show. We can thus assume that λ ∈ (0, 1). From Proposition 4, for any 1 > λ∗ ⩾ λ there exists a two-point reactive learning (φ, λ∗)-autocratic strategy. Suppose λ∗ = 1. As in the first case in the proof of Theorem 3, there exist mixed actions
τ+
X ∈ Φ+
X, τ−
X ∈ Φ−
X such that maxsY∈SY φ τ+
X , sY > minsY∈SY φ τ−
X , sY . Therefore, by the same result, there exists a two-point reactive learning strategy that is (φ, 1)-autocratic.
4 Properties of payoff relationships and autocratic strategies
Having established that any enforceable payoff relationship can be implemented using two-point reactive learning strategies (Theorem 1), we now investigate the computational and structural properties of autocratic strategies. We show that verifying enforceability and computing optimal strategies can be accomplished in polynomial time using linear programming. We also establish convexity properties that reveal favorable geometric structure in the space of enforceable relations.
4.1 Enforceable relationships and the interval of enforceability
While the generalized next-round correction condition provides a characterization of autocratic strategies, verifying it directly can be challenging in practice, as it requires finding an appropriate map Ψ on the reachable set, MX. In this section, we provide a simple, computationally tractable criterion for determining enforceability. The key observation is that enforceability depends only on whether an “interval of enforceability” contains zero, which can be checked by solving two saddle point p-
roblems: minτX∈∆(SX) maxsY∈SY φ (τX, sY) and maxτX∈∆(SX) minsY∈SY φ (τX, sY).
Definition 6. For a function φ : SX × SY → R, the interval of enforceability is
J (φ) := min
τX∈∆(SX) max
sY ∈SY
φ (τX, sY) , max
τX∈∆(SX) min
sY ∈SY
φ (τX, sY) . (66)
Of course, J (φ) ̸= {} if minτX∈∆(SX) maxsY∈SY φ (τX, sY) ⩽ maxτX∈∆(SX) minsY∈SY φ (τX, sY).
The interval J (φ) encodes geometric information about the separability of payoff values. Since the functions maxsY∈SY φ (·, sY) and minsY∈SY φ (·, sY) are continuous over the compact set ∆ (SX), the extrema defining J (φ) are always attained. The following characterization connects enforceability to the condition 0 ∈ J (φ), which has a natural interpretation: player X can enforce φ ≡ 0 if and only if she can find mixed actions that “sandwich” zero between the worst and best values of φ across opp-
onent responses.
Corollary 3. Consider a function φ : SX × SY → R. The following are equivalent:
(a) φ ≡ 0 is enforceable;
(b) Φ+
X, Φ−
X ̸= {};
(c) 0 ∈ J (φ).
23

4.2 Computational tractability of enforceable relationships
Suppose that SX = {U, D}, SY = {L, R}, and that
φ=
LR
U 41
D −1 0
!
. (67)
Let τ+
X be the mixed action that plays U and D uniformly at random, and let τ−
X be the pure
action D. Then, φ τ+
X , L = 3/2, φ τ+
X , R = 1/2, φ τ−
X , L = −1, and φ τ−
X , R = 0, from
which we see that τ+
X ∈ Φ+
X and τ−
X ∈ Φ−
X , and the two inequalities of Eq. 26 hold with λ = 2/3
(in fact, they are both equalities). However, if we set τ+
X to be U and τ−
X to be D, then the first of these two inequalities fails to hold. In fact, the minimum λ for which they hold when restricted to pure actions is λ = 3/4. Therefore, randomizing between two mixed actions, τ+
X and τ−
X, might be preferable to randomizing between two pure actions, for impatient players. However, under somewhat restrictive conditions, we can guarantee that λmin is attained for
pure actions, τ±
X ∈ ∆ (SX).
Lemma 6. Suppose SX = {U, D}, SY = {L, R}, and let φ : SX × SY → R satisfy φ (U, L) ⩾ φ (U, R) and φ (D, L) ⩾ φ (D, R). If φ ≡ 0 is enforceable, then λmin is attained at pure actions.
Proof. Suppose that τ+
X ∈ Φ+
X and τ−
X ∈ Φ−
X are any two mixed actions satisfying the inequalities
of Eq. 26 for some λ ∈ [0, 1). Without a loss of generality, we may assume that δU ∈ Φ+
X and
δD ∈ Φ−
X because φ τ+
X , L ⩾ 0 means that there must be a pure action s+
X ∈ {U, D} in the
support of τ+
X such that φ s+
X , L ⩾ 0, and similarly for τ−
X . Since SX has only two options,
τ+
X and τ−
X can be represented by the probabilities of playing U, denoted p and q, respectively.
Since maxsY∈SY φ τ−
X , sY is a non-decreasing function of q, we see that Eq. 26a holds when τ−
X is replaced by δD. This first inequality, Eq. 26a, then says
φ τ+
X , R ⩾ (1 − λ) φ τ+
X , L + λφ (D, L) . (68)
This inequality is linear in p, so it must also hold when p = 0 or when p = 1. If it holds when p = 0, then φ (D, R) ⩾ φ (D, L). Since it must be true that φ (D, L) = φ (D, R) or φ (D, L) > φ (D, R), we see at once that the inequality holds for p = 1 and thus for the pair (U, R). That Eq. 26b holds for the pair (U, R) is analogous, this time increasing p to 1 first and then q to 0.
To see that Lemma 6 does not extend to larger action spaces for X, consider the function
φ=

 
LR
U −2 − 2
5
M2 5
D1 2


 . (69)
For pure action candidates, we must have s+
X ∈ {M, D} and s−
X = U. Suppose that λ = 1/2, and
let τ+
X = (3/10) δM + (7/10) δD and τ−
X = U. We then calculate that
13
10 = min
sY ∈SY
φ τ+
X , sY ⩾ (1 − λ) max
sY ∈SY
φ τ+
X , sY + λ max
sY ∈SY
φ τ−
X , sY = 25
20 ; (70a)
24

−2
5 = max
sY ∈SY
φ τ−
X , sY ⩽ λ min
sY ∈SY
φ τ+
X , sY + (1 − λ) min
sY ∈SY
φ τ−
X , sY = − 7
20 . (70b)
However, if we consider the pure-action candidates for s+
X and s−
X for λ = 1/2, then, with s+
X=M
and s−
X = U, the first inequality is
2 = min
sY ∈SY
φ s+
X , sY ⩾ (1 − λ) max
sY ∈SY
φ s+
X , sY + λ max
sY ∈SY
φ s−
X , sY = 23
10 , (71)
which does not hold. If s+
X = D and s−
X = U, then the second inequality is
−2
5 = max
sY ∈SY
φ τ−
X , sY ⩽ λ min
sY ∈SY
φ τ+
X , sY + (1 − λ) min
sY ∈SY
φ τ−
X , sY = − 1
2 , (72)
which also does not hold. These examples demonstrate that mixed actions can achieve better (smaller) values of λmin than pure actions, even in small games. This motivates the need for efficient algorithms that search over the full space ∆ (SX) rather than just pure actions. We now show that despite this complexity, both the verification of enforceability and the computation of optimal autocratic strategies are tractable via linear programming. To specify a two-point reactive learning strategy expl-
icitly, we need only provide a small number of parameters. For a strategy σ0X, σ∗
X defined by transition probabilities (p0, p∗) (as in Lemmas 2 and 5), we define its base to be the finite set of probabilities that fully characterize the strategy.
Definition 7. Consider a two-point reactive learning strategy σ0X, σ∗
X defined by (p0, p∗) of either
Lemma 2 or Lemma 5. The set {p0} ∪ {p∗ [0, sY] , p∗ [1, sY]}sY∈SY is called a “base” of σ0X, σ∗
X.
The notion of a base arises from the fact that
p∗ [q, sY] = qp∗ [1, sY] + (1 − q) p∗ [0, sY] (73)
for all q ∈ [0, 1] and sY ∈ SY.
Proposition 9. Consider a function φ : SX × SY → R. The problem of identifying whether φ ≡ 0 is enforceable can be solved in polynomial time. In addition, if φ ≡ 0 is enforceable, then the minimum discount factor λmin and a base of some two-point reactive learning (φ, λmin)-autocratic strategy can both be computed in polynomial time.
Proof. Let SX := {sX,1, . . . , sX,m} and SY := {sY,1, . . . , sY,n}. We can think of φ as an m × n matrix
with entries φij = φ sX,i, sY,j . Recall that φ ≡ 0 is enforceable if and only if Φ+
X, Φ−
X ̸= {}.
Φ+
X ̸= {} is equivalent to φ⊺x ⩾ 0 for x ∈ Rm+ and ∑im=1 xi = 1, while Φ−
X ̸= {} is equivalent to
φ⊺x ⩽ 0 for x ∈ Rm+ and ∑im=1 xi = 1, both of which can be solved in polynomial time. In addition,
φ ≡ 0 is 0-enforceable if and only if the linear system φ⊺x = 0 with x ∈ Rm+ and ∑im=1 xi = 1 is feasible, which is also a computationally tractable task. Suppose now that φ ≡ 0 is enforceable. If φ is 0-enforceable, then we can compute the trivial mixed action in polynomial time as above. Therefore, we may assume that φ ≡ 0 is not 0-enforceable. As Φ+
X, Φ−
X ̸= {}, the supremum problem in Eq. 46 is well-defined and its value is attained. In fact, by standard max-min techniques and the Charnes-Cooper transformation, the supremum problem can be equivalently split into the following linear programming forms:
25

P1
λmin
maximize z+ − w−
subject to z+ ⩽ ∑im=1 x+
i φij j = 1, . . . , n
w+ ⩾ ∑im=1 x+
i φij j = 1, . . . , n
z− ⩽ ∑im=1 x−
i φij j = 1, . . . , n
w− ⩾ ∑im=1 x−
i φij j = 1, . . . , n
x±
i ⩾ 0 i = 1, . . . , m
∑im=1 x±
i =t
w+ − w− = 1
z+ − z− ⩽ 1
z+ ⩾ 0
w− ⩽ 0
t⩾0
P2
λmin
maximize z+ − w−
subject to z+ ⩽ ∑im=1 x+
i φij j = 1, . . . , n
w+ ⩾ ∑im=1 x+
i φij j = 1, . . . , n
z− ⩽ ∑im=1 x−
i φij j = 1, . . . , n
w− ⩾ ∑im=1 x−
i φij j = 1, . . . , n
x±
i ⩾ 0 i = 1, . . . , m
∑im=1 x±
i =t
w+ − w− ⩽ 1
z+ − z− = 1
z+ ⩾ 0
w− ⩽ 0
t⩾0
Note that as λmin ∈ (0, 1], we can always find an optimal solution for P1
λmin and P1
λmin
with t1, t2 > 0. We can then set τ1,±
X := x1,±/t1 and τ2,±
X := x2,±/t2 to retrieve the desired mixed
actions in Φ+
X and Φ−
X , and we set λmin = 1 − max z1,+ − w1,−, z2,+ − w2,− . The pair τi,±
X of actions that corresponds to the largest optimal value of the two linear programs will then lead to a two-point reactive learning (φ, λmin)-autocratic strategy σ0X, σ∗
X , as seen from Theorem 1.
Finally, in order to identify a base of σ0X, σ∗
X , we need only compute at most 2n + 1 values, as indicated by Eq. 31, Eq. 57 and Eq. 73.
26

4.3 Convexity of autocratic strategies and payoff relationships
The space of enforceable payoff relationships exhibits several convexity properties that facilitate the construction of new autocratic strategies from known ones. These properties have both theoretical and practical significance since they reveal geometric structure in the space of enforceable constraints and provide methods for “interpolating” between different autocratic strategies. Throughout this subsection, we focus on the discounted case (λ ∈ [0, 1)) for simplicity, though analogous results -
hold in the limit λ → 1. Consider two autocratic strategies, σ0X, σ∗
X and eσ0X, eσ∗
X that enforce φ ≡ 0 and φe ≡ 0,
respectively. Assume these are generated by mixed actions τ±
X , τe±
X ∈ ∆ (SX) and transition prob
abilities (p0, p∗) and (pe0, pe∗), as in Lemma 2, and that they share a common discount factor λ ∈ [0, 1) (which can always be arranged by Proposition 8). For q ∈ [0, 1], we investigate when φq := (1 − q) φ + qφe ≡ 0 is enforceable and how to construct strategies that enforce it.
Proposition 10. Consider some q ∈ [0, 1] and suppose τ±
X = τe±
X . Then, there exists a two-point reactive learning strategy that is φq, λq -autocratic for some λq ∈ [0, 1).
Proof. Consider the sets Φq± for the function φq as in Eq. 32. Then τ±
X ∈ Φq±, due to τ±
X ∈ Φ±
i for
i = 1, 2, where Φ±
i are also defined as in Eq. 32. The result follows from Proposition 4.
Proposition 10 does not guarantee that we can enforce a convex combination of φ and φe by taking a convex combination of the probabilistic mechanisms p∗
1 and p∗
2, unless the latter are identical (see Fig. 1). However, we can give a sufficient condition for this property:
Proposition 11. Consider some q ∈ [0, 1] and suppose τ±
X = τe±
X . If
min
sY ∈SY
φ τ+
X , sY − max
sY ∈SY
φ τ−
X , sY = min
sY ∈SY
φe τ+
X , sY − max
sY ∈SY
φe τ−
X , sY , (74)
then the reactive learning strategy generated by the initial action qp0 + (1 − q) pe0, with the re
sponse function qp∗ + (1 − q) pe∗ randomizing between τ±
X , is φq, λ -autocratic.
Proof. The assumption implies that ψ τ±
X = ψe τ±
X , as these are defined in the denominators
of p∗, pe∗ in the proof of Lemma 2. Moreover, for q ∈ [0, 1], the response function qp∗ + (1 − q) pe∗ yields valid probabilities with initial action qp0 + (1 − q) pe0. The resulting reactive learning strat
egy, (qp0 + (1 − q) pe0, qp∗ + (1 − q) pe∗), and the function Ψ := ψ1 τ+
X − ψ1 τ−
X satisfy the generalized next-round correction condition with discount factor λ, and the result then follows from Proposition 1.
In the donation game, ALLD enforces the line cuX = −buY, while ALLC enforces the line cuX = −buY + b2 − c2. It is easily verified that the condition of Proposition 11 holds. As a result, an agent can enforce all lines of slope −b/c intersecting the feasible region. In the donation game in particular, the convex hull of all such feasible lines is equal to the entire payoff region (see Fig. 2).
4.4 Equalizing and self-equalizing strategies for generic payoff functions
X can set her own payoff to some constant, K, if uX − K ≡ 0 is enforceable. Assuming that the aim of player X is setting her own score and that no trivial strategies exist, we deduce from
27

Figure 2: Pencil of enforceable lines in the donation game. The boundary lines cuX = −buY (enforced by ALLD) and
cuX = −buY + b2 − c2 (enforced by ALLC) are shown, along with intermediate parallel lines that can be enforced by convex combinations of these strategies. By Proposition 11, an agent can enforce any line in this family by appropriately mixing between punishment and forgiveness. The convex hull of all such enforceable lines equals the entire payoff region, demonstrating complete unilateral control over expected payoff outcomes in the repeated donation game.
28

Corollary 3 that she can set her payoff equal to K if and only if
K ∈ min
τX∈∆(SX) max
sY ∈SY
uX (τX, sY) , max
τX∈∆(SX) min
sY ∈SY
uX (τX, sY) . (75)
Note that the maximum payoff value that can be set by X is maxτX∈∆(SX) minsY∈SY uX (τX, sY). This results in a simple relationship between an agent’s control of their payoff in a repeated game and that of their optimal return in a one-shot game: an agent can achieve their (average) security level when the enforceability interval Eq. 75 is well-defined. Accordingly, suppose player X has an incentive to set her opponent’s expected payoff. This case corresponds to enforcing uY − K ≡ 0. In similar fas-
hion to the above, it can be shown that if she desires to “punish” her opponent in the worst possible way, the best she can hope for is setting Y’s payoff to minτX∈∆(SX) maxsY∈SY uY (τX, sY), which by the minimax theorem is exactly equal to maxsY∈∆(SY) minτX∈∆(SX) uY (τX, sY). This is precisely the security level of the co-player.
4.5 Symmetric objective functions
Next, we prove that an enforceable symmetric relationship is either trivially enforceable or enforceable with λmin = 1. In other words, if X’s aim is to control a symmetric payoff region, then she either needs a memory-less plan or an “infinite” amount of patience.
Proposition 12. Suppose that SX = SY and that φ : SX × SY → R is symmetric. Then, φ ≡ 0 is enforceable if and only if there exists a trivial strategy or maxsX∈∆(SX) minsY∈∆(SY) φ (sX, sY) = 0.
Proof. Suppose that φ is not 0-enforceable. We know maxsX∈∆(SX) minsY∈∆(SY) φ (sX, sY) = 0 implies that J (φ) = {0} by the minimax theorem and the symmetry of φ, thus φ ≡ 0 is enforceable with λmin = 1 by Proposition 6. Conversely, let φ be enforceable but not 0-enforceable. Then, it is λ-enforceable with λ ∈ (0, 1] and J (φ) is well-defined and it contains 0 due to Corollary 3. However, the symmetry of φ and the minimax theorem imply that J (φ) has to be trivial, i.e., the assumption of Propositi-
on 6 holds.
It is important to note that Proposition 12 also holds for skew-symmetric relations. This follows from the fact that φ ≡ 0 if and only if −φ ≡ 0. We therefore deduce that TFT can be an autocratic strategy and enforce fair payoff relationships for symmetric games like IPD, only in the undiscounted setting.
4.6 “Zero-sum” strategies for generic payoff functions
Here, we call “zero-sum” autocratic strategies all autocratic plans of X that can enforce uX = −uY in expectation. Corollary 3 directly yields the following:
Proposition 13. There exists a zero-sum autocratic strategy for player X if and only if there exist
τ±
X ∈ ∆ (SX) such that uX τ+
X , sY ⩾ −uY τ+
X , sY and uX τ−
X , sY ⩽ −uY τ−
X , sY for all sY ∈ SY.
5 Applications and examples
We now apply our theoretical framework to four variants of a classical social dilemma: the prisoner’s dilemma, a nonlinear donation game, an asymmetric donation game, and the hawkdove game. Throughout, we focus on linear payoff relationships relative to a reference line, such
29

that the desired relationship is either exactly the reference line or else intersects it in a unique point. For example, the line κ − πX = χ (κ − πY) intersects the reference line πX = πY at (κ, κ) provided χ ̸= 1.
5.1 Prisoner’s dilemma
In the prisoner’s dilemma, the payoff matrix of Eq. 1 satisfies T > R > P > S. We impose the standard constraint of 2P < S + T < 2R as well, which means that the the mean payoff for alternating cooperation and defection lies between the payoffs for mutual defection and mutual cooperation. This condition is not strictly necessary, but we use it to simplify the exposition. With the objective function φ (sX, sY) = κ − uX (sX, sY) − χ (κ − uY (sX, sY)), we have
φ (C, C) = (χ − 1) (R − κ) ; (76a)
φ (C, D) = (κ − S) + χ (T − κ) ; (76b)
φ (D, C) = − (T − κ) − χ (κ − S) ; (76c)
φ (D, D) = − (χ − 1) (κ − P) . (76d)
We first make a few remarks on viable values of κ and χ. If χ = 1, then κ is irrelevant since it cancels out in the definition of φ. If χ ̸= 1, then we must have κ ∈ [P, R] for an autocratic strategy to exist; otherwise, φ (C, C) and φ (D, D) have the same sign, which means that Φ+
X and
Φ−
X cannot simultaneously be non-empty (by Proposition 4). If χ < 1 and κ ∈ [P, R], then for Φ+
X
and Φ−
X to both be non-empty, we must have [11]
χ ⩽ min − T − κ
κ − S,−κ − S
T − κ . (77)
5.1.1 Trivial autocratic strategies
In this game, a trivial autocratic strategy is a value p ∈ [0, 1] such that φ (p, C) = φ (p, D) = 0. For every p ∈ [0, 1], we can simply solve for κ and χ in these equations to obtain
κ = P + p (S + T − 2P) + p2 (R − S − T + P) ; (78a)
χ = T − P + p (R − S − T + P)
S − P + p (R − S − T + P) . (78b)
For this pair (κ, χ), playing C with probability p in every round is (φ, 0)-autocratic.
5.1.2 Non-trivial autocratic strategies
We now assume that we have already classified trivial autocratic strategies and we are in the situation in which φ ≡ 0 is not 0-enforceable. Assuming (κ, χ) is a viable pair, we see that δC ∈ Φ+
X and δD ∈ Φ−
X when χ ⩾ 1, and δD ∈ Φ+
X and δC ∈ Φ−
X when χ < 1. In the non-additive
prisoner’s dilemma, where R − T ̸= S − P, we cannot guarantee that the minimizer τ+
X , τ−
X for λmin is attained in pure actions. By Lemma 6, we can restrict the search to pairs of pure actions provided that the differences
φ (C, C) − φ (C, D) = −χ (T − R) − (R − S) ; (79a)
30

φ (D, C) − φ (D, D) = −χ (P − S) − (T − P) (79b)
both have the same sign. For χ < 1, this condition requires
χ ⩽ min − R − S
T − R,−T − P
P − S = min
κ∈[P,R] min − T − κ
κ − S,−κ − S
T − κ (80)
since 2P < S + T < 2R. In particular, for any (κ, χ) with κ ∈ [P, R] and
min − R − S
T − R,−T − P
P − S < χ ⩽ min − T − κ
κ − S,−κ − S
T − κ , (81)
we resort to Proposition 9 to calculate λmin. For all other viable values of (κ, χ), we can use Proposition 4, which gives a (φ, λ)-autocratic strategy if and only if λ ⩾ λmin, where
λmin =

       
       
1 − minsY∈SY φ (C, sY) − maxsY∈SY φ (D, sY)
max
nmaxsY ∈SY φ(C,sY )−maxsY ∈SY φ(D,sY ),
minsY ∈SY φ(C,sY )−minsY ∈SY φ(D,sY )
o χ ⩾ 1,
1 − minsY∈SY φ (D, sY) − maxsY∈SY φ (C, sY)
max
nmaxsY ∈SY φ(D,sY )−maxsY ∈SY φ(C,sY ),
minsY ∈SY φ(D,sY )−minsY ∈SY φ(C,sY )
o χ ⩽ min − R − S
T − R,−T − P
P−S .
(82)
If χ = 1, then κ is irrelevant and λmin = 1. If χ > 1 and κ ∈ [P, R], then φ (p, D) > φ (p, C) for all p ∈ [0, 1], so Eq. 82 reduces to
λmin = 1 − φ (C, C) − φ (D, D)
max {φ (C, D) − φ (D, D) , φ (C, C) − φ (D, C)}
= 1 − (χ − 1) (R − P)
max {−S + χT − (χ − 1) P, (χ − 1) R + T − χS} . (83)
Since χ > 1, we see that φ (C, D) − φ (D, D) ⩾ φ (C, C) − φ (D, C) if and only if S + T ⩾ R + P. Therefore, we have
λmin =

    
    
1 − (χ − 1) (R − P)
−S + χT − (χ − 1) P S + T ⩾ R + P,
1 − (χ − 1) (R − P)
(χ − 1) R − χS + T S + T < R + P.
(84)
Finally, if χ ⩽ min {− (R − S) / (T − R) , − (T − P) / (P − S)} and κ ∈ [P, R], then Eq. 82 gives
λmin = 1 − φ (D, D) − φ (C, C)
max {φ (D, C) − φ (C, C) , φ (D, D) − φ (C, D)}
= 1 − (1 − χ) (R − P)
max {(1 − χ) R − T + χS, S − χT − (1 − χ) P} . (85)
31

Figure 3: Heat map on enforceability of the linear payoff relationship φ = κ − uX (sX, sY) − χ (κ − uY (sX, sY)) ≡ 0 for all values κ, χ ∈ R, for the repeated prisoner’s dilemma with (R, S, T, P) = (3, 0, 5, 1). θ is the angle between the payoff relationship (green) and the reference line (dashed), and r represents the fraction (red) of the reference line made up by the intersection point. The region enclosed by the white dashed line is the set of (r, θ) for which at least
one of τ+
X and τ−
X is non-pure in the optimizer for λmin (Eq. 46). For this particular game, we have κ = P + r (R − P)
and χ = tan (θ + π/4).
Given the upper bound on χ, we then see that
λmin =

    
    
1 − (1 − χ) (R − P)
S − χT − (1 − χ) P S + T < R + P,
1 − (1 − χ) (R − P)
(1 − χ) R − T + χS S + T ⩾ R + P.
(86)
Of course, in all cases, if λmin > 1, then there exists no strategy enforcing φ ≡ 0 for a repeated game with discounting, since the discount factor represents a probability. For the standard (nonadditive) payoff parameters of a prisoner’s dilemma (R = 3, S = 0, T = 5, and P = 1), Fig. 3 summarizes the enforceable lines.
5.2 Nonlinear donation game
The donation game has a relatively simple structure and has been studied extensively in the context of ZD strategies [6, 10, 31]. A slightly more realistic social dilemma occurs when the agents have multiple choices when it comes to paying up a cost and gaining a benefit. For
32

Figure 4: Enforceability of linear payoff relationships in the three-action nonlinear donation game with parameters b1 = 3, c1 = 1, b2 = 4, c2 = 2.5 (satisfying b2 − c2 < b1 − c1). The heatmap shows the minimum discount factor λmin required to enforce φ = κ − uX − χ (κ − uY) ≡ 0 across different values of κ and χ. Due to the game’s additive structure, any enforceable relationship can be implemented using a two-point reactive strategy, significantly simplifying the strategy space compared to gener-
al memory-one approaches.
simplicity, consider the three-action extension of the donation game, with payoff matrix

 
C1 C2 D
C1 b1 − c1, b1 − c1 b2 − c1, b1 − c2 −c1, b1
C2 b1 − c2, b2 − c1 b2 − c2, b2 − c2 −c2, b2
D b1, 0 b2, 0 0, 0


. (87)
Here, we assume that 0 < c1 < c2, 0 < b1 < b2, c1 < b1, and c2 < b2, but that b2 − c2 < b1 − c1. In other words, playing C2 is more costly, but more beneficial than playing C1. Yet, when both players choose the same level, mutual “C1” strictly Pareto-dominates mutual “C2.” The game’s payoff structure is additive: for each action profile, we can write uX (sX, sY) = φX (sX) + φY (sY). By symmetry, uY is also additive. Consequently, for linear payoff relationships φ = κ − uX − χ (κ − uY), the functio-
n φ inherits this additive structure. Since this game is additive and φ is linear, Theorem 2 tells us that any enforceable payoff relationship can be implemented using a reactive strategy that conditions solely on the opponent’s most recent action. Moreover, by Lemma 3, enforcement can be achieved using a two-point reactive strategy that mixes between two fixed distributions based on the opponent’s last action. The presence of three actions introduces additional strategic complexity compared to th-
e standard two-action donation game. While mutual cooperation at level C1 yields the Paretoefficient outcome (b1 − c1, b1 − c1), players face a tension between contributing at the higher level
33

C2 (which benefits the opponent more) and defecting entirely. This structure creates richer possibilities for autocratic strategies, as player X can condition their response not just on whether Y cooperated, but also on the level of cooperation chosen. Fig. 4 illustrates that the enforceability landscape extends naturally from the two-action case, with the minimum discount factor varying smoothly across the parameter space (κ, χ).
5.3 Fairness and equality in asymmetric games
In symmetric games like the standard prisoner’s dilemma, “fair” strategies enforcing φ = uX − uY are well-studied [6], with TFT being the canonical example. And we have seen that payoff equality can be enforced in expectation if and only if λ → 1 (Proposition 12). However, the distinction between equality and “fairness” becomes crucial in asymmetric social dilemmas, where two agents might have different abilities or resources. Consider the asymmetric donation game with payoff matrix
CD
C bY − cX, bX − cY −cX, bX
D bY, −cY 0, 0
!
, (88)
where bX > cX > 0 and bY > cY > 0. In other words, as cooperators, X pays cX to donate bX and Y pays cY to donate bY. As defectors, they both pay nothing and donate nothing. In this game, the natural reference line is not πX = πY but rather the line through (0, 0) and (bY − cX, bX − cY) since this represents the line between payoffs for mutual defection and payoffs for mutual cooperation. A strategy is “fair” if it enforces a payoff relationship along this reference line, reflecting proportional s-
haring that accounts for the asymmetric costs and benefits. In contrast, a strategy emphasizing equality enforces πX = πY regardless of the players’ differing contributions. Like the standard donation game, this asymmetric variant is additive. By Theorem 2, any enforceable payoff relationship can be implemented using a reactive strategy. The key distinction from symmetric games emerges when comparing fairness and equality: while TFT enforces equality in the symmetric donation game (where bX = bY a-
nd cX = cY), in the asymmetric case these two objectives diverge. Fair strategies that respect the natural reference line require λ → 1, making this constraint practically infeasible in finite-horizon interactions. By contrast, enforcing equality can be achieved with smaller discount factors, as shown in Fig. 5. This illustrates a fundamental principle: in asymmetric settings, unilateral enforcement of fair outcomes (proportional to players’ contributions), is significantly more demanding than enf-
orcement of equal outcomes.
5.4 Hawk-dove game: a “weak” social dilemma
Finally, we consider a weak social dilemma [32] known as the “hawk-dove” [33] (or “snowdrift” [34, 35]) game. The toy narrative behind this game is that there is an aggressive type (hawk) and a peaceful type (dove), and there is a common resource of value V for which two individuals compete. When two doves meet, they share the resource, each receiving V/2. When a hawk meets a dove, the hawk takes the resource and leaves nothing for the dove. However, when two
34

Figure 5: Enforceability in the asymmetric donation game with bX = 3, cX = 1, bY = 2, and cY = 1. The heatmap displays the minimum discount factor λmin for enforcing φ = κ − uX − χ (κ − uY) ≡ 0. The natural reference line (indicated by the dashed line in the payoff space) connects mutual defection (0, 0) to mutual cooperation (bY − cX, bX − cY), reflecting the asymmetric costs and benefits. Strategies enforcing equality (πX = πY, corresponding to χ = 1) require λ → 1, while “fair” strategies that-
 enforce proportional sharing along the reference line are more readily achievable.
35

Figure 6: Heat map on enforceability of the linear payoff relationship φ = κ − uX (sX, sY) − χ (κ − uY (sX, sY)) ≡ 0 for all values κ, χ ∈ R, for the repeated hawk-dove game with (R, S, T, P) = (−1, 2, 0, 1). θ is the angle between the payoff relationship (green) and the reference line (dashed), and r represents the fraction (red) of the reference line made up by the intersection point. The region enclosed by the white dashed line is the set of (r, θ) for which at least
one of τ+
X and τ−
X is non-pure in the optimizer for λmin (Eq. 46). For this game, we have κ = P + r (R − P) and
χ = tan (θ + π/4).
hawks meet, they fight and incur a cost that effectively lowers the value of the resource by C > V, resulting in (V − C) /2 to each. Fig. 6 shows which linear relationships are enforceable in this game, using parameters V = 2 and C = 4 as examples. Here, like in the non-additive prisoner’s dilemma, we observe regions for which λmin can be attained only when at least one of the two mixed actions in a two-point reactive learning strategy is non-pure.
6 Discussion
Our results establish a complete characterization of enforceable payoff relationships in discounted repeated games. The main theoretical contribution answers a question about the role of strategic complexity: extending memory beyond a simple reactive learning structure provides no additional power for enforcing payoff constraints. Any payoff relationship that can be enforced by a strategy of arbitrary memory can be implemented using a two-point reactive learning strategy. This universality result -
demonstrates that the space of reactive learning strategies captures all possible enforceable constraints, regardless of the opponent’s strategic sophistication. One consequence is that a search for autocratic strategies need only consider the computationally tractable space of reactive learning strategies, rather than the vast and intractable space of behavioral strategies. Our constructive characterization provides explicit formulas for both
36

verifying enforceability and computing the minimum discount factor required. For arbitrary functions, φ, these computations can be performed in polynomial time using linear programming. The computational tractability of our characterization stands in stark contrast to the general intractability of analyzing finite-memory strategies. For memory-m strategies in games with k actions per player, the strategy space has dimension km+1, making exhaustive analysis infeasible even for modest values of m a-
nd k [27]. The reduction to two-point reactive learning strategies eliminates this exponential dependence on memory length, reducing the problem to a fixed-dimensional space determined only by the number of actions in the stage game. These findings resolve several open questions in the literature on zero-determinant strategies. First, we provide a definitive answer to the question raised by Hilbe et al. [14] regarding the existence of autocratic strategies in discounted games. Our necessary and su-
fficient conditions establish precisely when a payoff relationship is enforceable, and our formulas for the minimum discount factor extend the existence results of Hilbe et al. [11] by providing exact thresholds. Second, we demonstrate that the initial action plays a crucial role in determining enforceability in discounted games, contrasting with undiscounted settings where initial conditions are often irrelevant. This distinction highlights fundamental differences between discounted and undiscoun-
ted repeated games that have not been fully appreciated in prior work. The structural properties we establish (e.g., convexity of enforceable relationships, the dichotomy for symmetric relationships, and the polynomial-time computability) reveal that the space of autocratic strategies has favorable geometric and algorithmic properties. The convexity result implies that if two payoff relationships are enforceable, any convex combination is also enforceable (under appropriate conditions on the under-
lying strategies), providing a way to construct new autocratic strategies from known ones. The dichotomy for symmetric relationships shows that fairness constraints are fundamentally incompatible with discounting: symmetric relationships are either trivially enforceable or require the limiting case of an infinite horizon. This explains why strategies like tit-for-tat, which enforce equal payoffs in the prisoner’s dilemma, lose this property in any discounted setting. Although we have framed our re-
sults primarily for two-player games, the framework extends naturally to multiplayer settings where coalitions of players coordinate to enforce payoff constraints on the larger group. A coalition I ⊆ {1, . . . , N} can use a correlated strategy to enforce a linear relationship ∑iN=1 αiπi + α0 = 0 on the expected payoffs of all players. Our characterization carries over to this setting: any enforceable coalitional constraint can be implemented using a reactive learning strategy for the coalition th-
at conditions on the previous actions of players outside the coalition and the coalition’s own previous mixed action. In fact, one need only replace X by I (the coalition) and Y by −I (the anti-coalition) in Theorem 1. The only subtlety is that a strategy for I allows for correlations, in the sense that it is a map σI : H → ∆ (SI) rather than from H to ∏i∈I ∆ (Si). This, we believe, is reasonable, when a subset of a larger group strategically coordinate to control outcomes for others. There has be-
en limited work in the area of multiplayer payoff enforcement [9, 25, 36, 37], but this area is not well-understood. This coalitional perspective is especially relevant for applications in multi-agent reinforcement learning and algorithmic game theory [38–40]. Zero-determinant strategies allow a coalition to effectively reshape the incentive landscape faced by learning agents outside the coalition. If external agents are optimizing their policies using gradient-based methods or other adaptive algo-
rithms, the coalition can enforce constraints that guide the learning dynamics toward desirable equilibria or prevent convergence to undesirable outcomes. Doing so is relevant in, for
37

example, specific domains such as climate agreements [41] and algorithmic collusion [42]. Our results provide concrete tools for designing such coalitional strategies and understanding their limitations. Autocratic strategies are closely linked to evolutionary game theory, where populations of agents adapt their strategies over time through selection, mutation, or learning [15, 43–45]. In fact, this is the setting in which linear payoff constraints were first recognized [6, 46]. An autocratic str-
ategy that enforces a favorable payoff relationship can maintain a consistent advantage over a wide range of opponents, potentially allowing it to persist in evolutionary competition despite not being a Nash equilibrium of the stage game. The robustness of reactive learning strategies (in the sense of their ability to enforce constraints against arbitrary opponents) suggests they may be especially resilient to invasion attempts and environmental perturbations. In learning dynamics, the presence of-
 an autocratic player fundamentally alters the optimization landscape for other agents. If player Y is adapting through reinforcement learning or evolutionary search, player X’s autocratic strategy constrains the payoffs Y can achieve along any learning trajectory. Understanding these constraints is crucial for predicting the long-run outcomes of multi-agent learning systems and for designing interventions that guide learning toward socially beneficial equilibria. Several important questions remai-
n open. First, while we characterize enforceable relationships for arbitrary payoff functions, our explicit formulas for minimum discount factors apply most directly to finite action spaces. Extensions to continuous action spaces or games with statedependent payoffs would require additional technical machinery, though we expect the fundamental principles to carry over. Second, our framework assumes that players observe actions perfectly and condition their strategies on these observations. In sett-
ings with imperfect monitoring or private information, enforcement becomes more subtle, and the relationship between memory and enforceability may change [26]. Future work could explore the robustness of autocratic strategies to noise and misperception, characterize the set of enforceable relationships when both players simultaneously attempt to enforce constraints, and investigate the evolutionary stability of populations containing autocratic strategists. While much of the existing literature fo-
cuses on linear payoff relationships, our framework naturally extends to arbitrary nonlinear constraints on expected payoffs. This generality opens new avenues for studying strategic behavior in environments where traditional zero-determinant techniques fail. For instance, payoff relationships involving products, maxima, or other nonlinear combinations of player payoffs can be analyzed using our framework, potentially revealing new classes of enforceable constraints in economic and biological appl-
ications. The extension to nonlinear relationships is particularly relevant for settings where players care about relative performance, inequity aversion, or other behavioral considerations that induce nonlinear preferences over payoff profiles [47]. Our results suggest that even in these complex preference structures, the fundamental limits on enforceability are determined by the same geometric separation conditions that govern linear relations. The universality of reactive learning strategies wi-
thin the class of autocratic strategies is perhaps surprising given the apparent richness of the space of behavioral strategies with arbitrary memory. Our results show that this richness is illusory for the purpose of enforcing payoff constraints: the geometric separation conditions that determine enforceability depend only on the stage game payoffs and the discount factor, not on the complexity of the enforcing strategy. On the other hand, reactive learning strategies can be thought of as longer--
memory behavioral strategies with a “right-invariance” property. This property allows longer histories of simple
38

information to be “rolled up” into shorter memories of richer information. Thus, we believe that this finding provides both theoretical closure on the role of memory in zero-determinant strategies and practical guidance for finding autocratic strategies in strategic environments.
Acknowledgments
We would like to thank Christian Hilbe for helpful comments.
References
[1] D. Fudenberg and E. Maskin. The Folk Theorem in Repeated Games with Discounting or with Incomplete Information. Econometrica, 54(3):533–554, 1986. doi: 10.2307/1911307.
[2] J. Foerster, R. Y. Chen, M. Al-Shedivat, S. Whiteson, P. Abbeel, and I. Mordatch. Learning with Opponent-Learning Awareness. In Proceedings of the 17th International Conference on Autonomous Agents and MultiAgent Systems, AAMAS ‘18, pages 122–130. International Foundation for Autonomous Agents and Multiagent Systems, 2018.
[3] A. McAvoy, J. Kates-Harbeck, K. Chatterjee, and C. Hilbe. Evolutionary instability of selfish learning in repeated games. PNAS Nexus, 1(4), 2022. doi: 10.1093/pnasnexus/pgac141.
[4] M. A. Nowak. Five rules for the evolution of cooperation. Science, 314(5805):1560–1563, 2006. doi: 10.1126/science.1133755.
[5] R. L. Trivers. The Evolution of Reciprocal Altruism. The Quarterly Review of Biology, 46(1): 35–57, 1971. doi: 10.1086/406755.
[6] W. H. Press and F. J. Dyson. Iterated prisoner’s dilemma contains strategies that dominate any evolutionary opponent. Proceedings of the National Academy of Sciences, 109(26):1040910413, 2012. doi: 10.1073/pnas.1206569109.
[7] R. Axelrod and W. Hamilton. The evolution of cooperation. Science, 211(4489):1390–1396, 1981. doi: 10.1126/science.7466396.
[8] R. Axelrod. The Evolution of Cooperation. Basic Books, 1984.
[9] L. Pan, D. Hao, Z. Rong, and T. Zhou. Zero-Determinant Strategies in Iterated Public Goods Game. Scientific Reports, 5:13096, 2015. doi: 10.1038/srep13096.
[10] A. McAvoy and C. Hauert. Autocratic strategies for iterated games with arbitrary action spaces. Proceedings of the National Academy of Sciences, 113(13):3573–3578, 2016. doi: 10.1073/pnas.1520163113.
[11] C. Hilbe, A. Traulsen, and K. Sigmund. Partners or rivals? Strategies for the iterated prisoner’s dilemma. Games and Economic Behavior, 92:41–52, 2015. doi: 10.1016/j.geb.2015.05.005.
[12] A. McAvoy and C. Hauert. Autocratic strategies for alternating games. Theoretical Population Biology, 113:13–22, 2017. doi: 10.1016/j.tpb.2016.09.004.
39

[13] C. Adami and A. Hintze. Evolutionary instability of zero-determinant strategies demonstrates that winning is not everything. Nature Communications, 4, 2013. doi: 10.1038/ncomms3193.
[14] C. Hilbe, M. A. Nowak, and A. Traulsen. Adaptive Dynamics of Extortion and Compliance. PLoS ONE, 8(11):e77886, 2013. doi: 10.1371/journal.pone.0077886.
[15] A. J. Stewart and J. B. Plotkin. From extortion to generosity, evolution in the Iterated Prisoner’s Dilemma. Proceedings of the National Academy of Sciences, 110(38):15348–15353, 2013. doi: 10.1073/pnas.1306246110.
[16] C. Hilbe, B. Wu, A. Traulsen, and M. A. Nowak. Cooperation and control in multiplayer social dilemmas. Proceedings of the National Academy of Sciences, 111(46):16425–16430, 2014. doi: 10.1073/pnas.1407887111.
[17] Z. Wang, Y. Zhou, J. W. Lien, J. Zheng, and B. Xu. Extortion can outperform generosity in the iterated prisoner’s dilemma. Nature Communications, 7:11125, 2016. doi: 10.1038/ncomms11125.
[18] M. Milinski, C. Hilbe, D. Semmann, R. Sommerfeld, and J. Marotzke. Humans choose representatives who enforce cooperation in social dilemmas through extortion. Nature Communications, 7:10915, 2016. doi: 10.1038/ncomms10915.
[19] A. McAvoy, U. M. Sehwag, C. Hilbe, K. Chatterjee, W. Barfuss, Q. Su, N. E. Leonard, and J. B. Plotkin. Unilateral incentive alignment in two-agent stochastic games. Proceedings of the National Academy of Sciences, 122(25), 2025. doi: 10.1073/pnas.2319927121.
[20] M. Nowak and K. Sigmund. A strategy of win-stay, lose-shift that outperforms tit-for-tat in the Prisoner’s Dilemma game. Nature, 364(6432):56–58, 1993. doi: 10.1038/364056a0.
[21] C. Hilbe, L. A. Martinez-Vaquero, K. Chatterjee, and M. A. Nowak. Memory-n strategies of direct reciprocity. Proceedings of the National Academy of Sciences, 114(18):4715–4720, 2017.
[22] F. Lesigang, C. Hilbe, and N. E. Glynatsi. Can i afford to remember less than you? best responses in repeated additive games. Economics Letters, page 112300, 2025.
[23] M. Barlo, G. Carmona, and H. Sabourian. Repeated games with one-memory. Journal of Economic Theory, 144(1):312–336, 2009.
[24] M. Ueda. Memory-two zero-determinant strategies in repeated games. Royal Society open science, 8(5):202186, 2021.
[25] A. Govaert and M. Cao. Zero-determinant strategies in finitely repeated n-player games. IFAC-PapersOnLine, 52(3):150–155, 2019.
[26] A. Mamiya and G. Ichinose. Zero-determinant strategies under observation errors in repeated games. Physical Review E, 102(3):032115, 2020.
[27] C. Hauert and H. G. Schuster. Effects of increasing the number of players and memory size in the iterated Prisoner’s Dilemma: a numerical approach. Proceedings of the Royal Society of London. Series B: Biological Sciences, 264(1381):513–519, 1997.
40

[28] R. M. Dawes. Social dilemmas. Annual Review of Psychology, 31(1):169–193, 1980. doi: 10.1146/annurev.ps.31.020180.001125.
[29] A. McAvoy and M. A. Nowak. Reactive learning strategies for iterated games. Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences, 475(2223):20180819, 2019. doi: 10.1098/rspa.2018.0819.
[30] J. L. Doob. Measure Theory. Springer New York, 1994. doi: 10.1007/978-1-4612-0877-8.
[31] C. Hilbe, M. A. Nowak, and K. Sigmund. Evolution of extortion in Iterated Prisoner’s Dilemma games. Proceedings of the National Academy of Sciences, 110:6913–6918, 2013. doi: 10.1073/pnas.1214834110.
[32] C. Hauert, F. Michor, M. A. Nowak, and M. Doebeli. Synergy and discounting of cooperation in social dilemmas. Journal of Theoretical Biology, 239(2):195–202, 2006. doi: 10.1016/j.jtbi.2005.08.040.
[33] J. Maynard Smith and G. R. Price. The Logic of Animal Conflict. Nature, 246(5427):15–18, 1973. doi: 10.1038/246015a0.
[34] R. Sugden. The Economics of Rights, Co-operation, and Welfare. B. Blackwell, 1986.
[35] C. Hauert and M. Doebeli. Spatial structure often inhibits the evolution of cooperation in the snowdrift game. Nature, 428(6983):643–646, 2004. doi: 10.1038/nature02360.
[36] C. Hilbe, B. Wu, A. Traulsen, and M. A. Nowak. Evolutionary performance of zerodeterminant strategies in multiplayer games. Journal of Theoretical Biology, 374:115–124, 2015. doi: 10.1016/j.jtbi.2015.03.032.
[37] F. Chen, T. Wu, and L. Wang. Evolutionary dynamics of zero-determinant strategies in repeated multiplayer games. Journal of Theoretical Biology, 549:111209, 2022. doi: 10.1016/j.jtbi.2022.111209.
[38] D. Su, H. Peng, G. Zeng, P. Li, A. Li, and Y. Pan. Emergence of cooperation in multi-agent reinforcement learning via coalition labeling and structural entropy. In Proceedings of the 2025 SIAM International Conference on Data Mining (SDM), pages 507–515. SIAM, 2025.
[39] B. D. Bernheim, B. Peleg, and M. D. Whinston. Coalition-proof nash equilibria i. concepts. Journal of economic theory, 42(1):1–12, 1987.
[40] T. W. Sandholm and R. H Crites. Multiagent reinforcement learning in the iterated prisoner’s dilemma. Biosystems, 37(1-2):147–166, 1996.
[41] W. Nordhaus. Dynamic climate clubs: On the effectiveness of incentives in global climate agreements. Proceedings of the National Academy of Sciences, 118(45):e2109988118, 2021.
[42] E. Calvano, G. Calzolari, V. Denicolo, and S. Pastorello. Artificial intelligence, algorithmic pricing, and collusion. American Economic Review, 110(10):3267–3297, 2020.
[43] J. W. Weibull. Evolutionary game theory. MIT Press, 1995.
41

[44] K. Sigmund and M. A. Nowak. Evolutionary game theory. Current Biology, 9(14):R503–R505, 1999.
[45] J. Chen and A. Zinger. The robustness of zero-determinant strategies in Iterated Prisoner’s Dilemma games. Journal of Theoretical Biology, 357:46–54, 2014. doi: 10.1016/j.jtbi.2014.05.004.
[46] A. J. Stewart and J. B. Plotkin. Extortion and cooperation in the Prisoner’s Dilemma. Proceedings of the National Academy of Sciences, 109(26):10134–10135, 2012. doi: 10.1073/pnas.1208087109.
[47] E. Fehr and K. M. Schmidt. A theory of fairness, competition, and cooperation. The Quarterly Journal of Economics, 114(3):817–868, 1999.
42

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:37.591Z
- **Text Length:** 103736 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 42 of 42
