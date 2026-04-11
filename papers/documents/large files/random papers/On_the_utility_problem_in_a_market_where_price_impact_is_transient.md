# PDF Document: Nagy and Rásonyi - 2025 - On the utility problem in a market where price impact is transient.pdf

**File Path:** Nagy and Rásonyi - 2025 - On the utility problem in a market where price impact is transient.pdf

**Processed Date:** 2026-02-10T18:17:43.739Z

**File Size:** 523.24 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3604

**Title:** On the utility problem in a market where price impact is transient

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

On the utility problem in a market where price impact is transient
L ́or ́ant Nagy∗ Mikl ́os Ra ́sonyi†
November 18, 2025
Abstract
We consider a discrete-time model of a financial market where a risky asset is bought and sold with transactions having a transient price impact. It is shown that the corresponding utility maximization problem admits a solution. We manage to remove some unnatural restrictions on the market depth and resilience processes that were present in earlier work. A non-standard feature of the problem is that the set of attainable portfolio values may fail the convexity property.
Keywords: price impact; market friction; optimal investment; dynamic programming; nonconvex domain of optimization MSC 2020: Primary: 93E20, 91B70, 91B16; secondary: 91G10, 28B20
1 Introduction
Investors’ actions move market prices and make large position changes costly. More or less realistic models for this price impact phenomenon have been worked out in the mathematical finance literature. One of the principal questions is the study of optimal investment in the presence of these (nonlinear) transaction costs. Price impact may be assumed instantaneous if it affects the investor only at the moment of his/her portfolio rebalancing. This assumption leads to a relatively simple market dyna-
mics, see [5, 2]. At the other extreme, price impact may be permanent, in which case the investor’s action pushes the price in a direction and this effect pertains to the whole future. The most accurate description of reality is probably in between: price impact should be transient, with a gradually fading effect for the future, see [1, 3]. The speed at which these effects disappear is characterized by market resilience: if r is resilience then the bid-ask spread is diminished by a factor of e−r i-
n one unit of time. The size of the disturbance caused by trading a unit amount of the asset is described by market depth: if δ is market depth then 1/δ is the effect on the bid-ask spread of trading one unit of the risky asset. In the present article we prove that the uility maximization problem in discrete time for an agent trading with transient price impact is well-posed: it admits a solution. The problem under consideration has a complex, non-linear dynamics involving all previous strategies -
at a given time. Moreover, the domain of optimization is nonconvex, which is a highly unusual feature.
∗HUN-REN Alfre ́d R ́enyi Institute of Mathematics, Budapest, Hungary †HUN-REN Alfr ́ed Re ́nyi Institute of Mathematics and E ̈otv ̈os Lor ́and University, Budapest, Hungary; E-mail: rasonyi@renyi.hu
1
arXiv:2511.12093v1 [q-fin.PM] 15 Nov 2025

A continuous-time model with instantaneous price impact was considered in [5]: they proved in their Theorem 5.1 that the utility maximization problem (with a concave utility function) admits a solution under mild conditions. In [3] a more advanced model with transient price impact was treated where the markets’ resiliance and depth were both assumed constant. Theorem 3.3 of [3] proved the existence of an optimal investment strategy in such a setting. In [1] market resilience and depth were both a-
llowed to be stochastic processes but a related monotonicity condition was imposed in their Assumption 2.4 which implies that the set of attainable portfolio values is convex. That condition holds for constant resilience and depth but otherwise it is rather restrictive. The paper [1] did not provide a general existence theorem for optimizers but a superreplication result (Theorem 3.2 in [1]) with a dual characterization of contingent claims that can be superhedged from a given initial position. Th-
ey also proved a verification result (Corollary 3.5 in [1]): a sufficient condition implying that a given strategy is optimal. In the present work we are dealing with the discrete-time version of the model of [1]. Our purpose is to prove the existence of an optimal strategy for a utility maximizer while removing the stringent monotonicity assumption of [1] on market resilience and market depth, see Theorem 2.4 and Remark 2.6 below. Section 2 presents the technical details of our model, the main re-
sult (Theorem 2.4) and some discussions about the lack of convexity and its implications. Proofs will then be provided starting with Section 3. Section 4 deals with the one-step case while Section 5 provides the dynamic programming argument. Further reflections are given in Section 6.
2 Setup and results
For x ∈ R we denote by x+, x− the positive and negative parts of x. Fix a probability space (Ω, F, P) once and for all, together with a discrete-time filtration Ft, t = 0, . . . , T where F0 coincides with P-null sets. Mathematical expectation with respect to P will be denoted by E[ · ], Et[ · ] stands for Ft-conditional expectation. L0 is the set of all real-valued random variables. 1A denotes the indicator function of a set A. We now present the discrete-time version of the model in [1]. The tim-
e horizon of the investor will be some T ∈ N. In the T th step the investor must liquidate her position in the risky asset hence genuine decisions are made only at the previous times t = 1, . . . , T − 1. To have a nontrivial problem we thus need to assume T ≥ 2. The risky asset’s midprice (that is, the middle point of the bid-ask spread) is described by an adapted real-valued process Pt, t = 0, . . . , T . This is the price followed when there is no trading from the part of the investor in consid-
eration. Position in the risky asset at time t is denoted by Xt, t = 0, . . . , T , we assume X0 := 0. At each time t the investor makes a portfolio adjustment based on previous information (before the new price Pt is revealed) hence Xt is assumed Ft−1 measurable, that is, the strategy process Xt, 1 ≤ t ≤ T is predictable. We follow the convention X−1 := 0. The set of all strategies is denoted by A. We define
A0 := {X ∈ A : XT = 0},
the set of strategies that liquidate the position in the risky asset by the end of the time horizon. We note here, that due to the dynamics utilized in the paper, presented below, maximization of the utility of the terminal wealth ξX
T in X is economically
2

