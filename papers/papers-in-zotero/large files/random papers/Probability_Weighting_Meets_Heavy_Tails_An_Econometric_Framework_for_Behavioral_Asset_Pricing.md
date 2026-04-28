# PDF Document: Deep et al. - 2025 - Probability Weighting Meets Heavy Tails An Econometric Framework for Behavioral Asset Pricing.pdf

**File Path:** Deep et al. - 2025 - Probability Weighting Meets Heavy Tails An Econometric Framework for Behavioral Asset Pricing.pdf

**Processed Date:** 2026-02-10T18:14:28.642Z

**File Size:** 1921.55 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3577

**Title:** Probability Weighting Meets Heavy Tails: An Econometric Framework for Behavioral Asset Pricing

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Probability Weighting Meets Heavy Tails: An Econometric
Framework for Behavioral Asset Pricing
Akash Deep1,*, Svetlozar T. Rachev1, and Frank J. Fabozzi2
1Department of Mathematics and Statistics, Texas Tech University, Lubbock, TX, USA 2Carey Business School, Johns Hopkins University, Baltimore, MD, USA *Corresponding author: akash.deep@ttu.edu
2025
Abstract
We develop an econometric framework integrating heavy-tailed Student’s t distributions with behavioral probability weighting while preserving infinite divisibility. Using 432,752 observations across 86 assets (2004–2024), we demonstrate Student’s t specifications outperform Gaussian models in 88.4% of cases. Bounded probability-weighting transformations preserve mathematical properties required for dynamic pricing. Gaussian models underestimate 99% Value-at-Risk by 19.7% versus 3.2% for our specif-
ication. Joint estimation procedures identify tail and behavioral parameters with established asymptotic properties. Results provide robust inference for asset-pricing applications where heavy tails and behavioral distortions coexist.
Keywords: Behavioral Finance, Heavy-Tailed Distributions, Student’s t Distribution, Probability Weighting, Econometric Estimation, Infinite Divisibility
1 Introduction
Financial return series exhibit heavy tails that systematically reject Gaussian assumptions, as first documented by [19] and [11] and confirmed in subsequent econometric studies. While Student’s t and related specifications provide better empirical fit, their integration with behavioral asset-pricing models has been limited because behavioral distortions such as probability weighting often violate conditions required for arbitrage-free pricing and continuous-time econometric analysis. We contribut-
e to this literature by developing an econometric framework that jointly models heavy-tailed returns and behavioral probability weighting while preserving infinite divisibility and compatibility with the Fundamental Theorem of Asset Pricing. We establish sufficient conditions under which bounded probability-weighting transformations of Student’s t processes retain infinite divisibility, and we propose estimation procedures that allow joint identification of tail and distortion parameters, along wi-
th results on their asymptotic properties. Empirical analysis on 432,752 daily observations across 86 assets (2004–2024) confirms the econometric relevance of our framework. Gaussian assumptions are universally rejected, and Student’s t distributions dominate Laplace and normal alternatives in 88.4% of cases. Moreover, misspecification has substantial consequences: Gaussian models underestimate 99% Value-atRisk by 19.7% on average, while our specification reduces errors below 3.2%. The remainder o-
f the paper is organized as follows. Section 2 reviews related econometric literature on heavy-tailed modeling and behavioral adjustments. Section 3 presents the theoretical framework, including conditions under which probability-weighting transformations preserve
1
arXiv:2511.16563v1 [q-fin.MF] 20 Nov 2025

