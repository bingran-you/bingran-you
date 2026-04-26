# PDF Document: Hladká and Martinková - 2025 - A novel nonparametric framework for DIF detection using kernel-smoothed item response curves.pdf

**File Path:** Hladká and Martinková - 2025 - A novel nonparametric framework for DIF detection using kernel-smoothed item response curves.pdf

**Processed Date:** 2026-02-10T18:17:16.948Z

**File Size:** 8342.66 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3454

**Title:** A novel nonparametric framework for DIF detection using kernel-smoothed item response curves

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A NOVEL NONPARAMETRIC FRAMEWORK FOR DIF DETECTION
USING KERNEL-SMOOTHED ITEM RESPONSE CURVES
A PREPRINT
Ade ́la Hladka ́1, Patr ́ıcia Martinkova ́1,2
1 Institute of Computer Science of the Czech Academy of Sciences, Prague, Czech Republic 2 Faculty of Education, Charles University, Prague, Czech Republic
This is the authors’ version of the manuscript.
November 24, 2025
ABSTRACT
This study introduces a novel nonparametric approach for detecting Differential Item Functioning (DIF) in binary items through direct comparison of Item Response Curves (IRCs). Building on prior work on nonparametric comparison of regression curves, we extend the methodology to accommodate binary response data, which is typical in psychometric applications. The proposed approach includes a new estimator of the asymptotic variance of the test statistic and derives optimal weight functions that maxi-
mise local power. Because the asymptotic distribution of the resulting test statistic is unknown, a wild bootstrap procedure is applied for inference. A Monte Carlo simulation study demonstrates that the nonparametric approach effectively controls Type I error and achieves power comparable to the traditional logistic regression method, outperforming it in cases with multiple intersections of the underlying IRCs. The impact of bandwidth and weight specification is explored. Application to a verbal -
aggression dataset further illustrates the method’s ability to detect subtle DIF patterns missed by parametric models. Overall, the proposed nonparametric framework provides a flexible and powerful alternative for detecting DIF, particularly in complex scenarios where traditional model-based assumptions may not be applicable.
1 Introduction
Multi-item assessments play a significant role in various areas of our everyday lives, intervening in education, psychology, healthcare, and other applied fields [Brennan, 2006, Haladyna and Downing, 2011, Martinkova ́ and Hladka ́, 2023]. In the educational context, they are used to assess academic performance, certify student qualifications, measure knowledge and skill proficiency, and administer admission tests, as well as national and international large-scale student exams. In psychology, the-
se assessments help measure intelligence, personality traits, and attitudes. In healthrelated fields, they are employed for measuring outcomes such as fatigue, depression, pain, quality of life, and overall well-being. Similar instruments are also further applied in employment selection and promotion processes, peer reviews of academic work, and the evaluation of grant proposals.
While decisions based on such assessments are often guided by total scores, a detailed analysis at the item level provides deeper insight. Item functioning can be described by Item Response Curve (IRC), which expresses the probability of a specific response to an item as a function of an individual’s latent trait and, potentially, additional covariates. Parametric modelling frameworks, such as Item Response Theory (IRT) [van der Linden and Hambleton, 1997, van der Linden, 2018] and score-based reg-
ression models [Martinkov ́a and Hladka ́, 2023], are widely used to estimate IRCs.
However, any parametric approach risks oversimplification when the underlying model omits critical information. In cases where the true model is highly complex or lacks a clear parametric form, nonparametric methods offer a more
arXiv:2511.18963v1 [stat.ME] 24 Nov 2025

Nonparametric Comparison of Item Response Curves A PREPRINT
flexible alternative. Notable examples include the monotone homogeneity model and double-monotonicity model for binary items [Mokken, 1971], as well as the kernel-smoothing approach employing Nadaraya-Watson weights and rank-based ability estimates [Ramsay, 1991].
A crucial aspect of item functioning is that it may vary across different respondent groups. This phenomenon, known as Differential Item Functioning (DIF), occurs when respondents from different groups but with the same underlying trait have different probabilities of giving a certain response to an item. Parametric approaches, such as IRT models and score-based regression methods, can be extended to account for the effect of covariates (e.g., group-membership variable) and applied for DIF detecti-
on [Lord, 1980, Raju, 1988, Swaminathan and Rogers, 1990, Drabinova ́ and Martinkova ́, 2017, Hladka ́ et al., 2023, Hladka ́ et al., 2025]. Yet, to our knowledge, a nonparametric DIF detection directly based on comparing IRCs has not been systematically explored.
To address this gap, we introduce a new kernel-smoothing-based framework for the nonparametric comparison of IRCs across groups. Our method adapts and extends the general approach of Srihera and Stute [2010] to the binary-item setting, developing it specifically for the purpose of detecting DIF. We further propose several methodological variants designed to accommodate different DIF types, and we demonstrate their performance in a systematic comparison with the widely used logistic regression meth-
od [Swaminathan and Rogers, 1990].
The remainder of this paper is structured as follows. Section 2 details the estimation procedure, the general test statistic, and several weight-function strategies, including optimal weights designed to maximise test power, along with their estimates and asymptotic properties of the resulting test statistic. Section 3 presents a simulation study evaluating the proposed framework in comparison to the traditional parametric approach based on logistic regression. Section 4 illustrates the methodolog-
y using an empirical dataset from a questionnaire about verbal aggression. Section 5 concludes with a discussion of the findings, practical recommendations, and directions for future work.
2 Methodology
DIF and its detection are closely connected to the broader problem of describing the relationship between respondents’ responses Yi = (Y1i, . . . , Yni) to item i and their abilities θ = (θ1, . . . , θn), where n is a number of respondents. This relationship can generally be expressed through a regression function mi for item i:
Yi = mi(θ) + εi, E(εi|θ) = 0
This work focuses on binary outcomes Yi, in which case this relationship can be reformulated as
E(Yi|θ) = P(Yi = 1|θ) = mi(θ).
We estimate IRCs, i.e., the function mi(·), using the nearest-neighbor kernel-smoothing approach of Srihera and Stute [2010] across two groups: reference (g = 0) and focal (g = 1). Let Pg denote the set of respondents in group g of size ng, such that n0 + n1 = n is the total sample size. For a given item i, let Ypi be the binary response of respondent
p and θp their ability (e.g., standardised total test score or other matching criterion). Define Fˆig(x) as the empirical distribution function of θp in group g:
Fˆg(x) = 1
ng
X
p∈Pg
1[θp ≤ x].
The nearest neighbor estimate of the IRC mig for item i for group g is then given by:
ˆmig(x) =
X
p∈Pg
YpiWpig(x), (1)
where the weights Wpig(x) are defined as:
Wpig(x) =
K Fˆg(θp)−Fˆg(x)
h
P
k∈Pg
K Fˆg(θk)−Fˆg(x)
h
. (2)
K(·) is a twice continuously differentiable, symmetric, non-negative kernel function, which is non-decreasing for u < 0 with a compact support and R K(u) du = 1. Examples include the Epanechnikov kernel K(u) = 3
4 (1 − u2), |u| ≤ 1
[Epanechnikov, 1969], and the uniform kernel K(u) = 1
2 , |u| ≤ 1. The bandwidth parameter h satisfies nh3 → ∞
and nh4 → 0 as n → ∞ [see Srihera and Stute, 2010, p. 2042]. Therefore, the parameter h is assumed to take the value of n−ζ , where ζ ∈ 1
4, 1
3 and n has the order of n0 and n1.
2

