# PDF Document: Amaral et al. - 2025 - Conformal Prediction for Compositional Data.pdf

**File Path:** Amaral et al. - 2025 - Conformal Prediction for Compositional Data.pdf

**Processed Date:** 2026-02-10T18:18:19.239Z

**File Size:** 424.82 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3411

**Title:** Conformal Prediction for Compositional Data

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Conformal Prediction for Compositional
Data
Lucas P. Amaral1, 2, Luben M. C. Cabezas1,2, Thiago R. Ramos1,
and Gustavo H. A. Pereira1
1Department of Statistics, Federal University of S ̃ao Carlos
2Institute of Mathematics and Computer Science, University of Sa ̃o
Paulo
In this work, we propose a set of conformal prediction procedures tailored to
compositional responses, where outcomes are proportions that must be pos
itive and sum to one. Building on Dirichlet regression, we introduce a split
conformal approach based on quantile residuals and a highest-density region
strategy that combines a fast coordinate-floor approximation with an internal
grid refinement to restore sharpness. Both constructions are model-agnostic at
the conformal layer and guarantee finite-sample marginal coverage under ex
changeability, while respecting the geometry of the simplex. A comprehensive
Monte Carlo study spanning homoscedastic and heteroscedastic designs shows
that the quantile residual and grid-refined HDR methods achieve empirical
coverage close to the nominal 90% level and produce substantially narrower
regions than the coordinate-floor approximation, which tends to be conserva
tive. We further demonstrate the methods on household budget shares from
the BudgetItaly dataset, using standardized socioeconomic and price covariates
with a train, calibration, and test split. In this application, the grid-refined
HDR attains coverage closest to the target with the smallest average widths,
closely followed by the quantile residual approach, while the simple triangular
HDR yields wider, less informative sets. Overall, the results indicate that con
formal prediction on the simplex can be both calibrated and efficient, providing
practical uncertainty quantification for compositional prediction tasks.
Keywords: Compositional data, Conformal prediction, Dirichlet regression, High density, Non
conformity measure
1. Introduction
Compositional data (CoDa) are widely used across many fields whenever the goal is to model
the parts of a whole. Typical examples include ecology, to quantify species shares in an ecosys
1
arXiv:2511.18141v1 [stat.ML] 22 Nov 2025

tem (Greenacre, 2021), medicine, to measure the concentrations of different cell types in a pa
tient’s blood (Zhang et al., 2025), among others. A compositional observation is a vector y =
(y1, . . . , yD)⊤ of positive components such that PD
j=1 yj = 1. The set
∆D = {(y1, . . . , yD) ∈ RD :
D
X
j=1
yj = 1, yj > 0, j = 1, . . . , D}
is denoted the (D − 1)-simplex. CoDa can be analyzed in several ways, but modeling is more used
due to the simplex constraints. Over the years, however, substantial progress has been made (see
Alenazi (2023)). The simplex is the natural sample space for these data (Aitchison, 1982), and the
Dirichlet family is a common probabilistic model on this space (Barndorff-Nielsen & Jørgensen,
1991). In regression contexts, Dirichlet regression models (Hijazi & Jernigan, 2009) are frequently
employed and can be viewed as generalizations of beta regression models (Ferrari & Cribari-Neto,
2004). Parametric modeling often emphasizes the interpretability of regression coefficients and the
verification of modeling assumptions, as these directly affect the goodness of fit.
Nevertheless, in many practical scenarios, the primary focus lies in the prediction of new obser
vations and their respective predictive intervals. When response variables are constrained to the
unit interval (0, 1) — as is the case for proportions or fractions —, traditional approaches based
on normality assumptions are often inadequate. In these cases, there are established method
ologies that rely on resampling techniques (bootstrap) and employ the residuals as surrogates to
estimate the prediction error (Espinheira et al., 2014; Cribari-Neto & Lima, 2021). However, such
methods typically rely on asymptotic theory and may require large samples to achieve accurate
coverage. Moreover, standard bootstrap procedures may be ill–suited under heteroscedasticity, as
this can undermine exchangeability and lead to invalid inference and predictions. Recently, Wu
et al. (2025) proposed conformalized methods for bounded outcomes within the broader Conformal
Prediction (CP) framework (Vovk et al., 2005; Shafer & Vovk, 2008; Papadopoulos et al., 2008;
Lei et al., 2018), offering a machine-learning-based approach to construct prediction intervals with
finite–sample guarantees, including marginal and asymptotic conditional validity.
Inspired by this successful adaptation to bounded data, we leverage the fundamental principles
of CP(Vovk et al., 2005; Shafer & Vovk, 2008; Lei et al., 2018). CP is a distribution–free and
model–agnostic framework highly valued for providing marginal coverage guarantees in finite sam
ples under the mild assumption of exchangeability. This assumption is often reasonable in various
data settings and allows CP to be coupled with a wide range of statistical models and learning
algorithms (Angelopoulos & Bates, 2021). The core ingredient of this framework is the nonconfor
mity score, a function that quantifies how atypical a data point is relative to a model trained on
the remaining data.
Numerous extensions for general regression models have been studied (Tibshirani et al., 2019),
along with proposals for constructing nonconformity scores in different contexts (Kato et al., 2023).
A persistent challenge in modeling is heteroscedasticity, i.e., when the response variance varies with
covariates. In Dirichlet regression, the mean and variance are intrinsically linked; thus, dispersion is
naturally accommodated by the model. To address heteroscedasticity within conformal prediction,
several adaptations have been developed, including conformalized quantile regression (Romano
et al., 2019), normalized conformal prediction (Papadopoulos et al., 2008; Lei et al., 2018; Kato
et al., 2023), and Mondrian conformal prediction (Bostr ̈om & Johansson, 2020; Cabezas et al.,
2025; Dewolf et al., 2025).
A model–based extension of conformal prediction tailored to distributional regression was in
troduced by Chernozhukov et al. (2021). Their approach uses the probability integral transform
(PIT) to define nonconformity measures from an estimated conditional distribution of the re
sponse, yielding asymptotically valid prediction intervals under heteroscedasticity. Some related
works, Tibshirani et al. (2019); Barber et al. (2023) propose conformal prediction algorithms based
2

