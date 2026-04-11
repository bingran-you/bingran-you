# PDF Document: Waken et al. - Multilevel non-linear interrupted time series analysis.pdf

**File Path:** Waken et al. - Multilevel non-linear interrupted time series analysis.pdf

**Processed Date:** 2026-02-10T18:13:30.268Z

**File Size:** 609.67 KB

**Total Pages:** 16

**Extracted Pages:** 16

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3170

**Title:** Multilevel non-linear interrupted time series analysis

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Multilevel non-linear interrupted time series analysis
RJ Waken, PhD1, 2
Fengxian Wang, PhD2, 3
Sarah A. Eisenstein, PhD2, 4
Tim McBride, PhD2, 4
Kim Johnson, PhD2, 4, 5
Karen Joynt-Maddox, MD, MPH2, 3, 4
1. Division of Biostatistics, Institute for Informatics, Data Science, and Biostatistics, Washington University in St. Louis School of Medicine, St. Louis, Missouri 2. Center for Advancing Health Services, Policy & Economics Research, Washington University in St. Louis School of Medicine, St. Louis, Missouri 3. Cardiovascular Division, Department of Medicine, Washington University in St. Louis School of Medicine, St. Louis, Missouri 4. School of Public Health, Washington University in St. Louis, S-
t. Louis, Missouri 5. Brown School of Social Work, Washington University in St. Louis, St. Louis, Missouri
Corresponding author: RJ Waken, rjwaken@wustl.edu
Abstract:
Recent advances in interrupted time series analysis permit characterization of a typical non-linear interruption effect through use of generalized additive models. Concurrently, advances in latent time series modeling allow efficient Bayesian multilevel time series models. We propose to combine these concepts with a hierarchical model selection prior to characterize interruption effects with a multilevel structure, encouraging parsimony and partial pooling while incorporating meaningful variabilit-
y in causal effects across subpopulations of interest, while allowing poststratification . These models are demonstrated with three applications: 1) the effect of the introduction of the prostate specific antigen test on prostate cancer diagnosis rates by race and age group, 2) the change in stroke or trans-ischemic attack hospitalization rates across Medicare beneficiaries by rurality in the months after the start of the COVID-19 pandemic, and 3) the effect of Medicaid expansion in Missouri on th-
e proportion of inpatient hospitalizations discharged with Medicaid as a primary payer by key age groupings and sex.

Introduction
Quasi-experimental designs allow researchers to uncover causal relationships between treatments, interventions, or interruptions and outcomes of interest. When analyzing data where an event or treatment affects all individuals in a population or in a significant share of the subpopulations, interrupted time series designs give a framework for describing the causal relationship between treatment and outcomes while accounting for secular and natural variability in outcomes1. Implementation strategie-
s are varied, and additionally, they may incorporate little to account for natural time varying patterns2. This consideration is crucial to effect characterization since, in the potential outcomes framework for causal inference3, we must accurately characterize both the mean effect of and variability about the counterfactual to recover the causal effect. Interrupted time series modeling approaches that fail to address serial dependency time-varying patterns in a principled way may have conclusions-
 with higher type I error rates4.
Researchers are often interested in describing causal effects within subgroups as well as overall in an affected population. Many statistical practitioners take a sequential, model building like approach to describing inferences; first, researchers fit an “overall” pre-post, describing the typical effect across a population, then fit a model with an overall pre-post effect as well as subgroup by pre-post interaction terms to describe how each subgroup experiences the intervention effect differentl-
y than the reference group; this process may be beneficial for specifying increasingly complex models in a way that helps to preserve parsimony, but in situations where there are subgroup by treatment interactions, findings ascertained this way are plagued by inflated type I error rates5, or may mischaracterize phenomena due to faulty intuition based approaches6. Multilevel models can help us to both characterize overall effects as well as deviations from the overall effect, and still encourage pa-
rsimony via shrinkage to the overall intervention mean7. Further, characterizing intervention effects using a multilevel regression model allows us to address sample representativeness issues via multilevel regression with poststratification if using demographic variables available in the sample and in the overall population of interest8. Recent computational and software advances ease implementation of these models in a time series setting, and also allow for generalized additive models to be str-
uctured alongside stochastic latent time-varying model specifications9.
All statistical analyses are complicated by the tendency for natural processes to eschew convenient, linear patterns. To address these issues in interrupted time series designs, some authors specify segmented regression components designated based on output of visualization tools to address non-linear post intervention effects10. Others incorporate dynamic linear modeling structures that are difficult to reproduce outside of specific

