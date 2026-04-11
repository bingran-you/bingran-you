# PDF Document: Gao et al. - 2025 - High-Dimensional Spatial Arbitrage Pricing Theory with Heterogeneous Interactions.pdf

**File Path:** Gao et al. - 2025 - High-Dimensional Spatial Arbitrage Pricing Theory with Heterogeneous Interactions.pdf

**Processed Date:** 2026-02-10T18:14:43.220Z

**File Size:** 3700.10 KB

**Total Pages:** 48

**Extracted Pages:** 48

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3527

**Title:** High-Dimensional Spatial Arbitrage Pricing Theory with Heterogeneous Interactions

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

High-Dimensional Spatial Arbitrage Pricing Theory with Heterogeneous
Interactions
Zhaoxing Gao1, Sihan Tu2, and Ruey Tsay3∗
1School of Mathematical Sciences, University of Electronic Science and Technology of China
2School of Management, Zhejiang University
3Booth School of Business, University of Chicago
Abstract
This paper investigates estimation and inference of a Spatial Arbitrage Pricing Theory
(SAPT) model that integrates spatial interactions with multi-factor analysis, accommodating
both observable and latent factors. Building on the classical mean-variance analysis, we intro
duce a class of Spatial Capital Asset Pricing Models (SCAPM) that account for spatial effects in
high-dimensional assets, where we define spatial rho as a counterpart to market beta in CAPM.
We then extend SCAPM to a general SAPT framework under a complete market setting by
incorporating multiple factors. For SAPT with observable factors, we propose a generalized
shrinkage Yule-Walker (SYW) estimation method that integrates ridge regression to estimate
spatial and factor coefficients. When factors are latent, we first apply an autocovariance-based
eigenanalysis to extract factors, then employ the SYW method using the estimated factors. We
establish asymptotic properties for these estimators under high-dimensional settings where both
the dimension and sample size diverge. Finally, we use simulated and real data examples to
demonstrate the efficacy and usefulness of the proposed model and method.
Keywords: Spatial Arbitrage Pricing Theory, Multi-factor Analysis, Yule-Walker Estimation,
Eigenanalysis, High Dimension
∗Corresponding author: ruey.tsay@chicagobooth.edu (R.S. Tsay). Booth School of Business, University of Chicago,
5807 South Woodlawn Avenue, Chicago, IL, 60637, USA.
1
arXiv:2511.01271v1 [econ.EM] 3 Nov 2025

1 Introduction
With the rapid advancement in information technology, large-scale datasets have become ubiq
uitous across all scientific areas with important applications. These datasets also introduce new
analytical challenges in financial econometrics and statistics, particularly in high-dimensional set
tings. As a fundamental tool for dimension reduction and feature extraction, factor models provide
a crucial link between economic theory and data analysis. Since the seminal work of Markowitz
(1952) on portfolio theory, factor-based pricing models have played a central role in asset pricing,
investment analysis and risk assessment. The Capital Asset Pricing Model (CAPM), developed
by Sharpe, Lintner, and Mossin in the 1960s, introduced the concept of market beta to quantify
systematic risk-return relationships. Ross (1976) proposed the Arbitrage Pricing Theory (APT),
which extended the single-factor CAPM by incorporating multiple systematic risk factors under
no-arbitrage principles, allowing for a more flexible representation of expected returns. Modern
factor-based pricing research has evolved into two dominant approaches to address the growing
market complexity. The first approach, developed by Fama and French (1993, 2015), relies on the
theory-driven observable factors, such as market returns and firm characteristics. Building on this
framework, numerous factor models for asset returns have been proposed; for instance, Feng et al.
(2020) propose the Double-Selection LASSO to evaluate the marginal contribution of individual
factors relative to an existing high-dimensional factor set. While these models offer strong economic
interpretability, their fixed factor structures limit their ability to capture modern dynamic market
interactions. Recent studies by Forni et al. (2000), Bai and Ng (2002), Bai (2003), Forni et al.
(2005), Lam and Yao (2012), Fan et al. (2013), Gao and Tsay (2022, 2023), among others, have
focused on latent factor models as an alternative approach. These models provide a methodology
for inferring unobserved common factors from covariance structures. Lettau and Pelger (2020) and
Giglio et al. (2025) further demonstrate the effectiveness of their tailored latent factor models in
asset pricing, offering deeper insights into the underlying structure of financial markets. Liu et al.
(2025) show that one can improve the estimation of portfolio risk by augmenting the Fama and
French factors with latent factors extracted from a matrix-variate dataset of asset returns.
Despite the effectiveness of factor models in explaining cross-sectional and dynamic depen
dence, many economic and financial applications often manifest intricate spatial interconnections.
Consider, for example, the spatial distribution of economic indicators across regions, where the per
formance of one region may influence its neighbors; see Anselin (1988) and Cressie (2015). Since
the seminal work of Cliff and Ord (1973) on spatial autocorrelations, spatial models are often used
to model cross-sectional dependence of different economic units or individuals at different locations.
More recently, the spatial models have been extended to spatial dynamic panel data (SDPD) models
by adding a time-lagged direction to account for serial correlations across different economic units
or individuals; see, for example, Lee and Yu (2010). Empirically, the spatial interactions among
the panel may exist in many large-dimensional economic and financial systems, together with other
comovements or common factors. For example, Pirinsky and Wang (2006) found the spatial effect
in the U.S. equity market by studying the comovements of common stock returns of U.S. corpora
1

tions in the same geographic area; Kou et al. (2018) proposed an asset pricing model with spatial
interactions and discovered significant spatial interactions in the futures contracts on S&P/Case
Shiller Home Price Indices. Therefore, augmenting factor models with spatial interactions not only
extends these models with additional common factors but also enriches spatio-temporal models by
integrating common factor structures.
In this paper, we focus on spatial panel models with common factors in the context of arbitrage
pricing under high-dimensional settings. Building on the classical mean-variance analysis, we first
introduce a class of Spatial Capital Asset Pricing Models (SCAPM) that account for spatial effects
in high-dimensional assets under a “complete market” or “minimum complete market” assumption,
where we introduce a spatial rho as a counterpart to market beta in CAPM. Within the spatial
CAPM framework, we extend the model to a Spatial Arbitrage Pricing Theory (SAPT) by incorpo
rating a multifactor structure. This formulation captures both systematic risk factors and spatial
spillover effects, offering a unified approach to modeling interdependencies in asset returns.
While prior studies, such as Pesaran and Tosetti (2011), Kou et al. (2018), Bai and Li (2021),
Yang (2021), and Hu et al. (2023), have examined similar spatial interactions in factor models,
the SAPT studied in this paper differs from the existing models for several reasons. First, unlike
Pesaran and Tosetti (2011), which focuses on spatial autocorrelation in unobserved errors, our
model explicitly captures spatial correlations among panel units. Second, the proposed SAPT
model functions as a pure spatial arbitrage pricing factor model without lagged or exogenous
variables, distinguishing it from the models in Bai and Li (2021) and Yang (2021), which incorporate
exogenous features and assume a homogeneous spatial coefficient. This structure presents challenges
in identifying suitable instrumental variables for method-of-moments estimation. Third, we consider
both observable and latent factor structures. When factors are observable, our model aligns with
the spatial asset pricing models of Kou et al. (2018) and Hu et al. (2023) for financial returns.
However, when factors are unobservable, which is not considered in Kou et al. (2018) or Hu et al.
(2023), our model extends the statistical and econometric factor models by incorporating spatial
interaction terms, capturing additional panel information beyond common latent factors. Fourth,
our model accommodates panel dimensions that can grow to infinity, differing from the quasi
maximum likelihood estimation (QMLE) framework in Aquaro et al. (2021) and Hu et al. (2023),
where the dimension is fixed. This flexibility enables broader applications in high-dimensional
settings.
These distinctive features of the proposed SAPT model introduce additional estimation chal
lenges, making conventional spatial econometric methods inadequate. For models with observable
factors, the widely used QMLE approach, as discussed in Lee (2004), Yu et al. (2008), and Bai and Li
(2021), often encounters computational difficulties due to the large matrix determinants involved
in the likelihood function. These challenges become even more pronounced in high-dimensional
settings, especially when estimating numerous unit-specific spatial coefficients. In cases with het
eroskedastic disturbances, Lin and Lee (2010) demonstrated that the QML estimator for the spatial
autoregressive (SAR) model is inconsistent if heteroskedasticity is ignored. To address this problem,
2

they proposed a GMM estimator, which is computationally more efficient than QMLE. However,
the SAPT model considered here lacks lagged or exogenous variables, making it difficult to identify
suitable instrumental variables for constructing sufficiently many estimating equations.
In view of this, we propose a ridge-regularized Yule-Walker estimator that integrates shrinkage
techniques with method-of-moments. By incorporating lagged common factors as instrumental
variables, we reformulate parameter estimation as a system of L2-penalty Yule-Walker equations for
each panel component, thereby addressing the issue of insufficient number of estimating equations in
settings without exogenous variables or structural constraints on spatial effects. In contrast to the
regularized method-of-moments approaches proposed by Liao (2013) and Carrasco and Tchuente
(2015), which primarily focus on selecting instruments or moment conditions, our method applies
ridge regularization directly to the Yule-Walker equations to mitigate potential singularity and
improve estimation robustness. We establish the asymptotic properties of our estimator in the
setting where both the dimension N and the sample size T approach infinity. Despite the bias
inherent in ridge estimators, we demonstrate the feasibility of conducting joint parameter inference.
This contrasts with QML estimators in Aquaro et al. (2021) and Hu et al. (2023) which often require
finite N and inevitably accumulate asymptotic bias as N diverges with T ; See Remarks 6 and 7
in Aquaro et al. (2021) for a discussion. While alternative methods, such as those proposed by
Bai and Li (2021), ensure parameter consistency under structural constraints and complex bias
correction, it remains unclear whether their approach is feasible for the SAPT considered in this
paper with heterogeneous spatial interactions.
In the presence of latent factors, our model can be reformulated as an approximate factor model.
We propose a two-step procedure to extract latent factors and to estimate unknown parameters.
Given the white noise assumption on the error terms in the SAPT model (see Kou et al. (2018),
Aquaro et al. (2021), and Hu et al. (2023)), we first apply the auto-covariance-based eigenanalysis
approach from Lam and Yao (2012) and Gao and Tsay (2022) to estimate dynamically dependent
factors. This ensures that the factors and their lagged counterparts remain uncorrelated with
the noise terms, enabling their use as instrumental variables. Once the factors are extracted via
eigenanalysis, we implement the Yule-Walker estimation method, replacing the unknown factors
with their estimated counterparts. Furthermore, we establish the asymptotic properties of the
estimated factors, scalar coefficients, and loading vectors as both the dimension N and sample
size T approach infinity. Notably, we also derive the limiting distributions of the estimated factors
under a proper rotation matrix, a result not presented in Lam and Yao (2012), offering independent
interest for readers.
We conduct extensive simulations to evaluate the accuracy of our estimation method, partic
ularly in estimating the spatial rho and the loading matrix, while examining the convergence and
asymptotic properties of the jointly estimated parameters. Moreover, we compare our method’s
predictive performance with QML estimators. The results show that our approach outperforms
these alternatives in out-of-sample forecasting. Empirically, we apply our method to two real
datasets on U.S. stock returns and housing prices, respectively. In both cases, it achieves superior
3

out-of-sample forecasting performance compared to QMLE and the classical Fama-French factor
model, reinforcing its practical advantages in high-dimensional economic and financial analysis.
This paper makes several significant contributions. First, rather than relying on a mathematical
formulation, we derive the SCAPM from a classical mean-variance perspective and extend it to a
SAPT framework by integrating a multifactor structure. This approach offers a new perspective for
economists and practitioners in understanding spatial asset pricing theory. Second, from a modeling
standpoint, the proposed framework is flexible, accommodating both observable and latent factors.
This extension provides an opportunity to explore the dynamics of large-dimensional economic
and financial panel systems. Third, from a methodological perspective, since QMLE methods
require extensive computation and may be impractical in high-dimensional settings with general
covariance structures, we propose a shrinkage estimation approach with joint inferential theory for
the proposed models. While individual estimators may not be consistent, joint estimation allows for
consistent inference. Our procedure is computationally efficient and avoids the need for restrictive
distributional or covariance assumptions when using the Yule-Walker estimation method. More
importantly, the proposed shrinkage estimation method outperforms the QMLE method in out-of
sample evaluations, highlighting their empirical advantages in high-dimensional applications.
The remainder of the paper is structured as follows. Section 2 outlines the formulations of
the SCAPM and SAPT models under study. Section 3 provides the modeling framework and its
estimation procedure. Section 4 establishes the asymptotic properties of the derived estimators.
Section 5 evaluates the finite-sample performance of the proposed approach through simulations
and Section 6 illustrates the proposed model and method with two empirical applications. Section 5
concludes. All proofs and derivations for the asymptotic results are relegated to an online Appendix.
Notation: We use the following notation. For a p × 1 vector u = (u1, ..., up)′, ∥u∥1 = ∑p
i=1 |ui|
is the l1-norm and ∥u∥∞ = max1≤i≤p |ui| is the l∞-norm. Ip denotes the p × p identity matrix.
For a matrix H, its Frobenius norm is ∥H∥ = [trace(H′H)]1/2 and its operator norm is ∥H∥2 =
√λmax(H′H), where λmax(·) denotes the largest eigenvalue of a matrix, and ∥H∥min is the square
root of the minimum non-zero eigenvalue of HH′. |H| denotes the absolute value of H elementwisely.
The superscript ′ denotes the transpose of a vector or matrix. We also use the notation a ≍ b to
denote a = O(b) and b = O(a) or a and b have the same order of stochastic bound when they are
random variables.
2 Spatial CAMP and Spatial APT
In this section, we develop a Spatial Capital Asset Pricing Model (SCAPM) using mean-variance
analysis within a complete market framework. Additionally, we construct a spatial arbitrage pricing
theory model by incorporating a multifactor structure.
4