meaningful only over the set of strategies A0. Outside of A0, an investor could attain a position in the bank account with favourable expected utility while having large negative positions, and we would need to deal with liquidation value: such scenarios will be excluded. We model liquidity with two primitives, resilience rate, and market depth: market resilience is described by a non-negative adapted process denoted by rt ≥ 0, t = 0, . . . , T − 1, and market depth is a positive adapted process -
δt > 0, t = 1, . . . , T . The half-spread follows a linear dynamics, namely
ζX
t+1 = e−rt ζX
t+ 1
δt+1
|Xt+1 − Xt|, 0 ≤ t ≤ T − 1, (1)
starting from an initial value ζ0X := ζ0 ≥ 0. Finally, the cash account at time t = 1, . . . , T , considering that the investor pays the spread when trading, is calculated as
ξX
t+1 − ξX
t = −Pt+1(Xt+1 − Xt) − ζX
t+1|Xt+1 − Xt|, 0 ≤ t ≤ T − 1. (2)
Setting ξ0X := 0 for simplicity, with initial capital z ∈ R, the investor has a wealth
of z + ξX
T at time T . The above model is the discrete-time counterpart of the model introduced in [1]: except that in our setup only transient impact is modeled. We further assume that the investor may possibly receive a random endowment during the trading period, described by an FT -measurable R-valued random variable B. Negative B means that the investor has certain payment obligations during the period considered. The investor aims to maximize her expected utility from terminal wealth, hence we fix a u-
tility function u : R → R.
Assumption 2.1. The function u is non-decreasing, continuous, limx→−∞ u(x) = −∞, and u is bounded from above. We furthermore assume that for all x, y, z ∈ R and for all t = 1, . . . , T − 1,
E[u(x + yPt + zPT − B)] > −∞ (3)
holds.
Remark 2.2. If u is concave then (3) is implied by the simpler condition
E[u(x + yPt − B)] > −∞, t = 1, . . . , T.
Indeed, by concavity of the mapping v → u(x + v − B),
E [u(x + yPt + zPT − B)] ≥ E [u(x + 2yPt − B)] + E [u(x + 2zPT − B)]
2.
Our next hypothesis stipulates that market depth is always above a fixed threshold.
Assumption 2.3. There is a constant δ > 0 such that δt ≥ δ almost surely, for all t = 1, . . . , T .
Our main result asserts that an investor with an arbitrary initial capital z ∈ R may find an optimal portfolio strategy X∗(z).
3

Theorem 2.4. Let Assumption 2.1 and Assumption 2.3 be in force. Then, for each z ∈ R there exists X∗(z) ∈ A0 such that
u ̄(z) := E
h
u z + ξX∗(z)
T −B
i
= sup
X ∈A0
E u z + ξX
T −B .
Theorem 2.4 shows that, despite the possible lack of convexity for the set of attainable values (see Example 2.5 below), the utility maximization problem admits an optimal strategy. We will present the proof of Theorem 2.4 in the coming sections, using a customized dynamic programming procedure. From now on, for any stochastic process Zt, we denote its increments by ∆Zt := Zt − Zt−1, 0 ≤ t ≤ T with the convention Z−1 := 0. It is convenient to use another parametrization for strategies: for a given-
 real-valued process Ht, 1 ≤ t ≤ T such that Ht is Ft−1-measurable, we may assign a unique strategy Xt such that X0 = 0, ∆Xt = Ht, 1 ≤ t ≤ T . For such strategies we will also use the alternative notations ζH , ξH for the corresponding half-spread and portfolio value processes. With a slight abuse of notation we will also write H ∈ A0 when we really mean that the corresponding X is in A0. Note that H ∈ A0 implies that HT = − PT −1
j=1 Hj , in
particular, HT is FT −2-measurable. Introduce the notation ρj,t := exp
h
−
Pt−1
i=j ri
i
, 1 ≤ t ≤ T , 0 ≤ j ≤ t. Note that ρt,t = 1. From (1) and (2) we derive the explicit formula
ξX
T =−
T
X
t=1
PtHt −
T
X
t=1
|Ht|

ρ0,tζ0 +
t
X
j=1
ρj,t
δj
|Hj |

 . (4)
Example 2.5. Let T = 3, rt = 0 for all 0 ≤ t ≤ 3, P0 = ζ0 = 0 and let P1, P2, P3 be independent standard Gaussian. Let Ft, 0 ≤ t ≤ 3 be the natural filtration of the process P . Let δ1 = 1, δ2 = δ3 = 10. We claim that the set
S := {Y ∈ L0 : ∃X ∈ A0 such that ξX
T ≥Y}
fails convexity. We argue by contradiction. Convexity would imply, in particular, that for arbitrary non-negative deterministic strategies Hi, Gi, i = 1, 2 such that H3 :=
−H1 − H2, G3 = −G1 − G2, there would exist some H ̄i, i = 1, 2, 3 such that
ξH ̄
T ≥ ξH
T + ξG
T
2
almost surely. In view of (4), this inequality can be rewritten as
1
2 H2
1 + H2H1 + 1
10 H2
2 + (H1 + H2)H1 + 1
10 (H1 + H2)H2 + 1
10 (H1 + H2)2
+1
2 G2
1 + G2G1 + 1
10 G2
2 + (G1 + G2)G1 + 1
10 (G1 + G2)G2 + 1
10 (G1 + G2)2
− H ̄ 2
1 + H ̄2H ̄1 + 1
10
H ̄ 2
1 + (H ̄1 + H ̄2)H ̄1 + 1
10 (H ̄1 + H ̄2)H ̄2 + 1
10 (H ̄1 + H ̄2)2
≥ H ̄3 − H3
2 − G3
2 P3 + H ̄2 − H2
2 − G2
2 P2 + H ̄1 − H1
2 − G1
2 P1.
Notice that the F2-conditional law of (H ̄3 −H3/2−G3/2)P3 is nondegenerate Gaus
sian on the set {H ̄3 − H3/2 − G3/2 ̸= 0}. Also, the left-hand side and the last two
4

