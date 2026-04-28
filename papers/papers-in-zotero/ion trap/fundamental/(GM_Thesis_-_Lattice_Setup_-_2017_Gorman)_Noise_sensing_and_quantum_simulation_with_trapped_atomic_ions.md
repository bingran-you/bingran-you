# PDF Document: (Thesis - Lattice Setup - 2017 Gorman) Noise sensing and quantum simulation with trapped atomic ions.pdf

**File Path:** (Thesis - Lattice Setup - 2017 Gorman) Noise sensing and quantum simulation with trapped atomic ions.pdf

**Processed Date:** 2026-02-10T18:18:25.660Z

**File Size:** 5920.31 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 414

**Title:** (GM Thesis - Lattice Setup - 2017 Gorman) Noise sensing and quantum simulation with trapped atomic ions

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Noise sensing and quantum simulation with trapped atomic ions
by Dylan J Gorman
A dissertation submitted in partial satisfaction of the requirements for the degree of Doctor of Philosophy in Physics in the Graduate Division of the
University of California, Berkeley
Committee in charge: Professor Hartmut H¨aﬀner, Chair
Professor K. Birgitta Whaley Professor Irfan Siddiqi
Spring 2017

Noise sensing and quantum simulation with trapped atomic ions
Copyright 2017 by
Dylan J Gorman

1
Abstract
Noise sensing and quantum simulation with trapped atomic ions
by
Dylan J Gorman
Doctor of Philosophy in Physics
University of California, Berkeley
Professor Hartmut H¨aﬀner, Chair
In this work, we present a novel method to couple any two vibrational modes of a single trapped ion, allowing energy to be swapped between the two modes. We use the scheme to perform ground state cooling and heating rate measurements of vibrational modes without direct optical access. This lessens experimental design constraints in trapped ion experiments, particularly in surface trap apparatus where optical access can be diﬃcult.
We use a single ion as an electric-ﬁeld noise sensor to study noise processes originating on the metallic surfaces of microfabricated ion traps. We show that realistic models of surface noise predict a speciﬁc polarization of the electric-ﬁeld ﬂuctuations relative to the trap geometry. In contrast, technical noise sources predict a diﬀerent polarization direction and magnitude which can be inferred by electrostatic simulation of the trapping electrodes. We show that, by comparing heating rates of -
the two radial modes of a single trapped ion, one can determine whether technical noise sources are a signiﬁcant contribution to heating. This is an important test for experiments aimed at studying surface noise eﬀects. We also study dephasing due to surface noise, in which the electric potential curvature due to surface noise sources disturbs the phase of the ion motion. We measure the dephasing time for trapped ion motion. Using a noise model featuring dipolar noise sources, we probe the power s-
pectrum of surface noise eﬀects. These measurements, especially if repeated in a trap with smaller ion-electrode distances, may yield new insights as to the physical origin of surface noise eﬀects.
We demonstrate a two-ion quantum simulation of vibrationally-assisted energy transfer, an important phenomenon in biochemical energy transfer. We show that the quantum simulator performs well when benchmarked against exact numerical simulation. We believe that our approach can be scaled to more complicated systems beyond the reach of classical simulation, and discuss several methods for extending the simulation.

i
To my parents, who taught me to always be curious. And to Nikko, who taught me to always chew on the furniture.

ii
Acknowledgments
Successfully completing my seven-year graduate career would not have been possible without a lot of help from a lot of people. Firstly, I need to thank my parents, whose unfailing support helped me through community college, my undergrad years at Berkeley, and ﬁnally through grad school. I am also immensely grateful to Amanda Kay, who was a constant source of encouragement through all of the struggles and successes over these past years.
I am particularly indebted to my advisor, Hartmut Ha¨ﬀner, who taught me how to be a physicist. He listened patiently to my crazy ideas about physics, and gave me the freedom to pursue the experimental paths I wanted.
During my undergrad time, I was part of the UC LEADS program, which funded my research for two summers. A special thanks is due to Diana Lizarraga, who ran the program and helped me immensely when applying to graduate school. In this research, I worked with Kevin Young, who taught me a lot about how to do research.
I was fortunate to be surrounded by an incredibly talented team of students and postdocs throughout my time in the lab. I learned my ﬁrst lab skills from Sankar Narayanan and Soenke Moeller, who both helped me anytime I asked. A special thanks is also due to postdocs Nikos Daniilidis and Philipp Schindler, who mentored me. I worked closely with undergraduate students Ross Hutson and Matthew McAllister, who each made important contributions to the experiments. Ross helped develop the dc electronics-
 systems for the surface trap experiments, and Matthew implemented pulse shaping for our frequency sources. More recently, I have worked directly with Boerge Hemmerling, Eli Megidish, and Joe Broz, who have been great lab partners and friends. I also thank the many other lab members who helped me in countless ways– Erik, Crystal, Ahmed, Hong, Mike, Omid, Maya, Clemens, and Chi Chi.
Thanks for everything to Jon Ouellet, who was a great friend, roommate, and co-GSI during the ﬁrst few years of my program. Finally, thanks to Anthony Ransford, for the many adventures, and for helping me stay somewhat sane.

iii

Contents

Contents

iii

List of Figures

v

List of Tables

vii

1 Introduction

1

2 Ion traps

4

2.1 Radio-frequency Paul traps . . . . . . . . . . . . . . . . . . . . . . . . . . . 4

2.2 Static potential control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7

2.3 Multiple ions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9

3 Light-matter interactions

11

3.1 Ca+ internal structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11

3.2 Doppler cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12

3.3 Coherent operations and resolved sidebands . . . . . . . . . . . . . . . . . . 15

3.4 Sideband cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17

3.5 Electron shelving . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21

3.6 Engineered interactions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21

4 Experimental setup

29

4.1 Injection locked laser . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29

4.2 Lasers and imaging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32

4.3 Vacuum system and trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33

4.4 DC electronics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35

4.5 Radio-frequency electronics . . . . . . . . . . . . . . . . . . . . . . . . . . . 37

4.6 Optical layout for laser-based gates . . . . . . . . . . . . . . . . . . . . . . . 38

4.7 Radio-frequency amplitude stabilizer . . . . . . . . . . . . . . . . . . . . . . 40

5 Parametric coupling

45

5.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45

5.2 Theory of interaction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46

iv

5.3 Experimental implementation . . . . . . . . . . . . . . . . . . . . . . . . . . 48 5.4 Population swapping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51 5.5 Cooling without direct optical access . . . . . . . . . . . . . . . . . . . . . . 53

6 Surface noise studies

56

6.1 Eﬀects of electrical noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57

6.2 A simple model of surface noise . . . . . . . . . . . . . . . . . . . . . . . . . 60

6.3 Experiment: Electric ﬁeld noise polarization . . . . . . . . . . . . . . . . . . 63

6.4 Experiment: Motional coherence of trapped ions . . . . . . . . . . . . . . . 69

7 Quantum simulation of energy transfer

74

7.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 74

7.2 Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76

7.3 Experimental implementation . . . . . . . . . . . . . . . . . . . . . . . . . . 77

7.4 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80

7.5 Calibration of parameters . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82

7.6 Conclusions and future work . . . . . . . . . . . . . . . . . . . . . . . . . . . 86

8 Conclusions

88

Bibliography

91

v
List of Figures
2.1 Cross-sections of typical rf Paul traps . . . . . . . . . . . . . . . . . . . . . . . . 5 2.2 CCD image of about 60 trapped ions . . . . . . . . . . . . . . . . . . . . . . . . 9 2.3 Normal modes for two ions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10
3.1 The 2S1/2 ↔2P1/2 and 2P1/2 ↔2D3/2 transitions. . . . . . . . . . . . . . . . . . . 11 3.2 Internal structure of 40Ca+ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 3.3 Electronic energy levels of 40Ca+ relevant to coherent operations with the 729 nm
laser. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15 3.4 Carrier and sideband transitions in the two-level atom approximation. . . . . . . 18 3.5 Schematic drawing of the sideband cooling process. . . . . . . . . . . . . . . . . 18 3.6 Sketch of the Mølmer-Sørensen interaction . . . . . . . . . . . . . . . . . . . . . 23 3.7 Fidelity measurement of a Mølmer-Sørensen quantum gate . . . . . . . . . . . . 24 3.8 Mølmer-Sørensen time dynamics in the {|SD , |DS -
} subspace. . . . . . . . . . 25 3.9 Sketch of the σzx interaction. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26 3.10 Time dynamics of the σzx interaction . . . . . . . . . . . . . . . . . . . . . . . . 28
4.1 Optical layout for 729 nm laser beams . . . . . . . . . . . . . . . . . . . . . . . 30 4.2 Servo bumps on the master 729 nm laser . . . . . . . . . . . . . . . . . . . . . . 31 4.3 Sketch of the imaging system . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33 4.4 Vacuum chamber design for the surface trap experiment . . . . . . . . . . . . . 34 4.5 In-vacuum ﬁlterboard . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35 4.6 Trap holding apparatus . . . . . . . . . . . .-
 . . . . . . . . . . . . . . . . . . . . 36 4.7 Schematic overview of dc electronics . . . . . . . . . . . . . . . . . . . . . . . . 36 4.8 Resonator and dc-biasing circuit. . . . . . . . . . . . . . . . . . . . . . . . . . . 38 4.9 Optical layout for 729 nm laser beams on the experiment table . . . . . . . . . . 39 4.10 Feedback circuit for rf amplitude stabilization . . . . . . . . . . . . . . . . . . . 40 4.11 Measured radial trap frequency vs. rf detector error signal . . . . . . . . . . . . 4-
1 4.12 Schematic pulse sequence for trap frequency measurement . . . . . . . . . . . . 42 4.13 Trap frequency stability measurement . . . . . . . . . . . . . . . . . . . . . . . . 43 4.14 Schematic pulse sequence for motional coherence measurement . . . . . . . . . . 43 4.15 Motional coherence measurement with stabilizer running . . . . . . . . . . . . . 44

vi
5.1 Schematic of trap used for parametric coupling experiment . . . . . . . . . . . . 46 5.2 Spectroscopic signature of parametric coupling . . . . . . . . . . . . . . . . . . . 49 5.3 Relative Rabi frequency of carrier and driven motion sidebands . . . . . . . . . 51 5.4 Population swapping between single-ion vibrational modes . . . . . . . . . . . . 52 5.5 Heating rate measurement using parametric coupling readout . . . . . . . . . . 55
6.1 Schematic pulse sequence for motional coherence measurement . . . . . . . . . . 59 6.2 Schematic drawing of trap used in the electric ﬁeld polarization measurements . 64 6.3 Ratio of predicted heating rates into the radial modes . . . . . . . . . . . . . . . 65 6.4 Measured ratio of heating rates into the two radial modes . . . . . . . . . . . . . 67 6.5 Displacement amplitude vs interrogation time . . . . . . . . . . . . . . . . . . . 70 6.6 Heating rate vs. trap frequency . . . . . . . . . .-
 . . . . . . . . . . . . . . . . . 71 6.7 Estimated cutoﬀ frequency vs. assumed noise scaling exponent . . . . . . . . . . 73
7.1 Part of a Fenna-Matthews-Olson complex . . . . . . . . . . . . . . . . . . . . . 75 7.2 Conceptual drawing of the VAET process . . . . . . . . . . . . . . . . . . . . . 77 7.3 Sketch of the 3D trap used for the VAET experiment . . . . . . . . . . . . . . . 78 7.4 Laser scheme generating the VAET Hamiltonian . . . . . . . . . . . . . . . . . . 79 7.5 VAET in the large ∆ regime . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80 7.6 VAET spectral scan for small ∆ . . . . . . . . . . . .-
 . . . . . . . . . . . . . . . 81 7.7 VAET time dynamics for several values of the environmental coupling . . . . . . 82 7.8 VAET time dynamics with a high-temperature environment . . . . . . . . . . . 82 7.9 Energy transfer between detuned sites . . . . . . . . . . . . . . . . . . . . . . . 84 7.10 Parity oscillations to measure ∆ . . . . . . . . . . . . . . . . . . . . . . . . . . . 85

vii
List of Tables
5.1 Cooling results using parametric coupling technique . . . . . . . . . . . . . . . . 54

1
Chapter 1
Introduction
In many respects, trapped-ion experiments are a unique playground for exploring nearly idealized quantum experiments. As we shall see throughout this work, a single trapped ion can often be thought of as a two-level spin attached to a three-dimensional harmonic oscillator. In this description, the two-level system models the electronic structure of the ion, and the harmonic oscillator describes the motion.
As is often the case in research, my experimental work did not follow a precisely linear path. Results from three diﬀerent experimental setups are presented in this thesis.
My research began as an eﬀort to build so-called “hybrid quantum systems” with trapped ions. In 1990, Heinzen and Wineland [26] pointed out that a trapped, oscillating charged particle ought to induce electrical currents in nearby electrodes. Those ideas lead rather directly to the experimental proposal by Daniilidis and co-authors [14] to use the induced currents as an ion-ion coupling mechanism. The idea behind this experiment is to trap an ion at each end of a metal wire. As one trapped ion osc-
illates, it should induce a current in the wire which can in principle be detected by an ion at the other end. This can lead, for instance, to exchanging single vibrational quanta between the two trapped-ion oscillators. This ion-wire-ion system would be a ﬁrst step towards building hybrid quantum devices such as ions coupled to superconducting qubits. Such hybrid devices may be useful in the quest for scalable quantum computing. The experiment is quite technically challenging, however, as it requ-
ires ions to trapped within 50 µm of the wire in order to for state exchange to occur with a few milliseconds. The ﬁrst results in this thesis were inspired by thinking about these technical challenges.
In the ﬁrst iteration of that experiment, the ions were trapped in a fairly standard surface electrode RF Paul trap. A small 1 mm length wire was glued to an aluminum frame. The frame itself was attached to a set of piezo stages so that it could positioned near two ions to perform an ion-ion coupling exepriment. While working with that setup, the wire broke oﬀ the holder inside the vacuum chamber. We decided at that point to re-design the experiment in a more robust way. We formulated a new microf-
abricated trap design in which the coupling wire was actually fabricated onto the surface of the trap. This re-design has been completed, and initial trapping was recently successful.

2
While re-designing the wire experiment, we started thinking about using chains of trapped ions to study the quantum mechanics of energy transfer. Through a conversation with a theory collaborator, Mohan Sarovar, we came up with the idea to implement vibrationally assisted energy transfer (VAET) in a two-ion system. VAET is a phenomenon believed to be important in biochemical processes such as photosynthesis, in which the transfer of electronic excitation is enhanced by the presence of a bosonic en-
vironment provided by molecular vibrations. In a trapped ion system, we emulated a model of this process. In our emulation, the electronic state of the two-ion system corresponds to chemical energy, and vibrational modes of the ion chain serve as the environment. We believe that this is the ﬁrst direct, isolated observation of vibrationally assisted energy transfer.
This thesis is organized as follows. In Chapter 2, I discuss the basics of the radiofrequency Paul trap, the workhorse tool of ion trapping experiments. In Chapter 3, I give an overview of the light-matter interactions which are necessary to undersatand the experiments in this thesis. Chapter 4 discusses the experimental setup of the wire coupling experiment.
In Chapter 5, I present the ﬁrst experimental results of this thesis. In this Chapter, I discuss a novel parametric method for swapping energy between any two vibrational modes of a single-ion oscillator. This idea was originally developed to ease experimental design constraints in the wire coupling experiment. Brieﬂy, the vibrational modes of the trapped ions which couple most strongly to the wire tend to be the hardest to interrogate via standard laser-ion methods. This is because the vibrationa-
l mode which couples most strongly to the wire is one which involves the ion moving normally to the surface the wire. The wire then tends to block a laser beam which would have a wave-vector projection onto the ion’s motion along this axis. However, in order to verify that coupling is in fact occuring, one must monitor the energy ﬂow into the oscillator modes. Therefore, we developed a scheme to swap the energy between oscillator modes, so that the wire coupling can be detected by interrogating a -
mode with better optical access. We also showed that this technique can be used to laser-cool vibrational modes which have no overlap to the cooling laser wave-vector. This method could then be used to cool all three vibrational modes of a trapped ion given any laser orientation, lessening experimental design constraints considerably.
In Chapter 6, two experiments pertaining to surface noise are covered. I give a brief overview of how noisy electric ﬁelds disturb the motional state of trapped ions. It has been known for some time that noise arising from the metal surfaces of ion traps can be a dominant decoherence source when ions are trapped of order 100 µm from the surface. This eﬀect must therefore be properly accounted for when performing the wire-coupling experiment. While the speciﬁc mechanism of this noise is unknown and-
 may vary from experiment to experiment, I present a simple phenomenological model which should hold in many cases. We study the directional dependence of electric ﬁeld noise in ion traps and point out that the electric ﬁeld ﬂuctuations can be larger in the direction normal to the trap surface than parallel to it. By using a single ion as direction-sensitive noise sensor, we are able to measure the direction in which the noise is the largest and moreover we use this eﬀect to determine whether the -
noise originates from material properties on the trap surface or from

3
technical sources such as noisy voltage supplies. Finally, in this Chapter, I discuss another experiment in which we measured the degree to which surface noise eﬀects perturb the phase coherence of the ion motion. This arises from the curvature of the potential induced by the noise sources, perturbing the ion motional frequencies. We point out that this eﬀect will become important as ion traps are further miniaturized. We also use this eﬀect to try to determine the frequency spectrum of the surfac-
e noise sources which may give hints about their physical origin.
Finally, Chapter 7 discusses our work on quantum-scale energy transfer. We engineer vibrationally assisted energy transfer in an analog quantum simulator, and the transfer dynamics in diﬀerent regimes of the model. I also discuss prospects for scaling the simulation to more complicated models, potentially to a regime which cannot be accessed by classical simulation resources.

4
Chapter 2
Ion traps
The experiments described in this document take place in diﬀerent traps. Most of the results are obtained using a micro-fabricated surface electrode Paul trap. The ﬁnal chapter of results are obtained in a more classic three-dimensional rf Paul trap. Nevertheless, the underlying principle of operation is exactly the same in both cases.
2.1 Radio-frequency Paul traps
The ﬁrst radio-frequency (rf) Paul trap for charged particles was realized in 1954 [48]. The mechanism relies on the creation of a rapidly oscillating electric potential with a saddle point somewhere in space. For a concrete picture, see Fig. 2.1. At the location of the saddle, the instantaneous electric ﬁeld is always zero since the potential gradient is zero. However, away from the saddle point, the electric ﬁeld amplitude increases as the distance from the saddle. Under certain conditions discu-
ssed below, this situation can give rise to stable trapping of a charged particle, in which the particle is drawn to the saddle. Given these conditions, the oscillating potential can be modeled as a time-independent harmonic pseudo-potential–an approximation we will use throughout this work. In what follows, I will develop the classical equations of motion for a charged particle near such a potential saddle point. It is in fact possible to solve the dynamics in a fully quantum-mechanical way [43],-
 but this treatment is considerably more complicated and does not seem to yield any new intuition.
To obtain the classical equation of motion for a charged particle of mass m and charge Q in an rf Paul trap, we will follow the treatment given by [6]. First, we will assume an electrode geometry such as that sketched in Fig. 2.1, where the electrodes labeled VRF have the time-varying voltage V0 cos(Ωrft). In addition we will allow for some additional electrodes which can apply any dc potential satisfying Laplace’s equation. We will take the zˆ direction to be into the page and assume the rf elect-
rodes extend far enough in this direction that the electric ﬁeld due to these electrodes is only in the xy-plane. We will call the zˆ direction the “trap axis.” Finally, we will assume that the potential oscillates much more slowly than the light travel time between electrodes, so that we can solve the problem quasi-statically (i.e.

5

(a)

(b)

Figure 2.1: Schematic cross-sections of typical rf Paul trap designs. Gold sections represent electrodes which are assumed to extend into the page. (a) Classic 3D Paul trap. (b) Surfaceelectrode trap. VRF represents a sinusoidally oscillating voltage at radio-frequency (30 − 50 MHz, typically). The arrows sketch the electric ﬁeld lines at the positive phase of the rf cycle. In both cases, there is a point where the electric ﬁeld is zero, and charged particles may be trapped in this region. In (b),-
 the grounded electrode at inﬁnity does not actually exist, but is used to demonstrate the boundary condition that the electric potential is zero at inﬁnity. Due to symmetry, the rf ﬁeld provides no conﬁnement in the direction normal to the page. To achieve conﬁnement in this direction, additional dc electrodes are introduced which create a conﬁnement in this direction.

by neglecting radiation). Then for some orientation of the xˆ and yˆ axes, the instantaneous electric potential near the saddle point due to the rf electrodes is

Φrf

=

V0 2

x2 − y2 1+
2

cos(Ωrf t),

(2.1)

where is a characteristic length scale of the trap geometry and we have taken the point (0, 0, 0) to be the location of the saddle point. In addition, we allow for some dc potential U (x, y, z), such that the total electric potential is

Φ(x, y, z, t) = U (x, y, z) + V0 2

x2 − y2 1+ 2

cos(Ωrf t).

(2.2)

This potential creates the ﬁeld

E(x, y, z, t) = −V0

xxˆ − yyˆ
2

cos(Ωrf t) + Edc.

(2.3)

Since we have already supposed that we can create arbitrary dc potentials, we will choose Edc(0, 0, 0) = 0. i.e. we will assume that the saddle points of the rf and dc potentials coincide.

6

If this is the case, then to lowest order, Edc varies quadratically around (0, 0, 0). It will be convenient then to write (u = uxxˆ + uyyˆ + uzzˆ):

Edc,i

=

m Q

(ωidc)2

ui.

(2.4)

Here we have just re-written the dc electric ﬁeld in terms of the frequency a charge would oscillate in a potential of that curvature.
The equation of motion for the charged particle is then:

mu¨i = QEi,

u¨i

+

(ai

+

2qi

cos(Ωrf t))

Ω2rf 4

ui

=

0.

The last line is the canonical form of the Mathieu equation, with

ai

=

4(ωidc)2 Ω2rf

qx

=

−

qy

=

2QV0 m 2Ω2rf

qz =0.

If |qi| and |ai| are both 1, the solution to the Mathieu equation takes the form:

ui(t) ≈ Ai cos(ωit + φi)

1

+

qi 2

cos(Ω2rf )

,

(2.5) (2.6)
(2.7)

with

ωi

≈

1 2

Ωrf

ai

+

1 2

qi2.

It is worth considering what this equation is telling us. The ﬁrst thing this is telling

us is that the equation of motion is the same as that of a particle harmonically trapped

with secular frequency ωi. On top of that harmonic motion, there is a small amplitude of driven motion at the frequency of the rf drive. This driven motion is called “micromotion”

throughout the literature. This micromotion results from the charge’s oscillations around

the potential minimum, during which it experiences regions of non-zero rf ﬁeld. The rf ﬁeld

generates a periodic force with frequency Ωrf, imposing micromotion on top of slower secular trajectory.

The second thing to notice is the form of ωi. If we take, for instance, the x direction, and write it out explicitly, we ﬁnd

ωi ≈

(ωxdc)2

+

Ω2rf 8

qx2

.

(2.8)

We therefore ﬁnd that the equation of motion is approximately equal to the equation of motion if a charge is placed in a dc ﬁeld with frequency ωidc, and the rf ﬁeld is replaced with

