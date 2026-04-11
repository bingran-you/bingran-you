# PDF Document: Ascoli et al. - 2025 - Stoichiometric ontogenetic development influences population dynamics Stage-structured model under.pdf

**File Path:** Ascoli et al. - 2025 - Stoichiometric ontogenetic development influences population dynamics Stage-structured model under.pdf

**Processed Date:** 2026-02-10T18:14:03.305Z

**File Size:** 2224.92 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3667

**Title:** Stoichiometric ontogenetic development influences population dynamics: Stage-structured model under nutrient co-limitations

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Stoichiometric ontogenetic development influences population
dynamics: Stage-structured model under nutrient co-limitations
Tomas Ascolia, Dhruba Pariyar Damayb, Jing Lic, Angela Peaceb, Gregory D. Mayerb, Rebecca A. Everetta
aHaverford College, Haverford, PA, USA bTexas Tech University, Lubbock, TX, USA cCalifornia State University Northridge, Northridge, CA, USA
Abstract
Ecological processes depend on the flow and balance of essential elements such as carbon (C) and phosphorus (P), and changes in these elements can cause adverse effects to ecosystems. The theory of Ecological Stoichiometry offers a conceptual framework to investigate the impact of elemental imbalances on structured populations while simultaneously considering how ecological structures regulate nutrient cycling and ecosystem processes. While there have been significant advances in the development o-
f stoichiometric food web models, these efforts often consider a homogeneous population and neglect stage-structure. The development of stage-structured population models has significantly contributed to understanding energy flow and population dynamics of ecological systems. However, stage structure models fail to consider food quality in addition to food quantity. We develop a stoichiometric stage-structure producer-grazer model that considers co-limitation of nutrients, and parameterize the mod-
el for an algae-Daphnia food chain. Our findings emphasize the impact of stoichiometric constraints on structured population dynamics. By incorporating both food quantity and quality into maturation rates, we demonstrate how stage-structured dynamics can influence outcomes in variable environments. Stage-specific parameters, such as juvenile growth and ingestion rates can drive shifts in equilibria, limit cycles, and bifurcation points. These effects are especially significant in high-light enviro-
nments where nutrient limitations are most pronounced.
Keywords: Ecological Stoichiometry, Daphnia, co-limited growth
1. Introduction
Stage-structured models are useful for capturing complicated population dynamics [13], however many neglect the role of nutrient availability on stage development. Resource quantity and quality have varying effects on grazer growth at different developmental stages. Early stages, characterized by high growth rates, may be particularly affected by nutrient limitations (e.g., nitrogen N and phosphorus P limitations) [2]. Nutrient availability directly impacts grazer growth and ontogeny [24, 5], and -
since reproductive tissues are rich in N and P, nutrient-poor food can significantly reduce reproductive output [7]. These stage-specific effects influence population dynamics, underscoring the need for nutrient-dependent, stage-structured modeling approaches. While there have been significant advances in incorporating nutrient limitations and
arXiv:2511.13901v1 [q-bio.PE] 17 Nov 2025

stoichiometric constraints into population models over the last few decades under the framework of Ecological Stoichiometry [23], these efforts often consider homogeneous populations and neglect stage structure. The theory of Ecological Stoichiometry consider multiple chemical elements and their ratios across trophic levels to incorporate food quantity and quality into a single framework[23]. Andersen (1997) [1] was a pioneer in incorporating stoichiometric effects into mathematical models, modif-
ying the classical Rosenzweig-MacArthur variation of the Lotka-Volterra equations to account for nutrient-limited growth by adjusting both producer growth rates and grazer efficiency. Building on this, Loladze et al. (2000) [12] developed the LKE model, focusing on a producergrazer system (algae-Daphnia) and introducing a variable phosphorus-to-carbon (P:C) ratio in producers, termed the cell quota (Q), to reflect food quality. This modeling framework has been expanded to include nutrient excess c-
onsequences [20], multiple nutrients [9, 10, 11], explicitly track free nutrients in the environment [19, 25], determine important trophic transfer efficiencies [17], and explore dynamic foraging behaviors [18, 16]. Many stoichiometric models utilize threshold minimum functions to account for constraints from multiple elements, following Justus von Liebig’s law of the minimum [23]. A smooth alternative is the multiple limitation hypothesis, which proposes that growth can be simultaneously limited -
by multiple nutrients [8]. Liebig’s law assumes that resources are strictly essential, implying that in systems with multiple limiting nutrients, the limiting factor may shift abruptly as nutrient availability changes. In contrast, the multiple limitation hypothesis suggests that nutrients interact, leading to a gradual transition from limitation by one nutrient to another with a region of co-limitation. Liebig’s Law may overestimate the growth rate of Daphnia magna when multiple nutrients approac-
h their respective limiting concentrations simultaneously [22]. The complexities of individual stage structures have largely been neglected in stoichiometric modeling. Current models may fail when fecundity and maturation are crucial in nutrient recycling and ecosystem function. To investigate the effects of stoichiometry-dependent organismal stage structures under nutrient constraints, we develop and analyze a stage-structured population model subject to variable nutrients. Our model incorporates-
 stoichiometric constraints (i.e., nutrient:carbon ratio) into stage-structured population dynamics, which we parameterize for two trophic levels of an aquatic food chain (algae-Daphnia). Here, we consider co-limitation and use smooth functions to incorporate nutrient limitations on growth and maturation rates. The model is described in Section 2. In Section 3 we prove positivity and boundedness of model solutions to ensure biological relevance as well as prove stability of grazer extinction equil-
