# PDF Document: Camacho - 2025 - A Set of Rules for Model Validation.pdf

**File Path:** Camacho - 2025 - A Set of Rules for Model Validation.pdf

**Processed Date:** 2026-02-10T18:18:16.786Z

**File Size:** 283.83 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3410

**Title:** A Set of Rules for Model Validation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A Set of Rules for Model Validation
José Camacho1
University of Granada
Abstract
The validation of a data-driven model is the process of assessing the model’s ability to generalize to new, unseen data in the population of interest. This paper proposes a set of general rules for model validation. These rules are designed to help practitioners create reliable validation plans and report their results transparently. While no validation scheme is flawless, these rules can help practitioners ensure their strategy is sufficient for practical use, openly discuss any limitations of th-
eir validation strategy, and report clear, comparable performance metrics.
Keywords: Validation, Cross-validation
1. Introduction
Model validation is a fundamental task in all modern data-driven systems, whether they fall under the broad categories of Statistics, Machine Learning (ML), Artificial Intelligence (AI), or more specialized fields like chemometrics. Validation has become a major focus for regulatory and standardization bodies, with key reports and standards highlighting the growing concern for ensuring the trustworthiness and reliability of data-driven models:
• NIST AI Risk Management Framework (AI RMF 1.0, 2023): Published by the U.S. Department of Commerce, this framework provides management techniques to address the risks and ensure the trustworthiness of AI systems, with validation as a core component.
• The EU AI Act of 2024, landmark piece of EU legislation that categorizes AI systems by risk level, where validation is not defined as a best practice but a legal requirement within the conformity assessment.
• The ISO/IEC TS 4213:2022, by the International Organization for Standardization (ISO), describes approaches and methods to ensure the rele
Email address: josecamacho@ugr.es (José Camacho)
1Signal Theory, Networking and Communications Department, University of Granada, C/ Periodista Daniel Saucedo Aranda s/n 18071, Granada, Spain
Preprint submitted to Elsevier November 27, 2025
arXiv:2511.20711v1 [stat.ME] 24 Nov 2025

vance, legitimacy and extensibility of machine learning classification performance assertions.
• The IEEE P2841TM-2022 is a recommended practice for the framework and process for deep learning evaluation.
Besides these official bodies, there has been a renewed effort in scientific journals to discuss and promote sound practices for model evaluation and validation in data-driven research [1, 2], which resonates in the field of chemometrics [3, 4, 5, 6]. All previous literature is either regulatory or methodological, focusing on a list of specific data processing methods and good practices, like the use of external validation and/or cross-validation (CV). The approach of this perspective paper is dif-
ferent: to suggest a reduced number of conceptual, general rules for proper validation, which provide the intuition behind the methods that are discussed elsewhere. These rules are useful to:
• Design sound validation schemes in complex problems/data pipelines.
• Report transparent and comparable performance results.
• Specify limitations of reported validation results, in terms of different forms of risks.
A core principle of these rules is the recognition that model validation is rarely perfect, so risks need to be reported along with performance evaluation results.
2. Rules of Validation
We need to start with the definition of the term validation. In the field of classical (frequentist) statistics, validation is often interpreted as the evaluation of the stability and statistical significance of the model parameters [7]. Thus, the model is valid if the parameters are statistically significant (and so, unlikely to be the result of a purely random process) and stable (they would not change dramatically in front of expected changes in the input). This paper, however, focuses on the m-
ore popular definition of validation in the field of machine learning, interpreted as the evaluation of the model’s capability for performance generalization. A valid model is the one that maintains a high modeling performance when applied to new (independent) data from the population of interest, that is, the (potentially unlimited) set of data objects for which the model makes some form of inference (prediction, classification, hypothesis test, anomaly detection, etc.) This second definition als-
o reflects the relevance of stability (when applied to new data) but substitutes statistical significance with performance generalization. Note that these three interconnected concepts: stability, statistical significance and performance generalization, have a principal role in the proposed validation rules.
2

