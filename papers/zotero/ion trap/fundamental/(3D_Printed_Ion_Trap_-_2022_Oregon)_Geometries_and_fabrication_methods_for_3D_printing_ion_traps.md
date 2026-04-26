# PDF Document: (3D Printed Ion Trap - 2022 Oregon) Geometries and fabrication methods for 3D printing ion traps.pdf

**File Path:** (3D Printed Ion Trap - 2022 Oregon) Geometries and fabrication methods for 3D printing ion traps.pdf

**Processed Date:** 2026-02-10T18:13:57.330Z

**File Size:** 13935.49 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 841

**Title:** (3D Printed Ion Trap - 2022 Oregon) Geometries and fabrication methods for 3D printing ion traps

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

arXiv:2205.15892v1 [quant-ph] 31 May 2022

Geometries and fabrication methods for 3D printing ion traps
A. Quinn1, M. Brown2, T.J. Gardner2, and D.T.C. Allcock1
1Department of Physics, University of Oregon, Eugene, Oregon 97403, USA 2Knight Campus, University of Oregon, Eugene, Oregon 97403, USA
June 1, 2022
Abstract
The majority of microfabricated ion traps in use for quantum information processing are of the 2D ‘surface-electrode’ type or of the 3D ‘wafer’ type. Surface-electrode traps greatly simplify fabrication and hold the promise of allowing trapped-ion quantum computers to scale via standard semiconductor industry fabrication techniques. However, their geometry constrains them to having much lower trapping eﬃciency, depth, and harmonicity compared to 3D geometries. Conversely 3D geometries oﬀer superio-
r trap performance but fabrication is more complex, limiting potential to scale. We describe new ‘trench’ geometries that exist in the design space between these two paradigms. They still allow for a simple, planar electrode layer but with much more favourable trapping properties. We propose such traps could be 3D-printed over a 2D wafer with microfabricated components already integrated into it, thus retaining all the integration techniques and scaling advantages of surface-electrode traps. As a -
proof of principle we use 2-photon direct laser writing lithography to print the required electrode structures with the proposed geometry.
1 Introduction
The surface-electrode ion trap (SET) [1] was a major step forward for realizing the trapped ion quantum computer when it was ﬁrst demonstrated in 2006 [2]. The SET allows for the trap electrodes to be fabricated as a single layer on a wafer. This has allowed for a diverse range of traps to be easily fabricated with rapid turnaround in relatively simple university cleanrooms as well as with commercial MEMS and CMOS processes [3]. Underneath this top electrode layer can be many other functional laye-
rs containing all the required classical control elements, as shown schematically in Fig. 1. These include current-carrying wires for magnetic ﬁeld-driven gates [4, 5], photonic integrated circuits for laser delivery [6, 7, 8], superconducting nanowires [9, 10] or avalanche photodiodes [11, 12] for photon detection,
1

active CMOS electronics such as DACs for trap voltage generation [13], and routing layers and thru-wafer vias [14] to external connections. Whilst the complete set of control elements required for QIP has yet to be integrated into a single device, they have all been demonstrated separately and eﬀorts to combine them are underway.

Laser Beam
Grating Coupler
Optical Wavegude
Active CMOS

3D Print

Metal Electrode Surface

Ion 3D Print

Photon Detector
Current-carrying Wire

Electrical Routing

Thru-wafer Via

Silicon Wafer

Figure 1: Cross-section of a trap fabricated using our proposed method of 3D printing an electrodes onto a wafer containing electrode routing and some of the potential integrated ion control elements that have been demonstrated.
3D ‘wafer’ traps on the other hand typically require thru-wafer machining [15], and usually alignment and stacking of multiple wafers, to achieve the desired geometries. These processes generally preclude the CMOS-like monolithic approach to integrating functional elements, and instead relies on further serial assembly of bespoke and heterogeneous components that requires much new process development [16, 17, 18, 19]. The recently developed approach of combining wafer stacking and SETs [20] potent-
ially oﬀers a solution to some of these issues.
Despite these fabrication disadvantages, wafer traps are still under active development because SETs have several major drawbacks [21], speciﬁcally:
• Trapping potentials are less harmonic. This causes any slight displacement of the trapping location due to stray charges or control voltage inaccuracies to shift the trap frequencies. Without recalibration this will lead to errors in multi-qubit gates. The increased cross-Kerr nonlinearity can also lead to gate errors due to spectator modes [22, 23].
• Trap depths are much lower [1], typically close to room temperature. This makes loading ions less eﬃcient and ion losses due to control ﬁeld errors, stray charges, and background gas collisions are much more likely. Room temperature operation of more than a couple of ions in lighter ion species is eﬀectively precluded due to short ion lifetimes.
• Junctions between ion traps with favourable trapping strength and depth, and small pseudopotential barriers are harder to achieve than with a 3D geometry [24].
2

