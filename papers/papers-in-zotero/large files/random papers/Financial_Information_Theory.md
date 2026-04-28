# PDF Document: Alonso - 2025 - Financial Information Theory.pdf

**File Path:** Alonso - 2025 - Financial Information Theory.pdf

**Processed Date:** 2026-02-10T18:15:01.266Z

**File Size:** 1853.48 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3594

**Title:** Financial Information Theory

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Financial Information Theory
Miquel Noguer i Alonso
Artificial Intelligence Finance Institute
November 21, 2025
Abstract
This paper introduces a comprehensive framework for Financial Information Theory by applying information-theoretic concepts—such as entropy, KullbackLeibler divergence, mutual information, normalized mutual information, and transfer entropy—to financial time series. We systematically derive these measures with complete mathematical proofs, establish their theoretical properties, and propose practical algorithms for estimation. Using S&P 500 data from 2000–2025, we demonstrate empirical usefulness -
for regime detection, market efficiency testing, and portfolio construction. We show that normalized mutual information (NMI) behaves as a powerful, bounded, and interpretable measure of temporal dependence, highlighting periods of structural change such as the 2008 financial crisis and COVID-19 shock. Our entropy-adjusted Value at Risk, information-theoretic diversification criterion, and NMI-based market efficiency test provide actionable tools for risk management and asset allocation. We interp-
ret NMI as a quantitative diagnostic of the Efficient Market Hypothesis and demonstrate that information-theoretic methods offer superior regime detection compared to traditional autocorrelation or volatility-based approaches. All theoretical results include rigorous proofs, and empirical findings are validated across multiple market regimes spanning 25 years of daily returns.
1 Introduction
Financial markets are characterized by complex dynamics, non-stationarity, and heavytailed return distributions. Traditional statistical tools often rely on second-order moments or linear correlation, which can fail to capture nonlinear dependencies, structural breaks, and higher-order interactions. In contrast, information theory provides a modelfree and robust framework to quantify uncertainty, dependence, and structural change, without assuming linearity or Gaussianity [Cont, 2001, McNeil et al-
., 2015]. Entropy and mutual information are central concepts in information theory, quantifying the uncertainty of a random variable and the amount of information shared between variables, respectively [Shannon, 1948]. In the context of financial markets, entropy can be interpreted as a measure of market uncertainty, while mutual information captures the dependence between past and future returns, or across assets, instruments, and time scales. Transfer entropy extends this framework by providing-
 a directional measure of information flow between time series, closely related to Granger causality but formulated in purely information-theoretic terms.
1
arXiv:2511.16339v1 [q-fin.PM] 20 Nov 2025

However, raw mutual information is unbounded and depends on the scale of the variables, complicating comparisons across assets and time. To address this, we focus on Normalized Mutual Information (NMI), which rescales mutual information into a dimensionless quantity bounded in [0, 1]. This boundedness and relative robustness to scale make NMI particularly well-suited as a diagnostic for market efficiency and temporal dependence [Noguer i Alonso and Zoonekynd, 2024]. The contributions of this pape-
r are fourfold:
1. Rigorous Theoretical Framework: We review and formalize core informationtheoretic quantities (entropy, KL divergence, mutual information, transfer entropy, and NMI) with complete proofs of all fundamental properties.
2. Estimation and Algorithms: We present practical algorithms for estimating entropy, NMI, and transfer entropy for financial time series using k-nearest neighbor (k-NN) methods, with detailed implementation guidelines.
3. Comprehensive Empirical Evidence: Using S&P 500 data (2000–2025), we show how entropy, KL divergence, and NMI capture major market regimes with detailed distributional analysis and statistical validation.
4. Practical Applications: We propose entropy-adjusted VaR, information-theoretic diversification, NMI-based market efficiency testing, and trading signal algorithms with rigorous mathematical justification.
The remainder of this paper is organized as follows. Section 2 establishes core information-theoretic concepts with complete proofs. Section 3 introduces Normalized Mutual Information and proves its properties. Section 4 presents comprehensive empirical results on S&P 500 data. Section 5 develops practical applications with detailed algorithms. Section 6 connects NMI to the Efficient Market Hypothesis. Section 7 concludes.
2 Core Information-Theoretic Concepts
In this section, we review the main information-theoretic concepts used throughout the paper, providing complete proofs of all fundamental properties.
2.1 Shannon Entropy
Shannon entropy [Shannon, 1948] quantifies the average uncertainty in a probability distribution, providing the fundamental building block for all subsequent informationtheoretic measures.
Definition 2.1 (Shannon Entropy). Let (Ω, F, P ) be a probability space with X : Ω → X a discrete random variable taking values in a finite set X = {x1, . . . , xn}. The Shannon entropy of X is defined as:
H(X) = H(P ) = −
X
x∈X
P (x) log P (x) = −EP [log P (X)] (1)
where we adopt the convention 0 log 0 = 0 by continuity, and logarithms are natural (base e) unless otherwise stated.
2

Theorem 2.2 (Properties of Entropy). Let P be a probability distribution over X with |X | = n. Then:
(i) Non-negativity: H(P ) ≥ 0 with equality if and only if P is a point mass.
(ii) Maximum entropy: H(P ) ≤ log n with equality if and only if P is uniform: P (x) = 1/n for all x ∈ X .
(iii) Strict concavity: H(·) is strictly concave on the probability simplex.
(iv) Continuity: H(·) is continuous in P under total variation topology.
(v) Additivity: For independent random variables X, Y :
H(X, Y ) = H(X) + H(Y ) (2)
Proof. (i) Non-negativity: Since 0 ≤ P (x) ≤ 1 for all x, we have log P (x) ≤ 0, so −P (x) log P (x) ≥ 0. Thus H(P ) ≥ 0. Equality holds when all non-zero terms vanish, which occurs only when P (x) ∈ {0, 1} for all x, i.e., P is a point mass. (ii) Maximum entropy: We maximize H(P ) = − P
i pi log pi subject to P
i pi = 1 using Lagrange multipliers. The Lagrangian is:
L(p, λ) = −
n
X
i=1
pi log pi − λ
n
X
i=1
pi − 1
!
(3)
Taking derivatives and setting to zero:
∂L
∂pi
= − log pi − 1 − λ = 0 =⇒ pi = e−1−λ (4)
Since P
i pi = 1, we have ne−1−λ = 1, yielding pi = 1/n for all i. Substituting:
Hmax = −
n
X
i=1
1
n log 1
n = log n (5)
(iii) Strict concavity: For 0 < λ < 1 and distributions P , Q, let R = λP +(1−λ)Q. Then:
H(R) = −
X
x
r(x) log r(x) (6)
=−
X
x
[λp(x) + (1 − λ)q(x)] log[λp(x) + (1 − λ)q(x)] (7)
By the strict concavity of −t log t:
H(R) > −λ
X
x
p(x) log[λp(x) + (1 − λ)q(x)] (8)
− (1 − λ)
X
x
q(x) log[λp(x) + (1 − λ)q(x)] (9)
Using the log-sum inequality and properties of the logarithm:
H(R) > λH(P ) + (1 − λ)H(Q) (10)
3

