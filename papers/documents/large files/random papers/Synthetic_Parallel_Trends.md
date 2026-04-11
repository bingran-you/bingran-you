# PDF Document: Liu - 2025 - Synthetic Parallel Trends.pdf

**File Path:** Liu - 2025 - Synthetic Parallel Trends.pdf

**Processed Date:** 2026-02-10T18:16:52.386Z

**File Size:** 806.56 KB

**Total Pages:** 51

**Extracted Pages:** 51

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3132

**Title:** Synthetic Parallel Trends

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
SYNTHETIC PARALLEL TRENDS
YIQI LIU
Department of Economics, Cornell University
November 8, 2025
Click here for the latest version.
Popular empirical strategies for policy evaluation in the panel data literature
including difference-in-differences (DID), synthetic control (SC) methods, and
their variants—rely on key identifying assumptions that can be expressed through
a specific choice of weights ω relating pre-treatment trends to the counterfactual
outcome. While each choice of ω may be defensible in empirical contexts that mo
tivate a particular method, it relies on fundamentally untestable and often fragile
assumptions. I develop an identification framework that allows for all weights sat
isfying a Synthetic Parallel Trends assumption: the treated unit’s trend is parallel
to a weighted combination of control units’ trends for a general class of weights.
The framework nests these existing methods as special cases and is by construc
tion robust to violations of their respective assumptions. I construct a valid con
fidence set for the identified set of the treatment effect, which admits a linear
programming representation with estimated coefficients and nuisance parameters
that are profiled out. In simulations where the assumptions underlying DID or
SC-based methods are violated, the proposed confidence set remains robust and
attains nominal coverage, while existing methods suffer severe undercoverage.
KEYWORDS: synthetic control, difference-in-differences, partial identification,
linear programs with estimated coefficients.
Yiqi Liu: yl3467@cornell.edu
I am grateful to Levon Barseghyan, Francesca Molinari, and José Luis Montiel Olea for their mentorship. I
also thank Jiafeng Chen, Xavier D’Haultfoeuille, Jacob Dorn, Hyewon Kim, Lihua Lei, Douglas Miller, Yaroslav
Mukhin, Zhuan Pei, Alice Qi, Chen Qiu, Jonathan Roth, Xiaoxia Shi, Kyungchul Song, Jörg Stoye, Liyang Sun,
Amilcar Velez, Jaume Vives-i-Bastida, Stefan Wager, and seminar participants at Cornell University and Stanford
Data-Driven Seminar for valuable feedback.
arXiv:2511.05870v1 [econ.EM] 8 Nov 2025

2
1. INTRODUCTION
Learning treatment effects inevitably requires assumptions about unobserved counterfac
tual outcomes, e.g., what would have happened to the already-treated units in the absence
of treatment. The program evaluation literature has developed various empirical strate
gies to address this fundamental challenge, often leveraging information from compari
son groups, e.g., those not exposed to the treatment. In applications with panel data where
units are observed across multiple time periods, information from both untreated units and
pre-treatment time periods serves as a source of identifying power under assumptions that
connect them to the counterfactual.
In this paper, I show that the key identifying assumptions underlying widely used empir
ical strategies in the panel data literature—including difference-in-differences (DID) under
the parallel trends assumption, synthetic control (SC) methods, and their variants such as
two-way fixed effects (TWFE) and synthetic difference-in-differences (SDID)— can all be
expressed through a specific choice of population weights ω that relate pre-treatment trends
to the counterfactual outcome. While each choice of ω may be defensible in different em
pirical contexts that motivate a particular method, it relies on fundamentally untestable and
often fragile assumptions that can imply very different weights across methods.1 I introduce
an identification framework that allows for all weights satisfying a weaker identifying as
sumption, formally stated in Assumption 1 and termed Synthetic Parallel Trends (SPT): the
trend of the treated unit is parallel to a weighted combination of control units’ trends for a
general class of weights. Under SPT, the counterfactual trend is identified by a weighted av
erage of post-treatment control trends, with weights that reproduce the treated unit’s trends
in the pre-treatment periods. This framework nests existing methods as special cases, as
each of their identifying assumptions is associated with a particular selection from the set
of valid weights under SPT. Hence, the proposed framework is by construction robust to a
large class of violations of the identifying assumptions required by those existing methods.
1This echoes the observation in Arkhangelsky, Athey, Hirshberg, Imbens, and Wager (2021) that, at the estima
tion level, each of the DID, SC, and SDID estimators can be written as a weighted average difference in observed
outcomes, with data-dependent weights that differ markedly across estimators (see their Figure 1).

3
I study properties of models consistent with SPT, starting with affine weights whose
components sum to one but are otherwise unrestricted in sign or magnitude. In this setting,
absent restrictions on the data generating process (DGP) other than SPT, a dichotomy oc
curs: the sharp identification region for the counterfactual is either trivial (i.e., it spans the
entire real line) or a singleton. The latter case of point identification occurs if and only if
the underlying DGP has a special low-rank property detailed in Proposition 3.2; even when
this property is not explicitly imposed but holds true in the DGP, the identified set will
automatically “detect” it and adapt to a singleton. Notably, the DGP implied by a TWFE
model has this low-rank property. However, the “all-or-nothing” nature of the result hints
at its fragility: as shown in Example 4, this property breaks down under perturbations to
the TWFE model, which also invalidate the TWFE estimand.
This observation motivates combining the observed data with SPT and more credible as
sumptions to yield informative identification regions for the counterfactual, in the spirit of
Manski (1989) and the subsequent partial identification literature; see Tamer (2010), Moli
nari (2020) for reviews. I next impose a nonnegativity constraint on the weights, thereby
making affine weights convex. Convexity is a standard assumption in the causal inference
literature where estimands take a weighted average form, and is often motivated by its
interpretability; see, for example, Abadie (2021) for the use of convex weights in SC meth
ods, and de Chaisemartin and D’Haultfoeuille (2023) and Roth, Sant’Anna, Bilinski, and
Poe (2023) for weighting heterogeneous treatment effects in the TWFE literature. This
paper emphasizes a different motivation for imposing convexity: it is a source of identi
fying power. Convex combinations of post-treatment control trends effectively restrict the
counterfactual trend to lie between their minimum and maximum, hence ruling out affine
weights that return unbounded values and ensuring a nontrivial identified set if the control
trends are bounded.2 Under SPT with convex weights, there exists a time-invariant convex
weight such that the treated unit’s trend lies in the convex hull of the control trends across
all time periods. Such convex combination may not be unique in short panels, and SPT
2This idea is reminiscent of the bounded support assumption in Manski (1989), though the convex-weight
condition here does not imply a bound on the support of the outcome data, but rather a bound on its first moment.

4
explicitly accounts for potential multiplicity of weights, yielding a partially identified set
for the counterfactual that can be conveniently characterized by linear programs.
SPT under convex weights nests as special cases the parallel trends assumption and the
convex weighting schemes underlying SC methods. Specifically, the DID estimand under
the canonical two-timing-group parallel trends assumption extended to multiple periods is
associated with the convex weight equal to each control unit’s population share among all
controls (Section 3.2); the expectation of the original SC estimator proposed by Abadie,
Diamond, and Hainmueller (2010) is associated with the convex weight that balances ob
served pre-treatment outcomes between the treated unit and control units as the number
of pre-treatment periods grows (Section 3.3.1). I also show that the probability limit of a
variant of SC methods proposed by Arkhangelsky, Athey, Hirshberg, Imbens, and Wager
(2021) corresponds to the convex weight that balances the unobserved latent factors be
tween the treated unit and control units (Section 3.3.2). This unifying perspective sheds
light on how these popular empirical strategies point identify the counterfactual by select
ing a specific convex weight consistent with SPT and assuming that the counterfactual is
generated by this chosen weight, even when multiple convex weights can reproduce the
treated unit’s pre-treatment trends. The credibility of each selection is context-dependent
and rests on ultimately untestable assumptions involving the unobserved counterfactual.
By allowing flexible choices of weights, the proposed framework is robust to violations of
each method’s identifying assumptions, as long as the treated unit’s trends remain a convex
combination of control trends.
I provide a valid confidence set that covers the identified set for the treated unit’s treat
ment effect under SPT at any pre-specified confidence level. The proposed inference pro
cedure builds on Fang and Santos (2019) when panel data or repeated cross-sections are
available within each aggregate unit. The key insight is that the linear program character
ization of the identified set is equivalent to a system of moment equalities linear in the
observed trends, which can be estimated by differences in sample means at the usual √n
rate from micro-level data. The resulting test statistic is a Hadamard directionally differen
tiable mapping of these estimated moments that profiles out the nuisance parameters—the

5
weights ω—whose dimensionality can be much larger than the scalar treatment effect of
interest. This profiling-out step translates the original linear program constraints that need
to be estimated into a new objective function quadratic in ω and subject to a known simplex
constraint. The proposed method is valid, though only point-wise, under weaker assump
tions than those required by existing methods and is applicable for a large class of inference
problems involving linear programs with estimated coefficients and potentially many nui
sance parameters beyond the specific problem studied in this paper.
I demonstrate the empirical value of SPT by revisiting the placebo study of Bertrand,
Duflo, and Mullainathan (2004) and Arkhangelsky et al. (2021) using the Merged Outgo
ing Rotation Group Earnings Data from the Current Population Survey, which provides
repeated cross-sections of weekly earnings for women from 1979 to 2018 across 50 states.
In simulation designs where parallel trends or the identifying assumptions of SC-based
methods are violated, the proposed confidence set under SPT remains robust and attains
the nominal coverage, whereas existing methods suffer severe undercoverage if the specific
identifying assumption on which they rely is violated.
1.1. Related Literature
A growing literature in partial identification explores relaxations of the parallel trends
assumption. Manski and Pepper (2018) introduce the bounded variation assumption that
allows the post-treatment counterfactual trend to differ from pre-treatment trends by at most
a given amount. Extending this approach, Rambachan and Roth (2023) develop a general
identification and inference framework for a class of restrictions on differences in trends.
Ban and Kédagni (2023) reinterpret parallel trends as a restriction on selection bias and
bound post-treatment bias by the minimum and maximum pre-treatment biases, yielding an
identified set characterized by union bounds. With two control units, Ye, Keele, Hasegawa,
and Small (2024) bound the treated unit’s trends by the minimum and the maximum of the
two control trends across all time periods, obtaining a similar union bound. I contribute
to this literature by providing a new and non-nested set of relaxations to parallel trends,
leveraging across-unit variations that are stable over time in settings with multiple control

6
units, a source of information unexplored by Ban and Kédagni (2023) and Ye et al. (2024).
In addition, parallel pre-trends may still hold under SPT but not parallel post-trends, and
therefore the approach proposed by Manski and Pepper (2018) and Rambachan and Roth
(2023) to bound violations of parallel post-trends using observed violations of parallel pre
trends may not apply. Finally, statistical inference methods for union bounds or the setting
in Rambachan and Roth (2023) do not apply under the SPT assumption. To address this, I
develop a new inference procedure that delivers asymptotically valid confidence sets.
A distinct growing literature, initiated by Abadie and Gardeazabal (2003) and further de
veloped by Abadie, Diamond, and Hainmueller (2010), proposes to estimate counterfactual
outcomes as weighted averages of control outcomes, where in later work the weights are
typically obtained as the unique solutions to penalized regression problems (e.g., Doud
chenko and Imbens, 2016, Arkhangelsky et al., 2021, Abadie and L’hour, 2021, Ben
Michael et al., 2022, Imbens and Viviano, 2023). Statistical properties are usually derived
under a linear factor model, with identification made implicit through model assumptions
and the choice of penalty. Shi, Sridhar, Misra, and Blei (2022) justify such a model under
distributional restrictions involving auxiliary covariates and within a sampling framework
where aggregate outcomes are averages of more granular observations. A complementary
line of work in the proximal inference literature uses control outcomes as proxies and as
sumes the existence of bridge functions that account for all confounding (e.g., Shi, Li,
Miao, Hu, and Tchetgen Tchetgen, 2023, Qiu, Shi, Miao, Dobriban, and Tchetgen Tchet
gen, 2024, Park and Tchetgen Tchetgen, 2025).
In contrast, I impose identifying assumptions only on population means similar to those
in the DID literature, and contribute to the broader effort to develop formal identification
analysis for SC-type methods through a partial identification framework. I highlight an ad
ditional motivation for using convex weights in the SC literature beyond interpretability:
convexity alone provides identifying power, yielding informative bounds on the counterfac
tual. I then build on the sampling framework in Shi et al. (2022) to provide valid inference
procedures for the bounds on the treatment effect of interest, an area that has received less
attention than its DID counterpart. A related study is Ferguson and Ross (2021), who pro

7
pose a sensitivity analysis to bound the bias of the SC estimator by the biases from using
SC to predict post-treatment control outcomes. Their approach is non-nested with the SPT
assumption and treats these SC estimates as known without accounting for statistical un
certainty. Two contemporaneous papers, Rincón and Song (2025) and Sun, Xie, and Zhang
(2025b), also exploit micro-level data within aggregate units for inference. Rincón and
Song (2025) independently derive a similar DID-implied weight proportional to the control
population shares as discussed in Section 3.2. However, different from this paper, Rincón
and Song (2025) focus on a regret analysis that assumes uniqueness of the SC weight and
compares it with the DID-implied weight in terms of misspecification bias; their inference
procedure constructs a confidence interval for the treatment effect by test-inverting a con
fidence set for the weights and then applying a Bonferroni correction. Sun et al. (2025b)
impose a population-mean version of the SC assumption combined with parallel trends to
form a doubly robust estimand that is valid if either assumption holds. Instead, I introduce
a unifying framework that nests the identifying assumptions underlying DID and SC-based
methods, rather than assuming any one of them holds.
Finally, there is a large literature on inference for linear programs (LPs) with estimated
coefficients. Existing methods have considered inference on the optimal value of an LP
(e.g., Freyberger and Horowitz, 2015, Cho and Russell, 2024, Gafarov, 2025, Goff and
Mbakop, 2025), the optimal solutions (e.g., Hsieh, Shi, and Shum, 2022), and the existence
of a feasible solution (e.g., Cox, Shi, and Shimizu, 2025). However, these procedures either
do not profile out nuisance parameters such as the ω weights, introduce perturbations to
LPs that lead to conservativeness, or require assumptions on the rank of the constraint
coefficient matrix that are difficult to verify in the context of this paper, as the coefficient
matrix implied by the existing methods considered here may have arbitrary rank.3 The
profiled test statistic of this paper does not require these rank assumptions and asymptotic
normality of the estimated moments alone suffices to prove its validity. The cost of less
3For example, the rank of the coefficient matrix implied by a TWFE model in Example 4 is at most 1, failing
the full rank condition of Freyberger and Horowitz (2015), Gafarov (2025), Goff and Mbakop (2025) and making
it difficult to verify the stable rank condition of Cox et al. (2025).