• As the ions reside in an open volume above a surface, they are poorly shielded from electric charges or crosstalk (photons, microwave control ﬁelds, or electric trapping ﬁelds) from other trapping zones on the SET.
In this paper we propose mitigating these issues by adding a 3D-printed dielectric structure onto the trap wafer before depositing the ﬁnal metal electrode surface. This allows us to retain the fabrication advantages of the SET whilst also retaining the advantageous trapping geometry of a 3D trap. This requires ﬁnding trap geometries that meet these requirements. In section 2 we lay out how to quantify the performance of a given geometry. In section 3 we propose several feasible geometries and sim-
ulate them. Then ﬁnally, in section 4 we identify a suitable 3D printing process and print demonstration devices.

2 Quantifying Trap Performance

As alternatives to existing microfabricated trap designs, we explore several possible ‘trench’ geometries, discussed in greater detail in the following section. To assess the viability of these designs, we simulate them with COMSOL Multiphysics using the boundary element method (BEM). The Electrode software package [25] is used for further post-processing of the electric ﬁelds extracted from the simulations.
In each trap simulation we set RF electrodes to unit voltage and DC electrodes to ground and calculate the electric ﬁeld generated in the vicinity of the ion. From these ﬁelds, we can calculate the pseudopotential of the trap, which is the eﬀective potential seen by the ion [26]. By ﬁnding where this pseudopotential is at a minimum in the plane perpendicular to the trap axis, we locate the equilibrium position of the ion in two dimensions. By also ﬁnding the saddle point of the pseudopotential (ie-
, the ‘escape point’) and comparing the pseudopotential at this point to the pseudopotential at the center of the trap, we have a rough proxy for the depth of the trap (though in reality the situation is more complex due to the dynamical nature of a Paul trap). At the ion’s position, we ﬁt the surrounding electric potential V = V (r, θ) to a cylindrical harmonic expansion

∞

rn

V (r, θ) = V0 Cn
n=2

r0

cos(nθ + φn) + Voff

(1)

where r is distance from the trap center, r0 is the minimum ion-electrode separation, Voff is the potential at the ion, φn is the orientation of the nth-order multipole, and Cn is the expansion coeﬃcient associated with an nth-order multipole. From these expansion

coeﬃcients, we deﬁne what we call the ‘quadrupole,’ ‘hexapole,’ and ‘octopole’ strengths

generated by our traps,

quadrupole, C2,

hexapole,

C3

= C3 C2

,

octopole,

C4

= C4 C2

,

which we illustrate schematically in Fig. 2.

3

(a)

(b) C2

C3

C4

Figure 2: (a) A schematic cross-section of the potential generated by a SET, with the equilibrium position of the ion marked with a dot. (b) schematic cross-sections of the ﬁrst three multipoles the potential in (a) can be expanded into, labelled with their respective expansion coeﬃcients.
The quadrupole term gives the geometric eﬃciency of the trap. Greater eﬃciency is desirable as it reduces the required RF voltage, and thus power dissipation as well as the possibility of voltage breakdown on the chip. The hexapole and octupole terms give the leading order anharmonicities in the potential and are normalized to the quadrupole term as it is most useful to compare traps at the same ion secular frequency, not the same RF voltage. Anharmonicities increase cross-Kerr nonlinearity and in-
troduce displacement-dependent frequency shifts in the ion’s motion, increasing sensitivity of gate ﬁdelity to the temperature of non-gate modes and the presence of stray electric ﬁelds. Therefore, we seek designs which minimize higher-order multipole terms around the trap center.
In addition to trap depth and the multipole components of the trapping potential, we also calculate the open numerical aperture (NA) available for ﬂuorescence collection and for laser beam access, as illustrated in Fig. 3. A high NA (typically ∼ 0.4) is important for fast state readout on the ion. For the novel designs discussed in Sec. 3, we give an NA from above and from the substrate, as the ion detectors could be located in the substrate [9, 10, 11], or placed above the trap. For SETs the NA i-
s trivially one, while our wafer traps, by their symmetry, have the same NA from both sides. In all cases we consider a circular detector, but a modest improvement could be achieved with a rectangular detector. These NA also gives us an idea of the range of angles available for laser beams perpendicular to the trap axis such that they can exit the trap without striking an electrode.
We scale all of our traps such that the closest electrode to the ion is 75 µm away. Because anomalous heating has a strong ∼ d4 dependence [27, 28], the closest electrode will tend to dominate the heating rate. For calculating trap depths we assume a 40Ca+ ion trapped at a secular frequency of 4 MHz by a 40 MHz RF trap drive with no DC potentials applied.
3 Trench Trap Geometries
3D printing oﬀers great geometric versatility in trap design, since it can be used to produce arbitrary shapes. In principle, we could 3D print electrodes with hyperbolic cross-sections. Such electrodes would generate pure quadrupole potentials, with lower anharmonicities (as discussed in Sec. 2) than other geometries. In practice however, our choices of geometry are
4

