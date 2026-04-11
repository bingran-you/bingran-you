# PDF Document: Lan and Reiter - 2025 - Differentially Private Computation of the Gini Index for Income Inequality.pdf

**File Path:** Lan and Reiter - 2025 - Differentially Private Computation of the Gini Index for Income Inequality.pdf

**Processed Date:** 2026-02-10T18:18:48.539Z

**File Size:** 657.84 KB

**Total Pages:** 43

**Extracted Pages:** 43

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3455

**Title:** Differentially Private Computation of the Gini Index for Income Inequality

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Differentially Private Computation of the
Gini Index for Income Inequality
Wenjie Lan
Department of Statistical Science, Duke University
and
Jerome P. Reiter
Department of Statistical Science, Duke University
November 26, 2025
Abstract
The Gini index is a widely reported measure of income inequality. In some settings, the underlying data used to compute the Gini index are confidential. The organization charged with reporting the Gini index may be concerned that its release could leak information about the underlying data. We present an approach for bounding this information leakage by releasing a differentially private version of the Gini index. In doing so, we analyze how adding, deleting, or altering a single observation in an-
y specific dataset can affect the computation of the Gini index; this is known as the local sensitivity. We then derive a smooth upper bound on the local sensitivity. Using this bound, we define a mechanism that adds noise to the Gini index, thereby satisfying differential privacy. Using simulated and genuine income data, we show that the mechanism can reduce the errors from noise injection substantially relative to differentially private algorithms that rely on the global sensitivity, that is, th-
e maximum of the local sensitivities over all possible datasets. We characterize settings where using smooth sensitivity can provide highly accurate estimates, as well as settings where the noise variance is simply too large to provide reliably useful results. We also present a Bayesian post-processing step that provides interval estimates about the value of the Gini index computed with the confidential data.
Keywords: confidentiality; perturbation; privacy; smooth sensitivity.
1
arXiv:2511.19771v1 [stat.ME] 24 Nov 2025

