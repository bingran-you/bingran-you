# PDF Document: Wu and Zhu - 2025 - U.S. Economy and Global Stock Markets Insights from a Distributional Approach.pdf

**File Path:** Wu and Zhu - 2025 - U.S. Economy and Global Stock Markets Insights from a Distributional Approach.pdf

**Processed Date:** 2026-02-10T18:16:55.129Z

**File Size:** 1088.98 KB

**Total Pages:** 37

**Extracted Pages:** 37

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3212

**Title:** U.S. Economy and Global Stock Markets: Insights from a Distributional Approach

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

U.S. Economy and Global Stock Markets: Insights from a
Distributional Approach
Ping Wu∗ Dan Zhu†
27th November 2025
Abstract
Financial markets are interconnected, with micro-currents propagating across global markets and
shaping economic trends. This paper moves beyond traditional stock market indices to examine cross
sectional return distributions—15 in our empirical application, each representing a distinct global mar
ket. To facilitate this analysis, we develop a matrix functional VAR method with interpretable factors
extracted from cross-sectional return distributions. Our approach extends the existing framework from
modeling a single function to multiple functions, allowing for a richer representation of cross-sectional
dependencies. By jointly modeling these distributions with U.S. macroeconomic indicators, we uncover
the predictive power of financial market in forecasting macro-economic dynamics. Our findings reveal
that U.S. contractionary monetary policy not only lowers global stock returns, as traditionally under
stood, but also dampens cross-sectional return kurtosis, highlighting an overlooked policy transmission.
This framework enables conditional forecasting, equipping policymakers with a flexible tool to assess
macro-financial linkages under different economic scenarios.
1 Introduction
Understanding macroeconomic and financial dependence involves recognizing how global stock markets are
deeply connected to U.S. economic conditions. The stock market is a complex and multifaceted system,
where myriad factors interact to influence asset prices and market dynamics. A growing body of macroe
conomic literature focuses on constructing single financial indices as leading indicators for analyzing and
predicting business cycles(Brunnermeier et al. 2021). Analyzing the market through broad indices can often
oversimplify this intricate environment. At any given point in time, a stock market consists of a diverse
pool of individual stocks, each exhibiting varying returns. This collection of returns from different stocks in
the market forms a cross-sectional distribution, exhibiting the dispersion, skewness, and kurtosis of stock
performance within the market. Analyzing this distribution provides deeper insights into market dynamics
beyond aggregate indices, revealing how different segments of the market respond to economic conditions
and policy changes.
One method to capture these variations is by graphing the density functions. As shown in the upper left
panel of Figure 1, the S&P 500 in September 2008 and December 2018 experienced nearly identical overall
index returns. However, the corresponding density plots, constructed using kernel estimation of constituent
∗ping.wu@strath.ac.uk University of Strathclyde †dan.zhu@monash.edu Monash University
1
arXiv:2511.17140v2 [econ.GN] 25 Nov 2025