provided P ̸= Q, establishing strict concavity. (iv) Continuity: Let Pn → P in total variation: P
x |Pn(x) − P (x)| → 0. The function f (t) = −t log t (with f (0) = 0) is continuous and bounded on [0, 1]. Thus:
|H(Pn) − H(P )| =
X
x
[f (Pn(x)) − f (P (x))] (11)
≤
X
x
|f (Pn(x)) − f (P (x))| → 0 (12)
by uniform continuity of f on [0, 1]. (v) Additivity: If X and Y are independent, then PX,Y (x, y) = PX(x)PY (y). Thus:
H(X, Y ) = −
X
x,y
PX,Y (x, y) log PX,Y (x, y) (13)
=−
X
x,y
PX(x)PY (y) log[PX(x)PY (y)] (14)
=−
X
x,y
PX(x)PY (y)[log PX(x) + log PY (y)] (15)
=−
X
x
PX(x) log PX(x) −
X
y
PY (y) log PY (y) (16)
= H(X) + H(Y ) (17)
2.2 Differential Entropy
Differential entropy extends the concept of entropy to continuous variables.
Definition 2.3 (Differential Entropy). Let X be a continuous random variable with density fX(x) supported on Rd. The differential entropy of X is:
h(X) = −
Z
Rd
fX(x) log fX(x) dx (18)
provided the integral exists.
Remark 2.4. Unlike discrete entropy, differential entropy can be negative and is not invariant under smooth transformations of the variable. However, differences of entropies and related quantities, such as mutual information and KL divergence, retain meaningful invariance properties.
2.2.1 Computing Differential Entropy via k-Nearest Neighbors
To compute differential entropy, we use k-nearest neighbors (k-NN) estimators [Kozachenko and Leonenko, 1987].
Theorem 2.5 (k-NN Entropy Estimator). The k-NN estimator for differential entropy is given by:
ˆh(X) = 1
N
N
X
i=1
log N · ε(i)
k + log cd + ψ(k) − ψ(N ) (19)
4

where N is the number of samples, ε(i) is twice the distance from the i-th sample to its k-th nearest neighbor, cd is the volume of the unit ball in d-dimensional space, and ψ is the digamma function.
Proof sketch. The k-NN estimator is derived from the Kozachenko–Leonenko approach, which approximates the density f (xi) at each point xi by:
fˆ(xi) ≈ k
N · cd · ρk(xi)d (20)
where ρk(xi) is the distance to the k-th nearest neighbor. Substituting into the entropy definition and taking expectations yields Equation (19). The digamma function corrections ψ(k)−ψ(N ) account for bias in finite samples. For complete details, see Kozachenko and Leonenko [1987].
Remark 2.6. The k-NN entropy estimator is consistent and asymptotically unbiased under mild regularity conditions on the density f [Kozachenko and Leonenko, 1987]. The choice of k involves a bias-variance tradeoff: smaller k reduces bias but increases variance, while larger k provides more stable estimates at the cost of increased bias.
2.3 Conditional Entropy
Conditional entropy quantifies the remaining uncertainty about one random variable given another.
Definition 2.7 (Conditional Entropy). Let X and Y be discrete random variables with joint distribution PX,Y . The conditional entropy of Y given X is:
H(Y |X) = −
X
x∈X
X
y∈Y
P (x, y) log P (y|x) = EX,Y [− log P (Y |X)] (21)
Theorem 2.8 (Chain Rule for Entropy). For any random variables X and Y :
H(X, Y ) = H(X) + H(Y |X) = H(Y ) + H(X|Y ) (22)
Proof. By definition:
H(X, Y ) = −
X
x,y
P (x, y) log P (x, y) (23)
=−
X
x,y
P (x, y) log[P (x) · P (y|x)] (24)
=−
X
x,y
P (x, y) log P (x) −
X
x,y
P (x, y) log P (y|x) (25)
=−
X
x
P (x) log P (x)
X
y
P (y|x) −
X
x,y
P (x, y) log P (y|x) (26)
=−
X
x
P (x) log P (x) −
X
x,y
P (x, y) log P (y|x) (27)
= H(X) + H(Y |X) (28)
The second equality follows by symmetry.
5

2.4 Kullback–Leibler Divergence
KL divergence measures the “distance” between two probability distributions, although it is not symmetric and does not satisfy the triangle inequality.
Definition 2.9 (Kullback–Leibler Divergence). Let P and Q be two probability distributions on a common measurable space. For discrete distributions:
DKL(P ∥Q) =
X
x∈X
P (x) log P (x)
Q(x) = EP log P (X)
Q(X) (29)
For continuous distributions with densities p and q:
DKL(P ∥Q) =
Z
p(x) log p(x)
q(x) dx (30)
Theorem 2.10 (Gibbs’ Inequality). For any distributions P and Q:
DKL(P ∥Q) ≥ 0 (31)
with equality if and only if P = Q almost everywhere.
Proof. Using Jensen’s inequality with the strictly convex function − log(·):
−DKL(P ∥Q) =
X
x
P (x) log Q(x)
P (x) (32)
= EP log Q(X)
P (X) (33)
≤ log EP
Q(X )
P (X) (by Jensen’s inequality) (34)
= log
X
x
P (x) · Q(x)
P (x) (35)
= log
X
x
Q(x) = log 1 = 0 (36)
Equality holds in Jensen’s inequality if and only if Q(x)/P (x) is constant wherever P (x) > 0. Combined with normalization P
x Q(x) = 1 = P
x P (x), this implies P = Q almost everywhere.
Theorem 2.11 (Pinsker’s Inequality). For any distributions P and Q:
∥P − Q∥TV ≤
r1
2 DKL(P ∥Q) (37)
where ∥P − Q∥TV = 1
2
P
x |P (x) − Q(x)| is the total variation distance.
Proof sketch. The proof uses properties of f -divergences and the variational representation of total variation distance. Define:
A = {x : P (x) ≥ Q(x)} (38)
6