1 Introduction
The Gini index is a widely used statistic for quantifying inequality of monetary variables,
such as income and wealth, within some defined group, such as a state or country (Roth
schild & Stiglitz 1973). Its value ranges from zero to one, with zero representing perfect
equality, e.g., everyone has the same income, and one representing perfect inequality, e.g.,
all the income is concentrated in one individual. To give a sense of values seen in practice,
according to the World Bank, a recently computed Gini index for the United States is
0.418, which sits squarely in the middle of the distribution of other countries’ Gini index
values. Two countries near the extremes include India at 0.255 and South Africa at 0.630
(https://data.worldbank.org/indicator/SI.POV.GINI).
Often, the incomes used to compute the Gini index derive from data collected by a sta
tistical organization, such as a government agency or the World Bank. The organization
may be ethically or legally obligated to protect data subjects’ confidentiality. This require
ment motivates the central question of this article: how can statistical organizations release
values of the Gini index that provide provable guarantees of confidentiality protection?
To release other types of statistics, many organizations are turning to differential privacy
to provide such guarantees (Dwork et al. 2006, Dwork 2006, Dwork & Roth 2014). For
example, the Census Bureau released differentially private counts from the 2020 decennial
census (Abowd et al. 2022). The Internal Revenue Service and Department of Education
use differentially private algorithms in the College Scorecard to protect statistics related
to educational and financial outcomes for students (Tumult Labs 2025). The Opportunity
Insights project at Harvard University adds noise to statistics related to social mobility
using an algorithm inspired by differential privacy (Chetty & Friedman 2019). To the best
of our knowledge, however, researchers have not developed a differentially private algorithm
for releasing the Gini index.
In this article, we develop such an algorithm. To do so, we determine how much the
Gini index can change when altering any one income in the data; this is known as the local
sensitivity in the differential privacy literature (Dwork & Roth 2014). We derive a smooth
upper bound on the local sensitivity, which we use to develop the differentially private
algorithm. Using theory and empirical investigations, we characterize conditions on the
2

data and privacy demands under which the algorithm is likely to provide accurate results,
and under which it is not. We use Bayesian inference to provide an interval estimate for the
Gini index, accounting for the uncertainty introduced by the differentially private noise.
The remainder of this article is organized as follows. In Section 2, we review the Gini
index, differential privacy, and smooth sensitivity (Nissim et al. 2007). In Section 3, we
present our algorithms. In Section 4, we provide theoretical support for these algorithms. In
Section 5, we present empirical investigations of the properties of the differentially private
Gini index. Finally, in Section 6, we conclude with ideas for future research.
2 Background
For i = 1, . . . , n, let zi be the income (or other numerical variable) for individual i. Let
Z = (z1, . . . , zn). We presume Z has no missing values. For convenience, we define an
ordered version of Z as X = (x1, . . . , xn), so that x1 is the smallest value in Z, x2 is the
second smallest value in Z, and so on until xn is the largest value in Z. We refer to the
position of each xi as its rank in X, e.g., xi has rank i.
2.1 Gini Index
Given a set of data Z, the Gini index g(Z) can be computed as
g(Z) =
Pn i=1
Pn
j=1 |zi − zj|
2n2z ̄ . (1)
There are various ways to rewrite (1). We use a representation based on the ordered data
X. As shown by Rothschild & Stiglitz (1973),
g(Z) = g(X) =
Pn
i=1(2i − n − 1)xi
nx ̄(n − 1) . (2)
Several authors have explored how shifting income from one person in Z to another
person in Z affects g(Z); see Gastwirth (2017) for a summary of this work. These authors
do not consider the local sensitivity of g(Z), that is, the effects on g(Z) of adding, deleting,
or changing a single observation, which are useful quantities for differential privacy.
Several researchers have noted that top-coding, which is a commonly used disclosure
protection method for income data, can result in underestimation of the Gini index (Armour
3

et al. 2016, Gould et al. 2022, Sun et al. 2025). With top-coding, any income value above a
selected threshold T is blanked and replaced with the mean of the income values exceeding
T , or with just T itself. However, it is difficult to quantify how much privacy top-coding
leaks about the underlying incomes, especially when other data products are released that
involve income distributions, possibly without the use of top-coding.
2.2 Differential Privacy
Differential privacy (DP) is a mathematical definition of privacy protection. Let M be a
randomized algorithm that takes as input any database D and returns an output R. Here,
we consider databases that are vectors of n real numbers like incomes. Define neighboring
databases D and D1 so that they differ on only one element. To develop the DP Gini index,
we work with two types of neighboring databases. The first case is when D and D1 have
n elements in common but D1 has one more or one fewer observation than D. The second
case is when D1 is constructed by changing one element in D to some other value, so that
both D and D1 have n elements.
We say that M satisfies (ε, δ)-differential privacy if, for every pair of neighboring
databases (D, D1) and for every measurable subset of outputs R,
Pr M(D) ∈ R ≤ eε Pr M(D1) ∈ R + δ. (3)
In this article, we work mainly with so-called exact or pure DP, in which δ = 0.
Heuristically, when M satisfies pure DP, for any dataset D, the probability that the
algorithm produces any particular set of outcomes is similar regardless of whether or not
any one individual’s data are present in D. We emphasize that the definition applies
over all possible instantiations of D, not just the observed data at hand. The degree of
similarity is controlled by the parameter ε, whereby smaller values of ε generally result in
greater privacy protection. However, smaller values of ε also generally result in randomized
algorithms that introduce more noise into the outputs. Ideally, the value of ε is selected to
achieve a satisfactory balance in accuracy and disclosure risks (Abowd & Schmutte 2016,
Reiter 2019). For a summary discussion of setting ε, see Kazan & Reiter (2024).
For many DP algorithms, a key quantity is the global sensitivity of the statistic. For all
neighboring databases D and D1 that differ in one element, which we write as d(D, D1) = 1,
4

and some function, f : D → R, we define the global sensitivity of the function as
GSf = max
D,D1: d(D,D1)=1
|f (D) − f (D1)|. (4)
For example, when f is the sample mean of a set of n elements each lying in [0, 1], and
defining neighboring databases as having sample size n, the GSf = 1/n.
When D = (z1, . . . , zn) comprises numerical values, many DP algorithms impose upper
and lower bounds to ensure GSf < ∞ (Kamath et al. 2025). That is, they presume L ≤
zi ≤ U for all possible values of zi, clipping any values outside this range to the boundary
points. In some contexts, the bounds may be derived from domain knowledge. As examples,
test scores may lie between 0 and 100; health measurements like blood pressures may be
bounded by plausible values; and, monetary values in surveys may be bounded by the
format of the questionnaire, e.g., the American Community Survey provides enough boxes
to enter five digits for annual property taxes. To preserve the DP guarantee, these bounds
should be selected without using the observed data at hand. When domain knowledge does
not define (L, U ), one can allocate some (small) portion of the privacy budget to privately
learn noisy bounds on the observed data. For example, one can obtain a differentially
private estimate of the maximum of D using the algorithm in Durfee (2023). We illustrate
this approach in Section 3 to set U for incomes, setting L = 0.
The GSf can be used to define randomized algorithms that satisfy DP. A commonly
used algorithm is the Laplace mechanism, in which one adds to f (D) a random draw
sampled from a Laplace distribution with mean zero and scale parameter GSf /ε, resulting
in g ̃(D). Unfortunately, the Laplace mechanism cannot be used directly to construct a
differentially private version of g(Z) with low error for reasonable privacy guarantees. This
is because the global sensitivity of the Gini index GSg(Z) = 1. To see this, consider the
extreme case where a single individual holds all the income. Removing that individual or
changing them to have zero income reduces g(Z) from 1 to 0. Unless ε is very large, adding
Laplace noise scaled to this global sensitivity obliterates the usefulness of g ̃(Z).
.
5

2.3 Smooth Sensitivity
The global sensitivity of the Gini index derives from extreme cases that, for all practical
purposes, are fictions. For example, the Gini index for most countries lies between 0.2
and 0.7 (Charles et al. 2022). This situation, i.e., the GSf is made impractically large to
accommodate unrealistic instances of neighboring databases, is not uncommon in DP. One
approach to circumvent this issue is to work with a smooth bound on the local sensitivity.
We use this strategy to construct the DP Gini index, as described in Section 3.
For any function f : D → R and a fixed database D, the local sensitivity is defined as
LSf (D) = max
D1: d(D,D1)=1
|f (D) − f (D1)|. (5)
The local sensitivity measures how much f (D) changes when removing, adding, or changing
one observation in the specific D, leaving all other values fixed. In contrast, the global
sensitivity considers this change over all possible realizations of D. Thus, GSf is the
supremum of LSf (D) over D. Often, LSf (D) is much smaller than GSf .
It is tempting to construct a Laplace mechanism using LSf (D) in place of GSf in the
scale parameter. However, in DP one presumes that the parameters of the noise distribution
are public. Knowledge of LSf (D) could introduce disclosure risks, as adversaries may be
able to use LSf (D) to learn about the values in D. For example, if LSf (D) is large and
f is the sample mean, the adversary learns that D includes an outlier and, further, may
be able to use LSf (D) to approximate plausible values of that outlier. As this example
suggests, using a Laplace mechanism based on LSf (D) does not satisfy DP.
To avoid the risks from releasing LSf (D) yet still satisfy DP, Nissim et al. (2007)
introduce smooth sensitivity, a framework that allows one to release f (D) with instance
based additive noise, i.e., based on the D at hand. Following their notation, we first define
a smooth upper bound on LSf (D) in Definition 2.1.
Definition 2.1 (Smooth upper bound on LSf (D)). For β > 0, a function S(D) is a
β-smooth upper bound on LSf (D) if it satisfies the following conditions.
1. For all D of size n, S(D) ≥ LSf (D).
2. For every pair of neighboring datasets (D, D1) such that d(D, D1) = 1, S(D) ≤
eβ S (D1 ).
6

Given a smooth upper bound on the local sensitivity, we follow Nissim et al. (2007) and
define the smooth sensitivity in Definition 2.2.
Definition 2.2 (β-smooth sensitivity). For β > 0 and any two databases D and D′ of size
n differing in d(D, D′) elements, the β-smooth sensitivity of f is
Sf,β(D) = mDa′x(LSf (D′)e−βd(D,D′)). (6)
Nissim et al. (2007) provide a general strategy to compute the smooth sensitivity. Let
D′ be some other dataset of size n such that d(D, D′) = k. Any such D′ has its own
local sensitivity LSf (D′). For k = 0, . . . , n, define A(k)(D) as the maximum of these local
sensitivities over all D′, that is,
A(k)(D) = max
D′:d(D,D′)≤k
LSf (D′). (7)
Nissim et al. (2007) show that the β-smooth sensitivity from Definition 2.2 is
Sf,β(D) = max
k=0,1,...,n e−βkA(k)(D). (8)
Smooth sensitivity enables a variety of differentially private algorithms. We consider
algorithms M(D) of the form,
f ̃(D) = f (D) + Sf,β(D)
α ψ, (9)
where α is a constant and ψ is a random draw from a noise distribution, both chosen
to allow (ε, δ)-DP to hold. In particular, Nissim et al. (2007) show that one can achieve
(ε, 0)-DP by drawing ψ from the density,
p(ψ) ∝ 1
1 + |ψ|γ (10)
where γ > 1 and α = ε/(4γ), β = ε/γ. We use (10) in the DP Gini index algorithm.
Nissim et al. (2007) also show that one can use a Laplace mechanism with smooth
sensitivity and satisfy (ε, δ)-DP. As noted previously, we focus on pure DP, although one
could use (ε, δ)-DP as well. We leave comparisons of the relative accuracy and disclosure
risks for the different privacy criteria to future work.
7

3 Algorithms
In this section, we present and illustrate the algorithm for using smooth sensitivity to
release the Gini index under pure DP. Supporting derivations and proofs are presented in
Section 4. Throughout, we work with the ordered version of the data X, presuming that
we have bounds L and U so that L ≤ xi ≤ U for i = 1, . . . , n.
The DP Gini index algorithm is comprised of three main parts. Algorithm 1 computes
the minimum value of g(X) that can result after changing k elements in X. Algorithm 2
computes the maximum value of g(X) that can result after changing k elements. Combined,
the results of these two algorithms can be used to compute A(k)(X) for any k. Algorithm 3
integrates all the algorithms to compute a smooth upper bound for use in smooth sensitivity.
We illustrate how the algorithms work using a toy dataset with n = 4 individuals,
X = (x1, x2, x3, x4) = (3, 6, 7, 7.5), where L = 0 and U = 10. Here, g(X) ≈ 0.206. Further,
we suppose that possible values of the underlying data are measured to the hundredths
decimal place, so that each xi could have taken any of 1000 possible values.
To find the smooth sensitivity, we need to find A(k)(X) for k = 1 and k = 2. We note
that when replacing k = 3 or k = 4 points, A(k)(X) = 1 For k = 1, without using our
algorithm, a brute force approach for finding A(1)(X) is to compute the local sensitivity
over all possible neighboring datasets with one element changed. This requires up to
(4 × 1000)2 computations, since we construct each neighboring dataset by replacing one
of the four values of xi with one of the 1000 values in [0, 10], and then evaluate the local
sensitivity of this dataset which requires computing the Gini index for each of its 4000
possible neighboring datasets. Following this approach for k = 2, we would consider up to
(6 × 10002)(4000) combinations to find A(2)(X), where six is the number of ways to pick
two records out of four. As these computations suggest, this brute force approach becomes
intractable for any reasonable sample size n.
With our algorithms, for k = 1, . . . , n, we find the maximum and minimum possible
values of the Gini index that could be attained by changing any k elements in X. For each
k, we use these values to obtain a bound on LSg(X′) for all datasets X′ where d(X, X′) = k.
With these bounds, we can compute an expression that provides A(k)(X) for each k.
To illustrate how our algorithms greatly reduce computations, we walk through how they
8

find the maximum and minimum values of the Gini index in our example with n = 4 values.
We first use Algorithm 1 to find the minimum value of g(X′) when X′ changes one value in
X, i.e., k = 1. For i = 1, . . . , n, let X−i = X −xi and X′
i(x) = X−i ∪x where L ≤ x ≤ U . In
Section 4, we prove that this minimum value for k = 1 is achieved when X−i includes only
consecutive values, i.e., (x1, . . . , xn−1) or (x2, . . . , xn). Further, we show that, when k = 1,
the Gini index is minimized when setting x equal to one of the points in X−i. Thus, we
can find the minimum Gini index with an efficient search. For our example with n = 4, the
algorithm examines all values of x ∈ X−i for X′
1(7) = (x, 6, 7, 7.5) and X′
4(x) = (3, 6, 7, x).
After the search, we find that X′
1(7) results in the smallest g(X′
1(7)) ≈ 0.054. The smallest
values associated with the other three X−i include g(X′
4(6)) ≈ 0.182, g(X′
2(7)) ≈ 0.184,
and g(X′
3(6)) = 0.200, all of which are larger than g(X′
1(7)).
The algorithm next finds the minimum Gini index value when replacing k = 2 elements
in X. Let X−ij = X − {xi, xj} and X′
ij(x, y) = X−ij ∪ {x, y} where L ≤ x, y ≤ U . As shown
in Section 4, to minimize the Gini index we should replace k consecutive elements with
(x, y) equal to the largest value in X−ij. Intuitively, in the expression for the Gini index,
setting (x, y) to the largest value in X−ij makes the pairwise differences in the numerator
as small as possible while making the sample mean in the denominator as large as possible
(for that X−ij). Algorithm 1 searches over all possible {X−ij(x, y) : i < n, j = i + 1} for the
set that yields the smallest value of g(X′
−ij(x, y)). In our example with n = 4 observations,
for k = 2, the minimum Gini index value is attained for X′
−12(7.5, 7.5) = (7, 7.5, 7.5, 7.5),
which yields g(X′
12(7.5, 7.5)) ≈ 0.017. The smallest values of the Gini index for other
sequences of consecutive i, j include g(X′
23(7.5, 7.5)) ≈ 0.176 and g(X′
34(6, 6)) ≈ 0.143.
Algorithm 2 next finds the maximum value of the Gini index for each k. For any k, the
search for the maximum values is accomplished by replacing k consecutive xi with values
at one or the other extreme, i.e., with L or U . In our example with [L, U ] = [0, 10], when
k = 1 we search for the maximum value of the Gini index over X′
−i(0) and X′
−i(10) for
i = 1, . . . , 4. The search results in selecting X′
−3(0) = (3, 6, 0, 7.5), with g(X′
−3(0)) ≈ 0.515.
For k = 2, the search for the maximum Gini index selects X′
−23(0, 0) = (3, 0, 0, 7.5), with
g(X ′
−23(0, 0)) ≈ 0.809. For k = 3, the maximum value of the Gini index is attained by
setting any three values to zero, which attains the maximum Gini index of 1.
9

We note that Algorithm 1 and Algorithm 2 follow similar logic for larger n and k, each
searching over sets with consecutive values. Finally, Algorithm 3 takes the resulting maxima
and minima as inputs to an equation that provides the bounds for smooth sensitivity.
Although not essential, given the released DP Gini index g ̃ = g ̃(X) and the public
DP mechanism used to construct it, analysts can use a post-processing step to obtain an
interval estimate for g(X) that accounts for the noise introduced by DP. Let g represent
the analyst’s random variable for the value of g(X). We assume the analyst has some prior
distribution p(g) for g(X). For example, in the empirical illustrations in Section 5, we
presume g ∼ Uniform(0, 1). Let p(g ̃|g) be the density of the DP Gini index conditional on
confidential Gini index as determined from the specific DP mechanism, e.g., as in (10). We
compute the posterior density,
p(g | g ̃) ∝ p(g ̃|g) × p(g). (11)
In Section 5, we sample from (11) using self-normalized importance resampling with a
Uniform(0, 1) proposal and weights proportional to p(g ̃ | g). Other strategies could be used
as well, for example, a simple grid sampler.
In addition to characterizing uncertainty about g(X), the Bayesian post-processing step
in (11) restricts the support of inferences to the feasible region of the Gini index, [0, 1].
Thus, if g ̃(X) is randomly drawn to lie outside [0, 1], as is theoretically possible under
DP mechanisms with unbounded support, the Bayesian post-processing step ensures that
inferences about g(X) are based on feasible values. We note that this post-processing step
does not use any additional privacy budget.
Finally, when the sample size n is large and the privacy budget ε is small, the algorithms
can be computationally expensive. This may not be problematic when releasing a single
Gini index. Nonetheless, in Section 4, we show how to relax the smooth upper bound in
Algorithm 3 to reduce runtime while maintaining the DP guarantees.
10

Algorithm 1: FastMinG(X, k): Find the minimum value of the Gini index when
replacing k elements in X
Input: Sorted incomes x1 ≤ · · · ≤ xn; number of elements to replace k (1 ≤ k < n)
Output: min g(k): minimum value of Gini index when replacing k elements
/* 1. prefix tables */
P0 ← 0, C0 ← 0, W0 ← 0;
for i ← 1 to n do
wi ← 2i − n − 1;
Pi ← Pi−1 + xi; Wi ← Wi−1 + wi; ; // Pi = P
t≤i xt
Ri ← Ri−1 + i xi ; // Ri = P
t≤i t xt
gmin ← ∞;
/* 2. slide window */
for i ← 0 to k do
L ← i + 1; R ← n − k + i ; // i lows, k − i highs
j = Findminindex(L, R);
SA ← Pj−1 − PL−1; StA ← (Rj−1 − RL−1) − (L − 1) SA ; // SA = Pj−1
t=L xt;
StA = Pj−1
t=L(t − L + 1)xt
SB ← PR − Pj−1; StB ← (RR − Rj−1) − (j − 1) SB ; // SB = PR
t=j xt;
StB = PR
t=j(t − j + 1 + a + k) xt
N = [2StA − (n + 1)SA] + kxj(2(j − L) + k − n) + [2StB + 2(j − L + k) − n − 1)SN ];
D = SA + kxj + SB;
gmin ← min(gmin, N/(nD) return gmin
function Findminindex(lo, hi):
while hi − lo > 3 do
t ← ⌊(hi − lo)/3⌋ ; // Ternary search on [lo, hi]
m1 ← lo + t; m2 ← hi − t;
If g(m1) < g(m2) then hi ← m2 − 1 else lo ← m1 + 1
return arg minj∈[lo,hi] g(j)
11

Algorithm 2: FastMaxG(x, k, L, U ): Find the maximum value of the Gini index
when replacing k elements in X Input: Sorted incomes x1 ≤ · · · ≤ xn; bounds L, U ; number of elements to replace
k (1 ≤ k < n)
Output: max g(k): maximum value of Gini index when replacing k elements
/* 1. prefix tables */
P0 ← 0, C0 ← 0, W0 ← 0 gmax ← −∞;
for i ← 1 to n do
wi ← 2i − n − 1;
Pi ← Pi−1 + xi; ; // Pi = P
t≤i xt
Ci ← Ci−1 + wi xi ; // Ci = P
t≤i wtxt
/* 2. slide window */
for s ← 1 to n − k do
SL ← Ps; SR ← Pn − Ps+k ; // SL = Ps
t=1 xt; SR = Pn
t=s+k+1 xt
for i ← 0 to k ; // i lows, k− i highs
do
nL ← i; nU ← k − i;
D ← SL + SR + nLL + nU U ;
N ← L nL (nL − n) + Cs + 2nLSL + (Cn − Cs+k) − 2nU SR + U nU (n − nU );
gmax ← max gmax, N/(nD) ;
return gmax;
12

Algorithm 3: Smooth sensitivity of the Gini index under (ε, 0)–DP
Input: Sorted incomes x1 ≤ · · · ≤ xn referred to as X; bounds L, U ; number of
elements to replace k (1 ≤ k < n); privacy parameters ε, γ
Output: Su — smooth sensitivity
β ← ε/(2(γ + 1));
g0 ← Gini(X); // calculate Gini index g(X)
μ0 ← Mean(X); // calculate Pn
i=1 xi/n
ls0 ← LocalSensBounds(X, L, U ); // as shown in Equation 23
kmax ← min n, ⌈− ln(ls0)/β⌉ ;
Su ← 0;
for k ← 0 to kmax ; // For each iterate, change k elements
do
min g(k) ← FastMinG(X, k) ; // calculate minimal Gini
max g(k) ← FastMaxG(X, k, L, U ) ; // calculate maximal Gini
min x ̄(k) ← MinAve(X, k, L) ; // calculate minimal average
max x ̄(k) ← MaxAve(X, k, U ) ; // calculate maximal average
lsk ← LocalSensBounds min g(k), max g(k), min x ̄(k), max x ̄(k), L, U ;
; // as shown in Equation 23
Su ← max Su, e−βk lsk ;
return Su;
4 Analysis
In this section, we provide theoretical support for the algorithms described in Section 3. In
Section 4.1, we derive smooth upper bounds on LSf (X) when changing one of its elements
and on the local sensitivity of datasets differing from X in k > 1 elements. These bounds
rely on the minimum and maximum values of the Gini index attainable by changing up
to k elements in X, which we compute using the methods described in Section 4.2. In
Section 4.3, we formally establish the smooth sensitivity of our algorithm. In Section 4.4,
we describe two strategies to speed up computations.
13

4.1 Smooth Upper Bound on Local Sensitivity
Section 4.1.1 and Section 4.1.2 respectively describe bounds on how much the Gini index
can change when one element in X increases or decreases. Section 4.1.3 presents bounds
on the local sensitivity for any dataset differing from X in k > 1 elements.
4.1.1 Change in Gini index when increasing one element in X
Suppose some xm ∈ X is increased by a positive amount a > 0. Let X′
m = X−m ∪ (xm + a),
where X−m = X − xm. After the perturbation, the rank of xm + a among the values in
X′
m increases when xm + a ≥ xm+1 and stays the same when xm + a < xm+1. Let the new
rank of (xm + a) in X′
m be m′, where m ≤ m′ ≤ n. To simplify notation, we use X′ in lieu
of X′
m and g0 to denote g(X).
Using the definition of the Gini index in (2), adding a to xm increases the denominator
from (n − 1)(nx ̄) to (n − 1)(nx ̄ + a). The numerator changes from Pn
i=1(2i − n − 1)xi to
X
i<m
(2i−n−1)xi +(2m′ −n−1)(xm +a)+
X
m<i≤m′
(2(i−1)−n−1)xi +
X
i>m′
(2i−n−1)xi. (12)
Thus, for any X′, ∆g = g(X′) − g0 depends on three quantities: the increment amount a,
the original rank m, and the resulting rank m′. To emphasize this dependence, we write
∆g as ∆g(m, m′, a). Using the algebraic manipulations presented in the supplementary
material, we can show that
∆g(m, m′, a) = 1
nx ̄ + a a 2m′
n − 1 − w − g0 + 2
n−1
m′
X
i=m
(xm − xi)
!
(13)
where w = (n + 1)/(n − 1). Note that (13) can be positive or negative (or in rare cases
zero).
We now consider (13) as a function of a, fixing m and m′. Suppose that a can take
any rational value in [xm′ − xm, xm′+1 − xm). When a is in this interval, ∆g(m, m′, a) is
differentiable with respect to a. We have
∂∆g(m, m′, a)
∂a = ( 2m′
n−1 − w − g0)(nx ̄ + a) − a( 2m′
n−1 − w − g0) − 2
n−1
Pm′
i=m(xm − xi)
(nx ̄ + a)2
=1
(nx ̄ + a)2 ( 2m′
n − 1 − w − g0)nx ̄ + 2
n−1
m′
X
i=m
(xi − xm)
!
| {z }
A
. (14)
14

When the ranks m and m′ are held fixed, the sign of (14) is the same for all values
of a in the open interval. Thus, within any interval [m, m′), we can expect ∆g(m, m′, a)
to be always increasing or always decreasing. This suggests that for any fixed m and m′,
the largest absolute value of ∆g(m, m′, a) is likely to occur at the maximum or minimum
possible values of a that change the rank from m to m′, i.e., when a = xm′ − xm or
a ≈ xm′+1 − xm. Further, the term that determines the sign in (14), which we refer to as
A, increases monotonically in m′ when m is fixed. To see this, note that (2m′/(n − 1))nx ̄
is linear in m′ with positive slope, and Pm′
i=m(xi − xm) is nondecreasing in m′ because each
additional term xi − xm ≥ 0 when m ≤ i ≤ m′.
We use these features of (14) to help determine the largest possible absolute value of
∆g(m, m′, a) for any fixed rank m. To do so, we determine the values of m′ that result in
the largest and smallest ∆g(m, m′, a), where the smallest is of interest because ∆g(m, m′, a)
could be negative. The result is contained in Lemma 4.1.
Lemma 4.1. Fix m ∈ {1, . . . , n} and let m′ be any integer such that m ≤ m′ ≤ n. The
following two facts hold.
1. When 2m
n−1 − w − g0 < 0, ∆g(m, m′, a) attains a unique minimum at the integer,
m′ = sm = min
n
m′ < n : 2m′
n − 1 − w − g0 nx ̄ + 2
n−1
m′
X
i=m
(xi − xm) ≥ 0
o
. (15)
When 2m′
n−1 − w − g0 ≥ 0, ∆g(m, m′, a) attains its minimum at m′ = m.
2. ∆g(m, m′, a) attains its maximum at m′ = n.
Proof. We begin by establishing several facts about the sign of (14) at the endpoints of the
domain of m′. When m′ = n, (14) has a positive sign since
2n
n − 1 − w − g0 nx ̄ + 2
n−1
n
X
i=m
(xi − xm) > 0. (16)
When m′ = m, the sign of (14) is determined by the sign of 2m/(n − 1) − w − g0. This
expression could be negative for some values of m and positive for other values of m, which
motivates examining the two cases in the first fact of the lemma statement.
15

We next show that ∆g(m, m′, a) does not have discontinuities at the points defined by
a = xm′ − xm. Let r be an integer satisfying m < r ≤ n. As a → (xr − xm)−, we have
m′ = r − 1; as a → (xr − xm)+, we have m′ = r. Thus, for any r we have
∆g(m, m′ = r, a = (xr − xm)+) − ∆g(m, m′ = r − 1, a = (xr − xm)−)
= lim
a→xr −xm
1
nx ̄ + a
2a
n − 1 + 2(xm − xr)
n − 1 = 0. (17)
Thus, the differences in ∆g(m, m′, a) at the endpoints of any two adjacent intervals are
negligible.
Recall that A from (14) is nondecreasing in m′ when m is fixed. We use this fact to
reason about the two cases described in the lemma statement. When 2m/(n−1)−w −g0 <
0, increasing m eventually switches the sign of (14) from negative to positive. Thus,
∆g(m, m′, a) decreases until some m′ and increases thereafter. The minimum occurs at the
first m′ for which A is greater than or equal to zero, i.e., the value sm given in the lemma
statement. When 2m/(n − 1) − w − g0 ≥ 0, (14) is always positive, so that ∆g(m, m′, a)
increases monotonically with m′. Hence, in this case, the minimum value of ∆g(m, m′, a)
occurs at m′ = m. Finally, for both cases the maximum value occurs at m′ = n. Since
A is nondecreasing and positive for all m′ ≥ sm, ∆g(m, m′, a) continues to grow for each
increment of m′ until reaching n.
Lemma 4.1 shows that, for each fixed m, we can find the the largest value of |∆g(m, m′, a)|
by evaluating it at m′ = n with a = an = U − xm and at the relevant minimum m′ = sm
with a = am′ = xm′ − xm. Note the minimum value of ∆g(m, m, a) = 0 when m′ = m,
so we need not consider m′ = m for determining the largest value of |∆g(m, m′, a)|. As
a result, finding the largest value of |∆g(m, m′, a)| over all admissible (m, m′) when in
creasing a single xi amounts to finding the larger of |∆g(m, m′ = n, an = U − xm)| and
|∆g(m, m′ = sm, asm = xsm − xm)| for each m, and searching among these for the largest
value over m.
In fact, for many realizations of X, we need not evaluate these quantities for every value
of m = 1, . . . , n. The maximum of |∆g(m, m′, a)| occurs either when (m = 1, m′ = sm) or
when (m = mI, m′ = n), where mI = ⌊n − (1 − g0)(n − 1)/2⌋, i.e., the greatest integer
less than n − (1 − g0)(n − 1)/2. Intuitively, for m′ = sm, we want to increase the smallest
16

element in X to obtain the largest decrement in the Gini index. For m′ = n, we want to
increase the element in x that allows for the largest increment in the Gini index, which
generally occurs for some 1 < m < n.
To argue why this should be the case, we first fix m′ = n and determine which choice
of m maximizes |∆g(m, m′ = n, a)|. We have
∆g(m, m′ = n, a) = 1
nx ̄ + a
"
a( 2n
n − 1 − g0 − w) + 2
n−1
n
X
i=m
(xm − xi)
#
(18)
=1
nx ̄ + a
"
a(−g0 + 1) + 2
n−1
n
X
i=m
(xm − xi)
#
. (19)
For any m, let am+1 = xn − xm+1 and am = xn − xm. When nx ̄ >> U − x1, which should
be the case in practice as long as n is reasonably large and U is sensible, ∆g(m + 1, m′ =
n, am+1) − ∆g(m, m′ = n, am) for m < n is determined primarily by the term inside the
brackets of (19), i.e.,.
(xm − xm+1)(1 − g0) + 2(n − m)
n − 1 (xm+1 − xm)) = 2(n − m)
n − 1 − 1 + g0
| {z }
B
(xm+1 − xm).
(20)
The sign of (20) depends on the expression labeled B, which decreases strictly with
m. This B is positive when m = 1 and eventually becomes negative. Thus, (19) with
m′ = n is first monotone increasing and then monotone decreasing in m. The maximum
of ∆g(m, m′ = n) is attained at the last integer that makes B positive, which is m = mI.
When m′ = sm, the maximum of ∆g(m, m′ = n) occurs when m = 1, which changes the
smallest value in X. A proof is in the supplementary material.
We note that computing sm and mI can be computationally expensive, since sm has
no closed-form solution. In Section 4.1.3, we present a bound on the local sensitivity that
avoids the need to compute these values.
4.1.2 Change in Gini index when decreasing one element in X
In this section, we consider decreasing xm by a > 0. The decrement could result in a value
with reduced rank 1 ≤ m′ < m or a value still with rank m′ = m. We can use analyses
akin to those in Section 4.1.1 to determine the maximum absolute change in the Gini index
17

