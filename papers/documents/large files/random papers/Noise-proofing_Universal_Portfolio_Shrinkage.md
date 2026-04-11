# PDF Document: Ruelloux et al. - 2025 - Noise-proofing Universal Portfolio Shrinkage.pdf

**File Path:** Ruelloux et al. - 2025 - Noise-proofing Universal Portfolio Shrinkage.pdf

**Processed Date:** 2026-02-10T18:18:16.244Z

**File Size:** 445.01 KB

**Total Pages:** 8

**Extracted Pages:** 8

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3513

**Title:** Noise-proofing Universal Portfolio Shrinkage

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

NOISE-PROOFING UNIVERSAL PORTFOLIO SHRINKAGE
Paul Ruelloux1,2, Christian Bongiorno1, Damien Challet1,
1Université Paris-Saclay, Laboratoire de Mathématiques et Informatique pour la Complexité et les Systèmes (MICS) 2Barclays Bank Ireland PLC
{name}.{surname}@centralesupelec.fr
ABSTRACT
We enhance the Universal Portfolio Shrinkage Approximator (UPSA) of Kelly et al. (2023) by making it more robust with respect to estimation noise and covariate shift. UPSA optimizes the realized Sharpe ratio using a relatively small calibration window, leveraging ridge penalties and cross-validation to yield better portfolios. Yet, it still suffers from the staggering amount of noise in financial data. We propose two methods to make UPSA more robust and improve its efficiency: time-averaging of th-
e optimal penalty weights and using the Average Oracle correlation eigenvalues to make covariance matrices less noisy and more robust to covariate shift. Combining these two long-term averages outperforms UPSA by a large margin in most specifications.
1 Introduction
Markowitz portfolio theory (Markowitz, 1952) prescribes efficient portfolios that achieve maximum risk-adjusted performance, but the quality of such portfolios depends critically on the accuracy of the estimated covariance matrix (Michaud, 1989). In practice, estimation noise severely undermines performance, especially when the number of assets n is of the same order as the sample size ∆t, i.e., in the high-dimensional case: sample covariance matrix estimates become very noisy and require filterin-
g. Current state-of-the-art shrinkage methods address this problem by transforming the in-sample (IS) eigenvalues to minimize the expected mean-squared error (MSE) between the sample and population covariance matrices, thereby indirectly improving the out-of-sample (OOS) portfolio performance (Bun et al., 2017; Ledoit and Péché, 2011).
The Universal Portfolio Shrinkage Approximator (UPSA), proposed by Kelly et al. (2023), is a flexible nonlinear spectral shrinkage method that aims to maximize the expected OOS Sharpe ratio. Its robustness comes from Cross-Validation (CV) and weighted set of portfolios associated to ridge penalization factors. While improves upon simpler shrinkage techniques, it still suffers from sample noise: the optimal ridge portfolio weights tend to be concentrated on a single one, which itself varies much as-
 a function of time. This comes from the fact that CV still leaves too much noise in high-dimensional settings and cannot account for covariate shift (Cawley and Talbot, 2010; Arlot and Celisse, 2010). As a consequence, the performance of UPSA substantially depends on the ridge penalty grid and can be improved by further filtering.
We propose two simple remedies that boost UPSA performance by reducing the influence of sample noise. First, we replace sample-specific optimal weights of ridge-penalized portfolios with their time averages (computed over expanding time windows). Second, we apply a pre-filtering of correlation eigenvalues known as the Average Oracle (AO) method (Bongiorno et al., 2023), which also replaces local filtering with time averages of optimal eigenvalues; this method is known to over-perform CV (Bongiorno-
 et al., 2023; Bongiorno and Challet, 2024). Combining both improvements brings better performance than either UPSA or AO alone when applied on monthly factor returns.
This letter is organized as follows. Section 2 introduces the rationale and construction of UPSA and discusses its limitations and introduces the proposed remedies. Section 3 reports empirical results across different configurations. Section 4 concludes and proposes to interpret UPSA as first-order improvement of Average Oracle.
arXiv:2511.10478v1 [q-fin.RM] 13 Nov 2025