returns, reveal striking differences. In September 2008, the density plot displays fat tails, while in December
2018, it appears more normally distributed. A similar pattern is observed in China’s market (upper right
panel), where September 2008 and October 1999 share the same index level but exhibit completely different
cross-sectional return distributions. These distinct features of cross-sectional distributions during crises
despite identical index levels to non-crisis periods—suggest a deeper interconnection with macroeconomic
dynamics. In the literature, Kelly & Jiang (2014) extracted the time-varying tail index of returns from S&P
500 constituents, demonstrating its negative predictive power for real economic activity. Yet, focusing solely
on how the U.S. stock market moves with macroeconomic variables is inadequate, especially amid trade
wars and global political uncertainty. Poon et al. (2004) argue that the most efficient and effective way to
study extreme events is through a multivariate approach, that the U.S. market has the greatest influence on
other stock markets and one could expect that global financial market distributions tend to move together
(as shown in the lower panel of Figure 1 about 15 international indices).
In this paper, we study 15 stock markets worldwide and analyse the dynamic evolution of the cross
sectional distribution of stock returns. This distributional perspective provides a more granular view of
market behaviour, capturing shifts that aggregate indices may overlook. To summarise these distributions,
we employ two complementary methods that transform the histograms in Figure 1 into a set of factors for
each market at each point in time. The first method fits a skew-t distribution Azzalini & Capitanio (2003)
to the empirical returns, yielding four parameters, location, scale, skewness, and degrees of freedom, for
each of the 15 markets, and hence 60 factors in total. The second method approximates the log empirical
distribution function using an orthonormal Fourier basis Crain (1974), with cosine functions capturing
symmetric variation and sine functions capturing asymmetric variation. To ensure comparability across
markets, we use a common basis globally and apply a matrix-variate factor model Wang et al. (2019) to
obtain a parsimonious representation of distributional dynamics. We then combine these factors with key
U.S. macroeconomic indicators in a Vector Autoregression (VAR) to trace how monetary policy shocks and
macroeconomic fluctuations propagate through global financial systems.
Our framework expands the functional VAR literature Diebold et al. (2006) by jointly modelling multiple
time-varying functions and macroeconomic variables within a unified system. Whereas traditional functional
VARs typically analyse a single evolving function or treat several functions independently (Chang et al.
(2024), we introduce 15 cross-sectional return distributions simultaneously, enabling a richer characterisation
of global market dynamics. Both of our approaches extract interpretable, distribution-shaped factors that
summarise key features of the cross-section, thereby providing a transparent link between cross-sectional
return dynamics and macroeconomic conditions. The skew-t specification yields a fixed and economically
interpretable set of parameters for each market, though dimensionality grows linearly as more markets are
included. In contrast, the Fourier-based method produces equally meaningful distributional factors but,
when combined with a matrix-variate factor model, achieves substantial dimensionality reduction. This
leads to a scalable framework suited for large financial panels and other high-dimensional functional time
series applications. Taken together, these innovations allow us to capture global distributional dynamics in
a computationally efficient and conceptually unified manner.
We evaluate the forecasting performance of the proposed approaches by comparing them with models
that use standard global market factors. Our findings show that incorporating cross-sectional distributional
information from global financial markets—whether through the skew-t parameters or the orthonormal
basis coefficients—significantly improves the performance of the modeling in forecasting for macroeconomic
indicators, compared to using a single index from each market. In particular, the functional approach
2

-10 -5 0 5
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8 Sep 2008 Dec 2018 S&P500
-10 -5 0 5
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8 Oct 1999 Sep 2008 Shaghai SE
-10 -5 0 5
0
0.2
0.4
0.6 S&P 500
-10 -5 0 5
0
0.2
0.4
0.6 NASDAQ
-10 -5 0 5
0
0.2
0.4
0.6 FT All Share
-10 -5 0 5
0
0.2
0.4
0.6 STOXX Europe 600
-10 -5 0 5
0
0.2
0.4
0.6 Euro STOXX
-10 -5 0 5
0
0.2
0.4
0.6 German total market
-10 -5 0 5
0
0.2
0.4
0.6 AEX All share
-10 -5 0 5
0
0.2
0.4
0.6 Oslo Exchange All share
-10 -5 0 5
0
0.2
0.4
0.6 SBF 120
-10 -5 0 5
0
0.2
0.4
0.6 DS total market Australia
-10 -5 0 5
0
0.2
0.4
0.6 Australia All ord
-10 -5 0 5
0
0.2
0.4
0.6 Nikkei 225
-10 -5 0 5
0
0.2
0.4
0.6 Topix
-10 -5 0 5
0
0.2
0.4
0.6 Korea SE
-10 -5 0 5
0
0.2
0.4
0.6 Shanghai SE
Figure 1: Hidden Heterogeneity: Index return and empirical return distributions (cross-sectional density constructed from constitutes’ monthly price changes using kernel estimation). Upper panel: Two months with nearly identical returns on the overall S&P 500 and Shanghai SE index, yet with different empirical return distributions. Lower panel: Three months right before and the Global financial crisis. Blue: July 2008. Red: August 2008. Black: September 2008. Vertical lines: index return.
outperforms the skew-t specification by more effectively capturing complex distributional features, such
as multimodality, which is a crucial characteristic of stock returns (Han 2022) that the unimodal skew-t
distribution cannot adequately represent.
After assuring the out-of-sample performance, we move forward to the structural analysis. Following
(Bjørnland & Leitemo 2009), the structural VAR is identified using long-term restrictions. The mean
response of global financial markets is consistent with earlier patterns: stock markets worldwide decline after
U.S. monetary policy tightening, with the Shanghai Stock Exchange as the main exception. We also find a
notable drop in kurtosis in S&P 500 after both expansionary and contractionary U.S. monetary policy shocks,
indicating fewer extreme return movements. This result is only detectable because our specification models
the full return distribution rather than relying on aggregate indices. We further conduct conditional forecasts
(Chan et al. 2024) assuming the macroeconomy follows the Congressional Budget Office’s projections.
These findings carry key investment and policy implications. Lower kurtosis suggests reduced tail risk,
3

benefiting strategies such as volatility-selling and systematic option-writing. Expected increases in in
dustrial production and inflation favor inflation-sensitive assets—commodities, energy stocks, and value
equities—while higher interest rates challenge long-duration bonds, improving the appeal of short-duration
or floating-rate instruments. A steeper yield curve may advantage financial stocks, particularly banks.
Conditional forecasts also show that export-driven shocks generate standard contractions and disinflation,
whereas import-driven shocks produce temporary import substitution, mild cost-push pressures, and slight
disinflation. Overall, the results highlight how monetary policy shapes not just market levels but the
distribution of risks, underscoring the need for policymakers to incorporate distributional dynamics when
assessing macro-financial stability.
The remainder of the paper is organized as follows. Section 2 discusses the data and methodology,
detailing the proposed approaches for extracting distributional features from global stock markets and
linking them to U.S. macroeconomic conditions. Section 3 examines the distributional responses of global
stock markets to a U.S. monetary policy shock, shedding light on how such shocks propagate across markets.
Section 4 presents conditional forecasts, under the scenario of Congressional Budget Office’ current view of
the economy from 2025 to 2028. Finally, the appendix includes an out-of-sample forecasting horserace and
provides additional results to support the main findings.
2 Data and Econometric Methods
To setup the context, we consider M financial markets, m ∈ {1, ..., M }. At each point in time for each
market, fm,t denote the cross-sectional distribution of returns such that {yimt}Nm
i=1 are independent identi
cally distributed draws from these distributions with Nm denote the number of stocks listed in market m.
Assume that the support of these distributions are R, we propose two methods to extract the distributional
features, sm,t ∈ S ⊂ Rs that
fm,t(y) = f (y; sm,t), y ∈ R
where that simplifies the infinite dimensional problem of the distribution into a small set of parameters. We
shall call these parameters, spanning factors, as they are time-varying.
Note that this i.i.d. assumption is not as restrictive as it may seem. At each market and time period,
the returns from each company may follow its own distribution, i.e.,
Yimt | αi, sm,t ∼ f (· | αi, sm,t) .
Because company may not be observed consistently over time in each market, i.e., the S&P constituents
may vary over time, we are not interested in estimating the individual αi’s. Instead, we can observe
Yimt | sm,t ∼ f (· | sm,t) =
∫
f (· | α, sm,t) dπ(α),
where the marginal distribution integrates out the company-specific effect α according to the mixing distri
bution π(α).
A naive construction is to assume that returns are Gaussian, in which case the distribution is summarized
by its mean and variance. However, such a moment-based characterization is often inadequate for financial
markets, where return distributions typically exhibit skewness, heavy tails, volatility clustering, and other
departures from normality. In addition, financial markets are segmented across industries, geographies, and
4

market capitalizations, giving rise to heterogeneous and granular features in the cross-sectional distributions.
Stocks within a market differ in size, sector, and exposure to global economic forces, and these differences
are directly reflected in the distribution of returns. Market indices, such as the S&P 500, represent a special
case of this framework, as they focus only on the central tendency of the distribution while ignoring higher
order features. To capture the richer structure of return distributions, we propose two complementary
approaches: the first fits a skew-t distribution, and the second relies on a set of orthonormal basis functions
under an exponential family structure. Both methods are then applied to analyze the dependence between
global stock market returns and U.S. macroeconomic variables.
Given a finite set of factors St extracted from the financial markets, we propose a VAR framework
to jointly model the distributions of returns and macroeconomic variables, zt ∈ Rd. The VAR process
has a simple formulation and is powerful to capture both contemporaneous and dynamic dependencies.
Specifically, we define a Xt = [vec (St)′ , zt′
]′ as
Xt = b +
P ∑
p=1
BpXt−p + εt, εt ∼ N (0dim, Σ) . (1)
2.1 Data
The empirical analysis requires data that reflects global stock markets and U.S. economic conditions. We
therefore consider the following two datasets covering the period from January 1995 to April 2025 (1995:01
2025:04).
The first dataset comprises 15 stock indices worldwide, covering the U.S., the U.K., Europe, Japan,
South Korea, China, and Australia. All data series are on a monthly basis, using the last transaction date
within each month. All are sourced from Datastream. The U.S. macroeconomy is represented through four
key indicators: industrial production index (IP), consumer price index (CPI), trade balance (TB), and the
federal funds rate (FFR). This selection is motivated by Flannery & Protopapadakis (2002), where they
find nominal variables (e.g. CPI) are strongly correlated with stock market returns. All macro series are
available from the FRED-MD database. The complete list of variables and how they are transformed are
given in Appendix C.
2.2 Skew-t Distribution
The first method involves skew-t distributions. The skew-t distribution is a versatile statistical model
that extends the standard t-distribution by incorporating a skewness parameter, allowing it to capture
evidently asymmetric features in stock return data(Chang et al. 2013). It is characterized by four parameters:
location, scale, skewness, and degrees of freedom, which together provide the flexibility to model both
heavy tails and skewed distributions. This adaptability makes the skew-t distribution particularly useful in
financial applications, where return distributions often exhibit asymmetry and tail behavior that deviate
from normality.
In particular, we fit each fm,t using a skew-t density function of Azzalini & Capitanio (2003)
fm,t(y) = 2
σm,t
tνm,t
( y − μm,t
σm,t
)
Tvm,t +1


λm,t
√1 + νm,t
( y−μm,t
σm,t
)
( y−μm,t
σm,t
)2
+ νm,t


5

where tv and Tv denote the probability density and cumulative density function of student t distribution
with ν degree of freedom. The four parameters sm,t = (μm,t, σm,t, λm,t, νm,t)′ are obtained using maximum
likelihood estimation.
Due to the high dimensions, we use the asymmetric conjugate prior of Chan (2022). An important ad
vantage of this prior is that the conjugacy means analytical posterior results are available, thus reducing the
computational burden. We call this model sktVAR. In this analysis, we concentrate on the homoskedastic
VAR framework, where the assumption of constant variance over time simplifies the model. For our pur
pose of understanding macroeconomic dependence within the stock market distribution, this homoskedastic
approach captures the essential relationships and dynamics we are interested in, without the need to in
troduce additional complexity. While adding stochastic volatility could provide more detailed insights into
time-varying uncertainty, incorporating it is not technically difficult and can be done without significantly
altering the core structure of the model.
2.3 Matrix Variate functional data
While the skew-t distribution is highly flexible, it is inherently unimodal and therefore unable to represent
multimodal return distributions, as illustrated in Figure 1. In practice, multimodality frequently arises
in financial markets as a result of segmentation, where different groups of assets—distinguished by sector,
geography, or firm size—respond in distinct ways to macroeconomic shocks. These features are not static:
during periods of market stress or regime shifts, the relative importance of different segments changes, and
the cross-sectional distribution can evolve from unimodal to multimodal and back again. Menzly & Ozbas
(2010) provide empirical evidence that such segmentation induces clustering in cross-sectional returns,
highlighting the limitations of a unimodal framework and the need for methods that can accommodate
dynamically changing multimodal structures.
Moreover, empirical analysis across 15 global financial markets reveals that our procedure extracts 60
distributional factors. Despite the seemingly large number, these factors exhibit a clear low-dimensional
structure, with most of the variation concentrated in only a few dominant components, as shown in the scree
plots in Appendix. This finding suggests that the complex cross-market dynamics of returns can, in fact,
be summarized by a relatively small set of common drivers, providing both parsimony and interpretability
in our representation.
We set up a joint modelling strategy, that is
logfm,t(y) = Φ(y)′Ztβm − log
(∫
exp (Φ(x)′Ztβm) dx
)
(2)
where βm ∈ Rr2 denote a vector of market specific coefficients and
Φ(y) = [φ1(y), φ2(y), ..., φr1 (y)]′
denote a vector of basis function that
∫
φ2
j (y)dy = 1,
∫
φj(y)φj′ (y)dy = 0 for j6=j’
common across market spanning the functional space. Note here, we have sm,t = Ztβm, indicating that a
low-dimensional common factor drives the distributional features across various markets. This specification
is directly linked to the exponential family of distributions. In particular, the basis functions Φ(y) play the
6

role of sufficient statistics, while the coefficients Ztβm act as the corresponding natural parameters. The
normalizing integral ensures that the density integrates to one, analogous to the log-partition function in
the exponential family. Thus, our framework can be viewed as an exponential family approximation to
cross-sectional return distributions, where Φ(y) provides a flexible yet structured set of sufficient statistics
common across markets.
This specification is highly flexible, as the orthonormal basis expansion can approximate a wide range of
distributional shapes, including multimodal structures that arise under market segmentation or regime shifts.
Moreover, since the coefficients evolve with the common factors Zt, the framework naturally accommodates
time-varying and dynamic changes in the cross-sectional return distributions across global markets.1
2.3.1 An Iterative Algorithm
We implement an iterative procedure to estimate both the common factors and the market-specific coef
ficients, ensuring a robust decomposition of the cross-sectional return distributions. In each iteration, we
first estimate the common factors by holding the market-specific coefficients fixed, leveraging the shared
structure across markets to extract a low-dimensional representation of the underlying distributional dy
namics. Next, we update the market-specific coefficients, conditioning on the estimated common factors,
allowing each market’s return distribution to retain its unique characteristics while maintaining a coherent
global structure. In particular, we consider the following loglikelihood function
L(β, Z) =
T ∑
t=1
M ∑
m=1




N ∑m
j=1
Φ(yimt)′Ztβm

 − Nm log
(∫
exp (Φ(x)′Ztβm) dx
)
− γ
2
M ∑
m=1
β′
mβm
and
1. Given β1..., βm, for t = 1, ..., T
Zt = arg mZax
M ∑
m=1




N ∑m
j=1
Φ(yj mt )′ Z βm

 − Nm log
(∫
exp (Φ(x)′Zβm) dx
) 
2. Given Z1, ..., ZT , for m = r2 + 1, ..., M
βm = arg mβax
T ∑
t=1




N ∑m
j=1
Φ(yjmt)′Ztβ

 − Nm log
(∫
exp (Φ(x)′Ztβ) dx
)
− γ
2 β′
mβm
The alternating–maximization (update Z then β) yields monotone ascent and converges to a block-stationary
point shown in the Appendix.
Note that there is a subtle difference between our specification and that of Chang et al. (2024): while
they treat the macro variables and cross-sectional elements as part of the measurement equation, the
density function is considered unobserved. Their more sophisticated approach implies that the measurement
equation for the cross-sectional stock observations is nonlinear. In their paper, they linearize these equations
1Note that Zt and β′ = [β1, ..., βM ] are still left unidentified, as an invertible matrix U amounts to ZtU and U −1β′ observational equivalent. A straightforward identification scheme is to set the top r2 × r2 block as a lower triangular matrix, i.e., in a similar fashion as the standard factor model identification scheme in Bai & Wang (2015).
7

to avoid the complexities of a nonlinear filter. Implementation of their approach is possible in our case,
yet rather complicated, as it involves a multidimensional distribution where the sieve coefficients are cross
market dependent. Thus, we take the alternative route of treating the density as observed. To jointly model
with macro variables, zt, we specify Xt = [vec (Zt)′ , zt′
]′ as a VAR process defined in Equation (1) with
dim = (r1r2 + d). We call this model mvfVAR.
2.3.2 Functional Basis Properties: A Simulation Study
The choice of orthonormal basis functions is crucial for efficiently capturing salient distributional features.
Although many alternatives exist, such as Legendre polynomials, we adopt a Fourier basis because it
yields factors with clear and stable interpretations. Cosine functions span the symmetric component of
the distribution, while sine functions span the asymmetric component, providing an immediate economic
meaning to the extracted factors. Because the Fourier representation is a complete series expansion, this
symmetric-asymmetric decomposition carries through all higher-order terms: lower frequencies capture
broad features such as dispersion and skewness, whereas higher frequencies capture progressively finer
symmetric or asymmetric deviations. A simulation study further illustrates this property, showing that
cosine coefficients predominantly capture symmetric variation (e.g., volatility), while sine coefficients capture
asymmetric behaviour (e.g., skewness), resulting in an interpretable and structured representation of cross
sectional return distributions.
We design two data-generating processes (DGPs) to isolate these effects. The first DGP exhibits purely
symmetric time-varying volatility:
rt ∼ N (0, σ2
t ), (3)
σt = 1 + 0.5 · sin
(
2π t
200
) .
This process exhibits time-varying volatility but remains symmetric around zero at every point in time.
The second DGP incorporates both time-varying volatility and skewness using the Azzalini skew-t dis
tribution:
rt ∼ Skew-t(ν = 5, λt), (4)
σt = 1 + 0.5 · sin
(
2π t
300
) ,
λt = 0.5 · sin
(
2π t
100
) .
For each scenario, we generate T = 1000 time periods with N = 500 cross-sectional observations per
period. We approximate the log-density using a Fourier series expansion with one sine and one cosine term:
log fˆt(r) = z1,t sin(κr) + z2,t cos(κr) − log C(zt),
where κ is the frequency parameter and C(zt) is the normalizing constant. The coefficients z1,t (sine) and
z2,t (cosine) are estimated via maximum likelihood for each cross-section.
Figure 3 presents the key results across three panels that systematically demonstrate the distinct
roles of Fourier basis components. The mathematical properties of these functions-cosine being even
8

(cos(−x) = cos(x)) and sine being odd (sin(−x) = − sin(x))-align perfectly with the symmetric and asym
metric characteristics of return distributions. This alignment provides an interpretable decomposition where:
• Cosine coefficients exclusively capture symmetric changes (volatility, dispersion)
• Sine coefficients specifically capture asymmetric changes (skewness, distributional shape)
The clean separation of effects across DGPs validates that our functional approach can separately identify
these distinct aspects of distributional dynamics, which is crucial for understanding how different types of
economic shocks affect financial markets.
Bjørnland et al. (2023) use functional PCA to span the return distribution in a Hilbert space and interpret
the leading components as stability, tail-risk, and asymmetry factors. These interpretations are intuitive
and supported by plots of the associated density shifts. However, because functional principal components
are data-driven objects chosen solely to maximise explained variance, their shapes and consequently their
economic meaning, are inherently sample-dependent and identified only up to sign (and, when eigenvalues
are close, up to rotations). As a result, features such as skewness or tail behaviour may load across several
components, making the interpretation of any single factor somewhat fragile. Our Fourier representation
likewise spans the same Hilbert space, but does so using pre-specified cosine and sine functions. This
provides a decomposition directly aligned with symmetric and asymmetric components of the distribution,
yielding factors whose interpretation is stable across markets and over time, rather than relying on ex-post
inspection of sample-specific eigenfunctions.
Building on the insights from the simulation study, we apply the Fourier basis to real-world financial
returns. Consistent with the theoretical interpretation and controlled experiments, the cosine coefficient
captures symmetric features of returns, co-moving with market volatility and acting as an endogenous
volatility factor. The sine coefficient, by contrast, captures distributional asymmetry, with average val
ues ordered United States > Euro area > Asia, reflecting well-documented regional differences in return
skewness. Together, these factors provide a robust and economically meaningful separation of symmetric
and asymmetric components, demonstrating that the interpretable decomposition observed in simulations
carries over to actual market data. Details are in Appendix D.2.
2.3.3 Practical Considerations
The idea that variations across stock markets can be effectively modeled using a small number of factors is
both intuitive and practical, as it simplifies the complex dynamics of financial systems while retaining their
key features. However, determining the optimal number of factors is crucial to accurately capturing the
evolving return distributions across markets and over time. In the case of the skew-t distribution, which
relies on a parametric assumption about the underlying distribution, the factors are naturally interpreted
as the time-varying parameters, offering a straightforward approach to dynamic modeling. On the other
hand, mvfVAR provides a more flexible framework where the model itself does not prescribe the number
of factors but allows the data to inform this critical choice. This data-driven selection is achieved through
cross-validation, which evaluates model performance to guide the choice of factor dimensionality.
Under the i.i.d. assumption, the dataset is partitioned into estimation and validation subsets. For model
estimation, a randomly selected 75% of constituents per index is used to estimate the time-varying factors
and constant factor loadings. The remaining 25% of constituents per index serves as the validation set,
with performance measured by the sum of log-likelihoods across indices and over time. As shown in Table 1
9

shows that the model with r1 = 6, the number of basis functions, achieves a higher log likelihood compared
to specifications with r1 = 2 or r1 = 4. For r2, the log-likelihood values for one and two are quite similar,
with the former offering a more parsimonious dimensionality. Given this marginal difference, we adopt
r1 = 6, r2 = 2 in the main analysis to accommodate potential nonlinearities.
Table 1: Log likelihood for cross-validation (×106).
r2
123
r1
2 -3.238 - 4 -2.960 -3.062 -3.082 6 -2.730 -2.776 -2.874
2.4 Summary of Out-of-Sample Performance
To explore potential advantages of distributional features from global stock markets in enhancing the forecast
accuracy of the U.S. macroeconomy, and to assess whether our proposed model captures key characteristics
of return distributions, we conduct a forecasting exercise using the monthly data presented in the Appendix
C. The forecast performance of models is evaluated from Jan 2003 till the April 2025. Root mean squared
forecast errors (RMSFEs) are used to evaluate the quality of point forecasts and averages of log predictive
likelihoods (ALPLs) are used to evaluate the quality of density forecasts. Four models are considered: the
first model is a VAR, served as the benchmark, stacking 15 overall indices and the U.S. macro. The second
model is the proposed sktVAR model stacking skew t parameters(60 factors) and the macro. The third model
is our proposed mvfVAR model where factors are produced from 15 stock market return distributions. The
fourth model is a variant of mvfVAR, but based solely on the S&P 500 index.
Appendix E reports our forecasting results. When predicting macroeconomic aggregates, both mvf
VAR and sktVAR consistently outperform VAR in terms of data fit. This demonstrates that incorporating
distributional features, rather than relying solely on aggregate indices, provides significant advantages in
forecasting the macroeconomy. Additionally, mvfVAR, which accounts for the entire distribution of the
data, surpasses the performance of models that include sktVAR, highlighting the value of a more compre
hensive approach to distributional modeling. To assess the predictive accuracy of stock return distributions,
we compare the quantile scores generated by sktVAR and mvfVAR. While the two approaches show min
imal differences when forecasting middle quantile scores, the divergence becomes more pronounced at the
extremes. Specifically, mvfVAR consistently outperforms sktVAR in forecasting both upper and lower
quantile scores, with its advantage being particularly notable in the lower quantiles. Although the skew-t
distribution is sufficiently flexible to capture unimodal distributions and asymmetric features, it falls short
in addressing more complex behaviours, such as bimodality. In contrast, mvfVAR excels in such scenarios,
effectively capturing bimodal patterns that emerge during periods of heightened market divergence and
uncertainty(Han 2022). These bimodal behaviours often reflect shifts in market sentiment, driven by the
diverse sectoral representation of larger stock markets. This ability to model the nuances of extreme market
conditions further underscores mvfVAR’s superiority in capturing the full distributional dynamics of stock
returns. Finally, considering global indices is helpful to improve the forecasting performance compared to
focusing solely on the US.
While we have explored two formulations, the out-of-sample performance strongly favours the mvfVAR
model, indicating its superior predictive power. As a result, we base our subsequent structural analysis in
10

Section 3 and 4 on this model.
3 US Monetary Policy Shock—Global market response
The neutrality of monetary policy has been a longstanding debate among financial economists(Thorbecke
1997). According to pricing theory, stock prices reflect the expected present value of future net cash flows.
Therefore, if contractionary monetary shocks lead to lower stock returns, it suggests that tighter monetary
policy has real effects, either by reducing future cash flows or by increasing the discount rates used to value
them. This section contributes to the discussion by analyzing how stock returns react to monetary policy
shocks, providing empirical insights into their market impact. Instead of relying on a traditional single
index(Bjørnland & Leitemo 2009) or a portfolio of asset returns(Thorbecke 1997), our model captures the
full cross-sectional distribution, allowing for a more comprehensive assessment of how monetary policy
influences the entire spectrum of market behaviour.
To identify the shock, we follow the approach of Bjørnland & Leitemo (2009), assuming that monetary
policy has no long-run effect on real stock prices—a common long-run neutrality assumption. The key
difference in our analysis is the inclusion of a vector of stock market factors, as opposed to a single factor in
their framework. To address this, we impose further restrictions among the stock market factors by adopting
a simple Cholesky decomposition and enforcing a long-run zero restriction on the responses of these factors
to the monetary policy shock. Impulse response functions (IRFs) are from our proposed mvfVAR model
with one lag in the VAR. Firstly, we find the responses of the macro variables (reported in Appendix F) to
a monetary policy shock are consistent with standard macroeconomic theory: a contractionary monetary
policy shock induces a contraction in output, and a reduction in prices. These findings are consistent with
theoretical expectations and help validate the robustness and accuracy of our model. Interestingly, we
do not find a J-curve for trade balance.2 Our finding reveals a strong fast effect, followed by a gradual
long-term normalization. This aligns with modern financial market dynamics, wherein short-term capital
flows exert a dominant influence on immediate external balance responses, while longer-run adjustments
unfold through real-sector channels. The absence of a J-curve suggests that financial globalization has
fundamentally altered the transmission mechanism of monetary policy to trade flows.
Our focus here is on the functional impulse response functions (FIRFs). In a linear VAR framework that
incorporates only the stock index, contractionary and expansionary monetary policy shocks will exhibit
symmetric effects, merely shifting the index in opposite directions. Our framework enables us to uncover
asymmetric effects of contractionary and expansionary monetary policy shocks, even at the cross-sectional
mean of returns as it is no longer a linear mapping of the structural shocks. Unlike a standard linear
VAR that assumes symmetric responses, our approach captures differences in magnitude, persistence, and
market segmentation between the two directional shocks, revealing that contractionary policy tends to have
a stronger and more immediate impact on stock returns, while expansionary policy generates a more gradual
and muted effect. The FIRFs for log density can be obtained directly from the model (see Equation 2).
Table 2 reports the changes for the first four moments of the distributions: mean, variance, skewness, and
kurtosis.
• Contractionary U.S. monetary policy reduces stock market indices by raising interest rates, increasing
2For example, Kim (2001) finds that following an expansionary monetary policy shock, the trade balance would first worsen for about one year, then improve. Given the symmetry inherent in standard VAR models, a similar but reversed pattern would be expected for a contractionary monetary shock.
11

borrowing costs, and lowering corporate profits. Higher yields make equities less attractive, prompt
ing a market shift consistent with Bjørnland & Leitemo (2009), Thorbecke (1997). Tighter liquidity
dampens sentiment, slowing economic activity. Crucially, these effects are heterogeneous across equity
classes: growth-oriented stocks (e.g., NASDAQ constituents) exhibit asymmetric sensitivity, declin
ing less during monetary tightening but rallying more aggressively during easing cycles—a pattern
attributable to their longer-duration cash flows and higher elasticity to discount rate changes.
• These domestic equity market dynamics propagate globally through integrated financial markets.
Higher U.S. yields trigger capital repatriation from foreign markets (Rey 2015), further amplified
by that international investors recalibrate growth forecasts based on U.S. monetary policy signals
(Miranda-Agrippino & Rey 2020).
• The positive values from ’Variance’ column indicate that a positive monetary policy shock boost the
stock market volatility as found in Bomfim (2003). We are finding that contractionary shocks elevate
the variance more than expansionary shocks reduce it. This asymmetry aligns with the Federal
Reserve’s tendency to cushion market downturns while allowing rallies to persist, as documented
by Rigobon & Sack (2003). The heightened volatility response to tightening shocks suggests that
investors perceive monetary contractions as more disruptive to market stability than expansions are
beneficial, reflecting an asymmetric risk perception in financial markets. While broadly consistent
with this pattern, the Shanghai Stock Exchange exhibits slightly lower volatility responses compared
to other major markets. This modest difference likely reflects China’s use of countercyclical policies
aimed at stabilizing domestic growth. The relative resilience of Chinese equities suggests that they
may offer a limited hedge against volatility arising from U.S. monetary tightening, providing investors
with a potential, though partial, risk diversification channel.
• There is little academic research on how monetary policy affects the higher moments of return dis
tributions, but our finding suggest that Asian equity markets are more vulnerable compared to their
European counterparts. This likely reflects differences in sectoral composition. Relative to Europe,
indices in Japan, Korea, and China are more heavily concentrated in cyclical and export-oriented
sectors—such as technology, manufacturing, and consumer electronics—which are more vulnerable to
U.S. monetary tightening. This structural exposure amplifies downside risk and contributes to the
observed asymmetry in return distributions.
• The Oslo Stock Exchange responded sharply to U.S. monetary policy, reflecting its sensitivity to global
financial conditions and commodity markets. Norway’s economy, heavily reliant on oil exports, faced
further volatility as higher U.S. rates often dampen global demand expectations, leading to declining
oil prices.
While we impose long-term zero restrictions on the effect of monetary policy shocks, ensuring that their
influence is constrained over an extended horizon, our analysis reveals that the impact of these shocks
on global stock markets dissipates within a relatively short timeframe, see Table 8and 9 in Appendix.
Specifically, the effect on mean calms down quickly (after 1 month), suggesting that the transmission of
monetary policy shocks to equity markets operates primarily over a shorter-term horizon. Higher moments
need a little more time and the effect becomes negligible after nine months. This finding underscores the
transient nature of monetary policy’s influence on global stock market dynamics.
12

Table 2: Changes in the four moments of return distributions at horizon h = 0.
Mean Volatility Skewness Kurtosis Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary S&P 500 0.26 -0.18 -0.01 0.33 -0.57 -0.01 -3.34 -3.4
(0.01, 0.47) (-0.42, -0.05) (-0.01, -0.01) (0.27, 0.36) (-1.58, 0.25) (-0.07, 0.12) (-3.42, -3.06) (-3.41, -3.36) NASDAQ 0.32 -0.17 -0.14 0.15 -0.8 0.13 2.93 -0.19
(0.12, 0.46) (-0.27, -0.07) (-0.15, -0.12) (0.11, 0.18) (-2.20, -0.27) (0.07, 0.18) (1.07, 9.49) (-0.21, -0.16) FT All Share 0.1 -0.12 -0.07 0.29 0.09 0.02 0.21 -0.62
(-0.08, 0.29) (-0.23, -0.04) (-0.07, -0.07) (0.25, 0.30) (-0.53, 0.74) (-0.03, 0.07) (-0.56, 2.90) (-0.63, -0.61) Europe 600 0.14 -0.11 -0.1 0.25 -0.01 0.01 2.57 -0.4
(0.01, 0.29) (-0.19, -0.02) (-0.10, -0.10) (0.22, 0.27) (-0.54, 0.39) (-0.03, 0.06) (-0.07, 6.18) (-0.41, -0.38) EURO STOXX 0.14 -0.11 -0.1 0.25 0 0.01 2.64 -0.39
(0.01, 0.28) (-0.19, -0.02) (-0.10, -0.10) (0.22, 0.27) (-0.53, 0.41) (-0.03, 0.06) (-0.06, 6.22) (-0.40, -0.38) German 0.14 -0.1 -0.13 0.23 -0.1 0.02 4.89 -0.29
(0.02, 0.28) (-0.18, -0.03) (-0.13, -0.12) (0.20, 0.24) (-0.57, 0.23) (-0.01, 0.06) (0.87, 6.39) (-0.29, -0.27) AEX All Share 0.14 -0.11 -0.12 0.24 -0.06 0.02 4.33 -0.32
(0.02, 0.28) (-0.18, -0.02) (-0.12, -0.12) (0.20, 0.25) (-0.56, 0.29) (-0.02, 0.06) (0.44, 6.36) (-0.33, -0.30) Oslo 0.19 -0.11 -0.14 0.21 -0.47 0.05 5.04 -0.24
(0.06, 0.34) (-0.20, -0.05) (-0.15, -0.14) (0.19, 0.23) (-1.03, -0.12) (0.02, 0.10) (2.77, 6.43) (-0.24, -0.22) SBF 120 0.14 -0.11 -0.11 0.24 -0.05 0.02 3.75 -0.35
(0.01, 0.28) (-0.19, -0.02) (-0.11, -0.11) (0.21, 0.26) (-0.56, 0.31) (-0.02, 0.06) (0.22, 6.33) (-0.35, -0.33) DS Australia 0.13 -0.1 -0.12 0.23 -0.05 0.02 4.55 -0.31
(0.01, 0.27) (-0.18, -0.02) (-0.12, -0.12) (0.20, 0.25) (-0.54, 0.31) (-0.02, 0.06) (0.59, 6.34) (-0.31, -0.29) Australia 0.18 -0.1 -0.14 0.21 -0.41 0.04 4.98 -0.23
(0.06, 0.33) (-0.19, -0.04) (-0.15, -0.14) (0.19, 0.22) (-0.91, -0.08) (0.01, 0.09) (2.87, 6.27) (-0.24, -0.22) Nikkei 0.13 -0.1 -0.13 0.23 -0.06 0.02 4.92 -0.28
(0.02, 0.27) (-0.17, -0.02) (-0.13, -0.13) (0.19, 0.24) (-0.53, 0.27) (-0.02, 0.06) (0.92, 6.52) (-0.29, -0.27) Topix 0.17 -0.1 -0.14 0.22 -0.26 0.03 5.07 -0.26
(0.03, 0.28) (-0.19, -0.03) (-0.14, -0.13) (0.19, 0.23) (-0.62, 0.09) (-0.00, 0.07) (1.63, 6.35) (-0.26, -0.24) Korea 0.16 -0.1 -0.14 0.21 -0.22 0.03 5 -0.23
(0.03, 0.27) (-0.18, -0.03) (-0.15, -0.14) (0.18, 0.22) (-0.59, 0.10) (-0.00, 0.07) (2.23, 6.28) (-0.24, -0.22) SHANGHAI SE 0.17 -0.1 -0.16 0.19 -0.29 0.04 4.7 -0.19
(0.04, 0.28) (-0.17, -0.03) (-0.17, -0.15) (0.17, 0.20) (-0.65, 0.01) (0.01, 0.07) (2.73, 6.43) (-0.19, -0.17) Values in the bracket are the 16% and 84% confidence intervals. In order to optimize space utilization, a series of abbreviations were employed, each representing: Europe 600 for STOXX Europe 600, German for German total market, Oslo for Oslo Exchange All Share, DS Australia for DS total market Australia, Australia for Australia All ordinaries, Nikkei for Nikkei 225 Stock, Korea for Korea-
 Stock Exchange.
Complementing the Fourier basis results, our skew-t distribution analysis yields consistent patterns:
expansionary shocks increase output, inflation, trade balances, and equity prices. Notably, the VAR model
reveals symmetric responses for mean and skewness changes - contractionary shocks reduce these variables
with magnitudes mirroring expansionary effects. For volatility and kurtosis, logarithmic transformations in
the VAR specification produce asymmetric responses to large shocks in initial periods, while maintaining
symmetry in their underlying positive domains.3
4 From Deficits to Dispersion: The Sectoral and Policy Implica
tions of U.S. Trade Balance
As the U.S. enters 2025 with a projected trade deficit of 3.2% of GDP (Congressional Budget Office 2024),
fundamental changes in global trade patterns are reshaping how external imbalances transmit to financial
markets and monetary policy. Three structural shifts—shortening global technology supply chains, recon
figuration of energy trade flows, and productivity ambiguities from nearshoring (Freund et al. 2024)—have
altered traditional transmission mechanisms and sectoral sensitivities to trade shocks. Early 2025 market
data confirm this realignment: technology equities have underperformed historical norms, while energy and
financial stocks have outperformed during periods of widening trade deficits.
These developments underscore the limitations of analyzing trade through net balances alone. The
same trade deficit can mask fundamentally different underlying economic conditions—whether driven by
weak external demand or strong domestic absorption—with distinct implications for inflation, output, and
financial stability. We therefore analyze these dynamics through a conditional forecasting framework that
separately identifies the effects of export and import shocks within a unified VAR model, providing a more
nuanced understanding of how trade composition, rather than just net balances, affects the macroeconomy.
3We compute the IRFs of volatility and kurtosis by: suppose zt denotes volatility/kurtosis, let yt = log(zt), that is zt = eyt . Then the IRF for zt is E [zt|shock] − E [zt|no shock] = exp (E [yt|shock]) − exp (E [yt|no shock]) = exp (IRFyt + log z0) − exp (log z0) = z0
(eIRFy − 1). z0is the pre-shock level of z.
13

We estimate a Bayesian VAR containing five key U.S. variables: industrial production (IP), CPI inflation,
exports, imports, and the federal funds rate. Using the conditional forecasting approach of (Chan et al.
2024), we conduct two distinct forecasting exercises that leverage Congressional Budget Office projections
for 2025 (from May to October 2025).4 The first exercise imposes the CBO’s export path, fixing the
import at the current value while allowing other variables to respond endogenously, cleanly identifying
external demand shocks. The second imposes the CBO’s import path and fixing export at the current value,
capturing domestic absorption shocks. This unified framework ensures consistent parameter estimates and
error structure across both exercises, providing a robust basis for comparing how different trade components
transmit through the economy.
4.1 The Macroeconomic Propagation of a Negative Export Shock
Figure 2 left panel examines how a negative export shock propagates through the economy, illustrating
a transmission mechanism that accords with standard open-economy theory. The immediate effect is a
contraction in industrial production (INDPRO, top panel), as reduced external demand lowers the level of
domestic output. This decline opens a negative output gap, which in turn generates a clear but moderate
disinflationary impulse. The conditional path for CPI inflation lies up to 0.8 percentage points below
its unconditional projection, suggesting a meaningful although not destabilizing reduction in inflationary
pressures.
The response of monetary policy provides an informative perspective on the magnitude of the shock. The
conditional forecast for the federal funds rate (FFR, bottom panel) falls below the baseline but only modestly
so, indicating a more accommodative stance that remains well within the bounds of policy gradualism. This
muted adjustment is consistent with a Taylor-type policy rule (Clarida et al. 2000): a pure demand shock
that depresses both output and inflation warrants a reduction in the policy rate, but the extent of easing
is proportional to the size of these deviations. Given the limited scale of the disinflation, a forceful easing
cycle is neither required nor optimal. This behavior aligns with a monetary authority intent on maintaining
well-anchored inflation expectations and avoiding excessive responses to transitory disturbances (Bernanke
2007).
4.2 The Domestic Adjustment to a Negative Import Shock
We now contrast the previous analysis by considering a shock to domestic demand, imposed by conditioning
the model on a path of declining import growth while holding exports fixed at their current level. This
arrangement isolates a contraction in domestic absorption from movements in external demand. The re
sulting dynamics, shown in right panel, reveal a more intricate adjustment process than in the export shock
scenario.
The conditional forecast (red lines) for industrial production displays a notably different profile: output
initially rises above the unconditional path (blue) for roughly ten periods before converging. This early
expansion is consistent with short-run import substitution and inventory adjustment, whereby domestic
producers temporarily replace goods that would otherwise have been imported. As this substitution effect
fades and weaker domestic demand takes hold, output gradually slips slightly below the unconditional
4The porjection is available here https://www.cbo.gov/publication/61236. The project is quarterly and we convert to a monthly frequency using linear interpolation.
14

projection. The overall pattern underscores the presence of offsetting short-run and medium-run forces
absent in the export shock case.
Inflation dynamics similarly exhibit a two-stage adjustment. CPI inflation rises briefly above the baseline,
reflecting transient cost-push pressures stemming from reduced import availability. This effect is short-lived
and is quickly overtaken by the disinflationary consequences of a negative output gap. The conditional
inflation path therefore falls below the unconditional forecast for most of the horizon, mirroring but not
matching the magnitude of the response under the export shock.
The monetary policy response is strikingly modest. The conditional federal funds rate path is virtually
identical to the unconditional one, indicating that the central bank perceives little need for meaningful
adjustment. The opposing elements of the shock—temporary inflationary pressures combined with only
mild and partially offsetting output effects—leave the optimal policy rate largely unchanged. As before,
this outcome reflects a reaction function that emphasizes policy smoothing and the preservation of well
anchored expectations.
2024.5 2025 2025.5 2026 2026.5 2027 2027.5
-0.2
-0.1
0
0.1
2024.5 2025 2025.5 2026 2026.5 2027 2027.5
0
0.02
0.04
2024.5 2025 2025.5 2026 2026.5 2027 2027.5
0.09
0.092
0.094
2024.5 2025 2025.5 2026 2026.5 2027 2027.5
0.11
0.12
0.13
0.14
2024.5 2025 2025.5 2026 2026.5 2027 2027.5
4
4.5
5
2024 2024.5 2025 2025.5 2026 2026.5 2027 2027.5
-0.2
-0.1
0
0.1
INDPRO
2024 2024.5 2025 2025.5 2026 2026.5 2027 2027.5
0
0.02
0.04
CPI
2024 2024.5 2025 2025.5 2026 2026.5 2027 2027.5
0.09
0.092
0.094
0.096
EXPORT
2024 2024.5 2025 2025.5 2026 2026.5 2027 2027.5
0.11
0.12
0.13
0.14
IMPORT
2024 2024.5 2025 2025.5 2026 2026.5 2027 2027.5
4
4.5
5
FFR
Figure 2: Left panel: Macroeconomic Effects of Export Conditioning. Conditional forecasts (red) imposing CBO export projections versus unconditional forecasts (blue). Right panel: Macroeconomic Effects of Import Conditioning. Conditional forecasts (red) imposing CBO import projections versus unconditional forecasts (blue).
4.3 Financial market implications
Table 3 reveals striking heterogeneity in how global equity markets price tail risks from U.S. trade shocks,
with clear patterns driven by sectoral composition and economic structure.
Technology Concentration Drives Extreme Vulnerability: The NASDAQ exhibits by far the
largest Expected Shortfall estimates (conditional ES: -4.94% to -5.96%), reflecting technology stocks’ unique
sensitivity to demand shocks. This magnitude—approximately 15-20 times larger than the S&P 500’s
stems from several factors: high operating leverage amplifies earnings sensitivity to revenue fluctuations,
elevated valuation multiples compound price impacts, and global supply chain dependencies create complex
transmission channels. South Korean equities, similarly concentrated in semiconductors and technology
exports, show comparable vulnerability (-4.27% to -4.44% ES), confirming this as a sectoral rather than
geographic phenomenon.
Commodity Exporters Face Significant Exposure: Oslo (-2.65% to -2.75% ES) and Australian
markets (-3.34% to -3.55% ES) display substantial tail risk, consistent with commodity exporters’ sensitiv
15

ity to global demand fluctuations. The divergence between these two resource-heavy markets likely reflects
composition differences: Australia’s broader mining sector versus Norway’s energy concentration. Both,
however, significantly outperform the technology-heavy indices, suggesting different transmission mecha
nisms for commodity versus tech trade shocks.
European Markets Show Moderate, Homogeneous Risk: Major European indices cluster in a narrow
band (-0.94% to -1.53% ES), with remarkable consistency across regional (Europe 600, EURO STOXX)
and national (German, French, Dutch) benchmarks. This homogeneity suggests deeply integrated capital
markets and similar sectoral exposures across European economies. Germany’s slightly elevated risk (-1.39%
to -1.45% ES) may reflect its greater export orientation within the European bloc.
U.S. Diversification Provides Exceptional Resilience: The S&P 500’s remarkably low ES esti
mates (-0.24% to -0.32% ES)—an order of magnitude smaller than the NASDAQ’s—highlights the powerful
diversification benefits of broad market exposure. While specific sectors face substantial trade vulnerability,
the aggregate U.S. market appears well-insulated, likely due to its domestic demand orientation and sectoral
balance.
China’s Moderate Risk Challenges Conventional Narratives: The Shanghai Composite’s mid
range vulnerability (-2.11% to -2.26% ES) contradicts crisis narratives about Chinese financial fragility.
Several factors may explain this resilience: capital controls insulate domestic markets from sudden outflows,
policy buffers allow rapid response to external shocks, and the market’s retail investor base may be less
sensitive to trade fundamentals than institutional investors in developed markets.
The clear sectoral patterns—technology extreme risk, commodities significant risk, diversified moderate
risk—suggest that trade shock transmission operates primarily through industrial channels rather than
broad financial contagion. This has important implications for portfolio construction and risk management,
particularly the value of cross-sectoral diversification in mitigating trade-related tail risks.
Table 3: Expected Shortfall at h = 0.
Positive demand shock Negative demand shock
Conditional Unconditional Conditional Unconditional
S\&P 500 -0.32 -0.29 -0.29 -0.24
NASDAQ -4.94 -4.81 -5.96 -5.61
FT All Share -1.17 -1.12 -1.06 -0.96
Europe 600 -1.11 -1.05 -0.99 -0.94
EURO STOXX -1.12 -1.06 -0.99 -0.94
German -1.45 -1.39 -1.33 -1.28
AEX All Share -1.60 -1.53 -1.46 -1.40
Oslo -2.75 -2.65 -2.72 -2.61
SBF 120 -0.98 -0.94 -0.80 -0.75
DS Australia -1.23 -1.18 -1.11 -1.06
Australia -3.55 -3.42 -3.47 -3.34
Nikkei -1.85 -1.77 -1.69 -1.63
Topix -1.92 -1.84 -1.80 -1.74
Korea -4.44 -4.27 -4.18 -4.04
SHANGHAI SE -2.26 -2.18 -2.16 -2.11
16

5 Conclusion
This paper proposes incorporating distributional features of global financial markets into a macroeconomic
model. The analyses explore and provide insights into the complex dependence between global stock mar
kets and U.S. economic conditions. We find two-way spillovers. One is the significant functional impulse
response functions to a U.S. monetary policy shock, particularly a reduction in mean returns and a slight
increase in volatility, with the Shanghai Stock Exchange as the exception, exhibiting a contrasting upward
trend. These findings highlight the varying sensitivities of global markets to U.S. policy shifts, driven
by differences in market structures, capital controls, and economic linkages. Additionally, our conditional
forecasts based on CBO projections reveal differentiated effects of demand shocks. Export-driven exter
nal shocks trigger conventional contractions and disinflation, while import-driven domestic shocks produce
nuanced adjustments—including short-term import substitution, transient cost-push pressures, and mild
disinflation—accompanied by modest monetary responses. Mapping these shocks to expected equity short
falls shows pronounced heterogeneity: technology-heavy indices are highly vulnerable, commodity exporters
face distinct exposure, diversified benchmarks like the S&P 500 are resilient, and China occupies an inter
mediate position.
These findings demonstrate that trade-shock transmission operates through sharply sector-specific chan
nels, underscoring the importance of integrating macroeconomic dynamics with financial tail risks. Rec
ognizing these interdependencies is crucial for policymakers to anticipate the macroeconomic consequences
of market fluctuations and design effective responses to global financial shocks, offering a more nuanced
perspective on financial stability and policy formulation.
References
Azzalini, A. & Capitanio, A. (2003), ‘Distributions generated by perturbation of symmetry with empha
sis on a multivariate skew t-distribution’, Journal of the Royal Statistical Society Series B: Statistical
Methodology 65(2), 367–389.
Bai, J. & Wang, P. (2015), ‘Identification and bayesian estimation of dynamic factor models’, Journal of
Business & Economic Statistics 33(2), 221–240.
Bernanke, B. (2007), Inflation expectations and inflation forecasting, Technical report, Board of Governors
of the Federal Reserve System (US).
Bjørnland, H. C., Chang, Y. & Cross, J. (2023), ‘Oil and the stock market revisited: A mixed functional
var approach’, Manuscript, BI Norwegian Business School and Indiana University. .
Bjørnland, H. C. & Leitemo, K. (2009), ‘Identifying the interdependence between us monetary policy and
the stock market’, Journal of Monetary Economics 56(2), 275–282.
Bomfim, A. N. (2003), ‘Pre-announcement effects, news effects, and volatility: Monetary policy and the
stock market’, Journal of Banking & Finance 27(1), 133–151.
Boyd, S. P. & Vandenberghe, L. (2004), Convex optimization, Cambridge university press.
Brunnermeier, M., Palia, D., Sastry, K. A. & Sims, C. A. (2021), ‘Feedbacks: financial markets and economic
activity’, American Economic Review 111(6), 1845–1879.
17

Chan, J. C. (2022), ‘Asymmetric conjugate priors for large bayesian vars’, Quantitative Economics
13(3), 1145–1169.
Chan, J. C., Pettenuzzo, D., Poon, A. & Zhu, D. (2024), ‘Conditional forecasts in large bayesian vars with
multiple equality and inequality constraints’, arXiv preprint arXiv:2407.02262 .
Chang, B. Y., Christoffersen, P. & Jacobs, K. (2013), ‘Market skewness risk and the cross section of stock
returns’, Journal of Financial Economics 107(1), 46–68.
Chang, M., Chen, X. & Schorfheide, F. (2024), ‘Heterogeneity and aggregate fluctuations’, Journal of
Political Economy 132(12), 000–000.
Clarida, R., Gali, J. & Gertler, M. (2000), ‘Monetary policy rules and macroeconomic stability: evidence
and some theory’, The Quarterly journal of economics 115(1), 147–180.
Congressional Budget Office (2024), The budget and economic outlook: 2025 to 2035, Report, Congressional
Budget Office. Accessed July 2025.
URL: https://www.cbo.gov/publication/61189
Crain, B. R. (1974), ‘Estimation of distributions using orthogonal expansions’, The annals of statistics
2(3), 454–463.
Diebold, F. X. & Mariano, R. S. (2002), ‘Comparing predictive accuracy’, Journal of Business & economic
statistics 20(1), 134–144.
Diebold, F. X., Rudebusch, G. D. & Aruoba, S. B. (2006), ‘The macroeconomy and the yield curve: a
dynamic latent factor approach’, Journal of econometrics 131(1-2), 309–338.
Flannery, M. J. & Protopapadakis, A. A. (2002), ‘Macroeconomic factors do influence aggregate stock
returns’, The review of financial studies 15(3), 751–782.
Freund, C., Mattoo, A., Mulabdic, A. & Ruta, M. (2024), ‘Is us trade policy reshaping global supply
chains?’, Journal of International Economics 152, 104011.
Geweke, J. (2001), ‘Bayesian econometrics and forecasting’, Journal of Econometrics 100(1), 11–15.
Han, C. (2022), ‘Bimodal characteristic returns and predictability enhancement via machine learning’,
Management Science 68(10), 7701–7741.
Kelly, B. & Jiang, H. (2014), ‘Tail risk and asset prices’, The Review of Financial Studies 27(10), 2841–2871.
Kim, S. (2001), ‘International transmission of us monetary policy shocks: Evidence from var’s’, Journal of
monetary Economics 48(2), 339–372.
Menzly, L. & Ozbas, O. (2010), ‘Market segmentation and cross-predictability of returns’, The Journal of
Finance 65(4), 1555–1580.
Miranda-Agrippino, S. & Rey, H. (2020), ‘Us monetary policy and the global financial cycle’, The Review
of Economic Studies 87(6), 2754–2776.
Poon, S.-H., Rockinger, M. & Tawn, J. (2004), ‘Extreme value dependence in financial markets: Diagnostics,
models, and financial implications’, The Review of Financial Studies 17(2), 581–610.
18

Rey, H. (2015), Dilemma not trilemma: the global financial cycle and monetary policy independence,
Technical report, National Bureau of Economic Research.
Rigobon, R. & Sack, B. (2003), ‘Measuring the reaction of monetary policy to the stock market’, The
quarterly journal of Economics 118(2), 639–669.
Thorbecke, W. (1997), ‘On stock market returns and monetary policy’, The Journal of Finance 52(2), 635
654.
Wang, D., Liu, X. & Chen, R. (2019), ‘Factor models for matrix-valued high-dimensional time series’,
Journal of econometrics 208(1), 231–248.
19

Appendices - for online publication only
A Theoretical Results: Algorithm Convergence
The objective is non-convex in Z, β jointly due to their bilinear coupling, so alternating maximization could
in principle stall, cycle, or converge to non-informative points without guarantees(Boyd & Vandenberghe
2004). This section gives convergence result ensures monotone ascent and that any limit point is a stationary
solution of the likelihood, which under our (standard) exponential-family assumptions further yields a
linear rate—giving reliable stopping rules, runtime predictability, and reproducibility. It also clarifies which
modeling choices (e.g., bounded bases like Fourier and compact parameter sets) are sufficient for these
guarantees, guiding practical implementations.
Assumption 1. {Zt}tT=1 and {βm}m M=1 are restricted to a closed and convex set D that is consistent with
the identification restrictions.
Assumption 2. Let Φ : X → Rr be the basis vector. Assume all integrals are w.r.t. Lebesgue (or counting)
measure and write
|S| :=
∫
S
1 dx > 0.
Suppose:
(AΦ1) ‖Φ(x)‖ ≤ B ∀x,
(AΦ2) ∃ S ⊆ X with |S| > 0 such that ΣS := 1
|S|
∫
S
(Φ(x) − μS
)(Φ(x) − μS
)⊤ dx λ0I,
μS := 1
|S|
∫
S
Φ(x) dx, λ0 > 0.
We first impose a uniform bound on the basis vector, keeping scores and Fisher information finite and
yielding block-Lipschitz smoothness of the objective. Further, we require that on some subset S of positive
measure the features are not collinear—i.e., their covariance is uniformly positive definite—so the Fisher
information is bounded below.
These are standard regularity conditions for exponential families (bounded sufficient statistics and
uniformly positive-definite information) used to ensure identifiability, well-posed MLEs, and the convergence
guarantees of EM/coordinate-ascent and Newton-type methods. They are readily met by common bounded
bases (Fourier, splines, orthogonal polynomials) on compact supports.
Lemma 1. For θ ∈ Rd, define
pθ(x) = exp{Φ(x)⊤θ}
∫ exp{Φ(u)⊤θ} du , A(θ) = log
∫
exp{Φ(u)⊤θ} du.
Then there exists μ > 0 such that, for all θ ∈ Θ,
∇2A(θ) = Varpθ [Φ(X)] μI.
Proof. Let Θ := {Ztβm : (Z, β) ∈ D, t, m} and by Assumption 1 Θ is compact. Thus,
M := sup
θ∈Θ
‖θ‖ < ∞.
i

Boundedness (AΦ1) gives, for x ∈ S,
e−BM ≤ eΦ(x)⊤θ ≤ eBM .
Hence the probability of S under pθ is uniformly positive:
pθ(S) ≥ ρ > 0, ∀θ ∈ Θ.
Variance decomposition yields
Varpθ [Φ] pθ(S) Varpθ [Φ | X ∈ S].
Let r be the Lebesgue on S and qθ := pθ(· | X ∈ S), we have
e−2BM ≤ dqθ
dr ≤ e2BM
on S. By Assumption 2, it gives
Varpθ [Φ | X ∈ S] = Varqθ [Φ] e−2BM Varr[Φ] =: c(M, B) Var[Φ | X ∈ S].
Combining these bounds gives
Varpθ [Φ] ρ c(M, B) λ0
} {{ }
:=μ
I, ∀θ ∈ Θ.
The intuition of this result is that on some subset S of positive measure/mass, the components of the
basis vector are not collinear—the covariance/Gram matrix is uniformly positive definite with minimal
eigenvalue.
We now move on to identification, such that
β=
[
Ir2
β ̃
]
.
Corollary 1. Under the identification scheme,
L(Z, β) =
T ∑
t=1
M ∑
m=1


Nm,t
∑
j=1
Φ(yjmt)⊤Ztβm − Nm,t A(Ztβm)

 , A(θ) = log
∫
exp{Φ(x)⊤θ} dx.
F := −L is block-smooth and block-strongly convex, if there is no nonzero direction v ∈ Rr1 such that for
every t with Nm,t > 0,
log fi,t(x)
fj,t(x) = at + bt v⊤Φ(x) for some at, bt ∈ R and all x, i 6= j <= r2.
ii

Proof. Step 1 (The Zt-block). Fix t. The negative Hessian with respect to Zt is
−∇2
Zt lt =
∑
m
Nm,t (βm ⊗ I) ∇2A(Ztβm) (β⊤
m ⊗ I).
By uniform convexity,
−∇2
Zt lt μ
∑
m
Nm,t (βmβ⊤
m ⊗ I).
Since {β1, . . . , βr2 } are the canonical basis vectors e1, . . . , er2 under the chosen identification, we obtain
r ∑2
m=1
Nm,t βmβ⊤
m = diag(N1,t, . . . , Nr2,t) Nmin,t Ir2 ,
where Nmin,t = min1≤m≤r2 Nm,t. Thus
−∇2
Zt lt μNmin,t (Ir2 ⊗ I),
which shows that the Zt-block is positive definite uniformly in t.
Step 2 (The β-block). The negative Hessian with respect to βm is
−∇2
βl =
∑
t
Nm,t Z⊤
t ∇2A(Ztβm) Zt μ
∑
t
Nm,t Z ⊤
t Zt.
Without the loss of generality, we shall examine r2 = 2 case such that
f1,t(x) = exp (Φ(x)Zt,1 − A(Zt,1)) f2,t(x) = exp (Φ(x)Zt,2 − A(Zt,2)) .
We have
log
( f1,t(x) f2,t(x)
)
= Φ(x)(Zt,1 − Zt,2) − A(Zt,1) + A(Zt,2).
If there is collinearity in Zt’s, we can write Zt,1 = cZt,2, the above expression becomes
log
( f1,t(x) f2,t(x)
)
= (c − 1)Z′
t,2Φ(x) − A(cZt,1) + A(Zt,2)
which contracts the assumption. Consequently, the β-block is positive definite. Combining with Step 1,
F = −L is block-strongly convex. Step 3 Note that the basis is uniformly bounded on the support:
‖Φ(x)‖2 ≤ B ∀x ∈ X .
For any θ and any u ∈ Rr1 ,
u⊤∇2A(θ)u = Varpθ (u⊤Φ(X)) ≤ Epθ
[(u⊤Φ(X))2] ≤ ‖u‖2
2 Epθ
[‖Φ(X )‖2
2
] ≤ ‖u‖2
2B2.
Therefore ∇2A(θ) B2I for all θ. Consequently, the block Hessians satisfy
−∇2
Zt lt B2 ∑
m
Nm,t (βmβ⊤
m ⊗ I), −∇2
βm l B2 ∑
t
Nm,t Z⊤
t Zt,
iii

which provides uniform block-Lipschitz (block-smoothness) constants.
In our application, we rescale x to [0, 1] and take Φ(x) = (cos 2πx, sin 2πx, . . . , cos 2πKx, sin 2πKx)⊤ ∈
R2K . First, each trigonometric component has magnitude ≤ 1, so
‖Φ(x)‖2 =
K ∑
k=1
( cos2(2πkx) + sin2(2πkx)) = 2K,
which yields a uniform bound B = √2K. This directly controls gradient/Hessian magnitudes and provides
finite block Lipschitz constants for F = −L. Secondly, on S = [0, 1] under the uniform measure,
Var[Φ(X)] = 1
2 I2K ,
so the Gram/covariance is strictly positive definite with λmin = 1
2 . This ensures directions in the span of Φ
are informative, preventing flat likelihood directions. With compact induced parameter set and ‖Φ(x)‖ ≤ B,
we have a bounded exponential tilt on [0, 1]. Standard comparison yields
∇2A(θ) = Varpθ [Φ(X)] μI (θ ∈ Θ)
for some μ > 0. Thus A is uniformly strongly convex over Θ, giving block strong concavity of L and enabling
the linear convergence rate. The same boundedness implies
0 ∇2A(θ) B2I,
so block gradients of F = −L are Lipschitz with finite constants (LZ , Lβ), a standard requirement in rate
analyses. In practice, choose a moderate K to keep the Gram well-conditioned; orthogonal trig functions al
ready help. Ensure the data/quadrature grid covers [0, 1] (or a nontrivial S ⊂ [0, 1]) so empirical covariances
stay away from degeneracy.
Assumption 3. At each iteration, every block subproblem—optimizing over Zt with β fixed or over βm
with Z fixed—is solved exactly, yielding the global maximizer within the feasible set.
Proposition 1 (Convergence). Let L(Z, β) be the objective and {(Zk, βk)}k≥0 , we have L(Zk, βk) nonde
creasing and bounded above, that implies L(Zk, βk) −−−−→
k→∞ L⋆.
Any cluster point (Z⋆, β⋆) satisfies block optimality:
Z⋆
t ∈ arg max
Zt∈D L(Z, β⋆), β⋆
m ∈ arg max
βm∈D L(Z⋆, β).
Equivalently, in variational/KKT form:
〈∇Zt L(Z⋆, β⋆), Zt − Z⋆
t 〉 ≤ 0, ∀Zt ∈ D, 〈∇βm L(Z⋆, β⋆), βm − β⋆
m〉 ≤ 0, ∀βm ∈ D.
If, moreover, Assumption 2 holds (uniform Fisher information μI) and identification gives unique
block maximizers, then
∇Zt L(Z⋆, β⋆) = 0, ∇βm L(Z⋆, β⋆) = 0 ∀t, m,
iv

so (Z⋆, β⋆) is stationary and the whole sequence converges to it.
Proof. First of all, the algorithm is by definition monotone descent
Zk+1 ∈ arg mZax L(Z, βk) ⇒ L(Zk+1, βk) ≥ L(Zk, βk),
βk+1 ∈ arg mβax L(Zk+1, β) ⇒ L(Zk+1, βk+1) ≥ L(Zk+1, βk),
⇒ L(Zk+1, βk+1) ≥ L(Zk, βk) ∀k ⇒ {L(Zk, βk)}k≥0 ↗ .
(Zk, βk) ∈ D (closed, bounded), Φ bounded ⇒ sup
(Z,β)∈D
L(Z, β) < ∞.
{L(Zk, βk)}k≥0 ↗, sup
k
L(Zk, βk) ≤ sup
(Z,β)∈D
L(Z, β) < ∞ ⇒ ∃ L⋆ < ∞ : L(Zk, βk) → L⋆.
Take a convergent subsequence:
(Zkj , βkj ) → (Z⋆, β⋆), j → ∞.
For the Z–update, each Zkj+1
t is the block maximizer:
Z kj +1
t ∈ arg mZatx
L(Z, βkj ) ⇒ L(Z⋆, βkj ) ≥ L((Z⋆
1 , . . . , Z ̃t, . . . ), βkj ), ∀Z ̃t.
For the β–update, each βkj+1
m is the block maximizer:
βkj +1
m ∈ arg mβamx
L(Zkj+1, β) ⇒ L(Zkj+1, β⋆) ≥ L(Zkj+1, (β⋆
1 , . . . , β ̃m, . . . )), ∀β ̃m.
Passing to the limit j → ∞ and using continuity of L gives that no single-block change can improve the
objective. We also have uniform strong convexity of the log-partition:
∇2A(θ) μI.
This implies strict concavity of L in each block:
Z 7→ L(Z, β) strictly concave, β 7→ L(Z, β) strictly concave.
With the identification restrictions in place, each block maximizer is unique. Therefore, for any block
stationary point (Z⋆, β⋆):
∇Z L(Z⋆, β⋆) = 0, ∇βL(Z⋆, β⋆) = 0.
Hence (Z⋆, β⋆) is a stationary point. Uniqueness of block maximizers prevents cycling, so the entire
sequence converges:
(Zk, βk) → (Z⋆, β⋆).
Theorem 1 (Convergence rate of alternating maximization). Let F := −L. Suppose F is block-smooth
v

and block-strongly convex:
‖∇Z F (Z, β) − ∇Z F (Z′, β)‖ ≤ LZ ‖Z − Z′‖, ‖∇βF (Z, β) − ∇βF (Z, β′)‖ ≤ Lβ‖β − β′‖,
With ρ := (1 − μ
LZ )(1 − μ
Lβ ) ∈ (0, 1)
L⋆ − L(Zk, βk) ≤ ρ k [L⋆ − L(Z0, β0)].
Proof. Let F := −L. For the Z—update at iteration k, fix β = βk and set gZ (Z) := F (Z, βk). By block
LZ—smoothness (descent lemma) and exact minimization,
gZ (Zk+1) ≤ gZ (Zk) − 1
2LZ
‖∇Z gZ (Zk)‖2.
By μ—strong convexity of gZ and the Polyak–Łojasiewicz inequality,
‖∇Z gZ (Zk)‖2 ≥ 2μ [ gZ (Zk) − mZin gZ (Z) ].
Combining,
gZ (Zk+1) − mZin gZ ≤
(
1− μ
LZ
)
[ gZ (Zk) − mZin gZ ]. (Z)
For the β—update at the same iteration, fix Z = Zk+1 and set gβ(β) := F (Zk+1, β). By the same
argument,
gβ(βk+1) − mβin gβ ≤
(
1− μ
Lβ
)
[ gβ(βk) − mβin gβ ]. (β)
Note minZ gZ = minZ F (Z, βk) ≥ F ⋆ := minZ,β F (Z, β) and minβ gβ = minβ F (Zk+1, β) ≥ F ⋆.
Thus, from (Z),
F (Zk+1, βk) − F ⋆ ≤
(
1− μ
LZ
)
[ F (Zk, βk) − F ⋆ ],
and from (β),
F (Zk+1, βk+1) − F ⋆ ≤
(
1− μ
Lβ
)
[ F (Zk+1, βk) − F ⋆ ].
Chaining the two displays gives the geometric decay in one full iteration:
F (Zk+1, βk+1) − F ⋆ ≤
(
1− μ
LZ
)(
1− μ
Lβ
)
} {{ }
:= ρ < 1
[F (Zk, βk) − F ⋆].
Equivalently for L = −F ,
L⋆ − L(Zk+1, βk+1) ≤ ρ [ L⋆ − L(Zk, βk) ], ρ = (1 − μ/LZ )(1 − μ/Lβ) ∈ (0, 1).
Iterating yields
L⋆ − L(Zk, βk) ≤ ρ k [ L⋆ − L(Z0, β0) ].
vi

B Simulaiton results
Our parameter choices reflect empirically relevant ranges for monthly financial returns. The volatility pa
rameter σt varies between 0.5 and 1.5, corresponding to annualized volatilities of approximately 1.7% to
5.2%, which spans typical to moderately elevated market conditions. The skewness parameter λt varies
between -0.5 and 0.5, generating conditional skewness in the range [−0.45, 0.45], consistent with empirical
estimates for monthly equity returns. The degrees of freedom ν = 5 produces excess kurtosis, capturing
the heavy-tailed characteristics commonly observed in financial data. The different periodicities for volatil
ity (period=300) and skewness (period=100) allow us to distinguish their respective effects on the basis
coefficients.
We use deterministic processes rather than stochastic ones (e.g., random walk volatility) to provide
clear, identifiable signals for demonstrating the mapping between economic features and basis functions.
This controlled setting allows us to cleanly isolate the roles of sine and cosine components without the
confounding effects of more complex dynamics. While empirical applications involve more sophisticated
processes, this simplification serves our pedagogical purpose of illustrating the fundamental properties of
Fourier basis functions.
Panel A: Symmetric DGP (Cosine Captures Volatility) shows the symmetric DGP case where
only volatility varies over time. The cosine coefficient $z_{2,t}$ (red line) closely tracks the time-varying
volatility pattern (black line), while the sine coefficient $z_{1,t}$ (blue dashed line) remains negligible
throughout.
Panel B: Asymmetric DGP (Cosine Captures Volatility) demonstrates that in the presence
of both volatility and skewness variation, the cosine coefficient continues to faithfully capture volatility
changes. Despite the introduction of time-varying skewness, the cosine component maintains its strong
relationship with volatility ($R > 0.95$), showing that symmetric features are robustly encoded in cosine
coefficients regardless of concurrent asymmetric dynamics.
Panel C: Asymmetric DGP (Sine Captures Skewness) reveals the specialized role of sine com
ponents in capturing distributional asymmetry. The sine coefficient $z_{1,t}$ (blue dashed line) exhibits
strong comovement with the time-varying skewness (black line), with positive sine coefficients correspond
ing to positive skewness and negative coefficients to negative skewness. The high correlation ($R > 0.97$)
demonstrates that asymmetric distributional features are naturally and precisely encoded in the sine com
ponents.
vii

0 100 200 300 400 500 600 700 800 900 1000 Time
0.5
1
1.5
Volatility
-3
-2
-1
0
1
Fourier Coefficients
Symmetric Case: cos(x) Captures Volatility Pattern
True Volatility cos(x) Coefficient sin(x) Coefficient
0 100 200 300 400 500 600 700 800 900 1000 Time
0.5
1
1.5
Volatility
-2.5
-2
-1.5
-1
-0.5
Fourier Coefficients
Asymmetric Case: cos(x) Captures Volatility Pattern (R = 0.951)
True Volatility cos(x) Coefficient
0 100 200 300 400 500 600 700 800 900 1000 Time
-4
-2
0
2
Asymmetric Case: sin(x) Captures Skewness Pattern (R = 0.977)
True Skewness sin(x) Coefficient
Figure 3: Simulation Study: Specialized Roles of Fourier Basis Functions. Panel A: In symmetric DGP (volatility-only), cosine coefficient tracks volatility while sine coefficient remains negligible. Panel B: In asymmetric DGP, cosine coefficient continues to capture volatility changes despite concurrent skewness variation. Panel C: In asymmetric DGP, sine coefficient specifically captures time-varying skewness pattern. Correlation coefficients (R) demonstrate strong relationships between basis coe-
fficients and their respective distributional features.
C Data Description
Table 4 provides details of the monthly dataset and transformations used in the empirical application.
viii

Table 4: Monthly dataset of variables.
Stock indices
Market Index Transformation
U.S. S&P 500
4log
U.S. NASDAQ (Nasdaq Composite) UK FT All Share (FTSE All Share) Europe STOXX Europe 600 Europe EURO STOXX Germany German total market Netherlands AEX All Share Norway Oslo Exchange All Share France SBF 120 Australia DS total market Australia (Datastream) Australia Australia All ordinaries Japan Nikkei 225 Stock Average Japan Topix South Korea Korea Stock Exchange Composite China SHANGHAI SE A SHARE
Macro variables
Variables (with FRED mnemonic) Transformation
U.S.
Industrial Production Index (INDPRO) 4log Consumer Price Index (CPIAUCSL)
Trade Balance (BOPGSTB)
Federal Funds Rate level
Note: For stock indices, we take the growth rate to neutralize influence of market capitalizations. And the growth is computed as annual growth 12 ∗ log( yt
yt−1 ). To make it consistent, the macro variables (except Federal Funds Rate) are transformed similarly.
D Plots of extracted distributional features
D.1 Scree plots of skew-t parameters
The 15 indices, with four parameters for each index, will lead to 60 parameters. To show those 60 parameters
exhibit a low-dimensional representation, Figure 4 reports the scree plot for each parameter. The big gap
or elbow is clearly seen in parameter scale and skewness.
D.2 Extracted factors using the Fourier basis
This section complements the simulation study by examining the behavior of the Fourier-based factors in
real data. Consistent with the theoretical arguments and controlled experiments presented above, we find
that the estimated coefficients on the cosine and sine basis functions capture distinct features of financial
returns, corresponding to volatility and asymmetry, respectively.
Figure 5 plots the time series of the cosine coefficient alongside the VIX index. The two series exhibit
striking co-movement: periods of elevated market volatility coincide with higher loadings on the cosine
term, while calmer periods correspond to lower values. This pattern reflects the fundamental property of
the cosine basis: being even (cos(−x) = cos(x)), it loads exclusively on symmetric features of the return
ix

0 5 10 15
0
10
20
30
40 Location
0 5 10 15
0
20
40
60 Scale
0 5 10 15
0
10
20
30
40
50 Skewness
0 5 10 15
0
5
10
15
20
25 Degrees of freedom
Figure 4: Scree plot of the four skew-t parameters. An elbow is shown in scale and skewness.
distribution, including dispersion, volatility, and higher-order symmetric shape. Empirically, the strong
correlation with the VIX confirms that the cosine coefficient behaves as an endogenous volatility factor in
real markets, just as it does in the simulation environment.
The sine coefficient, by contrast, captures distributional asymmetry. Figure 6 compares the average sine
coefficients across regions, revealing a clear ordering: the United States exhibits the largest sine coefficient,
followed by the Euro area, and then Asian markets. This pattern is consistent with well-documented
regional differences in asymmetry, where US markets tend to respond more strongly to negative shocks,
European markets show moderate asymmetry, and Asian markets exhibit relatively smaller skew. The sine
function’s odd form (sin(−x) = − sin(x)) ensures that it loads only on asymmetric components of the return
distribution, making it a natural proxy for cross-market skewness.
Taken together, the cosine and sine coefficients provide a clean decomposition of market dynamics into
symmetric and asymmetric components. This decomposition highlights a key advantage of the Fourier
representation: the factors retain stable economic meaning across both simulated and real-world settings
because they are tied to pre-specified functional forms rather than sample-specific variation. This robustness
contrasts with data-driven approaches such as functional PCA, where the shapes and interpretations of
components may shift across samples or time periods.
E Forecasting Performance Comparison
E.1 Forecasting macro variables
Table 5 reports the performance of jointly forecasting U.S. macro variable at three horizons using the
joint log predictive likelihood. A larger value indicates more accurate density forecast, and the bold figure
indicates the best model in each case. The column h = 1 can be regarded as an approximation of the
marginal likelihood (Geweke 2001). Two points are immediately clear from these results. First, mvfVAR
x

1995 2000 2005 2010 2015 2020 2025
-4
-3.5
-3
-2.5
-2
-1.5
-1
-0.5
One factor
0
10
20
30
40
50
60
VIX
Figure 5: One factor and the VIX index.
-0.45 -0.4 -0.35 -0.3 -0.25 -0.2 -0.15 -0.1 -0.05 0
Shanghai SE
Korea SE
Topix
Nikkei 225
Australia All ord
DS total market Australia
SBF 120
Oslo Exchange All share
AEX All share
German total market
Euro STOXX
STOXX Europe 600
FT All Share
NASDAQ
S&P 500
US Europe Asia
Figure 6: Stock return asymmetry across global markets (average sine component loading).
xi

or sktVAR always provides better fit of data than VAR. Thus, incorporating distributional features, rather
than simple overall indices, is beneficial to forecast the macroeconomy. Second, our proposed model, by
considering the entire distribution, beats the model which only includes parameters extracted from skew
t distributions. Third, considering global stock indices is helpful to improve the forecasting performance
compared to focusing solely on the US.
Table 5: Jointly forecasting the three macro variables. h=1 h=2 h=3 VAR -17.68 -62.34 -92.46 sktVAR -4.76 -32.31 -50.25 mvfVAR 9.76 7.17 5.23 mvfVAR (US) 5.90 2.94 0.77
Table 5 only offers the mean of forecasting performance during the whole period. To study the perfor
mance over time, we take IP as an example and plot Figure 7. Left panel is the performance of sktVAR
against VAR, which is calculated as the difference of density forecast for IP between sktVAR and VAR over
time. A positive value means sktVAR outperforms VAR. Right panel is for mvfVAR against VAR. Both
sktVAR and mvfVAR perform much better in March 2020, and slightly better in August 2008 and 2005.
2005 2010 2015 2020 2025
-40
-20
0
20
40
60
80
100
120
140
2005 2010 2015 2020 2025
-40
-20
0
20
40
60
80
100
120
140
Figure 7: Left panel: sktVAR against VAR (The spike is from March 2020). Right panel: mvfVAR against VAR (Three spikes are from August 2005, August 2008, and March 2020).
The following table reports the forecasting performance for each individual macro variable (both point
forecast using RMSFE and density forecast using ALPL). *, **, *** denote, respectively, 0.1, 0.05, and
0.01 significance level for a two-sided Diebold & Mariano (2002) test. The benchmark model in the Diebold
Mariano test is VAR.
xii

Table 6: Performance of forecasting individual macro variables.
Variables Models RMSFE ALPL
h=1 h=2 h=3 h=1 h=2 h=3
Industrial Production
VAR 0.01 0.02 0.02 2.41 0.44 -0.87 sktVAR 0.01 0.02 0.02 2.78 1.64 0.88 mvfVAR 0.01* 0.02 0.03 2.81 2.17 1.96 mvfVAR (US) 0.02 0.03 0.03 2.40 1.29 0.77
Producer Price Index
VAR 0.01 0.01 0.02 3.26 2.63 2.19 sktVAR 0.01 0.02* 0.02 3.18** 2.63* 2.28 mvfVAR 0.01 0.02* 0.03** 2.87** 2.40** 2.11 mvfVAR (US) 0.01 0.02 0.02 2.92* 2.29** 1.84**
Federal Funds Rate
VAR 0.18 0.32 0.47 0.34 -0.38 -0.88 sktVAR 0.23* 0.39 0.53 0.11 -0.43 -0.76 mvfVAR 0.17 0.32 0.46 0.34 -0.27 -0.68 mvfVAR (US) 0.14* 0.27 0.40 0.57* -0.19 -0.71
E.2 Forecasting stock market return distributions
To evaluate the predictive accuracy of stock return distributions, we calculate quantile scores. The nine
selected quantiles are 10%, 20%, 30%, · · · , 90%. Our benchmark is the empirical return distribution, which
is observed on a monthly basis. The quantile scores from mvfVAR are derived as: i) mvfVAR produces
forecasts of log density at evaluation points; ii) forecasts of density is obtained by exponentiating the
log density values; iii) compute the cumulative distribution function (cdf) based on evaluation points and
forecasts of density;5 iv) cdf is normalised to ensure it goes from 0 to 1; v) compute quantile scores.6
The quantile scores from sktVAR is obtained in a similar manner, with the key difference being how
the density forecasts are generated: sktVAR produces forecasts for the four parameters of the skew t
distribution. Consequently, the density forecasts are derived from the skew t distribution. iii) to v) are the
same as mvfVAR.
Since the forecast of quantile score is a point forecast, RMSFE can be used to compare different models.
However, reporting the results is challenging, as there are 15 indices, each with 9 quantile score forecasts,
leading to a total of 135 point forecasts. To address this, we conducted comparisons in various ways and
observed consistent patterns for each quantile score across the indices. As a result, we averaged the RMSFE
for each quantile score across all indices, which provides sharper insights based on the nine quantile score
forecasts. The averaged RMSFE is reported in Table 7. Q1 is for quantile 10%, and Q9 is for quantile 90%.
When forecasting the middle quantile scores (Q3, Q4, Q5, Q6, Q7), the differences between the two
approaches are minimal. However, for the upper quantile scores (Q8, Q9) and particularly the lower
quantile scores (Q1, Q2), the differences become more pronounced, with mvfVAR consistently outperforming
sktVAR.
5This is done using Matlab function cumtrapz.
6This is done by using Matlab function interp1. ’method’ is set to ’linear’. ’extrapolation’ is set to ’extrap’.
xiii

