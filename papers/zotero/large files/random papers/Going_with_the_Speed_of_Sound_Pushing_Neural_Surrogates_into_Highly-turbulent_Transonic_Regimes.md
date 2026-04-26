# PDF Document: Paischer et al. - 2025 - Going with the Speed of Sound Pushing Neural Surrogates into Highly-turbulent Transonic Regimes.pdf

**File Path:** Paischer et al. - 2025 - Going with the Speed of Sound Pushing Neural Surrogates into Highly-turbulent Transonic Regimes.pdf

**Processed Date:** 2026-02-10T18:17:36.268Z

**File Size:** 21570.43 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3747

**Title:** Going with the Speed of Sound: Pushing Neural Surrogates into Highly-turbulent Transonic Regimes

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Going with the Speed of Sound: Pushing Neural
Surrogates into Highly-turbulent Transonic Regimes
Fabian Paischer∗1,2, Leo Cotteleer∗1, Yann Dreze∗1, Richard Kurle∗1, Dylan Rubini 1,
Maurits Bleeker 1, Tobias Kronlachner 1, Johannes Brandstetter 1,2
1 Emmi AI GmbH, Linz
2 ELLIS Unit, Institute for Machine Learning, JKU Linz
Abstract
The widespread use of neural surrogates in automotive aerodynamics, enabled
by datasets such as DrivAerML and DrivAerNet++, has primarily focused on
bluff-body flows with large wakes. Extending these methods to aerospace, par
ticularly in the transonic regime, remains challenging due to the high level of
non-linearity of compressible flows and 3D effects such as wingtip vortices. Ex
isting aerospace datasets predominantly focus on 2D airfoils, neglecting these
critical 3D phenomena. To address this gap, we present a new dataset of CFD
simulations for 3D wings in the transonic regime. The dataset comprises volu
metric and surface-level fields for around 30, 000 samples with unique geometry
and inflow conditions. This allows computation of lift and drag coefficients, pro
viding a foundation for data-driven aerodynamic optimization of the drag–lift
Pareto front. We evaluate several state-of-the-art neural surrogates on our dataset,
including Transolver and AB-UPT, focusing on their out-of-distribution (OOD)
generalization over geometry and inflow variations. AB-UPT demonstrates strong
performance for transonic flowfields and reproduces physically consistent drag–lift
Pareto fronts even for unseen wing configurations. Our results demonstrate that
AB-UPT can approximate drag–lift Pareto fronts for unseen geometries, high
lighting its potential as an efficient and effective tool for rapid aerodynamic de
sign exploration. To facilitate future research, we open-source our dataset at
https://huggingface.co/datasets/EmmiAI/Emmi-Wing.
1 Introduction
Machine learning–based surrogates have recently emerged as powerful tools for accelerating aero
dynamic design and analysis [1, 2]. In automotive aerodynamics, large-scale datasets such as
DrivAerML [3] and DrivAerNet++ [4, 5] have enabled neural models to predict complex bluff-body
flows with remarkable accuracy, potentially reducing reliance on expensive Computational Fluid
Dynamics (CFD) simulations. In aerospace applications, the design goals and flow physics differ
significantly from the automotive domain. Automobiles are bluff bodies with early flow separation,
leading to high pressure drag [6]. In contrast, aircrafts are streamlined bodies designed to maintain
attached flow and optimize the lift-to-drag ratio [7], which we refer to as drag–lift Pareto front.
While CFD is a fundamental design tool, its high computational cost creates a bottleneck in the
design cycle. This has spurred the development of data-driven surrogate models [8, 1, 9, 10, 11, 12,
13, 14, 15, 16], which learn the complex mapping between geometry and flow fields [17]. However,
extending these approaches to aerospace applications remains challenging. Transonic flight regimes
∗Equal contribution
39th Conference on Neural Information Processing Systems (NeurIPS 2025) Workshop on ML for Physical
Sciences, Track on Datasets and Benchmarks.
arXiv:2511.21474v1 [cs.CE] 26 Nov 2025