2.1 Complete Market Assumption
We consider a one-period economy with N risky assets in the market whose random returns are
denoted as r = (r1, ..., rN )′ over the period. The expected return is μ = (μ1, ..., μN )′ and the
risk-free asset return is rf . Let rM be the return of the market portfolio or the tangency portfolio
in the mean-variance framework of Markowitz (1952) with expected return μM .
Suppose the N assets are diverse, with N sufficiently large, and encompass a wide spectrum
of asset categories. It is reasonable to assume that each individual asset exhibits some degree
of association with the others. Within this framework, we introduce the concept of a complete
market, which implies that the extensive set of assets enables the formation of suitable linear
combinations to replicate the returns of any specific asset in the market. The definition of a
complete market, or equivalently, a minimum complete market, is provided in Definition 1 and
equivalently in Definition 2 below.
Definition 1 (Complete Market). Suppose there are N risky assets in the market, where N is
sufficiently large. The market is said to be complete if the return of any asset rj can be expressed
as a linear combination of the remaining N − 1 assets, i.e., those indexed by {1, ..., N } \ {j}, for
j = 1, ..., N , However, rj cannot be replicated using only N − 2 assets from {1, ..., N } \ {j}.
Definition 2 (Minimum Complete Market). A market is called a minimum complete market if it
contains at least N − 1 assets from a complete market, as the return of the remaining asset can be
fully replicated by a linear combination of the other N − 1 assets in this minimum complete market.
This conceptualization of a complete market aligns with the idea that the abundance and
diversity of assets enable the construction of portfolios capable of replicating the performance of
any individual asset. It suggests that the richness of the market, in terms of asset variety, allows
for the creation of synthetic versions of assets by leveraging a diverse set of available instruments.
In a high-dimensional setting, market completeness arises from the vast number and diversity
of assets, facilitating the construction of well-diversified portfolios that can closely approximate
the returns of specific assets. The concept of a complete market is closely tied to the absence
of arbitrage opportunities. In such a market, no-arbitrage conditions ensure that riskless profits
cannot be generated through linear combinations of available assets. If arbitrage opportunities
existed, they would indicate an incomplete market, as investors could exploit them to create new
assets beyond those initially available.
However, achieving a truly complete market in practice is challenging. Real-world markets
often face limitations in asset variety, and factors such as transaction costs, market frictions, and
short-selling constraints can hinder perfect asset replication. Nonetheless, the notion of a complete
market provides a framework for understanding the relationships among assets and their pricing
dynamics in a diversified financial environment.
5

Figure 1: Mean-variance efficient frontier with a risk-free asset. The horizontal axis denotes the standard deviation of the portfolio and the vertical axis denotes the expected return of the corresponding portfolio. Available at https://quantpedia.com/markowitz-model/.
2.2 From CAPM to Spatial CAPM
Based on the mean-variance analysis (e.g., Cochrane (2009)), there exists a weight vector θ =
(θ1, ..., θN )′ such that the market (or tangency) portfolio can be expressed as rM = θ′r, as illustrated
in Figure 1. For the j-th asset with return rj and expected return μj, the capital asset pricing
model (CAPM) of Sharpe (1964) states that
μj − rf = Cov(rj, rM )
Var(rM ) (μM − rf ),
where the quantity βj = Cov(rj,t,rM,t)
Var(rM,t) is referred to as the market beta of the jth asset in the finance
literature. In practice, the S&P 500 index return often serves as a proxy for the market portfolio,
and the market beta can be estimated by running an OLS regression over T periods. For further
details, see Chapters 5 and 9 of Cochrane (2009).
Next, we formulate a spatial capital asset pricing model (SCAPM), building on the mean
variance analysis within a complete market defined in Definition 1. For each j, we remove rj from
the portfolio return vector r and consider the mean-variance analysis of the remaining N − 1 risky
assets and the risk-free rate rf . Through the classic mean-variance optimization, we obtain the
portfolio weight wj, where the j-th position of wj is zero and w′j1N = 1 such that the portfolio w′jr
is a tangency portfolio, as illustrated in Figure 1 without the j-th asset. The optimal portfolios lie
along the capital allocation line (CAL) in the mean-variance framework, with a slope
μj,M − rf
σj,M
,
6

where
μj,M = E(w′
jr), and σj,M =
√
Var(w′j r).
Then, for the asset j with expected return μj, we have the following theorem.
Theorem 1. Suppose the N risky assets are in a complete market, as described in Definition 1.
For the j-th risky asset with expected return μj, we have the following relationship:
μj − rf = Cov(rj, w′jr)
Var(w′jr) (μj,M − rf ),
where μj,M is the expected return of the tangency portfolio rj,M = w′jr with the j-th asset excluded
from the portfolio. We define ρj = Cov(rj,w′
j r) Var(w′
jr) and refer to it as the “spatial rho” for the j-th asset.
The proof of Theorem 1 can be found in the Appendix. From Theorem 1, we observe that the
spatial rho is asset-specific, similar to the market beta in the CAPM. However, the key difference
is that the spatial tangent portfolio is also asset-specific, which contrasts with the classical CAPM,
where the market portfolio is fixed and unique for all assets.
2.3 Spatial Arbitrage Pricing Theory
In this section, we derive a spatial arbitrage pricing theory model following the framework of Ross
(1976). To better illustrate the application of the proposed model in asset pricing, we use the
notation rt = (r1,t, ..., rN,t)′ to denote a vector of returns to N risky assets at time t. Letting
μ0 = (μ0,1, ..., μ0,N )′ be the expected returns of rt, we consider the following asset pricing model
with spatial interactions and multi-factors:
rt = D(ρ)Wrt + ν0 + Bft + εt, (1)
where ft = (f1,t,...,fK,t)′ consists of K observable factors for which the expected return of fi,t is
μi, for i = 1, ..., K. The columns of B = (δ1, ..., δK) are the associated K loading vectors of the
K factors, and ν0 = (IN − D(ρ)W)μ0, where ρ is a vector of spatial rhos. W is a known spatial
weight matrix with zero main diagonal elements, and D(ρ) = diag(ρ1, ..., ρN ), where ρj can be
estimated by the method in Section 3 below. We may assume each row of W, denoted as wj, can
be calculated either based on some economic distance or through the mean-variance analysis. We
introduce some notations before the derivation of the spatial arbitrage pricing theory. We use 1N
to denote the N -dimensional vector of 1, e.g., 1N = (1, ..., 1)′ ∈ RN . Let θ = (θ1, ..., θN )′ represent
the weight vector that will be used to construct an arbitrage portfolio. Our derivation proceeds in
the following three steps.
Step 1. Suppose the random vector of returns rt satisfies Model (1). We use a weight vector θ to
construct an arbitrage portfolio of N assets, where we assume θ′1N = 0, implying that there is no
wealth invested in the portfolio. We also require θ to be a well-diversified portfolio weight with
7

