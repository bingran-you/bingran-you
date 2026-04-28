# PDF Document: Wang et al. - 2025 - Can discrete-time analyses be trusted for stepped wedge trials with continuous recruitment.pdf

**File Path:** Wang et al. - 2025 - Can discrete-time analyses be trusted for stepped wedge trials with continuous recruitment.pdf

**Processed Date:** 2026-02-10T18:16:29.436Z

**File Size:** 1792.15 KB

**Total Pages:** 34

**Extracted Pages:** 34

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3477

**Title:** Can discrete-time analyses be trusted for stepped wedge trials with continuous recruitment?

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Can discrete-time analyses be trusted for stepped wedge trials with continuous recruitment?
Hao Wang1,2, Guangyu Tong1,2,3, Heather Allore1,4, Monica Taljaard5,6, and
Fan Li1,2,3,∗
Abstract
In stepped wedge cluster randomized trials (SW-CRTs), interventions are sequentially rolled out to clusters over multiple periods. It is common practice to analyze SW-CRTs using discrete-time linear mixed models, in which measurements are considered to be taken at discrete time points. However, a recent systematic review found that 95.1% of cross-sectional SW-CRTs recruit individuals continuously over time. Despite the high prevalence of designs with continuous recruitment, there has been limited -
guidance on how to draw model-robust inference when analyzing such SW-CRTs. In this article, we investigate through simulations the implications of using discrete-time linear mixed models in the case of continuous recruitment designs with a continuous outcome. First, in the datagenerating process, we characterize continuous recruitment with a continuous-time exponential decay correlation structure in the presence or absence of a continuous period effect, addressing scenarios both with and without -
a random or exposure-time-dependent intervention effect. Then, we analyze the simulated data under three popular discrete-time working correlation structures: simple exchangeable, nested exchangeable, and discrete-time exponential decay, with a robust sandwich variance estimator. Our results demonstrate that discrete-time analysis often yields minimum bias, and the robust variance estimator with the Mancl and DeRouen correction consistently achieves nominal coverage and type I error rate. One impo-
rtant exception occurs when recruitment patterns vary systematically between control and intervention periods, where discrete-time analysis leads to slightly biased estimates. Finally, we illustrate these findings by reanalyzing a concluded SW-CRT.
Keywords
Cluster Randomized Trials, Continuous-Time Decay, Linear Mixed Models, Model Misspecification, Robust Sandwich Variance, Recruitment Pattern
1Department of Biostatistics, Yale School of Public Health, CT, USA 2Center for Methods in Implementation and Prevention Science, Yale School of Public Health, CT, USA 3Section of Cardiovascular Medicine, Department of Internal Medicine, Yale School of Medicine, New Haven, CT, USA 4Section of Geriatrics Medicine, Department of Internal Medicine, Yale School of Medicine, New Haven, CT, US 5Methodological and Implementation Research Program, The Ottawa Hospital Research Institute, Ottawa, ON, Canada-
 6School of Epidemiology and Public Health, University of Ottawa, Ottawa, ON, Canada
Prepared using sagej.cls [Version: 2017/01/17 v1.20]
arXiv:2511.18731v1 [stat.ME] 24 Nov 2025

2 Journal Title XX(X)
1 Introduction
In stepped wedge cluster randomized trials (SW-CRTs), interventions are sequentially rolled out to clusters (such as hospitals or clinics) over multiple periods. 1 Once a cluster has crossed over to the intervention condition, it remains in the intervention until the end of the trial. Three major types of SW-CRT designs exist depending on whether different or the same individuals are included in each cluster-period: cross-sectional, closed-cohort, or open-cohort designs. 2 Although these designs a-
re often conceptualized and presented in distinct time periods, in practice, recruiting individuals continuously over time is almost always the case. Nevin et al. 3 reviewed 160 SW-CRTs published from January 2016 to March 2022, and found that 76.3% were cross-sectional SW-CRTs. Among these trials, 95.1% implemented continuous-time individual recruitment. Despite this practice, most existing methodological developments for cross-sectional designs are based on regression models with discrete time p-
eriods that rarely reflect the nature of the individual recruitment process. 4,5 Figure 1 depicts two SW-CRTs with either discrete sampling or continuous recruitment of the participants. Under discrete sampling designs, individuals are recruited at fixed time points (typically once per period), whereas continuous recruitment designs allow individuals to enter the trial at arbitrary times within each period. This distinction was first mentioned when Copas et al. 2 identified “continuous recruitment-
 short exposure designs” as designs in which individuals are recruited continuously, exposed only briefly, and assessed just once under either control or intervention condition. Hooper and Copas4 emphasized the need to distinguish continuous recruitment designs from discrete sampling in the design and analysis of SW-CRTs; they have pointed out that understanding continuous recruitment characteristics is essential for identifying contamination risks and informing appropriate design and analysis dec-
isions. A growing body of literature has focused on developing appropriate design methods for SW-CRTs with continuous recruitment. For instance, Grantham et al. 6 found that relying on the conventional discrete-time model in the presence of continuous recruitment often leads to an underestimation of the required sample size. Hooper et al. 7 developed a computational algorithm to identify efficient, incomplete designs of SW-CRTs with continuous recruitment and continuous outcomes. More recently, Ho-
oper et al. 8 proposed optimal designs for three-sequence SW-CRTs with continuous recruitment. Despite these advances with respect to study planning, there has been limited attention to analyzing SW-CRTs with continuous recruitment, nor evidence that discrete-time analysis of such designs delivers credible results. In this article, we tackle this practical question and study whether conventional discrete-time linear mixed model can be trusted when used to analyze SW-CRTs with continuous-time recru-
itment. The essential ingredients of the discrete-time linear mixed model are a period effect to adjust for the secular trend, the intervention effects of interest, and terms to account for sources of heterogeneity, including withincluster correlations. 9 In the presence of continuous-time recruitment, such a linear mixed model can be considered as a misspecified model. In the context of SW-CRTs, several prior studies demonstrated
Corresponding author:
∗Fan Li, Department of Biostatistics, Yale School of Public Health, 135 College Street, New Haven, CT 06510, USA. Email: fan.f.li@yale.edu
Prepared using sagej.cls

3
Figure 1. A comparison of two standard SW-CRTs, each consisting of 3 clusters over 4 periods of equal length, with discrete sampling in Figure 1(a) and continuous recruitment in Figure 1(b). The x-axis indicates the exact recruitment time tijk ∈ (j − 1, j] for the k-th individual from the i-th cluster in the j-th period. Each SW-CRT has 3 sequences with exactly one cluster assigned to each sequence, where the cluster in sequence q ∈ {1, 2, 3} begins receiving the intervention in period j = q + 1. -
The purple cells indicate the treatment condition, and the white cells indicate the control condition. For illustration purposes, each cluster-period cell includes exactly 4 individuals. Figure 1(a) depicts discrete sampling, where exactly 4 individuals are sampled at distinct intervals in every cluster-period. In contrast, Figure 1(b) depicts continuous recruitment, where individuals enter the trial at arbitrary times throughout each period.
that misspecification of the correlation structure under linear mixed models can lead to substantial bias when using model-based variance estimators. 10–12 More recently, Ouyang et al. 13 illustrated through a simulation study that the robust variance estimator (RVE), also referred to as the sandwich variance estimator, can provide nominal coverage for the intervention effect under linear mixed models even when the correlation structure is misspecified (under appropriate small-sample correction). -
Wang et al. 14 showed that the linear mixed model is robust against misspecification of covariate effects, the correlation structure, and the error structure, as long as the intervention effect structure (whether treatment effect varies by calendar and/or exposure time) is correctly specified. However, these studies have all be carried
Prepared using sagej.cls

4 Journal Title XX(X)
out in the context of discrete-time sampling and have not at all considered the setting where the true datagenerating process includes a continuous-time recruitment element. Hence, despite such prior knowledge, the performance of discrete-time linear mixed models in SW-CRTs with continuous recruitment has not been empirically evaluated. Our primary objective is to investigate the implications of using discrete-time linear mixed models to analyze SW-CRTs with continuous recruitment. Three popular f-
orms of discrete-time correlation structures have been widely used in practice: the exchangeable (EXCH), 1 the nested exchangeable (NE), 15,16 and discrete-time exponential decay (DTD) 10,17 correlation structures. Additionally, researchers can include random intervention effects to capture heterogeneity in treatment effects across clusters through a random cluster-by-intervention interaction term. 18 With respect to the intervention effect, different models may be used, depending on whether the i-
ntervention effect is assumed to be instantaneous or varying with exposure time, that is, the time elapsed since the intervention was first introduced to a cluster; 14,19,20 Beyond these elements, continuous recruitment is fundamentally different from discrete sampling: individuals enter trials at arbitrary times throughout periods, creating temporal orderings within cluster-periods. We therefore characterize continuous recruitment in the data-generating process by two additional aspects. First, w-
e use continuous period effects to replace discrete counterparts. Second, we adopt the continuous-time decay (CTD) correlation structure, which assumes that correlations between individual-level outcomes within clusters decay exponentially as the time between recruitments increases. 5,6,8 This decay pattern reflects the real-world scenario where individuals recruited closer in time experience more similar contextual factors. Importantly, because CTD depends on exact recruitment times rather than p-
eriod indices, it accommodates different recruitment patterns. These can be quantified as cluster-period-specific enrollment density, i.e., the distribution of recruitment times in each period for each cluster. Section 2.3.2 provides several empirically motivated recruitment patterns. Although CTD typically represents the true data-generating process for continuous recruitment, implementing it as a working model can be computationally challenging or even infeasible in practice; we return to a disc-
ussion on this topic in Section 5. This practical constraint motivates our central research question: can standard discrete-time linear mixed models with robust variance estimation provide valid inference for SW-CRTs with continuous recruitment? We investigate this question through extensive simulations and further illustrate our findings by reanalyzing a real SW-CRT. The remainder of this article is organized as follows. Section 2 introduces the setting, estimands, different linear mixed model fo-
rmulations, and robust variance estimators. Section 3 presents a simulation study to investigate the performance of discrete-time linear mixed models in SW-CRTs with continuous recruitment under different true data-generating models. Section 4 provides a reanalysis of a completed SW-CRT using discrete-time linear mixed models when individuals are recruited continuously, and Section 5 concludes.
2 Considerations in Linear Mixed Models for Cross-Sectional SW-CRTs
2.1 Set Up and Notation
We consider a standard and complete SW-CRT with I clusters, J equally spaced periods, and Kij individuals per cluster-period. To deliver key ideas, we focus on a cross-sectional design, where different individuals are observed in each cluster over time. All clusters are in the control condition when j = 1 and the treatment condition when j = J. Let Yijk be the observed outcome for the k-th individual
Prepared using sagej.cls

5
(k = 1, . . . , Kij) from the i-th cluster (i = 1, . . . , I) in the j-th period (j = 1, . . . , J), and Zij be the binary treatment indicator which is equal to 1 when the i-th cluster in the j-th period is under intervention and 0 otherwise. There are Q = J − 1 intervention sequences and the number of clusters in the q-th sequence (q = 1, . . . , Q) is Iq with PQ
q=1 Iq = I. If the i-th cluster is in the q-th sequence, where the intervention starts at the (q + 1)-th period, then its treatment indicator vector is Zi = (Zi1, . . . , ZiJ ) with Zij = 0 for 1 ≤ j ≤ q and Zij = 1 for q < j ≤ J. For SW-CRTs with continuous recruitment, we let tijk ∈ (j − 1, j] be the exact recruitment time for the k-th individual from the i-th cluster in the j-th period. Note that under a cross-sectional design, the period j is uniquely determined by the recruitment time itself,-
 so the subscript j is auxiliary; nonetheless, we keep this index to facilitate discussion of recruitment patterns across different cluster-periods in Section 2.3.2. In practice, routinely collected information (such as calendar date or days since trial initiation) can be mapped to tijk. The fractional part of tijk represents the proportion of the period j that has elapsed until enrollment. For example, suppose the k-th individual from the i-th cluster is enrolled on the day 30 of a trial in which-
 the first period (i.e, j = 1) spans the initial 60 days, then ti1k = 0.5. Similar standardization procedures can be used when such recruitment-time information is available.
2.2 Estimands
We first describe a linear mixed model with a generic model representation in Li et al. 9 and then introduce specific model variants under discrete-time versus continuous-time considerations. The essential ingredients for a linear mixed model in SW-CRTs are
Yijk = secular trend + intervention effect + heterogeneity + residual error, (1)
where Yijk is assumed to be continuous. The residual error term is also independent and identically distributed as εijk ∼ N (0, σε2). For period effect and heterogeneity terms, we discuss their different specifications under either discrete sampling or continuous recruitment in Section 2.3. The intervention effect term is the change of the mean outcome in each period from each sequence and includes the parameter of interest. For example, one may be interested in a constant intervention effect δ. A-
lternatively, when the intervention effect varies by the exposure time, one can target the intervention effect curve δ(s), with s = j − q ∈ {1, . . . , J − 1} indicating the duration of exposure. Under this scenario, the estimand of interest is the exposure time-averaged intervention effect:
∆= 1
J −1
J −1
X
s=1
δ(s),
where δ(s) is the point intervention effect at the s-th exposure time. When the intervention effect curve does not change over time, the intervention effect term becomes a constant with δ(s) = δ for s ∈ {1, . . . , J − 1}, which also implies ∆ = δ. Here, ∆ averages over (0, J − 1] following recent conventions, 19–21 although alternative intervals may be of interest depending on the research question.
2.3 Envisioning the Data-Generating Process Under Continuous Recruitment
We characterize possible linear mixed model formulations based on (1) with special considerations in continuous recruitment processes. This will be considered as the data-generating process when evaluating the performance of the conventional discrete-time models.
Prepared using sagej.cls