terms of the right-hand side are F2 measurable. Hence the above inequality neces
sarily implies that P(H ̄3 − H3/2 − G3/2 ̸= 0) = 0. By an analogous argument, also
H ̄i − Hi/2 − Gi/2 = 0, i = 1, 2. But then
1 2
21
10 H2
1+ 3
10 H2
2 + 23
10 H1H2 + 21
10 G2
1+ 3
10 G2
2 + 23
10 G1G2
≥ 21
10
H ̄ 2
1+ 3
10
H ̄ 2
2 + 23
10
H ̄ 1 H ̄ 2 .
The latter property, however, badly fails. Take, for instance, H1 = H2 = 1 and G1 = 1.5, G2 = 0. We conclude that S is not a convex set.
Remark 2.6. The paper [1] made a monotonicity assumption. In the current discretetime context it would require that the process ρ20,tδt is a.s. strictly decreasing in t. Under this hypothesis, [1] showed that S is convex. The novel contribution of our work is to drop such monotonicity assumptions and nevertheless to prove the existence of optimal strategies.
We finally point out in a simple example why non-convexity of the domain of optimization may cause trouble in optimal investment problems.
Example 2.7. We consider a one-step frictionless market model. Let the family of permitted strategies be Φ := {0, 1}. That is, the investor may take either a unit position in the risky asset or no position at all. Let us consider the utility function u(x) := ln(x) for x > 0. Let the investor have initial capital z > 1. Assume that the return on his investment is a random variable R with P(R = 2) = 1/2 = P(R = −1). His indirect utility is then
u ̄(z) := sup
φ∈Φ
E[u(z + φR)] = max ln(z), ln(z + 2) + ln(z − 1)
2 , z > 1.
This function fails concavity: it is non-differentiable at 2 with the right-hand derivative being strictly larger than the left-hand derivative. We conclude that even if the investor’s utility is risk-averse (concave), his/her indirect utility may well fail this property when the family of permitted strategies is non-convex. Hence in related multistep optimization problems one needs to deal with a dynamic programming procedure involving non-concave functions, as in [4].
3 Preparation for the proof
Recall from (2) and (1) that
∆ξH
t = −PtHt − |Ht|

ρ0,tζ0 +
t
X
j=1
ρj,t
δj
|Hj |

.
Inspired by this formula, for 1 ≤ t ≤ T and h = (h1, . . . , ht) we introduce the random functions
κt(h) := −Ptht − |ht|

ρ0,tζ0 +
t
X
j=1
ρj,t
δj
|hj |

 (5)
5

for all h1, . . . , ht ∈ R. Note that the mapping, describing the innovation corresponding to a deterministic action of the trader,
ht → κt((h1, . . . , ht−1, ht)),
is concave for every fixed (h1, . . . , ht−1), but κt, as a function of t variables, has no reason to be concave. Note also that innovation has an ”action-independent” market bound, namely the quantity
κt((h1, . . . , ht)) ≤ λt(ht) := −Ptht − ht2
δt
≤ Pt2δt
4 . (6)
We recall Lemma 6.8 of [4].
Lemma 3.1. Let (Ω, H, P ) be a complete probability space. Let Ξd be the set of Hmeasurable d-dimensional random variables. Let F : Ω × Rd → R be a function such that for almost all ω ∈ Ω, F (ω, ·) is continuous and for each y ∈ Rd, F (·, y) is Hmeasurable. Let K > 0 be an H-measurable random variable. Set f (ω) = ess. supξ∈Ξd,|ξ|≤K F (ω, ξ(ω)). Then, for almost all ω,
f (ω) = sup
y ∈Rd ,|y |≤K (ω )
F (ω, y). (7)
□
A compactness result involving random subsequences comes next, this is Lemma 2 of [6].
Lemma 3.2. Let H ⊂ F be a sigma-algebra. Let Xn be a sequence of H-measurable d-dimensional random variables such that
lim inf
n→∞ |Xn| < ∞ (8)
almost surely. Then there exist H-measurable random variables nk : Ω → N, k ∈ N with nk(ω) < nk+1(ω) for all ω ∈ Ω and k ∈ N and an H-measurable random variable X such that Xnk → X a.s. In such a case we write that there exists an H-measurable random subsequence. □
The following lemma uses the same idea as Lemma A.3 of [8]; it provides continuous versions for certain random fields.
Lemma 3.3. Let H ⊂ F be a sigma-algebra. Define K := [−N, N ]n. Let L : Ω×K → R be such that for a.e. ω ∈ Ω, L(ω, ·) is continuous and for all x ∈ K, L(·, x) is measurable such that supz∈K |L(ω, z)| is integrable. Then there is l : Ω × K → R such that for a.e. ω ∈ Ω, l(ω, ·) is continuous and for all k ∈ K, E(L(k)|H) = l(k) a.s.
Proof. Consider the separable Banach space B := C([−N, N ]n) of continuous functions on [−N, N ]n with the supremum norm. Clearly, L : Ω → B and for all μ in the dual space B′ (which can be represented as a Borel signed measure), μ(L) =
R
K L(ω, x)μ(dx) is a measurable function on (Ω, F): indeed, this is clear for μ with
finite support and then follows for general μ by approximation. Note that, for each k ∈ K, the linear functional fk(x) := x(k), x ∈ B is continuous (w.r.t. the norm of B) so fk ∈ B′. Now it follows from Proposition V.2.5. of [7] that there is a measurable l : Ω → B such that
l(k) = fk(l) = E(fk(L)|H) = E(L(k)|H),
for each k ∈ K, as claimed.
6

