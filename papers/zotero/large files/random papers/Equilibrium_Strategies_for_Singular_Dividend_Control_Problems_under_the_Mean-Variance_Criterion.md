# PDF Document: Cao et al. - 2025 - Equilibrium Strategies for Singular Dividend Control Problems under the Mean-Variance Criterion.pdf

**File Path:** Cao et al. - 2025 - Equilibrium Strategies for Singular Dividend Control Problems under the Mean-Variance Criterion.pdf

**Processed Date:** 2026-02-10T18:13:54.879Z

**File Size:** 671.38 KB

**Total Pages:** 24

**Extracted Pages:** 24

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3514

**Title:** Equilibrium Strategies for Singular Dividend Control Problems under the Mean-Variance Criterion

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Equilibrium Strategies for Singular Dividend Control Problems
under the Mean-Variance Criterion
Jingyi Cao∗ Dongchen Li† Virginia R. Young‡ Bin Zou§
This version: November 10, 2025
Accepted for publication in SIAM Journal on Control and Optimization
Abstract
We revisit the optimal dividend problem of de Finetti by adding a variance term to the usual criterion of maximizing the expected discounted dividends paid until ruin, in a singular control framework. Investors do not like variability in their dividend distribution, and the mean-variance (MV) criterion balances the desire for large expected dividend payments with small variability in those payments. The resulting MV singular dividend control problem is time-inconsistent, and we follow a game-theor-
etic approach to find a time-consistent equilibrium strategy. Our main contribution is a new verification theorem for the novel dividend problem, in which the MV criterion is applied to an integral of the control until ruin, a random time that is endogenous to the problem. We demonstrate the use of the verification theorem in two cases for which we obtain the equilibrium dividend strategy (semi-)explicitly, and we provide a numerical example to illustrate our results.
MSC2020 codes: 49J40, 49L12, 49N70, 91A23, 91G50
Keywords: Optimal divided problem, mean-variance criterion, singular control, time inconsistency, verification lemma
1 Introduction
The optimal dividend problem is a classic topic in actuarial and financial mathematics that aims to find the best strategy for a company to distribute dividends to its shareholders. In a seminal work, de Finetti [18] proposes to maximize the expected discounted dividend payments up to the company’s ruin time. This objective balances the trade-off between paying out dividends earlier and retaining earnings to ensure future growth and maintain financial stability, and it is arguably the most popular-
 criterion in the study of optimal dividends. However, as argued in Avanzi [5] (p.239), “variability in dividend payments is not well received in the markets,” and de Finetti’s criterion does not penalize variability. This motivates us to incorporate a variance term to penalize
∗Department of Mathematics and Statistics, York University, Canada. Email: jingyic@yorku.ca †Department of Mathematics and Statistics, York University, Canada. Email: dcli@yorku.ca ‡Department of Mathematics, University of Michigan, USA. Email: vryoung@umich.edu §Corresponding author. Department of Mathematics, University of Connecticut, USA. Email: bin.zou@uconn.edu
1
arXiv:2511.08433v1 [math.OC] 11 Nov 2025

dividend variability and consider a mean-variance (MV) criterion for finding the optimal dividend strategy. We consider a dividend-paying company and model its surplus by a Brownian motion with drift, the so-called diffusion model in risk theory (see Grandell [22]).1 Let D = {Dt}t≥0 denote the company’s dividend strategy, in which Dt is the cumulative amount of dividends paid up to time t. We adopt the singular control framework and do not restrict dividend payments to be absolutely continuous, r-
esulting in a singular control problem. Given a dividend strategy D, define τ := τ (D) to be the first time when the company’s surplus X reaches zero or less, referred to as the ruin time; let Yt denote the total dividends paid between t and τ , discounted at a constant
rate ρ > 0, that is, Yt = ∫ τ
t e−ρ(s−t)dDs. In the classical setup of de Finetti, the goal is to find an optimal dividend strategy that maximizes Ex,t(Yt), the conditional expectation of Yt given the initial surplus Xt− = x ≥ 0. As motivated above, we propose an MV objective, namely, J (x, t; D) = Ex,t(Yt) − γ
2 Vx,t(Yt),2 in which γ > 0 regulates the penalty on the variability in dividend payments and can be interpreted as a risk aversion parameter. Note that the limiting case of γ → 0+ reduces to de Finetti’s model. It is well known that dynamic MV optimization problems, such as the above MV dividend problem, are time-inconsistent (see, for instance, Bjo ̈rk and Murgoci [10]).3 In this work, we follow the game-theoretic approach to seek an equilibrium dividend strategy (see Definition 2.2). To that en-
d, we first develop and prove a verification theorem (Theorem 3.1) that is tailored to our MV dividend problem and differs from those in the literature. Next, we apply this theorem to obtain the equilibrium strategies in two distinctive scenarios, large γ and small γ (risk aversion). To be precise, when γ exceeds a threshold, we show that the equilibrium strategy is to pay out the entire surplus and declare bankruptcy immediately (Theorem 4.1). This result is consistent with intuition because a su-
fficiently large γ imposes a big penalty on the variance of dividend payments Yt, and the strategy of paying out all surplus yields a zero variance. When γ is sufficiently small, we show that the equilibrium strategy is a time-independent barrier strategy with a strictly positive barrier x ̃ (Theorem 4.2); that is, given the initial surplus Xt− = x, the company pays out a lump sum dividend of max{x − x ̃, 0} at time t, and thereafter pays dividends so that the resulting surplus is reflected at the-
 barrier x ̃. Finding an equilibrium solution of the time-inconsistent MV dividend singular control problem stated above is new to the time-inconsistent control literature. We are aware of only three papers that study time-inconsistent singular control problems: Liang et al. [31], Liang and Luo [32], and Dai et al. [17]. Liang et al. [31] study an optimal reinsurance problem for an insurer, and the
1The diffusion model is a popular choice in the optimal dividend problems; see Asmussen and Taksar [4] and Taksar [33] for earlier works and Albrecher et al. [2] and Guan and Xu [29] for more recent contributions. In particular, Cohen and Young [16] show that if the company uses the optimal strategy under the diffusion approximation but for the scaled Crame ́r-Lundberg risk model, then doing so is ε-optimal, and they specify the order of ε relative to the scaling factor. 2While MV preferences are -
among the most popular criteria in decision making, an alternative choice is the mean-standard deviation (MSD) J ̃(x, t; D) := Ex,t(Yt) − γ
2
√Vx,t(Yt). Note that MSD preferences satisfy the scaleinvariance property (that is, J ̃(x, t; αD) = αJ ̃(x, t; D) for all α ≥ 0), which is desirable in some applications (see, for instance, Bayraktar et al. [6] for an equilibrium stopping problem under MSD). 3Let {us∗|{x,t}}s≥t denote the “optimal” strategy of an optimization problem obtained under the initial condition
Xt− = x ≥ 0 for all feasible (x, t). This dynamic problem is called time-inconsistent if us∗|{x1,t1} 6= us∗|{x2,t2} holds
for some s > t2 > t1 and feasible x1, in which x2 = X∗
t
− 2
|{x1,t1} is the state process at time t−
2 under the strategy
{us∗|{x1,t1}}t1≤t<t2 .
2

singular control is irreversible reinsurance coverage; in their paper, time inconsistency arises from non-exponential discounting in the objective (see, for instance, Section 5 in Bjo ̈rk and Murgoci [10]). Liang and Luo [32] extend the model in Liang et al. [31] to a Stackelberg reinsurance game and assume that both the insurer and reinsurer are endowed with MV preferences. Dai et al. [17] solve an MV portfolio optimization problem with proportional transaction costs in a standard Black-Scholes -
market. Apart from the obvious difference in the optimization problem itself, our paper also differs from those in defining the admissible strategies and, later, equilibrium strategies. We outline the key points below and refer the reader to Remark 2.1 for a detailed discussion. Liang et al. [31] and Liang and Luo [32] define admissible strategies by partitioning the feasible region into the continuation and intervention regions; but, both Dai et al. [17] and this paper define admissible strategie-
s in a more standard way (see Definition 2.1). On the other hand, Dai et al. [17] impose additional α-H ̈older continuity assumptions (with α ∈ (0, 1]) on the spike perturbations and define equilibrium in the order of εα; by comparison, we follow the standard first-order (ε) condition as in Bjo ̈rk and Murgoci [10]. The key to achieving the standard weak equilibrium is the estimate in (3.14), which allows us to bound the error term by o(ε). In the standard MV literature, the objective is in the fo-
rm of Ex,t(XT ) − γ
2 Vx,t(XT ), in which XT is the controlled state process at the terminal time T . For instance, both Liang and Luo [32] and Dai et al. [17] follow this standard setup and assume T is a fixed constant horizon (XT is replaced by ln XT in Dai et al. [17]); the majority of the research on time-inconsistent MV classical control problems also adopts this setup (see, for instance, Bjo ̈rk et al. [11]).4 Landriault et al. [30] study MV investment problems over a random horizon T , but they assume that thi-
s random T is independent of the state process X and control. However, the MV objective in this paper
involves Yt = ∫ τ
t e−ρ(s−t)dDs, which is an integral of the dividend payments from the current time to the ruin time τ ; note that τ is endogenously dependent on the company’s dividend strategy and surplus process, a striking difference from the exogenous random horizon in Landriault et al. [30]. Kronborg and Steffensen [28] apply the MV objective to the terminal wealth XT and an integral of intertemporal consumption (a classical control) over a finite horizon [t, T ]; by comparison, Yt is an integral of dividends-
 (a singular control) over a random horizon [t, τ ]. Because of the “natural” boundary at T , the equilibrium value function in Kronborg and Steffensen [28] takes the linearquadratic form (see Proposition 3.1 therein); this ansatz plays an important role in finding (explicit) solutions. Note that this form of solution is similar to that of standard MV problems involving only the terminal wealth (see Bjo ̈rk and Murgoci [10] and Bjo ̈rk et al. [11]). However, we do not have an a priori guess for th-