on weighted quantiles that deliver finite–sample guarantees in broad, non-exchangeable scenarios.
Inspired by these ideas, this work proposes conformal prediction methods for compositional
data. The paper is organized as follows. Section 2 presents two parameterizations of the Dirichlet
distribution and the corresponding regression specification. Section 3 details our approach for con
structing conformal prediction sets for Dirichlet regression using (i) randomized quantile residuals
(Dunn & Smyth, 1996) of the marginal components, (ii) an approximation to the highest density
region (HDR) that contains the exact prediction set, and (iii) a grid search within the resulting
polytope to mitigate overcoverage and overly wide intervals. Section 4 describes the simulation
design and reports results for the three predictive methods, evaluating empirical coverage, interval
widths, and runtime. Section 5 presents a real–data application. Section 6 concludes with a general
discussion and avenues for future work. R code and data can be found in the GitHub repository
https://github.com/LucAmaralDS/CP-dirichlet.
2. Regression models for compositional data
Consider a regression setting involving CoDa, where the D-part response vector Yi = (Yi1, . . . , YiD)⊤
for the i-th observation, i = 1, . . . , n, belongs to the D-dimensional simplex, Yi ∈ ∆D. In many
CoDa regression problems, we assume that the response Yi follows a Dirichlet distribution with
shape parameters λi = (λi1, . . . , λiD)⊤, where λij > 0 for all j = 1, . . . , D. The probability density
function (PDF) for a general compositional vector Y following Dirichlet(λ) is given by:
f (y; λ) = Γ PD
j=1 λj
QD
j=1 Γ(λj )
D
Y
j=1
yλj −1
j , y ∈ ∆D
where Γ(·) is the Gamma function.
Let λ0 = PD
t=1 λt. For the Dirichlet distribution, the mean and variance are, respectively,
E[Yj] = λj
λ0
and Var(Yj) = λj(λ0 − λj)
λ20(λ0 + 1) .
For regression problems, where the response Yi is linked to a vector of covariates Xi, it is com
mon to adopt a Dirichlet parameterization that models the mean of the response components (μj)
together with a precision parameter (φ), yielding more direct interpretability of the estimated coef
ficients. We define the reparameterization by letting φ = PD
j=1 λj and μj = λj/φ, for j = 1, . . . , D,
with PD
j=1 μj = 1. The density function under this alternative mean-precision parameterization is
given by:
f (y; μ1, . . . , μD, φ) = Γ(φ)
QD
j=1 Γ(μj φ)
D
Y
j=1
yφμj −1
j (1)
where 0 < μj < 1 for all j and φ > 0. Under this setup, the expected value and variance of the
j-th component are, respectively:
E[Yj] = μj and Var[Yj] = μj(1 − μj)
φ + 1 = V (μj)
φ+1.
The term φ is thus a precision parameter, as larger values lead to smaller variance.
Let Y1, . . . , Yn and Yi = (Yi1, . . . , YiD)⊤ be random variables distributed according to a Dirichlet
distribution as in Eq. (1). The systematic components of the logistic Dirichlet regression model
are given by
log μij
μi1
= xij1βj1 + xij2βj2 + · · · + xijpj βjpj , 2 ≤ j ≤ D,
log(φi) = di1γ1 + di2γ2 + · · · + dipφ γpφ ,
(2)
3

(xij1, xij2, . . . , xijpj , di1, di2, . . . , dipφ )⊤ are the covariates and (βj1, βj2, . . . , βjpj , γ1, γ2, . . . , γpφ )⊤
unknown parameters. We adopt a logit link for the mean vector and a logarithmic link for the
precision parameter, in line with the conventional parametrization of multinomial logistic regression
(Hosmer Jr et al., 2013). This specification is particularly convenient because it yields regression
coefficients with a transparent interpretation and automatically restricts the precision parameter
to the positive real line, satisfying the distributional constraint φ > 0. The parameters of model
(2) are estimated by maximum likelihood, and all empirical results reported here are obtained
using the DirichletReg package (Maier, 2014) in R.
3. Conformal prediction for compositional data regression
models
A common practice in regression analysis is to use a fitted model to predict out-of-sample or miss
ing response values. While a point prediction can be readily obtained from the fitted model, it
is often desirable to accompany it with a prediction region at a prescribed coverage level. In this
section, we present our proposals for constructing conformal prediction regions in Dirichlet regres
sion models. Section 3.1 introduces the conformal prediction framework and the specific algorithm
used throughout, namely split conformal prediction. In Section 3.2, we construct prediction regions
using quantile residuals (Dunn & Smyth, 1996) as nonconformity scores. Section 3.3 instead uses
the negative log-likelihood as the nonconformity score and inverts it to obtain a highest-density
prediction region, which we approximate by coordinate-floor. The associated convex optimization
formulation underlying this approximation is presented in Section 3.4.
3.1. Conformal prediction
Recently, conformal prediction (CP) methods have been widely employed for constructing pre
diction regions under weak assumptions (Vovk et al., 2005; Shafer & Vovk, 2008). Given an
exchangeable sample of pairs (Xi, Yi), i = 1, . . . , n, conformal prediction is used to produce a pre
diction set C(·) for a new covariate vector Xn+1 with unknown response Yn+1, in such a way that
P Yn+1 ∈ C(Xn+1) ≥ 1 − α.
The literature offers several algorithms for constructing such prediction sets, including Full
Conformal Prediction (FCP) (Vovk et al., 2005), Split Conformal Prediction (SCP) (Papadopou
los et al., 2008; Vovk, 2012; Lei et al., 2018), and Jackknife+ (Barber et al., 2021). Given the
computational burden of FCP, especially with multivariate responses, we adopt the Split Confor
mal Prediction (SCP) method. SCP partitions the available data into a training set (Dtrain) and a
calibration set (Dcal). While the model is fitted only on Dtrain, this data splitting incurs a trade-off
in statistical power, potentially leading to wider prediction sets.
The core ingredient of CP is the nonconformity score, denoted by s(X, Y), which is defined as
a function s : X × Y → R that quantifies how atypical a new observation (X, Y) is relative to
the model trained on the remaining data. For a given significance level α ∈ (0, 1), the resulting
(1 − α)-level SCP prediction region, C1−α(X∗), is generally defined over the response domain Y as:
C1−α(X∗) = {y∗ ∈ Y : s(X∗, y∗) ≤ qˆ1−α}
where qˆ1−α is the empirical quantile of order ⌈(1 − α)(ncal + 1)⌉ of the nonconformity scores
calculated on the calibration set Dcal. This region provides a marginal coverage guarantee of at
least 1 − α in finite samples under the assumption of exchangeability.
In CP approaches, the choice of s(x, y) is critical, as it directly influences the shape and in
formativeness of the resulting predictive regions (Angelopoulos & Bates, 2021; Izbicki, 2025). In
standard Euclidean regression, a common choice for s(x, y) is the absolute residual, |y − Eb[Y |x]|
4

