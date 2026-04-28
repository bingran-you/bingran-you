# PDF Document: Karl - 2025 - SVEMnet An R package for Self-Validated Elastic-Net Ensembles and Multi-Response Optimization in Sm.pdf

**File Path:** Karl - 2025 - SVEMnet An R package for Self-Validated Elastic-Net Ensembles and Multi-Response Optimization in Sm.pdf

**Processed Date:** 2026-02-10T18:17:53.754Z

**File Size:** 1605.50 KB

**Total Pages:** 23

**Extracted Pages:** 23

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3370

**Title:** SVEMnet: An R package for Self-Validated Elastic-Net Ensembles and Multi-Response Optimization in Small-Sample Mixture--Process Experiments

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

SVEMnet: An R package for Self-Validated Elastic-Net Ensembles and
Multi-Response Optimization in Small-Sample Mixture–Process
Experiments
Andrew T. Karl 1
Abstract
SVEMnet is an R package for fitting Self-Validated Ensemble Models (SVEM) with elastic-net base learners
and for performing multi-response optimization in small-sample mixture–process design-of-experiments
(DOE) studies with numeric, categorical, and mixture factors. SVEMnet wraps elastic-net and relaxed
elastic-net models for Gaussian and binomial responses from glmnet in a fractional random-weight (FRW)
resampling scheme with anti-correlated train/validation weights; penalties are selected by validation
weighted AIC- and BIC-type criteria, and predictions are averaged across replicates to stabilize fits near
the interpolation boundary. In addition to the core SVEM engine, the package provides deterministic
high-order formula expansion, a permutation-based whole-model test heuristic, and a mixture-constrained
random-search optimizer that combines Derringer–Suich desirability functions, bootstrap-based uncertainty
summaries, and optional mean-level specification-limit probabilities to generate scored candidate tables
and diverse exploitation and exploration medoids for sequential fit–score–run–refit workflows. A simulated
lipid nanoparticle (LNP) formulation study illustrates these tools in a small-sample mixture–process DOE
setting, and simulation experiments based on sparse quadratic response surfaces benchmark SVEMnet
against repeated cross-validated elastic-net baselines.
Keywords: SVEM; design of experiments; relaxed lasso; LNP; formulation optimization; desirability
functions;
1. Introduction
Formulation optimization experiments in chemistry and biopharmaceutics often operate with limited
runs, complex factor spaces (interactions, curvature, mixtures), and multiple responses of interest. In
such small-N regimes, flexible models can be unstable: small changes in the construction of the training
sample (for example, different train/validation splits or cross-validation folds) may yield noticeably different
predictions and selected penalties [1]. Self-Validated Ensemble Models (SVEM) were proposed by Lemkus
et al. [2] to mitigate this instability by drawing fractional random-weight (FRW) [3] bootstraps paired
with anti-correlated validation weights and averaging predictions across resampled fits. The idea was first
presented under the name “autovalidation” by Gotwalt and Ramsey [4] and has since been extended with a
permutation-based whole-model testing heuristic [5] and nonlinear base learners such as neural networks in
∗Corresponding author
Email address: akarl@asu.edu (Andrew T. Karl )
arXiv:2511.20968v1 [stat.CO] 26 Nov 2025

mixture experiments [6]. SVEM is primarily intended as a predictive surrogate-modeling tool rather than a
hypothesis-testing procedure, in line with the broader “to explain or to predict” distinction of Shmueli [7].
This paper introduces SVEMnet, an R package that implements SVEM with elastic-net and optional
relaxed elastic-net base learners [8, 9, 10, 11]. In a relaxed fit, glmnet computes a penalized solution path
indexed by the penalty parameter λ, identifies the active set at each λ, and then refits an unpenalized
least-squares (or GLM) model on that active set, interpolating between penalized and unpenalized coefficients
via a relaxation parameter γ ∈ [0, 1]. In the sparse Gaussian linear model studied by Meinshausen [10], the
relaxed lasso reduces the shrinkage of non-zero coefficients and can achieve lower prediction error than the
standard lasso. Simulations in Section 4 indicate that combining relaxed base learners with the SVEM
FRW ensemble can further reduce out-of-sample prediction error for Gaussian responses, plausibly because
the ensemble averages over the additional variance introduced by relaxation.
In place of the validation-weighted sum of squared errors criterion (denoted wSSE) used in earlier
SVEM work by Lemkus et al. [2], SVEMnet standardizes on heuristic, validation-weighted AIC/BIC-like
criteria—wAIC for Gaussian responses and wBIC for binomial responses [12, 13, 14]. Flexible fits such as the
lasso are known to behave poorly near the interpolation boundary, where the number of runs n approaches
the full expansion dimension pfull (the total number of coefficients in the “full” linear model expansion,
including the intercept), with “peaking” in out-of-sample error documented in small-sample classification
and regression problems [15] and in lasso model selection [16]. In the simulations reported in Section 4,
wAIC and wBIC avoid this peaking, whereas the loss-only wSSE selector exhibits a pronounced spike at
n ≈ pfull.
Self-Validated Ensemble Models have already seen practical use in industrial DOE and chemometric
settings, including mixture–process workflows for lipid nanoparticle (LNP) formulations and other phar
maceutical and analytical applications [17, 18, 6, 19, 20, 21, 22, 23, 24]. These applications motivate an
implementation tailored to chemometric DOE. In particular, SVEMnet is designed to automate many of the
steps in the SVEM-based mixture–process workflow for LNP formulation optimization described by Karl
et al. [17]. SVEMnet supplies an open-source SVEM implementation over glmnet with validation-weighted
AIC/BIC selectors, deterministic high-order full model expansions, a permutation-based whole-model
test heuristic, and a mixture-constrained random-search scoring tool for multi-response desirability and
candidate generation.
SVEMnet is intended for round-by-round iteration in small-N DOE: fit SVEM models on the current
data; use the random-search optimizer to generate and score a feasible candidate set under mixture
and process constraints; select a small number of high-score exploitation medoids and high-uncertainty
exploration medoids; then run those settings, append the new data, and refit the models. The lipid
nanoparticle (LNP) formulation example below illustrates this workflow [17, 5]. The sequential workflow is
an iterate–append loop that alternates exploitation and exploration based on predictive uncertainty, rather
than a full Gaussian-process-based Bayesian optimization scheme, which remains the standard choice when
richer covariance structures and acquisition strategies are desired [25, 26].
SVEMnet can be used with any single-error-stratum experimental design in which individual runs can be
treated as independent. However, the predictive performance of SVEMnet will naturally depend on design
2

