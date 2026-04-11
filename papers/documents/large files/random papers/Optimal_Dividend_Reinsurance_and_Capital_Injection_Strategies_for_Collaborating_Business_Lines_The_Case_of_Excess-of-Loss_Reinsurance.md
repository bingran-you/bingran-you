# PDF Document: Boonen and Vega - 2025 - Optimal Dividend, Reinsurance and Capital Injection Strategies for Collaborating Business Lines The.pdf

**File Path:** Boonen and Vega - 2025 - Optimal Dividend, Reinsurance and Capital Injection Strategies for Collaborating Business Lines The.pdf

**Processed Date:** 2026-02-10T18:18:32.381Z

**File Size:** 419.87 KB

**Total Pages:** 31

**Extracted Pages:** 31

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3483

**Title:** Optimal Dividend, Reinsurance and Capital Injection Strategies for Collaborating Business Lines: The Case of Excess-of-Loss Reinsurance

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Optimal Dividend, Reinsurance and Capital Injection Strategies for
Collaborating Business Lines: The Case of Excess-of-Loss Reinsurance
Tim J. Boonen∗ Engel John C. Dela Vega†
Abstract
This paper considers an insurer with two collaborating business lines that must make three critical decisions: (1) dividend payout, (2) a combination of proportional and excess-of-loss reinsurance coverage, and (3) capital injection between the lines. The reserve level of each line is modeled using a diffusion approximation, with the insurer’s objective being to maximize the weighted total discounted dividends paid until the first ruin time. We obtain the value function and the optimal strategies -
in closed form. We then prove that the optimal dividend payout strategy for bounded dividend rates is of threshold type, while for unbounded dividend rates it is of barrier type. The optimal combination of proportional and excess-of-loss reinsurance is shown to be pure excess-of-loss reinsurance. We also show that the optimal level of risk ceded to the reinsurer decreases as the aggregate reserve level increases. The optimal capital injection strategy involves transferring reserves to prevent the -
ruin of one line. Finally, numerical examples are presented to illustrate these optimal strategies.
1 Introduction
Optimal dividend payout problems have been a long-standing topic in the field of actuarial science, as dividends serve as a classical metric for assessing a company’s value. In the seminal paper of de Finetti (1957), it is shown that the optimal strategy to distribute dividends is the one that maximizes the total discounted dividends paid to shareholders until bankruptcy time (i.e., the ruin time). This strategy is known as a barrier strategy, where dividends are paid only when the reserve level e-
xceeds a certain level, called the barrier. In this framework, the amount of dividends to be paid is the excess of the reserve above the barrier, effectively capping the reserves at this level. Since de Finetti (1957), numerous extensions and variations have been explored (see, e.g., Albrecher and Thonhauser, 2009; Avanzi, 2009, for comprehensive reviews). However, it is important to note that most of these papers focus on the univariate case, where the company manages reserves for a single line o-
f business. We consider an extension of the classical problem studied by de Finetti (1957), involving a company with multiple lines of business, each with its own reserves. This scenario introduces a level of complexity that requires a multivariate approach to understanding the dividend distribution. In this context, defining the ruin time is more complicated. In the univariate case, the ruin time is simply defined as the first time when a company’s reserves fall below zero. However, in the multiv-
ariate case, there are several definitions, including: (i) first ruin time: the first time when at least one reserve level falls below zero; (ii) sum ruin time: the first time when the sum of the reserves across all lines falls below zero; and (iii) simultaneous ruin time: the first time when all reserve levels fall below zero simultaneously. Consequently, much of the research in the multivariate case has focused on minimizing the probabilities of ruin (see, e.g., Asmussen and Albrecher, 2010, Cha-
pter XIII, and references therein). Although many studies focus on minimizing the probabilities of ruin in the multivariate case, fewer have specifically aimed to maximize the total discounted dividends paid. To our knowledge, Czarna and Palmowski (2011) are the first to study the maximization of total discounted dividends for two business lines, using reserve processes that follow the Crame ́r-Lundberg (CL) model (i.e., a compound Poisson process). Subsequent studies using the CL model include Li-
u and Cheung (2014), Albrecher et al. (2017),
∗Department of Statistics and Actuarial Science, School of Computing and Data Science, University of Hong Kong, China. Email: tjboonen@hku.hk.
†Department of Statistics and Actuarial Science, School of Computing and Data Science, University of Hong Kong, China. Email: ejdv@hku.hk.
1
arXiv:2511.11383v1 [math.OC] 14 Nov 2025

Azcue et al. (2019), Azcue and Muler (2021), and Strietzel and Heinrich (2022). Reserve levels modeled as diffusion processes in the multivariate setting have been explored in Gu et al. (2018), Grandits (2019), Yang et al. (2025), and Boonen et al. (2025). In addition to maximizing the total discounted dividends, managing risks across multiple lines of business is essential to ensure the sustainability of dividend payouts. Risk control in the form of reinsurance has also been studied in the multi-
variate framework of optimal dividend problems. Proportional reinsurance has been explored in the multivariate case, as presented in Czarna and Palmowski (2011), Liu and Cheung (2014), Azcue et al. (2019), Strietzel and Heinrich (2022), Yang et al. (2025), and Boonen et al. (2025). Given the complexities associated with the management of multiple business lines, effective risk management strategies are essential. One common approach is capital injection, which involves transferring reserves betwee-
n lines to support a line that is at risk of its reserves falling below zero. This mechanism, sometimes referred to as collaboration, not only mitigates the risk of insolvency for individual lines but also improves the company’s capacity to distribute dividends. In Albrecher et al. (2017), Gu et al. (2018), and Boonen et al. (2025), the rule of collaboration states that capital must be transferred from one line to another if a line is at risk of ruin, provided the transfer does not endanger the so-
lvent line. This rule is modified in Grandits (2019), in which the solvent line is not obliged to transfer capital to the insolvent line. The research agenda of this paper is to determine the optimal dividend payout, reinsurance, and capital injection strategies of an insurer with two business lines, subject to the following constraints: (1) the dividend rate may be bounded or unbounded; (2) the reinsurance contract combines proportional and excess-of-loss reinsurance; and (3) capital injections a-
re used primarily to save one line from ruin (in the univariate sense). The goal is to maximize the weighted total discounted dividends paid until the first ruin time. The related work of Boonen et al. (2025) imposes stricter limitations, allowing only a bounded dividend rate and using only proportional reinsurance. We incorporate excess-of-loss reinsurance because it serves as a common alternative risk control mechanism in the univariate context of optimal dividend payout problems. Moreover, Asmu-
ssen et al. (2000) shows that optimal excess-of-loss reinsurance outperforms optimal proportional reinsurance. When studying risk measures of terminal losses without dividends, Aboagye et al. (2025) derive the optimal design of excess-of-loss reinsurance. We summarize the main contributions of this paper:
1. We show that the optimal combination of proportional and excess-of-loss reinsurance is pure excessof-loss reinsurance. This finding aligns with the results of Centeno (1985), Zhang et al. (2007), and Liang and Guo (2011) in the univariate setting.
2. We show that the optimal dividend payout strategy for bounded dividend rates is a threshold strategy in which dividends are continuously paid at a fixed rate whenever the aggregate reserve level exceeds a threshold. We also show that for unbounded dividend rates, the optimal strategy is a barrier strategy. These findings are consistent with the results presented in Asmussen et al. (2000) within the univariate setting.
3. In the case of bounded dividend rates, we identify three scenarios based on the following conditions: (a) the sum of the maximum dividend rates of the two lines is “large enough”, (b) the maximum dividend rate of the more important line is “large enough”, and (c) the support of the claim size distribution is finite. This leads to three configurations for the reinsurance threshold level w0 and the dividend threshold levels u1 and u2: (i) w0 ≤ u1 ≤ u2; (ii) u1 < w0 ≤ u2; and (iii) u1 ≤ u2 < w0. T-
hese configurations are similar to those found in Boonen et al. (2025). We also find that the reinsurance threshold level can exceed exactly one of the dividend threshold levels, which is a possibility ruled out in Asmussen et al. (2000). For unbounded dividend rates, we identify two scenarios based on whether the support of the claim size distribution is finite.
4. We show that the (excess-of-loss) reinsurance level decreases as the aggregate reserve level increases. Moreover, in the bounded support case, the reinsurance levels of both lines remain constant simultaneously when the aggregate reserve level is sufficiently large.
The remainder of the paper is organized as follows. Section 2 introduces the model and the formulation of the problem. The gain of pure excess-of-loss reinsurance is discussed in Section 3. Section 4 presents
2

the main results for the case of bounded dividend rates, while Section 5 presents the case of unbounded dividend rates. Numerical examples are provided in Section 6. The proofs of the main results are detailed in Section 7. Section 8 concludes.
2 Model
Consider a complete probability space (Ω, F, F, P), where F := {Ft}t≥0 is a right-continuous, Pcompleted filtration to which all processes defined below, including the Brownian motions and the Poisson processes, are adapted. We consider an insurer with two collaborating lines of business and model each line’s reserve using the classical Crame ́r-Lundberg model:
Pi(t) = xi + pit −
Λi(t)
∑
k=1
Yi,k,
where, for i = 1, 2, Λi := {Λi(t)}t≥0 is a Poisson process with intensity λi > 0 that represents claim arrivals, and {Yi,k}k≥1 are independent and identically distributed (i.i.d.), nonnegative claim sizes with
common distribution Fi and finite first and second moments μ ̃i and σ ̃i2. The premium rate pi is assumed to be calculated under the expected value principle, i.e.,
pi = (1 + κi)λiμ ̃i,
where κi > 0 is the relative safety loading of Line i. The insurer has to make three decisions regarding the operation of each line:
1. Reinsurance decision. The insurer arranges a combination of proportional and excess-of-loss reinsurance in the manner of Centeno (1985): For each line, the insurer first chooses a proportional retention level θi(t) ∈ (0, 1], and then chooses an excess-of-loss retention level πi(t) ∈ [0, ∞] such that the insurer’s kth claim, net of proportional and excess-of-loss reinsurance, can be represented by min{θi(t)Yi,k, πi(t)} = θi(t)Yi,k ∧ πi(t). We assume that the reinsurer applies the same expected v-
alue principle and relative safety loading κi as the insurer; this is sometimes referred to as “cheap reinsurance”.
2. Dividend payout decision. The insurer chooses a dividend strategy to distribute profits to the shareholders of each line. Let Ci(t) ≥ 0 be the cumulative dividends paid by Line i at time t. The insurer can consider two types of dividend strategies: (1) an unbounded dividend rate: Ci(t) is an arbitrary nonnegative and nondecreasing function; and (2) a bounded dividend rate: Ci(t) satisfies
Ci(t) = ∫ t
0 ci(s)ds, where ci(s) ∈ [0, ci] and ci > 0 is the maximum possible dividend rate. For the
unbounded dividend rates, we treat C1 and C2 as singular controls.
3. Capital injection decision. We assume that the insurer can inject capital from one line to the other without incurring any additional costs. The capital injection allows the insurer to prevent a line from bankruptcy by using the available resources within the company. Let Li(t) be the cumulative amount of capital transferred to Line i from Line 3 − i. Moreover, we treat L1 and L2 as singular controls.
After the purchase of reinsurance contracts, the reserve level of Line i is given by
Rθ,π
i (t) = xi + pθ,π
i t−
Λi(t)
∑
k=1
(θi(t)Yi,k ∧ πi(t)),
where
pθ,π
i = pi − (1 + κi)E


Λi(t)
∑
k=1
(Yi,k − (θi(t)Yi,k ∧ πi(t)))

 = (1 + κi)λiE(θi(t)Yi,k ∧ πi(t)).
3