8
assumptions is that this method is only point-wise valid and requires test inversion of the
scalar treatment effect parameter and bootstrap critical values, though each inversion is fast
due to the profiling-out step and reformulation of the original LP with estimated constraints
into a quadratic program with known simplex constraint.
Outline: Section 2 introduces notation. Section 3 characterizes the identified set under
SPT with affine and convex weights, and shows existing methods are special cases. Section
4 details the inference method for constructing a valid confidence set for the identified set.
Section 5 presents a simulation study. Section 6 concludes. Appendix A collects the main
proofs, with auxiliary results presented in Appendix B.
2. SETUP AND NOTATION
I focus on settings where a binary treatment is implemented at the aggregate level, such
as states or countries. To facilitate the introduction of notations, consider the empirical
example from Abadie et al. (2010, ADH henceforth). At the end of the year 1988, California
implemented Proposition 99, a tobacco control program that increased cigarette excise tax
by 25 cents per pack starting in January 1989. The outcome of interest is the state-level
per capita cigarette sales in packs, observed annually from 1970 to 1989 for California
and 38 other control states.4 Denote each aggregate unit (e.g., state) as unit k ∈ {1, ..., K},
where K is the total number of units, and without loss of generality let k = 1 be the treated
unit (e.g., California). Denote time periods as t ∈ {1, ..., T0, T }, where T0 is the last pre
treatment period and T is the first post-treatment period, corresponding to 1988 and 1989,
respectively. I focus on the case with one treated unit and one post-treatment period for
simplicity, but results in this paper can be extended to multiple treated units and post
treatment periods.5 As is common in the SC literature, I take the identity of the treated unit
and treatment timing as given; see Imbens and Viviano (2023) for an alternative framework
4ADH exclude states that have implemented similar tobacco tax raises and the District of Columbia from the
pool of control units, leaving a total of 38 control states.
5For example, if the parameter of interest is the average post-treatment effect of the treated, then one can
group multiple treated units into one treated group and multiple post-treatment periods into one post-treatment
block similar to the setup in Section 3.3.2; if instead the parameter of interest is the post-treatment, time-varying

9
where they are viewed as random. I also abstract away from additional covariates, which
may be included by conditioning the outcome on observed covariates.
For the purpose of identification analysis, the unit of observation is an aggregate unit
and the outcome of interest is a unit’s population mean. I adopt the notation in Shi et al.
(2022) and denote nonstochastic population means by μ. Let μtk(1), μtk(0) be the pair of
potential aggregate outcomes for unit k at time t with and without the absorbing binary
treatment, respectively; in the running example, they correspond to the year-t expected per
capita cigarette sales in packs in each state k, with and without the tobacco control program.
At the population level, the policymaker observes μtk(0) for each control unit k ≥ 2 in all
periods t; for the treated unit, μ1
T (1) and μt1(0) for t ≤ T0 are observed. Implicit in this
notation are stable-unit-treatment-value and no-anticipation assumptions, under which the
observed aggregate outcome is given by μtk ≡ μtk(0) + μtk(1) − μtk(0) 1{k = 1, t = T }.
The target parameter of interest is the treatment effect for the treated unit (k = 1) in the
post-treatment period T ,
τ ≡ μ1
T (1) − μ1
T (0). (1)
Identification of the treatment effect τ thus boils down to identifying the counterfactual
μ1
T (0), i.e., what would happen to the treated unit (e.g., California) in the post-treatment
period T , had it not implemented the treatment (e.g., tobacco control program). To fix ideas,
I provide three examples below that contextualize the meaning of μtk(1), μtk(0) .
EXAMPLE 1—Panel Data: The DID literature commonly assumes access to balanced
panel data where the same individual is observed across multiple periods (e.g., Callaway
and Sant’Anna, 2021, de Chaisemartin and D’Haultfoeuille, 2020, Goodman-Bacon, 2021,
Sant’Anna and Zhao, 2020, Wooldridge, 2021). In this case, the policymaker observes a
random sample of (Yi1, . . . , YiT , Di1, ..., DiT , Gi), where Yit ≡ DitYit(1) + (1 − Dit)Yit(0)
is the realized time-t outcome for person i and Dit denotes whether person i has been
heterogeneous treatment effects across treated units, then one can impose Assumption 1 for each post-treatment
period and treated unit combination, and the same analysis applies.

10
treated by time t; Yit(1), Yit(0) denotes the pair of stochastic potential outcomes for per
son i at time t, with and without the treatment, respectively; Gi ∈ {1, ..., K} denotes which
aggregate unit (e.g., state) person i comes from. Then μtk(1) and μtk(0) are, respectively,
E[Yit(1)|Gi = k] and E[Yit(0)|Gi = k], which are expected individual potential outcomes
of those from unit k.
EXAMPLE 2—Repeated Cross-Sections: In some scenarios, the same person may not
be observed across all time periods. Instead, repeated cross-sectional data where different
individuals are sampled in different time periods may be available. Adapting the nota
tion commonly used in the DID literature with repeated cross-sections (e.g., Sant’Anna
and Zhao, 2020, Callaway and Sant’Anna, 2021, Sun, Xie, and Zhang, 2025b, Sant’Anna
and Xu, 2025), I use Ti ∈ {1, ..., T } to denote the period in which person i is observed.
Then the individual-level potential outcome under treatment status d ∈ {0, 1} is Yi(d) ≡
PT
t=1 Yit(d)1{Ti = t}. The policymaker observes a random sample of (Yi, Di, Ti, Gi),
where Di is the treatment status indicator and Yi = DiYi(1) + (1 − Di)Yi(0) is the re
alized outcome. Then μtk(1) and μtk(0) are, respectively, E[Yi(1)|Gi = k, Ti = t] and
E[Yi(0)|Gi = k, Ti = t], which are expected individual potential outcomes of those from
unit k observed in period t.
EXAMPLE 3—Linear Factor Models: In the SC literature, a common assumption is
that μtk(0) has a unit-by-time interactive factor structure, and its sample analog is modeled
as μtk(0) plus a noise term; see Section 3.3 for details on linear factor models. Directly
assuming a functional form on these aggregate outcomes can be useful in settings without
micro-level data, for example when the outcome of interest is gross domestic product.
Examples 1-3 each implicitly specify a sampling process on which the statistical un
certainty in estimating the treatment effect τ depends. However, this is different from the
question of whether τ can be identified, i.e., whether one can express the counterfactual
μ1
T (0) in terms of population quantities that the sample data imperfectly reveals. In Section
3, I introduce an identifying assumption whose generality and robustness lead to partial
identification of τ . I address statistical uncertainty in the estimation of τ in Section 4.

11
Notation. Unless noted otherwise, ∥ · ∥ denotes the Euclidean norm for vectors and the
spectral norm for matrices (i.e., the largest singular value). For two sequences an and bn,
an ≲ bn means an ≤ c · bn for some constant c > 0.
3. IDENTIFICATION
Since μ1
T (0) is unobserved, identifying it necessarily requires assumptions. In this sec
tion, I introduce a new yet intuitive identification assumption, which connects the treated
unit and control units through the evolution of their untreated potential outcomes over time.
I discuss what can be learned under this assumption in Section 3.1, and show that both DID
(Section 3.2) and SC-based methods (Section 3.3) can be viewed as special cases that sat
isfy this assumption:
ASSUMPTION 1—Synthetic Parallel Trends (SPT): There exists a set of weights
{ωk }K
k=2 such that PK
k=2 ωk = 1 and for all t ∈ {2, ..., T },
K
X
k=2
ωk μk
t (0) − μk
t−1(0) = μ1
t (0) − μ1
t−1(0).
Assumption 1 requires that, absent the treatment, the trends of the treated unit can be
expressed as an affine combination of the control units’ trends. Let ∆μtk(0) ≡ μtk(0) −
μtk−1(0) denote the period-t trend of unit k. In matrix notation, Assumption 1 asks for the
existence of an affine solution ω ∈ RK−1 to the following linear equations:

  
∆μ22(0) · · · ∆μ2K (0)
... . . . ...
∆μ2
T0(0) · · · ∆μK
T0 (0)

  
| {z }
≡Apre∈R(T0−1)×(K−1)
·

  
ω2
...
ωK

  
=

  
∆μ12(0)
...
∆μ1
T0 (0)

  
| {z }
≡bpre∈RT0−1
, (2)
where (2) is a system of (T0 − 1) equations with (K − 1) unknowns that involves pre
treatment trends only; each column of Apre stacks a control unit’s pre-trends and bpre
stacks the treated unit’s pre-trends, all observed at the population level. Assumption 1 fur
ther requires that the weights solving (2) carry over to the post-treatment period, thereby
identifying the treated unit’s counterfactual trend ∆μ1
T (0) by weighted averages of control

12
post-trends. One can explicitly encode the add-up constraint for the weight ω by adding a
row of 1s to both Apre and bpre in (2), under which multiplicity of solutions usually arises
when T0 < K − 1, i.e., when the number of pre-treatment periods is less than the number
of control units, as in the California example from Section 1 and later in the placebo study
in Section 5. In this case, the solution to (2) is generally not unique and the counterfactual
trend ∆μ1
T (0) is consequently set-identified, as shown in the following proposition:
PROPOSITION 3.1: Under Assumption 1, the sharp identified set for ∆μ1
T (0) is
MID ≡ a′
postω : ω ∈ RK−1, 1′ω = 1, Apreω = bpre (3)
where 1 is the conforming vector with all elements equal to 1, apost ≡ ∆μ2
T (0), · · · , ∆μK
T (0) ′ ∈
RK−1 stacks control units’ post-trends, and Apre and bpre are defined in (2).
In words, the identified set MID for the counterfactual trend ∆μ1
T (0) is given by a
weighted average of control trends in the post-treatment period T , denoted by apost, for
affine weights ω that balance the pre-trends of the treated unit and of the control units via
the equation Apreω = bpre. The counterfactual outcome μ1
T (0) is then set-identified by
adding μ1
T0(0) back to an element in the identified set for the counterfactual trend ∆μ1
T (0).
REMARK 3.1—Weight Selection by Penalized Regressions: Using matrix algebra and
properties of generalized inverses (see, for example, Result 3.2.7 of Ravishanker and Dey,
2002), the identification set in (3) can be equivalently written as
MID = a′
postω : ω, u ∈ RK−1, 1′ω = 1, ω = A−
prebpre + (IK−1 − A−
preApre)u , (4)
where A−
pre is a generalized inverse of Apre and IK−1 is the (K − 1) × (K − 1) identity
matrix. One can interpret (4) as decomposing the counterfactual a′
postω into a compo
nent anchored by A−
pre that yields a′
postA−
prebpre, plus a deviation term a′
post(IK−1 −
A−
preApre)u scaled by a free parameter u ∈ RK−1. Suppose, for example, that the pol
icymaker prefers weighting schemes with minimal l2-norm, i.e., ∥ω∥2 enters negatively
into their utility function. Then they will choose from the set MID the counterfactual cor
responding to ωl2 ≡ A†
prebpre, where A†
pre is the unique Moore-Penrose pseudoinverse

13
of Apre, and (IK−1 − A†
preApre)u absorbs any orthogonal deviations from the mini
mum l2-norm solution that are still consistent with Assumption 1. This interpretation has
a connection to the SC literature using penalized regressions, including LASSO and ridge
regressions that penalize l1 and l2 norm of the weights, respectively, or a combination
of both (e.g., Amjad et al., 2018, Arkhangelsky et al., 2021, Ben-Michael et al., 2021,
2022, Chernozhukov et al., 2021, Doudchenko and Imbens, 2016, Imbens and Viviano,
2023). Different penalty terms encode different preferences over the weighting schemes.
This paper makes explicit that each choice of weights can point-identify a distinct value
for the counterfactual, so the choice should be carefully justified within the specific empir
ical context. In cases where no strong economic reasoning motivates a particular selection,
the paper takes the unifying perspective under which all weighting choices satisfying SPT
might be consistent with the underlying DGP.
It would also be interesting to reverse this line of reasoning and ask what preferences
over weighting schemes would justify a particular value of counterfactual in MID that a
policymaker might choose, but I leave this question for future research.
REMARK 3.2—Time Weights: While empirical settings with short panels where T0 <
K − 1 are common, a similar analysis can be applied to settings where T0 ≥ K − 1, under
which the system (2) may be inconsistent. In this case, exploring the variation across time
periods is more appealing, and the policymaker may consider an alternative assumption
similar to Assumption 1 but with weights across pre-treatment time periods instead of con
trol units. The analysis of these time weights is similar to the analysis of the unit weights;
see Appendix B.1 for more discussion on time weights.
3.1. Characterizing the Identified Set via Linear Programming
Observe that MID is a closed and convex interval in R, and therefore can be written as
MID = [μl, μu],

14
where μl and μu are the optimal values of the following linear programs:
μl = min a′
postω μu = max a′
postω
s.t. Apreω = bpre, 1′ω = 1 s.t. Apreω = bpre, 1′ω = 1 (5)
Importantly, Assumption 1 is refutable by checking whether the linear programs in (5) are
feasible; see Remark 4.2 for a discussion on testing feasibility.
At first glance, Assumption 1 may seem too weak to provide sufficient identification
power that yields an informative interval, as it imposes no restriction on the sign nor mag
nitude of the weights. Remarkably, however, Assumption 1 alone can still point identify
the counterfactual if the underlying DGP produces a particular low-rank trend matrix, even
when this property is not explicitly imposed:
PROPOSITION 3.2: Consider the T0 × K matrix of all trends:


