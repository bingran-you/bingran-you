# PDF Document: Ghosh and Sarkar - 2025 - Dependence-Aware False Discovery Rate Control in Two-Sided Gaussian Mean Testing.pdf

**File Path:** Ghosh and Sarkar - 2025 - Dependence-Aware False Discovery Rate Control in Two-Sided Gaussian Mean Testing.pdf

**Processed Date:** 2026-02-10T18:18:24.422Z

**File Size:** 45417.30 KB

**Total Pages:** 57

**Extracted Pages:** 57

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3434

**Title:** Dependence-Aware False Discovery Rate Control in Two-Sided Gaussian Mean Testing

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Dependence-Aware False Discovery Rate
Control in Two-Sided Gaussian Mean
Testing
Deepra Ghosh
Department of Statistics, Operations and Data Science, Temple University
and
Sanat K. Sarkar ∗
Department of Statistics, Operations and Data Science, Temple University
July 2024
Abstract
This paper develops a general framework for controlling the false discovery rate (FDR) in multiple testing of Gaussian means against two-sided alternatives. The widely used Benjamini–Hochberg (BH) procedure provides exact FDR control under independence or conservative control under specific one-sided dependence structures, but its validity for correlated two-sided tests has remained an open question. We introduce the notion of positive left-tail dependence under the null (PLTDN), extending classic-
al dependence assumptions to two-sided settings, and show that it ensures valid FDR control for BH-type procedures. Building on this framework, we propose a family of generalized shifted BH (GSBH) methods that incorporate correlation information through simple p-value adjustments. Simulation results demonstrate reliable FDR control and improved power across a range of dependence structures, while an application to an HIV gene expression dataset illustrates the practical effectiveness of the propos-
ed approach.
Keywords: Multiple testing, Paired-multiple testing, Shifted BH methods, Data fission, Left-tailed positive dependency.
∗The reserach is supported by NSF grant DMS 2210687
1
arXiv:2511.19960v1 [stat.ME] 25 Nov 2025

1 Introduction
Multiplicity continues to pose a fundamental challenge across modern scientific research,
ranging from small-scale confirmatory experiments to large-scale high-dimensional studies.
Even in moderate-sized investigations, simultaneous testing of several related hypotheses
often arises, for instance, in clinical trials, neuroscience, or controlled laboratory experi
ments. At larger scales, the proliferation of data in genomics, neuroimaging, and other
high-throughput domains has made the simultaneous testing of thousands of hypotheses
routine. In both regimes, ensuring rigorous control of false discoveries remains a central
statistical concern.
The false discovery rate (FDR), introduced by Benjamini and Hochberg (1995), has
become the dominant framework for Type I error control in multiple testing. Their linear
step-up procedure, now universally known as the BH method, remains one of the most
influential and widely applied FDR-controlling methods in scientific practice.
Despite its widespread use, the theoretical validity of the BH method crucially depends
on the dependence structure among test statistics or, equivalently, the corresponding p
values. For Gaussian test statistics, the BH procedure is known to control the FDR under
independence or specific positive dependence structures, notably the positive regression
dependence on a subset (PRDS) condition (Benjamini and Yekutieli (2001); Sarkar (2002,
2008); Finner et al. (2007); Blanchard and Roquain (2008)). The Gaussian model, in
particular, provides a natural and widely used framework for studying multiple testing
problems, both because many classical test statistics (e.g., z- and t-statistics) are asymp
totically Gaussian, and because it offers analytical tractability for modeling dependence
among tests.
However, this theoretical assurance holds primarily for one-sided tests, while in practice,
2