(Lei et al., 2018), where bE[Y |x] is the estimated regression function fitted on the training data.
However, the compositional nature of our data (constrained to the simplex ∆D) and the use of
the Dirichlet distribution necessitate scores that naturally account for the distribution’s properties
and the intrinsic geometry. For this reason, we focus on constructing prediction regions over the
simplex ∆D. We specifically opt to use nonconformity scores based on the quantile residual (Dunn
& Smyth, 1996) and the negative log-likelihood, which are detailed in the following sections.The
full procedure for constructing the prediction regions using these specific scores is detailed in
Algorithms 1 and 2, which appear in Appendix B.
3.2. Predictive sets with quantile residuals
For Dirichlet regression, we propose a split conformal approach based on quantile residuals. The
marginal distributions under a Dirichlet law are beta (Lin, 2016), we have Yj ∼ Beta λj, PD
t=1 λt −
λj . Let a Dirichlet regression model be fitted as in Eq. (2), returning the estimated parameters
λb(x) = (λb1, . . . , λbD) and λb0(x) = PD
d=1 λbd(x). It follows that, conditionally on covariates X = x,
Yj X = x ∼ Beta λbj(x), λb0(x) − λbj(x) . (3)
Leveraging this property, we define the conformity score via quantile residuals. By definition, the
(randomized) quantile residual of Dunn & Smyth (1996) is
rq
ij = Φ−1n
F yij ; μbij , φbij
o
, (4)
where Φ(·) and F (·) denote the cumulative distribution functions (CDFs) of the standard normal
distribution and of the marginal beta distribution for component j, respectively. To obtain a joint
prediction region that controls all components simultaneously, one might consider multivariate
scores (e.g., Mahalanobis ellipses; Ghorbani, 2019). However, such choices hinder analytic inversion
and typically require grid search to recover marginal intervals. In light of this, we adopt the
following max-type conformity score:
S(x, y) = mjax Zj(x, y) , (5)
where Zj = Φ−1(Uj), Uj = FBetaj (yij), and Betaj = Beta λbj(x), λb0(x) − λbj(x) . By definition,
the predictive set is
Csplit(x) = y ∈ ∆D : S(x, y) ≤ q1−α .
The condition S(x, y) ≤ qα is equivalent, componentwise, to
−q1−α ≤ Zj(x, y) ≤ q1−α ⇐⇒ Φ(−q1−α) ≤ Uj(x, y) ≤ Φ(q1−α),
since the normal CDF Φ(·) is monotone and Zj = Φ−1(Uj). Hence, defining pinf = Φ(−qα) and
psup = Φ(qα), we obtain the closed marginal intervals on the original response scale,
Ij = F −1
Betaj (pinf ) , F −1
Betaj (psup) ,
and therefore
Csplit(x) = y ∈ ∆D : yj ∈ Ij(x) ∀j .
This method, however, does not naturally yield marginal intervals that adhere to the constraint
P
j yj = 1. This is because the prediction intervals are generated marginally for each component.
Consequently, in the following section, we propose a method based on a floor approximation for
the prediction region that respects the simplex constraint.
5

