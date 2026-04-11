# PDF Document: (Thesis - Lattice Setup - 2023 Joe) Quantum metrology with trapped ions.pdf

**File Path:** (Thesis - Lattice Setup - 2023 Joe) Quantum metrology with trapped ions.pdf

**Processed Date:** 2026-02-10T18:13:50.369Z

**File Size:** 21969.43 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 396

**Title:** (Joe Thesis - Lattice Setup - 2023 Joe) Quantum metrology with trapped ions.pdf

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Quantum metrology with trapped ions
by Joseph D. Broz
A dissertation submitted in partial satisfaction of the requirements for the degree of Doctor of Philosophy in Physics in the Graduate Division of the
University of California, Berkeley
Committee in charge: Professor Hartmut Häffner, Chair
Professor Dan Stamper-Kurn Professor Eli Yablonovitch
Fall 2023

Quantum metrology with trapped ions
Copyright 2023 by
Joseph D. Broz

1
Abstract
Quantum metrology with trapped ions
by
Joseph D. Broz
Doctor of Philosophy in Physics
University of California, Berkeley
Professor Hartmut Häffner, Chair
We present the results of an experiment that used the quantized motion of an ion trapped in a harmonic pseudopotential to test for nonlinear extensions of quantum mechanics. This test was motivated by the development of a recent, consistent theory of nonlinear quantum mechanics that, in contrast to previous frameworks, also preserves causality. This experiment represents the first test of this new theory in a fully quantum system and improved the bounds on potential nonlinear effects in quantum me-
chanics inferred from previous experimental results by about seven orders of magnitude.
We also present the results of an experiment that used two entangled ions to test for local violations of Lorentz invariance and which tightened the bound on such hypothetical violations by about half of an order of magnitude. In particular, this experiment used a special entangled state of the ions, residing within a decoherence free subspace, which is immune to the dominant source of noise. By comparing our results against a similar experiment, performed with two non-entangled ions, we verify th-
e expected factor-of-two improvement in the signal-to-noise ratio predicted by theory. This improvement can be directly attributed to the use of entanglement and, thus, this work provides a case study of how entanglement can be leveraged as a resource to fundamentally enhance the performance of spectroscopic measurements.

i To my mother, sisters, Lia and Chesty. Good night Chesty, wherever you are.

ii
Acknowledgments
First, and foremost, I must acknowledge my graduate research advisor and principal investigator Hartmut Häffner. Hartmut is wise but patient, knowledgeable but humble and, without his guidance and unwavering support, this thesis would not have been possible. I must similarly acknowledge Mark Schlossman, my undergraduate research advisor at the University of Illinois Chicago. Professor Schlossman provided me with my first real research experience in experimental physics, which served to motivate an-
d guide the direction that I would ultimately pursue in graduate school. He was also a fantastic mentor and teacher.
In terms of the skills required to actually ”do” good experimental physics, I learned most of what I know through the example set by the outstanding post-doctoral researchers and senior graduate students that I had the privilege of working with over the years. In particular, Eli Megidish introduced me to the group, taught me how to lock my first laser, how to couple light into my first fiber, how to entangle my first qubits, and has just generally been a great mentor and friend. Clemens Matthiesen-
 and Sara Mouradian were also indispensable resources whenever I had a tough question or needed a helping hand and, as a senior graduate student, Dylan Gorman set a high bar that I reflected upon often.
I owe the pleasantness of my day-to-day experience at Berkeley to the fantastic environment in Hartmut’s lab – a credit to the many wonderful people whom I had the privilege of sharing lab space with including Wei-Ting, Sumanta, Bingran, Maya, Crystal, Erhan, Elia, Justin, Ryan, Nicole, Da, Neil, Boerge, Erik and many more. And the friends that I made in the larger UC Berkeley physics department including Juan Camilo, Dylan, Sam and Shawn.
Every academic opportunity that I have had was made possible by the United States Marine Corps and the financial support I received through the GI Bill and Illinois Veteran Grant. My time in the Marines was tough, but it also instilled in me the self-discipline and self-belief that was necessary to attempt and achieve everything that I have in my higher education. I cannot thank enough the many exemplary leaders and peers that I served my country alongside including Marc Harrison, Brett Maddix, Pa-
ul Zogg, Daniel Pavela, Lupe Guerrero, Eric Esparza, Steve Davis, Sean Padfield, Justin Humpich, Joshua Kalina, Matthew McCormack, Jeffrey Ahlborn, Chris Crowe and Chris Bay – to name just a few.
Finally, I would like to acknowledge the generous support I received from the National Science Foundation Graduate Research Fellowship Program (NSF-GRFP), which funded the first three years of my research in Hartmut’s laboratory. And I would also like to acknowledge the bottomless support from my mother, my sisters and my faithful dog Lia who is up there somewhere on the other end of the rainbow bridge.

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

1.1 Motivation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1

1.2 Structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2

2 Theoretical framework

3

2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3

2.2 Trapping ions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 2.3 Electronic structure of 40Ca+ . . . . . . . . . . . . . . . . . . . . . . . . . . 17

2.4 Zeeman substructure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22

2.5 Effect of external electric fields on ion structure . . . . . . . . . . . . . . . . 25

2.6 Light-ion interactions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28

3 Experimental toolbox

41

3.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41

3.2 Photoionization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42

3.3 Laser cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44

3.4 Optical pumping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51

3.5 Coherent single-ion control . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52

3.6 Entanglement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56

3.7 Measurement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60

4 Experimental setup

61

4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61

4.2 Main apparatus . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62

4.3 Trapping electronics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66

4.4 Laser system and addressing optics . . . . . . . . . . . . . . . . . . . . . . . 71

4.5 Imaging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76

iv

4.6 Hardware and software control . . . . . . . . . . . . . . . . . . . . . . . . . . 78

5 Bounding causal nonlinear quantum mechanics

82

5.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82

5.2 Theoretical background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83

5.3 Experimental implementation . . . . . . . . . . . . . . . . . . . . . . . . . . 87

5.4 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 96

6 Using entanglement to improve the bounds on Lorentz symmetry

99

6.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 99

6.2 Violations of local Lorentz invariance . . . . . . . . . . . . . . . . . . . . . . 99

6.3 Entanglement enhanced metrology . . . . . . . . . . . . . . . . . . . . . . . 101

6.4 Spectroscopy with classically correlated 40Ca+ ions . . . . . . . . . . . . . . 104

6.5 Spectroscopy with entangled 40Ca+ ions . . . . . . . . . . . . . . . . . . . . 109

6.6 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114

7 Conclusion

118

Bibliography

121

A Normal mode structure

128

B Zeeman shift algorithm

133

C Electric multipole transition matrix elements

139

D Experimental control software

144

v
List of Figures
2.1 Earnshaw’s theorem. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 2.2 Ponderomotive force. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 2.3 Paul trap. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 2.4 Two-dimensional pseudopotential. . . . . . . . . . . . . . . . . . . . . . . . . . . 9 2.5 Micromotion. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 2.6 Axial normal modes. . . . . . . .-
 . . . . . . . . . . . . . . . . . . . . . . . . . . 12 2.7 Radial normal modes. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 2.8 Low-lying excited state structure of 40Ca+. . . . . . . . . . . . . . . . . . . . . . 17 2.9 40Ca+ Zeeman substructure. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24 2.10 Dominant multipole transitions for 40Ca+. . . . . . . . . . . . . . . . . . . . . . 31 2.11 Geometrical dependence of the coupling strength for linearly polarized l-
ight . . 32 2.12 Geometrical dependence of the coupling strength for circularly polarized light . 33 2.13 Lamb-Dicke regime. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36 2.14 Steady-state excited state probability for a damped two level system. . . . . . . 39 2.15 AC Stark shift. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40
3.1 40Ca Isotope-selective photoionization scheme. . . . . . . . . . . . . . . . . . . . 42 3.2 Neutral atomic calcium fluorescence. . . . . . . . . . . . . . . . . . . . . . . . . 43 3.3 Doppler cooling. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45 3.4 40Ca+ Doppler cooling scheme. . . . . . . . . . . . . . . . . . . . . . . . . . . . 48 3.5 Sideband cooling scheme. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50 3.6 Optical pumping. . . . . . . . . . . -
. . . . . . . . . . . . . . . . . . . . . . . . . 51 3.7 Coherent single qubit interaction. . . . . . . . . . . . . . . . . . . . . . . . . . . 52 3.8 Bloch sphere. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54 3.9 Hot Rabi oscillations. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55 3.10 Mølmer-Sørensen interaction. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58 3.11 Mølmer-Sørensen Gate. . . . . . . . . . . . . . . . . . . . . . . -
. . . . . . . . . . 59 3.12 Electron shelving method. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60 3.13 Chain of ions imaged on an EMCCD camera. . . . . . . . . . . . . . . . . . . . 60
4.1 Main components of the experimental setup. . . . . . . . . . . . . . . . . . . . . 61 4.2 Chamber, trap and oven. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62 4.3 Trap assembly. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63

vi
4.4 Diagram of vacuum chamber. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64 4.5 Permanent magnets and holders. . . . . . . . . . . . . . . . . . . . . . . . . . . 66 4.6 Low pass filter for DC electrodes. . . . . . . . . . . . . . . . . . . . . . . . . . . 67 4.7 Impedance matching circuit. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68 4.8 DC bias and capacitive dividers. . . . . . . . . . . . . . . . . . . . . . . . . . . . 70 4.9 Impedance matching. . . . . . . . . .-
 . . . . . . . . . . . . . . . . . . . . . . . . 70 4.10 Orientation of addressing beams relative to vacuum chamber. . . . . . . . . . . 72 4.11 Lattice room optical layout. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73 4.12 Effective laser linewidth measurement. . . . . . . . . . . . . . . . . . . . . . . . 74 4.13 Servo bumps. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75 4.14 729 nm laser intensity stability. . . . . . . . . . . . . . . . . . . . . -
. . . . . . . 76 4.15 Imaging setup. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77 4.16 Camera readout fidelity as a function of readout duration. . . . . . . . . . . . . 77 4.17 Hardware/software control stack. . . . . . . . . . . . . . . . . . . . . . . . . . . 79
5.1 Axial mode temperature measurements. . . . . . . . . . . . . . . . . . . . . . . 88 5.2 Pulse sequences for testing cNLQM. . . . . . . . . . . . . . . . . . . . . . . . . 91 5.3 Noisy carrier Ramsey. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92 5.4 cNLQM experimental performance. . . . . . . . . . . . . . . . . . . . . . . . . . 94 5.5 Heating rate measurement. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95 5.6 Three point Ramsey measurement. . . . . . . .-
 . . . . . . . . . . . . . . . . . . 95 5.7 cNLQM experimental procedure. . . . . . . . . . . . . . . . . . . . . . . . . . . 96 5.8 cNLQM results. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97
6.1 Parity measurement of two classically correlated ions. . . . . . . . . . . . . . . . 108 6.2 Quadrupole shift as a function of axial trap frequency. . . . . . . . . . . . . . . 109 6.3 Local beam addressing. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110 6.4 Dual carrier Mølmer-Sørensen gate. . . . . . . . . . . . . . . . . . . . . . . . . . 111 6.5 Laser control for preparation of an entangled DFS state. . . . . . . . . . . . . . 112 6.6 Entangled Ramsey spectroscopy. . .-
 . . . . . . . . . . . . . . . . . . . . . . . . 114 6.7 Measurements of the energy difference between the |D−1/2 |D+1/2 and |D−5/2 |D+5/2
states of 40Ca+. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 115 6.8 Allan deviation. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117
A.1 A linear ion chain. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128 A.2 Normal mode structure for a 4-ion linear Coulomb crystal. . . . . . . . . . . . . 132
B.1 Hyperfine structure Zeeman shift example. . . . . . . . . . . . . . . . . . . . . . 138
C.1 Example calculation of the geometric portion of an electric multipole transition matrix element. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143
D.1 Example of an Artiq generated experimental control window. . . . . . . . . . . . 151

vii
List of Tables
2.1 Typical ion trapping parameters. . . . . . . . . . . . . . . . . . . . . . . . . . . 10 2.2 Light-ion coupling strengths for typical experimental parameter configurations. . 34 3.1 Calcium natural isotope abundances and isotope shifts. . . . . . . . . . . . . . . 43 4.1 Objective specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76 D.1 Location of important Artiq control files and directories. . . . . . . . . . . . . . 146

1
Chapter 1
Introduction
1.1 Motivation
Systems of ions trapped using oscillating electric fields have proven over time to be one of the most well-controlled, accessible and pristine test beds of quantum mechanics available for experiment. Using well-focused laser beams, pairs of electronic states in individual ions can be resonantly selected and precisely manipulated. Effective interactions between the electronic states of multiple ions can be mediated via the Coulomb repulsion inherently present when simultaneously trapping multiple i-
ons in the same harmonic confining potential. This effective interaction can be leveraged to engineer complex many-body entangled states between the internal electronic states of the ions. In addition, the strongly coupled motion of the ions itself represents a controllable quantum resource, particularly when combined with laser cooling capable of lowering the temperature of even large chains of ions near to its quantum ground state.
These features have allowed trapped ion systems to develop into one of the leading technological platforms pushing the bounds of the so-called second quantum revolution [25]. In the first quantum revolution, the theory of quantum mechanics was laid out, convincingly verified by experiment and used to explain macroscopically observed phenomena that could otherwise not be explained by classical theory. In contrast, the second quantum revolution involves engineering well-controlled quantum systems to-
 perform tasks in a way that is fundamentally superior to what can be achieved by classical devices. Such tasks fall under the broad moniker of quantum information processing and includes digital quantum computation, analog quantum simulation and quantum metrology.
In this thesis, we will describe two quantum metrological experiments performed with singly-ionized atoms of 40Ca. In the first, we test the superposition principle of quantum mechanics itself, by building an interferometer out of the two branches of a superposition of the ground and first excited vibrational states of a single 40Ca ion. According to a recent theory of nonlinear quantum mechanics [52], such a state is expected to experience a relative energy shift that depends on the population we-
ightings of these two branches. This theory is

CHAPTER 1. INTRODUCTION

2

fully causal, in contrast to previous efforts and, ultimately for this reason, its effects turn out to be rather difficult to observe with standard atomic or nuclear spectroscopy. In the second experiment, we explicitly make use of entanglement as a resource by engineering a special entangled state of the internal electronic degrees of freedom of two ions that is first-order insensitive to the dominant noise source. We then use this state to experimentally determine, what was at the time, the most-
 stringent bound on violations of Lorentz invariance for the dispersion relation of the electron.

1.2 Structure
This document is organized as follows. In Chapter 2 we provide a basic overview of the most important physical concepts underlying the design of the experiments performed in this thesis. This is followed, in Chapter 3 with a summary of the basic set of the procedures and techniques common to these experiments. Then in Chapter 4, we describe the actual physical apparatus within which these experiments were performed. Finally, in Chapters 5 and 5, we describe the two experiments comprising the main -
work of this thesis. In particular, Chapter 5 covers our search for causal nonlinear corrections to quantum mechanics and Chapter 6 covers our search for violations of Lorentz invariance.

3
Chapter 2
Theoretical framework
2.1 Introduction
This chapter is intended to provide a general, but basic, overview of the physical concepts that underlie the trapped ion experiments described in Chapters 5 and 6. In Section 2.2 we describe how a combination of AC and DC electric fields can be used to confine ionized atoms in a small region of space and the classical and quantum properties of the structures that a collection of ions will form when cooled to near to their ground state of motion. In Section 2.3 we describe the electronic structure-
 of the singly-ionized 40Ca atoms that we utilize in experiments. In Section 2.4 we describe how this internal structure may be experimentally tuned via the application of an external, static magnetic field. And, finally, in Section 2.6 we describe the dynamical response of an ion’s internal and external degrees of freedom to a well-focused and coherent laser beam.

CHAPTER 2. THEORETICAL FRAMEWORK

4

2.2 Trapping ions

Ponderomotive forces and the pseudopotential approximation
The most fundamental reason for ionizing the atoms in our experiments is to leverage the strong Coulomb force in order to stably pin them down in place. But this ends up being a nontrivial task due to the fact that it is not possible to confine charged particles in free space using only static electric fields. This is known as Earnshaw’s theorem [40] and is a direct consequence of Gauss’s law, which requires that the instantaneous electric flux (and, thus, force) through any closed surface in free-
 space be zero (see Figure 2.1).
However, if an electric field is allowed to oscillate rapidly in time, then Earnshaw’s theorem no longer applies. In this case, an effective, time-averaged force can be generated that always drives a charged particle towards regions where the magnitude of the (unmodulated) electric field is weaker [34]. One can then use, for example, an oscillating electric quadrupole potential to stably trap an ion, which we will discuss in the next section [77, 23].
But first, we describe the nature of this time-averaged force, known as a ponderomotive force. We start by considering an electric field of the form:

E(r, t) = E0(r)cos(Ωt)

(2.1)

The motion of a particle of mass m and charge q placed in this field is described by:

m¨r = qE0(r)cos(Ωt)

(2.2)

Clearly, the field will cause the particle to oscillate at a frequency of Ω. But, if E0(r) is nonuniform, its mean position will also drift on a slower time scale since the net force

+

Figure 2.1: Illustration of Earnshaw’s theorem. The arrows represent electric flux lines oriented in such a way as to provide a restoring force to a positively charged test particle when perturbed in any direction. But this configuration necessarily violates Gauss’s law, since it implies a net electric flux into the sphere.

CHAPTER 2. THEORETICAL FRAMEWORK

5

accumulated over each period of its oscillation will generally be nonzero (see Figure 2.2). This motivates us to explicitly separate the trajectory of the particle into two components:

r = rM + rµ

(2.3)

where rµ describes the fast oscillations and rM describes the slower accumulated drift. We can then Taylor expand the field in Equation 2.2 about rM :

m(¨rM + ¨rµ) = q[E0(rM ) + ∇E0(rM )rµ + . . .]cos(Ωt)

(2.4)

Now, because the particle has finite inertia, it is always possible to choose a sufficiently large Ω such that the following conditions hold:

|E0(rM )| |∇E0(rM )rµ| |¨rµ| |¨rM |

(2.5) (2.6)

where both comparisons are meant to be interpreted element-wise1 and the first condition simply implies that the particle does not have a chance, during a single period of its oscillation, to substantially probe the curvature of the field. In the following we will also assume that the drift velocity satisfies the condition |r˙M | |rµΩ| such that rM does not change appreciably during a period of oscillation. However, this is not strictly necessary so long as Equation 2.6 is satisfied [23].
Under these assumptions, the expansion in Equation 2.4 can be truncated after zeroth order and a solution for rµ can be easily found2:

mr¨µ ≈ qE0(rM )cos(Ωt)

=⇒

rµ(t)

≈

−

qE0(rM mΩ2

)

cos(Ωt)

(2.7)

And by substituting this into Equation 2.4 and averaging the whole expression over a single modulation period, we can also find an approximate solution for rM :

m¨rM + m¨¨r¨µ ≈
¨

@qE@0@(r@M )@co@s@(Ω@@t) + q∇E0(rM )rµcos(Ωt)

=⇒

q2 m¨rM ≈ − mΩ2 ∇E0(rM )E0(rM )

cos2(Ωt)

q2 = − 2mΩ2 ∇E0(rM )E0(rM )

(2.8)

1For example, Equation 2.5 should be written: |[E0(rM )]i| |[∇E0(rM )rµ]i|, ∀i 2When integrating to get Equation 2.7, we assume that rµ(0) = r˙µ(0) = 0 since any initial non zero
position or velocity is incorporated into rM

CHAPTER 2. THEORETICAL FRAMEWORK

6

Figure 2.2: Illustration of a Ponderomotive force. The top is a snapshot of the particle’s position when r > rM . The bottom is a similar snapshot when r < rM . In both cases the force acts in a direction so as to restore r to rM but, because the electric field E0(r) has a finite gradient, the magnitude of the force is greater in the former case than in the latter. When averaged over a full period of modulation, the net force is known as a ponderomotive force.

where crossed out terms have a time-averaged value of zero. The last line of Equation 2.8 is the ponderomotive force that we alluded to earlier. We
can rewrite it in terms of a notional potential ψ(rM ), known as a psuedopotential:

m¨rM = −∇ψ(rM ),

ψ(rM )

=

q2E02(rM ) 4mΩ2

(2.9)

which makes it obvious that the ponderomotive force always acts to drive the particle towards a region where the magnitude of the electric field is weaker3.
In summary, if a charged particle is driven by an alternating electric field, then it will

oscillate. If these oscillations are fast enough, then the particle will not have a chance to

probe the curvature of the field throughout a single period of its motion. Because of the particle’s inertia, its oscillations will be mostly out of phase with the driving field, such that the effect of the field on these time scales is always to return the particle to nearly the same

