# PDF Document: Lee et al. - 2025 - StaRQR-K False Discovery Rate Controlled Regional Quantile Regression.pdf

**File Path:** Lee et al. - 2025 - StaRQR-K False Discovery Rate Controlled Regional Quantile Regression.pdf

**Processed Date:** 2026-02-10T18:18:54.862Z

**File Size:** 6094.95 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3431

**Title:** StaRQR-K: False Discovery Rate Controlled Regional Quantile Regression

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

StaRQR-K: False Discovery Rate Controlled Regional Quantile
Regression
Sang Kyu Lee1,2, Tongwu Zhang1, Hyokyoung G. Hong∗,1, and Haolei Weng*,3
1Biostatistics Branch, Division of Cancer Epidemiology and Genetics, National Cancer Institute, National Institutes of Health 2Department of Applied Statistics, Konkuk University 3Department of Statistics and Probability, Michigan State University
Abstract
Quantifying how genomic features influence different parts of an outcome distribution requires statistical tools that go beyond mean regression, especially in ultrahigh-dimensional settings. Motivated by the study of LINE-1 activity in cancer, we propose StaRQR-K, a stabilized regional quantile regression framework with model-X knockoffs for false discovery rate control. StaRQR-K identifies CpG sites whose methylation levels are associated with specific quantile regions of an outcome, allowing det-
ection of heterogeneous and tail-sensitive effects. The method combines an efficient regional quantile sure independence screening procedure with a winsorizing-based model-X knockoff filter, providing false discovery rate (FDR) control for regional quantile regression. Simulation studies show that StaRQR-K achieves valid FDR control and substantially higher power than existing approaches. In an application to The Cancer Genome Atlas head and neck cancer cohort, StaRQR-K reveals quantile-region-spe-
cific associations between CpG methylation and LINE-1 activity that improve out-of-sample prediction and highlight genomic regions with known functional relevance.
1 Introduction
Long Interspersed Nuclear Element 1 (LINE-1) retrotransposons are repetitive DNA sequences that can copy and insert themselves into new genomic locations. These insertions compromise genomic integrity and are frequently observed in cancer. Methylation at LINE-1 promoter regions typically suppresses such activity, whereas hypomethylation in tumors can reactivate LINE-1, leading to increased insertions. Because LINE-1 activity, reflected by the total number of transposable element (TE) insertions, i-
ndicates genomic instability, it has attracted growing interest as a marker of cancer development and progression. Understanding the molecular mechanisms that influence LINE-1 activation may offer new perspectives on the biological processes underlying tumorigenesis. This study investigates whether methylation levels at CpG sites within LINE-1 promoter regions are associated with elevated LINE-1 activity. Since LINE-1 activity cannot be directly observed, we use the total number of TE insertions a-
s a proxy reflecting cumulative mobilization events. Of particular interest is whether specific CpG sites are linked to the upper tail of the TE insertion distribution, where genomic instability is most pronounced. The statistical challenges are considerable. All samples in this study are derived from tumor tissues, where LINE-1 activity is already present to some degree. In our data, the total number of TE insertions is at least one for every sample, with the majority showing low counts and a few-
 exhibiting extremely high counts. This
*denotes equal contribution
1
arXiv:2511.21562v1 [stat.ME] 26 Nov 2025

distribution reflects substantial heterogeneity in LINE-1 activation among tumors and motivates modeling approaches that focus on the upper tail rather than on the mean. The analysis further involves approximately 11,500 CpG sites within or near LINE-1 promoter regions, each represented by its methylation level, while only a small subset is expected to be associated with elevated LINE-1 activity. This ultrahigh-dimensional structure requires a variable selection procedure capable of reliably iden-
tifying CpG sites linked to higher, rather than average, activity levels. To address these challenges, we propose a new framework based on regional quantile regression (RQR), which models associations across a range of quantiles rather than at a single level, thereby improving stability and revealing quantile-dependent signals. The method integrates two complementary components: a screening step with theoretical sure-screening guarantees that enhances computational scalability while retaining pote-
ntially relevant CpG sites, and a knockoff-based variable selection procedure that enables valid false discovery rate (FDR) control in ultrahigh-dimensional settings. This unified approach offers a principled and reproducible framework for identifying CpG sites associated with elevated LINE-1 activity. Variable screening for ultrahigh-dimensional data has been widely studied since the seminal work on Sure Independence Screening (SIS), which ranks covariates by their marginal associations with the -
response (Fan and Lv, 2008). Although SIS and its extensions (Fan and Song, 2010; Hall and Miller, 2009; Fan et al., 2011) have been successful in various models, mean-based screening criteria are often sensitive to heavy-tailed errors and heteroscedasticity. Quantile regression (QR) provides a more robust alternative by characterizing associations across the conditional response distribution (Koenker and Bassett, 1978), motivating high-dimensional QR methods using penalization or marginal screeni-
ng (Wang et al., 2012; He et al., 2013; Fan et al., 2014; Ma et al., 2017; Lee et al., 2023; Park et al., 2023). However, most existing QR-based screening methods target a single quantile level, which can produce unstable selections when effects vary across quantiles (Zheng et al., 2015). Regional quantile regression extends QR by modeling effects over an interval of quantiles, offering a more coherent view of distributional patterns (Park and He, 2017; Zheng et al., 2015; Yoshida, 2021). Yet, no -
existing regional quantile screening methods incorporate formal FDR control. As noted by Liu et al. (2022), many high-dimensional screening procedures use conservative thresholds that compromise power or lack theoretical FDR guarantees. Building on the model-X knockoff framework (Barber and Cande`s, 2015; Cande`s et al., 2018), our method extends valid FDR control to the regional quantile regression setting, where standard knockoff constructions fail because the conditional independence assumption-
 does not hold across quantiles. To address this, we introduce a restricted quantile representation, using winsorization, that confines the analysis to a subset of quantiles where the relationship between predictors and the outcome remains valid, allowing valid knockoff generation within this range. A subsequent stabilization step further enhances reproducibility and power. The resulting procedure provides robust and interpretable variable selection with FDR control in ultrahigh-dimensional region-
al quantile analysis. This paper contributes in several ways. Most importantly, we develop the first statistical framework for variable selection in regional quantile regression that effectively targets FDR control in high-dimensional settings. Building on this main contribution, we add several specific components. First, we incorporate a regional quantile sure independence screening step that prioritizes features showing evidence of quantile-region–specific associations. Second, we establish a wi-
nsorizing-based transformation that enables the use of valid knockoff statistics in the knockoff filter. Third, we demonstrate the practical value of the method through an application to Head and Neck Squamous Cell Carcinoma (HNSC) data from The Cancer Genome Atlas (TCGA). LINE-1 activity is elevated in HNSC tumors and is widely recognized as a marker of genomic instability. Our analysis identifies CpG sites whose methylation relates to variation in LINE-1 activity, offering new statistical and bi-
ological insight into its epigenetic regulation in cancer. The remainder of the paper is organized as follows. Section 2 introduces the proposed screening procedure and the associated false discovery rate (FDR) control method for the regional quantile regression model, along with its computational and theoretical developments. Section 3 presents simulation studies showing that the proposed screening step yields smaller minimum model sizes than competing approaches and that the winsorizing-based kn-
ockoff procedure achieves valid FDR control with higher power and improved stability relative to naive knockoff baselines. Section 4 reports the results of the real data analysis in cancer genomics.
2

Section 5 concludes with a summary of the main findings. Section 6 provides some supplementary information, including proofs and a table. For clarity, we summarize the notation used throughout the paper. For a = (a1, . . . , ap)⊤ ∈ Rp, let
|a|q = (Pp
i=1 |ai|q)1/q for q ∈ [1, ∞). Denote by λmax(·) and λmin(·) the largest and smallest eigenvalues of a matrix, respectively. Boldface letters indicate vectors. For a set A, 1A(·) denotes the indicator function, and |A| its cardinality. For constants a and b, a ∨ b denotes max{a, b} and a ∧ b denotes min{a, b}.
2 Feature Screening and FDR Control for Regional Quantile Regression
We consider the following regional quantile regression form:
Qy|x(τ ) = α∗(τ ) + xT β∗(τ ), τ ∈ ∆, (1)
where Qy|x(τ ) = inf{t : P(y ≤ t|x) ≥ τ } denotes the τ th conditional quantile of a response variable y ∈ R given the covariates x = (x1, . . . , xp) ∈ Rp, and ∆ = [∆l, ∆u] ⊆ (0, 1) is an interval of quantile levels of interest. The parameters α∗(τ ) and β∗(τ ) = (β1∗(τ ), . . . , βp∗(τ )) denote the intercept and coefficient functions, respectively, which are allowed to vary with the quantile level τ ∈ ∆. The set of active covariates is defined as
M(∆) = 1 ≤ j ≤ p : β∗
j (τ ) ̸= 0 for some τ ∈ ∆ . (2)
According to the definition, an active variable may influence all or some quantiles in the region ∆ of interest. Given n independent and identically distributed observations, denoted by {(xi, yi)}n
i=1, our goal is to identify the set of active covariates M(∆), i.e., the variables which impact the prespecified part (captured by ∆) of the conditional distribution of the response. We adopt a common global sparsity assumption that the number of active variables is smaller than the sample size (Zheng et al., 2015; Yoshida, 2021), that is, |M(∆)| ≤ n. We are concerned with the ultrahigh-dimensional setting where the covariate dimension p can be exponentially large in relative to the sample size n-
. This is a typical scenario in genomics studies, where the number of assayed molecular features (e.g., SNPs, CpG sites, gene transcripts, metabolites) routinely reaches tens of thousands to millions while available samples are often in the hundreds. We develop a screen and clean procedure, where the first stage performs feature screening to reduce dimensionality from high to moderate scale and the second stage employs a knockoff filter to control false discovery rate for variable selection. We di-
scuss in detail the two stages in Sections 2.1 and 2.2, respectively.
2.1 Feature Screening via Integrated Regional Quantile Estimation
This section introduces our proposed screening method for ultrahigh-dimensional data. Without loss of generality, we assume each covariate is standardized such that Exij = 0, Var(xij) = 1, 1 ≤ j ≤ p, where xij is the ith observation for the jth covariate. Our method ranks the importance of each covariate by an integrated marginal quantile statistics. Specifically, let ∆l = ξ0 < ξ1 < · · · < ξL0−1 < ξL0 = ∆u be a partion of the interval ∆,
and S(k, ξ) be the space of polynomial splines of order k + 1 with knots {ξi}L0−1
i=1 . There exists a normalized B-spline basis for S(k, ξ) (Schumaker, 2007), denoted by B(τ ) = (B1(τ ), . . . , BN (τ )) with N = k + L0. For each j = 1, . . . , p, solve the following marginal quantile regression problem
(
abj, bbj) ∈ arg min
a,b
L
X
l=1
n
X
i=1
ρτl yi − xijB(τl)T b − B(τl)T a ,
where ρτ (u) = u(τ − I(u ≤ 0)) is the check loss function, and ∆l < τ1 < · · · < τL < ∆u are uniformly spaced quantile levels over the interval ∆. The importance of each covariate is then measured by the integrated squared coefficient estimator,
Rbj = 1
L
L
X
l=1
(B(τl)T bbj)2, j = 1, . . . , p.
3

