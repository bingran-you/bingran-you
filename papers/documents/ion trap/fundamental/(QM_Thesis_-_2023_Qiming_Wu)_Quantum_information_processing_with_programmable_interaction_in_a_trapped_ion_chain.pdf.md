# PDF Document: (Thesis - 2023 Qiming Wu) Quantum information processing with programmable interaction in a trapped ion chain.pdf

**File Path:** (Thesis - 2023 Qiming Wu) Quantum information processing with programmable interaction in a trapped ion chain.pdf

**Processed Date:** 2026-02-10T18:16:38.541Z

**File Size:** 11107.26 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 394

**Title:** (QM Thesis - 2023 Qiming Wu) Quantum information processing with programmable interaction in a trapped ion chain.pdf

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Quantum information processing with programmable interaction in a trapped ion chain
by
Qiming Wu
A dissertation submitted in partial fulfillment of the requirements for the degree of Doctor of Philosophy Department of physics New York University May, 2023
Dr. Jiehang Zhang

© Qiming Wu all rights reserved, 2023

Dedication
To my family. iii

Acknowledgements
Graduate school is a bumpy journey, and eventually, there’s somewhere we will get. First, I would like to thank my advisor Dr. Jiehang Zhang. He gave me so much help and support during my doctorate study. Whenever I need help and struggle to build the experiment, he is always there to provide me with great suggestions or help me personally. I will only be able to accomplish all of these with his guidance. Our time is quite too short at NYU, but quoting Jiehang’s words, our experiment succeeded, le-
ading to this dissertation. Special thanks to Yue Shi, who built the control system in the lab, dealt with all the classical computer problems and had his hands on all the places in the lab. Our quantum experiment would not have existed without your classical construction. I’m sure you will do very well in the future. I am grateful to other group members I’ve overlapped with, Melina Filzinger, Umang Mishra and Yuchen Yue, and Zijian Ding. Your spots are throughout the experiment, and now it return-
s to their original place. I wish you all an excellent future career. Many thanks to my other thesis committee members, Dr. Andrew Kent, Dr. Aditi Mitra, Dr. Luis Orozco, and Dr. Andrew Wray. Luis has especially been helpful with the discussion of physics and in revising this dissertation. I would also like to thank the physics department chair Dr. Matthew Kleban and the director of the Center of Quantum Phenomena, Dr. Andrew Kent, for their support in the final stage of my graduate study. And I a-
ppreciate the admin support from Evelina Steponaityte, Evette Ma, and Dr. John Hale. Ultimately, I would like to express my gratitude to my family for their support thousands of miles away when it was a difficult period during the COVID pandemic I was conducting my study, without which none would have
iv

happened. I’m in debt to Xianling, you have always been patient and supportive, and I enjoy your company throughout the journey.
v

Abstract
As a prime platform for quantum information processing, trapped ion qubits offer high-fidelity state preparation and detection, long coherence times, and high single and two-qubit gate fidelities. These advantages have led to two successful applications: 1. an analog quantum simulator with long-range interaction with phonon-mediated coupling in the dispersive regime; 2. a digital quantum computer with arbitrary interaction programmed with optimized laser pulses. Despite high-precision qubit manipu-
lations with small systems, the current limits for scaling up the trapped ion system sizes come from technical challenges: digital systems need extensive individual control; the analog limit suffers from the slow interaction speed and limited interaction geometries.
This thesis aims to achieve quantum information processing with programmable interaction using ion strings en route to fault-tolerant quantum computing on a trapped ion system. We developed some novel experimental techniques set for such goals: direct laser ablation loading of 9Be+, ultrahigh vacuum at 10−12 mbar level, and a deep UV microscope aiming for imaging ion chain with diffraction-limited performance. We also demonstrate a new method of multi-mode ground state cooling beyond the Lamb Dick-
e limit.
We present our work on Hamiltonian engineering in trapped ion systems. We demonstrate programmable spin connectivities using global laser beams in our trapped-ion quantum simulator based on a linear chain of 9Be+. Specifically, We have successfully implemented Ising Hamiltonians on a square lattice, a sphere, and a four-dimensional hyper-sphere with 4, 6, 8 qubits, respectively. In addition, we extend the protocol to other spin-degree-of-freedom and realize an XX and Heisenberg
vi

model of non-local interaction with tunable anisotropy. vii

Contents

Dedication

iii

Acknowledgements

iv

Abstract

vi

List of Figures

xii

List of Tables

xv

1 Introduction

1

1.1 Quantum information processing with trapped ions . . . . . . . . . . . . . . . . . 1

1.2 Quantum simulation of different kinds . . . . . . . . . . . . . . . . . . . . . . . . 5

1.3 Thesis structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6

2 Experimental hardware: trapped ion apparatus

8

2.1 Vacuum system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8

2.2 Ion trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12

2.2.1 Theory of rf Paul trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12

2.2.2 The four-rod trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15

2.3 Electronics and experimental control system . . . . . . . . . . . . . . . . . . . . . 16

2.3.1 Control system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17

viii

2.3.2 Helical resonator and DC supply . . . . . . . . . . . . . . . . . . . . . . . 18 2.4 Permanent magnets and trim coils . . . . . . . . . . . . . . . . . . . . . . . . . . 20 2.5 Ion loading . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
2.5.1 Direct ablation loading of Be+ . . . . . . . . . . . . . . . . . . . . . . . . 24 2.5.2 On-resonant photoionization (PI) . . . . . . . . . . . . . . . . . . . . . . 28 2.6 Doppler cooling/detection optics . . . . . . . . . . . . . . . . . . . . . . . . . . . 30 2.7 626 nm Iodine lock for Be+ Doppler cooling/detection . . . . . . . . . . . . . . . 31 2.8 Raman optics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36 2.9 Imaging optics . . . . . . . . . . . . . . . .-
 . . . . . . . . . . . . . . . . . . . . 38 2.9.1 Imaging setup for the four-rod trap . . . . . . . . . . . . . . . . . . . . . . 38 2.9.2 New-design: Homebuilt deep UV microscope . . . . . . . . . . . . . . . . 41 2.10 Background gas collision and defect molecule formation . . . . . . . . . . . . . . 45

3 Be+ qubit manipulation

50

3.1 Be+ ground state as qubit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50

3.2 Doppler cooling and state preparation and measurement (SPAM) . . . . . . . . . . 55

3.2.1 Doppler cooling of ions . . . . . . . . . . . . . . . . . . . . . . . . . . . 55

3.2.2 Spin state preparation and detection of Be+ . . . . . . . . . . . . . . . . . 60

3.3 Single qubit operation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63

3.3.1 Raman transition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63

3.4 Discussion on ac Stark shift . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68

3.5 MW transition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72

4 Spin-motion coupling and Ground state cooling

76

4.1 Motional mode structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76

4.2 Spin-motion coupling via laser field . . . . . . . . . . . . . . . . . . . . . . . . . 81

4.3 Ground state cooling overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84

ix

4.4 Continuous Raman sideband cooling beyond the Lamb-Dicke regime . . . . . . . . 85 4.5 Cooling results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
4.5.1 Cooling of a single ion . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88 4.5.2 Cooling of an 8-ion chain . . . . . . . . . . . . . . . . . . . . . . . . . . 89 4.5.3 Cooling of a 24-ion chain . . . . . . . . . . . . . . . . . . . . . . . . . . 91 4.6 Theory and cooling speed analysis . . . . . . . . . . . . . . . . . . . . . . . . . . 92 4.6.1 Cooling speed: continuous vs pulsed . . . . . . . . . . . . . . . . . . . . 95 4.6.2 Cooling speed scaling with ion number . . . . . . . . .-
 . . . . . . . . . . 96 4.7 Measurement of multi-ion phonon numbers . . . . . . . . . . . . . . . . . . . . . 99 4.7.1 Multi-ion phonon numbers extraction from sideband ratio . . . . . . . . . 99 4.7.2 Multi-ion carrier flopping . . . . . . . . . . . . . . . . . . . . . . . . . . 100 4.8 Cooling limit discussion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102 4.8.1 Electric field noise-induced heating . . . . . . . . . . . . . . . . . . . . . 102 4.8.2 Photon recoil heating . . .-
 . . . . . . . . . . . . . . . . . . . . . . . . . . 103 4.8.3 Background gas collisions . . . . . . . . . . . . . . . . . . . . . . . . . . 104

5 Hamiltonian engineering for programmable quantum simulation

106

5.1 Spin-spin interaction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107

5.2 Beyond the analog quantum simulation . . . . . . . . . . . . . . . . . . . . . . . . 110

5.2.1 Spin-spin interaction with real phonon excitation . . . . . . . . . . . . . . 110

5.2.2 Engineering programmable interaction graphs . . . . . . . . . . . . . . . . 111

5.3 Hamiltonian engineering with an analog-hybrid approach . . . . . . . . . . . . . . 111

5.4 Experimental results with higher dimensional interactions . . . . . . . . . . . . . . 115

5.5 Floquet XX and Heisenberg model . . . . . . . . . . . . . . . . . . . . . . . . . . 115

5.6 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118

6 Conclusion and outlook

119

x

A Appendix

123

Bibliography

127

xi

List of Figures
1.1 Visualization of a qubit state |ψ⟩ on the Bloch sphere. . . . . . . . . . . . . . . . 2
2.1 Overview of the four-rod trap vacuum system. . . . . . . . . . . . . . . . . . . . 9 2.2 Illustration of the four-rod trap setup. . . . . . . . . . . . . . . . . . . . . . . . . 16 2.3 Skematics of the high voltage low-pass filter. . . . . . . . . . . . . . . . . . . . . 19 2.4 Temperature and humidity fluctuation in the laboratory. . . . . . . . . . . . . . . . 21 2.5 Measurement of qubit frequency gradient using an 8-ion chain. . . . . . . . . . . . 22 2.6 Real-time vacuum pressure and PMT c-
ounts after ablation pulses. . . . . . . . . . 25 2.7 Histogram of loaded ion number distribution for different ablation durations. . . . . 26 2.8 Feedback control for ion chains with desirable ion number. . . . . . . . . . . . . . 27 2.9 Measuring loaded ion number as a function of the PI laser frequency. . . . . . . . . 29 2.10 Doppler cooling optical setup. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32 2.11 Iodine line 961 frequency spectrum. The feature a to q are the I2 hyperfine-
 lines.
The Doppler laser is locked to the lowering side of feature a. . . . . . . . . . . . . 34 2.12 Iodine lock optical setup. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35 2.13 Raman beam optical setup. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37 2.14 Setup of the ion imaging system. . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 2.15 Cross section of the home-built NA = 0.47 UV microscope design. . . . . . . . . 42 2.16 Zemax simulation of the UV micros-
cope performance. . . . . . . . . . . . . . . . 43
xii

2.17 Image of the HIGHRES01 test target. . . . . . . . . . . . . . . . . . . . . . . . . 44 2.18 Measurement of the MTF and the corresponding LSF. . . . . . . . . . . . . . . . . 45 2.19 Dispose of BeH+ molecules. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46 2.20 Energy potentials of BeH+ low-lying electronic states. . . . . . . . . . . . . . . . 48
3.1 Atomic engery level of 9Be+. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51 3.2 Energy and energy sensitivity of the 2S1/2 states versus magnetic field. . . . . . . . 53 3.3 Dipole radiation illustration. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59 3.4 Measurements of saturation power. . . . . . . . . . . . . . . . . . . . . . . . . . . 59 3.5 Single ion detection photon counts histogram. . . . . . . . . . . . . . . . . . . . . 61 3.6 Co-propagating Raman Rabi fl-
opping. . . . . . . . . . . . . . . . . . . . . . . . . 67 3.7 Raman beam Stark shifts calculation. . . . . . . . . . . . . . . . . . . . . . . . . . 71 3.8 Dipole antenna radiation for the MW drive. . . . . . . . . . . . . . . . . . . . . . 73 3.9 MW Rabi flopping of Zeeman qubit. . . . . . . . . . . . . . . . . . . . . . . . . . 75
4.1 The equilibrium positions of a linear 9Be+ ion chain. . . . . . . . . . . . . . . . . 78 4.2 Plots of the axial and radial mode frequencies. . . . . . . . . . . . . . . . . . . . . 80 4.3 Single ion cooling dynamics at η = 0.78. . . . . . . . . . . . . . . . . . . . . . . 87 4.4 Carrier flopping of single ion at η = 1.3 after CSRC. . . . . . . . . . . . . . . . . . 89 4.5 8 ion spectrum with COM mode η = 0.78 after 5 ms of CRSC. . . . . . . . . . . . 90 4.6 8 ions cooling results. . . . . . . -
. . . . . . . . . . . . . . . . . . . . . . . . . . . 92 4.7 24 ion spectrum with COM mode η = 1.3 after 10 ms of CRSC. . . . . . . . . . . 93 4.8 Numercial study of CRSC. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94 4.9 Numerical simulation cooling time scaling. . . . . . . . . . . . . . . . . . . . . . 97 4.10 Frequency scan of 8-ion chain on BSB and RSB transitions. . . . . . . . . . . . . 98 4.11 Individual ion Rabi flopping in a 24-ion chain. . . . . . . . . . . . . . . . . -
. . . . 101
5.1 Average spin excitation under the Mølmer–Sørensen interaction. . . . . . . . . . . 110
xiii

5.2 Illustration of the hybrid quantum information processor. . . . . . . . . . . . . . . 112 5.3 Realization of XX interaction in a higher dimension sphere. . . . . . . . . . . . . . 114 5.4 Realization of the Floquet XX and Heisenberg Hamiltonians. . . . . . . . . . . . . 116 A.1 Illustration of the tentative plan of the Raman system upgrade . . . . . . . . . . . 125
xiv

List of Tables
2.1 Comparison of the pumping capability of the diaphragm pump and the scroll pump. 11 2.2 DDSs and TTL usage. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 2.3 Typical DC electrode voltages in the experiment. . . . . . . . . . . . . . . . . . . 19 2.4 The three components contained in the Doppler cooling beam. . . . . . . . . . . . 30 3.1 2S1/2 and 2P1/2 Zeeman manifold |F, mF ⟩ decomposed in the |mI, mJ ⟩ basis. . . . 53 3.2 The transitions in 2S1/2 related to the experime-
nt. . . . . . . . . . . . . . . . . . . 54 3.3 The relative coupling strength of optical pumping transitions under σ+ light. . . . . 66 3.4 The relative coupling strength of Raman transitions. . . . . . . . . . . . . . . . . . 68 3.5 The relative coupling strength MW transitions at the low field limit. . . . . . . . . 74
xv

1 | Introduction

1.1 Quantum information processing with trapped ions

Nature isn’t classical, dammit, and if you want to make a simulation of nature, you’d better make it quantum mechanical, and by golly it’s a wonderful problem, because it doesn’t look so easy.
Richard P. Feynman
The idea of the quantum simulation was first put forth by Richard Feynman in 1982 as part of his research on quantum many-body systems [1]. It is a natural idea that one can simulate a complex quantum system (e.g., solid) under investigation with a well-controlled quantum system (e.g., atomic system) with programmable interactions or "quantum gates" [2]. Apart from tackling the mysteries in quantum physics, quantum computers are also believed to have the potential to solve certain mathematical pro-
blems much faster than classical computers [3; 4], making use of their unique properties of quantum superposition and entanglement.
A "qubit" is a fundamental element in quantum information that defines the information states. Similar to classical bits with two states, 0 and 1, qubits also have two states, |0⟩ and |1⟩, which can be encoded in a long-live two-level quantum system. However, while a classical bit is either on the 0 or 1 state, a qubit can be described as the superposition of two states:

|ψ⟩ = cos θ |0⟩ + sin θ eiϕ|1⟩,

(1.1)

2

2

1

z 0
ψ
θ

φ

y

x

1 Figure 1.1: Visualization of a qubit state |ψ⟩ on the Bloch sphere.
where any quantum state |ψ⟩ can be visualized as a vector on the Bloch sphere [5] (see Fig. 1.1), with polar angle θ and azimuthal angel ϕ. Consider a quantum state consisting of N qubits; it can be in the superposition of 2N states:

|Ψ⟩ =

cs1,...,sN |s1, . . . , sN ⟩

si={0,1}

(1.2)

where the Hibert space grows exponentially with the increase of qubit number. The unique property of quantum entanglement comes from the fact that a multi-qubit state cannot be written as the direct product of individual qubit states [6]. Taking the example of a two-qubit system:

|ψ⟩AB = α00|00⟩AB + α01|01⟩AB + α10|10⟩AB + α11|11⟩AB,

(1.3)

where αij are the entries of a 2×2 matrix. If det (αij) ̸= 0, |ψ⟩AB can not be written as |ψ⟩A ⊗|ψ⟩B. It reflects the non-classical, strong correlation between A and B, and a partial measurement will

2

collapse the state of the entire entangled system. A quantum logic gate is an elemental quantum circuit operating on the qubit states. It has been
proved that any operation on a quantum computer can be decomposed to arbitrary single-qubit unitary operation and two-qubit XX gate1 [7].
A single qubit gate can be visualized as an arbitrary rotation on the Bloch sphere, which can be decomposed into a rotation along the x, y, z axis:

U = eiαRx(β)Ry(γ)Rz(δ),

(1.4)

where the rotation operators are:

Rx(θ)

=

e−iσxθ/2

=

cos

θ I
2

−

i

sin

θ 2 σx

Ry (θ)

=

e−iσy θ/2

=

cos

θ I
2

−

i

sin

θ 2 σy

Rz (θ)

=

e−iσz θ/2

=

cos

θ I
2

−

i

sin

θ 2 σz,

where σx,y,z are the Pauli matrices. And a two-qubit XX gate is:





0001









0 0 1 0

UXX

=

 

. 

0 1 0 0









1000

(1.5) (1.6)

DiVincenzo proposed the following five criteria to construct a practical quantum computer on an experimental setup [8]:

1. A scalable physical system with well-characterized qubit
2. The ability to initialize the state of the qubits to a simple fiducial state
1The most popular natural interaction (native two-qubit gate) on trapped ion system.
3