quality. For physical experiments we recommend optimal designs [27, 28], fast flexible space-filling designs
[29], or U-Bridge designs [30] rather than the simple Latin hypercube samples [31] that are employed for
computational expediency in the simulations in Section 4. Because the FRW bootstrap treats runs as the
resampling units, split-plot and other multi-stratum designs with hierarchical variance components are not
currently accommodated; blocking factors may only be treated as fixed effects.
The remainder of the paper is organized as follows. Section 2 details the SVEMnet modeling engine: SVEM
background, the glmnet wrapper (including relaxed refits), deterministic expansion tools, the validation
weighted wAIC/wBIC selector, and the multi-response random-search optimizer. Section 3 illustrates the
workflow on a lipid nanoparticle (LNP) formulation example. Section 4 reports simulations, and the
paper concludes with a summary and outlook. Technical specifics of the validation-weighted criterion and
mixed-model multiple-comparison tables for simulation results appear in Appendix A and Appendix B.
2. SVEMnet modeling and multi-response optimization
2.1. Software overview
SVEMnet takes a user-specified model formula and dataset, generates fractional random-weight (FRW)
train/validation splits, fits elastic-net or relaxed elastic-net paths with glmnet within each FRW replicate,
selects a penalty (and, when applicable, a relaxed refit) via a validation-weighted information criterion,
and averages predictions across replicates. The same deterministic expansion of the right-hand side can be
reused across responses so that all models share a common design matrix. The package additionally provides
a permutation-based whole-model test heuristic and a mixture-constrained random-search optimizer that
scores and selects candidates for additional experimental runs.
The main exported functions are:
• SVEMnet(): fit Gaussian or binomial SVEM models under a specified formula and dataset, with
optional relaxed base learners and FRW control;
• bigexp_terms() and bigexp_formula(): build and reuse deterministic high-order factorial and
polynomial linear model expansions from a single list of main-effects;
• svem_wmt_multi(): run the permutation-based whole-model test (WMT) and obtain approximate
p-values and importance multipliers for multiple responses;
• svem_score_random() and svem_select_from_score_table(): generate feasible candidate settings,
score them via multi-response desirability, and select diverse optimal and exploration candidates;
• svem_export_candidates_csv(): export collections of candidate tables for laboratory execution or
documentation.
The remainder of this section explores these functions in more detail. Worked Gaussian and binomial
examples are provided in the CRAN help pages (e.g., ?SVEMnet).
3

2.2. SVEM background
SVEM draws B replicates using FRW sampling. For each replicate b and observation i = 1, . . . , n, training
weights wtrain
i and an anti-correlated validation copy wvalid
i are constructed from a shared Ui ∼ Uniform(0, 1)
via
wtrain
i = − log Ui, wvalid
i = − log(1 − Ui),
following the FRW scheme for univariate analysis introduced by Xu et al. [3], which underpins the original
SVEM extensions to penalized regression by Gotwalt and Ramsey [4] and Lemkus et al. [2]. For each
FRW replicate we then rescale both the training and validation weights to have mean one, wi ← wi/w ̄ for
w ∈ {wtrain, wvalid}, matching glmnet’s internal normalization of observation weights.
Given (wtrain, wvalid) for replicate b, SVEMnet fits an elastic-net or relaxed elastic-net base learner on
(X, y) under wtrain, evaluates a collection of path points by a validation-weighted information criterion
computed with wvalid (Section 2.4), and stores predictions from the selected path point. Overall SVEM
predictions are obtained by averaging these member predictions across b = 1, . . . , B. Lemkus et al. [2]
tuned penalties by validation-weighted SSE (wSSE); SVEMnet adopts the same FRW-and-ensemble structure
but standardizes on validation-weighted AIC/BIC analogs—wAIC default for Gaussian responses; wBIC
default for binomial responses.
Although we focus on Gaussian responses in the exposition and case study, the software also implements
a binomial (logistic) variant. In that case, the elastic-net base learner is fit under an FRW-weighted
logistic log-likelihood, penalties are selected on the deviance scale, and ensemble predictions are formed by
averaging member-predicted probabilities; Appendix A gives the corresponding criteria.
2.3. Implementation note: a SVEM wrapper over glmnet
SVEMnet implements SVEM by wrapping the standard and relaxed elastic-net paths in glmnet [8,
32, 9, 11] with FRW train/validation weights (Section 2.2). For each FRW replicate b and each α in a
user-specified grid (default α ∈ {0.5, 1}), SVEMnet calls glmnet with training weights wtrain, an intercept,
and predictor standardization enabled. By default, SVEMnet uses relaxed paths for Gaussian responses and
standard elastic-net paths for binomial responses.
Within each replicate, SVEMnet treats each combination of α and penalty λ (and, when relaxed fits
are enabled, each relaxed refit value γ) as a candidate path point. For a given glmnet fit, the λ path is
traversed and, for relaxed fits, a small grid of γ values is considered. Each candidate (α, λ, γ) is evaluated on
the FRW validation copy using the chosen validation-weighted criterion (wAIC, wBIC, or wSSE; Appendix A),
and the combination that minimizes this criterion determines the selected coefficients for replicate b. These
selected coefficients populate a bootstrap-by-parameter coefficient matrix.
For new data, the design matrix is rebuilt to match training, each replicate’s coefficients are applied,
and the resulting member predictions are averaged—on the response scale for Gaussian models and, by
default, on the probability scale for binomial models.
In this sense, penalized optimization is delegated to glmnet; SVEMnet contributes the FRW-based
self-validation and ensembling, the validation-weighted AIC/BIC analogs with effective-validation-size
guardrails, and the DOE-oriented expansion, testing, and candidate-generation tools used in the workflows
of Section 3.
4

For Gaussian models, an optional debias step fits a linear calibration lm(y ∼ yˆ) on the training data
and applies the resulting intercept and slope to ensemble predictions. Debiasing is off by default and is
included mainly to match the JMP implementation, where it is always applied [33].
2.3.1. Deterministic expansion utilities
A practical convenience in SVEMnet is that the user lists main-effect predictors only once and lets the
expansion utilities (bigexp_terms() and bigexp_formula()) deterministically build interaction and polynomial
columns. The same specification can be reused across responses, guaranteeing identical design matrices,
stable column order, and reproducible comparisons. With factorial_order = 2 and polynomial_order
= 2, for example, the generated right-hand side includes all two-way interactions and quadratic terms (and,
optionally, partial-cubic terms of the form I(X2) : Z) without hand-writing products or powers; categorical
factors are handled using the contrasts recorded for the training data. When blocking or covariate factors
(e.g., Operator, day, plate, ambient temperature) are supplied via blocking in bigexp_terms(), these
factors make an additive adjustment to the response surface and do not interact with the other study
factors.
2.4. Selection criterion
At each candidate path point within an FRW replicate—indexed by the elastic-net mixing parameter α,
the penalty λ, and, when relaxed fits are used, a relaxation parameter γ—SVEMnet evaluates a validation
loss on the anti-correlated FRW copy: a weighted sum of squared errors for Gaussian responses and a
deviance-style loss (weighted negative log-likelihood) for binomial responses. We then add a penalty of
the form g kλ, where kλ is the number of nonzero coefficients (including the intercept). Choosing g = 0
recovers the historical loss-only selector (wSSE); g = 2 and g = log(nadm
eff ) give validation-weighted analogs
of AIC (wAIC) and BIC (wBIC), respectively. Because the FRW validation weights are random rather
than fixed design weights, these scores are used heuristically for relative model comparison inside the
FRW replicate rather than as exact AIC/BIC. For binomial models we retain the label wSSE for backward
compatibility even though the selector operates on the deviance scale rather than squared error. Appendix A
records the full expressions and defines the effective-size guardrail nadm
eff used with wAIC and wBIC to avoid
near-interpolating path points.
2.5. Random-search scoring and candidate selection for multi-response design
The built-in stochastic optimizer implements the desirability-based generate-and-rank strategy sketched
in the introduction. Starting from fitted SVEMnet models, it generates feasible candidate settings under the
observed factor ranges and user-specified mixture constraints, evaluates each setting via a multi-response
desirability score, and returns shortlists of high-score (exploitation) and high-uncertainty (exploration) can
didates. The following subsections describe candidate generation and mean-level specification probabilities,
construction and weighting of desirability scores, the uncertainty measure used to target exploration, and
the medoid-based selection of diverse recipes.
5