limited by other fabrication and operation constraints, namely whether the geometry allows optical access to the ion for laser beam delivery and ﬂuorescence detection and how easily the 3D-printed dielectric can be metalized (a problem discussed further in Sec. 4). These constraints naturally suggest what we refer to as a ‘trench’ geometry, illustrated in Fig. 1. Trench geometries conﬁne ions between two walls 3D printed on the surface of a wafer. We explore several such ‘trench’ geometries for mi-
crofabricated ion traps and compare their performance to SETs and wafer traps of similar dimensions. Cross-sectional views of the geometries simulated are shown in Fig. 3.
The trap geometries we considered can be classiﬁed as either symmetric or anti-symmetric. Both sets of trap geometries are mirrored around a vertical plane along the trap axis, but in the anti-symmetric traps the role of RF and DC electrode is switched in the mirror half of the trap. Obviously many asymmetric variations on these traps are possible, usually with properties somewhere between the symmetric or anti-symmetric ones. We do not consider them here though as symmetries are generally desirab-
le, and pragmatically we need to keep the parameter space of diﬀerent traps to simulate tractable.
As shown in Fig. 3, all simulated traps aside from the SET are characterized by ≥ 3 geometric parameters. We select a subset of parameters (marked with Latin letters) to sweep while ﬁxing the other parameters (marked with Greek letters). For our trench traps, we also investigate how performance changes with the more relevant of the ﬁxed parameters. We do so by making multiple sweeps over the continuous parameters for diﬀerent values of a ﬁxed parameter.
3.1 Simple Trench
The ﬁrst trap geometry we consider is the ‘simple trench’. In this design, the two outermost electrodes of the SET are extended vertically to above the height of the ion. The symmetric simple trench is primarily characterized by four dimensions, DC and RF electrode widths c and d, trench wall height β, and trench wall thickness α. This last dimension does not strongly aﬀect the potential seen by the ion, since the ion is shielded from all but the inner surfaces of the trench. Because of this, a ﬁx-
ed value α = 100 µm, comparable to values used in our test fabrications (see section 4), is used in all trench trap simulations.
We simulate a set of symmetric simple trench traps at a ﬁxed ion height, allowing c and d to vary for discrete values of β. Unlike the symmetric design, the anti-symmetric simple trench can be characterized with just two parameters, plane electrode width e and trench wall height f . (We ﬁnd that ion height in the anti-symmetric trench depends mainly on e, as shown in Fig. 4(f). In fact, past f ≈ 200 µm, ion height shows no dependency on f noticeable beyond numerical noise.) The full simulation res-
ults for our symmetric and anti-symmetric simple trench traps are shown in Fig. 4.
3.2 Stacked Trench
The simple trench geometry discussed above is closer to the ideal quadrupole geometry than a surface trap, but the ﬂexibility of this geometry is limited by the fact that each wall can only contain one electrode. As an alternative, we consider what we call the ‘stacked trench’ geometry. By allowing multiple electrodes to make up the trench wall, we can produce
5

Symmetric

Antisymmetric

SET

Simple Trench

ab

α β

cd α

gε
h
µ τ λ k

φ α
f
e α
ζ j
i τ λ k

Stacked Trench

Wafer

Figure 3: Cross-sectional views of of the trap designs simulated. The ions’ location is shown as an orange dot and the trap axis is out of the page. DC electrodes are blue, RF electrodes are red. Numerical apertures are shown in lavender.
arrangements that more closely match the boundary conditions of a quadrupole, though the fact that the trench must remain open on the top prevents any trench geometry from being fully rotationally symmetrical.
The symmetric stacked trench trap can be characterized by four parameters: trench height , trench width µ, RF electrode height g, and the height of the RF electrode oﬀ of the ground plane h. The anti-symmetric stacked trench trap can be characterized by three parameters: trench height ξ, bottom electrode height j, and trench width i.
These traps have two regimes for which ion-electrode separation is 75 µm. In the ﬁrst regime, the ion is 75 µm from the ground plane and the trench walls are further away, while in the second regime, the ion is 75 µm from the trench walls. We consider both regimes in the antisymmetric case, but only the second in the symmetric case, since performance in the other regime was notably worse.
6

