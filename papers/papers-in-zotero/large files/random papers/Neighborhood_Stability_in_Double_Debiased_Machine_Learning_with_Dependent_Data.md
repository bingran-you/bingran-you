# PDF Document: Cao and Leung - 2025 - Neighborhood Stability in DoubleDebiased Machine Learning with Dependent Data.pdf

**File Path:** Cao and Leung - 2025 - Neighborhood Stability in DoubleDebiased Machine Learning with Dependent Data.pdf

**Processed Date:** 2026-02-10T18:18:52.900Z

**File Size:** 628.25 KB

**Total Pages:** 25

**Extracted Pages:** 25

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3220

**Title:** Neighborhood Stability in Double/Debiased Machine Learning with Dependent Data

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Neighborhood Stability in Double/Debiased Machine
Learning with Dependent Data∗
Jianfei Cao† Michael P. Leung‡
November 17, 2025
Abstract. This paper studies double/debiased machine learning (DML) methods
applied to weakly dependent data. We allow observations to be situated in a general
metric space that accommodates spatial and network data. Existing work implements
cross-fitting by excluding from the training fold observations sufficiently close to the
evaluation fold. We find in simulations that this can result in exceedingly small training
fold sizes, particularly with network data. We therefore seek to establish the validity
of DML without cross-fitting, building on recent work by Chen et al. (2022). They
study i.i.d. data and require the machine learner to satisfy a natural stability condition
requiring insensitivity to data perturbations that resample a single observation. We
extend these results to dependent data by strengthening stability to “neighborhood
stability,” which requires insensitivity to resampling observations in any slowly growing
neighborhood. We show that existing results on the stability of various machine learners
can be adapted to verify neighborhood stability.
JEL Codes: C14, C31, C55
Keywords: machine learning, causal inference, dependent data, stochastic equiconti
nuity
1 Introduction
Double/debiased machine learning (DML) methods enable ?n-consistent estimation of low
dimensional parameters, such as average treatment effects, using modern machine learning
∗We thank Harold Chiang for helpful discussions at an early stage of this project. †Department of Economics, Northeastern University. E-mail: j.cao@northeastern.edu. ‡Department of Economics, University of California, Santa Cruz. E-mail: leungm@ucsc.edu.
1
arXiv:2511.10995v1 [econ.EM] 14 Nov 2025

methods to approximate complex nuisance parameters. Large-sample theory for DML is
mostly limited to i.i.d. data, but there is recent interest in applications to dependent data.
Brown (2024) studies DML trained on time series data. Gilbert et al. (2024) employ DML
to control for spatial confounding. Emmenegger et al. (2025), Leung and Loupos (2025),
and Wang et al. (2024) apply DML to network data.
A key theoretical challenge is verifying the high-level condition
› ›
`Mnpθ0, gˆq  ́ Mnpθ0, g0q
 ̆
 ́
`M pθ0, gˆq  ́ M pθ0, g0q
 ̆›
