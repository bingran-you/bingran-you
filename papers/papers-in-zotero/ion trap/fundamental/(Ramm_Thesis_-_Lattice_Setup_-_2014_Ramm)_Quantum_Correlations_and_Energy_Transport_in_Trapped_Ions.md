# PDF Document: (Thesis - Lattice Setup - 2014 Ramm) Quantum Correlations and Energy Transport in Trapped Ions.pdf

**File Path:** (Thesis - Lattice Setup - 2014 Ramm) Quantum Correlations and Energy Transport in Trapped Ions.pdf

**Processed Date:** 2026-02-10T18:17:24.572Z

**File Size:** 9230.17 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 415

**Title:** (Ramm Thesis - Lattice Setup - 2014 Ramm) Quantum Correlations and Energy Transport in Trapped Ions

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Quantum Correlations and Energy Transport in Trapped Ions by
Michael Ramm
A dissertation submitted in partial satisfaction of the requirements for the degree of Doctor of Philosophy in Physics in the Graduate Division of the
University of California, Berkeley
Committee in charge: Professor Hartmut H¨aﬀner, Chair
Professor Dmitry Budker Professor Jeﬀrey Bokor
Spring 2014

Quantum Correlations and Energy Transport in Trapped Ions
Copyright 2014 by
Michael Ramm

1
Abstract
Quantum Correlations and Energy Transport in Trapped Ions by
Michael Ramm Doctor of Philosophy in Physics University of California, Berkeley Professor Hartmut H¨aﬀner, Chair
We present experimental results of using trapped ions for the study of energy transport and quantum correlations in many-body systems. We investigate energy propagation by locally exciting one end of an ion chain and then observing the subsequent dynamics. The experimental results agree with the presented normal mode model of ion motion, and signify the ﬁrst steps towards realizing theoretical proposals of studying many-body physics with the motional degree of freedom of trapped ions. Additionally-
, we present a method for detecting correlations between an open quantum system and its environment by acting only locally on the open system. We implement this method using a single trapped ion and discuss our current work towards extending the results to larger systems. Lastly, we demonstrate how the presented method for local detection of quantum correlations can be used for detection of quantum phase transitions.

i
To my parents Mark and Sofya and my dear Alexa whose support made it all possible.

ii

Contents

Contents

ii

List of Figures

v

List of Tables

vii

1 Introduction

1

2 Ion Trapping and Laser Interaction

3

2.1 Ion Trapping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3

2.2 Ion-Laser Interactions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5

2.2.1 Coherent operations . . . . . . . . . . . . . . . . . . . . . . . . . . . 5

2.2.2 Doppler cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7

3 Experimental Setup

10

3.1 Trap Design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10

3.2 Vacuum Chamber . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12

3.3 Design Improvements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13

3.3.1 Trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14

3.3.2 Chamber . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14

3.4 Level Structure and Lasers . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16

3.5 Imaging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17

3.5.1 Ion State Detection CCD . . . . . . . . . . . . . . . . . . . . . . . . . 20

3.6 Electronics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23

3.6.1 Electrode Diagonalization . . . . . . . . . . . . . . . . . . . . . . . . 23

3.6.2 Line Triggering . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26

3.7 Experimental Control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27

3.8 Experimental Procedures . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29

3.8.1 Frequency-resolved Optical Pumping . . . . . . . . . . . . . . . . . . 29

3.8.2 Auto-crystallization . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29

4 Energy Transport

31

4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31

iii

4.2 Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33 4.2.1 Normal Mode Structure . . . . . . . . . . . . . . . . . . . . . . . . . 33 4.2.2 Fast Excitation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36 4.2.3 Energy Readout . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38
4.3 Experimental Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42 4.4 Future Pursuits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44

5 Detection of Quantum Correlations

48

5.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48

5.2 Local Detection Protocol . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49

5.3 Single Ion Demonstration . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53

5.3.1 Choice of Physical Systems . . . . . . . . . . . . . . . . . . . . . . . . 53

5.3.2 Dephasing with AC Stark Shift . . . . . . . . . . . . . . . . . . . . . 54

5.3.3 Experimental Results . . . . . . . . . . . . . . . . . . . . . . . . . . . 57

5.4 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60

6 Dephasing with Larger Environments

61

6.1 Long Trapped Ion Chains . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61

6.2 Local Signature of Quantum Phase Transitions . . . . . . . . . . . . . . . . . 63

7 Summary

69

Bibliography

71

A Detailed Experimental Control

76

A.1 LabRAD Structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76

A.1.1 Camera Server . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77

A.1.2 ScriptScanner Framework . . . . . . . . . . . . . . . . . . . . . . . . 77

A.1.3 Drift Tracker Server . . . . . . . . . . . . . . . . . . . . . . . . . . . 88

A.1.4 Pulse Sequence Synthesis . . . . . . . . . . . . . . . . . . . . . . . . . 89

A.2 GUI Applications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93

B Single Qubit Operations

98

B.1 Basis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 98

B.2 Rotations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 99

B.3 Summary of Rotations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100

B.4 Tomography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100

B.5 Ramsey Drift Tracker . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101

C Numerical and Analytical Calculations

104

C.1 Molecular Dynamics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104

C.1.1 Verlet Integration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104

C.1.2 Motion in the Trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105

iv
C.1.3 Coulomb Repulsion . . . . . . . . . . . . . . . . . . . . . . . . . . . . 106 C.1.4 Laser-Ion Interaction . . . . . . . . . . . . . . . . . . . . . . . . . . . 107 C.2 Non-Linearity in the Ion Potential . . . . . . . . . . . . . . . . . . . . . . . . 108

v
List of Figures
2.1 Potential Generated by a Paul Trap . . . . . . . . . . . . . . . . . . . . . . . . . 4 2.2 Schematic of Sideband Cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 2.3 Joint Energy Levels . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 2.4 Schematic of Doppler Cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
3.1 The Linear Ion Trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 3.2 Trap with Cavity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 3.3 Improved Linear Ion Trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 3.4 New Trap Assembly . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15 3.5 New UHV Chamber . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 3.6 Level Scheme of 40Ca+ . . . . . . . . .-
 . . . . . . . . . . . . . . . . . . . . . . . 17 3.7 Imaging Diagram . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 3.8 PMT Collection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19 3.9 Ion Reference Image . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20 3.10 Line Triggering Circuit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26 3.11 Line Triggering Spectrum . . . . . . . . . . . . . . . . . . . . . . . -
. . . . . . . 27
4.1 Long Linear Ion Chain . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33 4.2 Normal Mode Decomposition . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35 4.3 Puled Excitation and Doppler Heating . . . . . . . . . . . . . . . . . . . . . . . 38 4.4 Displaced Thermal States . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39 4.5 Sideband Coupling Strength . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 4.6 Displaced State Rabi Flops . . . . . . . .-
 . . . . . . . . . . . . . . . . . . . . . 41 4.7 The Schematic of the Energy Transport Experiment . . . . . . . . . . . . . . . . 43 4.8 Energy Transport in a Chain of 5 Ions . . . . . . . . . . . . . . . . . . . . . . . 44 4.9 The Energy of the Rightmost Ions for Long Ion Chains . . . . . . . . . . . . . . 45 4.10 The Energy Revivals in a 37-long Ion Chain . . . . . . . . . . . . . . . . . . . . 46
5.1 Open Quantum System S . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49 5.2 Local Detection Protocol . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50 5.3 Protocol Implementation Systems . . . . . . . . . . . . . . . . . . . . . . . . . . 53 5.4 AC Stark Shift Levels . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55

vi
5.5 AC Stark Shift . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56 5.6 Dephasing with Pure State . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58 5.7 Comparing Dephasing Times . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59 5.8 Dephasing with Mixed State . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59
6.1 Resolving Radial Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62 6.2 Chosen Time Evolution U (t) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63 6.3 Correlation Transport . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64 6.4 Dephased Time Evolution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66 6.5 Local Signature of Quantum Phase Transition . . . . . . . . . . . . . . . . . . . 67
A.1 LabRAD Structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
C.1 Pulsed Excitation Ramsey Technique . . . . . . . . . . . . . . . . . . . . . . . . 109

vii
List of Tables
5.1 Experimental implementation of the local detection protocol . . . . . . . . . . . 53

viii
Acknowledgments
The past six years of graduate school at Berkeley have been a remarkable journey and I have many to thank along the way. First and foremost, my advisor Hartmut H¨aﬀner, for the opportunity to join his group, his endless patience, creativity, and supply of ideas, and the freedom to pursue the topics I found exciting. Thanks to Thaned (Hong) Pruttivarasin for working together with me on the experiment: everything from the design, ﬁrst trapping, debugging, and making the ﬁnal measurements. Hong has b-
een an amazing collaborator and a great friend. Axel Kreuter was instrumental in getting the experiment up and running, and setting the right tone for the future. It was a pleasure to collaborate with Manuel Gessner and have him in lab during his stay in Berkeley. Thanks to Nikos Daniilidis for tons of useful advice and to Christopher Reilly and Mark Kokish for their contributions to the experimental control. A particular thanks to Soenke Moeller for helping the lab run smoothly. Over the years I -
have had the pleasure to work with many other talented labmates: Sankar, Dylan, Philipp, Ishan, Erick, Sebastian, Tony, Crystal, Greg, Gerbhard, Oliver, Boyan, Josselin, and Ahmed. I wish them the best of luck going forward. Finally, I also would like to acknowledge support from the DOE-SCGF fellowship.

1
Chapter 1
Introduction
Chains of trapped ions are among rare physical systems that allow for control of many interacting particles at a single quantum level. The original experiments demonstrating conﬁnement of charged particles by Wolfgang Paul in 1950s using oscillating electric ﬁelds and trapping of a single electron by Hans Dehmelt in 1973 using a combination of static magnetic and electric ﬁelds have led to inestimable progress in the ﬁeld of atomic physics. The invention of laser cooling by the groups of Dave Wine-
land and Werner Neuhauser in 1978 allowed to dramatically reduce the kinetic energies of the trapped particles. The development of sideband cooling allowed to further reduce the motional energy, reaching the ground state of motion, improving the ability to manipulate the internal state of the atom with laser ﬁelds. These advancements led to remarkable reﬁnement of precision measurements of fundamental constants, spurred laser cooling experiments with neutral atoms, and laid the groundwork for emer-
ging ﬁelds such as quantum information processing and quantum simulation.
In particular, technological advancements in the ﬁeld of atomic physics have made it possible to experimentally study the role of quantum eﬀects in the dynamics of many-body systems. This topic has been the subject of a multitude of theoretical pursuits covering farranging topics from the connection of quantum correlations and quantum phase transitions to consequences of quantum eﬀects for the eﬃciency of energy propagation in photosynthetic complexes. There have been several experiments successfu-
lly realizing a quantum phase transition with trapped ions. However, many theoretical ideas concerning the presence of quantum correlations during these transitions and, more generally, the eﬀect of the quantum correlations on the system dynamics remain unexplored.
Even in the classical regime where quantum correlations do not play a role, the motional dynamics of long ion chains presents a compelling subject of study. By increasing the number of particles from tens to hundreds, one may begin to observe the emergence or deviations from expected thermodynamic quantities, thus, experimentally validating the fundamental origins of statistical mechanics. There have been no experimental measurements of the thermodynamic quantities due to the diﬃculties of control-
ling long ion chains.
The next ﬁve chapters of this dissertation provide a detailed description of several experiments performed in pursuit of these goals. Chapter 2 reviews the theory of ion trapping

CHAPTER 1. INTRODUCTION

2

and laser-ion interaction. Then Chapter 3 describes the experimental setup for trapping and controlling long chains of ions. Chapter 4 focuses on classical measurements of energy transport across the chain. Chapter 5 then demonstrates a technique for detecting quantum correlations between two quantum systems with only access to one of the two systems. Finally the ideas of the previous chapters are combined in Chapter 6, where we make a connection between dynamics of the chain motion and the detect-
ed quantum correlations over the course of the evolution. The appendix covers numerous technical details.

3

Chapter 2 Ion Trapping and Laser Interaction

In this Chapter we review the principles of ion trapping and the interaction of the conﬁned ions with laser light. In the ﬁrst section, we describe the use of oscillating electric ﬁelds to conﬁne charged particles in a three-dimensional harmonic potential. In the second section, we describe the interaction between the conﬁned ions and laser light, covering the processes of Doppler cooling using a dipole transition and the coherent manipulation of energy levels of a quadrupole transition. These top-
ics have been extensively described in many textbooks, so we focus on the main results that will be needed for the experiment described in the thesis.

2.1 Ion Trapping

According to Earnshaw’s theorem, point charges can not be conﬁned in a stable equilibrium using static electric ﬁelds. To trap ions we, therefore, require dynamic or time-varying electromagnetic ﬁelds. Following the treatment of Leibfried et al. [2], we consider a quadrupole potential φ that is composed of static and time-varying components:

U φ(x, y, z, t) =
2

αx2 + βy2 + γz2

U˜ + 2 cos (ωrft)

α x2 + β y2 + γ z2

,

(2.1)

where U and U˜ are the amplitudes of the static and dynamic components, and ωrf is the angular frequency of the oscillating electric ﬁeld. The typical conﬁguration of Paul trap

electrodes and the generated time-varying potential are depicted in Figure 2.1. We analyze

the motion of the ion in the trap by considering the classical equations of motions along the x axis for a particle of mass m and charge Z|e|:

mx¨ = −Z|e| ∂φ = −Z|e| ∂x

U α + U˜ α cos (ωrft)

x.

This diﬀerential equation is equivalent to the Mathieu equation:

(2.2)

d2x dξ2

+

(ax

−

2qx

cos

(2ξ))

x

=

0

,

(2.3)

CHAPTER 2. ION TRAPPING AND LASER INTERACTION

4

(a) Paul trap electrodes (b) Dynamical trapping at saddle point

GND

V sin !rft

!rf

V sin !rft

GND

Figure 2.1: On the left is the standard Paul trap electrode conﬁguration. An oscillating voltage with frequency ωrf is applied to one pair of electrodes while the other pair is held at ground. Dashed lines indicate the resultant electric ﬁeld of the generated quadrupole potential. The oscillating quadrupole potential is depicted on the right. The ion is trapped at the saddle point of the potential where the electric ﬁeld strength is zero. The diagram is adapted from [1].

where ξ , ax and qx are dimensionless variables representing time, strength of static and oscillating ﬁelds, respectively:

ξ = ωrft , 2
4Z|e|U α ax = mωr2f ,
2Z|e|U˜ α qx = mωr2f .

(2.4) (2.5) (2.6)

The solution to the Mathieu equation is studied by Floquet theory. While the most general

solution has no closed form,

∞

∞

x(ξ) = Aeiβξ

C2nei2nξ + Be−iβξ

C2ne−i2nξ ,

n=−∞

n=−∞

(2.7)

the lowest-order approximation to the ion motion in the stability region is given by [2]:

x(t)

=

2AC0

cos(βx

ωrf 2

t)(1

−

qx 2

cos(ωrft))

,

(2.8)

where βx is deﬁned as:

βx =

ax +

qx2 2

.

(2.9)

CHAPTER 2. ION TRAPPING AND LASER INTERACTION

5

We observe that the ion exhibits oscillatory motion at the secular angular frequency ω = βxωrf/2 superimposed with oscillation at the driving frequency ωrf. The latter is called micromotion because its amplitude is reduced by the factor qx/2. Disregarding the driven motion at the frequency ωrf, the ion’s secular motion corresponds to conﬁnement in a harmonic potential with the natural frequency ω. This result may also be derived by making the pseudo potential approximation [3]. The eﬀective potent-
ial is given by

U

=

Q2 2mωr2f

Ex2

,

(2.10)

where Q is the total charge Q = Z|e|, and Ex2 is the time-averaged square of the electric ﬁeld.

2.2 Ion-Laser Interactions

2.2.1 Coherent operations

In this section, we consider the interaction of a two-level conﬁned ion with a traveling light wave. This analysis applies to the laser at 729 nm interacting with the narrow S1/2 – D5/2 transition of Ca+. The transition will be employed in the experiments for determining the state of the ion motion and preparing quantum correlations between the ion’s electronic state and its motion.
As shown in section 2.1, the ion is eﬀectively conﬁned in a harmonic potential with the oscillation frequency ω. Additionally, we assume that the ion has two electronic energy levels with the atomic transition frequency ωa. The bare Hamiltonian H0 is then given by

H0

=

p2 2m

+

1 mω2x2 2

+

1 2 h¯ ωaσz

,

(2.11)

where p is the ion momentum and σz is the third Pauli spin matrix. When the ion is interacting with the traveling light wave, the total Hamiltonian is the sum of the bare Hamiltonian H0 and the coupling Hamiltonian Hc [4, 5, 2]:

1 Hc = 2h¯Ω0 (σ+ + σ−)

ei(kx−ωLt+φ) + e−i(kx−ωLt+φ)

,

(2.12)

where ωL, k, and φ are the frequency, wave vector, and phase of the traveling wave, and σ+ and σ− are the raising and lowering operators. The Rabi frequency Ω0 describes the interaction strength in the presence of micromotion. The ion motion in the trap is quantized in the standard way:

x = h¯ (a† + a) , 2ωm
p = i h¯ (a† − a) , 2ωm

(2.13) (2.14)

CHAPTER 2. ION TRAPPING AND LASER INTERACTION

6

using the raising and lowering harmonic oscillator operators a† and a. The total number of vibrational quanta, or phonons, is deﬁned as the expectation value of the number operator N = a†a. Additionally, we deﬁne the Lamb-Dicke η parameter as the ratio of the traveling wave wavelength and the extent of the ion’s ground state wave function:

h¯

η=k

.

2mω

(2.15)

We calculate the interaction Hamiltonian by performing the transformation Hint = U †HcU with U = exp[−iH0t/h¯]. Performing the rotating-wave approximation yields [2]

1 Hint = 2 h¯Ω0

σ e e + σ e e iη(ae−iωt+a†eiωt) i(φ−δt) +

−iη(ae−iωt+a†eiωt) −i(φ−δt) −

,

(2.16)

where δ = ωL − ωa is the detuning between the laser and the atomic transition. Controlling

the laser detuning allows to resonantly couple the ion’s electronic and motional states. Set-

ting the detuning δ ≈ lω for some integer l couples the states in the form |g |n and |e |n + l

with the Rabi frequency Ωn,n+l, where |g and |e are the electronic states of the atom and

|n is the number state with n phonons in the trap. The coupling strength Ωn,n+l is given

by

Ωn,n+l = Ω0| n + l|eiη(a+a†)|n | ,

(2.17)

where the matrix element may be expressed in terms of a Laguerre polynomial [2]. The transitions can be driven individually in the resolved sideband regime: small detuning δ − lω ω, suﬃciently weak coupling Ωn,m ω for all possible n and m, and narrow excited state linewidth Γ ω. The integer l is called the order of the sideband. The ﬁrst blue sideband corresponds to l = +1 and the ﬁrst red sideband is l = −1 while l = 0 is known as the carrier excitation. The ion trapping experiments are typically-
 conducted in the Lamb-Dicke regime where the spatial extent of the ion’s wavepacket is much less than the wavelength of the atomic transition, η 1. In this regime, the interaction Hamiltonian may simpliﬁed by expanding for small η. Particularly for the ﬁrst red sideband l = −1, Hint ≡ Hrsb reproduces the Jaynes-Cummings Hamiltonian:

1 Hrsb = 2 h¯Ω0η

aσ+eiφ + a†σ−e−iφ

.

(2.18)

This interaction is used to perform sideband cooling, as described in Figure 2.2. The ﬁrst blue sideband l = 1 gives rise to the anti-Jaynes-Cummings interaction:

1 Hbsb = 2 h¯Ω0η

a†σ+eiφ + aσ−e−iφ

.

(2.19)

The red and blue sideband interactions are depicted in Figure 2.3.

CHAPTER 2. ION TRAPPING AND LASER INTERACTION

7

Laser
+

Carrier

+

Laser

Red motional sideband

Blue motional sideband

Frequency

Figure 2.2: Sideband cooling is performed in the regime of resolved motional sidebands. The laser frequency is tuned to resonance with the ﬁrst red motional sideband: the laser frequency is equal to the frequency of the carrier transition minus the trap frequency. When the laser promotes the ion from the ground state to the excited electronic state, the number of phonons decreases by 1. The ion then spontaneously decays back to the electronic ground state, or is repumped back to the ground state w-
ith an additional laser.

2.2.2 Doppler cooling

We perform Doppler cooling to reduce the kinetic energy of the trapped ions and conduct experiments in the Lamb-Dicke regime. We use the S1/2–P1/2 transition with a short lifetime where the resolved-sideband condition does not hold due to the large transition linewidth Γ ω. The intuitive scheme of Doppler cooling is presented in Figure 2.4. Mathematically, the process is treated semi-classically. We assume that the two-level atom is interacting with a laser detuned by ∆ from the atomic transition.-
 Each scattered photon transfers momentum onto the atom, resulting in the radiation pressure force F ,

F = h¯kΓρee ,

(2.20)

where ρee is the excited state probability,

s/2 ρee = 1 + s + (2δeﬀ/Γ)2 ,

(2.21)

with the saturation parameter s = 2Ω2/Γ and the eﬀective detuning δeﬀ = ∆ − kv. The excited state probability is greatest when the laser is on resonance δeﬀ = 0. For a red

CHAPTER 2. ION TRAPPING AND LASER INTERACTION

8

Electronic State
|e

Motion

Joint Energy Levels
|e, n + 1i
|e, ni |e, n 1i

⌦ 729 nm
|g

|g, n 1i

|g, ni

|g, n + 1i

Figure 2.3: The laser at 729 nm couples the electronic and the motional states of the ion. When the laser is tuned to the frequency of the carrier transition (black), the motion is not aﬀected. Tuning the laser to the red motional sideband (red) couples the states in the form |g, n and |e, n − 1 . This process is used to perform sideband cooling. Tuning the laser to the blue sideband (blue) couples the states in the form |g, n and |e, n + 1 . This interaction will be used to create quantum correla-
tions between the electronic state and the motional degree of freedom.

detuning ∆, the atom is more likely to absorb a photon when it’s moving towards laser

than away from it, resulting in a net cooling eﬀect. For small velocities, the force may be

linearized F = F0(1 + κv) where the prefactor F0 = F (v = 0) and the viscosity coeﬃcient

κ

=

∂F ∂v

(v

=

0).

The

viscous

force

reduces

the

atom’s

kinetic

energy,

but

the

random

nature

of the scattering events provides a heating mechanism. The heating and the cooling are

balanced at the equilibrium temperature known as the Doppler limit,

√

h¯Γ 1 + s

Tmin =

(1 + ξ) , 4kB

(2.22)

where kB is the Boltzmann’s constant and ξ is the geometric projection of an emission recoil kick onto the considered axis, ξ = 2/5 for dipole emission.

CHAPTER 2. ION TRAPPING AND LASER INTERACTION

9

Laser

Laser
+
Frequency

Laser
+
Figure 2.4: The schematic of the Doppler cooling process. The laser frequency is set to be below the atomic transition. Due to the Doppler eﬀect, the ion is more likely to absorb a photon when it is moving in the direction opposite to the laser wave vector. The absorbed photon is reemitted in a random direction. The net eﬀect leads to a decrease in the ion’s kinetic energy.