7
√ a harmonic pseudopotential of frequency Ωrfqx/ 8. This is known as the pseudopotential approximation, and throughout most of the rest of this work we will treat the eﬀect of the rf potential as a static pseudopotential.
A single trapped ion will have three normal modes of oscillation. In a linear trap geometry (shown in Fig. 2.1), two modes will lie in the plane of the rf conﬁnement, and it is standard to refer to these modes as “radial modes.” The third direction is called the “axial mode.”
2.2 Static potential control
For several reasons, it is important to control the dc ﬁelds near the trapping location. One reason is that, since the trap geometries we consider will have no rf conﬁnement along the zˆ direction, we need to apply a dc potential which conﬁnes a charge in this direction. Laplace’s equation requires that if the dc ﬁeld is conﬁning along zˆ it must be anti-conﬁning along at least one other axis. However, the combination of dc potential plus rf pseudopotential can still be conﬁning in all three spati-
al axes as long as the pseudopotential curvature is strong enough in the anti-conﬁning directions.
It is also important to cancel stray dc ﬁelds which may exist in the trapping region due, for instance, to nearby charged dielectric materials. If the dc ﬁeld is not zero at precisely the same location as the saddle point of the rf ﬁeld, the combination of dc potential and pseudopotential will move the trapping location out of the zero point of the rf ﬁeld. While this is tolerable to some degree (and in fact unavoidable at some level), this means that the trapped charge experiences a driving force-
 due to the rf ﬁeld, modulating the ion’s motion at the driving rf frequency. This eﬀect is called “excess micromotion”–micromotion in excess of the unavoidable modulation experienced if the rf and dc ﬁelds are perfectly aligned. Among other problems, such driven motion can create diﬃculties in laser cooling if the modulation amplitude becomes comparable to the laser wavelength.
In addition, it can also be useful to use dc potentials to tune the orientation of the trapped charge’s harmonic oscillator modes with respect to the trap structure. We applied such control in Sec. 6.3 to study electric ﬁeld noise originating from trap electrode surfaces.
By placing and biasing electrodes near the trapping region, the dc potential near the trapping region can be manipulated. However, it is not immediately clear how to generate a particular potential landscape given some conﬁguration of controllable electrodes. We need a means to deterministically modify the potential in the trapping region. A thorough formal treatment of dc potential control in ion traps is found in [44]. Here, I will give an overview of the topic in less formal terms.
We need only to control the potential in a very small region around the rf saddle point, and therefore we will therefore attempt to control the coeﬃcients of a series expansion around this point. Neglecting a constant oﬀset, a general function deﬁned in three dimensions will have 9 independent parameters up to second order in spatial variation. An electric potential, however, must obey Laplace’s equation (∇2Φ = 0), and so we expect 8 independent degrees of freedom.

8

The independent degrees of freedom will be the projections of the potential along some set of basis functions (which are up to second order in space). The basis elements we seek are functions f (x, y, z) satisfying ∇2f = 0–i.e. eigenfunctions of the Laplacian with eigenvalue zero. This guarantees that superpositions of the basis functions also satisfy the Laplace equation. One convenient set of basis functions satisfying this constraint is the real spherical harmonics [44] (real because electric p-
otentials must be real). For our experiments, we will deﬁne basis functions as:

Ex =

x

Ey =

y

Ez =

z

U1 =

x2−y2 2

U2

=

2z2−x2−y2 2

U3 =

xy 2

U4 =

xz 2

U5 =

yz 2

(2.9)

These basis functions are called “multipoles.” The Ei terms are of linear order in space and therefore represent homogeneous electric ﬁelds. The Ui terms are electric quadrupoles, modifying the curvature of the potential in the trapping region. To the current order of approximation, any potential landscape can be expressed as a linear combination of these multipoles. With complete control over these multipoles, it is possible to completely control the electric ﬁeld and potential curvature in the t-
rapping region (subject to the stability of the Mathieu equation, but this is not typically a problem).
In order to control the potential using some set of electrodes Ei, one needs to know the potential due to each electrode, with all other electrodes grounded. This can be obtained either by electrostatic simulation or some analytic approximation [63, 70]. The potential Φi due to biasing Ei to voltage V i can be written

Φi(x, y, z) = V i

eix r0

Ex

+

eiy r0

Ey

+

eiz r0

Ez

+

ui1 r02

U1

+

.

.

.

.

(2.10)

r0 is a constant with dimensions of length. The choice of r0 corresponds to the setting the units of the coeﬃcients eix,y,z and uij. We typically set r0 = 1 mm. Due to the superposition

9

Figure 2.2: CCD image of ∼ 60 ions trapped in one of the traps discussed in this work.

principle [32], given a set of voltages on all electrodes, the total potential Φ will be the sum

Φ(x,

y,

z)

=

ex r0

Ex

+

ey r0

Ey

ez r0

Ez

+

u1 r02

U1

+

.

.

.

= Φi(x, y, z)

i

= Vi
i

eix r0

Ex

+

eiy r0

+

Ey

eiz r0

Ez

+

ui1 r02

U1

+...

.

(2.11)

Provided that there are enough (i.e. ≥ 8) electrodes which generate linearly independent ﬁelds, the potential can be completely controlled by choosing the set V i of bias voltages to achieve the desired total potential. This can be done, e.g., by a matrix inversion or a least-squares solution.

2.3 Multiple ions

The picture is somewhat more complicated if multiple ions are contained in a single trap (Fig. 2.2). In this section, I will summarize the treatment of D. F. James [33]. The extra complication arises from the Coulomb interaction between ions. This interaction leads to coupling between the motion of the individual ions. In this case, the equations of motion can be diagonalized, leading to a set of harmonic modes.
Under the typical assumption that the radial conﬁnement is suﬃciently strong, the most energetically favorable condition is for the ions to form a line. It is helpful to deﬁne the the system potential energy as V :

V=

i

1 m
2

ωx2x2i + ωy2yi2 + ωz2zi2

Q2 1 + i,j 8π 0 |ri − rj| .

(2.12)

Here ri = (xi, yi, zi) is the (in general quantum) position of the ith ion. m and Q are the ion mass and charge respectively. ωx, ωy, and ωz are the frequency of the external potential (dc + pseudopotential) in the x, y, and z directions. It is in general possible for these frequencies
to vary as a function of position. The sum is taken over the ions. The normal modes of the
ion chain are calculated by assuming the ion positions are given by small excursions around the equilibrium points, i.e. ri = reiq + δi.

10

Figure 2.3: Schematic drawings of the normal modes for a two ion chain. Arrows indicate the displacements each ion undergoes in the corresponding normal mode. The abbreviation “COM” stands for center-of-mass. In an ion chain, there are two radial COM and two radial rocking modes-one for each radial direction of motion.

When discussing collective modes of an ion chain, we typically diﬀerentiate between

“axial” modes and “radial” modes. The axial modes refer to excitations along the trap

axis zˆ. The radial modes are modes in which the ions are displaced in the radial xˆ and yˆ

directions. The frequencies of the radial modes of the ion chain tend to be more closely

spaced as compared to the axial modes. This can be most easily understood by considering

the case of 2 ions in a line along the zˆ axis, separated by a distance d. If one of the ions is

displaced by δz, the distance between the ions changed by δz, and the change in the energy of

the

conﬁguration

is

δz d

.

This

is

the

coupling

energy

of

the

axial

motion,

and

also

the

splitting

between the two axial modes. By contrast, if an ion is displaced radially by δx, the distance

between

ions

is

only

changed

by

≈

δx 2d

,

and

thus

the

energy

change

is

much

smaller

than

the

axial case.

For the results in this thesis, it is only necessary to understand ion chains of up to two

ions, and therefore a total of six harmonic modes, summarized in Fig. 2.3. When the total

conﬁnement is √harmonic, the axial COM mode has frequency ωz, and the axial stretch mode has frequency 3ωz. We typically work with ωz ≈ 2π × 1 MHz, and therefore the stretch mode would have the higher frequency 2π × 1.7 MHz. There are two radial COM modes,

with frequencies ωx and ωy, both typically in the range of 2π × (2 − 3) MHz. The x and y radial rocking modes have frequencies ωx2 − ωz2 and ωy2 − ωz2, respectively [56].

11
Chapter 3 Light-matter interactions
Our primary means of interacting with trapped ions is through laser light. Lasers facilitate our ability to cool ions’ motion, as well as measure and manipulate their internal states.
3.1 Ca+ internal structure
In our experiments, we work with the ion species 40Ca+. Since neutral 40Ca has two valence electrons, the singly ionized species 40Ca+ has a single valence electron and therefore has a hydrogenic level structure. It has no nuclear spin and therefore no hyperﬁne structure.
The ground state of 40Ca+ is a 2S1/2 level, which couples via an electric dipole transition to the 2P1/2 level (Fig. 3.1. This 2S1/2 ↔2P1/2 transition is addressed with 397 nm light. This transition enables Doppler cooling (Sec. 3.2) and state detection (Sec. 3.2). The excited state spontaneously decays to either the 2S1/2 level (with probability 93.5%) or the 2D3/2
Figure 3.1: The 2S1/2 ↔2P1/2 and 2P1/2 ↔2D3/2 transitions. Double-headed arrows indicate atomic transitions. Squiggly lines indicate spontaneous emission decay paths. As noted in the main text, the P level decays about 6.5% of the time to the D level. Image used with permission from P. Schindler.

12
Figure 3.2: Internal structure of 40Ca+ displaying relevant energy levels. Arrows indicate lasers used in the experiment to address the transitions. The light grey lines represent Zeeman sublevels. Image used with permission from P. Schindler.
level (with probability 6.5%) [53]. In the case that the ion has decayed to the 2D3/2 state, it may be repumped back to 2P1/2 with 866 nm laser light.
The experiments presented in this work also make use of additional internal levels (see Fig. 3.2 for a summary). In addition to the dipole transition, we also make use of the 2S1/2 ↔2D5/2 electric quadrupole transition, with an excited state lifetime of 1.2 s [41], with a sub-Hz natural linewidth. The long lifetime of this state permits the creation and manipulation of coherent superpositions of sublevels of the S and D manifolds. For instance, pairs of S and D sublevels have been used as qubits i-
n quantum information processing experiments with 40Ca+ [61]. Owing to technical sources of line broadening in our experiments, we do not achieve this fundamental limit in practice. We experimentally observe the linewidth to be of order 1 kHz. This narrow line allows the Zeeman structure of the 2S1/2 ↔ 2D5/2 transition to become resolved at even quite small magnetic ﬁelds (we work, for example, at about 3 G magnetic ﬁelds, where the sublevels are several MHz apart).
Since the lifetime of the 2D5/2 state is so long, it is not feasible to wait for spontaneous emission to “reset” the ion back to the 2S1/2 state on demand. However, the 2D5/2 ↔ 2P3/2 transition may be addressed via a laser at 854 nm. Repumping the ion from the D state back to the P state allows the ion to be reset into the ground state through spontaneous emission from the P level.
3.2 Doppler cooling
In our experimental system, Doppler cooling is eﬀected through a combination of 397 nm and 866 nm laser light, as indicated in Fig. 3.1. The excited state lifetime of the 2P1/2 level

13

is about 7 ns [35], signiﬁcantly faster than the ion motional oscillation period (on the order of 0.5-2 µs). Thus, during an absorption-emission cycle on this transition, the ion velocity is approximately constant. This justiﬁes a semi-classical treatment such as that presented in [43] or [56], in which the eﬀect of the 397 nm laser is treated as a radiation pressure force depending on the ion’s velocity.
Although a single ion has three normal modes of motion, the radiation pressure force can be understood as acting on each mode independently. Therefore it is suﬃcient to consider interactions with only a single mode Consider an ion irradiated with a single 397 nm cooling beam with wave-vector k. Assume that the cooling beam is oriented along a particular normal mode of motion. In this approximation, we assume that the ion receives an impulse ∆p = k into the mode each time it absorbs a 397 nm photon-
. Meanwhile, each decay event is followed by spontaneous emission which transfers momentum into a random direction, with an average value of zero momentum transfer on emission. Most decay events will return the ion to the 2S1/2 level, but will occasionally leave the ion in the 2D3/2 state, in which it will no longer interact with the cooling beam. In order to continue interacting with the cooling beam, the ion must then be repumped to the 2P1/2 with an 866 nm laser. The average force is equal to t-
he average rate of momentum change, i.e.

dp F = dt = kΓρee,

(3.1)

where Γ is the decay rate out of the excited state and ρee is the time-independent probability to ﬁnd the ion in the excited state. The excited state population depends on the laser detuning ∆ from the atomic resonance in the laboratory frame, the velocity-dependent Doppler shift of the resonance frequency (kv, with v the ion velocity), strongly the atomic resonance is driven. It is common to quantify how strongly a laser is driving an atomic transition in terms of the saturation parameter s = 2|Ω-
|2/Γ2, where Ω is the on-resonance Rabi frequency. In the weak excitation (s → 0) limit, ρee takes the Lorentzian lineshape [43]:

s/2

ρee = 1+

2(∆−kv) 2 .
Γ

(3.2)

∆ − k · v appears in the line above because it is the laser detuning in the ion’s reference frame. We can calculate the cooling rate E˙ c (the rate heat is removed from the ion’s motion)
by linearizing the force about small velocities:

s/2

F = kΓ 1+

2(∆−kv) 2 Γ

dF =F0 + dv v

8k∆

=F0

1+

v

Γ2 + 4∆2

,

(3.3)
(3.4) (3.5)

14

with F0 =

k

Γ

s/2 2+8∆2/Γ2

.

The work done on the ion by the radiation pressure force is F dx through an inﬁnitesimal

displacement of the ion, and therefore the cooling rate is

E˙ c = F v

8k∆

=

F0

1+

v

Γ2 + 4∆2

v

8k∆ =F0 Γ2 + 4∆2

v2

.

(3.6) (3.7) (3.8)

As with any cooling process, the cooling limit is reached when the cooling rate is equal to the heating rate. We claimed earlier that each absorption/emission cycle has ∆p = 0, i.e. that no momentum is transferred on average. However, it is not true that (∆p)2 = 0– multiple iterations of the absorption/emission cycle cause the ion’s momentum distribution to diﬀuse as a random walk. This happens both during absorption and during emission. Although the momentum kicks during absorption are all in the-
 same direction, they occur at random times with respect to the ion’s trajectory, leading to diﬀusion. Also, the emission events occur in random directions, also causing the momentum distribution to diﬀuse. Since the process is a random walk, (∆p)2 ∼ ( k)2N , where N is the number of photon scattering events.
Following [43], the eﬀect of all of this can be incorporated by taking

E˙ h

=

1d 2m dt

p2

=

1 (
2m

k)2Γρee(v = 0)(1 + ξ),

(3.9) (3.10)

where ξ is a geometrical factor taking the value 2/5.

Setting E˙ h = E˙ c and making the thermodynamic association m v2 = kBT , we ﬁnd a

minimum temperature T

=

Γ 4kB

(1

+

ξ),

achieved

for

∆

=

Γ/2.

For a 40Ca+ ion, taking

Γ = 1/(7 ns), this corresponds to an average motional occupation of about 6 quanta at a

2π × 1 MHz oscillation frequency.

The interpretation of temperature
It is worth discussing what it meant by “temperature” in the case of trapped ion experiments, as we deal only with one or a very small number of individual trapped ions. Since we prepare the motional state of ions via an incoherent process (e.g. Doppler cooling), one might expect that after state preparation, the vibrational modes of the ions are left in a set of well-deﬁned quantum states, i.e. {n1, n2, n3, } = {3, 8, 1}.
Indeed, this is the view we typically take in experiments–that after cooling, the motional state of the ions is prepared to some particular quantum state in the energy eigen-basis. However, we usually repeat our measurements 100-1000 times in order to obtain measurement statistics. The interpretation of temperature that I will take throughout this work is

15
Figure 3.3: Electronic energy levels of 40Ca+ relevant to coherent operations with the 729 nm laser. The light grey lines represent Zeeman sublevels. Squiggly line is a spontaneous emission decay path. Image used with permission from P. Schindler.
to consider that the motional state of the ions is prepared to a random initial state in each iteration of the experiment, but that the random initial state follows a Boltzmann distribution characterized by some temperature, or equivalently, some average motional occupation number.
3.3 Coherent operations and resolved sidebands
Coherent operations in our system take place on the 2S1/2 ↔ 2D5/2 transition. This transition is dipole-forbidden, but allowed via an electric quadrupole interaction whereby the orbital angular momentum of a laser light ﬁeld allows the atom to undergo angular momentum change of ∆ = 2. While these transitions are on the order of 106 times slower than dipole allowed transitions (for the same laser intensity), nevertheless the line can be driven with Rabi frequencies exceeding 1 MHz for ∼ 1 mW of las-
er power focused to 20 µm.
The relevant electronic energy levels are shown in Fig. 3.3. In a magnetic ﬁeld, the 2S1/2 level is Zeeman split into two sublevels, and the 2D5/2 level is split into 6 sublevels. In practice these sublevels are separated by about 1 MHz, with a magnetic ﬁeld of about 3 G.
The magnetic quantum number change allowed by an electric quadrupole transition is |∆mj| ≤ 2. This means a total of 10 lines can appear in optical spectroscopy of the S ↔ D transition.
Optical pumping is done via illuminating the ion with both the 854 nm laser and tuning the 729 nm laser resonant with the |S, mj = +1/2 → |D, mj = −3/2 transition. The 854 nm laser repumps the ion out of the D state back into the S state via spontaneous emission out of the P state, whereupon it can decay to either mj = ±1/2. However, once

16

the |S, +1/2 state is no longer populated, the ion becomes dark to the 729 nm laser light, at which point the ion is optically pumped into the pure state |S, −1/2 .
In order to analyze the laser-ion interaction, it is helpful to write down a Hamiltonian describing the system. We will roughly follow the derivation of [43]. For coherent operations on single ions, we typically consider only one set of Zeeman sublevels, for instance the set consisting of {|S, −1/2 , |D, −1/2 }, which we shorten to {|S , |D }. This is the two level atom approximation. The states |S and |D can form a qubit, due to the long lifetime of superpositions of these levels. If we restrict -
our analysis to these two states, the Hamiltonian for the qubit plus the motion of the ion can be written

∆ H0 = 2 σz +
i

νiaia†i .

(3.11)

Here, ∆ is the energy splitting of the states |S and |D , and σz is the Pauli spin operator. The sum is taken over the vibrational degrees of freedom of the ion (i.e., in the pseudopotential approximation), and νi are the vibrational frequencies (typically on the order of hundreds of kHz to a few MHz). The most basic form of the laser-ion interaction is

HLI =

Ω ei(kxi cos(θ)−ωLt+φ)σ+ + h.c., 2

(3.12)

where k = 2π/λ is the length of the laser wave-vector, xi is the displacement of the ion’s ith vibrational mode, θ is the angle between the laser wave-vector and the xi direction, ωL is the laser frequency, and φ is the phase of the laser light ﬁeld. Ω is the coupling strength of the laser to the electronic transition, proportional to the laser ﬁeld intensity and σ+ is the Pauli spin raising operator. h.c. denotes Hermitian conjugation.
Under the assumption that the ion is suﬃciently cold that its wavefunction extent is much smaller than the laser wavelength, we can treat kx as a small parameter and expand the exponential as

ei(kxi cos(θ)−ωLt+φ) ≈(1 + ikxi cos(θ))ei(−ωLt+φ)

(3.13)

= 1 + ik cos(θ) 2mνi (ai + a†i ) e−i(ωLt−φ),

(3.14)

where m is the ion mass. When kx cos(θ) can be treated as a small parameter, the ion is
said to be in the Lamb-Dicke regime. The quantity k cos(θ) 2mνi ≡ ηi, and ηi is called the Lamb-Dicke parameter. We typically work well within this regime: A Ca+ ion with 1 MHz oscillation frequency has a spatial wavefunction extent of about 9 nm, much smaller than the 729 nm wavelength, justifying the Lamb-Dicke approximation throughout most of this work.
We can plug our simpliﬁed exponential back into Equation 3.12 to obtain

HLI ≈

Ω σ+ 2

1 + iηi(ai + a†i )

e−i(ωLt−φ) + h.c.

(3.15)

17

At this point we transform into the interaction picture, using Equation 3.11 as the free Hamiltonian. We obtain:

HL(iI) =

Ω σ+ei∆t 2

1 + iη(aie−iνit + a†i eiνit)

e−i(ωLt−φ) + h.c.

(3.16)

This is the laser ion interaction to ﬁrst order in ηi. By tuning the laser frequency ωL, certain parts of this Hamiltonian may be selected via the rotating wave approximation (RWA):

HL(iI)/


 

Ω 2

eiφσ+

+

h.c

≈

i

ηiΩ 2

eiφ

σ

+ai

+

h.c.

i

ηiΩ 2

eiφ

σ

+a†i

+

h.c.

if ωL = ∆ if ωL = ∆ − νi if ωL = ∆ + νi

(3.17)

The ﬁrst piece of Equation 3.17 occurs when the laser frequency is resonant to the splitting

between states |S and |D . This term causes population to oscillate between the |S and

|D with Rabi frequency Ω.

In the Bloch sphere picture, with the south pole being state |S and the north pole |D ,

this interaction causes the ion’s Bloch vector to rotate about a vector in the xy plane. The

particular vector is deﬁned by the choice of laser phase φ, and given by nˆ = cos(φ)xˆ+sin(φ)yˆ.

We often call such a transition a “carrier” transition, in contrast to the “sideband” transitions

discussed below.

The second and third lines of Eq. 3.17 are often called “sideband” transitions. They occur

when the laser is either red or blue of the electronic transition by the frequency corresponding

to one motional quantum. These transitions ﬂip the ion’s electronic state while also adding

or removing a motional quantum. Tuning the laser to the “red sideband” generates the

interaction interaction

ηi

Ω 2

(σ+ai

+

σ−a†)

(setting

the

laser

phase

to

zero).

is

ηi

Ω 2

(σ+a†i

+ σ−ai).

Since

the

matrix

elements

of

On the ai scale

“blue√sideband”, the with √n, where n is

the vibrational qu√antum number, the Rabi frequency of these transitions is nηiΩ on the

red sideband and n + 1ηiΩ on the blue sideband.

In general, there exist sideband transitions for every vibrational mode of an ion crystal,

e.g. each carrier transition in a single trapped ion has three red and three blue sidebands

to ﬁrst order in η. There are also second and higher order sidebands in which, for instance,

two vibrational quanta are added or removed. See Fig. 3.4 for a summary of the ﬁrst order

transitions.

3.4 Sideband cooling
Doppler cooling is capable of preparing trapped ions into the Lamb-Dicke regime, with average motional occupations of less than 10 quanta for typical trap frequencies of 1-2 MHz. However, this process is fundamentally limited by the linewidth of the cooling transition. A second stage of cooling, called “sideband cooling”, can cool ions into the ground motional

18

|D, 3

|D, 2

|D, 0

|D, 1 √

√ 3ηΩ

2ηΩ

ηΩ

Ω

|S, 3

|S, 2

|S, 1

|S, 0

Figure 3.4: Carrier and ﬁrst order sideband transitions in the two level atom (plus harmonic motion) approximation. Energy levels are in the basis {|S , |D } ⊗ {|ni } where ni is the motional quantum number of oscillator mode i. In general there is one level for each combination of oscillator states.

Figure 3.5: Schematic drawing of the sideband cooling process.

19

state with high probability by taking advantage of the signiﬁcantly smaller linewidth of the quadrupole S1/2 ↔D5/2 transition.
In the sideband cooling process, the ion is illuminated with laser light at 854 nm and 729 nm. The 729 nm light is resonant to the red sideband. This is shown schematically in Fig. 3.5. The red sideband transition causes the ion to undergo an |S, n → |D, n − 1 transition. The 854 nm repumper “resets” the electronic state of the ion back to |S by promoting the electron to the P3/2 state, from which it spontaneously decays back into |S . In the Lamb-Dicke regime, most of the spontaneous decays do no-
t cause heating (see below). Crucially, the ion stops absorbing photons when it reaches the ground (|S, 0 ) state– this can be seen in the second line of Eq. 3.17. If the motional state of the ion ion is |0 , HLI = 0 because ai|0 = 0. The presence of the repump laser couples the |D and |P states, artiﬁcially broadening the linewidth of the carrier and sideband transitions.
As in Doppler cooling, the linewidth of the cooling transition poses the fundamental limit to the lowest achievable temperature [56]. If the ion reaches the ground state, it may still absorb photons due to the ﬁnite, however small, linewidth of the carrier transition. Such an absorption event would take the ion from |S, 0 → |D, 0 . From |D, 0 , the ion will be pumped to the P level and spontaneously decay to the S state by emitting a 393 nm photon. The chance that this decay process causes heating-
 may be analyzed with Fermi’s golden rule, in which the transition probability is proportional to the Hamiltonian matrix element connecting the states [8].
Spontaneous emission is caused by an electric dipole interaction between the ion and the background electromagnetic ﬁeld, HAF . In order to compare the fraction R of spontaneous decays which heat the ion as compared to those which do not, we do not need to fully derive the theory of spontaneous emission; we need only work out the ratio of matrix elements:

R

=

| |

P, 0|HAF |S, 1 P, 0|HAF |S, 0

|2 |2

∼

| |

P, 0|eiη˜(a+a†)|S, 1 P, 0|eiη˜(a+a†)|S, 0

|2 |2

=

η˜2,

(3.18)

where η˜ is the Lamb-Dicke parameter for the 393 nm photon emitted during spontaneous emission, numerically about 0.17 for a 1 MHz oscillation frequency. Heating occurs when the carrier transition is driven oﬀ-resonantly by the 729 nm light resonant to the red sideband transition, and occurs at a rate proportional to Γ2. The heating rate is then the rate of carrier scattering times R. The limit for sideband cooling may then be analyzed using rate equations [56], arriving at the result

Γ2 n¯i = 4νi2

η˜ 2 1

+,

ηi

4

(3.19)

with n¯i the average occupation number of mode i, and Γ the linewidth of the cooling transition. Γ here should not be taken to be the natural linewidth (i.e. 1 Hz), but rather the linewidth of the transition with the repump light applied. By choosing the cooling linewidth much smaller than the trap frequency, the ion can be prepared in the ground state with

20

high probability. With Γ = 100 kHz and νi = 1 MHz, this would give a temperature limit of n¯ = 0.01. However, this idealized derivation does not take into account other heating sources such as noisy electric ﬁelds from the trap electrodes. In the experiments discussed in this work, these sources heat the ion at rates between 10 and 200 quanta/s. At the high end, this limits the practically achievable minimum temperature to n¯ ≈ 0.2.

Temperature measurement

The average motional occupation may be determined by spectroscopy of the sidebands [43]. The diﬀerence between red and blue sideband excitation at constant time encodes the desired information.
Consider the following procedure. First, prepare via some cooling mechanism the vibrational modes of the ion to some thermal distribution. Suppose that the vibrational mode of interest has mean thermal occupation n¯. Then, illuminate the ion with light resonant to the red sideband for some ﬁxed time t and measure the probability to ﬁnd the ion in the D state, PD,r. Then, repeat the preparation process, and illuminate the ion on the blue sideband for time t, and again measure the D state probabilit-
y, PD,b.
Illuminating the ion on one of the sidebands drives a family of transitions |n → |n ± 1 at the same time, with an n dependent Rabi frequency. Population is assumed to be incoherently distributed along the motional ladder according to Boltzmann statistics. Therefore the D state probability is the incoherent sum of all of these processes, weighted by the population in the initial states. When the 729 nm laser is resonant to the red sideband, we k√now from Eq. 3.17 that each transition |S, n → |D, n -
− 1 occurs with the Rabi frequency
nηiΩ, and therefore:

PD,r =

∞

Pn sin2

√ nηiΩt

n=1

∞
=

n¯ n¯ + 1

n
sin2

√ nηiΩt

n=1

n¯ ∞ =
n¯ + 1

n¯ n¯ + 1

n
sin2

√ n + 1ηiΩt

.

n=0

(3.20) (3.21) (3.22)

Meanwhile, with the laser resonant to the blue sideband (assuming the same laser intensity as above), we can use Eq. 3.17 to obtain the D-state probability in this case as well:

∞

√

PD,b = Pn sin2 n + 1ηiΩt

n=0

∞
=

n¯ n¯ + 1

n
sin2

√ n + 1ηiΩt

.

n=1

(3.23) (3.24)

21

In Eq. 3.21 we use the fact that for a harmonic oscillator with average thermal occupation

n¯, the occupation probability for the state n is Pn =

n¯ n¯+1

n [21].

For ﬁxed excitation time

t, the ratio of red to blue sideband heights takes a simple form which depends only on the

mean thermal occupation n¯:

PD,r =

n¯ .

PD,b n¯ + 1

(3.25)

Thus, the thermal occupation can be extracted by comparing the red and blue sideband heights. This method works as long as the sideband heights are experimentally distinguishable. An estimate of this maximum measurable temperature can be extracted by assuming the blue sideband height is of order PD,b = 0.5. With 100 experi√mental repetitions (a typical value), the statistical error on this parameter will be δPb = 0.5/ 100 = 0.05. At the highest measurable temperatures, the red sideband height PD,r-
 is also of order 0.5 and therefore δPr ≈ δPb = 0.05. To fully resolve the peak height, we should require PD,b − PD,r ≈ 2δPb, so that statistical ﬂuctuations in the red and blue sideband heights do not overlap. Using this condition, we get PD,r = 0.4, implying that n¯max = 4 is the highest measurable thermal occupation by this method.

3.5 Electron shelving
We have until now ignored how to measure the ion in the {|S , |D } basis. For this process we use a technique called electron shelving [16]. The ion is illuminated with both 397 nm and 866 nm light. If the ion is in the |S state, it will scatter photons and emit 397 nm photons from the dipole transition. Within 5 ms, we can typically detect up to 30 photons from a single ion on a photomultiplier tube (PMT). On the other hand, if the ion is in the |D state, it will not interact with either 397 nm o-
r 866 nm light, and therefore will not ﬂuoresce. Thus, by applying the laser light and counting detected photons from a PMT for several milliseconds, the ion can be projectively measured to be in either the |S or |D state. The process also works for multiple ions if a charge-coupled device (CCD) camera is used for the readout. In that case, the camera is exposed for several ms, and the state of each ion in the chain is determined by analyzing the resulting image.

3.6 Engineered interactions
In the remainder of this chapter, I will discuss a few more light-matter interactions which are used in the experiments described in this thesis. These interactions are more complicated than the interactions discussed above, in the sense that the form of their interaction with the ion is not immediately obvious from the basic laser-ion Hamiltonian. For instance, they often involve illumination of the ion with bichromatic laser light.

22

Here, we will mostly concern ourselves with obtaining “eﬀective Hamiltonians.” An eﬀective Hamiltonian is a Hamiltonian operator which faithfully describes the dynamics of the laser-ion interaction.

Coherent motional displacement
One such interaction is coherent displacement of the motional state via the 397 nm dipole transition. This method is discussed in [52]. Using the same notation as Section 3.2, illuminating the ion with 397 nm light at saturation produces the radiation pressure force

F = kΓρee = kΓ/2

(3.26) (3.27)

This force may be modulated, for instance, by switching an acousto-optic modulator (AOM) on and oﬀ at a certain frequency ωm. If ωm ≈ νi, where νi is one of the vibrational frequencies of the trapped ion, this force can aﬀect a coherent displacement of the motional
state. If the laser is operated at saturation, this method can achieve a displacement amplitude |α|2 = 100 in less than 10 µs [52]. This is useful, among other things, for probing the trap frequency to high precision.

ac Stark shift

In the two level atom picture with states |S , and |D , the energy splitting between the states

can be modiﬁed by applying a 729 laser beam with coupling strength Ω oﬀ-resonant to all

carrier and sideband transitions. In the two level atom picture, if the beam is detuned by ∆

from the carrier transition, the presence of such a beam may be described by the interaction

Hamltonian term [18]:

Ω2 HI = 4∆ σz.

(3.28)

In a real atom, the ac Stark shift has a more complicated form, including contributions from

all carrier and sideband transitions as well as the far oﬀ-resonant dipole transitions which

are roughly of the same order as the contribution above. However, the energy shift may be

determined experimentally [24].

Mølmer-Sørensen interaction
Two ions in the same trap have an eﬀectively negligible interaction between their electronic state owing to the several micron distance between the ions. However, an interaction between the ions’ electronic states may be engineered using the Mølmer-Sørensen technique [65, 57]. This method has been used as an entangling gate in quantum information processing experiments [61], and is referred to as a “Mølmer-Sørensen gate” in this context.

23

√ n + 1ηΩ

|DD, n + 1 |DD, n − 1

√ nηΩ

√ nηΩ

√ n + 1ηΩ

|DS, n

|SD, n

Figure 3.6: Simpliﬁed sketch of the Mølmer-Sørensen interaction. As drawn here, the system is initialized into some combination of |SD, n and |DS.n . Take the initial state to be |DS, n . From the bluer of the two laser tones at frequency ω+, the system may undergo a two photon Raman transition from |DS, n → |SD, n , following the blue path in the sketch. Similarly, the system can follow the red path. Due to a quantum interference between the two paths, there is no n dependence on the transition r-
ate. Transitions to |SS state also occur but are left oﬀ for clarity.

In the simplest picture, consider two ions in the same trap. Both ions participate in some common vibrational mode with frequency ν (the “bus mode”), and both have the same qubit splitting ∆. The bare Hamiltonian is then

H0 =

∆ 2

σz(1) + σz(2)

+

νa†a.

(3.29)

Now suppose both ions are equally illuminated with a bichromatic 729 nm laser beam. The laser beam has two tones with frequencies ω± = ∆ ± (δ + ν) (see Fig. 3.6), i.e., these tones are nearly resonant with the red and blue sidebands of the ion crystal, but are detuned by δ ν. Each tone has coupling strength Ω. In the experiments described here, we will always work in the regime ηΩ δ–that is, in the limit where the laser tones cannot directly excite the sideband transitions. We call this the “adiab-
atic regime.” In this regime, the process may be described as a Raman transition.
In this limit, the eﬀective Hamiltonian takes the form [57]

HI

=

ηΩ2 2(ν − δ)

σx(1)

⊗

σx(2).

(3.30)

This is a Hamiltonian which drives collective ﬂips between |SD ↔ |DS , or |SS ↔ |DD , where |xy means that ion one is in state |x and ion two is in state |y . Surprisingly, the eﬀective Hamiltonian contains no n dependence. This is due to a quantum interference
between the two paths shown in Fig. 3.6 [65]. Each of the two paths can be thought of as
a two-photon Raman transition. The eﬀective two-photon Rabi frequency on the blue path is proportional to ηΩ2(n + 1), and on the red path is proportional to ηΩ2(n). However, in the blue path the lasers are blue detuned from the intermediate state |DD, n + 1 , and in

24
Figure 3.7: Left: Populations in the electronic states |SS (blue curve and points), |DD (green curve and points), and |SD or |DS (red data points). Approximately equal populations are achieved at the gate time τ = 0.18 ms. Right: Parity (deﬁned in the main text) of the two qubit state as a function of the analysis phase angle after the Mølmer-Sørensen interaction is applied for 0.18 ms. The oscillation is ﬁt to a sine function yielding a measured contrast of 0.87(3). The parity contrast, taken tog-
ether with the populations in the left plot, give the ﬁdelity F ≈ 0.90 to a Bell state. These data were taken by Eli Megidish.
the red path are red detuned from the intermediate state |DD, n − 1 , and therefore the two paths interfere destructively. The result is that the n-dependence in the total transition rate drops out. This means that the interaction can entangle the electronic states of two ions even when the mediating mode is in a thermal state [40].
A perfect Mølmer-Sørensen interaction, when applied to the state |SS , causes the twoion electronic state to oscillate between |SS ↔ |DD . When the state is in between |SS and |DD , the entangled Bell state |Φ = √1 |SS + eiφ|DD is produced.
2
Fig. 3.7 shows the population dynamics and phase coherence of resulting state when the interaction is implemented in our apparatus. The population dynamics is shown to mostly oscillate between |SS and |DD states, with a few percent of leakage out of this subspace, most likely due to unwanted laser phase noise driving spurious electronic state ﬂips.
The phase coherence of the entangled state may be analyzed by applying the bichromatic Mølmer-Sørensen beams until the |SS and |DD populations are equal. Then, a global π/2 rotation is applied with phase θ relative to the entangling interaction. After an electron shelving readout of both ions, the parity is analyzed (deﬁned in this case as P |SS = P |DD = 1, and P |SD = P |DS = 0). The parity is recorded as a function of the analysis pulse phase, and contrast c of the parity oscillations probes th-
e phase coherence of the

25

Figure 3.8: Mølmer-Sørensen gate interaction, showing spin ﬂipping between the states |SD (blue) and |DS (red). Gate errors-when the system is found in either |SS or |DD are shown in green. Each data point is the average of 100 experimental repetitions.

resulting state. The ﬁdelity to the Bell state can be measured as [58]

F = Φ|ρ|Φ 1
= 2 (PSS + PDD + c) ,

(3.31) (3.32)

where ρ is the (mixed) state produced by the laser-ion interaction. The interaction also works to induce oscillations between |SD ↔ |DS . A typical scan
is shown in Fig. 3.8. In that scan, the ion was ﬁrst prepared into the state |SD via a local π-pulse on one ion before the bichromatic laser pulse was turned on. The ions were measured in the {|SS , |SD , |DS , |DD } basis on a CCD camera.

Spin-motion entanglement
The ﬁnal interaction we need to discuss we will call the σzx interaction, generating entanglement between the electronic state of the ion and the motional state [38].
In a similar ﬂavor to the previous section, this interaction is generated by illuminating an ion with a bichromatic laser ﬁeld, having frequencies ω+ = ∆ + ν + δ and ω− = ∆ − ν, and δ ν. ν is the frequency of some vibrational mode.
Since the laser tones are far in frequency from any atomic resonance, this interaction can be considered a Raman transition on the motional state (see Figure 3.9), as the two tones are separated in frequency by ≈ ν. Therefore this interaction moves |n → |n ± 1 , suggesting that its eﬀective Hamiltonian on the motion is proportional to x = a + a†.

26

δ

|D, Ω1

0

Ω2

|S, 1 |S, 0

Figure 3.9: Sketch of the σzx interaction. On resonance (i.e. ν = 0), the interaction moves population in the motional state from |n → |n ± 1 , while keeping the electronic population
the same.

The basic laser-ion interaction can be determined from applying Eq. 3.12 twice (once for each laser tone). This yields:

H/ = Ω1 e−i(ν/2+δ+φ1)t + Ω2 ei(ν/2−φ2)t

2

2

× 1 + iη(ae−iνt + a†eiνt) σ+ + h.c.

(3.33)

Here, Omega1 (Ω2) and phi1 (φ2) are the carrier Rabi frequency and phases of the laser tone with frequency ω+ (ω−). The time evolution of the above laser-ion Hamiltonian can be directly integrated, leading to the eﬀective interaction

H=

ηΩ1 2ν

Ω2

σz

ae−iδt + a†eiδt

κ = 2 σz

ae−iδt + a†eiδt

.

(3.34) (3.35)

This Hamiltonian is an interaction-picture Hamiltonian, related to the laboratory reference frame by the transformation matrix

U =ei ∆t/2σz ei νta†a,

(3.36)

thus accounting for evolution from the “free” Hamiltonian H0 (Eq. 3.11). We could instead choose a diﬀerent interaction picture, in which the free Hamiltonian is

H0 =

∆ 2 σz +

(ν − δ)a†a).