infinite divisibility. Section 4 describes the estimation and testing procedures and establishes their asymptotic properties. Section 5 reports the empirical results from model comparisons, risk backtests, and robustness checks. Section 6 discusses implications for econometric modeling and asset-pricing applications, and Section 7 concludes.
2 Related Econometric Literature
The econometric evidence against Gaussian return assumptions is longstanding. [19] and [11] first documented leptokurtosis and excess tail probability in financial returns, findings that continue to be confirmed in high-frequency data [2]. Parametric alternatives emerged through variance-mixture models [5, 23] and Student’s t specifications, while subsequent work formalized their infinite-divisibility properties [13, 17]. These contributions provided the theoretical basis for integrating heavy-tai-
led distributions into continuous-time econometric models. Heavy tails have also been linked to stochastic volatility and jump processes. [21] jumpdiffusion model and [15] stochastic volatility framework demonstrated how non-Gaussian features arise naturally in dynamic asset-pricing settings. Extensions based on Lévy processes [4, 9, 10, 24] established rigorous econometric tools for modeling discontinuities and volatility clustering while maintaining arbitrage-free pricing. Recent econometric adv-
ances include timechange methods [7], realized-volatility approaches [2], and jump detection tests [1], all of which reinforce the empirical necessity of heavy-tailed specifications. Another strand of literature emphasizes econometric testing and model comparison. [6] GARCH model, and later EGARCH [22], demonstrated how conditional heteroskedasticity generates unconditional heavy tails. [14] conducted large-scale forecast comparisons, showing that models with heavy-tailed innovations systematicall-
y outperform Gaussian specifications. Extreme Value Theory methods [20] and flexible parametric distributions such as the Skewed Generalized T [3] have been widely employed for tail risk measurement and regulatory capital estimation. Behavioral finance introduces additional econometric challenges. Prospect theory [16, 26] and cumulative probability weighting imply nonlinear distortions of return distributions. While these models capture empirically observed biases, their lack of infinite divisibil-
ity often renders them inconsistent with dynamic pricing frameworks. Recent work [25] has shown how bounded modifications of probability weighting can be embedded in rational dynamic asset pricing models while preserving arbitrage-free conditions. The literature just reviewed establishes three points critical to our contribution: (1) heavy tails are an econometric regularity of financial data; (2) mathematically consistent heavy-tail models exist but are rarely integrated with behavioral distortio-
ns; and (3) econometric procedures for jointly estimating tail and behavioral parameters remain underdeveloped. Our paper addresses this gap by introducing a Student’s t-based behavioral framework that preserves infinite divisibility, provides tractable likelihood-based estimation, and improves statistical inference for risk measurement and pricing applications.
3 Theoretical Framework
A central requirement of econometric models in dynamic asset pricing is infinite divisibility, which ensures temporal consistency and compatibility with arbitrage-free pricing. If a return distribution is infinitely divisible, the joint distribution of returns across subperiods can be represented consistently for any partition of the time horizon.
Definition 1 (Infinite Divisibility). A random variable X is infinitely divisible if for every positive integer n, there exist independent and identically distributed random variables X1, X2, . . . , Xn
such that X =d X1 + X2 + · · · + Xn.
2

While Gaussian and stable laws satisfy infinite divisibility, they fail to capture empirically observed return behavior. Student’s t distributions, by contrast, are both empirically superior and mathematically admissible.
Theorem 1 (Student’s t Infinite Divisibility). All Student’s t distributions with degrees of freedom parameter ν > 0 are infinitely divisible [13].
The Student’s t distribution with location μ, scale σ, and degrees of freedom ν has density:
f (x; ν, μ, σ) = Γ ν+1
2
Γν
2
√νπσ 1 + (x − μ)2
νσ2
− ν+1
2
(1)
We extend this framework by introducing a behavioral adjustment operator that preserves infinite divisibility. Let Ft(x) denote the cumulative distribution function of a Student’s t random variable and w : [0, 1] → [0, 1] be a probability weighting function. We define:
Bw[x] = x · 1 + θ · tanh β · w(Ft(x))
Ft(x) − 1 (2)
where θ ∈ [0, 0.3] controls adjustment magnitude and β > 0 determines sensitivity.
Theorem 2 (Preservation of Infinite Divisibility). Let X be an infinitely divisible Student’s t random variable and Bw be the behavioral adjustment operator defined in equation (2). If the probability weighting function w is Lipschitz continuous and θ ≤ 0.3, then Y = Bw[X] remains infinitely divisible.
This result ensures compatibility with the Fundamental Theorem of Asset Pricing and preserves tractability for likelihood-based estimation.
4 Estimation and Asymptotic Properties
4.1 Model Setup
Let Rt denote asset returns at time t. We assume
Rt ∼ tν(μ, σ),
a Student’s t distribution with location parameter μ, scale parameter σ, and degrees of freedom ν > 2, ensuring finite variance. To capture behavioral distortions, we introduce a probability weighting operator w(p; α), parameterized by α ∈ (0, 1), following Prelec (1998). The behavioraladjusted return distribution is defined by its cumulative distribution function (CDF):
Fbw(r; θ) = w(Ft(r; ν, μ, σ); α),
where θ = (μ, σ, ν, α).
Our objective is to estimate θ consistently and establish asymptotic normality of the estimators.
4.2 Likelihood-Based Estimation
For a sample {R1, . . . , RT }, the log-likelihood under the behavioral-adjusted Student’s t distribution is
lT (θ) =
T
X
t=1
log fbw(Rt; θ),
3