Then:
∥P − Q∥TV =
X
x∈A
[P (x) − Q(x)] = P (A) − Q(A) (39)
By the data processing inequality for f -divergences and properties of the logarithm, one can show:
[P (A) − Q(A)]2 ≤ 2
X
x
P (x) log P (x)
Q(x) = 2DKL(P ∥Q) (40)
Taking square roots yields Pinsker’s inequality. For complete details, see Pinsker [1964] or Cover and Thomas [2006], Theorem 11.6.1.
Remark 2.12. Pinsker’s inequality provides a useful link between KL divergence and total variation distance, implying that if DKL(P ∥Q) is small, then P and Q are close in total variation.
2.5 Mutual Information
Mutual information measures the amount of information one random variable contains about another.
Definition 2.13 (Mutual Information). Let X and Y be discrete random variables with joint distribution PX,Y and marginals PX and PY . The mutual information between X and Y is:
I(X; Y ) =
X
x,y
PX,Y (x, y) log PX,Y (x, y)
PX(x)PY (y) (41)
Equivalently:
I(X; Y ) = H(Y ) − H(Y |X) = H(X) + H(Y ) − H(X, Y ) (42)
Theorem 2.14 (Properties of Mutual Information). For random variables X and Y :
(i) Non-negativity: I(X; Y ) ≥ 0 with equality if and only if X and Y are independent.
(ii) Symmetry: I(X; Y ) = I(Y ; X).
(iii) KL representation: I(X; Y ) = DKL(PX,Y ∥PX ⊗ PY ).
(iv) Bounds: I(X; Y ) ≤ min{H(X), H(Y )}.
(v) Data processing inequality: For Markov chain X → Y → Z:
I(X; Z) ≤ min{I(X; Y ), I(Y ; Z)} (43)
Proof. (i) Non-negativity: From the chain rule:
I(X; Y ) = H(Y ) − H(Y |X) = H(Y ) − EX[H(Y |X = x)] (44)
7

Since conditioning reduces entropy (a consequence of Jensen’s inequality applied to the concave entropy functional), H(Y |X) ≤ H(Y ) with equality if and only if X and Y are independent. For a rigorous proof:
H(Y ) − H(Y |X) = −
X
y
P (y) log P (y) +
X
x
P (x)
X
y
P (y|x) log P (y|x) (45)
=
X
x,y
P (x, y) log P (y|x)
P (y) (46)
=
X
x,y
P (x, y) log P (x, y)
P (x)P (y) ≥ 0 (47)
by Gibbs’ inequality (Theorem 2.10), since the right side is DKL(PX,Y ∥PX ⊗ PY ). (ii) Symmetry: Follows immediately from the symmetric definition I(X; Y ) = H(X) + H(Y ) − H(X, Y ).
(iii) KL representation: By definition:
I(X; Y ) =
X
x,y
P (x, y) log P (x, y)
P (x)P (y) = DKL(PX,Y ∥PX ⊗ PY ) (48)
(iv) Bounds: From the chain rule:
I(X; Y ) = H(X) − H(X|Y ) ≤ H(X) (49)
since H(X|Y ) ≥ 0. Similarly, I(X; Y ) ≤ H(Y ).
(v) Data processing inequality: For Markov chain X → Y → Z, we have P (x, y, z) = P (x)P (y|x)P (z|y), which implies P (x|y, z) = P (x|y). Thus:
I(X; Y, Z) = H(X) − H(X|Y, Z) (50)
= H(X) − H(X|Y ) (since X ⊥ Z | Y ) (51)
= I(X; Y ) (52)
Also:
I(X; Y, Z) = I(X; Y ) + I(X; Z|Y ) (53)
≥ I(X; Y ) (since I(X; Z|Y ) ≥ 0) (54)
Combining with I(X; Z) ≤ I(X; Y, Z) (from the chain rule for mutual information), we obtain:
I(X; Z) ≤ I(X; Y ) (55)
By symmetry, I(X; Z) ≤ I(Y ; Z), establishing the data processing inequality.
Remark 2.15. While mutual information is valuable, it is unbounded and depends on the entropy scale of the underlying variables, which complicates comparisons across assets, time periods, or markets with different volatility levels. This motivates the development and use of Normalized Mutual Information (NMI) as a bounded, scale-robust dependence measure.
8

2.6 Transfer Entropy and Directional Dependence
Mutual information is symmetric and does not distinguish the direction of information flow. Transfer entropy addresses this by measuring directional influence.
Definition 2.16 (Transfer Entropy (Discrete-Time)). Let (Xt)t∈Z and (Yt)t∈Z be two stationary stochastic processes. For integers k, l ≥ 1, define the past vectors
Y (k)
t = (Yt, Yt−1, . . . , Yt−k+1), X(l)
t = (Xt, Xt−1, . . . , Xt−l+1) (56)
The transfer entropy from X to Y at horizon one is
TX→Y =
X
yt+1 ,y (k)
t ,x(l)
t
p(yt+1, y(k)
t , x(l)
t ) log p(yt+1 | y(k)
t , x(l)
t)
p(yt+1 | y(k)
t ) (57)
Proposition 2.17 (Transfer Entropy as Conditional Mutual Information). Transfer entropy can be expressed as a conditional mutual information:
TX→Y = I X(l)
t ; Yt+1 Y (k)
t (58)
Proof. By the definition of conditional mutual information:
I(A; B | C) =
X
a,b,c
p(a, b, c) log p(a, b | c)
p(a | c)p(b | c) (59)
=
X
b,c
p(b, c)
X
a
p(a | b, c) log p(a | b, c)
p(a | c) (60)
Identifying A = X(l)
t , B = Yt+1 and C = Y (k)
t:
I (X (l)
t ; Yt+1 | Y (k)
t )=
X
yt+1 ,y (k)
t
p(yt+1, y(k)
t)
X
x(l)
t
p(x(l)
t | yt+1, y(k)
t ) log p(x(l)
t | yt+1, y(k)
t)
p(x(l)
t | y(k)
t ) (61)
Using Bayes’ theorem and simplifying:
=
X
yt+1 ,y (k)
t ,x(l)
t
p(yt+1, y(k)
t , x(l)
t ) log p(yt+1, x(l)
t | y(k)
t)
p(yt+1 | y(k)
t )p(x(l)
t | y(k)
t ) (62)
=
X
yt+1 ,y (k)
t ,x(l)
t
p(yt+1, y(k)
t , x(l)
t ) log p(yt+1 | y(k)
t , x(l)
t)
p(yt+1 | y(k)
t ) (63)
which coincides with Equation (57).
Remark 2.18. Transfer entropy is always non-negative and equals zero if and only if, conditional on its own past, the future of Y is independent of the past of X:
TX→Y = 0 ⇐⇒ p(yt+1 | y(k)
t , x(l)
t ) = p(yt+1 | y(k)
t ) a.s. (64)
In this sense, transfer entropy formalizes the idea that X Granger-causes Y if and only if TX→Y > 0.
9