3. Long relevant decoherence times
4. A "universal" set of quantum gates
5. A qubit-specific measurement capability
In the past 20 years, various physical platforms for realizing quantum computers have been explored, including superconducting circuits [9; 10; 11; 12], trapped ions [13; 14; 15; 16], neutral atoms [17; 18; 19], and silicon-based quantum dots [20; 21]. Cirac and Zoller first proposed using the Coulomb interaction with the collective motion of a trapped ion chain to realize quantum gates in 1995 [22]. Since then, the trapped ion platform has been a most promising approach to largescale quantum info-
rmation processing [23]: High-fidelity entangling gates have been demonstrated in several state-of-the-art trapped ion systems with less than 0.1% infidelity [24; 25; 26; 27]. The coherence time of ion qubits can be as long as hours, allowing the implementation of circuits with thousands of gates without qubit decoherence [28]. Also, the ions’ Coulomb interaction enables native full connectivity between qubits, allowing us to perform parallel operations when solving real problems [29; 30]. These a-
dvantages make ions the best platforms for high-fidelity operations in the current Noisy Intermediate-Scale (NISQ) era [15; 31] en route to useful quantum error corrections [32; 33].
As the most promising short-term application of quantum processors [2], quantum simulation uses more controllable quantum systems to simulate complex quantum systems. Quantum simulators promise the study of many-body quantum systems known to be difficult computational problems, e.g., quantum chemistry and molecular dynamics [34], condensed matter physics [35; 36], and high energy physics [37]. Physical realizations of quantum simulation have been accomplished in several experimental platforms, to -
name a few: neutral atoms [38], trapped ions [39; 40], nuclear magnetic resonance(NMR) [41], and superconducting circuits [34].
4

1.2 Quantum simulation of different kinds
There are mainly two kinds of quantum simulators to date. The first kind, called the "digital quantum simulator", operates as a universal quantum computer. The time evolution of any Hamiltonian can be broken down into one- and two-qubit operations: U (t) = (U1(t1/n)U2(t2/n) . . . UN (tN /n))n, with t = t1 + t2 + . . . + tN . The digital approach allows for the flexible study of different interaction structures in quantum spin systems [42] or non-native interaction [37]. However, since the quantum -
logic gate operations generally don’t commute with each other, the inherent errors come in during the Suzuki–Trotter expansion [43]. In addition, realizing a simple Hamiltonian typically requires dozens or hundreds of quantum gates [37], which sacrifices the shallow quantum computing power we currently have. We are limited by the number and infidelities of the qubits, even for the state-of-the-art devices, to conduct complex computations with high accuracy [11]. The demanding requirements of digit-
al quantum simulation make it even harder to exploit the full power of quantum processors.
The second kind is referred to as the "analog quantum simulator". A well-controlled quantum system that can be employed to emulate the evolution of a prescribed model of interest whose dynamics may be hard to compute on the classical computers[44; 35]. For example, the transverse field Ising model (TFIM) naturally emerges in trapped ion systems where Coulomb coupling between ions generates a natural power-law long-range interaction that decays with distance[40]. Most analog quantum simulators, how-
ever, tend to have limited programmability[36], for which the intrinsic interactions have fixed structures governed by the spacial geometries.
While both kinds of quantum simulators have their pros and cons at the current stage, we raise the question of whether we can build a third kind on an ion chain that combines the advantage of both. We aim to have a more programmable interaction structure than the long-range interaction decays with tunable power and faster interaction speed beyond the adiabatic spin-spin interaction regime, but with a lower technical threshold than a full-digital quantum computer which requires
5

individual addressing, precisely tailored laser pulses, etc. One appreciable effort is to use an analog-hybrid approach, which has been proposed to realize
a quantum Heisenberg model with low errors, combing a global XX interaction and single qubit rotations with Floquet drives [45]. This philosophy has been prevalent recently with several experimental demonstrations along the path [46; 47; 48]. Another effort that can be made is to realize an arbitrary interaction in a quantum spin system, which should be feasible because the interactions are naturally embedded in the collective motion, which is utilized to realize a quantum computer on an ion chain-
 [16]. There are several theoretical proposals to engineer programmable interaction graphs on a trapped ion chain using global interaction with tailored laser pulses[49; 50; 51; 52; 53], but only one recent experimental demonstration of simulating interaction with broken time-reversal symmetry[54] to the best of our knowledge. Non-adiabatic global spin-spin interactions with real phonon excitation remain unexplored.
1.3 Thesis structure
This thesis is focused on the development of a trapped 9Be+ ion experimental setup, which is aimed at performing novel quantum information experiments in a long ion chain. The experimental techniques for building the system are discussed in detail. We also present the experimental results, including the direction laser ablation loading of beryllium ions into an rf Paul trap, continuous Raman sideband cooling of a long ion chain far outside the Lamb-Dicke regime, and the first demonstration of hybr-
id analog-digital quantum simulation of higher dimensional geometries using global interaction in a linear ion chain that are under preparation for publication.
The thesis is organized as the following: Chapter 2 outlines the experimental apparatus utilized in our trapped ion experiment. The system encompasses the vacuum hardware, ion trap, electronics and control system, ion loading system, Doppler cooling setup, laser lock using an iodine cell, Raman excitation beam with their
6

optics, imaging system, and photodissociation setup. A basic theoretical derivation and related experimental results, primarily classical or semi-classical in nature, are also included in this chapter, covering topics such as ion trapping, loading, design, and testing of diffraction-limited imaging systems.
Chapter 3 concerns the details of how to use 9Be+ as qubit at the level of controlling the internal state of the 9Be+. We present the calculation of the ground state manifolds. We discuss the Doppler cooling theory and state preparation and detection for 9Be+. We also derive the single qubit rotation using a microwave or laser field via the Raman process and compare it to the experimental results. In the end, we discuss the impact of the ac Stark shift in the presence of the Raman laser field.
Chapter 4 details spin-motion coupling. We first calculate the equilibrium positions and motional spectrum of a linear ion chain. Then we derive the spin-motion coupling via a laser field. Using the spin-motion coupling principles, we then move on to ground-state cooling of ions and present the theoretical studies and experimental results of a novel continuous Raman sideband cooling scheme we developed.
Chapter 5 shows the Hamiltonian engineering experiment. We start out with the derivation of phonon-mediated spin-spin interaction in a trapped ions system. Then we discuss our progress in extending the quantum simulation toolbox using the methods discussed in Sec. 1.2; we illustrate how we realize a programmable effective high-dimensional interaction using layers of global interactions in a linear ion chain.. Using the near-equal spacing of the axial modes, we can suppress all the phonon excitatio-
ns at the end of each layer, providing unprecedented interaction speed compared to the traditional trapped ion analog quantum simulators.
Chapter 6 summarizes the work done in this thesis and gives an outlook of the potential improvement for the current system in the future from the author’s viewpoint.
7

2 | Experimental hardware: trapped ion
apparatus
This chapter describes the experimental apparatus used in the trapped ion experiment at NYU. The system mainly consists of: vaccum chamber, ion trap, lasers, optics systems, electronics, and auxiliary spectroscopy tools. With these, we can load the ion trap through photodissociation, control the frequencies of the laser for Doppler cooling and for Raman excitation of the appropriate transitions, image the ions, and take pictures that become the main source of date. This chapter also includes some -
basic theoretical discussion and experimental results (mostly classical/semiclassical) closely related to the commissioning of the experimental setup, such as ion trapping, loading, and molecule photodissociation. And we leave out a few technical details, which we will discuss in later chapters.
2.1 Vacuum system
To provide a well-isolated environment for quantum control of trapped ions, an ultrahigh vacuum (UHV) system is required. Therefore, we use stainless steel components and connect the parts using Conflat flanges (CF), sealed with silver-plated copper gaskets everywhere, except that the two main viewports use annealed copper gaskets to protect the fragile viewports.
The main vacuum system which houses our ion trap is shown in Fig. 2.1. A home-designed
8

Ion Pump
Vaclon Plus 40 Starcell

TiSub Pump
Single Filament

DC Feedthrough Viewport for ablation RF Feedthrough
Ion trap holder

Extractor Gauge
Ionivac IE514
Figure 2.1: Overview of the four-rod trap vacuum system.
trap holder made with stainless steal holds the components of the ion trap (see Section. 2.2.2) in their relative positions and is mounted to a 1.33” × 4.50” vacuum chamber (Kimball physics MCF450-SphOct-E2A8) through a pair of grove grabbers (MCF450-GrvGrb-C03), which the trap center coincident with the center of the chamber. The two main 4.50" CF are sealed with 4.50" UVFS (313 nm AR-coated) viewport windows (MPF A21234-1). For the remaining eight 1.33" CF on the chamber, two are sealed with fee-
d-throughs for RF and DC voltages, three are sealed with 1.33" viewport windows1, one is connected to a five-way cross through a conical reducer, and the other two sealed with blank flanges. The five-way cross is connected to an ion pump (Vaclon Plus 40 Starcell), an extractor gauge for measuring vacuum pressure (Ionivac IE514), a homemade titanium sublimation ump (TSP) with a single filament, and a vacuum valve that separates the main vacuum system and the pre-pumping station. The main vacuum sys-
tem is mounted to the optical
1one for entering ablation light and the other two for future 45-degree access to the ion chain
9

table with 1" posts through three mounting adapters (Thorlabs VFA275). Before the vacuum assembly, we first pre-clean all the vacuum components in an ultrasonic bath
except the viewports2 to remove the majority of oil contaminants, with the following procedures similar to those in [55]:
1. Wipe the vacuum parts with acetone-soaked Kimwipes, especially the solder points and knife edges.
2. Ultrasonic clean with ionized water and 1% Tickopur R33 for 12 mins.
3. Ultrasonic clean with clean ionized water for 20 mins.
4. Cu and BeCu components should be ultrasonic cleaned separately from the other parts. If oxidation happens for Cu and BeCu parts after step 3, add an extra ultrasonic cleaning step with ionized water and 1.5% Elma Clean 115C for 10 mins, then rinse with clean water.
5. Ultrasonic clean all the parts with isopropanol for 20 mins.
6. Wrapping all parts with aluminum foils once they are air-dried.
After finishing the vacuum assembly, we attach the VAT valve to the pre-pumping station using a vacuum below and start pumping with the valve opened. The pre-pumping system consists of a turbomolecular pump station (Pfeiffer HiCube 300 H Eco), a residual gas analyzer (SRS RGA100) for leak checking and gas analysis, and a cold cathode gauge (PKR® 361, high current) for monitoring the pre-pumping stage pressure. We turn on the pre-pumping station and wait a day for the pressure to reach ∼ 1 × 10−8 m-
bar.
Then we wrap up the main vacuum system with heating tapes3, covered by aluminum foils. We monitor the temperature with thermocouples at several places across the setup. We gradually heat
2The viewports are hand-cleaned using lint-free clothes and isopropanol 3Note that for miniature ion traps, it’s safer to perform baking in an oven to prevent large temperature gradients in the system
10

Diaphragm pump Scroll pump Scroll pump(second day) Scroll pump(third day)

N2 (Torr) 1.2e − 10 1.1e − 10 4.5e − 11 3.4e − 11

H2 (Torr) 1.8e − 9 1.4e − 9 6.2e − 10 5.2e − 10

O2 (Torr) 5.3e − 12 3.4e − 12 3.0e − 12 2.9e − 12

H2O (Torr) 3.2e − 11 7.8e − 12 3.1e − 12 2.3e − 12

Table 2.1: Comparison of the pumping capability of the diaphragm pump and the scroll pump.

up the system by 18°C/hour to avoid vacuum leaks created by thermal expansion mismatch, which is critical, especially with viewports.
We first perform the baking to ∼250°C with 4.50" blank flanges instead the viewports, which we believe would remove the residual oil contaminants in the system, which appears in the RGA mass-spectroscopy after baking. The residual gas is dominated by H2, with the rest consists mostly of CO/N2 and CO2. Then we cool down the system to room temperature and switch the blank flanges for the viewports. This time we only bake up to ∼150°C to remove the residual water in the system since the viewports can-
 not be heated up to over 200°C. At around ∼150°C, we activate the TSP, as well as degassing the extractor gauge. The activation procedure when both non-evaporating getter (NEG) and TSP pumps are involved can be found in Appendix. A.
After finishing the TSP activation, we turn on the ion pump and separate the pre-pump station and the main vacuum system by closing the valve. We should see a vacuum decrease after closing the valve. Then fire the TSP a couple of times and gradually cool down the system by 18°C/hour to room temperature, with the pressure and temperature monitored.
We note that there is an accumulation of hydrogen in our turbomolecular pump, which limits the final pressure to about ∼ 1.3 × 10−10 mbar without detecting any other contaminants. This issue can be relieved by switching the backing pump for the turbo to a scroll pump (Pfeiffer HiScroll 6), and we find the hydrogen partial pressure reduced by a factor of 2. See Table.2.1 for a final partial pressure comparison of an individual scroll pump or the integrated diaphragm pump as the backing pump or the -
turbo.

11

2.2 Ion trap
Trapping ions provides a well-isolated environment to study quantum physics and has been pursued for decades. Here, I only give a brief derivation of the essential concepts of ion trapping and its classical motion. A derivation of quantum-mechanical motion and details of radio-frequency (rf) traps can be found in [56].

2.2.1 Theory of rf Paul trap
An obvious way to hold an ion at the bottom of a potential well is to add a three-dimensional harmonic potential:

ϕ = ϕ0 αx2 + βy2 + γz2 .

(2.1)

However, Earnshaw’s theorem states that charged particles cannot be stably trapped in a system consisting only of electrostatic interactions. To solve the problem that the ion potential has no minimum value in the three dimensions, Wolfgang Paul and Hans Dehmelt developed two sorts of ion trapping systems [57; 58]: referred to as Paul trap and Penning trap. Paul traps use alternating quadrupole potentials to trap ions, which are widely used in quantum information, precision mass spectroscopy, and -
ion clocks, while Penning traps use electrostatic fields and a large longitudinal static magnetic field to confine ions. The Penning trap holds a rotating crystal and is used primarily in high-energy physics experiments, research on fundamental physics, and studying quantum manybody physics. The rf Paul trap, discussed in this thesis, is considered to be the most likely to realize quantum computing in recent years.
In an rf Paul trap, the trapping potential consists of the dc and rf terms:

Φ(x, y, z, t)

=

U0 z02

αx2 + βy2 + γz2

+

V0 2R2

cos

(ωrf t)

α′x2 + β′y2 + γ′z2

,

(2.2)

12

where U0 and V0 are the rf and dc voltages. z0 and R0 are the geometrical trap parameters characterizing the distance from dc and rf electrodes to the trap center. The potential has to fulfill the Laplace equation ∇2Φ = 0, thus requires:

α+β+γ =0 .
α′ + β′ + γ′ = 0

(2.3)

For linear trap, we can choose the following configuration:

α = β = −2γ < 0 ,
α′ = −β′, γ′ = 0

(2.4)

which provides RF trapping in the xy direction and dc trapping in the z-direction. For simplicity, we can set the trap radial anisotropic parameter α and geometric factor α′ to one. Then the trapping potential can be rewritten as:

Φ(x, y, z, t)

=

U0 z02

x2 + y2 − 2z2

+

V0 2R02

cos

(ωrf t)

x2 − y2

.

(2.5)

We

take

the

derivative

of

the

potential,

and

the

particle

motion

fulfills

m d2−→r dt2

=

−e∇Φ,

then

we can rewrite the motion in 3D in terms of Mathieu equations:

u¨i

+

[ai

−

2qi

cos

(ωrf

t)]

ωr2f 4

ui

=

0

(2.6)

ui is the normalized motional amplitude, ai and qi are the so-called a and q parameters and we have:

ax

=

ay

=

1 − 2 az

=

−4eU0 mz02ωr2f

,

(2.7)

13

qx

=

−qy

=

−

2eV0 mR02ωr2f

,

qz

=

0.

(2.8)

Taking the typical values of a and q, we have |ai| , qi2 ≪ 1. So the first-order approximate

solution to the Mathieu equation is:

ui(t) ≈ Ai cos

βi

ωrf 2

t

+

ϕi

1

+

qi 2

cos

(ωrf t)

,

(2.9)

with βi ≈ ai + qi2/2. The particle’s motion consists of two terms. The first term is a harmonic

motion with frequency ωr

=

β ωrf i2

≪ ωrf , which we call the secular motion.

And the second

term is with much smaller amplitude, oscillating at the rf trap frequency and modulated by the

periodic displacement of the secular motion, which we call intrinsic micromotion (IMM). Under

this approximation, the particle’s pseudo-potential can be written as:

m Φ(x, y, z) =
2e

ωx2,y

x2 + y2

+ ωz2z2

.

(2.10)

Note that the axial potential contributes as an anti-trapping term to the radial frequency. When |ax,y| ≪ qx2,y, the radial and axial frequencies are:

ωr

=

ωx

=

ωy

≈

√ eV0 2mωrf R02

,

ωz =

2eU0 mz02

.

(2.11)

However, in the real world, a stray dc field Edc could exist in the trap due to patch potentials. Thus the Mathieu equation has an additional constant term:

u¨i

+

[ai

−

2qi

cos (ωrf t)]

ωr2f 4

ui

=

eEdc,i , m

(2.12)

which adds an extra excess micromotion (EMM) term to the particle’s motion in Eqn. 2.9:

14

u′i(t) ≈ A′i

1

+

qi 2

cos

(ωrf t)

,

(2.13)

where A′i ∝ Edc,i. The secular motion is the part of our interests in the experiment, which we use for spin-phonon coupling and quantum bus for spin-spin interaction. EMM is detrimental to the

experiments in several aspects: it cannot be cooled efficiently by Doppler cooling and will introduce

a large second-order Doppler shift for ion-based optical clocks[59]; it modulates the ion absorption

spectrum, and a strong micromotion sideband will lower the on-resonant ion fluorescence and

affects the detection fidelity; and it decreases the fidelity of entangling gates[60].

In the experiment, we use compensation electrodes to balance the stray field, thus mitigating

the effect of EMM. Since we don’t require a high precision of EMM compensation, we check the

micromotion by manually changing the RF trap depth and tuning the compensation voltages until

the ion stays approximately at the same position at different RF potentials.

