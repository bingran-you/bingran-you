# PDF Document: (Chichi Thesis - Toroidal Half-Wave (λ2) Resonator - 2021 Da An) Electric-field noise scaling and wire-mediated ion-ion energy exchange in a novel elevator surface trap.pdf

**File Path:** (Chichi Thesis - Toroidal Half-Wave (λ2) Resonator - 2021 Da An) Electric-field noise scaling and wire-mediated ion-ion energy exchange in a novel elevator surface trap.pdf

**Processed Date:** 2026-02-10T18:16:29.687Z

**File Size:** 19065.23 KB

**Total Pages:** 125

**Extracted Pages:** 125

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 190

**Collection:** Ion Trap

---

## Extracted Text Content

Electric-field noise scaling and wire-mediated ion-ion energy exchange in a novel elevator surface trap
by
Da An
A dissertation submitted in partial satisfaction of the
requirements for the degree of
Doctor of Philosophy
in
Physics
in the
Graduate Division
of the
University of California, Berkeley
Committee in charge:
Professor Hartmut H ̈affner, Chair Professor Norman Yao Professor Evan Williams
Spring 2021

The dissertation of Da An, titled Electric-field noise scaling and wire-mediated ion-ion energy exchange in a novel elevator surface trap, is approved:
Chair Date
Date
Date
University of California, Berkeley

Electric-field noise scaling and wire-mediated ion-ion energy exchange in a novel elevator surface trap
Copyright 2021 by Da An

1
Abstract
Electric-field noise scaling and wire-mediated ion-ion energy exchange in a novel elevator surface trap
by
Da An
Doctor of Philosophy in Physics
University of California, Berkeley
Professor Hartmut H ̈affner, Chair
In this work, we present the design, fabrication, and operation of a novel surface-electrode Paul trap that produces a radio-frequency-null along the axis perpendicular to the trap surface. This arrangement enables control of the vertical trapping potential and consequentially the ion-electrode distance via dc-electrodes only. We demonstrate confinement of single 40Ca+ ions at heights between 50 μm and 300 μm above planar copper-coated aluminium electrodes. Laser-cooling and coherent operations ar-
e performed on both the planar and vertical motional modes. This architecture provides a platform for precision electric-field noise detection, trapping of vertical ion strings without excess micromotion, and may have applications for scalable quantum computers with surface ion traps. In our novel surface trap, we probe electric-field noise for ion-surface distances d between 50 μm and 300 μm in the normal and planar directions. We find the noise distance dependence to scale as d−2.6 in our trap a-
nd a frequency dependence which is consistent with 1/f noise. Simulations of the electric-field noise specific to our trap geometry provide evidence that we are not limited by technical noise sources. Our distance scaling data is consistent with a noise correlation length of about 100 μm at the trap surface, and we discuss how patch potentials of this size would be modified by the electrode geometry. Finally, we achieve coupling between the motions of trapped ions separated by 620 μm. Our results -
mark the first implementation of remote ion-ion interactions enhanced via an electrically floating metallic wire in an RF Paul trap. By tuning the confinement of each ion into resonance, we demonstrate classical energy exchange through sympathetic heating and heating rate reduction. The coupling interaction exchange time is extracted to be 22 ms. Practical improvements to the ion-wire-ion system are discussed, with realistic applications to sympathetic cooling of remote ions and more optimistic go-
als of coherent energy exchange at the single-quantum level. Our ion-wire-ion system establishes a building block for scalable trapped ion quantum computers and provides a tool for quantum communication between qubits of different types.

i
To my parents, who have always encouraged me. And to my wife, who has always supported me.

ii
Acknowledgments
This Ph.D. work could not have been accomplished without the support of my colleagues, my friends, and my family. I take the time here to emphasize the appreciation I have for those who have greatly helped me along my journey. To start off, I would like to thank my advisor, Hartmut H ̈affner, who has provided invaluable guidance throughout my Ph.D. and has taught me the mindset and joys of being a physicist. I cannot thank him enough for cultivating a fantastic research environment and community w-
here I had the intellectual and financial freedom to explore any of my scientific interests. I am fortunate to have had the pleasure of working alongside several amazing graduate students and remarkable post-docs. In particular, I am thankful to have worked with Clemens Matthiesen, whose perseverance and enthusiasm fostered experimental success and astute exchange of ideas. I also want to thank Erik Urban for welcoming me into the group and showing me how to be a great ion trapper and scientist. T-
hanks to Dylan Gorman, Ahmed Abdelrahman, and Nikos Daniilidis for laying the theoretical and experimental groundwork for my project. And thanks to Maya Berlin-Udi and Alberto Alonso for their insightful discussions and help with setting up experiments. I would also like to recognize the undergraduate students, Jun Wang and Liona Fan-Chiang, who executed valuable simulation work for our double trap. And shout-out to Joe Broz for his help with ensuring all the lab operations run smoothly. To the re-
st of my awesome labmates: Soenke, Crystal, Neil, Nicole, Ryan, Eli, Boerge, Wei-Ting, Sara, and Sumanta, thank you for sharing many enlightening and fun conversations both inside and outside of the lab. Of course, I would not be here without the support and endless encouragement of my parents. Thank you to my dad for teaching me how to stay calm in the face of challenge. And thank you to my mom for filling my life with positivity and excitement. Finally, to my wife, Katherine, thank you for being-
 the best friend and support system I could ever ask for and thank you for keeping my journey light-hearted.

iii
Contents
Contents iii
List of Figures v
1 Introduction 1
2 Ion traps 4 2.1 Paul traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 2.2 Common RF trap designs . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
3 Laser-ion interactions 9 3.1 Atomic structure of Calcium . . . . . . . . . . . . . . . . . . . . . . . . . . . 9 3.2 Coherent operations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 3.3 State detection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 3.4 Laser cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 3.5 Temperature measurement . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
4 Four-RF-electrode (elevator) trap 27 4.1 Trap design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27 4.2 Trap operation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29 4.3 Applications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35
5 Experimental setup 37 5.1 Trap chip . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37 5.2 Ion trap apparatus . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39 5.3 Electronics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44 5.4 Optics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50
6 Electric-field noise 55 6.1 Single-ion motional heating . . . . . . . . . . . . . . . . . . . . . . . . . . . 55 6.2 Distance scaling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57 6.3 Frequency scaling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61 6.4 Technical noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61

iv
6.5 Spatial surface noise correlations . . . . . . . . . . . . . . . . . . . . . . . . . 68 6.6 Heating rate comparison . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72 6.7 Concluding remarks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73 6.8 Two-ion motional heating . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73
7 Wire-mediated long-range ion-ion coupling 79 7.1 Coupling Mechanism . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80 7.2 Double trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85 7.3 Wire mediated ion-ion energy exchange . . . . . . . . . . . . . . . . . . . . . 96 7.4 Conclusions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101
Bibliography 105

v
List of Figures
2.1 Schematic of 3-D RF Paul trap and linear surface trap . . . . . . . . . . . . . . 7
3.1 Schematic of the in-vacuum Ca oven . . . . . . . . . . . . . . . . . . . . . . . . 10 3.2 Energy level structure of 40Ca+ . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 3.3 Simulated carrier Rabi flops of Fock states . . . . . . . . . . . . . . . . . . . . . 15 3.4 Simulated red and blue sideband Rabi flops of Fock states . . . . . . . . . . . . 16 3.5 State readout histogram . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 3.6 Resolved-sideband cooling scheme . . . .-
 . . . . . . . . . . . . . . . . . . . . . . 21 3.7 Temperature measurement via sideband spectroscopy . . . . . . . . . . . . . . . 23 3.8 Simulated carrier Rabi flops of thermal states . . . . . . . . . . . . . . . . . . . 24 3.9 Simulated red and blue sideband Rabi flops of thermal states . . . . . . . . . . . 25
4.1 Elevator trap image . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28 4.2 Simulated pseudopotentials in the point trap configuration . . . . . . . . . . . . 29 4.3 Simulated pseudopotentials in the vertical-linear configuration . . . . . . . . . . 30 4.4 RF voltage as a function of trapping height . . . . . . . . . . . . . . . . . . . . 31 4.5 DC electrode voltages required for trapping . . . . . . . . . . . . . . . . . . . . 33 4.6 Demonstration of ground state cooling of-
 vertical and planar modes . . . . . . . 34
5.1 Schematic of electrode patterning on the trap chip . . . . . . . . . . . . . . . . . 38 5.2 Schematic and image of trap assembly . . . . . . . . . . . . . . . . . . . . . . . 40 5.3 Top and bottom schematics of the CLCC . . . . . . . . . . . . . . . . . . . . . . 40 5.4 Schematic of PCB breakout board . . . . . . . . . . . . . . . . . . . . . . . . . . 41 5.5 Image of burnt trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42 5.6 Image of short on PCB breakout board . . -
. . . . . . . . . . . . . . . . . . . . . 43 5.7 Out-of-phase RF circuit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45 5.8 Micromotion modulation index tuning . . . . . . . . . . . . . . . . . . . . . . . 46 5.9 Toroidal resonator . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47 5.10 Block-diagram of experimental grounding . . . . . . . . . . . . . . . . . . . . . . 49 5.11 Fiber noise cancellation setup . . . . . . . . . . . . . . . . . . . . . . . . . . .-
 . 51 5.12 Beat note of fiber noise cancellation . . . . . . . . . . . . . . . . . . . . . . . . . 53 5.13 Schematic of imaging system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54

vi
6.1 Isometric view of elevator trap and lasers . . . . . . . . . . . . . . . . . . . . . . 58 6.2 Distance scaling of ion heating rates . . . . . . . . . . . . . . . . . . . . . . . . 60 6.3 Frequency scaling of ion heating rates . . . . . . . . . . . . . . . . . . . . . . . . 61 6.4 Simulated DC electrode technical noise . . . . . . . . . . . . . . . . . . . . . . . 64 6.5 Simulated RF electrode technical noise . . . . . . . . . . . . . . . . . . . . . . . 65 6.6 Technical noise conspiracy fit . -
. . . . . . . . . . . . . . . . . . . . . . . . . . . 66 6.7 Distance scaling of ion heating rate from injected noise . . . . . . . . . . . . . . 67 6.8 Heating rate fit using surface noise correlation length . . . . . . . . . . . . . . . 70 6.9 Fixed patch potentials and simulated heating rate distance scaling . . . . . . . . 71 6.10 Compilation of experimental heating rates . . . . . . . . . . . . . . . . . . . . . 72 6.11 Two-ion axial normal modes . . . . . . . . . . . . . . . . . . . . . . . -
. . . . . . 74 6.12 Two-ion stretch mode heating from fixed patch model . . . . . . . . . . . . . . . 77 6.13 Two-ion stretch mode heating from technical noise . . . . . . . . . . . . . . . . 78
7.1 Schematic of the ion-wire-ion system . . . . . . . . . . . . . . . . . . . . . . . . 80 7.2 Classical energy evolution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81 7.3 Equivalent circuit model of a single ion and wire . . . . . . . . . . . . . . . . . . 83 7.4 Equivalent circuit model of ion-wire-ion system . . . . . . . . . . . . . . . . . . 84 7.5 Isometric rendering of double trap . . . . . . . . . . . . . . . . . . . . . . . . . . 85 7.6 Microscope image of double trap . -
. . . . . . . . . . . . . . . . . . . . . . . . . 86 7.7 Ion-wire coupling strength versus paddle size . . . . . . . . . . . . . . . . . . . . 87 7.8 Ion-wire coupling strength versus ion height . . . . . . . . . . . . . . . . . . . . 88 7.9 Floating wire multipole contribution . . . . . . . . . . . . . . . . . . . . . . . . 90 7.10 Photoelectric effect on floating wire charge . . . . . . . . . . . . . . . . . . . . . 92 7.11 Effect of RF voltage mismatch on floating wire . . . . . . . . . . . . .-
 . . . . . . 94 7.12 Spectroscopy of ion-wire-ion coupling . . . . . . . . . . . . . . . . . . . . . . . . 98 7.13 n ̄ time-evolution of ion-wire-ion system . . . . . . . . . . . . . . . . . . . . . . . 99 7.14 n ̄ dependent anharmonic trap frequency shift . . . . . . . . . . . . . . . . . . . 100

1
Chapter 1
Introduction
Trapped atomic ions have emerged as a promising platform for the physical realization of quantum computation and simulation [1], due in part to their identical and well isolated nature along with long coherence times of the internal qubit states. Trapped ion systems also have demonstrated high-fidelity single-qubit and multi-qubit coherent operations, up to 99.9999% for single-qubit gates [2] and 99.9% for two-qubit gates [3, 4], controllable through external electromagnetic fields and laser light-
. My thesis work is centered around a novel surface ion trap design which allows simple shuttling of ions perpendicular to the trap surface. The first hurdle of this thesis work was the implementation and characterization of such a trap. For its ability to transport ions up and down with purely DC fields, we term this trap as the “elevator” trap. Using the elevator trap as a tool, two main experimental results are presented in this thesis: electric-field noise distance scaling and wire-mediated lo-
ng-range ion-ion energy exchange. In reference to the first result, a prominent challenge for the miniaturization of ion traps, necessary for scaling to large numbers of qubits and smaller footprints, is the presence of electric-field noise. This noise causes decoherence of the ion motional modes and limits the fidelity of multi-ion qubit interactions [5]. The electric field noise originates from surfaces close to the trapped ion and is typically orders of magnitude larger than the Johnson noise e-
xpected from the thermal motion of the electrons in a conductor of the same geometry [6]. While identifying the microscopic sources of this excess electric-field noise is an active topic of research, it has been found to scale strongly with distance to the trap surface [6, 7]. To date, various possible sources of such excess electric-field noise have been proposed and studied theoretically, resulting in a range of possible distance scalings [6, 8, 9]. In this thesis work, we measure a precise nois-
e scaling with distance to provide information on the spatial extent of surface noise sources. This information may aid the community to understand the underlying mechanisms behind excess surface noise and allow engineering of better ion traps or inspire reliable surface treatments. Beyond ion traps, surface electricfield noise limits the performance of solid-state quantum sensors, such as nitrogen-vacancy centers in diamond [10], and hinders precision measurements, including gravitational probes -
with charged particles [11, 12] and Casimir-Polder force studies [13, 14]. Thus, a better

CHAPTER 1. INTRODUCTION 2
understanding of surface noise in ion traps may help advance research in these fields. Another key feature for scalable trapped ion technology is the ability to communicate information between distant ions in separate traps. Control in a single trapping potential is limited to tens of ions due to trap frequency crowding and other technical challenges. Thus, scaling trapped ion systems to hundreds of ions requires a modular architecture which features several linked ion registers. Proposed intercon-
nect mechanisms among these registers may take the form of shuttling ions or generating photonic links. In this thesis, we explore an alternative to these interconnects that involves transferring quantum information from one ion to another distant ion through a classical wire. The ideas behind this project date even prior to the inception of the Ha ̈ffner lab at UC Berkeley in 2009. Over the years, this ambitious project has challenged generations of researchers and undergone a few iterations. The-
 first iteration of the experiment was designed with a standard linear surface trap with a wire suspended above the trap using piezo translation stages [15]. Ultimately, we arrived at a trap design which integrated the coupling wire onto the surface trap itself. The 500 μm long electrically floating wire connects two separate trapping zones, each modeled after the elevator trap. With this trap, we provide experimental results showing the energy exchange between two remote ions enhanced via the sha-
red metallic wire. These results mark the base of future ion-wire-ion systems, which may lead to large-scale modular ion traps or hybridized versions of trapped ion qubits and solid-state qubits for quantum computation. An outline of this thesis is given by the following: We begin in Chapter 2 with a brief review of the physics behind ion trapping and provide example designs for standard ion traps. In Chapter 3, we explore the atomic structure of the 40Ca+ ion and analyze basic laser-ion interacti-
ons required for control and measurement of an ion in our experiments. In Chapter 4, we introduce a novel surface trap design, the four-RF-electrode trap, which we colloquially term the “elevator” trap. This trap design features RF fields that provide confinement in the trap plane, but cancel along the vertical axis which is perpendicular to the trap surface. The ion trapping height and vertical potential are fully controlled with DC fields, simplifying vertical shuttling, hence the “elevator” mon-
iker, and allowing for trapping of vertical ion strings. With this design, we have demonstrated trapping at heights ranging from 50 to 300 μm above the trap surface. We also discuss potential applications of the trap design in quantum control and electric field sensing. Chapter 5 details the experimental setup of our ion trap apparatus, including fabrication, assembly, electronics, optics, and challenges faced and overcome throughout the process. In Chapter 6, we present the first scientific resul-
ts utilizing the elevator trap. Explicitly, we probe electric-field noise in a surface ion trap for ion-surface distances d between 50 and 300 μm in the normal and planar directions. We find the noise distance dependence to scale as d−2.6 in our trap and a frequency dependence which is consistent with 1/f noise. Simulations of the electric-field noise specific to our trap geometry provide evidence that we are not limited by technical noise sources. Our distance scaling data is consistent with a no-
ise correlation length of about 100 μm at the trap surface, and we discuss how patch potentials of this size would be modified by the electrode geometry.

CHAPTER 1. INTRODUCTION 3
Finally, in Chapter 7, we present a novel long-range ion-ion coupling mechanism: motional dipole-dipole coupling of two ions in separate traps enhanced via an electrically floating metallic wire. Here, two ions are held in separate trapping zones, and their motions induce oscillating charges in a shared wire, which acts as an intermediate bus to communicate between the ions. We demonstrate classical energy exchange between the two separated ions connected with a wire. Improvements are discussed in-
 order to bring the energy exchange into the single-quantum regime. We conclude with and overview of applications for such a capability, including scalable quantum networks and hybrid quantum architectures.

4
Chapter 2
Ion traps
As charged particles, ions have naturally strong interactions with electromagnetic fields. Taking advantage of this feature, we can spatially confine ions in three-dimensions with an appropriate choice of fields. These external trapping fields in combination with the mutual Coulomb interaction between ions allows the formation of ion crystals, or spatially separated individual ions with shared motion. The two main schemes for physical realization of trapped ions utilize either oscillating electric-
 fields (Paul traps) or oscillating magnetic fields (Penning traps). In this chapter, we describe the theory behind the former scheme, and discuss the standard physical implementations of radio-frequency (RF) Paul traps.
2.1 Paul traps
3-D confinement of an ion is impossible to achieve with solely static (DC) electric fields. This can be seen by attempting to solve Laplace’s equation, ∇2Φ = 0, with a static quadrupole potential,
Φ(x, y, z) = U0
2r2
0
∑
i
αix2
i . (2.1)
where U0 is the static voltage, r0 is the characteristic ion-electrode distance, xi correspond to the three spatial dimensions x, y, z, and αi are geometric factors in the ith dimension. There are two mathematical requirements to establish confinement in 3-D for positively charged ions. The first requirement is to maintain a confining concavity of the quadratic potential in all dimensions, meaning αi > 0, ∀i = 1, 2, 3. (2.2)
The second requirement is to satisfy Laplace’s equation, which is equivalent to satisfying
∑
i
αi = 0. (2.3)
All non-trivial solutions to Eq. (2.3) imply that we must have at least one dimension with anti-confining potential, i.e. αi < 0. However, this is explicitly in contradiction with the

CHAPTER 2. ION TRAPS 5
first requirement stated in Eq. (2.2). From this contradiction, we conclude the impossibility of creating a fully confining static electric potential in 3-D space. A solution to this dilemma was introduced by Wolfgang Paul in 1953 [16]. Broadly, the idea was to generate 3-D confinement with dynamic electric fields rather than static fields. The validity of Paul’s design centers on an averaging effect from the oscillating RF trapping fields, and can be conceptually understood as the following: At a-
ny instantaneous point in time, we must have a saddle-like potential, with anti-confinement in at least one orthogonal spatial dimension. However, we can oscillate the potential in time such that the confinement and anti-confinement axes switch back and forth. If this is done fast enough, an ion located at the center of this oscillating potential will experience an averaged confining force in all dimensions where the voltage oscillation is non-zero.
2.1.1 Classical ion motion
We investigate this mathematically following the analysis from [17, 1]. By adding a timedependent term to the potential in Eq. (2.1), we arrive at the full electric potential that can be written as
Φ(x, y, z, t) = U0
2r2
0
∑
i
αix2
i + V0
2r2
0
cos(ΩRF t)
∑
i
α′
ix2
i . (2.4)
where V0 is the amplitude of the oscillating part of the potential, ΩRF is the angular frequency of oscillation set by an external driving force, and α′
i is the geometric factor of the ith oscillating potential. Each spatial dimension in the potential, Φ(x, y, z, t), can be treated independently, and the one-dimensional classical equation of motion of an ion with charge e and mass m is
x ̈ + e
m
∂Φ
∂x = x ̈ + e
mr2
0
(U0α + V0 cos(ΩRF t))x = 0 (2.5)
This can be reformulated into the Mathieu differential equation
d2x
dξ2 + [ax − 2qx cos(2ξ)]x = 0 (2.6)
where
ξ = ΩRF t
2 , ax = − 4eU0α
mr2
0 Ω2
RF
, qx = 2eV0α′
mr2
0 Ω2
RF
. (2.7)
The Mathieu equation has been shown to have stable solutions [1, 18, 19] of the form
x(ξ) = Aeiβxξ
∞
∑
n=−∞
C2nei2nξ + Be−iβxξ
∞
∑
n=−∞
C2ne−i2nξ (2.8)
where A and B are constants determined by initial conditions, and βx and C2n are functions of ax and qx. These stable solutions are only valid for certain values of ax and qx [1, 20]. One

CHAPTER 2. ION TRAPS 6
such stable parameter region is where (|ax|, q2
x) 1. All of the trapped ion experiments in this thesis have operated in this parameter regime. Working in this region along with the initial condition of A = B, we find the solution to the Mathieu equation to be
x(t) = Ax cos(βx
ΩRF
2 t)[1 − qx
2 cos(ΩRF t)], (2.9)
βx =
√
ax + qx2
2 (2.10)
where Ax is a constant determined by additional initial conditions. The stable solution x(t), in Eq. (2.9), represents the lowest-order approximate classical trajectory of an ion confined within a quadratic potential. On inspection of x(t), we see that the motion consists of two oscillating terms: a large amplitude, slowly oscillating term at frequency ωx = βxΩRF /2, which is commonly referred to as ‘secular’ motion, and a small amplitude, fast oscillation at frequency ΩRF , typically termed as ‘m-
icromotion’. Micromotion can be experimentally suppressed by bringing the ion into the RF null [17], making qx ≈ 0. The RF null is the position where the electric-field gradient is minimized; it sits at the saddle point of the electric potential, where the amplitude of the oscillating potential is typically zero. In most theoretical treatments [1], another assumption of low ion kinetic energy is made, implying Ax ≈ 0. This condition is imposed to ensure that the ion motion does not cause significa-
nt deviation from the RF null. With the combination of qx ≈ 0 and Ax ≈ 0, we find that the trapped ion motion may be fully capture by the secular motion,
x(t) ≈ Ax cos(ωxt). (2.11)
We could have similarly arrived at this solution by using an effective stationary potential, known as a ‘pseudopotential’, to approximate the average RF potential. The intuition for this method is that, for ωx ΩRF , over one period of ion oscillation, τx = 2π/ωx, the force from the RF acting on the ion averages to zero. And so we can model the system with a pseudopotential,
Ψ(x) = e2
4mΩ2
RF
|∇Φ(x)|2 (2.12)
2.2 Common RF trap designs
The electrode geometry and design of an ion trap is influenced by several functional factors. For example, it is prudent to generate confining potentials as harmonic as possible near the ion position because this leads to larger trapping depths and increased ion lifetimes. Additionally, the electrodes must be placed to provide 3-D control of the dipole and quadrupole electric-fields. In practice, many possible arrangements of RF and DC electrodes may satisfy the above conditions. In this section, -
we will discuss two such ion trap designs that have proved valuable to the trapped ion research community.

CHAPTER 2. ION TRAPS 7
Figure 2.1: (Left) Schematic of electrode layout for a 3-D linear RF Paul trap. Static DC fields are applied to black electrodes, oscillating RF fields are applied to white electrodes, and gray electrodes are held as GND reference. The electric-field lines, shown in red, illustrate the instantaneous quadrupole field formed by the RF electrodes. With the appropriate voltages on each electrode, crystallized ion strings oriented along the zˆ axis may form. (Right) Schematic of electrode layout for a -
standard five-wire linear surface trap design. The RF and GND electrodes can be directly mapped from the 3-D electrode rods, noting that the upper GND rod is now represented by GND at y = ∞. The resulting instantaneous RF electricfield lines are again shown in red, with quadrupole confinement similar the 3-D counterpart. Additionally, the 3-D DC endcaps are translated to multiple surface DC electrodes. The combination of RF and DC fields analogously traps ion strings along the zˆ axis. Typical DC -
electrode voltages are on the order of 10 V, and RF electrodes are driven with order 10 − 100 V at ∼ 10 MHz.
2.2.1 3-D linear trap
A 3-D linear RF trap has electrode structure shown in Fig. 2.1 (left). Although many variations exist, the general architecture consists of four rods arranged symmetrically around a center axis. When two oppositely paired rod electrodes are driven with in-phase RF voltage, they generate oscillating quadrupole confinement in the radial xˆ, yˆ directions, as shown by the red electric-field lines in Fig. 2.1. By symmetry of the RF electrodes, there is an RF null, or pseudopotential minimum, line that-
 forms along the center zˆ axis. Ions trapped along this RF null axis experience minimal micromotion, allowing the ion motion to be described by the secular approximation, as seen in Section 2.1.1. The remaining two opposite rods are split into segments that hold static DC potentials to confine ions in the axial zˆ direction. Both the RF and DC potentials are referenced to a common ground (GND).

CHAPTER 2. ION TRAPS 8
With an axial zˆ confinement relatively weak compared to the radial xˆ, yˆ confinement, this configuration will align multiple ions along the RF-null z axis in a linear chain. The separation between ions is determined by a balance between the ion-ion Coulomb force and the strength of confinement in the axial direction. Typical ion-ion separations are ∼ 5 μm, allowing for individual addressing of each ion with independent laser beams. This capability and architecture has led to a plethora of exciti-
ng results in quantum information processing, quantum sensing, and quantum simulation [21, 22].
2.2.2 Linear surface ion trap
The first demonstration of a microfabricated surface-electrode ion trap [23] opened the path towards scalable quantum information processing with trapped ions. The design of a standard linear surface trap, shown in Fig. 2.1 (right), takes inspiration from its 3-D predecessor, and is often referenced as the five-wire trap design [24, 25]. The long RF rods are mapped and flattened onto the surface in the form of long RF electrodes, and the segmented DC rods are mapped onto segmented surface electrod-
es, with designated ground potentials on the trap surface and at infinity. This design maintains the quadrupole confinement of the 3-D linear traps, and can analogously trap linear chains of ions along the axial zˆ direction. The advantages of a surface trap architecture over 3-D traps include simplified fabrication of complex electrode structures, allowing for finer and more localized ion control, such as localized micromotion compensation, ion shuttling between trapping regions and through junct-
ions [26, 27, 28], and splitting and merging of ion chains. Additionally, the footprint of surface traps are an order of magnitude smaller than bulky 3-D traps. Surface traps also take advantage of standardized micro- and nano-fabrication techniques, which make trap production more reliable, reproducable, and customizable. For instance, various groups have created surface traps with unique potential landscapes [29, 30] and on-chip integration of ion addressing beams have been demonstrated [31]. Of-
 course, this architecture also comes with disadvantages. Because the spacing between electrodes is typically on the order of microns, the voltages must be kept relatively small (to prevent arching and damage to the traps), leading to lower trap depths and shorter ion lifetimes. Another disadvantage is a result of the 2-D limited geometry of the electrodes, which causes anharmonicities in the electric potentials. As a result, the quadratic approximation of the confinement potential does not spatia-
lly extend as far as its 3-D counterparts, leading to reduction of the trap depths of ∼ 100 times [24]. Optical access is also essentially limited to laser beams parallel with the trap plane, since beams coming from below will not reach the ion and short wavelength (. 450 nm) beams coming from above will expose the surface electrodes to unwanted photo-electric charging [32]. Furthermore, trapped ions are held typically 30 − 300 μm above the surface, which makes them sensitive to electric-field noi-
se on the surface of the trap, see Chapter 6. This sensitivity causes unwanted motional decoherence, which negatively affects the fidelity of quantum operations.

9
Chapter 3
Laser-ion interactions
In this section, we will explore the internal structure of the 40Ca+ ion, which acts as the experimental workhorse of this thesis. With the use of lasers, we are able to perform a variety of essential experimental operations on the 40Ca+ ion. Accordingly, we continue the discussion with an overview of the basic laser-ion interactions required for control and measurement of an ion, such as ion state detection, cooling, and state manipulation.
3.1 Atomic structure of Calcium
3.1.1 40Ca+ production
We begin our discussion of the Ca atom by reviewing the experimental procedure for producing 40Ca+ ions. In brief, single 40Ca+ ions are produced by heating macroscopic granules of neutral Ca, causing sublimation of the Ca. The neutral Ca atoms generated in this way are then ionized with a set of localized lasers. The setup to achieve this is shown in Fig. 3.1. This apparatus is referred to as the Ca “oven”, composed of a stainless steel tube, which is open-ended on one side and filled with neutra-
l Ca granules. Importantly, a thin sheet of tantalum foil wraps around the oven tube. By running electrical current through the tantalum foil and oven tube, we generate ohmic heating of the system, and a spray of heated Ca atoms exits the open end of the tube. The full circuit is routed outside of the vacuum chamber via two metallic arms connected to the oven tube and tantalum foil. Typically, we run the Ca oven with 2 − 4 A, or 2 − 4 W. Higher powers generally lead to faster loading of 40Ca+ ions-
 in the trap, but one must take care not to overdrive the oven, as this may lead to accidental coating of the electrode surfaces or higher in-vacuum pressures, increasing collisions and leading to unstable trapping. When packing the tube with Ca, it is important to minimize exposure to atmosphere because the Ca granules oxidize within a couple hours in air. To generate 40Ca+ from the spray of neutral Ca atoms, we perform photoionization, which can be feasibly accomplished with one, two, or three p-
hoton processes [33]. Even

