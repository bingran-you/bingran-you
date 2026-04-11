# PDF Document: Wu et al. - 2025 - Why Is the Double-Robust Estimator for Causal Inference Not Doubly Robust for Variance Estimation.pdf

**File Path:** Wu et al. - 2025 - Why Is the Double-Robust Estimator for Causal Inference Not Doubly Robust for Variance Estimation.pdf

**Processed Date:** 2026-02-10T18:16:18.732Z

**File Size:** 451.73 KB

**Total Pages:** 34

**Extracted Pages:** 34

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3406

**Title:** Why Is the Double-Robust Estimator for Causal Inference Not Doubly Robust for Variance Estimation?

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Why Is the Double-Robust Estimator for Causal Inference
Not Doubly Robust for Variance Estimation?
Wu, H.1∗, Shao, L.2∗, Gui, T.T.3, Wu, T.-C.2, Huang, Z.4, Tu, S.2,
Tu, X.M.2, Liu, J.1∗∗, and Lin, T.3
1Department of Biostatistics,
Vanderbilt University Medical Center, Nashville, TN 37232
2Division of Biostatistics and Bioinformatics
UCSD Herbert Wertheim School of Public Health and Human Longevity Science
La Jolla, CA 92093
3Department of Biostatistics, University of Florida, Gainesville, FL 32611
4Department of Statistics, University of Florida, Gainesville, FL 32611
∗These authors contributed equally to this work.
∗∗Corresponding author: Jinyuan Liu, jinyuan.liu@vumc.org
Abstract
Doubly robust estimators (DRE) are widely used in causal inference because they yield con
sistent estimators of average causal effect when at least one of the nuisance models, the
propensity for treatment (exposure) or the outcome regression, is correct. However, double
robustness does not extend to variance estimation; the influence-function (IF)-based variance
estimator is consistent only when both nuisance parameters are correct. This raises concerns
about applying DRE in practice, where model misspecification is inevitable. The recent
paper by Shook-Sa et al. 2025 (Biometrics, 2025, 81(2), ujaf054) demonstrated through
1
arXiv:2511.17907v1 [stat.ME] 22 Nov 2025

Monte Carlo simulations that the IF-based variance estimator is biased. However, the pa
per’s findings are empirical. The key question remains: why does the variance estimator fail
in double robustness, and under what conditions do alternatives succeed, such as the ones
demonstrated in Shook-Sa et al. 2025. In this paper, we develop a formal theory to clarify
the efficiency properties of DRE that underlie these empirical findings. We also introduce
alternative strategies, including a mixture-based framework underlying the sample-splitting
and cross-fitting to achieve valid inference with misspecified nuisance parameters. Our con
siderations are illustrated with simulation and real study data.
KEY WORDS: Efficient influence function; Efficient score; Joint inference; Mixture dis
tribution; Sampling-splitting and cross-fitting; Variational dependence and independence.
1 Introduction
Doubly robust estimators (DREs), or augmented inverse probability weighting (AIPW) es
timators, are widely used in causal inference (Laan and Robins, 2003; Tsiatis, 2006; Ding
and Li, 2018; Kennedy, 2024). They yield consistent estimators of the average causal ef
fect when at least one of the nuisance propensity score (PS) or outcome regression (OR,
or g-computation) model is correctly specified (Bang and Robins 2005; Kang and Schafer
2007 ; Funk et al. 2011). However, discussion of this double-robustness property has focused
almost exclusively on point estimation, with much less attention given to another critical
component for valid inference: the variance estimation. In particular, the commonly used
influence-function (IF)-based variance estimator is not doubly robust, i.e., the variance es
timator is consistent only when both nuisance models are correctly specified. This raises
concerns about inference validity in practice, since DREs are widely perceived to achieve
double robustness for both point and variance estimation (Smith et al. 2023).
Although IF-based variance estimators for DREs are widely implemented in R packages
such as AIPW (Zhong et al. 2021) and tmle (Gruber and Van Der Laan 2012), prior work
2

has noted their limitations. For example, Mun ̃oz and Van Der Laan 2012 observed that
inference based on the IF of AIPW, or targeted maximum likelihood estimation (TMLE), is
valid only if both nuisance models are correct. Additionally, related work on causal inference
for Mann-Whitney-Wilcoxon rank-sum test and missing data in longitudinal studies has used
joint inference to estimate both the target and nuisance parameters to achieve valid inference
(e.g., Chen et al. 2016; Chen et al. 2024). Yet, these approaches have not been connected to
a broader theory of consistent variance estimation for DREs in causal inference.
Recent work by Shook-Sa et al. 2025 provided the first empirical investigation of this
problem. They performed simulation studies to compare three approaches: (1) IF-based
variance estimation, (2) joint inference (noted as the sandwich estimator in Shook-Sa et al.
2025), and (3) nonparametric bootstrap. Their simulation results showed that only the latter
two yield correct coverage when one nuisance model is misspecified, consistent with prior
findings (Lunceford and Davidian 2004; Funk et al. 2011). Although these findings reveal
important limitations of IF-based variance estimators, there remains a lack of theoretical
explanation for their failure of double robustness in variance estimation, as well as clear
guidance on how the latter two approaches correct this bias.
In this paper, we address these gaps by developing a formal theory that delineates the
conditions under which variance estimators inherit the double robustness property of point
estimators. Our framework extends beyond standard doubly robust causal estimands to ac
commodate a general vector of target parameters, thereby unifying inference for multivariate
semiparametric models. The proposed theory provides formal justification for the empirical
findings of Shook-Sa et al. 2025 and clarifies the scope of the double robustness property
through the semiparametric efficiency theory (i.e., the efficient influence function). We fur
ther introduce alternative strategies that yield valid inference under misspecified nuisance
models, thereby strengthening the robustness of DREs in causal analyses.
The remainder of the paper is organized as follows. Section 2 reviews influence functions
and DREs in causal inference. Section 3 examines one popular type of IF-based variance
3

estimators that remain unbiased under misspecifed nuisance parameters. Section 4 explains
why the IF-based variance estimator fails under misspecified nuisance and justifies the robust
behavior of joint inference and bootstrap, before introducing a mixture-based alternative to
expand our toolkit in Section 5. Section 6 presents results from simulations and a real study,
and we conclude in Section 7.
2 Doubly Robust Estimator for Causal Inference
Consider a binary treatments variable xi for the ith subject (1 ≤ i ≤ n), with xi = 0 if not
treated and xi = 1 if treated. Let yx
i denote the two potential outcomes and zi a vector
covariates for the ith subject. We are interested in inferences about the average causal effect:
μ = E {E(yi | xi = 1, zi) − E(yi | xi = 0, zi)} . (1)
Consider three assumptions: i) counterfactual consistency; ii) ignorability; and iii) pos
itivity (Robins et al. 1994; Cole and Frangakis 2009; Hern ́an and Robins 2020; Naimi and
Whitcomb 2023). Let E(xi | zi) = ηi (zi, ψ) denote the mean of a parametric model for
the propensity score (PS) parameterized by ψ and E(yi | xi, zi) = Qi(xi, zi, ξ) the mean
of a parametric linear model for the outcome regression (OR) parameterized by ξ, where
yi = xiy1
i + (1 − xi)y0
i is the observed outcome.
Then the widely considered efficient influence function (EIF) for the double robust esti
mator (DRE) of μ is (Tsiatis 2006; van der Laan and Rose 2011; Hines et al. 2022):
Ui(θ) = xi
ηi (ψ) {yi − Qi(1, zi, ξ)} − 1 − xi
1 − ηi (ψ) {yi − Qi(0, zi, ξ)}+ (2)
+ {Qi(1, zi, ξ) − Qi(0, zi, ξ)} − μ,
where the joint parameter vector θ = μ, ψ⊤, ξ⊤ ⊤
is identifiable under the above three
assumptions. In what follows, we will refer to an influence function (IF) such as Ui(θ) or a
4