With that choice of interaction picture, our eﬀective interaction would be written

(3.37)

κ H = 2 σz

a + a†

+

δa†a,

(3.38)

27

a form we will use in Chapter 7. This interaction generates a coherent displacement of the ion’s motional state dependent
on the electronic state, leading to entanglement of the electronic state with the ion motion if the motional state is pure. It is easiest to ﬁrst understand the case where the motion is prepared in ground state, and δ = 0. Then, under this interaction,

|S, 0 →|S, α(t) |D, 0 →|D, −α(t) ,

(3.39) (3.40)

where

α(t)

=

κt 2

.

In general, for all choices of δ, the time evolution operator is (up to an overall phase)

U = D(α(t))|S S| + D(−α(t))|D D|,

(3.41)

with

α(t)

=

κ 2δ

1 − eiδt . The ion’s motional wavepacket is split according to the the elec-

tronic state. The two branches of the wavepacket follow diﬀerent trajectories in phase space

but

rephase

at

time

2π δ

[38].

The dynamics can be probed with a Ramsey-style experiment on a single ion. First, a

π/2 pulse is applied to the electronic state (perhaps with detuning ∆), generating the super-

position state (|S + |D )/ (2). Then the bichromatic laser beams are applied generating

the Hamiltonian in Equation 3.38 for an interaction time τ . Finally, a second π/2 pulse is

applied to the electronic state, and the D-state probability is measured (i.e. |D D| ).

With the vibrational mode of interest prep√ared in the ground state of motion, the ﬁrst π/2 pulse generates the state (|S, 0 + |D, 0 )/ 2. With the√bichromatic beams turned on, this state evolves to the state (|S, α(τ ) + ei∆t|D, −α(τ ) )/ 2. The phase evolution ∆ is

due to the detuning of the Ramsey pulses from the carrier transition. The second π/2 pulse

yields:

1 |S, α(τ ) + |D, α(τ ) + ei∆τ |S, −α(τ ) − ei∆τ |D, −α(τ ) . 2 Measuring the expectation value of the projector PD = |D D| gives:

(3.42)

1

PD

= 4

α(τ )| − e−i∆τ −α(τ )|

|α(τ ) − ei∆τ |−α(τ )

1 =

2 − e−i∆τ −α(τ )|α(τ )

− ei∆τ α(τ )| − α(τ )

4

1 = (1

−

cos(∆τ )

α(τ )|

−

α(τ )

).

2

(3.43) (3.44) (3.45)

With the ion initially in the ground state of motion, the experiment is a probe of the overlap between the two branches of the ion’s wavefunction with opposite coherent displacements. If the vibrational mode is not initially in the ground state, but rather in a thermal state, the situation is somewhat more complicated. The time evolution operator is still the

28
Figure 3.10: D-state probability vs interaction time τ of a Ramsey-style experiment to probe the dynamics of the σzx interaction (details of the experiment in the main text). Top and bottom plots are for similar experimental parameters, except that the thermal occupation n¯ of the ion’s vibrational mode is varied. In the top plot, the motion is prepared near the ground state with n¯ = 0.5. In the bottom graph, the ion is left at the Doppler-cooled value of n¯ = 10. Solid lines are a ﬁt to a numeri-
cal simulation of the experiment where all Hamiltonian parameters are varied. Top: κ = 2π × 1.9 kHz, δ = 2π × 3.3 kHz, ∆ = 2π × 11.8 kHz. Bottom: κ = 2π × 1.6 kHz, δ = 2π × 3.3 kHz, ∆ = 2π × 12.0 kHz.
one described in Equation 3.41, but the displacement operators act on thermal states. An experimental comparison of these two situations is shown in Fig. 3.10. With the ion prepared near the ground state, the Ramsey signal oscillates at ∆, while slowly losing contrast as the two diﬀerent paths become more orthogonal. In the second case, the ion’s motion is prepared to a mean thermal occupation of n¯ = 10, and in that case the Ramsey signal is almost immediately dephased. This shows that small cohe-
rent displacements of a thermal Harmonic oscillator state yield a nearly orthogonal state. Contrast revivals occur when the motional wavepackets recombine (τ = 2π/δ), at a time independent of the motional state of the oscillator.

29
Chapter 4
Experimental setup
The experiments described in this thesis took place in diﬀerent trapping setups. The work in Chapter 5 and Sec. 6.3 took place in a microfabricated surface electrode trap. This experimental setup was built in part by the present author, as well as by Sankaranarayanan Selvarajan and Nikos Daniilidis. The work in Chapter 7 was carried out in a 3D Paul trap, designed and built by Thaned Pruttivarasin and Michael Ramm, and the experimental details for that trap are discussed in their PhD theses.
This Chapter is organized as follows: Secs. 4.1 and 4.2 cover laser and imaging setups which are general to all experiments in the laboratory. Following that are details of the microfabricated trap setup and vacuum chamber (Secs. 4.3 and 4.5). Finally, we discuss experimental improvements to the 3D trap setup, namely the optical layout to implement laser-based quantum gates (Sec. 4.6) and an active feedback loop to stabilize radial trap frequencies (Sec. 4.7).
4.1 Injection locked laser
The performance of high-ﬁdelity quantum operations on an optical qubit requires a narrowlinewidth laser locked to a high-ﬁnesse optical cavity. In our case, this is a Toptica DL-Pro laser system, locked to a 10 kHz linewidth cavity from Stable Laser Systems (see [51] for details on this system).
However, the locking process itself generates undesirable features in the frequency spectrum of the laser known as servo bumps. These features result from the laser locking electronics. Essentially, the locking electronics contains contains a low-frequency (less than about 1-2 MHz) control loop with high gain for narrowing the laser linewidth. For noise with low enough frequency, the low frequency control loop operates the laser current and piezoelectric control element in the correct direction to-
 compensate the noise. However, noise around the maximum frequency of the control loop is “corrected” with the wrong phase, in eﬀect amplifying noise. This gives rise to bumps in the laser frequency spectrum, shown in Fig. 4.2.

30
Figure 4.1: Optical layout for the 729 nm laser beams in the laser room. Image made using ComponentLibrary[20].
The servo bumps, around 750 kHz in our case, are located near the motional frequencies of our ions. This means that if the laser is used to address the motional sidebands, the servo bumps will be near the carrier transition, and can cause undesirable spin ﬂips, leading to decoherence.
To put these numbers in context, since our servo bumps are measured to be about 25 dB below the main carrier, the power in each bump is roughly 0.3% of the total laser power. Therefore, if the central peak of the laser will drive carri√er Rabi oscillations with frequency Ω, one of the servo bumps will have a Rabi frequency of 0.003Ω ≈ 0.05Ω. For our system, η ≈ 0.05 for all of the modes, and therefore the rate of excitation due to the servo bumps can approach the motional sideband Rabi frequency η-
Ω if the bump is located directly on the carrier.
In order to remove these bumps, we use a method suggested by the Ozeri group [2]. We use the light transmitted through the locking cavity itself as a seed for an injection locked laser diode (Fig. 4.1). This scheme is eﬀective because the locking cavity has a linewidth of about 10 kHz, and therefore the servo bumps should be heavily suppressed in the transmitted

31
Figure 4.2: Beat signal between laser light from the Toptica DL-PRO, and light transmitted through the locking cavity. The transmitted light is ﬁrst used to inject a laser diode, amplifying it to 30 mW. The transmitted light is sent through an 80 MHz AOM, and then combined on a beamsplitter with the beam from the DL-PRO, and directed on a photodiode. The output of the photodiode is measured on a spectrum analyzer. A narrow peak is seen at the center of the scan–this is where most of the laser powe-
r is concentrated. About 25 dB below the main peak, and 750 kHz away, are the broader servo bumps.
light. Given suﬃcient seed power, an injection lock can be quite easy to achieve. Essentially,
the process works by injecting a seed laser beam with wavelength λs into the laser diode. If the free-running wavelength of the diode is close enough to λs, the diode will “lock”, and begin lasing at λs with the full output power of the diode. In practice, this is accomplished by combining the seed beam with the output of the laser diode on the rejected port of an optical isolator. A cylindrical telescope is also used to match the spatial mode of the seed light to the laser diode. The current and -
temperature of the laser diode is adjusted to make its free-running output as close as possible to the desired frequency.
With about 250 µW of incoming power to the locking cavity, we obtain about 30 µW of transmitted power. At these low seed powers, we found it quite diﬃcult to maintain an injection lock with high output power (30 mW)–we speculate that for high output powers, the injection interval– the current interval (Imin, Imax) in which the diode will lock to the seed–is quite narrow and small changes in the operating temperature or seed power will cause the diode to fall out of lock. We found it much easier to-
 implement the scheme in two stages: ﬁrst, the output of the cavity seeds an “intermediate” diode with about 1 mW of output power. This lock is found to be quite stable, and typically does not require adjustment throughout the day.