where fbw(·; θ) is the density implied by the weighted CDF transformation. Direct evaluation requires numerical integration; however, under Lipschitz continuity of w(·; α), the transformation preserves smoothness and ensures that the likelihood is well-defined. The maximum likelihood estimator (MLE) is given by
θˆT = arg max
θ∈Θ lT (θ),
with parameter space Θ = {(μ, σ, ν, α) : σ > 0, ν > 2, α ∈ (0, 1)}.
4.3 Identification
Identification of ν and α requires that behavioral weighting and tail thickness affect distinct features of the distribution. The tail index is determined by ν, while α alters cumulative probabilities without changing the polynomial rate of decay. Formally, if two parameter vectors θ1 and θ2 generate the same distribution, then both the tail index and the distortion function must coincide, ensuring point identification.
4.4 Asymptotic Properties
Under standard regularity conditions for MLE (compactness of Θ, Lipschitz continuity of w, and integrability of log-likelihood derivatives), we obtain the following result:
Theorem 3 (Consistency and Asymptotic Normality). Let {Rt} be i.i.d. returns generated from the behavioral Student’s t model. Then:
1. θˆT
−p→ θ0, the true parameter vector.
2. √T (θˆT − θ0) −d→ N (0, I(θ0)−1),
where I(θ0) = E[−∇2lT (θ0)] is the Fisher information matrix.
The proof follows from standard M-estimation theory and is provided in Appendix A.
4.5 Hypothesis Testing
We consider two hypothesis tests:
• Tail thickness: H0 : ν = ∞ (Gaussian) versus H1 : ν < ∞. A likelihood ratio test provides a formal econometric test of Gaussian assumptions.
• Behavioral distortion: H0 : α = 1 (no weighting) versus H1 : α ∈ (0, 1). Wald or likelihood ratio tests evaluate the significance of behavioral distortions.
Both tests can be implemented with standard asymptotics, using critical values from the χ2 distribution. Joint testing of (ν, α) allows assessment of whether heavy tails and behavioral weighting both contribute significantly beyond Gaussian benchmarks.
5 Empirical Results
5.1 Data
Our dataset comprises 432,752 daily observations from 86 assets across 25 categories spanning January 2004 to December 2024. Asset categories include US equities (large-, mid-, small-cap), international developed and emerging markets, fixed income (treasury, corporate, municipal bonds), commodities, and sector-specific exposures. Figure 1 presents our systematic research methodology.
4

Figure 1: Research Methodology Framework
5