e form of the value function V in this paper; in fact, V will not be of linear-quadratic form globally (see V (x) over x < x ̃ in Theorem 4.2). Regarding the equilibrium consumption c∗ (under constant risk aversion), Kronborg and Steffensen [28] show that it is a bang-bang control and only depends on whether the risk-free rate is greater than the discount rate, but is independent of the state process X. By comparison, the equilibrium dividend strategy D∗ in this paper is of barrier type and explic-
itly depends on the surplus X; note that the same
4For such a setup, because the MV objective only depends on the terminal state XT through its distribution μ(·), the original MV problem can be reformulated as a control problem of McKean-Vlasov type (MKV problem) over the (infinite-dimensional) distribution space. The new MKV problem is time-consistent in the time-distribution space (t, μ), and one may apply a McKean–Vlasov version of the dynamic programming approach to characterize the optimal value function v(t, μ); see Ismail and Pham [26] for-
 a nice implementation of this method to MV portfolio optimization problems. However, it is not straightforward to apply this approach to our MV dividend problem, because the MV criterion is applied to Yt, an integral of controls over an endogenously determined, random time τ .
3

conclusion holds under the classical control framework in Cao et al. [12]. The integral form of Yt in our MV objective significantly complicates the study and leads to an extended system of Hamilton-Jacobi-Bellman (HJB) equations that is different from the systems in related works (see Liang and Luo [32] and Dai et al. [17] for singular control and Bjo ̈rk et al. [11] and Landriault et al. [30] for classical control). In particular, we remark that our MV objective is not a special case of the gen-
eral MV framework proposed in Bjo ̈rk and Murgoci [10] (see their objective in equation (39)). Because of this integral form over an endogenously determined random horizon, the HJB system in this work involves three functions: the (equilibrium) value function V , the first moment function G(x, t) = Ex,t(Yt∗), and the second moment function H(x, t) = Ex,t
((Yt∗)2); see equations (3.2)-(3.4) in Theorem 3.1. But for the standard MV setup of terminal XT , the extend HJB system only involves V and G, but not H (see, for instance, Theorem 3.1 in Liang and Luo [32]). This paper also contributes to the literature on optimal dividends. Although MV preferences are well adopted in portfolio selection problems (see Bjo ̈rk et al. [11], Landriault et al. [30], and Dai et al. [17]), they are rarely used in the study of optimal dividend problems. To the best of -
our knowledge, this is the first paper that solves a singular dividend control problem under MV preferences. By comparison, Cao et al. [12] study an MV dividend problem under the classical control framework,5 and this paper differs from that one in at least three aspects: (1) the definition of equilibrium strategies (see the last point in Remark 2.1), (2) the verification lemma (see Remark 3.1), and (3) the main results (see Remark 4.2). Interestingly, a numerical example in Section 5 suggests tha-
t the barrier equilibrium strategy of the classical control problem in Cao et al. [12] converges to its counterpart of the singular control problem in this paper, as the maximum dividend rate goes to infinity (see Figure 7). As mentioned earlier, time inconsistency might also arise from non-exponential discounting, and related studies on optimal dividend include Chen et al. [13, 14], Zhu et al. [35], Zhou and Jin [36], and Christensen and Lindensj ̈o [15], among many others. Please see Albrecher a-
nd Thonhauser [1] and Avanzi [5] for an overview of the research questions on optimal dividend problems. The rest of this paper is organized as follows. Section 2 presents the model and main problem. We develop and prove the verification theorem in Section 3 and apply it to obtain equilibrium dividend strategies in Section 4. We conduct a numerical analysis in Section 5. Finally, Section 6 concludes the study.
2 Model
We fix a filtered probability space (Ω, F, F = (Ft)t≥0, P), in which the filtration F is generated by a standard one-dimensional Brownian motion B = (Bt)t≥0. We consider a company that pays dividends to its shareholders and let Dt denote the cumulative amount of dividends paid up to time t; we call D = {Dt}t≥0 a dividend strategy. We model the company’s uncontrolled surplus by a drifted Brownian motion (see, for instance, Asmussen and Taksar [4]). As such, given a dividend strategy D, the company’-
s controlled surplus X = (Xt)t≥0 follows the dynamics
dXt = a dt + b dBt − dDt, (2.1)
5The dividend strategy in Cao et al. [12] is Dt = θt dt for some bounded dividend rate 0 ≤ θt ≤ m for all t ≥ 0, as in Section 2 of Asmussen and Taksar [4]. If the dividend rate process is further required to be non-decreasing, this is referred to as a ratcheting constraint; see Angoshtari et al. [3], Albrecher et al. [2], and Guan and Xu [29].
4

in which a and b are positive constants, with X0 > 0. Define the company’s ruin time by τ := inf{t ≥ 0 : Xt ≤ 0}. Let Yt denote the total dividends paid between time t and ruin time τ under strategy D, discounted at a constant rate ρ > 0, that is,6
Yt =
∫τ
t
e−ρ(s−t) dDs, 0 ≤ t < τ. (2.2)
We set Yt = 0 for all t ≥ τ . It is obvious that X, τ , and Yt all depend on the company’s dividend strategy D, and a more precision notation is to write XD, τ D, and YtD, but we often suppress this dependence for notational simplicity. Following the literature on time-inconsistent control problems (see, for instance, Bjo ̈rk and Murgoci [10] and Bjo ̈rk et al. [11] on regular controls and Dai et al. [17] on singular controls), we focus on (Markov) feedback controls in the form of Dt = D(Xt− , t) -
for some deterministic function D. We define admissible dividend strategies below.
Definition 2.1. A dividend strategy D = (Dt)t≥0 is called admissible if (1) there exists a Borelmeasurable, deterministic function D : R2+ → R+ such that Dt = D(Xt− , t), in which X satisfies (2.1) under the strategy D; (2) D is non-decreasing over time; (3) ∆Dt := Dt − Dt− ≤ Xt− (that is, the company cannot pay more in dividends that it owns); (4) Dt = Dτ for all t ≥ τ (that is, there are no dividend payments after ruin); and (5) Yt in (2.2) is square integrable for all t ≥ 0.
Note that the above definition trivially generalizes from a starting time of 0 to an arbitrary starting time t ≥ 0 (assuming t < τ ); let At denote the set of all admissible strategies D = (Ds)s≥t for every t ≥ 0. With a slight abuse of notation, we use D to denote both the deterministic function D and the dividend strategy induced by it via Dt = D(Xt− , t). As argued in Section 1, we assume that the manager of the company penalizes variability in dividend payments by their variance and applies th-
e MV criterion when choosing the company’s dividend strategy. In particular, the manager’s (dynamic) objective function is given by
J (x, t; D) = Ex,t(Yt) − γ
2 Vx,t(Yt), D ∈ At, (2.3)
in which γ > 0 is the risk aversion parameter. In (2.3), Ex,t and Vx,t denote expectation and variance, respectively, conditional on Xt− = x ≥ 0, that is, before any possible lump-sum dividend payments at time t. If we set γ = 0, then the objective J in (2.3) reduces to the one proposed by de Finetti [18] and used in many follow-up works (see Albrecher and Thonhauser [1]). Because of the variance term in (2.3), maximizing J(x, t; D) for all (x, t) ∈ R+ leads to a timeinconsistent control problem. -
We follow an intrapersonal game approach, as in Bjo ̈rk and Murgoci [10], and seek a time-consistent equilibrium dividend strategy D∗. The definition of an equilibrium strategy under a singular control framework is different from its counterpart under a classical (or regular) control framework in Bjo ̈rk and Murgoci [10]. Below, we formally define D∗, and it is similar to the definition of equilibrium in Dai et al. [17]; for a different definition, see Liang et al. [31] and Liang and Luo [32].
6Throughout this paper, all integrals include the possible jumps at the left end point; for example, Yt in (2.2)
equals ∆Dt + ∫ τ
t+ e−ρ(s−t) dDs.
5

Definition 2.2. Fix an arbitrary initial time t ≥ 0 and an initial surplus Xt− = x > 0 and assume that ruin has not occurred by time t. Let D∗ = (Ds∗)s≥t ∈ At be an admissible dividend strategy
and denote its associated surplus, ruin time, and discounted dividend payments by X∗ := XD∗, τ ∗ := τ D∗ , and Yt∗ := Y D∗
t , respectively. For a positive number ε, a non-negative number d ∈ [0, x], and a non-decreasing, continuous function δ (of time only) satisfying δ(t + ε) − δ(t) = O(ε) as ε → 0, define a perturbed strategy Dε = (Dsε)s≥t by
Dsε =


D∗
t− + d + ∫ s∧τ
t+ dδ(u), t ≤ s < (t + ε) ∧ τ,
Dε
(t+ε)− + ∫ s
t+ε dDu∗, s ≥ (t + ε) ∧ τ.
(2.4)
in which τ := τ Dε is the ruin time under the perturbed strategy Dε, and ∫ s
t+ε dDu∗ = ∆Dt∗+ε +
∫s
(t+ε)+ dDu∗. The strategy D∗ is said to be a time-consistent equilibrium dividend strategy if, for
all (x, t) ∈ R2+, d ∈ [0, x], and δ functions that satisfy the above conditions,
lim inf
ε→0+
J(x, t; D∗) − J(x, t; Dε)
ε ≥ 0, (2.5)
and the equilibrium value function V equals
V (x, t) = J(x, t; D∗). (2.6)
We end this section with a technical remark on the definition of the equilibrium strategies D∗ above and a discussion on the existence, (non)uniqueness, and “optimality” of equilibria.
Remark 2.1. The definition of Dε in (2.4) is largely inspired by Dai et al. [17] who also study a time-inconsistent singular control problem, and it shares the same idea as in Bjo ̈rk and Murgoci [10] under the regular control framework. In Definition 2.2, we only require δ(t + ε) − δ(t) = O(ε), and the denominator in (2.5) is ε, the first order of the error ε. However, Dai et al. [17] assume that δ is α-Ho ̈lder continuous for some α ∈ (0, 1], and the corresponding denominator is εα. To our under-
standing, the “small” terms in Dai et al. [17] are not of order o(ε), and that is why they impose the additional assumption of α-Ho ̈lder continuity and change the denominator from ε to εα (see Definition 2 therein). We can relax their assumption because after carefully collecting all the integral terms of δ with order O(ε), the summation is of a definite sign (“negative” in (3.14)), which allows us to prove the inequality in (2.5). Although we assume that δ is a deterministic, univariate function-
 of time only, we can easily generalize to allowing perturbations in the form of δs := δ(Xs, s) for some bivariate function δ, as long as δ(Xt+ε, t + ε) − δ(x − d, t) = O(ε) holds uniformly. Under that extension, the class of δ would be large enough to incorporate the (bounded) dividend-rate case. Indeed, let θ(Xs, s) ∈ [0, m] be the dividend rate paid at time s ∈ (t, t + ε);