6 Journal Title XX(X)
2.3.1 Period Effect Because the intervention is confounded with time, modeling the background secular trend is necessary to remove bias in estimating the effect that is attributable solely to the intervention. 1,22 The conventional formulation of the period effect in Hussey and Hughes 1 model under discrete sampling is typically given by
μ + β21(j = 2) + . . . + βJ 1(j = J),
where μ is the grand mean and β = (β2, . . . , βJ ) are the secular trend parameters for all periods (β1 = 0 for identifiability). This saturated specification utilizes a nonparametric representation of the period effect term and is sufficient for trials with a limited number of discrete periods.9 In contrast, the period effect term under continuous recruitment can be defined as 8
μ + T (tijk),
where T (·) is a function that describes the underlying continuous effect of time on expected outcome in terms of recruitment time tijk. Here, we implicitly assume the same functional form of the period effect across all clusters.
2.3.2 Heterogeneity One key implication of the cluster-level randomization is that individual-level outcomes in the same cluster tend to be positively correlated in SW-CRTs. 23 This within-cluster interference is often characterized by the intracluster correlation coefficient (ICC), 24 and must be taken into account during analysis to obtain valid statistical inference. 25 In the linear mixed model framework, the ICC is parameterized through random-effect specifications that assume a correlation s-
tructure on the marginal outcome vector for each cluster. Three widely-used discrete structures are EXCH, NE, and DTD; see Section 3.4 in Li et al. 9 for a review of this topic. Under the EXCH, NE, and DTD structures, the heterogeneity term is αi, αi + γij, and γij, respectively. The EXCH structure specifies αi ∼ N (0, τα2),
which implies a common ICC both within and across periods. 26 The NE structure introduces an additional term γij ∼ N (0, τγ2), which is the random cluster-by-period interaction independent of the random cluster effect αi, and distinguishes a within-period ICC (correlation between measurements from two individuals in the same cluster-period) and a constant between-period ICC (correlation between measurements from two individuals in the same cluster but different periods). 15,16 The DTD structure as-
sumes (γi1, . . . , γiJ )′ ∼ N (0, τγ2M(r0, r)) and M(r0, r) follows a first-order auto-regressive structure
M(r0, r) =

   
1 r0r r0r2 · · · r0rJ−1 r0r 1 r0r · · · r0rJ−2
... ... ... . . . ...
r0rJ−1 r0rJ−2 r0rJ−3 · · · 1

   
which allows the between-period ICC decays exponentially. 10,17 As a side note, the EXCH and NE structures are returned by M(1, 1) and M(r0, 1), respectively. Following Kasza et al., 17 we consider M(1, r) for the DTD structure in this article. The correlation structure under continuous-time recruitment patterns can be significantly more complicated. We primarily simulate various continuous recruitment patterns through the use of a CTD correlation structure. The CTD assumes {γi,minj∈J,k∈Kij (tijk)-
, . . . , γi,maxj∈J,k∈Kij (tijk)}′ ∼
Prepared using sagej.cls

7
N (0, τγ2M f), which is a Ki·-dimensional vector of random effects across all measurement times (ordered
chronologically from earliest to latest) within the i-th cluster. Here, Ki· = PJ
j=1 Kij is the number of
individuals in the i-th cluster across all periods, and f M is a Ki· × Ki· matrix with ones on the diagonal and r|tijk−tij′k′ | on the off-diagonal for j ̸= j′ and k′ ∈ Kij′ following Grantham et al. 6 We quantify the recruitment pattern in terms of cluster-period-specific enrollment density, that is, the distribution of individual enrollment timing in each period for each cluster. Motivated by empirical evidence of continuous recruitment patterns in Section 4, we first consider three basic contin-
uous recruitment patterns:
• Uniform pattern: Individual enrollment times are uniformly distributed during each period, with tijk ∼ Uniform(j − 1, j].
• Normal pattern: Individual enrollment times follow a truncated normal distribution, where tijk ∼ N (0, 1) is rescaled to the range (j − 1, j] using max-min normalization, creating a bell-shaped enrollment curve centered within each period.
• Exponential pattern: Individual enrollment times follow a truncated exponential distribution, where tijk ∼ Exp(1.5) is rescaled to the range (j − 1, j] using max-min normalization, resulting in earlyheavy enrollment during each period.
To capture the heterogeneity in recruitment dynamics observed in real-world trials (see Figure 3), we additionally introduce two mixed recruitment patterns that combine these simple distributions:
• Cluster mixed pattern: Each cluster i is randomly assigned to one of the three distributions (uniform, normal, or exponential) with probability 1/3, and all individuals within that cluster follow the assigned distribution across all periods. This pattern maintains enrollment consistency within clusters while allowing heterogeneity across clusters.
• Cluster-period mixed pattern: Each cluster-period (i, j) independently draws one of the three distributions (uniform, normal, or exponential) with probability 1/3, generating tijk accordingly. This pattern allows maximum heterogeneity in enrollment dynamics both across clusters and within clusters over time.
Figure 2 provides a visual comparison of these two mixed patterns, illustrating the different levels of heterogeneity in enrollment dynamics. We consider an SW-CRT with I = 4 clusters, J = 5 periods, and Kij = 10, 000 individuals per cluster-period, where the large sample size produces stabilized enrollment density surfaces for illustration. In Figure 2(a), the cluster mixed pattern assigns each cluster to one of three enrollment distributions (uniform, normal, or exponential) that remains constan-
t across all periods, resulting in consistent surface shapes within clusters but variation across clusters. In Figure 2(b), the cluster-period mixed pattern allows each cluster-period combination to independently draw from the three distributions, producing heterogeneous surfaces both within and across clusters. The key difference is that the cluster mixed pattern maintains temporal consistency within each cluster, whereas the clusterperiod mixed pattern allows enrollment patterns to change betwee-
n periods for each cluster.
Prepared using sagej.cls

8 Journal Title XX(X)
(a) Cluster Mixed Pattern (b) Cluster-Period Mixed Pattern
Figure 2. An illustration of the cluster and cluster-period mixed patterns in panels (a) and (b), respectively. We consider an SW-CRT with I = 4, J = 5, and Kij = 10, 000, where the large sample size of 10,000 per cluster-period is specifically chosen to generate stabilized curves for illustration. Each colored surface represents the enrollment density for a specific cluster over time, with height indicating the number of individuals enrolled at each continuous time point.
2.3.3 Intervention Effect To account for potential variation across clusters in the magnitude of intervention effect, we also consider an random intervention effect, 18 which can be expressed as vi × Zij. Here, vi ∼ N (0, τv2) is the random intervention effect quantifying the departure from the cluster-specific intervention effect relative to the average δ (or δ(s)). In Table 1, we summarize ICC-related parameters under EXCH, NE, DTD, and CTD structures with or without an random intervention. As a-
 side note, the definitions of the within- and between-period ICCs are different under control and intervention conditions in the presence of an random intervention effect. Therefore, we let ρ0, ρ1 be the within-period ICC under control and intervention, respectively. We further introduce the cluster autocorrelation coefficient (CAC), which is the ratio of between- and within-ICCs and is generally smaller than one because the variance component for the random cluster-by-period interaction is typic-
ally greater than zero. 16 For the DTD structure, the CAC measures the decay rate per period. 17
Although we consider continuous-time recruitment patterns in our data-generating process, we maintain the discrete intervention effect structure. This modeling choice is motivated by two reasons. First, incorporating individual-level exposure time into the intervention effect introduces substantial complexity, particularly when the effect depends on the duration since each individual’s enrollment; in this latter case, there has been little work to date on defining the treatment effect estimands th-
at may be relevant and interpretable. Second, for cluster-level interventions that are typical in SW-CRTs, the provider or cluster exposure time is more relevant than individual exposure time, especially when the intervention targets organizational practices or policies in continuous recruitment short exposure designs. 16 Therefore, we continue to specify the intervention effect based on cluster-level exposure time (periods since intervention adoption) rather than individual-level exposure duratio-
n, depiste continuoustime individual recruitment. This helps us define the target estimands that are essential for our simulation study.
Prepared using sagej.cls

9
2.4 Robust Variance Estimators
For discrete-time linear mixed models, we consider maximum likelihood estimators of the period effect (μ, β), the intervention effect (δ or ∆ depending on the working intervention structure), and the heterogeneity (τα2, (τα2, τγ2), τγ2 or r depending on the working correlation structure) based on the observed data {(Yijk, Zij) : i = 1, . . . , I, j = 1, . . . , J, k = 1, . . . , Kij}. In general, the linear mixed model can be written as
Yi = Diζ + Eiui + εi,
where Yi = (Yi11, . . . , YiJKiJ )′ is the Ki· × 1 vector of outcomes for all individuals across all periods in the i-th cluster, Di (or Ei) is the design matrix of fixed (or random) effects for each cluster, ζ = (μ, β, δ)′ (or ui) is the fixed (or random) effect parameters, and εi = (εi11, . . . , εiJKiJ )′ is the residual error. Here, ui ∼ N (0, Ri) and , where Ri is the working correlation matrix in Section 2.3.2. Furthermore, we define the working covariance structure for the outcome vector Yi-
 as
Wi = V(Yi) = EiRiE′
i + σ2
ε IKi· ,
where IKi· is the Ki· × Ki· identity matrix. Then, the fixed effect parameters are estimated using the weighted least squares estimator:
ζˆ =
I
X
i=1
D′
iW−1
i Di
!−1 I X
i=1
D′
iW−1
i Di.
We can further define its model-based variance estimator of ζˆ as
VNaive(ζˆ) =
I
X
i=1
D′
iW−1
i Di
!−1
.
An alternative variance estimator for ζˆ is the robust variance estimator by Liang and Zeger: 27
VRVE(ζˆ) = PI
i=1 D′
iW−1
i Di
−1 PI
i=1 D′
iW−1
i rir′
iW−1
i Di
PI
i=1 D′
iW−1
i Di
−1
,
where ri = Yi − Diζˆ is the residual vector for the i-th cluster. However, this standard RVE may lead to inflated type I error when the number of clusters is small (e.g., I < 50). 28 To address this potential issue, Ouyang et al. 13 recommended Mancl and DeRouen (MD) 29 with I − 2 degrees of freedom correction (DoF) for SW-CRTs with fewer than 32 clusters. Specifically, we can write
VMD
RVE(ζˆ) = PI
i=1 D′
iW−1
i Di
−1 PI
i=1 D′
iW−1
i Airir′
iA′
iW−1
i Di
PI
i=1 D′
iW−1
i Di
−1
,
where Ai = IKi· − Hi is the adjustment matrix and Hi = Di(PI
i=1 D′
iW−1
i Di)−1D′
iW−1
i is the cluster-leverage matrix. Extensive simulations have demonstrated that coverage percentage of the 95% confidence interval (CI) based on VMD
RVE(δˆ) achieves the nominal 95% with as few as eight clusters,
at the expense of a slight overestimation of standard errors; see Section 3.6 in Ouyang et al. 13 for a comparison of different small-sample correction methods for RVEs when analyzing SW-CRTs, under discrete sampling.
Prepared using sagej.cls

10 Journal Title XX(X)
Table 1. Summary of intracluster correlation coefficients (ICCs) and cluster autocorrelation coefficients (CACs) under under simple exchangeable (EXCH), nested exchangeable (NE), discrete-time exponential decay (DTD), and continuous-time decay (CTD) in the presence of a random intervention (RI) effect. A check mark ( ) indicates the presence of a structure, and a cross mark ( ) indicates its absence.
Correlation Structure Parameters Condition
RI EXCH NE DTD CTD Control Intervention
ICC τ2
α τα2 +τε2
τ2
α+τ 2
υ τα2 +τυ2+τε2
Within-period ICC τ2
α+τ 2
γ τα2 +τγ2+τε2
τ2
α+τ 2
γ +τ 2
υ τα2 +τγ2+τυ2+τε2
Between-period ICC τ2
α
τα2 +τγ2+τε2
τ2
α+τ 2
υ
τα2 +τγ2+τυ2+τε2
CAC τ2
α τα2 +τγ2
τ2
α+τ 2
υ τα2 +τγ2+τυ2
Within-period ICC τ2
γ τγ2 +τε2
τ2
γ +τ 2
υ τγ2 +τυ2 +τε2
Between-period ICC (j ̸= j′) τ2
γ r| j−j′ |
τγ2 +τε2
τ2
γ r| j−j′ |+τ 2
υ τγ2 +τυ2 +τε2
CAC (j ̸= j′) r| j−j′ | τ2
γ r| j−j′ |+τ 2
υ τγ2 +τυ2
Within-period ICC τ2
γ τγ2 +τε2
τ2
γ +τ 2
υ τγ2 +τυ2 +τε2
Between-period ICC (j ̸= j′, k′ ∈ Kij′ ) τ2
γ r| tijk −tij′k′ |
τγ2 +τε2
τ2
γ r| tijk −tij′k′ |+τ 2
υ τγ2 +τυ2 +τε2
CAC (j ̸= j′, k′ ∈ Kij′ ) r| tijk−tij′k′ | τ 2
γ r| tijk −tij′k′ |+τ 2
υ τγ2 +τυ2
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; RI: random intervention; ICC:
intracluster correlation coefficient; CAC: cluster autocorrelation coefficient.
3 Simulation Study
In this section, we conduct a simulation study to evaluate the performance of discrete-time linear mixed model estimators when data are generated under continuous-time recruitment. Section 2.3 provides a framework for conceptualizing the transition from discrete-time to continuous-time recruitment patterns, but adding such structures directly into analytical models is computationally challenging due to the highdimensional correlation structure, even when using Markov Chain Monte Carlo maximum like-
lihood approximation. 30 We therefore generate data using continuous-time recruitment, but analyze these data using discrete-time working models. This reflects the common practice in analyzing cross-sectional SWCRTs, 3 and we thus aim to evaluate the credibility of discrete-time linear mixed models under model misspecification that arises from continuoue-time individual recruitment. The simulation scenarios are summarized in Table 2 for ease of reference.
3.1 Trial Design
We consider a standard, complete, cross-sectional SW-CRT with I clusters, J equally spaced periods, Q = J − 1 intervention sequences, and K individuals in the j-th period from the i-th cluster. Here, we first assume an equal number of individuals per cluster-period and return to a discussion on the topic of
Prepared using sagej.cls