when reducing one xm. For brevity, here we provide the upper bounds on this change and
leave the details to the supplementary material.
When decreasing xm by some amount a, the largest value of |∆g(m, m′, a)| occurs when
either (m, m′) = (n, qm) or (m, m′) = (mD, 1). Here, qm = max 1 ≤ m′ ≤ m : (g0 − 2m′
n−1 +
w)nx ̄+ 2
n−1
Pm−1
i=m′(xi −xm) ≤ 0 and mD = max{m > 1 : (g0 +1)nx ̄+ 2
n−1
Pm−1
i=1 (xi −xm) ≥
0}.
4.1.3 Bounds on local sensitivity for datasets differing from X in k elements
For smooth sensitivity, we need to compute a bound on the local sensitivity for any dataset
constructed by replacing k elements in X with k other values in [L, U ]. Let X(kt) denote
one of these modified datasets, where the index k = 1, . . . , n indicates the number of
elements replaced and the index t ranges over all possible datasets with d(X, X(kt)) = k.
The elements of X(kt) are arranged in increasing order. For k = 1, . . . , n, let min g(k) and
max g(k) denote, respectively, the minimum and maximum values of the Gini index g(X(kt))
over the set of all feasible datasets {X(kt) : d(X, X(kt)) = k} of size n. Similarly, let min x ̄(k)
and max x ̄(k) denote, respectively, the minimum and maximum values of the average of the
n values in X(kt) over the set of all feasible datasets {X(kt) : d(X, X(kt)) = k} of size n. To
simplify our notation, we write X(kt) = (xt1, . . . , xtn), x ̄t = Pn
i=1 xti/n, and gt = g(X(kt)).
As shown in Section 4.1.1 and Section 4.1.2, the maximum absolute change in gt when
increasing or decreasing any single element occurs for one of four possible values of (m, m′).
These include (m = mI, m′ = n), (m = 1, m′ = sm), (m = mD, m′ = 1), and (m = n, m′ =
qm). We use these facts to bound the local sensitivity for any X(kt). Note that the values
of mI and mD in these four candidates are computed using X(kt), not X.
18