then, ∫ t+ε
t+ dδ(Xu, u) = ∫ t+ε
t+ e−ρ(s−t)θ(Xs, s) ds = O(ε), and we can easily choose θs so that δ is not α-Ho ̈lder continuous, versus the requirement in Dai et al. [17]. Careful readers will notice that the only singular perturbation over [t, t + ε) occurs at time t in the definition of Dε in (2.4). It is straightforward to extend from one jump at time t to a countable
number of jumps over [t, t+ε), but this requires the additional assumption of ∑
s∈(t,t+ε) ∆Dsε = o(ε).
Note that Liang et al. [31] impose exactly the same assumption in their definition (see Definition
6

2.2(c), p. 3217).7
By Definition 2.1, if ruin has occurred before time t or Xt− ≤ 0, we have J(x, t; D) = 0 for all D ∈ At. Therefore, to avoid such trivial scenarios, we assume, without loss of generality, that x > 0 and ruin has not occurred by time t in Definition 2.2. Recall that Cao et al. [12] adopt the classical control framework and require admissible dividend strategies to be absolutely continuous. As such, the perturbed strategy Dε therein does not allow singular jumps, which is equivalent to setting d ≡ 0-
 in (2.4). In addition, they assume a linear form
for δ functions to define perturbed strategies Dsε, which, under our notation, yields Dsε = Dt∗+∫ ε
t c du for an arbitrary positive constant c (less than the maximum dividend rate). Apparently, the perturbed strategies considered in Cao et al. [12] are special cases of (2.4), which allows not only singular jumps d > 0 but also general forms for δ functions. Our definition of the equilibrium strategy in (2.5) is the so-called weak equilibrium, and it is inspired by the popular approach introduced in Bjo ̈rk and Murgoci [10]. However, one potential drawback of such an approach is that the first-o-
rder condition (FOC) in (2.5) is only a necessary condition to characterize equilibrium, and if the FOC holds with equality, there might exist counterexamples in which J(x, t; Dε) − J(x, t; D∗) > 0 for some small ε, contracting the concept of equilibrium. To address this issue, different notions of equilibrium have been proposed in the literature; see Huang and Zhou [25] and He and Jiang [24] for time-inconsistent control problems, and Bayraktar et al. [7] and Bayraktar et al. [8] for time-inconsi-
stent stopping problems. In this paper, we choose the notion of weak equilibrium because it requires minimal assumptions on the model, and for MV problems, weak equilibria can be characterized by the extended HJB equations (see Theorem 3.1 below). By comparison, stronger notions of equilibria require more restrictive assumptions on the model, and they may fail to exist (see, for instance, Section 4.4 in He and Jiang [25]). Thus, a weak equilibrium is often the first choice when studying a time-inc-
onsistent control or stopping problem, and one proceeds to stronger notions only when there is a good understanding of weak equilibria. As mentioned in the Introduction, the research on time-inconsistent singular control problems is in its early stage, and it is, thus, not surprising that several recent papers (see Liang et al. [31], Liang and Luo [32], Dai et al. [17], and Cao et al. [12]) all choose the notion of weak equilibrium.
Remark 2.2. As nicely noted in Bjo ̈rk and Murgoci [10], for all time-inconsistent control problems over a finite, discrete-time horizon, equilibrium strategies, defined similar to the one in Definition 2.1, always exist and can be obtained by backward recursion, which in turn implies the uniqueness of the equilibrium value function V (although there may exist multiple equilibrium strategies achieving the same V ). However, the existence result is highly nontrivial for the infinite horizon case, d-
ue to the lack of natural boundaries, which is shared by our random horizon setup. In addition, uniqueness on V may fail on infinite horizon time-inconsistent problems, and there are concrete examples in the literature that admit multiple equilibria. For instance, Example 3.1 in Landriault et al. [30] shows that there exist multiple linear equilibrium strategies, each yielding a different V , for their MV investment problems over an exponentially distributed random horizon. For the same reason, th-
ere is no guarantee on the uniqueness of the equilibrium value function V defined by (2.6).
7The assumption of ∑
s∈(t,t+ε) ∆Dε
s = o(ε) seems to be required in Liang and Luo [32] as well, even though they write O(ε) instead of o(ε) (see Definition 2.5(c), p.172).
7

3 Verification theorem
In this section, we prove a verification theorem for the equilibrium value function V in (2.6) and the corresponding equilibrium strategy D∗. We define a differential operator M by
Mφ(x, t) = ∂tφ(x, t) + a ∂xφ(x, t) + 1
2 b2∂xxφ(x, t),
in which φ ∈ C2,1(R2+) and ∂·φ denotes the corresponding partial derivative of φ. Because the following verification theorem is relatively new in the literature, we provide its proof in full detail.
Theorem 3.1. Let V ̃ , G, and H be three functions, all mapping from (x, t) ∈ R2+ to R. Define the pay region P and no-transaction region NT, respectively, by
P = {(x, t) ∈ R2+ : ∂xV ̃ (x, t) = 1} and NT = R2+\P. (3.1)
Suppose that V ̃ , G, and H satisfy the following conditions:
1. V ̃ , G, and H ∈ C2,1(R2+), except that G(·, t) and H(·, t) might only be C1 along a specific path x = x ̃(t) for all t ≥ 0, with both left and right second derivatives.
2. G and H satisfy regularity conditions such that the stochastic integrals in (3.8) and (3.11) have zero (conditional) expectation and lims→∞ Ex,t
(e−ρ(s−t) φ(Xs, s)) = 0 for φ = G, H.
3. For all (x, t) ∈ R2+, V ̃ , G, and H jointly solve the extended HJB system:
max
{
MV ̃ − γ
2 MG2 + γG · MG − ρG + γρ(H − G2), 1 − ∂xV ̃
}
= 0, (3.2)
(MG(x, t) − ρG(x, t))1{(x,t)∈NT} + (1 − ∂xG(x, t))1{(x,t)∈P} = 0, (3.3)
(MH(x, t) − 2ρH(x, t))1{(x,t)∈NT} + (2G(x, t) − ∂xH(x, t))1{(x,t)∈P} = 0, (3.4)
in which the argument (x, t) is suppressed in (3.2), with the boundary conditions
V ̃ (0, t) = G(0, t) = H(0, t) = 0, for all t ≥ 0. (3.5)
In addition, there exists an admissible dividend strategy D∗ = (Ds∗)s≥t that solves the Skorokhod reflection problem


dXs∗ = a ds + b dBs − dDs∗, with X∗
t− = x,
(Xs∗, s) ∈ NT,
Ds∗ = D∗
t− + ∫ s
t 1{(x,t)∈P} dDu∗,
(3.6)
for all s ≥ t, in which NT denotes the closure of NT in (3.1).
Then, V ̃ is an equilibrium value function defined in (2.6), and D∗ is a time-consistent equilibrium dividend strategy. Moreover, G and H have the representations
G(x, t) = Ex,t (Yt∗) and H(x, t) = Ex,t
( (Yt∗)2 ), (3.7)
8

in which Y ∗ is the discounted dividends under D∗; thus, V (x, t) = G(x, t) − γ
2
(H(x, t) − G2(x, t)).
Before we prove Theorem 3.1, we provide some intuition for the results. Assume that a lump-sum dividend payment is optimal at (x, t); then, the amount to be paid equals arg supd≥0 V (x − d, t)+ d, which motivates the definition of the “pay region” P in (3.1). For the “no-transaction region” NT, the value function satisfies a standard differential equation, namely, MV − γ
2 MG2 +γG·MG−ρG+
γρ(H −G2) = 0. Together, they explain the variational inequality in (3.2) satisfied by V . Similarly, both G and H are characterized separately for (x, t) ∈ P and (x, t) ∈ NT, leading to (3.3) and (3.4), respectively. Based on the partition of P and NT, we know that if (x, t) ∈ Po (interior of P), then the manager should immediately pay dividends to reach the boundary of the “no-transaction region” NT or pay out all of x in dividends if ∂NT (the boundary of NT) is unreachable.8 Thereafter, the int-
erventions are of “local-time type,” as described by the third equation in (3.6), to keep the company’s surplus within the no-transaction region (that is, (Xs∗, s) ∈ NT). Similar to Liang and Luo [32], the state-time space is divided into two regions (see (3.1) here and (3.1)–(3.2) therein), but Dai et al. [17] further separate the pay region P into “buy” and “sell” regions in their transaction costs model because buying and selling the risky asset incur costs at different rates.
Proof. Suppose that V ̃ , G, and H satisfy the conditions of this theorem, and suppose there exists a solution D∗ ∈ At to the Skorokhod reflection problem in (3.6). We prove the theorem in four steps.
Step 1. We show that if G solves (3.3) with G(0, t) = 0, then G(x, t) = Ex,t(Yt∗) in (3.7). Fix (x, t) ∈ R2+ and a positive number k > t. By applying Itˆo’s formula to e−ρ(·−t)G(X·∗, ·), we obtain
e−ρ((τ∗∧k)−t)G(Xτ∗∗∧k, τ ∗ ∧ k) = G(x, t) +
∫ τ ∗∧k
t
e−ρ(s−t)(MG(Xs∗, s) − ρG(Xs∗, s)) ds
−
∫ τ ∗∧k
t
e−ρ(s−t)∂xG(Xs∗, s) dDs∗,c +
∫ τ ∗∧k
t
e−ρ(s−t)b ∂xG(Xs∗, s) dBs
+∑
s∈[t,τ ∗∧k]
e−ρ(s−t) (G(X ∗
s− − ∆Ds∗, s) − G(X∗
s− , s)), (3.8)
in which D∗,c is the continuous part of D∗. The first integral in (3.8) equals 0 because (Xs∗, s) ∈ NT for all s > t, on which MG − ρG = 0 by (3.3). The above discussion implies that a lump-sum dividend (∆Ds∗ > 0) is only possible at the initial time t when (x, t) ∈ Po;9 in that case, we have
G(x − ∆Dt∗, t) − G(x, t) = ∫ ∆Dt∗
0 ∂xG(X∗
t− − u, t) · 1{(X∗
t− ,t)∈Po}du = ∆Dt∗ · 1{(X∗
t− ,t)∈Po} because
∂xG = 1 on Po ⊂ P. By using this result, we get
−
∫ τ ∗∧k
t
e−ρ(s−t)∂xG(Xs∗, s) dDs∗,c + ∑
s∈[t,τ ∗∧k]
e−ρ(s−t) (G(X ∗
s− − ∆Ds∗, s) − G(X∗
s− , s))
=−
∫ τ ∗∧k
t
e−ρ(s−t)∂xG(Xs∗, s) dDs∗,c − ∆Dt∗ = −
∫ τ ∗∧k
t
e−ρ(s−t) dDs∗,
8If ∂NT is unreachable from P, which could occur if (0, x] ⊂ P for some x > 0, then ∆Dt∗ = Xt− = x, and ruin occurs immediately. 9The subsequent analysis follows even without explicitly using this result (that is, temporarily allowing ∆Ds∗ > 0
for s > t). In that case, note Ds∗ = D∗,c
s +∑
u∈[t,s] ∆D∗u.
9