Now we turn to a set of Lemmas that ensure that we can perform a backward iteration, and produce a series of actions that forms a candidate strategy of optimal execution.
4 Single step case
Let t ≥ 1 be an integer and let G, H be P-complete sigma-algebras over Ω such that H ⊂ G ⊂ F holds, and denote the set of H-measurable R-valued random variables by Ξ. We will consider functions
G0 : Ω × R × Rt → R, (x, v) 7→ G0(x, v),
and
V : Ω × R × Rt−1 × R → R, (x, j, h) 7→ G0(x + κt((j, h)), (j, h)),
where (j, h) = (j1, . . . , jt−1, h), and the κt is as in (5). Below we introduce assumptions that serve as a basis for the iterative arguments later.
Assumption 4.1. The function G0 is G ⊗ B(R) ⊗ B(Rt)-measurable, the mapping G0(ω, ·, ·), is jointly continuous and non-decreasing in its first variable, P-almost surely.
Assumption 4.2. There exists a function G ̄0 : Ω × R 7→ R, and a constant C > 0, such that for all x ∈ R there exists a zero measure set outside of which
G ̄0(x) → −∞
holds as x → −∞. Furthermore, G0(ω, ·) is non-decreasing almost surely, and for all pairs (x, v) ∈ R × Rt we have that the inequalities
G0(x, v) ≤ G ̄0(x) ≤ C
hold, again outside a set of measure zero.
Assumption 4.3. Assume that for any m ∈ N and for all 1 ≤ t′ ≤ t, there exists an
integrable random variable M = M (m, t′ ) so that
M ≤ G0(x + κt′ ((v1, . . . , vt′ )), v)
holds for every x ∈ [−m, m], v ∈ [−m, m]t, and for almost every ω ∈ Ω.
Throughout Section 4 we postulate that the conditions prescribed by Assumption 4.1, Assumption 4.2, and Assumption 4.3 hold.
Lemma 4.4. There exists L : Ω × R × Rt−1 × R → R so that for all (x, j, h) ∈ R × Rt−1 × R we have
E[V (x, j, h)|H] = L(x, j, h)
almost surely, and furthermore, L(·, ·, ·) is continuous in all its variables for almost all ω ∈ Ω.
Proof. Under Assumption 4.1, Assumption 4.2, and Assumption 4.3 the proof is a direct consequence of Lemma 3.3.
7

Lemma 4.5. Let L be as in Lemma 4.4, G ̄0 be as in Assumption 4.2, λt be as in (6), and let x ∈ R. As |h| → −∞ we have that
sup
j∈Rt−1
L(x, j, h) → −∞ (9)
almost surely. (In the case t = 1 we mean that L does not depend on j and there is no supremum.)
Proof. Without loss of generality we assume t = 2, the case of t > 2 being only notationally more cumbersome. By Assumption 4.2, the definition of L and using (6), we have for all x, j, h ∈ R that
L(x, j, h) = E[V (x, j, h)|H]
≤ E[G ̄0(x + κ2(j, h))|H]
≤ E[G ̄0(x + λ2(h))|H]
almost surely. Apply Fatou’s reverse lemma to the inequalities above. Considering (6) and the absence of dependence on the variable j, continuity of G ̄0 shows (9).
Lemma 4.6. The inequality
L(x1, j, h) ≤ L(x2, j, h), (10)
holds for all x1, x2, h ∈ R with x1 < x2, for all j ∈ Rt−1, and for almost every ω ∈ Ω.
Proof. Without loss of generality we can assume t = 2. let Ω′ be a P-full measure set such that (10) holds for all x1, x2, j, h ∈ Q on Ω′. Let Ω′′ be the full measure set on which L is continuous. Then on Ω′ ∩ Ω′′ (10) holds for all x1, x2, j, h ∈ R, by continuity.
Lemma 4.7. Fix l ∈ Z and m ∈ N. There exits an H-measurable K = K(l, m) such that
L(x, j, h) ≤ L(x, j, h1{|h|≤K}), (11)
for all x ∈ [l, l + 1], j ∈ [−m, m]t−1 ⊂ Rt−1, h ∈ R, and for almost every ω ∈ Ω.
Proof. Without loss of generality assume t = 2, and let Ω ̄ denote the full measure set where the conclusion of Lemma 4.4 and Lemma 4.6 hold. For every ω ∈ Ω ̄ choose a (measurable) m+(h) = m+(ω, l, h) such that
L(l + 1, j, h)(ω) ≤ L(l + 1, m+(h), h)(ω)
holds for all j ∈ [−m, m] and h ∈ R, this is possible by continuity of L. Likewise, for every ω ∈ Ω ̄ choose m− = m−(ω, l) such that
L(l, m−, 0)(ω) ≤ L(l, j, 0)(ω)
holds for all j ∈ [−m, m]. Fix l ∈ Z and m ∈ N. Using Lemma 4.5 for all ω ∈ Ω ̄ there exists K(ω) = K(ω, l, m) so that for all h ∈ R it holds that
|h| > K(ω) =⇒ L(l + 1, m+(h), h)(ω) ≤ L(l, m−, 0)(ω). (12)
8