CHAPTER 3. LASER-ION INTERACTIONS 10
Figure 3.1: Schematic of the in-vacuum Ca oven. Two electrical leads receive external power to heat the oven tube in the region covered by tantalum foil. As the temperature rises in the tube, the Ca granules sublimate, and a spray of Ca atoms exits the open-ended oven tube. The path of a Ca atom upon exit is random and uncollimated, leading to a wide solid angle spray.
higher number photon processes may be conceived, but the resources required for such a task are not practical. We choose to work with the two-photon process because the onephoton process requires ultraviolet (UV) light near 203 nm, which is difficult to work with, and the three-photon process has a slower ionization rate. Starting with the 1S0 electronic ground state of 40Ca, 422 nm laser light excites the electron to the 1P1 excited state. Then laser light with energy greater than 391 nm light ex-
cites the electron into the continuum, releasing a single electron from the 40Ca atom. Typically, the 422 nm light is oriented perpendicular to the open-ended Ca tube so that Doppler shifts caused by the velocity of the spray of Ca atoms may be neglected.
3.1.2 40Ca+ energy levels
We are then left with singly ionized 40Ca+, which has one valence electron, and thus a hydrogen-like internal energy level structure with a nuclear spin of I = 0, meaning there is no hyperfine structure. Fig. 3.2 shows the five lowest energy levels of 40Ca+ along with the relevant transition wavelengths between states. The ground state, S1/2, has electric-dipole transitions to the P1/2 and P3/2 excited states as well as electric-quadrupole transitions to the D3/2 and D5/2 excited states. Of partic-
ular note is the S1/2 ↔ P1/2 transition at 397 nm combined with the P1/2 ↔ D3/2 transition at 866 nm. The manifold created by these three states is used for state detection, see Section 3.3, and Doppler cooling of the ion, see Section 3.4.1. Although the S1/2 ↔ P1/2 transition at 397 nm takes center stage in these operations, the addition of the 866 nm laser crucially maintains an effective cycling transition between the S1/2 and P1/2 states. Because P1/2 has a branching ratio of (P1/2 ↔ S1/2)/(P1-
/2 ↔ D3/2) = 14.54 [34], absence of the 866 nm laser results in optical pumping of the electronic population into the D3/2 state. The 866 nm light is required to repump population from D3/2 back to the P1/2 state, allowing us

CHAPTER 3. LASER-ION INTERACTIONS 11
Figure 3.2: Energy level structure of 40Ca+, with atomic states labeled as (2S+1)LJ . Colored arrows indicate the transition wavelengths between states relevant to the experimental work in this thesis. For completeness, grey arrows show additional transition wavelengths from the electronic ground state, S1/2.
to effectively neglect the D3/2 state in our analysis. Another important transition is the S1/2 ↔ D5/2 transition at 729 nm. Although it is dipole-forbidden, enough laser power will coherently drive S1/2 ↔ D5/2 as a quadrupole transition. This feature allows us to use the meta-stable D5/2 state, with a naturally long lifetime of 1.2 s [35], as the excited state of our optical qubit. A quick path to reset our qubit from the D5/2 state to the S1/2 state is through the D5/2 ↔ P3/2 transition at 854 n-
m, since the lifetime of the P3/2 state is 7.4 ns [36]. Thus, a combination of the 729 nm and 854 nm transitions forms a manifold for coherent state manipulation between the ground state, S1/2, and the excited state, D5/2.
3.1.3 Zeeman sub-levels
For states with non-zero electronic total angular momentum, J~, an externally applied magnetic field, B~ , will split the energy levels of the state due to the Zeeman effect. The energy shift of these Zeeman sub-levels is determined by
∆E = gJ μBmj|B~ |, (3.1)
where μB is the Bohr magneton, mj is the magnetic quantum number, and gJ is the Land ́e
g-factor given by gJ = 1 + J(J + 1) + S(S + 1) − L(L + 1)
2J(J + 1) (3.2)
where J is the total electronic angular momentum, L is the orbital angular momentum, and S is the spin angular momentum. In our experiments typically a magnetic field of 3 − 5 G

CHAPTER 3. LASER-ION INTERACTIONS 12
is applied, which results in energy shifts on the order of 1 MHz. These energy splittings become relevant in the S1/2 ↔ D5/2 transition, since the natural linewidth of this transition, ∼ 0.16 Hz, is much narrower than 1 MHz. The S1/2 state splits into 2 sub-levels while the D5/2 state splits into 6 sub-levels. Combined with the fact that electric quadrupole transitions allow only |∆mj| ≤ 2, we find that optical spectroscopy of the S1/2 ↔ D5/2 transition can result in 10 different transition lines.-
 In order to better approximate an ideal two-level atom, we may suppress excitation on some transitions with a combination of geometric interaction effects and optical pumping [36]. The interaction geometry can be parameterized by two angles: the angle between the laser beam propagation and the magnetic field, θ, and the angle between the laser beam polarization and the magnetic field vector projected into the plane of incidence, γ. For example, we may select only the ∆m = ±2 transitions by settin-
g θ = 90° and γ = 90° [36], leaving us with 4 transition lines. Furthermore, we may halve the allowable transitions by suppressing excitations from the S1/2(m = +1/2) state via optically pumping the population into the S1/2(m = −1/2) state such that only the S1/2(m = −1/2) ↔ D5/2(m = −5/2) and S1/2(m = −1/2) ↔ D5/2(m = +3/2) transitions remain. The frequency splitting between these two transitions is large, typically 30 − 40 MHz. Hence, for a single laser tone with frequency near one of the transi-
tions, we may approximate the resulting dynamics with a two-level system.
3.2 Coherent operations
In this section, we provide an analysis of the coherent dynamics of trapped ions interacting with laser light. The discussion is centered around the full trapped ion Hamiltonian, Hˆ ,
Hˆ = Hˆm + Hˆe + Hˆi (3.3)
where Hˆm is the trapped ion motional Hamiltonian, Hˆe is the internal electronic Hamilto
nian, and Hˆi represents the laser-ion interaction Hamiltonian. In addition, we offer some intuition behind the dynamics through approximations within the Hamiltonian and pedagogical examples.
3.2.1 Quantized ion motion
To being, an accurate understanding of the coherent dynamics and cooling process of ions requires a quantum-mechanical picture of their motion. With the help of various laser cooling techniques, see Section 3.4, the kinetic energy of trapped ions may be reduced to levels near their motional ground state. In this regime, the harmonic motion of the ions may be treated quantum-mechanically. In order to fully capture the quantum state of a trapped ion, we must account for these quantized motional stat-
es of the 40Ca+ ion in harmonic trapping potentials in addition to the internal electronic states from Section 3.1. Explicitly, the

CHAPTER 3. LASER-ION INTERACTIONS 13
motional Hamiltonian of the system takes the familiar form,
Hˆm =
∑
i
( pˆi
2m + 1
2 mω2
i xˆi) =
∑
i
ħωi(ˆa†
i aˆi + 1
2 ) (3.4)
aˆ†
i=
√ mωi
2ħ (xˆi − i
mωi
pˆi) , aˆi =
√ mωi
2ħ (xˆi + i
mωi
pˆi), (3.5)
where ˆa† and ˆa are, respectively, the creation and annihilation operators of the quantum harmonic oscillator.
3.2.2 Laser interactions with two-level atom
We continue our discussion under the assumption that the electronic energy levels of 40Ca+ may be treated as an effective two-level system on one of the S1/2 ↔ D5/2 transitions, with ground state |S〉 and excited state |D〉. As such, we take advantage of the the Pauli spin operators σz, σ+, and σ− to represent our system. The energy of the internal electronic
states is described by the Hamiltonian Hˆe,
Hˆe = ħν
2 σz, (3.6)
where ν is the atomic transition frequency between the |S〉 and |D〉 states. The excitation in the |S〉 ↔ |D〉 manifold may be controlled by laser light, where the one-dimensional electric-field of the laser light that addresses the transition is described by
E~ (x, t) = E ei(kx−νLt+φ) + E ∗e−i(kx−νLt+φ) (3.7)
where E is the magnitude of electromagnetic wave, νL is the frequency of the laser light, k is the wavenumber, and φ is the phase. The interaction of our two-level atom with a light-field is given by the Hamiltonian Hˆi = −dˆ· E~ , where dˆ = μ(σ+ + σ−) is the ion’s electric dipole moment with matrix element μ. In particular, interaction with a laser parameterized by Eq. (3.7) produces
Hˆi = ħΩR
2 (σ+ + σ−)(ei(kx−νLt+φ) + e−i(kx−νLt+φ)), (3.8)
where the coupling strength is defined by the Rabi frequency, ΩR = μE/ħ. The dynamics of the system can be best seen by transforming into the interaction picture with U = exp[−i(Hˆm + Hˆe)t/ħ], where our Hamiltonian becomes
HI = U †HiU = ħΩR
2 (σ+ei(kx−δt+φ) + σ−e−i(kx−δt+φ)) (3.9)
with δ = νL − ν. Note that we have applied the rotating-wave approximation in Eq. (3.9) because the rapidly oscillating terms, with frequencies νL + ν, have little effect on the timeevolution of the system, and can thus be neglected [37].