2.1. Rule 1: Use independent data for model building and for the evaluation of the generalization performance
Data-driven models have two types of parameters: the regular ones, which values are automatically derived from data using a fitting algorithm, and the meta-parameters, which values are selected by the analyst in a pseudo-automatic fashion. For instance, in Principal Component Analysis (PCA) we may use the NIPALS algorithm to fit loadings and scores (the regular parameters), and CV to select the number of components (the single PCA meta-parameter) [8, 9]. Thus, model building comprises two interrel-
ated tasks:
• Training or data fitting. Both terms are interchangeably employed by the ML community, while in chemometrics the term ’calibration’ is popular due to the wide interest in extracting quantitative information from complex analytical instruments, which have to be calibrated. Training, data fitting or calibration refer to the estimation of regular parameters using a suitable fitting algorithm.
• Model selection. Select the model with the best performance among a set of possibilities, which vary in the meta-parameters’ values.
The whole process of model building can be done with two data splits (often called ‘training’ and ‘validation’ sets) or through some form of CV. Once the model is built, the generalization performance is then evaluated with an additional ‘test’ set or through double/nested CV [10]. The separation between model building and test data is a cornerstone of the engineering of data-driven models, since there is often a significant gap between performances in validation and test sets [2], so that perform-
ance is often higher in the former. When such a gap exists, we say that the model is overfit to the model building data, capturing patterns that are only found in these data but do not generalize to the test set and to the population of interest. The first rule states that the ’test’ set needs to be drawn independently of the dataset(s) used during model building. The problem lies in the definition of independence, which is more intricate than one might initially expect. This issue is treated in d-
etail in the next rule. The consequence of a lack of independency is that the perceived generalization performance of the model gets too optimistic, appearing that the model performs better than what it actually does. Notice here an important distinction: the perceived generalization performance is the one inferred by applying the model to the test set, while the true generalization performance is the one for the model applied over the population of interest. The dependency between model building -
and test data constitutes one of the major risks in validation and is one type of the so-called data leakage, which happens when a model is trained using information that would not be available at the time of real-world practice. This dependency inflates the perceived generalization performance, because it incorporates patterns that are true for both the model building data and the test data, but are not generally true for the population of interest. Those patterns constitute the leakage informati-
on.
3

A final remark is that, strictly speaking, the ‘training’ and ‘validation’ sets do not need to be independent. Actually, some fast model selection procedures may indeed violate the independence between ‘training’ and ‘validation’ data [11].
2.2. Rule 2: the test set, the population of interest and the real-life application of the model need to be consistent
As Esbense and Geladi claim [12, 13] "All prediction models must be validated with respect to realistic future circumstances". This statement is particularly relevant in terms of the completeness of the test data and its level of independence with the model building data, among other considerations that affect data quality [14].
If the test set is poorly representative of the population of interest, the perceived generalization performance will be of little practical use. This is where concepts like completeness and bias are relevant. For instance, when we build models for disease diagnosis in humans using measurements over blood samples, we would ideally like those models to work for the entire population of blood samples coming from humans, regardless of sex, race, geographical location, biological predisposition, expos-
ures, the laboratory where samples were measured, the measurement protocol, etc. Unfortunately, it is difficult, expensive or even unrealistic to gather a sufficiently representative test set taking all previous considerations and more into account. For this reason, compromises are most often made to derive simpler and less expensive models for the application at hand. For that purpose it is key to determine a practical definition of the population of interest and subsequently select a representat-
ive test set. Selecting the level of independence of the test set is also complex because there are sources of interdependence that can easily go unnoticed or are complex to avoid in real practice. Dependency is inherently connected to incompleteness, since one form of dependency is the direct consequence of the latter. Take for instance the popular criticism of genomics models being biased due to the over-representation of European-ancestry populations [15]. When we build and test models mainly o-
n these populations, we cannot expect that they generalize well to other human populations. First, because the test is incomplete, and so we do not know how the model performs for other types of samples. Second, because both model building and test data are incomplete in the same way, which creates a dependency that inflates the perceived generalization performance.
The requirements of the validation depend on the purpose of the model, so that the completeness of the test set and the level of independence between model building and test data should be designed to mimic the reallife application. This is a powerful approach to design sound and practical validation schemes. Basically, we consider the practicalities of the application to decide the characteristics of the test set and the validation process. For instance, to improve local health practice in a hosp-
ital, it may be enough to validate a model in two alternative cohorts from that same hospital.
4

An important element of a validation strategy that mimics the real-life application is that any relevant data processing operation during model building (either at model fitting or model selection) should not consider the ’test’ data in any way possible. This is simply because in real-life practice, the data that will be inputted into the model is not available in advance, and test data should have the same consideration of no availability. Processing operations at model building which should be -
blind to the test set often include preprocessing options like mean-centering or auto-scaling (where means and scales can be considered model parameters), variable selection (selected variables can be considered meta-parameters), and similar operations [4]. This also means that nested CV routines should be designed to perform these operations within the inner loop, without using the corresponding ’test’ split of data. An unfortunately extended bad practice [4, 6] is applying variable selection usi-
ng the entire dataset and subsequently split the data in model building and test. An equivalent error is to perform variable selection and subsequently perform inferential procedures (like t-tests, ANOVA tests, univariate estimates of precision or recall, ROC curves, etc.) on the selected variables, since these procedures do not consider that the variables have been pre-selected from a larger group as the most promising ones. We should not confuse the previous situation with the one in which the d-
ata is transformed with internal statistics, for instance when working on normalized observations (e.g., for compositional data or derivatives in spectra) or on normalized windows of time series data (e.g., working on mean-centered intervals or incremental data). Such operations require to estimate statistics from each piece of data to preprocess that same piece of data. Because in the real-life application, each piece of data will be preprocessed with its own estimates, we can do the same for the-
 ’test’ set. Each real-life application involves convoluted practicalities relevant to validation. That is why it is valuable to reflect on the information that you have available in real practice and, more importantly, the information that you do not have available to design the validation approach. In the following, some examples to illustrate the rule criterion are discussed:
• If the complete data is preprocessed variable-wise (e.g., data mean-centering), the test set for validation should be transformed with the preprocessing parameters estimated at model building.
• If pieces of data are preprocessed internally (e.g., mean-centering of intervals of time), the test set for validation is transformed with the preprocessing parameters estimated from itself.
• If there is potential lab/technical/batch effect and the model is meant to be valid in general practice, the test set should be generated at/by a different lab/technician/batch.
• If data are time series, the test set should be built from data collected in a different time interval than the model building data, separated enough in
5

time to avoid autocorrelation between both datasets [16]. Data shuffling is not consistent with real-life practice in time series.
• If data is gathered from a time-varying process (i.e., a process that changes in time and so requires model updates), the test data should be separated in time from the model building data by the period that the model is expected to be operative without updating.
Quite often, the data used in a study is provided as a single block and we resort to data splitting [4] for the generation of a model building dataset (potentially divided in training and validation) and a test dataset. Single and nested CV is a form of data splitting. Please, note that in this situation, the test data is only independent to the model building data in terms of all the data processing operations that we make AFTER data splitting, but it is not independent in terms of all the previo-
us operations, included the ones involved in the data generation process. This is a limitation that should be recognized. Note that there are additional considerations to take into account, which can be derived from the second rule. Raschka [1] states that data splits completely at random violate the statistical independence of the test set. This dependency comes from the fact that when classes or types of observations are split in a random, unbalanced manner, imbalance is reflected oppositely in -
building data and test data. This opposite relationship is not consistent with real-life practice, and can produce a dramatic bias in the performance generalization estimates for small datasets and/or unbalanced classes. Raschka also claims that “stratified divides”, where all classes are randomly divided in model building and test, should be preferred. Yet, stratification in the classes is not enough when observations are not independent in the real-life application (like in time series or repeat-
ed measures/replicates) [4], and this dependency needs to be canceled among splits (e.g., avoiding auto-correlation among splits or including all replicates/repeated measures in the same split). On the other hand, Xu and Goodacre [2] claim that “systematic sampling” (e.g., Kennard-Stone) provides “poor estimation of the model performance”. Clearly, no systematic sampling is inspired in the real-life practice, and so its use needs to be carefully justified and ideally combined with other methods. W-
e may conclude that the more the validation strategy departs from the real-life application, the greater the risk of overestimating (or, more rarely, underestimating) the performance of the model. For proper transparency, the completeness and the level of independence at validation, e.g., data was analyzed in the same lab, using the same analytical instrument, in the same batch, etc., should be reported along with the validation results.
2.3. Rule 3: The criterion for performance evaluation should be objective and consistent with the real-life application
There is a large number of criteria for performance evaluation [17], to give some few examples: Predictive Error Sum-of-Squares (PRESS), Q2, Mean Absolute Error (MAE), Mean Square Error (MSE), Precision, Recall, F1 Score,
6

Area Under the Receiver Operating Characteristic (AUROC), Number of Misclassification (NMC), Mathews Coefficient Correlation (MCC), Cohen’s Kappa, etc. Quite often, when comparing multiple model variants, these criteria provide conflicting results. In real-life applications, however, there are considerations to make, often of practical nature, about when a solution is preferred over other solutions. For instance, there may be different perceived degrees of severity when making false positives and-
 false negatives. In the diagnosis of a severe disease, a false positive may be an unpleasant experience for the patient, but a false negative may lead to very negative consequences for their health. In a critical infrastructure, a false positive of malfunctioning may lead to wasting the time of a technician, but a false negative may lead to the disruption of the critical service. Even two different types of false positives (or negatives) may not be perceived the same in a real application. Unders-