Noise-proofing Universal Portfolio Shrinkage
2 Estimators
2.1 Universal Portfolio Shrinkage Approximator (UPSA)
The objective of a shrinkage approach is to obtain an improved estimate of the unknown population covariance matrix Σ from a finite-sample covariance estimator ˆΣ = 1
∆t (X − μˆ )(X − μˆ )⊤, where X denotes the n × ∆t matrix
of observations with true mean μ and covariance Σ. The method proceeds from the spectral decomposition of Σˆ ,
expressed as Σˆ = Vˆ ˆΛVˆ ⊤, where Vˆ is the orthogonal matrix of eigenvectors and ˆΛ is the diagonal matrix of sample eigenvalues λ = {λk}n
k=1. Shrinkage consists in replacing the empirical eigenvalues λˆk with shrunk (adjusted) values
fˆ(λˆk), where fˆ is a shrinkage function that optimizes a well-chosen cost function: while the so-called Non-Linear
Shrinkage (NLS) estimators minimize the estimation error of Σˆ (Ledoit and Péché, 2011), UPSA aims at maximizing the realized Sharpe ratio. Both methods use data from the calibration window only. As a consequence, the shrinkage function f itself is subject to noise and is denoted by fˆ.
The resulting covariance estimator takes the general form
ˆΞ = Vˆ Diag (fˆ(λˆ))Vˆ ⊤, (1)
where we used a slight abuse of notation: fˆ(λˆ) denotes the vector of shrunk eigenvalues fˆ(λˆi).
In the general formulation, a shrinkage function f : I ⊂ R+ → R+ can be expressed as a function of a positive finite measure ν on R+ as
∀λ ∈ R+, f (λ) =
Z∞
0
1
z + λ dν(z). (2)
Thus, finding the optimal fˆ given the calibration data and a choice of loss function is equivalent to finding the optimal νˆ. Kelly et al. (2023) replace the integral by a weighted combination of ridge-penalized terms ζik := (λk + zi)−1
f (λ) ≈ f (λk | z, α) =
l
X
i=1
αiζik =
l
X
i=1
αi zi + λk
, with k = 1, . . . , n, (3)
where zi are the ridge penalties associated with each weight αi. Given a set of ridge penalties z = {zi}l
i=1, the weights
α = {αi}l
i=1 are chosen so as to optimize the loss function.
Let us focus on the Sharpe ratio-maximizing procedure of UPSA: the mixture weights α are estimated through a leave-one-out procedure that separates IS estimation from OOS evaluation. For each fold and each ridge level zi, the method applies the eigenvalue shrinkage defined by ζik := (λk + zi)−1 to the IS covariance estimator ˆΞ and, using the resulting filtered precision matrix together with IS means, computes the IS maximum–Sharpe-ratio portfolio. This portfolio is then evaluated on the held-out -
data to obtain its OOS return. Averaging these basis returns over all the folds yields the OOS mean vector and covariance matrix of basis returns, denoted ˆm(z) ∈ Rland Sˆ (z) ∈ Rl×l. The weights α are then chosen to maximize a concave quadratic objective aligned with the Sharpe criterion, yielding pseudo OOS optimal ridge weights:
ˆαUPSA = arg max
α≥0, 1⊤α=1
α⊤ ˆm(z) − 1
2 α⊤Sˆ (z) α. (4)
Because all moments entering this program are computed on held-out data via the leave-one-out construction, the procedure aims to improve OOS performance.
Finally, the UPSA weights αˆ UPSA are be plugged in Eq. (3) to recover the filtered covariance as in Eq. (1),
fˆ(λ | z, αˆ UPSA) =
l
X
i=1
αˆi,UPSA
zi + λ , thus, Ξˆ UPSA = Vˆ Diag (fˆ( ˆΛ | z, ˆαUPSA) )Vˆ ⊤. (5)
Keeping all the hats was notation-wise heavy but rewarding as it made the sources of noise explicit. In fact, we have neglected the fact that the choice of the grid z may also depend on the calibration data.
2.2 Noise-proofing UPSA
While UPSA is mathematically sound, it can be further improved. A strong (self-imposed) constraint in UPSA is the use of a relatively short calibration window. This choice mechanically leads to quite noisy outcomes, especially
2