For the case where (m = mI, m′ = n), we have
|∆g(m = mI, m′ = n, a)| = 1
nx ̄t + a a( 2n
n − 1 − gt − n + 1
n − 1) + 2
n−1
n
X
i=mI
(xmI − xi)
!
≤ max 1
nx ̄t + a a (1 − gt), 2
(nx ̄t + a)(n − 1)
n
X
i=mI
(xti − xtmI )
!
< max (U − L)(1 − min g(k))
n min x ̄(k) + (U − L) , 2
(nx ̄t + 0)(n − 1)
n
X
i=1
(xti − xt1)
!
< max (U − L)(1 − min g(k))
n min x ̄(k) + (U − L) , 2(n max x ̄(k) − nL)
n min x ̄(k)(n − 1) . (21)
The second step holds because of the triangle inequality. The third step utilizes the fact
that 0 ≤ a ≤ U and that the largest value of the summation term occurs when the limits go
from 1 to n. Using this upper bound for the summation allows us to circumvent searching
for mI—which does not have a closed-form solution—thereby avoiding a search procedure
with complexity O(log(n)). The final step holds because we maximize the numerator and
minimize the denominator.
For the case where (m = 1, m′ = sm) we can use almost identical logic to show that
(21) also provides an upper bound on |∆g(m = 1, m′ = sm, a)|.
For the case where (m = n, m′ = qm), we have
|∆g(m = n, m′ = qm, a)| = 1
nx ̄t − a a(gt − 2
n − 1 + 1) + 2
n−1
n
X
i=qm
(xti − xtn)
!
< max (U − L)(max g(k) + 1 − 2
n−1 )
n min x ̄(k) − (U − L) , 2n(U − min x ̄(k))
(n min x ̄(k) − (U − L))(n − 1)
!
. (22)
For the case where (m = mD, m′ = 1), we can show that (22) also provides an upper
bound on |∆g(m = mD, m′ = 1, a)|.
4.2 Efficiently Finding max g(k) and min g(k)
As evident in (21) and (22), our smooth upper bounds on the local sensitivity depend on
minima and maxima of the Gini index. In this section, we provide statements of theorems
that offer computationally efficient ways to find these minima and maxima. Specifically,
we show that for k = 1, . . . , n − 1, we can find max g(k) by removing and replacing n − k
19

consecutively ordered elements from X. We also show that, for k = 1, . . . , n − 1, we can
find min g(k) by removing and replacing a total of n−k consecutively ordered elements from
X selected from the smallest and largest values of X. Proofs of the theorems are provided
in the supplementary material.
As part of the methodology, we define k-maximal Gini subsets and k-minimal Gini
subsets as follows.
Definition 4.2 (k-maximal Gini subset). Given a set X = (x1, . . . , xn) of n real numbers
in ascending order and an integer k < n, a subset Q ⊂ X is called a k-maximal Gini subset
of X if |Q| = k and, ∀ Q′ ⊂ X such that |Q′| = k where Q′ ̸= Q, we have g(Q′) ≤ g(Q).
Definition 4.3 (k-minimal Gini subset). Given a set X = (x1, . . . , xn) of n real numbers
in ascending order and an integer k < n, a subset Q ⊂ X is called a k-minimal Gini subset
of X if |Q| = k and, ∀ Q′ ⊂ X such that |Q′| = k where Q′ ̸= Q, we have g(Q′) ≥ g(Q).
To illustrate the concepts in Definition 4.2 and Definition 4.3, we return the the example
with X = (3, 6, 7, 7.5) from Section 3. The k-maximal Gini subset of size k = 2 is the pair
of values (xi, xj) whose Gini index is largest, i.e., the pair that differs most. For this X,
that subset is {3, 7.5}. The k-minimal Gini subset of size k = 2 is the pair of values (xi, xj)
whose Gini index is smallest, which for this X is {7, 7.5}. In general, for any k < n, the
k-maximal/minimal Gini subsets tell us how much/little inequality can exist in a sample
from X of size k.
The k-maximal and k-minimal subsets are used to prove Theorem 4.1 and Theorem 4.2.
Theorem 4.1. Given a set X = (x1, . . . , xn) of of n real numbers in ascending order, where
each xi ∈ [L, U ], and an integer 1 < k < n, the k-maximal Gini subset can be achieved by
removing n − k consecutive elements in X.
Theorem 4.2. Given a set X = (x1, . . . , xn) of n real numbers in ascending order, where
each xi ∈ [L, U ], and an integer 1 < k < n, the k-minimal Gini subset can be achieved by
removing a total of n − k elements from X so that Q comprises k consecutive elements.
These theorems show that, instead of comparing all n
k subsets with k elements, we
can find k-maximal and k-minimal Gini subsets by removing consecutive elements of the
20

sorted list X. Thus, it is sufficient to analyze these structured deletions rather than every
possible subset of size k. In particular, the k-maximal Gini subset can be computed in
O(n − k) steps and the k-minimal Gini subset can be computed in O(k) steps. As a result,
the bounds for smooth sensitivity presented in Section 4.1.1 and 4.1.2 can be computed in
O(k(n − k)) steps.
4.3 Smooth Sensitivity of Gini Index
Putting it all together, we can find A(k)(X) for k = 1, . . . , n − 1 for use in the smooth
sensitivity as defined in Section (2.3).
Theorem 4.3. For a given k ∈ {1, . . . , n}, let C1 be the value of the bound in (21) and C2
be the value of the bound in (22). Then,
A(k)(X) =

 
 
max(C1, C2) if nx ̄k − (U − L) > 0 and max(C1, C2) ≤ 1
1 otherwise.
(23)
As noted at the end of Section 3, there may be contexts where analysts wish to compute
some A(k)(X) with fewer computations, for example, when n is very large. Theorem 4.4
presents an alternative upper bound that avoids computation of min g(k) and max g(k).
Theorem 4.4. Let IQ(X) = U−L
x ̄ . Then, for k = 1, . . . , n, an upper bound on A(k)(X) is
A(k)(X) =

 
 
2 n( 1
IQ(X) − k
n )−1 if 1
1
IQ(X) − k
n
≤ U−L
L and 2
n( 1
IQ(X) − k
n )−1 < 1
1 otherwise.
(24)
Proof. Let X(kt) be any ordered dataset of n elements that satisfies d(X, X(kt)) = k. Let
C1 and C2 be the values in (21) and (22), respectively, computed with X(kt). Since 0 ≤
max g(k) ≤ 1, we have
max(C1, C2) ≤ 2
n
IQ(X(kt)) − 1 . (25)
It is obvious that min x ̄(k) = (Pn−k
i=1 xi + kL)/n ≥ x ̄ − k(U − L)/n and max x ̄(k) =
(
Pn
i=k+1 xi + kU )/n ≤ x + k(U − L)/n. Since L ≤ x ̄t ≤ U , we have
1
1
IQ(X) + k
n
≤ IQ(X(kt)) ≤ min U − L
L, 1
1
IQ(X) − k
n
!
. (26)
The result in (26) implies (25).
21