2.2.2 The four-rod trap
The ion trap used in the experiment is a linear Paul trap in a four-rod configuration. The design is similar the one used at NIST cryogenic mercury clock [61], Fig. 2.2 illustrates the geometrical configuration of the trap. It consists of four cylindrical tungsten rods with diameters of 760 µm, placed at the corners of a square with a center-to-center distance of 1.2 mm. The four-rod spacing gives an ion-to-electrode distance R0= 480 µm. One pair of opposite electrodes is connected to an external -
rf drive via the rf feedthrough and a helical resonator, and the other is grounded. The rods are insulated with alumina ceramic disks with clearances holes matching the size of the rods. A pair of endcaps machined from stainless steel is placed in the axial direction with a spacing of 4.6 mm, sleeved outside the ceramic disks. The conical shapes of the endcaps facing the ions provide an enhanced electric field strength and, in turn, a higher axial trapping potential. During the experiment, we typi-
cally apply an RF drive at Ω/(2π) = 71.8 MHz with an RF voltage of 307 V on

15

GND

+

2R0

Y Z
X

+

GND

2Z0

Figure 2.2: Illustration of the four-rod trap setup.
the two diagonal rods and an average DC voltage of 788 V on the endcaps, corresponding to radial and axial trap frequencies of {ωx, ωy, ωz}/(2π) = {4.69, 4.73, 0.735} MHz. The ablation target is a 10 mm× 20 mm × 0.25 mm rectangular beryllium foil (99.8+% purity, Sigma-Aldrich) mounted on the trap holder under the RF electrodes at a distance of d = 7.8 mm from the trap center. This trap can hold hundreds of beryllium ions in a linear chain and up to 67 ions at high enough secular frequencies suitab-
le for quantum logic operations (individual ion Lamb-Dicke parameter [62] for the lowest frequency mode is smaller than 0.3). There are four extra dc electrodes located symmetrically and concentrically at the outside of the rf electrodes for micromotion compensation, with ceramic disks covered for insulation purposes.

2.3 Electronics and experimental control system
The control system is complex, acting as an interconnect between the laptop and the experiment. It can be thought of as our hands manipulating the quantum processors, while the classical computer is the brain. More importantly, ions are confined by an electric fields, and the ultra-high stability of the quantum bus (motion) requires an unprecedented low-noise RF source and dc voltages. This

16

section briefly summarizes the four-rod trap’s electronics and experimental control system.
2.3.1 Control system
Modern trapped ion experiments require generating a large number of electrical signals with nslevel resolution. E.g., precise control of the amplitude, frequency, and phase of laser/microwave (MW) pulses and time-to-live (TTL) signals to trigger the readout on cameras. It is also necessary to have a fast readout of the signals, for instance, the photon counts. The advanced system can even perform conditional feedback controls without communication with the computer. Most quantum experiment control-
 systems are based on field-programmable gate arrays (FPGAs) to fulfill these requirements.
We developed our control system based on LabRAD, a server-based distributed control platform with high flexibilities for adding new commercial hardware. LabRAD was first developed by John Martinis’s group on superconducting circuits experiments4, then adapted to the AMO platforms and now mainly used by the Californian ion trappers [63]. In our group, the software parts developed by Yue Shi. Detailed documentation of the system and a LabRAD tutorial can be found in [64].
The core of the control hardware is an FPGA (Opal Kelly XEM6010-LX45). It receives the TTL/ direct-digital synthesis (DDS) instruction from the Pulser (the central server of LabRAD) and passes it to the TTLs and DDSs, records the photon counts from the output of the photomultiplier tube (PMT) and passing it to the Pulser. The FPGA is mounted to a breakout board (BRK6110) and then mounted to a customized motherboard made by the UCLA physics electronic shop. The motherboard provides up to 16 TTL out-
puts and has eight slots for the DDS boards [65] (also made by the UCLA physics electronic shop) which outputs frequencies up to about 400 MHz. Each DDS board is powered by 5V/0.8A. All the DDSs are referenced to a common 2 GHz signal generator (IFR 2025) is locked to a rubidium frequency standard (SRS FS725). Table. 2.2 lists the use purposes of the DDSs and TTLs.
4LabRAD
17

Name DDS1 DDS2 DDS3 DDS4 DDS6 DDS7 DDS8

Frequency (MHz) 166.5 340 220 71.42 142 163 129

Description Raman AOM1 Raman AOM2 Raman AOM3
Trap drive Doppler Repumper Far-detuned

Name TTL1 TTL2 TTL3 TTL4 TTL5 TTL6 TTL7 TTL8

Description Ablation trigger Camera trigger
MW trigger 266 nm switch 532 nm flipper mirror AWG trigger Raman AOM4 SBC Raman AOM4 gate5

Table 2.2: DDSs and TTL usage.

The control system also involves other components which are sketched in various places in this thesis:
• Arbitrary waveform generator (AWG) (Section.2.8). The AWG is triggered by a TTL signal, with the function generation built into the LabRAD script.
• MW pulse generation (Section.3.3). The MW pulse is controlled by an RF switch triggered by TTL.

• PMT and camera (Section.2.9). The camera is triggered by TTL, and PMT counts are sent to the master FPGA. PMT counts and camera data are presented in the LabRAD GUI (Real simple grapher) in real-time.

2.3.2 Helical resonator and DC supply
A linear RF Paul trap requires a low-noise, high-voltage amplitude on the RF electrode for stable radial confinement of the ions. In our setup, the RF source is generated by one DDS channel and amplified up to 2.5 W by the RF amplifier. The amplified signal is coupled to the RF feedthrough through a helical resonator [66]. With the loading of the four-rod trap and RF feedthrough, we achieve a typical Q ≈ 120 and a resonant frequency of ωrf /(2π) = 71.8 MHz.
5Raman AOM 4 drive is switched between two channels on the AWG, one for performing sideband cooling (SBC), and the order channel for providing gate operation. The switching is completed by two TTL-controlled RF switches.
18

Endcap 1 Endcap 2 Comp.6 1 Comp. 2 Comp. 3 Comp. 4 750 V 827 V 1245 V 548 V 198 V 0 V
Table 2.3: Typical DC electrode voltages in the experiment.
Since our experiment couples to the axial motion, we don’t have active stabilization on the RF power. We monitor the reflection signal from the resonator, and it’s stable on the oscilloscope by eye-balling. Note that although it’s straightforward to use a proportional integral and derivative (PID) controller and actively lock the RF power, it’s difficult to achieve the same stability on the radial motion as the axial one [67].
The four-rod trap has six dc electrodes: two endcaps providing axial confinement and four compensation electrodes for balancing micromotions. The DC voltages are provided by an ultrastable high-voltage power supply (iseg SR040020r605) with output up to + 2 kV with a 2-3 mV noise level. We designed a homemade high-voltage low-pass filter (Fig. 2.3) for the DC electrodes, which provides a 110 dB attenuation from 10 kHz to 1 MHz. It filters high-frequency noises that could perturb the ions’ axial mot-
ions.

10 nF 10 nF 4.7 nF 4.7 nF 6.8 nF 6.8 nF 20 MΩ

HV DC Output

100 kΩ

200 kΩ

133 kΩ

Feedthrough pin

100 kΩ PTF56100K00BZEK 133 kΩ PTF56133K00BZBF 200 kΩ PTF56200K00BZEK 20 MΩ USF371-20M1%5PPM capacitors from Hilitchi 150-Pcs 15 Value High Voltage DIP Ceramic Capacitor Assortment Kit - 2KV 2000V 100pF to 10000pF
Figure 2.3: Skematics of the high voltage low-pass filter.
19

We note that the DC voltages used in our experiment are particularly high. The axial frequency is five times smaller than we targeted at the same DC voltages. Table 2.3 lists the typical DC electrode voltages used to generate an axial trapping frequency of 735 kHz (η = 0.78). We cramped up the endcap voltages to around 800 V, and the reason we didn’t go further up because we were concerned about a breakdown on the dc feedthrough only to get a square-root gain on the motional frequency.
2.4 Permanent magnets and trim coils
A pair of permanent ring magnets made of neodymium (NdFeB ) is used to generate an external magnetic field pointing towards the north as the defined principal magnetization axis z. In addition, we add on a pair of 20 turns squared coils to generate a trim field in the same direction as the permanent magnets’ field. The coils are driven by a diode laser controller (Thorlabs LDC240C) at 2400 mA. The magnets and coils provide a near homogeneous magnetic field of 119.446 G at the trap center, oriented-
 45°with respect to the trap axis. This field is desired for the first-order Zeeman insensitive qubit (hyperfine qubit).
The dimensions of the magnets are 4" OD×3"ID×0.5" and symmetrically set up at the two sides of the trap with an inner distance of 8.8". NdFeB magnets have a temperature coefficient of ∼ 0.1%/K, and the Zeeman qubit frequency dependence on the magnetic field is 1.76 MHz/G. This leads to a qubit frequency drifts of 210 kHz/°C. During the daily operation, it’s common to see the qubit frequency drifts for up to 100 kHz over the course of the day or at the level of 10 kHz over the course of an experime-
ntal scan. This is problematic because of the entangling interaction rate on the order of ∼ 10 kHz. We believe that the qubit fluctuation is mostly due to temperature fluctuation (Fig. 2.4 shows typical temperature and humidity records in the laboratory over six days in the lab), mainly because we are using Zeeman qubit for the majority of this thesis, but even if we
6Compensation electrode
20

Figure 2.4: Temperature and humidity fluctuation in the laboratory.
had switched to the hyperfine qubit, it affects state preparation and detection. Better control of the environmental temperature is desired. And the use of Sm2Co17 magnets compensated by NdFeB has been demonstrated to have 25 times lower temperature coefficient [68].
Besides qubit frequency fluctuation, we found a significant magnetic field gradient across the ion chain, which most likely originates from the misalignment of the two magnets. To mitigate the effect, we use a pair of 100 turns gradient trimming coils (with currents flowing in opposite direction) of the same dimension as the field trimming coils (with currents flowing in the same direction) to compensate for the gradient. The power consumption of the gradient trimming coils is already close to 20 -
W with a current of 1.7 A. So we were conservative about driving with a higher current without proper water cooling on the coils. After the compensation, we measure the gradient using a chain of 8 ions as a probe. Fig. 2.5 shows the Ramsey frequencies independently measured out of an 8-ion of an 8-ion chain. We can fit the oscillation frequencies of individual ions and use a linear fit to their relative positions to find a gradient is 0.167 kHz/µm, corresponding to 0.095 G/mm. Since homogeneity is-
 crucial for multi-ion experiments, better alignment of the magnets
21

Relative qubit frequency (kHz)

26 25 24 23 22 21 20 19 18
20

Linear fit

10 Ion posit0ion ( m) 10

20

Figure 2.5: Measurement of qubit frequency gradient using an 8-ion chain. The red dots are measured Ramsey frequencies of individual ions as a function of their relative positions, blue solid line is a linear fit. The error bars are smaller than the size of the dots.

and proper designing of the gradient compensation coils is desirable in future experiments. One can further improve the homogeneity by setting up the magnets in a Halbach configuration [68; 69].
Under a uniquely defined quantization axis, the ions see σ+(σ−) photons for light propagating along the field direction with the right (left)- handed circular polarization, and π photons for light propagate perpendicular to the field direction with linear polarization parallel to the magnetic field. Since we require σ+ polarization with high purity for high-fidelity state detection, it is important to trim the field in the other two x and y directions to align the direction of the light propagatio-
n and the magnetic field. For this purpose, we have another two pairs of field-trimming coils set up in the x and y directions. However, our experiment never used the x,y coils when operating in the high field regime (120 G). The quantization field itself is strong enough that a stray field in other directions does not affect the detection fidelity significantly. Further field trimming can be done by

22

optimizing qubit detection fidelity or minimizing the ion fluorescence starting from the bright state under a D1 line pumping light if such a laser is available.
2.5 Ion loading
Loading of beryllium ions is conventionally carried out with a thermal atomic source heated to high temperatures at a fraction of the melting point of 1560 K, to produce a diffusive neutral atom beam, followed by either electron-impact ionization or photo-ionization with a deep ultraviolet (DUV) laser [70]. Because of the high melting point, heating up the oven will introduce 10−9 mbar level of gas load. In addition, this loading process can be time-consuming, with a loading duty cycle at the minu-
te scale [71]. Moreover, the consecutive ionization methods are also invasive: the electron gun produces ions with high kinetic energies that are hard to cool and creates patch charges that perturb the trap electric fields [72].
On an alternate approach, photo-ionization is a cleaner process. However, for beryllium, the photon energies at 235 nm or 266 nm [70] are above the band-gaps of most dielectric materials, thus presenting a significant risk of photo-electric charging [73]. These undesirable effects from electrons and UV photons could readily affect ion motion at the single-quanta level, hampering high-fidelity entangling gates and precision spectroscopy.
A different method is to use laser ablation loading, which has been demonstrated with many ion species for ion traps [72; 74; 75; 76; 77; 78; 79], including ablation loading of neutral beryllium followed by photon-ionization [80], as well as direct laser ablation loading of 9Be+ both in Penning [81] and RF traps [82] without laser cooling. We develop a reliable scheme for producing ion Coulomb crystals of 9Be+ with direct laser ablation in the plasma regime. The work discussed here has been publis-
hed in [83]. This approach has the advantage of ultra-low vacuum pressure overload, with directly loaded ions from the plasma plume induced by focusing a visible turn-key Nd: YAG laser. While many recent ablation techniques operate in the neutral regime followed by
23

photo-ionization for isotope selectivity [74; 75; 78; 79], we obtain defect-free crystals of beryllium ions because of the presence of only one stable isotope (9Be) and the clean chemical composition of the target.
2.5.1 Direct ablation loading of Be+
We use a Q-switched Nd: YAG laser at 532 nm (EL-532-1.5W, CNI lasers) that outputs nanosecond pulses with controllable repetition rates and pulse energies. Although there is 1 W of green light at our disposal, we find it usually sufficient to operate the laser slightly above the pump current threshold of 7A, corresponding to ∼ 150 mW of power. After an acoustic-optical modulator (AOM) to control the number of pulses and the energy per pulse, the power directed into the trap is 80 mW at a repetitio-
n rate of 4 kHz. We focus the 532 nm laser beam down to a 1/e2 diameter of 60 µm on the beryllium target. The ablation laser fluence of 0.7 J/cm2(peak fluence 1.4 J/cm2) is below the threshold measured in Ref. [81]. One possible explanation is that our beam size is relatively large. Since the peak intensity is twice the average, the center part of the beam has enough intensity to generate a plasma. With a pulse duration of 2.2 ns and single pulse energy of about 20 µJ, we can load a chain of up to-
 20 ions in 30 ms (120 pulses). The plasma plume first temporally shorts the RF trap on the time scale of 10 µs [84], and ions from the slow tail of the kinetic energy distribution enter the trapping region. They are captured by the RF potential once the RF voltages are recovered. The ion clouds get laser-cooled to a Coulomb crystal by the incoming Doppler cooling beam. Such pulse energies only slightly above the threshold should produce ions with kinetic energies less than 10 eV [81]. For diagnos-
tic purposes, we use a commercial long working distance microscope (commonly used for inspecting electronics boards) to observe white light from the laser-induced plasma on the beryllium target, facilitating the initial alignment and recoveries after changes in the experimental setup.
We monitor the vacuum pressure with an extractor gauge during the loading process. The gauge has a resolution of 1 × 10−13 Torr and is located 20 cm away from the trap center. The maximum
24

Vacuum increase (10-12 Torr) Normalized PMT counts

(a) 2.0
1.6 1.2 0.8 0.4

ablation pulse (30 ms)
gauge reading exponential fit

(b) 1.5
1.0

0.5

0.0

0.0

0

2

4

6

8

10

0

2

4

6

8

10

Time (s)

Time (s)

Figure 2.6: Real-time vacuum pressure and PMT counts after ablation pulses. (a) Ablation pulse duration and sequential vacuum changes in 10 s. The green dash line gives a fit of the exponential decay of the vacuum pressure after the ablation with a 1/e time constant of 1.7 s. (b) Under constant cooling laser parameters, we normalize the PMT counts with respect to photon counts per ion. Step increase at 5.2 s shows the cooldown time of the first ion.

vacuum spike is 4 × 10−12 Torr with 60 ms pulse duration, which rises faster than the gauge update rate of about 1/3 s and decays to the base pressure in less than 5 s (Fig. 2.6). The exponential decay fit gives a 1/e time constant of 1.7 s, which is faster than that of specially designed thermal ovens [85; 86].
The intrinsic randomness of the loading process, whether from thermal or ablation-plasma sources, gives rise to distributions obeying Poisson statistics in the absence of correlated dynamics. However, whether the number of Coulomb-crystallized ions follows a Poisson distribution has never been investigated to the best of our knowledge. We sample the ion number distribution after the loading process is completed, by counting photons with repeated measurements on a 1 ms long Doppler cooling sequence-
. By collecting about 3500 photon counts per ion (total 100 ms integration time), we can distinguish the difference from a single ion in the presence of about 30 ions with a signal above the photon shot noise. Fig. 2.7 shows the histogram of the sampled ion number distribution from ablation loading. The Doppler cooling light has a beam waist radius of 60 µm at the trap center, and is set to five times of the saturation power, −10 MHz (−Γ/2) detuned from the S1/2 − P3/2 transition of Be+. To enhanc-
e the cooling of fast ions, we apply two

25

probability probability

0.20

t = 30 ms

0.20

Lévy

0.15

Poisson

0.15

0.10

0.10

t = 60 ms Lévy Poisson

0.05

0.05

0.00 0
(a)

0.00

5

10

15

20

25

30

0

ion number

(b)

5

10

15

20

25

30

ion number

Figure 2.7: Histogram of equilibrium ion number distribution with 100 loading trials for different ablation durations. (a) Ablation time t = 30 ms. (b) t = 60 ms. Both histograms are fitted to Poisson (green line) and Lévy (red line) distributions.