score as an estimating function when it is unnecessary to distinguish the two.
One advantage of the DRE μb obtained by solving these Ui-defined estimating equations,
P
i Ui(μ, ψb , ξb) = 0, with the substitution of some consistent ψb and ξb, is its double robustness,
i.e., μb is consistent if at least one of the PS and OS models is correct. However, this double
robustness only applies to the point estimator μb, as shown by simulation results in Shook-Sa
et al. 2025, the variance estimator based on σ2
μ = V ar{Ui(θ)} is biased, if one of the nuisance
parameters ψ and ξ is misspecified.
For notational brevity, let Zi = {yi, xi, zi} denote the observed data. For simplicity, and
without loss of generality, we assume that the outcome regression (OR) model is correctly
specified and fixed at its ground truth, ξ = ξ0, while the propensity score (PS) model may
be misspecified. We parameterize this potentially misspecified PS by ψ′ and focus on its
role in what follows (thus no need to estimate ξ). We redefine the full parameter vector as
θ = μ, ψ⊤ ⊤, where μ is the target estimand and ψ is the correctly specified PS parameters.
Under a misspecified PS model, the parameter vector becomes θ′ = μ, ψ′⊤ ⊤, where ψ′
denotes the working (possibly incorrect) PS parameters.
The efficient influence function (EIF) Ui(θ) in (2) is derived under the correctly specified
PS model with parameters ψ. In this setting, Ui(θ) is orthogonal to the nuisance tangent
space associated with ψ, and the asymptotic variance of μb equals the variance of Ui(θ) under
the data generating process (Tsiatis 2006). Accordingly, a consistent estimator ψb can be
substituted to solve Pn
i=1 Ui(μ, ψb ) = 0 for μb. The variance of μb is then estimated using the
plug-in formula
σb2
μ= 1
n
n
X
i=1
U2
i (θb), θb = (μb, ψb ⊤)⊤.
This so-called plug-in rule provides a consistent variance estimator only when Ui(θ) is indeed
the EIF (Kennedy 2019), which requires that ψ′ = ψ.
We argue that, when the specified PS model is incorrect (ψ′ ̸= ψ), the influence func
tion Ui(θ′) is no longer efficient: it does not remain orthogonal to the nuisance tangent
space associated with ψ′. Consequently, the IF-based variance estimator via plug-in, σb2
μ=
5

(1/n) Pn
i=1 U 2
i (θb′), is inconsistent under PS misspecification, as demonstrated in Shook-Sa
et al. 2025. To address this issue, they proposed two alternative procedures that yield con
sistent estimators of V ar (μb) even when the PS model is misspecified.
Before examining why the plug-in variance estimator fails to remain double robustness
and how the proposed corrections work, we first introduce the key concept of variational
(in)dependence. Throughout, we assume all estimators are regular and asymptotically linear
(RAL) unless otherwise specified.
3 Variational (In)dependence and Joint Inference
Many efficient estimating functions remain efficient under misspecified nuisance parameters.
A well-known example is the class of robust efficient estimating functions for restricted
moment models (Tsiatis, 2006). For such estimating functions, the plug-in rule continues to
yield consistent variance estimation, since the efficiency is preserved regardless of nuisance
specification. We provide additional illustrations of this type in the Supplemental Material
Web Appendix A.1.
However, this robustness does not extend to the causal DRE under a misspecified PS.
Specifically, the EIF for the causal DRE, Ui(θ′) = U (Zi, μ, ψ′) is efficient only when the
specified PS model coincides with the truth, i.e., ψ′ = ψ. When ψ′ ̸= ψ, U (Zi, μ, ψ′)
is no longer efficient, and its variability alone is not sufficient to determine the asymptotic
variance of the DRE estimator μb.
This inefficiency arises from the phenomenon of variational dependence between the pa
rameters of interest and nuisance parameters. In the next section, we discuss this concept in
detail and describe how to account for such dependence in a general semiparametric setting.
6

3.1 Variational Dependence and Joint Inference with Inefficient
Scores
Let θ = μ⊤, ψ⊤ ⊤, where μ is a p-dimensional vector of target parameters and ψ is a
q-dimensional vector of nuisance parameters. This setup is general and not restricted to
the causal DRE setting with a scalar μ. Define the joint (efficient) score for θ as Si (θ) =
S⊤
μ,i (θ) , S⊤
ψ,i (θ) ⊤, where Sμ,i and Sψ,i are the scores for μ and ψ, respectively. Similarly,
let the joint estimating function be W i (θ) = U ⊤
i (θ) , V ⊤
i (θ) ⊤, where U i and V i are the
influence functions for μ and ψ, respectively. We first consider the case when W i (θ) =
Si (θ) to illustrate the notion of variational dependence.
Under mild regularity conditions, the Fisher information for θ is given by I (θ) =
E{− ∂
∂θ W i (θ)}. This block matrix can be written as:
I (θ) =

 
I11 (θ) I12 (θ)
I12 (θ) I22 (θ)


=

 
V ar{U i (θ)} E{U i (θ) V ⊤
i (θ)}
E{V i (θ) U ⊤
i (θ)} V ar{V i (θ)}


,
where the off-diagonal blocks I12 = E{U i (θ) V ⊤
i (θ)} capture the variational dependence
between U i and V i. Let θb = bμ⊤, ψb ⊤ ⊤
be the estimator from solving the score equations:
n
X
i=1
W i (θ) =
n
X
i=1

 
U i (θ)
V i (θ)


 = 0. (3)
By the asymptotic linearity of θb (Hampel, 1974; Tsiatis, 2006), together with the central
limit theorem (CLT) and Slutsky’s theorem, we have:
√n θb − θ0 =
√n
n
n
X
i=1
I−1 (θ0) W i (θ0) + op (1) →d N (0, Σθ) , (4)
where →d denotes convergence in distribution and θ0 = μ⊤
0 , ψ⊤
0
⊤ is the ground truth.
7

Therefore, the asymptotic variance of θb equals the inverse of the Fisher:
Σθ = V ar{I−1 (θ0) Wi (θ0)} = I−1 (θ0) V ar{Wi (θ0)}I−1 (θ0) = I−1 (θ0) ,
which similarly decomposes into:
Σθ =

 
Σμ Σμψ
Σψμ Σψ


=

 
I 11 I12
I 21 I22

 
−1
.
It follows immediately that for the parameter of interest μ:
√n (bμ − μ0) →d N (0, Σμ) , Σμ = I11 − I12I−1
22 I ⊤
12
−1 . (5)
Thus, the variance of bμ is not I−1
11 (the inverse information from U i (θ) alone), but
rather, the larger matrix I11 − I12I−1
22 I ⊤
12
−1 (A ≤ B is defined as B − A being a positive
semi-definite matrix).
When μ and ψ are variationally independent, I12 (θ0) = E{ U i (θ0) V ⊤
i (θ0)} = 0, and
Σμ = I−1
11 (θ0) = V ar{ U i (θ0)}, and vice versa. In this case, (4) simplifies to:
√n

 

 
bμ
ψb