The output of the “intermediate” diode is then used to seed the slave diode, which produces an output power of about 30 mW. When seeded with the larger power from the

32
intermediate diode, this lock is also maintained throughout the day. We have found the most reliable way to monitor the status of both the intermediate and
slave injection-locked diodes is to perform a beat measurement. Part of the output of the intermediate diode is sent through an AOM at 80 MHz. The AOM output is then combined on a beamsplitter with the output of the slave diode, and the combined beam is measured on a photodiode. Since the two beams are oﬀset in frequency by 80 MHz, an 80 MHz beat note is measured on a spectrum analyzer. Any additional frequencies in either beam are detected as sidebands around this beat frequency, and the spectral-
 purity of this signal is a good test for whether the injection lock current in either the intermediate or slave diodes needs adjustment.
4.2 Lasers and imaging
All lasers used in the experiments are operated in a separate room (the Laser Room), from the room in which the experiment is running. The light is brought to the experimental optical table by 20 meter optical ﬁbers. This strategy has the strong advantage that the lasers are considerably more stable than if they were in a more highly traﬃcked location.
The lasers in use in this experiment are all diode lasers. The 397 nm, 866 nm, and 854 nm lasers are locked to temperature controlled reference cavities. The cavity length can be controlled by biasing a piezo attached to one of the cavity mirrors, thereby controlling the laser frequency. The photoionization lasers are free-running. The 729 nm laser is locked to a high ﬁnesse optical cavity (linewidth on the order of 10 kHz) provided by Stable Laser Systems. The entire system is discussed in more d-
etail in [51].
The photoionization laser light arrives on the optical table from the laser room and are then overlapped with the 397 nm laser for Doppler cooling before being delivered to the ion trap over a short ﬁber.
The Doppler cooling and repump light are amplitude and frequency controlled by double pass AOMs. These are driven by DDS frequency sources, which are operated by an FPGA (the “pulser”). This system allows both manual control of the laser frequencies as well as the operation during a pulse sequence. This system was developed by Thaned Pruttivarasin, and discussed in his thesis [51].
The imaging setup is shown in Figure 4.3. The ion ﬂuorescence (397 nm) is collected with an objective lens and focused onto a photomultiplier tube and a CCD camera for ion state detection.
An elegant feature of this imaging setup is the insertion of a dichroic mirror in the optical path which transmits blue light and reﬂects red light. This allows the 729 nm to be addressed to individual ions by overlapping the laser light with the imaging path.

33
Figure 4.3: Sketch of the imaging system. Image made using ComponentLibrary [20].
4.3 Vacuum system and trap
The experimental system discussed in this chapter centers around microfabricated surfaceelectrode Paul trap. The trap is mounted in a vacuum chamber1 which is held at the ultra-high vacuum (UHV) pressure of around 10−11 torr. The vacuum apparatus is sketched in Figure 4.4.
Low vacuum pressure is achieved via a combination of methods. All components in the vacuum chamber are meticulously cleaned using isopropanol, acetone, and de-ionized water. The materials are also carefully chosen to have low outgassing rates. After assembly, the chamber is ﬁrst pumped down to a pressure around 10−8 torr via a turbo pump. It is then baked at 150◦C for about 2 weeks while connected to the turbo pump. This baking process removes water as well as heavy hydrocarbons such as hand oils -
from the chamber and continues until the pressure no longer improves as measured on a residual gas analyzer (RGA). After baking, a titanium-sublimation pump (TiSub) is ﬁred several times, which has the eﬀect of absorbing hydrogen in the chamber, which has a low pumping cross section through the turbo pump. Finally, an ion pump is turned on which brings the vacuum pressure down to the ﬁnal value.
1Kimball 8” octagon

34
Figure 4.4: Top view diagram of the vacuum chamber plus laser beam paths for the surface trap apparatus. A titanium sublimation pump is not shown because it would appear below the ion pump. The 375 and 422 nm laser beams are for photoionizing neutral calcium produced by the oven. An additional 729 nm beam hitting the trap from the top is also not shown. DC voltages are applied to the trap via the DSUB.
The trap itself is epoxied to a ceramic leadless chip carrier (CLCC) (Figure 4.6). The rf and dc electrodes on the trap are wire bonded to bonding pads on the CLCC. The CLCC is mounted in a ceramic socket machined by Qualmax, with electrical connection between the bonding pads on the CLCC and the socket. The socket sits on an in-vacuum ﬁlterboard (Figure 4.5), and is electrically connected to the ﬁlterboard via Fuzz Buttons, manufactured by Custom Interconnects.
All electrical connections (rf and dc) from outside the chamber to the trap go through the in-vacuum ﬁlterboard. These connections are made via copper wires running from electrical feedthroughs to soldering points on the ﬁlterboard. The DC lines on the ﬁlterboard are ﬁltered with low-pass ﬁlters to reduce electrical noise on the trap electrodes 2.
2AVX X7R 47nF; Part No. W3H15C4738AT1F, with a measured cutoﬀ frequency of 300 kHz

35
Figure 4.5: Schematic of the in-vacuum ﬁlterboard on which the trap is mounted. The dc lines are ﬁltered with monolithic low-pass ﬁlters with a low-frequency cutoﬀ of 300 kHz. The socket is mounted on the reverse side of the board, and sits approximately on the orange dashed square. The dc and rf connections from outside the chamber arrive from copper wires soldered onto the ﬁlterboard. The board is made from alumina to minimize rf losses in the dielectric. The solder is lead-free and ﬂux-free so -
as to have favorable outgassing properties and has the chemical composition Sn 96.5%, Ag 3%, Cu 0.5%.
4.4 DC electronics
This section pertains only to Chapter 5 and Sec. 6.3. However, the system described here is currently in use in all the surface-trap experiments in the lab.
For controlling the voltages on the dc electrodes for the trap, we use a multi-stage system sketched in Figure 4.7.
Voltage sets are speciﬁed by a computer which communicates via USB to a ﬁeld-programmablegate-array (FPGA)3 called the controller board. The computer writes instructions to the controller board in the form of write (BITSTRING) to DAC (number) in voltage set (number) where BITSTRING is a 16-bit binary string encoding the desired output voltage. The voltages on the DAC board will be immediately updated if the voltage set-number is zero, but sets of voltages can also be stored in the DAC board. The D-
AC board advances through stored voltage sets on a TTL trigger.
3Opal Kelly XEM3001

36 Figure 4.6: Trap-holding CLCC and socket. Figure 4.7: Schematic overview of the dc electrode control system.

37
In order to prevent ground loops, as well as to electrically isolate the trap voltages from the (electrically noisy) computer, the controller board communicates with the DAC board over ﬁber optic cables.
The DAC board functionally consists of three main components: power supplies, DAC chips4, and FPGAs5 for receiving voltage sets from the controller and writing serial bitstrings to the DAC chips themselves. The on-board FPGA receives instructions from the controller board via the ﬁber-optic connections.
The DAC voltages are ampliﬁed with a gain of 4 by low noise operational ampliﬁers6. Coupled with the ampliﬁers, each dc electrode is controllable to ±40 V with 16 bits of precision.
The trap electrodes are electrically connected outside the vacuum chamber through a DSUB feedthrough. Immediately before the feedthrough, each DC channel is ﬁltered with a dual stage RC ﬁlter7 to mitigate electrical noise near the ion motional frequencies.
4.5 Radio-frequency electronics
For reasonable experimental parameters, one needs to apply around 100 V of rf amplitude at a frequency near 30 MHz. The electrical load of the trap and associated circuitry (feedthrough, CLCC, etc.), is primarily capacitive with approximately 30 pF of capacitance. It is infeasible to drive this electrical load directly with a 50Ω output due to both reﬂections as well as the large power required.
Instead, we use a quarter-wave helical coil resonator to match the impedance between the driving circuit and the trap (Figure 4.8). This resonator consists of a copper coil mounted inside a copper tube, with one end of the coil grounded to the tube. The inductance of the coil, coupled with the self capacitance of the coil, the capacitance of the coil to the tube, and the parallel capacitance of the trap together form an LC resonator. By tuning the number of turns in the coil, the resonance frequen-
cy of the circuit can be selected. Using this method, we are able to apply the needed voltage for trapping with less than 1 W of input power.
The rf signal is generated by a Rhode and Schwarz signal generator, and then ampliﬁed by a 5W MiniCircuits rf ampliﬁer.
The resonator is excited inductively through the use of an antenna coil, following [64]. This allows the trap ground to be electrically isolated at low frequencies from the ampliﬁer and signal generator, preventing ground loops.
The output of the coil may be dc biased over a capacitor (Fig. 4.8). From the perspective of the ion, this adds a dc potential in addition to the rf pseudopotential. This can be used to increase trap depth, lift the degeneracy between the ion radial frequencies, as well as
4Analog Devices AD600 5Altera Cyclone II 6Texas Instruments OPA445 7R = 1 kΩ, C = 100 nF, giving a ﬁlter cutoﬀ of 1.6 kHz

38
Figure 4.8: Resonator plus dc-biasing circuit. The resonator is inductively excited via the antenna coil (gold), which is connected to the resonator can by a ground-isolated BNC. The antenna coil is driven by a Rhode and Schwarz rf signal generator. The input impedance of the resonator is matched to 50Ω by adjusting the position and number of turns of the antenna. The output of the rf resonator may be dc-biased by applying a dc voltage where indicated. The dc voltage is low-pass ﬁltered both to su-
ppress noise from the voltage source as well as to prevent rf currents from ﬂowing into the voltage source, potentially causing dc voltage instabilities. The resistor and capacitor values are R = 1 kΩ and C = 100 nF giving a cutoﬀ frequency of 1.5 kHz. The output leads of the resonator are soldered directly to the rf feedthrough on the vacuum chamber, which connect to the trap rf electrodes and ground plane. to rotate the normal mode orientation of the trap into alignment with the rf quadrupole di-
rection.
4.6 Optical layout for laser-based gates
The most complicated optical setup we use is for the 729 nm laser. This setup is designed to accommodate several needs. First, it is useful to have two independently controllable beams

39
Figure 4.9: Optical layout for the 729 nm laser beams on the experimental table. Image made using ComponentLibrary [20].
(e.g. for addressing diﬀerent ions in a chain, or the same ion from diﬀerent directions). Secondly, for generating quantum gates such as those described in Sec. 3.6, it is necessary imprint two frequencies on the laser beam.
In our system, the laser light from laser room is split into two functionally identical paths. In each path, the frequency, phase, and amplitude of the laser beam is set by a double pass AOM (near 220 MHz), controlled by the pulser.
After the double pass, the beam goes through a single pass AOM (center frequency 80 MHz). The single pass is operated in a somewhat complicated way. Each single pass AOM requires three DDS frequency sources which run in a continuous-wave (CW) mode with a pre-programmed frequency (i.e., programmed before the pulse sequence begins). Two of the frequency sources are combined on a power splitter, the output of which is a bichromatic rf signal. The bichromatic signal is combined on a MiniCircuits rf sw-
itch with a third frequency source running at 80 MHz. The rf switch is TTL controllable, which switches the AOM between monochromatic and bichromatic operation. However, full rf power is always arriving at the AOM, and therefore in order to turn oﬀ the laser beam going to the ion, the double pass must be switched oﬀ.
In order to compensate the ∼ -80 MHz frequency shift due to the single pass AOMs, an additional AOM is placed in the laser room and driven with a Rhode and Schwarz signal generator at 80 MHz. This AOM is additionally used to dynamically stabilize the power arriving at the laser table, and in the future can also be used for ﬁber noise cancellation.

40
Figure 4.10: rf circuit and feedback elements for the 3D trap. The out of phase outputs of the resonator (in orange box) are measured on capacitive dividers labeled mon1 and mon2. The diﬀerence voltage between mon1 and mon2 is rectiﬁed and subtracted from a setpoint, producing the quasi-DC signal Verr. A PID feeds back to the signal generator modulation input to stabilize Verr to zero.
4.7 Radio-frequency amplitude stabilizer
For the quantum simulation experiments discussed in Chapter 7, it was necessary to achieve radial frequency stabilities of better than 500 Hz. As the ion radial frequencies depend on the rf amplitude arriving at the trap, ﬂuctuations in the rf amplitude result in trap frequency ﬂuctuations. With a free-running resonator, the trap frequency has long-term drifts, due in part to temperature changes in the ampliﬁer, and short-term ﬂuctuations due to a number of eﬀects such as mechanical vibrations of -
the resonator, or changes in the resonator’s natural frequency due to people moving around the experimental apparatus. Without active stabilization, the ion’s radial frequencies move around by several kHz on both short (seconds to minutes) and long (hours) timescales.
These electronics were developed speciﬁcally for the 3D trap, which uses a diﬀerent kind of resonator than the one discussed in Sec. 4.5. In this case, the resonator is a half wave resonator which is excited in the center of the coil. The rf electrodes on the trap are driven 180◦ out of phase. See [51] for details. The system, including feedback electronics, is shown schematically in Fig. 4.10.
Our approach is to directly measure the rf amplitude via a rectiﬁer, and use a PID controller to feedback on the input power to the resonator. The rf amplitude is measured on both outputs of the resonator by a capacitive divider which prevents the measurement circuit from excessively loading the resonator. The two capacitive divider outputs are labeled “mon1” and “mon2”. The rectiﬁer (box labeled “rectiﬁer” in Fig. 4.10, developed mainly by Eli Megidish and Soenke Moller, actually consists of two -
functional components. First, the input signal is passively rectiﬁed to a DC amplitude with high-frequency diodes. The

41
Figure 4.11: Measured radial trap frequency vs. rf detector error signal. Line is a ﬁt showing a sensitivity of 352 Hz/mV.
rectiﬁed signal is then subtracted from a setpoint so that the DC output of the rectiﬁer circuit is actually an error signal Verr. A PID controller stabilizes Verr to zero by feeding back to the amplitude modulation of the signal generator. A similar approach was recently demonstrated by the Monroe group [37].
The sensitivity of the detection circuit is characterized in Fig. 4.11. By disabling the feedback, we varied the rf generator power around the operating point and measured both the radial frequency of a trapped ion as well as the error signal Verr produced by the the rectiﬁer circuit. The measured sensitivity is 352 Hz/mV. At the moment, we aim for longterm trap frequency stability on the order of 200 Hz, and therefore the error signal must be stabilized to about 1 mV. Experience suggests that it -
is probably reasonable to reach error signal stabilities somewhere in the range of 100 µV–roughly suggesting that this method can be expected to achieve trap frequency stabilities on the order of 35 Hz out of 2 MHz. Of course, achieving this level of stability on very long (hours) timescales would be quite challenging, due to temperature sensitivity of the capacitive divider and rectiﬁer circuits, as well as long-term drifts of the voltage reference.
The trap frequency stability is measured by a pulsed-excitation experiment, described in Section 3.6. The trap frequency stability is probed in two ways. The ﬁrst way is spectroscopically (See Fig. 4.12). In such a measurement, the ion is Doppler cooled, and a coherent displacement is applied to the motion. The coherent displacement arises from a train of 397 nm laser pulses with a repetition rate fex near the trap frequency, producing a modulated radiation pressure force (see Sec. 3.6). After thi-
s, a 729 nm laser pulse is applied to the blue motional sideband, followed by electron shelving readout probing the D-state excitation probability. The duration of the 729 nm laser pulse must be signiﬁcantly shorter than 1/(ηOmega), so that when the oscillator is not displaced, the D-state excitation probability

42
rep. rate ∼ ν
397
729
time
Figure 4.12: Schematic pulse sequence for trap frequency measurement. A pulse train of 397 nm light has a repetition rate near the ion’s motional frequency, eﬀecting a coherent displacement of the ion’s motion. After the pulse train, a 729 nm pulse is applied to the blue sideband, followed by electron shelving readout. When the repetition rate is resonant to the trap frequency, the sideband Rabi frequency increases dramatically, causing a peak in the D-state population after readout.
is small. When the pulse-train repetition rate is resonant to the motional frequency, however, the sideband Rabi frequency increases, causing the excitation probability to also increase. Repeating this measurement for diﬀerent values of fex shows an excitation peak near the motional frequency. Repeating this measurement over the course of tens of minutes monitors long timescale changes in the vibrational frequency. The result of such a measurement is shown in Fig. 4.13.
The second measurement is Ramsey-style probe to measure short-term coherence (See Fig 4.14). This method is similar to the previous spectroscopic measurement except two pulse trains are applied, separated by an interrogation time τ . The repetition rate fex is detuned slightly (about 2 kHz) from the radial trap frequency (2π × 2.1 MHz). As long as the ion’s phase evolution is phase-coherent over the time τ , the resulting displacement amplitude will oscillate sinusoidally as the phase between the -
ion’s motion and the repetition rate evolves. However, as the phase of the ion’s motion becomes randomized due to trap frequency ﬂuctuations, the oscillations dephase. The damping time of the oscillatory signal (Fig. 4.15) measures the phase coherence time of the ion motion. A theoretical treatment of how trap frequency ﬂuctuations appear in this measurement is given in Sec. 6.1.

43

Figure 4.13: Left: D-state excitation probability as a function of the coherent excitation frequency. It is strongly peaked when the coherent excitation is resonant. In this case, the radial frequency was about 2π × 2.6 MHz. Right: A compilation of spectral measurements taken over an hour. We see a slow drift of at most 500 Hz in the ion’s radial frequency over this period.

397

τ

729
time
Figure 4.14: Ramsey-style probe for motional coherence. Two pulse trains of 397 nm light, each eﬀecting a coherent motional displacement, are separated by an interrogation time τ . After the two displacement operations, a 729 nm laser pulse is applied to the blue sideband, followed by electron shelving state readout.

44
Figure 4.15: Short-term coherence probe of the ion’s radial motion. The coherence is measured by a Ramsey-style coherent displacement measurement (described in the main text). The x-axis is the Ramsey interrogation time, in ms. The red line is a ﬁt of the data to a cosine with a decaying exponential, with a decay time constant about 5 ms. This measurement shows that with the stabilizer running, the phase coherence of the ion’s motion is preserved on this timescale.

45
Chapter 5
Parametric coupling
5.1 Introduction
This work describes experimental work ﬁrst published in Ref. [23] and closely follows that treatment.
A single trapped ion oscillates with three normal vibrational frequencies. Each diﬀerent mode of oscillation corresponds to a displacement of the ion along a particular vector that I will call the mode vector.
In order to do perform many useful operations involving spin-motion coupling–such as sideband cooling, temperature measurement, or even quantum gates, it is necessary for the laser to have substantial projection onto the mode vector. In general, the coupling strength of the laser to the spin-motion transitions is proportional to cos(θ), and θ is the angle between the laser wave-vector and the mode vector (see Sec. 3.3). The need for the laser wave-vector to have appreciable projection onto the mod-
e of interest imposes substantial experimental constraints regarding optical access. For instance, in a surface trap, it may be the case that a particular mode vector is oriented nearly vertically with respect to the trap surface. To avoid charging eﬀects [4], it may be desirable to avoid having laser light directly impinge on the trap surface. In order to avoid this, the laser must propagate nearly parallel to the trap and one is then limited to a quite small overlap between the wave vector and t-
he mode vector–making it diﬃcult to interrogate this mode.
This problem may be partially overcome by rotating the normal modes such that the laser has signiﬁcant projection onto each mode. However, this itself constrains the design of the trap electrodes so that the number and shape of the electrodes is suﬃcient to perform the desired rotation.
In this Chapter, I describe a parametric coupling scheme which evades these requirements. This scheme allows experimental access to any vibrational mode of a single ion without direct optical interaction. This is done by applying an oscillating voltage to trap electrodes such that the associated ﬁeld at the trapping position features a spatial variation enabling the coupling. Tuning the oscillation frequency resonant to the frequency diﬀerence

46

between two modes causes the modes to exchange energy. This allows optical interrogation of an inaccessible mode by ﬁrst coupling it to another, optically accessible mode. A similar technique has been demonstrated in Penning traps[72, 12].

5.2 Theory of interaction

Under consideration is an ion with charge q and mass m, conﬁned in a linear surface electrode rf Paul trap. In such a trap, an oscillating voltage with frequency in the range of 2π×30 MHz will be applied to two electrodes (labeled “RF” in Fig. 5.1) providing two-dimensional conﬁnement along the x and y axes with pseudopotential frequencies ωx and ωy. In this case the rf pseudopotential generates no conﬁnement in a third direction, z. The conﬁnement in the z direction is the result of a dc potentia-
l which is quadratically varying in space, giving the ion a third motional frequency ωz.

C
135 μm

z
B yx

A

RF

RF

Figure 5.1: Illustration of the surface trap where the ion’s position is represented by the black dot. When the experiment is operated in the xz coupling conﬁguration, the rf parametric drive is applied to the electrodes labeled A and B (blue diagonal shading). When operated in the xy coupling conﬁguration, the drive is applied to the electrode labeled C (red horizontal shading). Figure ﬁrst published in [23].

Working in the aforementioned approximation, we consider a harmonically conﬁned ion with motional frequencies ωi, i ∈ {x, y, z}. The interaction energy created when a voltage u is applied to a nearby coupling electrode is qphi(r)u. φ(r) is the dimensionless spatial proﬁle of the potential at the trapping position due to the coupling electrode. To enable the mode-mode coupling, we modulate the voltage on a set of electrodes whose spatial proﬁle mixes two of the ion’s normal vibrational modes.

47

Then the Hamiltonian governing the motion is H = Hosc+qφ(r)u, with Hosc = i ωia†i ai being the harmonic oscillator Hamiltonian and ai (a†i ) is the annihilation (creation) operator for mode i. To achieve mode-mode coupling, we apply an oscillating radio-frequency (rf)
voltage on a judiciously chosen set of coupling electrodes such that u = u0 cos (ωpt). If ωp = ωi − ωj, the diﬀerence frequency between modes i and j, a parametric coupling emerges in the Hamiltonian.
To see the coupling explicitly, φ(r) is expanded to second order as φ(r) = φ(0) + i(ri/D1,i) + (1/2) i,j(±)(rirj)/Di2j. The D’s are the expansion coeﬃcients The linear terms create an electric ﬁeld at the ion position and present a driving force on the ion which
introduces a driven motion analogous to micro-motion. As we will show later, this additional
term does not alter the coupling dynamics and thus can be neglected if the set of coupling
electrodes are chosen such that the coupling dominates over this driving force. The terms proportional to ri2 modify the motional frequencies of the ion. If the modu-
lation frequency is near the resonance condition ωp ≈ 2ωi, these terms eﬀect a parametric ampliﬁcation of the energy in the ωi mode [46]. However, if ωp is far from this condition (as will be the case in our experiments), the modulation of the trap frequency contributes
only an overall phase to the ion’s spatial wavefunction. Finally, the cross terms proportional
to rirj are responsible for the parametric coupling with the drive frequency chosen to be ωi − ωj.
In the interaction picture, the Hamiltonian becomes

HI = qu0 cos(ωpt)
i,j
= qu0 cos(ωpt)
ij

rirj 2Di2j
ei(ωi+ωj)ta†i a4†jm+√eωi(iωωi−j Dωji)2jta†i aj + H.c.

= cos(ωpt)

gij ei(ωi+ωj)ta†i a†j + ei(ωi−ωj)ta†i aj + H.c.

ij

(5.1)

where H.c. indicates Hermitian conjugation. In the last line we have absorbed all the con-
stants except into the coupling constant gij. In general, we expect the rotating wave approximation (RWA) to be valid whenever gij ωi,j.
If ωp = ωi − ωj and applying the RWA, all the terms in the sum of Eq. 5.1 vanish except the one involving coupling oscillators i and j leading to

HI ≈ gij(aia†j + a†i aj) .

(5.2)

This is precisely the interaction we have sought to create: it will swap the quantum states

between oscillator modes i and j at a frequency gij. By applying the parametric drive for a

speciﬁc duration, we can controllably induce state swapping between any two modes of the

single ion oscillator.

When the parametric drive is operated on resonance, that is, ωp = ωi −ωj, the interaction

picture

Hamiltonian

is

diagonal

in

the

basis

of

two

modiﬁed

normal

modes

given

by

√1 2

(ai

±

48

aj). The modes are split in frequency by 2gij. If the drive is detuned by ∆ from the parametric resonance, the form of the interaction picture Hamiltonian changes. To treat this problem, it is easiest to transform to a particular interaction picture in which:

HI ≈

∆ 2

(a†i ai

−

a†j aj )

+

gij(aia†j + a†i aj) .

(5.3)

The eigenvalue splitting of this Hamiltonian is given by 2 gi2j + 4∆2. Thus, optical spectroscopy of the ion motion will show the bare resonance at ωi split into two lines as the parametric drive is operated near resonance. Varying both laser frequency and the parametric drive detuning will show a familiar avoided crossing behavior, providing a witness of the parametric interaction.

5.3 Experimental implementation
For the experiments, a single 40Ca+ ion is trapped about 100 µm above the surface of a micro fabricated surface electrode rf Paul trap, where sideband-cooling and analysis of the motional state is performed on the metastable 42S1/2 ↔ 32D5/2 transition, as discussed in Sec. 3.4. The ion has three motional modes, with axes nearly parallel to the Cartesian axes deﬁned in Fig. 5.1. The motional frequencies along these three axes are about (ωx, ωy, ωz) ≈ 2π × (2.6, 2.9, 1.0) MHz. Sideband cooling and s-
tate manipulation is accomplished with a laser in the x−z plane, with about 45◦ projection onto both the x and z axes. The projection of the wave-vector onto the y axis is 9◦, making the Y motional mode diﬃcult to analyze directly. Owing to the small coupling strength of the laser onto the Y mode, sideband cooling close to the ground state can only be performed on the X and Z modes.
Depending on which modes ought to be coupled, the ﬁeld needs to be applied to a set of electrodes maximizing the coupling term while keeping the linear terms suﬃciently small that the associated electric ﬁelds do not produce excessive heating of any modes. As discussed later in this Chapter, if the coupling ﬁeld is applied continuously, the electric ﬁelds eﬀect a coherent driving force on the ion motion. However, if the coupling ﬁeld is applied for a ﬁnite time, the driving force will have frequen-
cy components resonant to the ion’s motion, thereby directly adding energy to the ion’s motion.
Throughout this Chapter we use two conﬁgurations that couple either the X and Y modes or the X and Z modes. For the ﬁrst (xy) conﬁguration we simply apply the coupling voltage to the electrode marked C in Fig 5.1. In the case of the xz conﬁguration, driving a single electrode is not suﬃcient as it would result in excessive driving force on the ion. Therefore, we aim to apply voltages with ratio of 1:4 to electrodes A and B, which constitutes the optimal conﬁguration when being constrained to drivi-
ng two electrodes in phase.
Each experiment begins with with Doppler cooling on the 42S1/2 ↔ 42P1/2 transition and optical pumping into the ms = −1/2 state, followed by a ﬁxed length coherent excitation pulse and electron shelving state readout (Sec. 3.5). The Doppler cooling stage prepares the Z mode to a mean occupation of ≈ 20 vibrational quanta, and the X mode to ≈ 6 quanta.

49
The spectroscopy is carried out on the |L, mJ = |S, −1/2 → |D, −1/2 transition. The state of the motional mode i is probed by evaluating the strength of the sidebands of this transition detuned by ±ωi, as in Sec. 3.4.
The parametric interaction is studied in two ways. It is ﬁrst characterized by operating it in continuous-wave (CW) mode. In this mode, the drive is active throughout the experiments and the spectroscopic signatures of coupling are observed. It is also operated in pulsed mode where the coupling ﬁeld is switched on for a ﬁxed time after the initial state preparation giving access to the time dynamics of the coupling process.
Characterizing the interaction
The experimentally simplest way to investigate the parametric interaction is to ﬁrst operate it in CW mode near the parametric resonance condition. Then, laser spectroscopy near one of the secular sidebands (indexed by i or j) will show two Lorentzian lineshapes split in frequency space by 2 gi2j + 4∆2, where ∆ is the detuning of the parametric drive from the resonance condition.
Figure 5.2: Measured energy spectrum of the X radial sideband illustrating the avoided crossing as a function of the detuning of the parametric drive. The green rectangles represent the mean values of Lorentzian ﬁts to determine the frequency splitting. Figure ﬁrst published in [23].
By measuring the spectrum around the sideband transition for several drive frequencies ωp, the precise resonance frequency and the coupling strength can be determined from the avoided crossing as shown in Fig. 5.2. At parametric resonance, the line splitting features a minimum, and the coupling strength equals half the on-resonance splitting.

50

The coupling strength is limited by the maximum voltage that can be applied to the coupling electrodes which are heavily ﬁltered by in-vacuum low-pass ﬁlters to suppress heating from technical noise sources. Nevertheless, we have been able to achieve coupling frequencies approaching 2π × 10 kHz for both xz and xy coupling conﬁgurations.
The driven motion amplitude may be quantiﬁed by operating the parametric drive in a continuous-wave mode. Then, the oscillating electric ﬁeld at the ion position results in driven motion, analogous to the well-known micro-motion [73]. This driven motion causes the ion to experience a frequency modulated laser ﬁeld, redistributing the laser power in frequency space and reducing the laser power at the resonant frequency. This eﬀect gives rise to sidebands around the laser’s carrier frequency at inte-
ger multiples of the driven motion frequency. For a continuous wave coupling ﬁeld, the eﬀect is completely analogous to micromotion leading to a reduced coupling strength on the resonant optical transition which can be observed by a decrease in the Rabi frequency Ωc. As in the case of micro-motion, the optical transition can be driven by detuning the laser by an integer multiple n of the driving electric ﬁeld frequency. In that case, the transition strength is given by [6]

Ωc → |Jn(kA)|Ωc

(5.4)

for a given oscillation amplitude A along the laser propagation direction k and Jn being the n-th order Bessel function of the ﬁrst kind. We note that if the laser is not detuned, i.e. is on resonance with the optical transition, the coupling strength is reduced by J0(kA).
To measure this eﬀect, we apply a continuous drive (oﬀ resonant from all the motional modes and ﬁrst order parametric resonances) onto the coupling electrodes and measure the frequency of Rabi oscillations on the |L, mJ = |S, −1/2 → |D, −1/2 transition. From this, we can extract the driven motion amplitude as a function of the parametric drive amplitude from Eq. 5.4. Fig. [5.3]. shows the normalized Rabi frequencies on the carrier and the driven motion sideband as a function of the coupling streng-
th for the xz coupling conﬁguration where ωp = 2π × 1.7 MHz. This allows us to determine the ratio of driven motion amplitude to the coupling strength to be A/gxz = 497(8)nm/(2π × 1kHz).
In the xy conﬁguration, the drive is applied to an electrode directly beneath the ion so that most of the driven motion is in the direction orthogonal to the laser and therefore does not signiﬁcantly aﬀect the optical coupling strength.

Pulsed mode operation of the drive
In the remainder of this work, we will investigate parametric coupling in the pulsed mode. If the parametric drive is switched on and oﬀ rapidly, the micro-motion analogy of Eq. 5.4 no longer holds, and the unwanted electric ﬁeld can induce considerable oﬀ-resonant excitation in the oscillator modes, disturbing the coupling dynamics. However, this electric ﬁeld contribution to the total Hamiltonian has no notable inﬂuence on the coupling dynamics if it is switched on and oﬀ slowly enough, i.e. it -
is adiabatic. Here, the criterion for adiabaticity is to avoid oﬀ-resonant excitation of the oscillator mode itself. Experimentally, we shape the

51

Relative Rabi frequency Coupling strength (kHz)

1.2 1.0 0.8 0.6 0.4 0.2 0.0
0.0

2.0

1.5

1.0 1.0

1.2

1.4

1.6

1.8

Amplitude (V)

0.5

1.0

1.5

2.0

Coupling strength (kHz)

Figure 5.3: Relative Rabi frequency frequency on the carrier (blue squares) and driven motion sideband (red diamonds), compared to the unperturbed Rabi frequency on the unperturbed carrier, as a function of parametric coupling strength in the xz coupling conﬁguration. The solid lines represent ﬁtted Bessel functions of the ﬁrst kind. The inset illustrates the parametric coupling strength gxz as a function of drive voltage amplitude prior to the in-vacuum low pass ﬁlters. Figure ﬁrst published in [-
23].

coupling ﬁeld strength with a Blackman windowing function, which has proven to eﬀectively reduce oﬀ-resonant excitation in a two-level system [25, 55]. More precisely, the window for a pulse with duration T is described by

BT (t)

=

1

− 2

α

−

1 2

cos

t 2π
T

α

t

+ cos 4π

2

T

where α = 0.16. In order to facilitate the comparison to rectangular pulses, the coupling duration of a Blackman shaped pulse BT is deﬁned as the duration of a rectangular pulse Trect with the same pulse area so that T = Trect/0.42. Experimentally, using these pulses for the xz conﬁguration reduces the oﬀ-resonant excitation to less than 0.3 quanta for a reasonable coupling strength of several kHz.

5.4 Population swapping
The ﬁrst analysis in pulsed mode is to demonstrate that population can be exchanged between two motional modes. This will serve as an experimental deﬁnition of the exchange operation (SWAP), and form the cornerstone for the cooling and analysis techniques presented later. To facilitate optical analysis of both involved motional modes, we focus here on population swapping in the xz conﬁguration, but note that one can construct a SWAP operation between any two modes and show as an example swapping i-
n the xy conﬁguration.
To demonstrate population swapping, a single mode was sideband cooled close to its ground state. For the xz conﬁguration, the Z-mode was cooled, and for the xy conﬁguration,

52

X - mode

Excitation probability

a)
0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1 0.0
50