tanding the severity of inference errors in the real-life application of a model is extremely important for proper validation. The application experts should provide this information. On the other hand, some criteria may be less suitable for specific data characteristics. For instance, the F1 Score is preferred to Precision and Recall for unbalanced data. ROC curves and AUROC are also affected by imbalanced data. Take the example of Figure 1, where a random y (1000 × 1) is estimated by a hypotheti-
cal classifier yˆ (1000 × 1) with some level of noise. We repeat the generation of y and yˆ 10 times, emulating what would happen if we assess the performance of the classifier over 10 different test datasets with the same imbalance level. When y is composed of a majority class with 70% of the observations and a minority class with 30%, the resulting ROC curve is very stable (Figure 1(a), with an AUROC2 between 0.84 and 0.86). When we assess the same classifier with a minority class of 1%, which i-
s realistic or even large for many anomaly detection problems or in the diagnosis of many diseases, the random variability associated to the ROC curve grows severely (Figure 1(b), with an AUROC between 0.77 and 0.89). Clearly, a ROC (or AUROC) is an unstable performance measure for this type of problems. Another example is provided in Figure 2 for the NMC and for the previous unbalanced cases. The NMC of the classifiers in Figures 1(a) and 1(b) are presented in Figures 2(a) and 2(b), respectively.-
 The NMC is more stable than the ROC curve in the case with a minority class of 1% (between 112 and 135), quite comparable in stability to the case with a minority class of 30% (between 198 and 234). Yet, it is interesting to reflect on this result. The ROC curves in Figure 1(b), even if unstable, show a good performing classifier, well outperforming the random classifier represented by an AUROC of 0.5. However, in terms of NMC and considering that we have only 1% of positives, the classifier of F-
igure 2(b) performs worse than the naive approach that systematically outputs the negative class, shown in Figure 2(c). Given
2The Area Under the ROC curve or AUROC ranges from 0.5 for a random classifier to an optimal value of 1 for a perfect classifier.
7

0 0.2 0.4 0.6 0.8 1
True Positive Rate
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
False Positive Rate
(a) 30% minority class
0 0.2 0.4 0.6 0.8 1
True Positive Rate
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
False Positive Rate
(b) 1% minority class
Figure 1: Receiver Operating Characteristic (ROC) curves for unbalanced data.
that the latter is clearly useless, we can conclude that the NMC, like it happens to the ROC curve, provides a flawed perception of the model performance for severely unbalanced data. A different angle is considered in Figure 3. Rather than the NMC, we consider a weighted performance function where false positives are pondered with 1 unit and false negatives with 100 units, incorporating the idea that a false negative is something we would rather avoid at the expense of making more false positives-
. Back in the case with a minority class of 1%, this approach shows a better performance of the original classifier (in Figure 3(a)) than the naive approach that always outputs the negative class (in Figure 3(b)). This perceived performance is more consistent for a real-case problem where false negative are more relevant. Furthermore, this performance function shows that reducing the threshold for the detection (which generates less false negatives at the expense of generating more false positives-
) can further improve performance (Figure 3(c)). Clearly, the nature of the performance function can change both our perception of performance and the consequent choices we make to configure the optimal model. For this reason, choosing a performance criterion that is consistent with the real-life application is key to make adequate choices and have realistic assessment of the model quality. The performance evaluation criterion (or criteria) should be reported along with a discussion of its suitabi-
lity to consider the practicalities of the real application.
2.4. Rule 4: Relevant baselines should always be provided
It is also a strong recommendation to report relevant performance baselines. A baseline can be selected from different perspectives. To give an example, popular CV curves for the selection of the number of latent variables (LVs) in component models (like PCA or Partial Least Squares (PLS)) are too often shown without a baseline. In this case, a suggested baseline [18] can be the crossvalidated performance criterion (e.g., the sum of squares) of the model with 0
8

2 4 6 8 10 Repetitions
0
50
100
150
200
250
Number of Misclassifications
(a) Minority 30%
2 4 6 8 10 Repetitions
0
50
100
150
200
250
Number of Misclassifications
(b) Minority 1%
2 4 6 8 10 Repetitions
0
50
100
150
200
250
Number of Misclassifications
(c) Minority 1%, always negative
Figure 2: Performance results based on the Number of Misclassifications (NMC) for unbalanced data.
2 4 6 8 10 Repetitions
0
500
1000
1500
Weighted Misclassifications
(a) 0.99 Threshold
2 4 6 8 10 Repetitions
0
500
1000
1500
Weighted Misclassifications
(b) WMC Always negative 1%
2 4 6 8 10 Repetitions
0
500
1000
1500
Weighted Misclassifications
(c) WMC 0.7 Threshold
Figure 3: Performance results based on the weighted number of misclassifications for unbalanced data with a minority class of 1%.
9

LVs, that is, only considering the preprocessing parameters, like for instance the cross-validated means. Quite often, not a single model variant, regardless the number of LVs, yields an improvement over the 0 LVs baseline. This is a situation in which the selected component model is not an adequate choice, or there is simply no pattern to be found in the data. This situation cannot be detected if a baseline is not provided. Take the example of Figure 4, with the CV profile of a PLS model where X-
 (20 × 10) and y (20 × 1) are unrelated. Figure 4(a) shows a CV curve with a minimum at 2 LVs. An obvious baseline we are missing in this first plot is to fix the minimum of the Y scale at PRESS = 0. When we add it in Figure 4(b) we realize that the difference in PRESS between all the models, especially the ones with 1 LV and 2 LVs, is very small. Adding the 0 LVs baseline, represented by the error of estimating y with its own (cross-validated) average, also provides useful information. This is il-