each component θi being of order 1/N in magnitude as in Ross (1976).
Step 2. The random return of the portfolio can be written as
θ′rt = θ′μ0 + θ′(IN − D(ρ)W)−1Bft + θ′(IN − D(ρ)W)−1εt,
where μ0 = (IN − D(ρ)W)−1ν0. We further assume that εi,t’s are independent with each other,
for i and t, which is a commonly used assumption in the spatial econometrics literature, and each
element of S(ρ)−1 = (IN − D(ρ)W)−1 are of order 1/N in absolute magnitude. Together with
Assumption 2 in Section 4 below, by the law of large numbers, we can show that
θ′(IN − D(ρ)W)−1εt = op(1),
and, hence,
θ′rt ≈ θ′μ0 + θ′(IN − D(ρ)W)−1Bft.
Step 3. If we require that the arbitrage portfolio with weight θ be chosen with no systematic risk,
then
θ′(IN − D(ρ)W)−1δi = 0, i = 1, ..., K. (2)
This condition ensures that the return of the arbitrage portfolio becomes θ′μ0. Using the constraint
of no wealth that θ′1N = 0, the return must be zero to prevent arbitrarily large disequilibrium
positions. Therefore, we have
θ′μ0 = 0. (3)
From the relationships in (2), (3), and θ′1N = 0, we conclude that μ0, 1N , and (IN − D(ρ)W)−1δi
are on the same hyperplane, for i = 1, ..., K. Then there exist γ0, γ1,..., γK such that
μ0 = γ0,i1N + γi(IN − D(ρ)W)−1δi, i = 1, ..., K. (4)
We will solve the above equations for γ0,i and γi by a plug-in method. Note that when μ0 = rf 1N ,
the return vector of a risk-free asset, the loadings associated with the factors are zero, i.e., δi = 0,
for i = 1, ..., K. Furthermore, if we take rt = fi,t1N , then μ0 = μi1N , and the spatial parameter
ρ = 0, since there is no spatial effect for a single asset. In this case, the exposure to the i-th factor
is δi = 1N , while the exposures to the other factors are zero. These special cases result in the
following equations:
{ rf 1N = γ0,i1N ,
μi1N = γ0,i1N + γi1N , i = 1, ..., K.
It follows from the above equations that
γ0,i = rf , γi = μi − rf , i = 1, ..., K,
8

where γ0,i turns out to be independent of i. Then, (4) becomes
μ0 = rf 1N + (IN − D(ρ)W)−1δ1(μ1 − rf ) + ... + (IN − D(ρ)W)−1δK (μK − rf ),
or equivalently,
(IN − D(ρ)W)(μ0 − rf 1N ) = δ1(μ1 − rf ) + ... + δK (μK − rf ),
which is a spatial APT model that extends the SCAMP in Section 2.2 with multi-factors, where
μi − rf is the risk premium of the i-th factor and μ0 − rf 1N is the vector of N excessive asset
returns. For the j-th asset, we can derive that
μ0,j − rf = ρj w′
j(μ0 − rf 1N ) + δ1,j(μ1 − rf ) + ... + δK,j(μK − rf ), j = 1, ..., N. (5)
Therefore, we may construct a new asset-specific factor, called the spatial factor, defined as w′j(μ0 −
rf 1N ) associated with the j-th asset where the j-th element of wj is zero according to the definition
of the spatial weight. The scalar ρj represents the spatial effect on the j-th asset, which is termed
the spatial rho, in contrast to the market beta in the classic CAPM of Sharpe (1964).
In the next section, we examine a general APT model that incorporates spatial interactions
and propose a Yule-Walker estimation and inference method using factor instruments and ridge
techniques for the model.
3 General Model and Methodology
3.1 Setup
Let yt = (y1,t, ..., yN,t)′ be an N -dimensional observable panel of time series at time t, where we
assume all the data are centered with zero mean. Thus, yt replaces (rt − μ0) in Model (1), and
the factors {ft}, for t = 1, ..., T , are assumed to have zero mean. Based on the SAPT model in
Section 2.3, we assume that yt follows the following general structure:
yt = D(ρ)Wyt + Bft + εt, t = 1, ..., T, (6)
where ft is a K-dimensional factor process that is either observable or unobservable, B is the
loading matrix associated with the factors, W is the N × N spatial weight matrix that measures
the dependence among different economic units or individuals of yt. D(ρ) = diag(ρ1, ..., ρN ),
where ρj is an unknown coefficient parameter for the j-th individual. εt is a white noise term that
is uncorrelated with ft, but we allow for dependence between ft+j and εt, for j ≥ 1, since the factors
ft’s are usually serially dependent, which may be correlated with some lagged noise terms.
It is a common practice in spatial econometrics to assume that W is known, and the main
diagonal elements of W are zero. The weights may be based on physical distance, social networks,
9

or “economic” distance, as seen in Case et al. (1993). For example, we may take wij := (sidij)−1,
for i ̸= j, and wii = 0, where dij is the physical distance between location i and location j, and
si := ∑
j d−1
ij . Alternatively, we may take d−1
ij as the sample correlation between the i-th and j-th
economic units when there is no clear physical distance between them. When ρ1 = ... = ρN , the
spatial interaction term in Model (6) reduces to the classical setting in the spatial econometrics
literature, such as Lee (2004), among others.
For a given spatial weight matrix W = (w1, . . . , wN )′, where wi is the i-th row vector of W,
our goal is to estimate the unknown coefficients in ρ and B when the factors ft’s are observable.
When the factors ft’s are latent, we also need to recover the latent factors.
3.2 Shrinkage Yule-Walker Estimation with Observed Factors
In this section, we study the scenario when the factors are observed and propose a generalized
shrinkage Yule-Walker method to estimate the unknown coefficients, which is essentially a com
bination of ridge regression and the method-of-moments. To this end, we begin with some useful
notation. Define Σyf (k) = Cov(yt, ft−k) as the covariance matrix between yt and the past lagged
factor variables ft−k, and Σf (k) = Cov(ft, ft−k) as the lag-k auto-covariance matrix of ft, for k ≥ 0.
Then, Model (6) implies that
Σyf (k) = D(ρ)WΣyf (k) + BΣf (k), k ≥ 0. (7)
Let ei be the ith unit vector with the ith element equal to 1 and other elements being zero. For
each k ≥ 0, it follows from (7) that
e′
iΣyf (k) = e′
iD(ρ)WΣyf (k) + e′
iBΣf (k), i = 1, ..., N. (8)
Note that e′iD(ρ)W = ρiw′i and e′iB = b′i, where wi and bi are the ith row vectors of W and B,
respectively. Then, (8) becomes
Σ′
yf (k)ei = Σ′
yf (k)wiρi + Σ′
f (k)bi, i = 1, ..., N. (9)
In practice, given the sample data {(yt, ft) : t = 1, ..., T }, by a similar argument to the Yule-Walker
estimation method with a given lag k ≥ 0, we may solve the following minimization problem:
(
̂ρi, ̂b′
i)′ = arg min
ρ∈R,b∈Rr{∥ ̂Σ′
yf (k)ei − ̂Σ′
yf (k)wiρ − ̂Σ′
f (k)b∥2
2}, i = 1, ..., N, (10)
where
̂Σyf (k) = 1
T
T
∑
t=k+1
ytft−k and ̂Σf (k) = 1
T
T
∑
t=k+1
ftf ′
t−k
are the sample versions of Σyf (k) and Σf (k), respectively. For each i, we observe that there are
K + 1 unknown coefficients in the optimization problem (10), but there are only K equations for
10

each lag k in (10), which implies that the optimization problem is not well-defined if we only make
use of a single k in the Yule-Walker estimation. To see this, we cast problem (10) into the framework
of the generalized method of moments (GMM) (Hansen (1982)). Let ft−k be the instrument, the
moment conditions for (6) are
Eht,k(ρi, bi) = 0, where ht,k(ρi, bi) = (yi,t − ρiw′
iyt − b′
ift)f ′
t−k, i = 1, ..., N,
which is equivalent to that in (9) for each k. When k = 0, it is not hard to see that
ht,0(ρi, bi) = ∂εi,t(ρi, bi)
∂bi
,
where εi,t(ρi, bi) = (yi,t − ρiw′iyt − b′ift)2. Therefore, the equations produced by only taking partial
derivatives concerning parameter bi are not sufficient to estimate ρi and bi simultaneously. Then
we conclude that estimation equations in (10) are not sufficient for any given k ≥ 0.
To address this challenge, we combine two sets of estimating equations, resulting in 2K equa
tions, which exceed the number of parameters by K + 1 when K ≥ 1. We first note the importance
of cross-sectional dependence in asset returns and economic data, so we retain the k = 0 equations,
which align with GMM using ft as instruments and the Least-Squares method. Additionally, since
short-term dependence is more significant than long-term in economic and financial data, we focus
on Equation (10) with k = 0 and k = 1. These lags capture the key dynamic information, reflecting
the most relevant dependencies while excluding less impactful higher lags.
Specifically, let
̂Yi =
(
̂Σ′
yf ei
̂Σ′
yf (1)ei
)
and ̂Xi =
(
̂Σ′
yf wi ̂Σf
̂Σ′
yf (1)wi ̂Σ′
f (1)
)
,
where ̂Σyf = ̂Σyf (0) and ̂Σf = ̂Σf (0). Due to the spatial nature of Model (6), ̂Xi is asymptotically
singular, though not in finite samples. To address this, we apply ridge regression. Define β =
(
̂ρ, b′)′ ∈ RK+1 and solve the following optimization problem for a given λi > 0:
̂βi(λi) = (̂ρi, ̂b′
i)′ = arg min
ρ∈R,b∈RK {∥ ̂Yi − ̂Xiβ∥2
2 + λi∥β∥2
2}, i = 1, ..., N. (11)
The estimator has the explicit form:
̂βi(λi) = ( ̂X′
i
̂Xi + λiIK+1)−1 ̂X′
i
̂Yi, i = 1, ..., N, (12)
which is the ridge estimator. In the subsequent analysis, we denote ( ̂X′i ̂Xi)+ as the Moore-Penrose
generalized inverse and let ̂βi = ̂βi(0) as λi → 0. Theorem 3 establishes the joint asymptotic
distribution under these conditions, enabling joint inference. In finite samples, the estimator de
pends on the number of lagged auto-covariances used in the Yule-Walker estimation in (10), but
its asymptotic convergence remains valid, as demonstrated in Section 4.
11

3.3 Boosting the Strength of Factor Instruments
In practice, we stack only the cases when k = 0 and k = 1 as discussed in Section 3.2. This approach
provides a jointly consistent estimator and avoids unnecessary errors in the generalized method of
moments estimation. The choice of k = 1 is based on the assumption that short-term dependence
is often more relevant than long-term dependence. If necessary, we can define a measure to select
the optimal lag k∗ as follows:
k∗ = arg max
1≤k≤k ̄
| det( ̂Σf (k))|,
where k ̄ is a small positive integer, and | det( ̂Σf (k))| is the product of the singular values of
̂Σf (k). This measure captures the correlation strength between the lagged instruments and the
contemporaneous factors. We then define
̂Yi,∗ =
(
̂Σ′
yf ei
̂Σ′
yf (k∗)ei
)
and ̂Xi,∗ =
(
̂Σ′
yf wi ̂Σf
̂Σ′
yf (k∗)wi ̂Σ′
f (k∗)
)
,
and substitute them into (11), yielding the refined estimator
̂βi,∗(λi) = ( ̂X′
i,∗ ̂Xi,∗ + λiIK+1)−1 ̂X′
i,∗ ̂Yi,∗, i = 1, ..., N. (13)
3.4 Estimation When Factors Are Latent
In this section, we address the case where the factor processes ft are unobservable. We focus on
latent factors that represent the internal dynamics driving the data yt, because the case with factors
arising from some external data sources is similar to the diffusion-index framework in Stock and
Watson (2002) and Gao and Tsay (2024). The estimation of the proposed model becomes more
complex because, in addition to estimating the parameters in ρ and B, we must also recover the
unknown factors. Note that
yt = (IN − D(ρ)W)−1Bft + (IN − D(ρ)W)−1εt = Λft + ξt, (14)
where Λ = (IN − D(ρ)W)−1B and ξt = (IN − D(ρ)W)−1εt are the loading matrix associated with
the factor process ft and the idiosyncratic term, respectively. Symbolically, (14) is a factor model
with unknown factors and loading matrix, both of which need to be estimated from the data yt,
for t = 1, ..., T .
Under the framework of Model (14), we have a factor model with static factors and could use
either the PCA method of Bai and Ng (2002) to estimate cross-sectional factors or the eigen
analysis method in Lam and Yao (2012) to extract dynamically dependent factors. However, the
PCA method is not suitable for the spatial interactions in Model (14), as the idiosyncratic noise
recovered by PCA is often serially correlated. In contrast, the noise term εt (or ξt) in the spatial
model is white noise, which contradicts the PCA framework.
For spatial panel dynamic models in econometrics, the noise term εt (or ξt) is white with zero
12

serial correlation, while the dynamically dependent factors ft capture all the dynamic information
of the data yt. This framework aligns with Lam et al. (2011), Lam and Yao (2012), and Gao and
Tsay (2022), among others. Based on the auto-covariance-based eigenanalysis in Lam et al. (2011),
we propose a two-step procedure to estimate the factors and other unknown coefficients, assuming
the number of factors K is known. The method for determining K will be discussed later.
Note that Λ and ft are not uniquely determined in (14) and they require certain identification
conditions. For simplicity, we assume that Λ is a semi-orthogonal matrix scaled by √N such that
Λ′Λ/N = IK. However, the loading and factors are still not uniquely identified because we can
replace (Λ, ft) with (ΛH, H′ft) for any orthonormal matrix H ∈ RK×K. Nevertheless, the linear
space spanned by the columns of Λ, denoted M(Λ), is uniquely defined and referred to as the
factor loading space.
Under the assumption that εt is a white noise process and Cov(ft, εt+j) = 0, for j ≥ 0, we allow
for the possibility that ft may depend on the past lagged noises εt−k, for some k ≥ 1, as ft is a
dynamically dependent process. For any integer k ≥ 1, define the following covariance matrices of
interest:
Σy(k) = Cov(yt, yt−k), Σf (k) = Cov(ft, ft−k), and Σfξ(k) = Cov(ft, ξt−k).
From (14), we have
Σy(k) = ΛΣf (k)Λ′ + ΛΣfξ(k), k ≥ 1. (15)
For a pre-specified integer k0 > 0, define
M=
k0
∑
k=1
Σy (k)Σ′
y(k) = Λ
k0
∑
k=1
[Σf (k)Λ′ + Σfξ(k)][ΛΣ′
f (k) + Σ′
fξ(k)]Λ′, (16)
which is an N ×N semi-positive definite matrix. Let Λc denote the orthogonal complement matrix of
Λ. We observe that MΛc = 0, implying that the columns of Λc are the eigenvectors corresponding
to the zero eigenvalues of M. The factor loading space M(Λ) is thus spanned by the eigenvectors
(scaled by √N ) corresponding to the K non-zero eigenvalues of M. The integer k0 in (16) is a
prescribed value that allows us to accumulate dynamic information across different lags. Since the
dynamic dependence between yt and yt−k typically decreases as k increases for stationary processes,
a small k0 is generally sufficient in practice. For further details on the rationale for using (16) to
estimate the loading space from a projection perspective, we refer readers to Gao and Tsay (2021).
In practice, given the sample data {yt | t = 0, 1, . . . , T }, the first step of the procedure is to
estimate the loading matrix Λ or its column space M(Λ), and to recover the factor process ft,
assuming that the number of factors K is known. The estimation of K will be discussed later. Let
̂Σy(k) denote the lag-k sample autocovariance matrix of yt, defined similarly to those in (10). To
13

estimate M(Λ), we perform an eigen-analysis of the sample version of M, defined as
̂M =
k0
∑
k=1
̂Σy(k) ̂Σ′
y(k). (17)
Let ̂Λ be the standardized semi-orthogonal matrix consisting of the eigenvectors of ̂M, scaled by
√N , as its columns. The recovered factor processes are denoted as ̂ft = 1
N
̂Λ′yt, which can be
obtained by the Ordinary Least Squares (OLS) method.
In the second step, we estimate the scalar coefficient vector ρ and the loading matrix B in
Model (6). Let ̂f1, . . . , ̂fT denote the estimated factors obtained in the first step. Define the
following quantities:
Σ ̃ yf (k) = 1
T
T
∑
t=k+1
yt̂f ′
t−k, Σ ̃ f (k) =
T
∑
t=k+1
̂ft̂f ′
t−k, and Σ ̃ εf (k) = 1
T
T
∑
t=k+1
εt̂f ′
t−k ,
and Σ ̃ yf = Σ ̃ yf (0), Σ ̃ f = Σ ̃ f (0), and Σ ̃ εf = Σ ̃ εf (0). Following a similar procedure to the shrinkage
Yule-Walker estimation in Section 3.2, where the factors are observable, we formulate the following
optimization problem for the case of augmenting only k = 0 and k = 1, with a given λi > 0:
β ̃ i(λi) = (ρ ̃i, b ̃′
i)′ = arg min
ρ∈R,b∈Rr{∥Y ̃ i −  ̃Xiβ∥2
2 + λi∥β∥2
2}, i = 1, ..., N, (18)
where
Y ̃ i =
(
Σ ̃ ′
yf ei
Σ ̃ ′
yf (1)ei
)
and  ̃Xi =
(
Σ ̃ ′
yf wi Σ ̃ ′
f
Σ ̃ ′
yf (1)wi Σ ̃ ′
f (1)
)
represent the response variables and covariates, respectively. The Yule-Walker estimation in (18)
then yields the least squares (LS) estimator for β as
β ̃ i(λi) = (  ̃X′
i
X ̃ i + λiIK+1)−1X ̃ ′
i
Y ̃ i, i = 1, ..., N. (19)
Thus, we perform N Yule-Walker estimation procedures, for i = 1, . . . , N and obtain the estimators
ρ ̃ = (ρ ̃1, . . . , ρ ̃N )′ and  ̃B = ( ̃b1, . . . , b ̃N )′. We can similarly define β ̃i = β ̃i(0) by adopting the
Moore-Penrose inverse of X ̃ ′iX ̃ i as in (12). Theorem 6 in Section 4 establishes the joint asymptotic
distribution, which can be utilized for joint inference under this condition.
In practice, we may also use the boosting method described in Section 3.3 to select the optimal
lag k∗. We can then replace Σ ̃ yf (1) and Σ ̃ f (1) with Σ ̃ yf (k∗) and Σ ̃ f (k∗), respectively, in Y ̃ i and
X ̃ i. The estimator β ̃i,∗(λi) can be obtained in the same manner as that described in Section 3.3.
3.5 Selecting the Number of Factors and the Penalty Parameters
In this section, we discuss the determination of the number of factors K in Model (14), which is
typically unknown in practice. Over the past decades, several methods have been developed to
14

estimate K, including the information criteria proposed by Bai and Ng (2002), the random matrix
theory approach in Onatski (2010), the ratio-based method in Lam and Yao (2012) and Ahn and
Horenstein (2013), the canonical correlation analysis technique in Gao and Tsay (2019), and the
white noise testing approach in Gao and Tsay (2022), among others. In this paper, we introduce
two widely used methods for estimating K.
The first method is an information criterion introduced by Bai and Ng (2002). It estimates K
by
̂K = arg min
0≤j≤J log( 1
NT
T
∑
t=1
∥yt − 1
N
̂Λj ̂Λ′
j yt∥2
2) + jg(T, N ), (20)
where J is a prescribed upper bound, ̂Λj is a N × j estimated loading matrix, and g(T, N ) is a
penalty function of (N, T ) such that g(T, N ) = o(1) and min{N, T }g(T, N ) → ∞. Two examples
of g(T, N ) suggested by Bai and Ng (2002) are IC1 and IC2 given below:
IC1 = N + T
N T log( N T
N + T ) and IC2 = N + T
N T log(min{N, T }).
For the estimation of K, in addition to the information criterion in (20), we can adopt the ratio
based method proposed in Lam and Yao (2012) and Ahn and Horenstein (2013). Let ̂μ1 ≥ · · · ≥ ̂μN
be the N eigenvalues of ̂M. We estimate K by
̂K = arg min
1≤l≤R ̂μl+1/̂μl, (21)
where R = ⌊N/2⌋ is commonly used, as suggested by Lam and Yao (2012).
For the selection of the penalty parameter λi, it is common to assume that λi ∈ S, where S is
a candidate set consisting of possible penalty choices. We split the data sample into two segments,
y1, . . . , yT1 and yT1+1, . . . , yT . Suppose ̂ρi(λ) and ̂bi(λ) are the estimators obtained from the first
segment. The optimal λ is chosen by solving
̂λi = argminλ∈S
1
T − T1
T
∑
t=T1+1
∥yi,t − ̂ρi(λ)w′
iyt − ̂bi(λ)ft∥2
2. (22)
When the factors are unobservable, we replace ft with ̂ft, which is estimated from the second
segment using the estimator ̂Λ(λ) obtained from the first segment.
4 Theoretical Properties
In this section, we present the asymptotic theory for the estimation method of Section 3, when
both the dimension N and the sample size T tend to infinity. We focus on the estimating equations
with lags k = 0 and k = 1, which typically capture the majority of the cross-sectional and dynamic
dependencies in the data. A constant C is used generically, with its value potentially varying across
different parts of the analysis. We begin with some assumptions.
15

Assumption 1. The process {(yt, ft)} is strictly stationary and α-mixing with the mixing coefficient
satisfying the condition ∑∞
k=1 αN (k)1−2/γ < ∞ for some γ > 2, where
αN (k) = sup
i
sup
A∈F i
−∞,B∈F ∞
i+k
|P (A ∩ B) − P (A)P (B)|,
and F j
i is the σ-field generated by {(yt, ft) : i ≤ t ≤ j}.
Assumption 2. The spatial weight matrix W is known with zero main diagonal elements, and the
matrix SN (ρ) := IN − D(ρ)W is invertible. The row and column sums of |W| and |SN (ρ)−1| are
bounded uniformly in N .
Assumption 3. {εt} is a white noise process satisfying Cov(yt−j, εt) = 0 and Cov(ft−k, εt) = 0,
for j ≥ 1 and k ≥ 0, respectively.
Assumption 4. (i) If ft’s are observed, each element in B are bounded uniformly in N ; (ii) If ft’s
are latent, the loading matrix B is of full rank such that 1
N B′S′
N (ρ)−1SN (ρ)−1B = Ir, which is an
identity matrix.
Assumption 5. For 1 ≤ j ≤ K and 1 ≤ k ≤ N , E|fj,t|2γ < C and E|εk,t|2γ < C, where γ is given
in Assumption 1.
Assumption 6. For i = 1, ..., N , the rank of matrix X′iXi + λIK+1 is K + 1, for any λ > 0, where
Xi =
( Σ′
yf wi Σ′
f Σ′
yf (1)wi Σ′
f (1)
)
.
Assumption 1 is standard for dependent random processes. See Gao et al. (2019) for a theoreti
cal justification for VAR models. In fact, the assumption of strict stationarity can be removed
and we only need to replace definitions of Σy(k) and Σf (k) with 1
T
∑T
t=k+1 Cov(yt, ft−k) and
1 T
∑T
t=k+1 Cov(ft, ft−k), respectively, and the results still hold throughout the paper. Assumption
2 is commonly used in the spatial econometrics literature to limit the dependence across different
locations or economic units; see, for example, Lee and Yu (2010). Assumption 3 is weaker than
the independence assumptions imposed in the spatial econometrics literature and we also allow for
possible dependence between yt+j and ft+k and past lagged of noises, for j ≥ 0 and k ≥ 1. Assump
tion 4 is standard for the loading matrix under the scenarios when the factors are either observed
or latent. Assumption 5 imposes some moment conditions on the factors and noise terms. It is
not hard to see that E|yi,t|2γ < C under Assumptions 2, 4 and 5. Furthermore, this also implies
that E|w′iΣyf ft|2γ < C, E|w′iΣyf (1)ft−1|2γ < C, E∥Σf ft∥2γ
2 < C, and E∥Σf (1)ft−1∥2γ
2 < C, which
are used to establish the convergence of the variance of SN,T , as defined in (IA.5) of the online
Appendix. Assumption 6 ensures that the ridge solutions in (12) and (19) are well-defined.
Now, we present the asymptotic properties of ̂βi, for i = 1, . . . , N .
16

Theorem 2. Let Assumptions 1 − 6 hold.
(i) If N = o(T ), we have
∥
̂βi(λi) − ̂Xi(λi)−1 ̂Xi ̂X′
iβi∥2 = Op(T −1/2), i = 1, ..., N,
as N, T → ∞, where ̂Xi(λi) = ̂X′i ̂Xi + λiIK+1.
(ii) If N = o(T ) and let λi → 0, we have
∥( ̂X′
i
̂Xi)( ̂βi − βi)∥2 = Op(T −1/2), i = 1, ..., N,
as N, T → ∞.
Theorem 2 implies that the ridge estimator for β is biased, which is a common issue in ridge
estimation. However, we can establish the joint convergence of ̂ρi and bi, as stated in Theorem 2(ii).
Since ρi and bi represent loadings for all possible factors, this result is useful because these coeffi
cients can be jointly estimated and inferred in many economic contexts, such as financial networks,
as described in Wang and Shojaie (2021).
Next, we provide the joint limiting distributions of the shrinkage estimators. For i = 1, ..., N ,
define
Σfεi (0, 0) = Cov(ftεi,t, ftεi,t), Σfεi (1, 0) = Cov(ftεi,t, ft−1εi,t), Ωfεi (0, 0) = Cov(ft−1εi,t, ft−1εi,t),
Σfεi (k, j) = Cov(ft+j εi,t+j , ft−kεi,t) + Cov(ftεi,t, ft−k+j εi,t+j ), j ≥ 1, k ≥ 0,
Ωfεi (0, j) = Cov(ft−1+j εi,t+j , ft−1εi,t) + Cov(ft−1εi,t, ft−1+j εi,t+j ), j ≥ 1,
Σfεi (0) =
∞
∑
j=0
Σfεi (0, j), Σfεi (1) =
∞
∑
j=0
Σfεi (1, j), Ωfεi (0) =
∞
∑
j=0
Ωfεi (0, j).
Let
Vi =
( w′iΣyf Σ′
yf wi + w′iΣyf (1)Σ′
yf (1)wi w′iΣyf Σf + w′iΣyf (1)Σ′
f (1)
Σf Σ′
yf wi + Σf (1)Σ′
yf (1)wi Σ2
f + Σf (1)Σ′
f (1)
)
(23)
and
Ui =
( Σfεi (0) Σfεi (1)
Σ′
fεi (1) Ωfεi (0)
)
. (24)
The following theorem establishes the joint asymptotic normality of the estimators.
Theorem 3. Let Assumptions 1 − 6 hold. If N = o(T ) and λi → 0, we have
√
T Vi( ̂βi − βi) −→d N (0, X′
iUiXi),
for i = 1, ..., N as N, T → ∞, where Ui and Vi are defined in (24) and (23), respectively.
From Theorem 3, we see that the Yule-Walker estimators obtained in (12) are asymptotically
normal when the dimension N diverges. The convergence rate is the standard √T under the
17

assumption that N/T → 0, which is a similar requirement in spatial panel dynamic models; see Yu
et al. (2008), among others. The condition N/T → 0 is weaker than the one in Gao et al. (2019),
where N/√T → 0 is required, because we assume the dimension of ft is K, a finite integer. The
convergence of ̂Σyf (k) to Σyf (k) only requires N/T → 0, whereas the convergence of ̂Σy(k) =
1 T
∑T
t=k+1 yty′
t−k to its population version requires N/√T → 0 as stated in Gao et al. (2019). By
the form of Xi in Assumption 6, we can show that
X′
iUiXi =
( Σi,11 Σi,12
Σi,21 Σi,22
)
, (25)
where
Σi,11 =w′
iΣyf Σfεi (0)Σ′
yf wi + w′
iΣyf Σfεi (1)Σ′
yf (1)wi + w′
iΣyf (1)Σ′
fεi (1)Σ′
yf wi
+ w′
iΣyf (1)Ωfεi (0)Σ′
yf (1)wi,
Σi,22 =Σf Σfεi (0)Σf + Σf Σfεi (1)Σ′
f (1) + Σf (1)Σ′
fεi (1)Σf + Σf (1)Ωfεi (0)Σ′
f (1),
Σi,12 =w′
iΣyf Σfεi (0)Σf + w′
iΣyf Σfεi (1)Σ′
f (1) + w′
iΣyf (1)Σ′
fεi (1)Σf
+ w′
iΣyf (1)Ωfεi (0)Σ′
f (1),
and Σi,21 = Σ′
i,12. These matries can all be estimated from the data.
Finally, we turn to the case when the factors are latent. We need to make two more assumptions
to establish the uniform convergence and the limiting distributions of the estimated factors.
Assumption 7. ft and εt are sub-exponentially distributed in the sense that
P (|v′
1ft| > x) ≤ C exp(−Cx), and P (|v′
2εt| > x) ≤ C exp(−Cx),
for any x > 0, where ∥v1∥2 = 1 and ∥v2∥2 = 1 are any two constant vectors.
Assumption 8. For each t = 1, ..., T , as N → ∞,
√1N
N
∑
i=1
piεi,t −→d N (0, Γt),
where pi is the ith column of Λ′(IN − D(ρ)W)−1, and Γt = limN→∞ 1
N
∑N
i=1
∑N
j=1 pip′j E(εi,tεj,t)
in probability.
Assumption 7 is commonly used in the statistical and econometrics literature to establish uni
form convergence. The sub-exponential distribution is a broader class of distributions than the
sub-Gaussian distribution and includes the uniform distribution over every convex body, following
18

the Brunn-Minkowski inequality. For further details, see, for example, Vershynin (2018). As
sumption 8 is similar to Assumption F(3) in Bai (2003), which is used to establish the limiting
distribution of the estimated factors.
We first state the convergence of the estimated loading matrix below, where we introduce a
rotational matrix HNT in the proof of the following theorem. This approach differs from the
techniques used in Lam et al. (2011).
Theorem 4. Let Assumptions 1 − 6 hold. If N = o(T ), then there exists an invertible matrix
HNT such that √1N ∥ ̂Λ − ΛH′
NT ∥F = Op( √1T ).
Remark 1. (i) Unlike the proof in Lam et al. (2011) where a matrix perturbation theory is used to
show the convergence of the estimated loading matrix, we developed a new approach in the Appendix
to show the convergence rate of ̂Λ. One of the advantages of the new approach is that we can specify
the rotational matrix HNT which is defined as
H′
NT =
k0
∑
k=1
G1,k G′
1,kΛ′ ̂Λ ̂V−1
NT , where G1,k = 1
T
T
∑
t=k+1
(ftf ′
t−kΛ′ + ftξ′
t−k ),
and ̂VNT ∈ Rr is a diagonal matrix with diagonal elements being the top K eigenvalues of ̂M. See
the proof of Theorem 4 in the online Appendix for details.
(ii) Note that we impose that Λ′Λ/N = Ir, whereas Lam et al. (2011) assumes that Λ′Λ = Ir.
Therefore, the convergence rate is the same as the one in Theorem 1 of Lam et al. (2011), where
we assume δ = 0 in our paper, corresponding to the case of strong factors.
Next, we establish the uniform convergence of the estimated factors and the corresponding
limiting distributions.
Theorem 5. Let Assumptions 1 − 6 hold.
(i) If εt and ft are sub-exponentially distributed as in Assumption 7, then there exists an invertible
matrix KNT ∈ Rr such that
max
1≤t≤T ∥̂ft − KNT ft∥2 = Op{( √1N + √1T ) log(T )}.
(ii) Let Assumption 8 also hold. If N = o(T ), then there exists an invertible matrix KNT ∈ Rr and
its limit H ∈ Rr such that
√
N (̂ft − KNT ft) = H √1N
N
∑
i=1
piεi,t + op(1) −→d N (0, HΓtH′),
where pi is the ith column of Λ′(IN − D(ρ)W)−1, H is the limit of HNT as shown in Lemma 2 of
the online Appendix, and Γt is defined as in Assumption 8.
19

Remark 2. (I) A remarkable feature in Theorem 5 is that we only require N/T → 0, and the
asymptotic normality of ft can still be achieved.
(ii) Note that we adopt the matrix KNT as a rotational matrix for ft, which is defined as
KNT = 1
N
̂Λ′Λ.
See the proof of Theorem 5 in the Appendix. In fact, according to Lemma 1 of the Appendix, we
may replace KNT by HNT , and the results in Theorem 5 still hold. This can be shown by rewriting
the term 1
N
̂Λ′Λft in (IA.16) as
1
N ( ̂Λ − ΛH′
NT )′Λft + HNT ft,
where the first term is still asymptotically negligible. However, we do not adopt this formula since
it will introduce a bias term in establishing the limiting distributions of the ̂ft. Nevertheless, it is
not hard to show that KNT and HNT have the same limit as N, T → ∞.
Furthermore, we study the limiting distributions of the estimated parameters in (19). Similar to
the case when the factors are observable, we provide some notation used in the following Theorem.
Let
VH
i=
( w′iΣyf Σ′
yf wi + w′iΣyf (1)Σ′
yf (1)wi w′iΣyf Σf H′ + w′iΣyf (1)Σ′
f (1)H′
HΣf Σ′
yf wi + HΣf (1)Σ′
yf (1)wi HΣ2
f H′ + HΣf (1)Σ′
f (1)H′
)
(26)
and
UH
i=
( HΣfεi (0)H′ HΣfεi (1)H′
HΣ′
fεi (1)H′ HΩfεi (0)H′
)
. (27)
The following theorem establishes the asymptotic normality of the estimators in (19) when the
factors are latent and the dimension N is diverging.
Theorem 6. Let Assumptions 1 − 8 hold.
(i) If N = o(T ) and √T = o(N ), then there exists an invertible matrix KNT ∈ Rr such that
β ̃ i(λi) −  ̃Xi(λi)−1X ̃ ′
i
 ̃XiK∗
NT βi = Op(T −1/2),
where X ̃ i(λi) = X ̃ ′iX ̃ i + λiIK+1.
(ii) If N = o(T ) and √T = o(N ), let λi → 0, there exists an invertible matrix KNT ∈ Rr such that
√
T VH
i (β ̃ i − K∗
NT βi) −→d N (0, XH
i
′UH
i XH
i ),
for i = 1, ..., N as T → ∞, where K∗
NT = diag(1, (K′
NT )−1) is a block-diagonal matrix, and UiH
20

and ViH are defined in (27) and (26), respectively, and
XH
i=
( HΣ′
yf wi HΣf H′
HΣ′
yf (1)wi HΣ′
f (1)H′
)
.
Remark 3. (i) From Theorem 6, we see that the convergence rate is still the standard √T , which
is the same as that in Theorem 3 when the factors are observable. On the other hand, we note that
the scalar coefficient can be uniquely determined, but the coefficient vector bi can be estimated up to
a rotational matrix KNT , which is reasonable due to the identification issue in the factor analysis.
(ii) Recall that this is a two-step procedure. The statistical inference is usually difficult to establish
in the second step because the errors incurred in the first step sometimes create a biased term. As
discussed in Remark 2(ii), we adopt a rotational matrix KNT instead of HNT in Theorems 5 and 6
such that the bias term can be erased, although KNT and HNT have the same limit. See the proof
of Theorem 6 in the online Appendix for details.
It can be easily shown that the variance term in Theorem 6(ii) can be expressed as
XH
i
′UH
i XH
i=
( ΣH
i,11 ΣH
i,12 ΣH
i,21 ΣH
i,22
)
,
where
ΣH
i,11 =w′
iΣyf Σfεi (0)Σ′
yf wi + w′
iΣyf Σfεi (1)Σ′
yf (1)wi + w′
iΣyf (1)Σ′
fεi (1)Σ′
yf wi
+ w′
iΣyf (1)Ωfεi (0)Σ′
yf (1)wi,
ΣH
i,22 =HΣf Σfεi (0)Σf H′ + HΣf Σfεi (1)Σ′
f (1)H′ + HΣf (1)Σ′
fεi (1)Σf H′ + HΣf (1)Ωfεi (0)Σ′
f (1)H′,
ΣH
i,12 =w′
iΣyf Σfεi (0)Σf H′ + w′
iΣyf Σfεi (1)Σ′
f (1)H′ + w′
iΣyf (1)Σ′
fεi (1)Σf H′
+ w′
iΣyf (1)Ωfεi (0)Σ′
f (1)H′,
and ΣH
i,21 = ΣH
i,12′.
The consistency of the estimated number of factors using the information criterion in (20) or
the ratio-based method in (21) can be established by a standard argument as that in Bai and Ng
(2002) or Ahn and Horenstein (2013). We omit the details.
Remark 4. In the estimation procedure above, we primarily focus on the augmented method by
stacking factor lags for k = 0 and k = 1. In fact, ridge regression can be applied by taking any
finite number of lagged factors in the Yule-Walker estimation. The theory can be established in a
similar way.
21

Remark 5. The QMLE method proposed in Aquaro et al. (2021) and Hu et al. (2023) can yield
pointwise consistent estimators but is feasible only when the dimension N is small and fixed. Ad
ditionally, they only focus on cases when the factors are observable. As N increases, additional
bias can arise, and the asymptotic results do not hold anymore (see Remarks 6–7 in Aquaro et al.
(2021)). Moreover, the computational cost of the QMLE method becomes prohibitive for large N .
In contrast, the proposed generalized Yule-Walker method is designed to handle scenarios with large
or diverging N while remaining computationally efficient. Simulations and real data analyses in
Sections 5-6 show that the proposed method can even outperform the QML approach, achieving
smaller out-of-sample forecasting errors.
5 Simulation Studies
In this section, we use Monte Carlo simulations to evaluate the performance of the proposed method
ology across a spectrum of finite samples.
Consider the model in Section 3 with common factors generated from a VAR(1) process ft =
Φft−1 + ηt. Here, Φ is a diagonal matrix, with entries independently sampled from a uniform
distribution U (0.5, 0.9) and the error term ηt ∼ N (0, IK). For each realization of yt, the elements
of the loading matrix B are independently drawn from U (−2, 2), and the idiosyncratic error term εt
is generated from N (0, IN ). The spatial ρ is sampled independently from a power-law distribution
with an exponent α = 5. To construct the spatial matrices, the q neighboring off-diagonal elements
are set to 1 and the diagonal elements are 0, followed by row normalization to ensure each row sums
to 1. We set q = 3 and the true number of factors K = 3, with dimension N = 25, 50, 100, 200, and
sample size T = 50, 100, 200, 400, 1000. We use 1000 replications for each configuration of (T, N ).
To make the results below replicable, the seed is set to be 1234 in the R programming.
We first examine the joint convergence properties of ̂βi established in Theorem 2. To evaluate
its overall estimation accuracy, we use the root-mean-square error (RMSE), defined as
RMSE
̂β =

 
 
(1
N
∑N
i=1 ∥( ̂X′i ̂Xi)( ̂βi − βi)∥22
)1/2 , if λi → 0
(1
N
∑N
i=1 ∥ ̂βi(λi) − ̂Xi(λi)−1 ̂Xi ̂X′iβi∥22
)1/2 , otherwise.
(28)
Here, λi is the ridge penalty parameter applied to the Yule-Walker equations for each sample. We
examine two cases: a relatively large λi = 10−3 and a much smaller λi = 10−9. When λi → 0 (e.g.,
λi = 10−9), the estimator closely resembles that of the ordinary least squares (OLS) estimation,
but we set λi = 10−9 to avoid singularity of ( ̂X′i ̂Xi). Figure 2(a) and (b) present the boxplots of the
RMSEs of ̂β(λi)’s (denoted by RMSE
̂β) and ̂ρi(λi)’s (denoted by RMSE
ρ ̂ ), respectively, computed
using the second formula in (28). From Figure 2, we see that the RMSE
̂β and RMSE
ρ ̂ decrease
as the sample size T increases, which is in agreement with the theoretical results in Theorem 2.
Similar patterns can also be found in Figure 3 for λ → 0 using the RMSE defined in the first line
of (28).
22

Figure 2: Boxplots of estimator convergence for Eq (11) with a fixed large ridge penalty parameter (λi = 10−3), where N and T denote the dimension and sample size, respectively. (a) shows the joint estimation performance of ̂βi measured by RMSE
̂β, and (b) shows the
estimation performance of the spatial parameter ̂ρ measured by RMSE
ρ̂ .
Table 1: Coverage rates for Vi(̂βi − βi) across different significance levels.
Significance Coverage
0.1 0.801(0.013) 0.852(0.011) 0.941(0.007) 0.966(0.006) 0.989(0.003) 0.998(0.001)
0.05 0.842(0.012) 0.891(0.010) 0.957(0.006) 0.983(0.004) 0.997(0.002) 1.000(0.000)
0.01 0.898(0.010) 0.935(0.008) 0.980(0.004) 0.993(0.003) 0.998(0.001) 1.000(0.000)
T 250 500 1000 2000 3000 5000
Note: This table shows the coverage rate of the first component of V1(̂β1 − β1) within the confidence intervals from the theoretical distribution in Theorem 3. The theoretical distribution has a zero mean and a variance equal to the first diagonal element of X′1U1X1. T is the sample size. The results are based on 1000 iterations with a cross-sectional dimension N = 25.
To assess the distributional properties of the estimates in Theorem 3, we present histograms of
the first component of ̂Vi(̂βi − βi), for i = 1, 3, 5, 7 and 9 in Figure 4, along with their theoretical
density curves computed from the limiting distribution in Theorem 3, where ̂Vi is the sample
estimator for Vi defined in Eq (23). The histograms and their corresponding QQ-plots in Figure 4
suggest that the entries of ̂Vi(̂βi − βi) asymptotically follow a normal distribution, which aligns
with our theoretical results. Furthermore, in Table 1, we evaluate the asymptotic properties by
reporting the coverage rates of the estimators in Eq (11) under varying significance levels and
sample sizes T . As T increases, the coverage rates exhibit a clear improvement, consistent with the
theoretical results in Theorem 3.
As a shrinkage-based approach, it is interesting to directly assess the estimation accuracy of βi.
23

Figure 3: Boxplots of the joint convergence error for model (11) with λ = 0. The statistics are defined in Figure 2, based on the first line of (28). .
Figure 4: Histograms of the five spatial coefficient estimates and their corresponding empirical and theoretical distribution plots for Eq (11).The histograms show the distribution of the first component of Vi(̂βi − βi) over 1000 iterations, under the setting of N = 25 and T = 1500. The superimposed normal curve represents the theoretical distribution from Theorem 3, with mean 0 and variance given by the first diagonal element of X′iUiXi. Here, i = 1, 3, 5, 7, 9 correspond to the 1st, 3rd, 5th, 7t-
h, and 9th component in a dataset of dimension N = 25.
We define the coefficient error (CE) as
CE
̂β =
(1
N
N
∑
i=1
∥( ̂βi(λi) − βi)∥2
2
)1/2
, (29)
which measures the deviation of ̂βi from the true parameter βi, thereby capturing the overall
24

estimation error. Table 2 reports the coefficient error for the ridge regression estimates ̂βi(λi)
when factors are observed. The results indicate that ridge regression (λi = 10−3) yields lower error
and variance compared to OLS (λi = 10−9). Additionally, the estimation errors are reduced when
stacking the cases of k = 0 and k = 1 together in the Yule-Walker equations, compared to relying
solely on k = 0.
Table 2: Comparison of CE for ridge regression estimators with observed factors across different penalized parameter λi and the lagging factor impact.
k = 1 (λi = 10−9) k = 1 (λi = 10−3) k = 0 (λi = 10−3)
N T CE
̂β CE
ρ ̂ CE
̂β CE
ρ ̂ CE
̂β CE
ρ̂
25
50 1.394(0.495) 0.291(0.276) 1.021(0.263) 0.135(0.102) 1.251(0.122) 0.165(0.132)
100 1.405(0.510) 0.357(0.326) 1.012(0.260) 0.124(0.101) 1.238(0.129) 0.164(0.136)
200 1.444(0.509) 0.488(0.379) 0.971(0.235) 0.120(0.097) 1.239(0.125) 0.167(0.131)
400 1.562(0.533) 0.662(0.399) 0.936(0.220) 0.117(0.096) 1.233(0.124) 0.171(0.137)
1000 1.810(0.522) 0.925(0.358) 0.976(0.219) 0.133(0.113) 1.236(0.122) 0.175(0.137)
1500 1.906(0.522) 0.990(0.347) 1.000(0.210) 0.129(0.104) 1.231(0.125) 0.171(0.136)
50
50 1.424(0.444) 0.328(0.248) 1.009(0.210) 0.154(0.089) 1.219(0.086) 0.203(0.124)
100 1.429(0.445) 0.412(0.307) 0.992(0.206) 0.144(0.082) 1.218(0.085) 0.200(0.124)
200 1.444(0.457) 0.525(0.333) 0.934(0.195) 0.131(0.073) 1.213(0.089) 0.202(0.124)
400 1.587(0.479) 0.713(0.349) 0.900(0.182) 0.130(0.079) 1.215(0.084) 0.202(0.124)
1000 1.838(0.460) 0.947(0.310) 0.931(0.174) 0.133(0.079) 1.205(0.087) 0.192(0.116)
1500 1.918(0.445) 1.010(0.290) 0.966(0.170) 0.144(0.089) 1.208(0.086) 0.198(0.125)
100
50 1.467(0.415) 0.318(0.239) 1.010(0.181) 0.125(0.053) 1.177(0.057) 0.172(0.077)
100 1.471(0.400) 0.407(0.271) 0.995(0.173) 0.120(0.048) 1.172(0.059) 0.168(0.075)
200 1.502(0.414) 0.556(0.325) 0.916(0.158) 0.104(0.043) 1.175(0.061) 0.163(0.074)
400 1.591(0.445) 0.725(0.324) 0.847(0.152) 0.101(0.041) 1.172(0.060) 0.169(0.075)
1000 1.829(0.425) 0.937(0.284) 0.877(0.148) 0.106(0.053) 1.174(0.059) 0.166(0.080)
1500 1.920(0.386) 1.008(0.245) 0.913(0.143) 0.113(0.049) 1.171(0.060) 0.171(0.079)
200
50 1.443(0.431) 0.273(0.238) 0.988(0.195) 0.086(0.042) 1.174(0.038) 0.120(0.064)
100 1.434(0.430) 0.352(0.283) 0.969(0.184) 0.080(0.040) 1.169(0.041) 0.114(0.062)
200 1.458(0.436) 0.505(0.322) 0.897(0.171) 0.072(0.036) 1.167(0.041) 0.114(0.061)
400 1.566(0.462) 0.680(0.346) 0.843(0.150) 0.068(0.034) 1.165(0.041) 0.113(0.061)
1000 1.834(0.453) 0.938(0.303) 0.868(0.145) 0.072(0.037) 1.165(0.042) 0.116(0.062)
1500 1.910(0.427) 0.995(0.274) 0.909(0.140) 0.076(0.039) 1.167(0.041) 0.117(0.062)
Note: Here, k = 1 represents the application of the stacking strategy, which incorporates lagged factors ft−1 as instrumental variables, whereas k = 0 indicates the stacking strategy is not applied, relying exclusively on the contemporaneous factors ft, as detailed in Section 3.2.
25

Next, we investigate the performance of our proposed method in scenarios where the common
factors are unobserved, focusing on the recovery of latent factors ̂ft and the estimation accuracy of
the parameters ρ and B in Eq (14). Figure 5 illustrates the convergence behavior of the estimated
loading matrix and latent factors using our method. In Panel (a) of Figure 5, it is evident that
the loading matrix converges steadily as T increases. On the other hand, for each fixed N , Panel
(b) reveals that max1≤t≤T ∥̂ft − KNT ft∥2 increases with T , which is reasonable since the uniform
distance is measured over the entire T -period. However, for each fixed T , the uniform distance will
become smaller as N increases, which is in agreement with our theoretical results.
Now, we examine the asymptotic normality of the estimated latent factors. Figure 6 presents
the histograms and QQ-plots of the first element of ̂ft−KNT ft for t = 1, 3, 5, 7 and 9 when T = 1500,
which clearly show an asymptotic normality pattern across all settings. In addition, Table 3 presents
the average coverage rates of the first component of ̂ft − KNT ft for t ∈ {1, 6, 11, ..., 96}, with a total
of 20 factors, across different significance levels and values of N . As N increases, the average
coverage rates gradually improve, accompanied by reduced variance. These findings align with
Theorem 4 and Theorem 5.
Figure 5: Boxplots of the convergence performance for the estimated loading matrices and latent factors in Eq (14).
With the estimated factors ̂ft, Figure 7 demonstrates the boxplots of the RMSE of β ̃i under
increasing T , where the RMSE is similarly define as (28). The patterns of the RMSEs in Figure 7 are
similar to those in Figure 3, and we omit the details here. To validate the distributional properties,
Figure 8 displays the histogram and QQ-plot of the first component of ViH (β ̃i − K∗
NT βi), for
i = 1, 3, 5, 7 and 9. From Figure 7, we can see clearly an asymptotic normality pattern across all
settings, which is in line with our theoretical results in Theorem 6. Moreover, we verify the coverage
probabilities of the first component of V1H (β ̃1 − K∗
NT β1) in Table 8, which are also in agreement
with our theory.
Next, we present the coefficient error (CE) results for ridge estimators in the case of unknown
factors in Table 5. From Table 5 we see that integrating the stacking strategy with proper ridge
26

Figure 6: Histograms of ̂ft − KNT ft and their corresponding empirical and theoretical distribution plots for Model (14). The results are based on 1000 iterations, focusing on the first element of ̂ft − KNT ft, for t = 1, 3, 5, 7, 9. The superimposed normal curves represent the theoretical distribution derived in Theorem 5(ii), with mean 0 and variance given by the first diagonal element of HΓtH′. The simulation results are obtained under (N, T ) = (25, 1500).
Table 3: Coverage rates of ̂ft − KNT ft across different significance levels
Significance Coverage
0.1 0.910(0.0090) 0.922(0.0085) 0.943(0.0073) 0.987(0.0036)
0.05 0.957(0.0064) 0.959(0.0063) 0.974(0.0059) 0.993(0.0026)
0.01 0.991(0.0030) 0.991(0.0030) 0.994(0.0024) 0.998(0.0014)
N 25 50 100 200
Note: This table shows the coverage rate of the first component of ̂ft − KNT ft within the confidence intervals from the theoretical distribution in Theorem 5(ii). The theoretical distribution has mean zero and variance given by the first diagonal element of HΓtH′. The results are based on 1000 iterations with sample size T = 1500.
penalty improves the estimation accuracy, further validating the proposed method.
Finally, we compare the predictive performance of our method with QMLE by evaluating their
out-of-sample forecasting accuracy under heterogeneous conditions. The forecasting error (FE) is
defined as
FE =


1
N (T − T1)
T
∑
t=T1+1
∥(̂yt − yt)∥2
2


1/2
, (30)
where ̂yt denotes the predicted value using the estimated coefficients from the training sample,
and yt represents the actual value. Table 6 presents the forecasting error and standard deviation
27

Figure 7: Boxplots of estimator convergence for model (18) with fixed small λi.
Figure 8: Histograms of the five spatial coefficient estimates and their corresponding empirical and theoretical distribution plots for model (18). The histograms show the distribution of the first component of ViH (β ̃i − K∗
NT βi) as defined in Theorem 6. The superimposed normal curve represents the theoretical distribution from Theorem 6. Here, i = 1, 3, 5, 7, 9 correspond to the 1st, 3rd, 5th, 7th, and 9th samples in a dataset of size N . The results are based on 1,000 iterations with (N, T ) = (25, 3000).
of both method across different cross-sectional dimensions (N ), with the out-of-sample period set
from T1 + 1 = 321 and T1 + 1 = 400. The proposed model with lagged factor instruments (k = 1)
achieves lower forecast error across all N dimensions, outperforming QMLE. This results aligns
with prior simulations that emphasize the benefits of combining shrinkage techniques with lagging
factor integration to enhance accuracy.
28

Table 4: Coverage performance of ViH (β ̃i − K∗
NT βi) under latent factor estimation across different significance levels.
Significance Coverage
0.1 0.343(0.016) 0.438(0.017) 0.531(0.017) 0.663(0.016) 0.819(0.013) 0.932(0.008) 0.979(0.005) 1.000(0.000)
0.05 0.399(0.016) 0.507(0.017) 0.595(0.017) 0.718(0.015) 0.866(0.011) 0.974(0.005) 1.000(0.000) 1.000(0.000)
0.01 0.477(0.017) 0.595(0.017) 0.692(0.016) 0.786(0.014) 0.946(0.008) 1.000(0.000) 1.000(0.000) 1.000(0.000)
T 50 100 200 400 1000 2000 3000 5000
Note: This table shows the coverage rate of the first component of V1H (β ̃1 − K∗
NT β1), illustrating the asymptotic performance of ρ ̃1 within the confidence intervals derived from the theoretical distribution, based on 1,000 iterations with N = 25. The theoretical distribution has zero mean and variance corresponding to the first diagonal element of X1H ′U1H X1H , which is defined in Theorem 6.
6 Empirical Studies
In this section, we apply the proposed method to two arbitrage pricing case studies. The first
one focuses on modeling and forecasting stock returns of the S&P 500 constituents, while the
second examines quarterly changes in real housing prices across U.S. Metropolitan Statistical Areas
(MSAs). For each case, we use the R software with a fixed random seed (1234) to randomly select
a subset of cross-sectional units (denoted by N ) and a subsample from the beginning of the full
time span (denoted by T ). The first 80% of each subsample is used as the training set, and the
remaining 20% as the testing set for evaluating out-of-sample forecasting performance. We compare
the proposed approach with the QMLE method and the classical Fama-French factor model without
spatial interaction.
6.1 Empirical Application to Stock Returns
Companies located in close geographic proximity often share exposure to regional policies and
industrial clusters, highlighting the importance of accounting for spatial dependencies. In this
example, we investigate how firm locations influence stock returns. Our analysis focuses on the daily
log excess returns of S&P 500 constituents from January 2004 to December 2016, comprising 3,273
time points across 205 companies. The companies are selected in the order provided by the original
dataset, which is publicly available at https://mpelger.people.stanford.edu/data-and-code,
with further details documented in Pelger (2020). As common factors, we incorporate the Fama
French variables, including the market factor (MKT), size factor (SMB), and value factor (HML).
To capture spatial dependence in each selected subsample with cross-sectional dimension N and
time dimension T , we construct a spatial weight matrix following a standard geographic approach
from spatial econometrics. Specifically, we define an N × N spatial weight matrix W , where each
off-diagonal entry wij is given by wij = (sidij)−1 for i ̸= j, and wii = 0. Here, dij denotes the
Haversine distance between the headquarters of companies i and j, and si = ∑N
j=1 d−1
ij serves as a
normalization factor to ensure that each row of W sums to one. This construction ensures that the
29

Table 5: Comparison of coefficient error (CE) for ridge regression estimators with latent factors across different penalized parameter λi and the lagging factor impact.
k = 1 (λi = 10−9) k = 1 (λi = 1) k = 0 (λi = 1)
N T CE
̂β CE
ρ ̂ CE
̂β CE
ρ ̂ CE
̂β CE
ρ̂
25
50 2.417(0.139) 1.201(0.184) 2.336(0.122) 1.072(0.235) 2.339(0.142) 1.080(0.251)
100 2.410(0.152) 1.194(0.202) 2.322(0.130) 1.068(0.247) 2.330(0.143) 1.066(0.263)
200 2.394(0.166) 1.190(0.178) 2.324(0.128) 1.076(0.236) 2.327(0.141) 1.077(0.242)
400 2.396(0.178) 1.173(0.183) 2.314(0.128) 1.073(0.232) 2.336(0.131) 1.090(0.241)
1000 2.419(0.144) 1.199(0.173) 2.310(0.143) 1.070(0.244) 2.334(0.139) 1.080(0.260)
1500 2.435(0.153) 1.195(0.190) 2.323(0.126) 1.078(0.234) 2.323(0.139) 1.080(0.247)
50
50 2.346(0.142) 1.001(0.230) 2.262(0.150) 0.838(0.306) 2.288(0.117) 0.973(0.277)
100 2.334(0.119) 1.062(0.179) 2.267(0.134) 0.937(0.270) 2.302(0.104) 1.041(0.232)
200 2.325(0.100) 1.055(0.175) 2.259(0.134) 0.905(0.281) 2.282(0.105) 0.998(0.268)
400 2.362(0.123) 1.087(0.162) 2.288(0.134) 0.937(0.263) 2.306(0.114) 1.013(0.254)
1000 2.359(0.106) 1.084(0.167) 2.285(0.122) 0.920(0.254) 2.300(0.104) 1.027(0.239)
1500 2.362(0.108) 1.087(0.163) 2.278(0.136) 0.926(0.262) 2.288(0.115) 1.029(0.225)
100
50 2.244(0.122) 0.828(0.243) 2.219(0.135) 0.797(0.291) 2.289(0.108) 1.057(0.258)
100 2.261(0.102) 0.912(0.232) 2.227(0.119) 0.767(0.302) 2.299(0.097) 1.033(0.266)
200 2.248(0.126) 0.931(0.237) 2.220(0.127) 0.835(0.289) 2.317(0.075) 1.115(0.179)
400 2.265(0.113) 0.947(0.223) 2.245(0.128) 0.880(0.304) 2.309(0.094) 1.081(0.228)
1000 2.278(0.091) 0.965(0.194) 2.242(0.119) 0.929(0.266) 2.314(0.071) 1.139(0.185)
1500 2.267(0.102) 0.939(0.214) 2.246(0.124) 0.870(0.291) 2.308(0.092) 1.089(0.208)
200
50 2.230(0.116) 0.864(0.282) 2.230(0.086) 0.886(0.230) 2.352(0.055) 1.213(0.148)
100 2.228(0.098) 0.890(0.232) 2.217(0.101) 0.849(0.262) 2.345(0.066) 1.218(0.166)
200 2.247(0.096) 0.945(0.248) 2.230(0.098) 0.921(0.231) 2.350(0.047) 1.230(0.104)
400 2.251(0.096) 0.950(0.233) 2.231(0.110) 0.918(0.250) 2.333(0.084) 1.184(0.231)
1000 2.251(0.086) 0.970(0.214) 2.217(0.104) 0.880(0.271) 2.331(0.080) 1.180(0.242)
1500 2.254(0.094) 0.978(0.223) 2.259(0.093) 0.986(0.237) 2.339(0.093) 1.198(0.228)
weights represent the relative geographic influence of company j on company i.
Table 7 presents a detailed comparison of the forecasting performance of our proposed method
against QMLE and the classical Fama-French factor model across various configurations and indus
try classifications. As shown in the table, our method consistently achieves lower forecasting errors
than both QMLE and the factor model, highlighting its effectiveness and the value of incorporating
spatial dependencies into the arbitrage pricing framework. In terms of computational efficiency,
our method offers a substantial advantage over QMLE. For example, when N = 200 and T = 1000,
QMLE requires over six hours on a standard CPU, while our approach produces comparable results
in just a few minutes. This notable efficiency gain makes our method particularly attractive for
30

Table 6: Out-of-sample simulation evaluation of different models with best ones in boldface.
Proposed Model (λi = 10−3) Proposed Model (λi = 10−9) QML
N k=0 k=1 k=0 k=1
25 2.672(0.714) 1.046(0.087) 2.605(0.689) 1.047(0.088) 1.900(0.399)
50 2.750(1.043) 1.047(0.090) 2.618(0.978) 1.048(0.091) 1.577(0.353)
100 2.925(1.589) 1.051(0.093) 2.634(1.386) 1.055(0.096) 1.357(0.224)
200 3.423(2.753) 1.055(0.101) 2.666(1.996) 1.062(0.111) 1.353(0.347)
Note: This table compares out-of-sample forecast errors between the proposed model and QML method under varying configurations of regularization parameters (λi = 10−3 and λi = 10−9) and lagging factor instruments (k = 0 and k = 1). The settings for the simulation include T = 400 (time periods) and K = 3 (factor dimensions).
large-scale applications, offering a favorable trade-off between accuracy and computational cost.
Table 7: Forecast error comparison for stock returns with observed factors.
Method
Proposed method QMLE Factor model
N = 100 N = 150 N = 200 N = 100 N = 150 N = 200 N = 100 N = 150 N = 200
T = 500 0.8601 (0.2173) 0.8546 (0.2396) 0.8462 (0.2510) 0.8665 (0.2177) 0.8768 (0.2461) 0.8772 (0.2653) 0.8606 (0.2173) 0.8551 (0.2396) 0.8476 (0.2518)
T = 1000 0.9640 (0.1999) 0.9668 (0.2352) 0.9866 (0.2791) 0.9861 (0.2038) 1.0161 (0.2505) 1.0542 (0.3073) 0.9646 (0.2005) 0.9678 (0.2360) 0.9873 (0.2801)
T = 2000 0.5630 (0.0641) 0.5704 (0.0745) 0.5623 (0.0818) 0.6042 (0.0844) 0.6439 (0.1156) 0.6723 (0.1510) 0.5705 (0.0725) 0.5821 (0.0863) 0.5774 (0.0957)
GICS Class
Information Technology (N = 36) Financials (N = 31) Consumer Staples (N = 19)
Proposed method QMLE Factor model Proposed method QMLE Factor model Proposed method QMLE Factor model
T = 500 0.7683(0.1371) 0.8061(0.1431) 0.7701(0.1369) 0.7661(0.1223) 0.7730(0.1256) 0.7669(0.1223) 0.8765(0.1396) 0.8766(0.1399) 0.8767(0.1398)
T = 1000 0.8338(0.1252) 0.8697(0.1281) 0.8352(0.1249) 1.1530(0.2088) 1.1535(0.2069) 1.1628(0.2123) 0.9823(0.1024) 0.9844(0.1021) 0.9837(0.1021)
T = 2000 0.6440(0.0726) 0.6951(0.0804) 0.6441(0.0726) 0.3859(0.0351) 0.3963(0.0366) 0.3884(0.0351) 0.6756(0.0556) 0.6821(0.0565) 0.6793(0.0561)
Note: This table compares the forecast errors of the proposed model, QMLE, and the factor model across different combinations of N and T , as well as three industry classifications: Information Technology, Financials, and Consumer Staples. These classifications are based on the Global Industry Classification Standard (GICS).
Furthermore, we evaluate the forecasting errors for stock returns driven by unobserved factors,
with the results summarized in Table 8. As shown in the table, the findings are consistent with
our earlier results, further demonstrating the scalability and practicality of the proposed method
for large-scale applications.
6.2 Empirical Application to U.S. Housing Market
Our second application examines quarterly changes in real housing prices across 377 U.S. Metropoli
tan Statistical Areas (MSAs) from 1975-Q1 to 2014-Q4, as studied in Aquaro et al. (2021). Due to
shared supply and demand dynamics among neighboring regions, spatial models are essential for
capturing such dependencies and enhancing predictive accuracy.
To account for broader economic influences—particularly the impact of stock market movements
31

Table 8: Forecast error comparison for stock returns with latent factors
Method Proposed method QMLE Factor model
N = 100 N = 150 N = 200 N = 100 N = 150 N = 200 N = 100 N = 150 N = 200
T = 500 0.8218(0.2138) 0.8251(0.2353) 0.8157(0.2449) 0.8468 (0.2132) 0.8422 (0.2361) 0.8353 (0.2491) 0.8468(0.2137) 0.8267(0.2346) 0.8164(0.2444)
T = 1000 0.9092(0.1919) 0.9315(0.2261) 0.9250(0.2601) 0.9369 (0.1968) 0.9472 (0.2320) 0.9605 (0.2669) 0.9244(0.1931) 0.9322(0.2257) 0.9429(0.2591)
T = 2000 0.5441(0.0690) 0.5501(0.0810) 0.5491(0.0902) 0.5560 (0.0704) 0.5712 (0.0839) 0.5698 (0.0938) 0.5460(0.0695) 0.5559(0.0823) 0.5532(0.0913)
Note: This table compares the forecast errors of the proposed model with QMLE and factor model under different combinations of N and T . The number of latent factors is determined using the information criterion proposed by Bai and Ng (2002).
on real estate investment sentiment and capital allocation—we incorporate factor proxies from the
previous example. For spatial dependence, we adopt the spatial weight matrix W75 proposed in
Aquaro et al. (2021), in which MSAs within a specified radius d are treated as neighbors (assigned
a weight of 1), while non-neighbors receive a weight of 0. The resulting matrix is row-normalized
to obtain the final weight matrix W .
Table 9 presents a detailed comparison of forecasting errors for our proposed method, the
QMLE approach from Aquaro et al. (2021), and the Fama-French factor model without spatial
interactions. As shown in the table, our method consistently yields lower forecast errors in most
cases, demonstrating its robustness and efficiency across different data settings and reinforcing its
applicability to spatial econometric forecasting.
Table 9: Forecast error comparison for U.S. housing prices with observed factors.
Method Proposed method QMLE Factor model
N = 20 N=50 N = 200 N = 20 N = 50 N = 200 N = 20 N=50 N = 200
T = 50 1.2520(0.3110) 1.6515(0.8584) 1.5533(2.3174) 1.2680(0.2254) 1.6605(0.7631) 1.5863(1.5341) 1.2881(0.2231) 1.6931(0.7788) 1.7533(1.5479)
T = 100 2.2001(0.6841) 2.1557(1.0271) 2.1723(2.4108) 2.2015(0.5007) 2.1577(0.7837) 2.1737(2.3700) 2.2163(0.4752) 2.1715(0.7257) 2.2269(1.4651)
T = 150 2.8807(0.3411) 2.8876(0.4750) 2.7555(1.5827) 2.8854(0.3358) 2.8910(0.4665) 2.7887(1.0758) 2.8870(0.3356) 2.8951(0.4645) 2.8076(1.0340)
Note: This table compares the forecast errors of the proposed model, QMLE and factor model in predicting U.S. housing prices, utilizing factors from the Fama-French three-factor model and a spatial weight matrix based on geometric distances.
In summary, the comparative analyses of S&P 500 stock returns and U.S. housing prices demon
strate that our proposed method delivers superior predictive accuracy and computational efficiency,
confirming its effectiveness across diverse spatial and temporal settings.
7 Conclusion
This paper introduced a Spatial Arbitrage Pricing Theory (SAPT) model that integrates spatial
interactions with multifactor structures involving both observable and latent variables. The SAPT
framework offers two key conceptual innovations for asset pricing: (1) it introduces a spatial rho
parameter, serving as a counterpart to the market beta in the classical CAPM; and (2) it cap
tures spatial correlations typically unaccounted for in traditional Arbitrage Pricing Theory (APT)
32

models, thereby extending the scope of standard CAPM and enhancing econometric tools for asset
pricing analysis. For estimation, we proposed a generalized shrinkage Yule-Walker method that ac
commodates both observable and latent factors. The proposed methodology provides a flexible and
computationally efficient framework for theoretical advancement and empirical research in financial
and economic modeling.
References
Ahn, S. C., and A. R. Horenstein (2013): “Eigenvalue ratio test for the number of factors,” Econometrica, 81(3), 1203–1227.
Anselin, L. (1988): Spatial econometrics: methods and models, vol. 4. Springer Science & Business Media.
Aquaro, M., N. Bailey, and M. H. Pesaran (2021): “Estimation and inference for spatial models with heterogeneous coefficients: an application to US house prices,” Journal of Applied Econometrics, 36(1), 18–44.
Bai, J. (2003): “Inferential theory for factor models of large dimensions,” Econometrica, 71(1), 135–171.
Bai, J., and K. Li (2021): “Dynamic spatial panel data models with common shocks,” Journal of Econometrics, 224(1), 134–160.
Bai, J., and S. Ng (2002): “Determining the number of factors in approximate factor models,” Econometrica, 70(1), 191–221.
Carrasco, M., and G. Tchuente (2015): “Regularized LIML for many instruments,” Journal of Econometrics, 186(2), 427–442.
Case, A. C., H. S. Rosen, and J. R. Hines (1993): “Budget spillovers and fiscal policy interdependence: Evidence from the states,” Journal of Public Economics, 52(3), 285–307.
Cliff, A., and J. Ord (1973): Spatial autocorrelation. Sage Publications Sage CA: Thousand Oaks, CA.
Cochrane, J. (2009): Asset pricing: Revised edition. Princeton university press.
Cressie, N. (2015): Statistics for spatial data. John Wiley & Sons.
Fama, E. F., and K. R. French (1993): “Common risk factors in the returns on stocks and bonds,” Journal of Financial Economics, 33(1), 3–56.
(2015): “A five-factor asset pricing model,” Journal of Financial Economics, 116(1), 1–22.
Fan, J., Y. Liao, and M. Mincheva (2013): “Large covariance estimation by thresholding principal orthogonal complements,” Journal of the Royal Statistical Society: Series B (Statistical Methodology), 75(4), 603–680.
Fan, J., and Q. Yao (2003): Nonlinear time series: nonparametric and parametric methods, vol. 20. Springer.
Feng, G., S. Giglio, and D. Xiu (2020): “Taming the factor zoo: A test of new factors,” The Journal of Finance, 75(3), 1327–1370.
Forni, M., M. Hallin, M. Lippi, and L. Reichlin (2000): “The generalized dynamic-factor model: Identification and estimation,” Review of Economics and statistics, 82(4), 540–554.
(2005): “The generalized dynamic factor model: one-sided estimation and forecasting,” Journal of the American Statistical Association, 100(471), 830–840.
Gao, Z., Y. Ma, H. Wang, and Q. Yao (2019): “Banded spatio-temporal autoregressions,” Journal of Econometrics, 208(1), 211–230.
Gao, Z., and R. S. Tsay (2019): “A structural-factor approach to modeling high-dimensional time series and space-time data,” Journal of Time Series Analysis, 40(3), 343–362.
(2021): “A Two-Way Transformed Factor Model for Matrix-Variate Time Series,” Econometrics and Statistics.
(2022): “Modeling high-dimensional time series: A factor model with dynamically dependent factors and diverging eigenvalues,” Journal of the American Statistical Association, 117(539), 1398–1414.
(2023): “Divide-and-conquer: a distributed hierarchical factor approach to modeling large-scale time series data,” Journal of the American Statistical Association, 118(544), 2698–2711.
(2024): “Supervised dynamic pca: Linear dynamic forecasting with many predictors,” Journal of the American Statistical Association, pp. 1–15.
33

Giglio, S., D. Xiu, and D. Zhang (2025): “Test assets and weak factors,” The Journal of Finance, 80(1), 259–319.
Hansen, L. P. (1982): “Large sample properties of generalized method of moments estimators,” Econometrica: Journal of the econometric society, pp. 1029–1054.
Hu, J., H. Ding, and X. Liu (2023): “Arbitrage pricing with heterogeneous spatial effects and heteroscedastic disturbances,” Journal of Financial Econometrics, 21(4), 1169–1195.
Kou, S., X. Peng, and H. Zhong (2018): “Asset pricing with spatial interaction,” Management Science, 64(5), 2083–2101.
Lam, C., and Q. Yao (2012): “Factor modeling for high-dimensional time series: inference for the number of factors,” The Annals of Statistics, pp. 694–726.
Lam, C., Q. Yao, and N. Bathia (2011): “Estimation of latent factors for high-dimensional time series,” Biometrika, 98(4), 901–918.
Lee, L.-F. (2004): “Asymptotic distributions of quasi-maximum likelihood estimators for spatial autoregressive models,” Econometrica, 72(6), 1899–1925.
Lee, L.-f., and J. Yu (2010): “Some recent developments in spatial panel data models,” Regional Science and Urban Economics, 40(5), 255–271.
Lettau, M., and M. Pelger (2020): “Estimating Latent Asset Pricing Factors,” Journal of Econometrics, 218(1), 1–31.
Liao, Z. (2013): “Adaptive GMM shrinkage estimation with consistent moment selection,” Econometric Theory, 29(5), 857–904.
Lin, X., and L.-f. Lee (2010): “GMM estimation of spatial autoregressive models with unknown heteroskedasticity,” Journal of Econometrics, 157(1), 34–52.
Liu, X., J. Guerard, R. Chen, and R. Tsay (2025): “Improving estimation of portfolio risk using new statistical factors,” Annals of Operations Research, 346, 245–261.
Markowitz, H. M. (1952): “Portfolio selection,” Journal of Finance, 7(1), 71–91.
Onatski, A. (2010): “Determining the number of factors from empirical distribution of eigenvalues,” The Review of Economics and Statistics, 92(4), 1004–1016.
Pelger, M. (2020): “Understanding systematic risk: A high-frequency approach,” The Journal of Finance, 75(4), 2179–2220.
Pesaran, M. H., and E. Tosetti (2011): “Large panels with common factors and spatial correlation,” Journal of Econometrics, 161(2), 182–202.
Pirinsky, C., and Q. Wang (2006): “Does corporate headquarters location matter for stock returns?,” The Journal of Finance, 61(4), 1991–2015.
Ross, S. A. (1976): “The arbitrage theory of capital asset pricing,” Journal of Economic Theory, 13(3), 341–360.
Sharpe, W. F. (1964): “Capital asset prices: A theory of market equilibrium under conditions of risk,” The journal of finance, 19(3), 425–442.
Stock, J. H., and M. Watson (2002): “Macroeconomic Forecasting Using Diffusion Indexes,” Journal of Business & Economic Statistics, 20, 147–162.
Vershynin, R. (2018): High-dimensional probability: An introduction with applications in data science, vol. 47. Cambridge university press.
Wang, X., and A. Shojaie (2021): “Joint estimation and inference for multi-experiment networks of highdimensional point processes,” arXiv preprint arXiv:2109.11634.
Yang, C. F. (2021): “Common factors and spatial dependence: An application to US house prices,” Econometric Reviews, 40(1), 14–50.
Yu, J., R. De Jong, and L.-f. Lee (2008): “Quasi-maximum likelihood estimators for spatial dynamic panel data with fixed effects when both n and T are large,” Journal of Econometrics, 146(1), 118–134.
34

Online Appendix for High-Dimensional Spatial Arbitrage Pricing Theory with Heterogeneous Interactions
Abstract
The online appendix collects the mathematical proofs that support the main text.
Keywords: Spatial Arbitrage Pricing Theory, Multi-factor Analysis, Yule-Walker Estimation,
Eigenanalysis, High Dimension

IA.A Proofs of the Theorems
We will use C or c to denote a generic constant the value of which may change at different places.
Proof of Theorem 1. We only consider a one-period economy and omit the subscript index t.
We consider a small perturbation of the tangency portfolio rj,M and start with a portfolio consisting
of rj, rj,M , and rf with weights α, 1, and −α, respective. The total wealth is (α + 1 − α) = 1.
Denote the new portfolio by rα and it can be written as
rα = rj,M + αrj − αrf .
The variance of rα is
σ2
α = Var(rj,M + αrj − αrf ) = σ2
j,M + 2αγj,M + α2σ2
j,
where σ2
j,M = Var(rj,M ), σj2 = Var(rj), and γj,M = Cov(rj,M , rj). The expected return of rα is
μα = μj,M + αμj − αrf .
It follows that ∂μα
∂α = μj − rf ,
and ∂σα
∂α = 1
2 (σ2
j,M + 2αγj,M + α2σ2
j )−1/2(2γj,M + 2ασ2
j ).
At the tangency portfolio with α = 0, it is known from the mean-variance theory that the slop of
the capital allocation line (CAL) in Figure 1 is μj,M −rf
σj,M as mentioned above. On the other hand
∂μα/∂α
∂σα/∂α |α=0 = μj − rf
γj,M /σj,M
.
From the mean-variance theory and the efficiency of the tangency portfolio rj,M on the frontier
together with the complete market assumption as Definition 1 and Definition 2, we can conclude
that the ratio between the partial derivatives above is equal to the slope of the capital allocation
line: μj,M − rf
σj,M
= μj − rf
γj,M /σj,M
,
implying that
μj − rf = γj,M
σ2
j,M
(μj,M − rf ) = Cov(rj, w′jr)
Var(w′jr) (μj,M − rf ) = ρj(μj,M − rf ),
1

where
ρj = Cov(rj, w′jr)
Var(w′jr) ,
is the spatial rho associated with the j-th asset rj. This completes the proof. □
Proof of Theorem 2. By (6), it follows that
̂Σyf = 1
T
T
∑
t=1
ytf ′
t = D(ρ)W 1
T
T
∑
t=1
ytf ′
t +B1
T
T
∑
t=1
ftf ′
t+ 1
T
T
∑
t=1
εtf ′
t
and
̂Σyf (1) = 1
T
T
∑
t=2
ytf ′
t−1 = D(ρ)W 1
T
T
∑
t=2
ytf ′
t−k + B 1
T
T
∑
t=2
ftf ′
t−1 + 1
T
T
∑
t=2
εtf ′
t−1.
Then,
̂Σ′
yf ei = ̂Σ′
yf wiρi + ̂Σf bi + ̂Σ′
εf ei,
and
̂Σyf (1)′ei = ̂Σyf (1)′wiρi + ̂Σf (1)′bi + ̂Σεf (1)′ei.
Therefore, we obtain that
̂Yi =
(
̂Σ′
yf wi ̂Σ′
f
̂Σyf (1)′wi ̂Σf (1)′
)
βi +
(
̂Σ′
εf ei
̂Σεf (1)′ei
)
=
̂Xiβi +
(
̂Σ′
εf ei
̂Σεf (1)′ei
)
.
It follows that
̂βi(λi) = ( ̂Xi(λi))−1 ̂X′
i
̂Yi = ( ̂Xi(λi))−1 ̂X′
i
̂Xiβi + ( ̂Xi(λi))−1 ̂X′
i
(
̂Σ′
εf ei
̂Σεf (1)′ei
)
, (IA.1)
where ̂Xi(λi) = ̂X′i ̂Xi + λiIK+1. By Assumption 1 and a similar argument as that in (A.2) of the
supplement of Gao and Tsay (2022), we can show that
∥
̂Σ′
yf (k)wi − Σ′
yf (k)wi∥F = Op(
√
N
T ),
and
∥
̂Σf (k) − Σf (k)∥F = Op(
√1
T ),
where the first rate √N/T can be reduced if some weak cross-sectional dependence is imposed.
Furthermore, by a similar argument, we can show that
̂Σεf (k)′ei = 1
T
T
∑
t=k+1
ft−kεi,t = Op(
√1
T ).
2

Therefore, if N = o(T ), by Assumption 6, we have
∥
̂βi(λi) − ̂Xi(λi)−1 ̂X′
i
̂Xiβi∥2 ≤ C∥( ̂Xi(λi))−1 ̂X′
i∥2
∥ ∥ ∥ ∥ ∥
(
̂Σ′
εf ei
̂Σεf (1)′ei
)∥ ∥ ∥ ∥
∥
2
= Op(T −1/2),
and letting λi → 0,
∥( ̂X′
i
̂Xi)( ̂βi − βi)∥2 ≤ C∥ ̂X′
i∥2
∥ ∥ ∥ ∥ ∥
(
̂Σ′
εf ei
̂Σεf (1)′ei
)∥ ∥ ∥ ∥
∥
2
= Op(T −1/2).
This completes the proof. □
Proof of Theorem 3. We only prove the case when N is diverging in Theorem 3(ii) as the proof
for (i) is similar. By (IA.1),
(
̂X′
i
̂Xi)( ̂βi − βi) = ̂X′
i
(1
T
∑T
t=1 ftεi,t
1 T
∑T
t=2 ft−1εi,t
)
.
To prove Theorem 3(ii), it is sufficient to show the following two statements,
̂X′
i
̂Xi →p Vi, (IA.2)
and
√ T
(1
T
∑T
t=1 ftεi,t
1 T
∑T
t=2 ft−1εi,t
)
→d N (0, Ui). (IA.3)
By a similar argument as that in the proof of Theorem 1 above, we can show that
̂Xi →p Xi :=
( Σ′
yf wi Σ′
f
Σyf (1)′wi Σf (1)′
)
,
if N = o(T ). Therefore, we have
̂X′
i
̂Xi →p
( w′iΣyf Σ′
yf wi + w′iΣyf (1)Σ′
yf (1)wi w′iΣyf Σf wi + w′iΣyf (1)Σ′
f (1)
Σf Σ′
yf wi + Σf (1)Σ′
yf (1)wi Σ2
f + Σf (1)Σ′
f (1)
)
= Vi.
By a similar argument as that in the proof of Theorem 2, we can show that
̂X′
i
̂Xi − X′
iXi = Op(N −1/2T 1/2),
3

which implies (IA.2) if N = o(T ). To show (IA.3), it is sufficient to prove that, for any vector
a = (a′1, a′2)′ with a1 ∈ RK and a2 ∈ RK ,
√
T a′
(1
T
∑T
t=1 ftεi,t
1 T
∑T
t=2 ft−1εi,t
)
= a′
1
√1T
T
∑
t=1
ftεi,t + a′
2
√1T
T
∑
t=1
ft−1εi,t
(IA.4)
is asymptotically normal. Define
SN,T = a1
√1T
T
∑
t=1
ftεi,t + a′
2
√1T
T
∑
t=2
ft−1εi,t, (IA.5)
we only need to show the asymptotic normality of SN,T . By Schwarz’s Inequality and Assumptions 2
and 5, we can derive that
E|ftεi,t|γ ≤ (E|ft|2γ )1/2(E|εit|2γ )1/2 < ∞.
We now calculate the variance of SN,T . Since it involves 16 terms in total and we start with the
first term in (IA.5). By definition and an elementary argument, we have
Var( √1T
T
∑
t=1
ftεi,t) = Σfεi (0) +
T −1
∑
j=1
(1 − j
T )Σfεi(0, j).
Note that ∑∞
j=1 αN (j)1−2/γ < ∞ from Assumption 1, by Proposition 2.5 of Fan and Yao (2003),
we have
sup
i
∞
∑
j=1
|Σfεi(0, j)| ≤ C sup
i
∞
∑
j=1
α(j)1−2/γ (E|ft|2γ )1/γ (E|εi,t|2γ )1/γ < ∞.
We can calculate all the terms of SN,T and sum them up, by the Dominated Convergence theorem,
we have
Var (SN,T ) → a′Uia.
To show the asymptotic normality of SN,T , we employ the small-block and large-block techniques
commonly used for weakly dependent data. Specifically, we partition the set {1, ..., T } into 2kT + 1
subsets with large blocks of size lT , small blocks of size sT , and the last remaining set of size
T − kT (lT + sT ). Let
lT = [
√
T / log(T )], sT = [
√
T log(T )]δ, kT = [T /(lT + sT )],
where [x] is the greatest integer less than or equal to x, and 1 − 2/γ ≤ δ < 1. It is not hard to see
that
lT /
√
T → 0, sT /lT → 0, and kT = O(
√
T log(T )).
4

By Assumption 1 that ∑∞
j=1 αN (j)1−2/γ , we have αN (sT ) = o(s−γ/(γ−2)
T ). It follows that
kT αN (sT ) = o(kT /sγ/(γ−2)
T ) = o(1).
Then, we rewrite SN,T as
SN,T =a′
1
√1T
kT
∑
j=1
ξ(1)
j + a′
2
√1T
kT
∑
j=1
ξ(2)
j + a′
1
√1T
kT
∑
j=1
η(1)
j + a′
2
√1T
kT
∑
j=1
η(2)
j
+ a′
1
√1T ζ(1)
j + a′
2
√1T ζ(2)
j , (IA.6)
where
ξ(1)
j=
jlT +(j−1)sT
∑
t=(j−1)(lT +sT )+1
ftεi,t, η(1)
j=
j(lT +sT )
∑
t=jlT +(j−1)sT +1
ftεi,t,
ζ (1)
j=
T
∑
t=kT (lT +sT )+1
ftεi,t, ξ(2)
j=
jlT +(j−1)sT
∑
t=(j−1)(lT +sT )+1
ft−1εi,t,
η(2)
j=
j(lT +sT )
∑
t=jlT +(j−1)sT +1
ft−1εi,t, ζ(2)
j=
T
∑
t=kT (lT +sT )+1
ft−1εi,t,
Note that αN (T ) = o(T 2/γ−1), kT sT /T → 0, and (lT +s−T )/T → 0, it follows from Proposition
2.7 of Fan and Yao (2003) that
√1T
kT
∑
j=1
η(l)
j = op(1), and √1T ζ(l)
j = op(1), l = 1, 2, 3, 4.
Then,
SN,T = a′
1
√1T
kT
∑
j=1
ξ(1)
j + a′
2
√1T
kT
∑
j=1
ξ(2)
j + op(1).
By a similar argument as Theorem 2.21 of Fan and Yao (2003), we can show that
√
T a′
(1
T
∑T
t=1 ftεi,t
1 T
∑T
t=2 ft−1εi,t
)
−→d N (0, a′Uia).
We replace a by (U−1/2
i )′a and obtain
√
T a′U−1/2
i
(1
T
∑T
t=1 ftεi,t
1 T
∑T
t=2 ft−1εi,t
)
−→d N (0, 1),
which implies that
√
T U−1/2
i
(1
T
∑T
t=1 ftεi,t
1 T
∑T
t=2 ft−1εi,t
)
−→d N (0, I2K ). (IA.7)
5

Therefore, √
T Vi( ̂βi − βi) −→d N (0, X′
iUiXi). (IA.8)
Theorem 3 follows from (IA.2) and (IA.8). This completes the proof. □
Proof of Theorem 4. Note that
̂Σy(k) = 1
T
T
∑
t=k+1
yty′
t−k
=1
T
T
∑
t=k+1
{Λftf ′
t−kΛ′ + Λftξ′
t−k + ξtf ′
tkΛ′ + ξtξ′
t−k }
=Λ 1
T
T
∑
t=k+1
(ftf ′
t−kΛ′ + ftξ′
t−k) + 1
T
T
∑
t=k+1
(ξtf ′
t−kΛ′ + ξtξ′
t−k )
=ΛG1,k + G2,k, (IA.9)
where
G1,k = 1
T
T
∑
t=k+1
(ftf ′
t−kΛ′ + ftξ′
t−k), G2,k = 1
T
T
∑
t=k+1
(ξtf ′
t−kΛ′ + ξtξ′
t−k ).
It follows from the definition of ̂M in (17) that
̂M =
k0
∑
k=1
̂Σy(k) ̂Σ′
y (k)
=
k0
∑
k=1
(ΛG1,k + G2,k)(ΛG1,k + G2,k)′
=Λ
k0
∑
k=1
G1,k G′
1,kΛ′ +
k0
∑
k=1
(ΛG1,k G′
2,k + G2,kG′
1,kΛ′ + G2,kG′
2,k). (IA.10)
Let ̂VNT ∈ Rr be a diagonal matrix with diagonal elements being the top K eigenvalues of ̂M, it
follows from Assumptions 3 and 4 that ̂VNT ≍ O(N 2). Since the columns of ̂Λ are the eigenvectors
of ̂M, it follows that
̂M ̂Λ = ̂Λ ̂VNT ,
implying that
̂Λ =̂M ̂Λ ̂V−1
NT
=Λ
k0
∑
k=1
G1,k G′
1,kΛ′ ̂Λ ̂V−1
NT +
k0
∑
k=1
[
ΛG1,k G′
2,k + G2,kG′
1,kΛ′ + G2,kG′
2,k
]
̂Λ ̂V−1
NT . (IA.11)
Let H′
N T = ∑k0
k=1 G1,kG′
1,kΛ′ ̂Λ ̂V−1
NT , it follows that H = Op(1) and H−1 = Op(1). Then (IA.11)
6

implies that
̂Λ − ΛH′
NT =
k0
∑
k=1
[
ΛG1,k G′
2,k + G2,kG′
1,kΛ′ + G2,kG′
2,k
]
̂Λ ̂V−1
NT . (IA.12)
First, by Assumption 1 and a similar argument as that in (A.2) of the supplement of Gao and Tsay
(2022), we can show that
∥G1,k∥F = ∥ 1
T
T
∑
t=k+1
(ftf ′
t−kΛ′ + ftξ′
t−k)∥F = Op(
√
N ) + Op(1 +
√
N
T ) = Op(
√
N ),
and
∥G2,k∥F = ∥ 1
T
T
∑
t=k+1
(ξtf ′
t−kΛ′ + ξtξ′
t−k)∥F = Op(
√
N
T
√
N ) + Op(
√
N2
T ) = Op(
√
N2
T ).
Then, it follows from (IA.12) and the above rates that
∥
̂Λ − ΛH′∥F = Op(
√ N
√ N
√
N2
T+
√ N
√ N
√
N2
T + N2
T )Op(
√
N /N 2) = Op(
√
N
T ),
implying that √1N ∥ ̂Λ − ΛH′∥F = Op(T −1/2).
This completes the proof of Theorem 4. □
Lemma 1. Let Assumptions 1–8 hold. Then, as N, T → ∞,
HNT H′
NT = IK + Op(T −1/2), and H′
NT HNT = IK + Op(T −1/2).
Proof. First, note that
HNT H′
NT − IK =HNT
Λ′Λ
N H′
NT −
̂Λ′
̂Λ
N
= √1N (HNT Λ′ − ̂Λ′) √1N ΛH′
NT + √1N
̂Λ′(ΛH′
NT − ̂Λ)/
√
N . (IA.13)
Then, it follows from Theorem 3 that
∥HNT H′
NT − IK ∥F = Op(T −1/2).
Furthermore, since HNT = Op(1) and H−1
NT = Op(1), then
H′
NT HNT H′
NT = H′
NT + Op(T −1/2),
7

we multiply H−1
NT on the right of both sides and obtain
H′
NT HNT = IK + Op(T −1/2).
This completes the proof. □
Lemma 2. Let Assumptions 1–8 hold. Then, as N, T → ∞,
̂Λ′
̂M ̂Λ = ̂VNT →p V,
where V is a diagonal matrix consisting of the top K eigenvalues of M defined in (16).
Proof. The proof is similar to Theorem 1 of Lam and Yao (2012). We omit the details to save
space. □
Lemma 3. Let Assumptions 1–8 hold. Then there exists an orthogonal matrix H ∈ RK such that
HNT →p H with probability tending to one as N, T → ∞.
Proof. Note that
G1,k = ̂Σf (k)Λ′ + ̂Σfξ(k).
If N = o(T ), we have that ̂Σf (k) →p Σf (k) and ̂Σfξ(k) →p Σfξ(k). By definition,
H′
NT =
k0
∑
k=1
G1,k G′
1,kΛ′ ̂Λ ̂V−1
NT =
k0
∑
k=1
G1,k G′
1,k Λ′ ΛH′
NT V−1 + op(1).
Then, by Lemma 1,
H′
NT
V
N 2 HNT = 1
N
k0
∑
k=1
(Σf (k)Λ′ + Σfξ(k)))(Σf (k)Λ′ + Σfξ(k)))′ + op(1)
=
k0
∑
k=1
Σf (k)Σ′
f (k) + op(1). (IA.14)
Therefore, HNT will converge to the matrix consisting of the eigenvectors of ∑k0
k=1 Σf (k)Σ′
f (k),
denoted by H. This completes the proof. □
Proof of Theorem 5. We first show Theorem 5(i). Note that
̂ft = 1
N
̂Λ′yt
=1
N
̂Λ′(Λft + ξt)
=1
N
̂Λ′Λft + 1
N
̂Λ′ξt
=KNT ft + 1
N ( ̂Λ − ΛH′
NT )′ξt + 1
N HNT Λ′ξt, (IA.15)
8