Our screening step retains the subset of variables
Mc(∆) =
n
1 ≤ j ≤ p : Rbj ≥ ν0
o
,
where ν0 > 0 is a pre-specified cutoff threshold. The method is based on the magnitude of the estimated marginal regression coefficients. Utilizing marginal quantile regression statistics for screening is not new (He et al., 2013; Ma and Huang, 2016; Xu, 2017). Our method differs from the existing ones by the smoothing (via B-splines) and aggregating (across quantile levels) components. In the context of regional quantile regression, the marginal regression coefficients tend to change smoothly wit-
h the quantile level τ . Hence, our spline-based smoothing approach can lead to better estimators than the naive approach that estimates coefficients independently. Moreover, for an active variable, its marginal regression coefficient might be small for some quantiles. However, as long as the aggregated magnitude across quantiles is large enough, our method is able to detect it. We formalize these arguments in a theorem that establishes the sure screening property (Fan and Lv, 2008) – all the acti-
ve variables survive after variable screening with probability tending to one. Towards that end, for each j ∈ M(∆), define the population quantities:
(a∗
j , b∗
j ) ∈ arg min
a,b∈RN
1
L
L
X
l=1
Eρτl y − xjB(τl)T b − B(τl)T a , (3)
(fj(τ ), gj(τ )) ∈ arg min
f,g∈R
Eρτ (y − xjf − g). (4)
We impose the following regularity conditions.
Condition 1 (Bounded covariates). The covariates are bounded: maxj∈M(∆) |xj| ≤ Kx.
Condition 2 (Smoothness condition). The functions {fj(τ ), gj(τ )}j∈M(∆) belong to the class of functions
whose kth derivative satisfies a Lipschitz condition of order c: |h(k)(s) − h(k)(t)| ≤ c0|s − t|c, where k is a nonnegative integer and c ∈ (0, 1] satisfies d = k + c > 0.5.
Condition 3 (Bounded density and its derivative). For each j ∈ M(∆), the conditional density evaluated at t = xjfj(τ ) + gj(τ ) and xjB(τ )T b∗
j + B(τ )T a∗
j is bounded uniformly in (xj, τ ): 0 < f ≤ py|xj (t) ≤ f ̄ < ∞.
Moreover, its derivative is uniformly bounded: supt |p′
y|xj (t)| ≤ f ̄′.
Condition 4 (Knot allocation). max1≤i≤L0 (ξi−ξi−1)
min1≤i≤L0 (ξi−ξi−1) ≤ c1 for some constant c1 ≥ 1.
Condition 5 (Strong integrated marginal signal). minj∈M(∆) 1
L
PL
l=1 |fj(τl)| ≥ κn−γ for some constants κ, γ > 0.
Condition 6 (Scaling condition). N n2γ−1 log n = o(1), N −dnγ = o(1), N n−1/2√log n = o(1), N = o(L).
Conditions 1-3 are standard in the literature on quantile regression and nonparametric spline approximation. (Belloni and Chernozhukov, 2011; He et al., 2013; Zheng et al., 2015; Sherwood and Wang, 2016; Yoshida, 2021). Condition 4 requires the spacing between knots to be of the same order, aiming to control the eigenvalues of the key B-spline related matrix PL
l=1 B(τl)B(τl)T (Shen et al., 1998). Condition 5 is a common marginal signal condition in the quantile screening literature (He et al., 2013; Ma and Huang, 2016; Xu, 2017). As noted earlier, our screening method integrates marginal signals across different quantiles, thus only requiring the integrated signal to be strong. Finally, Condition 6 specifies the allowable growth rate of the number of B-spline basis functions and integrated quantiles relative to the sample size. For instance, choose N = -
ncN , L = ncL, then Condition 6 is satisfied when γ/d < cN < min(1 − 2γ, 1/2) and cL > cN . We also see that the smaller γ (stronger marginal signal) and larger d (smoother marginal coefficient) are, the weaker Condition 6 is. Under these conditions, we establish the following sure screening property.
4