3.3 Comparison Geometries - SET and Wafer Traps
As a point of comparison, we simulate common varieties of microfabricated trap: the SET and the wafer trap. We ﬁrst simulate the symmetric and anti-symmetric SET (also known as 5-wire and 4-wire SETs respectively). One nice feature of SETs is that under the assumption of an inﬁnitely large trap with no gaps between electrodes, simple closed-form expressions for the potential are available [29]. While we use these closed-form expressions to calculate the parameters shown in Figs. 4-6, we also simul-
ate our SETs in COMSOL as a way of benchmarking our BEM simulations. We compare the multipole expansions, trap heights, and trap depths of BEM-generated and analytic potentials for the symmetric SET. For most of the free parameter range, agreement across these parameters is within 2%. In the range where a b (see Fig. 3), divergence approaches 10% due to the fact that the 1 µm electrode spacing present in all BEM simulations is no longer negligible [30]. For a ﬁxed ion height there is one free para-
meter in the symmetric SET and no free parameters in the anti-symmetric one.
To compare our proposed trench designs against the most prominent set of current 3D microfabricated designs, we also simulate symmetric and anti-symmetric wafer traps, illustrated in the bottom row of Fig. 3. A wafer thickness of λ = 50 µm of our simulated traps is comparable to those of designs implemented in the lab [31, 32]. The depth τ = 1 mm of the wafers is selected to be much larger than wafer thickness and spacing so that the exact depth is unimportant. Therefore, both designs have only on-
e free parameter, the spacing k between wafers in a stack. This parameter is swept over while holding the ion-electrode distance constant.
3.4 Summary
Having generated the data shown above, we want to compare the simple and stacked trench trap designs with established SET and wafer trap designs and assess their relative merits. For easy comparison between these four sets of simulated geometries, we select a ‘representative’ trap from each category. These traps in some qualitative way optimize the balance between trap depth and quadrupole strength/purity. This selection is somewhat subjective, and optimum parameters may vary by application, but t-
hey are unlikely to diﬀer greatly from what we have chosen here. A table of values for there representative traps are shown in Table 1, and the associated dimensions given in Table 2.
From Table 1, we predict that all our trench geometries will outperform SETs. For the symmetric simple trench trap, the improvement is practically negligible though. The antisymmetric simple trench is a signiﬁcant improvement over the SET, oﬀering ∼3× the depth, ∼40% higher quadrupole strength, and ∼40% lower hexapole strength. Despite this it is still notably inferior to the wafer traps. The stacked trench traps on the other hand can have very comparable performance to wafer traps, with similar d-
epth, quadrupole strength, and octopole terms. The hexapole term for our representative trap is still larger than in wafer traps (where it can be zero by symmetry), but the factor ∼ 50 improvement over SETs will still lead to drastic improvement in trap performance. Further improvement can be gained at the cost of lower NA optical access by making the walls higher. As some point though manufacturing tolerances and curvature from stray ﬁelds will set a practical limit for
7

Depth (eV)
Quadrupole (C2) Hexapole (C3) Octopole (C4)

SET Sym Anti
0.06 0.07 0.17 0.17 1.0 1.0 0.75 0.75

Simple Sym Anti
0.08 0.23 0.18 0.24 0.86 0.62 0.55 0.36

Stacked Sym Anti

0.33 0.31 0.020 0.024

0.22 0.40 0.008 0.407

Wafer Sym Anti

0.16 0.35 0.000 0.344

0.39 0.39 0.001 0.007

Table 1: Summary of results for trap parameter calculations for the SET, simple trench trap (‘Simple’), stacked trench trap (‘Stacked’), and wafer trap. Values shown correspond to a set of geometric parameters selected to balance trap depth and quadrupole strength/purity.

Trap

SET

Sym Anti

Simple Sym Trench Anti

Stacked Sym Trench Anti

Wafer

Sym Anti

Dimensions (µm)
a = 161.2, b = 59 φ = 75 d = 77.3, c = 210, β = 600 e = 135.2, f = 525 g = 140, h = 80, = 300 i = 150, j = 160 k = 50 k = 53

Table 2: The dimensions (in microns) of the traps whose parameters are summarized in Table 1.

8

Relative permittivity Loss tangent
Dielectric strength (V/cm) Bulk resistivity (Ω · cm)
Thermal conductivity (W/m·K)

2.5 [35], 2.7 [36], 3.1 [37] 0.0035 [37], 0.00397 [36], 0.004 [35],
8.7 × 105 [36] 4.5 × 1016 [36]
2.3[36]

Table 3: Electrical and thermal properties of ormocer.

either design.

4 3D Printing
Our chosen fabrication process for realizing these trench geometries is 2-photon direct laser write (DLW) 3D printing. The electrode structure is printed directly onto a functional trap wafer using a dielectric material. The printing process uses a focused laser to polymerize this photosensitive material to generate solid structures [33]. This can then be metallized to create conductive electrode surfaces.
Whilst not explored here, we note that the simple trench traps could be fabricated using UV-LIGA (Ultraviolet - Lithographie, Galvanoformung, Abformung). This process is already widely used to make electrodes for SETs [34] and so would be straightforward to adopt. UV-LIGA is a fabrication process where metal is electroplated inside a photoresist mold patterned using UV lithography. As discussed above, the performance advantage of these designs over SETs is fairly modest compared to the stacked tre-
nch traps. The stacked trench geometries could also be built using conventional MEMS techniques. However, the 100s of µm vertical heights required are likely challenging to achieve with oxide ﬁlm deposition.

