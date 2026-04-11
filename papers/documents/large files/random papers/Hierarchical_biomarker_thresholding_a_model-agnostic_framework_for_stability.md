# PDF Document: Debeaupuis - 2025 - Hierarchical biomarker thresholding a model-agnostic framework for stability.pdf

**File Path:** Debeaupuis - 2025 - Hierarchical biomarker thresholding a model-agnostic framework for stability.pdf

**Processed Date:** 2026-02-10T18:18:01.029Z

**File Size:** 1681.21 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3399

**Title:** Hierarchical biomarker thresholding: a model-agnostic framework for stability

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Hierarchical biomarker thresholding: a model-agnostic framework for stability
Orianne Debeaupuis
versite ́ Paris Cite ́, Institut Imagine, Laboratoire d’immunoge ́ne ́tique des maladies autoimmunes pe ́diatriques, INSERM UMR1163, Paris, Fra Universite ́ PSL, Universite ́ Sorbonne, CNRS UMR168, Institut Curie, Paris, France
Abstract
Many biomarker pipelines require patientlevel decisions aggregated from instance-level (cell/patch) scores. Thresholds tuned on pooled instances often fail across sites due to hierarchical dependence, prevalence shift, and score-scale mismatch. We present a selectionhonest framework for hierarchical thresholding that makes patient-level decisions reproducible and more defensible. At its core is a risk decomposition theorem for selectionhonest thresholds. The theorem separates contributions from (i-
) internal fit and patientlevel generalization, (ii) operating-point shift reflecting prevalence and shape changes, and (iii) a stability term that penalizes sensitivity to threshold perturbations. The stability component is computable via patient-block bootstraps mapped through a monotone modulus of risk. This framework is model-agnostic, reconciles heterogeneous decision rules on a quantile scale, and yields monotone-invariant ensembles and reportable diagnostics (e.g. fliprate, operating-point -
shift).
1 Introduction
Clinical deployment requires patient-level decisions with clear operating characteristics and transparent uncertainty. In practice, a model is developed on Hospital A (domain P ), a patient-level score Sp is formed from instance scores (e.g., patches or cells), and a threshold t is chosen to recommend action. When this decision rule is deployed at Hospital B (domain Q), performance often degrades. We ask: what predictably drives this degradation, and how should the threshold be selected to mitigat-
e it?
Three failure modes. (i) Hierarchical dependence. Standard validation pools instances as if i.i.d., overstating precision when the decision is at the patient level.
(ii) Domain shift. Prevalence and class-conditional score distributions differ between P and Q; a numeric cut such as S ≥ t is site-specific unless calibrated. (iii) Selection instability. If the internal risk RP (·) is steep near its minimizer, small sampling perturbations can induce large threshold changes.
Our approach. We develop a model-agnostic framework for stable hierarchical thresholding that yields not only a threshold but also a diagnostic report explaining where external risk arises. The core is an external-risk certificate evaluated at the realized operating point tˆ. It decomposes RQ(tˆ) into four interpretable components: (1) internal fit, (2) a patient-level uniform generalization term, (3) an operating-point shift that isolates prevalence and local shape differences at t, and (4) an in-
stability term that quantifies sensitivity to threshold perturbations. Guided by this decomposition, we select tˆ via a penalized objective whose penalty is a bootstrapbased, high-probability plug-in for the instability term; we also provide quantile-scale ensembling to reconcile score scales across methods and sites, and diagnostics to attribute external risk to its sources.
Contributions. (i) An external-risk decomposition at the realized operating point, separating internal fit, patient-level generalization, operating-point shift (prevalence and local shape at t), and instability; (ii) a computable stability penalty aligned with the instability term via a patient-block bootstrap and an empirical risk modulus; (iii) quantile-scale ensembling for monotone invariance across scorers; (iv) selection-honest, patient-level evaluation with actionable diagnostics; (v) positi-
oning relative to conformal guarantees and meta-analytic pooling).
Novelty in context. Conformal methods provide marginal, distribution-free control but do not localize where shift inflates risk. Meta-analytic pooling models heterogeneity with variance components but does not give a per-threshold, transport-aware accounting. Our contribution localizes external risk at the operating
arXiv:2511.18030v1 [stat.ME] 22 Nov 2025

Hierarchical thresholding with stability
point, separates prevalence from local shape effects, and introduces a stability control that targets the same quantity appearing in the certificate.
Paper roadmap. Section 4.3 presents the framework and decomposition; Section 4.4 derives the stabilitypenalized criterion and diagnostics; Section 4.5 covers quantile-scale ensembling; Section 4.2 states the certificates and the bootstrap link; Table 1 summarizes notation; Section 6 discusses positioning and implications.
2 Related work
Our framework for stable thresholding engages with several established lines of research, from classical diagnostic medicine to modern theories of robustness and statistical inference.
Diagnostic test accuracy and thresholding. The foundational literature on diagnostic test accuracy, exemplified by Pepe (2003), provides a rich toolkit for selecting cutoffs. Classical methods often default to maximizing cost-insensitive criteria like Youden’s J Youden (1950) or evaluating global discrimination with metrics like the AUC DeLong et al. (1988). While essential for optimization, this body of work generally assumes a stable data-generating process and does not explicitly provide a mech-
anism to diagnose performance degradation when a threshold is transported to a new clinical environment. Our contribution is a transport-focused certificate that targets a single, clinically meaningful operating point with explicit misclassification costs.
Domain adaptation and robustness. The challenge of transporting a rule is central to domain adaptation. Foundational bounds Ben-David et al. (2010); Mansour et al. (2009) relate target error to source error via global distributional divergences. Specific methodologies address covariate shift Shimodaira (2000) or label shift Lipton et al. (2018) through reweighting. A modern alternative, distributionally robust optimization (DRO), minimizes worst-case loss over an uncertainty set of distributions D-
uchi et al. (2021). Our approach differs: instead of offering a global guarantee or a reweighting prescription, our certificate provides a local diagnostic at the realized operating threshold, isolating the impact of distribution changes.
Stability, generalization, and multiplicity. The selection instability we directly penalize is motivated by theories of generalization and stability. Our uniform validation term follows from VC theory Vapnik (1998), while the stability penalty operationalizes algorithmic
stability ideas Bousquet and Elisseeff (2002). The phenomenon is related to predictive multiplicity, where a “Rashomon set” of distinct, near-optimal thresholds Breiman (2001) can achieve similar empirical performance. Our penalty steers selection toward flat basins of the risk landscape, where multiplicity (and hence sensitivity to perturbations) is reduced.
Selective inference and aggregated guarantees. The design of our evaluation protocol is informed by selective inference, which addresses optimistic bias from data reuse Fithian et al. (2014). Our strict selectionhonesty is a practical strategy to ensure an unbiased estimate of future performance. In contrast to methods that provide a single, aggregated guarantee, such as conformal prediction Angelopoulos and Bates (2021), which offers marginal coverage without localizing risk sources, or random-ef-
fects meta-analysis DerSimonian and Laird (1986), which subsumes site heterogeneity into a variance component; our framework preserves the interpretability of each component of risk inflation at the operating point.
3 Table of notation
Table 1: Notation used throughout.
Symbol Description
K Number of patients Ip Indices of instances for patient p (cells, tiles, ...) Sp Aggregated patient score gt Decision 1{Sp ≥ t} c10, c01 False negative / false positive costs πD Prevalence in domain D ∈ {P, Q}
F−
y,D Left-limit CDF of S | Y =y RD(t) Population risk in domain D ∆π |πQ − πP | (prevalence shift) Dy−(t) |F −
y,Q(t) − F −
y,P (t)| (shape gap) ωP (ε) Internal risk modulus ̂Rval(t) Validation-patient empirical risk γval(δval) Uniform generalization term t∗ Internal oracle threshold ˆbboot, q∗
1−δboot Bootstrap bias / quantile (stability) B Number of bootstrap resamples G
boot Stability penalty ̂FR Flip-rate (decision instability) Jm,A Penalized selection criterion
4 Results
4.1 Problem setup
Hierarchy and data. We observe patients indexed by p = 1, . . . , K. Patient p contributes a set of instances