−

 
μ0
ψ0

 


=
√n
n
n
X
i=1

 
I −1
11 0
0 I−1
22


 W i (θ0) + op (1)
=
√n
n
n
X
i=1

 
I −1
11 U i (θ0)
I −1
22 V i (θ0)


 + op (1) →d N (0, Σθ) .
Thus, U i (θ) is efficient when μ and ψ are variationally independent. Plugging-in any √n
consistent estimator ψb , the μb obtained from the U i-based estimating equations
n
X
i=1
U i(μ, ψb ) =
n
X
i=1
U i(Zi, μ, ψb ) = 0 (6)
8

is consistent and asymptotically normal. More importantly, its asymptotic variance is the
inverse of the Fisher I11 (θ0) (for U i (θ) alone), with a consistent estimator given by:
Σbμ = I−1
11 (μb, ψb ) =
(
1
n
n
X
i=1
U i(μb, ψb )U ⊤
i (μb, ψb )
)−1
. (7)
But if μ and ψ are not variationally independent, then I12 (θ0) ̸= 0 and the variance
of target parameter is Σμ = I11 − I12I−1
22 I ⊤
12
−1, which is greater than I−1
11 (θ0). Further,
U i (θ) is inefficient, since its variability alone does not capture the uncertainty in μb. One
natural remedy is to jointly estimate μ and ψ using the full estimating equations W i (θ)
in (3), which incorporate the covariation between U i (θ) and V i (θ). This joint estimation
continues to yield the correct asymptotic variance for bμ, as shown by (4) and (5).
3.2 Inference with Efficient Score Function
In addition to joint inference, one can construct an efficient version of the score U i (θ) that
accounts for the covariation of U i (θ) and V i (θ). Define the efficient score:
U eff
i (θ) = U i (θ) − I12 (θ) I−1
22 (θ) V i (θ) . (8)
By construction, U eff
i (θ) is uncorrelated with V i (θ) and is efficient for estimating μ (see
proof in Supplementary Material Web Appendix A.2). The second term I12 (θ) I−1
22 (θ) V i (θ)
in (8) can be viewed as the projection of U i (θ) onto the nuisance tangent space spanned by
the score V i (θ) (Tsiatis 2006). It is straightforward that the variance of the efficient score
is:
I eff
11 (θ0) = V ar{U eff
i (θ0)} = V ar U i (θ0) − I12I−1
22 V i (θ0) = I11 − I12I−1
22 I ⊤
12.
Replacing U i (θ) with U eff
i (θ) in the estimating equations (6) yields an estimator bμeff that
is consistent and asymptotically normal, with variance Σeff
μ = I eff
11 = I11 − I12I−1
22 I ⊤
12
−1,
9

exactly the same as the asymptotic variance Σμ obtained from the joint inference in (5).
3.3 Joint Inference with Inefficient Influence Function
Now suppose that U i (θ), corresponding to the target parameter μ, is the influence function
(IF), a normalized version of the score, which might be inefficient, and that V i (θ) is either
an IF or a score. Although W i (θ) is a general estimating function (not necessarily a score),
we may still define a “Fisher information” by:
I (θ) = E − ∂
∂θ W i (θ) = E W i (θ) S⊤
i (θ) ̸= E W i (θ) W ⊤
i (θ) .
Namely, it is not equal to the variance of W i (θ) in general.
Let θb be the estimator from the joint inference using W i (θ) as in (3). The joint influence
function can be derived as φi (θ) = I−1 (θ) W i (θ), with
√n θb − θ0 =
√n
n
n
X
i=1
φi (θ0) + op (1) →d N (0, Σθ) .
The asymptotic variance Σθ is the variance of the IF under θ0 (Kennedy 2024):
Σθ = V ar{φi (θ0)} = I−1 (θ0) E W i (θ0) W ⊤
i (θ0) I−1 (θ0) ̸= I−1 (θ0) ,
which has the sandwich variance form. Unlike the score case, Σθ is no longer equal to the
inverse of this “Fisher information” even under the joint inference.
If μ and ψ are variationally independent (Tsiatis, 2006), then
E U i (θ) S⊤
μ,i(θ) = Ip, E U i (θ) S⊤
ψ,i (θ) = 0, E V i (θ) S⊤
μ,i (θ) = 0
where p = dim(μ) and Ip is the p × p identity matrix. In this case, the “Fisher information”
10

has a block-diagonal form:
I (θ) =

 
E U i (θ) S⊤
μ,i E U i (θ) S⊤
ψ,i (θ)
E{V i (θ) S⊤
μ,i (θ)} E V i (θ) S⊤
ψ,i (θ)


=

 
Ip 0
0 E V i (θ) S⊤
ψ,i (θ)


.
Substituting into (4), we obtain:
√n

 
 

 
bμ
ψb


−

 
μ0
ψ0

 

 
 
=
√n
n
n
X
i=1

 
Ip 0
0 E V i (θ0) S⊤
ψ,i (θ0)

 
−1 
 
U i (θ0)
V i (θ0)


 + op (1)
=
√n
n
n
X
i=1

 
U i (θ0)
E−1 V i (θ0) S⊤
ψ,i (θ0) V i (θ0)


 + op (1) .
Therefore, when ψ can be consistently estimated, μ may again be estimated from the U i
defined estimating equations (6), and its asymptotic variance can be consistently estimated
by the plug-in rule using the sample variance of U i (θ) as in (7). However, if μ and ψ are
not variationally independent, this plug-in variance estimator is no longer valid.
4 Joint Inference Under Misspecified Nuisance in Causal
Inference
4.1 Sandwich Variance and Joint Inference
We now return to the problem of doubly robust estimation (DRE) of (1) in causal inference.
When the nuisance parameter is misspecified, bias in the variance estimation of the DRE
μb arises primarily from variational dependence between μ and the misspecified ψ′. In this
case, the asymptotic variance of μb is no longer given by the variance of the scalar influence
function (IF) Ui(θ) in (2), which was derived under the data generating process where the
propensity score (PS) model is correctly specified with parameter ψ. To correct for this, we
11

can still account for the induced covariation as follows.
Let θ′ = μ, ψ′⊤ ⊤, and denote by V i (θ′) the score function for the misspecified nuisance
ψ′. Define the joint estimating function W i (θ′) = Ui (θ′) , V ⊤
i (θ′) ⊤, with the correspond
ing “Fisher information”:
I (θ′) = E{− ∂
∂θ′ W i (θ′)} = E{W i (θ′) S⊤
i (θ′)} =

 
I11 (θ′) I12 (θ′)
I21 (θ′) I22 (θ′)


 . (9)
As discussed in Section 3.1, when I12 (θ′) ̸= 0, the influence function Ui (θ′) alone is not
efficient. In this case, valid inference for μ requires joint estimation of θ′ = (μ, ψ′⊤)⊤ to
account for variational dependence between μ and ψ′.
Let θb′ = (μb, ψb ′⊤)⊤ be the estimator of θ′ from solving the joint estimating equations
Pn
i=1 W i (θ′) = 0. Analogous to Section 3.3, θb′ is asymptotically normal with influence
function φi (θ′) = I−1 (θ′) W i (θ′). Define θ′
0 = (μ0, ψ′⊤
0 )⊤, where ψ′
0 denotes the probabil
ity limit of the estimator ψb ′ under the misspecified PS model, the asymptotic variance of θb′
thus has the sandwich form:
Σθ = V ar{φi (θ′
0)} = I−1 (θ′
0) V ar{W i (θ′
0)}I−1 (θ′
0) =

 
Σμ Σμψ′
Σψ′μ Σψ′