software setups and response distribution specifications11,12. More recent approaches incorporate non-linear trends via generalized additive models, or GAMs, and specify smoothed curves to describe the post-intervention effect4. This approach allows for a changing, non-linear intervention effect in the post period. These models parallel some approaches for similar problems encountered in ecology, and can additionally accommodate latent time series in addition to semiparametric trend modeling9.
We propose an interrupted time series model that facilitates causal inference across multiple subgroups with potentially different interruption effects that accounts for sequential, serial variability with a latent time series process, a non-linear interruption effect characterized with a GAM, by accomplishing all of these tasks in a multilevel modeling structure. This proposal is essentially a multilevel extension of the model proposed in the Cho, 20234. Our paper progresses as follows: in sectio-
n 2, we will describe each of a) latent time series and secular trend specification approach, b) intervention effect characterization via GAM, c) prior specification, and d) the final model. In section 3, we will showcase our model specification with three applications: prostate cancer diagnosis rates changing with the introduction of the prostate specific antigen test, changes in hospitalization rates with stroke and trans-ischemic attack diagnoses at the height of the COVID-19 pandemic amongst M-
edicare beneficiaries, and changes in proportion of inpatient discharges with Medicaid as a primary payer after Medicaid expansion in Missouri hospitalizations. In section 4, we will conclude with a brief discussion and limitations.
Model specification
We take a regression discontinuity type approach to describe the causal effect an intervention has on our vector of outcomes, yit, where t is our time index and i is our series index. Consider the following model:
E[yit] = f−1(xitβ + μit + g(t, i)),
where xit is a vector of predictors at time t, β is a time invariant parameter vector, μit describes a latent time-series process, f−1(⋅) is a link function enabling a generalized linear modeling approach, and g(t, i) is the output of a function of time and grouping structures that describes an intervention effect of interest.
Secular and latent time-varying mean specification
Under the potential outcomes framework3, we must describe a counterfactual, or expected value for our outcomes in the treated group in the absence of a treatment, in order to appropriately characterize an intervention effect. We propose to simultaneously account

for time invariant patterns as well as a time varying process. let xitβ represent a typical, linear model like those used in a generalized linear model, and let f−1(⋅) represent an inverse link function; these components should be chosen with care considering the problem at hand, but we do not address them further in the methods section.
At time t > 1, let μit = γ0t + ∑ ∑ γtkjj
Kj k=1
J
j=1 , where each j = 1, ... , J represents a distinct subgrouping factor, and k = 1, ... Kj are the levels within each subgroup factor. In the simplest case, let
γtj~N(γt−1,j, diag(σj2)).
The above imposes a multivariate random walk structure typical of latent time series models12, and is an excellent, conservative choice for shorter time series. Alternatively, we can specify a vector autoregressive process13 via
γtj~N(Ajγt−1,j, diag(σj2)),
which may better characterize our latent time series process given enough data. In both cases, we initialize the time series latent structure with γ1j~N(0, diag(σj20)). For an example of this characterization laid out explicitly using one of our applications as a reference, see Appendix A.
Conceptually, these model components both a) account for secular time invariant effects and b) nowcast a latent time-varying mean process in order to describe the counterfactual for treated units in our interrupted time series analysis. All aspects of what we present today concern analyses without control groups, but this aspect of the specification may be bolstered with informative control group information.
Intervention effect specification
We specify a generalized additive model14 (GAM) to characterize the intervention effect. Suppose we have a time series of interest for group j = m. We specify
g(t, i|j = m) = Dt × (αm0 + ∑ kh(t)αmh
H
h=1
),
where Tint is the time period at which our intervention occurs, Dt = 1 for t ≥ Tint and Dt = 0 otherwise, αj0 is interpreted as the average shift in group j across all t ≥ Tint, h is the index for the basis function components, H is the number of basis function components, kh(t) is the basis function, αjh are the loadings in group j. Choice of the most appropriate basis function is a function of number of data points in the post intervention period as well as post period “wiggliness” in our outcom-
es; for all analyses considered today, we use thin

