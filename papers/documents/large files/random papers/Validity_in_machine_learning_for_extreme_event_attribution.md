# PDF Document: Chou et al. - 2025 - Validity in machine learning for extreme event attribution.pdf

**File Path:** Chou et al. - 2025 - Validity in machine learning for extreme event attribution.pdf

**Processed Date:** 2026-02-10T18:18:31.680Z

**File Size:** 2743.43 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3416

**Title:** Validity in machine learning for extreme event attribution

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Validity in machine learning for extreme event attribution
Cassandra C. Chou∗1, Scott L. Zeger1, and Benjamin Q. Huynh2
1Department of Biostatistics, Johns Hopkins University 2Department of Environmental Health & Engineering, Johns Hopkins University
Abstract
Extreme event attribution (EEA), an approach for assessing the extent to which disasters are caused by climate change, is crucial for informing climate policy and legal proceedings. Machine learning is increasingly used for EEA by modeling rare weather events otherwise too complex or computationally intensive to model using traditional simulation methods. However, the validity of using machine learning in this context remains unclear, particularly as high-stakes machine learning applications in ge-
neral are criticized for inherent bias and lack of robustness. Here we use machine learning and simulation analyses to evaluate EEA in the context of California wildfire data from 2003-2020. We identify three major threats to validity: (1) individual event attribution estimates are highly sensitive to algorithmic design choices; (2) common performance metrics like area under the ROC curve or Brier score are not strongly correlated with attribution error, facilitating suboptimal model selection; an-
d (3) distribution shift – changes in temperature across climate scenarios – substantially degrades predictive performance. To address these challenges, we propose a more valid and robust attribution analysis based on aggregate machine learning estimates, using an additional metric – mean calibration error – to assess model performance, and using subgroup and propensity diagnostics to assess distribution shift.
1 Introduction
Extreme weather events are increasing in frequency and magnitude, driven by human-induced changes in climate. To quantify this increase, extreme event attribution (EEA) seeks to evaluate the impact of climate change on the likelihood of extreme weather events. EEA approaches generally involve comparing the probability of extreme events under historically observed conditions with the probability of events under counterfactual pre-industrial conditions representing a world without human-induced clim-
ate change.1–3 Attribution studies are increasingly being used to help courts in cases determining liability for the damages caused by extreme events.4–7 EEA can also be used to compare current scenarios to projected climate scenarios, estimating the impact of climate change in the future, thereby informing adaptation planning via future risk estimates.8,9 Attribution analyses typically depend on global climate models, using physics-based simulations of the climate system under different forcing o-
r warming scenarios to assess human influence on extreme weather events. However, AI and machine learning techniques are increasingly being adopted for weather forecasting due to superior predictive performance and reduced computational costs in some contexts.10–16 Machine learning has been used to facilitate EEA for phenomena such as wildfires, heat waves, and tropical cyclones, often enabling attribution estimates that would otherwise be too complex or computationally expensive to model through -
traditional approaches.17–20 The validity of using machine learning for EEA remains unclear. Machine learning tools have been deployed in high-stakes applications – such as criminal justice or healthcare – with critical failures, raising questions of bias and robustness.21–25 It is therefore crucial to assess the extent to which using machine learning may introduce uncertainty, bias, or other threats to validity into EEA frameworks.26–29 Here we analyze California wildfire data from 2003-2020, eva-
luating the conditions under which machine learning can be used to produce valid attribution estimates. We identify three major validity challenges:
∗Corresponding author. Email: cchou24@jh.edu
1
arXiv:2511.19039v1 [stat.AP] 24 Nov 2025

1. Attribution of individual events via machine learning is subject to model multiplicity, where predictive models may exhibit different individual-level estimates despite similar aggregate predictive performance.27
2. Selection of an “optimal” model or algorithm to optimize typical performance metrics does not assure that the method is optimal for estimating the fraction of attributable risk (FAR), the scientific focus.
3. Counterfactual climate scenarios represent distribution shifts in predictor variables that can degrade predictive performance, inhibit model selection, and reduce accuracy in FAR estimation.
If left unaddressed, these issues indicate potential for non-robust or cherry-picked results when using machine learning for EEA. We first replicate an existing approach to using machine learning for EEA of California wildfires, where a machine learning model is trained on historical environmental data to predict extreme daily wildfire growth, then applied to a counterfactual dataset – generated using global climate models – representing different climate scenarios, where the ratio of predicted va-
lues under the counterfactual data to the observed values in the observed data represent the FAR, or the effect of climate change on extreme wildfire risk (Figure 1). This approach is a form of storyline attribution, where computational models are used to assess how historical events may have played out differently under different climate conditions. To evaluate model multiplicity, we repeat this process with different machine learning models and assess the variability in FAR estimates. Next, we c-
onduct simulation experiments in which true probabilities of extreme wildfires and the FAR are known. We generate new datasets, train machine learning models to estimate the FAR, and assess which internal performance metrics are most predictive of an accurate FAR estimate. We also quantify how FAR estimates are worse under stronger distribution shifts, represented by the severity of warming – we therefore analyze two counterfactual climate scenarios: a standard pre-industrial scenario and a worst--
case SSP5-8.5 end-of-century scenario. Finally, we present recommendations for valid event attribution using machine learning based on our results, calculating a final FAR estimate using our approach.
2 Results
2.1 Event attribution estimates are highly sensitive to model choice
Models with similar predictive performance produce conflicting signs – indicating fundamental disagreement on the directional impact of climate change on a wildfire day – in 41.84% of extreme fire growth days, with areas under the receiver operating characteristic curve (AUC) ranging from 0.86 to 0.89 (Figure 2). The median range factor of risk ratio (RR) estimates for an individual day was 1.47 (90% Uncertainty Interval: [1.18, 2.86]), meaning on a typical day, the largest RR estimate was 1.47 ti-
mes larger than the lowest estimate. These results hold under different scenarios. When considering all fire days and not only days with extreme fire growth, models produced estimates with conflicting signs in 38.08% of all days. The median range factor of RR estimates was 1.66 (1.20, 4.80). When comparing present-day to a worst-case future climate scenario (SSP5-8.5, end-of-century) instead of pre-industrial emissions levels, models produced estimates with conflicting signs in 51.05% of extreme f-
ire growth days. The median range factor of RR estimates for these extreme fire growth days was 2.91 (1.65, 7.65). When considering all fire days, models produced estimates with conflicting signs in 23.08% of observations. The median range factor of RR estimates was 3.59 (1.69, 14.45). However, aggregate estimates are more robust than individual-day estimates, with no models producing conflicting signs in either climate scenario comparison for aggregate RR estimates. Similarly, aggregate RR estima-
tes are smaller in range factor than the median range factor estimates for individual days: when comparing present-day to pre-industrial climate scenarios, the range factor of aggregate RRs is 1.15 (RR from 1.22 to 1.40). When comparing the present-day to SSP5-8.5 end-of-century climate scenarios, the range factor of aggregate RRs is 1.91 (from 1.26 to 2.40) (Supplementary Table 1).
2.2 Traditional performance metrics lead to inaccurate attribution estimates
In simulation analyses, models were likely to accurately estimate the aggregate FAR; the median absolute value of the log risk ratio error was 0.031 (0.0026, 0.15) (Figure 3). However, some estimates still vary,
2