position. But, if the field has a finite gradient, then during the half-period of oscillation when

the position of the particle is greater than its approximate mean, the force it experiences will be greater than during the other half-period when its position is less than its approximate mean. The net force experienced by the particle averaged over a full period of oscillation is

known as a ponderomotive force. This is illustrated in Figure 2.2.

3Independent even of the sign of q.

CHAPTER 2. THEORETICAL FRAMEWORK

7

Paul trap

Figure 2.3: Paul trap. Ions are trapped using a combination of RF and DC potentials applied to the red/blue blade electrodes and black endcaps.

In practice, the electrode configuration used to trap ions is similar in design to the one shown in Figure 2.3. Trapping in the radial plane is achieved by driving the red, or ”blade” electrodes, with an oscillating, radiofrequency (RF) potential VRFcos(Ωt) and, optionally, by driving the blue electrodes with a static or DC potential Uy. Trapping in the axial direction is achieved by driving the black electrodes, or ”endcaps,” with a DC potential Uz. The whole assembly is known as a ”Paul trap” af-
ter its inventor Wolfgang Paul [77].
We first consider trapping in the radial direction when Ur = 0. If the length L of the blade electrodes is large relative to their separation R, then the potential for points near the center (yellow sphere in Figure 2.3) has the form of an oscillating, two-dimensional electric quadrupole4:

ΦRF(r, t)

=

VRF/2 R˜2

(x2

−

y2)cos(Ωt)

which generates the electric field:

(2.10)

E(r,

t)

=

−∇ΦRF(r,

t)

=

−

VRF R˜2

(xxˆ

−

yyˆ)cos(Ωt)

According to Equation 2.9, the ion will then experience the pseudopotential:

(2.11)

ψ(r)

=

1 2

mωr2(x2

+ y2),

ωr = √2qmVRR˜F2Ω

(2.12)

which has the form of a harmonic confining potential with a radial trapping frequency ωr. This is illustrated in Figure 2.4.

4R˜ ∼ R. The tilde denotes the possibility that R be scaled by some geometric factor, which can be determined empirically [60].

CHAPTER 2. THEORETICAL FRAMEWORK

8

From Equations 2.5-2.6 and our explicit expression for E(r, t), we can check under what conditions the pseudopotential approximation is valid. In both cases, we find that we require:

ωr Ω

=

qV √2mΩR˜2

1

(2.13)

From Equation 2.7, we can also find the first-order correction to the pseudopotential approximation for the ion’s trajectory:

√ ri(t) = Aicos(ωrt + φi) 1 + 2

ωr Ω

cos(Ωt)

(2.14)

where ri ∈ {x, y} and Ai, φi are determined by initial conditions. In this context, the fast oscillating term in Equation 2.14 is known as micromotion.
All of this implies that there is a trade-off between choosing a larger Ω to improve the pseudopotential approximation (and reduce the micromotion) and choosing a smaller Ω to increase the radial trapping frequency (which requires some micromotion to generate the ponderomotive force in the first place). In our lab, we have a rule of thumb that ωr should be at least an order of magnitude smaller than Ω. Otherwise, it is possible to have a situation where the field is still confining, but the breakd-
own of the approximation is enough to cause practical problems. The orders of magnitude for our typical choices of trapping parameters are given in Table 2.1.
It is possible to confine ions in all three dimensions using only RF fields [77]. But for our purposes, it is more convenient to achieve confinement along the z-direction with DC fields. Ideally, this is done by applying an equal voltage Uz to both endcaps. Keeping only terms up to second order, the resulting potential5 is given approximately by:

Φendcaps(r)

=

Uz Z˜2

[z

2

−

1 (x2 2

+ y2)]

Summing this with ψ, the full potential is then:

(2.15)

Φ(r)

=

1 2

m[ωr2(x2

+ y2)

+ ωz2z2]

ωr2

=

ωr2

−

1 2

ωz2

,

ωz2

=

2Uz mZ˜2

(2.16) (2.17)

So that stable confinement is possible as long as ωr2 > ωz2/2. Typically, a nonzero voltage Uy is also applied to break the degeneracy of the trapping
frequencies in the radial plane and allow for full control over the anisotropy of the harmonic confining potential. The most general form of the Paul trap potential is then:

Φ(r)

=

1 2

m(ωx2x2

+

ωy2y2

+

ωz2z2)

5Again Z˜ ∼ Z. See footnote 3.

(2.18)

CHAPTER 2. THEORETICAL FRAMEWORK

9

Figure 2.4: The two-dimensional pseudopotential used to confine ions in the radial plane. On the left is pictured the unmodulated potential, which has the form of a quadrupole. On the right is pictured the time-averaged effect of the same potential but now modulated at an RF frequency of Ω. In both cases, what is shown is a slice through the radial plane of the full three-dimensional potential which extends a relatively large distance L/2 in both directions of the (orthogonal) z-axis. Figure adapt-
ed from [81].

where:

ωx = ωy = ωz =

q2VRF2 2m2R˜4Ω2

−

Uz mZ˜2

−

Uy mR˜2

q2VRF2 2m2R˜4Ω2

+

2Uy mZ˜2

−

Uz mZ˜2

2Uz mZ˜2

−

Uy mR˜2

(2.19) (2.20) (2.21)

CHAPTER 2. THEORETICAL FRAMEWORK

10

Physical Parameter ωr ωz Ω V R Z M
trap depth [17]

Typical Value (order of magnitude) 2π× 3 MHz 2π× 1 MHz 2π× 30 MHz 1 kV 1 mm 3 mm 10−22 g
1 eV, corresponding to a temperature of ∼ 104 K

Table 2.1: Typical ion trapping parameters. V , R and Z can vary depending on the specific design of the trapping electrodes.

Excess micromotion
Usually, it is safe to interpret the pseudopotential in Equation 2.18 quite literally, and for the remainder of this thesis unless otherwise specified we will. However, micromotion can cause several deleterious effects, and there are certain cases where it cannot be ignored. These effects are amplified if, in addition to the intrinsic micromotion required for the ponderomotive force, an extraneous or excess micromotion is present in the system. There can be multiple reasons for this:

• geometric trap imperfections (e.g. misalignment of the radial and axial potential null points),
• a small phase difference between the RF electrodes, • spurious RF pickup6 (e.g. on the axial electrodes),
• stray electric fields.

As described in [7], these effects can be incorporated by modifying the description of the ion’s trajectory in Equation 2.14:

√ ri(t) ≈ (ri + Aicos)(ωit + φi)[1 − 2(ωr/Ω)cos(Ωt)] + βsin(Ωt)

(2.22)

where ri describes a displacement of the ion’s equilibrium position due to a stray electric field Ei:

ri

≈

QEi mωi2

6Present when, for example, there is a phase difference between the RF electrodes.

(2.23)

CHAPTER 2. THEORETICAL FRAMEWORK

11

Figure 2.5: Micromotion. Left: The dashed line represents the trajectory of the ion under the pseudopotential approximation. In reality, some finite micromotion is necessary to generate the ponderomotive force. The solid line represents the ion’s trajectory when including this intrinsic micromotion to first-order. Right: The purple curve illustrates the effect of a mean displacement of the ion’s position from the null point of the pseudopotential due to a stray electric field. The red curve illust-
rates the effect of a phase imbalance between a pair of RF electrodes. In both cases, the magnitude of the micromotion is increased. This is termed ”excess” micromotion.
and β is proportional to the phase difference between electrodes. An illustration of these effects is shown in Figure 2.22.
For the experimental apparatus used in this thesis, stray electric fields were the dominant source of excess micromotion. Such fields can be caused by laser-induced charging of dielectrics near the trap (for example, the mounting structure for the trap electrodes or even thin oxide layers formed on the electrodes themselves) and may change over time. Our actual trapping apparatus includes in-situ compensation electrodes for balancing out the effect of any stray electric fields (see Chapter 4) such-
 that the trapping point (at least for a single ion) is at the true null of the quadrupole potentials (radial and axial). The procedure for doing this is described in detail in [82, 39].
Trapping multiple ions
When there are multiple ions present in a trap, we must also take into account their mutual Coulomb interaction. If the kinetic energy of the ions is large, then the resulting dynamics will generally be complicated and chaotic [73]. But with laser cooling, the kinetic energy can be reduced to within a fraction of its quantum zero-point value. In this case, the ions will crystallize close to an equilibrium configuration where each ion positions itself such that the harmonic confining force it exper-
iences is exactly balanced by the inter-ionic Coulomb repulsion. Since stable trapping requires that the confining strength be set weaker in the axial direction than in the radial directions, the structure of this crystal will be that

CHAPTER 2. THEORETICAL FRAMEWORK

12

of a linear chain oriented along the axial direction7. Residual motion is then well-described by small excursions away from this equilibrium where, to good approximation, the Coulomb repulsion can be linearized.
In Appendix A, we describe how to find the equilibrium positions and motional structure for chains containing an arbitrary number of ions (including cases where the mass and charge of the ions are nonuniform). However, we rarely worked with chains of more than two ions for the experiments covered in this thesis, so here we will provide a simpler, intuitive analysis considering only this case.
The equilibrium separation between two ions along the axial direction can be found by setting the inter-ion Coulomb repulsion equal to the confining force generated by the Paul trap:

mωz2

Z 2

=

e2 kZ2

=⇒

Z=

2e2 1/3

kmωz2

∼ 10 µm for ωz ∼ 2π × 1 MHz

(2.24)

where k = 4πε0. Now, we consider small, axial excursions away from equilibrium, characterized by the quantities δz1 and δz2 where we assume δz1, δz2 Z (see Figure 2.6). We are looking for the first-order, linear response to these perturbations, so we Taylor expand the Coulomb repulsion:

Figure 2.6: Axial normal modes. Left: Correlated, center of mass motion. Right: Anticorrelated, stretch motion. z1, z2 are the equilibrium positions of the ions and Z is their equilibrium separation. δz1, δz2 are small displacements away from equilibrium along the axial (zˆ) direction.
7Even inside the pa√rameter space of three-dimensional confinement, there still exists a finite ratio ωradial/ωaxial ≈ 0.77N/ logN below which the linearity of the ions will break and the chain will begin to develop kinks [28].

CHAPTER 2. THEORETICAL FRAMEWORK

13

FC(2,zˆ)

=

k[Z

e2 + (δz2 − δz1)]2

≈

e2 kZ2

1 − 2 δz2 − δz1 Z

=

mωz2

Z 2

−

mωz2(δz2

−

δz1)

(2.25)

where FC(2,zˆ) denotes the Coulomb force, in the z-direction, felt by the second ion due to the first ion and FC(1,zˆ) = −FC(2,zˆ). Including the trapping force, the full equations of motion are then:

mδ¨z1

=

mωz2

Z 2

−

mωz2δz1

−

mωz2

Z 2

+

mωz2(δz2

− δz1)

mδ¨z2

=

−mωz2

Z 2

+

mωz2δz2

+

mωz2

Z 2

−

mωz2(δz2

− δz1)

(2.26) (2.27)

If we define the two new coordinates δzcom = δz2 + δz1 and δzstretch = δz2 − δz1, we can add/substract Equations 2.26, 2.27 to find:

mδ¨zcom = −mωz2δzcom mδ¨zstretch = −m3ωz2δzstretch

(2.28) (2.29)

The center of mass coordinate δzcom describes the correlated vibrational motion of the ions and the stretch coordinate δzstretch describes the anti-correlated vibrational motion. Any allowed state of motion can be written as some superposition of these coordinates. The center of mass vibrational frequency, ωz,com = ωz, is the same as the single-ion vibra√tional frequency. On the other hand, the frequency of the stretch mode is larger: ωz,stretch = 3ωz.
The same procedure can be repeated for displacements in the radial directions. To be specific, we will consider the x-direction, but the following holds for the y-direction as well. First, we linearize the Coulomb repulsion:

e2

e2

|FC| = k[Z2 + (δx2 − δx1)2] ≈ kZ2 1 −

δx2 − δx1 Z

2

≈

mωz2

Z 2

(2.30)

In this case, the force in the z-direction is also affected (see Figure 2.7) but, to first-order in δx1, δx2, the change is negligible:

FC(2,zˆ) = |FC |cos(θ) = |FC | FC(2,xˆ) = |FC |sin(θ) = |FC |

Z Z2 + (δx2 − δx1)2 ≈ |FC|

δx2 − δx1 Z2 + (δx2 − δx1)2

≈

|FC| δx2

− δx1 Z

(2.31) (2.32)

CHAPTER 2. THEORETICAL FRAMEWORK

14

Figure 2.7: Radial normal modes. Left: Correlated, center of mass motion. Right: Anticorrelated, rocking motion. The rocking motion also affects the force in the z-direction but, to first-order in δx1, δx2, this is negligible.

where FC(1,xˆ) = −FC(2,xˆ) . Including the trapping force, the equations of motion are:

mδ¨x1

=

−mωx2δx1

+

1 2

mωz2(δx2

−

δx1)

mδ¨x2

=

−mωx2δx2

−

1 2

mωz2

(δx2

−

δx1)

(2.33) (2.34)

And we can define the new coordinates δxcom = δx2 + δx1, δxrocking = δx2 − δx1 such that:

mδ¨xcom = −mωx2δxcom mδ¨xrocking = −m(ωx2 − ωz2)δzrocking

(2.35) (2.36)

Once again, the radial center of mass vibrational frequency is equal to the single-ion vi-
brational frequency. ωx,com = ωz. However, as opposed to the axial stretch mode, the vibrational frequency of the radial rocking mode is smaller than for the center of mass mode: ωx,rocking = ωx2 − ωz2.
Several observations can be generalized to larger ion chains:

• For homogeneous chains, there will always be a unique center of mass mode.

We can construct a center of mass mode equation for an N -ion chain the same way as we

did for two, by summing the equivalent of Equations 2.26-2.27 and 2.33-2.34. By symmetry,

the Coulomb repulsion terms on the right-hand side will cancel out and on the left-hand side

we will have

N i

mδ¨αi

=

mδ¨αcom

where

α

∈

{x, y, z}.

However,

this

only

works

if

all

of

the

masses are equal otherwise there will not generally be a unique center of mass mode.

CHAPTER 2. THEORETICAL FRAMEWORK

15

• The center of mass mode is the lowest frequency made in the axial direction, but the largest frequency mode in the axial direction.

The reason for this is that any anti-correlated motion in the axial direction requires the ions to come closer to each other than their equilibrium separation and this requires more energy. On the other hand, anti-correlated motion in the radial directions only results in the ions being further apart from each other.

• The splitting of the mode frequencies in the radial directions is much smaller than in the axial direction.

This can be understood by noting that a slight change to the position of one ion in the axial directions causes a change in the separation distance of:

Z + δz

δz

=1+

Z

Z

whereas the same perturbation in the radial direction only changes the separation distance

by:

√ Z2 + δx2

1 δx 2

∼1+

Z

2Z

(2.37)

which is much smaller.

• The lowest-order correction to Equation 2.31 results in a coupling between the radial rocking mode and the axial stretch mode.

This can be resonantly enhanced if the two modes are similar in frequency [84] and we have measured this effect experimentally.

Quantum treatment of trapped ion motion
So far our description of ion trapping has been entirely classical. But with laser cooling, we often work in a regime where the thermal energy of the ions is comparable to their quantum ground state energy. This means that a full, quantum description of the motion is necessary. On the other hand, it turns out that treating the confining potential as classical remains completely sufficient. So we can carry forward all of our previous results and quantize the ionic motion in an ad hoc manner by cons-
tructing the appropriate classical Hamiltonian and applying the canonical quantization to the motional degrees of freedom. Then one will find that the Hamiltonian for a linear chain of ions is described by a collection of quantum harmonic oscillators [51, 47]:,

N

Hˆ =

να,l(aˆ†α,laˆα,l + 1/2)

α∈(x,y,z) l=1

(2.38)

CHAPTER 2. THEORETICAL FRAMEWORK

16

where each l is associated with a normal mode solution to Equation A.14 and aˆ†α,l, aˆα,l are annihilation and creation operators satisfying the normal commutation relation:

[aˆα,l, aˆ†α,k, ] = δlk

(2.39)

In this basis, the motion of the ith ion relative to its equilibrium position along the α spatial axis is described by the quantum position and momentum operators:

N

xˆα,i =

βi(,αl )

l=1

2miνα,l (aˆ†α,l + aˆα,l)

N

pˆα,i = i

βi(,αl )

l=1

miνα,l 2

(aˆ†α,l

−

aˆα,l)

(2.40) (2.41)

such that [xˆα,i, pˆα,j] = i δij. Here β(lα) is a normalized vector describing the participation

of as

the βi(,αl )

ions in√the ∼ 1/ N ,

lth mode (see Appendix A). where this relationship holds

In general, exactly for

scales with the number of the center of mass modes.

ions The

characteristic spread of the position-space wavefunction for the ion in the lth mode is:

n|xˆ2α,i|n = |βi(,αl )|√2n + 1 2miνα,l

(2.42)

where |n refers to the nth Fock state. For a single ion of calcium, this amounts to about 10 nm in the ground state. This justifies our linearization of the Coulomb force in the preceding section for typical experimental conditions, where the mean Fock state occupancy n is rarely more than 10 (and usually much smaller).
Note: these results assume that the pseudopotential approximation in Equation 2.18 holds exactly. It is possible to perform a similar quantization of the motion while explicitly taking into account the time modulation [58] of the trapping potentials. The main takeaway is that the pseudopotential still remains a good approximation even in the quantum case. The dominant correction manifests when an ion is addressed by laser light. In this case, in the ion’s frame of reference, it appears as though t-
he light is modulated at the frequency of its micromotion.

CHAPTER 2. THEORETICAL FRAMEWORK

17

2.3 Electronic structure of 40Ca+

42P3/2

6.924 ns

βP

-2βP
42P1/2
6.91 ns

40Ca+
Electronic energy
levels

393 nm
21.50 MHz
397 nm
21.57 MHz

42S1/2

854 nm
1.351 MHz

850 nm
0.152 MHz

866 nm
1.481 MHz

32D5/2

2βD

1.169 s

-3βD

32D3/2

1.176 s

732 nm
135.3 mHz

729 nm
136.3 mHz

Figure 2.8: Low lying excited state structure of 40Ca+. Lengths denote transition wavelengths and frequencies denote the corresponding linewidths. Times characterize the typical duration that an excited state will be occupied before it spontaneously decays to a lowerenergy state via the emission of a photon. The βs denote the spin-orbit splitting of the Enl energy levels into fine structure doublets characterized by a particular value of j. These are labelled according to the standard spectroscopi-
c notation (Equation 2.52) Each fine structure level has a 2j + 1 degeneracy corresponding to the eigenstates of Jˆz.

Central field approximation
The experiments in this thesis were performed using singly-ionized atoms of 40Ca+, which has a ground state configuration of [Ar]4s1. Ions (or atoms) with configurations such as this, containing only a single electron in the valence shell, are said to be hydrogen-like since they can be pictured as a single, weakly-bound valence electron orbiting a much more strongly bound, positively-charged and spherically-symmetric8, inner argon core. The lowlying excited state structure is almost entirely dicta-
ted by the coordinates of the valence
8Since the total orbital angular momentum of any closed electronic subshell in an isolated atom must be zero, the charge distribution of the argon core must be spherically symmetric.

CHAPTER 2. THEORETICAL FRAMEWORK

18

electron, while the wavefunction for the core electrons remains essentially constant. Thus, we can provide a reasonable description of the excited state structure with the following central, single-particle Hamiltonian, which only tracks the coordinates of the valence electron [53]:

Hˆ CF

=

pˆ2 2me

+

UCF(rˆ)

(2.43)

Here, me is the valence electron’s mass9, pˆ is its momentum, rˆ is its separation from the

nucleus and UCF is its potential energy, which results from the combination of its interaction with the nuclear charge and with the mean field of the inner core.

Coarse structure
Just as with hydrogen, the spherical symmetry of HˆCF implies that states with welldefined energy also have a well-defined angular momentum Lˆ = ˆr × mevˆ. That is:

HˆCFψnlml (ˆr) = Enlψnlml (ˆr) Lˆ2ψnlml(ˆr) = 2l(l + 1)ψnlml(ˆr) Lˆzψnlml(ˆr) = mlψnlml(ˆr)
where the wavefunction can be separated into radial and angular components:

(2.44) (2.45) (2.46)

ψnlml(ˆr) = Rnl(rˆ)Ylml(θˆ, φˆ)

(2.47)