such as in gene expression (Efron et al. (2001); Storey and Tibshirani (2003); Smyth (2004)),
neuroimaging (Friston et al. (1994); Nichols and Hayasaka (2003); Eklund et al. (2016)), or
variable selection (Benjamini and Yekutieli (2005); Barber and Cand`es (2015); Cand`es et al.
(2018)), the hypotheses of interest are almost always two-sided. When the test statistics are
correlated, typically following a Gaussian distribution with a known or unknown positive
definite covariance matrix, no general proof currently guarantees that the BH method
controls the FDR in the two-sided setting.
Nevertheless, empirical findings have long suggested that the BH procedure performs
well even for correlated two-sided Gaussian tests. As Benjamini (2010) noted, “convincing
simutheoretical evidence indicates that the same holds for two-sided z-tests with any cor
relation structure · · · but the theory awaits a complete proof.” Simulation studies (Reiner
Benaim (2007); Farcomeni (2006); Kim and van de Wiel (2008) support this conjecture,
showing reasonable FDR control across a range of dependence structures. Yet, in the ab
sence of rigorous theoretical justification, the continued use of BH in correlated two-sided
contexts rests on heuristic and empirical confidence rather than formal proof.
Motivated by the challenges of controlling the false discovery rate (FDR) under de
pendence, recent research has advanced multiple-testing methodology along several com
plementary directions. Dependence-adjusted BH-type procedures explicitly incorporate
covariance structure, including the conditional-calibration dBH, the Bonferroni–BH hybrid
(BBH), and the Shifted BH (SBH) procedures (Fithian and Lei (2022); Sarkar and Tang
(2022); Sarkar and Zhang (2025)), with BBH’s selective-inference perspective conceptu
ally analogous to fissioning a correlated Gaussian vector into conditionally independent
components (Sarkar (2025); Leiner et al. (2025)).
A unified class of symmetry-based methods, encompassing both the knockoff and Gaus
3

sian mirror frameworks (Barber and Cande`s (2015); Cand`es et al. (2018); Xing and Liu
(2023)), constructs synthetic or mirrored variables that reproduce the dependence struc
ture of the original data. By exploiting distributional symmetry or exchangeability under
the null, these approaches enable rigorous, often finite-sample, FDR control in Gaussian
and related models.
Complementing these, resampling-based methods—including permutation and boot
strap procedures (Yekutieli and Benjamini (1999); Romano et al. (2008))—empirically es
timate null distributions of correlated test statistics, offering flexible alternatives when
explicit modeling of dependence is challenging. Finally, structure-adaptive approaches, of
ten developed beyond Gaussian settings, leverage auxiliary information such as grouped
or hierarchical organization (Yekutieli (2008); Benjamini and Bogomolov (2014); Liu et al.
(2016); Hu et al. (2010); Lei et al. (2021); Guo and Sarkar (2020); Nandi et al. (2021); Guo
et al. (2018); Miecznikowski and Wang (2023); Li et al. (2022); Loper et al. (2022); Li and
Barber (2019)).
Together, these developments provide a rich and increasingly unified toolkit for control
ling false discoveries under complex dependence and structural constraints.
A more recent and conceptually distinct direction moves beyond the p-value paradigm
entirely, using e-values, nonnegative random variables whose expectation under the null
does not exceed one. The resulting e-BH procedure (Wang and Ramdas (2022)) enables
FDR control under arbitrary dependence. Although e-values offer appealing robustness
and generality, their practical use in multivariate Gaussian mean testing remains unclear,
motivating simpler, theoretically grounded, p-value–based alternatives.
The present paper contributes to this ongoing discourse by developing a rigorous theo
retical framework for FDR control in Gaussian mean testing against two-sided alternatives.
4

Building on insights from dependence-adjusted and shifted-p-value methods, we introduce a
class of structured dependencies under two-sided testing. Specifically, we define and study
positive left-tail dependence under the null (PLTDN), a property capturing conditional
left-tail monotonicity of null test statistics. This framework extends beyond the classi
cal PRDS assumption, which is limited to one-sided alternatives, and enables exact FDR
control for BH-type procedures in two-sided Gaussian mean testing.
Our framework naturally leads to a family of generalized shifted BH (GSBH) proce
dures, unifying and extending recent dependence-aware constructions. Empirical stud
ies demonstrate that these procedures reliably control the FDR and achieve substantial
power gains across diverse dependence structures. Median- and harmonic-mean–based
GSBH variants perform particularly well, and their Bonferroni–BH extensions (SBBH) re
tain these advantages in regression and knockoff-assisted settings. In real-data analysis of
HIV drug resistance, the proposed methods identify scientifically meaningful signals while
maintaining nominal error control, underscoring their robustness and practical utility for
high-dimensional inference under dependence.
The following section develops the mathematical foundation of this framework, estab
lishing exact expressions for the FDR of general step-up procedures and a formal charac
terization of PLTDN that guarantees FDR control. These results lay the groundwork for
constructing BH-type methods that are analytically tractable, computationally efficient,
and theoretically valid for correlated two-sided Gaussian tests, with applications spanning
confirmatory to large-scale exploratory studies.
5

2 Methodological Foundation
This section presents and establishes foundational results that underpin the development
of novel, theoretically valid FDR controlling BH-type methods in testing Gaussian means
against two-sided alternatives with known correlation structures. A key feature of these
developments is that they rely on a form of positive dependence fundamentally different
from the widely used PRDS condition, which is typically invoked only for one-sided alter
natives. This distinction is crucial, as it enables the extension of FDR control to settings
where the standard PRDS-based framework is not applicable.
Consider d null hypotheses H1, . . . , Hd with corresponding statistics (not necessarily
p-values) P1, . . . , Pd. A general step-up procedure with critical constants α1 ≤ . . . ≤ αd
operates as follows: Order the P ̃i’s as P(1) ≤ · · · ≤ P(d), set R = max1≤i≤d{i : P(i) ≤ αi},
and reject Hi for all i such that Pi ≤ P(R), provided R exists; otherwise, reject none.
For this step-up test, the FDR, defined in Benjamini and Hochberg (1995) as E(V / max(R, 1)),
where V is the number of false rejections, can be expressed as follows.
Lemma 1. Let I0 = {j : Hj is true}. Then,
FDR =
X
i∈I0
d−1
X
r=0
(r + 1)−1E {Pr (Pi ≤ αr+1 | P−i) 1 (R(P−i) = r)}
=
X
i∈I0
d−1
X
r=0
E (r + 1)−1Pr (Pi ≤ α ̃r+1 | R(P−i) ≥ r) −
r−1Pr (Pi ≤ αr | R(P−i) ≥ r) Pr {R(P−i) ≥ r} ,
where 0/0 = 0, P−i = (P1, . . . , Pd) \ {Pi}, and R−i ≡ R(P−i) = max1≤j≤d−1{j : P(j)\{i} ≤
αj+1}, with P(1)\{i} ≤ · · · ≤ P(d−1)\{i} being the ordered components of P−i.
See Sarkar (2002, 2008) for these formulas; similar results appear in other works (Ben
jamini and Yekutieli, 2001; Blanchard and Roquain, 2008; Finner et al., 2007).
6

Controlling the FDR at any level α requires algebraic manipulation of any of the ex
pressions in Lemma 1. At the heart of it lies the dependency of Pi on P−i, rather than of
P−i on Pi as in PRDS. We formally define such dependency in the following:
Condition 1. For each i ∈ I0 and a fixed c ∈ (0, 1),
a. Pr(Pi ≤ u | P−i)/u is decreasing in u ∈ (0, c), or
b. Pr(Pi ≤ u | g(P−i) ≤ t)/u is decreasing in u ∈ (0, c), for any increasing function g of
P−i and fixed constant t > 0.
The above condition is a weaker form of the concavity of Pr(Pi ≤ u | P−i) in u ∈ (0, c),
for each i ∈ I0. It characterizes a positive dependency between Pi and P−i, with Condition
1b representing a weaker form of Condition 1a. Specifically, it implies that for each i ∈ I0,
Pi stochastically dominates U (0, 1) toward smaller values in (0, c) when conditioned on
P−i or on a set of smaller values of P−i. We refer to this property as positive left-tail
dependence of Pi under the null (PLTDN) on P−i over (0, c), and simply as PLTDN on
P−i if c = 1.
These observations lead directly to the following result: For a stepup test based on
Pi’s and critical constants αi = iα ̃/d, i = 1, . . . , d, for some fixed α ̃ ∈ (0, 1), FDR ≤
P
i∈I0 Pr(Pi ≤ α ̃/d), if Pi is PLTDN on P−i over (0, c), for any fixed c ∈ (α ̃, 1].
What if the PLTDN condition does not hold for some Pi? In this case, we note the
following:
Remark 1. Let Pˆi be stochastically smaller, increasing function of Pi, conditionally given
P−i, for some i. Then, defining S = {i : Pˆi
st
⪯ Pi}, we have the following result: FDR ≤
7

FDRS + FDRSc, where
FDRS =
X
i∈I0
TS
d−1
X
r=0
(r + 1)−1E
n
Pr Pˆi ≤ αr+1 | P−i 1 (R(P−i) = r)
o
=
X
i∈I0
TS
d−1
X
r=0
E
hn
(r + 1)−1Pr Pˆi ≤ αr+1 | R(P−i) ≥ r −
r−1Pr Pˆi ≤ αr | R(P−i) ≥ r
o
Pr {R(P−i) ≥ r}
i
,
and FDRSc refers to the original expressions for the FDR in the lemma with P
i∈I0 being
replaced by P
i∈I0
T Sc.
Based on this remark, we have the following theorem, stated in a more general form
than the result stated before Remark 1 and providing a key theoretical foundation for the
novel FDR-controlling procedures developed in the next section
Theorem 1. Consider a stepup test based on Pi’s and critical constants αi = iα ̃/d, i =
1, . . . , d, for some fixed α ̃ ∈ (0, 1). Let, for each i ∈ I0, either Pi is LTPDN on P−i over
(0, c), or if not, there is a stochastically smaller and increasing function of Pi, conditionally
given P−i, say Pˆi, which is LTPDN on P−i over (0, c), for some c ∈ (α ̃, 1]. Then, the FDR
of this step-up test is bounded above by P
i∈I0
T Sc Pr(Pi ≤ α ̃/d) + P
i∈I0
T S Pr(Pˆi ≤ α ̃/d).
Proof. Let us first suppose that Condition 1b holds in the definition of PLTDN for Pˆi.
Since R(P−i) is decreasing in P−i for any fixed r = 1, . . . d − 1, we have the following result
under this condition: Pr Pˆi ≤ u | R(P−i) ≥ r /u is decreasing in u ∈ (0, 1), implying that
Pr Pˆi ≤ (r + 1)α ̃/d | R(P−i) ≥ r /(r + 1) ≤ Pr Pˆi ≤ rα ̃/d | R(P−i) ≥ r /r, for each i ∈
I0
T S and r = 1, . . . , d − 1. Using this in the second expression for FDRS (in Remark 1),
we have the second term in the desired upper bound on FDR in the theorem. The first
term in this upper bound can be derived similarly using the second expression of the FDR
formula in Lemma 1. The bound follows under Condition 1a as well since it is stronger
than Condition 1b. Thus, the theorem is proved.
8

3 Testing Gaussian Means Against Two-Sided Alter
natives
Given a d-dimensional random vector X = (X1, . . . , Xd)′ ∼ Nd(μ, η2Σ), with unknown
mean vector μ = (μ1, . . . , μd)′ and known positive definite covariance matrix Σ = ((σij)),
we consider the problem of testing the coordinate-wise hypotheses Hi : μi = 0 versus
H ̄i : μi ̸= 0, i = 1, . . . , d, subject to a control of the FDR under the following two different
scenarios:
Setting 1 (Known η2). In this case, each Xi can be standardized as X ̃i = Xi/η√σii,
allowing us, without loss of generality, to treat Xi itself as the marginal test statistic
for Hi, with Σ regarded as the correlation matrix. The standard two-sided z-tests
then apply, yielding p-values Pi = Ψ ̄ 1(X2
i ), i = 1, . . . , d, where Ψ1 = 1 − Ψ ̄ 1 is the
cumulative distribution function of the χ2
1 distribution.
Setting 2 (Unknown η2). Suppose an independent estimator V /ν is available for
η2 with V ∼ η2χ2
ν, where ν > 0 is known. Then, without loss of generality, we
can take η2 = 1 and use Ti = Xi/√V as the marginal test statistic for Hi, again
with Σ treated as the correlation matrix. The standard two-sided t-tests are then
applied, with p-values Pi = Ψ ̄ 1,ν(T 2
i ), i = 1, . . . , d, where Ψ1,ν = 1 −  ̄Ψ1,ν denotes the
cumulative distribution function of the F1,ν/ν distribution.
The problems described under Settings 1 and 2 were most recently investigated in
Sarkar and Zhang (2025), where the authors proposed BH-type procedures with provably
valid FDR control. Their approach shifts each p-value to the left and then applies a step-up
test to the shifted values, using critical constants αi = iα ̃/d, i = 1, . . . , d. The magnitude
of the shift and the choice of α ̃ are derived from the correlation matrix to guarantee FDR
9

control at the target level α. Specifically, they introduced two shifted BH procedures,
Shifted BH1 (SBH1) and Shifted BH2 (SBH2). In both, each Pi is shifted to
P−
i=

 
 
 ̄Ψ1 1
δi
Ψ ̄ −1
1 (Pi) , Setting 1,
Ψ ̄ 1,ν 1
δi
Ψ ̄ −1
1,ν (Pi) , Setting 2,
for some δi ∈ (0.1), before deriving an upper bound on the FDR of the resulting stepup
procedure and then determining α ̃ subject to controlling the FDR at α. In SBH1, δi
is set to τi := 1 − R2
i , where R2
i = σ′
−i,iΣ−i,−iσ−i,i, with Σ−i,−i = Cov(X−i) and σ−i,i =
Cov(X−i, Xi), the squared multiple correlation between Xi and X−i = (X1, . . . , Xd)\{Xi}.
In SBH2, δi = τ is used for all i, for some fixed τ ∈ (0, λmin(Σ)), where λmin(Σ) is the
smallest eigenvalue of the correlation matrix Σ. These choices of δi exploit the distributional
properties of squared multivariate normal and squared multivariate t statistics, with δi
serving as the shifting constant for each Pi.
These Shifted BH procedures represent a notable methodological advance in controlling
the FDR for Gaussian mean testing against two-sided alternatives. However, they were
not developed within a broader theoretical framework that accounts for general forms of
dependence among the p-values or their associated test statistics. Building on the unified
framework introduced in the previous section, we move beyond the ad hoc nature of Sarkar
and Zhang (2025) and demonstrate that their approach arises as a special case of a more
general theory. Specifically, we extend their work by considering the following general form
of shifted p-values:
P ̃i =

 
 
 ̄Ψ1 1
τ Ψ ̄ −1
1 (Pi) , Setting 1,
Ψ ̄ 1,ν 1
τ Ψ ̄ −1
1,ν (Pi) , Setting 2,
(1)
and then identifying values of τ ∈ (0, 1) that ensure the PLTDN property for the resulting
test statistics, or, as noted in Remark 1, for suitable increasing stochastic minorants of these
10

statistics. This construction yields a broad class of BH-type procedures with rigorously
established FDR control.
To determine values of τ that guarantee the PLTDN property, we first observe the
following result: For each i ∈ I0
X2
i | X−i ∼ τiχ′2
1(λi(X−i)), where λi (X−i) = [σ′
−i,iΣ−1
−i,i(X−i − μ−i)]2/τi,
and χ′2
1(λ) denote the non-central chi-squared random variable with 1 degree of freedom
and the non-centrality parameter λ.
This leads to the following lemma, proved in Appendix A.
Lemma 2. Let
P ̈i :=

 
 
 ̄Ψ1 1
τi
Ψ ̄ −1
1 (Pi) , Setting 1,
Ψ ̄ 1,ν 1
τi
Ψ ̄ −1
1,ν (Pi) , Setting 2,
The P ̈i’s are LTPDN, with Condition 1a satisfied in Setting 1 and Condition 1b satisfied
in Setting 2.
The desired LTPDN property for the P ̃i’s, or for suitably chosen minorants thereof (as
stated in Theorem 1), can now be established using the above lemma. Let us use, for
notational convenience, Ψ to denote Ψ1 in Setting 1 and Ψ1,ν in Setting 2. We note that
P ̃i = φi(P ̈), where φi(u) = Ψ τi
τ Ψ−1(u) : (0, 1) → (0, 1).
The function φi is increasing, satisfies φi(0) = 0 and φi(1) = 1, and, as shown in the
Appendix, is convex when τi ≥ τ and concave when τi < τ .
Case 1: τi ≥ τ .
For i ∈ I0,
1
u Pr(P ̃i ≤ u | P−i) = 1
u Pr(P ̈i ≤ φ−1
i (u) | P−i) = Pr(P ̈i ≤ φ−1
i (u) | P−i)
φ−1
i (u)
φ−1
i (u)
u.
11

Suppose Condition 1a ensures the PLTDN property of P ̈i on P−i. Since φ−1
i (u) is increasing
and, being concave, satisfies that φ−1
i (u)/u is decreasing on (0, 1), the above expression is
decreasing in u ∈ (0, 1). The same conclusion holds under Condition 1b. Hence, P ̃i has the
PLTDN property on P−i for all i ∈ I0 when τi ≥ τ .
Case 2: τi < τ .
Here, since φ−1
i (u) is convex, φ−1
i (u) < uφ−1
i (α ̃)/α ̃, for u < α ̃. Therefore, for each i ∈ I0,
1
u Pr(P ̃i ≤ u | P−i) ≤ 1
u Pr(P ̈i ≤ u
α ̃ φ−1
i (α ̃) | P−i),
which is decreasing in u ∈ (0, α ̃) due to the PLTDN property of P ̈i on P−i. Thus, we have
Pˆi = α ̃P ̈i/φ−1
i (α ̃), a minorant of P ̃i, which possesses the PLTDN property.
Now, since
P ̃i = Ψ ̄ τi
τ
Ψ ̄ −1(P ̈i) , Pˆi = α ̃
 ̄Ψ τ
τi
 ̄Ψ−1(α ̃)
P ̈i,
and Pr(P ̈i ≤ u) =  ̄Ψ(τi  ̄Ψ−1(u)), for each i ∈ I0, we have the following results: For each
i ∈ I0,
Pr(P ̃i ≤ u) = Ψ ̄ (τ Ψ ̄ −1(u)), τi ≥ τ
Pr(Pˆi ≤ u) = Ψ ̄ τiΨ ̄ −1 u
α ̃
Ψ ̄ τ
τi
 ̄Ψ−1(α ̃) , τi < τ. (2)
These results lead us to the following definition of a broad class of shifted BH methods
with theoretically valid FDR control.
Definition 1. Generalized Shifted BH (GSBH): A step-up test based on the P ̃i’s in
1 and critical constants αi = iH−1(α/d), i = 1, . . . , d, where
H(u) = 1
d
(
X
i:τi≥τ
Hτ (u) +
X
i:τi<τ
Hτi
1
dH τ
τi
(du)
)
: (0, 1) → (0, 1),
and Hτ = Ψ ̄ (τ Ψ ̄ −1(u)) : (0, 1) → (0, 1), with Ψ referring to Ψ1 in Setting 1 and to Ψi,ν in
Setting 2.
12

Theorem 2. The GSBH controls the FDR at α.
The theorem follows upon using the results in 2 with α ̃ = dH−1(α/d) in Theorem 1 and
noting that FDR ≤ dH(α ̃/d).
Remark 2. The framework underpinning the development of GSBH allows us to vary
τ ∈ (0, 1) and thereby formulate a broad class of Shifted BH methods with guaranteed
FDR control. Within this framework, SBH1 from Sarkar and Zhang (2025) can be seen as
a modified GSBH, where each shift is tailored to the corresponding test statistic and its
dependence on the others. Similarly, SBH2 from Sarkar and Zhang (2025) arises as a special
case of GSBH with τ chosen as a fraction between 0 and the minimum eigenvalue λmin(Σ)
of the correlation matrix. However, we can now fine-tune and potentially strengthen it by
setting τ = λmin(Σ), which we refer to as the new SBH2.
Our analyses aim to identify a choice of τ , and thus a corresponding method, which
yields the most favorable results across all settings. Since τ serves as a common partition
among the τi’s, we focus our attention on a restricted set of candidates: the strongest
squared multiple correlation τmin (GSBH1), the weakest squared multiple correlation τmax
(GSBH2), median τmed (GSBH3), arithmetic mean τ ̄ (GSBH4), geometric mean τ ̄geo (GSBH5)
and harmonic mean τ ̄har (GSBH6).
4 FDR-Controlled Variable Selection: The Bigger Pic
ture
This section sheds light on the relevance of our work by demonstrating the implementation
of the proposed multiple testing procedures, developed in the preceding section with rigor
ous control of the false discovery rate (FDR), in the context of variable selection within a
13

linear regression framework.
Consider the linear model: Y = Xβ + ε, where Y is n-dimensional response vector,
X = (X1, . . . , Xd) is n × d design matrix of rank d < n with its columns representing
the known vectors of observations on the d variables (or predictors) X1, . . . , Xd, β =
(β1, . . . , βd) is the unknown vector of regression coefficients corresponding to these variables,
and ε ∼ Nd(0, η2Id) is the Gaussian noise with some unknown variance η2.
We formulate variable selection as a multiple hypothesis testing problem. Specifically,
for each predictor Xi, we test the null hypothesis Hi : βi = 0 against the alternative
Hi : βi ̸= 0, simultaneously for i = 1, . . . , d. Variables corresponding to rejected null
hypotheses are selected as relevant predictors. The effectiveness of such selection procedures
is most commonly evaluated using the FDR, which quantifies the expected proportion of
false discoveries among all selections.
The ordinary least squares (OLS) estimator of β is βˆ = (βˆ1, . . . , βˆd)′ = A−1XT Y ,
where A = X′X. Under the model assumptions, βˆ ∼ Nd(β, η2A−1). Furthermore, the
estimator of η2, ηˆ2 = (∥Y ∥2 − βˆ′Aβˆ)/(n − d) is independent of βˆ and follows a scaled
chi-squared distribution: ηˆ2 ∼ η2χ2
ν/ν, ν = n − d. These facts naturally suggest using
βˆ when developing FDR-controlling procedures. When η2 is known (e.g., set to 1), one
may use the p-values Pi = Ψ ̄ 1(βˆ2
i /(A−1)ii), while for unknown η2, a natural choice is
Pi = Ψ ̄ 1,ν(βˆ2
i /(A−1)iiνηˆ2). However, the direct application of the classical BH procedure
to these p-values, as noted before, is problematic, given the arbitrariness of the correlation
structure of βˆ. In contrast, our newly proposed generalized shifted BH procedures, which
are provably robust to general dependence structures, provide a natural and reliable choice
for FDR-controlled variable selection.
When n ≥ 2d, our proposed GSBH procedure becomes a natural competitor to the Bon
14

ferroni–BH (BBH) procedure of Sarkar and Tang (2022). The BBH was developed under
a paired multiple-testing framework obtained by recasting the knockoff-assisted variable
selection problem of Barber and Cande`s (2015) as a two-sample p-value problem. More
specifically, Sarkar and Tang (2022) decomposed the OLS estimator βˆ into two independent
estimators,
βˆ1 =(2A − D)−1(X + X ̃ )′Y and βˆ2 = D−1(X − X ̃ )′Y
by using X ̃ , the knockoff counterpart of X (defined in Barber and Cande`s (2015)), which
satisfies the equations X ̃ ′X ̃ = A and X ̃ ′X = A − D, with D = diag{s}, for some
s ∈ Rd
+, being such that 2D − DA−1D is positive definite. These two independent parts
of βˆ are distributed as follows: βˆ1 ∼ Nd(β, 2η2(2A − D)−1) and βˆ2 ∼ Nd(β, 2η2D−1).
An alternative, data-fission perspective on such a decomposition of Gaussian vector βˆ is
discussed in Sarkar (2025).
From βˆ1 and βˆ2, two sets of p-values are constructed, P (1) = (P (1)
1 , . . . , P (1)
d ) and
P (2) = (P (2)
1 , . . . , P (2)
d ), where
P (1)
i = Ψ ̄ 1
βˆ1i
2
2((2A − D)−1)ii
!
and P (2)
i = Ψ ̄ 1
siˆβ2i
2
2
!
,
if η2 = 1, and
P (1)
i = Ψ ̄ 1,ν
βˆ1i
2
2νηˆ2((2A − D)−1)ii
!
and P (2)
i = Ψ ̄ 1
siˆβ2i
2
2νηˆ2
!
,
if η2 is unknown.
With βˆ(2) being internally independent, the original BH method can be directly applied
to P (2) with valid FDR control. However, βˆ(1) is not internally independent. So, Sarkar
and Tang (2022) proposed a two-step procedure: first, use P (1) with a Bonferroni threshold
to screen potentially important variables, and then apply BH to the corresponding p-values
15