especially under distribution shift. In the SSP5-8.5 end-of-century scenario, the median absolute value of the log risk ratio error was 0.16 (0.012, 0.55). Traditional predictive performance metrics such as AUC and Brier skill score showed weak to moderate correlations with log risk ratio error in simulation analyses (r = −0.26 and −0.46, respectively; p < 0.001). (Figure 4) Similarly, in the SSP5-8.5 end-of-century scenario comparison, AUC and Brier skill score showed weak correlations with log -
risk ratio error (r = 0.11 and −0.14; p < 0.001). We find an additional metric, mean calibration error, has a much stronger correlation with log risk ratio error (r = 0.87; p < 0.001). In the SSP5-8.5 end-of-century comparison, the correlation between mean calibration error and log risk ratio error is 0.23 (p < 0.001).
2.3 Models degrade under climate change-induced distribution shift
The distributions of propensity scores distinguishing historically observed conditions from pre-industrial conditions and historically observed conditions from SSP5-8.5, end-of-century conditions (Figure 1) and the distributions of temperature across climate scenarios (Figure 5) demonstrate that the distribution shift from historically observed data to SSP5-8.5, end-of-century is much larger than the shift from pre-industrial conditions to historically observed data. The proxy-A distance for the p-
re-industrial scenario is 0.405, while the proxy-A distance for the SSP5-8.5, end-of-century scenario is 1.38. Mean calibration error correlation with log risk ratio error is weaker under stronger distribution shift (0.87 vs. 0.23). Predictive performance decreases with temperature in historically observed data, with average mean calibration error increasing from 0.000821 at the lowest temperatures to 0.0288 at the highest temperatures, corresponding to a relative increase of 3408% (Figure 5). Sim-
ilarly, out-of-sample predictive performance decreases with distribution shift; out-of-sample mean calibration error increases from 0.00080 (90% Uncertainty Interval: (0.000073, 0.0032)) in the pre-industrial scenario to 0.0068 (0.00058, 0.023) in the SSP5-8.5, end-of-century scenario. Out-of-sample brier skill score decreases from 0.60 (0.47, 0.86) in the pre-industrial scenario to 0.51 (-0.40, 0.86) in the SSP5-8.5, end-of-century scenario.
3 Discussion
In this study, we found major threats to validity in using machine learning for EEA: model multiplicity, misleading performance metrics, and distribution shift. These findings do not invalidate using machine learning for EEA entirely, but indicate areas where careful model development and analyses will be necessary to generate robust results. Given the increasing relevance of both AI for modeling extreme events and of EEA for climate policy and litigation, it will be critical to determine best pra-
ctices for using machine learning methods in EEA. Our finding that individual-day attribution estimates are highly sensitive to model design choices suggests sociotechnical vulnerability to nonrobust results. High sensitivity means that results can easily be cherrypicked to obtain desired results by motivated actors, such as in a climate litigation setting where plaintiffs and defendants may introduce competing model estimates to determine liability for a single event. This phenomenon of model mul-
tiplicity arises from the fact that individual probabilities of events are underdetermined by the data; models are evaluated and selected based on aggregate predictive performance with no guarantees on accuracy for individual observations. It is for this reason that we recommend using aggregate attribution estimates over multiple extreme events rather than individual event attribution estimates – we found aggregate estimates to be far more robust to multiplicity, with no conflicting signs and only-
 modest differences between models. Existing approaches such as post hoc calibration, ensemble learning, or reconciliation are likely insufficient to resolve multiplicity in machine learning for EEA. Post hoc calibration works by training a calibration model on top of model estimates to generate more accurate probability estimates; however, extreme events are, by definition, rare, yielding a low effective sample size and reducing the effectiveness of calibration. Ensemble learning and reconciliati-
on both follow the principle that single-model estimates may be improved by aggregating predictions from multiple models. However, such approaches only work properly in “good faith” settings where model developers have the goal of finding the most accurate model; in an adversarial setting like climate litigation, motivated actors can still selectively construct ensembles by only including models advantageous for their needs.30,31 Nevertheless, including multiple models is a straightforward method
3

