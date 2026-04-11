# PDF Document: Shen et al. - 2025 - Discovering Spatial Patterns of Readmission Risk Using a Bayesian Competing Risks Model with Spatial.pdf

**File Path:** Shen et al. - 2025 - Discovering Spatial Patterns of Readmission Risk Using a Bayesian Competing Risks Model with Spatial.pdf

**Processed Date:** 2026-02-10T18:17:28.557Z

**File Size:** 1555.67 KB

**Total Pages:** 35

**Extracted Pages:** 35

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3376

**Title:** Discovering Spatial Patterns of Readmission Risk Using a Bayesian Competing Risks Model with Spatially Varying Coefficients

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Discovering Spatial Patterns of Readmission
Risk Using a Bayesian Competing Risks
Model with Spatially Varying Coefficients
Yueming Shen1,2, Christian A. Pean3, David B. Dunson1, and
Samuel I. Berchuck1,2,4
1Department of Statistical Science, Duke University
2Duke AI Health, Duke University
3 Department of Orthopaedic Surgery, Duke University
4Department of Biostatistics and Bioinformatics, Duke University
November 26, 2025
Abstract
Time-to-event models are commonly used to study associations between risk factors and disease outcomes in the setting of electronic health records (EHR). In recent years, focus has intensified on social determinants of health, highlighting the need for methods that account for patients’ locations. We propose a Bayesian approach for introducing point-referenced spatial effects into a competing risks proportional hazards model. Our method leverages Gaussian process (GP) priors for spatially varying -
intercept and slope. To improve computational efficiency under a large number of spatial locations, we implemented a Hilbert space low-rank approximation of the GP. We modeled the baseline hazard curves as piecewise constant, and introduced a novel multiplicative gamma process prior to induce shrinkage and smoothing. A loss-based clustering method was then used on the spatial random effects to identify high-risk regions. We demonstrate the utility of this method through simulation and a real-world-
 analysis of EHR data from Duke Hospital to study readmission risk of elderly patients with upper extremity fractures. Our results showed that the proposed method improved inference efficiency and provided valuable insights for downstream policy decisions.
Keywords: Competing risks survival analysis; Geospatial analysis; Electronic health record data; Scalable Gaussian processes
1
arXiv:2511.20616v1 [stat.AP] 25 Nov 2025

1 Introduction
Hospital readmissions following surgical treatment for upper extremity fractures in older
adults are a serious clinical and health system concern. These patients are often frail and
medically complex, recovering from traumatic injuries that carry a high risk of complications,
functional decline, and adverse events (Mathew et al. 2016, Liu et al. 2022, Lee et al. 2025).
Consequently, they face both elevated readmission rates and substantial mortality risk,
with many dying before a readmission can occur (Hao et al. 2019, Bourriquen et al. 2024,
Wang et al. 2024). Standard analyses of readmission outcomes that ignore this competing
risk provide a misleading picture of patient prognosis and the factors driving readmission.
At the same time, readmissions impose a heavy burden on patients and families and
contribute major financial cost to the healthcare system, with average readmission costs
12.4% higher than initial admissions in 2020 ($16,300 vs. $14,500) (HCUP 2023) and total
readmission expenditures exceeding $50 billion in 2018 (Weiss & Jiang 2021). Together, these
considerations make fracture readmissions an especially important setting for developing
more sophisticated statistical tools. In particular, there is a need for methods that can
accommodate the competing mortality risk while exploiting the rich patient-level information
available in modern electronic health records (EHRs), including geocoded location data
that capture unmeasured spatial determinants of health.
Recent work has recognized that patient outcomes are shaped not only by individual-level
clinical characteristics but also by broader contextual factors, including geographic variation
in healthcare access, socioeconomic conditions, and community-level resources (Vrtikapa
et al. 2025). In the existing Bayesian competing risks literature, these unmeasured spatial
determinants have been modeled using areal random effects, typically specified through
conditional autoregressive (CAR) or intrinsic CAR (ICAR) priors. For example, CAR-based
spatial frailty models have been applied to gastrointestinal cancer outcomes (Hesam et al.
2

2018), and ICAR extensions of the Fine-Gray model have been used in HIV/AIDS studies
(Momenyan et al. 2022). These approaches demonstrate that explicitly accounting for
spatial dependence can improve inference on covariate effects and yield more accurate risk
predictions when outcomes cluster geographically. However, areal models are designed for
settings where patients are aggregated into regions such as counties, ZIP codes, or hospital
catchments. In contrast, modern EHRs often contain patient-level geocoded addresses.
Aggregating such data into arbitrary administrative units risks loss of resolution and residual
confounding, motivating the need for point-referenced spatial models that directly leverage
patient-level location information (Banerjee et al. 2003). To our knowledge, no existing
work has integrated point-referenced spatial processes into a competing risks survival model.
In this article, we develop a Bayesian competing risks survival model that incorporates
point-referenced spatial effects. This framework allows us to simultaneously account for
the competing mortality risk that is central to older fracture patients, capture unmeasured
spatial confounding at the patient level, and generate high-resolution maps of readmission
risk. We use a novel multiplicative gamma process prior (Bhattacharya & Dunson 2011)
for the baseline hazard rates to encourage shrinkage and smoothing, and we model the
spatial effects through Gaussian process (GP) priors. However, the scale of modern EHR
data presents a serious computational barrier, as the number of unique patient locations
can be very large. To address this, we adopt a Hilbert space GP approximation (Solin &
Särkkä 2020) that enables scalable Bayesian inference while retaining the key advantages of
GP-based spatial modeling. In addition, following Palmer & Dunson (2025), we construct
Bayes-optimal clusters for the spatial random effects to identify high-risk areas. While
our motivating application is hospital readmission following upper extremity fracture, the
proposed approach is broadly applicable to other clinical contexts where competing risks
and spatial dependence are present. The remainder of the article is organized as follows.
3

Section 2 describes our data sample, EHR data from Duke University. Section 3 introduces
the proposed model, and Section 4 reports results from a simulation study evaluating
performance and scalability. Section 5 presents the data analysis of fracture readmissions,
and finally Section 6 concludes with implications, limitations, and directions for future
research.
2 EHR Data and Exploratory Analysis
The past decade has seen widespread adoption of EHRs in the U.S. healthcare system. In
2008, only 7.6% of hospitals had a basic EHR system; by 2020, this number had risen to
81.2% (Jiang et al. 2023). EHRs now serve as indispensable infrastructure for clinical and
population health research, offering large-scale, longitudinal, and granular patient-level data.
Unlike registry or survey data, EHRs are not designed for research but are by-products of
routine clinical care, which makes them both uniquely rich and methodologically challenging:
They integrate diverse information sources (administrative, clinical notes, billing, imaging,
lab results), follow patients irregularly through time, and frequently contain missing or
inconsistent values. For this study, we sourced data from the Duke Enterprise Data Unified
Content Explorer. It is a query platform that supports data exploration, cohort identification,
and data extraction from Duke’s enterprise data warehouse which contains raw EHR data
with encounter records from three Duke-affiliated hospitals and more than 300 outpatient
clinics (Horvath et al. 2014, Hurst et al. 2021).
Our study included patients who underwent operative orthopaedic trauma fracture fixation
of the upper extremity between January 2015 and March 2024, were at least 50 years
old at the time of their initial fracture surgery, and resided in Durham county (where
the main Duke hospital is located) at the time of the surgical procedure or one of the
five neighboring North Carolina counties (Chatham, Orange, Person, Granville, or Wake).
4