3.3. Density-based conformal sets on the simplex: HDR with coordinate-floor
approximation
Consider (xi, yi) with yi ∈ ∆D := { y ∈ RD : PD
j=1 yj = 1 }. Suppose that, given x, the model
provides parameters
λ(x) = (λ1(x), . . . , λD(x)), λj(x) = φ(x) μj(x),
D
X
j=1
μj(x) = 1, φ(x) > 0.
Under a Dirichlet distribution with density given in (1), the nonconformity score is
s(x, y) = − log f (y | x) = − log Γ(φ) +
D
X
j=1
log Γ(μjφ) −
D
X
j=1
(μjφ − 1) log yj.
Since s = − log f is monotonically decreasing in f , the set { y : s(x, y) ≤ c } coincides with a
highest-density region (HDR) conditional on x. On the calibration split, compute si = s(xi, yi)
and define the conformal threshold as the order statistic
q1−α = the k−th value of {si}, k = (1 − α) (ncal + 1) ,
which guarantees marginal coverage under the split conformal scheme. For a test point xn+1, set
t∗ = −qα − log Γ(φ) +
D
X
j=1
log Γ(μjφ), wj = φ(xn+1)μj(xn+1) − 1,
so that the exact set is
Cexact(xn+1) =
n
y ∈ ∆D :
D
X
j=1
wj log yj ≥ t∗
o
.
To avoid inverting this set directly, we approximate it by a containing floor triangle.
3.4. Simplex-floor HDR approximation: a convex optimization formulation
Fix xn+1 and write μ = μ(xn+1), wj = φμj − 1, and W = PD
j=1 wj. The exact set for the score
s(x, y) = − log f (y | x) is
Cexact(xn+1) =
n
y ∈ ∆D :
D
X
j=1
wj log yj ≥ t∗
o
, t∗ = −qα − log Γ(φ) +
D
X
j=1
log Γ(φμj).
Because P
j wj log yj is concave in y when wj > 0, the set above is convex. To obtain a simple set
that contains Cexact(xn+1), we shift the faces of the simplex by imposing lower bounds yi ≥ τi.
Each minimum floor τi solves the convex program
min
y∈RD yi subject to
D
X
j=1
yj = 1,
D
X
j=1
wj log yj ≥ t∗, yj ≥ 0 (j = 1, . . . , D). (Pi)
The Lagrangian is
L(y, ρ, θ, δ) = yi + ρ
D
X
j=1
yj − 1 + θ t∗ −
D
X
j=1
wj log yj −
D
X
j=1
δj yj ,
with ρ ∈ R (sum constraint), θ ≥ 0 (level constraint), and δj ≥ 0 (yj ≥ 0). Slater conditions holds
whenever there exists y ∈ ∆D with yj > 0 and P
j wj log yj > t∗, so Karush–Kuhn–Tucker condi
6

tions (KKT) (Bertsekas, 2009) are necessary and sufficient. Under wj > 0 for all j (equivalently
λj > 1), the optimum is interior (yj > 0), yielding
1{j=i} + ρ = θ wj
yj
=⇒ yj =

  
  
θ wj
ρ , j ̸= i,
θ wi
1 + ρ , j = i,
θ = wi
1 + ρ + W − wi
ρ
−1
,
where W = PD
j=1 wj, ρ > 0, θ > 0. Enforcing the active level constraint P
j wj log yj = t∗ leads
to a one–dimensional equation for ρ,
Fi(ρ) = wi log ρ + (W − wi) log(1 + ρ) − W log wiρ + (W − wi)(1 + ρ) +
D
X
j=1
wj log wj = t∗.
If wj > 0 for all j, then Fi(ρ) is strictly increasing on (0, ∞), so the root is unique. The floor for
face i is
τi = θ wi
1 + ρ,
Given the solution ρ, we have
θ= 1
wi
1+ρ + W −wi
ρ
, τi = θwi
1 + ρ.
Hence, the approximate set is
T (xn+1) = { y ∈ ∆D : yi ≥ τi, i = 1, . . . , D},
which contains Cexact(xn+1) and preserves the marginal coverage of the conformal method. To find
ρ we used the function uniroot from the package stats which uses the Brent method (Brent,
2013).
Figure 1: Plots of the HDR (black) versus the triangular approximation (red) for different parameter values.
7

However, the triangular HDR approximation used to obtain the prediction set leads to noticeable
overcoverage, as visually evident in Figure 1. Empirical results are reported in Chapter 4 via
simulations. To mitigate this overcoverage, we perform a grid search within the resulting triangle.
One could in principle use a grid from the outset to construct intervals; nevertheless, because
the response is multivariate and constrained to sum to one, an initial full-grid approach would be
computationally prohibitive. Given the floor vector τ = (τ1, . . . , τD) of a polytope T (τ ), construct
an internal grid as follows:
1. Draw y1 over τ1, 1 − PD
j=2 τj .
2. For each chosen y1, draw y2 over τ2, 1 − τ3 − τ4 − · · · − τD − y1 .
3. In general, after selecting y1, . . . , yk−1 (with k ≥ 2), draw
yk ∈
h
τk, 1 −
D
X
j=k+1
τj −
k−1
X
j=1
yj
i
.
Let Y denote the collection of grid points that lie in ∆D. The final prediction set is
C(x) :=
n
y∈Y :
D
X
j=1
wj log yj ≥ t∗
o
.
4. Simulation study
To assess the performance of the proposed method, we conducted a Monte Carlo simulation study
with 1000 iterations. In each scenario, we generated samples of size n = 1000, splitting 70% for
training, 30% for calibration, and using a fresh point for testing. For each scenario, prediction-set
coverage was evaluated at a nominal level of 90%. In every scenario considered, we generated two
covariates, with xi22 = xi32 = di2, xi23 = xi33 = di3, and xi21 = xi31 = di1 = 1 for all i. All
simulations were performed in R using the DirichletReg package. In Scenario 1a, the covariates
were drawn from the standard uniform distribution, and the parameters were chosen so that the
sample means of μi1, μi2, and μi3 across the n observations are equal, while the response variance
is high (φ near 20). In this scenario, we set β21 = −0.3, β22 = 1.0, β23 = −0.5, β31 = −0.3,
β32 = −0.5, β33 = 1.0, γ1 = 3.0, and γ2 = γ3 = 0. In Scenarios 2a and 3a, we alter selected
parameters so that the component means of the response become far apart and very far apart,
respectively. In Scenario 4a, we allow φ to depend on the covariates by setting γ2 = 0.5 and
γ3 = −0.5. In the next scenario, the first and second covariates are generated from a Bernoulli
distribution with parameter 0.5 and a Gamma distribution with parameters 3 and 6 (chosen so
that the mean and variance match those of the standard uniform), respectively. Scenarios 1b–5b
mirror Scenarios 1a–5a, respectively, but with γ1 = 4.6 (so that φ is near 100, corresponding to a
low-variance response). The scenarios used in here are the same as in Pereira & Cai (2024).
4.1. Simulation results
The results in Table 1 show that the methods Quantile Residual and HDR with grid achieve
empirical coverage very close to the nominal 90% level across all scenarios, typically between 89%
and 91%. By contrast, the Triangular Approximation, since we have three response components,
we will refer to the HDR method as the triangular approximation, exhibits systematic overcoverage,
with values between 93% and 96%, which translates into regions that are wider than necessary.
In terms of efficiency, the average widths of the intervals are consistently smaller for the Quantile
Residual and HDR with grid than for the Triangular Approximation.
The triangular method produces very wide boxes, whereas the conformal methods yield more
compact regions. This is evident, for example, in Scenario 3b, where the widths for the Triangular
8

