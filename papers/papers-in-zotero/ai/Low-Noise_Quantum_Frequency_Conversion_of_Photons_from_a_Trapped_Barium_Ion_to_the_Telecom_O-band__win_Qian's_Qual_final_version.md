# PDF Document: win_Qian's Qual final version.pdf

**File Path:** win_Qian's Qual final version.pdf

**Processed Date:** 2026-02-10T18:17:36.223Z

**File Size:** 6593.56 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 343

**Title:** Low-Noise Quantum Frequency Conversion of Photons from a Trapped Barium Ion to the Telecom O-band

**Collection:** Courses > LLM

---

## Extracted Text Content

Qualification Exam
Quantum information processing (QIP)
with trapped electrons
Qian Yu
Advisor: Hartmut Haeffner
May 4, 2021

 Contents
o Background
o Quantum computing o Research motivation
o Initial Work
o Electron source, trap and detection o Trapping electrons in a room-temperature Paul trap
o Electron loading, storage and trap frequencies o Loss mechanism of trapped electrons
o Future work
o Cooling and electronic detection of electrons o Spin readout of trapped electrons
o Quantum gates on trapped electrons

 Background
Part I
Figures credit ©: http://staq.pratt.duke.edu

 4
Background
Quantum information processing
l Quantum information processing (QIP): quantum mechanics + information
theory
Ø Quantum computing
Ø Quantum communications
Ø Quantum cryptography
Ø ....
l Quantum computers can solve certain problems much more efficiently
than classical computers.
Ø Simulation of quantum systems (R. Feynman)
Ø Factoring large integers (P. Shor)
Ø Unsorted database search (L. Grover)
Ø ....
Figures credit ©: https://www.explainthatstuff.com

 5