11
Table 2. Specifications of true and working models in the simulation study. For the period effect, “ ” indicates continuous specification and “ ” indicates discrete specification. For the intervention effect, under the “Time Varying” column, “ ” indicates an exposure-time-dependent effect and “ ” indicates a constant effect; under the “RI” column, “ ” indicates the presence of a random intervention (RI) effect and “ ” indicates its absence. For the correlation structure, “ ” indicates that the pre-
sence of a specific structure and “ ” indicates its absence. All true models assume a continuous-time decay (CTD) correlation structure, and working models assume one of three discrete-time structures: simple exchangeable (EXCH), nested exchangeable (NE), or discrete-time exponential decay (DTD).
Scenario
True Model Working Model
Simulation Study
Period Effect Intervention Effect Correlation Structure Period Effect Intervention Effect Correlation Structure
Continuous Time Varying RI CTD Continuous Time Varying RI EXCH NE DTD
1
2I 3
4
5 I, II, III, V, VII 6
7
89
10 11 IV 12
13 14 15
16 17 VI, VII 18
19 20 21
22 23 24
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; RI: random intervention.
unequal cluster-period sizes in Section 3.5.7. A standard SW-CRT assumes a balanced design where I is divisible by Q and sequence q has Iq = I/Q clusters for q ∈ {1, . . . , Q}. The intervention adoption period for clusters from sequence q is in period j = q + 1.
3.2 Data-Generating Process Under Continuous Recruitment
Within the framework of linear mixed models, continuous recruitment can be characterized in two complementary ways. First, when individuals enter the study at continuous time intervals rather than at a set of single discrete time points, it is reasonable to replace the discrete period effect with its continuous counterpart. Second, the correlation structure can be utilized to reflect various recruitment patterns. Unlike DTD, which relies only on discrete period indices, the CTD structure depends o-
n the exact timing of each individual recruitment. In particular, the CTD structure assumes that the correlation between individual-level outcomes within the same cluster continuously decays as the gap between
Prepared using sagej.cls

12 Journal Title XX(X)
their recruitment times increases. Therefore, the true model under the CTD structure can accommodate (potentially different) recruitment time distributions within each cluster-period combination. Motivated by the actual recruitment patterns observed in the Australian disinvestment and reinvestment trials in Figure 3, we consider three recruitment patterns from ideal to more realistic settings: 1) uniform recruitment, where individuals are recruited evenly over time within each cluster-period; 2) c-
luster mixed recruitment, where recruitment patterns vary across clusters but remain consistent within each cluster across periods; and 3) cluster-period mixed recruitment, where recruitment patterns vary both between clusters and within clusters across different periods. All three recruitment patterns are formally defined in Section 2.3.2. In Table 2, we consider 8 specifications of the true data-generating process. Under scenarios 7-9, the true model is most similar to the Hussey and Hughes mode-
l:
Yijk = μ + βj + δZij + γi,tijk + εijk,
which assumes a discrete period effect, a constant intervention effect, and a CTD (instead of an EXCH) correlation structure. Scenarios 10-12 introduce greater complexity by replacing the discrete period effect βj with a continuous period effect T (tijk). Scenarios 1-6 parallel scenarios 7-12, but introduce additional variability through a random constant intervention effect, replacing δZij with (δ + vi)Zij. Lastly, scenarios 13-24 further extend the previous 12 scenarios by allowing the intervent-
ion effect to vary with the exposure time, replacing δ with δ(s).
3.3 Simulation Parameters
Table 3. Range of parameter values used in the simulation study under the continuous-time decay (CTD) correlation structures, with or without a random intervention (RI) effect.
Parameter Values
Number of clusters (I) (16, 32) Number of periods (J) 5 Number of sequences (Q) 4 Number of individuals per cluster in each period (K) 50 Continuous recruitment pattern (tijk) Uniform, Cluster-Mixed, Cluster-Period Mixed
Period effect βj = 0.5j2/J or T (tijk) = {0.5t2 + sin(6πt)}/J Intervention effect size (δ, ∆) 0 Within-period ICC under control (ρ0) for CTD (0.01, 0.05) Within-period ICC under intervention (ρ1) for CTD 0.1 CAC under control for NE, DTD, CTD (0.5, 0.8) Standard deviation of residual term (τε2) 1
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; RI: random intervention; ICC: intracluster correlation
coefficients; CAC: cluster autocorrelation coefficient.
For practical relevance, the simulation parameters are motivated by published literature and summarized in Table 3. Importantly, Nevins et al. 3,31 reported that the median number of clusters randomized was 11 (Q1-Q3: 8-18), the median number of sequences was 5 (Q1-Q3: 4-7), and the median
Prepared using sagej.cls

13
sample size was 2,724 (Q1-Q3: 643-14,734), where Q1 and Q3 denote the first and third quartiles, respectively. Furthermore, Korevaar et al. 32 investigated 44 continuous outcomes from the CLustered Outcome Dataset (CLOUD) bank, reporting ICCs typically ranging between 0.01 and 0.1, with a median CAC of 0.73 (Q1-Q3: 0.19-0.91). Based on these findings, we consider a standard SW-CRT design with I ∈ (16, 32) clusters, J ∈ (5, 9) periods, Q ∈ (4, 8) sequences, and Kij = 50 for all i ∈ {1, . . . , I} a-
nd j ∈ {1, . . . , J} (i.e., equal numbers of individuals per cluster-period). For ICC-related parameters, the CTD structure assumes ρ0 ∈ (0.01, 0.05), ρ1 = 0.1, and τε2 = 1 with the CAC equal to 0.5 or 0.8 under the control condition. The
corresponding CAC under the intervention condition and τv2 can then be calculated based on formulas provided in Table 1. Additionally, for evaluating the validity of the Wald test in terms of type I error rate, we assume an intervention effect size of zero (i.e., δ = ∆ = 0). It is important to note that when we set ∆ = 0, the average of all point intervention effects equals zero. However, it does not necessarily imply that each point intervention effect δ(s) is equal to zero. For each simulation s-
tudy, we simulated 2,000 datasets, ensuring the Monte Carlo standard error within ±0.5% for a coverage probability of 95%. 33
3.4 Data Analysis and Performance Measures
Table 4. Summary of performance measures in the presence of a constant intervention effect. Here, we let
δ ̄ = n−1 Pn
p=1 δˆp be the empirical mean of δˆp across n simulated datasets. When the intervention depends on
exposure times, we replace (δ, δˆp, δ ̄) with (∆, ∆ˆ p, ∆ ̄ ).
Measure Names Estimands Estimators
Bias E(δb) − δ 1
n
Pn
p=1(δˆp − δ)
Coverage Pr(δˆlow < δˆ < δˆhigh) 1
n
Pn
p=1 1(δˆlow < δˆp < δˆhigh)
Average Standard Error† E
q
V(δˆ) 1
n
Pn p=1
q
V(δˆp)
Empirical Standard Deviation
q
V(δˆ)
q
1 n
Pn
p=1(δˆp − δ ̄)2
†: V(·) denotes either VNaive(·) for model-based variance or VRVE(·) for model-robust variance.
All simulated datasets are analyzed at the individual level using discrete-time linear mixed models with R (version 4.4.3). Specifically, our working models always assume a discrete period effect and correctly specify whether the intervention effect is constant or depends on exposure times. Although scenarios 1-6 and 13-18 introduce an random intervention effect in the true model, our working models always assume a fixed intervention effect. For estimating ζˆ and VNaive(ζˆ), when the working model-
 assumes an EXCH or NE, the lmerTest (version 3.1-3) package is used; when the working model assumes a DTD, the glmmTMB (version 1.1.11) package is used. For estimating VRVE(ζˆ), we use the clubSandwich (version 0.6.0) package with “CR0” for the RVE without any correction, and “CR3” for the RVE with the MD correction across all correlation structures (including EXCH, NE, and DTD). The only exception
Prepared using sagej.cls

14 Journal Title XX(X)
is the RVE under DTD with the MD correction because this option is currently not available in the clubSandwich package. Instead, we use the R package developed in Wang et al. 14 All models are fitted using their default nonlinear optimizers. For each setting in Table 3, we simulated n = 2, 000 datasets for each scenario in Table 2, which ensures the Monte Carlo standard error below 0.5% with a 95% coverage. 33 We also provide a list of performance measures in Table 4. Of note, we evaluate 95% cove-
rage using a two-sided t-test with I − 2 DoF for the small-sample bias correction. This convenient choice of DoF was first proposed by Ford and Westgate 34 for GEE estimators with the MD correction and has consistently maintained valid inference (but sometimes conservative due to over-correction) in many empirical studies for analyzing SW-CRTs. 13,35–37
3.5 Simulation Results
3.5.1 Simulation Study I (Scenarios 1-6): Continuous Period Effect. In Simulation Study I, we first investigate whether a continuous period effect in the true data-generating process further affects the performance of discrete-time linear mixed models, relative to a discrete period effect. Among the 24 scenarios in Table 2, we first restrict attention to scenarios with a constant intervention effect (scenarios 1-12) as the base case. Within this subset, we focus on scenarios 1-6 that include an ra-
ndom intervention because these are more realistic for capturing treatment effect heterogeneity across clusters; comparisons between data-generating processes with and without a random intervention are provided in Section 3.5.4. We consider a standard SW-CRT with I = 32, J = 5, and Kij = 50. Data are generated under a CTD correlation structure with a cluster-period mixed recruitment pattern, fixing ρ0 = 0.01, ρ1 = 0.1, σε2 = 1, and CAC = 0.5. We set δ = 0 to assess type I error rates. For data gen-
eration, we compare two period effect specifications: scenarios 1-3 use a discrete period effect with βj = 0.5j2/J, and scenarios 46 use a continuous period effect with T (tijk) = 0.5t2
ijk + sin(6πtijk)/J . Both specifications include nonlinear trends through quadratic terms, but the continuous period effect additionally includes sinusoidal variation to simulate seasonal fluctuations commonly observed in healthcare settings. For analysis, we apply discrete-time linear mixed models with EXCH, NE, and DTD working correlation structures to both sets of generated data. Table 5 indicates that the specification of the period effect in the data-generating process has minimal impact on -
the performance of discrete-time linear mixed models. First, the estimator δˆ is consistent for the true intervention effect δ, with negligible bias across all scenarios. This aligns with the theoretical results from Wang et al., 14 demonstrating that the intervention effect estimator is consistent as long as the intervention structure is correctly specified, even when the period effect, heterogeneity, or residual error terms are misspecified in SW-CRTs (even though the theory there developed is b-
ased on discrete sampling rather than continuous-time recruitment). Given the negligible bias, subsequent comparisons focus on variance estimation. Second, the model-based variance estimator under the EXCH structure gives the lowest 95% CI coverage (e.g., CNaive(δˆ) ≈ 74%). This is expected because EXCH is an overly restrictive correlation structure relative to the CTD data-generating process. More flexible working correlation structures such as NE or DTD improve coverage to approximately 90%, tho-
ugh remaining below the nominal level. Third, the RVE without correction increases coverage to approximately 94% across all correlation structures, but maintains inflated type I error rates. Fourth, the RVE with MD correction achieves nominal coverage for all three working correlation structures. These findings establish that the RVE with MD correction is necessary for valid inference when analyzing continuous-time recruitment data with discrete-time models. Given that continuous and discrete peri-
od effects yield comparable results
Prepared using sagej.cls

