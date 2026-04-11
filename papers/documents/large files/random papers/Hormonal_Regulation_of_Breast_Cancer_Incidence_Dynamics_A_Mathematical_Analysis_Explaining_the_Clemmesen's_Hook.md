# PDF Document: Mirzaei and Yang - 2025 - Hormonal Regulation of Breast Cancer Incidence Dynamics A Mathematical Analysis Explaining the Clem.pdf

**File Path:** Mirzaei and Yang - 2025 - Hormonal Regulation of Breast Cancer Incidence Dynamics A Mathematical Analysis Explaining the Clem.pdf

**Processed Date:** 2026-02-10T18:15:18.407Z

**File Size:** 1587.87 KB

**Total Pages:** 22

**Extracted Pages:** 22

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3652

**Title:** Hormonal Regulation of Breast Cancer Incidence Dynamics: A Mathematical Analysis Explaining the Clemmesen's Hook

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

HORMONAL REGULATION OF BREAST CANCER INCIDENCE
DYNAMICS: A MATHEMATICAL ANALYSIS EXPLAINING THE
CLEMMESEN’S HOOK
Navid Mohammad Mirzaei1,* and Wan Yang1,2,*
1Department of Epidemiology, Mailman School of Public Health, Columbia University, New York, New York, USA 2 Herbert Irving Comprehensive Cancer Center (HICCC), Columbia University Irving Medical Center, New York, New York, USA
*Corresponding Authors: nm3519@cumc.columbia.edu (NM); wy2202@cumc.columbia.edu (WY)
ABSTRACT
Clemmesen’s hook refers to a commonly observed slowdown and rebound in breast cancer incidence around the age at menopause. It suggests a shift in the underlying carcinogenic dynamics, but the mechanistic basis remains poorly understood. Building on our previously developed Extended Multistage Clonal Expansion Tumor (MSCE-T) model, we perform a theoretical analysis to determine the conditions under which Clemmesen’s hook would occur. Our results show that Clemmesen’s hook can be quantitatively exp-
lained by time-specific changes in the proliferative and apoptotic balance of early-stage mutated cell populations, corresponding to the decline in progesterone levels and progesterone-driven proliferation due to reduced menstrual cycles preceding menopause, and changing dominant carcinogenic impact from alternative growth pathways post-menopause (e.g., adipose-derived growth signals). In contrast, variation in last-stage clonal dynamics cannot effectively reproduce the observed non-monotonic inci-
dence pattern. Analytical results further demonstrate that midlife incidence dynamics corresponding to the hook are governed primarily by intrinsic proliferative processes rather than detection effects. Overall, this study provides a mechanistic and mathematical explanation for Clemmesen’s hook and establishes a quantitative framework linking hormonal transitions during menopause to age-specific breast cancer incidence curve. Keywords: Clemmesen’s hook, Breast Cancer, Multistage Clonal Expansion, -
Menopause.
1 Introduction
Breast cancer is the most diagnosed cancer and the main cause of cancer mortality among females worldwide [1]. The age-specific incidence curves of breast cancer often show a distinctive transition around the menopausal transition (approximately ages 45–55): a reduction and rebound in the slope known as Clemmesen’s hook, first noticed by the Danish epidemiologist Johannes Clemmesen [2]. This “hook”–visible across cohorts and populations–disrupts the monotonic age patterns and suggests an underlyin-
g driver that acts differentially around the age at menopause [3, 4]. Understanding the origin of this inflection is essential, because the changes in breast cancer risk around menopause in response to the menopausal perturbation (e.g. changing hormonal levels) can help reveal breast cancer development mechanisms for guiding breast cancer prevention and interventions.
Recent epidemiological and biological studies point to ovarian hormones—particularly progesterone—as a causal factor of breast cancer [5, 6, 7]. The number of ovulatory menstrual cycles during a person’s lifetime, rather than cumulative estrogen exposure alone, has emerged as the dominant determinant of breast cancer risk [5]. For each menstrual cycle, progesterone increases during the luteal-phase, stimulating proliferation of mammary stem and progenitor cells through paracrine RANKL and WNT4 sig-
naling, and in turn increases the probability of replication errors and long-term mutational accumulation [5]. Large-scale meta-analyses show that breast-cancer risk increases by 5 % for each year earlier at menarche and 3 % for each year later at menopause—consistent with longer exposure to ovulatory cycling and consequently to progesterone surges [8]. Conditions that suppress or eliminate these cycles (e.g., lactation, or ovarian
arXiv:2511.19964v1 [q-bio.PE] 25 Nov 2025

A PREPRINT - NOVEMBER 26, 2025
suppression) have been shown to be protective against breast cancer development, while exogenous progesterone exposure through progestin-based contraception use or combined estrogen–progestin menopausal therapy elevates breast cancer risk [5, 9]. Whereas earlier studies suggested a direct carcinogenic role for estrogen [10, 11], more recent evidence indicates that unlike progesterone, estrogen alone appears to be permissive rather than causal, increasing the risk for estrogen receptor positive (ER-
-positive) cancer types through upregulating the progesterone signaling or having milder proliferative effects on progenitors (i.e., unlikely to be causal) [6, 5]. Given these new lines of evidence and the changes in progesterone levels around menopause, we hypothesize that changing progesterone levels is a major driver of the Clemmesen’s hook. That is, the age–incidence curve around menopause (between the ages 45 to 55) is due to the decline of menstruation frequency and progesterone exposure whi-
ch reduces the proliferation of progenitor cells [8, 6, 5].
Mathematical models of carcinogenesis provide an analytic tool to examine cancer incidence trends and the underlying mechanisms. Among these, models based on the Multistage Clonal Expansion (MSCE) framework stand out for their ability to capture how mutation accumulation, clonal growth, and malignant transformation jointly shape age-specific incidence curves. Armitage and Doll laid out the foundation by introducing the theory of multistage carcinogenesis in 1954 [12], and later in 1979 and 1981 Mo-
olgavkar et al. improved it by introducing stage-wise clonal expansion dynamics to the model [13, 14]. The MSCE model structure includes initiation, promotion, and malignant conversion, and such models have been shown to replicate various age-dependent cancer incidence curves. However, traditional MSCE models are unable to capture non-monotonic trends and some extensions have to be made depending on the desired functionality such as considering time-dependent parameters to account for evolving ris-
k factors [15, 16, 17] or enhancing the model structure by explicitly incorporating detection-related dynamics [17]. Clemmesen’s hook represents one such non-monotonic incidence pattern, warranting some model refinements to accurately reproduce its characteristic slowdown and rebound around ages 45–55 in age-specific breast cancer incidence curve.
To test our hypothesis that reduced progesterone levels shape the incidence pattern (i.e., Clemmesen’s hook) around menopause, we perform a rigorous mathematical analysis of the Multistage Clonal Expansion Tumor (MSCE-T) model, an extended MSCE model we previously developed to distinguish apparent (detection-related) and true increases in cancer risk [17]. We perform a theoretical analysis of the MSCE-T model as well as numerical experiments to determine the conditions under which Clemmesen’s hook-
 would occur. Our theoretical and numerical analyses consistently demonstrate that the observed age-specific transition (i.e. the hook) can arise from biologically plausible shifts in the effective proliferation rates—consistent with the decline in progesterone exposure and altered hormonal profile during the menopausal transition. We also investigate the effect of detection dynamics on the emergence of Clemmesen’s hook. Moreover, we describe the biological pathways embedded in the MSCE-T model th-
at are inherently incapable of generating such transitional behavior, thereby clarifying the model’s mechanistic scope in generating the hook phenomenon and more broadly deriving the lower bound of mutational steps needed to produce the observed breast cancer age-incidence curve. Together, this study provides an additional layer of quantitative evidence supporting the proposed mechanistic explanation for Clemmesen’s hook.
2 Data and the Model
2.1 Breast Cancer Incidence Data and Clemmesen’s hook
Breast cancer incidence data for Denmark, Sweden, Finland and Norway are sourced from the NORDCAN database [18, 19], and data for the U.S. are sourced from the Surveillance, Epidemiology, and End Results (SEER) program [20]. The NORDCAN database provides the data only in 5-year age groups, while annual data are available from SEER. Using SEER data, we computed the incidence rate by 1-year age interval for each 1-year birth cohort. Note the SEER incidence rates are aggregated to 5-year age interval-
 in Figure 1 for clearer visuals, but 1-year-age-specific data are used in our numerical experiments (section 8) when fitting the model.
Figure 1 shows the cancer incidence for the five countries with data, next to the rate of change (i.e. slope). Clemmesen’s hook is evident for all five countries and for all birth cohorts. We can see a consistent slowdown and rebound in all of the incidence plots within the 45-55 years window. This is further confirmed by the sudden decrease and increase of the slopes within the same window.
2

A PREPRINT - NOVEMBER 26, 2025
(A)
(B)
(C)
(D)
(E)
Figure 1: Breast Cancer incidence and incidence slope across different registries. Incidence and incidence slope for (A) Denmark, (B) Sweden, (C) Finland, (D) Norway, and (E) SEER for the United States population.
3