› “ oppn ́1{2q (1)
where θ0 is the low-dimensional parameter of interest, Mn is the empirical moment, M the
population moment, g0 the nuisance parameter, and gˆ the machine learning estimate of g0.
The goal of this paper is to provide lower-level conditions for (1), without cross-fitting, when
the data is a β-mixing process. We allow observations to be situated in a generic metric
space that can accommodate temporal, spatial, and network data.
There are three main approaches to verifying (1). First, classical semiparametric esti
mation theory takes the approach of verifying stochastic equicontinuity, which implies (1)
(e.g. Andrews, 1994). This condition replaces gˆ on the left-hand side with a deterministic
function g and takes the supremum over all g in the nuisance space G.1 As discussed in
Chernozhukov et al. (2018), this requires restrictions on the complexity of G that can be too
strong for modern machine learning applications. Chen et al. (2022) note that these restric
tions can be conservative since they only concern properties of G rather than the machine
learner gˆ.
Second, we can employ cross-fitting, which essentially entails training gˆ on a random
subsample of the data (training fold) and evaluating Mn on the remaining subsample (eval
uation fold). When the data is i.i.d., this ensures Mnpθ0,  ̈q and gˆ are independent, making
(1) straightforward to verify. With dependent data, however, it is an open question how
cross-fitting should be modified in general to establish (1).
Emmenegger et al. (2025) and Gilbert et al. (2024) consider settings with local depen
dence where observations are independent when separated by some minimum distance in
space or a network. They naturally propose to cross-fit by excluding from the training fold
observations that are sufficiently far from the evaluation fold. This modification, however,
can substantially reduce the sample size of the training fold in practice, particularly with net
work data since the number of units at distance k can grow rapidly with k. In the simulation
study in section 5, the training fold size can be less than ten for reasonable parameterizations
1Several papers verify stochastic equicontinuity for neural networks without cross-fitting. See Farrell et al. (2021) for multilayer perceptrons and i.i.d. data, Wang et al. (2024) for graph neural networks and clustered network data, and Brown (2024) for multilayer perceptrons and time series data.
2

of the network formation model.
We therefore opt to avoid cross-fitting and follow a third and more recent approach due
to Chen et al. (2022) that builds on Chernozhukov et al. (2024). They establish (1) using a
natural “stability” condition on the machine learner gˆ, rather than conditions on G. Stability
essentially requires gˆ to be insensitive to perturbations of the training data that replace any
observation with an independent copy. It has been commonly employed in the statistical
learning literature (e.g. Austern and Zhou, 2020; Bayle et al., 2020; Bousquet and Elisseeff,
2002; Celisse and Guedj, 2016; Elisseeff and Pontil, 2003) and is advantageous due to its
intuitive appeal and relative ease of verification for certain machine learners.
We show that the analysis of Chen et al. (2022) can be extended to dependent data.
A key piece of the argument is strengthening stability to “neighborhood” stability. This
requires insensitivity to perturbations that replace the observations in a slowly growing
neighborhood of any given observation with an independent copy. Resampling neighborhoods
is somewhat analogous to modifications of the bootstrap and subsampling for dependent
data that resample blocks of contiguous observations. Our conditions intuitively connect
the degree of dependence in the data to the strength of the restriction on the machine
learner. Specifically, when the dependence between observations decays faster with distance,
the neighborhood stability condition is weaker in that the machine learner needs only to be
invariant to resampling smaller neighborhoods of observations.
Stability has been verified for a variety of machine learners, including decision trees
(Arsov et al., 2019), regularized M-estimators (Bousquet and Elisseeff, 2002), M-estimators
trained via stochastic gradient descent (Hardt et al., 2016), and bagged learners (Chen et
al., 2022). We show that several of these results can be adapted to verify neighborhood
stability. The sufficient conditions on the machine learner are satisfied when dependence
between observations at distance r is small relative to the sizes of r-neighborhoods. This is a
familiar theme for central limit theorems (CLTs) for dependent data (e.g. Jenish and Prucha,
2009; Kojevnikov et al., 2021). When r-balls in Euclidean space contain more observations,
a given observation is proximate to many others, so a spatial CLT requires dependence to
decay more rapidly with distance to compensate.
The paper is organized as follows. The next section defines the model and estimator. Sec
tion 3 states our assumptions and the main result. We provide primitive sufficient conditions
for neighborhood stability in section 4. Section 5 presents results from a simulation study of
the Emmenegger et al. (2025) network interference model. Finally, section 6 concludes. All
proofs are relegated to the appendix.
3

2 Setup
Let rns “ t1, . . . , nu be the set of observations and ρn : rns ˆ rns Ñ R` be a semi-metric,
so that ρnpi, jq represents the distance between i, j P rns. For example, observations can
be located in Euclidean space with ρnpi, jq denoting the Euclidean distance between the
locations of i and j. Alternatively, observations may be connected by a social network
with ρnpi, jq denoting the shortest path distance between i and j. Abusing notation, for
S1, S2 Ď rns, let ρnpS1, S2q “ mintρnpi, jq : i P S1, j P S2u. For r P R`, let N pi, rq “ tj P
rns : ρnpi, jq ď ru denote the r-neighborhood of observation i.
The data consists of the triangular array Z “ tZiun
i“1 where Zi P Z Ď Rdz for all i P rns.
Let G be a set of functions g : Z Ñ Rdg . We consider the moment model
mpZ; θ, gq “ ψpZ; gqθ ` νpZ; gq
studied, for example, by Chen et al. (2022) and Chernozhukov et al. (2018). Here θ P Rp is
the parameter of interest, g a nuisance function, ψ : Z ˆ G Ñ Rpˆp, and ν : Z ˆ G Ñ Rp. We
suppose there exist “true values” g0 P G and θ0 P Rp such that
ErmpZ; θ0, g0qs “ 0.
Example 1 (Average Treatment Effect). Let W be a finite set of possible treatment values
and Yipwq denote the potential outcome of i under the counterfactual treatment assignment
w P W. The estimand of interest is the average treatment effect θ0 “ n ́1 řn
i“1 ErYipwq  ́
Yipw1qs for some w, w1 P W. An observation consists of Zi “ pYi, Wi, Xiq where Wi is the
treatment assignment, Yi “ YipWiq the outcome, and Xi the vector of covariates. A popular
doubly robust moment function corresponds to setting ψpz; gq “  ́1 and
νpz; g0q “ 1tWi “ wupYi  ́ ErYi | Wi “ w, Xi “ xsq
PpWi “ w | Xi “ xq ` ErYi | Wi “ w, Xi “ xs
 ́ 1tWi “ w1upYi  ́ ErYi | Wi “ w1, Xi “ xsq
PpWi “ w1 | Xi “ xq  ́ ErYi | Wi “ w1, Xi “ xs
where x is the value of the covariates under z (Chernozhukov et al., 2018, eq. (5.3)). Here
g0pzq “ pErYi | Wi “ w, Xi “ xs, PpWi “ w | Xi “ xq, ErYi | Wi “ w1, Xi “ xs, PpWi “ w1 |
Xi “ xqq, assuming identical distributions across i.
Example 2 (Partially Linear IV). Specialize the setup of the previous example to the
partially linear outcome model Yi “ Wiθ0 ` h0pXiq ` εi for some unknown function h0. An
4

observation consists of Zi “ pYi, Wi, Xi, Viq where Vi is the instrument. The Robinson-style
moment function corresponds to setting
ψpz, g0q “  ́pWi  ́ ErWi | Xi “ xsqpVi  ́ ErVi | Xi “ xsq
and νpz, g0q “ pYi  ́ ErYi | Xi “ xsqpVi  ́ ErVi | Xi “ xsq.
(Chernozhukov et al., 2018, eq. (4.8)). Here g0pzq “ pErYi | Xi “ xs, ErWi | Xi “ xs, ErVi |
Xi “ xsq, assuming identical distributions across i.
Let gˆ denote the machine learner, an estimate of g0 trained on Z. Formally, gˆ is a
mapping from Zn to G, but we suppress the dependence of gˆ on the training set Z and
simply treat gˆ as an element of G, writing gˆpZiq. Let θˆ be the two-step method of moments
estimator that satisfies
1
n
n
ÿ
i“1
mpZi; θˆ, gˆq “ 0.
Our objective is to provide lower-level conditions for the following version of (1), which
we will refer to as “SE.” For any f P tψ, νu, denote by fk,l the kl-th component of f . For
the case of f “ ν, which is vector- rather than matrix-valued, we define fk,l “ 0 whenever
k ‰ l. Let Fk,lpi, gq “ Erfk,lpZi, gqs. SE corresponds to
ˇ ˇ ˇ ˇ
1
n
n
ÿ
i“1
``fk,lpZi, gˆq  ́ fk,lpZi, g0q
 ̆
 ́
`Fk,lpi, gˆq  ́ Fk,lpi, g0q
 ̆ ̆
ˇ ˇ ˇ ˇ
“ oppn ́1{2q
@ f P tψ, νu, tk, lu Ď rps. (2)
For i.i.d. data, Theorem 1 of Chen et al. (2022) or Theorem 3.1 of Chernozhukov et al.
(2018) demonstrate that θˆ is approximately normal under SE ((A.13) of the latter reference
is analogous to SE). These results can be extended to dependent data given an appropriate
CLT (e.g. Brown, 2024; Gilbert et al., 2024; Leung and Loupos, 2025), so our focus is solely
on verifying SE.
3 Main Result
Let ∥ ̈∥ denote the Euclidean norm, and for any function g, let ∥g∥2,i “ Er∥gpZiq∥2s1{2.
Assumption 1 (Regularity). (a) The ranges of ψ, ν are bounded. (b) There exist constants
L, q ą 0 such that Erpfk,lpZi; gq  ́ fk,lpZi; g1qq2s ď L ∥g  ́ g1∥q
2,i for all f P tψ, νu, k, l P rps,
5

g, g1 P G, i P rns, and n P N.
Example 3 (Average Treatment Effect). For the moment function in Example 1, As
sumption 1(a) holds if outcomes have uniformly bounded support, the propensity score
PpWi “ w | Xiq is bounded away from 0 and 1 for all w, and the machine learner gˆ lies
in a bounded set and the second component (the estimated propensity score) lies in strict
subset of p0, 1q. The latter requirement is commonly employed in the DML literature (e.g.
Chernozhukov et al., 2018; Farrell, 2015; Farrell et al., 2021). Assumption 1(b) holds for
q “ 2 under the same conditions.
Example 4 (Partially Linear IV). For the moment function in Example 2, Assumption 1(a)
holds if outcomes and instruments have uniformly bounded support and the machine learner
gˆ lies in a bounded set. Assumption 1(b) holds for q “ 2 under the same conditions.
Let Z ̃ “ tZ ̃iun
i“1 denote an independent copy of Z and gˆp ́iq,0 be the machine learner
trained on tZ1, . . . , Zi ́1, Z ̃i, Zi`1, . . . , Znu rather than Z. The latter is a perturbed version
of the data that replaces Zi with an independent copy. Let Z ̊ “ tZi ̊un
i“1 denote another
copy of Z independent of both Z ̃ and Z. Chen et al. (2022) impose the following stability
condition on the moments and gˆ (see their Lemma 2):
max
iPrns
E
“`fk,lpZi, gˆq  ́ fk,lpZi, gˆp ́iq,0q
 ̆2‰1{2
_ max
iPrns
E
“`fk,l pZ  ̊
i , gˆq  ́ fk,lpZ ̊
i , gˆp ́iq,0q
 ̆2‰1{2 “ opn ́1{2q. (3)
When the machine learner is trained on i.i.d. data using cross-fitting, Zi and gˆ are indepen
dent, and SE is straightforward to verify. Stability essentially weakens full independence to
requiring that Zi has a negligible influence on gˆ.
To adapt (3) to dependent data, we replace a set of observations in a slowly growing
neighborhood of Zi with an independent copy. Formally, let trnunPN Ď R` be a sequence of
neighborhood radii. Construct from Z a new dataset by replacing tZk : k P N pi, rnq Y
N pj, rnqu with tZ ̃k : k P N pi, rnq Y N pj, rnqu, and let gˆp ́i, ́jq be the machine learner trained
on this data, leaving its dependence on rn implicit for economy of notation. For the case
i “ j we abbreviate gˆp ́iq ” gˆp ́i, ́jq.
Assumption 2 (Neighborhood Stability). There exists a sequence of neighborhood radii
6

trnunPN such that for all f P tψ, νu and k, l P rps,
max
i,jPrns
E
“`fk,lpZi, gˆq  ́ fk,lpZi, gˆp ́i, ́jqq
 ̆2‰1{2
_ max
i,jPrns
E
“`fk,l pZ  ̊
i , gˆq  ́ fk,lpZ ̊
i , gˆp ́i, ́jqq
 ̆2‰1{2 “ opn ́1{2q.
This strengthens (3) to demand invariance of gˆ to resampling larger blocks of observations.
The faster rn diverges, the stronger the requirement. How fast we require rn to diverge will
depend on the degree of dependence in Z, as we will see shortly. We verify Assumption 2
for various machine learners in section 4.
Let N ̄nprq “ n ́1 řn
i“1|N pi, rq| be the average r-neighborhood size.
Assumption 3 (Learner Consistency). For q in Assumption 1 and trnunPN in Assumption 2,
maxiPrns Er∥gˆp ́iq  ́ g0∥q
2,is “ opN ̄nprnq ́1q.
This requires the machine learner to converge at a sufficiently fast rate. For the case of
q “ 2, with standard machine learners and weakly dependent data, we expect
max
iPrns
Er∥gˆ  ́ g0∥q
2,is “ opn ́1{2q (4)
which corresponds to the usual n ́1{4 rate of convergence (e.g. Chernozhukov et al., 2018,
Assumption 3.2).2 Then in order for Assumption 3 to not be unduly restrictive, we require
N ̄nprnq
?n “ Op1q, (5)
which is a restriction on the metric space and rn. Choosing rn “ Op1q would satisfy (5) for
most spaces of interest, but our final assumption below may require rn to diverge. As we
will discuss in the examples below, this together with (5) amounts to requiring sufficiently
fast decay of a certain measure of dependence.
For any σ-fields A, B, define the β-mixing coefficient
βpA, Bq “ sup 1
2
J
ÿ
j“1
K
ÿ
k“1
|PpAj X Bkq  ́ PpAjqPpBkq|
where the supremum is taken over all J, K ě 1 and partitions tAjuJ
j“1 and tBkuK
k“1 of the
2Note that (4) contains gˆ rather than gˆp ́iq. The analogous statement for gˆp ́iq should be easier to verify since the data on which it is trained exhibits a greater degree of independence relative to Z.
7

sample space such that Aj P A and Bj P B. For any S Ď rns, let σpSq “ σptZiuiPSq be the
σ-field generated by tZiuiPS. Define
βnprq “ sup ␣βpσpS1q, σpS2qq : S1, S2 Ď rns, |S1| “ 1, ρnpS1, S2q ą r(.
This measures the dependence between one observation and sets of observations at least
distance r away. We require sufficiently fast decay with respect to r in the following sense.
Assumption 4 (Weak Dependence). For trnunPN in Assumption 2, nβnprnq “ op1q.
Example 5 (Dependence and Stability). In the commonly considered case of exponential
mixing where supn βnprq ď Ce ́αr for some C, α ą 0, Assumption 4 is satisfied if rn “
α ́1a log n for a ą 1. This mildly strengthens standard stability conditions to resample a
logarithmic ball around observations. In the case of stronger dependence with polynomial
mixing where supn βnprq ď Cr ́α for some C, α ą 0, the stability requirement is more
demanding. Now Assumption 4 is satisfied if rn “ na{α for some a ą 1. Finally, in the
case of m-dependence, called local dependence in the network setting (Chen and Shao, 2004),
units are independent after distance m, so βnpmq “ 0 for all n, and we can take rn “ m.
Then neighborhood stability only resamples within an m-ball of each observation. Local
dependence is a common dependence structure in settings with network interference, as
discussed in section 5.
Example 6 (Network Data). Let ρn measure shortest path distance. As discussed in Ap
pendix A.1 of Leung (2022), some network formation models can feature exponential neigh
borhood growth where N ̄nprq ď Ceδr for some C, δ ą 0. We thus consider the case of
exponential mixing with rn “ α ́1a log n for a ą 1 (Example 5). For this to satisfy (5), we
require α ́1aδ ď 0.5. Given a ą 1, this implies α ą 2δ, which says that dependence decays
sufficiently quickly relative to neighborhood growth rates. Intuitively if neighborhoods grow
quickly in size, then there are many observations proximate to a given ego, so weak depen
dence requires βnprq to decay faster in r. As discussed in section 3.3 of Leung (2022), the
Kojevnikov et al. (2021) CLT for network dependence requires a similar condition.
Example 7 (Spatial Data). Suppose observations are located in Rd and minimally separated
in space. Then N ̄nprq ď Crd (Jenish and Prucha, 2009, Lemma A.1), and we can consider
the case of polynomial mixing with rn “ na{α for some a ą 1 (Example 5). To satisfy (5), we
require α ́1ad ď 0.5. Given a ą 1, this implies α ą 2d, which, as in the previous example,
requires dependence to decay sufficiently quickly relative to neighborhood growth rates. The
8

Jenish and Prucha (2009) CLT for spatial dependence requires an analogous condition in
Assumption 3(b), which in our notation holds if α ą d.
Remark 1. Our definition of βnprq is similar to the β1,8prq coefficient often used in the
literature (e.g. (1.3) of Bradley (1993) and Assumption 4(c) of Jenish and Prucha (2009)).
The latter instead takes the supremum over sets S2 of arbitrarily large size. Kurisu et al.
(2024) work with a similar coefficient, except they restrict S2 to be a cube in Rd. In their
“increasing domain” case, |S2| can grow at rate n, like in our definition.
We now state the main result.
Theorem 1. Under Assumptions 1–4, SE (2) holds.
To prove the theorem, we adapt the proof of the analogous i.i.d. result, Lemma 2 of Chen
et al. (2022). We make use of a powerful β-mixing coupling lemma due to Berbee (1979)
(Lemma 1), which allows us to reduce certain expressions to the independent case at the
cost of an approximation error involving βn.
4 Neighborhood Stability
This section shows that existing results on the stability of machine learners can be adapted
to verify neighborhood stability. We first note that Assumption 2 is a restriction on both the
moment function and machine learner. The next proposition shows that, under smoothness
conditions on the moment functions, specifically a strengthened version of Assumption 1(b),
Assumption 2 is a consequence of a more primitive neighborhood stability condition imposed
directly on the machine learner.
Proposition 1. Suppose there exist r ą 1 and L ě 0 such that for all f P tψ, νu, k, l P rps,
i, j P rns, and n P N,
E
“`fk,lpZi; gˆq  ́ fk,lpZi; gˆp ́i, ́jqq
 ̆2‰
ď L E“ sup
z
∥gˆpzq  ́ gˆp ́i, ́jqpzq∥2r‰1{r and
E
“`fk,l pZ  ̊
i ; gˆq  ́ fk,lpZ ̊
i ; gˆp ́iqq
 ̆2‰
ď L E“ sup
z
∥gˆpzq  ́ gˆp ́iqpzq∥2r‰1{r.
Then Assumption 2 holds if
max
i,jPrns
E
“ sup
z
∥gˆpzq  ́ gˆp ́i, ́jqpzq∥2r‰1{p2rq “ opn ́1{2q. (6)
9

This is analogous to Corollary 4 of Chen et al. (2022), and the proof is immediate. The
remainder of this section provides primitive sufficient conditions for (6).
4.1 Regularized M-Estimators
Suppose G is a reproducing kernel Hilbert space with kernel κ and norm ∥ ̈∥κ (Berlinet and
Thomas-Agnan, 2011). Let
gˆ “ argmin
gPG
#
1
n
n
ÿ
i“1
lpg; Ziq ` λ∥g∥2
κ
+
where l : G ˆ Z Ñ R` is the loss function and λ ě 0 the penalty parameter. This setup
includes bounded SVM regression, soft margin SVM classification, and ridge regression.
Suppose all g P G share a common codomain CopGq. The following result is a simple
application of Theorem 22 of Bousquet and Elisseeff (2002).
Proposition 2. Suppose κ has bounded range, l is convex in its first argument, and l is
Lipschitz in its first argument in that there exists σ ě 0 such that
|lpy; zq  ́ lpy1; zq| ď σ|y  ́ y1| @ y, y1 P CopGq, z P Z.3
Then there exists Cκ ě 0 such that for all i, j P rns and n P N,
sup
z
∥gˆpzq  ́ gˆp ́i, ́jqpzq∥ ď C2
κσ
2λn |N pi, rnq Y N pj, rnq| a.s.
The result implies (6) when
max
iPrns
|N pi, rnq|
?n “ opλ?nq.
In the standard regime where λ “ Opn ́1{2q, which results in a nondegenerate limiting dis
tribution (Knight and Fu, 2000), this is similar to, though stronger than, (5). See Examples
6 and 7.
4.2 Stochastic Gradient Descent
Suppose the machine learner is parameterized by θ P Θ Ď Rdθ so that gpzq ” gpz; θq, and
the estimated learner is gˆpzq ” gpz; θˆq. To obtain θˆ, we choose an objective ψ : Θ ˆ Z Ñ R
3The restrictions on l are satisfied by quadratic loss if Z is bounded and G is totally bounded (Bousquet and Elisseeff, 2002).
10

and seek to solve
min
θPΘ
n
ÿ
i“1
ψpθ; Ziq.
To compute the solution, we consider the use of stochastic gradient descent (SGD) where we
initialize θˆ0 “ 0 and then apply the updating rule
θˆt`1 “ θˆt  ́ αt`1ψ1pθˆt; Zt`1q
sequentially for all t P rn  ́ 1s. Here αt`1 is the step size and ψ1 is the derivative of ψ with
respect to its first argument. The estimator is θˆ “ θˆn ́1.
Hardt et al. (2016) and Kissel and Lei (2023) assume ψ satisifes the following smoothness
and convexity conditions.
Assumption 5 (Loss Regularity).
(a) (γ-strong convexity) There exists γ ě 0 such that for all z P Z and θ, θ1 P Θ,
ψpθ; zq ě ψpθ1; zq ` ψ1pθ1; zqpθ  ́ θ1q ` γ
2 ∥θ  ́ θ1∥2.
(b) (Lipschitz continuity) There exist L, β ą 0 such that for all z P Z and θ, θ1 P Θ,
|ψpθ; zq  ́ ψpθ1; zq| ď L∥θ  ́ θ1∥ and |ψ1pθ; zq  ́ ψ1pθ1; zq| ď β∥θ  ́ θ1∥.
Define θˆp ́i, ́jq such that gˆp ́i, ́jqp ̈q “ gp ̈, θˆp ́i, ́jqq. The following result is a simple appli
cation of Proposition 5.1 of Kissel and Lei (2023).
Proposition 3. Suppose the learning rate satisfies αt “ t ́aβ ́1 for some a P p0, 1q such that
γ{β ě ap1 ́aq
1 ́2 ́p1 ́aq
log n
n1 ́a . Under Assumption 5, for all i, j P rns and n P N,
∥θˆ  ́ θˆp ́i, ́jq∥ ď 2L
β n ́a|N pi, rnq Y N pj, rnq| a.s. (7)
Suppose L{β is nondegenerate. Then the right-hand side of (7) is opn ́1{2q if
max
iPrns
|N pi, rnq| “ opna ́0.5q.
Since the left-hand side is typically non-degenerate, the learning rate a must exceed 0.5.
With stronger dependence (rn diverges faster) or larger neighborhood sizes (N pi, rq grows
11

faster with r), the condition requires a faster learning rate a. In the case of a close to one,
the requirement is similar to, though stronger than, (5).
Neighborhood stability (6) follows under appropriate smoothness conditions on gp ̈; zq,
as illustrated in the next example.
Example 8 (Ridge Regression). The ridge objective corresponds to
ψpθ; zq “ 1
2 py  ́ x1θq2 ` 1
2 ∥θ∥2
for z “ py, xq. Let BpRq denote the Euclidean ball with radius R centered at the origin.
Suppose Z “ BpRzq and Θ “ BpRθq for some constants Rz, Rθ. Then by Example 3 of Kissel
and Lei (2023), Proposition 3 applies with γ “ λ, L “ R2
zp1 ` Rθq ` λRθ, and β “ R2
z ` λ,
in which case
∥gpzq  ́ gˆp ́i, ́jqpzq∥ ď ∥x1θˆ  ́ x1θˆp ́i, ́jq∥ ď 2pR2
zp1 ` Rθq ` λRθq
Rz2 ` λ
|N pi, rnq Y N pj, rnq|
na .
4.3 Bagged Learners
We lastly consider machine learners that average the predictions of “base” learners trained on
resampled data, for example random forests. Following the setup of Chen et al. (2022), we
draw m observations from rns, either with or without replacement, independently B times
to obtain tZb
rmsuB
b“1, which we will to refer to as “subsamples.” Let ˆhp ̈; Zb
rmsq : Z Ñ G be a
base machine learner trained on Zb
rms. The bagged learner is
gˆp ̈q “ 1
B
B
ÿ
b“1
ˆhp ̈ ; Zb
rmsq.
Let Zb
rms,p ́i, ́jq be defined by replacing each element of tZk : k P N pi, rnq Y N pj, rnqu in Zb
rms
with the corresponding element of tZ ̃k : k P N pi, rnq Y N pj, rnqu. The following result is a
simple extension of Theorem 5 of Chen et al. (2022).
Proposition 4. Let N  ̊prnq ” maxiPrns|N pi, rnq|. Neighborhood stability (6) holds for some
r ą 1 under the following conditions for s, k ě 2r satisfying s ́1 ` k ́1 “ p2rq ́1.
(a) (Parameters) mN  ̊prnq “ opn1{2q and B ́1`mN  ̊prnq
 ̆2{kn1 ́2{k “ op1q.
(b) (Moments) Ersupz∥ˆhpz, Z1
rmsq∥ss1{s _ maxi,jPrns Ersupz∥ˆhpz, Z1
rms,p ́i, ́jqq∥ss1{s “ Op1q.
The second part of the parameters condition holds with a sufficiently large number of
12

subsamples B. The first part restricts the subsample size m in a manner that depends on
how fast dependence decays relative to neighborhood growth rates. The condition allows m
to grow polynomially with n under the following strengthened version of (5):
N  ̊prnq
?n “ Opn ́cq (8)
for some c ą 0. Then the condition holds with m “ opncq. The strengthened condition is
satisfied if the mixing rate decays fast enough relative to the neighborhood growth rate. In
the case of spatial data (Example 7), this holds if α ́1aδ ă 0.5. In the case of network data
(Example 6), this holds if α ́1ad ă 0.5.
5 Simulation Study
We replicate the design used in Emmenegger et al. (2025), which features a potential out
comes model with network interference. We find that computing their estimator without
cross-fitting improves the bias and standard deviation. We also find that increasing the
density of the network used in their design can result in extremely small training fold sizes
when cross-fitting.
In this design, observations are units connected through a network which is considered
non-random or conditioned upon. Then ρn is shortest path distance, and N pi, rq is the set
of units is the set of units no more than path distance r from i. For each unit we observe
a scalar outcome Yi, binary treatment Wi, covariate Ci, and network feature Xi. Outcomes
are given by
Yi “ Wig1pXi, Ciq ` p1  ́ Wiqg0pXi, Ciq ` εi,
where Erεi | Wi, Xi, Cis “ 0. The network features are functions of treatments and covariates
of units connected to i, generating what the authors refer to as “X-spillovers.” Treatments
are unconfounded in that Wi KK εi | Xi, Ci, and the estimand of interest is the average
treatment effect
θ0 “ 1
n
n
ÿ
i“1
Erg1pXi, Ciq  ́ g0pXi, Ciqs.
We replicate the data-generating process in section 3.1 of Emmenegger et al. (2025) that
uses an Erdős-Rényi network. See Appendix A for specifics of the model. The network
formation model draws links between pairs in an i.i.d. fashion with linking probability ∆{n
with ∆ “ 3. This means ∆ is the limiting expected degree (number of connections involving
a given unit), which measures network density.
13

Due to the network features, the outcomes of units that share a common network neighbor
are correlated since both depend upon the common neighbor’s treatment. As discussed in
Example 5, this induces local dependence, which satisfies β-mixing. We can take rn “ 3 to
satisfy Assumption 4 since units are independent if they are at least path distance 3 apart
and therefore lack a common neighbor.
As in Emmenegger et al. (2025) we estimate θ0 using the doubly robust estimator in Ex
ample 1 using random forests to approximate the propensity score and outcome regressions.
We replicate the parameters of the learner specified in their section 3.1, which uses standard
bootstrapped trees; see Appendix A for details. We also compare with subsampled trees
satisfying the setup of subsection 4.3. Since rn “ Op1q, we treat N  ̊prnq in (8) as fixed and
take the subsample size to be m “ mint10 ̃n1{3,  ̃nu to satisfy assumption (a) of Proposition 4
where  ̃n is the size of the training set.
We report results with and without cross-fitting. In the latter case, the random forests are
trained on the entire dataset with the outcome regressions ErYi | Wi “ w, Xi, Cis estimated
separately for w P t0, 1u. Hence řn
i“1 Wi is the sample size used in the outcome regression
for w “ 1. The data-generating process is calibrated such that this is about n{2.
Due to local dependence, Emmenegger et al. (2025) propose the following modification
of cross-fitting to ensure independence between evaluation and training folds. First, they
randomly partition rns into K “ 5 folds. For a given fold k used to compute the estimator,
the training fold for the random forest is the subset of the units not in fold k that are not
connected to a unit in k and do not share a neighbor in common with any unit in k (see
their eq. (6)). The estimates are averaged across the K folds to obtain θˆ. Emmenegger et al.
(2025) further reduce the randomness of this procedure by repeating the procedure B times
and taking θˆ to be the median result, but we only consider the standard case of B “ 1.
Table 1 presents the results. Whether using bootstrapped or subsampled trees, the
Emmenegger et al. (2025) estimator sees a reduction in bias and variance when using the full
sample instead of cross-fitting. We also find that bootstrapped trees perform better in terms
of bias and variance, particularly when cross-fitting. Such trees correspond to a subsample
size m (in the notation of Proposition 4) equal to n, which violates assumption (a) of the
proposition. This indicates that, while the condition is sufficient, it may not be necessary.
Table 2 shows the average size of the training fold when cross-fitting for different values
of ∆ and K. We see that for the base design in Table 1, the fold size is small, only about 10
percent of the full sample, which explains why cross-fitting results in higher variance. When
we increase the expected degree to 8, the fold size becomes negligible. This is because the
network is denser, and almost all units in the training fold are less than distance 3 from the
evaluation fold and end up excluded from training. When the expected degree is 5 but we
14

reduce the number of folds to two, we again obtain close to negligible sample sizes. Despite
the network being sparser, half of all units are in the evaluation fold, so the vast majority of
units in the training fold are again less than distance 3 from the evaluation fold.
Table 1: Simulation Results
No Cross-fitting Cross-fitting n 500 1000 2000 500 1000 2000
Bootstrap Bias 0.0007 0.0005 0.0009 0.0089 0.0019 0.0008
Std 0.0657 0.0465 0.0331 0.0699 0.0474 0.0335
Subsampling Bias 0.0092 0.0087 0.0075 0.0255 0.0219 0.0187
Std 0.0715 0.0499 0.0348 0.0761 0.0526 0.0366
řn
i“1 Wi 251.69 503.41 1007.42 251.69 503.41 1007.42 θ0 0.3155 0.3155 0.3153 0.3155 0.3155 0.3153
5k simulations. “Bias” is the absolute average difference between θˆ and θ0 across sim
ulation draws. “Std” is the standard deviation of θˆ across simulation draws. Crossfitting uses 5 folds.
Table 2: Training Set Sizes
∆ “ 3, K “ 5 ∆ “ 8, K “ 5 ∆ “ 5, K “ 2
n 500 1000 2000 500 1000 2000 500 1000 2000 size 74.12 148.43 297.06 0.46 0.95 1.93 2.03 4.13 8.25
5k simulations. ∆ “ expected degree. K “ number of folds.
6 Conclusion
When cross-fitting with dependent data, existing proposals reduce correlation between train
ing and evaluation folds by excluding from training observations too close to the evaluation
set. This can result in a large number of excluded observations, particularly with network
data. We establish the validity of DML methods using dependent data without cross-fitting
when the machine learner is neighborhood-stable. This requires the learner to be robust to
resampling data within a slowly growing neighborhood of any observation.
When dependence is weaker in the sense that the β-mixing coefficient decays faster with
distance, neighborhood stability imposes weaker restrictions on the learner in that the neigh
borhood can be smaller relative to the sample size. CLTs for dependent data typically re
quire mixing coefficients to decay with distance r sufficiently fast relative to the sizes of
15

r-neighborhoods. We show that, under similar requirements, neighborhood stability holds
for several classes of learners, including regularized M -estimators and bagged learners.
A Simulation Details
This section details the design and random forest parameters used in the simulation study
of Emmenegger et al. (2025), which we follow in section 5. Let tCiun
i“1
ii„d U pr0, 1sq and
tεiun
i“1
ii„d U pr ́
?0.12{2, ?0.12{2sq be independent. Treatments are drawn independently
across units with Wi „ BerpppCiqq where
ppCiq “ 0.15  ̈ 1tCi ă 0.33u ` 0.5  ̈ 1t0.33 ď Ci ă 0.66u ` 0.85  ̈ 1t0.66 ď Ciu.
Let the network be drawn independently of these primitives by drawing links in an i.i.d.
fashion across pairs with probability ∆{n. Set Xi “ 0 if N pi, 1q “ ∅ and
Xi “ 1
|N pi, 1q|
ÿ
jPN pi,1q
pWj ` p1  ́ WjqqCj
otherwise. Finally let
g1pXi, Ciq “ 1.5  ̈ 1tXi P r0.5, 0.7q, Ci ě  ́0.2u
` 4  ̈ 1tXi ě 0.7, Ci ě  ́0.2u ` 0.5  ̈ 1tXi ě 0.5, Ci ă  ́0.2u
` 3.5  ̈ 1tXi ă 0.5, Ci ě  ́0.2u ` 2.5  ̈ 1tXi ă 0.5, Ci ă  ́0.2u
and
g0pXi, Ciq “ 0.5  ̈ 1tXi ě 0.4, Ci ě 0.2u  ́ 0.75  ̈ 1tXi ě 0.4, Ci ă 0.2u
` 0.25  ̈ 1tXi ă 0.4, Ci ě 0.2u  ́ 0.5  ̈ 1tXi ă 0.4, Ci ă 0.2u.
The random forests average over 500 trees. Each tree has a minimum leaf size of 5. For
the propensity score, the criterion is Gini impurity, and tree depth is limited to 2.
B Proofs
Recall that ∥ ̈∥ is the Euclidean norm, and ∥g∥2,i “ Er∥gpZiq∥2s1{2. For any random variable
W , let ∥W ∥Lq “ Er|W |qs1{q. Recall that Z ̃ and Z ̊ are copies of Z with all three mutually
independent.
16

Define Zpiq “ tZj : ρnpi, jq ď rnu and Z ̃piq analogously. Construct Zp ́iq from Z by
replacing Zpiq with Z ̃piq. Recall that gˆ and gˆp ́iq are the machine learners trained on Z and
Zp ́iq, respectively. Let Zp ́i, ́jq “ ZzpZpiq Y Zpjqq, and recall that gˆp ́i, ́jq is the machine
learner trained on Z ̃piq Y Z ̃pjq Y Zp ́i, ́jq.
The following coupling lemma is originally due to Berbee (1979).
Lemma 1 (Viennet (1997), Lemma 5.1). Let X, Y be random variables taking values in the
Borel spaces S1, S2, respectively. Let U „ Upr0, 1sq be independent of pX, Y q. There exists a
random variable Y  ̊ “ f pX, Y, U q for a measurable function f : S1 ˆ S2 ˆ r0, 1s Ñ S2 such
that Y  ̊ KK X, Y  ̊ “d Y , and PpY ‰ Y  ̊q “ βpσpXq, σpY qq.
B.1 Theorem 1
For economy of notation, we suppress the k, l subscripts throughout the argument. It suffices
to show
Jn ”
ˇ ˇ ˇ ˇ
ˇ ˇ ˇ ˇ
?1n
n
ÿ
i“1
``f pZi, gˆq  ́ f pZi, g0q
 ̆
 ́
`F pi, gˆq  ́ F pi, g0q
 ̆ ̆
ˇ ˇ ˇ ˇ
ˇ ˇ ˇ
ˇL1
“ op1q.
As in the proof of Lemma 2 of Chen et al. (2022), we break this into three components:
Jn ď
ˇ ˇ ˇ ˇ
ˇ ˇ ˇ ˇ
?1n
n
ÿ
i“1
``f pZi, gˆq  ́ f pZi, gˆp ́iqq
 ̆ ̆
ˇ ˇ ˇ ˇ
ˇ ˇ ˇ
ˇL1
` ?n max
iPrns
ˇ ˇ
ˇ
ˇF pi, gˆq  ́ F pi, gˆp ́iqq
ˇ ˇ
ˇ
ˇL1
`
ˇ ˇ ˇ ˇ
ˇ ˇ ˇ ˇ
?1n
n
ÿ
i“1
``f pZi, gˆp ́iqq  ́ f pZi, g0q
 ̆
 ́
`F pi, gˆp ́iqq  ́ F pi, g0q
 ̆ ̆
ˇ ˇ ˇ ˇ
ˇ ˇ ˇ
ˇL2
” J1 ` J2 ` J3.
By Assumption 2,
J1 ď ?n max
iPrns
ˇ ˇ
ˇ
ˇf pZi, gˆq  ́ f pZi, gˆp ́iqq
ˇ ˇ
ˇ
ˇL1 “ op1q and
J2 ď ?n max
iPrns
ˇ ˇ
ˇ
ˇf pZ ̊
i , gˆq  ́ f pZ ̊
i , gˆp ́iqq
ˇ ˇ
ˇ
ˇL1 “ op1q
Turning to J3, define Wi “ pf pZi, gˆp ́iqq  ́ f pZi, g0qq  ́ pF pi, gˆp ́iqq  ́ F pi, g0qq, so
J2
3“1
n
n
ÿ
i“1
n
ÿ
j“1
ErWiWjs1tρnpi, jq ď rnu ` 1
n
n
ÿ
i“1
n
ÿ
j“1
ErWiWjs1tρnpi, jq ą rnu ” K1 ` K2.
We will show that K1 and K2 are op1q.
17

Step 1 By Lemma 1, for all i P rns we can construct Zi ̊ such that Zi ̊ KK tZj : j R N pi, rnqu,
Zi ̊
d“ Zi, and PpZi ‰ Zi ̊q ď βnprnq. Define
W ̊
i “ pf pZ ̊
i , gˆp ́iqq  ́ f pZ ̊
i , g0qq  ́ pF pi, gˆp ́iqq  ́ F pi, g0qq.
By Assumption 1(a), there exists W ̄ ă 8 such that supn maxi|Wi| ă W ̄ , so
ErW 2
i  ́ pW  ̊
i q2s ď Er|W 2
i  ́ pW  ̊
i q2|1tWi ‰ W  ̊
i us ď 2W ̄ 2PpWi ‰ W  ̊
i q ď 2W ̄ 2βnprnq.
Following the argument in Chen et al. (2022),
E
“
pW  ̊
i q2‰
ď 2E“
pf pZ ̊
i , gˆp ́iqq  ́ f pZ ̊
i , g0qq2‰
`2E“
pF pi, gˆp ́iqq  ́ F pi, g0qq2‰
“ 2 E “E “
pf pZ ̊
i , gˆp ́iqq  ́ f pZ ̊
i , g0qq2 | Zp ́iq‰‰
`2E“
pF pi, gˆp ́iqq  ́ F pi, g0qq2‰
ď 4L E “∥gˆp ́iq  ́ g0∥q
2,i
‰
where the third line uses Assumption 1(b). Therefore,
max
iPrns
ErW 2
i s ď 2W ̄ 2βnprnq ` 4L max
iPrns
E
“∥gˆp ́iq  ́ g0∥q
2,i
‰,
so
|K1| ď N ̄nprnq max
iPrns
ErW 2
i s ď N ̄nprnq
ˆ
2W ̄ 2βnprnq ` 4L max
iPrns
E
“∥gˆp ́iq  ́ g0∥q
2,i
‰
 ̇
.4
Step 2 We bound K2 by adapting the “double centering” argument of Chen et al. (2022).
Define
W pjq
i “ pf pZi, gˆp ́i, ́jqq  ́ f pZi, g0qq  ́ pF pi, gˆp ́i, ́jqq  ́ F pi, g0qq.
Then
|ErW pjq
i Wjs| “
ˇ
ˇE“W pjq
i ErWj | Zpiq, Zp ́i, ́jq, Z ̃piq, Z ̃pjqs
‰ˇ ˇ
“
ˇ
ˇE“W pjq
i ErWj | Zpiq, Zp ́i, ́jq, Z ̃pjqs
‰ˇ ˇ
“
ˇ
ˇE“W pjq
i ErWj | Zp ́jqs
‰ˇ ˇ
ď W ̄ E “|ErWj | Zp ́jqs|‰ (B.1)
4It may appear that N ̄nprnq is a crude bound, particularly for larger rn growing at faster rates. Then ρnpi, jq ď rn would include pairs of observations that could be fairly distant and hence weakly dependent. The issue is that the covariance between Wi and Wj cannot be shown to decay with ρnpi, jq under the current assumptions. Both can depend on Z through gˆp ́iq and gˆp ́jq in a generic way, and neighborhood stability does not provide further control.
18

by Assumption 1(a). Since ErWj ̊ | Zp ́jqs “ 0,
(B.1) “ W ̄ E“|ErWj  ́ W  ̊
j | Zp ́jqs|‰
ď W ̄ Er|Wj  ́ W  ̊
j |1tZj ‰ Z ̊
j us ď 2W ̄ 2βnprnq. (B.2)
Let W  ̊pjq
i “ pf pZi ̊, gˆp ́i, ́jqq  ́ f pZi ̊, g0qq  ́ pF pi, gˆp ́i, ́jqq  ́ F pi, g0qq. By an argument
similar to (B.2),
|ErW  ̊pjq
i W piq
j s| “
ˇ
ˇE“W  ̊pjq
i ErW piq
j | Z ̊
i , Zp ́i, ́jq, Z ̃piq, Z ̃pjqs
‰ˇ ˇ
“
ˇ
ˇE“W  ̊pjq
i ErW piq
j | Zp ́i, ́jqs
‰ˇ ˇ
ď 2W ̄ 2βnprnq,
and
|ErW pjq
i W piq
j s| “ |ErW  ̊pjq
i W piq
j s`
`ErW pjq
i W piq
j s  ́ ErW  ̊pjq
i W piq
js
 ̆|
ď |ErW  ̊pjq
i W piq
j s| ` W ̄ E“|W pjq
i  ́ W  ̊pjq
i |‰
ď 4W ̄ 2βnprnq.
Combining these derivations,
|ErWiWjs| “
ˇ
ˇE“
pWi  ́ W pjq
i qpWj  ́ W piq
jq
‰
` ErW pjq
i Wjs ` ErW piq
j Wis  ́ ErW pjq
i W piq
js
ˇ ˇ
ď E“
pWi  ́ W pjq
i q2s1{2E“
pWj  ́ W piq
j q2‰1{2 ` 8W ̄ 2βnprnq.
By Assumption 2,
max
i,jPrns
E
“
pWi  ́ W pjq
i q2s1{2 ď max
i,jPrns
2
`E“
pf pZi, gˆp ́iqq  ́ f pZi, gˆp ́i, ́jqqq2‰
`E“
pf pZ ̊
i , gˆp ́iqq  ́ f pZ ̊
i , gˆp ́i, ́jqqq2‰ ̆1{2 “ opn ́1{2q.
Therefore, |K2| “ Opnβnprnqq, and
ˇ ˇ ˇ ˇ
ˇ ˇ ˇ ˇ
?1n
n
ÿ
i“1
``f pZi, gˆq  ́ f pZi, g0q
 ̆
 ́
`F pi, gˆq  ́ F pi, g0q
 ̆ ̆
ˇ ˇ ˇ ˇ
ˇ ˇ ˇ
ˇL2
ď N ̄nprnq  ̈ 4L max
iPrns
E
“∥gˆp ́iq  ́ g0∥q
2,i
‰
` Opnβnprnqq.
This is op1q by Assumptions 3 and 4.
19

B.2 Proposition 2
Fix i, j P rns, and recall the definition of gˆp ́iq,0 prior to (3). The proof of Theorem 22 of
Bousquet and Elisseeff (2002) shows that for any z P Z,
∥gˆpzq  ́ gˆp ́iq,0pzq∥ ď Cκ∥gˆ  ́ gˆp ́iq,0∥κ and ∥gˆ  ́ gˆp ́iq,0∥κ ď Cκσ
2λn .
This result is agnostic towards the distribution of Z and applies to our setup. Then
∥gˆpzq  ́ gˆp ́iq,0pzq∥ ď C2
κσ
2λn . (B.3)
Without loss of generality, suppose the observations in N pi, rnq Y N pj, rnq are labeled
1, . . . , m. Let Zl be the dataset obtained by replacing each element of tZkukPrls with the
corresponding element of tZ ̃kukPrls and gˆl be the analog of gˆ trained on Zl. Then
∥gˆpzq  ́ gˆp ́i, ́jqpzq∥ ď
m ́1
ÿ
l“1
∥gˆl  ́ gˆl`1∥ ď pm  ́ 1q C2
κσ 2λn
using (B.3).
B.3 Proposition 3
Fix i, j P rns, and let θˆp ́iq,0 the estimated parameters trained on tZ1, . . . , Zi ́1, Z ̃i, Zi`1, . . . , Znu
rather than Z. Proposition 5.1 of Kissel and Lei (2023), which is agnostic towards the dis
tribution of Z, establishes (7) with θˆp ́i, ́jq replaced with θˆp ́iq,0.
Without loss of generality, suppose the observations in N pi, rnq Y N pj, rnq are labeled
1, . . . , m. Let Zl be the dataset obtained by replacing each element of tZkukPrls with the
corresponding element of tZ ̃kukPrls and gˆl be the analog of gˆ trained on Zl. Then
∥θˆ  ́ θˆp ́i, ́jq∥ ď
m ́1
ÿ
l“1
∥θˆl  ́ θˆl`1∥ ď pm  ́ 1q 2L
β n ́a|N pi, rnq Y N pj, rnq|.
by Proposition 5.1 of Kissel and Lei (2023).
B.4 Proposition 4
The argument closely follows the proof of Theorem 5 of Chen et al. (2022). Fix i, j P rns. Let
Zb
t be the tth observation (arbitrarily labeled) in the subsample Zb
rms. Let Ab be the event
20

that Zb
t “ Zk for some t ď m and k P N pi, rnq Y N pj, rnq. Define the single-bag increment
∇ˆhbpzq “ ˆhmpz; Zb
rmsq  ́ ˆhmpz; Zb
rms,p ́i, ́jqq.
Then ∇ˆhb “ 0 if Ab does not occur.
Define Rb “ supz∥∇ˆhbpzq1Ab∥  ́ Ersupz∥∇ˆhbpzq1Ab∥ | Zp`i,`jqs where Zp`i,`jq “ Z Y
Z ̃piq Y Z ̃pjq. Then
› ›
› sup
z
›
›gˆpzq  ́ gˆp ́i, ́jqpzq
› ›
› ›
›L2r “
› › › › ›
sup
z
› › › › ›
1
B
B
ÿ
b“1
∇ˆhbpzq1Ab
› › › › ›
› › › ›
›L2r
ď1
B
› › › › ›
B
ÿ
b“1
sup
z
∥∇ˆhb pz q1Ab ∥
› › › ›
›L2r
“1
B
› › › › ›
B
ÿ
b“1
ˆ
Rb ` E
„
sup
z
∥∇ˆhb pz q1Ab ∥
ˇ ˇ ˇ ˇ
Z p`i,`j q
ȷ ̇
› › › ›
›L2r
ď1
B
› › › › ›
B
ÿ
b“1
Rb
› › › ›
›L2r
`1
B
B
ÿ
b“1
› › › ›
E
„
sup
z
∥∇ˆhb pz q1Ab ∥
ˇ ˇ ˇ ˇ
Z p`i,`j q
ȷ› › ›
›L2r
“1
B
› › › › ›
B
ÿ
b“1
Rb
› › › ›
›L2r
`
› › › ›
E
„
sup
z
∥∇ˆh1pz q1A1 ∥
ˇ ˇ ˇ ˇ
Z p`i,`j q
ȷ› › ›
›L2r
” rP 1s ` rP 2s. (B.4)
The second-to-last line follows because subsamples are identically distributed across b con
ditional on Zp`i,`jq.
Turning to the first term,
rP 1s “ 1
BE
„
E
„ˆ B ÿ
b“1
Rb
 ̇2r ˇ
ˇ ˇ ˇ
Z p`i,`j q
ȷȷ 1
2r
ď1
BE
”
`?BC2r
 ̆2r E“R2r
1 | Zp`i,`jq‰
ı1
2r “ C2r
?B }R1}L2r (B.5)
for some constant C2r universal across i, j, and n. The inequality is due to the Marcinkiewicz
Zygmund inequality (see Lemma 7 of Chen et al. (2022), which is (1.2) of Rio (2009)), which
uses the fact that subsamples are i.i.d. across b conditional on Zp`i,`jq.
21

Turning to the second term,
› › › ›
E
„
sup
z
∥∇ˆh1pz q1A1 ∥
ˇ ˇ ˇ ˇ
Z p`i,`j q
ȷ› › ›
›L2r
“
› › › ›
PpA1 | Zp`i,`jqq E
„
sup
z
∥∇ˆh1pzq∥
ˇ ˇ ˇ ˇ
Zp`i,`jq, A1
ȷ› › ›
›L2r
“
› › › ›
PpA1q E
„
sup
z
∥∇ˆh1pzq∥
ˇ ˇ ˇ ˇ
Zp`i,`jq, A1
ȷ› › ›
›L2r
“ PpA1q
› › › ›
E
„
sup
z
∥∇ˆh1pzq∥
ˇ ˇ ˇ ˇ
Zp`i,`jq, A1
ȷ› › ›
›L2r
ď PpA1qE
«
E
« ˆ
sup
z
∥∇ˆh1pzq∥
 ̇2r ˇ
ˇ ˇ ˇ
Zp`i,`jq, A1
ffff 1
2r
“ PpA1q
› › › ›
sup
z
∥∇ˆh1pzq∥
› › ›
›L2r
ď Op1q  ̈ PpA1q. (B.6)
The first equality is the law of total probability. The second uses independence of A1 and
Zp`i,`jq. The first inequality is Jensen’s. The last is the moments assumption (b).
Also observe that
› › › ›
sup
z
∥∇ˆhbpz q1Ab ∥
› › ›
›L2r
“E
« ˆ
sup
z
∥∇ˆhbpzq∥
 ̇2r
1Ab
ff1
2r
ďE
„ˆ
sup
z
∥∇ˆhbpzq∥
 ̇sȷ1{s
E r1Ab s1{k
ď Op1q  ̈ PpA1q1{k (B.7)
where the second line uses Hölder’s inequality and the last line uses the moments assumption
(b).
Combining (B.4)–(B.7),
› ›
› sup
z
›
›gˆpzq  ́ gˆp ́i, ́jqpzq
› ›
›
›
›L2r ď C2r
?B }R1}L2r ` Op1q  ̈ PpA1q
ď C2r
?B
ˆ› › › ›
sup
z
∥∇ˆhb pz q1Ab ∥
› › ›
›L2r
`
› › › ›
E
„
sup
z
∥∇ˆhb pz q1Ab ∥
ˇ ˇ ˇ ˇ
Z p`i,`j q
ȷ› › ›
›L2r
 ̇
` Op1q  ̈ PpA1q
ď C2r
?B
 ́
`Op1q  ̈ PpA1q
 ̆1{k ` Op1q  ̈ PpA1q
 ̄
` Op1q  ̈ PpA1q. (B.8)
By the union bound,
PpAbq ď
n
ÿ
k“1
m
ÿ
t“1
PpZ b
t “ Zkq1␣k P N pi, rnq Y N pj, rnq
(
ďm
n 2N  ̊prnq. (B.9)
22

Then for pn ” mN  ̊prnq,
(B.8) “ O
ˆ ?1B
 ́ pn
n
 ̄1{k
` ?1B
pn
n ` pn
n
 ̇
.
By the rates assumption (a), pn “ op?nq and B ́1p2{k
n n1 ́2{k “ op1q, so the right side is
opn ́1{2q as desired.
References
Andrews, D., “Asymptotics for Semiparametric Econometric Models via Stochastic
Equicontinuity,” Econometrica, 1994, pp. 43–72.
Arsov, N., M. Pavlovski, and L. Kocarev, “Stability of Decision Trees and Logistic
Regression,” arXiv preprint arXiv:1903.00816, 2019.
Austern, M. and W. Zhou, “Asymptotics of Cross-Validation,” arXiv preprint
arXiv:2001.11111, 2020.
Bayle, P., A. Bayle, L. Janson, and L. Mackey, “Cross-Validation Confidence Intervals
for Test Error,” Advances in Neural Information Processing Systems, 2020, 33, 16339
16350.
Berbee, H., “Random Walks with Stationary Increments and Renewal Theory,” Technical
Report 112, Mathematical Centre Tracts, Amsterdam 1979.
Berlinet, A. and C. Thomas-Agnan, Reproducing Kernel Hilbert Spaces in Probability
and Statistics, Springer Science & Business Media, 2011.
Bousquet, O. and A. Elisseeff, “Stability and Generalization,” Journal of Machine Learn
ing Research, 2002, 2 (Mar), 499–526.
Bradley, R., “Some Examples of Mixing Random Fields,” The Rocky Mountain Journal of
Mathematics, 1993, pp. 495–519.
Brown, C., “Inference in Partially Linear Models under Dependent Data with Deep Neural
Networks,” arXiv preprint arXiv:2410.22574, 2024.
Celisse, A. and B. Guedj, “Stability Revisited: New Generalisation Bounds for the Leave
One-Out,” arXiv preprint arXiv:1608.06412, 2016.
23

Chen, L. and Q. Shao, “Normal Approximation Under Local Dependence,” Annals of
Probability, 2004, 32 (3), 1985–2028.
Chen, Q., V. Syrgkanis, and M. Austern, “Debiased Machine Learning Without
Sample-Splitting for Stable Estimators,” Advances in Neural Information Processing Sys
tems, 2022, 35, 3096–3109.
Chernozhukov, V., D. Chetverikov, M. Demirer, E. Duflo, C. Hansen, W. Newey,
and J. Robins, “Double/Debiased Machine Learning for Treatment and Structural Pa
rameters,” The Econometrics Journal, 2018, 21, C1–C68.
, W. Newey, R. Singh, and V. Syrgkanis, “Adversarial Estimation of Riesz Repre
senters,” arXiv preprint arXiv:2101.00009, 2024.
Elisseeff, A. and M. Pontil, “Leave-One-Out Error and Stability of Learning Algorithms
with Applications,” NATO science series sub series iii computer and systems sciences,
2003, 190, 111–130.
Emmenegger, C., M. Spohn, and P. Bühlmann, “Treatment Effect Estimation from
Observational Network Data Using Augmented Inverse Probability Weighting and Machine
Learning,” arXiv preprint arXiv:2206.14591, 2025.
Farrell, M., “Robust Inference on Average Treatment Effects with Possibly more Covariates
than Observations,” Journal of Econometrics, 2015, 189 (1), 1–23.
, T. Liang, and S. Misra, “Deep Neural Networks for Estimation and Inference,” Econo
metrica, 2021, 89 (1), 181–213.
Gilbert, B., A. Datta, J. Casey, and E. Ogburn, “A Causal Inference Framework for
Spatial Confounding,” arXiv preprint arXiv:2112.14946, 2024.
Hardt, M., B. Recht, and Y. Singer, “Train Faster, Generalize Better: Stability of
Stochastic Gradient Descent,” in “International Conference on Machine Learning” PMLR
2016, pp. 1225–1234.
Jenish, N. and I. Prucha, “Central Limit Theorems and Uniform Laws of Large Numbers
for Arrays of Random Fields,” Journal of Econometrics, 2009, 150 (1), 86–98.
Kissel, N. and J. Lei, “Black-Box Model Confidence Sets Using Cross-Validation with
High-Dimensional Gaussian Comparison,” arXiv preprint arXiv:2211.04958, 2023.
24

Knight, K. and W. Fu, “Asymptotics for Lasso-Type Estimators,” Annals of Statistics,
2000, pp. 1356–1378.
Kojevnikov, D., V. Marmer, and K. Song, “Limit Theorems for Network Dependent
Random Variables,” Journal of Econometrics, 2021, 222 (2), 882–908.
Kurisu, D., K. Kato, and X. Shao, “Gaussian Approximation and Spatially Dependent
Wild Bootstrap for High-Dimensional Spatial Data,” Journal of the American Statistical
Association, 2024, 119 (547), 1820–1832.
Leung, M., “Causal Inference Under Approximate Neighborhood Interference,” Economet
rica, 2022, 90 (1), 267–293.
and P. Loupos, “Graph Neural Networks for Causal Inference Under Network Con
founding,” arXiv preprint arXiv:2211.07823, 2025.
Rio, E., “Moment Inequalities for Sums of Dependent Random Variables Under Projective
Conditions,” Journal of Theoretical Probability, 2009, 22 (1), 146–163.
Viennet, G., “Inequalities for Absolutely Regular Sequences: Application to Density Esti
mation,” Probability Theory and Related Fields, 1997, 107 (4), 467–492.
Wang, Y., C. Gu, and T. Otsu, “Graph Neural Networks: Theory for Estimation with
Application on Network Heterogeneity,” arXiv preprint arXiv:2401.16275, 2024.
25

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:52.900Z
- **Text Length:** 48248 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 25 of 25