10
Chapter 3
Experimental Setup
In this section we describe the ion trapping apparatus used for the presented experiments. The design goals for the setup include construction of a general-purpose ion trap to study energy transport in ion chains, and an in-vacuum optical cavity with the purpose of localizing the ions in the standing wave and performing quantum simulations of oscillator chain models. We, ﬁrst, describe design and operation of the ion trap constructed to accommodate these goals. We also present the ultra-high-vacuu-
m (UHV) chamber that houses the trap and provides optical access for ion-laser interactions. The next section focuses on the improved design for the next generation of the trap and the chamber, both currently under construction. The last sections describe imaging the ions, the electronics used in the experiment, and gives an overview of experimental control software.
3.1 Trap Design
Selecting a suitable ion trap design was a crucial consideration in planning the entire experiment. To perform experiments with ion chains, it was clear that we had to use a linear ion trap to generate the suitable conﬁning potential. Additionally, our goal was to overlap the chain of conﬁned ions with a standing light wave. To achieve the best stability of the standing wave with respect to the ions, we wanted to generate the standing wave with an optical cavity placed inside the vacuum chamber. B-
oth the trap and the cavity mirrors would be subject to the same vibrations, minimizing their relative movement. The selected ion trap, therefore, had to fulﬁll additional requirements: it had allow for optical access in the direction along the ion chain, and had to provide the means of precisely positioning the standing wave with respect to the ions.
The main choice for the trap geometry consisted of either using three-dimensional trap geometry similar to Paul’s original design or using a surface ion trap, which were a relatively new technology at the time of experiment planning. The main advantage of the surface design is that the electrodes are precisely patterned using standard lithography techniques. The exact positions of the ions is known ahead of time, making it easier to overlap the standing

CHAPTER 3. EXPERIMENTAL SETUP

Hole for optical access

PEEK frame

11
Kapton wire

DC RF DC

Compensation electrodes

Figure 3.1: On the left is the schematic for the linear ion trap showing the DC and RF stainless steel electrodes supported by a PEEK frame. An additional hole in the frame provides axial optical access. The gap between the electrodes is 1 mm and the width of the RF electrode is 3 mm. On the right is the assembled and wired trap as installed in the experiment.

light wave. The ion is trapped hundreds of microns above the surface, providing optical access from all directions. However, due to the short distance between the ions and the electrodes, the surface traps were known to exhibit surface charging eﬀects and anomalously high heating rates.
In contrast to surface traps, the technology of three-dimensional traps was well established. They had been used for decades in a number of laboratories around the world, and were known to be reliable in operation. In the three-dimensional designs, the ions are trapped farther from the nearest electrodes (typically on the order of 500 µm), avoiding the undesired surface eﬀects. The main disadvantage is that these traps consist of many delicate parts that require precise machining. This makes it ch-
allenging to prealign the optical cavity to the eventual ion position. Typically the axial conﬁnement is provided by endcap electrodes which block optical access along the chain of trapped ions.
Above all, we wanted the experiment to operate reliably, and so after taking all of the presented considerations into account, we chose to use a three-dimensional trap. We based the design on the trap used at the University of Innsbruck [6], altering the model to make it compatible with our requirements.
The technical drawing and the constructed trap are shown on Figure 3.1. The electrodes are made of 316L stainless steel, while the supporting frame is constructed from PEEK, an UHV-compatible plastic material. After machining, the stainless steel electrodes were electropolished in sulfuric acid using recipe SS-4 in [7]. The gap between the electrodes is

CHAPTER 3. EXPERIMENTAL SETUP

12

1 mm and the center blades are 3 mm in length. The end pieces have a central hole for optical access along the ion chain. The shape of the endcap electrodes of the Innsbruck design was modiﬁed to match the blade geometry of the RF electrodes. The electrodes are squeezed together and we use Kapton tape to insulate them electrically. The voltage breakdown between adjacent electrodes was tested under vacuum for DC voltages up to 4 kV. The voltage values for trap operation are stated in section 3.6. W-
e typically operate the trap with the radial conﬁnement frequency of 3 MHz and much lower axial conﬁnement of 200 kHz.
The standard linear ion trap is operated with a pair of radio frequency (RF) electrodes and a pair of electrodes held at ground. Due to the ﬁnite length of the electrodes, this conﬁguration results an oscillating potential along the length of the trapping axis. This oscillating potential results in a driven axial motion of the ions called micromotion. In order to avoid this eﬀect, we supply the voltage in an out-of-phase conﬁguration. One pair of electrodes is still supplied with RF while the othe-
r pair is supplied with the same RF 180 degrees out of phase. The produced potentials cancel along the trap axis, avoiding the axial micromotion.

3.2 Vacuum Chamber
The optical cavity is designed for the wavelength of 405 nm, far detuned form the S1/2 − P1/2 transition. The mirrors have reﬂectivity of 99.5% and the radius of curvature of 38 mm. The resultant cavity was set up in a near-concentric conﬁguration with the waist of 25 µm, and ﬁnesse of 600. Both the ion trap and the optical cavity were mounted inside a spherical octagon1 vacuum chamber, as shown on Figure 3.2. The cavity mirrors were glued to a U-shaped stainless steel piece, which was attached to-
 an XYZ manipulator2 and free to move relative to the trap. For attaching the cavity mirrors, we used ultra-violet curable, low outgassing epoxy3. The plan was to ﬁrst trap the ions and then position the cavity to overlap the waist of the cavity with the ion position. Once overlapped, the cavity could be secured in place with a screwdriver inside the vacuum chamber attached to a wobble stick4.
We conducted several preparatory bakes to clean the parts and the chamber as much as possible before the ﬁnal pumpdown. All of the stainless steel parts that were machined in a machine shop were cleaned in acetone and isopropanol and baked under vacuum at 300◦C for one week to remove all the oil residue and other contaminants. We conducted the same bakeout procedure for all of the vacuum chamber parts that could withstand the high temperature, using blank ﬂanges instead of viewports. The glued cav-
ity was baked to conﬁrm the UHV properties of employed epoxy and make sure that it stays aligned despite the temperature ramps.
1Kimball Physics MCF600-SO200800 2Thermionics EC-1.39-2-B600 3Dymax OP-67-LS 4Thermionics FWS-44R-275-2

CHAPTER 3. EXPERIMENTAL SETUP
Cavity mirrors

13
Cavity mirrors

Cavity U-bench
Figure 3.2: On the left is the schematic of the ion trap together with the optical cavity at 405 nm. The cavity mirrors are attached to the U-shaped stainless steel piece that is free to move independently from the ion trap. On the right are the ion trap and the cavity placed inside the UHV chamber. The distance between the mirrors is close to 76 mm.
The ﬁnal assembly was baked for three weeks at a moderate temperature of 200◦C compatible with the XYZ manipulator and the wobble stick. After the ﬁnal bake, the pressure inside the chamber reached ∼ 2 × 10−9 torr. At this point we also activated the Titanium sublimation pump to pump out the present hydrogen. We discovered that the pressure was limited by a small leak in the angle valve. In the process of leak testing we sprayed the problematic ﬂange with water, managing to seal the leak and reduc-
ing the pressure by one order of magnitude to ∼ 2 × 10−10. Since then, the experiment has been under vacuum for four years with the pressure improving beyond the measurement limit of the ion gauge. The current pressure inside is less than ∼ 5 × 10−11 torr, leading to very few observed collisions of trapped ions with the background gas even while working with long ion chains. We typically observe a single collision-induced excitation to a dark state per hour in a chain of 10 ions.
3.3 Design Improvements
The presented chamber was our ﬁrst assembled in Berkeley and we have been fortunate to have conducted the ﬁrst generation of experiments without ever breaking vacuum. In this section, we describe the shortcomings of the current design and our plans for the second generation trap and chamber, currently under construction.

CHAPTER 3. EXPERIMENTAL SETUP

14

Compensation electrodes (4x) Hole for optical access

DC

RF DC Macor frame

Filter board

Figure 3.3: On the left is the schematic for the improved linear ion trap. All of the electrodes are supported by a Macor frame. The DC electrodes have holes for optical access. The design includes four compensation electrodes to circumvent shielding eﬀects. On the right is the assembled trap with the attached ﬁlter boards. The width of the RF blade is 4 mm.

3.3.1 Trap
The PEEK material used for the insulating parts of the chamber was found to be too soft to allow precise positioning of the trap electrodes. In the new design of the trap, it has been replaced with Macor. Ensuring relative alignment between the DC and RF blades was particularly problematic so in the new design we modiﬁed the endcap electrodes. They are nearly cylindrically-symmetric and have a hole in the center to allow for axial optical access. While all of the stainless steel electrodes in the -
new design are secured with screws to the Macor support pieces, their placement is controlled with tightly ﬁtting dowel pins.
The current trap design included only two compensation electrodes, as shown on Figure 3.1. We assumed that the common voltage on the two electrodes would produce a vertical electric ﬁeld at the ion position, while the diﬀerential voltage would produce a horizontal electric ﬁeld, thus allowing to compensate micromotion in both of the directions. In practice we found that even for common voltages up to 2 kV on the compensation electrodes, the ion displacement in the vertical direction was minimal. W-
e attribute this to the shielding eﬀect of the stainless steel blades. The new design will have two compensation electrodes on the bottom and two on the side, allowing to compensate micromotion in both directions even if the produced electric ﬁelds are shielded. The design also includes a mounted ﬁlter-board to ﬁlter out electrical noise as close as possible to the electrodes.
3.3.2 Chamber
In the current setup, we have not been able to in couple laser light into the assembled cavity. This prevented us from conducting experiments realizing the Frenkel-Kontorova model in

CHAPTER 3. EXPERIMENTAL SETUP

15

Cavity mirrros
Figure 3.4: The new trap assembly shows two cavity mirrors attached to the same support piece as the ion trap. The distance between the mirrors is 10 cm.
the current apparatus5. There are several possible explanations for the cavity misalignment. Even though the optical cavity was tested to withstand the bakeout temperatures, it could still have misaligned during the ﬁnal pumpdown. After the bake, the XYZ translation stage holding the cavity became coarser and more diﬃcult to maneuver. It’s also possible that the beam of neutral calcium from the oven was not suﬃciently well collimated and covered the cavity mirrors. The actual cause of the problem -
will only become known when the current setup is opened, but the new design of the chamber already addresses the most likely explanations.
In order to make cavity less prone to misalignment during temperature ramps, the new design calls for a near confocal instead of a near concentric conﬁguration. The larger resultant waist and the corresponding decrease of the light intensity at the ion position will be compensated by higher cavity ﬁnesse resultant from higher reﬂectivity of the cavity mirrors. The new design also involves a simpler construction: the cavity will have a larger waist, making it easier to prealign it to the trap. The -
cavity will be glued directly on the same mount as the trap. There is no longer a need for the added complexity of the in-vacuum XYZ translation stage and the wobble stick.
The new design of the chamber introduces several improvements. With the removal of the wobble stick and component rearrangements, there will be better optical access with seven available viewports. The chamber is electrically insulated from the optical table, reducing the noise pickup. The octagon is electrically insulated from the grounded ion pump via an
5For more on the proposed experiments to detect the sliding to pinned phase transition in the FrenkelKontorova model see Refs. [8, 9].

CHAPTER 3. EXPERIMENTAL SETUP Trap assembly

16 Angle valve

RF feedthrough

Ion pump
DC feedthrough

Titanium sublimation pump

Ion gauge Oven feedthrough

Figure 3.5: The new UHV Chamber improves on the design of the current setup. The feedthroughs for the RF and DC electrodes are separated. The trap assembly is placed inside the octagon, providing seven viewports for optical access.

insulating nipple. The DC and RF feedthroughs are moved to separate ﬂanges, allowing to ﬁlter the DC wires as close as possible to the chamber. Finally a new oven construction with an additional pinhole improves collimation of the neutral calcium beam.
3.4 Level Structure and Lasers
For the experiments we use a number of diﬀerent laser sources. They, along with the conﬁguration of the double passes, are described in detail in Thaned Pruttivarasin’s thesis [9] so here we provide a general summary. For calcium photoionization we use laser light at 422 nm, generated by frequency doubling a diode laser at 844 nm, and a 375 nm laser. The level scheme of ionized calcium is shown in Figure 3.6. We perform Doppler cooling with the diode laser at 397 nm to address the S1/2 − P1/2 tran-
sition. The lasers at 866 nm and 854 nm repump the ion from D3/2 and D5/2 states, respectively. The 397 nm laser and both repumping lasers are referenced to optical cavities in order to stabilize their frequencies. The diode laser at 729 nm is locked to a high ﬁnesse cavity and addresses the narrow S1/2 − D5/2 transition.

CHAPTER 3. EXPERIMENTAL SETUP

17

2P3/2 2P1/2

854 nm

397 nm

866 nm

729 nm

2D5/2 2D3/2

2S1/2

Figure 3.6: Level scheme 40Ca+. We perform Doppler cooling on the S1/2–P1/2 transition. The laser at 729 nm addresses the narrow S1/2–D5/2 transition. The electron shelving method allows to detect with high ﬁdelity whether the ion is in the ground state S1/2 or in the excited state D5/2.

3.5 Imaging
The purpose of the imaging system is to collect as much ﬂuorescence as possible from the trapped ions, and in addition, to narrowly focus onto the ions the laser beams at 729 nm. The ﬂuorescence is collected through the top viewport of the chamber. The imaging diagram is shown in Figure 3.7. The ion ﬂuorescence is focused with a custom-made objective6 designed to correct for chromatic aberrations at 397 nm and 729 nm [10]. The objective is approximately 70 mm away from the trapped ions. It can be -
precisely positioned with a manual XYZ translation stage7. At the working distance of the objective, the image is focused approximately 75 cm away. The collected light is reﬂected by a 2” silver mirror chosen to be highly reﬂective at both 397 nm and 729 nm. After the mirror, the light is sent into the imaging box. Inside, it is split with a 55% / 45% pellicle beamsplitter8 between a
6Silloptics 7Thorlabs PT3/M 8Thorlabs BP245B5

CHAPTER 3. EXPERIMENTAL SETUP

18

objective

Ca+

729 nm addressing

silver mirror

397 nm ﬂuorescence

detection box
/2 main 729 nm
/2 aux 729 nm

/2

dichroic

pellicle
PMT slit

CCD

Figure 3.7: The imaging diagram from Thaned Pruttivarasin’s thesis [9]. The ﬂuorescence from the ion is collected with an objective and then split among a CCD and a PMT. Two laser beams at 729 nm are overlapped on a beam cube and are counter-propagated along the imaging system.

CHAPTER 3. EXPERIMENTAL SETUP

19

1000

800

Occurence

600

400

200

00

10

20

Co30llected Cou4n0ts

50

60

70

Figure 3.8: Photons collected by the PMT in 3ms. The two distinct distribution arise from the cases when the ion is in the D5/2 state (left) and the S1/2 ground state (right).

photomultiplier tube (PMT)9 and an electron-multiplying (EM) CCD Camera10,11. Light at other wavelengths than 397 nm is ﬁltered out with two band-pass ﬁlters12. As much
of the optical path as possible is enclosed with plastic 2” tube to prevent stray light. We typically collect a maximum of ∼ 30, 000 counts per ion per second with the PMT. The overall detection eﬃciency for the setup was measured to be 1.2 × 10−3 by using a series of population transfers [11].
Two laser light beams at 729 nm are overlapped inside the imaging box. They are
counter-propagated along the imaging system using a dichroic mirror in order to produce a
tight focus at the ion position. The direction of both beams can be adjusted using electrically actuated mirror mounts13.
Using the imaging system, it is possible to detect with high ﬁdelity whether the ion is in
the ground state S1/2 or the excited states D5/2. If the ion is in the ground state when we switch on Doppler cooling, it will continuously scatter photons at 397 nm. If the ion is in
the D state, it will remain dark with the Doppler cooling beams on. The two cases result
in the histogram of counts collected on the PMT as shown on Figure 3.8. By setting the
discrimination threshold in between the two distributions, we can determine the probability
of the ion being in the state D5/2.
9Sens Tech P25PC 10Andor Luca 11Depending on the experiment, the beamsplitter is removed and all of the light is directed to either of the detectors 12Semrock FF01-377/50-25 and FF01-417/60-25 13Newport Picomotor 8821

CHAPTER 3. EXPERIMENTAL SETUP

20

(a) Reference Image

(b) Sample Image

y pixels

y
θ x

x pixels

x pixels

Figure 3.9: (a) The reference image of an 8-ion chain shown along with the chain rotation angle θ. The black circle is the center of the chain with the coordinates (x0, y0). (b) The sample image to test the state detection algorithm – the ion state is determined to be r = [1, 0, 0, 0, 0, 0, 0, 0]. Note that the images are stretched vertically in order to demonstrate the rotation angle.

3.5.1 Ion State Detection CCD
In this section, we describe the procedure used to perform state detection with the CCD camera. The CCD is advantageous for detecting the state of multiple ions in the trap. While the PMT has a higher detection eﬃciency of ∼ 25% at 397 nm, it only collects the total emitted photons and does not provide information about which particular ion is bright or dark. The CCD allows to obtain this information at the expense of additional complications: the CCD method requires a longer exposure time of 10 m-
s, a ﬁtting procedure and a reference image are needed to determine the ion state, and it is more diﬃcult to establish the statistical conﬁdence of the result.
When using the CCD for state readout, we, ﬁrst, specify the region of interest – the range of camera pixels that fully contain the trapped ions. Reducing the region of interest improves both the transfer rate of the image to the computer and the speed of the ﬁtting algorithm. These are important considerations because hundreds of images need to be taken to precisely determine the expectation values of the ion state. We then specify the exposure parameters: EM gain, pixel binning and the exposure t-
ime. By varying the readout parameters, we found that the state detection worked best with 2 × 2 pixel binning and EM gain set to 200 out of the maximum of 255. The former improves signal-to-noise while the latter avoids many “hot” pixels appearing at the maximum gain setting. These optimized settings allowed us to reduce the required exposure time to 10 ms. This is still much longer compared to 1.5 ms required for the PMT, pointing to the large diﬀerence in detection eﬃciencies.

CHAPTER 3. EXPERIMENTAL SETUP

21

With all of the settings optimized, we take a reference image as shown in Figure 3.9. This

is done with all of the ions bright at the same laser parameters and for the same exposure at

the eventual state readout. We usually average several hundred images, each exposed for the

state readout duration, to produce the reference image. The reference image is then ﬁtted

with the model below to extract all of the relevant parameters about the ion positions and

intensity14:

i<N

I(x, y) = I0 + A N (xi, yi, σ2) ,

(3.1)

i=0

where I(x, y) is the pixel intensity of the reference image, I0 is the background level, A is the ion intensity, N is the total ion number of ions, and N (xi, yi, σ2) is the Gaussian distribution centered at the position of ion i, (xi, yi), where every Gaussian has the same standard deviation σ:

N (xi, yi, σ2) = exp

−

(x

−

xi)2 + (y 2σ2

−

yi)2

.

(3.2)

We place additional constraints on the ion positions by assuming that the ions form a linear chain. In this case, the relative ion positions are determined from the equilibrium between the Coulomb potential and the trap conﬁnement. The positions are given by:

xi = x0 + si,N l cos θ , yi = y0 + si,N l sin θ ,

(3.3) (3.4)

where (x0, y0) are the center coordinates of the chain, θ is the rotation angle of the chain axis relative to the coordinate system, si,N is the relative position of ion i, and l is the length scale converting the relative position to distance in pixels. The relative positions si,N are calculated numerically ahead of time for the chain of the given length N . For a listing of the precalculated relative positions see Table 1 in Ref. [12].
The free parameters of the model are the background intensity I0, the ion intensity A, the chain center (x0, y0), the chain rotation angle θ, and the length scale l. The number of ions is held constant and is speciﬁed beforehand. The ﬁtting procedure is fully automated: all of the initial guesses for the parameters are extracted directly from the reference image, requiring no user intervention.
We brieﬂy describe the methods for automated parameter extraction that worked well in practice. The guess background intensity I0 is found by taking the mean of the pixel values along the edge of the image - where we assume no ions are located. We also calculate the standard deviation of intensity of these background pixels. All of the pixels three standard deviations above the background are assumed to belong to the ions. If no such pixels are found, the threshold is progressively lowered. The me-
an of the positions of the ion pixels
14For consistency with the software implementation, we use the Python indexing convention, denoting the left-most ion as ion 0.

CHAPTER 3. EXPERIMENTAL SETUP

22

are used to guess the center of the ion chain (x0, y0) and the mean value to guess the ion intensity A. The variance of the positions is also used to guess the length scale l15.

The width of the Gaussian, σ is assumed to be 1 since the intensity of each ion is typically
contained in an area of 2 × 2 pixels. The rotation angle θ is guessed to be zero because it’s known to be small, θ ∼ 3◦. In fact, to make the algorithm more robust, the ﬁtting is ﬁrst

done with the angle ﬁxed at θ = 0 to optimize the other parameters, and only then θ is

varied.

Once the reference image is ﬁtted, we are ready to perform state detection. For each

collected image, the goal is to determine which of the ions, if any, are dark. The ion state

is represented by an N-long vector r where each entry ri is either 0 (bright) or 1 (dark),

ri {0, 1}, see Fig. 3.9. The expected intensity for this combination of bright and dark ions

is:

i<N

Ir(x, y) = I0 + A (1 − ri)N (xi, yi, σ2) .

(3.8)

i=0

We determine the state vector by ﬁnding one that minimizes the mean-squared error to the

state readout image. In the current implementation, we do this by sampling over all of the 2N possible state combinations16. Additionally, we extract the conﬁdence of the ﬁt by

comparing the errors from the best and the second best combinations. We found empirically

that state direction has a very high ﬁdelity when the error of the second best combination

is at least 20% larger than the best combination. It is also useful to monitor the conﬁdence

level: a drop in conﬁdence indicates that the ions drifted away from the previous positions

and another reference needs to be taken.

15It is important to have an accurate initial guess for the spacing l to order to avoid local minima of the minimization procedure. For example while ﬁtting a ﬁve-ion chain, if the initial guess for spacing is too long then the ions to the left and to the right of the center will get overlapped with the extreme ions of the image. The spacing guess is also extracted from the image: consider the chain of N ions to lie along the x axis, centered at x = 0 with the spacing length scale l. The position -
of the i-th ion xi = si,N l. Each ion is assumed to be 1 pixel wide to make the analysis easier. Once the bright pixels are identiﬁed, we can compute the variance of their positions:

Var

=

E(x2)

− E(x)2

=

1 N

N

x2i −

i=1

1 N

N
xi

2

i=1

=

l2 N

N

s2i,N ,

i=1

(3.5) (3.6)

since E(x) = 0. Therefore the length scale is related to the variance through

l=

Var × N

N i=1

s2i,N

.

(3.7)

16While the procedure of sampling over all the combinations is prohibitively long for longer chains of N > 8 ions, it can easily modiﬁed to only make site-by-site state determination. The modiﬁed procedure would not take into account the cross talk about the ion intensities due to imaging aberrations.

CHAPTER 3. EXPERIMENTAL SETUP

23

3.6 Electronics
In this section, we provide a brief description of the electronics used in the experiment. The trap is driven with an oscillating RF voltage of 30 MHz generated with a Rohde Schwarz SMB100A synthesizer, ampliﬁed with a 20 W ampliﬁer17. The ampliﬁed signal is stepped up in a half-wave helical resonator described in [9] to produce two out-of-phase oscillating voltages needed for the out-of-phase trap drive. The DC voltages for the endcaps in the range between 0 V and 40 V are generated with a custom-
-built DAC controlled with an Opal Kelly FPGA. One of the DAC channels applies a DC bias on the RF voltage using a bias tee. The compensation voltages of up to 2000 V are produced with a commercial high voltage power supply Iseg SHQ222m. All of the DC channels are heavily ﬁltered to minimize electrical noise at the ion.
The radio frequency voltages for the acousto-optic modulators (AOMs) are synthesized on custom-made direct digital synthesis (DDS) boards. These are programmed by the computer via an FPGA board named the Pulser [9]. The voltage for each AOM is ampliﬁed with a MiniCircutis 2W or 5W ampliﬁers. All of the DDS boards are referenced to a common 800 MHz clock. Additionally, there are PID circuits for laser intensity stabilization and a high current power supply to produce 12 A to heat up the calcium ove-
n.