of assessing variation due to model choice, and we therefore recommend reporting results from different models. We recommend using mean calibration error as an additional predictive performance metric because it more directly relates to the estimand of interest, FAR. FAR error arises from poorly calibrated probability estimates, but metrics like AUC measure discriminative capacity, not calibration. Brier score and Brier skill score decompose into both discriminative and calibration components, in-
dicating they are not entirely suitable for estimating FAR error. As we found, however, optimal model selection is impaired by distribution shift. Mean calibration was strongly correlated with FAR error in a pre-industrial scenario, but not in an end-of-century SSP5-8.5 scenario. A worst-case scenario like SSP5-8.5 is more drastic of a change than a pre-industrial climate scenario, so the extent of distribution shift is greater. To assess distribution shift in EEA, we recommend two diagnostics: pr-
opensity models and temperature subgroup analyses. Propensity models can be used to assess distribution shift by training machine learning models to discriminate between two different climate scenarios – if propensity scores have low overlap, then the two scenarios are highly separable, indicating severe distribution shift (Figure 1). This use of propensity scores as a distance metric is also represented by proxy-A distance.32 In our temperature subgroup analyses, we found that predictive performa-
nce decreases as temperature rises, suggesting transporting models in our context works well when predicting for a cooler climate (i.e., a pre-industrial scenario) compared to a warmer climate (i.e., a future climate scenario). We therefore recommend only using machine learning for EEA when the extent of distribution shift is low and subgroup analyses suggest transportability. It is possible to obtain transported performance metrics via weighting, but such methods may be unreliable, particularly i-
n a finite-sample setting with rare events. Specifically, propensity models can be used to generate weights, which can then be used to create weighted predictive performance metrics that putatively represent how models may perform in a counterfactual climate scenario. However, we found that weighted metrics are less correlated with FAR error than unweighted metrics (Supplement), possibly because such approaches are unstable in settings with rare events. We estimated aggregate FAR comparing counter-
factual climate scenarios to historically observed data, instead of comparing different counterfactual climate scenarios to each other. Because our models are trained on factual, present-day data, we do not recommend comparing, for example, the pre-industrial to SSP5-8.5 end of century scenario. Estimating outcomes in two counterfactual scenarios instead of one would increase noise as well as susceptibility to distribution shift.
3.1 Limitations
Our work has several limitations. First, our dataset is limited to California wildfire days from 2003-2020 the relatively low sample size we use may have inhibited model performance. However, small sample sizes are commonplace given the rare nature of extreme events, and machine learning analyses for EEA should not assume large-scale data will be readily available. Another limitation of our work is the dependence of our data within wildfires; because we use daily wildfire data, many of our positiv-
e cases represent different days of the same wildfire. We mitigated this using temporal cross validation, where we split our data into three-year time intervals to contain the same wildfires in the same fold, but some wildfires may extend across time intervals. Further, we only consider wildfires – we do not assess other types of extreme events. As such, we identify issues and solutions related broadly to concepts and metrics for machine learning methods, rather than seeking the best specific mode-
ls, which will vary depending on context. We only considered five different machine learning models as an illustrative point, which does not provide a full estimate of model multiplicity. If we were to consider the full range of possible models, architectures, hyperparameters, and predictors, the true extent of multiplicity would be higher than what we estimated. Finally, we only examine the uncertainty arising from introducing machine learning to extreme event attribution – there are other source-
s of uncertainty intrinsic to extreme event attribution that are out of scope for this analysis.
3.2 Related work
Our work builds on previous work from Brown et al.20, which used machine learning to estimate attribution comparing the pre-industrial to present-day and various future climate scenarios using wildfire data. We also
4

draw from previous work that evaluates methods of assessing the accuracy of FAR estimates in simulations.33 We draw from previous work that uses artificial intelligence for EEA more broadly, with prior studies including machine learning for attribution for heat waves17,34, tropical cyclones19, and weather forecasting for extreme events and EEA.18 We also draw from previous work that uses statistical methods for EEA, including a prior study using extreme value theory to address modeling uncertaint-
ies.35 Relevant previous work also includes applications of AI and machine learning techniques for weather forecasting.10–16 Our work contributes to the literature by identifying challenges to validity from using machine learning for EEA.
3.3 Conclusion
Machine learning is increasingly being used to model extreme weather phenomena, and it is likely this trend will extend to extreme event attribution. Given the potential for machine learning applications in high-stakes scenarios to yield catastrophic results, it is imperative to establish best practices and validity conditions. Our recommendations – reporting results from multiple models, preferring aggregate attribution estimates over individual events, using mean calibration as a metric, and ass-
essing distribution shift and transportability – can be used to improve model robustness, but are largely technical in nature. Given attribution science’s rising role in climate litigation, there will likely be sociolegal issues arising from the use of AI in EEA, ranging from extant governance concerns such as reproducibility and transparency to more modern ones, such as adversarial uses of AI or opaque black-box decision-making. As AI advances, it is a critical priority to determine how to respon-
sibly use such models for effective climate research and policy.
4 Materials and methods
4.1 Data
To replicate experiments from Brown et al., we use their data on wildfire days across California from 20032020 (n = 17,910 fire days). Their data are obtained from a variety of publicly available sources: wildfire days are sourced from MODIS satellite estimates from NASA, predictor variables from reanalysis produced from the National Center for Atmospheric Research’s Weather Research Forecasting model, and climate simulation data are from CMIP6. Our variable of interest is extreme daily growth, sp-
ecifically defined as wildfire growth over 10,000 acres in a single day. There are 380 extreme daily growth days in our observed dataset. Our predictor variables fall into two main categories: weather and land. Weather variables are time-varying and include temperature, vapor pressure deficit, 100 hour dead fuel moisture and 1000 hour dead fuel moisture, precipitation, and wind speed. Land variables are non-time varying and include land use category (forest, shrub, or savanna/grassland), land aspe-
ct (cardinal direction), land slope, elevation above sea level, and vegetation fraction. The weather variables are precipitation and wind speed. Across predictor datasets, the land, precipitation, and wind speed variables are held constant. As described in Brown et al., temperature is changed using general circulation models to represent a pre-industrial time period and the SSP5-8.5 future emission scenario. They propagate these temperature changes into the vapor pressure deficit and dead fuel moi-
sture variables using physics-based calculations.
4.2 Methodology
Our overall approach consisted of training machine learning models to predict the probability of extreme daily growth of wildfires in California from 2003-2020. Formally, let D0 = (X(0), Y (0)) denote the historically observed data and D1 = X(1) the predictors from a counterfactual climate scenario. We fit a model fθˆ on D0 by empirical risk minimization,
θˆ = arg mθin
1 n
n
X
i=1
l fθ(x(0)
i ), y(0)
i , fˆ := fθˆ,
and apply fˆ to D1 to obtain counterfactual predictions
pˆ(1)
i = fˆ x(1)
i , i = 1, . . . , m,
5