Now note, that ω → K(ω) can be chosen in a way that it is H-measurable as a random variable. On the event {|h| > K} ∩ Ω ̄ , using Lemma 4.6, and the statement in (12), we have
L(x, j, h) ≤ L(l + 1, j, h) ≤ L(l + 1, m+(h), h),
≤ L(l, m−, 0) ≤ L(l, j, 0) ≤ L(x, j, 0), (13)
for every x ∈ [l, l + 1], j ∈ [−m, m], h ∈ R, and for all ω ∈ Ω ̄ : completing the argument.
Lemma 4.8. There exists an H ⊗ B(R)-measurable function
G : Ω × R × Rt−1 7→ R,
such that G is continuous almost surely, G is non-decreasing in its first variable for almost all ω ∈ Ω, furthermore, for all x, and for all j ∈ Rt−1 we have
G(x, j) = ess. sup
H ∈Ξ
L(x, j, H), (14)
almost surely.
Proof. We follow arguments of Lemma 3.17 in [4]. Let x, j ∈ R, and without loss of generality assume t = 2 and set l ∈ Z and m ∈ N so that x ∈ [l, l + 1] and j ∈ [−m, m] holds. We will work out the statement in consideration elementwise on Ω, and to this end – out of the usual – we do not omit to display dependence on ω ∈ Ω throughout the proof, until further notice. Denote with Ω ̄ the full measure set for which the conclusions of Lemma 4.4, 4.6, 4.7 hold, and let ω ∈ Ω ̄ . Let us define
B(ω, x, j) = sup
h∈Q,|h|≤K (ω )
L(ω, x, j, h) = sup
h∈R,|h|≤K(ω)
L(ω, x, j, h),
where K(ω) = K(ω, l, m) = K(l, m) is as in Lemma 4.7. This is measurable, being the supremum of countably many measurable functions. Let us fix furthermore a sequence (xn, jn)n∈N ⊂ ([l, l + 1] × [−m, m]) ∩ R2 for which (xn, jn) → (x, j). Observe, that by definition of B, for every k ∈ N there exists hk(ω, x, j), with hk(ω, x, j) ≤ K(ω), so that B(ω, x, j) − 1/k ≤ L(ω, x, j, hk(ω, x, j)). The fact that for all n ∈ N we have B(ω, xn, jn) ≥ L(ω, xn, jn, hk(ω, x, j)), along with continuity of L yields
lim inf
n B(ω, xn, jn) ≥L(ω, x, j, hk(ω, x, j))
≥ B(ω, x, j) − 1/k,
which in the limiting case of k → ∞ means lim infn B(ω, xn, jn) ≥ B(ω, x, j). Take a sequence {nk, k ∈ N} ⊂ N so that
lim sup
n
B(ω, xn, jn) = likm B(ω, xnk , jnk ). (15)
Since {h : h ∈ Q, |h| ≤ K(ω)} is a precompact set in R, for every k ∈ N there exists R ∋ h∗nk (ω) ≤ K(ω) so that B(ω, xnk , jnk ) = L(ω, xnk , jnk , h∗nk (ω)). Using
the compactness of the closure there exists R ∋ h∗(ω) ≤ K(ω) and a subsequence (ak)k∈N of {nk : k ∈ N} so that h∗ak (ω) → h∗(ω), k → ∞. These, and (15) imply
lim sup
n
B(ω, xn, jn) = likm B(ω, xnk , jnk ) = likm B(ω, xak , jak )
= likm L(ω, xak , jak , h∗
ak (ω)) = L(ω, x, j, h∗(ω)) ≤ B(ω, x, j),
9

establishing the continuity of B. As far as monotonicity is concerned, the mapping x → B(ω, x, j) inherits the non-decreasing property from L (stated in Lemma 4.6) naturally. From Lemma 3.1 it follows that
B(ω, x, j) = ess.supH(ω)≤K(ω)L(ω, x, j, H(ω)).
In the discussion above ω ∈ Ω ̄ was arbitrary, and returning to the usual practice of not displaying the dependence on it, Lemma 4.7 shows that
ess.supH∈ΞL(x, j, H) ≤ ess.supΞ∋H≤K L(x, j, H) = B(x, j)
≤ ess.supH∈ΞL(x, j, H)
holds almost surely, finishing the argument.
Lemma 4.9. Let X, H1, . . . , Ht−1 be H-measurable random variables, and let G be as in Lemma 4.7. Then, the quantity G(X, (H1, . . . , Ht−1)) is a version of the essential supremum
ess. sup
H ∈Ξt−1
L(X, (H1, . . . , Ht−1), H).
Proof. Without loss of generality we assume that t = 2, and that X and H1 take values in [l, l + 1] and [−m, m] respectively. Let Xn and H(n)
1 be H-measurable random variables, taking values in [l, l + 1] ∩ Q and [−m, m] ∩ Q, respectively, for all n ∈ N, and possessing also the limiting properties Xn → X and H(n)
1 → H1. Observe that for all n ∈ N, on a full measure set, we have that
ess.supH∈Ξt−1 L(Xn, H(n)
1 , H) = G(Xn, H(n)
1 ),
and furthermore, as a consequence, for all n ∈ N there exists Hn so that
L(Xn, H(n)
1 , Hn) ≥ G(Xn, H(n)
1 ) − 1/n (16)
almost surely. According to Lemma 4.7 there exists an H-measurable K = K(l, m) = K(ω, l, m) so that
L(Xn, H(n)
1 , Hn1{|Hn|≤K}) ≥ L(Xn, H(n)
1 , Hn). (17)
Note that the K does not depend on the integer n in any way. Putting together (16) and (17) gives, for all n ∈ N the almost sure inequality
L(Xn, H(n)
1 , Hn1{|Hn|≤K}) ≥ G(Xn, H(n)
1 ) − 1/n. (18)
Now using Lemma 3.2, there exists an H-measurable subsequence kn = kn(ω), k ∈ N
and an H-measurable H ̄ so that Hkn 1{|Hkn |≤K} → H ̄ holds almost surely. In (18)
taking the limit as n → ∞ along the sequence kn, n ∈ N, and utilizing continuity of L and G yields
L(X, H1, H ̄ ) ≥ G(X, H1),
which in return implies ess.supH∈Ξt−1 L(X, H1, H) ≥ G(X, H1).
10