Table 7: The Averaged RMSFE of nine quantile scores. Q1 Q2 Q3 Q4 Q5 Q6 Q7 Q8 Q9 h = 1 sktVAR 0.132 0.093 0.072 0.059 0.052 0.052 0.06 0.079 0.117
mvfVAR 0.085 0.07 0.064 0.06 0.057 0.056 0.056 0.06 0.074 h = 2 sktVAR 0.132 0.093 0.072 0.059 0.052 0.052 0.06 0.078 0.117
mvfVAR 0.086 0.072 0.064 0.06 0.057 0.055 0.055 0.059 0.074 h = 3 sktVAR 0.132 0.093 0.072 0.058 0.052 0.052 0.06 0.078 0.117
mvfVAR 0.083 0.069 0.062 0.058 0.056 0.055 0.055 0.059 0.074
F Impulse response functions
In this section, we first report the IRFs for the macro, followed by the distributional IRFs for longer horizons.
INDPRO
0 2 4 6 8 10 12 14
-0.1
0
0.1
0.2
0.3
CPI
0 2 4 6 8 10 12 14
0
0.05
0.1
0.15
0.2
TB
0 2 4 6 8 10 12 14
0
0.05
0.1
FFR
0 2 4 6 8 10 12 14
-1
-0.8
-0.6
-0.4
-0.2
0
INDPRO
0 2 4 6 8 10 12 14
-0.02
-0.01
0
0.01
0.02
CPI
0 2 4 6 8 10 12 14
0
0.05
0.1
0.15
0.2
TB
0 2 4 6 8 10 12 14
0
0.01
0.02
FFR
0 2 4 6 8 10 12 14
-1
-0.8
-0.6
-0.4
-0.2
0
Figure 8: IRFs for the macro variables over horizons. Left: skew-t VAR; Right: mvfVAR which is based on Fourier basis functions. The monetary policy shock occurs at h = 0 which decreases the policy rate by 1 percent. The instrument of policy rate is the Federal funds rate and it enters the VAR in percent.
Next, we report the distributional IRFs. Section 3 has reported the change in the four moments from
mvfVAR at h = 0. Here we report longer horizons from mvfVAR.
xiv