collected as Pˆ(1) = {pˆ(1)
i }m
i=1. We then used predictions from these models under different climate scenarios to assess potential attribution to anthropogenic emissions. From there, we assessed three sources of uncertainty in our estimations: model multiplicity, machine learning error, and distribution shift in predictors under different climate scenarios (Figure 1).
4.2.1 Predicting probability of extreme daily growth
We trained several machine learning models on our present-day dataset to predict the probability of extreme daily growth using climate, land, and weather variables. We build separate models to make out-of-sample predictions for each three-year time period (2003-2005, 2006-2008, 2009-2011, 2012-2014, 2015-2017, 20182020) to avoid overfitting our models to the land and weather characteristics that remain constant across datasets. Each model is trained and tuned using cross-validation on the remainin-
g five time periods (e.g. the model for prediction in 2003-2005 is trained on data from 2006-2020). We split our sample based on time period to avoid training and validating on days from the same fire. We train and tuned models using cross validation on the full present-day dataset to predict the probability of extreme daily growth in the pre-industrial and SSP5-8.5 scenarios. For each time period, we train our models using five different machine learning algorithms: LightGBM36, Random Forest37, X-
GBoost38, logistic regression, and Elastic Net Regression39. We selected these algorithms to represent a combination of machine learning models used in prior studies (e.g. random forest), more modern machine learning techniques (e.g. LightGBM and XGBoost), and more traditional statistical methods (e.g. logistic regression and Elastic Net Regression). In total, for each climate scenario, we have five sets of out-of-sample predictions for the entire time period, each set representing a different mac-
hine learning algorithm.
4.2.2 Estimating fraction of attributable risk (FAR)
Fraction of attributable risk is a metric used to assess potential attribution to anthropogenic emissions in climate science. The fraction of attributable risk is calculated as:
F AR = 1 − E[Y (0)]
E[Y (1)]
where E[Y (0)] is the fire-day average probability of extreme daily growth in the historically observed dataset and E[Y (1)] is the probability of extreme daily growth in a counterfactual climate scenario. Since Y (1), counterfactual event prevalence, is unobserved, we substitute with Pˆ(1), our machine learning model estimates. For calculating and reporting attribution error, we report in terms of risk ratio, a related metric to FAR:
RR = E[Y (1)]
E[Y (0)]
In scenarios with small values of E[Y (1)], the FAR value may become infinitely large. Therefore, we also report the average treatment effect (ATE) in the supplement, which is proportional to FAR. Average treatment effect is calculated as:
AT E = E[Y (0)] − E[Y (1)]
The fire-day average probability of extreme daily growth in the real world is calculated as the fraction of extreme daily growth days in our observed dataset: 380/17910. To potentially account for machine learning errors not being propagated into overall attribution error, we use Prediction-Powered Inference.28 Prediction-Powered Inference uses information from the performance of the machine learning model on our labeled, observed data to inform the estimate of mean probability in our unlabeled co-
unterfactual world (see Supplement). We use a bootstrap method to estimate a 95% confidence interval for our estimates of ATE and FAR. We sample 17,910 matching days with replacement from our real and counterfactual world dataset and estimate ATE and FAR using the four methods, repeating this process 1,000 times. We then take the 2.5 and 97.5 percentile values of our 1,000 bootstrapped estimates to obtain the 95% confidence interval.
6

4.2.3 Assessing accuracy of FAR estimates
To assess the accuracy of our estimates, we generate datasets where we know the true treatment effect and fraction of attributable risk and implement the same model training and estimation process. We generate datasets by treating our predicted probabilities of extreme daily growth in the observed and counterfactual scenarios as the true probabilities of extreme daily growth. The probability of extreme daily growth used to calculate ATE and FAR is the mean of these predicted probabilities. We have-
 five different “truth” scenarios representing each machine learning method of generating the predicted probabilities, and generate 300 datasets per scenario. Specifically, for each day in our original dataset, we use our predicted probability of extreme daily growth in the observed data to generate 300 Bernoulli values that represent outcomes in 300 current world alternate realities. The aggregated Bernoulli values represent our new outcomes; the predictor variables remain the same as the observe-