Noise-proofing Universal Portfolio Shrinkage
1.0e-10
3.0e-10
8.9e-10
2.6e-09
7.8e-09
2.3e-08
7.0e-08
2.1e-07
6.2e-07
1.8e-06
5.5e-06
1.6e-05
4.8e-05
1.4e-04
4.3e-04
1.3e-03
3.8e-03
1.1e-02
3.4e-02
1.0e-01
Ridge Penalty zi
UPSA ridge weights UPSA
1990
1995
2000
2005
2010
2015
2020
Date
1
2
3
4
5
Herfindahl ( )
0.0
0.2
0.4
0.6
0.8
1.0
w(zi)
Figure 1: Top : Heatmap of UPSA ridge weights in time computed on JKP US factors’ monthly returns, with n = 153 factors, with a ridge penalty grid of l = 20 log-spaced points in [10−10, 10−1]. Bottom: Herfindahl Index (HI) vs time.
when computing optimal quantities, even with a leave-one-out approach. Figure 1 displays the UPSA weights ˆαUPSA as a function of time, computed on the same dataset as Kelly et al. (2023), described below in section 3. We also report the Herfindal Index, a measure of weight concentration, defined here as 1/ Pl
i=1 |αi|2; it equals 1 for perfectly
concentrated vectors, and l for uniform weights (Sleuwaegen et al., 1989). The average absolute change of weights between two calibrations is about 0.45. In short, the weights are highly concentrated on values that change very often.
Averaged UPSA Ridge Weights (AvgUPSA)
The most basic way to mitigate noisy weights is to replace them with a time average (with expanding window): at time t, Eq. (4) , ˆαUPSA,t becomes
ˆαAvgUPSA, t = 1
t − t0
t
X
t′ =t0
ˆαUPSA, t′ . (6)
This solves the noise in the t ≫ t0 limit but is bound to lack reactivity.
Average Oracle (AO)
A major cause of noise in the UPSA weights is the estimation of the covariance matrices. While LOO does filter some noise out, it is far less efficient than other cross-validation techniques in this context (Lamrani et al., 2025). In addition, if at all possible, one should account for the typical way covariance matrices change between calibration window and the test window due to covariate shift. This is the idea behind the Average Oracle, which replaces the sample eigenvalues by rank-wise averag-
es of past "oracle" eigenvalues: it uses the data from past test windows to
3

Noise-proofing Universal Portfolio Shrinkage
compute optimal eigenvalues and thus accounts for some covariate shift (Bongiorno et al., 2023). In order to calibrate the oracle eigenvalues, one considers many consecutive calibration/test sub-windows of a long IS period. For one such pair indexed by b, (Ical,b, Itest,b) of corresponding sample covariance matrices ( ˆΣcal,b, ˆΣtest,b), one computes the vector of Oracle eigenvalues:
λˆO,b = Diag Vˆ ⊤
cal,bΣˆ test,bVˆ cal,b , (7)
where Vˆcal is the eigenvector matrix of Σˆ cal. This choice corresponds to the optimal rotationally invariant shrinkage of Σˆ cal for predicting Σˆ test (Ledoit and Péché, 2011). 1 The Average Oracle eigenvalues are then obtained as rank-wise averages of calibrated oracle eigenvalues: having computed B ≫ 1 oracle eigenvalues:
λˆAO = 1
B
B
X
b=1
λˆO,b. (8)
To avoid look-ahead bias, only oracles computed in the strict past of each evaluation date are included in the averaging. The resulting shrinkage operator is thus:
Ξˆ AO(Σˆ ) = Vˆ Diag (λˆAO) Vˆ ⊤. (9)
AO has been shown to be an effective zeroth-order shrinkage estimator, outperforming state-of-the-art nonlinear shrinkage estimators in many time-varying settings, including large portfolios of equity data (Bongiorno et al., 2023; Bongiorno and Challet, 2024). In addition, by removing entirely the noise of eigenvalues, it leads to much less time-varying portfolio weights.
Combined estimators (UPSA–AO, AvgUPSA–AO)
We use AO eigenvalues to filter all the covariance matrices used in UPSA: those defining ridge portfolios and those used within the cross-validation procedure. Note that AO filters the correlation matrices; the filtered covariance matrices are then reconstructed by rescaling with the original sample volatilities. We call the estimator obtained through this procedure UPSA–AO. We expect the time-variation of the optimal ridge weights to be appreciably smaller than with UPSA alone.
The AvgUPSA–AO estimator combines both enhancements: AO pre-filtering of correlation matrices and the averaging of UPSA-AO weights across past windows. In short, the AO step provides a robust noise reduction of correlation eigenvalues and some robustness to covariate shift prior to the UPSA stage, while the subsequent temporal averaging of UPSA weights further stabilizes the solution against fluctuations induced by grid discretization and sampling noise.
3 Empirical Results
3.1 Data
We use the same dataset as Kelly et al. (2023): monthly returns of 153 characteristic-managed portfolios of US equities between 1970 and 2024 from Jensen et al. (2023).2 We consider five filtering schemes: UPSA, AvgUPSA, AO, UPSA-AO and AvgUPSA-AO. We define the OOS Sharpe ratio of a portfolio π, held for 6 months, with realized returns and risk:
SR = π⊤μˆ OOS
p
π⊤Σˆ OOS π
, (10)
where ˆμOOS and ˆΣOOS are respectively the realized mean vector and the realized covariance matrix over the 6-month period after calibration of π. This definition of the Sharpe Ratio ensures a purely out-of-sample measurement of performance.
UPSA portfolios are computed using LOO CV; AvgUPSA adds an expanding-window mean of the optimized UPSA ridge weights. All of the Average Oracle eigenvalues use an exponentially weighted moving average of calibrated oracles with a half-life of 24 months. AO portfolios correspond to the efficient portfolios with AO-filtered correlation matrix (without UPSA). UPSA-AO and AvgUPSA-AO are obtained by pre-filtering all cross-sectional correlation matrices with AO eigenvalues, including the ones used duri-
ng CV.
1This result stems from minimizing the Frobenius norm ||Σnext − Ξ(Σnext)||F. 2Data available at: https://jkpfactors.com/
4