.
Since jointly, W i (θ′) is not a score function, Σθ ̸= I−1 (θ′
0). In particular, the asymptotic
variance of μb is given by Σμ, and because Ui (θ′) is an influence function rather than a score,
we have Σμ ̸= I11 (θ′
0)−1.
By contrast, when the nuisance parameter is correctly specified so that ψ′ = ψ, the
function Ui (θ) is the efficient influence function (EIF). In this case, with a consistent esti
mator ψb , both μ and its asymptotic variance can be validly estimated using Ui (θ) alone, as
discussed in Section 3.3.
12

4.2 Bootstrap Joint Inference
As indicated by the simulations in Shook-Sa et al. 2025, bootstrap also provides valid infer
ence under misspecified PS, or ψ′. This is not unexpected, as we now show that bootstrap
essentially replicates the joint inference procedure of Section 3.1 for each bootstrapped sam
ple.
Consider a bootstrap of size M . For the mth replicate Z(m)
i (1 ≤ m ≤ M ), to estimate
θ′ = μ, ψ′⊤ ⊤, one first solves the V i-based estimating equations:
n
X
i=1
V i (ψ′) =
n
X
i=1
V Z(m)
i , ψ′ = 0
to obtain a nuisance estimator ψb ′
(m). Substituting ψb ′
(m) into the Ui-based estimating equa
tion,
n
X
i=1
Ui(μ, ψb ′
(m)) =
n
X
i=1
U (Zi, μ, ψb ′
(m)) = 0
yields μb(m)(ψb ′
(m)) for the target parameter, which is a function of the estimated nuisance pa
rameter ψb ′
(m). Consequently, each bootstrap replicate gives an estimator θb′
(m) = μb(m), ψb ′⊤
(m)
⊤
,
which essentially solves the joint estimating equations defined by W i in (3). Therefore, the
bootstrap procedure inherently accounts for the empirical covariation between Ui and V i
when estimating the sampling distribution of μb.
For the bootstrap variance estimation of θ′, the estimator is given by the sample variance
of θb′
(m):
bΣB
θ′ = 1
M
M
X
m=1
θb′
(m) − θb′ θb′
(m) − θb′ ⊤
,
where θb′ = 1/M PM
m=1 θb′
(m). Partitioning bΣB
θ′ according to μ and ψ′ yields:
bΣB
θ′ =

 
Σb B
μ
Σb B
μψ′
bΣB
ψ′μ bΣB
ψ′


.
13

The marginal component bΣB
μ consistently estimates the variance of μb, since ΣbB
θ′ is consistent
for Σθ′ by standard properties of bootstrap inference (Bickel and Freedman, 1981).
Thus, each bootstrap sample preserves the empirical covariation between Ui and V i,
which ensures that ΣbB
θ′ captures the variational dependence between μ and ψ′. Although
the bootstrap procedure appears to follow the plug-in approach when calculating the variance
estimate bΣB
μ , it in fact performs implicit joint inference, thereby correctly accounting for the
covariation between Ui and V i.
5 Sample Splitting and Cross Fitting (SSCF)
We have discussed several strategies for addressing variational dependence between the tar
get and misspecified nuisance parameters by accounting for the covariation between their
estimating functions, U i and V i. These strategies include joint inference approaches (Sec
tions 3.1, 4.1) and the bootstrap procedure that implicitly performs joint inference (Section
4.2), both empirically validated by Shook-Sa et al. 2025. We also introduced a method that
removes such dependence by constructing the efficient score for μ (Section 3.2).
We now consider another alternative approach that empirically enforces variational in
dependence for a general setting with a p-dimensional vector μ as the target parameter.
The key idea is to split the sample and construct a mixture of estimating functions that are
uncorrelated by design, thereby yielding a plug-in variance estimator that remains consistent
under nuisance misspecification.
5.1 Variational Independence via Sample Split
Let the joint estimating function be
W i (θ′) = U ⊤
i ,V ⊤
i
⊤.
14

We partition the n sample estimating functions into two halves and define (1 ≤ i ≤ n):
W ri (θ′) =

 
 
W ui (θ′) = U i (μ, ψ′)⊤ , 0⊤ ⊤
, for r = u,
W vi (θ′) = 0⊤, V i (ψ′)⊤ ⊤
, for r = v,
where each estimating function is assigned to r = u or r = v with equal probability 1/2. Let
Fu(θ′) and Fv(θ′) denote the distributions of W ui and W vi, respectively. Then W ri(θ′) can
be viewed as an i.i.d. sample from the 50:50 mixture:
Fuv (θ′) = 1
2 Fu (θ′) + 1
2 Fv (θ′) ,
whose mean and variance are:
E{W ri (θ′)} = 1
2 {E (W ui) + E (W vi)} = 0,
V ar{W ri (θ′)} = 1
2 V ar (W ui) + 1
2 V ar (W vi) = 1
2

 
V ar (U i) 0
0 V ar (V i)


 . (10)
By construction, W ri (θ′) is a mean-zero estimating function for θ′, and the off-diagonal
block terms of (10) vanish, which ensures that μ and ψ′ are variationally independent under
W ri(θ′). We then estimate θ′ by solving
n
X
i=1
W ri(θ′) = 0. (11)
Further, if U i (μ, ψ′) is an influence function and V i (ψ′) is a mean-zero estimating function
in general, it follows from Section 3.3 that the “Fisher information” can be defined as:
I (θ′) = E{− ∂
∂θ W ri (θ′)} = 1
2

 
Ip 0
0 E V i (θ) S⊤
ψ,i (θ)


 . (12)
15

Hence, θb′ is asymptotically linear (Hampel, 1974; Tsiatis, 2006):
√n θb′ − θ′
0=
√n
n
n
X
i=1
I−1 (θ′
0) W ri + op (1) →d N (0, Σθ′) , (13)
whose variance can be calculated from (10) and (12):
Σθ′ = I−1 (θ′
0) V ar (W ri) I−1 (θ′
0) = 2

 
V ar {U i (θ′
0)} 0
0 E−1 V i (θ′
0) S⊤
ψ,i (θ′
0)


.
Consequently, the target parameter readily satisfies:
√n (bμ − μ0) →p N (0, 2V ar{U i (θ′
0)}) . (14)
This estimator in (14) essentially uses only half of the U i-based and half of the V i-based
estimating functions (or close to half if n is not an integer), which is consistent but inefficient,
with an asymptotic variance that is twice that of the full-sample estimator. In practice, we
reverse their roles and re-estimate on the complementary split, motivating the cross-fitting
step.
5.2 Implementation
To implement the above procedure, we first create two i.i.d. samples from the mixture
Fuv (θ′) by randomly partitioning the original sample {W i (θ′) , 1 ≤ i ≤ n} into two comple
mentary subsets of sizes n1 and n2, respectively. Specifically, we assign half of the U i- and
V i-based estimating functions to form Sample 1, and swap their roles to form Sample 2.
For instance, {W ui, 1 ≤ i ≤ n1} and {W vj, n1 + 1 ≤ j ≤ n} belong to the Sample 1 and
16