plate splines and specify a number of knots totaling the number of post intervention time points divided by two (rounding up), however, this process is not dependent on a particular choice of basis function. We will discuss penalization terms in the prior specification subsection as they are handled using priors in our Bayesian specification. Similar to the time varying specification, we ascertain the full intervention effect as g(t, i) =
∑ ∑ g(t, i|j)
Kj k=1
J
j=1 . For an example of this characterization laid out explicitly in one of our applications, see Appendix B.
Prior parameterization
We recommend relatively non-informative or weakly informative priors for parameters in our secular trend specification; in particular, we consider βk~T(3, 0.0, σβk) where σβk is chosen on an analysis by analysis basis and may differ by coefficient in the same model.
We specify σj2~N+(0, wj) prior specification for variance terms in our time varying process. In situations where identifiability issues arise in model fitting, we recommend specifying a parsimony encouraging prior for latent random walks15 for the σj2, which is the strategy we implement in all analyses below.
We similarly specify parsimony encouraging priors on our intervention effect GAMs. For subpopulation m in subgrouping j, we specify
ψ0~C+(0, 1), ξj~Gamma(1.0, 1.0),
λj⋅~N+(5.0, 30.0),
αj0~N (0.0, ξj−1√(ψj + c)−2)
and assuming that we are using a thin plate spline,
αj,1:H~N (0, (ψ0 + c)−2(ξj−1λj−11P1−1 + ξj−1λj−21P2−1)),
where c is a user input normalizing constant, P1−1 and P2−1 are penalty matrices, j = 0 indicates the overall typical effect, and we define ξ0 = 1. In analyses with a different semiparametric model choice, the penalty matrix structure may be different. We are specifying a regularized horseshoe prior16 on the overall interruption effect, then a hierarchical parsimony enforcing prior17 to regularize the within group effects based on evidence for an overall effect. We further specify penalty term par-
ameters λjm, whose priors should be considered on a case-by-case basis and may need to be updated if the GAM structure is specified differently.

Applications
All inferences are based on 95% credible intervals (CIs), and any results that feature transformations of the model parameters are represented based on posterior means and quantiles from Markov-Chain Monte Carlo (MCMC) draws. All models are fit using the R interface to Stan18. Data from each application must be requested from the specific brokering bodies, and are not allowed to be shared by the authors in this study. This study was approved by the Office of Human Research Protection at Washington-
 University in St. Louis, and the requirement for informed consent was waived due to the de-identified nature of the data.
SEER Prostate Cancer Diagnosis Incidence
The Prostate Specific Antigen (PSA) test for prostate cancer, a non-invasive alternative to biopsy for a quick, easily accessible test for prostate cancer diagnosis (DX) based on presence of a biomarker that became widely commercially available in 198619. Although the biomarker levels for positive results changed in 1998, this test is still widely used today, and in spite of critiques that this test leads to overtreatment20, it is estimated that one prostate cancer death is avoided for every 769 m-
en screened21. We intend to investigate both a) did the introduction of the PSA test increase the number of prostate cancer diagnoses in the US, b) was this effect different by subgroup, and c) how do our findings from these non-representative registries translate to expected changes in prostate cancer DX rates in the whole US?
Using Surveillance, Epidemiology and End Results (SEER) 8 data for men aged 45 and older from 1975 to 1998, we characterize yearly prostate cancer counts and as well as total individuals at risk in age brackets of 45 – 54, 55 – 64, 65 – 74, and 75+, as well as in the SEER provided race groups of Black, Other, and White. The “8” in the data name indicates that these data are the product of 8 different registries, which are not necessarily representative of the United States as a whole22. Figure 1 g-
ives counts of diagnoses per 1000 population by age group and by race group; note that rates cannot be presented for age by race at all time points due to minimum cell size reporting requirements. There appears to be a sharp departure around 1986, the year the PSA test because widely available, in the DX rate from the pre-period trend.