with Ylml the normal angular momentum eigenstates (spherical harmonics). The radial wavefunction Rnl determines the separation between the valence electron
and the nucleus and groups its stationary states into distinct shells, characterized by the quantum number n, and consisting of states with different angular momenta but a similar mean nuclear separation. The precise value of the mean nuclear separation depends on l due to a centrifugal term in HˆCF [41]. Intuitively, states with higher orbital angular momentum are less likely to be found nearer to the nucleus.
The same is true for hydrogen. However, HˆCF does not have the ”accidental” degeneracy present in the (nonrelativistic) hydrogen Hamiltonian, where Enl = En [31]. The presence of the inner electrons acts to shield the valence electron from experiencing the full nuclear charge but states with smaller l, that spend more time closer to the nucleus, experience less shielding and, thus, a stronger attraction to the nucleus. This effect is enough to shift the energy of the |n = 4, l = 0, ml states of 40-
Ca+ below the energy of the |n = 3, l = 2, ml states and largely defines the ion’s coarse electronic structure. The splitting between the lowest excited states is on the order of tens of electronvolts (as shown in Figure 2.8), leading to transition energies in the visible spectrum, which is typical for singly-ionized alkaline earth metals.

9Or, better, the reduced mass of the valence electron and nucleus.

CHAPTER 2. THEORETICAL FRAMEWORK

19

In order to fully describe a stationary state of the ion, we must also specify the orientation of the valence electron’s intrinsic spin. This is defined relative to its observed magnetic dipole moment µˆ S:

Sˆ µˆ S = −gsµB

(2.48)

where ge ≈ 2 is the electron g-factor and µB = e /2me is the Bohr magneton. Sˆ obeys an analogous set of relationships to Lˆ:

Sˆ2ψnlml(ˆr)|s, ms = 2s(s + 1)ψnlml(ˆr)|s, ms Sˆzψnlml(ˆr)|s, ms = msψnlml(ˆr)|s, ms

(2.49) (2.50)

except in this case we always have s = 1/2, which restricts ms = ±1/2. The set of operators {HˆCF, Lˆ2, Lˆz, Sˆ2, Sˆz} constitute a complete set of commuting observ-
ables (CSCO) [22] and the corresponding quantum numbers are sufficient to fully specify an arbitrary stationary state of 40Ca+ as:

|n, l, ml, s, ms = d3r ψnlml(r)|r |s, ms

(2.51)

But note that there is a high degree of degeneracy since states which share the same n and l but different ml and ms have the same energy under HˆCF. According to the rules of angular momentum in quantum mechanics, for a given value of l, ml is allowed to be any of {−l, −l + 1, ..., l − 1, l} leading to a degeneracy of (2l + 1). And since, for each of these values, ms can be either ±1/2, the total degeneracy of states with energy Enl is twice this 2(2l + 1).
It is standard to label ionic energy levels using the spectroscopic notation:

n2s+1l

(2.52)

where we write, for historical reasons, L = 0, 1, 2, 3 as S, P, D, F (and rarely have to consider
higher L). For example, the energy level containing the states |n = 3, l = 2, s = 1/2, ml, ms is referred to as 32D.

Fine structure
The description in the previous section was implicitly nonrelativistic. However, our experiments are sensitive to the fine structure resulting from leading-order relativistic corrections to the Schrödinger equation. The scale of these effects is on the order of several tenths of an electron volt (two orders of magnitude smaller than the shielding effect from the inner electrons for low angular momentum states).
Of several effects at this scale, the so-called spin-orbit correction is the most qualitatively important since it further breaks the degeneracy of the electronic structure. The underlying

CHAPTER 2. THEORETICAL FRAMEWORK

20

relativistic concept is the effective magnetic field experienced by a charged particle, in its own frame of reference, when moving relative to a stationary electric field. This principle applies to the valence electron because of its orbital motion through the central field. Thus, it experiences an effective magnetic field, which has the specific form [31]:

1 Beff = mc2

1 ∂UCF erˆ ∂r

Lˆ

(2.53)

Beff then back couples to the electron through its magnetic dipole moment, giving rise to the spin-orbit interaction:

HˆS−O = −µˆ S · Beff = f (rˆ)Lˆ · Sˆ

(2.54)

HˆS−O can be treated perturbatively, but Lˆz and Sˆz do not commute10 with it meaning that (l, ml, s, ms) are no longer good quantum numbers11 in the sense of degenerate pertur-
bation theory [22]. Instead, we construct the total angular momentum operator:

Jˆ = Lˆ + Sˆ

(2.55)

which we expect should be conserved in the absence of any external fields (and, therefore, any external torque). Then:

Lˆ · Sˆ = 1 (Jˆ2 − Lˆ2 − Sˆ2) 2

(2.56)

and the associated operators Jˆ2 and Jˆz do commute with HˆS−O, as can be easily checked. So (l, s, j, mj) are good quantum numbers and the first-order perturbative shift of the energies due to the spin-orbit interaction can be easily calculated since it is diagonal in the good

basis:

∆ES(n−lsOj) = n, l, s, j, mj|HˆS−O|n, l, s, j, mj

= β{j(j + 1) − l(l + 1) − s(s + 1)}

2
βnl = 4m2ec2

1 ∂UCF rˆ ∂r

(2.57) (2.58)

The spin-orbit interaction couples the orbital angular momentum to the spin such that, for stationary states, their relative orientation, as characterized by j, is always well defined. Moreover, j-states with the same l but different s are no longer degenerate, as is clear from Equation 2.57. Instead, the energy levels n2s+1l are broken into fine structure doublets specified by an additional subscript denoting the value of j:

10Recall, that for any angular momentum operator Aˆ , it follows that [Aˆi, Aˆj] = i ijkAˆk. 11Or, equivalently, {Hˆ , Lˆ2, Lˆz, Sˆ2, Sˆz} no longer form a CSCO.

CHAPTER 2. THEORETICAL FRAMEWORK

21

n2s+1lj ≡ |n, l, s, j, mj

(2.59)

The degeneracy of these fine structure levels is reduced to 2j + 1. As a final note, we mention that 40Ca does not have hyperfine structure12. This turns
out to be a general feature of any atom whose nucleus has both an even number of protons and an even number of neutrons13 [66].

Spontaneous emission

When the ion is in an excited state, it will decay down to the ground state (or some lower-energy excited state) via emission of a photon with some finite probability that grows exponentially with time. This is known as spontaneous emission and can only be fully understood with a fully quantum treatment of the electromagnetic force [99]. For our purposes, this can be treated as a phenomenological fact.
The exponential decay constant is a property of a particular transition and is related to the corresponding matrix element of the vacuum field operator. Thus, transitions with larger decay constants also couple more strongly to externally applied fields. The decay constant is typically referred to as the Einstein A coefficient and is defined such that for two electronic states |g and |e (|e the higher energy of the two):

dpe dt

=

−Aeg pe

(2.60)

where pe(t) is the probability of measuring the ion to be in the state |e . When there are multiple lower energy levels, the full decay rate out of the excited level
is equal to:

Ae = Aei
i

(2.61)

where the sum is over all unoccupied, lower energy levels {|i }. The inverse of this quantity
is known as the lifetime of the excited state. In Figure 2.8, we give the experimentally measured lifetimes for the relevant excited states in 40Ca+. We also list the rates associated
with each transition Aei/2π.

12Which results from interactions between the valence electron and higher multipole moments of the nucleus when present
13Only five stable nuclei have both an odd number of protons and an odd number of neutrons, so for practical purposes, one can usually assume that an atom with an even mass number has no hyperfine structure.

CHAPTER 2. THEORETICAL FRAMEWORK

22

2.4 Zeeman substructure
The remaining 2j+1 degeneracy present in the fine structure levels of 40Ca+ can be broken by applying a static magnetic field Bext through what is referred to as the Zeeman effect. If the field is homogeneous, then it couples to the ion solely through its magnetic dipole moment µˆ :

HˆZeeman = −µˆ · Bext

(2.62)

where µˆ has contributions from both the spin of the valence electron and its orbital motion. The former is given by Equation 2.48. To find the latter we begin by defining the vector potential:

such that :

B A = (−yxˆ + xyˆ)
2

(2.63)

Bext = ∇ × A = Bzˆ

(2.64)

where we have taken the magnetic field to point in the zˆ-direction without any further loss of generality since, in the absence of the external magnetic field, the ion does not have a well-defined absolute orientation in space14. The specific choice of the z-axis is arbitrary but consistent with our choice of the Lˆz and Sˆz operators in the previous section.
Now we can treat the field-ion interaction semi-classically by modifying the canonical momentum in the central-field Hamiltonian in Equation 2.43 pˆ → pˆ + eA(ˆr), such that:

Hˆ CF

[pˆ →
A

+ eA(ˆr)]2 2me

+

UCF(rˆ)

pˆ2

e2A2 e

= 2me

+ UCF +

2me

+

(pˆ · A + A · pˆ) 2me

pˆ2 =
2me

+

UCF

+

e2A2 2me

+

e Lˆ 2me

·

B

(2.65) (2.66) (2.67)

The first two terms in Equation 2.67 are just the original central-field Hamiltonian HˆCF. The third, so-called diamagnetic term, term involves a two-photon process where the first photon induces a magnetic dipole moment that the second photon interacts with. This term can always be neglected for the field strengths achievable in our laboratory15. The last term
can be interpreted as the interaction of the magnetic field with the magnetic dipole moment

14For this reason, applying a magnetic field is sometimes referred to as ”setting the quantization axis of

the ion.”

15We

can

ask

when

e2 A2 2m

∼

eBa20 2m

µBB, which occurs when B

ea20 ∼ 105 T.

CHAPTER 2. THEORETICAL FRAMEWORK

23

due to any anisotropic orbital motion of the valence electron (producing a current-loop in the classical picture):

Thus:

µˆ L

=

− e Lˆ 2m

=

−glµB

Lˆ

(2.68)

µˆ = − µB (glLˆ + gsSˆ) ≈ − µB (Lˆ + 2Sˆ) = − µB (Jˆ + Sˆ)

(2.69)

where in the second approximate equality we have taken16 gl ≈ 1 and gs ≈ 2. With the addition of HˆZeeman, the full Hamiltonian describing the ion’s internal structure
is now:

Hˆ = HˆCF + HˆFS + HˆZeeman

(2.70)

where HˆFS describes the leading order fine structure effects including HˆS−O and all of similar

orders of magnitude. In practice, we typically apply a magnetic field of about 4 Gauss, which

leads to Zeeman shifts on the order of |HˆZeeman/h| ∼

µB h

B

∼

1

MHz.

In comparison, the

spin-orbit term HˆS−O creates a frequency splitting on the order of THz (see Figure 2.8).

Therefore, we can safely treat HˆZeeman as a perturbation on top of the fine structure.

The first-order Zeeman shift of the energy levels is then given by:

∆EZ(nee,lm,sa,jn,mj) = − n, l, s, j, mj|HˆZeeman|n, l, s, j, mj = µB n, l, s, j, mj|Jˆ + Sˆ|n, l, s, j, mj · B

(2.71) (2.72)

The states |n, l, s, j, mj are not eigenstates of Sˆ, but we can compute the expectation value n, l, s, j, mj|Sˆ|n, l, s, j, mj using the projection theorem [22]:

Sˆ = Sˆ · Jˆ Jˆ 2j(j + 1)

(2.73)

Such that the magnetic substates of the fine structure levels are each shifted by an amount17:

∆EZ(nee,lm,sa,jn,mj) = gJ µB Bmj

(2.74)

that is linear in the magnetic field strength. Here the quantity gJ is known as the Landè g-factor and is given by:

j(j + 1) − l(l + 1) + s(s + 1)

gJ = 1 +

2j(j + 1)

(2.75)

16gl is not exactly one for several reasons including the fact that me should be replaced by the reduced
mass. 17A good quantity to remember here is the µB/h ∼ 1.4 MHz/Gauss.

CHAPTER 2. THEORETICAL FRAMEWORK

24

(a) 42P3/2

(b)
-3/2 -1/2 -1/2 -3/2

Energy

42P1/2

B = 4 Gauss

32D5/2 32D3/2

-1/2 -1/2
-5/2 -3/2 -1/2
~7 MHz -1/2
-3/2 -5/2
-3/2 -1/2 -1/2 -3/2

32D5/2 32D3/2

42S1/2

-1/2
~11 MHz
-1/2

mj