where KNT = 1
N
̂Λ′Λ which has the same limit H as that of HNT , but they are not identical in
finite samples. By Assumption 7, it is not hard to show that
max
1≤t≤t |fi,t| = Op(log(T )), and max
1≤t≤T |εi,t| = Op(log(T )).
Therefore,
max
1≤t≤T ∥ 1
N ( ̂Λ − ΛH′
NT )′ξt∥F ≤ √1N ∥ ̂Λ − ΛH′
NT ∥F max
1≤t≤T ∥ ξt
√N ∥F = Op(T −1/2 log(T )),
and
max
1≤t≤T ∥ 1
N HNT Λ′ξt∥F ≤ C √1N ∥HNT ∥F max
1≤t≤T ∥ √1N Λ′ξt∥F = Op(N −1/2 log(T )).
Then, it follows from the above rates that
max
1≤t≤t ∥̂ft − KNT ft∥F = Op(( √1T + √1N ) log(T )).
This proves Theorem 5(i).
For Theorem 5(ii), if N = o(T ),
√
N (̂ft − KNT ft) = H √1N Λ′ξt + op(1). (IA.16)
By Assumption 8, we have
√
N (̂ft − KNT ft) −→d N (0, HΓtH′).
This completes the proof. □
Proof of Theorem 6. We use H instead of HNT for simplicity in this proof. By definition,
Σ ̃ yf (k) = 1
T
T
∑
t=k+1
yt̂f ′
t−k
=1
T
T
∑
t=k+1
D(ρ)Wyt̂f ′
t−k + B 1
T
T
∑
t=k+1
ft̂f ′
t−k + 1
T
T
∑
t=k+1
εt̂f ′
t−k
=D(ρ)WΣ ̃ yf (k) + BK−1
NT Σ ̃ f (k) + B 1
T
T
∑
t=k+1
(ft − K−1
NT ̂ft)̂f ′
t−k + 1
T
T
∑
t=k+1
εt̂f ′
t−k. (IA.17)
Then, it follows that
Σ ̃ yf (k)′ei = Σ ̃ yf (k)′wiρi + Σ ̃ f (k)′(K′
NT )−1bi + 1
T
T
∑
t=k+1
̂ft−k(ft − K−1
NT ̂ft)′bi + 1
T
T
∑
t=k+1
̂ft−k εi,t .
(IA.18)
9