3.6.1 Electrode Diagonalization
In general, the voltages applied to speciﬁc trap electrodes produce the electric ﬁeld in all three directions at the ion position: Ex, Ey, and Ez. In order to improve usability, it is desirable to ﬁnd linear combinations of electrode voltages which change the electric ﬁeld only in a single direction. The linear combination is determined both by trap design and by geometric imperfections when the trap is machined.
In the trap geometry we have two compensation electrodes two endcaps. Suppose that to these electrodes we apply voltages C1, C2, D1 and D2 respectively. The most general relationship between the applied voltages and the resultant electric ﬁelds at the ion position can be expressed as a sum for some unknown matrix Mij:

Ei = MijVj ,
j

(3.9)

where Vj enumerates over the applied voltages: V = (C1, C2, D1, D2). The problem is underdetermined since we apply 4 diﬀerent voltages but need to ﬁx only
3 electric ﬁelds. In order to have a unique solution, we constraint the problem further by requiring that the axial trap frequency remains constant as we change the electric ﬁelds.
We start by recognizing that in the axial direction, the inﬂuence of the endcaps is much stronger than that of the compensation electrodes. Therefore as the ﬁst step it’s important to diﬀerentiate between a common mode increase in the endcap voltages D+ corresponding
17Mini Circuits ZHL-20W-13

CHAPTER 3. EXPERIMENTAL SETUP

24

to the increased axial trap frequency ωz and a diﬀerential voltage D− corresponding to displacing the ion along the axis. We introduce the rotation angle θd to account for the asymmetry between the electrodes:

D− D+

=

cos θd sin θd

− sin θd cos θd

D1 D2

(3.10)

or, equivalently,

D1 D2

=

cos θd − sin θd

sin θd cos θd

D− D+

.

(3.11)

For a symmetric trap θd = 45◦ but experimentally we measured θd ≈ 53◦. This value was determined by measuring the pairs of voltages (D1,D2) for which the ion remains ﬁxed at a

given point along the axis.

The next step is to decouple the inﬂuence of the compensation electrodes, including their

possible projection on the z axis. This can be expressed, in general, as:

C1

...

...

.

.

 .

E˜x



C2

=

. 

.

.

...

.

.

 .

E˜y



.

D−

...

...

.

.

 .

E˜z

(3.12)

The tilde notation as in E˜x indicates that the result is proportional to the electric ﬁeld Ez where the proportionality constant converts the units of the applied Volts to the produced electric ﬁeld.
Experimentally we measured sets of three voltages (C1,C2,D−) for which the ion remains ﬁxed on the camera. These points can be ﬁt to a parameterized line in three dimensions:

r = r0 + tvˆ .

(3.13)

The direction unit vector vˆ deﬁnes the axis along which only E˜y is changing while E˜x and E˜z are held constant. The intercept r0 determines the unimportant ﬁxed values E˜x and E˜z. The parameter t is proportional to the electric ﬁeld: t = E˜y where we are free to ignore any possible oﬀset. Thus, for a change of the electric ﬁeld ∆E˜y, the voltages have to be adjusted according to

∆C1 = vˆ0∆E˜y , ∆C2 = vˆ1∆E˜y , ∆D− = vˆ2∆E˜y ,

(3.14) (3.15) (3.16)

or in the matrix form:

C1

...

vˆ0

.

.

 .

E˜x



C

2

=

. 

.

.

vˆ1

.

.

 .

E˜y



.

D−

...

vˆ2

.

.

 .

E˜z

(3.17)

CHAPTER 3. EXPERIMENTAL SETUP

25

On

the

practical

note,

the

slopes

m0

=

vˆ0 vˆ1

and

m2

=

vˆ2 vˆ1

can

be

easily

ascertained

from

the

data be rewriting eq. 3.13 as two linear equations:

x=

vˆ0 vˆ1

y+

x0

−

vˆ0y0 vˆ1

= m0y + const ,

z=

vˆ2 vˆ1

y+

z0

−

vˆ2y0 vˆ1

= m2y + const .

(3.18) (3.19)

Then it follows that

vˆ0 =

m0

,

m20 + m21 + 1

vˆ1 =

1

, m20 + m21 + 1

vˆ2 =

m2

.

m20 + m21 + 1

(3.20)

The other columns of the coupling matrix have to be perpendicular to vˆ and to each other. Our strategy is to arbitrary choose two such vectors u0 and w0 and allow for their joint rotation about the vˆ axis. Particularly we pick:

u0 = (−v1, v0, 0) , w0 = vˆ × u0 = (−v0v2, −v1v2, v02 + v12) .

(3.21) (3.22)

We use the Rodriguez formula to deﬁne the rotation matrix about the axis vˆ by an angle θ:

 cos θ − v02(cos θ − 1) −v0v1(cos θ − 1) − v2 sin θ

Rv(θ) =  v2 sin θ − v0v1(cos θ − 1)

cos θ − v12(cos θ − 1)

−v0v2(cos θ − 1) − v1 sin θ v0 sin θ − v1v2(cos θ − 1)

Rotating the vectors u0 and w0 by the angle θ produces:

v1 sin θ − v0v2(cos θ − 1)  −v1v2(cos θ − 1) − v0 sin θ  . (v02 + v12) (cos θ − 1) + 1
(3.23)

 −v1 cos θ − v0v2 sin θ  Rv(θ)u0 = uθ =  v0 cos θ − v1v2 sin θ  ,
(v02 + v12) sin θ
 −v0v2 cos θ + v1 sin θ  Rv(θ)w0 = wθ =  −v1v2 cos θ − v0 sin θ  .
(v02 + v12) cos θ

(3.24) (3.25)

All together we determine:

C1 −v1 cos θ − v0v2 sin θ vˆ0 −v0v2 cos θ + v1 sin θ E˜x

C2 =  v0 cos θ − v1v2 sin θ vˆ1 −v1v2 cos θ − v0 sin θ E˜y .

D−

(v02 + v12) sin θ

vˆ2

(v02 + v12) cos θ

E˜z

(3.26)

Combining the result with the initial endcap rotation we arrive at the ﬁnal expression:

C1 1 0

C2 D1

=

0 0

1 0

0 0 cos θd

0  −v1 cos θ − v0v2 sin θ vˆ0 −v0v2 cos θ + v1 sin θ 0  E˜x 

0   v0 cos θ − v1v2 sin θ

sin

θd

 

 

(v02 + v12) sin θ

vˆ1 vˆ2

−v1v2 cos θ − v0 sin θ (v02 + v12) cos θ

0  E˜y

0

 

E˜z

  

.

D2

0 0 − sin θd cos θd

0

0

0

1 D+

(3.27)

CHAPTER 3. EXPERIMENTAL SETUP

26

Figure 3.10: The circuit used to trigger the pulse sequences on the AC line. The power line AC voltage is stepped down with a transformer, and rectiﬁed. The signal then reaches a Schmitt trigger, which drives a ﬁber-coupled LED connected to the Pulser FPGA [9].
All of the rotations are parameterized by the two rotation angles θd and θ and two independent components of the unit vector vˆ.
3.6.2 Line Triggering
In our early measurements, the spectral width of the 729 nm carrier transition lines was limited by magnetic ﬁeld ﬂuctuations. These ﬂuctuations broaden the observed transition because the line centers depend on the Zeeman shift produced by the instantaneous magnetic ﬁeld. Repeating the experiment many times then samples over the varying line centers. One of the dominant source of such ﬂuctuations is technical noise at the electrical grid frequency of 60 Hz. To circumvent ﬂuctuations at this frequ-
ency, we implemented the ability to trigger the experiment sequences on the AC line. Triggering on the power line allows us to perform the 729 nm spectroscopy pulses at the same phase of the AC voltage.
The line triggering circuit is presented on Figure 3.10. It samples the power line and then generates a train of TTL pulses at a certain phase of the AC line that are sent to the Pulser FPGA responsible for executing pulse sequences [9]. The TTL pulses are transmitted over a ﬁber to provide electrical isolation and avoid ground loops.
The eﬀect of line triggering can be seen on Figure 3.11. It shows two spectra of the |S1/2, mj = −1/2 − |D5/2; mj = −5/2 transition recorded at diﬀerent phases of the AC line. Without line triggering, the spectroscopy pulse is performed at a random phase, broad-

CHAPTER 3. EXPERIMENTAL SETUP

27

Carrier Transition S1/2 -D5/2

Excitation Probability

Frequency (kHz)
Figure 3.11: The frequency of the |S1/2, mj = −1/2 −|D5/2; mj = −5/2 transition measured for oﬀsets of 0.0ms and 7.5ms from the line triggering TTL pulse. The corresponding phases of the AC line correspond to the two extrema of the magnetic ﬁeld ﬂuctuations.
ening the line to the width between the recorded peaks, ∼2 kHz. With line triggering the spectroscopic pulse is performed at the same instantaneous magnetic ﬁeld and the measured linewidth is reduced to ∼500 Hz18. Additionally, we have measured that line triggering also improves the T2 coherence time on the |S1/2, mj = −1/2 − |D5/2; mj = −5/2 transition to 1.5 ms from below 500 µs
3.7 Experimental Control
Computer control of ion trapping experiments requires interacting with a large number of individual hardware devices ranging from controlling the voltages supplied to the reference laser cavities, to synthesizing pulse sequences of laser pulses applied to the ion to perform experiments and analyzing ion images collected with a CCD camera. Some of the controlled devices are commercially available with provided APIs or can be controlled with NI-VSA
18The reduced linewidth is likely limited by the laser spectral broadening due to phase noise in the ﬁberoptic cables.

CHAPTER 3. EXPERIMENTAL SETUP

28

drivers, while much electronics hardware is custom-made and tailored for the speciﬁc experiments. In the past, the standard way of controlling laboratory-scale experiments with LabView has been found to not scale well with the complexity of the ion trapping experiments. Once the code base reached a certain level of complexity, it became diﬃcult to make even small additions and to see the meaning and the structure behind LabView’s visual code representation. For controlling the experiments in our l-
aboratory, we have chosen to use LabRAD - an open source experimental control software developed by John Martinis group at UCSB who faced the same scalability challenges in the quantum computing experiments.
The main strength of LabRAD is the modularity of individual components making up the experimental control. Instead of a single central program controlling all of the devices, the experimental control is a network of individual programs called servers that each controls a speciﬁc device or type of device. The servers abstract away the procedural steps of how to communicate with devices or perform certain tasks. The available tasks for each server are listed as commands callable by other programs co-
nnected to the LabRAD network. Performing an experiment then simply requires executing a script that issues a sequence of commands to the servers performing the required actions of setting hardware parameters, data collection, saving etc. The servers support multiple simultaneous connections from other programs. They are written in standard programming languages making use of objectoriented programming paradigm.
The modular nature of LabRAD makes the individual components much easier to modify and debug as they can be improved and tested separately from the rest of the system. The individual servers controlling speciﬁc hardware devices are responsible for a singular task and are easily reusable across diﬀerent laboratories using the same hardware. We use GitHub version control to keep track of code changes across the experiments in order to maintain a single code base for every server. If there is no need-
 to make improvements, the individual servers can act as black boxes where it is possible to make use of the functionality without ever reading through the server’s source code. In addition, LabRAD runs on all of the major operating systems, providing an eﬀective interface to devices that are restricted to work on a speciﬁc platform.
At its core, LabRAD provides a protocol for how the separate programs making up the experimental control communicate over TCP. The individual components, thus, do not have to all run on the same computer as long as they belong to the same local area network. The programs can be written in any language that conﬁrms to the protocol, making it possible to write the code using the object-oriented programming paradigm in stark contrast to the LabView approach. We have primarily utilized the Python impl-
ementation of the LabRAD protocol called pylabrad.
The technical descriptions of the experimental control software is provided in the Appendix A. We, ﬁrst, describe the structure of all the servers used in the experiments and their interactions. We then explain in detail several of our additions to the LabRAD experimental control: the ScriptScanner Framework for scheduling, pausing or stopping individual experiments, and creation of graphical user interfaces (GUIs) within the LabRAD framework. For a thorough introduction to LabRAD please refer Mar-
kus Ansmann’s thesis [13]

CHAPTER 3. EXPERIMENTAL SETUP

29

who co-developed LabRAD at UCSB with Matthew Neely. For more information, see the GitHub Repository Wiki and links to LabRAD guides and tutorials therein.

3.8 Experimental Procedures
In this section we give a brief description of procedures commonly employed in the experiments. The techniques of Doppler cooling and sideband cooling have become routine for ion trapping experiments. Instead of reviewing those, here we focus on less standard procedures.
3.8.1 Frequency-resolved Optical Pumping
With an applied magnetic ﬁeld, the ground state |S1/2 splits into two Zeeman sublevels: |S1/2; mj = −1/2 and |S1/2; mj = +1/2 . The goal of optical pumping is to prepare the ion in one of the sublevels, namely |S1/2; mj = −1/2 . Typically this is done by applying σ-polarized laser light at 397 nm to optically pump the ion to the desired state. This requires an additional laser beam, as linearly polarized 397 nm light is used for Doppler cooling. The procedure of frequency-resolved optical pumping -
avoids this requirement by employing the available laser light at 729 nm for optical pumping. The laser is detuned to be resonant to the narrow transition between |S1/2; mj = +1/2 and |D5/2; mj = −3/2 . Simultaneously, we switch on the repumping laser at 854 nm. The ion returns to the ground state via the short-lived P3/2 level. When it decays to the ground state it may end up in either of the Zeeman substates, increasing the likelihood of it being found in |S1/2; mj = −1/2 . We typically switch o-
n the optical pumping laser beams for a total duration of 2 ms.
3.8.2 Auto-crystallization
Trapped chains of ions occasionally melt, likely due to collisions with background gas or instability in the governing equations of motion. The term melting refers to the analogy between the ordered solid when the ions are in the chain and a disordered liquid. When the ions melt, they lose their structural order and instead form an atomic cloud. The autocrystallization procedure is used to restore the ions back to the ordered state. When the ions melt, their average kinetic energy rises, leading t-
o a Doppler-broadened linewidths of the atomic transitions. We detect the melting event by monitoring the ﬂuorescence of 397 nm light tuned closely to the resonance between S1/2 and P1/2 energy levels. The sudden increase in the linewidth occurring during a melting event is detected via a drop in the measured ﬂuorescence. The events may also detected using the CCD camera by monitoring the total intensity of the pixels corresponding to the ion positions within the chain. Once the melting event is d-
etected, the ions are crystallized again by shining 397 nm 220 MHz red-detuned from the S1/2 − P1/2. The red-detuned light provides eﬀective Doppler cooling of the broad linewidth and eﬀectively crystallizes the chain. Crystallization may also be achieved by

CHAPTER 3. EXPERIMENTAL SETUP

30

lowering the power of the conﬁning RF voltage. However, we typically avoid this to prevent thermal contraction and expansion of the trap electrodes.

31
Chapter 4
Energy Transport
4.1 Introduction
Models of coupled oscillator chains are ubiquitous in physics as they provide a way to study many-body behavior emerging from interactions among well-understood constituent particles. The diverse range of phenomena described by such models include Bose-Einstein condensation, equilibration in dissipative quantum systems, heat transport, friction in nanoscale systems, and many others [14, 15, 16, 17, 8].
Historical interest in behavior of oscillator chain models was spurred by the Fermi-PastaUlam paradox [18, 19]. When a chain of oscillators has a linear nearest neighbor coupling term, then the time evolution of the system can be found by describing the behavior in terms non-interacting normal modes. The energy of the modes remains constant and the system does not thermalize. Enrico Fermi, John Pasta, Stanislaw Ulam, and Mary Tsingou conjectured that addition of a non-linearity to the coupling pot-
ential would give rise to ergodicity and lead the system to eventually thermalize. They performed numerical simulations of the model and found otherwise. Further work on the problem has led to discoveries of soliton solutions in related non-linear systems and the concept of dynamical chaos.
The Fermi-Pasta-Ulam approach introduced a new tool of experimental mathematics: performing numerical experiments to study the model dynamics when an analytical solution is not attainable. This is eﬀective for classical coupled oscillators and one can numerically simulate time evolutions of hundreds of coupled oscillators. However in the quantum regime, this is, in general, is no longer possible as the size of the possible solution space – the Hilbert space – grows exponentially with the number of-
 particles. As a solution to this issue, Richard Feynman proposed using a well-controllable quantum system to simulate behavior of the quantum model. The experimenter tunes the interactions of the controlled system to match those of the model and simply observes the ensuing dynamics. This approach called quantum simulations is promising for understanding quantum magnetism, superconductivity and other topics.
Chains of trapped ions are one of the leading candidate systems for performing quantum

CHAPTER 4. ENERGY TRANSPORT

32

simulations and studying quantum phenomena [20, 21, 22, 23, 24]. They can be well isolated from the environment, exhibiting long coherence times. The interactions between the ions, the amount of present non-linearity and decoherence can be precisely controlled with additional optical potentials. In fact, chains of ions are already used to study quantum magnetism [21, 23, 24]. These experiments utilize the internal degree of freedom. Controlling the motional degree of freedom, however, would allow -
to treat trapped ions an oscillator chain model and to explore the rich associated physics. There have been numerous theoretical proposals exploring oscillator chain models by using ion motion and inducing phonon-phonon interactions. Here we focus on the proposals studying heat transport and thermalization: topics similar to the ones pursued by Fermi-Pasta-Ulam but with additional focus on the quantum regime.
Bermudez et al. [16] study how heat propagates across the ion chain when the ions on the ends are coupled to heat baths of diﬀerent temperatures. They ﬁnd that depending on the amount of disorder and dephasing in the system, the resultant temperature distribution will deviate from the expected linear proﬁle expected from Fourier’s law. A similar nonlinear temperature distribution is found in [15] where the authors also study how the system equilibrates. Both [25] and [26] demonstrate the thermodyn-
amic properties of ion chains are controlled by the amount of present non-linearity induced by the linear to zigzag structural phase transition. Finally, in [8], it is shown that a standing optical wave superimposed with the ion chain signiﬁcantly modiﬁes the normal mode structure, thereby altering the energy transport characteristics. The heat conduction in the resultant Frenkel-Kontorova model was is studied in [27] with a periodic driving force.
Despite the richness of the exhibited physics, there have been no experimental realizations of the proposed models. Observing the phenomena requires long chains of ions, where it becomes diﬃcult to control the motion. In this Chapter we describe the ﬁrst experiment aimed at realizing the aforementioned models, providing an additional level of detail compared to our publication [28]. Speciﬁcally, we observe how energy propagates in an ion chain by performing a Newton cradle-like experiment. We prep-
are an out-of-equilibrium state of the chain by quickly adding energy to the ion on one end of the chain. We then observe how the energy propagates throughout the chain.
We begin the Chapter by reviewing the theoretical framework of local modes of ion motion used in the experiment and the method used to measure the ion energy. In the following section we describe numerical simulations used to model ion excitation and energy propagation. We then interpret the experimental results and conclude by considering future possible pursuits.

CHAPTER 4. ENERGY TRANSPORT

33

Figure 4.1: The CCD image of a long linear ion chain. All of the ions are conﬁned axially in a single harmonic well. Due to the Coulomb repulsion among the ions, the spacing decreases in the center of the chain.

4.2 Theory

4.2.1 Normal Mode Structure

In this section we consider the normal mode structure of the ion chain and calculate the subsequent evolution after a single ion on end of the chain is displaced from its equilibrium position. When a chain of N ions is conﬁned in the harmonic potential of a Paul trap with harmonic frequencies ωx, ωy, and ωz, the total potential energy V is given by the sum of harmonic trap potential and and the Coulomb interaction:

V

=

N i=1

1 2

mωx2

x2i

+

1 2

mωy2yi2

+

1 2

mωz2zi2

+

1 2

N i=1

N j=1

e2 4π 0

j=i

1 ,
(xj − xi)2 + (yj − yi)2 + (zj − zi)2 (4.1)

where

e

is

the

electron

charge

and

m

is

the

ion

mass,

and

we

have

included

a

factor

of

1 2

in the Coulomb term to prevent double counting of ion pairs. Minimizing potential energy

V with respect to the coordinates of every ion i, (xi, yi, zi), yields the equilibrium positions (x0i , yi0, zi0). The CCD image of a trapped linear chain of ions is shown on Figure 4.1. Considering the motion in only one of the radial directions, x, the potential energy V can

be expanded for small displacements about the equilibrium, qi = xi − x0i .

V ≈ V0 +

i

∂V

1

∂2V

∂qi qi + 2 i,j ∂qi∂qj qiqj .

(4.2)

The constant oﬀset V0 is unimportant for equations of motion and will be ignored. At the

equilibrium

position,

the

ﬁrst

derivative

∂V ∂qi

=

0.

The

third

derivative

∂V 3 ∂qi3

is

also

zero

by

the

symmetry of the Coulomb potential. We then obtain:

∂2V ∂qk∂ql

|equil

=

 mωx2 −

N j =1

j =k

 , e2

1

4π 0 |zk0−zl0|3

e2 4π 0

, 1
|zk0−zj0 |3

if k = l.
, if k = l.

(4.3)

CHAPTER 4. ENERGY TRANSPORT

34

matching eq. 7 in [20], where we assumed that the radial trap frequencies are much stronger
than the axial, ωx ωz, ωy ωz, and the ions are arranged as a linear chain along the z-axis with yi0 = x0i = 0. The potential energy can then be written as





V

=

N i=1

1 2

m

ωx2 

−

N j=1

e2 4π 0m

|zi0

1 −

zj0|3

  

qi2

+

N i=1

N j=1

1 e2

1

2 4π 0 |zi0 − zj0|3 qiqj

.

j=i

j=i

(4.4)

We deﬁne the local oscillation frequency ωi,loc of ion i as

ωi2,loc

= ωx2 −

N j=1

e2

1

4π 0m |zi0 − zj0|3

.

j=i

(4.5)

The local oscillation frequency diﬀers from the radial trap conﬁnement frequency ωx by the repulsive force from the other ions in the chain. This eﬀect drops oﬀ as the cube of the

inter-ion distance and is, particularly, important in the middle of the chain where the ions

are closest. Thus, the local radial oscillation frequency will be minimal for the middle ion.

Furthermore, when the local oscillation frequency becomes zero, this soft mode leads to a

structural phase transition to the zigzag regime of the chain [29].

It is clear from eq. 4.4 that the local displacements qi are coupled. The system may be diagonalized in terms of the N radial normal modes of the ion chain [12]. We enumerate the

normal modes vn in the order of decreasing eigenfrequencies ωn such that v1 always refers to the center-of-mass mode with the corresponding eigenfrequency of ω1 = ωx. We consider the normal mode decomposition when the leftmost is radially displaced from its equilibrium

position. The unit displacement can decomposed as the sum of radial normal modes with

coeﬃcients cn:
N

q = [1, 0, 0, . . . , 0] = cnvn.
i=1

(4.6)

The normal mode decomposition is presented on Figure 4.2. We see that for long chains,

