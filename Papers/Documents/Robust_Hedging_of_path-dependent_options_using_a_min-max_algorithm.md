# PDF Document: Banerjee et al. - 2025 - Robust Hedging of path-dependent options using a min-max algorithm.pdf

**File Path:** Banerjee et al. - 2025 - Robust Hedging of path-dependent options using a min-max algorithm.pdf

**Processed Date:** 2026-02-10T18:16:47.929Z

**File Size:** 1815.86 KB

**Total Pages:** 33

**Extracted Pages:** 33

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3495

**Title:** Robust Hedging of path-dependent options using a min-max algorithm

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Robust Hedging of path-dependent options using
a min-max algorithm
Purba Banerjee1†, Srikanth Iyer1†, Shashi Jain2*†
1Department of Mathematics, Indian Institute of Science, Bangalore, 560012, India. 2*Department of Management Studies, Indian Institute of Science, Bangalore, 560012, India.
*Corresponding author(s). E-mail(s): shashijain@iisc.ac.in; Contributing authors: purbab@iisc.ac.in; skiyer@iisc.ac.in; †These authors contributed equally to this work.
Abstract
We consider an investor who wants to hedge a path-dependent option with maturity T using a static hedging portfolio using cash, the underlying, and vanilla put/call options on the same underlying with maturity t1, where 0 < t1 < T . We propose a model-free approach to construct such a portfolio. The framework is inspired by the primal-dual Martingale Optimal Transport (MOT) problem, which was pioneered by [5]. The optimization problem is to determine the portfolio composition that minimizes the ex-
pected worst-case hedging error at t1 (that coincides with the maturity of the options that are used in the hedging portfolio). The worst-case scenario corresponds to the distribution that yields the worst possible hedging performance. This formulation leads to a min-max problem. We provide a numerical scheme for solving this problem when a finite number of vanilla option prices are available. Numerical results on the hedging performance of this model-free approach when the option prices are gener-
ated using a Black-Scholes and a Merton Jump diffusion model are presented. We also provide theoretical bounds on the hedging error at T , the maturity of the target option.
Keywords: Martingale optimal transport, Robust hedging, Static hedging, Min-Max Optimization
1
arXiv:2511.00781v1 [q-fin.MF] 2 Nov 2025

1 Introduction
Derivative pricing and hedging form a crucial part of the financial world. A fundamental step in derivative pricing involves modeling the underlying stock price process under certain predetermined assumptions. A common practice is to calibrate the parameters of the chosen stock price model to the market prices of actively traded vanilla options. Since the choice of the model for the calibration process is not necessarily unique, under unexpected market scenarios, the predicted stock prices under t-
he chosen model can deviate significantly from the true stock price. This will also result in non-unique prices for the same derivative security, depending on the choice of the model. Hence, from an investor’s perspective, hedging their position in the derivative is necessary to protect against unpredictable price fluctuations. An investor can choose a dynamic or a static hedging approach to construct a hedging portfolio. The advantage of not requiring constant monitoring of the market fluctuation-
s and incurring transaction costs each time the underlying hedging portfolio is rebalanced for a dynamic strategy makes static hedging attractive. In [11], the authors obtain a static hedging portfolio of European call options with maturity 0 < t1 to hedge a European call option with a longer maturity T when the stock price process satisfies a one-factor Markovian dynamics. In [1], the authors extend this work to multiple time points. This static hedging approach yields a superior performance than-
 a standard delta hedging approach for a jump-diffusion process like a Merton Jump Diffusion model, where a sudden jump in the stock price process in between the rebalancing times can lead to a considerable gap between the target option with maturity T and the delta hedging portfolio. However, under stochastic volatility models, this static hedging approach performs poorly. We consider a natural extension of this static hedging problem to the robust model-free setting. To provide a general overvie-
w of our problem, we consider an investor who holds a short position in an option with pay-off c(X, Y ) at maturity T where X and Y denote the underlying stock price process at times t1, T with 0 < t1 < T . The investor wishes to construct a portfolio comprising cash, stocks, and vanilla put/call options on the same underlying asset with maturity t1 to hedge this position. We denote this hedging portfolio as h(X, w) where w denotes the weights of the components, i.e., options, stocks, and cash. A -
negative value of a component of w denotes a short position in the corresponding asset (options, stocks, or cash) and a positive value denotes a long position. We assume the availability of market prices of the traded call and put options corresponding to different maturities. If the call/put prices are available for all strikes over [0, ∞), a result of [9] then allows for recovery of the marginal distribution of the stock price and is independent of any underlying model assumption. The resulting -
marginals will be consistent with the available call/put option prices. Then, under the no-arbitrage condition, any pricing measure will be a martingale measure with these marginals. Let M(μ, ν) denote the set of probability measures P with marginals at times t1, T given by μ, ν respectively and satisfying the martingale condition EP[Y |X] = X. The marginals (μ, ν) denote the true marginal distributions of the underlying stock price process. For simplicity, we assume the rate of borrowing/lending -
to be zero. Now, if the investor wants to compute the weights with respect to which the worst-case hedging error at maturity T is minimized, then
2

the objective function reduces to
P HT (μ, ν) := inwf sup
P∈M(μ,ν)
EP c(X, Y ) − h(X, w) . (1)
The inner maximization problem in (1) is a martingale optimal transport (MOT) problem. From an investor’s perspective, it is more important to compute the weights corresponding to the worst-case hedging error at t1 (the maturity of the options in the hedging portfolio). The objective function in this case is
P Ht1 (μ, ν) := inwf sup
P∈M(μ,ν)
Eμ EP[c(X, Y )|X] − h(X, w) . (2)
The inner maximization problem in (2) can be considered as a modified MOT problem, which we denote by Mod-MOT . The MOT problem for obtaining robust bounds on option prices was pioneered by [5] and followed by the works of [18],[16],[7],[22],[24],[19],[2],[17],[3] to name a few. Given the risk-neutral marginal probability distributions μ, ν on R and a measurable cost function c : R2 → R, in a classical optimal transport problem, the objective is to maximize (minimize)
Z
R2
c(x, y)P(dx, dy). (3)
The optimization is over all probability measures P, under the constraints that the marginals of P are predefined distributions μ, ν satisfying
P(E × R) = μ(E) and P(R × E) = ν(E). (4)
For a detailed overview of the study of optimal transportation problems, we refer the reader to [31]. If we require that P satisfy an additional martingale constraint
Z
R
yP(dy|x) = x, (5)
where P(dy|x) denotes the conditional distribution of the random variable Y given X, then (3)-(5) is termed the martingale optimal transport (MOT) problem. This solution corresponds to an upper (lower) price bound for an option with payoff c. In practice, we have actively traded call prices available only at a finite number of strikes. It is then possible to find discrete measures consistent with observed call prices. When the measures μ and ν are discrete, i.e., μ(dx) = Pm
i=1 αiδxi (dx) and
ν(dy) = Pn
j=1 βjδyj (dy), the MOT problem (3)-(5) reduces to a linear programming (LP) problem. The LP problem is given by
3

max
(pi,j )∈R+ mn
m
X
i=1
n
X
j=1
pi,jc(xi, yj) subject to
n
X
j=1
pi,j = αi,
m
X
i=1
pi,j = βj ,
n
X
j=1
pi,jyj = αixi, for i = 1, .., m; j = 1, .., n.
(6)
One can utilize the iterative Bregman projection to solve the LP, as shown in [8]. An important observation is that the maximization problem in the objective function (1) also reduces to an LP problem for discretely supported marginals (μ, ν) and the problem (1) can be viewed as a min-max problem. For the maximization problem in (2), one needs to make certain modifications to transform it into a linear problem for discretely supported marginals (μ, ν). This is explained in greater detail in Sectio-
n 3. [15] pioneered this LP approach for an MOT problem where a finite number of expectation constraints were provided instead of the marginal constraint ν. For a convex reward function, this yields optimizers with finite support. In a real-world scenario, the true marginals (μ, ν) of the underlying stock price process at times 0 < t1 < T are unknown. Given that only finitely many call option prices are available, one cannot directly use the results in [9] to obtain the true marginal distributions-
 consistent with the call option prices. An alternative approach would be to approximate the solution of the original MOT problem (3)-(5) using an LP problem of the form (6) for discretely supported marginal distributions which are consistent with the available call prices. We need to ensure that the solution of the MOT problem obtained by solving the LP is close to the value obtained from the true underlying as call prices become available over an increasingly dense set of strikes. In [3], the au-