Table 1: Consolidated simulation results for the different conformal methods.
Scenario Method Individual Coverage (%) Mean Width Empirical Coverage (%) Average Time (s)
y1 y2 y3 y1 y2 y3
Scenario 1a Quantile Residuals 96,6 96,6 95,0 0,4157 0,4061 0,4034 90,6 0,357 (φ ≈ 20) HDR-floor - - - 0,5668 0,5668 0,5668 94,4 0,318 HDR-floor-grid - - - 0,4285 0,4194 0,4165 90,5 0,360
Scenario 1b Quantile Residuals 95,2 95,9 95,5 0,1667 0,1622 0,1626 89,1 0,307 (φ ≈ 100) HDR-floor - - - 0,2458 0,2458 0,2458 93,8 0,300 HDR-floor-grid - - - 0,1709 0,1677 0,1682 89,2 0,352
Scenario 2a Quantile Residuals 96,2 96,1 96,1 0,3970 0,3008 0,4284 90,6 0,311 (φ ≈ 20) HDR-floor - - - 0,5147 0,5147 0,5147 95,1 0,320 HDR-floor-grid - - - 0,4184 0,2921 0,4468 90,0 0,350
Scenario 2b Quantile Residuals 95,4 96,3 96,3 0,1588 0,1207 0,1707 90,3 0,308 (φ ≈ 100) HDR-floor - - - 0,2253 0,2253 0,2253 95,2 0,289 HDR-floor-grid - - - 0,1646 0,1236 0,1790 90,2 0,371
Scenario 3a Quantile Residuals 97,2 94,5 97,5 0,2988 0,1819 0,3337 91,0 0,300 (φ ≈ 20) HDR-floor - - - 0,7773 0,7773 0,7773 96,4 0,294 HDR-floor-grid - - - 0,4933 0,1374 0,5020 90,1 0,338
Scenario 3b Quantile Residuals 95,7 95,5 94,8 0,1125 0,0626 0,1240 89,0 0,304 (φ ≈ 100) HDR-floor - - - 0,2814 0,2814 0,2814 94,3 0,299 HDR-floor-grid - - - 0,1281 0,0570 0,1377 89,9 0,342
Scenario 4a Quantile Residuals 96,8 96,8 95,9 0,3979 0,2961 0,4298 91,1 0,326 (Hetero, φa) HDR-floor - - - 0,5456 0,5456 0,5456 95,3 0,331 HDR-floor-grid - - - 0,4376 0,2864 0,4632 89,8 0,396
Scenario 4b Quantile Residuals 95,5 95,6 96,3 0,1591 0,1198 0,1713 89,5 0,309 (Hetero, φb) HDR-floor - - - 0,2248 0,2248 0,2248 93,4 0,297 HDR-floor-grid - - - 0,1647 0,1226 0,1792 89,5 0,352
Scenario 5a Quantile Residuals 95,8 96,5 95,6 0,4114 0,3963 0,3964 90,1 0,326 (φ ≈ 20) HDR-floor - - - 0,5557 0,5557 0,5557 95,8 0,321 HDR-floor-grid - - - 0,4258 0,4065 0,4114 90,5 0,380
Scenario 5b Quantile Residuals 96,4 96,3 95,3 0,1642 0,1587 0,1578 90,4 0,312 (φ ≈ 100) HDR-floor - - - 0,2412 0,2412 0,2412 95,7 0,326 HDR-floor-grid - - - 0,1693 0,1636 0,1649 91,7 0,340
Approximation are more than twice those of the other methods. It is also observed that the Trian
gular method imposes identical widths on all components, ignoring the structure and asymmetry
inherent to compositional distributions, whereas the other methods preserve cross-component dif
ferences whenever they exist. Comparing scenario pairs with higher and lower precision (labeled
“a” and “b”) confirms the appropriate sensitivity of the conformal methods: when precision in
creases, widths shrink substantially, typically by 50% to 65%, without compromising coverage,
which remains on target.
In heteroskedastic settings, as in Scenarios 4a and 4b, this robustness persists: Quantile Residual
and HDR with grid retain the coverage level and remain more parsimonious than the Triangular
method. Relevant asymmetries across components also appear: in several scenarios, the compo
nent associated with y2 tends to present narrower intervals than y1 and y3, indicating differences
in precision and average shares captured by the models. The individual coverages of the Quan
tile Residual method generally fall between 95% and 97%, which is consistent with simultaneous
inclusion across the three coordinates, naturally pushing per-component coverage above the joint
target.
Across all scenarios, except for Scenario 3a, the HDR-floor-grid and Quantile Residual meth
ods yielded similar results. In Scenario 3a (high dispersion and the component means very far
apart), the Quantile Residual method attains marginal coverages between 94.5% and 97.5%, with
componentwise widths ranging approximately from 0.18 to 0.33 and empirical coverage of 91.0%.
The HDR-floor-grid method achieves empirical coverage essentially at the nominal level (90.1%),
however, for components y1 and y3 its intervals are wider than those of the Quantile Residual
method, whereas for y2 the Triangular Approximation yields a narrower interval.
It is possible to construct the conformal prediction region using a full grid over the entire simplex,
without relying on the HDR approximation. However, this approach leads to a substantially higher
computational burden. In contrast, the HDR approximation combined with a grid restricted to
the HDR region greatly reduces computational cost. To investigate this issue, we used Scenario
9