lustrated in Figure 4(c), where we also show with dashed lines two hypothetical values for the PRESS at 0 LVs that would dramatically change our interpretation. If the PRESS at 0 LV is 100, the interpretation would be that the model with 1 or 2 LVs is actually capturing more than 60% of the variance in y in a predictive way. If the PRESS at 0 LV is 10, the interpretation would be that no PLS model has any predictive power. This is actually what the real value of the PRESS at 0 LVs (around 30) is i-
mplying.
2 4 6 8 10 #LVs
35
40
45
PRESS
(a)
2 4 6 8 10 #LVs
0
10
20
30
40
50
PRESS
(b)
0 2 4 6 8 10 #LVs
0
20
40
60
80
100
PRESS
(c)
Figure 4: Cross-validation curve for Partial Least Squares (PLS) in a simulated dataset where X(20 × 10) and y(20 × 1) are unrelated.
Another form of baseline is represented by null examples. A null example is a negative case, fabricated using random number generators while maintaining as much as possible the characteristics of the real data at hand. The null distribution in permutation testing [19], or the null effect size in powercurves [20], for instance, follow this intuition. The resulting performance reflects a baseline, which is often (much) higher than expected [21]. I strongly recommend assessing any data pipeline with -
one or several null examples as an excellent supplement for validation. Null examples are a perfect tool to detect data leakage problems, because they lead to an unexpectedly high performance when such problems exist. Take now the example of Figure 5, similar as the previous example but for X (20 × 1000) and y (20 × 1). Since both blocks of data are unrelated, this represent a null example of a case where X is highly dimensional. A correct
10

validation scheme should reflect the negative prediction capability of the null X. Figure 5(a) shows the (incorrect) case where we do variable selection with the whole dataset and then perform double CV. Figure 5(b) shows the (correct) case where we do variable selection within the inner loop of the double CV. In both cases, we present one example of the CV curve in the inner loop, and the final Q2 of the selected model. The null example shows the overly optimistic nature of the incorrect validat-
ion scheme in Figure 5(a), where the optimal model has 1 LV and a fairly good (perceived) prediction performance. The correct validation scheme in Figure 5(b) shows that X does not contain information on y. The nice property of a null example is that it is extremely easy to generate (either from random data or by permutation of a real dataset) but very powerful to detect flawed validation schemes. In very complex pipelines, with several steps for preprocessing, feature engineering and modeling, ru-
nning some permuted examples is an effortless way to double-check that the pipeline is not suffering from any data leakage problem.
0 2 4 6 8 10 #LVs
0
5
10
15
20
25
30
35
PRESS
(a) Q2 = 0.71
0 2 4 6 8 10 #LVs
0
10
20
30
40
50
PRESS
(b) Q2 = −0.15
Figure 5: Cross-validation curve and Q2 of double cross-validation for Partial Least Squares (PLS) in a simulated dataset where X(20×1000) and y(20×1) are unrelated: variable selection performed before validation (a) and variable selection performed within the inner loop (b).
2.5. Rule 5: Comparisons among models should consider both statistical and practical significance
Favoring the model or data pipeline with the optimal average performance is tricky: for enough resolution there is always a ’perceived’ winner, like there is always a tallest person in the room. However, there may be cases in which models or pipelines are simply even in performance, given the level of uncertainty in the data. For instance, this happens when the validation is repeated with different tests sets and the best model changes. For this reason, rather than reporting only average performan-
ce metrics (like total sum-of-squares of the error), reporting uncertainty statistics and/or statistical significance is more informative. Taking statistical significance into account at model selection, but in particular for performance evaluation, has practical benefits, because we can always choose the most convenient solution among the similarly performing
11

models. For performance measures that can be easily broken down at observation level (like the PRESS), we can directly use its distribution along the observations to compute uncertainty or statistical significance3. An alternative way to provide uncertainty metrics is through resampling techniques like bootstrapping [22, 23]. Uncertainty in the model performance is relevant information to be reported for transparency and future comparison. Take now the example of Figure 6, based on simulated data-
 where X (20 × 100) and y (20 × 2) have a noisy connection between y and a subset of variables in X. We perform double CV with 10 repetitions for different PLS-based models, with and without variable selection (including the selectivity Ratio (SR) [24], Variable Importance in Projection (VIP) [25] and sparse PLS [26]). Now, lets assume we disregard variability information and we only consider one repetition, e.g., repetition 1. Our conclusion would be that the performance (from best to worst) is V-