Nonparametric Comparison of Item Response Curves A PREPRINT
Kernel smoothing is advantageous here because it makes no assumptions about the functional form of mig(x), making it applicable even when IRCs have complex shapes. For an illustration, for IRCs with multiple inflection points (Figure 1a), the nearest neighbor estimate (1) applied to simulated binary data provides a closer match to the true curves (Figure 1b) than the logistic regression approach (Figure 1c).
(a) Underlying IRCs (b) Nearest neighbours (c) Logistic regression
Figure 1: Example of nearest neighbour and logistic regression estimates of IRCs; curves are accompanied by points representing empirical probabilities.
2.1 Test statistic
Differences in ability distributions between groups can make direct curve comparison problematic. Following Srihera and Stute [2010, p. 2040], we define a common support by averaging the values of the matching criterion θp from the two groups:
X ̄p0p1 = θp0 + θp1
2 , p0 ∈ P0, p1 ∈ P1.
The proposed general test statistic for item i is then expressed as follows:
Tbi = 1
n0n1
X
p0 ∈P0
X
p1 ∈P1
Wi X ̄p0p1 ˆmi0 X ̄p0p1 − ˆmi1 X ̄p0p1 , (3)
where Wi(·) is a twice continuously differentiable weight function for item i. Tbi is the weighted average difference
between the two IRCs across the common support. Under the null hypothesis H0: mi0 ≡ mi1, i.e., no DIF, Tbi should be close to zero.
2.1.1 Asymptotic properties
Asymptotic variance. The asymptotic variance of the test statistic (3) under the null hypothesis is given by σ2
i = (1 − λ)ρ2
i0 + λρ2
i1, (4)
where
ρ2
ig =
Z
σig(x)W 2
i (x) e(x)
fg(x) E(dx) < ∞, σig(x) = mig(x)(1 − mig(x)).
Here, f0(x), f1(x), and e(x) are the twice continuously differentiable density functions of the matching criterion for the reference group, focal group, and their averaged values, while E(x) is their cumulative distribution function; and
λ = lim
n0 ,n1 →∞
n0 n0 + n1
∈ (0, 1).
For more details, see Srihera and Stute [2010].
Variance estimation. To estimate asymptotic variance (4), we propose
σˆ2
i= 1
n0 + n1
X
p0 ∈P0
σˆi0(θp0 )
" X
k∈P0
X
l∈P1
Wi X ̄kl Wp0i X ̄kl
#2
+1
n0 + n1
X
p1 ∈P1
σˆi1(θp1 )
" X
k∈P0
X
l∈P1
Wi X ̄kl Wp1i X ̄kl
#2
,
(5)
3

Nonparametric Comparison of Item Response Curves A PREPRINT
which accounts for our binary-item setting, as it replaces squared residuals with estimated conditional variances
σˆig(θpg ) = ˆmig(θpg ) 1 − ˆmig(θpg )
in the original estimator proposed by Srihera and Stute [2010]:
σˆ2
i= 1
n0 + n1
X
p0 ∈P0
(Yp0i − ˆmi0(θp0 ))2
" X
k∈P0
X
l∈P1
Wi X ̄kl Wp0i X ̄kl
#2
+1
n0 + n1
X
p1 ∈P1
(Yp1i − ˆmi1(θp1 ))2
" X
k∈P0
X
l∈P1
Wi X ̄kl Wp1i X ̄kl
#2
.
This approach is more convenient, as it accounts for the binary nature of item responses.
Asymptotic distribution. Under the conditions specified above and assuming the null hypothesis holds, it can be shown that the test statistic (3) normalised by σˆi specified in (5) asymptotically follows a standard normal distribution:
√N Tbi σˆi
N−→D→∞ N (0, 1), N = n0n1
n0 + n1
,
for details see Srihera and Stute [2010, Theorems 1 and 2].
Support size and computation. The original approach evaluates the test statistic (3) over all n0 · n1 averaged pairs, which may significantly slow down data manipulation in statistical software, making the proposed method timeconsuming and memory-intensive, especially for larger sample sizes. To address this issue and improve efficiency, we propose and employ an alternative technique to calculate a common support:
(1) The common support is initially calculated as in the original approach.
(2) The empirical weights of unique values of the averaged points are then computed.
(3) A fixed-sized random sample is generated from the unique values of the common support using these weights.
This reduces computational burden while preserving the representativeness of both matching criterion distributions. When using the reduced support, it is important to note that the original size of the product (i.e., n0 · n1) must be replaced by the size of the newly defined support set.
2.2 Weight function
The choice of the weight function Wi(·) in the test statistic (3) is crucial, as it can significantly influence the statistical power. In this study, we consider three strategies.
2.2.1 Fixed weights
First, we consider uniform weighting:
Wi(x) = 1 ∀x. (6)
This non-informative option is useful when no prior information about the nature of DIF is available.
2.2.2 Optimal weights
Second, we adapt an optimal weight function, derived in Srihera and Stute [2010, Theorem 2], to the case of binary data and for the comparison of the IRCs. This weight function is intended to maximise the local asymptotic power of the test.
Under the local alternative hypothesis mi0 = mi1 + csi
N , c ̸= 0, where si is a difference function, the normalised test
statistic (3) converges to the normal distribution:
√N Tbi σˆi
N−→D→∞ N μi
σi
,1 ,
4

Nonparametric Comparison of Item Response Curves A PREPRINT
where μi = − R Wi(x) (mi0(x) − mi1(x)) E(dx) and σ2
i is given in (4). The asymptotic power is then given by
P
√N Tbi σˆi
≥ q1− α
2
!
≃ 1 − φ μi
σi
+ q1− α
2 + φ μi
σi
− q1− α
2 , (7)
which is an increasing function of μi
σi . Thus, the weight function that maximises the asymptotic power (7) is the one
that maximises the term μi
σi . This is equivalent to maximising the term:
μ2
i
σ2
i
=
R Wi(x)si(x)E(dx) 2
R
h
(1 − λ)σi0(x) e(x)
f0(x) + λσi1(x) e(x)
f1 (x)
i
W2
i (x)E(dx)
,
which yields
Wi(x) = si(x)
(1 − λ)σi0(x) e(x)
f0(x) + λσi1(x) e(x)
f1 (x)
.
Differences between the IRCs cannot generally be captured by a generic function, such as a polynomial. Therefore, in the context of this paper and its simulation study, we assume si(x) = mi0(x) − mi1(x), representing the true difference between the two IRCs. Under this definition, the optimal weight function is given by
Wi(x) = mi0(x) − mi1(x)
(1 − λ)σi0(x) e(x)
f0(x) + λσi1(x) e(x)
f1 (x)
. (8)
Figure 2 presents examples of IRCs showing DIF caused by different parameters, along with the corresponding optimal weights. Note that these weight functions can take negative values, enabling the detection of crossing non-uniform DIF, where IRCs intersect. Although the exact weights in (8) cannot be directly used in practice, since the true curve differences are unknown, they can serve as a valuable performance benchmark.
Figure 2: Examples of IRCs and corresponding optimal weight functions (8) for DIF caused by various parameters a, b, c, and d in 4 Parameter Logistic (PL) IRT model, and for logistic curves with several inflection points using normally distributed latent trait for both groups.
2.2.3 Estimates of optimal weights
Third, to make (8) effective in practice, we extend the approach outlined in Section 2.2.2 by replacing the unknown quantities with their estimates. This yields a natural estimate of the optimal weights,
Wci(x) = ˆmi0(x) − ˆmi1(x)
(1 − λˆ)σˆi0(x) eˆ(x)
fˆ0(x) + λˆσˆi1(x) eˆ(x)
fˆ1 (x)
. (9)
5