Theorem 1. Under Conditions 1–6, if we choose the threshold ν0 = κ2
5 n−2γ, then the sure screening property holds:
P M(∆) ⊆ Mc(∆) → 1, as n → ∞.
The proof of Theorem 1 is provided in Section 6.1. This theorem guarantees that, with a sufficiently large sample size, our procedure retains all active variables (i.e. no false negative error) with a probability approaching one. However, the selected set Mc(∆) may also include some inactive variables. The second stage is therefore to control the false positive error among the selected variables.
2.2 FDR Control for the Regional Quantile Regression
In the second stage, we focus on controlling the false discovery rate (FDR), defined as
FDR∆ = E |{j : j ∈ Sb∆ and j ∈/ M(∆)}|
|
Sb∆| ∨ 1 , (5)
for a given variable selection outcome Sb∆ where Sb∆ ⊂ {1, . . . , p} is a subset of indexes for quantile region ∆. We omit ∆ if it is obvious afterward. FDR is the expected proportion of falsely selected variables. For instance, with FDR controlled at q = 0.1, the expected proportion of false discoveries among the selected variables is at most 10 percent. The notion of FDR was proposed by Benjamini and Hochberg (1995) and has been extensively studied in multiple testing (Benjamini, 2010; Efron, 2-
012; Efron and Hastie, 2021). For the problem of variable selection, earlier works can only guarantee FDR control under very strong assumptions (Miller, 2002; Liu et al., 2010; Meinshausen and Bu ̈hlmann, 2010; Bogdan et al., 2015; G’Sell et al., 2016). Until recently, a knockoff framework has been established to provide general FDR control guarantees for Gaussian linear models (Barber and Cand`es, 2015) and then for arbitrary conditional distribution of the response (Cande`s et al., 2018). Howeve-
r, even the knockoff framework cannot be directly applied to our problem. In the rest of the section, we give some necessary background for the knockoff framework, explain the issue, and provide our solution.
2.2.1 A Brief Review of the Model-X Knockoff Filter
The model-X knockoff framework, introduced by Cande`s et al. (2018), is general and flexible, as it works under high-dimensional settings and operates without making modeling assumptions about the conditional distribution of the response variable. In such (conditional) distribution-free settings, it is important to first clarify the meaning of active/inactive variables.
Definition 1. Given a response variable y and covariates x = (x1, . . . , xp)1, a variable xj is an inactive variable if and only if y is independent of xj conditionally on the other variables {x1, . . . , xp} \ {xj}. The subset of inactive variables is denoted by H0 ⊆ {1, 2, . . . , p}. A variable xj is active if and only if j ∈/ H0.
The key idea of the model-X knockoff framework is to construct knockoff variables as controls to tease apart active variables from inactive ones. We say that a newly constructed random vector xe ∈ Rp is the model-X knockoffs for the orignal variables x ∈ Rp if it has the two properties as follows:
1. Pairwise exchangeability: (x, xe) d= (x, xe)swap(S), ∀S ⊆ {1, 2, . . . , p},
2. Conditional independence: xe ⊥⊥ y|x,
1Note that the number of variables left after the screening stage is much smaller than p. With a slight abuse of notation, we still use p to denote the number of variables. Also, conditioning on the sure screening, the remaining variables still follow the regional quantile model.
5

where swap(S) means swapping the entries xj and xej for each j ∈ S. Given i.i.d. observations {(xi, yi)}n
i=1,
a knockoff xei is constructed independently for xi, i = 1, 2, . . . , n. The augmented data {(xi, xei, yi)}n
i=1 is then used to compute importance statistics Wj for each j = 1, . . . , p, and variables whose Wj pass certain threshold are eventually selected. We refer to the original paper for a comprehensive treatment of the model-X knockoff framework. We will provide more details when it comes to our proposed method.
2.2.2 Model-X Knockoff Filter for the Regional Quantile Regression
Since the model-X knockoff framework does not require any assumption on the conditional distribution of the response, it can be applied to the regional quantile regression model as well. However, a critical issue arises as the set of active variables M(∆) (see (2)) in the context of regional quantile regression is not necessarily the same as the one (see Definition 1) in the knockoff framework, as shown in the following proposition.
Proposition 1. Under the regional quantile regression model (1), if xj is independent of y conditionally on {x1, . . . , xp} \ {xj}, then β∗
j (τ ) = 0, ∀τ ∈ ∆; but not vice versa.
Proof. If xj is independent of y conditionally on {x1, . . . , xp} \ {xj}, xj does not influence the conditional quantiles in ∆, hence β∗
j (τ ) = 0, ∀τ ∈ ∆. On the other hand, even if β∗
j (τ ) = 0, ∀τ ∈ ∆, xj may still impact some conditional quantiles outside ∆, so that xj is not conditionally independent of y.
Note that the FDR in the knockoff framework is defined as (5) with M(∆) replaced by Hc0. Proposition
1 shows H0 ⊆ M(∆)c, implying that the FDR the model-X knockoff can control is in fact smaller than the FDR (5) that we aim to control. As a result, if we were to directly apply the model-X knockoff framework, we would not necessarily be able to control FDR at a target level. The underlying issue is that the coefficients β∗(τ ) do not encode any information about the segment of the conditional distribution outside ∆. We employ a winsorizing to address the issue, as demonstrated by the proposition b-
elow.
Proposition 2. Let ye ∈ R be constructed as follows:
ye =

 
 
Qy|x(∆l) if y < Qy|x(∆l)
y if Qy|x(∆l) ≤ y ≤ Qy|x(∆u)
Qy|x(∆u) if y > Qy|x(∆u)
Under the regional quantile regression model (1), it holds that
Q
ye|x(τ ) =

 
 
α∗(∆l) + xT β∗(∆l) if τ ≤ ∆l
α∗(τ ) + xT β∗(τ ) if ∆l < τ < ∆u
α∗(∆u) + xT β∗(∆u) if τ ≥ ∆u
As a result, the variable xj is conditionally independent of ye if and only if β∗
j (τ ) = 0, ∀τ ∈ ∆ = [∆l, ∆u].
The proof of Proposition 2 can be found in the supplementary material (Section 6). Proposition 2 provides a recipe to adapt the knockoff framework for regional quantile regression. Instead of using the original response variable y, we use the winsorized version ye together with the covariates x to run the model-X knockoff procedure. As shown in Section 3, the winsorizing operation not only helps to achieve desired FDR control, but also enhances power. To make the idea practical, we will use part o-
f the data to estimate the unknown conditional quantiles that determine the winsorizing cut-offs in Proposition 2. Standard linear quantile regression estimators often exhibit the well-known “quantile crossing” problem, and if crossing occurs, the winsorizing operation in Proposition 2
6

may not be well defined. To avoid this issue, we adopt a non-crossing strategy similar to the ones in Bondell et al. (2010); Liu and Wu (2011), to compute the non-crossing quantile LASSO,
{
αb(τl), βb(τl)} = arg min
{α(τl),β(τl)}
L
X
l=1
X
i∈I1
ρτl (yi − α(τl) − xT
i β(τl)) + λ
L
X
l=1
∥β(τl)∥1 (6)
subject to α(τl) + xT β(τl) ≥ α(τl−1) + xT β(τl−1) for x ∈ D, l = 2, . . . , L,
where D ⊆ Rp is a closed convex polytope, I1 ⊆ {1, 2, . . . , n}, and ∆l = τ1 < τ2 < · · · < τL−1 < τL = ∆u. This non-crossing quantile LASSO guarantees monotone conditional quantile curves across the multiple quantile levels {τl}L
l=1, ensuring Qby|x(∆l) = αb(∆l) + xT βb(∆l) ≤ Qby|x(∆u) = αb(∆u) + xT βb(∆u).
After obtaining the estimated conditional quantiles, we use the other part of the data, indexed by I2, to calculate winsorized responses, generate knockoff variables and compute important statistics. Specifically, the winsorized response variables are: ∀i ∈ I2,
yei =

 
 
Qby|xi (∆l) if yi < Qby|xi (∆l)
yi if Qby|xi (∆l) ≤ yi ≤ Qby|xi (∆u)
Qby|xi (∆u) if yi > Qby|xi (∆u)
(7)
We follow Cande`s et al. (2018) to generate second-order model-X knockoffs, denoted by {xei}i∈I2. To quantify the evidence for each variable’s importance, we compute the non-crossing quantile LASSO as in (6), but based on the augmented data {(xi, xei, yei)}i∈I2:
{
αb(τl), βb(τl), b
βe(τl)} (8)
= arg min
{α(τl ),β(τl ),βe (τl )}
L
X
l=1
X
i∈I2
ρτl (yei − α(τl) − xT
i β(τl) − xeT
i
βe(τl)) + λ
L
X
l=1
(∥β(τl)∥1 + ∥βe(τl)∥1)
subject to α(τl) + xT β(τl) + xeT
i
βe(τl) ≥ α(τl−1) + xT β(τl−1) + xeT
i
βe(τl−1) for (x, xe) ∈ D, l = 2, . . . , L.
Then, the important statistics Wj is defined as a weighted difference of the estimated coefficient magnitudes across the quantile region
Wj =
L
X
l=1
wl βbj(τl) − b
βej, (τl) , j = 1, . . . , p, (9)
where wl’s are non-negative weights. The intuition behind this statistic is straightforward. A large and positive value of Wj indicates that the original variable xj exhibits a substantially stronger estimated effect across the quantile region than its knockoff xej, providing evidence that xj is a genuine signal. We use equal weights in Wj, when signal information across quantile levels is unknown a priori.
Given the importance statistics {Wj}p
j=1, we select variables in the set
Mc = {j : Wj ≥ ω}, (10)
with a data-dependent threshold.
ω = min t > 0 : # {j : Wj ≤ −t}
# {j : Wj ≥ t} ≤ q , (11)
where q is the target FDR level. If the above set is empty, ω is set to ∞. While this threshold only leads to the provable control of a modified FDR, we still use it in our method, as it often shows effective control of the usual FDR empirically (Barber and Cande`s, 2015; Cand`es et al., 2018).
7

Algorithm 1: Stabilized Regional Quantile Regression with Knockoff Filter (StaRQR-K)
Data: {(xi, yi)}n
i=1
Quantile region of interest: ∆ = [∆l, ∆u]
1. Randomly partition the dataset into three disjoint subsets: {1, 2, . . . , n} = ∪2
i=0Ii, with corresponding
sample sizes {ni}2
i=0.
2. Using the first subset I0, apply the screening step described in Section 2.1 to select the top dn variables. Only these selected variables will be used in the remaining steps.
3. Repeat the following steps for r = 1, . . . , R:
(a) Randomly partition the remaining data I1 ∪ I2 into two new subsets, I(r)
1 and I(r)
2 , with respective sample sizes n1 and n2.
(b) On the subset I(r)
1 , perform non-crossing quantile LASSO in (6) to obtain Qby|x(∆l) and Qby|x(∆u).
(c) Using the subset I(r)
2 , construct the winsorizeed responses in (7), compute the importance statistics via (8)-(9), and select variables by (10)-(11).
(d) Store the resulting set of selected variables, Mc(r)
F DR.
4. After R iterations, calculate the selection probability for each variable:
πj = 1
R
R
X
r=1
1(j ∈ Mc(r)
F DR), j = 1, . . . , p.
5. The final set of selected variables is given by McF DR = {1 ≤ j ≤ p : πj ≥ η}.
2.3 The StaRQR-K Algorithm: A Step-by-Step Implementation
A potential limitation of the knockoff filter we developed in Section 2.2, however, stems from its reliance on a single generation of knockoff random variables and a single data splitting. This algorithmic randomness may lead to unstable results (since multiple runs of the method on the same dataset can yield different sets of selected variables), as well as a loss of statistical power (due to reduced sample size). Motivated by Meinshausen and Bu ̈hlmann (2010) and Ren et al. (2023), we aggregate -
the selection results over multiple repetitions, to improve stability and statistical power. We are now in the position to combine all the methodological components described so far into a coherent and complete procedure, termed Stabilized Regional Quantile Regression with Knockoff Filter (StaRQR-K). It is detailed in Algorithm 1.
3 Simulation Studies
In this section, we present extensive simulations to empirically validate the performance of the proposed StaRQR-K procedure (see Algorithm 1). The performance of our methods will be benchmarked against several existing approaches to highlight the effectiveness of our methods. To be comprehensive, we evaluate the screening stage and FDR control stage of our procedure separately. After establishing the empirical validity of our approach in the simulations, we will demonstrate its practical utility -
on a challenging real-world dataset in Section 4.
3.1 Screening Performance Comparison
To evaluate the performance of our proposed feature screening method in Section 2.1, we conduct simulation studies that compare it against several competing approaches across a variety of scenarios. We compare our
8

Figure 1: Coefficient functions for Examples 1 and 2. Red horizontal lines denote the homoskedastic coefficient functions, while blue and green curves denote the heteroskedastic coefficient functions.
method, regional quantile sure independence screening (rqSIS), with some popular model-free or quantilemodel-based screening methods: DC-SIS (Li et al., 2012), PC-Screen (Zhu et al., 2017), qaSIS (He et al., 2013), and QPCS (Ma et al., 2017). For each model and setting, the procedure is repeated 500 times. Within each replication, we rank the features in descending order according to each screening method and record the minimum model size (MMS) required to contain all active features. To summarize-
 these results, we report the 5%, 35%, 65%, and 95% quantiles of the MMS values across the 500 repetitions, from best to worst. We fix p = 10, 000, n = 300 and the quantile region of interest as ∆ = [0.05, 0.95]. For the methods, qaSIS and QPCS, since they are designed to deal with only one specific single quantile level, we set τ = 0.25, 0.5, 0.75 for them to compare the results. For the tuning parameters, we set k = 3, L0 = 3, L = 10 in our method. For other methods, we use default or some tuned-
 parameters based on the suggestions from the papers. We consider two examples:
• Example 1. The intercept function α∗(τ ) = 0. Only x1, x2, x3, x12 have nonzero coefficients, which are plotted on the left panel of Figure 1. It features a simple heteroskedastic model where the coefficient β12(τ ) changes smoothly across the quantile levels τ .
• Example 2. The intercept function α∗(τ ) = 0. Only x1, x2, x11, x12 have nonzero coefficients, which are plotted on the right panel of Figure 1. It presents a more complex scenario where the coefficients β1(τ ) and β2(τ ) are nonzero only within part of the quantile region.
For both examples, we generate x = (x1, . . . , xp) in the following way: first sample (z1, . . . , zp) ∼ N (0, Σ), where each (i, j)th component of Σ is defined by Σij = σ|i−j| for i, j = 1, . . . , p and σ = 0.5, 0.8; then set xj = Φ(zj) for active variables and xj = zj for inactive ones, where Φ(·) is the standard normal distribution function. The implementation of our method in R and Rcpp is available at: https://github.com/SangkyuStat/StaRQRK. The two examples are designed to challenge existi-
ng methods. In Example 1, it is expected that singlequantile-model methods (qaSIS and QPCS) will fail to detect β12(τ ) at τ = 0.5, where its true value is zero. Similarly, in Example 2, the localized effects of β1(τ ) and β2(τ ) are expected to be difficult to identify. Also, the model-free methods (DC-SIS and PC-Screen) may not be as efficient as ours since our method exploits the model structure across different quantile levels. Indeed, this is confirmed in the simulation results from Table 1
9

Table 1: Minimum model size (MMS) result with p = 10, 000 and n = 300. The QPCS method can only track at most n = 300 top variables, so if the MMS exceeded the sample size, the result is reported as ‘300+’.
σ = 0.5 σ = 0.8
5% 35% 65% 95% 5% 35% 65% 95%
rqSIS Example 1 4 4 4 4 4 4 5 7
(∆) Example 2 4 4 4 4 4 4 4 6
DC-SIS Example 1 86.4 635 2105.4 6906 14 211.6 1106 6026.4
Example 2 111.9 851.3 2196.6 6294.6 27.95 302.15 971.45 4257.55
PC-Screen Example 1 146 1126.8 2652.4 7353 15 309.4 1400.6 5812.8
Example 2 294 1365.7 2958 6682.4 39.9 631.55 1714.1 5111.65
qaSIS Example 1 88 1868.6 4643.2 9322.2 170.4 2520.6 5610.2 9224.4
(τ = 0.25) Example 2 745.2 4146.1 6834.3 9616 903.3 5145.9 7613.85 9614.5
qaSIS Example 1 438 2810.2 5753 9506 44 990 3749.2 8628.2
(τ = 0.5) Example 2 1161.6 4276.5 6704.8 9572.8 225.45 2631.95 5770.45 9314.55
qaSIS Example 1 148.2 2019.4 4997.8 8908 22 438 2208.4 7571.8
(τ = 0.75) Example 2 964.1 4258.3 6785.4 9478.8 51.95 958.25 2915.9 8285.65
QPCS Example 1 4 4 4 300+ 4 4 4 300+
(τ = 0.25) Example 2 126.7 300+ 300+ 300+ 272.8 300+ 300+ 300+
QPCS Example 1 300+ 300+ 300+ 300+ 300+ 300+ 300+ 300+
(τ = 0.5) Example 2 300+ 300+ 300+ 300+ 300+ 300+ 300+ 300+
QPCS Example 1 4 4 4 300+ 4 4 4 300+
(τ = 0.75) Example 2 111.5 300+ 300+ 300+ 272.85 300+ 300+ 300+
(result for p = 5, 000 can be found in the supplementary material Table 4), which demonstrate that our method is superior to the competing approaches in both examples.
3.2 FDR Control Performance Comparison
In Section 2.2, we demonstrated why the standard knockoff procedure may not work for regional quantile regression, and developed a modified version via winsorizing. The main objective of this section is to evaluate the performance of the standard knockoff filter and our variant, in terms of FDR control and selection power, to validate the superiority of our proposed method. Throughout the section, we assume that we have already selected p variables from the screening stage.
10

We set the target quantile region to ∆ = [0.7, 0.9], and consider the following conditional quantile form:
Qy|x(τ ) =
s
X
j=1
axjβj +
p
X
j =p−K +1
bxjβj(τ ),
where s is the number of homoskedastic coefficients, K is the number of heteroskedastic coefficients, and a is a coefficient inflation factor that will be used to adjust the signal-to-noise ratio (SNR). The covariates are generated as follows: firstly, sample (z1, . . . , zp) ∼ N (0, Σ), where each (i, j)th component of Σ is defined by Σij = σ|i−j| for i, j = 1, . . . , p; then set xj = Φ(zj), j = p − K + 1, . . . , p and xj = zj, j = 1, . . . , p − K, where Φ(·) is the standard normal distributio-
n function. The homoskedastic coefficients βj, j = 1, . . . , s are set to 1. We consider two examples for the choice of heteroskedastic coefficients:
• Example 3. All the coefficients {βj(τ )}p
j=p−K+1 are equal to the function colored in green from the right panel of Figure 1. Since the quantile region of interest is ∆ = [0.7, 0.9], this setup makes the last K variables inactive, although they are not conditionally independent of y. This is exactly the scenario discussed in Section 2.2, where the standard (derandomized) knockoff filter may lose FDR control.
• Example 4. All the coefficients {βj(τ )}p
j=p−K+1 are equal to the function colored in blue from the right panel of Figure 1. In this setting, the last K variables are active. Even so, we will see that our method has some improvement over the standard knockoff procedure.
We vary s, a, σ to evaluate the performances across scenarios with various sparsity, SNR and design correlation levels. Five methods are considered for comparison:
1. NoWinsor: Run the standard knockoff procedure directly for the original response variables.
2. NoWinsor-Stable: Repeat NoWinsor R times and run Steps 4-5 from Algorithm 1, with R = 10, η = 0.5.
3. WinsorEst-Stable: Run Steps 3-5 from Algorithm 1, with R = 10, η = 0.5 and n1 = n2 = n/2.
4. WinsorTrue: Winsor the response using the true conditional quantiles and then run the standard knockoff procedure for the winsorized data.
5. WinsorTrue-Stable: Repeat WinsorTrue R times and run Steps 4-5 from Algorithm 1, with R = 10, η = 0.5. WinsorEst-Stable can be viewed as an approximation of WinsorTrue-Stable.
Note that both WinsorTure and WinsorTrue-Stable use the true conditional quantile information, hence are not practical methods. We include them as a benchmark in the comparison. The target FDR level is set to q = 0.2, and the tuning parameter for the non-crossing LASSO is selected using 5-fold cross-validation (CV). Each scenario is replicated 100 times, and we report the average false discovery proportion and true positive proportion as (approximate) FDR and power, respectively. For each example,-
 we investigate three scenarios. For Example 3: (1) varying s while fixing a = 1/5 and σ = 0; (2) varying a while fixing s = 9 and σ = 0; and (3) varying σ while fixing a = 1/5 and s = 9. We fix b = 1 for all three scenarios in Example 3 to make it hard to find s true constant signals. For Example 4: (1) varying s while fixing a = 1/5 and σ = 0; (2) varying a while fixing s = 9 and σ = 0; and (3) varying σ while fixing a = 1/5 and s = 9. We fix b = 0.2 for all three scenarios in Example 4 to make -
it hard to find K true heteroskedastic signals. The results for Examples 3 and 4 are presented in Figures 2 and 3, respectively. Referring to the results for NoWinsor v.s. NoWinsor-Stable and WinsorTrue v.s. WinsorTrue-Stable, we see that the derandomization (Steps 4-5 from Algorithm 1) helps improve FDR and/or power in most settings. The results for Example 3 underscore the critical role of the winsorizing step. In most scenarios, the non-winsorized procedures failed to control the FDR at the tar-
get level. In contrast, the methods that employed winsorizing,
11

Figure 2: Results obtained by varying s, a, σ for n ∈ {150, 300}, and p ∈ {60, 130}. For all simulations, we fix K = 0.6p.
both with true and estimated conditional quantiles, successfully maintained FDR control. Furthermore, the nonwinsorized versions consistently demonstrated much lower selection power than the winsorized approaches. For Example 4, while all methods controlled the FDR, the non-winsorized procedures again exhibited substantially worse selection power. These two examples collectively highlight that our proposed winsorizing strategy is essential not only for achieving valid FDR control but also for pres-
erving good statistical power.
12

Figure 3: Results obtained by varying s, a, σ for n ∈ {150, 300}, and p ∈ {30, 50}. For all simulations, we fix K = 0.5p.
4 Application to LINE-1 Methylation Data
4.1 Data Description
This study uses data from The Cancer Genome Atlas (TCGA) head and neck squamous cell carcinoma (HNSC) cohort, available from the Genomic Data Commons (GDC). Two types of data are used: (1) CpG methylation levels, which serve as covariates, and (2) a derived measure of LINE-1 activity, based on the number of transposable element (TE) insertions detected from whole-genome sequencing.
13

Outcome (LINE-1 activity). The outcome variable quantifies LINE-1 activity using the total number of somatic TE insertions detected in each tumor genome. These counts were derived from whole-genome sequencing (WGS) data of the same TCGA HNSC samples, processed with the Sherlock-Lung WGS analysis pipeline and the TraFiC-mem pipeline (Rodriguez-Martin et al., 2020; Zhang et al., 2021; Dı ́az-Gay et al., 2025). Because the dataset includes only tumor samples, most observations exhibit at least one i-
nsertion. However, the distribution of insertion counts is highly right-skewed: most tumors display few insertions, whereas a small subset shows substantially higher values. To stabilize variance and reduce skewness, we modeled the response variable as y = log(TE insertions + 1). Covariates (CpG methylation). CpG-level DNA methylation profiles were obtained from the Illumina HumanMethylation450 BeadChip (“450k array”), which assays over 450,000 CpG sites across the genome. We selected approximatel-
y 11,500 CpG probes located within promoter regions of retrotransposition-competent LINE-1 elements previously identified as active sources of somatic insertions (Rodriguez-Martin et al., 2020). Each methylation level is expressed as a beta value between 0 (unmethylated) and 1 (fully methylated), representing the proportion of methylated alleles at that CpG site. A two-step quality control procedure was applied to methylation data. (1) CpG sites with more than 10% missing values across all samples-
 were excluded. (2) For the remaining CpG sites, missing beta values were imputed using a local averaging approach, in which each missing value was replaced by the mean of its nearest neighboring CpG sites within the same sample. After processing the Head and Neck Squamous Cell Carcinoma (HNSC) cohort consisted of n = 474 tumor samples and p = 11,484 CpG sites. The samples were further divided into three groups as described in Section 2.3, Algorithm 1 (e.g., n1 = 237, n2 = 119, n3 = 118).