Following Grandell (1977), the diffusion approximation of {Rθ,π
i (t)}t≥0 is given by
dRi(t) = λiκiθi(t)μi
( πi(t) θi(t)
)
dt + √λiθi(t)σi
( πi(t) θi(t)
)
dWi(t),
where W1 := {W1(t)}t≥0 and W2 := {W2(t)}t≥0 are independent Brownian motions and are independent of the Poisson processes Λ1 and Λ2, and
μi(s) :=
∫s
0
[1 − Fi(y)]dy and σi2(s) :=
∫s
0
2y[1 − Fi(y)]dy.
Without loss of generality, we assume λi = 1. Write F i(y) := 1 − Fi(y) and define
Mi := inf{y ≥ 0 : F i(y) = 0} ≤ ∞.
By definition, μi(Mi) = μ ̃i and σi2(Mi) = σ ̃i2. Moreover, we have πi(t) ∈ [0, Mi]. Let θi := {θi(t)}t≥0, πi := {πi(t)}t≥0, Ci := {Ci(t)}t≥0, and Li := {Li(t)}t≥0 be the proportional reinsurance, excess-of-loss reinsurance, dividend payout, and capital injection strategies, respectively, of Line i, for i = 1, 2. Given an admissible control u := (θ1, θ2, π1, π2, C1, C2, L1, L2), the controlled reserve process of Line i, denoted by Xi := Xiu, follows the dynamics
dXi(t) = κiθi(t)μi
( πi(t) θi(t)
)
dt + θi(t)σi
( πi(t) θi(t)
)
dWi(t) − dCi(t) + dLi(t) − dL3−i(t), (2.1)
where Xi(0) = xi ≥ 0 is the initial reserve of Line i. We define the corresponding ruin time as the first ruin time defined as τ := inf{t ≥ 0 : min{X1(t), X2(t)} < 0}.
We formally define admissible strategies as follows:
Definition 2.1. A strategy u is said to be admissible if u is adapted to the filtration F and satisfies the following conditions:
(i) θi(t) ∈ (0, 1] and πi(t) ∈ [0, Mi] for i = 1, 2 and t ≥ 0;
(ii) Ci and Li are nonnegative, nondecreasing, and right continuous with left limits, for i = 1, 2.
Denote by U the set of all admissible strategies.
Remark 2.2. The constraint on the proportional reinsurance variables, θi, implies that the business lines cannot cede all risk to the reinsurer; that is, full reinsurance is not allowed. On the other hand, the excess-of-loss retention can take any nonnegative value, including infinity. We say that Fi has a bounded support if Mi < ∞, and has unbounded support otherwise. We can interpret πi(t) = Mi as Line i retaining all risk; that is, Line i does not engage in any reinsurance.
The goal of the insurer is to determine optimal dividend, (proportional and excess-of-loss) reinsurance, and capital injection strategies that maximize the weighted average of the dividend payouts from both lines up to the ruin time. That is, the insurer is faced with the following maximization problem:
V (x1, x2) := sup
u∈U
J(x1, x2; u),
J(x1, x2; u) := E
[ a
∫τ
0
e−δtdC1(t) + (1 − a)
∫τ
0
e−δtdC2(t)
] ,
(2.2)
where a ∈ [0, 1] is a weighting factor that reflects the relative importance of Line 1 for the company, δ > 0 is the discount factor, and the expectation E is taken under X1(0) = x1 and X2(0) = x2. We denote the objective function by J and the value function by V .
Remark 2.3. From the definition of the value function V , we can see that V is increasing in both arguments x1 and x2; that is, V increases as the initial reserves increase.
4

3 The Gain of Pure Excess-of-Loss Reinsurance
In this section, we will show that an optimal reinsurance, dividend payout, and capital injection strategy is of the form u0 := (1, 1, π10, π20, C10, C20, L01, L02) ∈ U ; that is, the optimal combination of proportional and excess-of-loss reinsurance strategies is the pure excess-of-loss reinsurance.
Lemma 3.1. Define
hi(s) := σi2(s)
μi2(s) .
Then, hi(s) is an increasing function for s > 0.
Proof. Taking the derivative yields
h′i(s) = 2F i(s) [sμi(s) − σi2(s)]
μi3(s) .
Since 0 ≤ Yi,k ∧ s ≤ s, we have E(Yi,k ∧ s)2 ≤ E(s(Yi,k ∧ s)) = sE(Yi,k ∧ s), and thus
σi2(s) = E(Yi,k ∧ s)2 ≤ sE(Yi,k ∧ s) = sμi(s).
This implies that h′i(s) ≥ 0, which completes the proof.
Proposition 3.2. For any fixed admissible control u = (θ1, θ2, π1, π2, C1, C2, L1, L2), where θi(t) ∈ (0, 1),
there exists an admissible control u0 = (1, 1, π10, π20, C10, C20, L01, L02) such that
J (x1, x2; u) ≤ J (x1, x2; u0).
Proof. For any fixed θi(t) ∈ (0, 1), πi(t), Ci(t), and Li(t), there exists a unique πi0(t) such that
θi(t)σi
( πi(t) θi(t)
)
= σi(πi0(t)), i = 1, 2.
Since σi is a strictly increasing function and θi(t) ∈ (0, 1), it follows that πi(t)
θi(t) > πi0(t). By Lemma 3.1,
h(πi0(t)) ≤ h
( πi(t) θi(t)
) .
It follows that
θi2(t) = σi2(πi0(t))
σi2
( πi(t) θi(t)
) ≤ μi2(πi0(t))
μi2
( πi(t) θi(t)
),
which implies that
θi(t)μi
( πi(t) θi(t)
)
≤ μi(πi0(t)).
Let
Ci0(t) := Ci(t) + κi
∫t
0
[
μi(πi0(s)) − θi(s)μi
( πi(s) θi(s)
)]
ds ≥ Ci(t),
Li0(t) := Li(t).
Then u0 is an admissible control and
dX u0
i (t) = κiμi(πi0(t))dt + σi(πi0(t))dWi(t) − dCi0(t) + dLi0(t) − dL03−i(t)
= κiθi(t)μi
( πi(t) θi(t)
)
dt + θi(t)σi
( πi(t) θi(t)
)
dWi(t) − dCi(t) + dLi(t) − dL3−i(t).
Hence, Xu0
i (t) D= Xiu(t) while Ci0(t) ≥ Ci(t) and Li0(t) = Li(t) for all t. The result then follows.
Write u1 := (1, 1, π1, π2, C1, C2, L1, L2) ∈ U . The above proposition implies the following:
V (x1, x2) = sup
u1 ∈U
J (x1, x2; u1).
Hence, we only need to consider pure excess-of-loss reinsurance strategies to solve the maximization problem in (2.2).
5