On the other hand, by definition of G, for every H-measurable H we have
L(X, H1, H) = linm L(Xn, H(n)
1 , H) ≤ linm ess.supH L(Xn, H(n)
1 ,H)
= linm G(Xn, H(n)
1 ) = G(X, H1).
Taking the essential supremum of both sides yields the inequality
ess.supH∈Ξt−1 L(X, H1, H) ≤ G(X, H1)
on a full measure set: finishing the proof.
Lemma 4.10. Let G be as in Lemma 4.8. Let X, H1, . . . , Ht−1 be H-measurable random variables. Then, there exists an H-measurable H∗ so that
G(X, (H1, . . . , Ht−1)) = L(X, (H1, . . . , Ht−1), H∗)
holds almost surely.
Proof. Without loss of generality assume that t = 2, X almost surely takes values in the closed interval [l, l + 1], H1 takes values in the closed interval [−m, m] for some l ∈ Z and for some m ∈ N. Let us define
O=
n
L(X, H1, H), H ∈ Ξ(H)
o
.
This set is upward directed in terms of the almost sure sense of the usual ”less than or equal” relation. Thus, using Proposition VI.1.1. of [7] we have that there exists a sequence {Hn, n ∈ N} ⊂ Ξ(H) for which the limiting property
L(X, H1, Hn) → G(X, H1) (19)
holds almost surely as n → ∞. Utilizing Lemma 4.7, and the K = K(l, m) within, we have for each n ∈ N that
L(X, H1, Hn) ≤ L(X, H1, Hn1{|Hn|≤K}), (20)
almost surely. Then, again using Lemma 3.2, there exists an H-measurable subsequence, say kn, n ∈ N, and there exists an H-measurable H∗ so that
Hkn 1{|Hkn |≤K} → H ∗
in the almost sure sense. Continuity of L, (19), and (20) together guarantees
G(X, H1) = nli→m∞ L(X, H1, Hkn )
≤ nli→m∞ L(X, Hkn 1{|Hkn |≤K}) = L(X, H1, H∗).
The proof is complete.
Lemma 4.11. Let G be as in Lemma 4.8. There exists G ̄ : R → R, and C > 0 such that the following requirements are met: as x → −∞ we have
G ̄(x) → −∞,
almost surely and, for all x ∈ R, j ∈ Rt−1 we have
G(x, j) ≤ G ̄(x) ≤ C
in the almost sure sense.
11

Proof. Let G and H∗ be as in Lemma 4.8 and Lemma 4.10 respectively. Without loss of generality we can assume t = 2. Let H∗ be as in Lemma 4.10, and let us choose a sequence of rational-valued random variables Hn∗ increasing to it. Using the market bound for the innovations κ· in (6), Assumption 4.3, and Fatous’ reverse Lemma, we have for x, j ∈ R that
G(x, j) =L(x, j, H∗) = linm L(x, j, H∗
n) ≤ lim sup
n
E[V (x, j, H∗
n)|H]
≤ lim sup
n
E[G ̄0(x + κ2(j, H∗
n))|H] ≤ E[G ̄0(x + κ2(j, H∗))|H]
≤ E[G ̄0(x + P 2
t δt/4)|H] =: G′ (x)
almost surely. Fix some v0 ∈ R and note that we have G0(x, v0) ≤ G ̄0(x). With Assumption 4.3
in mind, take a continuous version of G′ using Lemma 3.3, and denote it by G′′ . By
construction for a.e. ω ∈ Ω we have G(·, ·) ≤ C and G′′ (·) < C, and observe that by
the reverse Fatou lemma we have G′′ (x) → −∞ and x → −∞. The function G′′ (·) inherits monotonicity from G ̄0. The former fact can be seen with similar reasoning
given in the proof of Lemma 4.6. The choice G ̄ = G′′ completes the proof.
Lemma 4.12. Let G be as in Lemma 4.8, and let t′ ∈ {1, . . . , t − 1}. For any m ∈ N
there exists an integrable random variable M1 = M1(m, t′ ) so that
M1 ≤ G(x + κt′ ((j1, . . . , jt′ )), j)
for every x ∈ R, j ∈ [−m, m]t−1, and for almost every ω ∈ Ω.
Proof. Let m ∈ N and t′ ∈ {1, . . . , t − 1}. Using Assumption 4.3 there exists and
integrable, G-measurable M0 = M0(m, t′ ) so that with with the notation (j, 0) = (j1, . . . , jt−1, 0) we have
G0(x + κt′ ((j1, . . . , jt′ )), (j, 0)) ≥ M0
for all x ∈ [−m, m], for all j ∈ [−m, m]t−1, and for almost every ω ∈ Ω. For fixed j = (j1, . . . , jt−1) ∈ [−m, m]t−1 and x ∈ [−m, m], we have
G(x+κt′ ((j1, . . . , jt′ )), j) ≥ L(x + κt′ ((j1, . . . , jt′ )), j, 0)
= E[V (x + κt′ ((j1, . . . , jt′ )), j, 0)|H]
= E[G0(x + κt′ ((j1, . . . , jt′ )) + κt((j, 0)), (j, 0))|H]
= E[G0(x + κt′ ((j1, . . . , jt′ )), (j, 0))|H] = E[M0|H]
(21)
almost surely. Since G is continuous the relation established in (21) above holds for all x ∈ [−m, m], for all j ∈ [−m, m]t−1, and for almost every ω ∈ Ω. The choice M1 = E[M0|H] gives a desired lower bound.
5 The generic step, dynamic programming
First, in a phase of bakcward induction we construct actions that – depending parametrically on previous decisions and accumulated wealth – are optimal in an instantaneous sense. These actions however would only be optimal in one-step markets.
12