A PREPRINT - NOVEMBER 26, 2025
2.2 The Model
Considering three rate-limiting driver gene mutations for Breast cancer occurrence [21, 22, 23] we extended the classic MSCE model to MSCE-T model by incorporating the detection dynamics [17]. A detailed model derivation is provided in our previous work [17] and summarized in the Supplemental Materials of this article. The derivation procedure traces the stochastic progression of stem cells as they evolve from normal to malignant states through the sequential accumulation of mutations. Each stage -
i is modeled as a mutation-birth–death process in which cells may divide (at a rate αi > 0), die (at a rate βi > 0), or advance to the next stage via mutation (at a rate μi > 0). By incorporating the transition probabilities among these events, the model quantifies the likelihood that a population of malignant cells reaches a detectable size by a given age (i.e. detection dynamics). The model is given by the following ODE system
x ̇ 1 = μ0N0 x1(x3 − 1), (1)
x ̇ 2 = −μ0N0 x4, (2)
x ̇ 3 = β1 − (α1 + β1 + μ1)x3 + μ1x3x5 + α1x2
3, (3) x ̇ 4 = −(α1 + β1 + μ1)x4 + μ1x4x5 + μ1x3x6 + 2α1x3x4, (4)
x ̇ 5 = β2 − (α2 + β2 + μ2)x5 + μ2f (t) x5 + α2x2
5, (5)
x ̇ 6 = −(α2 + β2 + μ2)x6 + μ2f ′(t) x5 + μ2f (t) x6 + 2α2x6x5, (6)
with initial condition
x1(0), x2(0), x3(0), x4(0), x5(0), x6(0) = (1, 0, 1, 0, 1, 0).
and function f which incorporates detection effects
f (t) = 1 − 1 − e−α3 t Mt−1
. (7)
where α3 > 0 is the net proliferation rate of tumor cells and Mt is the number of malignant cells required for detection at age t. Function (7) gives the probability of having less than Mt malignant cells at age t assuming a simple birth process. For derivation detail and variable/parameter definitions refer to the supplementary materials. For convenience set
a(t) := 1 − e−α3 t ∈ (0, 1), p(t) := Mt − 1 > 0, L(t) := | ln a(t)| > 0. (8)
The state variables x1, x3 and x5 are survival probabilities and h(t) := x2(t) is the hazard of cancer incidence. Also, x4 = x ̇ 3 and x6 = x ̇ 5.
Remark 2.1. From now on we assume parameters are piece-wise continuous and bounded functions in time. We are interested in knowing the conditions under which these parameters can produce a midlife transition resembling the Clemmesen’s hook for Breast cancer age-specific incidence.
Remark 2.2. Since normal mammary cells are in an inactive state until puberty [24], the system (1)-(6) has a zero right hand side (i.e., no carcinogenesis kinetics take place) until the age at menarche (∼ 13 years of age). This does not affect the following proofs, but whenever necessary we will make a note.
3 Positivity, invariance, well-posedness, boundedness
Lemma 3.1. Assume αi, βi, μi ≥ 0 and f (t) ∈ [0, 1] for all t ≥ 0. Then the rectangle [0, 1] × [0, 1] is forward invariant for the subsystem (3) and (5), i.e. x3(t), x5(t) ∈ [0, 1] for all t ≥ 0 provided x3(0), x5(0) ∈ [0, 1].
Proof. We verify inward-pointing conditions on each edge. For x3 = 0, (3) gives x ̇ 3 = β1 ≥ 0; for x3 = 1,
x ̇ 3 x3=1 = β1 − (α1 + β1 + μ1) + μ1x5 + α1 = μ1(x5 − 1) ≤ 0 since x5 ≤ 1.
Similarly, for x5 = 0, (5) gives x ̇ 5 = β2 ≥ 0; for x5 = 1,
x ̇ 5 x5=1 = β2 − (α2 + β2 + μ2) + μ2f + α2 = μ2(f − 1) ≤ 0 since f ≤ 1.
Thus the vector field is inward pointing on all faces of [0, 1]2, proving forward invariance.
Lemma 3.2. Assume f, f ′ are continuous and bounded on compact time intervals and the parameters are piecewise continuous and bounded. Then x3, x5 ∈ [0, 1] for all t, and x4, x6 remain bounded on finite time intervals, hence
h′(t) = −μ0N0x4(t) is well-defined and bounded. Moreover, the IVP (1)–(6) admits a unique solution that is continuous on each subinterval where the parameters are continuous.
4

A PREPRINT - NOVEMBER 26, 2025
Proof. The subsystems for x4 and x6 are linear affine with bounded coefficients on any [0, T ]:
x ̇ 6 = q(t) x6(t) + μ2f ′(t) x5(t), x ̇ 4 = c(t) x4(t) + μ1x3(t) x6(t),
with
c(t) = −(α1 + β1 + μ1) + μ1x5(t) + 2α1x3(t), q(t) = −(α2 + β2 + μ2) + μ2f (t) + 2α2x5(t). (9)
Since x3, x5 ∈ [0, 1] and f, f ′ are bounded, c, q are bounded. By integrating factor method,
x6(t) =
Zt
0
Φq(t, s) μ2f ′(s)x5(s) ds, Φq(t, s) := exp
Zt
s
q(u) du ,
hence |x6(t)| ≤ C(T ) R T
0 |f ′|. Likewise,
x4(t) =
Zt
0
Φc(t, s) μ1x3(s)x6(s) ds,
and |x4(t)| ≤ B(T ) R T
0 |x6|. Therefore x4, x6 are bounded on [0, T ] for each T , precluding blow-up and yielding
global well-posedness.
The right-hand side (call it F (x, t)) is a polynomial in x = (x1, . . . , x6) with time-dependent coefficients that are piece-wise continuous and bounded. Hence, for fixed x the mapping t 7→ F (x, t) is measurable in t and continuous in x and for fixed t the mapping x 7→ F (x, t) is C∞ since it is a polynomial in x. Also, x1, x3, x5 ∈ [0, 1] and we
showed earlier that x4 and x6 are bounded. Given that the parameters and f and f ′ are also bounded it results in the existence of a uniform bound for F (x, t) for all x and t. Therefore, the Caratheodory conditions are satisfied for the right-hand side which ensures the existence of a solution in a neighborhood of the initial condition. If we show that it is local Lipschitz in x then the uniqueness of solution is guaranteed [25].
Now, let K be a compact subset of R6 and denote by DxF (t, x) the Jacobian matrix with entries [DxF (t, x)]ij = ∂Fi/∂xj(t, x). By the mean value inequality, for any x, y ∈ K we have
∥F (t, x) − F (t, y)∥ ≤ sup
ζ∈[x,y]
∥DxF (t, ζ)∥ ∥x − y∥, (10)
We now bound ∥DxF (t, ζ)∥ uniformly for ζ ∈ K and t ∈ [0, T ]. Compute the nonzero partial derivatives componentwise from (1)–(6):
∂x1 F1 = μ0N0(x3 − 1), ∂x3 F1 = μ0N0x1;
∂x4 F2 = −μ0N0;
∂x3 F3 = −(α1 + β1 + μ1) + μ1x5 + 2α1x3, ∂x5 F3 = μ1x3;
∂x4 F4 = −(α1 + β1 + μ1) + μ1x5 + 2α1x3, ∂x5 F4 = μ1x4,
∂x3 F4 = μ1x6 + 2α1x4, ∂x6 F4 = μ1x3;
∂x5 F5 = −(α2 + β2 + μ2) + μ2f (t) + 2α2x5;
∂x6 F6 = −(α2 + β2 + μ2) + μ2f (t) + 2α2x5, ∂x5 F6 = μ2f ′(t) + 2α2x6.
All other partial derivatives are zero. For ζ ∈ K we have |ζi| ≤ R, thus
|∂x1 F1| ≤ |μ0N0| (R + 1), |∂x3 F1| ≤ |μ0N0| R,
|∂x4 F2| ≤ |μ0N0|,
|∂x3 F3| ≤ |α1| + |β1| + |μ1| + |μ1|R + 2|α1|R, |∂x5 F3| ≤ |μ1| R,
|∂x4 F4| ≤ |α1| + |β1| + |μ1| + |μ1|R + 2|α1|R, |∂x5 F4| ≤ |μ1| R,
|∂x3 F4| ≤ |μ1| R + 2|α1| R, |∂x6 F4| ≤ |μ1| R,
|∂x5 F5| ≤ |α2| + |β2| + |μ2| + |μ2| sup
t∈[0,T ]
|f (t)| + 2|α2|R,
|∂x6 F6| ≤ |α2| + |β2| + |μ2| + |μ2| sup
t∈[0,T ]
|f (t)| + 2|α2|R, |∂x5 F6| ≤ |μ2| sup
t∈[0,T ]
|f ′(t)| + 2|α2|R.
Hence there exists a constant C > 0 (depending only on the parameters) such that
∥DxF (t, ζ)∥ ≤ C 1 + R + sup
t∈[0,T ]
|f (t)|
| {z }
Mf
+ sup
t∈[0,T ]
|f ′(t)|
| {z } Mf ′
for all ζ ∈ K, t ∈ [0, T ].
5

A PREPRINT - NOVEMBER 26, 2025
Plugging this bound into (10) gives
∥F (t, x) − F (t, y)∥ ≤ C 1 + R + Mf + Mf′ ∥x − y∥ for all x, y ∈ K, t ∈ [0, T ].
Therefore, setting lK (t) ≡ C(1 + R + Mf + Mf′ ) yields lK ∈ L∞([0, T ]) ⊂ L1([0, T ]) and
∥F (t, x) − F (t, y)∥ ≤ lK(t) ∥x − y∥ for t ∈ [0, T ], ∀x, y ∈ K.
Now that the Caratheodory and Lipschitz conditions are satisfied the uniqueness of the solution follows.
Remark 3.3. Note that since αi, βi and μi are piece-wise continuous and bounded, c(t) and q(t) from (9) are L∞
loc;
they may have jump discontinuities but remain bounded.
4 Volterra Representation and Exact Form for f ′(t)
Solving (6) and (4) by integrating factors (with x4(0) = x6(0) = 0) gives
x6(t) =
Zt
0
e
Rt
s q(u) du μ2f ′(s) x5(s) ds, x4(t) =
Zt
0
e
Rt
s c(u) du μ1x3(s) x6(s) ds.
Plugging x6 into x4 and using Fubini/Tonelli on the triangle 0 ≤ r ≤ s ≤ t to swap the order of integration yields a Volterra transform of the first kind:
x4(t) =
Zt
0
K(t, r) f ′(r) dr, K(t, r) := μ1μ2 x5(r)
Zt
r
x3(s) exp
Zs
r
(c + q) du ds. (11)
Differentiating with respect to t gives:
∂tK(t, r) = μ1μ2 x5(r) x3(t) exp
Zt
r
(c + q) du ≥ 0. (12)
Since h′(t) = −μ0N0x4(t),
h′(t) = A
Zt
0
K(t, r)f ′(r) dr, h′′(t) = A
Zt
0
∂tK(t, r) f ′(r) dr, A := −μ0N0 < 0. (13)
Let a, p be as in (8). For t > 0 one has a ∈ (0, 1) and L = | ln a| = − ln a > 0. Differentiating a = 1 − e−α3t,
d
dt − α3t = −(α3 + tα′
3), a′(t) = e−α3t (α3 + tα′
3).
Hence
a′(t)
a(t) = e−α3t
1 − e−α3t α3 + tα′
3 . (14)
Using d
dt ap = ap p′ ln a + p a′
a and f = 1 − ap,
f ′(t) = − a(t)p(t) p′(t) ln a(t) + p(t) a′(t)
a(t) = − e−pL −p′L + p a′
a . (15)
5 Insensitivity of h(t) to scaling Mt
Fix c > 0 and a midlife window [ta, tb] ⊂ [0, T ] with T being some age well after the menopause window (say T ≥ 60). For brevity write
pc(t) = c p(t) where p(t) = Mt − 1 > 0. and let fc, hc be associated with pc(t). Recall that
a(t) = 1 − e−α3(t)t, L(t) = | ln a(t)| > 0,
and set
m(t) := min{p(t), pc(t)} = min{1, c} p(t), pmin := inf
r∈[ta ,tb ]
p(r) > 0.
Define the midlife parameters
ε1 := sup
r∈[ta ,tb ]
L(r), ε2 := sup
r∈[ta ,tb ]
e−α3 (r)r
1 − e−α3(r)r α3(r) + r|α′
3(r)| .
Note that ε1 and ε2 are very small for reasonably large r (say r > 20).
6