15
Table 5. Results over 2, 000 simulated datasets generated for scenarios 1-6 under the setting in Simulation Study I and II. We consider a standard SW-CRT with I = 32, J = 5, Kij = 50, δ = 0, ρ0 = 0.01, ρ1 = 0.1, σ2
ε = 1, and CAC = 0.5. For a discrete period effect, we set βj = 0.5j2/J ; for a continuous period effect, we
set T (tijk) = 0.5t2
ijk + sin(6πtijk)/J . Here, sd(·) is the empirical (Monte Carlo) standard deviation. VNaive(·), VRVE(·), VMD
RVE(·) are the average model-based standard error, average model-robust standard error, and
average model-robust standard error with the MD correction, respectively. CNaive(·), CRVE(·), CMD
RVE(·) are the
empirical coverage percentage of 95% confidence intervals based on VNaive(·), VRVE(·), and VMD
RVE(·), respectively.
Period Effect Pattern Model Bias sd(δˆ) VNaive(δˆ) CNaive(δˆ) VRVE(δˆ) CRVE(δˆ) VMD
RVE(δˆ) CMD
RVE(δˆ)
Discrete CP
EXCH 0.0005 0.0727 0.0398 73.60 0.0681 93.20 0.0727 95.00 NE 0.0010 0.0731 0.0593 89.55 0.0681 93.15 0.0727 95.20 DTD 0.0011 0.0727 0.0568 88.55 0.0676 93.95 0.0722 95.05
Continuous
CP
EXCH 0.0007 0.0741 0.0405 73.90 0.0699 93.70 0.0745 95.45 NE 0.0015 0.0742 0.0614 89.75 0.0696 93.60 0.0743 95.25 DTD 0.0015 0.0741 0.0591 89.15 0.0694 93.80 0.0740 95.30
C
EXCH 0.0011 0.0726 0.0405 73.80 0.0689 94.65 0.0735 95.85 NE 0.0006 0.0731 0.0609 91.15 0.0688 94.15 0.0734 95.55 DTD 0.0009 0.0721 0.0582 90.45 0.0683 94.10 0.0729 95.70
U
EXCH 0.0005 0.0719 0.0405 74.35 0.0683 94.10 0.0728 95.50 NE 0.0003 0.0723 0.0595 90.35 0.0681 93.40 0.0726 95.15 DTD -0.0001 0.0721 0.0572 88.85 0.0677 93.90 0.0722 95.00
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; U: uniform pattern; C: cluster
mixed pattern; CP: cluster-period mixed pattern; RVE: robust variance estimator; MD: Mancl and DeRouen.
for discrete-time linear mixed models and their variance estimators, subsequent simulations focus on the more realistic scenarios in the presence of a continuous period effect, which better reflects continuous recruitment patterns commonly observed in real-world SW-CRTs.
3.5.2 Simulation Study II (Scenarios 4-6): Recruitment Patterns. In Simulation Study II, we examine the impact of different recruitment patterns on the performance of discrete-time linear mixed models. The setting remains identical to Simulation Study I, except that data are generated under three recruitment patterns: uniform, cluster mixed, and cluster-period mixed. Results in Table 5 indicate that the recruitment pattern has minimal influence on the performance of linear mixed model estimators o-
r their variance estimators. The empirical standard deviation of δˆ increases slightly under the cluster-period mixed pattern relative to the uniform and cluster mixed patterns, reflecting the additional variation introduced by this recruitment specification. This difference does not affect the overall conclusions regarding bias or coverage. Given the minimal impact of recruitment patterns on estimator performance, subsequent simulations (Studies III-VI) use the cluster-period mixed pattern for da-
ta generation, as this specification most closely reflects the complex recruitment dynamics observed in real-world SW-CRTs.
3.5.3 Simulation Study III (Scenarios 4-6): ICC-Related Parameters. In Simulation Study III, we investigate how varying the CAC and within-period ICC affects the performance of discrete-time linear mixed models. The setting remains identical to Simulation Study I, except that data are generated with CAC ∈ {0.5, 0.8} and ρ0 ∈ {0.01, 0.05} to examine a broader range of correlation structures. Table 6 reveals that the CAC has minimal impact on the performance of discrete-time linear mixed model
Prepared using sagej.cls

16 Journal Title XX(X)
Table 6. Results over 2, 000 simulated datasets generated for scenarios 4-6 under the setting in Simulation Study III. We consider a standard SW-CRT with I = 32, J = 5, Kij = 50, δ = 0, ρ0 ∈ {0.01, 0.05}, ρ1 = 0.1, σ2
ε = 1, CAC ∈ {0.5, 0.8}, a continuous period effect T (tijk) = 0.5t2
ijk + sin(6πtijk)/J , and a cluster-period mixed pattern. Here, sd(·) is the empirical (Monte Carlo) standard deviation. VNaive(·), VRVE(·), VMD
RVE(·) are the average model-based standard error, average model-robust standard error, and average model-robust standard error with the MD correction, respectively. CNaive(·), CRVE(·), CMD
RVE(·) are the empirical coverage
percentage of 95% confidence intervals based on VNaive(·), VRVE(·), and VMD
RVE(·), respectively.
CAC ρ0 Model Bias sd(δˆ) VNaive(δˆ) CNaive(δˆ) VRVE(δˆ) CRVE(δˆ) VMD
RVE(δˆ) CMD
RVE(δˆ)
0.5
0.01
EXCH 0.0007 0.0741 0.0405 73.90 0.0699 93.70 0.0745 95.45 NE 0.0015 0.0742 0.0614 89.75 0.0696 93.60 0.0743 95.25 DTD 0.0015 0.0741 0.0591 89.15 0.0694 93.80 0.0740 95.30
0.05
EXCH 0.0002 0.0763 0.0410 72.40 0.0718 94.10 0.0766 95.30 NE 0.0007 0.0758 0.0672 92.90 0.0712 93.45 0.0760 95.25 DTD 0.0006 0.0744 0.0649 92.70 0.0692 93.55 0.0739 94.95
0.8
0.01
EXCH 0.0003 0.0740 0.0405 73.90 0.0684 93.00 0.0730 94.65 NE 0.0008 0.0741 0.0604 89.05 0.0683 93.00 0.0728 94.65 DTD 0.0006 0.0741 0.0578 87.95 0.0681 92.95 0.0727 94.65
0.05
EXCH 0.0007 0.0698 0.0410 76.55 0.0656 93.65 0.0700 95.40 NE 0.0010 0.0701 0.0627 93.15 0.0657 93.80 0.0701 95.20 DTD 0.0009 0.0686 0.0589 92.00 0.0641 93.80 0.0684 95.40
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; ICC: intracluster correlation
coefficients; CAC: cluster autocorrelation coefficient; ρ0: within-period ICC under control; ρ1: within-period ICC under treatment;
RVE: robust variance estimator; MD: Mancl and DeRouen.
estimators or their variance estimators across the range examined. In contrast, the within-period ICC substantially influences variance estimation. Increasing ρ0 from 0.01 to 0.05 improves the coverage of model-based variance estimators from approximately 89% to 93% for a fixed CAC. The RVE maintains consistent performance across all parameter combinations, with coverage of approximately 94% without correction and nominal coverage of 95% with MD correction.
3.5.4 Simulation Study IV (Scenarios 10-12): Random Intervention Effect. In Simulation Study IV, we examine whether the presence of a random intervention effect influences the performance of discretetime linear mixed models. The setting remains identical to Simulation Study III, except that data are generated with a fixed constant intervention effect rather than a random intervention effect. Web Table 1 demonstrates that the absence of a random intervention effect leads to different performance ac-
ross working correlation structures. For model-based variance estimators, the NE and DTD structures yield conservative inference with coverage exceeding 95%, indicating deflated type I error rates. In contrast, the type I error rate is inflated for the EXCH structure with the 95% CI coverage ranging from 81.75% to 93.55%. The RVE demonstrates greater robustness, achieving coverage of approximately 94% without correction and nominal coverage of 95% with MD correction. These findings suggest that th-
e presence or absence of a random intervention effect primarily affects model-based variance estimation, particularly under restrictive working correlation structures (e.g., EXCH), while robust variance estimation maintains validity across both specifications.
Prepared using sagej.cls

17
3.5.5 Simulation Study V (Scenarios 4-6): Trial Design. In Simulation Study V, we examine whether our findings generalize to different numbers of clusters and periods. We first consider a smaller trial with I = 16 clusters while fixing all other parameters from Simulation Study III. Results in Web Table 2 confirm that all conclusions remain consistent, though the empirical standard deviation increases due to the reduced sample size. We next consider a larger trial with J = 9 periods while maintain-
ing I = 32 clusters. In Web Table 3, model-based variance estimators achieve lower coverage with more periods compared to the J = 5 setting. It is particularly clear that, for the model-based variance estimator, using the DTD working structure leads to the highest 95% CI coverage, followed by NE, with EXCH being the most restrictive one that has the lowest coverage. This pattern emphasizes the growing importance of correctly specifying the correlation structure as the number of periods increases. -
Consistent with results in Table 6, increasing ρ0 from 0.01 to 0.05 leads to higher 95% CI coverage for both NE and DTD structures. Across Table 6, Web Tables 2 and 3, we observe that the combination of CAC = 0.8 and ρ0 = 0.05 consistently results in the smallest empirical standard deviation of δˆ compared to other combinations of the CAC and ρ0. Lastly, the RVE maintains robust performance regardless of cluster or period number, achieving coverage of approximately 94% without correction and nomin-
al coverage with MD correction.
3.5.6 Simulation Study VI (Scenarios 16-18): Exposure-Time-Dependent Intervention Effect. In Simulation Study VI, we investigate the performance of discrete-time linear mixed models when the intervention effect varies as a function of exposure times. Specifically, we use the same setting as Simulation Study I but set δ(1) ≈ −1.3768, δ(2) ≈ 0.3831, δ(3) ≈ 0.9785, δ(4) ≈ 0.0152, and ∆ = 0. In Web Table 4, consistent with previous findings, the model-based variance estimator under the EXCH working co-
rrelation structure consistently gives the lowest 95% CI coverage across all point and timeaveraged intervention effect estimates, ranging from 69.70% to 76.75%. In contrast, the NE and DTD working correlation structures show improved model-based variance estimator performance compared to EXCH, with coverages ranging from 84.95% to 92.40%, though still below the nominal level. Furthermore, both RVEs and MD-corrected RVEs maintain the 95% CI coverage close to the nominal level, with CRVE(·) ≈ 94% a-
nd CMD
RVE(·) ≈ 95% across all estimates for all three discrete correlation structures.
3.5.7 Simulation Study VII (Scenarios 4-6 and 16-18): Intervention-Dependent Recruitment. In Simulation Study VII, we investigate the impact of intervention-dependent recruitment on the performance of discrete-time linear mixed models. This scenario reflects settings where the implementation of an intervention systematically alters recruitment practices, potentially leading to increased cluster-period sizes and fundamentally different recruitment patterns after receiving the intervention. This phe-
nomenon can take place in trials when the intervention is perceived as beneficial by patients and providers. Specifically, we consider a standard SW-CRT with I = 96 and fix J = 5, ρ0 = 0.01, ρ1 = 0.01, CAC = 0.5 as a preliminary exploration. We systematically explore nine scenarios with varying recruitment sizes and patterns. For recruitment sizes, we consider 1) balanced recruitment with Kij = 50 under both control and treatment, 2) moderately unbalanced recruitment with Kij = 25 under control an-
d Kij = 75 under treatment, and 3) severely unbalanced recruitment with Kij = 10 under control and Kij = 90 under treatment. For each recruitment size, we consider uniform patterns under both conditions, uniform under control but cluster-period mixed under treatment, and cluster-period mixed under both conditions.
Prepared using sagej.cls

18 Journal Title XX(X)
Web Table 5 leads to two major findings. First, when recruitment patterns are consistent across periods (i.e., uniform patterns or cluster-period mixed under both conditions), the intervention effect estimator is consistent, and RVEs achieve the nominal coverage. However, when the recruitment pattern is uniform in control periods and then becomes cluster-period mixed in treatment periods, the intervention effect estimator carries bias with δˆ ≈ −0.03. Of note, when recruitment sizes are balanced, -
the bias arising from shifting recruitment patterns (uniform in control periods to cluster-period mixed in intervention periods) is approximately 20-fold larger than the bias under uniform recruitment across all periods for the EXCH model in Web Table 5. Importantly, this bias is independent of the intervention effect size. This can be seen in Web Table 5, where comparing the last three rows (δ = 2) with the preceding three rows (δ = 0) reveals identical bias estimates despite the different effect-
 sizes. Moreover, regardless of the degree of imbalance in recruitment sizes, even the RVEs (both with and without the MD correction) fail to achieve nominal coverage. Of note, this under-coverage is mainly caused by the biased point estimate of the intervention effect instead of the underestimated variance. This is because VMD
RVE(δˆ) is close to
sd(δˆ) across all scenarios. Additionally, we explore the scenario where the recruitment size depends on exposure time in a standard SW-CRT with I ∈ {16, 32, 96} and fix J = 5, ρ0 = 0.01, ρ1 = 0.01, CAC = 0.5. For recruitment sizes, we consider 1) Kij = 25 under control and Kij = 50, 75, 100, 125 when exposure time is 1, 2, 3, 4, respectively (denoted as S1), and 2) Kij = 10 under control and Kij = 100, 110, 130, 160 when exposure time is 1, 2, 3, 4, respectively (denoted as S2). For each recruitm-
ent size, we consider uniform patterns under both conditions, and uniform under control but cluster-period mixed under treatment. In Web Table 6. as expected, as long as the recruitment pattern is consistent before and after receiving the intervention, the intervention effect estimator is consistent, and RVEs achieve the nominal coverage. However, when the recruitment pattern is uniform in control periods and then becomes cluster-period mixed in treatment periods, the intervention effect estimator-
 carries bias with δˆ ≈ −0.03 regardless of the number of clusters or recruitment sizes. Similar findings hold when the intervention effect depends on the exposure time; more simulation results can be found in Web Tables 7-9 under the same setting.
4 An Illustrative Example: Reanalysis of the Australian Disinvestment Trial
We provide a secondary analysis of the Australian Disinvestment and Reinvestment SW-CRTs, which were conducted from February 2014 to April 2015 across 12 acute medical or surgical wards in two hospitals. 38 This study aimed to evaluate whether weekend allied health services (including physical therapy, occupational therapy, and social work) deliver their intended benefits and whether resources allocated to these services could be better utilized elsewhere in the healthcare system. The primary outc-
ome is length of stay (in days). This continuous outcome is crucial for evaluating patient flow that may be influenced by removing existing or introducing a newly developed weekend allied health services. Two SW-CRTs were conducted: Trial 1 (disinvestment) incrementally removed the existing weekend allied health service from participating wards, and Trial 2 (reinvestment) incrementally introduced a newly developed weekend allied health service to the same wards. This design enabled assessment of b-
oth the impact of removing the current service and the effectiveness of implementing the new service. The study included 14,834 patients in Trial 1 and 12,674 patients in Trial 2. Following the original trial’s decision, we excluded patients exposed to both the no-service condition and either service condition to
Prepared using sagej.cls

19
(a) Trial 1: A Disinvestment-Specific SW-CRT
Cluster 4 Cluster 5 Cluster 6
Cluster 1 Cluster 2 Cluster 3
01234567 01234567 01234567
100
200
300
400
100
200
300
400
tijk
Number of individuals
(b) Trial 2: A Reinvestment-Specific SW-CRT
Cluster 4 Cluster 5 Cluster 6
Cluster 1 Cluster 2 Cluster 3
01234567 01234567 01234567
100
200
300
400
100
200
300
400
tijk
Number of individuals
Figure 3. Empirical recruitment patterns of the Australia (disinvestment) trial 1 and (reinvestment) trial 2 in (a) and (b), respectively. Gray lines represent control periods, and black lines represent intervention periods. Only six of the twelve clusters contain information on exact recruitment time. The x-axis shows tijk as the fraction of time elapsed within each period.
Prepared using sagej.cls