ibria. Numerical analysis of the model is provided in Section 4, including simulations, numerical bifurcation analyses, and parameter sensitivity analysis. Conclusions are discussed in Section 5. Our results highlight the roles of stoichiometric constraints on variable producer nutrient content and population dynamics. Incorporating variable food quantity and quality into maturation dynamics showcase the influence that stage structured dynamics can have in variable environments. In our model, stag-
e-specific parameters such as juvenile growth and ingestion rates affect maturation rates and can lead to shifts in equilibria, limit cycles, and bifurcation points. Their affects are particularly pronounced in high light environments where nutrient limitations are most severe.
2. Model Construction
Loladze, Kuang, and Elser [12] formulated a producer-grazer model (LKE model) of the first two trophic levels of an aquatic food chain (algae-Daphnia) that incorporated the theory of 2

ecological stoichiometry, given by the following model:
dx
dt “ bx
ˆ
1 ́ x
mintK, P ́θy
qu
 ̇
 ́ f pxqy, (1a)
dy
dt “ eˆ min
"
1, Q
θ
*
f pxqy  ́ δy, (1b)
where
Q “ P  ́ θy
x and f pxq “ cx
a ` x , (2)
and where xptq and yptq represent the biomass density of the producer (algae) and grazer (Daphnia) respectively, measured in terms of mg C/l. The model assumes that the producer and grazer are composed of two essential elements, C and P and considers their stoichiometric P:C ratios. The model assumes that the producer’s P:C ratio Q is variable while the grazer’s P:C ratio θ is constant, and the total phosphorus in the system P is constant. The model further assumes that producers uptake available -
P immediately and that all the P is either in the producer or grazer populations, allowing the variable Q to be written as given in (2). Parameter b is the maximum growth rate of the producer, K is the light-dependent producer carrying capacity in terms of C, q is the producer’s minimal P:C ratio required for growth, eˆ ă 1 is the grazer’s maximum production efficiency, and δ is the grazer’s loss rate. The grazer’s ingestion rate f pxq is the Holling type II functional response denoted in (2), whe-
re c is the maximum ingestion rate and a is the half-saturation constant. We modify the LKE model (1) to incorporate co-limitation of P and C on producer and grazer growth dynamics using the multiple limitation hypothesis. For the producer’s growth, we apply the multiplicative growth rate approach presented by Saito et al. [21] to replace the minimum function in (1a). Note that equation (1a) can be written as
dx
dt “ bx min
"
1 ́ x
K,1 ́ q
Q
*
 ́ f pxqy,
which can be written in co-limitation form as
dx
dt “ bx
 ́
1 ́ x
K
 ̄
ˆ
1 ́ q
Q
 ̇
 ́ f pxqy.
We further assume that grazer growth is co-limited by P and C by replacing the conversion efficiency minimum function in (1b) with the hyperbolic tangent function
hpQq “ tanh
ˆQ
θ
 ̇
. (3)
Note that hpQq ď Q
θ . These changes result in the stoichiometric producer-grazer model with co-limitation given by
dx
dt “ bx
 ́
1 ́ x
K
 ̄
ˆ
1 ́ q
Q
 ̇
 ́ f pxqy, (4a)
dy
dt “ eˆhpQq f pxqy  ́ δy. (4b)
3

Visualizations of these co-limitation functions are given in Figure 1.
(a) Leibig producer growth (b) co-limited producer growth (c) grazer conversion efficiencies Figure 1: Visualizations of nonsmooth functional forms using Leibig minimum approach vs smooth co-limitation approach: (a) producer growth with minimum function min
!
1 ́ x
K,1 ́ q
Q
)
, (b) producer growth using multiplicative
co-limitation function `1  ́ x
K
 ̆
 ́
1 ́ q
Q
 ̄
, (c) grazer conversion efficiencies. Here we use K “ 2 mg C/l, q “ 0.0038 mg P/mg C, θ “ 0.03 mg P/mg C.
We now modify model (4) to incorporate grazer stage structure by considering the amount of carbon in juvenile Jptq and adult Aptq Daphnia populations. We assume all adult growth goes directly to the reproduction of juveniles, and all juvenile growth goes directly to maturation. These growth dynamics depend directly on ingestion rates and the conversion of food into biomass. The conversion efficiency for reproduction depends on the P:C ratio required to produce juvenilities, θ j. The conversion eff-
iciency for maturation growth depends on the P:C ratio required by an adult, θa. Note that the model does not allow for individual growth outside of maturation or reproduction. Our stoichiometric co-limited stage-structure model is given by
dx
dt “ bx
 ́
1 ́ x
K
 ̄
ˆ
1 ́ q
Q
 ̇
 ́ f jpxqJ  ́ fapxqA, (5a)