involve intricate 3D phenomena, such as shock–boundary layer interactions and wingtip vortices,
that are not captured with existing 2D airfoil datasets [18, 19, 20, 21]. Moreover, the lack of publicly
available 3D flow data limits the development and benchmarking of neural surrogates capable of
generalizing across realistic aircraft geometries and operating conditions, as well as optimizing
lift-to-drag performance.
To address these limitations, we introduce a new dataset of high-fidelity RANS simulations for 3D
wings in the transonic regime. To the best of our knowledge, this is the first publicly available dataset
that comprehensively captures both geometric and inflow variations for realistic 3D configurations.
The dataset comprises approximately 30, 000 simulations with a unique combination of geometry and
inflow parameters, providing volumetric as well as surface-level flow-field data. These data enable
the computation of aerodynamic performance metrics such as lift, drag, and drag–lift polars, thereby
supporting data-driven design-space exploration and optimization.
Using our new dataset, we evaluate several state-of-the-art neural surrogates, including Transolver
[9] and the recently proposed AB-UPT [1], with a focus on out-of-distribution generalization to
unseen geometries and flow conditions. Our results show that AB-UPT accurately predicts transonic
flow fields and can reproduce physically consistent lift–drag trade-offs for unseen configurations,
outperforming all competitors. Overall, our study demonstrates that AB-UPT can approximate
lift–drag Pareto fronts for unseen geometries, highlighting its potential as practical tool for rapid
aerodynamic design exploration.
2 Methodology
Our methodology centers on the generation of a high-fidelity RANS dataset of 3D wings operating in
the transonic regime, followed by the evaluation of state-of-the-art neural surrogate models. Existing
aerospace CFD datasets predominantly focus on subsonic 2D airfoils, as summarized in Table 1, and
therefore neglect critical 3D flow phenomena such as shock–boundary layer interactions and wingtip
vortices. We generate a new dataset comprising around 30, 000 cases with a unique combination of
geometry and inflow parameters. The data generation process is organized into three key components:
(i) the design of experiments for geometry and flow conditions, (ii) the setup and execution of
high-fidelity CFD simulations, and (iii) the dataset split strategy used for training and evaluating
neural surrogates.
Table 1: Comparison of publicly available aerodynamic CFD datasets for machine learning.
Dataset Size Dim. Regime Notes
AirfRANS [18] ∼1 000 2D Subsonic ML benchmark, varied AoA/Re
UniFoil [19] 500 K 2D Sub-/Transonic Very large 2D dataset, wide Re/Mach range
AirFoilCFD [20] ∼18 K 2D Subsonic 9k shapes, 2 AoA, fixed inflow
AirFoilML [21] 2 600 2D Subsonic NACA airfoils, fixed AoA/Re
BlendedNet [22] ∼10 K 3D Subsonic Blended wing-body, 9 flight conds.
Emmi-Wing (Ours) ∼ 30 K 3D Sub-/Transonic 30K unique geometries + inflows, drag/lift polars
Design of experiments. We select a 2D NACA0012 airfoil profile, which is extruded into 3D based
on four geometric parameters: the span (b), the taper ratio (λ), the sweep angle (Λ), and the root
chord (cr). In addition, we vary two inflow parameters, namely velocity (U∞) and angle of attack
(α). To ensure a broad and diverse range of flow conditions, a total of 29, 727 unique simulation
cases were created by randomly sampling each of the six variables from a uniform distribution within
a application-relevant predefined range. The specific ranges for each parameter and their visual
representation are depicted in Figure 1.
CFD setup. We conduct simulations using the open-source CFD solver, OpenFOAM-v2506 [23].
The steady-state, compressible flow rhoSimpleFoam solver [24] is used for all cases using the perfect
gas assumption. For turbulence modeling, we selected the Spalart-Allmaras model which offers
good computational efficiency and robust convergence for transonic wing flows with predominantly
attached boundary layers, despite the presence of weak-to-moderate shocks [25]. Spatial discretization
utilized second-order schemes including a van Leer limiter for momentum and a bounded upwind
scheme for energy/pressure terms, with first-order upwind differencing applied to turbulence quantities
2

cr
ct
Λ
b
U∞
α
λ = ct
cr
5512 tphaerasmpaente(rbs,),vtehleoctiatpye(rUra→ti)o a(nωd),atnhgeleswofeeapttaacnkgl(eε()!, )w, earnedatlhsoe rvoaoritecdh.oArdv(icsru)a.l Irnepardedsietnitoant,iotnwoofinthfleoswe
53 parameters is available in Figure 1. To ensure a broad and diverse range of flow conditions, a total of
555456 3uTa0n,ibfl0oe0r10m.udniisqtruiebustiimonulwatiitohinncaaspersedweefirneecdreraatnegde.byTrhaensdpoecmilfiycsraamngpleisnfgoreaecahchofptahreamsiextevraariraebdleetsafirleodmina
cr
ct
Λ
b
U∞
α
λ = ct
cr
Figure 1: A visual representation of the parameterized 3D
wing geometry alongside the four key geometric parameters:
span (b), taper ratio (ω), sweep angle (!), chord root (cr)
and the two inflow condition parameters: inflow velocity
(U→) and angle of attack (ε).
Parameter Range cr [0.7, 1.2] m b [1.0, 1.5] m ω [0.4, 0.7] → ! [0.0, 40.0] deg U→ [150, 300] m/s ε [-10, 10] deg
Table 1: The parameters and their re
spective sampling ranges used for the
design of experiments (DoE) in our
dataset generation.
57
55668901 eeSOqimpumepaulntiloFaoytnOieodARnfAsMo-NrwvSea2rll5em0cop6ade.sreeflsoTs.ruhimeTteaorbdhlmeuosofSiodinremglaptetlhrueeorFbdoouypalneemannm-cssieooc,luavrwpecerpe,liuCacsaoestditmoetpanhusdetyian-ktsivtoo→anltvaeθil,nFcgcllouowimsadulplrr-Deebysomnsuiaobnmdldeeielcd,flsflo(woCwhwiFcssD.ohl)iAvtseonrao,ol-tbswwloiaoxps-,
66662345 cbouoountnudeidnrsidttbiauoorrynubencwddoaansflrdioaietpswipoolfnfiaerrtdahftetrhoocetromhtmehtphaweunitnabwtgyiionsanuglt.raeflraIidcnmoegspm,toahfirietxnaiwnnwtiglenyrtg,eh’tseshegfleteuaoiwndimtgvehlteerflryooecfietitssatyetrtltefa.oackmzercwooanrsedilitamitiopvnoesstetoodtraheseprawensaleilnn. tflTtohhwee
6667 tTohceremaeteshainstgrupcrtoucreesdsbwacaskgcroonudnudctmeedsuhsianngd sOnpaepnpFyOHeAxMM’sesbhufilotr-irnefiutnielitmieesn,t.coThmisbitnwinog-stbelpocpkroMceesshs
667777890123 lifsceanouanyrdfsatiefibaecrcllcsailecteatdeutondertaradrebtheseyimsogreolRheslv-AsuheqitiitNdunohuagSenl,ailstsflosiynfomdatwmrpuholepenapsietnbhpiaigootrnuhtntghansh.tetdeoaaTmrwcahyectaeslulllhrase.aiyattTomseethrltu,ey1hlsae0cpmt↑ioeweo5ncisnifnhffisogorcqrwsamualueasllrrllyfitetaoqaycructeuahh,wnineaaetusnivwtndiiait,nesinslsgcgera’oasusfsccleigiooandenwltolvevyrmeyi,ear+easgtgtdre.vrdydia.idlns-uTgopehla,puerrtwaiipsohmrimnoectcahewteirsiacsssstbieroonseucsealenncundshdtuaeierra-
ddeyl,
2
Figure 1: A visual representation of the parameterized 3D wing geometry alongside the four key
geometric design parameters and the two inflow condition parameters with their respective sampling
ranges used for the design of experiments. The geometry parameters include the span (b), taper ratio
(λ), sweep angle (Λ), and chord root (cr); inflow parameters are the inflow velocity (U∞) and angle
of attack (α).
0.00 0.05 0.10 CD
−0.50
−0.25
0.00
0.25
0.50
Cl
−10 0 10 α
0.00
0.02
0.04
0.06
0.08
0.10
CD
−10 0 10 α
−0.50
−0.25
0.00
0.25
0.50
Cl
Figure 2: Left: Pareto frontier of drag CD versus lift Cl coefficients for all cases in the dataset.
Middle: CD as a function of angles of attack present in the dataset. Right: Cl as a function of the
angles of attack present in the dataset.
for enhanced stability. The wing surfaces are set with a no-slip condition, and freestream conditions
are applied at the far-field boundaries. The angle of attack is imposed via the inflow boundary
condition rather than by altering the wing geometry. The meshing process relies on OpenFOAM’s
built-in snappyHexMesh to generate a high-quality, body-fitted mesh. Prismatic boundary layer
meshing is used to achieve low y+ values in the range [50 − 200] in all cases.
The resulting dataset comprises 29, 727 cases, including both surface and volumetric data. The
surface data consists of pressure ps and wall shear-stress τ on the wing. The volumetric data contains
the full 3D flow field, including pressure pv, the velocity vector u = [ux, uy, uz], its magnitude ||u||,
and the vorticity vector ω = [ωx, ωy, ωz] and its magnitude ||ω|| at each point of the CFD mesh. We
provide visualizations of the lift-to-drag Pareto front as well as drag/lift coefficients over varying
angles of attack for all cases in Figure 2. In addition we visualize a set of 3D wing geometries for the
minimum and maximum of each parameter in Figure 15 in the Appendix. Finally, Figure 3 shows a
representative sample for a transonic sample of our dataset exhibiting flow detachment at high angles
of attack and the formation of turbulent structures at the wingtip.
Dataset split. We partition the dataset into a training, a validation, and three test sets, including
two in-distribution (ID) sets and one out-of-distribution (OOD) set. The two ID sets are designed as
(i) random selection: a random selection of 1, 000 cases within the convex hull of the training set,
and (ii) interpolation: a parameter region within the convex hull of the parameter space that spans
1, 000 unseen cases. The former evaluates in-distribution performance, while the latter specifically
targets the ability of the surrogate to interpolate between cases in an unseen ID parameter region.
The 1, 000 OOD cases are selected as the outermost points of the convex hull of the parameter space.
To create the OOD set and the ID interpolation set, where we used an iterative convex hull peeling
method and isolate the 1, 000 outermost data points and the 1, 000 innermost points, respectively.
The remaining 25, 727 cases are used for training.
Additional parameter scans. Practitioners are usually concerned with the optimization of the
drag–lift Pareto front. To this end, lift and drag coefficients are usually investigated on parameter scans
3

