# PDF Document: Yokoyama et al. - 2025 - Full-stack Analog Optical Quantum Computer with A Hundred Inputs.pdf

**File Path:** Yokoyama et al. - 2025 - Full-stack Analog Optical Quantum Computer with A Hundred Inputs.pdf

**Processed Date:** 2026-02-10T18:17:54.944Z

**File Size:** 14804.64 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2699

**Title:** Full-stack Analog Optical Quantum Computer with A Hundred Inputs

**Collection:** Large Files

---

## Extracted Text Content

arXiv:2506.16147v1 [quant-ph] 19 Jun 2025
Full-stack Analog Optical Quantum Computer with A Hundred
Inputs
Shota Yokoyama1†, Atsushi Sakaguchi1†, Warit Asavanant1,2,3, Kan Takase1,2,3, Yi-Ru Chen1, Hironari Nagayoshi2, Jun-ichi Yoshikawa1, Takahiro Kashiwazaki4, Asuka Inoue4, Takeshi Umeki4, Toshikazu Hashimoto4, Takuji Hiraoka5, Akira Furusawa1,2*, Hidehiro Yonezawa1*
1RIKEN Center for Quantum Computing, 2-1 Hirosawa, Wako, Saitama 351-0198, Japan. 2Department of Applied Physics, School of Engineering, The University of Tokyo, 7-3-1 Hongo, Bunkyo-ku, Tokyo 113-8656, Japan. 3OptQC Corp., 1-21-7 Nishi-Ikebukuro, Toshima-ku, Tokyo 171-0021, Japan. 4NTT Device Technology Labs, NTT Corporation, 3-1 Morinosato Wakamiya, Atsugi, Kanagawa 243-0198, Japan. 5Fixstars Amplify Corporation, 3-1-1 Shibaura, Minato-ku, Tokyo 108-0023, Japan.
*Corresponding author(s). E-mail(s): akiraf@ap.t.u-tokyo.ac.jp; hidehiro.yonezawa@riken.jp; †These authors contributed equally to this work.
Optical technology emerges as a highly promising platform for quantum computing, driven by its enormous potential for large-scale ultrafast computation and its integration with telecom technology1–3. There have been intensive investigations ongoing into the development of optical quantum computers, however, they are limited to small-scale, special-purpose, or low-quality systems4–7. Error correction for fault tolerance is still very challenging, making a full-scale fault-tolerant quantum computer -
a long-term goal. However, practical testbeds for quantum computers, without the difficulty in error correction, are in high demand. Here we present an innovative analog optical quantum computer utilising continuous variables. Our analog optical quantum computer is based on sequential measurements of time-domain-multiplexed large-scale two-dimensional entanglement8, 9. Accumulated Gaussian noise and spurious bias caused by the imperfection of analog computing can be suppressed through careful cali-
bration and repeated trials without complicated error correction. Our system achieves a hundred analog inputs and operates at a clock frequency of 100 MHz with a comprehensive full-stack architecture featuring a cloud interface and a Python software development kit (SDK) for enhanced accessibility and scalability. We demonstrate the detailed characterisation of our optical quantum computer and quantum state sorting as its example application. This development marks a significant step forward in th-
e exploration of analog quantum computing, with a potential to accelerate both fundamental research and practical applications such as fast and large-scale optical neural networks10–13.
Quantum computer is believed to be a game changer in a field of information technology. Since a quantum computer works by quantum mechanics, the different principle from that of the modern computer, it can efficiently solve certain problems that the modern computer cannot solve as efficiently14–16. Quantum computer has a strong potential for applications in material science17, finance18, machine learning19 and so on. Quantum computers have been developed with a variety of physical platforms20 incl-
uding superconducting circuits, neutral atoms, ions, silicons, and optics. While quantum error correction has been intensively investigated, current quantum computers are still limited to noisy intermediate-scale quantum (NISQ) computer or barely
1

claim quantum supremacy with around a few hundred qubits without any practical industrial applications21–26. A full-fledged fault-tolerant quantum computer is still a long-term goal. While most quantum computers are based on qubits and are considered digital computers, the alternative computing approach with analog variables, i.e., analog computing, is worth revisiting for developing practically useful quantum computers. Traditionally, an analog computer features low energy consumption and fast p-
rocessing, but limited precision, or relatively high cost to improve precision27, 28. Analog computing is particularly suitable for nature-inspired computational models such as neural networks29, 30. The state of a neuron is represented by continuous variables (CVs), which makes it natural to implement using analog computer. Neural network often does not require high precision as neural information processed in the brain actually operates with very low precisions27. Thus, quantum computing with co-
ntinuous variables31 has the potential to serve an alternative approach for developing a practically useful near-term quantum computer for such tasks. Like classical analog computing, analog quantum computing is considered fast at producing approximate solutions and suitable for problems based on continuous variables, such as neural networks10–13 and quantum simulation32. Demonstrations of analog quantum computing with continuous variables have been reported in an optical domain5, 6. Optical syste-
ms are ideal platforms for analog quantum computing because CV quantum resource states and efficient measurements are readily available, and measurement-based computation33–36 with timedomain-multiplexing technique8, 9, 37, 38 makes it possible to perform a large-scale quantum computation with a compact setup. The previous demonstrations5, 6, however, were not practically useful due to their limited number of inputs and low clock frequency which is the frequency of measurements and represents the -
speed of a basic operation. The demonstrations were limited to single input mode at 25 MHz clock frequency5, and six input modes at 4 MHz clock frequency6, respectively, as optical parametric oscillators in their systems inherently limited the overall bandwidth as well as the number of inputs. Demonstrations of small-scale systems do not necessarily guarantee large-scale execution, since accumulated noise and spurious bias may render the outputs meaningless after a certain number of computational -
steps. In addition, a flexible design platform for quantum circuits was not available, which made it hard to construct complex and large-scale quantum circuits. In this article, we demonstrate a measurement-based optical quantum computer operating at 100 MHz clock frequency with a hundred input modes, using ultra-wideband optical parametric amplifiers (OPAs)39. Here, the clock frequency corresponds to the implementation speed of a two-mode operation in our system. Our OPAs feature 6 THz bandwidth,-
 which unlock the potential of an optical quantum computer. Although the current 100 MHz clock frequency already surpasses the gate speeds of conventional platforms, achieving THz-clock quantum computing may be feasible in the future40. Our optical quantum computer utilises a timedomain-multiplexed quad-rail lattice cluster state41. Quantum operations are implemented by measuring the entanglement, followed by feedforward operations. By properly designing the measurement bases and feedforward gains-
, we can implement arbitrary multi-mode Gaussian operations for multiple inputs. Accumulated Gaussian noise and spurious bias through multiple computational steps are suppressed by careful calibration and repeated trials without the need for a specific error correction. Furthermore, a cloud-based system with the tailored Python SDK is built. Our quantum computer is accessible anywhere through the cloud, and flexible quantum circuit design is easily executed by the SDK as in qubit-based quantum com-
puters16. These systems make our computer a practical testbed for investigating applications of an analog quantum computer. It is also worth noting that our optical quantum computer is not just an analog quantum computer designed for near-term applications, but a solid platform for a future full-stack fault-tolerant quantum computer. Recently, generations of high-quality optical Gottesman–Kitaev–Preskill42 (GKP) qubits, which are promising qubit encodings for error correction, have been reported43-
, 44. On our optical quantum computer, basic operations on GKP qubits, including entangling operations and error syndrome measurements, can be implemented, laying the foundation for a universal fault-tolerant quantum computer43, 45. We evaluate single-mode and two-mode operations, verifying the quantumness of our quantum computer as well as demonstrating multi-input, multi-step operations. In particular, we demonstrate 101-modes 100step parallel quantum teleportation, evidencing that unwanted nois-
e and bias introduced through multiple operations can be suppressed and eliminated. In addition, we demonstrate quantum state sorting by their amplitudes, where we apply random amplitudes on 101 input quantum modes and sort them in ascending and descending orders. These demonstrations show that our quantum computer is capable of using 101 quantum inputs reliably, and quantum circuits can be flexibly designed, enabling our optical quantum computer to apply to practical problem solving.
2

Optical quantum computer system
Operation steps 1
1000
Time
Micronodes
Macronodes
a
b dc
b
50:50
200m Fibre delay 101Δt
50:50 50:50
50:50
3m delay Δt
50:50 50:50
OPA
a
b
c
d
OPA
OPA
OPA
Programming Layer Middleware Layer Classical Control Unit
FPGA
Homodyne signals
User authentication Job queuing
Python-based SDK
Non-expert user
AWS
Quantum Compiler
Client-Side Cloud Server
Job, Token
Results
Circuit / Graph design
Conversion to machine parameter
Measurement outcomes
Front-end PC
Data processing (Feedforward)
Control & Data acquisition
Resource Preparation
Hardware Layer Quantum Processing Unit
Control signals
Machine parameter LO
θ A(t)
q A(t)
LO
θ B(t)
q B(t)
LO
θ C(t)
qC(t)
LO
θ D(t)
qD(t)
a
cd e
In 0 In 1
In 100
In 101
1
2
3
100
101
102
103
104
201
202
203
204
205
In 2
In 3
...
...
=
==
In 1
In 2 Out 1
Out 2
Teleportation-based operation: V
50:50 50:50
Out 1 (d, k+101)
In 2 (d, k)
Out 2 (b, k+1)
In 1
(b, k) V(θ ,θ )
kB kA
V(θ ,θ )
kD kC
In 1 Out 1
In 2 Out 2
...
In 0
In 1
In 2
In 101
In 100
...
Time
Temporal index k=1 2 3 100 101 102
t=Δt
Helical cycle
103 104 105 202 203 204 205 206 207
10
100
Fig. 1 Cloud-based optical quantum computer system. a Schematic of the system including programming layer (client-side), middleware layer (cloud server on Amazon Web Service, AWS), and the hardware layer (classical control unit, quantum processing unit, resource preparation). b Three-dimensional representation of the actually generated entanglement in time domain. c Two-dimensional representation of the generated entanglement. A hundred and two inputs at the edges are processed through the entangl-
ement. d Quantum circuit representation of our quantum computer, consisting of sequential two-input two-output macronode operations. It should be emphasised that arbitrary multimode Gaussian operations can be realised by a sequence of two-inputs two-outputs macronode operations. e Operation at each macronode. At the k-th macronode, two inputs are the micronodes b and d at k-th macronode, and two outputs are the micronode b at (k + 1)-th macronode and d at (k + N )-th macronode. The operation on th-
em is represented by the generalised quantum teleportation sandwiched by two 50:50 beam splitters.
Our quantum computer utilises CV electromagnetic field quadratures (xˆ, pˆ) with a commutation relationship of [xˆ, pˆ] = i (ħ = 1) where ħ is the reduced Planck constant31. Figure 1a illustrates an optical setup as well as a cloud-based system. Figure 1b and c illustrate the structure of the entanglement created in the optical setup. Four optical wavepackets, called as micronodes and labelled as a, b, c and d, existing at the same timing are grouped as a macronode. The macronodes are wired by ent-
anglement, forming a two-dimensional lattice structure on the surface of a cylinder. This entanglement has a helical structure, and the number of macronodes N on a single turn of the helix is set to 101 in the current setup, corresponding to 102 input micronodes as in
3