Noise-proofing Universal Portfolio Shrinkage
10 9 8 7 6 5 4 3
Log10 Penalty grid lower bound
2.1
2.2
2.3
2.4
2.5
Mean annualized Sharpe
OOS Sharpe Ratio vs Penalty grid lower bound
AvgUPSA-AO UPSA-AO AO AvgUPSA UPSA
Figure 2: Mean Annualized Sharpe ratio against the penalty grid lower bound, for portfolios of the different proposed estimators on JKP US characteristic factors monthly returns, 153 assets, in-sample window size T = 120M. Portfolios are rebalanced every month over the period 1985–2024. The realized OOS Sharpe Ratio is computed as the realized return over the 6 months divided by its realized volatility.
3.2 Penalization grid
We first choose the same ridge penalty grid as Kelly et al. (2023), which correspond to the left-most points in Figure 2. All the AO-based filtering schemes over-perform vanilla UPSA and AvgUPSA in a statistically significant way.
Kelly et al. (2023) recommend to use a grid that contains all the sample non-zero eigenvalues, which range from 10−7 to 10−1 in the considered data set. We found indeed that the grid upper bound does not significantly affect the results provided that it is larger than the largest sample eigenvalue. However, the influence of the grid lower bound on UPSA and AvgUPSA performance is far from negligible. Figure 2 reports the OOS Sharpe ratio as a function of the grid lower bound. While the AO-based met-
hods are only weakly sensitive to this choice, UPSA and AvgUPSA are much improved once the lower bound impose larger minimal penalization. However, setting the grid lower bound to 10−4 is unsatisfactory in principle, as this value roughly corresponds to the mean of the empirical eigenvalue distribution. If the eigenvalues did not require any shrinkage, such a choice would therefore enforce an unnecessarily strong penalization, leading to suboptimal portfolios.
The sharp performance drop observed for AO-based estimators when the grid lower bound increases further is a direct consequence of this effect: because AO pre-filtering already compresses the smallest eigenvalues, imposing an excessively high minimal ridge penalty results in an over-shrunk covariance spectrum. In other words, the additional penalization acts on already filtered eigenvalues, effectively degrading precision rather than improving stability. Finally the large over-performance of UPSA--
AO over UPSA is linked to the fact that the optimal ridge weights vary much less between two calibration windows (mean turnover of 0.35 vs 0.42, a highly significant difference) (see sec. 2.2).
3.3 Calibration window length
We investigate the mean performance of the considered estimators on the 1985–2024 period with respect to the IS calibration window size T . We consider the same dataset as before and fix the ridge penalty grid to 20 logarithmically spaced points in [10−8, 10−1]. We run 13 experiments for T varying between 3 and 15 years. In each run, Oracles are calibrated using folds Ical and Itest of respective sizes T and TOOS = 6 months. We can observe a consistent over-performance of combined estimators UPSA--
AO and AvgUPSA-AO over UPSA.
The historical Sharpe ratio performance on the period 1985–2024 can also be visualized as the cumulative log-returns in Fig. 4. Portfolios are rebalanced every month, and their return is measured as the realized return over the following month. The resulting cumulative log-returns are rescaled using a centered 6-month rolling standard deviation, targeting an annualized volatility of 10%. The in-sample calibration window is set to T = 120 months.
5