A PREPRINT - NOVEMBER 26, 2025
5.1 Pointwise control of fc′ − f ′
Lemma 5.1. Fix r ∈ [ta, tb]. With R(r) := a′(r)/a(r), L(r) = | ln a(r)| and the definitions above, the following bound holds:
|f ′
c(r) − f ′(r)| ≤ |c − 1|
e
"
p(r)
m(r) |p′(r)| L(r) + p(r)|R(r)|
| {z }
(I )
+ |p′(r)|
m(r) + p(r)
L(r)m(r) |R(r)|
| {z }
(I I )
#
. (16)
Proof. From (15) we have,
f ′(r) = −a(r)p(r) − p′(r)L + p(r)R(r) , f ′
c(r) = −a(r)pc(r) − p′
c(r)L + pc(r)R(r) .
So, for the fixed r by adding and subtracting some terms and using the triangle inequality we get
|f ′
c − f ′| ≤ |apc − ap| · |p′| L + p|R| + apc |p′
c − p′| L + |pc − p| |R| . (17)
By the mean value theorem, there exists θ between p and pc such that
|apc − ap| = aθL |pc − p| ≤ am L |pc − p|.
By setting x := L > 0 and maximizing x 7→ xe−mx at x = 1/m we get
amL ≤ 1
em,
Thus
|apc − ap| ≤ |pc − p|
e m = |c − 1| p
em . Insert this into the first term of (17) to bound it by
|c − 1|
e ·p
m |p′| L + p|R|
| {z }
(I )
.
Now let’s bound the second term in (17). Note (p′c − p′) = (c − 1)p′, (pc − p) = (c − 1)p and apc ≤ 1. Therefore the second term is bounded by
apc |p′
c − p′|L + |pc − p||R| ≤ |c − 1| |p′| L + p|R| .
Now split this |c − 1|(· · · ) to extract explicit 1/m factors that we will use to produce the 1/pmin term:
|c − 1| |p′| L + p|R| = |c − 1| |p′|
m · (mL) + p
L m · (L|R| m) .
Using the bounds mL ≤ 1/(e) (shown above) and L ≥ 0 we get the coarse inequalities (we only need upper bounds)
|p′|
m · (mL) ≤ |p′|
m ·1
e, p
L m · (L|R| m) ≤ p
L me |R|
Collecting and merging constants, we obtain a bound of the form
(second term) ≤ |c − 1|
e
|p′|
m+ p
L m |R| ,
which is the term denoted (II) in the statement. Summing the two contributions yields (16):
|f ′
c − f ′| ≤ |c − 1|
e
p
m |p′|L + p|R| + |p′|
m+ p
Lm |R| .
7

A PREPRINT - NOVEMBER 26, 2025
Remark 5.2. Use m = min{1, c} p, hence p/m ≤ κ(c) := max{1, 1/c} and 1/m = 1/(min{1, c}p). Also L ≤ ε1, |R| ≤ ε2. Define Lmin := inf[ta,tb] L(r). Replace these into (16) to get a more specific bound.
|f ′
c − f ′| ≤ |c − 1|
e κ(c) |p′|ε1 + pε2 + 1
min{1, c}p |p′| + pε2
Lmin
. (18)
which can be expanded as
|f ′
c − f ′| ≤ |c − 1|
e
"
κ(c) |p′|ε1 + p ε2
| {z }
(I)
+ |p′|
min{1, c} p
| {z }
(II)
+ ε2
min{1, c} Lmin
| {z }
(III)
#
.
Turn this into the desired integrand by folding (II)–(III) into a single C2
p term and keeping (I) as the C1(|p′|ε1 + pε2)
part, With C1 := κ(c)
e (a constant depending only on c). For (II), use |p′(r)| ≤ sup[ta,tb] |p′| =: Mp′ to get
|c − 1|
e · |p′|
min{1, c} p ≤ |c − 1| 1
p
Mp′
e min{1, c}
| {z }
=:C2a
.
For (III), use p(r) ≤ sup[ta,tb] p =: Mp so that
ε2
min{1, c} Lmin
= Mp ε2
min{1, c} Lmin
·1
Mp
≤ Mp ε2
min{1, c} Lmin
·1
p = C2b
p,
with
C2b := Mp ε2
e min{1, c} Lmin
.
Combining C2a and C2b into C2 := C2a + C2b and collecting constants gives
|f ′
c − f ′| ≤ |c − 1|
h
C1 |p′|ε1 + p ε2 + C2
p
i
. (19)
Theorem 5.3. Under the hypotheses of Lemma 5.1 and knowing that K(t, r) is piece-wise continuous and bounded on [ta, tb]2, we have the bound
sup
t∈[ta ,tb ]
|hc(t) − h(t)| ≤ |c − 1| C ε1 + ε2 + 1
pmin
, (20)
where the constant C depends only on the model constants and the window length:
C := |A| ∥K∥∞;[ta,tb]2 (T − t0) Ce,
and Ce depends only on c, sup[ta,tb] |p′| and sup[ta,tb] p (but not on pmin). Hence
sup
t∈[ta ,tb ]
|hc(t) − h(t)| = O |c − 1| [ε1 + ε2 + 1/pmin] .
Proof. Start from the Volterra expression for the derivative (valid because pc = p on [0, ta) is assumed, or else we localize to the window as explained earlier):
h′
c(t) − h′(t) = A
Zt
ta
K(t, r) [f ′
c(r) − f ′(r)] dr,
hence, using |K(t, r)| ≤ ∥K∥∞;[ta,tb]2 ,
sup
t∈[ta ,tb ]
|h′
c(t) − h′(t)| ≤ |A| ∥K∥∞;[ta,tb]2
Z tb
ta
|f ′
c(r) − f ′(r)| dr.
Integrate once in time:
|hc(t) − h(t)| =
Zt
ta
(h′
c(s) − h′(s)) ds ≤ (tb − ta) sup
s∈[ta ,tb ]
|h′
c(s) − h′(s)|.
8

A PREPRINT - NOVEMBER 26, 2025
Combining,
sup
t∈[ta ,tb ]
|hc(t) − h(t)| ≤ |A| ∥K∥∞;[ta,tb]2 (tb − ta)
Z tb
ta
|f ′
c(r) − f ′(r)| dr.
Now apply the refined pointwise bound (19) inside the integral:
Z tb
ta
|f ′
c − f ′| ≤ |c − 1|
Z tb
ta
h
C1 |p′|ε1 + pε2 + C2
p
i
dr.
Therefore
Z tb
ta
|f ′
c − f ′| ≤ |c − 1| (tb − ta) C1 Mp′ ε1 + Mp ε2 + C2
pmin
.
Substitute into the previous inequality for sup |hc − h|:
sup
t∈[ta ,tb ]
|hc(t) − h(t)| ≤ |c − 1| |A| ∥K∥∞ (tb − ta)2 C1 Mp′ ε1 + Mp ε2 + C2
pmin
.
Now absorb the (tb − ta) factors and Mp, Mp′ into the constant C to obtain the stated form (20):
sup
t∈[ta ,tb ]
|hc(t) − h(t)| ≤ |c − 1| C ε1 + ε2 + 1
pmin
.
Caution: Notice that the term Mp ε2 might be problematic generally (i.e., very large). However, under the circumstances of this study the term is small. Given that we are interested in midlife window of [45, 55] relevant to the Clemmesen’s hook effect, ε2 is at most O(e−45) if not smaller. Even for the supremum of the number of tumor cells at diagnosis
within the same window (i.e., Mp) which for breast cancer is at most O(108), the product is still very small.
5.2 Insensitivity of h(t) to scaling α3
Theorem 5.4. Let [ta, tb] ⊂ (0, T ] be a midlife window and let p(t) = Mt−1 > 0 be fixed. Assume α3, αe3 ∈ C1([0, T ])
are bounded and coincide outside the window. Let f, h and fe, eh denote the functions and hazards associated with the same initial data and model parameters as in (1)–(6), but using α3 and αe3 respectively in the definition of a(t) and f (t). Let a, L, R be defined as in the beginning of the section and similarly ea, Le, Re with αe3. Define ε1, ε2 as before
ε1 := sup
r∈[ta ,tb ]
L(r), ε2 := sup
r∈[ta ,tb ]
e−α3 (r)r
1 − e−α3(r)r α3(r) + r|α′
3(r)| .
Then there exists a constant C > 0, depending only on the model parameters, ∥p∥L∞([ta,tb]), ∥p′∥L∞([ta,tb]), the
window length (tb − ta) and uniform bounds on α3, α′3, but not on ε1, ε2, such that
sup
t∈[ta ,tb ]
|
eh(t) − h(t)| ≤ C (ε1 + ε2) ∥αe3 − α3∥L∞([ta,tb]) + ∥αe′
3 − α′
3∥L∞([ta,tb]) . (21)
In particular, on a midlife window where ε1, ε2 ≪ 1 (i.e. when t is large and α3 varies slowly), even order-one changes in α3 restricted to [ta, tb] induce only negligible changes in the hazard h(t) on that window.
Proof. We first obtain a Lipschitz bound for f ′(t) with respect to α3 and α′3 on the midlife window, then propagate it to h via the Volterra representation. Recall from (15) that
f ′(t) = −a(t)p(t) p′(t)L(t) + p(t)R(t) = −e−p(t)L(t) −p′(t)L(t) + p(t)R(t) .
For each fixed t, the quantity f ′(t) depends on α3(t) and α′3(t) only through the composite map
(α3(t), α′
3(t)) 7−→ a(t) 7−→ L(t), R(t) 7−→ f ′(t),
with p, p′ fixed. Since all parameters are bounded and a(t) ∈ (0, 1), this map is C1 in (α3, α′3) on a compact set (the
range of α3, α′3 on [ta, tb]). Hence there exist partial derivatives ∂α3 f ′(t), ∂α′
3 f ′(t) that are continuous and bounded on [ta, tb].
9