The difference between the bounds in Theorem 4.3 and in Theorem 4.4 is of the order
O( 1−g0
n/IQ(X)−1 ). In practical situations, we expect this difference to be small, since the
denominator typically is much larger than the numerator. It is theoretically possible,
however, for the discrepancy to be large. To illustrate, if n = 2 with x1 = 0.5 and x2 = 1,
and L = 0.5 and U = 1, the difference between the bounds is 0.35. The bounds in Theorem
4.3 imply smooth sensitivity, as stated formally in Theorem 4.5.
Theorem 4.5. Let ε > 0 and η ∈ (0, 1). Define A(k)(X) as in (24) and fix γ > 1 in (10).
Let β = ε
γ . If
n ≥ max 2IQ(X)( 2
εη + 1), 2IQ(X)γ
ε ln( 1
εη ) (27)
then
S(X) = max
k=1,...,n e(−βk)A(k)(X) ≤ εη. (28)
Proof. First, suppose k ≤ n
2IQ(X) . Since n ≥ 2IQ(X)( 2
εη + 1), we have
exp(−βk)A(k)(X) ≤ max
k=1,...,n A(k)(X) = max
k=1,...,n
2
n( 1
IQ(X) − k
n) − 1 ≤ 2
n
2IQ(X) − 1 ≤ εη. (29)
Now suppose k > n
2IQ(X) . Then, exp(−βk) ≤ exp(− βn
2IQ(X) ) = exp(− εn
2γIQ(X) ). Since
n ≥ 2IQ(X)γ
ε ln( 1
εη ) and A(k)(X) ≤ 1 for all X and k, we have
max
k=1,...,n exp(−βk)A(k)(X) ≤ max
k=1,...,n exp(−βk) ≤ exp − εn
2IQ(X)γ ≤ εη. (30)
4.4 Computational Speedups
We use two computational strategies to make the algorithms run more efficiently, namely
(i) pruning the search over values of k and (ii) maintaining auxiliary in-memory data
structures. The latter supports dynamic updates to the Gini index after modifying k
records, thereby avoiding repeated computations using all of X.
With regard to pruning the search over k, we first note that A(k)(X) ≤ 1. Thus,
e−βk A(k)(X) ≤ e−βk. Let k⋆ = min k ∈ N e−βk ≤ A(0)(X) . For every k ≥ k⋆ we
have e−βkA(k)(X) ≤ A(0)(X), so no k > k∗ can lead to a different maximization in (8).
Consequently, we can restrict the search range to 0 ≤ k ≤ k⋆.
22

With regard to the dynamic Gini maintenance, a naive implementation of Algorithm 1
and Algorithm 2 could slide a length-k window across (x1, . . . , xn) and re-sort the records
after advancing each window. This would result in a cost of O (n − k) k log n . However,
this is not necessary. Only the k elements in the window can change, while the remaining
n − k items keep their original ranks. We leverage this fact in the search strategy in
Algorithm 1. We also save time by not recomputing certain statistics that stay fixed. In
particular, we maintain the order statistics Pi = P
t<i xt, Ci = P
t<i(2t − n − 1)xt, and
Ri = P
t<i txt defined in Algorithm 2 and Algorithm 1. Finally, we compute the Gini index
efficiently using these stored statistics; see the supplementary material for the expression.
5 Experiments
In this section, we illustrate and evaluate the algorithm for generating a DP version of
the Gini index using an open-source dataset comprising genuine incomes (Section 5.1) and
hypothetical data with fixed values of g(X) (Section 5.2). Because we evaluate the repeated
sampling properties of the algorithm, we use the bounds from Theorem 4.4 to facilitate
efficient computation.
5.1 Illustrations Using Genuine Incomes
As the data Z, we use income values from the 2024 Current Population Survey public use
file (U.S. Census Bureau & U.S. Bureau of Labor Statistics 2024). This reports calendar
year 2023 income (named “PTOTAL” on the file). We restrict Z to individuals aged 16 and
older, resulting in n = 115,777 individuals. The resulting g(Z) = 0.574. Note that we do
not consider the survey weights when computing g(Z); see Section 6 for further discussion
of survey weights.
We apply the DP Gini index algorithm with privacy budgets ε ∈ {0.25, 0.5, 1, 1.5, 2}.
We set the lower bound on incomes L = 0. Since we do not know an upper bound for these
incomes, we use an additional 0.15 of privacy budget, i.e., under composition increase the
total ε by 0.15, to estimate a value that exceeds the maximum in Z, xn = 2,108,379, with
high probability. To do so, we modify the AboveThreshold algorithm in Durfee (2023). As
23

Figure 1: Distribution of the DP Gini estimator under various privacy budgets using the
Current Population Survey data as Z. Box plots summarize 1,000,000 independent draws
of g ̃(Z).
originally designed, this algorithm iteratively guesses at the maximum value in a dataset.
To begin the algorithm, we generate a differentially private version  ̃n of n, which we do via
the Laplace mechanism with privacy budget ε1 = 0.075. The algorithm then starts with
some initial guess at the maximum and counts the number of observations in X that exceed
that guess, adding a modest amount of noise to the count to ensure differential privacy. We
add this noise via the Laplace mechanism with privacy budget ε2 = 0.075. The algorithm
stops at the first instance the noisy count exceeds  ̃n. The value of the guess at this instance
is the differentially private estimate of the maximum value in X, x ̃n.
The AboveThreshold algorithm can produce an x ̃n < xn. Setting U equal to such an x ̃n
would require clipping any xi > x ̃n at x ̃n, which would introduce bias in the differentially
private Gini index. To reduce the risk of using a U < xn, we use a post-processing step
and set U = 2.5x ̃n. This represents a conservative inflation, in that x ̃n generated by
our implementation of the AboveThreshold algorithm with (ε1, ε2) is highly unlikely to
underestimate xn by 60%, per the results in Durfee (2023). Across all of our simulation
runs, 2.5x ̃n always exceeds xn with a maximum of approximately 3,640,000. We run this
modified AboveThreshold algorithm to set U in each simulation run.
For each of the five values of ε, we generate 1,000,000 values of g ̃(Z) using the algorithms
in Section 3. As the DP mechansim, we use (10) with γ = 2. As evident in Figure 1, the
24

Figure 2: Posterior distribution p(g|g ̃) when g ̃(Z) = 0.574. Here, g ̃(Z) derives from one
application of the DP algorithm where Z is the Current Population Survey data and ε = 2.
Dashed vertical lines indicate central 95% posterior credible intervals.
DP Gini index is approximately unbiased, as the averages of the draws of g ̃(Z) are centered
at g(Z). The unbiasedness results because the DP mechanism does not clip the observed
data (as long as U > xn) and uses mean-zero noise. As ε increases, the variances of g ̃(Z)
shrink. Even at ε = 0.25, which is a strong privacy guarantee, we are likely to generate a
g ̃(Z) within just a few points of g(Z).
Figure 2 illustrates the posterior distribution p(g | g ̃) for a single value of g ̃ = 0.574
when ε = 2. The posterior distribution is computed using the Bayesian post-processing
procedure in (11). As evident in the figure, the posterior distribution provides a sense of
the uncertainty about g(Z).
5.2 Illustrations Using Simulated Data
In this section, we evaluate the performance of the algorithm from Section 3 on hypo
thetical datasets with pre-specified values of g(X) ∈ {0.2, 0.5, 0.7}, sample sizes n ∈
{10000, 100000, 1000000}, and privacy budgets ε ∈ {0.5, 1, 2}. We first describe how we
generate the hypothetical datasets, followed by the results.
25

5.2.1 Method for generating simulated data
The bounds in Theorem 4.4 are based on IQ(X), which requires values for L, U , and x ̄.
Thus, when using these bounds in simulations, we need not generate individual records in
X that yield a g(X) ∈ {0.2, 0.5, 0.7}. Instead, we find the minimum value of IQ(X) that
is consistent with a particular g(X), as shown in Proposition 5.1. The proof of Proposition
5.1 is in the supplementary material.
Proposition 5.1. Let X have n ≥ 2 non-negative elements with mean x ̄ = n−1 Pn
i=1 xi >
0. For any g ∈ [0, 1),
inf{IQ(X) : g(X) = g } =

  
  
4g, 0 ≤ g ≤ 1
2,
1
1−g, 1
2 < g < 1.
(31)
Using Proposition 5.1, we find the minimum IQ(X) that corresponds to each prescribed
g(X) and use that IQ(X) in Theorem 4.4. We also examine the performance of the DP
algorithm when IQ(X) exceeds the minimum in (31). We perform the simulations setting
g(X) = 0.5 and n = 100000.
5.2.2 Results
Figure 3 summarizes the absolute differences |g ̃(X) − g(X)| across 1,000,000 draws of g ̃(X)
when IQ(X) is at its minimum value. The absolute differences are typically small, even
when ε = 0.5. The absolute differences decrease as both n and ε increase. The absolute
differences tend to be largest when g(X) = 0.7. This arises mainly because the minimum
IQ(X) bound increases with g(X), which results in greater noise variance. In particular,
as g(X) → 1, we would expect X to include a few very large values (i.e., near U ) of xi.
Even small perturbations of these large values can inflate the local sensitivity. These results
suggest that the DP Gini index may require relatively large ε or n to give useful estimates
in cases where g(X) is near one. The results also suggest that, when implementing the DP
Gini index algorithms, setting U and L to make IQ(X) as small as possible—which can be
done in practice by allocating some privacy budget to estimate a noisy bound on xn—can
help reduce the magnitudes of the absolute differences.
26

Figure 3: Simulated absolute errors in the differentially private Gini index g ̃(X) using
hypothetical datasets. Each plot summarizes the absolute errors of 1,000,000 independent
replications. Plots summarize up to the 99% percentiles of the absolute errors. The largest
errors among the remaining 1% are displayed on top of the plots. The vertical axis is scaled
as log max{|g ̃(X) − g(X)|, 10−6} to distinguish small errors.
Figure 4 examines sensitivity to values of IQ(X) that range from 2 to 100. Note
that inf{IQ(X) : g(X) = 0.5 } = 2 when n = 100000. The root mean squared error
(RMSE) increases steadily with IQ(X), illustrating the potential downsides of using a
large normalized range in the privacy mechanism, particularly when ε is small. We also see
that increases in ε yield sizable reductions in RMSE across all IQ(X). Thus, for X where
the normalized range is expected to be high, it may be beneficial to increase the privacy
budget, essentially trading privacy protection for analytic utility. Regardless, when g(X)
is close to 1, the normalized range is large, making the RMSE potentially large as well. We
discuss a potential remedy for this issue in Section 6.
27