the higher order modes are not signiﬁcantly excited. The excited eigenmodes will oscillate

at the corresponding eigenfrequencies, determining the subsequent time evolution of the ion

chain: N

q(t) = cnvn cos(ωnt) .

(4.7)

i=1

The oscillation energy of the displaced ion will decrease once the excited normal modes add

destructively. At the rephasing time of the eigenmodes, the energy will come back to the

displaced ion.

The coupling times among the local ion excitations are easily determined by considering

the quantized version of the system [20, 30, 31] written in terms of local phonon creation

CHAPTER 4. ENERGY TRANSPORT

35

Locally excited normal modes

N = 5 normal modes
~v1

Normalized amplitude |cn|

~v2

~v3

~v4

~v5
Mode number n
Figure 4.2: We decompose a unit radial displacement of the leftmost ion in terms of the radial normal modes of chain motion. Not all of the modes are equally excited. For longer chains, only lower-ordered have signiﬁcant excitation. Shown on the right are the radial normal modes for a N = 5 chain. We can see that only the ﬁrst three have a signiﬁcant projection onto motion of the leftmost ion.

and annihilation operators at site i denoted a†i , ai:

N

NN

H = h¯ωx,ia†i ai + h¯

tij a†i aj + aia†j ,

i=1

i=1 j=1

j<i

(4.8)

where we have neglected fast-rotating non-energy conserving terms. The site-dependent oscillation frequency and the tunneling amplitude are given by:

ωx,i

= ωx −

1 2

N j=1

1 e2

1

mωx 4π 0 |zi0 − zj0|3

,

j=i

tij

=

1 1 e2

1

2 mωx 4π 0 |zi0 − zj0|3

=

1 ωz2 1 2 ωx ∆z¯3

,

(4.9) (4.10)

where ∆z¯ ∼ O(1) is a dimensionless separation of ions in the units of the characteristic

length scale l [12]

l3

=

Z 2 e2 4π 0mωz2

,

(4.11)

CHAPTER 4. ENERGY TRANSPORT

36

with Z = 1 referring to the number of elementary charges of the ion. The cubic dependency of tunneling tij on the inter-ion distance makes the length of the
chain an important factor because for longer chains trapped at the same trap frequencies, the leftmost ion is closer to its neighbor. We ﬁnd that for our experimental trap frequencies, the tunneling matrix element between the leftmost ion and its neighbor, t12, ranges from 2π × 6.7 kHz for a chain of 5 ions to 2π × 21.1 kHz for a chain of 25 ions.
The normal mode picture is valid when the non-linearities in the potential are insigniﬁcant in the course of ion motion. To verify that this is the case for the regime of our experiments, we performed numerical molecular dynamics simulations integrating the ion equations of motion. The simulations are described in Appendix C.1. They do not rely on the normal mode expansion as they include the complete Coulombic interaction as well as driven motion of ions present in Paul traps. The time evolution -
predicted by the simulations matches those given by equation 4.7, verifying the validity of the treatment. We explicitly calculate the amount of non-linearity present in ion chains in Appendix C.2.

4.2.2 Fast Excitation

In order to create an out-of-equilibrium state of the ion chain by displacing the leftmost

ion, we need to add energy to the ion much faster that the coupling time, 2π/ j=1 t1j. This will prevent the energy ﬂowing out from the ion before we have even completed the

excitation. For this, we have chosen the technique of pulsed excitation. The laser resonant

with a short-lived transition is switch oﬀ and on resonantly with the trap frequency [32, 33].

In this section we elaborate on a similar calculation we performed in [8] to calculate the

expected excitation rates for pulsed excitation methods and other available techniques.

We estimate the rate of energy addition with pulsed laser excitation by considering a

classical ion trajectory with initial amplitude y0 oscillating around y = 0 in a harmonic

potential

V

=

1 2

mωy2y2

.

Switching

on

a

laser

with

saturation

s,

wavevector

k

resonant

with

a transition with linewidth Γ produces a constant force F due to the laser light’s radiation

pressure:

F = h¯kΓρee ,

(4.12)

where the probability of ﬁnding the atom in the excited state ρee is given by

s/2 ρee = 1 + s + (2∆/Γ)2 .

(4.13)

Since

ρee

→

1 2

for

s

→

∞,

the

scattering

of

a

highly

saturated

laser

is

given

by

F

=

1 2

h¯kΓ.

When the force is applied to the ion, the equilibrium position of oscillation is displaced

to yeq = F/mωy2. If the laser is switched on when the ion is at the leftmost point in its trajectory, −y0, then after half of trap cycle it will reach the position y1 = y0 + 2yeq. At

this point, the laser is switched oﬀ to be switched on again half cycle later when the ion

is at position −y1. This process leads to a linear increase in oscillation amplitude and

a quadratic rise in energy with the number of pulses. After n pulses, the amplitude is

CHAPTER 4. ENERGY TRANSPORT

37

yn

=

y0 + 2nyeq

with

the

corresponding

energy

En

=

1 2

mωy2(y0

+

2nyeq)2.

For the trap

frequency of ωy = 2π × 2 MHz and a saturated laser at 397 nm addressing the S1/2-P1/2

transition with Γ = 2π ×22.4 MHz, the equilibrium shift yeq = 11 nm. During the ﬁrst pulse,

the energy will rise by approximately 2 motional quanta:

1 2

mωy2

(2yeq)2

=

2.0h¯ωy

and

then

quickly grow quadratically with the number of pulses. In the ﬁrst microsecond, of heating

already 8 quanta will have been added.

We compare the result for pulsed excitation to heating due the random photon scattering

and due to anti-viscous force of a blue-detuned laser. The heating rate due to the random

timing of absorption events and random directionality of spontaneous emissions is given in

the low velocity v ∼ 0 limit by [2]:

E˙ h

=

1 2m

(h¯k)2Γρee(v

=

0)(1

+

ξ)

,

(4.14)

where the emission directionality factor ξ = 2/5 for dipole radiation. This term is maximal for a highly saturated beam ρee = 1/2, at which point E˙ h ∼ 1.5h¯ωy/µs for the same trap parameters at above. To estimate the eﬀect of Doppler heating we expand the scattering
force for low velocities: F = F0 (1 + κv) with the prefactor F0 and the viscosity coeﬃcient κ are given by:

s

F0

=

h¯kΓ

1

+

s

2
+

(

2∆ Γ

)2

,

8k∆

κ=

Γ2

1

+

s

+

(

2∆ Γ

)2

.

Only the velocity-dependent part of the force contributes to Doppler heating:

(4.15) (4.16)

E˙ dop = F0κ v2 .

(4.17)

For an initial temperature T ,

v2

=

kbT m

while

the

term

F0κ

is

maximal

when

s

=

1

+

4 ∆2 Γ2

and

∆

=

Γ 2

.

At

these

parameters,

E˙ dop =

h¯k2 kbT 2m

.

(4.18)

If the initial energy is n¯ = 5 with kbT = h¯ωn¯, we have

E˙ doppler

=

h¯k2 n¯
2m

∼

1h¯ω/µs

.

(4.19)

We have seen that the initial rates of energy addition for pulsed excitation are much higher than for heating through random kicks, and Doppler heating. This calculation is conﬁrmed with the molecular dynamics code detailed in C.1 plotted in Figure 4.3. Pulsed excitation is straightforward to implement, as there is no need to progressively adjust the laser detuning or laser saturation to maintain optimal heating conditions.

CHAPTER 4. ENERGY TRANSPORT

38

Pulsed Excitation vs Doppler Heating

Energy (motional quanta)

Time (µs)
Figure 4.3: Results of a molecular dynamics simulation demonstrating that pulsed excitation adds energy much faster that Doppler heating. This single-ion simulation starts with ion stationary and located at its equilibrium position. Then we simulate the process of Doppler cooling for 200 µs to achieve a realistic energy given by the Doppler temperature. From that point on, we compare the ion kinetic energy after pulsed excitation and Doppler heating. Due to the stochastic nature of laser-ion inter-
action, we average over 500 individual simulations.

4.2.3 Energy Readout

In this section we discuss the method of quantifying the energy of the ion motion. Similar to the need for fast excitation, energy readout needs to be fast compared to the coupling in order to accurately capture the dynamics. In this regime, we can ignore the coupling among the ions and consider them as N independent harmonic oscillators:

N
H = h¯ωx,ia†i ai .
i=1

(4.20)

After performing Doppler cooling, the local radial mode of every ion is in a thermal state with a temperature n¯. The density matrix of the ion i, ρtih, can be expressed in terms of the

CHAPTER 4. ENERGY TRANSPORT

39

pdnisp

Displaced Thermal States

n
Figure 4.4: The occupational probabilities for displaced thermal states of n¯ = 3, typical of a Doppler-cooled ion. For displacement α = 0, the distribution reduces back to a thermal state. For large displacements α2 n, it approaches a coherent distribution centered at α2.

local phonon number basis |ni :

ρtih

=

n¯

1 +

1

n¯ n¯ + 1

n
|ni

ni| .

(4.21)

The method of pulsed excitation is modeled as a displacement operator D(α) applied onto the leftmost ion (i = 1) in the chain [34] for some complex amplitude α = |α|eiφ resulting in a displaced thermal state of motion. Experimentally we do not control the phase of the pulsed laser φ, yielding a diagonal density matrix of the ﬁrst ion ρ1 after averaging over φ:

1 ρ1 = 2π

dφ D(α)ρt1hD(α)† = pdnisp|n1 n1| ,
n

(4.22)

with the occupational probabilities given by [35]:

pdnisp =

1 n¯ + 1

n¯ n¯ + 1

e L n

−

|α|2 n¯ +1

n

− |α|2 n¯(n¯ + 1)

,

(4.23)

CHAPTER 4. ENERGY TRANSPORT

40

Sideband Coupling Strength

⌦SB/⌦0

n
Figure 4.5: The sideband coupling strength ΩSB = Ωn,n−l in units of the carrier Rabi frequency Ω0 for n = 0 shown for various red sidebands l = −1 to l = −5 as a function of the motional mode number n with the Lamb-Dicke parameter η = 0.05. For every sideband order the strength monotonically increases with n until turning over, reducing back to zero and reviving. The experiments discussed here are conducted for the range of motional modes shown with the shaded region.

where Ln is the Laguerre polynomial of the nth degree. The occupational probabilities for several displaced thermal states are shown in Figure 4.4. We measure the displacement |α| of the ion i by driving the red motional sideband of the transition between |g , and |e . This interaction couples the electronic and motional states of the ion in the form |g |ni and |e |ni − 1 with Rabi frequency Ωn,n−1, which depends on the particular motional state n [2]:

Ωn,n−l = Ω0| n − l|eiη(a+a†)|n | ,

(4.24)

where Ω0 is the scale of the coupling strength and η is the Lamb-Dicke parameter. The sideband coupling strengths are shown in Figure 4.5. In the regime of our experiment, the Rabi frequency Ωn,n−1 increases with the n, as shown by the shaded region of the Figure. In this regime, the energy can be determined by monitoring the strength of the sideband interaction. Speciﬁcally, we measure the probability to ﬁnd the ion in the electronic ground

CHAPTER 4. ENERGY TRANSPORT

41

Displaced Thermal Sideband Rabi Flops

Excitation Probability

Time (arb)
Figure 4.6: Shown are Rabi Flops on the ﬁrst red sideband for displaced thermal states with various displacements α. For low enough displacements, the strength of the sideband excitation measured at a ﬁxed time along the black dotted line can be directly converted to α. When the displacement excites motional modes outside of the shaded region of Figure 4.5, the sideband strength drops and the displacement can no longer be uniquely determined (dashed yellow line). In these cases, one can monitor th-
e strength of higher order sidebands to determine the displacement.

state |g :

1 Pg(t) = 2

∞
1 + pdnisp cos(Ωn,n−1t)

.

n=0

(4.25)

First, we extract the initial temperature, n¯, without pulsed excitation. The knowledge of n¯, the laser intensity, and the trapping parameters allows us to numerically invert Eq. 4.25. This way, as shown in Figure 4.6 we directly convert the measured ground state probability Pg(t) to the displacement |α|.

CHAPTER 4. ENERGY TRANSPORT

42

4.3 Experimental Results
In this section we describe the energy transport experiment, employing the theoretical tools presented earlier to analyze the results. The experiment proceeds as follows: a chain of N 40Ca+ ions is conﬁned in a harmonic potential of a linear Paul trap with trap frequencies (ωx, ωy, ωz) = 2π × (2.25, 2.0, 0.153) MHz. A laser at 397 nm is red-detuned with respect to the S1/2-P1/2 transition to perform Doppler cooling of the whole chain. An intense beam at 397 nm is tightly focused on one end of the -
chain, as shown in Fig. 4.7 for pulsed excitation of a single ion1 . After the system evolves freely for a time τ , the ion energy is locally measured with a 729 nm laser tuned to the red motional sideband. The pulsed excitation time is ﬁxed at t = 7.5 µs while the duration of sideband interaction for energy readout is 10 µs. Both are short compared to the characteristic coupling time of the leftmost ion 2π/t12, as calculated in section 4.2.1, to address only the local mode of motion.
The results for the 5-ion chain and the comparison to theory are presented in Fig. 4.8. The experimental data are in agreement with the normal mode dynamics presented in equation 4.7 where the leftmost ion is initially displaced in the radial direction. The theory has no free parameters and uses independently measured trap frequencies as inputs.
We repeat the experiment with progressively longer chains. The energy of the rightmost ion during the sequence of experiments is presented in Fig. 4.9. We observe clear revivals of the energy even for long chains. With the increase of the length of the ion chain, only a few additional eigenmodes are populated with the local excitation. Once again, the eigenfrequencies of the populated eigenmodes rephase resulting in observed revivals.
For all ion numbers, the time it takes for the excitation to propagate across the entire chain is comparable to the coupling rate between nearest neighbors, 2π/t12. This is explained by the fact that the excitation does not simply hop from one ion to another along the chain. The intuition about excitation hopping does not apply because all of the ions are coupled to each other due to the long range of the Coulomb interaction. It is more appropriate to analyze the dynamics in terms of a normal mode-
 picture. The initial excitation creates a superposition of the normal modes, and the energy is transferred across the chain after rephasing of some of the excited modes of motion and is, thus, comparable to the normalmode frequency splitting.
Interestingly, we observe that the timescale of the revivals is similar even for long ion chains. This is explained by the fact that the eigenfrequencies of the populated 10 normal modes have only a weak dependence on the ion number. For example, the splitting between the eigenfrequencies of the modes v1 and v5 increases by ∼ 3% as the length is increased from N = 5 to N = 25. It can be seen that the revival features become sharper for longer chains: more normal modes participate in the dynamics a-
nd the ions are spaced closer
1The pulsing is implemented by using an RF switch (Minicircuits ZYSWA-2-50DR) to switch oﬀ and on the 397 nm laser beam passing through an AOM double pass. The switch is driven with a function generator (Rigol DG4062). The advanced features of Rigol DG4062 make it possible to control the pulsing time with an external TTL pulse as well as the phase of the generated square wave. The response time of the AOM was minimized by reducing the waist of the laser beam.

CHAPTER 4. ENERGY TRANSPORT

a)

xˆ

yˆ

zˆ

pulsed excitation

b)

excited ion

43
probe
probe

Figure 4.7: The schematic of the energy transport experiment. (a) The pulsed excitation beam (blue) rapidly adds energy to the ion chain. After a free time evolution, the energy can be read out anywhere along the chain with a probe at 729 nm (red). Both beams are at 45◦ with respect to the radial modes of motion. (b) The CCD image of the ion chain with 37 ions with the tightly focused excitation beam.
together increasing the coupling rate. The faster coupling also leads to a higher energy of the rightmost ion for evolutions times τ ∼ 0 µs: some energy has already transferred from the excited ion to the rightmost ion by the time the pulsed excitation is complete.
Even for very long chains, the energy revivals persist for a long time compared to the coupling strength. This is illustrated by Fig. 4.10. This measurement was performed with 37 ions in a partially zigzag conﬁguration as shown in Fig. 4.7b. The energy revivals continue even after an evolution time of τ = 40 ms. For times longer than 40 ms the dynamics wash out, likely due to the instability of the trapping frequencies. Consecutive measurements apart by 12 minutes for the evolution time τ = 40 ms -
revealed a 20 µs shift in the position of the revival peak, corresponding to 5 × 10−4 change in the coupling strength, ωz2/ωx. The trap frequencies, particularly the radial frequency ωx, are not expected to be stable at this level.
The measurement presented in Fig. 4.10 shows a large diﬀerence in the excitation between adjacent ions: the rightmost ion in the chain and its neighbor. While the energy eﬃciently transfers from the leftmost kicked ion to the rightmost ion, the ion second from the right does not get as energetic. This phenomenon follows from the normal mode decomposition

CHAPTER 4. ENERGY TRANSPORT

44

Energy of excited ion

(a)

Experiment

Energy of rightmost ion

(b)

Experiment

Energy |↵|2

(c)

Theory

(d)

Theory

Energy (arb)

Evolution time ⌧ (µs)

Evolution time ⌧ (µs)

Figure 4.8: Energy transport in a chain of 5 ions. The leftmost ion is given a kick and its energy is measured after a subsequent evolution time τ as shown in (a). The energy revivals occur at the rephasing times of the eigenfrequencies and approach the energy of the initial excitation. Plot (b) shows the energy of the rightmost ion: initially unexcited the energy from the kick is rapidly transferred across the chain. The energy of both ions evolves according to the populated normal modes of motio-
n. Each point is a result of 500 measurements resulting in the denoted statistical error bars. The points are connected to guide the eye. Plots (c) and (d) show the kinetic energies of the ions from the molecular dynamics simulations.

of the initial excitation: the excited normal modes have a small projection onto the motion of the ion second from the right. In the local mode picture, it can also be seen that the eﬃcient transfer of energy occurs because the kicked and the rightmost ion have the same local trap frequency leading to an on-resonant coupling. However, the local frequency of the ion second from the right is diﬀerent (by approximately the next neighbor coupling), leading to an oﬀ-resonant excitation.
4.4 Future Pursuits
The presented results demonstrate the ﬁrst steps towards realizing the theoretical proposals relying on the motional degree of freedom of long ion chains. The results are in agreement with the theoretical model of normal mode dynamics, demonstrating a suﬃcient level of control of the experimental parameters. The system is well isolated from the environment –

CHAPTER 4. ENERGY TRANSPORT

45

Energy of rightmost ion 5 ions

Energy |↵|2

15 ions

Energy |↵|2

Energy |↵|2

25 ions
Evolution time ⌧ (µs)
Figure 4.9: The energy of the rightmost ions measured for progressively longer chains. As seen by position the ﬁrst peak, the rate of energy transfer across the chain increases slightly due to the reduction in the inter-ion distance. Due to the faster coupling for longer chains, the feature size of the revivals decreases, as can be observed from the width of the ﬁrst revival peak. Also, the average measured energy drops for longer chains: with a greater number of participating normal modes, the ex-
citation is distributed among more ions.

CHAPTER 4. ENERGY TRANSPORT

46

Energy |↵|2

Delay time ⌧ (µs)
Figure 4.10: The energy revivals measured for the rightmost ion (circles) and ion second from the right (triangles) in a 37-long ion chain partially in the zigzag conﬁguration. The dynamics extend up 40 ms and are likely limited by trap frequency instabilities. The energy from the kicked ion does not eﬃciently transfer to the ion second from the right. The general rise in the measured energy corresponds to background heating during the free evolution.
an important ingredient for the proposed models – as the observed energy transport dynamics go on for up 40 ms.
With the addition of the second cooling beam, it should be possible to realize a steady state energy distribution, and the measure the temperature proﬁle along the chain. Similar to the requirement of heating, the cooling mechanism also has to be fast compared to the coupling. While it may be diﬃcult to speed up the typical time scale for Doppler cooling on the order of 1 ms, the requirement may be satisﬁed instead by the reduction in the ion-ion coupling with a lower axial conﬁnement frequency.
The question arises whether it is possible to go beyond the normal mode dynamics. It has been shown theoretically than non-linearities may signiﬁcantly alter the energy transport properties of the system. Non-linearities in the potential can lead to additional resonances and coupling among the normal modes. The mode coupling involves energy redistribution among the excited normal modes and, perhaps, eventual thermalization of the ion chain. However, as we show in appendix C.2, the intrinsic non-li-
nearity due to the Coulomb interaction in a linear chain is small. A stronger non-linearity may be engineered with an additional standing light wave inside a laser [8]. Additionally it may be possible to repeat the presented experiments while exciting the soft mode present in the structural transition to the zigzag mode. In that situation the non-linearity is much stronger compared to the low local conﬁnement frequency of the soft motional mode.
One disadvantage of the present pulsed heating technique is that it requires scattering photons, heating the ion during the generated displacement operation. This can be avoided

CHAPTER 4. ENERGY TRANSPORT

47

by exciting the ion with a traveling wave resonant with the trap frequency and generated either with Raman beams detuned from the S1/2 − P1/2 transition or by simultaneously driving both the red and the blue sideband using the 729 nm laser. Another advantage of exciting the ion with the 729 nm traveling wave is that the phase of the energy readout pulse can be controlled relative to the phase of the initial excitation. Such phase control is the basis of the recently proposed method to implement mu-
ltidimensional spectroscopy with trapped ion chains [36].

48
Chapter 5
Detection of Quantum Correlations
5.1 Introduction
Detection of quantum correlations between two quantum systems typically requires control and access of both of the systems. This is well exempliﬁed by the procedure of quantum state tomography. Each qubit needs to be measured in three orthogonal bases of the Bloch sphere, corresponding to the control requirement of performing single qubit rotations. Every subsystem needs to be accessible because the density matrix of a N -qubit system requires measurements in every combination of the basis vectors-
 of the constituent qubits. Performing the full procedure of state tomography requires a total of 3N measurements, which scales rather unfavorably for large quantum systems.
A natural question to pose is whether it is possible to prove the presence of quantum correlations between two subsystems of a bipartite quantum system if the experimenter does not have access to one of the subsystems. The term access here refers to the ability to perform single qubit rotations or measurements. This situation arises in a multitude of scenarios: the experimenter may be presented with a large ensemble of quantum spins, for instance, where it is not technically possible to perform op-
erations on all of the spins. In the context of quantum communication protocols, each party only has access to their part of the shared quantum state. Most generally, whenever a quantum system interacts with its environment, it is considered an open quantum system. By deﬁnition, the system’s environment is not accessible, yet the presence of quantum correlations between the system and the environment can play a large role in the system dynamics.
At ﬁrst brush, it seems implausible to be able to observe quantum correlations with limited access. It is well known, for instance, that in the case of a Bell-state |Ψ = |00 + |11 nothing can be said about the presence of entanglement from local measurements of only one particle. Tracing out the second spin results in a mixed state of the ﬁrst particle: ρ0 = |0 0| + |1 1| and, hence, in the absence of additional knowledge, local measurements yield no information about the entanglement. In this Cha-
pter we present a protocol, proposed by Manuel Gessner and Heinz-Peter Breuer [37, 38] to accomplish this very task:

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

49

ρS = TrE (ρ)

System S

System E
⌦ Inaccessible	
  environment	
 

ρ

Figure 5.1: The open quantum system S is interacting with an inaccessible environment E. Together, they form a closed quantum system described by the density matrix ρ. The reduced density matrix of S is calculated by tracing out the environment E.