2.5.1. Sampling and specification limits
Candidate settings are generated by svem_random_table_multi(), which samples feasible combinations
under any supplied mixture groups (sum-to-constant constraints with bounds) together with bounds on
process variables taken from the factor ranges in the training data. When specification limits are provided
for a response, SVEMnet uses the SVEM bootstrap to estimate, at each candidate, the probability that the
process mean lies inside those limits and adds per-response and joint mean-level specification probabilities
(e.g., prob_in_spec and p_joint_mean) as additional columns in the scored table. These mean-level
probabilities are used only as ranking proxies: formal specification limits apply to individual observations,
not to the process mean.
2.5.2. Scoring and response weighting
For each response r, we map predictions to unit-interval desirabilities dr(x) ∈ [0, 1] using Derringer–Suich
curves and form a multi-response score as a weighted geometric mean of the per-response desirabilities,
S(x) = exp
( ∑
r
wr log (dr,ε(x))
)
, dr,ε(x) = (1 − ε) dr(x) + ε,
using a small ε (default 10−6) to avoid log(0) [34, 35, 27].
User-specified goal weights w ̃r are first normalized to w ̄r with ∑
r w ̄r = 1. When reweight_by_wmt =
FALSE, we set wr = w ̄r and report a single column score based on S(x). When reweight_by_wmt = TRUE
for Gaussian responses, we further reweight the normalized user weights by a monotone function of the
permutation whole-model p-values from [5] (for example − log10(pr)), renormalize to obtain WMT-adjusted
weights wWMT
r , and compute a second geometric-mean score wmt_score by using wr = wWMT
r in S(x).
These WMT-adjusted weights are diagnostic and do not alter the underlying SVEM fits.
Thus the output table always contains score, based purely on the user-specified weights w ̃r, and, when
applicable, an additional wmt_score column that augments those weights using the WMT results. Gaussian
and binomial outcomes are handled on the same scale by applying desirability functions to predicted means
and predicted probabilities, respectively.
For candidate scoring, blocking variables are held fixed at a single reference setting while the controllable
factors are varied over the feasible region. Categorical blocking factors are evaluated at the most common
observed level; continuous blocking covariates are evaluated at the midpoint of their modeled range. Under
the additive-only blocking assumption this induces only an additive offset in the predicted responses and
therefore does not change the ranking of candidate recipes.
2.5.3. Uncertainty and exploration
For each response r we compute a percentile prediction interval [lr(x), ur(x)] at level 1 − α from
the SVEM bootstrap and define the interval width Wr(x) = ur(x) − lr(x). To place uncertainty on a
comparable scale across responses, we normalize Wr(x) using the empirical 2%–98% range for that response
and aggregate the normalized widths using the original normalized goal weights w ̄r:
U (x) = ∑
r
w ̄r Norm0,1
(Wr(x); qr,0.02, qr,0.98
),
6

ξ2
170
175
180
80 85 90 ξ1
Source
Original Design round1_existing_best round1_explore_uncertainty round1_score_optimal
Figure 1: Original CCD runs from Table 6.8 of Myers et al. [27] (blue circles), SVEMnet-selected optimal candidates (purple
diamonds), and high-uncertainty exploration runs (green squares) for the y1 response, which attains its maximum near the
center of the design region.
where Norm0,1(·; qr,0.02, qr,0.98) denotes a rescaling to [0, 1] based on the empirical 2% and 98% quantiles
qr,0.02 and qr,0.98 for response r. Large values of U (x) correspond to regions of higher predicted uncertainty.
We report the single exploration target arg maxx U (x) and also use U (x) to construct exploration shortlists
in the next subsection.
2.5.4. Diverse candidates via medoids and practical defaults
Score and uncertainty surfaces often exhibit ridges of near-equivalent values across a broad range
of factor settings. To capture this range of feasible recipes with similar predicted performance, the
user may choose a number k of candidates by ranking the scored table on a scalar objective (typically
S(x) or U (x), corresponding to the score and uncertainty_measure columns, but also, for example,
wmt_score, p_joint_mean, or any other numeric column), retaining either the top fraction or the top n
rows, and clustering this subset using Gower distance on the predictor columns with partitioning-around
medoids (PAM) [36, 37]. The medoids are existing feasible rows and summarize diverse “exploitation” and
“exploration” recipes, and the functions svem_score_random() and svem_select_from_score_table()
additionally return the single best row under the chosen objective. Figure 1 illustrates this strategy for the
central composite design from Table 6.8 of Myers et al. [27].
3. Example LNP Application
We illustrate the workflow using the bundled simulated LNP formulation screening data, which include
four mixture components (PEG, Helper, Ionizable, Cholesterol), a categorical ionizable lipid type, two
continuous process factors (N_P_ratio and flow_rate), a categorical Operator factor, and three responses:
Potency, Size, and PDI. This example parallels the SVEM-based mixture–process LNP workflow of Karl
et al. [17].
7

We first build a single deterministic right-hand-side expansion and reuse it across all three models. We
treat Operator as a blocking variable that enters additively and does not interact with other study factors.
1 library(SVEMnet)
2 data(lipid_screen)
3 spec <- bigexp_terms(
4 Potency ~ PEG + Helper + Ionizable + Cholesterol +
5 Ionizable_Lipid_Type + N_P_ratio + flow_rate,
6 blocking = "Operator", # additive blocking factor
7 data = lipid_screen,
8 factorial_order = 3, # up to 3-way interactions
9 polynomial_order = 3, # up to cubic terms I(X^2), I(X^3)
10 include_pc_2way = TRUE
11 )
12 form_pot <- bigexp_formula(spec, "Potency")
13 form_siz <- bigexp_formula(spec, "Size")
14 form_pdi <- bigexp_formula(spec, "PDI")
Using this shared expansion for a third-order model, we fit Gaussian SVEM models for each response
with default settings and collect them in a named list. Multi-response goals are set so that Potency is
maximized, while Size and PDI are minimized, and mixture constraints reflect practical bounds and a
unit-sum constraint on the four composition variables:
1 set.seed(1)
2 fit_pot <- SVEMnet(form_pot, lipid_screen)
3 fit_siz <- SVEMnet(form_siz, lipid_screen)
4 fit_pdi <- SVEMnet(form_pdi, lipid_screen)
5
6 objs <- list(Potency = fit_pot, Size = fit_siz, PDI = fit_pdi)
7
8 goals <- list(
9 Potency = list(goal = "max", weight = 0.6),
10 Size = list(goal = "min", weight = 0.3),
11 PDI = list(goal = "min", weight = 0.1)
12 )
13
14 mix <- list(list(
15 vars = c("PEG", "Helper", "Ionizable", "Cholesterol"),
16 lower = c(0.01, 0.10, 0.10, 0.10),
17 upper = c(0.05, 0.60, 0.60, 0.60),
18 total = 1.0
19 ))
3.1. Whole-model reweighting and permutation tests
To assess which responses show the strongest relationship with the study factors, we apply the
permutation-based whole-model test heuristic (WMT) of Karl [5] to each SVEM model. WMT-based
multipliers can optionally reweight the user-specified response weights, prioritizing responses with stronger
predictive signal and down-weighting weaker ones. If utilized, WMT-reweighted candidate sets should be
secondary to those formed without the WMT reweighting, since the heuristic may have limited power in
8