{W ui, n1 + 1 ≤ i ≤ n} and {W vj, 1 ≤ j ≤ n1} form the Sample 2, yielding:
Sample 1 : W u1, W u2, . . . , W un1, W v(n1+1), W v(n1+2), . . . , W vn, (15)
Sample 2 : W v1, W v2, . . . , W vn1, W u(n1+1), W u(n1+2), . . . , W un.
Within each sample, the estimating functions are i.i.d.; between the two samples, they are
correlated due to shared dependence on the original data. Because W ri (1 ≤ i ≤ n) is a
50:50 mixture of W ui and W vi, it follows that limn→∞ n1
n = limn→∞ n2
n =1
2.
Figure 1 shows how two complementary mixture samples are constructed from the original
sample and how this procedure differs from joint inference and bootstrap. To estimate the
target parameter μ, we proceed as follows.
First, using Sample 1 in (15), we solve (11) for θ′. Essentially, this is the same as first
solving the V j-based estimating equations for ψ′ to obtain an estimator ψb ′
1:
n
X
j=n1+1
V j (ψ′) = 0,
and then plug in ψb ′
1 and solve the U i-based equations for μ to obtain bμ1:
n1
X
i=1
U i(μ, ψb ′
1) = 0.
The asymptotic variance of μb1 is estimated by the plug-in estimator:
Σbμ,1 = 1
n1
n1
X
i=1
U i(bμ1, ψb ′
1)U ⊤
i (μb1, ψb ′
1).
Next, applying the same steps to Sample 2 yields bμ2 and bΣμ,2. We then average the two
sets of estimators to improve efficiency.
Theorem 1 Let μbk and bΣμ,k denote the two sets of cross-fitted estimators from the two
17

samples in (15) (k = 1, 2). Define the combined point and variance estimator as:
μbsscf = 1
2 (bμ1 + bμ2) , bΣsscf
μ =1
2
Σbμ,1 + bΣμ,2
Under mild regularity conditions, denote by →p convergence in probability, we have
1. bμsscf →p μ0, the ground truth;
2. bΣsscf
μ →p Σμ for the sample-splitting and cross-fitting (SSCF) estimator bμsscf .
Thus, by estimating the nuisance ψ′ on one partition and the target μ on the complemen
tary partition, we can, again, obtain a plug-in variance estimator that remains consistent even
when the nuisance model is misspecified. This procedure corresponds to the sample-splitting
and cross-fitting (SSCF) framework discussed in the literature (Robins et al. 2008, Cher
nozhukov et al. 2018). Although consistency of bΣμ,k is expected, bΣsscf
μ = 1/2 bΣμ,1 + Σbμ,2
should not be taken for granted, as each bμk depends on a nuisance estimated from the
complementary subsample. A formal proof of Theorem 1 is provided in the Supplementary
Material Web Appendix B.
6 Applications
6.1 Simulation Study
We conducted a Monte Carlo (MC) simulation study to illustrate (1) the covariation be
tween Ui(μ, ψ, ξ), the influence function (IF) of the doubly robust estimator (DRE), and
V i (ψ′), the score function for ψ′ under a misspecified PS model; and (2) the performance
of the sample-splitting and cross-fitting (SSCF) approach in estimating the asymptotic vari
ance. Throughout, the outcome regression model was assumed to be correctly specified.
We adapted the simulation setting in Shook-Sa et al. 2025, with sample size n = 800 and
M = 5000 MC replications, but modified to our objectives.
18

6.1.1 Data Generating Process (DGP)
We generated three covariates zi = {zi1, zi2, zi3}⊤: zi1 ∼ N (5, 4) , zi2 ∼ Bernoulli(0.25), zi3 ∼
Bernoulli(0.75). The propoensity score (PS) for the binary treatment x was simulated from:
xi | zi ∼ Bernoulli(ηi), ηi = E(xi | zi),
ηi (ψ0) = η (zi; ψ0) = expit (0.5 + 0.5zi2 − 0.2zi1zi2) .
For each treatment xi = k (= 0, 1), the potential outcome yk
i follows:
yk
i | zi ∼ N (μk
i (zi) , σ2), μk
i (zi) = E(yk
i | xi = k, zi), σ = 400,
μk
i (zi) = 1000 + 11.5zi1 + 100zi2 − 15zi1zi2 + 25k − 5.5kzi1 − 30kzi2 + 5kzi1zi2.
The observed outcome was defined as: yi = xiy1
i + (1 − xi)y0
i , and the true average causal
effect (ACE) is:
μ0 = E y1
i − y0
i = E{μ1
i (zi) − μ0
i (zi)}
Under the above simulation setting, this true ACE μ0 was estimated to be 15.02 by a large
MC sample size Mtrue = 5 × 107.
As noted earlier, we assumed that the OR model was correctly specified, which was given
by a parametric linear regression with the conditional mean:
Qi (xi; zi, ξ) = ξ0 + ξ1zi1 + ξ2zi2 + ξ3zi1zi2 + ξ4xi + ξ5xizi1 + ξ6xizi2 + ξ7xizi1zi2.
Additionally, we assumed a correctly specified PS ψ as the data generating process of PS:
ηi (ψ) = η (zi, ψ) = expit (ψ0 + ψ1zi2 + ψ2zi1zi2) ,
we consider a misspecified PS ψ′ including only the intercept and sin(zi1) as η′
i (ψ′) =
η′ (zi, ψ′) = expit{ψ′
0 + ψ′
1 sin(zi1)}. We provide inference procedures for both correctly
19

specified and misspecified nuisance in the Supplementary Material Appendix C.
6.1.2 Covariation between DRE and Nuisance Estimating Functions
We used MC simulations to demonstrate that under the correctly-specified PS model ψ,
the cross-information term in (9), I12 (θ0) = E{Ui (θ0) V ⊤
i (ψ0)} = 0, whereas under a
misspecified PS model ψ′, this term I12 (θ′
0) = E{Ui(θ′
0)V ⊤
i (ψ′
0)} ̸= 0. We estimated
the correlations between Ui (θ0) and each component of V i (ψ0) using the sample Pearson
correlation between Ui(θb) and each component of V i(ψb ) under the correctly specified PS
ψ. Likewise, under the misspecified PS ψ′, we estimated their correlations using the sample
Pearson correlation between Ui(θb′) and each component of V i(ψb ′) .
Shown in Table 1 are estimated correlations between Ui and V i for the two scenarios
based on MC replication. All the correlations were close to zero under the correctly specified
PS. In contrast, with the misspecified PS ψ′, the correlations between U ′
i and V ′
i deviated
from zero by nearly 10 times larger than their counterparts under the correctly-specified
PS.
6.1.3 Comparison of Asymptotic Variance Estimators
The simulation study results in Shook-Sa et al. 2025 demonstrated bias in variance estimation
of μb based on the variance of Ui (θ′) using the plug-in rule, when PS ψ′ is misspecified and
OR ξ is correctly specified. Building on these findings, we further compared the U ′
i -based
variance estimators obtained via the plug-in rule, with and without the sample-splitting and
cross-fitting (SSCF) discussed in Section 5. To compare the accuracy, we calculated the
standard error ratio (SER), defined as the ratio of the square root of the variance estimate
from each method to that from the Monte Carlo. A value of SER closer to 1 indicates less
bias, while a value of SER larger or smaller than 1 suggests over- or under-estimation of the
asymptotic variance.
Without SSCF, the plug-in variance estimator underestimated the true variability of μb,
20