5.2 Model Selection and Distributional Fit
Table 1 presents comprehensive summary statistics across representative asset categories, revealing systematic departures from normal distribution assumptions.
Table 1: Descriptive Statistics by Asset Category
Asset Category Obs Mean Std Dev Skew Kurt Min Max
SPY US Large Cap 5,252 0.0006 0.0121 −0.37 5.68 −0.095 0.110 VTI US Large Cap 4,775 0.0007 0.0121 −0.37 5.61 −0.095 0.110 IVV US Large Cap 5,252 0.0006 0.0121 −0.37 5.68 −0.095 0.110 IJH US Mid Cap 5,252 0.0008 0.0146 −0.42 6.71 −0.132 0.128 MDY US Mid Cap 5,673 0.0007 0.0145 −0.44 7.24 −0.132 0.128 VO US Mid Cap 4,775 0.0008 0.0146 −0.42 6.69 −0.132 0.128 VTEB Muni Bonds 2,799 0.0002 0.0029 0.024 4.22 −0.024 0.019 MUB Muni Bonds 4,145 0.0002 0.0030 0.069 4.14 −0.024 0.022
Figure 2 illustrates systematic departures from normality across our comprehensive dataset. Gaussian assumptions are rejected at the 5% significance level for 100% of assets using Shapiro–Wilk, Jarque–Bera, Anderson–Darling, and Kolmogorov–Smirnov tests. Table 2 summarizes likelihood-based comparisons.
Table 2: Distribution Model Performance Comparison
Distribution Avg AIC Best Model Count Best Model %
Normal −26,250.4 0 0.0% Student’s t −27,815.8 76 88.4% Laplace −27,284.1 10 11.6%
Student’s t distributions provide the best fit in 88.4% of cases based on AIC, with an average improvement of 1,565 points over Gaussian benchmarks.
5.3 Parameter Estimates
Estimated degrees of freedom cluster between 4 and 7 for equity indices, reflecting pronounced tail risk, while bond exposures exhibit higher values (8–12). For the behavioral specification, estimated weighting parameters αˆ average 0.78, with Wald tests rejecting H0 : α = 1 in 72% of cases. Figure 3 presents comprehensive model performance comparisons across asset classes.
5.4 Tail Risk Measurement
Under Gaussian assumptions, 99% VaR is underestimated by 19.7% on average, with particularly severe errors in emerging markets (24.3%) and commodities (22.1%). The behavioral Student’s t specification reduces average errors to below 3.2%. Backtesting procedures [8, 18] confirm that exceedance rates under our specification are statistically indistinguishable from nominal levels. Table 3 summarizes Value-at-Risk estimation errors across models and asset classes.
5.5 Out-of-Sample Forecasting
Rolling-window forecasts using a 1,000-day estimation window show that the behavioral Student’s t specification significantly outperforms Gaussian and Laplace benchmarks in 81% of cases based on Diebold–Mariano tests. Parameter stability checks indicate lower degrees of freedom and stronger probability weighting during crisis periods.
6

Figure 2: Empirical Evidence Against Normality Assumptions. Panel A shows Q-Q plots comparing empirical quantiles to Normal distribution for representative assets. Panel B displays histogram overlays with fitted Normal (dashed) and Student’s t (solid) densities. Panel C presents tail probability comparisons on log scale, demonstrating substantial differences between empirical data and Normal assumptions.
Table 3: Value-at-Risk Estimation Performance
Normal Model Behavioral Student’s t
Asset Class Avg Err Max Err Viol Avg Err Max Err Viol
US Equities 18.3% 31.2% 1.8% 2.9% 5.1% 1.1% International Eq 19.8% 28.7% 2.1% 3.1% 5.8% 1.0% Emerging Mkts 24.3% 39.4% 2.7% 3.4% 6.2% 1.2% Corp Bonds 16.2% 22.1% 1.5% 2.8% 4.9% 0.9% Commodities 22.1% 35.6% 2.4% 3.5% 6.7% 1.1%
Overall Avg 19.7% 31.4% 2.1% 3.2% 5.7% 1.1%
7

Figure 3: Model Performance Comparison Across Asset Classes. The figure displays loglikelihood improvements of Student’s t relative to Normal specifications across different asset categories. Box plots show distribution of improvements within each category. All asset classes exhibit substantial improvements, with equity indices showing largest gains.
8