Nonparametric Comparison of Item Response Curves A PREPRINT
Substituting Wci(x) into (3), the resulting test statistic for item i is given by:
Tbi = 1
n0n1
X
p0 ∈P0
X
p1 ∈P1
ˆmi0 X ̄p0p1 − ˆmi1 X ̄p0p1
2
(1 − λˆ)σˆi0(X ̄p0p1 ) eˆ(X ̄p0p1 )
fˆ0(X ̄p0p1 ) + λˆσˆi1(X ̄p0p1 ) eˆ(X ̄p0p1 )
fˆ1(X ̄p0p1 )
. (10)
The test statistic (10) includes the squared difference ( ˆmi0(x) − ˆmi1(x))2 in the numerator. In contrast to the test statistic in (3), which reflects the weighted average of raw differences, this version represents the average squared discrepancy between IRCs. It is specifically designed to maximise sensitivity to complex DIF patterns, including cases where the curves intersect.
Assessing significance. Because substituting estimated weights invalidates the original asymptotic normality, we assess significance using a wild bootstrap [Wu, 1986, Mammen, 1993]. This method is particularly suitable when the data exhibits heteroskedasticity [e.g., Hardle and Mammen, 1993], which aligns with the binary nature of the responses discussed in this work. This resampling scheme proceeds as follows:
(1) Initial Step: Estimates of the IRCs are computed using (1). Then, the optimal weights are estimated with (9), and the DIF detection procedure is applied using the test statistic (10).
(2) Bootstrap Sampling: Under the null hypothesis (i.e., no DIF), a common IRC for both groups is estimated,
and the corresponding fitted values {yˆpi}n
p=1 are computed.
(2a) For each bootstrap run b ∈ {1, . . . , B}, where B is the number of bootstrap samples, a bootstrap sample y∗
pib is generated directly from Bernoulli distribution using fitted values yˆpi, meaning:
y∗
pib ∼ Bernoulli(yˆpi),
to account for the binary nature of the data. (2b) For each bootstrap sample, the DIF detection procedure is applied as in the original sample in the initial
step, resulting in a set of the test statistics
n
Tbib
oB
b=1
.
(3) Final Step: The set of the test statistics
n
Tbib
oB
b=1
is compared to the test statistic of the original sample. A
conclusion on DIF is made based on a two-sided p-value:
p-value = 1
B
B
X
b=1
1[Tbi < Tbib],
and the predefined level of significance.
3 Simulation study
We conducted a Monte Carlo simulation study to evaluate the statistical properties of the proposed nonparametric DIF detection method (3) under various conditions and to compare its performance with that of the well-established logistic regression approach [Swaminathan and Rogers, 1990]. Specifically, we examined type I error control, statistical power, and accuracy of estimated optimal weights.
3.1 Simulation design
In this part, we describe the design of the simulation study, including the data generation process, the DIF detection procedures and their implementation, as well as the evaluation of the results.
3.1.1 Data and DIF generation
Binary item responses were generated for the reference and focal groups from a logistic regression model extended with higher-order terms to allow for multiple inflexion points. For respondent p and item i, the probability of a correct response was defined as
P(Ypi = 1|θp) = ci + (di − ci) eai(θp−bi−eiθ2
p −fi θ3
p −gi θ5
p)
1 + eai(θp−bi−eiθp2−fiθp3−giθp5) , (11)
6

Nonparametric Comparison of Item Response Curves A PREPRINT
where ai denotes the discrimination, bi the difficulty ci the pseudo-guessing parameter, and di inattention/slip parameter. The additional item parameters (ei, fi, gi) generate more complex IRC shapes with multiple inflexion points. Respondent abilities θp were drawn from a standard normal distribution in both groups.
For non-DIF items, responses were generated using the true 4PL IRT model [Barton and Lord, 1981] (i.e., model 11 with (ei, fi, gi) = (0, 0, 0)). Other item parameters were identical across groups and drawn from normal distributions: Discrimination ai ∼ N (1.1, 0.3), difficulty bi ∼ N (0, 1.1), guessing ci ∼ N (0.2, 0.05), and inattention di ∼ N (0.8, 0.05).
To generate differentially functioning items, we considered six different sources of DIF in total: changes in discrimination ai, difficulty bi, guessing ci, or inattention di, and two mixture conditions. In the first setting, called mix1, parameters were selected such that the IRCs intersect exactly once, while in the second setting, called mix2, they intersected twice.
The magnitude of DIF was calibrated so that the weighted unsigned area measure between the two IRCs [Siebert, 2013] equalled 0.196, corresponding to a large effect size. The IRCs and the corresponding optimal weight functions for DIF items are illustrated in Figure 2, and their parameters are summarised in Table 1. Each simulated test consisted of 20 items, including one DIF item (5% prevalence).
The standardised total test score was used as the matching criterion θp. Although discrete rather than continuous, it reflects common practice in applied DIF analyses.
The total sample sizes of n = 50, 100, 200, 300, and 400 were selected, with both groups being equally sized. Each condition was replicated 1,000 times.
Table 1: Item parameters used to generate DIF items
DIF source
Reference group Focal group
abcde f g a b cde f g
a 0.42 0.00 0.00 1.00 0.00 0.00 0.00 2.00 0.00 0.00 1.00 0.00 0.00 0.00 b 1.00 0.00 0.00 1.00 0.00 0.00 0.00 1.00 1.00 0.00 1.00 0.00 0.00 0.00 c 1.00 0.00 0.00 1.00 0.00 0.00 0.00 1.00 0.00 0.39 1.00 0.00 0.00 0.00 d 1.00 0.00 0.00 0.61 0.00 0.00 0.00 1.00 0.00 0.00 1.00 0.00 0.00 0.00 mix1 1.90 0.28 0.07 1.00 1.00 −0.70 0.00 0.35 −1.75 0.03 0.98 1.60 −0.90 0.00 mix2 4.20 0.00 0.10 0.85 0.00 −0.50 −0.50 0.18 −1.50 0.00 1.00 1.00 −1.20 −0.50
3.1.2 DIF detection
Five approaches for DIF detection were evaluated in the simulation study: Four variations of the proposed nonparametric approach and the logistic regression method for DIF detection with the likelihood ratio test [Swaminathan and Rogers, 1990]. The nonparametric methods differed by the choice of the weight function: the fixed weights (6), the theoretical optimal weights (8), the estimated optimal weigh (9) without bootstrap calibration (i.e., assuming asymptotically normal distribution of the test-
 statistic (3)), and the estimate of optimal weights using wild bootstrap. The optimal weight function was applied only to DIF items, with values set to zero for non-DIF items, which necessarily yielded rejection rates of zero in the latter case. For the bootstrap-based method, the number of samples was set to B = 500.