Orianne Debeaupuis
i ∈ Ip (e.g., patches or cells) with features Xpi and instance-level scores Zpi = s(Xpi) from a fixed scorer s. All analysis and evaluation are carried out at the patient level; within-patient dependence is unrestricted.
Aggregation to a patient score. An aggregator A maps the instance scores of patient p to a patient-level score
Sp = A({Zpi : i ∈ Ip}),
where A may be, for example, the mean, a high quantile, or the maximum. The framework is agnostic to the choice of A.
Decision rule and costs. Given a threshold t ∈ R, the patient-level decision is
gt(p) = 1{Sp ≥ t},
and the misclassification loss L(y, yˆ) is cost-sensitive with c10 := L(1, 0) (false negative) and c01 := L(0, 1) (false positive).
Internal and external domains. We distinguish an internal (development) domain P (Hospital A) and an external (deployment) domain Q (Hospital B). Let πD = PrD(Y = 1) denote the disease prevalence in domain D ∈ {P, Q}. For y ∈ {0, 1}, write the left-limit class-conditional CDF of the patient score as
F−
y,D(t) = PDr(S < t | Y = y),
where the left limit is used to align with the decision rule S ≥ t when S has atoms; this makes all statements discrete-safe.
Population risk at a threshold. The (patient-level, cost-sensitive) risk in domain D at operating point t is
RD(t) = c10 πD F −
1,D(t) + c01 (1 − πD) (1 − F −
0,D (t)).
Our internal oracle threshold is any minimizer of the internal risk:
t⋆ ∈ arg min
u∈R RP (u).
Empirical risks and folds. Let Pval and Ptest denote the sets of validation and outer test patients on P , respectively. We enforce selection-honesty: Pval is
not used to choose tˆ. Define the patient-level empirical risks
̂Rval(t) = 1
|Pval|
∑
p∈Pval
L(Yp, gt(p)) ,
̂Rtest(t) = 1
|Ptest|
∑
p∈Ptest
L(Yp, gt(p)) .
(1)
We write RQ(t) for RD(t) evaluated at domain D=Q.
Confidence parameters. We separate (i) a patientlevel uniform generalization parameter δval and (ii) a bootstrap stability parameter δboot; their roles are distinct.
Generalization (patient level). ̂Rval(t) estimates RP (t) using patients as units. For threshold rules (VC dimension 1), classical learning theory yields a uniform deviation that shrinks with the number of validation patients nval:
Definition 4.1 (Patient-level generalization term). Let nval be the number of validation patients. For any δval ∈ (0, 1) define
γval(δval) = C
√
log(2/δval)
nval
,
with a universal constant C > 0. Then, with probability at least 1 − δval over validation patients,
sup
t∈R
∣∣RP (t) − ̂Rval(t)∣∣ ≤ γval(δval).
Remark (patient units). Cells/patches within a patient do not increase nval; dependence is absorbed at the patient level.
Instability (sensitivity to threshold perturbations). The learned threshold tˆ is a data-dependent estimate of an internal oracle t⋆. If RP (·) is steep
near t⋆, small estimation errors |tˆ− t⋆| can cause large risk changes. We index this sensitivity via a modulus that upper-bounds the worst-case risk increase for perturbations of size ε:
Definition 4.2 (Internal risk modulus). The internal risk modulus is
ωP (ε) = sup
|u−v|≤ε
{
c10πP
∣∣F −
1,P (u) − F −
1,P (v)∣∣
+ c01(1 − πP ) ∣∣F −
0,P (u) − F −
0,P (v)∣∣}
.
(2)
Remark 4.3 (Oscillation form of the internal modulus). The modulus in Definition 4.2 admits the equivalent oscillation form
ωP (ε) = sup
t∈R
{
c10πP oscε
(F −
1,P ; t)+c01(1−πP ) oscε
(F −
0,P ; t) }
,
where oscε(F ; t) = supu∈[t−ε,t+ε] F (u) −
infv∈[t−ε,t+ε] F (v).
Remark 4.4 (Conservative upper band for ωP ). To mitigate underestimation near ε ≈ 0, we construct a
pointwise upper confidence band ̂ω ↑
P (ε) by combining DKW bounds for empirical CDFs with isotonic regres
sion on ε 7→ ω; in all penalties we use ̂ω ↑
P by default.

