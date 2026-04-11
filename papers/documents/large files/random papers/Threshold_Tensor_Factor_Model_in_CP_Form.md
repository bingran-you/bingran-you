# PDF Document: Bolivar et al. - 2025 - Threshold Tensor Factor Model in CP Form.pdf

**File Path:** Bolivar et al. - 2025 - Threshold Tensor Factor Model in CP Form.pdf

**Processed Date:** 2026-02-10T18:14:02.918Z

**File Size:** 598.99 KB

**Total Pages:** 44

**Extracted Pages:** 44

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3421

**Title:** Threshold Tensor Factor Model in CP Form

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Threshold Tensor Factor Model in CP Form
Stevenson Bolivar
Department of Statistics, Rutgers University
and
Rong Chen ∗
Department of Statistics, Rutgers University
and
Yuefeng Han †
Department of Applied and Computational Mathematics and Statistics,
University of Notre Dame
November 26, 2025
Abstract
This paper proposes a new Threshold Tensor Factor Model in Canonical Polyadic (CP) form for tensor time series. By integrating a thresholding autoregressive structure for the latent factor process into the tensor factor model in CP form, the model captures regime-switching dynamics in the latent factor processes while retaining the parsimony and interpretability of low-rank tensor representations. We develop estimation procedures for the model and establish the theoretical properties of the result-
ing estimators. Numerical experiments and a real-data application illustrate the practical performance and usefulness of the proposed framework.
JEL Classifications: C13, C32, C55
Keywords: CP Decompositions, Factor models, Threshold auotoregressive models, Highdimensional, Tensor data.
∗Rong Chen’s research was supported in part by National Science Foundation grants DMS-2319260 and DMS-2413858. †Yuefeng Han’s research was supported in part by National Science Foundation grant DMS-2412578.
1
arXiv:2511.19796v1 [stat.ME] 24 Nov 2025

1 Introduction
Tensor time series data, denoted as Xt ∈ Rd1×d2×⋯×dK for t = 1, ... , T , is a collection of
multidimensional arrays observed sequentially over time. Such tensor time series arise in
various scientific and financial applications, including multi-category product import-export
volume among a group of countries over time (Chen et al. 2022), quarterly economic indices
of different countries (Chen, Tsay & Chen 2020), returns of portfolio constructed by size,
book to market ratio, and momentum (Li & Xiao 2021), multivariate spatial-temporal data
(Chen, Yun, Chen & Yao 2020, Barigozzi et al. 2025), and many others.
Bolivar et al. (2025) provides a review of recent developments in autoregressive and
factor modeling for such data. For example, Chen et al. (2021), Xiao et al. (2023) and Li &
Xiao (2024) extend the autoregressive model to matrix-valued time series (MAR), while Li
& Xiao (2021) and Wang et al. (2024) extend it further to tensor time series. Another widely
used approach in high-dimensional data is dimension reduction through factor models.
The two main decompositions for tensor data structures are Tucker decomposition and
CP decomposition (Kolda & Bader 2009). Mimicking Tucker decomposition, Wang et al.
(2019), Chen et al. (2022) and Chen & Fan (2023) introduced a tensor factor model in
Tucker form, with factors in tensor form but of much smaller dimensions than the observed
tensors. Other notable contributions in this area include Chen, Tsay & Chen (2020), Han,
Chen, Yang & Zhang (2024), Han et al. (2022), Chen et al. (2025), and others.
In contrast, Han, Yang, Zhang & Chen (2024) propose a tensor factor model in CP
form (TFM-cp) that uses a set of univeriate factor processes that are uncorrelated, and
rank-1 tensor factor loadings. This approach mimics the CP decomposition. This model
structure facilitates the analysis of underlying dynamics in high-dimensional tensor time
series through a set of univariate uncorrelated latent factor processes, making it significantly
more convenient for studying the dynamics of the time-series. The TFM-cp is specified as:
Xt =
r
∑
j=1
λjfjtuj1 ∘ uj2 ∘ ⋯ ∘ ujK + Et, (1)
2

where each fjt is a one-dimensional latent factor, ujk ∈ Rdk are the loading vectors nor
malized to ‖ujk‖2 = 1, Et is a zero mean idiosyncratic noise tensor with potentially weak
cross-correlations among its elements and assumed to be uncorrelated with the latent fac
tors, and r is the rank of the decomposition, or equivalently the number of factors. Without
loss of generality, it is assumed Efj2t ≤ C < ∞, for all 1 ≤ j ≤ r. Then, the signal strengths
are contained in λj. Here, {ujk, 1 ≤ i ≤ r} are not necessarily orthogonal. Chang et al.
(2023), Han, Yang, Zhang & Chen (2024) showed that the model can be very useful in
many applications.
We observe that the existing approaches mentioned above are all linear models. It
has been widely acknowledged that in many applications linear time series models are not
sufficient to capture various nonlinear phenominons encountered and there has been a large
literature in study nonlinear time series models (Tong 1990b, Tsay & Chen 2018, De Gooijer
et al. 2017). Modern machine learning algorithms such as deep neural networks are also
large nonlinear systems and have shown to be extremely powerful in providing accurate
predictions (Zhou et al. 2025, Luo et al. 2025).
Motivated by observed regime-switching phenomenon in applications and encouraged
by its simple form, regime-switching models, particularly the threshold models, are a class
of powerful nonlinear time series models that have been studied extensively and have been
shown to be a simple, elegant and useful parametric model (Tong 1990b, Chan & Tong 1986,
Sims & Zha 2006, Tsay 1989, Ang & Timmermann 2012, Hansen 2011) in many applications
ranging from economics, biology and ecology, signal processing, and many others. As an
attempt to move from the linear models to nonlinear ones for tensor time series, in this
paper we propose a Threshold dynamic Tensor Factor Model in CP form (T-TFM-cp),
which extends the standard TFM-cp model by incorporating a threshold mechanism into
the latent factor dynamics. Specifically, we model the factors fjt using a general Threshold
Autoregressive (TAR) model:
fjt = TAR(pj, sj, zjt), j = 1, ... , r. (2)
3

The TAR model allows the factor dynamics to switch between different regimes depending
on the value of a threshold variable zjt. This variable can be a function of observable
variables (at time t) or lagged latent factors. The parameters pj and sj determine the
specific form of the TAR model for factor j.
There is a vast literature on TAR models (Tong 1990b, Chan & Tong 1986, Sims & Zha
2006, Tsay 1989, Ang & Timmermann 2012). For matrix autoregressive models, recent
work such as Bucci (2024), Wu & Chan (2023), and Yu, Li, Zhang & Tong (2024) develops
new methods for modeling regime-specific changes in the coefficient matrices. Related
but conceptually distinct, Liu & Chen (2020) introduce a threshold vector factor model,
and Liu & Chen (2022) study a threshold matrix factor model in Tucker form. In their
framework, the loading matrices differ across regimes and regime switching is controlled
by a threshold variable. The latent factors are assumed to be stationary but are not
equipped with an explicit dynamic model, and therefore these approaches do not provide
forecasting capability. In contrast, the proposed T-TFM-cp model assumes common loading
structures across all regimes, while allowing the latent factor processes to switch between
regimes according to one or more threshold variables. A distinctive feature of T-TFM
cp is its flexibility: all factors may share the same threshold variable, or each factor can
be governed by its own thresholding rule. Moreover, unlike the threshold factor models
mentioned above, T-TFM-cp incorporates an explicit dynamic specification for the factor
processes, thereby enabling prediction, similar in spirit to the dynamic matrix factor model
of Yu, Chen, Xiao & Han (2024).
In this paper, we extend the TFM-cp model to a nonlinear threshold framework–rather
than extending the TFM-Tucker model–for several reasons. First, the TFM-cp model (1)
is uniquely defined up to sign changes when the signal strengths are ordered, facilitating
interpretation. Second, by decomposing the factor processes into uncorrelated univariate
time series, TFM-cp enables a more flexible modeling of temporal dynamics. Compared
with Tucker-based representations, CP models typically require fewer factors to capture the
4