witness quantum correlations between two quantum systems without access to one of them. The method relies on observing the dynamics of the accessible system in the presence of a unitary time evolution that depends on the presence of quantum correlations between the two quantum systems. After proposing the protocol, Manuel Gessner worked together with us to realize the ideas experimentally.
In this Chapter, we ﬁrst review the protocol for local detection of quantum correlations and then describe the experimental implementation of the protocol using two degrees of freedom of a single trapped ion [39]. The intention is to elaborate on the published results, providing more detail and intuition.
5.2 Local Detection Protocol
We present the protocol by employing the formalism of open quantum systems [40]. As shown in Fig. 5.1, we consider two quantum systems S and E where the system E is the inaccessible environment of the open quantum system S. The goal is to determine whether or not there exist quantum correlations between S and E. Since the environment is not accessible, we are only allowed to perform operations and measurements locally on S, hence the name of local detection protocol.
The protocol is depicted in Fig. 5.2. We start with the joint state of both quantum systems S and E. The state may contain quantum correlations at time t = 0 and is described by the density matrix ρ(0). The protocol establishes the presence of quantum correlations by comparing the time evolution of the accessible system S with quantum correlations between S and E with the situation when the initial correlations are removed. The protocol consists of three steps: The ﬁrst step is to subject the syst-
em to a unitary time evolution for a time t, U (t) such that ρ(t) = U (t)ρ(0)U (t)†. The local part of the system, S, at times 0 and t are found by tracing out the environment: ρS(0) = TrE{ρ(0)} and ρS(t) = TrE{U (t)ρ(0)U (t)†}.

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

50

(t)

⌦I

=

⇢0S (0)

t

S (t)

0

6=

t

0 S

(t)

⇢0(0)

0(t)

Figure 5.2: The protocol for local detection of quantum correlations. The density matrix ρ of the joint system of S and E is subjected to the unitary time evolution U (t). Additionally, the dephasing operation Φ removes all quantum correlations from ρ producing a state ρ . In both cases, the state of the accessible system ρS is found by tracing out the inaccessible environment. The presence of quantum correlations in ρ is established if the dephasing operation modiﬁes the time evolution of ρS.

The evolution of ρS may not be unitary as some information may be ﬂowing to or from the environment. In the case where S and E are statistically independent at time t = 0, the evolution of ρS will be described by a dynamical map, which is a convex-linear, completely positive and trace-preserving quantum operation [40]. In this case, it is common to use master-equation methods to predict the time evolution of the open quantum system. If there are initial quantum correlations, then these methods can-
 no longer be employed. In general, the time evolution of ρS will depend on the presence of initial quantum correlations between S and E. The local detection protocol exploits this property in order to witness the presence of initial quantum correlations.
The second step of the protocol is to apply an operation Φ to the accessible system S. This operation is called the dephasing operation and will be discussed in more detail below. The dephasing operation removes all quantum correlations between S and E, producing a new joint density matrix ρ (0) but it does not alter the initial reduced density matrices of either quantum system: ρ S(0) = ρS(0), ρ E(0) = ρE(0). The dephased system is subjected to the same time evolution U (t), producing a new reduc-
ed density matrix ρ S(t) after the interaction time t.
The third and ﬁnal step of the protocol is to compare the two resultant density matrices

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

51

ρS(t) and ρ S(t). If the two are equal, then nothing can be concluded about the presence of initial quantum correlations in ρ. However, if the reduced density matrices diﬀer, then the initial state contained quantum correlations. To see why, consider that the reduced system S started in the same initial state ρS(0) = ρ S(0) and yet became diﬀerent after evolving for time t. Therefore the dephasing operation must have been responsible for this change. Since its only eﬀect is to remove quantum corre-
lations from the state ρ, quantum correlations must have been present in the initial state ρ, when the dephasing operation was applied.
We have not yet discussed how it is possible to perform the dephasing operation Φ, which removes all quantum correlations between the environment E and the open quantum system S without altering either reduced density matrix. This is accomplished by performing state tomography of the open quantum system S to measure ρS(0) and calculating the eigenvectors πµ. Then the dephasing operation Φ is deﬁned as a projection onto the calculated set of eigenectors: ρ = µ (πµ ⊗ I) ρ (πµ ⊗ I). Deﬁned this way, -
the dephasing operation has several important properties. It is a local operation of the accessible system S as shown explicitly by applying the identity operation I onto the environment. The dephasing operation does not alter the state of S because it is a projection onto its own eigenbasis. However, as explicitly proven in [38], the dephasing operation removes all quantum correlations between S and E. The procedure of projection onto the set of eigenvectors of ρS(0) can be interpreted as a non-s-
elective measurement. In a non-selective measurement, the experimenter performs a quantum measurement of the system ρS to project the system onto the measurement eigenbasis. This may require rotating the state of the system such that the measurement eigenbasis coincides with the eigenvectors of ρS(0). We will discuss the experimental realization of this operation in detail in the next section.
We illustrate the action of the dephasing operation by considering a simple example of a quantum-correlated state. Suppose that the initial quantum correlated state |Ψ 1, where the ﬁrst qubit is the system S and the second is E, is:

|Ψ = 3 |00 + 4 |11 .

5

5

(5.1)

The density matrix ρ is readily computed,

 9 0 0 12 

ρ = |Ψ

Ψ| =

1

 

25 

0 0

00 00

0

0

 

12 0 0 16

(5.2)

with the oﬀ-diagonal terms are the quantum coherences between the system S and E. The

1This state is chosen rather than a simpler Bell state |Ψ

=

√1 2

(|00

+ |11 ) to avoid the technical issue

of degenerate eigenvalues of the reduced density matrix ρS. This theoretical point is of little importance to

the experimental realization of the protocol.

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

52

reduced density matrices are calculated to be the same due to the symmetry of the state:

ρS

=

TrE {ρ}

=

1 25

ρE

=

TrS {ρ}

=

1 25

90 0 16
90 0 16

(5.3) (5.4)

The diagonal form of ρS means that the eigenvectors are given by the bases vectors π1 = |0 and π2 = |1 . The dephasing operation applied to the system S is then deﬁned as a projection operation onto these eigenvectors:

ρ = (|0 0| ⊗ I) ρ (|0 0| ⊗ I) + (|1 1| ⊗ I) ρ (|1 1| ⊗ I)

9 0 0 0 

=

1 25

  

0 0

0 0

0 0

0 0

  

.

0 0 0 16

(5.5) (5.6)

We see that indeed the dephasing operation has removed all the quantum correlations. However, it has not aﬀected the local reduced density matrices:

1 ρ S = 25
1 ρ E = 25

90 0 16
90 0 16

= ρS , = ρE .

(5.7) (5.8)

We have seen that by observing a diﬀerence in the evolution of the accessible system ρS with and without dephasing, we are able to establish the presence of quantum correlations in the initial state ρ. The protocol never makes use of the inaccessible environment, all of the required operations, including the dephasing operation, are performed on the accessible system S. It is important to emphasize that if we observe no diﬀerence between ρS and ρ S, it does not mean that there were no initial quan-
tum correlations. It is possible that the chosen unitary time evolution U (t) was simply not sensitive to the presence of quantum correlations.
The protocol never assumes that the systems are in a pure quantum state. However, if the system were in a pure state, then the detected quantum correlations correspond to entanglement between the two states. For mixed states, the detected correlations correspond to the concept of quantum discord. In the next section, we present the experimental implementation of the local detection protocol using a single trapped ion. The experiments were performed for both quasi-pure and mixed states, conﬁrming t-
he validity of the protocol in both regimes.

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

53

System S
|e
⌦

System E

|g
Figure 5.3: The ion’s electronic state is chosen to be the accessible system S while ion’s harmonic motion in the trap plays the role of the inaccessible environment E.

Protocol Open quantum system S Inaccessible environment E Dephasing operation Φ Unitary evolution U (t)

Implementation Ion electronic state Ion motional state AC Stark shift with 397 nm laser Blue sideband interaction

Table 5.1: Summary of the experimental implementation of the local detection protocol.

5.3 Single Ion Demonstration
The goal of the experiment was to implement the local detection protocol described above. The realization uses a well-studied and precisely controlled system of a a single trapped ion. Verifying the protocol’s validity using a well-understood system paves the way for its use in more complex scenarios.
5.3.1 Choice of Physical Systems
A number of choices had to be made regarding the protocol’s implementation. The summary of these selections is presented in Table 5.1. The protocol requires two quantum systems S and E, where the quantum state of the system S is subject to arbitrary operations and measurements. The choices for these are shown in Fig. 5.3. We chose the electronic state of the ion to represent the system S. It is a two level system consisting of the ground state |g = |S1/2, mj = −1/2 and the long-lived excited state-
 |e = |D5/2, mj = −5/2 . All of the state operations required for the protocol have been demonstrated with high ﬁdelities in the context of quantum information processing [41]. The inaccessible environment E is modeled by the one-dimensional harmonic oscillator motion of the ion in the trap.
We need to generate quantum correlations between the chosen quantum states in order to detect their presence. This is done with the blue sideband interaction of the JaynesCummings Hamiltonian produced with the 729 nm laser tuned to the ﬁrst blue motional

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

54

sideband [2],

h¯ U (t) = 2 Ω0η

aˆ†σ+eiφ + aˆσ−e−iφ

,

(5.9)

where Ω0 is the carrier Rabi frequency, and η is the Lamb-Dicke parameter. The same interaction is chosen for the unitary time evolution U (t) that distinguishes between the

dephased and the undephased systems. Aside from the unitary interaction, we abstain from

performing any operations on the ion motion, as we are not allowed to access the environment

in the course of the protocol.

According to the protocol, the dephasing operation requires performing a non-selective

measurement in the eigenbasis of the electronic system. Performing a non-selective mea-

surement involves reading out the electronic state of the ion, a process that may involve

scattering many photons oﬀ the ion and aﬀecting the inaccessible ion motion. We have,

therefore, chosen a diﬀerent way of dephasing the ion by using AC Stark shift generated by a

far-detuned laser. Mathematically equivalent to a non-selective measurement, the dephasing

via the AC Stark shift will scatter photons with a very small probability and will not disturb the motional degree of freedom2.

5.3.2 Dephasing with AC Stark Shift
To perform the dephasing operation in the {|g ,|e } basis, we use a laser near 397 nm tightly focused onto the ion and far-detuned from the S1/2 − P1/2 transition, ∆ = +2π × 400GHz as shown in Figure 5.4. With the coupling strength characterized in terms of the Rabi frequency Ω, the eﬀective Hamiltonian for the AC Stark shift in the far-detuned regime is [42]:

Hac

=

− h¯ Ω2 4∆

(|p

p| − |g

g|) ,

(5.10)

where |p denotes the P1/2 electronic state. We analyze this interaction using the following bases of three relevant energy levels:

1

0

0

|e =  0  , |p =  1  , |g =  0  .

0

0

1

(5.11)

Assuming that the P1/2 electronic state is not populated and there are no initial coherences between the P1/2 energy level and the qubit, we compute the eﬀect of applying the
2The dephasing operation could still be implemented by measuring the electronic state but the procedure requires some additional complexity. To dephase the system in the {|g ,|e } basis, we need to be able to project onto those electronic states. Projecting the ion onto the dark state |e does not aﬀect the ion motion as no photons are scattered during state readout. Projection onto the ground state |g may be implemented as a π-pulse to rotate the quibit to |e , state readout to project the system -
into |e followed by another π rotation back to the ground state. The subsequent time evolution of the system would need to be weighted according to the obtained measurement probabilities.

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

55

P1/2
397 nm

= 2⇡ ⇥ 400GHz

|e
⌦

D5/2

|g

S1/2

Figure 5.4: The AC Stark shift is generated with the laser at 397 nm blue-detuned from the S1/2 − P1/2 transition by ∆ = +2π × 400GHz.

Hamiltonian Hac for a time t on a general density matrix ρ representing the three-level ion,

 ρee 0 ρeg  ρ= 0 0 0  .
ρge 0 ρgg

(5.12)

The density matrix evolves as follows:

ρ(t) = e−iHact/¯hρeiHact/¯h

1 0

= 0

e iΩ2 4∆

t

0

  ρee 0

0

 

0

0





0

0

e−

iΩ2 4∆

t

ρge 0

 ρee

0

ρ e eg

iΩ2 4∆

t



= 0 0



ρ e ge

−

iΩ2 4∆

t

0

0 . 
ρgg

ρeg

 

1

0

 

0



ρgg

0

0

e−

iΩ2 4∆

t

0

0

0



e iΩ2 4∆

t

(5.13) (5.14)
(5.15)

When the AC Stark shift is applied, the populations of the electronic states |g g| and |e e| are not aﬀected but the coherence evolve with the frequency Ω2/4∆. The precession frequency Ω2/4∆ ∼ 2π×40kHz was measured by performing a Ramsey-type experiment with
varying duration t of the AC Stark shift interaction, see Figure 5.5. From this, we calculate the coupling strength, Ω ∼ 2π ×250 MHz corresponding to the saturation parameter s ∼ 255 where the saturation parameter is deﬁned as s = 2Ω2/Γ2 where Γ = 1/τ is the linewidth of the P1/2 energy level with the lifetime τ ∼ 7.1ns. The saturation parameter s can be expressed in terms of the transition saturation intensity s = I/Isat [43] with the saturation

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

56

AC Stark Shift

Rcar(

⇡ 2

,

0)

Hac(t)

Rcar(

⇡ 2

,

0)

y i)

h

+