Hierarchical thresholding with stability
Operating-point shift (domain mismatch localized at t). External performance may deviate from internal performance because Q differs from P in (i) prevalence and/or (ii) local class-conditional shape near the operating threshold. We unify the signed and magnitude forms in one definition:
Definition 4.5 (Operating-point shift: signed and magnitude gaps). For y ∈ {0, 1} and threshold t, define the signed local class-conditional gap
∆y(t) := F −
y,Q(t) − F −
y,P (t),
and its magnitude Dy−(t) := |∆y(t)|. Set ∆π = |πQ − πP |. The weighted operating-point shift is
Shift(t) := (c10+c01) ∆π+c10πP D−
1 (t)+c01(1−πP ) D−
0 (t).
The signs sign(∆y(t)) are used in diagnostics; the bound uses Dy−(t).
Remark 4.6 (Bounding the shift by global distances). Let dK (F, G) = supu |F (u)−G(u)|. For each y ∈ {0, 1},
Dy−(t) ≤ dK (F −
y,Q, F −
y,P ). For binary labels, ∆π = ∥PY − QY ∥TV = 1
2
∑
y∈{0,1} |P (Y = y) − Q(Y = y)|. Hence
Shift(t) ≤ (c10 + c01) ∥PY − QY ∥TV + c10πP dK (F −
1,Q, F −
1,P )
+ c01(1 − πP ) dK (F −
0,Q, F −
0,P ) .
(3)
Thus the operating-point shift can be strictly smaller than global divergences when discrepancies occur away from t.
4.2 External-risk certificate at the realized operating point
Assumptions. (H1) Selection-honesty: validation patients are not used to choose tˆ. (H2) Patient i.i.d. within domain: patients are independent within each domain D ∈ {P, Q}; within-patient dependence is unrestricted. (H3) Conditional analysis: the scorer s and aggregator A are treated as fixed (nested training is absorbed into the outer sampling).
Theorem 4.7 (External risk: base and augmented). Under (H1)–(H3), for any selection-honest threshold tˆ and any δval ∈ (0, 1), with probability at least 1 − δval over the validation patients,
RQ(tˆ) ≤ ̂Rval(tˆ) + γval(δval) + Shift(tˆ). (Base)
If, in addition, tˆ is an (approximate) empirical minimizer of ̂Rval(·) and t∗ ∈ arg minu RP (u), then
RQ(tˆ) ≤ ̂Rval(tˆ) + γval(δval) + Shift(tˆ) + ωP
(|tˆ− t∗|). (Augmented)
Assumption 4.8 (Regularity for the bootstrap radius). (i) (Local identifiability) There exists a neighborhood N of t∗ where RP has a unique minimizer and is directionally differentiable. (ii) (Patient-block bootstrap) The patient-level block bootstrap is consistent for the distribution of tˆ (inner selection held fixed).
(iii) (Modulus estimation) ̂ω ↑
P is a uniformly conserva
tive estimator of ωP over a grid E. Proposition 4.9 (Bootstrap upper envelope for instability). Let r1−δboot := |bˆboot| + q1∗−δboot , with bˆboot and
q1∗−δboot computed from a patient-block bootstrap with B
replicates. Under Assumption 4.8, for any δboot ∈ (0, 1) there exist nonnegative remainders ξn(B, δboot) and ηn such that
Pr{ |tˆ− t∗| ≤ r1−δboot
} ≥ 1 − δboot − ξn(B, δboot),
and, on the same event,
ωP
(|tˆ− t∗|) ≤ ̂ω ↑
P
(r1−δboot
) + ηn.
Hence, with probability at least 1 − δboot − ξn,
ωP
(|tˆ−t∗|) ≤ Gboot + ηn, Gboot := ̂ω ↑
P
(|bˆboot|+q1∗−δboot
).
No transfer guarantee. The certificates are upper bounds under (H1)–(H3) and a probability statement over the validation sample; they do not guarantee optimality on Q. The instability addend depends on t∗ and ωP and is controlled by the conservative surrogate Gboot. Proof of 4.7 is defered to the Appendix.
4.3 A framework induced by the certificate
The decomposition in Theorem 4.7 induces a design map from estimable, patient-level quantities to actions:
• Internal fit ̂Rval(·): minimize empirically under selection-honesty.
• Generalization γval(δval): report and budget via (nval, δval); not penalized.
• Operating-point shift Shift(tˆ): measure and report (prevalence and local class-conditional gaps at t); diagnostic, not a penalty.
• Instability ωP (|tˆ − t⋆|): regularize by avoiding steep regions of RP ; use the computable surrogate Gboot as a high-probability upper envelope.
4.4 Stability-penalized selection
Bootstrap radius and empirical modulus. From B patient-block bootstrap resamples, obtain re
fit thresholds {tˆ∗b}bB=1, the bias estimate bˆboot =
1 B
∑
b(tˆ∗b − tˆ), and the (1 − δboot) quantile
q1∗−δboot = Quantile 1−δboot
(|tˆ∗b − tˆ| : b = 1, . . . , B).

Orianne Debeaupuis
Define the computable surrogate for the instability addend:
Gboot := ̂ω ↑
P
(
|bˆboot| + q1∗−δboot
)
. (4)
Selection objective (per method/aggregator). For candidate method m and aggregator A, minimize the patient-level criterion
Jm,A = min
t∈T
̂Rvma,lA(t) + Gboot(m, A). (5)
This targets the RHS of the augmented certificate (Augmented) by reducing fit and penalizing a computable instability surrogate, while reporting γval and
Shift(tˆ).
Implementation notes and defaults. Use patientblock resampling to reflect the correct noise scale; δboot tunes the conservativeness of the instability envelope;
B trades computation for precision; ̂ω ↑
P enforces monotonicity and conservativeness. Unless stated otherwise, we set a single confidence parameter δ and use δval = δboot = δ in all experiments.
Algorithm 1 Patient-level selection with instability regularization 1: Inputs: method m, aggregator A; inner-training patients; confidence δ; bootstrap reps B; threshold grid T ; modulus grid E.
2: Compute validation risk curve:
For each t ∈ T , compute ̂Rvma,lA(t) =
|Pval|−1 ∑
p∈Pval L(Yp, 1{Sp ≥ t}).
3: Bootstrap thresholds: For b = 1, . . . , B: resample patients with replacement from inner-training patients (blocks=patients), refit m, A identically, compute ̂Rval,∗b(t) over t ∈ T , and set tˆ∗b ∈ arg mint∈T ̂Rval,∗b(t).
4: Bias and quantile: bˆboot = 1
B
∑
b(tˆ∗b − tˆ) where
tˆ ∈ arg mint∈T ̂Rval(t); q1∗−δ = Quantile 1−δ
(|tˆ∗b −
tˆ|).
5: Estimate conservative modulus: For each ε ∈ E, compute empirical oscillations of F −
y,P over |u −
v| ≤ ε, combine with weights to get a noisy ω ̃P (ε); apply isotonic regression over ε; add a DKW-based
upper band to obtain ̂ω ↑
P (ε).
6: Penalty: Gboot(m, A) = ̂ω ↑
P
(|bˆboot| + q1∗−δ
).
7: Objective and selection: Jm,A = mint∈T ̂Rvma,lA(t) + Gboot(m, A); return ( ˆm, Aˆ, tˆ) = arg minm,A Jm,A, ties broken by smaller ̂Rval.
Defaults and complexity. Complexity is
O(B |T | |Pval|) per (m, A) and parallelizable over b.
4.5 Quantile-scale ensembling
Map each method’s selected threshold to its outer-train quantile and average on the quantile scale (optionally GLS-weighted) before inverting back to a threshold. This yields monotone invariance: strictly increasing transforms of scores preserve ranks and therefore quantiles.
Flip-rate diagnostic. Let
̂FR = 1
|Ptest|
∑
p∈Ptest
1 B
B ∑
b=1
1{gtˆ∗b (p) ̸= gtˆ(p)},
which estimates the probability that a patient’s decision would flip under resampled training cohorts.
4.6 Illustrative figures.
Figure 1: Penalizing instability shifts threshold to a stable basin. (a) Internal risk. Approximate “true” internal risk (blue; large-sample proxy) and empirical validation risk (light blue) over thresholds. ERM selects tERM in a sharp basin; the robust method selects tJ further right. (b) Instability map Gboot(t) (illustrative display). Computed from patient-level bootstrap risk curves by taking the pointwise standard deviation of the empirical risk across bootstrap replicates and multiplying by -
a curvature proxy κ(t), defined as the normalized second finite difference of the bootstrap mean risk curve; the resulting signal is smoothed with a moving average and scaled to [0, 1] for display (see Appendix). This Gboot term is exactly the instability component used in (c). (c) Penalized objective
J (t) = Rˆval(t) + λ Gboot(t); the instability lifts the sharp basin, shifting the minimizer to tJ . Red curve correspond to P-derived upper bound. (d) Excess external risk ∆(t) = RQ(t) − RP (t) concentrates near sharp regions. (e) External risk RQ(t): the penalized threshold lowers external risk relative to ERM. (f ) External risk comparison at selected thresholds. Bar plot of RQ at tERM and tJ summarizes the improvement.