dJ
dt “ eah jpQq fapxqA  ́ e jhapQq f jpxqJ  ́ δ j J, (5b)
dA
dt “ e jhapQq f jpxqJ  ́ δaA, (5c)
where Q “ P ́θj J ́θaA
x , fipxq “ ci x
ai`x , and hipQq “ tanh
 ́Q
θi
 ̄
for i “ j, a for juveniles and adults
respectively. We now have stage-specific parameters ci, ai, ei, θi, and δi, for i “ j, a. A list of the parameters are given in Table 1.
3. Model Analysis
Here, we conduct basic analyses of our stoichiometric co-limited stage-structure model (5) verifying solutions remain positive and bounded in biologically realistic ranges with the following theorem.
Theorem 3.1. Solution to the system (5) with initial conditions in the set
Ω“
"
px, J, Aq : 0 ď x ď min
"
K, P
q
*
, 0 ď J, 0 ď A, qx ` θ j J ` θaA ă P
*
4

will remain there for all forward time.
Proof. Let S ptq “ pxptq, Jptq, Aptqq be a solution of system (5) with S p0q P Ω. Assume that S pt1q touches or crosses a boundary of Ω for the first time for some t1 ą 0. We prove this in the following cases.
Case 1: If Jpt1q “ 0 for t1 ą 0. Since Apt1q ě 0, then dJ
dt |t“t1 ě 0, and hence Jptq ě 0 for all t ą t1 ą 0 or we can say Jptq ě 0 for all t ą 0.
Case 2: If Apt1q “ 0 for t1 ą 0. Since Jpt1q ě 0, then dA
dt |t“t1 ě 0, and hence Aptq ě 0 for all t ą t1 ą 0 or we can say Aptq ě 0 for all t ą 0.
Case 3: If xpt1q “ 0 for t1 ą 0. Then dx
dt |t“t1 “ 0, and hence xptq “ 0 for all t ą t1 ą 0 or we can say xptq ě 0 for all t ą 0.
Case 4: If xpt1q “ mintK, P
q u for t1 ą 0. Then, for every t P r0, t1s,
x1 “ bx
 ́
1 ́ x
K
 ̄
ˆ
1 ́ q
Qptq
 ̇
 ́ f jpxqJ  ́ fapxqA
ď bx
 ́
1 ́ x
K
 ̄
ˆ
1 ́ q
Qptq
 ̇
“ bx
 ́
1 ́ x
K
 ̄
 ̈
 ̋1  ́ x
P ́θ j J ́θa A q
 ̨
‚
ď bx
 ́
1 ́ x
K
 ̄
 ̃
1 ́ x
P q
 ̧
.
Therefore x1 ď bx `1  ́ x
K
 ̆ and x1 ď bx
ˆ
1 ́ x
P q
 ̇
. By the standard comparison argument,
xpt1q ď mintK, P
q u. Thus S pt1q can not cross this boundary.
Case 5: Suppose the inequality qx ` θ j J ` θaA ă P is not true for the first time for t1 ą 0 and let
qxpt1q ` θ j Jpt1q ` θaApt1q “ P, for t1 ą 0. (6)
Since for t P r0, t1q, qxptq ` θ j Jptq ` θaAptq ă P, implies that
qx1pt1q ` θ j J1pt1q ` θaA1pt1q ě 0. (7)
From (6), it follows that
xpt1q “ P  ́ θ j Jpt1q  ́ θaApt1q
q and q “ P  ́ θ j Jpt1q  ́ θaApt1q
xpt1q “ Qpt1q.
From (5a), to obtain bounds for x1pt1q :
x1pt1q “ bxpt1q
ˆ
1  ́ xpt1q
K
 ̇ˆ
1 ́ q
Qpt1q
 ̇
 ́ f jpxpt1qqJpt1q  ́ fapxpt1qqApt1q
“  ́ f jpxpt1qqJpt1q  ́ fapxpt1qqApt1q. (8) 5

From (5b), to obtain bounds for J1pt1q :
J1pt1q “ eah jpQpt1qq fapxpt1qqApt1q  ́ e jhapQpt1qq f jpxpt1qqJpt1q  ́ δ j Jpt1q
ď eah jpQpt1qq fapxpt1qqApt1q
ď ea
q
θj
fapxpt1qqApt1q. (9)
From (5c), to obtain bounds for A1pt1q :
A1pt1q “ e jhapQpt1qq f jpxpt1qqJpt1q  ́ δaApt1q ď e j
q
θa
f jpxpt1qqJpt1q. (10)
Using (8), (9), (10) and the fact that ei ă 1, for i “ j, a, we obtain the following:
qx1pt1q ` θ j J1pt1q ` θaA1pt1q
ď q p ́ f jpxpt1qqJpt1q  ́ fapxpt1qqApt1qq ` θ jea
q
θj
fapxpt1qqApt1q ` θae j
q
θa
f jpxpt1qqJpt1q
ď qpe j  ́ 1q f jpxpt1qqJpt1q ` qpea  ́ 1q fapxpt1qqApt1q ă 0
This contradicts (7) and completes the proof.
Model (5) has two equilibria where the grazer population dies out, E1 “ pK, 0, 0q and E2 “
 ́
P
q , 0, 0
 ̄
. The following theorem presents results on the local stability of these equilibria.
Theorem 3.2. The grazer extinction equilibria E1 and E2 of the stoichiometric co-limited stagestructure model (5) have the following properties:
(a) E1 “ pK, 0, 0q is locally asymptotically stable if
Kă P
q and e jha
ˆP
K
 ̇
f jpKq
ˆ
eah j
ˆP
K
 ̇
fapKq  ́ δa
 ̇
ă δ jδa,
and E1 is unstable if
Ką P
q or e jha
ˆP
K
 ̇
f jpKq
ˆ
eah j
ˆP
K
 ̇
fapKq  ́ δa
 ̇
ą δ jδa.
(b) E2 “ p P
q , 0, 0q is locally asymptotically stable if
Ką P
q and e jha pqq f j
ˆP
q
 ̇ˆ
eah j pqq fa
ˆP
q
 ̇
 ́ δa
 ̇
ă δ jδa,
and E2 is unstable if
Kă P
q or e jha pqq f j
ˆP
q
 ̇ˆ
eah j pqq fa
ˆP
q
 ̇
 ́ δa
 ̇
ą δ jδa.
6

Proof. We first rewrite System (5) as
x1 “ bxGpxqNpx, J, Aq  ́ f jpxqJ  ́ fapxqA (11a)
J1 “ eaRpx, J, Aq fapxqA  ́ e j Mpx, J, Aq f jpxqJ  ́ δ j J (11b)
A1 “ e j Mpx, J, Aq f jpxqJ  ́ δaA, (11c)
where Gpxq “ 1  ́ x
K , Npx, J, Aq “ 1  ́ qx
P ́θjJ ́θaA , Rpx, J, Aq “ h jpQq, and Mpx, J, Aq “ hapQq. The Jacobian of System (11) is:
J“
»

J11 J12 J13
J21 J22 J23
J31 J32 J33
fi
fl (12)
where J11 “ bGN ` bxG1N ` bxGNx  ́ f 1
j J  ́ fa1A, J12 “ bxGNJ  ́ f j, J13 “ bxGNA  ́
fa, J21 “ eaA pRx fa ` R fa1q ́e j J
 ́