in which the last equality uses ∂xG = 1 on {dDs∗,c > 0} ⊂ P and Ds∗ = Ds∗,c + ∆Dt∗. Next, we take conditional expectation on both sides of (3.8) and use the above results, Condition 2 in the theorem, and G(0, t) = 0 to obtain
G(x, t) = Ex,t
( ∫ τ ∗∧k
t
e−ρ(s−t) dDs∗
)
+ e−ρ(k−t)G(Xk∗, k) · 1{τ ∗>k},
which yields the desired assertion by sending k → ∞ and using Condition 2.
Step 2. We show that if H solves (3.4) with H(0, t) = 0, then H(x, t) = Ex,t
((Yt∗)2) in (3.7) holds. Fix (x, t) ∈ R2+ and assume that ruin has not occurred by time t. Define a sequence of stopping times {ηn}n=1,2,... by ηn := inf{s ≥ t : Xs∗ ≥ n}. For a fixed k > t, denote τn,k = τ ∗ ∧ k ∧ ηn; define
functions Gˆ and Hˆ by
Gˆ(x, t) = e−ρtG(x, t), and Hˆ (x, t) = e−2ρtH(x, t).
By applying Itˆo’s formula to Gˆ(X·∗, ·) as in Step 1, we deduce
Gˆ(Xs∗, s) =
∫ τn,k
s
e−ρu dDu∗ −
∫ τn,k
s
b ∂ˆxG(Xu∗, u) dBu + Gˆ(Xτ∗n,k , τn,k). (3.9)
It follows from (3.4) and (3.5) that Hˆ solves
MHˆ (x, t)1{(x,t)∈NT} + (2e−ρtGˆ(x, t) − ∂xHˆ (x, t))1{(x,t)∈P} = 0, Hˆ (0, t) = 0. (3.10)
By applying Itˆo’s formula to Hˆ (X·∗, ·) and using the results from Step 1, we obtain
Hˆ (Xτ∗n,k , τn,k) = Hˆ (x, t) +
∫ τn,k
t
MHˆ (Xs∗, s) ds +
∫ τn,k
t
b ∂xHˆ (Xs∗, s) dBs
−
∫ τn,k
t
∂xHˆ (Xs∗, s) dDs∗,c + ∑
s∈[t,τn,k ]
(Hˆ (X∗
s− − ∆Ds∗, s) − Hˆ (X∗
s− , s)
)
= Hˆ (x, t) +
∫ τn,k
t
MHˆ (Xs∗, s) ds +
∫ τn,k
t
b ∂xHˆ (Xs∗, s) dBs
−
∫ τn,k
t
∂xHˆ (Xs∗, s) dDs∗ +
(
∂xHˆ (x, t)∆Dt∗ + Hˆ (x − ∆Dt∗, t) − Hˆ (x, t)
)
1{(x,t)∈Po }
= Hˆ (x, t) +
∫ τn,k
t
b ∂xHˆ (Xs∗, s) dBs −
∫ τn,k
t
2e−ρsGˆ(Xs∗, s) dDs∗
+
(
2e−ρtGˆ(x, t)∆Dt∗ + Hˆ (x − ∆Dt∗, t) − Hˆ (x, t)
)
1{(x,t)∈Po}, (3.11)
in which we use MHˆ = 0 on NT and ∂xHˆ = 2e−ρtGˆ on P; recall that X∗
s− − Xs∗ = ∆Ds∗ > 0 if
and only if s = t and (x, t) ∈ Po. To analyze Hˆ (x − ∆Dt∗, t) − Hˆ (x, t) when (x, t) ∈ Po, note that for all z ∈ [x − ∆Dt∗, x], (z, t) ∈ P, and given Xt− = z, there is an immediate lump-sum payment
of size z − (x − ∆Dt∗) at time t, implying G(z, t) = Ez,t(Yt∗) = Ex−∆Dt∗,t(Yt∗) + (z − (x − ∆Dt∗)).
10

Using these results, along with (3.10), we have
Hˆ (x − ∆Dt∗, t) − Hˆ (x, t) = −
∫x
x−∆Dt∗
∂xHˆ (z, t) dz = −2e−ρt
∫x
x−∆Dt∗
Gˆ(z, t) dz
= −2e−2ρt
∫x
x−∆Dt∗
(Ex−∆Dt∗,t(Yt∗) + (z − (x − ∆Dt∗))) dz
= −2e−2ρt
(
∆Dt∗ · Ex−∆Dt∗,t(Yt∗) + 1
2 (∆Dt∗)2
)
= −e−2ρt
(
2∆Dt∗ · Ex,t
(∫ τ∗
t
e−ρ(s−t) dDs∗ − ∆Dt∗
)
+ (∆Dt∗)2
)
= −e−2ρt
(
2∆Dt∗ · Ex,t
(∫ τ∗
t
e−ρ(s−t) dDs∗
)
− (∆Dt∗)2
)
. (3.12)
Then, combining (3.11) with (3.9) and (3.12) and taking conditional expectations imply
Hˆ (x, t) = Ex,t
(Hˆ (Xτ∗n,k , τn,k)
)
+ 2 Ex,t
( ∫ τn,k
t
e−ρs
(∫ τn,k
s
e−ρudDu∗
)
dDs∗
)
+ 2 Ex,t
(
Gˆ(Xτ∗n,k , τn,k)
( ∫ τn,k
t
e−ρsdDs∗ − e−ρt∆Dt∗ · 1{(x,t)∈Po}
))
− e−2ρt(∆Dt∗)2 1{(x,t)∈Po},
in which we have used the fact that Gˆ and Hˆ are at least C1 with respect to x, and 0 < Xs∗ ≤ n for all s ∈ [t, τn,k] to deduce that all stochastic integrals involved above have zero expectations. The growth conditions on G and H imply that as n → ∞ and k → ∞, Ex,t
(Hˆ (Xτ∗n,k , τn,k)) → 0
and Ex,t
(Gˆ(Xτ∗n,k , τn,k)) → 0; also, τn,k → τ ∗, and the monotone convergence theorem applies. Therefore, upon sending n → ∞ and k → ∞, we obtain
Hˆ (x, t) = 2Ex,t
(∫ τ∗
t
e−ρs
(∫ τ ∗
s
e−ρudDu∗
)
dDs∗
)
− e−2ρt(∆Dt∗)2 · 1{(x,t)∈Po}
= 2Ex,t
(∫ τ∗
t+
e−ρs
(∫ τ ∗
s
e−ρudDu∗
)
dDs∗
)
+ 2e−ρt∆Dt∗Ex,t
(∫ τ∗
t
e−ρudDu∗
)
· 1{(x,t)∈Po}
− e−2ρt(∆Dt∗)2 · 1{(x,t)∈Po}
= 2Ex,t
(∫ τ∗
t
e−ρs
(∫ τ ∗
s
e−ρudDu∗,c
)
dDs∗,c
)
+ 2e−ρt∆Dt∗ Ex,t
(∫ τ∗
t
e−ρudDu∗,c + e−ρt∆Dt∗ · 1{(x,t)∈Po}
)
· 1{(x,t)∈Po}
− e−2ρt(∆Dt∗)2 · 1{(x,t)∈Po}
= Ex,t
(( ∫ τ∗
t
e−ρs dDs∗,c + e−ρt∆Dt∗ · 1{(x,t)∈Po}
)2)
= Ex,t
(( ∫ τ∗
t
e−ρs dDs∗
)2)
= Ex,t
( (Yt∗)2 ),
11