4.1 Dielectric Material
We propose using ormocer (organically modiﬁed ceramic), a silica-based material, as our printable dielectric material. The high RF frequencies (∼10-100 MHz) and voltages (∼101000 V) applied to ion trap electrodes places stringent requirements on the electrical and thermal properties of any dielectrics used. High dielectric strength is required to avoid breakdown. High resistivity and low loss tangent avoid direct heating of the dielectric. A low dielectric constant reduces parasitic capacitance, r-
equiring less current to drive the electrodes, and thus lower Ohmic losses in the electrode metal. Finally, a high thermal conductivity ensures any heating from losses is minimized. Ormocer properties are somewhat formulation dependent, but in Table 3 we give some representative values measured in the literature to give an idea of what can be achieved.
For room temperature operation, outgassing needs to be low to ensure ultra-high vacuum pressures can be reached and the material must be able to withstand ∼200 ◦C vacuum bakes. Low outgassing is also desirable as it reduces the chance of contaminating metal electrode surfaces, which are known to play a role in anomalous heating [38]. The organic cross-linked
9

structure of ormocer reduces outgassing and makes ormocer ﬁt for vacuum processes [39], although quantitative outgassing data is so far lacking. Ormocer is stable to > 300 ◦C [39]. For cryogenic operation, vacuum compatibility is much less of an issue but the structure must be able to survive repeated temperature cycles without structural failure, something that will need testing in future work.
4.2 Initial Fabrication
4.2.1 Print
As an initial test, ormocer based trap structures were printed onto a borosilicate glass wafer and metalized with ∼ 20 nm of sputtered gold. SEM images of which are shown in Fig. 7. The printed structures are 200 µm high with 100 µm wide trenches in between them, giving a 50 µm ion-electrode distance. This is a fairly typical value, with most microfabricated traps historically lying in the few-10s to few-100s µm range. These traps were fabricated via a two-photon direct laser write process. A cust-
om printer was used, based on open source concepts from the Janelia’s open source Modular In vivo Multiphoton Microscopy System (MIMMS) and the printer described in [33].
This printer was built to address speciﬁc needs in terms of print speed and full wafer scalability while retaining the necessary resolution. In the print process, an individual 2D ﬁeld of view (FOV) is scanned using a galvo for y axis steps paired with a fast resonant imaging mirror operating at 8 kHz in the x axis; allowing for printing at speeds up to ∼8000 mm/s. A piezoelectric actuator is then used to sweep this FOV in the normal z axis to form an individual metavoxel. Series of these are then-
 stitched together across the entirety of the wafer via a controllable hexapod (Physik Instrumente) with sub-micron precision. We chose to break each “island” into 4 metavoxels with a 200 µm × 200 µm FOV. Each individual island is printed in under a minute with a voxel resolution under 2 µm in the xy print plane (142 x and 512 y voxels) and under 3 µm in z. Demonstrating that, whilst this is an inherently serial process, the overall processing times at the required resolution are tractable for muc-
h larger traps than are currently in use.
A hybrid resist is used in this printing process, based on Ormocomp photoresist (Microchem). To this we add a photoinitator, 2.4.6-trimethylbenzoyl phosphine oxide (TPO) (Sigma), a stabilizing agent, 3,5-Di-tert-butyl-4-hydroxytoluene (BHT), and Fluorescein (Sigma) for in situ imaging during printing. A Chameleon Discovery laser, set to 780 nm, 100 fs pulse width, 80 MHz Rep rate, and ∼100 mW was used to initiate polymerization. Resolution and therefore surface roughness is a function of resin cho-
ice as well as the fundamental optics and scan mechanics of the printer. The current design takes advantage of the critical electrical dimensions of the trap being on a vertical surface which minimizes discretization concerns. In addition, a small amount of shrinkage during curing is inevitable. We minimize this by using the highest possible laser power before explosions occur. We do not see delamination from the substrate or noticeable distortion of the structures under SEM imaging.
10