For kernel estimation of IRCs, the Epanechnikov kernel was used with three different bandwidth parameters h = n−ζ
0,
where ζ took values 0.260, 7
24 (≈ 0.292), and 0.320, satisfying the regularity conditions. All tests are performed at a
significance level of 0.05.
3.1.3 Evaluation of the results
The five different DIF detection techniques (four variations of the nonparametric approach and the logistic regression method) were compared on two key performance metrics: power and rejection rate. Power is defined as the proportion of true positives (i.e., correctly detected DIF items), while rejection rate refers to the proportion of false positives (i.e., non-DIF items incorrectly identified as DIF).
Additionally, the accuracy of the estimate of the optimal weights was assessed by computing the Root Mean Squared Error (RMSE), which quantifies the root of the mean squared difference between the optimal weights (8) and their estimates.
7

Nonparametric Comparison of Item Response Curves A PREPRINT
3.1.4 Implementation
All analyses were conducted in the statistical software R [R Core Team, 2022], version 4.3.2, and its associated packages. Empirical density functions were computed with the ecdf() function from the stats package [R Core Team, 2022]. Weights of kernel functions and kernel estimates were calculated by the locCteWeightsC() and locWeightsEval() functions from the locpol package [Ojeda Cabrera, 2022]. Estimates of densities of standardised total scores and the common support of the test statistic were-
 evaluated with the bkde() function from the KernSmooth package [Wand, 2021]. The logistic regression method with the likelihood ratio test was performed using the glm() function from the stats package. Finally, graphical representations of the results were created using the ggplot2 package [Wickham, 2016].
3.2 Simulation results
3.2.1 Rejection rates and power
The estimates of the optimal weights (1) without the wild bootstrap were the most powerful approach across all scenarios, with a mean power rate of 0.724. However, this gain in sensitivity came at the cost of a substantially inflated Type I error, with an average rejection rate of 0.272, exceeding the nominal significance level of 0.05. Consequently, this variant was considered unreliable and was excluded from subsequent analyses; its results are therefore not reported here.
All remaining approaches maintained appropriate control of the significance level across all bandwidth parameters ζ, DIF sources, and sample sizes, with rejection rates ranging from 0.050 to 0.069. No significant differences were observed in rejection rates among the DIF detection methods, regardless of DIF sources. A slight increase in rejection rates was noted for both the logistic regression method and the nonparametric approach with fixed weights at the smallest sample size (n = 50; Figure 3, -
Table A1).
All DIF detection methods exhibited lower power at smaller sample sizes, as expected. With increasing sample size, power improved for all methods, and differences between approaches became less pronounced (Figure 4, Table A2). The nonparametric approaches, using either optimal or fixed weights, outperformed the logistic regression method in scenarios where shifts in parameters b and c were sources of DIF, as well as in the mix1 scenario, across nearly all sample sizes. This was also the case for s-
mall samples (n ≤ 100) when DIF was caused by parameter d. Furthermore, in the mix2 scenario, the nonparametric approach using optimal weights achieved higher power than logistic regression. In contrast, logistic regression gained the highest power when parameter a was the source of DIF. In this case, the nonparametric approach with the fixed weights failed to detect DIF effectively and achieved only limited power, also in the mix2 scenario. Under such circumstances, the nonparametric method with -
estimated optimal weights and wild bootstrap provided a marked improvement, consistently yielding higher power across all sample sizes.
Generally, the differences between the nonparametric approaches using different bandwidth parameters h were small. When the value of ζ was lower, meaning the bandwidth parameter h = n−ζ
0 was larger, the optimal weights and their estimates using the wild bootstrap yielded slightly higher mean power.
3.2.2 Estimates of optimal weights
In nine scenarios where the parameter c was the source of DIF and ζ = 0.292, the estimates of the optimal weights exceeded 106, indicating numerical instability or divergence. As a result, these scenarios were excluded from further analysis to ensure the reliability of findings and are not reported here.
Estimation of the optimal weight was the most precise when the parameters b, c, and d were sources of DIF. In contrast, it was the most biased when the mix2 scenario was considered (Figure 5, Table A3; see also rows 2, 3, 4, and 6 in Figure A1). The smallest overall RMSE of 0.242 was achieved for ζ = 0.320 (the smallest bandwidth parameter h), while the largest overall RMSE of 0.270 occurred for ζ = 0.260 (the largest h).
All three choices of the ζ parameter resulted in more accurate estimates for larger sample sizes compared to smaller ones. While there were no significant differences between bandwidth parameters when the parameters b, c, or d were sources of DIF, this was not the case when the IRCs intersected. In such scenarios, ζ = 0.320 (the smallest bandwidth parameter) produced the most accurate estimates, whereas ζ = 0.260 (the largest bandwidth parameter) consistently resulted in the highest RMSE across al-
l sample sizes. Furthermore, the precision of the estimates did not always increase (i.e., decrease of RMSE) with increasing sample size when the discrimination parameter a was a source of DIF or when the mix1 setting was considered for the underlying IRCs (Figure 5, Table A3; see also rows 1 and 5 in Figure A1).
8

Nonparametric Comparison of Item Response Curves A PREPRINT
Figure 3: Rejection rates by the nonparametric approach with various weight functions and by the logistic regression method with respect to the sample size and the parameter ζ for different sources of DIF; the horizontal line shows a significance level of 0.05.
4 Real data example
To illustrate the practical application of our methodology, we analyse data from a questionnaire on verbal aggression.
4.1 Data description
The Verbal Aggression dataset (Vansteelandt, 2001; available in Magis et al., 2010) contains responses of 316 participants (243 females and 73 males) to a 24-item questionnaire measuring tendencies toward verbal aggression. Each item describes a frustrating situation paired with a potential verbal aggression reaction. Specifically, four frustration situations were considered: (S1) A bus fails to stop for me; (S2) I miss a train because a clerk gave me faulty information; (S3) The grocery store clo-
ses just as I am about to enter; (S4) The operator disconnects me when I had used up my last 10 cents for a call. For each situation, respondents indicated whether they wanted to or actually did react with one of three possible aggressive behaviours: cursing, scolding, or shouting. For instance, item S1WantShout corresponds to the statement ”A bus fails to stop for me. I want to shout”. Items are binary-coded. A response of 1 denotes agreement with the statement, and 0 indicates disagreement.
4.2 Statistical analysis
Three approaches for DIF detection were evaluated in the real data example analysis: Two variations of the proposed nonparametric approach and the logistic regression method for DIF detection with the likelihood ratio test [Swaminathan and Rogers, 1990]. The nonparametric methods differed in the choice of the weight function: the fixed weights (6) and the estimated optimal weights (1) using the bootstrap. For kernel estimation of IRCs, the Epanech
9