with a standard error of 28.7 compared to the Monte Carlo estimate of 29.5 (SER = 0.97),
which is consistent with downward bias observed in the simulation results by Shook-Sa et al.
2025. In contrast, SSCF corrected this bias; the plug-in and Monte Carlo estimates were
nearly identical, 29.2 vs. 29.3, respectively, yielding an SER of 1.00. These results indicate
that SSCF improves the accuracy of variance estimation.
6.2 Real Data
For illustration with a real study data, we used a labor training program (LaLonde 1986)
from the National Supported Work Demonstration, which has been previously used to assess
the causal effect of training participation on post-program earnings. Among the 614 subjects,
185 are in the treatment and 429 are in the control group. Baseline covariates include age,
education, race, marital status, an indicator for lacking a high school diploma, and pre
intervention earnings in 1974 and 1975. The treatment variable is binary (1 = treated, 0 =
control), and the outcome is the continuous, post-training real earnings in 1978.
In our analysis, we included all aforementioned covariates when estimating the OR model
to approximate the true data generating process. To evaluate inference under a misspecified
PS model, we intentionally restricted the PS model to include only age, education, race, and
marital status, omitting other important covariates. While this specification increases the
likelihood of PS misspecification, the OR model may also be misspecified because the true
data generating process is unknown. Nonetheless, all variance estimation methods examined
in this paper, except for the IF-based variance estimator, will retain double robustness.
That is, under mild regularity conditions (e.g., asymptotic linearity), they continue to yield
valid variance estimates for the DRE when one nuisance model is misspecified. Moreover,
even when both the OR and PS models are incorrect, these methods remain consistent for
variance estimation, although the DRE itself may be biased in point estimation (Shook-Sa
et al. 2025).
Shown in Table 2 is a summary of the PS specifications and correlations for assessing
21

covariation between the influence function of the DRE and the score function of the specified
PS model. These correlation values, even though not large in scale, can lead to large bias in
variance estimation if we use IF-based variance estimation without SSCF.
Shown in Table 3 are standard error estimates: the DRE IF-based plug-in standard
errors with and without SSCF, along with the jointly estimated standard errors. As noted
earlier, the jointly estimated standard error is used as the benchmark because it remains
valid regardless of nuisance parameter specification. The results show that the DRE is
correlated with the score function of the specified PS. Without SSCF, the DRE IF-based
plug-in estimator substantially underestimated the standard error (775.8). Incorporating
SSCF yielded an estimate (821.6) much closer to the jointly estimated benchmark (816.0).
7 Discussion
In this paper, we addressed an important but under-discussed question: Why is the double
robust estimator (DRE) for causal inference not doubly robust for variance estimation?
Building on the simulation results of Shook-Sa et al. 2025, we showed that bias in the IF
based variance estimator arises because the influence function (IF) of DRE is only efficient
under correctly specified nuisance parameter models. This failure reflects the variational
dependence, or covariation, between the target misspecified nuisance parameters and their
corresponding estimating functions.
Our findings clarify an important distinction from classical semiparametric theory. Ef
ficient influence functions in generalized estimating equations (GEEs) remain valid for a
broad class of nuisance specifications because they are constructed to be orthogonal to an
infinite-dimensional nuisance tangent space. By contrast, the IF of DRE is efficient only un
der correct parametric nuisance models. When either the propensity score (PS) or outcome
regression (OR) is misspecified, efficiency fails and variance estimators become inconsis
tent. These insights extend earlier discussions (Mun ̃oz and Van Der Laan 2012) while also
22

explaining the simulation results from Shook-Sa et al. 2025.
We further discussed several strategies for achieving valid inference under nuisance mis
specification. The first is by orthogonalizing the estimating function with respect to nuisance
scores to restore efficiency. The second uses sample-splitting and cross-fitting (SSCF) to con
struct variationally independent estimating functions for the target and nuisance parameters.
We further provide a mixture-distribution justification for this SSCF procedure popularized
in the machine learning literature, which, to our knowledge, offers the first explicit mixture
based rationale for its validity under nuisance misspecification. Finally, both joint inference
and the bootstrap naturally account for the induced variational dependence and thus yield
valid inference.
A comparison of the four approaches illustrates clear trade-offs. The bootstrap is simple
but computationally intensive. Joint inference requires estimating the joint asymptotic vari
ance of the estimator for both the target and nuisance parameters. Constructing the efficient
estimating function requires additional programming, but provides a transparent view of the
magnitude of covariation. The SSCF, by far, is the easiest to implement, and paves the way
for future integration with machine learning methods.
In summary, we elucidated why the DRE variance estimator fails to maintain double
robustness and how different alternatives, including the ones introduced in this paper, work
to provide consistent variance estimation. These clarifications will strengthen the theoret
ical foundation of semiparametric causal inference and offer practical directions for robust
applications where nuisance models are inevitably imperfect in this real world.
Acknowledgements
We thank the Co-Editor and anonymous reviewers for their constructive comments and
helpful suggestions that improved this manuscript. We also appreciate the support and
feedback from our colleagues. The content is solely the responsibility of the authors and
does not necessarily reflect the official views of the supporting institutions.
23

Supplementary Materials
Web appendices in Section 3, 5 and 6 are available with this paper at the Biometrics website
on Wiley Online Library.
References
Bang, H. and Robins, J. M. (2005). Doubly robust estimation in missing data and causal
inference models. Biometrics 61, 962–973.
Bickel, P. J. and Freedman, D. A. (1981). Some asymptotic theory for the bootstrap. The
annals of statistics 9, 1196–1217.
Chen, R., Lin, T., Liu, L., Liu, J., Chen, R., Zou, J., and et al. (2024). A doubly robust
estimator for the mann–whitney–wilcoxon rank sum test when applied for causal inference
in observational studies. Journal of Applied Statistics 51, 3267–3291.
Chen, T., Kowalski, J., Chen, R., Wu, P., Zhang, H., Feng, C., and et al. (2016). Rank
preserving regression: a more robust rank regression model against outliers. Statistics in
medicine 35, 3333–3346.
Chernozhukov, V., Chetverikov, D., Demirer, M., Duflo, E., Hansen, C., Newey, W., and
et al. (2018). Double/debiased machine learning for treatment and structural parameters.
The Econometrics Journal 21, C1–C68.
Cole, S. R. and Frangakis, C. E. (2009). The consistency statement in causal inference: a
definition or an assumption? Epidemiology 20, 3–5.
Ding, P. and Li, F. (2018). Causal inference. Statistical Science 33, 214–237.
Funk, M. J., Westreich, D., Wiesen, C., Stu ̈rmer, T., Brookhart, M. A., and Davidian, M.
(2011). Doubly robust estimation of causal effects. American journal of epidemiology 173,
761–767.
24

Gruber, S. and Van Der Laan, M. (2012). tmle: an r package for targeted maximum likelihood
estimation. Journal of Statistical Software 51, 1–35.
Hampel, F. R. (1974). The influence curve and its role in robust estimation. Journal of the
american statistical association 69, 383–393.
Herna ́n, M. A. and Robins, J. M. (2020). Causal Inference: What If. Chapman & Hall/CRC,
Boca Raton, FL.
Hines, O., Dukes, O., Diaz-Ordaz, K., and Vansteelandt, S. (2022). Demystifying statistical
learning based on efficient influence functions. The American Statistician 76, 292–304.
Kang, J. D. Y. and Schafer, J. L. (2007). Demystifying double robustness: A comparison of
alternative strategies for estimating a population mean from incomplete data. Statistical
Science 22, 523–539.
Kennedy, E. H. (2019). Nonparametric causal effects based on incremental propensity score
interventions. Journal of the American Statistical Association 114, 645–656.
Kennedy, E. H. (2024). Semiparametric doubly robust targeted double machine learning: a
review. Handbook of statistical methods for precision medicine pages 207–236.
Laan, M. J. and Robins, J. M. (2003). Unified methods for censored longitudinal data and
causality. Springer.
LaLonde, R. J. (1986). Evaluating the econometric evaluations of training programs with
experimental data. The American economic review pages 604–620.
Lunceford, J. K. and Davidian, M. (2004). Stratification and weighting via the propensity
score in estimation of causal treatment effects: a comparative study. Statistics in medicine
23, 2937–2960.
Mun ̃oz, I. D. and Van Der Laan, M. (2012). Population intervention causal effects based on
stochastic interventions. Biometrics 68, 541–549.
25