Patients were identified using Current Procedural Terminology (CPT) codes, aligned with
Accreditation Council for Graduate Medical Education guidelines for orthopaedic trauma
cases, together with International Classification of Diseases (ICD) diagnosis codes. Those
receiving nonoperative management or presenting with multiple fractures were excluded.
Full inclusion and exclusion CPT and ICD codes are documented in Section 1 of the
Supplementary Materials. This study was approved by the Duke University Institutional
Review Board and adhered to the Declaration of Helsinki and all applicable laws. It was
approved with a waiver of informed consent due to the retrospective nature of the work.
And because the underlying EHRs contain protected health information, we cannot share
the data publicly.
A total of 1,245 patients met the criteria, of whom 43 had incomplete covariate information.
Given the low missingness percentage, we performed a complete-case analysis on 1,202
patients. Among them, 255 experienced readmission and 109 died during the study period.
See Figure 1 for distributions of the time to events. We see a spike of readmission within the
first year of the initial surgery which is consistent with findings in existing clinical literature
that readmissions are often front-loaded (Tian et al. 2023). Death events are comparatively
more spread out over the 10 year period.
The EHRs capture a timeline of patient encounters across Duke–affiliated institutions (see
Figure 2). We extracted the following patient information at initial encounter: age, sex, race,
smoking status, relationship status, insurance type, and residential location. See Section 3
of the Supplementary Materials for how we grouped insurance types from the raw EHR data.
Medical records prior to the initial surgery were used to derive the Elixhauser readmission
comorbidity score, following the 2024 Elixhauser comorbidity software user guide (Agency for
Healthcare Research and Quality 2023). This comorbidity score measures patient pre-existing
health conditions, with higher values indicating higher readmission risk. Medical records two
5

0
20
40
60
02468 Time to event (years)
Frequency
Readmission
A
0
5
10
15
20
02468 Time to event (years)
Frequency
Death
B
Figure 1: Distributions of the observed time to events. Panel A: Readmission events. Panel
B: Death events.
days after the initial surgery were used to extract time to events (see Figure 2). The two-day
window was used to ensure that events were separate from the initial encounters. Events
of interest were death and readmission, with readmission defined as unplanned inpatient
hospitalization, excluding psychiatric, hospice, rehabilitation, and elective admissions.
Each patient was observed until the first occurrence of (1) readmission, (2) death, or
(3) administrative censoring at the end of the study, i.e., for individual i, we observe
(Ti, ∆i) where Ti is time to first event and ∆i ∈ {1 (readmission), 2 (death), 0 (censored)}.
This induces a competing risks data structure: Patients who die cannot be subsequently
readmitted, and readmitted patients are not followed further for mortality.
Table 1 in the Supplementary Materials presents the basic demographics of our patient
cohorts, and we see notable differences in readmission rates across patient subgroups:
Patients without partners had substantially higher rates (28% vs. 17%), as did ever-smokers
(24% vs. 19%). By race, Black patients had the highest rate (28%), compared with 21%
among White patients and 7% among other minority groups. Patients with government
insurance had the highest readmission rate at 28%, with 13% for commercial insurance,
6

Figure 2: Visualizing the EHR data. Both the covariates and outcomes are defined based on
the initial encounter (IE) date as an anchor. The comorbidity score is defined using medical
records collected prior to the IE (time period in yellow); all other covariates are extracted
at IE (time point in pink); event times are derived using clinical records at least two days
after the IE (time period in purple). In this example, the patient was readmitted after the
IE and then died, hence the observed data are readmission time T , with event type ∆ = 1.
11% for WCSC, and 9% for uninsured. This pattern likely reflects the fact that government
insured populations are generally older and have lower-income (Kaiser Family Foundation
2024, Medicare Payment Advisory Commission 2024). As expected, age and comorbidity
were positively associated with readmission risk: Readmitted patients were, on average,
four years older than those not readmitted, and had comorbidity scores higher by 4.7 points.
No gender differences were observed though, with approximately 21% readmission rate in
both men and women.
Figure 3 displays readmission outcomes aggregated to the Zip Code Tabulation Area (ZCTA)
level in comparison to 2023 median household income data. Despite noise, spatial patterns
7

Durham
Pittsboro
Siler City
Goldston
Chapel Hill
Hillsborough
Roxboro Oxford
Butner
Raleigh
Cary Apex
Morrisville
Wake Forest
Holly Springs
Patient count 0 20 40 60 80
A
Durham
Pittsboro
Siler City
Goldston
Chapel Hill
Hillsborough
Roxboro Oxford
Butner
Raleigh
Cary Apex
Morrisville
Wake Forest
Holly Springs
Ratio of observed to average readmission rate 0123
B
Durham
Pittsboro
Siler City
Goldston
Chapel Hill
Hillsborough
Roxboro Oxford
Butner
Raleigh
Cary Apex
Morrisville
Wake Forest
Holly Springs
Median household income ($10k) 0 4 8 12 16
C
Figure 3: Spatial patterns of the empirical data at ZCTA level. Panel A: Patient count
(gray areas indicate no patients). Panel B: Ratio of observed to average readmission rate.
Panel C: 2023 median household income (in $10k).
emerge: Readmission rates are slightly elevated in East Durham, a predominantly lower
income area, and reduced in higher-income areas such as Chapel Hill, Morrisville and Cary.
These patterns suggest potential spatial correlation in outcomes driven by unmeasured
confounders, which motivate incorporation of spatial random effects.
3 Model
We propose a Bayesian competing risks proportional hazard model with spatially varying
coefficients for point-referenced data. Section 3.1 introduces the Bayesian competing risks
model with proportional cause-specific hazard rates. Section 3.2 discusses how we model
the baseline hazard rates as piecewise constant, and the use of a multiplicative gamma
process prior for shrinkage. Section 3.3 presents the incorporation of spatial intercepts and
spatial slopes through Gaussian process (GP) priors to capture point-referenced spatial
dependence. Because full GP models are computationally prohibitive, Section 3.4 outlines
a low-rank approximation method for scalability. Finally in Section 3.5, we discuss a
loss-based Bayes-optimal clustering method with uncertainty quantification.
8

3.1 Bayesian Competing Risks Proportional Hazard Model
The two most commonly used competing risks regression models are the proportional
sub-distributional hazard model, also known as the Fine-Gray model, and the proportional
cause-specific hazard model (Haller et al. 2013). The Fine-Gray model is suited for evaluating
covariate effects on sub-distributional hazard which allows for influence from competing
risk events, whereas the proportional cause-specific hazard model is preferable if the focus
is etiological (Dignam et al. 2012). As we are primarily interested in covariate effects on
readmission risk alone, we adopted the proportional cause-specific hazard model.
Suppose there are n observations and m competing risk events. Let i = 1, . . . , n index the
observations, and j = 1, . . . , m index the risk types. For observation i, let xi ∈ Rp denote
its covariates, Ti1, . . . , Tim denote its latent event times, and Ti = minj≤m Tij denote time
to the first event. The cause-specific hazard rate for risk type j at time t given covariates
xi is defined as λj(t | xi) = limh→0 P r[t ≤ Ti ≤ t + h, Ti = Tij | Ti ≥ t, xi]/h. Under the
proportional hazard assumption, λj(t | xi) = λ0j(t) exp(x⊤
i βj), where λ0j(t) is the baseline
hazard rate for risk type j at time t, and βj ∈ Rp are the regression coefficients for risk type j.
The total hazard rate is the sum of the cause-specific hazard rates λ(t | xi) = ∑m
j=1 λj(t | xi),
and the survivor function is S(t | xi) = exp
(
−
∫t
0 λ(u | xi)du
)
.
In this formulation, censoring is assumed to be independent of the event times, which
is plausible for our application as censoring occurs only at the administrative study end.
No intercept term is modeled because it is not separately identifiable from the baseline
hazard level. To incorporate point-referenced spatial random effects, we implemented a
full Bayesian analysis as frequentist methods would be computationally infeasible. For
the regression coefficients βj’s, we used a normal inverse-gamma prior: βj ∼ Np(0, σ2I),
σ2 ∼ IG(aσ, bσ). Other priors are discussed in the following sections.
9