bpre Apre
∆μ1
T (0) a′
post

=

     
∆μ12(0) ∆μ22(0) · · · ∆μ2K (0)
... ... . . . ...
∆μ1
T0(0) ∆μ2
T0(0) · · · ∆μK
T0 (0)
∆μ1
T (0) ∆μ2
T (0) · · · ∆μK
T (0)

     
. (6)
Under Assumption 1, the first column is an affine combination of the other (K −1) columns.
Then, MID is a singleton if and only if the last row is an affine transformation of the other
T0 rows; otherwise, MID = R.6
Proposition 3.2 shows that MID either provides no information or point identifies the
counterfactual. The geometric intuition is simple: the linear programs in (5) have bounded
optimal values if and only if apost is orthogonal to the set of ω satisfying 1′ω = 1 and
Apreω = bpre, which are hyperplanes defined by normal vectors 1 and rows of Apre.
This orthogonality happens if and only if apost is a linear combination of these normal
vectors, i.e., when apost is in their span, since the set of valid ω is formed by intersection
6An affine combination is a linear combination with coefficients summing to 1, and an affine transformation is
a linear combination plus a constant shift.

15
FIGURE 1.—Necessary and sufficient condition for point identification under Assumption 1. With T0 = 2 and
K − 1 = 3, Apre is a 1 × 3 row vector colored in green. The set of weights that are both affine (lying on the pink
hyperplane defined by the normal vector 1) and satisfy Apreω = bpre (lying on the green hyperplane defined
by the normal vector A′
pre) is given by the intersection of these two hyperplanes, represented by the blue line.
If apost (the yellow vector) is orthogonal to this intersection—that is, if apost is in the span of {1, A′
pre} (the
hyperplane with a pink-to-green gradient)—then for any valid ω, a′
postω takes a finite value fixed by the distance
from the blue line to the origin. Otherwise, the max and min of a′
postω are unbounded along the blue line.
of hyperplanes defined by these normal vectors. That apost is a linear combination of 1 and
rows of Apre is exactly the necessary and sufficient condition for point identification stated
in Proposition 3.2, which under Assumption 1 implies that the counterfactual trend ∆μ1
T (0)
is the same linear combination of 1 and bpre. Even if this property is not imposed explicitly
but holds true in the underlying DGP, it will be effectively “learned” by the identified set,
which adaptively shrinks to a singleton. Figure 1 illustrates this geometrically.
The class of DGPs that produce trends consistent with this low-rank structure includes
those implied under a TWFE model, as shown in Example 4.
EXAMPLE 4—Two-Way Fixed Effects: Suppose μtk(0) is additively separable in time-t
and unit-k fixed effects,
μk
t (0) = λt + γk, for all 1 ≤ t ≤ T, 1 ≤ k ≤ K, (7)

16
where (7) abstracts away from idiosyncratic shocks for the purpose of identification analy
sis. Then the period-t trend ∆μtk(0) = (λt − λt−1) is the same for all units k, implying that
Assumption 1 holds for any affine ω. In this case, apost = [(λT − λT0), . . . , (λT − λT0)]′
has the same value for all its components and thus any affine ω will return the same
a′
postω = (λT − λT0), thereby point-identifying ∆μ1
T (0) = (λT − λT0). Note that in this
example, since all units have the same trends in any time period, both apost and the rows
of Apre are scalar multiples of 1, and it is straightforward to verify that apost is in the
span of 1 and the row space of Apre.
Affine weights have been used in settings where homogeneity across units is imposed;
see, for example, Remark 2.1 in Chen et al. (2025). In a similar spirit, the low-rank property
in Proposition 3.2 can be interpreted as homogeneity across time periods, under which
post-trends are representable by pre-trends through an affine transformation. However, this
property can easily break down. Suppose the underlying DGP deviates from the TWFE
model in (7) in a way that a unit-heterogeneous term mk enters only in the last period T :
μk
t (0) =

 
 
λt + γk if t ≤ T0,
λT + γk + mk otherwise.
Then apost is no longer a scalar multiple of 1 anymore and falls outside of the span of
1 and Apre, even if {mk}K
k=1 are infinitesimal in magnitude. In this case, MID = R and
what TWFE identifies can be arbitrarily wrong depending on the exact values of {mk}K
k=1.
Whether the trend matrix (6) exhibits the low-rank structure in Proposition 3.2 has
testable implications: one can test whether there exists φ ∈ RT0 such that apost =
[1 A′
pre]φ. This is similar to testing whether Assumption 1 holds (or equivalently, whether
the linear programs in (5) are feasible); see Remark 4.2. If the underlying DGP does not
have this low-rank property, a natural next step is to consider more credible assumptions
that restrict the counterfactual to a nontrivial, informative set. A common approach in the
causal inference literature where estimands take a weighted average form is imposing non
negativity on the weights. Combined with Assumption 1, this nonnegativity constraint en
sures that the treated unit’s trend lies in the convex hull of the control trends across all time

17
periods. While convexity is often motivated by interpretability and avoiding extrapolation,
it also provides identifying power by restricting the counterfactual trend to lie between the
minimum and maximum of control post-trends, yielding an identified set that is a bounded
subset of MID given by
M+
ID ≡ a′
postω : ω ∈ RK−1
+ , 1′ω = 1, Apreω = bpre = [μ+
l , μ+
u ], (8)
where μ+
l and μ+
u are the optimal values of the following linear programs with nonnegativ
ity constraint ω ≥ 0:
μ+
l = min a′
postω μ+
u = max a′
postω
s.t. Apreω = bpre, 1′ω = 1, ω ≥ 0 s.t. Apreω = bpre, 1′ω = 1, ω ≥ 0 (9)
The SC literature typically focuses on nonnegative weights for its interpretability and
sparsity under certain conditions (see Abadie, 2021, for a review). It should be emphasized
that such nonnegativity constraint is an identifying assumption that shapes the identification
region of the counterfactual. This is a refutable assumption if (9) is infeasible but (5) is
feasible. In particular, convexity may be rejected if the treated unit’s trend is systematically
larger or smaller than all control trends, causing ∆μt1(0) to lie outside of the convex hull of
{∆μt2(0), . . . , ∆μtK(0)}.
In what follows, I draw connections between M+
ID and widely-used empirical strategies.
3.2. Connection to Difference-in-Differences under Parallel Trends
Assumption 1 relaxes the canonical two-timing-group parallel trends assumption ex
tended to multiple periods, which requires that, absent treatment, the outcome evolution of
the eventually-treated group is the same as that of the never-treated group. Formally, for all
t ∈ {2, ..., T }, under the panel data setting in Example 1,
E[Yit(0) − Yit−1(0)|DiT = 1] = E[Yit(0) − Yit−1(0)|DiT = 0], (10)
and under the repeated cross-section setting in Example 2,
E[Yi(0)|Di = 1, Ti = t] − E[Yi(0)|Di = 1, Ti = t − 1]

18
=E[Yi(0)|Di = 0, Ti = t] − E[Yi(0)|Di = 0, Ti = t − 1]. (11)
Note that the TWFE model in (7) differs from the two-timing-group parallel trends as
sumption in (10)-(11): the former implicitly imposes a separate parallel trends assumption
between the treated unit and each of the control units, whereas the latter defines comparison
groups by treatment timing and pools all never-treated units into a single control group. The
two coincide when there is only one control unit and one post-treatment period. Otherwise,
the assumption imposed by TWFE is stronger, and as noted by Chen et al. (2025), implies
over-identification restrictions, which they leverage for efficiency gains when aggregate
units are defined by treatment timing groups in a staggered-adoption setting.
Recall in Examples 1-2, Gi ∈ {1, ..., K} denotes the aggregate unit (e.g., state) to which
individual i belongs. Assume (i) in the panel data setting, Gi does not vary across time
(e.g., individual i does not relocate over the sampling periods) and (ii) in the repeated
cross-section setting, the share of observations from each control unit k among all control
observations is time-invariant, i.e., P(Gi = k|Di = 0, Ti = t) = P(Gi = k|Di = 0) for all
k ≥ 2. If the policymaker believes that the parallel trends assumption (10) holds under the
panel data setting, then by the law of iterated expectation,
E[Yit(0) − Yit−1(0)|DiT = 1]
| {z }
=∆μt1(0)
=
K
X
k=2
E[Yit(0) − Yit−1(0)|DiT = 0, Gi = k]
| {z }
=∆μtk (0)
P(Gi = k|DiT = 0)
| {z }
≡ωPT
k
. (12)
Therefore, the parallel trends assumption (10) implicitly selects a particular weighting
scheme, namely ωPT ≡ [ωPT
2 , ..., ωPT
K ]′ defined in (12), as the solution to the system of lin
ear equations (2). These weights correspond to the population shares of each control unit
among all control units, which are nonnegative and sum to 1. An immediate implication of
parallel trends is that the counterfactual trend identified by ωPT should fall inside M+
ID:
E[YiT − YiT0|DiT = 0]
| {z }
=a′
postωPT
∈ M+
ID. (13)

19
This is a testable implication, and testing whether (13) holds is conceptually equivalent to
testing violations of parallel pre-trends commonly used in empirical research: observe that,
by definition of M+
ID, (13) holds if and only if ApreωPT = bpre, which is equivalent to the
parallel trends assumption in (10) holding in all pre-treatment periods.
An expression analogous to (12) can be derived given repeated cross-sectional (RCS)
data, whose version of the parallel trends assumption (11) implies
E[Yi(0)|Di = 1, Ti = t] − E[Yi(0)|Di = 1, Ti = t − 1]
| {z }
=∆μt1(0)
(14)
=
K
X
k=2
E[Yi(0)|Di = 0, Ti = t, Gi = k] − E[Yi(0)|Di = 0, Ti = t − 1, Gi = k]
| {z }
=∆μtk (0)
P(Gi = k|Di = 0)
| {z } ωPT,RCS
k
.
And a similar analysis can be applied to the repeated cross-section setting. In what follows,
I focus on the panel data setting and ωPT in (12) for simplicity.
The relaxation of parallel trends allowed by Assumption 1 can be interpreted as a set of
restrictions that regulate how much post-treatment violations of parallel trends can deviate
from their pre-treatment counterparts through the lens of the partial identification frame
work proposed by Manski and Pepper (2018) and Rambachan and Roth (2023). Using the
notation of Rambachan and Roth (2023), denote the difference in trends by δ, where
δ≡


δpre
δpost

 , δpre ≡

   
∆μ12(0) − PK
k=2 ωPT
k ∆μ2k(0)
...
∆μ1
T0 (0) − PK
k=2 ωPT
k ∆μk
T0 (0)

   
, δpost ≡ ∆μ1
T (0) −
K
X
k=2
ωPT
k ∆μk
T (0),
i.e., δpre and δpost are, respectively, the pre- and post-treatment differences in trends.
Then the set of possible violations of parallel trends allowed by Assumption 1 (SPT) with
nonnegative weights is given by
∆SPT ≡

           
           
δ=

     
PK
k=2(ω − ωPT)k∆μ2k(0)
...
PK
k=2(ω − ωPT)k∆μk
T0 (0)
PK
k=2(ω − ωPT)k∆μk
T (0)

     
| {z }
≡β(ω)
: ω ∈ RK−1
+ , 1′ω = 1, Apreω = bpre

           
           
, (15)

20
which collects all possible differences between the trend of the never-treated group,
PK
k=2 ωPT∆μtk(0), and a point from the convex hull of control trends that exactly matches
the treated unit’s pre-treatment trends. Parallel trends implies 0 ∈ ∆SPT, i.e., ωPT produces
a valid convex combination of control trends equal to the treated unit’s trend in pre-periods.
∆SPT is a new set of relaxations non-nested with the proposals in Rambachan and Roth
(2023) that use violations of parallel pre-trends to bound violations of parallel post-trends.
In particular, under SPT one may have parallel pre-trends if there is a convex ω ̸= ωPT such
that the first T0 elements of β(ω) in (15) are 0 but a non-parallel post-trend such that the last
element of β(ω) is non-zero, in which case the bounding approach of Rambachan and Roth
(2023) would imply no violation of parallel post-trends given that all pre-trends are parallel.
In addition, the inference method of Rambachan and Roth (2023) does not apply to M+
ID.
Although ∆SPT is polyhedral in δ—i.e., it can be written as {δ : Bδ ≤ β} for matrix B =
[IT0; −IT0]′, where IT0 is the (T0 × T0) identity matrix, and vector β = [β(ω)′; −β(ω)′]′
for β(ω) defined in (15)—the dependence of β(ω) on the nuisance parameter ω subject
to the constraint Apreω = bpre places the problem outside the scope of Rambachan and
Roth (2023). Their inference method builds on Andrews et al. (2023) and requires that the
variance of the moment constraints does not depend on the nuisance parameter. This is
not the case here, since ω is multiplied by Apre, which needs to be estimated, and thus
the variance of the implied moments depends on ω; see (29). In Section 4, I propose an
alternative inference method.
3.3. Connection to Synthetic Control Methods
In the SC literature, a common assumption is that, absent the treatment, the sample
realization of the population outcome μtk(0) that the policymaker would have observed,
denoted by μk,s
t (0)—with the superscript “s” indicating it is a sample quantity and thus
stochastic—follows a linear factor model:
μk,s
t (0) = λ′
tγk + εkt, (16)