Figure 3: 3D effects on wing.
of various angles of attack α and varying wing geometries to obtain the wing geometry resulting in
the highest lift and lowest drag forces. To asser the ability of neural surrogate models to capture these
coefficients for different parameter scans we run additional cases with a unique geometry (cr = 0.806,
b = 1.1963, λ = 0.562) that does not occur in the 29, 727 cases. We run two parameter sweeps for
this geometry, namely (i) α ∈ {−30, −28, . . . , 28, 30}, and (ii) Λ ∈ {0, 10, 20, 30, 40, 50, 60, 70},
to evaluate in-distribution and OOD generalization. The latter sweep concerns a geometry parameter
(sweep angle) as it is the geometry parameter apart from AoA with the most impact on lift/drag. This
results in another 248 cases solely used for evaluation.
3 Experiments
We conduct a series of experiments to evaluate the generalization capabilities of state-of-the-art neural
surrogate models trained on our 3D transonic wing dataset. Our analysis focuses on two main aspects:
(i) the in-distribution performance of different architectures on flowfield and aerodynamic coefficient
prediction, and (ii) their out-of-distribution generalization to unseen geometries and inflow conditions.
Neural surrogates. We benchmark four neural surrogate models on our dataset: PointNet [26],
Transolver [9], AB-UPT [1], and a Vision Transformer [27]. To incorporate inflow conditions
and geometry design parameters, we add their embeddings to the input for PointNet, and for the
transformer-based models we use a conditioning as in Diffusion Transformers [28]. All models are
trained with a Mean Squared Error (MSE) loss applied to all fields.
Evaluation. We evaluate the predictive performance using the pointwise relative L2 error, which is
normalized by the L2 norm of the ground truth. In addition, we report the coefficient of determination
(R2) between drag/lift coefficients obtained from the best surrogate model with the ground truth
coefficients. Finally, we provide drag-lift Pareto fronts for parameter scans of the best performing
surrogate model compared to ground truth to stress-test their generalization ability.
Results. We report results for volume and surface-level quantities in Table 2 for the different
methods. As expected we observe a consistent increase of error the more the model is pushed towards
an OOD evaluation regime. Furthermore, our results show that except for PointNet, all surrogate
approaches perform similarly on surface-level quantities. However, on volume-level quantities that
exhibit high variance, like vorticity, AB-UPT shows a significant improvement over competitors.
Therefore, we consider AB-UPT the strongest neural surrogate approach and evaluate it on the
different parameter scans.
We provide a qualitative analysis of the AB-UPT model on the OOD test set. Figure 9 in the Appendix
shows pressure and friction profiles of a randomly sampled test case of the OOD set at a normalized
span location y/b = 0.75. The corresponding 3D visualizations of the true surface fields, the predicted
fields, and the prediction errors are shown in Figure 4. Remarkably, both pressure coefficient (Cp)
and friction coefficient (Cf ) match the ground truth closely. Another interesting observation is that
4