additional frequencies with detunings of −120 MHz and −1.2 GHz, respectively. With identical laser cooling and trap parameters, we apply two different ablation duration, 30 ms (Fig. 2.7(a)) and 60 ms (Fig. 2.7(b)). Both statistics are characterized by a long tail, and Poisson distributions fail to capture this (reduced χ2 = 21 ± 0.1). We in turn, fit the data to a Lévy distribution and find a significantly better agreement(reduced χ2 = 0.85 ± 0.14 ). Such statistics can hardly be explained with a -
laser cooling theory of individual non-interacting particles [87]. The loaded ion number is not directly proportional to the duration, which, together with the tails, indicates that the ion number is dominated by crystallization dynamics, rather than the ion number from the ablation plasma. This finding calls for an understanding of the crystallization dynamics in the presence of the Floquet drives from the RF, and the long-range Coulomb interactions [88]and a detailed discussion can be found in [-
64].
The wide statistical distribution presents a challenge for deterministic quantum information processing: individually addressing ions requires precise calibration of the tightly focused laser positions [89], which is difficult since the self-assembled Coulomb crystals change equilibrium positions and spacing for different ion numbers [90]. To obtain fine control over the loaded ion number, we implement a conditional logic based on PMT counts and apply feedback. We use a script to automatically rea-
ds the photon counts and control the ablation laser and the RF trap

26

(a) Targeted
ion number
Higher
Evaporation: reduce RF
potential

Ablation 10ms
Lower PMT counts vs. thresholds
Yes
Record ion number

Probability

(b)
0.25 0.20 0.15 0.10 0.05 0.00
0

Controlled Uncontrolled
σ = 1.5

5

10

15

20

25

Ion number

Figure 2.8: Feedback control for ion chains with desirable ion number. (a) Block diagram of the control sequence for loading with conditional logic. Upon an input ion number, we count the ion fluorescence photons with a PMT to determine whether the existing ion number is within the targeted range(In this experiment, 10 to 15). Feedback is applied either to add by extra ablation or subtract via evaporation: lowering the RF potential and reducing cooling for hot ions to leave the trap. (b) Statistic-
 of ion number after controlled feedback (green bars). A previous fit curve (red solid line) without the control sequence is compared. The standard deviation of the ion number is reduced to 1.5.

potential. Fig. 2.8(a) shows our control logic: if the PMT counts are lower than the threshold, we apply an extra loading attempt; if the counts are high than the threshold, we lower the RF potential by 13 dB for 10 s to purposefully let some ions escape the trap. During this evaporation process, the trap is shallow, and the cooling efficiency is reduced, thereby effectively ejecting undesirable hot ions. Such a conditional loading sequence yields a narrow distribution of ion numbers between 10 to-
 15 shown in Fig. 2.8(b). We reduce the statistical fluctuation by a factor of 4.5 when comparing the standard deviations of the ion number distributions with and without feedback loading. The longer tail towards the lower ion number indicates: the loaded ion number exceeds the high threshold of 15 after most ablation trials, then the control sequence repeats the evaporation process until the ion number is lower than the threshold.
We also observe an effect well-understood in earlier literature [72]: the loading becomes less efficient when ablating on the same spot after 15 to 20 loading events. The ablation laser micromachines a crater into the target, making it more difficult for the plasma to escape. For the data

27

shown in Fig. 2.7, we manually tweak the ablation laser position after every 15 loading trials to remove these effects, which can be automated with a picomotor-controlled mirror mount for randomizing the position for long-term consistent loading efficiency. Furthermore, we have found an alternative method: whenever the loading efficiency has decreased, we can recover by applying a long train of ablation pulses lasting 1 s, after which the loading efficiency is recovered. While we do not have a rig-
orous explanation, one possibility is that the thermal effects from the long pulse train create a renewed flat area ready for fresh loading.
2.5.2 On-resonant photoionization (PI)
Unfortunately, the direct ablation loading efficiency decreases over the course of a year. We have to constantly tweak the ablation beam on the target to find a sweet spot for consistent loading. I probably spent more than 50% of the time just to load ion in the trap when we took scientific data! And the long ablation pulse, which helped to recover, became less efficient over time. This is probably due to too many micro-machined craters on the beryllium surface, which we inspect with the long work-
ing distance microscope. Another evidence of this explanation is that we used to observe 10−12 mbar level of vacuum increase on the extractor gauge after an ablation event. But towards the end, the vacuum increase is below the sensitivity of the extractor gauge, even if we turn up the laser power by ∼ 5 times and ablate for 1 s.
Generating neutral atoms with laser ablation is believed to be gentler than direct ablation loading of ions [72]. Together with photoionization (PI), it also generates ions with lower velocities, which are more likely to be captured by the ion trap with a finite potential depth. We later switched to on-resonant PI, with 532 nm laser ablation as a neutral atom source. We use a 235 nm continuous laser (Toptica DL-SHG pro) for PI. This commercial ECDL laser uses a high-power 470 nm diode which output-
s 180 mW of blue light and frequency doubled to generate ∼ 2 mW of 235 nm light. The light is combined with the Doppler cooling beam using a polarization beam splitter (PBS) and delivered to the trap center with ∼ 800 µW of 235 nm power before entering the viewport.
28

Loaded ion number

7 Center = 638.03992 THz

6 Linewidth ≈ 320 MHz

+

++ + +

5

4 3

+ +

++

++

2
1+
0 0.0394

+ +

0.0396

0.0398

0.0400

Laser frequency - 638 THz (THz)

++ +
0.0402

Figure 2.9: Measuring loaded ion number as a function of the PI laser frequency. Red "+" markers are experimental measurements, the blue-solid line is a Lorentzian fit to the data.

The 235 nm laser is tuned to be resonant with the 1S0 ↔1 P1 transition of neutral beryllium, with a second 235 nm photon further exciting the atom to above threshold of the first electron binding energy. The center of the transition frequency has been measured to be 1276.07984 THz in an atomic beam experiment [91]. In Fig. 2.9 we measure the ion loading number versus the PI laser frequency at 470 nm on a wavemeter (HF-ANGS WS8+1X2PCS). The loaded ion number is measured three times at each frequenc-
y and averaged. We then fit the data with the Lorentzian function and find the line center at 470 nm to be 638.03992 THz, with a linewidth of 320 MHz. This frequency center agrees with the atomic beam measurement result to within 100 MHz. The linewidth is broaden by ∼ 7 times, considering the nature linewidth of the 1S0 ↔1 P1 transtion Γ/(2π) = 87 MHz [92].

29

Component Detection Repumper Far-detuned

Transition
2S1/2 |F = 2, mF = 2⟩ ↔ 2P3/2 |mI = 3/2, mJ = 3/2⟩ 2S1/2 |F = 2, mF = 1⟩ ↔ 2P3/2 |mI = 3/2, mJ = 1/2⟩ 2S1/2 |F = 1, mF = 1⟩ ↔ 2P3/2 |mI = 3/2, mJ = 1/2⟩

Frequency/Detuning (MHz) +284/0
+163/-121 - 958/-1242

Table 2.4: List of the three components contained in the Doppler cooling beam. The AOM frequency offsets from the laser output and the relative detunings are given.

2.6 Doppler cooling/detection optics
We use a frequency quadrupled continuous ECDL laser at 313 nm (Toptica DL-FHG pro) to address the 2S1/2 ↔2 P3/2 transition in Be+ for Doppler cooling. The laser uses a 1252 nm diode source, followed by a tapered amplifier to reach 2 W of IR power. It then gets frequency doubled to generate 1 W of 626 nm red light, and finally doubled again to generate up to ∼500 mW of 313 nm UV light at the factory setting. In daily routine, the UV cavity outputs ∼150 mW 313 nm light for continuous operation. We a-
lso observe sudden UV power drops after humidity ramps.
Three frequency components are required in the Doppler beam: Doppler/detection, neardetuned cooling (repumper), and far-detuned cooling. We use one split beam from one laser and use AOMs to bridge the frequency difference between the components. Table. 2.4 lists the three components, corresponding atomic transition, and frequency offset to the laser output.
Doppler cooling is set to be - 9 MHz (∆ = −Γ/2) detuned from the detection transition, which the excited state linewidth is Γ/(2π) ≈ 18 MHz7 [94]. We modulate the frequency of a double-pass acoustic-optical modulator (DPAOM) to switch between detection and Doppler cooling. Repumper and far-detuned are set to be resonant with optical pumping transitions for initializing the ion on the 2S1/2 |F = 2, mF = 2⟩ state. During the ion loading and Doppler cooling stage, these two beams are also turned on, -
acting as far-detuned cooling, with high saturation intensities to help crystallization and cooling ions with high velocities [95]. The detailed atomic level diagram is in
7This value is given by theorectical calculation. The latest experimental measurement was done in 1969 [93] with Γ/(2π) = 19.7 MHz.
30

Fig. 3.1. The schematics of the Doppler cooling optics are depicted in Fig. 2.10 (a). The laser output
is first divided into two paths, one for far-detuned cooling, and the other for Doppler/detection and near-detuned cooling. All three components are split into two with 50/50 beam splitters, designed for supporting two independent ion-trap experiments. The far-detuned path goes through a −2 × 340 MHz DPAOM (IntraAction ASM-3401LA8.22) and a second −2 × 129 MHz DPAOM (Brimrose CQF-130-50-313X). The detection beam goes through a +2 × 142 MHz DPAOM (Brimrose CQF-130-50-313X), and the repumper beam go-
es through a +163 MHz single-pass AOM (Brimrose CQF-130-50-313X). In the end, the three tones are recombined using 50/50 beam splitters and delivered to the trap table via a photonic crystal fiber (PCF) with ∼ 40% fiber coupling efficiency. The maximum power of Doppler/detection, repumper, and far-detuned beam after fiber coupling is 8 µW, 200 µW and 300 µW respectively. The fiber core is made by NKT photonics (LMA-PM-10) with tubing and endcaps made by Coastal connection.
The fiber output of cooling light on the trap table is collimated and has vertical polarization, it first goes through a half-waveplate, and after several mirrors, the beam is combined with light from another beam path which we switch between the diagnostic Raman light coupled to the radial motion and 235 nm for photoionization. The combined beam is guided to the trap center, passing through a quarter-waveplate on a tip and tilt mount for generating σ+ polarization of Doppler light, and focused wi-
th an f = 125 mm lens with beam waist ω0 = 60 µm at the trap center.
2.7 626 nm Iodine lock for Be+ Doppler cooling/detection
The Doppler/detection laser needed to be referenced to an absolute atomic reference with uncertainty less than 1 MHz for robust daily operation and high-fidelity detection. We lock the laser to an iodine cell using a modulation transfer lock around 626 nm, the laser frequency before the fourth harmonic frequency generation (half of the9Be+ cooling transition frequency).
31

(a)
PCF Trap 2

-129

Future experiment *2
f=100
*2 f=100

+142

+163 +163

(b)

Laser output

f=75

*2

-350

f=-50

f=100 f=-30

f=100

+142 -129

f=100

*2 *2

f=500 PCF

f=125

Trap 1 PCF
235 nm PI/ Radial Raman
Doppler

mirror d-shaped mirror quarter wave-plate half wave-plate

AOM (MHz) lens (mm) right-angle prism aperture

polarizing beam splitter

(incident angle 56°)

50/50 beam splitter (incident angle 45°)

photodiode detector

Figure 2.10: Illustration of the optical setup of the Doppler cooling beam. (a) Schematics of the Doppler preparation optics. (b) Doppler beam configuration with respect to the ion trap.

32

Hyperfine-resolved optical transitions of iodine molecules (B3Π0+u − X1 +g ) provide absolute frequency references from the dissociation limit at 499.5 nm to near-infrared. Around 626 nm, which is half the frequency of 9Be+ 2S1/2 ↔ 2P3/2 transition, the Iodine has strong absorption. It thus serves as an excellent absolute frequency reference for the Doppler cooling transition of 9Be+. The D2 line of 9Be+ is centered at 957396617 MHz [96]. Taking into account the 120 G magnetic field and hyperfine -
splitting, Doppler cooling of 9Be+ which is 10 MHz red-detuned from the 2 S1/2 F = 2, mF = 2(|↓⟩) ↔ 2P3/2 mI = 3/2, mj = 3/2(|e⟩) has a frequency shift of ∆|e⟩ + ∆Dop − ∆|↓⟩+ = 223.4 × 1.5 − 10 − (−469 + 1.4 × 120) = 625 MHz. We learn from the calculation that the Doppler cooling transition absolute frequency is 957397242 MHz. There’s a UV double-pass AOM between the laser output and Doppler cooling light at 2 × (+137) MHz so that the laser should operate at 957396968 MHz (478698484 MHz at 626 nm,-
 which agrees with the wavemeter reading at NYU to within 10 MHz).
Then we refer to the Atlas data for Iodine lines [97]. Line 961 has a center frequency of 478697391 MHz and is within 1 GHz from the desired laser lock point. We use modulation transfer spectroscopy (MTS) [98] to lock the laser to the falling edge of the highest frequency feature in Fig 2.11. Line 960 and line 962 are at least 6 GHz away in frequencies. The optical setup of the iodine lock is shown in Fig 2.12. We use 70 mW (∼ 1%) of the 626 nm leakage light from the laser and fiber-coupled to the-
 iodine lock breadboard. The fiber output light first goes through a half-waveplate and a polarization beam splitter (PBS) to control the total power. The red double-pass AOM (DPAOM) at −2 × fRAOM = −2 × 305 MHz serves as a bridge between the laser and iodine frequency reference. The light splits into a strong pump beam and a weak probe beam. The pump beam goes through another single pass AOM (SPAOM) with a frequency shift of fSPAOM = −105 MHz and a frequency modulation of ωM/(2π) = 410 kHz, which-
 allows lock-in detection. The two beams counter propagate and overlap at the iodine cell with the power of 5 mW and 0.16 mW, respectively.8. A photodiode monitors the probe beam power.
8A helpful tip: Look for the iodine fluorescence when first alignment the two beams. When the laser scans over the right frequency and the two beams are appropriately aligned, you will see a red flash line inside the iodine cell.
33

p

420 MHz

n ml

cb

q

k j

gfe

a

i

d

o

h

Figure 2.11: Iodine line 961 frequency spectrum. The feature a to q are the I2 hyperfine lines. The Doppler laser is locked to the lowering side of feature a.
The lock-ion amplification works as the following: The photodiode signal is first preamplified with an RF amplifier (RF BAY LNA-545), and it then mixes with the signal generator’s reference signal through a frequency mixer (Mini-circuit ZFM-4H-S+), the mixer output goes through a bias-Tee (Mini-circuit ZFBT-6GW+) and two low-passes (Thorlabs EF120 and a homemade filter). Finally, after an operational amplifier (Analog Device ADA4625), the signal feeds to a PID lockbox (designed by UMD Joint Quantu-
m Institute). Note that when scanning the laser over the iodine transition, the iodine signal can be maximized by optimizing the overlap of the probe and pump beam and relative power ratio. Also, the dc offset signal has to be tuned to the point that is least sensitive to environmental fluctuation (probe and pump beam relative pointing, polarization, etc.) to ensure long-term stabilization of the lock.
For modulation transfer lock, the iodine transition frequency equals the average frequency of the pump and probe beam:
34

-23 dBm
-104 -305

op amp PID

low pass Signal generator

Iodine cell

200 200

pre amp

*2

75

mirror beam dump quarter wave-plate half wave-plate

AOM (MHz) lens (mm) aperture

polarizing beam splitter
photodiode detector

Figure 2.12: Optical setup of the iodine lock. Red lines show the beam propagating, and blues are the control signal.

35

fiodine

=

fpump

+ fprobe . 2

(2.14)

Based on the iodine lock setup, we find the relationship between the iodine line frequency and

laser frequency:

fiodine = flaser + 2 × fDPAOM + fSPAOM/2.

(2.15)

2.8 Raman optics
Raman transition happens in a Λ-type three-level system. When two levels are virtually coupled to a third level, the system can be treated as an effective two-level system. It is widely used in trapped ions experiments to manipulate the qubit between different hyperfine ground states.
To drive qubit transitions on the hyperfine ground state, we use another frequency quadrupled continuous ECDL laser near 313 nm (Toptica DL-FHG pro) for coherent Raman manipulation. It is similar to the one used for Doppler cooling, except that the Raman laser has auto-alignment features. An electro-optical modulator (EOM) instead of direct diode current modulation is used to create the Pound-Drever-Hall (PDH) error signal for locking the UV cavity. The EOM option helps to suppress the relative in-
tensity noise (RIN) and the UV sidebands. The laser operates 80 GHz red-detuned to the 2S1/2 ↔2 P1/2 transition of 9Be+ for reasonable Raman Rabi frequency with small enough spontaneous emission from the P state. The laser is free-running, with the 626 nm red light frequency monitored by a wavemeter (HighFinesse WS8). In daily routine, the UV cavity outputs ∼250 mW 313 nm light under continuous operation.
The Raman optics setup is shown in Fig. 2.13. It’s first divided into two paths, one referred to as "Raman 1" and the other as "Raman 2" (σ± light). Raman 1 goes through a DPAOM (AOM1), providing a frequency shift of −166.5×2 MHz, and then a SPAOM (AOM 2) providing a frequency shift of -340 MHz. It enters the trap with propagation perpendicular to the magnetic field with polarization along the magnetic field to give a π polarized light. Raman 2 goes through a SPAOM
36

B = 120 G
125 Raman 2

df

125

1000 500

Raman 1 /Co Raman 2

1000 500

Lorem ipsum

dfdumds

-340 125

*2Lorem ipsum 125
-166.5

220

mirror d-shaped mirror quarter wave-plate half wave-plate

AOM (MHz) lens (mm) right-angle prism aperture

Raman Output

polarizing beam splitter

(incident angle 56°)

50/50 beam splitter (incident angle 45°)

photodiode detector

Figure 2.13: Illustration of the optical setup of the Raman beams.

(AOM3), providing a frequency shift of +220 MHz, and then a SPAOM (AOM4), providing a frequency shift of +125 MHz. It enters the trap with propagation along the magnetic field with linear polarization, providing an equal σ+/σ− polarized light. Raman 1 and 2 go into the trap 90°with respect to each other and generate a momentum kick along the axial trap direction. Raman 2 can also be switched to co-propagate with Raman 1 by manually tuning the half-waveplate after AOM 4 to reflect the beam at the P-
BS and overlap with Raman 1, which we name "Co Raman 2". The copropagating Raman transition does not couple to the ion’s motion and is used for diagnostic purposes when first setting up the beams. Raman 1 and 2 fulfill the 4f condition between the last AOM and the trap center, using a telescope of 500 mm/1000 mm doublet and 100 mm. We also set up anamorphic prisms pair between in the telescopes for beam shaping, and we obtain the elliptical beams with sizes of 190 × 21 µm2 on the ion plane. The po-
wer of the two beams entering the trap is 4.9 mW and 18.5 mW, respectively.

37

