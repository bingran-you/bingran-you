# PDF Document: Steiner et al. - 2025 - Possibilistic Instrumental Variable Regression.pdf

**File Path:** Steiner et al. - 2025 - Possibilistic Instrumental Variable Regression.pdf

**Processed Date:** 2026-02-10T18:15:30.472Z

**File Size:** 517.61 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3215

**Title:** Possibilistic Instrumental Variable Regression

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Possibilistic Instrumental Variable Regression
Gregor Steiner1, 2, Jeremie Houssineau1, and Mark F.J. Steel2
1School of Physical & Mathematical Sciences, Nanyang Technological University 2Department of Statistics, University of Warwick
November 21, 2025
Abstract
Instrumental variable regression is a common approach for causal inference in the presence of unobserved confounding. However, identifying valid instruments is often difficult in practice. In this paper, we propose a novel method based on possibility theory that performs posterior inference on the treatment effect, conditional on a user-specified set of potential violations of the exogeneity assumption. Our method can provide informative results even when only a single, potentially invalid, instru-
ment is available, offering a natural and principled framework for sensitivity analysis. Simulation experiments and a real-data application indicate strong performance of the proposed approach.
1 Introduction
Instrumental variables (IVs) offer an approach to estimating treatment effects in the presence of unobserved confounding. An IV is an observed variable that must satisfy three key assumptions:
A1. The IV is associated with the treatment.
A2. The IV is unconfounded, meaning it is not affected by the unobserved confounders.
A3. The IV influences the outcome only through its association with the treatment, not directly.
Assumptions A2 and A3 are typically grouped together and referred to as exogeneity or validity of the instruments, while A1 is known as relevance. In practice, it is often difficult to find variables that meet all three criteria, and there can be substantial uncertainty about whether candidate instruments are truly valid. We introduce a method designed to accommodate slight violations of the exogeneity assumption. If the instruments are not assumed to be valid a priori, there is no one-to-one corr-
espondence between the (always identifiable) reduced-form parameters and the structural parameters of interest. Based on possibility theory (Zadeh, 1999; Dubois and Prade, 2015), our proposed approach can still perform inference on the structural parameters by assigning the “most-possible” reduced-form parameters. We allow the user to specify a set of potential violations and then compute a conditional posterior distribution of the treatment effect given this set. This will generally be uninformat-
ive if the set is “too large”, but can be informative if the violations are small. Unlike many existing methods, our method even supports inference with a single invalid instrument. The main use case we envision for our method is sensitivity analysis. Classical (Small, 2007; Armstrong and Kolesár, 2021; Cinelli and Hazlett, 2025) as well as Bayesian (or quasi-Bayesian) (Conley et al., 2012; Chernozhukov et al., 2025) proposals exist in the literature. Chib et al. (2018) and Chernozhukov et al. (20-
25) use semi-parametric Bayesian methods to analyse a structural model characterized by a set of moment restrictions, while allowing for the possibility that (some of) these moment conditions do not hold exactly. While Chib et al. (2018) focus only on misspecification of overidentifying restrictions, Chernozhukov et al. (2025) develop a quasi-Bayesian framework to allow for the possibility that all restrictions are invalid. All approaches that we are aware of in the literature are probabilistic an-
d widen uncertainty intervals to reflect the additional uncertainty about the instruments’ validity. Our contribution is similar, but has the advantage of doing so naturally, as the widened intervals arise directly from epistemic uncertainty about the parameters
1
arXiv:2511.16029v1 [stat.ME] 20 Nov 2025

rather than from ad-hoc adjustments. The literature on partial identification in instrumental variable models is closely related (Conley et al., 2012; Watson et al., 2024; Penn et al., 2025). Our inference is informative only when the invalidity parameter can be constrained to a small set. In that case, all causal effects in the partial identification region have equal posterior possibility. As such, our method emphasises interval estimation rather than point estimation. The proposed approach is -
also related to the literature on identification and estimation with invalid instruments. Under the plurality rule, the treatment effect can be identified without knowing in advance which instruments are valid (Kang et al., 2016). A sufficient condition is that fewer than half of the instruments are invalid. Estimation in this setting typically relies on l1-penalisation (Kang et al., 2016; Windmeijer et al., 2019) or voting/searching strategies (Guo et al., 2018; Windmeijer et al., 2021; Guo, 2023-
) to recover the valid instruments. Alternative approaches average across different instrument choices (Steiner and Steel, 2025) or assume that the direct effects on the outcome and the treatment are orthogonal (Kolesár et al., 2015). In contrast, our approach is not constrained by such restrictive assumptions and can produce informative—though sometimes very diffuse—results even if only a single invalid instrument is available.
2 Possibility theory
Here, we provide a brief introduction to possibility theory. For more details, we refer to Houssineau (2020); Houssineau and Nott (2022); Hieu et al. (2025); Martin (2025). An uncertain variable θ is a mapping from Ωu → Θ, where Ωu is a sample space of deterministic phenomena. We think of Ωu as containing a true reference element ωu∗ that is unknown, thus there is no aleatoric uncertainty connected to Ωu. We characterise the uncertain variable θ by a possibility function fθ : Θ → [0, 1] such that -
supθ∈Θ fθ(θ) = 1. This possibility function gives rise to an outer probability measure
 ̄Pθ(A) = sup
