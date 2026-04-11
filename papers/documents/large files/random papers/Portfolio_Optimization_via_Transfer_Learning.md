# PDF Document: Wang et al. - 2025 - Portfolio Optimization via Transfer Learning.pdf

**File Path:** Wang et al. - 2025 - Portfolio Optimization via Transfer Learning.pdf

**Processed Date:** 2026-02-10T18:16:23.478Z

**File Size:** 922.50 KB

**Total Pages:** 39

**Extracted Pages:** 39

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3535

**Title:** Portfolio Optimization via Transfer Learning

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Portfolio Optimization via Transfer Learning
by Kexin Wang1, Xiaomeng Zhang2, and Xinyu Zhang3a,3b
1 School of Management, University of Science and Technology of China, Anhui, China, wkx1220@mail.ustc.edu.cn 2 Econometric Institute, Erasmus University Rotterdam, Burgemeester Oudlaan 50, 3062 PA Rotterdam, Netherlands, zhang@ese.eur.nl 3a Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, China, xinyu@amss.ac.cn 3b School of Management, University of Science and Technology of China, Anhui, China, xinyu143@ustc.edu.cn The authors would like to thank Professor Dache-
ng Xiu and Dr. Shiwei Huang for their insightful comments which have helped improve the manuscript substantially.
arXiv:2511.21221v1 [q-fin.PM] 26 Nov 2025

Portfolio Optimization via Transfer Learning
Abstract
Recognizing that asset markets generally exhibit shared informational characteristics, we develop a portfolio strategy based on transfer learning that leverages cross-market information to enhance the investment performance in the market of interest by forward validation. Our strategy asymptotically identifies and utilizes the informative datasets, selectively incorporating valid information while discarding the misleading information. This enables our strategy to achieve the maximum Sharpe ratio -
asymptotically. The promising performance is demonstrated by numerical studies and case studies of two portfolios: one consisting of stocks dual-listed in A-shares and H-shares, and another comprising equities from various industries of the United States.
2

Finding optimal portfolio strategies is a fundamental challenge for investors. When
determining the portfolio strategies on a specific market or asset class that we are
interested in, the traditional strategies, such as the mean-variance portfolio theory
proposed by Markowitz (1952) and its variants (Jagannathan and Ma 2003; Ledoit and
Wolf 2004; Bickel and Levina 2008; Fan et al. 2008, 2012; Ledoit and Wolf 2018; Fan
et al. 2015; Ledoit and Wolf 2017; Ao et al. 2018; Yuan and Zhou 2024), are usually built
up with the information solely on that specific market or asset class itself. However,
data specific to the market or asset class that we are interested in are often insufficient
due to high volatility, structural breaks, and high-dimensional features, which can lead
to suboptimal portfolio decisions. Moreover, when it comes to a emerging market or a
newly thematic sector (e.g., ESG or crypto), its historical data is usually quite limited,
making it more difficult to construct a reliable portfolio allocation. Thus, this article
is motivated to compensate for the insufficiency of the market dataset of interest.
In this paper, we address the insufficiency of the market dataset of interest by
transferring information from other related market datasets, such as those where the
same stocks are traded. We propose a new portfolio strategy based on transfer learning
technology. It possesses the asymptotic optimality in terms of maximizing the Sharpe
ratio index in the large sample sense, which can balance the expected return of investors
with the risk they are taking on; see Sharpe (1994) for a review of the development of
the Sharpe ratio.
Transfer learning, a branch of machine learning, focuses on transferring related
knowledge from source domains (e.g., other related market datasets) to a potentially
different target domain (e.g., the market dataset of interest); see Pan and Yang (2010),
Zhuang et al. (2021) and Koshiyama et al. (2022) for the literature review. The trans
fer learning technology is feasible in portfolio optimization due to the fact that many
markets across sectors, industries, and asset classes often display shared patterns and
inter-dependencies driven by macroeconomic factors, supply chain dynamics, investor
behavior and so on (see, e.g., Buccheri et al. 2021; Kelly et al. 2023; Guo 2025). For
3

example, the analysis of the H-shares and A-shares benefits significantly from incor
porating information from the other market. This utility stems from the fundamental
commonality of cross-listed companies. Since the corresponding H-shares and A-shares
represent ownership in the same entity, their intrinsic value drivers, such as profitability
and operational risk, are closely linked. Consequently, price deviations in one mar
ket, often resulting from information asymmetry or local sentiment, can be identified
through price movements in the other. This spillover effect of information provides
critical incremental insights for accurate asset valuation, mispricing detection, and the
development of more robust investment strategies.
To transfer knowledge from other related markets for the portfolio optimization
in the market of interest, Cao et al. (2023) developed a transfer learning technique,
provided theoretical analyses of the transfer risk and applied it in three numerical ex
periments, including cross-continent transfer, cross-sector transfer and cross-frequency
transfer. However, they limited their strategy to transferring portfolio strategies from a
single source dataset, rather than from multiple sources. Although the proposed trans
fer risk in this research can serve as a prior to figure out the suitable source datasets,
relying on only a single source dataset may yield inferior results compared to leveraging
multiple sources collectively when these source datasets are regarded as having relatively
low risk. Moreover, estimating this transfer risk still requires additional assumptions
about the distributions of the source and target data, such as assuming multivariate
normality. By contrast, our strategy allows information to be transferred from multiple
source datasets simultaneously and offers corresponding theoretical foundations.
Except for Cao et al. (2023), how to transfer information for portfolio construction
remains relatively underexplored, although transfer learning has been widely adopted
within the financial domain to improve precision and efficiency in areas such as asset
pricing (Kraus and Feuerriegel 2017; Bali et al. 2023; Hellum et al. 2024), default risk as
sessment (Li et al. 2019), and modeling industrial chain interactions (Wu et al. 2022).
In the study of financial investment strategies, Jeong and Kim (2019) investigated
4

trading system and involved transfer learning to handle the overfitting problem arising
from small and highly volatile financial data. Koshiyama et al. (2022) developed a fully
end-to-end global trading architecture (QuantNet) based on transfer learning and meta
learning. By integrating diverse market data, QuantNet learns both market-agnostic
trends and market-specific strategies by separating shared and specialized parameters,
capturing general transferable dynamics and achieving superior returns. M ̈orstedt et al.
(2024) focused on the global minimum variance portfolio (Markowitz 1952) and pro
posed a nonlinear shrinkage estimator for covariance estimation that determines the
shrinkage parameters using cross-validation-based transfer learning. Specifically, cross
validation-based transfer learning requires that the validation set is formed from a
disjoint source dataset of assets, disjoint from the target dataset.
In this article, we directly transfer portfolio strategies across different source datasets
and select the transferring weight vector by forward validation. In addition, we do
not need to assume that markets share specific parameters or structural components,
which allows our strategy to remain flexible and agnostic to the underlying similarity
structure across markets. We also provide three theoretical guarantees for our strategy.
(i) Our strategy automatically excludes uninformative and misleading source datasets,
asymptotically concentrating portfolio weights on the informative datasets, in contrast
to Cao et al. (2023), which relies on pre-estimating transfer risk to choose the source
dataset. (ii) Our portfolio strategy can asymptotically achieve the maximum attainable
Sharpe ratio. (iii) The variance of the Sharpe ratio under our strategy is asymptotically
lower than that of the N on − transf er baseline strategy which only relies on the target
dataset if there exists informative source dataset for the target market dataset. If none
of the source dataset is informative for the target, then the variance of the Sharpe ratio
under our strategy is asymptotically equivalent to that of the N on − transf er strategy.
Our strategy is inspired by the optimal model averaging strategy (Hansen 2007),
which is a frequentist model averaging technique aiming at optimally combine predic
tions or estimates from multiple candidate models; see Moral-Benito (2015) for a review
5

of the literature. More recently, Hu and Zhang (2023) and Zhang et al. (2024) have
integrated the basic idea of optimal model averaging with transfer learning, introduc
ing the concept of optimal transfer learning. However, both Hu and Zhang (2023) and
Zhang et al. (2024) focused primarily on improving predictive accuracy and were not
applicable for portfolio optimization. Hence, in this article, we adapt optimal transfer
learning specifically for portfolio optimization. Although our strategy is developed in
the context of portfolio optimization, the central idea can be readily extended to other
decision-making problems.
To validate the superiority of our strategy, we conduct numerical simulations and
empirical applications focused on two scenarios: investing in stocks dual-listed in both
H-shares and A-shares, and investing across different industries of the United States.
Results confirm our theoretical conclusions that the inclusion of auxiliary datasets
through transfer learning significantly enhances portfolio performance.
The remainder of this article is organized as follows. Section 1 presents the problem
of interest and the model framework. Section 2 establishes the asymptotic properties of
our procedure. The performance of the proposed strategy is investigated via numerical
simulations in Section 3 and the empirical applications in Section 4. Section 5 concludes
the article with some discussion. All technical details including detailed proofs are
provided in the Appendix.
1 Model framework
The concept of Sharpe ratio (SR), also known as the Sharpe Index, was introduced
by Sharpe (1966) to define a measure of the ratio of the return and the volatility. Its
mathematical expression is
SR = E(rp) − rf
σp
,
where E(rp) represents the expected return of the portfolio, rf stands for risk-free asset
and σp is the standard deviation of the portfolio which is used to measure the overall
6