The default frequency difference between the two beams is equal to 1018 MHz, close to the frequency of the Zeeman qubit. When addressing the hyperfine qubit, the frequency shifting is completed on AOM 1, changing to −261.25 × 2 MHz. AOM 1,2,3 are driven by LabRAD DDSs through 2W RF amplifiers(Mini circuit ZHL-1-2W+) AOM 4 is driven by an arbitrary waveform generator (AWG Keysight M3202A) through a 5W RF amplifier (Mini circuit ZHL-5W-1+). The AWG modulation allows us to generate multi-tones for co-
ntinuous Raman sideband cooling (see chapter 4) and bichromatic laser fields for interaction between the qubits (see chapter 5).
2.9 Imaging optics
High-resolution microscopy finds its application in many subjects, including physics [99], biology [100], and semiconductor manufacturing [101]. In the field of cold trapped atoms and ions, microscopy techniques are essential for studying interacting many-body systems [99], ion-photon quantum networks [102; 103], as well as tweezer trapping of atoms and molecules [104; 105]. In our case, in order spin-state detection of a trapped ion qubit, we need to collect state-dependent fluorescence from the -
ions using an objective with low aberrations, high numerical aperture (NA), diffraction-limited performance, and wide field of view (FOV).
2.9.1 Imaging setup for the four-rod trap
We collect the state-dependent fluorescence from the ions using an imaging system in which one qubit state fluoresces resonantly under the detection light, and the other does not because the detection frequency does not resonate with it. The ion imaging system setup is illustrated in Fig. 2.14. It consists of a front 0.3 NA infinite conjugate objective and an f=250 mm focusing lens for first-stage imaging, a slit/iris at the intermediate focus for filtering, then a doublet (f =
38

50/100 mm)9 for second-stage imaging and a 70T/30R beam splitter to collect fluorescence on both the EMCCD camera (Andor Newton DU970P- BVF-094) and a photomultiplier tube (PMT Hamamatsu H10682-210). The first stage has a magnification of ∼ 7, and the second stage is about 3, leading to a total magnification of around 22.
The front objective has four fused-silica lens elements and is custom-made by Len Optics. The working distance is ∼28 mm , with diffraction-limited performance (Strehl ratio of 0.98) designed for an 8 mm fused-silica viewport. The objective is compatible with Thorlabs SM1 thread standard, which we use to build the rest of the assembly. To avoid stray light, we use a Thorlabs FGUV11 filter and a 315 nm bandpass filter (Semrock FF01-315/15-25), which reduce ∼ 20% of 313 nm transmission. And we cover-
 up the whole imaging system with black aluminum foils, leading to less than 0.2 ct/ms in the absence of the 313 nm light. We fold the beam path before the first image plane using a 45°mirror to save space so that the latter part of the assembly is vertical.
We find that the working distance is not long enough in the actual setup, even when using it with a 6 mm viewport. This means the objective case touches the viewport, and the image distance (first stage) is around 70% of the design. In this case, we shorten the image distance, so we can extend the object distance to compensate for the shortness of the working distance. Together with the faulty length of the viewport window, they cause a lot of spherical aberration, which is the most probable cause-
 for the loss of photons.10 We also observe astigmatism/coma from the ion images (see Fig. 2.19 (a)), which could be caused by tilting of the vacuum window, optical axis misalignment after the folding mirror and so on. For these reasons, we experienced difficulties improving spin detection efficiency, especially for multi-ion cases. A detailed photon collection calculation is discussed in Sec. 3.2.2, and we give a guideline of the procedures for aligning the imaging system in Appendix A.
The EMCCD camera we use has 1600×200 pixels with a pixel size of 16 µm × 16 µm. There’s
9The lenses we use are all plano-convex, made of UVFS, commercially available. The direction of the lenses is specially chosen to minimize aberration, such that the plano surfaces face the light traces with a larger NA.
10The other 0.46 NA custom-objective from Special Optics has the same issue of shortness of working distance
39

First stage magnification ~7

Ion
Vacuum window

Objective lens

First focusing

Filters

Iris (variable slit)

Second stage magnification ~3

Cross section
EMCCD camera

70T/30R beam splitter

PMT
Figure 2.14: Setup of the ion imaging system. The ion fluorescence goes through a 6 mm thick UV fused-silica (UVFS) window and is collected by a customized objective. Then the ion is imaged at the intermediate focus and final on both the PMT and EMCCD camera after a second stage magnification. The cross-section of the Lens Optics objective with the light traces is also shown in the figure.

40

an around 5°misalignment between the ion axial direction and the camera’s horizontal axis. To enable fast data cycling, we choose a region of interest (ROI) of 200 × 16 pixel during spin readout and bin the vertical axis. Each ion takes up around 5 × 5 pixels (80 µm × 80 µm), which the ideal airy disk diameter on the camera is estimated to be 28 µm × 28 µm, indicating large aberration. We can get ∼ 90% of single-shot detection fidelity for a single ion on the camera. The camera is not UV sensitive-
, so it is paired with a Photonis Cricket intensifier with a quantum efficiency between 25% and 30% at 313 nm and a photon-to-photon gain of up to 10,000.
2.9.2 New-design: Homebuilt deep UV microscope
To address the challenges we have in the current imaging system, we designed a 0.5 NA, finite conjugate objective using ZEMAX, a software package,(Fig. 2.15), which has a resolution of 250 nm, tested at the illumination of Be+ lamp (λ = 313 nm). Our design inherits the principles in Ref. [106], where a combination of convex spherical singlets focuses the light gradually, and a final concave lens corrects for the cumulative aberrations from the front elements. Our design can be adapted to various w-
avelengths with diffraction-limited performance, ranging from 200 nm to 1 µm through a simple modification of the final lens separation and refocusing. Hence the design can find wide applications in atomic and molecular imaging.
The system consists of six Ø2" commercially available singlets (LE4412-UV, SPX049AR.10, SPX049AR.10, SBX058AR.10, SPX055AR.10, SPC052AR.10), which are mounted sequentially. The design strategy is to use Ø2" lenses to achieve long working distance while maintaining a high numerical aperture (NA). Several singlets diffract the light rays gradually to compensate for the spherical aberration introduced by the viewport window, which converges again on the image plane. Blue lines in Fig. 2.15 illustrate-
 this process. The objective housing (Thorlabs SM2L30) is machined to a flat hat and chamfered at the two sides to allow maximal optical clearance of the incoming beams at 45◦. The separation between each pair of lenses is optimized with ray-tracing software (ZEMAX). During the assembling process, the lens spacings are defined by separating two
41

Obj

VW

UV microscope

Img

Vacuum

Ions

19.6 mm

262.926 mm

50 mm
Figure 2.15: Cross section of the home-built NA = 0.47 UV microscope design.

retaining rings without using specially machined spacers to a precision of 0.03 mm. The system is designed for a UV fused-silica viewport with a length of 8 mm and is compatible with a typical viewport length of 5 mm - 8 mm.
We perform a simulation for the imaging system using Zemax. Fig 2.16. (a) shows the on-axis point spread function (PSF), rendering a Strehl ratio (SR) of 0.998. (b) shows the corresponding modulation transfer function (MTF). Off-axis MTF The diffraction limited field of view (FOV) is 120 µm and focal depth is 1.2 µm.
We evaluate the performance of the UV microscope with a high-resolution test target (Newport HIGHRES01). We use a beryllium hollow cathode lamp(Hamamatsu L233-Be) as the light source illuminating the test target. A 315/15 nm bandpass filter (Semrock FF01-315/15-25) and a UV color glass bandpass filter (Thorlabs FGUV11) are used to maximize out-of-band blocking of the 9Be+ double-D lines near 313 nm. The scattered light from the test target is collected by our UV microscope and imaged on a CMOS cam-
era (BFS-PGE-63S4M-C). Fig. 2.17 shows the image of the test target. The features of group 9 have a good resolution, and the smallest feature corresponds to a bar width of 548 nm. The resolution is limited by uncorrected aberration and the different working distance of the double-D lines by 1.2 µm.
We derive the MTF of the optical system from the contrast of the lines with different pair
42

(a)

(b)

1.0

1.0

0.8

0.8

PSF

0.6

0.6

MTF

0.4 0.4
0.2
0.2 0

0

-1.08 -0.72 -0.36 0

0.36 0.72 1.08

0

(c)

Radial distance (µm)

1.0

on-axis 100 µm-Tangential 100 µm-Sagittal

320.0

640.0 9.6e2
(d)
1.0

1.3e3 1.6e3 1.9e3 2.2e3
Spatial Frequency (lp/mm)

2.6e3

2.9e3

3.2e3

0.8

0.8

Strehl Ratio

Strehl Ratio

0.6

0.6

0.4

0.4

0.2

0.2

0

0

20

40

60

80

100 120 140 160

Radial displacement (µm)

0

-3

-2

-1

0

1

2

3

Focus (µm)

Figure 2.16: Zemax simulation of the UV microscope performance.(a). On axis PSF at the focal point. (b). On axis, and 100 µm- Tangerntial/Sagittal MTF. (c) Strehl Ratio as a function of radial displacement (FOV). (d) Strehl Ratio as a function of focal depth.

43

(a)

(b)

11 µm

2.7 µm

Figure 2.17: (a) Image of the HIGHRES01, which correspond to the smallest feature of the standard resolution test target(Newport RES-01) (b) Zoomed-in features of the red boxed area in (a).

distance [107]:

MTF(ω) = Imax(ω) − Imin(ω) , Imax(ω) + Imin(ω)

(2.16)

where Imax(ω) and Imin(ω) are the local maximal and minimal intensity on the camera of the measured line pair. Every component of the optical system contributes to the overall MTF. We

assume that there’s no correlation between the MTF of each component, the MTF of the objective

can be written as:

MTF(ω)

MTFobj(ω)

=

, MTF(0)

(2.17)

where MTF(0) is the system MTF at low spatial frequency. We measure the paired contrast on the test target and extract the MTFobj(ω). In Fig.2.18 the blue dots show the measurement results. We model the fit of the sampled MTF with the following analytical function [108]:

√

2πab exp [−2π2b2ω2] + 2cd/ (1 + 4π2d2ω2)

MTFobj(ω) =

√

.

2πab + 2cd

(2.18)

44

MTF

LSF

1.0

0.7

0.6

0.8

Inverse Fourier transforom

0.5

0.6 0.4

0.4

0.2

0.0 0

200

400

600

lp/mm 800

1000 1200 1400

-0.002

0.3 0.2 0.1
-0.001

0.001

0.002

mm

Figure 2.18: Extracted MTF curve and the corresponding LSF calculated from inverse Fourier transform.

We can extract the line spread function (LSF) from the inverse Fourier transform of Eq.2.18 [108] and the corresponding point spread function(PSF) can be extrapolated from the deconvolution of LSF. We can extract the SR = 0.7 from the fit, which agrees with diffraction limit performance (see Fig. 2.18).

2.10 Background gas collision and defect molecule formation
Inelastic collisions of trapped ions with background molecular gases can lead to the formation of molecular ions through chemical reactions. The co-trapped molecules do not fluoresce under the atomic transition. The change of mass shifts the motional spectrum of a linear ion chain. For these reasons, the unwanted molecular ions turn out to be contaminants for large-scale quantum information processing with ion crystals.
After continuous laser-cooling of a few minutes, we observe formation which does not fluoresce under Doppler cooling light, with little ion position shift. This phenomenon indicates molecular ion (BeH+) formation due to inelastic collisions with background hydrogen gas [109], which excited state 9Be+ is especially easy to react with H2 compared to other Group II elements. To remove these hydrides, we apply the same low-RF evaporation process discussed in Section. 2.5.1, allowing dark ions not dire-
ctly interacting with the cooling laser to leave the trap. Fig. 2.19(a) shows camera
45

(a)
(b) 1.0
0.8 0.6 0.4

Evaporation

Be+ ion number (arb. units)

0.2 without PD τ = 12.4 mins with PD τ = 90.4 mins

0

20

40

60

80

100

120

Time (min)

Figure 2.19: (a) Purifying the ion chain with evaporation. Dark ions of BeH+ (yellow circles) formed after inelastic background gas collisions can be spilled out of the trap by applying the same evaporation method, leaving only bright atomic ions. We tune the evaporation duration according to the ion number so that only the dark ions will be ejected. (b) 9Be+ ion lifetime measurement. Red (blue) dots are the measured ion number as a function of time with (without) 266 nm PD light plotted on a loga-
rithmic vertical scale. The solid lines are exponential decay fit to the data.

46

images before and after this sequence, a chain of 20 ions can be purified, i.e., evaporating 4 molecular ions and leaving 16 bright atomic ions. However, we could not guarantee a deterministic number of ions with this method. And the process of ion reloading and evaporation takes longer, especially for large ion crystals. Therefore, it is crucial to dissociate the molecules and recover the ion qubits for large-scale quantum information processing with 9Be+.
Photodissociation (PD) of BeH+ has been demonstrated in a Penning trap experiment, using a 157 nm commercial excimer lase [109] via the B1Π ← X1Σ+ (v′′ = 0) transition. However, the UVFS viewports do not transmit 157 nm light, and deep UV photons could create patch potentials and affect the micromotion in the rf Paul trap. So we are looking for an alternate solution for BeH+ PD. Fig.3.1 shows the potential-energy curves of the lowest electronic states of BeH+, from an ab initio calculation [110]. -
Assuming that the calculation is to scale, we find that the A1Σ+ (v′ = 0) ← X1Σ+ (v′′ = 0) transition wavelength is around 261 nm, and a second 261 nm photon would bring the molecule to above the PD limit. In Section. 2.5.1, we describe a 532 nm ns pulse laser used for ablation loading. The 532 nm light can be conveniently doubled to 266 nm using a single-pass SHG setup with a BBO crystal. Since the BeH+ theoretical calculation has no better than nm accuracy, it’s worthwhile to try if this could h-
elp recover the atomic ions. We build the doubling optics and get >5 mW of 266 nm light, with 100 mW 532 nm input. Then we focus the light at the center of the trap with a beam size diameter of 50 × 550 µm2, covering the entire ion chain.
Surprisingly, the 266 nm light can partially recover the ion chain almost instantaneously(at most a few seconds), but the rest of the dark ions could not be recovered in a minute time scale. Fig. 2.19(a) shows the 9Be+ number decay with and without the 266 nm PD light. We extract the exponential decay time of τ1 = 12.4 mins at s = 1 Doppler cooling saturation parameter. In the presence of the 266 nm light, we increase the lifetime to τ2 = 90.4 mins which a factor of 7.5 improvement, which is highe-
r than that in previously reported literature [109](s = 0.3, PD light increases the lifetime by a factor of 4.4).
47

157 nm X - B

261 nm

266 nm

266 nm
?
261 nm

313 nm

Figure 2.20: Energy potentials of BeH+ low-lying electronic states adapted from [110].
48

We suspect that the remaining impurities in the ion crystal are BeO+ and BeOH+ due to reaction with water molecules [109; 111]. Since the apparatus has no built-in mass spectrometer, we use motional spectroscopy to measure the mass of the dark ion. The experimental sequences in the following:
1. Wait for one ion in a two-ion crystal to go dark, then probe the blue sidebands of the common mode and the stretch mode of the axial motion after ground state cooling.
2. Extract the dark ion mass using the measured motional frequencies. 3. Turn on the 266 nm PD light, wait for one minute and see if the dark ion recovers. Mysteriously, we found that the molecules we can or cannot dissociate are both BeH+ in 10 repeated measurements, and it’s almost 50/50 whether we can dissociate the molecule. One suspect is that the molecule forms in either a triplet or singlet state. The decay from triplet a3Σ+ to singlet ground state X1Σ+ (phosphorescence) is highly forbidden-
. Since the a3Σ+ state in weakly bounded [112], it’s possible that the PD channel of 266 nm light is from a3Σ+ to continuum, since the 266 nm photon does not have enough energy to excite the A ← X transition. Nevertheless, the BeH+ dissociation requires much further investigation. It’s an issue with Be+, which motivates cryogenic experiments11. To continue the study with BeH+ PD, one could use an ion trap-integrated high-resolution time-of-flight mass spectrometer (TOF-MS) [111] to analyze the mol-
ecule species, a tunable deep UV pulse laser to scan over the possible molecular transitions, etc.
11The other motivation is collision-induced ion loss
49

3 | Be+ qubit manipulation
The ion we choose to work with is singly-charged beryllium (9Be+), which is an excellent element for trapped ion quantum information processing. It has many advantages: a simple level structure allows efficient laser cooling; its light mass emerges fast quantum gates; the ground-state hyperfine structure allows for convenient qubit manipulation and detection. These properties have enabled quantum gates with the highest fidelity across different platforms [113; 114].
In this chapter, we first discuss the ground electronic state of 9Be+ as qubits and its interaction with a static magnetic field. We then show the physics in Doppler cooling and spin state detection through resonant light via the 2S1/2 ↔2 P3/2 transition. We discuss coherent manipulation of the qubit states using an external microwave field or laser drives through a two-photon Raman process, in which we compare the experimental and calculated Rabi frequency in both scenarios and the ac Stark shift-
 under the laser field. Although certain properties have been mentioned in previous chapters, here we explain them in more detail and support them with theory and numerical calculations.
3.1 Be+ ground state as qubit
9Be+ has nucler spin I = 3/2, and its ground electronic state is the 2S1/2 state. The first excited states 2P1/2 and 2P3/2 are also involved in the experiment with a fine structure splitting of 197.2 GHz [115]. Fig. 3.1 shows the energy level diagram of 9Be+. We first consider the hyperfine
50

Raman Weak pumping
Doppler/detection

223.4
Δ

f = 1207.496843 MHz
F=1

76.2 86.5

0

+1

F=2

76.4

69.1

+2

+1

-1

0

102.8

86.7

Figure 3.1: Atomic engery level of 9Be+ involved in the experiment.

51

structure of the ground electronic state 2S1/2. As a result of the nuclear angular momentum I coupled to the electron angular momentum J, the total angular momentum is F = J + I. The Hamiltonian describing the ground state manifold of 9Be+ under an external z-direction magnetic field Bz is:

HI = hAhfsI · J − (µJ + µI ) · B 1
= hAhfs mI mJ + 2 (I+J− + I+J−) + µB(gJ mJ + gI mI ),

(3.1)