Figure 2.9: 40Ca+ Zeeman substructure. (a). For typical operating fields of magnitude |B| ∼ 4 Gauss, the Zeeman shift of the 40Ca+ fine structure magnetic sublevels is approximately linear with field strength and proportional to Jˆz. At 4 Gauss, nonlinear corrections are on the order of several Hz or 1 part per million relative to the linear response. (b). Substantial mixing between, for example, the 32D5/2 and 32D3/2 does not occur until the external field reaches a value of around 3 Tesla (where-
 it begins to become comparable to the effective, internal magnetic field due to the motion of the valence electron around the nucleus (Equation 2.53).
The first-order shift in Equation 2.74 might as welll have been generated by the notional interaction −µˆ J · B with µˆ J = gJ µBJˆ, even though the actual dipole moment is proportional to (Jˆ + Sˆ).
An illustration of the Zeeman effect is given in Figure 2.9. The first-order approximation of the Zeeman effect is sufficient for all the work performed in this thesis. However, in Chapter 6 we do need to consider higher-order corrections more quantitatively. It is possible to treat HˆZeeman on an equal footing with HˆFS by rewriting HˆZeeman in the coupled basis |n, l, s, j, mj , summing it with HˆS−O and then diagonalizing the result. An algorithm for performing this is given in Appendix B and t-
he result of this more rigorous treatment is plotted in Figure 2.9(b) for a wide range of magnetic field strengths. At 4 Gauss, the leading correction to Equation 2.74 (nonlinear in B) is on the order of several Hz.

CHAPTER 2. THEORETICAL FRAMEWORK

25

2.5 Effect of external electric fields on ion structure

In this section, we ask what effect a static external electric field E(r) generated by the potential φ(r) has on the internal structure of an ion. Of course, there is an interaction with the net charge of the ion and, since we assume the ion is trapped, the field at the center of mass position of the ion r0 must be zero E(r0) = 0. However, this is only ever true in the time-averaged sense due to the ion’s micromotion, vibrational motion and ubiquitous, fluctuating ambient field noise. Moreover, a -
field can have spatial variations over the length scale of an ion such that E(r0) = 0 but E(r) = 0 where r is the position of the valence electron.
For these reasons, we will assume a quasi-static electric field such that the time dependence is slow relative to the response time of the ion’s internal degrees of freedom18. And we will expand the electric potential about the center of mass position of the ion, leading to an interaction Hamiltonian described in terms of the ion’s multipole moments:

where:

Hˆ E

=

eΦ(r0)

−

dˆ

·

E(r0)

−

1 6

Qˆ ∇E(r0)

+

...

(2.76)

dˆi = −erˆi Qˆij = −e(3rˆirˆj − |ˆr|2δij)

(2.77) (2.78)

are the electric dipole and quadrupole operators. This is a semi-classical treatment, and Equation 2.76 is exactly analogous to the classical multipole expansion [35] of a charged particle interacting with an externally sourced potential after performing the canonical quantization. The quasi-static assumption is reflected in the fact that we do not explicitly reference time in Φ and its derivatives, since we assume that these are essentially constant over the interaction time scales which we will -
consider.

Electric monopole and dipole interactions
The first term on the right-hand side of in Equation 2.76 describes the interaction of the field with the ion’s net charge, which does not affect its external structure since we assume the field strengths are small enough such that this quantity is conserved (no further ionization). The second term is the electric counterpart to HˆZeeman in Equation 2.62. However, in contrast to its magnetic dipole moment, the electric dipole moment for stationary states of 40Ca+ is generally zero. This is most ea-
sily argued by making use of the parity operator πˆ whose action is an inversion of spatial coordinates. Fine structure eigenstates have a well-defined parity [22]:
18In other words, we assume that the time scale over which the electric field changes is slow enough to be considered adiabatic – no instantaneous jumps between eigenstates of the internal Hamiltonian.

CHAPTER 2. THEORETICAL FRAMEWORK

26

πˆ|n, l, s, j, mj = (−1)l|n, l, s, j, mj and the dipole operator is odd under parity:
πˆdˆπˆ† = −eπˆˆreπˆ† = eˆre = −dˆ Therefore, taking α to subsume all quantum numbers other than l:

(2.79) (2.80)

α, l|dˆ|α, l = α, l|πˆ†πˆdˆπˆ†πˆ|α, l = (−1)2l α, l|πˆdˆπˆ†|α, l = − α, l|dˆ|α, l

(2.81)

which implies dˆ = 0. Similar to our interpretation of the diamagnetic term in the previous section, the electric
field can induce a dipole moment in the ion by mixing fine structure states, which it will then interact with. The resulting energy shift can be found with second-order perturbation theory:

∆E(n,l,s,j,mj) =

| n , l , s , j , mj|dˆ · E|n, l, s, j, mj |2

(n ,l ,s ,j ,mj )

Enl − En l

(2.82)

But for the low-lying excited states of 40Ca+, |Enl − En l |/h ∼ 102 THz. And the
numerator in Equation 2.82, which is related to the spontaneous emission rate from the higher to the lower of {|n, l, j, mj |, |n , l , j , mj } is typically no more than ∼ 102 MHz. Therefore, the quadratic Stark shift should be on the order of19 10−6 Hz / (V/m)2. For
typical field strengths and parameters of our experiments, this effect is negligible.

Electric quadrupole interaction
In contrast to the dipole operator, the quadrupole operator Qˆ :

Qˆij = −e(3rˆirˆj − |ˆr|2δij)

(2.83)

is even under parity, allowing for the possibility of fine structure states with a permanent quadrupole moment. A finite electric field gradient at the position of the ion will then cause an energy shift:

∆Equadrupole

1 =−
6

Qˆ

∇E(r0)

(2.84)

It turns out that 32D5/2 level of 40Ca+ does have a permanent quadrupole moment. That is to say, in general:

32D5/2, mj|Qˆ |32D5/2, mj = 0
19Which agrees with measured values [100]

(2.85)

CHAPTER 2. THEORETICAL FRAMEWORK

27

Moreover, because of the static trapping potential in the axial direction (Equation 2.15), there will always be a finite electric field gradient at the position of the ion:

Eendcaps(r)

=

Uz Z˜2

[xxˆ

+

yyˆ

−

2zzˆ]

=

mωz2 [xxˆ 2

+

yyˆ

−

2zzˆ]

∇Eendcaps

=

mωz2 2

1 

1


 −2

(2.86) (2.87)

and, thus, a corresponding shift of the 32D5/2 energies. If we assume that the electric field gradient is entirely due to the trapping potential and that there are no DC potentials applied to the radial electrodes, then the magnitude of this shift is given by [81, 85, 50]:



∆D5/2 quadrupole

=

mωz2 e

|Q32

D5/2

|A

×

−1 
1/5
4/5

if if if

mj mj mj

= = =

±5/2 ±3/2 ±1/2

(2.88)

where |Q32D5/2| characterizes the magnitude of the 32D5/2 quadrupole moment and is given by the reduced matrix element:

|Q32D5/2 | = −e 32D5/2||rˆ2C0(2)||32D5/2

(2.89)

where Cl(m) is a Racah normalized spherical harmonic

4π 2l+1

Ylm

(θ,

φ)

and

0

≤

1

is

a

geomet-

rical factor that takes into account the orientation of the electric field with the quantization

axis of the ion. This is a small but measurable effect (typically on the order of 1-10 Hz), as

will be discussed in Chapter 6. A detailed derivation of Equation 2.88 is given in [50].

CHAPTER 2. THEORETICAL FRAMEWORK

28

2.6 Light-ion interactions

Basic interaction

Electromagnetic fields oscillating with frequencies near the frequency splittings of the bare atomic states are capable of resonantly driving population20 between these states. In our experiments, we use focused laser beams for this purpose, which are most simply modeled as traveling, monochromatic plane waves described by a vector potential A in the radiation gauge ∇ · A = 0 of the following form:

A(r, t) = A0 ˆei(k·r−ωLt) + c.c. 2

(2.90)

where k = (2π/λ)kˆ is the laser beam’s wave vector in terms of its wavelength λ and its direction of travel kˆ and ωL is its corresponding frequency related by the vacuum dispersion relation ωL/|k| = c (with c the speed of light in vacuum). The corresponding electric and magnetic fields are then given by:

E(r, t)

=

∂A −
∂t

=

1 2

(iωL

A0

)ˆei(k·r−ωL

t)

+

c.c.

B(r, t)

=

∇

×

A

=

1 2 iA0(k

×

ˆ)ei(k·r−ωLt)

+

c.c.

(2.91) (2.92)

The effect of the vector potential A can be incorporated into the atomic Hamiltonian the same way as in Equation 2.65. Just as we did there, if we drop the diamagnetic term and use the fact that [A(ˆr), pˆ] = 0 in the radiation gauge, then the total semiclassical Hamiltonian can be broken down into two components Hˆ0 and Hˆint such that [22]:

Hˆ = Hˆ0 + Hˆint

(2.93)

where Hˆ0 represents the ”bare” atomic Hamiltonian due to the central field, fine structure and, perhaps, a static magnetic field as in Section 2.4:

Hˆ0 = Ei|Ei Ei|, |Ei ∼ |ni, li, ji, (mj)i
i
And Hˆint captures the interaction with the light field:

(2.94)

Hˆ int

=

e A(ˆr) m

·

pˆ

=

1 2

eA0 e−iωLteik·ˆrˆ m

·

pˆ

+

h.c.

1 =
2

e−iωLt

Ei

|

eA0 m

eik·ˆrˆ

·

pˆ

+

h.c.|Ej

|Ei

Ej |

ij

20By which we mean the probability of finding the atom in a particular state when measured.

(2.95) (2.96)

CHAPTER 2. THEORETICAL FRAMEWORK

29

Interaction picture

It is usually convenient to perform calculations using the time-dependent basis defined by the transformation |E˜i = Uˆ |Ei , where:

Uˆ = exp(iHˆ0t/ )

(2.97)

This is referred to as moving to the interaction picture with respect to the bare Hamiltonian Hˆ0. An arbitrary operator Aˆ in this reference frame is transformed according to:

Aˆ → Aˆ˜ = Uˆ AˆUˆ † and the Hamiltonian is redefined as:

(2.98)

Hˆ → Hˆ˜ = Uˆ Hˆ Uˆ † + i (∂tUˆ )Uˆ † = Uˆ HˆintUˆ †

such that the interaction picture Schrödinger equation retains the familiar form:

Hˆ˜ is given explicitly by:

i ∂t|ψ˜ = Hˆ˜ |ψ˜

(2.99) (2.100)
(2.101)

Hˆ˜ = 1 2

|Ei

Ej |

e−i∆(ij−)t

Ei|

eA0 m

eik·ˆrˆ

·

pˆ |Ej

+ e−i∆(ij+)t

Ei

|

eA0 m

e−ik·ˆrˆ

·

pˆ |Ej

ij

(2.102)

where ∆(ij±) = ωL ± Ei−Ej when i > j and ∆(j±i ) = −∆(ij±). Note that expectation values in the interaction picture are consistent with the lab frame:

ψ˜|Aˆ˜|ψ˜ = ψ|Uˆ †Uˆ AˆUˆ †Uˆ |ψ = ψ|Aˆψ

(2.103)

Rotating wave approximation
It can be argued (for example in [32]) that the faster-oscillating terms in Equation 2.102 play a less significant role in the time evolution described by Equation 2.101. In this case, we can make a rotating wave approximation (RWA) by discarding terms that oscillate faster than some threshold value21. If we assume that the center frequency of the light field is tuned near a particular transition |Eα → |Eβ , such that ωL ∼ ∆(α−β), then it is often a good approximation to set the RWA threshold low -
enough so that only terms including |Eα Eβ|
21In practice, the validity of this approximation can typically be confirmed through direct simulation.

CHAPTER 2. THEORETICAL FRAMEWORK

30

in Hˆ˜ are retained. This is sometimes referred to as the two-level approximation. In this case, the counter-rotating terms that oscillate at ∆(α+β) are also neglected, so we have:

where: and σˆαβ = |Eα Eβ|.

Hˆ˜RWA =

Ωαβ 2

e−i∆(α−β)tσˆαβ

+

h.c.

Ωαβ =

Eα|

eA0 m

eik·ˆrˆ

·

pˆ |Eβ

(2.104) (2.105)

Multipole decomposition

Just as in Section 2.5, it is standard to expand the plane wave term in Equation 2.105 about the center of mass position of the ion ˆr0. If we label the position of the valence electron as ˆre = ˆr − ˆr0, then we have:

Eα

|

eA0 m

eik·ˆrˆ

·

pˆ |Eβ

= eik·ˆr0

Eα|

eA0 m

[1

+

ik

·

ˆre

+

.

.

.]ˆ

·

pˆ |Eβ

(2.106)

It can be shown that the first term in the expansion reduces to an electric dipole interaction of the form discussed in section 2.5, the second term reduces to the sum of an electric quadrupole transition of the form discussed in section 2.5 and a magnetic dipole interaction of the form discussed in section 2.4. The third term leads to an electric octupole interaction and a magnetic quadrupole interaction and so forth.
The scaling of these terms, from one multipole to the next higher order, goes as ka0, which is on the order of 10−4 for optical transitions. The ratio of a 2K electric multipole transition over a 2K magnetic multipole transition goes as ≈ 10−2. Moreover, electric and magnetic multipole moments of the same order have opposite parity, so generally do not contribute to the same transition (based on a similar argument as in Section 2.5). For these reasons, it is usually only necessary to consider the -
leading order term in Equation 2.106 and it is customary to denote the transition by the multipole interaction corresponding to this term. For example, electric and magnetic dipole transitions are referred to as E1 and M1 transitions, respectively. Electric and magnetic quadrupole transitions are referred to as E2 and M2 transitions, respectively. And so forth. A diagram illustrating the relevant multipole transitions for 40Ca+ is given in Figure 2.10.
In this thesis, we only work with electric multipole transitions22. The coupling strength of an arbitrary electric 2K-pole transition between the states |Eα = |n , l , j , mj and |Eβ = |n, l, j, mj can be written as [95]:

22Though, in principle, M1 transitions are available. See Figure 2.10 and [44].

CHAPTER 2. THEORETICAL FRAMEWORK

31

Figure 2.10: Dominant multipole transitions for 40Ca+. Solid lines represent transitions utilized in this thesis. Not shown are the various M1 transitions between magnetic sublevels of other hyperfine levels other than S1/2.

K

ΩKαβ =

gKq(θ, ρ) Eα|HˆqEK |Eβ

q=−K

(2.107)

where gKq(θ, φ) takes into account the geometry of the laser light and its polarization relative to the quantization axis of the ion23 (see Figure 2.11(a)). This corresponds to the quantity YKq(kˆ)·ˆ in Appendix C, where it is fully defined. For reference, we plot gKq(θ, ρ) for K = 1
and K = 2 in Figure 2.11. We also plot this function for circularly polarized light (relative to the direction of propagation kˆ) in Figure 2.12, though, in this case, it only depends on the angle θ between kˆ and the quantization axis of the ion.
The matrix element in Equation 2.107 is given explicitly by:

Eα|HˆqEK |Eβ = 8πeE0(ik)K−1bK (−1)j −mj

j −mj

K q

j m

(2K + 1)(K + 1) 4

bK = π

K

(2K + 1)!!

Eα||Qˆ K ||Eβ

(2.108) (2.109)

where E0 = iωLA0, the term in big parentheses represents a Wigner 3-j symbol and Eα||QˆK||Eβ is the reduced matrix element of the K-th order electric multipole operator in the spherical basis:
23Note: to be consistent with e.g. [85], the geometric factor must include the factor bK as defined in Equation 2.109.

CHAPTER 2. THEORETICAL FRAMEWORK

32

E1 Transitions

(a)

(b)

E2 Transitions
(c)

Figure 2.11: Geometrical dependence of the coupling strength for linearly polarized light. The plots in (b) and (c) give the relative coupling strengths (normalized to one) for E1 and E2 transitions as a function of the geometry between linearly polarized laser light and the ion as defined in (a) where ˆ is defined as the component of the electric polarization vector in the plane formed by kˆ and B and ˆ⊥ is the component normal to this plane. Code for generating these plots for an arbitrary elect-
ric 2K-pole interaction is provided in Appendix C.

CHAPTER 2. THEORETICAL FRAMEWORK

33

Figure 2.12: Geometrical dependence of the coupling strength for circularly polarized light. The plots in (b) and (c) give the relative coupling strengths (normalized to one) for E1 and E2 transitions as a function of the geometry between circularly polarized la√ser light and the ion as defined in (a). σ± polarized light is defined by σˆ ± = ∓(ˆ1 ± iˆ2)/ 2 where ˆ1 = yˆ and ˆ2 = sin(θ)zˆ − cos(θ)xˆ. Code for generating these plots for an arbitrary electric 2K-pole interaction is provided in Append-
ix C.

CHAPTER 2. THEORETICAL FRAMEWORK

34

α

β

Kλ

E0

ΩKαβ /2π

S1/2, mj = −1/2 P1/2, mj = −1/2 1 397 nm 7.3 × 104 V/m 2.3 GHz

S1/2, mj = −1/2 P1/2, mj = −1/2 1 397 nm 7.3 × 105 V/m 23 GHz

S1/2, mj = −1/2 D5/2, mj = −1/2 2 729 nm 7.3 × 104 V/m 0.65 MHz

S1/2, mj = −1/2 D5/2, mj = −1/2 2 729 nm 7.3 × 105 V/m 6.5 MHz

Table 2.2: Light-ion coupling strengths for typical experimental parameter configurations. E0 ≈ 7.3 × 104 corresponds to 10 mW laser light in a Gaussian beam focused down to a spot with a waist of 30 µm to and E0 ≈ 7.3 × 105 corresponds to the same but with a 3 µm waist.

QˆqK = rˆK

4π 2K +

1

Ykq

(2.110)

with Ykq a spherical harmonic labeled in the standard way. The Wigner 3-j symbol enforces the selection rules |j − j| ≤ K ≤ j + j and q = mj − mj. And the reduced matrix element can be related to the Einstein A coefficient for the transition according to:

AK

=

cα(2K + 2)(2K + 1)k2K+1 | K[(2K + 1)!!]2

Eα||Qˆ K ||Eβ 2j + 1

|2

(2.111)

where α is the fine structure constant, c is the speed of light in vacuum and it is important that the primed state |Eα is the higher energy state (such that the j quantum number in the factor 2j + 1 corresponds to the higher energy state). Using Equations 2.107, 2.108 and 2.111 we can compute the quantity coupling strength ΩKαβ for an arbitrary electric multipole transition. Approximate coupling strengths for several common experimental parameter configurations are given in Table 2.2. See Appendi-
x C for more details on the derivations in this section, and code for generating the plots in Figures 2.11, 2.12 and the data in Table 2.2.

Incorporating center of mass motion

Starting with the rotating wave approximation Hamiltonian in Equation 2.104, and dropping the subscripts and tildes we have the Hamiltonian for a simple, two-level system:

Hˆ =

Ω 2

e−i∆tσˆeg

+

h.c.

(2.112)

where we now label the states of the two-level system as |e and |g for excited and ground, respectively.
Now we would also like to consider the effect of the center of mass motion of the ion so we explicitly factor out the center of mass coordinate dependence in Ω in Equation 2.105 by

CHAPTER 2. THEORETICAL FRAMEWORK

35

redefining Ω → Ω˜ exp(ik · ˆr0) and we also include the quantum description of the vibrational degrees of freedom as described in Equation 2.38:

Hˆ = =

Ω eikzˆ0cos(θ)e−i∆tσˆ + ν aˆ†aˆ + h.c.

2

2

Ω eikcos(θ)(aˆ+aˆ†)e−i∆tσˆ + ν aˆ†aˆ + h.c.

2

2

(2.113) (2.114)

where, for simplicity, we assume a single trapped ion and only consider vibration along the z-axis. θ is still the angle between kˆ and zˆ. Just as we moved to the interaction picture in Equation 2.100 with respect to the ion’s internal degrees of freedom, it is also convenient to do this for the ion’s vibrational motion by defining another unitary operator Uˆν = exp[iνaˆ†aˆt]. Then:

Hˆ → Ω e−i∆teiη(aˆeiνt+aˆ†e−iνt)σˆ + h.c. Uˆν 2
where η is the so-called Lamb-Dicke parameter:

(2.115)

η = k · zˆ0 = kcos(θ) 2mν

(2.116)

The exponential term in Equation 2.115 has the form of a displacement operator Dˆ (α) = exp(αaˆ† − α∗aˆ) with α = iηeiνt [36]. Using Equation 3.30 from reference [15], we can then
resolve the components of the Hamiltonian in the Fock state basis:

2 Ωmn =

e, m|Hˆ |g, n

2 =

e, n|Hˆ |g, m ∗

= Ω m|Dˆ (α)|n = Ω

n! m!

1/2
αm−ne−|α|2/2L(nm−n)(|α|2)

(2.117) (2.118)

where Lpq(x) is an associated Laguerre polynomial. However, it is m√ore insightful to expand Hˆ from Equation 2.115 in η, which is a reasonable
thing to do when η n + 1 1 (the so-called Lamb-Dicke regime). In this case:

Hˆ =

Ω e−i∆tσˆ 1 + iη

aˆeiνt + aˆ†e−iνt

η2 −

2aˆ†aˆ + 1 + (aˆ)2e2iνt + (aˆ†)2e−2iνt

+...

+ h.c.

2

2

(2.119)

As illustrated in Figure 2.13, the Hamiltonian in Equation 2.119 describes several types

of interactions that can be resonantly selected by tuning the value of ∆:

• Carrier transitions. When ∆ = 0:

CHAPTER 2. THEORETICAL FRAMEWORK

36

Hˆ ≈ Hˆcarr =

Ω 2

(1

−

η2aˆ†aˆ)σˆ

+

h.c.

• Blue sideband transitions. When ∆ = ν:

(2.120)

Hˆ ≈ Hˆbsb =

iηΩ aˆ†σˆ + h.c. 2

• Red sideband transitions. When ∆ = −ν:

(2.121)

Hˆ ≈ Hˆrsb =

iηΩ 2 aˆσˆ + h.c.

• Higher order sideband transitions. When ∆ = qν, q ∈ Z:

(2.122)

Transitions to higher order red/blue sidebands can be driven with a coupling strength given by Ωn,n+1.

Figure 2.13: Lamb-Dicke regime. When the Lamb-Dicke parameter η (Equation 2.116) is small, the dynamics of a resonantly-selected electronic transition can be described by carrier transitions, which leave the motional state of the ion unchanged, blue sideband transitions, which drive |g, n ↔ |e, n + 1 , and red sideband transitions, which drive |g, n ↔ |e, n − 1 .

CHAPTER 2. THEORETICAL FRAMEWORK

37

Generalizations
If we consider L laser beams interacting with N ions with M relevant vibrational modes then the Hamiltonian in the interaction picture is given by:

Hˆ =

N

L

Tn

Ω 2 σˆ e e + h.c. injn

in jn

−i∆in jn l t

i M ηnlm(aˆmeiνmt+aˆ†me−iνmt)
m=1

n=1 l=1 in=1

jn>in

(2.123)

where in refers to one of the Tn stationary states |Ei n of the nth ion that satisfy ∆injnl < ∆∗ for some threshold value ∆∗ ωL.
Spontaneous emission, as discussed in Section 2.3, generally must also be taken into account when considering the ion’s dynamical evolution. But this requires a fully quantum treatment of the electromagnetic field. Instead, we can incorporate it in an ad-hoc manner by way of an approximate master equation [13]. But first we must define the density operator ρˆ:

ρˆ = pi|ψi ψi|

(2.124)

i

ρˆ describes a classical distribution of quantum states, each realized with a probability of pi. The Schrödinger equation can be expressed in terms of ρˆ as:

i ∂tρˆ = [Hˆ , ρˆ]

(2.125)

Equation 2.125 is sometimes referred to as the Liouville equation, which is its classical analog. It reduces to ∂t|ψ = Hˆ |ψ when ρˆ = |ψ ψ| for some |ψ , which defines a pure state. Now, spontaneous emission from the state |Ei to the state |Ej can be incorporated into the dynamics described by Equation 2.125 by including a sum of terms:

i ∂tρˆ = [Hˆ , ρˆ] + γijL(ρˆ; σˆij)
ij

(2.126)

where γij refers to the Einstein A coefficient for the transition |Ei → |Ej (|Ei assumed to be the higher energy state) and L(ρˆ; Aˆ) is a Lindblad term of the form [63, 13]:

L(ρˆ; Aˆ) = AˆρˆAˆ† − 1 {Aˆ†Aˆ, ρˆ} 2

(2.127)

Near-resonant excitation
The effect of driving an electronic transition near resonance with laser light is to transfer population from one state to the other. For simplicity, we will describe this process for a carrier transition, as described by Equation 2.112, but the same analysis can be used for any other resonantly-selected two-level system (including motional sideband transitions)

CHAPTER 2. THEORETICAL FRAMEWORK

38

and the basic procedure can be generalized for the case where we must consider more than two levels. It is convenient to transform Equation 2.112 into another rotating frame that preserves the essential physics, by way of the unitary operator Uˆ = exp(−i∆t|e e|). The effective Hamiltonian in this rotating frame is then found to be (Equation 2.99):

HˆRF =

Ω |e
2

g| +

∆ |e
2

e| + h.c.

(2.128)

If we take γ to be the spontaneous emission rate from |e to |g , then from Equation

2.126, we find the equations of motion:

Ω

Ω∗

ρ˙ee = −i 2 ρge + i 2 ρeg − γρee

Ω ρ˙eg = −(γ/2 + i∆)ρeg + i 2 (ρee − ρgg)

(2.129) (2.130)

where ρij = i|ρˆ|g and the time evolution for the other two matrix elements follows immediately from the hermiticity of the density matrix (ρge = ρ∗eg) and conservation of probability (ρgg + ρee = 1). This set of equations is often referred to as the optical Bloch equations.
Now we would like to consider the steady-state dynamics obtained for laser drive times long compared to 1/γ. In this case, we assume that ρ˙ee = ρ˙eg = 0, which allows us to solve for ρee using Equations 2.129 and 2.130:

where R is given by:

ρ(eses)

=

2R

R + γ/2

(2.131)

and Γ by:

γ Ω/2 2 R=
2Γ

(2.132)

For small drive strengths |Ω| at half maximum (FWHM) of γ:

Γ = γ/2 + i∆

(2.133)

γ/2, ρ(eses) has the form of a Lorentzian with a full width

ρ(eses)

≈

|Ω/2|2 (γ/2)2 + ∆2

(2.134)

At larger drive strengths |Ω| ∼ γ, the lineshape deviates from a Lorentzian due to an effect known as power broadening. This results from the fact that ρ(eses) in Equation 2.131 saturates
at a population of 1/2 with respect to |Ω|. This is illustrated in Figure 2.14.

CHAPTER 2. THEORETICAL FRAMEWORK

ee

0.004 2 0.003 0.002 0.001 0.000 10

= 0.01
0

0.4 0.2 10 0.0 10

2 =1
0
2

39

2 = 10
0.4

0.2

10 0.0 10

0

10

Figure 2.14: Steady-state excited state probability for a damped two level system. ρ(eses) is plotted in blue as a function of laser detuning from resonance for various laser driving strengths. In the left-most plot, where |Ω| γ the lineshape has a form of the Lorentzian as described by Equation 2.134, which is plotted with an orange dashed curve.

AC Stark shift

Generally, approximating resonantly driven transitions as two level systems works quite

well for predicting the dynamics of our experiments given the typical operating parameters

(laser intensities, static magnetic field strengths, detunings, etc.). However, it is often nec-

essary to include a perturbative treatment of off-resonant couplings of the nearest allowed

transitions, which tend to shift the energy levels of the resonant transition [42]. This is

known as the AC Stark effect.

The

small

parameter

we

consider

is

|Ω|/2 ∆

1. When this condition holds for a particular

carrier transition |e, n ↔ |a, n , the energy shift is given by [31]:

|Ω|2 δEg = 4∆
|Ω|2 δEa = − 4∆

(2.135) (2.136)

where δEg (δEa) corresponds to the shift of the unperturbed energy of the state |g, n (|e, n ). These equations hold for both positive and negative ∆ = ωL − (Ea − Eg)/ .
When a carrier transition is driven resonantly but there is also an off-resonant interaction with another far-detuned transition, only one state of the resonant transition experiences a

CHAPTER 2. THEORETICAL FRAMEWORK

40

shift24, as illustrated in Figure 2.15(a). However, a very common situation where the AC Stark shift must be taken into account is when a sideband transition is being driven. In this case, the detuning is relatively small and the interaction strength of the off-resonant carrier transition is stronger than the sideband transition by a factor of 1/η. Moreover, both states of the sideband transition are affected by the Stark shift, so the effect is doubled. This is illustrated in Figure 2.15(b). For -
Ω = 2π × 100 KHz and a 2π × 1 MHz vibrational sideband, a resonant blue sideband transition will also experience a 2π × 5 KHz Stark shift from the off-resonant carrier interaction. Given η ∼ 0.06, this shift is of the same order as the coupling to the sideband.
When driving a far-detuned transition, the AC stark shift is the dominant effect in the small parameter |Ω|/2∆, but a small amount of population will also be driven into the off-resonantly coupled excited state. This scales as (|Ω|/4∆)2 and provides a limit on the strength with which sideband transitions can be driven within the two level approximation (Though, by adiabatically switching on the light, it is possible to significantly suppress these off-resonant excitations).

(a)

(b)

Figure 2.15: AC Stark shift due to an off-resonant carrier transition when resonantly driving a different carrier transition |g, n ↔ |a, n (a) and a blue sideband transition |g, n ↔ |e, n + 1 (b). In the case of the blue sideband transition, both energy levels of the resonant transition are affected, so the effective shift off of resonance is doubled.
24Referencing the labels in Figure 2.15(a), this statement assumes that there either is no coupling allowed between |e, n ↔ |a, n and/or the detuning of the laser from this transition is much larger.

41
Chapter 3
Experimental toolbox
3.1 Introduction
In this chapter, we provide a basic overview of the core techniques used for preparing, manipulating and measuring trapped ions in the experiments outlined later in this thesis. We begin in Section 3.2, by describing the two-step photoionization process used to selectively ionize the desired 40Ca isotope of neutral calcium. Then, in Sections 3.3 and 3.4, we describe how we prepare 40Ca+ ions in a well-defined quantum state with respect to both its electronic (Section 3.4) motional (Section 3.3) de-
grees of freedom. Next, in Sections 3.5 and 3.6, we describe how we precisely and coherently manipulate the quantum state of the ion using well-focused, narrow linewidth laser light. In particular, in Section 3.6, we describe how we can control the electric interaction between two ions, generating entanglement. Finally, in Section 3.7, we describe how we can read out the state of the ions using a technique known as electron shelving.

CHAPTER 3. EXPERIMENTAL TOOLBOX

42

3.2 Photoionization

Figure 3.1: 40Ca Isotope-selective photoionization scheme. (a) A calcium vapor is produced by resistively heating a tube filled with calcium granules (see also Chapter 4). Light at 375 and 422 nm is sent perpendicularly to this vapor stream to minimize Doppler shifts and is used to photoionize neutral 40Ca atoms via the two-step process shown in (b). The 422 nm light is tuned to an S → P transition that is sufficiently different amongst the various isotopes of calcium to allow for selective photoi-
onization of 40Ca. Note that the vertical axis is not to scale.
The single ionization energy of calcium is about 6 eV, which corresponds to a wavelength of around 200 nm. Light so deep in the UV tends to cause charging when incident upon dielectric materials, which makes it non-ideal for photoionization near the trapping region [43]. For this reason, we use a two-step process as illustrated in Figure 3.2(b) whereby a 422 nm photon excites the valence electron from the 2S0 state to the 1P1 state and then a 375 nm photon excites it into the continuum. This proce-
dure has the additional benefit of providing isotope-selective photoionization since the typical isotope-shifts of the 2S0 →1 P1 are on the order of several hundred MHz [64].
Typically, the first step after setting up a new vacuum chamber/trap assembly is to ”check for fluorescence.” This entails generating an in-vacuum calcium vapor cloud, shining 422 nm light on it, and observing for scattered 422 nm light. In a dark room, this signal should be visible by eye and can be made more pronounced by continuously scanning the 422 nm laser light through resonance. This procedure ensures that there is non-oxidized calcium loaded in the oven, that the control lines to the oven-
 are properly connected, and that the 422 nm light is properly aligned relative to the atomic vapor cloud (cooling lasers can then

CHAPTER 3. EXPERIMENTAL TOOLBOX

43

Figure 3.2: Neutral atomic calcium fluorescence. An image of neutral 40Ca atoms fluorescing as 422 nm photons are scattered off of a S → P transition (see Figure 3.1). Inset: Images of the same fluorescence using a CCD camera. On the left, the 422 nm addressing beam is tuned off of resonance, and on the right it is on resonance.

mass number 40 42 43 44 46 48

natural abundance 96.9% 0.647% 0.135% 2.09% 0.004% 0.187%

1S0 ↔1 P1 isotope shift 0 MHz 394 MHz 612 MHz 774 MHz
1160 MHz 1513 MHz

Table 3.1: Calcium natural isotope abundances and isotope shifts. Reproduced from [64].

be coaligned to this path). An image showing what the scattered signal should look like is given in Figure 3.2.

CHAPTER 3. EXPERIMENTAL TOOLBOX

44

3.3 Laser cooling
We use laser cooling to prepare the ions in their motional ground states with high probability. During experimental operation, cooling is also necessary for crystallization [9] as discussed in Section 2.2 and to prevent the ions from escaping due to environmental background heating that will eventually cause their kinetic energy to exceed the trap depth [89, 73].
The principle underlying laser cooling is the fact that photons carry momentum. Thus, during a scattering event, where a photon is absorbed and then subsequently emitted by an atom, there is an exchange of momentum between the light and the atom. This interaction can be engineered to selectively reduce the momentum of the atom. If scattering is then performed on an atomic cycling transition, such that each spontaneous emission event returns the atom to its original state (before absorbing the phot-
on), then the procedure can be repeated continuously, leading to an average cooling force on the atom.
For a harmonically trapped ion, with trapping frequency ν, two parameter regimes naturally arise depending on the relationship between ν and the spontaneous emission rate γ:
• ν γ: In this regime, it is sufficient to treat the ion as a free particle since the characteristic time for each scattering event 1/Γ is much less than a single vibrational period 1/ν. Because the absorption linewidth (Section 2.6) encompasses many discrete vibrational sidebands, this is often referred to as the unresolved sideband regime. Cooling relies on the Doppler effect and is achieved by red-detuning from the electronic transition. Because γ is large, cooling can be performed very quickly-
, but this limits the minimum achievable temperature since there is a non-negligible probability of heating the ion both during absorption and during emission.
• ν γ: The so-called resolved sideband regime since, here, the absorption linewidth is much smaller than the spectral spacing between adjacent vibrational sidebands. In this regime, one can selectively drive a red sideband of the electronic transition. If, in addition, the ion is in the Lamb-Dicke regime where the confinement is very strong, subsequent spontaneous emission is most likely to preserve the temperature of the ion. This procedure is referred to as resolved sideband cooling and is capab-
le of driving the ion very close to its vibrational ground state, limited only by the probability of highly off-resonant blue sideband absorption (or decay). However, the requirement of small γ limits the rate at which this can be performed.
In practice, we utilize both regimes in a two-step cooling process, each involving a different electronic transition. In the first step, we Doppler cool the ions down to their fundamental limit by addressing a short-lived dipole-allowed transition. At this point, the motion of the ions is sufficiently constrained to allow for selective excitation of the red sidebands of the long-lived, dipole-forbidden S1/2 ↔ D5/2 transitions. We use this feature in a technique known as resolved sideband cooling, -
to further pump the ion’s motion down (very near) to

CHAPTER 3. EXPERIMENTAL TOOLBOX

45

its vibrational ground state. In the following subsections, we will give a brief overview of the experimental implementation. More thorough treatments can be found in, for example, [30, 58, 67].

Doppler cooling
The principle underlying Doppler cooling is the Doppler effect. As illustrated in Figure 3.3, laser light with a wavevector k directed towards an ion that is moving with velocity v appears to the ion (in its own frame of reference) as if it were frequency-shifted by an amount:

δDoppler = −k · v

(3.1)

This means that the probability that this light will excite some atomic transition, via absorption of a photon, is velocity-dependent. For example, in the weak-driving limit |Ω| |Γ| the steady-state excited state probability is given by (Equation 2.134):

ρ(eses)

=

γ2

+

|Ω|2 4(ωL − ωa

− kv)

=

γ2

+

|Ω|2 4(∆0

−

kv)

(3.2)

where ∆0 = ωL − ωa is the frequency detuning of the laser from the transition and where, for simplicity of the following calculations, we assume that the ion’s motion is restricted to a single spatial axis that is aligned parallel to the direction of the laser beam such that

ωL

-v

ωa

ωL

v

ωa Lab Frame
of reference

ωL + kv
ωa ωL - kv
ωa Ion Frame of reference

Figure 3.3: Doppler cooling. In the ion’s frame of reference, the laser light is frequencyshifted by an amount k · v.

CHAPTER 3. EXPERIMENTAL TOOLBOX

46

k · v = kv1. In the limit that δDoppler is much smaller than γ and ∆, we can linearize the steady state population about kv:

ρ(eses) ≈

|Ω|2 γ2 + 4∆20

1

+

8k∆0 γ2 + 4∆20

v

(3.3)

Since each photon of laser light carries a momentum k, each absorption event causes the

ion to experience an impulse ∆p = k. This leads to a velocity-dependent, time-averaged

force:

and, thus, a time-averaged power:

F = kγ ρ(eses)

(3.4)

E˙ absorption = F v = kγ ρ(eses)v |Ω|2
= γ2 + 4∆20

8k∆0 γ2 + 4∆20

v2

(3.5) (3.6)

The important feature of Equation 3.6 is the fact that its sign is given by the sign of lab-frame detuning ∆0. In particular, ∆0 < 0 implies that E˙ absorption < 0 meaning that there is a net flow of energy out of the system. This corresponds to the fact that, in this case, photons are preferentially absorbed when the ion is moving against the direction of the incident light since the Doppler effect causes these photons to appear blue-shifted.
The discreteness of the absorption process and the intrinsic randomness in the time of individual absorption events leads to a fundamental, finite variance of its momentum. This process can be modeled as a random walk in momentum space and leads to an effective heating rate [58]:

E˙ haebasting

= 1 d p2 2m dt

=

(

k)2 2m

γ

ρ(eses)

Likewise, the emission of photons also contributes to the diffusion of momentum:

(3.7)

E˙ hemeating

=

(

k)2 2m

γ

ρ(eses)

ξ

(3.8)

where ξ is a geometric factor that takes into account the fact that the emission events occur

in a random direction that is not restricted to the axis defined by the incident laser beam.

The value of ξ depends on the radiation pattern of the transition. For a dipole transition, it

has a value of ξ = 2/5 [58].

1The following calculations are then easily extended to the more general case if we assume the motion of the ions along each spatial axis is uncoupled. (A reasonable approximation according to Section 2.2). Note that, in practice, it is necessary to align the laser beam such that it has at least some projection on each spatial axis so that all vibrational modes of the ions can be simultaneously cooled.

CHAPTER 3. EXPERIMENTAL TOOLBOX

47

Equating the power in and power out allows us to solve for the equilibrium temperature:

γ T = (1 + ξ)

γ + 2|∆0|

8kB

2|∆0| γ

which is minimized when ∆0 = −γ/2, giving the Doppler cooling limit:

(3.9)

γ

Tmin =

(1 + ξ) 4kB

=⇒

aˆ†aˆ

=

γ (1 + ξ)

4ν

(3.10)

Temperature here is defined under the assumption that the state of the vibrational mode after cooling can be described by a thermal density matrix [36]:

e−Hˆ /kBT ρˆthermal = Tr(−Hˆ /kBT )

(3.11)

with Hˆ = νaˆ†aˆ. In practice, we implement Doppler cooling by driving the S1/2 ↔ P1/2 transition, which
has a lifetime of about 7 ns, using 397 nm light, as illustrated in Figure 3.4. For a trap frequency of 2π × 1 MHz, this results in mean phonon occupancy of around 8 quanta. Since there is a finite probability that the P1/2 state will decay to the D3/2 state we also simultaneously shine 866 nm light on the ion in order to repump it into the cooling cycle whenever it ends up there.

CHAPTER 3. EXPERIMENTAL TOOLBOX

48

Figure 3.4: 40Ca+ Doppler cooling scheme. For efficient Doppler cooling, a short-lived (large γ) transition must be used. We use the 397 nm dipole-allowed S1/2 ↔ P1/2 transition for this purpose. For weak driving laser intensity, the detuning is optimized at ∆0 = −γ/2. There is a finite probability that the P1/2 state will decay to the D3/2 state, taking the ion out of the cooling cycle. For this reason we also continuously drive the D3/2 ↔ P1/2 transition with 866 nm repumping light.

CHAPTER 3. EXPERIMENTAL TOOLBOX

49

Resolved-sideband cooling

When the trapping frequency ν is much larger than the spontaneous emission rate for a particular electronic transition, the vibrational sideband spectrum is well-resolved and a red-sideband transition can be selectively excited, removing a single quanta of motional energy from the ion. We use the dipole-forbidden S1/2 ↔ D5/2 quadrupole transition for this purpose, which is addressed using a cavity-locked 729 nm laser. However, the lifetime of the D5/2 state, approximately 1 second, is too large to-
 allow for reasonably efficient cooling. For this reason, the D5/2 state is quenched by illumination with a second laser with a wavelength of 854 nm that couples the D5/2 state to the dipole-allowed P3/2 state [67]. Since, in this configuration, the P3/2 state is barely occupied, it can be adiabatically eliminated and its effect encapsulated by an effective linewidth for the D5/2 state of approximately Ω2/γ, where Ω is the coupling strength between D5/2 ↔ P3/2 and γ is the spontaneous decay rate f-
rom P3/2 → S1/2. By tuning Ω a reasonable compromise can be made between maintaining a relatively small effective linewidth that preserves the resolution of the sidebands and a reasonably large cooling rate.
A cartoon illustration of the sideband cooling procedure is given in Figure 3.5. Just as with Doppler cooling, the minimum achievable temperature is fundamentally limited by the linewidth (in this case the effective linewidth) of the electronic transition. The dominant heating mechanisms are an off-resonant excitation of a blue-sideband transition with the 729 nm laser followed by a spontaneous decay event on the carrier transition and off-resonant excitation of the carrier transition followed by -
spontaneous decay on the blue sideband. Taking these two processes into account, the equilibrium temperature scales as [58]:

aˆ†aˆ

1 ∝

γ

2

4ν

(3.12)

And, since we assume the resolved sideband limit where γ ν, this will be very close to the
ground state of motion. For an effective linewidth γ ∼ 100 kHz and a trap frequency of ν ∼ 1 MHz, this amounts to an equilibrium phonon occupancy of approximately 10−2 quanta.

CHAPTER 3. EXPERIMENTAL TOOLBOX

50

Figure 3.5: Sideband cooling scheme. (Not shown: 866 nm rempumping light).

CHAPTER 3. EXPERIMENTAL TOOLBOX

51

3.4 Optical pumping
In order to prepare the ions in a well-defined electronic state, a frequency-selective optical pumping scheme is utilized [83]. As illustrated in Figure 3.6, 729 nm light is used to continuously drive population from the |S1/2, mj = +1/2 state to the |D5/2, mj = −3/2 state, while 854 nm light simultaneously pumps population out of the D5/2 level and back into S1/2. The |S1/2, mj = +1/2 ↔ |D5/2, mj = −3/2 is most efficient, since there are two pathways for the ion to be pumped into the |S1/2, mj = -
−1/2 state but only one for the |S1/2, mj = +1/2 . Just as with Doppler cooling, an 866 nm laser is used to repump the D3/2 state.

Figure 3.6: Optical pumping scheme for 40Ca+. For optical pumping into the |S1/2, mj = −1/2 state, the |S1/2, mj = +1/2 ↔ D5/2, mj = −3/2| quadrupole transition is the most efficient. Optical pumping into the |S1/2, mj = +1/2 can likewise be achieved by driving the |S1/2, mj = −1/2 ↔ D5/2, mj = +3/2| quadrupole transition.

CHAPTER 3. EXPERIMENTAL TOOLBOX

52

3.5 Coherent single-ion control

For the experiments covered in this thesis, coherent manipulations of the electronic state of the ions are limited to Zeeman substates of the S1/2 and D5/2 fine structure levels of 40Ca+. If a sufficiently narrow linewidth laser is used to address the ions2, then a single transition
can be resonantly selected and it is appropriate to model the electronic state of the ion as
a two level system. The near-resonant interaction can be modeled by the Hamiltonian in
Equation 2.112 from Section 2.6, which we reproduce here:

Hˆint =

|Ω|eiφ 2

e−i∆tσˆeg

+

h.c.

(3.13)

For a fixed laser geometry, |Ω| is tuned with the intensity of the laser beam, and φ is tuned with its phase. As before, ∆ is determined by the detuning of the laser frequency ωL from the frequency splitting of the two electronic energy levels ωa such that ∆ = ωL − ωa and σˆeg denotes the operator coupling the lower energy level to the higher energy level. For example, σˆeg = |D5/2, mj = 1/2 S1/2, mj = 1/2| in Figure 3.7.

Figure 3.7: Coherent single qubit interaction.

For a resonant laser pulse, ∆ = 0 in Equation 3.13, if the interaction is turned on for a finite duration T , then the effect on the state of the ion, as found by solving the Schrödinger i ∂t|ψ = Hˆint|ψ , can be described by the unitary transformation:

|ψ(t = T ) = Uˆ (T )|ψ(t = 0)
where:
2Small relative to the spectral resolution of the Zeeman transitions.

(3.14)

CHAPTER 3. EXPERIMENTAL TOOLBOX

53

Uˆ (T ) = e−iHˆ intT/ =

cos(|Ω|T ) −isin(|Ω|T )eiφ

−isin(|Ω|T )e−iφ cos(|Ω|T )

(3.15)

and:

|ψ(t = 0) = a|g + b|e =

a b

(3.16)

which ignores the effect of spontaneous emission out of the excited electronic state – valid when T 1/γ (γ ∼ 1 second for the D5/2 fine structure manifold).
If the ion is initialized in its ground state, then it can be transformed under Uˆ into any other possible (physically meaningful) state with an appropriate choice of laser parameters Ω and T :

|ψ(t = T )

θ = cos( )|g

+ eiϕsin( θ )|e

2

2

(3.17)

where we’ve taken θ/2 = |Ω|T and ieiφ = eiϕ. The arbitrary two level state in Equation 3.17 has two free parameters3 θ ∈ [0, π] and ϕ ∈ [0, 2π] and it is customary to illustrate these as a point on the surface of a unit sphere, known in this context as the Bloch sphere [75]. In this representation, Uˆ (T ; Ω) is equivalent to rotation by an angle θ about an axis in the X-Y plane of the Bloch sphere that makes an angle of ϕ with the X-axis. For this reason, we will often refer to Uˆ as a rotation a-
nd denote it by Rϕ(θ) or, for convenience, RX(θ), RY (θ) when the axis of rotation is equal to X or Y , respectively [75] (see Figure 3.8). If the ion is initialized to the ground state |g , as is generally the case at the beginning of any experiment, then the absolute value of the laser phase φ is irrelevant (that is, we have freedom in deciding where the X and Y axes lie in the X-Y plane of the Bloch sphere). However, the relative laser phase of subsequent interactions will matter and this can b-
e controlled by the phase of the RF applied to the acousto-optic modulator used to modulate the laser light parameters provided that the laser light phase remains stable (the coherence time of the laser is on the order of several ms)4.
So far in this section, we have ignored the vibrational state of the ion. The previous results hold provided the vibrational mode is in a well-defined Fock state5 |n , n ∈ N. Under this condition, the preceding results can also be extended to laser interactions that drive vibrational sideband transitions, as discussed in Section 2.6, provided we make the replacements |g → |g ⊗ |n , |g → |e ⊗ |m and Ω → Ωmn (as defined in Equation 2.117).

3This is consistent with Equation 3.16, even though a, b ∈ C has 4 degrees of freedom, since conservation of probability ( ψ|ψ = 1) and the insignificance of the global phase (|φ and eiα|φ cannot be distinguished
by measurement) remove two of them. 4See Chapter 4 for more details. 5This is true when the laser is pointed in a direction aligned with one of the ion’s vibrational axes, say
zˆ such that for the laser’s k-vector kˆ · zˆ = 1, which we will assume in the remainder of this section. More
generally, this is true when all three vibrational modes of the ion are individually in well-defined Fock states.

CHAPTER 3. EXPERIMENTAL TOOLBOX

54

Figure 3.8: Bloch sphere. An arbitrary state |ψ

=

cos(

θ 2

)|g

+

eiϕ

sin(

θ 2

)|e

of the two-level

system {|g , |e } is parameterized by the two variables θ and ϕ, which can be visualized

as a point on the unit sphere. If the system is initialized in the state |g , then |ψ can be

obtained by applying the rotation Rϕ(θ). More generally, Rϕ(θ) can be used to transform

an arbitrary state of the two level system to any other state with the appropriate choice of

the parameters parameters θ and ϕ.

If the vibrational mode participating in the laser interaction is not initialized into a Fock state, then the two level approximation is no longer generally valid – leading to nontrivial effects. For example, if an ion is initialized into the state |g ⊗ |0 and allowed to evolve under the resonant action of the Hamiltonian in Equation 3.13 this will result in sinusoidal oscillations between the ion’s electronic states |g and |e at a frequency of |Ω|:

P (|e )(t) = sin2(|Ω|t)

(3.18)

These oscillations are typically referred to as Rabi oscillations and, in this context, |Ω| is referred to as the Rabi frequency. However if, instead, the ion is initialized into the electronic ground state |g but the motional state begins in, say, a thermal state (Equation 3.11), then the laser will effectively drive multiple transitions, each with a slightly different Rabi frequency, as illustrated in Figure 3.9. In this case, the functional form of the time-evolution in Equation 3.18 is replace-
d by the weighted sum:

P (|e ) = p(n)sin2(|Ωnn|t)
n

(3.19)

CHAPTER 3. EXPERIMENTAL TOOLBOX

55

where, to leading order, |Ωnn| = |Ω|(1 − η2n) (see Equation 2.120). This effect can be used to experimentally reconstruct the Fock state distribution p(n), though, at least in the Lamb Dicke regime, it is more practical to use a sideband interaction for this purpose [55], since the leading order dependency on n is linear in η for sideband transitions. This is one method for estimating the temperature of the vibrational mode and, thus, the quality of the initial laser cooling.

Figure 3.9: Hot Rabi oscillations. When the ion is initialized in the electronic ground state |g but the vibrational mode is initialized in a thermal state the two level approximation is no longer valid for the dynamics under the interaction defined by Hˆint in Equation 3.13. In this case, there are multiple pathways to excite the ion into the electronic state |e as illustrated in (a). The probability of finding the ion in |e at a particular point in time is then given by the weighted average in E-
quation 3.19, as illustrated in (b) for various thermal states characterized by the mean phonon occupation n¯

CHAPTER 3. EXPERIMENTAL TOOLBOX

56

3.6 Entanglement
Two quantum systems A and B are said to be entangled when they exhibit a correlated state described by a wavefunction that cannot be factorized into a product state of the form [75]

|Ψ = |ψ A ⊗ |ψ B

(3.20)

For example, if we consider two identical ions A and B each containing a pair of electronic energy levels |g and |e , then one such possible entangled state, known as a Bell state [75], is given by:

√ |Ψ = (|g A|g B + eiφ|e A|e B)/ 2

(3.21)

which is maximally entangled in the sense that knowledge of the state of one of the ions yields full knowledge of the state of the other. Entangled states represent an intrinsically quantum phenomenon since the degree of correlation that they exhibit surpasses what can be achieved according to the laws of classical physics [5]. Much of the proposed advantage of quantum information processing devices over classical devices derives from this fact. In Chapter 6, we will utilize engineered states of t-
he form in Equation 3.21 to improve the signal-to-noise ratio of a precise measurement of Lorentz invariance beyond what can be accomplished with two classically correlated ions.
At a minimum, generating a state as in Equation 3.21 requires a physical interaction between ions A and B6. It is difficult to generate this interaction directly between the internal states of the ions due to the disparity between the scale of the local atomic charge distribution (on the order of Angstroms) and the typical separation between the ions in a linear Coulomb crystal (on the order of microns).
On the other hand, the mutual Coulomb repulsion discussed in Section 2.2 does equate to a strong, always-on coupling between the individual center of mass motion of co-trapped ions. This coupling can be used to generate entanglement between the electronic states of a single ion and the collective, normal mode motion of a chain of ions by driving a sideband transition. Moreover, if this normal mode is first cooled down to its ground state, then this interaction can be conditioned on the electronic -
state of the laser-addressed ion. For example, a laser pulse tuned to the blue (red) sideband will only drive an electronic transition if the ion is in its electronic ground (excited) state. This feature can be leveraged to design a piecemeal pulse sequence that first entangles the electronic state of a single ion with the collective motion of the chain and then transfers the information encoded in the motion to the electronic state of another ion [20]. In this way, the collective motion of the io-
ns acts as

6Actually, this is not quite true. For example, it is possible to entangle two ions by performing correlated measurements of two photons, one spontaneously emitted by each ion and each of which whose polarization is entangled with the electronic state of their respective ions [70]. In this case, the two ions can be entangled in the absence of any direct physical interaction.

CHAPTER 3. EXPERIMENTAL TOOLBOX

57

a sort of quantum bus, communicating information about the electronic state of one ion to another.
As first pointed out by Mølmer and Sørensen [72], a similar strategy as outlined above can be applied more straightforwardly by simultaneously illuminating two ions with a light field consisting of two distinct tones. The key is to choose the frequencies of the two tones such that they have an equal, but opposite, detuning from a shared vibrational mode7 of the two ions. This scenario is illustrated in Figure 3.10 (a). In this case, an energy-conserving twophoton transition between the electronic -
states |g A|g B ↔ |e A|e B becomes possible. Four such transitions are simultaneously activated. As shown in [72] (b), these transitions interfere with one another in such a way that, to first order, the interaction becomes independent of the precise vibrational state of the ions – provided that the Lamb Dicke approximation is still valid. The resulting Hamiltonian is:

where:

Hˆ = χσˆx(A) ⊗ σˆx(B)

(3.22)

χ ≈ η2Ω2/δ

(3.23)

with η the Lamb-Dicke parameter of the participating vibrational mode and Ω proportional to the electric field amplitude of the light field. Hˆ results in Rabi-like oscillations between the two-level electronic subspace {|g A|g B, |e A|g B} of the ions. And if the interaction is turned on precisely for the duration t = π/2χ, then a maximally entangled state of the form in Equation 3.21 is produced, where the phase φ can be controlled through the global phase of the bichromatic light field.
To obtain the approximate Hamiltonian in Equation 3.22, it is assumed that the detuning δ from the sidebands is much greater than the direct (single-photon) coupling to these states:

δ ηΩ.

(3.24)

This ensures that the intermediate states of the transition, like |g A|e B, are not off-resonantly populated during the interaction. For a fixed laser, this sets a practical limitation on the strength of the entangling interaction. More generally, off-resonant coupling to higher-order sidebands, other vibrational modes or other electronic states will also limit the maximum detuning. However, if the goal is just to generate a maximally entangled Bell state, then the condition in Equation 3.24 can b-
e relaxed, as described in detail in [93]. The rough idea is to tune the parameters of the interaction such that off-resonantly excited states are depopulated at precisely the same moment that the desired states are maximally correlated, known as the gate time. This is illustrated in Figure 3.11 (a).
The probability that a state |Ψ of the form in Equation 3.21 is generated by the MølmerSørensen gate is given by:

7Whose motion, in the simplest case, involves equal participation of both ions, which will always be the case for a pair of co-trapped ions with equal mass.

CHAPTER 3. EXPERIMENTAL TOOLBOX

58

laser intensity

frequency

(a)

(b)

Figure 3.10: Mølmer-Sørensen interaction. (a) Frequency spectrum of the bichromatic lightfield used for the Mølmer-Sørensen interaction. ω0 corresponds to the frequency splitting between the individual electronic states of the ions |g and |e and ν corresponds to the frequency of the participating vibrational mode. (b) An illustration of the four interfering, two-photon transition pathways corresponding to the two-photon resonance condition ωr + ωb = 2ω0, where ωr, ωb correspond to the two tones of-
 the bichromatic light-field.

1 Ψ|ρ|Ψ = 2 (ρee + ρgg) + |ρeg|

(3.25)

which we will refer to as the fidelity of the gate operation. Here ρ is the density matrix

representing the physical state resulting from an experimental application of the gate. The first two terms on the right-hand side of Equation 3.25 correspond to the probability of finding the ions in the joint states |e A|e B or |g A|g B, respectively, at the conclusion of the gate. These probabilities can be measured directly via the electron shelving method described in

Section 3.7. The third term represents the amplitudes of the off-diagonal elements of the density matrix ee|ρ|gg = ee|ρ|gg ∗. This can be measured by simultaneously applying a
single-ion π/2-pulse to both ions, referred to as an analysis pulse, with a laser phase of ϕ

relative to the global laser pulse of the bichromatic field, followed by measurement in the

standard basis [86, 6]. The resulting parity signal Π, equal to the sum of the probability of finding both ions in the same electronic state minus the sum of the probabilities of finding them in opposite states, will oscillate sinusoidally as a function of the phase ϕ as Π =

Asin(2ϕ + φ). The amplitude of these oscillations A/2 is equal to the amplitude of the

coherence |ρeg|. An experimental example of a parity oscillation is shown in Figure 3.11 (b).

CHAPTER 3. EXPERIMENTAL TOOLBOX

59

Figure 3.11: Mølmer-Sørensen Gate. (a) Example population dynamics for a strongly-driven Mølmer-Sørensen interaction. The states labeled D and S correspond to the states |e and |g (respectively) discussed in the main text. The point in time when the maximally entangled Bell state is generated, typically referred to as the gate time, is circled in purple. Note that, at this point the intermediate state populations, colored in red, are fully depopulated. The circles label experimental data and the s-
olid lines label simulation. (b) An example of a parity oscillation. The analyzer phase corresponds to the phase of the global analysis pulse. Circles correspond to experimental data and the red curve corresponds to a sinusoidal fit. Along with the data in (a), the fidelity of the Bell state produced at the first gate time was found to be approximately 94%.

CHAPTER 3. EXPERIMENTAL TOOLBOX

60

3.7 Measurement
To measure the ions, we scatter light off of the 397 nm S1/2 ↔ P1/2 cycling transition, which is then focused and directed onto either a photomultiplier tube (PMT) or an EMCCD camera (see Section 4.5 for technical details). An example image taken using the camera is shown in Figure 3.13.
Using the electron shelving method [58], we are able to determine whether the ion is in the D5/2 level. The method is illustrated in Figure 3.12. When the ion is in the S1/2 level, incident 397 nm light will continuously scatter photons. On the other hand, if it is in the D5/2 level, the ion will be transparent to this light. For a sufficiently long readout duration and low background light, the two count distributions, bright and dark, can be reliably distinguished with an appropriate threshold v-
alue.

Figure 3.12: Electron shelving method. (a) When the ion is in the S1/2 level, incident 397 nm light will continuously scatter photons. (b) When the ion is in the D5/2 level, it is transparent to this light.
Figure 3.13: Chain of ions imaged on an EMCCD camera.

61
Chapter 4 Experimental setup
4.1 Introduction
Figure 4.1: Main components of the experimental setup. In this chapter, we sketch the physical apparatus used for trapping and controlling ions and performing the experiments in this thesis. An outline of the basic components is sketched in Figure 4.1. The main apparatus consists of the trap assembly used for generating the electric fields necessary to trap the ions, an oven used for sourcing neutral calcium atoms and a magnet for setting the quantization axis. All of this is housed in an chamber -
held at extreme high vacuum.

CHAPTER 4. EXPERIMENTAL SETUP

62

A set of laser beamss is used to photo-ionize the neutral calcium and manipulate the internal state of the ions. Measurement of the ion’s state is performed using either an EMCCD camera or a PMT. All control is facilitated through a hardware/software stack with both real-time and asynchronous capabilities.

4.2 Main apparatus

Figure 4.2: From left to right, the vacuum chamber, trap assembly and calcium oven used for the experiments in this thesis. The internal pressure of the chamber is kept at ∼ 10−11 mbar. Contained inside is the trap assembly and a calcium oven, which sources the calcium atoms.
The trap assembly and vacuum chamber used for the experiments described in this thesis were designed and built by Thaned Pruttivarasin and Michael Ramm. A more detailed description1 can be found in their theses [81, 82]. Here we provide a summary of the features relevant for this thesis.
Trap assembly
A diagram of the trap assembly is provided in Figure 4.3. The DC electrodes, or ”end caps,” are held at a static potential to trap the ions in the axial direction. The RF electrodes, or ”RF blades,” are driven with an oscillating voltage that generates the pseudopotential for trapping in the radial plane. Two coupled pairs of compensation electrodes allow compensation of any stray electric fields in the radial plane, which would otherwise induce excess micromotion. All electrodes are electrically -
connected to external sources using 1 mm thick,
1Specifically, the ”improved” design described in [82].

CHAPTER 4. EXPERIMENTAL SETUP

63

Figure 4.3: Trap assembly. Trap electrodes (gray) are composed of electropolished 316L stainless steel and supported on a Macor frame (beige). The DC electrodes have a 1 mm pinhole with rounded edges, which allows for optical access along the axis of the trap. The tips of the DC electrodes have a diameter of 5 mm. The tip-to-tip distance between endcaps is 5 mm and the gap between diametrically opposing RF electrodes is 1 mm. Image adapted from [82].
vacuum-compatible, Kapton-insulated copper wire. And all electrodes are capable of supporting at least several kilovolts while under vacuum [82]. Pinholes through the end caps provide optical access along the axial direction. The electrodes are supported by an vacuumcompatible, insulating Macor frame that is rated for continuous operation at temperatures of up to 800°C. The physical realization of the trap assembly is shown in the middle image of Figure 4.2.
Calcium oven
A calcium oven is used to source the atoms for experiments. It consists of a stainless steel tube, open-ended on one side and loosely packed with calcium granules. The tube is wrapped with a strip of tantalum foil connected by conductive wire to an external current source. When a sufficiently high current2 is driven through this wire, the oven assembly is resistively heated to a high enough temperature to sublimate the calcium, which is then sprayed out of the open end. The oven is mounted below t-
he trap assembly such that
2For trapping single ions, we typically run about 4 A through the oven, but during troubleshooting have gone as high as 12 A. At about, 10 A the oven begins to glow.

CHAPTER 4. EXPERIMENTAL SETUP

64

the direction of the calcium plume is directed vertically upwards. The trap assembly was originally designed for an experiment with an optical cavity and special precautions were taken to prevent the calcium spray from coating the mirrors. In particular, the plume is only able to reach the trapping region through a small 12 mm diameter hole in the base mount. We found that mounting a laser to the oven was helpful for alignment with this through-hole, which can otherwise be tedious. The actual oven-
 used is shown in the right image of Figure 4.2. The open end of the oven tube is obscured by foil, but the tantalum strip is visible just below this.
Vacuum chamber

Figure 4.4: Diagram of the vacuum chamber. The labels correspond to the flanges where the corresponding component is mounted when the chamber is fully assembled. Image adapted from [82].
Both the trap assembly and oven are housed inside the main chamber of the vacuum assembly illustrated in Figure 4.4. The main chamber3 is a spherical octagon with eight ports, allowing for optical through-access along four separate directions. When mounted, the axis of the trap is oriented along one of these directions. Separate RF and DC feedthroughs enable electrical connections to be made between the trapping electrodes and external voltage sources. The oven feedthrough provides the same functi-
on for an external current source. The angle valve is used to smoothly break vacuum and allows a simple connection to be made
3KPI MCF600-SO2000800

CHAPTER 4. EXPERIMENTAL SETUP

65

with, for example, an external turbo pump. When fired, the titanium sublimation pump deposits a thin layer of highly reactive titanium onto the interior surface of the chamber, which acts as a getter, and reduces the internal pressure (if the surface is not already saturated). We continuously run an ion pump while under vacuum, which is the main mechanism for maintaining (and typically improving) the quality of the vacuum over time. It also provides a limited ability to monitor the internal pressu-
re, since this is related to the current through the pump. But field emission saturates this signal at about 10−9 mbar.
The average time that an ion can be contained within the trap is referred to as the trap’s lifetime. If the ion is continuously laser-cooled, the lifetime is primarily determined by the internal pressure of the chamber (for a given trap depth). In our setup, pressures on the order of 10−11 mbar, resulted in lifetimes on the order of at least a week (typically, the cooling lasers would become unstable before the ion was lost). Starting with an opened chamber, we achieved this pressure with the foll-
owing procedure:
1. With a turbomolecular pump connected through the angle valve, pump down the pressure to about 10−8 mbar, as measured by a residual gas analyzer (RGA).
2. If this is successful, confirm the quality of the chamber’s seal by spraying helium gas around the exterior while simultaneously monitoring the partial pressure with the RGA.
3. If no leaks are detected, place the chamber in a convective oven, set so that the temperature slowly ramps over several hours to about 180°C (this accounts for differences in the thermal expansion coefficients of the various materials).
4. Maintain this temperature while continuing to pump down with the turbo until an adequate pressure is reached (typically on the order of several days to several weeks, depending on the cleanliness of the interior surface). At these temperatures pressures of around 10−8 mbar are reasonable.
5. Slowly ramp down the temperature, close the angle valve and remove the turbo pump.
6. Fire the titanium sublimation a few times, which should lower the pressure another order of magnitude or so (this effect is rather immediate).
7. Activate the ion pump.
Fortunately, this procedure only needed to be performed once for the experiments in this thesis. The final pressure was estimated to be on the order of 10−11 mbar.
Magnetic field
We apply a magnetic field to the calcium ions to resolve the Zeeman levels and set their quantization axis. We generate this using a collection of Sm2Co17 magnets placed inside

CHAPTER 4. EXPERIMENTAL SETUP

66

of 3D-printed holders designed by Nicole Greene and shown in Figure 4.5. The magnitude and direction of the field are controlled by adjusting the number of layers of magnets in the various holders. Typically, we worked with a magnetic field of around 4 Gauss.

Figure 4.5: Magnets and holders. In the working configuration, two pairs of these are used. One pair each for both the horizontal and vertical directions, placed on opposite sides of the chamber. Pictures were taken by Nicole Greene.
4.3 Trapping electronics
To generate a suitable confining potential for the ions, the trap electrodes are driven with a collection of DC and RF voltage signals with magnitudes on the order of 0.1-1 kV. Connections to the external sources are made through the various chamber feedthroughs, which are internally connected to the electrodes via copper wire. In the following section, we describe the basic setup. Note that whenever a common point is indicated in a circuit diagram, it refers to a single-star ground, which is an e-
lectrically isolated copper sheet. Any circuit elements not explicitly referenced to this ground are assumed to be floating. This design is meant to prevent ground loops.
DC electronics
The voltages on the end caps and compensation electrodes are sourced by iseg SHQ222M low-noise, high-voltage power supplies. Both end caps are held at about +800 V, corresponding to a single-ion axial trapping frequency of around 1 MHz. The voltages on the micromotion compensation electrodes have to be adjusted every so often but rarely need to be set to a magnitude higher than several hundred volts. The signal from the isegs is

CHAPTER 4. EXPERIMENTAL SETUP

67

routed into the chamber through a low-pass, PCB filter board mounted directly to the DC feedthrough labeled in Figure 4.4. Each low-pass filter consists of a simple, two-pole RC design with cutoff frequencies of around 1 kHz.

DC feedthrough iseg

Figure 4.6: Low pass filter for DC electrodes.

RF electronics

To create the pseudopotential in the radial plane, the RF electrodes are driven with an oscillating voltage with a frequency of around Ω ∼ 2π × 30 MHz and an amplitude of Vp-p ∼ 300 V. This signal is generated by a Rhode & Schwarz SMB100A connected in series with a low-noise Mini Circuits ZHL-20W-13 RF amplifier. The output impedance of the amplifier is Zo = 50 ohms, whereas the electrodes are essentially capacitors with a total capacitance of Ctrap ≈ 30 pF. It is impractical to drive any purely r-
eactive load Zl from a source with real output impedance since all of the power is reflected back to and dissipated in the source:

|Preflected| =

Zl − Zo 2 Zl + Zo

(4.1)

To convert the input impedance of the trap into a real value, we combine an inductor,

of inductance L, in parallel with the trap capacitance to form the resonator illustrated in

Figure 4.7(a). The inductor is constructed by wrapping several loops of copper wire around a low-loss, iron-powder, toroidal core4. If the series resistance R is small, then the resonance

frequency ω will occur when the reactance of the inductor is approximately equal to the

reactance of the trap capacitance:

1

1

ωL =

=⇒ ω =

ωCtrap

LCtrap

(4.2)

In this case, an impulse of current sent into the circuit will oscillate back and forth between the inductor and capacitor until its energy is finally dissipated on the resistor. On resonance, the input impedance is purely real as desired:

4Amidon, material 6.

CHAPTER 4. EXPERIMENTAL SETUP

68

Figure 4.7: Impedance matching circuit. (a) The resonant circuit is used to convert the

trap capacitance to a real impedance. Each trap electrode contributes about 15 uF of

capacitance for a total of Ctrap ∼ 30 pF. Based on this value, the inductor is then chosen to

achieve the desired resonance frequency of approximately 30 MHz. The main contribution to

the non-ideal series resistance R tends to be due to the inductor (core loss and skin effect).

(b) By coupling into the resonator through a transformer, the magnitude of the real input

impedance of the resonator can be matched to Z0. Here N = Np/Ns is the ratio of primary

to secondary turns for the transformer. k is a dimensionless coupling constant, such that the

mutual inductance of the transformer is M = kL. We assume this to be ≈ 1 for the analysis

in the main text. In practice, k can be determined with the equation k =

1

−

Lp Lp

where

Lp is the inductance of the primary coil with the secondary short-circuited and Lp is its

inductance with the secondary open [3, 21]. The effect of a non-unity k on the transformer

circuit is described in detail in [3].

Zirnesonator

=

L CtrapR

(4.3)

However, choosing L such that ωres = Ω, means that Zirnesonator will be on the order of tens of kohms (for Ctrap ∼ 30 pF). So, according to Equation 4.1, most of the power will still
be reflected back into the source. For this reason, rather than drive the resonator directly,

we inductively couple into it through a step-up transformer as shown in Figure 4.7(b). The

transformer is constructed by wrapping another wire a different number of times around the

same ferrite core. According to the normal rule for transformers, the input impedance is

determined by the ratio of turns N as:

CHAPTER 4. EXPERIMENTAL SETUP

69

Zitnransformer =

Np Ns

2
Zirnesonator

(4.4)

N

Now we can achieve the desired input impedance Zitnransformer = Z0 by setting the ratio of turns as:

N=

Z0 Zirnesonator

=

Z0RCtrap L

(4.5)

Equation 4.4 is equivalent to saying that there is a voltage gain over the transformer of:

Gv

=

Vs Vp

=

Zirnesonator Z0

=

L/C RZ0

(4.6)

Alternatively, this can be written in terms of the quality factor of the resonator Q = ω/δω:

Q L/C

Gv =

Z0

(4.7)

From which it is clear that to maximize the Gv, one should also maximize Q. For R ∼ 1Ω, we achieve a voltage gain of Gv ∼ 20, while also matching the input impedance of the trap electrodes to the source.
Based on the design principles just discussed, we use the following procedure to build the full impedance matching circuit. First, we build a resonator with the appropriate frequency while also optimizing the quality factor. The parameters involved are the core/wire materials and coil geometry. Then, we add the primary coil to the core, starting with a low number of turns and then working up while optimizing on the transmitted power5 and coupling. Note that it is important not to try and optimize -
the quality factor this way. For a properly matched circuit, this will only be half of the maximum value since, in this case, half of the power is being dissipated by the source. This last point is illustrated in Figure 4.9.
The actual impedance matching circuit used in experiments, includes several additional elements, as illustrated in Figure 4.8 and described in the caption.

5Typically, we determine this by driving the circuit through a directional coupler and measuring the reflected power

CHAPTER 4. EXPERIMENTAL SETUP

70

signal generator + amplifier
rs

Vbias

10 u

Cb

10 M

DC biasing circuit

Cd1

Cd2

Ctrap

Vtrap

Cd2

Cd1

Cb capacitive dividers

Figure 4.8: Additional components. The blocking capacitors Cb and bias voltage circuit allow us to generate a DC quadrupole potential in the radial plane. The blocking capacitors are chosen such that Cb Ctrap. The capacitive dividers Cd’s, allow us to monitor Vtrap. Cd1 is chosen such that Cd1 Ctrap to avoid loading the circuit.

Figure 4.9: Impedance matching is achieved in practice by adjusting the number of turns on

the primary coil while monitoring the transmitted power. One should not try to optimize the

quality factor this way since the measured value will be half of its maximum when the circuit

is properly matched to the source. In the plot to the right, the green dashed line corresponds

to

Q

=

1 R

L C

.

The

orange

dashed

line

is

half

of

that

value.

And

the

vertical

black

dashed

line corresponds to N as given by Equation 4.5. The simulation assumes Ctrap = 30 pF,

Z0 = 50 Ω, R = 1 Ω and a resonance frequency of 30 MHz.

CHAPTER 4. EXPERIMENTAL SETUP

71

4.4 Laser system and addressing optics
The six continuous wave diode laser sources we use to prepare and control the ions are housed in a separate, temperature-stabilized room and routed to our experiment via fiber optical cables. We share these sources with the various other experiments in the lab, which reduces the human cost of maintenance. A detailed description of the optical setup in the laser room is provided in [81]. The 375 nm and 422 nm lasers, used for photo-ionizing neutral calcium, are free-running. The 397 nm, 854 nm and -
866 nm lasers used for addressing the short-lived dipole transitions in 40Ca+ are locked using a Pound-Drever-Hall scheme [27] to external reference cavities whose effective cavity lengths can be tuned remotely via piezo actuators. The 729 nm used for coherent manipulation of the ion is unique in that it requires a sub-kHz linewidth and a high-degree of long-term stability. The details of this laser are described in a separate section.
In Figure 4.10 we provide a schematic outlining the relative orientation of the lasers into the trap. In Figure 4.11 we provide a schematic of the optical control components used to further manipulate the laser light after it has been received on the optical table for the experiment.

729 nm laser
The 729 nm laser light is used to produce and manipulate coherent superpositions of the S1/2 and D5/2 states and, therefore, is required to have a uniquely narrow linewidth and long-term stability. This is accomplished by locking the diode output to a high-finesse cavity from Stable Laser Systems using a DLpro Fast Analog Linewidth Control (FALC) circuit [81]. A rough upper bound on the effective laser linewidth, at the position of the ions, is determined by Ramsey spectroscopy of the two-ion, mag-
netic f√ield insensitive (|S1/2, mj = −1/2 |S1/2, mj = 1/2 + |D1/2, mj = −1/2 |D1/2mj = 1/2 )/ 2 state, from which we estimate an FWHM value of ≈ 500 Hz (Figure 4.12) [19].
The cavity-locking process has the unintended consequence of imprinting sidebands on the laser spectrum at the frequency of the FALC’s control loop. Since these features are heavily suppressed by the cavity, they can be observed in a beat note measurement between the light coming directly out of the diode and the same light after being transmitted through the cavity. An example measurement is shown in Figure 4.13.
The position of the servo bumps, at ± 750 kHz, tends to coincide with our axial trapping frequency and can cause significant driving of the carrier transition when exciting the axial sidebands. We can reduce the strength of the servo bumps by lowering the gain on the FALC, but there is a limit before the lock becomes unstable. Instead, we use the filtered light transmitted through the cavity to run our experiments.
But the intensity is very weak, so we use a two-stage injection locking scheme to provide sufficient amplification. Details of this scheme can be found in [2] and also in Dylan Gorman’s thesis [39], but the essential idea is that the light transmitted through the cavity is used to seed another free-running 729 nm diode, known as the supervisor. If the supervisor’s

CHAPTER 4. EXPERIMENTAL SETUP

72

854 nm 866 nm top view

854 nm

397 nm 866 nm

729 nm

side view

729 nm

trap

“local beam”

chamber

chamber

375 nm 397 nm 422 nm

729 nm
“global beam”

Figure 4.10: Orientation of addressing beams relative to vacuum chamber. The 375 nm, 397 nm and 422 nm light is all output from the same fiber. The orientation is chosen such that the 397 nm beam has an equal projection on all trapping axes in order to provide efficient Doppler cooling. Two separate 729 nm beam paths are used. The ”global” 729 nm beam is directed through a pinhole in the endcaps and along the axis of the trap so that it can simultaneously address all ions. The diameter of the pinh-
ole and the distance of the endcap from the trapping point prevents us from focusing the beam waist down to more than about 100 µm. The ”local” 729 nm beam is directed down into the chamber from an elevated position and focused through a custom-built objective (Table 4.1). We can achieve a spot size with a diameter of several µm so this beam can be used for single-ion addressing.

CHAPTER 4. EXPERIMENTAL SETUP

73

Figure 4.11: Lattice room optical layout. A sketch of the optical setup in the experiment room (known as the lattice room for historical reasons). Typical laser intensities are displayed, as measured directly after the fiber from the laser room and directly before entering the vacuum chamber. During experiments, fine-tuning of the laser frequencies is accomplished using a collection of acousto-optic modulators (AOMs) arranged in standard single pass (sp) or double pass (dp) configurations. The RF -
modulation signals used to drive the AOMs are all sourced from AD9910 direct digital synthesizer chips controlled by an Artiq Sinara control crate [12] and then sent through MiniCircuits RF amplifiers (2 W). The frequencies shown next to the AOMs correspond to their center frequencies and the sign indicates whether we out-couple the positive or negative first-order modulation sidebands. A remote-controlled shutter is used to quickly switch off the photo-ionization beams after the desired number of-
 ions has been trapped. Additional details regarding the 729 nm paths are provided in Section 4.4. Not shown: various half and quarter waveplates and a cylindrical lens used for shaping the output beam from the TA.

CHAPTER 4. EXPERIMENTAL SETUP

74

(a)

(b)

Figure 4.12: Effective laser linewidth measurement. (a) Ramsey spectrosco√py of the state (|S1/2, mj = −1/2 |S1/2, mj = 1/2 + |D1/2, mj = −1/2 |D1/2, mj = 1/2 )/ 2. This state is insensitive to magnetic field noise (both branches of the superposition have the same g-factor) but sensitive to laser phase noise. The orange curve is the fit of the data (blue curve) to a Gaussian decay envelope. If we assume that the phase noise of the laser is slow relative to the wait times, we can use the fitted dec-
ay constant to make a crude estimate for the laser linewidth of approximately 500 Hz. (b) It’s interesting to compare the result in (a) to Ramsey spect√roscopy on the (|S1/2, mj = −1/2 |D1/2, mj = 1/2 + |D1/2, mj = −1/2 |S1/2, mj = 1/2 )/ 2 state, which is insensitive to laser phase noise, but sensitive to magnetic field noise. The coherence time is significantly longer, implying that, in many cases, our coherence times are limited by laser phase noise.
frequency is close enough to the seed, it will lock to it and output at the seed frequency. The supervisor’s free-running frequency is adjusted by adjusting its temperature and drive current. In general, the lock tends to become less stable as the is driven at higher currents and/or higher temperatures, which both correspond to a larger output power. This is why we require the use of two stages.
Typically, we set the injection diodes to a fixed temperature and then adjust the currents as needed during the operation of the experiment and as determined by monitoring a beat note signal between the output of the master diode and another point in the beam path downstream of the second injection locking stage. If one of the injection diodes becomes completely unlocked, the beat note signal disappears. But often, it will only become ”partially” unlocked, resulting in an excessively noisy spectru-
m. The current is then adjusted to recover a clean signal (there is a bit of an art to the process).
Once the 729 nm light is received on the experiment’s optical table, it is fed through a tapered amplifier (TA). The long 20 m optical fiber used to route the light from the laser

CHAPTER 4. EXPERIMENTAL SETUP

75

Figure 4.13: Servo bumps. Beat note measurement where 729 nm light output from the diode is overlapped on a polarizing beam splitter with the same light after being transmitted through a cavity and modulated at 80 MHz by an AOM. The intensity of the overlapped light is measured on a photo-diode. The strong sidebands at around 750 kHz (and higher multiples) are due to the cavity-locking process and are known as servo bumps.
room tends to induce significant polarization noise, which is inevitably converted to intensity noise at the position of the ions due to the polarizing beam splitters we use to maintain a well-defined linear polarization. The TA reduces this effect since we use a seed intensity well into the saturation regime (approximately 35 mW). To avoid over-seeding and damaging the TA, the seed intensity is fixed by a PID, which feeds back to an 80 MHz AOM in the laser room and uses a photodiode measurement o-
f pickoff light from a mirror before the TA. This is the primary reason for the additional AOM single passes on the local and global beam paths shown in Figure 4.11. But we find that these are also useful when modulating the light with many tones, since, in this case, using the double pass would also result in the various sum tones being imprinted on the light.
The standard deviation of intensity fluctuations on the light measured directly after the TA is about 1% of its mean. But by the time it makes it to the vacuum chamber, this is increased to about 4%. We found that we could further reduce this to about 2% by covering the entire beam path with boxes, as shown in Figure 4.14.

CHAPTER 4. EXPERIMENTAL SETUP

76

Figure 4.14: 729 nm laser intensity stability. Driven excitation of a S1/2 ↔ D5/2 transition before and after boxing the beam path (rightmost image). Blue circles are data points and the orange curve is a fit to signal with Gaussian decay envelope. From the fitted decay constant, we estimate the relative intensity fluctuations (see Chapter 2).

4.5 Imaging
Ions are imaged by collecting 397 nm light scattered off of the S1/2 ↔ P1/2 transition in a directional orthogonal to that of the laser beam. The scattered light is collected by a custom-built objective, designed by Jan Benhelm [6]. The known specifications are listed in Table 4.1. Importantly, the objective was designed to focus both 397 and 729 nm light6, so it can be simultaneously used for single-ion addressing with the help of a dichroic mirror (see Figure 4.15). Once the 397 nm light passes -
the dichroic mirror it is split into two paths with a pellicle, one goes to an EMCCD camera and the other to a PMT.
For measurement, the PMT has the advantage of high quantum efficiency and a direct interface with the real-time control stack used to run the experiments. This allows conditional logic to be performed based on measurement results in real-time. The EMCCD, a Nuvu HNu 512, is currently not supported by the control hardware so we can only talk to it in real-time (by, for example, sending a TTL pulse to trigger a detection window), but not listen to it. The quantum efficiency of the Nuvu EMCCD is quite-
 good (∼ 95 %) and we can reliably distinguish between a dark and bright ion with as low as several hundred µs of exposure time. However, we found that we needed to switch over to a binary threshold method for state discrimination, as opposed to the Gaussian fit method described in [82] and used previously (see Figure 4.16).
6but only on the optical axis

focal length f-number NA

70 mm

f/1.6 0.3125

Table 4.1: Known objective specifications.

CHAPTER 4. EXPERIMENTAL SETUP

77

Figure 4.15: Imaging setup. The same objective is used to collect 397 nm light scattered off the ion and to focus down 729 nm light onto the ion for single-ion addressing. The rotation of the upper imaging platform by 90°indicated in the figure is about the axis connecting the dichroic mirror with the EMCCD camera. Figure is adapted from [81, 39].
Figure 4.16: Camera readout fidelity as a function of readout duration. 104 camera exposures are taken with the 397 nm and 866 nm light shining on the ion, resulting in the bright distribution as labeled in the rightmost plot. And another 104 exposures are taken with the 866 nm light off, resulting in the dark distribution (population is quickly shelved in the D3/2 state). For low exposure times, the binary threshold method (illustrated in right-most images) significantly outperforms the Gaussian -
fit procedure outlined in [82]. The region of interest used for these data points was 10x10 pixels large.

CHAPTER 4. EXPERIMENTAL SETUP

78

4.6 Hardware and software control
Running a trapped-ion experiment requires the coordination and control of a number of devices, often interfaced by different computers and, in some cases, shared with other experiments. Sometimes this coordination must be specified in real time. For example, a pulse sequence consists of turning on and off a sequence of laser pulses for precise durations. For these tasks we use an Artiq control system [12]. Other tasks do not require real-time control but do require asynchronous communication with -
a distributed collection of devices spread over the lab’s local network. For these tasks, we use the LabRAD7 control software developed by the John Martinis group at UCSB.
Since the functionalities provided by LabRAD and Artiq are different, it is straightforward to combine them within a single control procedure, which we often do. For example, the Artiq control system lacks support for our EMCCD camera. So when using the camera to measure the ions at the culmination of a pulse sequence, we communicate with it via a LabRAD server. In an ”initialize” stage we set the user-specified camera parameters (e.g. region of interest, exposure time, number of exposures, etc.),-
 and then, while the experiment is running, we have Artiq generate a TTL pulse that triggers the camera to take an exposure at a specific point in time (the point at which we would like to measure the state of the ions). Since we cannot coordinate with the camera in real-time, we allow the image data to accumulate in the camera’s buffer and then transfer this information to the control PC where it is processed and stored, all of which is performed asynchronously so as not to interfere with the rea-
l-time execution of the experiment.
In the remainder of this chapter, we will describe the LabRAD and Artiq implementations in separate subsections. The entire control stack is more of a prototype than a finished product (though currently completely functional). It represents the first effort in the lab to integrate the Artiq control system into the preexisting architecture. For this reason, the focus will not be to flesh out the details but, rather, to provide a rough sketch of the basic structure and most important components, whe-
re to find things and what they do, to provide enough information for future students to pick up the development.
A schematic illustrating some of the basic components of the stack is provided in Figure 4.17 and a listing of some of the most important files and directories pertaining to the control code is found in Table D.1. In what follows, unless otherwise specified, file locations will refer to the main experimental (lattice) control computer.

LabRAD control
Essentially, LabRAD provdies us with a remote procedure call (RPC) protocol, whereby evaluation of some function defined in a LabRAD server8, living somewhere on the local network, can be requested via TCP by another program, living somewhere else on the local
7https://github.com/labrad/pylabrad/wiki 8A basic example server, written in Python, can be found at ∼/LabRAD/common/tutorial/test-server.py

CHAPTER 4. EXPERIMENTAL SETUP

79

LabRAD laser room computer
sd_dtrriaftcktrearc_kgelrobal
lattice control computer parametervault
sd_tracker_global
lattice imaging computer nuvu_camera_server

laser current controller

cavity piezo controller

to AOMs RF amps

wavemeter

Artiq Sinara crate

lattice control computer
Artiq GUI

Kasli (includes FPGA kernel)
Urukul (AD9910/9912 DDS chips)
TTL I/O (8 channel BNC)

picomotor

oven current controller

EMCCD camera

PMT

PI shutter

RF switches

Figure 4.17: Hardware/software control stack. The two main control systems we use for running experiments are LabRAD and Artiq. LabRAD consists of a collection of servers running on computers distributed throughout the lab, which can be accessed from anywhere on the local network via remote procedure calls. Servers can either interface with physical devices (yellow boxes) or be self-contained software packages (e.g. parametervault or sd_tracker_global). Artiq facilitates the real-time control of h-
ardware that includes RF signal generators and TTL input/ouputs. The user primarily interacts with both of these controls through the Artiq GUI located on the main (lattice) control computer.
network. This allows for a highly modular architecture. Servers can be run on different computers, in different languages and can be shared simultaneously by multiple end-users. For example, on the main experimental control computer (called the ”lattice control computer” in Figure 4.17) we run a GUI (called the ”Artiq GUI”), which is the primary way that a user interacts with the experimental controls. This GUI contains modules written in Python3 that allow the user to monitor and specify paramete-
rs of the laser control system located in the laser room9. But the software that provides the actual interface to the various laser control devices is run in Python2 on a computer located in the laser room. LabRAD makes the integration of these different software packages seamless.
The first step in getting LabRAD up and running for experiments is to run the LabRAD web manager and lattice_control node server. A desktop icon on the lattice control computer allows this all to be done with a single click. The code launched by the desktop icon can be
9Code located at ∼/lattice/artiq/artiq/dashboard/laser_room

CHAPTER 4. EXPERIMENTAL SETUP

80

found at ∼/launch_scripts/labrad_startup.sh. Once this is done, the lattice_imaging node server should be run on the lattice imaging computer (Windows machine), which primarily facilitates communication with the EMCCD camera.
Artiq control
Artiq is an open-source control suite, developed by M-Labs, that provides a high-level Python API for describing experiments, which can then be compiled down and run on an FPGA kernel that communicates with a collection of dedicated physical devices in real-time with sub microsecond resolution. For us, it essentially replaces the pulser and scriptscanner developed internally for running real-time experiments [82, 81]. These tools worked very well, but we found that there was a barrier to adding ne-
w features due to a lack of detailed documentation and since, on the software side, this required a working knowledge of eventdriven programming and, on the hardware side it required the design and fabrication of new digital electronics boards. Artiq’s high-level API, modular hardware architecture and well-maintained documentation10 together overcome all of these limitations.
Artiq ships ready to run experiments out of the box. But we have built a minimal API on top of that based on the architecture of the scriptscanner software. This is all defined in the PulseSequence class, which inherits from the base EnvExperiment class provided by Artiq, and can be found at11 ∼/artiq/artiq/.pulse_sequence/pulse_sequence.py on the main experimental control computer. PulseSequence does the following:
• Resets and initializes all of the Artiq hardware.
• Determines scan parameters.
• Loads all needed parameters from the parametervault LabRAD server.
• Initializes the camera or PMT for measurement.
• Iterates through the scan parameters and for each scan point, runs code from a userdefined subsequence() function.
• For each shot composing the scan point, runs code from a user-defined sequence() function.
• Performs measurement with the camera or PMT.
• Compiles the measurement data, plots it and stores it to file.
• Resets the hardware to its initial state.
10https://m-labs.hk/artiq/manual/ 11This is just a fork of the main Artiq github repo, so to incoporate any recent Artiq updates, they must be manually merged.

CHAPTER 4. EXPERIMENTAL SETUP

81

More technical details regarding the experimental control software, including the organization of the code on the experimental computer and some pulse sequence examples, are provided in Appendix D.

82
Chapter 5
Bounding causal nonlinear quantum mechanics
5.1 Introduction
Linear time evolution is a fundamental assumption of quantum mechanics [76]. Nonetheless, it has been demonstrated that reasonable theories relaxing this constraint, theories of so-called nonlinear quantum mechanics (NLQM), can be self-consistently designed [8, 97, 98, 24]. But rigorous experimental tests of these theories have been performed [91, 33, 10, 18, 96, 65] and, in all cases, no nonlinear effects were observed. Moreover, these NLQM theories have proven, quite generally, to violate causal-
ity when extended to the case of multipartite systems [37, 38, 78].
However, a fully causal NLQM (cNLQM) framework, building on earlier work by Kibble [54], has recently been proposed by David Kaplan and Surjeet Rajendran [52]. The interest in this work extends beyond simple theoretical curiosity since it predicts measurable effects that turn out to be poorly bounded by previous experiments. This is surprising given the remarkable success that standard quantum mechanics has demonstrated in accurately predicting the results of the immense amount of experiments perf-
ormed in well-controlled quantum systems in recent years. The reason underlying the lack of sensitivity to the new theory in these systems is that (a) in the proposed cNLQM framework one is no longer free to separate out the center of mass (COM) degrees of freedom and (b) the magnitude of the nonlinear effects is generally decreased as the spread of the physical wavefunction increases.
This dependency on the center of mass coordinates means that standard atomic and nuclear spectroscopy, the gold standard in precision metrology, fails to provide a sensitive testbed for cNLQM unless the COM coordinates are localized on a scale comparable to the internal atomic or nuclear degrees of freedom, which is generally not possible. According to the authors of [52], the best estimate for the previously existing bounds on cNLQM, inferred from the current uncertainty in measurements of the La-
mb shift, is just a factor 104 less than the leading order linear effects. This motivates the need for tailor-made experiments

CHAPTER 5. BOUNDING CAUSAL NONLINEAR QUANTUM MECHANICS

83

specifically designed to be sensitive to causal nonlinear effects. This is especially true given the sweeping implications a nonlinear theory of quantum mechanics would hold across all areas of physics including cosmology, gravity and quantum information processing [52, 1].
In this chapter, we summarize an experiment that was designed and performed to test cNLQM using a single trapped 40Ca+ ion [14]. The key feature of this experiment is that spectroscopy is performed directly on the quantized COM motion of the ion, which is tightly confined in a standard Paul trap. In short, a superposition of the ground and the first excited harmonic state of the ion is prepared and Ramsey interferometry is performed. The energy splitting between these two states is much smaller th-
an many of the ion’s experimentally accessible electronic transitions, which would ordinarily make them a poor choice for a precision experiment. But, as will be explained, the superposition of these states turns out to be highly susceptible to casual nonlinear effects, more than compensating for this limitation. Via this method, we can provide an improved bound of 5.4 ×10−12 on the magnitude of the unitless factor that scales the causal nonlinearity in a perturbative treatment. This represents an-
 improvement of about seven orders of magnitude compared to the previous best estimates.

5.2 Theoretical background
When applied to a physical system, the hallmark of a nonlinear theory of quantum mechanics is the presence of terms in the system’s Hamiltonian that are nonlinear with respect to its wavefunction. These terms can be interpreted as an interaction of the wavefunction with itself and, thus, tests of NLQM can be viewed as tests of the superposition principle since, even in an isolated system, a superposition of two states will generally no longer be stable in a nonlinear theory [1]. This self-interact-
ion of the wavefunction also poses the central challenge in the preservation of causality in a nonlinear theory. This is due to the two seemingly contradictory features of standard quantum mechanics that the response of the wavefunction to some local interaction is instantaneous and that the wavefunction of an entangled multi-particle state is a nonlocal property shared by all constituent particles. This means, for example, that by performing a local operation on one-half of an EPR pair whose cons-
tituent particles are separated by a sufficiently large distance, one can superluminaly affect the other half of the pair through their shared wavefunction. In standard quantum mechanics, it is well-established that this superluminal effect on the wavefunction cannot be used to transmit information – thus preserving causality. However, this protection is no longer guaranteed in nonlinear theories, since the self-interaction of the wavefunction can convert a local action into a nonlocal interaction-
 [37].
This is not to say that such a nonlocal interaction is a necessary condition of a nonlinear theory. As first pointed out by Polchinski, there do exist restricted forms of nonlinearities that are strictly causal [78]. Recently, and for the first time, a systematic approach for incorporating causal nonlinear evolution into quantum mechanics has been developed by David Kaplan and Surjeet Rajendran [52]. Their approach differs from previous constructions

CHAPTER 5. BOUNDING CAUSAL NONLINEAR QUANTUM MECHANICS

84

of NLQM in that nonlinear evolution is incorporated directly into quantum field theory (QFT) rather than as a modification to non-relativistic, single-particle quantum mechanics as has conventionally been the case. Interestingly, it is shown in [52] that, through this approach, the seemingly unmotivated constraints imposed by Polchinski can be derived as a direct consequence of QFT. The basic idea presented in [52] is to introduce nonlinearities into a system’s time-evolution by shifting any relev-
ant bosonic field operators by a small amount proportional to the expectation value of the field operator acting on the full quantum state, which in some sense adds a sort of classical field interaction where the field is sourced by the position-space distribution of the system’s interacting particles. In this way, causality is manifestly preserved through the normal machinery of field theory.
Beyond preserving causality, the QFT-first approach of the cNLQM framework presented by Kaplan and Rajendran has a couple of other features that differentiate it from previous NLQM theories. Firstly, it is a field-dependent theory. This means that it does not preclude the possibility that nonlinear effects scale differently with different interacting field theories. This feature is at odds with the motivation put forth by Steven Weinberg in his approach to NLQM [97, 98] where he hoped to propose p-
recision tests of quantum mechanics that were independent of any specific field theory. Secondly, the new cNLQM theory breaks the basis-independence of linear quantum mechanics. Instead, just as in QFT, the position basis becomes the preferred basis. This feature is essential to the preservation of causality in the theory. This is because in cNLQM the self-interaction of a particle’s wavefunction is treated as a ”physical” interaction1 rather than as a simple abstract addition of terms to its equa-
tions of motion. And the locality of this ”physical” interaction is most naturally described in the position basis.
The special significance of the position basis in cNLQM is also the main reason why bounds set by previous tests of NLQM are inapplicable to the causal theory. For example, in the experiment performed by Bollinger et al. [10] nonlinear time-evolution was tested by performing Ramsey interferometry on a superposition of two hyperfine states of a 9Be+ ion confined in a Penning trap [23]. A general feature of nonlinear time-evolution is that the phase measured by a Ramsey experiment on a two-level sys-
tem will no longer be independent of the relative population weighting of the two branches of the superposition. That is to say, for a superposition of the two hyperfine states | ↑ , | ↓ :

√ |ψ(t) = p| ↑ +

1 − peiφ(t)| ↓

(5.1)

one should expect a dependence of φ on p if nonlinearities are present in the Schrödinger
equation. This fact is used in the experiment to obtain a quite stringent bound on any possible nonlinearities on the order of a fraction 10−27 of the binding energy per nucleon of the 9Be nucleus.
But the fundamental assumption made in obtaining this bound is that the Schrödinger
equation can be expressed in an arbitrary basis – in this case, the approximate two-level basis

1In some sense, Kaplan and Rajendran’s theory can be considered as a more literal interpretation of ”wave-particle duality.”

CHAPTER 5. BOUNDING CAUSAL NONLINEAR QUANTUM MECHANICS

85

{| ↑ , | ↓ }. Under this assumption, φ is predicted to include a term due to the potential nonlinearity φnl, which scales with p, the probability of finding the ion in a particular hyperfine state – a rather abstract modification of the Schrödinger equation given its basis-independent description. The bound on the nonlinearity is then obtained by failing to measure such a dependence on p at the limits of the sensitivity of the experiment. In contrast, the nonlinear effect predicted by cNLQM is ass-
umed to be due to an electromagnetic field sourced by the properties of the ion and distributed in space according to the position-space expectation value of the wavefunction. However, the local strength of this field is damped by the large position-space spread of the ion’s wavefunction due to its orbital motion in the Penning trap, severely compromising the sensitivity of the experiment.
It is helpful to illustrate cNLQM with an example, which will also set the stage for describing our experimental test of its predictions2. Though cNLQM is, by design, a fully relativistic theory capable of handling multiple particles (as verified in [52]), it also predicts novel phenomena in the single-particle, non-relativistic limit. For example, treated perturbatively, a single particle with charge q and Hamiltonian Hˆ is predicted to have the following nonlinear time evolution:

i ∂tΨ(t, x) =

Hˆ

+

˜γ

q2 4πε0

d4x1|Ψ(t1, x1)|2Gr(t, x; t1, x1) Ψ(t, x)

(5.2)

where ˜γ is a small unitless parameter that scales the strength of the nonlinear perturbation and Gr is the relativistic retarded Green’s function from the spacetime coordinates (t1, x1) to (t, x). The nonlinear term added to the standard Hamiltonian in Equation 5.2 admits the simple interpretation of a classical Coulomb potential sourced by the quantum probability distribution of the charged particle’s position. The causality of this self-interaction is protected by the Green’s function.
In the nonrelativistic limit, when ||H||/ c/|x1 − x|, Equation 5.2 becomes:

q2 i ∂tΨ(t, x) = H + ˜γ 4πε0

d3x1

|Ψ(t, x1)|2 |x1 − x|

Ψ(t, x)

(5.3)

where it is clear that the denominator of the integrand scales with the full position-space spread of the wave function, damping the perturbation accordingly. This is the primary effect responsible for the poor sensitivity of previous experimental tests of NLQM when applied to the causal theory.
This is not to say that it is impossible to design a sensitive experimental test of cNLQM3. One rather straightforward way to accomplish this goal is to take advantage of the net charge and tight and stable spatial confinement of a trapped ion by performing Ramsey

2This example is based on notes from personal communications with David Kaplan 3Under the reasonable assumption that our observed universe is classical in the sense that it has a
significant overlap with the complete wavefunction of the total universe. See [52] for a discussion of this
point.

CHAPTER 5. BOUNDING CAUSAL NONLINEAR QUANTUM MECHANICS

86

interferometry on a superposition of the ground and first excited Fock states of one of its vibrational modes. If one prepares such a state:

√ |ψ(t = 0) = p|0 +

1 − peiφ0|1

(5.4)

(p assumed to be real) and allows it to evolve for some time T , then the dominant nonlinear effect is an additional p-dependent phase accumulation between the two branches of the superposition state:

√ |ψ(t = T ) = p|0 +

1 − peiφ0+iφL(T )+iφNL(p,T )|1

(5.5)

Here, φL(T ) is a phase accumulated due to standard quantum mechanics and proportional to the frequency of the harmonic oscillator and φNL(p, T ) is the p-dependent phase accumulated due to the nonlinear term. They are given by:

φL(T ) = νT

1 − 9p e2

φN L (p,

T

)

=

˜γ

√ 30 2π

T 4πε0x0

(5.6) (5.7)

where ν is the angular trap frequency of the harmonic oscillator, e is the fundamental charge of the electron, x0 = /mν is the characteristic length scale of a harmonic oscillator with mass m and frequency ν and ˜γ is a unitless parameter that scales the strength of the nonlinearity in this perturbative calculation (the subscript γ indicates that this nonlinear term is associated with an electromagnetic field). The expressions in Equations 5.6 and 5.7 are found by plugging in the standard quantum -
mechanical oscillator Hamiltonian into Equation 5.3 and solving perturbatively, to leading order in ˜γ, given the initial state in Equation 5.4.
All of the parameters on the right-hand side of Equation 5.7, except for ˜γ, are either known or can be experimentally controlled. The total relative phase of the superposition state at time T (Equation 5.5), Φ(T, p) = φ0 + φL(T ) + φNL(p, T ) can be measured directly using Ramsey interferometry [71]. The phase due to the nonlinearity φNL(p, T ) can then be disambiguated by repeating the Ramsey experiment with two different values of p, which allows us to compute:

∆φNL({pi}, T ) = Φ(T, p1) − Φ(T, p2) = φNL(T, p1) − φNL(T, p2)

(5.8)

The quantity ∆φNL({pi}, T ) then allows us to make an empirical estimate of the strength of the nonlinearity ˜γ. This method is particularly nice since, by default, it eliminates many potential systematic sources of uncertainty in the estimate like those due to slow drifts over time of the trap frequency ν or initial phase φ0, which might result from unstable trapping potentials or laser parameters.

CHAPTER 5. BOUNDING CAUSAL NONLINEAR QUANTUM MECHANICS

87

Even for standard experimental parameters, the φNL is not expected to be particularly small. For example, if a 40Ca+ ion has a ν ∼ 1 MHz trap frequency and is prepared in the superposition state described in Equation 5.4 it will accrue a phase of order 1010 × ˜γ for each millisecond of interrogation time. Ramsey experiments like this have been performed [88] with interrogation times exceeding tens of milliseconds. But these experiments are generally performed for a fixed p = 0.5, which maximizes t-
he Ramsey contrast. So these results cannot directly distinguish between φL and φNL. Though, for these experiments, given reasonable assumptions about the intensity stability of the laser used to generate the initial state and, thus, assumptions about the variance of the actual value of p generated from run-to-run, one should already guess that the bound on ˜γ will be tighter than the 10−4 estimate obtained from Lamb shift measurements4. Nonetheless, a dedicated experiment that directly measures ∆-
φNL({pi}, T ) from Equation 5.8 in order to obtain an unambiguous estimate of ˜γ is warranted. In the remainder of this chapter, we describe the design and implementation of an experiment that does just that.
We make two final remarks to conclude this section. First, the quantity computed in Equation 5.7 assumes an isotropic quantum harmonic oscillator for simplicity. In general, ion trap experiments are performed in an anisotropic regime. If we label the trap frequency for the vibrational degree of freedom along which we generate the superposition state as νz (formally labeled simply as ν in Equation 5.7) and label the trap frequencies for the other two spatial degrees of freedom as νx,y, then the ani-
sotropy can be accounted for by multiplying φNL by a factor of νxνy/νz. Secondly, if the ion’s vibrational modes are not initialized precisely into the ground state but, rather, a low-temperature thermal state (as would be the case for imperfect laser cooling), then this must be taken into account in the calculation of x0 in Equation 5.7. In general, the increased spread of the spatial wavefunction will reduce the strength of the nonlinear signal in addition to reducing the contrast of the Ramsey -
oscillations.

5.3 Experimental implementation
To test the new theory of cNLQM, we perform a Ramsey experiment, as described in the previous section, using a single 40Ca+ ion confined in a three-dimensional Paul trap with trap frequencies of νz ≈ 2π × 1.01 MHz, νx ≈ 2π × 2.52 MHz and νy ≈ 2π × 2.79 MHz along the three spatial axes. Here, the z-direction is taken to be along the axial direction of the trap, as defined in Chapter 2. As described in Chapter 4, confinement along the axial direction is particularly stable since the axial trapping p-
otential is sourced by DC electrodes as opposed to the RF potential used to generate the pseudopotential in the x and y directions. For this reason, it is along this direction that we ultimately prepare the Fock state superposition for the Ramsey experiment.
4Given the p-dependence of φNL, fluctuations in p will manifest as a decoherence mechanism in the Ramsey experiment provided that ˜γ is nonzero

CHAPTER 5. BOUNDING CAUSAL NONLINEAR QUANTUM MECHANICS

88

At the outset of each experimental run, the ion is prepared in the electronic state |42S1/2, mj = −1/2 using optical pumping. By subsequently exciting either the |42S1/2, mj = −1/2 ↔ |32D5/2, mj = −1/2 or |42S1/2, mj = +1/2 ↔ |32D5/2, mj = +1/2 and comparing the excitation probabilities, we confirm that the ion is indeed prepared in the |42S1/2, mj = −1/2 with a rough lower bound of 99% probability (though we expect that this probability is likely higher by at least an order of magnitude). The vib-
rational state of the ion along the axial direction, is likewise prepared with greater than 93% probability in its ground state using a combination of Doppler cooling and resolved sideband cooling. This probability is calculated5 by taking the measured ratio of the maximum excitation of blue sideband versus red sideband transitions as well as by fitting measured blue sideband Rabi oscillations to Equation 3.19. Characteristic data for these measurements is illustrated in Figure 5.1. The vibrationa-
l motion of the ion along the two radial directions is only Doppler-cooled to a mean thermal phonon occupancy of approximately 3 quanta.

Figure 5.1: Axial mode temperature measurements. (a) After preparing the ion in the state |42S1/2, mj = −1/2 and laser cooling its axial motion, blue and red sidebands of the |42S1/2, mj = −1/2 ↔ |32D5/2, mj = −1/2 transition are driven with well-focused laser light. By assuming a thermal distribution for the axial vibrational state and comparing the maximum excitation probabilities, a mean phonon occupancy of n¯z ≈ 0.073 quanta is estimated. In practice, this is determined by performing spectrosc-
opy on these transitions. (b) A complementary estimate of n¯z is found by driving a blue sideband Rabi oscillation and performing a least squares fit, again assuming a thermal distribution. In agreement with (a), this results in an estimate of n¯z ≈ 0.077 quanta.
Once the ion is initialized into the state6 |S, nz = 0 , the next step is to prepare a
5Under the assumption that the ion is prepared in a low-temperature thermal state. 6For the remainder of this section we will simplify the notation describing the ion’s state as |42S1/2, mj = −1/2 = |S , |32D5/2, mj = −1/2 = |D . We will also suppress the radial vibrational states, which don’t play a direct role in the dynamics.

CHAPTER 5. BOUNDING CAUSAL NONLINEAR QUANTUM MECHANICS

89

superposition of the ground and first excited Fock state. The simplest way to accomplish
this is to address the blue sideband with a controlled laser pulse amounting to a rotation of the ion’s state RφB0SB(θ), in the notation of Section 3.5, such that:

RφB0SB(θ)|S, nz = 0 = cos(θ)|S, 0 + sin(θ)eiφ0|D, 1

(5.9)

where we drop the explicit reference to the nz in the Fock state description here and for the remainder of this section. In this case, the experimental sequence is as illustrated in Figure

5.2(a). After a free evolution time of T , the two branches of the superposition in Equation 5.9 accumulate a relative phase with respect to the addressing laser of:

B Φ(T, p) = φ0 + 2 (gD − gS)T + φNL(T, p)

(5.10)

where p = cos2(θ) is the population of the electronic ground state and B is the magnitude

of the magnetic field at the position of the ion. After a time T , a blue sideband π-pulse

is used to map the relative phase information onto the electronic populations that are then

measured via the electron shelving method. The problem with this method is the sensitivity

of the phase to the ambient magnetic field, the stability of which limits the interrogation

time to only a few milliseconds (see Figure 5.3).

To overcome this limitation, we instead use a combination of carrier and blue sideband

pulses to generate the state [88]:

|D ⊗ (cos(θ)|0 + sin(θ)eiφ0|1 )

(5.11)

where the electronic state of the ion is disentangled from the superposition of Fock states. The procedure for preparing this state consists of two steps. First, a superposition with the desired population weightings is generated on the electronic states by driving a carrier transition. Second, a blue sideband π pulse is applied. Since, ideally, the ion is initially cooled down to its ground state of motion, this second blue sideband pulse only affects the population in the electronic state |S – t-
hus mapping the superposition of electronic states onto the vibrational state of the ions. At the end of the interrogation time, a second blue sideband π-pulse is used to remap this superposition onto the ion’s electronic states and then a final carrier π/2-pulse is used to write the relative phase information of this state onto the electronic populations. An illustration of this procedure is provided in Figure 5.2(b).
At the end of the experiment, the probability of measuring the ion to be in the state |D is explicitly given by:

A(T ) P (T ) = B − 2 cos[Φ(T, θ) + ξL]

(5.12)

Here 0 ≤ A(T ) ≤ 1 is the signal contrast, which will generally be less than one when θ = π/2 and will also generally decrease superlinearly in time due to decoherence. B ≈ 1/2 is an offset that is expected to be very close to 1/2 but may deviate slightly from this value due to imperfect state preparation and off-resonant excitations of the laser interactions. The

CHAPTER 5. BOUNDING CAUSAL NONLINEAR QUANTUM MECHANICS

90

parameter ξL is an offset in phase that depends on several relatively stable experimental parameters, like the detuning of the laser pulses from resonance, but can also be fully controlled modulo 2π by adjusting the phase of the final carrier pulse relative to the initial pulse.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:50.369Z
- **Text Length:** 176776 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