IP-PLS, SR-PLS, sPLS, and PLS. If we rather take repetition 2, we get sPLS, SR-PLS, VIP-PLS, and PLS. And if we take repetition 9: PLS, SR-PLS, VIP-PLS, sPLS. The boxplot provides a more informative comparison, by leveraging the variability in the results: PLS and sPLS provide moderately unstable performance results and SR-PLS and VIP-PLS provide both more stable and better performance. VIP-PLS attains the maximum median, but (very importantly) there is no statistically significant difference betw-
een SRPLS and VIP-PLS (p-value = 0.26), so both models can be considered even since the difference in perceived performance can be the result of chance. However, even when statistically significant differences exist among alternative models or data pipelines, the differences may still be negligible from the practical standpoint. Furthermore, there may be additional considerations to make when selecting the ’best’ solutions: some models may require impractical data volumes, processing times and/or -
energy consumption for training, or make use of impractical information complex or expensive to retrieve, like detailed data labeling for supervised models. An extended practice in literature is to propose a supervised deep learning model even in applications where a reliable data labeling may be obtained only manually. This manual labeling may be impractical or even unfeasible, especially for models that require regular updating. Furthermore, an important consideration that is often forgotten is -
the labeling uncertainty. In most real applications, a certain level of labeling error is always expected, and pushing accuracy above this level is of limited practical value. In the previous example, computational times for the double CV was: 1.3s for PLS, 21.8s for SR-PLS, 16.9s for VIP-PLS and 26.3s for SPLS. Depending on the situation (rates at which models need to be created and validated, expenditures in money and energy associated, etc.) the PLS option may be a more practical solution.
3Care should be taken to properly manage the correlation between performance estimates within and between models
12

2 4 6 8 10 #Repetition
0
0.2
0.4
0.6
0.8
1
Goodness of Prediction
(a) Q2 = 0.69 (± 0.11)
2 4 6 8 10 #Repetition
0
0.2
0.4
0.6
0.8
1
Goodness of Prediction
(b) Q2 = 0.75 (± 0.04)
2 4 6 8 10 #Repetition
0
0.2
0.4
0.6
0.8
1
Goodness of Prediction
(c) Q2 = 0.77 (± 0.05)
2 4 6 8 10 #Repetition
0
0.2
0.4
0.6
0.8
1
Goodness of Prediction
(d) Q2 = 0.67 (± 0.12)
PLS
SR-PLS
VIP-PLS sPLS
0
0.2
0.4
0.6
0.8
1
Goodness of Prediction
(e)
Figure 6: Repeated Q2 measurements from double cross-validation for simulated data where X (20 × 100) and y (20 × 2) have a noisy connection between some variables of X and y: PLS model (a), PLS model with variable selection with the Selectivity Ratio (b), PLS model with variable selection with the VIP (c), sparse PLS model (d), and comparison of the results with a boxplot (e).
3. Assessing an Example of Validation Strategy: the Double-check for PLS-DA
Szymańska et al. [27] propose a very complete validation scheme for metabolomic models with Partial Least Squares Discriminant Analysis (PLS-DA). The proposal combines double CV with permutation testing. The double CV splits the data intro three datasets: model building and test data are separated in the outer loop to guarantee independence between them, and model buiding data is further split into training and validation data in the inner loop, to fit several PLS-DA models with different numbers -
of LVs. The inner loop then selects an optimal model variant and the generalization performance is estimated with the independent test. The exact same process is repeated many times after permuting the rows in Y or X, leaving the other block untouched, so that a null distribution comprising the spurious relationships in the data is estimated. This is repeated multiple times to assess the uncertainty in the generalization performance estimates. We extended this algorithm to sparse PLS-DA [28, 29], -
with the addition that both the number of LVs and the sparsity level are to be chosen in the inner loop, and that uncertainty can be used for model selection. Let us analyze this validation scheme in the light of the proposed validation rules.
• Rule 1: The test data is made independent by making all model building operations (including preprocessing, selecting the number of LVs and the
13

sparsity level) within the inner loop.
• Rule 2: The independence level is the one for data splitting, so any technical effect affecting the whole data generation is not considered. If the model is meant to generalize to other batches, technicians or laboratories, or to other analytical instruments, a more developed validation scheme is necessary. Therefore, the approach provides an exploratory solution to find good candidates on metabolites (or alternative variables), but further validation is required for a more extended generalizati-
on ability. We should always recognize this limitation when reporting validation results. Furthermore, this validation approach, at least when using random splitting in training, validation and test data, may not be suitable for time series or any other form of data with relationships among observations. This is the case, for instance, of more elaborated studies with repeated measures [30].
• Rule 3: The authors suggest the NMC and the AUROC as more representative statistics for performance evaluation in classification problems with PLS-DA. Yet, one may realize that both metrics treat false positives and negatives equally, and that both may not be fully reliable for severely unbalanced data, so they should be used with caution in the face of these complications.
• Rule 4: A baseline is provided based on permutation testing, to evaluate if the generalization performance of the model is due to chance or rather statistically significant. This is a very interesting complement to the double CV loop because it allows us to determine whether a given performance result is actually significant for a dataset with specific characteristics: number of rows, number of columns, correlation within X or Y and, very importantly, imbalanced nature.
• Rule 5: While not implemented in the original publication of Szymańska et al. [27], the resampling approach within the CV loop can be leveraged to estimate uncertainty measures in the jackknifing/bootstrap style [22, 31], which can be taken into account at model selection. Furthermore, the uncertainty reflected by the repetitions of the double CV can be taken into account when comparing the generalization performance of (s)PLSDA with other model variants (in the spirit of Figure 6). It should be-
 considered, however, that these variance estimates are not independent and that practical significance should always be taken into account [32].