Nonparametric Comparison of Item Response Curves A PREPRINT
Figure 4: Power rates by nonparametric approach with various weight functions and by the logistic regression method with respect to the sample size and the parameter ζ for different sources of DIF; the horizontal line shows sufficient power of 0.80.
nikov kernel was used with three different bandwidth parameters h = n−ζ
0 , where ζ took values 0.260, 7
24 (≈ 0.292),
and 0.320. DIF was analysed with respect to the respondent gender. A standardised total score was used as the measure of observed matching ability. All tests are performed at a significance level of 0.05.
4.3 Results
In the Verbal Aggression dataset, eleven items were flagged as exhibiting DIF by at least one of the detection methods (Table 2). Three items (S2WantShout, S2DoCurse, and S2DoScold) were consistently identified across all approaches. By contrast, the item S1WantScold was detected solely by the nonparametric method with estimated optimal weights using bootstrap.
Across the nonparametric variants, the fixed-weight method and the estimated optimal weights with bandwidth ζ = 0.32 identified the largest number of DIF items (seven each). The versions with ζ = 0.292 and ζ = 0.26 followed, flagging six and five items, respectively. Logistic regression identified the fewest DIF items, with only four flagged.
Alignment between methods varied. The highest agreement was observed within the fixed-weight variants (tetrachoric correlations between 0.90 and 0.99) and within the estimated optimal weights using bootstrap (0.89–0.97). Agreement between these two nonparametric families was lower, with correlations ranging from 0.33 to 0.66. Logistic regression showed moderate alignment with nonparametric approaches, correlating 0.86–0.87 with the fixed-weight methods and 0.71–0.84 with the estimated optimal weig-
ht using bootstrap.
Across all items, the nonparametric approach with the bandwidth parameter ζ = 0.32 produced the most accurate estimates of the IRCs, with the exception of S2DoScold, S3DoShout, and S4DoShout, where the logistic regression
10

Nonparametric Comparison of Item Response Curves A PREPRINT
Figure 5: RMSE of the estimates of optimal weights with respect to the parameter ζ, source of DIF, and sample size.
Table 2: Test statistics and p-values for DIF items from the Verbal Aggression dataset.
Item
Nonparametric Logistic
Fixed Bootstrap
ζ = 0.260 ζ = 0.292 ζ = 0.320 ζ = 0.260 ζ = 0.292 ζ = 0.320
T -value p-value T -value p-value T -value p-value T -value p-value T -value p-value T -value p-value χ2-value p-value
S1WantScold 1.369 0.171 1.313 0.189 1.280 0.201 2.135 0.144 2.491 0.060 2.936 0.030* 3.354 0.187 S2WantCurse 1.667 0.096 1.694 0.090 1.737 0.082 1.649 0.000* 1.602 0.000* 1.780 0.000* 4.730 0.094 S2WantScold 1.914 0.056 2.114 0.034* 1.969 0.049* 2.471 0.072 2.558 0.090 2.740 0.070 4.140 0.126 S2WantShout 3.204 0.001* 3.358 0.001* 3.369 0.001* 3.564 0.002* 3.355 0.004* 3.526 0.000* 11.411 0.003* S4WantShout 2.098 0.036* 2.327 0.020* 2.216 0.027* 2.503 0.058 2.490 0.082 2.580 0.106 3.688 0.158 S1DoS-
cold −2.128 0.033* −1.949 0.051 −1.848 0.065 2.172 0.136 2.078 0.000* 2.110 0.000* 4.730 0.094 S2DoCurse −2.964 0.003* −2.946 0.003* −2.966 0.003* 3.064 0.026* 3.066 0.034* 3.514 0.024* 7.693 0.021* S2DoScold −3.050 0.002* −2.871 0.004* −2.742 0.006* 3.045 0.012* 3.012 0.014* 3.073 0.024* 10.262 0.006* S2DoShout −0.493 0.622 −0.130 0.897 −0.070 0.944 2.788 0.030* 2.844 0.024* 2.905 0.028* 1.702 0.427 S3DoCurse −2.686 0.007* −2.573 0.010* −2.667 0.008* 2.596 0.068 2.618 0.076 2.650 0.074 7.238 0.02-
7* S3DoScold −2.112 0.035* −2.134 0.033* −2.141 0.032* 2.153 0.100 2.118 0.188 2.242 0.158 5.868 0.053
model achieved slightly lower squared bias. Conversely, logistic regression yielded the least precise estimates for 14 of the 24 items, while the nonparametric method with ζ = 0.26 showed the lowest precision for the remaining 10 items.
To illustrate how the proposed method performs in practice, the item S2WantCurse provides a representative example. It was estimated most precisely by the nonparametric approach with the bandwidth ζ = 0.32 and was also identified as exhibiting DIF by this method (Figure 6a). In contrast, logistic regression produced a visibly poorer fit for the same item and did not classify it as DIF (Figure 6b). This example demonstrates the ability of the nonparametric framework to reveal subtle group differenc-
es that may be undetected under parametric modelling.
11

Nonparametric Comparison of Item Response Curves A PREPRINT
(a) Nonparametric approach with ζ = 0.32 (b) Logistic regression
Figure 6: IRCs of the S2WantCurse item by the nonparametric approach with ζ = 0.32 and logistic regression.
5 Discussion
In this work, we proposed a novel nonparametric approach for comparing IRCs to detect DIF in binary items. Building on the general framework for comparing regression curves introduced by Srihera and Stute [2010], we adapted their methodology to address a common challenge in psychometrics and social sciences: testing differences between IRCs. Our main methodological contributions include (1) a new estimator of the asymptotic variance of the test statistic tailored to account for the binary nature o-
f the data, (2) a derivation of optimal weight functions that maximize the local power of the test, and a procedure for estimating these weights in a realistic setting where they are unknown, and (3) a wild bootstrap procedure to approximate the unknown asymptotic distribution of the test statistic when using estimate of optimal weight, enabling robust hypothesis testing. These innovations extend existing approaches by providing a flexible, practical, and theoretically grounded framework for DIF d-
etection that directly estimates IRCs, allowing nuanced detection of group differences that may be missed by parametric methods.
To evaluate the performance of the proposed approach, we conducted a Monte Carlo simulation study comparing it using various weighting schemes to the logistic regression method. All methods demonstrated good control of Type I error. The nonparametric approach using the optimal weights achieved power rates close to those of the logistic regression method, and it outperformed it in several scenarios, especially in scenarios with multiple intersections of the underlying IRCs. When comparing different-
 weight functions within the nonparametric approach, the fixed weights performed similarly to the optimal weights in cases where the IRCs did not intersect, and may be recommended when it can be assumed that one group is advantaged over the other group for all levels of the matching criterion. However, when IRCs intersected, the estimate of the optimal weights using the wild bootstrap technique substantially improved performance over fixed weights.