3.2 Modeling the baseline hazard rates
The baseline hazard curves are typically nuisance parameters. The simplest approach is to
use parametric models, for example, assuming the event times follow Exponential or Weibull
distributions (Wang & Ghosh 2003, Samanta & Kundu 2021). Such parametric specifications
yield parsimonious models but lack flexibility to capture complex hazard shapes in real
data. A more flexible alternative is piecewise-constant hazard within pre-specified time
intervals (Ibrahim et al. 2001). Independent gamma priors on interval-specific hazard rates
are commonly used (Hu et al. 2009). This approach accommodates a wide range of hazard
shapes, but without shrinkage across intervals, can produce unstable estimates in regions
with sparse data; moreover, the prior is not coherent under changes to the time partition,
requiring manual rescaling of hyperparameters for consistency. Nonparametric stochastic
process priors address these issues by modeling the cumulative baseline hazard coherently
and adaptively, without dependence on a fixed partition. Common choices include the
gamma process prior (Kalbfleisch 1978) and the beta process prior (Hjort 1990) on the
cumulative baseline hazard curve, both leading to conjugate posterior distributions and
inducing shrinkage towards a user-specified prior mean cumulative hazard. However, this
shrinkage acts globally rather than locally, offering no direct control over smoothness of the
hazard curves. Specifying a realistic prior mean function can also be difficult when prior
information is limited.
To balance flexibility and computational tractability, we model the baseline hazard as
piecewise constant with a multiplicative gamma process prior (Bhattacharya & Dunson
2011). Specifically, we partition time into k intervals 0 = s0 < s1 < · · · < sk, with sk set
to the maximum observed event or censoring time. For risk type j, we let λ0j(t) = λjl for
t ∈ (sl, sl+1], and assign the following prior:
λjl =
l
∏
r=0
ψjr, ψj0 ∼ Ga(a0, b0), ψjr≥1 ∼ Ga
(κ
sr − sr−1
,κ
sr − sr−1
)
, κ ∼ IG(a1, b1).
10

This construction centers λjl at λj(l−1), inducing autocorrelation and hence shrinkage across
adjacent intervals. The scaling by (sr − sr−1)−1 ensures that the degree of autocorrelation is
invariant to the grid resolution. For fixed time points t1 < t2, the prior correlation between
the corresponding baseline hazard rates λjl and λj(l+q) given κ, a0 and b0 is
[ (1 + a0) ∏l
r=1 ((sr − sr−1)/κ + 1) − a0
(1 + a0) ∏l+q
r=1 ((sr − sr−1)/κ + 1) − a0
]1/2
,
and it converges to [((1 + a0) exp(t1/κ) − a0)/((1 + a0) exp(t2/κ) − a0)]1/2 as k → ∞. The
correlation increases as a0 decreases or κ increases, with κ being the key driver. A hyperprior
on κ allows the data to inform the smoothness level.
This setup combines computational efficiency with adaptive smoothness. The piecewise
constant representation supports scalable inference, and with sufficiently many intervals, it
can approximate a wide variety of hazard shapes; meanwhile, the multiplicative gamma
process prior introduces coherent shrinkage across intervals. Together they yield stable, yet
flexible, estimation of the baseline hazard curves.
3.3 Modeling point-referenced spatial effects
To introduce spatial effects into this model, letting di ∈ R2 denote the geographic coordinates
of observation i, we set
λj(ti | xi) = λ0j(ti) exp
(
x⊤
i βj + θ0j(di) + (θ1j(di) + βwj)wi
)
, (1)
where θ0j(di) is the spatial intercept at location di for risk type j, θ1j(di) is the spatial
slope, and wi ∈ R is the covariate for which we study the spatial variation of its association
with the risk events. Here we assume wi is not part of xi and its fixed effect is captured by
βwj. In this model, level of the spatial intercepts is not separately identifiable from the level
of the baseline hazard rates, and level of the spatial slopes is not separately identifiable
11

from βwj’s. We model point-referenced spatial dependence through GP priors:
θ0j(·) ∼ GP (0, Kν(τ0j, l0j)) ⊥ θ1j(·) ∼ GP (0, Kν(τ1j, l1j)) , (2)
where Kν(τ, l) denotes the Matérn covariance function with parameter ν, magnitude
parameter τ and lengthscale parameter l. We use independent truncated normal priors
T N (0, σ2
τ ) for τ0j and τ1j’s, and independent Ga(al, bl) priors for l0j and l1j’s. Realistically,
θ0j and θ1j are likely to be correlated, but we use independent priors because this dependence
is not central to our objectives, is difficult to identify in a competing risks setting, and the
independence assumption substantially improves computational efficiency.
An additional advantage of GP priors is that they facilitate kriging, i.e., spatial prediction
at new, unobserved locations (Banerjee et al. 2003). Taking the spatial intercept as an
example. Let θ0j ∈ Rn denote the spatial intercepts for risk type j at observed locations, and
suppose we are interested in the spatial intercepts for q new locations d∗
1, . . . d∗
q, denoted as
θ∗
0j ∈ Rq. Let (T, δ) denote the data where T ∈ Rn are the event times, and δ ∈ {0, 1, 2}n
are the event types. Let Ω = (β, λ, τ , l) denote all the model parameters consisting of the
regression coefficients, baseline hazard rates, GP magnitude and lengthscale parameters.
The posterior predictive distribution for θ∗
0j can be obtained as:
f (θ∗
0j | T, δ) =
∫
f (θ∗
0j | θ0j, Ω)f (θ0j, Ω | T, δ)dθ0jdΩ,
where f (θ0j, Ω | T, δ) is the posterior distribution for θ0j and Ω, and f (θ∗
0j | θ0j, Ω) is the
kriging distribution. Given Ω, let Σ ∈ Rn×n denote the covariance matrix for θ0j, Σ∗ ∈ Rq×q
denote the covariance matrix for θ∗
0j, and Σ+ ∈ Rn×q denote their cross covariance matrix.
Under the GP, θ0j and θ∗
0j are jointly multivariate normal given Ω:

  
θ0j
θ∗
0j

  
∣ ∣ ∣ ∣ ∣ ∣
Ω∼N

  

  
0n
0q

  
,

  
Σ Σ+
Σ⊤
+ Σ∗

  

  
.
12