A PREPRINT - NOVEMBER 26, 2025
Differentiate f ′ with respect to α3, keeping p, p′ fixed. Writing E(t) := e−pL for simplicity, we get
f ′(t) = E(t) p′(t)L(t) − p(t)R(t) ,
and thus
∂α3 f ′(t) = (∂α3 E) p′L − pR + E
h
p′ ∂α3 L − p ∂α3 R
i
.
A similar result holds for ∂α′
3 f ′(t), with ∂α′
3 L and ∂α′
3 R in place of ∂α3 L, ∂α3 R. By definition of E and L,
∂α3 E = −p E ∂α3 L.
Moreover, from L = − ln a and a = 1 − e−α3t we have
∂α3 L(t) = − 1
a(t) ∂α3 a(t) = − te−α3(t)t
1 − e−α3(t)t ,
so |∂α3 L(t)| = t e−α3t
1−e−α3t . Similarly,
R(t) = a′(t)
a(t) = e−α3(t)t
1 − e−α3(t)t α3(t) + tα′
3(t) ,
one obtains (by chain-rule) the following bounds
|∂α3 R(t)| + |∂α′
3 R(t)| ≤ C0
e−α3 (t)t
1 − e−α3(t)t α3(t) + t|α′
3(t)| ,
where C0 > 0 depends only on uniform bounds for α3, α′3 and t on [ta, tb]. By the definition of ε2, this implies
|∂α3 R(t)| + |∂α′
3 R(t)| ≤ C0 ε2 for all t ∈ [ta, tb].
On the other hand, |L(t)| ≤ ε1 and |R(t)| ≤ ε2 on [ta, tb] by definition of ε1, ε2, and 0 < E(t) ≤ 1. Combining these
bounds in the expression for ∂α3 f ′(t) and the similar expression for ∂α′
3 f ′(t), we obtain
|∂α3 f ′(t)| + |∂α′
3 f ′(t)| ≤ C1(ε1 + ε2) for all t ∈ [ta, tb],
where C1 > 0 depends only on ∥p∥L∞ , ∥p′∥L∞ , bounds on α3, α′3 and the window [ta, tb], but not on ε1, ε2.
Let δα3 := αe3 − α3 and δα′3 := αe′3 − α′3, and let δf ′(t) := fe′(t) − f ′(t). For each fixed t ∈ [ta, tb], the mean value
theorem in R2 applied to the C1 map (α3, α′3) 7→ f ′(t) yields
|δf ′(t)| ≤ |∂α3 f ′(tθ)| + |∂α′
3 f ′(tθ)| |δα3(t)| + |δα′
3(t)|
for some intermediate values of the arguments (which remain in the same bounded set). Using the bound we got earlier, we obtain
|δf ′(t)| ≤ C1(ε1 + ε2) |δα3(t)| + |δα′
3(t)| , t ∈ [ta, tb].
Taking the supremum over t ∈ [ta, tb] yields
sup
t∈[ta ,tb ]
|
fe′(t) − f ′(t)| ≤ C1(ε1 + ε2) ∥αe3 − α3∥L∞([ta,tb]) + ∥αe′
3 − α′
3∥L∞([ta,tb]) . (22)
By the Volterra representation (13) and the assumption that α3 = αe3 on [0, ta) (so the kernels K coincide), we have for t ∈ [ta, tb]:
h′(t) − eh′(t) = A
Zt
ta
K(t, r) f ′(r) − fe′(r) dr,
hence
|h′(t) − eh′(t)| ≤ |A| ∥K∥∞;[ta,tb]2
Z tb
ta
|
fe′(r) − f ′(r)| dr.
Taking the supremum over t ∈ [ta, tb],
sup
t∈[ta ,tb ]
|h′(t) − eh′(t)| ≤ |A| ∥K∥∞;[ta,tb]2 (tb − ta) sup
r∈[ta ,tb ]
|
fe′(r) − f ′(r)|.
10

A PREPRINT - NOVEMBER 26, 2025
Integrating once more in time,
|
eh(t) − h(t)| =
Zt
ta
eh′(s) − h′(s) ds ≤ (tb − ta) sup
s∈[ta ,tb ]
|h′(s) − eh′(s)|,
so that
sup
t∈[ta ,tb ]
|
eh(t) − h(t)| ≤ |A| ∥K∥∞;[ta,tb]2 (tb − ta)2 sup
r∈[ta ,tb ]
|
fe′(r) − f ′(r)|.
Finally, substitute the bound (22) into this inequality and combine the factors |A|, ∥K∥∞;[ta,tb]2 and (tb − ta)2 into a single constant C > 0. This yields
sup
t∈[ta ,tb ]
|
eh(t) − h(t)| ≤ C(ε1 + ε2) ∥αe3 − α3∥L∞([ta,tb]) + ∥αe′
3 − α′
3∥L∞([ta,tb]) ,
which is exactly (21). The “negligible-effect” follows by the fact that ε1, ε2 ≪ 1 on the midlife window and noting that
the right-hand side is then small even for order-one perturbations of α3 and α′3 on the window.
6 Dip and rebound of h′(t)
We now give sufficient conditions for a dip of h′(t) on a midlife window and a rebound later, which amounts to a Clemmesen hook-like behavior in h(t).
6.1 Sufficient conditions for dip and rebound
Consider the initial value problem (1)-(6) along with (7). In the previous section we showed that changes in the detection dynamics localized to the midlife window is not strong enough to produce a realistic transition phase such as Clemmesen’s hook. We now show how to obtain such a hook purely by parameter choices. Recall
x ̇ 4 = c(t) x4(t) + μ1x3(t) x6(t),
where
c(t) := −(α1 + β1 + μ1) + μ1x5(t) + 2α1x3(t) = α1 2x3(t) − 1 − β1 + μ1 x5(t) − 1 .
and h′(t) = A x4(t) with A < 0. A hook in h(t) means:
d
dt (−x4) = −x ̇ 4 is



> 0 (pre-window growth), < 0 (mid-window decline), > 0 (post-window growth).
Equivalently, we want
x ̇ 4 to be



< 0 before ta , > 0 on the window [ta, tb], < 0 after tb.
(⋆)
Since, in general f ′(t) ≤ 0 (given the improvement in detection over time), the inhomogeneous input in
x ̇ 6 = q(t)x6(t) + μ2x5(t)f ′(t), q(t) := −(α2 + β2 + μ2) + μ2f (t) + 2α2x5(t)
is nonpositive. With x6(0) = 0, the Volterra representation of x6 in section 4 gives x6(t) ≤ 0. Given that mutational events are rare the mutation rates μi are typically small. Given that x3 and x5 (survival probabilities) get smaller for later ages we can deduce that |μ1x3x6| is relatively small. Then
x ̇ 4 = c(t) x4(t) + μ1x3(t)x6(4)
| {z }
≤0
≤ c(t) x4(t),
and, when | μ1x3x6| ≪ |c(t)x4|, the sign of x ̇ 4 is dictated by c(t) x4.
At t = 0, x4(0) = 0 and x ̇ 4(0) = μ1x3(0)x6(0) = 0. If f ′(0) < 0 (or shortly after), then x6 < 0 for small t, hence x ̇ 4 ≈ μ1x3x6 < 0, so x4 becomes negative and −x4 > 0 corresponding to the increase in the incidence. In early years, when x3, x5 ≈ 1 for α1 > β1 we get c(t) > 0 which makes c(t)x4 < 0 and consequently x ̇ 4 < 0. These parameters are biologically relevant and bounded. Here as mutations occur in tumor suppressor genes or oncogenes leading to lowered cell death rates (βi) or increas-
ed proliferation rates (αi) respectively, it is most likely that the mutated cells grow (i.e., α1 > β1) following the initial mutation (at the rate μ0).
Now, we investigate the most reasonable parameter choices that could create a midlife dip and rebound.
11