Naimi, A. I. and Whitcomb, B. W. (2023). Defining and identifying average treatment
effects. American Journal of Epidemiology 192, 685–687.
Robins, J., Li, L., Tchetgen, E., van der Vaart, A., et al. (2008). Higher order influence
functions and minimax estimation of nonlinear functionals. In Probability and statistics:
essays in honor of David A. Freedman, volume 2, pages 335–422. Institute of Mathematical
Statistics.
Robins, J. M., Rotnitzky, A., and Zhao, L. P. (1994). Estimation of regression coefficients
when some regressors are not always observed. Journal of the American statistical Asso
ciation 89, 846–866.
Shook-Sa, B. E., Zivich, P. N., Lee, C., Xue, K., Ross, R. K., Edwards, J. K., and et al.
(2025). Double robust variance estimation with parametric working models. Biometrics
81, ujaf054.
Smith, M. J., Phillips, R. V., Luque-Fernandez, M. A., and Maringe, C. (2023). Application
of targeted maximum likelihood estimation in public health and epidemiological studies:
a systematic review. Annals of epidemiology 86, 34–48.
Tsiatis, A. A. (2006). Semiparametric theory and missing data. Springer.
van der Laan, M. J. and Rose, S. (2011). Targeted Learning: Causal Inference for Observa
tional and Experimental Data. Springer, New York, NY.
Zhong, Y., Kennedy, E. H., Bodnar, L. M., and Naimi, A. I. (2021). Aipw: an r package for
augmented inverse probability–weighted estimation of average causal effects. American
Journal of Epidemiology 190, 2690–2699.
26

Supplementary Material
Appendix A. Efficient Estimating Function and Sandwich Variance
Estimator
1. Example of Efficient Estimating Functions under Misspecified Nuisance
As noted in Section 3, in this web appendix, we illustrate by examples that efficient estimat
ing functions for target parameters for semiparametric, or restricted moment, models remain
efficient with misspecified nuisance (distribution) parameters.
Consider a negative binomial (NB) model for a count response, yi ∼ NB (μ, α), with mean
μ and dispersion parameter α. Now suppose that one misspecifies yi to follow Poisson (μ).
The parameter of interest μ remains the same, but the nuisance parameters differ between
the two models, with NB having an additional nuisance parameter ψ = α.
The Fisher information for θ = (μ, α)⊤ derived from the NB score function Sθi(θ) =
(Sμi(θ), Sαi(θ))⊤ is:
I (θ) =

 
I11 (θ) I12 (θ)
I21 (θ) I22 (θ)


=

 
E{− ∂
∂μ Sμi(θ)} E{− ∂
∂α Sμi(θ)}
E{− ∂
∂α Sμi(θ)} E{− ∂
∂α Sαi(θ)}


.
It is deduced that the off-diagonal term I12(θ), or E{− ∂
∂α Sμi(θ)}, is 0, showing no covariation
between Sμi and Sαi. Consequently, the score of interest Sμi is orthogonal to Sαi, and hence,
efficient, with variance I11 (θ) = 1
μ(1+αμ) .
Let μbNB denote the estimator obtained by solving the Sμi-based score equation:
n
X
i=1
Sμi (θ) =
n
X
i=1
1
μ (1 + αμ) (yi − μ) = 0 (16)
Then the MLE μbNB is consistent and asymptotically normal, and its asymptotic variance
27

σ2
NB is the inverse of Fisher information I11 (θ), i.e.,
σ2
NB = I −1
11 (θ0) = μ0 (1 + α0μ0) . (17)
It is also readily shown that the EIF for μbNB is φ (yi, μ0) = (yi − μ0) and thus σ2
NB =
V ar{φ (yi, μ0)}.
Let y′
i ∼ Poisson (μ). Unlike yi, y′
i has Poisson (μ) as its DGP. The Fisher information
is I′ (μ) = E{− ∂
∂μ S′
μi(μ)} = E y′
i
μ2 = 1
μ , where the Poisson score S′
μi(μ) = ∂
∂μ l′
i(μ) =
1
μ (y′
i − μ). Let μbP oi denote the estimator from solving the score equation, Pn
i=1 S′
μi(μ) = 0.
Then the Poisson MLE μbP oi has asymptotic variance σ2
P oi = {I′ (μ0)}−1 = μ0.
Since yi is generated from NB, the Poisson score S′
μi(yi, μ0) is misspecified. However, the
S′
μi-based score equation:
n
X
i=1
S′
μi (θ) =
n
X
i=1
1
μ (yi − μ) = 0 (18)
still yields a consistent and asymptotically normal estimator μb′ for μ0, but the asymptotic
variance, σ2
sw, is no longer equal to the inverse of Fisher information under Poisson, σ2
sw ̸= μ0.
To see this, let B′ (μ0) = E{− ∂
∂μ S′
μi(yi, μ0)}. Since yi does not follow Poisson, B′ (μ0) ̸=
I′ (μ0). From the asymptotic linearity of μb′ (Hampel 1974, Tsiatis 2006), we have:
√n (μb′ − μ0) =
√n
n
n
X
i=1
φ′ (yi, μ0) + op (1) ,
where op (1) denotes the stochastic o (1) and φ′ (yi, μ0) = {B′ (μ0)}−1S′
μi(yi, μ0) denoting the
influence function (IF) for μb′. The asymptotic variance of μb′ equals the variance of the IF:
σ2
sw = V ar{φ′ (yi, μ0)} = {B′ (μ0)}−1V ar{S′
μi(yi, μ0)}{B′ (μ0)}−1. (19)
which is the sandwich variance. Since φ′ (yi, μ0) = yi − μ0, (19) yields σ2
sw = V ar (yi − μ0) =
μ0 (1 + α0μ0), the same as the MLE μbNB for μ under NB in (17).
Thus even under the mis-specified Poisson, the Poisson score S′
μi(yi, μ0), or influence
28