(1

1 2

Interaction time t

Figure 5.5: We perform a Ramsey-type experiment to measure the precession frequency of

the

Bloch

vector

Ω2 4∆

due

to

the

AC

Stark

shift

from

a

far-detuned

laser.

The

initial

π 2

pulse

on the carrier transition creates a superposition state Ψ = √1 (|g + i|e ). Then the far-

2

detuned laser at 397 nm is applied to the atom for a variable interaction time t, after which

the

y-component

is

the

Bloch

vector

is

measured

with

an

additional

carrier

π 2

pulse.

In

this

realization,

the

precession

frequency

is

extracted

from

a

sinusoidal

ﬁt

to

be

Ω2 4∆

∼

2π ×49kHz.

The contrast of 0.91 reﬂects imperfections in state preparation and qubit rotations.

intensity Isat:

π hc Isat = 3 λ3τ ,

(5.16)

where c is the speed of light and the transition wavelength is λ = 397 nm, yielding Isat ∼ 46.8 mW/cm2. The total applied laser power was P ∼ 500 µW, indicating that the beam

waist was approximately 5 µm.

In order to perform the dephasing operation, we sample over n = 10 diﬀerent time AC

Stark

shift

durations

tk

evenly

spaced

between

t1

=

0

and

Ω2 4∆

tn

=

2π

with

the

maximum

in-

teraction time tn ∼ 25 µs. Averaging over these durations removes the oﬀ-diagonal coherence

terms in the density matrix, yielding the dephased state ρ S(0):

1 ρ S(0) = TrE n

e−iHactk/¯h ⊗ I ρ(0) eiHactk/¯h ⊗ I .

k

(5.17)

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

57

The time-evolved dephased density matrix ρ S(t) is calculated as the average time evolution of the n samples:

1 ρ S(t) = TrE n

U (t) e−iHactk/¯h ⊗ I ρ(0) eiHactk/¯h ⊗ I U (t)† .

k

(5.18)

An intuitive way of picturing the dephasing implementation is that the AC Stark shift rotates the state vector in the x − y plane of the Bloch sphere. By averaging over all of the rotation angles between 0 and 2π, we calculate the dephased state corresponding to the center of the Bloch sphere.
The far detuning of the applied laser ensures that the motional degree of freedom remains nearly unaﬀected. The expected number of scattered photons during the maximum interaction time of tn ∼ 25 µs is Γρpptn ∼ 3.5 × 10−4 with the probably of ﬁnding the ion in the P1/2 state, ρpp is given by [2]:

s/2 ρpp = 1 + s + (2∆/Γ)2 ,

(5.19)

where Γ is the width of the P1/2 energy level, Γ = 1/τ ∼ 2π × 22.4 MHz.

5.3.3 Experimental Results

The experiments realizing the local detection protocol proceed as follows: ﬁrst the motional

state of the ion is prepared either in a thermal state with Doppler cooling or close to the

ground state with additional sideband cooling. Then we use the blue sideband interaction

U (t) for a preparation time t0 to create quantum correlations between the qubit and the ion’s motion. At this point, we perform state tomography of the electronic state to determine the

correct eigenbasis for the dephasing operation. We then apply the same blue sideband

interaction U (t) for the excitation duration time t1 to compare the time evolution of the electronic state with and without dephasing.

The

results

for

the

sideband-cooled

case

with

preparation

time

of

a

π 2

pulse

in

the

blue

sideband,

t0ηΩ0

=

π 2

presented

in

Figure

5.6.

State tomography of the state after the

preparation pulse indicates that the density matrix is diagonal in the {|g ,|e }, basis. This

is expected for the blue sideband interaction. For example, after tracing out the motional

degree of freedom of the prepared state Ψ = |g, 0 + i|e, 1 , the density matrix ρS(0) will have no oﬀ-diagonal terms. The diagonal form of ρS(0) means that for dephasing we can use the AC Stark shift method without needing additional single qubit rotations. We also

performed state tomography after the dephasing operation to conﬁrm that the measured

density matrices and the dephasing operation does not disturb the locally accessible system:

ρS(0) = ρ S(0). We executed the local detection protocol with varying length of preparatory pulses, as

shown in Figure 5.7 for preparation times of t0ηΩ0 = π and t0ηΩ0 = 3π/2. In the case of

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

58

⇢
⇢0 = ( ⌦ I)⇢
|g, 0i + i|e, 1i

⇢S = ⇢0S
Figure 5.6: Comparing the dephased (blue points) and the undephased time (red points) evolutions when starting close to the motional ground state n¯ = 0.2. The error bars are the statistical errors for n = 1000 readouts, σ = p(1 − p)/n. The deviation between the two time evolutions proves the presence of quantum correlations in the prepared state. The undephased curve is ﬁtted to a theoretical model for Rabi ﬂopping (red curve) and the ﬁtted parameters are used to predict the time evolution of the-
 dephased curve under the same blue sideband interaction (dashed blue line). For more details, please refer to the experimental publication including the supplementary information [39].
a perfect π pulse on the sideband, there should be no quantum correlations between the electronic and the motional states. The small measured deviation between the dephased and the undephased curves is due to the ﬁnite initial temperature: if the motion is not all initially in the ground state then some correlations remain.
The protocol makes no assumptions whether the system or the environment are in a pure quantum state. In fact, we conﬁrmed that the protocol reveals the presence of quantum correlations for mixed states motion as shown in Figure 5.8. In this case, we did not perform sideband cooling and started with the thermal state of the environment, n¯ = 5.9.
It is possible to use the measurements to extract quantitative information about the present quantum correlations. As shown in [38], the maximum of the trace distance between the dephased and the undephased states (equivalent to the maximum diﬀerence in the population of the excited states) provides the lower bound for quantum discord. Interestingly,

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

59

Figure 5.7: Comparing the dephased and undephased time evolutions after a preparatory π pulse (left) and 3π/2 pulse (right) on the blue sideband. After the π pulse, there should be little quantum correlations present, consistent with little deviations between the two curves. The quantum correlations are again present after the 3π/2 pulse and are revealed by the protocol. The plots follow the conventions of Figure 5.6.

Figure 5.8: Local detection protocol applied with a thermal state of motion still reveals the presence of quantum correlations. The plot follows the conventions of Figure 5.6.

CHAPTER 5. DETECTION OF QUANTUM CORRELATIONS

60

the detected lower bound comes close to actual amount of correlations expected from theory. The reader can refer to [39] for a complete discussion.

5.4 Summary
In this section we have presented the ﬁrst experimental realization of the local detection protocol, verifying that it reveals quantum correlations in both pure and mixed states. We have experimentally shown that the presence of initial quantum correlations can play a large role in determining open system dynamics. The main strength is of the protocol is its ability to detect quantum correlations when the environment is not accessible. One of the most important presented features is that the measu-
rements provide quantitative information about quantum correlations, making a direct connection between experimental results and the theoretical notion of quantum discord. The maximum measured deviation between the dephased and the undephased time evolutions directly gives the lower bound for the amount of discord initially present between the open quantum system and the environment.
It is important to emphasize that should the protocol not reveal the presence of quantum correlations, it does not mean quantum correlations are absent. The measurements are only a lower bound. Any deviation in the time evolution of the dephased and the undephased states reveals the presence of quantum correlations. Only a single measurement is required in contrast to performing 3N operations for state tomography. In this respect, the protocol is similar to constructing a particular witness for qu-
antum correlations instead of measuring the entire density matrix.
The experiment used one of the simplest possible representations for the environment, a single harmonic oscillator. This raises an important question as to how the protocol would perform with a larger environment - we will discuss an experiment aimed at answering this question in the next Chapter. In addition, we will build on this proof-of-principle experiment and discuss a direct application of the protocol for the purposes of detecting quantum phase transitions.

61
Chapter 6
Dephasing with Larger Environments
6.1 Long Trapped Ion Chains
The experiment described in Chapter 5 used the one-dimensional harmonic motion of the ion in the trap to represent the environment E of the open quantum system S represented by the electronic state of the ion. This environment is non-Markovian as there are clear memory eﬀects in the system’s time evolution. Here, we extend the experiment by considering a larger environment of multiple harmonic oscillators. The goal is to answer the question of whether or not the protocol still reveals the presence-
 of quantum correlations for suﬃciently large environments and to explore the connection with the system’s degree of non-Markovianity [44, 45, 46]. In this Chapter, we present the ﬁrst experimental steps undertaken towards this goal.
The experiment incorporates the local detection protocol with aspects of the energy transport in trapped ion chains presented in Chapter 4. To study transport of energy, we prepared an out-of-equilibrium state by rapidly imparting momentum onto one of the ions in the chain. Similarly, here we use a short sideband pulse of 729 nm to create quantum correlations between the electronic state of the ion and its local motion in the trap. The duration of the entangling pulse tSB has to be short enough su-
ch that the pulse’s Fourier bandwidth encompasses all of the radial normal modes, see Figure 6.1. Since the local motional mode can be decomposed in terms of the normal modes of the chain, we eﬀectively create quantum correlations between the electronic state and a larger environment containing all of the participating radial normal modes of motion.
We then perform the dephasing operation and compare the time evolution of the dephased and the undephased states under a unitary interaction U (t) for a time tmax. The unitary U (t) is chosen to complete the underlying Ramsey experiment. The time evolution is shown in Figure 6.2. If tmax ≤ tSB, then the unitary is simply the continuation of the fast sideband pulse used to create the correlations. This is exactly the same as we performed in case of the single ion. If the maximum unitary interaction-
 time is longer than the pulse time, tmax > tSB, then we let the system evolve freely before for a time tmax − tSB and then apply the second

CHAPTER 6. DEPHASING WITH LARGER ENVIRONMENTS

62

Resolving Radial Modes

Excitation Probability

Frequency (kHz)
Figure 6.1: The spectra of the red radial motional modes for a ﬁve ion chain are shown for various excitation times with the 729 nm laser. For short excitations, the Fourier bandwidth is much larger than the mode splitting and the local mode of motion is excited. With suﬃciently long excitations and reduced laser intensity, we resolve the normal modes of ion motion. The spectra are shifted at high laser intensities due to the AC Stark shift eﬀect.
sideband pulse. In either case, the short duration of the sideband pulse interacts with the local mode of ion motion.
The preliminary results of such an experiment conducted with a chain of ﬁve ions is shown in Figure 6.3. All of the normal modes of ion motion were prepared in a thermal state with Doppler cooling. We observe that the dephased and the undephased time evolutions diﬀer and, hence, the protocol is successful as detecting the present quantum correlations. The data was collected at the same conditions as the energy transport experiment where the energy supplied to the leftmost ion was transferred to th-
e rightmost ion in t ∼ 70 µs. Here we see that at that point in the time evolution, the dephased and the undephased curves match. Our interpretation is that the electronic state of the leftmost ion is now correlated with the local motion of the rightmost ion and quantum correlations can no longer be detected locally.
Similar to the energy transport results, the quantum correlations then come back to the leftmost ion: the larger environment is still non-Markovian. Then the protocol once again is able to detect the presence of quantum correlations. For longer time, the diﬀerence between the dephased and the undephased time evolutions vanishes due to the limited motional

CHAPTER 6. DEPHASING WITH LARGER ENVIRONMENTS

63

Unitary Time Evolution U (t)

tmax  tSB

tmax > tSB

0 tmax

t

0

tstart tmax t

tstart = tmax tSB

Figure 6.2: Shown is the time evolution U (t) for two diﬀerent maximum interaction times tmax. Sideband pulses are depicted in red. For short time evolutions, the pulse begins immediately after dephasing t = 0. For long evolutions, the pulse only starts after a waiting period.

coherence time. We are currently exploring the systematic eﬀect of laser detuning of the radial sideband
pulses. The challenge is that at Doppler temperature, it is no longer possible to perform a brute-force numerical simulation of the dynamics. If we need to consider 10 motional levels for each of the 5 normal modes, then the density matrix representing of the environment has dimension 105. Furthermore, similar to the energy transport experiment, the exact same experimental procedure can be repeated with a much larger number of ions.
6.2 Local Signature of Quantum Phase Transitions
In this section, we demonstrate how the local detection protocol can be applied for detection of quantum correlations during a quantum phase transition. There is a wide body of literature exploring the interplay between quantum entanglement and quantum phase transitions. While quantum phase transitions of quantum magnetism have already been realized with trapped ions, [23, 24] there has been no measurements demonstrating the presence of quantum correlations during the quantum phase transition. The-
 advantage of the protocol is that it requires operations only on one subsystem, for example only one spin of a quantum magnet. This is particular pertinent as the experiments have been approaching system sizes for which measuring the full density matrix is no longer feasible.
To demonstrate the use of the protocol, we considering the example of a ferromagnetic quantum Ising model realized in [23]. Our study of quantum correlations between a single site and the rest of the system during the quantum phase transition is particularly compelling

CHAPTER 6. DEPHASING WITH LARGER ENVIRONMENTS

64

Preliminary!

Local Excitation

Evolution Time (µs)
Figure 6.3: Preliminary data applying the local detection protocol to a chain of trapped ions. The leftmost ion is initially entangled with the local mode of motion with a fast sideband excitation pulse. The evolution time consists of a waiting period followed about another fast sideband excitation. The diﬀerence between the dephased and the undephased time evolution proves the presence of quantum correlations.

because of a known correspondence between the behavior of entanglement and the critical point in the transverse Ising model [47]. The Hamiltonian H is given by the sum of the Ising coupling and the magnetic ﬁeld terms:

H=

−Jij σx(i)σx(j) − B

σy(i) ,

i<j

i

(6.1)

where σx(i) and σy(i) are Pauli spin operators applied to the ith spin and B is the strength of
the magnetic ﬁeld along the y direction. We consider the approximate Ising coupling Jij [48] where the coupling strength falls oﬀ with distance |i − j| as:

Jij

≈

J0 |i − j|α

.

(6.2)

The experimental quantum simulation begins by initializing all the spins to point along the y direction. This is the ground state of the Hamiltonian H0 = −B i σy(i) and an approximate

CHAPTER 6. DEPHASING WITH LARGER ENVIRONMENTS

65

ground state of H for very strong magnetic ﬁelds: B J0. After the preparation step, the magnetic ﬁeld B is adiabatically ramped down to B = 0 such that the system remains in the ground state of H during the ramp. While the prepared initial state is a product state containing has no quantum correlations, the ﬁnal state of the simulation is an entangled state. More precisely, for B = 0 the ground state of H is a superposition of the states | ↑↑ . . . ↑ and | ↓↓ . . . ↓ where | ↑ and | ↓ are the eige-
nstates of σx.
Let us consider the reduced density matrix of only one spin within the chain during the course of the quantum simulation. It is initialized with the Bloch vector pointing along the y direction and terminates as the maximally mixed state with no net magnetization along y. The magnetization during the course of the phase transition is plotted in Figure 6.5. This type of net magnetization measurement has been performed in the experiments conﬁrming that the system has gone through the phase transition-
. However, the net magnetization does not reveal anything about the presence of quantum correlations during the evolution.
The method of local detection probes the emergence of the quantum correlations between the one spin and the rest of the system during the ramp. We performed numerical simulations using the QuTip framework [49] to conﬁrm that the local detection method can be readily applied to the given system. For the simulation, we used N = 5 spins and the coupling coeﬃcient α = 1.0. The simulations consist of preparing a correlated state by ramping the magnetic ﬁeld down to a particular value B, then comparing -
the time evolution of the dephased and the unperturbed system while the magnetic ﬁeld remains ﬁxed at the chosen value. The dephasing operation has to be performed in the σy basis, which, as described in section 5.3.2, may be implemented with an AC-Stark shift but with additional unitary rotations.
The results of the simulation for various dephasing point along the magnetic ﬁeld ramp are plotted in Figure 6.4. We see that for early dephasing times, B/J0 1, the dephased and the undephased time evolutions match, demonstrating that quantum correlations are either not present or do not play a signiﬁcant role in the ensuing time evolution. For later dephasing times, there is an appreciable diﬀerence between the two time evolutions, and it seems to be largest close to the quantum critical point B/-
J0 = 1. The diﬀerence in time evolutions of the dephased and the undephased states has a straightforward interpretation. For a suﬃciently slow ramp, the system will remain in the ground state over the course of the ramp. With the magnetic ﬁeld ﬁxed, the evolution of the undephased state is trivial as the system remains in the ground state of the Hamiltonian. The dephasing operation, however, projects the ground state onto a superposition of the eigenstates. Therefore, the single spin begins to osc-
illate at the corresponding eigenfrequencies.
To quantify the eﬀect of quantum correlations on the dynamics, we plot the maximum trace distance between the dephasing and the undephased time evolutions as a function of the dephasing point, see Figure 6.5. The maximal trace distance peaks near the quantum critical point. According to the protocol, the maximum trace distance is only the lowest bound on the present quantum correlations. Interestingly here, we see that the peak attainable lowest bound is indicative of the quantum critical point. E-
xperimentally, it is not possible to let the system evolve indeﬁnitely to obtain the largest possible trace distance. But the results

CHAPTER 6. DEPHASING WITH LARGER ENVIRONMENTS

66

Figure 6.4: The time evolutions of the dephased and the undephased states are shown for three dephasing points along the quantum phase transition: B/J0 = 5 (top), B/J0 = 0.5 (center), and B/J0 = 0.05 (bottom). The numerical simulation takes into account the ﬁnite speed of the ramp: the magnetic ﬁeld is lowered from the initial value of B/J0 = 50 to B/J0 = 0.01 as a decaying exponential with the time constant of 5/J0.

CHAPTER 6. DEPHASING WITH LARGER ENVIRONMENTS

67

Figure 6.5: Shown in blue is the y component of the Bloch vector of the single spin as the magnetic ﬁeld is ramped down. For this simulation, we assume an inﬁnitely slow ramp, allowing us to simply compute the ground state of H for every value of B. The x and z components have no preferred direction over the course of the simulation. Shown in red is the maximal local trace distance between the subsequent dephased and the undephased time evolutions when the dephasing operation is applied at the par-
ticular ﬁeld B. The simulation shows that there is a large deviation between the time evolutions, which we expect to be experimentally detectable.

CHAPTER 6. DEPHASING WITH LARGER ENVIRONMENTS

68

should still be observable for reasonable decoherence timescales, as presented in [50]. For small magnetic ﬁelds no quantum correlations are detected with this method even though the spins are in a large superposition state.
While the method for detection of quantum correlations over the course of quantum phase transition was presented in the context of quantum magnetism simulations, we expect it to be broadly applicable to a variety of systems. For instance, we envision applying it to the Jaynes-Cummings-Hubbard model realized with a system of two ions by Toyoda et al. [51]. The protocol may serve as a conclusive experimental veriﬁcation of a quantum phase transition. The standard deﬁnition of a quantum phase transit-
ion is that it occurs at zero temperature and is driven by quantum, rather than thermal ﬂuctuations. Such a deﬁnition is diﬃcult to verify experimentally. The presented protocol introduces a new experimental deﬁnition: for a phase transition to be quantum, the present quantum correlations must play a role in the system’s time evolution.

69
Chapter 7
Summary
In this Chapter we give a brief review of the presented material. The introductory Chapter described the motivation for the conducted work. In Chapter 2, we reviewed the fundamentals of ion trapping and the ion-laser interactions, describing how time-varying electric ﬁelds in a Paul trap conﬁne the ions. We then focused on coherent interaction of the laser addressing a narrow electronic transition and gave an overview of Doppler cooling.
In Chapter 3, we presented the experimental apparatus for trapping ions. We reviewed the motivations for selecting a three-dimensional Paul trap for the experiments, and described the design, assembly, and construction of the ﬁrst-generation trap and the optical cavity. The trap was used to conduct all of the experiments in this thesis, but the cavity was misaligned after the ﬁnal pumpdown and bakeout. We then presented our design modiﬁcations for the next-generation trap and cavity, which are cur-
rently under construction. The new designs built on our experience with the ﬁrst trap and should correct the known shortcomings. The Chapter also described the imaging system for collecting ion ﬂuorescence using a CCD and a PMT and the employed experimental procedures of frequency-resolved optical pumping and auto-crystallization.
In the following Chapter on energy transport, we reported on conducted experiments studying the dynamics of ion motion within long chains. We performed a Newton cradle-like experiment by rapidly imparting momentum onto a single ion at the end of the chain with the technique of pulsed excitation. After letting the system evolve for a variable delay time, we measured the energy of the ions on the extreme ends of the chain. This allowed us to observe the dynamics of the initial energy excitation as i-
t propagated between the observed ions. The results agreed with the normal-mode model of ion motion, demonstrating a good degree of control over ion motion in long chains. The results represented the ﬁrst experimental steps towards realizing existing theoretical proposals considering ion chains as a model system of coupled oscillators.
In Chapter 5, we presented the technique of detecting quantum correlations between two quantum systems with only access to one of the two subsystems. We used a single trapped ion to implement this technique of local detection. The ion’s energy level represented the accessible system while the ion’s motion in the trap played the role of the inaccessible

CHAPTER 7. SUMMARY

70

environment. We described the implementation of the dephasing operation, which removes the quantum correlations between the two quantum systems without disturbing either of the systems. The protocol relied on detecting the diﬀerence in the time evolution of the accessible system with and without the presence of quantum correlations. If the time evolution diﬀered with and without the dephasing operations, we concluded that quantum correlations must have been present when the dephasing operation was-
 applied. The protocol was shown to successfully detect quantum correlations for both quasi-pure and thermal states of ion motion.
The ideas of energy transport in long ion chains and the protocol for locally detecting quantum correlations coalesced in Chapter 6. There, we described the ﬁrst experiments for detecting quantum correlations between the electronic level of a single ion and a larger environment consisting of many radial normal modes of chain motion. The results were relevant for the general study of the role of quantum correlations for dynamics of manybody systems. Lastly, we focused on how the local detection pro-
tocol may be used for detection of quantum phase transitions.

71
Bibliography
[1] Gebhard Littich. “Electrostatic Control and Transport of Ions on a Planar Trap for Quantum Information Processing”. MA thesis. ETH Zurich, 2011.
[2] D. Leibfried et al. “Quantum dynamics of single trapped ions”. In: Rev. Mod. Phys. 75 (Mar. 2003), pp. 281–324. doi: 10.1103/RevModPhys.75.281.
[3] R. E. March and J. F. Todd. Quadrupole Ion Trap Mass Spectrometry. 2nd. WileyIEEE, 2005. isbn: 9780471488880.
[4] C. A. Blockley, D. F. Walls, and H. Risken. “Quantum Collapses and Revivals in a Quantized Trap”. In: EPL 17.6 (1992), p. 509. doi: 10.1209/0295-5075/17/6/006.
[5] Christian Roos. “Controlling the quantum state of trapped ions”. PhD thesis. University of Innsbruck, 2000.
[6] Stephan Gulde. “Experimental realization of quantum gates and the Deutsch-Josza algorithm with trapped 40Ca+-ions”. PhD thesis. University of Innsbruck, 2003.
[7] F. Rosebury. Handbook of Electron Tube and Vacuum Techniques. American Vacuum Society Classics. American Inst. of Physics, 1992. isbn: 9781563961212.
[8] Thaned Pruttivarasin et al. “Trapped ions in optical lattices for probing oscillator chain models”. In: New J. Phys. 13.7 (July 2011), p. 075012. doi: 10.1088/13672630/13/7/075012.
[9] Thaned Pruttivarasin. “Spectroscopy, fundamental symmetry tests and quantum simulation with trapped ions”. PhD thesis. University of California, Berkeley, 2014.
[10] Jan Benhelm. “Precision spectroscopy and quantum information processsing with trapped calcium ions”. PhD thesis. University of Innsbruck, 2008.
[11] Michael Ramm et al. “Precision Measurement Method for Branching Fractions of Excited P1/2 States Applied to 40Ca+.” In: Phys. Rev. Lett. 111 (July 2013), p. 023004. doi: 10.1103/PhysRevLett.111.023004.
[12] D.F.V. James. “Quantum dynamics of cold trapped ions with application to quantum computation”. In: Applied Physics B 66.2 (1998), pp. 181–190. doi: 10.1007/ s003400050373.

BIBLIOGRAPHY

72

[13] Markus Ansmann. “Benchmarking the Superconducting Josephson Phase Qubit: The Violation of Bell’s Inequality”. PhD thesis. University of California, Santa Barbara, 2009.
[14] D. Porras and J. I. Cirac. “Bose-Einstein Condensation and Strong-Correlation Behavior of Phonons in Ion Traps”. In: Phys. Rev. Lett. 93 (26 Dec. 2004), p. 263602. doi: 10.1103/PhysRevLett.93.263602.
[15] G-D Lin and L-M Duan. “Equilibration and temperature distribution in a driven ion chain”. In: New J. Phys. 13.7 (July 2011), p. 075015. doi: 10.1088/1367-2630/13/ 7/075015.
[16] A. Bermudez, M. Bruderer, and M. B. Plenio. “Controlling and Measuring Quantum Transport of Heat in Trapped-Ion Crystals”. In: Phys. Rev. Lett. 111 (4 July 2013), p. 040601. doi: 10.1103/PhysRevLett.111.040601.
[17] A. Benassi, A. Vanossi, and E. Tosatti. “Nanofriction in cold ion traps.” In: Nat. Commun. 2 (Jan. 2011), p. 236. doi: 10.1038/ncomms1230.
[18] E Fermi, J Pasta, and S Ulam. “Studies of nonlinear problems”. In: Los Alamos Report LA-1940 (1955).
[19] G. P. Berman and F. M. Izrailev. “The Fermi-Pasta-Ulam problem: Fifty years of progress”. In: Chaos 15.1, 015104 (2005). doi: 10.1063/1.1855036.
[20] D. Porras and J. I. Cirac. “Eﬀective Quantum Spin Systems with Trapped Ions”. In: Phys. Rev. Lett. 92 (20 May 2004), p. 207901. doi: 10.1103/PhysRevLett.92.207901.
[21] A. Friedenauer et al. “Simulating a quantum magnet with trapped ions”. In: Nat Phys 4.10 (Oct. 2008), pp. 757–761. doi: 10.1038/nphys1032.
[22] Ch Schneider, Diego Porras, and Tobias Schaetz. “Experimental quantum simulations of many-body physics with trapped ions”. In: Reports on Progress in Physics 75.2 (2012), p. 024401.
[23] R Islam et al. “Onset of a quantum phase transition with a trapped ion quantum simulator.” In: Nat. Commun. 2 (2011), p. 377. doi: 10.1038/ncomms1374.
[24] R. Blatt and C. F. Roos. “Quantum simulations with trapped ions”. In: Nat. Phys. 8 (2012), pp. 277–284. doi: 10.1038/nphys2252.
[25] Nahuel Freitas, Esteban Martinez, and Juan Pablo Paz. Heat transport through ion crystals. 2013. eprint: arXiv:1312.6644.
[26] Antonia Ruiz et al. Tuning heat transport in trapped-ion chains across a structural phase transition. 2014. eprint: arXiv:1401.5480.
[27] Bao-quan Ai, Dahai He, and Bambi Hu. “Heat conduction in driven Frenkel-Kontorova lattices: Thermal pumping and resonance”. In: Phys. Rev. E 81 (3 Mar. 2010), p. 031124. doi: 10.1103/PhysRevE.81.031124.

BIBLIOGRAPHY

73

[28] Michael Ramm, Thaned Pruttivarasin, and Hartmut Ha¨ﬀner. Energy Transport in Trapped Ion Chains. 2013. eprint: arXiv:1312.5786.
[29] H Landa et al. “Structure, dynamics and bifurcations of discrete solitons in trapped ion crystals”. In: New Journal of Physics 15.9 (2013), p. 093003.
[30] P. A. Ivanov et al. “Simulation of a quantum phase transition of polaritons with trapped ions”. In: Phys. Rev. A 80.6 (Dec. 2009), p. 060301. doi: 10.1103/PhysRevA.80. 060301.
[31] X.-L. Deng, D. Porras, and J. I. Cirac. “Quantum phases of interacting phonons in ion traps”. In: Phys. Rev. A 77 (3 Mar. 2008), p. 033403. doi: 10.1103/PhysRevA.77. 033403.
[32] Kevin Sheridan et al. “All-optical broadband excitation of the motional state of trapped ions”. In: Eur. Phys. J. D 66.11 (Nov. 2012), p. 289. doi: 10.1140/epjd/e201230377-8.
[33] Y.-W. Lin, S Williams, and B C Odom. “Resonant few-photon excitation of a singleion oscillator”. In: Phys. Rev. A 87.1 (Jan. 2013), p. 011402. doi: 10.1103/PhysRevA. 87.011402.
[34] Frank Ziesel et al. “Experimental creation and analysis of displaced number states”. In: J. Phys. B: At. Mol. Opt. Phys. 46.10 (May 2013), p. 104008. doi: 10.1088/09534075/46/10/104008.
[35] Hiroki Saito and Hiroyuki Hyuga. “Relaxation of Schro¨dinger Cat States and Displaced Thermal States in a Density Operator Representation”. In: J. Phys. Soc. Jpn. 65.6 (1996), pp. 1648–1654. doi: 10.1143/JPSJ.65.1648.
[36] M. Gessner et al. Nonlinear Spectroscopy of Many-Body Quantum Systems with Single Site Addressability. 2013. eprint: arXiv:1312.3365.
[37] Manuel Gessner and Heinz-Peter Breuer. “Detecting Nonclassical System-Environment Correlations by Local Operations”. In: Phys. Rev. Lett. 107 (18 Oct. 2011), p. 180402. doi: 10.1103/PhysRevLett.107.180402.
[38] Manuel Gessner and Heinz-Peter Breuer. “Local witness for bipartite quantum discord”. In: Phys. Rev. A 87 (4 Apr. 2013), p. 042107. doi: 10.1103/PhysRevA.87. 042107.
[39] M. Gessner et al. “Local detection of quantum correlations with a single trapped ion”. In: Nat. Phys. 10.2 (Dec. 2013), pp. 105–109. doi: 10.1038/nphys2829.
[40] H.P. Breuer and F. Petruccione. The Theory of Open Quantum Systems. OUP Oxford, 2007. isbn: 9780199213900.
[41] H. H¨aﬀner, C.F. Roos, and R. Blatt. “Quantum computing with trapped ions”. In: Physics Reports 469.4 (2008), pp. 155–203. doi: 10.1016/j.physrep.2008.09.003.
[42] D. F. James and J. Jerke. “Eﬀective Hamiltonian theory and its applications in quantum information”. In: Can. J. Phys. 85.6 (2007), pp. 625–632. doi: 10.1139/P07-060.

BIBLIOGRAPHY

74

[43] Christopher J. Foot. Atomic Physics (Oxford Master Series in Atomic, Optical and Laser Physics). 1st ed. Oxford University Press, USA, Feb. 10, 2005. isbn: 0198506961.
[44] Heinz-Peter Breuer, Elsi-Mari Laine, and Jyrki Piilo. “Measure for the Degree of NonMarkovian Behavior of Quantum Processes in Open Systems”. In: Phys. Rev. Lett. 103 (21 Nov. 2009), p. 210401. doi: 10.1103/PhysRevLett.103.210401.
[45] A´ ngel Rivas, Susana F. Huelga, and Martin B. Plenio. “Entanglement and NonMarkovianity of Quantum Evolutions”. In: Phys. Rev. Lett. 105 (5 July 2010), p. 050403. doi: 10.1103/PhysRevLett.105.050403.
[46] E.-M. Laine, J. Piilo, and H.-P. Breuer. “Witness for initial system-environment correlations in open-system dynamics”. In: EPL 92.6 (2010), p. 60010.
[47] Tobias J. Osborne and Michael A. Nielsen. “Entanglement in a simple quantum phase transition”. In: Phys. Rev. A 66 (3 Sept. 2002), p. 032110. doi: 10.1103/PhysRevA. 66.032110.
[48] R. Islam et al. “Emergence and Frustration of Magnetism with Variable-Range Interactions in a Quantum Simulator”. In: Science 340.6132 (2013), pp. 583–587. doi: 10.1126/science.1232296.
[49] J.R. Johansson, P.D. Nation, and Franco Nori. “QuTiP 2: A Python framework for the dynamics of open quantum systems”. In: Computer Physics Communications 184.4 (2013), pp. 1234–1240. doi: 10.1016/j.cpc.2012.11.019.
[50] Manuel Gessner et al. Observing a Quantum Phase Transition by Measuring a Single Spin. 2014. eprint: arXiv:1403.4066.
[51] Kenji Toyoda et al. “Experimental Realization of a Quantum Phase Transition of Polaritonic Excitations”. In: Phys. Rev. Lett. 111 (16 Oct. 2013), p. 160501. doi: 10.1103/PhysRevLett.111.160501.
[52] Martin Sepiol. “Frequency stabilization of a 729 nm diode laser to an external high ﬁnesse reference cavity”. MA thesis. ETH Zurich, 2012.
[53] G. Tommaseo et al. “The gJ-factor in the ground state of Ca+”. In: The European Physical Journal D - Atomic, Molecular, Optical and Plasma Physics 25.2 (2003), pp. 113–121. doi: 10.1140/epjd/e2003-00096-6.
[54] M. Chwalla et al. “Absolute Frequency Measurement of the 40Ca+ 4s2S1/2 − 3d2D5/2 Clock Transition”. In: Phys. Rev. Lett. 102 (2 Jan. 2009), p. 023002. doi: 10.1103/ PhysRevLett.102.023002.
[55] Michael A. Nielsen and Isaac L. Chuang. Quantum Computation and Quantum Information (Cambridge Series on Information and the Natural Sciences). 1st ed. Cambridge University Press, Jan. 1, 2004. isbn: 0521635039.
[56] Mark E. Tuckerman. Statistical Mechanics: Theory and Molecular Simulation (Oxford Graduate Texts). Oxford University Press, USA, Apr. 19, 2010. isbn: 0198525265.

BIBLIOGRAPHY

75

[57] Claude Cohen-Tannoudji, Jacques Dupont-Roc, and Gilbert Grynberg. Atom - Photon Interactions: Basic Process and Appilcations. Wiley-VCH, 2008. isbn: 9783527617197.
[58] Ali H Nayfeh and Dean T Mook. Nonlinear Oscillations. Wiley, 2008.

76
Appendix A
Detailed Experimental Control
A.1 LabRAD Structure
The LabRAD manager is the centerpiece program in controlling the experiments. It keeps track of and manages connections to all of the connected programs. The manager also contains the Registry - a simple database that is used to store permanent information about the control. Individual devices are controlled by LabRAD servers that may also perform more abstract tasks. The Data Vault server, for example, is responsible for saving collected experimental data to disk, while the Node server is able to-
 launch all of the needed servers as subprocesses. The servers are written with an asynchronous programming framework (e.g twisted library in Python), allowing them to simultaneously respond to multiple connections.
In addition to servers, there are also clients. Clients come in two types: synchronous clients are just scripts that issue a sequence of commands to the servers. Asynchronous clients are used for GUI applications. Similar to scripts, they issue commands to the servers when the user interacts with their interface, but are also able to receive signals from the servers when an external update has been made. The signaling allows the GUIs to remain up to date with the server’s information when the upda-
tes are issued externally.
The structure of all the servers used in our experiment is shown on Figure A.1. They span three separate computers: Laser Room Windows machine controlling laser cavities and the wavemeter, Imaging Windows machine communicating with the Andor CCD camera and GPIB devices, and the Linux machine running the majority of the servers. The Laser Room machine runs its own LabRAD Manager allowing access to other experiments in the laboratory even when the Linux and the Imaging Machines are switched oﬀ. All -
of the experiments access the machine using its static IP address on the network. The Laser Room machine communicates with the Wavemeter (HighFinesse WS7 Super Precision) using the API provided with the installation drivers. The multiplexer, switching the lasers measured by the wavemeter, and the DAC, setting the voltages of the reference laser cavities, are controlled by the corresponding servers via the serial interface managed with the Serial Server.

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

77

The Imaging Windows machine is responsible for all of the devices requiring the Windows operating system: the Andor CCD Camera, and all of the GPIB devices. Speciﬁcally it runs the Andor Server, which communicates to the Andor Luca camera via the Andor API as well as the GPIB bus that interfaces with all of the GPIB devices on the experiment.
The LabRAD manager and the bulk of the servers run on the Linux machine. In terms of hardware it uses the DAC and the Pulser servers to communicate with the corresponding FPGAs via the Opal Kelly API. The Pulser server is used to control DDS and TTL channels of the FPGA and to synthesize sequences of laser pulses, as described in the subsection A.1.4. The ADC server controls the analog-to-digital converter using the Serial Server interface. The servers for the controlled GPIB devices also run on t-
he Linux machine. These communicate to the devices through the GPIB Device Manager.
There is a number of servers that perform abstract tasks: Data Vault stores all of the experimental data, Fitter allows to ﬁt the collected data to predeﬁned functions. The Normal PMT Flow server collects the PMT data from the Pulser and directs it to Data Vault. Finally the electrode diagonalization server compensates for the physical asymmetries in the trap electrodes, and the crystallizer assists with keeping ion chains from melting. Drift Tracker keeps track of the drifts of the high ﬁnesse la-
ser cavity and the magnetic ﬁeld, as described in section A.1.3. The Parameter Vault and ScriptScanner servers make up the ScriptScanner framework for scheduling, pausing, and stopping experiments, which will also be explained later in section A.1.2. Every machine runs a Node Server which handles starting and stopping all the other servers running on that computer.
In the following subsections, we provide a brief description of selected servers and clients with the emphasis on new describing the new LabRAD developments.
A.1.1 Camera Server
The Camera Server interfaces with the Andor Luca CCD. This server is unique in several respects: the communication is handled via the provided camera DLL loaded into memory with the Python ctypes library. The server also provides its own GUI window for displaying the collected images live. This is done to alleviate the burden of transmitting the collected stream of images via TCP. The camera server also provides methods for to request single and kinetic series of images, change triggering type, an-
d specify the region of interest for image readout. All of the image processing required to identify the ions is done in the script requesting the images.
A.1.2 ScriptScanner Framework
Within our use of the LabRAD framework, the individual experiments are performed using Python scripts. Early on, we simply launched the individual scripts from a console window, however, this approach was limiting. First, there is no way of gracefully pausing and then resuming an executing script. There is no way to accommodate scheduling: over the course of complex measurement a particular calibration script may need to be execute every few

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

78

Andor CCD Agilent E3633A Rigol DG4062
ADC

Imaging Windows Machine

Laser Room Windows Machine

Andor API GPIB Bus

Andor Server
Serial Server
Node Server

LaserDAC Multiplexer Wavemeter

Serial Server
Wavemeter API
Node Server

LaserDAC
Multiplexer Manager Registry

Linux Machine

GPIB Device Manager
Agilent E3633A
Serial Server

Drift Tracker

Electrode Diagonalization

Rigol DG4062
ADC

Parameter Vault

Data Vault

NormalPMT Flow

Script Scanner

Fitter !

Crystallizer

DAC
Pulser Node Server

Opal Kelly API
Manager Registry

DAC FPGA
Pulser FPGA

Figure A.1: The structure of LabRAD servers making up the experimental control spanning three computers. The servers are presented in green boxes, API protocols are in dark blue while the physical hardware is in light blue and the LabRAD managers are in orange.

minutes. The calibration script would then need to pause the measurement, complete calibration, and then resume the conducted measurement. Finally, each running script has to look up a multitude of experimental parameters. These should be stored in a single place, so that they are easily shared among multiple conducted experiments. In order to accommodate all of these requirements, we have implemented the ScriptScanner Framework.
The ScriptScanner Framework consists of two servers: Parameter Vault which stores the experimental parameters, and ScriptScanner which manages the launch and schedule of experiment execution. The ScriptScanner allows the running scripts to be paused and resumed. We illustrate their functionality by considering the frequently utilized Ramsey drift tracker experiment. The theory behind the experiment is explained in sections B.5 and A.1.3, so here we focus on the Python code. Below is the code for t-
he top-level experiment:
from common . a b s t r a c t d e v i c e s . s c r i p t s c a n n e r . s c a n m e t h o d s import e x p e r i m e n t from d r i f t t r a c k e r r a m s e y o n e l i n e import d r i f t t r a c k e r r a m s e y o n e l i n e from l a b r a d . u n i t s import WithUnit from t r e e d i c t import T r e e D i c t import numpy a s np
class drift tracker ramsey ( experiment ) :
name = ’ DriftTrackerRamsey ’ dt required parameters = [
( ’ DriftTracker ’ , ’ line selection 1 ’) ,

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

79

( ’ DriftTracker ’ , ’ line selection 2 ’) , ( ’ DriftTrackerRamsey ’ , ’ line 1 pi time ’ ) , ( ’ DriftTrackerRamsey ’ , ’ line 1 amplitude ’ ) , ( ’ DriftTrackerRamsey ’ , ’ line 2 pi time ’ ) , ( ’ DriftTrackerRamsey ’ , ’ line 2 amplitude ’ ) , ( ’ DriftTrackerRamsey ’ , ’ error sensitivity ’ ) , ]
@classmethod def all required parameters ( c l s ) :
parameters = set ( cls . dt required parameters ) parameters = parameters . union ( set ( drift tracker ramsey oneline .
all required parameters () )) parameters = l i s t ( parameters ) #removing p a r a m e t e r s we ’ l l be o v e r w r i t i n g , and t h e y do n o t need t o be l o a d e d parameters . remove (( ’ DriftTrackerRamsey ’ , ’ l i n e s e l e c t i o n ’ ) ) parameters . remove (( ’ DriftTrackerRamsey ’ , ’ pi time ’ ) ) parameters . remove (( ’ DriftTrackerRamsey ’ , ’ amplitude ’ ) ) parameters . remove (( ’ DriftTrackerRamsey ’ , ’ detuning ’ ) ) return parameters
def i n i t i a l i z e ( s e l f , cxn , context , ident ) : self . ident = ident s e l f . d r i f t t r a c k e r = cxn . sd tracker s e l f . ramsey dt = s e l f . make experiment ( drift tracker ramsey oneline ) s e l f . ramsey dt . i n i t i a l i z e ( cxn , context , ident )
def run ( s e l f , cxn , context ) : dt = s e l f . parameters . DriftTracker ramsey dt = s e l f . parameters . DriftTrackerRamsey i f dt . l i n e s e l e c t i o n 1 == dt . l i n e s e l e c t i o n 2 : raise Exception ( ”The two D r i f t Tracking l i n e s can not be the same” ) replace 1 = TreeDict . fromdict ({ ’ DriftTrackerRamsey . l i n e s e l e c t i o n ’ : dt . line selection 1 , ’ DriftTrackerRamsey . pi time ’ : ramsey dt . line 1 pi time , ’ DriftTrackerRamsey . amplitude ’ : ra-
msey dt . line 1 amplitude , ’ DriftTrackerRamsey . d e t u n i n g ’ : WithUnit ( 0 , ’ Hz ’ ) , }) replace 2 = TreeDict . fromdict ({ ’ DriftTrackerRamsey . l i n e s e l e c t i o n ’ : dt . line selection 2 , ’ DriftTrackerRamsey . pi time ’ : ramsey dt . line 2 pi time , ’ DriftTrackerRamsey . amplitude ’ : ramsey dt . line 2 amplitude , ’ DriftTrackerRamsey . d e t u n i n g ’ : WithUnit ( 0 , ’ Hz ’ ) })
r e p l a c e 1 , r e p l a c e 2 = np . random . permutation ( [ r e p l a c e 1 , r e p l a c e 2 ] ) s e l f . ramsey dt . set parameters ( replace 1 ) s e l f . ramsey dt . set progress limits (0 , 50.0) frequency 1 , e x c i t a t i o n = s e l f . ramsey dt . run ( cxn , context ) error sensitivity = ramsey dt . error sensitivity i f not 0 . 5 − e r r o r s e n s i t i v i t y <= e x c i t a t i o n <= 0 . 5 + e r r o r s e n s i t i v i t y :
raise Exception (” Incorrect Excitation {}” . format ( replace 1 . DriftTrackerRamsey . line selection ))
s e l f . ramsey dt . set parameters ( replace 2 ) s e l f . ramsey dt . set progress limits (50.0 , 100.0) frequency 2 , e x c i t a t i o n = s e l f . ramsey dt . run ( cxn , context ) i f not 0 . 5 − e r r o r s e n s i t i v i t y <= e x c i t a t i o n <= 0 . 5 + e r r o r s e n s i t i v i t y :

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

80

raise Exception (” Incorrect Excitation {}” . format ( replace 2 . DriftTrackerRamsey . line selection ))
self . submit centers ( replace 1 , frequency 1 , replace 2 , frequency 2 )
def submit centers ( self , replace 1 , center1 , replace 2 , center2 ) : i f c e n t e r 1 i s not None and c e n t e r 2 i s not None : submission = [ ( replace 1 . DriftTrackerRamsey . line selection , center1 ) , ( replace 2 . DriftTrackerRamsey . line selection , center2 ) , ] self . drift tracker . set measurements ( submission )
def f i n a l i z e ( s e l f , cxn , context ) : s e l f . ramsey dt . f i n a l i z e ( cxn , context )
i f n a m e == ’ m a i n ’ : import labrad cxn = labrad . connect () scanner = cxn . scriptscanner exprt = drift tracker ramsey ( cxn = cxn ) i d e n t = s c a n n e r . r e g i s t e r e x t e r n a l l a u n c h ( e x p r t . name ) exprt . execute ( ident )
The ﬁrst thing to observe is that the drift tracker ramsey class inherits from the experiment class, which is imported from the ScriptScanner scan methods ﬁle. While inhering from the parent class, we need to subclass several methods needed by all experiments: def all required parameters, def initialize, def run and def ﬁnalize. The def all required parameters method returns a list of all the parameters required by the experiment. Here, this consists of the constants speciﬁed in dt required parame-
ters list in addition to all of the required methods needed by the drift track ramsey oneline subexperiment. Notice that some of the subexperiment’s required parameters are excluded from the list as these will be explicitly overwritten in the course of executing the experiment. The list of parameters returned by def all required parameters will be automatically looked up from the ParameterVault server when the experiment is executed. Once looked up, these parameters will be available in the self.p-
arameters tree dictionary.
The execution of the experiment can be performed in two ways. It is possibly to run the Python code directly with the code below if name == ´ main ’:. In this case, the experiment will be executed in the local shell but the running experiment will be registered with the ScriptScanner server. While this method of launching experiments is better for debugging the code, it does not allow ScriptScanner to start the experiment on its own (while scheduling it to run every few minutes, for instance). Thu-
s, the preferred way to run the experiment is to import it into the list of ScriptScanner available experiments. The imported experiment will execute in a separate thread of the ScriptScanner server and could be launched through the ScriptScanner GUI or by accessing one of the ScriptScanner settings. However the experiment is launched, its execution will look up the required parameters, and then call the def initialize, def run, and def ﬁnalize methods in that order.
The idea of this experiment is that we execute the subexperiment drift track ramsey oneline twice, once for each laser transition. Then the results are submitted to the Drift Tracker server detailed in section A.1.3. To replace the parameters, we use the self.ramsey dt.set parameters

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

81

method with the argument of a tree dictionary containing the replacement parameters. Each time we also set the progress limits, so that they are correctly reported to the ScriptScanner server by the subexperiment. The source code is below:
from common . a b s t r a c t d e v i c e s . s c r i p t s c a n n e r . s c a n m e t h o d s import e x p e r i m e n t from l a t t i c e . s c r i p t s . s c r i p t L i b r a r y . common methods 729 import common methods 729 a s cm from e x c i t a t i o n s import e x c i t a t i o n r a m s e y from t r e e d i c t import T r e e D i c t from l a b r a d . u n i t s import WithUnit from numpy import a r c s i n , p i import time
class drift tracker ramsey oneline ( experiment ) :
name = ’ DriftTrackerRamseyOneLine ’ dt required parameters = [
( ’ DriftTrackerRamsey ’ , ’ line selection ’ ) , ( ’ DriftTrackerRamsey ’ , ’ gap time ’ ) , ( ’ DriftTrackerRamsey ’ , ’ pi time ’ ) , ( ’ DriftTrackerRamsey ’ , ’ amplitude ’ ) , ( ’ DriftTrackerRamsey ’ , ’ detuning ’ ) , ( ’ DriftTrackerRamsey ’ , ’ readouts ’ ) , ( ’ DriftTrackerRamsey ’ , ’ optical pumping enable DT ’ ) ,
( ’ StateReadout ’ , ’ camera primary ion ’ ) , ( ’ StateReadout ’ , ’ use camera for readout ’ ) , ]
@classmethod def all required parameters ( c l s ) :
parameters = set ( cls . dt required parameters ) parameters = parameters . union ( set ( excitation ramsey . all required parameters () ) ) parameters = l i s t ( parameters ) #removing p a r a m e t e r s we ’ l l be o v e r w r i t i n g , and t h e y do n o t need t o be l o a d e d parameters . remove ( ( ’ Ramsey ’ , ’ ramsey time ’ ) ) parameters . remove ( ( ’ Ramsey ’ , ’ s e c o n d p u l s e p h a s e ’ ) ) parameters . remove (( ’ Excitation 729 ’ , ’ rabi excitation amplitude ’ ) ) pa-
rameters . remove (( ’ Excitation 729 ’ , ’ rabi excitation frequency ’ ) ) parameters . remove ( ( ’ Tomography ’ , ’ i t e r a t i o n ’ ) ) parameters . remove ( ( ’ Tomography ’ , ’ r a b i p i t i m e ’ ) ) parameters . remove ( ( ’ Tomography ’ , ’ tomography excitation amplitude ’ ) ) parameters . remove ( ( ’ Tomography ’ , ’ tomography excitation frequency ’ ) ) parameters . remove (( ’ TrapFrequencies ’ , ’ axial frequency ’ ) ) parameters . remove (( ’ TrapFrequencies ’ , ’ radial frequ-
ency 1 ’ ) ) , parameters . remove (( ’ TrapFrequencies ’ , ’ radial frequency 2 ’ ) ) , parameters . remove (( ’ TrapFrequencies ’ , ’ rf drive frequency ’ ) ) , #w i l l be disabling sideband cooling automatically parameters . remove (( ’ SidebandCooling ’ , ’ sideband cooling enable ’ ) ) , parameters . remove (( ’ SidebandCooling ’ , ’ frequency selection ’ ) ) , parameters . remove (( ’ SidebandCooling ’ , ’ manual frequency 729 ’ ) ) , parameters . remove (( ’ SidebandCooling ’ , ’ l i n e s-
 e l e c t i o n ’ ) ) , parameters . remove (( ’ SidebandCooling ’ , ’ sideband selection ’ ) ) , parameters . remove (( ’ SidebandCooling ’ , ’ sideband cooling type ’ ) ) , parameters . remove (( ’ SidebandCooling ’ , ’ sideband cooling cycles ’ ) ) , parameters . remove (( ’ SidebandCooling ’ , ’
sideband cooling duration 729 increment per cycle ’)) , parameters . remove (( ’ SidebandCooling ’ , ’ sideband cooling frequency 854 ’ ) ) , parameters . remove (( ’ SidebandCooling ’ , ’ sideband cooling amplitude 854 ’ ) ) , parameters . remove (( ’ SidebandCooling ’ , ’ sideband cooling frequency 866 ’ ) ) , parameters . remove (( ’ SidebandCooling ’ , ’ sideband cooling amplitude 866 ’ ) ) , parameters . remove (( ’ SidebandCooling ’ , ’ sideband cooling amplitude 729 ’ ) ) , parameters . rem-
ove (( ’ SidebandCooling ’ , ’ sideband cooling optical pumping duration ’ ) ) ,

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