A PREPRINT - NOVEMBER 26, 2025
Proposition 6.1. Let [ta, tb] be a midlife window. Fix t ∈ [ta, tb] with x5(t) < 1 and x3(t) ∈ (0, 1). A necessary condition for c(t) < 0 is
μ1(t) ≥ β1 − α1 (2x3(t) − 1)
1 − x5(t) . (23)
Proof. c(t) < 0 is equivalent to
α1(2x3 − 1) − β1 + μ1(x5 − 1) < 0 ⇐⇒ μ1(1 − x5) > β1 − α1(2x3 − 1).
Since x5 < 1 we may divide by 1 − x5 > 0 to obtain (23).
Note: Numerically and without intervention when the model is fit to the incidence data α1 > β1 but their values are close (see the Numerical Experiment section). Therefore, there is a time t > 0 such that 2x3(t) − 1 ⪅ 1 and β1 − α1(2x3 − 1) > 0. After that the difference gets larger and larger. Given that the denominator is also less than 1 for t > 0 then μ1 likely requires an extreme scale-up to satisfy the necessary condition.
Lemma 6.2. Let μ1, μe1 be such that
μe1(t) ≥ μ1(t) for t ∈ [ta, tb], μe1(t) = μ1(t) for t ∈/ [ta, tb].
Let x3, xe3 be the corresponding solutions with the same initial state at t = ta. Then
xe3(t) ≤ x3(t) for all t ≥ ta. (24)
Proof. Write
f3(x3; t, μ1) := β1 − (α1 + β1 + μ1) x3 + μ1x3x5 + α1x2
3 = β1 − (α1 + β1)x3 − μ1x3(1 − x5) + α1x2
3,
so x ̇ 3 = f3(x3; t, μ1). For any fixed t and x3 ∈ (0, 1] with x5(t) ∈ (0, 1],
∂f3 ∂μ1
(x3; t, μ1) = − x3(1 − x5(t)) ≤ 0.
Thus f3(·; t, μ) is nonincreasing in μ1 pointwise. Let y := xe3 − x3. Then
y ̇ = f3(xe3; t, μe1) − f3(x3; t, μ1) = f3(xe3; t, μe1) − f3(xe3; t, μ1) + f3(xe3; t, μ1) − f3(x3; t, μ1) .
The first bracket is ≤ 0 on [ta, tb] by μe1 ≥ μ1 and equals 0 outside. Using the mean value theorem in x3 and the fact that the following is bounded on any compact x3-interval (in particular on [0, 1])
∂f3 ∂x3
(x3; t, μ1) = −(α1 + β1 + μ1) + μ1x5 + 2α1x3
there exists L > 0 with |f3(xe3; t, μ1) − f3(x3; t, μ1)| ≤ L |y|. Therefore,
y ̇(t) ≤ L y(t), y(ta) = 0,
and Grönwall’s inequality gives y(t) ≤ 0 for all t ≥ ta, i.e. (24).
Lemma 6.3. For any t ≥ tb and any μpost
1 ≥ 0,
c(t) ≤ α1 2x3(t) − 1 − β1. (25)
Hence a necessary condition for c(t) > 0 is
x3(t) > τ := 1
2 + β1
2α1
. (26)
Proof. Since x5(t) ≤ 1, we have μpost
1 (x5(t) − 1) ≤ 0, which implies (25). Rearranging α1(2x3 − 1) − β1 > 0 yields (26).
Proposition 6.4. Suppose that on [ta, tb] we have μe1 ≥ μ1 (relative to a baseline μ1) that is used to achieve c < 0 on [ta, tb] and that the corresponding solution satisfies
xe3(t+
b ) ≤ τ.
Then for every μpost
1 ≥ 0 and every t ≥ tb we have c(t) ≤ 0. In particular, lowering μ1 back to baseline or even below baseline after tb cannot produce c(t) > 0 (no rebound).
12