Figure 1: Prostate cancer diagnoses over time
We use U.S. decennial census and intercensal data from the U.S. Census bureau to create poststratification weights to describe our results by age group, race, and overall to be more representative of the at-risk U.S. population as a whole23-25. Notably, SEER race categorizations include individuals of Hispanic ethnicity in all race categories in the time periods considered here, which was also practice in the Census data utilized.
We fit the above model using a multilevel latent VAR time series structure with proposed GAM intervention effect characterization overall, by age, and by race with a Poisson likelihood, with an offset term describing number of individuals at risk, while accounting for overdispersion and the pre-existing over time upward trend. We begin estimating our intervention effect at the commercial introduction of the PSA test in 1986 (corresponding to time t = 11). We focus on 95% CIs for our intervention e-
ffect based on both our sample as well as poststratified results reflecting the at-risk U.S. population.
Table 1 gives the Incidence Rate Ratio (IRR) for the change from 1986 - 1998 in DX Rate attributable to the interruption overall, by age group, and by race, both in the sample, as well as poststratified onto the US population makeup by age group and race. We can see that poststratification tends to attenuate our DX rate increase predictions; we see the largest shifts toward 1 in the 55-64 age group followed by the overall estimate. Figure 2 gives the overall and by race inferences over time, where-
 the bands represent 95% confidence intervals, and again, poststratification yields different inferences than sample weighted estimates do, in most cases again attenuating the effect attributable to commercial introduction of the PSA test.

Figure 2: Estimated effect of the introduction of the PSA test to detect prostate cancer, overall and by race.
Drop in stroke and trans ischemic attack hospitalization episodes during the height of the COVID-19 pandemic in Medicare
The COVID-19 pandemic resulted in a drop in utilization due to both health care system avoidance and administrative directives26. This drop included emergent and non-emergent care in hospital settings27.
We access Medicare Fee-for-service Part A claims and Medicare Encounter Medicare Advantage data that describes hospital utilization in the Virtual Research Data Center (VRDC, cite) environment. The VRDC is a secure system that gives researchers with privileged access the capability to see, analyze, and interpret patterns in a variety of data sets provided at the Medicare enrolled beneficiary level using a variety of software options. Output from this system is reviewed to ensure beneficiary privac-
y, any datum describing between 1 and 10 Medicare beneficiaries must be censored before a download is allowed, and all data or results must be presented in a text based tabular format.
We characterize stroke counts and days at risk of hospitalization on a weekly basis from January 7th, 2018, through December 31st, 2020 for all beneficiaries in Medicare actively enrolled and in a county with a valid Federal Information Processing System (FIPS) code. We describe rurality based on commuting based statistical area definitions on a per FIPS code basis: each FIPS is classified as metropolitan, micropolitan, or rural, which is defined as the absence of membership in a Core Based Statis-
tical Area28. We define hospitalization episodes based on the rules outlined in Appendix Figure 1, and we classify as hospitalization episode as a stroke or transient ischemic attack (TIA) hospitalization event if

any of the diagnosis codes in the inpatient or outpatient facility claims match those included in Appendix Table A. We fit the above model using a multilevel latent VAR time series structure with proposed GAM intervention effect characterization overall and by rurality with a Poisson likelihood, with an offset term describing 1000 beneficiary years at risk, while accounting for overdispersion and seasonal patterns.
Figure 3: Stroke or TIA associated hospitalization episodes per 1k beneficiary years
Figure 3 gives observed stroke rates weekly by level of rurality. We see a clear drop at the height of the COVID pandemic, which slowly increases back toward pre-period levels. In Figure 4, we see the estimated rate change attributable to the COVID interruption within rurality and overall. Although the interruption rates tend to be quite similar, we do see a larger initial rate decrease in Metropolitan areas, and then we see rates return to closer to normal in Metropolitan areas (compared to Rural-
), but none of the rates totally recover to pre-period trends. This suggests slight differences in early pandemic care disruptions by different levels of rurality, especially early (March to April) and late (November to December) in the COVID period in 2020. Table 2 gives rates averaged for each group by rurality across weeks starting in March - April, then again for weeks starting in November December. While our CIs do overlap, we see smaller decreases in stroke hospitalizations in rural areas ea-
rly, but more sustained decreases later.