4 Bounded Dividend Rates
In this section, we consider the case in which the dividend rate of Line i is bounded above by some constant ci ∈ (0, ∞). In this case, we can represent Ci(t) as
Ci(t) =
∫t
0
ci(s) ds, ci(s) ∈ [0, ci].
We henceforth represent the dividend control by the rates c1 and c2. Using the results of the previous section, we can then rewrite the reserve process of Line i given in (2.1) as
dXi(t) = [κiμi(πi(t)) − ci(t)] dt + σi(πi(t))dWi(t) + dLi(t) − dL3−i(t),
and the value function defined in (2.2) as
V (x1, x2) = sup
u1∈U
E
[ a
∫τ
0
e−δtc1(t)dt + (1 − a)
∫τ
0
e−δtc2(t)dt
]
. (4.1)
Remark 4.1. For the case of bounded dividend rates, we can immediately observe that as the initial
reserves become sufficiently large, the lines pay the maximum dividend rates and V approaches the limit
ac1 +(1−a)c2
δ.
For all πi ∈ [0, Mi] and ci ∈ [0, ci], define the generator Lπ,c(φ) for some C2,2 function φ by
Lπ,c(φ) =
2 ∑
i=1
[
[κiμi(πi) − ci] ∂φ
∂xi
+1
2 σi2(πi) ∂2φ
∂xi2
]
− δφ + ac1 + (1 − a)c2.
We solve the problem in (4.1) via the dynamic programming principle. Using arguments similar to those in Schmidli (2008, Chapter 2.5.1), we can characterize the value function V as a solution to the following Hamilton-Jacobi-Bellman (HJB) equation:
sup
{
sup
πi ∈[0,Mi ],ci ∈[0,ci ]
Lπ,c(V ), ∂V
∂x1
− ∂V
∂x2
, ∂V
∂x2
− ∂V
∂x1
}
= 0, (4.2)
with boundary condition V (0, 0) = 0. If we can find a classical solution to the HJB equation (4.2), we can use a standard verification lemma, such as the one presented in Schmidli (2008, Theorem 2.51). This lemma essentially states that if a function satisfies the HJB equation and its boundary conditions, then the function is equal to the value function associated with the optimization problem. In this case, the classical solution we obtain will correspond to V defined in (4.1). We begin the anal-
ysis by supposing that a classical solution V to the HJB equation in (4.2) exists. Since both ∂V
∂x1 − ∂V
∂x2 ≤ 0 and ∂V
∂x2 − ∂V
∂x1 ≤ 0 must hold by (4.2), it follows that ∂V
∂x1 = ∂V
∂x2 . Hence, there
exists a univariate function g : x ∈ R+ 7→ R such that
g(x) = V (x1, x2), with x := x1 + x2 ≥ 0.
We then have the following
g′(x) = ∂V
∂xi
(x1, x2) and g′′(x) = ∂2V
∂xi∂xj
(x1, x2), i, j = 1, 2.
To solve the optimization problem supπi∈[0,Mi],ci∈[0,ci] Lπ,c(V ), we first isolate the optimization over the dividend payout variable ci:
sup
c1 ∈[0,c1 ],c2 ∈[0,c2 ]
{(a − g′(x))c1 + (1 − a − g′(x))c2
}.
This yields the following candidate optimal dividend rates
̂c1(x) =
{
0, if g′(x) > a,
c1, if g′(x) < a, and ̂c2(x) =
{
0, if g′(x) > 1 − a,
c2, if g′(x) < 1 − a.
6

Define the two constants u1 and u2 by
u1 := inf{u : g′(u) = 1 − a} and u2 := inf{u : g′(u) = a}. (4.3)
We first hypothesize that g is a concave function; that is, g′′(x) < 0 for all x. By symmetry and without loss of generality, we assume a ≤ 1
2 . Since g is concave and a ≤ 1
2 , we have u1 ≤ u2. We then have the following candidate for the optimal dividend strategies:
(̂c1(x), ̂c2(x)) =


(0, 0), if x < u1,
(0, c2), if u1 < x < u2,
(c1, c2), if x > u2.
Next, we solve the optimization over the reinsurance variable πi:
sup
π1∈[0,M1],π2∈[0,M2]
2 ∑
i=1
[
κiμi(πi)g′(x) + 1
2 σi2(πi)g′′(x)
] .
We then have the following candidate maximizer:
̂π1(x) = −κ1
g′(x)
g′′(x) and ̂π2(x) = −κ2
g′(x)
g′′(x) . (4.4)
We can express ̂π2 as
̂π2(x) = κ2
κ1
̂π1(x).
Since the capital injection decision (L1, L2) is represented as a singular control, the first-order conditions do not apply, unlike for the reinsurance and dividend controls. We will determine the optimal capital injection strategy later by examining the boundaries of specified regions. We define w0 such that it satisfies ̂π1(w0) = M1. (4.5)
The existence of w0 will be studied in Theorems 4.2, 4.3, and 4.4. By definition, we can interpret w0 as the aggregate reserve level at which the insurer chooses zero reinsurance for Line 1. We refer to w0 as
the reinsurance threshold level. Without loss of generality, we assume that M2
M1 ≥ κ2
κ1 . This assumption,
combined with (4.4), implies that the threshold for the insurer to retain all risk for Line 1 is not greater than that of Line 2. We introduce the following notations that will be used in the discussion:
N 1(y) := κ1μ1(y) + κ2μ2
( κ2
κ1
y
)
, N 2(y) := σ12(y) + σ22
( κ2
κ1
y
) ,
γ2±(y) := −N 1(y) ±
√
N 1(y)2 + 2δN 2(y)
N 2(y) ,
γ3±(y) := −(N 1(y) − c2) ±
√
(N 1(y) − c2)2 + 2δN 2(y)
N 2(y) ,
γ4−(y) := −(N 1(y) − c1 − c2) −
√
(N 1(y) − c1 − c2)2 + 2δN 2(y)
N 2(y) .
(4.6)
Write Ni := N i(M1), γ2± := γ2±(M1), γ3± := γ3±(M1), and γ4− := γ4−(M1). In addition, we define two functions ψ, ζ : (−∞, 0) 7→ R by
ψ(z) := (1 − a − γ3−z)eγ3+ ζ(z) + γ3−zeγ3− ζ(z) − a,
ζ(z) := 1
γ3+ − γ3−
ln
[ γ3−(γ4− − γ3−)z (1 − a − γ3−z)(γ3+ − γ4−)
]
. (4.7)
7

We can now present the main results. The reinsurance threshold level w0 plays an important role in the results. Its position relative to the dividend threshold levels u1 and u2 yields three mutually exclusive cases: (i) w0 ≤ u1 ≤ u2 (Theorem 4.2), (ii) u1 < w0 ≤ u2 (Theorem 4.3), and (iii) u1 ≤ u2 < w0 (Theorem 4.4). Each case has its corresponding analytical form of the value function and a dividend-reinsurance strategy (π1∗, π2∗, c∗1, c∗2). Since the capital injection strategies L∗1 and L∗2 are-
 modeled as singular controls, we obtain a uniform optimal strategy as discussed in Theorem 4.5. The main results also cover whether F1 has bounded or unbounded support (i.e., M1 < ∞ or M1 = ∞).
Theorem 4.2. Suppose (i) M1 < ∞, (ii) c1 + c2 ≥ N1 − κ1N2
2M1 + δM1
κ1 and (iii) ψ(αLB ) ≤ 0, where ψ is
defined by (4.7) and
αLB :=
[(1 − a
γ3−
− α0
)
1
{
c2≥N1− κ1N2
2M1 + δM1
κ1
} + α0
]
1
{
N1> κ1N2
2M1
}
+
[( 1 − a
γ3−
−α
)
1
{
c2≥ δN2
2N1
}+α
]
1
{
N1≤ κ1N2
2M1
},
α0 := (1 − a)γ3+
γ3+ − γ3−
[ N1
δ − κ1N2
2δM1
−1
γ3+
− c2
δ
] ,
α := − (1 − a)γ3+
γ3+ − γ3−
(1
γ3+
+ c2
δ
) .
(4.8)
We have the following results:
1. w0 defined in (4.5) exists and is given by
w0 = G(M1),
where
G(y) :=
∫y
0
σ12(z) + σ22
( κ2
κ1 z
)
2κ1zμ1(z) + 2κ2zμ2
( κ2
κ1 z
)
+ 2δ
κ1 z2 − κ1
(
σ12(z) + σ22
( κ2
κ1 z
)) dz, (4.9)
and u1 and u2, defined in (4.3), are explicitly given by
u1 = w0 + 1
γ2+ − γ2−
ln
( α2−(γ2−α3 − 1) α2+(1 − γ2+α3)
) ,
and u2 = u1 + 1
γ3+ − γ3−
ln
( K3−γ3−(γ4− − γ3−)
K3+γ3+(γ3+ − γ4−)
) ,
(4.10)
where
α2+ := −γ2− − κ1
M1
γ2+(γ2+ − γ2−) , α2− := γ2+ + κ1
M1
γ2−(γ2+ − γ2−) , (4.11)
α3 := 1
γ3+
+ c2
δ+
(
1 − γ3−
γ3+
) K3−
1 − a , K3+ := 1
γ3+
(1 − a − K3−γ3−) , (4.12)
and K3− is the unique solution to ψ(z) = 0 on (αLB, αUB) with
αUB := (1 − a)(γ3+ − γ4−)
γ3−(γ3+ − γ3−) .
The relation w0 ≤ u1 ≤ u2 holds.
2. The function g, defined by
g(x) =


K1
∫x
0 exp
[∫ w0 z
κ1
G−1(y) dy
]
dz if x < w0,
K1
[α2+eγ2+(x−w0) + α2−eγ2−(x−w0)] if w0 ≤ x < u1,
K3+eγ3+(x−u1) + K3−eγ3−(x−u1) + (1−a)c2
δ if u1 ≤ x < u2,
a
γ4− eγ4−(x−u2) + ac1+(1−a)c2
δ if x ≥ u2,
(4.13)
8

where G−1 is the inverse of G defined in (4.9) and
K1 = (1 − a)
[
α2+γ2+eγ2+(u1−w0) + α2−γ2−eγ2−(u1−w0)]−1 , (4.14)
is a classical solution to the HJB equation in (4.2) and thus equals the value function V of the optimization problem in (2.2). Moreover, g is strictly concave.
3. The optimal reinsurance and dividend strategies (π1∗, π2∗, c∗1, c∗2) are given by
(π1∗, π2∗, c∗1, c∗2)(x) =


(
G−1(x), κ2
κ1 G−1(x), 0, 0
)
if x < w0,
(
M1, κ2
κ1 M1, 0, 0
)
if w0 ≤ x < u1,
(
M1, κ2
κ1 M1, 0, c2
)
if u1 ≤ x < u2,
(
M1, κ2
κ1 M1, c1, c2
)
if x ≥ u2.
We first discuss the optimal dividend strategies (c∗1, c∗2). When the aggregate reserve level is low (i.e., x < u1), the lines do not distribute dividends. Recall that we assume greater importance assigned to
Line 2 (i.e., a ≤ 1
2 ). As soon as the first threshold u1 is crossed, Line 2 pays dividends at the maximum rate and Line 1 has to wait until the second threshold u2 is crossed.
For the optimal reinsurance strategy (π1∗, π2∗), recall that we also assume that M2
M1 ≥ κ2
κ1 . This ensures
that Line 1 does not purchase excess-of-loss reinsurance while Line 2 retains a constant level of risk on incoming claims when the aggregate reserve level is sufficiently large (i.e., x > w0). Under condition (i), the distribution function F1 has bounded support, which implies that Line 1
has bounded claim sizes. A sufficient condition for conditions (ii) and (iii) is c2 > N1 − κ1N2
2M1 + δM1
κ1 .
This suggests that the maximum dividend rate of Line 1 can be relatively low while still satisfying the total maximum dividend rate condition. We also remark that the unique root of ψ ensures that g is differentiable at x = u2. The next theorem discusses the case when conditions (i) and (ii) of Theorem 4.2 are still satisfied, while condition (iii) is not.
Theorem 4.3. Suppose (i) M1 < ∞, (ii) c1 + c2 ≥ N1 − κ1N2
2M1 + δM1
κ1 and (iii) ψ(αLB) > 0, where
αLB := (α0 − α) 1{
c2> δN2
2N1
} + α. (4.15)
Here, α0 and α are defined as in Theorem 4.2. We then have the following results:
1. w0 defined in (4.5) exists and is given by H(w0) = M1, where H satisfies the following differential equation
d
dx H(x) =
2κ1zμ1(H(x)) + 2κ2zμ2
( κ2
κ1 H(x)
)
+ 2δ
κ1 [H(x)]2 − 2c2H(x)
σ12(H(x)) + σ22
( κ2
κ1 H(x)
) − κ1, (4.16)
and u1 and u2 defined in (4.3) are explicitly given by
u1 = w0 − 1
γ3+ − γ3−
ln

 K3−γ3−
(
γ3− + κ1
M1
)
K3+γ3+
(
− κ1
M1 − γ3+
)

 , and
u2 = w0 + 1
γ3+ − γ3−
ln

 (γ4− − γ3−)
(
− κ1
M1 − γ3+
)
(γ3+ − γ4−)
(
γ3− + κ1
M1
)

,
(4.17)
where K3+ is defined in (4.12) and K3− is the unique solution to ψ(z) = 0 on
( 1−a
γ3− , αLB
)
. More
over, the relation u1 < w0 ≤ u2 holds.
9

2. The function g, defined by
g(x) =


(1 − a) ∫ x
0 exp
[∫ u1 z
κ1
G−1(y) dy
]
dz if x < u1,
(1 − a)
[∫ x
u1 exp
[∫ u1 z
κ1
H(y) dy
]
dz + ∫ u1
0 exp
[∫ u1 z
κ1
G−1(y) dy
]
dz
]
if u1 ≤ x < w0,
K3+eγ3+(x−u1) + K3−eγ3−(x−u1) + (1−a)c2
δ if w0 ≤ x < u2,
a
γ4− eγ4−(x−u2) + ac1+(1−a)c2
δ if x ≥ u2,
where G−1 is the inverse of G defined in (4.9), is a classical solution to the HJB equation in (4.2) and thus equals the value function V of the optimization problem in (2.2). In addition, g is strictly concave.
3. The optimal reinsurance and dividend strategies (π1∗, π2∗, c∗1, c∗2) are given by
(π1∗, π2∗, c∗1, c∗2)(x) =


(
G−1(x), κ2
κ1 G−1(x), 0, 0
)
if x < u1,
(
H(x), κ2
κ1 H(x), 0, c2
)
if u1 ≤ x < w0,
(
M1, κ2
κ1 M1, 0, c2
)
if w0 ≤ x < u2,
(
M1, κ2
κ1 M1, c1, c2
)
if x ≥ u2.
By comparing Theorems 4.2 and 4.3, we can observe notable similarities in the optimal reinsurance and dividend strategies in both cases. The main distinction is the form of the retention level when the aggregate reserve level is between w0 and u1. Moreover, Theorem 4.2 provides an explicit expression for w0, whereas in Theorem 4.3, w0 is presented implicitly.
In this scenario, a necessary condition is 0 < c2 < N1 − κ1N2
2M1 + δM1
κ1 , which means that the maximum
dividend rate of Line 1, c1, must adequately compensate for the balance arising from the maximum
dividend rate of Line 2 to achieve a minimum total of N1 − κ1N2
2M1 + δM1
κ1 . This suggests that Line 1
may have a larger maximum dividend rate than Line 2, which could be strategically advantageous in improving overall financial performance by setting a higher maximum dividend rate. It is important to note that Asmussen et al. (2000) show that having a reinsurance threshold level that exceeds the dividend threshold level is not possible in the univariate case. However, in our case, this scenario is possible. The next theorem discusses the case in which either condition (i) or condition (ii) of Theo-
rems 4.2 and 4.3 does not hold.
Theorem 4.4. Suppose that either (i) M1 = ∞ or (ii) c1 + c2 < N1 − κ1N2
2M1 + δM1
κ1 holds. We have the
following results:
1. w0 defined in (4.5) is infinite (w0 = ∞), u1 defined in (4.3) is the unique solution to ∫x
u2
κ1
H(y) dy = ln
(a
1−a
)
(4.18)
in (0, u2), and u2 defined in (4.3) satisfies
H(u2) = M0,
where H satisfies (4.16) and M0 is a solution to
− κ1
y = γ4−(y)
in (0, M1). Moreover, the relation u1 ≤ u2 < w0 holds.
2. The function g, defined by
g(x) =


(1 − a) ∫ x
0 exp
[∫ u1 z
κ1
G−1(y) dy
]
dz if x < u1,
(1 − a)
[∫ x
u1 exp
[∫ u1 z
κ1
H(y) dy
]
dz + ∫ u1
0 exp
[∫ u1 z
κ1
G−1(y) dy
]
dz
]
if u1 ≤ x < u2,
a
γ4−(M0) eγ4−(M0)(x−u2) + ac1+(1−a)c2
δ if x ≥ u2,
10

where G−1 is the inverse of G defined in (4.9), is a classical solution to the HJB equation in (4.2) and thus equals the value function V of the optimization problem in (2.2). In addition, g is strictly concave.
3. The optimal reinsurance and dividend strategies (π1∗, π2∗, c∗1, c∗2) are given by
(π1∗, π2∗, c∗1, c∗2)(x) =


(
G−1(x), κ2
κ1 G−1(x), 0, 0
)
if x < u1,
(
H(x), κ2
κ1 H(x), 0, c2
)
if u1 ≤ x < u2,
(
M0, κ2
κ1 M0, c1, c2
)
if x ≥ u2.
Under condition (i), the support of the distribution function F1 is unbounded, which implies that w0
defined in (4.5) does not exist. Under condition (ii), the two lines can pay at most N1 − κ1N2
2M1 + δM1
κ1 in
total. This frees up some of the reserves, allowing the insurer to purchase more reinsurance. Similar to the results in Asmussen et al. (2000), a reinsurance threshold that exceeds all dividend thresholds is not possible. We now discuss the optimal capital injection strategy. We partition the domain of the reserve level pair (x1, x2) ∈ R2+ into seven regions (see Figure 1). Define the constants δi, i = 0, 1, 2, corresponding to each of the three cases in Theorems 4.2, 4.3, and 4.4, by
(δ0, δ1, δ2) =


(w0, u1, u2) if w0 ≤ u1 ≤ u2,
(u1, w0, u2) if u1 < w0 ≤ u2,
(u1, u1, u2) if u1 ≤ u2 < w0.
The seven regions Ai, i = 1, 2, · · · , 7, are defined as follows (see Figure 1):
• A1 = {(x1, x2) : x1 ≥ 0, x2 > δ2},
• A2 = {(x1, x2) : x1 > 0, x2 ∈ [0, δ2], x1 + x2 > δ2},
• A3 = {(x1, x2) : x1 ≥ 0, x2 ∈ (δ1, δ2], x1 + x2 ≤ δ2},
• A4 = {(x1, x2) : x1 > 0, x2 ∈ [0, δ1], x1 + x2 ∈ (δ1, δ2]},
• A5 = {(x1, x2) : x1 ≥ 0, x2 ∈ (δ0, δ1], x1 + x2 ≤ δ1},
• A6 = {(x1, x2) : x1 > 0, x2 ∈ [0, δ0], x1 + x2 ∈ (δ0, δ1]},
• A7 = {(x1, x2) : x1 ≥ 0, x2 ≥ 0, x1 + x2 ≤ δ0}.
Theorem 4.5. The optimal capital injection strategy is given by one of the following cases:
1. If x ∈ A1 and Line 1 reaches zero, Line 2 transfers an amount of x2 − δ2 to Line 1, and we proceed to region A2. If Line 1 does not reach zero, we remain in A1 until we move to region A2 or A3.
2. If x ∈ A2 and Line 2 reaches zero, Line 1 transfers an amount of x1 − δ2 to Line 2. We remain in A2 until we move to region A1, A3, or A4, regardless of whether Line 2 reaches zero.
3. If x ∈ A3 and Line 1 reaches zero, Line 2 transfers an amount of x2 − δ1 to Line 1, and we proceed to region A4. If Line 1 does not reach zero, we remain in A3 until we move to region A2, A4, or A5.
4. If x ∈ A4 and Line 2 reaches zero, Line 1 transfers an amount of x1 − δ1 to Line 2. We remain in A4 until we move to region A2, A3, A5, or A6, regardless of whether Line 2 reaches zero.
5. If x ∈ A5 and Line 1 reaches zero, Line 2 transfers an amount of x2 − δ0 to Line 1, and we proceed to region A6. If Line 1 does not reach zero, we stay in A5 until we move to region A4, A6, or A7.
6. If x ∈ A6 and Line 2 reaches zero, Line 1 transfers an amount of x1 − δ0 to Line 2. We remain in A6 until we move to region A4, A5, or A7, regardless of whether Line 2 reaches zero.
7. If x ∈ A7, we remain in A7 until we move to region A6. The problem ends when the reserves exit the nonnegative quadrant.
11

x1
x2
(0, δ2)
(δ2, 0)
(0, δ1)
(δ1, 0)
(0, δ0)
(δ0, 0)
x2 = δ2
A7 A6
A4
A5 A2
A3
A1
x1+x2=δ0
x1+x2=δ1
x1+x2=δ2
x2 = δ1
x2 = δ0
Figure 1: Regions for Capital Injection Decisions
5 Unbounded Dividend Rates
In this section, we consider the case in which there are no restrictions on the dividend rates of both lines. The corresponding HJB equation is given by:
sup
{
sup
πi∈[0,Mi]
Lπ(V ), ∂V
∂x1
− ∂V
∂x2
, ∂V
∂x2
− ∂V
∂x1
, a − ∂V
∂x1
, 1 − a − ∂V
∂x2
}
= 0,
with boundary condition V (0, 0) = 0 and
Lπ(φ) :=
2 ∑
i=1
[
κiμi(πi) ∂φ
∂xi
+1
2 σi2(πi) ∂2φ
∂xi2
]
, φ ∈ C2,2.
The first, fourth, and fifth terms within the outer supremum function can be handled using arguments similar to those in Schmidli (2008, Proposition 2.54). The second and third terms arise from the capital injection strategies modeled as singular controls. As in the previous section, a standard verification lemma for unbounded dividend rates implies that a classical solution, if it exists, is the value function that solves the associated optimization problem. We now present the main results for th-
e unbounded dividend rates. Two cases arise depending on whether M1 is finite (Theorem 5.1) or infinite (Theorem 5.2). As in the previous section, each case
has its corresponding analytical form of the value function and a reinsurance strategy (π1∗, π2∗). Since the dividend payout strategies C1 and C2 are also modeled as singular controls, similar to the capital
injection strategies, we obtain a uniform optimal strategy (C1∗, C2∗, L∗1, L∗2) in Theorem 5.3.
Theorem 5.1. Suppose M1 < ∞. We have the following results:
1. w0 defined in (4.5) exists and is given by
w0 = G(M1),
where G is defined in (4.9), and u1 defined in (4.3) is explicitly given by
u1 = w0 + 1
γ2+ − γ2−
ln
( γ2−(κ1 + γ2+M1) γ2+(κ1 + γ2−M1)
)
, (5.1)
where γ2± equals γ2±(M1) given in (4.6). The relation w0 ≤ u1 holds.
12

2. The function g, defined by
g(x) =


K1
∫x
0 exp
[∫ w0 z
κ1
G−1(y) dy
]
dz if x < w0,
1−a
γ2+ γ2− (γ2+ −γ2− )
[γ22+eγ2−(x−u1) − γ22−eγ2+(x−u1)] if w0 ≤ x < u1,
(1 − a) [x − u1 + N1
δ
] if x ≥ u1,
(5.2)
where G−1 is the inverse of G defined in (4.9), N1 equals N 1(M1) defined in (4.6), and
K1 = 1 − a
γ2+ − γ2−
[
γ2+eγ2−(w0−u1) − γ2−eγ2+(w0−u1)]
,
is a classical solution to the HJB equation in (4.2) and thus equals the value function V of the optimization problem in (2.2). Moreover, g is concave.
3. The optimal reinsurance strategy (π1∗, π2∗) is given by
(π1∗, π2∗)(x) =


(
G−1(x), κ2
κ1 G−1(x)
)
if x < w0,
(
M1, κ2
κ1 M1
)
if x ≥ w0.
Similar to the bounded case where w0 ≤ u1, Theorem 5.1 shows that the optimal reinsurance strategy remains constant for both lines when the aggregate reserve levels reach the threshold w0.
Theorem 5.2. Suppose M1 = ∞. We have the following results:
1. w0 defined in (4.5) is infinite (w0 = ∞) and u1 defined in (4.3) is explicitly given by
u1 = G(∞) := yli→m∞ G(y),
where G is defined by (4.9). The relation u1 < w0 holds.
2. The function g, defined by
g(x) =
{
(1 − a) ∫ x
0 exp
[∫ u1 z
κ1
G−1(y) dy
]
dz if x < u1,
(1 − a) [x − u1 + N1
δ
] if x ≥ u1, (5.3)
where G−1 is the inverse of G defined in (4.9) and N1 equals N 1(M1) defined in (4.6), is a classical solution to the HJB equation in (4.2) and thus equals the value function V of the optimization problem in (2.2). Moreover, g is concave.
3. The optimal reinsurance strategy (π1∗, π2∗) is given by
(π1∗, π2∗)(x) =
(
G−1(x), κ2
κ1
G−1(x)
)
, x < u1.
Theorem 5.2, in conjunction with Theorem 5.3 below, implies that the aggregate reserve level must remain below x = u1 since the aggregate reserves above u1 are transferred between lines and are immediately paid as dividends. For the optimal dividend payout and capital injection strategy, we partition the domain of the reserve level pair (x1, x2) ∈ R2+ into 3 regions (see Figure 2). The three regions Ai, i = 1, 2, 3, are defined as follows:
• A1 = {(x1, x2) : x2 ≥ 0, x1 > u1},
• A2 = {(x1, x2) : x1 ∈ [0, u1], x2 > 0, x1 + x2 > u1},
• A3 = {(x1, x2) : x1 ≥ 0, x2 ≥ 0, x1 + x2 ≤ u1}.
Theorem 5.3. The optimal dividend payout and capital injection strategy is given by one of the following cases:
1. If x ∈ A1, Line 1 transfers an amount x1 − u1 to Line 2, and we proceed to region A2.
2. If x ∈ A2, Line 2 pays x1 + x2 − u1 directly as dividends, and we proceed to region A1.
3. If x ∈ A3, no dividends are paid and we remain in A3 until we move to region A2. The problem ends when the reserves exit the nonnegative quadrant.
13

x1
x2
(0, u1)
(u1, 0)
A1
A2
A3
x1+x2=u1
x1 = u1
Figure 2: Regions for Dividend Payout and Capital Injection Decisions
6 Numerical Examples
In this section, we present several numerical examples to gain further insight into the main results in Sections 4 and 5. Since the capital injection strategies were presented in Theorems 4.5 and 5.3 and the dividend payout strategy is a threshold strategy in the bounded-dividend case and a singular control in the unbounded-dividend case, we focus on illustrating the optimal (excess-of-loss) reinsurance strategies for each of the main results, along with their corresponding value functions. We fix-
 the following parameters: κ1 = 4, κ2 = 2, δ = 0.5, and a = 0.3. For the claim size distributions F1 and F2 in the bounded support case, we use uniform distributions on [0, 1] and [0, 1.5], respectively, which correspond to M1 = 1 and M2 = 1.5. In the unbounded support case (M1 = M2 = ∞), we use exponential distributions with parameters 1 and 1.5. Figures 3 to 7 display the value functions on the left and the reinsurance strategies on the right. The vertical dotted lines represent the threshold le-
vels. With these parameters, the optimal reinsurance (retention) level for Line 2 is exactly half that of Line 1: κ2
κ1 = 1
2 . For uniformly distributed claim sizes, those in Lines 1 and 2 are capped at M1 = 1 and
M2 = 1.5, respectively. This means that if the optimal excess-of-loss retention level for Line 1 is equal to 1, then the insurer retains all risk. For an exponential distribution, claim sizes have no upper bound and can take any value in [0, ∞). Figures 3 to 5 correspond to the main results for the bounded dividend rates in Section 4. The maximum dividend rates of the business lines vary, and their sum decreases noticeably across the three figures. Figures 6 and 7 correspond to the main results fo-
r the unbounded dividend rates in Section 5. The optimal excess-of-loss retention level increases as the aggregate reserve level increases across all examples. Equivalently, the amount of risk ceded to the reinsurer decreases as the aggregate reserve level increases. By definition, the reinsurance threshold level w0 indicates that the insurer should retain all risks of Line 1 once the aggregate reserve level exceeds it. This is evident in Figures 3, 4, and 6, where the retention levels for both li-
nes remain constant (i.e., flat) when the aggregate reserve level is greater than w0. In the scenario where w0 does not exist, as stated in Theorem 4.4, the insurer must always transfer a portion of the risk to the reinsurer, regardless of the aggregate reserve level. Figure 5 illustrates this scenario, where the retained risk for Line 1 is capped at M0 = 0.71. In Figure 7, it is worth noting that the level of retained risk increases without bound, with x = u1 = 1.25 acting as a vertical asymptote-
 for the reinsurance level. As stated in Theorem 5.3, the aggregate reserve level must remain below u1 since any reserve above u1 is allocated to dividends and capital transfers between lines. The value functions are all increasing and concave. For the bounded dividend rates (Figures 3 to 5), they approach the limit ac1+(1−a)c2
δ . In particular, the value function in Figure 5 approaches this limit more quickly than in the other cases, attributed to the smaller values of u1 and u2.
14

0.0 0.5 1.0 1.5
01234
x
V(x)
0.0 0.5 1.0 1.5
0.0 0.2 0.4 0.6 0.8 1.0
x
θ1(x), θ2(x)
θ1(x)
θ2(x)
Figure 3: Uniformly distributed claims: κ1 = 4, κ2 = 2, δ = 0.5, a = 0.3, c1 = 3, c2 = 2 (M1 = 1, M2 = 1.5, w0 = 0.19 < u1 = 0.24 < u2 = 0.87, corresponding to Theorem 4.2)
0.0 0.2 0.4 0.6 0.8 1.0
0.0 0.5 1.0 1.5 2.0 2.5 3.0
x
V(x)
0.0 0.2 0.4 0.6 0.8 1.0
0.0 0.2 0.4 0.6 0.8 1.0
x
θ1(x), θ2(x)
Figure 4: Uniformly distributed claims: κ1 = 4, κ2 = 2, δ = 0.5, a = 0.3, c1 = 3, c2 = 1 (M1 = 1, M2 = 1.5, u1 = 0.17 < w0 = 0.22 < u2 = 0.57, corresponding to Theorem 4.3)
0.0 0.2 0.4 0.6 0.8 1.0
0.0 0.2 0.4 0.6 0.8 1.0 1.2
x
V(x)
0.0 0.2 0.4 0.6 0.8 1.0
0.0 0.2 0.4 0.6 0.8 1.0
x
θ1(x), θ2(x)
Figure 5: Uniformly distributed claims: κ1 = 4, κ2 = 2, δ = 0.5, a = 0.3, c1 = 1, c2 = 0.5 (M0 = 0.71, M1 = 1, M2 = 1.5, u1 = 0.09 < u2 = 0.19, corresponding to Theorem 4.4)
15

0.0 0.2 0.4 0.6 0.8 1.0
012345
x
V(x)
0.0 0.2 0.4 0.6 0.8 1.0
0.0 0.2 0.4 0.6 0.8 1.0
x
θ1(x), θ2(x)
θ1(x)
θ2(x)
Figure 6: Uniformly distributed claims: κ1 = 4, κ2 = 2, δ = 0.5, a = 0.3 (M1 = 1, M2 = 1.5, w0 = 0.19 < u1 = 0.52, corresponding to Theorem 5.1)
0.0 0.5 1.0 1.5 2.0
0 2 4 6 8 10
x
V(x)
0.0 0.5 1.0 1.5 2.0
0 2 4 6 8 10
x
θ1(x), θ2(x)
θ1(x)
θ2(x)
Figure 7: Exponentially distributed claims: κ1 = 4, κ2 = 2, δ = 0.5, a = 0.3 (M1 = ∞, M2 = ∞, u1 = 1.25, corresponding to Theorem 5.2)
7 Proof of Main Results
In this section, we provide the proofs of Theorems 4.2, 4.3, 4.4, 5.1, and 5.2.
7.1 Proof of Theorem 4.2
Deriving the analytical solution
Suppose for now that w0 ≤ u1 ≤ u2 and that w0 exists. In the region {x < w0}, we have π1∗(x) = ̂π1(x), where ̂π1 is given in (4.4), and the corresponding HJB equation becomes
0=
[
κ1μ1(π1∗(x)) + κ2μ2
( κ2
κ1
π1∗(x)
)
− κ1
2π1∗(x)
(
σ12(π1∗(x)) + σ22
( κ2
κ1
π1∗(x)
))]
g′(x) − δg(x). (7.1)
Differentiating with respect to x leads to
0=
[
κ1 dπ1∗(x)
dx
2(π1∗(x))2
(
σ12(π1∗(x)) + σ22
( κ2
κ1
π1∗(x)
))
−δ
]
g′(x)
+
[
κ1μ1(π1∗(x)) + κ2μ2
( κ2
κ1
π1∗(x)
)
− κ1
2π1∗(x)
(
σ12(π1∗(x)) + σ22
( κ2
κ1
π1∗(x)
))]
g′′(x).
16

Using (4.4) once more yields
0=
[
κ21 + κ1 dπ1∗(x)
dx
2(π1∗(x))2
(
σ12(π1∗(x)) + σ22
( κ2
κ1
π1∗(x)
))
− κ21
π1∗(x) μ1(π1∗(x)) − κ1κ2
π1∗(x) μ2
( κ2
κ1
π1∗(x)
)
−δ
]
g′(x).
Since g is assumed to be strictly increasing and concave, we obtain the following differential equation for π1∗:
dπ1∗(x)
dx = dG(y)
dy
∣∣∣∣∣y=π1∗(x)
,
where G is defined by (4.9). It can be shown that G is continuous and strictly increasing; hence, its inverse, denoted by G−1, exists. Since π1∗(0) = 0, we then obtain
π1∗(x) = G−1(x).
Moreover, since dπ1∗(x)
dx > 0 and π1∗(0) = 0, there exists an xM1 > 0 such that π1∗(xM1) = M1. Choosing w0 = xM1 proves the existence of w0 defined in (4.5) and that w0 = G(M1). From (4.4), we can see that
− κ1
π1∗(x) = g′′(x)
g′(x) = d
dx ln g′(x). Hence, a solution to the HJB equation (7.1) that satisfies g(0) = 0 is given by
g(x) = K1
∫x
0
exp
[∫ w0
z
κ1
G−1(y) dy
]
dz,
where K1 > 0 is an unknown constant.
By the definition of w0 and the constraint π1 ∈ [0, M1], it follows that π1∗(x) = M1 for x ≥ w0. It is
easy to see that (π1∗, π2∗)(x) =
(
M1, κ2
κ1 M1
)
since M2
M1 ≥ κ2
κ1 holds. Hence, in the region {w0 < x < u1},
the HJB equation becomes
0= 1
2 N2g′′(x) + N1g′(x) − δg(x), (7.2)
where N1 = N 1(M1) and N2 = N 2(M1) are defined in (4.6). The solution is given by
g2(x) = K2+eγ2+(x−w0) + K2−eγ2−(x−w0), (7.3)
where γ2± := γ2±(M1) are given by (4.6) and K2± are unknown constants. In the region {u1 < x < u2}, the HJB equation becomes
0= 1
2 N2g′′(x) + (N1 − c2)g′(x) − δg(x) + (1 − a)c2, (7.4)
whose solution is given by
g3(x) = K3+eγ3+(x−u1) + K3−eγ3−(x−u1) + (1 − a)c2
δ , (7.5)
where γ3± := γ3±(M1) are given by (4.6) and K3± are unknown constants. In the region {x > u2}, the HJB equation becomes
0= 1
2 N2g′′(x) + (N1 − c1 − c2)g′(x) − δg(x) + ac1 + (1 − a)c2, (7.6)
whose solution is given by
g4(x) = K4−eγ4−(x−u2) + ac1 + (1 − a)c2
δ , (7.7)
where γ4− := γ4−(M1) is defined in (4.6). We conjecture the following solution:
g(x) =


K1
∫x
0 exp
[∫ w0 z
κ1
G−1(y) dy
]
dz if x < w0,
K2+eγ2+(x−w0) + K2−eγ2−(x−w0) if w0 < x < u1,
K3+eγ3+(x−u1) + K3−eγ3−(x−u1) + (1−a)c2
δ if u1 < x < u2,
K4−eγ4−(x−u2) + ac1+(1−a)c2
δ if x > u2,
(7.8)
17

where w0 = G(M1) and K1, K2±, K3±, K4−, u1, u2 are yet to be determined. We now solve for the unknowns using the principle of smooth fit. At x = w0, we have the following system of equations:
K1 = K2+γ2+ + K2−γ2−
−K1
κ1
M1
= K2+γ22+ + K2−γ22−,
whose solution is given by
K2+ = K1α2+ and K2− = K1α2−,
where α2± are given in (4.11). Recall that γ2− < 0 < γ2+. It is then easy to see that α2− < 0. To prove
α2+ > 0, it suffices to show that −γ2− − κ1
M1 > 0. This result is proved in the following lemma.
Lemma 7.1. − κ1
γ2− < M1.
Proof. It holds that
σ ̃12 = σ12(M1) =
∫ M1
0
x2 dF1(x) < M1
∫ M1
0
x dF1(x) = M1μ1(M1) = M1μ ̃1
and
σ22
( M1κ2
κ1
) =
∫
M1 κ2 κ1
0
x2 dF2(x) < 2M1κ2
κ1
∫
M1 κ2 κ1
0
x dF2(x) = 2M1κ2
κ1
μ2
( M1κ2
κ1
) ,
Then,
− κ1
γ2−
= κ1N2
N1 + √N12 + 2δN2
< κ1N2
2N1
<
M1
[
N1 + κ2μ2
( M1κ2 κ1
)]
2N1
< M1,
which proves the result.
We can then rewrite g2 as
g2(x) = K1
[
α2+eγ2+(x−w0) + α2−eγ2−(x−w0)]
,
where K1 > 0 is still unknown.
By the definition of u1 in (4.3), we have g′(u1) = 1 − a. Hence,
1 − a = g′3(u1) = K3+γ3+ + K3−γ3−,
which is equivalent to K3+ defined in (4.12). It suffices to show that g2(u1) = g3(u1) and g′2(u1) = g′3(u1) to ensure that g is twice continuously differentiable at x = u1. We then have the following system of equations:
K1
[
α2+eγ2+(u1−w0) + α2−eγ2−(u1−w0)]
= (1 − a)α3
K1
[
α2+γ2+eγ2+(u1−w0) + α2−γ2−eγ2−(u1−w0)]
= (1 − a),
(7.9)
where α3 is defined in (4.12). From the second equation in (7.9), we obtain K1 defined in (4.14). Dividing the first equation in (7.9) by the second equation yields
α2+eγ2+(u1−w0) + α2−eγ2−(u1−w0)
α2+γ2+eγ2+(u1−w0) + α2−γ2−eγ2−(u1−w0) = α3,
which is equivalent to u1 defined in (4.10). We point out that we have yet to establish that u1 is well defined. By the definition of u2, we have g′(u2) = a. Hence,
a = g′4(u2) = K4−α4−,
or, equivalently,
K4− = a
γ4−
.
18

It suffices to show that g′3(u2) = g′4(u2) and g′3′(u2) = g′4′(u2) to ensure that g is twice continuously differentiable at x = u2. We then have the following system of equations:
K3+γ3+eγ3+(u2−u1) + K3−γ3−eγ3−(u2−u1) = a
K3+γ32+eγ3+(u2−u1) + K3−γ32−eγ3−(u2−u1) = aγ4−. (7.10)
Dividing the second equation by the first equation yields
K3+γ32+eγ3+(u2−u1) + K3−γ32−eγ3−(u2−u1)
K3+γ3+eγ3+(u2−u1) + K3−γ3−eγ3−(u2−u1) = γ4−,
which is equivalent to u2 defined in (4.10), where K3− is still unknown. Thus, we have obtained the form of the value function in (4.13). The next steps are (i) to establish that the formulas for u1 and u2 in (4.10) are well defined, (ii) to guarantee that w0 ≤ u1 ≤ u2, and (iii) to show that g is increasing and concave.
Establishing the bounds for K3−
We now establish the bounds for K3−. Since the candidate value function g must be positive for x > 0, we must have α3 > 0 from the first equation in (7.9). Since α2− < 0 < α2+, we must have 1 − γ2+α3 > 0
for u1 in (4.10) to be well defined. Combining these inequalities for α3 yields 0 < α3 < 1
γ2+ , which is equivalent to
α < K3− < (1 − a)γ3+
γ3+ − γ3−
(1
γ2+
−1
γ3+
− c2
δ
)
=: α, (7.11)
where α is defined in (4.8). It is clear that α < α since 1
γ2+ > 0.
We have now established conditions under which (4.10) is well defined; however, these conditions do not guarantee that w0 ≤ u1. The following lemma provides necessary and sufficient conditions for α0, defined in (4.8), to be a lower bound of K3− that is greater than α.
Lemma 7.2. α0 > α if and only if
N1 − κ1N2
2M1
> 0.
Proof. From (7.11) and (4.8), it follows that α0 > α if and only if N1
δ − κ1N2
2δM1 > 0. The result follows directly.
The following lemma proves that α0 does not exceed the upper bound α.
Lemma 7.3. α0 < α.
Proof. We can rewrite N1
δ − κ1N2
2δM1 < 1
γ2+ as
(
2N1 − κ1
M1
N2
) (√
N12 + 2δN2 − N1
)
< 2δN2,
which immediately holds if N1 < κ1N2
2M1 . Suppose N1 ≥ κ1N2
2M1 . We can then rewrite the above inequality
as (
2N1 − κ1
M1
N2
)√
N12 + 2δN2 < 2δN2 + 2N12 − κ1
M1
N1N2.
Squaring both sides yields N1 − κ1N2
2M1 + δM1
κ1 > 0, which proves the result.
The following result gives a necessary and sufficient condition to ensure that w0 ≤ u1.
Lemma 7.4. w0 ≤ u1 if and only if
α + (α0 − α) · 1{N1> κ1N2
2M1 } < K3− < α.
19

Proof. From (4.10), w0 ≤ u1 is equivalent to
α2−(γ2−α3 − 1)
α2+(1 − γ2+α3) ≥ 1. (7.12)
Moreover, K3− < α is equivalent to 1 − γ2+α3 > 0, and K3− > α is equivalent to α3 > 0. Hence, we can rewrite (7.12) as
α3 ≥ N1
δ − κ1N2
2δM1
,
or, equivalently,
K3− ≥ α0.
Using Lemma 7.2 completes the proof.
We now determine the signs of K3±. First, we note that a sufficient condition such that g is increasing, particularly in the region {u1 < x < u2}, is K3− ≤ 0 ≤ K3+. The following lemma proves that K3− < 0.
Lemma 7.5. K3− < 0.
Proof. From (7.11), it suffices to prove that
c2
δ≥ 1
γ2+
−1
γ3+
.
Write k := 2δN2 > 0. Suppose otherwise that c2
δ< 1
γ2+ − 1
γ3+ . This is equivalent to
2c2
√(N1 − c2)2 + k ·
√
N12 + k − c2 (k − 2N1(N1 − c2))
< (2N1c2 + k)√(N1 − c2)2 + k + (2c2(N1 − c2) − k)
√
N12 + k.
(7.13)
The left-hand side of (7.13) can be shown to be always positive. If the right-hand side of (7.13) is negative, it results in a contradiction. Otherwise, we can square both sides and get
c22k < 0,
which is also a contradiction. The proof is complete.
We now show that K3+ ≥ 0. Using (4.12), we must have the following:
K3− ≥ 1 − a
γ3−
.
The following lemma proves that 1−a
γ3− does not exceed the upper bound α.
Lemma 7.6. 1−a
γ3− < α.
Proof. It suffices to prove that c2
δ< 1
γ2+
−1
γ3−
. (7.14)
From the elementary inequality
√
A2 + B − A < B
2A , A, B > 0,
we obtain the following:
γ2+ < δ
N1
⇔1
γ2+
> N1
δ.
If N1 − c2 ≤ 0, then
−γ3− < δ
c2 − N1
⇔− 1
γ3−
> c2 − N1
δ,
and (7.14) follows. If N1 − c2 > 0, then
γ2+ < δ
N1
<δ
c2
⇔ c2
δ< 1
γ2+
,
and (7.14) follows since γ3− < 0. The proof is complete.
20

We now determine the conditions under which 1−a
γ3− , α0, or α serves as the lower bound for K3− via
the lemma below.
Lemma 7.7. (i) 1−a
γ3− > α if and only if
c2 > δN2
2N1
. (7.15)
(ii) 1−a
γ3− > α0 if and only if
c2 > N1 − κ1N2
2M1
+ δM1
κ1
. (7.16)
Proof. 1−a
γ3− > α is equivalent to
δN2 − c2(N1 − c2) < c2
√(N1 − c2)2 + 2δN2. (7.17)
The inequality holds when δN2 − c2(N1 − c2) < 0, or, equivalently, N1c2 > δN2 + c22. Squaring both sides
of (7.17) yields (7.15), which is equivalent to N1c2 > δN2
2 . Since δN2 + c22 > δN2
2 , then (i) follows.
1−a
γ3− > α0 is equivalent to
1 < γ3−
( N1 − c2
δ − κ1N2
2δM1
) .
A necessary condition for the above inequality to hold is that c2 > N1 − κ1N2
2M1 . Moreover, the inequality
is equivalent to the following:
2δM1N2 + 2M1(N1 − c2)2 − κ1N2(N1 − c2) < (κ1N2 − 2M1(N1 − c2))√(N1 − c2)2 + 2δN2. (7.18)
The above inequality is immediately satisfied when 2M1(N1 − c2)2 − κ1N2(N1 − c2) < −2δM1N2 (i.e.,
the left-hand side is negative) and c2 > N1 − κ1N2
2M1 (i.e., the right-hand side is positive). We call this scenario the “trivial” case. Squaring both sides of (7.18) yields (7.16), which satisfies the necessary condition. It must be noted that squaring both sides of (7.18) is valid if N1 −c2 < 0. Moreover, if N1 −c2 > 0, we can rewrite (7.16) as
2M1(N1 − c2)2 − κ1N2(N1 − c2) < − 2δM2
1 (N1−c2)
κ1 . Since −2δM1N2 < − 2δM2
1 (N1−c2)
κ1 if 0 < N1 − c2 < κ1N2
M1 ,
then the trivial case is covered by (ii). The proof is complete.
Before presenting the formula for the lower bound of K3−, we state the following lemma which is useful in bridging the results of Lemmas 7.4 and 7.7:
Lemma 7.8. δN2
2N1 < N1 − κ1N2
2M1 + δM1
κ1 if and only if
N1 > κ1N2
2M1
.
Proof. δN2
2N1 ≤ N1 − κ1N2
2M1 + δM1
κ1 is equivalent to
2κ1M1N12 + (2δM12 − κ21N2)N1 − δκ1M1N2 > 0.
Solving the inequality with respect to N1 yields
N1 > κ1N2
2M1
or N1 < − δM1
κ1
.
Since N1 > 0, the result follows.
Following the results of Lemmas 7.4, 7.7, and 7.8, we now present the four cases that yield the expression for the lower bound of K3− (denoted by αLB):
(i) If N1 > κ1N2
2M1 and c2 ≥ N1 − κ1N2
2M1 + δM1
κ1 , then αLB = 1−a
γ3− > α0 > α.
(ii) If N1 > κ1N2
2M1 and c2 < N1 − κ1N2
2M1 + δM1
κ1 , then αLB = α0 >
(
α ∨ 1−a
γ3−
) .
21

(iii) If N1 ≤ κ1N2
2M1 and c2 ≥ δN2
2N1 , then αLB = 1−a
γ3− > α > α0.
(iv) If N1 ≤ κ1N2
2M1 and c2 < δN2
2N1 , then αLB = α >
(
α0 ∨ 1−a
γ3−
) .
For case (iii), we used Lemma 7.8 to combine the inequalities c2 ≥ N1 − κ1N2
2M1 + δM1
κ1 and c2 ≥ δN2
2N1 . For
case (iv), we also used Lemma 7.8 to combine two subcases: (1) N1 − κ1N2
2M1 + δM1
κ1 ≤ c2 < δN2
2N1 and (2)
c2 < N1 − κ1N2
2M1 + δM1
κ1 . Hence, we obtain the formula for αLB given in (4.8). Thus, K3− < 0 < K3+ and
w0 ≤ u1 if the following inequalities hold:
αLB < K3− < α.
Remark 7.9. It follows that g is strictly increasing in the region {u1 < x < u2}. It can easily be shown that g is also strictly increasing in the other regions. By the continuity of the first derivative, g is strictly increasing for all x > 0. It can also be easily shown that g is strictly concave in the regions {x < w0} and {x > u2}. Since
g′′′ > 0 in the regions {w0 < x < u1} and {u1 < x < u2}, then, by the continuity of the second derivative, g is strictly concave on [w0, u2].
It can be shown that γ4− − γ3− > 0. Hence, u2 is well defined. We now require that u1 ≤ u2. The following lemma gives a necessary and sufficient condition such that u1 ≤ u2.
Lemma 7.10. u1 ≤ u2 if and only if
K3− ≤ (1 − a)(γ3+ − γ4−)
γ3−(γ3+ − γ3−) =: αUB.
Proof. From (4.10), u1 ≤ u2 is equivalent to
K3−γ3−(γ4− − γ3−)
K3+γ3+(γ3+ − γ4−) ≥ 1.
Using (4.12) yields the result.
The following lemma proves that αUB is a lower upper bound of K3−.
Lemma 7.11. αUB ≤ α.
Proof. αUB ≤ α is equivalent to √
N12 + 2δN2
√(N1 − c1 − c2)2 + 2δN2 ≥ −N1(N1 − c1 − c2) − 2δN2. (7.19)
The above inequality is always true if c1 + c2 < N1 + 2δN2
N1 . Suppose c1 + c2 ≥ N1 + 2δN2
N1 . Squaring both sides of the inequality (7.19) yields (c1 + c2)2 ≥ 0,
which is always true. The result is proved.
The following lemma gives a necessary and sufficient condition such that αLB ≤ αUB.
Lemma 7.12. αLB ≤ αUB if and only if
c1 + c2 ≥ N1 − κ1N2
2M1
+ δM1
κ1
. (7.20)
Proof. Suppose N1 > κ1N2
2M1 and c2 ≥ N1 − κ1N2
2M1 + δM1
κ1 . Then, αLB = 1−a
γ3− and αLB ≤ αUB are equivalent
to
γ3− − γ4− ≤ 0,
which can be shown to be always true. Since c1 > 0, then (7.20) follows. For the case N1 ≤ κ1N2
2M1 and c2 ≥ δN2
2N1 , we also obtain the equivalence between αLB ≤ αUB and γ3− − γ4− ≤ 0. By Lemma 7.8,
δN2
2N1 ≥ N1 − κ1N2
2M1 + δM1
κ1 , which implies (7.20).
22

Suppose N1 > κ1N2
2M1 and c2 < N1 − κ1N2
2M1 + δM1
κ1 . Then, αLB = α0 and αLB ≤ αUB are equivalent to
−(N1 − c1 − c2) + κ1N2
M1
≥ √(N1 − c1 − c2)2 + 2δN2,
which holds only if c1 + c2 ≥ N1 − κ1N2
M1 . Squaring both sides of the above inequality yields
c1 + c2 ≥ N1 − κ1N2
2M1
+ δM1
κ1
> N1 − κ1N2
M1
,
which proves the result for when αLB = α0.
Suppose N1 ≤ κ1N2
2M1 and c2 < δN2
2N1 . Then, αLB = α and αLB ≤ αUB are equivalent to
N1 + c1 + c2 ≥ √(N1 − c1 + c2)2 + 2δN2.
Squaring both sides yields
c1 + c2 ≥ δN2
2N1
> N1 − κ1N2
2M1
+ δM1
κ1
,
where the second inequality follows from Lemma 7.8. The proof is complete.
We now state the following result which gives a necessary and sufficient condition such that w0 ≤ u1 ≤ u2.
Lemma 7.13. w0 ≤ u1 ≤ u2 if and only if K3− ∈ (αLB, αUB).
Proof. This is a direct consequence of Lemmas 7.4, 7.10, and 7.12.
Solving for K3−
It remains to prove the existence of K3−. We do this via the first equation in (7.10), which ensures that the first derivative at x = u2 is continuous. The following lemma gives a necessary and sufficient condition such that K3− exists and is unique.
Lemma 7.14. K3− is the unique solution to ψ(z) = 0 in (αLB, αUB) if and only if ψ(αLB) ≤ 0, where ψ is defined in (4.7).
Proof. We can rewrite ψ as follows:
ψ(z) = (1 − a − γ3−z)
[ γ3−(γ4− − γ3−)z (1 − a − γ3−z)(γ3+ − γ4−)
]
γ3+
γ3+−γ3− + γ3−zeγ3−ζ(z) − a
= (1 − a − γ3−z)− γ3−
γ3+ −γ3−
[ γ3−(γ4− − γ3−)z
γ3+ − γ4−
]
γ3+
γ3+−γ3− + γ3−zeγ3−ζ(z) − a.
Since γ3− < 0 and limz↓ 1−a
γ3−
ζ(z) = +∞, then limz↓ 1−a
γ3−
ψ(z) = −a < 0. From Lemma 7.10, ζ(αUB) = 0.
Since a ≤ 1
2 , ψ(αUB) = 1 − 2a > 0. Hence, by the intermediate value theorem, there exists a z0 ∈
( 1−a
γ3− , αU B
)
such that ψ(z0) = 0. We now prove the uniqueness of z0. From the definitions of ζ and ψ
in (4.7), we have
ζ′(z) = 1 − a
(γ3+ − γ3−)(1 − a − γ3−z)z ,
ψ′(z) = γ3−
(
eγ3−ζ(z) − eγ3+ζ(z))
+ 1−a
γ3+ − γ3−
[ γ3+
z eγ3+ζ(z) + γ32−
1 − a − γ3−z eγ3−ζ(z)
] .
Since γ3+ > γ3−, it holds that
(γ3+ − γ3−)ζ(z) = ln
( γ3−(γ4− − γ3−)z (1 − a − γ3−z)(γ3+ − γ4−)
)
< ln
( −γ32−z
γ3+(1 − a − γ3−z)
) .
23

It follows that
γ3+
z eγ3+ζ(z) > −γ32−
1 − a − γ3−z eγ3−ζ(z).
Now using ζ(z) ≥ 0 for z ∈
( 1−a
γ3− , αU B
)
, we obtain ψ′(z) > 0 on
( 1−a
γ3− , αU B
)
. Hence, z0 is unique.
If αLB = 1−a
γ3− , the result immediately follows by choosing z0 = α3−. Suppose αLB = α0 or αLB = α. If ψ(αLB) ≤ 0, then the result follows by choosing z0 = α3−. Suppose ψ(αLB) > 0. By the intermediate
value theorem and the strict monotonicity of ψ, the unique solution z1 of ψ is on the interval
( 1−a
γ3− , αLB
) .
Hence, there is no solution on the interval (αLB, αUB). The proof is complete.
Remark 7.15. Lemmas 7.14 and 7.8 imply that if c2 ≥ N1 − κ1N2
2M1 + δM1
κ1 holds, then the existence (and uniqueness) of K3− is guaranteed.
7.2 Proof of Theorem 4.3
Deriving the analytical solution
Suppose for now that u1 < w0 ≤ u2 and w0 exists. In the region {x < u1}, the HJB equation becomes
(7.1) and its solution is given by g1(x) = K1
∫x
0 exp
[∫ u1 z
κ1
G−1(y) dy
]
dz, where K1 > 0 is a constant and
G−1 is the inverse of G given by (4.9). We also obtain π1∗(x) = G−1(x).
In the region {u1 < x < w0}, we have π1∗(x) = ̂π1(x) and the HJB equation becomes
0=
[
κ1μ1(π1∗(x)) + κ2μ2
( κ2
κ1
π1∗(x)
)
− c2
]
g′(x)+
[1
2 σ12(π1∗(x)) + 1
2 σ22
( κ2
κ1
π1∗(x)
)]
g′′(x)−δg(x)+(1−a)c2.
(7.21) Using (4.4), we obtain π1∗(x) = H(x), where H satisfies the differential equation in (4.16). Hence, w0 exists and satisfies H(w0) = M1 via (4.5). Similar to solving (7.1), we obtain the following solution for (7.21):
g2(x) = K2+
∫x
u1
exp
[∫ w0
z
κ1
H(y) dy
]
dz + K2−,
where K2± are unknown constants. In the region {w0 < x < u2}, the HJB equation becomes (7.4), whose solution is of the form given in (7.5). In the region {x > u2}, the HJB equation simplifies to (7.6), which has a solution described by (7.7). We conjecture the following solution:
g(x) =


K1
∫x
0 exp
[∫ u1 z
κ1
G−1(y) dy
]
dz if x < u1,
K2+
∫x
u1 exp
[∫ w0 z
κ1
H(y) dy
]
dz + K2− if u1 < x < w0,
K3+eγ3+(x−u1) + K3−eγ3−(x−u1) + (1−a)c2
δ if w0 < x < u2,
K4−eγ4−(x−u2) + ac1+(1−a)c2
δ if x > u2,
(7.22)
where w0 = H(M1) and K1, K2±, K3±, K4−, u1, u2 are yet to be determined. To ensure twice continuous differentiability at x = u1, we obtain the following equations:
K1
∫ u1
0
exp
[∫ u1
z
κ1
G−1(y) dy
]
dz = K2−,
K1 = K2+ exp
[∫ w0
u1
κ1
H(y) dy
]
= 1 − a,
(7.23)
which imply the following:
K1 = 1 − a,
K2− = (1 − a)
∫ u1
0
exp
[∫ u1
z
κ1
G−1(y) dy
]
dz,
K2+ = (1 − a) exp
[ −
∫ w0
u1
κ1
H(y) dy
] ,
(7.24)
24

where u1 is still unknown. To ensure twice continuous differentiability at x = w0, we have the following equations:
K2+ = K3+γ3+eγ3+(w0−u1) + K3−γ3−eγ3−(w0−u1),
− κ1K2+
M = K3+γ32+eγ3+(w0−u1) + K3−γ32−eγ3−(w0−u1).
Dividing the second equation by the first equation yields the formula for u1 in (4.17).
Establishing the bounds for K3−
We now establish the bounds for K3−. Since the candidate value function g must be positive for x > 0, then, from (7.5), we must have α3 > 0, where α3 is defined in (4.12). This implies that K3− > α, where α is defined in (4.8). Next, we establish the conditions such that the formula for u1 in (4.17) is well defined. Suppose for now that K3− < 0 < K3+. We then require the following result:
Lemma 7.16. γ3− + κ1
M1 < 0 if and only if
c2 < N1 − κ1N2
2M1
+ δM1
κ1
and N1 > κ1N2
2M1
.
Proof. γ3− + κ1
M1 < 0 is equivalent to
√(N1 − c2)2 ≥ κ1N2
M1
− (N1 − c2).
The inequality holds immediately if 0 < c2 < N1 − κ1N2
M1 . Suppose that c2 ≥ N1 − κ1N2
M1 . Squaring both sides of the above inequality yields the desired result.
The above lemma implies that u1 in (4.17) is well defined if c2 < N1 − κ1N2
2M1 + δM1
κ1 . We now require
that w0 > u1. It can be shown that (1−a)
( κ1
M1 +γ3+
)
γ3−(γ3+−γ3−) = α0. Hence, w0 > u1 is equivalent to K3− ≤ α0.
This also proves that K3− < 0. Since (4.12) still holds, we have K3− ≥ 1−a
γ3− , or, equivalently, K3+ > 0.
Since c2 < N1 − κ1N2
2M1 + δM1
κ1 and N1 > κ1N2
2M1 , then by Lemmas 7.7 and 7.8, we have
(
α ∨ 1−a
γ3−
)
< α0 and
the following bounds for K3−:
1−a
γ3−
< K3− < αLB,
where αLB is defined in (4.15). For u2 defined in (4.17), it is well defined by Lemma 7.16. The following lemma gives a necessary and sufficient condition such that u2 ≥ w0.
Lemma 7.17. u2 ≥ w0 if and only if
c1 + c2 ≥ N1 − κ1N2
2M1
+ δM1
κ1
.
Proof. u2 ≥ w0 is equivalent to
(γ4− − γ3−)
(
− κ1
M1 − γ3+
)
(γ3+ − γ4−)
(
γ3− + κ1
M1
) ≥ 1.
The above inequality is equivalent to γ4− + κ1
M1 ≥ 0, which can be rewritten as
−(N1 − c1 − c2) + κ1N2
M1
≥ √(N1 − c1 − c2)2 + 2δN2.
A necessary condition for the above inequality to hold is c1 +c2 ≥ N1− κ1N2
M1 . Suppose c1 +c2 ≥ N1 − κ1N2
M1 .
Squaring both sides of the above inequality yields the desired result.
25

Solving for K3−
It remains to determine K3−. Suppose ψ(αLB) > 0. By Lemma 7.14, it follows that c2 < N1 −
κ1N2
2M1 + δM1
κ1 and N1 > κ1N2
2M1 . Since ψ
( 1−a
γ3−
)
< 0, we have that K3− is the unique solution of ψ(z) = 0 on
( 1−a
γ3− , αLB
)
via Lemma 7.14.
7.3 Proof of Theorem 4.4
Proving that w0 is infinite when M1 < ∞
Suppose c1 + c2 < N1 − κ1N2
2M1 + δM1
κ1 . Suppose further that w0 < ∞ exists. In the region {x > w0}, we
get (7.6), whose solution is given by (7.7). From (4.5) and the assumption c1 + c2 < N1 − κ1N2
2M1 + δM1
κ1 ,
we get
0 = −κ1
g′4(w0)
g′4′(w0) − M1 = − κ1
γ4−
− M1 < 0,
which is a contradiction. Hence, no such w0 exists and we write w0 = ∞.
Deriving the analytical solution for M1 < ∞
Suppose for now that u1 ≤ u2 < w0 = ∞. In the region {x < u1}, the HJB equation becomes (7.1)
whose solution that satisfies g(0) = 0 is given by g1(x) = K1
∫x
0 exp
[∫ u1 z
κ1
G−1(y) dy
]
dz, where K1 > 0 is an
unknown constant and G−1 is the inverse of the function G given by (4.9). In the region {u1 < x < u2},
the HJB equation becomes (7.21) whose solution is given by g2(x) = K2+
∫x
u1 exp
[∫ u2 z
κ1
H(y) dy
]
dz + K2−,
where K2± are unknown constants and H satisfies (4.16).
Since w0 = ∞, we conjecture that π1∗(x) = M0 for all x ≥ u2 and some unknown constant M0 ∈ (0, M1). In the region {x > u2}, the HJB equation then becomes
0 = [N 1(M0) − c1 − c2
] g′(x) + 1
2 N 2(M0)g′′(x) − δg(x) + ac1 + (1 − a)c2,
whose solution that satisfies limx→∞ g(x) = ac1+(1−a)c2
δ is given by
g3(x) = K3eγ4−(M0)x + ac1 + (1 − a)c2
δ,
where γ4−(y) is defined in (4.6). We conjecture the following solution:
g(x) =


K1
∫x
0 exp
[∫ u1 z
κ1
G−1(y) dy
]
dz if x < u1,
K2+
∫x
u1 exp
[∫ u2 z
κ1
H(y) dy
]
dz + K2− if u1 < x < u2,
K3eγ4−(M0)x + ac1+(1−a)c2
δ if x > u2,
where K1, K2±, K3, M0, u1, u2 are yet to be determined. To ensure twice continuous differentiability at x = u1, we obtain the equations in (7.23), which yield the formulas for K1 and K2− in (7.24). Moreover, we have
K2+ = (1 − a) exp
[ −
∫ u2
u1
κ1
H(y) dy
] .
To ensure twice continuous differentiability at x = u2, we obtain the following equations:
(1 − a) exp
[∫ u1
u2
κ
H(y) dy
]
= K3γ4−(M0)eγ4−(M0)u2 = a,
− (1 − a)κ1
M0
exp
[∫ u1
u2
κ
H(y) dy
]
= K3γ24−(M0)eγ4−(M0)u2 .
(7.25)
26

From the first equation, we obtain
K3 = a
γ4−(M0) e−γ4−(M0)u2 .
Dividing the second equation in (7.25) by the first equation yields
− κ1
M0
= γ4−(M0). (7.26)
We still have to prove that M0 exists.
Lemma 7.18. Suppose c1 + c2 < N1 − κ1N2
2M1 + δM1
κ1 . Then, M0 is a solution to
− κ1
y = γ4−(y), y ∈ (0, M1).
Proof. Since N 1(0) = N 2(0) = 0, we have
γ4−(0) := yli→m0 γ4−(y) = yli→m0
−2δ
−(N 1(y) − c1 − c2) +
√
(N 1(y) − c1 − c2)2 + 2δN 2(y)
= −δ
c1 + c2
.
Define f (y) := γ4−(y) + κ1
y . We have the following:
lyi↓m0 f (y) = ∞ and f (M1) = γ4− + κ1
M1
.
By the intermediate value theorem, f has a solution in (0, M1) if γ4− + κ1
M1 < 0. From the proof of
Lemma 7.17, γ4− + κ1
M1 < 0 is equivalent to c1 + c2 < N1 − κ1N2
2M1 + δM1
κ1 , which proves the result.
Similarly to the previous arguments, we have π1∗(x) = H(x). Hence, it follows that u2 satisfies
H(u2) = M0.
Finally, from the first equation in (7.25), u1 satisfies (4.18). The following lemma proves that u1 is the unique solution to the above equation.
Lemma 7.19. u1 is the unique solution to (4.18) in (0, u2).
Proof. Define f (x) := − ∫ u2
x
κ1
H(y) dy − ln
(a 1−a
)
. Since a ≤ 1
2 , we have f (u2) = − ln
(a 1−a
)
> 0. Since
H(0) = 0, we have xli→m0 f (x) = −∞.
Thus, by the intermediate value theorem, there exists a unique x0 ∈ (0, u2) such that f (x0) = 0. Choosing x0 = u1 proves the result.
Proving that w0 is infinite if M1 = ∞
We now consider the case where the support is unbounded (i.e., M1 = ∞). We first prove that the configurations w0 ≤ u1 ≤ u2 and u1 < w0 ≤ u2 do not hold. Suppose the configuration w0 ≤ u1 ≤ u2 holds and w0 exists. Similar to the bounded support case (i.e., M1 < ∞), we obtain the form of the candidate solution in (7.8). The discussion follows with the bounded support case. However, from Lemma 7.12, we must have c1 + c2 ≥ ∞ for αLB ≤ αUB to hold. This implies that K3− does not exist. Thus, the confi-
guration w0 ≤ u1 ≤ u2 is not possible. Suppose the configuration u1 < w0 ≤ u2 holds and w0 exists. Similar to the bounded support case, we also obtain the form of the candidate solution in (7.22), which leads to Lemma 7.17. The configuration will hold if and only if c1 + c2 ≥ ∞, which implies that u1 < w0 ≤ u2 does not hold.
27

Deriving the analytical solution when M1 = ∞
Suppose now that the configuration u1 ≤ u2 < w0 holds. The discussion follows similarly as in the bounded support case. We obtain the equation (7.26). The following lemma states that M0 is indeed a solution to (7.26):
Lemma 7.20. M0 is a solution to
− κ1
y = γ4−(y), y ∈ (0, M1).
Proof. Since N 1(0) = N 2(0) = 0, then we have
γ4−(0) := yli→m0 γ4−(y) = −δ
c1 + c2
.
Define f (y) := γ4−(y) + κ1
y . We have the following:
lyi↓m0 f (y) = ∞ and f (M1) = γ4− < 0.
By the intermediate value theorem, f has a solution in (0, M1).
7.4 Proof of Theorem 5.1
Suppose M1 < ∞. The candidates for the optimal reinsurance strategies still satisfy (4.4). In the re
gion {x < u1}, the HJB equation becomes (7.1), whose solution is given by g1(x) = K1
∫x
0 exp
[∫ w0 z
κ1
G−1(y) dy
]
dz,
where K1 > 0 is an unknown constant and G−1 is the inverse of the function G given by (4.9). We also
obtain π1∗(x) = G−1(x). Since πi′(x) > 0 and πi(0) = 0, w0 exists and satisfies w0 = G(M1). In the region {w0 < x < u1}, the HJB equation becomes (7.2), whose solution is given by (7.3). In
the region {x > u1}, we must have g′(x) = 1 − a. Hence,
g3(x) = (1 − a) [x − u1 + K3] .
We conjecture the following solution:
g(x) =


K1
∫x
0 exp
[∫ w0 z
κ1
G−1(y) dy
]
dz if x < w0,
K2+eγ2+(x−w0) + K2−eγ2−(x−w0) if w0 < x < u1,
(1 − a) [x − u1 + K3] if x > u1,
where w0 = G(M1), γ2± := γ2±(M1) are defined in (4.6), and K1, K2±, K3, u1 are yet to be determined. We now solve for the unknowns using the principle of smooth fit. At x = u1, we have the following system of equations:
K2+eγ2+u1 + K2−eγ2−u1 = (1 − a)K3,
K2+γ2+eγ2+u1 + K2−γ2−eγ2−u1 = 1 − a,
K2+γ22+eγ2+u1 + K2−γ22−eγ2−u1 = 0.
From the second and third equations, we obtain
K2+ = − γ2−(1 − a)e−γ2+u1
γ2+(γ2+ − γ2−) > 0 and K2− = γ2+(1 − a)e−γ2−u1
γ2−(γ2+ − γ2−) < 0.
Substituting it into the first equation yields
K3 = γ2+ + γ2−
γ2+γ2−
= N1
δ,
where N1 := N 1(M1) is defined in (4.6).
28

At x = w0, it suffices to show that the derivatives are continuous. We have the following system of equations:
K1 = 1 − a
γ2+ − γ2−
[
γ2+eγ2−(w0−u1) − γ2−eγ2+(w0−u1)]
,
− κ1
M1
K1 = (1 − a)γ2+γ2−
γ2+ − γ2−
[
eγ2−(w0−u1) − eγ2+(w0−u1)]
.
Combining the two equations yields
e(γ2+−γ2−)(w0−u1) = γ2+(κ1 + γ2−M1)
γ2−(κ1 + γ2+M1) =
κ1
γ2− + M1
κ1
γ2+ + M1
. (7.27)
Since we assume that w0 ≤ u1, it must be the case that e(γ2+−γ2−)(w0−u1) ∈ (0, 1). Moreover, since
γ2− < 0, we have
κ1
γ2− +M1
κ1
γ2+ +M1 < 1. From (7.27) and Lemma 7.1, the formula for u1 in (5.1) is well defined.
It must be noted that since γ2−(κ1+γ2+M1)
γ2+(κ1+γ2−M1) > 1, it holds that w0 ≤ u1. Thus, we have obtained the form of the value function in (5.2). Similar arguments from the previous results yield that g is increasing and concave.
7.5 Proof of Theorem 5.2
In this scenario, M1 = ∞. Hence, we only have one “switching” point, which is u1 defined in (4.3). In the region {x < u1}, we obtain the HJB equation in (7.1), whose solution that satisfies g(0) = 0
and g′(u1) = 1 − a is given by
g1(x) = (1 − a)
∫x
0
exp
[∫ u1
z
κ1
G−1(y) dy
]
dz,
where G−1 is the inverse of the function G defined in (4.9). In the region {x > u1}, we must have
g′(x) = 1 − a. We conjecture the following solution:
g(x) =
{(1 − a) ∫ x
0 exp
[∫ u1 z
κ1
G−1(y) dy
]
dz if x < u1,
(1 − a) [x − u1 + K3] if x > u1,
where K3 and u1 are yet to be determined.
By construction, g′(x) is continuous, so we only need to make g(x) and g′′(x) be continuous at the switching point u1. We first ensure that g′′(x) is continuous, that is, we want
− (1 − a)κ1
π1(u1−) = g′′(u1−) = 0.
This implies that π1(u1−) = ∞. Define
G(∞) := yli→m∞ G(y).
We require the following result to ensure that G(∞) is finite.
Lemma 7.21. G(∞) < ∞.
Proof. Since σi2(z) → σ ̃i2 and μi(z) → μ ̃i as z → ∞, the integrand of G converges to zero at the rate of
1
z2 , which proves the integrability of G(∞).
Since g′(x) and g′′(x) are continuous at x = u1, then from the HJB equation, we have
0= 1
2 N 2(u1)g′′(u1) + [N 1(u1)] g′(u1) − δg(u1)
= [κ1μ ̃1 + κ2μ ̃2] (1 − a) − δ(1 − a)K3,
where N 1(y) and N 2(y) are defined in (4.6). It implies that K3 = N1
δ , where N1 = N 1(M1). Thus, we have obtained the form of the candidate value function in (5.3). Similar to the previous arguments, it can be shown that g is increasing and concave.
29

8 Conclusion
In this paper, we investigate optimal dividend payout, reinsurance, and capital injection strategies for insurers with two business lines, where reinsurance combines proportional and excess-of-loss coverage. We establish that the optimal reinsurance strategy is pure excess-of-loss and identify distinct, mutually exclusive dividend payout strategies for both bounded and unbounded dividend rates. The optimal capital injection strategy under both bounded and unbounded dividend rates is the same acros-
s all scenarios: capital transfers occur only to save one business line from ruin, provided that adequate reserves remain. Future research could explore alternative types of dividend, such as periodic dividends and immediate dividends that incorporate transaction costs (see, e.g., Kelbert and Moreno-Franco, 2025; Avanzi et al., 2020, 2021). Alternative processes that model the reserve level, such as Le ́vy processes, could also be considered (e.g., Mata Lo ́pez et al., 2024). The objective functio-
n could be modified to account for penalties for early ruin (e.g., Strini and Thonhauser, 2023; Xu and Woo, 2020). It would also be of interest to investigate deep learning approaches (e.g., Cheng et al., 2020).
References
Aboagye, E., Asimit, V., Fung, T. C., Peng, L., and Wang, Q. (2025). A revisit of the optimal excessof-loss contract. European Journal of Operational Research, 322(1):341–354.
Albrecher, H., Azcue, P., and Muler, N. (2017). Optimal dividend strategies for two collaborating insurance companies. Advances in Applied Probability, 49(2):515–548.
Albrecher, H. and Thonhauser, S. (2009). Optimality results for dividend problems in insurance. Revista De La Real Academia De Ciencias Exactas, Fisicas y Naturales, 103(2):295–320.
Asmussen, S. and Albrecher, H. (2010). Ruin Probabilities, volume 14 of Advanced Series on Statistical Sciences & Applied Probability. World Scientific, Hackensack, NJ, 2nd edition.
Asmussen, S., Højgaard, B., and Taksar, M. (2000). Optimal risk control and dividend distribution policies. example of excess-of-loss reinsurance for an insurance corporation. Finance and Stochastics, 4:299–324.
Avanzi, B. (2009). Strategies for dividend distribution: A review. North American Actuarial Journal, 13(2):217–251.
Avanzi, B., Lau, H., and Wong, B. (2020). Optimal periodic dividend strategies for spectrally positive le ́vy risk processes with fixed transaction costs. Insurance: Mathematics and Economics, 93:315–332.
Avanzi, B., Lau, H., and Wong, B. (2021). On the optimality of joint periodic and extraordinary dividend strategies. European Journal of Operational Research, 295(3):1189–1210.
Azcue, P. and Muler, N. (2021). A multidimensional problem of optimal dividends with irreversible switching: A convergent numerical scheme. Applied Mathematics & Optimization, 83:1613–1649.
Azcue, P., Muler, N., and Palmowski, Z. (2019). Optimal dividend payments for a two-dimensional insurance risk process. European Actuarial Journal, 9:241–272.
Boonen, T. J., Dela Vega, E. J. C., and Zou, B. (2025). Optimal dividend, reinsurance, and capital injection strategies for an insurer with two collaborating business lines. arXiv preprint arXiv:2508.08130.
Centeno, L. (1985). On combining quota-share and excess of loss. ASTIN Bulletin, 15(1):49–63.
Cheng, X., Jin, Z., and Yang, H. (2020). Optimal insurance strategies: a hybrid deep learning Markov chain approximation approach. ASTIN Bulletin, 50(2):449–477.
Czarna, I. and Palmowski, Z. (2011). De Finetti’s dividend problem and impulse control for a twodimensional insurance risk process. Stochastic Models, 27(2):220–250.
30

de Finetti, B. (1957). Su un’impostazione alternativa della teoria collettiva del rischio. Transactions of the 15th International Congress of Actuaries, 2:433–443.
Grandell, J. (1977). A class of approximations of ruin probabilities. Scandinavian Actuarial Journal, 1977(sup1):37–52.
Grandits, P. (2019). A two-dimensional dividend problem for collaborating companies and an optimal stopping problem. Scandinavian Actuarial Journal, 2019(1):80–96.
Gu, J.-W., Steffensen, M., and Zheng, H. (2018). Optimal dividend strategies of two collaborating businesses in the diffusion approximation model. Mathematics of Operations Research, 43(2):377–398.
Kelbert, M. and Moreno-Franco, H. A. (2025). An optimal periodic dividend and risk control problem for an insurance company. Insurance: Mathematics and Economics, 125:103154.
Liang, Z. and Guo, J. (2011). Optimal combining quota-share and excess of loss reinsurance to maximize the expected utility. Journal of Applied Mathematics and Computing, 36:11–25.
Liu, L. and Cheung, E. C. K. (2014). On a bivariate risk process with a dividend barrier strategy. Annals of Actuarial Science, 9(1):3–35.
Mata Lo ́pez, D., Noba, K., Pe ́rez, J.-L., and Yamazaki, K. (2024). Optimal dividends and capital injection: A general le ́vy model with extensions to regime-switching models. Insurance: Mathematics and Economics, 119:210–225.
Schmidli, H. (2008). Stochastic Control in Insurance. Probability and Its Applications. Springer London.
Strietzel, P. L. and Heinrich, H. E. (2022). Optimal dividends for a two-dimensional risk model with simultaneous ruin of both branches. Communications in Statistics - Theory and Methods, 10(6):116.
Strini, J. A. and Thonhauser, S. (2023). Time-inconsistent view on a dividend problem with penalty. Scandinavian Actuarial Journal, 2023(8):811–833.
Xu, R. and Woo, J.-K. (2020). Optimal dividend and capital injection strategy with a penalty payment at ruin: Restricted dividend payments. Insurance: Mathematics and Economics, 92:1–16.
Yang, B., Song, R., Yao, D., and Cheng, G. (2025). Optimal dividend and proportional reinsurance strategy for the risk model with common shock dependence. Stochastic Models, 41(1):10–37.
Zhang, X., Zhou, M., and Guo, J. (2007). Optimal combinational quota-share and excess-of-loss reinsurance policies in a dynamic setting. Applied Stochastic Models in Business and Industry, 23:63–71.
31

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:32.381Z
- **Text Length:** 76433 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 31 of 31