5.6 Robustness
Results are robust to: (1) alternative weighting functions [12], (2) subperiod analyses (pre-2008, post-2008, COVID-19), and (3) block bootstrap inference accounting for serial dependence.
6 Implications and Discussion
6.1 Consequences of Gaussian Misspecification
Our results confirm universal rejection of Gaussian assumptions with economically large consequences. The 19.7% average underestimation of tail risk highlights the danger of relying on Gaussian models for risk measurement, pricing, and regulatory capital calculations. This misspecification propagates into biased inference and unstable parameter estimates.
6.2 Econometric Value of Student’s t Specification
The Student’s t distribution provides a parsimonious yet flexible framework for heavy-tailed modeling. Its infinite divisibility ensures compatibility with continuous-time theory, while the degrees-of-freedom parameter offers direct control over tail behavior. The empirical dominance across diverse asset classes suggests it should serve as a baseline model for heavy-tailed inference in financial econometrics.
6.3 Behavioral Adjustments and Identification
Behavioral weighting parameters are statistically significant even after controlling for heavy tails, indicating that probability distortions represent a distinct phenomenon. Our framework demonstrates that behavioral features can be incorporated without sacrificing mathematical consistency, provided adjustments are properly bounded.
6.4 Broader Econometric Applications
The framework opens new directions including diagnostic tests for behavioral distortions, extensions to multivariate settings where heavy tails and probability weighting interact with dependence structures, and applications to high-frequency data where properties may vary dynamically.
7 Conclusion
This paper develops an econometric framework integrating heavy-tailed Student’s t distributions with behavioral probability weighting while preserving infinite divisibility. We establish that bounded weighting transformations maintain the mathematical properties required for continuous-time modeling and derive likelihood-based estimation procedures with established asymptotic properties. Empirical analysis using 432,752 observations across 86 assets demonstrates the framework’s relevance. Gaussian-
 models are universally rejected, Student’s t specifications dominate in 88.4% of cases, and behavioral parameters are statistically significant in 72% of assets. Gaussian misspecification leads to 19.7% underestimation of tail risk, while our specification reduces errors below 3.2%. Future research may extend the framework to multivariate settings, time-varying parameters, and high-frequency applications where heavy tails and behavioral distortions evolve dynamically.
9

Funding
No funding was received for this work.
Data Availability
Replication materials are available at https://github.com/akashdeepo/Heavy-Tailed-Distributions-in-Be The repository includes complete Jupyter notebooks, documentation, and instructions to reproduce all analyses. The implementation uses Python 3.12.11 with standard statistical libraries and can be executed on standard hardware within 2–3 hours.
Competing Interests
No competing interest is declared.
Author Contributions
A.D., S.T.R., and F.J.F. conceived the research framework. A.D. conducted the empirical analysis and wrote the initial manuscript. All authors contributed to the theoretical development, reviewed and edited the manuscript, and approved the final version.
Acknowledgments
The authors thank the anonymous reviewers for their valuable suggestions.
A Proof of Theorem 2: Preservation of Infinite Divisibility
Proof. Let X ∼ t(ν, μ, σ) with characteristic function φX (u). We show that Y = Bw[X] maintains infinite divisibility under the stated conditions.
Step 1: Boundedness Analysis. Since tanh(z) ∈ (−1, 1) for all z ∈ R and θ ≤ 0.3, the adjustment factor satisfies:
1 + θ · tanh β · w(Ft(x))
Ft(x) − 1 ∈ [0.7, 1.3]
Step 2: Lipschitz Continuity. For probability weighting functions satisfying |w′(p)| ≤ L for some constant L > 0, the behavioral adjustment operator is Lipschitz continuous. Let ft(·) denote the density of the Student’s t distribution. Then:
d
dx
w(Ft(x))
Ft(x) ≤ L · ft(x)
Ft(x) + w(Ft(x)) · ft(x)
Ft(x)2 ≤ C
for some constant C > 0.
Step 3: Characteristic Function Analysis. The characteristic function of Y can be written as:
φY (u) = E[exp(iu · Bw[X])]
Since Bw is a bounded Lipschitz transformation, the characteristic function φY (u) inherits the infinite divisibility structure from φX (u).
10