Therefore the kriging distribution is a q-dimensional multivariate normal by standard
properties of the multivariate normal distribution:
θ∗
0j | θ0j, Ω ∼ N (Σ⊤
+Σ−1θ0j, Σ∗ − Σ⊤
+Σ−1Σ+). (3)
This closed-form expression enables easy posterior predictive sampling of spatial random
effects at kriging locations within the Bayesian model fitting procedure, providing predictions
with uncertainty quantification.
3.4 Scalable Gaussian Process
Modeling spatial intercepts and spatial slopes for the two competing risk events in our data
requires four GPs. A full GP implementation scales as O(n3) in computation and O(n2) in
memory, which is computationally infeasible for our data even with a moderate sample size
of n = 1, 202. Therefore, we explored scalable methods and implemented Hilbert Space GP
(HSGP), a low-rank approximation method introduced by Solin & Särkkä (2020). HSGP
approximates the n × n covariance matrix Σ as ΦSΦ⊤, where Φ ∈ Rn×m is a feature matrix
which only depends on the observed locations and the size of the geographical area for
approximation, S ∈ Rm×m is diagonal which only depends on the covariance function and
its parameters, and m is the number of basis functions. This approximation reduces the
computation complexity from O(n3) to O(nm + m).
Kriging under HSGP is also straightforward. Let Φ∗ ∈ Rq×m denote the feature matrix for
the kriging locations. If m ≥ n, the kriging distribution is analogous to equation (3):
θ∗
0j | θ0j, Ω ∼ N ((Φ∗SΦ⊤)(ΦSΦ⊤)−1θ, (Φ∗SΦ∗⊤) − (Φ∗SΦ⊤)(ΦSΦ⊤)−1(ΦSΦ∗⊤)).
If m < n, (ΦSΦ⊤) is not invertible. In this case the kriging distribution is degenerate,
with θ∗
0j | θ0j, Ω = (Φ∗SΦ⊤)(ΦSΦ⊤)+θ0j, where A+ denote a generalized inverse of matrix
A. In particular, when using a non-centered parameterization in Stan (Stan Development
13

Team 2025) where θ0j is sampled as ΦS1/2z for z ∼ Nm(0, I), kriging can be done by simply
setting θ∗
0j | θ0j, Ω to Φ∗ S1/2z. See Section 4 of the Supplementary Materials for details.
We followed Riutort-Mayol et al. (2023) to implement HSGP, and used an iterative procedure
to decide m and the other tuning parameters. We also carried out a simulation study to
verify HSGP approximation accuracy. See discussions in Section 4.
3.5 Loss-based clustering
One of our research goals is to identify high-risk areas. Palmer & Dunson (2025) proposed a
Bayesian decision theoretic approach to cluster patients in non-spatial settings based on the
posterior distribution of their random effects and a loss function. We adapt this approach
to spatial clustering, producing point estimates and uncertainty quantification for clusters.
For each spatial process, we want to estimate a partition C = {C1, . . . , CK} for the kriging
locations, where each Ck ⊂ {1, . . . , q} are indices such that the locations are placed into K
distinct clusters. To simplify the notation, let θ1, . . . , θq denote the spatial random effects
at q kriging locations, and let πpost denote their posterior distribution. We seek cluster
labels l = (l1, . . . , lq) and cluster centers c = (c1, . . . , cK) which minimize the posterior
expected K-means loss: (lˆ, cˆ) = argminl:|C|=K,c∈RK
∑K
k=1
∑
i∈Ck Eπpost [(θi − ck)2]. As shown
by Proposition 3.1 in Palmer & Dunson (2025), this is equivalent to solving for:
(lˆ, ˆc) = argmin
l:|C|=K,c∈RK
K
∑
k=1
∑
i∈Ck
(Eπpost [θi] − ck)2,
which can be easily obtained by applying K-mean clustering to the posterior mean of the
θi’s. Conditioning on the estimated cluster centers ˆc, we can characterize uncertainty in
clustering through the posterior probability of assigning each location i to cluster k:
P r(li = k | c = cˆ) = Eπpost
[
1
(
argmin
k′ ∈{1,...,K }
(θi − cˆk′)2 = k
)]
.
14

4 Simulation study motivated by EHR data
Motivated by the EHR data application, we designed a simulation study with three objectives:
(1) understand the performance of our proposed model under model misspecification; we
used independent Gaussian process (GP) priors between spatial slopes and intercepts of
the same risk event, and also across risk events, we wanted to see how this model performs
under EHR data generated from more complex spatial dependence structure, (2) compare
the proposed Bayesian model performance with frequentist competitors, and (3) evaluate
the accuracy of the Hilbert Space GP (HSGP) approximation to the full GP.
To better emulate real EHR data, we based the simulation study on a subset of our
application data. The sample size was chosen to be n = 225 so that full GP implementation
was feasible. Prior to use, the data were de-identified by capping age at 80, jittering
locations, after which the coordinates were centered and rescaled so that all observations
lie within the square [−1, 1] × [−1, 1] centered at the origin. Using all available covariates
and locations, we generated competing risks datasets from the model in equation (1). But
instead of using independent spatial intercepts and slopes described in equation (2), we
simulated the spatial effects using the linear model of coregionalization (LMC) (Banerjee
et al. 2003), where the spatial intercepts and slopes were generated as linear combinations
of eight independent but not identically distributed GPs. This setup enabled assessment of
our model’s performance for data with more complicated spatial patterns.
We generated 500 competing risks datasets with m = 2 risk types, each with 40% censored
observations. There were a total of p = 11 covariates, including age, sex, race, smoking
status, relationship status, insurance type and comorbidity score, among which we modeled
spatial slopes for comorbidity. The true regression coefficients for comorbidity were set to
0.5 for risk type 1 and −0.7 for risk type 2. The other true regression coefficient βj’s were
generated from N (0, 0.25) and then fixed for all the datasets. The true baseline hazard
15

rates were parameterized as λ0j(t) = γjαjtαj−1 exp(cj), with γ1 = 1, γ2 = 2, a1 = 10/3,
α2 = 2, c1 = −10, and c2 = 5. We used k = 30 equally distanced knots, with sk set to the
maximum event/ censoring time of each simulated dataset. The remaining hyperparameters
matched those in the real-data analysis: aσ = 1, bσ = 1, a0 = 1, b0 = 1, a1 = 2 and b1 = 40.
Matérn 3/2 covariance function was used for the GPs, with σ2
τ = 16, al = 2, and bl = 1 as
its hyperparameters. Section 5 provides the rationale for these choices.
We carried out Bayesian analysis using both GP and HSGP, where four parallel chains were
run, each with 1,000 burn-in, followed by 4,000 iterations, thinned every 5th iteration. In
order to study the spatial pattern, we set the kriging locations to be on a 21 × 21 grid in the
2 × 2 square, and obtained posterior predictive samples for θ∗
0j and θ∗
1j’s at these locations.
For comparison, we considered two frequentist models. The first (Coxph) was a competing
risks proportional hazards model without spatial effects, implemented via the coxph function
in the survival R package (Therneau 2024). The same function was used for the second
model (Coxph+group) where we further grouped individuals into 9 location-based clusters
using the R kmeans function, and included cluster label as a covariate to approximate areal
spatial effects. And we made sure all the runs converged within the maximum iteration
limit. We chose to use Coxph+group to capture spatial effects because we were unable
to identify a reliable implementation of competing risks models with random effects in
standard R packages.
Now we present model performance results on the regression coefficients. Table 1 reports
root mean squared errors (RMSE) of the regression coefficients for risk type 1, computed
using the true parameters and point estimates from the 500 simulated datasets. For the
frequentist methods, point estimates were taken directly from the fitted models, while for
the Bayesian models, we used the posterior means. As the fixed effect for comorbidity
(βw,1) is not separately identifiable from the level of the spatial slopes, we constrained the
16

Table 1: Risk type 1 regression coefficients RMSE from simulation study.
Model β1,1 β2,1 β3,1 β4,1 β5,1 β6,1 β7,1 β8,1 β9,1 β10,1 βw,1
Coxph 1.33 3.75 0.72 0.41 0.84 0.44 0.53 2.65 10.78 0.26 0.37 Coxph+groups 1.51 3.87 0.77 0.50 1.04 0.49 0.62 2.74 10.93 0.31 0.39 BSp GP 0.31 0.24 0.25 0.31 0.30 0.24 0.29 0.44 0.51 0.23 0.38 BSp HSGP 0.31 0.24 0.25 0.31 0.30 0.24 0.29 0.45 0.51 0.23 0.39
posterior spatial slopes across all kriging locations to sum to zero. Under this constraint,
posterior estimates of βw,1 represented the fixed effect and were directly comparable to
the frequentist estimates. The first two rows of Table 1 are results from the frequentist
models, followed by the Bayesian spatial model with a full GP (BSp GP) in row 3 and its
HSGP approximation (BSp HSGP) in row 4. BSp GP and BSp HSGP produced nearly
identical results, demonstrating that HSGP offers a good approximation for GP under our
model. Although the data were generated under the more complex LMC structure than
the assumed model, the Bayesian spatial models consistently outperformed the frequentist
competitors. This improvement was driven by two factors: richer spatial modeling, and
shrinkage in the Bayesian framework which reduces posterior variance. The shrinkage effect
was especially evident for covariates with limited information. For instance, β8,1 and β9,1
correspond to Insurance–WCSC and Insurance–Selfpay, where the subset of data we used
for the simulation included only two readmission cases with WCSC and none with Selfpay.
Consequently, the corresponding frequentist estimates exhibit high variance and hence much
larger RMSEs than their Bayesian counterparts. The only exception was βw,1, for which the
Bayesian and frequentist models perform similarly. This was expected because incorporating
random slopes increased the posterior uncertainty. Overall, these findings demonstrate the
advantages of the proposed Bayesian model over existing frequentist alternatives. Results
for risk type 2 are similar and can be found in Section 5 of the Supplementary Materials.
Next, we examine results for the baseline hazard rates and the spatial surfaces, which
17