4. Conclusion
In this work, I propose a number of rules for model validation that allow us to develop solid validation schemes in complex scenarios where the risk of overestimating the generalization performance is high. I argue that no validation scheme is completely flawless, but that practical solutions that depend on
14

the model real-life application can be defined. For this reason, it is important to complement the performance generalization results with (1) a description of the limitations of the validation scheme, including the level of independence and completeness of the test set and the suitability and limitations of the performance criteria for a practical case study; and (2) reference information, including baselines, uncertainty measures and statistical and practical significance of the results. I stro-
ngly recommend to run the complete validation pipeline with one or several null examples, to assess the Type I error or false positive risk.
Software
The examples of the paper can be reproduced using the code at repository https://github.com/josecamachop/RulesOfValidation. This repository requires the MEDA toolbox v1.10 at https://github.com/codaslab/ MEDA-Toolbox.
5. Acknowledgements
I kindly acknowledge the comments by Michael Sorochan Armstrong, Jesús García-Sánchez and Daniel Vallejo España. This work was supported by grant no. PID2023-1523010B-IOO (MuSTARD), funded by the Agencia Estatal de Investigación in Spain, call no. MICIU/AEI/10.13039/501100011033, and by the European Regional Development Fund.
15

References
[1] S. Raschka, “Model evaluation, model selection, and algorithm selection in machine learning,” arXiv preprint arXiv:1811.12808, 2018.
[2] Y. Xu and R. Goodacre, “On splitting training and validation set: a comparative study of cross-validation, bootstrap and systematic sampling for estimating the generalization performance of supervised learning,” Journal of analysis and testing, vol. 2, no. 3, pp. 249–262, 2018.
[3] J. Ezenarro, “Xyonion: a layer-based method for splitting datasets into calibration and validation subsets,” Analytica Chimica Acta, p. 344229, 2025.
[4] E. Lopez, J. Etxebarria-Elezgarai, J. M. Amigo, and A. Seifert, “The importance of choosing a proper validation strategy in predictive models. a tutorial with real examples,” Analytica Chimica Acta, vol. 1275, p. 341532, 2023.
[5] T. Fearn, C. Beleites, J. A. F. Pierna, V. Baeten, M. Lagerholm, J.-M. Roger, and A. Koidis, “Multivariate calibration of non-destructive spectral sensors with a particular focus on food applications: Validation issues and guidelines,” TrAC Trends in Analytical Chemistry, p. 118410, 2025.
[6] J. Ezenarro and D. Schorn-García, “How are chemometric models validated? a systematic review of linear regression models for nirs data in food analysis,” Journal of Chemometrics, vol. 39, no. 6, p. e70036, 2025.
[7] D. Peña, Fundamentos de estadística. Alianza editorial, 2014.
[8] S. Wold, “Cross-validatory estimation of the number of components in factor and principal components models,” Technometrics, vol. 20, no. 4, pp. 397–405, 1978.
[9] R. Bro, K. Kjeldahl, A. K. Smilde, and H. Kiers, “Cross-validation of component models: a critical look at current methods,” Analytical and bioanalytical chemistry, vol. 390, no. 5, pp. 1241–1251, 2008.
[10] P. Filzmoser, B. Liebmann, and K. Varmuza, “Repeated double cross validation,” Journal of Chemometrics: A Journal of the Chemometrics Society, vol. 23, no. 4, pp. 160–171, 2009.
[11] E. Saccenti and J. Camacho, “On the use of the observation-wise k-fold operation in pca cross-validation,” Journal of Chemometrics, vol. 29, no. 8, pp. 467–478, 2015.
[12] K. H. Esbensen and P. Geladi, “Principles of proper validation: use and abuse of re-sampling for validation,” Journal of Chemometrics, vol. 24, no. 3-4, pp. 168–187, 2010.
16