Step 4: Lévy Measure Preservation. Under the transformation Y = Bw[X], the Lévy measure νY of Y is related to the Lévy measure νX of X through:
νY (B) = νX (B−1
w (B))
for Borel sets B. The boundedness ensures the transformed measure satisfies the integrability condition, preserving infinite divisibility.
B Proof of Theorem 3: Consistency and Asymptotic Normality
Proof. The proof follows from standard M-estimation theory.
Consistency: Under compactness of Ψ, continuity of fbehav in ψ, and identifiability conditions, the MLE is consistent by standard arguments.
Asymptotic Normality: The score function satisfies:
√1T
T
X
t=1
s(rt; ψ0) −d→ N (0, I(ψ0))
where s(rt; ψ) = ∇ψ ln fbehav(rt; ψ) and I(ψ0) is the Fisher information matrix.
References
[1] Y. Aït-Sahalia and J. Jacod. Testing for jumps in a discretely observed process. 2009.
[2] T. G. Andersen, T. Bollerslev, F. X. Diebold, and P. Labys. Modeling and forecasting realized volatility. Econometrica, 71(2):579–625, 2003.
[3] T. G. Bali and P. Theodossiou. A conditional-sgt-var approach with alternative garch models. Annals of Operations Research, 151(1):241–267, 2007.
[4] O. E. Barndorff-Nielsen. Normal inverse gaussian distributions and stochastic volatility modelling. Scandinavian Journal of statistics, 24(1):1–13, 1997.
[5] R. C. Blattberg and N. J. Gonedes. A comparison of the stable and student distributions as statistical models for stock prices. In Perspectives on promotion and database marketing: The collected works of Robert C Blattberg, pages 25–61. World Scientific, 2010.
[6] T. Bollerslev. Generalized autoregressive conditional heteroskedasticity. Journal of econometrics, 31(3):307–327, 1986.
[7] P. Carr and L. Wu. Time-changed lévy processes and option pricing. Journal of Financial economics, 71(1):113–141, 2004.
[8] P. F. Christoffersen. Evaluating interval forecasts. International economic review, pages 841–862, 1998.
[9] R. Cont and P. Tankov. Financial modelling with jump processes. Chapman and Hall/CRC, 2003.
[10] E. Eberlein and U. Keller. Hyperbolic distributions in finance. Bernoulli, pages 281–299, 1995.
[11] E. F. Fama. The behavior of stock-market prices. The journal of Business, 38(1):34–105, 1965.
11

[12] R. Gonzalez and G. Wu. On the shape of the probability weighting function. Cognitive psychology, 38(1):129–166, 1999.
[13] E. Grosswald. The student t-distribution of any degree of freedom is infinitely divisible. Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete, 36(2):103–109, 1976.
[14] P. R. Hansen and A. Lunde. A forecast comparison of volatility models: does anything beat a garch (1, 1)? Journal of applied econometrics, 20(7):873–889, 2005.
[15] S. L. Heston. A closed-form solution for options with stochastic volatility with applications to bond and currency options. The review of financial studies, 6(2):327–343, 1993.
[16] D. Kahneman and A. Tversky. Prospect theory: An analysis of decision under risk. In Handbook of the fundamentals of financial decision making: Part I, pages 99–127. World Scientific, 2013.
[17] D. Kelker. Infinite divisibility and variance mixtures of the normal distribution. The Annals of mathematical statistics, 42(2):802–808, 1971.
[18] P. H. Kupiec et al. Techniques for verifying the accuracy of risk measurement models, volume 95. Division of Research and Statistics, Division of Monetary Affairs, Federal . . . , 1995.
[19] B. Mandelbrot et al. The variation of certain speculative prices. Journal of business, 36(4): 394, 1963.
[20] A. J. McNeil and R. Frey. Estimation of tail-related risk measures for heteroscedastic financial time series: an extreme value approach. Journal of empirical finance, 7(3-4): 271–300, 2000.
[21] R. C. Merton. Option pricing when underlying stock returns are discontinuous. Journal of financial economics, 3(1-2):125–144, 1976.
[22] D. B. Nelson. Conditional heteroskedasticity in asset returns: A new approach. Econometrica: Journal of the econometric society, pages 347–370, 1991.
[23] P. D. Praetz. The distribution of share price changes. Journal of business, pages 49–55, 1972.
[24] W. Schoutens. Lévy processes in finance: pricing financial derivatives. Wiley Online Library, 2003.
[25] A. Shirvani, F. J. Fabozzi, B. Racheva-Iotova, and S. T. Rachev. Option pricing with greed and fear factor: the rational finance approach. Journal of Derivatives, 29(2):77–119, 2021.
[26] A. Tversky and D. Kahneman. Advances in prospect theory: Cumulative representation of uncertainty. Journal of Risk and uncertainty, 5(4):297–323, 1992.
12

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:28.642Z
- **Text Length:** 24664 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