We now analyze the last two terms. First,
1
T
T
∑
t=k+1
̂ft−k(ft − K−1
NT ̂ft)′bi = 1
T
T
∑
t=k+1
(
̂ft−k − KNT ft−k)(KNT ft − ̂ft)′(K′
NT )−1bi
+1
T
T
∑
t=k+1
KNT ft−k(KNT ft − ̂ft)′(K′
NT )−1bi, (IA.19)
where
∥1
T
T
∑
t=k+1
(
̂ft−k − KNT ft−k)(KNT ft − ̂ft)′(K′
NT )−1bi∥2 = Op(( 1
T+1
N ) log(T )2).
By (IA.16), and ft−k and ξt are uncorrelated, we have
1
T
T
∑
t=k+1
KNT ft−k(KNT ft − ̂ft)′(K′
NT )−1bi = 1
T
T
∑
t=k+1
KNT ft−kξ′
t(ΛH′
NT − ̂Λ)(KNT )−1bi/N
−1
T
T
∑
t=k+1
KNT ft−kξ′
tΛH′
NT (KNT )−1bi/N
=Op( 1
T+ 1
√N T ). (IA.20)
Next, we consider the last term of (IA.18).
1
T
T
∑
t=k+1
̂ft−kεi,t = 1
T
T
∑
t=k+1
KNT ft−kεi,t + 1
T
T
∑
t=k+1
(
̂ft−k − KNT ft−k)εi,t.
By a similar argument as (IA.20), we can show that
∥1
T
T
∑
t=k+1
(
̂ft−k − KNT ft−k)εi,t∥F = Op( 1
T+ 1
√N T ).
Then it follows from (IA.18) that
Y ̃ i =  ̃XiK∗
NT βi +
( KNT 1
T
∑T
t=1 ftεi,t
KNT 1
T
∑T
t=2 ft−1εi,t
)
+ Op( 1
√N T + ( 1
T+1
N ) log(T )2),
where K∗
NT = diag(1, KNT ) and βi = (ρi, b′i)′. Then,
β ̃ i(λi) = X ̃ i(λi)−1X ̃ ′
i
X ̃ iK∗
NT βi +  ̃Xi(λi)−1X ̃ ′
i
( KNT 1
T
∑T
t=1 ftεi,t
KNT 1
T
∑T
t=2 ft−1εi,t
)
+ Ri, (IA.21)
10