which Ahfs = -625.009 MHz [116] is the magnetic dipole hyperfine constant for 2S1/2 state, µB is the Bohr magneton, gJ and gI = 2.134 × 10−4gJ [115] are electron and nuclear g-factors, mJ and mI are electron and nuclear magnetic quantum numbers, J± and I± are ladder operators for angular momentum and have the relations:

j±|jm⟩ = [j(j + 1) − m(m ± 1)]1/2 |jm ± 1⟩.

(3.2)

We can diagonalize HI and write the eigenstates in terms of

1

1

1

1

|F, mF ⟩

=

α |mI

=

mF

+

2 , mJ

=

−⟩ 2

+

β |mI

=

mF

−

2 , mJ

=

+ ⟩, 2

(3.3)

with the transition rules ∆mI = 0,∆mJ = 0, ±1. For 2S1/2 and 2P1/2 state, the eigenstate |F, mF ⟩ energy is given analytically by the Breit-Rabi formula:

E|F,mF ⟩

=

− Ahfs 4

+

gI µBmF B

±

Ahfs(2I 4

+

1)

1 + 4mF x + x2

1/2
.

2I + 1

(3.4)

The zero field hyperfine splitting between F = I + 1/2 and F = I − 1/2 is ∆Ehfs =

Ahfs

I

+

1 2

;

x = µB (gJ − gI ) B . ∆Ehfs

(3.5)

52

Energy (h MHz) dE(MHz)/dB(G)

(a) 1000
500
0
- 500

(b) 1.5 0.5
- 0.5

|2,- 2> |2,- 1> |2,0> |2,1> |2,2> |1,- 1> |1,0> |1,1>

- 1.5

0

100

200

300

0

100

200

300

Magnetic field (G)

Magnetic field (G)

Figure 3.2: (a)Energy (b) energy sensitivity of the eight eigenstates in 2S1/2 manifold as a function of the external magnetic field.

States |2, 2⟩ |2, 1⟩ |2, 0⟩ |2, −1⟩ |2, −2⟩ |1, 1⟩ |1, 0⟩ |1, −1⟩

2S1/2 |mI = 3/2, mJ = 1/2⟩ 0.609|3/2, −1/2⟩ + 0.793|1/2, 1/2⟩ 0.793|1/2, −1/2⟩ + 0.609| − 1/2, 1/2⟩ 0.912| − 1/2, −1/2⟩ + 0.410| − 3/2, 1/2⟩
| − 3/2, −1/2⟩ 0.793|3/2, −1/2⟩ − 0.609|1/2, 1/2⟩ 0.609|1/2, −1/2⟩ − 0.793| − 1/2, 1/2⟩ 0.410| − 1/2, −1/2⟩ − 0.912| − 3/2, 1/2⟩

2P1/2 |mI = 3/2, mJ = 1/2⟩ 0.695|3/2, −1/2⟩ + 0.719|1/2, 1/2⟩ 0.844|1/2, −1/2⟩ + 0.536| − 1/2, 1/2⟩ 0.934| − 1/2, −1/2⟩ + 0.357| − 3/2, 1/2⟩
| − 3/2, −1/2⟩ 0.719|3/2, −1/2⟩ − 0.694|1/2, 1/2⟩ 0.536|1/2, −1/2⟩ − 0.844| − 1/2, 1/2⟩ 0.357| − 1/2, −1/2⟩ − 0.934| − 3/2, 1/2⟩

Table 3.1: 2S1/2 and 2P1/2 Zeeman manifold |F, mF ⟩ decomposed in the |mI , mJ ⟩ basis.

Fig. 3.2 shows the eigenenergies and energy sensitivities ∂E/∂B with the increase of the magnetic field. Each crossing point in (b) correspond to first-order magnetic field insensitive transitions.
In Table 3.1 we list the Zeeman states decomposition in the |mI, mJ ⟩ basis for 2S1/2 and 2P1/2 state at B0 = 119.446G. Note that transitions |1⟩ ↔ |2⟩ fulfilling |α1|2 = |α2|2 and |β1|2 = |β2|2 are first-order insensitive to magnetic field ∂E/∂B = 0 [117]. Listing the decomposition in 2S1/2 will be used to calculate the matrix elements of the magnetic dipole (MW transition).
Under B0, there are two sets of qubits on the ground electronic manifold which are commonly used in the experiment. The stretch state qubit |F = 2, mF = 2⟩ ↔ |F = 1, mF = 1⟩, which is first-

53

Transition |2, 2⟩ ↔ |1, 1⟩ |1, 1⟩ ↔ |2, 0⟩ |2, 0⟩ ↔ |1, −1⟩ |2, 1⟩ ↔ |1, 1⟩

Frequency (MHz) 1018.007
1207.495843 1370.290 1120.806

Description Zeeman qubit hyperfine qubit MW shelving MW repump

Magnetic field sensitivity (2π × h) ∂E/∂B = -1.764 MHz/G ∂2E/∂B2 = 6.097 kHz/G2 ∂E/∂B = 1.291 MHz/G ∂E/∂B = -0.7258 MHz/G

Table 3.2: The transitions in 2S1/2 related to the experiment.

order sensitive to the magnetic field but could be easily accessed after Doppler cooling and initial state preparation (referred to as "Zeeman qubit"). And the "hyperfine qubit" |F = 2, mF = 0⟩ ↔ |F = 1, mF = 1⟩, which is first-order insensitive to the magnetic field. Table 3.2 shows the transition frequencies involved in the experiment and their sensitivity to the magnetic field. Among them, the MW shelving transition is used for increasing the detection fidelity of the hyperfine qubit, with MW p-
ulses bringing |1, 1⟩ state to |2, 2⟩ bright state, and shelving |2, 0⟩ to a darker state |1, −1⟩. The MW repump transition can be used as an MW-assisted repump in sideband cooling through the D2 line to suppress photon recoils, eliminating direct coupling from |2, 1⟩ state to 2P3/2 which is merely 120 MHz red-detuned from the Doppler transition.
For the 2P1/2 state, one can calculate the Zeeman splitting using Eqn. 3.1 similar to the 2S1/2 state. Since it’s not directly involved in the experiment, the transition frequencies are not given here, which can be found in [118]. We yet give the state decompositions of 2P1/2 state in3.1 since they will help calculate the matrix element of the D1 line as pumping or near-detuned cooling. Note that, although off-resonant Raman process couple to both 2P1/2 and 2P3/2 states, when calculating the Raman-
 transition Rabi frequencies based on the electric dipole matrix elements, we can decompose the excited states in the |mI, mJ ⟩ basis at the far-detuned limit (see Section. 3.3).
For the 2P3/2 state, the Hamiltonian of the hyperfine interaction has an additional quadrupole term:

3(I · J )2 + 3/2(I · J ) − I(I + 1)J(J + 1)

Hq = hBhfs

2I(2I − 1)J(2J − 1)

.

(3.6)

54

Therefore, no analytical solution exists, and the Zeeman sublevels’ frequency can only be calculated numerically. However, the 2P3/2 state hyperfine interaction is small compared to the Zeeman effect in the intermediate field, and we enter the so-called "high-field region". Thus the states can be written in the basis of |mI, mJ ⟩, and the energy splitting between different |mJ ⟩ states increase approximately linearly with the external magnetic field. Under B0, we calculate the Zeeman splitting to -
be 223 MHz, with the hyperfine splitting less than 1 MHz [119].
3.2 Doppler cooling and state preparation and
measurement (SPAM)
3.2.1 Doppler cooling of ions
Doppler cooling of atoms was first demonstrated by the NIST group using Mg+ confined in Penning trap [120], and the Heidelberg group using Ba+ confined in rf Paul trap [121]. It has become a key part of AMO experiments since then. In short, Doppler cooling utilizes the Doppler effect: the atom absorbs a red-retuned photon, changing it’s momentum according, and goes into the excited state, then emits a photon in a dipole pattern that has an average momentum of zero in space. Therefore, scattered ph-
otons take the atom’s energy away, and we reduce the momentum, "cool down" the atom to a very low velocity. The following gives a simple derivation of the cooling process and its limit. It follows the derivation in [56]. In the end, we provide a general expression of three dimensional recoil limit, considering the cooling laser k vector and the dipole radiation pattern.
First, we consider that the ion is in the weak confinement limit, which means that the cooling transition linewidth is much larger than the trapping frequency Γ ≫ ω [122]. So that we can assume a continuous cooling force depending on the ion’s velocity v.
Deriving from optical Bloch equation [123], the excited state population under external drive
55

has the steady population:

s/2 ρee(t → ∞) = 1 + s + (2δeff /Γ)2 ,

(3.7)

where s = I/Isat is the saturation parameter, δeff = ∆−kv is the effective laser detuning considering the Doppler effect. For circular polarized light, the saturation intensity Isat equals to:

π hcΓ Isat = 3 λ30 ,

(3.8)

where λ0 is the transition wavelength. We calculate the saturation intensity Isat = 77 mW/cm2. Assume kv ≪ ∆, the average cooling force is:

Fc = ℏkΓρee ≈ F0(1 + κv),

(3.9)

with:

s/2

8k∆/Γ2

F0 = ℏkΓ 1 + s + (2∆/Γ)2 , κ = 1 + s + (2∆/Γ)2 .

(3.10)

We first make an assumption that cooling and heating are isotropic. So the average cooling rate

writes as:

E˙ c = ⟨Fcv⟩ = F0 ⟨v⟩ + κ v2 = F0κ v2 .

(3.11)

Now consider the heating process from photon recoils:

E˙ h

=

1 2m

d dt

p2

= E˙ abs + E˙ em

= E˙ abs(1 + ξ)

≃

1 2m

(ℏk)2Γρee

(v

=

0)(1

+ ξ),

where ξ = 1 under the isotropic assumption.

(3.12)

56

At the cooling limit, the cooling and heating process reach an equilibrium:

m

v2

= ℏΓ (1 + ξ)

Γ (1 + s)

2∆ +

,

8

2∆ Γ

(3.13)

√ which the minimum energy will be reached with laser detuning ∆ = Γ 1 + s/2 and s = 0:

1 m

v2

= ℏΓ .

2

min 4

(3.14)

During the experiment, we choose the laser detuning −Γ/2 and ramp down the power towards zero to approach the cooling limit. Now we introduce the 3 dimensional trap and assume an isotropic energy distribution. We have:

1 m
2

vi2

=

ℏΓ 12

=

(n¯i

+

1 2 )ℏωi,

(3.15)

where i = x, y, z, n¯i is the mean phonon number in i the direction, and ωi is the secular frequency in the i direction, with this the lowest n¯ that can be reached for Doppler cooling is n¯ = Γ/(12ω) − 1/2.
Now consider the actual configuration of the laser beam k vector and dipole radiation pattern. We let the velocity and laser beam k vector in three directions:

vx = αvxˆ, vy = βvyˆ, vz = γvzˆ kx = α′kxˆ, ky = β′kyˆ, kz = γ′kzˆ,

(3.16)

where α2 + β2 + γ2 = α′2 + β′2 + γ′2 = 1. The radiation pattern has a photon recoil component in three directions that ξx + ξy + ξz = 1. Then we have the general equation when cooling and heating balance in three directions:

57

m

v2

αα′(αα′

+

ββ′

+

γγ′)

=

ℏΓ (α′2 4

+

ξx)

m

v2

ββ′(αα′

+

ββ′

+

γγ′)

=

ℏΓ (β′2 4

+

ξy )

m

v2

γγ′(αα′

+

ββ′

+

γγ′)

=

ℏΓ (γ′2 4

+

ξz ),

(3.17)

where the sum of the three equations has the same form as Eqn. 3.14 under the isotropic assumption.

Fig. 3.3 (a) shows the experimental configuration of the Doppler cooling beam and dipole emission

pattern.

From

the

incident

angle

of

the

Doppler

beam

we

have

α′

=

β′

=

1 2

,

γ′

=

√1 2

.

The σ± circular polarized photon has the radiation pattern of a rotating dipole with dP/dΩ ∝

1+cos2 θ, and π polarized photon has the radiation pattern of an oscillating dipole dP/dΩ ∝ sin2 θ,

and polarization of the two-photon states are:

|kπ⟩ = − sin ϑ|ϑˆ⟩

|kσ ⟩

=

eiφ √

(cos

ϑ|ϑˆ⟩

+

2

i|φˆ⟩).

(3.18)

The average component of the emission recoil kick along the x-axis (B field direction) of σ± can be calculated as:

ξ=

x2dP =
dP

cos2 θ(1 + cos2 θ)dΩ =
1 + cos2 θdΩ

π 0

cos2 θ(1 + cos2 θ)

π 0

(1

+

cos2

θ)

sin

sin θdθ θdθ

.

(3.19)

The result ξ = 2/5 matches the result in [124]. So that the recoil components onto the three

trapping axes are ξz = (1/2) × (2/5) + (1/2) × (1 − 2/5) = 1/2, ξx = ξy = 1/4. So we have

α

=

β

=

1 2

,

γ

=

√1 . 2

And

the

cooling

limit

in

three

directions

are:

n¯x = n¯y = Γ/(16ωx,y) − 1/2 n¯z = Γ/(8ωz) − 1/2. 58

(3.20)

(a)
B
x y

Doppler cooling

(b)

Radiation 45° z Pattern

0.3 NA

Ω’ θ0 θi

45°

Figure 3.3: (a) Doppler cooling beam and the dipole radiation pattern of σ+ photon. (b) Illustration of photon collection solid angle.

Figure 3.4: Photon counts as a function of detection light power on resonance and -20 MHz detuned.
As discussed, Doppler cooling of 9Be+ requires only one laser beam, σ+ polarized, red detuned to 2S1/2, |F = 2, mF = 2⟩ ↔ 2P3/2, |3, 3⟩ cycling transition that the excitation to 2P3/2, |3, 3⟩ can only decay back to the 2S1/2, |2, 2⟩. The cooling optics setup has been detailed in Section. 2.6.
We calibrate the saturation power of the Doppler transition in our experiment. We can fit the
59

detection counts under various laser power under the same detuning:

nc

∝

1

+

P /Psat

.

P/Psat + (2∆/Γ)2

(3.21)

In Fig. 3.4, we measure the detection counts as a function of the power of the detection light with zero detuning and -20 MHz detuning. Using Eqn.3.21 gives a saturation power of Psat = 8.86 µW and 8.65 µW respectively. Then we can calculate the saturation intensity of the beam:

Isat

=

Psat πw02

.

(3.22)

Here we assume even intensity in the area of πw02, which w0 = 60 µm, taking into account the finite length of the ion chain in this measurement. The calculated Is′at = 77 mW/cm2, which agrees with with the two-level atom theoretical prediction (see Eqn. 3.8) [123].

3.2.2 Spin state preparation and detection of Be+

Figure 3.3 (b) shows the photon collection angle of the 0.3 NA objective, now we calculate the photon collection efficiency of the objective: θ0 = π/4 is the angle of the collection direction, objective NA = sin θi = 0.3, The photon collection efficiency R = Ω′ dP/ Ω dP , which Ω is the solid angle of the complete sphere and Ω′ is the solid angle of the objective. We can write it explicitly in spherical coordinates:

R(θ0, θi) =

(

(1 θ0+θi
θ0−θi
2π

+ cos θ2)dθ

ϕ(θ) −ϕ(θ)

π 0

(1

+

cos

θ2)dθ

dϕ)

.

(3.23)

It’s not trivial to get the integral interval of the azimuthal angle. The coordinate value of points A and B in Cartesian coordinates are (sin θ0, 0, cos θ0) and (sin θ cos (ϕ(θ)), sin θ sin (ϕ(θ)), cos θ), respectively. Since the angle become OA and OB is θi, we have the following relationship from the cosines law:
60

1.2 GHz

Figure 3.5: Single ion state detection photon counts histogram for bright and dark states, repeated 100 times.

ϕ(θ) = arccos cos θi − cos θ0 cos θ . sin θ0 sin θ

(3.24)

We can use Eqn. 3.23 to numerically calculate the collection efficiency Rc(π/4) = 2.57 %. We also calculate the collection efficiency at θ0 = 0 and π/2 to be Rc(0) = 3.37% and Rc(π/2) =

1.77%.

So we can calculate the ideal collected photon count rate of on-resonant detection:

s/2 nc = 1 + s ΓRcRQE(1 − L),

(3.25)

where we use s = 0.8 saturation parameter, the PMT quantum efficiency RQE = 25%, loss in the optical path including the beam spliter1, two filters, and several lenses is around L = 50%. We should expect nc = 81 cts/ms. However, in the experiment We collected 18 counts in 1 ms on the PMT on average for a single ion on the bright state, which is only 25% of the expected value. In contrast, the dark counts are ∼ 2 on average, limited by the scattering of 313 nm detection light
1When we send 70% of the light to the PMT on the last beam splitter.

61

in the trap2. Nevertheless, we still get a single shot detection fidelity of ∼98 %. As shown in Fig. 3.5, we fit the histogram of detection photon counts of ions in bright and dark states with a Poissonian distribution. Then we can find a discriminator nth such that if a single shot detection counts n < nth (n ⩾ nth), the ion is determined to be in the dark(bright) state. The detection fidelity is:

Fd = 1 − (ϵd + ϵb)/2,

(3.26)

where ϵd and ϵb are the dark and bright states’ error rates. Besides this simple threshold method, one can further use a maximum likelihood-based method [125] or use an adaptive Bayesian readout scheme [125; 126] to determine the fidelity, making use of the arrival-time information of the photons.
The reasons for unexpected photon loss of ∼ 75%remain a mystery in the experiment setup. The potential causes include the following:
1. The faulty imaging system. Because the objective working distance is wrong, the aberration will result in a wider distribution of photons in space, some might not be collected by the PMT.

2. The polarization of the detection light was not tuned to optimal.

3. Micromotion compensation has not been quantitatively calibrated, which micromotion sidebands would induce loss in fluorescence counts.
Apart from fixing the imaging, the implementation of MW shelving and D1 line pumping will also significantly improve SPAMs, as discussed. Numerical simulations of photon count distribution starting from different Zeeman state and SPAM errors under off-resonant pumping and imperfect polarization are detailed in Section. 6.6 in [71] and Section. 6.3 in [127].
2We believe the scattering comes from the reflection of the opposite vacuum window scattered on the surface of the trap holder. We address this issue by putting color glasses in front of the trap holder while not blocking the incident light.
62