82

parameters . remove (( ’ SidebandCoolingContinuous ’ , ’ sideband cooling continuous duration ’)) ,
parameters . remove (( ’ SidebandCoolingPulsed ’ , ’ sideband cooling pulsed duration 729 ’ ) ) , parameters . remove (( ’ SidebandCoolingPulsed ’ , ’ sideband cooling pulsed cycles ’ ) ) , parameters . remove (( ’ SidebandCoolingPulsed ’ , ’ sideband cooling pulsed duration repumps
’)) , parameters . remove (( ’ SidebandCoolingPulsed ’ , ’
sideband cooling pulsed duration additional 866 ’)) , parameters . remove (( ’ SidebandCoolingPulsed ’ , ’
sideband cooling pulsed duration between pulses ’)) , #w i l l be enable o p t i c a l pumping automatically parameters . remove (( ’ OpticalPumping ’ , ’ optical pumping enable ’ ) ) return parameters
def i n i t i a l i z e ( s e l f , cxn , context , ident ) : self . ident = ident s e l f . d r i f t t r a c k e r = cxn . sd tracker s e l f . excitation = s e l f . make experiment ( excitation ramsey ) s e l f . e x c i t a t i o n . i n i t i a l i z e ( cxn , context , ident ) s e l f . phases = [ WithUnit (90.0 , ’ deg ’ ) , WithUnit ( −90.0 , ’ deg ’ ) ] s e l f . dv = cxn . data vault
def setup data vault ( s e l f ) : line name = s e l f . parameters . DriftTrackerRamsey . line selection #n a v i g a t e t o t h e d i r e c t o r y localtime = time . localtime () d i r a p p e n d = [ time . s t r f t i m e ( ”%Y%b%d” , l o c a l t i m e ) ] directory = [ ’ ’ , ’ Experiments ’ ] d i r e c t o r y . extend ( [ s e l f . name ] ) directory . extend ( dirappend ) s e l f . dv . cd ( d i r e c t o r y , True ) #t r y opening t h e e x i s t i n g d a t a s e t datasetname = ’ Rame-
yDriftTrack {} ’ . format ( line name ) d a t a s e t s i n f o l d e r = s e l f . dv . d i r ( ) [ 1 ] names = s o r t e d ( [ name for name in d a t a s e t s i n f o l d e r i f datasetname in name ] ) i f names : #d a t a s e t w i t h t h a t name e x i s t s e l f . dv . open appendable ( names [ 0 ] ) else : #d a t a s e t doesn ’ t a l r e a d y e x i s t s e l f . dv . new ( datasetname , [ ( ’ Time ’ , ’ Sec ’ ) ] , [ ( ’ E x c i t a t i o n ’ , ’ Average ’ , ’ p e r c e n t ’ ) , ( ’ E-
xcitation ’ , ’ Deviation ’ , ’ percent ’ ) ]) window name = [ ’ Ramey D r i f t Track {0} ’ . f o r m a t ( s e l f . p a r a m e t e r s . D r i f t T r a c k e r R a m s e y . line selection )] s e l f . dv . a d d p a r a m e t e r ( ’ Window ’ , window name ) s e l f . dv . add parameter ( ’ p l o t L i v e ’ , True )
def run ( s e l f , cxn , context ) : self . setup data vault () dt = s e l f . parameters . DriftTrackerRamsey excitations = [] f r e q u e n c y = cm . f r e q u e n c y f r o m l i n e s e l e c t i o n ( ’ auto ’ , None , dt . l i n e s e l e c t i o n , s e l f . drift tracker ) frequency = frequency + dt . detuning for iter , phase in enumerate ( s e l f . phases ) : replace = TreeDict . fromdict ({ ’ Ramsey . f i r s t p u l s e d u r a t i o n ’ : dt . p i t i m e / 2 . 0 , ’ Ramsey . s e -
c o n d p u l s e d u r a t i o n ’ : dt . p i t i m e / 2 . 0 , ’ Ramsey . ramsey time ’ : dt . gap time , ’ Ramsey . s e c o n d p u l s e p h a s e ’ : phase , ’ Excitation 729 . rabi excitation amplitude ’ : dt . amplitude , ’ Excitation 729 . rabi excitation frequency ’ :

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

83

frequency ,

’ Tomography . i t e r a t i o n ’ : 0 . 0 ,

’ StateReadout . repeat each measurement ’ : dt .

readouts ,

’ SidebandCooling . sideband cooling enable ’ : False ,

’ OpticalPumping . optical pumping enable ’ : dt .

optical pumping enable DT ,

})

self . excitation . set parameters ( replace )

self . update progress ( iter )

i f not s e l f . parameters . StateReadout . u s e c a m e r a f o r r e a d o u t :

#u s i n g PMT

excitation array , readout = s e l f . e x c i t a t i o n . run ( cxn , context )

excitation = excitation array [0]

else :

primary ion = int ( s e l f . parameters . StateReadout . camera primary ion )

excitation array , readout = s e l f . e x c i t a t i o n . run ( cxn , context )

excitation = excitation array [ primary ion ]

e x c i t a t i o n s . append ( excitation )

print excitations

detuning , average excitation = s e l f . calculate detuning ( excitations )

corrected frequency = frequency + detuning

#

print corrected frequency , average excitation

return corrected frequency , average excitation