risk of the portfolio. Obviously, Sharpe ratio not only focuses on the return of the
assets, but also focuses on the risk of the assets.
Consider a capital market consisting of d assets with the excess return vector r =
(r1, . . . , rd)⊤. If the corresponding asset allocation is φ = (φ1, . . . , φd)⊤, the payoff is
φ⊤r. Denote the mean vector of the excess return as μ, the covariance matrix as Σ and
Φ = {φ ∈ [0, 1]d| Pd
i=1 φi = 1}. The optimal portfolio problem is to find the maximum
Sharpe ratio by solving the following optimization problem.
φo = arg max
φ∈Φ
E φ⊤r
pVar (φ⊤r) = arg max
φ∈Φ
μ⊤φ
pφ⊤Σφ , (1)
where φo represents the optimal portfolio allocation that maximizes the Sharpe ratio.
Since there may exist other available assets which provide useful information when
investing in the target assets, we want to make full use of the possible effective informa
tion to invest in the target assets. Assume that there are M available source datasets,
and denote the target data as T and the source data as {Sm| m = 1, . . . , M }, respec
tively. We treat M as fixed and allow d to diverge. The sample sizes of the target data
T and the source data Sm are N0 and Nm, respectively. Let Ne = min{N0, . . . , NM }. For
simplicity, denote the excess return of the target assets as {r0,t ∈ Rd| t = −(N0 − Ne −
1), . . . , Ne} and the excess return of the source assets as {rm,t ∈ Rd| m = 1, . . . , M, t =
−(Nm − Ne − 1), . . . , Ne}, respectively. For m = 0, 1, . . . , M and t = −(Nm − Ne −
1), . . . , Ne, denote the mean vector of the excess return rm,t as μm,t and the covariance
matrix of the excess return rm,t as Σm,t. Under these true parameters, the optimal
asset allocation, denoted as φm,t, can be derived using (2).
φm,t = arg max
φ∈Φ
μ⊤
m,tφ
pφ⊤Σm,tφ . (2)
However, we never know these parameters in practice. Empirically, μm,t and Σm,t
are estimated from the historical return. For m = 0, 1, . . . , M, t = 2, . . . , Ne, we use
the historical sample mean and historical sample covariance to estimate. That is, the
7

estimators μbm,t and Σb m,t for μm,t and Σm,t can be calculated using
μbm,t = 1
t − 1 + Nm − Ne
t−1
X
j =−(Nm −Ne −1)
rm,j (3)
and
Σb m,t = 1
t − 2 + Nm − Ne
t−1
X
j =−(Nm −Ne −1)
(rm,j − μbm,t)(rm,j − μbm,t)⊤, (4)
respectively. Given μbm,t and Σb m,t, the optimal investment strategy can be estimated.
φbm,t = arg max
φ∈Φ
μb⊤
m,tφ
q
φ⊤Σb m,tφ
. (5)
Denote the set W = {w ∈ [0, 1]M+1| PM
m=0 wm = 1} and the weight vector w =
(w0, w1, . . . , wM )⊤. Define the weighted allocation of the target data at time t as
φbt(w) =
M
X
m=0
wmφbm,t. (6)
As specified in (6), the proposed estimator combines optimal portfolio estimators from
multiple source datasets at time t through a weighted integration scheme, where the
weight vector w facilitates efficient information transfer across domains.
1.1 A motivation example
To demonstrate the advantages of incorporating source assets, we construct a simplified
example where all datasets span Ne identical time periods. For analytical tractability, we
assume that the excess returns {rm,t| t = 1, . . . , Ne} are independently and identically
distributed both across different datasets and within each individual dataset across t.
For each dataset, calculate μbm,Ne+1 and Σb m,Ne+1 according to (3) and (4), respectively.
Thus, applying (5), we can obtain φb0,Ne+1 for the target assets T and {φbm,Ne+1| m =
1, . . . , M } for the source assets {Sm| m = 1, . . . , M }, respectively. Denote φbequal
Ne+1 as the
equal weighted allocation PM
m=0 φbm,Ne+1/(M + 1). A direct performance comparison is
8

made through Sharpe ratio SfR0,Ne+1 and SfRequal
0,Ne+1 evaluation at time Ne + 1, where
SfR0,Ne+1 =
μ⊤
0,Ne +1
φb0,Ne +1
q
φb⊤
0,Ne +1 Σ0,Ne +1 φb0,Ne +1
,
SfRequal
0,Ne+1 =
μ⊤
0,Ne +1
φbequal
Ne +1
q
(
φbequal
Ne+1 )⊤Σ0,Ne+1φbequal
Ne +1
.
Denote SR0,Ne+1 as the maximum attainable Sharpe ratio for the target assets.
SR0,Ne+1 =
μ⊤
0,Ne +1 φ0,Ne +1
q
φ⊤
0,Ne +1 Σ0,Ne +1 φ0,Ne +1
.
Proposition 1. When Ne → ∞, if sup
∥a∥2=1, a∈Rd
E a⊤(rm,t − μm,t) 4 ≤ c1 < ∞ and
0 < c2 ≤ λmin(Σ0,Ne+1) hold uniformly for some positive constants c1 and c2, and
d/Ne → 0, then
SfR0,Ne +1
S R0,Ne +1
= 1 + op(1),
SfRequal
0,Ne +1
S R0,Ne +1
= 1 + op(1),
Var(SfRequal
0,Ne +1 )
Var(SfR0,Ne +1 )
→1
(M + 1)2 .
Proposition 1 implies that the resulting Sharpe ratio will converge to the maximum
value SR0,Ne+1 in probability, irrespective of whether we employ φb0,Ne+1 or φbequal
Ne+1 . How
ever, the asymptotic variance differs significantly between these strategies. Specifically,
SfRequal
0,Ne+1 achieves a superior convergence rate, as it exhibits a lower variance. See Ap
pendix E for the proof of Proposition 1. The following example provides an intuitive
illustration of Proposition 1.
Example 1. Let M = 5 and assume the asset returns of the source and target assets fol
low the same multivariate normal distribution MVN(μ, Σ). That is, for m = 0, 1, . . . , 5
and t = 1, . . . , Ne,
rm,t ∼ MVN(μ, Σ), (7)
where μ = (1.5, 1.9, 2.8, 1.7, −0.9)⊤ and the components of the covariance matrix are
Σ(i, j) = 0.5|i−j|. Generate the target data and the source data with the sample size
Ne using (7), respectively, where Ne ∈ {30, 60, 90, 120, 150, 250, 300, 400, 500}. Calcu
9