Hierarchical thresholding with stability
Figure 2: Framework validation under distribution shift (illustrative case). (a) Marginal score distributions for two markers in P (blue) and Q (purple) illustrate site shift. (b) Internal vs. external risk: (left) empirical RP (t) with an upper bound; (right) a P -frozen bound contrasted with RQ(t). (c) External risk decomposition at the selected threshold: internal
empirical risk ̂RP , estimated prevalence/shape shifts, and the stability penalty Gboot track external risk; error bars are bootstrap s.e.; see Appendix for construction details. (d) ERM vs. penalized threshold across replicates: most points lie below y=x, indicating lower external risk with the penalty on Q after freezing on P.
5 Experiments
Datasets and hierarchies.
CAMELYON16/17 (pathology), (Bandi et al. (2018)) Binary metastasis at slide/patient level. Hierarchy: patient→tiles→WSI. WSIs tiled at 10× into 256–512 px tissue patches; tile scores fθ(x) ∈ [0, 1] aggregated to slide with g (max or top-k), then to patient with h (max). Single threshold τ ⋆ chosen on P and frozen for Q. Split: by patient, into P and Q.
MIMIC-IV-ECG Demo (ECG signals; (Johnson et al., 2023)). 659 12-lead ECGs from 92 patients; 10-second, 500 Hz (PhysioNet). Hierarchy mirrors
CAMELYON: patient →ECG→beat/window. Segment classifier fθ produces pi,j, ECG score si = g({pi,j}), patient score Sp = h({si}). One τ ⋆ picked on P , reused on Q. Split: by patient & recording, into P and Q.
Experiment reporting. All details, encompassing settings, complementary experiments and associated results are presented in the Appendix.
Design (selection-honest). Baselines: ERM, Youden J, ROC cuts (Sens ≥ 0.95, Spec ≥ 0.90), and our method. Aggregators A ∈ {mean, quantile-q, max}. We tune tˆ on P only, then report on Q: external risk
RQ(tˆ), validation risk ̂Rval(tˆ), shift ∆= RQ− ̂Rval, bootstrap penalty Gboot, and flip-rate FR (val→ext). Defaults: B=200, δ=0.10, 200-pt threshold grid.
Table 2: CAMELYON16→17, patient-level. A =top-k (k=10). Mean±SE over B=200. Shift = RQ − Rval. FR is the decision flip-rate. ± indicates bootstrap SE (B=200).
Method RQ ↓ Validation Shift Gboot FR
ERM (max) 0.122 ± 0.015 0.096 ± 0.010 +0.026 0.061 0.084 Youden J (top-k) 0.113 ± 0.014 0.091 ± 0.011 +0.022 0.053 0.079 ROC@Sens≥ 0.95 0.141 ± 0.017 0.099 ± 0.010 +0.042 0.070 0.107 ROC@Spec≥ 0.90 0.118 ± 0.014 0.093 ± 0.010 +0.025 0.056 0.082 Our method 0.096 ± 0.012 0.092 ± 0.010 +0.004 0.034 0.061
Abl.: no penalty 0.125 ± 0.015 0.095 ± 0.010 +0.030 0.062 0.089 Abl.: no bias (ˆbboot) 0.109 ± 0.014 0.092 ± 0.010 +0.017 0.051 0.078
Table 3: CAMELYON cost sensitivity with our method. External RQ under L(c10, c01) where c10=FN cost and c01=FP cost. ± is bootstrap SE (B=200).
Loss (1, 1) (1, 3) (3, 1)
Our method 0.096±0.012 0.083±0.011 0.114±0.013
Table 4: MIMIC-IV-ECG P → Q, patient-level. A=quantile q=0.9 over windows. Mean±SE over B=200. Shift = RQ − Rval. FR is the decision flip-rate. ± indicates bootstrap SE (B=200).
Method RQ ↓ Validation Shift Gboot FR
ERM (mean) 0.182 ± 0.018 0.142 ± 0.013 +0.040 0.081 0.118 Youden J (quantile) 0.171 ± 0.017 0.138 ± 0.013 +0.033 0.074 0.112 ROC@Sens≥ 0.95 0.196 ± 0.019 0.151 ± 0.014 +0.045 0.090 0.137 ROC@Spec≥ 0.90 0.177 ± 0.017 0.141 ± 0.013 +0.036 0.076 0.116 Our method 0.152 ± 0.015 0.144 ± 0.013 +0.008 0.049 0.091
Abl.: no penalty 0.187 ± 0.018 0.143 ± 0.013 +0.044 0.084 0.126 Abl.: no bias (ˆbboot) 0.169 ± 0.016 0.140 ± 0.013 +0.029 0.070 0.109
Table 5: MIMIC-IV-ECG cost sensitivity with our method. External RQ under L(c10, c01) where c10=FN cost and c01=FP cost. ± is bootstrap SE (B=200).
Loss (1, 1) (1, 3) (3, 1)
Our method 0.152±0.015 0.134±0.014 0.176±0.017

Orianne Debeaupuis
Results. Across both domains, the penalty picks flatter operating regions (smaller Gboot), lowers external risk vs. ERM, and reduces decision flips. CAMELYON: Our method cuts RQ from 0.122 to 0.096 (FR ↓ to 0.061). MIMIC-IV-ECG: Our method cuts RQ from 0.182 to 0.152 and halves the shift. Ablation stud
ies without penalty and bˆboot show worse risks than baselines.
Table 6: Design levers, bound terms, and mechanisms.
Component Bound term Ctl? Mechanism
Validation fit ̂Rval(tˆ) Yes Penalized selection (Alg.) Generalization γval(δval) Part. More patients; choose δval Prevalence shift (c10+c01) ∆π No Diagnostic; cohort design Shape shift c10πP D−
1 + c01(1−πP ) D−
0 No Diagnostic; recalibration Stability ωP
(|tˆ−t⋆|) Ind. Penalize via
Gboot
Stability penalty Gboot Yes Tune B, δboot; isotonic modulus band Scale invariance — Yes Quantile mapping; ensemble (GLS optional) Flip-rate — Mon. Increase penalty; smooth aggregator
Practical guidelines. Use instability penalization when (i) validation risk curves show sharp basins, (ii) site shift is suspected or observed, and (iii) decisions hinge on a fixed cost vector. One shall prefer simpler
thresholds when risk is flat, Shift(tˆ) and ̂FR are small, and bounds already tighten without penalization.
6 Discussion
We introduced a model-agnostic framework for selecting stable, patient-level biomarker thresholds. The central contribution is an external-risk certificate that decomposes performance in a new domain into four interpretable and actionable components: internal fit, patient-level generalization, a localized operating-point shift, and a selection instability term.
This decomposition is uniquely practical. It isolates only those discrepancies—prevalence and local score distribution shape—that matter at the realized decision boundary. The framework separates sampling fluctuation, captured by the standard uniform generalization term γval, from selection instability, addressed by the bootstrap-estimated penalty Gboot. This clarifies their distinct origins and mitigation levers: increasing patient count for the former and choosing a flatter region of the risk la-
ndscape for the latter.
Methodologically, the synthesis of a local shift decomposition, a patient-block bootstrap for hierarchical data, and a computable stability penalty provides a structured and transparent approach to a common clinical deployment challenge. The novelty lies not in the individual statistical tools but in their assembly into a coherent, operating-point-specific, and interpretable certificate for external risk.
Limitations and future work. Several limitations should be considered. The reliability of the stability penalty hinges on having a sufficient number of patients; adding more cells or patches per patient cannot compensate for an undersized cohort. The bootstrap procedure itself can be ill-posed if the internal risk curve RP (t) has a flat or multi-modal minimum, mak
ing the distribution of tˆ unstable, as assumption 4.8(i) is non-trivial. Furthermore, the framework assumes that any site-to-site transformations are roughly monotone; it cannot repair gross re-orderings of patient risk (e.g., from an uncorrected batch effect) which would require model retraining.
On a practical level, the method is computationally intensive, requiring B model refits. While this is a one-off analysis cost preceding deployment, it could be prohibitive for large models. Bootstraping was prefered over downsampling-based methods because of usual biology signal structure, were small amounts of samples often contains the seeked signal. The framework also depends on a well-specified cost function (c10, c01) and produces a conservative upper bound on external error; it measures the-
 impact of domain shift but does not control for it, nor is it intended for causal inference. Finally, while quantile mapping provides valuable monotone invariance, it discards absolute scale information which may be mechanistically important in some settings.