in P (2). Specifically, they apply BH at level √α to the combined p-values, P ∗
i = 1(P (1)
i>
√α) + 1(P (1)
i ≤ √α)P (2)
i , i = 1, . . . , d. This defines the BBH procedure. Sarkar and
Tang (2022) also proposed an adaptive version of BBH (Adapt-BBH). It has been obtained
by replacing P (2)
i in BBH by πˆ0P (2)
i , where πˆ0 is an estimate of π0, the proportion of
unimportant variables, obtained from P (2). They recommend using an estimator of π0
(e.g., Storey et al. (2004)) that is known to provide theoretically valid FDR control for
adaptive BH methods (Sarkar (2008)). The BBH and Adapt-BBH control the FDR non
asymptotically when η2 = 1, but asymptotically when ν is large making ηˆ2 ≈ η2.
Now that we have established that our proposed class of Shifted BH procedures based
on P (1), which explicitly incorporate the underlying correlation structure, can provide a
more powerful alternative to Bonferroni thresholding while maintaining theoretically valid
FDR control, we consider a modification of the two-step framework of Sarkar and Tang
(2022). Specifically, we first screen potentially important variables by thresholding the
p-values in P (2) with an appropriately chosen cutoff. We then apply GSBH with a suitably
chosen τ to the corresponding p-values in P (1). The procedure is formally defined below.
Definition 2. Shifted BBH: A step-up procedure applied to
P ̃i
∗ = 1(P (2)
i > √α) + 1(P (2)
i ≤ √α)P ̃(1)
i , i = 1, . . . , d,
using critical constants αi = iH−1(√α/d), for i = 1, . . . , d, where P ̃(1)
i = Ψ ̄ Ψ ̄ −1(P (1)
i )/τ ,
for some appropriately chosen τ depending on τi = 1 − R2
i , i = 1, . . . , d, with R2
i denoting
the squared multiple correlations obtained from (2A − D)−1. Here, H is as defined in
Definition 1, and Ψ denotes Ψ1 when η2 = 1, or Ψ1,ν when η2 is unknown.
The following result, which is a consequence of Theorem 2, establishes the FDR control
property of Shifted BBH.
16