4.2.2 Metalization The next stage in our fabrication development is metalization. Our trap structure is designed to be ‘self masking’ - the isolation gaps between electrodes can be made deep enough (or with an undercut) such that directional deposition of metal onto the structure will not cause shorting between them. This metalization will connect the trap to vias already pre-fabricated on a planarized wafer using a standard CMOS process (see ﬁg. 1). These vias must be oﬀ to the side of the printe-
d structures as printing directly onto metal is diﬃcult - the laser heats the metal causing violent disruption of the print. On the substrate around the prints, isolation between electrodes will be achieved using a liftoﬀ process. We envisage using gold as our electrode metal as this is well established in ion trapping, and aluminium for the lifoﬀ material. The full process can be seen in Figure 8 and will be described in more detail in a forthcoming publication.
4.2.3 Integrated Optics The ﬁnal step to producing a working trap will be to integrate optics for laser delivery. This is because trench designs do not oﬀer the required optical access for free-space laser delivery. Waveguides for light routing and grating couplers to focus beams onto the ions have now been demonstrated by several groups [6, 7, 8]. These demonstrations were using SETs, but one of the strengths of the traps proposed here is that the same technique can be used without modiﬁcation. O-
ther integrated features shown in Fig. 1, whilst desirable, aren’t an immediate requirement.
5 Conclusion
Additive 3D printing has the potential be a powerful enabling technology for trapped-ion quantum computing. It allows the combination of wafer-integrated ion control with the 3D structures required to obtain optimal trap performance. In order to realise this we have developed a novel trench geometry and shown it can be printed. We lay out a roadmap to integrate the necessary electrical and optical routing to enable functional devices.
Acknowledgements
We would like to acknowledge Aaron Casserly who suggested this collaboration, David Miller who assisted with process development, and Daniel Slichter who provided simulation code examples.
11

(a)

(b)

(c)

(d)

(e)

(f )

(g)

(h)

Figure 4: Simulated parameters of SET traps vs the symmetric and anti-symmetric ‘simple trench’ geometry. (a) Trap depth at a ﬁxed radial frequency. (b) The quadrupole component (C2) of the trapping potential at the ion. (c) The hexapole component (C3) of the trapping potential. (d) The octopole component (C4) of the trapping potential. (e) Electrode dimensions at a constant ion-electrode separation for the symmetric simple trench trap. (f) Electrode dimensions at a constant ion-electrode separati-
on for the anti-symmetric simple trench trap. (g,h) NA above and below the ion. Parameters are plotted against a generic geometric variable w, which is related to an electrode dimension of each trap as shown in the legend. Simulation results are shown with markers. The representative SET, wafer, and simple trench traps whose characteristics are summarized in Table 1 are highlighted with larger markers. Simulation points are connected with dashed lines only as a guide to eye.
12

(a)

(b)

(c)

(d)

(e)

(f )

(g)

(h)

Figure 5: Simulated parameters of SET traps and wafer traps vs the symmetric ‘stacked trench’ geometry. (a) Trap depth at a ﬁxed radial frequency. (b) The quadrupole component (C2) of the trapping potential at the ion. (c) The hexapole component (C3) of the trapping potential. (d) The octopole component (C4) of the trapping potential. (e) The hexapole component of the trapping potential, excluding the SET data to make the other series more clear. (f) Electrode dimensions at a constant ion-electrod-
e separation for the symmetric stacked trench trap. (g,h) NA above and below the ion. Parameters are plotted against a generic geometric variable w, which is related to an electrode dimension of each trap as shown in the legend. Simulation results are shown with markers. The representative wafer and symmetric stacked trench traps whose characteristics are summarized in Table 1 are highlighted with larger markers. Simulation points are connected with dashed lines only as a guide to eye.
13

(a)

(b)

(c)

(d)

(e)

(f )

(g)

(h)

Figure 6: Simulated parameters of SET traps and wafer traps vs the anti-symmetric ‘stacked trench’ geometry. (a) Trap depth at a ﬁxed radial frequency. (b) The quadrupole component (C2) of the trapping potential at the ion. (c) The hexapole component (C3) of the trapping potential. (d) The octopole component (C4) of the trapping potential. (e) The hexapole component of the trapping potential, excluding the SET data to make the other series more clear. (f) Electrode dimensions at a constant ion-ele-
ctrode separation for the anti-symmetric stacked trench trap. (g,h) NA above and below the ion. Parameters are plotted against a generic geometric variable w, which is related to an electrode dimension of each trap as shown in the legend. Simulation results are shown with markers. The representative wafer and anti-symmetric stacked trench traps whose characteristics are summarized in Table 1 are highlighted with larger markers. Simulation points are connected with dashed lines only as a guide to e-
ye.
14

(a)

(b)

(c)

(d)

DC

RF

RF

DC

DC

RF

DC

RF

(e)

30 μm
Figure 7: SEM images of gold coated ormocer trap structures printed on glass. In this structure, many trenches have been connected up with X-junctions, as is envisaged in a large ‘QCCD’ processor [21]. (a) An overhead view of a grid of symmetric stacked trenches showing segmentation of the top DC electrodes. (b) An oblique view of the same grid. (c) A close up view of an intersection of trenches. (d) A false-color version of (c) showing DC electrodes in blue and RF electrodes in red. (e) A close-u-
p view of a DC electrode segment.
15

