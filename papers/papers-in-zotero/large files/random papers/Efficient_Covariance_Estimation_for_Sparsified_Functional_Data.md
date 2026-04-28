# PDF Document: Zheng et al. - 2025 - Efficient Covariance Estimation for Sparsified Functional Data.pdf

**File Path:** Zheng et al. - 2025 - Efficient Covariance Estimation for Sparsified Functional Data.pdf

**Processed Date:** 2026-02-10T18:13:56.963Z

**File Size:** 7759.86 KB

**Total Pages:** 39

**Extracted Pages:** 39

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3415

**Title:** Efficient Covariance Estimation for Sparsified Functional Data

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Efficient Covariance Estimation for Sparsified Functional Data
Sijie Zheng∗1, Fandong Meng2, and Jie Zhou2
1Center for Statistical Science and Department of Industrial Engineering, Tsinghua University
2Pattern Recognition Center, WeChat AI, Tencent Inc., China
zhengsj0212@gmail.com
Abstract
Motivated by recent work involving the analysis of leveraging spatial correlations in spar
sified mean estimation, we present a novel procedure for constructing covariance estimator.
The proposed Random-knots (Random-knots-Spatial) and B-spline (Bspline-Spatial) esti
mators of the covariance function are computationally efficient. Asymptotic pointwise of the
covariance are obtained for sparsified individual trajectories under some regularity conditions.
Our proposed nonparametric method well perform the functional principal components anal
ysis for the case of sparsified data, where the number of repeated measurements available
per subject is small. In contrast, classical functional data analysis requires a large number of
regularly spaced measurements per subject. Model selection techniques, such as the Akaike
information criterion, are used to choose the model dimension corresponding to the number
of eigenfunctions in the model. Theoretical results are illustrated with Monte Carlo simula
tion experiments. Finally, we cluster multi-domain data by replacing the covariance function
with our proposed covariance estimator during PCA.
1 Introduction
The goal of this paper is to estimate the covariance function of a set of vectors collected from
a distributed system of nodes. Dimension reduction has received increasing attention so as to
avoid expensive and slow computation. Stich et al. [2018] has investigated the converges rate of
Stochastic Gradient Descent (SGD) after applying sparsification or compression. Jhunjhunwala
et al. [2021] has focused on the mean function of a sparsified vector containing only a subset
of the elements of the original vector. In many practical applications, the vectors sent by the
nodes are correlated across different nodes and over consecutive rounds of iterative algorithms.
∗Work was done during an internship at the Pattern Recognition Center, WeChat AI, Tencent Inc., China.
1
arXiv:2511.18237v1 [stat.ME] 23 Nov 2025

