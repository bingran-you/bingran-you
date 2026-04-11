# PDF Document: Xu et al. - 2025 - Semiparametric Models for Practice Effects in Longitudinal Cognitive Trajectories Application to an.pdf

**File Path:** Xu et al. - 2025 - Semiparametric Models for Practice Effects in Longitudinal Cognitive Trajectories Application to an.pdf

**Processed Date:** 2026-02-10T18:14:33.872Z

**File Size:** 805.66 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3362

**Title:** Semiparametric Models for Practice Effects in Longitudinal Cognitive Trajectories: Application to an Aging Cohort Study

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Semiparametric Models for Practice Effects in Longitudinal
Cognitive Trajectories:
Application to an Aging Cohort Study
Yunshan Xu∗1, Tsungchin Wu1, Angelina Van Dyne2, Ellen Lee2, Lisa Eyler2, and Xin M. Tu1
1Herbert Wertheim School of Public Health and Human Longevity Science,, University of California San Diego, La Jolla, CA, USA 2Department of Psychiatry, University of California San Diego,, La Jolla, CA, USA
Abstract
Background: True cognitive longitudinal decline can be obscured by repeated testing, which is called practice effects (PEs). We developed a modeling framework that aligns participants by baseline and estimates visit-specific PEs independently of age-related change. Method: Using real data (N = 175), we estimated within-subject correlations via linear mixedeffects modeling and applied these parameters to simulate longitudinal trajectories for healthy controls (HC) and individuals with schizophrenia-
 (SZ). Simulations incorporated aging, diagnostic differences, and cumulative PE indicators. Generalized estimating equations (GEEs) were fit with and without PEs to compare model performance. Results: Models that ignored PEs inflated estimates of cognitive stability and attenuated HC–SZ group differences. Including visit-specific PEs improved recovery of true trajectories and more accurately distinguished aging effects from learning-related gains. Interaction models further identified that PEs ma-
y differ by diagnosis or by age at baseline. Conclusion: Practice effects meaningfully bias longitudinal estimates if left unmodeled. The proposed alignment-based GEE framework provides a principled method to estimate PEs and improves accuracy in both simulated and real-world settings. Keywords: practice effects; repeat testing; serial testing; longitudinal testing; mild cognitive impairment; cognitive change.
∗Corresponding author: yunshanxu@ucsd.edu
1
arXiv:2511.21001v1 [stat.ME] 26 Nov 2025

1 Introduction
Longitudinal studies are crucial for understanding the course of cognitive impairment in schizophrenia, including whether deficits are static, progressive, or partially reversible with treatment [23, 6, 19]. In clinical studies of cognitive impairments associated with schizophrenia, repeated neuropsychological testing is a key outcome measure used to evaluate both pharmacological and psychosocial interventions. However, it has been shown that improvements in test performance over time are more lik-
ely to be due to practice effects (PEs) than to genuine changes in underlying abilities [9, 14, 13]. PEs can therefore distort conclusions about the natural course of schizophrenia and falsify the assessment of a treatment’s effectiveness, especially in studies that use changes in cognitive scores as the primary endpoint.
A substantial body of literature has now confirmed the existence of a practice effect in schizophrenia patients undergoing various cognitive tests. Goldberg’s review indicates that cognitive improvements from targeted training are often underestimated due to confounding factors, and many findings regarding “cognitive enhancement” from antipsychotic drugs can be reinterpreted as training effects or placebo effects [9, 8]. In a study of second-generation antipsychotics in first-episode schizophrenia-
 patients, he noted that the observed cognitive improvement was comparable to the practice effect seen in healthy controls, indicating minimal drug-specific cognitive effects [8]. Meanwhile, Keefe et al. analyzed data from 12 placebo-controlled cognitive studies and found that training effects significantly influenced MATRICS Consensus Cognitive Scale scores, with improvements comparable to those in the placebo group [14]. Collectively, these studies indicate that failing to account for training e-