Mx fj ` M f 1
j
 ̄
, J22 “ eaRJ faA ́e j f j pMJ J ` Mq ́δ j, J23 “
ea fa pRAA ` Rq ́e j MA f j J, J31 “ e j J
 ́
Mx fj ` M f 1
j
 ̄
, J32 “ e j f j pMJ J ` Mq , J33 “ e j MA f j J ́ δa.
To prove (a): We evaluate the Jacobian in (12) at E1,
J
ˇ ˇ ˇ
ˇE1
“
»

 ́b
 ́
1  ́ Kq
P
 ̄
 ́ f jpKq  ́ fapKq
0  ́e j f jpKqMpK, 0, 0q  ́ δ j ea faRpK, 0, 0q 0 e j f jpKqMpK, 0, 0q  ́δa
fi
ffi
fl.
Let α1 “ e j f jpKqMpK, 0, 0q ą 0 and α2 “ ea fapKqRpK, 0, 0q ą 0. To calculate its eigenvalues, we obtain the corresponding characteristic equation
␣ ́b
ˆ
1  ́ Kq
P
 ̇
 ́ λ(
"
p ́α1  ́ δ j  ́ λqp ́δa  ́ λq  ́ α1α2
*
“ 0,
or equivalently,
"
b
 ̃
1 ́ K
P q
 ̧
`λ
*ˆ
λ2 ` pα1 ` δ j ` δaqλ ` α1pδa  ́ α2q ` δ jδa
 ̇
“ 0.
Then either b
ˆ
1 ́ K
P q
 ̇
` λ “ 0, which implies λ “  ́b
ˆ
1 ́ K
P q
 ̇
ă 0 if K ă P
q,
or λ2 ` pα1 ` δ j ` δaqλ ` α1pδa  ́ α2q ` δ jδa “ 0.
Let
Ppλq “ λ2 ` pα1 ` δ j ` δaqλ ` α1pδa  ́ α2q ` δ jδa.
Since α1 “ e j f jpKqMpK, 0, 0q ą 0, α2 “ ea fapKqRpK, 0, 0q ą 0, and δ j, δa ą 0, then α1 ` δ j ` δa ą 0. If α1pδa  ́ α2q ` δ jδa ą 0, then by the Routh-Hurwitz Criteria, all of the roots of polynomial Ppλq are negative or have negative real parts. Thus E1 is locally asymptotically stable if
α1pα2  ́ δaq ă δ jδa, 7

which simplifies to
e jha
ˆP
K
 ̇
f jpKq
ˆ
eah j
ˆP
K
 ̇
fapKq  ́ δa
 ̇
ă δ jδa.
Thus, E1 is locally asymptotically stable if
Kă P
q and e jha
ˆP
K
 ̇
f jpKq
ˆ
eah j
ˆP
K
 ̇
fapKq  ́ δa
 ̇
ă δ jδa.
Also note that E1 is unstable if
Ką P
q or e jha
ˆP
K
 ̇
f jpKq
ˆ
eah j
ˆP
K
 ̇
fapKq  ́ δa
 ̇
ą δ jδa.
To prove (b): We evaluate the Jacobian in (12) at E2,
J
ˇ ˇ ˇ
ˇE2
“
»

 ́b
 ́
1 ́ P
Kq
 ̄
 ́ fjpP
q q  ́ μθ j  ́ fap P
q q  ́ μθa
0  ́e j f jp P
q qMp P
q , 0, 0q  ́ δ j ea fap P
q qRp P
q , 0, 0q
0 ea fap P
q qRp P
q , 0, 0q  ́δa
fi
ffi
fl,
where μ “ b
q
 ́
1 ́ P
Kq
 ̄
. Let α ̄ 1 “ e j f jp P
q qMp P
q , 0, 0q ą 0 and α ̄ 2 “ ea fap P
q qRp P
q , 0, 0q ą 0. To calculate its eigenvalues, we obtain the corresponding characteristic equation
␣ ́b
 ̃
1 ́
P q
K
 ̧
 ́ λ(
"
p ́α ̄ 1  ́ δ j  ́ λqp ́δa  ́ λq  ́ α ̄ 1α ̄ 2
*
“ 0,
or equivalently,
"
b
 ̃
1 ́
P q
K
 ̧
`λ
*ˆ
λ2 ` pα ̄ 1 ` δ j ` δaqλ ` α ̄ 1pδa  ́ α ̄ 2q ` δ jδa
 ̇
“ 0.
Then either b
ˆ
1 ́
P q K
 ̇
` λ “ 0, which implies λ “  ́b
ˆ
1 ́
P q K
 ̇