thors prove that if the option’s payoff function c is directionally convex, the optimization over all discrete measures reduces to those with marginals as described below. These measures stochastically dominate all other discrete measures consistent with the observed call prices. A major drawback is that the result is restricted to cases where the true marginals are discrete with compact support. Since the true underlying distribution is unknown, assuming it to have compact support would not be id-
eal. An extension of their discretization scheme for unbounded measures and relevant convergence results are provided in [26], which form a basis for our work. For unbounded measures, a different approach is provided in [19] where the authors introduce an ε− relaxation approach to obtain a sequence of relaxed MOT problems. Their main result provides conditions to ensure the convergence of a given sequence of relaxed MOT problems with discrete marginals to the actual MOT problem (3)-(5) with contin-
uous marginals. They prove the result under some moment assumptions on the true measure. The choice of ε depends on the Wasserstein distance between the sequence of discretely supported marginals and the true marginal distributions. In related literature, one of the earliest works in model-independent option pricing can be found in [21], where the author focuses on obtaining model-independent bounds on the price of a lookback option by formulating it as a Skorokhod embedding problem.
4

[10], [12],[4], and the references therein provide detailed insights into the applications of Shorokhod embedding techniques for robust pricing and hedging of derivatives. In order to ensure that the discrete and the true underlying marginals are consistent with the available call prices with maturities 0 < t1 < T . The discretization approach in [26] provides marginals consistent with the call prices. To obtain an idea about how close the MOT problem with the discretely supported marginals would-
 be to the value of the MOT problem for the true underlying measure, we use the convergence results from [26]. While the problem (2) is not a standard MOT problem, we solve the sequence of linear problems that one obtains for the discretely supported marginals, similar to the problem (1), and compare the hedging performance with (1). To the best of our knowledge, the standard approach in literature is to view the hedging problem corresponding to the target option with payoff c(X, Y ) as the dual p-
roblem to the primal problem MOT problem (3)-(5), starting from the pioneering approach in [5]. The dual approach to the problem (3)-(5) is a more generalized version of a semi-static hedging problem over a set of functions that can be thought of as call/put options with maturities 0 < t1 < T and dynamic positions in the shares rebalanced at t1 and T . This is explained in greater detail in Section 4. For a higher dimensional stock price process where the resulting MOT problem is known as a multi--
marginal martingale optimal transport (MMOT) problem, and even for the case when the pay-off depends on the asset price at more than two time-points, solving the dual problem to the primal pricing problem provides a significant reduction in the computational cost. The MMOT problem was introduced in [23] and the reader can also refer to [20], [13], [4], [25], [17] for studies on multi-marginal problems. Given that the investor already knows which call/put options they want to include in their portf-
olio h(X, w), our hedging problem (1) (respectively (2)) allows the investor to compute the weights of the components of the hedging portfolio (restricted to cash, stock and options maturing at t1) that minimizes the worst possible expected error at time T (respectively t1). Under any unforeseen situation thrown by nature, the hedging error of this portfolio should be bounded above by the value of (1). The approach of viewing the hedging errors as (1)-(2) for two time-points 0 < t1 < T also reduce-
s to a min-max problem for the case when the underlying marginal distributions are discretely supported, which could be of independent interest to the reader. The main contributions of our paper are :
1. Extend the static hedging problem in [11] to a model-free framework to construct a static hedging portfolio of cash, stock, and short-maturity European call options to hedge a longer-maturity target European call or a path-dependent option. 2. Obtain the worst possible bounds on the hedging error while minimizing with respect to the portfolio weights by formulating the maximization problem as a modified version of the MOT problem. 3. Prove the theoretical convergence of the min-max problem for -
the discrete marginals to the inf-sup problem (1) in the continuous case. 4. Formulate the corresponding max-min optimization problem for (2), explain the utility of this approach, and compare it with the results for (2).
5

5. Compare the worst-case hedging error at short-maturity t1 for the hedging portfolio (having options with maturities t1 and T ) obtained using the standard dual problem of the primal problem MOT problem (3)-(5) with the hedging portfolio obtained using our approach in (2). However, our hedging portfolio in this case has options with maturities t1 as well as T , similar to the dual problem.
The outline of the paper is as follows: Section 2 introduces the notations and important results from [26] and [3], giving the background for the MOT problem. We discuss the associated numerical schemes from [26] and [3] to obtain the discretely supported marginal distributions of the stock price process and their results on the corresponding Wasserstein distance between the discrete marginal distributions and the true underlying marginals. Our problem at hand is explained in greater detail in Sec-
tion 3, and the alternative max-min formulation and its financial interpretation are given. The dual problem and associated convergence results for our problem (1) are provided in Section 4. In Section 5, numerical examples are provided to test the efficiency of the numerical scheme and the associated upper bounds for both the pricing of options and the hedging problem at hand. Section 7 gives the conclusion and discussions on possible future work.
2 Framework and Preliminaries
We begin with a financial market with one risk-free asset, referring to the cash deposited in a bank account, and one risky asset, St, denoting the stock price path. Let 0 = t0 < t1 < ... < tN = T denote the time points at which the stock price process needs to be evaluated for obtaining the marginal distributions, with T being the final time point. We follow the terminologies and results in [26] and [3] to ensure consistency. It is assumed that the risk-free asset pays no interest, r = 0, and the-
 risky asset with price process (St) is denoted by (St1 , St2 , ...StN ) with initial value S0 = 1. Throughout this paper, for simplicity, we consider only two time points, i.e., N = 2. Following standard conventions, the random variables (St1 , ST ), denoted henceforth by (X, Y ), take only non-negative values and are defined on a probability space (Ω, F, P). There are no underlying model assumptions on the stock price process, but the market is always assumed to be free of arbitrage. This guaran-
tees the existence of a risk-neutral measure for the underlying stock price process by the First Fundamental Theorem of Asset Pricing ([27]). Restricting to the case of N = 2 time-points, let Ct1 (k), CT (k) denote the prices of European call options (written on the underlying stock price process) at the initial time t0, with strike price k ∈ R+ and maturities t1, t2 = T respectively. If P (R+) denotes the set of all probability measures on R+, then the First Fundamental Theorem of Asset Pricing e-
nsures the existence of a measure μ ∈ P (R+) which satisfies
C(k) =
Z
(x − k)+μ(dx), k ≥ 0 (7)
6

and the associated risk-neutral distribution by [9] is
μ((−∞, x]) = 1 + C′(x+), x ∈ R. (8)
2.1 Convex order and associated properties
We first introduce what one means by the convex ordering of two measures and state the associated results. Lemmas (2.1) and (2.2) highlight the close relationship between the convex ordering of the underlying marginal distributions and the martingale property (5), and also with the pricing functions under consideration. Definition 2.1. Two measures μ, ν on R are said to be in convex order, denoted by μ ≤c ν, if for any convex function f : R → R such that the integrals exist
Z
R
f (x)μ(dx) ≤
Z
R
f (x)ν(dx). (9)
The following result by [29] relates the convex ordering of measures with the martingale property of the associated random variables.
Lemma 2.1. Suppose μ, ν ∈ P (R+). Then μ ≤c ν is equivalent to the existence of a probability space (Ω, F, P) and non-negative random variables X, Y on it such that X has distribution μ and Y has distribution ν and X = E[Y |X].
Lemma 2.2 provides a relationship between the convex ordering and the associated values of the call price functions.
Lemma 2.2. Let μ, ν ∈ P (R+) and denote by Cμ and Cν the respective consistent pricing functions. Suppose that R xμ(dx) = R xν(dx) = 1. Then μ ≤c ν is equivalent to Cμ ≤ Cν .
Next, we define what we mean by consistent pricing measures and the discretization schemes for obtaining such measures from the observed European call option prices.
2.2 Marginals with bounded support
As mentioned earlier, in practice, corresponding to a fixed maturity ti, one observes only finitely many call prices ci0 > ... > cini > 0 associated with the strikes 0 ≤ ki0 <
.. < kini , ni ∈ N, i = 1, 2. Hence, one cannot apply (8) to obtain the true risk-neutral marginal distributions at ti, i = 1, 2. This leads us to the following definition. Definition 2.2. [3] Let for i = 1, 2,
Pi := {μ ∈ P (R+) : ci
j=
Z
(x − ki
j)+μ(dx), j = 0, .., ni,
Z
xμ(dx) = S0} (10)
be the set of all pricing measures that are consistent with the observable call prices having maturity ti. We recall the earlier observation that the given MOT problem (3)-(5) reduces to an LP problem for the case of discretely supported marginals of the stock price process, μ and ν at time t1 and T respectively. However, given that the true underlying marginal distributions of the stock price process need not be discretely supported, one would like to construct a sequence of discrete marginals th-
at can be shown to converge to
7