Noise-proofing Universal Portfolio Shrinkage
4 6 8 10 12 14
In-sample calibration window size (years)
1.8
1.9
2.0
2.1
2.2
2.3
2.4
2.5
Mean annualized Sharpe
OOS Sharpe Ratio vs Calibration window size
AvgUPSA-AO UPSA-AO AO AvgUPSA UPSA
Figure 3: Mean Annualized Sharpe ratio against the in-sample window size, using JKP US factors monthly returns, with N = 153 assets and a penalty grid of 20 log-spaced points in [10−8, 10−1].
1985 1990 1995 2000 2005 2010 2015 2020 2025
Date
0
2
4
6
8
10
Cumulative returns
Cumulative Log Returns (Scaled to 10% Annual Volatility)
AvgUPSA-AO UPSA-AO AO AvgUPSA UPSA
Figure 4: Cumulative log-returns scaled by point-wise 6M centered rolling standard deviations to achieve 10% annual volatility, on JKP US factors’ monthly returns with a fixed in-sample window size of T=120M, and a penalty grid of 20 log-spaced points in [10−8, 10−1]. The graph shows clear consistent historical over-performance of proposed AO-based estimators over UPSA.
6

Noise-proofing Universal Portfolio Shrinkage
Key statistics / Estimators UPSA AvgUPSA AO UPSA-AO AvgUPSA-AO
Mean Annualized Sharpe 2.077 2.061 2.267 2.462 2.493 Mean Diversification 6.7 3.8 6.1 16.4 17.7 Mean Turnover 1.71 1.27 0.67 0.31 0.25 Mean Gross Leverage 5.38 6.01 4.18 2.50 2.32 Max Drawdown -2.66 -4.64 -2.36 -2.65 -2.73 Wilcoxon p-value (Est - UPSA) / 3.8e-01 5.31e-03 2.1e-10 3.1e-11 Wilcoxon p-value (AvgUPSA-AO - Est) 3.1e-11 2.8e-10 8.1e-05 1.2e-02 / MCS included (size 0.05) No No No Yes Yes
Table 1: Key statistics of efficient Max Sharpe portfolios estimated on monthly factor returns over the 1985–2024 period. Reported quantities are, from top to bottom: mean annualized Sharpe ratio as computed in Eq. 10, average diversification (inverse sum of squared weights), mean portfolio turnover, gross leverage, and maximum monthly drawdown. The last three rows show one-sided Wilcoxon signed-rank tests comparing Sharpe ratios of estimators vs. UPSA, AvgUPSA-AO vs. estimators and the Model Conf-
idence Set (MCS) inclusion at 5% test size. Portfolios are optimized with an in-sample window size of T = 120 months. The ridge penalty grid contains 20 logarithmically spaced values in [10−8, 10−1].
3.4 Statistical analysis
Table 1 reports the main statistics of the maximum–Sharpe portfolios obtained from the five estimators applied to monthly factor returns over the period 1985–2024, using an in-sample calibration window of T = 120 months and a fixed grid of 20 logarithmically spaced penalty values between 10−8 and 10−1. All Sharpe ratios and associated statistical tests are computed from the out-of-sample Sharpe ratio defined in Eq. (10). The table displays, in order, the mean annualized Sharpe ratio, average diver-
sification (inverse of the sum of squared portfolio weights), mean turnover, gross leverage, maximum monthly drawdown, and the outcomes of the statistical tests.
Using one-sided Wilcoxon signed-rank tests for performance comparisons, we find that the proposed AvgUPSA–AO estimator achieves the highest out-of-sample Sharpe ratio, outperforming all others, including the second best. UPSA–AO, with a p–value of 0.012. It is also superior to the other estimators in all criteria except for the maximum drawdown. In contrast, AvgUPSA is found to perform slightly worse than UPSA under this configuration, though this difference is not statistically significant (p–val-
ue equal to 0.38). However, for alternative penalty grids with higher lower bounds, AvgUPSA outperforms UPSA. In fact AvgUPSA is consistently better than UPSA when considering monthly rebalancing of the portfolios and for every penalty grid, as can be observed in Figure 4.
To ensure robustness in the statistical assessment, we further apply the Model Confidence Set (MCS) procedure (Hansen et al., 2011), which identifies the subset of estimators that are statistically indistinguishable from the best-performing one, using the negative out-of-sample Sharpe ratio as loss function. The MCS results confirm that both UPSA–AO and AvgUPSA–AO belong to the superior set of models (test size of 0.05). , confirming their advantage over the other estimators.
In summary, the AvgUPSA–AO estimator demonstrates a statistically significant and robust improvement over all alternatives. Its performance gains stem from the combination of the AO pre-filtering, which stabilizes correlation estimation, and the averaging of optimized weights. Quite notably, it is better than either UPSA or AO of their own.
4 Conclusion
Despite its undeniable filtering abilities, UPSA suffers from too much noise and a strong dependence on the choice of penalty grid. Filtering noise further increases the abilities of UPSA. First, using long time averages of past optimal ridge weights improves the performance of UPSA for well chosen grids. Second, pre-filtering covariance matrices with Average Oracle provides a strong baseline, effectively stabilizing covariance estimates and accounting partly for covariate shift before the UPSA re-
finement. Finally, compounding averaging and AO filtering yields the novel estimator AvgUPSA-AO that inherits the regularization benefits of both approaches and outperforms statistically significantly all other tested methods across most settings.
From a broader perspective, the UPSA part of AvgUPSA-AO acts as a first-order improvement over AO, a zeroth-order nonlinear filtering method. This opens the question of using the UPSA technique to optimize the optimal oracle values directly, as well as using adaptive grid bounds. Other future directions include exploring new parametrized families of covariance filtering, such as the James–Stein shrinkage for eigenvectors by Goldberg and Kercheval (2023).
7