Background
Quantum computing
bit: 0, 1
Classical computer Quantum computer
Fundamental unit
Operation
Algorithm
qubit: a|0⟩ + b|1⟩
Number field sieve
• O(e!.#(%&'()!/#(*+, %&'()$/# )
Linear search
• O(N)
Shor’s algorithm
• O( logN %(log logN)(logloglogN))
Grover’s algorithm
• O( N)
1-bit operations
2-bit operations
1-qubit rotations
• superposition
2-qubit gates
• entanglement

 6
Figures credit ©: A. Ekert, R. Blatt, K, Brown, H. Häffner, M. Saffmann, IBM, C. Marcus, I. Wamsley, Google, S.Rand, N.Manson
Background
Physical realizations
Trapped ions
3D
4S
qubit
Superconductors
qubit
|r⟩
f=1
f=2
Neutral atoms
m! = ±1
m! = 0
qubit
3A2
Defects in diamonds
|⟩
H
|⟩
V
Photons
Atomic systems Solid state systems Photon
Quantum dots
|↑⟩
|↓⟩
qubit

 7 Figures credit ©: https://aquadrupauliontrap.wordpress.com/background/; https://www.youtube.com/watch?v=rJ-13qwRtYs
Paul trap Laser control
1. AC field provides radial confinement
2. DC field provides axial confinement
1. Using lasers to manipulate ions
2. Using motional mode as quantum bus to generate entanglement
3D
4S
4P
qubit
~~

|⟩
1
|0⟩
⨂
Background
Trapped-ion quantum computing

 1. Using lasers to manipulate ions
8
1. AC field provides radial confinement
2. DC field provides axial confinement 2. Using motional mode as quantum bus to
generate entanglement
3D
4S
4P
qubit
~~

|1⟩
|0⟩
⨂
Background
Trapped-ion quantum computing
Paul trap Laser control
Figures credit ©: https://aquadrupauliontrap.wordpress.com/background/; https://www.youtube.com/watch?v=rJ-13qwRtYs
1. High fidelity operations, 10+,~10+
Pros:
Cons:
2. Long coherence time, ~ hour
3. Flexible connectivity, modularization
1. Slow operations, 10 ~100 μs
2. Optics development required

 9
[1] Natalie C. Brown and Kenneth R. Brown. “Comparing Zeeman qubits to hyperfine qubits in the context of the surface code: 174Yb+ and 171Yb+”. Physical Review A 97 (5) (May 2018),
Simple structure Light mass Electronic control
Ideal two-level system (TLS)
Benefits:
Ø No leakage error
Ø High-fidelity operation
Ø Error correction
Large charge-to-mass ratio
Benefits:
Ø Higher motional frequencies
Ø Faster transport and twoqubit gates
All-electronic control
Benefits:
Ø Remove laser overhead
Ø Scalability
|↑⟩
|↓⟩
m!"- = 7×10# m$.
|↑⟩
|↓⟩
microwave
Background
Motivation for electron-based quantum computing

 10
Benefits over atomic systems (trapped ions)
Benefits over solid state systems (superconducting circuits)
Idea: Replace the ions in an ion-trap quantum computer with electrons. Goal: Retain good features of the trapped ion approach while addressing its challenges.
Ø Remove laser overhead
Ø Faster operations
Ø Improved coherence times
Ø Less stringent cooling requirements
Ø More flexible connectivity
Background
Motivation for electron-based quantum computing

 11
[1] K. A. Twedt and S. L. Rolston, Electronic detection of collective modes of an ultracold plasma, Physical Review Letters 108, 065003 (2012). [2] J. R. Danielson, C. M. Surko, et al. Plasma and trap based techniques for science with positrons“. Reviews of Modern Physics 87 (1) (Mar.2015), 247. [3] Nathan Leefer, Kai Krimmel, et al.“ Investigation of two-frequency Paul traps for antihydrogen production. ” Hyperfine Interactions 238 (1) (2017), 12. [4] W. Putnam and M. Yanik, Noninvasive electron -
microscopy with interaction-free quantum measurements, Phys. Rev. A, 80 (2009), p. 040902 [5] P. Kruit, K. K. Berggren, et al. Designs for a quantum electron microscope, Ultramicroscopy 164, 31 (2016). [6] D. Carney, H. Häffner, D. C. Moore, J. M. Taylor, Trapped electrons and ions as particle detectors,
Background
Research motivations: other possible application
...
Plasma physics Antimatter science Imaging Sensing
Ø Antihydrogen production
Ø High-resolution imaging
Ø Electron microscopy
Ø Small cold plasma
Ø Electron-positron interaction
Ø Particle detector

 Initial work
Part II
[1] Clemens Matthiesen, Qian Yu, Jinen Guo, Alberto M. Alonso, and Hartmut Haeffner. Trapping Electrons in a Room-Temperature Microwave Paul Trap“. Physical Review X 11 (1) (Jan. 202

 Electron source Electron trap Electron detector
Ø Photoionization of Ca beams Ø Micro-channel plate (MCP)
Ø Three-layer PCB trap
13
Initial work
Electron source, trap and detector
Ca Ca
e"

150 V
MCP
16 V 16 V
8V 8V
Continuum
422 nm
390 nm
S
P
free
bound
~~
+
20 − 40 MHz

2 − 20 GHz

 Electron source
Ø Photoionization of Ca beams
14
Initial work
Electron source, trap and detector
Ca Ca
e"
Continuum
422 nm
390 nm
S
P
free
bound

 Electron trap
Ø Three-layer PCB trap
15
Initial work
Electron source, trap and detector
~~
+
20 − 40 MHz

10 − 20 GHz
Electron source
Ø Photoionization of Ca beams
Ca Ca
e"
Continuum
422 nm
390 nm
S
P
free
bound

 Electron trap
Ø Three-layer PCB trap
16
Initial work
Electron source, trap and detector
~~
+
20 − 40 MHz

10 − 20 GHz
Electron source
Ø Photoionization of Ca beams
Ca Ca
e"
Continuum
422 nm
390 nm
S
P
free
bound
Trap frequencies: 301 MHz, 316 MHz
PCB: Smallest features ~ 150 μm
Slots: (0.8,1,0.8) mm Spacers: 1.27 mm
AC drive: 90V, 1.6 GHz
Trap depth: 1.3 eV → 15,000 K

 Electron source Electron trap
Ø Photoionization of Ca beams Ø Three-layer PCB trap
17
Initial work
Electron source, trap and detector
Electron detector
Ø Micro-channel plate (MCP)

150 V
MCP
16 V 16 V
8V 8V
Continuum
422 nm
390 nm
S
P
free
bound
~~
+
20 − 40 MHz

10 − 20 GHz
Figures credit ©: http://www.dmphotonics.com/MCP_MCPImageIntensifiers/Image27.gif
Ca Ca
e"
• Electrons avalanche during detection creates ripple on supply.

 18
Initial work
Electron source, trap and detector
Electron source Electron trap Electron detector
Ø Photoionization of Ca beams Ø Micro-channel plate (MCP)
Ø Three-layer PCB trap
Ca Ca
e"

150 V
MCP
16 V 16 V
8V 8V
Continuum
422 nm
390 nm
S
P
free
bound
~~
+
20 − 40 MHz

10 − 20 GHz

 19
Initial work
Experiment set up
Electron source Electron trap Electron detector
Ø Photoionization of Ca beams Ø Micro-channel plate (MCP)
Ø Three-layer PCB trap

150 V
MCP
16 V 16 V
8V 8V
Continuum
422 nm
390 nm
S
P
free
bound
~~
+
20 − 40 MHz

10 − 20 GHz
Ca Ca
e"

 First experiment that ever trapped electrons in a Paul trap
20
Initial work
Trapping electrons in a room-temperature Paul trap
detection probability per bin = # of cycles with detection events
total # of experiment cycles
detection probability = D
#$%&'() *+%,$
detection probability per bin

 21
Electron loading Trap frequency Storage time
Initial work
Characterizing the electron trap

 22
Electron loading Trap frequency Storage time
Ø 1 electron /10 μs
Initial work
Characterizing the electron trap

 23
Electron loading Trap frequency Storage time
Ø 1 electron / 10 μs
Initial work
Characterizing the electron trap
• Electrons’ trap frequencies in a mm-sized trap are ~ two orders of magnitude higher than for trapped ions.

 24
Electron loading Trap frequency Storage time
Ø Axial: 40 MHz Ø Radial: 300 MHz
Ø 1 electron / 10 μs
Initial work
Characterizing the electron trap

 25
Electron loading Trap frequency Storage time
Ø 3/4: τ ≈ 30 ms Ø 1/4: τ > 1s
Ø Axial: 40 MHz Ø Radial: 300 MHz
Ø 1 electron / 10 μs
Initial work
Characterizing the electron trap

 Pressure
26 [1] R Alheit, S Kleineidam, F Vedel, M Vedel, and G Werth. “Higher order non-linear resonances in a Paul trap”.International Journal of Mass Spectrometry and Ion Processes154 (3)
Initial work
Loss mechanism and electron trajectory simulation
Collisions with background gas?
ω = Ω./7
Anharmonicity of trapping field?
V z = V/z/ + V0z0+ V-z- + ⋯
Anharmonicity

 Future work
Part III
Figures credit ©: H. Häffner

 28
Future work
Towards a trapped electron quantum computer
Trapped ions
Load ions Laser cooling Optical pumping Quantum gates Fluorescence readout
Trapped electrons
Load electrons ?
Figure credit ©:https://ionq.com/technology

 29
Future work
Towards a trapped electron quantum computer
Trapped ions
Load ions Laser cooling Optical pumping
Quantum gates Fluorescence readout
Trapped electrons
Load electrons
?
Figure credit ©:https://ionq.com/technology
What’s the difference between electrons and ions?
D./0
D1/0 = |1⟩
729 nm
S!/0 = |0⟩
P./0
P!/0
397 nm
866 nm
854 nm
Ca%
No optical transitions for electrons!
|↑⟩
|↓⟩
e&

 30
Trapped ions
Ø Load ions
Ø Cool the ions motion via laser cooling
Ø Initialize the ions via optical pumping
Ø Perform quantum gates with lasers
Ø Readout the state via fluorescence
readout
Future work
Towards a trapped electron quantum computer
Trapped electrons
Ø Load electrons
Ø Cool the electron motion via a tank circuit
Ø Initialize the electrons by first
measuring it then flip it conditioned on
its spin direction
Ø Perform quantum gates with microwave
Ø Readout the state with an oscillating
magnetic field gradient

 Cooling via a cryogenic tank circuit
31
Future work
Resistive cooling
• Electron motion can be damped and detected by coupling the induced image
current to a cryogenic tank circuit.
• Basic idea: the induced image current creates a voltage across the attached tank circuit opposing the electron motion thereby dissipating electron’s kinetic
energy.
[1] D J Wineland and H G Dehmelt. “Principles of the stored ion calorimeter”.J. App. Phys.46 (1975), 919.
Figure credit ©: H. Häffner
E = ħω n6 + 1
2 = k'T
T = 4K (E)* +,- 6n = 40, τ ≈ 2 μs
In equilibrium:

 Electronic detection of trapped electrons
32
Future work
Electronic detection
Figure credit ©: H. Häffner
[1] D J Wineland and H G Dehmelt. “Principles of the stored ion calorimeter”.J. App. Phys.46 (1975), 919. [2] L.S. Brown and G. Gabrielse. Geonium theory: Physics of a single electron or ion in a Penning trap". Reviews of Modern Physics 58 (1) (1986), 233.
• Electron motion induces an image current in the trap electrodes which can be
detected by amplifying and measuring the voltage drop over the attached tank
circuit.
Amplifier
Signal

 Electronic detection of trapped electrons
33
Future work
Towards cooling and detecting electrons
[1] D J Wineland and H G Dehmelt. “Principles of the stored ion calorimeter”.J. App. Phys.46 (1975), 919. [2] L.S. Brown and G. Gabrielse. Geonium theory: Physics of a single electron or ion in a Penning trap". Reviews of Modern Physics 58 (1) (1986), 233.
• Electron motion induces an image current in the trap electrodes which can be
detected by measuring the voltage drop over the attached tank circuit.[2]
Preparation:
• Lower temperature
=> Allow for cooling to prepare for electronic detection
• Smaller trap
Þ Shrink trap size stepwise from 1 mm to 30 μm
Þ Smaller electron to electrode distance leads to faster cooling
Þ Increase trap frequencies to ~ 2 GHz
Þ Allow for a large magnetic field gradient

 Spin readout
34 [1] P. Peng, C. Majhiesen, and H. H ̈affner. “Spin readout of trapped electron qubits”. Physical Review A 95 (1) (Jan. 2017), 012312.
F = −∇V = −μ J ∇B
Future work
Spin readout of trapped electrons
|↓⟩
|↑⟩
Basic idea: couple the spin direction to the motion via an oscillating magnetic field
gradient
⇒
|↓⟩| ⟩
α
↑⟩ ⟩
−α
P↑ ↑⟩ ⟩
−α + P↓|↓⟩| ⟩
α
P↑|↑⟩ + P↓|↓⟩ Driving
V = μJB

 Single-qubit gate Two-qubit gate
35 [1] R Srinivas et al. “High-fidelity laser-free universal control of two trapped ion qubits”. arXiv:2102.12533
|↑⟩
|↓⟩
Future work
Quantum gates on electrons
e&
B
⃗S |↓⟩
|↓⟩
|↑⟩ |↑⟩ |↓⟩ |↑⟩ |↑⟩ |↓⟩
x
p
|⟩
↓↑
|⟩
↑↓
x
p |⟩
↓↓
|⟩
↑↑
Transverse magnetic field: Spin dependent force (magne>c field gradient):

 Single-qubit gate Two-qubit gate
36
|↑⟩
|↓⟩
Future work
Single and two-qubit gate
e&
B
⃗S |↓⟩
|↓⟩
|↑⟩ |↑⟩ |↓⟩ |↑⟩ |↑⟩ |↓⟩
x
p
|⟩
↓↑
|⟩
↑↓
x
p |⟩
↓↓
|⟩
↑↑
Transverse magnetic field: Spin dependent force:
Electric field noise
Motional frequency drift
Motional dephasing
Gradient inhomogeneity
Field anharmonicity
Qubit decoherence
Magnitude 140 q/s 3 kHz 1.8×10"- Hz 5×10". T/μm- 1023 μm20 1 s
Infidelity 8.8×1021 3.3×1021 2×1024 6×1021 1.7×1024 5×1024
Estimates of various imperfections and resulting contribution to the two-qubit error rate
[1] In preparation.

 Envisioned electron trap
37
Future work
Envisioned electron trap
[1] In preparation.

 38
Future work
Divincenzo’s criteria for a quantum computer
[1] D. P. DiVincenzo, Fortschr. Phys. 48, 771 (2000).
Scalable physical system with well characterized qubits
Ability to initialize the state of the qubits
Long relevant coherence Smes, much longer than gate operaSon Sme
Universal set of quantum gates
Qubit-specific measurement capability

 Acknowledgement
• Qualifying exam committee:
Prof. Irfan Siddiqi, Prof. Hartmut Haeffner, Prof. Alp Sipahigil, Prof. Norman
Yao
• Advisor:
Prof. Hartmut Haeffner
• Haeffner Group members
• Collaborators:
Prof. Boerge Hemmerling at UCR
Prof. Robert Sutherland at UTSA
Dr. Dietrich Leibfried at NIST
Dr. Kristin Beck at LLNL

 Thanks!

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:36.223Z
- **Text Length:** 13811 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