late SfR0,Ne+1 and SfRequal
0,Ne+1. Let ESR0,Ne+1 and ESRequal
0,Ne+1 denote the sample mean of
SfR0,Ne+1 and SfRequal
0,Ne+1 over 1000 replications, respectively. Let V SR0,Ne+1 and V SRequal
0,Ne +1
denote the sample variance of SfR0,Ne+1 and SfRequal
0,Ne+1 over 1000 replications, respectively.
In detail, the four indexes can be derived using the following formulas. Denote φbj
0,Ne +1
and φbequal,j
Ne+1 as the asset allocation calculated in the jth replication, respectively.
SfRj
0,Ne+1 =
μ⊤
0,Ne +1
φbj
0,Ne +1
q
φbj⊤
0,Ne +1 Σ0,Ne +1 φbj
0,Ne +1
,
SfRequal,j
0,Ne+1 =
μ⊤
0,Ne +1
φbequal,j
Ne +1
q
(
φbequal,j
Ne+1 )⊤Σ0,Ne+1φbequal,j
Ne +1
,
ESR0,Ne+1 = 1
1000
1000
X
j=1
SfRj
0,Ne+1, ESRequal
0,Ne+1 = 1
1000
1000
X
j=1
SfRequal,j
0,Ne+1 ,
V SR0,Ne+1 = 1
1000
1000
X
j=1
(
SfRj
0,Ne+1 − ESR0,Ne+1)2,
V SRequal
0,Ne+1 = 1
1000
1000
X
j=1
(
SfRequal,j
0,Ne+1 − ESRequal
0,Ne +1 )2 .
Furthermore, to evaluate the relative performance of the equal-weighted allocation
strategy, we conduct a comparative analysis with a baseline strategy that augments
the target dataset size. Specifically, we compute the portfolio φbP ool
0,Ne+1 by pooling all
available observations from each dataset. We proceed to compute the resulting Sharpe
ratio, denoted as SfRP ool
0,Ne+1, for the merged-sample strategy. Let φbP ool,j
0,Ne+1 and SfRP ool,j
0,Ne +1
denote the portfolio strategy and the resulting Sharpe ratio estimated in the jth repli
cation by data merging, respectively. The expected Sharpe ratio ESRP ool
0,Ne+1 is estimated
using the sample average over 1000 independent replications. That is,
ESRP ool
0,Ne+1 = 1
1000
1000
X
j=1
SfRP ool,j
0,Ne+1, where SfRP ool,j
0,Ne+1 =
μ⊤
0,Ne +1
φbP ool,j
Ne +1
q
(
φbP ool,j
Ne+1 )⊤Σ0,Ne+1φbP ool,j
Ne +1
.
With the population mean vector μ and covariance matrix Σ specified, the attain
able maximum Sharpe ratio is analytically determined to be SR0,Ne+1 = 2.95 as our
benchmark. Figure 1 demonstrates that both SfR0,Ne+1 and SfRequal
0,Ne+1 exhibit asymp
totic convergence to the theoretical maximum SR0,Ne+1. However, SfRequal
0,Ne+1 exhibits
10

superior finite sample properties, consistently dominating SfR0,Ne+1 across all Ne. Under
the identical data generating processes of each dataset, incorporating additional source
data effectively expands the informational basis for estimation. The analysis of the
variance indicates that as Ne → ∞, V SRequal
0,Ne+1/V SR0,Ne+1 converges to its theoretical
limit 1/(M +1)2 = 1/36. This also indicates that SfRequal
0,Ne+1 exhibits a higher convergence
rate to its asymptotic limit compared to the conventional estimator SfR0,Ne+1.
Simulation comparison of Sharpe ratio
0 100 200 300 400 500 N
2.86
2.88
2.90
2.92
2.94
2.96
ESR
2.95
ESR0, N + 1 ESR equal
0, N + 1 ESR0P,oNol+ 1 SR0, N + 1
Simulation comparison of variance
0 100 200 300 400 500 N
0.0200
0.0225
0.0250
0.0275
0.0300
0.0325
0.0350
0.0375
0.0400
VSR equal
0, N + 1/VSR0, N + 1
1/36
Figure 1: Performance of different portfolio strategies
The figure presents a comparative analysis of the Sharpe ratio values obtained through different
portfolio strategies across varying sample sizes Ne. In the left panel, we demonstrate ESRequal
0,Ne+1 (blue
line with left-pointing marks), ESRP ool
0,Ne+1 (gray line with star markers), ESR0,Ne+1 (orange line with
right-pointing markers) and the maximum Sharpe ratio attainable for the target (black line). In the right panel, we demonstrate the sample V SRequal
0,Ne+1/V SR0,Ne+1 (blue line with circular markers) and
the theoretical limit of the ratio (black line).
1.2 Transfer learning strategy by forward validation
In the motivation example, we demonstrate the efficacy of integrating data from mul
tiple sources to enhance the investment performance of the target. Our findings reveal
that even a naive equal weighted combination strategy yields significant improvements.
Nevertheless, empirical evidence often reveals substantial heterogeneity across different
markets, which renders equal weighted combination suboptimal and may induce neg
ative transfer effects that significantly degrade model performance. To better accom
modate the potential heterogeneity in empirical data, we propose a novel data-driven
11

weighting strategy that adaptively adjusts to market conditions and improves the in
vestment performance of the target market at time Ne + 1. To choose the weight w in
φbt(w), we propose the criterion in Algorithm 1. Denote [x] as the maximum integer
that do not larger than x.
Algorithm 1 Transfer Learning (T L) algorithm
Step 1. Split the target data and source data.
Divide each dataset into [Ne/h] disjoint parts in time order. Within this par
titioning, the initial segment of each dataset contains Nm − ([Ne/h] − 1)h samples, while all subsequent segments maintain a constant size of h samples. Step 2. Renumbering the timestamp.
After each interval boundary, index the subsequent temporal points as τi where i = 1, . . . , [Ne/h].1
Step 3. Calculate the related parameter estimators of each dataset at time τi.
For m = 0 to M :
1. Calculate μbm,τi and Σb m,τi using the latest h samples and (3)-(4), respectively.
2. Estimate μm,τi and Σm,τi using all the former samples and (3)-(4). Given
the estimators, apply (5) to calculate φbm,τi.
Step 4. Solve weights.
Solve (8) to obtain the optimal transferring weight.
wb = arg max
w∈W
1
[
Ne/h] − 1
[
Ne /h]−1
X
i=1
(
μb⊤
0,τi+1 )φbτi (w)
q
φbτi (w)⊤Σb 0,τi+1 φbτi (w)
. (8)
Step 5. Calculate the asset allocation at time Ne + 1. Let wbm be the (m + 1)th component of wb. Hence,
φbNe+1(wb) =
M
X
m=0
wbmφbm,Ne+1. (9)
The schematic diagram in Figure 2 provides an intuitive illustration of the algorith
mic workflow. For demonstrative purposes and without loss of generality, we consider
1For pedagogical clarity, we demonstrate Step 1 and Step 2 through a specific case. Consider a scenario with parameters M = 3, N0 = 300, N1 = 400, N2 = 500, N3 = 600, h = 50. In this configuration, each dataset is partitioned into [Ne/h] = [N0/h] = 6 parts and the subsequent evaluation time points after each interval boundary are t ∈ {51, 101, 151, 201, 251, 301}. Relabel these time points as τi, where i = 1, . . . , 6, respectively.
12

the case where Ne = N0 in this exposition.
Step1 Step2
Step4
Step3
Figure 2: Schematic illustration of the proposed T L strategy
The figure provides an intuitive visualization of the operational workflow of the proposed T L strategy for the case where M = 3 and Ne = N0.
13

2 Asymptotic properties
In this section, we demonstrate that our proposed T L strategy can automatically as
sign all weights to the informative datasets and asymptotically achieve the maximum
attainable Sharpe ratio. Furthermore, we conduct a comparative analysis of the vari
ance between the Sharpe ratio achieved through our proposed T L strategy and the
N on − transf er strategy. To present the asymptotic properties, we need some regular
ity conditions. Unless otherwise stated, all limiting properties are set when the sample
size of each dataset goes to infinity.
Assumption 1. For m = 0, 1, . . . , M , there exist a constant ζ > 0, parameters
{μ∗
m,τi| i = 1, . . . , [Ne/h]} and {Σ∗
m,τi| i = 1, . . . , [Ne/h]}, such that
(i) dζ h− 1
2 = o(1);
(ii) h 1
2 d−ζ ∥ μbm,τi − μ∗
m,τi ∥2= Op(1) and h 1
2 d−ζ ∥ Σb m,τi − Σ∗
m,τi ∥F= Op(1);
(iii) h 1
2 d−ζ ∥ μ∗
m,τi+1 − μ∗
m,τi ∥2= O(1) and h 1
2 d−ζ ∥ Σ∗
m,τi+1 − Σ∗
m,τi ∥F= O(1).
Assumption 1(i) restricts the divergence rate of d. Assumption 1(ii) requires that
there exist convergence relationships between the historical sample estimators μbm,τi,
Σb m,τi and the limit parameters μ∗
m,τi , Σ∗
m,τi, respectively. Assumption 1(iii) imposes
additional conditions on the sequences {μ∗
m,τi| i = 1, . . . , [Ne/h]} and {Σ∗
m,τi | i =
1, . . . , [Ne/h]} by requiring the internal convergence. In the case of multivariate sample
mean and multivariate sample covariance, the reviews of the literature on the depen
dence of the error of approximation on the dimension d are given (see, e.g., Zitikis
et al. 2006; Bentkus 1986, 2003; Bloznelis 1989; Gotze 1991; Nagaev 2006). Ben
tkus (2003) proves the existence of ζ, where ζ = 1/4, {μ∗
m,τi| i = 1, . . . , [Ne/h]} and
{Σ∗
m,τi| i = 1, . . . , [Ne/h]} under some specific conditions where the samples are i.i.d,
the expectation exists, the covariance matrix is positive definite and the third-order
moment is finite. This assumption remains valid according to the conclusion of Zitikis
et al. (2006), where the relationship between the convergence rates of the multivari
ate sample mean, multivariate sample covariance matrix and the divergent rate of the
parameters d and h are established under other regularity conditions.
14