d data across all 300 datasets. We train our machine learning models on the real world datasets and estimate the average treatment effect and fraction of attributable risk in each simulated reality using the same methods as above. We calculate the residual difference from the true values to compare performance of the different machine learning methods and performance of the effect estimation methods. Formally, let days be indexed by t = 1, . . . , T , methods by m = 1, . . . , 5, and simulation re-
plicates by r = 1, . . . , R with R = 300. For each method m, we define the “true” probabilities
π(0,m)
t ∈ [0, 1] and π(1,m)
t ∈ [0, 1],
obtained from our real- and counterfactual-world predicted probabilities, respectively. Let
μ(m)
0 =1
T
T
X
t=1
π(0,m)
t , μ(m)
1 =1
T
T
X
t=1
π(1,m)
t,
and define the truth for the estimands as
ATE⋆,(m) = μ(m)
1 − μ(m)
0 , FAR⋆,(m) = 1 − μ(m)
0 μ(m)
1
.
For each replicate r and method m, we generate outcomes on the real-world design by
Y (0,m)
t,r ∼ Bernoulli π(0,m)
t (t = 1, . . . , T ),
keeping the predictors X(0) and X(1) fixed across replicates. We then train the model on D(m)
0,r = (X(0), Y (0,m)
r)
and apply it to X(1) to obtain
pˆ(1,m)
t,r = fˆ(m)
r x(1)
t.
From there, we are able to compare our predicted probabilities pˆ(1,m)
t,r to the “true” probabilities to calculate attribution error.
4.2.4 Calculating performance metrics and their relationship to FAR error
Using our simulated datasets, we evaluated the correlation between standard predictive performance metrics and the accuracy of our FAR estimates to assess the best performance metrics for choosing a model in our context. We use log risk ratio error as a measure of FAR accuracy for its mathematical stability, which can be represented as:
|log( Y (0)
pˆ(1) ) − log( Y (0)
p(1) )|
We calculated the area under the ROC curve (AUC), which represents the probability that our model will correctly predict a higher probability for a randomly chosen positive case than a randomly chosen negative case. We calculated Brier score, which is the mean squared difference between predicted probabilities and true outcomes:
1 n
n
X
i=1
pˆ(1)
i − y(1)
i
2.
7

We also calculated Brier skill score, which is a measure of how the model does relative to a reference model that predicts the mean predicted probability for every observation:
BSS = 1 − BSmodel
BSref
= BSref − BSmodel
BSref
.
All of these metrics measure the accuracy of individual predictions or individual predictions relative to each other. However, because FAR is dependent on the accuracy of the mean probability, we propose a fourth metric: mean calibration error. This is represented by the absolute value of the difference between the mean predicted probability and the true proportion of outcomes:
1 n
n
X
i=1
pˆi − 1
n
n
X
i=1
yi
.
4.2.5 Distribution shift diagnostics
To diagnose distribution shift under anthropogenic climate change, we use methods of propensity score weighting, often referred to as importance weighting. Propensity score in this context is the estimated probability of a fire day being from the historically observed dataset based on our climate, land, and weather predictors. To estimate the propensity score, we create combined datasets of our predictors from the observed and counterfactual data and include a binary indicator variable for the sou-
rce data (e.g., “1” for historically observed data, “0” for counterfactual data). We create separate datasets for each counterfactual scenario. We use the same sample splitting method by three-year time period to predict the probability of a fire day being in the real world. We tuned our propensity models via cross-validation using LightGBM. The result is a set of propensity scores for the real and counterfactual worlds using out-of-sample predictions; the real world propensity scores change with -
each counterfactual world. We chose LightGBM as the propensity model for its computational efficiency and ability to flexibly model nonlinear relationships amongst predictors; as robustness checks, we also tested a variety of different propensity models (Supplement). We used principal components analysis to visualize and summarize distribution shifts across climate scenarios. We calculated proxy-A distance as a measure of distribution shift, which is represented as:
dbA = 2 − 4e, e = 1 − acc.
In this case, accuracy is calculated as the percentage of correctly labeled points. We used a positive label threshold of 0.5.32 To assess the impact of distribution shift on predictive performance, we performed a temperature subanalysis on our present-day data. We binned our present-day data into eight groups by temperature and recalculated mean calibration error in each bin.
8

5 Figures
a
Train ML model on observed data to predict extreme weather event
Estimate probability of event under counterfactual climate scenario
Calculate effect attributable to antropogenic climate change
b Uncertainty introduced by machine learning
Machine Learning Error Distribution Shift
Model Multiplicity
Figure 1: Machine learning framework for extreme event attribution, including challenges to validity introduced by machine learning. a, Overview of machine learning methodology to conduct extreme event attribution. b, Challenges to validity introduced by machine learning: error in machine learning estimates of event probability leads to higher error in fraction of attributable risk (FAR) estimates; propensity score separability indicates distribution shift under different climate scenarios; FAR es-
timates vary widely for an example extreme fire day using five different machine learning models with similar predictive performance, demonstrating model multiplicity.
9

a
b
Figure 2: Sensitivity of individual-event estimates to different model specifications, indicating model multiplicity. a, Estimated fractions of attributable risk (FARs) for 380 extreme fire days in a pre-industrial scenario and an end-of-century SSP5-8.5 scenario: horizontal lines indicate range of estimates across different machine learning models, with arrows representing values outside the frame; horizontal lines crossing zero model disagreement on the directional impact of climate change. b, P-
erformance metrics to evaluate machine learning models.
10

Figure 3: Absolute value of log risk ratio error, by model. Distribution of the absolute value of log risk ratio error estimates from 7500 simulations. Individual points represent approximately 15 fire days, and are colored by machine learning model. Underlying grey violin plot indicates density across all models in the simulations.
11

a
b
c
Pre-Industrial SSP5-8.5, End-of-Century
Figure 4: Correlations between internal predictive performance metrics and accuracy of the fraction of attributable risk estimate, modeled across 7500 simulations. a, Area under the receiver operating characteristic curve (AUC); increases with predictive performance. b, Brier skill score; increases with predictive performance. c, Mean calibration error; decreases with predictive performance.
12