θ∈A
fθ (θ)
for a subset A ⊆ Θ. Unlike a regular probability measure, this outer measure is not additive with respect to disjoint sets. In fact, the outer measure can be seen as an upper bound on probability measures. Thus, the possibility P ̄θ(A) is the maximum subjective probability one would be willing to assign to the set A. The possibility function fθ(θ) = 1 is the most uninformative possibility function in the sense that it assigns full credibility to any (non-empty) set. Let ψ be another uncertain vari-
able on Ψ such that θ and ψ have joint outer measure
P ̄θ,ψ(A × B) = sup
θ∈A,ψ∈B
fθ,ψ(θ, ψ), B ⊆ Ψ,
where fθ,ψ is a joint possibility function. Marginalising over θ is done by setting A = Θ such that the marginal possibility function of ψ is
fψ(ψ) = sup
θ∈Θ
fθ,ψ(θ, ψ).
Conditional outer measures can be defined analogously to probability theory as
 ̄Pθ|ψ(A | B) =
 ̄Pθ,ψ(A × B)
 ̄Pψ(B) = supθ∈A,ψ∈B fθ,ψ(θ, ψ)
supψ∈B fψ(ψ)
such that fθ|ψ(θ | ψ) = fθ,ψ(θ, ψ)/fψ(ψ) for all ψ ∈ Ψ with fψ(ψ) > 0. If ψ = T (θ) is a transformation of θ, we have that
fψ(ψ) = sup{fθ(θ) : θ ∈ Θ, ψ = T (θ)},
where the appropriate convention is sup ∅ = 0. There is no need to account for the change in measure by a Jacobian term. This difference to probability theory plays an important role in our proposed methodology. In this paper, we propose to do Bayesian inference with possibilistic priors. Consider the random variable Y characterised by the statistical model {Pθ : θ ∈ Θ} with corresponding probability density p(· | θ). We
2

incorporate prior information on the parameter θ in the form of a possibility function fθ. Then, the posterior possibility function is
fθ|Y (θ | Y ) = p(Y | θ)fθ(θ)
supθ′∈Θ p(Y | θ′)fθ(θ′) .
The main differences from standard Bayesian inference are that the prior is represented by a possibility function and the denominator is based on maximisation rather than integration. These differences are small enough that much of the intuition from standard Bayesian inference carries through. The possibilistic framework allows vacuous prior information to be modeled by an uninformative possibility function, whereas in standard Bayesian inference an improper prior may yield an improper posterior.-
 It also provides clear computational benefits, since optimisation is generally no harder than integration.
3 Proposed methodology
3.1 The model
Let Yi denote the outcome of interest, Xi a treatment or endogenous variable, and Zi a p-dimensional (row) vector of instrumental variables. We observe n i.i.d. copies of {Yi, Xi, Zi}n
i=1 generated from the structural model
Yi = βXi + Ziα + εi
Xi = Ziγ2 + ηi, (1)
where the errors are assumed to be jointly Gaussian, (εi, ηi)⊺ ∼ N (0, Σ). Whenever Σ is not diagonal, this indicates unobserved confounding (or endogeneity), and “naive” inference in the outcome model delivers biased results. In this setting, the instruments Zi are relevant if γ2 ̸= 0p and exogenous if α = 0p. Rather than enforcing these assumptions a priori, we incorporate uncertainty about them into the model. In particular, our approach allows for α to be non-zero. Consider the “reduced-form” -
equation model
(Yi, Xi) ∼ N Ziγ1
Ziγ2
,Ψ ,
where γ1 = βγ2 + α and Ψ is the reduced-form covariance given by
Ψ = R(β)ΣR(β)⊺, R(β) = 1 β
0 1.
Equivalently, we have that the matrix W = Y X of stacked outcomes and treatments follows a matrix Normal distribution, W ∼ M N (ZΓ, In, Ψ), where Z is the matrix with i-th row Zi, and the coefficient matrix is Γ = γ1 γ2 .
Remark 1. For simplicity of exposition, we do not explicitly account for exogenous covariates, but these can be easily considered: For a matrix of exogenous covariates U , one can project out their effects by premultiplying W and Z by MU = In − U (U ⊺U )−1U ⊺. This corresponds to marginalising out their effect possibilistically. To see this, consider the extended reduced-form model W ∼ M N (ZΓ + U ∆, In, Ψ), where ∆ is the exogenous covariates’ coefficient matrix. Setting ∆ to ∆∗(Γ) = (U ⊺U )−1U ⊺-
(W − ZΓ) maximises the reduced-form likelihood. Thus, under vacuous prior information, plugging in ∆∗(Γ) is the appropriate marginalisation, which yields the model MU W ∼ M N (MU ZΓ, In, Ψ).
The structural parameters are identifiable if we can find a unique solution (α, β, γ2, Σ) given (γ1, γ2, Ψ), or equivalently, if there exists a bijective mapping between the reduced-form and the structural parameters. The matrix R(β) is invertible for any β ∈ R and γ2 maps to itself. Thus, the structural parameters are identifiable if and only if
γ1 = βγ2 + α ⇐⇒ Γ 1
−β = α (2)
has a unique solution (α, β) given Γ. Without any assumptions on α, this is not the case. Typically, one assumes α = 0p, or that at least the majority of its components are zero (Kang et al., 2016).
3