Denote
SfR∗
0,τi+1 (w) = (μ⊤
0,τi+1 )φbτi (w)
q
φbτi (w)⊤Σ0,τi+1 φbτi (w)
,
MgS∗
Ne (w) = 1
[
Ne/h] − 1
[
Ne /h]−1
X
i=1
SfR∗
0,τi+1 (w),
SR0,τi+1 = (μ⊤
0,τi+1 )φ0,τi+1
q
φ⊤
0,τi+1 Σ0,τi+1 φ0,τi+1
, M SNe = 1
[
Ne/h] − 1
[
Ne /h]−1
X
i=1
SR0,τi+1 .
We can calculate the corresponding asset allocation φ∗
m,τi under the parameters
μ∗
m,τi , Σ∗
m,τi and Equation (1). If ∥ φ0,τi − φ∗
m,τi ∥2= o(1) holds for each τi, define the
corresponding dataset as an effective information set which can provide effective infor
mation for the investment in the target. Under Assumption 1, if the limit parameters
μ∗
m,τi and Σ∗
m,τi satisfy that ∥ μ0,τi − μ∗
m,τi ∥2= o(1) and ∥ Σ0,τi − Σ∗
m,τi ∥F= o(1), then
∥ φ0,τi − φ∗
m,τi ∥2= o(1), which implies that the dataset with index m is an effective
information set when the difference between the corresponding limit parameters μ∗
m,τi ,
Σ∗
m,τi and the population parameters of the target μ0,τi, Σ0,τi asymptotically converge
to 0, respectively. Let D ⊆ {0, 1, . . . , M } denote the index set of datasets which can
provide effective information for the target and Dc denote the complement of D. Denote
Γ(w) = P
m∈D wm, where wm is the (m + 1)th element of w, then Γ(wb) = P
m∈D wbm.
Let ξe∗
Ne = M SNe − supw∈W,Γ(w)=0 MgS∗
Ne (w).
Assumption 2. ξe∗−1
Ne h− 1
2 dζ = o(1).
Assumption 2 postulates the convergence rate of the difference between the maxi
mum Sharpe ratio M SNe and the weighted Sharpe ratio MgS∗
Ne (w) when the weight pro
portion on the datasets which can provide effective information is set to be 0. If there
exists a source dataset Sj which just provides ineffective information, in other words,
the corresponding optimal asset allocation under the parameters μ∗
m,τi and Σ∗
m,τi , de
noted as φ∗
j,t, is greatly different from the optimal asset allocation φ0,t, the Sharpe ratio
obtained using the allocation φ∗
j,t must be less than the maximum Sharpe ratio. From
this point of view, this assumption is easy to be satisfied.
15

Assumption 3.
(i) h 1
2 d−ζ ∥ μ0,τi − μ∗
0,τi ∥2= O(1);
(ii) h 1
2 d−ζ ∥ Σ0,τi − Σ∗
0,τi ∥F= O(1).
Assumption 3 imposes convergence constraints on parameters μ∗
0,τi and Σ∗
0,τi, which
can be economically rationalized through two fundamental market dynamics. First, the
assumption captures the local stationarity property observed in high-frequency financial
data (Diebold et al. 2001) through μ∗
0,τi and Σ∗
0,τi, where market microstructure effects
dominate short-term price movements. Second, it accommodates the equilibrium con
vergence behavior characteristic of long-term market data (Cochrane 2009) through the
convergence properties, where fundamental economic forces drive asset prices towards
their steady-state values. Combined with Assumption 1, Assumption 3 implies that the
historical sample estimators μb0,τi and Σb 0,τi consistently estimate the population mean
and covariance of the target, which can be implied by 0 ∈ D.
Assumption 4. For m = 0, 1, . . . , M and i = 1, . . . , [Ne/h], the estimated covariance
matrix at time τi, denoted as Σb m,τi, is positive definite almost surely.
In Assumption 4, we impose restrictions on covariance estimators at time τi for each
dataset. Our methodological framework is based on portfolio Sharpe ratio optimization,
which fundamentally requires strictly positive variance for all admissible investment
strategies. We impose the assumption of an almost sure positive definiteness on the
covariance estimator to satisfy the fact that for any column vector x ̸= 0, there exists
x⊤Σb m,τix > 0 almost surely.
Theorem 1. If Assumptions 1-4 are satisfied, then
Γ(wb) → 1
in probability.
This theorem demonstrates a kind of informative dataset selection consistency, in
that our strategy can automatically assign all the weights to the datasets which can
16

provide effective information for the target. It is worth to note that this theorem holds
only for the case where the estimators calculated by the target data need to be helpful.
This theorem also effectively avoids the problem of negative transfer. See Appendix B
for the proof of Theorem 1.
Having established the convergence properties of the weight estimator, we now char
acterize the Sharpe ratio of the target portfolio at time Ne + 1 under our proposed
strategy. Denote
SfR0,τi+1 (w) = (μ⊤
0,τi+1 )φbτi+1 (w)
q
φbτi+1 (w)⊤Σ0,τi+1 φbτi+1 (w)
,
MgSNe (w) = 1
[
Ne/h] − 1
[
Ne /h]−1
X
i=1
SfR0,τi+1 (w).
Theorem 2. If Assumptions 1-4 are satisfied, then
SfR0,Ne +1 (wb )
S R0,Ne +1
= 1 + op(1).
This theorem demonstrates that our strategy can asymptotically obtain the maxi
mum Sharpe ratio SR0,Ne+1. See Appendix C for the proof of Theorem 2.
We have already examined the asymptotic behaviors of the weight estimators wb
and the resulting Sharpe ratio SfR0,Ne+1(wb). Considering that the traditional N on −
transf er strategy also asymptotically obtains the maximum Sharpe ratio SR0,Ne+1 un
der Assumption 1 and Assumption 3 (see Appendix C), we compare the variances
between the Sharpe ratios of our proposed strategy and the N on − transf er strategy.
We further need the following assumptions.
Assumption 5. For m = 1, . . . , M , limsup (N0/Nm) ≤ 1.
Assumption 5 imposes certain restrictions on the sample size of each dataset. It is
common and reasonable in practice, since the sample size of the target data is usually
smaller. Given that all datasets in our analysis share the same sampling frequency, this
assumption is very easy to be satisfied in our framework.
Assumption 6. There exists w∗ ∈ W such that wb → w∗ in probability.
17

This assumption necessitates the convergence of the weight estimator, which can
usually be achieved through an appropriate initial value and a fixed iterative direction.
Let φ[−d] ∈ Rd−1 denote the truncated vector comprising the first d − 1 components
of φ ∈ Rd.
Assumption 7. For m, n ∈ D, ∥ [NmVar(φb[−d]
m,Ne +1 )][Nn Var(φb[−d]
n,Ne+1)]−1 − Id−1 ∥F→ 0.
This assumption reveals the fundamental relationship between the variance of the
estimator and the size of the training samples. Specifically, for m, n ∈ D, the rela
tionship between Var(φbm,τi) and Var(φbn,τi) is asymptotically determined by the sample
sizes used for estimation. Referring to the Theorem 1 in Chang et al. (2024), we pro
vide a proof of this assumption based on some regularity conditions in Appendix F. A
concrete example can also be found in Simulation 1, where the estimators derived from
S1 and S5 exhibit precisely this property.
Denote
SfR0,τi+1 = (μ⊤
0,τi+1 )φb0,τi+1
q
φb⊤
0,τi+1 Σ0,τi+1 φb0,τi+1
,
MgSNe = 1
[
Ne/h] − 1
[
Ne /h]−1
X
i=1
SfR0,τi+1 .
Theorem 3. If Assumptions 1-7 are satisfied, then
Var(SfR0,Ne+1(wb)) ≤ Var(SfR0,Ne+1)(1 + o(1)).
Theorem 3 demonstrates the comparison of the volatility of the Sharpe ratio ob
tained using the T L strategy and that of the N on − transf er baseline strategy. See
Appendix D for the proof of Theorem 3.
3 Simulation studies
In this section, we conduct two simulation studies to evaluate the performance of our
proposed investment strategy and empirically validate the theoretical results established
in Section 2. To thoroughly compare investment strategies, we employed two different
18