0.0
0.2
0.4
0.6
0 10 20 Time since baseline
Baseline hazard rate
BSp GP
A
0.0
0.2
0.4
0.6
0 10 20 Time since baseline
Baseline hazard rate
BSp HSGP
B
Figure 4: Risk type 1 baseline hazard rate results from simulation study with true hazard
curves in black, and model fitted posterior means in red. Panel A: GP. Panel B: HSGP.
were only available from the Bayesian models. Figure 4 shows the posterior means of
the piecewise-constant baseline hazard rates for risk type 1 from the simulated datasets,
compared to the true curve. Although the true hazard curve was smooth rather than
piecewise-constant, the model recovered them well, particularly in the early periods where
more information was available. We further computed RMSE for each dataset by comparing
the posterior samples with the truth (average of true rates at interval end points were used
as benchmark). The RMSEs were all below 0.005 for the first five knots, rising to about 1
in later periods. Overall, these results showed that the proposed model can effectively learn
the baseline hazard curves, and that GP and HSGP produce comparable estimates. See
Section 5 of the Supplementary Materials for RMSE plots and results for risk type 2.
Figure 5 compares the true spatial surfaces with the averages of the posterior means for risk
type 1, and panel A is for spatial intercepts. Because the levels of the spatial intercepts and
the baseline hazard rates are not separately identifiable, we constrained the posterior spatial
intercepts at all kriging locations to sum to zero, and applied the same adjustment to the
true intercept surface for comparability. As an artifact of the LMC, the true intercept surface
was not smooth. The model recovered the broad spatial pattern but did not capture finer
18

local fluctuations. Panel B is for spatial slopes. Since the fixed effect and the level of the
slopes are not separately identifiable, we presented results for their sum. Given the structure
of the competing risks model (see discussions in Section 5.1 on the weak identifiability of
large slope values), slope surfaces are harder to estimate. Accordingly, the model only
captured coarse patterns, with much of the fine-scale detail missing. Figure 6 presents
uncertainty quantification results. Panel A shows the average posterior standard deviations
for the spatial intercepts across simulated datasets, and panel B shows the same for the
spatial slopes. For confidentiality reasons, we did not display the observation locations, but
we observed a clear pattern that the posterior uncertainty is lower in regions with more
observations and higher in regions with fewer or no observations. This pattern was typical
of GP-based kriging and aligned with expectations. Additional uncertainty quantification
results including RMSE and posterior predictive coverage of the spatial surfaces, as well as
results for risk type 2 can be found in Section 5 of the Supplementary Materials.
HSGP and GP produced broadly similar results, with only a few notable differences. In
panel A of Figure 5, HSGP captured the high-risk area in the bottom-left corner slightly
better, likely because it mixed more efficiently and achieved higher effective sample sizes than
GP. In contrast, Figure 6 shows that HSGP tended to underestimate posterior uncertainty.
This was expected since HSGP is a low-rank approximation method. For example, if the
number of kriging locations exceeded the number of basis functions used in HSGP, the
kriging distribution was necessarily degenerate, leading to underestimation of the posterior
uncertainty. Despite this limitation, HSGP offered substantial computational gains. Across
500 runs, the full GP averaged 8.3 hours (2.5% and 97.5% quantiles: 3.8–13.8 hours),
whereas HSGP averaged only 0.7 hours (2.5% and 97.5% quantiles: 0.2–1.6 hours). Thus,
while yielding comparable inference, full GP was on average an order of magnitude slower
than HSGP. And this gap was expected to widen further with increasing sample size.
19

Truth BSp GP BSp HSGP
Spaital intercept−1.2 −0.6 0.0 0.6 1.2
A
Truth BSp GP BSp HSGP
Spatial slope−0.6 0.0 0.6 1.2
B
Figure 5: Risk type 1 spatial surface estimation results from simulation study. Panel A: the
true spatial intercept surface, average of posterior means from GP and HSGP. Panel B: the
true spatial slope surface, average of posterior means from GP and HSGP.
Overall, the simulation results showed that although our model assumed a simplistic spatial
dependence structure, it improved estimation efficiency for the regression coefficients even
under model misspecification where the data exhibited more complex spatial dependence.
The findings also highlighted the advantages of the proposed Bayesian approach over
available frequentist alternatives and confirmed the accuracy of the HSGP approximation,
making it a scalable option for our real data application.
20

BSp GP BSp HSGP
Spatial intercept posterior SD0.2 0.4 0.6 0.8
A BSp GP BSp HSGP
Spatial slope posterior SD0.4 0.5 0.6 0.7
B
Figure 6: Average of posterior standard deviations for risk type 1 spatial surfaces from
simulation study. Panel A: Spatial intercept results form GP and HSGP. Panel B: Spatial
slope results from GP and HSGP.
5 Application to EHR data
We implemented three models to analyze the EHR data: a Bayesian competing risks model
without spatial effects (BNSp), a model with spatial intercepts only (BSp i), and a model
with both spatial intercepts and slopes (BSp i+s). Details of model implementation are
given in Section 5.1, with posterior convergence checks and model comparison described in
Section 5.2. Section 5.3 presents the fitting and clustering results from the selected model,
and Section 5.4 reports sensitivity analyses on the baseline hazard hyperparameters.
5.1 Model Implementation
We adopted the same setup as in the simulation study for all three models: Four parallel
chains, each with 1,000 burn-in, followed by 4,000 iterations, thinned every fifth iteration,
yielding a total of 3,200 posterior samples. For the hyperparameters, we assigned a weakly
informative IG(aσ = 1, bσ = 1) prior to σ2, and weakly informative Ga(a0 = 1, b0 = 1)
priors for the ψj0’s. In our application, the data span 480 weeks, and we set k = 50 with
equally spaced knots. We then used a Ga(a1 = 2, b1 = 40) hyperprior for κ as it allows κ to
vary over a range that induces plausible autocorrelation structures for the baseline hazard
21