1 to construct predictive intervals using both the HDR-based method and the full simplex grid.
The corresponding results are reported in Table 2. We evaluated the results over 1000 and 100
Monte Carlo iterations for the response vector with three and four components, respectively. The
underlying hypothesis is that by using the HDR approximation for the prediction set, fewer test
points are required to achieve superior performance (e.g., in terms of coverage accuracy or width).
To evaluate this, we use a grid with 100 points for the HDR-based method and 200 points for the
full simplex in the three-component setting. For the four-component setting, we use 20 points for
the HDR-based method and 100 points for the full simplex.
Table 2: Comparison between HDR-based grid approximation and full simplex grid.
φ Method Coverage (%) Width y1 Width y2 Mean Width y3 Mean Width y4 Average Time (s)
20,09 HDR-floor-grid 90,5 0,4285 0,4194 0,4165 - 0,5244 20,09 Simplex-grid 90,5 0,4321 0,4225 0,4194 - 0,6293
134,29 HDR-floor-grid 89,2 0,1709 0,1677 0,1682 - 0,5264 134,29 Simplex-grid 89,7 0,1696 0,1679 0,1684 - 0,6277
20,09 HDR-floor-grid 89,0 0,3986 0,4054 0,4239 0,4640 0,6314 20,09 Simplex-grid 88,0 0,4452 0,4337 0,4457 0,4849 9,7665
134,29 HDR-floor-grid 89,0 0,1551 0,1628 0,1678 0,1822 0,6466 134,29 Simplex-grid 89,0 0,1724 0,1739 0,1761 0,1912 9,7192
The results in Table 2 provide clear evidence supporting the use of the HDR-based approxi
mation. First, both methods achieve virtually identical empirical coverage across the two values
of φ. In the three-component setting for φ ≈ 20, both procedures attain 90.5% coverage, and
for φ ≈ 134, the results remain extremely close (89.2% for HDR and 89.7% for the full simplex
grid). In the four-component setting, the increase in computational cost for the full simplex grid
is evident: the average runtime jumps from about 0.56 seconds for the HDR-based grid to more
than 9.5 seconds, while the empirical coverages remain very similar (89.0% vs 88.0% for φ ≈ 20
and 89.0% for both methods when φ ≈ 134). At the same time, the HDR-based method deliv
ers systematically smaller marginal widths across all components, indicating a more efficient use
of the probability mass. This indicates that restricting the search to the HDR region does not
compromise the statistical validity of the conformal prediction intervals.
Overall, these results demonstrate that the HDR approximation provides a computationally
more efficient alternative to a full simplex grid while preserving both the empirical coverage and
the shape of the conformal predictive region.
5. Application
We study the determinants of household budget allocation in Italy, a classic microeconomic prob
lem. The target is to build a predictive model for the expenditure shares assigned to three cate
gories: food, housing, and others. Because these are parts of a whole, the response is compo
sitional. The covariate vector xi comprises: (i) socioeconomic profile (log income and household
size), (ii) market context (price indices for each category). We employ the BudgetItaly dataset
with sample size n = 1729. The data are split into training (70%), calibration (20%), and test
(10%) sets. To reduce the variabiliy of the results, this splitting process was repeated 10 times
and the average values are reported in Table 3. Throughout, we target a nominal coverage level
of 90%.
The results from Table 3 indicate that the methods achieve the 90% nominal coverage level for all
methods, with the Quantile Residuals and HDR with grid showing the smallest discrepancy 90, 05%
and 90, 11%, respectively. In terms of efficiency, HDR with grid and Quantile Residual exhibit the
lowest mean widths and are noticeably smaller than the simple HDR. The individual coverages
of the Quantile Residual method are consistent with the 90,05% empirical coverage (intersection
of the marginals) and reflect asymmetries between components already suggested by the widths
10

Table 3: Consolidated results for the application.
Individual Coverage (%) Empirical Coverage (%) Mean Width
Method y1 y2 y3 y1 y2 y3
Quantile Residual 93,87 98,79 92,65 90,05 0,2142 0,1999 0,2094
HDR-floor — — — 93,75 0,3072 0,3072 0,3072
HDR-floor-grid — — — 90,11 0,2204 0,2076 0,2174
(systematically narrower intervals for y2). In summary, for the BudgetItaly application, the
Quantile Residual offers the best compromise between calibration and parsimony (coverage closest
to 90% with smaller regions), closely followed by the HDR with grid. The triangular HDR serves as
a fast approximation, but remains excessively conservative and less informative about the geometry
of the predictive region. The visualization for four points of the test set can be visualized in the
Figures 2, 3 and 4 of Appendix A.
6. Discussion
This paper develops conformal prediction procedures tailored to compositional responses that live
on the simplex. We contribute two complementary constructions layered on top of Dirichlet regres
sion: (i) a split-conformal method based on quantile residuals of the marginal Beta components
(Quantile Residuals), and (ii) a density-based approach that targets highest-density regions (HDR)
via a simple coordinate-floor (HDR-floor) envelope, optionally sharpened by an internal grid re
finement (HDR-floor-grid).
Across extensive simulations spanning homoscedastic and heteroscedastic designs and both high
and low-precision regimes, Quantile Residuals and HDR-floor-grid achieve empirical joint coverage
close to the nominal level and do so with substantially narrower regions than the unrefined HDR
floor, which is intentionally conservative. These findings are mirrored in the real-data application to
household budget shares BudgetItaly, where HDR-floor-grid attains coverage closest to target
with the smallest average widths, closely followed by Quantile Residuals; HDR-floor remains a
useful fast baseline but yields wider, less informative sets. Together, the results indicate that
calibrated and efficient uncertainty quantification on the simplex is feasible with methods that are
simple to implement using standard Dirichlet regression software.
From a practical standpoint, we recommend the following: when fast computation is paramount
or as a first pass, use HDR-floor to obtain a conservative envelope. When sharper sets are needed,
switch to HDR-floor-grid, which recovers much of the efficiency while preserving calibration. When
per-component interpretability and ease of implementation are priorities, Quantile Residuals pro
vide a strong, robust default.
The work has limitations that suggest clear avenues for extension. HDR-floor can overcover
when used without refinement, motivating adaptive grid strategies or alternative convex outer ap
proximations that reduce slack while keeping computation manageable. Furthermore, zero inflated
compositional data (Tang & Chen, 2019), common in compositional applications, call for conformal
methods built on zero-inflated Dirichlet type models. In summary, the proposed conformal tools
provide a practical recipe for calibrated prediction on the simplex: they are simple, geometry
aware, and empirically efficient. We hope these methods facilitate broader adoption of rigorous
uncertainty quantification in compositional prediction tasks across the applied sciences.
11