data generation processes (DGP) in Simulation 1 and Simulation 2, respectively. In
Simulation 1, we implement a standard experimental setup. First, we systematically
compare the investment performance of the proposed T L strategy with several bench
mark strategies under progressively increasing distributional shifts between the target
and some source datasets. Second, by incrementally expanding the sample size of each
dataset, we empirically validate the theoretical properties of the T L strategy, as derived
in Section 2. Then, we conduct a comparative analysis between our strategy and an
other transfer learning-based investment strategy proposed in Cao et al. (2023) to assess
their performance. Furthermore, based on empirical Fama French three factor model
parameters derived from real market data, we simulate each dataset in Simulation 2 to
conduct a rigorous comparative analysis across different investment strategies.
3.1 Alternative portfolio strategies
To assess the efficacy of our proposed strategy, we conduct a comprehensive comparative
analysis with the following four established strategies in our simulation studies.
T Lequal: The target data and the source data are combined using equal weighting
proportions in the transfer process. That is,
φbNe+1 =
M
X
m=0
1
M +1
φbm,Ne +1 .
N on − transf er: Maximize the Sharpe ratio of the target assets. That is,
φbNe+1 = arg max
φ∈Φ
μb⊤
0,Ne +1 φ
q
φ⊤Σb 0,Ne+1φ
.
P ool: Combine the target and source datasets into a unified sample population
and estimate the mean and covariance using the historical sample mean and historical
19

sample covariance of the combined data. In detail, the estimated mean vector is
μb∗
0,Ne+1 = 1
N0 + · · · + NM
M
X
m=0
Ne X
j =−(Nm −Ne −1)
rm,j ,
and the estimated covariance matrix is
bΣ∗
0,Ne+1 = 1
N0 + · · · + NM − 1
M
X
m=0
Ne X
j =−(Nm −Ne −1)
(rm,j − μb∗
0,Ne+1)(rm,j − μb∗
0,Ne +1 )⊤ .
Hence, the asset allocation can be estimated by
φbNe+1 = arg max
φ∈Φ
μb∗⊤
0,Ne +1 φ
q
φ⊤Σb ∗
0,Ne +1 φ
.
3.2 Evaluation methodology
We employ the following indicator to evaluate the out-of-sample forecasting perfor
mance across different strategies. Denote O as the set of time points designated for
out-of-sample prediction.
SSR: Calculate the sample Sharpe ratio (SSR) of the portfolio strategy, defined as
SSR =
E ̄(φb⊤
t rt)
q
V ̄ (φbt⊤rt)
, t ∈ O,
where E ̄(.) and V ̄ (.) represent the sample mean and sample variance, respectively.
3.3 Simulation 1: Benchmark DGP
Consider a capital market consisting of 5 assets, that is, d = 5. The DGP follows the
simulation settings in Filip and James (2019).
rm,t = α + XtΠm,t + em,t, Xt+1 = BXt + γt+1, (10)
20

where rm,t ∈ R5, Xt ∈ R5×3, Πm,t ∈ R3, em,t ∈ R5, B ∈ R5×5, γt ∈ R5×3 and
m = 0, . . . , 5, t = 1, . . . , Nm. The term α = (0.5, 0.5, 0.5, 0.5, 0.5)⊤. For the isolation
term, em,t and every column of γt are independently identically distributed and follow
a multivariate normal distribution MVN(0, Ω), where the components of the covari
ance matrix Ω are Ω(i, j) = 0.5|i−j|. To ensure the stationarity of Xt, the elements
of the parameter matrix B are randomly generated from a uniform distribution over
(−1, 1), with the additional constraint that all eigenvalues must lie within the unit cir
cle. Regarding the regression parameters in this simulation, the following settings are
used.
Π0,t = (0.9, 0.6, 0.7)⊤, t = 1, . . . , N0,
Πm,t = (0.9, 0.6, 0.7)⊤ + 1
t × δm, m = 1, 5, t = 1, . . . , Nm,
Πm,t = (0.9, 0.6, 0.7)⊤ + ρ × δm, m = 2, 3, 4, t = 1, . . . , Nm,
where δm ∼ MVN(0, 0.1I). We assign time-dependent parameters to the source data
S1 and S5 in our simulation framework. On the one hand, it ensures that the his
torical sample mean and historical covariance matrix estimators for S1 and S5 satisfy
Assumption 1. On the other hand, it allows these source parameters to asymptotically
converge to their target counterparts, thereby ensuring that S1 and S5 provide effective
transferable information. For S2, S3 and S4, we introduce the term ρ × δm to the re
gression parameters Πm,t to modulate the divergence between the source datasets and
the target dataset.
3.3.1 Investment performance under varying divergence
Recall that the scaling parameters {ρ × δm|m = 2, 3, 4} govern the divergence between
the target data and the non-informative source data. To evaluate the performance of
each strategy, we systematically vary ρ while holding δm constant and compare the
performance of each investment strategy in the part.
Generate N0 = 500, Nm = (m + 1)N0 samples for each dataset and use the final 50
samples to do the out-of-sample forecasting. Repeat the total process 100 times. Set
21

h to be N0/5. As we incrementally increase ρ to 10, the SSR values computed using
each strategy are presented in Figure 3.
0 2 4 6 8 10
0.45
0.47
0.49
0.51
0.53
0.55
0.57
0.59
SSR
TL
TLequal
Non transfer Pool
Figure 3: The investment effect of each portfolio strategy
This figure presents a comparative analysis of SSR across T L strategy (red dashed line with circular markers), T Lequal strategy (blue solid line with left-pointing triangular markers), N on − transf er strategy (orange solid line with right-pointing triangular markers) and P ool strategy (gray solid line with star markers) as the divergence parameter ρ increases from 1 to 10. The parameter ρ modulates the distributional discrepancy between the non-informative source datasets S2, S3, S4 and the t-
arget data T systematically.
As evidenced by Figure 3, the T L strategy consistently achieves the maximal SSR
values among these investment strategies. Notably, the performance of the P ool strat
egy deteriorates progressively as ρ increases, suggesting that indiscriminate data merg
ing becomes increasingly suboptimal when the divergence between the source and target
data increases. Both the T L strategy and the T Lequal strategy exhibit a decreasing effi
cacy with increasing ρ, although T L strategy maintains superior performance through
out. This shows that the targeted utilization of source data information, rather than
naive aggregation, is crucial to optimize the investment decisions of the target assets
and enhance the returns. Furthermore, the comparison of the T L and N on − transf er
strategies reveals that the performance gap in SSR decreases as ρ increases, but the
gap between the two strategies never vanishes. Accordingly, we investigate the in
vestment performance for each strategy using only the non-informative source datasets
22

S2, S3 and S4 when N0 = 500. As evidenced by Figure 4, when utilizing only the non
informative datasets, the T L strategy slightly outperforms the N on−transf er strategy
at ρ = 1. However, its performance deteriorates as ρ increases. Once ρ exceeds 2, the
N on − transf er strategy emerges as superior, rendering the T L strategy suboptimal
under these conditions.
0 2 4 6 8 10
0.45
0.47
0.49
0.51
0.53
0.55
0.57
0.59
SSR
TL
TLequal
Non transfer Pool
Figure 4: The investment effect of each portfolio strategy while only utilizing the non-informative datasets S2, S3 and S4
This figure presents the SSR across T L strategy (red dashed line with circular markers), T Lequal strategy (blue solid line with left-pointing triangular markers), N on − transf er strategy (orange solid line with right-pointing triangular markers) and P ool strategy (gray solid line with star markers) as the divergence parameter ρ increases from 1 to 10 while utilizing the non-informative datasets S2, S3 and S4 when N0 = 500.
3.3.2 Validity of the convergence of weight
To evaluate the capability to autonomously identify the datasets which can provide
effective information for the target of the proposed T L strategy, we calculate Γ(wb) at
N0 + 1 across varying sample sizes in this part.
Under different N0, set h to be N0/5, Nm = (m + 1)N0 and ρ to be 3. Let N0
be in the set {300, 500, 800, 1000, 1200, 1500, 2000, 4000, 8000, 16000, 40000}. It can be
seen that D = {0, 1, 5}, so Γ(wb) = wb0 + wb1 + wb5. Using the specified experimental
23