Figure 4: Estimated effect of COVID pandemic on hospitalization rates for Stroke/TIA
Changes in proportion of inpatient discharges covered by Medicaid in Missouri after Medicaid Expansion
Missouri voted to expand eligibility requirements in the 2020 election, and after some pauses in implementation, the expanded eligibility requirements became law on July 1st, 2021 (enrollment officially started in October, but eligible beneficiaries were covered a posteriori back to July). The combination of a) state-by-state implementation of laws dictating eligibility requirements, b) other states expanding eligibility requirements in the time period around Missouri’s expansion law, and c) the C-
OVID-19 Public Health Emergency (PHE) disallowing many previous Medicaid disenrollment procedures, finding a suitable control group or using simple pre-post test proves difficult to justify.
We use Missouri Hospital Association (MHA) data that describes all facility based hospital claims in Missouri, and keep all inpatient claims with a discharge date in 2016 – 2023, from individuals aged 19 – 64, and characterize hospitalization by age group (19 – 34, 35 – 49, and 50 – 64) and whether the data identifies individuals with a sex code as male or not male. We count the total number of hospitalizations per quarter both a) overall, and b) that are paid for with Medicaid as a primary payer,-
 defining the latter as a success. We fit a logistic regression model describing the proportion of inpatient hospital discharges with Medicaid as a primary payer over time with the above multilevel latent VAR time series structure with proposed GAM intervention effect characterization overall, by sex code, and by age group, while accounting for a logit linear increase in discharges with Medicaid as a primary payer during the PHE.

Figure 5: Proportion of hospital discharges with Medicaid as a primary payer in Missouri
Figure 5 gives observed proportions of hospitalizations within each time series considered, defined by the combination of sex and age group. We see all series start to trend upward slightly when the PHE starts, and sharper increases in some groupings after the expansion groups. In Figure 6, we see overall, then by age and sex group predicted difference in proportions of discharges caused by Medicaid expansion over time. There were greater increases in Medicaid payer share for males, and this is es-
pecially pronounced in younger age groups.

Figure 6: Change in proportion of hospitalization discharges with Medicaid as a primary payer by age and sex group
Discussion
In this paper, we have proposed a novel application of multilevel GAMs with an underlying stochastic multilevel time varying process to describe causal effects in an interrupted time series design. This builds on existing work in medicine that has previously described how GAMs can be utilized to describe causal effects, allowing us to describe different effects by subgroups while encouraging identifiability using parsimony enforcing priors. The multilevel implementation also supports poststratific-
ation, which can assist researchers in easily communicating results to stakeholders in a way that is representative of the targeted inferential population.
There are however some limitations to this work. Our recommended procedures are somewhat computationally intensive given our full Bayesian implementation, which we feel is beneficial given both the time varying and multilevel modeling components. New advances in software for deterministic Bayesian inference, such as programs built for variational inference or the Pathfinder algorithm29 could serve to speed up model fitting, but are not explored here.
GAMs are excellent for estimating effects over observed nuisance factors, such as time, but do not allow researchers to forecast outside of the observed nuisance factor bounds in