thereby, proving the result in (3.7).
Step 3. We show that if V ̃ solves (3.2) with V ̃ (0, t) = 0, then V ̃ (x, t) = J(x, t; D∗). First, we consider (x, t) ∈ NT; in this case, the first term in (3.2) equals 0. Using this identity, along with (3.3) and (3.2), leads to
M
(V ̃ (x, t) − γ
2 G2(x, t)
)
= −γG(x, t)MG(x, t) + ρG(x, t) − γρ(H(x, t) − G2(x, t))
= ρG(x, t) − γρH(x, t) = M
(
G(x, t) − γ
2 H(x, t)
) .
We, then, apply similar arguments as in Step 1 to V ̃ (x, t) − γ
2 G2(x, t) and G(x, t) − γ
2 H(x, t) and
use the above equality, the transversality condition, and V ̃ (0, t)− γ
2 G2(0, t) = 0 = G(0, t)− γ
2 H(0, t)
to conclude that V ̃ (x, t) = G(x, t) − γ
2 (H(x, t) − G2(x, t)) = Ex,t(Yt∗) − γ
2 Vx,t(Yt∗) = J (x, t; D∗).
Next, we consider (x, t) ∈ P; in this case, ∂xV ̃ (x, t) = ∂xG(x, t) = 1 and ∂xH(x, t) = 2G(x, t). As such,
∂x
(V ̃ (x, t) − γ
2 G2(x, t)
)
= 1 − γG(x, t) = ∂x
(
G(x, t) − γ
2 H(x, t)
) ,
which, along with the boundary condition, confirms V ̃ (x, t) = J(x, t; D∗) for this case. Therefore, for all (x, t) ∈ R2+, V ̃ (x, t) = J(x, t; D∗) holds as desired.
Step 4. We show that if D∗ ∈ At solves (3.6), then D∗ is an equilibrium dividend strategy. To that end, define the perturbed strategy Dε as in (2.4), and we want to prove that the limit in (2.5) holds. Recall that d ∈ [0, x] is the lump-sum payment at t under Dε. First, assume d = x, and ruin occurs immediately at t under Dε, resulting in J(x, t; Dε) = x. Because V (0, t) = 0 and ∂xV (x, t) ≥ 1, it follows that V (x, t) ≥ x = J(x, t; Dε) for all (x, t), and, thus, the limit in (2.5) holds when d =-
 x. Given the above analysis, we assume d < x in the remainder of this step; we also write X := XDε , Yt := Y Dε
t , and τ := τ Dε for notational simplicity in the proof. By definition, J(x, t; Dε) =
Ex,t(Yt)− γ
2 Ex,t
(Yt2
)+ γ
2
(Ex,t(Yt))2; in what follows, we analyze each of the three terms in J(x, t; Dε) by expanding them to order o(ε). To start, we recall an important result on finite-time ruin probabilities (see, for instance, Appendix in Grandell [22])
Px,t
(τ > t + ε) ∼ 1 − b√ε
x exp
(
−1
2ε
(x
b
)2)
= 1 + o(ε); (3.13)
with this result, we can omit 1{τ>t+ε} in the following derivations. For convenience, in the derivation below, we introduce
Gt := G(x − d, t), Ht := H(x − d, t);
Iρ :=
∫ t+ε
t+
e−ρ(s−t)dδ(s), Iφ := Ex,t
(∫ t+ε
t+
∂xφ(Xs, s)dδ(s)
)
, φ ∈ C1,1(R2+).
Recall from Definition 2.2 that δ is a non-decreasing, continuous function over [t, t + ε), satisfying δ(t + ε) − δ(t) = O(ε) as ε → 0. As such, for ε small enough, Iρ can be approximated by
Iρ =
∫ t+ε
t+
1 dδ(s) + o(ε) = Iφ + o(ε), with φ(x, s) ≡ x.
12

Now using the fact that φ is at least C1 for any of φ = x, G, or H, the following estimates hold:
Iφ = Cε + o(ε) and IφIφ′ = C′ε2 + o(ε2), φ, φ′ = x, G, H,
for some positive constants C and C′ that might depend on φ and φ′. Note that the latter result allows us to safely drop terms involving IφIφ′ if we truncate at the order o(ε). First, we analyze Ex,t(Yt) as follows:
Ex,t(Yt) = Ex,t
(∫ τ
t
e−ρ(s−t) dDsε
)
= Ex,t
(
d+
∫ t+ε
t+
e−ρ(s−t)dδ(s) +
∫τ
t+ε
e−ρ(s−t) dDs∗
)
= d + Iρ + Ex,t
(
e−ρε1{τ >t+ε} EXt+ε,t+ε
(∫ τ∗
t+ε
e−ρ(s−(t+ε)) dDs∗
))
+ o(ε)
= d + Iρ + (1 − ρε) Ex,t
(G(Xt+ε, t + ε)) + o(ε)
= d + Iρ + (1 − ρε) Ex,t
(
G(x, t) +
∫ t+ε
t+
MG(Xs, s) ds +
∫ t+ε
t+
b ∂xG(Xs, s) dBs
−
∫ t+ε
t+
∂xG(Xs, s) dδ(s) + G(x − d, t) − G(x, t)
)
+ o(ε)
= d + Gt + ε(MGt − ρGt
) + Iρ − IG + o(ε).
Next, we consider Ex,t
((Yt)2); by using the Itˆo’s expansion for G(Xt+ε, t + ε) and H(Xt+ε, t + ε) as above, along with (3.7) and (3.13), we obtain
Ex,t
(Yt2
) = Ex,t
[(
d + Iρ +
∫τ
t+ε
e−ρ(s−t)dDs∗
)2]
= d2 + I2ρ + e−2ρε Ex,t
(H(Xt+ε, t + ε)) + 2dIρ
+ 2(d + Iρ)e−ρε Ex,t
(G(Xt+ε, t + ε)) + o(ε)
= d2 + I2ρ + (1 − 2ρε)(Ht + ε MHt − IH
) + 2dIρ
+ 2(d + Iρ)(1 − ρε)(Gt + ε MGt − IG
) + o(ε)
= d2 + I2ρ + Ht + ε (MHt − 2ρHt) − IH + 2dIρ
+ 2d(Gt + ε (MGt − ρGt) ) + 2IρGt − 2dIG − 2IρIG + o(ε).
We proceed to analyze the third term (Ex,t(Yt))2. By using the results about Ex,t(Yt), we get
(Ex,t(Yt))2 = (d + Gt + ε(MGt − ρGt
) + Iρ − IG + o(ε))2
= (d + Gt)2 + 2ε(d + Gt)(MGt − ρGt) + 2(d + Gt)(Iρ − IG) + (Iρ − IG)2 + o(ε).
By combining the analysis of the three terms above and using the approximation Iρ = Ix + o(ε), we obtain
J(x, t; Dε) = d + Gt + ε(MGt − ρGt
)
−γ
2
(d2 + (Ht + ε(MHt − 2ρHt)) + 2d(Gt + ε (MGt − ρGt) ))
+γ
2
((d + Gt)2 + 2ε(d + Gt)(MGt − ρGt))
13

−γ
2
(I2ρ − IH + 2dIρ + 2IρGt − 2dIG − 2IρIG
)
+γ
2
(2(d + Gt)(Iρ − IG) + (Iρ − IG)2) + Iρ − IG + o(ε)
=d+
(
Gt − γ
2
(Ht − Gt2
))
+ ε(1 + γGt)(MGt − ρGt) − γ
2 ε(MHt − 2ρHt)
+ Ix − IG − γGtIG + γ
2 IH + o(ε).
Note from the proof of Step 3 that G− γ
2
(H − G2) = V ̃ . Using the definition of Iφ, with φ = x, G, H, we have
Ix − IG − γGtIG + γ
2 IH =
∫ t+ε
t+
(
1 − ∂xG − γG∂xG + γ
2 ∂xH
) ∣∣∣(Xs,s) dδ(s) + o(ε)
=
∫ t+ε
t+
(
1 − ∂xV ̃ (Xs, s)
)
dδ(s) + o(ε) ≤ o(ε), (3.14)
in which the last inequality follows from 1 − ∂xV ̃ ≤ 0 in (3.2). Therefore, by using the above estimate and the identity of V ̃ , we further reduce J(x, t; Dε) to
J(x, t; Dε) = d + V ̃t + ε
(
MV ̃t − γ
2 MGt2 + γGtMGt − ρGt + γρ(Ht − Gt2
))
+ o(ε)
≤ d + V ̃t + o(ε)
= V ̃ (x, t) +
(
d−
∫x
x−d
∂xV ̃ (z, t) dz
)
+ o(ε)
≤ V ̃ (x, t) + o(ε) = J(x, t; D∗) + o(ε),
in which V ̃t := V ̃ (x − d, t), and the two inequalities follow from (3.2). Finally, we conclude that the desired limit result in (2.5) holds.
Remark 3.1. Because both this paper and Cao et al. [12] seek equilibrium strategies for MV dividend problems from a game-theoretic perspective, their verification lemmas and proofs share certain similarities. However, there are also major differences, which we now describe. In Theorem 3.1, the feasible region is partitioned into the pay region and no-transaction region, and all related functions (V , G, and H) are characterized separately in these two regions; the value function V satisfies an HJB-
-variational inequality equation in (3.2), which appears because of the singular-control framework. By comparison, each corresponding function in Theorem 2.3 of Cao et al. [12] is characterized by one second-order PDE over the entire region, and the value function V therein satisfies a standard HJB equation. Regarding the equilibrium strategies, D∗ in this paper is obtained as a solution of the associated Skorokhold reflection problem in (3.6), but D∗ in Cao et al. [12] is the maximizer of the HJB-
 equation of V . The difference in their proofs lies on the technical side and mainly originates from their differences concerning the definition of perturbed strategies (see Remark 2.1). In particular, it takes a delicate and involved analysis to study the performance of the perturbed strategy Dε here in Step 4, which eventually yields the desired first-order inequality in (2.5).
14

4 Equilibrium dividend strategies
In this section, we apply the verification theorem (Theorem 3.1) to derive the equilibrium dividend strategy D∗ in (semi)closed form for large γ (risk aversion) and small γ. To begin, we review the special case of γ = 0; note that the objective J in (2.3) becomes Ex,t(Yt), and the corresponding optimal dividend problem is time-consistent and has been solved in the literature. For instance, Theorem 2.2 and Lemma 2.3 in Taksar [33] show that the optimal strategy is a barrier strategy with a strictly-
 positive barrier x ̃ (because a > 0), and the value function is concave and obtained explicitly in a two-piece form separated by the barrier x ̃. We hypothesize that for small positive γ, a similar result holds. However, for γ large enough, the penalty on the variation of dividend payments should “force” the manager to pay the entire surplus and declare bankruptcy (yielding a zero variance). We formally verify this latter hypothesis in the next theorem.