A PREPRINT - NOVEMBER 26, 2025
Proof. By Lemma 6.2, xe3(t) ≤ xbase
3 (t) for t ≥ ta. At t+
b , xe3(t+
b ) ≤ τ by assumption. By continuity of t 7→ xe3(t)
there exists δ > 0 with xe3(t) ≤ τ on [tb, tb + δ]. For such t, Lemma 6.3 yields
c(t) ≤ α1 2xe3(t) − 1 − β1 ≤ α1(2τ − 1) − β1 = 0.
Hence c(t) ≤ 0 on [tb, tb + δ]. Note that xe3(t) is a survival probability so it is nonincreasing in time so xe3(t) ≤ τ for all t ≥ tb, then c(t) ≤ 0 for all t ≥ tb, which rules out a rebound.
Conclusion: Based on the propositions and lemmas proved above, to begin a dip (i.e., c(t) < 0) in the midlife window we likely need a large increase in μ1, which in turn leads to a smaller x3 value. Now to get back to a c(t) > 0 we need x3 ≤ τ to become x3 ≥ τ but we cannot. So, a dip and rebound cannot be achieved by changing μ1.
Now consider the following piecewise-constant schedule:
α1(t) =
(
αbase
1 − ∆α, t ∈ [ta, tb], ∆α > 0,
αbase
1 , t > tb, β1(t) =
(
βbase
1 , t ≤ tb,
βbase
1 − ∆β, t > tb, ∆β > 0,
with μ1 fixed at baseline.
Proposition 6.5. Let α1new = αbase
1 − ∆α with ∆α > 0 on [ta, tb]. Then for a fixed t ∈ [ta, tb] the change in c satisfies
cnew(t) − cbase(t) = −∆α (2x3(t) − 1).
In particular, on any subinterval where x3(t) > 1
2 , decreasing α1 strictly decreases c(t).
Proof. Direct substitution: c = α1(2x3 − 1) − β1 + μ1(x5 − 1), from which ∆c = (αbase
1 − ∆α − αbase
1 )(2x3 − 1) = −∆α(2x3 − 1).
Remark 6.6. On [ta, tb], ∂f3/∂α1 = x3(x3 − 1) ≤ 0. Hence, replacing αbase
1 by αbase
1 − ∆α increases the right-hand side of x ̇ 3 = f3 pointwise, and comparison yields
x(αbase
1 −∆α)
3 (t) ≥ x(αbase
1)
3 (t) (t ∈ [ta, tb]).
Thus the window intervention (through lowering α1) does not reduce x3 at t+
b relative to baseline. (Similar reasoning
as in Lemma 6.2). This is important because if lowering α1 lowered x3 in addition to c(t) then there will not be any chance to achieve c(t) > 0 after the window by moderate changes in β1.
Proposition 6.7. At t+
b , change β1 → β1 − ∆β with ∆β > 0. Then there exists δ > 0 (depending on local Lipschitz
bounds of f3) such that
cnew(t) > 0 for all t ∈ (tb, tb + δ].
Proof. Set ∆x3(t) := x3new(t) − xbase
3 (t) for t ≥ tb. Write
∆ ̇x3 = f3(xnew
3 ; t, β1) − f3(xbase
3 ; t, β1)
| {z }
=:A(t)
+ f3(xnew
3 ; t, β1 − ∆β) − f3(xnew
3 ; t, β1)
| {z }
=:B(t)
.
Since f3 is locally Lipschitz in x3, |A(t)| ≤ L |∆x3(t)| for some L > 0. Moreover,
B(t) = −∆β (1 − xnew
3 (t)) ≤ 0.
Hence
|∆ ̇x3(t)| ≤ L |∆x3(t)| + ∆β (t ≥ tb), |∆x3(tb)| = 0.
using the fact that d
dt |∆x3(t)| ≤ |∆ ̇x3(t)|, we get:
d
dt |∆x3(t)| ≤ L |∆x3(t)| + ∆β
By Grönwall, for t close to tb we obtain the quantitative bound
|∆x3(t)| ≤ ∆β
L eL(t−tb) − 1
Now compute the change in c:
cnew(t) − cbase(t) = ∆β + 2α1 ∆x3(t).
13

A PREPRINT - NOVEMBER 26, 2025
Therefore, for t ∈ [tb, tb + δ],
cnew(t) − cbase(t) ≥ ∆β − 2α1 |∆x3(t)| ≥ ∆β − 2α1
∆β
L eL(t−tb) − 1
Choose δ1 > 0 so small that 2α1
L (eLδ − 1) ≤ 1
2 . Then
cnew(t) − cbase(t) ≥ 1
2 ∆β for t ∈ (tb, tb + δ1].
which means
cnew(t) ≥ 1
2 ∆β + cbase(t). (⋆)
Now we know that cbase(t) is continuous on the interval, so for every ε > 0 we can find a δ2 > 0 such that
|cbase(t) − cbase(t+
b )| < ε, for all t ∈ (tb, tb + δ2] (⋆⋆)
At the end of the dip, cbase(t+
b ) is around zero or slightly negative. So, pick ∆β such that
cbase(t+
b)+ 1
2 ∆β − ε > 0 (⋄)
Taking δ = min{δ1, δ2}, for all t ∈ (tb, tb + δ] we have
cnew(t) ≥ 1
2 ∆β + cbase(t) from (⋆)
≥ cbase(t+
b )−ε+ 1
2 from (⋆⋆)
> 0 from (⋄)
Conclusion: Proposition 6.5 gives the dip on the midlife window via a modest decrease of α1 (because 2x3 − 1 < 0 there), Remark 6.6 guarantees no adverse reduction of x3 at the window boundary, and Proposition 6.7 yields a post-window interval with c > 0 after decreasing β1—hence a rebound.
Note: Here we saw that the change required for the dip in midlife window is easily achieved by reasonable changes in α1. In contrast, for μ1 the same scale of effect likely requires an unreasonably large increase. Then we showed that by changing β1 we can readily foil the dip effect and acquire a rebound. It is worth noting that any changes in α1 and β1 that results in decreased α1/β1 ratio in the midlife window and then an increase in the same ratio after the window can reproduce the same effect.-
 For example, increasing β1 in the midlife window and increasing α1 after can also produce a similar dip and rebound effect, but we chose the other regime due to more biological relevance related to hormonal changes during and after menopause (see the discussion).
In this section we only focused on the effect of c(t) and its parameters α1, β1 and μ1 on the midlife events. Next, we show that q(t) and its parameters cannot create as strong of an impact.
7 Why c(t) dominates q(t) in midlife dynamics
We compare, on a fixed midlife window W+ = [ta, tb], the size of the response of h′(t) to small, compactly supported
perturbations of c versus q. Let δc, δq ∈ L1(W+) be small and supported in W+. We write Ξ = c + q and, for a fixed (t, r), recall
K(t, r) = μ1μ2 x5(r)
Zt
r
x3(s) exp
Zs
r
Ξ(u) du ds, h′(t) = A
Zt
0
K(t, r)f ′(r) dr.
We consider Gateaux variations to first order in the perturbation amplitude ε:
δεh′(t) := h′[Ξ + ε(δc + δq)](t) − h′[Ξ](t)
ε , δh′(t) := εli→m0 δεh′(t),
and similarly for K. All bounds below are uniform for t ∈ W+, and constants may depend on the bounds from Lemma 3.2 and on W+, but not on the specific choice of δc, δq.
14

A PREPRINT - NOVEMBER 26, 2025
Lemma 7.1. Fix T > 0. Assume x3, x5 ∈ L∞([0, T ]) with 0 < m3 ≤ x3(t) ≤ M3 and 0 < m5 ≤ x5(t) ≤ M5 a.e.
on [0, T ], and let Ξ ∈ L∞([0, T ]). For 0 ≤ r ≤ t ≤ T define
K(t, r) := μ1μ2 x5(r) I(t, r), I(t, r) :=
Zt
r
x3(s) exp
Zs
r
Ξ(u) du ds.
Let ψ ∈ L∞([0, T ]) (this will play the role ψ = δc + δq) and, for ε ∈ R, set Ξε := Ξ + εψ and Kε the kernel obtained by replacing Ξ with Ξε in the definition above. Then for every 0 ≤ r ≤ t ≤ T the Gâteaux derivative
δK(t, r) := εli→m0
Kε(t, r) − K(t, r) ε
exists and is given by the formula
δK(t, r) = μ1μ2 x5(r)
Zt
r
ψ(u) exp
Zu
r
Ξ
Zt
u
x3(s) exp
Zs
u
Ξ ds du. (27)
Equivalently, in terms of I(t, ·),
δK(t, r) = μ1μ2 x5(r)
Zt
r
ψ(u) e
Ru
r Ξ I(t, u) du. (28)
Hence the logarithmic derivative has the representation
δK
K (t, r) =
Zt
r
w(t, r; u) ψ(u) du, w(t, r; u) := e
Ru
r Ξ I(t, u)
I(t, r) (≥ 0). (29)
Proof. Write K(t, r) = μ1μ2 x5(r) I(t, r) with
I(t, r) :=
Zt
r
x3(s) exp
Zs
r
Ξ ds.
Since x5 does not depend on Ξ, it suffices to compute the Gâteaux derivative of I. For Ξε := Ξ + εψ we have
Iε(t, r) :=
Zt
r
x3(s) exp
Zs
r
Ξε ds =
Zt
r
x3(s) e
Rs
r Ξ exp ε
Zs
r
ψ ds.
Fix (t, r) and consider the difference quotient:
Iε(t, r) − I(t, r)
ε=
Zt
r
x3(s) e
Rs
r Ξ eε R s
r ψ−1
ε ds.
Define Z(s) := R s
r ψ(u) du. Since ψ ∈ L∞, |Z(s)| ≤ ∥ψ∥∞ (s − r) ≤ ∥ψ∥∞ (t − r) for s ∈ [r, t]. For |ε| ≤ 1 the
following bound holds
eεz − 1
ε ≤ e|z| |z|, z ∈ R,
and implies
x3(s) e
Rs
r Ξ eεZ(s) − 1
ε ≤ ∥x3∥∞ e∥Ξ∥∞(s−r) e|Z(s)| |Z(s)| ≤ C eC(s−r) (s − r),
with C := max{∥Ξ∥∞, ∥ψ∥∞, ∥x3∥∞} (depending only on the uniform bounds and on T ). The right-hand side is integrable on s ∈ [r, t]. Moreover, pointwise in s,
eεZ(s) − 1
ε −→ Z(s) (ε → 0).
By the dominated convergence theorem,
εli→m0
Iε(t, r) − I(t, r)
ε=
Zt
r
x3(s) e
Rs
r Ξ Z(s) ds =
Zt
r
x3(s) e
Rs
rΞ
Zs
r
ψ(u) du ds.
Apply Fubini/Tonelli on the triangle {(u, s) : r ≤ u ≤ s ≤ t}:
Zt
r
x3(s) e
Rs
rΞ
Zs
r
ψ(u) du ds =
Zt
r
ψ(u)
Zt
u
x3(s) e
Rs
r Ξ ds du.
15

A PREPRINT - NOVEMBER 26, 2025
Use additivity of the integral in the exponent:
Zs
r
Ξ=
Zu
r
Ξ+
Zs
u
Ξ =⇒ e
Rs
r Ξ =e
Ru
r Ξe
Rs
u Ξ.
Therefore
Zt
u
x3(s) e
Rs
r Ξ ds = e
Ru
rΞ
Zt
u
x3(s) e
Rs
u Ξ ds = e
Ru
r Ξ I(t, u).
We conclude that
δI(t, r) := εli→m0
Iε(t, r) − I(t, r)
ε=
Zt
r
ψ(u) e
Ru
r Ξ I(t, u) du,
which is (28) upon multiplying by μ1μ2 x5(r). Finally, dividing both sides by K(t, r) = μ1μ2 x5(r) I(t, r) gives
δK
K (t, r) =
Zt
r
e
Ru
r Ξ I(t, u)
I(t, r) ψ(u) du =
Zt
r
w(t, r; u) ψ(u) du,
establishing (29).
The next two results quantify the relative sizes of the responses to δq and to δc.
Proposition 7.2. Fix T > 0. Assume x3, x5 ∈ L∞([0, T ]) with 0 < m3 ≤ x3 ≤ M3 and 0 < m5 ≤ x5 ≤ M5, and
Ξ = c + q ∈ L∞([0, T ]). Let δc ≡ 0 and δq ∈ L∞([0, T ]) be supported in W+ = [ta, tb] ⊂ [0, T ]. Then for every t ∈ W+,
|δh′(t)| ≤ |A| ∥K∥∞;[0,t]2 sup
u∈[0,t]
Zt
u
|δq(s)| ds
Zt
0
|f ′(r)| dr. (30)
In particular, if R
W+ |f ′| ≪ 1 (i.e., small variations of f in the midlife regime), then
sup
t∈W+
|δh′(t)| ≤ Cq sup
u∈W+
Z tb
u
|δq(s)| ds ·
Z
W+
|f ′(r)| dr
| {z }
≪1
, Cq := |A| ∥K∥∞;[0,T ]2 .
Proof. By the Gâteaux derivative (Lemma 7.1), with ψ = δq and for 0 ≤ r ≤ t,
δK
K (t, r) =
Zt
r
e
Ru
r Ξ I(t, u)
I(t, r) δq(u) du =
Zt
r
w(t, r; u) δq(u) du,
We can write
e
Ru
r Ξ I(t, u) = e
Ru
rΞ
Zt
u
x3(s)e
Rs
u Ξ ds =
Zt
u
x3(s)e
Rs
r Ξ ds
Hence, for r ≤ u ≤ t, 0 ≤ w(t, r; u) ≤ 1. This gives us the following inequality:
δK
K (t, r) =
Zt
r
w(t, r; u) δq(u) du ≤
Zt
r
|δq(u)| du,
which gives
|δK(t, r)| ≤ |K(t, r)|
Zt
r
|δq(u)| du.
Finally, take sup(t,r)∈[0,t]2 |K(t, r)| = ∥K∥∞;[0,t]2 we can obtain:
|δh′(t)| = |A|
Zt
0
δK(t, r) f ′(r) dr ≤ |A| ∥K∥∞;[0,t]2 sup
u∈[0,t]
Zt
u
|δq|
Zt
0
|f ′(r)| dr,
which is (30).
Lemma 7.3. Under the same boundedness hypotheses on x3, x5, Ξ as above, let δq ≡ 0 and δc ∈ L∞([0, T ]) be supported in W+. Then the first variation δx4 solves the linear inhomogeneous ODE
δx ̇ 4(t) = c(t) δx4(t) + δc(t) x4(t), δx4(0) = 0,
and admits the explicit representation
δx4(t) =
Zt
0
Φc(t, s) δc(s) x4(s) ds, Φc(t, s) := exp
Zt
s
c(u) du . (31)
16

A PREPRINT - NOVEMBER 26, 2025
Proof. We start from the original unperturbed ODE for x4 because this is directly incorporated in the ODE for h′(t):
x ̇ 4(t) = c(t) x4(t) + μ1x3(t) x6(t).
Now perturb c by a small parameter ε:
cε(t) := c(t) + εδc(t).
Denote the corresponding perturbed solution by x4,ε(t). It satisfies
x ̇ 4,ε(t) = cε(t) x4,ε(t) + μ1x3(t) x6(t). (32)
Note that only c is perturbed, while q and f are unchanged, so x3 and x6 are the same across ε. The initial condition remains x4,ε(0) = 0. The first variation of x4 is
δx4(t) := d
dε x4,ε(t)
ε=0
.
Differentiate (32) with respect to ε at ε = 0. We compute term by term:
- For the left-hand side: d
dε x ̇ 4,ε(t)
ε=0
=d
dt
d
dε x4,ε(t)
ε=0
= δx ̇ 4(t).
- For the right-hand side:
d
dε cε(t) x4,ε(t)
ε=0
=d
dε (c(t) + εδc(t)) x4,ε(t)
ε=0
.
Expand:
= δc(t) x4(t) + c(t) δx4(t).
- The second term on the right hand side would go away.
Thus the variation δx4 satisfies
δx ̇ 4(t) = c(t) δx4(t) + δc(t) x4(t)
with δx4(0) = 0. This is exactly the stated ODE. By variation of constants, the ODE for δx4 has solution
δx4(t) =
Zt
0
Φc(t, s) δc(s) x4(s) ds
which is exactly (31).
Proposition 7.4. Assume the hypotheses at the start of Proposition 7.2. Let δq ≡ 0, and let δc be supported in W+. Then for every t ∈ W+,
|δh′(t)| ≥ |A|
Zt
0
Φc(t, s) |δc(s)| |x4(s)| ds − |A| ∥K∥∞;[0,t]2 sup
u∈[0,t]
Zt
u
|δc(s)| ds
Zt
0
|f ′(r)| dr. (33)
Proof. There are two independent first-order paths:
(1) Homogeneous x4 path. By Lemma 7.3,
δx4(t) =
Zt
0
Φc(t, s) δc(s) x4(s) ds.
Hence the contribution to h′ is
δh′
hom(t) = −μ0N0 δx4(t) = −μ0N0
Zt
0
Φc(t, s) δc(s) x4(s) ds.
Taking absolute values gives
|δh′
hom(t)| = |A|
Zt
0
Φc(t, s) |δc(s)| |x4(s)| ds.
(2) Kernel reweighting path. Independently, the kernel K depends on Ξ = c + q, so by Lemma 7.1 with ψ = δc and 0 ≤ w ≤ 1,
|h′
re(t)| = |A|
Zt
0
δK(t, r) f ′(r) dr ≤ |A|∥K∥∞;[0,t]2 sup
u∈[0,t]
Zt
u
|δc|
Zt
0
|f ′(r)| dr.
17

A PREPRINT - NOVEMBER 26, 2025
so
|δh′(t)| = |δh′
hom(t) + h′
re(t)| ≥ |A|
Zt
0
Φc(t, s) |δc(s)| |x4(s)| ds
− |A|∥K∥∞;[0,t]2 sup
u∈[0,t]
Zt
u
|δc|
Zt
0
|f ′(r)| dr.
Theorem 7.5. Assume the boundedness hypotheses above and suppose the midlife variations in f is small:
Z
W+
|f ′(r)| dr ≤ ε⋆ with ε⋆ ≪ 1.
Assume further that x4 is bounded away from 0 on a subset J ⊂ W+ of positive measure:
∃ m4 > 0, |J| > 0 such that |x4(s)| ≥ m4 for a.e. s ∈ J.
Let δq, δc be supported in W+ with comparable L1 sizes: R
W+ |δq| ≈ R
W+ |δc|. Then, uniformly for t ∈ W+,
|δh′
q(t)| ≤ Cq sup
u∈W+
Z tb
u
|δq|
!
ε⋆,
while
sup
t∈W+
|δh′
c(t)| ≥ Cc
Z
J
|δc(s)| ds − C′
c sup
u∈W+
Z tb
u
|δc|
!
ε⋆,
where Cq = |A| ∥K∥∞;[0,T ]2 and
Cc := |A| inf
t∈W+, s∈J Φc(t, s) m4 > 0,
with Φc bounded below on the compact set W+ × J by boundedness and local integrability of of c. Consequently,
sup
t∈W+
|δ h′q (t)|
|δh′c(t)| = o(1) as ε⋆ =
Z
W+
|f ′| → 0.
Proof. The q-bound is Proposition 7.2. For the c-bound, apply (33) and restrict the first integral to J:
sup
t∈W+
|δh′
c(t)| ≥ |A| inf
t∈W+, s∈J Φc(t, s) m4
Z
J
|δc(s)| ds − C′
c sup
u∈W+
Z tb
u
|δc|
Z
W+
|f ′|.
All constants are finite and positive under the stated hypotheses; the ratio statement follows by dividing the two bounds and letting ε⋆ → 0.
Corollary 7.6. In addition to the comparison of the effects between c and q perturbations, these results assert that a less than three-stage carcinogenesis model of breast cancer with the inclusion of detection dynamics is not capable of fully capturing the incidence patterns through reasonably varying parameters.
Remark 7.7. If a biological parameter p (e.g. α1) is perturbed, then c changes and so do x3, x5 (hence x6). Writing the linearized system for (δx3, δx5, δx6) and solving by variation of constants yields ∥δxj∥L∞(0,T ) ≤ CT |δp| for j = 3, 5, 6 with constants depending only on bounded Jacobians. Decomposing
δh′ = δh′
hom + δh′
re + δh′
state
one obtains
|δh′
hom(t)| ≥ |A|
Zt
0
Φc(t, s) |∂pc(s)| |x4(s)| ds · |δp|,
|δh′
re(t)| ≤ |A|∥K∥∞;[0,t]2 sup
u∈[0,t]
Zt
u
|∂pΞ(s)| ds
!
Zt
0
|f ′(r)| dr |δp|,
|δh′
state(t)| ≤ C |δp| 1 +
Zt
0
|f ′(r)| dr ,
which shows: (i) the homogeneous x4 path retains the same form as before and does not carry the small midlife factor;
(ii) the kernel reweighting and state paths are at worst proportional to R
W+ |f ′| or O(|δp|) with bounded constants.
Therefore, in the midlife regime, the dominance conclusion of Theorem 7.5 persists qualitatively for parameter-level perturbations when the homogeneous path is present.
18

A PREPRINT - NOVEMBER 26, 2025
8 Numerical Experiment
We conducted a numerical experiment. We fit the extended MSCE model (1)-(6) to the SEER incidence data for three cohorts: i.e., those born during 1935-1939, 1940-1944 and 1945-1949. We chose these three cohorts to minimize the effect of breast cancer screening on the observed incidence. For reference, the Centers for Disease Control and Prevention’s National Center for Health Statistics reports less than 29% of the population aged 40 and over were screened for these cohorts [26]. We use a Hybrid G-
enetic Algorithm which is a global minimization toolbox in Matlab to minimize the distance of the model hazard (i.e., x2 = h(t)) from the data. The fitting process has three steps: (i) we first estimate all parameters by fitting the model to the data up to the onset of the hook at ta; (ii) using the model output at ta as the initial condition, we fix all parameters except one (θi ∈ {μ0, μ1, μ2, α1, α2, β1, β2}) and perform the fitting within the dip transition window [ta, tb]; (iii) finally, we ta-
ke the model output at tb as the new initial condition, fix all parameters except θj ∈ {μ0, μ1, μ2, α1, α2, β1, β2}, and complete the fitting for the rebound phase over the interval [tb, 60]. We let the search bounds for parameter estimation in steps ii) and iii) be [0, 2θi] and [0, 2θj] (i.e., widening the lower bound to 0 and upper bound to twice of the value estimated for the preceding phase). For each cohort, the choices of ta and tb within the interval [45, 55] are determined by identifying (-
i) the age at which the derivative of the smoothed incidence curve first starts a persistent downward shift, and (ii) the age at which the derivative begins to recover upward, respectively.
With this, results of our numerical experiments were consistent with the mathematical analysis in showing that generating a hook through variations in μ1 or in the parameters involved in q(t)—namely, α2, β2, and μ2—cannot produce the dip-and-rebound behavior within a reasonable scaling range (i.e., the parameters would need to vary far beyond realistic biological limits to achieve that effect). However, the effect was easily attainable through moderate changes in α1 and
β1 as shown in Figure 2. Equivalently, this refers to changes in the proliferative ratio of first-stage mutated cells ( α1
β1 ).
As for μ0, the slowdown and rebound effects were linear, as expected from its direct linear contribution to x2 in (2). Moreover, since μ0 represents the initiation rate of carcinogenesis—the first mutation event—it governs kinetics that occur early in life, very close to the age at menarche [27, 28]. This suggests that μ0 is less likely to be influenced by hormonal exposures compared to the other parameters, given the limited number of menstrual cycles before the first mutational event. For a comp-
rehensive numerical comparison of parameter effects and their ability to reproduce the hook, please refer to the supplementary materials.
(A) (B) (C)
Figure 2: Model fit for SEER incidence data for three cohorts (A) 1935-1939, (B) 1940-1944 and (C) 1945-1949. The orange part of the curves corresponds to the increasing incidence before the occurrence of the Clemmesen’s hook. The blue and green parts show the dip and rebound phases, respectively. The midlife window [ta, tb] is [49, 54] for (A),
[46, 51] for (B), and [48, 54] for (C). The parameters have the unit 1
year .
9 Discussion
The age-specific incidence of breast cancer exhibits a unique feature known as Clemmesen’s hook, in which an initial rise in incidence is followed by a temporary slowdown between ages 45 and 55 and then another increase afterwards [2].The biological mechanisms underlying this pattern remain inconclusive, even though multiple hypotheses have been proposed in several previous studies[29, 4, 30]. In this study we carried out a rigorous mathematical analysis on an
19