where Ri is the remaining term, and we will show that √T Ri = op(1). Note that
Σ ̃ yf (k) = 1
T
T
∑
t=k+1
yt̂f ′
t−k = 1
T
T
∑
t=k+1
ytf ′
t−k K′
NT + 1
T
T
∑
t=k+1
yt(f ̃t−k − KNT ft)′
=
̂Σyf K′
NT + Op(N −1/2 + T −1/2)
→p ̂Σyf K′
NT , (IA.22)
if N = o(T ). Similarly, we can show that
Σ ̃ f (k) = HΣf (k)H′ + op(1).
Therefore, if N = o(T ),
X ̃ i =
(
Σ ̃ ′
yf wi Σ ̃ ′
f
Σ ̃ ′
yf (1)wi Σ ̃ ′
f (1)
)
→p XH
i=
( HΣ′
yf wi HΣf H′
HΣ′
yf (1)wi HΣ′
f (1)H′
)
,
and hence
̂X′
i
 ̃Xi →p
( w′iΣyf Σ′
yf wi + w′iΣyf (1)Σ′
yf (1)wi w′iΣyf Σf H′ + w′iΣyf (1)Σ′
f (1)H′
HΣf Σ′
yf wi + HΣf (1)Σ′
yf (1)wi HΣ2
f H′ + HΣf (1)Σ′
f (1)H′
)
= VH
i.
It follows that
(
X ̃ ′
i
 ̃Xi + λiIK+1)−1X ̃ i = Op(1),