To illustrate the proposed DIF detection method, we analysed a real-life dataset on verbal aggression. Across methods, eleven items were flagged for DIF, with three items consistently detected by all approaches. The nonparametric methods, especially those with fixed weights and estimated optimal weights with bandwidth ζ = 0.32, identified the most DIF items, while logistic regression flagged the fewest. Agreement among nonparametric variants was high, but alignment between nonparametric methods an-
d the logistic regression method was moderate. Importantly, the nonparametric method with ζ = 0.32 generally produced the most accurate IRC estimates and successfully detected subtle DIF undetected by logistic regression. This demonstrates the potential of the proposed nonparametric framework to uncover nuanced group differences that parametric models may overlook.
Our approach complements existing nonparametric approaches, such as the Mantel-Haenszel test [Mantel and Haenszel, 1959, Holland and Thayer, 1988], the SIBTEST method [Shealy and Stout, 1993], or standardisation [Dorans and Kulick, 1986], which do not directly model IRCs. In contrast, the newly proposed method explicitly estimates and compares IRCs, allowing for flexible, data-driven weighting that enhances sensitivity to complex DIF patterns, including intersections and nonuniform differences bet-
ween groups. It also complements kernel smoothing DIF detection methods, such as a kernel-smoothed SIBTEST [Douglas et al., 1996] or TestGraf, a graphical DIF method with a kernel smoothing for estimating the conditional probability of correct answers related to proficiency estimates [Bolt and Gierl, 2006, Ramsay, 2000]. Unlike these approaches, our method is grounded in a direct comparison of IRCs within a unified nonparametric framework, offering both interpretability and methodological flexibil-
ity.
In past decades, many authors have dealt with the topic of nonparametric comparison of regression curves, including Dette and Neumeyer [2001], Hall and Hart [1990], Neumeyer and Dette [2003] and Scheike [2000]. Our work builds
12

Nonparametric Comparison of Item Response Curves A PREPRINT
on the general approach of Srihera and Stute [2010], which accommodates a random design and therefore allows for direct extension addressing challenges specific to DIF detection in real-life settings of binary items.
The current study has several limitations, as well as potential directions for future research. First, the simulation study was limited in terms of the number of items, the proportion of DIF items, and sample sizes, as only small to moderate sample sizes were considered to ensure computational feasibility. This limitation precluded the inclusion of extended logistic regression models such as 3PL or 4PL models [Barton and Lord, 1981, Birnbaum, 1968, Hladka ́ et al., 2025] in the simulation study, a-
s they require larger sample sizes for both groups. Second, this study focused exclusively on the Epanechnikov kernel. While alternative kernel functions could be considered, previous research suggests that the accuracy of estimation is generally robust to the choice [Douglas et al., 1996]. Nonetheless, future studies could investigate whether alternative kernels offer practical advantages for detecting DIF in various settings. Third, three levels of the bandwidth parameter h were examined. The ch-
oice of bandwidth is directly related to the precision of estimating optimal weight functions: If the h is too small, the resulting estimate may be under-smoothed, leading to high variance. Conversely, a large h may result in over-smoothing, which can obscure important features of the data. The bandwidth values chosen for this study were intended to cover a plausible range, while no large differences in power or rejection rates were observed. Fourth, the kernel-smoothing estimate of IRCs does not -
require monotonicity of item responses, which is a typical assumption in logistic regression or IRT models. Parametric models typically assume that the probability of a correct response increases monotonically with the latent trait. This assumption simplifies estimation and interpretation but may not always hold in practice, particularly when items are affected by multidimensional traits, guessing effects, or complex DIF patterns. However, the monotonicity assumption ensures the interpretability a-
nd scalability of test scores [see, e.g., Mokken, 1971], required, for example, in nonparametric IRT models [Douglas, 2001, He, 2024].
In summary, the proposed nonparametric approaches, including a novel estimate of the optimal weights with the wild bootstrap, demonstrated control of significance levels and, in most cases, matched or exceeded the performance of the logistic regression method in detecting DIF. Importantly, the flexibility of the nonparametric framework allows it to capture complex patterns in IRCs, particularly in scenarios involving multiple intersections or non-monotonic structures, where traditional parametric -
methods may falter. These results highlight the substantial potential of our approach as a powerful and universal tool for DIF detection, expanding methodological options for applied psychometrics and advancing the analysis of item functioning in real-world testing contexts.
References
M. A. Barton and F. M. Lord. An upper asymptote for the three-parameter logistic item-response model. ETS Research Report Series, 1981(1):i–8, 1981. doi: 10.1002/j.2333-8504.1981.tb01255.x.
A. Birnbaum. Some latent trait models and their use in inferring an examinee’s ability. In F. M. Lord and M. R. Novick, editors, Statistical theories of mental test scores, pages 397–479. Addison-Wesley, Reading, MA, 1968.
D. M. Bolt and M. J. Gierl. Testing features of graphical DIF: Application of a regression correction to three nonparametric statistical tests. Journal of Educational Measurement, 43(4):313–333, 2006. doi: 10.1111/j.1745-3984. 2006.00019.x.
R. L. Brennan, editor. Educational Measurement. Praeger Publishers, Westport, CT, fourth edition, 2006.
H. Dette and N. Neumeyer. Nonparametric analysis of covariance. The Annals of Statistics, 29(5):1361–1400, 2001. doi: 10.1214/aos/1013203458.
N. J. Dorans and E. Kulick. Demonstrating the utility of the standardization approach to assessing unexpected differential item performance on the Scholastic Aptitude Test. Journal of Educational Measurement, 23(4):355–368, 1986. doi: 10.1111/j.1745-3984.1986.tb00255.x.
J. A. Douglas. Asymptotic identifiability of nonparametric item response models. Psychometrika, 66(4):531–540, 2001. doi: 10.1007/BF02296194.
J. A. Douglas, W. Stout, and L. V. DiBello. A kernel-smoothed version of SIBTEST with applications to local DIF inference and function estimation. Journal of Educational and Behavioral Statistics, 21(4):333–363, 1996. doi: 10.3102/10769986021004333.
A. Drabinova ́ and P. Martinkova ́. Detection of differential item functioning with nonlinear regression: A non-IRT approach accounting for guessing. Journal of Educational Measurement, 54(4):498–517, 2017. doi: 10.1111/jedm. 12158.
V. A. Epanechnikov. Non-parametric estimation of a multivariate probability density. Theory of Probability & Its Applications, 14(1):153–158, 1969. doi: 10.1137/1114019.
13