Then, we use these actions to build a strategy for the entire interval of trading, and this strategy will serve as a candidate strategy for optimal trading. Second, with a forward iteration we show that the candidate indeed represents a series of actions that dominates all admissible executions in terms of expected utility: arriving to the conclusion of the paper. Assumptions 2.1 and 2.3 will be in force from now on. Fix Cu ≥ 0 such that u(x) ≤ Cu for all x ∈ R. We denote with Ξt the Ft-measurabl-
e random variables.
Proof of Theorem 2.4. Define G ̃T : Ω × R × RT → R as
G ̃T (ω, x, h1, . . . , hT ) := u(x − B(ω)), ω ∈ Ω, x, h1, . . . , hT ∈ R. (22)
Note that h1, . . . , hT are dummy variables here, and G ̃T is continuous and nondecreasing in x almost surely. The first step of the backward induction is different from the other steps since hT = −h1 − . . . − hT −1 due to the constraint on liquidation. We thus consider
G ̃T −1 : Ω × R × RT −1 → R with the definition
G ̃T −1(ω, x, h1, . . . , hT −1)
=E
"
G ̃T x + κT h1, . . . , hT −1, −
T −1
X
k=1
hk
!
, h1, . . . , hT −1, −
T −1
X
k=1
hk
!
|FT −1
#
.
(23)
To start the backward induction one has to examine whether the conditions prescribed by Assumption 4.1, Assumption 4.2, and Assumption 4.3 hold with the choice G0 = G ̃T −1. To this end, we note that the function G ̃T −1 is jointly continuous in its real variables, it is non-decreasing in the first real variable almost surely. Using the bound in (6) we define GˆT −1 : Ω × R → R as
GˆT −1(ω, x) = E u x + P 2
T (ω)δT (ω)
4 |FT −1 ,
and we note that – due to Assumption 2.1 – for all x ∈ R it holds that GˆT −1(x) ≤ Cu,
and as x → −∞ the quantity GˆT −1(x) tends to −∞ as x → −∞, in the P-almost sure sense: u does so by assumption and due to boundedness from above the reverse Fatou Lemma is applicable. Moreover, for all x, h1, . . . , hT −1, we have
G ̃T −1(ω, x, h1, . . . , hT −1) ≤ GˆT −1(ω, x)
almost surely, leading us to the choice G ̄0 = GˆT −1 (again following notation of Section 4). We will establish the following claim after the present proof.
Claim 5.1. For any m > 0 there exists an FT −1-measurable and integrable M = M (m) such that for all 1 ≤ t ≤ T − 1 and for all (x, h1, . . . , hT −1) ∈ [−m, m]T we have
M (m) ≤ GT −1(x + κt(h1, . . . , ht), h1, . . . , hT −1)
almost surely.
13

One can thus conclude that Assumption 4.1, Assumption 4.2, and Assumption 4.3 of Section 4 are satisfied and we are ready to perform the first step of the backward induction: the lemmas of Section 4, for the first step, will be utilized with the choice t = T − 1 and G0 = G ̃T −1, G ̄0 := GˆT −1.
Lemmas 4.4, 4.5, 4.6, 4.7, and 4.8 produce a mapping – denoted by G in the their own context – which, in our notation will take the form G ̃T −2 : Ω × RT −1 → R
with the following properties. The G ̃T −2 is FT −2 ⊗ B(RT −1)-measurable, nondecreasing in its first real variable, jointly continuous in all its real variables, and for all x, h1, . . . , hT −2 ∈ R it almost surely satisfies
G ̃T −2(x, h1, . . . , hT −2)
= ess.supH∈ΞT −2 E
hG ̃T −1(x + κT −1(h1, . . . , hT −2, H), h1, . . . , hT −2, H)|FT −2
i
.
(24)
Furthermore, Lemmas 4.9, and 4.10 ensure the existence of a mapping H∗
T −1 : Ω ×
RT −1 → R that is Ω ⊗ B(RT −1)-measurable, and is such that for all random variables X, H1, . . . , HT −2 that are measurable with respect to FT −2, with the notation
H∗
T −1 = H ∗
T −1(X, H1, . . . , HT −2), we have
G ̃T −2(X, H1, . . . , HT −2)
=E
hG ̃T −1(X + κT −1(H1, . . . , HT −2, H∗
T −1), H1, . . . , HT −2, H∗
T −1)|FT −1
i
,
(25)
P-almost surely. Lemmas 4.11, and 4.12 imply that there exists an action-independent bound GˆT −2,
with properties analogous to the GˆT −1 presented above, and thus finally, we arrive to
the conclusion that the quantity G ̃T −2 is such that it again satisfies Assumption 4.1, Assumption 4.2, and Assumption 4.3. That is, in the next step of iteration, the choice G0 = G ̃T −2, G ̄0 := GˆT −2 can be made. Iterating backwards in this manner goes with the usual mechanics of induction. Take G ̃T −2 as a starting point.
When G ̃t′ , . . . , G ̃T (and H∗
t′ −1, . . . , H∗
T −1) are given for some t′ ≤ T − 2, apply
ing the lemmas of Section 4 with the choice G0 = G ̃t′ , G ̄0 := Gˆt′ and t = t′ yield
G ̃t′ −1, and with this procedure we construct the pairs
(H ∗
T −1, G ̃T −2), (H∗
T −2, G ̃T −3), . . . , (H∗
1 , G ̃0) (26)
with the properties shown below. For t ∈ {0, 1, . . . , T − 2}, G ̃t : Ω × Rt+1 → R is Ft ⊗ B(Rt+1)-measurable, non-decreasing in its first real variable, jointly continuous in its real variables, and for all x, h1, . . . , ht ∈ R, in the almost sure sense we have
G ̃t(x, h1, . . . , ht)
=ess.supH∈Ξt E
hG ̃t+1(x + κt+1(h1, . . . , ht, H), h1, . . . , ht, H)|Ft
i
.
The mapping Ht∗+1 : Ω × Rt → R is Ω ⊗ B(Rt)-measurable and for all Ft-measurable random variables X, H1, . . . , Ht we have for H ̃t∗+1 = Ht∗+1(X, H1, . . . , Ht) that
G ̃t(X, H1, . . . , Ht)
=E
hG ̃t+1(X + κt+1(H1, . . . , Ht, H ̃ ∗
t+1), H1, . . . , Ht, H ̃ ∗
t+1)|Ft
i
, (27)
14