Figure 4: RMSE for different values of the normalized range, r = U − L/x ̄, varying from
inf{IQ(X) : g(X) = 0.5} to 100. Here, we fix g(X) = 0.5 and n = 100000.
6 Discussion
The differentially private Gini index algorithm can perform well when the normalized range
IQ(X) of X is not too large. When this is not the case, we need a relatively large sample size
or privacy budget to release reliable results. With small sample sizes, extreme observations
can result in large local sensitivity, potentially pushing it close to worst-case levels. In
such settings, we suspect that no unbiased differentially private mechanisms can deliver
simultaneously strong privacy and high utility.
One motivation for using smooth sensitivity is to avoid clipping some xi at a value
below xn, as clipping induces bias. However, for X with high IQ(X), a practical trade-off
between privacy and utility may be necessary. One possible strategy is to allocate part of
the privacy budget to privately estimate some upper quantile q of the values in X, say the
99th percentile, release its differentially private estimate q ̃, and compute the Gini index
using values of X clipped at quantile q (i.e., set all xi > q ̃ = q ̃) using the DP algorithm
presented here. This procedure could substantially reduce the DP noise in the released
Gini index in cases with large IQ(X).
Analysts may be able to use a post-processing method to adjust for the effects of
clipping. The general idea is for analysts to presume some model for the tail values beyond
28

q ̃, for example, a Pareto distribution or a shape-constrained Lorenz continuation, anchored
at (q, q ̃) and constrained to reproduce the released Gini statistic. The collection of tails
that satisfy these constraints determines an identified interval for the Gini index of the data
without clipping. Similar approaches have been suggested to adjust disclosure-protected
Gini index values for the effects of topcoding (Larrimore et al. 2008, Burkhauser et al.
2008). We leave investigation of this suggestion to future work.
Our algorithms do not incorporate survey weights or other kinds of weights. The lit
erature on differential privacy does not yet provide effective methods for handling survey
weights, particularly when they are adjusted for nonresponse or calibration. This is be
cause the sensitivity can be greatly increased by using survey-weighted analyses (Reiter
2019, Drechsler 2023). It may possible to modify our algorithms to include other kinds of
observation-level weights, particularly those that are fixed features of each record in the
population. In fact, downweighting extreme values could reduce the local sensitivity of the
Gini index. Developing methods for computing a differentially private, weighted Gini index
is a direction for future research.
SUPPLEMENTARY MATERIAL
Supporting Theory: Proofs and derivations supporting the results (pdf file)
Python-package for DP Gini Algorithm: Python-package DP-Gini containing code
to implement the algorithms. The package also contains all datasets used in Sec
tion 5. Code is also available at https://github.com/YancyLan/DP_Gini
References
Abowd, J. M., Ashmead, R., Cumings-Menon, R., Garfinkel, S., Heineck, M., Heiss, C.,
Johns, R., Kifer, D., Leclerc, P., Machanavajjhala, A., Moran, B., Sexton, W., Spence,
M. & Zhuravlev, P. (2022), ‘The 2020 census disclosure avoidance system TopDown
algorithm’, Harvard Data Science Review Special Issue 2.
Abowd, J. M. & Schmutte, I. M. (2016), ‘Economic analysis and statistical disclosure
limitation’, Brookings Papers on Economic Activity 2015(1), 221–293.
29

Armour, P., Burkhauser, R. V. & Larrimore, J. (2016), ‘Using the Pareto distribution to
improve estimates of topcoded earnings’, Economic Inquiry 54(2), 1263–1273.
Burkhauser, R. V., Feng, S., Jenkins, S. P. & Larrimore, J. (2008), Estimating trends in US
income inequality using the Current Population Survey: The importance of controlling
for censoring, NBER Working Paper 14247, National Bureau of Economic Research.
Charles, V., Gherman, T. & Paliza, J. C. (2022), The Gini index: a modern measure of
inequality, in ‘Modern Indices for International Economic Diplomacy’, Springer, pp. 55
84.
Chetty, R. & Friedman, J. (2019), ‘A practical method to reduce privacy loss when disclos
ing statistics based on small samples’, American Economic Review Papers and Proceed
ings 109, 414–20.
Drechsler, J. (2023), ‘Differential privacy for government agencies—are we there yet?’,
Journal of the American Statistical Association 118, 761–773.
Durfee, D. (2023), Unbounded differentially private quantile and maximum estimation, in
‘Advances in Neural Information Processing Systems’, Vol. 36, pp. 77691–77712.
Dwork, C. (2006), Differential privacy, in ‘International Colloquium on Automata, Lan
guages, and Programming’, Springer, pp. 1–12.
Dwork, C., McSherry, F., Nissim, K. & Smith, A. (2006), Calibrating noise to sensitivity
in private data analysis, in S. Halevi & T. Rabin, eds, ‘Theory of Cryptography. TCC
2006’, Vol. Lecture Notes in Computer Science, vol 3876, Berlin: Springer.
Dwork, C. & Roth, A. (2014), ‘The algorithmic foundations of differential privacy’, Foun
dations and Trends in Theoretical Computer Science 9(3–4), 211–407.
Gastwirth, J. L. (2017), ‘Is the Gini index of inequality overly sensitive to changes in the
middle of the income distribution?’, Statistics and Public Policy 4(1), 1–11.
Gould, E., deCourcy, K. & Mokhiber, Z. (2022), Stagnant top-code thresholds threaten data
reliability for the highest earners and make inequality difficult to accurately measure,
Technical report, Economic Policy Institute.
30

Kamath, G., Mouzakis, A., Regehr, M., Singhal, V., Steinke, T. & Ullman, J. (2025),
‘A bias-accuracy-privacy trilemma for statistical estimation’, Journal of the American
Statistical Association p. to appear.
Kazan, Z. & Reiter, J. P. (2024), Prior-itizing privacy: A Bayesian approach to setting
the privacy budget in differential privacy, in ‘Advances in Neural Information Processing
Systems’, Vol. 37, pp. 90384–90430.
Larrimore, J., Burkhauser, R. V., Feng, S. & Zayatz, L. (2008), ‘Consistent cell means for
topcoded incomes in the public use March CPS (1976–2007)’, Journal of Economic and
Social Measurement 33(2-3), 89–128.
Nissim, K., Raskhodnikova, S. & Smith, A. (2007), Smooth sensitivity and sampling in
private data analysis, in ‘Proceedings of the Thirty-ninth Annual ACM Symposium on
Theory of Computing’, pp. 75–84.
Reiter, J. P. (2019), ‘Differential privacy and federal data releases’, Annual Review of
Statistics and Its Application 6(1), 85–101.
Rothschild, M. & Stiglitz, J. E. (1973), ‘Some further results on the measurement of in
equality’, Journal of Economic Theory 6, 487––500.
Sun, Q., Zhao, Z. & Zhou, R. (2025), ‘Examining the impact of topcodes adjustment on
studies of gender earnings inequality in the US: evidence from March CPS data’, Applied
Economics 57, 1838–1857.
Tumult Labs (2025), ‘Illuminating college outcomes, while protecting privacy’.
https://www.tmlt.io/casestudy/illuminating-college-outcomes-while-protecting-privacy.
U.S. Census Bureau & U.S. Bureau of Labor Statistics (2024), ‘Current population survey,
2024 annual social and economic supplement (asec): Public-use microdata files (csv)’,
CSV data files (Person, Household, Family, and Replicate Weights). Includes variables
such as PTOTVAL (total person income) and MARSUPWT (ASEC supplement final
person weight). Accessed 2025-08-14.
URL: https://www.census.gov/data/datasets/2024/demo/cps/cps-asec-2024.html
31

A Appendix
This section includes supplementary material for the main text. Table A.1 includes a list
of all notation. Section A.1 includes proofs and derivations relevant for Section 4.1 in the
main text. Section A.2 includes proofs and derivations relevant for Section 4.2 in the main
text. Section A.3 includes expressions relevant for Section 4.4 in the main text. Section
A.4 includes proofs and derivations relevant for Section 5 in the main text.
Table A.1: Notation
Symbol Meaning
zi income for individual i
Z = (z1, . . . , zn) incomes for n individuals
xi ith largest value in Z
X = (x1, . . . , xn) ordered version of Z
L, U The lower and upper bounds of X
w (n + 1)/(n − 1)
g(X) Gini index for the dataset X (we sometimes write g0)
LSf (D) local sensitivity for function f and database D
A(k)(X) The maximum of the local sensitivity over all X′, where
d(X, X′) = k.
X−m dataset X with the mth entry removed
a the amount of increment/decrement in xm when changing it
X′
m X−m ∪ (xm + a) when increasing xm,
X−m ∪ (xm − a) when decreasing xm
m′ The new rank of xm + a or xm − a in X′
m
∆g(m, m′, a) g(X′
m) − g(X)
X(kt) = (xt1, . . . , xtn) Dataset constructed by replacing k elements in X with k other
values in [L, U ]
xt the average of X(kt)
gt the Gini index of X(kt)
32

A.1 Proofs from Section 4.1 in Main Text
A.1.1 Derivation of expression for ∆g(m, m′, a)
Recall that g(X) = Pn
i=1(2i − n − 1)xi/ ((n − 1)nx ̄). Let w = (n + 1)/(n − 1). In Section
4.1, we show in (13) that by changing some xm to xm + a where a > 0, we have
∆g(m, m′, a) = 1
nx ̄ + a
"
a 2m′
n − 1 − w − g0 + 2
n−1
m′
X
i=m
(xm − xi)
#
. (32)
When adding a to xm, the denominator (n − 1)nx ̄ in g(X) changes to (n − 1)(nx ̄ + a). The
numerator Pn
i=1(2i − n − 1)xi in g(X) changes to
X
i<m
(2i−n−1)xi +(2m′ −n−1)(xm +a)+
X
m<i≤m′
(2(i−1)−n−1)xi +
X
i>m′
(2i−n−1)xi. (33)
Thus, we have
g(X ′
m) = 1
(nx ̄ + a)(n − 1)
X
i<m
(2i − n − 1)xi + (2m′ − n − 1)(xm + a)
+
X
m<i≤m′
(2(i − 1) − n − 1)xi +
X
i>m′
(2i − n − 1)xi
!
=1
(nx ̄ + a)(n − 1)
n
X
i=1
(2i − n − 1)xi − (2m − n − 1)xm
+ (2m′ − n − 1)(xm + a) −
X
m<i≤m′
2xi
!
= nx ̄(n − 1)g0 + (2m′ − n − 1)(xm + a) − (2m − n − 1)xm − P
m<i≤m′ 2xi
(nx ̄ + a)(n − 1)
= nx ̄(n − 1)g0 + (2m′ − n − 1)a + 2(m′ − m)xm − P
m<i≤m′ 2xi
(nx ̄ + a)(n − 1)
= g0 + −(n − 1)g0a + (2m′ − n − 1)a + 2 P
m<i≤m′ (xm − xi)
(nx ̄ + a)(n − 1)
= g0 + 1
nx ̄ + a a 2m′
n−1 − n+1
n − 1 − g0 + 2
n−1
m′
X
i=m
(xm − xi)
!
. (34)
A.1.2 When m′ = sm the maximum of ∆g occurs when m = 1
In Section 4.1.1 of the main text, we claim that ∆g(m, sm, a = xsm−xm) reaches a maximum
when m = 1. In this section, we provide additional details on this claim. As a reminder,
33