Future extensions could adapt the framework for multiclass risk stratification (e.g., low/intermediate/high) by learning a sequence of ordered thresholds with a joint instability penalty. The method could also incorporate patient-level covariates through stratified resampling or by modeling the threshold as a function of the covariate.
7 Conclusion
We unify patient-level threshold selection, stabilityaware penalization, and shift diagnostics under a single decomposition, offering both a tight base bound and a stability-augmented variant aligned with the selection penalty.

Hierarchical thresholding with stability
References
Angelopoulos, A. N. and Bates, S. (2021). A gentle introduction to conformal prediction and distributionfree uncertainty quantification. arXiv preprint arXiv:2107.07511.
Bandi, P., Geessink, O., Manson, Q., Van Dijk, M., Balkenhol, M., Hermsen, M., Bejnordi, B. E., Lee, B.-H., Paeng, K., Zhong, A., et al. (2018). From detection of individual metastases to classification of lymph node status at the patient level: the camelyon17 challenge. IEEE transactions on medical imaging, 38(2):550–560.
Ben-David, S., Blitzer, J., Crammer, K., Kulesza, A., Pereira, F., and Vaughan, J. W. (2010). A theory of learning from different domains. Machine learning, 79(1):151–175.
Bousquet, O. and Elisseeff, A. (2002). Stability and generalization. Journal of machine learning research, 2(Mar):499–526.
Breiman, L. (2001). Statistical modeling: The two cultures (with comments and a rejoinder by the author). Statistical science, 16(3):199–231.
DeLong, E. R., DeLong, D. M., and Clarke-Pearson, D. L. (1988). Comparing the areas under two or more correlated receiver operating characteristic curves: a nonparametric approach. Biometrics, pages 837–845.
DerSimonian, R. and Laird, N. (1986). Meta-analysis in clinical trials. Controlled clinical trials, 7(3):177–188.
Duchi, J. C., Glynn, P. W., and Namkoong, H. (2021). Learning models with uniform performance via distributionally robust optimization. The Annals of Statistics, 49(3):1378–1402.
Fithian, W., Sun, D., and Taylor, J. (2014). Optimal inference after model selection. arXiv preprint arXiv:1410.2597.
Johnson, A. E., Bulgarelli, L., Shen, L., Gayles, A., Shammout, A., Horng, S., Pollard, T. J., Hao, S., Moody, B., Gow, B., et al. (2023). Mimic-iv, a freely accessible electronic health record dataset. Scientific data, 10(1):1.
Lipton, Z., Wang, Y.-X., and Smola, A. (2018). Detecting and correcting for label shift with black box predictors. In International conference on machine learning, pages 3122–3130. PMLR.
Mansour, Y., Mohri, M., and Rostamizadeh, A. (2009). Domain adaptation: Learning bounds and algorithms. In Conference on Learning Theory, pages 19–30. PMLR.
Pepe, M. S. (2003). The statistical evaluation of medical tests for classification and prediction. Oxford University Press.
Shimodaira, H. (2000). Improving predictive inference under covariate shift by weighting the log-likelihood function. Journal of statistical planning and inference, 90(2):227–244.
Vapnik, V. N. (1998). Statistical learning theory. Wiley.
Youden, W. J. (1950). Index for rating diagnostic tests. Cancer, 3(1):32–35.

Hierarchical biomarker thresholding: a model-agnostic framework for stability Supplementary Materials
1 Assumptions and notation
Internal domain P , external domain Q. Prevalences πD = PrD(Y = 1). Left-limit class-conditional CDFs
F−
y,D(t) = PrD(S < t | Y = y); risk RD(t) = c10πDF −
1,D(t) + c01(1 − πD)(1 − F −
0,D(t)). Shift diagnostics at t:
∆π = |πQ − πP |, Dy−(t) = |F −
y,Q(t) − F −
y,P (t)|. Modulus ωP (ε) = sup|u−v|≤ε{c10πP |F −
1,P (u) − F −
1,P (v)| + c01(1 −
πP )|F −
0,P (u) − F −
0,P (v)|}. Oracle t⋆ ∈ arg minu RP (u). Distinct confidence levels: δval (uniform generalization)
vs δboot (stability penalty).
2 Proofs.
Proof of generalization lemma (via risk decomposition and concentration) (4.1). We assume the
validation data {(Yi, Si)}nval
i=1 are i.i.d. draws from P . For technical completeness, the supremum in t can be taken
over the midpoints between the ordered statistics of the observed scores {Si}, which avoids measurability issues.
Definitions. Let πP = Pr(Y = 1) be the true prevalence and πˆ = 1
nval
∑nval
i=1 1{Yi = 1} its empirical estimate.
For y ∈ {0, 1}, let F −
y,P (t) = Pr(S < t | Y = y) be the (left-limit) class-conditional CDF and Fˆy−(t) its empirical counterpart computed from the ny,val validation samples with Y = y. Then Pr(S ≥ t | Y = y) = 1 − F −
y,P (t).
Risks. For a threshold t ∈ R, the population and empirical risks are
RP (t) = c10 πP F −
1,P (t) + c01 (1 − πP )(1 − F −
0,P (t)), ̂Rval(t) = c10 πˆ Fˆ−
1 (t) + c01 (1 − πˆ)(1 − Fˆ−
0 (t)).
Decomposition. Adding and subtracting matched terms and applying the triangle inequality yields
|RP (t) − ̂Rval(t)| ≤ c10
∣∣πP F −
1,P (t) − πˆ Fˆ−
1 (t)∣∣ + c01
∣∣(1 − πP )(1 − F −
0,P (t)) − (1 − πˆ)(1 − Fˆ−
0 (t))∣∣
≤ c10 πP
∣∣F −
1,P (t) − Fˆ−
1 (t)∣∣ + c01 (1 − πP ) ∣∣F −
0,P (t) − Fˆ−
0 (t)∣∣ + (c10 + c01) |πP − πˆ|.
Concentration (conditional on class counts). Conditioning on the class counts ny,val, the DvoretzkyKiefer–Wolfowitz (DKW) inequality implies, for y ∈ {0, 1},
Pr
(
sup
t
∣∣F −
y,P (t) − Fˆy−(t)∣∣ >
√ 1
2ny,val
log 2
ηy
)
≤ ηy,
and Hoeffding’s inequality gives
Pr
(
|πP − πˆ| >
√1
2nval
log 2
ηπ
)
≤ ηπ.
Union bound. Set η0 = η1 = ηπ = δval/3 and apply a union bound. Then, with probability at least 1 − δval, simultaneously for all t,
sup
t
|RP (t) − ̂Rval(t)| ≤ c10 πP
√ 1
2n1,val
log 6
δval
+ c01 (1 − πP )
√ 1
2n0,val
log 6
δval
+ (c10 + c01)
√1
2nval
log 6
δval
.