20 Journal Title XX(X)
prevent contamination. 38 In both trials, the 12 wards were treated as clusters, each assigned to one of eight distinct sequences over nine monthly periods. Figure 3 provides the empirical recruitment patterns, which vary substantially across clusters and periods, exemplifying the cluster–period mixed pattern in Section 2.3.2. For simplicity, we only present analysis results for Trial 1. To assess whether there exists an intervention-dependent recruitment, we conduct a preliminary test for associa-
tions between treatment status and cluster-period size. We first calculate the number of individuals enrolled in each cluster-period. Using linear regression, we fit two models: the first regress cluster-period size on period indicators (accounting for secular trends) and treatment status, while the second regress cluster-period size on period indicators and exposure time indicators. Neither model reveal significant associations with recruitment size. The coefficient for treatment status yield a p-
-value greater than 0.30, while the coefficients for exposure time indicators all produce p-values greater than 0.18. These findings suggest no strong evidence of intervention-dependent recruitment in Trial 1, indicating that the potential biases identified in Section 3.5.7 are unlikely to affect the validity of our discrete-time analyses. To test for exposure-time-induced heterogeneity in intervention effect in Trial 1, we follow the likelihood ratio test described in Maleyeff et al. 20 Specifica-
lly, we test the null hypothesis H0 : δ(1) = δ(2) = · · · = δ(J − 1), which gives a p-value of 0.0012, 0.0734, 0.1847 under the EXCH, NE, and DTD working correlation structure, respectively. The variation in p-values across correlation structures reflects their different assumptions about within-cluster dependencies; EXCH, being the most restrictive structure, provides strong evidence of exposure-time-heterogeneity (p-value = 0.0012), and the more flexible DTD structure yields weaker evidence (p-v-
alue = 0.1847). This finding aligns with the report by Haines et al. 38 that staff likely required an accommodation period to adapt to service withdrawal. Therefore, we present results from both constant and exposure-time-dependent intervention effect models in our subsequent analysis. Estimation results are shown in Table 7. For the constant intervention effect model, the estimated intervention effects are 1.56, 1.74, and 1.86 days under the EXCH, NE, and DTD working correlation structure, respec-
tively. All 95% CIs exclude zero and these positive estimates indicate that removing existing weekend allied health services increased length of stay, consistent with the main finding in Haines et al. 38 The choice of variance estimator substantially affects the estimated standard errors. Model-based standard errors are consistently smaller than those from the RVE with the MD correction; the RVE with MD correction provides the most conservative estimates. Moreover, as the correlation structure bec-
omes more general from EXCH to DTD, the model-based standard errors approach those from the RVE. This suggests some degree of random-effects structure misspecification, particularly indicating that model-based estimates may underestimate the standard errors, especially under EXCH. Interestingly, for the NE and DTD structures, the RVE without correction produces smaller standard errors than the model-based estimator. This can occur in the absence of random intervention effects, which aligns with fi-
ndings from Simulation Study IV. Additionally, the relatively small number of clusters (I = 12) also requires the MD correction to properly account for finite-sample bias, consistent with our findings in Simulation Study V. These results collectively suggest that the RVE with MD correction can be a robust choice for maintaining valid inference in practice. When accounting for exposure-time-dependent intervention effects, all estimated time-average intervention effects increase substantially, rangi-
ng from 2.43 (EXCH) to 2.79 (DTD) days, with all 95% CIs excluding zero. This finding aligns with insights in Kenny et al., 19 which demonstrate that when the true model has an exposure-time-dependent intervention effect but the working model assumes
Prepared using sagej.cls

21
Table 7. Estimated constant intervention effect, standard error, and 95% confidence interval using the linear mixed model under the simple exchangeable (EXCH), nest exchangeable (NE), and discrete-time exponential decay (DTD) working correlation structures for the Australian Disinvestment Trial.
Time Varying Working Model Estimates Variance Estimator Estimated Standard Error 95% CI
EXCH 1.56
Model-based 0.24 (1.02, 2.10) RVE 0.39 (0.69, 2.43) RVE + MD 0.51 (0.43, 2.69)
NE 1.74
Model-based 0.40 (0.84, 2.64) RVE 0.39 (0.87, 2.61) RVE + MD 0.48 (0.68, 2.81)
DTD 1.86
Model-based 0.41 (0.95, 2.77) RVE 0.36 (1.05, 2.67) RVE + MD 0.43 (0.89, 2.83)
EXCH 2.43
Model-based 0.37 (1.60, 3.26) RVE 0.40 (1.53, 3.33) RVE + MD 0.51 (1.30, 3.56)
NE 2.58
Model-based 0.58 (1.30, 3.86) RVE 0.43 (1.61, 3.55) RVE + MD 0.49 (1.48, 3.68)
DTD 2.79
Model-based 0.64 (1.37, 4.20) RVE 0.57 (1.51, 4.06) RVE + MD 0.71 (1.19, 4.38)
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; RVE: robust variance estimator;
MD: Mancl and DeRouen; CI: confidence interval.
a constant intervention effect, the magnitude of the intervention effect may be underestimated. Other findings regarding estimated standard errors using different variance estimators remain consistent with those obtained under the assumption of a constant intervention effect. The only exception is that under the NE working correlation structure, both RVEs with or without the MD correction lead to estimated standard errors that are smaller than the model-based standard error.
5 Discussion
Our current study has two sets of primary findings. First, our results provide empirical evidence addressing the methodological challenges identified by Hooper and Copas, 4 who noted that SW-CRTs with continuous-time recruitment requires special consideration at both design and analysis stages, but the stepped wedge literature had not differentiated closely between continuous recruitment and discrete sampling. Although the CONSORT 2010 extension for SW-CRTs required transparent reporting of recrui-
tment mechanisms, 39 the analytical implications of continuous recruitment have remained unclear. Our simulations demonstrate that discrete-time linear mixed models yield consistent intervention effect estimates under continuous recruitment, given that the intervention effect structure is correctly specified. This robustness of discrete-time linear mixed models holds across all 24 scenarios in Table 2, including different true models that consider continuous or discrete period effects, fixed or ra-
ndom
Prepared using sagej.cls

22 Journal Title XX(X)
intervention effects, constant or exposure-time-dependent intervention effects, and the presence of a CTD correlation structure. Second, although the point estimate is consistent, achieving valid statistical inference depends critically on the choice of variance estimator. Under continuous recruitment, modelbased variance estimators systematically underestimate empirical variances in most scenarios, with this underestimation being most severe under EXCH, which is the most restrictive of the three -
correlation structures considered in this article. One exception occurs in scenarios without an random intervention effect, where model-based variance estimators under NE and DTD structures may overestimate empirical variances. Importantly, only the RVE with the MD correction consistently achieves nominal coverage across all scenarios in Table 2. This finding is especially important given that 95.1% of cross-sectional SW-CRTs implement continuous recruitment, but common practice mainly relies on d-
iscrete-time linear mixed models.
In practice, researchers conducting SW-CRTs with continuous recruitment can use discrete-time linear mixed models without substantial concerns about bias, eliminating the need for complex continuous-time modeling approaches that may be computationally intensive or require specialized software. However, the choice of variance estimator requires careful consideration. Our results consistently demonstrate that the RVE with the MD correction can ensure the validity of inference. This recommendation is-
 also supported by our reanalysis of the Australian Disinvestment trial, where model-based standard errors under EXCH were substantially smaller than those from the RVE with the MD correction, suggesting potential misspecification of the random effect model. Furthermore, the choice of working correlation structure affects the 95% CI coverage and type I error rate primarily for model-based inference but has minimal impact when using the RVE with or without the MD correction. Among the three discret-
etime correlation structures commonly used in practice, DTD generally performs best, followed by NE, with EXCH being the most restrictive and yielding the lowest coverage for model-based estimators. Moreover, continuous period effects in the true model slightly increase the empirical standard deviation of intervention effect estimates compared to discrete period effects, but this increase is modest and does not compromise the validity of discrete-time analyses.
An important exception to these generally reassuring findings occurs when recruitment patterns change systematically between control and intervention periods. In Simulation Study VII, we demonstrated that when clusters recruit uniformly during control periods but switch to a cluster-period mixed pattern during intervention periods, the intervention effect estimator becomes biased. This bias exists even with large sample sizes and cannot be corrected through variance estimation alone. We recognize -
that certain interventions may inherently alter recruitment dynamics. For instance, in trials of social interventions such as cash transfers or housing assistance, participant enthusiasm and recruitment patterns may naturally evolve as the intervention becomes known in the community. Similarly, interventions perceived as highly beneficial may generate increased referrals or patient interest over time, leading to unavoidable recruitment pattern changes because of the intervention’s inherent charact-
eristics.
Given these findings, we offer several considerations for both trial design and analysis. At the design stage, investigators may not need to impose rigid constraints on recruitment timing to ensure valid analysis, as our results demonstrate that any consistent recruitment pattern maintains inference validity. However, investigators should establish protocols for documenting recruitment patterns throughout the trial. When individual-level recruitment times can be recorded without compromising priva-
cy, these are recommended to be collected systematically. In settings where exact enrollment dates may identify participants (particularly in smaller clusters or rare disease populations) cluster-period-specific
Prepared using sagej.cls

23
enrollment densities provide an acceptable alternative that preserves analytical utility while protecting confidentiality. At the analysis stage, investigators can first examine whether recruitment patterns are different between control and intervention periods using the documented data; we provide a simple regression-based approach that tests for associations between treatment status and cluster-period enrollment sizes in Section 4. When patterns remain consistent across conditions, standard disc-
retetime analyses with model-robust variance estimation are recommended. However, when substantial changes are detected, the intervention effect estimates may be biased, requiring careful interpretation that acknowledges this limitation. In such cases, alternative analytical approaches that explicitly model time-varying recruitment may be required, though development of these methods remains an area for future research. Although we attempt to investigate the impact of continuous recruitment on the-
 performance of discrete-time linear mixed models under a wide array of settings in Table 2, the current study is not free of limitations. First, while the RVE with MD correction achieves nominal 95% CI coverage and type I error rate under continuous recruitment, the estimates of random effects variance components from misspecified models is not valid. When discrete-time models are applied to SW-CRTs with continuous recruitment, the variance component estimates under the EXCH, NE and DTD may not a-
ccurately reflect the true correlation structures (e.g., CTD). Although it is technically feasible to fit CTD models using Markov Chain Monte Carlo maximum likelihood approximation, 30 the high dimensionality of the CTD correlation structure raises substantial computational burden. We therefore focus on discrete-time working models in this article and encourage future software development to improve the accessibility of continuous-time methods. Because ICC estimates calculated from pilot studies o-
r concluded trials are routinely used for sample size calculations in future SW-CRTs, the development of software implementations for variance component estimation under CTD structures, along with guidance for translating these continuous-time parameters into design specifications for discrete-time analyses, would be helpful in practice when recruitment-time information is available. This variance component misspecification issue represents one aspect of a broader challenge in modeling continuous -
recruitment data. Second, we focus exclusively on continuous outcomes due to fundamental challenges that arise with non-Gaussian outcomes under continuous recruitment. For binary outcomes, the non-collapsibility property of odds ratios means that marginal and conditional effect estimates differ systematically, even without confounding. This divergence becomes particularly problematic under continuous recruitment, where varying enrollment times within cluster-periods introduce additional layers of -
complexity that cannot be adequately addressed through standard adjustment methods. Moreover, the inherent meanvariance relationship in binary outcomes implies that the correlation structure also depends on outcome prevalence. When recruitment occurs continuously during each period, prevalence may vary continuously within cluster-periods, causing the correlation structure to change over time in ways that discretetime models cannot accommodate. These complexities suggest that developing methods to -
address continuous recruitment for binary, count, and time-to-event outcomes represents an important area for future methodological advancement.
References
1. Hussey MA and Hughes JP. Design and analysis of stepped wedge cluster randomized trials. Contemporary Clinical Trials 2007; 28(2): 182–191.
Prepared using sagej.cls

24 Journal Title XX(X)
2. Copas A, Lewis J, Thompson J et al. Designing a stepped wedge trial: three main designs, carry-over effects and randomisation approaches. Trials 2015; 16(1). 3. Nevins P, Ryan M, Davis-Plourde K et al. Adherence to key recommendations for design and analysis of stepped-wedge cluster randomized trials: A review of trials published 2016–2022. Clinical Trials 2024; 21(2): 199–210. 4. Hooper R and Copas A. Stepped wedge trials with continuous recruitment require new ways of thinking. Journal of Cli-
nical Epidemiology 2019; 116: 161–166.
5. Hooper R. Key concepts in clinical epidemiology: Stepped wedge trials. Journal of Clinical Epidemiology 2021; 137: 159—-162. 6. Grantham KL, Kasza J, Heritier S et al. Accounting for a decaying correlation structure in cluster randomized trials with continuous recruitment. Statistics in Medicine 2019; 38(11): 1918–1934. 7. Hooper R, Kasza J and Forbes A. The hunt for efficient, incomplete designs for stepped wedge trials with continuous recruitment and continuous outcome measures. BMC Medical R-
esearch Methodology 2020; 20(1). 8. Hooper R, Quintin O and Kasza J. Efficient designs for three-sequence stepped wedge trials with continuous recruitment. Clinical Trials 2024; 21(6): 723–733. 9. Li F, Hughes JP, Hemming K et al. Mixed-effects models for the design and analysis of stepped wedge cluster randomized trials: an overview. Statistical Methods in Medical Research 2021; 30(2): 612–639. 10. Kasza J and Forbes AB. Inference for the treatment effect in multiple-period cluster randomised tri-
als when random effect correlation structure is misspecified. Statistical Methods in Medical Research 2019; 28(10-11): 3112–3122. PMID: 30189794. 11. Bowden R, Forbes AB and Kasza J. Inference for the treatment effect in longitudinal cluster randomized trials when treatment effect heterogeneity is ignored. Statistical Methods in Medical Research 2021; 30(11): 25032525. 12. Voldal EC, Xia F, Kenny A et al. Model misspecification in stepped wedge trials: Random effects for time or treatment. Statist-
ics in Medicine 2022; 41(10): 1751–1766. 13. Ouyang Y, Taljaard M, Forbes AB et al. Maintaining the validity of inference from linear mixed models in stepped-wedge cluster randomized trials under misspecified random-effects structures. Statistical Methods in Medical Research 2024; 33(9): 1497–1516. 14. Wang B, Wang X and Li F. How to achieve model-robust inference in stepped wedge trials with model-based methods? Biometrics 2024; 80(4): ujae123. 15. Girling AJ and Hemming K. Statistical efficiency-
 and optimal design for stepped cluster studies under linear mixed effects models. Statistics in Medicine 2016; 35(13): 2149–2166. 16. Hooper R, Teerenstra S, de Hoop E et al. Sample size calculation for stepped wedge and other longitudinal cluster randomised trials. Statistics in Medicine 2016; 35(26): 4718–4728. 17. Kasza J, Hemming K, Hooper R et al. Impact of non-uniform correlation structure on sample size and power in multiple-period cluster randomised trials. Statistical Methods in Medical -