Nonparametric Comparison of Item Response Curves A PREPRINT
T. M. Haladyna and S. M. Downing. Handbook of Test Development. Routledge, Milton Park, Abingdon, Oxon, 2011. doi: 10.4324/9780203874776.
P. Hall and J. D. Hart. Bootstrap test for difference between means in nonparametric regression. Journal of the American Statistical Association, 85(412):1039–1049, 1990. doi: 10.1080/01621459.1990.10474974.
W. Hardle and E. Mammen. Comparing nonparametric versus parametric regression fits. The Annals of Statistics, 21 (4):1926–1947, 1993. doi: 10.1214/aos/1176349403.
Y. He. Extended asymptotic identifiability of nonparametric item response models. Psychometrika, 89(3):958–973, 2024. doi: 10.1007/s11336-024-09972-7.
A. Hladka ́, P. Martinkova ́, and D. Magis. Combining item purification and multiple comparison adjustment methods in detection of differential item functioning. Multivariate Behavioral Research, 59(1):46–61, 2023. doi: 10.1080/ 00273171.2023.2205393.
A. Hladka ́, P. Martinkova ́, and M. Brabec. New iterative algorithms for estimation of item functioning. Journal of Educational and Behavioral Statistics, 2025. doi: 10.3102/10769986241312354. Online first.
P. W. Holland and D. T. Thayer. Differential item performance and the Mantel-Haenszel procedure. In H. Wainer and H. I. Braun, editors, Test Validity, chapter 9, pages 129–145. Lawrence Erlbaum Associates, Inc., Hillsdale, New Jersey, 1988.
F. M. Lord. Applications of item response theory to practical testing problems. Routledge, New York, NY, first edition, 1980.
D. Magis, S. Beland, F. Tuerlinckx, and P. De Boeck. A general framework and an R package for the detection of dichotomous differential item functioning. Behavior Research Methods, 42(3):847–862, 2010. doi: 10.3758/brm. 42.3.847.
E. Mammen. Bootstrap and wild bootstrap for high dimensional linear models. The Annals of Statistics, pages 255285, 1993. doi: 10.1214/aos/1176349025.
N. Mantel and W. Haenszel. Statistical aspects of the analysis of data from retrospective studies. Journal of the National Cancer Institute, 22(4):719–748, 1959. doi: 10.1093/jnci/22.4.719.
P. Martinkova ́ and A. Hladka ́. Computational aspects of psychometric methods: With R. Chapman and Hall/CRC, 2023. doi: 10.1201/9781003054313.
R. J. Mokken. A theory and procedure of scale analysis: With applications in political research. Methods and Models in the Social Sciences. Walter de Gruyter, 1971.
N. Neumeyer and H. Dette. Nonparametric comparison of regression curves: An empirical process approach. The Annals of Statistics, 31(3):880–920, 2003. doi: 10.1214/aos/1056562466.
J. L. Ojeda Cabrera. locpol: Kernel Local Polynomial Regression, 2022. URL https://CRAN.R-project.org/ package=locpol. R package version 0.8.0.
R Core Team. R: A Language and Environment for Statistical Computing. R Foundation for Statistical Computing, Vienna, Austria, 2022. URL https://www.R-project.org/. version 4.3.2.
N. S. Raju. The area between two item characteristic curves. Psychometrika, 53(4):495–502, 1988. ISSN 0033-3123. doi: 10.1007/BF02294403.
J. O. Ramsay. Kernel smoothing approaches to nonparametric item characteristic curve estimation. Psychometrika, 56(4):611–630, 1991. doi: 10.1007/BF02294494.
J. O. Ramsay. TestGraf: A program for the graphical analysis of multiple choice test and questionnaire data, 2000.
T. H. Scheike. Comparison of non-parametric regression functions through their cumulatives. Statistics & Probability Letters, 46(1):21–32, 2000. doi: 10.1016/S0167-7152(99)00083-8.
R. Shealy and W. Stout. A model-based standardization approach that separates true bias/DIF from group ability differences and detects test bias/DTF as well as item bias/DIF. Psychometrika, 58(2):159–194, 1993. doi: 10.1007/ BF02294572.
C. F. Siebert. Differential item functioning identification strategy for items with dichotomous responses using the item information curve: A weighted area method (WAM). PhD thesis, The Florida State University, 2013.
R. Srihera and W. Stute. Nonparametric comparison of regression functions. Journal of Multivariate Analysis, 101 (9):2039–2059, 2010. doi: 10.1016/j.jmva.2010.05.001.
H. Swaminathan and H. J. Rogers. Detecting differential item functioning using logistic regression procedures. Journal of Educational Measurement, 27(4):361–370, 1990. doi: 10.1111/j.1745-3984.1990.tb00754.x.
14

Nonparametric Comparison of Item Response Curves A PREPRINT
W. J. van der Linden, editor. Handbook of item response theory: Three volume set. Chapman & Hall/CRC Press, 2018.
W. J. van der Linden and R. Hambleton, editors. Handbook of modern item response theory. Springer New York, NY, 1997. doi: 10.1007/978-1-4757-2691-6.
K. Vansteelandt. Formal models for contextualized personality psychology. PhD thesis, Katholieke Universiteit Leuven, Belgium, 2001.
M. Wand. KernSmooth: Functions for Kernel Smoothing Supporting Wand & Jones (1995), 2021. URL https: //CRAN.R-project.org/package=KernSmooth. R package version 2.23-20.
H. Wickham. ggplot2: Elegant graphics for data analysis. Springer-Verlag New York, second edition, 2016. URL https://ggplot2.tidyverse.org.
C.-F. J. Wu. Jackknife, bootstrap and other resampling methods in regression analysis. The Annals of Statistics, 14(4): 1261–1295, 1986. doi: 10.1214/aos/1176350142.
15