rates. In the absence of prior information about the smoothness of the hazard curves, we
performed sensitivity analyses using different values of a0, b0, a1, b1 and k to assess the
robustness of our model results. See Section 5.4 for details.
We used the Matérn 3/2 covariance function (ν = 3/2) for the Gaussian processes (GPs).
It yields rougher sample paths than the Radial Basis Function kernel and is well suited
for modeling processes expected to exhibit moderate, rather than high, smoothness. To
specify priors for the GP hyperparameters, we considered the range of plausible parameter
values. In competing risks models, large absolute values of regression coefficients are nearly
non-identifiable: Under the proportional hazards assumption, an increase of the regression
coefficient by 1 leads to exp(1) ≈ 2.72 times the hazard rate. As a result, it is hard
for the model to distinguish between two large positive (negative) regression coefficient
values because under either one, patients with positive (negative) covariates will fail almost
instantaneously. With this in mind, we used an independent Half-Normal(0, σ2
τ = 16) prior
for the magnitude parameters τ0j and τ1j’s, which constrains the variance and thereby the
values of the spatial effects to a reasonable range. Similar considerations guided the choice
of priors for the lengthscale parameters. We wanted the prior to accommodate lengthscales
close to zero to prevent over-smoothing the spatial surfaces, and we wanted its probability
mass to concentrate on values that induce realistic correlation structures across the study
region. Under the Matérn 3/2 covariance function, a lengthscale of 1 corresponds to about
25% correlation for locations 10 miles apart, with correlation tapering off by 30 miles, which
is reasonable in practice. In contrast, a lengthscale of 5 implies 50% correlation at 30
miles and 25% at 50 miles, which is unrealistically high; thus, 5 serves as a practical upper
bound. With these considerations, we placed an independent IG(al = 2, bl = 1) prior on
l0j and l1j’s, truncated above at 10. This prior has mean 1 and mode 1/3, with most of its
probability mass within (0, 5). At the same time, its heavy tail permits larger lengthscale
22

values if supported by the data.
Continuous covariates were scaled and centered, binary covariates were also centered because
any constant in the regression term will not be separately identifiable from the level of
the baseline hazard rates. Patient geocoordinates were transformed to plane coordinates
using the Universal Transverse Mercator projection prior to spatial modeling. For kriging,
we constructed a 37 × 38 grid over the study region; after excluding locations outside
the six counties of interest, this produced 907 prediction sites. The spatial models were
implemented using the Hilbert Space GP approximation.
5.2 Model Checking and Model Comparison
We assessed posterior convergence diagnostics for all three models and found no evidence of
non-convergence. Effective sample sizes were approximately 3,000 for most parameters and
exceeded 1,800 in all cases. Traceplots for selected parameters are provided in Section 6 of
the Supplementary Material.
We used the Watanabe–Akaike information criterion (WAIC) (Watanabe & Opper 2010) for
model comparison and selection. WAIC is well suited for complex Bayesian models because
it is computationally efficient and asymptotically equivalent to a Bayesian leave-one-out
cross validation (Watanabe & Opper 2010). WAIC values were computed using the loo R
package (Vehtari et al. 2024) based on pointwise log-likelihoods. Among the three models,
BSp i+s achieved the lowest WAIC (4569.31), followed by BSp i (4573.92) and BNSp
(4582.14). Since lower WAIC values indicate better performance, these results support
including both spatial intercepts and spatial slopes in our analysis.
23

Table 2: Posterior means and 95% credible intervals for βj’s on hazard ratio scale.
Readmission risk Mortality risk Variable Mean 95% CI Mean 95% CI
Age (per 1 SD) 1.31 (1.11, 1.54) 1.68 (1.19, 2.32) Comorbidity (per 1 SD) 1.90 (1.49, 2.40) 1.92 (1.21, 2.93) Female sex (baseline: Male) 0.90 (0.65, 1.20) 0.93 (0.50, 1.64) Race (baseline: White) Black 1.34 (0.90, 1.89) 1.17 (0.54, 2.23) Other 0.61 (0.25, 1.16) 1.30 (0.50, 2.77) Single marital status (baseline: With partner) 1.40 (1.06, 1.82) 0.93 (0.52, 1.51) Smoking status (baseline: Never) Former 0.99 (0.75, 1.28) 1.18 (0.67, 1.98) Current 1.02 (0.60, 1.54) 2.03 (0.85, 4.25) Insurance (baselin-
e: Government) Commercial 0.71 (0.49, 0.99) 0.61 (0.28, 1.15) WCSC 0.77 (0.35, 1.39) 0.99 (0.34, 2.23) Selfpay 0.79 (0.33, 1.50) 0.90 (0.28, 1.96)
5.3 Associations and Geospatial Patterns of Readmission Risk
In this section, we present results of the selected model BSp i+s. Table 2 reports posterior
means and 95% credible intervals of the regression coefficients on hazard ratio scale (i.e.,
exp(βj)). As intercepts were not identifiable, these results were relative to the following
baseline patient profile: White male, never smoked, with partner, and with government
insurance. Commercial insurance emerged as a protective factor for readmission risk, which
may reflect the higher income levels of commercially insured patients (Call et al. 2022).
Having no partner was a significant factor for higher readmission risk, which is plausible
considering the lack of support. As expected, both age and comorbidity scores were also
significantly and positively associated with readmission risk. Overall, even after controlling
for spatial confounders and other covariates, the model fitting results were quite similar to
the EDA results.
Figure 7 shows the posterior means and 95% credible intervals of the baseline hazard rates.
For readmission risk, the estimated hazard closely mirrored the pattern observed in the
exploratory analysis (Figure 1), with a pronounced spike shortly after the initial surgical
24

0.000
0.001
0.002
0.003
0.0 2.5 5.0 7.5 Years from initial surgery
Baseline hazard rate
Readmission risk
A
0.0000
0.0001
0.0002
0.0003
0.0004
0.0005
0.0 2.5 5.0 7.5 Years from initial surgery
Baseline hazard rate
Mortality risk
B
Figure 7: Posterior mean and 95% credible interval for the baseline hazard rates. Panel A:
Readmission risk. Panel B: Mortality risk.
procedure. In contrast, for mortality risk, the model-fitted baseline hazard differed from the
exploratory pattern in Figure 1. After adjusting for age and other covariates, it exhibited
an increasing trend, which better aligned with clinical expectations.
Figure 8 shows model-based spatial surfaces of readmission risk. Panel A displays the
posterior mean of the spatial intercepts at all kriging locations, and panel B the corresponding
posterior standard deviation. The spatial intercepts represent relative readmission risk
as they were constrained to sum to zero over all kriging locations for identifiability. We
observed patterns consistent with the exploratory analysis: Readmission risk is elevated
in socioeconomically disadvantaged areas such as East Durham, and lower in regions with
better healthcare resources, such as Chapel Hill and Cary. The posterior standard deviations
are also sensible, with lower uncertainty in areas with more observations. Panel C presents
the spatial slope surface for comorbidity on hazard ratio scale. For identifiability, we report
combined fixed and spatial effects. Table 2 indicates that comorbidity is significantly and
positively associated with readmission risk, and the spatial slope surface further reveals how
this association varies across regions. Notably, in areas such as Wake Forest and Morrisville,
the increase in readmission risk for higher comorbidity scores is less pronounced.
25

Durham
Pittsboro
Siler City
Goldston
Chapel Hill
Hillsborough
Roxboro
Oxford
Butner
Raleigh
Cary Apex
Morrisville
Wake Forest
Holly Springs
Intercept posterior mean −0.6 −0.3 0.0 0.3 0.6
A
Durham
Pittsboro
Siler City
Goldston
Chapel Hill
Hillsborough
Roxboro
Oxford
Butner
Raleigh
Cary Apex
Morrisville
Wake Forest
Holly Springs
Intercept posterior SD 0.20 0.28 0.36 0.44
B
Durham
Pittsboro
Siler City
Goldston
Chapel Hill
Hillsborough
Roxboro
Oxford
Butner
Raleigh
Cary Apex
Morrisville
Wake Forest
Holly Springs
Slope posterior mean 1.3 1.6 1.9 2.2 2.5
C
Durham
Pittsboro
Siler City
Goldston
Chapel Hill
Hillsborough
Roxboro
Oxford
Butner
Raleigh
Cary Apex
Morrisville
Wake Forest
Holly Springs
Slope posterior SD 0.3 0.5 0.7 0.9 1.1 1.3
D
Figure 8: Posterior mean and standard deviation for readmission risk spatial surfaces. Panel
A: Spatial intercept posterior mean. Panel B: Spatial intercept posterior standard deviation.
Panel C: Spatial slope posterior mean. Panel D: Spatial slope posterior standard deviation.
We further obtained Bayes optimal clusters under the K-means loss for the spatial surfaces.
For practical reasons, we did not use cross-validation to select the number of clusters.
Instead, we set K = 3 as it provides spatial differentiation across the region, and at the
same time gives clear, actionable interpretations for clinical researchers. Panels A and C of
26