Theorem 3. Shifted BBH controls the FDR at level α non-asymptotically when η2 = 1,
and asymptotically when η2 is unknown and ν is large, so that ηˆ2 ≈ η2.
5 Empirical Evidence
This section empirically examines the finite-sample performance of the proposed methods
under both controlled synthetic conditions and real-world data settings, thereby bridging
theoretical guarantees with practical applicability. The investigation proceeds in two parts:
(i) we first assess the operating characteristics of the methods under a range of simulated en
vironments that capture complex dependence structures and varying signal configurations;
and (ii) we subsequently evaluate their empirical utility on an HIV gene expression dataset
extensively analyzed in Barber and Cande`s (2015), thereby validating their performance in
relevant contexts.
5.1 Simulations
We consider two inferential settings, described formally in Section 3. The first involves
detecting nonzero means in a d-dimensional multivariate normal distribution, allowing for
arbitrary correlations among test statistics. The second casts the problem within a variable
selection framework, discussed in Section 4. This latter formulation corresponds to the
two-sided t-test layout (Setting 2) introduced earlier, providing a unified treatment across
simulation designs. For brevity, we report results for mean testing using z-tests and reserve
t-test–based results for the regression context.
17

5.1.1 Testing for Means
In multivariate mean testing, correlations among variables can strongly influence the rate
of false discoveries. Let X = (X1, . . . , Xd)′ denote a random vector drawn from a d
dimensional normal distribution with mean vector μ and correlation matrix Σ, as specified
in Section 2. Our simulations assess the proposed procedures over a range of signal strengths
and null proportions, measuring both false discovery rate (FDR) control at level α and
power (the ability to detect true signals).
We study two simulation regimes: (1) fixed null proportion (75%), with varying nonzero
mean magnitudes from (1-5), and (2) fixed signal strength (μi = 2), with varying null
proportions (50–90%). In each regime, method performance is averaged over 500 Monte
Carlo replications, with d ∈ {40, 100} and α = 0.05. To explore robustness, we generate
correlated test statistics under six dependence structures:
(i) Equicorrelated (‘Equi’): all pairwise correlations set to ρ ∈ {0.3, 0.7};
(ii) Autoregressive of order 1 (‘AR’): correlations decaying as a function of distance with
ρ ∈ {0.3, 0.7};
(iii) Inverse autoregressive of order 1 (‘IAR’): inverse structure with the correlation ρ ∈
{0.3, 0.7};
(iv) Block diagonal (‘Cluster’): partitioned into d/4 blocks;
(v) Sparse (‘Sparse’): a sparsely populated correlation matrix with 20% non-zero entries;
and
(vi) A matrix (denoted by ‘Prefixed Corr 1’) which indicates that a random set (25% of
total) of variables is randomly correlated with all the variables.
Our comparisons aim to identify (a) which members of the proposed family of methods
show the strongest performance, and (b) how they compare with established FDR pro
18

cedures. The methods differ in how they partition the squared multiple correlations to
determine shifted p-values, guided by the theoretical insight that certain partitions pre
serve the PLTDN property required for valid FDR control. If no natural partition arises,
we expect strong performance from either one of SBH2, GSBH1, or GSBH2.
Overall, results reaffirm the robustness of the BH procedure, but also highlight its prac
tical conservatism under dependence. The BY procedure remains a solid benchmark, yet
our proposed GSBH methods offer reliable and often superior alternatives under correlated
settings.
For conciseness, results for (d, k) = (40, 8) are shown in the main text, with extended
results in Appendix B.
Figure 1 summarizes key outcomes. Across all dependence structures, GSBH procedures
achieve higher power than both BH and dependence-adjusted BY (dBY), while maintaining
valid FDR control. Under moderate correlations, GSBH methods show superior FDR
stability compared to dBY. Although stronger dependence tends to make FDR control
slightly conservative, the power gains remain substantial, representing a favorable trade
off.
Figure 2 further demonstrates that GSBH procedures exhibit greater stability than
SBH1 and SBH2 in complex correlation settings. Using the minimum of the squared
pairwise correlations as a global shift tends to yield higher power than using the maxi
mum. Across varying proportions of true signals, the harmonic mean–based shift (GSBH6)
performs particularly well, while the median-based shift (GSBH3) provides an appealing
balance of simplicity and accuracy. Extensive simulations in Appendix B elucidates that
median- and harmonic-based shifts, as well as GSBH1, match or outperform BH as signal
prevalence increases.
19

IAR(0.3) AR(0.3) Equi(0.3)
Figure 1: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
mean testing of d = 40 parameters. Methods compared are SBH1 method (Circle and
black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
These findings motivate extending the framework to variable selection in regression.
20

Block Diagonal
Sparse
Prefixed Corr 1
Figure 2: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
mean testing of d = 40 parameters. Methods compared are SBH1 method (Circle and
black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
21

5.1.2 Variable Selection
As outlined in Section 4, the linear regression model can be naturally viewed as a multiple
testing problem, with each coefficient tested for nullity. We generate the design matrix X ∈
Rn×d with rows independently drawn from a d-variate normal distribution with correlation
matrix Σ. Columns of X are standardized to unit norm, ensuring orthonormal scaling.
Correlation structures mirror those of Section 5.1.1, allowing direct comparison between
the two inferential settings. Two dimensional regimes are examined: (n, d) = (100, 40) and
(250, 100), with α = 0.05.
Figure 3 and supplementary figures (in Appendix B) ascertain that the proposed meth
ods retain strong signal detection while maintaining reliable FDR control. Across all de
signs, GSBH methods match or outperform BY, echoing results from the mean-testing
simulations. Among them, GSBH1 (based on the minimum shift τmin) performs robustly,
approaching BH’s power in some settings. The median (GSBH3) and harmonic mean
(GSBH6) variants outperform other shift-based methods across diverse correlation struc
tures, reflecting the flexibility of our generalization framework. We therefore recommend
GSBH3 and GSBH6 as practical default choices, and GSBH1 as a theoretically grounded
option under the PLTDN condition.
Knockoff-Assisted Framework: To test the versatility of our approach, we embed the
proposed procedures in a knockoff-assisted framework. We generate design matrices X with
rows drawn independently from d-dimensional standard multivariate normal with three
different structured correlation matrices – equicorrelated, AR(1), and inverse AR(1) – with
ρ ∈ {0.3, 0.7}. Knockoff variables X ̃ are generated from the equation X ̃ = XA−1(A −
D) + U ̃ C where the columns of U ̃ ∈ Rd are orthonormal and orthogonal to column space
of X (cf. Barber and Cand`es (2015)).
22