Table 1: Permutation whole-model test results for the three responses (SVEMnet).
Response Approx. whole-model p-value
Size 1 × 10−16
Potency 3 × 10−7
PDI 0.78
Notes. Values are permutation-based and subject to Monte Carlo error.
some situations [5]. Because WMT is permutation-based with finite simulation budgets, these p-values are
approximate.
The helper svem_wmt_multi() runs the permutation test for each response under the shared deterministic
expansion and mixture constraints, and returns approximate p-values and multipliers:
1 set.seed(123)
2 wmt_out <- svem_wmt_multi(
3 formulas = list(Potency = form_pot,
4 Size = form_siz,
5 PDI = form_pdi),
6 data = lipid_screen,
7 mixture_groups = mix,
8 wmt_control = list(seed = 123)
9)
10 wmt_out$p_values
11 wmt_out$multipliers
The approximate whole-model p-values are summarized in Table 1: Size and Potency show strong
global signal, whereas PDI does not (although lack of signal in this heuristic alone should not be used to
conclude that there is no relationship between the study factors and PDI [5]). Figure 2 shows the associated
whole-model significance diagnostic, generated by svem_wmt_multi() under the shared expansion and mixture
constraints. Clear separation between the “Original” and permutation-based distance distributions indicates
strong global factor signal, as in Figure 3 of Karl [5].
3.2. Random-search scoring, candidate selection, and sequential use
To illustrate the optional specification-limit handling, we impose mean-level requirements on the three
responses—limits on the predicted process means rather than on individual unit-level measurements:
P otency > 78, Size < 100, and P DI < 0.25. Only the bounded side of each limit needs to be supplied:
1 specs_ds <- list(
2 Potency = list(lower = 78),
3 Size = list(upper = 100),
4 PDI = list(upper = 0.25)
5)
The random-search scoring step then evaluates a large number of feasible settings (here 25,000). For
each candidate, svem_score_random() evaluates the SVEM models, computes per-response Derringer–Suich
desirabilities, aggregates them into a single multi-response score via a weighted geometric mean, constructs
a scalar uncertainty measure U (x) from bootstrap percentile intervals, and, when specifications are supplied,
9

0
50
100
Potency_1/Original
Potency_1/Permutation
Size_2/Original
Size_2/Permutation
PDI_3/Original
PDI_3/Permutation
Response / Source
Distance (D)
Source Original Permutation
Distances for Original vs Permutation by Response
Figure 2: Whole-model significance diagnostic for Potency, Size, and PDI: distributions of Mahalanobis-like distances for the
original data versus permuted replicates under the shared deterministic expansion and mixture constraints; cf. Figure 3 in [5].
computes mean-level probabilities that each candidate’s modeled mean lies inside the user limits. Supplying
wmt = wmt_out adds a WMT-adjusted score column wmt_score in addition to the user-weighted score:
1 set.seed(3)
2 scored <- svem_score_random(
3 objects = objs,
4 goals = goals,
5 data = lipid_screen,
6 mixture_groups = mix,
7 wmt = wmt_out, # optional: NULL for no WMT
8 specs = specs_ds # optional: NULL for no design-space columns
9)
From the resulting scored table we extract high-score, exploration, and design-space candidates using
svem_select_from_score_table(). For example, the following call selects five near-optimal score medoids, in
addition to the single highest scored recipe from the candidate set of 25,000:
1 # Score-optimal medoids (user-weighted score)
2 opt_sel <- svem_select_from_score_table(
3 score_table = scored$score_table,
4 target = "score",
5 direction = "max",
6 k = 5,
7 top_type = "frac",
8 top = 0.1,
9 label = "round1_score_optimal"
10 )
10

11 )
Analogous calls with target = "uncertainty_measure" and target = "p_joint_mean" (and score_table
set to either the random-search candidates or the original screening runs) were used to obtain
the candidates summarized in Tables 2 and 3. The replication script contains the full set of
svem_select_from_score_table() calls [38].
In routine use these tools are embedded in a simple sequential loop: fit SVEM on the current data
under a fixed deterministic expansion; use svem_score_random() and svem_select_from_score_table() to generate
optimal, exploration, and mean-in-spec medoids; run those settings and append the new rows; then refit
and repeat. Candidate tables for laboratory use can be exported with svem_export_candidates_csv(); the
Supplementary CSV file was generated using this function and is included in the Mendeley Data archive
[38].
Tables 2 and 3 show four SVEM candidates from the simulated first-round lipid screening. The first
row corresponds to the best existing screened run by multi-response score and provides a baseline. This
row displays the original level of the blocking factor, Operator, which may differ from the level shown for
the random-search candidates; the latter are evaluated at the reference Operator level used for scoring.
The additive offsets for the Operator levels are visible in the fitted coefficients (e.g., coef(fit_pot)),
and predictions for other Operator levels can be obtained via predict(fit_pot, newdata = ...). The
score-optimal run from the random search trades a modest reduction in predicted Potency for a large
improvement in Size, yielding an overall desirability of one. In this example, the wmt_score optimum
coincides with the score-optimal run, so no additional row is shown. The “In-spec” optimum illustrates
a candidate that lies comfortably inside the specification region. The exploration target has the highest
uncertainty measure U (x) and sits near the edge of the feasible mixture region, with poor predicted Potency.
Table 2: Representative SVEM candidate recipes from the lipid screening example. Mixture components are proportions on
the 0–1 scale; process factors are in their native units. All random-search candidates arbitrarily set Operator to A.
Scenario PEG Helper Ionizable Cholesterol Ionizable Type N:P flow rate Operator
Best screened 0.047 0.430 0.140 0.383 H101 6.0 2.5 B
Max Score 0.048 0.596 0.101 0.256 H102 11.9 2.9 A
In-spec 0.040 0.415 0.193 0.352 H101 9.2 2.5 A
Exploration 0.012 0.593 0.209 0.185 H103 6.3 2.7 A
Table 3: Predicted behavior for the candidate recipes in Table 2. Responses are SVEM point predictions. The columns score
and wmt_score are scalar desirability measures, pjoint,mean is the estimated probability that the mean responses satisfy the
specification limits (Potency ≥ 78, Size ≤ 100, PDI ≤ 0.25), and uncert. is the dimensionless uncertainty measure U (x).
Scenario Potency Size PDI score wmt_score pjoint,mean uncert.
Best screened 91.5 88.2 0.21 0.83 0.91 0.93 0.77
Max Score 89.4 47.7 0.17 1.00 1.00 1.00 0.50
In-spec 86.3 89.8 0.20 0.81 0.83 1.00 0.18
Exploration 71.0 49.4 0.21 0.29 0.29 0.05 0.92
11

3.3. Computational environment and runtime
All timings were obtained on a Windows 11 x64 desktop with an Intel Core Ultra 7 265 CPU (20 cores,
2.4 GHz) and 64 GB RAM, running R 4.5.2 with SVEMnet 3.1.4 and glmnet 4.1-10 and parallel execution
enabled for the WMT. Users should note that on Windows, the parallelization of the WMT will trigger a
one-time Windows Firewall prompt for R when worker processes are created; this is due to local socket
connections between R processes and does not involve external network access.
For the lipid screening example (23 experimental runs, three Gaussian responses, shared third-order
deterministic expansion, and a 25 000-point random candidate set), a single end-to-end run of the workflow
required about 260 seconds: roughly 92 seconds to fit SVEMnet for the three responses, 156 seconds for the
optional permutation-based whole-model tests, and 9 seconds for the random-search scoring, candidate
selection, and CSV export. Thus most of the computational cost lies in SVEM model fitting and the WMT;
the optimization layer is comparatively light.
4. Simulation study
We carried out simulations comparing SVEMnet to repeated cross-validated elastic-net baselines over
grids of sample sizes and signal strengths, where “signal strength” refers to the proportion of variance in the
data explained by the underlying model (target R2). The baselines use a thin wrapper glmnet_with_cv()
around cv.glmnet, matching the α grid and penalty path to the SVEMnet settings. For each configuration we
ran both the default two-point grid α ∈ {0.5, 1} and a lasso-only grid α = 1, which behaved indistinguishably
in these simulations. All simulation scripts and CSV result files are provided in the replication bundle of
Karl [38].
4.1. Design and metrics
Each replicate uses a sparse quadratic response surface in four continuous factors X1:X4 ∈ [−1, 1] and
one three-level factor X5 ∈ L1, L2, L3 (sum-to-zero coding). Training data are Latin hypercube samples for
X1:X4 with balanced X5 levels [31], with ntotal ∈ {15, 20, . . . , 50}. As noted in the introduction, we use
Latin hypercubes here for simulation convenience; in practice, more sophisticated optimal or space-filling
designs are typically preferable when constructing the initial experimental design in applied settings
[39, 27, 29, 30, 28].
The quadratic model has pfull = 25 coefficients (including the intercept), so ntotal = pfull = 25 is the
interpolation boundary. To induce sparsity, in each simulation replicate and for each coefficient j, draw
πj ∼ Beta(0.5, 0.5), Zj ∼ Bernoulli(πj), and Ej from a mean-zero Laplace distribution, and set βj = ZjEj.
This produces many exact zeros with Laplace-distributed nonzero effects.
For the Gaussian case, we evaluate the noiseless surface on a large grid to estimate its standard
deviation σf , add Gaussian noise to the training responses so that the expected domain R2 matches a
target R2 ∈ {0.5, 0.9}, and score all methods on a separate noiseless 10 000-point holdout. Performance is
summarized by log-normalized RMSE (log-NRMSE), where RMSE on the holdout is normalized by the
empirical standard deviation of the noiseless surface on that grid.
12