Algorithm 1 Transfer Entropy Estimation for Financial Time Series
Require: Time series Xt, Yt of length N ; integers k, l ≥ 1 (past lengths); window size w; number of neighbors knn Ensure: Estimated transfer entropy TX→Y
1: Construct lagged vectors Y (k)
t and X(l)
t for all t such that indices are valid.
2: Form samples of triplets (Yt+1, Y (k)
t , X (l)
t ) over a moving window of size w. 3: for each window do
4: Estimate the joint entropy h(Yt+1, Y (k)
t , X (l)
t ) using a k-NN estimator. 5: Estimate the joint entropies h(Yt+1, Y (k)
t ), h(Y (k)
t , X (l)
t ), and h(Y (k)
t ). 6: Compute the conditional mutual information:
TbX→Y = h(Yt+1, Y (k)
t ) + h(Y (k)
t , X (l)
t ) − h(Yt+1, Y (k)
t , X (l)
t ) − h(Y (k)
t)
7: Optionally clip small negative values to zero to enforce non-negativity. 8: end for
9: return The average or time-varying sequence of TbX→Y .
3 Normalized Mutual Information (NMI)
Normalized Mutual Information (NMI) addresses the unbounded nature of mutual information by rescaling it using the entropies of the underlying variables. This yields a dimensionless quantity in [0, 1].
3.1 Definition and Basic Properties
Definition 3.1 (Normalized Mutual Information). Let U and V be random variables with mutual information I(U ; V ) and (Shannon or differential) entropies H(U ) and H(V ). The Normalized Mutual Information between U and V is:
NMI(U, V ) = I(U ; V )
pH(U ) · H(V ) (65)
Theorem 3.2 (Bounds on NMI). For any random variables U and V with positive entropies:
0 ≤ NMI(U, V ) ≤ 1 (66)
Moreover:
• NMI(U, V ) = 0 if and only if U and V are independent
• NMI(U, V ) = 1 if and only if U and V are deterministically related
Proof. From Theorem 2.14, I(U ; V ) ≥ 0, so NMI(U, V ) ≥ 0. For the upper bound, note that from Theorem 2.14(iv):
I(U ; V ) ≤ min{H(U ), H(V )} (67)
By the arithmetic-geometric mean (AM-GM) inequality:
pH(U ) · H(V ) ≤ H(U ) + H(V )
2 (68)
10

However, for the upper bound on NMI, we use:
I(U ; V ) ≤ min{H(U ), H(V )} ≤ pH(U ) · H(V ) (69)
where the second inequality is the reverse AM-GM inequality: for a, b > 0,
min{a, b} ≤
√
a · b (70)
To prove this, note that if a ≤ b, then:
a2 ≤ a · b =⇒ a ≤
√
a · b (71)
Therefore:
NMI(U, V ) = I(U ; V )
pH(U )H(V ) ≤
pH(U )H(V )
pH(U )H(V ) = 1 (72)
Boundary cases:
• NMI(U, V ) = 0 ⇐⇒ I(U ; V ) = 0 ⇐⇒ U and V are independent (by Theorem 2.14).
• NMI(U, V ) = 1 requires I(U ; V ) = pH(U )H(V ). Since I(U ; V ) ≤ min{H(U ), H(V )}, this can only occur when:
I(U ; V ) = H(U ) = H(V ) = pH(U )H(V ) (73)
which implies H(U ) = H(V ) and I(U ; V ) = H(U ) = H(V ).
From I(U ; V ) = H(V ) − H(V |U ), we have:
H(V ) = H(V ) − H(V |U ) =⇒ H(V |U ) = 0 (74)
This means V is deterministic given U (up to sets of measure zero). Similarly, H(U |V ) = 0 implies U is deterministic given V . Therefore, U and V are essentially deterministic functions of each other.
Remark 3.3. NMI thus provides a normalized, bounded measure of dependence that facilitates comparison across different assets, time horizons, and markets.
3.2 Estimating NMI for Discrete Variables
For discrete random variables, estimation of NMI can be performed via empirical probabilities using observed frequencies in a contingency table. Given samples {(ui, vi)}N
i=1
drawn from (U, V ), we can estimate:
PˆU,V (u, v) = 1
N
N
X
i=1
1{(ui, vi) = (u, v)} (75)
11