implying that √T Ri = op(1). Then (IA.21) implies that
β ̃ i(λi) −  ̃Xi(λi)−1X ̃ ′
i
 ̃XiK∗
NT βi = Op(T −1/2).
Let λi → 0, we obtain that
√
T (  ̃X′
i
X ̃ i)(β ̃ i − K∗
NT βi) = X ̃ ′
i


KN T √1T
∑T
t=1 ftεi,t
KN T √1T
∑T
t=2 ft−1εi,t

 + op(1).
By a similar argument as that in the proof of Theorem 3, we have
√ T
( KNT 1
T
∑T
t=1 ftεi,t
KNT 1
T
∑T
t=2 ft−1εi,t
)
−→d N (0, UH
i ), (IA.23)
where
Var


KNT √1T
∑T
t=1 ftεi,t
KN T √1T
∑T
t=2 ft−1εi,t

 → UH
i,
11

which is defined as
UH
i=
( HΣfεi (0)H′ HΣfεi (1)H′
HΣ′
fεi (1)H′ HΩfεi (0)H′
)
,
where Σfεi(0), Σfεi(1), and Ωfεi(0) are defined in Section 4. It follows from (IA.23) that
√
T VH
i ( ̂βi − K∗
NT βi) −→d N (0, XH
i
′UH
i XH
i ).
This completes the proof. □
12

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:43.220Z
- **Text Length:** 103097 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 48 of 48