Fig. 1c and d. Computation will be executed through sequential measurements of macronodes, and controlled by the measurement angles θj (j = A, B, C, D) (see Methods). In our quantum computer, we implement two-mode macronode operations sequentially as illustrated in Fig. 1d and e. As well known, arbitrary multi-mode Gaussian operations can be realised with beam splitter networks and squeezing operations, and their efficient implementations on the quad-rail lattice cluster state have been reported4-
6. Our quantum computer is a universal and programmable Gaussian computer with a hundred input quantum modes. While our quantum computer is capable of realising flexible quantum circuits, manual compilation from arbitrary quantum circuits to graph representations (Fig. 1c or d) and then actual machine parameters (the measurement angles) is quite cumbersome and can be a significant obstacle for testing practical applications. To overcome this difficulty, we develop a Python SDK where we can design -
quantum circuits and automatically compile them to graph representations, and then to machine parameters. Furthermore, a cloud-based system is developed so that users can design quantum circuits anywhere using the Python SDK and run the quantum computer. This makes our quantum computer accessible to a wider range of people who have a good understanding of problem-solving, but may have limited knowledge of the hardware of our analog optical quantum computer. Our analog optical quantum computer is s-
pecialised for Gaussian operations47 without non-Gaussian functions or error correction capabilities. While it is critical to pursue the extension of our quantum computer to the non-Gaussian domain and establish an error correction system, our Gaussian analog quantum computer is highly versatile and offers several advantages over other qubit-based quantum computers. Our quantum computer can be fast due to the wide bandwidth of optical devices and the deterministic nature of CV quantum computing1. -
It is highly scalable thanks to optical time-domain-multiplexing techniques8, 9, 37, 38. In addition, our quantum computer operates without cryogenic equipment, resulting in low energy consumption. The analog feature of our quantum computer, with a programmable hundred inputs, will provide an excellent testbed for applying a quantum computer to practical problems, and may open up new applications in fields such as optimisation, machine learning and quantum simulations.
Individual macronode operations
As a verification of our quantum computer, we test several individual macronode operations which are twoinputs and two-outputs operations at macronodes as illustrated in Fig. 1e. A transformation at an individual macronode can be expressed as
qˆout = Sqˆin + ∆noise (1)
where qˆout = (xˆout1, pˆout1, xˆout2, pˆout2)T is a vector of the output quadratures, qˆin = (xˆin1, pˆin1, xˆin2, pˆin2)T is a vector of the input quadratures, S = {Sij} (i, j = 1, · · · , 4) is a symplectic transformation matrix, and ∆noise is the additional noise at each operation (see Supplementary Information for details). The individual macronode operations are executed sequentially for implementing multi-input, multi-step computation as illustrated in Fig. 1d. The symplectic matrix is esti-
mated through entanglement between the reference modes and the output modes of operations shown in Fig. 2a (see Methods). First, we examine a special case of an individual macronode operation, i.e., a single-mode operation. By setting the measurement angles θj properly, we can implement the same but independent single-mode operation onto each input at a macronode (see Methods). The single-mode operation implementable by a macronode is the so-called generalised teleportation V (φ+, φ−) where φ± = θ-
B ± θA = θD ± θC (consistent sign convention). By adjusting φ+ and φ−, we can implement a variety of single-mode operations including teleportation, rotation, squeezing and shear as illustrated in Fig. 2b. Figure 2c shows the theoretical and experimental transformation matrices S as functions of φ+ and φ−. Since the same single-mode operations are applied to two input modes, the transformation matrix consists of two same 2-by-2 submatrices with zero off-diagonal submatrices. The experimentally rec-
onstructed transformation matrix shows good agreement with the theoretical one over the entire parameter space spanned by φ+ and φ−, evidencing the reliable and flexible implementation of a variety of single-mode operations. The errors of the estimated transformation matrix are evaluated through the normalised Frobenius norm of the error, ||Stheory − Sexpt||/||Stheory||, giving 4.9% ± 1.1% averaged over an entire parameter space. It should be emphasised that these errors come from the inaccuracies-
 of estimations, not those of the transformation matrices themselves. Although it is difficult to evaluate the actual accuracies of the transformation matrix except for errors in the estimation process, the accuracies of the operation will be verified through the multi-step operations in the following sections.
4

S-matrix (Theory) S-matrix (Experiment)
S-matrix (Theory) S-matrix (Experiment)
S-matrix element
a
Single-mode operations
b
Crossed single-mode operation
c
Generalised controlled-Z operation
d
e
S-matrix element
g
-2 0 2 -2 0 2 -2 0 2 -2 0 2
1
2
3
4
0
-1
-2
-3
-4
-2
0
2
-2
0
2
-2
0
2
-2
0
2
h
g
-2 0 2 -2 0 2 -2 0 2 -2 0 2
-2
0
2
-2
0
2
-2
0
2
-2
0
2
h
10.0
1
0.5
0
-0.5
-1
-10
0π 0π 0π 0π Φ+
0
π
π/2
0
π
π/2
0
π
π/2
0
π
π/2
Φ
0π 0π 0π 0π Φ+
0
π
π/2
0
π
π/2
0
π
π/2
0
π
π/2
Φ
θ = (tan 1[h–g/2], π/2, tan 1[h+g/2], π/2)
-
θ = ([Φ – Φ ]/2, [Φ + Φ ]/2, [Φ – Φ ]/2, [Φ + Φ ]/2)

+
+
+
+
1000 2h 1 g 0 0010 g 0 2h 1
()
S(θ) =
Crossed teleportation θ = (0, π/2, 0, π/2)
Ref 2 In 2 Out 2 = In 2
In 1
Out 1 = In 1
Ref 1
θ = (π/2, 0, 0, π/2)
Twisted teleportation
Out 2 =
In 2
In 2
In 1
Out 1 =
In 1
Ref 1
Ref 2
(x – x )2
‹‹ ››
ref out
+ (pref + pout)2
^^
^^
(ref, out)
(1, 1) – 1.63 dB – 1.45 dB 6.88 dB 6.97 dB
(2, 2) (1, 2) (2, 1)
(x – x )2
‹‹ ››
ref out
+ (pref + pout)2
^^
^^
(ref, out)
(1, 1) 6.84 dB 6.96 dB – 1.49 dB – 1.49 dB
(2, 2) (1, 2) (2, 1)
Estimation of macronode operations
Homodyne angles θ = (θ , θ , θ , θ )
ABCD
In 2
In 1
Ref 2 Out 2
Out 1
Ref 1
=
In 1 Out 1
Ref 1
In 2 Out 2
Ref 2
S(θ)
Reconstruction by correlation measurements
S11 S12 S13 S14 S21 S22 S23 S24 S31 S32 S33 S34 S41 S42 S43 S44
( )(xin1)
pin 1 x in2 pin 2
=
()
x^ out 1 pout 1 xout 2 pout 2
^ ^ ^
^ ^ ^ ^
V(Φ+,Φ-) =
S33 S34 S43 S44
S11 S12 S21 S22
( ) = ( ) = 1 sinΦ cosΦ + cosΦ
sinΦ ( cosΦ – cosΦ sinΦ )
-+ -- + +
+ S31 S32
S41 S42
00 00
S13 S14 S23 S24
( )( )( )
==
Φ+
Φ
0π
π
π/2
0
Quantum teleportation
p-shear
x-shear
45deg-squeezing
Phase rotation
Invalid input
Invalid input
Fig. 2 Examples of individual macronode operations. a How to estimate the transformation matrix S. Two reference modes and two output modes are measured, and then the transformation matrix is estimated through the correlations among them (See Methods). b Single-mode operations implementable at an individual macronode. The operation is controlled by two parameters φ+ and φ− that are determined by the measurement angles θj . Quantum teleportation, phase rotation, squeezing with 45 degrees rotation, -
x- and p-shear operations are illustrated in the figure. c Crossed single-mode quantum operation. Left: Theoretical S matrix. Right: Experimental S matrix. The matrix elements are expressed by two-dimensional colour maps spanned by φ+ and φ−. d Generalised controlled-Z operation. Left: Theoretical S matrix. Right: Experimental S matrix. The matrix elements are expressed by two-dimensional colour maps spanned by g and h. e Quantumness after quantum teleportation. Left: Crossed teleportation. Right:-
 Twisted teleportation.
Next, we examine two-mode operations at individual macronodes. As an example, we demonstrate the generalised Cz operation. This is an entangling operation and controlled by two parameters g and h that are determined by the measurement angles θj. The theoretical and experimental transformation matrices S are presented in Fig. 2d, showing good agreements between theory and experiment. The controllable off-diagonal elements (S23 and S41) indicate the ability of entangling two input modes. In these fi-
gures, the parameters (g and h) are swept in the range of [−2, 2], but these are just for the visibility of the figure, and they are not
5