ffects may lead to overestimation of cognitive improvement and misjudgment of the longitudinal stability or improvement of cognitive function in schizophrenia patients.
Practice effects (PEs) are sometimes operationalized as the degree of improvement from baseline to follow-up, but may also manifest as a reduction in the rate of decline. Longitudinal meta-analyses indicate that neuropsychological performance in individuals with schizophrenia often shows only modest improvement or relative stability, even in the presence of expected disease-related and agerelated decline [23, 6, 19]. This pattern suggests that practice and related nonspecific factors may mask unde-
rlying deterioration, particularly when follow-up intervals are short or subjects undergo multiple testing. For example, Granholm et al. found no neurodegenerative decline in neuropsychological tests administered over multiple years to middle-aged and elderly schizophrenia patients; conversely, aging positively correlated with diminishing gains on repeated tasks, suggesting an interaction between aging, baseline impairment, and practice effects [11]. These findings underscore that practice effects-
 may persist even when observed scores plateau or decline, with their intensity varying across individuals.
Despite this evidence, explicit adjustment for PEs is not a standard approach in schizophrenia research. Many longitudinal and trial analyses implicitly assume that changes of scores reflect the true cognitive change, with practice treated as noise or ignored. There has been relatively limited work modeling visit-specific PEs, examining how PEs evolve across multiple assessments, or testing whether PEs differ by diagnosis or age. Most existing studies focus on short test-retest intervals (weeks to-
 months) rather than multi-year follow-up, and few integrate practice-effect modeling into marginal models of cognitive trajectories in schizophrenia.
2