essential signal structure, achieving a favorable balance between parsimony and explanatory
power. Third, the uncorrelated univariate factor structure enables independent modeling
of regime-switching dynamics for each factor, potentially with different threshold variables,
threshold values, or numbers of regimes.
By combining CP decomposition with TAR dynamics, the proposed model offers a pow
erful and flexible framework for analyzing high-dimensional tensor time-series data exhibit
ing regime-switching behavior in the latent factors. Balancing parsimony, interpretability,
and statistical efficiency, it provides a valuable tool for researchers working with complex
multiway temporal data in fields such as neuroscience, finance, and signal processing.
The remainder of the paper is organized as follows. Section 2 presents the proposed
model in detail, including the TAR dynamics of the latent factors and the estimation
procedures. Section 3 establishes the theoretical properties of the estimators. Sections
4 and 5 demonstrate the effectiveness of the model through simulation studies and an
empirical application, respectively. Section 6 concludes with a discussion of future research
directions.
2 Model Setting and Estimation
In this section, we focus on a more specific specification of the T-TFM-cp model intro
duced in (1) and (2). In particular, we assume that each latent factor follows a threshold
autoregressive (TAR) process of the form
fj,t =
⎧{{{{{
⎨{{{{{⎩
φ(1)
j,1fj,t−1 + ⋯ + φ(1)
j,pj fj,t−pj + ς (1)
j ξt if zj,t ∈ (−∞, sj,1],
φ(2)
j,1fj,t−1 + ⋯ + φ(2)
j,pj fj,t−pj + ς (2)
j ξt if zj,t ∈ (sj,1, sj,2],
⋮
φ(L)
j,1 fj,t−1 + ⋯ + φ(L)
j,pj fj,t−pj + ς (L)
j ξt if zj,t ∈ (sj,L−1, ∞),
(3)
where L is the number of regimes, sj,l are the threshold values, pj are the autoregressive
orders, φ(l)
j are the autoregressive coefficients for regime l, and ξt are white noise processes
5

with variances 1 for l = 1, 2, ⋯ , L. In the Self-Exciting TAR (SETAR) case, the exogenous
threshold variable zt is assumed to be past values of fjt, e.g. fj,t−τj, where τj is the
delay parameter. In the following we use the notations sj = (sj,1, ..., sj,L−1)⊤ ∈ RL−1,
φ(l)
j = (φ(l)
j,1, ..., φ(l)
j,pj )⊤ ∈ Rpj , and φj = (φ(1)⊤
j , ..., φ(L)⊤
j )⊤ ∈ RLpj .
The TAR model is a powerful and elegant nonlinear extension of the linear autoregres
sive (AR) model, capable of capturing regime switching driven by an observable threshold
variable. It has been widely used to model economic and financial data exhibiting asym
metric dynamics and nonlinear patterns. By allowing different autoregressive behaviors
depending on the regime of the threshold variable zj,t−d, the model can represent phe
nomena such as asymmetric cycles, shifts in mean levels, and volatility clustering. This
flexibility makes TAR models particularly suitable for characterizing distinct dynamics
during economic expansions and recessions (Tong 1990b, Chan & Tong 1986, Tsay 1989).
We refer to the combination of the TFM-cp model in (1) and the dynamic TAR speci
fication in (3) as the TAR Tensor Factor Model in CP form (T-TFM-cp). To estimate the
parameters of the T-TFM-cp model, we adopt a two-step estimation strategy. In the first
step, we estimate the TFM-cp model while ignoring the dynamic structure of the latent
factors. This yields estimates of both the loading vectors ujk and the factor process fĵt.
The procedure follows Chen et al. (2024), which combines a composite PCA initialization
with an iterative simultaneous orthogonalization (ISO) algorithm. Details and theoreti
cal properties can be found in Chen et al. (2024). Denote the estimated loading vectors
by ûjk and the estimated factors by fĵt = Xt ×kK=1 v̂⊤
jk, where v̂jk is the j-th column of
̂U k(̂U ⊤
k ̂U k)−1, with ̂U k = (û1k, ⋯ , ûrk) ∈ Rdk×r. Under this definition, fĵt serves as an
estimate of λjfjt in (1), implicitly absorbing the signal strength λj. This scaling does not
affect the results of the simulation study or the real data analysis; it only changes the
magnitude of the estimated factors.
Second, once the factor process estimates fĵt are obtained, we fit an individual TAR
model to each estimated factor process using standard identification and estimation tech
6

niques for TAR models (Tong 1990a, Tsay 1989, Tsay & Chen 2018). In particular, given
the threshold variable, the number of regimes, and the AR orders of each regime, the
AR coefficients and threshold values are estimated by least squares. Specifically, for each
j = 1, ... , r, the estimates φ̂j and ŝj, j = 1, ... , r minimizes
T
∑
t=pj+1
(fĵ ,t −
L
∑
l
I(zj,t ∈ (sj,l−1, sj,l))
pj
∑
k=1
φ(l)
j,kfĵ ,t−k)
2
. (4)
Although the estimation of the threshold vector sj is strictly a non-convex optimization
problem, it is typically not computationally intensive since one only needs to check the
observed values of the threshold variable; all values between two consecutive observations
of the threshold variable are equivalent (Chan 1993, Hansen 2000). Sequential update
of the least squares (when adding or dropping one observation) makes exhaustive search
computationally efficient, though more advanced algorithms are available (Li & Tong 2016,
Li et al. 2011). The number of regimes and the AR orders are typically determined by BIC
or similar measures, as well as diagnostic model checking procedures involving residual
analysis, testing for remaining nonlinearity, and evaluating forecasting performance (Tong
1990b, Hansen 2000, Li et al. 2011, Gonzalo & Pitarakis 2002, Chan & Tsay 1998).
The two-step estimation strategy is standard for models consisting of multiple compo
nents, such as the T-TFM-cp model. Similar procedures have been widely used in the
literature on dynamic (vector) factor models; see, for example, Stock & Watson (2016),
Gourieroux & Jasiak (2001), Barigozzi & Hallin (2016), Otto & Salish (2022).
Threshold variable determination is essential for building a threshold model. When
there is no prior knowledge on the threshold variable, a data-driven procedure is needed
in order to search for a suitable one. In standard univariate threshold models, a typical
candidate pool is the lag variables (Tong & Lim 1980, Tong 1990b, Chan 1993, Tong 2010)
and identification is commonly performed by comparing a handful of plausible specifications.
When multiple time series are involved, as in our setting, it may be desirable to identify
one or a small number of common threshold variables, which can substantially improve
7

model interpretability. When one considers a large candidate pool consisting of exogenous
variables, a trial-and-error approach can be extremely time consuming, complicated more by
the multiple comparison problem at the end. In such cases, the reverse approach proposed
in (Wu & Chen 2007, Liu & Chen 2016) provides an effective alternative. It is also worth
noting that different factor processes may rely on different types of threshold variables:
some may follow self-exciting dynamics using lagged values of the factor itself, while others
may require observable exogenous threshold variables.
3 Theoretical Properties of the Estimators
In this section, we present some theoretical properties of the proposed two-stage estimation
procedures. We introduce some notations first. Let d = ∏K
k=1 dk, dmax = max{d1, ..., dK}.
The matrix Frobenius norm is defined as ‖A‖F = (∑ij ai2j)1/2. Define the spectral norm as
‖A‖2 = max
‖x‖2=1,‖y‖2=1 ‖x⊤Ay‖2.
Considering that the loading vector ujk of TFM-cp can only be identified with a change in
sign, we employ
‖ûjkû⊤
jk − ujkuj⊤k‖2 = √1 − (û⊤
jkujk)2 = sup
z⟂ujk
|z⊤ûjk|
to quantify the discrepancy between ûjk and ujk.
To establish the asymptotic properties of the proposed procedures, we impose the fol
lowing assumptions.
Assumption 1. The idiosyncratic noise process Et are independent Gaussian tensors,
conditioning on the factor process {fjt, 1 ≤ j ≤ r, t ∈ Z}. In addition, there exists some
constant σ > 0, such that
E(v⊤vec(Et))2 ≤ σ2‖v‖22, ∀ v ∈ Rd.
Assumption 2. Let λ1 ≥ λ2 ≥ ⋯ ≥ λr > 0. Suppose λ1 ≍ λr ≍ λ.
8

Assumption 3. Assume the factor process fjt, 1 ≤ j ≤ r, is stationary and strong α
mixing in t, with Efj2t < ∞. Let F t = (f1t, ..., frt)⊤. For any v ∈ Rr with ‖v‖2 = 1,
mtax P (∣v⊤F t∣ ≥ x) ≤ c1 exp (−c2xγ2) , (5)
where c1, c2 are some positive constants and 0 < γ2 ≤ 2. In addition, the mixing coefficient
satisfies
α(m) ≤ exp (−c0mγ1) (6)
for some constant c0 > 0 and γ1 > 0, where
α(m) = sup
t
{∣P(A ∩ B) − P(A)P(B)∣ ∶ A ∈ σ(fjs, 1 ≤ j ≤ r, s ≤ t), B ∈ σ(fjs, 1 ≤ j ≤ r, s ≥ t + m)}.
Assumption 1 closely resembles the noise conditions found in foundational studies such
as Bai & Ng (2002), Bai (2003), Lam et al. (2011), Lam & Yao (2012), and other notable
contributions in the factor model literature. For ease of exposition, we assume that the
noise tensor is independent across time t, hence allowing for weak cross-sectional contem
poraneous dependence. Although introducing a weak temporal correlation among noises,
as proposed by Bai & Ng (2002), is feasible, it significantly complicates the theoretical
framework. Additionally, we adopt the normality assumption for technical convenience,
although it can be generalized to accommodate exponential-type tail conditions, as seen in
Chen et al. (2024).
Assumption 2 is a standard condition in factor models, such as Chen et al. (2024)
and Han, Yang, Zhang & Chen (2024). In the case of strong factor models, we have
λ = √d. Assumption 3 requires the tail probability of fjt to exhibit exponential decay,
which is a standard assumption. In particular, when γ2 = 2, this implies that fjt follows
a sub-Gaussian distribution. The mixing condition is a well-established assumption that
encompasses a wide variety of time series models, including causal ARMA processes with
continuous innovations, as discussed in Tong (1990b), Tsay (2005), Fan & Yao (2003),
Rosenblatt (2012), Tsay & Chen (2018), among others.
9

Next, we impose assumptions for the TAR structure of the factor processes, depend
ing on whether the threshold variable zjt is self-exciting (i.e., the past values of fjt)
or is an exogenous observable variable. If zjt is self-exciting with zjt = fj,t−τj, then
Y jt = (fj,t−1, ... , fj,t−(pj∨τj)) is a Markov chain. Denote its m-step transition proba
bility by Pm(y, A), where y ∈ Rpj∨τj and A is a Borel set. If zjt is observable, let
Y jt = (fj,t−1, ... , fj,t−pj, zjt), Denote its m-step transition probability by Pm(y, A), where
y ∈ Rpj+1 and A is a Borel set.
Assumption 4. The innovation of the latent TAR process (3), ξjt are i.i.d. with Eξjt = 0,
Eξj2t = 1 and Eξj4t < ∞ for each 1 ≤ j ≤ r, and ξjt has a bounded, continuous and positive
density on R.
Assumption 5. The Markov Chain Y jt (1 ≤ j ≤ r) admits a unique invariant measure
Π(⋅) such that there exist C0 > 0 and ρ ∈ [0, 1), for any y and any m, ‖Pm(y, ⋅)−Π(⋅)‖TV ≤
C0(1 + ‖y‖)ρm, where ‖ ⋅ ‖TV and ‖ ⋅ ‖ denote the total variation norm and the Euclidean
norm, respectively.
Assumption 6. Assume that
(i) (when zjt is self-exciting with zjt = fj,t−τj): There exist nonrandom vectors wjl =
(wj,l,1, ... , wj,l,pj)⊤ with wj,l,τj = sj,l such that (φ(l)
j − φ(l+1)
j )⊤wjl ≠ 0 for l =
1, ... , L − 1.
(ii) (when zjt is an observable variable): Assume that zjt has a bounded, con
tinuous and positive density on R, and is Markovian. There exist vector
wjl = E[(fj,t−1, ... , fj,t−pj)⊤|zjt = sj,l] such that (φ(l)
j − φ(l+1)
j )⊤wjl ≠ 0 for
l = 1, ... , L − 1.
Assumptions 4, 5, 6 are commonly used in theoretical analysis of TAR models. Under
Assumption 5, Y jt is V-uniformly ergodic with V (⋅) = K(1 + ‖ ⋅ ‖), a condition that is
stronger than geometric ergodicity. For a detailed explanation of V-uniform ergodicity, see
10

Chapter 16 in Meyn & Tweedie (2012). In the specific case where all threshold variables are
lags of fjt and errors are homoscedastic across all regimes, Assumption 4 combined with the
condition maxl ∑pj
i=1 |φ(l)
j,i| < 1 suffices for Assumption 5 to hold. More details can be found
in Chan & Tong (1985) and Chan (1989). Assumption 6 implies that the autoregressive
function is discontinuous at the thresholds sj,l. In Assumption 6(i), if τj > pj, then wj,l,τj
may not be a component of wjl. In this scenario, Assumption 6(i) is equivalent to the
conditions φ(l)
j ≠ φ(l+1)
j for 1 ≤ l ≤ L − 1, which are both necessary and sufficient for the
identification of all thresholds. Assumption 6 (ii) is similar to Assumption 3.6 in Zhang
et al. (2024).
Han, Yang, Zhang & Chen (2024) proposed iterative procedure ISO to estimate the fac
tor loading vectors of TFM-cp using auto-covariance tensor. When the number of factors r
is fixed, the procedure achieves convergence rate ‖ûjkû⊤
jk −ujkuj⊤k‖2 = OP(σd1m/a2xλ−1T −1/2 +
σ2λ−2), 1 ≤ k ≤ K. Using their iterative procedure, we can further establish the theoretical
properties of the estimated latent factor process fĵt in (1).
Proposition 3.1. Suppose Assumptions 1, 2, 3 hold. Assume r is fixed. Let fĵt =
λ−1Xt ×kK=1 û⊤
jk be the estimated factors using the iterative procedure in Han, Yang, Zhang
& Chen (2024), assuming the initialization condition is satisfied and the signal strength λ
is known. Then, with probability at least 1 − T −c − ∑K
k=1 e−dk ,
∣fĵ t − fjt∣ ≤ C ( σ√dmax
λ√T + σ
λ ) , (7)
for all 1 ≤ t ≤ T , and
∣1
T −h
T
∑
t=h+1
fî,t−hfĵ t − 1
T −h
T
∑
t=h+1
fi,t−hfjt∣ ≤ C ( σ√dmax
λ√T + σ2
λ2 ) , (8)
for all 1 ≤ i, j ≤ r and 0 ≤ h ≤ T /4, where c is a positive constant.
The proposition establishes a non-asymptotic bound for the estimated factors fĵt. It
demonstrates that consistent factor estimation requires the signal-to-noise ratio (λ/σ) to
increase to infinity, ensuring sufficient information about the signal at each time point t.
11

As expected, a higher signal-to-noise ratio leads to faster convergence, as stronger factors
provide more information in the observed data. Additionally, (8) shows that the error
rate between the sample (auto-)covariance of the estimated factors and the true sample
(auto-)cross-moment is oP(T −1/2) when λ/σ ≫ √dmax + T 1/4. In the case of a strong
factor model setting (Bai & Ng 2002, Lam et al. 2011), where λ/σ ≍ √d, this condition
is equivalent to T ≪ d2, which generally holds. This suggests that under such conditions,
using the estimated factor processes for model building and inference of the TAR component
is equivalent to using the underlying true factors, without any efficiency loss. The statistical
rates in (7) and (8) provide a basis for further modeling of the estimated factors.
The following theorems present the convergence rate and asymptotic normality for the
least squares estimators (4) in the second-stage TAR modeling of the latent factor process,
using fĵt as the true factor process. Theorems 3.1 and 3.2 separately examine the cases of
self-exciting threshold variables and observable threshold variables.
Theorem 3.1. Consider zjt in (3) as self-exciting with zjt = fj,t−τj, for some 1 ≤ j ≤ r.
Suppose Assumptions 1, 2, 3, 4, 5, 6(i) hold. Assume r is fixed. Let fĵt = λ−1Xt ×kK=1 v̂⊤
jk
be the estimated factors using the iterative procedure in Han, Yang, Zhang & Chen (2024),
assuming the initialization condition is satisfied and the signal strength λ is known. If
σ√dmax/(λ√T ) + σ2/λ2 → 0 as T → ∞, then τ̂j → τj in probability. Moreover,
ŝj − sj = OP ( 1
T + σ√dmax
λ√T + σ
λ ) , (9)
φ̂j − φj = OP ( √1T + σ√dmax
λ√T + σ
λ ) . (10)
Furthermore, if the factor strength satisfies λ/σ ≫ T 1/2 + √dmax, then
√T (φ̂j − φj) ⇒ N (0, Σj), (11)
where Σj = diag{(ς(1)
j )2Σj1, ..., (ς(L)
j )2ΣjL} with Σj−,l1 = E[f̃j,t−1f̃⊤
j,t−11{sj,l−1 < fj,t−τj ≤
sj,l}], 1 ≤ l ≤ L, and f̃j,t−1 = (fj,t−1, ..., fj,t−pj)⊤, sj,0 = −∞, sj,L = +∞, and ς(l)
j is
defined in (3).
12

Theorem 3.2. Consider zjt in (3) as an observable variable, for some 1 ≤ j ≤ r. Suppose
Assumptions 1, 2, 3, 4, 5, 6(ii) hold. Assume r is fixed. Let fĵt = λ−1Xt ×kK=1 v̂⊤
jk be
the estimated factors using the iterative procedure in Han, Yang, Zhang & Chen (2024),
assuming the initialization condition is satisfied and the signal strength λ is known. Then,
ŝj − sj = OP ( 1
T ) , (12)
φ̂j − φj = OP ( √1T + σ√dmax
λ√T + σ2
λ2 ) . (13)
Furthermore, if the factor strength satisfies λ/σ ≫ T 1/4 + √dmax, then
√T (φ̂j − φj) ⇒ N (0, Σj), (14)
where Σj = diag{(ς(1)
j )2Σj1, ..., (ς(L)
j )2ΣjL} with Σj−,l1 = E[f̃j,t−1f̃⊤
j,t−11{sj,l−1 < zjt ≤
sj,l}], 1 ≤ l ≤ L, and f̃j,t−1 = (fj,t−1, ..., fj,t−pj)⊤, sj,0 = −∞, sj,L = +∞, and ς(l)
j is
defined in (3).
In the case of self-exciting threshold variables, the estimation error of the threshold level
sj in (9) comprises two components: the conventional 1/T rate from Chan (1993), Li & Ling
(2012) and Zhang et al. (2024) and the estimation error of the factor process from the first
stage in (7). This additional error arises because the lagged estimated factor process serves
as the threshold variable. Since the estimated factors determine the Markovian regime at
each time t, we require a non-asymptotic convergence rate for all fĵt, as established in
Proposition 3.1. The convergence rate provided by Theorem 3 in Han, Yang, Zhang &
Chen (2024) is insufficient for this purpose. In contrast, for observable threshold variables,
the threshold level sj in (12) achieves the standard 1/T rate without additional factor
estimation error.
The presence of factor estimation error in the self-exciting threshold variable case leads
to larger AR coefficient estimation errors compared to the observable threshold variable case.
For observable thresholds, the error consists of the parametric rate T −1/2 and the error from
the sample covariance matrix using estimated factors as in (8). For self-exciting thresholds,
13

an additional term σ/λ appears, reflecting the signal-to-noise ratio. Consequently, the
least squares estimator φ̂j satisfies a central limit theorem only when the signal strength
is sufficiently high: specifically, λ/σ ≫ √dmax + T 1/4 for observable threshold variables
and λ/σ ≫ √dmax + T 1/2 for self-exciting threshold variables. When the signal is weaker,
consistency remains achievable, but the factor loading and idiosyncratic noise Et dominate
the estimation error. In such regimes, the factor process error in (8) and/or (7) dominates
the parametric rate, preventing the derivation of a tractable asymptotic distribution.
4 Simulations
We conducted a simulation study to assess the performance of the proposed T-TFM-cp
model in matrix form across a range of settings. The scenarios systematically vary the
dimensions, sample sizes, and signal-to-noise ratios (SNR, λ/σ). Specifically, we generate
data from weak factor model with λ = 1,
Xt = Mt + Et =
3
∑
j=1
u1,ju′2,jfj,t + Et, (15)
where, for j = 1, 2, 3, the components u1,j and u2,j are generated by drawing i.i.d. Gaussian
entries with zero mean and then normalizing the resulting vectors. All elements of Et have
variance σ2. The latent factors follow the TAR models
f1,t =
⎧{{
⎨{{⎩
0.5f1,t−1 + 0.2f1,t−2 + a1,t, if f1,t−1 < 0,
0.7f1,t−1 − 0.6f1,t−2 + a1,t, if f1,t−1 ≥ 0,
f2,t =
⎧{{
⎨{{⎩
0.8f2,t−1 + 0.1f2,t−2 + a2,t, if f2,t−1 < 0,
−0.4f2,t−1 − 0.6f2,t−2 + a2,t, if f2,t−1 ≥ 0,
(16)
f3,t =
⎧{{
⎨{{⎩
0.7f3,t−1 + a3,t, if f3,t−1 < 0,
−0.8f3,t−1 + a3,t, if f3,t−1 ≥ 0,
14

where aj,t are independent Gaussian white noise with zero mean and unit variance (ςj2 = 1),
for j = 1, 2, 3. All results are based on 100 simulation replications.
Given that the TFM-cp factors are identifiable only up to sign changes and permuta
tions, we first aligned the estimated factors with the true simulated factors using optimal
sign matching and permutation selection. We then evaluate the estimation accuracy of the
loading vectors using the Mean Squared Error (MSE):
MSEj = |û1,j − u1,j|22
d1
+ |û2,j − u2,j|22
d2
, j = 1, 2, 3.
We use the estimation procedure of Han, Yang, Zhang & Chen (2024) to estimate the TFM
cp model, using lag 1 (h = 1) auto-moments in the estimation. Figure 1 presents boxplots
of the logarithm of MSEj for the three loading vectors, under three choices of matrix
dimensions, three SNR levels, and three time-series lengths. As expected, the estimation
error decreases as the sample size, dimensionality, and SNR increase.
SNR:0.5 SNR:1 SNR:2 T:200 T:500 T:1000 T:200 T:500 T:1000 T:200 T:500 T:1000
5x7 10x14 20x25
U1 U2 U3 U1 U2 U3 U1 U2 U3 U1 U2 U3 U1 U2 U3 U1 U2 U3 U1 U2 U3 U1 U2 U3 U1 U2 U3
−12.5
−10.0
−7.5
−5.0
−2.5
0.0
−12.5
−10.0
−7.5
−5.0
−2.5
0.0
−12.5
−10.0
−7.5
−5.0
−2.5
0.0
Figure 1: Boxplot of log of MSE for estimating the loading vectors (j = 1, 2, 3), for combi
nations of matrix dimension (5 × 7, 10 × 14, 20 × 25, SNR level (0.5, 1, 2) and time series
length (200, 500, 1000).
Next we study the impact of using the estimated factor process as well as its lag variable
15

as the threshold variable, compared to using the underlying true factor process and its lag
threshold variable. To isolate the impact, we fix the true TFM-cp rank r = 3, use the
true AR order each factor as in (16), and set the threshold delay to its true value (τj = 1).
Treating the estimated fĵ,t (j = 1, 2, 3) as observed time series, we estimate the threshold
model (the AR parameters and the threshold value) under the true configuration and the
estimated threshold variable fĵ,t−1. Given the estimated threshold variable fĵ,t−1 and the
estimated threshold ŝ1,j, each observation fĵ,t is classified into one of the two regimes (lower
vs. upper). We then compute the proportion of observations for which the inferred regime
matches the underlying true regime (i.e. fi,t−1 < 0 for the lower regime and fi,t−1 ≥ 0
for the upper regime). For comparison, we repeat the procedure using the “true” factor
process fi,t and the “true” threshold variable fi,t−1 to estimate the AR coefficients and the
threshold s̃1,j. Using fj,t−1 and s̃1,j, we compute the corresponding correct-classification
proportion. Figure 2 shows the comparison of these two proportions under the same model
settings as Figure 1. As expected, the results based on the true factor process do not vary
across different dimensions or SNR levels, since they are independent of the first-stage TFM
cp estimation. In contrast, the results based on the estimated factor processes approach
the performance of the true-factor case as the dimension or SNR increases, reflecting the
improved accuracy of the first-stage estimation.
Prediction of Xt+1 given X1, ... , Xt is carried out by first forecasting the factor process.
To assess the prediction performance, we generated 200 additional observations for each
simulation replicate beyond the original sample size T . Without updating the estimated
model parameters, rolling one-step ahead forecasts are produced, and prediction accuracy
is assessed using the sum of squared prediction errors
T +199
∑
t=T
||̂Xt(1) − Xt+1||2F .
Here, for t ≥ T , ̂Xt(1) = ∑3
j=1 û1,jû′
2,jfĵ,t(1), where fĵ,t(1) denotes the one-step-ahead
forecast from the estimated TAR model. These forecasts are based on the TFM-cp factor
estimates f1̂ ,t, f2̂ ,t, f3̂ ,t, obtained by projecting Xt onto the space spanned by the estimated
16

SNR:0.5 SNR:1 SNR:2 T:200 T:500 T:1000 T:200 T:500 T:1000 T:200 T:500 T:1000
5x7 10x14 20x25
123 123 123 123 123 123 123 123 123
40
60
80
100
40
60
80
100
40
60
80
100
Factor
Estimated Real
Figure 2: Proportion of correctly identified threshold regimes using the estimated factor
process (marked as ‘Estimated’) versus the true factor process (marked as ‘Real’).
loading vectors û1,j, û2,j, j = 1, 2, 3, which were estimated at T . For comparison, prediction
errors were also computed using the underlying true factor processes fj,t to build the TAR
model and forecast fj,t+1, which leads to predictions of Xt+1. Figures 3 presents the box
plots of the prediction errors, comparing the prediction using estimated loading vectors
and the estimated factor process (marked as “Estimated”), and that using the underlying
true loading vectors and the underlying true factor processes (marked as “Real”). The
results exhibit a pattern similar to that in Figure 2: when the dimension of Xt is large, the
prediction performance based on estimated quantities approaches that obtained using the
true underlying factors.
To eliminate the impact of the unpredictable noise in the observed Xt+1, Figure 4 shows
the performance of
T +199
∑
t=T
||X̂ t(1) − M t+1||2F ,
where M t is the signal part in (15). The difference between the two approaches becomes
slightly more pronounced, but the overall pattern remains consistent.
17

SNR:0.5 SNR:1 SNR:2 T:200 T:500 T:1000 T:200 T:500 T:1000 T:200 T:500 T:1000
5x7 10x14 20x25
0.4
0.6
0.8
1.0
0.4
0.6
0.8
1.0
0.4
0.6
0.8
1.0
Estimated Real
Figure 3: Boxplot of one-step ahead prediction error MSE for the prediction of the obser
vations Xt for t = T + 1, ... , T + 200. The boxes marked as ‘Estimated’ is obtained using
the estimated loading vectors and estimated threshold model parameters obtained at T .
The boxes marked as ‘Real’ is obtained using the underlying true loading vectors and true
factor processes.
These simulation results demonstrate the effectiveness of our proposed approach in
accurately estimating the loading vectors, identifying regime switching in latent factors,
and predicting future observations in tensor time series data. Across a wide range of
model settings, including varying dimensionality, sample size, and signal-to-noise ratios,
the method consistently delivers reliable estimation and forecasting performance.
5 Real data example: Multi-country economic indeces
In this section, we demonstrate the proposed T-TFM-cp model by analyzing the matrix
time series containing several economic indices from several countries.
5.1 Data
We use the dataset from Chen, Tsay & Chen (2020), which contains quarterly observations
from 1990Q4 to 2016Q4 from the 14 countries including: United States of America (USA),
18

SNR:0.5 SNR:1 SNR:2 T:200 T:500 T:1000 T:200 T:500 T:1000 T:200 T:500 T:1000
5x7 10x14 20x25
0.2
0.4
0.6
0.8
0.2
0.4
0.6
0.8
0.2
0.4
0.6
0.8
Estimated Real
Figure 4: Boxplot of one-step ahead prediction error MSE for the prediction of the signal
Mt for t = T + 1, ... , T + 200. The boxes marked as ‘Estimated’ is obtained using the
estimated loading vectors and estimated threshold model parameters obtained at T . The
boxes makred as ‘Real’ is obtained using the underlying true loading vectors and true factor
processes.
Canada (CAN), New Zealand (NZL), Australia (AUS), Norway (NOR), Ireland (IRL),
Denmark (DNK), United Kingdom (GBR), Finland (FIN), Sweden (SWE), France (FRA),
Netherlands (NLD), Austria (AUT), Germany (DEU). Our analysis focuses on ten macroe
conomic indicators: CPGDFD.d2lnsa, CPGREN.d2lnsa, CPALTT01.d2lnsa, IRLT.dlv,
IR3TIB.dlv, PRINTO01.dln, PRMNTO01.dln, LORSGPOR.dln, XTEXVA01.GP, and
XTIMVA01.GP.
Table 1 summarizes each series, including its short name, its mnemonic (the series label
used in the OECD database), the transformation applied to the series, and a brief descrip
tion of the data. All data are obtained from the OECD Database. In the transformation
column, Δ denotes the first difference, and Δ ln denotes the first difference of the logarithm.
GP denotes the growth rate measure from the last period.
Figure 5 shows the standardized time series data; the rows and the indices by the
columns represent countries.
19

Short name Mnemonic Tran Description
CPI: Food CPGDFD Δ2 ln Consumer Price Index: Food, seasonally adjusted CPI: Ener CPGREN Δ2 ln Consumer Price Index: Energy, seasonally adjusted CPI: Tot CPALTT01 Δ2 ln Consumer Price Index: Total, seasonally adjusted IR: Long IRLT Δ Interest Rates: Long-term government bond yields IR: 3-Mon IR3TIB Δ Interest Rates: 3-month Interbank rates and yields P: TIEC PRINTO01 Δ ln Production: Total industry excluding construction P: TM PRMNTO01 Δ ln Production: Total Manufacturing GDP LQRSGPOR Δ ln GDP: Ori-
ginal (Index 2010 = 1.00, seasonally adjusted) IT: Ex XTEXVA01 Δ ln International Trade: Total Export Value (Goods) IT: IM XTIMVA01 Δ ln International Trade: Total import value (goods)
Table 1: Data transformations and variable definitions
5.2 Exploratory Analysis
As an exploratory analysis, univariate ARMA model is fitted to each individual time se
ries, using corrected Akaike Information Criterion (AICc) approach (Hurvich & Tsai 1989,
Hyndman & Khandakar 2008) for model determination.
Among the 130 selected univariate ARMA models, 28 are MA(1), 23 are AR(1), 16 are
AR of order 4 or 5, 15 are white noise, 10 are ARMA(1,1), and some other less frequently
used models. Figure 6 displays the orders of the ARMA models for each time series selected
by AICc. Notably, the first three indices (CPI related) show a different pattern from the
remaining seven indices.
We stack each observed matrix into a 130 dimensional vector, and estimate a vector
factor model (VFM) with two factors using the estimation procedure of Lam & Yao (2012),
with h = 1. The number of factors is determined using the eigen-ratio criterion in Lam
& Yao (2012). A TFM-cp model is estimated with two factors, again using the estimation
procedure of Han, Yang, Zhang & Chen (2024) with lag 1 (h = 1) auto-moments. Two
factors are used so to be comparable with the VFM model. Note that the loading matrix in
the VFM model uses 130×2−2 parameters, while that in TFM-cp uses (13−1+10−1)×2
parameters for the two (standardized) rank-one 13 × 10 matrices.
Figure 7 shows the estimated factors of VFM (left) and TFM-cp (right). The two
20

CPI: Food CPI: Ener CPI: Tot IR: Long IR: 3−Mon P: TIEC P: TM GDP IT: Ex IT: IM
USA CAN NZL AUS NOR DNK GBR FIN SWE FRA NLD AUT DEU
1992−1
1996−1
2000−1
2004−1
2008−1
2012−1
2016−1
1992−1
1996−1
2000−1
2004−1
2008−1
2012−1
2016−1
1992−1
1996−1
2000−1
2004−1
2008−1
2012−1
2016−1
1992−1
1996−1
2000−1
2004−1
2008−1
2012−1
2016−1
1992−1
1996−1
2000−1
2004−1
2008−1
2012−1
2016−1
1992−1
1996−1
2000−1
2004−1
2008−1
2012−1
2016−1
1992−1
1996−1
2000−1
2004−1
2008−1
2012−1
2016−1
1992−1
1996−1
2000−1
2004−1
2008−1
2012−1
2016−1
1992−1
1996−1
2000−1
2004−1
2008−1
2012−1
2016−1
1992−1
1996−1
2000−1
2004−1
2008−1
2012−1
2016−1
−−0242
−−52025.....05050
−−0242
−202...505
−−−024642
−−5202....0505
−−5202....0505
−−5202....0505
−−52025.....05050
−−−02642
−−−024642
−−−02642
−−5202....0505
Figure 5: Scaled time series, mean zero and s2 = 1.
figures are relatively similar, except for the financial crisis period around the beginning of
2009. During the period, VFM tries to capture the extreme event with one factor, while
TFM-cp uses both factors with less magnitude.
To further compare the estimated VFM and TFM-cp, each column of the estimated
loading matrix of the VFM model is rearranged into a matrix according to the column and
row classifications of the corresponding observed element in the stacked vector. Figure 8
shows the rearranged matrix of the VFM loading vectors (left) and the estimated rank-one
loading matrices of TFM-cp model (right). There are some similarity in both models. For
example, the first three indices (CPI related) are loaded heavily on the second factor in
both models. Index 4 (long interest rate) is very weakly related to Factor 1, but (negatively)
loads on the second Factor in VFM, but not for TFM-cp. Most of the indeces have negative
loadings on Factor 2 for VFM, while the CPI related indices have negative loading on Factor
1 for TFM-cp. The TFM-cp model show more country-wide differences in the loading. For
example, in TFM-cp, DNK, NOR and AUS are very weakly loaded on Factor 1 in TFM-cp,
21

CPI: Food CPI: Ener CPI: Tot IR: Long IR: 3−Mon P: TIEC P: TM GDP IT: Ex IT: IM USA
CAN
NZL
AUS
NOR
DNK
GBR
FIN
SWE
FRA
NLD
AUT
DEU pq pq pq pq pq pq pq pq pq pq
024
024
024
024
024
024
024
024
024
024
024
024
024
Figure 6: Order of ARM A(p, q) model for each individual time series, selected by corrected
Akaike Information Criterion (AICc)
−30
−20
−10
0
10
1990−4
1991−4
1992−4
1993−4
1994−4
1995−4
1996−4
1997−4
1998−4
1999−4
2000−4
2001−4
2002−4
2003−4
2004−4
2005−4
2006−4
2007−4
2008−4
2009−4
2010−4
2011−4
2012−4
2013−4
2014−4
2015−4
2016−4
f1t f2t
−30
−20
−10
0
10
1990−4
1991−4
1992−4
1993−4
1994−4
1995−4
1996−4
1997−4
1998−4
1999−4
2000−4
2001−4
2002−4
2003−4
2004−4
2005−4
2006−4
2007−4
2008−4
2009−4
2010−4
2011−4
2012−4
2013−4
2014−4
2015−4
2016−4
f1t f2t
Figure 7: Estimated factors using VFM (left) and TFM-cp (right)
and NOR is weakly loaded on Factor 2.
For each model, we compute the in-sample fitted values and obtain residuals for each
time series. Figure 9 reports the in-sample coefficient of determination, R2 = 1 − ∑(yt −
ŷt)2/ ∑ yt2 for each series under the best ARMA model selected by AICc shown in Figure 6,
as well as the VFM and TFM-cp specifications. The overall in-sample R2 values for the
ARMA, VFM, and TFM-cp models are 0.2993, 0.3839, and 0.2937, respectively, using 258,
257 = 130 × 2 − 3, and 42 = 2(10 − 1) + (13 − 1) parameters.
Figure 9 indicates that the ARMA models provide markedly better fits for the first three
CPI related series—albeit with relatively high ARMA orders (see Figure 6)—whereas the
22

USA
CAN
NZL
AUS
NOR
DNK
GBR
FIN
SWE
FRA
NLD
AUT
DEU
CPI:Food
CPI:Ener
CPI:Tot
IR:Long
IR:3−Mon
P:TIEC
P:TMGDP
IT:Ex
IT:IM
Factor 1
USA
CAN
NZL
AUS
NOR
DNK
GBR
FIN
SWE
FRA
NLD
AUT
DEU
CPI:Food
CPI:Ener
CPI:Tot
IR:Long
IR:3−Mon
P:TIEC
P:TMGDP
IT:Ex
IT:IM
Factor 2
−0.2
−0.1
0.0
0.1
0.2
USA
CAN
NZL
AUS
NOR
DNK
GBR
FIN
SWE
FRA
NLD
AUT
DEU
CPI:Food
CPI:Ener
CPI:Tot
IR:Long
IR:3−Mon
P:TIEC
P:TMGDP
IT:Ex
IT:IM
Factor 1
USA
CAN
NZL
AUS
NOR
DNK
GBR
FIN
SWE
FRA
NLD
AUT
DEU
CPI:Food
CPI:Ener
CPI:Tot
IR:Long
IR:3−Mon
P:TIEC
P:TMGDP
IT:Ex
IT:IM
Factor 2
−0.2
−0.1
0.0
0.1
0.2
Figure 8: Estimated loading matrices. Left: VFM. Right: TFM-cp.
factor models yield better fits for indices 5–10. None of the models captures the dynamics
of the fourth index (IR: Long) satisfactorily.
More specifically, for the first three series, the overall R2 values are 0.5941 (ARMA),
0.3331 (VFM), and 0.3437 (TFM-cp); for the remaining indices, the corresponding values
are 0.1633, 0.3470, and 0.3521. It is worth noting that VFM employs substantially more
parameters than TFM-cp.
CPI: Food CPI: Ener CPI: Tot IR: Long IR: 3−Mon P: TIEC P: TM GDP IT: Ex IT: IM USA
CAN
NZL
AUS
NOR
DNK
GBR
FIN
SWE
FRA
NLD
AUT
DEU
ARMA
Vec−FM
CP−FM
ARMA
Vec−FM
CP−FM
ARMA
Vec−FM
CP−FM
ARMA
Vec−FM
CP−FM
ARMA
Vec−FM
CP−FM
ARMA
Vec−FM
CP−FM
ARMA
Vec−FM
CP−FM
ARMA
Vec−FM
CP−FM
ARMA
Vec−FM
CP−FM
ARMA
Vec−FM
CP−FM
0.0
0.5
0.0
0.5
0.0
0.5
0.0
0.5
0.0
0.5
0.0
0.5
0.0
0.5
0.0
0.5
0.0
0.5
0.0
0.5
0.0
0.5
0.0
0.5
0.0
0.5
R2
Figure 9: In-sample R2 for each time series under the AICc selected ARMA model, VFM
and TFM-cp models.
23

5.3 Analysis using T-TFM-cp
The VFM and TFM-cp do not specify any temporal structure of the factors. In the following
we present results of fitting ARMA and TAR models for the estimated factors under each
setting. The results show that there is indeed a threshold phenomenon among the factors.
Table 2 reports the models estimated using the first 65 observations; the remaining
40 observations are reserved for evaluating out-of-sample predictive performance. Based
on preliminary exploration, we use the log growth of U.S. GDP, zt = ln(U S.GDPt) −
ln(U S.GDPt−1) as the threshold variable for all factors. U.S. GDP growth is often used
as the threshold variable in economic studies as it is a good representative for the status
of the economy (e.g., Enders et al. 2007, Osińska et al. 2020, Hansen 2011, Tiao & Tsay
1994). Over the estimation period, the resulting threshold variable has a mean of 0.0130
and a standard deviation of 0.0050
The T-TFM-cp estimation results reveal markedly different dynamics across regimes
for both factors. Factor 1 exhibits a clear threshold effect at 0.0113 (with delay of d = 4
quarters), splitting the sample into a relatively small regime with 17 observations and a large
regime with 44 observations. The upper regime (Regime 1) shows pronounced dynamics,
with a strong AR(1) effect (0.90) and a significant negative AR(2) term (−0.43), indicating
substantial oscillatory behavior. In contrast, Regime 2 is well-described by a simple AR(1)
structure with a more moderate coefficient (0.65), suggesting a smoother dynamics. The
threshold variable used for factor 2 is the same as factor 1, with a smaller threshold value,
resulting that the upper regime has more observations. Note that the overall residual
variances and AIC values of both TAR model for factor 1 and factor 2 are much smaller
that of fitting the linear ARMA models to the (same) factors under TFM-cp. The overall
variances and AIC values under T-TFM-cp is also smaller than that under VFM using both
ARMA and TAR model for the factor processes.
The estimated models using the full sample size is shown in Table 4 in Appendix
Appendix B. The T-TFM-cp model under full sample size is very similar to that of using
24

the first 65 observations. Even though the threshold values are slightly different, the
proportions of observations in each regime are similar, showing the relative stability of the
estimated models.
Figure 10 illustrates the regimes identified by the T–TFM-cp model. Red dots indicate
Regime 1, and blue triangles indicate Regime 2. The top panel shows the threshold variable
for reference, while the middle and bottom panels display Factors 1 and 2, respectively. The
two factors exhibit slightly different thresholds, with values of 0.0113 for Factor 1 and 0.0121
for Factor 2, highlighting subtle differences in their regime separation.
−0.02
−0.01
0.00
0.01
0.02
Threshold 1 Threshold 2
diff ln(US.GDP)
−10
0
10
Factor 1
−10
0
10
1990−4
1991−4
1992−4
1993−4
1994−4
1995−4
1996−4
1997−4
1998−4
1999−4
2000−4
2001−4
2002−4
2003−4
2004−4
2005−4
2006−4
2007−4
2008−4
2009−4
2010−4
2011−4
2012−4
2013−4
2014−4
2015−4
2016−4
Factor 2
Figure 10: The threshold variable and the estimated factors with regime labels of the T
TFM-cp model.
To assess the performance of each model listed in Table 2, out-sample rolling 1-step
prediction errors are obtained for the last 40 observations in the data set, from first quarter
of 2007 to forth quarter of 2016. In the rolling prediction, the structure of the models
(e.g. number of factors, the estimated loading vectors, the ARMA orders or the Threshold
AR orders, and threshold variable, the number of regimes and the threshold values) are
fixed as listed in Table 2. Other model parameters, including the factors in the prediction
period, the parameters in ARMA or the TAR, are updated using observations 1 to t for
the prediction of fj,t+1 and Xt+1.
Table 3 shows the prediction MSEs over the prediction period under five different models
25

Model Series Regime Coefficients Threshold σ2 AIC
TFM-cp
ARMA
factor1 – ar1: 0.72 (0.09) – 5.77 302.13 factor2 – ma1: 0.68 (0.15)
ma2: 0.16 (0.15) – 4.74 290.06
VFM
ARMA
factor1 – ma1: 0.71 (0.12)
ma2: 0.18 (0.11) – 10.58 342.25 factor2 – ar1: 0.56 (0.16)
ma1: 0.42 (0.20) – 4.37 285.23
TFM-cp
TAR
factor1 Regime 1 (17 obs) ar1: 0.90 (0.17)
ar2: -0.43 (0.16) 0.0113 (d = 4)
4.18 88.07 Regime 2 (44 obs) ar1: 0.65 (0.13)
factor2 Regime 1 (25 obs)
ar1: 1.1 (0.21) ar2: -0.67 (0.19) ar3: 0.50 (0.20) ar4: -0.58 (0.18)
0.0121
(d = 4)
3.25 76.49
Regime 2 (36 obs) ar1: 0.57 (0.12)
VFM
TAR
factor1 Regime 1 (38 obs)
ar1: 0.61 (0.15) ar2: -0.30 (0.18) ar3: 0.33 (0.17) ar4: -0.56 (0.16)
0.0147
(d = 4)
7.62 128.21
Regime 2 (23 obs) ar1: 0.88 (0.14)
factor2 Regime 1 (53 obs) ar1: 0.63 (0.13)
ar2: -0.10 (0.13) 0.0179 (d = 2)
3.41 80.15 Regime 2 (10 obs) ar1: 1.09 (0.22)
Table 2: Estimated parameters of ARMA and TAR models fitted to the factor process f1̂ t,
based on the first 65 observations (indices 1–10).
(individual ARMA, ARMA-VFM, ARMA-TFM-cp, T-VFM and T-TFM-cp). In addition,
the table also reports the overall MS of the original data in the prediction period, and
the in-sample MSE of TFM-cp in the same period, computed using the loading vectors
estimated from the full dataset, as references. In the last two rows, we report the prediction
performance of the first three indices and the others separately.
From the table, it is seen that T-TFM-cp performed the best considering all indices
and indices 4-10 only. The individual ARMA models perform the best for the three CPI
indices, similar to that has been revealed in Figure 9. It is also evident that there is indeed a
threshold phenomenon and using the threshold model is useful, as seen from the comparison
between ARMA-TFM-cp and T-TFM-cp, and the comparison between ARMA-VFM and
26

T-VFM.
Indices MS(Xt) TFM-cp ARMA VFM VFM TFM-cp TFM-cp (MSE) ARMA TAR ARMA TAR
All 1.1937 0.6541 0.8494 1.0974 0.9301 1.0222 0.8218 4-10 1.1606 0.6183 0.9907 1.0588 0.9264 1.0583 0.7735 1-3 1.2710 0.7376 0.5196 1.1873 0.9387 0.9382 0.9344
Table 3: Prediction performance comparison: one-step rolling prediction mean squared
error of the last 40 observations of five different models. The sample mean squares of
observations in the prediction period and the in-sample mean square errors of TFM-cp in
the prediction period are included as references.
Figure 11 shows the prediction MSE of each of the 40 prediction times. It seems that
for the economic indices 4 to 10, the five models are comparable except during the financial
crisis period (mid 2008 to mid 2009), in which T-TFM-cp out-performs ARMA and ARMA
TFM-cp in 2008, and ARMA-VFM in 2009. For the CPI related indices, individual ARMA
models perform the best except for the second half of year 2008,
6 Conclusions
In this paper we proposed a threshold Tensor factor model in CP form, in which the
latent factor processes in a TFM-cp model are assumed to follow threshold AR models. It
effectively provides a threshold type dynamics for high dimensional tensor time series that
allows regime change according to the threshold variable. The model also allows prediction
capability while enjoys significant dimension reduction using the factor model structure.
While we have shown that the proposed model is useful in empirical studies, there
are challenging issues that are worth further investigation. For example, the two-step
estimation procedure works only when the signal to noise ratio in the factor model part is
sufficiently high. An effective joint estimation procedure may be needed when the signal
to noise ratio is relatively smaller. Hunting for an effective threshold variable is always a
27

0.0
2.5
5.0
7.5
10.0
2006−4 2007−4 2008−4 2009−4 2010−4 2011−4 2012−4 2013−4 2014−4 2015−4 2016−4
ARMA ARMA−TFM−cp ARMA−VFM T−TFM−cp T−VFM
Prediction MSE: All indices
0.0
2.5
5.0
7.5
10.0
2006−4 2007−4 2008−4 2009−4 2010−4 2011−4 2012−4 2013−4 2014−4 2015−4 2016−4
ARMA ARMA−TFM−cp ARMA−VFM T−TFM−cp T−VFM
Prediction MSE: Indices 1 to 3
0.0
2.5
5.0
7.5
10.0
2006−4 2007−4 2008−4 2009−4 2010−4 2011−4 2012−4 2013−4 2014−4 2015−4 2016−4
ARMA ARMA−TFM−cp ARMA−VFM T−TFM−cp T−VFM
Prediction MSE: Indices 4 to 10
Figure 11: Prediction MSE at each t under five different methods.
challenge in threshold modeling.
References
Ang, A. & Timmermann, A. (2012), ‘Regime changes and financial markets’, Annual Review
of Financial Economics 4(1), 313–337.
Bai, J. (2003), ‘Inferential theory for factor models of large dimensions’, Econometrica
71(1), 135–171.
Bai, J. & Ng, S. (2002), ‘Determining the number of factors in approximate factor models’,
Econometrica 70(1), 191–221.
Barigozzi, M. & Hallin, M. (2016), ‘Generalized dynamic factor models and volatilities:
recovering the market volatility shocks’, The Econometrics Journal 19(1), C33–C60.
28

Barigozzi, M., La Vecchia, D. & Liu, H. (2025), ‘General spatio-temporal factor models for
high-dimensional random fields on a lattice’, The Annals of Statistics 53(1), 268–294.
Bolivar, S., Huang, S.-C. & Chen, R. (2025), ‘Analysis of tensor time series’, Annual Review
of Statistics and Its Application 13.
Bucci, A. (2024), ‘A smooth transition autoregressive model for matrix-variate time series’,
Computational Economics pp. 1–30.
Chan, K. (1989), ‘A note on the geometric ergodicity of a markov chain’, Advances in
Applied Probability 21(3), 702–704.
Chan, K.-S. (1993), ‘Consistency and limiting distribution of the least squares estimator
of a threshold autoregressive model’, The Annals of Statistics pp. 520–533.
Chan, K. S. & Tong, H. (1985), ‘On the use of the deterministic lyapunov function for the
ergodicity of stochastic difference equations’, Advances in Applied Probability 17(3), 666
678.
Chan, K.-S. & Tsay, R. S. (1998), ‘Limiting properties of the least squares estimator of a
continuous threshold autoregressive model’, Biometrika 85(2), 413–426.
Chan, K. & Tong, H. (1986), ‘On estimating thresholds in autoregressive models’, Journal
of Time Series Analysis 7, 179–190.
Chang, J., He, J., Yang, L. & Yao, Q. (2023), ‘Modelling matrix time series via a tensor cp
decomposition’, Journal of the Royal Statistical Society Series B: Statistical Methodology
85(1), 127–148.
Chen, B., Han, Y. & Yu, Q. (2024), ‘Estimation and inference for CP tensor factor models’,
arXiv preprint arXiv:2406.17278 .
Chen, B., Han, Y. & Yu, Q. (2025), ‘Diffusion index forecast with tensor data’, arXiv
preprint arXiv:2511.02235 .
29

Chen, E. Y. & Fan, J. (2023), ‘Statistical inference for high-dimensional matrix-variate
factor models’, Journal of the American Statistical Association 118(542), 1038–1055.
Chen, E. Y., Tsay, R. S. & Chen, R. (2020), ‘Constrained factor models for high
dimensional matrix-variate time series’, Journal of the American Statistical Association
115(530), 775–793.
Chen, E. Y., Yun, X., Chen, R. & Yao, Q. (2020), ‘Modeling multivariate spatial-temporal
data with latent low-dimensional dynamics’, arXiv preprint arXiv:2002.01305 .
Chen, R., Xiao, H. & Yang, D. (2021), ‘Autoregressive models for matrix-valued time series’,
Journal of Econometrics 222(1, Part B), 539–560.
Chen, R., Yang, D. & Zhang, C.-H. (2022), ‘Factor models for high-dimensional tensor time
series (with discussion)’, Journal of the American Statistical Association 117(537), 94
116.
De Gooijer, J. G. et al. (2017), Elements of nonlinear time series analysis and forecasting,
Vol. 37, Springer.
Enders, W., Falk, B. & Siklos, P. L. (2007), ‘A threshold model of real US GDP and
the problem of constructing confidence intervals in tar models’, Studies in Nonlinear
Dynamics and Econometrics, Forthcoming .
Fan, J. & Yao, Q. (2003), Nonlinear Time Series: Nonparametric and Parametric Methods,
Springer Series in Statistics, Springer-Verlag, New York.
Gonzalo, J. & Pitarakis, J.-Y. (2002), ‘Estimation and model selection based inference in
single and multiple threshold models’, Journal of Econometrics 110(2), 319–352.
Gourieroux, C. & Jasiak, J. (2001), ‘Dynamic factor models’, Econometric Reviews
20(4), 385–424.
30

Han, Y., Chen, R., Yang, D. & Zhang, C.-H. (2024), ‘Tensor factor model estimation by
iterative projection’, The Annals of Statistics 52(6), 2641–2667.
Han, Y., Chen, R. & Zhang, C.-H. (2022), ‘Rank determination in tensor factor model’,
Electronic Journal of Statistics 16(1), 1726–1803.
Han, Y., Yang, D., Zhang, C.-H. & Chen, R. (2024), ‘CP factor model for dynamic tensors’,
Journal of the Royal Statistical Society Series B: Statistical Methodology 86(5), 1383
1413.
Hansen, B. E. (2000), ‘Sample splitting and threshold estimation’, Econometrica 68(3), 575
603.
Hansen, B. E. (2011), ‘Threshold autoregression in economics’, Statistics and its Interface
4(2), 123–127.
Hurvich, C. M. & Tsai, C.-L. (1989), ‘Regression and time series model selection in small
samples’, Biometrika 76(2), 297–307.
Hyndman, R. J. & Khandakar, Y. (2008), ‘Automatic time series forecasting: the forecast
package for R’, Journal of Statistical Software 27, 1–22.
Kolda, T. G. & Bader, B. W. (2009), ‘Tensor decompositions and applications’, SIAM
review 51(3), 455–500.
Lam, C. & Yao, Q. (2012), ‘Factor modeling for high-dimensional time series: inference for
the number of factors’, The Annals of Statistics 40(2), 694–726.
Lam, C., Yao, Q. & Bathia, N. (2011), ‘Estimation of latent factors for high-dimensional
time series’, Biometrika 98(4), 901–918.
Li, D., Li, W. K. & Ling, S. (2011), ‘On the least squares estimation of threshold autore
gressive moving-average models’, Statistics and its Interface .
31

Li, D. & Ling, S. (2012), ‘On the least squares estimation of multiple-regime threshold
autoregressive models’, Journal of Econometrics 167(1), 240–253.
Li, D. & Tong, H. (2016), ‘Nested sub-sample search algorithm for estimation of threshold
models’, Statistica Sinica pp. 1543–1554.
Li, Z. & Xiao, H. (2021), ‘Multi-linear tensor autoregressive models’, arXiv preprint
arXiv:2110.00928 .
Li, Z. & Xiao, H. (2024), ‘Cointegrated matrix autoregression models’, arXiv preprint
arXiv:2409.10860 .
Liu, X. & Chen, E. Y. (2022), ‘Identification and estimation of threshold matrix-variate
factor models’, Scandinavian Journal of Statistics 49(3), 1383–1417.
Liu, X. & Chen, R. (2016), ‘Regime-switching factor models for high-dimensional time
series’, Statistica Sinica pp. 1427–1451.
Liu, X. & Chen, R. (2020), ‘Threshold factor models for high-dimensional time series’,
Journal of Econometrics 216(1), 53–70.
Luo, Z., Han, Y. & Yu, X. (2025), ‘Supervised dynamic dimension reduction with deep
neural network’, arXiv preprint arXiv:2508.03546 .
Meyn, S. P. & Tweedie, R. L. (2012), Markov chains and stochastic stability, Springer
Science & Business Media.
Osińska, M., Kufel, T., Błażejowski, M. & Kufel, P. (2020), ‘Modeling mechanism of eco
nomic growth using threshold autoregression models’, Empirical Economics 58(3), 1381
1430.
Otto, S. & Salish, N. (2022), ‘Approximate factor models for functional time series’, arXiv
preprint arXiv:2201.02532 .
32

Rosenblatt, M. (2012), Markov Processes, Structure and Asymptotic Behavior: Structure
and Asymptotic Behavior, Vol. 184, Springer Science & Business Media.
Sims, C. & Zha, T. (2006), ‘Were there regime switches in US monetary policy?’, The
American Economic Review pp. 54–81.
Stock, J. & Watson, M. (2016), Dynamic Factor Models, Factor-Augmented Vector Autore
gressions, and Structural Vector Autoregressions in Macroeconomics, in J. B. Taylor &
H. Uhlig, eds, ‘Handbook of Macroeconomics’, Vol. 2 of Handbook of Macroeconomics,
Elsevier, chapter 0, pp. 415–525.
Tiao, G. C. & Tsay, R. S. (1994), ‘Some advances in non-linear and adaptive modelling in
time-series’, Journal of Forecasting 13(2), 109–131.
Tong, H. (1990a), Non-linear Time Series: a Dynamical System Approach, Oxford Univer
sity Press.
Tong, H. (1990b), Nonlinear Time Series Analysis: A Dynamical System Approach, London:
Oxford University Press.
Tong, H. (2010), ‘Threshold models in time series analysis 30-yeas on’, Reserch Report,
University of Hong Kong 471(1-38).
Tong, H. & Lim, K. S. (1980), ‘Threshold autoregression, limit cycles and cyclical data (with
discussion)’, Journal of the Royal Statistical Society: Series B (Statistical Methodology)
42, 245–292.
Tsay, R. S. (1989), ‘Testing and modeling threshold autoregressive processes’, Journal of
the American Statistical Association 84, 231–240.
Tsay, R. S. (2005), Analysis of Financial Time Series, Vol. 543, John Wiley & Sons.
Tsay, R. S. & Chen, R. (2018), Nonlinear Time Series Analysis, John Wiley & Sons.
33

Wang, D., Liu, X. & Chen, R. (2019), ‘Factor models for matrix-valued high-dimensional
time series’, Journal of Econometrics 208(1), 231–248.
Wang, D., Zheng, Y. & Li, G. (2024), ‘High-dimensional low-rank tensor autoregressive
time series modeling’, Journal of Econometrics 238(1), 105544.
Wu, F. & Chan, K.-S. (2023), ‘Mixture matrix-valued autoregressive model’, arXiv preprint
arXiv:2312.06098 .
Wu, S. & Chen, R. (2007), ‘Threshold variable selection and threshold variable driven
switching autoregressive models’, Statistica Sinica 17, 241–264.
Xiao, H., Han, Y., Chen, R. & Liu, C. (2023), ‘Reduced rank autoregressive models for
matrix time series’, Working Paper .
Yu, C., Li, D., Zhang, X. & Tong, H. (2024), ‘Two-way threshold matrix autoregression’,
arXiv preprint arXiv:2407.10272 .
Yu, R., Chen, R., Xiao, H. & Han, Y. (2024), ‘Dynamic matrix factor models for high
dimensional time series’, arXiv preprint arXiv:2407.05624 .
Zhang, X., Li, D. & Tong, H. (2024), ‘On the least squares estimation of multiple-threshold
variable autoregressive models’, Journal of Business & Economic Statistics 42(1), 215
228.
Zhou, G., Han, Y. & Yu, X. (2025), Factor augmented tensor-on-tensor neural networks, in
‘Proceedings of the AAAI Conference on Artificial Intelligence’, Vol. 39, pp. 22928–22936.
34

Supplementary Material to “Threshold Tensor Factor Model in
CP Form”
In this supplementary material, Appendix A provides the complete proofs of the main
theorems presented in the article, while Appendix B presents the estimated models using
the full dataset for the real data application.
A Proofs of Main Theorems
Proof of Proposition 3.1. The proof of Proposition 3.1 can be derived using similar
arguments to those in Theorem 4.3 of Chen et al. (2024) and Theorem 3 of Han, Yang,
Zhang & Chen (2024).
We first provide a theorem for the consistency of TAR parameters. Given that the least
squares estimation of TAR involves a non-convex optimization problem, this result forms
the basis for further analysis of the statistical convergence rate and asymptotic normality.
Theorem A.1. Suppose Assumptions 1, 2, 3, 4 hold. Assume that φ(l)
j ≠ φ(l+1)
j for
1 ≤ j ≤ r, 1 ≤ l ≤ L − 1. Let
σ√dmax
λ√T + σ2
λ2 ⟶ 0,
as T → ∞.
(i) Suppose zjt is self-exciting with zjt = fj,t−τj, for some 1 ≤ j ≤ r. Let θj =
(φ⊤
j , sj⊤, τj)⊤. Then, in an event with probability at least 1 − T −c − ∑K
k=1 e−dk ,
θ̂j → θj as T → ∞.
(ii) Suppose zjt is an observable variable with a bounded, continuous and positive density
on R, and is Markovian, for some 1 ≤ j ≤ r. Let θj = (φ⊤
j , sj⊤)⊤. Then, in an event
with probability at least 1 − T −c − ∑K
k=1 e−dk, θ̂j → θj as T → ∞.
35

Proof of Theorem A.1. We only prove part (i). The proof of part (ii) is similar. Define
the squared loss functions with estimated and true factors,
̂LT (θj) =
T
∑
t=pj+1
(fĵ ,t −
L
∑
l
I(zj,t ∈ (sj,l−1, sj,l))
pj
∑
k=1
φ(l)
j,kfĵ ,t−k)
2
, (17)
LT (θj) =
T
∑
t=pj+1
(fj,t −
L
∑
l
I(zj,t ∈ (sj,l−1, sj,l))
pj
∑
k=1
φ(l)
j,kfj,t−k)
2
, (18)
and define the residuals
ε̂t(θj) = fĵ ,t −
L
∑
l
I (zj,t ∈ (sj,l−1, sj,l))
pj
∑
k=1
φ(l)
j,kfĵ ,t−k, (19)
εt(θj) = fj,t −
L
∑
l
I (zj,t ∈ (sj,l−1, sj,l))
pj
∑
k=1
φ(l)
j,kfj,t−k. (20)
The following two Lemmas can be obtained from Zhang et al. (2024), Li & Ling (2012).
Lemma A.2. If the conditions in Theorem A.1 hold, then Eεt2(θ̃j) ≥ Eεt2(θj) for all θ̃j ∈ Θ,
and the equality holds if and only if θ̃j = θj.
Lemma A.3. If the conditions of Theorem A.1 hold, then, for any θ̃j ∈ Θ and its open
neighborhood Uθ̃j,
E sup
θ∗
j ∈Uθ̃j
∣εt2(θ∗
j) − εt2(θ̃j)∣ → 0 as Uθ̃j shrinks to θ̃j.
According to Proposition 3.1, we have in an event Ω with probability at least 1 − T −c −
∑K
k=1 e−dk ,
∣1
T −h
T
∑
t=h+1
fî,t−hfĵ t − 1
T −h
T
∑
t=h+1
fi,t−hfjt∣ ≤ c ( σ√dmax
λ√T + σ2
λ2 ) =∶ δ. (21)
In the following proof, we restrict to the event Ω.
For any given open neighborhood V of θj ∈ Θ and any θ ∈ V c = Θ\V , Eεt2(θ) >
Eεt2(θj) by Lemma A.2. Lemma A.3 implies that Eεt2(θ) is continuous in θ. Applying the
compactness of V c, there exists a θ0 ∈ V c such that
inf
θ∈V c Eεt2(θ) = Eεt2(θ0) > Eεt2(θj).
36

Set κ0 = (Eεt2(θ0) − Eεt2(θj))/3 > 0. For any θ ∈ V c, by Lemma A.3 again, there exists
η > 0 such that
E inf
θ∗∈Uθ(η) εt2(θ∗) ≥ Eεt2(θ) − κ0 ≥ Eεt2(θ0) − κ0 = 2κ0 + Eεt2(θj). (22)
Since V c is compact, there exists a finite covering of V c: {Uθj(η), θj ∈ V c, j = 1, 2, ... , J }
such that ⋃J
j=1 Uθj(η) = V c. By the ergodic theorem and (22), we have a.s. for sufficiently
large T and 1 ≤ j ≤ J
inf
θ∗∈Uθj (η)
1
T ̂LT (θ∗) ≥ 1
T
T
∑
t=1
inf
θ∗∈Uθj (η) ε ̂t2(θ∗) ≥ E inf
θ∗∈Uθj(η) εt2(θ∗)−κ0−c1δ ≥ κ0+Eεt2(θj)−c1δ
and
inf
θ∈V
1
T ̂LT (θ) ≤ 1
T ̂LT (θj) = 1
T
T
∑
t=1
ε̂t2(θj) ≤ Eεt2(θj) + κ0
2 + c1δ.
Therefore, as δ = o(1), for any neighborhood V of θj ∈ Θ, it follows that for sufficiently
large T
inf
θ∗∈V c
1
T ̂LT (θ∗) ≥ min
1≤j≤J inf
θ∗∈Uθj (η)
1
T ̂LT (θ∗) ≥ κ0 + Eεt2(θj) − c1δ > inf
θ∈V
1
T ̂LT (θ),
which implies that θ̂j ∈ V a.s. By the arbitrariness of V , we can get θ̂j → θj in the high
probability event Ω. The proof is complete.
Proof of Theorem 3.1. According to Proposition 3.1, we have in an event Ω with prob
ability at least 1 − T −c − ∑K
k=1 e−dk ,
∣fĵ t − fjt∣ ≤ c ( σ√dmax
λ√T + σ
λ ) =∶ θ1, (23)
for all 1 ≤ t ≤ T , and
∣1
T −h
T
∑
t=h+1
fî,t−hfĵ t − 1
T −h
T
∑
t=h+1
fi,t−hfjt∣ ≤ c ( σ√dmax
λ√T + σ2
λ2 ) =∶ θ2, (24)
for all 1 ≤ i, j ≤ r and 0 ≤ h ≤ T /4. In the following proof, we restrict to the event
Ω. For simplicity of presentation, we omit the sub-subscripts and use use θ, θ̂, φ, s, τ , ft
37

to represent θj, θ̂j, φj, sj, τj, fjt, etc. Without loss of generality, consider two regime TAR
models and let L = 2. The extension to general L follows similarly.
By Theorem A.1, in the event Ω, θ̂ → θ. Thus, in Ω, τ̂j = τj, and we restrict to the
parameter space of an open neighborhood of θ. Define Vδ = {θ̃ ∈ Θ ∶ ‖φ̃−φ‖ < δ, |s̃−s| < δ}
for some 0 < δ < 1 to be determined later.
Define the residuals
ε̂t(φ0, s0) = ft̂ −
2
∑
l=1
I(ft̂−τ ∈ (s0,l−1, s0,l))
pj
∑
k=1
φ(l)
0k ft̂−k, (25)
εt(φ0, s0) = ft −
2
∑
l=1
I(ft−τ ∈ (s0,l−1, s0,l))
pj
∑
k=1
φ(l)
0k ft−k, (26)
with s0,0 = −∞, s0,2 = +∞, and the squared loss functions with estimated and true
factors,
̂LT (φ0, s0) =
T
∑
t=pj+1
ε̂t2(φ0, s0), (27)
LT (φ0, s0) =
T
∑
t=pj+1
εt2(φ0, s0). (28)
Note that the difference of ε̂t(φ0, s0) and ε̂t(φ0, s) is nonzero only in the region 1{s0 ∧ s <
ft̂−τ ≤ s0 ∨s}. Here we only treat the case s0 > s. Proofs of the other case is similar. Write
s0 = s + u for some 0 < u < 1, and let α̂(l)
t = (ft̂ − φ(l)⊤f̂t−1)2, α̂(l0)
t = (ft̂ − φ(l)⊤
0 f̂t−1)2
and α(l)
t = (ft − φ(l)⊤f t−1)2, α(l0)
t = (ft − φ(l)⊤
0 f t−1)2, where f̂t−1 = (ft̂−1, ..., ft̂−pj)⊤.
Then
RT (φ0, u) = ̂LT (φ0, s0) − ̂LT (φ0, s) =
T
∑
t=pj+1
(α̂(20)
t − α̂(10)
t )1{s < ft̂−τ ≤ s + u}
= [̂LT (φ, s0) − ̂LT (φ, s)] + {[̂LT (φ0, s0) − ̂LT (φ, s0)] − [̂LT (φ0, s) − ̂LT (φ, s)]}
∶= RT 1(u) + RT 2(φ0, u),
38

where
RT 1(u) =
T
∑
t=pj+1
(α̂(2)
t − α̂(1)
t )1{s < ft̂−τ ≤ s + u},
RT 2(φ0, u) =
T
∑
t=pj+1
[(α̂(20)
t − α̂(2)
t ) − (α̂(10)
t − α̂(1)
t )]1{s < ft̂−τ ≤ s + u}.
For RT 1(u), by Assumption 6, for all i ≠ j, there exist some positive constants c0 and
ρ such that |(φ(i) − φ(j))⊤ft−1| ≥ c0 > 0 for all ‖ft−1 − w1‖ ≤ ρ. Then
[(φ(i) − φ(j))⊤f t−1]2 + 2ξt(φ(i) − φ(j))⊤f t−1 ≥ c021{‖f t−1 − w1‖ ≤ ρ} + 2ξt(φ(i) − φ(j))⊤f t−1.
(29)
Let π ∶= maxi≠j ‖φ(i) − φ(j)‖. By (29) and Lemma A.4, for RT 1(u), we have
RT 1(u) ≥c02G∗T (u − 2θ1) − 2π ⎛⎜ ⎝
∣
T
∑
t=pj+1
At(u + 2θ1)∣ + ∣
T
∑
t=pj+1
Dt(u + 2θ1)∣⎞⎟ ⎠
− 3(π2 + 2π)θ1GT (u + 2θ1),
where G∗T (u − 2θ1), At(u + 2θ1), Dt(u + 2θ1), and other notations used below are defined
in Lemma A.4. Thus
inf
B
T <u<δ
RT 1(u) T G(u − 2θ1)
≥c02 inf
B
T <u<δ
G∗T (u − 2θ1) T G∗(u − 2θ1)
G∗(u − 2θ1) G(u − 2θ1)
− 2π sup
B
T <u<δ
∣∑T
t=pj+1 At(u + 2θ1)∣ + ∣∑T
t=pj+1 Dt(u + 2θ1)∣
T G(u + 2θ1)
G(u + 2θ1) G(u − 2θ1)
− inf
B
T <u<δ
3(π2 + 2π)θ1GT (u + 2θ1) T G(u − 2θ1)
≥c02 (1 − sup
B
T <u<δ
∣ G∗T (u − 2θ1)
T G∗(u − 2θ1) − 1∣) G∗(u − 2θ1)
G(u − 2θ1) − inf
B
T <u<δ
3(π2 + 2π)θ1GT (u + 2θ1) T G(u − 2θ1)
− 2π sup
B
T <u<δ
∣∑T
t=pj+1 At(u + 2θ1)∣ + ∣∑T
t=pj+1 Dt(u + 2θ1)∣
T G(u + 2θ1)
G(u + 2θ1)
G(u − 2θ1) .
39

Note that as θ1 = o(1),
G∗(u − 2θ1)
G(u − 2θ1) = P(‖ft−1 − w1‖ ≤ ρ|s < ft−τ ≤ s + u − 2θ1)
⟶ P(‖ft−1 − w1‖ ≤ ρ|ft−τ = s) > 0 as u − 2θ1 ↓ 0,
which implies that the infimum below exists for sufficiently small δ > 2θ1 > 0, namely,
c1 ∶= inf
0<u<δ
G∗(u − 2θ1)
G(u − 2θ1) > 0.
As θ1, θ2 → 0, choose η0 > 0 such that 2γ = c02c1 − (c02 + 8π)η0 − 6(π2 + 2π)θ1η0. By
Lemma A.4, it follows that
P ( inf
B
T <u<δ
RT 1(u)
T G(u − 2θ1) > 2γ)
≥P ⎛⎜⎜
⎝
sup
B
T <u<δ
∣ G∗T (u − 2θ1)
T G∗(u − 2θ1) − 1∣ < η0, sup
B
T <u<δ
∣∑T
t=pj+1 At(u + 2θ1)∣
T G(u + 2θ1) < η0,
sup
B
T <u<δ
∣ GT (u − 2θ1)
T G(u − 2θ1) − 1∣ < η0, sup
B
T <u<δ
∣∑T
t=pj+1 Dt(u + 2θ1)∣
T G(u + 2θ1) < η0⎞⎟⎟
⎠
≥1 − ε. (30)
Note that
[(α̂(20)
t − α̂(2)
t ) − (α̂(10)
t − α̂(1)
t )]1{s < ft̂−τ ≤ s + u}
= {[(φ(2) − φ(20))⊤f̂t−1]2 − [(φ(1) − φ(10))⊤f̂t−1]2 + (φ(2) − φ(20))⊤f̂t−1(φ(1) − φ(10))⊤f̂t−1
+ 2ξ ̂t(φ(10) − φ(1) + φ(2) − φ(20))⊤f̂t−1
For RT 2(φ0, u), by the above identity and Lemma A.4, we have
|RT 2(φ0, u)| ≤Cδ ⎛⎜ ⎝
(E‖ft−1‖2 + θ2)GT (u + 2θ1) + ∣
T
∑
t=pj+1
Ht(u + 2θ1)∣ + ∣
T
∑
t=pj+1
At(u + 2θ1)∣
+∣
T
∑
t=pj+1
Dt(u + 2θ1)∣⎞⎟ ⎠
.
40

It implied that
sup
B
T <u<δ,θ∈Vδ
|RT 2(φ0, u)|
T G(u − 2θ1)
≤ Cδ ((E‖ft−1‖2 + θ2) [ sup
B
T <u<δ
∣ GT (u + 2θ1)
T G(u − 2θ1) − 1∣ + 1] +
+ sup
B
T <u<δ
∣∑T
t=pj+1 Ht(u + 2θ1)∣ + ∣∑T
t=pj+1 At(u + 2θ1)∣ + ∣∑T
t=pj+1 Dt(u + 2θ1)∣
T G(u − 2θ1)
⎞⎟⎟
⎠
= OP(δ). (31)
Then by (30) and (31), for sufficiently small δ > 0, we have
P ( inf
B
T <u<δ
RT (u)
T G(u − 2θ1) > γ) ≥ P ( inf
B
T <u<δ
RT 1(u)
T G(u − 2θ1) − sup
B
T <u<δ,θ∈Vδ
|RT 2(φ0, u)|
T G(u − 2θ1) > γ)
≥1 − P ( inf
B
T <u<δ
RT 1(u)
T G(u − 2θ1) ≤ 2γ) − P ( sup
B
T <u<δ,θ∈Vδ
|RT 2(φ0, u)|
T G(u − 2θ1) ≥ γ)
≥1 − 2ε.
Thus, we finish the proof of (9).
Next, we move to the proof of (10) and (11).
Let l̂T (φ0, s0) = ̂LT (φ0, s0)/T and lT (φ0, s0) = LT (φ0, s0)/T . By the Taylor expansion
of ∂l̂T (φ0, s0)/∂φ0, we have
0 = ∂l̂T (φ̂(s0), s0)
∂φ0
= ∂l̂T (φ, s0)
∂φ0
+ ∂2l̂T (φ̃, s0)
∂φ0∂φ′
0
(φ̂(s0) − φ), (32)
where φ̃ lies in between φ̂(s0) and φ, i.e., ‖φ̃ − φ‖ ≤ ‖φ̂(s0) − φ‖.
Let ̃Σ = diag(Σ1, Σ2). Since E(ft̂2) < ∞ and θ1 = o(1), θ2 = o(1), by the law of large
numbers, it follows that
∂2l̂T (θ)
∂φ0∂φ′
0
→ 2̃Σ, a.s. as T → ∞.
Then, by (32) and Lemma A.5, we have
sup
‖s−s0‖≤B(1/T +θ1)
∥[φ̂(s0) − φ] + (2̃Σ)−1 ∂lT (φ, s)
∂φ0
∥ = OP ( √1T + θ1 + θ2) .
41

This implies that (10).
Furthermore, if λ/σ ≫ T 1/2 + √dmax, then θ1 + θ2 = o(T −1/2). It follows that
sup
‖s−s0‖≤B(1/T +θ1)
√T ‖φ̂(s0) − φ̂(s)‖ ≤ sup
‖s−s0‖≤B(1/T +θ1)
∥√T [φ̂(s0) − φ] + (2̃Σ)−1√T ∂lT (φ, s)
∂φ0
∥
+ ∥√T [φ̂(s) − φ] + (2̃Σ)−1√T ∂lT (φ, s)
∂φ0
∥ = oP(1).
Note that
√T ∂lT (φ, s)
∂φ0
= √2T
T
∑
t=pj+1
∂εt(φ, s) ∂φ0
εt(φ, s),
and {εt(φ, s) ∂εt(φ, s)/∂φ0} is a martingale difference sequence with respect to {Ft}. By
the martingale central limit theorem, it follows that
√T ∂lT (φ, s)
∂φ0
−d→ N(0, 4Σ̄ ),
where
Σ̄ = diag((ς(1))2Σ1, (ς(2))2Σ2).
Thus,
√T (φ̂ − φ) −d→ N(0, Σ).
The proof of (11) is complete.
Proof of Theorem 3.2. The proof of Theorem 3.2 closely parallels that of Theorem 3.1,
with the key distinction that the threshold variable is observable. Consequently, we can
eliminate the term θ1 that appears in the original proof of Theorem 3.1, thereby obtaining
improved convergence rates. The details are omitted due to their similarity.
Lemma A.4. If Assumptions 3, 4, 5, 6 hold, then, for any ε > 0, η > 0 and δ ∈ (0, 1),
there exists a positive constant B such that for T large enough, we have
(i). P (supB/T <u<δ ∣ GT (u)
T G(u) − 1∣ < η) > 1 − ε,
(ii). P (supB/T <u<δ ∣ G∗T (u)
T G∗(u) − 1∣ < η) > 1 − ε,
42

(iii). P (supB/T <u<δ
∣∑T
t=1 At(u)∣
T G(u) < η) > 1 − ε,
(iv). P (supB/T <u<δ
∣∑T
t=1 Dt(u)∣
T G(u) < η) > 1 − ε,
(v). P (supB/T <u<δ
∣∑T
t=1 Ht(u)∣
T G(u) < η) > 1 − ε,
where
G(u) = P(s < zt ≤ s + u),
GT (u) =
T
∑
t=1
I(s < zt ≤ s + u),
G∗T (u) =
T
∑
t=1
I(s < zt ≤ s + u, ‖ft−1 − w1‖ ≤ ρ),
G∗(u) = P(s < zt ≤ s + u, ‖ft−1 − w1‖ ≤ ρ),
At(u) = ξtI(s < zt ≤ s + u),
Dt(u) = ft−1ξtI(s < zt ≤ s + u),
Ht(u) = (‖ft−1‖2 − E‖ft−1‖2)I(s < zt ≤ s + u).
Lemma A.5. If the conditions in Theorem 3.1 hold, then, for any 0 < B < ∞,
sup
‖s−s0‖≤B(1/T +θ1)
∥ ∂l̂T (φ, s0)
∂φ0
− ∂l̂T (θ)
∂φ0
∥ = OP(T −1 + θ1), (33)
sup
‖s−s0‖≤B(1/T +θ1)
∥ ∂2l̂T (φ0, s0)
∂φ0∂φ′
0
− ∂2l̂T (θ)
∂φ0∂φ′
0
∥ = OP(T −1 + θ1), (34)
where
θ1 = c ( σ√dmax
λ√T + σ
λ).
Lemma A.6. If the conditions in Theorem 3.2 hold, then, for any 0 < B < ∞,
sup
‖s−s0‖≤B/T
∥ ∂l̂T (φ, s0)
∂φ0
− ∂l̂T (θ)
∂φ0
∥ = OP(T −1), (35)
sup
‖s−s0‖≤B/T
∥ ∂2l̂T (φ0, s0)
∂φ0∂φ′
0
− ∂2l̂T (θ)
∂φ0∂φ′
0
∥ = OP(T −1). (36)
Lemma A.4 is obtained directly from Zhang et al. (2024), while Lemmas A.5 and A.6
can be derived using similar arguments as in Zhang et al. (2024).
43

B Additional Real Data Application Results
Table 4 shows the estimated models using the full data set. Note that the residual variance
and AIC values are all significantly higher than that in Table 2. This is due to the fact that
the full data include the priod of financial crises, with large deviations from the majority
of the data.
Model Series Regime Coefficients Threshold σ2 AIC
TFM-cp
ARMA
factor1 – ar1: 0.70 (0.07) – 7.807 517.42 factor2 – ma1: 0.98 (0.09)
ma2: 0.40 (0.09) – 5.993 490.99
VFM
ARMA
factor1 – ma1: 1.00 (0.10)
ma2: 0.40 (0.10) – 17.47 603.36 factor2 – ar1: 0.62 (0.09)
ma1: 0.42 (0.11) – 4.901 469.99
TFM
cp
TAR
factor1 Regime 1 (35 obs) ar1: 1.21 (0.13)
ar2: -0.35 (0.12) 0.0103 (d = 4)
5.7616 179.76 Regime 2 (66 obs) ar1: 0.44 (0.09)
factor2 Regime 1 (49 obs)
ar1: 1.03 (0.14) ar2: -0.76 (0.18) ar3: 0.45 (0.18) ar4: -0.31 (0.13)
0.0118
(d = 4)
5.1425 169.24
Regime 2 (52 obs) ar1: 0.78 (0.09)
VFM
TAR
factor1 Regime 1 (50 obs)
ar1: 1.08 (0.14) ar2: -0.94 (0.21) ar3: 0.54 (0.20) ar4: -0.36 (0.14)
0.0119
(d = 4)
15.6982 261.11
Regime 2 (51 obs) ar1: 0.73 (0.09)
factor2 Regime 1 (42 obs) ar1: 1.13 (0.13)
ar2: -0.49 (0.13) 0.0112 (d = 2)
4.2950 149.37 Regime 2 (61 obs) ar1: 0.65 (0.09)
Table 4: Estimated parameters of ARMA and TAR models fitted to the factor process f1̂ t,
based on the entire sample (indices 1–10).
44

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:02.918Z
- **Text Length:** 73382 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 44 of 44