the data. Time is a nuisance factor in our analysis considered above; we are interested in making inferences at specific observed time points in a retrospective fashion, but do not care to project our inferexnces forward beyond the bounds of the observed data. Researchers interested in the above strategy with forecasting may be able to accomplish this through the use of dynamic linear models as the mean function describing intervention effects9,11.
We did not explore concepts like differential treatment timing or multiple treatments per unit. This is possible, however, based on prior work in this field4 which is easily extendable to incorporate a multilevel structure. Further, if units subject to differential treatment times could be attributed membership in a distinct subpopulation, we could treat treatment initiation timing as a subgrouping as well. This is conceptually similar to recent advances in the differences in differences literatur-
e30,31.
Acknowledgments
This work was supported by the Missouri Foundation for Health under Grant 21-0035-ME21 and National Institutes of Health National Institute for Nursing Research under Grant U01NR020555.
References
1. Turner SL, Karahalios A, Forbes AB, Taljaard M, Grimshaw JM, McKenzie JE.
Comparison of six statistical methods for interrupted time series studies: empirical evaluation of 190 published series. BMC Medical Research Methodology. 2021/06/26
2021;21(1):134. doi:10.1186/s12874-021-01306-w 2. Zhang Y, Ren Y, Huang Y, et al. Design and statistical analysis reporting among interrupted time series studies in drug utilization research: a cross-sectional survey. BMC
Med Res Methodol. Mar 9 2024;24(1):62. doi:10.1186/s12874-024-02184-8 3. Rubin DB. Causal Inference Using Potential Outcomes. Journal of the American
Statistical Association. 2005/03/01 2005;100(469):322-331. doi:10.1198/016214504000001880 4. Cho S-J. Modelling change processes in multivariate interrupted time series data
using a multivariate dynamic additive model: An application to heart rate and blood pressure self-monitoring in heart failure with drug changes. Journal of the Royal Statistical
Society Series C: Applied Statistics. 2023;73(1):123-142. doi:10.1093/jrsssc/qlad088 5. Burke JF, Sussman JB, Kent DM, Hayward RA. Three simple rules to ensure reasonably credible subgroup analyses. BMJ. 2015:h5651. doi:10.1136/bmj.h5651
6. Pearl J. Understanding Simpson's Paradox. SSRN Electronic Journal. 2013;doi:10.2139/ssrn.2343788
7. Gelman A, Hill J. Data analysis using regression and multilevel/hierarchical models. Analytical methods for social research. Cambridge University Press; 2007:xxii, 625 p.

8. Wang W, Rothschild D, Goel S, Gelman A. Forecasting elections with non
representative polls. International Journal of Forecasting. 2015/07/01/ 2015;31(3):980-991. doi:https://doi.org/10.1016/j.ijforecast.2014.06.001
9. Clark NJ, Wells K. Dynamic generalised additive models (DGAMs) for forecasting discrete ecological time series. Methods in Ecology and Evolution. 2023;14(3):771-784. doi:https://doi.org/10.1111/2041-210X.13974
10. Tran PT, Antonelli PJ, Hincapie-Castillo JM, Winterstein AG. Association of US Food and Drug Administration Removal of Indications for Use of Oral Quinolones With
Prescribing Trends. JAMA Intern Med. Jun 1 2021;181(6):808-816. doi:10.1001/jamainternmed.2021.1154 11. Brodersen KH, Gallusser F, Koehler J, Remy N, Scott SL. Inferring causal impact
using Bayesian structural time-series models. 2015; 12. Gianacas C, Liu B, Kirk M, et al. Bayesian structural time series, an alternative to
interrupted time series in the right circumstances. Journal of Clinical Epidemiology. 2023/11/01/ 2023;163:102-110. doi:https://doi.org/10.1016/j.jclinepi.2023.10.003 13. Heaps SE. Enforcing Stationarity through the Prior in Vector Autoregressions. Journal
of Computational and Graphical Statistics. 2023/01/02 2023;32(1):74-83. doi:10.1080/10618600.2022.2079648
14. Wood SN. Generalized Additive Models. 2017;doi:10.1201/9781315370279 15. Binding G, Koc P. Adding Regularized Horseshoes to the Dynamics of Latent Variable
Models. Political Analysis. 2025;33(2):171-177. doi:10.1017/pan.2024.30 16. Piironen J, Vehtari A. Sparsity information and regularization in the horseshoe and other shrinkage priors. Electronic Journal of Statistics. 2017;11(2)doi:10.1214/17-ejs1337si
17. Griffin J, Brown P. Hierarchical Shrinkage Priors for Regression Models. Bayesian Analysis. 2017;12(1):135-159. doi:10.1214/15-ba990
18. Carpenter B, Gelman A, Hoffman MD, et al. Stan: A Probabilistic Programming Language. Journal of Statistical Software. 01/11 2017;76(1):1 - 32. doi:10.18637/jss.v076.i01
19. Stamey TA, Yang N, Hay AR, McNeal JE, Freiha FS, Redwine E. Prostate-specific antigen as a serum marker for adenocarcinoma of the prostate. N Engl J Med. Oct 8
1987;317(15):909-16. doi:10.1056/nejm198710083171501 20. Shao YH, Albertsen PC, Shih W, Roberts CB, Lu-Yao GL. The impact of PSA testing frequency on prostate cancer incidence and treatment in older men. Prostate Cancer
Prostatic Dis. Dec 2011;14(4):332-9. doi:10.1038/pcan.2011.29 21. Force UPST. Screening for Prostate Cancer: US Preventive Services Task Force
Recommendation Statement. JAMA. 2018;319(18):1901-1913. doi:10.1001/jama.2018.3710 22. Institute NC. Characteristics of the SEER Population Compared with the Total
United States Population. Accessed 08/05/2025, 2025. https://seer.cancer.gov/registries/characteristics.html
23. Data from: State Intercensal Datasets: 1970-1980. 24. Data from: County Intercensal Datasets: 1980-1990. 25. Data from: State and County Intercensal Datasets: 1990-2000.