A PREPRINT - NOVEMBER 26, 2025
extended multistage clonal expansion model (MSCE-T) representing breast cancer tumor kinetics to investigate the reasons behind this phenomenon.
Our analysis suggests that Clemmesen’s hook likely arises from time-specific changes in the proliferation rate of early mutated clones within a three-stage carcinogenesis framework, occurring midlife around menopause. Specifically, modest reductions in the division rate (α1) or increases in the death rate (β1) of first-stage mutated cells are sufficient to reproduce the dip and rebound observed around the age of menopause (i.e., between 45-55). In contrast, changes in other parameters fail to gene-
rate a similar pattern unless they are unrealistically large. These findings suggest that the menopausal transition impacts breast cancer development primarily through modulation of clonal expansion rather than imposing mutagenic effects.
The model’s predictions align with biological evidence linking menopause to reduced progesterone-driven proliferation and subsequent activation of growth through other signaling pathways [5, 6, 31]. The transient slowdown in incidence reflects diminished promotion of first-stage mutated cells caused by diminishing exposure to progesterone post
menopause when the ovaries stop producing this hormone (represented by lowered α1
β1 in our model), while the rebound corresponds to continued expansion of existing clones under postmenopausal stimuli, such as adipose-derived growth
signals [6, 31] (corresponding to the recovered α1
β1 in our model). Our model results support this emerging evidence on the role of progesterone (vs. estrogen) in driving cancer cell proliferation, by specifically connecting the transitions round menopause (Clemmesen’s hook) to model parameters representing the proliferation of early-stage mutated cells around midlife. In addition, our rigorous mathematical analysis helps to rule out other competing pathways (i.e., it is likely due to hormonally regulated changes in clonal expansion kinetics rath-
er than in mutation rate). Further, our numerical analysis fitting the model to the data helps to quantify this impact.
Mathematically, the Volterra formulation of the MSCE-T model (Section 4) separates early-stage carcinogenic dynamics, governed by c(t) in (9), from late-stage and detection-related dynamics, encoded in q(t) and f (t) in (9) and (7) respectively. Analytical results show that, within the midlife window, perturbations in c(t) dominate those in q(t), confirming that late-stage dynamics cannot reproduce the hook pattern. Theorems 5.3 and 5.4 further show that the sensitivity of the model hazard h(t) to-
 the tumor detection threshold (Mt) and malignant cells proliferation rate (α3) are negligible during the menopausal transition. The analysis also demonstrates that at least three mutational stages are required to reproduce the observed age-incidence trends, consistent with Tomasetti et al. [21].