holds in the P-almost sure sense. Introducing notation, for any admissible trading strategy H = (Ht)t∈{1,...,T }, we denote by Γt(H) the strategy (Hs)s∈{1,...,t}, the same trading strategy as H, but without liquidation, and corresponding to the trading interval up to t. Now we construct the candidate strategy using the mapping in (26). Let Hˆ1 =
H1∗(z). We define the optimal steps using a forward recursion. That is, when the Hˆt
is constructed for some T − 1 ≥ t ≥ 1, with accumulated wealth Xˆt = ξΓt(Hˆ )
t , the
next action Hˆt+1 is given as
Hˆt+1 = H∗
t+1(Xˆt, Hˆ1, . . . , Hˆt). (28)
Then, we set HˆT = −HˆT −1 − . . . − Hˆ1. We proceed with the forward iteration, giving an upper bound for all expected payoffs which – as we shell see – equals the expected payoff associated with the candidate strategy Hˆ .
Letting H1, . . . , HT −1, HT denote an arbitrary series of admissible actions. Iterating with the rule in (27) yields
E[u(z + ξH
T + B)]
= E[E[u(z + ξΓT −1(H)
T −1 + κT (H1, . . . , HT −1, −
T −1
X
k=1
Hk) + B)]|FT −1]]
= E[G ̃T −1(z + ξΓT −2(H)
T −2 + κT −1(H1, . . . , HT −1), H1, . . . , HT −1)]
≤ E[E[G ̃T −2(z + ξΓT −3(H)
T −3 + κT −2(H1, . . . , HT −2), H1, . . . , HT −2)|FT −2]]
...
≤ E[G ̃0(z)].
(29)
Furthermore, as a result of (22), (23), (24), and (25) we have that
G ̃0(z) =E[G ̃1(z + κ1(Hˆ1), Hˆ1)]
=E[G ̃2(z + κ1(Hˆ1) + κ2(Hˆ1, Hˆ2), Hˆ1, Hˆ2)]
...
=E[G ̃T −1(z +
T −1
X
i=1
κi(Hˆ1, . . . , Hˆi), Hˆ1, . . . , HˆT −1)]
=E[u(z + ξHˆ
T + B)].
(30)
Thus, we can conclude, due to (30) and (29), that the candidate strategy given with trading actions (Hˆt)t=1,...,T , defined in (28), is indeed optimal. Theorem 2.4 is now shown.
Proof of Claim 5.1. For h1, . . . , hT −1 ∈ [−m, m] we clearly have
κt(h1, . . . , ht) ≥ −mζ0 − tm2/δ + min{mPt, −mPt}.
15

Similarly,
κT h1, . . . , hT −1, −
T −1
X
k=1
hk
!
≥ −(T − 1)mζ0 − (T − 1)m2(2T − 2)/δ + min{m(T − 1)PT , −m(T − 1)PT }
Define the constant
Dm := −(2T − 2)ζ0 − (T − 1)m2(2T − 1)/δ.
We can thus see that
G ̃T −1(x + κt(h1, . . . , ht), h1, . . . , hT −1) ≥ E [ min{J1, J2, J3, J4} |FT −1 ]
where
J1 = u(x + Dm + mPt + m(T − 1)PT − B),
J2 = u(x + Dm − mPt + m(T − 1)PT − B),
J3 = u(x + Dm + mPt − m(T − 1)PT − B),
J4 = u(x + Dm − mPt − m(T − 1)PT − B).
Now (3) implies our statement.
6 Conclusion
One could add a solvency constraint (that is, z + ξtX ≥ 0 for all t) with minimal modifications in the arguments. Setting B := 0, utility maximization for u defined on the positive real axis could be treated in this way. It is unclear whether (and how) results of the present paper could be transferred to continuous-time models. We rely, in an essential way, on the fact that the treated portfolio optimization problem can be broken down into one-step problems. In continuous time such an approach is -
out of question.
Acknowledgments. Both authors gratefully acknowledge the support of the National Research, Development and Innovation Office (NKFIH) through grant K 143529 and also within the framework of the Thematic Excellence Program 2021 (National Research subprogramme “Artificial intelligence, large networks, data security: mathematical foundation and applications”). The second author also thanks for the support of NKFIH grant KKP 137490.
References
[1] P. Bank and Y. Dolinsky. Continuous-time duality for super-replication with transient price impact. Ann. Appl. Probab., 29:3893–3917, 2019.
[2] P. Bank, Y. Dolinsky, M. Ra ́sonyi. What if we knew what the future brings? Optimal investment for a frontrunner with price impact. Appl. Math. Opt., vol. 86, paper no. 25, 1–24, 2022.
[3] P. Bank and M. Voß. Optimal investment with transient price impact. SIAM J. Finan. Math., 10:723–768, 2019.
16

[4] L. Carassus and M. Ra ́sonyi. Maximization of non-concave utility functions in discrete-time financial market models. Math. Oper. Res., 41:146–173, 2016.
[5] P. Guasoni and M. Ra ́sonyi. Hedging, arbitrage and optimality under superlinear friction. Ann. Appl. Probab., 25:2066–2095, 2015.
[6] Yu. M. Kabanov and Ch. Stricker. A teacher’s note on no-arbitrage criteria. In: Se ́minaire de Probabilite ́s, vol. XXXV, 149–152, Springer-Verlag, 2001.
[7] J. Neveu Discrete parameter martingales. North-Holland, Amsterdam,1975.
[8] M. R ́asonyi and L. Stettner. On utility maximization in discrete-time market models. Ann. Appl. Probab., 15:1367–1395, 2005.
17

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:43.739Z
- **Text Length:** 37625 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