Research 2019; 28(3): 703–716. PMID: 29027505. 18. Hemming K, Taljaard M and Forbes A. Modeling clustering and treatment effect heterogeneity in parallel and stepped-wedge cluster randomized trials. Statistics in Medicine 2018; 37(6): 883–898. 19. Kenny A, Voldal E, Xia F et al. Analysis of stepped wedge cluster randomized trials in the presence of a time-varying treatment effect. Statistics in Medicine 2022; 41(22): 4311–4339. 20. Maleyeff L, Li F, Haneuse S et al. Assessing exposure-time treatme-
nt effect heterogeneity in stepped-wedge cluster randomized trials. Biometrics 2022; 79(3): 2551–2564.
Prepared using sagej.cls

25
21. Wang H, Chen X, Courtright KR et al. On anticipation effect in stepped wedge cluster randomized trials. arXiv preprint arXiv:250408158 2025; .
22. Hemming K, Taljaard M and Forbes A. Analysis of cluster randomised stepped wedge trials with repeated cross-sectional samples. Trials 2017; 18(1). 23. Taljaard M, Goldstein CE, Giraudeau B et al. Cluster over individual randomization: are study design choices appropriately justified? review of a random sample of trials. Clinical Trials 2020; 17(3): 253–263. PMID: 32367741.
24. Murray DM. Design and Analysis of Group-Randomized Trials. Oxford University Press, 2007.
25. Turner EL, Prague M, Gallis JA et al. Review of recent methodological developments in group-randomized trials: Part 2—analysis. American Journal of Public Health 2017; 107(7): 1078–1086. 26. Hughes JP, Granston TS and Heagerty PJ. Current issues in the design and analysis of stepped wedge trials. Contemporary Clinical Trials 2015; 45: 55–60. 10th Anniversary Special Issue. 27. Liang KY and Zeger SL. Longitudinal data analysis using generalized linear models. Biometrika 1986; 73(1): 13–22. 28. -
Maas CJ and Hox JJ. The influence of violations of assumptions on multilevel parameter estimates and their standard errors. Computational Statistics & Data Analysis 2004; 46(3): 427–440.
29. Mancl LA and DeRouen TA. A Covariance Estimator for GEE with Improved Small-Sample Properties. Biometrics 2001; 57(1): 126–134. 30. Watson SI. Generalised linear mixed model specification, analysis, fitting, and optimal design in r with the glmmr packages. arXiv preprint arXiv:230312657 2024; .
31. Nevins P, Davis-Plourde K, Pereira Macedo JA et al. A scoping review described diversity in methods of randomization and reporting of baseline balance in stepped-wedge cluster randomized trials. Journal of Clinical Epidemiology 2023; 157: 134–145. 32. Korevaar E, Kasza J, Taljaard M et al. Intra-cluster correlations from the clustered outcome dataset bank to inform the design of longitudinal cluster trials. Clinical Trials 2021; 18(5): 529–540. 33. Morris TP, White IR and Crowther MJ. Using si-
mulation studies to evaluate statistical methods. Statistics in Medicine 2019; 38(11): 2074–2102. 34. Ford WP and Westgate PM. Maintaining the validity of inference in small-sample stepped wedge cluster randomized trials with binary outcomes when using generalized estimating equations. Statistics in Medicine 2020; 39(21): 2779–2792. 35. Li F. Design and analysis considerations for cohort stepped wedge cluster randomized trials with a decay correlation structure. Statistics in Medicine 2019; 39(4):-
 438—-455. 36. Li F, Yu H, Rathouz PJ et al. Marginal modeling of cluster-period means and intraclass correlations in stepped wedge designs with binary outcomes. Biostatistics 2021; 23(3): 772—-788. 37. Davis-Plourde K, Taljaard M and Li F. Sample size considerations for stepped wedge designs with subclusters. Biometrics 2021; 79(1): 98—-112. 38. Haines TP, Bowles KA, Mitchell D et al. Impact of disinvestment from weekend allied health services across acute medical and surgical wards: 2 stepped-we-
dge cluster randomised controlled trials. PLOS Medicine 2017; 14(10): 1–21. 39. Hemming K, Taljaard M, McKenzie JE et al. Reporting of stepped wedge cluster randomised trials: extension of the consort 2010 statement with explanation and elaboration. BMJ 2018; 363.
Prepared using sagej.cls

26 Journal Title XX(X)
Appendix
Web Table 1. Results over 2, 000 simulated datasets generated for scenarios 10-12 under the setting in Simulation Study IV. We consider a standard SW-CRT with I = 32, J = 5, Kij = 50, δ = 0, ρ0 ∈ {0.01, 0.05}, σ2
ε = 1, CAC ∈ {0.5, 0.8}, a continuous period effect T (tijk) = 0.5t2
ijk + sin(6πtijk)/J , a cluster-period mixed pattern, and in the absence of a random intervention (RI) effect. Here, sd(·) is the empirical (Monte Carlo) standard deviation. VNaive(·), VRVE(·), VMD
RVE(·) are the average model-based standard error, average model-robust standard error, and average model-robust standard error with the MD correction, respectively. CNaive(·), CRVE(·), CMD
RVE(·) are the empirical coverage percentage of 95% confidence intervals
based on VNaive(·), VRVE(·), and VMD
RVE(·), respectively.
CAC ρ0 Model Bias sd(δˆ) VNaive(δˆ) CNaive(δˆ) VRVE(δˆ) CRVE(δˆ) VMD
RVE(δˆ) CMD
RVE(δˆ)
0.5
0.01
EXCH 0.0002 0.0421 0.0362 91.70 0.0398 93.70 0.0426 95.10 NE 0.0003 0.0417 0.0409 95.55 0.0394 93.85 0.0422 94.70 DTD 0.0004 0.0416 0.0417 95.95 0.0393 93.85 0.0421 94.95
0.05
EXCH 0.0010 0.0611 0.0400 81.75 0.0578 93.10 0.0617 94.55 NE 0.0007 0.0601 0.0580 94.80 0.0568 93.20 0.0608 95.20 DTD 0.0006 0.0580 0.0580 95.80 0.0549 93.55 0.0586 95.35
0.8
0.01
EXCH 0.0002 0.0412 0.0373 93.55 0.0393 93.85 0.0420 95.45 NE 0.0002 0.0414 0.0411 95.95 0.0391 93.90 0.0419 95.45 DTD 0.0001 0.0414 0.0415 95.70 0.0391 93.85 0.0418 95.40
0.05
EXCH 0.0001 0.0535 0.0404 88.05 0.0506 94.15 0.0541 95.60 NE 0.0002 0.0537 0.0536 96.00 0.0507 93.30 0.0542 95.60 DTD 0.0000 0.0521 0.0519 96.30 0.0492 94.45 0.0525 96.30
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; ICC: intracluster correlation
coefficients; CAC: cluster autocorrelation coefficient; ρ0: within-period ICC under control; ρ1: within-period ICC under treatment;
RVE: robust variance estimator; MD: Mancl and DeRouen.
Prepared using sagej.cls

27
Web Table 2. Results over 2, 000 simulated datasets generated for scenarios 4-5 under the setting in Simulation Study V. We consider a standard SW-CRT with I = 16, J = 5, Kij = 50, δ = 0, ρ0 ∈ {0.01, 0.05}, ρ1 = 0.1, σ2
ε = 1, CAC ∈ {0.5, 0.8}, a continuous period effect T (tijk) = 0.5t2
ijk + sin(6πtijk)/J , and a
cluster-period mixed pattern. Here, sd(·) is the empirical (Monte Carlo) standard deviation. VNaive(·), VRVE(·),
VMD
RVE(·) are the average model-based standard error, average model-robust standard error, and average
model-robust standard error with the MD correction, respectively. CNaive(·), CRVE(·), CMD
RVE(·) are the empirical
coverage percentage of 95% confidence intervals based on VNaive(·), VRVE(·), and VMD
RVE(·), respectively.
CAC ρ0 Model Bias sd(δˆ) VNaive(δˆ) CNaive(δˆ) VRVE(δˆ) CRVE(δˆ) VMD
RVE(δˆ) CMD
RVE(δˆ)
0.5
0.01
EXCH 0.0024 0.1028 0.0570 75.95 0.0935 93.40 0.1067 95.85 NE 0.0028 0.1038 0.0859 92.05 0.0926 93.05 0.1060 95.80 DTD 0.0021 0.1035 0.0833 90.90 0.0923 93.00 0.1056 95.90
0.05
EXCH -0.0006 0.1078 0.0577 75.00 0.0962 93.80 0.1101 96.45 NE -0.0006 0.1076 0.0940 93.95 0.0948 93.05 0.1088 96.35 DTD 0.0001 0.1047 0.0914 93.65 0.0923 93.00 0.1056 95.70
0.8
0.01
EXCH 0.0008 0.1038 0.0571 76.75 0.0916 93.50 0.1045 96.05 NE 0.0004 0.1041 0.0846 91.65 0.0910 92.85 0.1040 95.55 DTD 0.0001 0.1035 0.0815 90.55 0.0908 92.55 0.1039 95.40
0.05
EXCH 0.0008 0.0979 0.0579 80.00 0.0878 92.80 0.1003 95.65 NE 0.0003 0.0983 0.0878 94.55 0.0876 93.00 0.1003 95.65 DTD 0.0004 0.0958 0.0830 93.85 0.0856 92.60 0.0979 95.90
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; ICC: intracluster correlation
coefficients; CAC: cluster autocorrelation coefficient; ρ0: within-period ICC under control; ρ1: within-period ICC under treatment;
RVE: robust variance estimator; MD: Mancl and DeRouen.
Prepared using sagej.cls

28 Journal Title XX(X)
Web Table 3. Results over 2, 000 simulated datasets generated for scenarios 4-5 under the setting in Simulation Study V. We consider a standard SW-CRT with I = 32, J = 9, Kij = 50, δ = 0, ρ0 ∈ {0.01, 0.05}, ρ1 = 0.1, σ2
ε = 1, CAC ∈ {0.5, 0.8}, a continuous period effect T (tijk) = 0.5t2
ijk + sin(6πtijk)/J , and a
cluster-period mixed pattern. Here, sd(·) is the empirical (Monte Carlo) standard deviation. VNaive(·), VRVE(·),
VMD
RVE(·) are the average model-based standard error, average model-robust standard error, and average
model-robust standard error with the MD correction, respectively. CNaive(·), CRVE(·), CMD
RVE(·) are the empirical
coverage percentage of 95% confidence intervals based on VNaive(·), VRVE(·), and VMD
RVE(·), respectively.
CAC ρ0 Model Bias sd(δˆ) VNaive(δˆ) CNaive(δˆ) VRVE(δˆ) CRVE(δˆ) VMD
RVE(δˆ) CMD
RVE(δˆ)
0.5
0.01
EXCH -0.0034 0.0699 0.0292 60.80 0.0655 93.55 0.0697 95.05 NE -0.0032 0.0693 0.0443 79.95 0.0643 93.45 0.0685 95.30 DTD -0.0027 0.0692 0.0455 82.40 0.0642 93.50 0.0685 94.95
0.05
EXCH 0.0008 0.0727 0.0295 60.55 0.0674 93.20 0.0718 95.15 NE 0.0011 0.0706 0.0503 85.20 0.0650 92.50 0.0693 94.65 DTD 0.0014 0.0676 0.0529 89.00 0.0622 93.10 0.0664 94.65
0.8
0.01
EXCH 0.0007 0.0705 0.0292 59.85 0.0648 93.00 0.0690 95.05 NE 0.0006 0.0702 0.0436 79.55 0.0639 92.95 0.0681 94.70 DTD 0.0012 0.0696 0.0443 80.60 0.0636 92.85 0.0678 94.10
0.05
EXCH -0.0004 0.0668 0.0295 62.90 0.0632 93.85 0.0674 95.65 NE -0.0008 0.0660 0.0476 85.70 0.0623 94.10 0.0665 95.50 DTD -0.0011 0.0617 0.0480 88.75 0.0582 93.40 0.0621 94.80
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; ICC: intracluster correlation
coefficients; CAC: cluster autocorrelation coefficient; ρ0: within-period ICC under control; ρ1: within-period ICC under treatment;
RVE: robust variance estimator; MD: Mancl and DeRouen.
Prepared using sagej.cls