To probe under- and over-specification, we fit three right-hand-side expansions against the same data
generating mechanism (whose true order is quadratic): Order 1 = main effects only (underspecified),
pfull = 7; Order 2 = quadratics and two-way interactions (correct order), pfull = 25; and Order 3 = Order 2
plus all three-way interactions and pure cubic terms (overspecified), pfull = 45. Within each expansion,
we compare SVEMnet objectives (wSSE, wAIC, wBIC) with and without relaxed base learners, and repeated
5×CV elastic-net baselines using the same α grids.
The binomial study uses the same latent quadratic surface η(x) but treats the binary outcome as a
discretized analog. We define p(x) = logit−1(s η(x)) with s = √R2/(1 − R2) for R2 ∈ {0.5, 0.9}, draw
training labels Y ∼ Bernoulli{p(x)} once per replicate, and score models on a large noiseless holdout using
the true probabilities p(x). Here R2 serves as a convenient signal-strength parameter (an approximate
analog of the Gaussian-domain R2 rather than an exact GLM coefficient of determination). Performance
is measured by holdout log-loss. Methods again include SVEMnet with {wAIC, wBIC, wSSE } and repeated
cross-validated baselines matched on α and relaxation.
To reduce Monte Carlo error, the summary curves in Figures 3, 4, and 5 average over 900 independent
simulation replicates for each combination of ntotal, target R2, model order, and fitting method (Setting).
In these overview plots we fix a common set of tuning defaults. For Gaussian responses, cv.glmnet uses
standard (non-relaxed) elastic-net paths (relax = FALSE) and SVEMnet uses relaxed base learners (relax
= TRUE); post-hoc debiasing is disabled for all methods and the elastic-net mixing grid is held at α ∈ {0.5, 1}.
For binomial responses, all methods use non-relaxed paths (relax = FALSE) with the same default α grid.
These settings are used for all model orders shown in the figures.
For the mixed-model multiple-comparison summaries in Tables B.4 and B.5 we focus on the correctly
specified quadratic expansion (Order 2) and explore a richer grid of SVEM and cv.glmnet configurations.
Separate simulation runs with 250 (Gaussian) and 200 (binomial) independent replicates for each combination
of ntotal, Target_R2, and Setting are used to fit linear mixed models with Setting as the primary fixed
effect, ntotal, Target_R2, and their interaction as additional categorical fixed effects, and a random intercept
for replicate (RunID). Pairwise differences in log-NRMSE and log-loss are summarized via Tukey–Kramer
all-pairs comparisons of the model-based least-squares means. The loss-only wSSE selector is included in
the simulation runs and overview figures but excluded from the mixed-model datasets to avoid inflating
the number of clearly noncompetitive comparisons. The resulting connecting-letter displays appear in
Tables B.4 and B.5 and in the Supplement.
4.2. Gaussian results
Several consistent patterns emerge across R2 levels, sample sizes, and model orders.
• Information criteria versus loss-only selectors. Across the grid, SVEMnet with validation
weighted information criteria (wAIC, wBIC) dominates the historical loss-only wSSE selector in terms of
mean log-NRMSE on the noiseless holdout. wAIC often slightly improves on the repeated cv.glmnet
for Order 2 and 3. The best overall configuration in these simulations is SVEM-wAIC with relaxed
elastic-net base learners and no debias step; wBIC is close behind (Figure 3 and Appendix Table B.4).
13

Mean(log_NRMSE_Holdout) vs. n_total ModelOrder
123
log_NRMSE_Holdout
-1.2
-1
-0.8
-0.6
-0.4
-0.2
0
0.2
0.4
0.6
0.8
1
1.2
-1.2
-1
-0.8
-0.6
-0.4
-0.2
0
0.2
0.4
0.6
0.8
1
1.2
0.5 0.9
Target_R2
10 15 20 25 30 35 40 45 50 10 15 20 25 30 35 40 45 50 10 15 20 25 30 35 40 45 50 n_total
Model
cv.glmnet wAIC wBIC wSSE
Figure 3: Effect of expansion order on mean log-NRMSE (lower is better) on a noiseless holdout. Panels: target R2 ∈ {0.5, 0.9}.
Columns: model order used in fitting. Curves compare repeated cv.glmnet baselines (standard, non-relaxed paths) to SVEMnet
with relaxed elastic-net base learners using the default mixing grid α ∈ {0.5, 1}; no debiasing is applied. Underspecification
(Order 1) consistently harms accuracy; modest overspecification (Order 3) degrades far less than underspecification, with
Order 2 best as expected.
• Relaxation and debiasing. For the SVEM information-criterion selectors, relaxed base learners
improve performance relative to non-relaxed fits, while relaxation degrades cv.glmnet performance.
The best-performing overall configuration in these simulations is SVEM-wAIC with relaxed base learners
and no debias step; wBIC is close behind (Figure 3 and Table B.4).
• Effect of expansion order. Underspecification (Order 1, main effects only) substantially degrades
accuracy. The correctly specified quadratic expansion (Order 2) performs best, and mild overspecifi
cation with additional three-way interactions and pure cubic terms (Order 3) degrades far less than
underspecification (Figure 3).
• Peaking near the interpolation boundary. For each simulation run we recorded kmedian, the
median number of active parameters kλ across SVEM bootstrap replicates; Figure 4 shows the mean
of these medians over simulation replicates. The wSSE selector shows a pronounced spike in both
mean log-NRMSE (Figure 3) and median selected model size kλ (Figure 4) when ntotal equals the
expansion dimensions: pfull = 25 for Order 2 and pfull = 45 for Order 3 (pfull = 7 for Order 1 is
not included in the range of the graph). This is the “peaking” phenomenon near the interpolation
boundary in small-sample regression [16]. In contrast, wAIC and wBIC remain smooth in both error
and kλ.
Overall, the simulations support the default configuration used in SVEMnet for Gaussian responses:
validation-weighted wAIC, relaxed elastic-net base learners, debias = FALSE, and α ∈ {0.5, 1}. 14