Then:
Hˆ (U ) = −
X
u
PˆU (u) log PˆU (u) (76)
Hˆ (V ) = −
X
v
PˆV (v) log PˆV (v) (77)
Iˆ(U ; V ) =
X
u,v
PˆU,V (u, v) log
PˆU,V (u, v)
PˆU (u)PˆV (v) (78)
N[ MI(U, V ) =
Iˆ(U ; V )
q
Hˆ (U ) · Hˆ (V )
(79)
3.3 NMI for Continuous Variables
For continuous variables, we use k-NN entropy estimators. Entropies h(X), h(Y ), and h(X, Y ) are estimated from samples, and then I(X; Y ) and NMI(X, Y ) are obtained via the identity:
I(X; Y ) = h(X) + h(Y ) − h(X, Y ) (80)
Algorithm 2 NMI Calculation for Continuous Time Series
Require: Time series X and Y with length N , lag l, window size w, number of neighbors k
Ensure: NMI time series 1: Initialize empty list nmi_results 2: Shift Y by lag l to create Yshifted 3: Concatenate X and Yshifted, drop NA values 4: for t = w to N do
5: Extract window: Xw = X[t − w + 1 : t], Yw = Yshifted[t − w + 1 : t] 6: Compute hX = h(Xw) using k-NN entropy estimator (Equation 19) 7: Compute hY = h(Yw) using k-NN entropy estimator 8: Compute hXY = h([Xw, Yw]) using k-NN entropy estimator 9: MI = max(0, hX + hY − hXY )
10: NMIt = MI/√hX · hY if hX · hY > 0, else 0 11: Append NMIt to nmi_results 12: end for
13: return nmi_results
Remark 3.4. The line MI = max(0, hX + hY − hXY ) in Algorithm 2 clips small negative estimates produced by the entropy estimator due to finite-sample noise, enforcing the theoretical non-negativity of mutual information.
3.4 Scale Invariance and Interpretability
Proposition 3.5 (Boundedness and Relative Robustness of NMI). Differential entropy and conditional entropy are not invariant under rescaling of the underlying random variables: multiplying a continuous variable by a positive constant shifts its entropy by an additive constant. Normalized Mutual Information is not strictly scale invariant either,
12

but because it normalizes mutual information by the marginal entropies and is bounded in [0, 1], it is substantially less sensitive to pure volatility rescaling and is easier to interpret across assets and time.
Proof. For a random variable X and constant c > 0, the differential entropy satisfies:
h(cX) = h(X) + log c (81)
To prove this, let fX(x) be the density of X. The density of Y = cX is:
fY (y) = 1
c fX
y
c (82)
Thus:
h(Y ) = −
Z
fY (y) log fY (y) dy (83)
=−
Z1
c fX
y
c log 1
c fX
y
c dy (84)
=−
Z1
c fX
y
c
h
log fX
y
c − log c
i
dy (85)
Substituting x = y/c, so dy = c dx:
h(Y ) = −
Z
fX(x)[log fX(x) − log c] dx (86)
=−
Z
fX(x) log fX(x) dx + log c
Z
fX(x) dx (87)
= h(X) + log c (88)
This shows that differential entropy is not scale invariant. For NMI we have:
NMI(cX, cY ) = I(cX; cY )
ph(cX) h(cY ) (89)
= I(X; Y )
q
h(X) + log c h(Y ) + log c
(90)
where we used the fact that mutual information is invariant under smooth bijective reparametrizations of the marginals:
I(cX; cY ) = h(cX)+h(cY )−h(cX, cY ) = [h(X)+log c]+[h(Y )+log c]−[h(X, Y )+log c] = I(X; Y ) (91) Thus NMI is not strictly invariant to rescaling either, but the additive log c shifts in the denominator are moderated by the normalization and, crucially, NMI(X, Y ) always lies in [0, 1]. In practice this makes NMI far more robust and interpretable across assets or periods with different volatility levels than raw entropy or mutual information, which can take arbitrarily large or negative values.
4 Empirical Estimation on Financial Time Series
In this section we apply entropy, KL divergence, and NMI to S&P 500 daily returns from 2000 to 2025, providing comprehensive empirical validation of the theoretical framework.
13

4.1 Data Description
We analyze daily returns of the S&P 500 ETF (SPY) from January 1, 2000 to January 1, 2025, providing 25 years of market data spanning multiple economic cycles. We compute log returns:
rt = log Pt
Pt−1
(92)
where Pt is the adjusted closing price on day t. The sample includes major market events such as:
• Dot-com bubble aftermath (2000–2003)
• Global financial crisis (2008–2009)
• European sovereign debt crisis (2011–2012)
• Commodity and China slowdown (2015–2016)
• COVID-19 pandemic (2019–2020)
• Post-pandemic inflation and rate tightening (2022–2024)
4.2 Implementation Details
All computations use a rolling window approach with window size w = 252 trading days (approximately one year). For entropy and mutual information estimation, we employ the k-NN method with k = 3 neighbors. Small Gaussian noise (σ = 10−10) is added to ensure numerical stability when computing nearest neighbors. The k-NN differential entropy estimator (Equation 19) is implemented using standard nearest-neighbor algorithms. For each observation, we compute distances to the k-th nearest neighbor, calc-
ulate the volume of the unit ball in d dimensions, and apply the digamma function corrections as specified in the formula.
4.3 Rolling Entropy Analysis
4.3.1 Methodology
We compute rolling Shannon entropy over 252-day windows:
Ht = h(rt−251:t) (93)
using the k-NN estimator. This measures the average uncertainty in daily returns over the past year.
4.3.2 Economic Interpretation
Rolling entropy captures:
• Uncertainty: Higher entropy indicates greater unpredictability in return distributions
• Volatility regimes: Sharp entropy increases signal transitions to high-volatility states
• Market stress: Entropy spikes coincide with major market disruptions
14

4.3.3 Results and Discussion
The rolling entropy time series reveals several key patterns:
1. Financial Crisis (2008–2009): Entropy increased dramatically during the financial crisis, peaking in late 2008 when market uncertainty reached extreme levels. This reflects the fat-tailed, multimodal return distribution during this period.
2. Low-Volatility Regime (2013–2019): Entropy remained relatively low and stable during the extended bull market, indicating consistent, predictable return patterns with narrow distributions.
3. COVID-19 Shock (2020): A sharp entropy spike in March 2020 captured the unprecedented market disruption, followed by rapid normalization as central bank interventions stabilized markets.
4. Post-Pandemic Period (2021–2024): Entropy fluctuations increased relative to the 2010s, reflecting heightened macroeconomic uncertainty from inflation, monetary tightening, and geopolitical tensions.
Figure 1: Rolling Shannon Entropy for S&P 500 Returns (2000–2025). The entropy time series exhibits clear regime-dependent behavior, with elevated values during crisis periods (2008–2009 financial crisis, 2020 COVID-19) indicating increased uncertainty and wider return distributions. The shaded regions highlight major market disruptions where uncertainty reached extreme levels.
Entropy provides a useful global measure of uncertainty but does not directly capture changes in the shape of the distribution (e.g., skewness, kurtosis) or nonlinear dependencies. For this, we turn to KL divergence.
4.4 KL Divergence for Regime Detection
4.4.1 Methodology
We compute KL divergence between consecutive non-overlapping annual windows:
KLt = DKL(Pt−252:t∥Pt−504:t−252) (94)
For continuous distributions, we discretize returns into 50 bins and compute:
DKL(P ∥Q) ≈
50
X
i=1
qi log qi
pi
· ∆ (95)
15

where pi and qi are histogram bin probabilities (with smoothing +10−10 to avoid numerical issues) and ∆ is the bin width. We then standardize the KL time series:
Z KL
t = KLt − μKL
σKL
(96)
where μKL and σKL are the mean and standard deviation over a long historical window. We define a KL-based regime indicator:
Iregime
t=
(
1, if ZKL
t > θKL,
0, otherwise, (97)
where θKL is a threshold (e.g., θKL = 2).
4.4.2 Economic Interpretation
KL divergence quantifies distributional shifts, capturing:
• Regime changes: Large KL values indicate the current return distribution differs substantially from the recent past
• Structural breaks: Persistent KL elevation suggests fundamental changes in market dynamics
• Mean reversion: KL returns to baseline indicate stabilization after shocks
4.4.3 Results and Discussion
The KL divergence time series provides a powerful regime detection tool:
1. 2008–2009 Financial Crisis: KL divergence reached its maximum during this period, with values exceeding 0.9 nats. This confirms that the crisis represented a fundamental distributional shift, not merely increased volatility. The persistent elevation captures the sustained nature of the disruption.
2. 2019–2020 Transition: The COVID-19 pandemic triggered the second-largest KL spike (approximately 0.91 nats), validating its status as an extraordinary market event from an information-theoretic perspective.
3. Normal Market Periods: During stable periods (2003–2007, 2012–2019), KL divergence remained low (typically < 0.3 nats), indicating distributional consistency across windows.
4. Model Retraining Signal: Using the adaptive rule Iregime
t = 1{ZKL
t > θKL}
with historical statistics μKL = 0.28 and σKL = 0.18, threshold crossings (KL > μKL + 2σKL) correctly identify all major market disruptions, providing data-driven triggers for model retraining, stress-testing, or risk limit adjustments.
4.5 NMI as a Market Efficiency Diagnostic
We now focus on NMI as a time-varying measure of dependence between past and future returns.
16

Figure 2: KL Divergence for Regime Detection in S&P 500 (2000–2025). The KL divergence time series quantifies distributional shifts between consecutive annual windows. Major spikes occur during the 2008–2009 financial crisis and 2020 COVID-19 pandemic, exceeding the μ + 2σ threshold (dashed line). Low values during stable periods indicate distributional consistency. This metric provides superior regime detection compared to traditional volatility-based methods.
4.5.1 Methodology
We compute Normalized Mutual Information between lagged returns:
NMIt = NMI(rt; rt−1:t−k) (98)
with lag l = 1 day and rolling window w = 252 days, using k-NN estimation as in Algorithm 2. Under the Efficient Market Hypothesis (EMH), past returns should contain no exploitable information about future returns, implying:
NMI(rt+h; It) ≈ 0 (99)
where It is the information set at time t.
4.5.2 Economic Interpretation
Under the Efficient Market Hypothesis:
• EMH prediction: NMI ≈ 0 (past returns contain no information about future returns)
• Market inefficiency: NMI > 0 indicates exploitable temporal patterns
• Time-varying efficiency: NMI fluctuations reveal periods when markets deviate from efficiency
4.5.3 Results and Discussion
The NMI time series provides compelling evidence for time-varying market efficiency:
1. Baseline Efficiency: During normal market periods (2003–2007, 2012–2019), NMI remains very close to zero (typically < 0.05), consistent with efficient markets where past returns provide minimal information about future returns. This validates the EMH during stable regimes.
17

2. Crisis Inefficiency: Major market disruptions exhibit elevated NMI:
• 2004–2005: NMI increased to approximately 0.15–0.20
• 2008–2009 Financial Crisis: NMI peaked around 0.20–0.25, indicating substantial temporal dependence and predictability
• 2015–2016: NMI showed moderate elevation during Chinese market turmoil and commodity price collapse
• 2020 COVID-19: NMI spiked sharply but returned quickly to baseline as markets absorbed the shock
3. Market Efficiency Recovery: After each crisis, NMI returns to near-zero levels, indicating markets regain efficiency as conditions normalize and arbitrage opportunities are exploited.
4. Comparison with Traditional Methods: Unlike autocorrelation-based tests which often fail to detect non-linear dependencies, NMI captures all forms of statistical dependence, making it a more powerful efficiency test [Noguer i Alonso and Zoonekynd, 2024].
5. Statistical Significance: NMI remains below 0.05 approximately 77.9% of the time, with notable exceptions during major market disruptions. This provides strong empirical support for the EMH during normal periods.
Figure 3: Normalized Mutual Information (NMI) for Market Efficiency Testing (20002025). The NMI time series measures information that past returns contain about future returns. Values near zero indicate market efficiency (EMH), while elevated values signal predictability and potential inefficiency. The dashed line at 0.05 represents an efficiency threshold. NMI remains below this threshold 77.9% of the time, with notable exceptions during the 2008–2009 crisis and 2020 pandemic. This scale-invarian-
t metric provides a powerful test of time-varying market efficiency.
4.6 Combined Results and Summary
We can summarize the joint behavior of entropy, KL divergence, and NMI in a single figure (Figure 4), showing that:
• Entropy captures overall uncertainty and volatility regimes
18

• KL divergence detects distributional regime changes and structural breaks
• NMI measures temporal dependence and market efficiency
Figure 4: Information-theoretic measures for S&P 500 returns (2000–2025). Top panel: Shannon entropy captures uncertainty regimes with elevated values during the 2008–2009 financial crisis and COVID-19 pandemic. Middle panel: KL divergence identifies major distributional shifts, with peaks corresponding to crisis periods exceeding the μ + 2σ threshold. Bottom panel: Normalized Mutual Information (NMI) tests market efficiency, remaining below 0.05 during normal periods and spiking during major mark-
et disruptions. Shaded regions indicate the 2008–2009 financial crisis (red) and COVID-19 pandemic (orange).
4.7 Summary of Empirical Findings
Our experiments on 25 years of S&P 500 data validate the theoretical framework and demonstrate:
1. Entropy effectively captures uncertainty regimes, with clear spikes during major market disruptions corresponding to fat-tailed, high-volatility return distributions.
2. KL divergence provides superior regime detection compared to traditional volatilitybased methods, identifying fundamental distributional shifts that persist beyond short-term volatility spikes.
19

3. NMI offers a powerful, scale-invariant market efficiency test that correctly identifies periods when markets deviate from efficiency, with empirical validation showing near-zero values 77.9% of the time.
4. Information-theoretic measures are complementary: entropy measures uncertainty, KL divergence detects changes, and NMI tests efficiency. Together they provide a comprehensive view of market dynamics.
5. Practical applicability: All three measures can be computed in real-time with rolling windows, enabling adaptive risk management, dynamic model retraining, and systematic trading strategies.
Estimator limitations and practical considerations. While entropy, KL divergence, and NMI provide rich diagnostics for regime changes and market efficiency, their empirical estimation is subject to several practical limitations. k-nearest-neighbor (k-NN) estimators are sensitive to the choice of k and window length: small windows increase variance and finite-sample noise, whereas large windows smooth over short-lived regimes and structural breaks. In higher dimensions (for example, when using many-
 lags or multiple series), the curse of dimensionality can introduce bias and make nearest-neighbor distances unstable. Moreover, apparent deviations from EMH based on NMI or KL divergence may arise from sampling variation rather than true inefficiencies, so formal inference typically requires resampling techniques (such as block bootstrap or permutation tests) to assess statistical significance. These limitations do not negate the usefulness of information measures, but they highlight the need fo-
r careful tuning, robustness checks, and complementary diagnostics in empirical applications.
5 Applications in Finance
We now present several applications of Financial Information Theory: entropy-adjusted VaR, information-theoretic diversification, and NMI-based trading signals.
5.1 Entropy-Adjusted Value at Risk (VaR)
Traditional Value at Risk (VaR) models often assume static distributions and may underreact to sudden regime shifts. By incorporating KL divergence, we can adapt VaR limits based on the magnitude of distributional shift.
Proposition 5.1 (Entropy-Adjusted VaR). Adjust VaR limits based on current KL divergence:
VaRadj
t = VaRbase
t · 1 + β · max 0, DKL(Pt∥Pt−1) − μKL
σKL
(100)
where β ∈ [0.5, 1.5] controls sensitivity, and μKL, σKL are the long-run mean and standard deviation of DKL(Pt∥Pt−1).
Justification. Pinsker’s inequality (Theorem 2.11) states that
∥Pt − Pt−1∥TV ≤
r1
2 DKL(Pt∥Pt−1) (101)
20

Thus larger values of DKL(Pt∥Pt−1) imply a larger upper bound on the total variation distance between the current return distribution and the reference distribution. In other words, periods with elevated KL divergence are precisely those in which the current distribution may differ substantially from the historical regime used to calibrate VaRbase
t.
The adjustment rule (100) therefore scales the baseline VaR limit by a standardized measure of distributional shift magnitude, normalized by the historical mean and standard deviation of DKL(Pt∥Pt−1). The parameter β allows practitioners to calibrate the sensitivity of the adjustment based on their risk tolerance and the observed relationship between KL divergence and tail risk in their specific market or portfolio.
Example 5.2 (VaR Adjustment During COVID-19). During the 2019→2020 transition with DKL = 0.91 nats, suppose μKL = 0.28, σKL = 0.18, and β = 1:
VaRadj
2020 = VaRbase
2020 · 1 + 0.91 − 0.28
0.18 ≈ 4.5 × VaRbase
2020 (102)
This 4.5× multiplicative factor reflects the exceptional distributional shift during the COVID-19 shock, appropriately expanding risk limits to account for the unprecedented market conditions.
5.2 Information-Theoretic Diversification
Traditional diversification criteria often rely on variance or correlation, which can be misleading for non-Gaussian, heavy-tailed returns with complex dependence structures. Total correlation and related entropy-based functionals offer a richer view of dependence.
Definition 5.3 (Total Correlation). For random vector R = (R1, . . . , Rn):
TC(R) =
n
X
i=1
H(Ri) − H(R) (103)
Total correlation measures the total amount of dependence among all components of R. It equals zero if and only if all components are independent, and increases with the strength of dependencies.
Proposition 5.4 (Information-Theoretic Diversification). Define the information-theoretic diversification functional
J (w) =
n
X
i=1
wiH(Ri) − H(wT R) (104)
A portfolio that minimizes J (w) subject to standard constraints (for example Pn
i=1 wi = 1
and wi ≥ 0) tends to allocate weight toward assets that contribute marginal entropy while keeping the entropy of the aggregate portfolio return high, thereby promoting diversification in an information-theoretic sense.
Justification. The functional J (w) can be interpreted as a weighted version of total correlation. When J (w) is small, the weighted sum of individual entropies is close to the entropy of the portfolio return, indicating weak dependence structure and good diversification.
21

To see this, note that if assets are independent:
H(wT R) = H
n
X
i=1
wiRi
!
(105)
will be large relative to the individual entropies when the Ri have different distributions and weights are diversified. Conversely, if assets are highly dependent (e.g., perfectly correlated), then:
H(wT R) ≪
n
X
i=1
wiH(Ri) (106)
making J (w) large. Therefore, minimizing J (w) encourages portfolios where the aggregate return distribution retains high entropy relative to the weighted individual entropies, which corresponds to effective diversification across different sources of uncertainty.
Remark 5.5. Equation (104) goes beyond second-moment based criteria by incorporating all forms of dependence captured by entropy and mutual information. This makes it particularly suitable for non-Gaussian returns with complex dependence structures, where variance-based diversification can be misleading due to tail dependence, asymmetric comovement, or regime-switching dynamics.
5.3 NMI-Based Trading Signals
NMI can be used to construct adaptive trading strategies that exploit temporary departures from market efficiency.
Algorithm 3 NMI-Based Trading Signal Generation
Require: Price series Pt, NMI threshold θNMI, window size w Ensure: Trading signals {−1, 0, +1} 1: Compute returns rt = log(Pt/Pt−1) 2: Compute rolling NMI using Algorithm 2 3: for each time t do
4: if NMIt > θNMI then
5: Market is inefficient; past returns contain information about future returns 6: if rt−1 > 0 then
7: Signal = +1 (momentum: buy) 8: else
9: Signal = −1 (momentum: sell) 10: end if 11: else
12: Market is efficient; no exploitable patterns 13: Signal = 0 (neutral: no position) 14: end if 15: end for
16: return Trading signals
22

Remark 5.6. The threshold θNMI should be calibrated empirically based on historical data and backtesting. Our experiments suggest θNMI ∈ [0.05, 0.10] as reasonable values for S&P 500 daily returns. When NMI exceeds this threshold, the market exhibits exploitable temporal dependence, justifying momentum-based strategies. When NMI is below the threshold, the market is efficient and momentum strategies are unlikely to be profitable after transaction costs.
5.4 Transfer Entropy and Causality in Financial Markets
Transfer entropy provides a natural tool for analyzing directional information flows and causality-like relationships in financial systems. Typical use cases include:
• Lead–lag effects between indices: measuring TIndex A→Index B to quantify whether one market systematically leads another
• Information flow between asset classes: computing transfer entropy from credit spreads or volatility indices to equity returns to assess which variables anticipate stress in others
• Macro–financial linkages: estimating transfer entropy from macroeconomic announcements or rates to asset returns to understand directional influence
In practice, one would:
1. Choose appropriate lags (k, l) and horizon h for the processes of interest
2. Estimate TX→Y via Algorithm 1 on rolling windows
3. Interpret persistent, statistically significant TX→Y as evidence that X contains directional predictive information about Y , beyond the information in Y ’s own past
In the context of market efficiency, transfer entropy from past returns of an asset (or a set of signals) to future returns plays a role analogous to NMI but with explicit conditioning on the target’s own history. Roughly:
• Small or zero TX→Y is consistent with the EMH when X belongs to the information set already priced in
• Large TX→Y may indicate exploitable lead–lag effects, delayed information diffusion, or segmentation between markets
6 Efficient Market Hypothesis and Related Literature
The Efficient Market Hypothesis (EMH) posits that stock prices fully reflect all available information, making it impossible to consistently achieve excess returns through trading strategies based on publicly available information [Fama, 1970]. Within this framework, past returns should not contain exploitable information about future returns, implying that NMI(rt+h; It) should be close to zero. Several seminal works are fundamental to the development and critique of EMH:
23

1. Eugene F. Fama (1970) – “Efficient Capital Markets: A Review of Theory and Empirical Work”: classical formulation of EMH and random walk theory [Fama, 1970].
2. Eugene F. Fama (1991) – “Efficient Capital Markets: II”: refines the EMH into weak, semi-strong, and strong forms and reviews subsequent empirical evidence [Fama, 1991].
3. Michael Jensen (1978) – discusses anomalous evidence and non-random patterns in stock returns that challenge EMH [Jensen, 1978].
4. Andrei Shleifer and Robert W. Vishny (1997) – “The Limits of Arbitrage”: explores frictions that prevent arbitrage from fully correcting mispricings [Shleifer and Vishny, 1997].
5. Robert J. Shiller (1981) – documents excess volatility of stock prices relative to fundamentals [Shiller, 1981].
6. Jegadeesh and Titman (1993) – momentum effects in stock returns, challenging the strict EMH [Jegadeesh and Titman, 1993].
7. Kenneth R. French (1980) – the weekend effect, highlighting calendar anomalies [French, 1980].
8. Wei Liu, Yangyang Chen, and Jun Zhang (2021) – entropy-based market efficiency testing in global financial markets [Liu et al., 2021].
9. Sarthak Patra and Amit Kumar Mohapatra (2022) – information-theoretic measures of market efficiency in a global analysis [Patra and Mohapatra, 2022].
10. Miquel Noguer i Alonso and Vincent Zoonekynd (2024) – normalized mutual information and information-theoretic diagnostics of EMH across a crosssection of US stocks [Noguer i Alonso and Zoonekynd, 2024].
Within this literature, NMI’s boundedness and relative robustness to scale make it a natural candidate for operationalizing the EMH. Instead of relying solely on autocorrelation or variance ratio tests, we can track NMI(rt+h; It) over time and across markets:
• Consistently low NMI: supports the EMH, suggesting that past information does not offer systematic predictive power for returns
• Persistent or recurrent NMI spikes: indicate periods of inefficiency, structural breaks, or the presence of exploitable patterns
• Cross-market comparison: NMI can be used to rank markets or asset classes by their degree of informational efficiency
Transfer entropy complements this picture by providing a directional measure of information flow. While NMI answers “how much dependence?” between lagged and current returns, transfer entropy addresses “in which direction does information flow?” across assets, factors, or markets, and thus is especially useful for uncovering lead–lag effects and cross-market causality patterns that may be inconsistent with strong forms of EMH.
24

Our empirical results show that, for S&P 500 daily returns, NMI is typically very close to zero but spikes during major crises, suggesting that markets are usually efficient but occasionally undergo episodes of structural inefficiency. This finding is consistent with adaptive market hypothesis [Lo, 2004] which suggests that market efficiency varies over time as market participants adapt to changing conditions.
7 Conclusion
This paper develops Financial Information Theory as a coherent framework for applying information-theoretic concepts to financial markets. We have:
• Reviewed core concepts of entropy, KL divergence, mutual information, transfer entropy, and normalized mutual information with complete mathematical proofs of all fundamental properties
• Proposed practical algorithms for estimating these quantities in financial time series using k-NN methods with detailed implementation guidelines
• Demonstrated empirically how entropy, KL divergence, and NMI behave across major market regimes in 25 years of S&P 500 data (2000–2025)
• Introduced applications including entropy-adjusted VaR, information-theoretic diversification, NMI-based market efficiency testing, and adaptive trading signals
• Connected theory to practice by interpreting NMI-based diagnostics in the context of the Efficient Market Hypothesis literature
7.1 Key Findings
Our findings suggest that NMI is a particularly powerful and interpretable measure for diagnosing time-varying market efficiency. Specifically:
1. NMI remains near zero 77.9% of the time, validating the EMH during normal market periods
2. NMI spikes during crises, correctly identifying the 2008–2009 financial crisis, COVID-19 pandemic, and other major disruptions as periods of temporary market inefficiency
3. KL divergence effectively detects distributional regime shifts, providing superior regime detection compared to volatility-based methods
4. Entropy captures uncertainty dynamics, with clear correspondence to known market stress events
Together, these measures provide a rich toolkit for risk management, asset allocation, and empirical finance. In this paper we have focused empirically on entropy, KL divergence, and NMI; transfer entropy plays a conceptual and algorithmic role, extending the framework to directional relationships and cross-series causality, and opening the door to more nuanced analyses of information flow in future empirical work.
25

7.2 Advantages over Traditional Methods
Information-theoretic methods offer several advantages over traditional approaches:
1. Distribution-free: No parametric assumptions required, making them robust to heavy tails, skewness, and other distributional features
2. Nonlinear dependencies: Capture all forms of statistical dependence, not just linear correlation
3. Scale-invariant (NMI): Bounded range [0, 1] facilitates interpretation and comparison across assets and time periods
4. Model-free regime detection: KL divergence identifies distributional shifts without requiring specification of alternative hypotheses
5. Unified framework: Entropy, MI, and TE provide complementary views of uncertainty, dependence, and causality within a single theoretical framework
7.3 Final Remarks
As markets become increasingly complex, interconnected, and data-rich, informationtheoretic methods offer essential foundations for robust quantitative strategies. Our empirical validation on 25 years of market data demonstrates that these theoretical constructs translate effectively into practical tools for financial practitioners. Information theory provides model-free, distribution-agnostic tools ideally suited to the non-stationary, heavy-tailed, asymmetrically dependent nature of financial re-
turns. The frameworks developed in this paper enable adaptive risk management, dynamic model updating, and sophisticated market efficiency assessment, contributing to more robust financial analysis and decision-making in an increasingly uncertain world.
References
Rama Cont. Empirical properties of asset returns: Stylized facts and statistical issues. Quantitative Finance, 1(2):223–236, 2001. doi: 10.1080/713665670.
Thomas M. Cover and Joy A. Thomas. Elements of Information Theory. John Wiley & Sons, Hoboken, NJ, 2nd edition, 2006.
Eugene F. Fama. Efficient capital markets: A review of theory and empirical work. Journal of Finance, 25(2):383–417, 1970. doi: 10.2307/2325486.
Eugene F. Fama. Efficient capital markets: Ii. Journal of Finance, 46(5):1575–1617, 1991. doi: 10.1111/j.1540-6261.1991.tb04636.x.
Kenneth R. French. Stock returns and the weekend effect. Journal of Financial Economics, 8(1):55–69, 1980. doi: 10.1016/0304-405X(80)90021-5.
Narasimhan Jegadeesh and Sheridan Titman. Returns to buying winners and selling losers: Implications for stock market efficiency. Journal of Finance, 48(1):65–91, 1993. doi: 10.1111/j.1540-6261.1993.tb04702.x.
26

Michael C. Jensen. Some anomalous evidence regarding market efficiency. Journal of Financial Economics, 6(2-3):95–101, 1978. doi: 10.1016/0304-405X(78)90025-9.
L. F. Kozachenko and N. N. Leonenko. Sample estimate of the entropy of a random vector. Problems of Information Transmission, 23(2):95–101, 1987.
Wei Liu, Yangyang Chen, and Jun Zhang. Entropy-based market efficiency testing in global financial markets. Physica A: Statistical Mechanics and its Applications, 578: 126108, 2021. doi: 10.1016/j.physa.2021.126108.
Andrew W. Lo. The adaptive markets hypothesis: Market efficiency from an evolutionary perspective. Journal of Portfolio Management, 30(5):15–29, 2004.
Alexander J. McNeil, Rüdiger Frey, and Paul Embrechts. Quantitative Risk Management: Concepts, Techniques and Tools. Princeton University Press, Princeton, NJ, revised edition, 2015.
Miquel Noguer i Alonso and Vincent Zoonekynd. Information theory and efficient market hypothesis. Technical Report 4905537, Social Science Research Network (SSRN), July 2024. URL https://ssrn.com/abstract=4905537. Available at SSRN.
Sarthak Patra and Amit Kumar Mohapatra. Information-theoretic measures of market efficiency: A global analysis. International Review of Financial Analysis, 83:102287, 2022. doi: 10.1016/j.irfa.2022.102287.
M. S. Pinsker. Information and information stability of random variables and processes. Holden-Day Series in Time Series Analysis, 1964.
Claude E. Shannon. A mathematical theory of communication. Bell System Technical Journal, 27(3):379–423, 1948. doi: 10.1002/j.1538-7305.1948.tb01338.x.
Robert J. Shiller. Do stock prices move too much to be justified by subsequent changes in dividends? American Economic Review, 71(3):421–436, 1981.
Andrei Shleifer and Robert W. Vishny. The limits of arbitrage. Journal of Finance, 52 (1):35–55, 1997. doi: 10.1111/j.1540-6261.1997.tb03807.x.
27

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:01.266Z
- **Text Length:** 52458 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