Table 8: Changes in the four moments of return distributions at horizon h = 1 (from mvfVAR model).
Mean Volatility Skewness Kurtosis Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary S&P 500 -0.01 0.01 0 0 0.01 -0.01 0.08 -0.07
(-0.01, -0.00) (0.00, 0.01) (-0.01, -0.00) (0.00, 0.01) (0.00, 0.03) (-0.03, -0.00) (0.02, 0.18) (-0.15, -0.02) NASDAQ 0 0 0.04 -0.04 0 0 -0.01 0.01
(-0.00, -0.00) (0.00, 0.00) (0.01, 0.09) (-0.10, -0.01) (0.00, 0.00) (-0.00, -0.00) (-0.02, -0.00) (0.00, 0.02) FT All Share 0 0 0.36 -0.36 0 0 -0.35 0.38
(-0.00, -0.00) (0.00, 0.00) (0.11, 0.76) (-0.73, -0.11) (-0.00, -0.00) (0.00, 0.00) (-0.70, -0.11) (0.11, 0.82) Europe 600 0 0 -0.24 0.24 0.01 0 0.13 -0.13
(-0.01, -0.00) (0.00, 0.01) (-0.51, -0.07) (0.07, 0.51) (0.00, 0.01) (-0.01, -0.00) (0.04, 0.28) (-0.26, -0.04) EURO STOXX 0 0 -0.25 0.25 0.01 0 0.13 -0.13
(-0.01, -0.00) (0.00, 0.01) (-0.51, -0.07) (0.07, 0.52) (0.00, 0.01) (-0.01, -0.00) (0.04, 0.28) (-0.26, -0.04) German 0 0 -0.27 0.27 0 0 0.09 -0.09
(-0.01, -0.00) (0.00, 0.01) (-0.56, -0.08) (0.08, 0.56) (0.00, 0.01) (-0.01, -0.00) (0.03, 0.20) (-0.18, -0.03) AEX All Share 0 0 -0.27 0.27 0 0 0.11 -0.11
(-0.01, -0.00) (0.00, 0.01) (-0.57, -0.08) (0.08, 0.57) (0.00, 0.01) (-0.01, -0.00) (0.03, 0.23) (-0.21, -0.03) Oslo 0 0 -0.26 0.26 0 0 0.07 -0.07
(-0.00, -0.00) (0.00, 0.00) (-0.55, -0.07) (0.07, 0.55) (0.00, 0.00) (-0.00, -0.00) (0.02, 0.15) (-0.14, -0.02) SBF 120 0 0 -0.26 0.26 0 0 0.11 -0.11
(-0.01, -0.00) (0.00, 0.01) (-0.54, -0.07) (0.07, 0.54) (0.00, 0.01) (-0.01, -0.00) (0.03, 0.24) (-0.22, -0.03) DS Australia 0 0 -0.28 0.28 0 0 0.1 -0.1
(-0.01, -0.00) (0.00, 0.01) (-0.57, -0.08) (0.08, 0.57) (0.00, 0.01) (-0.01, -0.00) (0.03, 0.22) (-0.20, -0.03) Australia 0 0 -0.26 0.26 0 0 0.07 -0.07
(-0.01, -0.00) (0.00, 0.00) (-0.55, -0.07) (0.07, 0.55) (0.00, 0.00) (-0.00, -0.00) (0.02, 0.15) (-0.14, -0.02) Nikkei 0 0 -0.29 0.29 0 0 0.1 -0.1
(-0.01, -0.00) (0.00, 0.01) (-0.61, -0.08) (0.08, 0.61) (0.00, 0.01) (-0.01, -0.00) (0.03, 0.21) (-0.19, -0.03) Topix 0 0 -0.3 0.3 0 0 0.09 -0.09
(-0.01, -0.00) (0.00, 0.01) (-0.62, -0.08) (0.08, 0.62) (0.00, 0.01) (-0.01, -0.00) (0.03, 0.19) (-0.18, -0.02) Korea 0 0 -0.29 0.28 0 0 0.08 -0.07
(-0.01, -0.00) (0.00, 0.01) (-0.60, -0.08) (0.08, 0.59) (0.00, 0.01) (-0.01, -0.00) (0.02, 0.16) (-0.15, -0.02) SHANGHAI SE 0 0 -0.33 0.33 0 0 0.07 -0.07
(-0.01, -0.00) (0.00, 0.01) (-0.70, -0.10) (0.09, 0.69) (0.00, 0.00) (-0.00, -0.00) (0.02, 0.15) (-0.13, -0.02) Values in the bracket are the 16% and 84% confidence intervals. In order to optimize space utilization, a series of abbreviations were employed, each representing: Europe 600 for STOXX Europe 600, German for German total market, Oslo for Oslo Exchange All Share, DS Australia for DS total market Australia, Australia for Australia All ordinaries, Nikkei for Nikkei 225 Stock, Korea for Kore-
a Stock Exchange.
Table 9: Changes in the four moments of return distributions at horizon h = 9 (from mvfVAR model).
Mean Volatility Skewness Kurtosis Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary S&P 500 -0.02 0.02 0 0 0.02 -0.04 -0.07 0.08
(-0.03, -0.01) (0.01, 0.03) (0.00, 0.01) (-0.01, -0.00) (-0.01, 0.05) (-0.07, -0.01) (-0.14, -0.03) (0.03, 0.19) NASDAQ -0.01 0.01 0.01 -0.01 0.01 -0.01 0 0
(-0.02, 0.00) (-0.00, 0.02) (0.00, 0.03) (-0.03, -0.00) (0.00, 0.02) (-0.02, -0.00) (-0.01, -0.00) (0.00, 0.01) FT All Share -0.03 0.03 -0.01 0.01 0.04 -0.03 0.01 -0.01
(-0.04, -0.02) (0.02, 0.04) (-0.02, 0.00) (-0.01, 0.02) (0.02, 0.06) (-0.04, -0.02) (-0.00, 0.03) (-0.02, 0.01) Europe 600 0.01 0 0.03 -0.02 -0.02 0.02 -0.01 0.02
(0.00, 0.02) (-0.01, 0.00) (0.01, 0.05) (-0.04, -0.01) (-0.03, -0.01) (0.01, 0.03) (-0.02, -0.01) (0.01, 0.03) EURO STOXX 0.01 0 0.03 -0.02 -0.02 0.02 -0.01 0.02
(0.00, 0.02) (-0.01, 0.00) (0.01, 0.05) (-0.04, -0.01) (-0.03, -0.01) (0.01, 0.03) (-0.02, -0.01) (0.01, 0.03) German 0.01 0 0.03 -0.03 -0.01 0.01 -0.01 0.01
(0.00, 0.01) (-0.01, 0.00) (0.02, 0.05) (-0.04, -0.01) (-0.02, -0.00) (0.00, 0.02) (-0.01, -0.00) (0.01, 0.02) AEX All Share 0.01 -0.01 0.03 -0.03 -0.01 0.01 -0.01 0.01
(0.00, 0.02) (-0.01, 0.00) (0.02, 0.05) (-0.04, -0.01) (-0.02, -0.01) (0.01, 0.03) (-0.01, -0.01) (0.01, 0.02) Oslo 0 0 0.03 -0.03 0 0 -0.01 0.01
(-0.00, 0.00) (-0.00, 0.01) (0.02, 0.05) (-0.04, -0.02) (-0.00, 0.00) (-0.00, 0.00) (-0.01, -0.00) (0.00, 0.02) SBF 120 0.01 0 0.03 -0.02 -0.01 0.01 -0.01 0.01
(0.00, 0.02) (-0.01, 0.00) (0.01, 0.05) (-0.04, -0.01) (-0.02, -0.01) (0.01, 0.03) (-0.01, -0.01) (0.01, 0.02) DS Australia 0.01 -0.01 0.03 -0.03 -0.01 0.01 -0.01 0.01
(0.00, 0.02) (-0.01, 0.00) (0.02, 0.05) (-0.04, -0.01) (-0.02, -0.01) (0.01, 0.03) (-0.01, -0.01) (0.01, 0.02) Australia 0 0 0.03 -0.03 0 0 -0.01 0.01
(-0.00, 0.01) (-0.01, 0.00) (0.02, 0.05) (-0.04, -0.02) (-0.01, 0.00) (-0.00, 0.01) (-0.01, -0.00) (0.00, 0.02) Nikkei 0.01 -0.01 0.03 -0.03 -0.01 0.01 -0.01 0.01
(0.00, 0.02) (-0.01, -0.00) (0.02, 0.05) (-0.04, -0.02) (-0.02, -0.01) (0.01, 0.03) (-0.01, -0.00) (0.01, 0.02) Topix 0.01 0 0.03 -0.03 -0.01 0.01 -0.01 0.01
(0.00, 0.01) (-0.01, 0.00) (0.02, 0.05) (-0.04, -0.02) (-0.01, -0.00) (0.00, 0.02) (-0.01, -0.00) (0.01, 0.02) Korea 0.01 0 0.03 -0.03 -0.01 0.01 -0.01 0.01
(0.00, 0.01) (-0.01, 0.00) (0.02, 0.04) (-0.04, -0.02) (-0.01, -0.00) (0.00, 0.02) (-0.01, -0.00) (0.00, 0.02) SHANGHAI SE 0 0 0.03 -0.03 -0.01 0.01 -0.01 0.01
(0.00, 0.01) (-0.01, -0.00) (0.02, 0.05) (-0.05, -0.02) (-0.01, -0.00) (0.00, 0.01) (-0.01, -0.00) (0.00, 0.01) Values in the bracket are the 16% and 84% confidence intervals. In order to optimize space utilization, a series of abbreviations were employed, each representing: Europe 600 for STOXX Europe 600, German for German total market, Oslo for Oslo Exchange All Share, DS Australia for DS total market Australia, Australia for Australia All ordinaries, Nikkei for Nikkei 225 Stock, Korea for Kore-
a Stock Exchange.
To conclude this section, we report the change in the four moments from sktVAR across the three
horizons.
xv