CHAPTER 3. LASER-ION INTERACTIONS 14
At this point, it is relevant to talk about the different length scales associated with the laser wavelength, λ, and ion spatial extent, x0. The Lamb-Dicke parameter, η, is defined to be the ratio between these two quantities,
η = 2πx0
λ = kx
√ħ
2mωt
=
√ ωR
ωt
, (3.10)
where kx = ~k · xˆ is projection of the laser onto the ion’s motion in the xˆ-direction. The last equality in Eq. (3.10) gives additional intuition about the Lamb-Dicke parameter as a function of the trap frequency, ωt, and the ion’s recoil energy, ωR = ħk2/2m, upon absorption or emission of a photon. Now using the equality kxx = η(a+a†), we can reformulate Eq. (3.9) as
HI = ħΩR
2 (eiη(aˆ+aˆ†)σ+e−i(δt−φ) + e−i(η(aˆ+aˆ†)σ−ei(δt−φ)), (3.11)
which will permit a better physical understanding of the dynamics in Section 3.2.3.
3.2.3 Lamb-Dicke regime
When the spatial extent of the atomic wavepacket is much smaller than the transition wavelength, we find ourselves in the Lamb-Dicke regime, defined by η2(2n + 1) 1. Our experiments are often run in this regime, with typical parameters of ωR ∼ 10 kHz and ωt ∼ MHz, resulting in a small parameter η ∼ 0.1. Hence, we can expand the Hamiltonian in Eq. (3.11) with the Taylor expansion
eiη(aˆ+aˆ†) ≈ 1 + iη(ˆa + ˆa†) + O(η), (3.12)
meaning that transitions which change the motional quanta by more than one are suppressed, and we arrive at the simplified Hamiltonian
HI = ħΩR
2 [(1 + iη(ˆa + ˆa†))σ+e−i(δt−φ) + (1 + iη(ˆa + ˆa†))σ−ei(δt−φ)]. (3.13)
In this regime, there are only three important resonances to consider. After setting φ = 0 for simplicity, the first resonance occurs for δ = 0, and is referred to as the carrier transition, which takes the form
Hcar = ħ
2 Ωcar[σ+ + σ−]. (3.14)
This Hamiltonian gives rise to |S, n〉 ↔ |D, n〉 transitions, with coupling strength described by the Rabi frequency, Ωcar. Although carrier transitions do not affect the ion motional states, the coupling strength is affected by the motional state of the ion. This effect to second order is Ωcar = ΩRLn(η2) ≈ ΩR(1 − η2n). (3.15)
This relationship physically arises from the perceived Doppler shift of the laser frequency from the ion’s frame. As the magnitude of the motion increases with increasing quantum

CHAPTER 3. LASER-ION INTERACTIONS 15
Figure 3.3: Simulated carrier Rabi flops with bare Rabi frequency Ω0 = 2π × 10 μs. The Rabi excitations for Fock states n = 0 (10/20) are shown in blue (orange/cyan)
number, n, the Doppler-induced detuning from the carrier transition increases as well, thus decreasing the coupling strength of the carrier transition. The second resonance occurs for δ = −ωt and is called the first red sideband transition, with a Hamiltonian of the form
Hrsb = ħ
2 ΩRη[ˆaσ+ + ˆa†σ−]. (3.16)
This Hamiltonian leads to |S, n〉 ↔ |D, n − 1〉 transitions, with coupling strength Ωrsb =
η√nΩR. This interaction removes one quantum of motion as the ion’s internal electronic state is excited, analogous to the Jaynes-Cumming Hamiltonian in Cavity QED. The third resonance is referred to as the first blue sideband transition and occurs for δ = ωt, with Hamiltonian
Hbsb = ħ
2 ΩRη[ˆa†σ+ + ˆaσ−], (3.17)
giving rise to transitions of the type |S, n〉 ↔ |D, n + 1〉, with Rabi frequency Ωbsb =
η√n + 1ΩR. Sometimes called the anti-Jaynes-Cummings Hamiltonian, this interaction adds one quantum of motion while also exciting the electronic state of the ion.
3.2.4 Coherent dynamics
At this stage, we are equipped to explore and visualize the time-evolution of the transitions described in Section 3.2.3. Starting with the carrier transition, we see the effect of varying the fock state manifold, which results in different Rabi frequencies. As shown in Fig. 3.3,

CHAPTER 3. LASER-ION INTERACTIONS 16
Figure 3.4: (Left) Simulated first-order red sideband Rabi flops with bare Rabi frequency Ω0 = 2π×10 μs. (Right) Simulated first-order blue sideband Rabi flops. The Rabi excitations for Fock states n = 0 (10/20) are shown in blue (orange/cyan). Note there is no red sideband excitation for the n = 0 Fock state.
an increase in |n〉 results in a weaker coupling strength for the |S, n〉 ↔ |D, n〉 transition, as expected from Eq. (3.15). The coupling strength of the sideband transitions exhibit the opposite behavior with changing |n〉, and actually increase with increasing |n〉. This trend can be seen in Fig. 3.4, where Fig. 3.4(left) shows the time-evolution of the first-order red sideband for |n〉 = 0, 10, and 20, and Fig. 3.4(right) shows the time-evolution of the first-order blue sideband for the same |n〉 sequ-
ence.
3.3 State detection
Following an analysis of the theory behind coherent operations with a two-level ion, it is appropriate to describe an experimental method of measuring the 40Ca+ ion state. In order to probe whether an ion is in the |S〉 ground state or the |D〉 excited state, we employ the electron shelving technique. By driving the S1/2 ↔ P1/2 transition with a laser near 397 nm, we project the ion into one of two states in the subspace |S〉 , |D〉. If the ion is in the |S〉 state, it will fluoresce from photon scatte-
ring on the S1/2 ↔ P1/2 transition. Conversely, if the ion is in the |D〉 state, it will appear dark, as 397 nm light does not excite any transitions and thus no photons are scattered. We collect the scattered photons into a photomultiplier tube (PMT) and gather statistics on the number of collected photons following each experiment. The resulting data for 100 realizations of the same quantum state is shown in Fig. 3.5, where we have collected photons

CHAPTER 3. LASER-ION INTERACTIONS 17
Figure 3.5: Normalized state readout histogram of 100 experiments with 2 ms exposure time on a PMT in kiloCounts. The dashed red line designates a threshold which separates the readout counts of bright and dark states. Overlaid are energy level diagrams and transitions for readout of an ion in the bright state, |S〉 (left) and in the dark state, |D〉 (right).
in the PMT for 2 ms after each realization. The particular state represented in Fig. 3.5 is a superposition of |S〉 and |D〉, |ψ〉 = |α|2 |S〉 + |β|2 |D〉. The values of |α|2 and |β|2 may be extracted from the readout counts associated with bright |S〉 and dark |D〉 states, respectively, where the distinction between the two states is set by a threshold on the number of collected photons, designated by the red dashed line in Fig. 3.5. In practice, the threshold state discrimination is a sufficient method-
, but we note that a more thorough analysis of α and β may be performed with fits of the histograms to Poisson distributions [36].
3.4 Laser cooling
3.4.1 Doppler cooling
Conceptually, the physics of Doppler cooling is centered on the Doppler effect and may be naively explained with energy conservation. To illustrate this, let us consider a single cycle in the Doppler cooling process. We begin with a laser, red-detuned from an atomic dipole transition and directed onto a trapped ion in harmonic motion. As the ion moves toward the laser light, it may absorb a red-detuned photon, since, in the ion’s frame of reference, the Doppler effect shifts the photon frequency o-
nto resonance with the atomic transition. Successively, a photon resonant with the atomic transition is spontaneously emitted, resulting in a net loss of energy from the ion. Using a more analytical approach, we can understand Doppler cooling with a semiclassical picture of the atomic motion, which includes dissipative forces induced by laser

CHAPTER 3. LASER-ION INTERACTIONS 18
light and momentum fluctuations caused by spontaneous emission. Qualitatively, we expect to reach a motional equilibrium once the viscous Doppler laser cooling rate equals the spontaneous emission heating rate. Quantitatively, we may determine this equilibrium Doppler cooling temperature limit using the Einstein relation for a one-dimensional system,
D = mηkBT (3.18)
where D is the diffusion constant from the diffusion model for Brownian motion, η is the friction coefficient associated with the viscous (velocity dependent) force exerted by the laser on the ion, kB is the Boltzmann constant, and T is the temperature associated with the ion motion, see Section 3.4.2 for details. For the calculation, we treat the S1/2 ↔ P1/2 transition of our ion as a two-level system, with S1/2 as the ground state, |g〉, and P1/2 as the excited state, |e〉. Let us begin by derivin-
g η from the average force exerted on an ion by laser light with frequency ωL. This force is calculated by the average rate of momentum change [1],
〈Fˆ〉 = 〈 dp
dt 〉 = ħ~kΓρee = ħ~kRopt (3.19)
where ħ~k is the momentum kick imparted by the laser, Γ is the linewidth of the atomic transition, ρee is the probability of finding the ion in the excited state, and Ropt is the rate of optical pumping analogous to the spontaneous emission rate,
Ropt = Γ|ΩR|2
(Γ/2)2 + (δ − ~k · ~v)2 , (3.20)
where the Rabi frequency, ΩR = d~ · E~ /ħ, is dependent on the atomic dipole d~ and the laser
electric-field E~ , and δ = ωL − ω is the laser detuning referenced to the atomic transition frequency. Eq. (3.19) holds only in the weak laser-field limit, Ω2
R Γ2, where the force is not dominated by a radiatively broadened transition. In the case of a cold ion, we can expand the force in Eq. (3.19) for small velocities, ~k · ~v 1, to obtain
〈Fˆ〉 ≈ ħ~kRv=0
opt
(
1 + 2δ~k · ~v
(Γ/2)2 + δ2
)
. (3.21)
The first term of Eq. (3.21) is a velocity-independent momentum kick which does not contribute to the cooling rate [1]. The second term of Eq. (3.21) provides a velocity-dependent
cooling force, which may be parameterized as F~ = ηm~v with η defined to be the friction coefficient,
η = 2Rv=0
opt
m
ħk2δ
(Γ/2)2 + δ2 . (3.22)
Our analysis continues with a calculation of the diffusion constant, D, under the HeisenbergLangevin formalism. D describes the natural heating caused by spontaneous emission and is

CHAPTER 3. LASER-ION INTERACTIONS 19
defined to be the autocorrelation function of δFˆ(t), defined as the fluctuating force resulting from Brownian motion of the ion,
2Dδ(t − t′) = 〈δFˆ(t)δFˆ(t′)†〉. (3.23)
To understand δFˆ(t), we start with the full force exerted on an ion by a plane-wave laser, ΩReikx,
Fˆ = iħkΩ∗
Rσˆge − iħkΩRσˆeg = 〈Fˆ〉 + δFˆ, (3.24)
where σˆge = |g〉 〈e|. We decompose the full force into an average force, 〈Fˆ〉, along with
fluctuations around the mean, δFˆ. To find σˆge, we look to the Heisenberg-Langevin equation,
dσˆge
dt = i
ħ [HˆLI , σˆge] −
(Γ
2 + iδ
)
σˆge + (σˆee − σˆgg)fˆ(t) (3.25)
where fˆ(t) is a stochastic force which follows properties of the Langevin noise term, i.e. 〈fˆ(t)〉 = 0 and 〈fˆ(t)fˆ(t′)†〉 = δ(t − t′), and the Hamiltonian for the laser-ion interaction is given by HˆLI = −ħΩ∗
Rσˆge − ħΩRσˆeg (3.26)
Since we are interested in times near equilibrium, we care only about processes much slower than Γ, meaning we may approximate dσˆge
dt ≈ 0 in solving for σˆge,
σˆge = (σˆee − σˆgg)fˆ(t)
Γ/2 + iδ + i
ħ(Γ/2 + iδ) [HˆLI, σˆge]. (3.27)
As we insert σˆge into Eq. (3.24), notice that only the fluctuating terms with fˆ(t) contribute
to the fluctuating force, δFˆ(t),
δFˆ(t) = iħkΩ∗
R
(σˆee − σˆgg)fˆ(t)
Γ/2 + iδ − iħkΩR
(σˆee − σˆgg)fˆ(t)†
Γ/2 − iδ . (3.28)
Finally, we may calculate the autocorrelation function of the fluctuating force as
〈δFˆ(t)δFˆ(t′)†〉 = (ħk)2 2Γ|ΩR|2
(Γ/2)2 + δ2 δ(t − t′), (3.29)
and derive a diffusion constant given by
D = (ħk)2 Γ|ΩR|2
(Γ/2)2 + δ2 = (ħk)2Rv=0
opt . (3.30)
With η the friction coefficient from Eq. (3.22), calculated assuming small laser power, and D the diffusion constant from Eq. (3.30), we may solve the Einstein relation for the equilibrium temperature, kBT = ħ((Γ/2)2 + δ2)
2δ . (3.31)

CHAPTER 3. LASER-ION INTERACTIONS 20
Note that the temperature is minimized when δ = Γ/2, giving an optimized equilibrium temperature dependent only on the linewidth of the excited state. Consequently the Doppler cooling limit is given by
kBT = ħΓ
2 . (3.32)
We may expand our one-dimensional analysis above to a generalized geometry by following the work from Leibfried et al. [1] and Stenholm [38] to arrive at a weak-field Doppler cooling temperature limit,
kBT = ħΓ
4 (1 + ξ), (3.33)
with geometry factor ξ. In the one-dimensional case, where the spontaneously emitted photons may only point directly towards or away from the laser beam propagation, ξ = 1, and Eq. (3.33) matches Eq. (3.32). In the more realistic case, photons may be emitted isotropically into 3-D space, which effectively slows the momentum diffusion in the laser cooling direction. Such an effect may be accounted for by setting the geometrical factor ξ = 2/5.
3.4.2 Temperature
Of course, as the motional states of ions are quantized, it does not make sense to assign a temperature to a single realization of the ion motion. Instead, it is more accurate to say that the measurement of ion temperature requires an accrual of statistics on the ion’s number state, Nˆ . Then from that information, we extract an average occupation of the the motional quantum number,  ̄n. Assuming the ion is in a thermal state, i.e. at thermal equilibrium, we can then interpret a temperature, T fro-
m this n ̄ measurement. We know that when an ion is at thermal equilibrium with an external bath of temperature, T , the distribution of its motional states, |n〉, is proportional to the Boltzmann factor, e−nħω/kBT . This allows us to relate temperature, T , and the mean motional occupation,  ̄n,
kBT = ħωt
ln ( n ̄+1
n ̄ ) . (3.34)
At this juncture, it may be helpful to provide some sense of the temperatures we will be dealing with in this thesis. The S1/2 ↔ P1/2 transition has a linewidth of roughly 20 MHz, meaning our final Doppler cooled ions reach T ≈ 0.3 mK. From Eq. (3.34), we see that this temperature corresponds to average occupations of n ̄ = 6 quanta, as we typically operate our traps with ωt = 1 MHz.
3.4.3 Resolved-sideband cooling
The Doppler cooling temperature limit makes intuitive sense. However, there are quite a few techniques, aptly termed sub-Doppler cooling, that provide cooling beyond the Doppler

CHAPTER 3. LASER-ION INTERACTIONS 21
Figure 3.6: Relevant sideband cooling energy levels and transitions. Solid arrows indicate driven transitions, and squiggly arrows indicate spontaneous decay. The cooling process can be followed from right to left, ending at |S, n = 0〉, where the 729 nm light is no longer resonant with a motional transition.
limit by taking advantage of the internal energy level structure of ions. One such scheme is resolved-sideband cooling. As the name suggests, this method works in the regime where the effective linewidth of the electronic transition, Γ, is narrower than the motional trap frequency, ωt. In addition to the Γ ωt requirement, it is also beneficial for the ion to start in the Lamb-Dicke regime, η2(2 ̄n + 1) 1, as this promotes the ion to predominantly decay on the carrier transition, preventing unwante-
d transitions to different motional states during spontaneous emission. Because of this, sideband cooling is usually performed after an initial Doppler cooling step, which initializes the ion into the Lamb-Dicke regime. From Section 3.2.3, we have seen that sideband transitions can change the motional state of the ion. We can take advantage of these transitions to cool the ion to its motional ground state. The scheme for resolved-sideband cooling is shown in Fig. 3.6, where we have ignored the eff-
ects of heating. The process starts with an ion in the |S, n〉 state; then a π-pulse first-order red sideband transition is applied with a laser frequency of ωl = ν − ωt, where ν is the S1/2 ↔ D5/2 atomic transition. This operation brings the ion into the |D, n − 1〉 state. From there, an 854 nm light then excites the ion into the P3/2 state, where it quickly decays back to the |S, n − 1〉, thus completing a cycle of sideband cooling. At the end of a single cycle, we have reduced the motional state o-
f the ion by one quanta. Successive cycles of sideband cooling will eventually bring the ion into the motional ground state, |S, 0〉. From here, there are no longer any transitions at the laser frequency, ωl, allowing the population to accumulate into the |S, 0〉 state.

CHAPTER 3. LASER-ION INTERACTIONS 22
3.5 Temperature measurement
From Sec. 3.4.2, we saw that the temperature can be described by an average occupation of motional states,  ̄n, assuming a thermal distribution. In this section we will provide background on how to experimentally measure n ̄ of an ion.
3.5.1 Sideband spectroscopy
The first method for measuring n ̄ takes advantage of resolved sidebands in the Lamb-Dicke regime. With the proper laser detuning, δ, we can drive red sideband transitions and blue sideband transitions as described in Eq. (3.16) and Eq. (3.17), respectively. Then the timeevolution of the excitation probabilities when driving these sidebands is given by
P rsb
D (t) = 1
2(1 −
∞
∑
n=1
Pn cos(2Ωn,n−1t)) =
∞
∑
n=1
Pn sin2(Ωn,n−1t), (3.35)
P bsb
D (t) = 1
2 (1 −
∞
∑
n=0
Pn cos(2Ωn,n+1t)) =
∞
∑
n=0
Pn sin2(Ωn,n+1t), (3.36)
where Pn is the occupation probability of the motional state |n〉 at time t = 0. Assuming a thermal distribution of motional states, we know that Pn is given by [39, 40]
Pn =  ̄nn
( ̄n + 1)n+1 . (3.37)
Now for any time, t, we can compare the populations of the red and blue sidebands with the ratio
P rsb
D (t)
P bsb
D (t) =
∞
∑
n=1
n ̄n
(n ̄+1)n+1 sin2(Ωn,n−1t)
∞
∑
n=0
n ̄n
(n ̄+1)n+1 sin2(Ωn,n+1t)
=
( n ̄
n ̄+1 )
∞
∑
n=0
n ̄n
(n ̄+1)n+1 sin2(Ωn+1,nt)
∞
∑
n=0
n ̄n
(n ̄+1)n+1 sin2(Ωn,n+1t)
=  ̄n
 ̄n + 1 . (3.38)
From this, we can see that a measurement of n ̄ consists of measuring the ratio between the on-resonant excitation probabilities of the red and blue sidebands [41],
 ̄n = R
1 − R , R = P rsb
D (t)
P bsb
D (t) . (3.39)
Experimentally, we perform this measurement by probing the excitation probability as a function of frequency, centered around the sidebands ν ± ωt. An example of temperature measurement via sideband spectroscopy is shown in Fig. 3.7, where we plot the red and blue sideband spectra for various ion tempartures. We extract the on-resonant (peak) excitation of both red and blue sideband transitions with Gaussian fits, and then take the appropriate

CHAPTER 3. LASER-ION INTERACTIONS 23
Figure 3.7: Demonstration of temperature measurement using sideband spectroscopy for thermal states with  ̄n = 0.12, 0.30, and 0.63 shown in blue, orange, and cyan, respectively. The left (right) panel displays the red (blue) sideband excitation probability as a function of the laser detuning from ν − ωt (ν + ωt). Data is taken near the pi-time of the first order sideband Rabi flops, with solid lines as Gaussian fits to the data. From the peak values of the fit, the mean motional occupation,  ̄n, -
for each data set is calculated at 2π × 1 MHz trap frequency. Error bars are based on binomial statistics for 100 measurement repetitions and represent one standard deviation uncertainty.
ratio to calculate tempratures of  ̄n = 0.12, 0.30, and 0.63. The asymmetry of the sideband excitations is largest when the ion is near the motional ground state. As n ̄ increases, both red and blue sidebands tend towards peak excitation probabilities of 0.5. Although this method is commonly used and fairly easy to measure, there are a few considerations to take into account. The first is that this method becomes insensitive when  ̄n exceeds ∼ 2 quanta [6]. For larger  ̄n, statistical errors (typi-
cally 10% for 100 repeated experiments) on the extracted P rsb
D and P bsb
D values imply unphysical values of the ratio
P rsb
D /P bsb
D , which must be lower than 1 for a thermal state. Any measurements of  ̄n & 2 should be performed with alternate methods. Secondly, we can see from Eq. (3.38) that the ratio is independent of the pulse length, t, but that does not mean the pulse length is unimportant. For the best signal to noise ratio, the pulse length should be set near or slightly before the π-time of the blue sideband transition, i.e. the first maximum of the Rabi oscillation [1]. Lastly, this method assumes a thermal distri-
bution for the ion motional states. Consequently, this ratio method will give inaccurate results if the ion is in a nonthermal state, whether accidentally [42, 43] or purposely. One method for measuring higher  ̄n values is to use higher-order sidebands. The general idea is similar to the first-order sideband case discussed above, but now generalized for the

CHAPTER 3. LASER-ION INTERACTIONS 24
Figure 3.8: Simulated carrier Rabi flops of thermal states with  ̄n = 10, 50, and 250 shown in blue, orange, and cyan, respectively. The bare Rabi frequency of all the simulations is set to, Ω0 = 2π × 10 μs. Heuristically, increasing  ̄n results in a slower effective Rabi frequency and a faster perceived contrast decay.
k-th order sidebands,
P rsbk
D (t)
P bsbk
D (t) =
(  ̄n
n ̄ + 1
)k
. (3.40)
This method is sensitive to  ̄n ∼ k [7].
3.5.2 Rabi oscillations
We can also extract n ̄ from the time-domain by analyzing Rabi flops at fixed detunings. Let us focus first on the carrier Rabi oscillations, with time-dependent excitation described by
P car
D (t) =
∞
∑
n=0
Pn sin2(Ωcart). (3.41)
where Pn for a thermal state is given by Eq. (3.37), and Ωcar is a state-dependent Rabi frequency which follows Eq. (3.15). To help visualize the carrier transition time-evolution, we show simulated Rabi flops of thermal states, with n ̄ = 10, 50, and 250, in Fig. 3.8. Qualitatively, we see a decay of contrast over time, which is caused by the dephasing of the Rabi flops for various |n〉 fock states that compose the thermal state. Due to this effect, ions with larger  ̄n will exhibit faster contras-
t decay, shown in Fig. 3.8, as they have a larger spread in their harmonic oscillator quantum number. Quantitatively, we can extract n ̄ from a fit to the carrier Rabi flop. An interesting note is that in the absence of other decoherence

CHAPTER 3. LASER-ION INTERACTIONS 25
Figure 3.9: (Left) Simulated first-order red sideband Rabi flops plotted for n ̄ = 1, 10, and 50 in blue, orange, and cyan, respectively. (Right) Simulated first-order blue sideband Rabi flops also for n ̄ = 1, 10, and 50 in blue, orange, and cyan, respectively. All simulations use Ω0 = 2π × 10 μs. In contrast to the carrier Rabi flops, the effective sideband oscillations quicken with increasing n ̄.
sources, there will be a revival of the carrier Rabi flop contrast if we probe for long enough times. Following the same logic, we can also utilize sideband excitation flops to fit for  ̄n. Fig. 3.9 shows the time-evolution of first-order red sideband (left) and first-order blue sideband (right) excitations for various n ̄ values. To generate accurate fits of these sideband excitations, it is essential to possess prior knowledge of the bare Rabi frequency, ΩR. Thus in practice, we first perform ca-
rrier excitation fits to extract ΩR. In general, the method of analyzing Rabi oscillations is sensitive to larger  ̄n than the sideband asymmetry method described in Section 3.5.1. Of course, this technique also has limitations. When n ̄ & 500 quanta, the carrier transition rapidly dephases, leaving little information to be extracted from the dynamics. So in the case of large  ̄n, it is prudent to probe higher-order sideband transitions. In addition, the time-evolution of sideband transitions is m-
ore appropriate for characterizing the motional occupation of non-thermal states, as the Rabi frequency spread has a smaller dependence on n. The Rabi flop method we have discussed is most accurate when the laser is well aligned with a single ion motional mode. When the laser has projection onto other motional modes, Eq. (3.41) must be modified to include the effects of those modes. Specifically, the carrier Rabi frequency from Eq. (3.15) becomes [5]
Ωcar ≈ ΩR
∏
s
(1 − η2
s ns), (3.42)
where s denotes the motional modes. We must account for these additional parameters in

CHAPTER 3. LASER-ION INTERACTIONS 26
our fit of Eq. (3.41) to generate accurate measurements of the temperature.

27
Chapter 4
Four-RF-electrode (elevator) trap
In this chapter, we introduce a novel surface trap design, the four-RF-electrode trap, which we colloquially term the “elevator” trap. This trap design features RF fields that provide confinement in the trap plane, but cancel along the vertical axis which is perpendicular to the trap surface. The ion trapping height and vertical potential are fully controlled with DC fields, simplifying vertical shuttling, hence the “elevator” moniker, and allowing for trapping of vertical ion strings. With this d-
esign, we have demonstrated trapping at heights ranging from 50 to 300 μm above the trap surface. We also discuss potential applications of the trap design in quantum control, such as moving ions in and out of control fields [44], and electric field sensing [8, 9].
4.1 Trap design
Our trap design takes inspiration from the cross-sectional cut of a conventional four-rod Paul trap [16]. Fig. 4.1 shows a false-color photograph of the trap we fabricated and used in this thesis. Four RF electrodes measuring 290 × 290 μm2 each are centered on the corners of a 560 × 560 μm2 square while nine DC electrodes are sized and positioned to optimize control of static dipole and quadrupole fields. All other areas on the chip are grounded. Further details of the trap fabrication are outline-
 in Section 5.1.2.
4.1.1 Trapping modes
The elevator trap can be operated in two configurations: as a point trap or as a vertical-linear trap.
Point trap configuration
In the point trap configuration, all four RF electrodes are driven with the same amplitude and phase, generating three-dimensional RF confinement with a single RF-null trapping point. The position of the RF null is independent of the magnitude of RF drive and dependent only

CHAPTER 4. FOUR-RF-ELECTRODE (ELEVATOR) TRAP 28
Figure 4.1: False-color microscope image of the microfabricated elevator trap. Static voltages are applied to electrodes labeled DC, and oscillating voltages are applied to RF electrodes, labeled as RF± according to the signal phase.
on the geometry of the electrodes. Fig. 4.2 shows the equipotential lines of the pseudopotential in this configuration with applied RF voltage of 100 Vpp. From these simulations, we see that this point trap configuration has an RF null point, i.e. trapping height, located 245 μm above the center of the trap. As the three-dimensional trapping is completely set by the RF fields, the principal axes of oscillation are composed of the vertical zˆ-axis and two other axes which are inherently degenerate -
in the xy-plane. We apply quadrupole DC fields to break this degeneracy and set the orientation of the planar principal axes along the xˆ-axis and yˆ-axis. With an RF drive frequency of ΩRF = 2π × 20 MHz and applied voltage of 100 Vpp, we expect trap frequencies of ωx, ωy = 2π × 292 kHz and ωz = 2π × 597 kHz. Experimentally, the main purpose of ion measurements in the point trap was to demonstrate the validity of our electric-field simulations. Additionally, trapping in this configuration gave us -
confidence that the entirety of the physical trapped ion system functioned properly, including the RF and DC electronics and connections, optics paths, vacuum system, and control software.
Vertical-linear configuration
In the vertical-linear configuration, we employ an out-of-phase RF drive where one diagonal pair of RF electrodes (RF+) is driven with a sinusoidal voltage, while the other diagonal pair (RF−) is driven with a voltage of the same amplitude, but opposite phase. This drive is physically realized with a λ/2 resonator detailed in Section 5.3.3. The out-of-phase RF drive of the vertical-linear trap produces an effective potential, or pseudopotential [1], originating from time-averaged RF fields, as sho-
wn in Fig. 4.3. The

CHAPTER 4. FOUR-RF-ELECTRODE (ELEVATOR) TRAP 29
Figure 4.2: (Left) Top-down view of xy-plane RF pseudopotentials at a height of z = 245 μm, with electrode geometry shown for reference. The RF electrodes, shown in red, are driven with signals of equivalent amplitude and phase. The DC electrodes are shown in grey. (Right) Side view of RF pseudopotentials. The grey dashed lines in (left) and (right) denote the position of the cross-sectional slice in (right) and (left), respectively.
calculation of the potential assumes a strictly two-dimensional trap geometry, which can be solved analytically [45] taking into account each electrode’s solid-angle with respect to the ion location. Our simulations assume an RF drive frequency Ωrf = 2π×18 MHz and a peak-peak voltage Vpp = 200 V. Panel (left) in Fig. 4.3 displays the RF pseudopotential lines in the xy-plane at a height of 175 μm, showing quadrupole confinement with an RF null at the trap center, x = y = 0. The trap design is shown-
 in the background for reference. Fig. 6.1 (right) shows a cross-section of the pseudopotential in the plane defined by the dashed grey line in panel (left) and the vertical z-axis. Due to the symmetry of the RFelectrode pairs, the RF fields fully cancel along the vertical z-axis at x = y = 0, creating an RF-null axis perpendicular to the surface. Confinement in this direction can be achieved with DC potentials, which allows tuning of the trapping location along the vertical axis without introduci-
ng excess micromotion.
4.2 Trap operation
We operate the trap in an ultra-high vacuum chamber at a pressure < 1 × 10−10 mbar. An RF voltage at a frequency of ΩRF = 2π×18.1 MHz is generated with a signal generator (Rohde & Schwartz SMB 100A), amplified (mini-circuits ZHL-5W-1) and applied to the RF electrodes through an inductively coupled toroidal half-wave resonator. A beam of calcium

CHAPTER 4. FOUR-RF-ELECTRODE (ELEVATOR) TRAP 30
Figure 4.3: (Left) Top-down view of xy-plane RF pseudopotentials at a height of z = 175 μm, with electrode geometry shown for reference. The green RF electrodes are driven out-ofphase with respect to the red RF electrodes. (Right) Side view of RF potentials. The grey dashed lines in (left), (right) denote the position of the cross-sectional slice in (right), (left), respectively.
atoms is propagated through the trapping region from a resistively heated oven filled with macro-granules of calcium (Ca). Neutral 40Ca atoms are selectively ionized in a two-step process using laser light at 422 and 375 nm, see Section 3.1.1. A pair of red-detuned 397-nm and 866-nm beams addresses the λ-system consisting of the electronic states S1/2 − P1/2 − D3/2 and cools the ion motion. Ion fluorescence at 397 nm is detected by a photomultiplier tube and used for determining whether the ion is-
 in the S1/2 or the D5/2 state, see Section 3.3. In order to cool the planar motional mode, the 397-nm beam propagates in the plane parallel to the trap surface. Concurrently, the vertical motional mode is cooled with the near-vertical 866-nm beam. A 729-nm beam, which addresses the dipoleforbidden transition S1/2 − D5/2 connecting our qubit states, is used for ion spectroscopy and sideband cooling. It can be switched between two propagation directions, one in the trap plane and one vertical to th-
e trap surface. With this configuration, we have demonstrated trapping of single ions at heights between 50 μm and 300 μm. The experimentally limiting factor for operation at both extremes is the high voltage required on the RF electrodes. At low trapping heights the trap harmonicity also decreases, resulting in ion lifetimes decreasing from several hours at 110 μm height to several minutes at 50 μm for the same secular frequencies. Typical secular trap frequencies range from ωz = 2π × 0.4 MHz to -
2π × 1.2 MHz and ωx, ωy = 2π × 0.6 MHz to 2π × 2.0 MHz. The degeneracy between the two planar modes is lifted by applying a suitable DC quadrupole, resulting in a typical splitting of |ωx − ωy|/ωx ∼ 0.1. Additionally, changing

CHAPTER 4. FOUR-RF-ELECTRODE (ELEVATOR) TRAP 31
(V)
(μm)
√ (√mW)
100 200 300
Figure 4.4: RF voltages required to achieve a planar secular frequency of 2π × 1 MHz as a function of the ion height. The grey band indicates the simulated voltages for vertical tilt angles of 0° (lower limit) and 4° (upper limit). Red dots show the square root of the power output from the rf signal generator applied to the rf resonator-trap system. Error bars correspond to one s.d. uncertainty in the ion height.
the DC quadrupole values also controls the orientation of the principal axes [46]. This ability is important as it allows us to slightly tilt the vertical mode into the trap plane, thus creating non-zero projection with the in-plane 397-nm laser which improves cooling of the near-vertical mode. Voltages on the DC electrodes are typically on the order of a few volts at intermediate trapping heights and increase to greater than 10 V for lower heights close to 50 μm and higher heights close to 300 μm-
.
4.2.1 RF drive
While there is no RF confinement along the vertical axis, the RF field strength in the plane of the trap surface depends on the distance to the surface. This effect can be seen in Fig. 4.3(right) where the equipotential lines are closest together around 110-μm height. Experimentally, we observe this dependence by trapping a single ion at various ion-electrode distances and comparing the RF-voltage needed to create a planar confinement corresponding to a fixed secular frequency, 2π × 1 MHz in this -
case. Data and simulation of our applied RF voltage and power are displayed in Fig. 4.4. The grey shaded region indicates the simulated RF voltage amplitude, with the lower and upper limits determined by a vertical tilt angle of 0° and 4°, respectively, which are typical parameters in our measurements. The data points

CHAPTER 4. FOUR-RF-ELECTRODE (ELEVATOR) TRAP 32
(red dots) show the square root of the power output from the RF signal generator, which is routed, via the amplifier, to the RF resonator-trap system. The ion trapping height is determined experimentally by maximizing ion fluorescence in the vertical direction and then translating the ∼ 5-μm wide 397-nm beam until it scatters from the center of the trap, taking care to avoid backlash of the motorized translation stage. The uncertainty in the ion-surface distance is estimated at ±1.5 μm, given by t-
he precision of repeated measurements. Overall, data and simulation agree well.
4.2.2 DC multipoles
Up to now, we have focused on the details of trapping via RF fields in the elevator trap, but without the DC fields, we cannot encompass the full three-dimensional trapping scheme. Here, we expand upon the requirements of the static DC fields and their importance in trapped ion operation. For instance, operation of the elevator trap in the out-of-phase configuration leads to cancellation of RF fields along the central vertical axis, where confinement must be established via DC fields. Additionally-
, static fields are used for electric dipole compensation and electric quadrupole tuning. The former allows for compensation of micromotion induced by stray electric-fields; the latter enables simple fine tuning of the trap frequencies and principle axes.
DC multipole expansion
First, we must understand the relation between DC fields and the harmonic part of the trapping potential. The approximate static-field solution to Laplace’s equation in Cartesian coordinates, is given by the potential
ΦDC(x, y, z) ≈ − Ex · (x) − Ey · (y) − Ez · (z)
+ U1 ·
( x2 − y2
2
)
+ U2 ·
( 2z2 − x2 − y2
2
)
+ U3 ·
( xy
2
)
+ U4 ·
(yz
2
)
+ U5 ·
( xz
2
)
+ O(r3).
(4.1)
This decomposition is derived from the spherical harmonics expansion of the potential up to l = 2 [47], where l is the polynomial degree of the spatial coordinates. There are 3 electric dipole terms with coefficients Ex, Ey, and Ez, which we choose to have units of V/mm, along with 5 electric quadrupole terms with coefficients, U1, U2, U3, U4, and U5, that are chosen to have units of V/mm2. Together, these 8 coefficients are termed as the multipole coefficients of the expanded potential. Intuition-
 on the functionality of these multipoles may be gleaned by looking at example use cases. The Ex, Ey, and Ez are mainly used to move the ion position in x, y, and z, respectively. With these controls, we can shift the ion into the RF null of the trap, leading to a reduction in micromotion. The U1 and U3 terms generate different couplings between the radial modes, including the ability to alter radial trap frequencies, avoiding degeneracies,

CHAPTER 4. FOUR-RF-ELECTRODE (ELEVATOR) TRAP 33
Figure 4.5: DC voltages required to establish 2π × 1 MHz trap frequency in the vertical direction. The results of two control schemes are shown. The first scheme, shown in orange, applies full control of all 8 multipoles with l ≤ 2 of the DC potential, see Eq. (4.1). Explicitly, U2 = 8.18 V/mm2 and all other multipoles are set to zero. The solid line represents the largest voltage applied to any of the DC electrodes, the dashed represents the average of all DC voltages. The second scheme, shown in-
 cyan, relinquishes control of the U4 multipole. This leads to a reduction in both the maximum single electrode voltage (solid line) and the average voltage across the electrodes (dashed line).
and rotating the principal axes in the radial xy-plane. U2 is the sole multipole that can set a confining potential in the axial, z, direction. And finally, U4 and U5 both provide the ability to ‘tilt’ the principal axes away from the standard xyz-basis, along either the yz or xz planes, respectively.
DC voltage limits
As a design concept, it is important to discern the limits of the DC field control in our elevator trap system. The DC voltages are generated with a multi-stage digital-to-analog converter (DAC) system, which takes digital input from an FPGA and converts to analog voltages with DAC chips, which have (−10, 10) V range. As we occasionally require voltages larger than ±10 V, the DAC output feeds into an amplifier board that expands the range to (−40, 40) V. Under normal operation, the elevator trap h-
as access to 9 DC electrodes, properly positioned to independently manipulate the 8 DC multipoles, i.e. up to quadratic terms in the potential. Unfortunately, electrode ‘18’ was burnt during the assembly process, see Section 5.2.1, and we were forced to short this electrode directly to the trap ground, leaving us with 8 controllable DC electrodes.

CHAPTER 4. FOUR-RF-ELECTRODE (ELEVATOR) TRAP 34
Figure 4.6: Demonstration of ground state cooling of vertical and planar modes at a trapping height of 114 μm. The left (right) panel displays the red (blue) sideband excitation probability. Data for the vertical (planar) mode are shown as blue squares (orange circles), solid lines are Gaussian fits to the data. The mean phonon numbers for the planar and vertical modes are 0.17(3) and 0.20(3) quanta at 2π × 1 MHz, respectively. Error bars are based on binomial statistics for 100 measurement repeti-
tions and represent one s.d. uncertainty.
Technically, the 8 remaining DC electrodes provide enough degrees of freedom to fully control the 8 static multipoles. However, achieving modest trap frequencies of 2π × 1 MHz requires voltages exceeding the ±40 V limit imposed by the DAC outputs. Rather than attempt to implement additional amplifier stages to the DAC, which may add noise, we instead release control of the U4 multipole, which is largely affected by electrode ‘18’. This multipole is relatively unimportant for our experimental measu-
rements. With U4 allowed to run free, the overall magnitude of the electrode voltages is reduced to workable conditions. Fig. 4.5 shows the effect of toggling U4 as a controlled or free parameter. When controlled, the full multipole set is given by U2 = 8.18 V/mm2, with all other multipoles tuned to zero. In this scheme, trapping ions at heights above 250 μm require individual electrode voltages exceeding the 40 V threshold achievable with our DAC amplifier setup. We find a resolution to this dile-
mma by setting the U4 multipole as a free parameter. The result is an order of magnitude reduction in the voltage on all electrodes, allowing us to establish vertical trap frequencies of up to 2π × 2 MHz even at the extreme trapping height of 300 μm.

CHAPTER 4. FOUR-RF-ELECTRODE (ELEVATOR) TRAP 35
4.2.3 Ground state cooling
Finally, we demonstrate ground state cooling of the ion’s motion in this four-rf-electrode trap which is relevant for sensing and high-fidelity quantum control applications. Both vertical and planar motional modes are of interest for future experiments, so we perform two sets of measurements, one for the planar modes and, switching the direction of the 729nm laser to be perpendicular to the trap surface, one for the vertical mode. We operate at a trapping height of 114 μm and tune the secular freq-
uency to ∼ 2π × 1 MHz in both cases. During the cooling sequence we Doppler-cool on the S1/2 − P1/2 transition for 2 ms, then perform sideband-cooling using the first-order secular sideband of our qubit transition for six 1-ms cycles. A measurement of the ratio of Rabi frequencies for the red and blue sidebands can be used to calculate the mean phonon number for the motional mode [1], see Section 3.5.1. Figure 4.6 displays measurements of the red (left panel) and blue (right panel) secular sideban-
ds for the planar (orange circles) and vertical (blue squares) modes, together with Gaussian fits as solid lines. We obtain mean mode occupations of  ̄nplanar = 0.17(3) and  ̄nvertical = 0.20(3) phonons, corresponding to a ground state occupation of 0.85 and 0.83, respectively. The achievable ground state occupation at this trapping height is limited by the intensity of the 729-nm light used for sideband cooling in conjunction with heating rates of several hundred quanta per second.
4.3 Applications
The ability to tune the ion trapping height by changing the DC fields opens up new opportunities for sensing and quantum information applications. Of immediate interest are studies of electric field surface noise as a function of ion-surface distance. The distance scaling of the spectral noise density, SE, is an important indicator for the type and origin of surface noise [6]. Recently, two studies independently showed a d−4 power-law scaling for an electroplated gold surface trap [48] and a sputt-
ered niobium trap [49]. We have also measured the distance scaling in our Al-Cu elevator trap by tuning the ion-electrode distance from 50 μm to 300 μm [50]. Moreover, we take advantage of the control and access to motional modes both vertical and horizontal to the electrode surface, which delivers additional information as to the characteristics of the surface noise. Beyond studies of the environment noise, we foresee applications in quantum information science where the proximity of the ion to c-
ontrol fields is important. As with the common linear five-wire trap design, shuttling of ions can be used to spatially separate readout and control regions above a surface trap chip. For instance, when large magnetic field gradients for microwave gates are required [51, 52, 53] the ion can be brought closer to the surface for the duration of a quantum gate while readout beams are kept further away to avoid scattering from the surface and possible charging effects [54, 55, 56]. Vertical ion shuttl-
ing also has advantages for ion loading, which can be performed further away from the surface to avoid coating it with Ca atoms. In this work, we orient the Ca oven such that the Ca

CHAPTER 4. FOUR-RF-ELECTRODE (ELEVATOR) TRAP 36
atom spray is suppressed below 150 μm height. As such, loading of ions is performed at heights greater than 150 μm. Then, if desired, the ion is shuttled to an operational height below 150 μm. We note that extending this work to multiple ions arranged in a vertical string will face new technical challenges. On such consideration is that imaging ions with high numerical aperture from the side instead of the top of the surface trap is hampered by the small trapping height compared to the extent of t-
he trap chip and may suffer from enhanced collection of laser scatter from the surface. Careful alignment of the imaging objective at an angle may circumvent this issue and still allow for resolution of individual ions in the vertical string. Surface traps based on our design can also be used for remote coupling of charged particles via conducting interconnects [57], where the distance to the coupling element determines the coupling strength. This approach may be interesting for linking ions in se-
parate regions of an extended surface trap for quantum computing applications or sympathetic cooling of ions which are unreceptive to laser cooling.

37
Chapter 5
Experimental setup
5.1 Trap chip
5.1.1 Trap chip architecture
The work discussed in this thesis is performed on a single trap chip, with electrode layout shown in Fig. 5.1. The trap chip measures 12.7 mm × 6.8 mm × 0.5 mm and houses three separate trapping zones. The trapping potentials in each zone are predominantly affected by the central electrode pads. Voltages are routed onto the trap chip electrodes via wire bond connections on the outer electrode pads. These wire bond pads are positioned far from the central trapping zone to mitigate their influence o-
n the trapping fields. 20-μm-wide leads are attached to the rectangular DC electrode pads to route voltages from off-chip sources. The leads are kept relatively thin to reduce their effect on the trapping fields. Empty space is filled with a ground plane. Leads to the RF electrodes are wider (40 μm width) to increase the conductivity and accommodate for high RF powers. All electrodes are separated by trenches of 20 μm width and 50 μm depth, a design element that prevents formation of shorts betwee-
n adjacent electrodes. The elevator trap introduced in Chapter 4 frames one trapping zone located in the lower half of the trap chip in Fig. 5.1. It is composed of 9 DC electrodes, labeled as 17 - 25, and 4 RF electrodes colored green. To prevent phase offsets among the RF signals, the wire lengths of all RF electrodes, from wire bond pad to central pad, are identical. The other two zones sit in the upper half of the trap chip. By design, each individual upper trapping zone is a smaller-scale repr-
oduction of the elevator trap from Chapter 4. We jointly term these two traps as the ‘double trap’, consisting of the so-called top and bottom traps. The top double trap is comprised of 8 DC electrodes, labeled in Fig. 5.1 as 1 - 8, and 4 RF electrodes, shown in green. The bottom double trap is similarly structured with 8 DC electrodes, labeled in Fig. 5.1 as 9 - 16, and 4 RF electrodes. Further details of the double trap are discussed in Chapter 7. Nevertheless, we note here that the distinguishi-
ng feature of our double trap is an electrically floating wire which connects the centers of the top and bottom traps. The center electrode (colored red in Fig. 5.1) of the double trap is the only

CHAPTER 5. EXPERIMENTAL SETUP 38
Figure 5.1: Schematic of the trap chip showing the electrode patterning for routing voltages onto three distinct trapping zones. The lower half of the trap chip contains the architecture for the elevator trap. The other two trapping zones are located in the upper half of the trap chip and jointly form the double trap. The large region in grey acts as a continuous ground plane while green electrodes are driven with RF signals and DC electrodes are colored cyan. Numerical labels of the DC pads corre-
spond to connections with the respective numerical labels in Fig. 5.3 and Fig. 5.4.

CHAPTER 5. EXPERIMENTAL SETUP 39
electrode on the trap chip with no connection to external control voltages. This electrically floating element acts as the crux for novel experiments explored in Chapter 7. With a separation of 5 mm between the elevator trap and double trap, the electric-field cross-talk between the traps is negligible, meaning we may independently operate in either trap.
5.1.2 Trap fabrication
The trap electrodes are patterned by laser-etching ultraviolet fused silica (performed by Translume, Ann Arbor, MI, United States). The surface is then layered with titanium (Ti), aluminum (Al), and copper (Cu) onto the substrate at an angle of -60° to the surface normal using electron-beam physical vapor deposition (at UC Berkeley Marvell Nanofabrication Laboratory), with respective thicknesses of 15 nm, 500 nm, and 30 nm. Subsequently, this process is repeated at an angle of 60°, coating the top-
 surface of the electrodes and the upper walls of the trenches, thus shielding the ion from stray fields on the surface of the dielectric substrate material. In reality, the metallic layers are not necessarily distinct; they may form alloys or contain various other defects on the surface or in the bulk [58, 59]. Regardless of the potential complexities that may result from a multi-metal surface ion trap, the guiding principles behind the use of three different metals is as follows: Ti functions as-
 a sticking layer, Al acts as the primary conducting material, and Cu protects the Al surface from rapid oxidation. Furthermore, the angled evaporation prevents metal build up inside of the trenches, which may lead to unwanted electrical shorts or noise.
5.2 Ion trap apparatus
In this section, we detail the assembly process of our ion trap apparatus and the resolutions to experimental issues faced during construction. As reference, a full-level cartoon crosssection of the trap assembly is shown in Fig. 5.2(left) along with a labeled photograph of the setup in Fig. 5.2(right). The full structure is situated in an ultra-high vacuum (UHV) chamber held at pressure < 10−11 torr.
5.2.1 Trap assembly
After vapor deposition of the trap chip, it is mounted onto a 1-mm-thick SiO2 spacer, which is then placed upon a custom-made ceramic leadless chip carrier (CLCC). These three components are attached together with EPO-TEK H20E silver epoxy and cured in vacuum for 2 hours at 100° C. The DC lines on the CLCC are filtered to ground with 10 nF capacitors1 that are soldered with Kester Lead-free and fluxless solder. The purpose of the spacer is to elevate the surface of the trap above all other compone-
nts, such as the CLCC capacitors
1Digi-Key P/N: 445-12303-1-ND, with fooprint of 1.0 mm x 0.5 mm, and detailed description: CAP CER 10000PF 50V X8R 0402

CHAPTER 5. EXPERIMENTAL SETUP 40
Figure 5.2: (Left) Cartoon layout of the in-vacuum trap assembly. Electrical connections routed from the PCB board to the trap are shown in gold. (Right) Photograph of the full trap assembly with relevant components labeled. For reference, the CLCC dimensions measure 33 mm × 33 mm.
Figure 5.3: (Left) Top-view schematic of the CLCC where black regions are gold-plated. The trap chip is to be positioned in the central rectangle and the wire bond pads are positioned to be near their respective trap chip electrode pads. (Right) Bottom-view of the CLCC. Through-hole connections are shown with black circles.

CHAPTER 5. EXPERIMENTAL SETUP 41
Figure 5.4: Schematic of the PCB breakout board on which the ceramic socket is mounted. Traces outlined in white are located on the top-side of the board whereas light-blue shaded traces are located on the reverse-side of the board. DC and RF voltages are routed onto the board via UHV-safe Kapton-insulated copper wires.
and clamps. This allows for unobstructed optical access from the sides of the trap chip. Following the curing process, the trap chip’s outer electrode pads are wire-bonded onto their respective CLCC pads via the numerical mapping shown in Fig. 5.1 and Fig. 5.3(left). The CLCC is then physically clamped down into a ceramic socket, which is, in turn, screwed into a Roger’s PCB breakout board, shown in Fig. 5.4. UHV-safe Kapton-insulated copper wires are soldered onto the PCB board to create invacuum-
 connections that route voltages from external RF and DC sources. The DC lines on the PCB board are also filtered to ground with 47 nF feed-through capacitors2. Electrical signals on the PCB are routed to the CLCC through fuzz buttons and hard hats that make contact between the top of the Roger’s PCB board and the bottom of the CLCC [60]. The mapping of these connections can be seen by comparing Fig. 5.3(right) and Fig. 5.4. After assembly of the full trap setup is completed, the vacuum chamber is-
 sealed and pumped down to a pressure of 10−8 torr using a vacuum turbopump. The chamber is then baked at 180° C for 1 - 2 weeks, with the turbopump still attached and running. It is prudent to set the bake temperature as high as possible without negatively affecting the in-vacuum components. In our case, the maximum temperature is set by the silver epoxy, which is rated up to 200° C. The purpose of this high-temperature baking process is primarily to remove excess water and heavy hydrocarbons fro-
m the vacuum chamber. The reduction of such elements as well as the overall pressure are monitored with a residual gas analyzer
2Mouser P/N: 581-W3F15C4738AT1F

CHAPTER 5. EXPERIMENTAL SETUP 42
Figure 5.5: Microscope image of trap chip with a burnt lower-right corner. The isolated pad and wire path of electrode ‘18’ are highlighted in red. All parts of electrode ‘18’ are purposely shorted to the trap ground with several wire bond feet.
(RGA). When the chamber pressure stabilizes, it is brought back to room temperature and achieves a pressure of 10−10 torr. Following the bake, we further reduce the pressure by firing multiple cycles of a titanium-sublimation pump, which absorbs background gases by creating a reactive ‘sticking’ layer on the inner sides of the vacuum chamber. Finally, constant running of an ion pump brings the pressure below 10−11 torr.
5.2.2 Experimental issues
Prior to successful operation of our ion trap apparatus, we cycled through a few iterations of the trap assembly in order to overcome experimental issues that arose throughout the construction process. One major issue was a faulty connection found on the CLCC. Our custom-made CLCC routes voltages from the bottom side, Fig. 5.3(right) to the top side, Fig. 5.3(left), via through-hole connections with metal thickness of 40 um. We discovered that both RF lines on the CLCC were disconnected at the thr-
ough-hole via. The origin of the RF line disconnect remains unclear, but a likely suspect is the usage of high input RF powers causing either electrical or thermal breakdown of the through-hole vias. This issue was patched by soldering wires through the vias to explicitly establish connections between the bottom and top portions of the CLCC RF paths. Unfortunately, in the process of soldering, the lower

CHAPTER 5. EXPERIMENTAL SETUP 43
Figure 5.6: (Left) Microscope image of short on PCB breakout board caused by small solder flake, indicated by the red circle. The ground reference point for the RF is in the upper left while the other two connection lines route the oscillating RF signals. (Right) Image of the same RF connectors on the PCB breakout board following removal of the solder flake and surrounding ground plane.
right portion of the trap chip was burned, see Fig. 5.5, rendering one of the DC electrodes useless, explicitly the electrode labeled ‘18’ in Fig. 5.1. A large portion of the trace of this DC electrode was burnt away, causing a separation between wire bond pad and the central electrode pad. As electrode ‘18’ could no longer be controlled with external voltages, we chose to explicitly ground it to the trap ground with wire bond feet. After fixing the CLCC, we successfully trapped ions in our system-
 for the first time. Though after a short period, another connection issue was detected on the PCB breakout board. In particular, we observed a gradual (over the course of days) increase in required input RF power to achieve a 2π × 1 MHz radial trap frequency. This symptom worsened and resulted in the inability to trap ions regardless of RF power. We discovered that one of the RF lines was shorted to the trap ground, and the culprit was found to be a small, loose solder piece, as shown in the red -
circled area in Fig. 5.6(left). As this solder flake was inauspiciously dropped near an RF line, it gradually started to reflow under the higher temperatures generated by the high power RF signals and eventually connected the RF line to the ground plane of the PCB breakout board. A cautious solution was implemented by removing the solder flake as well as the ground plane surrounding the RF lines, as seen in Fig. 5.6(right).

CHAPTER 5. EXPERIMENTAL SETUP 44
5.3 Electronics
5.3.1 DC electronics
DC voltages are controlled from a computer and routed onto trap electrodes through a digitalto-analog converter (DAC) system. Commands to set the voltage values are sent from the computer to a field-programmable gate array (FPGA)3 DAC controller board [15]. The DAC controller board routes these instructions via optical fibers to an on-board FPGA4, which advances the voltages of select DAC chips5. The DAC chips take 16-bit input corresponding to output voltages of ±10 V. The voltages are amplified -
with operational amplifiers6 to achieve a final output of ±40 V with 16-bit precision. The output analog voltage is routed to the vacuum chamber via a snakeskin sleeved D-SUB 25 ribbon cable. Prior to entering the vacuum chamber, each DC line is heavily filtered by a 4-stage low-pass filter with 3 dB point at 300 Hz. Each stage consists of a series 1 kΩ resistor in parallel with 94 nF and 100 pF capacitors to ground.
5.3.2 RF electronics
Standard operation of our ion trap requires RF voltages on the order of 100 V oscillating at frequency of order 10 MHz. Direct application of such a drive onto the ion trap causes several experimental issues. In particular, the impedance of ion traps are mostly capacitive (equivalent to 22 pF in our case) while the RF output from our signal generator7 and amplifier8 has a mainly resistive impedance of 50 Ω. This impedance mismatch results in reflection of the power from the ion trap back into the -
amplifier [61]. To mitigate these effects, we employ an impedance matching technique which centers on an inductively coupled half-wave resonator with two output arms that are equal in amplitude and frequency, but 180° out-of-phase. Details of the resonator design and implementation are described in Section 5.3.3.
Tuning circuit
For the vertical-linear operation mode of the elevator trap, we must generate perfectly canceling RF fields along the vertical axis of our trap, which relies on precise matching of the signal on the two diagonal pairs of RF electrodes. Ideally, they are at the same frequency and amplitude, but of opposite phase. However, any mismatch in those parameters, for instance due to fabrication imperfections or slight differences in the capacitance and inductance of wiring, leads to a residual RF field at -
the central trapping location, and consequently, micromotion in the vertical direction. In a real device, such a mismatch can easily occur and
3Opal Kelly XEM3001 4Altera Cyclone II 5Analog Devices AD660 6Texas Instruments OPA554 7Rohde & Schwarz SMB 100A 8Mini-Circuits ZHL-1-2W-S+

CHAPTER 5. EXPERIMENTAL SETUP 45
Figure 5.7: Circuit schematic for the implementation of the out-of-phase RF drive. The boxed region indicates a toroidal resonator with a powdered iron core. Each RF signal arm is equipped with a high-pass filter (C1±, L1±), a capacitive divider (C2±, C3±), and tuning capacitor (CV ±)
is observed in our setup. In the following we describe the circuit used to deliver the RF voltages to the trap electrodes in more detail and show how to reduce voltage mismatch between the RF lines by taking the vertical micromotion as a figure of merit. Fig. 5.7 shows the circuitry for passively routing out-of-phase RF signals onto separate electrodes. RF signals from the source are amplified and linked to the trap electrodes via a toroidal resonator, indicated by the boxed region in Fig. 5.7. Th-
e right-hand side of the resonator forms a resonant circuit with the cumulative capacitance of the trap load, dominated by the RF± electrode wiring. This resonator circuit matches the real 50 Ω resistance from the signal generator to the imaginary impedance of the trap electrodes. The two sides of the resonator output split the following circuitry into two arms with nominally equal amplitude, frequency, and opposite phase. Each arm contains a high-pass filter (C1± = 2 nF and L1± = 100 mH), where t-
he inductors, L1±, act as ground references for the RF signal. The amplitude and phase mismatch between the two RF arms can be measured with the capacitive dividers consisting of C2± = 2 pF and C3± = 100 pF. To correct for discrepancies, tunable capacitors, CV ±, with a range of 2 - 7 pF are added in parallel to the trap electrodes. These allow us to tweak the amplitude, frequency, and phase of the resonant circuit, thus reducing the mismatch of the two RF arms.
Out-of-phase RF optimization
Imperfect cancellation of RF fields along the vertical z-axis manifests on the ion as excess micromotion in the z-direction. Micromotion, in turn, provides a much more relevant and

CHAPTER 5. EXPERIMENTAL SETUP 46
Ωrf (MHz)
Figure 5.8: Measured micromotion modulation index β, which is defined to first order as 2Ω1/Ω0 at a trapping height of 200 μm. The RF drive frequency, Ωrf reflects the resonance of the RF circuit which is tuned via the capacitors CV ±. Here we change only one of the two tunable capacitors and the dashed line shows the expected linear dependence of the modulation index on the circuit resonance.
sensitive measurement of differences in the resonator arms as compared to the capacitive divider signal. By tuning the capacitor on one arm, we can measure changes in the ratio of the first order micromotion sideband Rabi frequency, Ω1, and the Rabi frequency of the direct carrier transition, Ω0. Using electrostatic and lumped circuit simulations we find the modulation index, β ≈ 2Ω1/Ω0 should depend to first order linearly on the resonance frequency and theoretically vanishes when both arms match-
 amplitudes and phases perfectly, i.e. when the resonance frequencies in each arm match [62]. Experimental constraints, such as a finite resonator quality factor, naturally limit how closely we can approximate the perfect case. In our case, cf. Fig. 5.8, the modulation index could be reduced to β ≈ 0.1, a considerable improvement over the un-optimized modulation index, β ≈ 1.5. We have repeated the procedure for vertical micromotion compensation with a several toroidal resonators with different in-
ductances and quality factors and found similar behaviours.
RF amplitude modulation
Certain trapped ion experiments require modulation of the RF amplitude. For instance, we may utilize RF modulation to implement parametric coupling of separate trapped ion

CHAPTER 5. EXPERIMENTAL SETUP 47
Figure 5.9: Image of toroidal half-wave (λ/2) resonator made from 1-mm-thick insulated copper wire wrapped around a ferrite core of inner diameter 2.4 cm and outer diameter 4.1 cm. The aluminum housing (shown uncovered) shields the resonator and RF circuitry from external fluctuating fields. The RF circuit in this particular iteration includes only the high-pass filters (C1±, L1±) for each arm of the λ/2 resonator output.
motional modes [63] or measure ion motional coherences [64]. We apply the modulation onto the RF electrodes with an external signal source9 connected to our RF signal generator. We work with modulation on the order of the trap frequencies, which is typically < 2 MHz, and the source is toggled on a TTL trigger for precise timing of the modulation with respect to experimental pulse sequences.
5.3.3 Resonator
A core element of the RF impedance matching circuit described in Section 5.3.2 is the resonator which acts as a transformer to provide high-voltage gain as well as frequency filtering of noise.
Physical implementations
There are several possible physical implementations of resonators for the purposes of trapped ion RF circuits. A common type is the helical resonator which provides adequately high Q factors and appropriate handling of the high power requirements for trapped ion RF systems [61, 65]. However, these resonators are large, bulky, and difficult to tune and customize. As an alternative, we work with toroidal resonators throughout this thesis, which
9Agilent 33220A

CHAPTER 5. EXPERIMENTAL SETUP 48
have a smaller form factor and simpler fabrication, making them ideal for testing and tailoring to specific needs. These resonators are modeled after inductively coupled transformer coils wrapped around a ferrite core, as shown in Fig. 5.9. The drawback of this architecture is a limited power output due to the thermal properties of the ferrite core, which cannot withstand high temperatures. Other resonator builds include transmission line coaxial cables [66] and lumped-element circuits [67]. Coaxi-
al cables can handle high powers and are known to create resonators with high Q factors at the cost of large form factors, since the length of cable directly corresponds to the desired resonant wavelength, i.e. ∼ 2 m to create a λ/4 resonator at 20 MHz drive frequency. Lumped-element circuits replace the physical resonator component with an RLC circuit. Their compact nature allows for in-vacuum and cryogenic implementations as well as designs which require multiple RF drives. Additionally, the RLC-
 resonator may be placed as close as possible to the ion trap to avoid RF power dissipation through long in-vacuum cables.
Design guide
One of the most important quantities of a resonator is the Q factor defined as the ratio
between the resonant drive frequency, ΩRF , and the full-width at 1/√2 of the maximum resonant voltage, δΩRF ,
Q = ΩRF
δΩRF
. (5.1)
We desire to maximize the Q factor, since a higher Q factor passively improves the voltage gain and the bandpass filtering around ΩRF . The Q factor of the resonator is dependent on the effective RLC parameters of the full RF circuit,
Q= 1
R
√L
C . (5.2)
This relation implies that the Q factor is maximized when our resonator design achieves minimum resistance, Rr, and self-capacitance, Cr. In addition, by modifying the number and spacing of output turns on the resonator, we may tune the self-inductance Lr and, consequently, tune the Q factor and resonant frequency ΩRF . In terms of the full RF circuit, we note that the self-inductance, Lr, of the toroidal resonator dominates L while R and C are dominated by the in-vacuum ion trap connections. For -
impedance matching, the main tuning parameter is the number and spacing of input turns on the toroidal resonator. Experimentally, we determine the quality of the matching circuit by measuring the reflected power from the ion trap with a standing wave ratio (SWR) meter10. For all operational resonators in this thesis work, the input turns are adjusted until the SWR meter reads a value of < 1.2, corresponding to a reflected power of < 0.8%.
10MFJ-892

CHAPTER 5. EXPERIMENTAL SETUP 49
Figure 5.10: Block-diagram of the experimental ground configuration used in this thesis. Ground connections are shown in blue, and connections which greatly affect the the noise are highlighted in red. Points where the grounding connections join on the diagram correspond to physical star-ground points in the setup.
Finally, we note a limitation of the toriodal resonator design is the unstable thermalization of the ferrite core. When working with high powers (& 2 W), we observe gradual fluctuations in the temperature of the toroidal resonator on the order of hours. In accordance with the temperature, the resonance frequency of the RF system shifts, leading to slow drifts of the RF power which causes slow drifts of the radial trap frequencies. To stabilize the thermalization, we submerge the entire wire-wrappe-
d ferrite core in STYCAST epoxy, which has a high thermal conductivity. Following this improvement, we measure minimal trap frequency drifts of < 1 kHz over the course of a couple hours. However, addition of the STYCAST changes the electrical properties of the resonator, so care must be taken to re-tune the resonator coils for good impedance matching and high Q factor.
5.3.4 Grounding
In an effort to reduce electronic noise in our trapped ion system, we find that proper grounding is essential. A schematic of our experimental grounding is shown in Fig. 5.10, where electrical elements of the trap apparatus are labeled in black boxes and ground connections are shown as colored lines. Red lines indicate connections that significantly affect the noise

CHAPTER 5. EXPERIMENTAL SETUP 50
in our system while blue lines represent connections required for functional operation of each element. As a general rule of thumb, we strive to establish good connections among all ground references. In our optimal configuration, the grounds of all pairwise components are connected with measured resistances of no more than 1 Ω. To quantify the effect of different ground connections on the noise in our system, we measure the spectral noise on each electrode relative to the trap ground. Measurement-
s are performed directly off the electrode ports of the vacuum chamber in order to extract the noise characteristics as close to the trap chip as possible. With the ground configuration from Fig. 5.10, we establish spectral noise below −105 dBm/Hz at 1 MHz for all electrodes, with reference background noise of −108 dBm/Hz at 1 MHz. Though this grounding scheme works in our particular case, it does not necessarily address the underlying cause of noise, and thus may require modification for differen-
t trapped ion setups.
5.4 Optics
5.4.1 Lasers
The six continuous wave (CW) laser sources for loading, trapping, and manipulation of 40Ca+ ions are located in a room separate from the experiment and routed onto the experimental optical table through 20 m long optical fibers. All lasers used in our experiments are diode lasers. The 397 nm and 422 nm laser light is frequency doubled with an external bow-tie cavity from 794 nm and 844 nm diodes, respectively. While the photoionization laser light is free-running, the 794 nm, 854 nm, and 866 nm la-
sers are locked to external reference cavities. Further details of the laser setup may be found in T. Pruttivarasin’s thesis [33]. Since the 729 nm laser addresses the 40Ca+ qubit transition, we require sub-kHz linewidth and high power output. This is achieved by locking to a high finesse cavity, running the laser light through an injection lock scheme [15], and amplifying the light with tapered amplifiers. In addition, we may implement fiber noise cancellation, see Section 5.4.2, to maintain narr-
ow linewidth at the output of the fiber transporting laser light from the 729 nm laser to our set-up. On the experimental optical table, the photoionization laser light is sent directly into the vacuum chamber, taking care to orient the 422 nm beam perpendicular to the Ca oven in order to avoid large Doppler shifts caused by the velocity of Ca atoms ejected from the oven. The 397 nm, 729 nm, 854 nm, and 866 nm laser light passes through acousto-optic modulator (AOM) networks, which allow for ampli-
tude and frequency control of each individual laser prior to entering the vacuum chamber. The AOMs are driven with RF signals generated by direct digital synthesizer (DDS) boards which take commands from an FGPA11 connected to a computer, see T. Pruttivarasin’s thesis [33] for a detailed setup description.
11Opal Kelly XEM6010

CHAPTER 5. EXPERIMENTAL SETUP 51
Figure 5.11: Experimental setup of the PLL-based fiber noise cancellation scheme. Red arrows represent optical paths and black arrows indicate electrical connections.
5.4.2 Fiber noise cancellation
Motivation
Long fibers are easily stressed and strained from environmental effects such as acoustic noise and fluctuations in temperature and air pressure. Stress and strain cause local changes in the index of refraction of optical fibers, thus altering the optical path length (OPL) through them. Fluctuations in the OPL result in frequency and phase noise at the output of the fiber, which broaden the linewidth of the output light. A narrow linewidth of the 729 nm beam is required for long coherence times and-
 highfidelity quantum operations. To mitigate the noise and reduce the output laser linewidth, we test a method developed by the NIST Boulder group [68] and utilized by the Quantum Optics Group at Innsbruck [69]. In short, a control system constantly monitors the phase noise caused by the fiber and applies an out-of-phase signal to cancel the noise. For this regulation to work, it is required that the phase noise is slow as compared to the bandwidth of the control system.
Theory and Setup
The experimental scheme for stabilization of 729 nm laser light propagating through a 20 m long fiber is shown in Fig. 5.11, where electronic connections are denoted with black arrows and optics are denoted with red arrows. We start by passing 729 nm light through an AOM

CHAPTER 5. EXPERIMENTAL SETUP 52
driven at ∆AOM = 80 MHz. The incoming light has the form
Ei = E0 cos(ωlt), (5.3)
where ωl is the laser frequency and E0 is the electric-field magnitude. The 0th order is unaffected by the AOM and immediately back reflected and detected with a fast photodiode (PD). At the PD, we expect this beam to be
E0 = E0r cos(ωlt). (5.4)
The first pass of the 1st order diffraction of the AOM is then
E1 = E1 cos((ωl + ∆AOM )t − φAOM ), (5.5)
with a detuning given by ∆AOM and phase shift of φAOM . This light is sent through the fiber and partially reflected back, which causes a phase shift, φfiber, from the fiber and a reduction in magnitude from E1 to E1r
E1 = E1r cos((ωl + ∆AOM )t − φAOM + 2φfiber). (5.6)
Finally, this beam passes back through the AOM, and we take the +1 order again, which outputs a counter-propagating beam to the incoming Ei beam. This final output beam acquires another detuning and phase shift,
E1 = E1r1 cos((ωl + 2∆AOM )t − 2φAOM + 2φfiber), (5.7)
before detection at the same PD as E0. Assuming E0r = E1r1, the PD detects light of the form, EP D = E0 + E1 = 2E0r cos(ωbeat/2) cos(ωlt + ωbeat/2), (5.8)
with a beat note signal between E0 and E1 at frequency
ωbeat = 2∆AOM t − 2φAOM + 2φfiber. (5.9)
This signal is then fed to the phase-locked loop (PLL) circuit. A phase detector12 mixes the beat note with a reference signal of 159.959 ± 0.016 MHz, and then a voltage-controlled oscillator (VCO)13 receives the low frequency output from the mixer and outputs a reactive phase-modulated frequency. This signal is passed through a frequency divider14 before ultimately driving the AOM. In this way, the electronics set φAOM = φfiber, thus canceling the phase noise from the fiber.
12Analog Devices AD8302 13Vectron VS-705 14Analog Devices HMC432

CHAPTER 5. EXPERIMENTAL SETUP 53
Figure 5.12: (Left) Frequency spectrum of beat note signal with PLL regulation turned OFF. Notice a full-width of ∼ 4 kHz. (Right) Frequency spectrum of beat note signal with PLL regulation turned ON. The full-width is now reduced to 100 Hz. Both spectra are centered around 159.959 MHz, roughly twice the AOM frequency.
Performance
To characterize the performance of our fiber noise cancellation system, we monitor the frequency spectrum of the beat note signal on the PD. The results are shown in Fig. 5.12. Without the PLL regulation, we not only see large linewidth, Fig. 5.12 (left), but there are also slower fluctuations of the center frequency as the fiber is bent or heated/cooled. With the PLL regulation on, Fig. 5.12 (right), the slow fluctuations are eliminated and the linewidth significantly reduces to 100 Hz. It is lik-
ely the linewidth is even narrower than measured, but this measurement is limited by the spectrum analyzer bandwidth.
5.4.3 Imaging
To experimentally readout the quantum state of a trapped ion, an objective lens15 is positioned above the top viewport of the vacuum chamber with direct line of site to the trap. The fluorescence of ions are collected into the objective and directed into either an EMCCD camera16 or PMT17. These imaging paths are illustrated by the solid blue lines in Fig. 5.13. The Sill objective is engineered to have similar focal length at 397 nm and 729 nm wavelengths. Thus, in addition to collection of photons-
 from trapped ions, the objective also functions as a lens for focusing collimated 729 nm light at the ion position. The 729 nm path is shown as solid red lines in Fig. 5.13. To achieve ideal focusing, we overlay the beam
15Sill S6ASS2241 16Andor DV885LC-VP (Serial #: X-2579) 17Sens-Tech P25PC

CHAPTER 5. EXPERIMENTAL SETUP 54
Figure 5.13: Schematic of imaging system. Solid lines show the beam paths for operation of a single trap. When operating the double trap, we add another vertical 729 nm beam for ion addressing and a second PMT for ion detection. The beam paths for these auxiliary functions are shown as transparent dotted lines. The double trap separates the ions by 500 μm, making it possible to image each ion on a separate PMT by inserting a pick-off mirror.
paths of the 729 nm light and the ion fluorescence with a dichroic mirror which reflects red light and transmits blue light. When operating in the double trap, the second ion is imaged onto a separate PMT by picking off its fluorescence with a mirror. This auxiliary imaging path is shown as transparent dotted blue lines in Fig. 5.13. Additionally, a second 729 beam is added to address the second ion, shown as transparent dotted red lines in Fig. 5.13.

55
Chapter 6
Electric-field noise
Strong coupling between the charge of an ion and external electric fields is essential for 3-D confinement of ions. However, this interaction manifests as a double-edged sword, as ions are also sensitive to residual fluctuations of electric fields in the environment. This electric-field noise couples to the electric dipole moment of the ion, |p~| = e|~x0| where |~x0| = √ħ/(2mωt) is the extent of the motional ground-state wavefunction, and induces unwanted transitions between ion motional states, u-
ltimately leading to increased ion energies, a process we term as heating. Ion heating is an impediment in many trapped ion applications. It lowers the fidelity of gate operations involving the quantized motional states [70] and it contributes to fractional uncertainties in optical clock experiements [71]. On the upside, we can take advantage of the ion’s sensitivity by probing the electric-field noise in ion traps with measurements of the ion heating rate,  ̄ ̇n, where n ̄ = 〈a†a〉 is the average -
occupation number of the harmonic oscillator mode.
6.1 Single-ion motional heating
Let us start with a theoretical treatment of the heating rate to understand its dependencies. In the case of heating an ion from the motional ground state, |0〉, to the first excited state, |1〉, we can define a rate, Γh, from Fermi’s golden rule [72]. This rate holds under the assumption that the ion is located in the RF null, allowing us to neglect micromotion contributions.
Γh ' e2
4mħωt
SE(ωt), (6.1)
SE(ωt) = 2
∫∞
−∞
dτ 〈δEt(τ )δEt(0)〉 e−iωtτ (6.2)
where e and m are the ion charge and mass, ωt is the trap frequency, and SE is the spectral density of the electric-field noise that only includes positive frequencies. Thus for ions close to the motional ground state, we have  ̄ ̇n = Γh.

CHAPTER 6. ELECTRIC-FIELD NOISE 56
6.1.1 Master equation
A more general approach to understanding the heating rate can be seen from writing out the master equation for the motion of the ion with the density matrix formulation, ρˆ. When the ion motion is coupled to a bath of harmonic oscillators at thermal equilibrium, we have [73]
ρ ̇ˆ = −Γ(Nb + 1)[ˆa†aˆρˆ − 2ˆaρˆaˆ† + ρˆaˆ†aˆ] − ΓNb[ˆaaˆ†ρˆ − 2ˆa†ρˆaˆ + ρˆaˆaˆ†] (6.3)
where aˆ† and aˆ are the creation and annihilation operators of the ion’s motional quanta, Nb is the average occupation of the environment bath at temperature T and will be defined implicitly in Eq. (6.4). Physically, the Γ(Nb + 1) terms account for spontaneous and stimulated emission, or energy transfer from the ion system to the bath, and the ΓNb terms describes absorption of energy from the bath to the ion system. Eq. (6.3) holds under the Born-Markov approximation, meaning the time-evolution i-
s valid in the Markovian limit of t τb, where τb = 1/ωbc is the correlation time of the bath, and ωbc is the high frequency cutoff of the bath. Under this assumption, we can derive the time-evolution of the average ion motional occupation [74],
 ̄n(t) = Nb(1 − e−Γt) = 1 − e−Γt e
ħωt
kBT − 1
. (6.4)
With this, we can solve for the heating rate,
 ̄ ̇n(t) = ΓNbe−Γt ≈ ΓNb ≡ Γh. (6.5)
Typically, we operate our traps at room temperature (∼ 300 K), so we find ourselves in the regime of Nb ∼ 106. Notice that in general, the heating rate is non-linear as a function of time, but our experiments typically operate under the conditions of Γ ∼ 10−4/s and t ∼ 1 ms. Thus the combined condition of Γt → 0 allows us to approximate the heating rate as constant in time, as seen in right side of Eq. (6.5). Lastly, it should be mentioned that this analysis of the heating rate does not hold in th-
e non-Markovian regime of t . τb. Naively applying the above solution in the short time regime will continue to give a linear time-evolution of  ̄n, whereas the true, non-Markovian, time-evolution for short times should follow a quadratic trend [74].
6.1.2 Spectral density
A physical understanding of the mechanism behind ion heating is rooted in the spectral density of electric-field noise sources. In general terms, the spectral density may be a complicated function of the trap frequency ω, distance from the ion to electrode surfaces d, and trap temperature T . In most experimental studies, however, only a local parameter range can be scanned. Under this restriction, the spectral density is assumed to follow a power-law scaling with respect to ω, d, and T [6]
SE(ω, d, T ) ∼ ω−αd−βT γ. (6.6)

CHAPTER 6. ELECTRIC-FIELD NOISE 57
The predicted values of α, β, and γ vary depending on the theoretical noise model and the respective parameter regime. Many physical noise models have been considered in the literature, including blackbody radiation, electromagnetic pick-up, patch potentials, twolevel fluctuators, adatom dipoles, adatom diffusion, Johnson noise, and technical noise [6], and much experimental data in regards to the spectral density has been published. Unfortunately, solid conclusions are difficult to draw from the -
collection of data, as the measurement conditions drastically vary among experiments. To solve this, an ideal experiment for understanding electric-field noise in ion traps would allow for measurement of SE as a function of ω, d, and T , with a large workable range for each parameter. To this end, some of the experiments performed in this thesis aim to collectively measure the ω and d dependencies in a single ion trap.
6.2 Distance scaling
6.2.1 Previous experiments
At present, a small number of experiments have directly measured electric-field noise as a function of the ion-surface distance. The first of these were performed in traps with nonplanar geometries, using needle-shaped tungsten electrodes in one case [75] and a gold-plated ‘stylus trap’ design in the other [76]. These experiments found electric-field noise scalings of β = 3.5 [75] and β = 3.1 [77], respectively. More recently, two additional experiments employed planar surface traps for distance s-
caling measurements of noise parallel to the trap surface. The first study used a standard five-wire trap with gold electrodes and application of radio-frequency (RF) voltages to the central three electrodes to obtain a distance-scaling exponent of β = 3.8 [48]. The magnitude of electric-field noise in this experiment was about an order of magnitude higher than the best published results for untreated surface traps. The second study found β = 4.0 for a multizone niobium surface trap [49]. Here, th-
e ion trap contained several trapping zones spaced on the order of 1 mm, where the electrodes at each zone were physically scaled to trap ions at different distances from the surface. The magnitude of electric-field noise was comparable to very good untreated surface traps. Collectively, these previous measurements are naively consistent with a noise mechanism of microscopic nature, i.e. the length scale of the electric-field noise fluctuations are much smaller than the ion-surface distance.
6.2.2 Experimental Overview
In our experiment, we investigate the electric-field noise as a function of ion-surface distance for a single 40Ca+ ion trapped in a unique surface Paul trap with a simple planar geometry. Our room-temperature elevator trap enables tuning of the ion-surface distance at a fixed planar position using DC voltages [30]. Furthermore, we find that the magnitude of noise for this trap is comparable to the best untreated traps. We measure electric-field noise in both

CHAPTER 6. ELECTRIC-FIELD NOISE 58
866 nm
397 nm
729 nm (planar) x
y
z
729 nm (normal)
Figure 6.1: Isometric view of the trapping region of the elevator trap. Static voltages are applied to numerically labeled DC electrodes, and RF electrodes are labeled RF1−4. RF1,4 are driven out-of-phase relative to RF2,3. The orientation of the qubit addressing laser beam (729 nm) and Doppler cooling beams (397 nm and 866 nm) are indicated by the arrows and their labels.
the normal and planar directions with respect to the surface and extract a distance scaling exponent of β ≈ 2.6 for ion-surface distances in the range of 50 - 300 μm, significantly departing from the previous measurements discussed above. In Section 6.4, we provide evidence that the measured field noise is not limited by technical noise (defined to be noise whose origin is external to the properties of the trap surface, for example, from power supplies or electromagnetic pickup). Following that, w-
e discuss in Section 6.5 how spatial correlations of the surface noise may explain our observed distance dependency. Finally, we place the results in a larger context with respect to previous measurements in Section 6.6.
6.2.3 Experimental Setup and Methods
Experimental Setup
We first reiterate the functionality of our elevator trap, shown in Fig. 6.1, which is operated with an out-of-phase RF drive such that the two diagonal pairs of RF electrodes (RF1,4 and RF2,3) are driven with the same amplitude, but opposite phase. This generates a radiofrequency-null along the axis normal to the trap surface [30]. Thus, the trapping potential in this direction is fully controlled with DC electrodes (labeled 1 to 9 in Fig. 6.1), allowing for continuous variation of the ion-surfac-
e distance without introducing excess micromotion. RF fields provide confinement in the xy plane parallel to the trap. We adjust the DC voltages such that the principal axes of the total potential have a tilt

CHAPTER 6. ELECTRIC-FIELD NOISE 59
of 5◦ with respect both the z and y-axes. This ensures that all three motional modes have some projection onto the 397 nm Doppler cooling beam propagating along xˆ. To provide additional cooling for the near-normal mode, the repumping 866 nm beam is sent in at a near-normal angle with respect to the trap surface (z axis) and detuned red with respect to resonance. The beam at 729-nm wavelength addressing the long-lived quadrupole qubit transition of 40Ca+ can be switched between two orientations to-
 measure the ion’s response to electric-field noise in two directions. The ‘729 nm (normal)’ orientation in Fig. 6.1 is used for measuring noise normal to the trap surface (along the zˆ-direction), while the ‘729 nm (planar)’ orientation allows noise measurements in the yˆ-direction of the trap plane.
Measurement Methods
As the strength of electric-field noise changes by two orders of magnitude over the ion-surface distance explored here, we employ two methods for measuring heating rates. When the ion is cooled close to the motional ground state, that is  ̄n ≤ 1 (possible if  ̇n ̄ . 1000 s−1 for our system), the amplitude of the phonon-subtracting transition (red sideband) is significantly less than that of phonon-adding one (blue sideband). Then, the mean phonon number  ̄n can reliably be found by comparing the e-
xcitation amplitude of red and blue first-order motional sidebands [41]. When cooling into the ground state is difficult (  ̇n ̄ & 1000 s−1), the sideband method is no longer sensitive to n ̄. In this regime, a better measure of the heating rate is via the decay of carrier Rabi oscillations [78], with coupling strength given by Eq. (3.15). These carrier Rabi flops can be fitted to extract the thermal motional distribution parameterized by n ̄ and thereby the heating rate  ̄ ̇n.
6.2.4 Experimental results
The scaling of electric-field noise with d is determined from measurements of the heating rate at a fixed secular frequency of ω = 2π × 1.00 MHz. The two planar motional modes are closely aligned with the x and y-axes and we measure the heating rate of the yˆ planar mode. Using DC voltages, the xˆ planar mode is set higher in frequency by typically 2π×50 kHz than the yˆ mode frequency. When measuring the planar mode at 2π × 1 MHz, the normal zˆ mode is set to about 2π × 0.75 MHz, while for measure-
ments of the normal mode at 2π × 1 MHz, the planar mode frequencies are tuned to about 2π × 1.25 MHz. The range of ion-electrode distances accessible with the trap is limited by the high RF voltages needed when trapping close to and far away from the surface [30]. Additionally, we find that when the normal 729 nm beam is focused close to the trap surface, back-reflections generate a standing wave pattern which significantly modulates the intensity in the zˆ direction. Intensity fluctuations caused-
 by drifts in the standing wave pattern limit the ion-surface distances where we can reliably measure electric-field noise in the normal direction to above 60 μm. The heating rates for the planar (blue symbols) and normal (red symbols) mode are plotted in Fig. 6.2. We distinguish between the two measurement methods mentioned earlier:

CHAPTER 6. ELECTRIC-FIELD NOISE 60
Hea ng rate (quanta/s)
Ion-surface distance (μm)
Normal: d -2.75(9)
Planar: d -2.58(4)
50 100 200 300
102
103
Figure 6.2: Planar (blue) and normal (red) heating rates as a function of ion-surface distance for a fixed secular frequency of ωt = 2π × 1 MHz. Data are taken with two measurement methods: ( ) sideband method, ( ) Rabi method. ( ) show data from the Rabi method scaled to match results from the sideband method (see details in Sec. 6.2.4). Power-law fits for both motional modes take into account the data taken with the sideband-asymmetry ( ) method and the scaled Rabi method ( ).
filled squares ( ) correspond to measurements taken with the sideband method. Below 80 μm ion-surface distance, the carrier Rabi-oscillation method is used instead, and the raw heating rate data are marked with filled diamonds ( ). To validate the compatibility of the two methods, we compare both measurement techniques in the intermediate regime of  ̄ ̇n ∼ 1000 s−1 and also for  ̄ ̇n ∼ 100 s−1. We find that the Rabi method gives heating rates that are systematically about 17% higher than for the s-
ideband-asymmetry method. This difference is consistent with findings from other groups [26, 49] and may be linked to the non-zero projection of other motional modes on the measurement laser or laser intensity noise, which manifests as premature dephasing of the Rabi oscillations. To simplify comparison of the electric-field noise across the full range of ion-surface distances, we scale the data from the Rabi-oscillation method by a constant factor of 0.85. The resulting adjusted values are marked-
 in Fig. 6.2 as open diamonds ( ). Power-law fits to the filled squares ( ) and open diamonds ( ) are shown as dashed lines in Fig. 6.2. We observe a scaling of  ̄ ̇n ∼ d−2.6 for both modes, with normal heating rates consistently about a factor two higher than planar heating rates.

CHAPTER 6. ELECTRIC-FIELD NOISE 61
Hea ng rate (quanta/s)
Trap frequency (MHz)
Normal: f -2.15(11)
Planar: f -1.97(13)
1.0
100
200
300
50
Figure 6.3: (b) Planar (blue) and normal (red) heating rates as a function of secular frequency for a fixed ion-surface separation of d = 170 μm. Power-law fits for both modes are shown as dashed and dotted lines.
6.3 Frequency scaling
In addition to the distance scaling, we measure the scaling of noise with frequency, which is another key parameter to characterize the electric-field noise. In Fig. 6.3 we show the noise frequency dependence of both normal and planar modes at a fixed ion-surface distance of 170 μm, where all measurements are performed with the sideband-asymmetry method. From a power-law fit of the data and Eq. (6.1), we find that the electric-field noise spectral density, SE(2π × f, d), scales as f −0.97(13) and -
f −1.15(11) for the planar and normal modes, respectively. This frequency dependence is consistent with 1/f -noise that is ubiquitous in solid-state experiments [79] and a number of ion trapping experiments [6]. We observe again that the normal heating rates are about a factor of two higher than the planar heating rates. Additionally, we measure the frequency scaling of the planar electric-field noise at 70 μm ionsurface distance and find SE(2π ×f, d) ∝ f −1.2(3). The 1/f -like noise scaling for d-
ifferent ionsurface distances and electric-field projections in our system suggests that our measurements are not described by proposed models for noise from adatom dipole fluctuations [80] or adatom diffusion [81], or by broadband technical noise [6] since the expected frequency scaling in these cases is not 1/f .
6.4 Technical noise
Having presented our measurement results, we note that the distance scaling for this ion trap differs strongly from the d−4 dependence that for planar trap geometries is expected from

CHAPTER 6. ELECTRIC-FIELD NOISE 62
microscopic noise sources and has been observed in recent experiments [48, 49]. A scaling exponent of β ≈ 2 is commonly associated with technical noise; however, this scaling only appears if the trap size is scaled with the ion-surface distance. This is not the case in our system. Thus, understanding how technical noise manifests in this trap and determining to what degree it affects our measurements are critical issues that we address in the following. Two types of electric-field noise sources at-
 the ion secular trap frequency can affect the motional ion heating: surface noise and technical noise. Surface noise encompasses the mechanisms originating from the ion trap surface itself, that is, physical processes generating noise at the trap surface. Technical noise is defined as noise whose origin is external to the properties of the trap surface, and thus can be mitigated by proper filtering and shielding. Technical noise may be caused by noise from voltages sources powering the ion trap o-
r electromagnetic radiation in the environment which is picked up by the trap electronics and electrodes. This type of noise is typically correlated over the area of trap electrodes, and thus depends specifically on the trap electrode geometry and the ion’s position relative to the electrodes. As we are interested in the fundamental physical noise sources that could limit the performance of trapped ion qubits, it is important that our electric-field noise measurements are dominated by surface nois-
e. Therefore we perform several checks to verify that our heating rates are not limited by technical noise. We can translate the contribution of technical noise to the heating rate of an ion as
n ̇ ̄tech = e2
4mħωk
∑
e
SVe (ωk )
D2
e,k
, (6.7)
where SVe(ωk) is the voltage noise spectral density on electrode e and De,k is the characteristic ion-electrode distance defined by
De,k = Ve
Ek
, (6.8)
where Ve is the applied voltage on electrode e and Ek is the resulting electric field at the ion
position in the kˆ motional mode axis. Relating this to the electric-field spectral density, SE that we have been discussing, we find the general relation,
SEe(ωk) = SVe(ωk)
D2
e,k
. (6.9)
This relation is often naively cited in the literature to infer that technical noise scales as SE ∼ d−2. However, it is not generally true that a D−2
e,k scaling implies a d−2 scaling, as the former is a characteristic distance with dependence defined in Eq. (6.8) and the latter is simply a physical ion-electrode distance. In order to extract the true distance scaling, we must understand the behavior of the electric-field, Ek, as a function of the distance, d. One particular instance where the simple D−2
e,k ∼ d−2 relation does hold, is if a full surface trap electrode architecture is scaled uniformly. In this case, as the electrode sizes increase (decrease), the location of the RF-null, i.e. ion height d, increases (decreases) proportionally. This particular setup has been experimentally demonstrated by Sedlacek et. al. [49], where

CHAPTER 6. ELECTRIC-FIELD NOISE 63
they inject technical noise into five different zones of a surface trap, where each zone is essentially a scaled model of the others. They measure a distance scaling of d−2.4±0.3 with controlled technical noise injected into particular electrodes.
6.4.1 Electrode noise simulations
Individual electrodes
For each trap electrode, we simulate SE,i as a function of the ion-surface distance under the assumption that technical noise dominates at the ion position. Ei is analytically approximated by a method which assumes an infinite ground plane surrounding electrode i [45, 82]. From the geometry of our trap (cf. Fig. 6.1), we see that only electrodes 1, 2, 7, 8, 9, and RF1−4 generate electric fields with projection onto both the y and z axes, which correspond to the directions of the measured ion motio-
nal modes. Also, from the symmetry of our trap, we expect electrodes 1, 2, 7, and 8 to generate similarly polarized electric-field noise in the yz plane, as is the case for all four RF electrodes. So, we will discuss here the distance scaling for the relevant cases of electrodes 1, 9, and RF1. Fig. 6.4 visualizes the simulated electric-field noise in the planar and normal directions for 3-μV noise amplitude on DC electrodes 1 through 9 while Fig. 6.5 shows the same simulation with the RF1 electrod-
e geometry. The simulated distance scalings confirm our intuitive expectation: For electrode 9, the center electrode, the planar electric-field components mostly cancel from symmetry, such that the field is mostly normal to the surface. For all the outer electrodes, including 1 and RF1, the normal electric-field vector changes sign when d is near the approximate separation between the electrode in question and the trap center. The electric-field vector points away from the trap surface when d is g-
reater than the trap-center-to-electrode separation and points towards the trap surface at lower distances. Hence, the normal components in Fig. 6.4(top left) and Fig. 6.5 show dips at about 180 μm and about 250 μm for electrodes 1 and RF1, respectively. Very close to the conductive trap surface, the electric-field vector must be normal to the surface, thus reducing the planar component, which we observe in all cases of Fig. 6.4 and Fig 6.5. Comparing the simulations with the overlaid scaled data,-
 we find none of the cases match the data. Similarities are only partial and do not apply simultaneously to both projections of noise. In general, for correlated noise from trap electrodes, the electric-field noise polarization as a function of the ion-electrode distance is not constant, that is, the ratio of the noise magnitudes in normal and planar directions is not constant, in contrast to our data. Thus, we conclude that no single electrode can generate noise consistent with our measured elect-
ric-field noise data.
Combinations of electrodes
Beyond noise from individual electrodes, one could imagine technical noise contributions with various amplitudes from all electrodes to play a role, conspiring to give rise to the

CHAPTER 6. ELECTRIC-FIELD NOISE 64
Figure 6.4: Simulated SE distance scaling from 3-μV amplitude noise on DC electrodes 1 through 9. The planar contributions are shown as dashed curves and the normal contributions are shown as dotted curves. Plots for DC electrodes 3, 4, 5, and 6 do not display dashed curves because the planar noise contributions are negligible. Scaled data measurements are overlaid for reference.
particular distance dependence we measure. To check the possibility of such a scenario we fit the measurements with a linear combination of contributions from all electrodes, assuming noise from each electrode is uncorrelated with the others. Even for this contrived scenario,

CHAPTER 6. ELECTRIC-FIELD NOISE 65
Figure 6.5: Simulated SE distance scaling from 3-μV amplitude noise on RF electrode RF1. The scaling is similar for all RF electrodes. The planar contributions are shown as dashed curves and the normal contributions are shown as dotted curves. Scaled data measurements are overlaid for reference.
see fit in Fig. 6.6, we do not find any agreement with our data. This may seems counter-intuitive at first, since the fits have 10 degrees of freedom (one for each distinct electrode). However, the heating rate distance scalings derived from each electrode are strongly correlated, meaning our 10 degrees of freedom are not independent. This leads to necessary features in the linear combination, such as the dip in noise in the normal direction seen in Fig. 6.6 around 180 μm ion-surface distance, and-
 a fundamental inability to accurately fit to the measured data. Furthermore, allowing correlations between multiple electrodes does not yield better fits to our data. This is expected from our intuition above, as the electric-field vectors from correlated electrodes can be added together. In general terms, correlating multiple electrodes will increase noise in the normal direction and introduce a preferred orientation of the electricfield in the trap plane. Given the strong disagreement between t-
he simulated noise from electrodes and our experimental results, we conclude that our measurements are not limited by technical noise correlated over the area of individual or multiple trap electrodes. These arguments also hold for electromagnetic pickup and Johnson noise on the voltage supply and filter electronics, since we expect noise sources of these types to be correlated over the area of electrodes as well. We have performed an additional test where we deliberately inject noise on electrode-
 7 and measure the distance scaling. The results are described in Section 6.4.2 and confirm our assessment above. Other types of technical noise considered in the literature [6] include direct interaction

CHAPTER 6. ELECTRIC-FIELD NOISE 66
Hea ng rate (quanta/s)
Ion-surface distance (μm)
50 100 200 300
102
Normal Planar
103
Figure 6.6: Simultaneous fit of the measured distance dependence for planar and normal motional modes assuming motional heating is caused by technical noise from all electrodes. The voltages on different electrodes are assumed to fluctuate independently from each other such that the fit is parameterized by the amplitudes of noise on each electrode.
of the trapped ion with electromagnetic interference and space charges. We tested for electromagnetic interference by adding a Faraday cage around the vacuum chamber and found no effect on the heating rates. Space charges due to field emission from the trap electrodes should depend on the applied voltages, but we also found no dependence of heating rates on DC voltages and RF power. In addition to noise at the secular trap frequency, ω, the ion may also be sensitive to technical noise at ΩRF ± ω. -
In our measurements, we expect this effect on the heating rate to be small, since we take care to minimize the ion’s micromotion in both the normal and planar directions (see Ref. [30]). To confirm the absence of ΩRF ± ω noise in our system, we deliberately increase the pseudopotential gradient (in both modes) and find no effect on the heating rate.
6.4.2 Technical noise injection
To experimentally validate the technical noise simulations from Section 6.4.1, we measure the effect of injecting white noise into the system, employing a technique that has been used in experiments at MIT Lincoln Laboratory and our own lab at University of California, Berkeley [46, 49, 83]. Electrode 7, see Fig. 6.1, is chosen for this purpose. Voltage noise is generated with a RIGOL DG4162 arbitrary waveform generator, which produces white noise in the 10 Hz to 100 MHz band. When choosing a nois-
e source, it is important to measure the frequency spectrum around the trap frequency, as some signal generators, such as Agilent 33220A, do not have exactly flat noise spectra around typical ion trap frequencies.

CHAPTER 6. ELECTRIC-FIELD NOISE 67
Ion-surface distance (μm)
50 100 200 300
Normal Planar
Hea ng rate (quanta/s)
103
104
102
Figure 6.7: Planar (blue) and normal (red) heating rate contributions from injected technical noise. Measurements are performed with the scaled Rabi method ( ). Results from Fig. 6.2 provide baseline heating rates. The data shown are the isolated heating rates due to injected noise, derived by subtracting the corresponding baseline values from the raw measured values with injected noise. Dashed curves show the distance scaling from technical noise in both the planar and normal directions when fitt-
ing the data to the technical noise simulation (see text).
Preliminary attempts at the injection utilized a band-pass filter centered around 1 MHz, but did not induce any significant rise in ion heating rates. The band-pass was replaced with an in-line 22 pF capacitor, which acts as a high-pass filter as not to accidentally bias the static DC fields. To isolate the heating rate contributions due to the injected noise from surface noise we subtract the heating rates measured when no noise is injected. We first verify that the baseline-corrected heating rat-
es scale with the square of the noise voltage and then measure the noise scaling for ion-surface distances between 70 and about 245 μm. Fig. 6.7 shows the resulting data in both planar and normal directions as open diamonds. We find that the measurements can be reproduced in our technical noise simulations for a noise voltage of 9.3 μV on electrode 7 and, additionally, voltage noise with 8.5 μV amplitude that is correlated on the four RF electrodes. The distance scaling for these parameters is sho-
wn as dashed curves in Fig. 6.7. We note that the correlated noise on the four RF electrodes cancels in the planar direction due to symmetry, in contrast to noise from a single RF electrode, which we discussed in Fig. 6.5. The reason for seeing noise on the RF electrodes when injecting noise on to any DC electrode lies in the filtering required for operating the out-of-phase drive in our setup. The trap ground is defined by the ground electrode on the trap chip which has some impedance to the true-
 experiment ground outside of the vacuum chamber. Capacitive filtering of the

CHAPTER 6. ELECTRIC-FIELD NOISE 68
injected noise to the trap ground then causes the trap ground to fluctuate with respect to the true ground. The RF electrodes are referenced to the trap ground via a 100 mH inductor [30], however, providing a good reference at very low frequencies, but a high impedance at 1 MHz. Then, from the ion’s perspective the RF electrodes are noisy relative to the trap ground. These measurements support arguments in Section 6.4 that we are not limited by technical noise from noise correlated across the area-
 of electrodes.
6.5 Spatial surface noise correlations
In light of the strong evidence for uncorrelated microscopic noise sources in ion traps given by the observed d−4 scaling in previous measurements [48, 49, 84], it is surprising that our results (∼ d−2.6) deviate so clearly from this scaling. We have shown in the last section that measurements in our trap are very likely not limited by technical noise, leading us to conclude that we must be observing surface noise. There are immediate questions as to how such a scaling can arise, what the noise so-
urces are, and why this trap behaves differently compared to others. In the following we concentrate on the first of these questions. A general model for surface noise with finite correlations considers metallic surfaces to be covered with patches of varying potential [7]. Physically, patches may arise from work function differences across crystal grains, locally varying strain, surface roughness, or adsorption of atoms and more complex compounds on the surface [85]. Fluctuations in the patch pote-
ntials (amplitude or size) lead to electric-field noise then. In the ‘patch-potential’ picture, the behavior of electric-field noise is quantified by a spatial length scale, ζ, over which the surface fluctuations are correlated. While the model exists independently of the physical origins of the patches, and as such does not constrain the frequency or temperature scaling of the noise, a certain correlation length may support the presence of specific noise sources over others. In the limit of spati-
al correlations that are very small compared to the ion-surface distance, ζ d, the electric-field noise from different locations on the surface stems from independent microscopic noisy patches and adds in quadrature at the ion position. Then, for a planar trap geometry, the electric-field magnitude scales as d−4 with distance. Further, there is a polarization to the electric-field noise such that the projection on the normal direction is twice that for the planar directions [9, 46]. In the opposit-
e limit of very large spatial correlations, ζ d, the fields only vary weakly with distance from the surface. Depending on the specific arrangement of patches or the form of the spatial correlation function, the noise may, for instance, be independent of distance or scale as d−1 and the noise may be strongly polarized in the normal direction. At intermediate distances, the scaling coefficient varies smoothly from one limit to the other. Measurements of the electric-field noise distance scaling then-
 probe the spatial extent of noise correlations on the surface. With regard to our data, the measured scaling exponent of β = 2.6 being smaller than β = 4 may be taken as an indication of macroscopic correlation lengths, as compared to the ion-surface distance. To further understand the role of the

CHAPTER 6. ELECTRIC-FIELD NOISE 69
correlation length ζ in describing our data, we will review a general framework for modeling correlated patch-potentials and also give an example for a specific physical realization of patch potentials in our surface trap.
6.5.1 Analytic model
Starting from the characteristic length, ζ, over which the noisy potential patches are correlated, we can explicitly calculate the electric-field noise spectral density vector following Refs. [8, 9, 86]. We assume an exponential spatial autocorrelation function,
Cζ = e−
√
x2+y2/ζ , (6.10)
which arises naturally from random variations of a variable in two or three dimensions, for instance in Poisson-Voronoi tessellations [87, 88]. Then, the expected planar noise spectral density Sp
E is given by
Sp
E(ωt, d) = 2 N ζ2
d SV (ωt)
∫∞
0
dk k3e−2k
(d2 + ζ2k2)3/2 , (6.11)
and the spectral density of noise in the normal direction is higher by a factor of two. With this analytic model, we find that for ζ d, we recover d−4 scaling for both the planar and normal heating rates, as expected from similar microscopic noise models. As the ratio between d and ζ inverts, there is a smooth transition in the exponent of the power law towards the limiting case of ζ d, where the distance scaling approaches a d−1 behavior. We use Eq. (6.11) to simultaneously fit both the measured -
planar and normal distance scalings (see Fig. 6.8), and extract a correlation length of ζ = 106 μm. This provides a good fit to the data, that is comparable to the power-law fit with β = 2.6 from Fig. 6.2. While we can describe our data with a single parameter, the correlation length, the same autocorrelation function can arise from many distinct patch configurations. The curves in Fig. 6.8 effectively show the distance scaling for an average over all patch configurations with the same correlation-
 length. Reproducing this exact scaling with well-defined patches at the trap surface would require either a superposition of overlapping patches or fast switching of patch configurations. Neither scenario is likely to manifest on a simple metallic surface, but the trap used here has a considerably more complex structure. The combination of features like an oxide layer [89] on the aluminium-copper electrodes, adsorbates on the surface, and the influence of surface roughness [90], may allow for mor-
e complex arrangements of charges and fluctuating dipoles. The presence of an insulating layer (the oxide), for example, could separate patch potentials both above and below it, creating a structure of overlapping patches. One might also imagine dynamic patches that shift, rearrange or reassemble on timescales much faster than the experiment (of order one second) [91]. Measuring the surface potentials of this trap directly with a technique like Kelvin probe or scanning tunneling microscopy may pro-
vide additional insight on the noise origin.

CHAPTER 6. ELECTRIC-FIELD NOISE 70
Hea ng rate (quanta/s)
Ion-surface distance (μm)
50 100 200 300
102
103
Normal Planar
Figure 6.8: Heating rate as a function of distance with a fit based on exponential spatial noise correlations. Fitting both data sets to Eq. (6.11) gives a characteristic length ζ = 106 μm.
The general correlation length model used here also assumes an infinite planar metallic surface, which does not quite translate to our surface trap that is composed of many planar electrodes separated by 20-μm wide trenches. Such gaps between conducting surfaces should act as natural boundaries over which noise correlations cannot be established.
6.5.2 Fixed patch potentials
For a more concrete realization of a noise correlation length, we consider non-overlapping patches of fixed size and position while imposing the constraint that correlations cannot form across electrode boundaries. We generate many random patch configurations based on bounded two-dimensional Poisson-Voronoi diagrams with a fixed number of patches in a 4 mm2 area around the trap center [92]. We can extract a correlation length for a particular patch configuration via an exponential fit to its calcu-
lated spatial autocorrelation function [88]. An example configuration with 100 patches is shown in Fig. 6.9(a), where the corresponding correlation length is ζ = 140 μm. Each patch is assumed to generate noise independently of other patches and the noise amplitude on each patch is a parameter for fitting the patch potential distance scaling to our data. The fit result for the example patch configuration in Fig. 6.9(a) is shown in Fig. 6.9(b). A consequence of moving from the analytic correlation l-
ength model (previous subsection, Fig. 6.8) to a defined tiling of patches is a general anisotropy of noise in different planar directions, as exemplified by the noise spectral densities ‘Planar X’ and ‘Planar Y’ in Fig. 6.9(b). Here the simulated ‘Planar Y’ and ‘Normal’ distance scaling matches the data well, but this is not a unique solution. Many patch configurations with similar average patch sizes reproduce fit results similar to the example given in Fig. 6.9. Among these well fitting

CHAPTER 6. ELECTRIC-FIELD NOISE 71
Hea ng rate (quanta/s)
Ion-surface distance (μm)
50 100 200 300
102
103
Normal Planar Y Planar X
(a) (b)
Figure 6.9: (a) Example of a randomly generated patch configuration based on PoissonVoronoi tesselation with a calculated correlation length ζ = 140 μm. (b) Weighted sequential least squares fit to experimental data for the distance scaling in the ‘Planar Y’ and ‘Normal’ direction based on the patch configuration in (a) and variable voltage amplitude on the patches. The ratio between the largest and smallest voltage is constrained to be less than four. The ‘Planar X’ distance scaling takes no part-
 in the fit, but is shown to demonstrate the noise anisotropy in the planar directions.
configurations, we find that the center electrode, DC 9, must contain at least two patches, else the distance scaling behaves similarly to the technical noise case shown in Fig. 6.4(bottom right). Matching distance scalings in the planar X and Y directions can be found when the center electrode is diagonally bisected by two patches, or when it contains several patches that meet close to the electrode center. Comparing the fixed patch configuration to the general correlation length picture, we obse-
rve that the constraints posed by the electrode geometry lead to slightly longer correlation lengths, but still ζ is about 100 μm. The key difference, as explained earlier, lies in the expected polarization of electric-field noise. The general model in Sec. 6.5.1 is an effective averaging over many random configurations, without preferential patch orientations. Thus, the electric-field noise is isotropic in all planar directions. In contrast, the fixed patch configuration generally features differ-
ent electric-field noise in the planar directions. We measured the planar electric-field noise in both the y and x + y-directions at an ion-surface distance of 170 μm and found them to be the same within the experimental uncertainty, ruling out some patch configurations that otherwise fit the observed distance scaling in the y-direction alone. Further work on measuring the electric-field noise in three dimensions would be needed in order to achieve a better understanding of the nature of noise cor-
relations in this trap.

CHAPTER 6. ELECTRIC-FIELD NOISE 72
Figure 6.10: Comparison of the heating rates in this paper with those of other ion traps. The filled gray circles reproduce the data compiled in Ref. [6] for single-ion motional heating, with the exception of surface-treated traps. Blue (dark) and yellow (light) crosses show the results of distance scaling measurements in the same trap from Ref. [48] and Ref. [49], respectively.
6.6 Heating rate comparison
Finally we look at the magnitude of electric-field noise in our trap compared to other measurements in the community. Data collected in the review of Brownnutt et al. [6] form the basis of comparison, see Fig. 6.10, where we also included the recent data from Ref. [48] and Ref. [49] (highlighted as colored crosses). All data shown have been taken in room temperature traps with untreated surfaces. Following the convention in Ref. [6], both the heating rate and the electric field spectral noise dens-
ity are scaled to 2π × 1 MHz secular frequency, assuming SE ∝ ω−1. Additionally, the heating rate is scaled to correspond to the case of a 40Ca+ ion. In comparison to all data on the plot, our heating rates are on the low end across the measured ion-surface distances. Looking specifically at the measurements for distance scalings performed in the same trap, our results are about a factor 5 - 20 lower than the ones reported by Boldin et al. [48], and of similar magnitude to measurements of Sedlacek-
 et al. [49]. The similarities in the absolute noise magnitudes between the traps is also interesting, since one would generally expect that, given some density of microscopic noise sources, longer correlation lengths should increase the noise magnitude in our device. Regardless of the physical origin of noise in the different traps, it is worth noting that with

CHAPTER 6. ELECTRIC-FIELD NOISE 73
regards to device miniaturization, the distance scaling we observe (d−2.6) scales favourably compared to the d−4 dependence observed in other traps. This observation provides us with some motivation to understand the origin of noise in this device and work towards further miniaturization of ion traps.
6.7 Concluding remarks
To summarize, we have presented measurements of the distance scaling of electric-field noise in a surface ion trap, together with measurements of the frequency dependence. In contrast to previous results, the noise distance scaling for our trap is described by a d−2.6 power-law behaviour. The data cannot be explained by noise from independent microscopic sources at the surface; we require the addition of a macroscopic length scale for the noise that extends to about 100 μm. The presence of a macro-
scopic length scale indicates a non-trivial surface structure and/or correlated dynamics of noise sources taking place at the trap electrode. We note that our results do not rule out microscopic noise sources, if they can give rise to spatially correlated dynamics at the frequencies of our measurements. Further, some abstract noise models, for instance the thermally activated two-level systems commonly used to explain 1/f noise [93, 79], are agnostic to distance scaling, as they only consider temp-
erature and frequency [94]. In contrast, the patch potential model used here only considers spatial noise correlations, but not the frequency or temperature properties. A self-consistent description of the noise dependence on frequency, temperature and distance at the same time likely requires identifying a physical system (or several [84]) in place of an abstract model. In conclusion, our results add to the growing body of experimental results on electric-field noise in ion traps, and specificall-
y show that the scaling of electric-field noise with distance is not universal in surface traps of similar size.
6.8 Two-ion motional heating
Up to now, we have focused on the one-dimensional heating rate of a single ion, which has eigenstates of motion that are characterized by the trap frequencies of the principal axes. As we scale up to multiple ions, e.g. in a linear chain, additional motional degrees of freedom are introduced, and the eigenstates of motion become more complex. These new eigenstates allow us to probe different projections of electric-field noise, which may aid in determining its origins. In this section, we will ste-
p through the case of a two-ion linear chain to demonstrate the potential advantage of heating measurements with multiple ions. We also offer a general formulation for multi-ion heating rates, which follows closely from the single ion analysis done in Section 6.1.

CHAPTER 6. ELECTRIC-FIELD NOISE 74
Figure 6.11: Illustration of normal modes oriented along the axial direction for a two ion chain.
6.8.1 Theory
Let’s focus on the axial direction of a two-ion string, which has separation given by
dion−ion =
( e2
2π 0mωz2
)1
3
, (6.12)
which is ∼ 5 μm at ωz = 2π × 1 MHz axial trap frequency. In this dimension, there are two modes of motion, shown in Fig. 6.11, which are termed as the center-of-mass (COM) mode and the stretch/breathing mode. From the illustrations, we can see that the COM mode is mostly sensitive to dipole electric-field noise, whereas the stretch mode is mostly sensitive to quadrupole noise. The general form for the heating rate of multiple ions in the k-th mode is given by,
 ̄ ̇n(k) = e2
4mħωk
S (k)
E (ωk), (6.13)
where
S (k)
E (ω) = 2
∑
i,j
∫∞
−∞
dτ 〈δE(k)
i (τ )δE(k)
j (0)〉 e−iωτ , (6.14)
is the spectral density for multiple ions interacting with electric-field noise, where the summation is over all pairwise permutations of ions i and j, and we define δE(k)
i (t) = δE(t, ri) · c(k)
i
to be the projection of the electric-field noise onto the k-th mode at the i-th ion. c(k)
i is the normalized mode function that satisfies
N
∑
i=1
c(k)
i · c(k′)
i = δk,k′. (6.15)
for N ions. In the case of two ions, we have
c(com)
1 = c(com)
2 = √eˆi2 , and − c(str)
1 = c(str)
2 = √eˆi2 (6.16)
where eˆi is the unit vector in the i ∈ (x, y, z) direction. Assuming spatially correlated electric-field noise at ion 1 and ion 2, i.e. δE(t, r1) = δE(t, r2) we can calculate the common

CHAPTER 6. ELECTRIC-FIELD NOISE 75
mode spectral density experienced by the two-ion system,
S (com)
E (ωcom) = 2
∫∞
−∞
dτ
[ 〈δE1(τ )δE1(0)〉
2 + 〈δE2(τ )δE2(0)〉
2 + 〈δE1(τ )δE2(0)〉
]
e−iωcomτ
= 2SE(ωcom), (6.17)
where SE(ωcom) is the single ion spectral density. And we can calculate the stretch mode spectral density
S (str)
E (ωstr) = 2
∫∞
−∞
dτ
[
− 〈δE1(τ )δE1(0)〉
2 − 〈δE2(τ )δE2(0)〉
2 + 〈δE1(τ )δE2(0)〉
]
e−iωstr τ
= 0. (6.18)
In the general case, it should be noted that the COM mode can be excited by a uniform electric field, E(t). But the stretch mode is sensitive to differential motion, and thus is excited only by electric-field gradients, which we can estimate to be E(t)/D, where D is the characteristic distance from the trap electrodes to the ion [6]. So for a stochastic electric field, the COM mode heating rate scales roughly as the variance of the electric-field fluctuations, assuming zero-mean, n ̇ ̄(com) ∼ 〈E2(-
t)〉; and the stretch mode heating rate scales roughly as the variance of the corresponding field-gradient,  ̇n ̄(str) ∼ 〈[dion−ion · E(t)/D]2〉 [95].
6.8.2 Simulated noise sources
Heating rates of two ions in the stretch mode may provide additional insight into the mechanisms behind electric-field noise on ion trap surfaces. Here, we lay the groundwork for future studies of stretch mode heating rates by calculating the expected noise as a function of ion-surface distance. The simulations iterate through three distinct noise models mentioned previously for modeling the single-ion heating rates: microscopic surface noise, macroscopic surface noise, and technical noise. For ea-
ch case, we find the stretch mode heating rates to differ in d-dependency and noise amplitude as compared to single-ion heating rates.
Microscopic noise
As discussed in Section 6.1, there are a multitude of possible models for microscopic noise sources which include two-level fluctuators, adatom dipoles fluctuations, and microscopic patch potentials. In terms of distance scaling, all these microscopic noise sources contribute to the single-ion heating rate as d−4 [50]. For the two-ion case, the COM mode acts as a heavy single ion, and also exhibits d−4 behavior. The stretch mode, however, does not follow the same trend because it is sensitive to d-
ifferential electric-field noise. This means that quadrupolar fluctuations, i.e. fluctuations in the curvature of the trapping potential, effect the heating of the stretch mode. To study

CHAPTER 6. ELECTRIC-FIELD NOISE 76
the distance scaling of the stretch mode heating, let us consider microscopic surface dipole fluctuations. Following the analysis in [64], we find that the autocorrelation of the electricfield is
〈Ez(t)Ez(0)〉 = 3πσd
8(4π 0)2d4 〈μ(t)μ(0)〉 , (6.19)
where μ(t) is the surface dipole and σd is the dipole surface density. We also find that the autocorrelation of the quadrupole field is
〈Qzz(t)Qzz(0)〉 = 45πσd
32(4π 0)2d6 〈μ(t)μ(0)〉 . (6.20)
Thus, the spectral density of the quadruatic potential fluctuations is
SQzz = 15
4d2 SEz . (6.21)
Converting this to a stretch mode heating rate [96], we find that
n ̇ ̄(str) = e2(dion−ion)2
4mħωs2
SQzz . (6.22)
Combining Eq. (6.20), (6.21), and (6.22), we see that the stretch mode heating rate scales as  ̇n ̄(str) ∼ d−6 for microscopic surface noise sources.
Macroscopic patch potentials
In Section 6.5.2, we argued that microscopic noise was not the main mechanism behind our experimentally measured ion heating, since we observed a distance scaling of ∼ d−2.5 for the single-ion heating rate. In fact, we required a macroscopic noise model to describe our data. Specifically, we revisit the model of fixed macroscopic patch potentials from Section 6.5.2, taking the same fixed patch configuration and voltage noise amplitudes as in Fig. 6.9(a). The simulated results of the stretch mode h-
eating is shown in Fig. 6.12. We find a rough distance scaling of d−4 in both the planar and normal polarizations in contrast to the singleion heating rate d-scaling of ∼ d−2.6. Additionally, the stretch mode heating rate is smaller in magnitude than the single-ion case, which may allow for more precise measurements of the heating rates and consequently the distance scaling.
Technical noise
The two-ion stretch mode heating rates may also act as a probe for technical noise on the trap electrodes. Following a similar analysis as in Section 6.4, we simulate the stretch mode heating as a function of ion-surface distance under the assumption that the heating rate is dominated by 3 μV amplitude noise on individual trap electrodes. From the symmetry of our elevator trap, we need only consider the effects of electrodes 1, 3, and 9 in order to the

CHAPTER 6. ELECTRIC-FIELD NOISE 77
Figure 6.12: Simulation of two-ion stretch mode heating rates as a function of the ionelectrode distance, with COM frequency of ωt = 2π × 1 MHz. These simulations describe noise with projection in both the normal (red) and planar y-axis (blue) axial stretch modes. The particular patch configuration and voltage noise amplitudes are taken from Fig. 6.9. The shaded region acts a guide for the eye to illustrate a d−4 dependence.
fully characterize the technical noise from all other DC electrodes. The simulation results are shown in Fig. 6.13. In contrast to the single-ion technical noise d-scaling, we find that stretch mode noise in both the planar and normal directions evolve similarly with d. In particular, the ‘dip’ feature present in most of the normal-axis heating rates from Fig. 6.4 is eliminated since the stretch mode is largely agnostic to the absolute electric-field noise magnitude. Additionally, the stretch mode-
 heating rate is maximum around a trap height of order 100 μm, and decreases as the ion heights approach both the low and high extremes. This trend suggests that twoion stretch mode operations in our elevator trap may be less sensitive to technical noise at low and high ion heights. Furthermore, we note that the stretch mode heating between 50 μm and 100 μm scales linearly with d from technical noise on electrode 3 and remains roughly constant from technical noise on electrodes 1 and 9. This level-
ing off of the stretch mode heating below 100 μm significantly differs from the predicted distance scalings of d−6 for microscopic noise and d−4 for macroscopic noise models. This disparity implies that measurement of the stretch mode heating rates below 100 μm along a single polarization may be a sufficient check for the presence of technical noise. In terms of the local distance scaling in this regime, we expect to measure a distance scaling exponent of β ≈ 0 in the presence of technical noise a-
s compared to β ≈ 4(6) if the noise is dominated by macroscopic (microscopic) surface noise. Such a large signal

CHAPTER 6. ELECTRIC-FIELD NOISE 78
Figure 6.13: Two-ion stretch mode heating rates as a function of the trap height, with COM frequency of ωt = 2π × 1 MHz. The simulations are evaluated with 3 μV amplitude noise on DC electrodes 1 (orange), 3 (blue), and 9 (red). Planar stretch mode contributions are shown with dashed lines while normal stretch mode contributions are shown with dotted lines
can be clearly observed by measurement on a single stretch mode, especially with small errors associated with low stretch mode heating rates. This may be useful when physical or practical limitations prevent measurement of multiple motional modes. The two-ion stretch mode technical noise signal is more prominent than the single-ion case, where any one mode may exhibit a technical noise distance scaling in the range −2 . β . 1 between trapping heights 50 μm and 100 μm. This large variation of β for-
 single-ion heating rates makes it difficult to distinguish technical noise from other potential noise sources such as macroscopic or microscopic surface noise, which lead to β values between −1 and −4. Thus, in order to validate the presence or absence of technical noise with a single ion, we must turn to measurement of additional motional polarizations.

79
Chapter 7
Wire-mediated long-range ion-ion
coupling
In the context of quantum information processing, individual trapped ions make ideal qubits with long coherence times and high-fidelity state initialization, manipulation, and readout. Multi-qubit gates are mediated by quantized motional states shared among the trapped ion qubits, and this collective motion of trapped ions is generated by ion-ion and ion-field Coulomb interactions. As we discussed in Chapter 2, ion trap systems typically consist of linear chains of crystallized ions, where the ion-
-ion separation within these chains is ∼ 5 μm. At this separation distance, the Coulomb coupling between the ions is strong, leading to fast multi-qubit gates. With the linear ion string design, several groups have demonstrated highfidelity gate operations [2, 3, 4] and employed fully-controllable small quantum computers up to 11 ions [97, 22]. Currently the challenge remains to scale up trapped ion systems to more qubits and more ion-ion interactions, which will ultimately allow for nontrivial ga-
te operations and implementation of quantum supreme algorithms. As we scale to greater number of qubits, the physical distance between ions becomes large, making a necessity for efficient long-range ion-ion communication. The trapped ion community has investigated several methods of long-range interactions between ions. One viable strategy is to control small ion chains and physically shuttle these small chains into various zones for operation [44, 42, 26, 98]. Another scheme is to transfer quantu-
m information via optical fibers and establish non-deterministic photonic links between ions [99, 100, 101, 102, 103, 104]. In this thesis, we present a novel ion-ion coupling mechanism for long-range interaction: motional dipole-dipole coupling of two ions in separate traps enhanced via an electrically floating metallic wire. Here, two ions are held in separate trapping zones, and their motions induce oscillating charges in a shared wire, which acts as an intermediate bus to communicate between t-
he ions. A cartoon schematic of this system is illustrated in Fig. 7.1. Coulomb-mediated coupling of atomic ions in separate potential wells has been demonstrated for ion separations of ∼ 50 μm [105, 106]. However, this direct coupling is limited to close-range interactions, as the Coulomb interaction strength, Ωex, falls off as 1/r3, r

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 80
Figure 7.1: Schematic of the ion-wire-ion system, with ions separated by 620 μm. The vertical motion of each ion induces image currents in the wire and vice-versa.
being the ion-ion separation. With direct Coulomb coupling between two ions separated by r = 620 μm, we expect ∼ 600 ms exchange rate between the motional states of the ions. In comparison, our wire-mediated coupling achieves an order of magnitude improvement in the energy exchange rate. The main motivation behind this project is the demonstration of ion-ion entanglement via a classical wire. This achievement would have immediate implications for the development of trapped ion quantum systems, sug-
gesting that a noisy quantum bus does not preclude the transfer of quantum information. Furthermore, this wire-mediated coupling also allows for sympathetic cooling between ions in different zones. This technique allows for cooling of qubit ions without affecting their internal quantum states. Such functionality may be necessary to quench the anomalous heating of ion motion or remove excess energy from shuttling, separation, and recombination operations. This may also open a path for cooling and t-
rapping ion species that cannot be laser cooled, allowing precision measurements of such particles. Though the concept of sympathetic cooling is well established, experiments as of present have only been able to sympathetically cool co-trapped ions [107, 108, 109, 110, 111, 112]. Because these ions have to be in the same trapping potential, this limits the types of particles that may be probed. For example, ions with widely different masses cannot be co-trapped, and therefore could not be sympathe-
tically cooled. Our scheme consists of separate trapping zones with independent field control, thus allowing simultaneous trapping of such different ions and wire-mediated interactions between them. This architecture may also lead to trapping of single electrons and protons as well as their antiparticles [113].
7.1 Coupling Mechanism
The central feature in our experiment is the wire-mediated interaction between ions, which is characterized by the electrostatic ion-wire coupling strength, κ ≡ g/(2mω). In this section, we describe ion motions in the presence of κ and develop a classical method for the calculation of the ion-wire coupling strength.
7.1.1 Classical dynamics
We begin with an abstract picture of the two-ion interaction, agnostic to the coupling mechanism or physical architecture that is implemented. We may model the system as a pair of

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 81
Figure 7.2: Analytic classical energy evolution of two resonant trapped ions coupled with coupling strength κ = g/(2mω) = 2π × 80 Hz. In this idealized case, full exchange of the energies occurs at t = 3.2 ms.
coupled harmonic oscillators, with the classical Hamiltonian for such a system given by
Hˆ =
2
∑
i=1
1
2 miv2
i+
2
∑
i=1
1
2 miω2
i x2
i + gx1x2, (7.1)
where mi, ωi, vi, xi are the mass, frequency, velocity, and position of ion i, respectively. Again, the g parameter represents the coupling strength between ion 1 and ion 2, and its physical origin is detailed in Section 7.1.2. For pedagogy, let us consider the dynamics of identical ions in the resonant case such that m1 = m2 = m and ω1 = ω2 = ω. Then solving for each ion’s equation of motion gives
x1(t) = A1 cos(ν+t) + B1 sin(ν+t) + A2 cos(ν−t) + B2 sin(ν−t), (7.2)
x2(t) = A1 cos(ν+t) + B1 sin(ν+t) − A2 cos(ν−t) − B2 sin(ν−t), (7.3)
where ν2
± = ω2 ± g/m are the eigen-frequencies of the normal modes. Now inserting initial conditions of x1(0) = A and x2(0) = x ̇ 1(0) = x ̇ 2(0) = 0, we can simplify the above equations to
x1(t) = A
2 [cos(ν+t) + cos(ν−t)] = A cos
( ν+ − ν−
2t
)
cos
( ν+ + ν−
2t
)
, (7.4)
x2(t) = A
2 [cos(ν+t) − cos(ν−t)] = −A sin
( ν+ − ν−
2t
)
sin
( ν+ + ν−
2t
)
. (7.5)

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 82
The experiments in this thesis are operated in the weak coupling limit, g/m ω, where we have
ν± ≈ ω ± g
2mω , (7.6)
meaning the system has a beat frequency of ωbeat = ν+ −ν− = g(mω)−1 and a beat oscillation period of tbeat = 2πmω/g. Thus, we expect to see a full transfer of the energy at an exchange time of
tex = πmω
g . (7.7)
An illustration of this resonant interaction using the results from Eq. 7.4 and Eq. 7.5 is shown in Fig. 7.2, where we have set ω = 2π × 400 kHz, and g/(2mω) = 2π × 80 Hz.
7.1.2 Equivalent circuit model
To further study the coupled ion dynamics and calculate g, we map our ion-wire-ion system to a lumped element circuit. Because the ion is harmonically trapped, the harmonic motion induces flow of image charges in the wire, creating image currents. As such, we may perform analysis on an electrically equivalent model of the ion motions and the image currents following the formulation by D.J. Wineland, H.G. Dehmelt, and D.J. Heinzen [114, 115].
Ion-wire interaction
We start with the assumption that the ion-wire interaction can be modeled by a trapped ion held between two conducting parallel plates, as shown in Fig. 7.3(left). Assuming that the plate dimensions are much larger than the separation, we neglect edge effects and find that the current induced by a harmonically trapped ion is
I = ez ̇
Deff
, (7.8)
where Deff ≡ Uw/Ew
z is the effective distance of a trapped ion to the wire and determined by ratio of the voltage on the wire, Uw, to the generated electric-field at the trapped ion position, Ew
z . Deff may be approximated by the physical ion-wire distance, but its exact value depends on the geometry of the wire. In this picture, the equation of motion for a trapped ion is given by
mz ̈ = −mω2
z z + Fw (7.9)
where Fw is the force exerted by the wire onto the ion,
Fw = eV
Deff
+ Find. (7.10)
Find is an additional back-action force on the ion from the induced charges in the wire, but for a single ion, this term is small and may be neglected [114]. Combining Eq. (7.8), Eq. (7.9),

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 83
Figure 7.3: (Left) Electromechanical circuit diagram of ion between plates of a parallelplate capacitor which is grounded on one end and floating on the other. (Right) Electrically equivalent circuit model of a single harmonically trapped ion, represented with a series LiCi circuit coupled to (i.e. parallel with) a floating wire with capacitance Cw to ground.
and Eq. (7.10), we arrive at
V = Li
dI
dt + 1
Ci
∫
Idt. (7.11)
Here, we have translated the ion and its image current into a series LC system that shunts the electrode capacitor, with an equivalent ion inductance and capacitance of
Li = mD2
eff
e2 , Ci = 1
ωz2Li
. (7.12)
For typical trapped ion parameters, we find that the equivalent inductance is rather large, Li ≈ 5 × 104 H, while the equivalent capacitance is rather small, Ci ≈ 2 × 10−18 F. These equivalences allow us to relate the dynamics of the circuit in Fig. 7.3(right) with the dynamics of the circuit in Fig. 7.3(left).
Ion-wire-ion coupling
Equipped with the understanding that a single harmonically trapped ion can be modeled as a series LC circuit, we can now tackle the case of two ions coupled via a shared electrode wire. In this case, we now have two resonant systems that are electrically connected, see Fig 7.4(left), and the equivalent circuit which models the system is shown in Fig. 7.4(right). Cw is the capacitance of the wire to ground, which we calculate both analytically and numerically with finite-element simulations. We hav-
e also added the resistance, R, of the wire to model a more physically realistic system. The classical solution to the dynamics of this circuit in the resonant case with identical ions may be expressed in terms of the circuit parameters as [57]
tex = Cw
ωz Ci
= mωz
e2 CwD2
eff . (7.13)

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 84
Figure 7.4: (Left) Schematic of two ions between parallel-plate capacitors; they are connected via a floating wire and a common ground. (Right) Equivalent circuit of two harmonically bound ions coupled to each other through a shared wire with resistance R and capacitance Cw to ground. Each ion is represented with inductance Li and capacitance Ci. The current Ii in each branch corresponds to the velocity its respective ion.
Analogously, we may define the coupling strength, κ, as
κ= g
2mωz
=π
2
1
√LiCw
=π
2
e2
mωz
1
Cw D2
eff
. (7.14)
In this form, we immediately see various parameters that affect the exchange time, tex, which we desire to minimize for optimal performance. Heuristically, there are two categories of parameters in Eq. 7.13: operational parameters, which may be adjusted in-situ, and design parameters, which are derived from the geometry of the wire and trap. The operational parameters include the ion charge e and mass m as well as the trap frequency ωz. In terms of these parameters, we find that low mass and highl-
y charged ions with low trap frequency ωz lead to an increase in the exchange rate. Intuitively, we are increasing the electric dipole of each ion, and thus increasing the coupling strength. Additionally, increasing the number of ions leads to faster exchange times, though the improvement is only linear due to the e2/m dependence. The design parameters consist of the wire capacitance to ground Cw and the effective ionwire distance Deff. Eq. 7.13 suggests we must engineer the wire to have minimum c-
apacitance to ground, Cw, in order to maintain the image currents in the wire. This logic also shows why the coupling wire must be electrically floating and not directly connected to ground. As we detail in Section 7.2.1, the wire geometry, vis-a`-vis the electric fields, may be designed to maximize the ion-wire coupling at specific physical ion heights. Though in general, Deff increases as the ion gets closer to the wire.

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 85
Figure 7.5: Isometric view of the double trap. Ions are held above two distinct trapping regions with mirrored electrode layout. In each trapping region, there are 8 DC electrodes colored blue and 4 RF electrodes (operated in the out-of-phase configuration) colored green. The two regions are connected with an electrically floating center electrode wire, colored red.
7.2 Double trap
Up to this point, we have discussed the ion-wire-ion coupling dynamics while remaining agnostic to the physical implementation. In this section, we turn our attention towards the physical design of the ion-wire-ion system, detailing the optimally engineered aspects as well as challenges faced. Figure 7.5 shows an isometric rendering of our two surface traps separated by 620 μm. We jointly term these two traps as the ‘double trap’, consisting of the so-called top and bottom traps. Both the top doub-
le trap and bottom double trap comprise of 8 DC electrodes, colored blue in Fig. 7.5, and 4 RF electrodes, shown in green. The distinguishing feature of our double trap is a central electrically floating wire which connects the centers of the top and bottom traps and acts as the coupling wire between ions in the separate traps. This center wire electrode, colored red in Fig. 7.5, is the only electrode on the trap with no connection to external control voltages. Similar to the elevator trap discuss-
ed in Chapter 4 and detailed in ref. [30], the double trap is operated with out-of-phase RF drives. Thus, the planar confinement in each trapping region is controlled by the RF pseudo-potential while the vertical trapping potential at each site is fully controlled by DC fields. This feature provides greater trap frequency stability in the vertical axis. The stability in this direction is particularly important as our trap is engineered to maximize coupling of the vertical ion motion to the wire.

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 86
Figure 7.6: Microscope image of the double trap.
7.2.1 Design parameters
Figure 7.6 shows a microscope image of the double trap, providing a more accurate representation of the dimensions. Our trap is coated with 1-μm-thick aluminum-copper using the process discussed in Section 5.1.2. The RF electrode pads have dimensions of 145 μm × 145 μm with 30-μm-wide leads. The DC electrodes in each trap are arranged in a mirrored geometry across the midpoint of the double trap. The two traps are separated by 620 μm, measured from the center of each trapping region, and share an -
electrically floating central wire. This coupling wire consists of two square paddles connected together by a narrow strip. The paddle geometry, with dimensions 120 μm × 120 μm, optimizes the ion-wire coupling strength at a trapping height of 50 μm by maximizing the vertical electric-field from the coupling electrode. The strip connecting the paddles is kept at a narrow 30 μm width to minimize the total capacitance of the wire to ground. Each trapping site holds a single 40Ca+ ion, where pseudo-po-
tential confinement in the planar directions is generated with an out-of-phase RF drive at 36 MHz and ∼ 100 Vpp, giving planar trap frequencies of ωx,y ≈ 3 MHz. In the vertical axes, the motional trap frequencies are tunable up to ωz = 2π × 2.5 MHz, limited by the ±10 V range on each DC electrode. This allows simple control of the interaction by tuning the ion vertical trap frequencies in and out of resonance.
Coupling strength optimization
From Eq. 7.14, we saw that the coupling strength, measured in Hz, is characterized by κ = g/(2mωz). Here, we discuss the design aspects of our trapped ion system which maximize the coupling strength, κ, to achieve strong ion-wire-ion interactions. Though various wire geometries may be investigated, we focus on the minimalist design of two square paddles connected by a narrow strip in order to maintain manageable simulation and fabrication.

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 87
Figure 7.7: Ion-wire coupling strength, κ/(2π), as a function of paddle size for a fixed ion height of 50 μm and 500 kHz trap frequency. The coupling strength κ/(2π) is maximized around 2π × 57 Hz with a paddles size of 120 μm × 120 μm
First, we wish to minimize the effective ion-wire distance Deff by adjusting the paddle size. Because Deff ≡ Uw/Ew
z , the paddles must be designed to maximize the electric-field (at particular ion positions in each trap) generated by a voltage on the coupling electrode, thus also maximizing the interaction between the ion and the wire. We choose to optimize the electric-field at an ion height of 50 μm in both traps as a balance between poor coupling strength at high heights and large electric-field noise and trap instabilities at low heights. Figure 7.7 shows the ion-wire coupling strength as a function of th-
e edge-length of the square paddle for a fixed ion height of 50 μm. This specific calculation is evaluated at ωz = 2π × 1 MHz trap frequency using the gapless plane approximation [45] mentioned in Section 4.1 and Section 6.4.1. From this, we find that the coupling strength at 50 μm is maximized for a square paddle of size 120 μm × 120 μm. With this chosen paddle size, an ion located 50 μm above the wire has an effective distance of Deff ≈ 133 μm and a coupling strength of κ ≈ 2π × 57 Hz. For this -
set geometry, We may additionally investigate the coupling strength for various ion heights. The simulated results for this are shown in Fig. 7.8. We find that the coupling strength, κ, roughly follows a d−3 scaling, originating from the D2
eff dependence of our wire’s finite geometry. The other design parameter of concern is the total capacitance of the wire to ground, Cw, which should be minimized in order to maximize κ. With the paddles sizes fixed, the remaining free parameters are the length and width of the strip connecting the paddles. The length is set to 500 μm in order to separate the ions enough such that the electric field from electrodes in the bottom trap will have negligible effect on an ion in the top trap and vice-ve-
rsa. The strip width is set to a narrow 30 μm to minimize Cw while still maintaining

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 88
Figure 7.8: Ion-wire coupling strength, κ/(2π), as a function of physical ion height, measured from the center of a 120 μm × 120 μm paddle. The coupling strength κ/(2π) is calculated at a trap frequency of 500 kHz and roughly follows a d−3 scaling.
sufficient current flow from one end of the wire to the other. With these parameters, we calculate a capacitance of Cw = 30 fF using a finite-element solver.
Decoherence sources
In order to observe the coupling signal, the decoherence caused by noise inherent in the wire as well as instability of the ion motions must occur on a slower time-scale than the coupling. This is especially important in the quantum regime, where coherent coupling of the quantized ion motions vanishes in the presence of noise. We review the effect of several noise sources following the analysis in ref. [57] and show that the noise in our double trap wire design may be sufficiently suppressed to al-
low coherent coupling, even with a normal conducting material. One source of decoherence is leakage of the induced current in the wire to ground. We may model this in the equivalent circuit, Fig. 7.4, with a large resistor, Rg > 1013 Ω, in parallel to the capacitor Cw between node A and ground [57]. In this simple picture, the decay constant for the current is 4RgC > 1.2 s, much larger than the predicted coupling exchange time, tex ∼ O(1) ms. Decoherence also originates from current dissipation in-
 the wire due to its finite resistance, which we estimate to be 0.1 Ω. From Eq. 7.8, the induced current in the wire may be calculated to be I = ez ̇/Deff ≈ e√ħωz/m/Deff ≈ 0.1 fA at a trap frequency of ωz = 2π × 1 MHz and optimized Deff ≈ 133 um. Thus, we expect it takes 6.6 × 105 s to dissipate one motional quanta due to the wire resistance, a negligible effect compared to tex ∼ O(1) ms. Another byproduct of the finite wire resistance is Johnson noise, which contributes to

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 89
the motional decoherence of ions trapped above the wire. The Johnson noise power is given by P = kBT ∆f, (7.15)
where kBT is the thermal energy of the wire and ∆f is the bandwidth over which the ion is sensitive to noise. The heating rate generated by Johnson noise in terms of motional quanta is
 ̄ ̇nJ = P
hfz
= kBT ∆f
hfz
= kBT
hQ . (7.16)
In our equivalent circuit model, Fig. 7.4, the Q-factor is given by
Q= 1
R
√ Li
Ci
. (7.17)
With the values we have used up to now, the expected heating from Johnson noise is  ̄ ̇nJ = 0.09 quanta/ms at room temperature. This heating contribution may be significantly improved by operating the trap system at cryogenic liquid helium temperatures. Assuming a resistivity ratio of ρ300K/ρ4K ≈ 50 for the wire [57], the Johnson noise heating rate is reduced to  ̄ ̇n4K
J = 0.02 quanta/s at 4 K. Thus, at cryogenic temperatures, the Johnson noise is not expected to affect the coherent coupling. Finally, we mention a decoherence source not unique to our double trap geometry: excess electric-field noise in trapped ion systems (often termed as anomalous heating), which causes heating and decoherence of the ion motion as discussed in Chapter 6. According to our room temperature measurements in Section 6.2.4, we expect such noise to contribute a heating rate of order 1-
 quanta/ms at 50 μm ion-surface distance. This magnitude of noise would be detrimental to the coherent coupling with tex ∼ O(1) ms. Fortunately, reduction of this noise by two orders of magnitude may be realized with in-situ Ar+ bombardment [116, 117] or operation at cryogenic temperatures [75, 118, 119, 43, 120, 49], bringing the excess electric-field noise heating effect to a negligible  ̇n ̄ex = O(10) quanta/s. For both techniques to reduce motional heating, either cooling or Ar+ bombardment, t-
here is concern that the electrically floating coupling wire may accumulate a large amount of charge, generating a large electric field that may degrade the trapped ion confinement. This problem is addressed in the following Section 7.2.2, where we demonstrate controlled photoelectric charging and discharging of the floating wire in order to neutralize extraneous charge.
7.2.2 Floating wire
The lynch pin of the double trap is the floating electrode wire that connects the two trapping zones. We have seen that its design is optimized to allow fast inter-zone ion-ion coupling of vertical motional modes with minimal decoherence. However, the innate electrical properties of the floating wire (explicitly charge build-up) create challenges for experimental measurement and control.

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 90
Figure 7.9: (Left) Simulated electric-field strength originating from the center floating wire held at 50 mV. The main contribution is in the Ez direction. (Right) Simulated quadrupole strengths from the charged center electrode. The main contribution is in the U2 quadrupole
Charge effect and measurement
To begin, we must understand the effect of charge accumulation on our trapped ion system. As the floating wire builds charge, it distorts the confinement fields generated by the controlled DC and RF electrodes. By symmetry of the paddles and the central ion position, we expect this effect to be largely in the vertical axis of each trapping zone. To verify this intuition, we simulate the floating wire’s contribution to all experimental multipoles as the ion height is scanned with respect to the tra-
p surface. The results, calculated for a floating wire held at a static voltage of 50 mV, are shown in Fig. 7.9. As expected, there are mainly two multipoles, Ez and U2 (both oriented along the vertical axis), affected by the excess charge, and there is little effect seen on the other multipoles. We explicitly note that if the center electrode is held at −50 mV, we see the inverse effect on each multipole. This sign becomes important when working with the U2 multipole, which controls the vertical -
trap confinement. If the center electrode is positively charged, the vertical trap frequency is increased. On the other hand, if the center electrode is negatively charged, a large anti-confinement potential is induced in the vertical direction. In the extreme case of large negative charge build-up on the floating wire, the vertical anti-confinement from the center electrode exceeds the maximum achievable U2 confinement from the controllable DC electrodes, and so we are unable to trap ions in the -
system. The benefit attached to this relation of the U2 multipole to the floating wire charge is the capability to measure the charge by measuring a shift in U2, i.e. a shift in the vertical trap frequency. In our current experimental setup, we have demonstrated the ability to measure trap frequencies with 2π × 100 Hz standard error using 729 nm spectroscopy. Accordingly,

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 91
the U2 quadrupole may be controlled with 0.001 V/mm2 accuracy, which corresponds to a controllable vertical trap frequency resolution of ≈ 2π × 100 Hz around ωz = 2π × 1 MHz trap frequency. From Fig. 7.9, we find that the ion sensitivity, ∂U2/∂Uw, at 50 μm height is approximately 0.06 V/mm2 per 1 mV on the floating wire. Coupled with our trap frequency resolution, this implies that we are sensitive to changes in the floating wire voltage of ∆Vw ≈ 17 μV. Under the assumption of Cw = 30 fF, this cor-
responds to a charge sensitivity of ∼ 3e. Thus, we may utilize the vertical trap frequency as an extremely sensitive tool to probe the charge of the floating wire.
Controlling the charge
In addition to charge measurement, the ability to control the floating wire charge is essential for proper operation of the double trap. One such control method is to install a movable in-vacuum mechanical arm which can make contact with the electrodes on the double trap. With the metallic arm grounded properly, this may provide an avenue to discharge any residual charge build-up on the floating wire, allowing for a ‘reset’ of the voltage. Unfortunately, this iteration of our vacuum system does no-
t include such a mechanism, forcing a search for alternative in-situ non-contact methods of controlling the charge. Ultimately, we found such a method by taking advantage of the photoelectric effect. Typically, the photoelectric effect is considered to be harmful for ion traps [54, 56], but if used correctly, it may be beneficial to operating our double trap. Conceptually, we shine highenergy photons onto the trap surface and excite movement of electrons across trap electrode boundaries. By exposi-
ng laser light onto the floating wire, we expect that electrons flow off of the floating wire. Conversely, exposing other nearby electrodes to the same light is expected to induce flow of electrons onto the floating wire.
Controlling the charge - Results
To measure the magnitude of the photoelectric effect on the center floating wire, we take advantage of the ion’s sensitivity to electric fields. As we have seen from Fig. 7.9, charge build-up alters the electric dipole and quadrupole fields at the ion position. Consequently, by using the ion to measure shifts in both Ez and U2 as a function of laser flux onto the trap surface, we can infer the magnitude of charge on the floating wire. The experimental setup for this measurement consists of sending-
 blue (422 nm) and nearUV (375 nm) light onto the double trap surface. The location of light is chosen to be either centered on the paddle of the top trap (exposing the floating wire directly to laser light) or 200 μm offset from the center, such that the laser does not contact the floating wire. Both the 422 nm and 375 nm beams are measured to have power of 100 μW prior to entering the vacuum chamber, and both beams form an angle of ∼ 10° with respect to the trap surface. The results are shown in-
 Fig. 7.10, where the left (right) plot shows the change in Ez (U2) compensation required to maintain the original ion position (trap frequency). As the

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 92
Figure 7.10: Demonstration of the photoelectric effect on the floating wire charge. Measurements are taken with 375 nm exposure, 422 nm exposure, and standard operation in the top trap (see text). ‘Centered’ beams are directed onto the top trap paddle center at ∼ 10° from the surface while ‘off-center’ beams are displaced 200 μm from the center. (Left) Ez compensation required to maintain the original ion height as a function of exposure time. (Right) U2 compensation required to maintain the origi-
nal trap frequency as a function of exposure time.
cumulative intensity of the laser light on the trap surface increases, we see a gradual trend in the ∆Ez and ∆U2 values, which implies net charging of the center floating wire. Note that positive ∆Ez and ∆U2 values correspond to culmination of negative charge on the center electrode, and vice-versa. Exposing the trap surface to 422 nm and 375 nm beams offset from the center floating wire (respectively shown in green and red in Fig. 7.10), such that the light does not shine onto it, causes electron-
s to flow from the grounded trap onto the floating wire, resulting in a pile-up of negative charge on the floating wire. This negative charge attracts our 40Ca+ ion towards the trap, in the −zˆ direction, and we must apply a positive ∆Ez to compensate for this positional shift, see Fig. 7.10(left). Additionally, negative charge on the floating wire leads to anti-confinement quadrupole fields in the axial zˆ axis, as discussed above. In order to negate this effect, we must apply positive ∆U2 to mai-
ntain the original trap frequency, as shown in Fig. 7.10(right). By exposing the center floating wire directly to blue light (shown in blue in Fig. 7.10), we excite electrons which flow to the surrounding electrodes, implying an induced positive charge on the center electrode. In this case, our 40Ca+ ion tends away from the trap surface in the +zˆ direction, and we need to apply negative ∆Ez to re-center the ion position. Analogously, the geometry of the positively charged center electrode causes -
an increase in the axial, zˆ, confinement. So we must apply negative ∆U2 to re-stabilize the trap frequency to its original

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 93
value. Notice that in Fig. 7.10, we do not show the effect of exposing the floating wire to 375 nm light. The reason being the photoelectric effect caused by 375 light is so strong that exposure onto the center floating wire results in a rapid shift of the ion position. We estimate the effect to cause a shift of ∆Ez & −1 V/mm per minute, leading to rather immediate ion loss. A comparison of Fig. 7.10(left) and Fig. 7.10(right) indicates strong agreement of our measurements with the theory from Fig-
. 7.9. For an ion-surface distance of 100 μm, we expect a scaling between ∆Ez and ∆U2 to take the form of ∆Ez = α∆U2. According to the simulations from Fig. 7.9, we extract a theorized α = 0.1 mm. This is in agreement with the measured scaling of α ∼ 0.11 mm from Fig. 7.10. Under standard operation of the ion trap (shown in black in Fig. 7.10), the center electrode is exposed to 397 nm scatter, continuous and direct 866 nm light on the order of ∼ 10 μW, and periodic direct 729 nm light with power -
∼ 1 mW. We do not observed any shift in the ion position or trap frequency during prolonged normal operation, leading us to rule out any significant photoelectric effect due to light at 729 nm or 866 nm. Additionally, we conclude that a negligible fraction of power from the 397 nm beam is scattered onto the trap surface.
7.2.3 RF and DC electrodes
In addition to the photoelectric effect, excess charge on the floating wire may also originate from its capacitance to neighboring electrodes. Specifically, we consider both RF and DC electrodes as potential sources of time-dependent and static shifts in the overall floating wire potential.
RF voltage mismatch
Let us first investigate the influence of the RF-electrode voltage on the floating wire’s voltage. With a finite-element solver, we calculate the capacitance matrix for all 8 RF electrodes and the central floating wire. As previously stated, we find that the center floating wire has capacitance Cw = 30 fF to ground and the 8 RF electrodes have capacitances of ∼ 0.5 fF to the center wire. Treating this system as 8 parallel capacitive dividers to ground, we compute the magnitude, Vpp/2, of oscillati-
ng RF pick-up on the center electrode as a function of the voltage mismatch between the two out-of-phase RF arms. The simulation results are shown in Fig. 7.11(left) up to a voltage mismatch up to 15% deviation of each RF arm from the mean voltage of 100 V, i.e. 15% deviation corresponds to VRF + = 115V and VRF − = −85V . When VRF + = VRF −, the RF pick-up is nearly zero, as the geometrical symmetry and out-ofphase nature of the RF drive electrodes destructively interferes on the center electrode.-
 As we increase the RF voltage deviation, we see an expected linear increase in the RF pick-up. Additionally, we quantify the effect of the RF voltage mismatch (proportional to RF pick-up) on the ion confinement potential. As shown in Fig. 7.11(right), we see quadratic shifts in the trap frequency at a fixed height of 50 μm. From our experimental measurements,

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 94
Figure 7.11: (Left) Simulated pick-up voltage on floating wire as a function of RF voltage mismatch on the two RF arms. (Right) Simulated shift of the trap frequencies at 50 μm oriented planar and normal to the trap surface as a function of the RF voltage deviation. Note that a 1% deviation is referenced to a mean voltage of 100 V, i.e. 1% deviation corresponds to VRF + = 101 V and VRF − = −99 V.
see Section 5.3.2, we find that the RF voltage deviations for each arm are ∼ 10%, and can be tuned to be . 1%. At this level of RF mismatch, the center electrode RF pick-up effect, ∆f ∼ 500 Hz, is small compared with typical trap frequencies of ft ∼ 1 MHz.
DC cross-talk
Another side-effect of the capacitive coupling between the floating wire and the rest of the trap is a DC shift of the voltage on the floating wire. Specifically, changing the voltage Vi on electrode ei induces a voltage Vf on the floating wire ef . This unwanted Vf affects the multipoles at the ion location, and its dependence is shown in Fig. 7.9. Furthermore, the floating wire is shared between the top and bottom traps of the double trap. Thus, changing any DC electrode voltage in one trap affe-
cts the multipoles in both traps. This cross-talk among the DC electrodes in the double trap leads to difficulties when simultaneously trapping ions in both the top and bottom traps. From experimental measurements and Fig. 7.9, we find that the primary impact of the cross-talk is a shift in ion height and vertical trap frequency. As such, use of our standard multipole control from Section 4.2.2 is no longer feasible since we may no longer assume all electrode voltages are independent. To be explic-
it, we must modify our electrode-multipole mapping from the standard,
M~ = AV~ , (7.18)
where M~ is the multipole vector, A is the control matrix that maps electrode voltages to multipoles (each column of A represents the multipole contributions from one particular

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 95
electrode), and V~ is the voltage vector which represents the voltage values for each electrode. For our double trap setup, this standard mapping is given by

       
Mt
... 1
Mt
8 Mb
... 1
Mb
8

       
=
(T 0 0B
)

       
Vt
...1
Vt
8 Vb
...1
Vb
8

       
=

       
T11 . . . T18
... . . . ... 0
T81 . . . T88 B11 . . . B18
0 ... . . . ...
B81 . . . B88

       

       
Vt
...1
Vt
8 Vb
...1
Vb
8

       
, (7.19)
where T and B are independent control matrices for the top trap and bottom trap, respectively. In order to account for the cross-talk among the DC electrodes, we insert a compensation term into the standard multipole control matrix,
M~ = AV~ + ξmcV~ . (7.20)
Here, our compensation matrix is composed of ξmc, where m a diagonal matrix describing the multipole contributions from the floating wire and c is the capacitance matrix (calculated with a finite-element solver) between each electrode and the floating wire. ξ is a constant scaling factor which allows a degree of freedom for tuning the magnitude of compensation, though ξ = 1 is the default value. Explicitly writing out the matrices from Eq. 7.20 gives

       
Mt
... 1
Mt
8 Mb
... 1
Mb
8

       
=
(T 0 0B
)

       
Vt
...1
Vt
8 Vb
...1
Vb
8

       
+ξ

         
mt
1 0 ... ... 0
0 . . . ...
... mt
8
mb
1
...
... . . . 0
0 . . . . . . 0 mb
8

         

 
ct
1 . . . ct
8 cb
1 . . . cb
8
... ... ... ...
ct
1 . . . ct
8 cb
1 . . . cb
8

 

       
Vt
...1
Vt
8 Vb
...1
Vb
8

       
.
(7.21) With this compensation applied, we find that adjusting DC voltages in one trap no longer shifts the ion height in the other trap. This improvement was imperative for independent control of the top and bottom traps. However, the cross-talk is not fully compensated, as evidenced from shifts of the vertical trap frequency in one trap when voltages are applied to the other trap. Currently, the trap frequency in one trap shifts on the order of 1 kHz per 100 mV applied to the other trap. Further -
improvement upon this compensation will require more accurate modeling of the electrode capacitances and potentials.

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 96
7.3 Wire mediated ion-ion energy exchange
7.3.1 Experimental overview
In this section, we present experimental results for measured ion-ion coupling and energy exchange enhanced through the use of an electrically floating metallic wire. In our system, two trapped ions, which we distinguish as auxiliary (a) and measurement (m), are separated by 620 μm. Each is harmonically bound with dc-tunable vertical trap frequencies, ωa and ωm. When brought on resonance, ωa = ωm, the vertical motion of ion a induces motion of image charges in the coupling wire, modifying its pote-
ntial and in turn, influencing the motion of ion m, and vice-versa. Under this resonance condition, the energy of each ion is expected to swap as shown in Fig. 7.2. Our double trap design, see Section 7.2, is engineered to optimize the coupling of the ion-wire-ion system in terms of speed and stability. With this design, we demonstrate both wire-mediated sympathetic heating (Section 7.3.4) and sympathetic reduction of heating (Section 7.3.5) for separately trapped ions. From the measurements of re-
duced heating, we extract a coupling rate of κ = 2π × 11 Hz, in agreement with simulations of the experimental parameters. Due to abnormally high motional ion heating rates, the ability to measure an oscillating energy exchange, similar to Fig. 7.2, is hindered. In Section 7.4, we discuss potential improvements that may be implemented to lower the heating rates and increase the coupling. Finally, in Section 7.4.3, we review the implications and applications of this work.
7.3.2 Related experiments
No experiment to date has performed energy exchange between two ions through a metal wire. However, two separate groups from NIST Boulder [105] and University of Innsbruck [106] have demonstrated conceptually similar experiments of coupling ions held in two separate potential wells. The coupling mechanism in both cases was simply the mutual Coloumb interaction of the separated ions, with an expected energy exchange rate of
Ωex = q1q2
4π 0s3√m1m2ω1ω2
, (7.22)
where qi, mi, ωi are the charge, mass, and trap frequency of ion i, 0 is the permittivity of free space, and s is the separation distance between the ions. This corresponds to an exchange time of tex = π/(2Ωex). The NIST group measured an exchange time of tex = 155(1) μs at 40 μm ion separation, while the Innsbruck group measured tex = 222(10) μs at 54 μm ion separation. Both measured values of tex were close to the predicted values from Eq. 7.22. The exchange rate decreases with the separation di-
stance as 1/s3. This implies that ion-ion coupling in separate potential wells directly through the Coulomb force is limited to close-range interactions. With two ions separated by s = 620 μm, we expect an energy exchange time of tex ≈ 600 ms between the motional states of the ions. In comparison, our

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 97
wire-mediated coupling achieves an order of magnitude improvement in the energy exchange rate.
7.3.3 Experimental setup
As described in Section 7.2, the RF and DC electronic features of the double trap allow for independent control of vertical trapping height and trap frequency in the top and bottom traps. Each trap holds a 40Ca+ ion which is addressed with an independent set of lasers. Ion loading is performed sequentially in each trap, with a single set of photoionization lasers (at 422 nm and 375 nm) installed onto translation stages for ease of switching between top trap and bottom trap loading. The 397 nm Dopp-
ler cooling beams propagate along the planar xˆ axis while the repumping 866 nm beams are oriented normal to the trap surface along the zˆ axis. Since the coupling is sensitive to the vertical ion motion, Doppler cooling in the vertical mode is essential for experimental operations. It would be ideal to perform Doppler cooling of the vertical mode directly with 397 nm light oriented along the vertical axis, but unfortunately, as stated in Section 7.2.2, we find that exposure of light with waveleng-
ths below 422 nm onto the trap induces photoelectric charging of the floating wire. To avoid this situation, Doppler cooling is achieved on the P1/2 ↔ D3/2 transition using vertical red-detuned 866 nm beams instead of conventional red-detuned 397 nm beams. The functionality of the planar 397 nm beams remains for Doppler cooling in the planar modes and fluorescent detection of each ion onto separate photomultiplier tubes. Additional cooling of the vertical mode is performed with incoherent parametr-
ic coupling of the vertical and planar modes during Doppler cooling [63]. This scheme reduces the equilibrium temperature achievable in the vertical motional mode by a factor of ∼ 4, with a lower limit of 10 mK. State manipulation is performed by two individually focused 729 nm beams which address the S1/2 ↔ D5/2 qubit transitions and point along the vertical modes of each ion. The orientation of these beams as well as the full imaging and detection setup may be seen in Fig. 5.13 of Section 5.4.3.-
 These beams are used to perform carrier Rabi-oscillations, from which the mean motional occupation number,  ̄n, is extracted using fits of these Rabi excitations to thermal state time-evolutions.
7.3.4 Sympathetic heating
As a demonstration of the coupling, we probe the energy exchange between our two remotely trapped ions by measuring the heating rate of ion m near the resonance condition of ωm = ωa. In this experiment, the auxiliary ion a is held 60 μm centered above the bottom trap surface with a fixed vertical trap frequency of ωa = 1.3680(6) MHz and high temperature. Though we are unable to measure the exact temperature, we estimate n ̄a & 10, 000 quanta. The measurement ion m is initialized to  ̄nm = 200 quan-
ta at the start of each experiment and located 80 μm above the top trap surface at the opposite end of the coupling wire.

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 98
Figure 7.12: Shown in red diamonds is the heating rate,  ̄ ̇nm, spectroscopy measured on ion m which demonstrates ion-wire-ion coupling near the resonance condition of ωm = ωa = 1.3680(6) MHz, where error bars represent one standard deviation. The dashed red curve represents a Gaussian fit with power-law frequency scaling, with an extracted s.d. width of the Gaussian peak to be 527 ± 160 Hz. Blue circles represent  ̄ ̇nm measured with ion a detuned to ωa = 1.4380(6) MHz and the dashed blue curve i-
s a power-law fit to the data. No peak is visible within the frequency window, suggesting the coupling is absent, as expected.
Resonant coupling of ion m with ion a is mediated by the shared wire and induces increased heating of ion m. As the trap frequency ωm is detuned from ωa, the coupling is turned off, and the heating rate of ion m relaxes to the baseline values of ∼ 300 quanta/ms. The data which signals this resonant behavior is shown as red diamonds in Fig. 7.12. We fit this data using a combined Gaussian peak and power-law frequency scaling (dashed red curve) and estimate an interaction width of 527 ± 160 Hz. This-
 implies a vertical trap frequency stability of ∼ 370 Hz, which may be caused by high ion temperatures and trap frequency broadening from anharmonicities in the trapping potential, see Section 7.3.5. Unfortunately, we cannot take advantage of techniques to directly measure the vertical trap frequency stability due to our inability to perform ground state cooling and aversion to shine 397 nm light vertically onto the floating center wire. An additional contribution to the large measured interaction-
 width may be the voltage cross-talk effect discussed in Section 7.2.3. From this effect, we have measured that changing the vertical trap frequency of ion m by ∆ωm = 4 kHz shifts the vertical trap frequency of ion a by ∆ωa = 1 kHz in the same direction. This cross-talk is expected to result in a 25% increase in the interaction width. To verify the resonant peak as a true signal of the coupling, i.e. not an artifact of technical noise, we measure the heating rate of ion m across the same frequency-
 range while ion a is set to a detuned vertical trap frequency of ωa = 1.4380(6) MHz. The data for this far offresonant measurement are shown as blue circles in Fig. 7.12 and fit to a power-law frequency

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 99
Figure 7.13: Motional occupation, n ̄, of ion m is plotted with error bars representing one standard deviation. The n ̄ heating of a single ion is plotted (dots) along with a heating rate fit of 206(20) quanta per millisecond (red). A second experiment (diamonds) demonstrates sympathetic reduction of heating of ion m induced by resonant wire-mediated energy exchange with ion a held at 182(15) quanta, resulting in a reduced heating rate of 102(12) quanta per millisecond (blue).
scaling (dashed blue curve). With no discernible peak in this off-resonant dataset, we infer that the resonant data (in red) is valid and not caused by technical noise at 1.3680(6) MHz. In addition, we measure the single-ion heating rates of ion m in the complete absence of ion a and, as expected, find agreement with the data shown in blue. Because we are unable to measure the initial temperature of ion a, a calculation of the coupling rate cannot be determined from this data.
7.3.5 Sympathetic reduction of heating
In order to extract a coupling rate, we move the ions to a regime with lower noise by increasing the resonance frequency from 1.368 MHz to 1.990 MHz. Under this condition, we may monitor the temperature of the auxiliary ion during resonant coupling. Additionally, the ions are shuttled to lower heights (50 μm for ion m and 70 μm for ion a) to increase the coupling signal. Because of the large electric-field noise present in our double trap system, is it not possible to observe the oscillations of e-
nergy exchange between ion m and ion a. However, this does not preclude extraction of a coupling rate. With these parameters, we demonstrate wire-mediated sympathetic reduction of heating of ion m with ion a using a two-part measurement sequence. The first part involves only a single ion m trapped at 50 μm height with no ion present in the companion trap. In this simple configuration, we measure a baseline heating rate of 206(20) quanta per millisecond

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 100
Figure 7.14: Simulated ωz trap frequency shift in a trapping potential expanded to fourth order, centered at 70 μm height, and with nominal ωz.
at ωm = 1.9900(6) MHz, extracted from the red fit line in Fig. 7.13. In the second part, we work with one ion in each trapping site. The auxiliary ion a is trapped at 70 μm height, held at a constant temperature of  ̄n = 182(15) quanta, and set to be resonant with ωm for the entire duration of the experiment. As per the first part, we measure the time-evolution of the motional occupation of ion m and observe a reduction in heating rate to 102(12) quanta per millisecond, see blue fit in Fig. 7.13. -
With a classical model of the ion motions, we extract an effective coupling rate of κ = 2π × 11.23 Hz from the data in Fig. 7.13, corresponding to an energy exchange time of tex = 22.3 ms. The 9% difference between our measured exchange time of tex = 22.3 ms and the predicted exchange time of tex = 24.6 ms from Eq. 7.13 is likely due to uncertainties in the simulated wire capacitance, Cw, or uncertainties in the ion heights of ion a and ion m. As comparison, this wire-mediated energy exchange rate-
 is ∼ 60 times faster than the expected bare Coulomb coupling of 1.347 s for a 2π × 1.99 MHz resonant interaction frequency.
Anharmonic potentials
One side-effect of working with high n ̄ values is the presence trap frequency shifts due to higher-order anharmonic parts of the trapping potential. Under standard operation, the dynamics of ion motion within our traps are approximated using harmonic potentials. As discussed in Section 4.2.2, full control of the DC multipoles up to second order may be achieved with our elevator trap design. However, the trap design does not include enough degrees of freedom to control multipoles beyond the dipole-
s and quadrupoles. In particular, the fourth order multipole coefficient (C4) in the vertical direction, z4, is uncontrolled. A non-zero C4 coefficient is negligible in standard trapped ion experiments because the ion

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 101
is typically held near the motional ground state, with ∼ 20 nm extent for 40Ca+ at ωt = 2π × 1 MHz. However, our experiments work with ion motional occupations up to  ̄n = 5000 quanta, corresponding to a spatial extend of ∼ 1.6 μm of the vertical ion motion. As the extent of the ion motion increases with higher ion temperatures, the ion samples the trapping potential far from the minimum. In this regime, the C4 component becomes relevant to the ion dynamics. Specifically, the trap frequency shifts-
 relative to that of a lowtemperature ion. We simulate this shift in Fig. 7.14 and find a linear trap frequency shift of ∼ 50 Hz per 1000 n ̄ at 70 μm trapping height and nominal trap frequency of ωz = 2π×2 MHz. Preliminary measurements of trap frequency as a function of n ̄ confirm the presence of frequency shifts caused by anharmonicities. However, further investigation is required in order to determine the actual magnitude and trend of the trap frequency shifts. Regardless, the frequency shift -
acts as an effective time-dependent detuning to the coupling experiment. This implies that, without compensation, the effective coupling strength between the remotely trapped ions is reduced as ∆ ̄n =  ̄nm −  ̄na deviates from the initial temperatures.
7.4 Conclusions
To conclude, we have established classical energy exchange between two remotely trapped ions enhanced via a solid-state wire. We believe this is the first demonstration of wiremediated ion-ion energy exchange in an RF (Paul) trap structure. This achievement opens the path for sympathetic cooling of one remote ion with another, regardless of ion species. This may enable precision measurements of ion species not amenable to laser cooling and grants potential control of negatively charged ions and an-
tiprotons. Our results, shown in Section 7.3, are a culmination of 15 years worth of theoretical and experimental efforts. Prior to my time with the H ̈affner lab, several technical hurdles were cleared, and as the torch was passed to me, two main challenges remained: (1) operate and characterize our novel elevator trap with out-of-phase RF drive, and (2) understand the effects associated with our integrated floating center wire and establish control of ions trapped above the wire. Over the course-
 of my thesis work, these two challenges were successfully surmounted, as addressed in Chapters 4, 6, and 7. The original goal of these experiments was to verify that quantum entanglement can be mediated through a normal conducting wire. Unfortunately, even with our efforts and accomplishments over the years, this goal remains out of reach. In this final section, we discuss possible improvements to the wire-mediated coupling which may help bring the energy exchange into the single-quantum regime a-
nd allow for wire-mediated quantum entanglement between remote ions. Such an endeavor is by no means trivial and would likely require several more years of diligent work. In addition, this wire technology may still lag behind other quantum transport techniques, such as ion shuttling or photonic entanglement, in terms of speed and fidelity. However, if the issues of coupling speed and noise are drastically improved (at least 2 orders of magnitude faster coupling and 3 orders of magnitude lower nois-
e), our

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 102
ion-wire-ion coupling may become an indispensable tool for many applications in quantum computation and spectroscopy.
7.4.1 Heating rate reduction
Foremost, we tackle the impediment of high intrinsic heating rates in our trap, which limit the effective sympathetic cooling rate, trap stability, and measurement precision. Our measurements of 207 quanta/ms at ωz = 2π × 1.99 MHz and 50 μm trapping height are roughly two orders of magnitude higher than those measured in our elevator trap, see Chapter 6. Our elevator trap and double trap are fabricated on the same trap chip and operated under the same experimental conditions. Thus, we believe that-
 the source of noise causing high heating rates in the double trap is the floating electrode wire. From simulations of such noise, we find that 5 μV amplitude noise on the floating wire would account for the measured heating rates. As comparison, we refer back to Fig. 6.4, where technical noise of amplitude 3 μV on the center electrode of the elevator trap corresponds to vertical heating rates on the order of 100 quanta/ms. In the elevator trap, our measured heating rates at 50 μm ion height and ω-
t = 2π × 1 MHz trap frequency were on the order of 1 quanta/ms, implying a technical noise amplitude on the center electrode well below 30 nV. The origin behind the floating wire noise is presently unclear and requires additional measurements to determine. Discussions with Markus Teller, Philipp Schindler, and Tracy Northup from the University of Innsbruck lead us to believe that the noise originates from the dielectric material below the floating wire. Electric-field noise induced by dielectric m-
aterials has been shown to affect the heating of ions trapped nearby [89]. Standard surface traps are typically insensitive to such dielectric noise because the grounded metal surface layer acts as an electrical shield between the dielectric and the ion. In contrast, we expect that our electrically floating wire distributes the noise from the dielectric over the entire center wire, effectively translating the dielectric noise into technical noise on the wire and resulting in simulated ion heating -
rates of order 100 quanta/ms. Other candidates for such high heating rates are the motion of charge carriers on the floating electrode wire or relative technical noise voltage fluctuations between the floating wire and the trap ground. From an experimental perspective, we may employ established techniques to reduce the noise in our trap to workable levels. One such technique is in-situ Ar+ bombardment, which has been shown to reduce ion heating rates by two orders of magnitude [116, 117]. Due to t-
he floating wire, care must be taken during the Ar+ treatment to prevent excessive build-up of charge which may prevent further sputtering. From our experimental results in Section 7.2.2, we believe this issue may be mitigated with a controlled photoelectric effect. A caveat of this technique is that it affects only the trap surface, meaning any noise originating from the dielectric beneath the floating wire will not be altered. In this case, the only solution may be to utilize a different dielect-
ric material underneath the floating wire or remove the dielectric completely. Another tactic for reducing the noise is to operate the ion trap at cryogenic temperatures, where previous groups have also shown reduced heating rates by two orders of magnitude [75, 118, 119, 43, 120, 49].

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 103
7.4.2 Enhancements
With an established low-noise system, we may further improve the coupling strength by increasing the ion motional dipole in each trap. The first strategy for this enhancement is to increase the total number of ions [105], which will result in a linear increase to the coupling rate according to Eq. 7.13. A second pathway towards faster coupling rates is to lower the resonant coupling frequency, which also provides a linear advantage. Moreover, the trap design and wire design may be further engineer-
ed to deliver even faster exchange rates.
7.4.3 Applications
From our demonstration of classical energy exchange through a wire, there are immediate applications to sympathetic cooling of one remote ion with another using an RF (Paul) trap. With only moderate reduction of the noise in our system (1 order of magnitude) or moderate increase in the coupling rate (1 order of magnitude), we believe our wire-mediated scheme may lead to sympathetically cooled ion temperatures of order 100 mK, comparable to dilution refrigerator temperatures. At these low temperatu-
res, precision measurements of previously difficult to cool ion species become possible. Because this coupling technique is agnostic to ion species, the wire design may allow sympathetic cooling, trapping, and detection of charged particles which are otherwise difficult to work with, such as antiprotons [121] or electrons [113]. In fact, the coupling strength increases by two orders of magnitude when replacing 40Ca+ ions with trapped electrons at ∼ 100 MHz trap frequency. Additionally, such experi-
ments would require cryogenic operation, reducing the system’s inherent electric-field noise. Any further applications will require significant improvements in the experimental setup. Specifically, we must reduce the current noise in our system in order to lower the ion heating rates from ∼ 100 quanta/ms to at most ∼ 100 quanta/s. Although we mention a few methods for achieving lower heating rates in Section 7.4.1, they are difficult to implement and are in no way guaranteed to reduce our noise by-
 more than 3 orders of magnitude. Additionally, in order to compete with remote coupling via ion shuttling, our wire-mediated coupling rate of κ = 2π ×11.23 Hz must quicken by at least 2 orders of magnitude to κ ∼ 2π ×1 kHz. Though we suggest a few paths toward faster coupling rates in Section 7.4.2, further improvement will require a paradigm shift in the trap design or wire geometry. If we are able to achieve faster coupling rates with reduced levels of motional heating, we can then generate det-
erministic entanglement between the qubit sqin states of two separated ions. By initializing one ion, a, in the first excited state and the other ion, b, in the motional ground state, the combined motional state is |1〉a |0〉b. If the wire-mediated coupling is then turned on for a time t = tex/2, our combined motional state evolves into the Bell
state (|1〉a |0〉b + i |0〉a |1〉b)/√2. This entangled motional state may be transferred onto the internal qubit spin states with sideband pulses in order to create an entangled two-ion spin state [122, 105, 106].

CHAPTER 7. WIRE-MEDIATED LONG-RANGE ION-ION COUPLING 104
This remote entanglement capability would lead to several potential applications in quantum computation and spectroscopy for our wire-mediated coupling architecture. It could be used to facilitate entangled-pair factories [72, 44], where the need for ion shuttling is replaced with a solid-state link of the ions in separate wells. In addition, the coupling may be used to readout the spin state of one remote ion with another, a process which is useful for error correction protocols and quantum logic-
 spectroscopy [123]. A combination of these methods may lead to scalable arrays of ion registers connected by wires, facilitate the development of electron qubit architectures, and aid the development of hybrid quantum systems, where this coupling mechanism may serve as a quantum bridge between trapped ion qubits and superconducting qubits [124, 125, 126].

105
Bibliography
[1] D. Leibfried et al. “Quantum dynamics of single trapped ions”. In: Reviews of Modern Physics 75.1 (Mar. 2003), pp. 281–324. issn: 0034-6861. doi: 10.1103/RevModPhys. 75.281. url: http://dx.doi.org/10.1103/RevModPhys.75.281.
[2] T. P. Harty et al. “High-Fidelity Preparation, Gates, Memory, and Readout of a Trapped-Ion Quantum Bit”. In: Physical Review Letters 113.22 (Nov. 2014), p. 220501. issn: 0031-9007. doi: 10.1103/PhysRevLett.113.220501. url: https://link.aps. org/doi/10.1103/PhysRevLett.113.220501.
[3] J. P. Gaebler et al. “High-Fidelity Universal Gate Set for Be Ion Qubits”. In: Physical Review Letters 117.6 (Aug. 2016), p. 060505. doi: 10 . 1103 / PhysRevLett . 117 . 060505. url: https://link.aps.org/doi/10.1103/PhysRevLett.117.060505.
[4] C. J. Ballance et al. “High-Fidelity Quantum Logic Gates Using Trapped-Ion Hyperfine Qubits”. In: Physical Review Letters 117.6 (Aug. 2016), p. 060504. issn: 00319007. doi: 10.1103/PhysRevLett.117.060504. url: https://link.aps.org/doi/ 10.1103/PhysRevLett.117.060504.
[5] D J Wineland et al. “Experimental Issues in Coherent Quantum-State Manipulation of Trapped Atomic Ions”. In: Journal of Research of the National Institute for Standards and Technology 103.3 (1998), pp. 259–328. url: https://tf.nist.gov/ general/pdf/1275.pdf.
[6] M. Brownnutt et al. “Ion-trap measurements of electric-field noise near surfaces”. In: Reviews of Modern Physics 87.4 (Dec. 2015), pp. 1419–1482. issn: 0034-6861. doi: 10 . 1103 / RevModPhys . 87 . 1419. url: http : / / link . aps . org / doi / 10 . 1103 / RevModPhys.87.1419.
[7] Q A Turchette et al. “Heating of trapped ions from the quantum ground state”. In: Physical Review A 61 (2000), p. 063418. doi: 10.1103/PhysRevA.61.063418.
[8] R. Dubessy, T. Coudreau, and L. Guidoni. “Electric field noise above surfaces: A model for heating-rate scaling law in ion traps”. In: Physical Review A 80.3 (Sept. 2009), 031402(R). doi: 10.1103/PhysRevA.80.031402. url: http://link.aps. org/doi/10.1103/PhysRevA.80.031402.

BIBLIOGRAPHY 106
[9] Guang Hao Low, Peter F Herskind, and Isaac L Chuang. “Finite-geometry models of electric field noise from patch potentials in ion traps”. In: Physical Review A 84.5 (Nov. 2011), p. 053425. doi: 10.1103/PhysRevA.84.053425. url: http://link. aps.org/doi/10.1103/PhysRevA.84.053425.
[10] M. Kim et al. “Decoherence of Near-Surface Nitrogen-Vacancy Centers Due to Electric Field Noise”. In: Physical Review Letters 115.8 (Aug. 2015), p. 87602. issn: 0031-9007. doi: 10.1103/PhysRevLett.115.087602. url: https://link.aps.org/doi/10. 1103/PhysRevLett.115.087602.
[11] J. B. Camp, T. W. Darling, and Ronald E. Brown. “Macroscopic variations of surface potentials of conductors”. In: Journal of Applied Physics 69.10 (1991), pp. 7126–7129. issn: 00218979. doi: 10.1063/1.347601.
[12] T. W. Darling et al. “The fall of charged particles under gravity: A study of experimental problems”. In: Reviews of Modern Physics 64.1 (1992), pp. 237–257. issn: 00346861. doi: 10.1103/RevModPhys.64.237.
[13] V. Sandoghdar et al. “Direct measurement of the van der Waals interaction between an atom and its images in a micron-sized cavity”. In: Physical Review Letters 68.23 (June 1992), p. 3432. doi: 10.1103/PhysRevLett.68.3432.
[14] D. M. Harber et al. “Measurement of the Casimir-Polder force through center-of-mass oscillations of a Bose-Einstein condensate”. In: Physical Review A 72.3 (Sept. 2005), p. 033610. doi: 10.1103/PhysRevA.72.033610.
[15] D. Gorman. “Noise sensing and quantum simulation with trapped atomic ions”. PhD thesis. University of California, Berkeley, 2018. url: http://research.physics. berkeley.edu/haeffner/publications/dylan_gorman_thesis.pdf.
[16] Wolfgang Paul. “Electromagnetic traps for charged and neutral particles”. In: Reviews of Modern Physics 62.3 (July 1990), pp. 531–540. issn: 0034-6861. doi: 10.1103/ RevModPhys.62.531. url: http://link.aps.org/doi/10.1103/RevModPhys.62. 531.
[17] D. J. Berkeland et al. “Minimization of ion micromotion in a Paul trap”. In: Journal of Applied Physics 83.10 (May 1998), pp. 5025–5033. issn: 0021-8979. doi: 10.1063/ 1.367318. url: http://aip.scitation.org/doi/10.1063/1.367318.
[18] M Abramowitz and I A Stegun. “Handbook of mathematical functions”. In: New York: Dover, 1972, p. 784.
[19] N. W McLachlan. Theory and Applications of Mathieu Functions. Oxford, Clarendon Press, 1947.
[20] M. Drewsen and A. Brøner. “Harmonic linear Paul trap: Stability diagram and effective potentials”. In: Phys. Rev. A 62.4 (2000), p. 045401. doi: 10.1103/PhysRevA. 62.045401. url: https://link.aps.org/doi/10.1103/PhysRevA.62.045401.

BIBLIOGRAPHY 107
[21] H. Ha ̈ffner, C. F. Roos, and R. Blatt. “Quantum computing with trapped ions”. In: Physics Reports 469.September (Dec. 2008), pp. 155–203. issn: 03701573. doi: 10 . 1016 / j . physrep . 2008 . 09 . 003. url: http : / / linkinghub . elsevier . com / retrieve/pii/S0370157308003463.
[22] S. Debnath et al. “Demonstration of a small programmable quantum computer with atomic qubits”. In: Nature 536.7614 (Aug. 2016), pp. 63–66. issn: 0028-0836. doi: 10.1038/nature18648.
[23] Signe Seidelin et al. “Microfabricated Surface-Electrode Ion Trap for Scalable Quantum Information Processing”. In: Physical Review Letters 96.25 (June 2006), p. 253003. issn: 0031-9007. doi: 10.1103/PhysRevLett.96.253003. url: https://www.nist. gov/publications/microfabricated-surface-electrode-ion-trap-scalablequantum- information - processing %20https :/ / link.aps .org /doi/ 10.1103 / PhysRevLett.96.253003.
[24] J. Chiaverini et al. “Surface-electrode architecture for ion-trap quantum information processing”. In: Quantum Information and Computation 5 (2005), pp. 419–439. url: http://dl.acm.org/citation.cfm?id=2011670.2011671.
[25] C E Pearson et al. “Experimental investigation of planar ion traps”. In: Physical ReviewA 73 (2006), p. 32307. doi: 10 . 1103 / PhysRevA . 73 . 032307. url: https : //journals.aps.org/pra/pdf/10.1103/PhysRevA.73.032307.
[26] G. Shu et al. “Heating rates and ion-motion control in a y -junction surface-electrode trap”. In: Physical Review A 89 (2014), p. 62308. doi: 10.1103/PhysRevA.89.062308.
[27] Kenneth Wright et al. “Reliable transport through a microfabricated X -junction surface-electrode ion trap”. In: New Journal of Physics 15.3 (Mar. 2013), p. 33004. issn: 1367-2630. doi: 10.1088/1367-2630/15/3/033004. url: http://stacks.iop. org/1367-2630/15/i=3/a=033004?key=crossref.2dd5f3491da25e9c8caeae276f2259b1.
[28] D L Moehring et al. “Design, fabrication and experimental demonstration of junction surface ion traps”. In: New Journal of Physics 13.7 (July 2011), p. 75018. issn: 13672630. doi: 10.1088/1367-2630/13/7/075018. url: http://stacks.iop.org/13672630/13/i=7/a=075018?key=crossref.e67b9e2fdf0c3cb16ebabb1be06b0715.
[29] Hao-Kun Li et al. “Realization of Translational Symmetry in Trapped Cold Ion Rings”. In: Physical Review Letters 118.5 (Jan. 2017), p. 053001. issn: 10797114. doi: 10 . 1103 / PhysRevLett . 118 . 053001. arXiv: 1605 . 02143 [quant-ph]. url: https://link.aps.org/doi/10.1103/PhysRevLett.118.053001.
[30] D. An et al. “Surface trap with dc-tunable ion-electrode distance”. In: Review of Scientific Instruments 89.9 (Sept. 2018), p. 093102. doi: 10.1063/1.5046527. url: http://aip.scitation.org/doi/10.1063/1.5046527.

BIBLIOGRAPHY 108
[31] Karan K. Mehta et al. “Integrated optical addressing of an ion qubit”. In: Nature Nanotechnology 11 (Aug. 2016), pp. 1066–1070. issn: 1748-3387. doi: 10 . 1038 / nnano . 2016 . 139. url: http : / / www . nature . com / doifinder / 10 . 1038 / nnano . 2016.139.
[32] D T C Allcock et al. “Implementation of a symmetric surface-electrode ion trap with field compensation using a modulated Raman effect”. In: New Journal of Physics 12.5 (May 2010), p. 053026. issn: 1367-2630. doi: 10.1088/1367- 2630/12/5/053026. url: http://stacks.iop.org/1367- 2630/12/i=5/a=053026?key=crossref. 942f3fda4048764a9c1b665dc4e40e23.
[33] Thaned Pruttivarasin. “Spectroscopy , fundamental symmetry tests and quantum simulation with trapped ions”. PhD thesis. University of California, Berkeley, 2014, p. 141.
[34] Michael Ramm et al. “Precision Measurement Method for Branching Fractions of Excited P$ {1/2}$ States Applied to $ˆ{40}$Ca$ˆ{+}$”. In: Physical Review Letters 111.2 (July 2013), p. 023004. issn: 0031-9007. doi: 10 . 1103 / PhysRevLett . 111 . 023004. url: http://dx.doi.org/10.1103/PhysRevLett.111.023004.
[35] P A Barton et al. “Measurement of the lifetime of the 3d ˆ2D 5/2 state in ˆ40Caˆ+”. In: Phys. ̃Rev. ̃A 62 (2000), p. 32503.
[36] Christian Felix Roos. “Controlling the quantum state of trapped ions”. PhD thesis. University of Innsbruck, 2000.
[37] D Leibfried et al. “Experimental demonstration of a robust, high-fidelity geometric two ion-qubit phase gate”. In: Nature 422 (2003), pp. 412–415. doi: 10.1038/ nature01492. url: http://dx.doi.org/10.1038/nature01492.
[38] Stig Stenholm. “The semiclassical theory of laser cooling”. In: Reviews of Modern Physics 58.3 (July 1986), pp. 699–739. issn: 0034-6861. doi: 10.1103/RevModPhys. 58.699. url: http://link.aps.org/doi/10.1103/RevModPhys.58.699.
[39] R Loudon. The Quantum Theory of Light. Oxford University Press, 1983.
[40] C. C. (Christopher C.) Gerry and Peter (Peter L.) Knight. Introductory quantum optics. Cambridge University Press, 2005, p. 317. isbn: 052152735X.
[41] C Monroe et al. “Resolved-sideband Raman cooling of a bound atom to the 3D zeropoint energy.” In: Physical Review Letters 75 (1995), pp. 4011–4014. doi: 10.1103/ PhysRevLett . 75 . 4011. url: https : / / journals . aps . org / prl / abstract / 10 . 1103/PhysRevLett.75.4011.
[42] R. B. Blakestad et al. “High-Fidelity Transport of Trapped-Ion Qubits through an X-Junction Trap Array”. In: Phys. Rev. Lett. 102.15 (Apr. 2009), p. 153002. issn: 0031-9007. doi: 10.1103/PhysRevLett.102.153002. url: http://link.aps.org/ doi/10.1103/PhysRevLett.102.153002.

BIBLIOGRAPHY 109
[43] J. Chiaverini and J. M. Sage. “Insensitivity of the rate of ion motional heating to trap-electrode material over a large temperature range”. In: Physical Review A 89.1 (Jan. 2014), p. 012318. issn: 1050-2947. doi: 10.1103/PhysRevA.89.012318. url: http://link.aps.org/doi/10.1103/PhysRevA.89.012318.
[44] D Kielpinski, C Monroe, and D J Wineland. “Architecture for a large-scale ion-trap quantum computer.” In: Nature 417.6890 (2002), pp. 709–711. issn: 0028-0836. doi: 10.1038/nature00784. url: http://www.ncbi.nlm.nih.gov/pubmed/12066177.
[45] J. H. Wesenberg. “Electrostatics of surface-electrode ion traps”. In: Physical Review A 78.6 (Dec. 2008), p. 063410. doi: 10.1103/PhysRevA.78.063410. url: http: //link.aps.org/doi/10.1103/PhysRevA.78.063410.
[46] Philipp Schindler et al. “Polarization of electric-field noise near metallic surfaces”. In: Physical Review A 92.1 (July 2015), p. 13414. issn: 1050-2947. doi: 10.1103/ PhysRevA.92.013414. url: https://link.aps.org/doi/10.1103/PhysRevA.92. 013414%20http://link.aps.org/doi/10.1103/PhysRevA.92.013414.
[47] Gebhard Littich. Electrostatic Control and Transport of Ions on a Planar Trap for Quantum Information Processing. Tech. rep. ETH Z ̈urich and University of California, Berkeley, 2011.
[48] Ivan A. Boldin, Alexander Kraft, and Christof Wunderlich. “Measuring Anomalous Heating in a Planar Ion Trap with Variable Ion-Surface Separation”. In: Physical Review Letters 120 (2018), p. 023201. issn: 10797114. doi: 10.1103/PhysRevLett. 120.023201.
[49] J. A. Sedlacek et al. “Distance scaling of electric-field noise in a surface-electrode ion trap”. In: Physical Review A 97 (2018), 020302(R). doi: 10.1103/PhysRevA.97. 020302.
[50] Da An et al. “Distance scaling and polarization of electric-field noise in a surface ion trap”. In: Phys Rev A 100.6 (Dec. 2019), p. 063405. issn: 24699934. doi: 10.1103/ PhysRevA.100.063405.
[51] B. Lekitsch et al. “Blueprint for a microwave trapped-ion quantum computer”. In: Science Advances 3.2 (2017), e1601540. doi: 10.1126/sciadv.1601540.
[52] C. Ospelkaus et al. “Microwave quantum logic gates for trapped ions”. In: Nature 476.7359 (Aug. 2011), pp. 181–184. issn: 0028-0836. doi: 10 . 1038 / nature10290. url: http://dx.doi.org/10.1038/nature10290%20https://ws680.nist.gov/ publication/get_pdf.cfm?pub_id=908366.
[53] F. Mintert and C. Wunderlich. “Ion-Trap Quantum Logic Using Long-Wavelength Radiation”. In: Physical Review Letters 87 (2001), p. 257904. doi: 10.1103/PhysRevLett. 87 . 257904. url: http : / / dx . doi . org / 10 . 1103 / PhysRevLett . 87 . 257904 % 20https://journals.aps.org/prl/pdf/10.1103/PhysRevLett.87.257904.
[54] Shannon X. Wang et al. “Laser-induced charging of microfabricated ion traps”. In: Journal of Applied Physics 110 (2011), p. 104901. doi: 10.1063/1.3662118.

BIBLIOGRAPHY 110
[55] D. T. C. Allcock et al. “Heating rate and electrode charging measurements in a scalable, microfabricated, surface-electrode ion trap”. In: Applied Physics B 107.4 (Nov. 2011), pp. 913–919. issn: 0946-2171. doi: 10.1007/s00340-011-4788-5. url: http://link.springer.com/10.1007/s00340-011-4788-5.
[56] M Harlander et al. “Trapped-ion probing of light-induced charging effects on dielectrics”. In: New Journal of Physics 12.9 (Sept. 2010), p. 093035. issn: 1367-2630. doi: 10.1088/1367- 2630/12/9/093035. url: http://stacks.iop.org/13672630/12/i=9/a=093035?key=crossref.aefbc4412f74c34855eaf78da989a855.
[57] N Daniilidis et al. “Wiring up trapped ions to study aspects of quantum information”. In: J. Phys. B 42.15 (Aug. 2009), p. 154012. issn: 0953-4075. doi: 10.1088/09534075/42/15/154012. url: http://stacks.iop.org/0953- 4075/42/i=15/a= 154012?key=crossref.c85ec400f8b1c300df78abfce5d7ce88.
[58] Crystal Noel. “High temperature studies of electric-field noise in a surface ion trap”. PhD thesis. University of California, Berkeley, 2019. url: http://www.physics. berkeley.edu/research/haeffner/publications/Noel_thesis.pdf.
[59] Maya Berlin-Udi. “Treatments of a Surface Ion Trap: A Study of Electric-Field Noise near a Contaminated Metal Surface”. PhD thesis. University of California, Berkeley, 2020.
[60] Soenke Moeller. “How to couple trapped ions to superconducting resonators: towards hybrid quantum devices”. PhD thesis. 2016.
[61] J. D. Siverns et al. “On the application of radio frequency voltages to ion traps via helical resonators”. In: Applied Physics B: Lasers and Optics 107.4 (2012), pp. 921934. issn: 09462171. doi: 10.1007/s00340-011-4837-0.
[62] J. Keller et al. “Precise determination of micromotion for trapped-ion optical clocks”. In: Journal of Applied Physics 118 (2015), p. 104501. doi: 10.1063/1.4930037.
[63] Dylan J Gorman et al. “Two-mode coupling in a single-ion oscillator via parametric resonance”. In: Physical Review A 89.6 (June 2014), p. 062332. issn: 1050-2947. doi: 10 . 1103 / PhysRevA . 89 . 062332. url: http : / / link . aps . org / doi / 10 . 1103 / PhysRevA.89.062332.
[64] I. Talukdar et al. “Implications of surface noise for the motional coherence of trapped ions”. In: Physical Review A 93.4 (Apr. 2016), p. 043415. issn: 2469-9926. doi: 10. 1103/PhysRevA.93.043415. url: http://link.aps.org/doi/10.1103/PhysRevA. 93.043415.
[65] K. Deng et al. “A modified model of helical resonator with predictable loaded resonant frequency and Q-factor”. In: Review of Scientific Instruments 85.10 (Oct. 2014). issn: 10897623. doi: 10.1063/1.4897478.
[66] S R Jefferts et al. “Coaxial-resonator-driven rf (Paul) trap for strong confinement.” In: Phys. ̃Rev. ̃A 51 (1995), pp. 3112–3116.

BIBLIOGRAPHY 111
[67] D. Gandolfi et al. Compact radio-frequency resonator for cryogenic ion traps. Aug. 2012. doi: 10.1063/1.4737889.
[68] Long-Sheng Ma et al. Delivering the same optical frequency at two places: accurate cancellation of phase noise introduced by an optical fiber or other time-varying path. Tech. rep. 21. 1994, p. 1777.
[69] Karin Fisher. “Trapped Ion Quantum Information Coherent Control Laser System for the Quantum State Manipulation of Trapped Ions”. PhD thesis. ETH Zurich, 2013.
[70] G Kirchmair et al. “Deterministic entanglement of ions in thermal states of motion”. In: New J. Phys. 11.2 (Feb. 2009), p. 23002. issn: 1367-2630. doi: 10.1088/13672630/11/2/023002. url: http://stacks.iop.org/1367-2630/11/i=2/a=023002? key=crossref.be3fc247c634554dc69f59ebce95a834.
[71] T Rosenband et al. “Frequency ratio of Al+ and Hg+ single-ion optical clocks: metrology at the 17th decimal place.” In: Science (New York, N.Y.) 319.5871 (Mar. 2008), pp. 1808–12. issn: 1095-9203. doi: 10.1126/science.1154622. url: http://www. ncbi.nlm.nih.gov/pubmed/18323415.
[72] D.J. Wineland et al. “Experimental Primer on the Trapped Ion Quantum Computer”. In: Fortschritte der Physik 46.4-5 (June 1998), pp. 363–390. issn: 0015-8208. doi: 10.1002/(SICI)1521-3978(199806)46:4/5<363::AID-PROP363>3.0.CO;2-4. url: http://doi.wiley.com/10.1002/(SICI)1521-3978(199806)46:4/5%3C363::AIDPROP363%3E3.0.CO;2-4.
[73] C. Henkel, S. Po ̈tting, and M. Wilkens. “Loss and heating of particles in small and noisy traps”. In: Applied Physics B: Lasers and Optics 69.5-6 (Dec. 1999), pp. 379–387. issn: 0946-2171. doi: 10 . 1007 / s003400050823. url: http : / / www . springerlink.com/openurl.asp?genre=article&id=doi:10.1007/s003400050823% 20http://www.springerlink.com/openurl.asp?genre=article%7B&%7Did=doi: 10.1007/s003400050823.
[74] F. Intravaia, S. Maniscalco, and A. Messina. Density-matrix operatorial solution of the non-Markovian master equation for quantum Brownian motion. 2003. doi: 10. 1103/PhysRevA.67.042108.
[75] L Deslauriers et al. “Scaling and suppression of anomalous heating in ion traps.” In: Phys. Rev. Lett. 97.10 (2006), p. 103007. doi: 10.1103/PhysRevLett.97.103007. url: http://www.ncbi.nlm.nih.gov/pubmed/17025815.
[76] Christian L. Arrington et al. “Micro-fabricated stylus ion trap”. In: Review of Scientific Instruments 84.8 (Aug. 2013), p. 085001. doi: 10.1063/1.4817304.
[77] D. A. Hite et al. “Measurements of trapped-ion heating rates with exchangeable surfaces in close proximity”. In: MRS Advances 2.41 (Jan. 2017), pp. 2189–2197. issn: 2059-8521. doi: 10.1557/adv.2017.14. url: https://doi.org/10.1557/ adv . 2017 . 14 % 20https : / / www . cambridge . org / core / product / identifier / S2059852117000147/type/journal_article.

BIBLIOGRAPHY 112
[78] M A Rowe et al. “Transport of quantum states and separation of ions in a dual RF ion trap”. In: Quantum Information and Computation 2.4 (2002), pp. 257–271. issn: 15337146.
[79] E. Paladino et al. “1/ f noise: Implications for solid-state quantum information”. In: Reviews of Modern Physics 86 (2014), p. 361. doi: 10.1103/RevModPhys.86.361.
[80] A. Safavi-Naini et al. “Microscopic model of electric-field-noise heating in ion traps”. In: Physical Review A 84.2 (Aug. 2011), p. 023412. doi: 10.1103/PhysRevA.84. 023412. url: http://link.aps.org/doi/10.1103/PhysRevA.84.023412.
[81] E. Kim et al. “Electric-field noise from carbon-adatom diffusion on a Au(110) surface: First-principles calculations and experiments”. In: Physical Review A 95.3 (Mar. 2017), p. 033407. issn: 24699934. doi: 10.1103/PhysRevA.95.033407. url: https: //link.aps.org/doi/10.1103/PhysRevA.95.033407.
[82] M. G. House. “Analytic model for electrostatic fields in surface-electrode ion traps”. In: Physical Review A 78.3 (Sept. 2008), p. 033402. issn: 10502947. doi: 10.1103/ PhysRevA.78.033402.
[83] J. A. Sedlacek et al. “Method for determination of technical noise contributions to ion motional heating”. In: Journal of Applied Physics 124.21 (Dec. 2018). issn: 10897550. doi: 10.1063/1.5045326.
[84] J A Sedlacek et al. “Evidence for multiple mechanisms underlying surface electricfield noise in ion traps”. In: Physical Review A 98 (2018), p. 63430. issn: 24699934. doi: 10.1103/PhysRevA.98.063430. url: https://journals.aps.org/pra/pdf/ 10.1103/PhysRevA.98.063430.
[85] Conyers Herring and M H Nichols. “Thermionic Emission”. In: Reviews of Modern Physics 21.2 (1949), p. 185. doi: 10.1103/RevModPhys.21.185. url: https://doi. org/10.1103/RevModPhys.21.185.
[86] H G Dehmelt and F L Walls. “”Bolometric” Technique for the rf Spectroscopy of Stored Ions”. In: Phys. Rev. Lett. 21.3 (July 1968), pp. 127–131. doi: 10 . 1103 / PhysRevLett.21.127.
[87] P. Debye, H. R. Anderson, and H. Brumberger. “Scattering by an inhomogeneous solid. II. the correlation function and its application”. In: Journal of Applied Physics 28.6 (1957), pp. 679–683. issn: 00218979. doi: 10.1063/1.1722830.
[88] Chi Sing Man et al. “On the geometric autocorrelation function of polycrystalline materials”. In: Journal of Computational and Applied Mathematics 190.1-2 (June 2006), pp. 200–210. doi: 10.1016/j.cam.2005.01.044.
[89] Muir Kumph et al. “Electric-field noise above a thin dielectric layer on metal electrodes”. In: New Journal of Physics 18.2 (Nov. 2016), p. 023020. issn: 13672630. doi: 10.1088/1367- 2630/18/2/023020. url: http://stacks.iop.org/13672630/18/i=2/a=023020?key=crossref.130a28137e2c845665e6d27aecf345a9.

BIBLIOGRAPHY 113
[90] Kuan Yu Lin, Guang Hao Low, and Isaac L. Chuang. “Effects of electrode surface roughness on motional heating of trapped ions”. In: Physical Review A 94.1 (July 2016), p. 013418. issn: 24699934. doi: 10.1103/PhysRevA.94.013418.
[91] R. van Gastel et al. “Nothing moves a surface: Vacancy mediated surface diffusion”. In: Physical Review Letters 86.8 (Feb. 2001), pp. 1562–1565. doi: 10.1103/ PhysRevLett.86.1562.
[92] by Jesper Møller et al. “Stochastic Geometry and Random Tessellations”. In: Research Report Series (2007). issn: 1601-7811.
[93] M. B. Weissman. “1/f noise and other slow, nonexponential kinetics in condensed matter”. In: Reviews of Modern Physics 60 (1988), p. 537. doi: 10.1103/RevModPhys. 60.537.
[94] Crystal Noel et al. “Electric-field noise from thermally activated fluctuators in a surface ion trap”. In: Physical Review A 99.6 (June 2019), p. 063427. issn: 24699934. doi: 10.1103/PhysRevA.99.063427. url: https://link.aps.org/doi/10.1103/ PhysRevA.99.063427.
[95] B E King et al. “Cooling the Collective Motion of Trapped Ions to Initialize a Quantum Register”. In: Physical Review Letters 81.7 (1998), p. 1525. url: https : / / journals.aps.org/prl/pdf/10.1103/PhysRevLett.81.1525.
[96] Joseph Aidan Delf Randall. “High-Fidelity Entanglement of Trapped Ions using LongWavelength Radiation”. PhD thesis. 2016.
[97] K. Wright et al. “Benchmarking an 11-qubit quantum computer”. In: Nature Communications 10.1 (Mar. 2019), p. 5464. issn: 2041-1723. doi: 10.1038/s41467-01913534-2. url: http://www.nature.com/articles/s41467-019-13534-2%20http: //arxiv.org/abs/1903.08181.
[98] Kenneth R. Brown, Jungsang Kim, and Christopher Monroe. “Co-designing a scalable quantum computer with trapped atomic ions”. In: npj Quantum Information 2.1 (2016), pp. 1–10. issn: 20566387. doi: 10.1038/npjqi.2016.34.
[99] L.-M. Duan and C. Monroe. “Colloquium: Quantum networks with trapped ions”. In: Reviews of Modern Physics 82.2 (Apr. 2010), pp. 1209–1224. issn: 0034-6861. doi: 10.1103/RevModPhys.82.1209. url: http://link.aps.org/doi/10.1103/ RevModPhys.82.1209.
[100] Tongcang Li et al. “Space-Time Crystals of Trapped Ions”. In: Physical Review Letters 109.16 (Oct. 2012), p. 163001. issn: 0031-9007. doi: 10.1103/PhysRevLett.109. 163001. url: http://dx.doi.org/10.1103/PhysRevLett.109.163001.
[101] C. Monroe et al. “Large-scale modular quantum-computer architecture with atomic memory and photonic interconnects”. In: Physical Review A - Atomic, Molecular, and Optical Physics (2014). issn: 10502947. doi: 10.1103/PhysRevA.89.022317.

BIBLIOGRAPHY 114
[102] S Olmschenk et al. “Quantum teleportation between distant matter qubits.” In: Science (New York, N.Y.) 323.5913 (2009), pp. 486–9. issn: 1095-9203. doi: 10.1126/ science.1167209. url: http://www.sciencemag.org/cgi/content/abstract/ 323/5913/486.
[103] D Matsukevich et al. “Bell inequality violation with two remote atomic qubits”. In: Phys. Rev. Lett. 100 (2008), p. 150404.
[104] D Hucul et al. “Modular entanglement of atomic qubits using photons and phonons”. In: NATURE PHYSICS — 11 (2015). doi: 10.1038/NPHYS3150. url: www.nature. com/naturephysics.
[105] M Harlander et al. “Trapped-ion antennae for the transmission of quantum information.” In: Nature 471.7337 (Mar. 2011), pp. 200–3. issn: 1476-4687. doi: 10.1038/ nature09800. url: http://www.ncbi.nlm.nih.gov/pubmed/21346764.
[106] K R Brown et al. “Coupled quantized mechanical oscillators.” In: Nature 471.7337 (Mar. 2011), pp. 196–9. issn: 1476-4687. doi: 10.1038/nature09721. url: http: //www.ncbi.nlm.nih.gov/pubmed/21346762.
[107] D J Larson et al. “Sympathetic cooling of trapped ions: A laser-cooled two-species nonneutral ion plasma.” In: Phys. ̃Rev. ̃Lett. 57 (1986), pp. 70–73.
[108] G Morigi and H Walther. “Two-species Coulomb chains for quantum information”. In: Eur. ̃Phys. ̃J. ̃D 13 (2000), pp. 261–269.
[109] H Rohde et al. “Sympathetic ground-state cooling and coherent manipulation with two-ion crystals”. In: Journal of Optics B: Quantum and Semiclassical Optics 3.1 (2001). issn: 14644266. doi: 10.1088/1464- 4266/3/1/357. url: www.iop.org/ Journals/ob.
[110] M D Barrett et al. “Sympathetic cooling of ˆ9Beˆ+ and ˆ24Mgˆ+ for quantum logic”. In: Phys. ̃Rev. ̃A 68 (2003), p. 42302.
[111] J. P. Home et al. “Memory coherence of a sympathetically cooled trapped-ion qubit”. In: Physical Review A 79.5 (May 2009), p. 050305. issn: 10502947. doi: 10.1103/ PhysRevA.79.050305. url: https://link.aps.org/doi/10.1103/PhysRevA.79. 050305.
[112] M. Guggemos et al. “Sympathetic cooling and detection of a hot trapped ion by a cold one”. In: New Journal of Physics 17.10 (Sept. 2015). issn: 13672630. doi: 10.1088/1367-2630/17/10/103001.
[113] Clemens Matthiesen et al. “Trapping Electrons in a Room-Temperature Microwave Paul Trap”. In: Physical Review X 11.1 (Jan. 2021), p. 011019. issn: 2160-3308. doi: 10 . 1103 / PhysRevX . 11 . 011019. url: https : / / link . aps . org / doi / 10 . 1103 / PhysRevX.11.011019.
[114] D J Wineland and H G Dehmelt. “Principles of the stored ion calorimeter”. In: J. App. Phys. 46 (1975), p. 919. doi: 10.1063/1.321602.

BIBLIOGRAPHY 115
[115] D J Heinzen and D J Wineland. “Quantum-limited Cooling and Detection of RadioFrequency Oscillations by Laser-cooled Ions”. In: Phys. Rev. A 42 (1990), p. 2977.
[116] D. A. Hite et al. “100-Fold Reduction of Electric-Field Noise in an Ion Trap Cleaned with In Situ Argon-Ion-Beam Bombardment”. In: Physical Review Letters 109.10 (Sept. 2012), p. 103001. doi: 10 . 1103 / PhysRevLett . 109 . 103001. url: http : //link.aps.org/doi/10.1103/PhysRevLett.109.103001.
[117] N. Daniilidis et al. “Probing surface electric field noise with a single ion”. In: Arxiv preprint arXiv:1307.7194 (July 2013), pp. 1–13. url: http://arxiv.org/abs/1307. 7194.
[118] J Labaziewicz et al. “Suppression of Heating Rates in Cryogenic Surface-Electrode Ion Traps”. In: Physical Review Letters 100 (2008), p. 013001. doi: 10.1103/PhysRevLett. 100.013001. url: http://journals.aps.org/prl/abstract/10.1103/PhysRevLett. 100.013001.
[119] Jaroslaw Labaziewicz et al. “Temperature Dependence of Electric Field Noise Above Gold Surfaces”. In: Physical Review Letters 101 (2008), p. 180602. url: http : / / journals.aps.org/prl/abstract/10.1103/PhysRevLett.101.180602.
[120] M. F. Brandl et al. “Cryogenic setup for trapped ion quantum computing”. In: Review of Scientific Instruments (2016). issn: 10897623. doi: 10.1063/1.4966970.
[121] M. Niemann et al. “Cryogenic 9Be+ Penning trap for precision measurements with (anti-)protons”. In: Measurement Science and Technology 31.3 (2019). issn: 13616501. doi: 10.1088/1361-6501/ab5722.
[122] J I Cirac and P Zoller. “Quantum Computations with Cold Trapped Ions.” In: Phys. Rev. Lett. 74.20 (May 1995), pp. 4091–4094. issn: 0031-9007. url: http : / / www . ncbi.nlm.nih.gov/pubmed/10058410.
[123] P O Schmidt et al. “Spectroscopy using quantum logic”. In: Science 309.5735 (July 2005), pp. 749–752. issn: 00368075. doi: 10.1126/science.1114375. url: http: //www.ncbi.nlm.nih.gov/pubmed/16051790.
[124] L Tian et al. “Interfacing quantum-optical and solid-state qubits.” In: Physical Review Letters 92.24 (June 2004), p. 247902. issn: 0031-9007. url: http://www.ncbi.nlm. nih.gov/pubmed/15245134.
[125] L Tian and P Zoller. “Coupled ion-nanomechanical systems.” In: Phys. Rev. Lett. 93.26 Pt 1 (Dec. 2004), p. 266403. issn: 0031-9007. url: http://www.ncbi.nlm. nih.gov/pubmed/15697998.
[126] L. Tian, R. Blatt, and P. Zoller. “Scalable ion trap quantum computing without moving ions”. In: The European Physical Journal D 32.2 (Nov. 2004), pp. 201–208. issn: 1434-6060. doi: 10.1140/epjd/e2004-00172-5. url: http://www.springerlink. com/index/10.1140/epjd/e2004-00172-5.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:29.687Z
- **Text Length:** 265969 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 125 of 125