Figure 9 present clustering results for spatial intercepts and slopes respectively, while panels
B and D report the associated cluster posterior probability. Higher posterior probability
indicates greater certainty in the cluster assignment for a given location. For the spatial
intercepts, for example, the results suggested with high posterior probability that areas
such as Cary, Raleigh, Roxboro, and Oxford have relatively lower readmission risk, whereas
East Durham, Apex, and Holly Springs exhibited higher risk. These findings highlighted
regions that could be prioritized in policymaking, both to investigate factors contributing
to lower risk, and to develop strategies to mitigate risk in the high-risk areas.
Overall, the proposed Bayesian competing risks spatial model was able to identify risk factors
significantly associated with readmission risk while accounting for competing mortality risk
and spatial confounders. It also provided insights on the spatial pattern of readmission risk,
and highlighted high-risk areas that can inform downstream policy decisions. Results on
mortality risk can be found in Section 6 of the Supplementary Materials.
5.4 Sensitivity Analysis
For the baseline hazard rates, we did not have prior information to gauge whether k = 50
knots was sufficient to capture the true curves, and whether the hyperparameters were
plausible. To ensure that our analysis results were robust to these hyperparameter choices, we
conducted a sensitivity analysis to understand how different settings affect the model results.
In particular, we considered a set of parameters which encourages lower autocorrelations in
baseline hazard rates (a0 = b0 = 5, a1 = 2, b1 = 10), a set of parameters which encourages
higher autocorrelations (a0 = b0 = 0.1, a1 = 2, b1 = 80), and a set with k = 100 equally
distanced knots instead of 50. The same analyses were carried out for these sensitivity tests,
and the results remained similar in terms of model choice, significant risk factors, overall
spatial patterns and clustering results of the estimated spatial surfaces. This showed that
27

Durham
Pittsboro
Siler City
Goldston
Chapel Hill
Hillsborough
Roxboro
Oxford
Butner
Raleigh
Cary Apex
Morrisville
Wake Forest
Holly Springs
Spatial intercept clusters Low Medium High
A
Durham
Pittsboro
Siler City
Goldston
Chapel Hill
Hillsborough
Roxboro
Oxford
Butner
Raleigh
Cary Apex
Morrisville
Wake Forest
Holly Springs
Intercept cluster posterior probability0.0 0.2 0.4 0.6 0.8 1.0
B
Durham
Pittsboro
Siler City
Goldston
Chapel Hill
Hillsborough
Roxboro
Oxford
Butner
Raleigh
Cary Apex
Morrisville
Wake Forest
Holly Springs
Spatial slope clusters Low Medium High
C
Durham
Pittsboro
Siler City
Goldston
Chapel Hill
Hillsborough
Roxboro
Oxford
Butner
Raleigh
Cary Apex
Morrisville
Wake Forest
Holly Springs
Slope cluster posterior probability0.0 0.2 0.4 0.6 0.8 1.0
D
Figure 9: Clustering results for readmission risk spatial surfaces. Panel A: Spatial intercept
clusters with cluster means: -0.17, 0.00, and 0.22. Panel C: Spatial slope clusters with cluster
means on hazard ratio scale: 1.71, 1.91, and 2.23. Panel B and D: Posterior probability of
being in the estimated intercept / slope cluster.
our analysis was robust to changes in the hyperparameters for the baseline hazard rates.
See Section 7 of the Supplementary Materials for these results.
28

6 Discussion
In this manuscript, we introduced a Bayesian spatial competing risks framework that
flexibly models point-referenced spatial random effects for time-to-event data with multiple
risk types. Building on a Bayesian proportional cause-specific hazard model, we used
independent Gaussian process (GP) priors to capture spatial dependence and implemented
a Hilbert space GP (HSGP) approximation for computational scalability. Baseline hazard
rates were modeled as piecewise constant, with a multiplicative gamma process prior that
induces shrinkage and adaptively controls smoothness. A loss-based clustering method was
applied on the spatial random effects to identify high-risk areas. This framework is broadly
applicable to spatially structured competing risks data and, to our knowledge, represents
the first integration of point-referenced spatial modeling into a competing risks proportional
hazards model.
We evaluated the model through simulation and applied it to Duke EHR data to study
hospital readmission among elderly patients with upper extremity fractures. The spatial
competing risk model enabled inference on covariate effects while accounting for the com
peting mortality risk and unmeasured spatial confounders. And as shown by the simulation
results, this framework produced more efficient inference than non-spatial models. Compared
with areal spatial models, incorporating point-referenced spatial effects allowed finer spatial
resolution of readmission risk. For example, panel A of Figure 8 shows that while Apex is
adjacent to Cary and Morrisville, their readmission risk profiles differ notably; the same
applies to East and West Durham. Such granularity is often lost in areal models. These
findings support prior evidence that patient outcomes reflect broader social determinants
of health (Vrtikapa et al. 2025), and they can inform targeted clinical interventions. For
example, providers treating patients in high-risk areas may schedule more frequent follow
ups or give more detailed discharge instructions. The resulting spatial clusters, combined
29

with uncertainty quantification, also have policy implications: resources can be directed to
high-certainty high-risk areas such as East Durham and Apex, while low-risk regions such
as Cary and Morrisville can be studied to identify protective factors.
This application has a few limitations inherent to EHR data: (1) Duke EHR captures
only patients who receive care within this health system, limiting generalizability, (2)
readmissions to non-Duke hospitals are unobserved, leading to incomplete outcome data, (3)
patient address data may be outdated or inaccurate, introducing noise to spatial modeling.
In addition to the data limitations, we also noted several model limitations as discussed at
length in the article: (1) the use of independent GP priors was unrealistically simple, (2)
HSGP approximation tended to underestimate posterior uncertainty, (3) for the clustering
results, we chose to report the posterior cluster probability after conditioning on the
cluster centers which underestimates uncertainty. These compromises were made mainly for
computational efficiency, and better interpretation.
There are several promising directions for future work. Extending the analysis to larger
cohorts, such as patients with hip fractures, would enhance clinical relevance. Incorporating
time-varying covariates from longitudinal encounters could potentially improve model
efficiency. Finally, extending the model to allow time-varying coefficients could be valuable,
as the association between covariates and the risk events may evolve over time.
7 Supplementary Materials
The Supplementary Materials contain inclusion and exclusion criteria for our patient cohort,
demographics of the patient cohort, details on insurance type categories, proof of the
kriging distribution under HSGP, additional results for the simulation study and EHR data
application, and sensitivity analysis results. Simulation and real data analysis codes are
available at https://github.com/christineymshen/BCRSp.
30