Theorem 4.1. If the following condition holds
γ ≥ 2a
b2 , (4.1)
then an equilibrium dividend strategy is to pay out all of surplus as dividends immediately (that is, Dt∗ = Xt− = x and τ ∗ = t), and we have V (x, t) = G(x, t) ≡ x and H(x, t) ≡ x2 for all x ≥ 0.
Proof. Suppose inequality (4.1) holds; we consider the strategy of paying all dividends immediately (and thereby ruining immediately). This strategy is clearly admissible by Definition 2.1, and it implies that the pay region is P = R2+ and Yt = x. As such, it follows from (3.7) that G(x, t) ≡ x and H(x, t) ≡ x2, and they satisfy the related HJB equations in (3.3) and (3.4). Given G and H, we obtain the (candidate) value function by V (x, t) = G(x, t) − γ
2 (H(x, t) − G2(x, t)) ≡ x, which implies that 1 − ∂xV ≤ 0 holds with equality, and the boundary condition in (3.5) is satisfied. It remains to show that the first variational inequality in (3.2) is true for all x ∈ R+. To that end, we compute
MV − γ
2 MG2 + γGMG − ρG + γρ(H − G2) = a − γ
2 b2 − ρx,
which is non-positive for all x ≥ 0 when (4.1) holds. Thus, V , G, and H satisfy the conditions of Theorem 3.1, and paying out all of surplus as dividends is an equilibrium strategy.
We next prove a non-trivial result for small risk aversion γ and confirm the earlier hypothesis that a barrier strategy is an equilibrium dividend strategy. For convenience, define
r1 = 1
b2
[
−a + √a2 + 2ρb2
]
> 0, r2 = 1
b2
[
−a − √a2 + 2ρb2
]
< 0, (4.2)
r3 = 1
b2
[
−a + √a2 + 4ρb2
]
> 0, r4 = 1
b2
[
−a − √a2 + 4ρb2
]
< 0. (4.3)
15