Table 10: Changes in the four moments of return distributions at horizon h = 0 (from sktVAR).
Mean Volatility Skewness Kurtosis Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary S&P 500 0.08 -0.08 -0.44 1.07 0.3 -0.3 -1.21 2.28
(-0.44, 0.63) (-0.63, 0.44) (-0.52, -0.31) (0.54, 1.68) (-0.14, 0.83) (-0.83, 0.14) (-1.50, -0.83) (1.22, 3.59) NASDAQ 0.13 -0.13 -0.27 0.34 0.02 -0.02 -0.35 0.42
(-0.12, 0.44) (-0.44, 0.12) (-0.35, -0.17) (0.20, 0.48) (-0.18, 0.21) (-0.21, 0.18) (-0.48, -0.24) (0.27, 0.61) FT All Share 0.04 -0.04 -0.31 0.53 0.24 -0.24 -0.7 0.97
(-0.11, 0.20) (-0.20, 0.11) (-0.38, -0.20) (0.27, 0.78) (0.12, 0.36) (-0.36, -0.12) (-0.91, -0.41) (0.49, 1.42) Europe 600 0.06 -0.06 -0.38 0.61 0.22 -0.22 -0.61 0.75
(-0.17, 0.33) (-0.33, 0.17) (-0.48, -0.24) (0.32, 0.94) (0.08, 0.42) (-0.42, -0.08) (-0.86, -0.35) (0.39, 1.19) EURO STOXX 0.07 -0.07 -0.32 0.51 0.31 -0.31 -0.41 0.48
(-0.18, 0.36) (-0.36, 0.18) (-0.42, -0.21) (0.29, 0.81) (0.10, 0.54) (-0.54, -0.10) (-0.62, -0.16) (0.17, 0.78) German 0.07 -0.07 -0.23 0.32 0.36 -0.36 -0.43 0.51
(-0.15, 0.31) (-0.31, 0.15) (-0.31, -0.14) (0.16, 0.49) (0.13, 0.58) (-0.58, -0.13) (-0.67, -0.22) (0.24, 0.92) AEX All Share 0.07 -0.07 -0.26 0.39 0.16 -0.16 -0.68 0.96
(-0.12, 0.25) (-0.25, 0.12) (-0.33, -0.16) (0.21, 0.59) (-0.03, 0.32) (-0.32, 0.03) (-0.96, -0.44) (0.54, 1.65) Oslo 0.02 -0.02 -0.12 0.14 0.18 -0.18 -0.38 0.46
(-0.13, 0.17) (-0.17, 0.13) (-0.19, -0.06) (0.06, 0.24) (0.01, 0.37) (-0.37, -0.01) (-0.57, -0.19) (0.21, 0.75) SBF 120 0.08 -0.08 -0.41 0.63 0.14 -0.14 -0.39 0.44
(-0.18, 0.38) (-0.38, 0.18) (-0.53, -0.27) (0.35, 0.98) (-0.08, 0.50) (-0.50, 0.08) (-0.66, -0.10) (0.11, 0.82) DS Australia 0.07 -0.07 -0.19 0.24 0.12 -0.12 -0.51 0.64
(-0.12, 0.27) (-0.27, 0.12) (-0.25, -0.09) (0.10, 0.35) (-0.03, 0.25) (-0.25, 0.03) (-0.80, -0.22) (0.25, 1.15) Australia 0.06 -0.06 -0.06 0.06 0.03 -0.03 -0.2 0.22
(-0.10, 0.23) (-0.23, 0.10) (-0.10, -0.02) (0.02, 0.11) (-0.06, 0.11) (-0.11, 0.06) (-0.34, -0.06) (0.06, 0.40) Nikkei 0.1 -0.1 -0.23 0.31 0.61 -0.61 -0.16 0.16
(-0.13, 0.31) (-0.31, 0.13) (-0.30, -0.13) (0.15, 0.44) (0.26, 0.89) (-0.89, -0.26) (-0.30, 0.09) (-0.08, 0.33) Topix 0.04 -0.04 -0.15 0.18 0.51 -0.51 -0.34 0.39
(-0.05, 0.14) (-0.14, 0.05) (-0.19, -0.08) (0.10, 0.26) (0.32, 0.77) (-0.77, -0.32) (-0.49, -0.20) (0.22, 0.60) Korea 0.05 -0.05 -0.12 0.14 0.26 -0.26 -0.16 0.17
(-0.04, 0.14) (-0.14, 0.04) (-0.17, -0.07) (0.07, 0.21) (0.13, 0.38) (-0.38, -0.13) (-0.25, -0.04) (0.04, 0.28) SHANGHAI SE 0.04 -0.04 0 0 0.53 -0.53 -0.32 0.37
(-0.07, 0.15) (-0.15, 0.07) (-0.03, 0.03) (-0.02, 0.03) (0.30, 0.83) (-0.83, -0.30) (-0.53, -0.17) (0.18, 0.67) Values in the bracket are the 16% and 84% confidence intervals. In order to optimize space utilization, a series of abbreviations were employed, each representing: Europe 600 for STOXX Europe 600, German for German total market, Oslo for Oslo Exchange All Share, DS Australia for DS total market Australia, Australia for Australia All ordinaries, Nikkei for Nikkei 225 Stock, Korea for Kore-
a Stock Exchange.
Table 11: Changes in the four moments of return distributions at horizon h = 1 (from sktVAR).
Mean Volatility Skewness Kurtosis Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary S&P 500 0.07 -0.07 -0.03 0.04 -0.05 0.05 0.02 -0.02
(0.02, 0.13) (-0.13, -0.02) (-0.07, 0.00) (-0.00, 0.08) (-0.11, 0.00) (-0.00, 0.11) (-0.12, 0.15) (-0.14, 0.13) NASDAQ 0.08 -0.08 -0.07 0.07 -0.11 0.11 -0.11 0.11
(0.02, 0.14) (-0.14, -0.02) (-0.13, -0.02) (0.02, 0.14) (-0.17, -0.03) (0.03, 0.17) (-0.23, -0.01) (0.01, 0.26) FT All Share 0.08 -0.08 -0.07 0.08 -0.11 0.11 -0.08 0.08
(0.02, 0.13) (-0.13, -0.02) (-0.11, -0.04) (0.04, 0.13) (-0.17, -0.05) (0.05, 0.17) (-0.27, 0.08) (-0.08, 0.31) Europe 600 0.05 -0.05 -0.06 0.07 -0.08 0.08 0.23 -0.22
(0.01, 0.10) (-0.10, -0.01) (-0.09, -0.02) (0.02, 0.10) (-0.14, -0.02) (0.02, 0.14) (-0.02, 0.43) (-0.38, 0.02) EURO STOXX 0.05 -0.05 -0.1 0.11 -0.1 0.1 0.07 -0.07
(0.00, 0.10) (-0.10, -0.00) (-0.14, -0.05) (0.05, 0.17) (-0.21, -0.03) (0.03, 0.21) (-0.10, 0.26) (-0.24, 0.11) German 0.09 -0.09 -0.05 0.05 -0.15 0.15 -0.16 0.17
(0.02, 0.16) (-0.16, -0.02) (-0.09, -0.02) (0.02, 0.10) (-0.25, -0.06) (0.06, 0.25) (-0.35, 0.00) (-0.00, 0.40) AEX All Share 0.06 -0.06 -0.09 0.1 -0.06 0.06 0.12 -0.11
(0.01, 0.10) (-0.10, -0.01) (-0.13, -0.04) (0.05, 0.16) (-0.12, -0.01) (0.01, 0.12) (0.02, 0.30) (-0.27, -0.02) Oslo 0.05 -0.05 -0.09 0.1 0 0 0.28 -0.25
(0.01, 0.10) (-0.10, -0.01) (-0.13, -0.05) (0.05, 0.15) (-0.03, 0.03) (-0.03, 0.03) (0.11, 0.46) (-0.38, -0.10) SBF 120 0.06 -0.06 -0.19 0.23 -0.13 0.13 -0.45 0.52
(0.01, 0.13) (-0.13, -0.01) (-0.27, -0.12) (0.13, 0.35) (-0.23, -0.06) (0.06, 0.23) (-0.65, -0.26) (0.28, 0.80) DS Australia 0.03 -0.03 -0.13 0.15 -0.05 0.05 -0.13 0.13
(0.01, 0.05) (-0.05, -0.01) (-0.17, -0.06) (0.07, 0.22) (-0.11, -0.01) (0.01, 0.11) (-0.29, -0.01) (0.01, 0.33) Australia 0.04 -0.04 -0.08 0.09 0.01 -0.01 0.09 -0.08
(-0.02, 0.09) (-0.09, 0.02) (-0.11, -0.04) (0.04, 0.13) (-0.02, 0.07) (-0.07, 0.02) (-0.08, 0.23) (-0.21, 0.08) Nikkei -0.02 0.02 -0.11 0.13 0.03 -0.03 -0.24 0.26
(-0.05, 0.00) (-0.00, 0.05) (-0.16, -0.06) (0.06, 0.19) (-0.02, 0.11) (-0.11, 0.02) (-0.47, -0.07) (0.07, 0.55) Topix -0.01 0.01 -0.12 0.15 0.13 -0.13 -0.21 0.23
(-0.03, 0.01) (-0.01, 0.03) (-0.18, -0.05) (0.05, 0.25) (0.06, 0.22) (-0.22, -0.06) (-0.37, -0.06) (0.06, 0.43) Korea 0.03 -0.03 -0.09 0.1 0.24 -0.24 -0.04 0.04
(-0.02, 0.08) (-0.08, 0.02) (-0.14, -0.04) (0.04, 0.17) (0.13, 0.35) (-0.35, -0.13) (-0.10, 0.02) (-0.02, 0.10) SHANGHAI SE 0 0 -0.04 0.04 0.12 -0.12 -0.08 0.08
(-0.07, 0.05) (-0.05, 0.07) (-0.06, -0.01) (0.01, 0.07) (0.03, 0.22) (-0.22, -0.03) (-0.52, 0.42) (-0.36, 0.65) Values in the bracket are the 16% and 84% confidence intervals. In order to optimize space utilization, a series of abbreviations were employed, each representing: Europe 600 for STOXX Europe 600, German for German total market, Oslo for Oslo Exchange All Share, DS Australia for DS total market Australia, Australia for Australia All ordinaries, Nikkei for Nikkei 225 Stock, Korea for Kore-
a Stock Exchange.
xvi