c
a
b
Figure 5: Predictive performance degrades when transporting to warmer temperatures. a, Mean calibration error when cross-validated on historically observed data, subgrouped by bins of temperature. b, Density plots illustrating temperature distribution shifts across climate scenarios. c, Principal components analysis of historically observed data, with arrows indicating direction and magnitude of covariate shift when compared to alternative climate scenarios. 13

References
1. Stott, P. A., Christidis, N., Otto, F. E. L., Sun, Y., Vanderlinden, J.-P., van Oldenborgh, G. J., Vautard, R., von Storch, H., Walton, P., Yiou, P. & Zwiers, F. W. Attribution of extreme weather and climaterelated events. en. WIREs Climate Change 7. eprint: https://wires.onlinelibrary.wiley.com/doi/pdf/10.1002/wcc.380, 23–41. issn: 1757-7799. https://onlinelibrary.wiley.com/doi/abs/10.1002/wcc.380 (2025) (2016).
2. Otto, F. E. L. Attribution of Weather and Climate Events. en. Annual Review of Environment and Resources 42. Publisher: Annual Reviews, 627–646. issn: 1543-5938, 1545-2050. https://www.annualreviews. org/content/journals/10.1146/annurev-environ-102016-060847 (2025) (Oct. 2017).
3. Perkins-Kirkpatrick, S. E., Stone, D. A., Mitchell, D. M., Rosier, S., King, A. D., Lo, Y. T. E., PastorPaz, J., Frame, D. & Wehner, M. On the attribution of the impacts of extreme weather events to anthropogenic climate change. en. Environmental Research Letters 17. Publisher: IOP Publishing, 024009. issn: 1748-9326. https://doi.org/10.1088/1748-9326/ac44c8 (2025) (Jan. 2022).
4. Lloyd, E. A. & Shepherd, T. G. Climate change attribution and legal contexts: evidence and the role of storylines. en. Climatic Change 167, 28. issn: 1573-1480. https://doi.org/10.1007/s10584-02103177-y (2025) (Aug. 2021).
5. Burger, M., Wentz, J. & Horton, R. The Law and Science of Climate Change Attribution. en. Columbia Journal of Environmental Law 45. issn: 2837-5297. https://journals.library.columbia.edu/ index.php/cjel/article/view/4730 (2025) (Feb. 2020).
6. Marjanac, S. & Patton, L. Extreme weather event attribution science and climate change litigation: an essential step in the causal chain? Journal of Energy & Natural Resources Law 36. Publisher: Routledge eprint: https://doi.org/10.1080/02646811.2018.1451020, 265–298. issn: 0264-6811. https: //doi.org/10.1080/02646811.2018.1451020 (2025) (July 2018).
7. Adam, D. Climate change in court. en. Nature Climate Change 1. Publisher: Nature Publishing Group, 127–130. issn: 1758-6798. https://www.nature.com/articles/nclimate1131 (2025) (June 2011).
8. Clarke, B. J., E. L. Otto, F. & Jones, R. G. Inventories of extreme weather events and impacts: Implications for loss and damage from and adaptation to climate extremes. Climate Risk Management 32, 100285. issn: 2212-0963. https : / / www . sciencedirect . com / science / article / pii / S2212096321000140 (2025) (Jan. 2021).
9. Thompson, A. & Otto, F. E. L. Ethical and normative implications of weather event attribution for policy discussions concerning loss and damage. en. Climatic Change 133, 439–451. issn: 1573-1480. https://doi.org/10.1007/s10584-015-1433-z (2025) (Dec. 2015).
10. Bi, K., Xie, L., Zhang, H., Chen, X., Gu, X. & Tian, Q. Accurate medium-range global weather forecasting with 3D neural networks. en. Nature 619. Publisher: Nature Publishing Group, 533–538. issn: 1476-4687. https://www.nature.com/articles/s41586-023-06185-3 (2025) (July 2023).
11. Liu, C.-C., Hsu, K., Peng, M. S., Chen, D.-S., Chang, P.-L., Hsiao, L.-F., Fong, C.-T., Hong, J.-S., Cheng, C.-P., Lu, K.-C., Chen, C.-R. & Kuo, H.-C. Evaluation of five global AI models for predicting weather in Eastern Asia and Western Pacific. en. npj Climate and Atmospheric Science 7. Publisher: Nature Publishing Group, 221. issn: 2397-3722. https://www.nature.com/articles/s41612-02400769-0 (2025) (Sept. 2024).
12. Charlton-Perez, A. J., Dacre, H. F., Driscoll, S., Gray, S. L., Harvey, B., Harvey, N. J., Hunt, K. M. R., Lee, R. W., Swaminathan, R., Vandaele, R. & Volonte ́, A. Do AI models produce better weather forecasts than physics-based models? A quantitative evaluation case study of Storm Ciar ́an. en. npj Climate and Atmospheric Science 7. Publisher: Nature Publishing Group, 93. issn: 2397-3722. https: //www.nature.com/articles/s41612-024-00638-w (2025) (Apr. 2024).
13. Kurth, T., Subramanian, S., Harrington, P., Pathak, J., Mardani, M., Hall, D., Miele, A., Kashinath, K. & Anandkumar, A. FourCastNet: Accelerating Global High-Resolution Weather Forecasting using Adaptive Fourier Neural Operators. en. https://authors.library.caltech.edu/records/98c3ker634 (2025).
14

