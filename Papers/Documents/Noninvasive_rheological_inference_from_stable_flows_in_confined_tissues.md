# PDF Document: Karnat et al. - 2025 - Noninvasive rheological inference from stable flows in confined tissues.pdf

**File Path:** Karnat et al. - 2025 - Noninvasive rheological inference from stable flows in confined tissues.pdf

**Processed Date:** 2026-02-10T18:15:24.207Z

**File Size:** 4878.29 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3662

**Title:** Noninvasive rheological inference from stable flows in confined tissues

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Noninvasive rheological inference from stable flows in confined tissues
Marc Karnat,1 Gautham Hari Narayana,2 Sudheer Kumar Peneti,2 Victoria Guglielmotti,2, 3 Qazi Saaheelur Rahaman,1 Shreyansh Jain,2 Benoıˆt Ladoux,2, 3 Shao-Zhen Lin,4, 5 Sham Tlili,6 Ren ́e-Marc M`ege,2, ∗ and Jean-Fran ̧cois Rupprecht1, 7, †
1Aix Marseille Univ, Universite ́ de Toulon, CNRS, CPT (UMR 7332), Turing Centre for Living Systems, Marseille, France 2Universite ́ Paris Cit ́e, CNRS, Institut Jacques Monod, F-75013 Paris, France. 3Department of Physics, Friedrich-Alexander Universita ̈t Erlangen-Nu ̈rnberg, Erlangen, Germany Max-Planck-Zentrum fu ̈r Physik und Medizin, Erlangen, Germany 4Guangdong Provincial Key Laboratory of Magnetoelectric Physics and Devices, School of Physics, Sun Yat-sen University, Guangzhou, China. 5Cen-
tre for Physical Mechanics and Biophysics, School of Physics, Sun Yat-sen University, Guangzhou, China. 6Aix Marseille Univ, IBDM (UMR 7288), Turing Centre for Living Systems, Marseille, France 7Aix Marseille Univ, Universite ́ de Toulon, CNRS, LAI (UMR 7333), Turing Centre for Living Systems, Marseille, France (Dated: November 26, 2025)
Quantifying the in-plane rheology of epithelial monolayers remains challenging due to the difficulty of imposing controlled shear. We introduce a self-driven, rheometer-like assay in which collective migration generates stationary shear flows, allowing rheological parameters to be inferred directly from image sequences. The assay relies on two sets of ring-shaped fibronectin patches, micropatterned in arrays for high-throughput imaging. Within isolated rings, the epithelial tissue exhibits persist-
ent rotation, from which we infer active migration stresses and substrate friction. Within partially overlapping rings, the tissue exhibits sustained shear, from which we infer the elastic and viscous responses of the cells. The emergence of a Maxwell-like viscoelastic relation –characterized by a linear relationship between mean cell deformation and neighbor-exchange rate– is specifically recapitulated within a wet vertex-model framework, which reproduces experimental measurements only when inter-
cellular viscous dissipation is included alongside substrate friction. We apply our method to discriminate the respective roles of two myosin II isoforms in tissue mechanics. Overall, by harnessing self-generated stresses instead of externally imposed ones, we propose a noninvasive route to rheological inference in migrating epithelial tissues and, more generally, in actively flowing granular materials.
Large-scale tissue deformations during embryonic development and tumor progression arise from the interplay between actively generated cellular stresses and the rheological properties of tissues, with cell–cell rearrangements and divisions relaxing stored deformations [1]. Tissue fluidity is increasingly recognized as being implicated in cancer growth and metastatic dissemination [2], and fluidity measurements in live biopsies are proposed as diagnostic readouts [3].
Current strategies for characterizing tissue rheology often adapt tools from materials science [4, 5] — laser ablation to induce fractures [6, 7], embedded deformable probes [8], or externally imposed stresses [9–12]. However, these approaches are invasive and can be difficult to implement broadly [4, 5]. In contrast, image-based proxies such as the cell-shape index s = P/A1/2—a dimensionless ratio of perimeter to area [13]—are noninvasive. This metric is motivated by results obtained using the ve-
rtex-model framework, predicting that increasing s correlates with higher tissue fluidity, with the tissue shear modulus eventually vanishing under quasi-static shears when s exceeds a critical value s⋆ ≈ 3.8 for isotropic, confluent, 2D simulations [13, 14]. However, taken alone, the cell-shape index s has been shown to be insufficient in
several contexts (e.g. with activity or anisotropic deformations) limiting comparisons between systems [14–17]. An alternative noninvasive method is provided by tissue kinematics, a framework which has the potential to unravel rheological relations – hence metrics of fluidity – from image sequences alone [18–21]. The macroscopic strain-rate is expressed in contributions from cell deformation and cell–cell rearrangements, ε ̇ = ε ̇r + ε ̇cell [18]. In epithelial monolayers, the deviatoric component-
s of the cell deformation and cell–cell rearrangement tensors are related through a linear relation
ε ̇dev
r = εdev
cell
τ , (1)
which defines a characteristic timescale τ [20]. This linearity is consistent with a Maxwell viscoelastic liquid, where τ plays the role of a viscoelastic relaxation time, and quantifies the tissue fluidity – with smaller τ corresponding to a more fluid state [20]. Yet, we lack a fundamental understanding of what sets the viscoelastic time τ , and, more generally, of how kinematic relations such as Eq. (1) emerge from cell-based dynamical models. Here, this connection is established using a vertex-
 model — the same computational framework that originally motivated the definition of the cell
arXiv:2511.20155v1 [cond-mat.soft] 25 Nov 2025

2
shape index s. Furthermore, we compare our results with an experimental system that is designed to measure the kinematics tensor at high throughput. We grew MadinDarby Canine Kidney (MDCK) monolayers on pairs of adjacent fibronectin rings (hereafter referred to as doublerings). At confluency, these exhibited persistent shear (Fig. 1A), with either co- or counter-rotating flows emerging spontaneously, without a preferred chirality in either ring. The resulting cell shape and velocity fields then cl-
osely resembled those observed in a rheometer operating at a fixed strain rate. In addition, our setup provides dozens of micropatterns per experiment, while ensuring a well-controlled steady state; in contrast, the large monolayers with free edges used in Ref. [20] involved a velocity field that depended on the local density. In addition, we employ deep-learning-based segmentation to extract the cell rearrangement tensor directly, and to validate the indirect inference method used in Ref. [20]. W-
e then interpreted the emergence of a tissue kinematics relation Eq. (1) within a dynamical model. We use an active viscous vertex-model framework in which cell motion results from active migration, cell deformability, and dissipation through both cell–cell interfaces and the substrate. Here, we exploit another advantage of the ring geometry setup, which is to enable a two-step calibration of parameters. First, we calibrated the active migration forces and substrate friction using data of migratin-
g tissues on isolated rings. Second, we calibrated the elastic and viscous components associated with cell deformability, using our double-ring setup. We find that a dry, substrate-friction–based model fails to recapitulate the data, whereas a wet model (based on intercellular viscous dissipation) does, identifying junctional viscosity as a necessary dissipation channel. Our model further predicts that the viscoelastic time τ introduced in Eq. (1) decreases with increasing active traction; in agre-
ement, we observe a larger τ when nonmuscle myosin II activity is impaired. Moreover, our analysis suggests distinct roles for myosin isoforms: myosin IIA sets the active traction magnitude, while myosin IIB also enhances the tissue yield stress. In the Perspectives section, we discuss how the image-based kinematics and mechanistic modeling presented here could be more generally applied to flowing, active granular materials.
RESULTS
Experimental observations
Spontaneous shear Fibronectin was first micropatterned into single-ring, as in [22], and then into double-ring geometries. In the double-ring geometry, Fig. 1A-B, the ring edges are separated by a distance of 3μm; each display an external radius of Rout = 100μm and an internal one of Rin = 90μm; thus the distance between the centers
of the rings is D = 203μm.
Typically, at 10h post-plating, a collective rotation emerged within each ring. In most cases, these rotations were sustained, lasting beyond 20h, see Fig. 1C, SI Fig. S1 and Movies 1, 2. Depending on the signs of each rotation, we observed (1) opposite direction of rotations (ODR), Fig. 1A, or (2) same direction of rotations (SDR), Fig. 1B. Among the n = 111 double-rings observed, 47 were ODR, 46 were SDR, and 18 were unstable as they did not reach a stable flow pattern, see Fig. 1D; the fraction-
 of ODR was not significantly different from that in SDR: 50.5±5% against 49.5±5%, respectively (mean ± standard deviation), among stable patterns.
We recorded the time at which stable adhesion between the two rings formed (denoted tc) as well as the time at which both rings were fully covered by cells (denoted tf ). We find that, on average, the contact time was slightly lower than the confluence time (tc − tf < 0) in the SDR case, but slightly higher (tc − tf > 0) in the ODR case; see Fig. 1E (p < 0.1; nexp = 23).
We then reported the average rotation velocity at steady state, see Fig. 1F and Methods. The velocity was significantly faster in the ODR case (at 21.6±3.2 μm.h−1) than in the SDR (18.7 ± 2.8 μm.h−1); the difference is statistically significant (p = 0.04; nexp = 23).
Emergent Maxwell in experiments We observed extensive cell deformations between the two rings. In the SDR mode, cells are subjected to large simple shear, while in the ODR, cells are subjected to large stretch deformations. Cell division was inhibited using Mitomycin C (see Methods) as in Refs. [20, 22], hence the persistent pattern of cell deformation observed between the two rings arises solely from the competition between cellular deformation (strain) induced by collective flow and relaxation d-
riven by cell rearrangements. Oriented cell rearrangements typically occur in regions with large strain, as discussed in Refs. [18, 20, 23]. To test such correlation in experiments, we estimated the averaged strain field εcell through a custom-made segmentation pipeline, see Fig. 2C-D and Methods. We then estimated the averaged rearrangement rate tensor field ε ̇r using a cell tracking algorithm [24], see Fig. 2E-F and Methods. Following [20], we compared the value of these tensors component by co-
mponent, Fig. 2G. We observed a linear relation between the deviatoric components of these two tensors, corresponding to Eq. (1). We find that the viscoelastic times are not significantly different (p = 0.58) in the ODR and SDR cases, with τ = 98 ± 19 min and 102±17 min (mean±std), respectively, see Fig. 2H. Here, the error magnitude for τ is obtained from the distribution of fitted τ across individual double-rings. We do not take into account errors in a systematic expansion (decomposition) of on-
e tensor into a multiple of the other.

3
0.6
-0.6
0
AB
0 10 20
Angular velocity [rad/h]
Time [h]
Left ring Left ring
Right ring Right ring
ODR SDR
-15 -10 -5 0 5 10 15
Contact time (tc) Confluence time (tf)
0 10 20 30 40 50 60 70 80 90 100
Percentage (%)
Unstable
ODR SDR
(tc-tf)[h]
16 18 20 22 24 26
Final Velocity [μm/h]
C
E
F
D
ODR SDR
Figure 1. Spontaneous shear at double-rings overlap. (A-B) Madin-Darby Canine Kidney (MDCK) cells are deposited on confining fibronectin patterns that are shaped as two rings in close contact. Upon reaching confluency, the directions of rotations (DR) within each ring are either (A) opposite (ODR) or (B) same (SDR) patterns (scale bars: 100 μm. (C) Average angular velocity within each ring in ODR (light green) and SDR (dark green) experiments. We report the timing of the ring-ring contact time (tc-
) and the confluence time (tf ) in the ODR experiment. (D) Observation frequency of the ODR, SDR, and unstable rotation patterns, (E) Difference (tc − tf ) between the ring-ring contact time (tc) and the confluence time (tf ) in the ODR (light green) and SDR (dark green) cases. (F) Mean velocities at steady state in the ODR (light green) and SDR (dark green) cases (averaged over n = 23 rings).
Wet vertex model: emergent Maxwell rheology
Model definition To explore the relationship between the viscoelastic time τ and cellular properties, such as the ability of cells to migrate on the substrate or deform, we turned to a cell-based computational model of epithelial tissues. Specifically, we employed a vertex model that predicts the dynamics of tricellular junctions, modelled as points called vertices, in terms of cellbased forces. The force balance reads: F (dissipation)
i+ F (elastic)
i + F (active)
i = 0, where: (1) F (dissipation)
i is a function of the vertices’ velocities (extensively discussed
in a subsequent paragraph, [25]); (2) F (elastic)
i represents the elastic forces that account for the mechanical regulation of the cell shape [26–30], which are assumed to derive from the mechanical energy: E = P
J
1
2 KA(AJ −
A0)2 + P
J
1
2 KP (PJ − P0)2, with AJ and PJ the area and the perimeter of the J-th cell, respectively, and A0 and P0 are the preferred area and preferred perimeter, respectively; (3) F (active)
i =P
J F (active)
J is the sum of the active force defined within each neighbouring cell J,
C
F
Time averaging
Time averaging
30μm2
5x10-3min-1
CD
EF
A
B
G FH
τ
Rearrangement rate [1/min]
Strain
ODR SDR
τ
t t+1
t t+1
neighbour link
disappearing appearing
Time
Time
cell shape evolution
topological evolution
Figure 2. Cell deformability estimation (A) Cell shape: connectivity graph between cell barycenters; time-averaging defines the local strain tensor εcell, represented as ellipses with axes proportional to eigenvalues (“coffee bean” representation [18]). (B) Topological changes: junction appearance (green) and disappearance (red); time-averaging yields the rearrangement rate tensor ε ̇r, see Eq. (11) . (C–H) Same Direction of Rotation (SDR) experiment. (C) Instantaneous connectivity graph. (D) Elon-
gation axis, εdev
cell : eigenvector orientation and eigenvalue amplitude of the deviatoric tensor, see (A). (E) Instantaneous appearance (green) and disappearance (red) axes. (F) Rearrangement rate tensor, ε ̇dev
r as defined in (B). (G)
Component-to-component plot of εdev
cell vs. ε ̇dev
r , expressed in terms of their diagonal (XX, YY, upward triangles) and offdiagonal (XY, downward) components. The viscoelastic time τ is the slope (dashed regression line). The symbol color codes for the position at which the tensors are sampled within the ring–ring contact region (inset). (H) Distribution of viscoelastic times in ODR (light green) and SDR (dark green) modes (n = 23 rings).
F (active)
J = Fa(cos θJ , sin θJ ), where Fa is a constant traction force magnitude and θJ is the cell polarity orientation. Following Ref. [30], we consider a self-alignment

4
mechanism [31, 32], whereby the cell polarity orientation θJ tends to align with the velocity of the neighbor cells
dθJ
dt = μa
nJ
X
K ∈neighbor
sin[θ(vel)
K − θJ ], (2)
where 1/μa represents the characteristic time of align
ment; θ(vel)
K = arg(vK ) refers to the argument angle of the velocity vK of the neighbouring cell K [30].
Single-ring confinement and calibration of active forces The first step of our method consists in considering isolated rings, which allows us to fit the cell migration parameters to experiments. Confining vertices to a single-ring (see Methods), our simulations display a persistent rotation. As the ring radius is decreased, we observe an increased mismatch between the velocity and polarity directions; see Fig. 3AB. This results in a rotation speed that is an increasing function of the ring radius,-
 as previously observed in experiments on WT MDCK [22], see Fig. 3C. We developed an analytical model for the evolution of the velocity-topolarity mismatch angle (see details in the Supplemental Material [33]). We find that, at steady state, the resulting rotation velocity V1 within a thin radius r reads
V1(r) = va
μar
pμ2ar2 + va2
, (3)
where va = Fa/ξ is the maximum achievable velocity, attained in the large ring size r ≫ rc = va/μa, limit. In contrast, in the small ring size limit r ≪ rc the steadystate velocity scales as ∼ μar, because the velocity direction changes too fast for the polar angle to follow. The velocity in vertex-model simulations match Eq. (3) analytical prediction within 5%, for a large set of va and μa values (see Supplemental Material [33]). Experiments also fit to Eq. (3), with a fit that yields the values:-
 va = 32.9 ± 4.0 μm.h−1, μa = 0.265 ± 0.078 h−1 (nexp = 9) in the WT experiments. We used these values to calibrate our WT case parameter set, see Table S1 (Supplemental Material [33]).
Double-ring confinement and estimation of elastic and viscous forces The second step of our method consists in considering double-rings, which allow us to calibrate the cell deformability forces. We first considered the dry vertex model in which dis
sipation, F (dissipation)
i , is restricted to friction to the sub
strate F (friction)
i = −ξvi. Using the parameters deduced from the single-ring experiment, we find that the ODR and SDR modes of rotation spontaneously emerged, with nearly equal proportions as in experiments. However, within the dry vertex model framework, we were unable to find quantitative agreement with other experimental measures, such as cell elongation, velocity, and viscoelastic time; see Fig. 3H-J.
We reached a quantitative agreement with experiments upon considering a wet vertex model, i.e., that includes viscous dissipation in the form introduced in Ref. [25]:
F (viscous)
i = ηP
j t(i,j) · (vj − vi)t(i,j) where t(i,j) is the unit vector from vertex i to vertex j, indicating the direction between the vertices i and j and η represents the viscous modulus along the cell-cell junction (see Supplemental Material [33]). With our best simulation parameter set, we obtain: (1) almost equilibrated ODR and SDR populations, with 18 ODR against 15 SDR out of 33 simulations, corresponding to fractions at 54.5±8% versus 45.5±8%, respectively (mean±standard deviation), (2) velocity value-
s quantitatively consistent with experiments, with significantly higher values in the ODR (20.9±2.9 μm.h−1) than in the SDR (18.6 ± 2.0 μm.h−1) mode (p = 0.04, nsim = 33), (3) comparable viscoelastic times as in experiments, with τ = 84.1 ± 17.7 min for ODR and τ = 81.6 ± 24.5 min for SDR; as in experiments, these values were not significantly different (p = 0.77, nsim = 33). Representative simulations are presented in Movie 3.
Application to myosin II perturbations We applied our method to MDCK cell experiments in which the activity of non-muscle myosin IIA (NMIIA) and myosin IIB (NMIIB) molecular motors were reduced using shRNA techniques, called ShIIA and ShIIB, respectively [34].
Myosin IIA Within single-rings, NMIIA-silenced cells (ShIIA) migrated persistently, see Movie 4 at a lower velocity than the WT; the velocity plateau is also reached at a lower critical radius, see Fig. 4A. The fit to Eq. (3) yields va = 26.3 ± 2 μm.h−1 and μa = 0.8 ± 0.1 h−1 in ShIIA case (nexp,ShIIA = 3; against va = 39.2 ± 3.0 μm.h−1 and μa = 0.5 ± 0.05 h−1 in the WT case). Within double-rings, ShIIA cells displayed both the SDR and ODR migration modes (Movies 5, 6), with 67 SDR, 50 ODR and 2 u-
nstable. The mean velocity, at 17.1 ± 1.2 μm.h−1, was significantly reduced compared to the WT case (p = 6.6 × 10−8, with nexp,ShIIA = 46, nexp,WT = 23, combining data from ODR and SDR sets). The viscoelastic time of ShIIA cells increased to 149 ± 38 min, which is significantly higher than that of WT (p = 1.6 × 10−7). This increase is consistent with simulations whose active traction (va) and alignment time (1/μa) correspond to single-ring fit data, while keeping all other parameters fixed as in t-
he WT simulation set, see Fig. 4 and Movie 7. The velocity of the rings decreased from a value of 19.8 ± 2.8 μm.h−1 to a value of 16.7 ± 2.9 μm.h−1 (combining ODR and SDR, p = 8.1 × 10−3); nsim = 24 simulations for each set of parameters). The viscoelastic time changed from 83 ± 20 min to 135 ± 28 min with lower activity (p = 1.8 × 10−6). Therefore, our model suggests that impaired motility alone, without any significant modulation of cell deformability, is sufficient to explain the difference in -
the

5
G IJ
0.4
0.45
0.5
0.55
0.6
0.65
0.7
12
14
16
18
20
22
24
26
28
H
K
i
j
ηij (b)
ηJ
J
Vertex Cell centre
Cell-cell interface
WT 0 .2 1
12
14
16
18
20
22
24
26
28
Velocity [μm/h]
LM N
WT 0 .2 1
0.4
0.5
0.6
0.7
0.8
Cell elongation
Exp. Sim. Exp. Sim. Exp. Sim.
ηη η
AB
DE
C
F
Single-rings: fit of cell migration parameters
Double-rings: fit of cell deformation parameters
va
V1
θ μa
0 100 200 Radius [μm]
0
10
20
30
40
Velocity [μm/h]
Exp. WT Fit WT Sim. WT
Strain
Rearrangement rate [1/min]
va
μa
Velocity [μm/h]
Exp. Sim. P0
WT -5 0 1 WT -5 0 1 Exp. Sim. P0
WT -5 0 1 Exp. Sim. P0
polarity
speed
i
j
Tij
Tij = Kc (P-P0)
Cell elongation
Dry substrate friction: ξ vi + membrane elasticity:
Wet cell-cell viscosity: η
Figure 3. Cell-based simulations with selfalignment interactions and cell-cell viscosity recapitulate experiments (A-C) single-ring geometry; (A) Sketch of the velocity (red arrow) to polarity (black arrow) coupling (μa) and associated mismatch angle θ. (B) Simulation output: the velocity-polarity mismatch angle θ is larger on the smaller ring, with the 2 non-interacting concentric rings mimicking the highthroughput setup of Ref. [22] (C) Mean velocity as a function of the root mean square of the -
external and internal ring radius, r = p(R2
in + Ro2ut)/2, in experiments (colored symbols), analytical fit to experiment (solid line: best model; shaded areas: best model 80% confidence interval), and simulations of the vertex model (dashed lines) (D-N) double-ring geometry; simulations with (D) same (SDR) and (E) opposite (ODR) direction of rotation patterns. (F) Componentto-component relationship between cell rearrangement and strain deviatoric tensors. Up triangles for the diagonal (XX,YY) components and down triangles for the off-diago-
nal (XY) ones; the filling color corresponds to the location within the ring-ring contact (inset: map of the color to a location within the ring-ring contact region; orientation as in D). The viscoelastic time τ is given by the slope (dashed line). (G) Sketch of elastic forces that resist cell deformation (red arrows); the difference between the perimeter of the cell P and the target perimeter P0 sets the cell level of cell junction tension; (H-J) Simulations with only substrate friction (dry mode-
l): cell elongation (H), velocity (I), and viscoelastic time (J) in experiments (green) and simulations with increasing preferred perimeter P0. (K) Sketch of the cell-cell viscosity η (wet model). (LN) Simulations with varied cell-cell viscosity lead to a quantitative fit of cell elongation (L), velocity (M), and viscoelastic time (N) to experiments (green) and simulations; our best parameter set (see Table S1 [33]) is indicated in yellow; nexp = 23, nsim = 16 for each set.
ShIIA case compared to the WT one.
Myosin IIB Within single-rings, NMIIB-silenced cells (ShIIB) undergo sustained rotations with velocities reduced compared to the WT case, see Fig. 4A. A fit of the velocity-radius relation Eq. (3) yields similar va and μa values as in the ShIIA case, with va = 22.7±2 μm.h−1 and μa = 0.9 ± 0.3 h−1.
However, in double-rings, ShIIB-tissues do not sustain persistent rotations, but rather rapid oscillations, see Fig. 4H-K and Movie 8. Similar oscillations emerge in simulations upon decreasing either the active traction (va), cell deformability (P0) or polarity to align with velocity (1/μa), see Fig. 4M-N and Movie 9. Indeed, the passive response of tissue is that of a yield stress material, with a yield stress σY that decreases linearly with the target
perimeter p0 = P0/√A0, and vanishes at a critical value p0∗ ∼ 4, as previously reported [29]. Since the va and μa seem unchanged as compared to the ShIIA case, the failure to reach a stable shear pattern and the emergence
of oscillations indicate a decrease in cell deformability in the ShIIB case.
DISCUSSION
Discussion: model parameters screening
Viscoelastic time scaling with the cell-cell tension We observe that the viscoelastic time τ decreases (resp. increases) with the target perimeter P0 (resp. junctional tension), see Fig. 3H-I. This is consistent with tension increasing the height of energy barriers to rearrangements [13, 35–37]; yet considering a scaling in the form τ ∝ ηapp/Gapp [38] is not illuminating here, as tension enters in the global viscosity ηapp [35] and elasticity
Gapp ∝ P0⋆ − P0 [13]. The cell shape index s = P/√A is such that lower s (higher tension) corresponds to more solid-like tissues. In this sense, the mirror dependence of 1/τ and s on P0 indicates that 1/τ could be viewed

6
0 20 40 60 80 100
Sim: percentage (%)
Perimeter P0
3
1
-1
Cell elongation
Time [h]
Angular velocity [rad/h]
0 10 20 30 40
Left ring Right ring
WT
ShIIA Sim. WT
ShIIA Sim. WT
ShIIA Sim.
14
16
18
20
22
24
26
Va [μm/h]
42
14
7
ODR ODR SDR
0 20 40 60 80 100
Sim: percentage (%)
Oscillation
ODR ODR SDR
Oscillation
Exp: percentage (%)
0 20 40 60 80 100 Oscillation
AB
0.2
0.3
0.4
0.5
0.6
0.7
Velocity [μm/h]
EF G
HI
MN
0 20 40 60 80 100
Sim: percentage (%)
μa[h-1]
.25
0.05
0.0125
V1
μa
WT
ShIIA ↘V1
↗μa
ShIIA
↘↘va
ODR ODR SDR
SDR
Oscillation
L
Myosin IIB perturbation
Myosin IIA perturbation
CD
K
ODR SDR
Reduced va
0 100 200 Radius [μm]
0
10
20
30
40
Velocity [μm/h]
Enhanced μa
-0.5
0
0.5
WT SHIIA SHIIB
va
Figure 4. Myosin perturbations. (A–G) Myosin-IIA silencing (ShIIA). (A–B) Single-ring. (A) Brightfield image: concentric rings with increasing radii migrate at increasing speeds (scale bar: 50 μm). (B) Left: Angular velocity vs. the rms ring radius r = p(R2
in + Ro2ut)/2 (red, n = 3) fitted with Eq. (3); WT (green). Right: Model sketch with V1 (ring velocity), va (active traction), and 1/μa (active coupling time) reduced in ShIIA and ShIIB (red and blue curves, respectively) as compared to WT (green) (shaded areas: model 80% confidence interval). (C–G) Double-rings. (C–D) Brightfield image of ShIIA-treated tissues displaying (C) stable opposite (ODR) and (D) same (SDR) direction of rotation modes (scale bar: 100 μm). (E–G) Statistics of elongation, v-
elocity, and viscoelastic time: experiments (WT, dark green; ShIIA, dark red) and simulations (light red: best ShIIA fit). Red arrows highlight deviations from WT simulations. (B; H–N) Myosin-IIB silencing (ShIIB). (H) Brightfield image (scale bar: 100 μm). (I) Angular velocity, showing no net sign. (K–M) The oscillation phase dominates in (K) experiments and (L–N) simulations with (L) weaker alignment μa, (M) lower traction va, or (N) smaller preferred perimeter P0 (higher junctional tension) tha-
n in the control simulations (Table S1, [33]).
as an alternative, image-sequence-based proxy of tissue fluidity.
Viscoelastic time scaling with viscosity We find that viscosity has the opposite effect to tension, as the viscoelastic time increases with the cell-cell junction viscosity, see Fig. 5E. In the absence of cell-cell viscosity (η = 0), the velocity (18.5 ± 2.6 μm.h−1) was comparable to the velocity (21.1 ± 2.9μm/h) measured in our best WT parameter set (p = 0.19), while both the cell elongation (at 0.48 ± 0.06) and viscoelastic time (58 ± 13 min) were significantly reduced (p < 0.001). Our interpret-
ation is the following: as viscous dissipation precludes fast junction reorganization, the imposed strain-rate is shared more equally between junctions than in the absence of viscous dissipation. In agreement with this interpretation, we observe that rearrangements are less stereotypic and are more spatially distributed in the absence of viscous dissipation; see Fig. 5A and Movie 10. In addition, we find that the quality (R2) of the linear fit Eq. (1) is an increasing function of the viscosity η, -
see Fig. 5B-C and Fig. S9 [33]. This allows us to reconsider the failure of the dry vertex model at η = 0. Beyond failing to match the exact values of the cell elongation, velocities, and viscoelastic together, the agreement to the linear Maxwell-like relation between cell deformation and rearrangement rate is also much poorer, see the corresponding low R2-values in SM [33]). Such systematic dependence of both the value of the slope and the quality of the linear fit on η is a nontrivial prediction-
 of our wet model.
Viscoelastic time scaling with active traction We then considered a sweep in the active traction parameters (va ∈ [35, 56] μm.h−1 and μa ∈ [0.0625, 0.25] h−1) at a fixed cell-cell junction viscosity η = 0.2 (WT case) and for a set of junction viscosities (η ∈ [0, 1]) at fixed active traction forces (va = 70 μm.h−1 and μa = 0.25 h−1). We observe that the viscoelastic time decreases with velocity toward constant values at high velocities. As expected, the viscoelastic time increases linearly with th-
e interfacial viscosity. Furthermore, increasing the characteristic alignment time 1/μa also leads to an increase in the viscoelastic time. These numerical results indicate that, under the ShIIA condition, the increase in viscoelastic time τ should solely be attributed to the decrease in va, and not to the decrease in 1/μa. Such shear-thinning behavior is consistent with the existence of a yield stress [23, 35, 37, 39]. We also demonstrated such finite yield stress through the existence of a finit-
e active traction needed to generate the double-ring shear (see Myosin IIB paragraph in the Results section). Here, we briefly sketch why a finite yield stress can explain such shear-thinning behavior. The sheared tissue is described as a material of elastic modulus G in parallel with a viscous damper describing local re

7
arrangements. Each T1 event relaxes a finite elastic stress G δεT1 . Viscous dissipation then occurs with a characteristic stress contribution ηγ ̇ /δεT1 , where γ ̇ is the imposed shear rate. This leads to a stress relation σ(γ ̇ ) = G δεT1 + (η/δεT1 ) γ ̇ ; the apparent viscosity, ηapp = σ(γ ̇ )/γ ̇ then reads
ηapp(γ ̇ ) = G δεT1
γ ̇ + η
δεT1
, (4)
which decreases with increasing shear rate γ ̇ . The model therefore predicts an apparent shear-thinning behavior, specifically due to the elastic offset. We then explain the shear-thinning behavior observed on τ combining Eq. (4) and an analytical model that links the emergent shear strain γ ̇ with the active parameters μa and va. Adapting the polar active vertex model which led to Eq. (3) to double-rings, we find that the final rotation velocity in each ring reads
V2 = va
μaBr
pμ2ar2B2 + va2
, (5)
where B ∈ (0, 1) is a geometric constant that depends on the ring overlap thickness l and flow structure (see Supplemental Material [33]); B being larger in the ODR than SDR setup, we predict that flows are faster in the ODR case than in the SDR case, as observed in experiments, see Fig. 1F. The agreement of Eq. (5) with vertex model simulations is quantitative, see SM [33]. In addition, V2 decreases with 1/μa and increases with va; with γ ̇ ∝ V2 and τ ∝ ηapp, as defined in Eq. (4), this explains -
the trend observed of τ increasing with 1/μa and decreasing with va in simulations, Fig. 5D-E.
Discussion: biological implications
WT parameter values Our active polar force model yields an estimate of the alignment strength μa in the WT case that is comparable to the value μa = 0.06 h−1 proposed in Ref. [30] to model WT MDCK.
NMII-deficient cell activity and deformability Our data indicate that depletion of NMIIA or NMIIB reduces migration speed. For NMIIA, this contradicts the trend seen for isolated MDCK cells within unconfined 2D environments [40, 41], but agrees with experiments in 1D channel confinement [40]. The ring geometries used here are indeed close to the 1D channel geometries used in [40]. Upon considering unconfined 2D migration and migrating isolated cells, Ref. [42] reported a marked increase in directi-
onal persistence, which would be consistent with our results, where both NMIIA- and NMIIBdepleted cells tend to exhibit enhanced directionality despite opposite effects on speed. In addition, NMIIB has been shown to be required to maintain a front-back polarity [34, 41]; this is also consistent with our result that the active traction strength va and polarity coupling μa
R2 = 0.58
Strain
Rearrangement rate [1/min]
Rearrangement rate [1/min]
Strain
R2 = 0.38
Time
Rearranging cells
A
Low
High
Velocity
Viscosity
BD
E
C
Low
High
Velocity [μm/h]
70 μm/h
56 μm/h
35 μm/h
v
70 μm/h
35 μm/h
v
va = 35 μm/h
va = 56 μm/h
Figure 5. Emergent Maxwell model interpretation. (A) Time evolution of simulations with a highlight on cells undergoing a rearrangement (colored in blue) in an SDR case with either (top) low cell-cell viscosity or low rotation speed and (bottom) high cell-cell viscosity or high rotation speeds (parameters in Supplemental Material [33]). (B-C) Componentto-component relationship in the deviator of the cell rearrangement rate (ε ̇dev
r ) and strain (εdev
cell ) tensors, in (B) the low and (C) the high-velocity cases. Triangles oriented upward for the diagonal components (XX, YY) and downward for the off-diagonal ones (XY). (D) Viscoelastic times for simulations with increased active traction forces, va; each dot represents the mean over simulations at a fixed polar-velocity coupling 1/μa value. (E) Viscoelastic time as a function of (axis 1, yellow to red lines) the polar-velocity coupling 1/μa, or (axis 2, magenta line) the cell-cell junction vis-
cosity η.
are reduced in ShIIB cells. While in [34], silencing of myosin IIB was shown to weaken cell-cell junctions, our result is consistent with [43], whereby individual cells with blocked myosin IIB have been proposed to be less deformable.

8
PERSPECTIVES
Migrating epithelial monolayers typically exhibit turbulent-like or transient flows, which obscure the relationship between cell deformation and cell rearrangements. Here, we used an experimental setup that constrained the flow to a relatively steady-state regime. The success of the tissue–kinematics framework in our context suggests that it could be extended to study turbulent regimes – by considering a co-moving frame attached to the interface between neighboring vortices. Indeed, such interface-
 displays shear flows and cell-shape patterns closely resembling those in the two-ring overlap region studied here. A more detailed formulation of this co-moving-frame approach will be presented in future work. In this context, our method could be used to infer mechanical parameters from self-organized flows in a wide variety of active tissues and cell assemblies, as large-scale vortices are common both in vitro — e.g. with multiple vortices emerging in MDCK tissues once domains exceed a few hundr-
ed micrometers in diameter [44, 45] — and in vivo, e.g. the Polonaise flows of Drosophila gastrulation [46] and early avian development [47]. In active fluids, interacting vortices have been characterized in confined colloidal rollers [48] and bacterial suspensions [49], revealing a possible switch from positive (e.g. more ODR than SDR) to negative (e.g. more SDR than ODR) correlations between the signs of neighboring vortices. In such systems, a Voronoi tessellation of particle centers defines de-
formable “cells” whose rheology could, in principle, be analyzed using the tissue–kinematics framework introduced here. We plan to develop this analogy in future work.
CONCLUSIONS
Our work introduces the live rheometer setup, a twostep protocol that combines cell migration across two distinct micropatterned geometries, enabling the noninvasive mechanical characterization of epithelial monolayers. By comparing wild-type experiments with dynamical vertex-model simulations, we find that cell–cell viscosity accounts for the onset of an emergent Maxwell-type viscoelastic behavior. We further apply our protocol to show that perturbations of myosin II isoforms NMIIA and NMIIB affe-
ct both the activity and deformability of multicellular assemblies. Finally, we show that migration speed and cell–cell viscosity together determine the tissue viscoelastic relaxation time, i.e., the extent of elastic deformation that cells sustain before undergoing a T1 transition. Such regulation of viscoelasticity could underlie the rheological transition observed during development, from a dynamic, fluid-like state to a more rigid, solid-like architecture [8].
We expect our noninvasive method for inferring tissue rheology to be broadly applicable. First, the two-step protocol we introduce is versatile and can be adapted to investigate other tissues or factors influencing collective cell migration. Second, by leveraging self-generated forces at sheared interfaces—for instance, between vortex domains—this framework lays the groundwork for a noninvasive characterization of fluidity in the broader context of active granular materials.
METHODS
Cell culture and reagents MDCK strain II cells were cultured in DMEM medium plus 10% fetal bovine serum and 1% penicillin–streptomycin at 37 degree celsius with %5 CO2. Cells were subjected to Mitomycin-C to block cell division (treatment for 1h at 10 μg.ml−1 at the beginning of the experiment). MDCK strains silenced for Myosin IIA (ShIIA) and Myosin IIB (ShIIB) have previously been described in Ref. [34].
Micropattern preparation for collective cell migration on line-patterned strips A microcontact printing method on polydimethylsiloxane (PDMS) was used to generate the fibronectin-coated pattern confining cell migration [22, 50, 51].
Imaging: phase contrast Live cell dynamics was observed with phase contrast at 10x and 20x magnification using a Nikon Biostation IMQ microscope. The time-lapse was performed at 37◦ and 5% CO2. The time-lapse was usually done for 10 min intervals and up to 48 − 50 h of acquisition.
Data display and statistics If not stated otherwise, we use the two-tailed unpaired t-test to estimate the P values. Prism (GraphPad Software) and Matlab (Math Works) were used for data analysis and graph plotting. ANOVA test and Student’s t-test paired or unpaired were carried out to analyze the levels of significant differences.
Image analysis For the shear rate estimation, if not stated otherwise, we use the optical flow method previously presented in Ref. [20]. For the cell shape analysis, we used Cellpose TissueNet [52, 53] for the estimation of the cell strain (similar results were obtained with the most recent Cellpose version, [54], which we benchmark against a manually annotated datasets). Details in the Supplemental Material [33].
Simulations implementation We initialize our simulations by placing cell centers along a regular hexagonal pattern along the target (single or double-ring) pattern. Each cell is assigned a target area whose value is set according to a Gaussian noise (with 5% standard deviation), mimicking the observed cell-to-cell variability in cell area observed in experiments. In the double-ring case, to ensure that the tissues from each ring interact, we consider a slight overlap between the rings (see details-
 in the Supplemental Material [33] and SI Table S1 for the default set of the parameters).
Individual cell strain tensor Following [18], the cell strain is

9
defined at the individual cell level as
εJ = 1
2
MJ − M0
M0
, (6)
where MJ is the texture tensor of the J-th cell, defined as
MJ = 1
NJ
X
K
(rK − rJ ) ⊗ (rK − rJ ) , (7)
with the index K spanning over the NJ neighbor cells to the cell J; M0 represents a reference texture tensor [18], which we set to be one of the regular hexagonal cell patterns in a stress-free state. Averaging cell segmentation masks, we set M0 = (32.5μm)2 for all experiments.
Texture field M We define the strain tensor εcell through the following averaging procedure [18]:
εcell (r) = ⟨εJ ⟩ =
P
|r−rJ |<rcut-off
w (r − rJ ) εJ
P
|r−rJ |<rcut-off
w (r − rJ ) , (8)
where εJ is defined in Eq. (6) and w(r − rJ ) is a weight function, defined as a truncated Gaussian function,
w (r − rJ ) = √21πσ exp − 1
2
|r − rJ |2
σ2 . (9)
and rJ = P
j∈cell rj /nJ is the geometric center of the vertices of the cell J. In both experiments and simulations, we set the kernel size at σ = 0.75 and the cut-off length at rcut−off = 3σ = 2.25 in the units of a characteristic cell length [33].
Cell shape analysis The cell elongation metric is based on the cell area tensor. The cell area tensor is based on a linear weight density along the segments of the cell boundaries, i.e., whose first component reads Ixx = RR (x − x ̄)2 dx dy, where (x ̄, y ̄) is the position of the barycenter of the cell, and (x, y) spans over the cell boundaries. Following Eq. (8), we average the tensor I over the kernel w defined in Eq. (9). The quantity called cell elongation is then estimated as
εel = log pλ1/λ2 , (10)
where λ1 (resp. λ2) is the maximum (resp. minimum) eigenvalue of the average tensor I.
Optic flow The single-ring velocities and indirect cell rearrangement rate tensor inference (following [20], see SM [33]) are obtained using the optic flow algorithm with KLT algorithm [20]. We mask irrelevant regions and filter out all the velocities below a threshold.
Cell rearrangement rate tensor We track every segmented cell using the btrack algorithm [24]. We correct those tracking with manual annotation on our Napari pipeline [55]. We compute changes in connectivity among masks to identify instances of cell-cell junction disappearance or appearance. Following Ref. [18], we estimate the cell rearrangement rate tensor at the location r using the expression:
T (r) = NT1
∆tNlink
X
j=1,...,NT1
w(r − rj )(lj
a ⊗ lj
a − lj
d ⊗ lj
d),
(11) where ∆t is the observation duration; la and ld are vectors between cell centers of appearing or disappearing cell–cell edges,
respectively; NT1 is the total number of rearrangements that occurred; Nlink is the number of cell-cell links; both NT1 and Nlink are weighted-average around r, with w the averaging kernel defined in Eq. (9). From the coarse-grained tensors M and T , we quantify the cell rearrangement rate tensor field based on T1 topological transition events as
ε ̇r = − 1
2 M −1 · T sym, (12)
where ()sym is the tensor symmetrization operator [18].
ACKNOWLEDGEMENT
JFR thanks Laura Dalla Pozza for improving the onering analysis. We would like to thank all the members of the ”Cell adhesion and Mechanics” team for helpful discussions, as well as A. Kabla, H. Delanoe-Ayari and F. Graner. This work was supported by the European Research Council (Grant No. Adv-101019835 to BL), LABEX Who Am I? (ANR-11- LABX-0071 to BL and RMM), the Ligue Contre le Cancer (Equipe labellis ́ee 2019 to RMM), the Alexander von Humboldt Foundation (Alexander von Humboldt Professorship-
 to BL), Institut National du Cancer (INCa 18429 to BL and RMM), the Agence Nationale de la Recherche (“STRATEPI” DFG-ANR-22-CE92-0048) to RMM). We acknowledge the ImagoSeine core facility of the IJM, a member of IBiSA and France-BioImaging (ANR-10-INBS-04) infrastructures. The project leading to this publication has received funding from France 2030, the French Government program managed by the French National Research Agency (ANR16-CONV-0001) from Excellence Initiative of Aix-Marseille Universit-
y - A*MIDEX. R-M.M. is also funded by ANR-17CE13-0013 and J.-F. R. by ANR-20-CE30-0023. G.H.N. and S.P. were recipients of the Labex Who Am I?.
∗ rene-marc.mege@ijm.fr † jean-francois.rupprecht@univ-amu.fr [1] P.-F. Lenne and V. Trivedi, Nature Communications 13, 664 (2022). [2] G. Lemahieu, P. Moreno-Layseca, T. Hub, C. Bevilacqua, M. Go ́mez-Gonza ́lez, F. Pennarola, F. Colombo, A. E. Massey, L. Barzaghi, A. Palamidessi, L.-L. Homagk, S. F. H. Barnett, A. X. Cartagena-Rivera, C. SelhuberUnkel, R. Prevedel, X. Trepat, J. P. Spatz, J. Ivaska, G. Scita, and E. A. Cavalcanti-Adam, Advanced Science 12, e03569 (2025). [3] F. Sauer, S. Grosser-
, M. Shahryari, A. Hayn, J. Guo, J. Braun, S. Briest, B. Wolf, B. Aktas, L.-C. Horn, I. Sack, and J. A. K ̈as, Advanced Science 10, 2303523 (2023). [4] N. I. Petridou and C. Heisenberg, The EMBO Journal 38, e102497 (2019). [5] B. Corominas-Murtra and N. I. Petridou, Viscoelastic networks: Forming cells and tissues (2021). [6] M. Rauzi, P.-F. Lenne, and T. Lecuit, Nature 468, 1110 (2010). [7] F. Bosveld, I. Bonnet, B. Guirao, S. Tlili, Z. Wang, A. Petitalot, R. Marchand, P.-L. Bardet, P. Marcq, F. -
Graner, and Y. Bellaı ̈che, Science 336, 724 (2012).

10
[8] A. Mongera, P. Rowghanian, H. J. Gustafson, E. Shelton, D. A. Kealhofer, E. K. Carn, F. Serwane, A. A. Lucio, J. Giammona, and O. Campa`s, Nature 561, 401 (2018). [9] A. R. Harris, L. Peter, J. Bellis, B. Baum, A. J. Kabla, and G. T. Charras, Proceedings of the National Academy of Sciences 109, 16449 (2012). [10] E. Sadeghipour, M. A. Garcia, W. J. Nelson, and B. L. Pruitt, eLife 7, e39640 (2018). [11] N. Khalilgharibi, J. Fouchard, N. Asadipour, R. Barrientos, M. Duda, A. Bonfanti, A. Yonis, -
A. Harris, P. Mosaffa, Y. Fujita, A. Kabla, Y. Mao, B. Baum, J. J. Mun ̃oz, M. Miodownik, and G. Charras, Nature Physics 15, 839 (2019). [12] J. Duque, A. Bonfanti, J. Fouchard, L. Baldauf, S. R. Azenha, E. Ferber, A. Harris, E. H. Barriga, A. J. Kabla, and G. Charras, Nature Materials 23, 1563 (2024). [13] D. Bi, J. H. Lopez, J. M. Schwarz, and M. L. Manning, Nature Physics 11, 1074 (2015). [14] O. K. Damavandi, S. Arzash, E. Lawson-Keister, and M. L. Manning, PRX Life 3, 033001 (2025). [15] L. Y-
an and D. Bi, Physical Review X 9, 011029 (2019). [16] X. Wang, M. Merkel, L. B. Sutter, G. Erdemci-Tandogan, M. L. Manning, and K. E. Kasza, Proceedings of the National Academy of Sciences of the United States of America 117, 13541 (2020). [17] F. Brauns, N. H. Claussen, M. F. Lefebvre, E. F. Wieschaus, and B. I. Shraiman, eLife 13, RP95521 (2024). [18] F. Graner, B. Dollet, C. Raufaste, and P. Marmottant, The European Physical Journal E 25, 349 (2008). [19] G. B. Blanchard, A. J. Kabla, N. L. Sc-
hultz, L. C. Butler, B. Sanson, N. Gorfinkiel, L. Mahadevan, and R. J. Adams, Nature Methods 6, 458 (2009). [20] S. Tlili, M. Durande, C. Gay, B. Ladoux, F. Graner, and H. Delanoe ̈-Ayari, Physical Review Letters 125, 088102 (2020). [21] M. Lardy, S. Tlili, and S. Gsell, Journal of NonNewtonian Fluid Mechanics 346, 105512 (2025). [22] S. Jain, V. M. L. Cachoux, G. H. N. S. Narayana, S. de Beco, J. D’Alessandro, V. Cellerin, T. Chen, M. L. Heuze ́, P. Marcq, R.-M. Me`ge, A. J. Kabla, C. T. Lim, and-
 B. Ladoux, Nature Physics 16, 802 (2020). [23] C. Duclut, J. Paijmans, M. M. Inamdar, C. D. Modes, and F. J ̈ulicher, Cells and Development 168, 203746 (2021). [24] K. Ulicna, G. Vallardi, G. Charras, and A. R. Lowe, Frontiers in Computer Science 3, 734559 (2021). [25] C. Fu, F. Dilasser, S.-Z. Lin, M. Karnat, A. Arora, H. Rajendiran, H. T. Ong, N. M. H. Brenda, S. W. Phow, T. Hirashima, M. Sheetz, J.-F. Rupprecht, S. Tlili, and V. Viasnoff, Proceedings of the National Academy of Sciences 121, e2-
405560121 (2024). [26] H. Honda and G. Eguchi, Journal of Theoretical Biology 84, 575 (1980). [27] A. G. Fletcher, M. Osterfield, R. E. Baker, and S. Y. Shvartsman, Biophysical Journal 106, 2291 (2014). [28] S. Alt, P. Ganguly, and G. Salbreux, Philosophical Transactions of the Royal Society B: Biological Sciences 372, 20150520 (2017). [29] S.-Z. Lin, M. Merkel, and J.-F. Rupprecht, Physical Review Letters 130, 058202 (2023). [30] S.-Z. Lin, S. Ye, G.-K. Xu, B. Li, and X.-Q. Feng, Biophysical Jour-
nal 115, 1826 (2018). [31] E. Vercruysse, D. B. Bru ̈ckner, M. Go ́mez-Gonz ́alez, A. Remson, M. Luciano, Y. Kalukula, L. Rossetti,
X. Trepat, E. Hannezo, and S. Gabriele, Nature Physics 20, 1492 (2024). [32] P. Baconnier, O. Dauchot, V. De ́mery, G. D ̈uring, S. Henkes, C. Huepe, and A. Shee, Rev. Mod. Phys. 97, 015007 (2025). [33] The Supplemental Material at [URL] provides further details on the image analysis, theoretical model, and numerical simulations. [34] M. L. Heuze ́, G. H. N. Sankara Narayana, J. D’Alessandro, V. Cellerin, T. Dang, D. S. Williams, J. C. Van Hest, P. Marcq, R.-M. Me`ge, and B. Ladoux, eLife 8, e4659-
9 (2019). [35] P. Marmottant, A. Mgharbel, J. Ka ̈fer, B. Audren, J. P. Rieu, J. C. Vial, B. V. D. Sanden, A. F. Mar ́ee, F. Graner, and H. Delano ̈e-Ayari, Proceedings of the National Academy of Sciences of the United States of America 106, 17271 (2009). [36] D. Bi, X. Yang, M. C. Marchetti, and M. L. Manning, Physical Review X 6, 021011 (2016). [37] M. J. Hertaeg, S. M. Fielding, and D. Bi, Physical Review X 14, 011027 (2024). [38] A. Bonfanti, J. Fouchard, N. Khalilgharibi, G. Charras, and A. K-
abla, Royal Society Open Science 7, 190920 (2020). [39] S. Ishihara, P. Marcq, and K. Sugimura, Physical Review E 96, 022418 (2017). [40] A. D. Doyle, M. L. Kutys, M. A. Conti, K. Matsumoto, R. S. Adelstein, and K. M. Yamada, Journal of Cell Science 125, 2244 (2012). [41] M. H. Jorrisch, W. Shih, and S. Yamada, Biology Open 2, 368 (2013). [42] D. Halder, S. Saha, R. K. Singh, I. Ghosh, D. Mallick, S. K. Dey, A. Ghosh, B. B. Das, S. Ghosh, and S. S. Jana, Molecular Biology of the Cell 30, 1463 (201-
9). [43] C. J. Chan, A. E. Ekpenyong, S. Golfier, W. Li, K. J. Chalut, O. Otto, J. Elgeti, J. Guck, and F. Lautenschl ̈ager, Biophysical Journal 108, 1856 (2015). [44] B. Ladoux and R.-M. Me`ge, Nature Reviews Molecular Cell Biology 18, 743 (2017). [45] M. A. Heinrich, R. Alert, J. M. LaChance, T. J. Zajdel, A. Koˇsmrlj, and D. J. Cohen, eLife 9, e58945 (2020). [46] S. J. Streichan, M. F. Lefebvre, N. Noll, E. F. Wieschaus, and B. I. Shraiman, eLife 7, e27454 (2018). [47] M. Saadaoui, D. Rocancour-
t, J. Roussel, F. Corson, and J. Gros, Science 367, 453 (2020). [48] C. Jorge, A. Chardac, A. Poncet, and D. Bartolo, Nature Physics 20, 303 (2024). [49] H. Wioland, F. G. Woodhouse, J. Dunkel, and R. E. Goldstein, Nature Physics 12, 341 (2016). [50] M. Piel and M. Th ́ery, eds., Micropatterning in Cell Biology, Part C , Methods in Cell Biology, Vol. 119 (Academic Press / Elsevier, Amsterdam ; Boston, 2014). [51] S. R. K. Vedula, H. Hirata, M. H. Nai, A. Brugu ́es, Y. Toyama, X. Trepat, C. T. Lim,-
 and B. Ladoux, Nature Materials 13, 87 (2014). [52] C. Stringer, T. Wang, M. Michaelos, and M. Pachitariu, Nature Methods 18, 100 (2021). [53] M. Pachitariu and C. Stringer, Nature Methods 19, 1634 (2022). [54] M. Pachitariu, M. Rariden, and C. Stringer, bioRxiv 10.1101/2025.04.28.651001 (2025). [55] N. Sofroniew, T. Lambert, K. Evans, J. Nunez-Iglesias, G. Bokota, M. Bussonnier, G. Pe ̃na-Castellanos, P. Winston, K. Yamauchi, D. D. Pop, Pam, Z. Liu, A. C. So

11
lak, alisterburt, G. Buckley, A. Sweet, L. Gaifas, G. Lee, J. Rodrı ́guez-Guerra, N. Clack, J. Bragantini, L. Migas, V. Hilsenstein, M. W. Mendonc ̧a, R. Haase, Hec
tor, J. Freeman, P. Boone, A. R. Lowe, and C. Gohlke, napari/napari: 0.4.13rc0 (2022).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:24.207Z
- **Text Length:** 50807 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