Table 12: Changes in the four moments of return distributions at horizon h = 9 (from sktVAR).
Mean Volatility Skewness Kurtosis Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary Expansionary Contractionary S&P 500 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) NASDAQ 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) FT All Share 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) Europe 600 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) EURO STOXX 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) German 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) AEX All Share 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) Oslo 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) SBF 120 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (-0.00, 0.00) (-0.00, 0.00) DS Australia 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) Australia 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) Nikkei 0 0 0 0 0 0 0 0
(-0.00, 0.00) (-0.00, 0.00) (-0.00, 0.00) (-0.00, 0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) Topix 0 0 0 0 0 0 0 0
(0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) Korea 0 0 0 0 0 0 0 0
(0.00, 0.00) (-0.00, -0.00) (-0.00, 0.00) (-0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) SHANGHAI SE 0 0 0 0 0 0 0 0
(0.00, 0.00) (-0.00, -0.00) (-0.00, -0.00) (0.00, 0.00) (0.00, 0.00) (-0.00, -0.00) (-0.00, 0.00) (-0.00, 0.00) Values in the bracket are the 16% and 84% confidence intervals. In order to optimize space utilization, a series of abbreviations were employed, each representing: Europe 600 for STOXX Europe 600, German for German total market, Oslo for Oslo Exchange All Share, DS Australia for DS total market Australia, Australia for Australia All ordinaries, Nikkei for Nikkei 225 Stock, Korea for Kore-
a Stock Exchange.
G Implementation details
G.1 Fourier basis functions
The return data is truncated at 0.5% (Lower Bound, LB) and 99.5% (Upper Bound, UB) percentiles and
we rescale them to the interval [0, 1] by taking the cumulative distribution function of the standard normal
distribution (yscaled
i ). The design matrix Φ (y)is then constructed as follows:
Φ (y) =