References
Aitchison, J. (1982). The statistical analysis of compositional data. Journal of the Royal Statistical
Society: Series B (Methodological), 44(2), 139–160.
Alenazi, A. (2023). A review of compositional data analysis and recent advances. Communications
in Statistics-Theory and Methods, 52(16), 5535–5567.
Angelopoulos, A. N. & Bates, S. (2021). A gentle introduction to conformal prediction and
distribution-free uncertainty quantification. arXiv preprint arXiv:2107.07511 .
Barber, R. F., Candes, E. J., Ramdas, A. & Tibshirani, R. J. (2021). Predictive inference with the
jackknife+. The Annals of Statistics, 49(1), 486–507.
Barber, R. F., Candes, E. J., Ramdas, A. & Tibshirani, R. J. (2023). Conformal prediction beyond
exchangeability. The Annals of Statistics, 51(2), 816–845.
Barndorff-Nielsen, O. E. & Jørgensen, B. (1991). Some parametric models on the simplex. Journal
of Multivariate Analysis, 39(1), 106–116.
Bertsekas, D. (2009). Convex optimization theory, volume 1. Athena Scientific.
Bostr ̈om, H. & Johansson, U. (2020). Mondrian conformal regressors. In Conformal and proba
bilistic prediction and applications, pages 114–133. PMLR.
Brent, R. P. (2013). Algorithms for minimization without derivatives. Courier Corporation.
Cabezas, L. M., Otto, M. P., Izbicki, R. & Stern, R. B. (2025). Regression trees for fast and
adaptive prediction intervals. Information Sciences, 686, 121369.
Chernozhukov, V., W ̈uthrich, K. & Zhu, Y. (2021). Distributional conformal prediction. Proceed
ings of the National Academy of Sciences, 118(48), e2107794118.
Cribari-Neto, F. & Lima, F. P. (2021). Resampling-based prediction intervals in beta regressions
under correct and incorrect model specification. Communications in Statistics-Simulation and
Computation, 50(5), 1398–1416.
Dewolf, N., De Baets, B. & Waegeman, W. (2025). Conditional validity of heteroskedastic confor
mal regression. Information and Inference: A Journal of the IMA, 14(2), iaaf013.
Dunn, P. K. & Smyth, G. K. (1996). Randomized quantile residuals. Journal of Computational
and Graphical Statistics, 5(3), 236–244.
Espinheira, P. L., Ferrari, S. L. & Cribari-Neto, F. (2014). Bootstrap prediction intervals in beta
regressions. Computational Statistics, 29, 1263–1277.
Ferrari, S. & Cribari-Neto, F. (2004). Beta regression for modelling rates and proportions. Journal
of Applied Statistics, 31(7), 799–815.
Ghorbani, H. (2019). Mahalanobis distance and its application for detecting multivariate outliers.
Facta Universitatis, Series: Mathematics and Informatics, pages 583–595.
Greenacre, M. (2021). Compositional data analysis. Annual Review of Statistics and its Applica
tion, 8(1), 271–299.
Hijazi, R. H. & Jernigan, R. W. (2009). Modelling compositional data using dirichlet regression
models. Journal of Applied Probability & Statistics, 4(1), 77–91.
12

Hosmer Jr, D. W., Lemeshow, S. & Sturdivant, R. X. (2013). Applied logistic regression. John
Wiley & Sons.
Izbicki, R. (2025). Machine Learning Beyond Point Predictions: Uncertainty Quantification. First
edition. ISBN 978-65-01-20272-3.
Kato, Y., Tax, D. M. & Loog, M. (2023). A review of nonconformity measures for conformal
prediction in regression. In Conformal and probabilistic prediction with applications, pages 369
383. PMLR.
Lei, J., G’Sell, M., Rinaldo, A., Tibshirani, R. J. & Wasserman, L. (2018). Distribution-free
predictive inference for regression. Journal of the American Statistical Association, 113(523),
1094–1111.
Lin, J. (2016). On the dirichlet distribution. Department of Mathematics and Statistics, Queens
University, 40.
Maier, M. J. (2014). Dirichletreg: Dirichlet regression for compositional data in r. Technical Report
125, Department of Statistics and Mathematics.
Papadopoulos, H., Gammerman, A. & Vovk, V. (2008). Normalized nonconformity measures for
regression conformal prediction. In Proceedings of the IASTED International Conference on
Artificial Intelligence and Applications (AIA 2008), pages 64–69.
Pereira, G. H. & Cai, J. (2024). A class of bootstrap based residuals for compositional data. arXiv
preprint arXiv:2403.13544 .
Romano, Y., Patterson, E. & Candes, E. (2019). Conformalized quantile regression. Advances in
Neural Information Processing Systems, 32.
Shafer, G. & Vovk, V. (2008). A tutorial on conformal prediction. Journal of Machine Learning
Research, 9(3).
Tang, Z.-Z. & Chen, G. (2019). Zero-inflated generalized dirichlet multinomial regression model
for microbiome compositional data analysis. Biostatistics, 20(4), 698–713.
Tibshirani, R. J., Foygel Barber, R., Candes, E. & Ramdas, A. (2019). Conformal prediction under
covariate shift. Advances in Neural Information Processing Systems, 32.
Vovk, V. (2012). Conditional validity of inductive conformal predictors. In Asian Conference on
Machine Learning, pages 475–490. PMLR.
Vovk, V., Gammerman, A. & Shafer, G. (2005). Algorithmic learning in a random world , vol
ume 29. Springer.
Wu, Z., Leisen, F. & Rubio, F. J. (2025). Conformalized regression for continuous bounded
outcomes. arXiv preprint arXiv:2507.14023 .
Zhang, Z., Graffelman, J. & Dorn, M. (2025). A compositional approach to the analysis of white
blood cell counts for early covid-19 detection. medRxiv , pages 2025–05.
13