[13] E. López Corrillero, Advances for Alzheimer’s disease diagnostics through the integration of spectroscopy and chemometrics. Tesis doctoral, Universidad del País Vasco / Euskal Herriko Unibertsitatea (UPV/EHU), Bilbao, España, 2023.
[14] K. Wasielewska, D. Soukup, T. Čejka, and J. Camacho, “Evaluation of the limit of detection in network dataset quality assessment with perqoda,” in Joint European Conference on Machine Learning and Knowledge Discovery in Databases, pp. 170–185, Springer, 2022.
[15] S. Fatumo, T. Chikowore, A. Choudhury, M. Ayub, A. R. Martin, and K. Kuchenbäcker, “Diversity in genomic studies: a roadmap to address the imbalance,” Nature medicine, vol. 28, no. 2, p. 243, 2022.
[16] C. Bergmeir, R. J. Hyndman, and B. Koo, “A note on the validity of crossvalidation for evaluating autoregressive time series prediction,” Computational Statistics & Data Analysis, vol. 120, pp. 70–83, 2018.
[17] D. Ballabio, F. Grisoni, and R. Todeschini, “Multivariate comparison of classification performance measures,” Chemometrics and Intelligent Laboratory Systems, vol. 174, pp. 33–44, 2018.
[18] J. Camacho and A. Ferrer, “Cross-validation in pca models with the element-wise k-fold (ekf) algorithm: theoretical aspects,” Journal of Chemometrics, vol. 26, no. 7, pp. 361–373, 2012.
[19] M. Anderson and C. T. Braak, “Permutation tests for multi-factorial analysis of variance,” Journal of statistical computation and simulation, vol. 73, no. 2, pp. 85–113, 2003.
[20] J. Camacho, C. Díaz, and P. Sánchez-Rovira, “Permutation tests for asca in multivariate longitudinal intervention studies,” Journal of Chemometrics, vol. 37, no. 7, p. e3398, 2023.
[21] J. Camacho and K. Wasielewska, “Dataset quality assessment in autonomous networks with permutation testing,” in NOMS 2022-2022 IEEE/IFIP Network Operations and Management Symposium, pp. 1–4, IEEE, 2022.
[22] B. Efron, “Bootstrap methods: another look at the jackknife,” in Breakthroughs in statistics: Methodology and distribution, pp. 569–593, Springer, 1992.
[23] C. Z. Mooney, R. D. Duval, and R. Duvall, Bootstrapping: A nonparametric approach to statistical inference. No. 95, sage, 1993.
[24] T. Rajalahti, R. Arneberg, F. S. Berven, K.-M. Myhr, R. J. Ulvik, and O. M. Kvalheim, “Biomarker discovery in mass spectral profiles by means of selectivity ratio plot,” Chemometrics and Intelligent Laboratory Systems, vol. 95, no. 1, pp. 35–48, 2009.
17

[25] S. Wold, E. Johansson, M. Cocchi, et al., “Pls: partial least squares projections to latent structures,” in 3D QSAR in Drug Design: Theory, Methods and Applications., pp. 523–550, Kluwer ESCOM Science Publisher, 1993.
[26] K.-A. Lê Cao, D. Rossouw, C. Robert-Granié, and P. Besse, “A sparse pls for variable selection when integrating omics data,” Statistical applications in genetics and molecular biology, vol. 7, no. 1, 2015.
[27] E. Szymańska, E. Saccenti, A. K. Smilde, and J. A. Westerhuis, “Doublecheck: validation of diagnostic statistics for pls-da models in metabolomics studies,” Metabolomics, vol. 8, no. Suppl 1, pp. 3–16, 2012.
[28] J. Camacho, A. Pérez-Villegas, R. A. Rodríguez-Gómez, and E. JiménezMañas, “Multivariate exploratory data analysis (meda) toolbox for matlab,” Chemometrics and Intelligent Laboratory Systems, vol. 143, pp. 49–57, 2015.
[29] A. M. Jiménez-Carvelo, S. Martín-Torres, F. Ortega-Gavilán, and J. Camacho, “Pls-da vs sparse pls-da in food traceability. a case study: Authentication of avocado samples,” Talanta, vol. 224, p. 121904, 2021.
[30] T. S. Madssen, G. F. Giskeødegård, A. K. Smilde, and J. A. Westerhuis, “Repeated measures asca+ for analysis of longitudinal intervention studies with multivariate outcome data,” PLoS Computational Biology, vol. 17, no. 11, p. e1009585, 2021.
[31] B. Efron and C. Stein, “The jackknife estimate of variance,” The Annals of Statistics, pp. 586–596, 1981.
[32] K. M. Mendez, S. N. Reinke, and D. I. Broadhurst, “A comparative evaluation of the generalised predictive ability of eight machine learning algorithms across ten clinical metabolomics data sets for binary classification,” Metabolomics, vol. 15, no. 12, p. 150, 2019.
18

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:16.786Z
- **Text Length:** 44869 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