we define
sm = min
n
m′ < n : 2m′
n − 1 − w − g0 nx ̄ + 2
n−1
m′
X
i=m
(xi − xm) ≥ 0
o
. (35)
Increasing m by one, we also define
sm+1 = min
n
m′ < n : 2m′
n − 1 − w − g0 nx ̄ + 2
n−1
m′
X
i=m+1
(xi − xm+1) ≥ 0
o
. (36)
When m′ = sm, we have
∆g(m, m′ = sm, a) = 1
nx ̄ + a
"
a( 2sm
n − 1 − g0 − w) + 2
n−1
sm
X
i=m
(xm − xi)
#
(37)
with a = xsm − xm
From the definition of sm, we define
cm = 2sm
n − 1 − w − g0 nx ̄ + 2
n−1
sm
X
i=m
(xi − xm) ≥ 0, (38)
where cm is non-negative per the definition of sm. Using cm, ∆g(m, sm, a) can be written
as
∆g(m, sm, a) = ( 2sm
n − 1 − w − g0)
| {z }
A
− cm
nx ̄ + a. (39)
We now argue that sm+1 ≥ sm. For any m′ ≥ m + 1, let
F (m, m′) = 2m′
n − 1 − w − g0 nx ̄ + 2
n−1
m′
X
i=m
(xi − xm), (40)
F (m + 1, m′) = 2m′
n − 1 − w − g0 nx ̄ + 2
n−1
m′
X
i=m+1
(xi − xm+1). (41)
Notice that Pm′
i=m+1(xi − xm+1) − Pm′
i=m(xi − xm) = −(m′ − m)(xm+1 − xm) ≤ 0. Thus,
F (m + 1, m′) ≤ F (m, m′). This inequality implies that if F (m + 1, m′) ≥ 0, we must
have F (m, m′) ≥ 0. Since sm+1 is the smallest m′ for which F (m + 1, m′) ≥ 0, we have
sm+1 ≥ sm.
Since cm is small relative to (nx ̄ + a), ∆g(m, sm, a) mainly depends on the term labeled
A in (39). Since sm+1 ≥ sm, we have sm ≥ s1 and hence, by comparing the terms labeled
34

A for m and m = 1, ∆g(m, sm, a = xsm − xm) ≥ ∆g(1, s1, a = xs1 − x1). When m = 1,
∆g(1, s1, a = xs1 − x1) is negative. The definition of sm also ensures ∆g(m, sm, a) to be
negative. We conclude that when m′ = sm the maximum of |∆g(m, sm, a)| occurs when
m = 1.
A.1.3 Proofs for Section 4.1.2
In Section 4.1.2 of the main text, we claim that when we decrease xm by some amount a,
the largest value of |∆g(m, m′, a)| occurs when either (m, m′) = (n, 1) or (m, m′) = (mD, 1).
In this section, we provide support for this claim.
Suppose the observation xm ∈ X is decreased by a positive amount a > 0. After
the perturbation, the rank of xm − a among the values in X′
m decreases to m′ where
1 ≤ m′ ≤ m. Denote the new dataset as X′
m. Using algebraic manipulations akin to those
used to compute (32), we can show that
g(X ′
m) = 1
(nx ̄ − a)(n − 1) (
X
i<m′
(2i − n − 1)xi + (2m′ − n − 1)(xm − a)
+
X
m′≤i<m
(2(i + 1) − n − 1)xi +
X
i>m
(2i − n − 1)xi) (42)
= nx ̄(n − 1)g0 − (2m − n − 1)xm + (2m′ − n − 1)(xm − a) + P
m′≤i<m 2xi
(nx ̄ − a)(n − 1) (43)
= g0 + a(n − 1)g0 + P
m′≤i<m 2xi − (2m − n − 1)xm + (2m′ − n − 1)(xm − a)
(nx ̄ − a)(n − 1)
(44)
= g0 + a ((n − 1)g0 − 2m′ + n + 1) + 2 Pm
i=m′ (xi − xm)
(nx ̄ − a)(n − 1) . (45)
Thus, dividing through by (n − 1), we have
∆g(m, m′, a) = a(g0 − 2m′
n−1 + w) + 2
n−1
Pm
i=m′ (xi − xm)
nx ̄ − a . (46)
Within any open interval (m′, m], ∆g(m, m′, a) is continuous in a and differentiable. Con
sidering m and m′ as constants, we have
∂g(m, m′, a)
∂a = (g0 − 2m′
n−1 + w)(nx ̄ − a) + a(g0 − 2m′
n−1 + w) + 2
n−1
Pm
i=m′ (xi − xm)
(nx ̄ − a)2 (47)
=1
(nx ̄ − a)2 g0 − 2m′
n − 1 + w nx ̄ + 2
n−1
m
X
i=m′
(xi − xm)
!
. (48)
35

We now provide a lemma that is the analogue of Lemma 4.1 from the main text. Here,
we call it Lemma A.1.
Lemma A.1. Fix m ∈ {1, . . . , n} and let m′ be any integer such that 1 ≤ m′ ≤ m. The
following two facts hold.
1. When g0 − 2m
n−1 + w < 0, ∆g(m, m′, a) attains a unique minimum at the integer
m′ = qm = max 1 ≤ m′ ≤ m : (g0 − 2m′
n − 1 + w)nx ̄ + 2
n−1
m
X
i=m′
(xi − xm) ≤ 0 . (49)
When g0 − 2m
n−1 + w ≥ 0, ∆g attains its minimum at m′ = 1.
2. ∆g(m, m′, a) attains its maximum at m′ = m.
Proof. When m′ = m, ∂g(m,m′,a)
∂a = 1
(nx ̄−a)2 [(g0 − 2m
n−1 + w)nx ̄]. When g0 − 2m
n−1 + w > 0,
increasing m′ eventually switches the sign of ∂g(m,m′,a)
∂a from negative to positive. Otherwise,
when g0 − 2m
n−1 + w ≤ 0, the sign of ∂g(m,m′,a)
∂a remains positive for all m′ < m. When m′ = 1,
we have ∂g(m,m′,a)
∂a = 1
(nx ̄−a)2 [(g0 + 1)nx ̄ + 2
n−1
Pk−1
i=1 (xi − xk)].
For a fixed m, the largest change of the Gini index occurs at m′ = 1 or at m′ = qm. We
first consider m′ = 1. From the sign of the partial derivative in (48), we can show that the
largest change happens when mD = max{m > 1 : (g0 + 1)nx ̄ + 2
n−1
Pm−1
i=1 (xi − xm) ≥ 0}.
We next consider m′ = qm. Using the definition of qm, define
dm = g0 − 2m′
n − 1 + w nx ̄ + 2
n−1
m
X
i=m′
(xi − xm) ≤ 0, (50)
We can rewrite ∆g(m, qm, a):
∆g(m, qm, a) = − g0 − 2qm
n−1 +w
| {z }
A
+ dm
nx ̄ − a. (51)
Since dm is negative and relatively small, the value of ∆g(m, qm, a) mainly depends on
the term labeled A in (51). We now argue that qm+1 ≥ qm. We define F (m, m′) =
g0 − 2m′
n−1 + w nx ̄ + 2
n−1
Pm
i=m′(xi − xm). Notice that F (m + 1, m′) − F (m, m′) = 2
n−1 (m −
m′ + 1)(xm − xm+1) ≤ 0. Therefore, qm+1 ≥ qm. We also have ∆g(n, qn, a = xn − xqn) ≤
∆g(m, qm, a = xm − xqm) for any m < n. Since ∆g(m, qm, a) < 0 under the definition for
qm, we conclude our claim.
36

A.2 Proofs for Section 4.2
In this section we prove Theorem 4.1 and Theorem 4.2 from the main text. To do so, we first
prove a lemma that characterizes the effects of inserting an element on the Gini index. Let
X+x = (x1, . . . , xm−1, x, xm, . . . , xn) be the ordered dataset after inserting x ∈ [xm−1, xm)
at position m.
Lemma 4.2. Fix m ∈ {1, . . . , n + 1}. Let ∆g(X+x) = g(X+x) − g0. There exists a unique
integer mA ∈ [1, n + 1] such that
∂∆g(X+x)
∂x < 0 when m < mA, ∂∆g(X+x)
∂x > 0 when m > mA. (52)
Proof. Recognizing that −(n + 1) − 1 = −n − 2, we can write g(X+x) as
g(X+x) = 1
n(nx ̄ + x)
X
1<i≤m−1
(2i − n − 2)xi + (2m − n − 2)x +
X
m≤i≤n
(2(i + 1) − n − 2)xi
!
=1
n(nx ̄ + x)
n
X
i=1
(2i − n − 1)xi + (2m − n − 2)x −
X
1≤i≤m−1
xi +
X
m≤i≤n
xi
!
=1
n(nx ̄ + x) g0(nx ̄(n − 1)) + (2m − n − 2)x −
X
1≤i≤m−1
xi +
X
m≤i≤n
xi
!
. (53)
Hence, subtracting g0 from (53), we have
∆g(X+x) = 1
n(nx ̄ + x) −g0n(x ̄ + x) + (2m − n − 2)x −
X
1≤i≤m−1
xi +
X
m≤i≤n
xi
!
. (54)
Viewed as a function of x, the rank m of the added element is a step function that
increases each time x exceeds some xi ∈ X. Consider the rank m of x as fixed, and
consider values of x such that (xm−1 < x ≤ xm). We take the derivative of ∆g(X+x) with
respect to x.
∂∆g(X+x)
∂x = 1
(nx ̄ + x)2
"
(2m − 2
n − 1)nx ̄ −
n
X
i=m
xi
n+
X
1≤i≤m−1
xi
n
#
| {z }
(I)
(55)
With m held constant, the sign of ∂∆g(X+x)/∂x is the same for all x: it is either negative
or positive. The expression labeled (I) in (55) controls the sign of the derivative. This (I)
term increases monotonically in m.
37