the true underlying marginals μ ∈ P1 and ν ∈ P2 under some given metric, along with the convergence of the corresponding MOT problems. To achieve this, in [3], the authors first make the following assumptions :
1. There is a strike price K > 0, with call prices equal to zero for every strike greater than or equal to K. 2. A finite number of call prices ci0 > ... > cini = 0 are available for strikes 0 = ki0 <
... < kini = K, with ci0 = S0.
Let Ki := {ki0 < ... < kini }, i = 1, 2 denote the set of strike prices for which the call prices are observable. To obtain the call prices at all strikes, in [3], the authors choose the functions Cμ∗, Cν∗ that result from linearly interpolating the call prices available
at each time point, ti, i = 1, 2. The resulting function, with Cμ∗(k1
j ) = c1
j , j = 0, ..., n1 and k ∈ [k1
j , k1
j+1), j = 0, .., n1, is given by
C∗
μ(k) = k1
j+1 − k k1
j+1 − k1
j
C∗
μ(k1
j ) + k − k1
j k1
j+1 − k1
j
C∗
μ(k1
j+1), (11)
and one similarly obtains Cν∗. The special discrete marginals, consistent with the call price functions, are then constructed in [3] using (11) as follows :
Lemma 2.3. [3] The measure μ∗ consistent with Cμ∗ is a discrete measure of the form
μ∗ =
n
X
j=0
Cμ∗(kj+1) − Cμ∗(kj )
kj+1 − kj
− Cμ∗(kj ) − Cμ∗(kj−1)
kj − kj−1
δkj , (12)
where we set
Cμ∗(kn+1) − Cμ∗(kn)
kn+1 − kn
= 0 and
Cμ∗(k0) − Cμ∗(k−1)
k0 − k−1
= −1
(13)
and δx is the Dirac measure on point x.
Lemma 2.3 allows one to obtain the marginal distribution from the available call option prices at finitely many strikes. It does not require any restrictions on the spacing between the strike points, and hence can be readily applied. The following lemma shows that μ∗ is the maximal element of the set P1 with respect to convex ordering.
Lemma 2.4. [3] Suppose that μ ∈ P1, i.e., μ is another probability measure consistent with the observable call prices in P1. Then
μ ≤c μ∗. (14)
The Wasserstein distance between two probability measures is defined as :
8

Let
P(μ, μ∗) = {P ∈ P (R2) : μ(B1) = P(B1 × R), μ∗(B2) = P(R × B2), B1, B2 ∈ B(R)}. (15)
Definition 2.3. The Wasserstein distance of two probability measures μ, μ∗ ∈ P (R) is given by
W (μ, μ∗) = inf
P∈P (μ,μ∗ )
Z
|x − y|P(dx, dy). (16)
It can be observed from Definition 16 that the Wasserstein distance of two measures μ, μ∗ ∈ P(R) is a special case of the usual optimal transport problem (3)-(4) with the cost function given by c(x, y) = |x − y|. [3] lists the equivalent representations of the Wasserstein distance as given below. Remark. [3]
1. If Fμ and Fμ∗ are the cumulative distribution functions of μ and μ∗, the following equality also holds [14]
W (μ, μ∗) =
Z∞
−∞
|Fμ(t) − Fμ∗ (t)|dt. (17)
2. A dual representation of the Wasserstein distance is as follows:
W (μ, μ∗) = sup
f ∈C1(R)
Z
f (x)(μ − μ∗)(dx), (18)
where, C1(R) := {f : R → R : f is Lipschitz-continuous with constant 1}, [32].
.
Theorem 2.5. [3] Let μ ∈ P1 with supp(μ) ⊂ [0, K]. Moreover choose kj = jK
2n , j =
0, ..., 2n, n ∈ N. Then we have
W (μ, μ∗) = 2 ·
2n −1
X
j=0
sup
k∈[kj ,kj+1)
|Cμ∗ (k) − Cμ(k)| ≤ K
2n . (19)
If we additionally assume that Cμ ∈ C2(R+), then for any n ∈ N, we have
W (μ, μ∗) ≤ Tμ · K2
2n+1 , (20)
where Tμ = supκ∈[0,K] |C′′
μ (κ)|. Under the given assumption that the true underlying distributions μ, ν have a compact support [0, K] and μ ≤c ν, Theorem 2.5 shows that the dominating measure μ∗n converges to the true marginal as the available call prices become dense over uniformly
9