4.2 Identifying CpG Sites Associated with Elevated LINE-1 Activity
LINE-1 retrotransposon activity is a relatively recent focus in cancer genomics, but growing evidence indicates that aberrant activation of LINE-1 elements contributes to genomic instability and cancer progression (Tubio et al., 2014; Xiao-Jie et al., 2016; Rodriguez-Martin et al., 2020). The activity of LINE-1 is often quantified through the number of TE insertions detected per sample, referred to as total TE insertions. This count variable ranges from zero to high values, where zero indicates no-
 detectable activity. Consequently, total TE insertions are widely used as a surrogate measure for LINE-1 activity. Previous studies (Iskow et al., 2010; Trista ́n-Ramos et al., 2020) that included both normal and tumor samples or tumor-only samples typically used a binary characterization of LINE-1 activity, distinguishing whether any TE insertions were detected (total TE insertions = 0 vs. >0). This simplification was largely adopted because higher insertion counts are rare in most datasets. In -
contrast, our tumor-only data show that the distribution of total TE insertions among cancer patients is highly right-skewed, with values reaching up to 795. Limiting the analysis to a binary outcome, such as the presence or absence of insertions, would therefore overlook biologically relevant variation that may carry important information. Given the limited literature on the distributional properties of total TE insertions, we employ a quantilebased framework to better characterize heterogeneity -
in LINE-1 activity. Specifically, we partition the outcome distribution of total TE insertions into three intervals corresponding to the 5th–35th percentile (∆1), 35th–65th percentile (∆2), and 65th–95th percentile (∆3), representing low, moderate, and high LINE-1 activity, respectively. We then identify CpG sites whose methylation levels are associated with these distinct levels of LINE-1 activity. The tuning parameters for the StaRQR-K procedure were chosen to match those used in the simulation -
study (R = 10, η = 0.5, q = 0.2), and the screening threshold was set to d = 2⌊n1/ log(n1)⌋ = 86.
4.3 Results for the Head and Neck Squamous Cell Carcinoma Cohort
We applied the proposed StaRQR-K method to identify CpG sites whose methylation levels are associated with total TE insertions. For comparison, we also evaluated results from the initial screening step followed by the Derandomized Knockoff procedure, hereafter denoted as the screening + derandomized knockoff approach.
14

Table 2: Selected CpG locations of both methods for the HNSC cohort. It shows that several CpG locations are found in multiple regions and appear in both methods.
Region Screening + Derandomized Knockoff StaRQR-K Low (∆1) cg16543943 cg03926968, cg07559427, cg13229363, cg14018786, cg15480200, cg16543943 Mid (∆2) cg16543943 cg01106989, cg07483086, cg14191244, cg15841865, cg16543943, cg16712481, cg17660945, cg22884082 High (∆3) cg03840912, cg07483086, cg16712481, cg23430295, cg27660756
cg03840912, cg04937596, cg07559427, cg11548446, cg14191244, cg16712481, cg22884082, cg23430295
This benchmark also employs the non-crossing quantile LASSO to model regional effects but does not perform winsorization. The selected CpG locations from both methods are summarized in Table 2. Our StaRQR-K method identified numerous CpG locations with strong region-specific effects that were undetected by the derandomized knockoff procedure. Several CpG locations were associated with only one of ∆1, ∆2, or ∆3, whereas others were identified in two regions. We computed the regional quantile predic-
tion error (PE) on the testing data to assess model performance when predicting y using CpG sites selected by StaRQR-K within each of ∆1, ∆2, and ∆3. Unlike the conventional mean squared prediction error, this metric is based on the quantile loss function, which evaluates how well the fitted conditional quantile functions approximate the observed responses across different parts of the outcome distribution. Intuitively, a smaller quantile-based PE indicates that the CpG sites selected by the metho-
d yield more accurate prediction of the conditional distribution of LINE-1 activity, not merely its mean level. This framework allows us to examine whether the selected CpG sites capture the heterogeneity of LINE-1 activity across lower, middle, and upper quantile regions. For comparison, we also calculated the corresponding PEs for the derandomized knockoff and the preliminary screening-only approaches. Specifically, the regional quantile prediction error was defined as
PE(∆) =
Pn
i=1 1{Subject i in testing set} PL
l=1 ρτl (yi − xT
i
βb(τl))
L
Pn
i=1 1{Subject i in testing set} ,
where ∆ = [∆l, ∆u] with ∆l < τ1 < · · · < τL < ∆u, and βb(·) denotes the regional nonparametric estimates from the training set based on B-spline bases (Schumaker, 2007). The ratio of training to testing data was set to 0.8:0.2, and the process was repeated 100 times using randomly partitioned datasets. The results are shown in Figure 4. The results indicate that the models constructed using CpG sites selected by StaRQR-K consistently achieve lower prediction error compared to those based on sites-
 identified by the derandomized knockoff or screening-only approaches. We further apply a regional quantile hypothesis test to assess the significance of each selected CpG site. The null and alternative hypotheses are formulated as follows:
H0 : β∗
j (τ ) = 0 for all τ ∈ ∆ versus H1 : β∗
j (τ ) ̸= 0 for some τ ∈ ∆, and j ∈ {1, . . . , p}.
We conduct this test using the quantile rank score generated from a composite quantile regression estimator, which utilizes linear B-spline basis, by following the procedure described in Section 2 of Park and He (2017). This procedure yields a test statistic that is asymptotically normal under H0. We put the details of the procedure in the supplementary materials. Table 3 presents the post-hoc test results and their scientific interpretation. Many of the selected CpG locations exhibited negative c-
oefficients, consistent with the hypothesis that local demethylation accompanies
15

Figure 4: Out-of-sample prediction error boxplots from repeated train/test splits, comparing models built with variables selected by StaRQR-K, by the derandomized knockoff procedure, and by the preliminary screening step.
increased LINE-1 activity. This observation aligns with the established role of CpG promoter demethylation in reactivating LINE-1 transcription, supporting the biological plausibility of our findings. Several significant CpG locations were located near LINE-1 source elements previously identified as retrotransposition hotspots in PCAWG (Rodriguez-Martin et al., 2020). For example, CpG cg07483086 on chromosome 2 lies near the promoter region of the 2q24.1 hotspot source element, linking this epigen-
etic mark to activation of a known driver of somatic LINE-1 insertions. These overlaps further reinforce the biological relevance of the associations detected by our framework. Post-hoc validation further confirmed that the CpG locations uniquely identified by the regional quantile regression framework are statistically significant. These validated CpG locations display negative coefficients, supporting a model in which CpG demethylation promotes LINE-1 mobilization. In practical terms, decreased -
methylation at these CpG locations corresponds to higher quantiles of LINE-1 activity, consistent with an activating role. Interestingly, the identified CpG locations exhibited quantile-specific effects, with some appearing only in the lower or upper quantile regions of the LINE-1 activity distribution. This pattern indicates that certain CpG sites influence low or high LINE-1 activity predominantly in tumors, rather than mean or uniformly across the entire distribution. A key biological insight f-
rom this analysis is that LINE-1 activation in tumors is not solely the result of diffuse global hypomethylation, which was the main result from the previous analyses, but can also be driven by targeted demethylation at hotspot source elements. This finding strengthens the mechanistic link between local epigenetic deregulation and the mobilization of specific LINE-1 source elements that dominate the retrotransposition landscape in cancer.
5 Concluding Remarks
In this work, we introduced StaRQR-K, a statistical framework for variable selection in ultrahigh-dimensional regional quantile regression. The integration of regional quantile sure independence screening with a stabilized winsorizing-based knockoff filter effectively targets controlled false discovery at the prespecified level, which was not previously available for this class of models. The method showed strong performance in highdimensional settings and produced biologically meaningful discover-
ies in the TCGA HNSC cohort. These results illustrate how quantile-specific variable selection can detect CpG associations with LINE1 activity that standard approaches miss. While our stabilization procedure significantly enhances selection power, the in
16

Table 3: Details of the selected CpG locations by quantile region. Distance denotes the distance to the closest LINE-1 genes. Sign denotes the sign of the estimated coefficients of the composite regional quantile regression model, and Test Stat and P-values are test statistics and p-values, respectively, defined in Park and He (2017).
Region CpG ID Chromosome CpG position Cytoband Distance Sign Test Stat
(Park and He, 2017)
P-value
Low (∆1)
cg03926968 chr3 142440284 q23 0 (-) 25.27 ≤ 1e-100 cg07559427 chr7 95467004 q21.3 0 (-) 35.67 ≤ 1e-100 cg13229363 chr7 157961051 q36.3 9 (-) 42.41 ≤ 1e-100 cg14018786 chr7 149159458 q36.1 0 (-) 45.54 ≤ 1e-100 cg15480200 chr10 134630615 q26.3 1 (-) 37.32 ≤ 1e-100 cg16543943 chr16 47216988 q12.1 0 (-) 28.01 ≤ 1e-100
Mid (∆2)
cg01106989 chr6 52858459 p12.2 0 (-) 43.21 ≤ 1e-100 cg07483086 chr2 150444834 q23.2 0 (-) 62.70 ≤ 1e-100 cg14191244 chr12 21547892 p12.1 51 (-) 105.36 ≤ 1e-100 cg15841865 chr7 143173551 q35 0 (-) 41.23 ≤ 1e-100 cg16543943 chr16 47216988 q12.1 0 (-) 79.11 ≤ 1e-100 cg16712481 chr16 60556955 q21 0 (-) 68.12 ≤ 1e-100 cg17660945 chr3 149511095 q25.1 99 (-) 62.06 ≤ 1e-100 cg22884082 chr6 88039023 q15 26 (-) 79.24 ≤ 1e-100
High (∆3)
cg03840912 chr5 35494577 p13.2 0 (-) 102.13 ≤ 1e-100 cg04937596 chr12 27236803 p11.23 27 (-) 62.06 ≤ 1e-100 cg07559427 chr7 95467004 q21.3 0 (-) 98.27 ≤ 1e-100 cg11548446 chr2 28867073 p23.2 86 (-) 47.55 ≤ 1e-100 cg14191244 chr12 21547892 p12.1 51 (-) 91.00 ≤ 1e-100 cg16712481 chr16 60556955 q21 0 (-) 69.70 ≤ 1e-100 cg22884082 chr6 88039023 q15 26 (-) 67.35 ≤ 1e-100 cg23430295 chr7 140732738 q34 0 (-) 43.38 ≤ 1e-100
herent reliance on data splitting for knockoff construction presents a limitation. We acknowledge that this splitting mechanism may attenuate finite sample guarantees and inevitably reduce statistical power in scenarios where the sample size is limited. Future work can extend the framework by exploring alternative screening strategies, improving knockoff construction under complex designs, and evaluating its robustness across diverse high-dimensional applications.
6 Supplementary Materials
6.1 Proof of Theorem 1
Throughout the proof, we use D1, D2, . . . to denote constants that may depend on the fixed constants such as ∆l, ∆u, Kx, k, f , f ̄, f ̄′, c1, κ, γ from the main text. An explicit (though not optimal) dependence of {Dj, j = 1, 2, . . .} on the aforementioned constants can be tracked down. However, since it does not provide much more insight, we will often not present the explicit forms of {Dj, j = 1, 2, . . .}, and this will greatly help streamline the proof. The constants {Dj, j = 1, 2, . . .} m-
ay vary from lines to lines.
17