Mean(K_Median) vs. n_total ModelOrder
123
K_Median
0
10
20
30
40
0
10
20
30
40
0.5 0.9
Target_R2
10 15 20 25 30 35 40 45 50 10 15 20 25 30 35 40 45 50 10 15 20 25 30 35 40 45 50 n_total
Model
cv.glmnet wAIC wBIC wSSE
Figure 4: Mean median-selected size kλ versus ntotal for Gaussian simulations, stratified by target R2 and model order. Colors
denote selector (cv.glmnet, wAIC, wSSE, wBIC); line type denotes α ∈ {0.5, 1}. Simulation settings match Figure 3 (non-relaxed
cv.glmnet, relaxed SVEMnet, no debiasing). wSSE exhibits a localized spike in kλ near n = pfull.
4.3. Binomial results
Across ntotal ∈ {15, . . . , 50} and R2 ∈ {0.5, 0.9}, non-relaxed fits dominate their relaxed counterparts
on the holdout log-loss scale. For the correctly specified quadratic expansion (Order 2), SVEMnet with
wBIC and the non-relaxed repeated-cv.glmnet baselines attain essentially indistinguishable performance:
Tukey–Kramer comparisons based on the mixed-effects model place these configurations in the same
best-performing group (Table B.5). However, Figure 5 suggests that SVEMnet with wBIC may outperform
cv.glmnet in the overspecified case.
Relaxed refits are systematically worse: for each objective and α grid the relax = TRUE versions have
larger least-squares means, with the relaxed cross-validated baselines forming the worst group in Table B.5.
The degradation from relaxation is especially pronounced for the repeated-cv.glmnet fits, where the
increase in mean log-loss is roughly twice as large as for the corresponding SVEMnet selectors.
Allowing α ∈ {0.5, 1} has no material impact relative to lasso-only fits (α = 1): default two-point
grids and pure lasso grids are indistinguishable within each selection method. As in the Gaussian case,
the loss-only wSSE selector (included only in the overview plots) exhibits a pronounced error spike at
ntotal = pfull, now on the log-loss scale (Figure 5). SVEMnet with wAIC underperforms wBIC in the binomial
setting. These simulations support the default configuration used in SVEMnet for binomial responses:
validation-weighted wBIC, no relaxation, and α ∈ {0.5, 1}.
15

Mean(LogLoss_Holdout) vs. n_total ModelOrder
123
LogLoss_Holdout
0.4
0.6
0.8
1
1.2
1.4
1.6
0.4
0.6
0.8
1
1.2
1.4
1.6
0.5 0.9
Target_R2
10 15 20 25 30 35 40 45 50 10 15 20 25 30 35 40 45 50 10 15 20 25 30 35 40 45 50 n_total
Model
cv.glmnet wAIC wBIC wSSE
Figure 5: Binomial simulation summary (response: LogLoss_Holdout versus true probabilities). Mean log-loss on a large
holdout versus ntotal, stratified by target R2 and model order. All methods use non-relaxed paths (relax = FALSE) with the
default mixing grid α ∈ {0.5, 1}. wSSE spikes at n = pfull.
5. Conclusion
SVEMnet provides an open-source implementation of Self-Validated Ensemble Models for small-sample
DOE and chemometric applications, with (relaxed) elastic-net base learners for Gaussian and binomial
responses built on glmnet using validation-weighted information-criterion analogs.
Together with the permutation whole-model test and the random-search desirability scoring and
candidate-selection tools, SVEMnet offers an end-to-end workflow for mixture-constrained multi-response
optimization in a single toolchain. The software is aimed at practitioners running small-sample (e.g.,
tens of runs) chemometric, pharmaceutical, and industrial DOE studies for formulation optimization,
often involving mixture factors alongside numeric and categorical process factors. SVEM-based elastic-net
surrogates provide a practical alternative or complement to Gaussian-process-based Bayesian optimization,
particularly when the number of runs is too small to support rich covariance structures or when full BO
tooling is unavailable. A head-to-head comparison with Gaussian-process Bayesian optimization is beyond
the scope of this software-focused paper; here our comparisons focus on repeated CV elastic-net baselines
that reflect common penalized-regression workflows in small-sample DOE.
Appendix A. Validation-weighted criterion and guardrails
This appendix records the validation-weighted selection criteria used in SVEMnet.
16

Appendix A.1. Gaussian criterion
Within each FRW replicate, let λ index a point on the elastic-net path, let kλ denote the number of
nonzero coefficients (including the intercept), and let wvalid
i be the FRW validation weights, rescaled to
have mean one so that ∑
i wvalid
i = n. Write rλ,i = yi − yˆλ,i for the residual at observation i under λ, and
define the weighted sum of squared errors
SSEw(λ) = ∑
i
wvalid
i r2
λ,i.
For Gaussian responses we consider three selectors: a loss-only rule based on SSEw(λ) and two
information-criterion analogs. The loss-only selector wSSE minimizes SSEw(λ) over the path. The validation
weighted AIC and BIC analogs minimize
Cg(λ) = n log
( SSEw(λ) n
)
+ g kλ, g ∈ {2, log(nadm
eff )}, (A.1)
which yield, respectively, a validation-weighted AIC analog (wAIC, g = 2) and a validation-weighted BIC
analog (wBIC, g = log(nadm
eff )) [12, 13, 14]. In the unweighted case, wvalid
i ≡ 1 and SSEw(λ) reduces to the
usual residual sum of squares RSS(λ). In that case Cg(λ) reduces to n log{RSS(λ)/n} + g kλ, which is the
standard Gaussian AIC/BIC form (up to an additive constant independent of λ).
Following Kish [40], we summarize the variability of the validation weights via an effective sample size
neff =
(∑
i wvalid
i
)2
∑
i(wvalid
i )2
and use the bounded quantity
nadm
eff = min{ n, max(2, neff ) }
when forming the BIC-style penalty log(nadm
eff ) kλ. With mean-one FRW weights, 2 ≤ nadm
eff ≤ n.
For the information-criterion selectors (wAIC, wBIC) we additionally impose
kλ − 1 < nadm
eff ,
so that the number of non-intercept coefficients is strictly smaller than the effective number of validation
observations. Path points violating this inequality are treated as inadmissible when evaluating Cg(λ). This
guardrail helps stabilize model selection near the interpolation boundary n = pfull [41, 32, 16, 42].
Appendix A.2. Binomial (logistic) criterion
For binomial responses we minimize a deviance-style quantity plus a complexity penalty. Let lvalid(λ)
denote the weighted log-likelihood on the FRW validation copy under path point λ, and let NLL(λ) =
−lvalid(λ) be the corresponding weighted negative log-likelihood. The AIC- and BIC-style selectors minimize
C (bin)
g (λ) = −2 lvalid(λ) + g kλ = 2 NLL(λ) + g kλ, g ∈ {2, log(nadm
eff )},
which differs from the usual binomial deviance only by an additive constant independent of λ. In the
implementation we work directly with NLL(λ) and form C(bin)
g (λ) as 2 × NLL + g kλ for these selectors.
For wAIC and wBIC the same effective-size quantity nadm
eff and guardrail kλ − 1 < nadm
eff are used as in the
Gaussian case. 17