specified set of strikes. However, for the case when the true underlying marginal distributions have unbounded support, e.g., the Black-Scholes model, constructing the discrete marginals μ∗ and ν∗ from the observable call prices using equation (4) may not yield any feasible solution to the LP for the strict MOT problem. Further, one cannot directly extend the convergence results of Theorem 5.1 of [3] to the case when the true marginal distributions have unbounded support. This leads us to the dis-
cretization scheme and corresponding convergence results from [26], which we use for our problems (1) and (2). Remark. The question naturally arises whether the solution to the discrete MOT problem converges to the solution under the true measure as call prices become available over an increasingly dense set of strikes. An affirmative answer to this (under certain restrictions) can be found in the convergence results in [3].
2.3 Marginals with unbounded support
We assume here that the theoretical marginals μ, ν ∈ P(R+) have unbounded support. We use the notation from [26] and denote the approximating measures in this case by μn∞, νn∞, for a given number of discretization points, n. Let Zn∞ := {kn
j |j = 0, . . . , n} denote the set of strike prices for every n ∈ N with k0 = 0. Differing from [26], we do not assume the strike prices to be evenly spaced. The associated option prices are given by
C μ,∞
n := {Cμ(k) | k ∈ Z∞
n } and Cν,∞
n := {Cν (k) | k ∈ Z∞
n }.
Following [26] we define the candidate functions Cμn∞ , Cνn∞ ∈ KC consistent with the
prices in Cnμ,∞ and Cnν,∞ such that μn∞ ≤c νn∞. For k ∈ [kn
j , kn
j+1), j = 0, . . . , n − 1, define
Cμn∞ (k) := kn
j+1 − k kn
j+1 − kn
j
Cμ(kn
j ) + k − kn
j kn
j+1 − kn
j
Cμ(kn
j+1) (21)
Cνn∞ (k) := kn
j+1 − k kn
j+1 − kn
j
Cν (kn
j ) + k − kn
j kn
j+1 − kn
j
Cν (kn
j+1). (22)
Let kμn,0 and kνn,0 denote the smallest zeros of the continuations of Cμn∞ and Cνn∞ on
[knn−1knn) to (knn, ∞) defined by
kn
μ,0 = inf k ∈ (kn
n, ∞) knn − k
knn − knn−1
Cμ(kn
n−1) + k − knn−1
knn − knn−1
Cμ(kn
n) = 0 , (23)
kn
ν,0 = inf k ∈ (kn
n, ∞) knn − k
knn − knn−1
Cν (kn
n−1) + k − knn−1
knn − knn−1
Cν (kn
n) = 0 . (24)
Define
Cμn∞ (k) :=
( kn
μ,0 −k
kn
μ,0 −knn
Cμ(knn), if k ∈ (knn, kμn,0),
0, if k ∈ [kμn,0, ∞).
(25)
10

For Cνn∞ , one needs to distinguish between two cases depending on the values of kμn,0
and kνn,0 as follows :
• Case 1 : If kμn,0 ≤ kνn,0 define
Cνn∞ (k) :=
( kn
ν,0 −k
kn
ν,0 −knn
Cν (knn), if k ∈ (knn, kνn,0),
0, if k ∈ [kνn,0, ∞).
(26)
• Case 2 : If kμn,0 > kνn,0 define
Cνn∞ (k) :=
( kn
μ,0 −k
kn
μ,0 −knn
Cν (knn), if k ∈ (knn, kμn,0),
0, if k ∈ [kμn,0, ∞).
(27)
Therefore, equations (21)-(27) define the call option price functions Cμn∞ , Cνn∞ ∈ KC .
From these functions, one can derive probability measures μn∞, νn∞ ∈ P(R+) with expected value equal to one using equation (12). The resulting measures are in convex order by construction, i.e. μn∞ ≤c νn∞, and they are discrete measures of the form
μ∞
n :=
n−1
X
j=0
wn
j δkn
j + μ∞
n,r, (28)
where wn
j = Cμ(kn
j +1 )−Cμ (kn
j) kn
j +1 −kn
j
− Cμ(kn
j )−Cμ(kn
j −1 ) kn
j −kn
j−1
, and
ν∞
n :=
n−1
X
n=0
vn
i δkn
i + v∞
n,r. (29)
vn
i = Cv(kn
i+1)−Cv (kn
i) kn
i+1 −kn
i
− Cν (kn
i )−Cν (kn
i−1 ) kn
i −kn
i−1
and
v∞
n,r := (vn
n δknn + vn
μ δkn
μ,0 )1{kn
μ,0 >kn
ν,0} + vn
ν δkn
ν,0 1{kn
μ,0 ≤kn
ν,0 }
:= −Cν (knn)
kμn,0 − knn
− Cν (knn) − Cν (knn−1)
knn − knn−1
δknn + Cν (knn)
kμn,0 − knn
δkn
μ,0 1{kn
μ,0 >kn
ν,0 }
+ Cν (knn−1) − Cν (knn)
knn − knn−1
δkn
ν,0 1{kn
μ,0 ≤kn
ν,0 } .
(30)
Defining hν (k4nn ) := 1{Fν (kn
4n )≥Fνn∞ (kn
4n )} in [26] the authors prove that
W (μ, μ∞
n ) ≤ 1 + C,μ(k4nn )
2n + 2Cμ(kn
μ,0) = Fμ(k4nn )
2n + 2Cμ(kn
μ,0), (31)
11

and
W (ν, ν∞
n ) ≤ Fν (k4nn )
2n + Cν max{kn
ν,0, kn
μ,0}
+ Cν max{kn
ν,0, kn
μ,0} 1{kn
μ,0 ≤kn
ν,0} + 1{kn
μ,0 >kn
ν,0}hν (kn
4n )
+ (kn
μ,0 − kn
4n ) C′
ν (kn
μ,0) − C′
ν (kn
4n ) 1{kn
μ,0 >kn
ν,0}(1 − hν (kn
4n )).
(32)
We will now state our static model-free hedging problem and derive some results by observing structures similar to those that appear in the pricing problems described in this section.
3 Problem at hand
We begin by defining C(S(t), t, K, T ) to be the price of a European call option at time t ∈ [0, T ], with maturity T , strike price K, and the underlying stock price S(t). Let ctarget(S(t1), S(T )) be the payoff of a path-dependent option at expiry T with 0 < t1 < T .
A writer of this path-dependent option can hedge their short position with actively traded stocks, options, or any other instruments at their disposal. A hedging portfolio comprising of cash, the underlying stock, and European call options on the same underlying asset, with maturity t1(< T ), at time 0 is then given by
w0 + w1S(0) +
M
X
i=2
wiC(S(0), 0, Ki−1, t1), (33)
where wi’s are the weights and Ki’s are the strikes of the short maturity options. The absolute expected worst-case error of this hedging portfolio at time T is defined by
PH
T (μ, ν) := inf
wi,0≤i≤M sup
P∈M(μ,ν)
EP [ctarget(S(t1), S(T ))
− w0 − w1S(T ) −
M
X
i=2
wiC(S(t1), t1, Ki−1, t1) ,
(34)
where H is used to denote the hedging problem. As explained in Section 1, from the option writer’s perspective, it is more important to compute the hedging error when the options in their hedging portfolio expire. We will refer to expressions such as the one on the right in (34) as absolute hedging error. We focus our numerical analysis on this problem in Section 5. The inside maximization problem in (34) is an MOT problem as described in Section 1. So we can talk here about the modified MOT (Mod--
MOT) problem.
12

The Mod-MOT problem for the absolute hedging error at time t1 (the maturity of the short-term options in the hedging portfolio) is given by
PH
t1 (μ, ν) := inf
wi,0≤i≤M sup
P∈M(μ,ν)
Eμ EPx [ctarget(S(t1), S(T ))|S(t1)]
− w0 − w1S(t1) −
M
X
i=2
wiC(S(t1), t1, Ki−1, t1) ,
(35)
where Px denotes the disintegration of the joint probability distribution with respect to μ. We assume that the only information available to the writer is the observable call option prices with maturities t1 and T , respectively, at a finite number of strikes. As explained in Section 1, it is more important for the investor to look at the problem (35) when the options in their hedging portfolio expire than the problem (34). Therefore, it is necessary to formulate the problem (35) for the case of -
discretely supported marginals obtained using these call option prices. Let α with α(x) = PN1
i=1 δxi (x)αi
and β with β(y) = PN2
j=1 δyj (y)βj be the finitely supported marginal distributions at times t1 and T obtained using the available option prices as described in Section 2.3. Then the corresponding min-max problem for the absolute hedging error at time t1, with cash, stock, and two options (for simplicity) in the hedging portfolio, is
min
wi,0≤i≤3 max
p∈RN1 ×N2
N1
X
i=1
αi
N2
X
j=1
pj|ictarget(xi, yj ) − w0 − w1xi − w2(xi − K1)+ − w3(xi − K2)+
subject to
N2
X
j=1
pi,j = αi, for i = 1, .., N1,
N1
X
i=1
pi,j = βj, for j = 1, .., N2,
N2
X
j=1
pi,j(yj − xi) = 0, for i = 1, .., N1,
w0, w1, w2, w3 ∈ R,
pi,j ≥ 0,
(36)
where pj|i = pi,j
αi denotes the conditional probability that Y = yj, given X = xi.
13

Using the fact that αi > 0, i = 1 . . . N1, the objective function in (36) can be simplified to
min
wi,0≤i≤3 max
p∈RN1 ×N2
N1
X
i=1
N2
X
j=1
pi,j ctarget(xi, yj ) − αi{w0 + w1xi + w2(xi − K1)+ + w3(xi − K2)+} .
(37)
Remark. 1. Put options can be included in the hedging portfolio in (37) by using put-call parity. 2. The resulting hedge is valid only till time t1, when the short-maturity options expire. At maturity t1, the writer can either close their position on the target option with maturity T or set up an entirely new hedge with available call/put options. 3. If the true dynamics of the underlying stock price process are known and satisfy one-factor Markovian conditions, our hedging problem is similar to t-
he statichedging approaches in [11] and [1] where the exact weights of the hedging portfolio (constituting only the options with shorter maturities than the target maturity T ) are computed using Gauss-Hermite, Gauss-Laguerre, and Gaussian quadrature algorithms. 4. Corresponding to different choices for weights wi, 0 ≤ i ≤ M , in the hedging portfolio, one obtains various solutions to the maximization problem, and the associated joint-probability distributions {pi,j}1≤i≤M1,1≤j≤M2 . Hence, formulat-
ing the hedging problem as a min-max problem allows one to capture this effect. 5. If the investor knows the underlying joint probability distribution P ∈ M(μ, ν), it is possible to compute the weights that minimize the corresponding hedging error under the chosen distribution. One can then obtain the maximum loss for different combinations of probability distributions, with the objective function of interest given by
P H2
t1 (μ, ν) := sup
P∈M(μ,ν)
iwnif
Eμ EPx [ctarget(S(t1), S(T ))|S(t1)]
− w0 − w1S(t1) −
M
X
i=2
wiC(S(t1), t1, Ki−1, t1) .
(38)
Under the assumption that the marginal distributions (μ, ν) of the stock price process are finitely supported, the problem (38) reduces to a max-min problem.
14

6. The two problems (35) and (38) are not necessarily equal and are related by the following inequality
sup
P∈M(μ,ν)
inf
wl,0≤l≤M Eμ EPx [ctarget(S(t1), S(T ))|S(t1)]
− w0 − w1S(t1) −
M
X
i=2
wiC(S(t1), t1, Ki−1, t1)
≤ inf
wl,0≤l≤M sup
P∈M(μ,ν)
Eμ EPx [ctarget(S(t1), S(T ))|S(t1)]
− w0 − w1S(t1) −
M
X
i=2
wiC(S(t1), t1, Ki−1, t1) .
(39)
The reader can refer to well-established results like Sion’s min-max Theorem in
[28], [30] for sufficient conditions on the function Eμ EPx [ctarget(S(t1), S(T ))|S(t1)] −
w0 − w1S(t1) − PM
l=2 wlC(S(t1), t1, Ki−1, t1) for equality to hold in (39).
If we look at the corresponding max-min problem for (35) for the discretely supported marginals, we get
max
pi,j
min
wl ,0≤l≤3
N1
X
i=1
αi|
N2
X
j=1
pi,j c(xi, yj )
αi
− w0 − w1xi − w2(xi − K1)+ − w3(xi − K2)+|
subject to
N2
X
j=1
pi,j = αi, i = 1, .., N1,
N1
X
i=1
pi,j = βj, j = 1, .., N2,
N2
X
j=1
pi,j(yj − xi) = 0, i = 1, .., N1,
w0, w1, w2, w3 ∈ R,
pi,j ≥ 0,
where the inner minimization problem is
min
wl ,0≤l≤3
N1
X
i=1
αi|
N2
X
j=1
pi,j c(xi, yj )
αi
− w0 − w1xi − w2(xi − K1)+ − w3(xi − K2)+|,
w0, w1, w2, w3 ∈ R.
(40)
15

For writing the above minimization problem (40) in standard form, we first introduce variables w+
l , w−
l , 0 ≤ l ≤ 3, satisfying wl = w+
l − w−
l , 0 ≤ l ≤ 3 and change the sign of the inequalities to obtain the following LP problem :
min
w+
0 ,w−
0 ,w+
1 ,w−
1 ,w+
2 ,w−
2 ,w+
3 ,w−
3 ,zi
N1
X
i=1
αizi subject to
zi + (w+
0 − w−
0 ) + (w+
1 − w−
1 )xi + (w+
2 − w−
2 )(xi − K1)+
+ (w+
3 − w−
3 )(xi − K2)+ ≥
N2
X
j=1
pi,j c(xi, yj )
αi
,
zi − (w+
0 − w−
0 ) − (w+
1 − w−
1 )xi − (w+
2 − w−
2 )(xi − K2)+
− (w+
3 − w−
3 )(xi − K2)+ ≥ −
N2
X
j=1
pi,j c(xi, yj )
αi
,
w+
0 , w−
0 , w+
1 , w−
1 , w+
2 , w−
2 , w+
3 , w−
3 ≥ 0, zi ≥ 0, i = 1, .., N1.
(41)
A straightforward calculation gives the dual maximization LP problem to (41) as follows :
max
ai ,bi
N1
X
i=1
vi(ai − bi) subject to
N1
X
i=1
(ai − bi) = 0,
N1
X
i=1
xi(ai − bi) = 0,
N1
X
i=1
(xi − K1)+(ai − bi) = 0,
N1
X
i=1
(xi − K2)+(ai − bi) = 0,
ai + bi ≤ αi, i = 1, .., N1,
ai, bi ≥ 0, i = 1, .., N1,
(42)
where vi = PN2
j=1
pi,j c(xi,yj )
αi . Using the dual representation (42) and substituting the
value of vi in terms of the joint probabilities pi,j, we can formulate the max-min problem as a single maximization problem.
16

4 Convergence results
We begin this section by recalling the definition of the approximating measures (μn, νn) derived using the observable call option prices in Section 2. Our aim in this Section is to prove that under certain restrictions the convergence of the given sequences {μn}n∈N, {νn}n∈N of probability measures to the true underlying marginal distributions μ, ν respectively, implies convergence of the solutions of the corresponding hedging problems given by (34). To achieve this, we need some important results -
from [26] and [6]. First, let us define the upper price bound problem for the general market scenario, as described in [26] by
P (c) := sup
Q∈M
E[c(S1
t1 , . . . , S1
tn , . . . , Sd
t1 , . . . , Sd
t1 )] (43)
and the corresponding super hedging problem
D(c) := inf
d
X
j=1
n
X
i=1
Z
R
φi,j (sj
ti )μi,j (dsj
ti ) = inf
d
X
j=1
n
X
i=1
Eμi,j [φi,j (sj
ti )], (44)
with
φi,j ∈ S := u : R → R u(x) = a + bx +
m
X
l=1
cl(x − kl)+, a, b, cl, kl ∈ R, m ∈ N
)
.
The equivalent problems for the standard market case with d = 1 and n = 2 (corresponding to our set-up in Sections 2 and 3) are
Pc
2 (μ, ν) := sup
Q∈M2 (μ,ν )
EQ[c(X, Y )] (45)
and
Dc
2(μ, ν) := inf
(φ,ψ,h)∈D≤c
2
( Z
R
φ(x)μ(dx) +
Z
R
ψ(y)ν(dy)
)
= inf
(φ,ψ,h)∈D≤c
2
{Eμ[φ(X)] + Eν[ψ(Y )].
(46)
with
D≤c
2 ; = {(φ, ψ, h)|φ+ ∈ L1(R, μ), ψ+ ∈ L1(R, ν), h ∈ L0(R),
φ(x) + ψ(y) + h(x)(y − x) ≥ c(x, y), (x, y) ∈ R2}.
Corollary 4.1 gives a sufficient condition for the equivalence of the problems (43) and (44) as follows :
17

Corollary 4.1. ([26]) Let M ̸= φ and c : Rnd → [−∞, ∞) be an upper semi-continuous payoff function such that there is a constant K ∈ R with
c(s1
t1 , .., s1
tn , · · · , sd
t1 , · · · , sd
tn ) ≤ K(1 +
d
X
j=1
n
X
i=1
|sj
ti |)
for all (st11 , .., st1n , · · · , std1 , · · · , stdn ) ∈ Rnd. Then P (c) = D(c) and there is a Q∗ ∈ M such that P (c) = EQ∗ [c].
The dual minimizer, which is the super hedge, may not be attained, and hence, we need certain conditions to ensure the existence of a dual minimizer. This leads us to the following. Definition 4.1. ([6]) Let μ ≤c ν and c : R2 → R be a payoff function. Then a triple (φ, ψ, h) of functions φ : R → R ∪ {∞}, ψ : R → R ∪ {∞} and h : R → R is called dual minimizer, if φ is finite ν-almost surely and, for any maximizer Q∗ ∈ M2(μ, ν) of the upper price bound problem in (45), we have
φ(x) + ψ(y) + h(x)(y − x) ≥ c(x, y), ∀(x, y) ∈ R2
φ(x) + ψ(y) + h(x)(y − x) = c(x, y), for Q∗ − almost every (x, y).
Definition 4.2. [6] Let J be an interval and μ ∈ Pα(R). We say that a function c : R2 → R is semi-concave in y ∈ J μ−uniformly, if there exists a Borel function u : J → R such that for μ-almost every x, the mapping y 7→ c(x, y)+u(y) is continuous and concave on J. In this case, we say that u is a y-concavifier on J for c. Theorems 4.2 and 4.3 give conditions on the cost function that guarantee the existence of a dual minimizer.
Theorem 4.2. [6] Let μ ≤c ν, J := conv(supp(ν)) and c : R2 → R. Suppose that there a y−concavifier u exists on J for c. If J is not compact, then further suppose y → c(x, y) + u(y) is of linear growth on J. Then a dual minimizer exists in the sense of Definition 4.1. Theorem 4.3. [6] Suppose the assumptions of Theorem 4.2 are satisfied and that further c is Lipschitz continuous on J × J and u is Lipschitz continuous on J. Then there exists a dual minimizer (φ, ψ, h) such that φ and ψ are Lipschitz-
 continuous on J and |h| is bounded on J.
The following remark from [26] gives specific Lipschitz bounds for the dual minimizers depending on the domain of the cost function. Remark. ([26])
1. If c and u in Theorem 4.3 are Lipschitz continuous with constant Λ, then the dual minimizer may be chosen such that φ and ψ are Lipschitz continuous with constants 19Λ and 17Λ on J, and |h| is bounded by 18Λ on J. This is computed in the proof of [6](Theorem 2.5). 2. In a former version, the authors prove Theorem 4.3 for compact J. Then the proof yields that the dual minimizer may be chosen such that φ and ψ are Lipschitz continuous with constants 7Λ and 5Λ on J, and |h| is bounded by 6Λ on J.
18

3. Analyzing the proof of [6](Theorem 2.5), the authors recognize that the global Lipschitz condition may be weakened. Instead, one demands that there is a Λ > 0 such that for the domain (I, J) of every irreducible component of (μ, ν), we have
• cy(x, b−) + u′(b−) − cy(x, a+) − u′(a+) ≤ 4Λ ∀x ∈ I = (a, b). • |c(x, y) − c(x′, y)| ≤ Λ|x − x′| ∀x, x′, y ∈ J.
The following convergence result from [26] provides a bound on the pricing error due to the availability of option prices at finitely many equally spaced strikes over the bounded support of the underlying measure. Theorem 4.4. [26] Let (μ, ν) ∈ P≤c
K.L. Let c : R2+ → R be a Lipschitz continuous payoff function such that cyy exists. We denote by Λˆ the Lipschitz constant of c and assume max{Λˆ , sup(x,y)∈R2 |cyy(x, y)|} ≤ Λ. then, for any n ∈ N, we have
sup
Q∈M2(μdn,νnd )
EQ[c(X, Y )] − sup
Q∈M2 (μ,ν )
EQ[c(X, Y )] ≤ Mc
2n ,
where Mc = (7K + 5L). ̃Λ with Λ ̃ = Λ. max{L, 1}. If we additionally suppose that Cμ, Cν ∈ C2(R+), then, for any n ∈ N, we have
sup
Q∈M2(μdn,νnd )
EQ[c(X, Y )] − sup
Q∈M2 (μ,ν )
EQ[c(X, Y )] ≤ Md
2n+1 ,
where Md = (7TμK2 + 5Tν L2).Λ ̃ with Tμ = supκ∈[0,K] |Cμ”(κ)| and Tν = supλ∈[0,L] |Cν”(λ)|.
This brings us to our main result. We use similar techniques to the ones used in the proof of Theorem 4.4.
Theorem 4.5. Let c : R2+ → R be a Lipschitz continuous payoff function.
1. We further assume that for fixed w0, w1, . . . , wM ∈ R there exists a Lipschitz func
tion u : R+ → R such that y → |c(x, y) − {w0 + PM
i=1 wi(x − Ki)+}| + u(y) is
concave on R+ for μ−almost every x ∈ R+. Let Λˆ and Θˆ denote the Lipschitz constants of c and u respectively and assume max{ˆΛ + PM
i=1 |wi|, Θˆ } ≤ Λw. Then, for any n ∈ N, we have
sup
Q∈M2(μdn,νnd )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}| −
sup
Q∈M2 (μ,ν )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
≤ 19ΛwW (μ, μd
n) + 17ΛwW (ν, νd
n).
(47)
19

Further, if the weights w = (w0, w1, .., wM ) are restricted over a compact set A ⊂ RM+1 we have
inwf sup
Q∈M2(μdn,νnd )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
− inwf sup
Q∈M2 (μ,ν )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
≤ B × (W (μ, μd
n) + W (ν, νd
n)),
(48)
where B = max{19Λw, 17Λw}.
2. Let us assume in addition that (μ, ν) ∈ P≤c
K.L and for fixed w0, w1, . . . , wM ∈ R there
exists a Lipschitz function u : [0, L] → R such that y → |c(x, y)−{w0 +PM
i=1 wi(x−
Ki)+}| + u(y) is concave on [0, L] for μ−almost every x ∈ R+. Let ˆΛ and Θˆ denote the Lipschitz constants of c and u respectively and assume max{Λˆ +PM
i=1 |wi|, ˆΘ} ≤ Λw. Then, for any n ∈ N, we have
sup
Q∈M2(μdn,νnd )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
− sup
Q∈M2 (μ,ν )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
≤ 7ΛwW (μ, μd
n) + 5ΛwW (ν, νd
n).
(49)
Further, if the weights w = (w0, w1, .., wM ) are restricted over a compact set A ⊂ RM+1 we have
inwf sup
Q∈M2(μdn,νnd )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
− inwf sup
Q∈M2 (μ,ν )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
≤ B × (W (μ, μd
n) + W (ν, νd
n)),
(50)
where B = max{7Λw, 5Λw}.
Proof. Since c(x, y) is Lipschitz, it readily follows that the absolute hedging error function |c(x, y) − {w0 + PM
i=1 wi(x − Ki)+}| is also Lipschitz continuous on R2+ =
conv(supp(ν)) × conv(supp(ν)) with Lipschitz constant Λˆ + PM
i=1 |wi|. Following the proof of Theorem 4.4 from [26], we apply Corollary 4.1 to get
sup
Q∈M2(μdn,νnd )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
20

= inf
(φ,ψ,h)∈D≥c
2
( Z
R+
φ(x)μd
n(dx) +
Z
R+
ψ(x)νd
n(dy)
)
,
and
sup
Q∈M2 (μ,ν )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
= inf
(φ,ψ,h)∈D≥c
2
( Z
R+
φ(x)μ(dx) +
Z
R+
ψ(x)ν(dy)
)
.
Under the assumption that there exists a Lipschitz function u : R+ = conv(supp(ν)) → R such that y → |c(x, y) − {w0 + PM
i=1 wi(x − Ki)+}| + u(y) is concave on R+ for
μ−almost every x ∈ R+, we can apply Theorem 4.3. This gives us solutions (φ∗, ψ∗, h∗) and (φ∗n, ψ∗n, h∗n) for the dual problems with respect to (μ, ν) and (μdn, νnd) respectively.
Applying Remark 4, φ∗ and φ∗n are Lipschitz continuous with constant 19Λw, and ψ∗
and ψ∗n are Lipschitz continuous with constant 17Λw where Λw is the maximum of the
Lipschitz constants of c(x, y) − {w0 + PM
i=1 wi(x − Ki)+}| and u(y). This gives
sup
Q∈M2(μdn,νnd )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
− sup
Q∈M2 (μ,ν )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
= inf
(φ,ψ,h)∈D≥c
2
( Z
R+
φ(x)μd
n(dx) +
Z
R+
ψ(x)νd
n(dy)
)
− inf
(φ,ψ,h)∈D≥c
2
( Z
R+
φ(x)μ(dx) +
Z
R+
ψ(x)ν(dy)
)
≤
Z
R+
φ∗(x)μd
n(dx) +
Z
R+
ψ∗(x)νd
n(dy)
−
Z
R+
φ∗(x)μd(dx) +
Z
R+
ψ∗(x)νd(dy)
=
Z
R+
φ∗(x)(μd
n − μ)(dx) +
Z
R+
ψ∗(x)(νd
n − ν)(dy)
≤ 19ΛwW (μ, μd
n) + 17ΛwW (ν, νd
n).
Analogously using φ∗n and ψ∗n in the first inequality instead of φ∗ and ψ∗ one obtains
sup
Q∈M2 (μ,ν )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
21

− sup
Q∈M2(μdn,νnd )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
≤ 19ΛwW (μ, μd
n, ) + 17ΛwW (ν, νd
n).
This proves (47). To prove the second part of the statement 1 in Theorem 4.5, let
fn(w) = sup
Q∈M2(μdn,νnd )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}| ,
and
f (w) = sup
Q∈M2 (μ,ν )
EQ |c(X, Y ) − {w0 +
M
X
i=1
wi(x − Ki)+}|
where w = (w0, w1, . . . , wM ) ∈ A. This gives
fn(w) − f (w) ≤ |fn(w) − f (w)| ≤ sup
w
|fn(w) − f (w)|,
=⇒ fn(w) ≤ f (w) + sup
w
|fn(w) − f (w)|,
=⇒ inwf fn(w) ≤ inwf f (w) + sup
w
|fn(w) − f (w)|,
=⇒ inwf fn(w) − inwf f (w) ≤ sup
w
|fn(w) − f (w)|
≤ sup
w
(19ΛwW (μ, μd
n) + 17ΛwW (ν, νd
n))
= B × (W (μ, μd
n) + W (ν, νd
n)),
where B = supw{19Λw, 17Λw}, with the supremum being taken over the compact set over which w takes values. Since Λw is the maximum of the Lipschitz constants of
c(x, y) − {w0 + PM
i=1 wi(x − Ki)+}| and u(y), the supremum of these over a compact set is also a finite value. Similarly, we obtain
inwf f (w) − inwf fn(w) ≤ B × (W (μ, μd
n) + W (ν, νd
n)),
which gives us the desired inequality (48). The proof of (50) is similar and hence we omit it.
5 Numerical Results
In this section, we focus on highlighting the utility of our min-max hedging approach (35) when the option prices are generated using a Black-Scholes (BS) and a Merton Jump diffusion(MJD) model.
22

(a) Plot for only stock (b) Plot for stock and 2 options
(c) Plot for stock and 5 options (d) Plot for stock and 11 options
Fig. 1: Plots of the conditional value of the target option under the worst possible scenarios and the corresponding hedging portfolio values for an increasing number of options for the Asian option under the Black Scholes model.
5.1 Black Scholes Model
5.1.1 Asian Option
We consider an Asian option with payoff c(X, Y ) = ( 1
2 (X + Y ) − K)+. The parameters are : S0 = 1 = K, σ = 0.2, μ = 0 = r, t1 = 0.5, T = 1. The price of the option obtained using Monte Carlo simulations with 105 paths is 0.06284. We use a non-uniform grid of 12 discretization points [0, 0.65985287, 0.69305573, 0.83860362, 0.86371482, 0.97595447,1.00102542,1.0484879, 1.09459717, 1.15062857, 1.57436388, 2] centered around the spot price S0 generated from a normal distribution with variance σ = 0.2 and mean S0. The corresponding option prices for matu-
rities t1 and T are used to calculate the discretely supported marginal distributions. In figure 1 we plot the conditional value of the target option at t1 using the joint probabilities pi,j obtained using the min-max problem for the different discretization points xi, i = 0, .., M at t1 given in the x-axis, denoted by the blue line. The true BS prices of the options at these discretization points are given by the orange lines, and the green lines denote the hedging portfolio values. We observe th-
at the conditional target option value obtained using the pi,j and the true call option price under the Black Scholes model mostly coincide for all cases. The hedging portfolio value starts aligning with the conditional target option value with an increasing number of options, starting from 6 options. This indicates that holding as few as 6 options in the hedging portfolio for the given choice of strikes and parameters provides a considerable reduction in the hedging error.
23

(a) Plot for 1 option (b) Plot for 3 options
(c) Plot for 4 options (d) Plot for 12 options
Fig. 2: Plots of the conditional value of the target option under the worst possible scenarios and the corresponding hedging portfolio values for an increasing number of options for the Forward start option under the Black Scholes model.
5.1.2 Forward Start Option
Effect of increasing number of options in the hedging portfolio : We consider a forward start option with payoff c(X, Y ) = (Y − X)+. The parameters are : S0 = 1, σ = 0.2, μ = 0 = r, t1 = 0.5, T = 1. The price of the option obtained using Monte Carlo simulations with 105 paths is 0.05647. We use the same non-uniform grid of 12 discretization points to calculate the marginal distributions. The plots in Figure 2 show that neither the hedging portfolio (green line) nor the target option price obtaine-
d using the worst case probabilities (blue line) align with the true price given by the original line. However, the addition of more options ( ≥ 4) yields a better fit for the target option to the true price than with fewer options (≤ 3). A natural question then is to study the performance obtained using the dual superhedging approach (46) and compare it with our min-max hedge throughout the duration of the hedge until maturity t1. We postpone this till subsection 6.1.2, where we use simulated sto-
ck paths to study the performance of the respective hedging algorithms.
5.2 Merton Jump Diffusion Model
Since we obtain similar results to those for the BS model scenario, we restrict our attention here to the forward start option only.
24

(a) Plot for only stock (b) Plot for stock and 2 options
(c) Plot for stock and 8 options (d) Plot for stock and 11 options
Fig. 3: Plots of the conditional value of the target option under the worst possible scenarios and the corresponding hedging portfolio values for an increasing number of options for the Forward start option under the Merton Jump Diffusion model.
We consider a forward start option with payoff c(X, Y ) = (Y − X)+. The parameters are : S0 = 1, σ = 0.2, μ = 0 = r, σ = 0.14, μj = −0.1, σj = 0.13, t1 = 0.5, T = 1. The price of the option obtained using Monte Carlo simulations with 105 paths is 0.07063. We use the same non-uniform grid of 12 discretization points as for BS model to calculate the marginal distributions.
5.2.1 Forward Start Option
The plots in Figure 3 show a similar situation as in the BS model, where neither the hedging portfolio (green line) nor the target option price obtained using the worst case probabilities (blue line) aligns with the true price given by the original line. However, the addition of more options ( ≥ 8) yields a better fit for the target option to the true price than with fewer options (≤ 8). We can also observe that the plot for subplot (3c) for a portfolio with 8 options and stock is identical to plo-
t for 3b) for the portfolio with 2 options and stock in Figure 3 indicating that the addition of more options does not necessarily reduce the absolute hedging error of the portfolio for the given choices of the strikes. Next, we focus our study on the performance of the hedging portfolios generated using the experiments in this section up to the short maturity t1 of the options in the hedging portfolio.
25

6 Results from simulation
In this section, we utilize the optimal weights obtained from solving the min-max optimization problem to compute the error statistics of the resulting hedging portfolio at the short maturity t1. To calculate the Peak Potential Future Exposure (PFE), we simulate 104 stock paths at each of the equispaced time points over the time interval [0, t1] with a spacing of h = 0.1. The peak 99th and 95th PFEs are calculated by taking the maximum of the 99th and 95th percentiles of the hedging error over the-
 equispaced time points. The peak 5th and 1st PFEs are computed similarly by taking the minima. The hedging error at any time t ∈ [0, t1] is given by
Hedging error at time t
= Value of target option at time t − Value of the hedging portfolio at time t. (51)
6.1 Black Scholes Model
We use the same parameters as used in Section 5.1 to calculate the necessary statistics for the Asian option and the Forward start option.
6.1.1 Asian Option
Figure 4 shows the value of the objective function obtained by solving the min-max problem for an increasing number of options in the hedging portfolio. The orange line represents the Mean Absolute Error (MAE) of the hedging portfolio at the short maturity t1, obtained using the stock price simulations. We can observe a sharp decline in both the values as we increase the number of options beyond 5. The min-max objective gives an upper bound for the mean absolute error. Figure 5 gives the peak PFEs-
 of the hedging error for an increasing number of options. We obtain a similar conclusion that there is a significant decrease in the 99th and 95th percentiles beyond 5 options in the hedging portfolio, with both the values becoming almost identical beyond 8 options.
6.1.2 Forward Start Option
Figure 6 shows that the min-max and MAE are marginally reduced by the addition of more options. The min-max error in this case again serves as an upper bound to MAE. Figure 7, on the contrary, shows a sharp increase in the 99th and 95th peak PFEs on the addition of more options but a considerable drop in the corresponding 5th and 1st peak PFEs. This indicates an important fact: while the weights we obtain heuristically by solving (36) may help minimize the error in the worst possible scenario, the-
y need not be the set of weights corresponding to the least hedging error under the true price dynamics. Effect of including options with maturity T in the hedging portfolio: As an additional experiment, we now include the options with maturity T and let the hedging portfolio comprise cash, stock, and options corresponding to all 22 strikes
26

Fig. 4: Min-Max versus Mean Absolute Error plot for the Asian option under the Black Scholes model.
(a) Peak 5th and 1st PFE (b) Peak 99th and 95th PFE
Fig. 5: Peak PFE plot for the Asian option under the Black Scholes model.
Fig. 6: Min-Max versus Mean Absolute Error plot for the Forward start option under the Black Scholes model.
27

(a) Peak 5th and 1st PFE (b) Peak 99th and 95th PFE
Fig. 7: Peak PFE plot for the Forward start option under the Black Scholes model.
M Mt1 M MT DualSH Max 0.0452 0.0223 0.0403 M AE 0.0280 0.0126 0.0120
Table 1: Worst possible errors for the three hedging portfolios for the Forward start option under the Black Scholes model
with maturity t1 and T used to calculate the marginal distributions. We compute the weights for the min-max problem in this case at time t1 and compare the corresponding statistics with the performance of the super-hedging portfolio obtained by solving the dual problem to the original MOT option pricing problem. Figure 8 displays the peak PFEs and Mean Absolute Errors of the hedging portfolio obtained using the dual and the min-max problems, respectively. It can be observed that while the 99th and-
 95th peak PFEs for the min-max solution are higher than that of the dual solution, the mean absolute errors for both cases are similar. The exact values of the MAE for the min-max hedging portfolio and dual hedging portfolio are 0.0126 and 0.0120, respectively. The peak 5th and 1st peak PFEs for both the hedging portfolios are negative, indicating that the hedging portfolios are higher in value than the target option in these scenarios, which is profitable from the option writer’s perspective.
6.2 Merton Jump Diffusion Model
6.2.1 Forward Start Option
Figure 9 displays the peak PFEs and Mean Absolute Errors of the hedging portfolio obtained using the dual and the min-max problems, respectively, for an increasing number of options. We observe that the min-max error (denoted by the blue line) is higher than the MAE until 10 options in the hedging portfolio, providing an upper bound to the MAE as desired.
28

Fig. 8: Values of the Peak PFEs and the Mean Absolute Errors for the hedging portfolios with options of both maturities t1 and T obtained using the dual and the min-max problems for the Forward option under the Black Scholes model.
Figure 10 gives the corresponding peak PFEs. The results, especially the 5th and 1st peak PFEs, again indicate that the hedging portfolio with an increasing number of options corresponding to the solution of the min-max problem need not be the one that reduces the error under the true dynamics. The resulting portfolio would instead minimize the error in the worst possible scenario.
1
1We would also like to highlight an important point that solutions obtained using the min-max algorithm are subject to numerical instabilities based on the choice of the parameters and the type of the optimization algorithm involved. This is beyond the scope of our study and hence we do not discuss it.
29

Fig. 9: Min-Max versus Mean Absolute Error plot for the Forward option under the Merton jump Diffusion model.
(a) Peak 5th and 1st PFE (b) Peak 99th and 95th PFE
Fig. 10: Peak PFE plot for the Forward start option under the Merton jump diffusion model.
7 Conclusion
In this paper, we present a model-free approach to hedging options of maturity T whose payoffs depend on the value of an asset at two distinct time points. The hedging portfolio comprises a cash position, the underlying asset, and plain-vanilla options on the same underlying asset of short maturity t1, where 0 < t1 < T . We formulate the problem of worst-case absolute hedging errors at the maturity of the short-term maturity options as a min-max optimization problem. The data for the problem consi-
sts of a finite number of liquid plain vanilla options at the two maturity points, which allow us to approximate the true marginal distributions. The inner maximization problem turns out to be a modified Martingale Optimal Transport problem. The worst-case error refers to the maximization over all martingale measures with the given marginals. A solution to this problem yields a cost-effective portfolio that minimizes the worst-case error at short maturity.
30

We also derive a theoretical upper bound on the absolute hedging error at the longer maturity T due to the availability of finitely many equally spaced strikes over a bounded support of the true underlying measure. A wide range of numerical examples, including Asian and Forward start options, under the Black-Scholes and Merton’s Jump diffusion model, illustrate the utility of this method. The experiments highlight an important fact: the traditional super hedge, while being more expensive than our-
 hedging portfolio, does not necessarily yield the minimum possible worst-case error.
During our experiments, we observed that the numerical solutions obtained by solving the min-max problem in the discrete case may not be unique and depend on the choice of the solver. We have used a Gurobi optimization solver for the inner maximization problem and utilised the SLSQP method of scipy.optimize library for the outer minimization problem.
8 References
References
[1] Purba Banerjee, Srikanth Iyer, and Shashi Jain. Multiperiod static hedging of european options. Journal of Computational Finance, 2024.
[2] Nicole B ̈auerle and Daniel Schmithals. Martingale optimal transport in the discrete case via simple linear programming techniques. Mathematical Methods of Operations Research, 90:453–476, 2019.
[3] Nicole B ̈auerle and Daniel Schmithals. Consistent upper price bounds for exotic options. International Journal of Theoretical and Applied Finance, 24(02):2150011, 2021. [4] Mathias Beiglb ̈ock, Alexander MG Cox, and Martin Huesmann. The geometry of multi-marginal skorokhod embedding. Probability Theory and Related Fields, 176:1045–1096, 2020. [5] Mathias Beiglb ̈ock, Pierre Henry-Labordere, and Friedrich Penkner. Modelindependent bounds for option prices—a mass transport approach. Finance and-
 Stochastics, 17:477–501, 2013. [6] Mathias Beiglb ̈ock, Tongseok Lim, and Jan Obl ́oj. Dual attainment for the martingale transport problem. Bernoulli, 25(3):1640–1658, 2019. [7] Mathias Beiglb ̈ock, Marcel Nutz, and Nizar Touzi. Complete duality for martingale optimal transport on the line. Annals of Probability, 2017. [8] Jean-David Benamou, Guillaume Carlier, Marco Cuturi, Luca Nenna, and Gabriel Peyr ́e. Iterative bregman projections for regularized transportation problems. SIAM Journal on Sc-
ientific Computing, 37(2):A1111–A1138, 2015.
[9] Douglas T Breeden and Robert H Litzenberger. Prices of state-contingent claims implicit in option prices. Journal of business, pages 621–651, 1978. [10] Haydyn Brown, David Hobson, and Leonard CG Rogers. Robust hedging of barrier options. Mathematical Finance, 11(3):285–314, 2001. [11] Peter Carr and Liuren Wu. Static hedging of standard options. Journal of Financial Econometrics, 12(1):3–46, 2014.
31

[12] Alexander MG Cox and Jan Oblo ́j. Robust pricing and hedging of double no-touch options. Finance and Stochastics, 15:573–605, 2011. [13] Alexander MG Cox, Jan Oblo ́j, and Nizar Touzi. The root solution to the multimarginal embedding problem: an optimal stopping and time-reversal approach. Probability Theory and Related Fields, 173(1):211–259, 2019.
[14] Giorgio Dall’Aglio. Sugli estremi dei momenti delle funzioni di ripartizione doppia. Annali della Scuola Normale Superiore di Pisa-Scienze Fisiche e Matematiche, 10(1-2):35–74, 1956. [15] Mark Davis, Jan Obl ́oj, and Vimal Raval. Arbitrage bounds for prices of weighted variance swaps. Mathematical Finance, 24(4):821–854, 2014. [16] Yan Dolinsky and H Mete Soner. Martingale optimal transport and robust hedging in continuous time. Probability Theory and Related Fields, 160(1):391–427, 2014. [17-
] Stephan Eckstein, Gaoyue Guo, Tongseok Lim, and Jan Obl ́oj. Robust pricing and hedging of options on multiple assets and its numerics. SIAM Journal on Financial Mathematics, 12(1):158–188, 2021.
[18] Alfred Galichon, Pierre Henry-Labordere, and Nizar Touzi. A stochastic control approach to no-arbitrage bounds given marginals, with an application to lookback options. Annals of Applied Probability, 2014.
[19] Gaoyue Guo and Jan Oblo ́j. Computational methods for martingale optimal transport problems. The Annals of Applied Probability, 29(6):3311–3347, 2019. [20] Pierre Henry-Labordere, Jan Oblo ́j, Peter Spoida, and Nizar Touzi. The maximum maximum of a martingale with given n marginals. The Annals of Applied Probability, pages 1–44, 2016. [21] David G Hobson. Robust hedging of the lookback option. Finance and Stochastics, 2:329–347, 1998. [22] Zhaoxu Hou and Jan Obl ́oj. Robust pricing–hedging du-
alities in continuous time. Finance and Stochastics, 22(3):511–567, 2018.
[23] Tongseok Lim. Multi-martingale optimal transport. arXiv preprint arXiv:1611.01496, 2016.
[24] Eva Lu ̈tkebohmert and Julian Sester. Tightening robust price bounds for exotic derivatives. Quantitative Finance, 19(11):1797–1815, 2019. [25] Marcel Nutz, Florian Stebegg, and Xiaowei Tan. Multiperiod martingale transport. Stochastic Processes and their Applications, 130(3):1568–1615, 2020. [26] Daniel Matthias Schmithals. Contributions to model-independent finance via martingale optimal transport. PhD thesis, Dissertation, Karlsruhe, Karlsruher Institut fu ̈r Technologie (KIT), 2018, 2019.
[27] Steven E Shreve. Stochastic calculus for finance II: Continuous-time models, volume 11. Springer Science & Business Media, 2004. [28] Maurice Sion. On general minimax theorems. Pacific Journal of Mathematics, 1958. [29] Volker Strassen. The existence of probability measures with given marginals. The Annals of Mathematical Statistics, 36(2):423–439, 1965.
[30] Frode Terkelsen. Some minimax theorems. Mathematica Scandinavica, 31(2):405413, 1972.
32

[31] C ́edric Villani. Topics in optimal transportation, volume 58. American Mathematical Soc., 2021. [32] C ́edric Villani et al. Optimal transport: old and new, volume 338. Springer, 2009.
33

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:47.929Z
- **Text Length:** 62553 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 33 of 33