ă 0 if K ą P
q,
or λ2 ` pα ̄ 1 ` δ j ` δaqλ ` α ̄ 1pδa  ́ α ̄ 2q ` δ jδa “ 0.
Let
P ̄ pλq “ λ2 ` pα ̄ 1 ` δ j ` δaqλ ` α ̄ 1pδa  ́ α ̄ 2q ` δ jδa.
Since α ̄ 1 “ e j f jp P
q qMp P
q , 0, 0q ą 0, α ̄ 2 “ ea fap P
q qRp P
q , 0, 0q ą 0, and δ j, δa ą 0, then α ̄ 1 ` δ j ` δa ą 0. If α ̄ 1pδa  ́ α ̄ 2q ` δ jδa ą 0, then by the Routh-Hurwitz Criteria, all of
the roots of polynomial P ̄ pλq are negative or have negative real parts. Thus E2 is locally asymptotically stable if
α ̄ 1pα ̄ 2  ́ δaq ă δ jδa,
which simplifies to
e jha pqq f j
ˆP
q
 ̇ˆ
eah j pqq fa
ˆP
q
 ̇
 ́ δa
 ̇
ă δ jδa.
8

Thus, E2 is locally asymptotically stable if
Ką P
q and e jha pqq f j
ˆP
q
 ̇ˆ
eah j pqq fa
ˆP
q
 ̇
 ́ δa
 ̇
ă δ jδa.
Also note that E2 is unstable if
Kă P
q or e jha pqq f j
ˆP
q
 ̇ˆ
eah j pqq fa
ˆP
q
 ̇
 ́ δa
 ̇
ą δ jδa.
4. Numerical Analysis
This section describes the results of numerical experiments, numerical bifurcation analyses, and parameter sensitivity analyses of the stoichiometric co-limited stage-structure model (5). Baseline parameter values and ranges are shown in Table 1. Many of the parameter values were those used in the LKE model (1) [12]. The juvenile maximum production efficiency (e j) and juvenile constant P:C ratio (θ j) baseline values were assumed, and then we explored varying e j and θ j values in the numerical s-
imulations and sensitivity analysis. The loss rates (δ j, δa) include both natural death rate and outside factors such as predation. The baseline values were assumed and then we considered a range of loss rate values in the sensitivity analysis. The juvenile ingestion half-saturation constant (a j) was assumed to be the same as the adult ingestion halfsaturation constant (aa). Lastly, following [15], we assumed the juvenile maximum ingestion rate (c j) is smaller than the adult maximum ingestion r-
ate (ca), and explored varying c j values in the numerical simulations and sensitivity analysis. The light-dependent carrying capacity K has been shown to be an important bifurcation parameter in several stoichiometric producer-grazer models [12, 17]. In Figure 2, we explore the influence K has on the population dynamics, as well as the age distribution of juveniles and adult grazers with numerical simulations. Under low light levels, the populations approach an interior equilibrium where both pro-
ducer and grazer coexist (Fig. 2a). The low light conditions result in a relatively low producer density. Higher values of light yield oscillatory dynamics, where the populations coexist in stable limit cycles (Fig. 2b. Here, the proportion of carbon in the grazer population that composes adult biomass also oscillates. Interestingly, for even higher values of light the cycles collapse and solutions approach a new interior equilibrium (Fig. 2c. Here, the high light conditions result in a high produ-
cer density. Despite this high food density, the grazer equilibrium values are at similar values to the low light case observed in Fig. 2a. This is due to the stoichiometric constraints, as Q, the variable P:C ratio of the producer depends on a light levels, Fig. 3. While low light levels yield low producer density, the producers are relatively rich in P resulting in high food quality for grazers. On the other hand, high light levels yield high producer densities that have relatively low P content-
 resulting in low quality food for grazers. Medium levels of light, K “ 1 mg C/l, yield oscillatory dynamics where food quality can vary across wide ranges.
9

Parameter Description Baseline Range Source P Total phosphorus in system 0.025 mg P/l [0.01, 0.08] [12] K Producer light-dependent carrying capacity
varies mg C/l [0.25, 2.0] [12]
b Producer max growth rate 1.2/day [0.75, 1.5] [12] q Producer min P:C 0.0038 mg P/mg C [0.001, 0.005] [12] e j Juvenile max production efficiency
0.5 [0.2, 0.98] assumed
ea Adult max production efficiency
0.8 [0.2, 0.98] [12]
θ j Juvenile constant P:C ratio 0.025mg P/mg C [0.02, 0.08] assumed θa Adult constant P:C ratio 0.03mg P/mg C [0.02, 0.08] [12] δ j Juvenile loss rate 0.06/day [0.01, 0.3] assumed δa Adult loss rate 0.08/day [0.01, 0.3] assumed a j Juvenile ingestion Half-saturation constant
0.25 mg C/l [0.1, 0.5] assumed
aa Adult ingestion Half-saturation constant
0.25 mg C/l [0.1, 0.5] [12]
c j Juvenile max ingestion rate 0.5/day [0.1, 0.8] assumed ca Adult max ingestion rate 0.81/day [0.4, 1.2] [12]
Table 1: Stoichiometric co-limited stage-structure model 5 parameter table.
(a) K “ 0.5 mg C/l (b) K “ 1 mg C/l (c) K “ 2 mg C/l Figure 2: Numerical simulation of the model (5) showing population densities (black) and the proportion of C in the grazer population composed of adults (red), for parameter values listed Table 1 and varying values for K representing (a) low light levels K “ 0.5 mg C/l, (b) medium light levels K “ 1 mg C/l, and (c) high light levels K “ 2 mg C/l. Initial conditions are xp0q “ 0.5 mg C/l, Jp0q “ 0.125 mg C/l, and Ap0q “ 0.125 mg C/l.
10

Figure 3: Numerical simulation of the model (5) showing Q, the variable P:C ratio of the producer, for parameter values listed Table 1 and varying values for K. Initial conditions are xp0q “ 0.5 mg C/l, Jp0q “ 0.125 mg C/l, and Ap0q “ 0.125 mg C/l. Simulations correspond with those in Fig. 2.
4.1. Bifurcation Diagrams
We conducted numerical bifurcation analyses further exploring the dynamics for different light levels by varying the light-dependent producer carrying capacity K (Fig. 4). In all cases the bifurcation structure is similar to that of previous stoichiometic producer-grazer models [12, 17]. Grazers go extinct for very low values of K where there is not enough producer to sustain their population, and boundary equilibria E1 or E2 is stable. As K increases an interior equilibrium gains stability and bo-
th species persist. The equilibrium grazer population density increases as K increases until the systems reaches a Hopf bifurcation and limit cycles emerge. As K continues to increase the limit cycles grow in amplitude then suddenly collapse. Here large amplitude limit cycles collapse at a saddle-node bifurcation and a new interior equilibrium gains stability. The grazer population then starts to decrease as K increases and eventually dies out for very high values of K. These types of bifurcation -
dynamics observed in stoichiometric models have been robustly analyzed by Xie et al. 2018 [26].
11

Juvenile Density Adult Density Total Grazer Density
varying θ j
varying e j
varying c j
Figure 4: Bifurcation diagram of the model (5) using parameters in Table 1 and bifurcation parameter K. These bifurcation diagrams show the long-term behavior (t ą 1500 days) of the juvenile density (left column), the adult density (middle column), and total grazer density (right column) for varying values of the juvenile P:C ratio θ j (top row), juvenile maximum conversion efficiency e j (middle row), and juvenile maximum ingestion rate c j (bottom row).
Model (5) extends traditional stoichiometric models by incorporating stage structure. Here, we explore the important roles that juvenile specific parameters can play on the bifurcation dynamics of the system. Variations of juvenile P:C ratios, θ j, have profound effects on the limit cycles (Fig. 4 top row), where higher θ j values shorten the light ranges where limit cycles occur and decreases their amplitudes. Juveniles with higher θ j have a higher P demand and are more sensitive to nutrient lim-
itation. Under high light scenarios where nutrient limited growth dynamics are observed, grazer populations with higher θ j values cause the grazer to die out at lower light levels. The ranges of K exhibiting limit cycles are also influenced by juvenile maximum conversion efficiency e j (Fig. 4 middle row) and their maximum ingestion rates c j (Fig. 4 bottom row). Both e j and c j appear in the juvenile maturation rate, and changes in their values modify the population density of juveniles and of -
adults. Variations in e j do not have large affects on the amplitudes of the cycles, but do produce a shift in the location of the saddle-node bifurcation and the collapse of the cycles. Variations in c j affect the amplitudes of the cycles of the total grazer population densities (Fig. 4 right column, bottom row) and bifurcation points of the populations. For low light conditions, increases in e j and c j decreases juvenile densities and their proportion of the grazer populations. However, in hig-
h light conditions increases in e j and c j increase 12

juvenile densities and their proportion of the grazer populations. Biologically, increases to the maturation rate will shorten the juvenile stage, which can decrease juvenile population densities. On the other hand, increased maturation rates will increase adult populations leading to higher reproduction, which can increase juvenile population densities.
(a) Juvenile Density, K “ 0.5 mg C/l (b) Adult Density, K “ 0.5 mg C/l
(c) Juvenile Density, K “ 1 mg C/l (d) Adult Density, K “ 1 mg C/l
Figure 5: Two parameter bifurcation showcasing long term dynamics ( ą 5000 days) of (a) Juvenile and (b) Adult population densities when light-dependent producer carrying capacity K “ 0.5 mg C/l; and (c) Juvenile and (d) Adult population densities when light-dependent producer carrying capacity K “ 1 mg C/l for varying values of juvenile maximum ingestion rate c j and juvenile maximum conversion efficiency e j. Black curves separates regions where long term dynamics approach equilibria and limit c-
ycles. The black curve in (a) and (b) corresponds with the Hopf bifurcation. The black curve in (c) and (d) corresponds with the collapse of high amplitude cycles at the saddle-node bifurcation. Region 1 exhibits equilibria dynamics and Region 2 exhibits limit cycles, where the average density of the limit cycles is shown in the heatmap.
We further explore the roles of e j and c j with two-parameter bifurcation analyses (Fig. 5). These figures show the average population densities exhibited in long-term dynamics as heatmaps across e j and c j space, as well as bifurcation curves which divide the parameter space into regions with stable equilibria and stable limit cycles. Shifts in e j and c j affects the Hopf bifurcation point at low light levels (Fig. 5 (a)(b)), as well as the saddle-node bifurcation point that aligns with the co-
llapse of the cycles at higher light levels (Fig. 5 (c)(d)).
13

4.2. Sensitivity analysis
We investigate the sensitivity of the stoichiometric co-limited stage-structure model (5) parameters using Latin Hypercube Sampling (LHS) in conjunction with the Partial Rank Correlation Coefficient (PRCC) technique to conduct a global sensitivity analysis and identify key parameters strongly correlated with the model’s output. In this model, all 14 parameters were treated as uncertain, and we performed LHS with 10,000 simulations. Each uncertain parameter was assigned a uniform distribution with -
the ranges in Table 1 to determine the corresponding probability density function. We considered four outcome measures: 1.) average producer density (mg C/L), 2.) average juvenile density (mg C/L), 3.) average adult density (mg C/L), and 4.) P:C ratio of the producer. The PRCC is an appropriate statistical measure if parameters are monotonically related to output measures [14], and therefore we checked the relationship between each parameter individually and the output measures, (Figs. A.7 and A.8-
). Many regions showed monotonic trends and we computed the PRCC as a sensitivity index (Fig 6). However regions of non-monotonicity are discussed in Appendix A. Additionally, following Marino et al. [14], we performed a z-test on transformed PRCC values to identify significant parameters based on their relative sensitivity. The result of the z-test showed that, in general, parameters with PRCC values of greater magnitude exerted a strong influence on the output measures. According to the PRCC val-
ues, the environmental parameters of total phosphorus in the system P and light-dependent carrying capacity K significantly influence the model, as expected (Fig. 6). Additionally, the stage-specific parameters pc j, ca, e j, ea, θ j, θa, δ j, δaq strongly affect both average juvenile and adult densities (Fig. 6(b)). Here, increases in juvenile maximum ingestion rate c j and juvenile maximum production efficiency e j increase juvenile and adult densities. Increases in juvenile P:C ratio θ j and ju-
venile loss rate δ j decrease densities. These results provide deeper insight into stage-specific processes within the model.
14

(a)
(b) Figure 6: PRCC values for output measures: (a) average producer density (mg C/L) and P:C ratio of the producer and (b) average juvenile and adult densities (mg C/L), resulting from a sensitivity analysis of parameter ranges listed in Table 1. PRCC values range from -1 to 1, where negative values indicate an inverse relationship between the parameter and the output measure, and positive values suggest a direct positive impact on the output. Values highest in magnitude are the most influential. -
Values marked n.s. are non-significant (statistical significance p ą 0.05).
5. Discussion
Ecological stoichiometry [23] considers the effects of both food quantity and food quality on population dynamics. While many mathematical models consider the theory of ecological stoichiometry to investigate the effects of nutrient changes in the environment [12, 17, 25], few consider the life stages of the grazer populations and how nutrient limitation affects stage-specific
15

processes. Biological studies show that juveniles may be especially affected by nutrient limitation due to their higher growth rate and that nutrient poor food can have strong effects on reproduction output [3]. We develop a stoichiometric co-limited stage-structure producer-grazer model (5) to investigate the effects of stoichiometry-dependent organismal stage structures under nutrient constraints. Stoichiometric constraints incorporated in the model showcase similar bifurcation structures to pr-
eviously developed non-stage stoichiometric modes [12], where changes in light levels shift population dynamics from stable extinction equilibria to stable interior equilibria and stable limit cycles (Figures 2, 3, and 4). While light levels (K) and environmental phosphorus loads (P) have the most influence on model output, variations of stage-specific parameters impact populations dynamics and the variable P:C ratios of the producer (Fig. 6). Indeed, model analyses showcase that variation in stag-
e-specific parameters can lead to differences in the population dynamics. Specifically, juveniles with higher constant P:C ratios (θ j) have a shorter range of light levels that exhibit smaller-amplitude oscillations and these populations reach extinction at lower light levels compared to those with lower P:C ratios. Parameters affecting the maturation rate (e j, c j) also affect population dynamics; juveniles with higher maximum production efficiency and maximum ingestion rate have lower juvenile-
 densities at low light levels, longer ranges of light levels that exhibit oscillatory population dynamics, and higher light levels are required for extinction conditions. In general, the influences of stage-specific parameters have higher effects on the population dynamics at higher light levels than at lower light levels, where we see the collapse of the limits cycles at the saddle-node bifurcation (Fig. 4). Higher light conditions correspond with a higher light-dependent carrying capacity for t-
he algae population and lead to high quantity, but low quality food. The influence of stoichiometric constraints is more pronounced in these environments where algae exhibit lower P:C ratio [23]. While this model is an important first step to investigating the relationship between nutrient limitation and stage-specific processes, future work can consider a delay differential equation model to be more biologically realistic. Our stoichiometric co-limited stage-structure model (5) assumes an instant-
aneous maturation, whereas a delay differential equation model can incorporate a maturation rate. Realistically, this maturation rate can depend on the quantity as well as quality of the producer, which leads to a stage-dependent maturation delay. McCauley et al. [15] developed a stage-dependent maturation delay differential equations model allowing maturation rates to depend on food quantity and extending this framework stoichiometrically would be insightful. Future models can also consider the c-
onsequences of nutrient excess [19, 6] and/or size-structure [4] to allow for individual growth outside of maturation and reproduction.
Acknowledgments
RE and TA were supported by NSF DMS-2322103. DPD, AP, and GDM were supported by NSF DMS-2322102. JL was supported by NSF DMS-2322104.
Appendix A. Latin Hypercube and Partial Rank Correlation Coefficient
The monotonic relationships between the parameters and output measures are shown in Figs. (A.7, A.8). While the majority of the dynamics are monotone there are some non-monotonic trends. However, in some scenarios the variation in the output measure is small enough to justify
16

disregarding monotonicity. For example, the effects of parameter q on output measures: average adult density and P : C ratio of the producer in Fig. A.8. For other parameters (P, ca, c j, θa, θ j, ea, δa and δ j) the graphs exhibited two distinct monotonic ranges. For each of these cases, we divided these parameter into monotonic ranges, resampled the space, and conducted additional PRCC analyses following techniques from [14]. This new PRCC analysis yielded similar results. For example, for the -
parameters c j, θ j, and δ j, the graphs were divided into the following monotonic ranges: [0.1 0.3] and [0.3 0.8] for c j, [0.02 0.04] and [0.04 0.08] for θ j, [0.01 0.24] and [0.24 0.3] for δ j, and these PRCC analyses (Figs. A.9,A.10) align with the original sensitivity analyses on the full parameter ranges (Figure 6).
(a) Average producer density (mg C/L)
(b) Average juvenile density (mg C/L) Figure A.7: Monotonicity plots for (a) average producer density (mg C/L) and (b) average juvenile density (mg C/L) by using parameter values listed in Table 1.
17

(a) Average adult density (mg C/L)
(b) P:C ratio of the producer Figure A.8: Monotonicity plots for (a) average adult density (mg C/L) and (b) P:C ratio of the producer by using parameter values listed in Table 1.
18

(a) c j range 0.1-0.3 (effect on x and Q) (b) c j range 0.3-0.8 (effect on x and Q)
(c) θ j range 0.02-0.04 (effect on x and Q) (d) θ j range 0.04-0.08 (effect on x and Q)
(e) δ j range 0.01-0.24 (effect on x and Q) (f) δ j range 0.24-0.3 (effect on x and Q)
Figure A.9: PRCC values of output measures: average producer density, and P:C ratio of producer by using parameter values listed in Table 1 with 5000 samples. The parameters c j, θ j, and δ j were divided into two distinct monotonic ranges: [0.1 0.3] and [0.3 0.8] for c j, [0.02 0.04] and [0.04 0.08] for θ j, [0.01 0.24] and [0.24 0.3] for δ j.
19

(a) c j range 0.1-0.3 (effect on J and A) (b) c j range 0.3-0.8 (effect on J and A)
(c) θ j range 0.02-0.04 (effect on J and A) (d) θ j range 0.04-0.08 (effect on J and A)
(e) δ j range 0.01-0.24 (effect on J and A) (f) θ j range 0.24-0.3 (effect on J and A)
Figure A.10: PRCC values of output measures: average juvenile and adult densities by using parameter values listed in Table 1 with 5000 samples. The parameters c j, θ j, and δ j were divided into two distinct monotonic ranges: [0.1, 0.3] and [0.3, 0.8] for c j; [0.02, 0.04] and [0.04, 0.08] for θ j; [0.01, 0.24] and [0.24, 0.3] for δ j.
References
[1] T. Andersen. Pelagic nutrient cycles: Herbivores as sources and sinks. Springer, 1997.
[2] T. Andersen, J. J. Elser, and D. O. Hessen. Stoichiometry and population dynamics. Ecology Letters, 7:884–900, 2004. [3] T. Andersen, J. J. Elser, and D. O. Hessen. Stoichiometry and population dynamics. Ecology Letters, 7(9):884–900, 2004. [4] A. De Roos, O. Diekmann, and J. Metz. Studying the dynamics of structured population models: a versatile technique and its application to daphnia. The American Naturalist, 139(1):123–147, 1992. [5] W. Demott, R. Gulati, and K. Siewertsen. Effects of pho-
sphorus-deficient diets on the carbon and phosphorus balance of daphnia magna. Limnol Oceanogr, 43(6):1147–1161, 1998. [6] J. J. Elser, M. Kyle, J. Learned, M. L. McCrackin, A. Peace, and L. Steger. Life on the stoichiometric knife-edge: effects of high and low food c: P ratio on growth, feeding, and respiration in three daphnia species. Inland Waters, 6(2):136–146, 2016.
20

[7] P. Færøvig and D. Hessen. Allocation strategies in crustacean stoichiometry: the potential role of phosphorus in the limitation of reproduction. Freshwater Biol., 48:1782–1792, 2003. [8] S. K. Gleeson and D. Tilman. Plant allocation and the multiple limitation hypothesis. The American Naturalist, 139(6):1322–1343, 1991. [9] J. P. Grover. Stoichiometry, herbivory and competition for nutrients: simple models based on planktonic ecosystems. Journal of theoretical biology, 214(4):599–618, 2002. [-
10] J. P. Grover. The impact of variable stoichiometry on predator-prey interactions: a multinutrient approach. The American Naturalist, 162(1):29–43, 2003. [11] J. P. Grover. Predation, competition, and nutrient recycling: a stoichiometric approach with multiple nutrients. Journal of theoretical biology, 229(1):31–43, 2004. [12] I. Loladze, Y. Kuang, and J. Elser. Stoichiometry in producer–grazer systems: Linking energy flow with element cycling. Bull. Math. Bio., 62(6):1137–1162, 2000.
[13] B. F. Manly. Stage-structured populations: Sampling, analysis and simulation. Springer, 1990. [14] S. Marino, I. Hogue, C. Ray, and D. Kirschner. A methodology for performing global uncertainty and sensitivity analysis in systems biology. Theor. Biol., 254, 2008. [15] E. McCauley, W. A. Nelson, and R. M. Nisbet. Small-amplitude cycles emerge from stagestructured interactions in Daphnia–algal systems. Nature, 455, 2008. [16] O. O. Oladepo1 and A. Peace. Nutrient-driven adaptive evolution of fo-
raging traits impacts producer-grazer dynamics. submitted, 2025. [17] A. Peace. Effects of light, nutrients, and food chain length on trophic efficiencies in simple stoichiometric aquatic food chain models. Ecological Modelling, 312:125–135, 2015. [18] A. Peace and H. Wang. Compensatory foraging in stoichiometric producer–grazer models. Bull. Math. Bio., 81(12):4932–4950, 2019. [19] A. Peace, H. Wang, and Y. Kuang. Dynamics of a producer–grazer model incorporating the effects of excess food nutrie-
nt content on grazers growth. Bull. Math. Bio., 76(9):2175–2197, 2014. [20] A. Peace, Y. Zhao, I. Loladze, J. J. Elser, and Y. Kuang. A stoichiometric producer-grazer model incorporating the effects of excess food-nutrient content on consumer dynamic. Mathematical biosciences, 244(2):107–115, 2013.
[21] M. A. Saito, T. J. Goepfert, and J. T. Ritt. Some thoughts on the concept of colimitation: three definitions and the importance of bioavailability. Limnology and Oceanography, 53(1):276–290, 2008. [22] E. Sperfeld, D. Martin-Creuzburg, and A. Wacker. Multiple resource limitation theory applied to herbivorous consumers: Liebig’s minimum rule vs. interactive co-limitation. Ecology Letters, 15(2):142–150, 2012.
[23] R. W. Sterner and J. J. Elser. Ecological stoichiometry: The biology of elements from molecules to the biosphere. Princeton University Press, 2002. [24] M. Villar-Argaiz and R. Sterner. Life history bottlenecks in diaptomus clavipes induced by phosphorus-limited algae. Limnology and Oceanography, 47(4):925–1272, 2002. [25] C. Wang, Y. Kuang, and I. Loladze. Dynamics of a mechanistically derived stoichiometric producer-grazer model. Journal of Biological Dynamics, 2(3):286–296, 2008. [26] T. X-
ie, X. Yang, X. Li, and H. Wang. Complete global and bifurcation analysis of a stoichiometric predator–prey model. Journal of Dynamics and Differential Equations, 30:447–472, 2018.
21

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:03.305Z
- **Text Length:** 41056 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