100

150

200

Coupling time (μs)

b)
0.6 0.4 0.2 0.0

Excitation probability

0.6

0.4

0.2

250

0.00

100

200

300

400

Coupling time (μs)

Y - mode

Figure 5.4: (a) Time evolution of the coupling dynamics illustrated by the excitation of the red sideband of the Z (blue circles) and X (red rectangles) mode. Initially, the Z mode is cooled close to its ground state at a mean phonon number of n¯z ≈ 0.2 while the X mode is left at the Doppler temperature of n¯x ≈ 6 quanta. After a coupling time of around 90 µs, the population of the two modes is swapped and thus the X mode is close to its ground state. Solid lines correspond to a numerical solutio-
n of the model with no free parameters. Note that the coupling time does not start at zero, because the Blackman shaped pulse is not adiabatic in this regime. (b) Red sideband excitation of the X (blue) and Y (red) modes. The X mode is initially cooled to a mean phonon number of n¯x ≈ 0.3. The out of phase oscillations between the X and Y red sideband excitations show population oscillating between the two modes. Figures ﬁrst published in [23]

the X mode was cooled, followed by a mode coupling pulse, applied for a variable time. The motional state after the coupling was probed on the red sideband of either mode on the |S, −1/2 → |D, −1/2 transition. As the mean phonon number in a given mode drops signiﬁcantly below one, the excitation probability is suppressed[73, 43]. The dynamics of the coupled systems are illustrated in Fig. 5.4 where the periodic oscillations of the excitation probability represent a hallmark feature of the coupling-
. It furthermore allows us to deﬁne a SWAP operation where the state of the two modes are completely exchanged at around 90 µs for xz coupling, and 50 µs for xy coupling. For the xz coupling conﬁguration, a Blackman shaped pulse needs to be used whereas for the xy conﬁguration a square pulse is suﬃcient to suppress oﬀ-resonant excitation.

53
5.5 Cooling without direct optical access
Application: Ground-state cooling
One useful application of this technique is cooling one of the ion’s vibrational modes without directly accessing the mode via a laser. The basic principle involves performing laser cooling on a single, laser-accessible mode (the primary mode), followed by population swapping to transfer energy from a secondary, non-cooled mode, into the primary mode. One implementation of this technique is to perform several cooling cycles on the primary mode, and to insert a SWAP operation between each cycle. Wi-
th the parametric interaction operated in this way, the primary mode provides a cold reservoir for the secondary mode. After each cycle of sideband cooling, the populations of the primary and secondary modes are swapped, eventually resulting in a state where both the primary and secondary modes are prepared close to their ground state. We call this method of cooling interleaved cooling, allowing us to prepare both modes close to their ground states. Interleaved cooling is particularly elegant for -
ground state preparation because it is insensitive to errors in the SWAP operation. Even a somewhat imperfect SWAP operation will transfer a large fraction of the population between the two modes mode, where the population in the primary mode is then removed by optical cooling. Repetition of this process several times leads to signiﬁcant reduction in the secondary mode population.
Interleaved cooling can prepare both modes close to their ground states when the total heating processes on both modes are slower than the cooling rate on the primary mode. However, even if this condition is not satisﬁed, it is still possible to prepare the secondary mode close to its ground state. Here, we take advantage of the SWAP operations that can be performed much faster than the typical cooling processes on optical transitions, as one is not limited by the relatively weak coupling of the l-
ight to the ion’s motion. Therefore, one can cool the primary mode and perform a single SWAP operation subsequently, resulting in a cool secondary but a hot primary mode. This method is applicable as long as the SWAP operation can be performed faster than any heating process on the secondary mode.
We have tested both of these cooling techniques, using the Z-mode as the primary and the X mode as the secondary mode. In the case of interleaved cooling, we performed eight cycles of sideband cooling with a SWAP operation between each, whereas for the single SWAP cooling, the Z-mode was cooled for 8 ms followed by a single SWAP. We tabulate the results detailed in Table 5.5, showing that both simultaneous ground state cooling by interleaved cooling, as well as single swap cooling are eﬀective tec-
hniques for cooling.
Application: Heating rate of an inaccessible mode
A second way to use the parametric interaction is to probe the thermal occupation of an optically inaccessible mode. As a demonstration, we measure the heating rate in a mode nearly orthogonal to the laser propagation direction.

54

Method

n¯z

n¯x

Interleaved 0.13(2) 0.31(5)

Single SWAP 7(5) .7(2)

Table 5.1: Cooling results for both interleaved and single SWAP cooling methods. The interleaved method is capable of preparing two motional modes of the ion close to the ground state, provided that the heating rate in both modes is suﬃciently low (see text). That the single SWAP method is somewhat less eﬀective than the interleaved method for ground state preparation reﬂects the method’s higher sensitivity to errors in the parametric resonance frequency and mode swapping time as compared to the i-
nterleaved scheme.

The heating rate on a single mode can be accurately determined by a process of cooling the mode to an average excitation much smaller than one vibrational quantum, and then probing the red and blue sideband excitation as a function of a variable waiting time after cooling[43]. However, this process relies on the ability to prepare the motional state to small mean phonon numbers, as well as optical access to the secular sidebands to read out the mode occupation.
In our experiment, the Y -mode lies nearly perpendicular to the plane of the trap, such that the projection of the laser onto this mode is about 9◦–too small to use sideband cooling directly on the mode. Thus, in order to prepare the mode to small thermal occupation, we performed sideband cooling on the X-mode and then a single SWAP operation to initialize the Y -mode to a mean thermal occupation of less than a single quantum. To determine the heating rate, we analyze the mode temperature as discu-
ssed above after a variable waiting time.
As the laser is not completely orthogonal to the Y -mode, the mode temperature can be analyzed directly on the secular sidebands corresponding to the Y secular sideband. However, this requires comparably long (exceeding 500 µs) optical excitation times, during which instabilities in the mode frequency cause systematic errors. Furthermore, the excitation time is not short compared to the heating processes, adding another systematic error. Therefore, a much cleaner approach is to again apply a SWAP -
operation between the X and Y modes to exchange their population.
In order to verify that the second SWAP operation works as expected, we performed a heating rate experiment using both of the above techniques, with the heating time varied between 0 and 2 ms. The results of these experiments are shown in Fig. 5.5. The measurement using the direct analysis of the sideband infers a heating rate of 650(270) quanta/s whereas the measurement employing two SWAP operations yields 810(80) quanta/s. The smaller uncertainty from temperature of the Y mode via the X mode reﬂ-
ects the fact that the Rabi frequency on the X red sideband is considerably faster than that of the Y mode. This renders the temperature measurement much less sensitive to instabilities in the radial motional frequencies due to the reduced Fourier bandwidth of the applied pulses.

55

Mean phonon number

4.0

3.5

3.0

2.5

2.0

1.5

1.0

0.5

0.00.0

0.5

1.0

1.5

2.0

2.5

Heating time (ms)

Figure 5.5: Mean phonon number as a function of heating time on the Y mode. The Y mode is prepared close to its ground state by cooling the X mode and swapping the motional states. Analysis of the motional state is either performed directly on the Y mode (blue squares) or by a second coupling operation and subsequent analysis on the X mode (red diamonds). The red line corresponds to a heating rate of 810(80) quanta/s, while the blue line corresponds to a heating rate of 650(270) quanta/s. Figure ﬁ-
rst published in [23]

56
Chapter 6
Surface noise studies
In quantum information processing, the shared motional degrees of freedom in an ion crystal are often used as a bus to facilitate entangling operations between ions. However, decoherence of the ion motion, induced by noisy electric ﬁelds at the ion position, limits the ﬁdelity of entangling operations.
These noisy electric ﬁelds can result from various sources, separated broadly into “technical noise” and “surface noise”. Technical noise, arguably the most prevalent type of electrical noise in ion traps refers to noise generated by electronic sources. For instance, the voltage sources used to apply DC voltages to the trap electrodes have some amount of intrinsic noise. In principle, technical noise can be reduced, for instance by better ﬁltering.
Another noise source is Johnson noise, which is believed to be a fundamental limit to the motional coherence of ion crystals. Johnson noise can result from both the ﬁnite resistance of the trap electrodes, as well as any resistance in the ﬁlter networks attached to the trap electrodes. Johnson noise arising from the ﬁltering electronics can be reduced by modifying the ﬁlter network, for this reason I consider this kind of Johnson noise to be a technical noise source. However, Johnson noise due to -
the ﬁnite resistance of the trap electrodes is an unavoidable and intrinsic property of surface electrode ion traps.
Surface noise, on the other hand, is believed to originate from properties of metallic surfaces near the trapped ion. It has been experimentally shown that treatment of an iontrap surface by Ar+-ion bombardment reduces the noise by up to two orders of magnitude [28, 13], strongly implicating the trap surface itself as a prominent noise source. However, the physical mechanism is unknown, and various theoretical models have been proposed in the literature, suggesting ﬂuctuating dipole sources [60, 5-
9], patch potentials [17, 45], or surface diﬀusion of adatoms [22, 73, 28]. This noise was unexpected in surface-trap experiments and is often known in the literature as “anomalous heating.”
All of these noise sources present fundamental challenges to the miniaturization of ion trap technology. If surface-electrode ion traps are to be made smaller, the ions must be trapped closer to the trap electrodes, becoming therefore more sensitive to electrical noise.
On the other hand, trapping an ion near metallic surfaces allows the ion to be used as a noise sensor, perhaps leading to clues about the origin and dynamics of surface noise eﬀects.

57

In this chapter, I discuss two experiments which studied surface noise eﬀects. In the ﬁrst, we studied the directional dependence of surface noise and demonstrated an experimental method for distinguishing surface noise from technical noise. In the second experiment, we were able to put a bound on the power spectral density of surface noise at very low frequencies (sub-100 Hz).

6.1 Eﬀects of electrical noise
Before proceeding with a discussion of noise measurements, it is important to establish the mechanisms through which any kind of electric ﬁeld noise aﬀects trapped ions.
The ﬁrst order eﬀect of noise is typically heating. Heating is the process by which the ion’s motion acquires energy due to ambient electric ﬁeld ﬂuctuations. This process requires the ﬂuctuations to have frequency components near one of the ion’s natural vibrational frequencies.
The second order eﬀect is dephasing. Dephasing describes the loss of phase coherence of the motional state, and in general does not require the oscillator to acquire energy. Small random ﬂuctuations of the ion’s motional frequency will eventually randomize the phase of the motion. I discuss each of these in turn.

Heating
The standard treatment of heating due to electrical noise is given by Turchette, et. al [69]. I summarize their derivation here, with a slight generalization.
In general, a charge harmonically conﬁned in three dimensions will oscillate in three normal modes with frequencies ωk. Each normal mode of oscillation features excursions along a particular axis eˆk. The mode vectors eˆk are subject to the orthogonality condition eˆiT · eˆj = δij. The heating rate (deﬁned as d a†a /dt) is the rate at which the oscillator mode acquires energy from the ambient noise processes. We will ﬁnd the quite reasonable result that heating rate into the ωk mode will depend on-
 the power spectrum of electric ﬁeld ﬂuctuations along the eˆk axis.
To prove this, it suﬃces to look at each mode individually. One begins with the assumption that the ion’s motion is governed by the following Hamiltonian:

H = H0 − qEk(t)xk

(6.1)

where H0 is the unperturbed harmonic oscillator Hamiltonian with characteristic frequency ωk and q is the charge of the ion. xk is the displacement of the ion along the eˆk axis, and Ek(t) is a random classical electric ﬁeld amplitude along the eˆk direction.
Assuming that the ion is initially prepared in the ground state, the rate of population ﬂow into the ﬁrst excited state (and therefore the heating rate) is given by ﬁrst-order perturbation

58

theory as:

1 Γk = 2

dτ eiωkτ Ek(t)Ek(t + τ ) | 0|qxk|1 2

(6.2)

q2π

= m

ωk SEk (ωk).

(6.3)

Here,

SEk (ω)

=

1 2π

∞ −∞

eiωt

Ek(t)Ek(0)

is the power spectral density of electric ﬁeld ﬂuc-

tuations. The form for heating rate diﬀers by some constant factors from that given by

Ref. [69]. This is due to a diﬀerence in the deﬁnition of power spectral density so as to make

the notation of this chapter internally consistent. This expression tells us that the heating

rate will be directly proportional to the noise power at the ion’s motional frequencies.

It will be convenient for later purposes to generalize Eq. 6.3 into a more vectorial form.

This is rather straightforward:

Γk

=

q2π m ωk SE(ωk)

·

eˆk.

(6.4)

Here, (SE)k = SEk deﬁned above.

Pure dephasing

Dephasing, in contrast to heating, involves the loss of phase information in the ion’s motion. In this section, I adapt a treatment from de Sousa [66], in which the response of qubits to magnetic ﬁeld noise is treated. I follow a semiclassical approach here, and suppose that the ion motion is governed by the following stochastic Hamiltonian:

H = ωma†a + η(t)a†a.

(6.5)

As in the previous subsection, ωm is unperturbed vibrational frequency of the ion. η(t) is a zero-mean, stationary stochastic process. The eﬀect of η is to dephase the oscillatory motion, and can be physically thought of as a small, randomly time-varying curvature added to the ion’s trapping potential. The time evolution operator associated with Eq. 6.5 is:

Uη(t) = e−ia†a(ωmt+Xη(t)),

(6.6)

where Xη(t) =

t 0

η(t

)dt

represents the total integrated phase acquired by the oscillator

due to the noise term. Since the speciﬁc noise trajectory η is unknown, the ﬁnal quantum

state of the oscillator is represented by a density operator ρ representing an average over all

possible trajectories.

In order to detect these frequency ﬂuctuations, we will consider an experiment ﬁrst dis-

cussed in Sec. 4.7. In this measurement, one vibrational mode of the ion is ﬁrst coherently

59

397

τ

729
time
Figure 6.1: Ramsey-style probe for motional coherence. Two pulse trains of 397 nm light, each eﬀecting a coherent motional displacement, are separated by an interrogation time τ . After the two displacement operations, a 729 nm laser pulse is applied to the blue sideband, followed by electron shelving state readout. Reproduced from Sec. 4.7 for convenience.

displaced by an amplitude α. This action is represented quantum-mechanically by the displacement operator [21]:

D(α) = eαa†−α∗a,

(6.7)

where a (a†) is the harmonic oscillator annihilation (creation) operator. After a waiting time τ , another displacement operation is performed, attempting to “undo” the ﬁrst displacement– a procedure very similar to a Ramsey experiment. After the second displacement, the amount of excitation left in the oscillator is probed. If the phase information in the ion’s motion would be perfectly preserved, the ﬁnal displacement amplitude would add coherently to the initial displacement. However, as the ph-
ase information is lost, the initial and ﬁnal displacements partially interfere destructively, resulting in a smaller ﬁnal displacement amplitude. If α is suﬃciently large, the procedure is insensitive to heating processes since the addition of a few vibrational quanta will hardly alter the phase of a large coherent state. The experiment is shown schematically in Fig. 6.1.
The experiment can be modeled by taking the initial quantum state of the mode to be ρ0 = |α α|, where |α = D(α)|0 , The ion then evolves under the time evolution in Eq. 6.6. Finally, a coherent displacement operation D(α) is applied, and the resulting amplitude is measured. This means we have to evaluate the following quantity:

a†a = pηTr a†aD†(α)Uη|α α|Uη†D(α)
η
= pηTr Uη†D(α)a†aD†(α)Uη|α α|
η
= pηTr (1 + α2)|α α| + αUη†(a + a†)Uη|α α| .
η

(6.8) (6.9) (6.10)

In the above, the sum is taken over all possible noise trajectories η, and pη is the probability to take the trajectory. Between the second and third lines, I applied the identity D(α)a†aD†(α) = (a† + α)(a + α)[21], taking α to be real.

60

Our goal is to use the time-dependence of a†a (τ ) to learn about ﬂuctuations in the resonant frequency of the ion. The ﬁrst term in Eq. 6.10 is just some constants and so will not contain any time dynamics. If there is any time-dependence to be found, it will occur in the second term. We will ignore the ﬁrst term and just concentrate on evaluating the second term. We only show explicitly one piece of the second term, as the other part works out analogously.

pηTr Uη†aUη |α α| = pηTr ei(ωmt+Xη(t))a†|α α|

η

η

=eiωmt pηeiXη(t)Tr a†|α α|
η

=eiωmt eiXη(t) Tr a†|α α| .

(6.11) (6.12) (6.13)

The result is that the ﬁnal measurement will be damped by the factor eiXη(t) . If the noise process η takes Gaussian-distributed amplitudes, Ref. [66] evaluates Eq. 6.13 to

with

eiXη (t)

= exp

−

∞

sin2(ωt/2)

0 Sη(ω) (ω/2)2 dω

,

1

Sη

= 2π

∞
eiωt η(t)η(0) dt.
−∞

(6.14) (6.15)

Here, Sη is the power spectrum of for the random variable η. It is worth pausing a moment to reﬂect on this result. We have described a simple
experiment to probe phase coherence in a mechanical oscillator. Furthermore, in Eq. 6.14 we have related the measurement result to the power spectrum of the noise. In Sec. 6.4, we will use the results of this experiment to study the frequency dynamics of surface noise.

6.2 A simple model of surface noise
A simple model of surface noise eﬀects in planar surface traps may be obtained by considering the surface noise source as a charge trapped to the surface. In the limit where the charge is trapped much closer to the surface than the ion-electrode distance, the charge, combined with its image charge below the metallic surface may be treated as a dipole. The same argument should extend to other “small” noise sources, e.g. ﬂuctuating patch potentials, as long as the ion-electrode distance is large as -
compared to some characteristic size of the noise source.
Our model relies on two fundamental assumptions: ﬁrst, that the dipole is oriented normally to the trap surface. This is true in the limit that the trap electrodes are made from a perfect conductor. A second assumption is that the noise sources are uncorrelated.

61

A third, relatively weak, assumption is that the trap surface may be treated as an inﬁnite plane.
Take the ion to be trapped at (x, y, z) = (0, d, 0). A dipole (magnitude p) located at some point on the surface will produce the electric potential

py

Φ

= 4π

0((x − xd)2

+ y2

+ (z

− zd)2)3/2

(6.16)

at the trapping position. Φ is expanded to second order around the trapping position as:

Φ≈ p 4π 0

3dxd r05

x

+

−2d2

+ x2d r05

+

zd2 (y

−

d)

+

3d(d2

− 4x2d 2r07

+

zd2) x2

+

3d(2d2

− 3(x2d 2r07

+

zd2)) (y

−

d)2

+

3xd(−4d2 + r07

x2d

+

zd2) x(y

−

d)

(6.17)

where r0 = d2 + x2d + zd2 is the ion-dipole distance. To save space, the z2, xz and yz terms are omitted as they are the same as the analogous terms above due to x − z symmetry.
For later convenience, I will name the various coeﬃcients in the previous equation:

Φ ≈ Exx + Eyy + Ezz + Qxxx2 + Qyy(y − d)2 + Qxyx(y − d) + . . .

(6.18)

The terms linear in space are the electric ﬁeld components, giving rise to heating processes. The terms quadratic in space modify the curvature of the potential seen by the ion, perturbing the vibrational frequency of the ion.

Electric ﬁeld ﬂuctuations

The heating rate into a mode is given by the power spectral density of the total electric ﬁeld ﬂuctuations. The easiest way to get this is to calculate the autocorrelation of the total electric ﬁeld, given as a sum over dipoles.
We only need to calculate each dipole’s autocorrelation as we assume each dipole is uncorrelated with any other dipoles. In the directions parallel to the plane of the trap (x and z):

Ex(t)Ex(0) =

3dxd 4π 0r05

2
p(t)p(0) dxddzd

3

= 128d4π

2 0

p(t)p(0)

= Ez(t)Ez(0) .

(6.19) (6.20) (6.21)

Here p(t)p(0) is the autocorrelation of the dipole moment magnitude for a single dipole. We expect no spatial dependence in this function so it is not included in the spatial integral.

62

Likewise, we can calculate this integral for the vertical direction:

Ey(t)Ey(0) =

−2d2 + x2d + zd2 4π 0r05

3

= 64d4π

2 0

p(t)p(0)

2
p(t)p(0) dxddzd

Putting each of these components into a vector gives:

(6.22) (6.23)

3

1

SE = 128π 20d4

p(t)p(0)

2 1

(6.24)

It is important to note that this model is purely geometric, and does not make predictions about the frequency dependence. The model does however make several speciﬁc predictions: ﬁrst that the heating rate due to surface eﬀects should scale as d−4 with d being the ionelectrode distance. This distance scaling is suspected from simple models, but not directly conﬁrmed in a planar trap geometry. This also predicts a slight polarization in the electric ﬁeld ﬂuctuations: the noise normal to the trap (-
y-direction) should be twice as large as the ﬂuctuations parallel to the trap. We investigate this polarization experimentally in Sec. 6.3 and Ref. [62].

Quadrupolar ﬂuctuations

Extending the analysis to the second order, we can also make some predictions about “pure dephasing” processes. Quadrupolar ﬂuctuations, or quadratic variations of the potential around the ion position, do not contribute to heating because the electric ﬁeld due to these terms is zero at the trapping location. These second order potentials do, however, change the curvature of the trapping potential experienced by the ion. A ﬂuctuating curvature will perturb the ion’s oscillation frequency and thus -
give rise to phase randomization, or dephasing, of the motion over some time.
The dipole model predicts a simple relationship between the power spectrum of quadrupolar potential ﬂuctuations and the power spectrum of electric ﬁeld ﬂuctuations. The autocorrelation integral works the same way as the electric ﬁeld in the previous section.

SQxx ≡

Qxx(t)Qxx(0)

=

3d(d2 − 4x2d + zd2) 4π 02r07

45

= 512π

20d6

p(t)p(0)

.

2
p(t)p(0) dxddzd

(6.25) (6.26)

Qxx is deﬁned in Eq. 6.18.

Therefore the model predicts SQxx

=

15 4d2

SEx

.

One interesting

result of this is that the quadrupolar ﬂuctuations should scale as d−6. This will impose a

limit to the miniaturization of ion traps for quantum information processing experiments. In

Ref. [67] and Sec. 6.4, we use the relationship between SE and SQ to make inferences about the dynamics of surface noise properties.

63
6.3 Experiment: Electric ﬁeld noise polarization
This Section describes work ﬁrst published in [62]. Heating eﬀects in trapped ions are due to the sum of all noise sources, whether the origin
is technical in nature or due to material properties of the trap surface. However, technical noise tends to be polarized in a diﬀerent orientation than surface noise. This provides an experimental method to determine if electric ﬁeld noise in a surface trap experiment is due to technical sources. For experiments in which a trapped ion is used to study surface noise speciﬁcally, ruling out technical noise is an important step. Even in experiments which do not aim to study surface eﬀects, it is usef-
ul to know if noise can be reduced by improving electronics.
In this work, we varied the orientation the vibrational modes of a single ion (see Fig. 6.2) to measure diﬀerent components of the vector quantity SE, the power spectrum of electric ﬁeld ﬂuctuations. In Sec. 6.2, we showed that for a simple phenomenological noise model involving dipole sources on a metallic surface that the magnitude of electric ﬁeld ﬂuctuations oriented normally to the surface are twice as large as ﬂuctuations parallel to the plane of the surface.
In fact, this prediction appears in other popular noise models as well. One such model to describe surface noise is ﬂuctuating patch potentials [17]. It is shown that in the limit of small patches [45] that the maximum degree of ﬁeld noise polarization is also two. In [62], we marginally extend Ref. [17] to show that the polarization R = 2 independent of the patch size. We quantify the polarization as R = SE · yˆ/SE · xˆ where yˆ is a unit vector normal to the trap plane and xˆ is a unit vector pa-
rallel to the trap plane.
Technical noise, by contrast, exhibits a polarization given by the electrode geometry. This is because technical sources by nature cause the voltage on the entire electrode to vary. For each electrode, the direction of the ﬁeld produced at the ion position is given entirely by the geometry, establishing the polarization.
The exact polarization expected from technical sources depends on how the noise is modeled. For our work, we consider two diﬀerent, yet reasonable, noise models: (i) a voltage independent model where the magnitude of the noise on all electrodes is equal and (ii) a voltage dependent model where the noise magnitude is proportional to the applied voltage. Model (i) describes Johnson noise originating from the ﬁlter electronics, and model (ii) could represent, for instance, references of the individua-
l digital to analog converters. For both models, we assume that the noise on diﬀerent electrodes is uncorrelated, i.e. there are no ﬁxed phase relation between the corresponding voltages.
The contribution of each electrode to the heating of the ion motion can be determined by evaluating the electric ﬁeld that a voltage on the electrode generates at the ion position. Since the noise is assumed to be uncorrelated between electrodes and the wavelength is much larger than the ion-surface distance, the total noise at the ion position is proportional to the sum of the squares of the electric ﬁelds of all electrodes, projected on the respective normal mode direction. For planar trap geome-
tries as shown in Fig. 6.2, the contribution from the

64
Figure 6.2: Schematic drawing of the asymmetric surface trap used in the experiments. The orientation of the 729 nm laser beams is shown. These beams are oriented so that both radial modes can be sideband cooled close to the motional ground state to enable heating rate measurements. The orientation of the radial modes is shown in the bottom ﬁgure. The mode vectors for these modes are rotated by a variable angle φ with respect to the trap geometry. The expected trapping height is 107 µm above the s-
urface. This ﬁgure is slightly modiﬁed from one appearing in Ref. [62]
center electrode, directly below the ion, dominates over all other electrodes. This eﬀect can be exploited to distinguish technical noise from surface noise in a planar ion trap.
This eﬀect is especially striking for the voltage independent noise model (i) in an asymmetric trap where the two RF rails have considerably diﬀerent widths as sketched in Fig. 6.2. This geometry leads to a trapping position which is not centered on the central electrode. Thus, the electric ﬁeld originating from the central electrode at the trapping position does not point perpendicular to the trap surface but rather at an angle φg. Since the noise is dominated by the central electrode, the noise -
is maximal if the mode axis is approximately aligned with φg. The noise contribution of the central electrode is about a factor of 60 larger than that of the electrode with the second largest contribution. For the voltage dependent noise model (ii) the angle of the maximum noise depends on the applied static voltages and needs to be analyzed for each particular set of voltages.
The noise polarization can be determined independently of the absolute noise magnitude by evaluating the ratio of the heating rates in two normal modes. The black solid line in Fig. 6.3 shows the expected ratio of the heating rate of the two radial modes for the voltage independent noise model, leading to a maximum ratio of Rindep ≈ 30.1, which can

65

30

Ratio of heating rates

20

10

0

−100

−50

0

50

100

Angle

Figure 6.3: Ratio of the predicted heating rates in the two radial modes for various noise models as a function of the radial mode rotation angle φ. The green dashed line corresponds to surface noise, the black solid line corresponds to the voltage independent noise model and the red dash-dotted line corresponds to the voltage dependent model.

be observed at an angle of φindep ≈ 17◦. For the voltage dependent noise level and the set of voltages used in our setup, the maximum ratio is Rdep ≈ 5.7 for an angle φdep ≈ 50◦.

Measurements

The polarization of the noise in an ion trap can be estimated by measuring the heating rates of the normal modes while rotating the mode orientation with respect to the trap surface by an angle φ (see Fig. 6.2). Since the noise is also frequency dependent, it is is important to perform all measurements at approximately the same mode frequency. Thus, it is beneﬁcial to use the two radial modes, as their frequencies are similar whereas the axial trap frequency is usually considerably smaller. We den-
ote the two normal radial modes and ↔, where the mode ↔ shows an angle φ with respect to the trap surface, and the two modes are perpendicular to each other. The heating rates for those two modes are given by

S = Smax cos(φ − φmax)2 + Smin sin(φ − φmax)2 S↔ = Smax sin(φ − φmax)2 + Smin cos(φ − φmax)2 ,

(6.27) (6.28)

where Smax,min is the maximum (minimum) noise amplitude and φmax is the angle where the maximum noise can be observed.
For this method it is required to rotate the radial trap modes without aﬀecting the mode frequency considerably. This can be achieved by altering the static conﬁnement. The voltages

66

on the trap electrodes are controlled by digital-to-analog converters (DACs) (See Sec. 4.4), and so the conﬁning potential may be modiﬁed by adjusting the electrode voltages. We adjust the voltages on the trap electrodes following the procedure described in Sec. 2.2. For these measurements, we generate potentials which are linear combinations of the multipole ﬁelds U1 = x2 − y2, U2 = z2 − x2 − y2, and U3 = x · y. The terms U1,3 allow control over the orientation of the radial trap axes. The multip-
oles U1 and U3 generate potentials with axes parallel to the trap surface or at 45◦, respectively. We apply a set of voltages which generate the potential C1U1 + C3U3. By choosing the coeﬃcients appropriately, the radial modes may be rotated by an arbitrary angle φ:

C1 = C cos(2φ) C3 = C sin(2φ)

(6.29) (6.30)

where C is the overall potential magnitude which has to be large enough to overcome symmetry breaking due to stray ﬁelds. The resulting potential including the conﬁnement in the axial direction is then:

U = C2(x2 + y2 − 2z2) + C1(x2 − y2) + C3(x · y) + URF

with C2 determining the strength of the axial conﬁnement. The RF potential URF and U2 have rotational symmetry around z and thus do not aﬀect the mode orientation.
In our surface trap, we are also able to rotate the radial trap axes by applying a static negative bias voltage onto the RF drive. This orients the trap axis of the higher frequency mode ( ) to φg, which corresponds to the orientation where one of the normal modes is aligned with the ﬁeld from the central electrode and hence close to the orientation of the maximum noise for voltage independent noise.
Experimentally, changing the trap axis by applying a static bias voltage onto the RF electrode is more reliable than controlling the multipoles of the trap potential, as no precise simulation of the trap potential is required and miscalibration of the voltage source does not change the axes orientation
In order to estimate the ratio R, the heating rates of both radial modes need to be measured. First, the radial mode of interest is sideband cooled (See Sec. 3.4) close to the ground state by whichever 729 nm beam has the stronger projection. After this state preparation, a variable waiting time τheat is applied, during which the mode heats up at some rate. After the waiting time, the thermal occupation n is measured spectroscopically following Sec. 3.4. Fitting n vs. τheat gives the heating rate.
We measured the heating rates in both modes while keeping the trap frequencies constant at 2.6 ± 0.1 MHz. Figure 6.4 shows the heating rate as a function of the normal mode angle. For all but the angle φg the axes are rotated by controlling the static multipole conﬁnement of all electrodes. For measuring at trap orientation with angle φg, a static bias voltage is applied to the rf electrodes.
Applying this bias voltage on the rf electrodes allows for the most reliable trap rotation and thus we will only use this method for quantitative analysis of the noise polarization.

67

Ratio of heating rates

50

40

30

20

10

0

−100

−50

0

50

100

Angle

Figure 6.4: Measured ratio of the heating rate in the two radial modes as a function of rotation angle φ. Red and blue diamonds are measurements without additional noise taken on diﬀerent days. Black crosses are measurements with additional noise on the central electrode. The green dashed line corresponds to surface noise whereas the black solid line corresponds to the technical noise model. This image is published in Ref. [62]
It is by coincidence that in our trap geometry, biasing the rf electrodes rotates the normal mode orientation to φg. For geometries in which this is not the case, care must be taken to ensure that the desired normal mode orientation is achieved. This can involve ensuring the individual DACs are well calibrated, or directly measuring the Lamb-Dicke parameter with a known laser orientation (see Sec. 3.3). We ﬁnd a ratio of heating rates in the two modes of R = 4.2(5) which is small compared to the r-
atio predicted by the voltage independent noise model of R ≈ 30.1. From this we can exclude the voltage independent technical noise model as the dominant noise source in our setup.
In order to exclude the voltage dependent noise model, we measure the heating rate for the mode for two diﬀerent sets of voltages providing an axial conﬁnement of approximately 1 MHz (for set i) and 707 kHz (for set ii) while keeping the radial trap frequencies constant. The voltages of the sets diﬀer by a factor of two and assuming the voltage noise to be proportional to the voltage, one would expect the heating rates to diﬀer by a factor of four as the heating rate scales with the power spectral-
 density of the noise. We measure a heating rate of n˙ = 0.69(6) quanta/ms for set i and n˙ = 0.52(3) quanta/ms for set ii, yielding a factor of 1.3(1) between the two heating rates. With this result we can exclude being dominated by noise that scales linearly with the applied voltage, as the model predicts a change in heating rate of a factor of four. A weaker scaling cannot be excluded completely but inferring a scaling factor would give no meaningful results due to large statistical uncertainti-
es.

68

We further test the method by adding voltage noise to only the central electrode with a white noise generator. This should lead to an increase of the heating rate in the mode parallel to the maximum noise direction, whereas the perpendicular mode should not be aﬀected. The experiments demonstrate this eﬀect: The heating rate in the perpendicular mode without adding noise is n˙ ↔ = 0.12(3) quanta/ms and with added noise n˙ ↔ = 0.15(3) quanta/ms. In contrast, the measured ratios are R = 4.2(5) witho-
ut adding noise and R = 34(9) with added noise. This indicates that we can align the trap axes with the electric ﬁeld generated by the center electrode (at angle φg) with adequate precision.

Conclusions

Because surface noise and technical noise are polarized in diﬀerent directions, we can use these measurements to estimate the amplitude of surface noise even in the presence of technical noise. First, we assume a surface noise model featuring a ratio of Rsurf = 2, as well as additional technical noise with an unknown ratio Rtechn. It is convenient to perform the measurement at angle φg as this angle can be set with highest precision. Assuming that surface and technical noise are not correlated, th-
e noise power spectral density is additive (the ﬁelds add in squares): Stot = (Ssurf + Stechn) with Stechn originating from voltage independent technical noise. The ratio of the heating rates between both axes is measured and thus it is possible to estimate the magnitude of the surface noise as

Ssurf ,↔

=

Stot,↔

Rtot − Rtechn Rsurf,φ − Rtechn

.

(6.31)

For the measured ratio Rtot = 4.2(5) and the expected ratio for patch potentials Rsurf,φ = Rsurf cos 2φ = 2 cos 2φ, this leads to Ssurf,↔ = 1.8(2) × 10−12(V/m)2/Hz. One needs to keep in mind that this noise amplitude is measured at the angle φg. The surface noise magnitude parallel to the trap surface (along the x-axis) is then

Ssurf ,x

=

Rsurf

Ssurf ,↔ sin(φ)2 +

cos(φ)2

=

1.7(2) × 10−12(V/m)2/Hz

.

(6.32)

It will always be possible to construct technical noise models which explain our results by carefully choosing the amplitudes and correlations of the various voltage supplies. However, those models seem rather contrived. Assuming a simple and realistic technical noise model and a surface noise caused by either surface dipoles or ﬂuctuating patch potentials, we can disentangle the contributions from technical noise and surface noise with high conﬁdence. From this we can conclude that technical nois-
e is irrelevant to the ﬁeld noise parallel to the trap surface, while its contribution in the vertical direction is comparable to surface noise. Using this method it will be possible to compare heating rates from diﬀerent traps, allowing a meta-analysis of diﬀerent experiments.