limited. The normalised Frobenius norm of the error is calculated as 5.2% ± 1.0% averaged over the parameters spanned by [−2, 2]. It is noted again that these errors come from the estimation process. The other operations such as a beam splitter operation are shown in Supplementary Information. Apart from the accuracies of transformation matrices, quantumness is also critical in quantum operations since operations induce additional noise which may render operations non-quantum. To verify it, we me-
asure the entanglement between the reference and output modes after quantum teleportation operation (i.e., entanglement swapping). The existence of entanglement after the operations ensures the quantumness of those operations. Figure 2e shows the results of two types of teleportation, crossed and twisted quantum teleportation (see Methods how to implement crossed and twisted single-mode operations). The normalised correlations,
∆=
D
(xˆref − xˆout)2E
+
D
(pˆref + pˆout)2E
, are summarised in the tables in the figure. The correlations after quan
tum teleportation are below the corresponding shot noise levels, proving the existence of the entanglement1 hence the quantumness at each operational step in our optical quantum computer. These experimental results together with the results of transformation matrices ensure the validity of our quantum computer’s basic operations.
Multi-input multi-step quantum teleportation
As an example of a simple multi-input, multi-step operation, we demonstrate sequential quantum teleportation. As shown in Fig. 3a, we use 101 input modes for the “parallel” teleportation, where these 101 input modes are separately teleported from the left to the right of the two-dimensional graph. Figure 3b shows the results of up to 1,000 steps of the 101-input parallel teleportation. These 1,000 steps parallel teleportation are repeated by 1,000,000 times to obtain the accurate results. The inpu-
t-to-output teleportation gains and the correlations between the reference and output modes are estimated for each input mode as a function of the number of steps teleported. The x and p gains remain unity up to 1,000 steps teleportation, proving that the transformation at each step is reliably executed without accumulated errors. The noise powers of the quadrature sums or subtractions of the reference and the output modes, increase with the number of teleportation operations. This is because each-
 step of operation adds the noise. At the initial teleportation step, the noise power is below 0 dB, indicating quantum entanglement exists between the reference mode and the teleported output (i.e., entanglement swapping). After the first teleportation, the noise starts accumulating. Even though the noise power above 0 dB indicates no entanglement between the reference and output modes, the noise levels are well below those by classical teleportation that is the best achieved without quantum enta-
nglement (see Supplementary Information). The experimental noise powers show good agreement with theoretical ones, while there are slight errors at around 1,000 times teleportation. The errors at around 1,000 steps teleportation come from the slightly depleted quantum entanglement due to the locking method (see Supplementary Information). It is also observed that the noise power increased linearly with the number of teleportation steps, indicating that the sampling overhead required to achieve a c-
ertain precision also scales linearly. Overall, these results confirm our quantum computer works for a hundred inputs and can execute a large number of operational steps.
6

...
...
...
...
...
...
ab
Parallel Teleportation Circuit
References
Inputs
1
2
3
99
100
101
Outputs 1
2
3
99
100
101
...
...
x gain
0.0
0.5
1.0
No. of Teleportation
1 10 102 103
Modeindex
0
50 100
p gain
0.0
0.5
1.0
No. of Teleportation
1 10 102 103
Modeindex
0
50 100
p noise power (dB)
0
10
20
30
No. of Teleportation
1 10 102 103
Modeindex
0
50 100
x noise power (dB)
0
10
20
30
No. of Teleportation
1 10 102 103
Modeindex
0
50 100
...
...
...
...
...
...
No. of Teleportation
1 2 998 999 1000
Fig. 3 Multi-input, multi-step quantum teleportation. a Graph representation of parallel teleportation. b Results of parallel teleportation. Top two figures are for xˆ quadratures and the bottom two figures are for pˆ quadratures. The left figures represent the teleportation gains, and the right figures represent the noise powers of the quadrature sums for p quadrature or subtractions for x quadrature of the reference and the output modes after teleportation at each step.
Quantum state sorting
Our quantum computer has strength on flexible design of quantum circuits for a hundred inputs. To verify this capability, we demonstrate quantum state sorting. In this demonstration, we prepare multiple input modes with random displacements, then design a quantum circuit utilising crossed and twisted quantum teleportation to sort the input modes by their amplitudes. Figure 4a shows an example of five input modes quantum state sorting. The left figure shows the amplitudes of the input modes, and th-
e middle figures show the graph representations for the ascending- and descending-order quantum sorting circuits. In these graph representations, the macronodes for twisted and crossed teleportation are expressed in different colours, and the routes of quantum states are highlighted. The quantum circuits are designed via the cycle sort algorithm and implemented by the Python SDK. The right figures show the amplitudes of the output modes. While the input modes are randomly displaced, they are prope-
rly sorted in ascending and descending order at the outputs, respectively. It is also seen that the quantum states going through the longer routes such as outputs 1 and 2 have the larger error bars because of the accumulated noise through the multi-step teleportations. In order to evaluate the full ability of our quantum computer, we implement 101 input modes quantum state sorting in Fig. 4b. Randomly displaced input modes in the left are properly sorted in ascending- and descending-order, respect-
ively (see Supplementary Information for the actual graph of the quantum circuit). These results ensure the flexible circuit design of our quantum computer and reliable multi-step operations. In addition, the quantum state sorting is a useful technique for optimising quantum computation. For example, optimisation of the limited quantum resources is critical in a quantum computer. Quantum non-Gaussian states such as photon number states, Schr ̈odinger cat states, and GKP qubits are critical for qua-
ntum computing, but usually probabilistically created43, 44. When such states are probabilistically input to a quantum computer, we have to re-order the states to efficiently implement quantum circuits. In such situations, quantum state sorting presented here can be a key function.
7

Amplitude
0 5 10 0 5 10 0 5 10
Mode index
0
20
40
60
80
100
Input Ascending order
output
Descending order output
5 modes Quantum State Sorting b 101 modes Quantum State Sorting
a
Mode index
1
2
3
4
5
Amplitude
05
Input
Ascending order sorting
Descending order sorting
Amplitude
05
Output
Amplitude
05
Output
Mode index
1
2
3
4
5
Mode index
1
2
3
4
5
Twisted
teleportation Inputs 1
2
3
4
5
Outputs 1
2
3
4
5
Inputs 1
2
3
4
5
Outputs 1
2
3
4
5
Fig. 4 Quantum state sorting. Quantum states are randomly displaced, and then they are sorted by their amplitudes. a Example of five input modes quantum state sorting. b Example of 101 input modes quantum state sorting.
Discussion and Conclusion
We have developed an analog optical quantum computer cloud system. The machine utilises a large-scale entanglement multiplexed in time domain to implement measurement-based quantum computation with a hundred CV inputs at 100 MHz clock frequency. Arbitrary Gaussian operations can be programmed and executed via the Python SDK. We have verified operations including single-mode operations, two-mode operations and multi-input, multi-step teleportation. In addition, we have demonstrated quantum state so-
rting to highlight the capability and flexibility of our quantum computer. The clock frequency and the number of input modes will be easily extended. The current clock frequency of 100 MHz is determined by the limited bandwidth of the electronic circuits. Recent advancements of real-time quadrature measurements enable broadband measurements of squeezed states up to 43 GHz48 and entanglement up to 25 GHz49. These techniques are readily available to our quantum computer, and 10 GHz optical quantum c-
omputer is within reach. In addition, the number of input modes can be increased. The increased clock frequency means the shorter duration of wavepackets, resulting in the larger number of inputs even with the same optical setup. If the clock frequency is increased to 10 GHz from the current 100 MHz, the duration of the wavepackets is reduced to a hundredth, meaning the number of inputs increases from 100 to 10,000. Furthermore, the full potential of our optical parametric amplifier’s 6 THz bandwi-
dth may be harnessed with all-optical techniques40, leading to a THz-clock frequency with one million input modes in the future. The developed machine is specialised for Gaussian operations. Non-Gaussian operations can be realised with non-Gaussian ancillary state and non-linear feedforward42, 50. While non-Gaussian features are currently under development and fault-tolerant quantum computing is being pursued, our analog quantum computer is highly versatile and has practical applications in optimi-
sation and neural network. It will be ideal testbed for investigating the potential of analog quantum computer and open up new applications in a field of quantum information technology.
Methods
Architecture of optical quantum computer
In our optical quantum computer, the laser source is a continuous-wave fibre laser at 1545.32 nm. As shown in Fig. 1a, four OPAs with around 6 THz bandwidth, pumped by 772.66 nm laser beams, produce four squeezed vacuum states39. The squeezed vacuum state is assumed to be packetised in a ∆t = 10 ns duration, which is determined mainly by the limited bandwidth of the electronics. A pair of squeezed states is combined at a 50:50 beam splitter, generating a two-mode entangled state or so-called Einst-
ein-Podolsky-Rosen (EPR) states. Two
8

optical delay lines with the time delay of ∆t and N ∆t, respectively, are applied, where N is set to 101 in the current setup. The number of N determines the number of input modes to the quantum computer, and can be easily extended. These optical delay lines distribute the wavepackets at k-th time slot into (k + 1)-th and (k + N )-th time slots, respectively. At this point, we can group four wavepackets, or so-called micronodes, at the same time slot as a macronode. We also label these micronodes-
 as a, b, c and d as in Fig. 1a and b. A macronode at k-th time slot (or, simply k-th macronode) is wired with macronodes at (k − 1)-th, (k + 1)-th, (k − N )-th and (k + N )-th macronodes through the distributed EPR pairs. This is illustrated in Fig. 1b and c. The macronodes form a two-dimensional lattice on the surface of the cylindrical structure, which is the computational resource in our quantum computer. The circumference of the cylinder indicates the number of inputs, as the computation will-
 be executed toward the depth of the cylinder. After the generation of the large-scale entanglement distributed in time domain, four beam splitters are applied, followed by four homodyne detections as in Fig. 1a. The four beam splitters, which is called as a four-splitter, superimpose the four input modes in an equal weight. The homodyne detector measures the quadratures at a given angle θj(t),