3.3 Single qubit operation
Single qubit operation can be done with three methods in the experiment: microwave, copropagating Raman, and counter-propagating Raman. In this section, we derive the first two in detail, which do not couple to the ions’ motion. We also show results of single ion Rabi flopping with Raman/MW and compare them to calculations.

3.3.1 Raman transition
Qubit encoded in the Zeeman sublevels of the hyperfine ground state has near infinite relaxation time (t ∼ 1012 s) [62], with the decay process dominated by the magnetic dipole (M1) interaction. Although the transitions between hyperfine ground states are not electric dipole-allowed, We can perform coherent operations between two hyperfine states using a two-photon Raman process, which couples the two qubit states off-resonantly to intermediate excited states via electric Dipole (E1) transitions. -
Using effective Hamiltonian theory [128], the Rabi frequency of the Raman transition in a three-level system equals:

ΩReiϕ

=

ei(ϕ1

−ϕ2

+

π 2

)

4ℏ2

i

↑ d⃗ · E2ϵˆ2 i

i d⃗ · E1ϵˆ1 ↓ /∆i,

(3.27)

where E1,2, ϕ1,2, and ϵˆ1,2 are the electric field amplitudes, phases, and polarizations of the two

Raman beams, d⃗ is the electric dipole operator. Here, we define the Raman transition between two

hyperfine levels in 9Be+ ground state: |↓⟩ ≡ |F = 2, mF ⟩ and |↑⟩ ≡ |F = 1, m′F = mF ± 1⟩, |i⟩ are intermediate excited states in the 2P1/2 and 2P3/2 manifolds.

For us, it’s critical to calculate the Raman Rabi frequencies between different hyperfine levels

and compare them with the experimental parameters, which will be beneficial to diagnose the

experiment. Thus, a thorough calculation of the relative electric dipole interaction strength and

the Rabi frequencies is an important subject: The strengths’ values can vary several times and

63

have opposite signs, leading to a relative π phase shift. In the case of 9Be+, it’s notable that these quantities can be different at the low and intermediate fields. Here, we give a detailed derivation of the electric dipole elements and Rabi frequencies of Raman transitions, mostly following [129; 124].
The Rabi frequency characterizes the electric dipole transition strength can be written as:

Ω = −d⃗E · ϵˆ/ℏ.

(3.28)

The polarization vector ϵ can be rewritten in terms of left circular (σ−), linear (π), and right circular (σ+) polarizations, so that ϵˆ = e−1σˆ− + e0πˆ + e+1σˆ+, with |e−1|2 + |e0|2 + |e+1|2 = 1. And d⃗ can also be expressed in the spherical basis:

1
d⃗ = (−1)qdqeq
q=−1

(3.29)

Note

that

the

light

intensity

I

=

1 2

ϵ0cE2.

Then

the

Rabi

frequency

of

the

electric

dipole

transition

between excited state |LJF m⟩ and ground state |L′J′F ′m′⟩ is3:

1
Ω(|LJ F m⟩ , |L′J ′F ′m′⟩) = (−1)q+1eq
q=−1

2I ϵ0cℏ2

⟨LJ F

m|dq|L′J ′F

′m′⟩

.

(3.30)

According to the Wigner-Eckart theorem, a general coupling term between the two states can be written as:

F m Tq(k) F ′m′ = ⟨F ′m′kq | F m⟩ F T (k) F ′





F k F′

=

(−1)F −m

⟨F

∥Tk∥

F

′⟩

 

, 

−m q m′

(3.31)

3Here we first assume F is a good quantum number, which means the Zeeman interaction is much weaker than the hyperfine interaction. The JI coupling is generally true for heavier atoms in a low magnetic field.

64

where k = 1, q = 0, ±1 for the E1 transitions. And the reduced matrix element can be written in terms of the 6j symbol:

(j1j2) j T (k) (j1′ j2′ ) j′ =(−1)j1+j2+j′+k j1 T (k) j1′





(2j

+ 1) (2j′

 
+ 1)

j1

j

j2

 

.

 

j′

j1′

k

 

(3.32)

We apply this formula twice for both JI and ls coupling. And note that for the E1 transition ⟨l|d|l′⟩ equals to:

√ ⟨L∥d∥L′⟩ = 2L + 1

3ε0ℏλ3Γ

1/2
,

8π2

(3.33)

where λ, Γ are the transition wavelength and decay rate. So that Eqn. 3.30 can be written as:

1

Ω(|LJF m⟩ , |L′J′F ′m′⟩) =

(−1)q+1+F −m+J+I+F ′+L+S+J′ eq

q=−1

3λ3ΓI 4π2cℏ

1 2

× (2F + 1) (2F ′ + 1) (2J + 1) (2J′ + 1) (2L + 1) .









F

1 F′

 

J

F

I

 

L

J

S

 

×







−m q m′

 

F′

J′

1

 

J′

L′

1

 

(3.34)

In the case of an intermediate field, we can expand |F, mF ⟩ in the |mI, mJ ⟩ basis (shown in Table 3.1 ) and sum up the relative ls-coupling terms. The |mI, mJ ⟩ basis is convenient, especially for Raman transitions when the detuning is much larger than the hyperfine splitting, so only the ground state decomposition is of our interest. In the case of resonant D1 line transitions, it’s more complicated since we need to decompose in |mI, mJ ⟩ basis for both S1/2 and P1/2 states. Table 3.3 gives the-
 relative coupling strength of the optical pumping transition of interest under zero field and intermediate field of B = 119.446 G with σ+ polarized light. We then calculate the Raman transition strength of the Zeeman, hyperfine and shelving transition at both fields in the scenario

65

Component
Detection Repumper Far-detuned D1 pump 1 D1 pump 2

Transition
2S1/2 |F = 2, mF = 2⟩ ↔ 2P3/2 |mI = 3/2, mJ = 3/2⟩ 2S1/2 |F = 2, mF = 1⟩ ↔ 2P3/2 |mI = 3/2, mJ = 1/2⟩ 2S1/2 |F = 1, mF = 1⟩ ↔ 2P3/2 |mI = 3/2, mJ = 1/2⟩
2S1/2 |F = 2, mF = 1⟩ ↔ 2P1/2 |F = 2, mF = 2⟩ 2S1/2 |F = 1, mF = 1⟩ ↔ 2P1/2 |F = 2, mF = 2⟩

Coupling strength B=0, B√= 119.446 G
+1/2 3, +0.351 +1/2, +0.458 +1√/2, +0.793
+1/√6, +0.497 +1/ 2, +0.648

Table 3.3: The relative coupling strength of optical pumping transitions under σ+ light.

that π light acts on the F=1 states and σ+/σ− light acts on the F=2 states. The coupling strength is given in Table 3.4. It should be noted that there is a π phase shift between the Zeeman and hyperfine/shelving transition. The hyperfine Rabi frequency is ∼ 40% (∼ 60%) of the Zeeman Rabi frequency at zero (intermediate) field. Specifically, for the Zeeman qubit at B=119.446 G, the full form of Rabi frequency can be written as:

3λ3Γ Ω↓,↑ = 0.351 4π2cℏ

I1

I2 2

4∆

ωF (∆ −

ωF

)

.

(3.35)

Here, we already assume that Raman 1 is π-polarized and Raman 2 has an equal σ+/σ− component. Γ is the decay rate of the excited state4, ωF is the excited state fine-structure splitting, ∆ is the detuning from the 2P1/2 state.
We achieve a Rabi frequency of 171 kHz on the Zeeman qubit using −80 GHz of detuning

from the D1 line, Raman 1 and 2 power of 4.9 mW and 18.5 mW. Assume the laser beam size

of 190 × 21µm2, Eqn. 3.35 gives a Rabi frequency of 177 kHz, which is almost identical to

the experimental observation. The coincidence of Rabi frequencies justifies that our beam size

estimation is accurate to within 10%.

Fig. 3.6 shows one of the Rabi flopping data of co-propagating Raman transition of the Zeeman

and hyperfine qubits taken in the lab. The fitted Rabi frequencies are 325 kHz and 187 kHz. The

ratio of ∼ 60% between the two transitions, both with the beam pointing optimized, matches the

4For heavier atoms the different decay rates between P1/2 and P3/2 needs to be considered.

66

(a)
(b)
Figure 3.6: Typical co-propagating Raman Rabi flopping for (a) Zeeman and (b) hyperfine qubits. The blue dots are the experimental data, error bar denotes one standard deviation under quantum projection noise. And black solid lines are sinusoidal fits to the data, which give Rabi frequencies of ΩZ/(2π) = 325 kHz and Ωh/(2π) = 187 kHz, respectively. Red line is the numerical simulation of the hyperfine Rabi flopping under micalibrated Zeeman qubit frequency (see Text).
67

Component
Zeeman Hyperfine Shelving

Transition
|F = 2, mF = 2⟩ ↔ |1, 1⟩ |2, 0⟩ ↔ |1, 1⟩ |2, 0⟩ ↔ |1, −1⟩

Coupling strength B=0, B√= 119.446 G
+1/ 6, +0.374 -1/6, -0.227 -1/6, -0.117

Table 3.4: The relative coupling strength of Raman transitions. The polarization of the Raman beams configuration is specified in the main text.

theoretical prediction as shown in Table 3.45. The hyperfine Rabi flopping shows sign of coherent error, possibly coming from the limited
transfer fidelity of |2, 2⟩ ↔ |1, 1⟩ transition due to Zeeman qubit frequency miscalibration caused by magnetic field fluctuation, which can be improved using composite pulses [130] or counter-diabatic drives [131]. To verify our hypothesis, we numerically simulate the Rabi flopping of the hyperfine transition. We use the experimental parameters of Hyperfine and microwave Rabi frequencies of 187 kHz and 25 kHz. And we assume an MW detuning of 7 kHz from the Zeeman qubit transition. We plot the bri-
ght state population along with the measurement in Fig. 3.6 (b). A good way to quantify the extent of agreement between the measurement values and the fitting function is by calculating the reduced chi-square [132]. We find better agreement with the measurement results using the fit considering coherent error (χ2 = 13 ± 0.19). In contrast, the sinusoidal fit has χ2 = 27 ± 0.19.

3.4 Discussion on ac Stark shift
Atomic levels are subjected to frequency shifts in a time-varying (ac) electric field, referred to as an ac Stark shift. Understanding the differential shifts on the qubit states is an important subject, in which a transition with a larger shift would be more susceptible to σz error due to intensity fluctuations. In this section, we provide a detailed calculation of the ac Stark shift on Zeeman and
5When hyperfine transition beam is optimized, the Zeeman Rabi frequency drops to 220 kHz without re-optimizing the beam, indicating beam steering of the DPAOM when shifting frequencies.
68

hyperfine qubits and compare it with experimental results. We consider the Stark shift from the Raman beams on any hyperfine ground state |m⟩, in the
far-detuned limit ∆ ≫ Γ, the Stark shift on |m⟩ can be written as:

1 δ (m) =
4ℏ2 j i

m d⃗ · Ejϵˆj i

2
/∆i,

(3.36)

where j = 1, 2 represents the two Raman beams, |i⟩ denotes excited states coupled to |m⟩, ∆i is the laser detuning from the |i⟩. We consider the following scenario, which are the three Raman transitions used in the experiment: The Raman transition acts on |↓⟩ ← |↑⟩ with:

|↑⟩ = αr |mJ = −1/2, mI = mF + 1/2⟩ + βr |mJ = +1/2, mI = mF − 1/2⟩ |↓⟩ = αb |mJ = −1/2, mI = mF + 1/2⟩ + βb |mJ = +1/2, mI = mF − 1/2⟩ , on F = 1 and F = 2 manifold, respectively. The Raman 1 has the polarization of:

(3.37)

ϵˆ1 = rππˆ + r−σˆ− + r−eiϕσˆ+, |rπ|2 + 2|r−|2 = 1 ϵˆ2 = b−σˆ− + b+σˆ+, |b−|2 + 2|b+|2 = 1,

(3.38)

where Raman 1 is perpendicular to the magnetic field and can only generate π light or an equal

combination of σ+/σ− light, Raman 2 is paralleled to the magnetic field and can only generate σ+ and σ− light. Note that for a single beam acting on |g⟩, Eqn. 3.36 can be written as [133]:

δ(m) =

g2 3∆

ϵ2π + 2ϵ2−

g2 +
3 (∆ − ωF )

2ϵ2π + ϵ2−

+ 2 g2α2 3

ϵ2+ − ϵ2−

1

1

−

,

∆ ∆ − ωF

(3.39)

where g = E 2P3/2, F = 3, mF = 3 d⃗ · σˆ+ ↓ /2ℏ, so the Stark shift between the two qubit

states can be written as:

69

δ(↑) − δ(↓) = gr2 3

1

1

−

∆ ∆ − ω0

+ gr2 3

3 2

rπ2

+

1 2

1

1

−

∆ − ωF ∆ − ωF − ω0

+

2gb2 3

b2−

1

1

−

∆ + ω0 ∆

+

gb2 3

b2−

1

1

−

∆ − ωF + ω0 ∆ − ωF

+

2 3

gb2

b2+ − b2−

αr2

1

1

−

∆ + ω0 ∆ + ω0 − ωF

− αb2

1

1

−

∆ ∆ − ωF

, (3.40)

where ω0 is the qubit frequency. For the Zeeman qubit, under the field of B = 119.446 G, αr = 0.793,

αb = 0. If we assume that ω0 ≪ ωF , then the ac Stark shift between the two states equals:

δz

=

2 3

αr2

gb2

(b2−

−

b2+)

ωF ∆(∆ −

. ωF )

(3.41)

This term is zero when Raman 2 is also linearly polarized(|b+| = |b−|). However, although the assumption ω0 ≪ ωF is generally true for heavier atoms (e.g. for 171Yb+ ω0/ωF = 10−4 ). For 9Be+ ω0/ωF ∼ 10−2, so the residual Stark shift needs to be considered. When rπ = 1, to make δ = 0, b+ and b− must fulfill the following equation:

gr2 2

+ gb2b2−

∆2 + (∆ − ωF )2

gr2

+

gb2 2

b2−

+

∆ωF ω0(∆ − ωF

) αr2gb2

b2+ − b2−

= 0.

(3.42)

Using the experimental parameters Section. 3.3.1, we calculate |b+|2 = 0.490 and |b−|2 = 0.510. Experimentally, we use a linear polarization plus a tiny non-zero term circular polarized term on Raman 2 to suppress the Stark shift to less than 500 Hz for a single ion. The compensation of residual is limited by qubit frequency drifting from the environmental magnetic field over the course of the experiment.
Now we consider the hyperfine qubit. Since the magnetic field insenstive transiton fulfills |αr| = |αb|6, the effective Stark shift always equals zero under arbitrary polarization of Raman 2.
6According to [133] the coefficients differ by 10−4 due to the nuclear Zeeman effect. This will make the qubit
70

(a) 300
200

(b)
-4.6

Stark shift frequency (kHz) Stark shift frequency (kHz)

100

-4.8

0 -5.0
1-00
-5.2 2-00

3-00

-5.4

0.0

0.2

0.4

0.6

0.8

1.0

0.0

0.2

0.4

0.6

0.8

1.0

Figure 3.7: Calculation of Stark shifts for (a) Zeeman and (b) hyperfine qubit as a function of leftpolarization strength, using experimental parameters (see text). Note that the scales are different.

However, when the residual Stark shift is considered, the terms in Eqn. 3.40, independent of the

polarization, are of the same magnitude as the polarization term. In the case of ∆ < 0, |b−| = 1

will minimize the Stark shift, but it’s always a negative non-zero term. The residual Stark shift

term

when

|b−|

=

√1
(2)

and

|b−|

=

1

are:

δh(|b−|

=

√1 ) 2)

≈

− ω0 3∆2

gr2 + gb2

−

ω0

6(∆ − ωF )2

4gr2 + gb2

δh(|b−|

=

1)

≈

− ω0 3∆2

gr2 + 2gb2 − 2α2gb2

−

ω0

3(∆ − ωF )2

2gr2 + gb2 + 2α2gb2

.

(3.43)

In Fig. 3.7 We plot the calculated Stark shift frequency of hyperfine/Zeeman qubit under experimental parameters of the Raman beams power of P1 = 1.2/4.9 mW, P2 = 9 mW as a function of the Raman 2 polarization. Experimentally, we observe the hyperfine Stark shift of ∼ −5 kHz and Zeeman Stark shift at the maximum of ∼ ±600 kHz at Raman 2 power of ∼ 20 mW,
transition no longer first-order insensitive to the magnetic field but instead has a linear dependence of 60 kHz/G, which could limit the qubit coherence time.

71

which corroborates the numerical calculation.

3.5 MW transition
We can also manipulate the hyperfine levels in the electronic ground state by directly coupling to an oscillating magnetic field. The Rabi frequency characterizes the magnetic dipole transition strength can be written as:

Ω = −µ⃗B · βˆ/ℏ,

(3.44)

where µ⃗ is the magnetic dipole moment of the nucleus and electron spin, βˆ denotes the polarization factor with |β−1|2 + |β0|2 + |β+1|2 = 1. Similar to the E1 transition, µ⃗ can also be expressed in the spherical basis:

1
µ⃗ = (−1)qµqβq.
q=−1
If we write the Rabi frequency of MW transitions in terms of:

(3.45)

Ω(|F m⟩ , |F ′m′⟩) = µBBR(|F m⟩ , |F ′m′⟩)/ℏ

(3.46)

The coupling strength of the dipole matrix element equals:

R(|F m⟩ , |F ′m′⟩) = (−1)q+1 F m Tq(k) F ′m′





F k F′

=

(−1)q+1+F −m

⟨F

∥Tk∥

F

′⟩

 

. 

−m q m′

(3.47)

Table 3.5 lists the relative coupling strength of the MW transitions at the low field limit. Note that in the intermediate field, it’s more convenient to work in the uncoupled basis |mI, ms⟩ as F is

72

(a) Ion
L SMA

(b) 1.0
0.5 0.0 - 0.5

L → 0 L = 0.25 λ L = 0.5 λ L= λ

- 1.0

- 0.4 - 0.2

0.0

0.2

0.4

Figure 3.8: (a) illustrates the relative position of the dipole antenna and ions. (b) Radiation power distribution at different antenna lengths in the far-field limit, plotted in polar coordinate with intensity at the ion position normalized to 1.