29
Web Table 4. Results over 2, 000 simulated datasets generated for scenarios 16-18 under the setting in Simulation Study VI. We consider a standard SW-CRT with I = 32, J = 5, Kij = 50, δ(1) ≈ −1.3768, δ(2) ≈ 0.3831, δ(3) ≈ 0.9785, δ(4) ≈ 0.0152, ∆ = 0, ρ0 = 0.01, ρ1 = 0.1, σ2
ε = 1, CAC = 0.5, a continuous
period effect T (tijk) = 0.5t2
ijk + sin(6πtijk)/J , and a cluster-period mixed pattern. Here, sd(·) is the empirical (Monte Carlo) standard deviation. VNaive(·), VRVE(·), VMD
RVE(·) are the average model-based standard error, average model-robust standard error, and average model-robust standard error with the MD correction, respectively. CNaive(·), CRVE(·), CMD
RVE(·) are the empirical coverage percentage of 95% confidence intervals
based on VNaive(·), VRVE(·), and VMD
RVE(·), respectively.
Estimand Model Bias sd(δˆ) VNaive(δˆ) CNaive(δˆ) VRVE(δˆ) CRVE(δˆ) VMD
RVE(δˆ) CMD
RVE(δˆ)
δ(1)
EXCH 0.0006 0.0758 0.0431 76.75 0.0729 93.75 0.0779 95.10 NE 0.0004 0.0747 0.0641 90.85 0.0720 93.75 0.0770 95.40 DTD 0.0003 0.0749 0.0601 89.40 0.0723 93.65 0.0774 95.15
δ(2)
EXCH 0.0006 0.1017 0.0564 73.55 0.0994 94.90 0.1068 96.30 NE 0.0004 0.0998 0.0816 90.65 0.0973 94.90 0.1047 96.45 DTD -0.0002 0.0991 0.0862 92.40 0.0965 94.95 0.1040 96.30
δ(3)
EXCH 0.0025 0.1453 0.0739 70.40 0.1377 93.55 0.1486 95.45 NE 0.0020 0.1442 0.1049 86.10 0.1364 93.50 0.1475 95.55 DTD 0.0021 0.1427 0.1143 89.80 0.1354 93.70 0.1466 95.80
δ(4)
EXCH 0.0022 0.1965 0.1003 70.20 0.1842 93.15 0.2019 94.85 NE 0.0015 0.1987 0.1420 85.55 0.1850 93.40 0.2038 95.50 DTD 0.0015 0.2021 0.1529 87.00 0.1896 93.75 0.2085 95.45
∆
EXCH 0.0015 0.1187 0.0599 69.70 0.1133 93.55 0.1225 95.20 NE 0.0011 0.1178 0.0831 84.95 0.1119 94.15 0.1215 95.40 DTD 0.0009 0.1185 0.0906 87.85 0.1131 93.90 0.1228 95.90
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; RVE: robust variance estimator;
MD: Mancl and DeRouen.
Prepared using sagej.cls

30 Journal Title XX(X)
Web Table 5. Results over 2, 000 simulated datasets generated for scenarios 4-5 under the setting in Simulation Study VII. We consider a standard SW-CRT with I = 96, J = 5, δ = 0, ρ0 = 0.01, ρ1 = 0.1, σ2
ε = 1, CAC = 0.5, and a continuous period effect T (tijk) = 0.5t2
ijk + sin(6πtijk)/J . For recruitment sizes, we consider 1) balanced recruitment with Kij = 50 under both control and treatment, 2) moderately unbalanced recruitment with Kij = 25 under control and Kij = 75 under treatment, and 3) severely unbalanced recruitment with Kij = 10 under control and Kij = 90 under treatment. For each recruitment size, we consider uniform patterns under both conditions, uniform under control but cluster-period mixed under treatment, and cluster-period mixed under both co-
nditions. Here, sd(·) is the empirical (Monte Carlo) standard deviation. VNaive(·), VRVE(·), VMD
RVE(·) are the average model-based standard error, average model-robust standard error, and average model-robust standard error with the MD correction, respectively. CNaive(·), CRVE(·), CMD
RVE(·) are the empirical coverage percentage of 95% confidence intervals based on VNaive(·),
VRVE(·), and VMD
RVE(·), respectively.
Kij Pattern Model Bias sd(δˆ) VNaive(δˆ) CNaive(δˆ) VRVE(δˆ) CRVE(δˆ) VMD
RVE(δˆ) CMD
RVE(δˆ)
50 + 50
U+U
EXCH 0.0015 0.0417 0.0234 74.05 0.0409 94.45 0.0418 94.80 NE 0.0015 0.0418 0.0346 90.10 0.0410 94.50 0.0419 95.00 DTD 0.0017 0.0415 0.0331 89.20 0.0407 94.55 0.0415 95.25
U + CP
EXCH -0.0297 0.0426 0.0234 62.30 0.0412 88.55 0.0421 89.45 NE -0.0294 0.0429 0.0354 82.20 0.0412 88.55 0.0421 89.45 DTD -0.0293 0.0424 0.0339 80.05 0.0410 88.70 0.0419 89.70
CP + CP
EXCH -0.0001 0.0432 0.0234 72.40 0.0417 94.00 0.0425 94.55 NE -0.0003 0.0432 0.0356 88.90 0.0416 93.95 0.0425 94.30 DTD -0.0003 0.0432 0.0342 88.20 0.0415 94.00 0.0424 94.65
25 + 75
U+U
EXCH 0.0008 0.0437 0.0258 75.80 0.0429 94.55 0.0437 95.10 NE 0.0004 0.0421 0.0369 92.05 0.0414 94.65 0.0423 95.05 DTD 0.0007 0.0424 0.0354 90.50 0.0418 94.40 0.0427 94.95
U + CP
EXCH -0.0307 0.0445 0.0258 64.10 0.0439 89.25 0.0448 90.15 NE -0.0322 0.0432 0.0382 84.00 0.0419 87.75 0.0428 88.30 DTD -0.0324 0.0437 0.0367 82.30 0.0423 87.85 0.0432 88.45
CP + CP
EXCH -0.0059 0.0452 0.0258 74.45 0.0440 94.15 0.0450 94.65 NE -0.0057 0.0436 0.0383 91.20 0.0422 93.60 0.0431 94.15 DTD -0.0059 0.0437 0.0368 90.65 0.0426 94.10 0.0435 94.45
10 + 90
U+U
EXCH 0.0014 0.0510 0.0332 80.20 0.0496 94.55 0.0506 94.95 NE 0.0014 0.0482 0.0404 90.65 0.0468 94.45 0.0477 94.95 DTD 0.0013 0.0482 0.0411 91.15 0.0469 94.75 0.0479 95.25
U + CP
EXCH -0.0274 0.0520 0.0331 73.70 0.0511 91.80 0.0522 92.45 NE -0.0291 0.0482 0.0430 87.65 0.0473 90.35 0.0482 91.05 DTD -0.0297 0.0487 0.0432 87.45 0.0477 90.80 0.0487 91.30
CP + CP
EXCH 0.0144 0.0515 0.0331 78.55 0.0513 94.05 0.0523 94.35 NE -0.0144 0.0481 0.0431 90.85 0.0473 93.40 0.0483 93.90 DTD -0.0145 0.0483 0.0432 91.50 0.0478 93.50 0.0488 94.25
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; U: uniform pattern; C: cluster
mixed pattern; CP: cluster-period mixed pattern; RVE: robust variance estimator; MD: Mancl and DeRouen.
Prepared using sagej.cls

31
Web Table 6. Results over 2, 000 simulated datasets generated for scenarios 4-5 under the setting in Simulation Study VII. We consider a standard SW-CRT with I ∈ {16, 32, 96}, J = 5, δ ∈ {0, 2}, ρ0 = 0.01, ρ1 = 0.1, σ2
ε = 1, a continuous period effect T (tijk) = 0.5t2
ijk + sin(6πtijk)/J , and CAC = 0.5. For
recruitment sizes, we consider 1) Kij = 25 under control and Kij = 50, 75, 100, 125 when exposure time is 1, 2, 3, 4, respectively (denoted as S1), and 2) Kij = 10 under control and Kij = 100, 110, 130, 160 when exposure time is 1, 2, 3, 4, respectively (denoted as S2). For each recruitment size, we consider uniform patterns under both conditions, and uniform under control but cluster-period mixed under treatment. Here, sd(·) is the empirical (Monte Carlo) standard deviation. VNaive(·), VRVE(·), V-
MD
RVE(·) are the average model-based standard error, average model-robust standard error, and average model-robust standard error with the MD correction, respectively. CNaive(·), CRVE(·), CMD
RVE(·) are the empirical coverage percentage of 95%
confidence intervals based on VNaive(·), VRVE(·), and VMD
RVE(·), respectively.
δ I Size Pattern Model Bias sd(δˆ) VNaive(δˆ) CNaive(δˆ) VRVE(δˆ) CRVE(δˆ) VMD
RVE(δˆ) CMD
RVE(δˆ)
0
16
S1
U+U
EXCH -0.0040 0.1098 0.0663 80.15 0.0984 92.90 0.1112 95.80 NE -0.0040 0.1081 0.0900 91.90 0.0932 92.05 0.1063 95.10 DTD -0.0036 0.1090 0.0880 90.85 0.0946 91.90 0.1078 95.20
U + CP
EXCH -0.0254 0.1120 0.0662 78.05 0.1014 92.70 0.1149 95.30 NE -0.0281 0.1067 0.0934 92.80 0.0948 91.65 0.1083 94.75 DTD -0.0277 0.1074 0.0916 92.00 0.0961 92.15 0.1096 94.65
S2
U+U
EXCH 0.0005 0.1229 0.0791 83.70 0.1130 92.75 0.1278 95.70 NE 0.0012 0.1164 0.0962 91.25 0.1044 92.35 0.1184 95.35 DTD 0.0003 0.1155 0.0990 92.25 0.1045 92.50 0.1187 95.35
U + CP
EXCH -0.0229 0.1272 0.0788 80.85 0.1159 92.65 0.1313 95.00 NE -0.0264 0.1173 0.1032 92.85 0.1042 92.35 0.1185 94.95 DTD -0.0266 0.1176 0.1047 93.10 0.1054 92.75 0.1200 95.05
32
S1
U+U
EXCH -0.0056 0.0767 0.0470 78.10 0.0737 94.85 0.0782 96.00 NE -0.0048 0.0750 0.0643 91.95 0.0708 94.45 0.0754 95.65 DTD -0.0049 0.0754 0.0624 91.25 0.0716 94.40 0.0762 95.45
U + CP
EXCH -0.0265 0.0802 0.0469 73.65 0.0755 92.40 0.0802 93.80 NE -0.0280 0.0757 0.0668 90.85 0.0714 92.10 0.0762 93.75 DTD -0.0278 0.0757 0.0649 89.75 0.0723 92.55 0.0770 94.15
S2
U+U
EXCH -0.0021 0.0880 0.0560 80.65 0.0839 94.35 0.0890 95.50 NE -0.0026 0.0831 0.0678 90.25 0.0785 94.35 0.0834 95.45 DTD -0.0028 0.0827 0.0698 91.35 0.0783 94.40 0.0833 95.90
U + CP
EXCH -0.0264 0.0929 0.0558 76.25 0.0874 93.10 0.0928 94.55 NE -0.0279 0.0847 0.0735 90.05 0.0791 92.70 0.0841 93.90 DTD -0.0284 0.0850 0.0742 90.00 0.0798 92.80 0.0849 94.10
96
S1
U+U
EXCH -0.0002 0.0440 0.0272 78.85 0.0439 94.80 0.0447 95.20 NE 0.0002 0.0425 0.0373 92.40 0.0423 95.35 0.0432 95.75 DTD 0.0001 0.0430 0.0361 90.45 0.0428 95.25 0.0437 95.45
U + CP
EXCH -0.0254 0.0474 0.0271 67.90 0.0451 89.70 0.0460 90.65 NE 0.0275 0.0449 0.0388 85.05 0.0429 89.05 0.0438 90.20 DTD -0.0274 0.0451 0.0375 83.20 0.0434 89.60 0.0443 90.65
S2
U+U
EXCH 0.0004 0.0492 0.0323 81.35 0.0499 95.45 0.0508 96.05 NE 0.0003 0.0465 0.0390 89.95 0.0469 95.45 0.0479 96.15 DTD 0.0002 0.0465 0.0402 91.05 0.0468 95.00 0.0478 95.35
U + CP
EXCH -0.0258 0.0530 0.0322 71.95 0.0515 91.70 0.0526 92.15 NE -0.0283 0.0484 0.0423 85.90 0.0471 90.45 0.0480 90.95 DTD -0.0292 0.0488 0.0427 86.30 0.0475 89.95 0.0484 90.60
2 U + CP
EXCH -0.0258 0.0530 0.0322 71.95 0.0515 91.70 0.0526 92.15 NE -0.0283 0.0484 0.0423 85.90 0.0471 90.45 0.0480 90.95 DTD -0.0292 0.0488 0.0427 86.30 0.0475 89.95 0.0484 90.60
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; U: uniform pattern; C: cluster
mixed pattern; CP: cluster-period mixed pattern; RVE: robust variance estimator; MD: Mancl and DeRouen.
Prepared using sagej.cls