Proof. Theorem 1 is proved as follows:
min
j∈M(∆)
1
L
L
X
l=1
B(τl)T bbj
2 (a)
≥ min
j∈M(∆)
1
2L
L
X
l=1
B(τl)T b∗
j
2 − max
j∈M(∆)
1
L
L
X
l=1
B(τl)T (bbj − b∗
j) 2
(b)
≥ κ2
4 n−2γ − λmax
1
L
L
X
l=1
B(τl)B(τl)T · max
j∈M(∆)
∥
bbj − b∗
j ∥2
2
(c)
≥ κ2
4 n−2γ − D2
5 c2
nN 2n−1 D2
N + D3
L
(d)
≥ κ2
5 n−2γ .
Here, (a) holds by the basic inequality a2 ≥ b2/2 − (a − b)2; (b) is by Lemma 2; (c) is due to Lemmas 1 and
4; (d) holds under Condition 6 with the choice cn =
q
2D−1
1 log n.
Lemma 1. Assume Conditions 1, 3, 4, and N = o(L), cnN n−1/2 = o(1), cn → ∞. With probability at least
1 − ne−D1c2n, the following holds
∥
bbj − b∗
j ∥2 ≤ D5cnN n−1/2, ∀j ∈ M(∆).
Proof. For notational simplicity, we will drop the subscript j until near the end of the proof. Let θ = (a, b) and introduce the following notations:
ln(θ) := 1
nL
L
X
l=1
n
X
i=1
ρτl yi − xiB(τl)T b − B(τl)T a
l(θ) := 1
L
L
X
l=1
Eρτl y − xB(τl)T b − B(τl)T a
vi(θ) := 1
L
L
X
l=1
h
ρτl yi − xiB(τl)T b − B(τl)T a − ρτl yi − xiB(τl)T b∗ − B(τl)T a∗ i
A standard argument based on convexity of ln(θ), see Hjort and Pollard (2011) for example, shows that ∀δ > 0,
P ∥θ − θ∗∥2 ≥ δ
≤ P inf
∥θ−θ∗∥2=δ
l(θ) − l(θ∗) ≤ sup
∥θ−θ∗∥2≤δ
1
n
n
X
i=1
(vi(θ) − Evi(θ))
!
. (12)
To utilize (12), we first lower bound inf∥θ−θ∗∥2=δ l(θ) − l(θ∗). Note that θ∗ ∈ arg minθ l(θ) according to
18

(3). This optimality together with the identity of Knight yields that for θ satisfying ∥θ − θ∗∥2 = δ,
l(θ) − l(θ∗)
=1
L
L
X
l=1
E
Z xB(τl)T (b−b∗)+B(τl)T (a−a∗)
0
Fy|x(xB(τl)T b∗ + B(τl)T a∗ + t)
− Fy|x(xB(τl)T b∗ + B(τl)T a∗) dt
≥f
2L
L
X
l=1
E xB(τl)T (b∗ − b) + B(τl)T (a∗ − a) 2 −
f ̄′
6L
L
X
l=1
E xB(τl)T (b∗ − b) + B(τl)T (a∗ − a) 3
≥f
2−
f ̄′
6 δ(1 + Kx) · 1
L
L
X
l=1
(B(τl)T (b∗ − b))2 + (B(τl)T (a∗ − a))2
≥f
2−
f ̄′
6 δ(1 + Kx) δ2λmin
1
L
L
X
l=1
B(τl)BT (τl) . (13)
Here, in the second inequality we have used Condition 1 and ∥B(τl)∥2 ≤ 1 to employ Cauchy–Schwarz
inequality. We now turn to upper bounding G := sup∥θ−θ∗∥2≤δ 1
n
Pn
i=1(vi(θ) − Evi(θ)) . Note that the
vi(θ)’s are i.i.d. random functions, and
sup
∥θ−θ∗∥2≤δ
|vi(θ)| ≤ sup
∥θ−θ∗∥2≤δ
1
L
L
X
l=1
|xiB(τl)T (b − b∗) + B(τl)T (a − a∗)| ≤ (1 + Kx)δ.
Hence, we can apply bounded difference concentration inequality to obtain
P G ≥ E(G) + t ≤ exp −D1nt2
δ2 , ∀t > 0. (14)
Moreover, we apply symmetrization and contraction to derive
E(G) ≤ 2E sup
∥θ−θ∗∥2≤δ
1
n
n
X
i=1
εivi(θ)
≤2
L
L
X
l=1
E sup
∥θ−θ∗∥2≤δ
1
n
n
X
i=1
εi ρτl yi − xiB(τl)T b − B(τl)T a
− ρτl yi − xiB(τl)T b∗ − B(τl)T a∗
≤4
L
L
X
l=1
E sup
∥θ−θ∗∥2≤δ
1
n
n
X
i=1
εi xiB(τl)T (b − b∗) + B(τl)T (a − a∗)
≤ 4δE
v u u t
1
n
n
X
i=1
εixi
2+ 1
n
n
X
i=1
εi
2 ≤ D2δn−1/2, (15)
where ε′
is are independent symmetric Bernoulli variables, and in the fourth inequality we have used Cauchy–Schwarz inequality and the fact ∥B(τl)∥2 ≤ 1. Putting together (12)-(15) gives
P ∥bbj − b∗
j ∥2 ≥ δ
≤P (D3 − D4δ)δ2λmin
1
L
L
X
l=1
B(τl)BT (τl) ≤ G and G ≤ D2δn−1/2 + t
!
+ exp −D1nt2
δ2 .
19

Based on Lemma 4, choosing t = cnδn−1/2, δ = D5cnN n−1/2 in the above inequality yields
P ∥bbj − b∗
j ∥2 ≥ D5cnN n−1/2 ≤ exp(−D1c2
n),
under the condition N = o(L), cnN n−1/2 = o(1), cn → ∞ and the constant D5 is chosen large enough. Finally, employing a union bound over j completes the proof.
Lemma 2. Assume N −d = o(n−γ) and Conditions 1-5. It holds that
1
L
L
X
l=1
(B(τl)T b∗
j )2 ≥ κ2
2 n−2γ, ∀j ∈ M(∆).
Proof. Under Conditions 2 and 4, it is known (Theorem 6.31 in Schumaker (2007)) that there exist a0
j , b0
j ∈ RN and a constant D1 > 0 such that
sup
τ ∈∆
|fj(τ ) − B(τ )T b0
j | ≤ D1N −d, sup
τ ∈∆
|gj(τ ) − B(τ )T a0
j | ≤ D1N −d. (16)
According to the definitions in (3) and (4), we have
1
L
L
X
l=1
Eρτl(y − xjfj(τl) − gj(τl)) ≤ 1
L
L
X
l=1
Eρτl (y − xjB(τl)T b∗
j − B(τl)T a∗
j)
≤1
L
L
X
l=1
Eρτl (y − xjB(τl)T b0
j − B(τl)T a0
j ). (17)
Then using the identity of Knight like in (20), we obtain
0≤ 1
L
L
X
l=1
Eρτl (y − xjB(τl)T b0
j − B(τl)T a0
j ) − Eρτl (y − xjfj(τl) − gj(τl))
≤1
L
L
X
l=1
f ̄
2 E|xj(B(τl)T b0
j − fj(τl)) + B(τl)T a0
j − gj(τl)|2
+
f ̄′
6 E|xj(B(τl)T b0
j − fj(τl)) + B(τl)T a0
j − gj(τl)|3
≤ D2N −2d when N is large,
where the last inequality is due to (16) and Condition 1. The above combined with (17) yields
1
L
L
X
l=1
Eρτl (y − xjB(τl)T b∗
j − B(τl)T a∗
j ) − Eρτl (y − xjfj(τl) − gj(τl)) ≤ D2N −2d. (18)
Lemma 3 with τ uniformly distributed over {τl}L
l=1, together with (18), shows that when N is large,
f
4
1
L
L
X
l=1
|B(τl)T b∗
j − fj(τl)|
2
≤1
L
L
X
l=1
Eρτl (y − xjB(τl)T b∗
j − B(τl)T a∗
j ) − Eρτl (y − xjfj(τl) − gj(τl))
≤D2N −2d,
20