Hierarchical biomarker thresholding: a model-agnostic framework for stability
Rate. This establishes an O(√log(1/δval)/nval
) rate. If the true class prevalences πP and 1 − πP are bounded away from zero, a Chernoff bound for ny,val ∼ Bin(nval, πP ) converts the class-wise denominators into terms depending only on nval and πP (up to constants).
Proof of Theorem 4.7 Goal. We have to show:
• (Base) For any selection-honest tˆ:
RQ(tˆ) ≤ ̂Rval(tˆ) + γval + (c10 + c01)∆π + c10πP D−
1 (tˆ) + c01(1 − πP )D−
0 (tˆ).
• (Augmented) If additionally tˆ ∈ arg minu ̂Rval(u):
RQ(tˆ) ≤ ̂Rval(tˆ) + γval + (c10 + c01)∆π + c10πP D−
1 (tˆ) + c01(1 − πP )D−
0 (tˆ) + ωP (|tˆ− t⋆|).
All constants and diagnostics were defined above. We proceed line-by-line in three steps.
Step 1 (Algebraic shift decomposition). Recall the form
RD(t) = c10 πD F −
1,D(t) + c01 (1 − πD) (1 − F −
0,D (t)).
Fix the realized tˆ. Write the difference explicitly:
RQ(tˆ) − RP (tˆ) = c10
(πQF −
1,Q(tˆ) − πP F −
1,P (tˆ)) + c01
((1 − πQ)(1 − F −
0,Q(tˆ)) − (1 − πP )(1 − F −
0,P (tˆ))). (1)
Insert and subtract the mixed terms c10πP F −
1,Q(tˆ) and c01(1 − πP )(1 − F −
0,Q(tˆ)) to separate prevalence and shape components:
(??) = c10(πQ − πP )F −
1,Q(tˆ) + c10πP
(F −
1,Q(tˆ) − F −
1,P (tˆ)) (2)
+ c01
((1 − πQ) − (1 − πP ))(1 − F −
0,Q(tˆ)) + c01(1 − πP )
[
(1 − F −
0,Q(tˆ)) − (1 − F −
0,P (tˆ))
]
(3)
= (πQ − πP )
[
c10F −
1,Q(tˆ) − c01(1 − F −
0,Q(tˆ))
]
(4)
+ c10πP
(F −
1,Q(tˆ) − F −
1,P (tˆ)) + c01(1 − πP )(F −
0,P (tˆ) − F −
0,Q(tˆ)). (5)
Bounding the prevalence term. Since 0 ≤ F −
1,Q(tˆ) ≤ 1 and 0 ≤ 1 − F −
0,Q(tˆ) ≤ 1 we have
(πQ − πP )[c10F −
1,Q(tˆ) − c01(1 − F −
0,Q(tˆ))] ≤ |πQ − πP |(c10F −
1,Q(tˆ) + c01(1 − F −
0,Q(tˆ))) ≤ (c10 + c01)∆π,
where ∆π = |πQ − πP |. (If πQ < πP the same bound holds because we take absolute value.)
Bounding the shape terms. Introduce the diagnostics
D−
1 (t) = |F −
1,Q(t) − F −
1,P (t)|, D−
0 (t) = |F −
0,Q(t) − F −
0,P (t)|.
From (??), using |a| = − min(a, −a) ≥ a we obtain
RQ(tˆ) − RP (tˆ) ≤ (c10 + c01)∆π + c10πP |F −
1,Q(tˆ) − F −
1,P (tˆ)| + c01(1 − πP )|F −
0,Q(tˆ) − F −
0,P (tˆ)|
= (c10 + c01)∆π + c10πP D−
1 (tˆ) + c01(1 − πP )D−
0 (tˆ).
Rearranging gives the first key inequality
RQ(tˆ) ≤ RP (tˆ) + (c10 + c01)∆π + c10πP D−
1 (tˆ) + c01(1 − πP )D−
0 (tˆ). (S1)
Step 2 (Generalization insertion). Define the high-probability event
E=
{
sup
t∈R
|RP (t) − ̂Rval(t)| ≤ γval
}
, Pr(E) ≥ 1 − δval (Lemma ??).
On E, for the realized tˆ we have
RP (tˆ) ≤ ̂Rval(tˆ) + γval. (6)
Substitute (??) into (??) to obtain (on E)
RQ(tˆ) ≤ ̂Rval(tˆ) + γval + (c10 + c01)∆π + c10πP D−
1 (tˆ) + c01(1 − πP )D−
0 (tˆ). (Base)
Thus the Base bound holds with probability at least 1 − δval.