69
6.4 Experiment: Motional coherence of trapped ions
It is also possible to use single trapped ions to study dephasing processes (Sec. 6.1). This section concerns work ﬁrst published in Ref. [67]. For this experiment, theory and analysis was done by the present author, while the measurements were performed by Ishan Talukdar. The experiment was performed in a diﬀerent experimental setup than the work in the previous Section.
The purpose of this experiment was to study the motional coherence of ions as it pertains to quantum information processing experiments in surface traps. In particular, we were concerned by the possibility that low motional coherence times may limit the ﬁdelity of two-qubit entangling gates even when heating rates are quite low. Indeed, the simple noise model in Sec. 6.2 suggests that the heating rate should scale as d−4, while the rate of dephasing should scale as d−6, where d is, as usual, the i-
on-electrode distance. Thus, for traps suﬃciently small, we expect the dephasing time to be much faster than the heating rate.
Motional dephasing results from low-frequency ﬂuctuations in the trapping potential as seen by the ion. Many theoretical models of surface noise predict that the power spectrum should change from spectrally ﬂat white noise below a cutoﬀ frequency ωir into 1/ωβ-noise above the cutoﬀ. The frequency of this cutoﬀ may help discriminate between physical noise models and provide insight into the physical processes giving rise to surface noise eﬀects.
In this Section, we use a single ion as a noise sensor for the low-frequency behavior of surface noise. Experimentally, we apply the Ramsey-style interrogation of the ion motion discussed in Sec. 4.7 and Sec. 6.1. A schematic of the experimental pulse sequence is given in Fig. 6.1. Brieﬂy, the axial mode of a single ion is Doppler cooled, and then coherently displaced by a train of 397 nm laser pulses, generating a displacement |α|2 ≈ 50. The repetition rate of the train is detuned from the trap f-
requency by the small amount δm. After an interrogation time τ , the displacement is applied again, wherein the relative phase between the pulse train and the ion’s motion has evolved by δmτ . The ﬁnal displacement amplitude |α|2 is determined by a short 729 nm laser pulse applied to the blue axial sideband and the D-state occupation probability is measured by electron shelving. The displacement amplitude is measured by determining the Rabi frequency on the sideband transition, as discussed in Ref-
. [52].
Without dephasing, the ﬁnal displacement amplitude evolves periodically with frequency δm, oscillating between 0 and 2α. Additional dephasing due to perturbations of the motional frequency leads to a random phase evolution, reducing the contrast of the oscillations (Fig. 6.5(a)).
Spectral model
The inferences in this experiment rely on two main assumptions: First, we assume a simpliﬁed form for the noise power spectrum, shown in Fig. 6.5(b). That is, we assume that above some frequency ωir, the noise scales as ω−β for some β > 0. To prevent an infrared divergence

70

Figure 6.5: (a) Displacement amplitude |α|2 vs interrogation time τ in ms. The solid red line is a ﬁt to a model which depends on the overall amplitude of the noise as well as its
spectral features. (b) The noise power spectrum assumed in the analysis. It is believed that the noise goes as ω−β over some range (ωir, ωu). We assume that the power spectrum rolls oﬀ to ∼ ω0 below the low-frequency cutoﬀ ωir. If β ≤ 1, the power spectrum is required to have a high-frequency cutoﬀ at ωu so that the total noise power is ﬁnite. Such a high-frequency cutoﬀ would be signiﬁcantly higher frequency than our measurements are sensitive to, and
thus does not enter the analysis. This ﬁgure was originally published in Ref. [67].

in the total noise power, we impose a roll-oﬀ at ωir, below which frequency the noise scales as ω0. The experiment is not sensitive to frequencies much faster than 1/τ ∼ kHz, where τ is the interrogation time between displacement operations, so the high-frequency form of the spectrum is irrelevant. The second assumption is that the spectrum of quadrupolar ﬂuctuations is related to the spectrum of electric ﬁeld ﬂuctuations in the way discussed in Sec. 6.2:

15 SQxx = 4d2 SEx ,

(6.33)

where d is the ion-trap distance (50 µm, in this case). The electric ﬁeld ﬂuctuations, SE have been measured in this trap over a range of frequen-
cies (see Fig. 6.6) from 350 kHz to 1.3 MHz. Such a measurement is performed by adjusting the electrode voltages to achieve the desired trap frequency and measuring the heating rate in this conﬁguration. The measurements here yield a scaling factor β = 0.9(0.2). In the literature, other values of β are found, ranging from (-1) - (+7) [9].

71

Figure 6.6: Heating rate vs. trap frequency for the trap discussed in this experiment. The heating rate shows a scaling of ω−1.9(0.2), implying SE ∼ ω−0.9(0.2). This ﬁgure was originally published in Ref. [67].

Heating rate measurements probe the spectral noise density at a speciﬁc frequency–i.e., the motional frequency of the ion. However, heating rate measurements cannot probe the noise spectrum at very low frequencies due to ion loss. As the trap frequency is relaxed, the trap depth also decreases, reducing ion lifetime in the trap until it is infeasible to continue with experiments. The reduced ion lifetime is probably due to collisions with background gases which can eject the ion from the trap if t-
he depth is small enough. Nevertheless, we attempt to make inferences about the low-frequency noise characteristics based on measurements of the dephasing noise.
Given the frequency scaling β, the low-frequency roll-oﬀ ωir, and the heating rate at a particular trap frequency ω0, the noise spectrum may be extrapolated down to zero frequency as:

 SE (ω0 ) SE(ω) = SE (ω0 )

ω0 β ω
β ω0 ωir

if ω > ωir if ω < ωir.

(6.34)

In order to make use of our results from Sec. 6.1, we need to put our quadrupolar ﬂuctuations in the form of Eq. 6.5. The noise enters the Hamiltonian via the random electric potential

qΦ(t) =qQxx(t)x2

(6.35)

=qQxx(t) 2mωax (a2 + a†)2 + a†a + aa† ≈qQxx(t) mωax a†a,

(6.36) (6.37)

where ωax is the axial trap frequency, m the ion mass, and a and a† the harmonic oscillator creation and annihilation operators respectively. I neglect a2 and (a†)2 due to the rotating

72

wave approximation and neglect the commutator [a, a†] = 1 because the quantum state of the ion is assumed to be a large coherent state. Thus, to go into the notation of Sec. 6.1,

q

η(t) =

Q(t),

mωax

(6.38)

and therefore

q2 Sη(ω) = mωax SQxx(ω).

(6.39)

To relate all of this back to the heating rate measurements, we have:

Sη(ω) =

q2 mωax

15 4d2

 ω0 β

 SE(ω0) ×

ω ω0

β

 ωir

if ω > ωir if ω < ωir.

(6.40)

The electric ﬁeld noise spectral density can be determined from Eq. 6.3:

SE (ω0 )

=

m q2

ω0 π

Γ0

,

(6.41)

where Γ0 is the heating rate when ωax = ω0.

Analysis

In Eq. 6.14, I claimed that the Ramsey-style fringes in this experiment (Fig. 6.5(a)) should be damped by an exponential factor involving the power spectrum of frequency ﬂuctuations.
The primary goal of the analysis was to estimate the roll-oﬀ frequency ωir. Because the noise at low-frequency is extrapolated from high-frequency measurements, the estimate will depend on the factor β which determines how the noise scales with frequency in the high frequency regime. As diﬀerent measurements have found conﬂicting values of β [9], we run the analysis for several diﬀerent values of β ranging from 1 to 2.
With the parameter β ﬁxed, the fringes in Fig. 6.5(a) were ﬁt to the following form

|α|2(τ ) = A cos(δmτ ) exp

−

∞

sin2(ωτ /2)

0 Sη(ω) (ω/2)2 dω

.

(6.42)

where Sη is given in Eq. 6.40. In the ﬁt, β is taken ﬁxed, and ﬁt is performed over the

overall

amplitude

A

and

the

cutoﬀ

frequency

ωir.

The

ﬁlter

function

sin2(ωτ /2) (ω/2)2

drops

quickly

to zero as ω 1/τ . This means that the experiment is sensitive only to low-frequency noise.

Furthermore, it means that we do not need to make any assumptions about the behavior

of Sη(ω) above the trap frequency. The results are shown in Fig. 6.7. The low-frequency cutoﬀ estimate depends strongly on the choice of scaling exponent. On the low end, we ﬁnd

a cutoﬀ estimate of 10−4 Hz if β = 1, as compared to about 1 kHz if β = 2. The error

73
Figure 6.7: Cutoﬀ frequency ωir as a function of the assumed scaling law β. Error bars are the standard errors from the ﬁt.
bars in that plot are the standard errors resulting from the numerical ﬁtting procedure. An entire experimental run, varying the Ramsey duration from 0 to 10 ms, can take up to about 10 minutes to complete. This time sets the minimum frequency to which the experiment is sensitive. To enforce this in the analysis, we enforce a minimum ωir ≥ 10−4 Hz. For this reason, the smallest four cutoﬀ estimates around β = 1 all lie on a line.
We can compare these ﬁndings to certain theoretical results. For example, the surface diﬀusion model [22, 73] predicts a exponent of β 1.5 with an estimated low frequency cutoﬀ on the order of 10−7 Hz. Assuming β = 1.5 in the frequency regime below 100 kHz, we extract from our data a cut-oﬀ of ∼ 300 Hz, much higher than the cut-oﬀ estimated by the same model. Thus the surface diﬀusion model does not provide a consistent description of the noise for the surface studied here. Another model suggests -
adatoms of high molecular mass bound to the surface as the source for noise[60]. The cut-oﬀ in this model scales inversely with the atomic mass of the adatom. The adatom model would require unreasonably large (m ∼ several thousand a.u.) weakly bound atomic masses adsorbed to the surface to explain the observed dephasing in Fig. 6.5(a). In that model, realistic cut-oﬀ frequencies are in the range of one to hundreds of MHz. Thus, we conclude that some other noise process either of technical or physi-
cal nature is responsible for the dephasing. The voltage stability of the dc voltage sources supplying the trap electrodes was analyzed with a measurement bandwidth of 10 mHz to 100 kHz. The rms voltage ﬂuctuations on the dc electrodes was found to be 10 µV. Electrostatic simulations of the trap geometry imply that this level of voltage ﬂuctuation would lead to a dephasing time of 36 ms, signiﬁcantly longer than the dephasing time observed in Fig. 6.5(a). However, technical noise sources cannot be-
 excluded with certainty. Thus, it will be valuable in the future to perform these measurements in conjunction with surface-cleaning techniques [28, 13] to prove that the observed dephasing is due to surface eﬀects.

74
Chapter 7
Quantum simulation of energy transfer
7.1 Introduction
At press time, the results of this section were not published, but a manuscript is in preparation for submission to the peer-reviewed literature.
Analog quantum simulation refers to the notion that a controllable quantum system–e.g., a chain of trapped ions–can be made to mimic (or simulate) the dynamics of a theoretical model system. This is particularly interesting when the model is believed to describe some process in nature, but the model is challenging to study numerically. It is hoped that quantum simulators can faithfully emulate models in a lab setting–thereby allowing experimental study when analytical and numerical methods are una-
vailable. Ideally, the experiment permits tuning the model parameters, allowing physical insight to be gained.
Since trapped ions may be used as qubits–controllable, two-level systems– it is quite natural to use them to emulate coupled-spin systems [49]. As shown in Sec. 3.6 and Refs. [65, 57], the interaction between ion-qubits can mimic magnetically-coupled spins. For instance, ion systems have simulated frustrated magnetism [39], and the transition of spin chains from paramagnetic to ferromagnetic order [31], to cite two examples. The Hilbert space to describe an N -spin system is of dimension 2N , mean-
ing that simulation of a system as small as “a few tens of spins” would challenge classical computational resources [7, 68].
In addition to the qubit degree-of-freedom, ion chains also possess a set of normal vibrational modes. These modes are well-described by uncoupled quantum harmonic oscillators, and can also be used as a resource for quantum simulation. The simplest example of this is the Jaynes-Cummings model. By inspection of Eq. 3.17, it can be seen that the dynamics of a single ion irradiated on the red sideband is described by the Jaynes-Cummings model [7, 34], where the electronic state of the ion corresponds-
 to a two-level atom, and the vibrational mode corresponds to an optical cavity mode. In a more complicated example, large Coulomb crystals have also been suggested [50] to simulate the spin-boson model [42]. In that case, a

EET dynamics in the FMO complex of C. tepidum. The complex is a trimer made of identical subunits, each containing seven BChls. Because the strongest electronic coupling between two BChls in different FMO monomeric subunit is about an order of magnitude smaller than the local reorganization energies, the coherence between them is rapidly destroyed by the environmental disturbance (26). Therefore, we assume that the intersubunit coupling is vanishingly small and we consider the EET dynamics within -
one subunit. To simulate the EET dynamics, we use the Hamiltonian

imental data and numerical ﬁtt and τc = γj−1 = 50 fs as the valu relaxation time of the phonons, employ these values with the assu densities for the individual BCh integration of Eq. 6, the depth of
most N = 127.5For all calculation
changing the values of N to mak are converged.
EET Dynamics and Temperature Dep
proposal based on theoretical c plex has been assumed to be ori the baseplate protein whereas B region in contact with the RC tion was veriﬁed experimentally we adopt BChls 1 or 6 as the init calculations.
Fig. 2 presents the EET dyna T = 77 K. These results clearly FMO complex occurs primarily th connect spatially proximate and demonstrated by Brixner et al. (11, 25):

Figure 7.1: Image FFtiMagk.O1ec.nomSfpreloveemxn. TBhRCehelcfom.mo[pl3ele0cux]l.iessoObreienlonentegdsinuwgbittuhonBthiCtehlmo1foananodmF6eertinocwnsuaabr-duMnthitaeotbtfahtsheee-ws-O∗thTlehsseoprenecltarxa(alFtdioeMnnsfiOtuyni)cntiroenf.a2n6dshthoewsnymonmoesctirlilza pigment-protein compthlaepterleepaxrco,titoefnoinucewnnhdteerreicnaosmBgpCrlheelxe3.nTahnsedus4lpfiduraerlﬁsnbteraatnchdtesetararireageα.t-hrTeelgihcioeens tsihneavctoeannrteacpntauwrtmitohbf ereepdmhypsoliocbaylijnoegrcigEtqins. i5-
s.anHoreteryee, twcelehaar.vHeeenstciem, iattiesdimth bacteriochlorophyllpmrotoelienceunlveirso,nmeaencth. one modeled as a two-level energy site. Ex(<c8i0tafst) ioof tnhse rcelaaxnation function.

tunnel between sites, and the sites are coupled to molecular vibrations.

Ishizaki and Fleming

PNAS October 1

set of vibrational modes of the ion crystal may be used simulate a bosonic environment with many degrees of freedom. By coupling a single ion-qubit to the simulated bath, quantum decoherence eﬀects may be experimentally studied in a controlled way.
This Chapter discusses quantum simulation of energy transfer problems using ion chains. In this class of simulations, the qubit states of the ions and the vibrational modes of the crystal are all used as resources. In particular, we study energy transfer between quantum two-level systems which are coupled to each other as well as to a vibrational environment.
This is motivated by considering energy transfer problems in biochemical systems. One canonical example is energy transfer through photosynthetic light-harvesting complexes [30, 1, 10]. In this process, photons are absorbed and converted into molecular excitations. In order to be used as chemical energy in the cell, this excitation must be transferred to a cellular reaction center through a pigment-protein complex (Fig. 7.1). The pigment-protein complex is a collection of pigment molecules typical-
ly modeled as two-level systems where the excited state corresponds to energy localized to one particular pigment. The pigments are coupled to each other, as well as to a structured vibrational environment provided by vibrational modes of the molecules. Diﬀerences in the site energies of each pigment, as well as the presence of the vibrational environment would intuitively seem to reduce energy transfer eﬃciency, and so it is surprising to ﬁnd that the process occurs with near-unity eﬃciency [30].-
 It is now believed that the molecular vibrations actually assist in the transfer process, providing a source of energy to overcome site energy diﬀerences between pigments. This assistance is a rather general phenomenon known as vibrationally assisted energy transfer (VAET).
Owing to the large Hilbert space under consideration, models of these protein-pigment

76

complexes are diﬃcult to study theoretically. The subunit shown in Fig. 7.1 requires an excitonic Hilbert space of dimension 27. The vibrational Hilbert space is in principle inﬁnite because it is described by harmonic oscillators, though in numerical simulations the Hilbert space is truncated. In order to avoid brute-force simulation of the full model, approximation techniques are often applied which rest on various assumptions about the site-site couplings, the site-bath couplings, or relaxation-
 time of the bath [54, 19, 30]. However, these assumptions are not universally valid, and exact numerical treatments of small pigment-protein complex models seem to diﬀer qualitatively from the standard approximation methods [71]. Exact numerical solutions suﬀer from the exponential scaling problem of classically simulating quantum systems, suggesting a useful role for quantum simulators.
It is not our intention to speciﬁcally encode the dynamics of a particular light-harvesting molecule in an ion chain. Rather, we aim to implement the basic models describing the transfer process and study these models in a well-controlled setting. This allows us to gain intuition for what the models predict in various parameter regimes, and in the future to study the validity of approximation schemes. In this work, we focus on vibrationallyassisted energy transfer, and demonstrate the emergence of-
 this phenomenon in a simple two-site system. We show that a quantum environment, represented by a single thermalized harmonic oscillator, can assist in energy transfer between two sites even when the sites exhibit diﬀerent local energies. We explore this phenomenon by varying the strength of the site-bath coupling, the quantum state of the bath, and the relative detuning between the sites. We ﬁnd a rich phenomenology even for this simple system, and discuss avenues for extending the experiment to-
 feature more complicated dynamics.

7.2 Model

In particular, we implement VAET through the following Hamiltonian ( = 1):

H

=

∆ 2

σz(d)

+

J 2

σx(d)σx(a)

+

κ 2

σz(d)(a

+

a†)

+

νeﬀ a†a.

(7.1)

This Hamiltonian describes two-level energy sites, designated donor (d) and acceptor

(a), coupled with strength J (see Fig. 7.2(a)). In the absence of additional interactions,

this coupling will cause a single excitation to oscillate between the sites with frequency

J. A relative energy detuning ∆ imposes an energy cost to move excitation between the

sites, therefore inhibiting complete transfer of the excitation between sites. Under certain

circumstances, the addition of a bosonic environment can aid in the energy transfer process,

even when ∆ is so large that the transfer would otherwise be almost completely turned oﬀ.

The environment is modeled as a harmonic oscillator with frequency νeﬀ and is coupled to the sites with strength κ. In a semi-classical picture, a site-bath coupling of the form

κ 2

σz

(a

+

a†)

+

νeﬀ a†a

modulates

the

energy

of

one

site

at

the

vibrational

frequency

of

the

environment. κ functions as a modulation index, parametrically moving energy between the

sites. In the quantum regime, the role of the environment may be understood as providing an

(a)acceptor donor

κ=0 J

∆

77
1
(b)

κ>0 J

0

1

20

Time (ms)

Figure 7.2: (a) Schematic illustration of the VAET process. When κ = 0 (top drawing), the transition probability from the donor state (black line), to the acceptor state (blue line), is attenuated in the presence of an energy barrier ∆ between the states. When κ > 0 (bottom drawing), the system can move between the donor state (solid black line) and the acceptor state (red line), by exchanging energy with a phononic environment. (b) Time dynamics of the acceptor state population in three situation-
s illustrated in (a). Black line (theory) and data points: ∆ = 0, where coherent energy transfer occurs with frequency J. Blue line (theory) and data points: ∆ > J, but without assistance of the phononic environment, reducing transfer eﬃciency. Red line (theory) and data points: ∆ > J, but the environment assists in the transfer process. The process is slower than the resonant coupling, but occurs with high eﬃciency.

extra degree of fre√edom which makes the energy transfer process energetically allowed. For instance, if νeﬀ ≈ ∆2 + J2, inter-site transfer can occur provided the environment changes its vibrational q√uantum number by one (see Fig. 7.2(a) and (b)). Higher-order processes also occur: if νeﬀ ≈ ∆2 + J2/k, inter-site transfer is allowed when the environment changes by k vibrational quanta.
7.3 Experimental implementation
Our simulator consists of two trapped Ca+ ions conﬁned in a radio-frequency (RF) Paul trap (Fig. 7.3). In this simulation, we encode the energy sites in the internal electronic state of the ions. The internal structure of Ca+ is discussed in Sec. 3.1. In particular, the magnetic substates |S (mj = 1/2) and |D (mj = 1/2) form a qubit, addressed by an optical transition at 729 nm. The combined state |DS corresponds to a single excitation localized to the donor site, and |SD corresponds to an excitat-
ion localized to the acceptor site. The two-ion crystal contains six normal vibrational modes, only two of which are relevant to implement the Hamiltonian in Equation 7.1: the axial stretch mode with ωax = 2π × 1.3 MHz, and the radial rocking mode at ωr = 2π ×2.1 MHz. The axial stretch mode provides a bus to transfer excitation between the two sites via a two-qubit Mølmer-Sørensen quantum interaction [65]. The rocking mode serves as the thermally occupied bosonic environment in the simulation. The-
se modes are deﬁned in Sec. 2.3.

78
Figure 7.3: Schematic drawing of the 3D trap and laser beams used in this experiment. Two Ca+ ions are conﬁned in the trap. A global 729 nm laser beam along the axis of the trap generates the Mølmer-Sørensen interaction which produces the site-site coupling. A tightly focused laser beam is localized to the donor ion and is used for single ion rotations and generating the site-bath coupling.
We have chosen to use the axial stretch mode and the radial rocking mode (as opposed to the center of mass modes) because of heating rate considerations. The center of mass modes have a heating rate of around 0.1-0.2 quanta/ms. Since the entire simulation takes 2-3 ms to complete, there is a substantial probability to experience heating in the simulation during the interaction time, which would need to be included in the model dynamics. The stretch and rocking modes, however, have a measured heati-
ng rate which is smaller by about an order of magnitude, and so we neglect this eﬀect in the simulation dynamics.
The simulation relies on two engineered interactions applied at the same time. The σx(d)σx(a) term in Eq. 7.1 is due to a global Mølmer-Sørensen interaction, discussed in Sec. 3.6. This is accomplished via a bichromatic 729 nm laser beam along the axis of the trap. The second engineered interaction is the site-bath coupling, of the form σz(a + a†). This is accomplished via a tightly focused laser beam localized to the donor ion. This interaction is discussed in Sec. 3.6. The local beam also contai-
ns two laser tones, which are separated in frequency by ωr + νeﬀ. The laser tone frequencies are shown in Fig. 7.4. The model parameters J and κ are adjusted by controlling the powers of the global and local beams, respectively.
The laser beams are made bichromatic by applying two rf-tones to a single pass acoustooptic modulator (AOM). This is done by combining two frequency sources on a power combiner. Each laser beam can be switched between bichromatic and monochromatic operation by a TTL signal. The electrical and optical layout is discussed in Sec. 4.2 and Fig. 4.9.
The site energy of the donor ion is shifted by ∆ relative to the acceptor ion by an AC Stark shift. Currently, this is implemented by adjusting the relative powers of the two tones in the localized beam. It would also be possible to introduce a third tone to the local beam to generate the AC Stark shift. This would have the advantage of allowing the AC Stark

79

ωr + νeﬀ

donor −ωr

−ωax

ωax

ωr

acceptor

frequency

Figure 7.4: Schematic drawing of the laser tone frequencies used to generate the Hamiltonian in Eq. 7.1. The tall black line denotes the optical transition from |S → |D . Shorter black lines denote the relevant motional sidebands for the axial and radial modes. Both ions are equally illuminated with the Mølmer-Sørensen laser beam, which contains tones near the red and blue axial sidebands. In addition to this, the acceptor ion has two more tones, detuned from the carrier transition by about ωr/2, -
to generate the site-bath coupling.

shift to be tuned independently of κ. Before each experiment, both the axial center-of-mass and stretch modes are sideband
cooled to a mean thermal occupation less than one quantum. The axial center-of-mass mode does not serve a role in the simulation. However, nonzero temperature in this mode causes Doppler broadening of the carrier transition as seen by the Mølmer-Sørensen beam, dephasing the energy transfer between resonant sites. For similar reasons, we also perform sideband cooling of the radial center-of-mass mode, to improve the ﬁdelity of the σz(a+a†) interaction. As noted above, the radial rocking mode serves-
 as the environment in the simulation. We control the temperature of this mode by adjusting the duration of sideband cooling (Sec. 3.4). By this method, the mean thermal occupation n¯ may be adjusted in the range from 0.04 < n¯ < 12. The Doppler limit for this mode is n¯ = 6, but by choosing somewhat sub-optimal Doppler cooling parameters, it is possible to prepare the environmental mode above the Doppler limit.