Table 2: Relative L2 errors for surface fields (ps, τ ) and volume fields (pv, u, ω) of different neural
surrogates. Bold indicates best performance.
Test Set Model ps τ pv u ω
Interpol
PointNet 0.052 0.225 0.050 0.150 0.351
Transformer 0.002 0.023 0.002 0.013 0.106
Transolver 0.002 0.021 0.001 0.011 0.098
AB-UPT 0.002 0.021 0.001 0.010 0.071
ID
PointNet 0.101 0.442 0.096 0.300 0.454
Transformer 0.006 0.044 0.006 0.038 0.142
Transolver 0.005 0.041 0.005 0.034 0.129
AB-UPT 0.005 0.041 0.005 0.033 0.102
OOD
PointNet 0.120 0.586 0.115 0.402 0.543
Transformer 0.009 0.060 0.008 0.056 0.182
Transolver 0.008 0.055 0.007 0.050 0.156
AB-UPT 0.008 0.055 0.007 0.049 0.126
surface friction (Cf ) exhibits non-physical streaks on the wing surface. Upon further investigation,
we find that these artifacts are of numerical nature and non-physical. Even though such artifacts
may be present in the dataset, AB-UPT seems not to be affected by them and still predicts a smooth
surface friction field and the prediction error clearly shows that these artifacts are not captured. We
attribute this to the inherent bias of neural networks towards low-frequency components [29] since
the numerical artifacts mainly consist of high-frequency components. Ultimately, this resembles
another instance in which a neural surrogate potentially surpasses a numerical simulation due to
inductive biases, first observed in [30]. In addition, it highlights the potential of AB-UPT acting as
anomaly detector for data curation and removal of high-frequency numerical artifacts.
In Figure 5 we report correlation of drag CD and lift Cl coefficients with the ground truth for all
cases in the OOD test set. The predictions of AB-UPT align closely with the ground-truth coefficients
(R2 = 1.0 for Cl and R2 = 0.998 for CD). Furthermore we report the error distribution across cases
in the OOD test set for different combinations of drag and lift in Figure 12. Intriguingly, we find that
AB-UPT is most error-prone in high CD regimes, which are dominated by errors in τ and rather far
from the tangent on the lift-drag Pareto front. This highlights that AB-UPT is a promising contender
for wing design optimization.
Parameter scans. We evaluate AB-UPT on the parameter scans that comprise 248 simulations with
sweeps over Λ and α with the remaining parameters fixed. We report correlation of the predicted
values for Cl and CD in Figure 6a and 6b, respectively, with highlighted cases for out-of-range
(OOR) values of α and Λ. Remarkably, AB-UPT maintains high correlation with the ground-truth
(R2 = 0.911 for Cl, R2 = 0.804 for CD) even when observing values that are far beyond the range
of values for α or Λ it has been trained on. We complement this observation with relative errors for
surface quantities ps and τ , as well as an average thereof in Figure 13. Interestingly, AB-UPT seems
to perform better for positive angles of attack than for negative ones, even though the dataset was
sampled uniformly between them.
In addition, we report the predicted drag-lift Pareto fronts for a selected set of sweep angles (Λ ∈
{20, 40, 50, 70}) and compare them to the ground-truth in Figures 7 and 8. Intriguingly, we observe
minor deviations from the ground truth for values up to α ∼ 20, which is far beyond the range the
model has been trained on. Furthermore, the tangent on the drag-lift Pareto front is well captured up
to Λ = 50, which is again out-of-range compared to the training set. For larger Λ > 50 we observe
larger divergence from the ground-truth. Finally, we report pressure coefficient Cp and friction
coefficient Cf at a normalized span length of y/b = 0.5 for a test case with out-of-range α = 20
and sweep angle Λ = 40. We also show Cp and Cf for the full 3D wing in Figures 11a and 11b,
respectively.
5

(a) Pressure coefficient (Cp)
(b) Friction coefficient (Cf )
Figure 4: Comparison between surface field coefficients on the wing’s surface of the CFD (left),
AB-UPT surrogate (center) and the error between them (right). The case presented is from the
the extrapolation test set with geometry and inflow conditioning parameters within the training
range. Corresponding surface pressure and friction profile plots at a certain span length are shown in
Figure 9.
−0.50 −0.25 0.00 0.25 0.50 Ground Truth Cl
−0.6
−0.4
−0.2
0.0
0.2
0.4
0.6
Predicted Cl
Cl Correlation
R2 = 1.000
(a) Predicted vs. ground-truth Cl for OOD test set.
0.025 0.050 0.075 0.100 Ground Truth CD
0.02
0.04
0.06
0.08
0.10
Predicted CD
CD Correlation
R2 = 0.998
(b) Predicted vs. ground-truth CD for OOD test set.
Figure 5: Correlation of predicted CD and Cl from AB-UPT to the ground truth for all cases in the
OOD test set. AB-UPT’s predictions closely match the ground truth.
4 Discussion and Limitations
To the best of our knowledge we are the first to introduce a dataset of 3D wing geometries in the
transonic regime and to show that neural surrogates can be used for aerodynamic design optimization.
However, there are some shortcomings to our work, mainly related to the dataset generation process.
6