32 Journal Title XX(X)
Web Table 7. Results over 2, 000 simulated datasets generated for scenarios 16-18 under the setting in Simulation Study VI. We consider a standard SW-CRT with I = 16, J = 5, δ(1) ≈ −1.3768, δ(2) ≈ 0.3831, δ(3) ≈ 0.9785, δ(4) ≈ 0.0152, ∆ = 0, ρ0 = 0.01, ρ1 = 0.1, σ2
ε = 1, CAC = 0.5, and a continuous period
effect T (tijk) = 0.5t2
ijk + sin(6πtijk)/J . For recruitment sizes, Kij = 10 under control and Kij = 100, 110, 130, 160 when exposure time is 1, 2, 3, 4, respectively. For each recruitment size, we consider uniform patterns under both conditions, and uniform under control but cluster-period mixed under treatment. Here, sd(·) is the empirical (Monte Carlo) standard deviation. VNaive(·), VRVE(·), VMD
RVE(·) are the average model-based standard error, average model-robust standard error, and average model-robust standard error with the MD correction, respectively. CNaive(·), CRVE(·), CMD
RVE(·) are the empirical coverage percentage of 95%
confidence intervals based on VNaive(·), VRVE(·), and VMD
RVE(·), respectively.
Pattern Estimand Model Bias sd(δˆ) VNaive(δˆ) CNaive(δˆ) VRVE(δˆ) CRVE(δˆ) VMD
RVE(δˆ) CMD
RVE(δˆ)
δ(1)
EXCH 0.0014 0.1296 0.1003 89.70 0.1184 92.80 0.1341 95.40 NE 0.0017 0.1258 0.1093 92.35 0.1129 92.70 0.1293 95.40 DTD 0.0015 0.1257 0.1084 92.20 0.1128 92.40 0.1294 95.65
δ(2)
EXCH 0.0040 0.1799 0.1338 89.20 0.1610 92.60 0.1853 95.40 NE 0.0045 0.1712 0.1417 92.00 0.1515 92.30 0.1752 95.45 DTD 0.0044 0.1691 0.1484 93.85 0.1492 91.95 0.1728 95.35
δ(3)
EXCH 0.0041 0.2382 0.1723 88.75 0.2131 92.40 0.2483 95.80 U + U NE 0.0047 0.2289 0.1804 90.55 0.2015 91.60 0.2353 95.10 DTD 0.0050 0.2248 0.1915 92.40 0.1983 91.80 0.2325 95.25
δ(4)
EXCH 0.0042 0.3058 0.2147 86.50 0.2704 92.15 0.3192 95.45 NE 0.0044 0.2941 0.2283 90.00 0.2536 90.95 0.3018 94.45 DTD 0.0048 0.2932 0.2429 91.80 0.2537 90.40 0.3025 94.55
∆
EXCH 0.0034 0.2051 0.1506 88.70 0.1832 92.05 0.2125 95.45 NE 0.0038 0.1958 0.1543 90.80 0.1711 91.10 0.1999 95.00 DTD 0.0039 0.1940 0.1625 92.50 0.1698 91.45 0.1989 95.00
δ(1)
EXCH -0.0289 0.1304 0.1005 89.40 0.1196 93.00 0.1355 95.85 NE -0.0293 0.1251 0.1136 94.25 0.1127 92.80 0.1294 95.55 DTD -0.0295 0.1256 0.1119 93.95 0.1131 92.80 0.1302 95.80
δ(2)
EXCH -0.0352 0.1820 0.1344 87.60 0.1643 92.55 0.1892 95.20 NE -0.0362 0.1709 0.1462 92.40 0.1519 92.00 0.1761 94.95 DTD -0.0366 0.1688 0.1538 93.55 0.1504 91.60 0.1747 94.80
δ(3)
EXCH -0.0384 0.2437 0.1734 86.65 0.2190 92.20 0.2556 95.50 U + CP NE -0.0390 0.2300 0.1858 91.30 0.2041 91.90 0.2390 95.40 DTD -0.0385 0.2275 0.1981 93.45 0.2019 92.10 0.2375 95.30
δ(4)
EXCH -0.0433 0.3203 0.2162 84.10 0.2807 92.20 0.3327 95.55 NE -0.0443 0.3034 0.2365 89.75 0.2598 90.30 0.3116 95.20 DTD -0.0414 0.3051 0.2516 91.80 0.2627 90.60 0.3156 95.20
∆
EXCH -0.0365 0.2089 0.1516 87.00 0.1870 92.75 0.2172 95.45 NE -0.0372 0.1961 0.1575 90.45 0.1716 90.95 0.2013 95.40 DTD -0.0365 0.1953 0.1666 92.30 0.1716 91.30 0.2018 95.40
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; U: uniform pattern; CP: cluster
period mixed pattern; RVE: robust variance estimator; MD: Mancl and DeRouen.
Prepared using sagej.cls

33
Web Table 8. Results over 2, 000 simulated datasets generated for scenarios 16-18 under the setting in Simulation Study VI. We consider a standard SW-CRT with I = 32, J = 5, δ(1) ≈ −1.3768, δ(2) ≈ 0.3831, δ(3) ≈ 0.9785, δ(4) ≈ 0.0152, ∆ = 0, ρ0 = 0.01, ρ1 = 0.1, σ2
ε = 1, CAC = 0.5, and a continuous period
effect T (tijk) = 0.5t2
ijk + sin(6πtijk)/J . For recruitment sizes, Kij = 10 under control and Kij = 100, 110, 130, 160 when exposure time is 1, 2, 3, 4, respectively. For each recruitment size, we consider uniform patterns under both conditions, and uniform under control but cluster-period mixed under treatment. Here, sd(·) is the empirical (Monte Carlo) standard deviation. VNaive(·), VRVE(·), VMD
RVE(·) are the average model-based standard error, average model-robust standard error, and average model-robust standard error with the MD correction, respectively. CNaive(·), CRVE(·), CMD
RVE(·) are the empirical coverage percentage of 95%
confidence intervals based on VNaive(·), VRVE(·), and VMD
RVE(·), respectively.
Pattern Estimand Model Bias sd(δˆ) VNaive(δˆ) CNaive(δˆ) VRVE(δˆ) CRVE(δˆ) VMD
RVE(δˆ) CMD
RVE(δˆ)
δ(1)
EXCH -0.0029 0.0916 0.0715 88.85 0.0880 93.45 0.0934 95.2 NE -0.0028 0.0885 0.0773 92.10 0.0849 93.70 0.0906 95.30 DTD -0.0027 0.0885 0.0767 91.85 0.0848 93.85 0.0906 95.30
δ(2)
EXCH -0.0029 0.1265 0.0958 87.60 0.1208 93.90 0.1292 95.05 NE -0.0024 0.1204 0.1009 91.10 0.1149 93.90 0.1232 95.10 DTD -0.0025 0.1186 0.1055 92.85 0.1131 93.60 0.1214 94.85
δ(3)
EXCH -0.0050 0.1690 0.1236 86.70 0.1607 93.80 0.1729 95.50 U + U NE -0.0050 0.1621 0.1292 89.30 0.1535 94.10 0.1653 95.25 DTD -0.0041 0.1596 0.1366 91.55 0.1509 93.85 0.1629 95.45
δ(4)
EXCH -0.0039 0.2155 0.1541 85.10 0.2051 93.75 0.2220 95.75 NE -0.0033 0.2065 0.1635 88.60 0.1952 93.75 0.2120 95.55 DTD -0.0023 0.2068 0.1735 91.10 0.1949 93.65 0.2120 95.15
∆
EXCH -0.0037 0.1447 0.1080 86.75 0.1380 93.95 0.1482 95.30 NE -0.0034 0.1379 0.1108 89.70 0.1309 93.60 0.1410 95.25 DTD -0.0029 0.1367 0.1160 91.70 0.1296 93.90 0.1398 95.35
δ(1)
EXCH -0.0290 0.0924 0.0716 86.45 0.0889 92.75 0.0944 94.20 NE -0.0289 0.0884 0.0808 92.55 0.0847 92.60 0.0905 94.75 DTD -0.0290 0.0889 0.0794 92.15 0.0850 92.60 0.0910 94.65
δ(2)
EXCH -0.0310 0.1258 0.0961 86.45 0.1227 93.85 0.1313 95.55 NE -0.0315 0.1176 0.1044 91.75 0.1144 93.30 0.1229 95.55 DTD -0.0316 0.1161 0.1097 93.65 0.1132 92.90 0.1216 95.45
δ(3)
EXCH -0.0351 0.1692 0.1241 85.45 0.1642 93.85 0.1769 95.45 U + CP NE -0.0349 0.1592 0.1331 90.00 0.1542 93.85 0.1663 95.60 DTD -0.0338 0.1573 0.1416 92.55 0.1522 93.95 0.1645 95.30
δ(4)
EXCH -0.0336 0.2186 0.1549 84.95 0.2126 94.30 0.2307 96.40 NE -0.0321 0.2059 0.1697 90.35 0.1993 94.25 0.2174 95.85 DTD -0.0282 0.2069 0.1799 92.00 0.2007 94.20 0.2191 95.65
∆
EXCH -0.0322 0.1439 0.1085 86.50 0.1402 93.95 0.1507 95.35 NE -0.0318 0.1343 0.1130 90.50 0.1303 93.95 0.1407 95.55 DTD -0.0307 0.1337 0.1191 92.35 0.1299 93.75 0.1404 95.35
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; U: uniform pattern; CP: cluster
period mixed pattern; RVE: robust variance estimator; MD: Mancl and DeRouen.
Prepared using sagej.cls

34 Journal Title XX(X)
Web Table 9. Results over 2, 000 simulated datasets generated for scenarios 16-18 under the setting in Simulation Study VI. We consider a standard SW-CRT with I = 96, J = 5, δ(1) ≈ −1.3768, δ(2) ≈ 0.3831, δ(3) ≈ 0.9785, δ(4) ≈ 0.0152, ∆ = 0, ρ0 = 0.01, ρ1 = 0.1, σ2
ε = 1, CAC = 0.5, and a continuous period
effect T (tijk) = 0.5t2
ijk + sin(6πtijk)/J . For recruitment sizes, Kij = 10 under control and Kij = 100, 110, 130, 160 when exposure time is 1, 2, 3, 4, respectively. For each recruitment size, we consider uniform patterns under both conditions, and uniform under control but cluster-period mixed under treatment. Here, sd(·) is the empirical (Monte Carlo) standard deviation. VNaive(·), VRVE(·), VMD
RVE(·) are the average model-based standard error, average model-robust standard error, and average model-robust standard error with the MD correction, respectively. CNaive(·), CRVE(·), CMD
RVE(·) are the empirical coverage percentage of 95%
confidence intervals based on VNaive(·), VRVE(·), and VMD
RVE(·), respectively.
Pattern Estimand Model Bias sd(δˆ) VNaive(δˆ) CNaive(δˆ) VRVE(δˆ) CRVE(δˆ) VMD
RVE(δˆ) CMD
RVE(δˆ)
δ(1)
EXCH -0.0003 0.0530 0.0414 87.55 0.0523 94.95 0.0534 95.25 NE -0.0003 0.0514 0.0445 91.60 0.0508 94.65 0.0519 95.25 DTD -0.0002 0.0513 0.0442 91.40 0.0507 94.65 0.0518 94.95
δ(2)
EXCH -0.0008 0.0739 0.0555 87.00 0.0719 94.20 0.0735 94.85 NE -0.0007 0.0708 0.0583 90.20 0.0688 94.65 0.0704 95.00 DTD -0.0007 0.0696 0.0609 92.30 0.0676 94.60 0.0692 95.15
δ(3)
EXCH -0.0014 0.0986 0.0717 85.45 0.0961 93.60 0.0985 94.20 U + U NE -0.0015 0.0951 0.0748 88.15 0.0923 94.05 0.0945 94.75 DTD -0.0012 0.0936 0.0790 90.70 0.0906 94.75 0.0929 95.10
δ(4)
EXCH -0.0017 0.1271 0.0895 83.95 0.1234 94.00 0.1267 94.50 NE -0.0018 0.1229 0.0946 87.10 0.1184 94.25 0.1216 94.60 DTD -0.0018 0.1233 0.1003 89.40 0.1179 93.70 0.1212 94.70
∆
EXCH -0.0011 0.0849 0.0627 86.40 0.0826 94.25 0.0845 94.80 NE -0.0011 0.0815 0.0642 88.60 0.0789 94.35 0.0808 95.00 DTD -0.0010 0.0808 0.0671 90.20 0.0780 94.60 0.0799 95.10
δ(1)
EXCH -0.0308 0.0534 0.0414 81.65 0.0527 91.15 0.0538 91.50 NE -0.0307 0.0517 0.0466 87.70 0.0505 90.65 0.0516 91.20 DTD -0.0308 0.0520 0.0458 86.95 0.0507 90.65 0.0519 91.25
δ(2)
EXCH -0.0344 0.0735 0.0557 82.60 0.0730 91.75 0.0746 92.65 NE -0.0346 0.0695 0.0604 87.30 0.0684 91.50 0.0700 92.00 DTD -0.0348 0.0691 0.0634 89.85 0.0676 91.75 0.0692 92.40
δ(3)
EXCH -0.0386 0.1002 0.0720 81.65 0.0981 92.55 0.1005 93.20 U + CP NE -0.0384 0.0954 0.0771 85.75 0.0925 92.40 0.0948 93.30 DTD -0.0372 0.0941 0.0819 89.35 0.0912 92.40 0.0935 92.90
δ(4)
EXCH -0.0418 0.1289 0.0899 80.90 0.1272 93.50 0.1306 94.00 NE -0.0405 0.1232 0.0983 86.25 0.1202 92.80 0.1236 93.30 DTD -0.0366 0.1238 0.1041 88.50 0.1207 92.50 0.1242 93.15
∆
EXCH -0.0364 0.0847 0.0629 82.15 0.0836 92.15 0.0856 92.65 NE -0.0361 0.0803 0.0655 85.60 0.0783 91.95 0.0803 92.70 DTD -0.0349 0.0800 0.0689 88.40 0.0779 92.05 0.0799 92.85
EXCH: simple exchangeable; NE: nested exchangeable; DTD: discrete-time exponential decay; U: uniform pattern; CP: cluster
period mixed pattern; RVE: robust variance estimator; MD: Mancl and DeRouen.
Prepared using sagej.cls

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:29.436Z
- **Text Length:** 105285 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 34 of 34