function φ′ (yi, μ0), remains efficient. Thus, the asymptotic variance of μb′ is still the variance
of the IF φ′ (yi, μ0). However, the asymptotic variance is given by the sandwich variance
σ2
sw, not the inverse of the Fisher information under Poisson, I′ (μ0) = μ0.
In the above Example, the NB-based IF and Poisson-based IF for estimating μ0 happen
to coincide, φ (yi, μ0) = φ′ (yi, μ0) = yi − μ0. Thus the Poisson-based IF φ′ (yi, μ0) remains
efficient when mis-specified to estimate μ under NB, i.e., φ′ (yi, μ0) remains orthogonal to
the nuisance tangent space (regarding α). In fact, yi − μ0 remains efficient for any other
parametric or even non-parametric data generating process yi (Tsiatis 2006).
For general semiparametric, or restricted moment, models, estimating functions are gen
erally different when nuisance parameters are misspecified. However, they remain efficient for
estimating their intended target parameters, so the plug-in rule can be applied to estimate
asymptotic variance of the point estimators defined by the estimating functions.
2. Proof of Variational Independence for Efficient Score
We defined an efficient score U eff
i (θ) in Section 3.2. Below we show that by constructing
such efficient score, we can address the covariation between U i (θ) and V ⊤
i (θ), i.e., U eff
i (θ0)
and V ⊤
i (θ0) are uncorrelated.
E
n
U eff
i (θ0) V ⊤
i (θ0)
o
= E {U i (θ0) − I12I−1
22 Vi (θ0)}V ⊤
i (θ0)
= E U i (θ0) V ⊤
i (θ0) − I12I−1
22 E V i (θ0) V ⊤
i (θ0)
= I12 (θ0) − I12 (θ0) I−1
22 (θ0) I22 (θ0)
=0
Appendix B. Proof of Theorem 1
For each cross-fitted sample, by (14) in the main text and limn→∞ n1
n =1
2 , we have:
√n1 (μb1 − μ0) →p N (0, Σμ) , Σμ = V ar{U i (θ′
0)} (20)
29

In Theorem 1, we considered the average between two cross-fitted samples as our final
point and variance estimator. We provide a proof of Theorem 1 on the asymptotic properties
of such estimators below.
Since E(W ui (θ′)) = 0 and E(W vi (θ′)) = 0, we have bμ1 → μ and bμ2 → μ. Thus,
bμsscf → μ.
By (13) in main text, the IF for θck
′ = (bμk, ψb ′⊤
k )⊤ has the form φ′
ki (θ′
0) = I (θ′
0) W ri
(k = 1, 2). Since the two samples of the mixture distribution are complementary to each
other, the asymptotic covariance Σθ,12 between θb1
′ and θb2
′ is the sum of the following terms:
E{I−2 (θ′
0) W riW sj} =

 
 
I−2 (θ′
0) E W riW ⊤
rj for i ̸= j
I−2 (θ′
0) E W riW ⊤
si for i = j, r ̸= s
1 ≤ i, j ≤ n, r = u, v, s = u, v
Since each sample is an i.i.d. sequence of W ri, E W riW ⊤
rj = 0 for i ̸= j. For i = j, r ̸= s,
we have:
E W riW ⊤
si =

        
        
E

 
 

 
Ui
0

 

 
0
Vi

 
⊤

 
 
if r = u, s = v
E

 
 

 
0
Vi

 

 
Ui
0

 
⊤

 
 
if r = v, s = u
=

        
        

 
0 E UiV ⊤
i
00


 if r = u, s = v

 
00
E V iU⊤
i0


 if r = v, s = u
30

Thus the asymptotic covariance is
Σθ,12 = 1
2

 
0 E UiV ⊤
i
00


+ 1
2

 
00
E V iU⊤
i0

 
=1
2

 
0 E UiV ⊤
i
E V iU⊤
i0

 
It follows that the asymptotic covariance between bμ1 and bμ2 is Σμ,12 = 0.
Thus by (20), we have:
√n bμsscf − μ0 = √n{ 1
2 (bμ1 + bμ2) − μ0}
=1
2
√n{(μb1 − μ0) + (bμ2 − μ0)}
→p N (0, Σμ)
Thus bΣsscf
μ is a consistent estimator of the asymptotic variance of μbsscf .
Appendix C. Inference for PS and OR Models in the Simulation
Study
As in Section 2, let Ui (θ) denote the causal DRE estimating function for estimating the
ACE μ0, and V i (ψ) the score from the correctly-specified logistic regression PS and T i (ξ)
the score from the linear OR. The scores for the nuisance parameters are given by:
V i(ψ) = (xi − ηi(ψ))zi, T i (ξ) = 1
σ2 (xi − Qi(xi; zi, ξ))zi
Let U ′
i (θ′) and V ′
i (ψ′) denote the respective Ui (θ) and Vi (ψ) under the mis-specified ψ′.
Then U ′
i (θ′) is the DRE estimating function Ui (θ) with ηi (ψ) replaced by η′
i (ψ′), while
31

V′
i (ψ′) is given by:
V i′(ψ′) = (xi − η′
i (ψ′))zi
Inference about θ = μ, ψ⊤, ξ⊤ ⊤
and θ′ = μ′, (ψ′)⊤ , ξ⊤ ⊤
is based on the respective
joint estimating equations:
Correctly-specified :
n
X
i=1
W i (θ) =

    
Ui (θ)
V i (ψ)
T i (ξ)

    
= 0 (21)
Mis-specified :
n
X
i=1
W′
i (θ′) =

    
U′
i (θ′)
V′
i (ψ′)
T i (ξ)

    
=0
Let θb = (μb, ψb ⊤, ξb⊤)⊤ and θb′ = (μb′, ψb ′⊤, ξb′⊤)⊤ be the solutions to the correctly- and mis
specified estimating equations in (21), respectively.
Since Ui (θ) is efficient under ψ and ξ, following the discussion in Section 3 the asymp
totic variance σ2
μ of μb is the variance of Ui (θ0), i.e., σ2
μ = V ar{Ui (θ0)}. Under the mis
specified PS ψ′, U ′
i (θ′) is not efficient and V ar{U ′
i (θ′
0)} is no longer the asymptotic variance
of μb. In this case, we first estimate the asymptotic variance Σ′
θ of θb′ through joint inference.
Let Σ′
θ be partitioned according to the dimension of μ0, ψ′
0 and ξ0:
Σ′
θ=

    
Σ′
11 (θ′
0) Σ′
12 (θ′
0) Σ′
13 (θ′
0)
Σ′
21 (θ′
0) Σ′
22 (θ′
0) Σ′
23 (θ′
0)
Σ′
31 (θ′
0) Σ′
32 (θ′
0) Σ′
33 (θ′
0)

    
Then Σ′
11 (θ′
0), not V ar{U ′
i (θ′
0)}, is the asymptotic variance of μb′.
32

Figure 1: Sample Splitting and Cross Fitting of Influence Functions to Break Variational Dependence
33

Table 1: Estimated Pearson correlation between influence
function Ub and the score function contributions of propensity score (PS) under correctly specified and misspecified PS models.
PS correct PS mis-specified
Equations Pearson Correlation Equations Pearson Correlation
Ub, V0(ψˆ0) −2.11 × 10−4 Ub, V0(ψˆ′0) −5.70 × 10−3 Ub, V1(ψˆ1) −5.74 × 10−4 Ub, V1(ψˆ′1) −1.64 × 10−3 Ub, V2(ψˆ2) −8.60 × 10−4
Table 2: Summary of propensity score model, and Pearson correlation of the score function of the propensity score model with the influence function (IF).
Covariates Estimate P-value Pearson Correlation with IF
Intercept 0.19 0.76 -0.01 Age 0.01 0.68 -0.02 Education -2.14 < 0.001 -0.02 Race Hispanic -3.16 < 0.001 -0.05 Race White -0.92 < 0.001 -0.01 Marital Status 0.05 0.32 -0.13
Table 3: Comparison of standard errors of the causal estimand, average causal effect, across different estimators.
Estimators Standard Error
DRE IF plug-in based without SSCF 775.8 DRE IF plug-in based with SSCF 821.6 Jointly estimated 816.0
34

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:18.732Z
- **Text Length:** 52989 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 34 of 34