Step 3 (Stability augmentation). Assume now tˆ is an empirical minimizer of ̂Rval. The modulus definition gives RQ(tˆ) ≤ RP (t⋆) + ωP (|tˆ− t⋆|). (7)
On E, RP (t⋆) ≤ ̂Rval(t⋆) + γval; empirical optimality implies ̂Rval(tˆ) ≤ ̂Rval(t⋆). Combining:
RQ(tˆ) ≤ ̂Rval(tˆ) + γval + ωP (|tˆ− t⋆|).
Insert this into (??) (replacing RP (tˆ)) to append ωP (|tˆ − t⋆|) and obtain the Augmented bound on E. The probability statement is unchanged.
2.1 Proof of bootstrap stability control (Proposition 4.9)
We work under the paper’s main notation. In particular, for y ∈ {0, 1} let F −
y,P (t) = Pr(S < t | Y = y) and recall the internal risk modulus in oscillation form:
ωP (ε) = sup
t∈R
{
c10 πP oscε(F −
1,P ; t) + c01 (1 − πP ) oscε(F −
0,P ; t)
}
, oscε(F ; t) := sup
u∈[t−ε,t+ε]
F (u) − inf
v∈[t−ε,t+ε] F (v).
(8) Let ̂ω↑
P denote a conservative DKW-based upper band for ωP constructed from the validation sample (Remark 4.4),
i.e., on a grid E ⊂ [0, εmax] we have with high probability ωP (ε) ≤ ̂ω↑
P (ε) for all ε ∈ E.
2.1.1 Proof
Let tˆ be selection-honest (the validation set used to evaluate ̂Rval is not reused for training/selection).
Asymptotic conventions. Throughout, limits are taken as nval → ∞ (and, when relevant, B = B(nval) → ∞).
• Deterministic o(1). A deterministic sequence an is o(1) if an → 0 as nval → ∞. We use o(1) to denote generic deterministic remainders that vanish in this limit.
• Stochastic op(1). A sequence of random variables Xn is op(1) if Xn
−p→ 0, i.e., for every ε > 0, Pr(|Xn| > ε) → 0.
• Stochastic Op(1) (bounded in probability). A sequence Xn is Op(1) if for every ε > 0 there exists M < ∞ such that supn Pr(|Xn| > M ) ≤ ε.
• Bootstrap notation. When needed, Pr∗(·) and E∗[·] denote probability and expectation under the conditional (patient-block) bootstrap, given the observed data.
• Remainder symbols in Proposition ??. The terms ξn(B, δboot) and ηn are nonnegative sequences with ξn(B, δboot) → 0 (as nval → ∞ and B → ∞) and ηn → 0 (from the DKW band event). Unless stated otherwise, all o(1) terms can be taken deterministic after intersecting the relevant high-probability events.
Assume:
(B1) Local well-posedness. RP (t) has a unique minimizer t⋆ in a neighborhood N and is directionally differentiable there. The modulus ωP in (??) is nondecreasing and locally Lipschitz on [0, εmax].
(B2) Patient-block bootstrap consistency. Conditionally on the data, the law of tˆ∗ − tˆ under the patientblock bootstrap is weakly consistent for the sampling law of tˆ − t⋆ centered at its mean. Moreover, the bootstrap bias estimate
bˆboot := 1
B
B ∑
b=1
(tˆ∗(b) − tˆ) satisfies bˆboot
−p→ b := E(tˆ− t⋆).

Hierarchical biomarker thresholding: a model-agnostic framework for stability
(B3) Conservative DKW modulus band. There exists a grid E ⊂ [0, εmax] and a sequence ηn ↓ 0 such that, with probability at least 1 − ηn,
sup
ε∈E
{
ωP (ε) − ̂ω↑
P (ε)
}
≤ 0.
(Equivalently, ̂ω↑
P is a uniform high-probability upper band for ωP on E.)
Let q1∗−δboot be the empirical (1 − δboot) upper quantile of the centered bootstrap absolute deviations ∣∣(tˆ∗(b) − tˆ) − bˆboot
∣∣, and define the data-driven instability envelope
Gboot := ̂ω↑
P
(
|bˆboot| + q∗
1−δboot
) .
Then there exist remainder terms ξn(B, δboot), ηn → 0 such that
Pr
{
ωP
(|tˆ− t⋆|) ≤ Gboot + o(1)
}
≥ 1 − δboot − ξn(B, δboot) − ηn,
where o(1) → 0 as nval → ∞ (allowing B = B(nval) → ∞).
Let b = E(tˆ− t⋆) and decompose
|tˆ− t⋆| ≤ ∣∣(tˆ− t⋆) − b∣∣ + |b|.
Step 1 (Bootstrap quantile coverage). By (B2), the conditional bootstrap law of (tˆ∗ − tˆ) − bˆboot approximates the
sampling law of (tˆ− t⋆) − b. Standard quantile consistency for weakly convergent empirical c.d.f.s with B → ∞ gives
q∗
1−δboot = q1−δboot + op(1),
where q1−δboot is the (1 − δboot) quantile of ∣∣(tˆ− t⋆) − b∣∣. Hence
Pr(∣∣(tˆ− t⋆) − b∣∣ ≤ q∗
1−δboot + o(1)) ≥ 1 − δboot − ξn(B, δboot).
Step 2 (Bias estimation). Still under (B2), bˆboot
−p→ b, hence |b| = |bˆboot| + op(1). Combining with Step 1,
|tˆ− t⋆| ≤ |bˆboot| + q∗
1−δboot + op(1) with probability ≥ 1 − δboot − ξn.
Step 3 (Oscillation modulus and conservative band). By monotonicity of ωP (Definition (??)) and local Lipschitz continuity (B1),
ωP
(|tˆ− t⋆|) ≤ ωP
(
|bˆboot| + q∗
1−δboot + o(1)
)
= ωP
(
|bˆboot| + q∗
1−δboot
)
+ o(1).
Intersect the high-probability event from (B3) (the DKW upper band) with the event from Steps 1–2. On that intersection, for all ε on the band grid E,
ωP (ε) ≤ ̂ω↑
P (ε),
hence, after discretizing ε on E (or using continuity to pass to the limit),
ωP
(
|bˆboot| + q∗
1−δboot
)
≤ ̂ω↑
P
(
|bˆboot| + q∗
1−δboot
)
= Gboot.
Collecting terms yields
ωP
(|tˆ− t⋆|) ≤ Gboot + o(1)
with probability at least 1 − δboot − ξn(B, δboot) − ηn. All o(1) remainders can be taken deterministic after intersecting the high-probability events.
Notes. The oscillation form (??) ties the instability penalty to the local shape of the class-conditional CDFs around the realized operating point.
The band ̂ω↑
P is obtained by plugging DKW uniform bands for F −
y,P into (??) and propagating through the oscillation operator (Remark 4.4); its conservativeness replaces the plug-in consistency used in the earlier formulation.

2.2 Additional remarks and details regarding the nature of hierarchical
Remark Hierarchical variance layers and choice of γval scale In many biomedical settings the observed data are hierarchical. Up to four (non-exhaustive) stochastic layers can be conceptually separated for a fixed threshold t:
1. Technical / assay noise (e.g. instrument, batch) affecting raw measurements before any scoring model; absorbed after preprocessing into the marginal score distribution.
2. Within-patient biological heterogeneity (e.g. cell- or region-level variation) producing multiple raw units per patient; a deterministic aggregation (or model) maps these to a single patient-level score Sp used for thresholding.
3. Between-patient sampling variation: i.i.d. draws (Sp, Yp) under internal domain P ; this is the level governed by the VC=1 empirical process and generates γval.
4. Cross-domain shift (from P to Q): prevalence and conditional shape discrepancies; treated deterministi
cally via (c10 + c01)∆π + c10πP D−
1 + c01(1 − πP )D−
0 , not part of γval.
Additionally, selection / optimization instability of the empirical minimizer (threshold fluctuation) is controlled separately through the stability penalty via ωP (|tˆ− t⋆|).
Law of total variance (schematic). Writing Lp(t) = L(Yp, 1{Sp ≥ t}), a nested variance decomposition (suppressing t) gives
Var( ̂Rval) = 1
nval
(
E[Var(Lp | within-patient data)]
} {{ }
within-patient layer
+ Var(E[Lp | within-patient data])
} {{ }
between-patient layer
) ,
before introducing domain shift (which changes the target mean rather than adding stochastic variance). When each patient has mp raw units with intra-patient correlation ρ, treating raw units as independent would underestimate variance by the design effect deffp ≈ 1 + (  ̄m − 1)ρ. Patient-level aggregation circumvents this: the
empirical process sees nval independent sets, preserving the √log(1/δ)/nval rate; any multi-layer dependence is absorbed into constants.
Refined effective sample size. If one insisted on operating at the raw-unit level (size N = ∑
p mp) the effective independent count satisfies by classical ICC analysis:
neff ≈ N
1 + (  ̄m − 1)ρ ⇒ γval inflated by
√ 1 + (  ̄m − 1)ρ
 ̄m .