sin(2πyscaled
1 ) cos(2πyscaled
1 ) sin(4πyscaled
1 ) cos(4πyscaled
1)
sin(2πyscaled
2 ) cos(2πyscaled
2 ) sin(4πyscaled
2 ) cos(4πyscaled
2)
... ... ... ...
sin(2πyscaled
n−1 ) cos(2πyscaled
n−1 ) sin(4πyscaled
n−1 ) cos(4πyscaled
n−1 )
sin(2πyscaled
n ) cos(2πyscaled
n ) sin(4πyscaled
n ) cos(4πyscaled
n)


.
This matrix captures the Fourier basis functions evaluated at the rescaled points yscaled
i . For simplicity,
we will omit the superscript scaled in the following.
G.2 Bayesian inference
The resulting functional VAR resembles a factor-augmented VAR
Xt = b +
P ∑
p=1
BpXt−p + εt, εt ∼ N (0dim, Σ)
where Xt = [vec (Zt)′ , zt′
]′ and zt denotes the macro variables. Therefore, standard Bayesian estimation
for the VAR can be used here. The prior for VAR coefficients Bp follows Chan (2022). We start with a
VAR(p) in structural form,
xvii

A0Xt = a +
P ∑
p=1
ApXt−p + εt, εt ∼ N (0dim, Λ) ,
where A0is a lower triangular matrix with ones on its main diagonal and Λ = diag(σ12, σ22, . . . , σ2
dim).
This allows us to estimate the VAR equation by equation. The i-th equation can be written as
xit = witαi + zitθi + εit, εt ∼ N (0, σ2
i
),
where wit = (−y1t, −y2t, . . . , −yi−1t) and zit = (1, Xt′−1, . . . , Xt′−p). We use the normal-inverse-gamma
prior
αi | σ2
i ∼ N (0, σ2
i Vα
i ),
θi | σ2
i ∼ N (0, σ2
iVθ
i ),
σ2
i ∼ IG( v0 + i − n
2 , s2
i
2 ).
s2
i denotes the sample variance of the residuals from an AR(p) model estimated on variable i. This one
is direct to compute for macro variables zt as they are observed.
We set Vα
i = diag(1/s2
i , . . . , 1/s2
i−1). For the VAR coefficients θi, the prior covariance matrix depends on
Vθ
i . It contains three hyperparameters, namely, κ1, κ2, κ3 , that control the degree of shrinkage for different
types of coefficients.
Vθ
i=


κ1
l2 s2
i
for the coefficient on the lth lag of variable i
κ2
l2 s2
i
for the coefficient on the lth lag of variable j
κ3 for the intercept
We set κ1 = 0.1, κ2 = 0.01, and κ3 = 10. For the sktVAR, since the dimension is much higher, we set
κ1 = 0.01, κ2 = 0.001. These values suggest that the coefficients associated with lags of other variables
undergo greater shrinkage compared to those of their own lags, while the intercepts experience virtually no
shrinkage.
xviii

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:55.129Z
- **Text Length:** 104018 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 37 of 37