21
where λt ∈ RF is a vector of latent time-varying factors, γk ∈ RF is a vector of latent unit
specific loadings, and εkt ∈ R is a mean-zero exogenous shock.7 In this case, the population
counterpart of μk,s
t (0) is given by the structural component of the factor model (16),
μk
t (0) = E μk,s
t (0) = E[λ′
t γk ],
where the expectation is taken over the joint distribution of (λt, γk, εkt). Below I discuss
the identifying assumptions behind the original SC method of ADH and one of its many
variants. They differ in the assumption of whether the unit weights balance sample ag
gregate outcomes μk,s
t (0)—i.e., the “perfect pre-treatment match” assumption stated in
Assumption 2(i)—or latent factors and loadings λ′tγk only. The former assumption offers
transparency, as sample aggregate outcomes are directly observed in the data, but is dif
ficult to satisfy in practice, as discussed in Remark 3.3. In contrast, the latter assumption
sidesteps this challenge by imposing conditions on the unobservables, but at the cost of
reduced transparency and verifiability. In what follows, I refer to both time factors and unit
loadings as “factors” for simplicity and assume they are bounded in magnitude.
3.3.1. Synthetic Controls with Perfect Pre-Treatment Match
Providing the first formal results in the SC literature, ADH impose the following as
sumptions on the factor model (16), where ωbSC in Assumption 2(i) denotes the SC weights,
with the hat highlighting the fact that these weights depend on sample aggregate outcomes
and are therefore stochastic:
ASSUMPTION 2—ADH-SC Assumptions:
(i) There exists a set of convex weights ωbSC = ωbSC
2 , ..., ωbSC
K
′ ≥ 0 such that 1′
ωbSC = 1
and for all pre-treatment periods t ≤ T0,
μ1,s
t (0) =
K
X
k=2
ωbSC
k μk,s
t (0). (17)
7The additively separable unit and time fixed effects model in Example 4 is a special case—with some abuse
of notation—corresponding to a time factor [λt, 1]′ and a unit loading [1, γk]′, where both γk and λt are scalars.

22
(ii) εkt is independent across units and time periods with E[εkt] = 0 for all k ∈ {1, ..., K}
and t ∈ {1, ..., T }; for k ≥ 2 and t ≤ T0, E[|εkt|p] < ∞ for some even p > 2; the
smallest eigenvalue of 1
T0
PT0
t=1 λtλ′t is bounded below by ξ > 0; |λtf | ≤ λ < ∞ for
all f ∈ {1, ..., F } and t ∈ {1, ..., T }.
Under the linear factor model (16) and Assumption 2, ADH show that the set of weights
ωbSC in Assumption 2(i) that balances pre-treatment sample aggregate outcomes between
the treated unit and the control units (“perfect pre-treatment match” henceforth) carries
over to the post-treatment period T , had unit 1 not implemented the treatment:
as T0 → ∞, E
"K
X
k=2
ωbSC
k μk,s
T
#
− μ1
T (0) → 0, (18)
i.e., the ADH-SC estimator PK
k=2 ωbSC
k μk,s
T is asymptotically unbiased for the counterfac
tual μ1
T (0) = E[λ′
T γ1] as the number of pre-treatment periods T0 grows. The next result
shows that the identifying assumption of ADH is a special case of SPT with convex weights,
though in an asymptotic sense as the ADH-SC method is only asymptotically valid. In the
setting where T0 grows, the dimension of the (T0 − 1) × (K − 1) pre-trends matrix Apre
changes along the sequence T0 → ∞. The following regularity assumption on the asymp
totic behavior of Apre guarantees the identified set M+
ID in (8) is eventually nonempty and
that the spectral norm of its Moore-Penrose inverse, ∥A†
pre∥, does not diverge.
ASSUMPTION 3—Asymptotic Behavior of Apre: Along the sequence T0 → ∞, even
tually the system Apreω = bpre has a convex solution and the smallest singular value of
Apre is bounded below by a strictly positive constant.
PROPOSITION 3.3: Let Assumption 2 hold with E[|ε1t|p] < ∞ for some even p > 2 and
t ≤ T0.8 Then under deterministic factors {λ′tγk}t∈[T ],k∈[K], as T0 → ∞,
ApreE ωbSC − bpre −→ 0 and a′
postE ωbSC −→ ∆μ1
T (0) = (λT − λT0)′γ1,
8While Abadie et al. (2010) only require “E[|εkt|p] < ∞ for some even p > 2” to hold for the control units
(k ≥ 2) as in Assumption 2(ii), their main goal is to show post-treatment asymptotic unbiasedness of the SC
estimator, where the period-T shock of the treated unit ε1T enters the bias term with mean-zero and thus only the

23
implying that under Assumption 3, infδ∈M+
ID
(λT − λT0)′γ1 − δ → 0.
The proof of Proposition 3.3 requires nonrandom factors λ′tγk to show that the ADH
SC weight ωbSC in (17) asymptotically satisfies Assumption 1 by separating the non
stochastic part E[λ′tγk] = μtk(0) from the expectation of the stochastic weighted sum
E
PK
k=2 ωbSC
k λ′tγk . Deterministic factors are commonly assumed in the SC literature, (e.g.,
Arkhangelsky et al., 2021, Ben-Michael et al., 2021, Ferman, 2021, Sun et al., 2025a),
under which the expectation of the ADH-SC weights asymptotically recovers the counter
factual trend under the factor model, whose distance to the identified set under SPT with
convex weights converges to 0. Importantly, regardless of whether the SC assumptions are
satisfied, MID and M+
ID are well-defined objects under Assumption 1 and do not rely on
any particular functional form of the outcome.
REMARK 3.3—Violation of Perfect Pre-Treatment Match: Proposition 3.3 shows that
the ADH-SC weight ωbSC asymptotically “solves” the system of equations Apreω = bpre
and recovers the latent factors of the treated unit. There, Assumption 2(i)—perfect pre
treatment match—plays a key role in ensuring the validity of the ADH-SC estimator.
However, as also noted by ADH (p. 495), “it is often the case that no set of weights
exists such that” Assumption 2(i) is satisfied exactly in sample. In practice, ωbSC is es
timated from data via solving the following constrained optimization problem, where
∆K−2 ≡ {ω ∈ RK−1
+ : 1′ω = 1} denotes the simplex in RK−1:
ωbSC ∈ arg min
ω∈∆K−2
T0
X
t=1
μ1,s
t (0) −
K
X
k=2
ωk μk,s
t (0)
!2
. (19)
For ωbSC to achieve perfect pre-treatment match, the objective function (19) needs to be
exactly 0 at ωbSC, a condition that often fails in practice (see also Ferman and Pinto, 2021,
for a discussion on imperfect pre-treatment match). In addition, the bias of the ADH-SC
control shocks remain; see their R2t term on p. 504. On the other hand, Proposition 3.3 shows the validity of the
weights in terms of L1-norm, where pre-treatment shocks of the treated unit show up in the bias (see Eq. (45)),
and therefore the bounded p-th moment condition is also needed for k = 1.

24
estimator in (18) only vanishes in the limit as T0 → ∞, yet perfect pre-treatment match
becomes even more demanding as the number of pre-periods increases. To see this under
Assumption 2 only, let Λ ≡ [λ1, ..., λT0] and Γ ≡ [γ1, ..., γK] stack the latent pre-treatment
time and unit factors, respectively. Define the event that perfect pre-treatment match is
satisfied in a particular t ≤ T0:
Et ≡
(
∃ω ∈ ∆K−2 : μ1,s
t (0) =
K
X
k=2
ωk μk,s
t (0)
)
.
Then the probability that, conditional on (Λ, Γ), the perfect pre-treatment match assumption
holds decreases exponentially in T0 under any non-degenerate linear factor model:
P ∃ω ∈ ∆K−2 : μ1,s
t (0) =
K
X
k=2
ωk μk,s
t (0) ∀ t ≤ T0 Λ, Γ
!
≤
T0
Y
t=1
P

Et
t−1
\
t ̃=1
Et ̃, Λ, Γ


where the inequality follows from applying the probability chain rule to P TT0
t=1 Et . Note
that the upper bound decreases exponentially in T0 as long as P Et
Tt−1
t ̃=1 Et ̃, Λ, Γ = 1 for
at most finitely many t ≤ T0, which essentially requires the period-t shocks, {ε1t, ..., εKt},
are not perfectly predictable by past shocks and latent factors infinitely often, a mild con
dition for any non-degenerate factor model.
Instead of the observed sample outcomes, the later SC literature has also considered a
similar match assumption on the latent factors only, as described in the next section.
3.3.2. Synthetic Controls with Match on Latent Factors
Rather than assuming perfect pre-treatment match on the observed sample outcomes,
numerous papers in the SC literature consider the existence of weights that match directly
on the latent factors (e.g., Arkhangelsky et al., 2021, Ferman, 2021, Ferman and Pinto,
2021, Imbens and Viviano, 2023, Sun et al., 2025a). In this section, I focus on the syn
thetic difference-in-differences (SDID) method proposed by Arkhangelsky, Athey, Hirsh
berg, Imbens, and Wager (2021, AAHIW henceforth) for its close relevance to the current
paper in terms of combining insights from both DID and SC. I show that a result analogous
to Proposition 3.3 holds for SDID.

25
AAHIW also impose the factor model (16), but assume nonrandom factors λ′tγk as in
Proposition 3.3. They focus on a diverging number of both units and time periods: for a to
tal of N units, let I1 denote the set of N1 indices associated with units that are treated after
period T0, and remain exposed to the treatment until period Tf > T0, where the subscript
“f” indicates that Tf is the final number of periods observed, during which {1, ..., T0}
indexes the pre-treatment periods, and T1 ≡ {T0 + 1, ..., Tf} indexes the post-treatment pe
riods with size |T1| = T1. To accommodate this multiple-treated-unit, multiple-post-period
framework, AAHIW extend the linear factor model (16) to incorporate nonstochastic het
erogeneous treatment effects across both units and time periods so that the observed sample
aggregate outcome follows
μj,s
t =λ′
tγj + 1{j ∈ I1, t ∈ T1}τjt + εjt, for j ∈ [N ], (20)
i.e., as in the ADH model (16), absent the treatment, the policymaker observes in the sample
the structural term λ′tγj plus the noise εjt; but for units j in the treated group I1 after
treatment exposure t ∈ T1, there is an additional treatment effect term τjt.
Let I0 ≡ [N ] \ I1 collect the set of N0 control unit indices in ascending order. Re
index the control units in I0 by {2, ..., K}, assigning index k ∈ {2, ..., K} to the (k − 1)st
smallest element of I0, so that index 2 corresponds to the smallest element, index 3 to the
second smallest, and so on, with K = N0 + 1 corresponding to the largest. AAHIW propose
an asymptotic framework where either T1 or N1 can be non-diverging, but not both. To
translate their potential outcome notation to the nomenclature of this paper, I follow their
condensed-form notation (AAHIW, Section VII.1, Online Appendix) and group all treated
units j ∈ I1 into a single treated group re-indexed by k = 1, and collect all post-treatment
periods t ∈ T1 into a single post-treatment block re-indexed by t = T . Specifically, let
μ1
N1,t(0) ≡ 1
N1
P
j∈I1 λ′tγj group the N1 treated units in period t; before treatment t ≤ T0,
μk
t (0) = λ′
tγk, for k ∈ {2, ..., K},
μ1
t (0) =

 
 
μ1
N1,t(0), fixed N1
limN1→∞ μ1
N1,t(0), diverging N1
(21)

26
and after treatment exposure,
μk
T (0) =

 
 
1 T1
P
t∈T1 λ′tγk, fixed T1
limT1→∞ 1
T1
P
t∈T1 λ′tγk, diverging T1
for k ∈ {2, ..., K},
μ1
T (0) =

    
    
limT1→∞ 1
T1
P
t∈T1 μ1
N1,t(0), fixed N1 but diverging T1
limN1→∞ 1
T1
P
t∈T1 μ1
N1,t(0), fixed T1 but diverging N1
limT1,N1→∞ 1
T1
P
t∈T1 μ1
N1,t(0), both N1 and T1 diverging
(22)
For simplicity and without loss of generality, I focus on the asymptotic regime with a
fixed post-treatment period (T1 = 1 and Tf coincides with T ) and N1 → ∞; extending the
results to the other asymptotic settings described above is straightforward but entails more
cumbersome notation. Under this framework, the parameter of interest τ in (1) is given by
τ ≡ μ1
T (1) − μ1
T (0) = lim
N1→∞
1
N1
X
j∈I1
τjT , where μ1
T (1) = lim
N1→∞
1
N1
X
j∈I1
(λ′
T γj + τjT ). (23)
The limits in (21)-(23) are assumed to exist and be finite. In addition to unit-specific
weights, AAHIW also consider weighting across pre-treatment time periods and allow for
a constant shift that can be differenced out. Let ω ≡ [ω2, ..., ωK]′ denote a set of convex unit
weights and ω0 ∈ R a constant. The following is a restatement of a subset of assumptions
in Assumption 4 of AAHIW relevant for identification using unit weights:
ASSUMPTION 4—SDID Identification: Let (ω ̃0, ω ̃) be the nonstochastic oracle weights
defined in Section III-B of Arkhangelsky et al. (2021, p.4104) that solves9
min
ω0∈R,ω∈∆K−2
T0
X
t=1
ω0 +
K
X
k=2
ωk μk
t (0) − μ1
N1,t(0)
!2
+ ζ∥ω∥2
2. (24)
As T0, K, N1 → ∞ and for ν ≡ [ν1, ..., νT0]′ a convex weight, the following holds:
(i) for t ≤ T0, ω ̃0 + PK
k=2 ω ̃kμtk(0) − μ1
N1,t(0) → 0;
9In (24), ζ is a penalty parameter that depends on the number of pre-periods and covariance of the error term;
see Eq. (19) of AAHIW for its exact definition.

27
(ii) μ1
N1,T (0) − PK
k=2 ω ̃kμk
T (0) − PT0
t=1 νt μ1
N1,t(0) − PK
k=2 ω ̃kμtk(0) → 0.
Assumption 4(i) is a restatement of the equation immediately following Eq. (24) of
AAHIW. It requires (ω ̃0, ω ̃) to exactly minimize the first part of the objective function
in (24), though in an asymptotic sense, to achieve perfect pre-treatment match on the latent
factors up to a constant ω ̃0 difference as T0, K, N1, → ∞; Assumption 4(ii) is a restatement
of Eq. (26) of AAHIW that ensures the oracle unit weights are also valid in the post-period
T to recover the treated unit’s counterfactual factor μ1
N1,T (0) via a double-differencing
form that cancels out the constant difference ω ̃0. To see this, note that Assumption 4(i)
implies that the subtrahend in Assumption 4(ii) goes to ω ̃0, implying10
μ1
T (0) − ω ̃0 +
K
X
k=2
ω ̃ k μk
T (0)
!
→ 0.
The first part of the objective function in (24) can be interpreted as an asymptotic version
of SPT under convex weights: since the constant ω0 can be canceled out after first-order
differencing, implying that the treated unit’s trend is a convex combination of control units’
trends in the pre-periods. However, such convex combination may not be unique, and the
second part of the objective function in (24) selects the convex weight with the smallest
l2-norm. This selection may not be the correct one that recovers the counterfactual in the
post-period T , but is nevertheless assumed to be correct under Assumption 4(ii). Hence,
Assumption 4 is a special case of SPT, which takes into account all convex weights that
reproduce the treated unit’s pre-trends, and a result analogous to Proposition 3.3 holds:
PROPOSITION 3.4: Let Assumption 4 hold. Then as T0, K, N1 → ∞,
Apreω ̃ − bpre → 0 and a′
postω ̃ → ∆μ1
T (0) = lim
N1→∞
1
N1
X
j∈I1
(λT − λT0)′γj.
Under a strengthened version of Assumption 3 that accounts for K, N1 → ∞,
inf
δ∈M+
ID
∆μ1
T (0) − δ → 0. (25)
10For more algebraic details, see the proof of Proposition 3.3 in Appendix A.