References
Agency for Healthcare Research and Quality (2023), ‘Elixhauser comorbidity software
refined for icd-10-cm: User guide, version 2024.1’. Accessed: 2024-06-16.
URL: https://hcup-us.ahrq.gov/toolssoftware/comorbidityicd10/comorbidity_icd10.jsp
Banerjee, S., Carlin, B. P. & Gelfand, A. E. (2003), Hierarchical modeling and analysis for
spatial data, Chapman and Hall/CRC.
Bhattacharya, A. & Dunson, D. B. (2011), ‘Sparse Bayesian infinite factor models’,
Biometrika 98(2), 291–306.
Bourriquen, M., Couderc, A.-L., Bretelle, F. & Villani, P. (2024), ‘Effect of frailty on
unplanned readmission in older adults: A systematic review’, Journal of Epidemiology
and Population Health 72(5), 202774.
Call, K. T., Fertig, A. R. & Pascale, J. (2022), ‘Factors associated with accurate reporting
of public and private health insurance type’, Health Services Research 57(4), 930–943.
Dignam, J. J., Zhang, Q. & Kocherginsky, M. (2012), ‘The use and interpretation of
competing risks regression models’, Clinical Cancer Research 18(8), 2301–2308.
Haller, B., Schmidt, G. & Ulm, K. (2013), ‘Applying competing risks regression models: an
overview’, Lifetime Data Analysis 19(1), 33–58.
Hao, Q., Zhou, L., Dong, B., Yang, M., Dong, B. & Weil, Y. (2019), ‘The role of frailty in
predicting mortality and readmission in older adults in acute care wards: a prospective
study’, Scientific Reports 9(1), 1207.
HCUP (2023), Characteristics of 30-day all-cause hospital readmissions, 2016–2020, Statis
tical Brief 304, Agency for Healthcare Research and Quality. Accessed: 2025-08-18.
URL: https://hcup-us.ahrq.gov/reports/statbriefs/sb304-readmissions-2016-2020.jsp
31

Hesam, S., Mahmoudi, M., Foroushani, A. R., Yaseri, M. & Mansournia, M. A. (2018), ‘A
spatial survival model in presence of competing risks for Iranian gastrointestinal cancer
patients’, Asian Pacific Journal of Cancer Prevention 19(10), 2947.
Hjort, N. L. (1990), ‘Nonparametric Bayes estimators based on beta processes in models for
life history data’, The Annals of Statistics pp. 1259–1294.
Horvath, M. M., Rusincovitch, S. A., Brinson, S., Shang, H. C., Evans, S. & Ferranti, J. M.
(2014), ‘Modular design, application architecture, and usage of a self-service model for
enterprise data delivery: the Duke Enterprise Data Unified Content Explorer (DEDUCE)’,
Journal of Biomedical Informatics 52, 231–242.
Hu, W., Li, G. & Li, N. (2009), ‘A Bayesian approach to joint analysis of longitudinal
measurements and competing risks failure time data’, Statistics in Medicine 28(11), 1601
1619.
Hurst, J. H., Liu, Y., Maxson, P. J., Permar, S. R., Boulware, L. E. & Goldstein, B. A.
(2021), ‘Development of an electronic health records datamart to support clinical and
population health research’, Journal of Clinical and Translational Science 5(1), e13.
Ibrahim, J. G., Chen, M.-H. & Sinha, D. (2001), Bayesian survival analysis, Springer Science
& Business Media.
Jiang, J., Qi, K., Bai, G. & Schulman, K. (2023), ‘Pre-pandemic assessment: a decade of
progress in electronic health record adoption among US hospitals’, Health Affairs Scholar
1(5), qxad056.
Kaiser Family Foundation (2024), ‘A snapshot of sources of coverage among Medicare
beneficiaries’, https://www.kff.org/medicare/a-snapshot-of-sources-of-coverage-among
medicare-beneficiaries/. Accessed: 2025-09-19.
32

Kalbfleisch, J. D. (1978), ‘Non-parametric Bayesian analysis of survival time data’, Journal
of the Royal Statistical Society Series B: Statistical Methodology 40(2), 214–221.
Lee, K.-J., Kim, J. W. & Kim, C.-H. (2025), ‘Risk factors for readmission within 30 days
after discharge following hip fracture surgery: a systematic review and meta-analysis’,
Journal of Clinical Medicine 14(8), 2779.
Liu, J., Gong, T., Xu, X., Fox, K., Oates, M. & Gandra, S. (2022), ‘Heavy clinical and
economic burden of osteoporotic fracture among elderly female Medicare beneficiaries’,
Osteoporosis International 33(2), 413–423.
Mathew, S. A., Gane, E., Heesch, K. C. & McPhail, S. M. (2016), ‘Risk factors for hospital
re-presentation among older adults following fragility fractures: a systematic review and
meta-analysis’, BMC Medicine 14(1), 136.
Medicare Payment Advisory Commission (2024), ‘July 2024 data book: health care spending
and the Medicare program’, https://www.medpac.gov/wp-content/uploads/2024/07/Ju
ly2024_MedPAC_DataBook_Sec2_SEC.pdf. Accessed: 2025-09-19.
Momenyan, S., Ahmadi, F. & Poorolajal, J. (2022), ‘Competing risks model for clustered
data based on the subdistribution hazards with spatial random effects’, Journal of Applied
Statistics 49(7), 1802–1820.
Palmer, G. & Dunson, D. B. (2025), ‘Quantifying sleep apnea heterogeneity using hierarchical
bayesian modeling’, arXiv preprint arXiv:2503.11599 .
Riutort-Mayol, G., Bürkner, P.-C., Andersen, M. R., Solin, A. & Vehtari, A. (2023), ‘Practi
cal Hilbert space approximate Bayesian Gaussian processes for probabilistic programming’,
Statistics and Computing 33(1), 17.
Samanta, D. & Kundu, D. (2021), ‘Bayesian inference of a dependent competing risk data’,
Journal of Statistical Computation and Simulation 91(15), 3069–3086.
33

Solin, A. & Särkkä, S. (2020), ‘Hilbert space methods for reduced-rank Gaussian process
regression’, Statistics and Computing 30(2), 419–446.
Stan Development Team (2025), ‘RStan: the R interface to Stan’. R package version 2.32.7.
URL: https://mc-stan.org/
Therneau, T. M. (2024), A Package for Survival Analysis in R. R package version 3.8-3.
URL: https://CRAN.R-project.org/package=survival
Tian, M., Wang, Z., Zhu, Y., Tian, Y., Zhang, K. & Li, X. (2023), ‘Incidence, causes, and
risk factors of unplanned readmissions in elderly patients undergoing hip fracture surgery:
an observational study’, Clinical Interventions in Aging pp. 317–326.
Vehtari, A., Gabry, J., Magnusson, M., Yao, Y., Bürkner, P.-C., Paananen, T. & Gelman,
A. (2024), ‘loo: Efficient leave-one-out cross-validation and WAIC for Bayesian models’.
R package version 2.8.0.
URL: https://mc-stan.org/loo/
Vrtikapa, K., Urmy, F. H. & Hoque, F. (2025), ‘Social determinants of health: The impact
of this overlooked vital sign’, Journal of Brown Hospital Medicine 4(3), 138072.
Wang, C.-P. & Ghosh, M. (2003), ‘Bayesian analysis of bivariate competing risks models
with covariates’, Journal of Statistical Planning and Inference 115(2), 441–459.
Wang, Y., Leo-Summers, L., Vander Wyk, B., Davis-Plourde, K., Gill, T. M. & Becher,
R. D. (2024), ‘National estimates of short-and longer-term hospital readmissions after
major surgery among community-living older adults’, JAMA Network Open 7(2), e240028.
Watanabe, S. & Opper, M. (2010), ‘Asymptotic equivalence of Bayes cross validation and
widely applicable information criterion in singular learning theory’, Journal of machine
learning research 11(12).
34

Weiss, A. J. & Jiang, H. J. (2021), Overview of clinical conditions with frequent and costly
hospital readmissions by payer, 2018, Technical Report HCUP Statistical Brief #278,
Agency for Healthcare Research and Quality (AHRQ), Rockville, MD.
URL: https://www.hcup-us.ahrq.gov/reports/statbriefs/sb278-Conditions-Frequent
Readmissions-By-Payer-2018.pdf
35

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:28.557Z
- **Text Length:** 63519 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 35 of 35