Further sublayers (e.g. technical replicates per raw unit) multiply design effects multiplicatively or additively in first-order approximations, again only altering constants in the VC tail bound.
Why patient-level γval? External risk transfer and clinical decision units are at patient resolution; using the cluster (patient) granularity avoids pseudo-replication, keeps the VC dimension minimal, and yields a transparent decomposition: (internal generalization) + (shift) + (stability). A fully expanded hierarchical γval would obscure interpretation without changing asymptotic order.
Optional reporting. One may still report a diagnostic design-effect estimate to justify constants in γval, or present a decomposed version
γval ≈ (c10 + c01)Bπ + c10πP B1 + c01(1 − πP )B0,
with Bπ, B1, B0 the chosen prevalence and class-CDF uniform bounds (possibly adjusted by estimated design effects). We retain the compact form for readability.
3 ADDITIONAL EXPERIMENTS
3.1 Model-agnosticity
Our framework is model-agnostic by definition: it operates on the patient-level scores S = A({s(Xpi)}i∈Ip ) and only uses the empirical label prevalence and the class-conditional CDFs of S | Y (via DKW bands) together with the oscillation-based risk modulus.

Hierarchical biomarker thresholding: a model-agnostic framework for stability
No structural assumptions on the scorer s or the aggregator A are required, and the same validity certificate holds for any learning algorithm.
The figure below is just an illustrative example; the identical calibration and bounding procedure applies verbatim to all models.
Figure 1: Patient-domain (P -frozen) upper bound and contribution decomposition (Illustrative case). (a) For a representative classifier, we plot the pointwise upper bound
UP (t) = ̂Rval(t) + γval(δval) + Gboot,
(red) together with the empirical risk ̂Rval(t) (blue) and the oracle curve RP (t) (dashed black). In the P -frozen regime (no operating-point shift term), UP (t) ≥ ̂Rval(t) for all t and remains above RP (t), confirming validity.
The selected threshold is tˆ = arg mint UP (t) (vertical line). (b) At tˆ, the bound decomposes into contributions that sum to 100%: empirical term ̂Rval(tˆ) (blue), the uniform patient-level generalization term γval(δval) (orange; from DKW/Hoeffding), and the instability penalty Gboot (red; bootstrap radius passed through the oscillation
modulus). The black tick marks RP (tˆ); the number at the bar’s right is UP (tˆ). (c) Panel (a) repeated per model (logistic regression, random forest, histogram gradient boosting, AdaBoost, shallow MLP), illustrating model-agnostic application under P -frozen regime.
3.2 Notes on figures
Notes on data-generating processes and algorithmic parameters of figure 1 (illustrative case): Internal (P ) scores are drawn from a two-basin mixture with a ”sharp” subgroup (fraction 0.12) having classconditional Gaussians (μ0, μ1) = (1.9, 2.1) and SDs (0.15, 0.13), and a ”flat” subgroup (μ0, μ1) = (2.5, 4.5) with SD 1.0; P includes heteroskedastic noise (amplitude 2.0, center 0.90, width 0.28). External (Q) scores are generated independently from their own mixture: ”sharp” (μ0, μ1) = (1.95, 2.0-
5) with SDs (0.16, 0.14) and ”flat” (μ0, μ1) = (2.55, 4.35) with SD 1.05, plus Q-specific heteroskedastic noise (amplitude 1.8, center 2.00, width 0.32). Hierarchical sampling for P uses npatients = 180 and 800 cells per patient (so with ninternal = 800); Q uses nexternal = 6000. The instability penalty Gboot(t) uses patient-level bootstrap (B=200) with movingaverage smoothing (window = 5). λ is calibrated so the 0.58-quantile of the raw Gboot(t) matches 1.15× the empirical risk range. Selection i-
s directional (to the right of tERM) with movement cap 0.90 and cost ratio = 1.0.

3.3 Additional information on CAMELYON16/17 processing
Data pre-processing (CAMELYON16/17; slide & patient levels). CAMELYON16 and CAMELYON17 come from different origins, and both were processed at two granularities: (i) slide level and (ii) patient level. For each dataset separately, we created two disjoint partitions P and Q by a random 50/50 split. Splits were stratified by the task label; at the patient level, all slides from the same patient were kept within the same partition to avoid leakage. Whole-slide images were read at the same fixed magni-
fication, tissue regions were segmented to remove background, and non-overlapping tiles (256–512 px) were extracted within tissue as preprocessing (see GoogLeNet procedure). Low-quality tiles (low tissue fraction / blur / extreme brightness) were filtered. Each retained tile was scored with a PyTorch GoogLeNet (Inception v1) classifier to obtain s(x) ∈ [0, 1]. Slide scores were formed by aggregating tile scores (max); patient scores were then obtained by aggregating a patient’s slide scores (quant-
ile). All pre-/post-processing choices (magnification, tiling, QC, aggregators) were held identical in P and Q.
Post-threshold reporting (P-frozen). Thresholds were selected on P in a selection-honest manner and then frozen and evaluated on Q. After thresholding, we computed summary performance at both slide and patient levels (e.g., accuracy, risk under (c10, c01), and related metrics) within each dataset. Owing to space constraints, the main table reports only mean values (CAMELYON16 and CAMELYON17 reported separately).
3.4 Additional information on MIMIC-IV Demo processing
Data pre-processing (MIMIC-IV-ECG Demo; patient-level split). We used only the publicly available MIMIC-IV-ECG Demo subset (12-lead, 10 s, 500 Hz). To prevent leakage, we randomly split patients 50/50 into two disjoint partitions P and Q (all ECGs for a patient remain in the same partition). Each ECG was parsed lead-wise, detrended, and band-pass filtered; amplitudes were z-scored per lead (per record). We followed the procedure of https://github.com/nliulab/mimic4ed-benchmark, with taking the bes-
t performing logistic regression. The segment-level classifier produced scores pi,j ∈ [0, 1] for segment j of ECG i.
Aggregation and evaluation (P-frozen). Per-ECG scores were obtained by aggregating a record’s segment scores (e.g., quantile at q=0.9): si = g({pi,j}j). Patient-level scores were formed by aggregating across that patient’s ECGs (quantile): Sp = h({si}i∈patient p). Thresholds were tuned on P in a selection-honest manner and then frozen and evaluated on Q (P-frozen). In the main table, we report mean accuracy and mean risk (under (c10, c01)) computed at the selected threshold.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:01.029Z
- **Text Length:** 50113 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