no longer a good quantum number. The relative strengths of the magnetic dipole matrix elements can be conveniently calculated based on Table 3.1.
In the experiment, we drive the microwave transition using a dipole antenna. The antenna is in a λ (full-wavelength) configuration (FPVPro) with a resonant frequency of ∼ 1.2 GHz. The dipole antenna of length L radiation power at the far-field limit is given by:

1 P (θ) ∝ r2

cos

πL λ

cos

θ

−

cos

πL λ

2
.

sin θ

(3.48)

Figure 3.8 shows the plot of the antenna radiation pattern in the space of various antenna lengths7. We see that the dipole radiation has the maximum intensity in the ion’s direction. And the λ configuration we choose is the strongest among the four plotted here. We use a circulator and connect it to an open SMA cable, then cut the length of the SMA cable to have the best
7A helpful website for understanding dipole antenna: https://www.antenna-theory.com

73

Component
Zeeman Hyperfine MW repump MW Shelving 1 MW Shelving 2 RF transfer

Transition
|F = 2, mF = 2⟩ ↔ |1, 1⟩ |2, 0⟩ ↔ |1, 1⟩ |2, 1⟩ ↔ |1, 1⟩ |2, 0⟩ ↔ |1, −1⟩ |2, 0⟩ ↔ |1, 0⟩ |2, 2⟩ ↔ |2, 1⟩

Coupling strength B=√0
+1√/ 5 1/ √30 −1/√ 10 1/ 30 + 2√/15 −1/ 15

Table 3.5: The relative coupling strength MW transitions at the low field limit.

mode-matching of the MW field to the antenna at the MW transition frequencies. The antenna is mounted outside the main vacuum viewport at around r = 3.5 cm away from the ions’ position. The antenna position is adjusted to have the maximum Rabi frequency of the ions. The MW drive is provided by an AWG channel mixed with an 816 MHz local oscillator (LO) to generate around 1018 MHz signal, then amplified through a 5 W RF amplifier and coupled to the antenna using an SMA cable.
Figure 3.9 shows a typical MW Rabi flopping at 28.5 kHz. We see the contrast and Rabi frequency fluctuation, which we believe comes from drifting of the magnetic field. The fast noise is less troublesome, and we achieve 1 ms Rabi flopping coherence without any active lock8 and magnetic shielding. And the maximum Rabi frequencies we achieved were 38 kHz for the Zeeman qubit and 3 kHz for the shelving transition. The Rabi speed we achieve is at the same level as the NIST group reported [134], consid-
ering that a 30 W amplifier is used in their experiment. The Rabi frequency ratio of the two transitions also coincides with the measurement in Table 3.4 in [134]. Since the low Rabi rate will significantly affect the transfer fidelity, the author suggests an alternate shelving transition |2, 0⟩ ↔ |1, 0⟩. Note that here we left out the MW drive introduced ac Stark shift in the discussion, and details can be found in [135].
Now we perform an estimation of the maximum Rabi frequency achievable. For simplicity,
8It was surprising that the magnetic field lock we implemented reduces the slow noise but increases the fast one, which we saw shorter coherence time! It was possibly due to the noise floor of the magnetic field sensor.
74

Bright population

1.0 0.8 0.6 0.4 0.2 0.0
0.000 0.025 0.050 0.S0c7a5n0t.i1m0e0(0m.1s2) 5 0.150 0.175 0.200
Figure 3.9: MW Rabi flopping of Zeeman qubit. The blue dots are the experimental data, error bar denotes one standard deviation under quantum projection noise. And black solid line is a sinusoidal fit to the data which gives a Rabi requency of ΩMW /(2π) = 28.5 kHz.
we assume |µ⃗| ≈ µB (Bohr magneton), the dipole antenna radiation pattern is isotropic, and the magnetic field has equal polarization in three axes. The MW Rabi frequency of the Zeeman qubit can be calculated as follows:

Ω = √µB × 5

2P µ0 12πr2

/ℏ.

(3.49)

Assuming P = 3 W of MW field emitted by the dipole antenna, we expect a Rabi frequency of

Ω/(2π) = 200 kHz, which is a magnitude higher than measured. One potential explanation is that

the metal reflection from the vacuum chamber and the trap, which the magnetic field needs to be

carefully simulated using, for example, the boundary element method (BEM) [136]. Nevertheless, the radiation intensity decays as r−2, so the brute-force approach to increase the MW Rabi frequency

is putting an in-vacuum antenna close to the ions.

75

4 | Spin-motion coupling and Ground
state cooling
This chapter shows the quantum control of coupling the ion’s internal (spin) and with the external (motion) state, serving as the cornerstone for generating entanglement between spins, which relies on effective spin-motion coupling and using motion as a mediator. We first discuss the general motional mode structures of coupled charge particles (ions) under external confinement. Then we review the physics of generating spin-motion coupling and the so-called "motional state preparation" – ground sta-
te cooling. In the end, we discuss a novel continuous sideband cooling scheme we developed[137] and present the experimental results.
4.1 Motional mode structure
Ions stored in a linear RF Paul trap form a crystal-like structure with Coloumb interaction that balances the external confinement generated by the electric field. The ions are usually trapped in a linear configuration, which is least sensitive to excess micro-motion. Here we derive the ions’ relative equivalent positions, axial and radial eigenmode frequencies, and eigenvectors of a linear ion chain in a three-dimension harmonic trap.
First, we write down the potential energy of a linear ion chain, consisting of the external trapping term, which a series of quantized vibrational modes can describe, and the Coloumb interaction
76

term between each pair of ions in the trap:

V

=

N m=1

1 2

M

ω2xm(t)2

+

N n,m=1

Z 2 e2 8πϵ0

|xn(t)

1 −

xm(t)|

,

m̸=n

(4.1)

where M is the ion mass, ω in the axial confinement trapping frequency, xm(t) denotes the spacial

displacement of ion m from the trap center at time t, Z = 1 denotes the ion charge. Since the

equilibrium positions fulfill [∂V /∂xm]xm=x(m0) = 0, Taking the derivative of V, we have a series of equations:

m−1

1

N

1

um

−

n=1

(um

− un)2

+
n=m+1

(um

− un)2

=

0

(m = 1, 2, . . . N ),

which we’ve rewrite xm with um = xm/l and we define the unit length l as:

(4.2)

e2

1/3

l = 4πϵ0M ωz2

,

(4.3)

the form of l implies that the kinetic and potential energies are equal. Specifically, when ωz/(2π) = 735 kHz, we havel0 = 8.97 µm for 9Be+.

We can see ions with larger masses or higher axial frequencies have close spacing. The

equilibrium positions of 9Be+ at ωz/(2π) = 735 kHz are plotted in Fig. 4.1 (a) as a function of ion

number, which we see that ion spacings are closer for the ones at the center.

Now we calculate the motional spectrum. The Lagrangian of the system can be written as:

M L=
2

N

(q˙m)2

−

1 2

N

qnqm

m=1

n,m=1

∂2V ∂xn∂xm 0

M =
2

N

N

(q˙m)2 − ω2

Anmqnqm ,

m=1

n,m=1

(4.4)

which the subscript 0 denotes that the double partial derivative is evaluated at the equilibrium

position. The motional frequencies are the eigenvalues of Anm. And we introduce bm, which is

77

(a)
(b)
Figure 4.1: The equilibrium positions of a linear 9Be+ ion chain plotted in the unit of l (a) in a harmonic potential. (b) in a quadratic-quartic hybrid potential.
78

the eigenvector of Anm corresponding mode m, which denotes the coupling strength of ions to the mode. For the axial modes we have:



 

1+2





N

1

p=1 |um−up|3

if

n=m



Aznm =

p ̸= m

,





 

−2



|um−un|3

if n ̸= m

And for the radial modes, we have:

(4.5)

Axn,my =

ωx,y ωz

21 + 2

δnm

−

1 2

Aznm

.

(4.6)

In Fig. 4.2 (a) we plot the axial and radial mode frequencies as a function of ion number under fixed center-of-mass (COM) mode frequency (wz, wx,y)/(2π) = (0.735, 4.6) MHz. We also plot the axial mode frequencies as a function of mode index for a 100-ion chain with the COM mode wz/(2π) = 0.27 MHz. The linear fit indicates that the mode spacing of axial modes is approximately equal for half of the modes with higher frequencies. It will be interesting if we can make the mode spacings all even, enab-
ling fast spin-spin interaction with naturally suppressed spin-phonon coupling (see Ch. 5).
While a harmonic trapping potential is stable and less sensitive to drifts of the electric field. There have been efforts to modify the trapping potential for various applications: A quartic term to the axial dc field can make the ion spacing more even and increase the axial COM mode frequency [138; 139]; adding an optical lattice along the chain can be helpful to studies of energy transport [140; 141]; and there’re proposals of using optical tweezers to pin individual ions for novel trapped ion q-
uantum information processing [142; 143; 144]. These potentials can be added as additional terms to Eqn. 4.1, and we use it to calculate the new equilibrium positions. Since Eqn. 4.4 apply to any potential, we can then use the equilibrium positions and refer to Eqn. 4.5 and Eqn. 4.6 to calculate the modified mode frequencies. An example of a quadratic quartic hybrid

79

(a)
Axial Radial
(b)
Figure 4.2: (a) Axial and radial frequencies with the increase of ion number, which the COM mode (wz, wx,y)/(2π) = (0.735, 4.6) MHz. (b) The plot of axial mode frequencies as a function of mode index under an axial potential wz/(2π) = 0.27 MHz.
80

potential is shown in Fig. 4.1 (b). Compared to pure harmonic potential, the ion spacings are much more even. If we define the spacing homogeneity as:

std(∆l)

n(N ) = ∆¯l

(4.7)

where std(∆l) and ∆¯l are standard deviation and average of the ions’ spacings. For N = 20 ion chain, the hybrid potential can reduice n(N ) from 18.5% to 5.7%, details of optimizing the ratio between quartic and harmonic term can be found in [139].

4.2 Spin-motion coupling via laser field
In trapped ion systems, the Coulomb forces mediate entanglement between the spins. To use the ion motion as a quantum bus, the first step is to create spin-motion coupling to link the internal (spin) to the external (motion) degree of freedom of an ion. In Ch. 3, we discussed the interaction between the ion’s internal state with an external field. Here, we include the ion’s motion in a harmonic trap and discuss how the spin state interacts with the motional state under a laser field.
First, we write down the Hamiltonian of a single ion in a harmonic trap with a laser field:

Hˆ = Hˆ (e) + Hˆ (m) + Hˆ (i),

(4.8)

where the first two terms Hˆ(0) = Hˆ (e) + Hˆ (m) are the static terms, describing the ion’s two-level internal states and motional state:

Hˆ (e) = ℏω0σz/2,

Hˆ (m) = ℏωm

a†a + 1 2

.

(4.9)

The electromagnetic field coupled to a single trapped ion is the interaction Hamiltonian:

Hˆ (i) = ℏΩ(σ+ + σ−) × [cos (kxˆ − ωt + ϕ)] , 81

(4.10)

√

where σ± are the spin-flip operators, k is the effective wave vector (in our case k =

2

2π λ0

),

ω

is

the

frequency of the effective laser field, and cos(kxˆ) is the position operator which can be rewritten

with ladder operators:

kxˆ(t) = η aˆe−iνt + aˆ†eiνt ,

(4.11)

where η = k ℏ/(2mν) is called the Lamb-Dicke parameter, ν is the ion’s motional frequency.
The Lamb-Dicke parameter characterizes the ratio of the size of the ion’s ground state motional wavefunction and the laser’s effective wavelength. We can transform the perturbation term Hˆ (i) into the interaction picture: Hˆint = Uˆ0†Hˆ (i)Uˆ0, with Uˆ0 = exp −(i/ℏ)(Hˆ (m) + Hˆ (e))t . After the rotating wave approximation, Hˆint can be simplified as:

Hˆ (t) = (ℏ/2)Ω0σ+ exp iη aˆe−ivt + aˆ†eiνt ei(ϕ−δt) + H.c..

(4.12)

Then the Rabi frequency coupling any two number states between opposite spin is given in terms of the Laguerre polynomial:

Ωn,n+s = Ωn+s,n = Ω0 n + s eiη(a+a†) n

= Ω0e−η2/2η|s|

n< n>

! !

L|ns<|

η2

,

(4.13)

where the carrier transition Ω0,0 = Ω0e−η2, when η = 0.78, the carrier Rabi frequency is only

73% of the atomic transition Rabi frequency. We consider the condition that the ion’s photon recoil

energy is much smaller than a motional quanta and the ion locates near the motional ground state:

η2(2n + 1) ≪ 1, we can do the Lamb-Dicke approximation:

Hˆ (t) = (ℏ/2)Ω0σ+ 1 + iη aˆe−ivt + aˆ†eiνt ei(ϕ−δt) + H.c.

(4.14)

This condition is referred to as the Lamb-Dicke regime (LDR), in which the physical meaning is that the electron wavepacket size is much smaller than the laser effective wavelength. In the LDR

82

Hˆ (t) contains three dominant transitions: 1. δ = 0, which we call the carrier transition |g, n⟩ ← |e, n⟩, the Hamiltonian has the form of:

Hˆcar = (ℏ/2)Ω0 σ+eiϕ + σ−e−iϕ ,

(4.15)

which is equivalent to a pure spin-light interaction, and we can rewrite in terms of a σϕ

rotation:

Hˆcar = (ℏ/2)Ω0(σx cos ϕ − σy sin ϕ) = (ℏ/2)Ω0σϕ

(4.16)

2. δ = −ν, which we call the first-order red sideband (RSB) transition |g, n⟩ ← |e, n − 1⟩:

Hˆrsb = i(ℏ/2)ηΩ0 aˆσ+eiϕ − aˆ†σ−e−iϕ ,

(4.17)

√ which the Rabi frequency Ωn,n−1 = η nΩ0.

3. δ = ν, which we call the first-order blue sideband (BSB) transition |g, n⟩ ← |e, n + 1⟩:

Hˆrsb = i(ℏ/2)ηΩ0 aˆ†σ+eiϕ − aˆσ−e−iϕ

(4.18)

√ which the Rabi frequency Ωn,n+1 = η n + 1Ω0.

Groud state cooling requires ion in the resolved sideband regime [145], which means the effective spontaneous emission rate is much small than the motional frequency. So that one can tune the laser to the proper detunings are drive the above three transitions. Intuitively, if one can continuously excite the RSB transition assisted by spin reset, one can climb down the phonon ladder and finally reach the ground motional state.

83

4.3 Ground state cooling overview
Performing high-fidelity operations involving spin-motion coupling requires the motional states to be well-defined to avoid incoherent thermal disturbances. Thus, cooling of a trapped ion chain to the motional ground state hence is the starting point of practical multi-qubit quantum logic operations [114; 26]. In Sec. 3.2.1, we’ve discussed that Doppler cooling typically has a cooling limit above the motional ground state. So subsequent sub-Doppler cooling techniques to the ground state are necess-
ary. Traditional, this process is very time-consuming: one example is that ground state cooling takes more than 50% of the total time in the first generation of the Honeywell QCCD device [15]. Dozens of pairwise entangling gates can be implemented in a typical ground state cooling time of 10 ms. In a long ion chain, fast sympathetic cooling throughout a quantum circuit is required to overcome the motional heating [146].
Resolved sideband cooling is a general method of cooling trapped particles to the quantum harmonic oscillator ground state. It has been demonstrated in various physical systems such as trapped ions [145; 147; 148], atoms in optical lattices [149; 150], and tweezers [151; 152]. In the case of ions, the conventional setting with tight confinement is referred to as the Lamb-Dicke regime (LDR) [62], in which the motional wavefunction of the ion is well-localized and much smaller than the spatial gradi-
ent of the coupling electromagnetic wave. The coupling between the internal electronic and external motional states is weak enough that one can approximate the first-order sidebands as the dominant spin-phonon interaction. Concatenating pulsed red sideband (RSB) excitations and dissipative optical pumping processes [145], ground-state cooling can be achieved after iterating through different mean phonon numbers [153]. Despite its successful usage in singleand few-ion systems, generalizing this tec-
hnique to long ion chains meets two crucial challenges: first, sequential cooling of all collective modes of the coupled harmonic oscillator system becomes slow as the system size increases [154]; second, certain motional modes such as the low-frequency axial modes of a linear chain have high mean phonon numbers, which is detrimental to entangling
84

gates in both axial- and transverse-mode schemes [69; 146]. Finally, sideband cooling beyond the LDR becomes nontrivial, where the coupling light is strongly modulated by the particle’s motion and the cooling efficiency is limited by the large photon-recoil effects [155].
In the face of these challenges, various methods have been employed to improve the cooling efficiency and bandwidth: coupling to higher-order sidebands allows faster cooling [156; 152], at the expense of complicated pulse optimizations [153]; EIT cooling utilizes Fano-like resonances arising from laser-atom interactions to engineer coherent dark-states for suppressing unwanted excitations [157; 158; 159; 160], with a bandwidth limited by the atomic structure; and polarization gradient cooling serv-
es as a fast intermediate step without cooling to the ground state [161; 162; 163], thus requiring further sideband cooling. While each method has its respective advantages, a single-step technique that combines robustness, simplicity, low temperatures, and high bandwidth is highly desirable. Moreover, a high LD parameter finds many applications, such as enabling faster-entangling operations [164; 165; 166], enhancing quantum sensing [167], and accelerating novel n-qubit quantum gates [168]. Solvi-
ng the challenge of ground motional state preparation in the presence of a high LD parameter hence becomes an important prerequisite for these new applications. The case of beryllium ions (9Be+) well illustrates such a scenario: the light mass and clean atomic structure have enabled high-fidelity entangling gates [25] and large-scale quantum simulations [169]; but for long linear chains with dozens of 9Be+ ions, the axial modes can span over several MHz of bandwidth with the largest LD parameters -
exceeding 1, making ground-state cooling for all modes challenging with existing methods.
4.4 Continuous Raman sideband cooling beyond the
Lamb-Dicke regime
We develop a novel continuous Raman sideband cooling (CRSC) scheme akin to that used in optical qubits [170]: we continuously drive multiple RSB transitions and simultaneously apply
85

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:38.541Z
- **Text Length:** 145115 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