which implies
1
L
L
X
l=1
|B(τl)T b∗
j − fj(τl)| ≤ D3N −d.
We thus conclude
v u u t
1
L
L
X
l=1
(B(τl)T b∗
j )2 ≥ 1
L
L
X
l=1
|B(τl)T b∗
j|
≥1
L
L
X
l=1
|fj(τl)| − 1
L
L
X
l=1
|B(τl)T b∗
j − fj(τl)| ≥ κn−γ − D3N −d, (19)
where the first inequality is by Cauchy–Schwarz inequality, the second is by triangle inequality, and the last one is from Condition 5.
Lemma 3. Under Conditions 1 and 3, it holds that ∀j ∈ M(∆),
Eρτ (y − xjf (τ ) − g(τ )) − Eρτ (y − xjfj(τ ) − gj(τ ))
≥
(f
4 (E|f (τ ) − fj(τ )|)2 if E|f (τ ) − fj(τ )| ≤ q
2,
f
4 (qE|f (τ ) − fj(τ )| − q2
4 ) if E|f (τ ) − fj(τ )| > q
2,
where q = 3f
2f ̄′(1+Kx) , and the expectation E(·) is allowed to be taken additionally with respect to τ that is
independent from (y, xj).
Proof. The proof is motivated by the proof of Lemma 4 in Belloni and Chernozhukov (2011). We use E−τ to denote the expectation taken only with respect to (y, xj). Using the identity of Knight, we first obtain
E−τ ρτ (y − xjf (τ ) − g(τ )) − E−τ ρτ (y − xjfj(τ ) − gj(τ ))
= E−τ xj(fj(τ ) − f (τ )) + gj(τ ) − g(τ ) · τ − 1(y ≤ xjfj(τ ) + gj(τ ))
+ E−τ
Z xj (−fj (τ )+f (τ ))−gj (τ )+g(τ )
0
Fy|xj (xjfj(τ ) + gj(τ ) + t) − Fy|xj (xjfj(τ ) + gj(τ )) dt
≥f
2 E−τ |xj(f (τ ) − fj(τ )) + g(τ ) − gj(τ )|2 −
f ̄′
6 E−τ |xj(f (τ ) − fj(τ )) + g(τ ) − gj(τ )|3,
≥f
2 (f (τ ) − fj(τ ))2 + (g(τ ) − gj(τ ))2 ·
h
1−
f ̄′(1 + Kx)
3f
q
(f (τ ) − fj(τ ))2 + (g(τ ) − gj(τ ))2
i
, (20)
where in the first inequality we have used Taylor expansion and Condition 3 to bound the second term, and the first term equals zero due to the definition of fj(τ ), gj(τ ) in (4); the last inequality is due to Condition 1 and the fact that xj is standardized. When E−τ |xj(f (τ ) − fj(τ )) + g(τ ) − gj(τ )|2 ≤ q2, (20) implies
E−τ ρτ (y − xjf (τ ) − g(τ )) − E−τ ρτ (y − xjfj(τ ) − gj(τ ))
≥f
4 · E−τ |xj(f (τ ) − fj(τ )) + g(τ ) − gj(τ )|2. (21)
When E−τ |xj(f (τ ) − fj(τ )) + g(τ ) − gj(τ )|2 > q2, define
f ̄(τ ) = tf (τ ) + (1 − t)fj(τ ), g ̄(τ ) = tg(τ ) + (1 − t)gj(τ ),
21

with t = q
√E−τ |xj(f(τ)−fj(τ))+g(τ)−gj(τ)|2 ∈ (0, 1). Using the convexity of ρτ (·) we have
E−τ ρτ (y − xjf (τ ) − g(τ )) − E−τ ρτ (y − xjfj(τ ) − gj(τ ))
≥1
t · E−τ ρτ (y − xjf ̄(τ ) − g ̄(τ )) − E−τ ρτ (y − xjfj(τ ) − gj(τ ))
≥ fq
4
q
E−τ |xj(f (τ ) − fj(τ )) + g(τ ) − gj(τ )|2, (22)
where the second inequality holds by invoking (21) since E−τ |xj(f ̄(τ ) − fj(τ )) + g ̄(τ ) − gj(τ )|2 = q2. Denote
h1(t) := f
4 min(t2, tq) and
h2(t) :=
(f
4 t2 if t ≤ q
2
f
4 (qt − q2
4 ) if t > q
2
It is straightforward to verify that (21) and (22) together imply
E−τ ρτ (y − xjf (τ ) − g(τ )) − E−τ ρτ (y − xjfj(τ ) − gj(τ ))
≥ h1(|f (τ ) − fj(τ )|) ≥ h2(|f (τ ) − fj(τ )|).
Moreover, h2(t) is convex over t ∈ [0, ∞). Hence, we take expectation with respect to τ for the above inequality and apply Jensen’s inequality to conclude
Eρτ (y − xjf (τ ) − g(τ )) − Eρτ (y − xjfj(τ ) − gj(τ )) ≥ h2(E|f (τ ) − fj(τ )|).
Lemma 4. Under Condition 4, the B-spline basis vector B(τ ) = (B1(τ ), . . . , BN (τ )) satisfies
D1
N − D3
L ≤ λmin
1
L
L
X
l=1
B(τl)B(τl)T ≤ λmax
1
L
L
X
l=1
B(τl)B(τl)T ≤ D2
N + D3
L,
where D1, D2, D3 > 0 are constants depending on k, c1, ∆l, ∆u.
Proof. The proof is a direct application of Lemma 6.1 in Shen et al. (1998). Adopting the notations therein, the distributions Qn(x) and Q(x) in the current setting are
Qn(x) = 1
L
L
X
l=1
1(τl ≤ x), Q(x) = x − ∆l
∆u − ∆l
, for x ∈ [∆l, ∆u].
Since {τl}L
l=1 are uniformly spaced over [∆l, ∆u], it is straightforward to verify that
sup
x∈[∆l,∆u]
|Qn(x) − Q(x)| ≤ 2
L.
The rest of the proof directly follows the proof of Lemma 6.1 in Shen et al. (1998).
6.2 Proof of Proposition 2
We condition on x throughout the proof, and drop the conditioning notation for simplicity. Note that the random variable ye is defined over [Qy|x(∆l), Qy|x(∆u)], and P(ye ≤ t) = P(y ≤ t) for t ∈ [Qy|x(∆l), Qy|x(∆u)) and P(ye ≤ t) = 1 for t = Qy|x(∆u). As a result, it is direct to verify that Qye|x(τ ) = Qy|x(∆l) for τ ≤ ∆l and Q
ye|x(τ ) = Qy|x(∆u) for τ ≥ ∆u. Now for τ ∈ (∆l, ∆u), if Qy|x(τ ) < Qy|x(∆u), then Qye|x(τ ) = Qy|x(τ ) since P(ye ≤ t) = P(y ≤ t) near t = Qy|x(τ ). If Qy|x(τ ) = Qy|x(∆u), then we conclude Qye|x(τ ) =
Qy|x(∆u). Otherwise, there exists t∗ < Qy|x(∆u) such that P(y ≤ t∗) = P(ye ≤ t∗) ≥ τ which contradicts with Qy|x(τ ) = Qy|x(∆u) > t∗. The last statement about conditional independence follows because there is a one-to-one mapping between quantile and distribution functions.
22

6.3 Simulation Result of Screening Performance for p = 5, 000
Table 4: Minimum model size (MMS) result with p = 5, 000 and n = 300. The QPCS method can only track at most n = 300 top variables, so if the MMS exceeded the sample size, the result is reported as ‘300+’.
σ = 0.5 σ = 0.8
5% 35% 65% 95% 5% 35% 65% 95%
rqSIS Example 1 4 4 4 4 4 4 5 7
(∆) Example 2 4 4 4 4 4 4 4 6
DC-SIS Example 1 51.4 445.4 1178.4 3506 13 122.9 731.3 3113.9
Example 2 82 454.3 994.45 2602 20.95 149.3 429.4 2123.5
PC-Screen Example 1 98 642 1490.6 3585 14.7 153.9 826.2 3164.9
Example 2 167.8 717.6 1472.75 3005.7 25.95 263 768.8 2599.1
qaSIS Example 1 83.2 1022 2555.8 4569.4 124.8 1399.8 2972.4 4580.3
(τ = 0.25) Example 2 431.7 2049.65 3459.65 4794.6 449.95 2422.3 3728.75 4826.4
qaSIS Example 1 148.4 1539.2 2946.8 4677 33.1 541 1927.2 4162.4
(τ = 0.5) Example 2 587.9 2300.2 3633.1 4784.6 123.95 1354.65 2995.35 4686.3
qaSIS Example 1 55.2 870.2 2715 4675.6 16 229.9 1182 3693.9
(τ = 0.75) Example 2 335.75 1945.25 3421.65 4724.05 32 353.95 1401.4 4265.2
QPCS Example 1 4 4 4 300+ 4 4 4 300+
(τ = 0.25) Example 2 50 300+ 300+ 300+ 68.95 300+ 300+ 300+
QPCS Example 1 220.4 300+ 300+ 300+ 219.3 300+ 300+ 300+
(τ = 0.5) Example 2 300+ 300+ 300+ 300+ 300+ 300+ 300+ 300+
QPCS Example 1 4 4 4 300+ 4 4 4 300+
(τ = 0.75) Example 2 67 300+ 300+ 300+ 59.85 300+ 300+ 300+
6.4 Some Details for Regional Quantile Hypothesis Test in Section 4
This procedure is similar to the procedure described in Section 2 of Park and He (2017). For the details of the method, please see the original paper. Here, we are typically interested in testing the following hypothesis:
H0 : β∗
j (τ ) = 0 for all τ ∈ ∆ versus H1 : β∗
j (τ ) ̸= 0 for some τ ∈ ∆, and j ∈ {1, . . . , p}.
When the null hypothesis is true, we consider the marginal composite quantile regression estimator as follows:
ab = arg min
a∈RN
1
nL
L
X
l=1
n
X
i=1
ρτl yi − B(τl)T a . (23)
23

Then, we define the conditional density matrix and projection matrix as follows:
H(l) = diag f (τl)
1 (0), . . . , f (τl)
n (0)
P(l) = (h(l))T h(l) −1
h(l)(h(l))T
where h(l) = H(l)1n, f are the conditional density functions, and 1n ∈ Rn is the vector of ones. f can be estimated by the methods described in the paper, and H(l) can be the identity matrix for the homoskedastic
errors, as a special case. We also define xj = (x1j, . . . , xnj)T , and the projected covariates as xe(l)
j = (In −
P(k))xj. Then, the quantile rank score test rejects the null hypothesis if SnT Qn−1Sn is greater than its critical value with
Sn = 1
L√n
L
X
l=1
(
xe(l)
j )T ψτl (y − 1nB(τl)T
ab)
Qn = 1
L2n
L
X
l=1
L
X
l′=1
(τl ∧ τl′ − τlτl′ )(xe(l)
j )T
xe(l′)
j
where ψτ (x) = (ψτ (x1), . . . , ψτ (xn))T for any vector x ∈ Rn and ψτ (x) = τ − 1(x ≤ 0) for any scalar x. The score follows an asymptotical normal distribution, so we reject it based on the critical value from the normal distribution.
References
BARBER, R. F. and CAND `ES, E. J. (2015). Controlling the false discovery rate via knockoffs. The Annals of Statistics, 43 2055 – 2085.
BELLONI, A. and CHERNOZHUKOV, V. (2011). l1-penalized quantile regression in high-dimensional sparse models. The Annals of Statistics, 39 82–130.
BENJAMINI, Y. (2010). Discovering the false discovery rate. Journal of the Royal Statistical Society Series B: Statistical Methodology, 72 405–416.
BENJAMINI, Y. and HOCHBERG, Y. (1995). Controlling the false discovery rate: a practical and powerful approach to multiple testing. Journal of the Royal statistical society: series B (Methodological), 57 289300.
BOGDAN, M., VAN DEN BERG, E., SABATTI, C., SU, W. and CAND `ES, E. J. (2015). Slope—adaptive variable selection via convex optimization. The Annals of Applied Statistics, 9 1103.
BONDELL, H. D., REICH, B. J. and WANG, H. (2010). Noncrossing quantile regression curve estimation. Biometrika, 97 825–838.
CAND `ES, E., FAN, Y., JANSON, L. and LV, J. (2018). Panning for gold: ‘model-x’ knockoffs for high dimensional controlled variable selection. Journal of the Royal Statistical Society: Series B (Statistical Methodology), 80 551–577.
D ́IAZ-GAY, M., ZHANG, T., HOANG, P. H., LEDUC, C., BAINE, M. K., TRAVIS, W. D., SHOLL, L. M., JOUBERT, P., KHANDEKAR, A., ZHAO, W. ET AL. (2025). The mutagenic forces shaping the genomes of lung cancer in never smokers. Nature 1–12.
24

EFRON, B. (2012). Large-scale inference: empirical Bayes methods for estimation, testing, and prediction. Cambridge University Press.
EFRON, B. and HASTIE, T. (2021). Computer age statistical inference, student edition: algorithms, evidence, and data science. Cambridge University Press.
FAN, J., FAN, Y. and BARUT, E. (2014). Adaptive robust variable selection. The Annals of Statistics, 42 324 – 351.
FAN, J., FENG, Y. and SONG, R. (2011). Nonparametric independence screening in sparse ultra-highdimensional additive models. Journal of the American Statistical Association, 106 544–557.
FAN, J. and LV, J. (2008). Sure independence screening for ultrahigh dimensional feature space. Journal of the Royal Statistical Society: Series B (Statistical Methodology), 70 849–911.
FAN, J. and SONG, R. (2010). Sure independence screening in generalized linear models with NPdimensionality. The Annals of Statistics, 38 3567 – 3604.
G’SELL, M. G., WAGER, S., CHOULDECHOVA, A. and TIBSHIRANI, R. (2016). Sequential selection procedures and false discovery rate control. Journal of the Royal Statistical Society Series B: Statistical Methodology, 78 423–444.
HALL, P. and MILLER, H. (2009). Using generalized correlation to effect variable selection in very high dimensional problems. Journal of Computational and Graphical Statistics, 18 533–550.
HE, X., WANG, L. and HONG, H. G. (2013). Quantile-adaptive model-free variable screening for highdimensional heterogeneous data. The Annals of Statistics, 41 342 – 369.
HJORT, N. L. and POLLARD, D. (2011). Asymptotics for minimisers of convex processes. arXiv preprint arXiv:1107.3806.
ISKOW, R. C., MCCABE, M. T., MILLS, R. E., TORENE, S., PITTARD, W. S., NEUWALD, A. F., VAN MEIR, E. G., VERTINO, P. M. and DEVINE, S. E. (2010). Natural mutagenesis of human genomes by endogenous retrotransposons. Cell, 141 1253–1261.
KOENKER, R. and BASSETT, G. (1978). Regression quantiles. Econometrica: journal of the Econometric Society 33–50.
LEE, E. R., PARK, S., LEE, S. K. and HONG, H. G. (2023). Quantile forward regression for high-dimensional survival data. Lifetime Data Analysis, 29 769–806. Epub 2023 Jul 2.
LI, R., ZHONG, W. and ZHU, L. (2012). Feature screening via distance correlation learning. Journal of the American Statistical Association, 107 1129–1139.
LIU, H., ROEDER, K. and WASSERMAN, L. (2010). Stability approach to regularization selection (stars) for high dimensional graphical models. Advances in neural information processing systems, 23.
LIU, W., KE, Y., LIU, J. and LI, R. (2022). Model-free feature screening and fdr control with knockoff features. Journal of the American Statistical Association, 117 428–443.
LIU, Y. and WU, Y. (2011). Simultaneous multiple non-crossing quantile regression estimation using kernel constraints. Journal of nonparametric statistics, 23 415–437.
MA, C. and HUANG, J. (2016). Asymptotic properties of lasso in high-dimensional partially linear models. Science China Mathematics, 59 769–788.
25

MA, S., LI, R. and TSAI, C.-L. (2017). Variable screening via quantile partial correlation. Journal of the American Statistical Association, 112 650–663.
MEINSHAUSEN, N. and B  ̈UHLMANN, P. (2010). Stability selection. Journal of the Royal Statistical Society Series B: Statistical Methodology, 72 417–473.
MILLER, A. (2002). Subset selection in regression. chapman and hall/CRC.
PARK, S. and HE, X. (2017). Hypothesis testing for regional quantiles. Journal of Statistical Planning and Inference, 191 13–24.
PARK, S., LEE, E. R. and HONG, H. G. (2023). Varying-coefficients for regional quantile via knn-based lasso with applications to health outcome study. Statistics in Medicine, 42 3903–3918. Epub 2023 Jun 27.
REN, Z., WEI, Y. and CAND `ES, E. (2023). Derandomizing knockoffs. Journal of the American Statistical Association, 118 948–958.
RODRIGUEZ-MARTIN, B., ALVAREZ, E. G., BAEZ-ORTEGA, A., ZAMORA, J., SUPEK, F., DEMEULEMEESTER, J., SANTAMARINA, M., JU, Y. S., TEMES, J., GARCIA-SOUTO, D. ET AL. (2020). Pan-cancer analysis of whole genomes identifies driver rearrangements promoted by line-1 retrotransposition. Nature genetics, 52 306–319.
SCHUMAKER, L. (2007). Spline functions: basic theory. Cambridge university press.
SHEN, X., WOLFE, D. and ZHOU, S. (1998). Local asymptotics for regression splines and confidence regions. The Annals of statistics, 26 1760–1782.
SHERWOOD, B. and WANG, L. (2016). Partially linear additive quantile regression in ultra-high dimension. The Annals of Statistics, 44 288–317.
TRIST  ́AN-RAMOS, P., RUBIO-ROLDAN, A., PERIS, G., S  ́ANCHEZ, L., AMADOR-CUBERO, S., VIOLLET, S., CRISTOFARI, G. and HERAS, S. R. (2020). The tumor suppressor microRNA let-7 inhibits human LINE-1 retrotransposition. Nature Communications, 11 5712.
TUBIO, J. M., LI, Y., JU, Y. S., MARTINCORENA, I., COOKE, S. L., TOJO, M., GUNDEM, G., PIPINIKAS, C. P., ZAMORA, J., RAINE, K. ET AL. (2014). Extensive transduction of nonrepetitive DNA mediated by L1 retrotransposition in cancer genomes. Science, 345 1251343.
WANG, L., WU, Y. and LI, R. (2012). Quantile regression for analyzing heterogeneity in ultra-high dimension. Journal of the American Statistical Association, 107 214–222.
XIAO-JIE, L., HUI-YING, X., QI, X., JIANG, X. and SHI-JIE, M. (2016). LINE-1 in cancer: multifaceted functions and potential clinical implications. Genetics in Medicine, 18 431–439.
XU, K. (2017). Model-free feature screening via a modified composite quantile correlation. Journal of Statistical Planning and Inference, 188 22–35.
YOSHIDA, T. (2021). Quantile function regression and variable selection for sparse models. Canadian Journal of Statistics, 49 1196–1221.
ZHANG, T., JOUBERT, P., ANSARI-POUR, N., ZHAO, W., HOANG, P. H., LOKANGA, R., MOYE, A. L., ROSENBAUM, J., GONZALEZ-PEREZ, A., MARTINEZ-JIMENEZ, F. ET AL. (2021). Genomic and evolutionary classification of lung cancer in never smokers. Nature genetics, 53 1348–1359.
26

ZHENG, Q., PENG, L. and HE, X. (2015). Globally adaptive quantile regression with ultra-high dimensional data. The Annals of Statistics, 43 2225–2258.
ZHU, L., XU, K., LI, R. and ZHONG, W. (2017). Projection correlation between two random vectors. Biometrika, 104 829–843.
27

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:54.862Z
- **Text Length:** 71371 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