Appendix A. Test points plots
Figure 2: Test point plots for the quantile residual method. The yellow circle denotes the estimated mean, and the red diamond denotes the true test point.

Figure 3: Test point plots for the HDR method. The yellow circle denotes the estimated mean, and the red diamond denotes the true test point.
15

Figure 4: Test point plots for the HDR with grid method. The yellow circle denotes the estimated mean, and the red diamond denotes the true test point.
16

Appendix B. Split Conformal algorithm for the methods
Input: Dataset D = {(xi, yi)}n
i=1 with yi ∈ ∆D; index split into training I1 and
calibration I2 (with n2 = |I2|); model specification in (2); significance level
α ∈ (0, 1).
Output: Conformal prediction set Csplit(xn+1) for a new covariate xn+1.
1. Split: Partition the data into training I1 and calibration I2.
2. Fit: Using I1, fit the Dirichlet regression in (2) and obtain parameters μbi = μb(xi) and
φbi = φb(xi).
3. Calibration scores: For each i ∈ I2:
(a) For each component j = 1, . . . , D, compute
Uij = FBetaj yij ; μbij , φbij ,
where FBetaj is the marginal Beta CDF induced by the fitted Dirichlet at xi for
component j.
(b) Transform via the standard normal: Zij = Φ−1(Uij).
(c) Define the nonconformity score: Si = maxj |Zij|.
4. Conformal quantile: Let S(1) ≤ · · · ≤ S(n2) be the ordered {Si : i ∈ I2}. Set
q1−α = S(⌈(n2+1)(1−α)⌉).
5. Prediction for xn+1:
(a) Compute pinf = Φ(−qα) and psup = Φ(qα).
(b) Obtain μbn+1 = μb(xn+1) and φbn+1 = φb(xn+1). For each component j, construct the
marginal interval
Ij (xn+1) =
h
F −1
Betaj (pinf ) , F −1
Betaj (psup)
i
.
(c) Return the Cartesian prediction set restricted to the simplex:
Csplit(xn+1) =
n
y ∈ ∆D : yj ∈ Ij(xn+1) ∀ j = 1, . . . , D
o
.
Algorithm 1: Split Conformal Prediction Set for Dirichlet Regression

Input: Dataset D = {(xi, yi)}n
i=1 with yi ∈ ∆D; index split into training I1 and
calibration I2 (with n2 = |I2|); Dirichlet model specification λj(x) = φ(x)μj(x);
level α ∈ (0, 1).
Output: Conformal prediction set T (xn+1) (approximating HDR) for a new covariate
xn+1.
1. Split: Partition the data into training I1 and calibration I2.
2. Model fitting: Using I1, fit the Dirichlet regression and obtain the predictors
μb(x), φb(x), λb(x) = φb(x) μb(x).
3. Calibration scores (likelihood-based): For each i ∈ I2, define
si = − log f yi | xi; λb(xi) = − log Γ(φbi) +
D
X
j=1
log Γ(μbijφbi) −
D
X
j=1
(
μbij φbi) log yij .
4. Conformal quantile: Let s(1) ≤ · · · ≤ s(n2) be the ordered {si : i ∈ I2}. Set
q1−α = s (⌈(n2+1)(1−α)⌉).
5. Test-point parameters at xn+1: Compute
μb∗ = μb(xn+1), φb∗ = φb(xn+1), λb∗ = φb∗ μb∗,
t∗ = −qα − log Γ(φb∗) +
D
X
j=1
log Γ(μb∗jφb∗), wj = λb∗j − 1 = φb∗μb∗j − 1.
6. Coordinate floors via 1D optimization (one i at a time): For each i ∈ {1, . . . , D},
solve the convex problem
min
y∈RD yi subject to
X
j
yj = 1,
X
j
wj log yj ≥ t∗, yj ≥ 0,
obtaining τi. Proceed in two steps:
(a) Closed form (interior case): If wj > 0 for all j (equivalently λb∗j > 1), use KKT to
obtain
θ= 1
wi
1+ρ + W −wi
ρ
, τi = θ wi
1 + ρ, W =
D
X
j=1
wj ,
where ρ > 0 is the unique root of the one-dimensional equation
Fi(ρ) = wi log ρ+(W −wi) log(1+ρ)−W log wiρ+(W −wi)(1+ρ) +
D
X
j=1
wj log wj − t∗ = 0.
(b) Fallback (boundary/negative case): If some wj ≤ 0 (or the search fails), set τi = 0.
7. Simplex-floor set: Define the floor Simplex
T (xn+1) =
n
y ∈ ∆D : yi ≥ τi, i = 1, . . . , D
o
.
8. Output: Return T (xn+1) as the prediction set for yn+1.
Algorithm 2: Split Conformal Prediction with Simplex-floor HDR Approximation
18

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:19.239Z
- **Text Length:** 43441 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