(a)

(b)

(c)

(d)

(e)

Figure 8: Proposed integration of electrode metalization with printing process shown here on a short section of the larger trap shown in Fig 7. (a) Silicon wafer with electrode routing and vias up to the surface is fabricated using standard CMOS process (metal shown copper coloured, SiO2 dielectric shown transparent). (b) Aluminum is deposited and patterned to deﬁne gaps between electrodes. (c) DLW used to print ormocer trap structures (blue). (d) Gold is deposition from multiple angles to coat al-
l surfaces of the print. (e) Aluminium is etched to allow liftoﬀ of the gold over the gaps between electrodes. Insets shown the liftoﬀ process in more detail.
16

References
[1] J. Chiaverini, R. B. Blakestad, J. Britton, J. D. Jost, C. Langer, D. Leibfried, R. Ozeri, and D. J. Wineland. Surface-electrode architecture for ion-trap quantum information processing. Quantum Inf. Comput., 5:419, 2005.
[2] S. Seidelin et al. Microfabricated surface-electrode ion trap for scalable quantum information processing. Phys. Rev. Lett., 96:253003, 2006.
[3] M. G. Blain, R. Haltli, P. Maunz, Nordquist C. D., M. Revelle, and D. Stick. Hybrid MEMS-CMOS ion traps for NISQ computing. Quantum Sci. Technol., 6:034011, 2021.
[4] D. T. C. Allcock et al. A microfabricated ion trap with integrated microwave circuitry. Appl. Phys. Lett., 102:044103, 2013.
[5] U. Warring, C. Ospelkaus, Y. Colombe, K. R. Brown, J. M. Amini, M. Carsjens, D. Leibfried, and D. J. Wineland. Techniques for microwave near-ﬁeld quantum control of trapped ions. Phys. Rev. A, 87:013437, 2013.
[6] K. K. Mehta, C. D. Bruzewicz, R. McConnell, R. J. Ram, J. M. Sage, and J. Chiaverini. Integrated optical addressing of an ion qubit. Nat. Nanotechnol., 11:1066, 2016.
[7] M. Ivory, W. J. Setzer, N. Karl, H. McGuinness, C. DeRose, M. Blain, D. Stick, M. Gehl, and L. P. Parazzoli. Integrated optical addressing of a trapped ytterbium ion. Phys. Rev. X, 11:041033, 2021.
[8] K. K. Mehta, C. Zhang, M. Malinowski, T.-L. Nguyen, M. Stadler, and J. P. Home. Integrated optical multi-ion quantum logic. Nature, 586(7830):533, 2020.
[9] D. H. Slichter, V. B. Verma, D. Leibfried, R. P. Mirin, S. W. Nam, and D. J. Wineland. UV-sensitive superconducting nanowire single photon detectors for integration in an ion trap. Opt. Express, 25:8705, 2017.
[10] S. L. Todaro, V. B. Verma, K. C. McCormick, D. T. C. Allcock, R. P. Mirin, D. J. Wineland, S. W. Nam, A. C. Wilson, D. Leibfried, and D. H. Slichter. State readout of a trapped ion qubit using a trap-integrated superconducting photon detector. Phys. Rev. Lett., 126:010501, 2021.
[11] W. J. Setzer, M. Ivory, O. Slobodyan, J. W. Van Der Wall, L. P. Parazzoli, D. Stick, M. Gehl, M. G. Blain, R. R. Kay, and H. J. McGuinness. Fluorescence detection of a trapped ion with a monolithically integrated single-photon-counting avalanche diode. Appl. Phys. Lett., 119:154002, 2021.
[12] D. Reens, M. Collins, J. Ciampi, D. Kharas, B. F. Aull, K. Donlon, C. D. Bruzewicz, B. Felton, J. Stuart, R. J. Niﬀenegger, P. Rich, D. Braje, K. K. Ryu, J. Chiaverini, and R. McConnell. High-ﬁdelity ion state detection using trap-integrated avalanche photodiodes. arXiv preprint, 2202.01715, 2022.
17