−0.5 0.0 0.5 Ground Truth Cl
−0.75
−0.50
−0.25
0.00
0.25
0.50
0.75
Predicted Cl
Cl Correlation
R2 = 0.911 IR OOR α OOR Λ
(a) Cl correlation to ground-truth.
0.1 0.2 0.3 0.4 Ground Truth CD
0.1
0.2
0.3
0.4
Predicted CD
CD Correlation
R2 = 0.804 IR OOR α OOR Λ
(b) CD correlation to ground-truth.
Figure 6: Visualization of a 3D wing at α = 6.21 and U∞ = 296.53. The field lines detach at certain
span lengths after the shock and vortices form at the wingtip (3). Correlation of predicted Cl (6a) and
CD (6b) for parameter scans on values that are in-range (IR) and out-of-range (OOR) for α and Λ
values during training. AB-UPT maintains high correlation to ground-truth, even for OOR values.
Λ = 20 Λ = 40 GT Pred
0.0 0.1 0.2 0.3 0.4 0.5 CD
−0.5
0.0
0.5
Cl
Cl vs CD for Λ ∈ {20, 40}
−30 −20 −10 0 10 20 30 α
−0.5
0.0
0.5
Cl
Cl vs α for Λ ∈ {20, 40}
−30 −20 −10 0 10 20 30 α
0.0
0.1
0.2
0.3
0.4
0.5
CD
CD vs α for Λ ∈ {20, 40}
Figure 7: Ground-truth vs predicted Cl and CD for parameter scans over α and Λ ∈ {20, 40}.
AB-UPT reproduces the drag-lift Pareto front well (left), but introduces error in high regimes of
α > 20 for both Cl (middle) and CD (right).
Λ = 50 Λ = 70 GT Pred
0.0 0.1 0.2 0.3 0.4 0.5 CD
−0.5
0.0
0.5
Cl
Cl vs CD for Λ ∈ {50, 70}
−30 −20 −10 0 10 20 30 α
−0.5
0.0
0.5
Cl
Cl vs α for Λ ∈ {50, 70}
−30 −20 −10 0 10 20 30 α
0.0
0.1
0.2
0.3
0.4
0.5
CD
CD vs α for Λ ∈ {50, 70}
Figure 8: Ground-truth vs predicted Cl and CD for parameter scans over α and Λ ∈ {50, 70}.
AB-UPT reproduces the drag-lift Pareto front for the most part (left), but error accumulates especially
for higher values of α and Λ = 70 for both Cl (middle) and CD (right).
Generally, we emphasize that there are many knobs to turn with respect to data generation that can
lead to uncertainty in the resulting simulations, including mesh quality, turbulence-model assumptions,
7

convergence criteria, and, importantly, solver fidelity. These effects are exacerbated when moving
from the subsonic to the transonic regime, where severe shockwaves and turbulence occur. In this
work we relied on OpenFOAM, as it is advantageous for accessibility and automation. Furthermore,
our current study relies on relatively simple wing geometries (NACA012-based) and steady-state
RANS simulations to reduce the cost of data generation. As a result, inherent unsteady phenomena
are not captured by the solver. Despite these factors, our results demonstrate that neural surrogates
trained on our dataset retain significant practical value. They enable efficient exploration of drag–lift
Pareto fronts and exhibit potential for anomaly detection.
5 Conclusion
We present a first comprehensive dataset of high-fidelity RANS simulations for 3D wings operating
in the transonic regime. Each simulation case comes with unique geometry and inflow parameters
and provides volume and surface-level flowfields. We evaluate state-of-the-art neural surrogates on
our dataset and find that AB-UPT outperforms other state-of-the-art and provides strong performance
even for unseen cases. Furthermore, we demonstrate that AB-UPT accurately reproduces drag-lift
Pareto fronts even for cases with parameters far beyond its training regime, establishing itself as a
contender for real-time wing geometry optimization.
In the future our aim is to investigate the use of neural surrogates for anomaly detection to provide an
iterative data generation pipeline and ensure data curation. Furthermore, we plan to explore other
numerical solvers and compare to empirical data if available. Finally, we aim to push the boundary of
efficiency such that our surrogates can be used as practical tool to explore the aerodynamic design
space and optimize the lift-to-drag performance of unseen geometries in real time.
References
[1] Benedikt Alkin, Maurits Bleeker, Richard Kurle, Tobias Kronlachner, Reinhard Sonnleit
ner, Matthias Dorfer, and Johannes Brandstetter. Ab-upt: Scaling neural cfd surrogates for
high-fidelity automotive aerodynamics simulations via anchored-branched universal physics
transformers, 2025.
[2] Benedikt Alkin, Richard Kurle, Louis Serrano, Dennis Just, and Johannes Brandstetter. Ab-upt
for automotive and aerospace applications. arXiv preprint arXiv:2510.15808, 2025.
[3] Neil Ashton, Charles Mockett, Marian Fuchs, Louis Fliessbach, Hendrik Hetmann, Thilo
Knacke, Norbert Schonwald, Vangelis Skaperdas, Grigoris Fotiadis, Astrid Walle, Burkhard
Hupertz, and Danielle Maddix. Drivaerml: High-fidelity computational fluid dynamics dataset
for road-car external aerodynamics, 2025.
[4] Mohamed Elrefaie, Angela Dai, and Faez Ahmed. Drivaernet: A parametric car dataset for data
driven aerodynamic design and graph-based drag prediction. volume Volume 3A: 50th Design
Automation Conference (DAC) of International Design Engineering Technical Conferences
and Computers and Information in Engineering Conference, page V03AT03A019. Curran
Associates, Inc., 08 2024.
[5] Mohamed Elrefaie, Florin Morar, Angela Dai, and Faez Ahmed. Drivaernet++: A large
scale multimodal car dataset with computational fluid dynamics simulations and deep learning
benchmarks. In A. Globerson, L. Mackey, D. Belgrave, A. Fan, U. Paquet, J. Tomczak, and
C. Zhang, editors, Advances in Neural Information Processing Systems, volume 37, pages
499–536. Curran Associates, Inc., 2024.
[6] Pijush K. Kundu and Ira M. Cohen. Fluid mechanics / Pijush K. Kundu, Ira M. Cohen ; with
contributions by P.S. Ayyaswamy and H.H. Hu. Academic Press, Amsterdam ;, 4th ed. edition,
2008.
[7] John D. Jr. Anderson. Fundamentals of Aerodynamics. McGraw-Hill Education, New York, 6th
edition, 2017.
[8] Benedikt Alkin, Andreas Fürst, Simon Schmid, Lukas Gruber, Markus Holzleitner, and Johannes
Brandstetter. Universal physics transformers: A framework for efficiently scaling neural
operators. Advances in Neural Information Processing Systems, 37:25152–25194, 2024.
8