When x has rank m = n + 1 in X+x, we have
∂∆g(X+x)
∂x = 1
(nx ̄ + x)2
"
nx ̄ +
X
1≤i<n
xi
n
#
> 0. (56)
When x has rank m = 1 in X+x, we have
∂∆g(X+x)
∂x = 1
(nx ̄ + x)2
"
−nx ̄ −
n
X
i=1
xi
n
#
< 0. (57)
Thus, there exists a point xmA such that ∂∆g(X+x)
∂x > 0 for all x > xmA, and ∂∆g(X+x)
∂x < 0
for all x < xmA.
We next show that ∆g(X+x) does not have discontinuities at the points defined by
xi ∈ X. Let r be an integer satisfying 1 ≤ r < n. As x → x−
r , we have m = r; as x → x+
r,
we have m = r + 1. We write Xxr− as the version of X+x including x = x−
r and Xxr+ as the
version of X+x including x = x+
r . Thus, for any r we have
∆g Xxr+ − ∆g Xxr− = xli→mxr
1
nx ̄ + xr
2xr
n − 2xr
n = 0.
Thus, the differences in ∆g(X+x) at the endpoints of any two adjacent intervals are
negligible. This completes the proof of Lemma 4.2.
Note that though we write the proof for Lemma 4.2 using X which comprises n records,
the lemma holds for any dataset Q comprising k > 1 records. We use this fact to help
prove Theorem 4.1 and Theorem 4.2 from the main text. As a reminder, we can write the
Gini index for any dataset Q comprising k elements (y1, . . . , yk) as
g(Q) =
Pk i=1
Pk
j=1 |yi − yj|
2n2y ̄ . (58)
Theorem 4.1. Given a set X = (x1, . . . , xn) of n real numbers in ascending order, where
each xi ∈ [L, U ], and an integer 1 < k < n, the k-maximal Gini subset can be achieved by
removing n − k consecutive elements in X.
Proof. First, consider k = 2. Clearly, the 2-maximal subset Q includes x1 and xn, the
smallest and largest elements of X. We obtain this set by removing the n − 2 consecutive
values from X excluding x1 and xn.
38

Next consider k = 3. The 3-maximal subset Q includes x1 and xn, since |x1 − xn| is
the largest possible contribution we can add to the numerator of (58). When adding a
third element, we want to make the numerator as large as possible to make g(Q) as large
as possible. This is done by including either x2 or xn−1. Thus, we obtain Q by removing
n − 3 consecutive “interior” elements from X.
To prove the case for k > 3, we use a proof by contradiction. Let the subset Q =
(y1, . . . , yk) of X have the largest Gini index among all subsets of X of size k. Assume that
Q contains one element ym, where m is the rank among the k elements in Q, that is not
among the k + 1 largest or k + 1 smallest values in X, in which case the lemma is false.
We will show that we can replace ym with some xi ∈ X to increase the Gini index. This
contradicts the assumption that Q is a k-maximal Gini subset; hence, we have a proof by
contradiction. All the elements of Q must be among the k largest or k smallest values in
X.
Under our posited assumption about the composition of Q, we can write it as (y1, . . . , yk) =
(x1, . . . , xl, ym, xu, . . . , xn). Here, xl and xu are the lower and upper endpoints of each run
of consecutive elements. We use l and u to refer to their indices.
We now consider Q−m = Q − ym. Lemma 4.2 ensures that, if we set add a point x with
rank m to Q−m, there is some mA such that g(Q+x) decreases when mA > m and g(Q+x)
increases when mA < m.
First, consider the case when mA > m. Then, adding any element x to Q−m selected
from {xl+1, . . . , xu−1} decreases g(Q+x). We therefore want to add x that results in the
smallest decrement of g(Q+x). Because of the monotonic decrease in (55) with x, we select
xu−1. Second, consider the case when mA < m. Then, adding any element x to Q−m
selected from {xl+1, . . . , xu−1} increases g(Q+x). We therefore want to add x that results
in the largest increment of g(Q+x). Because of the monotonic increase in (55) with x, we
therefore should select xl+1. When m = mA, we can select one of xl+1 or xu−1 in lieu of xm
and find a larger Gini index.
In any of these cases, we can find a Q+x comprising k elements such that g(Q+x) ≥ g(Q).
Thus, we have a contradiction: a Q that includes some ym not among the k smallest or k
largest values in X cannot be the k-maximal subset.
39

For showing the contradiction, we need not consider any other Q′ including more than
one element ym that is not among the k smallest or k largest elements. This is because,
for any such Q′, we have g(Q) ≥ g(Q′), since Lemma 4.2 indicates that we can increase
the Gini index by iteratively replacing elements in the “interior” with elements among the
k − 1 smallest or largest elements in X.
Using Theorem 4.1, we can search over all possible n − k sequences of consecutive
elements in X to find the k-maximal Gini subset. We now prove Theorem 4.2.
Theorem 4.2. Given a set X = (x1, . . . , xn) of n real numbers in ascending order, where
each xi ∈ [L, U ], and an integer 1 < k < n, the k-minimal Gini subset can be achieved by
removing a total of n − k consecutive elements from X so that Q comprises k consecutive
elements.
Proof. First consider k = 2. Clearly, the 2-minimal subset Q must include two consecutive
elements in X, e.g., Q = {xi, xi+1}. For any other Q′ that does not have two consecutive
elements of X, e.g., Q′ = {xi−1, xi}, we can decrease the Gini index by replacing one of the
elements, e.g., replace xi−1 with xi.
Now consider k ≥ 3 elements from X, i.e., we remove n − k elements from X. We use
a proof by contradiction. Assume that a subset Q = (y1, . . . , yk) of X has the smallest
Gini index among all subsets of X of size k. Assume that Q contains one element xm,
where m is the rank among the n elements in X, that is not consecutive with any of the
other k − 1 elements in Q. We will show that we can replace xm with some xi ∈ X that is
consecutive with the remaining elements in Q to decrease the Gini index. This contradicts
the assumption that Q is a k-minimal Gini subset; hence, we have a proof by contradiction.
All the elements of Q must be consecutively ordered in X.
Under our posited assumption about the composition of Q, we consider two possibilities
for Q, namely (y1, . . . , yk) = (xm, xl, . . . , xu) or (y1, . . . , yk) = (xl, . . . , xu, xm). Here, xl and
xu are the lower and upper endpoints of the set of consecutive elements in Q. We use l
and u to refer to their indices. For notational convenience, when m < (l − 1), we refer to
(xm, xl, . . . , xu) as Ql. When m > (u + 1) we refer to (xl, . . . , xu, xm) as Qu. Let Q−m be
the k − 1 element vector obtained by removing xm from either Ql or Qu.
40

First, consider adding some xi ∈ X such that i < l to Q−m, resulting in Q′. To compute
the possible changes in the Gini index ∆g(Q′), we can apply the expression in (54) with
m = 1. It is clear that ∆g(Q′) decreases the most when we make x in that expression as
large as possible while maintaining m = 1; that is, we add xl−1. Thus, when adding one
element to Q−m, the set of k consecutive integers (xl−1, . . . , xu) has the smallest Gini index.
However, this contradicts our assumption that Ql has the smallest Gini index. Therefore,
the assumption is untrue.
Likewise, we can adding some xi ∈ X such that i > u to Q−m, which we again call Q′. To
compute the possible changes in the Gini index ∆g(Q′), we can apply the expression in (54)
with m = n + 1. We see that ∆g(Q′) increases the least when we make x in that expression
as small as possible while maintaining m = n + 1; that is, we add xu+1. Thus, when adding
one largest element to Q−m, the set of k consecutive integers (xl, . . . , xu, xu+1) has the
smallest Gini index. However, this contradicts our assumption that Qu has the smallest
Gini index. Therefore, the assumption is untrue.
For showing the contradiction, we need not consider any other Q that includes more
than one element ym that is not consecutive with the remaining elements. This is because
for any such Q, we can decrease the Gini index by iteratively replacing the non-consecutive
elements with elements that are consecutive to smallest or largest elements in X.
Using Theorem 4.2, we can search over all possible k sequences of consecutive elements
in X to find the k-minimal Gini subset.
A.3 Expression for Gini Index from Section 4.4
In our algorithms, we compute the Gini index after perturbing k elements. To compute the
maximum Gini index, after we remove n − k consecutive elements with the first element
starting at rank s, with j elements set equal to L and k − j elements set equal to U , the
Gini index of the new dataset X(kt) equals
g(X(kt)) = Lj(j − n) + Cs + 2jPs + (Cn − Cs+k) − 2(k − j)(Pn − Ps+k) + U (k − j)(n − k + j)
Ps + Pn − Ps+k + jL + (k − j)U .
(59)
41

To compute the minimum Gini index, after we remove i elements from the lower tail and
k − i elements from the upper tail, with the remaining middle block running from rank
L = i + 1 to R = n − k + i, and then set all k removed elements equal to the value xj for
some j with L ≤ j ≤ R, the Gini index of the new dataset X(kt) equals
g(X(kt)) = 1
PR − Pi + k xj
2 [(Rj−1 − Ri) − i(Pj−1 − Pi)] − (n + 1)(Pj−1 − Pi)
+ k xj(2(j − i − 1) + k − n) + 2 [(RR − Rj−1) − (j − 1)(PR − Pj−1)]
+ (2(j − i − 1 + k) − n − 1)(PR − Pj−1) . (60)
These facts allow us to compute the Gini index with O(1) time costs.
A.4 Proof for Section 5
We use Proposition 5.1 in the main text to design several simulation studies. This propo
sition allows us to examine the effects on the differentially private Gini index of increasing
the IQ(X), and thereby the effects of increasing U − L, given a fixed value of the Gini
index. We now provide a proof of that proposition.
Proposition 5.1. Let X have n ≥ 2 non-negative elements with mean x ̄ = n−1 Pn
i=1 xi >
0. For any g ∈ [0, 1),
inf{IQ(X) : g(X) = g } =

  
  
4g, 0 ≤ g ≤ 1
2,
1
1−g, 1
2 < g < 1.
(61)
Proof. To begin, we note that IQ(X) = (U −L)/x ̄ and g(X) are both scale invariant. That
is, suppose we create Y = (y1, . . . , yn) = (cx1, . . . , cxn) for some constant c > 0, and we let
(Ly, Uy) = (cL, cU ). Then, IQ(Y ) = IQ(X) and g(Y ) = g(X). Hence, for this proposition,
we presume the data have x ̄ = 1. With x ̄ = 1, g(X) = P
i,j |xi − xj|/n2.
Consider X in which some fraction α of its elements equal L and the remaining fraction
(1 − α) of its elements equal U . We can obtain any g(X) by specifying (L, U ) accordingly.
In particular, we have
g(X) = α(1 − α)(U − L). (62)
42

For fixed g(X) = g, we can minimize IQ(X) = (U − L) by maximizing α(1 − α). Since
α(1 − α) ≤ 1/4, we have IQ(X) ≥ 4g. However, this solution only applies when 0 ≤ g ≤
1/2. When g > 1/2, setting α = 1/2 would force L = 1 − 2g < 0, which is infeasible since
by assumption the elements of X are non-negative. Setting L = 0, the constraint on x ̄
implies that U = 1/(1 − α). Hence, in these cases, IQ(X) = U = 1/(1 − α). Using (62),
we find IQ(X) = 1/(1 − g).
43

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:48.539Z
- **Text Length:** 78322 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 43 of 43