qˆj(t) = xˆj(t) sin θj(t) + pˆj(t) cos θj(t), (2)
where j = A, B, C, D is the label for the mode measured by each homodyne detector. We can arbitrarily change the measurement angles θj(t) by controlling local oscillator phases using electro-optical modulators (EOMs). The signals to the EOMs are generated by Field Programmable Gate Array (FPGA) with 100 MHz clock frequency. The outputs of the homodyne detectors are packetised to provide quadrature values qˆj
k = R dtf (t)qˆj(t) where f (t) is a real mode function (see Supplementary Information). By changing the homodyne measurement angles, θj
k, at the k-th macronode, we can apply operations on two micronodes (b and d) at k-th macronodes and obtain outputs appearing at the k + 1 and k + N macronodes shown in Fig. 1e. The operation implemented at each macronode is two generalised quantum teleportation V (θm
k , θn
k ) ((m, n) = (B, A) or (D, C)) sandwiched
by two 50:50 beam splitters, where the generalised teleportation V (θm
k , θn
k ) consists of rotation, squeezing and rotation operations (see Supplementary Information). In this individual macronode operation, we can implement two-mode operations such as a controlled-Z and a beam splitter. In addition, by applying the same generalised teleportation V (θB
k , θA
k ) = V (θD
k , θC
k ) (i.e., θB
k = θD
k and θA
k = θC
k ), we can implement two same but independent single-mode operations, such as teleportation, rotation, squeezing and shear, on the input modes b and d. Furthermore, by applying the opposite generalised teleportation V (θB
k , θA
k ) = −V (θD
k , θC
k ) (i.e., θB
k = θC
k
and θA
k = θD
k ), we can implement two same but independent single-mode operations on the input modes b and d in a twisted way (i.e., (b, k) → (d, k + N ) and (d, k) → (b, k + 1). In order to distinguish these two types of the single-mode operations, we call the former a crossed single-mode operation (i.e., (b, k) → (b, k + 1), (d, k) → (d, k + N )) and the later a twisted single-mode operation (i.e., (b, k) → (d, k + N ), (d, k) → (b, k + 1)). Feedforward operations, i.e., displacement operations according to-
 the measurement results, are required to complete the measurement-based operations. Those operations are, however, implemented after the measurement because the measurement and feedforward are commutative in the Gaussian domain. Thus, feedforward operations are post-processed in our system. Initialisation and readout are two special cases where we need to access qˆi
k (i = a, b, c, d) through the
measured quadratures qˆj
k (j = A, B, C, D). It should be emphasised that the computational input and output modes (a, b, c and d) are different from what are measured at the homodyne detectors (A, B, C and D). In order to access qˆi
k (i = a, b, c, d), we set four measurement angles θj
k to the same value, i.e., measure the same quadratures such as xˆ or pˆ at all four homodyne detectors. Under such a situation, we can undo the four-splitter transformation by applying an inverse transformation matrix of the four splitter and obtain qˆi
k
(i = a, b, c, d)(see Supplementary Information).
Estimation of transformation matrices
In order to estimate the transformation matrix S in Eq. (1), we use the reference modes as shown in Fig. 2a since we cannot directly measure the input modes. In advance, we measure the quadrature correlations between the reference modes and input modes qˆinqˆT
ref where qˆref = (xˆref1, pˆref1, xˆref2, pˆref2)T is the reference mode quadratures and ⟨·⟩ means an average of symmetric ordered operators. It should be noted that this qˆinqˆT
ref
is a diagonal matrix. Then, we measure the correlation between the reference and output modes qˆoutqˆT
ref .
9

Since the additional noise term ∆noise is independent from the reference mode quadratures, ∆noiseqˆT
ref = 0,
the transformation matrix in Eq. (1) is given as S = qˆoutqˆT
ref qˆinqˆT
ref
−1.
Acknowledgement
This work was supported by the Japan Science and Technology (JST) Agency (Moonshot R & D) Grant No. JPMJMS2064, the UTokyo Foundation, and donations from Nichia Corporation of Japan. H.N. acknowledges financial support from The Forefront Physics and Mathematics Program to Drive Transformation (FoPM). H.N. and W.A. acknowledge funding from the Japan Society for the Promotion of Science KAKENHI (No. 23K13040, 24KJ0745). We thank Professor Kenji Doya for valuable comments on the application of optica-
l quantum computing.
Author contributions
A.F. and H.Y. led and supervised the project. S.Y., A.S. and H.Y. designed and built the experimental setup with assistance from W.A., K.T. and J.Y. A.S. designed and built the FPGA and electronic systems. Y.C. adjusted and modified the experimental setup. S.Y. prepared the code, recorded and analysed the data with assistance from A.S. and H.Y. W.A., H.N. and S.Y. performed basic theoretical analysis and calculations necessary for SDK and cloud system. W.A., H.N., K.T., A.S., S.Y., H.Y., and J.Y. -
discussed theoretical analysis, SDK, and the cloud system. T. Hiraoka conceived and supervised the development of the SDK, cloud system and related software. T.K., A.I., T.U. and T. Hashimoto developed and provided the OPAs used in the experiment. H.Y. and S.Y. wrote the paper with input from all authors.
Additional information
Supplementary Information is available for this paper.
References
[1] Asavanant, W. & Furusawa, A. Optical quantum computers: A Route to Practical Continuous Variable Quantum Information Processing (AIP Publishing LLC, 2022).
[2] Takeda, S. & Furusawa, A. Toward large-scale fault-tolerant universal photonic quantum computing. APL Photonics 4, 060902 (2019).
[3] O’brien, J. L. Optical quantum computing. Science 318, 1567–1570 (2007).
[4] Zhong, H.-S. et al. Quantum computational advantage using photons. Science 370, 1460–1463 (2020).
[5] Asavanant, W. et al. Time-domain-multiplexed measurement-based quantum operations with 25-MHz clock frequency. Physical Review Applied 16, 034005 (2021).
[6] Larsen, M. V., Guo, X., Breum, C. R., Neergaard-Nielsen, J. S. & Andersen, U. L. Deterministic multimode gates on a scalable photonic quantum computing platform. Nature Physics 17, 1018–1023 (2021).
[7] Aghaee Rad, H. et al. Scaling and networking a modular photonic quantum computer. Nature 638, 912–919 (2025).
[8] Asavanant, W. et al. Generation of time-domain-multiplexed two-dimensional cluster state. Science 366, 373–376 (2019).
[9] Larsen, M. V., Guo, X., Breum, C. R., Neergaard-Nielsen, J. S. & Andersen, U. L. Deterministic generation of a two-dimensional cluster state. Science 366, 369–372 (2019).
[10] Killoran, N. et al. Continuous-variable quantum neural networks. Physical Review Research 1, 033063 (2019).
10

[11] Bangar, S., Sunny, L., Yeter-Aydeniz, K. & Siopsis, G. Experimentally realizable continuous-variable quantum neural networks. Physical Review A 108, 042414 (2023).
[12] Anand, P., Chandra, M. G. & Khandelwal, A. Time-series forecasting using continuous variables-based quantum neural networks, 994–999 (IEEE, 2024).
[13] Bangar, S., Sunny, L., Yeter-Aydeniz, K. & Siopsis, G. Continuous-variable quantum Boltzmann machine. Quantum Machine Intelligence 7, 1–15 (2025).
[14] Nielsen, M. A. & Chuang, I. L. Quantum computation and quantum information (Cambridge university press, 2010).
[15] Gyongyosi, L. & Imre, S. A survey on quantum computing technology. Computer Science Review 31, 51–71 (2019).
[16] Gill, S. S. et al. Quantum computing: A taxonomy, systematic review and future directions. Software: Practice and Experience 52, 66–114 (2022).
[17] Bauer, B., Bravyi, S., Motta, M. & Chan, G. K.-L. Quantum algorithms for quantum chemistry and quantum materials science. Chemical reviews 120, 12685–12717 (2020).
[18] Herman, D. et al. Quantum computing for finance. Nature Reviews Physics 5, 450–465 (2023).
[19] Perdomo-Ortiz, A., Benedetti, M., Realpe-Go ́mez, J. & Biswas, R. Opportunities and challenges for quantum-assisted machine learning in near-term quantum computers. Quantum Science and Technology 3, 030502 (2018).
[20] Ladd, T. D. et al. Quantum computers. Nature 464, 45–53 (2010).
[21] Preskill, J. Quantum computing in the NISQ era and beyond. Quantum 2, 79 (2018).
[22] Arute, F. et al. Quantum supremacy using a programmable superconducting processor. Nature 574, 505–510 (2019).
[23] Zhu, Q. et al. Quantum computational advantage via 60-qubit 24-cycle random circuit sampling. Science bulletin 67, 240–245 (2022).
[24] Kim, Y. et al. Evidence for the utility of quantum computing before fault tolerance. Nature 618, 500–505 (2023).
[25] AI, G. Q. et al. Quantum error correction below the surface code threshold. Nature 638, 920 (2024).
[26] Gao, D. et al. Establishing a new benchmark in quantum computational advantage with 105-qubit zuchongzhi 3.0 processor. Physical Review Letters 134, 090601 (2025).
[27] MacLennan, B. J. Encyclopedia of Complexity and System Science, Ch. Analog Computation, 271–294 (2009).
[28] MacLennan, B. J. The promise of analog computation. International Journal of General Systems 43, 682–696 (2014).
[29] Krotov, D. A new frontier for Hopfield networks. Nature Reviews Physics 5, 366–367 (2023).
[30] Mead, C. A. & Mahowald, M. A. A silicon model of early visual processing. Neural networks 1, 91–97 (1988).
[31] Braunstein, S. L. & Van Loock, P. Quantum information with continuous variables. Reviews of modern physics 77, 513–577 (2005).
11

[32] Kendon, V. M., Nemoto, K. & Munro, W. J. Quantum analogue computing. Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences 368, 3609–3620 (2010).
[33] Raussendorf, R. & Briegel, H. J. A one-way quantum computer. Physical Review Letters 86, 5188 (2001).
[34] Menicucci, N. C. et al. Universal quantum computation with continuous-variable cluster states. Physical Review Letters 97, 110501 (2006).
[35] Briegel, H. J., Browne, D. E., D ̈ur, W., Raussendorf, R. & Van den Nest, M. Measurement-based quantum computation. Nature Physics 5, 19–26 (2009).
[36] Menicucci, N. C. Temporal-mode continuous-variable cluster states using linear optics. Physical Review A 83, 062314 (2011).
[37] Yokoyama, S. et al. Ultra-large-scale continuous-variable cluster states multiplexed in the time domain. Nature Photonics 7, 982–986 (2013).
[38] Yoshikawa, J.-i. et al. Invited article: Generation of one-million-mode continuous-variable cluster state by unlimited time-domain multiplexing. APL photonics 1, 060801 (2016).
[39] Kashiwazaki, T. et al. Over-8-dB squeezed light generation by a broadband waveguide optical parametric amplifier toward fault-tolerant ultra-fast quantum computers. Applied Physics Letters 122, 234003 (2023).
[40] Yamashima, T. et al. All-optical measurement-device-free feedforward enabling ultra-fast quantum information processing. Optics Express 33, 5769–5780 (2025).
[41] Alexander, R. N. & Menicucci, N. C. Flexible quantum circuits using scalable continuous-variable cluster states. Physical Review A 93, 062326 (2016).
[42] Gottesman, D., Kitaev, A. & Preskill, J. Encoding a qubit in an oscillator. Physical Review A 64, 012310 (2001).
[43] Konno, S. et al. Logical states for fault-tolerant quantum computation with propagating light. Science 383, 289–293 (2024).
[44] Larsen, M. et al. Integrated photonic source of Gottesman–Kitaev–Preskill qubits. Nature (2025).
[45] Walshe, B. W., Alexander, R. N., Menicucci, N. C. & Baragiola, B. Q. Streamlined quantum computing with macronode cluster states. Physical Review A 104, 062427 (2021).
[46] Yoshikawa, J.-i. et al. Configuration design of multimode gaussian operations on continuous-variable quad-rail lattice cluster states (2025). arXiv:2506.11236.
[47] Weedbrook, C. et al. Gaussian quantum information. Reviews of Modern Physics 84, 621–669 (2012).
[48] Inoue, A. et al. Toward a multi-core ultra-fast optical quantum processor: 43-GHz bandwidth real-time amplitude measurement of 5-dB squeezed light using modularized optical parametric amplifier with 5G technology. Applied Physics Letters 122, 104001 (2023).
[49] Kawasaki, A. et al. Real-time observation of picosecond-timescale optical quantum entanglement towards ultrafast quantum information processing. Nature Photonics 19, 271–276 (2025).
[50] Sakaguchi, A. et al. Nonlinear feedforward enabling quantum computation. Nature Communications 14, 3817 (2023).
[51] Kashiwazaki, T. et al. Fabrication of low-loss quasi-single-mode PPLN waveguide and its application to a modularized broadband high-level squeezer. Applied Physics Letters 119 (2021).
12

Supplementary Information for Full-stack Analog Optical Quantum
Computer with A Hundred Inputs
1 Measurement-based quantum computation using quad-rail lattice cluster state
1.1 Quantum resource for measurement-based quantum computation
In this section, we describe the structure of the quad-rail lattice (QRL) cluster state36, 41, 45, which serves as a resource for measurement-based quantum computation. We also provide equivalent representations that will be used for further calculations in the subsequent sections. Figure S1 shows the schematics of our optical setup. Four squeezed vacuum states are the initial modes of this setup, whose amplitude operators are given by,
√
2ˆaj(i)
k=
(
erj xˆj(0)
k + ie−rj pˆj(0)
k (j = A, C)
e−rj xˆj(0)
k + ierj pˆj(0)
k (j = B, D). (3)
where rj (≥ 0) is a squeezing parameter and k is the time step or the index of wavepackets. Modes A and C correspond to pˆ-squeezed vacuum states, while modes B and D correspond to xˆ-squeezed vacuum states. Here,
qˆj(0)
k (qˆ = xˆ, pˆ) denotes the quadrature operators of vacuum modes, which satisfy:
qˆj(0)
k = 0, qˆj(0)
k
2 =1
2 , (4)
where ħ = 1.
NΔt Delay
Δt Delay
a
b
c
d
A(i) p-squeezed
p-squeezed
x-squeezed
x-squeezed
B(i)
C(i)
D(i)
(j=A, B, C, D) Initial mode Computational mode Measured mode
(j=a, b, c, d) (j=A, B, C, D)
A
B
C
D
LO
π
π
π
π
π
π
Fig. S1 Measurement-based quantum computation using quad-rail lattice cluster states.
The initial squeezed vacuum modes first pass through two 50:50 beam splitters and two optical delay lines with time delays of ∆t and N ∆t, resulting in computational modes (also referred to as distributed modes) labelled as a, b, c, and d in Fig. S1. Since the time duration of a wavepacket is ∆t, the ∆t-delay line shifts the wavepacket by one wavepacket (or one time step), while the N ∆t-delay line shifts the wavepacket by N wavepackets (or N time steps). The definition of a beam splitter may vary-
 slightly across the literature. In this Supplementary Information, we define the transformation of a 50:50 beam splitter between modes m and n in the Heisenberg picture as shown in Fig. S2:
ˆam′
aˆn′ = Bˆ†
m,n
ˆam
ˆan Bˆm,n = B0
aˆm
ˆan , B0 = √12
1 −1
1 1 . (5)
13

m
n
π
m’
n’
Fig. S2 Beam splitter transformation in the Heisenberg picture used in this Supplementary Information.
From the above transformations and the time-step shifts introduced by the optical delay lines, we find that the computational modes can be expressed in terms of the initial modes as

  
qˆa
k
qˆb
k
qˆc
k
qˆd
k

  
= √12

   
qˆA(i)
k − qˆB(i)
k
qˆA(i)
k−1 + qˆB(i)
k−1
qˆC(i)
k − qˆD(i)
k
qˆC(i)
k−N + qˆD(i)
k−N

   
. (6)
Next, these computational modes pass through four beam splitters (also referred to as a four-splitter), resulting in the measured modes A, B, C, and D in Fig. S1. The relationship between the measured modes A, B, C, and D, and the computational modes a, b, c, and d can be described by the transformation of a four-splitter:

  
qˆA
k
qˆB
k
qˆC
k
qˆD
k

  
=B

  
qˆa
k
qˆb
k
qˆc
k
qˆd
k

  
, B = (B0 ⊗ I2)(I2 ⊗ B−1
0 )= 1
2

  
1 1 −1 −1 −1 1 1 −1 111 1 −1 1 −1 1

  
, (7)
where I2 denotes 2 by 2 identity matrix. As a result, the measured quadratures at the homodyne detectors can be expressed in terms of the quadratures of initial modes8, 37:

  
qˆA
k
qˆB
k
qˆC
k
qˆD
k

  
=1
2√2

   
qˆA(i)
k − qˆB(i)
k − qˆC(i)
k + qˆD(i)
k + qˆA(i)
k−1 + qˆB(i)
k−1 − qˆC(i)
k−N − qˆD(i)
k−N
−qˆA(i)
k + qˆB(i)
k + qˆC(i)
k − qˆD(i)
k + qˆA(i)
k−1 + qˆB(i)
k−1 − qˆC(i)
k−N − qˆD(i)
k−N
qˆA(i)
k − qˆB(i)
k + qˆC(i)
k − qˆD(i)
k + qˆA(i)
k−1 + qˆB(i)
k−1 + qˆC(i)
k−N + qˆD(i)
k−N
−qˆA(i)
k + qˆB(i)
k − qˆC(i)
k + qˆD(i)
k + qˆA(i)
k−1 + qˆB(i)
k−1 + qˆC(i)
k−N + qˆD(i)
k−N

   
. (8)
From these relationships, we derive the equivalent nullifier representations, specifically those for the quadrail lattice cluster state, EPR pairs, and the underlying squeezed states:

  
δˆA
δˆkB
δˆkC
δˆkD
k

  
≡1
2√2

  
pˆA
k − pˆB
k + pˆC
k − pˆD
k + pˆA
k+1 + pˆB
k+1 + pˆC
k+1 + pˆD
k+1
−xˆA
k + xˆB
k − xˆC
k + xˆD
k + xˆA
k+1 + xˆB
k+1 + xˆC
k+1 + xˆD
k+1
−pˆA
k + pˆB
k + pˆC
k − pˆD
k − pˆA
k+N − pˆB
k+N + pˆC
k+N + pˆD
k+N
xˆA
k − xˆB
k − xˆC
k + xˆD
k − xˆA
k+N − xˆB
k+N + xˆC
k+N + xˆD
k+N

  
(9)
= √12

  
pˆa
k + pˆb
k+1
−xˆa
k + xˆb
k+1
pˆc
k + pˆd
k+N
−xˆc
k + xˆd
k+N

  
(10)
=

   
pˆA(i)
k
xˆB(i)
k
pˆC(i)
k
xˆD(i)
k

   
(11)
=

   
e−rA pˆA(0)
k
e−rB xˆB(0)
k
e−rC pˆC(0)
k
e−rD xˆD(0)
k

   
. (12)
14

1.2 Measurement and numerical Feedforward
As described in the Methods section of the main manuscript, quantum operations are implemented by repeatedly measuring the quadratures at each time step (or macronode) k, denoted as:
mˆ j
k = xˆj
k sin θj
k + pˆj
k cos θj
k (j = A, B, C, D). (13)
At macronode k, the computational modes b and d are the input modes, which are processed and output in the computational mode b at macronode k + 1, and mode d at macronode k + N . The values of θj
k in Eq. (13) are chosen based on the target quantum operations described in later sections. The measurement outcomes of those quadratures, mk = (mA
k , mB
k , mC
k , mD
k )T , are used to perform feedforward displacements which are applied to the computational modes (b, k + 1) and (d, k + N ):

  
xˆb
k+1
pˆb
k+1
xˆd
k+N
pˆd
k+N

  
feedforward
−−−−−−−−→
displacement

  
xˆb
k+1
pˆb
k+1
xˆd
k+N
pˆd
k+N

  
+ Ekmk +

  
xb
k+1
pb
k+1
xd
k+N
pd
k+N

  
, (14)
where Ek(θk) is a feedforward coefficient matrix determined by the measurement angles θk = θA
k , θB
k , θC
k , θD
k
T
at macronode k. The terms xb
k+1 and pb
k+1 [xd
k+N and pd
k+N ] represent additional displacements applicable to the mode (b, k + 1) [(d, k + N )] that are independent of the feedforward. In the experiment, all modes, including those to which feedforward is applied, are eventually measured via homodyne detections. Since the four-splitter operation and the homodyne detection that should follow the feedforward displacement are linear, the feedforward displacement can be effectively implemented numerically after the measurement outcomes are acquired. The su-
pposed measurement outcomes mk at macronode k with feedforward displacements are numerically calculated by adding the preceding measurement outcomes at macronodes k − 1 and k − N (mk−1 and mk−N ),
and arbitrary displacements xb
k, pb
k, xd
k, pd
k
T to the raw measured outcomes m′
k (i.e., without feedforward operation):
mk = m′
k + Fkmk−1 + Gkmk−N + Hk

  
xb
k
pb
k
xd
k
pd
k

  
, (15)
where the matrix Fk(θk, θk−1) corresponds to a feedforward coefficient matrix from k − 1 to k, Gk(θk, θk−N ) represents that from k − N to k, and Hk(θk) is a coefficient matrix for the arbitrary displacement. These feedforward matrices can be explicitly written as:
Fk = diag(sin θk)Be2eT
1 + diag(cos θk)Be2eT
2 Ek−1, (16)
Gk = diag(sin θk)Be4eT
3 + diag(cos θk)Be4eT
4 Ek−N , (17)
Hk = diag(sin θk)B e2eT
1 + e4eT
3 + diag(cos θk)B e2eT
2 + e4eT
4 , (18)
where diag(sin θk) = diag(sin θA
k , sin θB
k , sin θC
k , sin θD
k ), diag(cos θk) = diag(cos θA
k , cos θB
k , cos θC
k , cos θD
k ), e1 =
(1, 0, 0, 0)T , e2 = (0, 1, 0, 0)T , e3 = (0, 0, 1, 0)T , and e4 = (0, 0, 0, 1)T . When implementing quantum operations, we select the type of operations and their parameters. Accordingly, the measurement angles θk are determined, and the corresponding feedforward matrix Ek is uniquely determined. Then, the other matrices Fk and Gk for the numerical feedforward are calculated using the above equations. Arbitrary displacements are also introduced, if required. In the following sections, we will exp-
lain how the quantum operations are realised by changing the measurement angles and feedforward. After that, we will discuss two exceptional cases: readout and initialisation.
15

1.3 Individual macronode operations
In this section, we will describe individual macronode operations. The input computational modes (b, k) and (d, k) are transformed into the output computational modes (b, k +1) and (d, k +N ). Prior to the measurement and the subsequent feedforward from macronode k, the output modes (b, k + 1) and (d, k + N ) are expressed as41:

  
xˆb
k+1
pˆb
k+1
xˆd
k+N
pˆd
k+N

  
= S(θk)

  
xˆb
k
pˆb
k
xˆd
k
pˆd
k

  
− T (θk)

  
ˆmA
k
ˆmB
k
ˆmC
k
ˆmD
k

  
+
√ 2

  
δˆB
δˆkA
δˆkD
δˆkC
k

  
. (19)
In Eq. (19), the first term of the right-hand side represents a two-mode Gaussian operation that can be implemented by adjusting the measurement angles at macronode k, with the transformation matrix of the operation, S(θk). The second term represents an additional term that will be cancelled by the measurement and feedforward displacement, as in Eq. (14), where we set Ek = T (θk). The third term represents the additional noise due to finite entanglement, i.e., non-zero nullifier. Here S(θk) and T -
(θk) are given by:
S(θk) = (B−1
0 ⊗ I2) V (θB
k + θA
k , θB
k − θA
k) 0
0 V (θD
k + θC
k , θD
k − θC
k ) (B0 ⊗ I2), (20)
T (θk) = (B−1
0 ⊗ I2) L(θA
k , θB
k) 0
0 L(θC
k , θD
k ) , (21)
where the generalised teleportation matrix V and feedforward coefficients matrix L are defined with the rotation matrix R and squeezing matrix Σ as:
V (φ+, φ−) = R φ+
2 −π
2 Σ tan φ−
2 R φ+
2 (22)
=1
sin φ−
sin φ+ cos φ− + cos φ+ cos φ− − cos φ+ sin φ+
, (23)
R(θ) = cos θ − sin θ
sin θ cos θ , (24)
Σ(t) = t 0
01
t
, (25)
L(θ1, θ2) =
√2
sin(θ2 − θ1)
cos θ2 cos θ1 sin θ2 sin θ1
. (26)
Here we assume that θB
k − θA
k ̸= 0 (mod 2π) and θD
k − θC
k ̸= 0 (mod 2π) to avoid the divergence of L. Also note that the expression of V is slightly different from that of the main manuscript. Thus, by properly performing the measurement and feedforward, we can realise a two-mode Gaussian operation S(θk) on the input modes (b, k) and (d, k), resulting in the output modes (b, k + 1) and (d, k + N ) up to the additional noise due to finite entanglement. It is also worth noting that the expression of S(θk) in Eq. (20) indicates that a quantum operation in-
 the current system can be decomposed into two generalised teleportation as in Fig. S3. Two inputs (b, k) and (d, k) are first combined at a 50:50 beam splitter, then the outputs are teleported and combined at another 50:50 beam splitter.
1.3.1 Output Swapping
Before discussing specific quantum operations, we will explain an important characteristic of our system. From Eq. (23), it is clear that V (φ+, −φ−) = −V (φ+, φ−). Along with the expression in Eq. (20), it can be seen that two output modes can be swapped by exchanging θA
k and θB
k:
S(θB
k , θA
k , θC
k , θD
k)= 0 1
1 0 ⊗ I2 S(θA
k , θB
k , θC
k , θD
k ). (27)
This property is useful when we want to apply the same operation, but want to obtain the switched outputs.
16

π
LO
(b, k+1)
(d, k+N)
(d, k+N)
(b, k)
Input
Output (b, k+1)
Output
Teleportation-based operation
Equivalent circuit
Teleportation-based operation
Output
Input (d, k)
(a, k)
π
(c, k)
π
(b, k)
Input
(d, k)
π
Feedforward
Feedforward
ππ
ππ
Fig. S3 Quantum operation at an individual macronode (left) and its equivalent circuit (right). All beam splitters are 50:50 beam splitters.
1.3.2 Single-mode operations
A special case of a two-mode Gaussian operation in our system is two identical but independent single-mode operations. The equivalent circuit in Fig. S3 shows that if we set the measurement angles as θA
k = θC
k and
θB
k = θD
k , two teleportation operations become identical and the beam splitter operations are cancelled. This results in a single-mode operation applied to each input separately. In particular, we refer to this single-mode operation as “crossed single-mode operation”. As explained in the previous section, we can swap the outputs by exchanging θA
k and θB
k . Thus by setting θB
k = θC
k and θA
k = θD
k , we can apply the single-mode operation to each input, but the outputs are swapped, which is referred to as a “twisted single-mode operation”. The followings are fundamental single-mode operations implementable at an individual macronode5, 41:
• Phase rotation
V ψ+π
2, π
2 = R(ψ) = cos ψ − sin ψ
sin ψ cos ψ . (28)
• X-invariant shear
Vπ
2 + tan−1 κ, π
2 − tan−1 κ = P (κ) = 1 0
2κ 1 . (29)
• P-invariant shear
V cot−1 η, cot−1 η = Q(η) = 1 2η
0 1 . (30)
• Squeezing with -90 degree phase rotation
V 0, 2 tan−1 t = R − π
2 Σ(t) = 0 1
t
−t 0 . (31)
• 45 degree squeezing
Vπ
2 , 2 tan−1 t = R − π
4 Σ(t)R( π
4) = 1
2
t+ 1
t −t + 1
t
−t + 1
t t+ 1
t
= csc 2ψ cot 2ψ
cot 2ψ csc 2ψ , (t = tan ψ). (32)
In addition to these fundamental single-mode operations, we can implement an arbitrary single-mode Gaussian operation using two macronodes.
17

• Arbitrary single-mode Gaussian operation
V 2β, 2 tan−1 eλ V α − β, π
2 = R(α)Σ(λ)R(β) (33)
1.3.3 Two-mode operations
Next, we will show two fundamental two-mode operations, i.e., a beam splitter41 and a generalised controlled-Z operation46.
• Beam splitter
Sψ
2 + cos−1 r
2 ,ψ
2 + cos−1 r
2 +π
2, ψ
2 − cos−1 r
2 ,ψ
2 − cos−1 r
2 +π
2
= [I2 ⊗ R(ψ)] I2 0
0 R −π
2
[B2(r) ⊗ I2] I2 0
0R π
2
, (34)
where B2(r) = r −√1 − r2
√1 − r2 r .
This equation indicates that the beam splitter operation in our system inherently introduces additional phase rotations as illustrated in Fig. S4.
π
(b, k)
Input
(d, k) (d, k+N)
(b, k+1)
Output
Fig. S4 Beam splitter operation at an individual macronode.
• Generalised Controlled-Z
S tan−1 g − h
2 ,π
2 , tan−1 g + h
2 ,π
2=

  
1 0 00 0 1 00 2g h 1 0 h 2g 0 1

  
. (35)
This generalised controlled-Z operation reduces to a controlled-Z operation with h = 045.
1.4 Readout and initialisation on individual macronode
In this section, we will explain two special cases, i.e., readout41 and initialisation, where we set the measurement angles and feedforward operations differently from those used when implementing quantum operations.
1.4.1 Readout
When performing readout at macronode k, we set all measurement angles to the same value θk,
θk ≡ θA
k = θB
k = θC
k = θD
k . (36)
In this setting, the quadrature operators mˆ j
k with the angle θk at the computational modes (j = a, b, c, d) and the measured modes (j = A, B, C, D) are related with an inverse operation of the four-splitter as,

  
ˆma
k
ˆmb
k
ˆmc
k
ˆmd
k

  
= B−1

  
ˆmA
k
mˆ B
k
mˆ C
k
ˆmD
k

  
. (37)
18

Measured quadrature
Initialised state Thermal state
without feedforward
x
x(-θ)
p p(θ)
p(-θ)
θ
Fig. S5 Initialisation.
Thus, we can access the measurement outcomes of the computational modes by calculating B−1mk with the actual measurement outcomes mk = (mA
k , mB
k , mC
k , mD
k )T .
1.4.2 Initialisation
Next, we consider the initialisation. Let’s assume that we are going to begin quantum operations at macronode k, i.e., the computational modes (b, k) and (d, k). If we simply ignore all preceding macronodes, the initial modes (b, k) [(d, k)] is a thermal state which is given by tracing out its corresponding entangled mode (a, k − 1) [(c, k − N )]. Generally, a thermal state is not desirable, so we should measure the entangled mode (a, k − 1) [(c, k − N )], and perform feedforward operation to prep-
are a purer state, i.e., a squeezed thermal state, at (b, k) [(d, k)] (see Fig. S5). In the following, for the sake of explanation, we assume that we measure macronode k to prepare initial input states at (b, k + 1) and (d, k + N ). Also, we define the quadratures xˆi
k(θ) and pˆk
i (θ) (i =a, b, c, d) in the rotated frame as
xˆi
k (θ)
pˆi
k(θ) ≡ R(θ) xˆi
k
pˆi
k
. (38)
The EPR correlation between (a, k) and (b, k + 1) [(c, k) and (d, k + N )] still exist in this rotating frame
as5, 41,
[I2 ⊗ R(−θk)]

  
δˆB
δˆkA
δˆkD
δˆkC
k

  
= √12

  
−xˆa
k(θk) + xˆb
k+1 (−θk )
pˆa
k(θk) + pˆb
k+1 (−θk )
−xˆc
k(θk) + xˆd
k+N (−θk)
pˆc
k(θk) + pˆd
k+N (−θk)

  
. (39)
Here δj
k (j = A, B, C, D) is a nullifier given in Eq. (9). When we measure macronode k, we set all the measurement angles to the same value θk as in the case of readout. Thus, according to Eq. (37), we can access the quadratures ˆmi
k (i =a, b, c, d) which is equivalent to
pˆi
k (θk ).
Eq. (39) can be rearranged by replacing pˆi
k(θk) with ˆmi
k as,

  
xˆb
k+1 (−θk )
pˆb
k+1 (−θk )
xˆd
k+N (−θk)
pˆd
k+N (−θk)

  
=

  
xˆa
k (θk ) 0 xˆc
k (θk ) 0

  
−

  
0 mˆ a
k
0 mˆ c
k

  
+
√
2[I2 ⊗ R(−θk)]

  
δˆB
δˆkA
δˆkD
δˆkC
k

  
. (40)
The second term of the right-hand side of the equation can be cancelled out by the feedforward displacement to macronodes k + 1 and k + N as in Eq. (14). The feedforward coefficient matrix Ek is given as
Ek = − sin θ 0
cos θ 0 ⊗ I2 B−1. (41)
19

After the feedforward operation, the initialised modes at (b, k + 1) and (d, k + N ) are squeezed thermal states with the squeezing angle −θk, whose quadrature means and mean squares are given as,
xˆb
k+1(−θk) = pˆb
k+1(−θk) = xˆb
k+N (−θk) = pˆb
k+N (−θk) = 0, (42)
xˆb
k+1(−θk) 2 = cos2 θk
4 e2rA + e−2rB + sin2 θk
4 e−2rA + e2rB , (43)
pˆb
k+1(−θk) 2 = cos2 θke−2rA + sin2 θke−2rB , (44)
xˆd
k+N (−θk) 2 = cos2 θk
4 e2rC + e−2rD + sin2 θk
4 e−2rC + e2rD , (45)
pˆd
k+N (−θk) 2 = cos2 θke−2rC + sin2 θke−2rD . (46)
It is also noted that we can add an arbitrary displacement as in Eq. (15). Thus, initial states that can be prepared are actually displaced squeezed thermal states.
1.5 Experimental setup
In this section, we will explain additional information about our experimental setup that are not covered in the main manuscript. In our experiment, the duration of a wavepacket is set to ∆t = 10 ns, which is primarily limited by the electronic devices such as a homodyne detector and an FPGA. The corresponding length of the wavepacket in free space is 3 m. While an additional 3 m free-space optical path is added for the short delay line (see Fig. S1), 200 m of fibre is used for the long delay line-
. The lengths of the delay lines are finely tuned using free-space translation stages. The interference visibilities at the homodyne detectors are 98% ∼ 99% on average. Total optical propagation losses are estimated as less than 1% for the path including the short delay line, and less than 8% for the path including the long delay line. Local oscillator (LO) powers at the homodyne detectors are set to around 2.7 mW, giving a shot noise clearance of about 17 dB at 100 MHz. The detailed information o-
f our OPA is found in Refs39, 51.
For a stable operation, the experimental setup is located inside a temperature-controlled booth. In addition, the optics are covered to avoid vibration and air flow. The optical path lengths are feedback-controlled by FPGA controllers. For this purpose, frequency-shifted probe beams are injected into the OPAs, and a few μW of probe beams propagate in the interferometer. To prevent the probe beams from affecting the measurements of quantum states at the homodyne detectors, we switch off the probe b-
eams when measuring the quantum states and performing quantum operations. The switching period is 1.7 ms, with around 1 ms measurement window. During this measurement window, feedback signals to actuators are held, and the optical path length slightly drifts due to environmental fluctuations, which can be seen in the nullifier measurements in next section. The quadrature signals from the homodyne detectors are recorded by an FPGA (AMD ZCU208) with an ADC sampling frequency of 1.6 GHz. 16 points of-
 the quadrature signals are used to calculate a quadrature value of each wavepacket. The shape of wavepacket is f (t) = t exp(−γ2t2) where γ = 2π × 140 MHz. The detailed method of packetisation can be found in, for example, the supplementary information of Refs8, 37. The same FPGA is used to generate signals that drive electro-optic modulators for modulating LOs at the homodyne detectors. The sampling frequency of the FPGA’s DAC is 3.2 GHz, synchronised with the FPGA’s ADC. The modulation signal f-
or each wavepacket has a duration of 10 ns with the first and last 2.5 ns reversed to produce DC-cancelled signals.
2 Additional experimental data
In this section, we will explain additional experimental data.
2.1 Nullifier
First, we present the measurement results of nullifiers in Eq. (9). The homodyne angles are set to π/2 to measure the x-quadratures at all homodyne detectors, or to zero to measure the p-quadratures. The outputs are recorded and packetised in the FPGA. A linear combination of the packetised quadratures is calculated to produce each nullifier δˆj
k (j =A, B, C, D)8, 37, 38.
20

To characterise the nullifiers during a sequence of quantum operations, we average the variances over one full turn of the helical structure of the entanglement, i.e., Vmj = ΣN
k=1⟨(δˆj
mN+k)2⟩/N . These nullifiers roughly correspond to the resource EPR states at the m-th step of parallel quantum teleportation in the main manuscript. Figure S6 shows the variances (noise powers) of the nullifiers as a function of step m. Each data point is averaged over 1,000 measurement repetitions. Since the feedback control of the optical path lengths is switched on and off every 1.7 ms, the nullifiers degrade during the measurement window. This degradation affects the quality of teleportation -
as seen in the results of parallel teleportation. However, after multiple teleportation operations, the quantum state becomes noisy, and the slight depletion of entanglement has little impact on it.
0 200 400 600 800 1000 Step
6
4
2
0
2
4
6
8
10
12
Noise power (dB)
(xkA(i))2 (pkA(i))2
0 200 400 600 800 1000 Step
6
4
2
0
2
4
6
8
10
12
Noise power (dB)
(pkB(i))2 (xkB(i))2
0 200 400 600 800 1000 Step
6
4
2
0
2
4
6
8
10
12
Noise power (dB)
(xkC(i))2 (pkC(i))2
0 200 400 600 800 1000 Step
6
4
2
0
2
4
6
8
10
12
Noise power (dB)
(pkD(i))2 (xkD(i))2
Fig. S6 Nullifier measurement. In addition to nullifiers δˆj
k = pA(i)
k , xB(i)
k , pC(i)
k , xD(i)
k , the corresponding anti-squeezing levels (xA(i)
k , pB(i)
k , xC(i)
k , pD(i)
k ) are shown for comparison.
2.2 Individual macronode operations
In this section, we will show additional results for the reconstructed transformation matrices S for individual macronode operations. Figure S7 shows twisted single-mode operations and twisted generalised controlled-Z operations. Figure S8 shows both crossed and twisted beam splitter operations. Figure S9 shows phase rotation and controlled-Z operations. Figure S10 and Figure S11 show the shear and squeezing operations, respectively. Figure S12 shows the normalised Frobenius norm of the error for -
each operation as a function of parameters.
21

S-matrix (Theory) S-matrix (Experiment)
S-matrix (Theory) S-matrix (Experiment)
S-matrix element
Twisted single-mode operation
a
Twisted generalized controlled-Z operation
b
S-matrix element
g
-2 0 2 -2 0 2 -2 0 2 -2 0 2
1
2
3
4
0
-1
-2
-3
-4
-2
0
2
-2
0
2
-2
0
2
-2
0
2
h
g
-2 0 2 -2 0 2 -2 0 2 -2 0 2
-2
0
2
-2
0
2
-2
0
2
-2
0
2
h
10.0
1
0.5
0
-0.5
-1
-10
0π 0π 0π 0π Φ+
0
π
π/2
0
π
π/2
0
π
π/2
0
π
π/2
Φ
0π 0π 0π 0π Φ+
0
π
π/2
0
π
π/2
0
π
π/2
0
π
π/2
Φ
θ = (π/2, tan 1[h–g/2], tan 1[h+g/2], π/2)
-
θ = ([Φ + Φ ]/2, [Φ – Φ ]/2, [Φ – Φ ]/2, [Φ + Φ ]/2)

+
+
+
+
0010 g 0 2h 1 1000 2h 1 g 0
()
S(θ) =
V(Φ ,Φ-) =
+
S33 S34 S43 S44
S11 S12 S21 S22
( )=( )=
1 sinΦ cosΦ + cosΦ
sinΦ ( cosΦ – cosΦ sinΦ )
-+ -- + +
+
S31 S32 S41 S42
00 00
S13 S14 S23 S24
( )( ) ( )
==
Fig. S7 Individual macronode operations. a Twisted single-mode operation. b Twisted generalised controlled-Z operation.
22

S-matrix (Theory) S-matrix (Experiment)
S-matrix (Theory) S-matrix (Experiment)
Crossed beam splitter operation
Twisted beam splitter operation
a
b
Fig. S8 Beam splitter operations. a Crossed beam splitter operation. b Twisted beam splitter operation.
23

Crossed phase rotation
a Twisted phase rotation
b
Crossed controlled-Z
c Twisted controlled-Z
d
Fig. S9 Phase rotation and controlled-Z operations. Dotted lines are the theoretical traces. a Crossed phase rotation. b Twisted phase rotation. c Crossed controlled-Z operation. d Twisted controlled-Z operation.
24

Crossed x-invariant shear
a Twisted x-invariant shear
b
Crossed p-invariant shear
c Twisted p-invariant shear
d
Fig. S10 Shear operations. Dotted lines are the theoretical traces. a Crossed x-invariant shear. b Twisted x-invariant shear. c Crossed p-invariant shear. d Twisted p-invariant shear.
25

Crossed squeezing with -90 degree phase rotation
a Twisted squeezing with -90 degree phase rotation
b
Crossed 45 degree squeezing
c Twisted 45 degree squeezing
d
Fig. S11 Squeezing operations. Dotted lines are the theoretical traces. a Crossed squeezing with −90 degree phase rotation. b Twisted squeezing with −90 degree phase rotation. c Crossed 45 degree squeezing. d Twisted 45 degree squeezing.
26

Fig. S12 Normalised Frobenius norm of the error for operations.
2.3 Parallel teleportation with classical limit
Figure S13 shows the results of parallel teleportation with the classical limit of sequential teleportation. The data is the same as in the main manuscript, but the mean and standard deviation are calculated for each step using the results of 101 parallel teleportation. The classical limit is calculated as teleportation is performed without entanglement. The experimental results are well below the classical limits over all number of teleportation.
27

100 101 102 103 No. of Teleportation
0
5
10
15
20
25
30
Noise power (dB)
Classicallimit
( xref xout)2 ( pref + pout)2
Fig. S13 Parallel teleportation with classical limit. The dotted line is the theoretical classical limit. The solid line is the theoretical prediction with the estimated nullifiers.
2.4 Helical teleportation
In addition to the “parallel” teleportation, we implement “helical” teleportation as shown in Fig. S14a. Another input mode at the first macronode is teleported along with the helical axis of the graph, achieving up to 100,000 steps teleportation. Figure S14b shows the results of the helical teleportation, where the teleportation is repeated by 1,000,000 times. The gains are around unity as it is teleportation, but the uncertainty of the gain increases at around 1,000 times and more teleportation.-
 In particular, the gains of 10,000 times and more teleportation show large errors. This is partly because the large noise at the large number of teleportation makes the accurate estimation of the amplitude of outputs impractical, and also there may be small offsets or rounding errors accumulated over a large number of teleportation. Regarding the noise power, they agree well with theory up to around 10,000 times of teleportation. The deviations of the noise power at the large number of teleportat-
ion come from the depleted entanglement due to the locking methods as seen in the nullifier measurements.
(x – x )2
‹‹ ref out ››
(pref + pout)2
^^ ^^
ab
Helical Teleportation Circuit
Input
Reference
Output
No. of Teleportation
1 10 102 103 104 105 No. of Teleportation
1 10 102 103 104 105
Gain
0.0
0.5
1.0
1.5
2.0
Noise power (dB)
0
10
20
30
40
50
60
x gain p gain
...
...
...
...
...
...
...
...
...
...
...
...
Fig. S14 Helical teleportation. a Graph representation. b The gains of teleportation (left) and the noise power of teleportation (right).
2.5 Graph for Quantum state sorting
Figure S15 and Figure S16 show the graphs designed to sort the randomly displaced 101 input states (see the main manuscript) in ascending and descending order, respectively.
28

I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
R (30..6060 )
(70..7020 )
(20..5070 )
(80..8010 )
(60..5030 )
(40..2060 )
(80..4020 )
(70..5020 )
(70..0030 )
(60..2040 )
(40..0060 )
(20..8070 )
(50..9040 )
(60..4040 )
(30..7060 )
(00..1000 )
(50..6040 )
(00..5090 )
(00..8090 )
(30..5060 )
(10..1090 )
(80..1020 )
(40..6050 )
(10..4090 )
(00..4000 )
(00..2000 )
(50..3050 )
(70..9020 )
(60..6030 )
(90..5000 )
(30..3070 )
(40..1060 )
(50..7040 )
(20..4080 )
(30..0070 )
(00..7090 )
R (60..9030 )
(60..0040 )
(60..7030 )
(30..8060 )
(50..0050 )
(50..5040 )
(00..5000 )
(40..3060 )
(50..4050 )
(50..1050 )
(40..8050 )
(60..1040 )
(80..6010 )
(30..4070 )
(10..0090 )
(30..9060 )
(70..2030 )
(80..2020 )
(10..7080 )
(20..9070 )
(20..1080 )
(50..2050 )
(80..3020 )
(70..4030 )
(90..4010 )
(10..3090 )
(90..1010 )
(20..6070 )
(20..7070 )
(10..9080 )
(80..9010 )
(20..3080 )
(10..2090 )
R (40..4060 )
(80..0020 )
(20..2080 )
(90..6000 )
(100..0000 )
(70..3030 )
(70..6020 )
(90..9000 )
(50..8040 )
(00..9090 )
(90..8000 )
(80..7010 )
(90..3010 )
(60..3040 )
(60..8030 )
(80..5010 )
(10..5080 )
(00..6090 )
(00..3000 )
(30..2070 )
(40..5050 )
(10..6080 )
(90..2010 )
(30..1070 )
(90..0010 )
(20..0080 )
(40..9050 )
(10..8080 )
(90..7000 )
(70..8020 )
(40..7050 )
(70..1030 )
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
Fig. S15 Graph designed for 101 modes quantum state sorting in ascending order.
29

I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
I
R (30..6060 )
(70..7020 )
(20..5070 )
(80..8010 )
(60..5030 )
(40..2060 )
(80..4020 )
(70..5020 )
(70..0030 )
(60..2040 )
(40..0060 )
(20..8070 )
(50..9040 )
(60..4040 )
(30..7060 )
(00..1000 )
(50..6040 )
(00..5090 )
(00..8090 )
(30..5060 )
(10..1090 )
(80..1020 )
(40..6050 )
(10..4090 )
(00..4000 )
(00..2000 )
(50..3050 )
(70..9020 )
(60..6030 )
(90..5000 )
(30..3070 )
(40..1060 )
(50..7040 )
(20..4080 )
(30..0070 )
(00..7090 )
(60..9030 )
(60..0040 )
(60..7030 )
(30..8060 )
(50..0050 )
(50..5040 )
(00..5000 )
(40..3060 )
(50..4050 )
(50..1050 )
(40..8050 )
(60..1040 )
(80..6010 )
(30..4070 )
(10..0090 )
(30..9060 )
(70..2030 )
(80..2020 )
(10..7080 )
(20..9070 )
(20..1080 )
(50..2050 )
(80..3020 )
(70..4030 )
(90..4010 )
(10..3090 )
(90..1010 )
(20..6070 )
R (20..7070 )
(10..9080 )
(80..9010 )
(20..3080 )
(10..2090 )
(40..4060 )
(80..0020 )
(20..2080 )
(90..6000 )
R (100..0000 )
(70..3030 )
(70..6020 )
(90..9000 )
(50..8040 )
(00..9090 )
(90..8000 )
(80..7010 )
(90..3010 )
(60..3040 )
(60..8030 )
(80..5010 )
(10..5080 )
(00..6090 )
(00..3000 )
(30..2070 )
(40..5050 )
(10..6080 )
(90..2010 )
(30..1070 )
(90..0010 )
(20..0080 )
(40..9050 )
(10..8080 )
(90..7000 )
(70..8020 )
(40..7050 )
(70..1030 )
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
R
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
M
Fig. S16 Graph designed for 101 modes quantum state sorting in descending order.
30

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:54.944Z
- **Text Length:** 75929 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