configuration, we generate synthetic datasets and evaluate Γ(wb) for target data at time
N0 + 1. Repeat the whole procedure 1000 times.
0 1000 2000 3000 4000 5000 6000 7000 8000 h
0.60
0.65
0.70
0.75
0.80
0.85
0.90
0.95
1.00
(w)
(w)
Figure 5: Γ(wb) under different h
This figure demonstrates the weight summation assigned to the datasets that can provide effective information under different estimation window h. The gray area is calculated by adding or subtracting 1.96 standard error from the average value of Γ(wb) in 1000 repetitions, which exhibits the corresponding variation of Γ(wb) in different h.
Figure 5 shows Γ(wb) across different h. As shown, the aggregated weights assigned
to informative datasets monotonically increase with sample size, asymptotically ap
proaching 1. This empirical result strongly corroborates the theoretical convergence
established in Theorem 1.
3.3.3 Comparison of the variance
We further evaluate the performance of each strategy by computing SSR. For N0 =
5000, use h = N0/5, Nm = (m + 1)N0, respectively. The accuracy of the out-of-sample
forecasting is evaluated using the final 1000 target observations. From Figure 6, a
smaller variance can be observed in the index SSR when using the T L strategy relative
to other strategies, which can verify the conclusion of Theorem 3 in this article. Under
Assumption 1, we can show that the index SSR converges almost surely to SfR0,N0+1(wb)
as N0 and the cardinality of O approaches infinity. Furthermore, leveraging the sta
24

TL TLequal Non transfer Pool
-0.5
0.0
0.5
1.0
1.5
SSR
Figure 6: The box plots of SSR obtained by various strategies
This figure demonstrates box plots comparing SSR across T L strategy (red box plot), T Lequal strategy (blue box plot), N on − transf er strategy (orange box plot) and P ool strategy (gray box plot). The horizontal lines within each box plot represent the sample mean of SSR computed over 100 simulation replicates, while the box widths correspond to the inter-quartile ranges, illustrating the variance in SSR performance for each strategy.
tionarity property of the target dataset, we can explicitly compute its population mean
and covariance parameters. This enables the determination of the theoretically optimal
Sharpe ratio, which is found to be 0.638 for this target domain.
3.3.4 Investment performance comparison: TL vs. TLc
To further evaluate the performance of our strategy, we conduct a comparative analysis
with the portfolio optimization strategy based on transfer learning proposed in Cao et al.
(2023). Their strategy incorporates the information from the source domain through
a corrective framework, solving the following optimization problem to determine the
optimal asset allocations.
φbT = arg max
φ∈Φ
μb⊤
Tφ
q
φ⊤Σb T φ
− λ φbS − φ
2
2
,
where φbT denotes the asset allocation of the target data and φbS denotes the asset
allocation of the source data estimated using the N on − transf er strategy. μbT and
Σb T are the historical sample mean and historical sample variance of the target data.
25

Denote this strategy as T Lc strategy. Following Cao et al. (2023), we adopt the same
regularization parameter λ = 0.2 for comparative analysis. Given the constraint of
single-source dataset utilization of the T Lc strategy, we evaluate the performance using
both the target data and the previously generated single source dataset. Set N0 to be
500, Nm = (m + 1)N0 and h to be 60. Use the final 50 samples to do the out-of-sample
forecasting and repeat the total process 100 times.
We first evaluate the strategies using S1 as the source dataset, representing the case
where the source data provides effective transferable information for the target domain.
Since S1 and S5 follow identical distributional characteristics, the choice between them
is substantively inconsequential. As demonstrated in Table 1, the T L strategy is slightly
better than the T Lc strategy.
Table 1: The investment effect of each portfolio strategy across different N0
strategy SSR T L 0.550 (0.052) T Lequal 0.549 (0.052) N on − transf er 0.541 (0.051) P ool 0.551 (0.052) T Lc 0.549 (0.052)
This table presents the SSR performance comparing the proposed strategy with alternative strategies when utilizing the informative source dataset S1. We bold the results of the best strategy and mark the results of the suboptimal strategy in italics.
To further evaluate the performance of each strategy under non-informative source
conditions, we introduce controlled variation in the source data and employ S3 as the
representative dataset. Notably, since S2, S3 and S4 share identical distributional prop
erties, the selection among them is substantively equivalent for our comparative anal
ysis.
Figure 7 demonstrate the index SSR of each strategy when the gap between S3
and the target data increases when N0 = 500. In general, the T L strategy and
N on − transf er strategy perform better than others. When ρ is larger, T L strat
egy is slightly inferior than the N on − transf er strategy. We can see that the proposed
strategy consistently outperforms T Lc strategy across all ρ values. Furthermore, the
26