28
REMARK 3.4—Probability Limit of the SDID Estimator: Let τbSDID denote the SDID
estimator for τ defined in Algorithm 1 of AAHIW (p. 4093). Then under additional as
sumptions stated in their Theorem 1, AAHIW show that τbSDID is asymptotically normal
and centered at the true τ . An immediate implication is consistency: τbSDID − τ = op(1) for
the expression of τ given in (23) under the factor model. Then Proposition 3.3 implies that
the distance between the probability limit of τbSDID and the identified set for the treatment
effect under SPT with convex weights, formally defined in (26), converges to 0.
In conclusion of Section 3, the common ground of both DID under parallel trends and
SC-based methods is the intuition that, absent treatment, the treated unit can be expressed
as a convex combination of a group of control units. Assumption 1 is an identifying as
sumption that synthesizes this idea of weighting at the population expectation level and
nests widely-used empirical strategies under the conditions stated in this section.
4. INFERENCE ON THE IDENTIFIED SET FOR THE TREATMENT EFFECT
So far the focus has been on identifying the counterfactual trend ∆μ1
T (0) ≡ μ1
T (0) −
μ1
T0(0), which then identifies the counterfactual outcome μ1
T (0) and consequently the treat
ment effect τ ≡ μ1
T (1) − μ1
T (0). However, for inference, the sampling uncertainty in both
μ1
T (1) and μ1
T (0) should be taken into account and thus inference for τ directly is more use
ful than inference for the counterfactual alone. Under Assumption 1 with convex weights,
the identified set for τ is given by
E+
ID ≡ μ1
T (1) − μ : μ − μ1
T0(0) ∈ M+
ID , (26)
i.e., E+
ID is the set of values that takes the difference between the observed period-T mean
outcome μ1
T (1) and a candidate value μ for the counterfactual μ1
T (0), for the set of μ that
is consistent with a counterfactual trend value μ − μ1
T0(0) in the identified set M+
ID under
convex weights defined in (8).
In this section, I propose a valid confidence set that covers every element of E+
ID with a
pre-specified (1 − α) probability by test inversion, given estimators of (Apre, bpre, apost).
The key insight that motivates the proposed inference procedure is that E+
ID can be charac

29
terized by moment equalities: τ ̃ ∈ E+
ID if and only if there exists ω ∈ ∆K−2 such that

 
 
Apreω − bpre = 0
a′
postω − μ1
T (1) − τ ̃ − μ1
To(0) = 0
(27)
where the second equality in (27) follows from the identity μ1
T (0) = μ1
T (1) − τ . Let
A≡


Apre
a′
post

, b≡


bpre
μ1
T (1) − μ1
T0 (0)

 (28)
stack observed trends that need to be estimated. Let vec(A) ≡ [A′·,1, . . . , A′
·,K−1]′ stack
columns of A, IT0 denote the (T0 × T0) identity matrix, ⊗ be the Kronecker product, and
eT0 denote the T0-th standard basis vector in RT0. Rewrite the moment equalities (27) by
mτ ̃(ω; A, b) ≡ [−IT0, ω′ ⊗ IT0]
| {z }
≡J (ω)


b
vec(A)

 + τ ̃eT0 = 0, (29)
where for a fixed τ ̃ ∈ E+
ID, the moment function mτ ̃(ω; A, b) is linear in both the nuisance
parameter ω and (A, b) to be estimated. Then the identified set for the treatment effect E+
ID
in (26) can be equivalently written as
E+
ID =
n
τ ̃ ∈ R : ∃ ω ∈ ∆K−2 such that mτ ̃(ω; A, b) = 0
o
= τ ̃ ∈ R : min
ω∈∆K−2 mτ ̃(ω; A, b)′mτ ̃(ω; A, b) = 0 (30)
where (30) translates the constraints of the original linear programs (9) that need to be
estimated into an objective function quadratic in the choice variable ω, which is then pro
filed out via minω∈∆K−2( · ) over a known simplex constraint ∆K−2. This transformation
sidesteps the need to impose rank conditions on the constraint coefficient matrix Apre in
the original linear programs (9) (see, e.g., Freyberger and Horowitz, 2015, Gafarov, 2025,
Goff and Mbakop, 2025, Cox et al., 2025, for examples of rank conditions on coefficient
matrices). Allowing Apre to have arbitrary rank is important in the context of this paper,
as the existing methods considered here may imply an Apre that is highly rank-deficient;
in particular, the Apre matrix implied under the TWFE model in Example 4 has rank ≤ 1.

30
I assume the availability of either panel data as in Example 1 or repeated cross-sections
(RCS) as in Example 2.
ASSUMPTION 5—Sampling: Assume a sample of size n is available, where either
(i) (Panel) {Yi1, ..., YiT , Gi}in=1 is independently and identically distributed (iid) drawn
from P, and pk ≡ P(Gi = k) ≥ ε > 0 for constant ε and all k ∈ {1, ..., K} ; or
(ii) (RCS) {Yi, Gi, Ti}in=1 for (Yi, Gi) iid sampled conditional on Ti such that P(Yi ≤
y, Gi = k, Ti = t) = πtPt(Yi ≤ y, Gi = k), where
• Pt is the conditional distribution of (Yi, Gi) given Ti = t if Ti is iid multinomial,
in which case both πt = P(Ti = t) and πkt ≡ P(Gi = k, Ti = t) ≥ ε > 0; or
• Pt is the distribution of (Yi, Gi) within stratum Ti = t if Ti is fixed, in which case
both πt = limn→∞ #(Ti=t)
n and πkt ≡ πtPt(Gi = k) ≥ ε > 0.
Assumption 5 allows for both panel data and repeated cross-sections. In the latter case,
it accommodates both random-Ti sampling and fixed Ti-stratum sampling, as discussed in
Sant’Anna and Zhao (2020), Sant’Anna and Xu (2025), and the references therein. As in
Sant’Anna and Xu (2025), Assumption 5 does not impose restrictions on compositional
changes that require the distribution of (Yi, Gi)|Ti to be the same across all Ti. A natural
estimator for the observed population mean outcome μtk ≡ μtk(0) + μtk(1) − μtk(0) 1{k =
1, t = T } is the sample mean within the (kt)-cell:
μbk
t≡

 
 
1 n
Pn
i=1
1
pbk 1{Gi = k}Yit for pbk ≡ 1
n
Pn
i=1 1{Gi = k}, if panel;
1 n
Pn
i=1
1
πbkt 1{Gi = k, Ti = t}Yi for πbkt ≡ 1
n
Pn
i=1 1{Gi = k, Ti = t}, if RCS.
These sample means can be plugged into (A, b) in (28), where each observed trend ∆μtk ≡
μtk − μtk−1 is estimated by μbtk − μbtk−1. Let Abn, bbn denote the resulting estimator and
bm2
τ ̃(ω) ≡ mτ ̃ ω; Abn, bbn
′
mτ ̃ ω; Abn,bbn , m2
τ ̃(ω) ≡ mτ ̃ (ω; A, b)′ mτ ̃ (ω; A, b) , (31)
Qbn(τ ̃) ≡ min
ω∈∆K−2 bm2
τ ̃(ω), Q(τ ̃) ≡ min
ω∈∆K−2 m2
τ ̃(ω), (32)
where for any τ ̃ ∈ R, Qbn(τ ̃) is the sample criterion function with plugged-in Abn, bbn ,
whose population counterpart is Q(τ ̃).

31
Note that Q(τ ̃) is a Hadamard directionally differentiable mapping of the moment func
tion mτ ̃(ω; A, b) that first squares it and then takes its minimum over ω ∈ ∆K−2. If
√n bm2
τ ̃(ω) − m2
τ ̃(ω)
converges weakly to a Gaussian process indexed by functions of ω—as it does under the as
sumptions in Theorem 4.1 below—then by the Delta method for directionally differentiable
functions, the limit distribution of
√n Qbn(τ ̃) − Q(τ ̃) (33)
is given by the Hadamard directional derivative of Q(τ ̃) applied to the limit Gaussian pro
cess. The resulting limit, denoted by ψ(τ ̃), has a complex expression deferred to (51) in
Appendix A. Under the null hypothesis that τ ̃ ∈ E+
ID, Q(τ ̃) = 0, and a (1 − α)-level con
fidence set for the elements in E+
ID can then be constructed by test inversion: for cβ(τ ̃)
denoting the β-quantile of ψ(τ ̃),
C S (1−α)
n≡
n
τ ̃ : √nQbn(τ ̃) ≤ c(1−α+ς)(τ ̃) + ς
o
, (34)
where, following Andrews and Shi (2013), ς > 0 is an infinitesimal uniformity factor to
account for potential discontinuities in the distribution of ψ(τ ̃) at c(1−α)(τ ̃). The next result
establishes point-wise validity of CS(1−α)
n for all τ ̃ ∈ E+
ID, after which I present a consistent
estimator for the critical value via bootstrap.
THEOREM 4.1: Let Assumption 1 hold with non-negative weights and assume, under the
sampling scheme in Assumption 5, there is a constant 0 < C < ∞ such that 0 < E Yit2 < C
in the panel data case or 0 < E Yi2 < C in the RCS case. Then for any α ∈ (0, 1),
lim
n→∞ P τ ̃ ∈ CS(1−α)
n ≥ 1 − α for all τ ̃ ∈ E+
ID.
REMARK 4.1—Inequality Constraints: Though the inference problem of this paper only
involves equality constraints that need to be estimated, the proposed method can also be
applied to linear programs with unknown inequality constraints, in which case the moment

32
condition in (29) changes from equality to inequality:
mτ ̃(ω; A, b) ≤ 0.
Instead of squaring mτ ̃, violations of inequality constraints can be measured by taking the
positive part of mτ ̃ using the criterion function
min
ω∈∆K−2[mτ ̃(ω; A, b)]+, (35)
where [ · ]+ ≡ max{ · , 0} returns the largest positive entry of the input vector, which is again
a Hadamard directionally differentiable function. Since compositions preserve directional
differentiability (Shapiro, 1990, Proposition 3.6), the criterion function (35) is also direc
tionally differentiable and the same argument used in the proof of Theorem 4.1 applies.
REMARK 4.2—Testing Feasibility: Theorem 4.1 can be adapted to construct a test for
feasibility of solutions. For example, testing whether the linear programs with nonnegativ
ity constraints in (9) have a feasible solution amounts to testing
∃ ω ∈ ∆K−2 : Apreω − bpre = 0.
A profiled criterion similar to Q(τ ̃) in (32) can be constructed by
Q ≡ min
ω∈∆K−2(Apreω − bpre)′(Apreω − bpre). (36)
One can then plug estimators for (Apre, bpre)—which are submatrix of A and subvector
of b defined in (28)—into Q and form the sample criterion Qb. The limit distribution of
√n(Qb − Q) can be derived following a similar argument as in the proof of Theorem 4.1,
and feasibility of (9) can be rejected at a given level if the test statistic √nQb exceeds the
corresponding quantile of this limit distribution.
The same idea applies to testing feasibility of the linear programs without nonnegativity
constraints in (5) and the existence of φ ∈ RT0 such that apost = [1 A′
pre]φ, which is
implied by the low-rank property in Proposition 3.2. In these cases, however, the constraint
set over which Q minimizes is no longer compact and convergence as a process indexed
by ω may fail. Nevertheless, under the null hypothesis that a feasible solution exists, a

33
minimum-norm solution also exists, allowing restriction to a compact subset of feasible
solutions as a proof device. Testing the feasibility of linear programs with estimated coeffi
cients is a natural extension of the results in this paper and may be of independent interest,
but a detailed treatment is left for future work.
4.1. Bootstrap Critical Values
Due to the lack of full differentiability, standard bootstrap is inconsistent for the limiting
distribution of (33); see Section 3.2 of Fang and Santos (2019). Procedure 1 below de
tails a modified bootstrap procedure based on Fang and Santos (2019) that uses numerical
approximation to estimate the directional derivative in (50).
PROCEDURE 1—Bootstrap and Numerical Approximation of Directional Derivatives:
1. Draw {Wi}in=1 iid from the exponential distribution with mean 1 independent of the
sample data Sn under Assumption 5 and construct the bootstrap analog of (Abn, bbn),
denoted by (A ̆n, b ̆n), where the bootstrap analog of the (kt)-cell sample mean is
μ ̆tk ≡

 
 
1 n
Pn
i=1
1
p ̆k 1{Gi = k}WiYit for p ̆k ≡ 1
n
Pn
i=1 Wi1{Gi = k}, if panel;
1 n
Pn
i=1
1
π ̆kt 1{Gi = k, Ti = t}WiYi for π ̆kt ≡ 1
n
Pn
i=1 Wi1{Gi = k, Ti = t}, if RCS,
Note that for panel data, the same multiplier Wi is used for all time series of the
individual i, (Yi1, ..., YiT ). Let  ̆m2
τ ̃(ω) ≡ mτ ̃ ω; A ̆n, b ̆n)′mτ ̃ ω; A ̆n, b ̆n .
2. Numerically approximate the directional derivative of minω∈∆( · ), denoted by φm2
τ ̃
and defined in (50), in direction gn(ω) = √n  ̆m2
τ ̃(ω) − bm2
τ ̃(ω) by
φbm2
τ ̃ gn(ω) ≡ 1
sn
min
ω∈∆ bm2
τ ̃(ω) + sngn(ω) − min
ω∈∆ bm2
τ ̃(ω) , (37)
where the step size sn → 0 and sn
√n → ∞.
3. Obtain the bootstrap critical value
cbβ(τ ̃) ≡ inf c : P φbm2
τ ̃ gn(ω) ≤ c Sn ≥ β , (38)
as an estimator for cβ(τ ̃), the β-quantile of the limit distribution of (33).