def calculate detuning ( self , excitations ) : dt = s e l f . parameters . DriftTrackerRamsey i f not dt . optical pumping enable DT : #i f we are not doing o p t i c a l pumping during d r i f t t r a c k i n g , then need t o d o u b l e the measured excitations excitations [0] = excitations [0]∗2.0 excitations [1] = excitations [1]∗2.0 average = ( excitations [0] + excitations [1]) / 2.0 deviation = ( excitations [0] − excitations [1]) detuning = arcsin ( deviation ) / (2.0 ∗ pi ∗ dt . gap tim-
e [ ’ s ’ ]) d e t u n i n g = WithUnit ( detuning , ’ Hz ’ ) s e l f . dv . add ( [ time . time ( ) , average , d e v i a t i o n ] ) return detuning , average

def update progress ( self , i t e r a t i o n ) : progress = self . min progress + ( self . max progress − self . min progress ) ∗ float ( iteration + 1.0) / len ( self . phases ) self . sc . script set progress ( self . ident , progress )

def f i n a l i z e ( s e l f , cxn , context ) : s e l f . e x c i t a t i o n . f i n a l i z e ( cxn , context )

i f n a m e == ’ m a i n ’ : import labrad cxn = labrad . connect () scanner = cxn . scriptscanner exprt = drift tracker ramsey oneline ( cxn = cxn ) i d e n t = s c a n n e r . r e g i s t e r e x t e r n a l l a u n c h ( e x p r t . name ) exprt . execute ( ident )
Again we see that the subexperiment inherits from the same experiment class. It can be directly executed just like the top level experiment. In this case, the measured spectral line is looked up directly from the ParameterVault and not provided by the top level experiment. When drift track ramsey oneline runs, it will execute another subexperiment called excitation ramsey with two diﬀerent phases of the second ramsey pulse, see B.5. The subexperiment excitation ramsey will return the probability o-
f the ion being in the

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

84

excited state after repeating the Ramsey pulse sequence the number of times speciﬁed in StateReadout collection of the ParameterVault. Then these excitations will be used to calculate the detuning from the line. The update progress method reports the completion percentage to the ScriptScanner so that the user is aware of the measurement progress.
The subexperiment is short and so it does not implement the ability to pause or stop: the execution will always continue until completion. If this were needed, we would use the def pause or stop method implemented by the experiment class. When this method is called, and returns True then the ScriptScanner requires the experiment to stop execution. The response of False means continue execution. Pausing is accomplished by the ScriptScanner delaying to answer the query until the experiment is unpaus-
ed. Whenever the experiment is paused, stopped, resumed, or ﬁnished, it will update the ScriptScanner of the latest status.
For completeness, we include the code for the excitation ramsey experiment, which executes the base excitation experiment measuring a single excitation percentage of the ramsey pulse sequence. The base excitation allows to perform state readout with either CCD or the PMT. For a tutorial on pulse sequence writing, see section A.1.4
from b a s e e x c i t a t i o n import b a s e e x c i t a t i o n
class excitation ramsey ( base excitation ) : from l a t t i c e . s c r i p t s . P u l s e S e q u e n c e s . ramsey import ramsey name = ’ ExcitationRamsey ’ pulse sequence = ramsey
from common . a b s t r a c t d e v i c e s . s c r i p t s c a n n e r . s c a n m e t h o d s import e x p e r i m e n t from l a t t i c e . s c r i p t s . s c r i p t L i b r a r y . common methods 729 import common methods 729 a s cm from l a t t i c e . s c r i p t s . e x p e r i m e n t s . Camera . i o n s t a t e d e t e c t o r import i o n s t a t e d e t e c t o r from l a b r a d . u n i t s import WithUnit import numpy import time
class base excitation ( experiment ) : name = ’ ’ excitation required parameters = [ ( ’ OpticalPumping ’ , ’ frequency selection ’ ) , ( ’ OpticalPumping ’ , ’ manual frequency 729 ’ ) , ( ’ OpticalPumping ’ , ’ l i n e s e l e c t i o n ’ ) ,
( ’ OpticalPumpingAux ’ , ’ a u x o p l i n e s e l e c t i o n ’ ) , ( ’ OpticalPumpingAux ’ , ’ aux op enable ’ ) ,
( ’ SidebandCooling ’ , ’ frequency selection ’ ) , ( ’ SidebandCooling ’ , ’ manual frequency 729 ’ ) , ( ’ SidebandCooling ’ , ’ line selection ’ ) , ( ’ SidebandCooling ’ , ’ sideband selection ’ ) , ( ’ TrapFrequencies ’ , ’ axial frequency ’ ) , ( ’ TrapFrequencies ’ , ’ radial frequency 1 ’ ) , ( ’ TrapFrequencies ’ , ’ radial frequency 2 ’ ) , ( ’ TrapFrequencies ’ , ’ rf drive frequency ’ ) ,
( ’ StateReadout ’ , ’ repeat each measurement ’ ) , ( ’ StateReadout ’ , ’ state readout threshold ’ ) ,
( ’ StateReadout ’ , ’ use camera for readout ’ ) , ( ’ StateReadout ’ , ’ state readout duration ’ ) ,
( ’ IonsOnCamera ’ , ’ ion number ’ ) ,

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

85

( ’ IonsOnCamera ’ , ’ v e r t i c a l m i n ’ ) , ( ’ IonsOnCamera ’ , ’ vertical max ’ ) , ( ’ IonsOnCamera ’ , ’ v e r t i c a l b i n ’ ) , ( ’ IonsOnCamera ’ , ’ horizontal min ’ ) , ( ’ IonsOnCamera ’ , ’ horizontal max ’ ) , ( ’ IonsOnCamera ’ , ’ h o r i z o n t a l b i n ’ ) ,

p u l s e s e q u e n c e = None

( ’ IonsOnCamera ’ , ’ f i t a m p l i t u d e ’ ) , ( ’ IonsOnCamera ’ , ’ f i t b a c k g r o u n d l e v e l ’ ) , ( ’ IonsOnCamera ’ , ’ f i t c e n t e r h o r i z o n t a l ’ ) , ( ’ IonsOnCamera ’ , ’ f i t c e n t e r v e r t i c a l ’ ) , ( ’ IonsOnCamera ’ , ’ f i t r o t a t i o n a n g l e ’ ) , ( ’ IonsOnCamera ’ , ’ f i t s i g m a ’ ) , ( ’ IonsOnCamera ’ , ’ f i t s p a c i n g ’ ) , ]

@classmethod def all required parameters ( c l s ) :
params = set ( c l s . excitation required parameters ) params = params . union ( set ( c l s . pulse sequence . all required parameters () ) ) params = l i s t ( params ) params . remove (( ’ OpticalPumping ’ , ’ optical pumping frequency 729 ’ ) ) params . remove (( ’ SidebandCooling ’ , ’ sideband cooling frequency 729 ’ ) ) params . remove (( ’ OpticalPumpingAux ’ , ’ aux optical frequency 729 ’ ) ) return params

def i n i t i a l i z e ( s e l f , cxn , context , ident ) : s e l f . pulser = cxn . pulser s e l f . d r i f t t r a c k e r = cxn . sd tracker s e l f . dv = cxn . data vault self . total readouts = [] s e l f . readout save context = cxn . context () s e l f . histogram save context = cxn . context () self . readout save iteration = 0 self . setup sequence parameters () self . setup initial switches () self . setup data vault () s e l f . use camera = s e l f . parameters . StateReadout . use-
 camera for readout if self . use camera : s e l f . i n i t i a l i z e c a m e r a ( cxn )

def i n i t i a l i z e c a m e r a ( s e l f , cxn ) : self . total camera confidences = [] p = s e l f . parameters . IonsOnCamera from l m f i t import Parameters a s l m f i t P a r a m e t e r s s e l f . camera = cxn . andor server s e l f . f i t t e r = ion state detector ( int (p . ion number ) ) s e l f . c a m e r a i n i t i a l l y l i v e d i s p l a y = s e l f . camera . i s l i v e d i s p l a y r u n n i n g () s e l f . camera . abort acquisition () s e l f . i n i t i a l e x p-
 o s u r e = s e l f . camera . get exposure time () exposure = s e l f . parameters . StateReadout . state readout duration s e l f . camera . set exposure time ( exposure ) s e l f . i n i t i a l r e g i o n = s e l f . camera . get image region () self . image region = [ int (p. horizontal bin ) , int (p. vertical bin ) , int (p. horizontal min ) , int (p. horizontal max ) , int (p. vertical min ) , int (p. vertical max ) , ] self . fit parameters = lmfit Parameters ()

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

86

s e l f . f i t p a r a m e t e r s . add ( ’ ion number ’ , value = i n t (p . ion number ) ) s e l f . f i t p a r a m e t e r s . add ( ’ background level ’ , value = p . f i t b a c k g r o u n d l e v e l ) s e l f . f i t p a r a m e t e r s . add ( ’ amplitude ’ , value = p . f i t a m p l i t u d e ) s e l f . f i t p a r a m e t e r s . add ( ’ r o t a t i o n a n g l e ’ , p . f i t r o t a t i o n a n g l e ) s e l f . f i t p a r a m e t e r s . add ( ’ center x ’ , value = p . f i t c-
 e n t e r h o r i z o n t a l ) s e l f . f i t p a r a m e t e r s . add ( ’ center y ’ , value = p . f i t c e n t e r v e r t i c a l ) s e l f . f i t p a r a m e t e r s . add ( ’ spacing ’ , value = p . f i t s p a c i n g ) s e l f . f i t p a r a m e t e r s . add ( ’ sigma ’ , value = p . f i t s i g m a ) x a x i s = numpy . a r a n g e ( s e l f . i m a g e r e g i o n [ 2 ] , s e l f . i m a g e r e g i o n [ 3 ] + 1 , s e l f .
image region [0]) y a x i s = numpy . a r a n g e ( s e l f . i m a g e r e g i o n [ 4 ] , s e l f . i m a g e r e g i o n [ 5 ] + 1 , s e l f .
image region [1]) xx , yy = numpy . m e s h g r i d ( x a x i s , y a x i s ) s e l f . f i t t e r . s e t f i t t e d p a r a m e t e r s ( s e l f . f i t p a r a m e t e r s , xx , yy ) s e l f . camera . set image region (∗ s e l f . image region ) s e l f . camera . set acquisition mode ( ’ Kinetics ’ ) s e l f . i n i t i a l t r i g g e r m o d e = s e l f . camera . get trigger mode () s e l f . camera . set trigger mode ( ’ External ’ )

def setup data vault ( s e l f ) : localtime = time . localtime () s e l f . datasetNameAppend = time . s t r f t i m e ( ”%Y%b%d %H%M %S” , l o c a l t i m e ) d i r a p p e n d = [ time . s t r f t i m e ( ”%Y%b%d” , l o c a l t i m e ) , time . s t r f t i m e ( ”%H%M %S” , l o c a l t i m e ) ] s e l f . save directory = [ ’ ’ , ’ Experiments ’ ] s e l f . s a v e d i r e c t o r y . extend ( [ s e l f . name ] ) s e l f . save directory . extend ( dirappend ) s e l f . dv . cd ( s e l f . s a-
 v e d i r e c t o r y , True , context = s e l f . r e a d o u t s a v e c o n t e x t ) s e l f . dv . new ( ’ Readout {} ’ . format ( s e l f . datasetNameAppend ) , [ ( ’ I t e r a t i o n ’ , ’ Arb ’ ) ] , [ ( ’ Readout Counts ’ , ’ Arb ’ , ’ Arb ’ ) ] , context = s e l f . r e a d o u t s a v e c o n t e x t )

def setup sequence parameters ( s e l f ) : op = s e l f . parameters . OpticalPumping o p t i c a l p u m p i n g f r e q u e n c y = cm . f r e q u e n c y f r o m l i n e s e l e c t i o n ( op . f r e q u e n c y s e l e c t i o n , op . manual frequency 729 , op . l i n e s e l e c t i o n , s e l f . d r i f t t r a c k e r , op . optical pumping enable ) s e l f . parameters [ ’ OpticalPumping . optical pumping frequency 729 ’ ] = optical pumping frequency aux = s e l f . parameters . Optic-
alPumpingAux a u x o p t i c a l p u m p i n g f r e q u e n c y = cm . f r e q u e n c y f r o m l i n e s e l e c t i o n ( ’ auto ’ , WithUnit ( 0 , ’MHz ’ ) , aux . a u x o p l i n e s e l e c t i o n , s e l f . d r i f t t r a c k e r , aux . a u x o p e n a b l e ) s e l f . parameters [ ’ OpticalPumpingAux . aux optical frequency 729 ’ ] = aux optical pumping frequency sc = self . parameters . SidebandCooling s i d e b a n d c o o l i n g f r e q u e n c y = cm . f r e q u e n c y f r o m -
l i n e s e l e c t i o n ( s c . f r e q u e n c y s e l e c t i o n , sc . manual frequency 729 , sc . line selection , self . drift tracker , sc . sideband cooling enable ) i f s c . f r e q u e n c y s e l e c t i o n == ’ auto ’ : trap = self . parameters . TrapFrequencies s i d e b a n d c o o l i n g f r e q u e n c y = cm . a d d s i d e b a n d s ( s i d e b a n d c o o l i n g f r e q u e n c y , s c . sideband selection , trap ) self . parameters [ ’ SidebandCooling . sideband cooling f-
requency 729 ’ ] = sideband cooling frequency

def s e t u p i n i t i a l s w i t c h e s ( s e l f ) : self . pulser . switch manual ( ’ crystallization ’ , #s w i t c h o f f 729 a t t h e b e g i n n i n g s e l f . p u l s e r . o ut pu t ( ’ 729DP ’ , F a l s e )

False )

def plot current sequence ( s e l f , cxn ) : from common . o k f p g a s e r v e r s . p u l s e r . p u l s e s e q u e n c e s . p l o t s e q u e n c e import SequencePlotter dds = cxn . pulser . human readable dds ()

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

87

t t l = cxn . pulser . human readable ttl () channels = cxn . pulser . get channels () . asarray sp = SequencePlotter ( t t l . asarray , dds . a s l i s t , sp . makePlot ()

channels )

def run ( s e l f , cxn , context ) :

threshold = int ( s e l f . parameters . StateReadout . state readout threshold )

repetitions = int ( s e l f . parameters . StateReadout . repeat each measurement )

pulse sequence = self . pulse sequence ( self . parameters )

pulse sequence . programSequence ( s e l f . pulser )

#

s e l f . plot current sequence (cxn)

if self . use camera :

#p r i n t ’ s t a r t i n g a c q u i s i t i o n ’

s e l f . camera . set number kinetics ( r e p e t i t i o n s )

s e l f . camera . s t a r t a c q u i s i t i o n ()

self . pulser . start number ( repetitions )

self . pulser . wait sequence done ()

self . pulser . stop sequence ()

i f not s e l f . use camera :

#g e t p e r c e n t a g e o f t h e e x c i t a t i o n u s i n g t h e PMT t h r e s h o l d

readouts = self . pulser . get readout counts () . asarray

self . save data ( readouts )

if len ( readouts ) :

p e r c e x c i t e d = numpy . c o u n t n o n z e r o ( r e a d o u t s <= t h r e s h o l d ) / f l o a t ( l e n (

readouts ))

else :

#g o t no r e a d o u t s

perc excited = −1.0

ion state = [ perc excited ]

#

print readouts

else :

#g e t t h e p e r c e n t a g e o f e x c i t a t i o n u s i n g t h e camera s t a t e readout

proceed = s e l f . camera . w a i t f o r k i n e t i c ()

i f not proceed :

s e l f . camera . abort acquisition ()

s e l f . f i n a l i z e ( cxn , context )

raise Exception ( ”Did not get a l l k i n e t i c images from camera” )

images = s e l f . camera . get acquired data ( r e p e t i t i o n s ) . asarray

s e l f . camera . abort acquisition ()

x pixels = int ( ( self . image region [3] − self . image region [2] + 1.) / ( self .

image region [0]) )

y pixels = int ( self . image region [5] − self . image region [4] + 1.) / ( self .

image region [1])

images = numpy . r e s h a p e ( images , ( r e p e t i t i o n s , y p i x e l s , x p i x e l s ) )

readouts , confidences = s e l f . f i t t e r . state detection ( images )

i o n s t a t e = 1 − r e a d o u t s . mean ( a x i s = 0)

#u s e f u l f o r debugging , saving the images

#

numpy . s a v e ( ’ r e a d o u t { } ’ . format ( i n t ( time . time ( ) ) ) , images )

self . save confidences ( confidences )

return ion state , readouts

@property def output size ( s e l f ) :
if self . use camera : return i nt ( s e l f . parameters . IonsOnCamera . ion number )
else : return 1

def f i n a l i z e ( s e l f , cxn , context ) : if self . use camera : #i f used the camera , return i t to the o r i g i n a l s e t t i n g s s e l f . camera . set trigger mode ( s e l f . i n i t i a l t r i g g e r m o d e )

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

88

s e l f . camera . set exposure time ( s e l f . i n i t i a l e x p o s u r e ) s e l f . camera . set image region ( s e l f . i n i t i a l r e g i o n ) if self . camera initially live display :
s e l f . camera . s t a r t l i v e d i s p l a y ()
def save data ( self , readouts ) : #s a v e t h e c u r r e n t r e a d o u t s i t e r s = numpy . o n e s l i k e ( r e a d o u t s ) ∗ s e l f . r e a d o u t s a v e i t e r a t i o n s e l f . dv . add ( numpy . v s t a c k ( ( i t e r s , r e a d o u t s ) ) . t r a n s p o s e ( ) , c o n t e x t = s e l f . readout save context ) s e l f . r e a d o u t s a v e i t e r a t i o n += 1 s e l f . total readouts . extend ( readouts ) i f ( l e n ( s e l f . t o t a l r e a d o u t s ) >= 5 0 -
0 ) : h i s t , b i n s = numpy . h i s t o g r a m ( s e l f . t o t a l r e a d o u t s , 5 0 ) s e l f . dv . cd ( s e l f . s a v e d i r e c t o r y , True , context = s e l f . histogram save context ) s e l f . dv . new ( ’ Histogram {} ’ . format ( s e l f . datasetNameAppend ) , [ ( ’ Counts ’ , ’ Arb ’ ) ] , [ ( ’ Occurence ’ , ’ Arb ’ , ’ Arb ’ ) ] , context = s e l f . h i s t o g r a m s a v e c o n t e x t ) s e l f . dv . add ( numpy . v s t a c k ( ( b i n s [ 0 : − 1 ] , h i s t )-
 ) . t r a n s p o s e ( ) , c o n t e x t = s e l f . histogram save context ) s e l f . dv . add parameter ( ’ Histogram729 ’ , True , context = s e l f . histogram save context ) self . total readouts = []
def save confidences ( self , confidences ) : ’’’ saves confidences readings for the camera s t a t e detection ’’’ s e l f . total camera confidences . extend ( confidences ) i f ( l e n ( s e l f . t o t a l c a m e r a c o n f i d e n c e s ) >= 3 0 0 ) : h i s t , b i n s = numpy . h i s t o g r a m ( s e l f . t o t a l c a m e r a c o n f i d e n c e s , 3 0 ) s e l f . dv . cd ( s e l f . s a v e d i r e c t o r y , True , context = s e l f . histogram save context ) s e l f . dv . new ( ’ -
Histogram Camera {} ’ . format ( s e l f . datasetNameAppend ) , [ ( ’ Counts ’ , ’ Arb ’ ) ] , [ ( ’ Occurence ’ , ’ Arb ’ , ’ Arb ’ ) ] , context = s e l f . h i s t o g r a m s a v e c o n t e x t ) s e l f . dv . add ( numpy . v s t a c k ( ( b i n s [ 0 : − 1 ] , h i s t ) ) . t r a n s p o s e ( ) , c o n t e x t = s e l f . histogram save context ) s e l f . dv . add parameter ( ’ HistogramCameraConfidence ’ , True , context = s e l f . histogram save context ) self . total camera confidenc-
es = []

A.1.3 Drift Tracker Server
The narrow transition between the S1/2 and D5/2 states requires precise control of the 729 nm laser frequency and the local magnetic ﬁeld at the ion position. While the laser frequency is referenced to a high ﬁnesse cavity [52, 9], the cavity length may drift due to thermal expansion and contraction of the ultra low expansion (ULE) material. The stability of the local magnetic ﬁeld is determined by the ﬂuctuations in the current circulating in the magnetic ﬁeld coils, thermal eﬀects aﬀecting their-
 position, and external magnetic ﬁeld ﬂuctuations.
The purpose of the Drift Tracker server is to facilitate tracking drifts of both laser frequency and the local magnetic ﬁeld. Both quantities are determined by measuring frequencies of two carrier transitions between chosen magnetic sublevels of S1/2 and D5/2. Once the frequencies of two carrier transitions are measured, typically by using a Ramsey technique described in Appendix B.5, the frequencies of the transitions as well as their names are submitted to Drift Tracking Server:

APPENDIX A. DETAILED EXPERIMENTAL CONTROL

89

cxn . sd tracker . set measurements ( [ ( ’ S−1/2D+3/2 ’ , WithUnit ( − 1 6 . 8 1 3 , ’MHz ’ ) ) , ( ’ S+1/2D+5/2 ’ , WithUnit ( − 1 5 . 6 8 , ’MHz ’ ) ) ] )
The submission may be done through an experimental script or a GUI interface. It is also possible to submit the frequency of only one line, assuming that only the magnetic ﬁeld has drifted. The server uses the submitted information to calculate the magnetic ﬁeld B and the zero-ﬁeld splitting E0, which measures the drift in the cavity frequency:

ES↔D = E0 + µB mSgS1/2 − mDgD5/2

(A.1)

where µB is the Bohr magneton, mS and mD as the magnetic sublevels of the S1/2 and D5/2 energy levels. See [10] for more details. While the corresponding Lange g-factors may be computed to be gS1/2 = 2 and gD5/2 = 1.2 using the well-known relationship [43],

3 S(S + 1) − L(L + 1)

gJ = 2 +

2J(J + 1)

(A.2)

it is more precise to use the experimentally measured values of gS1/2 = 2.00225664(9) [53] and gD5/2 = 1.2003340(3) [54], reﬂecting the necessary relativistic and QED corrections to the formula.
The server performs a linear ﬁt to the magnetic ﬁeld and cavity center drifts. This allows to extrapolate the trend into the future: whenever a new experiment is run, the server will provide the predicted values for all of the required transition frequencies.

A.1.4 Pulse Sequence Synthesis
Fundamentally, every pulse sequence is a just collection of TTL and DDS pulses. Every pulse has a start time and a duration. The DDS pulses additionally specify, frequency, amplitude, and an optional phase. These pulses are programmed to the Pulser FPGA before execution. The FPGA hardware is described in detail in Thaned Pruttivarasin’s thesis [9]. While pulse sequences for manipulating the state of the ion may contain hundreds of individual pulses, there is usually no need to individually specify-
 their timing and parameters. Pulse sequences consist of logical components: typically they involve Doppler cooling, optical pumping, sideband cooling, etc. If these logical components or subsequences are made modular, they become easily reusable in a variety of composite sequences. This minimizes eﬀorts of creating a new complex pulse sequence and greatly reduces the errors in the process. Here we provide a tutorial on our implementation of the pulse sequence synthesis. It is accurate as of pulse-
 sequence version 1.1, and is, of course, subject to future modiﬁcations. For the latest description, see the common GitHub Repository Wiki.
To achieve the desired modularity, every sequence inherits from the Python base class pulse sequence. The methods contained in the base class allow the user to easily modify and interact with the pulse sequences. When inheriting from the pulse sequence, the user has to overwrite several constants describing the new sequence: required parameters

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:24.572Z
- **Text Length:** 197378 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