IAR(0.3) AR(0.3) Equi(0.3)
Figure 3: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
variable selection from d = 40 parameters. Methods compared are SBH1 method (Circle
and black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
We evaluate the performance of our methods against several existing procedures, includ
ing the Bonferroni-BH (BBH) and its adaptive variant (Adapt-BBH) proposed in Sarkar
23

and Tang (2022), as well as the original knockoff filter of Barber and Cand`es (2015). Ad
ditionally, we consider three hybrid procedures:
• Rev-BBH: Initial selection based on the independent p-values followed by BH adjustment
on the dependent set;
• BBY: Initial Bonferroni selection followed by BY adjustment;
• BH on the independent set of p-values.
Simulation settings considered include (n, d) = (100, 40) with d/5 non-null effects and
target FDR levels α ∈ {0.05, 0.1, 0.2}. Incorporating the Shifted BH framework into the
Bonferroni-BH paired one, we had already defined the SBBH class of methods. Members of
this group would be SBBH1 and SBBH2 which correspond to SBH1 in the modified GSBH
class and SBH2 in the GSBH class. Among others, we consider the promising ones from
5.1.1: SBBH3 (τ = τmin), SBBH4 (τ = τmed) and SBBH5 (τ = τhar) which respectively
correspond to GSBH1, GSBH3 and GSBH6 from the GSBH class.
The comparative performance of the proposed SBBH methods against existing proce
dures, including BBH and its adaptive variant (ABBH), is presented in Figure 4, with
additional results provided in Appendix B. While SBBH1 shows some loss of power under
strong inter-variable correlations, often performing slightly below BBH, the other SBBH
variants achieve more balanced performance, maintaining conservative FDR control while
exhibiting markedly higher power. Notably, although the original knockoff filter of Barber
and Cande`s (2015) begins to surpass BBH at higher significance levels (e.g., α = 0.2), it
still falls short of the proposed methods in both detection power and stability.
The Rev-BBH procedure, which combines independent and dependent p-value sets
within a paired testing framework, demonstrates improved power and can be effective
in identifying true signals. However, this approach lacks formal theoretical guarantees to
24

IAR(0.3) AR(0.3) Equi(0.3)
Figure 4: Simulated Power (left column) and simulated FDR (right column) displayed for
knockoff-assisted variable selection from d = 40 parameters at a level of α = 0.2. Methods
compared are BH method (Circle and black), BBH method (Triangle point up and red),
Adapt-BBH method (Plus and green), SBBH1 (Cross and blue), SBBH2 (Diamond and
light blue), SBBH3 (Triangle point down and purple), SBBH4 (Square cross and yellow),
SBBH5 (Star and grey), Knockoff (Diamond plus and black), Rev-BBH (Circle plus and
red) and BBY (Triangles up and down and green)
25

prevent the inclusion of spurious discoveries, thereby limiting its interpretability in rigor
ous inferential settings and sharing the same fundamental shortcomings as the original BH
method. In contrast, the BBY procedure provides a conservative reference point, while the
proposed SBBH methods represent principled extensions that offer formal FDR control at
arbitrary target levels.
The power curves for SBBH2–SBBH5 generally fall between, or partially overlap with,
those of Rev-BBH and BBY, suggesting a form of near-optimal performance within the
knockoff-assisted multiple testing framework. These results highlight the flexibility and
robustness of the generalized shift-based BH methodology in handling complex dependence
structures.
5.2 Real Data Analysis
To assess the practical performance of the proposed methods, we apply them to a real
world HIV drug resistance dataset originally analyzed in Rhee et al. (2006). The study
investigates mutations in the protease gene associated with resistance to protease inhibitors
(PIs) used in antiretroviral therapy. The dataset contains binary genotype information in
dicating the presence or absence of specific mutations, along with corresponding phenotypic
resistance measurements. Following the preprocessing steps of Barber and Cand`es (2015),
resistance values were log-transformed to better approximate normality across the seven
PIs examined. The design matrix X comprises binary entries, where Xij = 1 denotes the
presence of mutation j in sample i. The goal is to identify mutations significantly associ
ated with resistance phenotypes, using the treatment-selected mutation (TSM) panels from
Rhee et al. (2006) as a biological benchmark.
In this analysis, we considered the leading procedures from Sections 5.1.1 and 5.1.2,
26

specifically GSBH1 (renamed as SBH3), GSBH3 (renamed as SBH4), and GSBH6 (re
named as SBH5), along with their corresponding BBH-type analogues. These were com
pared against SBH1 and SBH2 from Sarkar and Zhang (2025), the classical BH and BY
procedures, their dependence-adjusted versions from Fithian and Lei (2022), the knockoff
filter of Barber and Cand`es (2015), and both the original and adaptive BBH methods from
Sarkar and Tang (2022). All procedures were evaluated under FDR control at nominal
levels α ∈ {0.05, 0.1, 0.2}.
(a) IDV (b) NFV (c) SQV
Figure 5: Selected results of drug resistance for α = 0.05: (a) resistance to IDV; (b)
resistance to NFV; (c) resistance to SQV. Dark blue indicates protease positions that
appear in the treatment-selected mutation (TSM) panel for the PI class of treatments,
while orange indicates positions selected by the method that do not appear in the TSM
list.
The proposed methods produced a reasonable number of true discoveries while con
sistently maintaining control of the false discovery proportion (FDP). Although the total
number of rejections was occasionally smaller than that obtained by conventional proce
dures such as BH or dBH, this difference reflected a principled adherence to the nominal
error level α, rather than excessive conservatism. In contrast, both BH and dBH failed to
control the FDP across all drugs examined, often identifying mutations with no established
27

relevance to drug resistance.
This distinction is particularly important in biomedical contexts, where false associ
ations may lead to misleading or potentially harmful conclusions. In this regard, the
proposed methods achieved reliable control of false discoveries while retaining substantial
detection power, yielding stable and interpretable results across the panel of protease in
hibitors (PIs). The observed tradeoff between discovery rate and rigorous error control
underscores the practical robustness and inferential credibility of the GSBH-based proce
dures in high-stakes scientific applications.
6 Concluding Remarks
Multiplicity remains a central challenge in modern statistical inference, particularly under
dependence. In this paper, we provide a rigorous framework for FDR control in two-sided
Gaussian mean testing, introducing positive left-tail dependence under the null (PLTDN)
to extend classical PRDS conditions beyond one-sided tests. Building on this insight, we
develop generalized shifted BH (GSBH) and shifted Bonferroni–BH (SBBH) procedures
that unify and extend recent dependence-adjusted and shift-based approaches, achieving
exact FDR control while remaining computationally efficient.
Our simulations demonstrate that these procedures reliably maintain nominal FDR
control across diverse correlation structures and deliver substantial power gains relative
to existing methods. Median- and harmonic-mean–based variants, in particular, balance
theoretical rigor with empirical performance. In real-data applications, such as HIV drug
resistance, the methods identify scientifically meaningful signals while avoiding spurious
discoveries, highlighting their practical relevance in dependent testing scenarios.
These results underscore the broader significance of the PLTDN framework. It provides
28

a principled approach to understanding dependence structures under two-sided testing
framework that guarantee valid FDR control, with natural extensions to variable selection
in regression and other structured inference problems. By accommodating scenarios where
the covariance matrix is fully known or known up to an unknown scalar, this work lays the
foundation for future extensions to fully unknown covariance structures, further advancing
the theory and practice of FDR controlling methodologies.
29

References
Barber, R. F. and Cand`es, E. (2015), ‘Controlling the false discovery rate via knockoffs’,
Annals of Statistics 43, 2055–2085.
Benjamini, Y. (2010), ‘Discovering the false discovery rate’, Journal of the Royal Statistical
Society: Series B (Statistical Methodology) 72(4), 405–416.
Benjamini, Y. and Bogomolov, M. (2014), ‘Selective inference on multiple families of hy
potheses’, Journal of the Royal Statistical Society: Series B (Statistical Methodology)
76(1), 297–318.
Benjamini, Y. and Hochberg, Y. (1995), ‘Controlling the false discovery rate: A practical
and powerful approach to multiple testing’, Journal of Royal Statistical Society Series B
57, 289–300.
Benjamini, Y. and Yekutieli, D. (2001), ‘The control of the false discovery rate in multiple
testing under dependency’, Annals of Statistics 29, 1165–1188.
Benjamini, Y. and Yekutieli, D. (2005), ‘False discovery rate-adjusted multiple confi
dence intervals for selected parameters’, Journal of the American Statistical Association
100(469), 71–81.
Blanchard, G. and Roquain, E. (2008), ‘Two simple sufficient conditions for fdr control’,
Electronic Journal of Statistics 2, 963–992.
Cande`s, E. J., Fan, Y., Janson, L. and Lv, J. (2018), ‘Panning for gold: ‘model-x’ knock
offs for high-dimensional controlled variable selection’, Journal of the Royal Statistical
Society: Series B (Statistical Methodology) 80(3), 551–577.
30

Efron, B., Tibshirani, R., Storey, J. and Tusher, V. (2001), ‘Empirical bayes analysis of a
microarray experiment’, Journal of the American Statistical Association 96(456), 1151
1160.
Eklund, A., Nichols, T. E. and Knutsson, H. (2016), ‘Cluster failure: Why fmri inferences
for spatial extent have inflated false-positive rates’, Proceedings of the National Academy
of Sciences 113(28), 7900–7905.
Farcomeni, A. (2006), ‘More powerful control of the false discovery rate under dependence’,
Statistical Methods in Medical Research 15(6), 507–524.
Finner, H., Dickhaus, T. and Roters, M. (2007), ‘Dependency and false discovery rate:
Asymptotics’, Annals of Statistics 35, 1432–1455.
Fithian, W. and Lei, L. (2022), ‘Conditional calibration for false discovery rate control
under dependence’, Annals of Statistics 50, 3091–3118.
Friston, K. l. J., Holmes, A. P., Worsley, K. J., Poline, J.-B., Frith, C. D. and Frackowiak,
R. S. J. (1994), ‘Statistical parametric maps in functional imaging: A general linear
approach’, Human Brain Mapping 2(4), 189–210.
Guo, W., Lynch, G. and Romano, J. P. (2018), ‘A new approach for large scale multi
ple testing with application to fdr control for graphically structured hypotheses’, arXiv
preprint arXiv:1812.00258v1 .
Guo, W. and Sarkar, S. (2020), ‘Adaptive controls of FWER and FDR under block depen
dence’, Journal of Statistical Planning and Inference 208, 13–24.
Hu, J., Zhao, H. and Zhou, H. H. (2010), ‘False discovery rate control with groups’, Journal
of the American Statistical Association 105(491), 1215–1227.
31

Karlin, S. (1968), Total Positivity Vol I, Stanford University Press.
Kim, K. I. and van de Wiel, M. A. (2008), ‘Effects of dependence in high-dimensional
multiple testing problems’, BMC Bioinformatics 9, 114.
Lei, L., Ramdas, A. and Fithian, W. (2021), ‘A general interactive framework for false
discovery rate control under structural constraints’, Biometrika 108, 253–267.
Leiner, J., Duan, B., Wasserman, L. and Ramdas, A. (2025), ‘Data fission: Splitting a
single data point’, Journal of the American Statistical Association 120(549), 135–146.
Li, A. and Barber, R. F. (2019), ‘Multiple testing with the structure-adaptive benjamini
hochberg algorithm’, Journal of the Royal Statistical Society: Series B (Statistical
Methodology) 81(1), 45–74.
Li, Y., Hu, Y.-J. and Satten, G. A. (2022), ‘A bottom-up approach to testing hypotheses
that have a branching tree dependence structure, with error rate control’, Journal of the
American Statistical Association 117(538), 664–677.
Liu, Y., Sarkar, S. K. and Zhao, Z. (2016), ‘A new approach to multiple testing of grouped
hypotheses’, Journal of Statistical Planning and Inference 179, 1–14.
Loper, J. H., Lei, L., Fithian, W. and Tansey, W. (2022), ‘Smoothed nested testing on
directed acyclic graphs’, Biometrika 109(2), 457–471.
Miecznikowski, J. C. and Wang, J. (2023), ‘Error control in tree structured hypothesis
testing’, WIREs Computational Statistics 15(4), e1603.
Nandi, S., Sarkar, S. K. and Chen, X. (2021), ‘Adapting to one- and two-way classified
structures of hypotheses while controlling the false discovery rate’, Journal of Statistical
Planning and Inference 215, 95–108.
32

Nichols, T. and Hayasaka, S. (2003), ‘Controlling the familywise error rate in functional neu
roimaging: A comparative review’, Statistical Methods in Medical Research 12(5), 419
446.
Reiner-Benaim, A. (2007), ‘Fdr control by the bh procedure for two-sided correlated tests
with implications to gene expression data analysis’, Biometrical Journal 49(1), 107–126.
Rhee, S.-Y., Taylor, J., Wadhera, G., Ben-hur, A., Brutlag, D. L. and Shafer, R. W.
(2006), ‘Genotypic predictors of human immunodeficiency virus type 1 drug resistance’,
Proceedings of the National Academy of Sciences 103, 17355–17360.
Romano, J. P., Shaikh, A. M. and Wolf, M. (2008), ‘Control of the false discovery rate
under dependence using the bootstrap and subsampling’, TEST 17(3), 417–442.
Sarkar, S. (2002), ‘Some results on false discovery rate in stepwise multiple testing proce
dures’, Annals of Statistics 30, 239–257.
Sarkar, S. (2008), ‘On methods controlling the false discovery rate’, Sankhya 70, 135–168.
Sarkar, S. K. (2025), ‘Comments on “data fission: Splitting a single data point”’, Journal
of the American Statistical Association 120(549), 170–171.
Sarkar, S. K. and Tang, C. Y. (2022), ‘Adjusting the bh method for controlling the false
discovery rate in knockoff assisted variable selection’, Biometrika 109, 1149–1155.
Sarkar, S. K. and Zhang, S. (2025), ‘Shifted bh methods for controlling false discovery rate
in multiple testing of the means of correlated normals against two-sided alternatives’,
Journal of Statitstical Planning and Inference 236.
Smyth, G. K. (2004), ‘Linear models and empirical bayes methods for assessing differential
33

expression in microarray experiments’, Statistical Applications in Genetics and Molecular
Biology 3(1), Article 3.
Storey, J., Taylor, J. and Siegmund, D. (2004), ‘Strong control, conservative point esti
mation and simultaneous conservative consistency of false discovery rates: A unified
approach’, Journal of Royal Statisticl Society Series B 66, 187–205.
Storey, J. and Tibshirani, R. (2003), ‘Statistical significance for genomewide studies’, Pro
ceedings of the National Academy of Sciences 100(16), 9440–9445.
Wang, R. and Ramdas, A. (2022), ‘False discovery rate control with e-values’, Journal of
the Royal Statistical Society: Series B 84(3), 822–852.
Xing, X.and Zhao, Z. and Liu, J. S. (2023), ‘Controlling false discovery rate using gaussian
mirrors’, Journal of the American Statistical Association 118(541), 222–241.
Yekutieli, D. (2008), ‘Hierarchical false discovery rate–controlling methodology’, Journal
of the American Statistical Association 103(481), 309–316.
Yekutieli, D. and Benjamini, Y. (1999), ‘Resampling-based false discovery rate controlling
multiple test procedures for correlated test statistics’, Journal of Statistical Planning and
Inference 82(1–2), 171–196.
7 Appendix A
7.1 Proof of Lemma 2
The following result on chi-squared and F -distributions will facilitate our proof of this
lemma.
34

Result 1. (i). For any fixed θ > 0 and h ≥ 0, Ψ ̄ m+h(θΨ ̄ −1
m (u)) is concave (or convex) in
u ∈ (0, 1) when θ ≤ 1 (or θ > 1, h = 0).
(ii). For any fixed θ ∈ (0, 1) and h ≥ 0, Ψ ̄ m+h,n(θΨ ̄ −1
m,n(u)) is concave (or convex) in
u ∈ (0, 1) when θ ≤ 1 (or θ > 1 and h = 0).
(iii). For any fixed 0 < u < u′ < ∞, Ψ ̄ m(xΨ ̄ −m1(u))
Ψ ̄ m(xΨ ̄ −m1(u′)) ↑ x > 0.
Proof of (i). Letting g(u) =  ̄Ψm+h(θΨ ̄ −1
m (u)), we note that
d
du g(u) ∝ exp{− 1
2 (θ − 1)Ψ ̄ −1
m (u)}[Ψ ̄ −1
m (u)] h
2,
which is decreasing (or increasing) in u ∈ (0, 1) if θ ≤ 1 (or if θ > 1 and h = 0), proving
the desired result.
Proof of (ii). The proof is very similar to that of part (i). Let h(u) = Ψ ̄ m+h,n(θΨ ̄ −1
m,n(u)).
Then, we note that,
d
du h(u) ∝ 1 + Ψ ̄ −1
m,n(u)
1 + θΨ ̄ −m,1n(u)
! m+n
2 Ψ ̄ −1
m,n(u)
1 + θΨ ̄ −m,1n(u)
!h
2
, which is decreasing (or increasing) in u ∈ (0, 1) if θ ≤ 1 (or if θ > 1 and h = 0), proving
the desired result.
Proof of (iii). Let ψm(x) be the density of Ψm. Since the density of θ−1χ2
m, which is
θψm(xθ), is totally positive of order 2 (TP2) in (x, 1/θ), its survival function Ψ ̄ m(xθ) is also
TP2 in (x, 1/θ) (see, e.g., Karlin (1968)). In other words, for any fixed 0 < θ < θ′ < ∞,
the ratio Pr(θ−1χ2
m ≥ x)/Pr(θ′−1χ2
m ≥ x) = Ψ ̄ m(xθ′)/Ψ ̄ m(xθ) is decreasing in x > 0, from
which the desired result follows.
Now, we are ready to prove Lemma 2.
Proof of Lemma 2: Noting that
X2
i | X−i
d= τiEJi (τiχ2
1+2Ji ),
35

with the expectation taken with respect to Ji | X−i ∼ Poisson(λ(X−i)/2), we have
Pr(P ̈i < u | X ̃ −i)
u = Pr( 1
τi X 2
i ≥ Ψ ̄ −1
1 (u) | X−i)
u
= EJi|X−i
Pr(χ2
1+2Ji ≥  ̄Ψ−1(u))
u = EJi|X−i
Ψ ̄ 1+2Ji(Ψ ̄ −1(u))
u . (3)
This is decreasing in u ∈ (0, 1), since  ̄Ψ1+2Ji(Ψ ̄ −1(u)) is concave in (0,1) (from Result 1 (i)),
for any fixed X−i and hence for any fixed P−i. Thus the fact that P ̈i satisfies Condition
1a, for each i, in Setting 1 is proved.
The fact that the P ̈i’s defined in Setting 2 satisfies Condition 1b is given below.
For any 0 < u < u′ < 1, we have the following, having expressed (P ̈i, P−i) in terms of
(Xi, X−i),
Pr(P ̈i ≤ u′, g(P−i) ≥ t)
=E
n
Pr(P ̈i ≤ u′ | X−i, V )1(g(X−i, V ) ≥ t)
o
= E Pr χ2
1+2Ji ≥ V Ψ ̄ −1
1,ν(u′) 1(g(X−i, V ) ≥ t)
= E Ψ ̄ 1+2Ji V Ψ−1
1,ν(u′) 1(g(X−i, V ) ≥ t), (4)
with the expectation taken with respect to (V, Ji, Xi). This expectation, when taken with
respect to V , conditionally given (Ji, X−i), equals
EV
( Ψ ̄ 1+2Ji V Ψ ̄ −1
1,ν (u′)
Ψ ̄ 1+2Ji V  ̄Ψ−1
1,ν (u)
Ψ ̄ 1+2Ji V Ψ ̄ −1
1,ν(u) 1(g(X−i, V ) ≥ t)
)
≤ EV Ψ ̄ 1+2Ji V Ψ ̄ −1
1,ν (u′)
EV Ψ ̄ 1+2Ji V Ψ ̄ −1
1,ν (u) EV Ψ ̄ 1+2Ji V  ̄Ψ−1
1,ν(u) 1((g(X−i, V ) ≥ t)
=
Ψ ̄ 1+2Ji,ν (Ψ ̄ −1
1,ν (u′))
Ψ ̄ 1+2Ji,ν (Ψ ̄ −1
1,ν (u)) EV Ψ ̄ 1+2Ji V Ψ ̄ −1
1,ν(u) 1((g(X−i, V ) ≥ t) .
≤ u′
u EV Ψ ̄ 1+2Ji V Ψ ̄ −1
1,ν(u) 1(g(X−i, V ) ≥ t) (5)
The first inequality in 5 follows first noting that Ψ ̄ 1+2Ji V Ψ ̄ −1
1,ν (u′) /Ψ ̄ 1+2Ji V Ψ ̄ −1
1,ν(u) and
1(g((X−i, V ) ≥ t) are, respectively, increasing (from Result 1 (iii)) and decreasing in V ,
36

and then applying Kimball’s inequality. The last inequality follows from Result 1 (ii), since
Ψ ̄ 1+2Ji,ν (Ψ ̄ −1
1,ν(u)) is concave in (0, 1).
Taking expectation with respect to (Ji, X−i) on both sides of 5, we have
Pr(Pi ≤ u′, g(P−i) ≥ t) ≤ u′
u Pr(Pi ≤ u, g(P−i) ≥ t),
the desired decreasing property of Pr(Pi ≤ u, g(P−i) ≥ t)/u in u ∈ (0, 1).
8 Appendix B
This section includes further figures visualized in simulations settings and the real data
analysis that have been omitted in the main paper.
37

IAR(0.7) AR(0.7) Equi(0.7)
Figure 6: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
mean testing of d = 40 parameters. Methods compared are SBH1 method (Circle and
black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
38

IAR(0.3) AR(0.3) Equi(0.3)
Figure 7: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
mean testing of d = 100 parameters. Methods compared are SBH1 method (Circle and
black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
39

IAR(0.7) AR(0.7) Equi(0.7)
Figure 8: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
mean testing of d = 100 parameters. Methods compared are SBH1 method (Circle and
black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
40

Block Diagonal
Sparse
Prefixed Corr 1
Figure 9: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
mean testing of d = 100 parameters. Methods compared are SBH1 method (Circle and
black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
41

IAR(0.7) AR(0.7) Equi(0.7)
Figure 10: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
variable selection from d = 40 parameters. Methods compared are SBH1 method (Circle
and black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
42

Block Diagonal
Sparse
Prefixed Corr 1
Figure 11: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
variable selection from d = 40 parameters. Methods compared are SBH1 method (Circle
and black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
43

IAR(0.3) AR(0.3) Equi(0.3)
Figure 12: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
variable selection from d = 100 parameters. Methods compared are SBH1 method (Circle
and black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
44

IAR(0.7) AR(0.7) Equi(0.7)
Figure 13: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
variable selection from d = 100 parameters. Methods compared are SBH1 method (Circle
and black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
45

Block Diagonal
Sparse
Prefixed Corr 1
Figure 14: Simulated Power (left column), simulated FDR (middle column) for fixed null
proportion and simulated power (right column) for fixed signal strength, displayed for
variable selection from d = 100 parameters. Methods compared are SBH1 method (Circle
and black), SBH2 method (Triangle point up and red), GSBH1 method (Plus and green),
GSBH2 (Cross and blue), GSBH3 (Diamond and light blue), GSBH4 (Triangle point
down and purple), GSBH5 (Square cross and yellow), GSBH6 (Star and grey), BH
(Diamond plus and black), BY (Circle plus and red), dBH (Triangles up and down and
green) and dBY (Square plus and blue)
46

IAR(0.7) AR(0.7) Equi(0.7)
Figure 15: Simulated Power (left column) and simulated FDR (right column) displayed
for knockoff-assisted variable selection from d = 40 parameters at a level of α = 0.2.
Methods compared are BH method (Circle and black), BBH method (Triangle point up
and red), ABBH method (Plus and green), SBBH1 (Cross and blue), SBBH2 (Diamond
and light blue), SBBH3 (Triangle point down and purple), SBBH4 (Square cross and
yellow), SBBH5 (Star and grey), Knockoff (Diamond plus and black), Rev-BBH (Circle
plus and red) and BBY (Triangles up and down and green)
47

Block Diagonal
Sparse
Figure 16: Simulated Power (left column) and simulated FDR (right column) displayed
for knockoff-assisted variable selection from d = 40 parameters at a level of α = 0.2.
Methods compared are BH method (Circle and black), BBH method (Triangle point up
and red), ABBH method (Plus and green), SBBH1 (Cross and blue), SBBH2 (Diamond
and light blue), SBBH3 (Triangle point down and purple), SBBH4 (Square cross and
yellow), SBBH5 (Star and grey), Knockoff (Diamond plus and black), Rev-BBH (Circle
plus and red) and BBY (Triangles up and down and green)
48

IAR(0.3) AR(0.3) Equi(0.3)
Figure 17: Simulated Power (left column) and simulated FDR (right column) displayed
for knockoff-assisted variable selection from d = 40 parameters at a level of α = 0.1.
Methods compared are BH method (Circle and black), BBH method (Triangle point up
and red), ABBH method (Plus and green), SBBH1 (Cross and blue), SBBH2 (Diamond
and light blue), SBBH3 (Triangle point down and purple), SBBH4 (Square cross and
yellow), SBBH5 (Star and grey), Knockoff (Diamond plus and black), Rev-BBH (Circle
plus and red) and BBY (Triangles up and down and green)
49

IAR(0.7) AR(0.7) Equi(0.7)
Figure 18: Simulated Power (left column) and simulated FDR (right column) displayed
for knockoff-assisted variable selection from d = 40 parameters at a level of α = 0.1.
Methods compared are BH method (Circle and black), BBH method (Triangle point up
and red), ABBH method (Plus and green), SBBH1 (Cross and blue), SBBH2 (Diamond
and light blue), SBBH3 (Triangle point down and purple), SBBH4 (Square cross and
yellow), SBBH5 (Star and grey), Knockoff (Diamond plus and black), Rev-BBH (Circle
plus and red) and BBY (Triangles up and down and green)
50

Block Diagonal
Sparse
Figure 19: Simulated Power (left column) and simulated FDR (right column) displayed
for knockoff-assisted variable selection from d = 40 parameters at a level of α = 0.1.
Methods compared are BH method (Circle and black), BBH method (Triangle point up
and red), ABBH method (Plus and green), SBBH1 (Cross and blue), SBBH2 (Diamond
and light blue), SBBH3 (Triangle point down and purple), SBBH4 (Square cross and
yellow), SBBH5 (Star and grey), Knockoff (Diamond plus and black), Rev-BBH (Circle
plus and red) and BBY (Triangles up and down and green)
51

IAR(0.3) AR(0.3) Equi(0.3)
Figure 20: Simulated Power (left column) and simulated FDR (right column) displayed
for knockoff-assisted variable selection from d = 40 parameters at a level of α = 0.05.
Methods compared are BH method (Circle and black), BBH method (Triangle point up
and red), ABBH method (Plus and green), SBBH1 (Cross and blue), SBBH2 (Diamond
and light blue), SBBH3 (Triangle point down and purple), SBBH4 (Square cross and
yellow), SBBH5 (Star and grey), Knockoff (Diamond plus and black), Rev-BBH (Circle
plus and red) and BBY (Triangles up and down and green)
52

IAR(0.7) AR(0.7) Equi(0.7)
Figure 21: Simulated Power (left column) and simulated FDR (right column) displayed
for knockoff-assisted variable selection from d = 40 parameters at a level of α = 0.05.
Methods compared are BH method (Circle and black), BBH method (Triangle point up
and red), ABBH method (Plus and green), SBBH1 (Cross and blue), SBBH2 (Diamond
and light blue), SBBH3 (Triangle point down and purple), SBBH4 (Square cross and
yellow), SBBH5 (Star and grey), Knockoff (Diamond plus and black), Rev-BBH (Circle
plus and red) and BBY (Triangles up and down and green)
53

Block Diagonal
Sparse
Figure 22: Simulated Power (left column) and simulated FDR (right column) displayed
for knockoff-assisted variable selection from d = 40 parameters at a level of α = 0.05.
Methods compared are BH method (Circle and black), BBH method (Triangle point up
and red), ABBH method (Plus and green), SBBH1 (Cross and blue), SBBH2 (Diamond
and light blue), SBBH3 (Triangle point down and purple), SBBH4 (Square cross and
yellow), SBBH5 (Star and grey), Knockoff (Diamond plus and black), Rev-BBH (Circle
plus and red) and BBY (Triangles up and down and green)
54

Figure 23: Dark blue indicates protease positions that appear in the treatment-selected
mutation (TSM) panel for the PI class of treatments, while orange indicates positions
selected by the method that do not appear in the TSM list. FDR was controlled at
α = 0.05
55

Figure 24: Dark blue indicates protease positions that appear in the treatment-selected
mutation (TSM) panel for the PI class of treatments, while orange indicates positions
selected by the method that do not appear in the TSM list. FDR was controlled at
α = 0.1
56

Figure 25: Dark blue indicates protease positions that appear in the treatment-selected
mutation (TSM) panel for the PI class of treatments, while orange indicates positions
selected by the method that do not appear in the TSM list. FDR was controlled at
α = 0.2
57

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:24.422Z
- **Text Length:** 67208 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 57 of 57