14. Lam, R., Sanchez-Gonzalez, A., Willson, M., Wirnsberger, P., Fortunato, M., Alet, F., Ravuri, S., Ewalds, T., Eaton-Rosen, Z., Hu, W., Merose, A., Hoyer, S., Holland, G., Vinyals, O., Stott, J., Pritzel, A., Mohamed, S. & Battaglia, P. Learning skillful medium-range global weather forecasting. Science 382. Publisher: American Association for the Advancement of Science, 1416–1421. https : / / www . science.org/doi/10.1126/science.adi2336 (2025) (Dec. 2023).
15. Price, I., Sanchez-Gonzalez, A., Alet, F., Andersson, T. R., El-Kadi, A., Masters, D., Ewalds, T., Stott, J., Mohamed, S., Battaglia, P., Lam, R. & Willson, M. Probabilistic weather forecasting with machine learning. en. Nature 637. Publisher: Nature Publishing Group, 84–90. issn: 1476-4687. https: //www.nature.com/articles/s41586-024-08252-9 (2025) (Jan. 2025).
16. Vaughan, A., Markou, S., Tebbutt, W., Requeima, J., Bruinsma, W. P., Andersson, T. R., Herzog, M., Lane, N. D., Hosking, J. S. & Turner, R. E. Aardvark Weather: end-to-end data-driven weather forecasting arXiv:2404.00411 [physics] version: 1. Apr. 2024. http://arxiv.org/abs/2404.00411 (2025).
17. Trok, J. T., Barnes, E. A., Davenport, F. V. & Diffenbaugh, N. S. Machine learning–based extreme event attribution. Science Advances 10. Publisher: American Association for the Advancement of Science, eadl3242. https://www.science.org/doi/10.1126/sciadv.adl3242 (2025) (Aug. 2024).
18. Jim ́enez-Esteve, B., Barriopedro, D., Johnson, J. E. & Garcia-Herrera, R. AI-driven weather forecasts enable anticipated attribution of extreme events to human-made climate change arXiv:2408.16433 [physics]. Aug. 2024. http://arxiv.org/abs/2408.16433 (2025).
19. Loridan, T. & Bruneau, N. Reask UTC: a machine learning modeling framework to generate climateconnected tropical cyclone event sets globally. English. Natural Hazards and Earth System Sciences 25. Publisher: Copernicus GmbH, 2863–2884. issn: 1561-8633. https : / / nhess . copernicus . org / articles/25/2863/2025/ (2025) (Aug. 2025).
20. Brown, P. T., Hanley, H., Mahesh, A., Reed, C., Strenfel, S. J., Davis, S. J., Kochanski, A. K. & Clements, C. B. Climate warming increases extreme daily wildfire growth risk in California. en. Nature 621. Publisher: Nature Publishing Group, 760–766. issn: 1476-4687. https : / / www . nature . com / articles/s41586-023-06444-3 (2025) (Sept. 2023).
21. Buolamwini, J. & Gebru, T. Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification en. in Proceedings of the 1st Conference on Fairness, Accountability and Transparency ISSN: 2640-3498 (PMLR, Jan. 2018), 77–91. https://proceedings.mlr.press/v81/buolamwini18a. html (2025).
22. Dressel, J. & Farid, H. The accuracy, fairness, and limits of predicting recidivism. Science Advances 4. Publisher: American Association for the Advancement of Science, eaao5580. https://www.science. org/doi/10.1126/sciadv.aao5580 (2025) (Jan. 2018).
23. Corbett-Davies, S., Pierson, E., Feller, A., Goel, S. & Huq, A. Algorithmic Decision Making and the Cost of Fairness in Proceedings of the 23rd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (Association for Computing Machinery, New York, NY, USA, Aug. 2017), 797–806. isbn: 978-1-4503-4887-4. https://doi.org/10.1145/3097983.3098095 (2025).
24. Obermeyer, Z., Powers, B., Vogeli, C. & Mullainathan, S. Dissecting racial bias in an algorithm used to manage the health of populations. Science 366. Publisher: American Association for the Advancement of Science, 447–453. https://www.science.org/doi/10.1126/science.aax2342 (2025) (Oct. 2019).
25. Wong, A., Otles, E., Donnelly, J. P., Krumm, A., McCullough, J., DeTroyer-Cooley, O., Pestrue, J., Phillips, M., Konye, J., Penoza, C., Ghous, M. & Singh, K. External Validation of a Widely Implemented Proprietary Sepsis Prediction Model in Hospitalized Patients. JAMA Internal Medicine 181, 1065–1070. issn: 2168-6106. https://doi.org/10.1001/jamainternmed.2021.2626 (2025) (Aug. 2021).
26. Behzad, T., Casacuberta, S., Diana, E. R. & Tolbert, A. W. Reconciling Predictive Multiplicity in Practice arXiv:2501.16549 [cs]. Jan. 2025. http://arxiv.org/abs/2501.16549 (2025).
27. Dai, G., Ravishankar, P., Yuan, R., Neill, D. B. & Black, E. Be Intentional About Fairness!: Fairness, Size, and Multiplicity in the Rashomon Set arXiv:2501.15634 [cs]. Jan. 2025. http://arxiv.org/abs/ 2501.15634 (2025).
15