In the present work, we address these gaps by developing a generalized estimating equation (GEE) framework that aligns participants by baseline assessment, treats age as a continuous time scale, and incorporates visit-specific indicators to estimate practice effects separately from age-related change. Using both real and simulated data on individuals with schizophrenia and healthy controls, we evaluate how PEs accumulate over repeated assessments, whether their magnitude varies by age or diagnosi-
s, and how failure to model PEs biases estimates of cognitive trajectories. Our overarching goal is to provide a practical approach for incorporating practice effects into longitudinal cognitive analyses in schizophrenia, thereby improving the validity of inferences about disease course and treatment response.
2 Methods
2.1 Study Sample
Participants were drawn from an ongoing longitudinal study of psychosis and aging conducted at the University of California San Diego. The study follows adults with schizophrenia (SZ) and demographically similar healthy controls (HC) to characterize cognitive aging across midlife and later adulthood. Individuals with SZ were recruited through outpatient psychiatric clinics and community mental health programs, whereas HC participants were recruited through community advertisements and referral net-
works. All participants were fluent in English and had sufficient sensory and motor ability to complete neuropsychological testing.
At baseline, 175 participants completed cognitive assessments, including 90 SZ and 85 HC, and were between 26.2–49.8 years of age (mean = 39.2, SD = 7.0). Participants returned for follow-up evaluations approximately every 12 months, with up to six repeated assessments per individual. Demographic characteristics, psychiatric diagnoses, medication history, and medical comorbidities were collected at each visit. Cognitive performance was assessed using a standardized battery, and a composite score w-
as derived to summarize global cognitive functioning. Participants were excluded if they had a neurological disorder, intellectual disability, uncontrolled medical illness affecting cognition, or recent substance dependence. The analytic sample included individuals with at least one post-baseline cognitive assessment. All procedures were approved by the UC San Diego Human Research Protections Program (IRB Protocol #101631), and written informed consent was obtained from all participants.
2.2 Statistical Analysis
Alignment of Assessment Time to Estimate Practice Effects
In this study, subjects are assessed approximately every 12 months (there is some deviation for some subjects, but we treat assessments as 12 months apart for analytic purposes). Thus, we can estimate practice effects (PEs) for the 1st, 2nd, 3rd, etc. reassessments. For simplicity, we focus on the practice effect for the 1st reassessment.
Because there are 12 months between consecutive assessments, we can estimate the practice effect for the 1st reassessment at 12 months. We partition the sample into the following subsamples.
We model practice effects by examining the difference in mean between the red values (2nd assessment, or 1st reassessment) and the black values (1st assessment). By including an interaction
3

Age at visit for each observed subject
Age at enrollment 1st visit 2nd visit
26 26 27 27 27 28 28 28 29 29 29 30
... ... ...
PE for each age aligned on 1st reassessment
26 27 27 28 28 29 29 30
... ... ... ... ...
Figure 1: Left: observed ages at enrollment and first two study visits. Right: practice effect illustration obtained by aligning assessments on the first reassessment; red values represent performance at the reassessment.
between practice effect and age at visit, we can also test whether practice effects change as age increases.
We dummy-code age at visit and practice-effect indicators so that we do not impose a specific functional form on the relationship between the cognitive outcome, age at visit, and practice effect. We first included age at visit as 28, 29, 30, etc. as single-year indicators; because results were unstable, we then grouped age at visit into 5-year bins so that the model provides the mean cognitive outcome for each age bin and a practice effect for each age bin. The results for EXCOMP2 showed that, wit-
hout controlling for practice effects, EXCOMP2 appeared to increase over age, but after adjusting for practice effects, the mean of EXCOMP2 decreased with age.
Generalized Estimating Equation Models
Models Without Practice Effects
We first estimated a GEE model that omitted explicit practice effects. Let i index subjects and j index assessment times. Let Yij denote the observed response (dependent variable) and Wij the vector of all explanatory variables, including age at visit, diagnostic group dxi, and other baseline covariates (e.g., gender, education, race). Time since baseline is represented by tij in years, where j indexes the jth visit and ti1 = 0 at baseline. Age at visit, agevisitij, is defined as the subject i’s a-
ge at visit j, and agei1 is the age of subject i at the baseline visit.
The model without PEs can be written as
E[Yij | Wij] = β0 + β1agevisitij + β2dxi + β3tijdxi + X⊤
i β4, (1)
which is equivalent to
E[Yij | Wij] = β0 + β1(agei1 + tij) + β2dxi + β3tijdxi + X⊤
i β4. (2)
This model serves as the baseline against which PE-adjusted models are compared, allowing us to quantify the extent to which ignoring repeated-test gains may bias longitudinal estimates.
Models With Practice Effects
To estimate PEs explicitly, we extended the GEE model by introducing visit-specific indicator variables. Let I(j = k) be an indicator function that equals 1 if visit j corresponds to the kth
4

assessment and 0 otherwise. Incorporating these indicators, the model becomes
E[Yij | Wij] = β0 + β1agevisitij + β2dxi + β3tijdxi + X⊤
i β4 +
5
X
k=2
β5kI(j = k)
+
5
X
k=2
β6kI(j = k)dxi,
(3)
or equivalently,
E[Yij | Wij] = β0 + β1(agei1 + tij) + β2dxi + β3tijdxi + X⊤
i β4 +
5
X
k=2
β5kI(j = k)
+
5
X
k=2
β6kI(j = k)dxi.
(4)
Here, β5k captures the PE at visit k (2 ≤ k ≤ 5), and the interaction coefficients β6k capture group differences in PEs between healthy controls and individuals with schizophrenia.
2.3 Simulation Study
A simulation study was conducted to evaluate the performance of the aligned GEE framework under controlled conditions and to examine how failing to model PEs can bias estimates of longitudinal cognitive trajectories.
2.3.1 Estimating the Correlation Structure
We first estimated the within-subject correlation structure from real longitudinal cognitive data. Participants with at least one post-baseline visit were retained, and up to six visits per subject were used. Time since baseline was derived from days-since-baseline and converted to years. Subjects without a baseline assessment were excluded to maintain proper alignment. A linear mixed-effects model was fit to these data to estimate the intra-class correlation (ICC):
Yij = β0 + β1agevisitij + β2dxi + β3tijdxi + X⊤
i β4 + bi + εij, (5)
bi ∼ N (0, σ2
b ), εij ∼ N (0, σ2
e ), (6)
or equivalently,
Yij = β0 + β1(agei1 + tij) + β2dxi + β3tijdxi + X⊤
i β4 + bi + εij, (7)
bi ∼ N (0, σ2
b ), εij ∼ N (0, σ2
e ). (8)
Here bi and εij denote the subject-specific random intercept and residual error, respectively. The fitted model produced the following parameter estimates:
β0 = 0.333, β1 = −0.006, β2 = −0.803, β3 = 0.018,
β4 = [0.093, 0.091, −0.078]⊤, σ2 = (0.312)2, ρ = 0.753.
The ICC was calculated as
ICC = σ2
b σ2
b + σe2
,
5

and this value was subsequently used to calibrate the copula-based dependence structure in the simulated data.
Using both real and simulated datasets, we examined longitudinal outcome trajectories for individuals in the Healthy Control (HC) and Schizophrenia (SZ) groups, comparing scenarios that included practice effects with those that did not. To generate within-subject dependence that better resembled real cognitive data, we employed a copula-based approach to model the correlation structure. Marginal mean trajectories were then estimated with generalized estimating equations (GEE), which provided a pop-
ulation-level view of how outcomes evolved over time under each modeling condition.
2.3.2 Simulation With No Practice Effects (No PE)
To create a more realistic scenario and decouple practice effects from time, we simulated data for n = 500 subjects in five waves of enrollment. Let tij denote the time in years at the jth visit with ti1 = 0 (1 ≤ i ≤ n, 1 ≤ j ≤ J). For our simulation study, we set
β0 = 0.326, β1 = −0.007, β2 = −0.782, β3 = 0.013, β4 = [0.098, 0.034, −0.077],
n = 500, J = 5, tij = 1 × (j − 1), σ2 = (0.155)2.
Thus the five assessment times occurred at
ti1 = 0, ti2 = 1, ti3 = 2, ti4 = 3, ti5 = 4, ti6 = 5.
A new cohort of 100 individuals of the same age in months was then randomly assigned to either the schizophrenia (SZ) or healthy control (HC) group, with their first assessment at j = 1 and ti1 = 0. The outcome Yij for subject i at visit j was generated as:
Yij = μij + εij , μij = β0 + β1 agevisitij + β2dxi + β3tij dxi + X⊤
i β4, (9)
or equivalently, μij = β0 + β1 (agei1 + tij ) + β2dxi + β3tij dxi + X⊤
i β4,
where dxi = 1 for SZ and 0 for HC, and agei1 denotes the age (in years) of the ith subject at baseline (j = 1, ti1 = 0). We set agei1 for each cohort as:
agei1 =

      
      
25 Cohort 1,
30 Cohort 2,
35 Cohort 3,
40 Cohort 4,
45 Cohort 5.
In model (1), agevisitij = agei1 + tij
is the age of subject i at visit j, and β1 is the aging effect. We can also model aging effects as a categorical variable using:
Yij = μij +εij , μij = β0+
6
X
k=1
1 5(k − 1) + 25 ≤ agevisitij ≤ 5k + 25 β1+β2dxi+β3tijdxi+X⊤
i β4,
(10)
6

2.3.3 Simulation With Practice Effects (PE)
To incorporate cumulative practice effects, we extended the simulation framework by adding five indicator variables, prac1plus through prac5plus, denoting whether a subject had completed at least one through five previous assessments. These indicators were included as main effects and in interaction with diagnosis.
The linear predictor for subject i at visit j was specified as:
Yij = μij + εij ,
with
μij = β0 + β1agevisitij + β2di + β3tijdi + X⊤
i β4 +
6
X
k=2
β5kI(j = k),
or equivalently,
μij = β0 + β1(agei1 + tj) + β2di + β3tijdi + X⊤
i β4 +
6
X
k=2
β5kI(j = k).
Here, β5k represents the increase in performance due to practice at visit k, with
β52 ≤ β53 ≤ β54 ≤ β55 = β56,
and we set β52 = 0.2, β53 = 0.3, β54 = 0.4, β55 = β56 = 0.5.
*Differential Practice Effects by Diagnosis
To evaluate group differences in practice effects between schizophrenia (SZ) and healthy control (HC) participants, we used:
Yij = μij + εij ,
μij = β0 + β1agevisitij + β2di + β3tijdi + X⊤
i β4 +
5
X
k=2
β5kI(j = k) +
5
X
k=2
β6kI(j = k)di,
or
μij = β0 + β1(agei1 + tj) + β2di + β3tijdi + X⊤
i β4 +
5
X
k=2
β5kI(j = k) +
5
X
k=2
β6kI(j = k)di.
Here, β6k represents the differential practice effect for SZ relative to HC at visit k.
*Differential Practice Effects by Age
To evaluate whether practice effects vary by age, we used:
Yij = μij + εij ,
μij = β0 + β1agevisitij + β2di + β3tijdi + X⊤
i β4 +
5
X
k=2
β5kI(j = k) +
5
X
k=2
β7kI(j = k) agevisitij,
7

or
μij = β0 + β1(agei1 + tj) + β2di + β3tijdi + X⊤
i β4 +
5
X
k=2
β5kI(j = k) +
5
X
k=2
β7kI(j = k)(agei1 + tj).
Here, β7k quantifies the change in practice-related improvement per additional year of age at visit k. As in earlier sections, aging effects can alternatively be modeled using categorical age groups.
3 Results
Baseline demographic characteristics were comparable between groups (Table 1). The schizophrenia group included a slightly higher proportion of males (53% vs. 45% in controls) and had fewer years of education (median 12 vs. 15). Median baseline age was similar across groups—40 years for schizophrenia and 38 years for healthy controls. Racial/ethnic distributions did not differ substantially, with most participants identifying as Caucasian, followed by Hispanic and African American.
Table 1: Baseline characteristics of study participants
Characteristic Healthy controls (n = 85) Schizophrenia (n = 90)
Sex, male, n (%) 38 (45%) 48 (53%) Age at baseline, median (Q1, Q3), years 38 (32, 46) 40 (34, 46) Years of education, median (Q1, Q3) 15 (13, 16) 12 (11, 13)
Race/ethnicity, n (%)
Caucasian 49 (58%) 38 (42%) African American 11 (13%) 12 (13%) Hispanic 21 (25%) 31 (34%) Asian 3 (3.5%) 4 (4.4%) Native Hawaiian / Pacific Islander 0 (0%) 1 (1.1%) Multiracial 1 (1.2%) 4 (4.4%)
Table 2 summarizes the linear mixed-effects model fit to the observed data. Cognitive performance was substantially lower in SZ compared with HC (β = −0.803, p < 0.0001). Higher educational attainment was associated with better performance (β = 0.093, p = 0.0001), whereas age at visit was not statistically significant (p = 0.34). A significant diagnosis-by-time interaction (β = 0.018, p = 0.0037) indicated differing longitudinal trajectories between groups.
To evaluate whether these estimates reflected practice effects, simulated datasets were generated using the real-data parameter values but without practice effects. As shown in Tables 3 and 4, the schizophrenia effect remained similar (β ≈ −0.78, p < 2 × 10−16), and age demonstrated a small, negative slope (β ≈ −0.007, p < 0.001), confirming that the simulation accurately reproduced the empirical effect structure.
Table 6 presents GEE estimates from simulations incorporating practice effects. Large gains were observed at early reassessments (e.g., prac1: β = 0.305, p < 2 × 10−16), with diminishing increases thereafter. When practice effects were modeled, the expected age-related decline re-emerged
8

(β = −0.006, p = 0.0006), demonstrating that unmodeled practice effects can mask true cognitive deterioration.
Figures 2 and 3 illustrate these patterns: parameter estimates were consistent across analytic frameworks, and trajectories that appeared stable without adjustment showed clear decline once practice effects were accounted for.
Table 2: Linear Mixed Effects Model for Correlation (Real Data)
Fixed Effect Estimate Std. Error DF t-value p-value (Intercept) 0.333 0.515 397 0.65 0.5177 agevisit -0.006 0.006 397 -0.95 0.3424 dxgroup -0.803 0.109 170 -7.39 < 0.0001 educ 0.093 0.022 170 4.16 0.0001 gender 0.091 0.089 170 1.02 0.3071 race lat -0.078 0.034 170 -2.30 0.0228 dxgroup:yearsbl 0.018 0.006 397 2.92 0.0037
Table 3: Linear Mixed Effects Model (Simulated Data, Without Practice Effect)
Fixed Effect Estimate Std. Error DF t-value p-value (Intercept) 0.319 0.0932 1519 3.42 0.0006 age visit -0.007 0.0015 1519 -4.79 0.0000 dx bin -0.782 0.0252 495 -30.99 0.0000 educ 0.099 0.0049 495 20.11 0.0000 gen 0.035 0.0247 495 1.40 0.1632 race lat -0.077 0.0092 495 -8.29 0.0000 dx bin:t 0.013 0.0035 1519 3.71 0.0002
Table 4: GEE Results (Simulated Data, Without Practice Effect)
Term Estimate Std. Err Wald p-value (Intercept) 0.32629 0.09170 12.66 0.00037 age visit -0.00754 0.00150 25.19 5.2 × 10−7 dx bin -0.78211 0.02510 970.66 < 2 × 10−16 educ 0.09886 0.00499 390.98 < 2 × 10−16 gen 0.03441 0.02450 1.97 0.16014 race lat -0.07660 0.00790 94.10 < 2 × 10−16 dx bin:t 0.01304 0.00329 15.68 7.5 × 10−5
9

Table 5: GEE Model Results (Simulated Data, Age Binned Without Practice Effect)
Term Estimate Std. Error Wald p-value (Intercept) 0.09193 0.07428 1.53 0.2159 age band kband2 -0.00241 0.01746 0.02 0.8903 age band kband3 -0.04653 0.02128 4.78 0.0288 age band kband4 -0.09214 0.02349 15.39 8.8 × 10−5 age band kband5 -0.11568 0.02780 17.31 3.2 × 10−5 dx bin -0.77973 0.02527 952.40 < 2 × 10−16 educ 0.09885 0.00503 385.76 < 2 × 10−16 gen 0.03588 0.02450 2.14 0.1431 race lat -0.07673 0.00788 94.88 < 2 × 10−16 dx bin:t 0.00973 0.00300 10.29 0.0013
Table 6: GEE Model Results (Simulated Data, With Practice Effect)
Term Estimate Std. Error Wald p-value (Intercept) 0.28374 0.09455 9.01 0.00269 age visit -0.00622 0.00182 11.65 0.00064 dx bin -0.79729 0.02704 869.34 < 2 × 10−16 practiceprac1 0.20589 0.01082 362.13 < 2 × 10−16 practiceprac2 0.30321 0.01220 617.46 < 2 × 10−16 practiceprac3 0.38135 0.01414 727.41 < 2 × 10−16 practiceprac4 0.51345 0.01584 1050.84 < 2 × 10−16 practiceprac5 0.50425 0.01892 710.67 < 2 × 10−16 educ 0.09547 0.00535 318.25 < 2 × 10−16 gen 0.13455 0.02605 26.68 2.4 × 10−7 race lat -0.0777-
9 0.00861 81.54 < 2 × 10−16 dx bin:t 0.01414 0.00450 9.86 0.00169
(a) LME vs GEE Estimates (Without PE) (b) With vs Without PE Comparison
Figure 2: Model comparison plots. Left: LME vs GEE. Right: With vs Without Practice Effects.
10

Figure 3: Plot of Outcome Y over Age at Visit
4 Discussion
Longitudinal cognitive data reflect the combined influence of true temporal change and improvements driven by repeated test exposure. Extensive work has shown that practice effects (PE) can inflate performance, particularly early in follow-up, and may obscure or even reverse evidence of cognitive decline [20, 12, 10]. In aging and psychiatric research, failure to account for PE risks mischaracterizing disease progression, treatment response, and group differences [18, 2]. The present study directl-
y addressed this challenge by developing and evaluating a modeling framework that separates practice-related gains from aging-related change.
A central contribution of this work is the explicit specification of visit-level PE indicators, allowing practice gains to vary across assessments rather than assuming a constant or linear effect. This structure aligns with empirical patterns reported in neuropsychological cohorts, where the largest gains typically occur between the first and second assessments before plateauing [4, 1]. By estimating PE alongside demographic and diagnostic predictors, the model improves interpretability and reduce-
s the risk that attenuated aging slopes are mistakenly attributed to preserved cognition.
The simulation findings further reinforce the importance of explicitly modeling PE. When practice effects were embedded in the data-generating process but omitted from analysis, aging-related decline was underestimated and diagnostic differences were muted—consistent with concerns raised in prior methodological evaluations [15, 24]. Incorporating PE restored the expected negative association between age and cognition and recovered group contrasts, demonstrating that conventional longitudinal model-
s may yield misleading inferences when practice effects are ignored.
Another strength of the approach is the use of a flexible copula-based dependence structure to generate simulated data. This framework allows realistic within-subject correlation without imposing restrictive assumptions about temporal autocorrelation [5, 17]. The use of both linear mixed-effects models and generalized estimating equations ensured that conclusions were not tied to a single analytic framework, consistent with recommendations for longitudinal cognitive research [7].
11

Several limitations warrant consideration. Practice effects were modeled as monotonic and positive, yet PEs may diminish, reverse, or vary across cognitive domains, diagnostic groups, or testing intervals [22]. Future work may evaluate spline-based, nonlinear, or domain-specific PE structures. The simulations did not incorporate additional real-world complexities such as alternate test forms, contextual influences, or informative dropout. Finally, the empirical dataset consisted of midlife adults-
 from a single research program, potentially limiting generalizability to older populations or community-based samples.
Overall, these findings underscore the necessity of accounting for practice effects when interpreting longitudinal cognitive trajectories. The modeling strategy developed here offers a scalable, transparent, and empirically grounded approach for separating practice-related improvements from aging-related change. As repeated cognitive testing becomes increasingly common in clinical trials, epidemiologic studies, and preventative interventions, routine consideration of practice effects will be essen-
tial for accurate characterization of cognitive health across adulthood.
12

References
[1] Bartels, C., Wegrzyn, M., Wiedl, A., Ackermann, V., & Ehrenreich, H. (2010). Practice effects in healthy adults: A longitudinal study on frequent repetitive cognitive testing. BMC Neuroscience, 11, 118.
[2] Calamia, M., Markon, K., & Tranel, D. (2012). Scoring higher the second time around: Metaanalyses of practice effects in neuropsychological assessment. The Clinical Neuropsychologist, 26 (4), 543–570.
[3] Duff, K. (2012). Evidence-based indicators of neuropsychological change in the individual patient: Relevant concepts and methods. Archives of Clinical Neuropsychology, 27 (3), 248261.
[4] Duff, K., Beglinger, L. J., Schultz, S. K., et al. (2012). Practice effects in the prediction of long-term cognitive outcome in three patient samples. Archives of Clinical Neuropsychology, 27 (4), 374–382.
[5] Fieberg, J., Vitense, K., & Johnson, D. H. (2020). Resampling-based methods for biologists. Ecology Letters, 23 (1), 4–18.
[6] Fioravanti, M., Bianchi, V., & Cinti, M. E. (2012). Cognitive deficits in schizophrenia: An updated review. Clinical Neuropsychiatry, 9, 202–216.
[7] Fitzmaurice, G. M., Laird, N. M., & Ware, J. H. (2012). Applied longitudinal analysis (2nd ed.). Wiley.
[8] Goldberg, T. E., Goldman, R. S., Burdick, K. E., et al. (2007). Cognitive improvement after treatment with second-generation antipsychotic medications: Is it a practice effect? Archives of General Psychiatry, 64 (5), 507–518.
[9] Goldberg, T. E., & Weinberger, D. R. (2010). Cognitive improvement in schizophrenia: Practice effects or true cognitive change? Schizophrenia Bulletin, 36 (4), 787–789.
[10] Goldberg, T. E., Harvey, P. D., Hoyos, C., Korducki, M., & Miller, M. W. (2015). Practice effects due to serial cognitive assessment: Implications for preclinical Alzheimer’s disease randomized controlled trials. Alzheimer’s & Dementia: Diagnosis, Assessment & Disease Monitoring, 1 (1), 103–111.
[11] Granholm, E., Holden, J., Link, P. C., & McQuaid, J. R. (2010). Randomized clinical trial of cognitive behavioral social skills training for middle-aged and older outpatients with schizophrenia: Age-defining factors and practice effects. American Journal of Psychiatry, 167 (8), 845–854.
[12] Hausknecht, J. P., Halpert, J. A., Di Paolo, N. T., & Gerrard, M. O. (2007). Retesting in selection: A meta-analysis of coaching and practice effects for tests of cognitive ability. Journal of Applied Psychology, 92 (2), 373–385.
[13] Hill, S. K., Bishop, J. R., Palumbo, D., & Sweeney, J. A. (2010). Effect of second-generation antipsychotics on cognition: Current issues and future challenges. Expert Review of Neurotherapeutics, 10 (1), 43–57.
13

[14] Keefe, R. S. E., Kraemer, H. C., Epstein, R. S., et al. (2017). Placebo response and practice effects in schizophrenia: Analysis of cognitive trials with the MCCB. JAMA Psychiatry, 74 (8), 1–10.
[15] McArdle, J. J., & Hamagami, F. (2001). Modeling longitudinal data when retest effects are present. Multivariate Behavioral Research, 36 (1), 1–31.
[16] McArdle, J. J., Fisher, G. G., & Kadlec, K. M. (2009). Latent variable analyses of age trends of cognition in the Health and Retirement Study, 1992–2004. Psychology and Aging, 24 (3), 544–566.
[17] Nikoloulopoulos, A. K. (2018). A multivariate logistic regression model with application to clustered data. Biometrical Journal, 60 (3), 480–492.
[18] Rabbitt, P., Diggle, P., Holland, F., & McInnes, L. (1993). Practice and drop-out effects during a 17-year longitudinal study of cognitive aging. Journal of Gerontology, 48 (4), P84–P97.
[19] Rund, B. R. (1998). A review of longitudinal studies of cognitive functions in schizophrenia patients. Schiophrenia Bulletin, 24 (3), 425–435.
[20] Salthouse, T. A. (2010). Selective review of cognitive aging. Journal of the International Neuropsychological Society, 16 (5), 754–760.
[21] Salthouse, T. A. (2010). Influence of age on practice effects in longitudinal cognitive studies. Neuropsychology, 24 (5), 563–572.
[22] Salthouse, T. A. (2016). Continuity of cognitive change across adulthood. Psychonomic Bulletin & Review, 23 (3), 932–939.
[23] Sz ̈oke, A., Trandafir, A., Dupont, M.-E., M ́eary, A., Schu ̈rhoff, F., & Leboyer, M. (2008). Longitudinal studies of cognition in schizophrenia: Meta-analysis. British Journal of Psychiatry, 192 (3), 248–257.
[24] Wilson, R. S., Beckett, L. A., Barnes, L. L., Schneider, J. A., Bach, J., Evans, D. A., & Bennett, D. A. (2002). Individual differences in rates of change in cognitive abilities of older persons. Psychology and Aging, 17 (2), 179–193.
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:33.872Z
- **Text Length:** 30425 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