26. Johnson KJ, O’Connell CP, Waken RJ, Barnes JM. Impact of COVID-19 pandemic on
breast cancer screening in a large midwestern United States academic medical center. PLOS ONE. 2024;19(5):e0303280. doi:10.1371/journal.pone.0303280
27. Yu J, Hammond G, Waken RJ, Fox D, Joynt Maddox KE. Changes In Non-COVID-19 Emergency Department Visits By Acuity And Insurance Status During The COVID-19 Pandemic. Health Aff (Millwood). Jun 2021;40(6):896-903. doi:10.1377/hlthaff.2020.02464
28. Data from: Census Core-Based Statistical Area (CBSA) to Federal Information Processing Series (FIPS) County Crosswalk.
29. Zhang L, Carpenter B, Gelman A, Vehtari A. Pathfinder: parallel quasi-Newton variational inference. J Mach Learn Res. 2022;23(1):Article 306. 30. Sun L, Abraham S. Estimating dynamic treatment effects in event studies with
heterogeneous treatment effects. Journal of Econometrics. 2021/12/01/ 2021;225(2):175199. doi:https://doi.org/10.1016/j.jeconom.2020.09.006
31. Callaway B, Sant’Anna PHC. Difference-in-Differences with multiple time periods. Journal of Econometrics. 2021/12/01/ 2021;225(2):200-230. doi:https://doi.org/10.1016/j.jeconom.2020.12.001
Appendices
Appendix table 1: Stroke/TIA diagnosis codes
Cerebral Ischemia Codes ICD-10 code
Ischemic Stroke I63.00, I63.011, I63.012, I63.013, I63.019, I63.02, I63.031, I63.032, I63.033, I63.039, I63.09, I63.10,
I63.111, I63.112, I63.113, I63.119, I63.12, I63.131, I63.132, I63.133, I63.139,
I63.19, I63.20, I63.211, I63.212, I63.213, I63.219, I63.22, I63.231, I63.232, I63.233, I63.239, I63.29,
I63.30, I63.311, I63.312, I63.313, I63.319, I63.321, I63.322, I63.323, I63.329,
I63.331, I63.332, I63.333, I63.339, I63.341, I63.342, I63.343, I63.349, I63.39, I63.40, I63.411, I63.412,
I63.413, I63.419, I63.421, I63.422, I63.423, I63.429, I63.431, I63.432, I63.433,
I63.439, I63.441, I63.442, I63.443, I63.449, I63.49, I63.50, I63.511, I63.512, I63.513, I63.519, I63.521,

I63.522, I63.523, I63.529,
I63.531, I63.532, I63.533, I63.539, I63.541, I63.542, I63.543, I63.549, I63.59, I63.6, I63.8, I63.81, I63.89, I63.9,
I67.89
Transient Ischemic Attack G45.0, G45.1, G45.2, G45.3, G45.8, G45.9
Appendix figure 1: Hospitalization episode definition diagram

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:30.268Z
- **Text Length:** 31521 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 16 of 16