Despite its analytical insight, the model incorporates simplifying assumptions. Parameters αi, βi, and μi are treated as deterministic and piecewise-continuous, ignoring stochastic or variability in hormonal or genetic factors. The model also neglects microenvironmental influences such as oxidative stress, immune activity, and stromal stiffness, which may further modulate proliferation and death rates [32, 33, 34]. Future extensions that incorporate tissue-level heterogeneity and hormonal trajecto-
ries could enable richer dynamics and improve predictions of age-specific risk.
In summary, the extended MSCE-T model provides a coherent mechanistic and mathematical explanation for Clemmesen’s hook by disentangling detection-related effects from intrinsic biological changes. It demonstrates that biologically plausible, time-specific shifts in the proliferation rate of early mutated clones, consistent with menopausal hormonal alterations, are sufficient to explain the midlife dip and rebound in breast cancer incidence. These results establish a quantitative framework for lin-
king hormonal physiology, multi-stage carcinogenesis, and population-level cancer incidence data.
Supplementary information:
Model derivation and supplementary numerical experiments are shared as supplementary materials.
Declarations
• Funding: This work was supported by the National Institutes of Health (R01CA257971).
• Conflict of interest: The authors declare no conflict of interest.
• Data availability: The data that support the findings of this study are publicly available from the SEER Program at https://seer.cancer.gov/data-software/ and NORDCAN program at https://nordcan.iarc.fr.
• Code availability: Codes for parameter estimation are available from https://codeocean.com/capsule/6223220/tree/v1 related to our earlier study [17]. Further information is available from the corresponding authors upon request.
• Author contribution:
N.M.: Conceptualization, Methodology, Formal analysis, Software, Visualization, Writing – original draft, review & editing.
20

A PREPRINT - NOVEMBER 26, 2025
W.Y.: Supervision, Data curation, Funding acquisition, review & editing. All authors read and approved the final manuscript.
References
[1] Joanne Kim, Andrew Harper, Valerie McCormack, Hyuna Sung, Nehmat Houssami, Eileen Morgan, Miriam Mutebi, Gail Garvey, Isabelle Soerjomataram, and Miranda M Fidler-Benaoudia. Global patterns and trends in breast cancer incidence and mortality across 185 countries. Nature Medicine, pages 1–9, 2025.
[2] Johannes Clemmesen. Statistical studies in the aetiology of malignant neoplasms. i. review and results. 1965.
[3] William F Anderson, Ismail Jatoi, Julia Tse, and Philip S Rosenberg. Male breast cancer: a population-based comparison with female breast cancer. Journal of Clinical Oncology, 28(2):232–239, 2010.
[4] Michael X Gleason, Tengiz Mdzinarishvili, and Simon Sherman. Breast cancer incidence in black and white women stratified by estrogen and progesterone receptor statuses. PLoS One, 7(11):e49359, 2012.
[5] Herjan JT Coelingh Bennink, Iman J Schultz, Marcus Schmidt, V Craig Jordan, Paula Briggs, Jan FM Egberts, Kristina Gemzell-Danielsson, Ludwig Kiesel, Kirsten Kluivers, Jan Krijgh, et al. Progesterone from ovulatory menstrual cycles is an important cause of breast cancer. Breast cancer research, 25(1):60, 2023.
[6] J Kim and PN Munster. Estrogens and breast cancer. Annals of Oncology, 36(2):134–148, 2025.
[7] Wentao An, Hui Lin, Lijuan Ma, Chao Zhang, Yuan Zheng, Qiuxia Cheng, Chuanshun Ma, Xiang Wu, Zihao Zhang, Yani Zhong, et al. Progesterone activates gpr126 to promote breast cancer development via the gi pathway. Proceedings of the National Academy of Sciences, 119(15):e2117004119, 2022.
[8] Collaborative Group on Hormonal Factors in Breast Cancer et al. Menarche, menopause, and breast cancer risk: individual participant meta-analysis, including 118 964 women with breast cancer from 117 epidemiological studies. The lancet oncology, 13(11):1141–1151, 2012.
[9] Caroline Antoine, Lieveke Ameye, Marianne Paesmans, Evandro de Azambuja, and Serge Rozenberg. Menopausal hormone therapy use in relation to breast cancer incidence in 11 european countries. Maturitas, 84:81–88, 2016.
[10] Mark Clemons and Paul Goss. Estrogen and the risk of breast cancer. New England Journal of Medicine, 344(4):276–285, 2001.
[11] Aurel Lupulescu. Clinical science review: estrogen use and cancer incidence: a review. Cancer investigation, 13(3):287–295, 1995.
[12] Peter Armitage and Richard Doll. The age distribution of cancer and a multi-stage theory of carcinogenesis. British journal of cancer, 91(12):1983–1989, 2004.
[13] Suresh H Moolgavkar and David J Venzon. Two-event models for carcinogenesis: incidence curves for childhood and adult tumors. Mathematical biosciences, 47(1-2):55–77, 1979.
[14] Suresh H Moolgavkar and Alfred G Knudson. Mutation and cancer: a model for human carcinogenesis. JNCI: Journal of the National Cancer Institute, 66(6):1037–1052, 1981.
[15] Andrew F Brouwer, Marisa C Eisenberg, and Rafael Meza. Case studies of gastric, lung, and oral cancer connect etiologic agent prevalence to cancer incidence. Cancer research, 78(12):3386–3396, 2018.
[16] Rafael Meza, William D Hazelton, Graham A Colditz, and Suresh H Moolgavkar. Analysis of lung cancer incidence in the nurses’ health and the health professionals’ follow-up studies using a multistage carcinogenesis model. Cancer causes & control, 19(3):317–328, 2008.
[17] Navid Mohammad Mirzaei, Chin Hur, Mary Beth Terry, Piero Dalerba, and Wan Yang. Modeling early-onset cancer kinetics reveals changes in underlying risk and the impact of population screening. Cancer Research, 2025.
[18] G. Engholm, J. Ferlay, N. Christensen, F. Bray, M. L. Gjerstorff, A. Klint, J. E. Køtlum, E. Olafsdóttir, E. Pukkala, and H. H. Storm. Nordcan – a nordic tool for cancer information, planning, quality control and research. Acta Oncologica, 49(5):725–736, 2010.
[19] S. Larønningen, G. Arvidsson, F. Bray, E. D. Dahl-Olsen, G. Engholm, M. Ervik, S. Friis, E. M. Guðmundsdóttir, J. Gulbrandsen, H. M. Hansen, T. B. Johannesen, S. Kristensen, S. M. Kønig, F. Lam, M. Laversanne, L. N. Lydersen, N. Malila, O. M. Mangrud, J. Miettinen, S. Pejicic, Å. Persson, D. Pettersson, A. Skog, B. Á. Steig, H. Tian, B. Aagnes, and H. H. Storm. NORDCAN: Cancer Incidence, Mortality, Prevalence and Survival in the Nordic Countries, Version 9.5 (19.06.2025). Association of the N-
ordic Cancer Registries. Cancer Registry of Norway, 2025. Available from: https://nordcan.iarc.fr/, accessed on 09/09/2025.
[20] The Surveillance, Epidemiology, and End Results (SEER) Program. National Cancer Institute, 2025. Available from: https://seer.cancer.gov, accessed on 06/20/2024.
21

A PREPRINT - NOVEMBER 26, 2025
[21] Cristian Tomasetti, Luigi Marchionni, Martin A Nowak, Giovanni Parmigiani, and Bert Vogelstein. Only three driver gene mutations are required for the development of lung and colorectal cancers. Proceedings of the National Academy of Sciences, 112(1):118–123, 2015.
[22] Lingling Li, Tianhai Tian, and Xinan Zhang. Mutation mechanisms of human breast cancer. Journal of Computational Biology, 25(4):396–404, 2018.
[23] Xinan Zhang and Richard Simon. Estimating the number of rate limiting genomic changes for human breast cancer. Breast cancer research and treatment, 91(2):121–124, 2005.
[24] Nai Yang Fu, Bhupinder Pal, Yunshun Chen, Felicity C Jackling, Michael Milevskiy, François Vaillant, Bianca D Capaldo, Fusheng Guo, Kevin H Liu, Anne C Rios, et al. Foxp1 is indispensable for ductal morphogenesis and controls the exit of mammary stem cells from quiescence. Developmental Cell, 47(5):629–644, 2018.
[25] Earl A Coddington, Norman Levinson, and T Teichmann. Theory of ordinary differential equations, 1956.
[26] National Center for Health Statistics. Health, united states, 2020–2021: Table canbrtest. https://www.cdc. gov/nchs/hus/data-finder.htm. Accessed on 11/05/2025.
[27] Navid Mohammad Mirzaei and Wan Yang. Estimating the carcinogenesis timelines in early-onset versus late-onset cancers and changes across birth cohorts. medRxiv, pages 2025–08, 2025.
[28] Moritz Gerstung, Clemency Jolly, Ignaty Leshchiner, Stefan C Dentro, Santiago Gonzalez, Daniel Rosebrock, Thomas J Mitchell, Yulia Rubanova, Pavana Anur, Kaixian Yu, et al. The evolutionary history of 2,658 cancers. Nature, 578(7793):122–128, 2020.
[29] Mustapha Abubakar, Alyssa Klein, Shaoqi Fan, Scott Lawrence, Karun Mutreja, Jill E Henry, Ruth M Pfeiffer, Maire A Duggan, and Gretchen L Gierach. Host, reproductive, and lifestyle factors in relation to quantitative histologic metrics of the normal breast. Breast Cancer Research, 25(1):97, 2023.
[30] William F Anderson, Philip S Rosenberg, Aleix Prat, Charles M Perou, and Mark E Sherman. How many etiological subtypes of breast cancer: two, three, four, or more? Journal of the National Cancer Institute, 106(8):dju165, 2014.
[31] Chongru Zhao, Min Wu, Ning Zeng, Mingchen Xiong, Weijie Hu, Wenchang Lv, Yi Yi, Qi Zhang, and Yiping Wu. Cancer-associated adipocytes: emerging supporters in breast cancer. Journal of Experimental & Clinical Cancer Research, 39(1):156, 2020.
[32] Fabio Hecht, Carolina F Pessoa, Luciana B Gentile, Doris Rosenthal, Denise P Carvalho, and Rodrigo S Fortunato. The role of oxidative stress on breast cancer development and therapy. Tumor biology, 37(4):4281–4291, 2016.
[33] Jensen N Amens, Gökhan Bahçecioglu, and Pinar Zorlutuna. Immune system effects on breast cancer. Cellular and Molecular Bioengineering, 14(4):279–292, 2021.
[34] Boer Deng, Ziyi Zhao, Weimin Kong, Chao Han, Xiaochang Shen, and Chunxiao Zhou. Biological role of matrix stiffness in tumor growth and treatment. Journal of translational medicine, 20(1):540, 2022.
22

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:18.407Z
- **Text Length:** 63171 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 22 of 22