[13] J. Stuart et al. Chip-integrated voltage sources for control of trapped ions. Phys. Rev. Appl., 11:024010, 2019.
[14] N. D. Guise et al. Ball-grid array architecture for microfabricated ion traps. J. Appl. Phys., 117:174901, 2015.
[15] G. Wilpers, P. See, P. Gill, and A. G. Sinclair. A monolithic array of three-dimensional ion traps fabricated with conventional semiconductor technology. Nat. Nanotechnol., 7:572, 2012.
[16] M. Ernzer. Challenges in design and fabrication of a scalable 3D ion trap. Master’s thesis, ETH Zu¨rich, 2018.
[17] https://cordis.europa.eu/project/rcn/218553/factsheet/en.
[18] https://www.translume.com/index.php/item/239-ion-traps-with-integrated-optics.
[19] M. Day, K. Choonee, Z. Chaboyer, S. Gross, M. J. Withford, A. Sinclair, and G. Marshall. A micro-optical module for multi-wavelength addressing of trapped ions. Quantum Sci. Technol., 6:024007, 2021.
[20] S. Auchter, C. Axline, C. Decaroli, M. Valentini, L. Purwin, R. Oswald, R. Matt, E. Aschauer, Y. Colombe, P. Holz, T. Monz, R. Blatt, P. Schindler, C. R¨ossler, and J. Home. Industrially microfabricated ion trap with 1 eV trap depth. arXiv preprint, 2202.08244, 2022.
[21] R. B. Blakestad et al. High-ﬁdelity transport of trapped-ion qubits through an Xjunction trap array. Phys. Rev. Lett., 102:153002, 2009.
[22] C. F. Roos, T. Monz, K. Kim, M. Riebe, H. Ha¨ﬀner, D. F. V. James, and R. Blatt. Nonlinear coupling of continuous variables at the single quantum level. Phys. Rev. A, 77:040302, 2008.
[23] X. R. Nie, C. F. Roos, and D. F. V. James. Theory of cross phase modulation for the vibrational modes of trapped ions. Phys. Lett. A, 373(4):422, 2009.
[24] J. H. Wesenberg. Ideal intersections for radio-frequency trap networks. Phys. Rev. A, 79:013416, 2009.
[25] https://github.com/nist-ionstorage/electrode.
[26] H. G. Dehmelt. Radiofrequency Spectroscopy of Stored Ions I: Storage. volume 3 of Advances in Atomic and Molecular Physics, page 53. Academic Press, 1968.
[27] B. E. King, C. S. Wood, C. J. Myatt, Q. A. Turchette, D. Leibfried, W. M. Itano, C. Monroe, and D. J. Wineland. Cooling the collective motion of trapped ions to initialize a quantum register. Phy. Rev. Lett., 81(7):1525, 1998.
18

[28] Q. A. Turchette, Kielpinski, B. E. King, D. Leibfried, D. M. Meekhof, C. J. Myatt, M. A. Rowe, C. A. Sackett, C. S. Wood, W. M. Itano, and et al. Heating of trapped ions from the quantum ground state. Phys. Rev. A, 61:063418, 2000.

[29] M. G. House. Analytic model for electrostatic ﬁelds in surface-electrode ion traps. Phys. Rev. A, 78:033402, 2008.

[30] R. Schmied. Electrostatics of gapped and ﬁnite surface electrodes. New J. of Phys., 12:023038, 2010.

[31] J. D. Jost. Entangled Mechanical Oscillators. PhD thesis, University of Colorado, 2010.

[32] D. Kienzler. Quantum Harmonic Oscillator State Synthesis by Reservoir Engineering. PhD thesis, ETH Zu¨rich, 2015.

[33] B. W. Pearre, C. Michas, J.-M. Tsang, T. J. Gardner, and T. M. Otchy. Fast micronscale 3D printing with a resonant-scanning two-photon microscope. Addit. Manuf., 30:100887, 2019.

[34] C. L. Arrington et al. Micro-fabricated stylus ion trap. Rev. Sci. Instrum., 84:085001, 2013.

[35] L. Fro¨hlich, R. Houbertz, S. Jacob, M. Popall, R. Mueller-Fiedler, J. Graf, M. Munk, and H. von Zychlinski. Inorganic-organic hybrid polymers as photo-patternable dielectrics for multilayer microwave circuits. MRS Online Proc. Lib., 726:Q11.4, 2002.

[36] R. M. Laine, editor. Inorganic and Organometallic Polymers with Special Properties. Springer Netherlands, 1992.

[37] C. Johansson, S. Uhlig, O. Tageman, A. Alping, J. Haglund, M. Robertsson, M. Popall, and L. Frohlich. Microwave circuits in multilayer inorganic-organic polymer thin ﬁlm technology on laminate substrates. IEEE Trans. Adv. Packag., 26(1):81, 2003.

[38] D. A. Hite, Y. Colombe, A. C. Wilson, D. T. C. Allcock, D. Leibfried, D. J. Wineland, and D. P. Pappas. Surface science for improved ion traps. MRS Bull., 38(10):826, 2013.

[39] Dielectric ormocers for system-in-package electronics and highly integrated sys-

tems.

https://www.isc.fraunhofer.de/content/dam/isc/de/documents/

Publikationen/Dielectric_ORMOCERs_for_system_in_package_electronics.pdf.

19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:57.330Z
- **Text Length:** 38283 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