0 2 4 6 8 10
0.45
0.47
0.49
0.51
0.53
0.55
0.57
SSR
TL
TLequal
Non transfer Pool TLc
Figure 7: The investment effect of each portfolio strategy when only utilizing the non-informative dataset S3
This figure presents the SSR performance comparing the proposed T L strategy (red dashed line with circular markers) with alternative T Lequal strategy (blue solid line with left-pointing triangular markers), N on − transf er strategy (orange solid line with right-pointing triangular markers), P ool strategy (gray solid line with star markers) and T Lc strategy (purple solid line with upward-pointing when utilizing source dataset S3.
T L, T Lequal, T Lc and P ool strategies exhibit a monotonically decreasing performance
as ρ increases.
3.4 Simulation 2: FF3 model-based DGP
To enhance the realism of our simulated data, we use empirical market data and es
timate the Fama French three factor model (F F 3) using the ordinary least squares
strategy. The simulated data are then generated based on the estimated model pa
rameters. The F F 3 model, introduced by Fama and French (1993), addresses the
limitations of Capital Asset Pricing Model. Their seminal work demonstrates that the
market beta alone cannot fully explain cross-sectional stock return variations while
three firm-specific characteristics, denoted as market capitalization, book-to-market ra
tio, and earnings-to-price ratio, significantly improve explanatory power. The F F 3
27

model is formally specified as
rt − rf = α + β1SM Bt + β2HM Lt + β3M KTt + εt,
where rt refers to the return of individual stocks and rf refers to the risk-free inter
est rate. SM B represents the average return of the stock portfolio of small-market
companies minus the average return of the stock portfolio of large-market companies
(according to small-market effect). HM L refers to the portfolio return rate obtained by
shorting companies with a high book value ratio and M KT refers to the excess return
of the market portfolio. The three factors required (M KT , SM B, HM L) are obtained
from the CRSP database for the period from January 2021 to December 2023. For
our empirical analysis, we use the daily returns of the five American real estate indus
tries, denoted as EXP I, V ICI, N M RK, IN V H, and JLL, and analyze their daily
returns over the same 3 year period from January 2021 to December 2023 (753 trading
days). Each observation is indexed chronologically as t = 1, . . . , 753, where t = 1 cor
responds to January 4, 2021 (the first trading day of 2021). Given the daily return of
the five stocks and the three factors, fit the F F 3 model and we can get the parameters
α = (α1, . . . , α5)⊤ ∈ R5 and {βp = (β1,p, β2,p, β3,p)⊤ ∈ R3| p = 1, . . . , 5}, respectively.
We generate synthetic target and source data through the following DGP.
rm,t = α + XΠm,t + em,t, m = 0, 1, . . . , 5, t = 1, . . . , Nm,
where rm,t ∈ R5, em,t ∈ R5 ∼ MVN(0, Ω) and the components of the covariance matrix
are Ω(i, j) = 0.5|i−j|. For the definition of X and Πm,t, use the following settings.
X = (β1, β2, β3, β4, β5)⊤ ∈ R5×3,
Πm,t = (SM Bt, HM Lt, M KTt)⊤, m = 0, t = 1, . . . , N0,
Πm,t = (SM Bt, HM Lt, M KTt)⊤ + 1
t × εm,t, m = 1, 5, t = 1, . . . , Nm,
28

Πm,t = (SM Bt, HM Lt, M KTt)⊤ + ρ × εm,t, m = 2, 3, 4, t = 1, . . . , Nm,
where εm,t ∈ R3 ∼ MVN(0, 0.1I).
Generate N0 = · · · = N5 = 500 samples for each dataset. Take h = N0/5 and use
the final 50 samples to do the out-of-sample forecasting. Repeat the total process 100
times.2
0 2 4 6 8 10
0.22
0.24
0.26
0.28
0.30
0.32
0.34
0.36
0.38
SSR
TL
TLequal
Non transfer Pool
Figure 8: The investment effect of each portfolio strategy
This figure presents a comparative analysis of SSR across T L strategy (red dashed line with circular markers), T Lequal strategy (blue solid line with left-pointing triangular markers), N on − transf er strategy (orange solid line with right-pointing triangular markers) and P ool strategy (gray solid line with star markers) as the divergence parameter ρ increases from 1 to 10. The parameters for the DGP of each dataset are determined by fitting the F F 3 model. The parameter ρ systematically modu-
lates the distributional discrepancy between the non-informative source datasets S2, S3, S4 and the target data T .
Figure 8 presents SSR performance across all evaluated strategies, using param
eters calibrated from empirical market data. These findings are consistent with the
results presented in Figure 3. As shown, our approach demonstrates a clear advantage.
Furthermore, the data generated for each dataset in this simulation do not necessar
ily satisfy Assumption 1. Despite this relaxation, the proposed T L strategy still has
obvious advantages, which also reflects the robustness of our strategy.
2To ensure temporal consistency across all datasets, we maintain identical sample sizes for both the factor data and stock returns in our simulation.
29

4 Applications
We evaluate the performance of our strategy using two distinct datasets: one comprising
dual-listed A-share and H-share stocks, and the other consisting of stocks from various
industrial sectors of the United States. The results based on the two stock universes
are reported in Section 4.1 and Section 4.2, respectively.
4.1 Optimizing portfolios across H-shares and A-shares
Many leading Chinese enterprises are dually listed on both the Shanghai/Shenzhen
Stock Exchanges (A-shares) and the Hong Kong Stock Exchange (H-shares). This ar
rangement offers a valuable natural laboratory for our research. Although A-shares and
H-shares represent claims on the same underlying firms, differences in investor compo
sition, market regulations, and capital controls cause them to exhibit distinct price
discovery dynamics and risk appetite. Rather than being mere noise, these differences
create a solid foundation for informational complementarity.
From the perspective of using Hong Kong market data to inform A-share analy
sis, the highly internationalized and institution-dominated Hong Kong market tends
to respond more swiftly and accurately to global macroeconomic trends, geopolitical
developments, and sector-specific shifts. As a result, H-share price movements often
incorporate global information that has not yet been fully reflected in the more retail
driven and relatively insulated A-share market. Incorporating H-share returns as a
leading indicator into predictive models acts as an effective information set, capturing
globally sourced fundamental changes and thereby improving the foresight and accu
racy of A-share return forecasts. For example, in the cases of commodity firms or large
technology companies, H-share prices may earlier reflect shifts in global supply-demand
conditions or technological disruptions, thereby aiding in the more precise estimation
of subsequent A-share performance.
Conversely, using A-shares data to interpret H-shares dynamics is equally valuable.
The A-share market, with its substantial retail investor presence, serves as a direct
30

barometer of domestic investor sentiment and reactions to local policy changes. Subtle
shifts relating to local consumption trends, industrial policies, or regional risks often
emerge first in A-share prices. For Mainland companies listed in Hong Kong, these
locally-driven sentiments and expectations represent critical dimensions that interna
tional investors may overlook or respond to with a lag. Thus, A-share return dynamics
provide essential information for understanding H-shares behavior.
Through bidirectional modeling, researchers can better disentangle global versus lo
cal drivers of firm value. This approach facilitates a deeper analysis of the the asset
returns. In summary, integrating data from both markets combines two distinct infor
mation sets to form a more comprehensive and robust view of the target asset. We
collect earnings data for five listed companies from four sectors: Energy, Manufactur
ing, Finance, and Medical, across both H-shares and A-shares. See Appendix G for the
detailed information of the listed companies.
Table 2: The investment effect of each portfolio strategy in different target markets
Strategy
Target market Energy Manufacturing A-shares H-shares A-shares H-shares T L 0.129 0.448 0.138 0.191 T Lequal 0.101 0.394 0.118 0.149 N on − transf er 0.128 0.364 0.124 0.196 P ool 0.111 0.358 0.069 0.175 T Lc 0.085 0.413 0.093 0.185
Strategy
Target market Financial Medical A-shares H-shares A-shares H-shares T L 0.132 0.244 0.186 0.968 T Lequal 0.125 0.237 0.177 0.728 N on − transf er 0.130 0.219 0.183 0.753 P ool 0.113 0.252 0.154 0.651 T Lc 0.131 0.241 0.148 0.553
This table demonstrates the SSR index gained using the proposed strategy and the alternative strategies when investing in five listed companies from four sectors: Energy, Manufacturing, Finance, and Medical, across both H-shares and A-shares. For the convenience of comparison, we bold the results of the best strategy and mark the results of the suboptimal strategy in italics.
Our analysis alternately designates one market as the target and the other as the
source market. Take their daily return from July 2021 to June 2025 for analysis and
31

the data from January 2025 to June 2025 are used to make out-of-sample forecasts.
In detail, every dataset covers 968 time periods and |O| = 117. The data informa
tion comes from Compustat database. Building on these comprehensive datasets, we
conduct a comparative performance analysis between our proposed strategy and estab
lished benchmark strategies for the construction of the target assets portfolio. Table
2 presents the comparative performance of portfolio strategies across different industry
sectors. Overall, the method proposed in this article has performed quite well when
investing in the H-shares and A-shares of different industries. The complementary
nature of the information between these two markets can generate substantial added
value for investors. Table 3 demonstrates the average transferring weight of different
target markets within the period of out-of-sample forecasting when the T L strategy is
adopted. As shown, the source dataset has been effectively utilized in the T L strategy
we proposed.
Table 3: The average transferring weight of different target markets when T L strategy is adopted
Target market
Weights w0 w1
Energy A-shares 0.970 0.030
H-shares 0.632 0.368 Manufacturing A-shares 0.854 0.146
H-shares 0.837 0.163 Financial A-shares 0.751 0.249
H-shares 0.872 0.128 Medical A-shares 0.852 0.148
H-shares 0.743 0.257
This table demonstrates the average transferring weight of different target markets within the period of out-of-sample forecasting when the T L strategy is adopted. As mentioned before, w0 is the weight assigned in the target market and w1 is the weight assigned in the source market.
4.2 Optimizing portfolios across sectors
The real estate sector constitutes a fundamental pillar of modern economic systemsand
plays a critical role in both developed and emerging economies. As a tangible assetclass,
residential properties provide not only shelter but also represent one of the mostsigniff
32

cant components of household wealth portfolios globally. The sector also offersmultiple
pathways for value creation, including capital appreciation through strategicacquisitions
and stable income generation via rental operations. As a linchpin sector with extensive
backward and forward links, real estate exhibitsremarkable stimulating effects across up
stream industries (e.g., construction materials,steel production, and heavy machinery)
and downstream sectors (e.g., interior design,home furnishings, and appliance manu
facturing). The financial phenomenon between different sectors became particularly
evident during the global ffnancial crisis in 2008,where mortgage-backed securities and
real estate derivatives ampliffed systemic riskthrough complex ffnancial channels. This
intricate web of inter-sectoral dependenciesraises a critical research question: can stock
return data from correlated sectors beleveraged to enhance the investment performance
of the interested market?
Table 4: The investment effect of each portfolio strategy in different target markets
Real Estate Financial Construction T L 0.129 0.354 0.089 T Lequal 0.162 0.199 0.064 N on − transf er -0.004 0.198 -0.072 P ool 0.015 0.161 0.020 Furniture Manufacturing Marketing T L -0.002 0.181 0.084 T Lequal -0.018 0.129 0.029 N on − transf er -0.046 -0.012 0.053 P ool -0.090 0.303 -0.001
This table demonstrates the SSR performance comparing our proposed strategy with alternative strategies when investing in the real estate industry, financial industry, construction industry, furniture industry, manufacturing industry and marketing industry in the American stock market. In each setting, we bold the results of the best strategy and mark the results of the suboptimal strategy in italics.
We implement a comprehensive cross-sector analysis using the real estate indus
try data, financial industry data, construction industry data, furniture industry data,
manufacturing industry data and marketing industry data in American stock market,
systematically rotating each industry sector as the target domain while employing all
other sectors as source domains. Select the five largest market capitalization stocks
33

from both target and the source industries. Take their daily return from January 2020
to December 2023 for analysis and the data from October 2023 to December 2023 are
used to make out-of-sample forecasts. In detail, every dataset covers 877 time peri
ods and |O| = 63. The data information comes from Osiris, CRSP and Compustat
database. Building on these comprehensive datasets, we conduct a comparative per
formance analysis between our proposed strategy and established benchmark strategies
for the construction of the target assets portfolio.
Table 5: The average transferring weight of each dataset when T L strategy is adopted in different target markets
Target market Real Estate Financial Construction
Real Estate 0.523 0.236 0.061 Financial 0.175 0.451 0.018 Construction 0.000 0.058 0.349 Furniture 0.243 0.255 0.000 Manufacture 0.000 0.000 0.519 Marketing 0.059 0.000 0.053
Target market Furniture Manufacture Marketing
Real Estate 0.219 0.047 0.034 Financial 0.000 0.000 0.000 Construction 0.000 0.514 0.218 Furniture 0.781 0.008 0.082 Manufacture 0.000 0.431 0.638 Marketing 0.000 0.000 0.028
This table demonstrates the average transferring weight of different target markets within the period of out-of-sample forecasting when the T L strategy is adopted. Each column of this table quantifies the transferring weight of each dataset (listed on the left) when a specific dataset serves as the target.
Table 4 presents the comparative performance of portfolio strategies across different
industry sectors. The TL strategy achieves either optimal or near-optimal SSR in the
tested industry pairs, while N on−transf er strategy consistently underperforms. These
findings provide robust empirical evidence that cross-industry data in American equity
markets contain economically significant predictive signals for investment decision mak
ing. Table 5 demonstrates the average transferring weight of different target markets
within the period of out-of-sample forecasting when the T L strategy is adopted. As
shown, the source dataset in this example has also been effectively utilized in the T L
34

strategy we proposed.
5 Conclusion
In this article, we develop a novel transfer learning framework for portfolio optimization
that systematically leverages cross-domain information to improve the investment per
formance of the target. Our theoretical analysis establishes that the proposed strategy
possesses the weight consistency property and asymptotically achieves the maximum
Sharpe ratio while maintaining a smaller variance than the conventional N on−transf er
strategy. The proposed strategy is relatively simple and easy to implement.
This study adopts the Sharpe ratio as our primary performance metric, which differs
from the conventional mean-variance framework prevalent in the literature. In the
absence of estimation errors, the Sharpe ratio maximization and utility maximization
are equivalent. But the Sharpe ratio is simpler because it does not require information
about risk aversion parameters and is widely used by researchers and practitioners to
compare trading strategies and models. In our implementation, we set the parameter
h = N0/5. Importantly, the theoretical guarantees of the proposed T L strategy remain
valid even when N0/h → ∞, as demonstrated in the Appendix. Although the choice
of h does not affect the theoretical properties of the strategy, determining its optimal
selection remains an open question with considerable research significance, offering a
promising direction for future investigations.
35

References
Ao, M., Y. Li, and X. Zheng. 2018. Approaching mean-variance efficiency for large
portfolios. Review of Financial Studies 32:2890–2919.
Bali, T. G., H. Beckmeyer, M. Mo ̈rke, and F. Weigert. 2023. Option return predictability
with machine learning and big data. Review of Financial Studies 36:3548–3602.
Bentkus, V. 1986. Dependence of the berry-esseen estimate on the dimension. Lithua
nian Mathematical Journal 26:110–114.
Bentkus, V. 2003. On the dependence of the berry-esseen bound on dimension. Journal
of Statistical Planning and Inference 113:385–402.
Bickel, P. J. and E. Levina. 2008. Covariance regularization by thresholding. Annals
of Statistics 36:2577–2604.
Bloznelis, M. 1989. On non-uniform estimate of convergence rate in multidimensional
central limit theorem with stable limit law. Litov. Matem. Sb 29:350–365.
Buccheri, G., F. Corsi, and S. Peluso. 2021. High-frequency lead-lag effects and cross
asset linkages: A multi-asset lagged adjustment model. Journal of Business & Economic
Statistics 39:605–621.
Cao, H., H. Gu, X. Guo, and M. Rosenbaum. 2023. Risk of transfer learning
and its applications in finance. doi:10.2139/ssrn.4624427. Woking Paper, SSRN,
https://ssrn.com/abstract=4624427.
Chang, J., X. Chen, and M. Wu. 2024. Central limit theorems for high dimensional
dependent data. Bernoulli 30:712–742.
Cochrane, J. H. 2009. Asset pricing: Revised edition. Princeton university press.
Diebold, F., T. Andersen, T. Bollerslev, and H. Ebens. 2001. The distribution of realized
stock return volatility. Journal of Financial Economics 61:43–76.
36

Fama, E. F. and K. R. French. 1993. Common risk factors in the returns on stocks and
bonds. Journal of Financial Economics 33:3–56.
Fan, J., Y. Fan, and J. Lv. 2008. High dimensional covariance matrix estimation using
a factor model. Journal of Econometrics 147:186–197.
Fan, J., H. Liu, and W. Wang. 2015. Large covariance estimation through elliptical
factor models. Annals of Statistics 46:1383–1414.
Fan, J., J. Zhang, and K. Yu. 2012. Vast portfolio selection with gross-exposure con
straints. Journal of the American Statistical Association 107:592–606.
Filip, K. and L. W. James. 2019. Multiple regression model averaging and the focused
information criterion with an application to portfolio choice. Journal of Business &
Economic Statistics 37:506–516.
Gotze, F. 1991. On the rate of convergence in the multivariate clt. Annals of Probability
19:724–739.
Guo, H. 2025. Earnings extrapolation and predictable stock market returns. Review of
Financial Studies 38:1730–1782.
Hansen, B. E. 2007. Least squares model averaging. Econometrica 75:1175–1189.
Hellum, O., L. H. Pedersen, and A. Ronn-Nielsen. 2024. How global is predictabil
ity? The power of financial transfer learning. doi:10.2139/ssrn.4620157. Woking Paper,
SSRN, https://ssrn.com/abstract=4620157.
Hu, X. and X. Zhang. 2023. Optimal parameter-transfer learning by semiparametric
model averaging. Journal of Machine Learning Research 24:1–53.
Jagannathan, R. and T. Ma. 2003. Risk reduction in large portfolios: Why imposing
the wrong constraints helps. Journal of Finance 58:1651–1684.
37

Jeong, G. and H. Y. Kim. 2019. Improving financial trading decisions using deep
q-learning: Predicting the number of shares, action strategies, and transfer learning.
Expert Systems with Applications 117:125–138.
Kelly, B., S. Malamud, and L. H. Pedersen. 2023. Principal portfolios. Journal of
Finance 78:347–387.
Koshiyama, A., S. B. Blumberg, N. Firoozye, P. Treleaven, and S. Flennerhag. 2022.
Quantnet: transferring learning across trading strategies. Quantitative Finance
22:1071–1090.
Kraus, M. and S. Feuerriegel. 2017. Decision support from financial disclosures with
deep neural networks and transfer learning. Decision Support Systems 104:38–48.
Ledoit, O. and M. Wolf. 2004. A well-conditioned estimator for large-dimensional
covariance matrices. Journal of Multivariate Analysis 88:365–411.
Ledoit, O. and M. Wolf. 2017. Nonlinear shrinkage of the covariance matrix for portfolio
selection: Markowitz meets goldilocks. Review of Financial Studies 30:4349–4388.
Ledoit, O. and M. Wolf. 2018. Nonlinear shrinkage of the covariance matrix for portfolio
selection: Markowitz meets goldilocks. Review of Financial Studies 31:1604–1604.
Li, W., S. Ding, Y. Chen, H. Wang, and S. Yang. 2019. Transfer learning-based default
prediction model for consumer credit in china. Journal of Supercomputing 75:862–884.
Markowitz, H. M. 1952. Portfolio selection. Journal of Finance 7:77–91.
Moral-Benito, E. 2015. Model averaging in economics: An overview. Journal of Eco
nomic Surveys 29:46–75.
Mo ̈rstedt, T., B. Lutz, and D. Neumann. 2024. Cross validation based transfer learning
for cross-sectional non-linear shrinkage: A data-driven approach in portfolio optimiza
tion. European Journal of Operational Research 318:670–685.
38

Nagaev, S. V. 2006. An estimate of the remainder term in the multidimensional cen
tral limit theorem. Proceedings of the Third Japan—USSR Symposium on Probability
Theory 16:419–438.
Pan, S. J. and Q. Yang. 2010. A survey on transfer learning. IEEE Transactions on
Knowledge and Data Engineering 22:1345–1359.
Sharpe, W. F. 1966. Mutual fund performance. Journal of Business 39:119–138.
Sharpe, W. F. 1994. The sharpe ratio. Journal of Portfolio Management 21:49–58.
Wu, D., X. Wang, and S. Wu. 2022. Jointly modeling transfer learning of industrial
chain information and deep learning for stock prediction. Expert Systems with Appli
cations 191:116257.
Yuan, M. and G. Zhou. 2024. Why naive diversification is not so naive, and how to
beat it? Journal of Financial and Quantitative Analysis 59:3601–3632.
Zhang, X., H. Liu, Y. Wei, and Y. Ma. 2024. Prediction using many samples with mod
els possibly containing partially shared parameters. Journal of Business & Economic
Statistics 42:187–196.
Zhuang, F., Z. Qi, K. Duan, D. Xi, Y. Zhu, H. Zhu, H. Xiong, and Q. He. 2021. A
comprehensive survey on transfer learning. Proceedings of the IEEE 109:43–76.
Zitikis, R., V. M. Zolatarev, and V. V. Kalashnikov. 2006. A berry-ess ́een bound for
multivariate l-estimates with explicit dependence on dimension. In Stability Problems
for Stochastic Models. Springer Berlin Heidelberg.
39

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:23.478Z
- **Text Length:** 68136 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 39 of 39