Theorem 4.2. There exists an ε ∈ (0, 2a
b2 ) such that for all γ ∈ (0, ε), equation
0 = r12er1x − r22er2x
r1er1x − r2er2x + γ
{
1 + er1x − er2x
r1er1x − r2er2x
( r12er1x − r22er2x
r1er1x − r2er2x − r32er3x − r42er4x
r3er3x − r4er4x
)}
=: f (x, γ)
(4.4)
admits a unique positive solution, denoted by x ̃. If (1) γ < ε, and (2) V in (4.8) is strictly concave over [0, x ̃), then a barrier strategy, with constant barrier x ̃, is an equilibrium strategy D∗, with P = [x ̃, ∞) × R+ and NT = [0, x ̃) × R+. Moreover,
G(x) = Ex(Y0∗) =
{
C1
(er1x − er2x), x < x ̃,
C1
(er1x ̃ − er2x ̃) + (x − x ̃), x ≥ x ̃, (4.5)
and
H(x) = Ex
[(Y0∗)2] =
{
C3
(er3x − er4x), x < x ̃,
C3
(er3x ̃ − er4x ̃) + 2C1
(er1x ̃ − er2x ̃)(x − x ̃) + (x − x ̃)2, x ≥ x ̃, (4.6)
in which
C1 = 1
r1er1x ̃ − r2er2x ̃ > 0 and C3 = 2(er1x ̃ − er2x ̃)
(r1er1x ̃ − r2er2x ̃) (r3er3x ̃ − r4er4x ̃) > 0, (4.7)
and the corresponding value function equals
V (x) = G(x) − γ
2
(H(x) − G2(x)) . (4.8)
Proof. Because the problem is time-homogeneous, we expect the value function V to be timeindependent, along with G and H. For this reason, we set time equal to 0 and suppress the time argument in the analysis; also, we write φ′ and φ′′ to denote the first and second derivative (with respect to x) for φ = V, G, or H. We hypothesize that a time-independent barrier strategy, with a constant barrier x ̃ > 0, is an equilibrium dividend strategy D∗ (in the sense of Definition 2.2). Specifically, this st-
rategy dictates the manager of the company to pay (x − x ̃)1x≥x ̃ in dividends at time 0 (with initial surplus X0− = x ≥ 0) and thereafter pay dividends in order to keep the surplus Xt∗ ∈ [0, x ̃] for all t > 0. Since the barrier strategy D∗ is time-independent, we write the pay region as P = [x ̃, ∞) and the no-transaction region as NT = [0, x ̃) associated with D∗ in the proof. With the above hypothesis, we proceed to solve for G and H based on whether x ∈ NT or x ∈ P. First, assume x ∈ NT, that-
 is, x < x ̃. In this case, by (3.3), G solves the boundary-value problem, −ρG(x) + aG′(x) + 1
2 b2G′′(x) = 0, with G(0) = 0, whose solution equals the first expression in
(4.5). Similarly, using (3.4) for H, we solve −2ρH(x) + aH′(x) + 1
2 b2H′′(x) = 0, given H(0) = 0, and obtain the first expression for H in (4.6). Next, assume x ∈ P, that is, x ≥ x ̃. In this case, our ansatz strategy implies that the company immediately pays a lump-sum dividend of x − x ̃. By the continuity of G and using G′(x) = 1, we arrive at the second expression of G in (4.5). Next, (3.4) implies H′(x) = 2G(x), and using this result leads to the second expression of H in (4.6).
16

The two positive constants C1 and C3 in (4.5) and (4.6) are yet to be determined. To determine them, we use the condition that G, H ∈ C2(R+), except possibly at x = x ̃ where they must be C1. This motivates us to impose the “smooth pasting” condition: G′(x ̃−) = G′(x ̃+) and H′(x ̃−) = H′(x ̃+), from which we obtain C1 and C3 as in (4.7). With G and H obtained in (4.5) and (4.6), respectively, we immediately obtain the candidate value function V by (4.8); note that the barrier x ̃ > 0 (appearing -
in (4.5), (4.6), and (4.8)) is unknown from the ansatz. To determine x ̃, we impose the condition
V ′′(x ̃−) := lxi↑mx ̃ V ′′(x) = 0. (4.9)
By using (4.5) and (4.6), we verify that V ′′(x ̃+) := limx↓x ̃ V ′′(x) = 0 holds automatically. Therefore, with (4.9), we have V ′′(x ̃) = 0, and it further implies V ∈ C2(R+) because the continuity of V and V ′ follows from that of G, G′, H, and H′. To obtain a finer condition for (4.9), we compute: for all x < x ̃,
V ′′(x) = r1er1x − r2er2x
r1er1x ̃ − r2er2x ̃ ·
{
r12er1x − r22er2x
r1er1x − r2er2x + γ
[ r1er1x − r2er2x
r1er1x ̃ − r2er2x ̃ + (er1x − er2x)(r12er1x − r22er2x)
(r1er1x ̃ − r2er2x ̃)(r1er1x − r2er2x)
− (er1x ̃ − er2x ̃)(r32er3x − r42er4x)
(r3er3x ̃ − r4er3x ̃)(r1er1x − r2er2x)
]}
=: r1er1x − r2er2x
r1er1x ̃ − r2er2x ̃ · g(x, x ̃), (4.10)
which shows that V ′′(x ̃−) = 0 in (4.9) is equivalent to f (x ̃, γ) = 0 in (4.4). To study the solvability of (4.4), we treat the right side of (4.4) as a function of x and γ and denote it by f (x, γ). For every fixed γ satisfying γ < 2a/b2, we have
f (0, γ) = γ − 2a
b2 < 0 and xli→m∞ f (x, γ) = r1 + γ
(
2 − r3
r1
)
> 0, (4.11)
in which the second inequality follows from 2r1 > r3 by their definitions in (4.2) and (4.3). As such, combining with the fact that f (·, γ) is continuous over R+, f (x, γ) = 0 admits at least one positive solution xγ for all γ ∈ (0, 2a/b2). To obtain the uniqueness result, we first set γ = 0 and verify that f (x, 0) = 0 has a unique positive solution, x0 (by using (4.11) and verifying ∂xf (x, 0) > 0). Moreover, by a tedious calculation, we deduce ∂xf (x, γ)|(x0,0) ∝ −r1r2(r1 − r2)2 e(r1+r2)x0 > 0-
. Therefore, by the implicit function theorem, there exists a small ε ∈ (0, 2a
b2 ) such that (4.4) has a unique positive solution x ̃ := xγ (that is, f (xγ, γ) = 0) for all γ < ε. (Recall that we assumed γ < 2a
b2 to obtain f (0, γ) < 0 in (4.11); therefore, we impose an upper bound of 2a
b2 on ε.) By construction, G in (4.5) and H in (4.6) satisfy all the conditions of Theorem 3.1, and the candidate barrier strategy is admissible and solves the Skorokhod reflection problem (3.6) with X0− = x and NT = [0, x ̃)×R+ (see, for instance, Lemma 4.1 in Wang and Zou [34]). The remaining task is to verify that V satisfies the HJB variational equation in (3.2) and that the partition in (3.1) is consistent with V . Because 1 − V ′(x) = 0 on P by (3.3) and (3.4), the strict concavity of V in C-
ondition (3) implies that 1 − V ′(x) < 0 for all x ∈ NT. Finally, by applying Theorem 3.1, all the results in Theorem 4.2 follow as desired.
Remark 4.1. The first condition in Theorem 4.2 explicitly requires small γ. We claim that the
17

second condition (that is, V in (4.8) is strictly concave over [0, x ̃)) also requires small γ (γ ≤ 2a
b2 , to
be precise). To prove our claim, we argue by contradiction and choose a γ > 2a
b2 ; suppose γ is such that f (x, γ) = 0 has a unique solution x ̃. For such a γ, we have f (0, γ) > 0 and limx→∞ f (x, γ) > 0. From the continuity of f (·, γ) and uniqueness of x ̃, we deduce f (x, γ) > 0 for all x 6= x ̃. This, along with (4.10), implies that g(x, x ̃) > 0 for all x 6= x ̃, which in turn yields V ′′(x) > 0 over [0, x ̃), contradicting the strictly concavity of V . Numerical analysis in the next section further suggests that there exists an upper bound γ ̄ < ε ≤ 2a
b2 such that both conditions in Theorem 4.2 hold. As
a consequence, when γ > 2a
b2 , Theorem 4.1 shows that paying the entire surplus immediately is an equilibrium strategy; when γ ≤ γ ̄, Theorem 4.2 shows that a barrier strategy with a constant barrier x ̃ is an equilibrium strategy. However, for intermediate level risk aversion γ ∈ (γ ̄, 2a
b2 ), finding equilibrium strategies remains an open question.
Remark 4.2. In this remark, we first compare our results in Theorems 4.1 and 4.2 with those in Cao et al. [12]. In their paper, the model must satisfy a key inequality (equation (3.3)) first, and, then, when risk aversion is small enough, a barrier strategy is an equilibrium strategy (see Theorem 3.2 in that paper); if the inequality fails, Theorem 3.3 therein shows that paying dividends at the maximum rate is an equilibrium strategy, but again for small risk aversion. By comparison, paying out al-
l surplus in Theorem 4.1 is an equilibrium strategy for large, not small, risk aversion; moreover, a similar inequality is not needed for either theorem here. Recall that Condition (2) in Theorem 4.2 helps verify 1 − V ′(x) < 0 for all x ∈ NT, which arises from the variational inequality in (3.2), but a similar condition is not needed in Theorem 3.2 of Cao et al. [12] because they adopt the classical control framework and the value function only needs to satisfy an (extended) HJB equation (see equ-
ation (2.3) in that paper). Under the same diffusion model as ours in (2.1), Grandits et al. [23] investigate the optimal dividend strategy that maximizes the expected exponential utility of total dividends paid up to the
ruin time, maxD E[U (∫ τ
t e−ρsdDs)], in which U (x) = (1 − e−γx)/γ. They show that when γ ≥ 2a
b2 ,
the optimal strategy is to pay out the entire surplus immediately, which aligns with our finding in Theorem 4.1. When γ < 2a
b2 , and assuming the existence of a positive solution b(t) to a certain integral equation (equation (25)), the barrier strategy with time-dependent barrier b(t) is an optimal strategy, which resembles our result in Theorem 4.2. The reason that their barrier is time-dependent is that future dividends are discounted to time 0 in their time-t value function (equation 12); the same setup is also used in Eisenberg and Kru ̈hner [19]. Gerber and Shiu [21] provide a detailed
study on the distribution of Y0 = ∫ τ
0 e−ρs dDs under barrier strategies, but they do not attempt to solve for the optimal barrier.
5 Numerical examples
When risk aversion is large enough (γ ≥ 2a
b2 ), Theorem 4.1 shows that paying all of surplus im
mediately (Dt∗ = x) is an equilibrium strategy, and the corresponding value function is V (x) = x. However, for small γ, the results in Theorem 4.2 are less explicit; thus, the first objective of this section is to offer more insights via a detailed numerical analysis. To that end, we set a = 1 (surplus drift), b = 0.25 (surplus volatility), and ρ = 0.2 (discount rate). When γ = 0, the unique barrier x ̃
18

is given by (see equation (2.25) in Taksar [33])
x ̃ = b2
√a2 + 2ρb2 ln
√a2 + 2ρb2 + a
√a2 + 2ρb2 − a (= 0.3141),
and the value function V equals G in (4.5) with the above x ̃. In this case, V is strictly concave over the NT region and linear over the Pay region.
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35 0.4 0.45 0.5 x
-35
-30
-25
-20
-15
-10
-5
0
5
0.3 0.35 0.4 0.45 0.5
-0.2
-0.1
0
0.1
0.2
0 0.01 0.02 0.03 0.04 0.05 0.06 0.07 0.08 0.09 0.1 x
-1600
-1400
-1200
-1000
-800
-600
-400
-200
0
200
400
Figure 1: f (x, 0.15) in (4.4) (left) and V ′′(x) defined via (4.8) (right) when γ = 0.15
For the given parameter values, our numerical algorithm finds a unique positive root x ̃ to (4.4) for all γ < 32 (= 2a
b2 ). However, upon substituting x ̃ into the expression of V in (4.8), we find that V is strictly concave over [0, x ̃) only for γ ≤ 0.1397. (Strict concavity is required by Condition (2) in Theorem 4.2.) For instance, if we set γ = 0.15, then the unique root is x ̃ = 0.3244, but Figure 1 clearly shows that V ′′(x) > 0 when x is near 0. On the other hand, consider γ = 40 > 2a
b2 ;
Figure 2 shows that f (x, 40) = 0 has two positive roots, x ̃1 = 0.0624 and x ̃2 = 0.4222, and plots their corresponding V s defined by (4.8) for x ̃ = x ̃1, x ̃2, neither of which is concave over [0, x ̃). To echo our earlier comment from Remark 4.1, paying out full surplus is an equilibrium strategy for all γ ≥ 2a
b2 = 32; a barrier strategy with barrier x ̃ is an equilibrium strategy for all γ ≤ γ ̄ = 0.1397. But, for intermediate values γ ∈ (0.1397, 32), finding equilibrium strategies remains an open question.
0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 x
-700
-600
-500
-400
-300
-200
-100
0
100
0.4 0.6 0.8 1
-6
-4
-2
0
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35 0.4 0.45 x
-0.6
-0.5
-0.4
-0.3
-0.2
-0.1
0
-120
-100
-80
-60
-40
-20
0
20
Figure 2: f (x, 40) in (4.4) (left) and the corresponding V s in (4.8) when γ = 40
Given the above results, we now consider small γ ≤ 0.1397 and plot the unique positive root x ̃ := x ̃(γ) as a function of γ over this range. The left panel of Figure 3 shows that x ̃ is an increasing function of γ, and we explain this finding as follows: when γ increases, the penalty on dividend
19

variability increases, but since γ remains small, barrier strategies are still equilibrium strategies; the combined effect, then, drives the manager to set a higher barrier for paying dividends to reduce the variance. The right panel of Figure 3 verifies that f (·, γ = 0.13) = 0 has a unique root at x ̃ = 0.3232 when γ = 0.13 (note that f (·, γ) is strictly increasing).
0 0.02 0.04 0.06 0.08 0.1 0.12 0.14
0.314
0.315
0.316
0.317
0.318
0.319
0.32
0.321
0.322
0.323
0.324
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35 0.4 0.45 0.5 x
-35
-30
-25
-20
-15
-10
-5
0
5
0.3 0.35 0.4 0.45 0.5
-2
-1
0
1
Figure 3: The barrier x ̃ as a function of γ (left) and f (x, 0.13) in (4.4) when γ = 0.13 (right)
Next, we compute the equilibrium value function V in (4.8) for three different risk aversion levels, γ = 0.01, 0.06, and 0.13, and plot their graphs as a function of x in Figure 4. The left panel verifies the strict concavity of V over [0, x ̃), while the right panel shows that V , viewed as a function of γ, is decreasing. We expect V to decrease with respect to γ because of the form of the objective function J in (2.3), and it is satisfying to see our intuition born out in Figure 4.
0 0.05 0.1 0.15 0.2 0.25 0.3 0.35 0.4 x
0
1
2
3
4
5
6
0.1 0.15 0.2 0.25 0.3 0.35 0.4 x
4.5
4.6
4.7
4.8
4.9
5
5.1
Figure 4: The value function V (x) (left) and its zoom-in for x ∈ (0.1, 0.4) (right)
Recall that the equilibrium consumption strategy in Kronborg and Steffensen [28] is of a bangbang type, depending solely on the order between the risk-free rate and the discount rate ρ, and it is independent of the state process. This motivates us to study the impact of ρ on our results. In particular, we study how ρ affects the upper bound γ ̄ (Theorem 4.2 requires γ ≤ γ ̄) and the barrier x ̃ := x ̃(ρ) for a given small risk aversion γ = 0.1396. We first observe a technical result that the upper-
 bound on risk aversion, γ ̄, in Theorem 4.2 increases with respect to ρ. The right panel shows that the (unique) barrier x ̃ decreases as ρ increases, indicating that when the discount rate is higher (that is, the manager is less patient), larger dividends are paid out earlier. We proceed to study how the model parameters a and b in the diffusion surplus influence the barrier x ̃ given by (4.4). Again, we focus on the cases of small risk aversion γ in which Theorem 4.2
20

0.2 0.25 0.3 0.35 0.4 0.45 0.5
0.1
0.15
0.2
0.25
0.3
0.35
0.4
maximum
0.2 0.25 0.3 0.35 0.4 0.45 0.5
0.25
0.26
0.27
0.28
0.29
0.3
0.31
0.32
0.33
Figure 5: Impact of the discount rate ρ on the maximum allowed risk aversion γ ̄ (left) and the barrier x ̃ under γ = 0.1396 (right)
applies, and note that the admissible range of γ is implicitly determined by the model parameters. Here, we present results for γ = 0.11 in Figure 6, under which all conditions of Theorem 4.2 are satisfied over the range of a and b considered. Together with Figure 3 (left panel) and Figure 5 (left panel), these results indicate that the barrier x ̃ varies continuously with respect to γ, ρ, a and b, as long as the assumptions of Theorem 4.2 hold.
0.8 0.85 0.9 0.95 1 1.05 1.1 1.15 1.2 a
0.28
0.29
0.3
0.31
0.32
0.33
0.34
0.35
0.36
0.37
0.2 0.21 0.22 0.23 0.24 0.25 0.26 0.27 0.28 0.29 0.3 b
0.2
0.25
0.3
0.35
0.4
0.45
Figure 6: Impact of the drift a (left) and volatility b (right) on the barrier x ̃ when γ = 0.11
Cao et al. [12] study a similar MV dividend problem under the classical control framework and seek an equilibrium dividend rate strategy, subject to a maximum payout rate d ̄ > 0. For a fixed (feedback) dividend rate strategy d , the cumulative dividend Dt is given by
Dt =
∫ t∧τ
0
d (Xs, s)ds.
They show that, for sufficiently small risk aversion γ (along with conditions ensuring the uniqueness of a positive solution x ̄ to a nonlinear equation), a barrier strategy d ∗(x) = d ̄1x>x ̄ is an equilibrium strategy; this result is parallel to ours in Theorem 4.2, in which x ̃ is the unique barrier. To examine the connections between two different frameworks (singular control versus classical control), we set the same parameters for a, b, and ρ as above and compute the two barriers x ̃ and x ̄-
 (for the latter,
21

we consider d ̄ ∈ [0, 50]). We plot their graphs when γ = 0 (left panel) and γ = 0.13 (right panel) in Figure 7. We observe that, as the maximum dividend rate d ̄ increases, the corresponding barrier x ̄ in Cao et al. [12] converges to x ̃ of this paper. In fact, when γ = 0, Jeanblanc-Picque ́ and Shiryaev [27] prove that as d ̄ → ∞, the optimal barrier of the bounded-rate problem converges to that of the singular control problem. Our numerical results suggest that this convergence holds for equi-
librium strategies when γ is small.
0 5 10 15 20 25 30 35 40 45 50
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0 5 10 15 20 25 30 35 40 45 50
0.05
0.1
0.15
0.2
0.25
0.3
0.35
Figure 7: The barriers for the classical control and singular control problems when γ = 0 (left) and γ = 0.13 (right)
6 Conclusions
In this paper, we studied a novel singular control, time-inconsistent dividend problem, and the objective is to optimize the MV criterion of the integral of all discounted dividends paid until ruin time, an endogenous stopping time. We proved a new verification theorem that characterizes equilibrium dividend strategies and their corresponding value functions to this problem. We, then, used the verification theorem to prove two results in which we obtain equilibrium dividend strategies (semi-)expli-
citly: one for large values of risk aversion γ (specifically, γ ≥ 2a
b2 ), and one for small
values of γ (namely, γ < ε ≤ 2a
b2 , subject to Condition (2) of Theorem 4.2, in which ε depends upon the parameters of the model). Numerical experiments show that the maximum γ satisfying both conditions of Theorem 4.2, denoted by γ ̄, is strictly less than 2a
b2 . Thus, finding equilibrium
dividend strategies when γ ̄ < γ < 2a
b2 remains an open question. For future work, one direction is to allow investment or capital injection strategies, in addition to dividend control, in the model (see Albrecher and Thonhauser [1]). Recall that we study dividend control problems up to the ruin time in this work; however, there are alternative definitions of “ruin” (see Section 5 in Avanzi [5]), and it will be interesting to revisit our problem under such alternative definitions. In this paper, we chose the notion of weak equilibriu-
m (see Bjo ̈rk and Murgoci [10]), and several recent papers pointed out its potential drawback and proposed different notions of equilibrium, such as strong equilibrium (see, for instance, Bayraktar et al. [7], Bayraktar et al. [8], and He and Jiang [24]). To the best of our knowledge, time-inconsistent singular control problems under the notion of strong equilibrium have not been studied before. Our numerical experiments
22

show that the barrier x ̃ varies continuously with respect to the model parameters (see Figures 3, 5, and 6), when the conditions of Theorem 4.2 hold; however, an analytical study of the stability of equilibria (as in Bayraktar et al. [9]) remains an open question, and we leave it for future research.
Acknowledgments. We thank the corresponding editor, Professor Erhan Bayraktar, and anonymous associate editor and reviewers for their valuable comments. The first and second authors acknowledge the financial support from the Natural Sciences and Engineering Research Council of Canada, grants 05061 and 04958, respectively. The third author thanks the Cecil J. and Ethel M. Nesbitt Professorship for the financial support of her research.
References
[1] Albrecher, Hansj ̈org and Stefan Thonhauser (2009). Optimality results for dividend problems in insurance. Revista de la Real Academia de Ciencias Exactas, Fisicas y Naturales, 103(2), 295-320.
[2] Albrecher, Hansj ̈org, Pablo Azcue, and Nora Muler (2022). Optimal ratcheting of dividends in a Brownian risk model. SIAM Journal on Financial Mathematics, 13(3), 657-701.
[3] Angoshtari, Bahman, Erhan Bayraktar, and Virginia R. Young (2019). Optimal dividend distribution under drawdown and ratcheting constraints on dividend rates. SIAM Journal on Financial Mathematics, 10(2), 547-577.
[4] Asmussen, Soren and Michael Taksar (1997). Controlled diffusion models for optimal dividend pay-out. Insurance: Mathematics and Economics, 20(1), 1-15.
[5] Avanzi, Benjamin (2009). Strategies for dividend distribution: A review. North American Actuarial Journal, 13(2), 217-251.
[6] Bayraktar, Erhan, Jingjie Zhang, and Zhou Zhou (2019). Time consistent stopping for the meanstandard deviation problem—The discrete time case. SIAM Journal on Financial Mathematics, 10(2), 667-697.
[7] Bayraktar, Erhan, Jingjie Zhang, and Zhou Zhou (2021). Equilibrium concepts for time-inconsistent stopping problems in continuous time. Mathematical Finance, 31(1), 508-530.
[8] Bayraktar, Erhan, Zhenhua Wang, and Zhou Zhou (2023). Equilibria of time-inconsistent stopping for one-dimensional diffusion processes. Mathematical Finance, 33(3), 797-841.
[9] Bayraktar, Erhan, Zhenhua Wang, and Zhou Zhou (2023). Stability of equilibria in time-inconsistent stopping problems. SIAM Journal on Control and Optimization, 61(2), 674-696.
[10] Bj ̈ork, Tomas and Agatha Murgoci (2010). A general theory of Markovian time inconsistent stochastic control problems. Working paper, available at SSRN 1694759.
[11] Bj ̈ork, Tomas, Agatha Murgoci, and Xun Yu Zhou (2014). Mean-variance portfolio optimization with state-dependent risk aversion. Mathematical Finance, 24(1), 1-24.
[12] Cao, Jingyi, Dongchen Li, Virginia R. Young, and Bin Zou (2025). Equilibrium mean-variance dividend rate strategies. SIAM Journal on Financial Mathematics, 16(3), SC64-SC75.
[13] Chen, Shumin, Zhongfei Li, and Yan Zeng (2014). Optimal dividend strategies with time-inconsistent preferences. Journal of Economic Dynamics and Control, 46, 150-172.
[14] Chen, Shumin, Zhongfei Li, and Yan Zeng (2018). Optimal dividend strategy for a general diffusion process with time-inconsistent preferences and ruin penalty. SIAM Journal on Financial Mathematics, 9(1), 274-314.
[15] Christensen, So ̈ren and Kristoffer Lindensj ̈o (2022). Moment-constrained optimal dividends: precommitment and consistent planning. Advances in Applied Probability, 54(2), 404-432.
23

[16] Cohen, Asaf and Virginia R. Young (2021). Optimal dividend problem: Asymptotic analysis. SIAM Journal on Financial Mathematics, 12(1), 29-46.
[17] Dai, Min, Yanwei Jia, and Hanqing Jin (2024). Dynamic mean-variance portfolio selection with transaction costs. Working paper, available at SSRN: https://ssrn.com/abstract=4958481.
[18] De Finetti, Bruno (1957). Su un’impostazione alternativa della teoria collettiva del rischio. Transactions of the XVth International Congress of Actuaries, 2(1), 433-443.
[19] Eisenberg, Julia and Kr ̈uhner, Paul (2023). Measuring the suboptimality of dividend controls in a Brownian risk model. Advances in Applied Probability, 55(4), 1442-1472.
[20] Fleming, Wendell H. and H. Mete Soner (2006). Controlled Markov Processes and Viscosity Solutions, second edition, Springer.
[21] Gerber, Hans U. and Elias SW Shiu (2004). Optimal dividends: analysis with Brownian motion. North American Actuarial Journal, 8(1), 1-20.
[22] Grandell, Jan (1991). Aspects of Risk Theory. Springer-Verlag, New York.
[23] Grandits, Peter, Friedrich Hubalek, Walter Schachermayer, and Mislav ˇZigo (2007). Optimal expected exponential utility of dividend payments in a Brownian risk model. Scandinavian Actuarial Journal, 2, 73 -107.
[24] He, Xue Dong and Zhao Li Jiang (2021). On the equilibrium strategies for time-inconsistent problems in continuous time. SIAM Journal on Control and Optimization, 59(5), 3860-3886.
[25] Huang, Yu-Jui and Zhou Zhou (2021). Strong and weak equilibria for time-inconsistent stochastic control in continuous time. Mathematics of Operations Research, 46(2), 428-451.
[26] Ismail, Amine and Huyˆen Pham (2019). Robust Markowitz mean-variance portfolio selection under ambiguous covariance matrix. Mathematical Finance, 29(1), 174-207.
[27] Jeanblanc-Picqu ́e, Monique and Albert N. Shiryaev (1995). Optimization of the flow of dividends. Russian Mathematical Surveys, 50(2), 257.
[28] Kronborg, Morten Tolver and Mogens Steffensen (2015). Inconsistent investment and consumption problems. Applied Mathematics and Optimization, 71, 473-515.
[29] Guan, Chonghu and Zuo Quan Xu (2024). Optimal ratcheting of dividend payout under Brownian motion surplus. SIAM Journal on Control and Optimization, 62(5), 2590-2620.
[30] Landriault, David, Bin Li, Danping Li, and Virginia R. Young (2018). Equilibrium strategies for the mean-variance investment problem over a random horizon. SIAM Journal on Financial Mathematics, 9(3), 1046-1073.
[31] Liang, Zongxia, Xiaodong Luo, and Fengyi Yuan (2024). Equilibria for time-inconsistent singular control problems. SIAM Journal on Control and Optimization, 62(6), 3213-3238.
[32] Liang, Zongxia and Xiaodong Luo (2025). Stackelberg reinsurance and premium decisions with MV criterion and irreversibility. SIAM Journal on Financial Mathematics, 16(1), 167-199.
[33] Taksar, Michael I. (2000). Optimal risk and dividend distribution control models for an insurance company. Mathematical Methods of Operations Research, 51, 1-42.
[34] Wang, Gu and Bin Zou (2021). Optimal fee structure of variable annuities. Insurance: Mathematics and Economics, 101, 587-601.
[35] Zhu, Jinxia, Tak Kuen Siu, and Hailiang Yang (2020). Singular dividend optimization for a linear diffusion model with time-inconsistent preferences. European Journal of Operational Research, 285(1), 66-80.
[36] Zhou, Zhou and Zhuo Jin (2020). Optimal equilibrium barrier strategies for time-inconsistent dividend problems in discrete time. Insurance: Mathematics and Economics, 94, 100-108.
24

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:54.879Z
- **Text Length:** 68947 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 24 of 24