[9] Haixu Wu, Huakun Luo, Haowen Wang, Jianmin Wang, and Mingsheng Long. Transolver: A
fast transformer solver for pdes on general geometries. In International Conference on Machine
Learning, 2024.
[10] Huakun Luo, Haixu Wu, Hang Zhou, Lanxiang Xing, Yichen Di, Jianmin Wang, and Mingsheng
Long. Transolver++: An accurate neural solver for pdes on million-scale geometries, 2025.
[11] Zongyi Li, Nikola B. Kovachki, Kamyar Azizzadenesheli, Burigede Liu, Kaushik Bhattacharya,
Andrew M. Stuart, and Anima Anandkumar. Fourier neural operator for parametric partial
differential equations. CoRR, abs/2010.08895, 2020.
[12] Lu Lu, Pengzhan Jin, Guofei Pang, Zhongqiang Zhang, and George Em Karniadakis. Learning
nonlinear operators via deeponet based on the universal approximation theorem of operators.
Nature Machine Intelligence, 3(3):218–229, March 2021.
[13] Zongyi Li, Nikola Borislavov Kovachki, Chris Choy, Boyi Li, Jean Kossaifi, Shourya Prakash
Otta, Mohammad Amin Nabian, Maximilian Stadler, Christian Hundt, Kamyar Azizzadenesheli,
and Anima Anandkumar. Geometry-informed neural operator for large-scale 3d pdes, 2023.
[14] Zijie Li, Kazem Meidani, and Amir Barati Farimani. Transformer for partial differential
equations’ operator learning. Transactions on Machine Learning Research, 2023.
[15] Tobias Pfaff, Meire Fortunato, Alvaro Sanchez-Gonzalez, and Peter Battaglia. Learning mesh
based simulation with graph networks. In International Conference on Learning Representations,
2021.
[16] Zongyi Li, Nikola Kovachki, Kamyar Azizzadenesheli, Burigede Liu, Kaushik Bhattacharya,
Andrew Stuart, and Anima Anandkumar. Neural operator: Graph kernel network for partial
differential equations. arXiv preprint arXiv:2003.03485, 2020.
[17] Steven L. Brunton, Bernd R. Noack, and Petros Koumoutsakos. Machine learning for fluid
mechanics. Annual Review of Fluid Mechanics, 52(Volume 52, 2020):477–508, 2020.
[18] Florent Bonnet, Ahmed Jocelyn Mazari, Paola Cinnella, and Patrick Gallinari. Airfrans: High
fidelity computational fluid dynamics dataset for approximating reynolds-averaged navier-stokes
solutions, 2023.
[19] Rohit Sunil Kanchi, Benjamin Melanson, Nithin Somasekharan, Shaowu Pan, and Sicheng He.
Unifoil: A universal dataset of airfoils in transitional and turbulent regimes for subsonic and
transonic flows, 2025.
[20] Dakota Ramos, Andrew Glaws, Ryan King, Bumseok Lee, Olga Doronina, James Baeder,
Ganesh Vijayakumar, and Zachary Grey. Airfoil computational fluid dynamics - 9k shapes, 2
aoa’s. Open Energy Data Initiative (OEDI), National Renewable Energy Laboratory (NREL),
https://doi.org/10.25984/2222587, 2023. Accessed: 2025-10-30.
[21] Alessandro Schillaci, Maurizio Quadrio, and Giacomo Boracchi. A database of cfd-computed
flow fields around airfoils for machine-learning applications, 2021. Version 1.0.
[22] Nicholas Sung, Steven Spreizer, Mohamed Elrefaie, Kaira M. Samuel, Matthew C. Jones, and
Faez Ahmed. Blendednet: A blended wing body aircraft dataset and surrogate model for
aerodynamic predictions. CoRR, abs/2509.07209, 2025.
[23] H. G. Weller, G. Tabor, H. Jasak, and C. Fureby. A tensorial approach to computational
continuum mechanics using object-oriented techniques. Computer in Physics, 12(6):620–631,
11 1998.
[24] L. S. Caretto, A. D. Gosman, S. V. Patankar, and D. B. Spalding. Two calculation procedures
for steady, three-dimensional flows with recirculation. In Henri Cabannes and Roger Temam,
editors, Proceedings of the Third International Conference on Numerical Methods in Fluid
Mechanics, pages 60–68, Berlin, Heidelberg, 1973. Springer Berlin Heidelberg.
[25] OpenFOAM Wiki. Oneram6 by michael alletto — openfoam wiki,, 2024. [Online; accessed
12-November-2025].
9