The experimental procedure is as follows: initially, both ions are optically pumped into the state |SS . The assisting mode is then thermalized via sideband cooling as discussed above. The experiment begins by exciting the donor via a local rotation of the donor ion, leading to the combined electronic state |DS . Then, the local and global laser beams generating the model Hamiltonian are applied for a variable time τsim. Finally, the combined electronic state of both ions is read out on a charged--
coupled device (CCD) camera by an electron shelving measurement (Sec. 3.5). For each parameter setting {J, κ, ∆, νeﬀ}, the simulation is run 100-500 times, and the population in each electronic state is constructed by averaging the results. The probability that the excitation has transferred to the acceptor is the |SD state population. For the time dynamics data, we report the conditional probability P that the system has undergone state transfer, i.e. P = PDS/(PSD + PDS). T

80
his accounts for population loss in the simulation subspace (primarily due to inﬁdelities in state preparation and oﬀ-resonant excitations from the local beam), but does not change the qualitative features of the dynamics.
7.4 Results

High T: n¯ = 5
1
(a)

Low T: n¯ = 0.5
1
(b)

00
1 (c)

1 τsim (ms)

2

00

1

1 τsim (ms)

2
(d)

−0 10

−5

0 νeff (kHz)

5

10

−0 10

−5

0 νeff (kHz)

5

10

Figure 7.5: Probability P to ﬁnd the system to undergo energy transfer to the target state as a function of simulation time τsim and vibrational frequency νeﬀ. The upper plots show the time dynamics P (t) with νeﬀ ≈ +4 kHz (blue points) and νeﬀ ≈ −4 kHz (red points) for a mean thermal occupation of (a) n¯ = 5 and (b) n¯ = 0.5. The lower plots show P as a function of νeﬀ, where the simulation time is ﬁxed to 0.7 ms for a mean thermal occupation (c) n¯ = 5 and (d) n¯ = 0.5. For all cases, (J, κ, ∆) -
= 2π × (1.30(1), 1.40(4), 4.00(2)) kHz In the time traces, the solid lines are a numerical simulation of the system dynamics where all parameters were determined through independent calibration measurements. The solid lines in the spectral plots are also a numerical solution where a small overall shift to the frequencies is adjusted to correct a systematic measurement oﬀset in the ion’s vibrational frequencies. The measured data points in the spectral plots are connected with a dashed line to guid-
e the eye

We probe the VAET phenomenon through spectroscopy as well as study its time dynamics. For the spectroscopic measurements, we ﬁx particular values of J, κ, ∆, and simulation time τsim. We vary the frequency νeﬀ and measure the probability to ﬁnd the ions in the acceptor state |SD . VAET is most clearly illustrated in the regime ∆ J, such that inter-site energy transfer does not occur without the assistance of the environment. This situation is shown in Fig. 7.5, where signiﬁcant energy transfer occ-
urs within 1 ms, with the appropriate environmental frequency.

81
Figure 7.6: Acceptor state population vs νeﬀ. A typical detuning scan in the small ∆ regime, showing only two peaks. In this case, τsim = 0.7 ms and n¯ = 2.7. The other parameters are: (J, κ, ∆) = 2π × (1.22(3), 0.63(2), 1.226(3)) kHz. system for independently measured parameters.
In the spectral scans, (Fig. 7.5(c) and (d)), several peaks are visible. The ﬁrst peak, at around νeﬀ = −2π × 4 kHz, corresponds to a process wherein the system goes from |DS, n → |SD, n + 1 , where n indexes the vibrational quantum number of the environment. The next set of peaks, not fully resolved, correspond to processes where the environment gains k > 1 vibrational quanta, |DS, n → |SD, n + k .
As νeﬀ crosses zero, the environment goes from gaining energy to losing energy in the transfer process. The peaks at νeﬀ > 0 correspond to processes |SD, n → |DS, n − k , k ≥ 1. The height asymmetry between the νeﬀ < 0 and νeﬀ > 0 peaks is a signature of the quantum nature of the environment. The asymmetry emerges when the environment has signiﬁcant population in the n = 0 ground state. In that case, inter-site transfer is suppressed because the environment cannot provide the necessary energy. The-
 peak height asymmetry begins to disappear as the thermal occupation of the environment is increased. This is seen experimentally by comparing Fig. 7.5(c), where the environment contains an average of 5 vibrational quanta, to Fig. 7.5(d), where the environment has mean thermal occupation of 0.5 quanta. The asymmetry is much more pronounced in the lower temperature data. Correspondingly, for the high temperature data, the time dynamics of the process is nearly identical for either sign of νeﬀ (Fig.-
 7.5(a)). Meanwhile, at low temperature, the transfer eﬃciency is much lower for positive νeﬀ.
For ∆ suﬃciently large, each process |SD, n → |DS, n + k is resolved and occurs at a diﬀerent frequency, as shown in Fig. 7.5 (b) and (d). However, when ∆ becomes comparable to J, these processes all occur simultaneously, and numerical methods are then required to study the dynamics. In this case, as shown in Fig. 7.6, the peaks corresponding to changes in the environmental quantum number are no longer spectrally resolved.
In the small ∆ conﬁguration, the dynamics of the process changes appreciably as the environmental coupling κ and the temperature are varied. These changes are most apparent when the system is prepared near the motional ground state (Fig. 7.7). For comparison, we run the simulation for three diﬀerent values of κ. For small κ, the excitation transfer is modulated by the environmental coupling, as can be seen in the time dynamics. As κ is increased, the transfer speed increases but also changes quali-
tatively. In contrast to the pure

82
Figure 7.7: Probability P for energy transfer vs simulation time for diﬀerent values of κ, with the environmental mode prepared to a mean thermal occupation n¯ = 0.04 vibrational quanta. In all three scans, all parameters except κ are approximately constant. Ordered from top to bottom: J = 2π× (1.27(3), 1.22(3), 1.32(3)) kHz ∆ = 2π× (1.22(3), 1.24(3), 1.36(4)) kHz, νeﬀ = −2π× (1.71(5), 1.69(5), 1.77(6)) kHz. κ increases from top to bottom, taking the respective values 2π× (0.229(6), 0.37(1), 0.64(-
2)) kHz. In all plots, the solid traces are the predicted dynamics with no free parameters.
Figure 7.8: Probability P for energy transfer vs. τsim in the high temperature (n¯ = 12) regime. Simulation parameters: (J, κ, ∆, νeﬀ) = 2π ×(1.17(3), 0.63(2), 1.59(3), −1.72(6)) kHz state dynamics of the system, ﬁnite temperature both increases transfer speed and damps the oscillatory behavior of the dynamics (Fig. 7.8).
7.5 Calibration of parameters
An important component of a quantum simulator is the ability to independently measure the model parameters. In Eq. 7.1 the parameters which must be determined are J, κ, ∆, and νeﬀ. In addition, the initial thermal population of the environment must be measured.

83

Measuring J
The easiest parameter to measure is J. This is done by turning the local beam oﬀ during the simulation, eﬀectively setting ∆ = κ = 0. The two-ion system is then prepared in the combined state |DS via a local rotation of the donor ion, and the electronic populations are measured on a CCD camera (see Fig. 3.8). The data are ﬁt by a least- squares method to extract J.

Measuring κ

κ is somewhat more diﬃcult to measure than J, especially for small values. In principle, it would suﬃce to measure κ with the Ramsey method discussed in Sec. 3.6. In that discussion, a π/2 pulse prepares a single ion in the state |S +|D . After this, the bichromatic beams are turned on for some time, and a second π/2 pulse is applied, followed by state measurement in the |S , |D basis. The decay of the Ramsey fringe contrast in this measurement in principle measures κ, but this eﬀect must be disen-
tangled from other decoherence sources such as magnetic ﬁeld ﬂuctuations which occur on the same timescale. In our case, the electronic state coherence is around 2 ms [51].
To avoid this complication, we instead use Eq. 3.38, making the association

κ

=

ηr

Ω1Ω2 2ωr

,

(7.2)

where ηr is the Lamb-Dicke parameter for the local beam onto the radial rocking mode, and Ω(1,2) are the Rabi frequencies of the two laser ﬁelds in the local beam.
ηr is measured by sideband cooling the ωr mode near the ground state, and then measuring the frequency of Rabi oscillations on the blue sideband. For the geometry in this experiment, we ﬁnd ηr = 0.039(1).
Once ηr is known, the Rabi frequencies of each tone must be measured. It is helpful at this point to recall Fig. 4.9. Each 729 nm laser path goes ﬁrst through a double pass AOM setup, and then through a single pass AOM before arriving at the trap. The double pass AOM provides wide band frequency control of the beam, while the single pass AOM is used to make the laser beam bichromatic. To measure the Rabi frequencies in each tone, the ωr mode is ﬁrst sideband cooled. Following this preparation step-
, the local beam is switched to bichromatic mode, but the double pass AOM driving frequency is shifted by +ωr/2, such that one tone of the bichromatic beam is resonant to the carrier transition, and the frequency of Rabi oscillations is Ω1. Then, the process is repeated, but the double pass AOM driving frequency is shifted by −ωr/2, and then the frequency of carrier Rabi oscillations is Ω2. In each of these measurements, one tone of the bichromatic beam is resonant to the carrier, and the other is-
 resonant to either the blue or red sideband. The presence of the tone driving the sideband aﬀects the dynamics only slightly because the sideband Rabi frequency is less than 4% that of the carrier with the mode in the ground state. In addition, a small shift of the double pass frequency by a few kHz will greatly reduce

84

Figure 7.9: Energy transfer probability P vs. simulation time for the small ∆ regime, and νeﬀ = 2π × 30 kHz. In this case, J = 2π × 1.4 kHz, ∆ = 2π × 1.1 kHz. The line is a ﬁt to the model in Eq. 7.3.

the driving of the sideband while hardly aﬀecting the rate of carrier Rabi oscillations. One remaining systematic eﬀect is the change in double pass diﬀraction eﬃciency as a function of the driving frequency. In the calibration measurements, the double pass frequency is shifted ±ωr/2 relative to its frequency when the simulation is run. The intensity change is measured on a photodiode to be around 5%, and is introduced as a correction factor in determining Ω(1,2). These measurements are suﬃcient t-
o determine κ, which may be tuned from 0 up to around 1.5 kHz. The measurement errors in κ (listed in Sec. 7.4) arise from the uncertainty in η, as well as the error in ﬁtting Rabi oscillations from Ω(1,2). The primary factor limiting κ is that the Rabi frequencies of the individual tones must be small as compared to their detuning from the carrier transition (2π× MHz) so as not to induce oﬀ-resonant excitations. For the largest values (κ = 2π × 1.7 kHz), Ω(1,2) ≈ 2π × 300 kHz.

Measuring ∆

∆ is measured in two diﬀerent ways. For ∆ not too large as compared to J, it can be measured by the following procedure. First, one tone of the σz(a + a†) interaction is shifted by +2π×30 kHz from ωr/2. This has the eﬀect of setting νeﬀ = 2π×30 kHz–much larger than ∆. We thus expect that κ does not contribute to the dynamics, and the model Hamiltonian
reduces to

H

=

J 2

σx(d)σx(a)

+

∆ 2

σz(d).

(7.3)

The ions are ﬁrst prepared into the state |DS , and then both the global and local beams are turned on. The population in the acceptor state |SD is measured as a function of time. The acceptor state population is modeled using a quantum dynamics solver [36] for the Hamiltonian in Eq. 7.3. The model is then ﬁt by least-squares to ﬁnd ∆ (see Fig. 7.9).
This method introduces a systematic error which must be accounted for, however. The shift of one laser tone by about 30 kHz relative to its frequency during the actual simulation

85

Figure 7.10: Parity oscillations of the two-ion electronic state. The local beam is on, but the global beam, generating the Mølmer-Sørensen coupling is left oﬀ so as not to interfere with the parity oscillations. The solid line is a ﬁt to determine ∆ = 2π × 3.6 kHz.

introduces an additional AC Stark shift of up to 200 Hz which is not present when the simulation is actually run. At present, this is corrected in an analytic way. The residual Stark shift ∆r is calculated using a two-level atom approximation (Eq. 3.28):

∆r

=

Ω21 2

1 ωr/2

−

ωr/2

+

1 2π ×

30

kHz

.

(7.4)

Ω1 is assumed to have already been measured in the previous section. A better method would be to repeat the measurement but in the second iteration, shift the frequency by −30 kHz, and take the average of the measured detunings.
When ∆ J, the population transfer is too small to ﬁt for the detuning. In that case, ∆ must be measured directly via parity oscillations [11]. First, a global π/2 pulse is applied to both ions. Then the bichromatic local beam is turned on, generating detuning ∆, but the global beam (which does not generate local Stark shifts) is left oﬀ. After an interrogation time τ , a second π/2 pulse is applied, and the resulting combined electronic state is measured, and the parity P is recorded. The operator-
 P is deﬁned as P (|SS ) = P (|DD ) = 1. P (|SD ) = P (|DS ) = −1. The parity P (τ ) oscillates with frequency ∆, and so the parity oscillations are used to extract this parameter (Fig. 7.10). Coupling to the environmental mode does not cause phase contrast loss of the parity oscillations because νeﬀ = 2π × 30 kHz is much larger than the other relevant parameters (J, ∆). Therefore, contributions from this coupling quickly average to zero in the dynamics.

Remaining parameters
The only parameters left to determine are the thermal occupation of the environmental mode, and the eﬀective mode frequency νeﬀ. The thermal occupation is extracted from sideband spectroscopy (see Sec. 3.4) when the thermal excitation is low (less than 2 quanta). Otherwise, the temperature is measured by comparing Rabi oscillations on the carrier and blue sideband at the same laser power.

86
The environmental simulated frequency νeﬀ is deﬁned in an interaction picture rotating with frequency ωr + νeﬀ. In this interaction picture, the Hamiltonian takes the form of Eq. 7.1. The parameter νeﬀ is then given by ωr minus the frequency splitting of the two tones in the localized beam. In principle, it is therefore possible to determine this parameter just by measuring ωr to high precision. In the experiment, the spectral scans are performed by varying a frequency source around ωr/2. However,-
 over the course of taking a full set of data over several hours, ωr may change by up to 2 kHz. In order to avoid the additional measurement overhead of tracking this parameter closely, the x-axis in the spectral scans is adjusted so that the peak locations are symmetric about zero. The time scans are taken by setting νeﬀ to the outermost peaks.
7.6 Conclusions and future work
We have implemented an analog quantum simulation of vibrationally-assisted energy transfer using trapped calcium ions, and studied dynamics across a range of parameter regimes, including non-perturbative and non-Markovian dynamics. Our experimental results show good agreement with brute-force numerical solution of the model. This experiment is a building block towards a device for studying charge and energy transfer dynamics in more complex models relevant to chemistry and biology. There are a num-
ber of directions in which to extend this experiment. First, one can increase the complexity of the environment in order to more closely mimic biochemical vibrational environments. The single quantized harmonic mode implemented here models a long-lived resonant vibrational mode; it is possible to couple the vibrational mode to a thermal bath via laser cooling, thus allowing one to tailor the relaxation dynamics of the mode, and tune the system-environment dynamics continuously from a non-Markovian-
 to a Markovian regime. This would require embedding the simulation in a large string of ions, where sideband cooling of the environmental modes is applied to ancillary ions which do not participate in the simulation [27]. The use of ancillary ions allows the explicit introduction of dissipation into the simulation without aﬀecting the electronic coherences of the simulation ions.
Also, by coupling to other vibrational modes in the ion crystal, one can add additional long-lived vibrational modes to the structured environment. Finally, one can engineer additional dephasing dynamics due to coupling to a high-temperature structureless bath by adding ﬂuctuations to the laser tone implementing the energy shift (∆) using a fast arbitrary waveform generator. Another direction for extending the simulation model is to add more ions to mimic energy transfer in larger networks; unders-
tanding energy transfer in large networks of varying morphology and energetic structure is critical to understanding non-trivial transport behavior such as “quantum ratcheting” [29, 47], and designing excitonic materials and devices [3]. In larger networks it may also be possible to simulate the dynamics and propagation of multiple excitations (this depends on the complexity of the exciton-exciton interaction one requires).
Overall, all of these extensions are achievable with current experimental technology. Each

87
additional site in the network requires exactly one additional trapped ion. The coupling to an additional vibrational mode requires two additional localized 729 nm laser tones, necessitating an approximately linear increase in total laser power for constant couplings. The required single-ion addressability with individual beams has been demonstrated, even for a large chain of ions [15].
We thus believe that with moderate experimental improvements our approach can be used to study models of energy transfer in physics, chemistry and biology, where analytical and numerical treatments fail. This regime will be particularly interesting since the lack of a theoretical prediction will not allow for an independent conﬁrmation of the experimental results.

88
Chapter 8
Conclusions
This document began this work with a general overview of ion trapping technology (Chapter 2). That Chapter discussed two types of rf Paul traps: the microfabricated surface trap and the macroscopic, 3-dimensional Paul trap. We discussed how the dc potential near the trapping region may be controlled, and slightly generalized the treatment to consider the case of two ions in the same trap.
In Chapter 3, we explored the interaction of laser light with trapped ions. Lasers are a primary toolbox for controlling the quantum states of ions. In the experiments, we use basic light-matter interactions for Doppler cooling, sideband cooling nearly to the ground state of motion, and projective measurement of the electronic state. We can also do coherent operations on the narrow |S → |D transition, in which the ion can be rotated into a coherent superposition of |S and |D . At a somewhat more c-
omplicated level, we create entangled states of two ions by applying bichromatic laser beams. The experimental hardware to do all of these manipulations is described in Chapter 4.
We extend the optical toolbox in Chapter 5, in which we parametrically couple two vibrational modes of a single ion. This extends on laser-based control of the ion motion by creating a completely electronic means of manipulating the motional quantum state. The coupling is accomplished by applying a time-varying voltage with frequency ωp = ωi − ωj, where ω(i,j) are the frequencies of two arbitrarily chosen vibrational modes.
With a single ion, this parameteric technique is useful for cooling modes which have only a small projection onto the wave-vector of the cooling laser. In addition, it can be used to measure the quantum state of an optically inaccessible mode by ﬁrst swapping the state of the inaccessible mode with an optically accessible mode and then performing standard optical analysis of the accessible mode. As an example of this, we use this technique to measure a heating rate in an inaccessible mode. In prin-
ciple, the technique can be extended to couple arbitrary normal modes of a Coulomb crystal, although this would require that the potential created by the coupling electrode has substantial variation on the scale of the ionion separation–an engineering challenge. However, microfabricated traps have been used to split ion strings with dc potentials [5], proving that it is possible to make electrodes featuring the required spatial potential variation. Another extension of the work is in the generatio-
n

89
of non-classical states of motion. By setting the driving frequency ωp = ωi + ωj, the sum frequency between two modes, the interaction generates two-mode squeezing.
Two experiments studying surface noise eﬀects were shown in Chapter 6. In the ﬁrst experiment, we showed that technical noise, for instance arising from noisy voltage sources, can be experimentally diﬀerentiated from surface noise sources. This allows the experimenter to know whether the electrical noise observed in the experiment is most likely due to technical sources, and therefore whether more work should be done to improve the electronics. It will be valuable to perform this test in experimen-
ts which aim to study surface noise so that technical noise can be ruled out.
In the second experiment, we studied dephasing of the ion motion. We found that the motional phase coherence is lost after about 5 ms. We believe that this is due to surface eﬀects, as technical noise measurements did not seem suﬃcient to explain the observed dephasing. Whereas heating rate measurements probe electrical noise at frequencies resonant to the ion motion, our measurements probe noise at very low frequencies (sub-Hz to kHz). Many theoretical noise models predict a power-law scaling of -
the surface noise which rolls oﬀ to a ﬂat frequency spectrum below a certain cutoﬀ frequency. In the models the cutoﬀ frequency depends on the noise dynamics and therefore our measurements help discriminate between competing theoretical models. However, our measurements are diﬃcult to explain by common physical models such as surface adsorption of atomic contaminants.
It will be useful to combine the experiment with surface-cleaning methods to see how the dephasing time changes with surface treatment, thereby proving that surface noise is indeed primarily responsible for the dephasing. In addition, it may also be interesting perform these measurements while the trap surface is heated, as the surface adsorbate model contains a temperature-dependent low-frequency cut-oﬀ. Regardless of the physical origin, we believe that these eﬀects will pose a strong challenge -
to the miniaturization of surface trap technology for quantum information processing experiments. This is due to to the expected d−6 scaling of the dephasing noise. Our measurements were conducted in a trap where the ion was located d = 50 µm above the trap surface. With a 25 µm trapping height, we expect the dephasing time to be 64 times smaller. Thus, an analogous experiment in a 25 µm trap would be expected to show a dephasing time of less than 100 µs–comparable to the time required to perform -
two-qubit quantum gates.
The ﬁnal experiment in this work is documented in Chapter 7. In this experiment, we implemented vibrationally assisted energy transfer in a two-ion system. The electronic levels of the ions were used to simulate energy sites. The state |DS corresponded to an excitation localized to one ion (called the donor), and |SD corresponded to an excitation localized on the other ion (called the acceptor). The two energy sites were coupled together by a Mølmer-Sørensen interaction, and an ac Stark shift detu-
ned the |SD level from the |DS level, inhibiting transfer between the sites. By coupling the energy sites to a vibrational mode of the ion crystal with an interaction of the form σz(a + a†), we showed that energy transfer can be enhanced if the vibrational mode is resonant to the energy gap between donor and acceptor sites.
The system mimics aspects of energy transfer processes in biochemical systems such as

90
pigment-protein complexes. In this analogy, a vibrational mode of the ion crystal mimics the eﬀect of a molecular vibration on energy transport through the pigment-protein complex. We explore how the dynamics changes as a result of the model parameters. For instance, we show results for both large and small site detunings (as compared with the site-site coupling). We showed a dependence of the transport dynamics as the temperature of the vibrational mode is varied.
This experiment should be thought of as a proof-of-principle experiment, showing that it is experimentally viable to use trapped ions to emulate energy transfer in the presence of a thermalized vibrational environment. It will be interesting to extend the simulation along several diﬀerent directions. For instance, by applying amplitude noise to the ac Stark shifting laser, it will be possible to explicitly introduce decoherence to the system in a controlled way. The dynamics must then be treated i-
n an open quantum system formalism, and the crossover from Markovian dynamics (where quantum correlations in the environmental mode are long lived) to non-Markovian dynamics (where the environment has no memory time) can be explored experimentally. To be of more scientiﬁc value, it will be important to make the system more complex than can be simulated with classical computational resources. In this way, energy transfer dynamics can be controllably studied in a system which cannot be simulated by -
other means, potentially leading to new insights. This is primarily accomplished by adding more ions and more vibrational modes. Extending the simulation to include extra vibrational modes involves adding one additional localized bichromatic laser beam per mode, generating the appropriate vibrational couplings. With more ions, it may be possible to new qualitative eﬀects such as “quantum ratcheting,” in which the energy only ﬂows in one direction along the ion string [47, 29]. We believe it will b-
e possible for our simulation to approach the limits of classical supercomputers with reasonable experimental improvements. For instance, a ﬁve site model where each site is coupled to two harmonic modes may already be beyond classical resources. If each of the harmonic modes is thermalized to a mean thermal occupation n¯ ∼ 5, then a Hilbert space of about 15 states is required to simulate each harmonic oscillator. In that case, the Hilbert space required to simulate the entire system is 25 × 1510-
 ≈ 2 × 1013. By incrementally increasing the simulation complexity, and verifying at each level that the experiment performs as expected, it may be possible to construct a quantum simulator which truly probes previously unknown physics.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:25.660Z
- **Text Length:** 207035 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