When g = 0 the selector is a loss-only rule based on the weighted negative log-likelihood; for consistency
with historical SVEM tooling we retain the label wSSE for this case even though it is based on negative
log-likelihood rather than squared error. Ensemble predictions are formed by averaging member-predicted
probabilities on the response scale.
Appendix B. Supplementary multiple-comparison tables
For completeness we provide Tukey–Kramer multiple-comparison summaries for the Gaussian and
binomial simulations. These tables correspond to the mixed-model analyses described in Section 4, based
on 250 (Gaussian) and 200 (binomial) independent simulation replicates for each combination of ntotal,
Target_R2, and Setting at the quadratic expansion (Order 2); full CSV outputs are included in the
replication bundle [38].
For all Tukey–Kramer analyses we fixed the expansion at the correctly specified quadratic order (Order 2)
and fit linear mixed models with Setting as the primary factor of interest, ntotal, Target_R2, and their
interaction as categorical fixed effects, and simulation run ID as a random intercept. Pairwise differences
between settings were assessed using Tukey–Kramer honestly significant difference comparisons of the
model-based least-squares means, controlling the familywise error rate at α = 0.05. Settings that do
not share a letter differ significantly, and smaller least-squares means correspond to better performance
(lower log-NRMSE or log-loss). Here relaxTRUE/FALSE indicates whether relaxed base learners are used,
lasso/default indicates the pure lasso case (α = 1) versus the mixed-α grid α ∈ {0.5, 1}, and in
Table B.4 the suffix dbTRUE/FALSE indicates whether the post-hoc debiasing step is applied. In Table B.5
all configurations use dbFALSE.
To avoid inflating the number of pairwise comparisons with a clearly noncompetitive method, the
loss-only wSSE selector was omitted from the Tukey–Kramer analyses. The overview plots in Figures 3
and 5 show wSSE performing uniformly poorly across the simulation grid.
Table B.4: Tukey–Kramer HSD connecting letters for the Gaussian
simulation (response: log-NRMSE on a noiseless holdout; smaller
least-squares means are better; rows are sorted from worst to best).
Setting Least-squares mean Group
CV_relaxTRUE_lasso_dbTRUE -0.4550838 A
CV_relaxTRUE_default_dbTRUE -0.4568168 A
CV_relaxTRUE_lasso_dbFALSE -0.4784299 B
CV_relaxTRUE_default_dbFALSE -0.4795369 B
SVEM_wBIC_relaxFALSE_lasso_dbFALSE -0.4872574 BC
SVEM_wBIC_relaxFALSE_default_dbFALSE -0.4873671 BC
CV_relaxFALSE_lasso_dbTRUE -0.4890622 C
CV_relaxFALSE_default_dbTRUE -0.4955437 C
CV_relaxFALSE_lasso_dbFALSE -0.5125708 D
18

Setting Least-squares mean Group
SVEM_wBIC_relaxFALSE_default_dbTRUE -0.5153720 DE
SVEM_wBIC_relaxFALSE_lasso_dbTRUE -0.5154061 DE
SVEM_wAIC_relaxFALSE_lasso_dbTRUE -0.5173612 DE
SVEM_wAIC_relaxFALSE_default_dbTRUE -0.5173877 DE
CV_relaxFALSE_default_dbFALSE -0.5182228 DE
SVEM_wBIC_relaxTRUE_lasso_dbTRUE -0.5202504 DE
SVEM_wBIC_relaxTRUE_default_dbTRUE -0.5205100 DE
SVEM_wAIC_relaxTRUE_default_dbTRUE -0.5240749 E
SVEM_wAIC_relaxTRUE_lasso_dbTRUE -0.5243519 E
SVEM_wAIC_relaxFALSE_default_dbFALSE -0.5429558 F
SVEM_wAIC_relaxFALSE_lasso_dbFALSE -0.5436361 F
SVEM_wBIC_relaxTRUE_lasso_dbFALSE -0.5495013 F
SVEM_wBIC_relaxTRUE_default_dbFALSE -0.5501097 F
SVEM_wAIC_relaxTRUE_default_dbFALSE -0.5745804 G
SVEM_wAIC_relaxTRUE_lasso_dbFALSE -0.5746790 G
Table B.5: Tukey–Kramer HSD connecting letters for the bino
mial simulation (response: LogLoss_Holdout; smaller least-squares
means are better; rows are sorted from worst to best).
Setting Least-squares mean Group
CV_relaxTRUE_default 0.938427 A
CV_relaxTRUE_lasso 0.896920 A
SVEM_wAIC_relaxTRUE_default 0.808413 B
SVEM_wAIC_relaxTRUE_lasso 0.800409 B
SVEM_wBIC_relaxTRUE_default 0.735577 C
SVEM_wBIC_relaxTRUE_lasso 0.724202 C
SVEM_wAIC_relaxFALSE_default 0.683151 D
SVEM_wAIC_relaxFALSE_lasso 0.683002 D
CV_relaxFALSE_lasso 0.602811 E
CV_relaxFALSE_default 0.593384 E
SVEM_wBIC_relaxFALSE_default 0.575261 E
SVEM_wBIC_relaxFALSE_lasso 0.575050 E
CRediT authorship contribution statement
Andrew T. Karl: Software; Writing - original draft;
19