34
The following result establishes consistency of the bootstrap critical value (38).
PROPOSITION 4.1: Let the assumptions in Theorem 4.1 hold. For τ ̃ ∈ E+
ID, if the limit
distribution of (33) is continuous and increasing at cβ(τ ̃), then cbβ(τ ̃) −p→ cβ(τ ̃).
REMARK 4.3—Alternative Perturbations: While Procedure 1 is theoretically valid, its
direct implementation has practical limitations. In (37), the objective function of the first
minimization problem, bm2
τ ̃(ω) + sngn(ω), is non-convex in ω as gn(ω) enters with a mi
nus sign in front of bm2
τ ̃(ω). The simulation study in Section 5 relies on a quadratic pro
gramming solver that is computationally efficient but requires convex objectives.11 To
ensure convexity, the code directly perturbs the estimated matrices (Abn, bbn) in the direc
tion gnA = √n A ̆n − Abn and gbn = √n b ̆n − bbn , and replaces the non-convex objective
bm2
τ ̃(ω) + sngn(ω) in (37) with
mτ ̃ ω; Abn + sngA
n , bbn + sngb
n
′
mτ ̃ ω; Abn + sngA
n , bbn + sngb
n , (39)
which remains convex in ω. This alternative perturbation is asymptotically equivalent to
Procedure 1: its first-order expansion at (Abn, bbn) divided by sn coincides with that of
bm2
τ ̃(ω) + sngn(ω) given in (52). I retain Procedure 1 in the text for its clarity in relation to
Theorem 4.1.
5. SIMULATION
I assess the finite-sample performance of the inference method introduced in Section 4
in a Monte Carlo simulation. I also evaluate the robustness of SPT under convex weights
in DGPs that satisfy different identifying assumptions, and compare it with DID, SC, and
SDID. The DGPs are constructed based on the subsample of the Current Population Survey
(CPS) data used in the placebo study of AAHIW, which provides repeated cross-sections
of log weekly earnings for women from 1979 to 2018 (T = 40) across K = 50 states.12
In each Monte Carlo replication, a placebo treated state is randomly selected according
11See Stellato et al. (2020) and the companion package OSQP for more information.
12See Section VI.1 of AAHIW (2021, Online Appendix) for details on how this subsample is constructed.

35
to the treatment assignment model of AAHIW, which correlates assignment with state
specific minimum wage laws. The remaining 49 states form the never treated group. The
last observed year 2018 is the only post-treatment period, where the placebo treated state
receives no treatment so that the true effect τ = 0.
I consider two sets of DGPs. The first explores settings where the parallel trends assump
tion may or may not hold (DGP-1 and DGP-2 of Table I). In each replication, a repeated
cross-section within each state-k-year-t cell is iid drawn from a normal distribution:
Yi | Gi = k, Ti = t d∼ N μk
t , (σk
t )2 ,
where σtk is equal to the sample standard deviation in each state-year cell of the CPS data.
DGP-1 and DGP-2 have the same second moments σtk and differ only in the population
means μtk, as the two DGPs are designed to vary which identifying assumption holds true.
DGP-1 is such that the parallel trends assumption holds in all time periods, where the values
for μtk satisfy (14) with the parallel-trend implied weight ωPT,RCS. DGP-2 is such that the
parallel trends assumption holds only in the pre-period, where the values for μtk and the
underlying true weight ω ̸= ωPT,RCS yield parallel pre-trends but not parallel post-trends.
TABLE I
SIMULATION RESULTS
Bias CI length Coverage DGP DID SC SDID DID SC SDID SPT DID SC SDID SPT DGP-1 0.042 0.038 0.035 0.216 0.257 0.252 0.824 94.6% 99.2% 97.6% 100% DGP-2 0.112 0.138 0.116 0.216 1.090 1.055 1.614 49.8% 99.8% 100% 100% DGP-3 0.110 0.100 0.092 0.547 0.482 0.446 1.890 95% 95% 95.4% 100% DGP-4 4.691 4.694 4.666 0.547 4.640 4.956 6.952 0% 0% 0% 98.4%
Results are averaged across 500 Monte Carlo replications. The total sample size in each replication is n = 845,920 (∼423 per state-year cell), where for control states, the simulation sample size of each state-year cell equals its 2018 sample share among all controls, multiplied by the total number of control observations in 2018 (based on the original CPS subsample); for the treated state, the number of observations in each year equals its 2018 value. For DID, I estimate an event-study regression-
 of Yi on Di, Ti, and their interaction, with 2017 as the baseline year. The coefficient on the interaction term for Di = 1 and Ti = 2018 is the DID estimate for the treatment effect of the treated state in the post-period (2018). This is numerically equivalent to a double difference-in-means estimator: the difference in the treated state’s 2018 and 2017 mean outcomes minus the corresponding difference for the control states’ pooled mean outcomes. The 95% confidence interval (CI) is obtained by ad-
ding and subtracting 1.96 times the heteroskedastic-robust standard error, without clustering for DGP-1 and DGP-2 (RCS) and with individual-level clustering for DGP-3 and DGP-4 (panel data). SC and SDID are implemented using the synthdid package of AAHIW, with CIs constructed via the placebo variance estimator. For SPT, in each iteration 500 candidate values are tested, each with 1000 bootstrap replications, as detailed in Section 4. For DGP-1 and DGP-2, the average run-time per implementation in -
seconds (with the corresponding run-time for DGP-3 and DGP-4 in parentheses) for each method is 4.541 (2.473) for DID, 28.345 (6.709) for SC, 19.514 (11.881) for SDID, and 106.850 (471.301) for SPT.

36
As expected, under DGP-1, when the parallel trends assumption holds in all periods,
DID performs well, as do the other methods (first row of Table I). In contrast, when the
post-trend is not parallel under DGP-2, DID fails to cover the null effect in over 50% of all
replications (second row of Table I). Because the parallel trends assumption still holds in
the pre-periods, examining the event-study coefficients prior to treatment would not reveal
this violation. In this case, both SC and SDID remain robust by widening their confidence
intervals (CIs): the biases of DID, SC, and SDID are of similar magnitude, where 0.11 is
roughly the amount of violation of parallel post-trend introduced in DGP-2. Consistent with
the findings in AAHIW, SDID tends to have a smaller bias than SC. CIs for SC and SDID
are constructed using the placebo variance estimator defined in Algorithm 4 of AAHIW
for the case of a single treated unit. This estimator tends to be large when the scale and
dispersion of the population means μtk are large, which is the case in DGP-2.13 The CI
under SPT is dependent on the scale of the underlying population means by construction
and consequently also widens under DGP-2. In contrast, the asymptotic variance of the
DID estimator depends only on the idiosyncratic noise σtk, which is held constant across
DGP-1 and DGP-2. Thus, the DID standard errors, when averaged across many individuals,
exhibit little variation across the two DGPs.
The second set of DGPs explores a setting where SC-based methods may select an incor
rect weight (DGP-3 and DGP-4 of Table I). In each replication, a set of panel data within
each state k is iid drawn from a multivariate normal distribution:
(Yi1, ..., YiT )|Gi = k d∼ N μk, Σ ,
13In DGP-1, the population means μtk for the control states are set equal to the corresponding sample means in
the original CPS subsample, and the treated state’s mean μt1 is constructed to satisfy the parallel trends assumption
as in (14). However, because the control means based on the CPS data exhibit little variation, any alternative
weight ω different from the parallel-trends-implied weight ωPT,RCS in (14) would generate only a small post
treatment violation. To create a meaningful violation of parallel post-trends in DGP-2 large enough to exceed half
the length of the DID confidence interval under DGP-1 (where 0.217/2 ≈ 0.11), I increase the dispersion of the
control states’ post-treatment population means in DGP-2.

37
for Σ the rescaled T × T covariance matrix used in the placebo study of AAHIW, obtained
by fitting an AR(2) model to the CPS data and assumed to be homoskedastic across states.14
Similar to the first set of DGPs, both DGP-3 and DGP-4 have the same Σ but different mean
vectors μk = μ1k, ..., μk
T
′ ∈ RT . Let LSDID be the K × T matrix of factors stacking λ′tγk
across states and years used in the placebo study of AAHIW, obtained by fitting a rank-4
matrix to the matrix of sample cell means from the CPS data; see their Eq. (11). Let LSDID
k·
denote the k-th row of LSDID. DGP-3 is such that μk = (LSDID
k· )′ for control states, and
for the placebo treated state k = 1, μ1 = PK
k=2 ωk(LSDID
k· )′ for a randomly drawn convex
weight ω.15 In this case, all methods perform well: as the 50 × 40 matrix LSDID only has
rank 4, there are many weights that can reproduce the treated unit’s factor across all periods,
as is also reflected in the wide CI under SPT (third row of Table I).
DGP-4 is such that only three control states with μk = LSDID
k· are relevant for reproducing
the treated state’s factors, μ1 = 1
3
P
k∈Irel (LSDID
k· )′, where Irel collects the indices of the
3 relevant controls, which are randomly selected in each replication. The remaining 46
control states k ∈ [K] \ Irel ∪ {1} have the same factors as the treated state only in the
pre-treatment periods, and their post-treatment factors are all set equal to the treated state’s
post-treatment factor minus 5. In this case, essentially all convex weights can achieve an
equally good pre-treatment fit. DID will select the convex weight equal to the control states’
shares in the never-treated sample; SC under the simplex constraint tends to select a sparse
convex weight, but its chosen weight may not be the correct one that only assigns non
zero weight to the 3 relevant controls; SDID with an l2 penalty tends to select a dispersed
convex weight, assigning approximately equal weight to all control states. However, these
selected weights underweight the 3 relevant control states and overweight the remaining 46
14In AAHIW, the covariance matrix models the distribution of state-level sample means. To generate
individual-level data within each state, I rescale this covariance matrix by multiplying it by nk, the sample size
within each state k. This ensures that the variance of the individual-level outcomes is consistent with the sampling
variation implied by the linear factor model in (16).
15I regenerate the treated state’s factors because the K × T factor matrix LSDID used in AAHIW is such that
none of its rows is a convex combination of the other rows, in which case SPT with convex weight is refuted by
the data, returning an empty confidence set when implementing the inference method in Section 4.

38
control states that are systematically different from the treated state’s post-treatment factor
by a constant of 5. Indeed, in the last row of Table I, the biases of DID, SC, and SDID
are all close to 5, and their CIs fail to cover the null effect in all of the 500 Monte Carlo
replications. In contrast, only SPT remains robust, as it accommodates the multiplicity
of weighting schemes that can reproduce the treated state’s pre-treatment factors, thereby
capturing the true underlying weights associated with the three relevant controls.
6. CONCLUSION
This paper develops a unifying identification framework under the Synthetic Parallel
Trends (SPT) assumption formally stated in Assumption 1, which generalizes and connects
the key identifying assumptions behind DID, SC, and their variants. By accounting for
all weights that reproduce the treated unit’s pre-treatment trends, SPT yields a partially
identified set for the treatment effect, nesting existing methods as special cases and robust to
violations of their respective identifying assumptions. Leveraging its linear-programming
characterization, I propose an inference procedure that constructs a valid confidence set for
the identified set. Simulation evidence shows that the proposed method achieves nominal
coverage even when the identifying assumptions of existing methods are violated.
The analysis offers new insight into the identifying restrictions of popular empirical
strategies and provides new inference methods under weak conditions. Several extensions
are natural directions for future research. The identified set under SPT with either affine or
convex weights can be tightened by incorporating additional credible restrictions; covari
ates may be particularly informative in this context, for instance by requiring the weights
to match on covariates as in the SC literature. For statistical inference, it would be useful
to investigate the role of efficient weighting matrices in the criterion function (32), which
currently uses the identity matrix implicitly. Finally, establishing reasonable conditions for
uniform validity of the confidence set is an important question for further work.

39
REFERENCES
ABADIE, ALBERTO (2021): “Using synthetic controls: Feasibility, data requirements, and methodological as
pects,” Journal of Economic Literature, 59, 391–425. [3, 17]
ABADIE, ALBERTO, ALEXIS DIAMOND, AND JENS HAINMUELLER (2010): “Synthetic control methods for
comparative case studies: Estimating the effect of California’s tobacco control program,” Journal of the Ameri
can Statistical Association, 105, 493–505. [4, 6, 8, 21, 22, 23, 25, 44, 45]
ABADIE, ALBERTO AND JAVIER GARDEAZABAL (2003): “The economic costs of conflict: A case study of the
Basque Country,” American economic review, 93, 113–132. [6]
ABADIE, ALBERTO AND JÉRÉMY L’HOUR (2021): “A penalized synthetic control estimator for disaggregated
data,” Journal of the American Statistical Association, 116, 1817–1834. [6]
AMJAD, MUHAMMAD, DEVAVRAT SHAH, AND DENNIS SHEN (2018): “Robust synthetic control,” The Journal
of Machine Learning Research, 19, 802–852. [13]
ANDREWS, DONALD WK AND XIAOXIA SHI (2013): “Inference based on conditional moment inequalities,”
Econometrica, 81, 609–666. [31]
ANDREWS, DONALD W. K. (1994): “Chapter 37 Empirical process methods in econometrics,” Elsevier, vol. 4 of
Handbook of Econometrics, 2247–2294. [48]
ANDREWS, ISAIAH, JONATHAN ROTH, AND ARIEL PAKES (2023): “Inference for linear conditional moment
inequalities,” Review of Economic Studies, 90, 2763–2791. [20]
ARKHANGELSKY, DMITRY, SUSAN ATHEY, DAVID A HIRSHBERG, GUIDO W IMBENS, AND STEFAN WA
GER (2021): “Synthetic difference-in-differences,” American Economic Review, 111, 4088–4118, with Online
Appendix at https://www.aeaweb.org/articles/materials/15756. [2, 4, 5, 6, 13, 23, 24, 25, 26, 27, 28, 34, 35, 36,
37, 46, 50]
BAN, KYUNGHOON AND DÉSIRÉ KÉDAGNI (2023): “Robust Difference-in-differences Models,” arXiv preprint
arXiv:2211.06710. [5, 6, 50]
BEN-MICHAEL, ELI, AVI FELLER, AND JESSE ROTHSTEIN (2021): “The augmented synthetic control method,”
Journal of the American Statistical Association, 116, 1789–1803. [13, 23]
——— (2022): “Synthetic controls with staggered adoption,” Journal of the Royal Statistical Society Series B:
Statistical Methodology, 84, 351–381. [6, 13]
BERTRAND, MARIANNE, ESTHER DUFLO, AND SENDHIL MULLAINATHAN (2004): “How much should we
trust differences-in-differences estimates?” The Quarterly journal of economics, 119, 249–275. [5]
BOYD, STEPHEN P AND LIEVEN VANDENBERGHE (2004): Convex optimization, Cambridge university press.
[43]
CALLAWAY, BRANTLY AND PEDRO HC SANT’ANNA (2021): “Difference-in-differences with multiple time
periods,” Journal of econometrics, 225, 200–230. [9, 10]