[26] Charles Ruizhongtai Qi, Hao Su, Kaichun Mo, and Leonidas J. Guibas. Pointnet: Deep learning
on point sets for 3d classification and segmentation. In 2017 IEEE Conference on Computer
Vision and Pattern Recognition, CVPR 2017, Honolulu, HI, USA, July 21-26, 2017, pages 77–85.
IEEE Computer Society, 2017.
[27] Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai,
Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly,
Jakob Uszkoreit, and Neil Houlsby. An image is worth 16x16 words: Transformers for image
recognition at scale. In ICLR, 2021.
[28] William S. Peebles and Saining Xie. Scalable diffusion models with transformers. 2023
IEEE/CVF International Conference on Computer Vision (ICCV), pages 4172–4182, 2022.
[29] Damien Teney, Armand Mihai Nicolicioiu, Valentin Hartmann, and Ehsan Abbasnejad. Neural
redshift: Random networks are not random functions. In Proceedings of the IEEE/CVF
Conference on Computer Vision and Pattern Recognition, pages 4786–4796, 2024.
[30] Felix Koehler and Nils Thuerey. Neural emulator superiority: When machine learning for pdes
surpasses its training data. arXiv preprint arXiv:2510.23111, 2025.
[31] Xiangning Chen, Chen Liang, Da Huang, Esteban Real, Kaiyuan Wang, Hieu Pham, Xuanyi
Dong, Thang Luong, Cho-Jui Hsieh, Yifeng Lu, and Quoc V. Le. Symbolic discovery of
optimization algorithms. In Alice Oh, Tristan Naumann, Amir Globerson, Kate Saenko, Moritz
Hardt, and Sergey Levine, editors, Advances in Neural Information Processing Systems 36: Annual Conference on Neural Information Processing Systems 2023, NeurIPS 2023, New
Orleans, LA, USA, December 10 - 16, 2023, 2023.
[32] Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. BERT: pre-training of
deep bidirectional transformers for language understanding. In Jill Burstein, Christy Doran, and
Thamar Solorio, editors, Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, NAACL-HLT
2019, Minneapolis, MN, USA, June 2-7, 2019, Volume 1 (Long and Short Papers), pages
4171–4186. Association for Computational Linguistics, 2019.
10

A Drag/Lift coefficients
In this section we provide a definition of the drag and lift coefficients, commonly used in aerospace
engineering. Aerodynamic forces quantify interesting properties of a wing such as drag and lift,
which are the result of an integration of the surface pressure ps and friction τ , i.e., force per unit
area exerted by the fluid on the surface, acting tangential (parallel) to the surface. These forces are
obtained from the total force acting on an object in an airflow, which is given by
F=
I
S
− (ps − p∞)n + τ dS , (1)
where ps is the surface pressure, p∞ the free stream pressure, n the surface normal vector, and τ the
contribution of friction. Drag and lift coefficients are defined as dimensionless numbers
CD = 2 F · edrag
ρ v2Aref , Cl = 2 F · elift
ρ v2Aref , (2)
and often used in engineering [3], where edrag is a unit vector into the free stream direction, elift a unit
vector into the lift direction perpendicular to the free stream direction, ρ the density, v the magnitude
of the free stream velocity, and Aref a characteristic reference area for a certain geometry. Further, the
acting force F can be converted into dimensionless numbers as drag and lift forces
Fdrag = F · edrag, Flift = F · elift . (3)
When simulating an airplane in flight, the angle of attack α is a common boundary condition which
changes free stream edrag and lift direction elift as given by the unit velocity vector u∞ as
u∞ =
"cos(α) 0
sin(α)
#
, edrag = u∞
∥u∞∥2
, elift = edrag ×
"0
1 0
#
, (4)
where ∥.∥2 is the Euclidian norm. For α = 0 these reduce to edrag = (1, 0, 0) and elift = (0, 0, 1).
B Implementation Details
We perform a hyperparameter search over learning rate lr ∈ {1e − 5, 3e − 5, 5e − 5, 1e − 4} for all
methods and select the best performing one. We train for 10 epochs with a learning rate of 1e − 5
with linear warmup for the first 5% of training and a cosine decay thereafter. We train in float16
precision using the Lion optimizer [31] with a weight decay of λ = 0.05 and gradient clipping of
0.25. We preprocess the different fields using z-score normalization except for vorticity where we
apply normalization by the average magnitude. We elaborate on the method-specific details for the
different methods as follows.
AB-UPT. For AB-UPT we use a hidden dimension of 192 and and set the number of anchor points
for both volume and surface branches to 16, 384. Before processing the geometry we subsample it to
65, 536 points and perform supernode pooling to 16, 384 points. The hidden dimensionality is set to
192 and the total number of parameters for this model amounts to 7.1 million.
Transformer. We use a Transformer architecture based on coordinates encoded via continuous
sine-cosine positional embeddings [32] and a hidden dimension of 192. We employ 16 Transformer
blocks with three attention heads, resulting in a parameter count of roughly 7.4M parameters.
Transolver. The Transolver baseline integrates the attention mechanism from [9] into the Transformer
baseline. We use 512 slices for the Transolver attention. The remainder of the architecture is the
same as for the Transformer baseline, resulting in a parameter count of 7.5M parameters.
PointNet. We use a hidden dimension of 192 and an input embedding of 96. We use a global position
embedding of 3072 dimensions, resulting in a model size of roughly 8.3M parameters.
C Ablation studies
Our dataset incorporates variations in geometric design parameters that are observable through the
point cloud and non-observable inflow conditions (e.g., inflow Mach number). We therefore per
formed an ablation study on the best-performing model, AB-UPT, to assess the impact of conditioning
11