Funding
This research did not receive any specific grant from funding agencies in the public, commercial, or
not-for-profit sectors.
Declaration of competing interest
The author developed the SVEMnet package and the related JMP add-in. The author has no other
competing financial interests or personal relationships that could have appeared to influence the work
reported in this paper.
Declaration of generative AI and AI-assisted technologies in the manuscript and software
preparation process
During the preparation of this manuscript and the accompanying software, the author used OpenAI
GPT models as assistive tools. Under the author’s direction, these models were used (i) to revise and
proofread prose and (ii) to draft the majority of the initial SVEMnet R code and associated documentation.
All AI-generated text and code were reviewed, edited, and validated by the author before inclusion. All
algorithmic design choices, statistical methodology, simulation design, and final implementation decisions
were made by the author, who takes full responsibility for the content of the manuscript, the software, and
all reported results.
Data and software availability
Data and replication. The R scripts, configuration files, and CSV outputs required to reproduce the
simulations, figures, and LNP case study are available in the Mendeley Data repository [38].
Software. SVEMnet is available on CRAN: https://doi.org/10.32614/CRAN.package.SVEMnet.
The version used in this paper is 3.1.4. Documentation includes a reference manual shipped with the
package. The package is written in R 4.5.2 and licensed under GPL-2 | GPL-3.
JMP add-in. An optional JMP add-in, “Relaxed Elastic Net and Lasso SVEM using R” (https:
//marketplace.jmp.com/appdetails/Relaxed+Elastic+Net+and+Lasso+SVEM+using+R), is available
via the JMP Marketplace. The add-in lets JMP users install SVEMnet in R, call the package for a saved Fit
Model table script with Gaussian responses, and obtain prediction and standard error formula columns. It
provides a convenience front-end to SVEMnet but is not required to reproduce the results in this paper.
References
[1] L. Breiman, Bagging predictors, Machine learning 24 (1996) 123–140.
[2] T. Lemkus, C. Gotwalt, P. Ramsey, M. L. Weese, Self-validated ensemble models for design of
experiments, Chemometrics and Intelligent Laboratory Systems 219 (2021) 104439. doi:10.1016/j.ch
emolab.2021.104439.
20

[3] L. Xu, C. Gotwalt, Y. Hong, C. B. King, W. Q. Meeker, Applications of the fractional-random-weight
bootstrap, The American Statistician 74 (2020) 345–358. doi:10.1080/00031305.2020.1731599.
[4] C. Gotwalt, P. Ramsey, Model validation strategies for designed experiments using bootstrapping
techniques with applications to biopharmaceuticals (2018).
[5] A. T. Karl, A randomized permutation whole-model test heuristic for Self-Validated Ensemble Models
(SVEM), Chemometrics and Intelligent Laboratory Systems 249 (2024) 105122. doi:10.1016/j.chem
olab.2024.105122.
[6] P. Ramsey, M. Gaudard, W. Levin, Accelerating innovation with space filling mixture designs, neural
networks and svem, in: JMP Discovery Conference, 2021. URL: https://community.jmp.com/t5
/Abstracts/Accelerating-Innovation-with-Space-Filling-Mixture-Designs/ev-p/756841,
abstract and slides available from the JMP User Community.
[7] G. Shmueli, To explain or to predict?, Statistical Science 25 (2010) 289–310. doi:10.1214/10-STS330.
[8] H. Zou, T. Hastie, Regularization and variable selection via the elastic net, Journal of the Royal
Statistical Society Series B: Statistical Methodology 67 (2005) 301–320.
[9] J. H. Friedman, T. Hastie, R. Tibshirani, Regularization paths for generalized linear models via
coordinate descent, Journal of Statistical Software 33 (2010) 1–22. doi:10.18637/jss.v033.i01.
[10] N. Meinshausen, Relaxed lasso, Computational Statistics & Data Analysis 52 (2007) 374–393.
doi:10.1016/j.csda.2006.12.019.
[11] J. Friedman, T. Hastie, R. Tibshirani, The relaxed lasso, https://glmnet.stanford.edu/articles
/relax.html, 2025. Article vignette.
[12] H. Akaike, A new look at the statistical model identification, IEEE Transactions on Automatic Control
19 (1974) 716–723. doi:10.1109/TAC.1974.1100705.
[13] G. Schwarz, Estimating the dimension of a model, The Annals of Statistics 6 (1978) 461–464.
doi:10.1214/aos/1176344136.
[14] K. P. Burnham, D. R. Anderson, Model Selection and Multimodel Inference: A Practical Information
Theoretic Approach, 2 ed., Springer, New York, 2002.
[15] S. Raudys, R. P. Duin, Expected classification error of the fisher linear classifier with pseudo-inverse
covariance matrix, Pattern Recognition Letters 19 (1998) 385–392. URL: https://www.sciencedir
ect.com/science/article/pii/S0167865598000166. doi:https://doi.org/10.1016/S0167-865
5(98)00016-6.
[16] N. Krämer, On the peaking phenomenon of the lasso in model selection, arXiv preprint (2009). URL:
https://arxiv.org/abs/0904.4416. doi:10.48550/arXiv.0904.4416. arXiv:0904.4416.
21

[17] A. T. Karl, S. Essex, J. Wisnowski, H. Rushing, A workflow for lipid nanoparticle (LNP) formulation
optimization using designed mixture–process experiments and Self-Validated Ensemble Models (SVEM),
Journal of Visualized Experiments (2023) e65200. doi:10.3791/65200.
[18] A. T. Karl, J. Wisnowski, H. Rushing, Jmp pro 17 remedies for practical struggles with mixture
experiments, in: JMP Discovery Conference, 2022. doi:10.13140/RG.2.2.34598.40003/1, conference
presentation.
[19] P. Ramsey, C. Gotwalt, Model validation strategies for designed experiments using bootstrapping
techniques with applications to biopharmaceuticals, in: JMP Discovery Conference – Europe, 2018.
URL: https://community.jmp.com/t5/Abstracts/Model-Validation-Strategies-for-Desig
ned-Experiments-Using/ev-p/849647/redirect_from_archived_page/true, abstract and slides
available from the JMP User Community.
[20] P. Ramsey, W. Levin, T. Lemkus, C. Gotwalt, Svem: A paradigm shift in design and analysis of
experiments, in: JMP Discovery Conference – Europe, 2021. URL: https://community.jmp.com/t5
/Abstracts/SVEM-A-Paradigm-Shift-in-Design-and-Analysis-of-Experiments-2021/ev-p/7
56634, abstract and slides available from the JMP User Community.
[21] P. Ramsey, P. McNeill, Cmc, svem, neural networks, doe, and complexity: It’s all about prediction, in:
JMP Discovery Conference, 2023. Conference presentation.
[22] D. Mirzaiyanrajeh, E. V. Dave, J. E. Sias, P. Ramsey, Developing a prediction model for low
temperature fracture energy of asphalt mixtures using machine learning approach, International
Journal of Pavement Engineering 24 (2023) 2024185. doi:10.1080/10298436.2021.2024185.
[23] M. A. Korany, R. M. Youssef, M. A. A. Ragab, M. A. Afify, A synergistic chemometric combination for
whiteness and greenness assessed hplc-dad assay of aqueous extracts of ivy and thyme and potassium
sorbate in a syrup formula, Microchemical Journal 196 (2024) 109616. doi:10.1016/j.microc.2023.
109616.
[24] A. E. Mostafa, M. S. Eissa, A. Elsonbaty, K. Attala, R. A. Abdel Salam, G. M. Hadad, M. A.
Abdelshakour, Computer-aided design of eco-friendly imprinted polymer decorated sensors augmented
by self-validated ensemble modeling designs for the quantitation of drotaverine hydrochloride in dosage
form and human plasma, Journal of AOAC International 106 (2023) 1361–1373. doi:10.1093/jaoaci
nt/qsad049.
[25] D. R. Jones, M. Schonlau, W. J. Welch, Efficient global optimization of expensive black-box functions,
Journal of Global Optimization 13 (1998) 455–492.
[26] B. Shahriari, K. Swersky, Z. Wang, R. P. Adams, N. de Freitas, Taking the human out of the loop: A
review of Bayesian optimization, Proceedings of the IEEE 104 (2016) 148–175.
[27] R. H. Myers, D. C. Montgomery, C. M. Anderson-Cook, Response Surface Methodology: Process and
Product Optimization Using Designed Experiments, 4 ed., Wiley, 2016.
22

[28] B. Jones, D. C. Montgomery, Design of Experiments: A Modern Approach, Wiley, Hoboken, NJ, 2020.
[29] R. A. Lekivetz, B. A. Jones, Fast flexible space-filling designs with nominal factors for nonrectangular
regions, Quality and Reliability Engineering International 35 (2019) 677–684. doi:10.1002/qre.2429.
[30] B. Jones, D. M. Steinberg, Unrestricted bridge (U-Bridge) designs for settings with non-deterministic
data, Quality and Reliability Engineering International 41 (2025) 3405–3414. doi:https://doi.org/
10.1002/qre.70050.
[31] M. D. McKay, R. J. Beckman, W. J. Conover, A comparison of three methods for selecting values of
input variables in the analysis of output from a computer code, Technometrics 21 (1979) 239–245.
[32] T. Hastie, R. Tibshirani, J. Friedman, The Elements of Statistical Learning: Data Mining, Inference,
and Prediction, 2nd ed., Springer, New York, 2009.
[33] JMP, Overview of self-validated ensemble models, JMP Pro 19 Documentation, 2023. URL: https:
//www.jmp.com/support/help/en/19.0/?os=win&source=application#page/jmp/overview-o
f-selfvalidated-ensemble-models.shtml, section: Modeling.
[34] E. C. Harrington, The desirability function, Industrial Quality Control 21 (1965) 494–498.
[35] G. Derringer, R. Suich, Simultaneous optimization of several response variables, Journal of Quality
Technology 12 (1980) 214–219.
[36] J. C. Gower, A general coefficient of similarity and some of its properties, Biometrics 27 (1971)
857–871.
[37] L. Kaufman, P. J. Rousseeuw, Finding Groups in Data: An Introduction to Cluster Analysis, Wiley,
New York, 1990.
[38] A. Karl, Data and code for SVEMnet publication, 2025. URL: https://doi.org/10.17632/2zshchr
hjh.3. doi:10.17632/2zshchrhjh.3.
[39] J. A. Cornell, Experiments with Mixtures: Designs, Models, and the Analysis of Mixture Data, 3 ed.,
Wiley, 2002.
[40] L. Kish, Survey Sampling, John Wiley & Sons, New York, 1965.
[41] B. Efron, T. Hastie, I. Johnstone, R. Tibshirani, Least angle regression, Annals of Statistics 32 (2004)
407–499. doi:10.1214/009053604000000067.
[42] M. Belkin, D. Hsu, S. Ma, S. Mandal, Reconciling modern machine-learning practice and the classical
bias–variance trade-off, Proceedings of the National Academy of Sciences 116 (2019) 15849–15854.
doi:10.1073/pnas.1903070116.
23

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:53.754Z
- **Text Length:** 60778 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 23 of 23