28. Angelopoulos, A. N., Bates, S., Fannjiang, C., Jordan, M. I. & Zrnic, T. Prediction-powered inference. Science 382. Publisher: American Association for the Advancement of Science, 669–674. https:// www.science.org/doi/full/10.1126/science.adi6000 (2025) (Nov. 2023).
29. Ovadia, Y., Fertig, E., Ren, J., Nado, Z., Sculley, D., Nowozin, S., Dillon, J. V., Lakshminarayanan, B. & Snoek, J. Can You Trust Your Model’s Uncertainty? Evaluating Predictive Uncertainty Under Dataset Shift arXiv:1906.02530 [stat]. Dec. 2019. http://arxiv.org/abs/1906.02530 (2025).
30. Roth, A., Tolbert, A. & Weinstein, S. Reconciling Individual Probability Forecasts in Proceedings of the 2023 ACM Conference on Fairness, Accountability, and Transparency (Association for Computing Machinery, New York, NY, USA, June 2023), 101–110. isbn: 979-8-4007-0192-4. https://dl.acm. org/doi/10.1145/3593013.3593980 (2025).
31. Behzad, T., Casacuberta, S., Diana, E. R. & Tolbert, A. W. Reconciling Predictive Multiplicity in Practice 2025. arXiv: 2501.16549 [cs.CY]. https://arxiv.org/abs/2501.16549.
32. Ben-David, S., Blitzer, J., Crammer, K. & Pereira, F. Analysis of Representations for Domain Adaptation in Advances in Neural Information Processing Systems (eds Sch ̈olkopf, B., Platt, J. & Hoffman, T.) 19 (MIT Press, 2006). https://proceedings.neurips.cc/paper_files/paper/2006/file/ b1b0432ceafb0ce714426e9114852ac7-Paper.pdf.
33. Lott, F. C. & Stott, P. A. Evaluating Simulated Fraction of Attributable Risk Using Climate Observations. en. Section: Journal of Climate. https://journals.ametsoc.org/view/journals/clim/29/ 12/jcli-d-15-0566.1.xml (2025) (June 2016).
34. Callahan, C. W., Trok, J., Wilson, A. J., Gould, C. F., Heft-Neal, S., Diffenbaugh, N. S. & Burke, M. Increasing risk of mass human heat mortality if historical weather patterns recur. Nature Climate Change, 1–7 (2025).
35. Naveau, P., Hannart, A. & Ribes, A. Statistical Methods for Extreme Event Attribution in Climate Science. en. Annual Review of Statistics and Its Application 7. Publisher: Annual Reviews, 89–110. issn: 2326-8298, 2326-831X. https://www.annualreviews.org/content/journals/10.1146/annurevstatistics-031219-041314 (2025) (Mar. 2020).
36. Ke, G., Meng, Q., Finley, T., Wang, T., Chen, W., Ma, W., Ye, Q. & Liu, T.-Y. LightGBM: A Highly Efficient Gradient Boosting Decision Tree in Advances in Neural Information Processing Systems 30 (Curran Associates, Inc., 2017). https://proceedings.neurips.cc/paper/2017/hash/ 6449f44a102fde848669bdd9eb6b76fa-Abstract.html (2025).
37. Breiman, L. Random Forests. en. Machine Learning 45, 5–32. issn: 1573-0565. https://doi.org/10. 1023/A:1010933404324 (2025) (Oct. 2001).
38. Chen, T. & Guestrin, C. XGBoost: A Scalable Tree Boosting System en. in Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (ACM, San Francisco California USA, Aug. 2016), 785–794. isbn: 978-1-4503-4232-2. https://dl.acm.org/doi/10.1145/ 2939672.2939785 (2025).
39. Zou, H. & Hastie, T. Regularization and Variable Selection Via the Elastic Net. en. Journal of the Royal Statistical Society Series B: Statistical Methodology 67, 301–320. issn: 1369-7412, 1467-9868. https://academic.oup.com/jrsssb/article/67/2/301/7109482 (2025) (Apr. 2005).
16

6 Supplementary Appendix
Table 1: Aggregate risk ratio estimates
Machine Learning Method Pre-Industrial vs. Present-Day Present-Day vs. SSP5-8.5, end-of-century
LightGBM 1.40 1.26 Random Forest 1.39 2.27 XGBoost 1.30 1.67 Logistic Regression 1.22 2.17 Elastic Net Regression 1.27 2.40
Table 2: Aggregate fraction of attributable risk estimates
Machine Learning Method Pre-Industrial vs. Present-Day Present-Day vs. SSP5-8.5, end-of-century
LightGBM 0.284 0.205 Random Forest 0.281 0.560 XGBoost 0.232 0.400 Logistic Regression 0.180 0.539 Elastic Net Regression 0.212 0.583
Table 3: Regret demonstrates that predictive performance decreases with distribution shift. Regret, calculated as the mean absolute value log risk ratio error in the model with the best in-sample performance metric across 1000 sampled simulations across 50 samples.
AUC Brier Skill Score Mean Calibration Error
Pre-Industrial 0.0392 0.0142 0.0250 SSP5-8.5, End of Century 0.124 0.0347 0.164
17

Supplementary Figure 1: Prediction-powered inference (PPI) does not improve accuracy of FAR estimates, even when using propensity score weighting. Boxplots demonstrating distribution of log risk ratio estimates across simulated datasets. Calculating FAR using mean prediction of individual event probabilities as the probability of extreme wildfire growth in the counterfactual scenario yields the most accurate estimate.
Pre-Industrial SSP5-8.5, End-of-Century
Supplementary Figure 2: Mean calibration error weighted by propensity scores does not show strong correlation with accuracy of risk ratio estimates, demonstrating that transport metrics did not work well in this context. Binned heatmap of weighted mean calibration error estimates from simulations with correlation with absolute value log risk ratio error estimates. Selected data are omitted for clarity of visualization.
18

Pre-Industrial SSP5-8.5, End-of-Century
Supplementary Figure 3: Brier score and accuracy of the risk ratio. Binned heatmap of brier score estimates from simulations with correlation with absolute value log risk ratio error estimates. Selected data are omitted for clarity of visualization.
Supplementary Figure 4: Sensitivity of individual-event ATE estimates to different model specifications.
19

a
b
c
Pre-Industrial SSP5-8.5, End-of-Century
Supplementary Figure 5: Correlations between internal predictive performance metrics and accuracy of the average treatment effect estimate, modeled across 7500 simulations.
20

Supplementary Figure 6: Out-of-sample performance metrics perform better in the pre-industrial climate scenario than in the SSP5-8.5, end-of-century scenario. Distribution of out-of-sample brier skill score and out-of-sample mean calibration error estimates from simulations.
21

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:31.680Z
- **Text Length:** 49302 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