Figure 9: Comparison between CFD data (blue) and AB-UPT prediction (dashed yellow) for the
pressure coefficient (Cp) and friction coefficient (Cf ) on the wing surface at a normalized span
location of y/b = 0.5 for a case of the OOD test set. 3D visualizations are shown in Figure 4.
on these parameters (relative L2 error, Table 3). The results demonstrate that the AB-UPT architecture
effectively infers information about the geometry directly from the point cloud, while non-observable
parameters like inflow conditions are required as explicit conditioning inputs.
Table 3: Impact of geometry and inflow conditioning on the AB-UPT surrogate model’s performance,
measured by relative L2 error (%) on the in-distribution test set. All models were trained for 10
epochs.
Conditioning Relative L2 error (%)
Geometry Inflow ps τ pv u ω
✓ ✓ 0.53 4.16 0.49 3.36 10.5
✓ ✗ 0.54 4.16 0.51 3.42 10.6
✗ ✓ 10.8 43.5 9.58 29.5 33.7
✗ ✗ 10.9 43.7 9.59 29.6 34.3
D Additional results
In Figure 9, we show the pressure and friction coefficients predicted by AB-UPT for a normalized
span location of y/b = 0.5 and compare it to the CFD simulation, showing that AB-UPT yields highly
accurate predictions. We provide the same visualization for a different case with an angle-of-attack
that is out of the training range (α = 20) in Figure 10. Finally, we also show the 3D visualization of
the corresponding wing including prediction error of the model in Figure 11.
E Data visualizations
In this section, we visualize several cases obtained by our numerical simulations. An important
aspect when generating a dataset is quality control to ensure that all simulations have converged to
meaningful solutions. Establishing convergence criteria for transonic wing simulations is challenging.
We employed classical metrics including monitoring of residuals and force/moment coefficients on
the wing. However, these indicators may not always distinguish between physically unsteady and/or
discontinuous flows and numerical artifacts.
To supplement these conventional approaches, we employed AB-UPT as an additional quality control
tool. The model’s prediction error served as an indicator of data quality—cases with anomalously
high errors were flagged as potentially unconverged. This approach successfully identified failed
cases where classical convergence monitors had been ambiguous. Manual inspection confirmed these
cases exhibited spurious flow patterns, inadequate boundary layer mesh resolution, or early numerical
12

Figure 10: Comparison between CFD data (blue) and AB-UPT prediction (dashed yellow) for the
pressure coefficient (Cp) and friction coefficient (Cf ) on the wing surface at a normalized span
location of y/b = 0.5 for a case of the parameter scans. 3D visualizations are shown Figure 11.
(a) Pressure coefficient (Cp)
(b) Friction coefficient (Cf )
Figure 11: Comparison between surface field coefficients on the wing’s surface of the CFD (left),
AB-UPT surrogate (center) and the error between them (right). The case presented is from the the
parameter scan with Λ = 40 and α = 20 far outside the training range. Corresponding surface
pressure and friction profile plots are shown in Figure 10.
divergence (Figure 14). Removing these contaminated samples ensured the final dataset comprised
numerically consistent solutions.
In Figure 15, we show the diversity of the dataset by visualizing the wing geometry and the corre
sponding surface pressure and volume velocity streamlines for various geometry parameters and
inflow conditions.
13

0.025 0.050 0.075 0.100 CD
−0.6
−0.4
−0.2
0.0
0.2
0.4
0.6
Cl
Relative L2 error for Cl vs CD
0.02
0.04
0.06
0.08
0.10
0.12
−10 −5 0 5 10 α
−0.6
−0.4
−0.2
0.0
0.2
0.4
0.6
Cl
Relative L2 error for Cl vs α
0.02
0.04
0.06
0.08
0.10
0.12
−10 −5 0 5 10 α
0.02
0.04
0.06
0.08
0.10
CD
Relative L2 error for CD vs α
0.02
0.04
0.06
0.08
0.10
0.12
Figure 12: Distribution of relative L2 error for CD versus Cl (left), CD versus α (middle), and Cl
versus α (right) for the OOD test set. Most error is introduced in high CD regimes, absent from the
Pareto front.
-30
-26
-22
-18
-14
-10
-6
-2
2
6
10
14
18
22
26
30
α
70 60 50 40 30 20 10 0
Λ
Rel. L2 error for ps
0.05
0.10
0.15
0.20
0.25
-30
-26
-22
-18
-14
-10
-6
-2
2
6
10
14
18
22
26
30
α
70 60 50 40 30 20 10 0
Λ
Rel. L2 error for τ
0.25
0.50
0.75
1.00
1.25
1.50
-30
-26
-22
-18
-14
-10
-6
-2
2
6
10
14
18
22
26
30
α
70 60 50 40 30 20 10 0
Λ
Average rel. L2 error
0.1
0.2
0.3
0.4
0.5
0.6
Figure 13: Relative L2 error for ps (left), τ (middle), and averaged over both (right) for parameter
scans over α and Λ. AB-UPT is most error-prone at out-of-range values for Λ ∈ {60, 70} and
α ∈ {−26, −28, −30}. For other out-of-range parameters AB-UPT is surprisingly stable.
Figure 14: Illustration of failed cases caused by spanwise mesh quality variations (left) and numeri
cally diverging case (right).
14

(a) Chord root: 0.7 (b) Chord root: 1.2
(c) Span: 1.0 (d) Span: 1.5
(e) Taper ratio: 0.4 (f) Taper ratio: 0.7
(g) Sweep angle: 0.0 (h) Sweep angle: 40.0
(i) Velocity: 150.0 (j) Velocity: 300.0
(k) Angle of attack: 0.0 (l) Angle of attack: 10.0
Figure 15: Wing geometry with corresponding surface pressure and volume velocity fields for various
geometry design parameters and inflow conditions. In each row, the minimum and maximum values
for each parameter are visualized, while all other parameters are set to their mean value. Except for k
and l, the angle of attack shown is 4 degrees.
15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:36.268Z
- **Text Length:** 42701 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