Data takes the form {(xij, j/d) , 1 ≤ i ≤ n, 1 ≤ j ≤ d} in which xi(·) is a latent smooth tra
jectory for subject i,
xi(·) = m(·) + Zi(·), (1)
where the deterministic function m(·) denotes the common population mean, the random Zi(·)
subject-specific small variation with EZi(·) ≡ 0.
The trajectories xi(·) are identically distributed realizations of {x(t), t ∈ [0, 1]}, a continuous
stochastic process defined on [0, 1], with E supt∈[0,1] |x(t)|2 < +∞. x(·) can be decomposed as
x(·) = m(·) + Z(·), where Z (·) satisfies EZ(t) = 0. The covariance function of x(·) is denoted
by G (t, t′) = Cov {x(t), x (t′)} = Cov {Z(t), Z (t′)} , t, t′ ∈ [0, 1]. Functions m (·) and Zi (·) are
viewed as smooth functions of time t = j
d for j = 1, . . . , d, which is rescaled to domain [0, 1].
Let sequences {λk}∞
k=1 and {ψk}∞
k=1 be the eigenvalues and eigenfunctions of G (t, t′), re
spectively, in which λ1 ≥ λ2 ≥ · · · ≥ 0, P∞
k=1 λk < ∞, {ψk}∞
k=1 form an orthonormal basis of
L2[0, 1]. Mercer Lemma entails that the ψk ’s are continuous and continuous covariance func
tion G (t, t′) = P∞
k=1 λkψk(t)ψk (t′) , R G (t, t′) ψk (t′) dt′ = λkψk(t), t, t′ ∈ [0, 1]. The standard
process x(·) allows Karhunen-Lo`eve L2 representation x(·) = m(·)+ P∞
k=1 ξkφk(·), in which the
random coefficients, ξk, called functional principal component (FPC) scores, are uncorrelated
with mean 0 and variance 1. The rescaled eigenfunctions, φk, called FPC, satisfy φk = √λkψk
and R {x(t) − m(t)}φk(t)dt = λkξk, for k ≥ 1. Although the sequences {λk}∞
k=1, {φk}∞
k=1 and
{ξik }n,∞
i=1,k=1 exist mathematically, they are either unknown or unobservable.
1.1 Main contribution
The sparsity of the vector xi = (xi1, . . . , xid) corresponding to the i-th node is determined by
Js/d, and the value of Js is determined by the dimension and fluctuation of the original vector.
Akaike information criterion (AIC) is applied and simulation results reveal the superiority of
this data-driven method comparing to other sparse method with fixed number of nodes.
Jhunjhunwala et al. [2021] have proposed a “Random-knots” sparse method and computed
the accuracy of the sample mean function ˆm obtained by the sparsified vectors {hi} compared
with the mean estimator  ̄m using the original data {xi}. On the basis of their research, we
further propose the estimation covariance function Gˆ (·, ·) under the “Random-knots” sparse
method, and prove that Gˆ (·, ·) has good properties and can effectively approximates the sample
covariance function G ̄ (·, ·) computed from the original data. With carefully chosen function T (·)
to describe correlation between nodes, our Random-knots-Spatial estimator has the potential
to be better than Random-knots estimator, i.e. smaller mean squared error (MSE). We figured
out the optimal T ∗(·) for particular data set {xij}n,d
i=1,j=1.
2

For Js nodes of equispaced distribution, we propose a B-spline interpolation method to
describe the correlation between the dimensions of vectors, which can also be viewed as temporal
correlation. Compared with the sparsified vector obtained by method “Random-knots”, the
sparsified vector {hi} obtained by this two-step estimation method “B-spline” can effectively
approximate original trajectory {xi}. The B-spline (Bspline-Spatial) covariance estimator has
globally consistent convergence rate, enjoying better theoretical properties than the estimator
without interpolation.
The paper is organized as follows. Section 2 introduces four kinds of two-step B-spline
covariance estimtor and proves that the proposed estimator is asymptotically equivalent to
sample estimator without sparsification. Our covariance estimators are guaranteed to be the
positive semi-definite and estimator error can be drastically reduced when there are spatial and
temporal correlations. Section 2.3 deduces the convergence rate of FPC and FPC score based
on the convergence rate of covariance function. More detailed implementation procedures are
presented in Section 3. We present the simulation studies in Section 4 and applications to
machine translation in Section 4.2. All technical proofs are involved in the Appendix.
1.2 Related work
Considerable efforts have been made to analyze first-order structure of function-valued random
elements, i.e., the functional mean m (·). Estimation of mean function has been investigated in
Jhunjhunwala et al. [2021], Garg et al. [2014], Suresh et al. [2017], Mayekar et al. [2021] and
Brown et al. [2021], Zheng and Song [2025]. Works Cao et al. [2012] and Huang et al. [2022]
consider empirical mean estimation using B-spline estimation. The second-order structure of
random functions in the covariance function G (·, ·), the next object of interests. Cao et al.
[2016], Zhong and Yang and Zheng et al. [2025] have proposed tensor product B-spline covariance
estimator. To the best of our knowledge, spatial correlation across nodes has not yet been
considered in the context of sparsified covariance estimation. The research on Sparsification
has received more and more attention recently, for instance Alistarh et al. [2018], Stich et al.
[2018] and Sahu et al. [2021]. Sparsification methods mainly focus on sending only a subset of
elements of the vectors, yet no existing method combine sparsity method with B-spline fittin.
There have been striking improvement over sparse PCA. Berthet and Rigollet [2013b] and Choo
and d’Orsi [2021] have analyzed the complexity of sparse PCA; Berthet and Rigollet [2013a]
and Deshpande and Montanari [2014] have obtained sparse principle components for particular
data models. We study the convergence rate of eigenvalues and eigenfunctions of our covariance
estimators. Since our four estimation methods is original, the corresponding study of PCA is
proposed for the first time.
3

2 Main results
We consider n geographically distributed nodes, each node generates a d-dimensional vector
xi = [xi1, . . . , xid]⊤ for i = 1, . . . , n. The mean function m (·) could be estimated by simply
average samples of all nodes, for t, t′ ∈ [0, 1],
 ̄m(t) = 1
n
n
X
i=1
xi(t) (2)
and the averaged covariance estimator
G ̄ t, t′ = 1
n
n
X
i=1
(xi (t) −  ̄m (t)) xi t′ −  ̄m t′ (3)
For a non-negative integer q and a real number μ ∈ (0, 1], write H(q,μ)[0, 1] as the space of
μ-H ̈older continuous functions, i.e.,
H(q,μ)[0, 1] =
(
φ : [0, 1] → R | ∥φ∥q,μ = sup
x,y∈[0,1],x̸=y
φ(q)(x) − φ(q)(y)
|x − y|μ < +∞
)
We next introduce some technical assumptions.
Assumption 1: There exists an integer q > 0 and a constant μ ∈ (0, 1], such that the
regression function m(·) ∈ H(q,μ)[0, 1]. In the following, we denote p∗ = q + μ for simplicity.
Assumption 2: The covariance function satisfies sup(t,t′)∈[0,1]2 G (t, t′) < C, for some posi
tive constant C and mint∈[0,1] G (t, t′) > 0.
Assumption 3: There exists a constant θ > 0, such that as d → ∞, n = n(d) → ∞, n =
O dθ .
Assumption 4: The rescaled FPCs φk(·) ∈ H(q,μ)[0, 1] with P∞
k=1 ∥φk∥q,μ < +∞, P∞
k=1 ∥φk∥∞ <
+∞; for increasing positive integers {kn}∞
n=1, as n → ∞, P∞
kn+1 ∥φk∥∞ = O n−1/2 and
kn = O (nω) for some ω > 0.
Assumption 5: The FPC scores {ξik}i≥1,k≥1 are independent over k ≥ 1 and i.i.d over
i ≥ 1. The number of distinct distributions for all FPC scores {ξik}i≥1,k≥1 is finite, and
max1≤k<∞ Eξr0
1k < ∞ for r0 > 4.
Assumptions 1–5 are standard requirements for obtaining the mean and covariance estimators
in literature. Assumption 1 guarantee the orders of the bias terms of the spline smoothers for
m (·). Assumption 2 ensures the covariance G (·, ·) is a uniformly bounded function. Assumption
3 implies the number of points on each curve d diverges to infinity as n → ∞, which is a well
developed asymptotic scenario for dense functional data. It is important to notice that this
4

assumption is practically relevant since curves or images measured using new technology are
usually of much higher resolution than the previous generation. This directly leads to the
doubling of the amount of data recorded in each node, which is also the motivation of this
paper to propose sparsification before feature extraction, modeling, or other steps. Assumption
4 concerns the bounded smoothness of FPC and Assumption 5 ensures bounded FPC scores,
for bounding the bias terms in the spline covariance estimator.
The smoothness of our estimator is controlled by the number of knots, which increases to
infinity as specified in Assumption 6. This increasing knots asymptotic framework guaran
tees the richness of the basis. We design two sparsification methods: Random-Sparsification
and Fix-Sparsification, where Random-Sparsification randomly selects Js component in the d
dimensional vector of each node, and Fix-Sparsification selects Js component at fixed position.
The proportion Js
d depicts the difference of data volume before and after sparsification, reflecting
the degree of sparsification. The value of Js is completely determined by the original data.
Assumption 6: The number of interior knots Js ≍ dγCd for some τ > 0 with Cd +
C −1
d = O (logτ d) as d → ∞, and for Random-Sparsification: γ ≥ 1 − θ
2 ; for Fix-Sparsification:
γ> θ
2p∗ + 2θ
r0p∗ .
These assumptions are mild conditions that can be satisfied in many practical situations.
One simple and reasonable setup for the above parameters q, μ, θ, p, γ can be as follows:
q + μ = p∗ = 4, θ = 1, p = 4, γ = 5/8, Cd ≍ log log d. These constants are used as defaults to
construct candidate pool for the number of knots Js in Section 3.1 for two sparsification schemes.
2.1 Random-Sparsification
In the case of randomly selected points for sparsification at each node, we propose two kinds of
estimation of covariance function: Random-knots and Random-knots-Spatial estimator, where
the samples of constructing Random-knots estimator at different nodes are assumed to be gener
ated independently, and Random-knots-Spatial estimator further takes the correlation between
nodes into account on the basis of Random-knots estimator.
Random-knots estimator For node i, hi = [hi1, . . . , hid]⊤ is a sparsified version of the
corresponding data vector xi = [xi1, . . . , xid]⊤. The estimator generated from h1, . . . , hn is
called sparsified estimator. If {hi}n
i=1 are sparsified vectors randomly containing Js elements of
the original vector, i.e. P (hij = 0) = 1 − Js
d , P (hij = xij ) = Js
d , we obtain the Random-knots
5

mean and covariance estimator by replacing xi in (2), (3) by hi,
ˆm = 1
n
d
Js
n
X
i=1
hi (4)
Gˆ = 1
n
d
Js
2n
X
i=1
hi −  ̄h hi −  ̄h ⊤ (5)
The following theorem states the mean squared error (MSE) of the proposed covariance estimator
E∥Gˆ − G ̄∥2 tends to zero as the number of nodes goes to infinity. The proof is analogous to
Lemma 1 in Jhunjhunwala et al. [2021] where MSEs of mean ˆm and covariance Gˆ are defined as
MSEm = 1
d
d
X
j=1
(  ̄mj − ˆmj)2 , MSEG = 1
d2
d
X
j,j′=1
G ̄jj′ − Gˆjj′
2
Figure 1: The Random-knots method to estimate mean and covariance function with n = 3 number of nodes, left: origin vectors {xi}3
i=1 with dimension d = 6, right: sparsified vectors
{hi}3
i=1 and the number of randomly chosen non-zero elements for each vector is Js = 3.
Theorem 1. (Random-knots Estimation Error). Under Assumptions 1–5, MSE of estimate Gˆ
produced by the Random-knots sparsification scheme described above is given by
E∥Gˆ − G ̄∥2 = 1
n2
d
Js
2
−1
!
R1
where R1 = Pn
i=1 ∥xi −  ̄m∥4, the sum of the squared magnitudes of the data vectors.
Assumption 6 further guarantees that Gˆ − G ̄
2
= Op n−1/2 .
Random-knots-Spatial estimators To further increase the accuracy of Random-knots
estimators, Jhunjhunwala et al. [2021] has introduced Mj to describe the correlation between
nodes. Mj is the number of nodes that send their j-th coordinate. It is obvious that Mj is
a binomial random variable that takes values in the range {0, 1, . . . , n} with P (Mj = m) =
n
m pm (1 − p)n−m with p = Js
d . If Mj = 0, it means that none of the n nodes has drawn the
j-th element, and the information about position j is completely missing.
6

If the vectors of n nodes are highly correlated, we can still obtain an accurate estimator
even if few points are selected at position j. Consider a special case where each node has the
same vector, i.e., x1 = x2 = . . . = xn. The j-th coordinate of mean can be exactly estimated
as ˆmj = 1
Mj
Pn
i=1 hij whenever Mj > 0. And the exact variance function at position j is
Gˆjj′ = 1
Mj
Pn
i=1 hij −  ̄hj
2, the covariance function is Gˆjj′ = 1
Mj
Pn
i=1 hij −  ̄hj hij′ −  ̄hj′ ,
j′ ̸= j. Simple mathematical derivation implies that  ̄hj = ˆmj under this situation. Hence, the
scaling parameter Js
d in (1) is not necessary.
However, if the correlation between nodes is low, too small Mj value may lead to a large
MSE of estimator. For instance, the d-dimension vector corresponding to the other n − 1 nodes
is a sine distribution of dimension xij = sin 2π j
d , 1 ≤ i ≤ n − 1, 1 ≤ j ≤ d and only one
node is a cosine distribution xnj = cos 2π j
d or the vector has a jump in the j-th component
xnj = sin 2π j
d + δ, xnj′ = sin 2π j′
d , δ > 0, j′ ̸= j, which can be regarded as an outlier. In
special case that only the point of cosine distribution is selected for position j, the estimation
of this position is bound to have a large deviation. Therefore, the correlation between nodes is
an important indicator to measure the accuracy of estimator.
We propose the Random-knots-Spatial estimator wherein the fix scaling parameter Js
d is
replaced by a function of Mj such that the level of spatial correlation between the vectors is
taken into account. In particular, the mean estimator for j-th element is
ˆmj = 1
n
β ̄
T (Mj)
n
X
i=1
hij, (6)
And covariance function at position (j, j′) is
Gˆjj′ = 1
n
d
Js
2 EMj |Mj ≥1 1
T (Mj ) EMj′ |Mj′ ≥1 1
T (Mj′ )
−1
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′
=1
n
β ̄2
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′ (7)
where function T (Mj) changes the scaling of hij depending on Mj, the number of nodes that
send the j-th coordinate. And β ̄ is
β ̄ = Js
d EMj |Mj ≥1
1
T (Mj)
−1
=
n
X
r=1
Js dT (r)
n−1
r−1
Js d
r−1
1 − Js
d
n−r !−1
(8)
Jhunjhunwala et al. [2021] has proved that the Random-knots-Spatial mean estimator in (6)
7

is unbiased. On their basis, the following proposition proves the unbiasedness of covariance
estimator.
Proposition 1. (Random-knots-Spatial estimator Unbiasedness). Under Assumptions 1–6, we
have
EGˆ = G ̄.
This proposition is equivalent to prove EGˆjj′ = 1
n
Pn
i=1 Gijj′. One trick is to introduce the
random variable ξij to aid in the computation of conditional expectations EMj|Mj≥1 (·). In
dicator ξij is 1 or 0, depending on whether hij = xij or not, leading to EMj|Mj≥1,Mj′≥1 (·) =
EMj |ξij =1,ξij′ =1 (·), EMj |Mj =0,Mj′ ≥1 (·) = EMj |ξij =0,ξij′ =1 (·), EMj |Mj =0,Mj′ =0 (·) = EMj |ξij =0,ξij′ =0 (·).
Event ξij = 1, ξij′ = 1 happens with probability Js
d
2, event ξij = 0, ξij′ = 1 happens with
probability Js
d 1 − Js
d and event ξij = 0, ξij′ = 0 happens with probability 1 − Js
d
2.
Proposition 1 infers that E∥Gˆ − G ̄∥2 can be directly computed as
E∥Gˆ − G ̄∥2 =
d
X
j,j′=1
E Gˆjj′ − G ̄jj′
2
=
d
X
j,j′=1
E1
n
β ̄2
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′ − 1
n
n
X
i=1
(xij −  ̄mj ) xij′ −  ̄mj′
!2
=1
n2
d
X
j,j′=1
E
β ̄2
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′
!2
−1
n2
n
X
i=1
(xij −  ̄mj ) xij′ −  ̄mj′
!2
The following theorem to measure the quality of Random-knots-Spatial estimator,
Theorem 2. (Random-knots-Spatial Estimation Error). Under Assumptions 1–5, MSE of es
timate Gˆ produced by the Random-knots-Spatial family is given by
E∥Gˆ − G ̄∥2 = 1
n2
d
Js
+ c1
2
−1
!
R1 + 1
n2 (1 − c2)2 − 1 R2 (9)
where R1 = Pn
i=1 ∥xi −  ̄m∥4 and R2 = 2 Pn
i=1
Pn
k=i+1
D
(xi −  ̄m)2 , (xk −  ̄m)2E
. The parameters
c1, c2 depend on the choice of T (·) as
c1 = β ̄2
n
X
r=1
Js dT (r)2
n−1
r−1
Js d
r−1
1 − Js
d
n−r
−d
Js
c2 = 1 − β ̄2
n
X
r=2
Js2
d2T (r)2
n−2
r−2
Js d
r−2
1 − Js
d
n−r
where β ̄ is defined in (8).
8

Assumption 6 further guarantees that Gˆ − G ̄
2
= Op n−1/2 .
The result in (9) can be further simplify as
E∥Gˆ − G ̄∥2 = 1
n2
d
Js
2
+ c2
1 + 2c1
d
Js
−1
!
R1 + 1
n2 c2
2 − 2c2 R2
Note that R1 + R2 = Pn
i=1 (xi −  ̄m)2 2
≥ 0 and Pn
i=1 (xi −  ̄m)2 2
≤ nR1, R1 ≥ 0, R2 ≥ 0, it
follows that R2
R1 ∈ [0, n − 1]. MSE of Random-knots-Spatial covariance estimator is guaranteed
to be lower than the Random-knots covariance estimator whenever
c2
1 + 2c1
d
Js
R1 < 2c2 − c2
2 R2 i.e. R2
R1
> c21 + 2c1 d
Js
2c2 − c22
.
In general, since the MSE depends on the function T (·) through c1 and c2, we can find the T (·)
that ensures that Random-knots-Spatial estimate is more accurate than Random-knots estimate.
And finding optimal T (·) that minimizes MSE as shown below.
Theorem 3. (Random-knots-Spatial minimum MSE) The estimator within the Random-knots
Spatial estimators that minimizes the MSE in (9), can be obtained by setting
T ∗(r) = 1 + R2
R1
r−1
n−1
2
!1/2
, r = 1, . . . , n. (10)
Two settings are considered below.
Random-knots-Spatial (Min) is exactly Random-knots estimator. Random-knots estimator
reaches the minimum MSE when R2/R1 = 0, which means that R2 = 2 Pn
i=1
Pn
k=i+1
D
(xi −  ̄m)2 , (xk −  ̄m)2E
=
0 while R1 = Pn
i=1 ∥xi −  ̄m∥4 > 0. The optimal MSE occurs when the de-meaned node vectors
{xi −  ̄m}n
i=1 are orthogonal to de-meaned vector {xk −  ̄m}n
k=i+1 and vectors of n nodes are not
constant. In this case, T ∗(r) = 1, ∀r in (10) reaching the minimum value. Hence, when all
de-meaned vectors are orthogonal, i.e. no correlation between the nodes, the Random-knots
covariance estimator is the best estimator. However, when nodes are correlated (R2/R1 ̸= 0),
Random-knots estimator is not the best. It is necessary to compute R2/R1 based on different
node vectors {xi}n
i=1, and further obtain estimator corresponding to value of T ∗(·).
Random-knots-Spatial (Max) A special case is that xi = xj, 1 ≤ i, j ≤ n. In this case,
R2/R1 = n − 1, and T ∗(r) = 1 + (r−1)2
n−1
1/2
gives the optimal estimator. Random-knots
Spatial (Max) estimator corresponds to the maximum value of R2/R1 and the highest correlation
between nodes. Thus, the optimal estimators are very different when the vectors are uncorrelated
as opposed to when the vectors are highly correlated.
9

Jhunjhunwala et al. [2021] has claimed that optimal Random-knots-Spatial mean estimator
is obtained when T ∗(r) = 1 + R2
R1
r−1
n−1 . The optimal setting of mean estimation cannot guarantee
the optimal estimation of covariance function. Therefore, we need to figure out how to set spatial
function T ∗ (·) depending on the specific task. For tasks involving only mean function estima
tion, such as K-means, the setting proposed by Jhunjhunwala et al. [2021] should be adopted.
However, for tasks involving only covariance function estimation, such as PCA, the MSE of
covariance statistics set as (10) is smaller. The mean and covariance functions can reflect the
distribution characteristics of data. It is significant to estimate the covariance function accu
rately so as to improve the efficiency of the task and accurate eigenvalues and eigenfunctions can
be further obtained. In this way, the extracted features can improve the accuracy of downstream
tasks of classification and regression.
In fact, the large number of nodes n and dimension of vector d yield the amount of computa
tion for R1 and R2. We propose the following Random-knots-Spatial (Avg) as a default setting,
and effectiveness is shown in simulation studies.
T ̃(r) = 1 + n
2
r−1
n−1
2
!1/2
, r = 1, . . . , n.
2.2 Fix-Sparsification
We retain elements at Js fixed position and set the rest to zero. This method of dimensionality
reduction only utilizes values at a fixed number of positions in the vector in each iteration.
Although the unbiased estimate of each node vector is obtained after scaled by a factor Js
d , it
enjoys the following disadvantages: (i) each step can only leverages the subset of size n × Js
of the origin data set of size n × d where Js ≪ d, and the subset selected is fixed and will not
change along with training steps. This results in a serious loss of information, and the accuracy
of the estimates does not increase with the number of training sessions. (ii) The approximate
quality of the estimator depends on the selected points, especially if the selected points deviate
from the overall distribution, then the MSE of the estimator is difficult to control. (iii) Even
if the suitable fixed points for the vector of node 1 are determined by adding penalty terms
or artificially selected methods, there is no guarantee that these fixed points are correct for a
different node 2.
B-spline estimator B-spline interpolation reduces the loss of information by fitting the values
between fixed points. A reasonable alternative to interpolation is to consider the correlation
between the elements in the vector, and the closer the points are to each other, the greater the
correlation. It is worth mentioning that the choice of basis functions and other fitting methods
(polynomial, kernel and wavelet smoothing) do not affect the large-sample theories, according
to our proofs. We choose B-spline basis functions because they are more computationally effi
10

Figure 2: The fix-knots method for n = 3 nodes, left: origin vectors {xi}3
i=1 with dimension
d = 6, right: sparsified vectors {hi}3
i=1 and determine Js = 3 non-zero values at three fixed positions for each vector.
cient and numerically stable in finite samples compared with other basis functions such as the
truncated power series and trigonometric series, which is very suitable for analyzing large data
sets without uniform distribution. (see Schumaker [2007]).
Denote by {tl}Js
l=1 a sequence of equally-spaced points, tl = l/ (Js + 1) , l ∈ {1, . . . , Js} , 0 <
t1 < · · · < tJs < 1, called interior knots, which divide the interval [0, 1] into (Js + 1) equal
subintervals I0 = [0, t1) , Il = [tl, tl+1), l ∈ {1, . . . , Js − 1}, IJs = [tJs, 1]. For any positive
integer p, let t1−p = · · · = t0 = 0 and 1 = tJs+1 = · · · = tJs+p be auxiliary knots. Let S(p−2) =
S(p−2)[0, 1] be the polynomial spline space of order p on Il, l ∈ {0, . . . , Js}, which consists of
all (p − 2) times continuously differentiable functions on [0, 1] that are polynomials of degree
(p − 1) on subintervals Il, l ∈ {0, . . . , Js}. We denote by {Bl,p(x), 1 ≤ l ≤ Js + p} the pth order
B-spline basis functions of S(p−2), hence S(p−2) =
n
PJs+p
l=1 λl,pBl,p(x) | λl,p ∈ R, x ∈ [0, 1]
o
.
The i th unknown trajectory ηi(x) is estimated by using the following formula
hi(·) = argmin
g(·)∈S (p−2)
d
X
j=1
{xij − g (xj)}2 =
Js+p
X
l=1
ˆλl,p,iBl,p(·), 1 ≤ i ≤ n, (11)
that is the coefficients satisfy
λˆ1,p,i, . . . , λˆJs+p,p,i
⊤
= argmin
(λ1,p,...,λJs+p,p)∈RJs+p
d
X
j=1
(
xij −
Js+p
X
l=1
λl,pBl,p (j/d)
)2
.
Decomposition The design matrix for B-spline regression is
B = {B(1/d), . . . , B(d/d)}⊤ =

  
B1,p(1/d) · · · BJs+p,p(1/d)
... · · · ...
B1,p(d/d) · · · BJs+p,p(d/d)

  
.
11

Denote by Vn,p the empirical inner product matrix of B-spline basis {Bl,p(t)}Js+p
l=1 , i.e.
Vn,p = Bl,p, Bl′,p d
Js+p
l,l′=1 = d−1B⊤B.
The spline estimator hi(·) allows representation hi(·) = d−1B(·)⊤Vn−,1pB⊤xi = ˆm(·)+Zˆi(·), where
ˆm(·) = d−1B(·)⊤V−1
n,pB⊤m,
Zˆi(·) = d−1B(·)⊤V−1
n,pB⊤Zi.
The mean and covariance is obtained by plugging in the newly defined {hi}n
i=1 in (4) and (5).
Figure 3: The B-spline interpolation method for n = 3 nodes, left: origin vectors {xi}3
i=1 with
dimension d = 6, right: sparsified vectors {hi}3
i=1 and determine Js = 3 non-zero values at three fixed positions for each vector, the remaining positions are replaced by B-spline interpolation.
The next theorem states the convergence rate of the B-spline estimators.
Theorem 4. (B-spline mean/covariance Estimation Error). Under Assumptions 1–6, the B
spline estimator ˆm(·) is asymptotically equivalent to  ̄m(·) up to order n1/2 and the same thing
is true for covariance, i.e., as n → ∞,
∥ ˆm −  ̄m∥∞ = sup
t∈[0,1]
| ˆm(t) −  ̄m(t)| = Oa.s. n−1/2 (12)
∥Gˆ − G ̄∥∞ = sup
t,t′∈[0,1]
Gˆ t, t′ − G ̄ t, t′ = Op n−1/2 . (13)
Bspline-Spatial estimators We replace {hij}n,d
i,j=1 in (6), (7) by their corresponding B
spline estimators in (11). The estimators not only takes into account the correlation between
nodes, but also the correlation of vectors within a single node, which can minimize the informa
tion loss of original data.
Theorem 5. (Bspline-Spatial mean/covariance Estimation Error). Under Assumptions 1–6,
the Bspline-Spatial estimator ˆm(·) is asymptotically equivalent to  ̄m(·) up to order n1/2 and the
12

same thing is true for covariance, i.e., as n → ∞
∥ ˆm −  ̄m∥∞ = sup
t∈[0,1]
| ˆm(t) −  ̄m(t)| = Op n−1/2
∥Gˆ − G ̄∥∞ = sup
t,t′∈[0,1]
Gˆ t, t′ − G ̄ t, t′ = Op n−1/2 .
2.3 Convergence of Principal Component
The estimates of eigenfunctions and eigenvalues is obtained by solving the following eigenequa
tions,
Z1
0
Gˆ x, x′ ψˆk x′ dx′ = λˆkψˆk (x) . (14)
The following theorem obtain the consistency of λˆk in (14) for λk. By choosing φˆk appropriately
when λk is of multiplicity 1, ψˆk converges to ψk uniformly on the bounded interval [0, 1].
Theorem 6. As n → ∞, for k ∈ N,
λˆk − λk = Op n−1/2 (15)
ψˆk − ψk 2
= Op n−1/2 (16)
ψˆk − ψk ∞
= Op n−1/2 . (17)
Although, in theory, the Karhunen-Loe ́ve representation of the covariance function consists of
an infinite number of terms. In applications, it is typical to truncate the spectral decomposition
to an integer chosen so as to account for some predetermined proportion of the variance. One
can select the number of principal components using the Akaike information criterion (AIC; Yao
et al. [2005]) or Bayesian information criterion (BIC; Li et al. [2013]).
According to R {xi (t) − m (t)} φk (t) dx = λkξik, one obtains
ξik = λ−1/2
k
Z
{xi (t) − m (t)} ψk (t) dx.
Similarly, ξˆik = ˆλ−1/2
k
R {hi (t) − ˆm (t)} ψˆk (t) dt. The following theroem provides the conver
gence rate of FPC scores:
Corollary 1. As n → ∞
max
1≤i≤n
ξˆik − ξik = Op n−1/2 .
13

As discussed in Dauxois et al. [1982], for the eigenvalue {λk}κ
k=1 of covariance G (·, ·) with
multiplicity greater than 1, the orthonormal basis of the eigenmanifold corresponding to {λk}κ
k=1
may be obtained by rotation, that is the specified eigenvector minus −1. Therefore, after cal
culating the eigendecomposition, the unique form of the eigenfunction should be determined by
minimizing the estimation error. The proposed convergence property are for each corresponding
eigenvectors that have been rotated.
We measure estimation error through the following loss,
L(φˆk, φk) ≡ 1
2 min
s∈{+1,−1}
∥φˆk − sφk∥2
= 1 − |⟨φˆk, φk⟩|
for φˆk, φk ∈ Sκ−1 = {v ∈ Rκ : ∥v∥ = 1}. Notice the minimization over the sign s ∈ {+1, −1}.
This is required because the estimated principal components
nφˆk
oκ
k=1
are only identifiable up
to a sign. Analogous results can obtained for alternate loss functions such as the projection
distance:
Lp(φˆk, φk) = √12
φˆk φˆ⊤
k − φkφ⊤
k2
=
q
1 − ⟨φˆk, φk⟩2.
3 Implementation
In this section, we state some issues that need to be addressed when constructing estimation for
covariance function and related eigenvalues and eigenvectors.
3.1 Knots selection
The number of knots is often treated as an unknown tuning parameters, and the fitting results
can be sensitive to it. Since the in-sample fitting errors cannot gauge the prediction accuracy
of the fitted function, we select a criterion function that attempts to measure the out-of-sample
performance of the fitted model. Minimizing the Akaike information criterion (AIC) is one com
putationally efficient approach to selecting smoothing parameters that also has good theoretical
properties.
As the vector dimension of each node increases, the number of knots needs to be selected
will increase accordingly, so as to comprehensively describe the change trend of the vector. If
d = 1, it’s enough to select Js = 1, while not enough if d = 100. Hence we set the candidate
pool for Js is all the integers between 1 and Js∗, where Js∗ = min{10, ⌊d/2⌋}. Specifically, given
any data set (xij, j/d)n,d
i=1,j=1 from model (1), denote the estimator for the j-th response xij by
hij (J), for j = 1, . . . , d. The trajectory estimate hi depends on the knot selection sequence, as
the sparsified vector with a lot of zero components for Random-knots (Random-knots-Spatial)
14

estimators and equispaced spline interpolation vector for B-spline (Bspline-Spatial) estimators.
Then, Jˆs,i for the i-th curve is the one minimizing the AIC value
Jˆs,i = arg min
J∈[1,Js∗ ]
AIC (J) , i = 1, . . . , n
where AIC (J) = log(RSS/d)+2 (J + p) /d, with the residual sum of squares RSS = Pd
j=1 {xij − hij (J )}2.
Then, Jˆs is set as the median of
nJˆs,i
on
i=1
. The value of p depends on what method is used to
get the sparsified trajectory estimate hi where we set p = 4 for cubic spline, p = 2 for linear
spline and p = 0 for estimates that do not involve interpolation.
The trajectory estimator hi(j/d) is obtained by using the selected number of knots Jˆs, and
the mean estimator ˆm(·) is computed from (4), the covariance estimator Gˆ(·, ·) is computed from
(5).
3.2 Truncation
One truncates the spectral decomposition at an integer κ which is selected according to the
standard criteria called ”pseudo-AIC” in Mu et al. [2008] that the number of eigenvalues can
explain 95% of the variation in the data. That is to say,
κ = argmin1−p≤l≤Js



l
X
k=1−p
ˆλk/
Js
X
k=1−p
ˆλk > 0.95



where
nλˆk
oJs
k=1−p
are all nonnegative eigenvalues estimated in FPC analysis. This simple method
of counting the percentage of variation explained can be used to choose the number of principal
components.
4 Simulation
We conduct simulation studies to illustrate the finite-sample performance of the proposed meth
ods.
4.1 Accuracy of covariance estimator
The data are generated from the following model:
xij = m(j/d) +
∞
X
k=1
ξikφk(j/d), j ∈ {1, . . . , d}, i ∈ {1, . . . , n}
15

where m(t) = sin{2π(t−1/2)}, φk(t) = √λkψk(t) with λk = (1/4)[k/2], ψ2k−1(t) = √2 cos(2kπt),
ψ2k(t) = √2 sin(2kπt), k ≥ 1. ξik are i.i.d. standardized normal distribution. The infinite se
ries G (t, t′) = P∞
k=1 φk(t)φk (t′) is well approximated by finite sum G (t, t′) = Pk0
k=1 φk(t)φk (t′)
where k0 = 1000, as the fraction of variance explained (FVE) criteria, FVE = P1000
k=1 λk/ P∞
k=1 λk >
1 − 10−10, see Yao et al. [2005]. We fix the number of nodes n is 200 and the value range of
dimension of vector d is set a point every 25 points between 50 and 400. Similarly, n is set to
vary equally between 50 and 400 with fixed d = 200. Each simulation is repeated 1000 times.
Throughout this section, the covariance function is obtained by p = 4 for B-spline (Bspline
Spatial) estimator and p = 0 for Random-knots (Random-knots-Spatial) estimator, with the
number of knots selected using the AIC given in Section 3.1.
We examine the accuracy of the proposed two-stage estimation procedure. The average mean
squared error (AMSE) is computed to assess the performance of the covariance estimators Gˆ(·, ·)
and G ̄(·, ·) defined in (5) and (5), respectively. The AMSE of Gˆ(·, ·) is defined as
AMSE Gˆ = 1
1000d2
1000
X
s=1
d
X
j,j′=1
nGˆs j/d, j′/d − G ̄ j/d, j′/d
o2
,
where Gˆs represents the values of the s-th replication of sample covariance Gˆ(·, ·) in(5) and
G ̄s represents the values of the s-th replication of G ̄(·, ·) in(5). Furthermore, given the true
covariance function G (·, ·), we obtain the MSE between G ̄ (·, ·) and G (·, ·) as
AMSE G ̄ = 1
1000d2
1000
X
s=1
d
X
j,j′=1
G ̄s j/d, j′/d − G j/d, j′/d 2 .
In the left panel of Figure 4, “d: Random-knots” stands for the curve of AMSE Gˆ as d
changes where Gˆ is the Random-knots estimator of covariance function. “n: Random-knots
Spatial” stands for the curve of AMSE Gˆ as n changes where Gˆ is the Random-knots-Spatial
covariance estimator. The other two curves in left panel are defined similarly. The AMSE(Gˆ)
is getting smaller when n is increasing, consistent with Theorems 1 and 2 that the Random
knots and Random-knots-Spatial estimators Gˆ converge to G ̄ at a rate of Op n−1/2 . The
AMSE(Gˆ) also shows a slow downward trend with the increase of d, mainly because the number
of selected nodes Js increases with the increase of d, which affects the accuracy of the covariance
estimator. By setting T (·) the Random-knots-Spatial (Avg), the AMSE of estimator that takes
spatial factor into account is generally lower than estimator that does not.
The middle panel shows that the changing pattern of AMSEs of B-spline and Bspline-Spatial
covariance estimators are similar as in left panel confirming Theorems 4 and 5. The accuracy of
the estimator obtained by spline interpolation is significantly improved on the whole. The right
panel stands for the curve of AMSE G ̄ as d and n change. The simulation result confirms the
16

fact that the convergence rate of G ̄ to G is Op n−1/2 .
Figure 4: Left, middle: AMSE Gˆ as a function of d or n. Right: AMSE G ̄ as a function of
d or n.
Figure 5 shows that all four proposed covariance estimator can well describe the shape of
G (t, t′) for t, t′ ∈ [0, 1]. The deviation of Random-knots and Random-knots-Spatial estimators is
large on the diagonal t = t′ and the smoothness of the surfaces are poor. The accuracy of B-spline
estimator is significantly improved, with only slight deviation at the boundary points. On the
basis of Random-knots estimator, Random-knots-Spatial estimator further considers the spatial
factor, so that the estimation accuracy of boundary points is improved but the smoothness of
the surface is sacrificed to some extent.
4.2 Accuarcy of principle components
The AMSE of eigenvalue λˆk ’s and the eigenfunction φˆk ’s are defined as
AMSE(λˆ) = 1
1000κ
1000
X
s=1
κ
X
k=1
λˆks − λk
2
,
AMSE(φˆ) = 1
1000dκ
1000
X
s=1
d
X
j=1
κ
X
k=1
n φˆks − φk (j/d)
o2
,
where ˆλks, φˆks represent the values of the s-th replication of ˆλk, φˆk in (14).
The first row of Figure 6 reveals that AMSE λˆ decreases with the increase of n, but
the change with d is small, which is in accordance with Theorem 6. λˆk is the eigenvalue of
four different covariance estimators and averaged sample covariance. The second row of Figure
6 confirms that AMSE φˆ exhibits the same regularity as AMSE ˆλ . Whether or not to
consider spatial factors has greater impact on the accuracy of eigenvector than eigenvalue.
In order to visualize the specific form of principle components. Figure 7 illustrates the first
17

(a) G (t, t′) (b) G ̄ (t, t′)
(c) Random-knots Gˆ (t, t′) (d) Random-knots-Spatial Gˆ (t, t′)
(e) B-spline Gˆ (t, t′) (f) Bspline-Spatial Gˆ (t, t′)
Figure 5: Plots of true covariance, averaged covariance and four different covariance estimators.
18

Figure 6: Row 1: AMSE ˆλ as a function of d or n. Row 2: AMSE φˆ as a function of d or n.
five eigenfunctions which account for 68.2%, 17.0%, 4.3%, 4.3%, 4.0% of the total variation.
The first figure shows a large difference between the early, middle and late stages of the curve,
depicting the trend term of the covariance function. The other four graphs have great fluctua
tions through the whole curves, and the frequency of fluctuations increases with the increase of
k. They describe the overall fluctuation characteristics of the covariance function.
5 Application
Pre-trained language models are indeed very useful in clustering sentence representations by
domains in an unsupervised manner, we now seek to harness this property for a downstream
task – domain data selection for machine translation.
To evaluate the unsupervised domain clustering we use the multi-domain corpus proposed
in Koehn and Knowles [2017], as it was recently adopted for domain adaptation research in
NMT (Hu et al. [2019], Mu ̈ller et al. [2019], Dou et al. [2019a], Dou et al. [2019b], Aharoni and
Goldberg [2020]). The dataset includes parallel text in German and English from five diverse
domains: subtitles , medical text, legal text, translations of the Koran, and IT-related text,
available via OPUS (Aulamo and Tiedemann [2019]). Data split as discussed in Aharoni and
Goldberg [2020].
We encode multi-domain data at the sentence level into vector representations. For MLM
based models we use BERT Devlin et al. [2018], DistilBERT Sanh et al. [2019] and RoBERTa
19

Figure 7: Plots of the k = 1, . . . , 5 eigenfunctions of true covariance and four covariance estimators.
Liu et al. [2019] (in both the base and large versions). For autoregressive models we use GPT-2
Radford et al. [2018] and XLNet Yang et al. [2019]. In all cases we use the implementations from
the HuggingFace Transformers toolkit Wolf et al. [2019]. We also evaluated a simple baseline
using representations from word2vec Mikolov et al. [2013], where we average-pooled the word
vectors for the tokens that were present in the model vocabulary.
We then cluster these vector representations for each model using a Gaussian Mixture Model
(GMM) with k = 5, 10, 15 pre-defined clusters. To accelerate the clustering process and enable
visualization we also experiment with performing dimensionality reduction with PCA over the
sentence vectors before clustering them. We experiment with to test how adding flexibility would
improve the domain clustering accuracy.
We used 2000 distinct sentences from each domain. To evaluate whether the resulting clusters
indeed capture the domains the data was drawn from we measure the clustering purity, which is
a well-known metric for evaluating clustering (Schu ̈tze et al. [2008]). To measure the clustering
purity, we assign each unsupervised cluster with the most common true domain in the sentences
assigned to that cluster, and then compute the accuracy according to this majority-based cluster
domain assignment.
Tables 2–4 report unsupervised domain clustering as measured by purity for the different
models using original data without sparsification. “-” represents result of modeling directly
using the original vector and “PCA” result of data modeling after dimensionality reduction
using PCA. “RK”(“RK-Spat”) refers to the Random-knots (Random-knots-Spatial) covariance
20

Table 1: Serial number and corresponding pre-training model for representations.
Number Model Number Model
1 word2vec 5 RoBERTa-base 2 BERT-base 6 RoBERTa-large 3 BERT-large 7 GPT-2 4 DistilBERT 8 XLNet
Table 2: Purity for the different models using original data without sparsification.
12345678 - 45.93 85.81 72.25 69.99 64.91 69.84 37.82 30.35 k = 5 PCA 58.77 87.98 88.00 87.23 79.13 81.61 70.25 56.31 - 65.80 85.43 86.54 85.10 81.06 80.78 38.66 32.57 k = 10 PCA 69.66 88.76 87.53 86.17 86.64 89.07 85.34 72.47 - 76.26 87.92 87.47 87.29 83.71 80.43 41.50 50.65 k = 15 PCA 76.91 89.26 89.55 87.89 86.48 88.92 81.56 73.09
function to calculate eigenvalues and eigenvectors in the process of PCA dimension reduction
and “BS” (“BS-Spat”) the B-spline (Bspline-Spatial) covariance function. Eight pre-training
models are listed in Table 1.
The MLM-based models dominated in all cases over word2vec and the auto-regressive models.
This may be explained by the fact that the MLM-based models use the entire sentence context
when generating the representations for each token, while the auto-regressive models only use
the past context, and word2vec uses a limited window context.
Using PCA improved performance in most cases and especially for the auto-regressive mod
els, although the results for the MLMs remain high in both cases, suggesting that these models
encode the information very differently. The four methods we proposed to sparsify the covari
ance matrix do not sacrifice the purity of the domain-clustering task on the basis of improving
the computational speed, and even slightly improve in some cases, reflecting our sparsification
methods are efficient and effective.
6 CONCLUSIONS AND LIMITATION
In this paper, Random-knots and Random-knots-Spatial estimators are proposed for the co
variance of functional data, where data is sparsified by randomly intercepting points from each
node. The covariance estimator is asymptotically equivalent to an averaged sample estimator at
the rate of Op n−1 . B-spline and Bspline-Spatial estimators are proposed for the covariance of
21

Table 3: Purity for the different models using vectors with random sparsification. Best results are marked in bold for each setting.
12345678 k = 5 - 52.32 47.26 69.53 44.85 23.86 27.01 20.96 27.68 PCA 46.74 87.88 83.43 87.33 87.33 39.22 22.12 63.59 RK 49.28 87.35 88.91 69.03 79.05 80.85 69.06 56.58 RK-Spat 49.76 87.27 87.59 86.84 79.08 73.51 68.96 56.62
k = 10 - 61.70 80.23 82.53 59.59 31.62 40.24 26.16 29.76 PCA 68.49 86.23 87.93 82.13 48.54 54.97 26.72 64.16 RK 64.81 88.50 87.13 85.16 86.23 89.13 82.47 70.96 RK-Spat 68.29 88.50 86.83 87.62 86.32 89.21 83.09 68.37
k = 15 - 65.79 79.60 86.82 80.91 40.23 42.88 28.08 42.68 PCA 73.47 87.53 87.94 87.17 55.65 65.82 31.26 65.51 RK 76.58 88.95 89.45 88.97 86.96 89.26 82.34 72.64 RK-Spat 71.75 88.16 90.25 86.84 85.90 89.37 82.10 72.16
functional data, the convergence rate Op n−1/2 of which are derived analogically. In this case,
data is sparsified by intercepting points at fixed positions of each node, and then B-spline inter
polation is carried out to avoid the loss of overall data information. We further characterize the
uniform weak convergence of the corresponding estimation of eigenvalues and eigenvectors. Spa
tial factor are necessary to be taken into account when there are spatial correlations across nodes
between the vectors, hence, the standard approach of simple averaging the sparsified vectors can
lead to high estimation error. Theoretical results are backed by simulation evidence. Main
advantage of our method is its computational efficiency and feasibility for large-scale functional
data. It greatly enhances the application of unsupervised domain clustering to multi-domain
corpus in neural machine translation.
A few more issues still merit further research. For instance, the knots selection using the AIC
works well in practice, but a stronger theoretical justification for its use is still needed. Our work
focuses on the the approximation and theoretical properties of the proposed edtimators, while
in recent years, there has been a great deal of work on constructing simultaneous confidence
envelopes, which is crucial for making global inference. It is also interesting to combine our
data sparsification methodology with functional regression models and the mean and covariance
estimation in such models is a significant challenge and requires more in-depth investigation.
Last but not least, extending the novel sparsification procedure for large-scale longitudinal data
is worth exploring, which is expected to find more applications in various scientific fields. This
paper has been submitted as Zheng et al. [2023].
22

Table 4: Purity for the different models using vectors with fixed knots sparsification. Best results are marked in bold for each setting.
123 4 5678 k = 5 - 50.38 69.49 72.38 87.09 72.45 77.88 68.85 61.27 PCA 38.90 85.51 86.79 85.85 86.10 86.82 70.28 66.66 BS 52.24 86.13 72.54 85.83 72.79 73.38 69.42 51.29 BS-Spat 49.16 86.42 86.89 85.94 61.86 86.15 69.47 51.19
k = 10 - 63.37 85.70 86.46 84.09 84.16 82.73 76.23 67.61 PCA 59.29 81.91 85.24 81.98 84.95 87.14 82.89 71.81 BS 63.76 86.34 86.24 84.22 84.51 88.67 83.50 64.43 BS-Spat 66.44 87.71 87.53 85.12 86.06 89.29 83.36 55.64
k = 15 - 71.87 87.03 86.07 86.68 83.30 86.38 63.65 72.30 PCA 65.40 88.32 85.71 84.88 85.48 87.92 81.24 75.35 BS 70.58 87.42 89.24 86.14 87.23 89.01 82.72 72.68 BS-Spat 70.67 88.24 88.61 86.73 86.47 88.54 82.76 66.99
References
Roee Aharoni and Yoav Goldberg. Unsupervised domain clusters in pretrained language models.
arXiv preprint arXiv:2004.02105, 2020.
Dan Alistarh, Torsten Hoefler, Mikael Johansson, Nikola Konstantinov, Sarit Khirirat, and
C ́edric Renggli. The convergence of sparsified gradient methods. Advances in Neural
Information Processing Systems, 31, 2018.
Mikko Aulamo and J ̈org Tiedemann. The opus resource repository: An open package for
creating parallel corpora and machine translation services. In 22nd Nordic Conference on
Computational Linguistics (NoDaLiDa). Link ̈oping University Electronic Press, 2019.
Quentin Berthet and Philippe Rigollet. Optimal detection of sparse principal components in
high dimension. The Annals of Statistics, 41(4):1780–1815, 2013a.
Quentin Berthet and Philippe Rigollet. Complexity theoretic lower bounds for sparse principal
component detection. In Conference on learning theory, pages 1046–1066. PMLR, 2013b.
Gavin Brown, Marco Gaboardi, Adam Smith, Jonathan Ullman, and Lydia Zakynthinou.
Covariance-aware private mean estimation without private covariance estimation. Advances
in Neural Information Processing Systems, 34:7950–7964, 2021.
Guanqun Cao, Lijian Yang, and David Todem. Simultaneous inference for the mean function
based on dense functional data. Journal of nonparametric statistics, 24(2):359–377, 2012.
23

Guanqun Cao, Li Wang, Yehua Li, and Lijian Yang. Oracle-efficient confidence envelopes for
covariance functions in dense functional data. Statistica Sinica, pages 359–383, 2016.
Davin Choo and Tommaso d’Orsi. The complexity of sparse tensor pca. Advances in Neural
Information Processing Systems, 34:7993–8005, 2021.
Jacques Dauxois, Alain Pousse, and Yves Romain. Asymptotic theory for the principal compo
nent analysis of a vector random function: some applications to statistical inference. Journal
of multivariate analysis, 12(1):136–154, 1982.
Yash Deshpande and Andrea Montanari. Sparse pca via covariance thresholding. Advances in
Neural Information Processing Systems, 27, 2014.
Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. Bert: Pre-training of
deep bidirectional transformers for language understanding. arXiv preprint arXiv:1810.04805,
2018.
Zi-Yi Dou, Junjie Hu, Antonios Anastasopoulos, and Graham Neubig. Unsupervised domain
adaptation for neural machine translation with domain-aware feature embeddings. arXiv
preprint arXiv:1908.10430, 2019a.
Zi-Yi Dou, Xinyi Wang, Junjie Hu, and Graham Neubig. Domain differential adaptation for
neural machine translation. arXiv preprint arXiv:1910.02555, 2019b.
Ankit Garg, Tengyu Ma, and Huy Nguyen. On communication cost of distributed statistical
estimation and dimensionality. Advances in Neural Information Processing Systems, 27, 2014.
Peter Hall, Hans-Georg Mu ̈ller, and Jane-Ling Wang. Properties of principal component methods
for functional and longitudinal data analysis. The annals of statistics, 34(3):1493–1517, 2006.
Junjie Hu, Mengzhou Xia, Graham Neubig, and Jaime Carbonell. Domain adaptation of neural
machine translation by lexicon induction. arXiv preprint arXiv:1906.00376, 2019.
Kun Huang, Sijie Zheng, and Lijian Yang. Inference for dependent error functional data with
application to event-related potentials. Test, 31(4):1100–1120, 2022.
Divyansh Jhunjhunwala, Ankur Mallick, Advait Gadhikar, Swanand Kadhe, and Gauri Joshi.
Leveraging spatial and temporal correlations in sparsified mean estimation. Advances in
Neural Information Processing Systems, 34:14280–14292, 2021.
Philipp Koehn and Rebecca Knowles. Six challenges for neural machine translation. arXiv
preprint arXiv:1706.03872, 2017.
Yehua Li, Naisyin Wang, and Raymond J Carroll. Selecting the number of principal components
in functional data. Journal of the American Statistical Association, 108(504):1284–1294, 2013.
24

Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer Levy,
Mike Lewis, Luke Zettlemoyer, and Veselin Stoyanov. Roberta: A robustly optimized bert
pretraining approach. arXiv preprint arXiv:1907.11692, 2019.
Prathamesh Mayekar, Ananda Theertha Suresh, and Himanshu Tyagi. Wyner-ziv estimators:
Efficient distributed mean estimation with side-information. In International Conference on
Artificial Intelligence and Statistics, pages 3502–3510. PMLR, 2021.
Tomas Mikolov, Ilya Sutskever, Kai Chen, Greg S Corrado, and Jeff Dean. Distributed repre
sentations of words and phrases and their compositionality. Advances in neural information
processing systems, 26, 2013.
Hans-Georg Mu et al. Functional modeling of longitudinal data. In Longitudinal data analysis,
pages 237–266. Chapman and Hall/CRC, 2008.
Mathias Mu ̈ller, Annette Rios, and Rico Sennrich. Domain robustness in neural machine trans
lation. arXiv preprint arXiv:1911.03109, 2019.
Alec Radford, Karthik Narasimhan, Tim Salimans, Ilya Sutskever, et al. Improving language
understanding by generative pre-training. 2018.
Atal Sahu, Aritra Dutta, Ahmed M Abdelmoniem, Trambak Banerjee, Marco Canini, and Panos
Kalnis. Rethinking gradient sparsification as total error minimization. Advances in Neural
Information Processing Systems, 34:8133–8146, 2021.
Victor Sanh, Lysandre Debut, Julien Chaumond, and Thomas Wolf. Distilbert, a distilled
version of bert: smaller, faster, cheaper and lighter. arXiv preprint arXiv:1910.01108, 2019.
Larry Schumaker. Spline functions: basic theory. Cambridge University Press, 2007.
Hinrich Schu ̈tze, Christopher D Manning, and Prabhakar Raghavan. Introduction to information
retrieval, volume 39. Cambridge University Press Cambridge, 2008.
Sebastian U Stich, Jean-Baptiste Cordonnier, and Martin Jaggi. Sparsified sgd with memory.
Advances in Neural Information Processing Systems, 31, 2018.
Ananda Theertha Suresh, X Yu Felix, Sanjiv Kumar, and H Brendan McMahan. Distributed
mean estimation with limited communication. In International conference on machine
learning, pages 3329–3337. PMLR, 2017.
Thomas Wolf, Lysandre Debut, Victor Sanh, Julien Chaumond, Clement Delangue, Anthony
Moi, Pierric Cistac, Tim Rault, Re ́mi Louf, Morgan Funtowicz, et al. Huggingface’s trans
formers: State-of-the-art natural language processing. arXiv preprint arXiv:1910.03771, 2019.
25

Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Russ R Salakhutdinov, and Quoc V
Le. Xlnet: Generalized autoregressive pretraining for language understanding. Advances in
neural information processing systems, 32, 2019.
Fang Yao, Hans-Georg M ̈uller, and Jane-Ling Wang. Functional data analysis for sparse longi
tudinal data. Journal of the American statistical association, 100(470):577–590, 2005.
Sijie Zheng and Xiaojun Song. Inference for trend functions in partially linear models. Journal
of Statistical Planning and Inference, page 106338, 2025.
Sijie Zheng, Fandong Meng, and Jie Zhou. Efficient covariance estimation for sparsified
functional data. OpenReview, 2023. Available at https://openreview.net/forum?id=
WmOF--p0PP.
Sijie Zheng, Kun Huang, and Lijian Yang. Inference for dependent error functional data: Co
variance function. Electronic Journal of Statistics, 19(2):5216–5248, 2025.
Chen Zhong and Lijian Yang. Statistical inference for functional time series: autocovariance
function. Statistica Sinica.
A Appendix
This section provides technical lemmas and detailed proofs of the main asymptotic results.
A.1 Additional Notations
Throughout this section, Op (or Op ) denotes a sequence of random variables of certain order in
probability. For instance, Op n−1/2 means a smaller order than n−1/2 in probability, and by
Oa.s. (or Oa.s. ) almost surely O (or O ). For sequences an and bn, denote an ≍ bn if an and bn
are asymptotically equivalent.
For any vector a = (a1, . . . , an) ∈ Rn, take ∥a∥r = (|a1|r + . . . + |an|r)1/r, 1 ≤ r < +∞,
∥a∥∞ = max (|a1| , . . . , |an|). For any matrix A = (aij)m,n
i=1,j=1, denote its Lr norm as ∥A∥r =
maxa∈Rn,a̸=0 ∥Aa∥r∥a∥r−1, for r < +∞ and ∥A∥r = max1≤i≤m
Pn
j=1 |aij|, for r = ∞. For
any Lebesgue measurable function φ(x) on a domain D, D = [0, 1], let ∥φ∥∞ = supx∈D |φ(x)|.
For any L2 integrable functions φ(x) and φ(x), x ∈ D, take ⟨φ, φ⟩ = R
D φ(x)φ(x)dx, with
∥φ∥22 = ⟨φ, φ⟩. We set ⟨φ, φ⟩N = N −1 P
1≤j≤N φ j
Nφ j
N.
26

A.2 Proof of Theorem 1
Proof. The MSE can be computed as
E∥Gˆ − G ̄∥2 =
d
X
j,j′=1
E ∥1
n
d
Js
2n
X
i=1
hij −  ̄hj hij′ −  ̄hj′ − 1
n
n
X
i=1
(xij −  ̄mj ) xij′ −  ̄mj′ ∥2
!
Now, as E d
Js hij = xij and E d
Js hij′ = xij′ , it holds that
1 n2
n
X
i=1
Ed
Js
2
hij −  ̄hj hij′ −  ̄hj′ − (xij −  ̄mj ) xij′ −  ̄mj′
!2
=1
n2
n
X
i=1

E d
Js
2
hij −  ̄hj hij′ −  ̄hj′
!2
− E (xij −  ̄mj ) xij′ −  ̄mj′
2


Since hij = xij with probability Js/d and hij = 0 otherwise (by definition), therefore
Ed
Js
2
hij −  ̄hj hij′ −  ̄hj′
!2
=d
Js
4
E hij −  ̄hj hij′ −  ̄hj′
2
=d
Js
2
E (xij −  ̄mj ) xij′ −  ̄mj′
2
Hence independence of xij and xij′, 1 ≤ i ≤ n, j ̸= j′ implies
E∥Gˆ − G ̄∥2 = 1
n2
d
Js
2
−1
!n X
i=1
d
X
j,j′=1
E (xij −  ̄mj ) xij′ −  ̄mj′
2
=1
n2
d
Js
2
−1
!n X
i=1
E


d
X
j=1
(xij −  ̄mj)2
d
X
j′=1
xij′ −  ̄mj′
2


=1
n2
d
Js
2
−1
!
R1
where R1 = Pn
i=1 ∥xi −  ̄m∥4.
A.3 Proof of Proposition 1
Proof. Let ξij be an indicator random variable which is 1 or 0 , depending on whether hij = xij
or not for 1 ≤ i ≤ n, 1 ≤ j ≤ d.
Case 1: With probability 1 − Js
d
2, ξij = 0, ξij′ = 0 which implies hij = 0 and hij′ = 0.
27

Therefore,
EMj ,Mj′ |ξij =0,ξij′ =0
" β ̄2 hij −  ̄hj hij′ −  ̄hj′
T (Mj) T Mj′
#
=EMj |ξij =0
" β ̄ hij −  ̄hj
T (Mj)
#
EMj′ |ξij′ =0
" β ̄ hij′ −  ̄hj′
T Mj′
#
=0.
Case 2: With probability Js
d 1 − Js
d , ξij = 0, ξij′ = 1 which implies hij = 0 and hij′ =
xij′. Still we have
EMj ,Mj′ |ξij =0,ξij′ =1
" β ̄2 hij −  ̄hj hij′ −  ̄hj′
T (Mj) T Mj′
#
= 0.
Case 3: With probability Js
d
2, {ξij = 1, ξ′ = 1} which implies hij = xij and hij′ = xij′ .
Therefore,
EMj ,Mj′ |ξij =1,ξij′ =1
" β ̄2 hij −  ̄hj hij′ −  ̄hj′
T (Mj) T Mj′
#
=EMj ,Mj′ |Mj ≥1,Mj′ ≥1
" β ̄2 hij −  ̄hj hij′ −  ̄hj′
T (Mj) T Mj′
#
=β ̄2 (xij −  ̄mj ) xij′ −  ̄mj′ EMj,Mj′ |Mj≥1,Mj′ ≥1
"
1
T (Mj) T Mj′
#
The crucial observation here is that ξij = 1 only implies Mj ≥ 1 and does not give any other
information about Mj. Taking expectation with respect to ξij we have,
Eξij ,ξij′ EMj ,Mj′ |ξij ,ξij′
" β ̄2 hij −  ̄hj hij′ −  ̄hj′
T (Mj) T Mj′
#
= Js
d
2
β ̄2 (xij −  ̄mj ) xij′ −  ̄mj′ EMj,Mj′ |Mj≥1,Mj′ ≥1
"
1
T (Mj) T Mj′
#
= (xij −  ̄mj ) xij′ −  ̄mj′
which follows from the definition of β ̄ in (8). This proves Proposition 1.
28

A.4 Proof of Theorem 2
Proof. MSE can be computed as
E∥Gˆ − G ̄∥2 =
d
X
j,j′=1
E Gˆjj′ − G ̄jj′
2
=
d
X
j,j′=1
E1
n
β ̄2
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′ − 1
n
n
X
i=1
(xij −  ̄mj ) xij′ −  ̄mj′
!2
(18)
As the estimator is designed to be unbiased, i.e., E 1
n
β ̄2
T (Mj )T (Mj′ )
Pn
i=1 hij −  ̄hj hij′ −  ̄hj′ =
1 n
Pn
i=1 (xij −  ̄mj) xij′ −  ̄mj′ , it holds that
E1
n
β ̄2
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′ − 1
n
n
X
i=1
(xij −  ̄mj ) xij′ −  ̄mj′
!2
=1
n2 E
β ̄2
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′
!2
−1
n2
n
X
i=1
(xij −  ̄mj ) xij′ −  ̄mj′
!2
(19)
We now analyze the first term above.
E
β ̄2
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′
!2
=
n
X
i=1
β ̄4E
"
hij −  ̄hj
2 hij′ −  ̄hj′
2
T (Mj )2 T Mj′
2
#
+2
n
X
i=1
n
X
k=i+1
β ̄4E
"
hij −  ̄hj hkj −  ̄hj hij′ −  ̄hj′ hkj′ −  ̄hj′
T (Mj )2 T Mj′
2
#
(20)
Note here that the expectation is taken over the randomness in hij as well as T (Mj). Further,
β ̄4 (hij − ̄hj )2(hij′ − ̄hj′ )2
T (Mj)2T (Mj′)2 is non-zero only when a node i samples coordinate j and j′, i.e., hij = xij
and hij′ = xij′. This implies that Mj ≥ 1 and Mj′ ≥ 1.
P (Mj = m) = n
m pm(1 − p)n−m
29

where p = Js
d . Therefore, by the law of total expectation, we have
β ̄4E
"
hij −  ̄hj
2 hij′ −  ̄hj′
2
T (Mj )2 T Mj′
2
#
=β ̄4 EMj |Mj ≥1
"
Js (xij −  ̄mj)2
dT (Mj)2
#
EMj′ |Mj′ ≥1
"
Js xij′ −  ̄mj′
2
dT Mj′
2
#
=

β ̄4
n
X
r,r′=1
Js dT (r)2
Js dT (r′)2
n−1
r−1
n−1
r′ − 1
Js d
r+r′−2
1 − Js
d
2n−r−r′ 

× (xij −  ̄mj )2 xij′ −  ̄mj′
2
=d
Js
+ c1
2
(xij −  ̄mj )2 xij′ −  ̄mj′
2 (21)
where c1 = β ̄2 Pn
r=1
Js
dT (r)2
n−1 r−1
Js d
r−1 1 − Js
d
n−r − d
Js . Here, the second equality uses the
fact that when node i samples coordinate j and j′ (i.e., xij = hij, xij′ = hij′ ), then Mj ≥ 1 and
Mj′ ≥ 1.
Following a similar argument as above, note that (hij− ̄hj)(hkj− ̄hj)(hij′ − ̄hj′ )(hkj′ − ̄hj′ )
T (Mj)2T (Mj′ )2 is non
zero only when nodes i and Js sample coordinate j and j′, i.e., hij = xij, hkj = xkj, hij′ = xij′,
hkj′ = xkj′. This implies that Mj ≥ 2 and Mj′ ≥ 2. Therefore, by the law of total expectation,
we have
β ̄4E hij −  ̄hj hkj −  ̄hj hij′ −  ̄hj′ hkj′ −  ̄hj′
T (Mj )2 T Mj′
2
!
=β ̄4 EMj |Mj ≥2
Js (xij −  ̄mj) (xkj −  ̄mj)
dT (Mj)2
!
EMj′ |Mj′ ≥2
Js xij′ −  ̄mj′ xkj′ −  ̄mj′
dT Mj′
2
!
=

β ̄4
n
X
r,r′=2
Js
dT (r′)2
Js2
d2T (r′)2
n−2
r−2
n−2
r′ − 2
Js2 d2
r+r′−4
1 − Js
d
2n−r−r′ 

× (xij −  ̄mj ) (xkj −  ̄mj ) xij′ −  ̄mj′ xkj′ −  ̄mj′
= (1 − c2)2 (xij −  ̄mj) (xkj −  ̄mj) xij′ −  ̄mj′ xkj′ −  ̄mj′ (22)
where c2 = 1 − β ̄2 Pn
r=2
Js2
d2T (r)2
n−2 r−2
Js d
r−2 1 − Js
d
n−r .
30

Substituting (21) and (22) in (20), we get
E
β ̄2
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′
!2
=d
Js
+ c1
2n
X
i=1
(xij −  ̄mj )2 xij′ −  ̄mj′
2
+ (1 − c2)2
n
X
i=1
n
X
k=i+1
(xij −  ̄mj ) (xkj −  ̄mj ) xij′ −  ̄mj′ xkj′ −  ̄mj′ (23)
Now, substituting (23) in (19), we get
E1
n
β ̄2
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′ − 1
n
n
X
i=1
(xij −  ̄mj ) xij′ −  ̄mj′
!2
=1
n2
d
Js
+ c1
2
−1
!n X
i=1
(xij −  ̄mj )2 xij′ −  ̄mj′
2
+1
n2 (1 − c2)2 − 1
n
X
i=1
n
X
k=i+1
(xij −  ̄mj ) (xkj −  ̄mj ) xij′ −  ̄mj′ xkj′ −  ̄mj′ (24)
Finally replacing (24) in (18) we get,
E∥Gˆ − G ̄∥2 = 1
n2
d
Js
+ c1
2
−1
!
R1 + 1
n2 (1 − c2)2 − 1 R2
where R1 = Pn
i=1 ∥xi −  ̄m∥4 and R2 = 2 Pn
i
Pn
k=i+1
D
(xi −  ̄m)2 , (xk −  ̄m)2E
.
A.5 Proof of Theorem 3
Proof. Observe that in (9), the only term that depends on T (·) is
c2
1 + 2c1
d
Js
R1 + c2
2 − 2c2 R2 = c1 + d
Js
2
R1 + (c2 − 1)2 R2 − d
Js
2
R1 − R2
Thus to find the function T ∗(·) that minimizes the MSE, we just need to minimize this term.
Next, from the definitions of c1 and c2 in Theorem 2, we can obtain the following expression
31

for T ∗(·)
T ∗(r) = arg min
T
β ̄4
n
X
r=1
Js dT (r)2
n−1
r−1
Js d
r−1
1 − Js
d
n−r !2
+ R2
R1
β ̄4
n
X
r=2
Js2
d2T (r)2
n−2
r−2
Js d
r−2
1 − Js
d
n−r !2
− R2
R1
. (25)
We claim that T ∗ (r) = 1 + R2
R1
r−1 n−1
2 1/2
is an optimal solution for our objective defined
in (25). To see this, consider the following cases,
Case 1: p = 0 or p = 1. In this case c1 and c2 are independent of T (·) and hence our objective
does not depend on the choice of T (·).
Case 2: 0 < p < 1, we define
w∗ = arg min
w
w⊤Aw
(b⊤w)2 , (26)
where w is a n-dimensional vector whose r-th entry is wr = 1/T (r)2, b is a vector whose r-th
entry is
br = n − 1
r − 1 pr−1(1 − p)n−r
2
where p = Js/d, and A is a diagonal matrix whose r-th diagonal entry is
Arr = n − 1
r − 1 pr−1(1 − p)n−r
2
+ R2
R1
p n−2
r − 2 pr−2(1 − p)n−r
2
= br 1 + R2
R1
r−1
n−1
2
!
.
Note that Arr > 0 for all r ∈ {1, . . . , n} which implies that w → A1/2w is a one-to-one mapping.
Therefore setting z = A1/2w, the objective in (26) reduces to
z∗ = arg min
z
∥z∥2
b⊤A−1/2z 2 (27)
Observe that the objectives (26), (27) are invariant to the scale of T (·), w, and z respectively
and thus the solutions will be unique up to a scaling factor. Therefore, in the case of (27), it is
sufficient to solve the reduced objective,
z∗ = arg min
z,∥z∥=1
∥z∥2
b⊤A−1/2z 2 = arg min
z,∥z∥=1
1
b⊤A−1/2z 2
32

which is minimized (denominator is maximized) by z∗ = A−1/2b
∥A−1/2b∥ . Therefore, the optimal
solution (up to a constant) is w∗ = A−1/2 A−1/2b . Correspondingly, we have that
T ∗(r) = (w∗
r )−1/2 = Arr
br
1/2
= 1 + R2
R1
r−1
n−1
2
!1/2
.
minimizes (25), and consequently minimizes the MSE of the Random-knots-Spatial estimator.
A.6 Proof of Theorem 4
Lemma 1. Let Wi ∼ N 0, σ2
i , σi > 0, i = 1, . . . , n, then for n > 2, a > 2
P max
1≤i≤n |Wi/σi| > aplog n <
r2
π n1−a2/2.
Hence, (max1≤i≤n |Wi|) / (max1≤i≤n σi) ≤ max1≤i≤n |Wi/σi| = Oa.s.(√log n).
Proof. Note that
P max
1≤i≤n
Wi
σi
> aplog n ≤
n
X
i=1
P Wi
σi
> aplog n
≤ 2n{1 − Φ(aplog n)} < 2n φ(a√log n)
a√log n
≤ 2nφ(aplog n) =
r2
π n1−a2/2
for n > 2, a > 2. The lemma follows by applying Borel-Cantelli Lemma.
Lemma 2. As n → ∞, we have
max
1≤i≤n ∥hi − xi∥∞ = Oa.s.
n
J −p∗
s (n log n)2/r0
o
= Oa.s. n−1/2 .
Proof. The trajectory xi(t) is written as xi(t) = m(t) + P∞
k=1 ξikφk(t). Denote φk =
(φk(1/d), . . . , φk(d/d))⊤, and let φˆk(t) = d−1B(t)⊤Vn−,1pB⊤φk be the B-spline smoothing of φk(t).
The linearity of spline smoothing implies that
hi(t) − xi(t) = mˆ (t) − m(t) +
∞
X
k=1
ξik
nφˆk(t) − φk(t)
o
.
33

Lemma A.4 in Cao et al. [2012] assures there exists a constant Cq,μ > 0, such that
∥ ˆm − m∥∞ ≤ Cq,μ∥m∥q,μJ −p∗
s , (28)
φˆk − φk ∞
≤ Cq,μ ∥φk∥q,μ J −p∗
s , k ≥ 1 (29)
Thus, with norm inequality, we have
∥hi − xi∥∞ ≤ ∥ ˆm − m∥∞ +
∞
X
k=1
|ξik| φˆk − φk ∞
≤ Cq,μWiJ −p∗
s
where Wi = ∥m∥q,μ + P∞
k=1 |ξik| ∥φk∥q,μ , i = 1, . . . , n, are i.i.d. nonnegative random variables.
W r0
i has a finite absolute moment and we have
P max
1≤i≤n Wi > (n log n)2/r0 ≤ n EW r0
i
(n log n)2 = EW r0
i (n log n)−2
which implies
∞
X
n=1
P max
1≤i≤n Wi > (n log n)2/r0 ≤ EW r0
i
∞
X
n=1
(n log n)−2 < +∞
According to Borel Cantelli lemma, max1≤i≤n Wi = Oa.s. (n log n)2/r0 which, together with
(28) and (29), prove the Lemma 2.
Consequently, the approximation error of ˆm(·) −  ̄m(·) can be decomposed as
ˆm(·) −  ̄m(·) = n−1
n
X
i=1
{hi(·) − xi(·)}
According to Lemma 2,
sup
t∈[0,1]
n1/2| ˆm(t) −  ̄m(t)| ≤ n1/2 max
1≤i≤n ∥hi − xi∥∞ = oa.s. (1).
(12) is proved.
Lemma 3. As n → ∞
max
1≤i≤n
Zˆi − Zi ∞
= Oa.s.
n
J −p∗
s (n log n)2/r0
o
,
max
1≤i≤n ∥Zi∥∞ = Oa.s.
n
(n log n)2/r0
o
34

Proof. Denote φˆk(x) = d−1B(x)⊤Vn−,1pB⊤φk and Zˆi(t) = P∞
k=1 ξikφˆk(t) for k ∈ N+, hence,
Zˆi(t) − Zi(t) =
∞
X
k=1
ξik
nφˆk(t) − φk(t)
o
.
By (29),
Zˆi − Zi ∞
≤
∞
X
k=1
|ξik| φˆk − φk ∞
≤ CWiJ −p∗
s,
where Wi = P∞
k=1 |ξik| ∥φk∥q,μ , i = 1, . . . , n, are i.i.d nonnegative random variables with finite
absolute moment. Then
P max
1≤i≤n Wi > (n log n)2/r0 ≤ n EW r0
i
(n log n)2 = EW r0
i n−1(log n)−2,
thus,
∞
X
n=1
P max
1≤i≤n Wi > (n log n)2/r0 ≤ EW r0
i
∞
X
n=1
n−1(log n)−2 < +∞,
so max1≤i≤n Wi = Oa.s. (n log n)2/r0 . Similarly, one obtains max1≤i≤n ∥Zi∥∞ = Oa.s. (n log n)2/r0 .
Lemma 3 is obtained.
For any t, t′ ∈ [0, 1], one could decompose Gˆ (t, t′) − G ̄ (t, t′) into three parts
Gˆ t, t′ − G ̄ t, t′ = n−1
n
X
i=1
Zˆi(t)Zˆi t′ − n−1
n
X
i=1
Z ̄i(t)Z ̄i t′
= I t, t′ + II t, t′ + III t, t′
where
I t, t′ = n−1
n
X
i=1
nZˆi(t) − Z ̄i(t)
o nZˆi t′ − Z ̄i t′ o
II t, t′ = n−1
n
X
i=1
Z ̄i t′ nZˆi(t) − Z ̄i(t)
o
III t, t′ = n−1
n
X
i=1
Z ̄i(t)
nZˆi t′ − Z ̄i t′ o
.
According to decomposition of {hi}n
i=1 and {xi}n
i=1, one obtains hi(t) − xi(t) = Zˆi(t) − Zi(t) +
35

ˆm(t) − m(t), then Zˆi(t) − Z ̄i(t) can be represented by
Zˆi(t) − Z ̄i(t) = hi(t) − ˆm(t) − {xi(t) −  ̄m(t)}
= hi(t) − n−1
n
X
i′=1
hi′ (t) −
(
xi(t) − n−1
n
X
i′=1
xi′ (t)
)
= hi(t) − xi(t) − n−1
n
X
i′=1
{hi′ (t) − xi′ (t)}
= Zˆi(t) − Zi(x) − n−1
n
X
i′=1
nZˆi′ (t) − Zi′ (t)
o
= Zˆi(t) − Zi(t) − Θ1(t).
and then
I t, t′ =n−1
n
X
i=1
nZˆi(t) − Zi(t) − Θ1(t)
o nZˆi t′ − Zi t′ − Θ1 t′ o
=n−1
n
X
i=1
nZˆi(t) − Zi(t)
o nZˆi t′ − Zi t′ o
− n−1
n
X
i=1
nZˆi(t) − Zi(t)
o
Θ1 t′
− n−1
n
X
i=1
Θ1(t)
nZˆi t′ − Zi t′ o
+ Θ1(t)Θ1 t′
=Θ2 t, t′ − Θ1(t)Θ1 t′ .
where
Θ1(t) = n−1
n
X
i=1
nZˆi(t) − Zi(t)
o
Θ2 t, t′ = n−1
n
X
i=1
nZˆi(t) − Zi(t)
o nZˆi t′ − Zi t′ o
.
According to Lemma 3 and Assumption 6,
Θ1(t) ≤ max
1≤i≤n
Zˆi − Zi ∞
= Oa.s.
n
J −p∗
s (n log n)2/r0
o
= Oa.s. n−1/2
Θ2 t, t′ ≤ max
1≤i≤n
Zˆi − Zi ∞
2
= Oa.s.
n
J −2p∗
s (n log n)4/r0
o
= Oa.s. n−1/2
Hence, one obtains supt,t′∈[0,1] |I (t, t′)| = Oa.s. n−1/2 . Moreover,
II t, t′ =n−1
n
X
i=1
(
Zi t′ − n−1
n
X
i=1
Zi t′
)
nZˆi(t) − Zi(t) − Θ1(t)
o
=n−1
n
X
i=1
Zi x′ nZˆi(x) − Zi(x)
o
− n−2
"n X
i=1
Zi x′
n
X
i′=1
Zˆi(x) +
n
X
i=1
Zi x′
n
X
i′=1
Zi x′
#
.
36

By Lemma 3, one obtains supt,t′∈[0,1] |II (t, t′)| = Oa.s. n−1/2 . Similarly, supt,t′∈[0,1] |III (t, t′)| =
Oa.s. n−1/2 . Consequently,
sup
t,t′∈[0,1]
Gˆ t, t′ − G ̄ t, t′ = Oa.s. n−1/2 .
A.7 Proof of Theorem 5
Proof. The estimation error of spatial mean can be computed as
∥ ˆm −  ̄m∥∞ = max
1≤j≤d
1
n
β ̄
T (Mj)
n
X
i=1
hij − 1
n
n
X
i=1
xij
=1
n max
1≤j≤d
β ̄
T (Mj)
n
X
i=1
hij −
β ̄
T (Mj)
n
X
i=1
xij +
β ̄
T (Mj)
n
X
i=1
xij −
n
X
i=1
xij
≤
β ̄
T (Mj) ∥ ˆm −  ̄m∥∞ +
β ̄
T (Mj) − 1 ∥  ̄m∥∞
=Op n−1/2
where the last equality holds by noticing that β ̄
T (Mj) →p 1 from the law of large numbers and
∥ ˆm −  ̄m∥∞ = Oa.s. n−1/2 from (12).
The estimation error of spatial covariance can be computed as
∥Gˆ − G ̄∥∞ = max
1≤j,j′≤d
Gˆjj′ − G ̄jj′
=1
n max
1≤j,j′≤d
β ̄2
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′ −
n
X
i=1
(xij −  ̄mj ) xij′ −  ̄mj′
≤1
n max
1≤j,j′≤d
β ̄2
T (Mj) T Mj′
n
X
i=1
hij −  ̄hj hij′ −  ̄hj′ −
β ̄j β ̄j′
T (Mj) T Mj′
n
X
i=1
(xij −  ̄mj ) xij′ −  ̄mj′
+1
n max
1≤j,j′≤d
β ̄2
T (Mj) T Mj′
n
X
i=1
(xij −  ̄mj ) xij′ −  ̄mj′ −
n
X
i=1
(xij −  ̄mj ) xij′ −  ̄mj′
≤ max
1≤j,j′≤d
β ̄2
T (Mj) T Mj′
Gˆjj′ − G ̄jj′ + max
1≤j,j′≤d
β ̄2
T (Mj) T Mj′
−1
!
G ̄ j j ′
≤Op (1) Gˆ − G ̄|
∞
+ Op n−1/2 G ̄ ∞
=Op n−1/2
where the last equality holds by noticing that β ̄2
T (Mj)T (Mj′) →p 1 from the law of large numbers
and Gˆ − G ̄
∞
= Op n−1/2 from (13).
37

A.8 Proof of Theorem 6
Proof. Denote ∆ψk(z) = R (Gˆ − G) (t, t′) ψk (t′) dt′. We have obtained that ∥Gˆ − G∥∞ =
Op n−1/2 . Thus, for any k ≥ 1, ∥∆ψk∥∞ = Op n−1/2 . Let
∥∆∥2 =
ZZ
Gˆ t, t′ − G t, t′ 2
dtdt′
1/2
= Op n−1/2 ,
then according to Hall et al. [2006],
ψˆk − ψk =
X
j:j̸=k
(λk − λj)−1 ⟨∆ψk, ψj⟩ ψj + O ∥∆∥2
2.
It follows from Bessel’s inequality that
ψˆk − ψk 2
≤ C ∥∆ψk∥∞ + O ∥∆∥2
2 = Op n−1/2 .
By (2.9) in Hall et al. [2006] and ∥Gˆ − G∥∞ = Op n−1/2 ,
ˆλk − λk =
ZZ
Gˆ − G t, t′ ψk (t) ψk t′ dtdt′ + O ∥∆ψk∥2
2 = Op n−1/2 .
Next, note that
λˆkψˆk(t) − λkψk(t) =
Z
Gˆ t, t′ ψˆk x′ dt′ −
Z
G t, t′ ψk t′ dt′
=
Z
Gˆ − G t, t′ ψˆ t′ − ψk t′ dt′ +
Z
(Gˆ − G) t, t′ ψk t′ dt′
+
Z
G t, t′ nψˆk t′ − ψk t′ o
dt′
By Cauchy-Schwarz inequality,
Z
G t, t′ nψˆk t′ − ψk t′ o
dt′ ≤
Z
G2 t, t′ dt′
1/2
ψˆk − ψk 2
= Op n−1/2
Z
(Gˆ − G) t, t′ ψˆ t′ − ψk t′ dt′ ≤ ∥Gˆ − G∥∞ ψˆk − ψk 2
= Op n−1
Z
(Gˆ − G) t, t′ ψk x′ dt′ ≤ ∥Gˆ − G∥∞ ∥ψk∥2 = Op n−1/2 .
Therefore, ˆλkψˆk − λkψk ∞
= Op n−1/2 . Then according to λk ψˆk − ψk = λkψˆk − λˆkψˆk +
λˆkψˆk − λkψk , we obtain that
λk ψˆk − ψk ∞
≤ ˆλkψˆk − λkψk ∞
+ λˆk − λk ψˆk ∞
= Op n−1/2 .
38

It follows that ψˆk − ψk ∞
= Op n−1/2 .
A.9 Proof of Corollary 1
Proof. For 1 ≤ i ≤ n, ξˆik − ξik can be divided into two parts:
R1 = ˆλ−1/2
k
Z1
0
{hi (t) − ˆm (t)} ψˆk (t) dt − ˆλ−1/2
k
Z1
0
{xi (t) − m (t)} ψk (t) dt
R2 = ˆλ−1/2
k
Z1
0
{xi (t) − m (t)} ψk (t) dx − λ−1/2
k
Z1
0
{xi (t) − m (t)} ψk (t) dt
One assumes that for k ∈ N, λk > 0, λˆk > 0, ∥xi − m∥∞ and the fact that ∥ ˆm − m∥∞ =
Op n−1/2 . Moreover, Lemma 2 implies that ∥hi − xi∥∞ = Oa.s. n−1/2 . Hence, combining
with (17), one obtains
R1 =λˆ−1/2
k
Z1
0
{hi (t) − ˆm (t)}
nψˆk (t) − ψk (t)
o
dt
+ λˆ−1/2
k
Z1
0
{hi (t) − ˆm (t) − xi (t) + m (t)} ψk (t) dt
≤λˆ−1/2
k ∥xi − m∥∞ ψˆk − ψk ∞
+ λˆ−1/2
k (∥hi − xi∥∞ + ∥ ˆm − m∥∞) ∥ψk∥∞
=Op n−1/2 .
Through first order Taylor expansion of ˆλk at λk, one gets ˆλ−1/2
k = λ−1/2
k −(1/2) λ−3/2
k λˆk − λk +
O ˆλk − λk . Hence, (15) ensures that λˆ−1/2
k − λ−1/2
k = Op n−1/2 . Consequently,
R2 = λˆ−1/2
k − λ−1/2
k
Z1
0
{xi (t) − m (t)} ψk (t) dt
≤ λˆ−1/2
k − λ−1/2
k ∥xi − m∥∞ ∥ψk∥∞ = Op n−1/2 .
Then theorem 1 is proved by max1≤i≤n ξˆik − ξik = max1≤i≤n (∥R1∥ + ∥R2∥) = Op n−1/2 .
39

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:56.963Z
- **Text Length:** 69390 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 39 of 39