40
CHEN, XIAOHONG, PEDRO HC SANT’ANNA, AND HAITIAN XIE (2025): “Efficient Difference-in-Differences
and Event Study Estimators,” arXiv preprint arXiv:2506.17729. [16, 18]
CHERNOZHUKOV, VICTOR, KASPAR WÜTHRICH, AND YINCHU ZHU (2021): “An exact and robust conformal
inference method for counterfactual and synthetic controls,” Journal of the American Statistical Association,
116, 1849–1864. [13]
CHO, JOONHWAN AND THOMAS M RUSSELL (2024): “Simple inference on functionals of set-identified param
eters defined by linear moments,” Journal of Business & Economic Statistics, 42, 563–578. [7]
COX, GREGORY, XIAOXIA SHI, AND YUYA SHIMIZU (2025): “Testing Inequalities Linear in Nuisance Parame
ters,” arXiv preprint arXiv:2510.27633. [7, 29]
DE CHAISEMARTIN, CLÉMENT AND XAVIER D’HAULTFOEUILLE (2020): “Two-way fixed effects estimators
with heterogeneous treatment effects,” American economic review, 110, 2964–2996. [9]
——— (2023): “Two-way fixed effects and differences-in-differences with heterogeneous treatment effects: A
survey,” The econometrics journal, 26, C1–C30. [3]
DOUDCHENKO, NIKOLAY AND GUIDO W IMBENS (2016): “Balancing, regression, difference-in-differences and
synthetic control methods: A synthesis,” Tech. rep., National Bureau of Economic Research. [6, 13]
FACCHINEI, FRANCISCO AND JONG-SHI PANG (2003): Finite-dimensional variational inequalities and comple
mentarity problems, Springer. [46]
FANG, ZHENG AND ANDRES SANTOS (2019): “Inference on directionally differentiable functions,” The Re
view of Economic Studies, 86, 377–412, with Online Appendix at academic.oup.com/restud/article/86/1/377/
5094886#supplementary-data. [4, 33, 48, 49]
FERGUSON, BILLY AND BRAD ROSS (2021): “Assessing the Sensitivity of Synthetic Control Treatment Effect
Estimates to Misspecification Error,” arXiv preprint arXiv:2012.15367. [6]
FERMAN, BRUNO (2021): “On the properties of the synthetic control estimator with many periods and many
controls,” Journal of the American Statistical Association, 116, 1764–1772. [23, 24]
FERMAN, BRUNO AND CRISTINE PINTO (2021): “Synthetic controls with imperfect pretreatment fit,” Quantita
tive Economics, 12, 1197–1221. [23, 24]
FREYBERGER, JOACHIM AND JOEL L HOROWITZ (2015): “Identification and shape restrictions in nonparamet
ric instrumental variables estimation,” Journal of Econometrics, 189, 41–53. [7, 29]
GAFAROV, BULAT (2025): “Simple subvector inference on sharp identified set in affine models,” Journal of
Econometrics, 249, 105952. [7, 29]
GOFF, LEONARD AND ERIC MBAKOP (2025): “Inference on the value of a linear program,” arXiv preprint
arXiv:2506.06776. [7, 29]
GOODMAN-BACON, ANDREW (2021): “Difference-in-differences with variation in treatment timing,” Journal of
econometrics, 225, 254–277. [9]
HOFFMAN, ALAN J (1952): “On approximate solutions of systems of linear inequalities,” Journal of Research 01
the National Bureau of Standards, 49, 263–265. [46]

41
HSIEH, YU-WEI, XIAOXIA SHI, AND MATTHEW SHUM (2022): “Inference on estimators defined by mathemat
ical programming,” Journal of Econometrics, 226, 248–268. [7]
IBRAGIMOV, RUSTAM AND SHOTURGUN SHARAKHMETOV (2002): “The exact constant in the Rosenthal in
equality for random variables with mean zero,” Theory of Probability & Its Applications, 46, 127–132. [45]
IMBENS, GUIDO W AND DAVIDE VIVIANO (2023): “Identification and Inference for Synthetic Controls with
Confounding,” arXiv preprint arXiv:2312.00955. [6, 8, 13, 24]
MANSKI, CHARLES F (1989): “Anatomy of the selection problem,” Journal of Human resources, 343–360. [3]
MANSKI, CHARLES F AND JOHN V PEPPER (2018): “How do right-to-carry laws affect crime rates? Coping
with ambiguity using bounded-variation assumptions,” Review of Economics and Statistics, 100, 232–244. [5,
6, 19]
MOLINARI, FRANCESCA (2020): “Microeconometrics with partial identification,” Handbook of econometrics, 7,
355–486. [3]
PARK, CHAN AND ERIC J TCHETGEN TCHETGEN (2025): “Single proxy synthetic control,” Journal of Causal
Inference, 13, 20230079. [6]
QIU, HONGXIANG, XU SHI, WANG MIAO, EDGAR DOBRIBAN, AND ERIC TCHETGEN TCHETGEN (2024):
“Doubly robust proximal synthetic controls,” Biometrics, 80, ujae055. [6]
RAMBACHAN, ASHESH AND JONATHAN ROTH (2023): “A more credible approach to parallel trends,” Review of
Economic Studies, 90, 2555–2591. [5, 6, 19, 20]
RAVISHANKER, NALINI AND DIPAK K DEY (2002): A First Course in Linear Model Theory, Chapman and
Hall/CRC. [12]
RINCÓN, RATZANYEL AND KYUNGCHUL SONG (2025): “Causal Inference with Groupwise Matching,” arXiv
preprint arXiv:2510.26106. [7]
ROTH, JONATHAN, PEDRO HC SANT’ANNA, ALYSSA BILINSKI, AND JOHN POE (2023): “What’s trending
in difference-in-differences? A synthesis of the recent econometrics literature,” Journal of Econometrics, 235,
2218–2244. [3]
SANT’ANNA, PEDRO HC AND QI XU (2025): “Difference-in-differences with compositional changes,” arXiv
preprint arXiv:2304.13925. [10, 30]
SANT’ANNA, PEDRO HC AND JUN ZHAO (2020): “Doubly robust difference-in-differences estimators,” Journal
of econometrics, 219, 101–122. [9, 10, 30]
SHAPIRO, ALEXANDER (1990): “On concepts of directional differentiability,” Journal of Optimization Theory
and Applications, 66, 477–487. [32]
SHI, CLAUDIA, DHANYA SRIDHAR, VISHAL MISRA, AND DAVID BLEI (2022): “On the assumptions of syn
thetic control methods,” in International Conference on Artificial Intelligence and Statistics, PMLR, 7163–7175.
[6, 9]

42
SHI, XU, KENDRICK LI, WANG MIAO, MENGTONG HU, AND ERIC TCHETGEN TCHETGEN (2023): “Theory
for identification and inference with synthetic controls: a proximal causal inference framework,” arXiv preprint
arXiv:2108.13935. [6]
STELLATO, B., G. BANJAC, P. GOULART, A. BEMPORAD, AND S. BOYD (2020): “OSQP: an operator splitting
solver for quadratic programs,” Mathematical Programming Computation, 12, 637–672. [34]
SUN, LIYANG, ELI BEN-MICHAEL, AND AVI FELLER (2025a): “Using multiple outcomes to improve the syn
thetic control method,” Review of Economics and Statistics, 1–29. [23, 24]
SUN, YIXIAO, HAITIAN XIE, AND YUHANG ZHANG (2025b): “Difference-in-Differences Meets Synthetic Con
trol: Doubly Robust Identification and Estimation,” arXiv preprint arXiv:2503.11375. [7, 10]
TAMER, ELIE (2010): “Partial identification in econometrics,” Annu. Rev. Econ., 2, 167–195. [3]
VAN DER VAART, AAD W. AND JON A. WELLNER (1996): Weak Convergence and Empirical Processes: With
Applications to Statistics, Springer Series in Statistics, Springer New York. [48, 49]
WOOLDRIDGE, JEFFREY M (2021): “Two-way fixed effects, the two-way mundlak regression, and difference-in
differences estimators,” Available at SSRN 3906345. [9]
YE, TING, LUKE KEELE, RAIDEN HASEGAWA, AND DYLAN S SMALL (2024): “A negative correlation strategy
for bracketing in difference-in-differences,” Journal of the American Statistical Association, 119, 2256–2268.
[5, 6]

43
APPENDIX A: PROOFS OF MAIN RESULTS
PROOF OF PROPOSITION 3.1: If μ is a counterfactual trend such that Assumption 1 is
satisfied, i.e., there exists 1′ω = 1 such that in the post-period T ,
μ=
K
X
k=2
ωk ∆μk
T (0) (40)
and in pre-periods t ∈ {2, ..., T0},
∆μ1
t (0) =
K
X
k=2
ωk ∆μk
t (0). (41)
Then (41) implies ω ≡ [ω2, . . . , ωK]′ satisfies Apreω = bpre, and (40) implies μ ∈ MID.
To prove sharpness, take any μ∗ ∈ MID. Then there is an affine ω∗ associated with μ∗
such that Apreω∗ = bpre and μ∗ = a′
postω∗ by definition of MID, which implies that
Assumption 1 is satisfied for the counterfactual trend μ∗ with weight ω∗. Q.E.D.
PROOF OF PROPOSITION 3.2: First focus on the maximization problem in (5) as the
primal; the same argument applies to the minimization problem. Its dual is minφ∈RT0 ([1 b′
pre]φ)
such that [1 A′
pre]φ = apost. Under Assumption 1, the primal is feasible. If it attains a
bounded optimal value, then the dual is also feasible and attains the same optimal value by
strong duality (e.g., see Boyd and Vandenberghe, 2004). This implies the last row of the
trend matrix in (6) is an affine transformation of the other T0 rows.
Suppose the last row of the trend matrix in (6) is an affine transformation of the other
T0 rows. Then the dual program is feasible and, under Assumption 1, attains a bounded
optimal value (because if the dual is feasible but unbounded, then by duality the primal is
infeasible, which is ruled out by Assumption 1). Strong duality again implies the primal
also attains the same bounded optimal value. It then follows that MID is bounded if and
only if the affine transformation condition holds.
It remains to show when MID is bounded, the lower and upper bounds coincide so that it
is in fact a singleton. Observe that both the maximization and minimization problems in (5)
have the same constraints and the same objective vector apost, and so do their respective

44
dual programs. Fix an arbitrary feasible dual solution φ∗. Then for any feasible ω,
a′
postω = (φ∗)′


1′
Apre

 ω = (φ∗)′


1
bpre

,
where the first equality follows from feasibility of φ∗ so that apost = [1 A′
pre]φ∗ and
the second equality follows from feasibility of ω. Since the choice of φ∗ is arbitrary, the
second equality implies that a′
postω is fixed for all primal-feasible ω. Thus the maximal
and minimal optimal values coincide. Q.E.D.
PROOF OF PROPOSITION 3.3: Since λ′tγk is nonrandom, μtk(0) = E[λ′tγk] = λ′tγk and
K
X
k=2
E
ωbSC
k μk
t (0) − μ1
t (0) =
K
X
k=2
E
ωbSC
k λ′
tγk − λ′
tγ1 = E
"K
X
k=2
ωbSC
k λ′
tγk − λ′
tγ1
#
≤E
"
λ′
t
K
X
k=2
ωbSC
k γk − γ1
!#
(42)
for all t ∈ {1, ..., T }. Adapting the notation of ADH, let λP denote the T0 × F matrix where
the rows stack λ′t for t ≤ T0 and εk,P denote the T0 × 1 vector that, for each k ∈ {1, ..., K},
stacks εkt for t ≤ T0. Then under the factor model (16) and Assumption 2,
0 = λP
K
X
k=2
ωbSC
k γk − γ1 +
K
X
k=2
ωbSC
k εk,P − ε1,P
=⇒ λ′
t
K
X
k=2
ωbSC
k γk − γ1 = λ′
t(λ′
PλP)−1λ′
P ε1,P −
K
X
k=2
ωbSC
k εk,P , (43)
for any t ∈ {1, ..., T }, implying that
(42) =E
"
λ′
t(λ′
PλP)−1λ′
P ε1,P −
K
X
k=2
ωbSC
k εk,P
#
≤E λ′
t(λ′
PλP)−1λ′
Pε1,P + E
"
λ′
t(λ′
PλP)−1λ′
P
K
X
k=2
ωbSC
k εk,P
#
.
Under Assumption 2(ii), the largest element of λt ∈ RF is upper bounded in absolute value
by λ < ∞ and the smallest eigenvalue of 1
T0 λ′
PλP is lower bounded by ξ > 0. It then follows

45
from the argument in ADH (p. 504) that, by Cauchy-Schwarz inequality and eigenvalue
decomposition of (λ′
PλP)−1,
λ′
t(λ′
PλP)−1λs
2 ≤ λ′
t(λ′
PλP)−1λt · λ′
s(λ′
PλP)−1λs ≤ λ′
tλt
T0ξ · λ′
sλs
T0ξ ≤ λ2F
T0ξ
!2
for any t, s ∈ {1, ..., T }, and
E
"
λ′
t(λ′
PλP)−1λ′
P
K
X
k=2
ωbSC
k εk,P
#
=E
"K
X
k=2
ωbSC
k
T0
X
s=1
λ′
t(λ′
PλP)−1λsεks
#
≤E

 