3.2 Possibilistic inference
We propose to perform possibilistic posterior inference in the reduced-form model and propagate the uncertainty to the structural parameters. Let f be a prior possibility function on (Γ, Ψ), then the posterior possibility fRF is given by
fRF(Γ, Ψ | W ) = p(W | Γ, Ψ)f (Γ, Ψ)
supΓ′ ∈Rp×2 ,Ψ′ ∈S2
+ p(W | Γ′, Ψ′)f (Γ′, Ψ′)
where S2+ is the cone of positive-semidefinite and symmetric 2 × 2 matrices. Under the uninformative prior f (Γ, Ψ) = 1, the supremum in the denominator is attained by the standard maximum-likelihood estimators. Then we can define a possibility function fS for the structural parameters as
fS(α, β, Σ | W ) = sup fRF(Γ, Ψ | W ) : Γ 1
−β = α, Ψ = R(β)ΣR(β)⊺ . (3)
This operation is not well-defined for a probabilistic posterior distribution, as mapping the reduced-form to the structural parameters is not one-to-one in general. Under uninformative prior possibility functions on the reduced-form parameters, this optimisation problem can be solved in closed form (see Appendix A.1). We have that fS(α, β, Σ | W ) = fRF(Γ∗(α, β, Σ), R(β)ΣR(β)⊺ | W ), where the optimal reduced-form coefficient matrix is
Γ∗(α, β, Σ) = Γˆ + 1
σ11
α − Γˆ 1
−β 1 0 ΣR(β)⊺,
with Γˆ = (Z⊺Z)−1Z⊺W denoting the least-squares estimate of the reduced-form coefficient matrix, and σ11 representing the marginal variance of the outcome in the structural model.
Remark 2. We focus on the case with vacuous prior information, i.e., f (Γ, Ψ) = 1. More informative priors can be incorporated when additional regularisation is needed, such as in scenarios involving many weak instruments. For instance, a possibilistic Matrix Gaussian prior on Γ with column covariance Ψ also leads to a closed-form solution for Γ∗(α, β, Σ). However, the induced prior on β is no longer uninformative.
Our main object of interest is the posterior possibility of β given that α lies in a violation set A. The following proposition characterises this conditional posterior possibility function.
Proposition 1. Let A ⊆ Rp be the considered violation set. Denote by (γˆ1, γˆ2) and ˆΨ the maximum-likelihood estimates of the reduced-form coefficients and covariance matrix, respectively, and define t(β) := γˆ1 − βγˆ2. Then, the posterior possibility function of β conditional on α ∈ A is
f (β | α ∈ A, W ) = fS(αˆ(β), β, Σˆ (β) | W )
supβ′∈R fS(αˆ(β′), β′, Σˆ (β′) | W )
where
Σˆ (β) = R(β)−1 Ψˆ [R(β)⊺]−1, αˆ(β) =
(
t(β), if t(β) ∈ A,
ProjZ⊺Z
A (t(β)), otherwise,
and ProjZ⊺Z
A denotes the projection onto A with respect to the metric induced by Z⊺Z.
Proof. See Appendix A.2.
The extreme case of A = Rp, where α is completely unconstrained, results in the uninformative marginal possibility function of β, that is for all β ∈ R we have that
f (β | W ) = f (β | α ∈ Rp, W ) = 1.
This is not surprising, as β is not identified without extra information on α, thus we get back the prior. More generally, the intersection of the affine subspace t(β) and the violation set A defines the partial identification region, in which all values of β are equally plausible. To obtain informative results, A must be
4

α1
α2 t(β) = γˆ1 − βγˆ2
A
α
α∗
Figure 1: A geometric illustration of our method for p = 2: The causal effect β is partially identified where the affine subspace t(β) = γˆ1 − βγˆ2 intersects the tolerated region A. At these values of β, the corresponding α is precisely t(β), and therefore, the conditional possibility is 1. For all other values of β, the optimal α is the projection onto A w.r.t. the metric induced by Z⊺Z.
sufficiently restrictive so that, for most values of β, the implied α lies outside this region. Figure 1 illustrates this in two dimensions. If A is a rectangle, computing the projection is a standard quadratic programming problem. Alternatively, we can also bound a norm of α, that is specify the constraint set as Aτ = {α : ∥α∥ ≤ τ }, where the threshold τ is the maximum invalidity budget across all instruments (similar to Penn et al., 2025). More details are provided in Appendix A.2. In either ca-
se, it is important that the choice of A corresponds to the scale of the instrument data. To simplify the interpretation, it may be useful to standardise the instruments. Our procedure can be viewed from two different perspectives. The first treats the choice of A as partial prior information based on domain knowledge, specified by the analyst before observing the data. Incorporating this prior information through post-hoc conditioning, rather than directly specifying a prior possibility function,-
 is convenient for two reasons: (1) it allows closed-form solutions for many of the expressions, and (2) specifying a prior on the reduced-form parameters that induces the desired prior on the structural parameters is challenging. The second perspective emphasises sensitivity analysis for a particular effect, where the analyst gradually widens A to assess how much instrument invalidity would be required for the effect to disappear.
3.3 Validification
The sampling properties of our posterior possibility can be improved by using the validification procedure proposed by Martin and Liu (2013). Specifically, we transform the posterior possibility defined in Proposition 1 to the validified posterior possibility function
πw(β | A) = Pβ (f (β | α ∈ A, W ) ≤ f (β | α ∈ A, W = w)) , (4)
where w denotes the observed value of W , and Pβ represents the probability measure of W as a function of β. The following proposition shows that the validified posterior possibility controls the type-I error, that is, its probability of assigning “too little” possibility to the true value of β is bounded at the nominal level, as long as the violation set A contains the true value of α.
Proposition 2. Assume the violation set A contains the true value of α. Then, the validified conditional posterior possibility πw(· | A) as defined in (4) is strongly valid in the sense that for any δ ∈ [0, 1]
sup
β∈R
Pβ (πW (β | A) ≤ δ) ≤ δ.
Proof. See Appendix A.3.
An immediate corollary is that the upper level sets are valid confidence sets.
5

Corollary 1. Assume the violation set A contains the true value of α. Then, for any δ ∈ [0, 1], the upper δ level set of πw(· | A),
Cδ(w, A) = {β ∈ R : πw(β | A) ≥ δ},
is a valid 100(1 − δ)% confidence set, i.e., supβ∈R Pβ (β ∈ Cδ(W, A)) ≥ 1 − δ.
These results guarantee that our inference controls the type-I error if A contains the true value of α. However, at the same time we want to maximise efficiency (minimise the type-II error), which is inversely proportional to the volume of A. Thus, one faces a trade-off between choosing A large enough for it to likely contain the true α, but not choosing it too large so that the inference becomes overly conservative. In practice, this choice should be based on domain knowledge. When sensitivity an-
alysis is the goal, one may be interested in finding the largest set A such that a particular effect holds (e.g., such that 0 ∈/ Cδ(w, A)). The validified posterior possibility πw(· | A) is not available in closed form, but a natural Monte Carlo approximation is
πw(β | A) ≈ 1
M
M
X
i=1
1{f (β | α ∈ A, W = Wi) ≤ f (β | α ∈ A, W = w)},
where Wi are independent samples from Pβ. This approximation offers exact results (up to Monte Carlo error), but is computationally expensive. A cheaper approximation is the Wilk’s style χ2 approximation
πw(β | A) ≈ 1 − F (−2 log f (β | α ∈ A, W = w)),
where F is the cdf of a χ2 random variable with 1 degree of freedom. The Monte Carlo approximation is preferable in small samples, while the χ2 approximation performs well in larger samples. For a comprehensive treatment, we refer to Martin (2025). The case with non-vacuous prior information is covered in Martin (2023), where the probability measure Pβ has to be replaced by a suitable outer measure.
4 Experiments
4.1 Simulation experiments
First, we consider a toy example with a single instrument and varying instrument validity. The single instrument is generated from a standard Gaussian distribution. The residual pairs are simulated from a bivariate Gaussian with unit variances and correlation ρ = 1/2. Then, we generate pairs (Yi, Xi) from (1) with γ2 = 1, β = 1, and varying invalidity parameter α ∈ {0, 0.25, 0.5}. The outcome and treatment are centred so that we do not need to include an intercept. Our performance criterion is the-
 empirical coverage of a 95% uncertainty interval for the treatment effect β. We consider both the χ2 approximation and Monte Carlo (MC) sampling from the validified posterior possibility under different tolerated sets A. We compare our empirical coverage to those of naive two-stage least squares (TSLS), plausible generalised method of moments with a Gaussian prior (PGMM-g) (Chernozhukov et al., 2025), and BudgetIV (Penn et al., 2025). The results are given in Table 1 and the full details are prov-
ided in Appendix B. Code to reproduce our findings is available at https://github.com/gregorsteiner/PossibilisticIV.
For A = {0}, coverage falls as the true α moves away from zero. Widening A to include the true α maintains coverage above the nominal level, but overly wide A makes the intervals excessively conservative. The Monte Carlo-based possibility functions tend to be slightly better than the χ2 approximation in this setting. We believe the slight undercoverage for A = {0} when α = 0 is due to Monte Carlo error. The only other method that maintains coverage above the nominal level is BudgetIV with a budget-
 of 0.5. However, it is overly conservative even when the true α = 0.5. In the second experiment, we consider p = 5 instruments generated from a multivariate standard Gaussian, s of which are invalid. The coefficient α is chosen such that the first s components are 0.1 and the remaining p − s components are zero. We set γ2 = (1/4, . . . , 1/4), which corresponds to a first-stage R2 of approximately 1/4, thus the instrument strength is moderate. The treatment effect is again set to β = 1 and the re-
siduals are generated as above. Now, we also include the confidence interval method (CIIV) (Windmeijer et al., 2021) and gIVBMA (Steiner and Steel, 2025).
6

Table 1: Empirical coverage of 95% uncertainty intervals across 1, 000 simulated datasets of size n = 100. The value closest to the nominal coverage in each column is printed in bold. The second best value is printed in grey, except when there is a tie for the best value.
Method α = 0.0 α = 0.25 α = 0.5
Possibilistic IV (A = {0}, χ2-Appr.) 0.939 0.319 0.002 Possibilistic IV (A = {0}, MC) 0.941 0.34 0.003 Possibilistic IV (A = [−0.5, 0.5], χ2-Appr.) 1.0 1.0 0.984 Possibilistic IV (A = [−0.5, 0.5], MC) 1.0 1.0 0.958 Possibilistic IV (A = [0.0, 0.5], χ2-Appr.) 0.966 1.0 0.984 Possibilistic IV (A = [0.0, 0.5], MC) 0.948 1.0 0.96 TSLS 0.947 0.276 0.001 PGMM-g 0.994 0.578 0.018 BudgetIV (α = 0) 0.999 0.808 0.082 BudgetIV (|α| ≤ 0.5) 1.0 1.0 0.999
Table 2: Empirical coverage of 95% uncertainty intervals across 500 simulated datasets ot size n = 100, where s out of p = 5 instruments are invalid with αi = 0.1. The value closest to the nominal coverage in each column is printed in bold, and the second best value is printed in grey.
Method s = 0 s = 2 s = 3 s = 5
Possibilistic IV (A = {0}, χ2-Appr.) 0.924 0.836 0.738 0.406 Possibilistic IV (A = {0}, MC) 0.954 0.842 0.782 0.674 Possibilistic IV (A = [−0.1, 0.1]p, χ2-Appr.) 0.992 0.94 0.932 0.82 Possibilistic IV (A = [−0.1, 0.1]p, MC) 0.996 0.954 0.962 0.926 Possibilistic IV (A = [0.0, 0.2]p, χ2-Appr.) 0.854 0.942 0.97 0.992 Possibilistic IV (A = [0.0, 0.2]p, MC) 0.938 0.956 0.964 0.996 TSLS 0.918 0.72 0.562 0.262 PGMM-g 0.978 0.918 0.832 0.526 gIVBMA 0.928 0.942 0.926 0.744 BudgetIV (α = 0) 0.996 0.99 0.984-
 0.992 BudgetIV (|αi| ≤ 0.2) 1.0 1.0 1.0 1.0 CIIV 0.908 0.71 0.508 0.256
Table 2 shows the results. For s = 0, all methods achieve good coverage. As more instruments become invalid, naive approaches, including possibilistic IV with A = {0}, lose coverage. Our two variants with A containing the true α maintain good coverage even when all instruments are invalid. However, when α lies on a corner of the hypercube (e.g., A = [0.0, 0.2]p with s = 0 or A = [−0.1, 0.1]p with s = 5), the intervals can be slightly overoptimistic, particularly for the χ2 approximation. BudgetIV -
is the only other method that can maintain coverage above the nominal level for s = 5. Our approach widens the confidence sets appropriately when the instruments are not assumed to be valid a priori. This ensures valid inference even if no valid instruments exist. These sets may include a non-unique mode, reflecting partial identification. However, as shown in the experiments above, choosing A too wide can make the confidence sets overly conservative and less useful in practice. BudgetIV can simil-
arly maintain good coverage, as it also relies on partial identification, yet it may not return a plausible set for certain hyperparameter specifications. In contrast, our method always yields a posterior possibility function, even if it is sometimes very uninformative.
4.2 A real data example: The effect of institutions on economic growth
We illustrate our method with an empirical application estimating the effect of institutions on economic output. The analysis uses the dataset of 64 countries originally compiled by Acemoglu et al. (2001) and
7

Figure 2: The effect of institutions on economic growth: Validified posterior possibility functions under a perfectly valid instrument (α = 0) and potential violations A = [−0.1, 0.1] and A = [−0.4, 0.4]. The solid line is based on the χ2 approximation, while the dashed line displays the Monte Carlo approximation. The dashed grey line indicates the 0.05 level, such that the 95% uncertainty interval for β includes all values where the posterior possibility function exceeds this threshold.
reexamined by Chernozhukov et al. (2025) to demonstrate their quasi-Bayesian approach that allows for small violations of instrument exogeneity. The outcome is log GDP per capita in 1995, with the main predictor being protection against expropriation, a proxy for institutional quality. A central challenge is endogeneity: institutions may raise income, but income may also improve institutions. To address this, Acemoglu et al. (2001) use the mortality of early European settlers as an instrument, arg-
uing that long-term settlement incentives shaped institutional quality. The instrument’s validity rests on the assumption that settler mortality is exogenous (conditional on covariates). Following Chernozhukov et al. (2025), a direct effect of settler mortality should not be stronger than 0.1 in absolute terms, if any, justifying A = [−0.1, 0.1] as a reasonable violation set. We consider the specification with an intercept and (normalised) distance from the equator as exogenous control variables a-
nd (log) settler mortality as the sole instrument. We project out the covariates and run our analysis on the residuals resulting from that projection. Figure 2 shows validified posterior possibility functions for the valid case and allowing some invalidity. The curve corresponding to A = [−0.1, 0.1] is wider and lacks a unique mode, reflecting the partial identification of β. Both indicate a significantly positive effect with relatively heavy right tails, consistent with Chernozhukov et al. (2025)-
. For comparison, we also include the violation set A = [−0.4, 0.4], which is wide enough for the significant effect to disappear. For A = {0}, the χ2 and MC approximations look essentially identical. For larger A, however, the latter display steeper decay away from the partial identification region. Table 3 shows that our uncertainty intervals are narrower than those of Chernozhukov et al. (2025), especially on the right tail. Relaxing the exogeneity assumption and allowing for α ∈ [−0.1, 0.1] do-
es not qualitatively change the conclusion that good institutions promote economic output. To further interpret the obtained posterior possibility, we can view it as an upper bound on a precise (subjective) probability measure. This allows to deduce a corresponding lower bound, and therefore provides a probability interval for the event of interest. Table 4 displays such intervals for the hypothesis β > 0, given by the pair 1 − supβ≤0 πw(β | A), supβ>0 πw(β | A) , under different choices of the vi-
olation set A. It takes α being close to 0.4 in absolute terms to materially change the inference, that is, the lower probability drops below the nominal level. Thus, the qualitative effect of institutions on economic output is very robust to reasonable violations of the exogeneity assumptions.
8

Table 3: The effect of institutions on economic growth: 95% uncertainty intervals for possibilistic IV, TSLS, and PGMM (taken from Chernozhukov et al., 2025). The intervals for our approach are based on the χ2 approximation. PGMM-u, PGMM-g and PGMM(d)-g refer to PGMM with, respectively, uniform prior, baseline Gaussian prior and diffuse Gaussian prior.
Method 95% Interval
Possibilistic IV (A = {0}) [0.69, 1.62] Possibilistic IV (A = [−0.1, 0.1]) [0.53, 1.96] Possibilistic IV (A = [−0.4, 0.4]) [−0.10, 3.00] TSLS [0.56, 1.38] PGMM-u [0.58, 3.65] PGMM-g [0.49, 3.79] PGMM(d)-g [0.22, 3.81]
Table 4: The effect of institutions on economic growth: Lower and upper probabilities for the hypothesis β > 0 under the constraint α ∈ A (based on the MC approximation with M = 10, 000).
A Lower Upper
{0} 1 1 [−0.1, 0.1] 1 1 [−0.2, 0.2] 1 1 [−0.3, 0.3] 1 1 [−0.4, 0.4] 0.927 1 [−0.5, 0.5] 0.603 1
5 Conclusion
In this paper, we propose a method for instrumental variable regression based on possibility theory. This allows for valid inference under some user-specified violations of the instrument exogeneity assumption, providing a very natural way to perform sensitivity analyses. The resulting inference is based on first principles and directly reflects the epistemic uncertainty about the parameters. Our proposed approach performs well in simulation experiments and delivers credible results in a real-data-
 application. Unlike some alternative approaches, our method does not infer the instrument validity. Instead, inference is performed only relative to a user-defined set of possible violations. As a result, the effectiveness of the method depends on the user’s knowledge about which instruments might be invalid and the nature of their potential violations. If the specified set of violations is too large, the resulting inference will tend to be overly conservative, or even completely uninformative.
Acknowledgements
We thank Ryan Martin for helpful comments that substantially improved this paper. This research is supported by the Ministry of Education, Singapore, under its Academic Research Fund Tier 1 (RS02/24), and by the Singapore Ministry of Digital Development and Information under the AI Visiting Professorship Programme (AIVP-2024-004).
References
Acemoglu, D., Johnson, S., and Robinson, J. A. (2001). The Colonial Origins of Comparative Development: An Empirical Investigation. American Economic Review, 91(5):1369–1401.
Armstrong, T. B. and Kolesár, M. (2021). Sensitivity analysis using approximate moment condition models. Quantitative Economics, 12(1):77–108.
9

Casella, G. and Berger, R. L. (2002). Statistical Inference. Cengage Learning, 2nd edition.
Chernozhukov, V., Hansen, C. B., Kong, L., and Wang, W. (2025). Plausible GMM: A Quasi-Bayesian Approach. arXiv:2507.00555 [econ] version: 1.
Chib, S., Shin, M., and Simoni, A. (2018). Bayesian Estimation and Comparison of Moment Condition Models. Journal of the American Statistical Association, 113(524):1656–1668.
Cinelli, C. and Hazlett, C. (2025). An omitted variable bias framework for sensitivity analysis of instrumental variables. Biometrika, 112(2):asaf004.
Conley, T. G., Hansen, C. B., and Rossi, P. E. (2012). Plausibly Exogenous. The Review of Economics and Statistics, 94(1):260–272.
Dubois, D. and Prade, H. (2015). Possibility Theory and Its Applications: Where Do We Stand? In Kacprzyk, J. and Pedrycz, W., editors, Springer Handbook of Computational Intelligence, pages 31–60. Springer, Berlin, Heidelberg.
Efron, B., Hastie, T., Johnstone, I., and Tibshirani, R. (2004). Least angle regression. The Annals of Statistics, 32(2):407–499.
Guo, Z. (2023). Causal inference with invalid instruments: post-selection problems and a solution using searching and sampling. Journal of the Royal Statistical Society Series B: Statistical Methodology, 85(3):959985.
Guo, Z., Kang, H., Tony Cai, T., and Small, D. S. (2018). Confidence Intervals for Causal Effects with Invalid Instruments by Using Two-Stage Hard Thresholding with Voting. Journal of the Royal Statistical Society Series B: Statistical Methodology, 80(4):793–815.
Hieu, N. M., Houssineau, J., Chada, N. K., and Delande, E. (2025). Decoupling epistemic and aleatoric uncertainties with possibility theory. In Proceedings of The 28th International Conference on Artificial Intelligence and Statistics, pages 2899–2907. PMLR.
Houssineau, J. (2020). Parameter estimation with a class of outer probability measures. arXiv:1801.00569 [stat].
Houssineau, J. and Nott, D. J. (2022). Robust Bayesian inference in complex models with possibility theory. arXiv:2204.06911 [stat].
Kang, H., Zhang, A., Cai, T. T., and Small, D. S. (2016). Instrumental Variables Estimation With Some Invalid Instruments and its Application to Mendelian Randomization. Journal of the American Statistical Association, 111(513):132–144.
Kolesár, M., Chetty, R., Friedman, J., Glaeser, E., and Imbens, G. W. (2015). Identification and Inference With Many Invalid Instruments. Journal of Business & Economic Statistics, 33(4):474–484.
Lubin, M., Dowson, O., Garcia, J. D., Huchette, J., Legat, B., and Vielma, J. P. (2023). JuMP 1.0: Recent improvements to a modeling language for mathematical optimization. arXiv:2206.03866 [cs].
Martin, R. (2023). Valid and efficient imprecise-probabilistic inference with partial priors, II. General framework. arXiv:2211.14567 [stat].
Martin, R. (2025). Possibilistic inferential models: a review. arXiv:2507.09007 [math].
Martin, R. and Liu, C. (2013). Inferential Models: A Framework for Prior-Free Posterior Probabilistic Inference. Journal of the American Statistical Association, 108(501):301–313.
Penn, J., Gunderson, L. M., Bravo-Hermsdorff, G., Silva, R., and Watson, D. S. (2025). BudgetIV: Optimal Partial Identification of Causal Effects with Mostly Invalid Instruments. arXiv:2411.06913 [stat].
10

Small, D. S. (2007). Sensitivity Analysis for Instrumental Variables Regression With Overidentifying Restrictions. Journal of the American Statistical Association, 102(479):1049–1058.
Steiner, G. and Steel, M. (2025). Bayesian Model Averaging in Causal Instrumental Variable Models. arXiv:2504.13520 [stat].
Watson, D., Bravo-Hermsdorff, G., Gunderson, L. M., Penn, J., Mastouri, A., and Silva, R. (2024). Bounding causal effects with leaky instruments. In The 40th Conference on Uncertainty in Artificial Intelligence.
Windmeijer, F., Farbmacher, H., Davies, N., and Davey Smith, G. (2019). On the Use of the Lasso for Instrumental Variables Estimation with Some Invalid Instruments. Journal of the American Statistical Association, 114(527):1339–1350.
Windmeijer, F., Liang, X., Hartwig, F. P., and Bowden, J. (2021). The Confidence Interval Method for Selecting Valid Instrumental Variables. Journal of the Royal Statistical Society Series B: Statistical Methodology, 83(4):752–776.
Zadeh, L. A. (1999). Fuzzy sets as a basis for a theory of possibility. Fuzzy Sets and Systems, 100:9–34.
A Derivations
A.1 The structural posterior possibility function
This section derives the closed-form solution for the structural posterior possibility. We put completely uninformative prior possibility functions on Γ and Ψ, that is f (Γ, Ψ) = 1. This reduces the problem to maximising the likelihood, or equivalently the log-likelihood log p(W | Γ, Ψ), under the constraint (2) and the additional covariance equivalence. Given a value of Σ and β, the reduced-form covariance Ψ is fixed, so we just need to optimise with respect to Γ. To perform this optimisation, co-
nsider the log-likelihood
l(Γ) = log p(W | Γ, Ψ) = cst − 1
2 tr Ψ−1 (Γ⊺(Z⊺Z)Γ − 2Γ⊺Z⊺W ) .
Then, using that Z⊺W = Z⊺ZΓˆ and completing the square, we can rewrite log p(W | Γ, Ψ) as
log p(W | Γ, Ψ) = cst − 1
2 tr Ψ−1(Γ − Γˆ)⊺(Z⊺Z)(Γ − Γˆ)
where Γˆ = γˆ1 γˆ2 = (Z⊺Z)−1Z⊺W is the (unconstrained) least squares estimate. We maximise this log-likelihood in Γ subject to the constraint
Γ1
−β − α = 0.
Solving this with Lagrange multipliers (LM) with a p-dimensional LM vector λ we have the first-order conditions
Z⊺Z Γ − ˆΓ Ψ−1 = λ 1
−β
⊺
Γ1
−β − α = 0.
Solving for Γ yields
Γ∗(α, β, Σ) = Γˆ + 1 −β Ψ 1
−β
−1
α − Γˆ 1
−β 1 −β Ψ
= Γˆ + 1
σ11
α − Γˆ 1
−β 1 0 ΣR(β)⊺
11

where σ11 = 1 −β Ψ 1
−β is the marginal variance of Y in the structural model (this follows from the
relationship between the structural and reduced-form covariance). For completeness, the reduced form log-posterior possibility function is given by
log fRF(Γ, Ψ | W ) = log p(W | Γ, Ψ) − log p(W | ˆΓ, Ψˆ ),
where ˆΨ = 1
n (W − Z ˆΓ)⊺(W − ZΓˆ) is the maximum-likelihood estimate of Ψ. Thus, the structural log-posterior possibility function is
log fS(α, β, Σ | W ) = log fRF(Γ∗(α, β, Σ), R(β)ΣR(β)⊺ | W )
= −n
2 log|R(β)ΣR(β)⊺|
−1
2 tr (R(β)ΣR(β)⊺)−1(W − ZΓ∗(α, β, Σ))⊺(W − ZΓ∗(α, β, Σ))
To simplify this expression, define MZ = In − Z(Z⊺Z)−1Z⊺ and t(β) = Γˆ 1
−β , and note that
W − ZΓ∗(α, β, Σ) = MZ W − 1
σ11
Z(α − t(β)) 1 0 R(β)−1.
Thus, we can express the structural log-posterior possibility function as
log fS(α, β, Σ | W ) = − n
2 log|R(β)ΣR(β)⊺|
−1
2 tr (R(β)ΣR(β)⊺)−1W ⊺MZ W
−1
2 (α − t(β))⊺ Z⊺Z
σ11
(α − t(β)).
(5)
A.2 Proof of Proposition 1 and computational considerations
Let P ̄W be the outer measure corresponding to the joint posterior possibility fS(α, β, Σ | W ). Then, the conditional outer measure of interest is
Q ̄ W (β ∈ B | α ∈ A) =
 ̄PW (α ∈ A, β ∈ B, Σ ∈ S2+)
 ̄PW (α ∈ A, β ∈ R, Σ ∈ S2+) .
The possibility function corresponding to Q ̄ W is
f (β | α ∈ A, W ) = sup
α∈A, Σ∈S2
+
fS(α, β, Σ | W )
supα′∈A, β′∈R, Σ′∈S2
+ fS(α′, β′, Σ′ | W ) . (6)
To solve the optimisation problem in (6), we marginalise out Σ first to simplify the problem. To marginalise out Σ, we plug in the maximum-likelihood estimator of the reduced-form covariance Ψ given by
Ψˆ = 1
n (W − Z ˆΓ)⊺(W − ZΓˆ)
We can express Σˆ (β) as a function of β in a way that
R(β)Σˆ (β)R(β)⊺ = ˆΨ; (7)
indeed, for any β, we can ensure that (7) holds by taking
ˆΣ(β) = Ψˆ 11 − 2βΨˆ 12 + β2Ψˆ 22 Ψˆ 12 − βΨˆ 22
∗ ˆΨ22
,
12

where the “∗” is expressing symmetry. This ensures that whatever the considered value of β, we can still achieve the global maximum in Ψ. Fixing Σ = Σˆ (β), we obtain from equation (5)
log fS(α, β | W ) = log fS(α, β, Σˆ (β) | W )
= cst − 1
2 (α − t(β))⊺ Z⊺Z
σˆ11(β) (α − t(β)).
The aim is to maximise fS(α, β | W ), or equivalently log fS(α, β | W ), with respect to α given the constraint α ∈ A. For a fixed β, it is sufficient to minimise (α − t(β))⊺(Z⊺Z)(α − t(β)) under the considered constraint α ∈ A. Clearly, t(β) is the minimiser whenever t(β) ∈ A. Otherwise, the minimiser is the point α∗ ∈ A that is closest to t(β) in the distance implied by Z⊺Z, i.e. the projection of t(β) onto A with respect to the metric induced by Z⊺Z. Equivalently, the solution is the point that-
 minimises the Mahalanobis distance from a distribution with mean vector t and covariance matrix σˆ11(β)(Z⊺Z)−1. When A is a rectangle, i.e. of the form A = [a1, b1]×. . .×[ap, bp], this is a standard quadratic programming problem, which we solve using the JuMP.jl package (Lubin et al., 2023). If Z⊺Z is diagonal, this simplifies to clipping component-wise. Alternatively, we can also bound a norm of α, that is specify the constraint set as Aτ = {α : ∥α∥ ≤ τ }, where the threshold τ is the maximum i-
nvalidity budget across all instruments (similar to Penn et al., 2025). This may be easier to specify in some settings. For the l2 norm, this turns the optimisation problem into a Ridge-type regression problem, and we have that the optimal α is
α = (Z⊺Z + λIp)−1Z⊺Z ˆΓ 1
−β ,
where λ is the Lagrange multiplier corresponding to a specific threshold τ . In practice, one has to find λ such that ∥α∥22 = τ . For the l1 norm, the optimisation problem could be solved by a LARS-type (Efron et al., 2004) algorithm, but we leave details for future work. It remains to renormalise the resulting posterior by finding the maximal value of β over R. This is easily done numerically.
A.3 Proof of Proposition 2
Let α0 ∈ Rp denote the true data-generating value of α. Then, the validified posterior possibility as a functional of W , πW (β | {α0}), is a probability integral transform, and its distribution is stochastically greater or equal to a Uniform distribution on [0, 1] (see for example Casella and Berger, 2002, Section 2.1). Thus, for any δ ∈ [0, 1], we have Pβ (πW (β | {α0}) ≤ δ) ≤ δ. For any violation set that contains the true value, A ⊇ {α0}, the validified posterior becomes no more informative, i-
.e., πw(β | A) ≥ πw(β | {α0}), such that
Pβ (πW (β | A) ≤ δ) ≤ Pβ (πW (β | {α0}) ≤ δ) ≤ δ.
This inequality holds for all β in R, and therefore also holds for the supremum, giving the desired result.
B Additional details on the experiments
Here, we provide additional details on the implementation of the competing methods in our simulation experiments. For the plausible GMM (PGMM) estimator, we put a baseline Gaussian prior with identity prior covariance on the moment restriction. This puts all values of α considered (transformed to the moment restriction) well within the centre of that distribution. To implement BudgetIV, we use the code available at https://github.com/jpenn2023/budgetIVr. Their method has two hyperparameters b and -
τ , which jointly specify how many components of α can exceed the threshold τ . We set b = 1 and specify the budget τ analogously to the thresholds we use for our possibilistic approach. This means that at least one instrument has to be valid in the sense that |αi| ≤ τ . In the multiple instrument case, we would rather set b = p = 5, but this never returns a plausible set. This explains why BudgetIV is very conservative in the multiple instrument case. The CIIV results are based on the implementat-
ion available at https://github.com/xlbristol/CIIV with default settings. The gIVBMA method is implemented by https://github.com/gregorsteiner/gIVBMA.jl and we choose the hyper-g/n prior specification.
13

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:30.472Z
- **Text Length:** 41117 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