Nonparametric Comparison of Item Response Curves A PREPRINT
Appendices
A Tables
Table A1: Rejection rates by the nonparametric approach with various weight functions and by the logistic regression method with respect to the sample size n and the parameter ζ for different sources of DIF.
DIF
source n
Nonparametric Logistic
Optimal Fixed Bootstrap
0.260 0.292 0.320 0.260 0.292 0.320 0.260 0.292 0.320
a
50 0.000 0.000 0.000 0.063 0.065 0.066 0.052 0.053 0.054 0.069 100 0.000 0.000 0.000 0.055 0.057 0.058 0.051 0.051 0.052 0.057 200 0.000 0.000 0.000 0.056 0.058 0.060 0.055 0.057 0.056 0.054 300 0.000 0.000 0.000 0.051 0.051 0.051 0.053 0.052 0.052 0.050 400 0.000 0.000 0.000 0.052 0.052 0.052 0.060 0.057 0.052 0.052 b
50 0.000 0.000 0.000 0.065 0.066 0.069 0.056 0.059 0.057 0.068 100 0.000 0.000 0.000 0.059 0.060 0.061 0.057 0.056 0.056 0.062 200 0.000 0.000 0.000 0.054 0.056 0.057 0.057 0.056 0.057 0.054 300 0.000 0.000 0.000 0.056 0.057 0.058 0.054 0.056 0.051 0.055 400 0.000 0.000 0.000 0.056 0.056 0.057 0.058 0.057 0.053 0.056 c
50 0.000 0.000 0.000 0.062 0.063 0.066 0.053 0.055 0.056 0.066 100 0.000 0.000 0.000 0.056 0.057 0.059 0.053 0.055 0.054 0.056 200 0.000 0.000 0.000 0.055 0.055 0.057 0.052 0.054 0.053 0.055 300 0.000 0.000 0.000 0.054 0.056 0.059 0.057 0.057 0.055 0.053 400 0.000 0.000 0.000 0.058 0.058 0.060 0.058 0.056 0.054 0.055 d
50 0.000 0.000 0.000 0.067 0.067 0.069 0.055 0.054 0.056 0.069 100 0.000 0.000 0.000 0.056 0.056 0.057 0.054 0.053 0.055 0.055 200 0.000 0.000 0.000 0.054 0.055 0.055 0.055 0.055 0.053 0.053 300 0.000 0.000 0.000 0.057 0.058 0.057 0.056 0.054 0.052 0.053 400 0.000 0.000 0.000 0.056 0.056 0.058 0.059 0.056 0.052 0.056 mix1 50 0.000 0.000 0.000 0.058 0.059 0.060 0.050 0.050 0.051 0.066 100 0.000 0.000 0.000 0.059 0.061 0.061 0.051 0.052 0.052 0.056 200 0.000 0.000 0.000 0.056 0.057 0.058 0.054 0.055-
 0.058 0.053 300 0.000 0.000 0.000 0.055 0.054 0.056 0.054 0.057 0.054 0.052 400 0.000 0.000 0.000 0.056 0.057 0.056 0.055 0.055 0.051 0.054 mix2 50 0.000 0.000 0.000 0.062 0.063 0.067 0.056 0.057 0.057 0.067 100 0.000 0.000 0.000 0.054 0.056 0.057 0.052 0.055 0.054 0.055 200 0.000 0.000 0.000 0.054 0.055 0.055 0.053 0.055 0.055 0.054 300 0.000 0.000 0.000 0.051 0.053 0.052 0.053 0.055 0.051 0.052 400 0.000 0.000 0.000 0.050 0.050 0.051 0.057 0.055 0.052 0.050
16

Nonparametric Comparison of Item Response Curves A PREPRINT
Table A2: Power rates by the nonparametric approach with various weight functions and by the logistic regression method with respect to the sample size and the parameter ζ for different sources of DIF.
DIF
source n
Nonparametric Logistic
Optimal Fixed Bootstrap
0.260 0.292 0.320 0.260 0.292 0.320 0.260 0.292 0.320
a
50 0.168 0.168 0.174 0.059 0.062 0.067 0.093 0.103 0.102 0.195 100 0.271 0.273 0.275 0.059 0.065 0.063 0.190 0.186 0.191 0.312 200 0.503 0.497 0.494 0.071 0.073 0.076 0.378 0.360 0.344 0.582 300 0.647 0.618 0.613 0.081 0.094 0.092 0.522 0.493 0.474 0.733 400 0.754 0.739 0.732 0.092 0.097 0.089 0.654 0.625 0.615 0.865 b
50 0.308 0.305 0.293 0.309 0.317 0.314 0.219 0.210 0.198 0.270 100 0.486 0.485 0.478 0.500 0.510 0.505 0.382 0.357 0.341 0.446 200 0.775 0.769 0.763 0.796 0.801 0.789 0.659 0.631 0.602 0.742 300 0.904 0.893 0.889 0.923 0.922 0.911 0.829 0.809 0.779 0.906 400 0.961 0.961 0.959 0.968 0.968 0.966 0.935 0.925 0.900 0.967 c
50 0.321 0.322 0.319 0.315 0.316 0.322 0.215 0.218 0.203 0.256 100 0.512 0.493 0.493 0.513 0.512 0.506 0.379 0.364 0.347 0.432 200 0.806 0.797 0.795 0.814 0.821 0.798 0.690 0.666 0.644 0.781 300 0.920 0.913 0.916 0.926 0.930 0.927 0.863 0.829 0.808 0.912 400 0.966 0.964 0.961 0.970 0.973 0.970 0.930 0.921 0.888 0.972 d
50 0.306 0.306 0.293 0.299 0.296 0.290 0.230 0.232 0.229 0.289 100 0.465 0.462 0.466 0.455 0.454 0.450 0.371 0.369 0.358 0.463 200 0.760 0.751 0.746 0.752 0.765 0.741 0.660 0.636 0.615 0.766 300 0.866 0.864 0.858 0.873 0.875 0.867 0.793 0.765 0.741 0.898 400 0.957 0.949 0.942 0.959 0.946 0.939 0.918 0.892 0.872 0.970 mix1 50 0.264 0.265 0.262 0.252 0.259 0.256 0.181 0.182 0.173 0.219 100 0.405 0.407 0.413 0.384 0.385 0.387 0.310 0.301 0.298 0.329 200 0.715 0.701 0.700 0.675 0.684 0.682 0.585 0.566-
 0.528 0.637 300 0.856 0.851 0.846 0.831 0.832 0.825 0.763 0.730 0.713 0.806 400 0.931 0.934 0.930 0.911 0.917 0.915 0.862 0.843 0.824 0.900 mix2 50 0.115 0.121 0.130 0.089 0.094 0.090 0.075 0.081 0.081 0.123 100 0.201 0.202 0.194 0.137 0.142 0.142 0.163 0.147 0.150 0.174 200 0.328 0.317 0.310 0.192 0.200 0.197 0.227 0.229 0.219 0.251 300 0.453 0.434 0.427 0.285 0.286 0.290 0.346 0.336 0.319 0.400 400 0.565 0.552 0.548 0.334 0.331 0.326 0.464 0.436 0.401 0.503
B Figures
17

Nonparametric Comparison of Item Response Curves A PREPRINT
Table A3: MSE of the estimates of optimal weights with respect to the parameter ζ, source of DIF, and sample size.
DIF source
n Parameter ζ
0.260 0.292 0.320
a
50 0.312 0.263 0.222 100 0.306 0.266 0.239 200 0.255 0.223 0.203 300 0.261 0.229 0.212 400 0.244 0.216 0.203 b
50 0.026 0.033 0.042 100 0.008 0.009 0.011 200 0.005 0.006 0.005 300 0.005 0.005 0.005 400 0.004 0.004 0.004 c
50 0.082 0.101 0.122 100 0.030 0.036 0.042 200 0.026 0.031 0.035 300 0.017 0.020 0.023 400 0.012 0.013 0.015 d
50 0.060 0.066 0.074 100 0.021 0.022 0.024 200 0.007 0.007 0.008 300 0.006 0.007 0.005 400 0.007 0.006 0.005 mix1 50 0.380 0.350 0.328 100 0.406 0.367 0.346 200 0.368 0.337 0.319 300 0.389 0.363 0.339 400 0.360 0.341 0.322 mix2 50 1.006 0.956 0.915 100 0.928 0.882 0.832 200 0.905 0.865 0.836 300 0.849 0.804 0.779 400 0.822 0.779 0.754
18

Nonparametric Comparison of Item Response Curves A PREPRINT
Figure A1: Estimates of optimal weights with confidence intervals with respect to the parameter ζ, sample size, and source of DIF.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:16.948Z
- **Text Length:** 54063 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