K
X
k=2
ωbSC
k
T0
X
s=1
λ′
t(λ′
PλP)−1λsεks
p


1/p

≤


K
X
k=2
E


T0
X
s=1
λ′
t(λ′
PλP)−1λsεks
p




1/p
≤ λF
ξ


K
X
k=2
E


T0
X
s=1
εks
T0
p




1/p
≲ λF
ξ (K − 1)1/p · O max T 1/p−1
0 , T −1/2
0,
where the first inequality follows from Hölder’s inequality, the second follows from ωbSC is
convex and Jensen’s inequality, the third follows from |λ′t(λ′
PλP)−1λs| ≤ λ2F
T0ξ , and the last
follows from |εks| having bounded p-th moment for the control k ∈ {2, ..., K} and Rosen
thal’s inequality (see Ibragimov and Sharakhmetov, 2002, for reference on Rosenthal’s
inequality). Hence for all t ∈ {1, ..., T },
E
"
λ′
t(λ′
PλP)−1λ′
P
K
X
k=2
ωbSC
k εk,P
#
→ 0 as T0 → ∞, (44)
and under the additional assumption that |ε1t| also has bounded p-th moment, the same
argument from ADH applies to show that for all t ∈ {1, ..., T },
E λ′
t(λ′
PλP)−1λ′
Pε1,P → 0 as T0 → ∞. (45)
Hence for all t ∈ {1, ..., T }, and in particular for t ≤ T0, the inequality in (42) implies
K
X
k=2
E
ωbSC
k μk
t (0) − μ1
t (0) −→ 0,

46
so for all 2 ≤ t ≤ T0, PK
k=2 E ωbSC
k ∆μtk(0) − ∆μt1(0) −→ 0, i.e., for ωSC ≡ E ωbSC ,
ApreωSC − bpre −→ 0. (46)
In addition, since (44)-(45) also hold for t = T , PK
k=2 E ωbSC
k μk
T (0) − μ1
T (0) −→ 0, so
a′
postωSC − ∆μ1
T (0) −→ 0. (47)
Therefore, Assumption 1 is asymptotically satisfied. Let W ≡ {ω ∈ ∆K−2 : Apreω =
bpre} be the set of feasible solutions. Then under Assumption 3,
inf
δ∈M+
ID
(λT − λT0)′γ1 − δ ≤ inf
δ∈M+
ID
(λT − λT0)′γ1 − a′
postωSC + a′
postωSC − δ
= (λT − λT0)′γ1 − a′
postωSC + inf
ω∈W a′
postωSC − a′
postω by definition of M+
ID
≤ (λT − λT0)′γ1 − a′
postωSC
| {z }
→ 0 by Eq. (47)
+∥apost∥ inf
ω∈W ωSC − ω , by Cauchy-Schwarz inequality
where using Hoffman error bound (Hoffman, 1952, see also Lemma 3.2.3 of Facchinei and
Pang, 2003 for a textbook reference) and (46),
inf
ω∈W ωSC − ω ≲ ∥A†
pre∥∥ApreωSC − bpre∥ → 0.
Q.E.D.
PROOF OF PROPOSITION 3.4: That the SDID oracle weights ω ̃ directly balance the
nonstochastic latent factors of the treated unit and of the control units during the pre
treatment period up to a constant ω ̃0 (i.e., the part of Assumption 4 of AAHIW corre
sponding to Assumption 4(i)) implies Apreω ̃ − bpre → 0 after first-order differencing. By
Assumption 4(ii) and convex ν summing to 1 component-wise,
μ1
N1,T (0) −
K
X
k=2
ω ̃ k μk
T (0)
!
−
T0
X
t=1
νt μ1
N1,t(0) −
K
X
k=2
ω ̃ k μk
t (0)
!

47
= μ1
N1,T (0) −
K
X
k=2
ω ̃ k μk
T (0) − ω ̃0
!
+
T0
X
t=1
νt ω ̃0 +
K
X
k=2
ω ̃ k μk
t (0) − μ1
N1,t(0)
!
| {z }
=o(1) by Assumption 4(i)
= o(1)
=⇒ μ1
N1,T (0) − ω ̃0 +
K
X
k=2
ω ̃ k μk
T (0)
!
= o(1),
implying a′
postω ̃ → ∆μ1
T (0) = limN1→∞ 1
N1
P
j∈I1(λT − λT0)′γj after first-order differ
encing. Finally, (25) follows from a similar argument in the proof of Proposition 3.3.Q.E.D.
PROOF OF THEOREM 4.1: For a generic measurable function f ∈ F of a random vari
able Zi, let Gn[f (Zi)] ≡ √1n
Pn
i=1 f (Zi)−E[f (Zi)] denote the empirical process indexed
by the function class F . Recall the (kt)-cell sample mean μbtk defined immediately above
(32). By a first-order Taylor expansion,
√n(μbk
t − μk
t ) = Gn Y ̃ k
t,i + op(1),
where
Y ̃ k
t,i =

 
 
1{Gi = k}Yit/pk − E[1{Gi = k}Yit] 1{Gi = k}/p2
k, if panel,
1{Gi = k, Ti = t}Yi/πkt − E[1{Gi = k, Ti = t}Yi] 1{Gi = k, Ti = t}/π2
kt, if RCS.
Let
μb ≡ [μb1
1, ..., μb1
T , μb2
1, ..., μb2
T , ..., μbK
1 , ..., μbK
T ]′ ∈ RT K (48)
and denote its population counterpart by μ ∈ RT K . Then
√n(μb − μ) = Gn[Y ̃i] + op(1),
for Y ̃i ≡
hY ̃11,i, ..., Y ̃ 1
T,i, Y ̃12,i, ..., Y ̃ 2
T,i, ..., Y ̃1,Ki , ..., Y ̃ K
T ,i
i′
∈ RT K . Let
Lag ≡

     
−1 1 0 0 · · · 0 0
0 −1 1 0 · · · 0 0
... ... ... ... . . . ... ...
0 0 0 0 · · · −1 1

     
∈ RT0×T

48
be the first-order difference (lag) matrix. Recall that the entries of A and b defined in (28)
take the form ∆μtk = μtk − μtk−1. Then for the KT0 × KT block diagonal matrix L ≡
diag{Lag, ..., Lag} stacking Lag diagonally,
√n


bbn − b
vec(Abn) − vec(A)

 = √nL(μb − μ) = Gn[LY ̃i] + op(1),
implying that, for mτ ̃(ω; · ) and J(ω) defined in (29),
√n mτ ̃ ω; Abn, bbn
′
mτ ̃ ω; Abn,bbn − mτ ̃ (ω; A, b)′ mτ ̃ (ω; A, b)
= Gn
h
2 (J(ω)Lμ + τ ̃eT0)′ J(ω)LY ̃i
i
+ op(1) (49)
−d→ G
h
2 (J(ω)Lμ + τ ̃eT0)′ J(ω)LY ̃i
i
in l∞ ∆K−2 ,
where in the last equation, the weak convergence to a Gaussian process G[ · ] in l∞(∆K−2),
the space of bounded functions on ∆K−2, follows from the fact that the class of functions
F≡
n
(J(ω)Lμ + τ ̃eT0)′ J(ω)LY ̃i : ω ∈ ∆K−2o
is formed by functions linear in ω ∈ ∆K−2 compact and hence F is VC-subgraph (see,
e.g., Andrews, 1994), with an envelope given by a constant multiple of ∥Y ̃i∥ whose square
integrability under P follows from E Yit2 < C in the panel data case or E Yi2 < C in the
RCS case. By van der Vaart and Wellner (1996, Theorem 2.5.2), F is P-Donsker, implying
the weak convergence.
Next, by Fang and Santos (2019, Lemma S.4.9), the mapping minω∈∆K−2( · ) from the
squared moment m2
τ ̃( · ) ≡ mτ ̃ ( · ; A, b)′ mτ ̃ ( · ; A, b) ∈ l∞(∆K−2) to R+ is Hadamard di
rectionally differentiable at m2
τ ̃ tangentially to C(∆K−2), the space of continuous functions
on ∆K−2. Its directional derivative at m2
τ ̃( · ) in the direction g ∈ C(∆K−2) is given by
φm2
τ ̃(g) ≡ min
ω∗∈arg minω∈∆K−2 m2
τ ̃(ω)
g(ω∗). (50)

49
By the Delta method for directionally differentiable functions (Fang and Santos, 2019,
Theorem 2.1),
√n Qbn(τ ̃) − Q(τ ̃) −d→ φm2
τ ̃ G
h
2 (J(ω)Lμ + τ ̃eT0)′ J(ω)LY ̃i
i
≡ ψ(τ ̃). (51)
For τ ̃ ∈ E+
ID, Q(τ ̃) = 0. If c(1−α+ς)(τ ̃) + ς is a continuity point of the distribution of ψ(τ ̃),
lim
n→∞ P τ ̃ ∈ CS(1−α)
n = lim
n→∞ P √nQbn(τ ̃) ≤ c(1−α+ς)(τ ̃) + ς ≥ 1 − α.
If c(1−α+ς)(τ ̃) + ς is a discontinuity point, then for an infinitesimal ς > 0, c(1−α)(τ ̃) is a
continuity point and
lim
n→∞ P τ ̃ ∈ CS(1−α)
n ≥ lim
n→∞ P √nQbn(τ ̃) ≤ c(1−α)(τ ̃) = 1 − α.
Q.E.D.
PROOF OF PROPOSITION 4.1: I verify the assumptions in Theorem 3.2 of Fang and
Santos (2019), under which Proposition 4.1 follows. Their Assumption 1, Assumption 3(i),
and Assumption 3(iii)-(iv) hold by construction; Assumption 2 holds under Theorem 4.1;
Assumption 4 holds by Lemma S.3.8 in their Online Appendix. Finally, to show their As
sumption 3(ii) holds, recall  ̆m2
τ ̃(ω) defined in Step 1 of Procedure 1 and bm2
τ ̃(ω), m2
τ ̃(ω)
defined in (31). Let μ ̆ be the bootstrap analog of μb defined in (48) under Procedure 1. Then
the bootstrap analog of the empirical process in (49) is
√n  ̆m2
τ ̃(ω) − bm2
τ ̃(ω) = √n  ̆m2
τ ̃(ω) − m2
τ ̃(ω) − √n bm2
τ ̃(ω) − m2
τ ̃(ω)
= 2 (J(ω)Lμ + τ ̃eT0)′ J(ω)L√n(μ ̆ − μ) (52)
− Gn
h
2 (J(ω)Lμ + τ ̃eT0)′ J(ω)LY ̃i
i
+ op(1)
= Gn
h
2 (J(ω)Lμ + τ ̃eT0)′ J(ω)L(Wi − 1)Y ̃i
i
+ op(1),
where the third equality follows from (49) and a similar first-order expansion applied
to √n  ̆m2
τ ̃(ω) − bm2
τ ̃(ω) , and the last equality follows from √n (μ ̆ − μ) = Gn[WiY ̃i] +
op(1). Then Theorem 3.6.13 of van der Vaart and Wellner (1996) applies, implying As
sumption 3(ii) of Fang and Santos (2019). Q.E.D.

50
APPENDIX B: AUXILIARY RESULTS
B.1. Weighting Across Time Periods
Consider the following analogy of Assumption 1 with time-varying weights:
ASSUMPTION B.1—Synthetic Parallel Biases: There exists a set of weights {νt}T0
t=1
such that PT0
t=1 νt = 1 and for all k ∈ {2, ..., K},
T0
X
t=1
νt μ1
t (0) − μk
t (0) = μ1
T (0) − μk
T (0).
In words, Assumption B.1 requires that the selection bias between the treated unit and
the control unit k, μt1(0) − μtk(0), has a time-varying pattern such that the post-treatment
selection bias μ1
T (0) − μk
T (0) can be expressed as an affine combination of pre-treatment
selection biases {μt1(0) − μtk(0)}T0
t=1, and this weighting scheme is stable across control
units. Ban and Kédagni (2023, Section 6.2) propose a similar identification strategy by
connecting the post-treatment selection biases to their pre-treatment counterparts, but as
sume that μ1
T (0) − μk
T (0) lies in the convex hull of all μt1(0) − μtk(0) : t ∈ {1, ..., T0}, k ∈
{2, ..., K} . In contrast, I start with the weaker assumption of affine weights and restrict
the post-treatment selection bias relative to unit k, μ1
T (0) − μk
T (0), to live in the affine hull
of pre-treatment biases specific to unit k only, {μt1(0) − μtk(0)}T0
t=1. This not only explores
the intertemporal structure within the unit-k specific time series of selection biases, but
also connects to the double-robustness property of the two-way weighting identification
framework in AAHIW, where the counterfactual μ1
T (0) is identified by
μ1
T (0) =
T0
X
t=1
νtμ1
t (0) +
K
X
k=2
ωk μk
T (0) −
T0
X
t=1
K
X
k=2
νt ωk μk
t (0) (53)
if either the time weights or the unit weights are valid. To see this, suppose Assumption 1
holds and ω is a valid set of unit weights. Then for all t ∈ {1, ..., T0}, μ1
T (0) − μt1(0) =
PK
k=2 ωk μk
T (0) − μtk(0) and therefore for any affine ν, PT0
t=1 νt μ1
T (0) − μt1(0) =
PT0
t=1 νt
PK
k=2 ωk μk
T (0) − μtk(0) , which is equivalent to (53). Similarly, if Assumption
B.1 holds and ν is a valid set of time weights. Then for all k = {2, ..., K}, μ1
T (0) −

51
μk
T (0) = PT0
t=1 νt μt1(0) − μtk(0) and therefore for any affine ω, PK
k=2 ωk μ1
T (0) −
μk
T (0) = PK
k=2 ωk
PT0
t=1 νt μt1(0) − μtk(0) , which is again equivalent to (53).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:52.386Z
- **Text Length:** 106067 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 51 of 51