Noise-proofing Universal Portfolio Shrinkage
Acknowledgments
P.R. acknowledges funding from ANRT, under the CIFRE contract nr 2025/0279.
This publication used HPC resources from the “Mésocentre” computing center of CentraleSupélec and École Normale Supérieure Paris-Saclay supported by CNRS and Région Île-de-France.
References
Sylvain Arlot and Alain Celisse. A survey of cross-validation procedures for model selection. Statistics Surveys, 4 (none):40 – 79, 2010. doi: 10.1214/09-SS054.
Christian Bongiorno and Damien Challet. Covariance matrix filtering and portfolio optimisation: the average oracle vs non-linear shrinkage and all the variants of DCC-NLS. Quantitative Finance, 24(9):1227–1234, 2024.
Christian Bongiorno, Damien Challet, and Grégoire Loeper. Filtering time-dependent covariance matrices using time-independent eigenvalues. Journal of Statistical Mechanics: Theory and Experiment, 2023(2):023402, 2023.
Joël Bun, Jean-Philippe Bouchaud, and Marc Potters. Cleaning large correlation matrices: tools from random matrix theory. Physics Reports, 666:1–109, 2017.
Gavin Cawley and Nicola Talbot. On over-fitting in model selection and subsequent selection bias in performance evaluation. Journal of Machine Learning Research, 11:2079–2107, 07 2010.
Lisa R. Goldberg and Alec N. Kercheval. James–Stein for the leading eigenvector. Proceedings of the National Academy of Sciences, 120(2):e2207046120, 2023. doi: 10.1073/pnas.2207046120.
Peter R. Hansen, Asger Lunde, and James M. Nason. The model confidence set. Econometrica, 79(2):453–497, 2011. doi: https://doi.org/10.3982/ECTA5771.
Theis Jensen, Bryan Kelly, and Lasse Pedersen. Is there a replication crisis in finance? The Journal of Finance, 78: 2465–2518, 06 2023. doi: 10.1111/jofi.13249.
Bryan T Kelly, Semyon Malamud, Mohammad Pourmohammadi, and Fabio Trojani. Universal portfolio shrinkage. Working Paper 32004, National Bureau of Economic Research, December 2023.
Lamia Lamrani, Christian Bongiorno, and Marc Potters. Optimal data splitting for holdout cross-validation in large covariance matrix estimation. arXiv preprint arXiv:2503.15186, 2025.
Olivier Ledoit and Sandrine Péché. Eigenvectors of some large sample covariance matrix ensembles. Probability Theory and Related Fields, 151(1):233–264, 2011.
Harry Markowitz. Portfolio selection. The Journal of Finance, 7(1):77–91, 1952. ISSN 00221082, 15406261.
Richard O Michaud. The Markowitz optimization enigma: Is ‘optimized’optimal? Financial Analysts Journal, 45(1): 31–42, 1989.
Leo E Sleuwaegen, Raymond R De Bondt, and Wim V Dehandschutter. The Herfindahl index and concentration ratios revisited. Antitrust Bull., 34:625, 1989.
8

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:16.244Z
- **Text Length:** 25161 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 8 of 8
