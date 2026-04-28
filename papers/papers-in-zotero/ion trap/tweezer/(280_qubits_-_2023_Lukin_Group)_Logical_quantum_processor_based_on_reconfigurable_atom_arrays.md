# PDF Document: (280 qubits - 2023 Lukin Group) Logical quantum processor based on reconfigurable atom arrays.pdf

**File Path:** (280 qubits - 2023 Lukin Group) Logical quantum processor based on reconfigurable atom arrays.pdf

**Processed Date:** 2026-02-10T18:17:14.604Z

**File Size:** 15414.19 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 610

**Title:** (280 qubits - 2023 Lukin Group) Logical quantum processor based on reconfigurable atom arrays

**Collection:** Ion Trap > Tweezer

---

## Extracted Text Content

arXiv:2312.03982v1 [quant-ph] 7 Dec 2023

Logical quantum processor based on reconfigurable atom arrays
Dolev Bluvstein1, Simon J. Evered1, Alexandra A. Geim1, Sophie H. Li1, Hengyun Zhou1,2, Tom Manovitz1, Sepehr Ebadi1, Madelyn Cain1, Marcin Kalinowski1, Dominik Hangleiter3, J. Pablo Bonilla
Ataides1, Nishad Maskara1, Iris Cong1, Xun Gao1, Pedro Sales Rodriguez2, Thomas Karolyshyn2, Giulia Semeghini4, Michael J. Gullans3, Markus Greiner1, Vladan Vuleti´c5, and Mikhail D. Lukin1
1Department of Physics, Harvard University, Cambridge, MA 02138, USA 2QuEra Computing Inc., Boston, MA 02135, USA
3Joint Center for Quantum Information and Computer Science, NIST/University of Maryland, College Park, Maryland 20742, USA
4John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA 02138, USA
5Department of Physics and Research Laboratory of Electronics, Massachusetts Institute of Technology, Cambridge, MA 02139, USA
Suppressing errors is the central challenge for useful quantum computing [1], requiring quantum error correction [2–6] for large-scale processing. However, the overhead in the realization of error-corrected “logical” qubits, where information is encoded across many physical qubits for redundancy [2–4], poses significant challenges to large-scale logical quantum computing. Here we report the realization of a programmable quantum processor based on encoded logical qubits operating with up to 280 phy-
sical qubits. Utilizing logical-level control and a zoned architecture in reconfigurable neutral atom arrays [7], our system combines high two-qubit gate fidelities [8], arbitrary connectivity [7, 9], as well as fully programmable single-qubit rotations and mid-circuit readout [10– 15]. Operating this logical processor with various types of encodings, we demonstrate improvement of a two-qubit logic gate by scaling surface code [6] distance from d = 3 to d = 7, preparation of color code qubits with-
 break-even fidelities [5], fault-tolerant creation of logical GHZ states and feedforward entanglement teleportation, as well as operation of 40 color code qubits. Finally, using three-dimensional [[8,3,2]] code blocks [16, 17], we realize computationally complex sampling circuits [18] with up to 48 logical qubits entangled with hypercube connectivity [19] with 228 logical two-qubit gates and 48 logical CCZ gates [20]. We find that this logical encoding substantially improves algorithmic performan-
ce with error detection, outperforming physical qubit fidelities at both cross-entropy benchmarking and quantum simulations of fast scrambling [21, 22]. These results herald the advent of early error-corrected quantum computation and chart a path toward large-scale logical processors.

Quantum computers have the potential to significantly outperform their classical counterparts for solving certain problems [1]. However, executing large-scale, useful algorithms on quantum processors requires very low gate error rates (generally below ∼ 10−10) [23] , far below those that will likely ever be achievable with any physical device [2]. The landmark development of quantum error correction (QEC) theory provides a conceptual solution to this challenge [2–4]. The key idea is to use entangl-
ement to delocalize a logical qubit degree of freedom across many redundant physical qubits, such that if any given physical qubit fails, it does not corrupt the underlying logical information. In principle, with sufficiently low physical error rates and sufficiently many qubits, a logical qubit can be made to operate with extremely high fidelity, providing a path to realizing large-scale algorithms [4]. However, in practice useful QEC poses many challenges, ranging from significant overhead in ph-
ysical qubit numbers [23] to highly complex gate operations between the delocalized logical degrees of freedom [24]. Recent experiments have achieved milestone demonstrations of two logical qubits and one entangling gate [5, 6], and explorations of novel encodings [25–28].
One specific challenge for realizing large-scale logical processors involves efficient control. Unlike modern clas-

sical processors that can efficiently access and manipulate many bits of information [29], quantum devices are typically built such that each physical qubit requires multiple classical control lines. While suitable to the implementation of physical qubit processors, this approach poses a significant obstacle to the control of logical qubits redundantly encoded over many physical qubits.
Here, we describe the realization of a programmable quantum processor based on hardware-efficient control over logical qubits in reconfigurable neutral atom arrays [7]. We use this logical processor to demonstrate key building blocks of QEC and realize programmable logical algorithms. In particular, we explore important features of logical operations and circuits, including scaling to large codes, fault-tolerance, and complex non-Clifford circuits.
Logical processor based on atom arrays
Our logical processor architecture, illustrated in Fig. 1a, is segmented into three zones. The storage zone is used for dense qubit storage, free from entangling gate errors and featuring long coherence times. The entangling zone is used for parallel logical qubit encoding, sta-

a

b

Logical qubit storage

Ancilla qubit reservoir

2

80

1

Site index

Storage zone

Qubit State

Addressed site Neighbor

40

1

Qubit state

Readout zone Entangling zone

Logical 1Q gate
Rydberg laser Logical 2Q gate

c
Syndrome extraction
Local imaging

0 0 10 Time (µs) Feedforward AOD

60 1
0.5

0 0 20 Time (µs)
With local imaging No local imaging

Qubit state

FPGA Logical qubit decoding
Camera Midcircuit measurement

Num events

0 0 Ramsey phase (2π) 1
1000
0 1750 Camera counts 2250

FIG. 1. A programmable logical processor based on reconfigurable atom arrays. a, Schematic of the logical processor, segmented into three zones: storage, entangling, and readout (see ED Fig. 1 for detailed layout). Logical single-qubit and twoqubit operations are realized transversally with efficient, parallel operations. Transversal CNOTs are realized by interlacing two logical qubit grids and performing a single global entangling pulse that excites atoms to Rydberg states. Physical qubits are en-
coded in hyperfine ground states of 87Rb atoms trapped in optical tweezers. b, Fully programmable single-qubit rotations are implemented using Raman excitation through a 2D AOD; parallel grid illumination delivers the same instruction to multiple atomic qubits. c, Mid-circuit readout and feedforward. The imaging histogram shows high-fidelity state discrimination (500 µs imaging time, readout fidelity ≈ 99.8%, Methods), and the Ramsey fringe shows that qubit coherence is unaffected by measuring oth-
er qubits in the readout zone (error probability p ∼ 10−3, Methods). The FPGA performs real-time image processing, state decoding, and feedforward (Fig. 4).

bilizer measurements, and logical gate operations. Finally, the readout zone enables mid-circuit readout of desired logical or physical qubits, without disturbing the coherence of the computation qubits still in operation. This architecture is implemented using arrays of individual 87Rb atoms trapped in optical tweezers, which can be dynamically reconfigured in the middle of the computation while preserving qubit coherence [7, 9].
Our experiments make use of the apparatus described previously in Refs. [7, 8, 30], with key upgrades enabling universal digital operation. Physical qubits are encoded in clock states within the ground-state hyperfine manifold (T2 > 1s [7]), and stored in optical tweezer arrays created by a spatial light modulator (SLM) [30, 31]. We utilize systems of up to 280 atomic qubits, combining high-fidelity two-qubit gates [8], enabled by fast excitation into atomic Rydberg states interacting through robu-
st Rydberg blockade [32], with arbitrary connectivity enabled by atom transport via 2D acousto-optic deflectors (AODs) [7]. Central to our approach of scalable control, AODs [10–15, 31, 33] use frequency multiplexing to take in just two voltage waveforms (one for each axis) to create large, dynamically programmable grids of light. Fully programmable local single-qubit rotations are realized via qubit-specific, parallel Raman excitation through an additional 2D AOD (Fig. 1b) [34]. Mid-circuit reado-
ut is enabled by moving selected qubits ∼ 100 µm away to a readout zone and illuminating with a focused imag-

ing beam [7, 35], resulting in high-fidelity imaging as well as negligible decoherence on stored qubits (Fig. 1c). The mid-circuit [10–15] image is collected with a CMOS camera and sent to an FPGA for real-time decoding and feedforward.
The central aspect of our logical processor is the control of individual logical qubits as the fundamental units, instead of individual physical qubits. To this end, we observe that during a vast majority of error-corrected operations, the physical qubits of a logical block are supposed to realize the same operation, and this instruction can be delivered in parallel with only a few control lines. This approach naturally multiplexes with optical techniques. For example, to realize a logical single--
qubit gate [2], we use the Raman 2D AOD (Fig. 1b) to create a grid of light beams and simultaneously illuminate the physical qubits of the logical block with the same instruction. Such a gate is transversal [2], meaning that operations act on physical qubits of the code block independently. This transversal property further implies the gate is inherently fault-tolerant [2], meaning that errors cannot spread within the code block (see Methods), thereby preventing a physical error from spreading int-
o a logical fault. Crucially, a similar approach can realize logical entangling gates [2, 4]. Specifically, we use the grids generated by our moving 2D AOD to pick up two logical qubits, interlace them in the entangling zone, and then pulse our single global Rydberg excitation laser to

realize a physical entangling gate on each twin pair of the blocks (Figs. 1a,2a). This process realizes a high-fidelity, fault-tolerant transversal CNOT in a single parallel step.
Improving entangling gates with code distance
A key property of QEC codes is that, for error rates below some threshold, the performance should improve with system size, associated with a so-called code distance [4, 24]. Recently, this property has been experimentally verified by reducing idling errors of a code [6]. Neutral atom qubits can be idly stored for long times with low errors, and the central challenge is to improve entangling operations with code distance. Thus motivated, we realize a transversal CNOT gate using logical qubits enco-
ded in two surface codes (Fig. 2). Surface codes have stabilizers that are used for detecting and correcting errors without disrupting the logical state [4, 24]. The stabilizers form a 2D lattice of 4-body plaquettes of X and Z operators, which commute with the XL (ZL) logical operators that run horizontally (vertically) along the lattice (Fig. 2d). By measuring stabilizers one can detect the presence of physical qubit errors, decode (infer what error occured), and correct the error simply by appl-
ying a software ZL/XL correction [24]. Such a code can detect and correct a certain number of errors determined by the linear dimension of the system (the code distance d).
To test the performance of our logical entangling gate, we first initialize the logical qubits by preparing physical qubits of two blocks in |+⟩ and |0⟩ states, respectively, and performing a single round of stabilizer measurements with parallel operations [7]. While this state preparation is non-fault-tolerant (nFT) beyond d = 3, we are still able to probe error suppression of the transversal CNOT (Methods). Specifically, we prepare the two logicals in state |+L⟩ and |0L⟩, perform the transversal-
 CNOT, and then projectively measure to evaluate the logical Bell state stabilizers XL1 XL2 and ZL1 ZL2 (Fig. 2c). For decoding and correcting the logical state, we observe there are strong correlations between the stabilizers of the two blocks (ED Fig. 4) due to propagation of physical errors between the codes during the transversal CNOT (Fig. 2b) [36]. We utilize these correlations to improve performance by decoding the logical qubits jointly, realized by a joint decoding graph that includes edg-
es and hyperedges connecting the stabilizers of the two logical qubits (Fig. 2b). Using this correlated decoding procedure, we measure ≈ 0.95 populations in the XLXL and ZLZL bases (Fig. 2c), showing entanglement between the d = 7 logical qubits.
Studying the performance as a function of code size (Fig. 2d) reveals that the logical Bell pair improves with larger code distance, demonstrating improvement of the entangling operation. In contrast, we note that when conventional decoding, i.e. independent minimum-weight perfect matching within both codes [4], is used, the fi-

a

+L

L
+L

1. Encode logical qubits

2. Parallel move (interlace)

X/Z X/Z
L

3

b

Physical error

X

X

X

Control stabilizers Target stabilizers

c
0.5

X Hyperedge
XX d=7 ZZ

Logical Bell pair error Probability

3. Pulse global laser (transversal CNOT)

CNOT

d

Number of physical qubits per Bell pair

26 0.4

74

146

0 ++ +- -+ -- 00 01 10 11 Logical bitstring
d = 3 (four pairs)

0.3

d = 5

0.2

Conventional decoding

0.11 Correlated decoding

0.09

ZL

d = 7

0.07 3

5 Surface code distance d

XL 7
Data Ancilla X stab. Z stab.

FIG. 2. Transversal entangling gates between two surface codes. a, Illustration of transversal CNOT between two d = 7 surface codes based on parallel atom transport. b, The concept of correlated decoding. Physical errors propagate between physical qubit pairs during transversal CNOT gates, creating correlations that can be utilized for improved decoding. We account for these correlations, arising from deterministic error propagation (as opposed to correlated error events), by adding edges and hype-
redges that connect the decoding graphs of the two logical qubits. c, Populations of entangled d = 7 surface codes measured in the XX and ZZ basis. d, Measured Bell pair error as a function of code distance, for both conventional (top) and correlated (bottom) decoding. We estimate Bell error with the average of the ZZ populations and the XX parities (Methods). To reduce code distance we simply remove selected atoms the grid, as shown on the right, ensuring unchanged experimental conditions (for d -
= 3, four logical Bell pairs are generated in parallel). Error bars represent standard error of the mean. See ED Figs. 4, 5 for additional surface code data.

delity decreases with code distance. This is in part due to the nFT state preparation, whose effect is partially mitigated by the correlated decoding (Methods).
We emphasize that while these results demonstrate surpassing an effective threshold for the entire circuit (implying we surpass the threshold of the transversal CNOT), such a threshold is higher due to projective read-

4

a Encoding circuit
2

L

Z

/

Y L

4 35

X/Z stab.

/

L

X

1
Physical + + + + + + +

76
H H H H

c

d

1

1

0.8

0.9

0.6 0.8

0.4 0.7
0.2 0.6
0 nFT FT EDFT

Move to storage State prep infidelity (SPAM)

Fault-tolerant GHZ circuit

L

C

L

H

C

L

C

L

C

L

L

L

L

L

L

e
Increasing error detection
0.5

Real(ρlogical)

b
0.01
0.001
Logical Physical Logical FT nFT atom (w CNOT) Imag(ρlogical)
0.5

0.4

0.4

FT 1 2 max 3 flag errors 4
0.2 0.4 0.6 0.8 1 Accepted fraction

0.3
0.2
0.1
0.0 0000

0.3

0.2

1111 1111

0.1 0000
0.0 0000

0000 1111 1111

Logical GHZ state fidelity GHZ fidelity

FIG. 3. Fault-tolerant logical algorithms a, Circuit for preparation of logical GHZ state. Ten color codes are encoded non-fault-tolerantly (nFT), and then parallel transversal CNOTs between computation and ancilla logical qubits perform FT initialization. The ancilla logical qubits are moved to storage, and a 4-logical-qubit GHZ state is created between the computation qubits. Logical Clifford operations are applied before readout to probe the GHZ state. b, State-preparationand-measurement (SPAM)-
 infidelity of the logical qubits without (nFT) and with (FT) the transversal-CNOT-based flagged preparation, compared to physical qubit SPAM. c, Logical GHZ fidelity without postselecting on flags (nFT), postselecting on flags (FT), and postselecting on flags and stabilizers of the computation logical qubits, corresponding to error detection (EDFT). d, GHZ fidelity as a function of sliding-scale error detection threshold (converted into the probability of accepted repetitions) and of number of su-
ccessful flags in the circuit. e, Density matrix of the 4-logical-qubit GHZ state (with at most 3 flag errors) measured via full state tomography involving all 256 logical Pauli strings.

out after the transversal CNOT. In practice, the transversal CNOT should be used in combination with many repeated rounds of noisy syndrome extraction [6], which is expected to have a somewhat lower threshold and is an important goal for future research.
Fault-tolerant logical algorithms
All logical algorithms we perform in this work are built from transversal gates which are intrinsically faulttolerant [2]. We now also use fault-tolerant state preparation to explore programmable logical algorithms. We use two-dimensional d = 3 color codes [3, 37], which are topological codes akin to the surface code, but with the useful capability of transversal operations of the full Clifford group: Hadamard (H), π/2 phase (S) gate, and CNOT [37]. This transversal gate set can realize any Cliffo-
rd circuit fault-tolerantly. As a test case, here we create a logical GHZ state. Figure 3a shows the implementation of a 10-logical-qubit algorithm, in which all ten qubits are first encoded by a nFT encoding circuit (Methods). Then, five of the codes are used as ancilla logicals, performing parallel transversal CNOTs in order to fault-tolerantly detect errors on the computation logicals [38], and are then moved into the storage zone where they are safely kept. Subsequently four computation logica-
ls are used to prepare the GHZ state, and logical Clif-

ford rotations are used at the end of the circuit for direct fidelity estimation [39] and full logical state tomography.
We first benchmark our state initialization (Fig. 3b) [5, 40, 41]. Averaged over the five computation logicals, we find that by using the fault-tolerant initialization (postselecting on the ancilla logical flag not detecting errors) our |0L⟩ initialization fidelity is 99.91+−00..0049%, exceeding both our physical qubit |0⟩ initialization fidelity (99.32(4)% [8]) and physical two-qubit gate fidelity (99.5% [8]). Then, Fig. 3c shows the resulting GHZ state fidelity obtained using the fault-tolerant -
algorithm is 72(2)% (again using correlated decoding), demonstrating genuine multipartite entanglement. Additionally, one can postselect on all stabilizers of our computation logicals being correct; using this error detection approach, the GHZ fidelity increases to 99.85+−01..10% at the cost of postselection overhead.
Since not all nontrivial syndromes are equally likely to cause algorithmic failure, one can perform a partial postselection where syndrome events most likely to have caused algorithmic failure are discarded, given by the weight of the correlated matching in the whole algorithm. Figure 3d shows the measured GHZ fidelity as a function of this sliding threshold converted into a fraction of accepted experimental repetitions, continuously tuning the tradeoff between the success probability of the algor-
ithm and its fidelity; e.g., discarding just 50% of the data improves GHZ fidelity to ≈ 90%. (As discussed below, for

certain applications purifying samples can be advantageous in improving algorithmic performance.) Finally, fault-tolerantly measuring all 256 logical Pauli strings, we perform full GHZ state tomography (Fig. 3e).
The use of the zoned architecture directly allows scaling circuits to larger numbers, without increasing the number of controls, by encoding and operating on logical qubits, moving them to storage, and then accessing storage as appropriate. This process is illustrated in Figs. 4a,b, where ten color codes are made and operated on with parallel transversal CNOTs, moved to storage, and then more qubits are accessed from storage. Repeating this process four times, we create 40 color codes with 280 phy-
sical qubits, at the cost of slow idling errors of ∼ 1% logical decoherence per additional encoding step (Fig. 4c). These storage idling errors primarily originate from global Raman π pulses applied for dynamical decoupling of atoms in the entangling zone, which could be significantly reduced with zone-specific Raman controls.
Since mid-circuit readout [10–15] is an important component of logical algorithms, we next demonstrate a faulttolerant entanglement teleportation circuit. We first create a three-logical-qubit GHZ state |0L0L0L⟩ + |1L1L1L⟩ (Figs. 4d,e) from fault-tolerantly prepared color codes. Mid-circuit X-basis measurement of the middle logical creates |0L0L⟩ + |1L1L⟩ if measured as |+L⟩, and |0L0L⟩ − |1L1L⟩ if measured as |−L⟩. One recovers |0L0L⟩ + |1L1L⟩ by applying a logical S gate to the first and third l-
ogicals conditioned real-time on the state of the middle logical, akin to the magic state teleportation circuit [24]. Measurements in Fig. 4e indicate that while ⟨XLXL⟩ and ⟨YLYL⟩ indeed vanish without the feedforward step, applying the feedforward correction we recover a Bell state fidelity of 77(2)%, limited by imperfections in the original underlying GHZ state. By repeating this experiment without mid-circuit readout and instead postselecting on the middle logical being in |+L⟩, we find a simil-
ar Bell fidelity of 75(2)%, indicating high-fidelity performance of the readout and feedforward operations.
Complex logical circuits using 3D codes
One important challenge in realizing complex algorithms with logical qubits is that universal computation cannot be implemented transversally [42]. For instance, when using 2D codes such as the surface code, non-Clifford operations cannot be easily performed [37], and relatively expensive techniques are required for nontrivial computation [24, 43] as Clifford circuits can be easily simulated [44]. In contrast, 3D codes can transversally realize non-Clifford operations, but lose the transversal H [-
37]. However, these constraints do not imply that classically hard or useful quantum circuits cannot be realized transversally or efficiently. Motivated by these considerations, we explore efficient realization of classically hard algorithms that are co-designed with a particular errorcorrecting code. Specifically, we implement fast scram-

a
Entangling zone

Storage zone
c
10

Total number of color codes

20

30

40

0.02

Logical decoherence

0

0

1

2

3

Additional encoded groups

d

Physical Detection Correction

b
L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L L

e

Access storage Move to storage

L
LH
L

Entangling zone

S

S

0.5

5
S S

Measured logical parity XX
Feedforward
YY XX
No feedforward
YY XX
No mid-cirucit
YY

Storage zone Readout zone

0

Feedforward

-0.5

FIG. 4. Zoned logical processor: scaling and midcircuit feedforward. a, Atoms in storage and entangling zones, and approach for creating and entangling 40 color codes with 280 physical qubits. b,c, 40 color codes are prepared with an nFT circuit, and then 20 transversal CNOTs are used to fault-tolerantly prepare 20 of the 40 codes, whose fidelity is plotted. Logical decoherence is smaller than the physical idling decoherence experienced during the encoding steps. d, Mid-circuit measurement and fee-
dforward for logical entanglement teleportation. The middle of three logical qubits is measured in the X-basis, and by applying a midcircuit conditional, locally pulsed logical S rotation on the other two logical qubits, the state |0L0L⟩ + |1L1L⟩ is prepared. e, Measured logical qubit parity with and without feedforward, showing that feedforward recovers the intended state with Bell fidelity of 77(2)% (ZZ parities of 83(4)% not plotted, Methods). No mid-circuit refers to turning off the mid-circui-
t readout, and postselecting on the middle logical being in state |+L⟩ in the final readout. By postselecting on perfect stabilizers of only the two computation logicals (error detection in the final measurement) the feedforward Bell fidelity is 92(2)% (not plotted). In d three of the additional blocks are flag qubits and the other four are prepared but unused for this circuit.

bling circuits using small 3D codes, which are used for native non-Clifford operations (CCZ).
We focus on small 3-dimensional [[8,3,2]] codes (Fig. 5a) [16, 17, 26, 27], which have various appealing features. They encode three logicals per block, feature d = 2 (d = 4) in the Z basis (X basis), implying error detection (correction) capabilites for Z (X) errors, and can realize a transversal CNOT between blocks. Most impor-

6

a
7 3
XL1 8 4

5 1
ZL1
6 2

Logical qubits

ZL2

XL2

XL3 ZL3

Stabilizers

c

SZ1=Z1Z2Z3Z4 SZ2=Z1Z3Z5Z7 SZ3=Z1Z2Z5Z6 SZ4=Z1Z2Z3Z4Z5Z6Z7Z8 SX1=X1X2X3X4X5X6X7X8

Logical operations

CCZL1,L2,L3

T

T†

CZL1,L2

Permutation CNOTL1,L2 Transversal CNOT

S

S†

T†

T

S†

S

1 35 7 1 35 7

T† T

T T†

2 468 2 46 8

b

e

Runtime per bitstring (s) Runtime per bitstring (s)

d
100 Measured

10-2

10-4

6 12 24

48

Number of logicals

106

Projected

48 logicals 104

102

100
0123 Additional CNOT layers

f

Logical bitstring probability
Swap
Logical XEB

12 logicals

48 logicals

Theory Postselection

0.01

Raw 0
0

Logical bitstring index

1

3

6

12

24

48
0.1

4096

Incerreraosr idngetection

0.01

0.001

0.01

0.1

Accepted fraction

34 1

Hypercube dimension

5

6

7

Raw Error detection Physical upper bound

0.1

Logical XEB

0.01

1

3 6 12

24

48

Number of logical qubits

FIG. 5. Complex logical circuits using 3D codes. a, [[8,3,2]] block codes can transversally realize {CCZ, CZ, Z, CNOT} gates within each block, and transversal CNOTs between blocks. By preparing logical qubits in |+L⟩, performing layers of {CCZ, CZ, Z} alternated with interblock CNOTs, and measuring in the X-basis, we realize classically hard sampling circuits with logical qubits. b, Measured sampling outcomes for a circuit with 12 logical qubits, 8 logical CZs, 12 logical CNOTs, and 8 logical CCZ-
s. By increasing error detection, the measured distribution converges toward the ideal distribution. c, Circuit involving 48 logical qubits with 228 logical CZ / CNOT gates and 48 logical CCZs. d, Classical simulation runtime for calculating an individual bitstring probability; bottom plot is estimated based on matrix multiplication complexity. e, Measured normalized XEB as a function of sliding-scale error-detection for 3, 6, 12, 24, and 48 logical qubits. For all sizes we observe a finite XEB sc-
ore which improves with increased error detection. Diagram shows 48-logical connectivity, with logical triplets entangled on a 4D hypercube. f, Scaling of raw (red) and fully error-detected (black) XEB from e. Physical upper-bound fidelity (blue) is calculated using best measured physical gate fidelities (see Methods and ED Fig. 7 for scaling discussion). Diagrams show physical connectivity. [[8,3,2]] cubes are entangled on 4D hypercubes, realizing physical connectivity of 7D hypercubes.

tantly, by using physical {T, S} rotations (T is π/4 phase gate) one can realize transversal {CCZ, CZ, Z} gates on the logical qubits encoded within each block, as well as intrablock CNOTs by physical permutation [26, 27] (Methods). This gate set allows us to transversally realize the circuits illustrated in Fig. 5a,c, alternating between layers of {CCZ, CZ, Z} within blocks and layers of CNOTs between blocks. Although transversal H is forbidden, initialization and measurement in either the X or Z-
 basis effectively allows H at the beginning and end of the circuit.
We use these transversal operations to realize logical algorithms that are difficult to simulate classically [45, 46]. More specifically, these circuits can be mapped to Instantaneous Quantum Polynomial (IQP) circuits [20, 45, 46]. Sampling from the output distribution of such circuits is known to be classically hard in certain instances [20], implying a quantum device can

be exponentially faster than a classical computer for this task.
Figure 5b shows an example implementation of a 12logical-qubit sampling circuit. Here, we prepare all logical blocks in |+⟩L, implement a scrambling circuit with 28 logical entangling gates, and then measure all logicals in the X-basis. Figure 5b shows the probability of observing each of the 212 = 4096 possible logical bitstring outcomes, showing that as we progressively apply more error detection (i.e. postselection) in postprocessing, the distribution more closely reproduces the ideal theoretic-
al distribution. To characterize the distribution overlap, we use the cross-entropy benchmark (XEB) [18], which is a weighted sum between the measured probability distribution and the ideal calculated distribution, normalized such that XEB=1 corresponds to perfectly reproducing the ideal distribution, and XEB=0 corresponds to the uniform distribution which occurs when circuits

are overwhelmed by noise. Consistent with Fig. 5b, the 12-logical-qubit circuit XEB increases from 0.156(2) to 0.616(7) upon applying error detection (Fig. 5e). We note that XEB should be a good fidelity benchmark for IQP circuits (Methods).
We next explore scaling to larger systems and circuit depths. To ensure high complexity of our logical circuits, we use nonlocal connections to entangle the logical triplets on up to 4D hypercube graphs (see supplementary movie), which results in fast scrambling [19]. Exploring entangled systems of 3, 6, 12, 24, and 48 logical qubits, in all cases we find a finite XEB score which improves with increased error detection (Figs. 5e,f). The finite XEB indicates successful sampling, and the improvement-
 with error detection shows the benefit of using logical qubits. While this improvement comes at the cost of measurement time due to error detection, improving the sample quality cannot be replaced by simply generating more samples. Thus, improving the XEB score yields significant practical gains. We obtain an XEB of ≈ 0.1 for 48 logical qubits and hundreds of nonlocal logical entangling gates, up to roughly an order of magnitude higher than previous physical qubit implementations of similar compl-
exity [18, 47], showing the benefits of a logical encoding for this application.
Assuming our best measured physical fidelities, the estimated upper-bound for an optimized physical qubit implementation in our system is also significantly below the measured logical XEB (blue line in Fig. 5f, Methods). In attempting to run these complex physical circuits, in practice we find that realising non-vanishing XEB is significantly more challenging; we confirm with small physical instances that we measure values well below this upper-bound (Methods). In addition to the error-detecting b-
enefits, it appears the logical circuit is significantly more tolerant to coherent errors, exhibiting operation that is inherently digital, just with imperfect fidelity (see e.g. ED Fig. 7a), consistent with theoretical predictions [48]. We also note that for the logical algorithms we optimize performance by optimizing the stabilizer expectation values (rather than the complex sampling output), providing further advantage for logical implementations.
Our 48-logical circuit, corresponding to a physical qubit connectivity of a 7D hypercube, contains up to 228 logical two-qubit gates and 48 logical CCZ gates. Simulation of such logical circuits is challenging due to the high connectivity (rendering tensor networks inefficient) and large numbers of non-Cliffords [49]. To benchmark our circuits, we structure them such that we can leverage an efficient simulation method (Methods) which takes ≈ 2 seconds to calculate the probability of each bitstring-
 (Fig. 5d). Modeling noise in our logical circuits is even more complicated, as they are composed from 128 physical qubits and 384 T gates, thereby making experimentation with logical algorithms necessary to understand and optimize performance.

7

Logical entanglement entropy

a

Bell basis measurement b

10

Scrambling circuit

8 X
6

Increasing error detection

4

Scrambling circuit

c
8

Experiment Theory

2 Z
0 0 2 4 6 8 10 12 Logical subsystem size
d
0.25 Increasing error detection
0.2

Logical Pauli string exp. value

Additive Bell magic

0.15 4
0.1

0.05

0

0

1

2

3

Number of logical CCZ gates

0
0 0.2 0.4 0.6 0.8 1 Logical purity

FIG. 6. Logical two-copy measurement. a, Identical scrambling circuits are performed on two copies of 12 logical qubits, and then measured in the Bell basis to extract information about the state. Z basis measurements are corrected with an [[8,3,2]] decoder (when full error detection is not applied). b, Measured entanglement entropy as a function of subsystem size, showing expected Page-curve behavior [19] for the highly scrambled state, improving with increased error detection. c, Measured and si-
mulated magic (associated with non-Clifford operations) as a function of number of CCZ gates applied, performed on two copies of scrambled 6-logicalqubit systems. d, Pauli string measurement and zero-noise extrapolation using logical qubits. Plot shows the absolute values of all 412 Pauli string expectation values, which only have five discrete values for our digital circuit; Pauli strings with the same theory value are grouped. By analyzing with sliding-scale error detection we improve toward the-
 theoretical expectation values (squares) while also improving toward a purity of 1. By extrapolating to perfect purity, we extrapolate the expectation values and better-approximate the ideal values (shaded regions are statistical fit uncertainty).

Quantum simulations with logical qubits
Finally, we explore the use of logical qubits as a tool in quantum simulation, probing entanglement properties of our fast scrambling circuits, potentially related to complex systems such as black holes [19, 50]. In particular, we utilize a Bell-basis measurement made on two copies of the quantum state (Fig. 6a), which is a powerful tool that can efficiently extract many properties of an unknown state [21, 22, 51]. With this two-copy technique, in Fig. 6b we plot the measured entanglement entropy -
in the scrambled system. We observe a characteristic Page curve [50] associated with a maximally entangled, highly scrambled, but globally pure state. These measurements also reveal a final state purity of 0.74(3), compared to the measured XEB of 0.616(7) in Fig. 5f, consistent with

8

XEB being a good proxy for the final state fidelity. Despite postselection overhead, we find error detection significantly improves signal-to-noise here, as near-zero entropies are exponentially faster to measure (ED Fig. 9).
Two-copy measurements can also be used to simultaneously extract information about all 4N Pauli strings [22]. Using this property and an analysis technique known as Bell difference sampling [52] we experimentally evaluate and directly verify the amount of additive Bell magic [52] in our circuits as a function of number of applied logical CCZs (Fig. 6c). This measurement of magic, associated with non-Clifford operations, quantifies the number of T gates (assuming decomposition into T ) required to -
realize the quantum state by observing the probability that sampled Pauli strings commute with each other (see Methods). Moreover, combining encoded qubits and twocopy measurement allows for additional error mitigation techniques. As an example, Fig. 6d shows the measured absolute expectation values of all 412 logical Pauli strings with sliding-scale error detection. Since in the two-copy measurements, for each error detection threshold we also measure the overall system purity, we can extrapolate-
 our expectation values to the case of unit-purity (zeronoise) [53]. This procedure evaluates the averaged Pauli expectation values to ≈ 10% relative precision of the ideal theoretical values spanning several orders of magnitude (Methods).

qubits by increasing laser power and optimizing control methods, while QEC efficiency can be improved by reducing two-qubit gate errors to 0.1% [8]. Deep computation will further require continuous reloading of atoms from a reservoir source [11, 15]. Continued scaling will benefit from improving encoding efficiency, e.g. by using quantum low-density-parity-check (qLDPC) codes [54, 55], utilizing erasure conversion [13, 33, 56] or noise bias [35], and optimizing the choice of (possibly multiple) at-
omic species [11, 14], as well as advanced optical controls [34]. Further advances could be enabled by connecting processors together in a modular fashion using photonic links or transport [10, 57], or more power-efficient trapping schemes such as optical lattices [58]. Although we do not expect clock speed to limit medium-scale logical systems, approaches to speed up processing in hardware [59] or with nonlocal connectivity [60] should also be explored. We expect that such experiments with early--
generation logical devices will enable experimental and theoretical advances that dramatically reduce anticipated costs of large-scale error-corrected systems, accelerating development of practical applications of quantum computers.

Outlook
These experiments demonstrate key ingredients of scalable error correction and quantum information processing with logical qubits. In addition to implementing the key elements of logical processing, our approach demonstrates practical utility of encoding methods for improving sampling and quantum simulations of complex scrambling circuits. Future work can explore if these methods can be generalized e.g. to more robust, higher-distance codes and if such highly entangled, non-Clifford states could b-
e utilized in practical algorithms. We note the demonstrated logical circuits are approaching the edge of exact simulation methods (Fig. 5d), and can readily be used for exploring error-corrected quantum advantage. These examples demonstrate that the use of novel encoding schemes, co-designed with efficient implementations, can allow one to implement particular logical algorithms at reduced cost.
Our observations open the door for exploration of large-scale logical qubit devices. A key future milestone would be to perform repetitive error correction [6] during a logical quantum algorithm to greatly extend its accessible depth. This repetitive correction can be directly realized using the tools demonstrated here by repeating the stabilizer measurement (Fig. 2) in combination with mid-circuit readout (Fig. 4). The use of the zoned architecture and logical-level control should allow our techn-
iques to be readily scaled to over 10000 physical

9

[1] Preskill, J. Quantum Computing in the NISQ era and beyond. Quantum 2, 79 (2018).
[2] Shor, P. W. Fault-tolerant quantum computation. In Annual Symposium on Foundations of Computer Science - Proceedings, 56–65 (IEEE, 1996).
[3] Steane, A. Multiple-particle interference and quantum error correction. Proceedings of the Royal Society of London. Series A: Mathematical, Physical and Engineering Sciences 452, 2551–2577 (1996).
[4] Dennis, E., Kitaev, A., Landahl, A. & Preskill, J. Topological quantum memory. Journal of Mathematical Physics 43, 4452–4505 (2002). arXiv:0110143 [quantph].
[5] Ryan-Anderson, C. et al. Implementing Fault-tolerant Entangling Gates on the Five-qubit Code and the Color Code (2022). arXiv:2208.01863.
[6] Quantum, G. Suppressing quantum errors by scaling a surface code logical qubit. Nature 614, 676–681 (2023).
[7] Bluvstein, D. et al. A quantum processor based on coherent transport of entangled atom arrays. Nature 604, 451–456 (2022).
[8] Evered, S. J. et al. High-fidelity parallel entangling gates on a neutral-atom quantum computer. Nature 622, 268–272 (2023).
[9] Beugnon, J. et al. Two-dimensional transport and transfer of a single atomic qubit in optical tweezers. Nature Physics 3, 696–699 (2007).
[10] Deist, E. et al. Mid-Circuit Cavity Measurement in a Neutral Atom Array. Physical Review Letters 129, 203602 (2022).
[11] Singh, K. et al. Mid-circuit correction of correlated phase errors using an array of spectator qubits. Science 380, 1265–1269 (2023).
[12] Graham, T. M. et al. Mid-circuit measurements on a neutral atom quantum processor (2023). arXiv:2303.10051v2.
[13] Ma, S. et al. High-fidelity gates and mid-circuit erasure conversion in an atomic qubit. Nature 622, 279–284 (2023).
[14] Lis, J. W. et al. Mid-circuit operations using the omg-architecture in neutral atom arrays (2023). arXiv:2305.19266.
[15] Norcia, M. A. et al. Mid-circuit qubit measurement and rearrangement in a 171 Yb atomic array (2023). arXiv:2305.19119v3.
[16] Campbell, E. T. The smallest interesting colour code (2016). URL https://earltcampbell.com/2016/09/ 26/the-smallest-interesting-colour-code/.
[17] Vasmer, M. & Kubica, A. Morphing Quantum Codes. Physical Review Applied 10, 030319 (2022).
[18] Arute, F. et al. Quantum supremacy using a programmable superconducting processor. Nature 574, 505–510 (2019).
[19] Kuriyattil, S., Hashizume, T., Bentsen, G. & Daley, A. J. Onset of Scrambling as a Dynamical Transition in Tunable-Range Quantum Circuits. PRX Quantum 4, 030325 (2023).
[20] Bremner, M. J., Montanaro, A. & Shepherd, D. J. Average-Case Complexity Versus Approximate Simulation of Commuting Quantum Computations. Physical Review Letters 117, 080501 (2016).

[21] Daley, A. J., Pichler, H., Schachenmayer, J. & Zoller, P. Measuring Entanglement Growth in Quench Dynamics of Bosons in an Optical Lattice. Physical Review Letters 109, 020505 (2012).
[22] Huang, H. Y. et al. Quantum advantage in learning from experiments. Science 376, 1182–1186 (2022). arXiv:2112.00778.
[23] Gidney, C. & Eker˚a, M. How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. Quantum 5, 433 (2021).
[24] Fowler, A. G., Mariantoni, M., Martinis, J. M. & Cleland, A. N. Surface codes: Towards practical large-scale quantum computation. Physical Review A 86, 032324 (2012).
[25] Self, C. N., Benedetti, M. & Amaro, D. Protecting Expressive Circuits with a Quantum Error Detection Code (2022). arXiv:2211.06703v1.
[26] Honciuc Menendez, D., Ray, A. & Vasmer, M. Implementing fault-tolerant non-Clifford gates using the [[8,3,2]] color code arXiv:2309.08663v1.
[27] Wang, Y. et al. Fault-Tolerant One-Bit Addition with the Smallest Interesting Colour Code arXiv:2309.09893v1.
[28] Andersen, T. I. et al. Non-Abelian braiding of graph vertices in a superconducting processor. Nature 618, 264–269 (2023).
[29] Patterson, D. A. & Hennessy, J. L. Computer Organization and Design: The Hardware Software Interface RISC-V Edition (2018).
[30] Ebadi, S. et al. Quantum phases of matter on a 256atom programmable quantum simulator. Nature 595, 227–232 (2021).
[31] Scholl, P. et al. Quantum simulation of 2D antiferromagnets with hundreds of Rydberg atoms. Nature 595, 233–238 (2021).
[32] Jaksch, D. et al. Fast quantum gates for neutral atoms. Physical Review Letters 85, 2208–2211 (2000).
[33] Scholl, P. et al. Erasure conversion in a high-fidelity Rydberg quantum simulator. Nature 622, 273–278 (2023).
[34] Graham, T. M. et al. Multi-qubit entanglement and algorithms on a neutral-atom quantum computer. Nature 604, 457–462 (2022).
[35] Cong, I. et al. Hardware-Efficient, Fault-Tolerant Quantum Computation with Rydberg Atoms. Physical Review X 12, 021049 (2022). arXiv:2105.13501.
[36] Beverland, M. E., Kubica, A. & Svore, K. M. Cost of Universality: A Comparative Study of the Overhead of State Distillation and Code Switching with Color Codes. PRX Quantum 2, 020341 (2021).
[37] Bomb´ın, H. Gauge color codes: optimal transversal gates and gauge fixing in topological stabilizer codes. New Journal of Physics 17, 083002 (2015).
[38] Goto, H. Minimizing resource overheads for faulttolerant preparation of encoded states of the Steane code. Scientific Reports 6, 19578 (2016).
[39] Flammia, S. T. & Liu, Y. K. Direct fidelity estimation from few Pauli measurements. Physical Review Letters 106, 230501 (2011).
[40] Egan, L. et al. Fault-tolerant control of an errorcorrected qubit. Nature 598, 281–286 (2021).
[41] Postler, L. et al. Demonstration of fault-tolerant uni-

versal quantum gate operations. Nature 605, 675–680 (2022). [42] Eastin, B. & Knill, E. Restrictions on transversal encoded quantum gate sets. Physical Review Letters 102, 110502 (2009). [43] Brown, B. J. A fault-tolerant non-clifford gate for the surface code in two dimensions. Science Advances 6 (2020). [44] Aaronson, S. & Gottesman, D. Improved simulation of stabilizer circuits. Physical Review A 70, 052328 (2004). [45] Mezher, R., Ghalbouni, J., Dgheim, J. & Markham, D. Fault-tolerant quantum -
speedup from constant depth quantum circuits. Physical Review Research 2, 033444 (2020). arXiv:2005.11539. [46] Paletta, L., Leverrier, A., Sarlette, A., Mirrahimi, M. & Vuillot, C. Robust sparse IQP sampling in constant depth (2023). arXiv:2307.10729v1. [47] Wu, Y. et al. Strong Quantum Computational Advantage Using a Superconducting Quantum Processor. Physical Review Letters 127, 180501 (2021). [48] Bravyi, S., Englbrecht, M., Ko¨nig, R. & Peard, N. Correcting coherent errors with surface codes.-
 npj Quantum Information 4, 55 (2018). [49] Bravyi, S. et al. Simulation of quantum circuits by lowrank stabilizer decompositions. Quantum 3, 181 (2019). [50] Sekino, Y. & Susskind, L. Fast scramblers. Journal of High Energy Physics 2008 (2008). [51] Hangleiter, D. & Gullans, M. J. Bell sampling from quantum circuits (2023). arXiv:2306.00083v2. [52] Haug, T. & Kim, M. S. Scalable Measures of Magic Resource for Quantum Computers. PRX Quantum 4, 010301 (2023). [53] Kim, Y. et al. Evidence for the ut-
ility of quantum computing before fault tolerance. Nature 618, 500–505 (2023). [54] Bravyi, S. et al. High-threshold and low-overhead faulttolerant quantum memory (2023). arXiv:2308.07915v1. [55] Xu, Q. et al. Constant-Overhead Fault-Tolerant Quantum Computation with Reconfigurable Atom Arrays arXiv:2308.08648v1. [56] Wu, Y., Kolkowitz, S., Puri, S. & Thompson, J. D. Erasure conversion for fault-tolerant quantum computing in alkaline earth Rydberg atom arrays. Nature Communications 13, 1–7 (2022).-
 arXiv:2201.03540. [57] Dordevi´c, T. et al. Entanglement transport and a nanophotonic interface for atoms in optical tweezers. Science 373, 1511–1514 (2021). [58] Tao, R., Ammenwerth, M., Gyger, F., Bloch, I. & Zeiher, J. High-fidelity detection of large-scale atom arrays in an optical lattice (2023). arXiv:2309.04717v2. [59] Xu, W. et al. Fast Preparation and Detection of a Rydberg Qubit Using Atomic Ensembles. Physical Review Letters 127, 050501 (2021). [60] Litinski, D. & Nickerson, N. Active -
volume: An architecture for efficient fault-tolerant quantum computers with limited non-local connections (2022). arXiv:2211.15465v1. [61] Barredo, D., De L´es´eleuc, S., Lienhard, V., Lahaye, T. & Browaeys, A. An atom-by-atom assembler of defectfree arbitrary two-dimensional atomic arrays. Science 354, 1021–1023 (2016). [62] Levine, H. et al. Dispersive optics for scalable Raman driving of hyperfine qubits. Physical Review A 105, 032618 (2022).

10
[63] Jandura, S. & Pupillo, G. Time-Optimal Two- And Three-Qubit Gates for Rydberg Atoms. Quantum 6, 712 (2022).
[64] Levine, H. et al. Parallel Implementation of HighFidelity Multiqubit Gates with Neutral Atoms. Physical Review Letters 123, 170503 (2019).
[65] Tan, D. B., Bluvstein, D., Lukin, M. D. & Cong, J. Compiling Quantum Circuits for Dynamically Field-Programmable Neutral Atoms Array Processors arXiv:2306.03487v3.
[66] Wimperis, S. Broadband, Narrowband, and Passband Composite Pulses for Use in Advanced NMR Experiments. Journal of Magnetic Resonance, Series A 109, 221–231 (1994).
[67] Cummins, H. K., Llewellyn, G. & Jones, J. A. Tackling systematic errors in quantum logic gates with composite rotations. Physical Review A 67, 042308 (2003).
[68] Barnes, K. et al. Assembly and coherent control of a register of nuclear spin qubits. Nature Communications 13, 2779 (2022).
[69] Le Kien, F., Schneeweiss, P. & Rauschenbeutel, A. Dynamical polarizability of atoms in arbitrary light fields: General theory and application to cesium. European Physical Journal D 67, 92 (2013).
[70] Hutzler, N. R., Liu, L. R., Yu, Y. & Ni, K. K. Eliminating light shifts for single atom trapping. New Journal of Physics 19, 023007 (2017).
[71] Shea, M. E., Baker, P. M., Joseph, J. A., Kim, J. & Gauthier, D. J. Submillisecond, nondestructive, timeresolved quantum-state readout of a single, trapped neutral atom. Physical Review A 102, 053101 (2020).
[72] Gidney, C. Stim: a fast stabilizer circuit simulator. Quantum 5, 497 (2021).
[73] Higgott, O., Bohdanowicz, T. C., Kubica, A., Flammia, S. T. & Campbell, E. T. Improved Decoding of Circuit Noise and Fragile Boundaries of Tailored Surface Codes. Physical Review X 13, 031007 (2023).
[74] Gottesman, D. Opportunities and Challenges in Fault-Tolerant Quantum Computation (2022). arXiv:2210.15844.
[75] Delfosse, N. & Paetznick, A. Spacetime codes of Clifford circuits (2023). arXiv:2304.05943v2.
[76] Steane, A. M. Active stabilization, quantum computation, and quantum state synthesis. Physical Review Letters 78, 2252 (1997).
[77] McEwen, M., Bacon, D. & Gidney, C. Relaxing Hardware Requirements for Surface Code Circuits using Time-dynamics (2023). arXiv:2302.02192.
[78] Gurobi Optimization, L. Gurobi Optimizer Reference Manual (2023).
[79] Landahl, A. J., Anderson, J. T. & Rice, P. R. Faulttolerant quantum computing with color codes (2011). arXiv:1108.5738v1.
[80] Cain, M. et al. Correlated decoding of logical qubit algorithms with transversal gates, in preparation (2023).
[81] Monz, T. et al. 14-qubit entanglement: Creation and coherence. Physical Review Letters 106, 130506 (2011).
[82] Gottesman, D. Stabilizer Codes and Quantum Error Correction (1997).
[83] Knill, E. Quantum computing with realistically noisy devices. Nature 434, 39–44 (2005).
[84] Shor, P. W. Scheme for reducing decoherence in quantum computer memory. Physical Review A 52, R2493 (1995).

11

[85] Krinner, S. et al. Realizing repeated quantum error correction in a distance-three surface code. Nature 605, 669–674 (2022).
[86] Horsman, C., Fowler, A. G., Devitt, S. & Meter, R. V. Surface code quantum computing by lattice surgery. New Journal of Physics 14, 123011 (2012).
[87] To´th, G. & Gu¨hne, O. Entanglement detection in the stabilizer formalism. Physical Review A 72, 022340 (2005).
[88] Kubica, A., Yoshida, B. & Pastawski, F. Unfolding the color code. New Journal of Physics 17, 083026 (2015).
[89] Chamberland, C., Kubica, A., Yoder, T. J. & Zhu, G. Triangular color codes on trivalent graphs with flag qubits. New Journal of Physics 22, 023019 (2020).
[90] Kubica, A. & Beverland, M. E. Universal transversal gates with color codes: A simplified approach. Physical Review A 91, 032330 (2015).
[91] Mi, X. et al. Information scrambling in quantum circuits. Science 374, 1479–1483 (2021).
[92] Linke, N. M. et al. Fault-tolerant quantum error detection. Science Advances 3 (2017).
[93] Hashizume, T., Bentsen, G. S., Weber, S. & Daley, A. J. Deterministic Fast Scrambling with Neutral Atom Arrays. Physical Review Letters 126, 200603 (2021).
[94] Jia, Y. & Verbaarschot, J. J. Chaos on the hypercube. Journal of High Energy Physics 2020, 1–46 (2020).
[95] Bremner, M. J., Jozsa, R. & Shepherd, D. J. Classical simulation of commuting quantum computations implies collapse of the polynomial hierarchy. In Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences, vol. 467 (2011).
[96] Hangleiter, D., Bermejo-Vega, J., Schwarz, M. & Eisert, J. Anticoncentration theorems for schemes showing a quantum speedup. Quantum 2, 65 (2018).
[97] Bouland, A., Fefferman, B., Nirkhe, C. & Vazirani, U. On the complexity and verification of quantum random circuit sampling. Nature Physics 15, 159–163 (2019).
[98] Bremner, M. J., Montanaro, A. & Shepherd, D. J. Achieving quantum supremacy with sparse and noisy commuting quantum computations. Quantum 1, 8 (2017).
[99] Kalinowski, M. et al. Quantum Advantage of Logical Qubits in Random Transversal Circuit Sampling, in preparation (2023).
[100] Gao, X. et al. Limitations of Linear Cross-Entropy as a Measure for Quantum Advantage arXiv:2112.01657v1.
[101] Morvan, A. et al. Phase transition in Random Circuit Sampling (2023). arXiv:2304.11119.
[102] Ware, B. et al. A sharp phase transition in linear crossentropy benchmarking arXiv:2305.04954v1.
[103] Shepherd, D. & Bremner, M. J. Temporally unstructured quantum computation. Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences 465 (2009).
[104] Pan, F. & Zhang, P. Simulation of Quantum Circuits Using the Big-Batch Tensor Network Method. Physical Review Letters 128, 030501 (2022).
[105] Boixo, S. et al. Characterizing quantum supremacy in near-term devices. Nature Physics 14, 595–600 (2018).
[106] Zhong, H.-S. et al. Quantum computational advantage using photons. Science 370, 1460–1463 (2020).
[107] Madsen, L. S. et al. Quantum computational advantage with a programmable photonic processor. Nature 606, 75–81 (2022).

[108] Iverson, J. K. & Preskill, J. Coherence in logical quantum channels. New Journal of Physics 22, 073066 (2020).
[109] Iyer, P. & Poulin, D. A Small Quantum Computer is Needed to Optimize Fault-Tolerant Protocols. Quantum Science and Technology 3, 030504 (2017).
[110] Kaufman, A. M. et al. Quantum thermalization through entanglement in an isolated many-body system. Science 353, 794–800 (2016).
[111] Brydges, T. et al. Probing R´enyi entanglement entropy via randomized measurements. Science 364, 260–263 (2019).

12

METHODS
System overview Our experimental apparatus (ED Fig. 1a) is described previously in Refs. [7, 8, 30]. To carry out the present experiments, several key upgrades have been made enabling programmable quantum circuits on both physical and logical qubits. A cloud containing millions of cold 87Rb atoms is loaded in a magneto-optical trap inside of a glass vacuum cell, which are then loaded stochastically into programmable, static arrangements of 852-nm traps generated with a spatial light modulator (SLM-
), and then rearranged with a set of 850nm moving traps generated by a pair of crossed acousto-optic deflectors (AODs, DTSX-400, AA Opto-Electronic) to realize defect-free arrays [30, 31, 61]. Atoms are imaged with a 0.65NA objective (Special Optics) onto a CMOS camera (Hamamatsu ORCA-Quest C15550-20UP), chosen for fast electronic readout times. The qubit state is encoded in mF = 0 hyperfine clock states in the 87Rb ground-state manifold, with T2 > 1s [7], and fast, high-fidelity single-qubit cont-
rol is executed by two-photon Raman excitation [7, 62] (ED Fig. 1b). A global Raman path illuminating the entire array is used for global rotations (Rabi frequency ∼1 MHz, resulting in ∼ 1 µs rotations with composite pulse techniques [7]) as well as for dynamical decoupling throughout the entire circuit (typically 1 global π pulse per movement). Fully programmable local single-qubit rotations are realized with the same Raman light but redirected through a local path which is focused onto targeted -
atoms by an additional set of 2D AODs. Entangling gates (270-ns duration) between clock qubits are performed with fast two-photon excitation using 420-nm and 1013-nm Rydberg beams to n=53 Rydberg states, utilizing a timeoptimal two-qubit gate pulse [63] detailed in Ref. [8]. During the computation, atoms are rearranged with the AOD traps to enable arbitrary connectivity [7]. Mid-circuit readout is carried out by illuminating from the side with a locally focused 780-nm imaging beam, with scattered -
photons collected on the CMOS and processed real-time by a field-programmable gate array, FPGA (Xilinx ZCU102), with feedforward control signal outputs.
The quantum circuits are programmed with a control infrastructure consisting of five arbitrary waveform generators (AWG) (Spectrum Instrumentation), as illustrated in ED 1c, synchronized to < 10-ns jitter. The 2-channel Rearrangement AWG is used for rearranging into defect-free arrangements [30] before the circuit, the 1 channel of the Rydberg AWG is used for entangling gate pulses, the 4 channels of the Raman AWG are used for IQ (in-phase and quadrature) control of a 6.8 GHz source [7, 62] (the g-
lobal phase reference for all qubits) and pulse-shaping of the global and local Raman driving, the 2 channels of the Raman AOD AWG are used for displaying tones that create the programmable light grids for local single-qubit control, and the 2 channels of the Moving AOD AWG are used for controlling the positions of all atoms during the circuit. AODs are central to our methods of efficient control [61], where the two voltage waveforms (one for X-axis and one for Y-axis) control many physical or log-
ical qubits in parallel: each row and column of the grid simply corresponds to a single frequency tone, and these tones are then superimposed in the waveform delivered to the AOD (amplified by Minicircuits ZHL-5W-1+). The phase relationship between tones is chosen to minimize interference.

Programming circuits Most of the system parameters used in our approach do not have hard limits, but instead result from possible trade-offs. In what follows we detail some design decisions made for the circuits used in the present work.
Zone parameter choices. For simplicity, we keep the entangling zone fixed for all experiments. This conveniently allows to switch between e.g. surface code and [[8,3,2]] code experiments, without additional calibrations. We choose our entangling zone profile, realized by 420-nm and 1013-nm Rydberg “tophat” beams generated by SLM phase profiles [30], to be homogeneous over a 35-µm tall region. As the Rydberg beams propagate longitudinally, the entangling zone is longer than it is tall. We optimize -
tophats to be homogeneous over roughly 250-µm horizontal extent. Taller regions are also achievable, with a trade-off with reduced laser intensity and greater challenge in homogenization. The 250-µm width of the zones used here is set by the bandwidth of our AOD deflection efficiency. We position the readout zone on the other side of the storage zone to further minimize decoherence on entangling zone atoms.
Our two-qubit gate parameters are similar to our prior work in Ref. [8]. During two-qubit Rydberg (n=53) gates, we place atoms ≲ 2 µm apart within a “gate site”, resulting in ≳ 450 MHz interaction strength between pairs, significantly larger than the Rabi frequency of 4.6 MHz. Importantly, due to the use of the Rydberg blockade [32, 64], the gate is largely independent of the exact distance between atoms. Hence, precise inter-atom positioning is not required. Gate sites are separated such that ato-
ms in different gate sites are no closer than 10 µm during the gate, resulting in negligible long-range interactions. Throughout this work we use 4 gate sites vertically (5 for the surface code experiment) and 20 horizontally, performing gates on as many as 160 qubits simultaneously (see ED Fig. 1d). Under various conditions, with proper calibration we measure two-qubit gate fidelities in the range F = 99.3% − 99.5%. We do not observe any error on storage-zone atoms when Rydberg gates are executed-
 in the entangling zone. Even though the tail of the tophat Rydberg excitation beams is only suppressed to ∼ 0.1x intensity, the two-photon drive is far off-resonant due to the ∼ 20 MHz 1013 light shift detuning which is present for the entangling zone atoms [8]. We natively realize physical CZ gates; when implementing CNOTs we add physical H gates. We find minimal two-qubit cross-talk between gate sites, as probed with long benchmarking sequences in Ref. [8]. Although Ref. [8] appears to find som-
e small cross-talk seemingly originating from decay into Rydberg P states, this should be considerably suppressed in the practical operation here due to the ∼ 200 µs duration between gates, during which time Rydberg atoms should either fly away or decay back to the ground state.
Shuttling and transfers. The SLM tweezers can have arbitrary positions, but are static. The AOD tweezers are mobile, but have several constraints [7, 65]. In particular, the AOD array creates rectangular grids (but not all sites need to be filled). During the atom moving operations, they are only used for stretches, compressions and translations of the AOD trap array: i.e., atoms move in rows and columns, and rows and columns never cross [7, 65]. Arbitrary qubit motions and permutation is achieved-
 by shuttling atoms around

13

in AOD tweezers, and then transferring atoms between AOD and SLM tweezers as appropriate. We perform gates on pairs of atoms in both AOD-AOD traps and AOD-SLM traps, with no observed difference for gate performance as measured by randomized benchmarking [8].
We find that free-space shuttling of atoms (i.e., no transfers) in AOD tweezers comes essentially with no fidelity cost (other than time overhead), consistent with our prior work [7]. Two additional improvements here are the use of a photodiode to calibrate and homogenize the 2D deflection efficiency of our 2D AODs to percent-level homogeneity across our used region, and engineering atomic trajectories and echo sequences to cancel out residual path-dependent inhomogeneities. For example, we move a-
n atom 100 µm away to realize a distant entangling gate, and then before returning the atom, we perform a Raman π pulse, so that differential light shifts accumulated during the return trip cancel with the first trip. Motion is realized with a cubic profile as in Ref. [7], the characteristic free-space movement time between gates is roughly 200 µs, and acoustic lensing effects from the AOD are estimated to be negligible. We pulse the 1013 laser off during motion to remove loss effects from the lar-
ge light shifts. Note that the 1013-induced differential light shift on the hyperfine qubit is only kHz-scale but we still ensure its effects are properly echoed out.
Transferring atoms between tweezers [9] presents additional challenges. We measure the infidelity of each transfer, encompassing both dephasing and loss, to be ≲ 0.1%. To achieve this performance, in our transfer from SLM to AOD, we ramp up the AOD tones’ intensity (with quadratic intensity profile when possible) corresponding to the appropriate sites over a time of 100-200 µs to a trap depth ∼2x larger than the SLM trap depth, and then move the AOD trap 1 − 2 µm away over a time of 50-100 µs. The-
se time scales can likely be shortened considerably while suppressing errors using optimal control techniques. During subsequent motion we leave the AOD trap depth at this 2x value. To transfer an atom AOD to SLM we perform the reversed process. During these transfer processes, the differential light shifts on the transferred atoms are dynamically changing, and can result in large unechoed phase shifts. As such, whenever possible we engineer circuits such that pairs of transfers will echo with app-
ropriately chosen π pulses. When echoing pairs of transfers is not possible, we perform 1 cycle of XY4 or XY8 dynamical decoupling during the transfer. Finally, we note that low-loss transfer is highly sensitive to alignment of the AOD and SLM grid. We fix small optical distortions between the AOD and SLM tweezer grids by fine adjustment of individual SLM grid tweezers, which can be arbitrarily positioned, to overlap with the AOD traps as seen on an image plane reference camera. It is important to-
 adjust the SLM and not the AOD, as small adjustments of individual AOD tones deviating from a frequency comb causes beating and atom loss.
Dynamical decoupling and local gates. In our circuit design, we engineer our echo sequences in order to cancel out as as many deleterious aspects as possible. We ensure that in our dynamical decoupling we have an odd number of π pulses between CZ gates (whenever possible), as this echoes out both systematic and spurious contributions to the single-qubit phase [7, 8]. We apply appropriate X(π) and Z(π) rotations between local addressing with the local Raman to cancel out errors induced by the globa-
l π/2 pulses, as well as between

pulses of the 420-nm laser (when used for entangling zone single-qubit rotations [7]) to echo out small crosstalk experienced in the storage zone by the tail of the 420-nm beam. For our global decoupling pulses we use both BB1 pulses [66] and “SCROFULOUS” pulses [67]. To benchmark and optimize coherence during our complex circuits, we perform a Ramsey fringe measurement encompassing the entire movement and single-qubit gate sequence and optimize the observed contrast [7]. When performing properly,-
 our total single-qubit error is consistent with SPAM [8], an effective coherence time of 1-2 s, and the Raman scattering error of all the Raman pulses [7, 62]. We note that these measured coherence time include the movement within and between zones; although we use fewer pulses (typically 1 per movement) than the XY16128 sequence used to benchmark 1.5s coherence in Ref. [7], the coherence times here are naturally longer due to furtherdetuned tweezers used (852 nm rather than 830 nm.
Local single-qubit gates [34, 68] with the Raman AOD are realized in arbitrary positions in space on both AOD and SLM atoms. Targeted logical qubit blocks are addressed by a grid illumination of the logical block. Arbitrary patterns of rotations on the qubit grid (e.g., during color code preparation) are realized with row-by-row serializing, with the targeted x coordinates in each row simultaneously illuminated. The duration of each row is 5-8 µs (i.e., several 10s of µs for an arbitrary pattern o-
f rotations), which can be sped up considerably as discussed in the next section. For simplicity we carefully calibrate rotations on 80-160 specific sites across the array, but also perform rotations in arbitrary spots utilizing the nearest calibrated values.
With the local single-qubit gates and entangling zone twoqubit gates calibrated, the entire circuit is simply defined by the appropriate trapping SLM phase profile, and waveforms for our several AWG channels and TTL pulse generator. These several channels then program complex, varied circuits on hundreds of physical qubits. Animations of all of our programmed circuits are attached as Supplementary Movies.
Programmable single-qubit gates To enable individual single-qubit gates, we use the same Raman laser system as our global rotation scheme and illuminate only chosen atoms using a pair of crossed AODs. The focused beam waist in the plane of the atoms is 1.9 µm, which is large enough to be robust to fluctuations in atomic positions, and small enough to prevent cross-talk to neighboring atoms separated by ≳ 6 µm. For Raman excitation, polarization needs to be carefully considered. Unlike the global p-
ath, the local beam propagation direction is perpendicular to the atom quantization axis (set by the external magnetic field). Therefore the fictitious magnetic field B⃗ fict responsible for driving the transitions, as described in Ref. [62], preferentially drives σ± hyperfine transitions rather than the desired π clock transition [69]. There exist two possible approaches to single-qubit gates, as illustrated in ED Fig. 2a. First, off-resonant σ± dressing generates differential light shifts betwee-
n qubit states enabling fast local Z(θ) gates. Global π/2 rotations convert these to local X(θ) gates. Second, one can directly apply local X(θ) gates with direct π transitions by slightly rotating the quantization axis towards the local beam direction; this could be achieved with an external field but, conveniently, B⃗ fict has a DC component that naturally rotates the axis. Note that, if the local beam is quickly turned on, this same fictitious DC field causes leakage out of the mF = 0 subspace,-
 therefore

14

Gaussian-smoothed pulses are used throughout this work. Although we realize both the π and σ± versions above,
in the present experiments we use the off-resonant σ± dressing procedure due to reduced polarization sensitivity, since our polarization homogeneity was affected by the sharp wavelength edge of a dichroic after the AOD. Furthermore, as for most circuits we perform local rotations row-by-row (only 1 Y tone at a time); this enables arbitrary fine-tuning of X coordinates and powers at each site for homogenizing and calibrating rotations (ED Fig. 2b). We calibrate using the procedure in ED Fig. 2c and-
 find these calibrations are stable on month timescales.
To quantify the fidelity, we perform randomized benchmarking using 0, 10, 20, 30, 40, and 50 local Z(π/2) rotations (per site) on 16 sites, obtaining F = 99.912(7)% as shown in ED Fig. 2d (note that the single-qubit gates we execute globally have fidelity closer to 99.99% [7, 8]). This approaches the Raman scattering limit for our σ± scheme (error of ∼ 7 × 10−4 per π/2 pulse), but when not well-calibrated is limited by inhomogeneity, in particular, associated with distortions of the y position of -
the rows. In the future, the performance can be further improved by using X(θ) gates, which enables robust composite sequences such as BB1 [66], has an improved Raman scattering contribution, and is faster (∼ 1 µs duration).
Midcircuit readout and feedforward To perform midcircuit readout [10–15] of selected qubits without affecting the others, we use a local imaging beam focused on the readout zone which is roughly 100 µm spatially separated from the entangling zone [7, 35]. The local imaging beam consists of 780-nm circularly polarized light, with a near-resonant component from F = 2 to F ′ = 3 and a small repump component. This beam is sent through the side of our glass vacuum cell, co-propagating with the global R-
aman and 1013-nm Rydberg beams (ED Fig. 1a). We use cylindrical lenses to shape the beam with focused beam waists of 30 µm in the plane of the atom array and 80 µm out of the plane. After moving some of the atoms to this readout zone, we first perform local pushout of population in the F = 2 ground state manifold (by turning off the repump laser frequency), followed by local imaging of the remaining F = 1 population.
As depicted in ED Fig. 3a, we collect an average of about 50 photons per imaged atom. To avoid losing the atoms too quickly during mid-circuit imaging (which, unlike our global imaging scheme, does not have multi-axis cooling), we use deep (roughly 5-mK) traps (helping retain the atoms), and stroboscopically pulse them on and off out of phase of the local imaging light to avoid deleterious effects of the deep traps such as inhomogeneous light shifts and fluctuating dipole force heating (ED Fig. 3b-
) [70]. From a double-Gaussian fit to the two distributions in Fig. 3a, we extract an imaging fidelity of over 99.9%. Because this fit can lead to an overestimate of the imaging fidelity (for example due to atom loss during imaging), we compare the total SPAM error (measured by amplitude of Ramsey fringe) with local imaging versus with global imaging for the same state preparation sequence, extracting 0.14(5)% higher error with local imaging; with these considerations we conservatively estimate a -
local imaging fidelity of around 99.8%.
A number of design considerations facilitate local imaging in the readout zone while preserving coherence of the data qubits in the entangling zone (ED Fig. 3e-g) [35]. The main sources of decoherence are rescattering of photons from the

locally imaged atoms as well as beam reflections and tails of the local imaging beam hitting the data qubits. As shown in Fig. 1c, for the 500-µs midcircuit imaging used in this work, we are able to achieve unchanged coherence (identical within the errorbars) of the data qubits with the local imaging light on as without it. To understand these effects more quantitatively, we measure the error probability of the data qubits in the entangling zone while the local imaging beam is on in the readout zo-
ne for up to 20 ms and with higher intensities than used for local imaging in this work. We suppress decoherence by light shifting the data qubits’ 780-nm transition to be different from that of the locally imaged qubits by several 10s of MHz, as studied in ED Fig. 3f-g. Data qubit decoherence is further suppressed by the large spatial separation between the readout zone and the entangling zone, where intensity from the local imaging beam’s Gaussian tail should theoretically fall off rapidly. Even-
 at large separations, we find that stray beam reflections (e.g. from the glass cell window and other optical elements) can hit the data qubit region. To mitigate this effect, we displace reflections away from the atom array by angling the local imaging beam as it hits the glass cell window. The estimated effects of re-scattered photons from the imaged atoms, especially with the added relative detuning, is negligible. With all these considerations, we find that we are able to suppress data qubit d-
ecoherence rates to ≲ 0.1% per 500 µs of local imaging exposure, as illustrated in ED Fig. 3h.
The full mid-circuit readout and feedforward cycle occurs in slightly less than 1 ms, including local pushout, local imaging, readout of the camera pixels, decoding of the logical qubit state on the FPGA, and a local Raman pulse which is gated on or off by a conditional trigger (ED Fig. 3d). In future work, this approach to midcircuit readout and feedforward can be considerably improved to enable mid-circuit readout close to 100-µs scale [71]. This method can directly be extended to perform many r-
ounds of measurement and feedforward, where groups of ancilla atoms are consecutively brought to the readout zone throughout a deep quantum circuit.
Correlated decoding During transversal CNOT operations, physical CNOT gates are applied between the corresponding data qubits of two logical qubits. These physical CNOT gates propagate errors between the data qubits in a deterministic way: X errors on the control qubit are copied to the target qubit, and Z errors on the target qubit are copied to the control qubit (see ED Fig. 4b). As a result, the syndrome of a particular logical qubit can contain information about the errors that have occured on-
 another logical qubit, at the point in time in which the pair underwent a transversal CNOT operation. We can leverage the information about these correlations and improve the circuit fidelity by jointly decoding the logical qubits involved in the algorithm. We note that this is closely related to other recent developments in decoding entire circuits, or so-called space-time decoding [72–75]. It is also related to Steane error correction [76], where errors are intentionally propagated from a data -
logical qubit onto an ancilla logical qubit, which is then projectively measured to extract the syndrome of the data logical qubit.
To perform correlated decoding, we solve the problem of finding the most likely error given the measured syndrome. We start by constructing a decoding hypergraph based on a description of the logical algorithm, which describes how each physical error mechanism (e.g. a Pauli-error channel

15

after a two-qubit gate) propagates onto the measured stabilizers [72, 77]. The hypergraph vertices correspond to the stabilizer measurement results. Each edge or hyperedge corresponds to a physical error mechanism that affects the stabilizers it connects, with an edge weight related to the probability of that error. Each hyperedge can connect stabilizers both within and between logical qubit blocks (see Fig. 2b). We then run a decoding algorithm which uses this hypergraph, along with each experime-
ntal snapshot, to find the most likely physical error consistent with the measurements. This correction is then applied in software (with the exception of Fig. 4e, which is decoded real-time).
Concretely, to construct the hypergraph for a given logical circuit, we perform the following procedure. For each logical algorithm (in this section considering only Clifford gates), we identify a set of N detectors (vertices of the hypergraph) Di ∈ {0, 1} for i = 1, . . . , N , which are sensitive to physical errors occuring during the logical circuit. A detector is either on (1) or off (0) to indicate the presence of an error. For the general case, we let Di = 0 if the ith stabilizer measurement-
 matches the measurement of its backwards-propagated Pauli operator at a previous time, and 1 otherwise (the latter indicates that an error has occured). In particular, for our surface code experiments, detectors in the final projective measurement are computed by comparing the final projective measurement of the stabilizers with the value of the ancillabased stabilizer measurement that occured before the CNOT (note that due to our state-preparation procedure, the initial stabilizer measurement is-
 randomly ±1, but the detector is deterministically zero in the absence of noise). For our twodimensional color code experiments, the initial stabilizers are deterministically +1, so each detector is equal to zero if the corresponding stabilizer in the final projective measurement is +1. To construct the concrete hypergraph and hyperedge weights, we then use Stim [72] to identify the probability pj (j = 1, . . . , M ) of each error mechanism Ej in the circuit using a Pauli-channel noise model with-
 approximate experimental error rates, along with the detectors that are affected by Ej.
To find the most likely physical error, we encode it as the optimal solution of a mixed-integer program, a canonical problem in optimization with commercial solvers readily available [78], similar to prior work in Ref. [79]. We associate each error mechanism Ej with a binary variable that is equal to one if that error occured, and zero otherwise. Our goal is then to find the error assignment {0, 1}M with maximum total error probability (alternatively, the error with the minimum total weight, where-
 the weight of error i is wi = log[(1 − pi)/pi]), subject to the constraint that the error is consistent with the measured detectors. To be consistent with the measured detectors, the parity of the error variables for all the hyperedges connected to a given detector should match the parity of that detector. Concretely, let f be a map from each detector Di to the subset of error mechanisms that flip its parity. The most likely error is then the optimal solution to the following mixed-integer progra-
m:

maximize subject to

M j=1

log(pj )Ej

+

log(1

−

pj )(1

−

Ej )

Ej ∈f(Di) Ej − 2Ki = Di ∀i = 1, . . . , N

Ej ∈ {0, 1}

∀j = 1, . . . , M

Ki ∈ Z≥0

∀i = 1, . . . , N

The objective function evaluates to the logarithm of the probability of the assigned error configuration, and

each variable Ki ensures that the sum of the error variables in f (Di) matches Di, modulo 2. Finally, we solve the mixed-integer program to optimality using Gurobi, a state-of-the-art solver [78], and apply the correction string associated with the error indices j for which Ej = 1 in the optimal assignment. We explore this correlated decoding in more detail, including its consequences on error-corrected circuits and the asymptotic runtimes of different decoders, in Ref. [80]. See Methods sections -
Surface code and its implementation and Correlated decoding in the surface code for additional discussion on the surface code in particular.

Direct fidelity estimation and tomography

One challenge with logical qubit circuits is that convenient

probes that are accessible with physical qubits may no longer

be accessible. The GHZ state studied here provides such an

example, since conventional parity oscillation measurements

cannot be performed [81]. Instead, we use a technique known

as direct fidelity estimation [39], which can be understood as

follows. The target state ψ is the simultaneous eigenstate

of the N stabilizer generators {Si}, and so the projector

onto the target state is |ψ⟩⟨ψ| =

N i

(Si

+

1)/2

(which

is

1 if Si = 1 ∀i, and 0 otherwise). One can thereby directly

measure fidelity by measuring the expectation values of

all terms in this product, which in other words refers to

measuring the expectation values of all elements of the

stabilizer group given by the exponentially many products

of all the Si. The logical GHZ fidelity is defined as the

average expectation value of all measured elements of the

stabilizer group. With our 4-qubit GHZ state, with 4

stabilizer generators {XXXX, ZZII, IZZI, IIZZ}, the

16-element stabilizer group is given by all possible products:

{IIII, ZZII, IZZI, IIZZ, ZIIZ, IZIZ, ZIZI, ZZZZ,

XXXX, XY Y X, Y XXY, XXY Y, Y Y XX, Y XY X,

XY XY, Y Y Y Y }. We measure the expectation values of all

16 of these operators; for each element, we simply rotate

each logical qubit into the appropriate logical basis and then

calculate the average parity of the four logical qubits in

this measurement configuration. We then directly average

all 16 elements equally (with appropriate signs, as as some

of the stabilizer products should have -1 values), and in

this way compute the logical GHZ state fidelity. This is an

exact measurement of the logical state fidelity [39]. Scaling

to larger states can be achieved by measuring elements

of the stabilizer group at random [39]. To perform full tomography in Fig. 3e, we measure in all 34 = 81 bases,

thereby measuring the expectation values of all 256 logical

Pauli strings, and reconstruct the density matrix by solving

the system of equations with optimization methods.

Sliding-scale error detection Here we provide additional information about the sliding-scale error detection protocol applied for Figs. 3,5,6. Typically, error detection refers to discarding (or postselecting) measurements where any stabilizer errors occured. In the context of an algorithm, however, discarding the result of an entire algorithm if just one physical qubit error occurred may be too wasteful, and one may want to only discard measurements where many physical qubits fail and the probabi-
lity of algorithm success is greatly reduced. For this reason, for the algorithms here we explore error detection on a sliding-scale, where one can set a desired “confidence threshold”, where based on the syndrome outcomes one determines whether to

16

accept a given measurement. Sliding this confidence threshold enables a continuous trade-off (in data analysis) between the fidelity of the algorithm and the acceptance probability. When sliding-scale error detection is applied, in all applicable cases we also apply error correction to return to the codespace.
We apply such a sliding-scale error detection for the colorcode logical GHZ fidelity measurements in Fig. 3d. One possible method would be to discard measurements based on the number of detected stabilizer errors. However, this is suboptimal, both because on the color code a single physical qubit error can result from anywhere between 1 and 3 stabilizer errors, and also because errors deterministically propagate between codes during the transversal CNOT gates, such that a single physical error on -
one code can lead to detected errors on all codes, but which are still all correctable errors. As such, we perform the sliding-scale error detection utilizing the correlated decoding technique, and set the confidence threshold as a threshold weight of the overall correction weight on the decoding hypergraph. For example, in the color code GHZ experiment, a stabilizer error on all 4 logical qubits which is just consistent with a single physical qubit error that propagated to all 4 logical qubits, i-
s in fact a low-weight (or, highprobability) error as it corresponds to just a single physical qubit error. If the weight of hypergraph correction (inversely related to log of the probability that a given error mechanism would have occurred leading to the observed syndrome outcome) is below the cut-off threshold weight, then the measurement is accepted; otherwise, it is rejected. For each threshold we then calculate the average algorithm result (y-axis of Fig. 3d), as well as the fraction of accep-
ted data (x-axis of Fig. 3d).
In Fig. 5 with [[8,3,2]] codes, for 3, 6, 24, and 48 logical qubits we apply our sliding-scale detection simply as given by the total number of stabilizer errors detected, although as illustrated above this can likely be improved by considering which stabilizer error patterns are more likely to cause an algorithmic failure. For the 12 logical qubits, in order to have a more fine-grained sliding-scale, for each of the 24 = 16 possible stabilizer outcomes we calculate the XEB to rank the likelihood -
that each of the observed stabilizer outcomes leads to an algorithmic failure, and then use this ranking when deciding whether a given measurement is above/below the cut-off threshold. In Fig. 6b we set the threshold by the number of stabilizer errors, and in Fig. 6d, to have more fine-grained sliding-scale information we take different subsets of stabilizer outcome events that are all below the threshold of allowed number of stabilizer errors, and calculate the y-axis (Pauli expectation value) an-
d x-axis (purity) for all of them. Broadly, there are many ways to perform this sliding-scale error detection, and this can be useful both as continuous trade-offs between fidelity and acceptance probability, as well as for use in techniques such as zero-noise extrapolation in data analysis (Fig. 6d).
Overview of QEC methods Here we provide a brief overview of key QEC methods used in our work.
Code distance, decoding, and thresholds. [[n, k, d]] notation describes a code with a number of physical qubits n, a number of logical qubits k, and a code distance d. The code distance d sets how many errors a code can detect or correct. The code distance is the minimum Hamming distance between valid codewords (logical states), i.e. the weight of the small-

est logical operator [82]. In the case of the two-dimensional surface and color codes studied here, d is equivalent to the linear dimension of the system [24].
Following this definition, quantum codes of distance d can detect any arbitrary error of weight up to d − 1. Such errors cause stabilizer violations, indicating that errors occurred. Postselecting on the results with no such stabilizer violations corresponds to performing error detection, which protects the quantum information up to d − 1 errors at the cost of postselection overhead. Conversely, codes can correct fewer errors than they detect (but without any postselection overhead). The correctio-
n procedure brings the system back to the closest logical state (codeword); thus, if more than d/2 errors occur, the resulting state may be closer to a codeword different from the initial one, resulting in a logical error [82]. For this reason, codes of distance d can correct any arbitrary error of weight up to (d−1)/2 (rounded down if d is even [24]). The process of decoding refers to analyzing the observed pattern of errors and determining what correction to apply to return back to the original -
code state and undo the physical errors created. In many cases, such as with the 2D surface and color codes, one does not need to apply the correction in hardware (physically flipping the qubits); instead it is sufficient to undo an unintended XL/ZL operator that was applied by hardware errors by simply applying a “software” XL/ZL operator [24], also described as Pauli frame tracking [83].
As the size of an error correcting code and the corresponding code distance is increased, so are the opportunities for errors to occur as the number of physical qubits increases. This leads to a threshold behavior in quantum error correction: if the density of errors p is above a (possibly circuit-dependent) characteristic error rate pth, then increasing code distance will worsen performance. However, if p < pth, then increasing code distance will improve performance [24]. Theoretically, since one-
 requires (d + 1)/2 errors to create a logical error, the logical error rate will be exponentially suppressed as ∝ (p/pth)(d+1)/2 at sufficiently low error rates [24]. The performance improvement with increasing code distance, observed for the preparation and entangling operation in Fig. 2, implies that we surpass the threshold of this circuit. We note that in this regime, improving fidelities by e.g. a factor of 2x can then lead to an error reduction of 24 = 16x for the distance-7 code studied, a-
nd further exponential suppression with increasing code distance. This rapid suppression of errors with reduced error rate and increased code distance is the theoretical basis for realizing large-scale computation. We emphasize that thresholds can be circuit-dependent, as discussed in detail in the surface code section below.
Fault-tolerance and transversal gates. A common definition of fault-tolerance in quantum circuits [82] (which we use in this work) is that a weight-1 error (i.e. an error affecting one physical qubit), cannot propagate into a weight-2 error (now affecting two physical qubits) within a logical block. This property implies that errors cannot spread within a logical block, and thereby prevents a single error from growing uncontrollably and causing a logical error.
Distance-3 codes, which are of significant historical importance [3, 84], can correct any weight-1 error. Fault-tolerance is particularly important for these codes, since otherwise a weight-1 error can lead to a weight-2 error and thereby cause a logical fault. An important characteristic of a fault-tolerant circuit that uses distance-3 codes [82] is that (in the low error

17

rate regime), physical errors of probability p lead to logical errors with probability ∝ p2. We emphasize that the notion of fault-tolerance refers to circuit structuring to control propagation of errors, but a circuit can be fault-tolerant with low fidelity, or non-fault-tolerant with high fidelity. For example, even if a weight-1 error can lead to a weight-2 error, but the code has high distance, or if this error propagation sequence is possible but highly unlikely, then this property may not be-
 of practical importance (for this reason definitions of faulttolerance may vary). In practice, the goal of QEC is to execute specific algorithms with high fidelity, and fault-tolerant structuring of a circuit is one of many tools in the design and execution of high-fidelity logical algorithms.
Transversal gates, defined here as being composed of independent gates on the qubits within the code block (i.e., entangling gates are not performed between qubits within the same code block) [42], constitute a direct approach to ensure fault-tolerant structuring of a logical algorithm. Since transversal gates imply performing independent operations on the physical constituents of a code block, errors cannot spread within the block, and fault-tolerance is guaranteed. In the present work, all logic-
al circuits we realize (following the logical state preparation) are fault-tolerant, as all logical operations we perform are transversal. Note, in particular, that even though the transversal CNOT allows errors to propagate between code blocks, this is still fault-tolerant as it does not lead to a higher weight error within the block, and thereby a single physical error can neither lead to a logical failure nor an algorithmic failure. Importantly, the large family of codes referred to as Calderba-
nk-Shor-Steane (CSS) codes all have a transversal CNOT [2], all of which can be implemented with the single-step, parallel-transport approach here.
Although all the logical circuits we implement are faulttolerant, the logical qubit state preparation is fault-tolerant for our d = 3 color code (Figs. 3,4) and d = 3 surface code (part of Fig. 2), but is non-fault-tolerant for the state preparation of our d = 5, 7 surface codes and [[8,3,2]] codes. Thus, all of our experiments with the d = 3 color codes are faulttolerant from beginning to end, and so the entire algorithm is fault-tolerant and theoretically has a failure probability that scales as-
 p2. However, we note that having a fault-tolerant algorithm also does not imply that errors do not build up during execution of the circuit. For this reason deep circuits require repetitive error correction [6, 85] to constantly remove errors and continuously benefit from the, e.g., p2 suppression.
Our logical GHZ state theoretically has a failure probability scaling as p2. Nevertheless, the error build-up (increasing p) during the operations of the circuit and the spreading of errors through transversal gates, limits our logical GHZ fidelity to 72%. This is consistent with numerical modeling. Similar to the surface code modeling (ED Fig. 4) we use empirical error rates consistent with 99.4% two-qubit gate fidelity as well as roughly 4% data qubit decoherence error (including SPAM) over the -
entire circuit. We simulate the experimental circuit (including the FT state preparation with the ancilla logical flag) and measurements of all 16 elements of the stabilizer group (see direct fidelity estimation section), and extract a simulated logical GHZ fidelity of 79%. This is slightly higher than our measured 72% logical GHZ fidelity, possibly originating from imperfect experimental calibration. This modeling indicates that our logical GHZ fidelity is limited by residual physical errors, whi-
ch will be reduced quadratically as p2 with reduction in physical error rate p, in particular by reducing residual single-qubit errors which

were larger during this measurement and are dominating the error budget here.
Surface code and its implementation. In 2D planar architectures, such as those associated with superconducting qubits [6, 85], stabilizer measurement is the most important building block of error-corrected circuits [24]. In such systems, stabilizers need to be constantly measured in order to correct qubit dephasing and increase coherence time, as demonstrated recently [6]. Logic operations are implemented by changing stabilizer measurement patterns, enabling realization of techniques such as braid-
ing [24] and lattice surgery [86]. Similar techniques can be used to move logical degrees of freedom in order to implement nonlocal logical gates [23]. Due to this gate execution strategy, d rounds of stabilizer measurement are required for each entangling gate for ensuring faulttolerance [24].
Neutral atom quantum computers feature different challenges and opportunities. Specifically, they feature long qubit coherence times (T2 > 1s), which can be further increased to the scale of 10 - 100s with well-established techniques [68]. By using the storage zone, qubits can be idly, safely stored for long periods without repeated stabilizer measurements. Hence, from a practical perspective increasing qubit coherence by using a logical encoding does not provide immediate gains in improving quant-
um algorithms, and the gains will be from improving the fidelity of entangling operations. Moreover, logic gates and qubit movement do not have to be performed with stabilizer measurements. Instead, they can be executed with nonlocal atom transport and transversal gates. Since such transveral gates are intrinsically fault-tolerant, they do not necessarily require d rounds of correction after each operation. Even syndrome measurement may be better executed in certain cases by techniques such as Ste-
ane error correction [76] (similar to our ancilla logical flag with color codes as used in Fig. 3) as opposed to repeated stabilizer measurement. For these reasons, the transversal CNOT is among the most important building blocks in error-corrected circuits. Hence, we here focus on improving the transversal CNOT by scaling code distance.
Specifically, we use the so-called rotated surface code [6], which has code parameters [[d2, 1, d]]. Our distance-7 surface codes (as drawn in Fig. 2d) are composed of 49 physical data qubits, with 24 X stabilizers (light blue squares) and 24 Z stabilizers (dark blue squares), and 1 encoded logical qubit described by anticommuting weight-7 operators, the horizontally oriented XL and the vertically oriented ZL. The X and Z stabilizers commute with the XL and ZL logical operators, allowing one to me-
asure the stabilizers without disturbing the underlying logical degrees of freedom. In our experiments, we prepare one surface code in |+L⟩ and one surface code in |0L⟩. In the first code, this is realized by preparing all physical data qubits in |+⟩, thereby preparing an eigenstate of XL and the 24 X stabilizers, and then projectively measuring the 24 Z stabilizers with 24 ancilla qubits (Fig. 2d red dots) using four entangling gate pulses [24]. The second code is prepared similarly, but with all-
 physical qubits initialized in |0⟩, thus preparing an eigenstate of ZL and the 24 Z stabilizers, and then projectively measuring the 24 X stabilizers with 24 ancillas. The CNOT is directly transversal because these two surface code blocks have the same orientation, and does not require rotation of the lattice to implement a H. The projective measurement of the ancillas defines the values of the stabilizers. During the transversal CNOT, the values of

18

the stabilizers are copied onto the other code as well, and is tracked in software.
Since we only perform a single round of stabilizer measurement, our state preparation scheme is non-fault-tolerant (nFT) for the d = 5, 7 codes. Consider, for instance, the case when all stabilizers are defined as +1, and no errors are present in the system, but an ancilla measurement error in the middle of the surface code lattice yields a stabilizer measurement = -1. Correction then causes a large-weight pairing of this apparent stabilizer violation to the boundary [4]. Hence this single ancilla-
 measurement error can lead to several data qubit errors, resulting in nFT operation. The d = 3 code initialization is a special case which does not suffer from this issue [38]. Higher-order considerations about fault-tolerance given by gate ordering during stabilizer measurement can also be considered [6].
The effect of these nFT errors from noisy syndrome extraction is to cause X physical errors on the |+L⟩ state, and Z physical errors on the |0L⟩ state. Thus in performing just state preparation and measurement, the presence of these errors would not be directly apparent, as these errors commute with measuring the |+L⟩ in the X-basis and |0L⟩ in the Z basis. As such this circuit would not be a good benchmark of surface code state preparation. Conversely, the transversal CNOT experiment is sensitive-
 to the various aspects of the circuit and a good probe of performance. Since we measure the Bell state in both the XL1 XL2 and ZL1 ZL2 bases, the nFT errors in both bases will propagate through the logical CNOT and cause errors on both logical qubits in both the X and Z bases. For these reasons, unlike a surface code SPAM measurement, this experiment is a good probe of logical performance. In fact, the effect of these nFT errors is such that if we just apply conventional decoding within each logi-
cal block, then we find that the Bell state degrades substantially with increased code distance (Fig. 2d).
The effects of this nFT preparation are suppressed (but are not entirely removed) by using the correlated decoding technique. For example, consider a nFT-induced apparent stabilizer violation to the left of the middle line in the lattice of the d = 7 |+L⟩ state, corresponding to a chain of 3 physical X errors to the boundary. These errors will propagate through the logical CNOT onto the second logical qubit, and affect the independent measurement of both logical qubits in the Z basis when probing -
the ZL1 ZL2 stabilizer. When decoded independently, if another single X error occurs on the first block after the CNOT moving the stabilizer violation to the right of the middle line, becoming a chain of 4 X physical errors, this will cause an incorrect pairing and lead to an independent XL1 error on this code only and thereby corrupt the ZL1 ZL2 stabilizer, and would correspond to a total weight-6 correction between the two codes. However, when decoded jointly with correlated decoding, these erro-
rs can be effectively decoded since they will appear on the stabilizers of both logical qubits. In this example, the lowest weight pairing would remove this chain of 3 X errors from both codes, and leave only the 1 remaining X error on the first block, which can also successfully be decoded (total pairing weight here is only 2). Our correlated decoding technique is thus essential to our observation of improved Bell performance with code distance.
Finally, we elaborate on our evaluation of Bell pair error. Bell state fidelity is given by the average of the populations and the coherences, which for physical qubits can be measured as the ZZ populations and the amplitude of

parity oscillations. In the language of stabilizers, the parity oscillation amplitude is given by the average of ⟨XX⟩ and −⟨Y Y ⟩ [87]. With the surface code we cannot conveniently measure the YL operators fault-tolerantly (and is why we use color codes for programmable Clifford algorithms and full tomography, see next section). For this reason, we estimate the logical coherences as ⟨XLXL⟩, which we then average with the populations for calculating the Bell pair error. To support the validity of t-
his analysis, we can instead calculate a lower bound on the Bell state fidelity [87], which also shows the same improvement in performance as we increase code distance (ED Fig. 4d).
Correlated decoding in the surface code. Following the above discussion, we provide additional insights related to the correlated decoding in the case of the surface code transversal CNOT. Consider a circuit where perfect (noiseless) surface codes are initialized, a transversal CNOT is executed, and then projective readout is performed. If errors occur before the transversal CNOT, then these errors can propagate; e.g., an X physical error on the control logical qubit will propagate onto the target-
 logical qubit, and thereby double the density of errors on the target logical qubit. By multiplying the projectively measured Z stabilizers of the target logical qubit with those of the control logical qubit, the propagation is undone. Now the target logical qubit only has to decode its original density of X errors. The same considerations can be made for Z errors originating on the target logical qubit that propagate onto the control logical qubit. However, if there are errors after the transver-
sal CNOT, then multiplying the stabilizers instead doubles the density of such errors. Thus, the optimal decoding strategy if errors are only after the transversal CNOT is to perform independent matching within both codes. The general case where errors are present both before and after the transversal CNOT corresponds to neither case, and is modeled by our decoding hypergraph that has edges and hyperedges connecting the two logical qubits, with edgeweights informed by our experimental error model.-
 Fig. 5 explores decoding performance with different values of the scaled weights of the edges and hyperedges that connect the stabilizers of the two logical qubits. These results illustrate that the correlated decoding is robust (but not completely insensitive) to the nFT errors associated with ancilla measurement errors. This feature would also be recovered by the simpler multiplication decoder, which would be entirely insensitive to errors from ancilla measurement, but however is more sensitive-
 to errors after the CNOT. Specifically, ED Fig. 5c shows that our optimized decoder is not simply a “multiplication decoder” as the ancilla measurement values indeed contribute to the correction procedure and make the correlated decoding more robust to decoder parameters. For a given logical circuit, our correlated decoding procedure generates a decoding hypergraph which we then solve using most likely error methods, which is done here for both surface code and color code experiments, and can gen-
erically be applied to any stabilizer codes and Clifford circuits [75]. More theoretical details and discussion of correlated decoding will be presented in Ref. [80].
2D color codes. Two-dimensional color codes are topological codes, which are similar to surface codes [88]. Often portrayed in a triangular geometry, the color codes used here are a tiling of three colors of weight-4 and weight-6 stabilizers, with XL and ZL operator strings running along the boundary of the

19

code [88]. In this work we study two-dimensional d = 3 color codes, as portrayed in Fig. 3a, which only contain weight-4 stabilizers given by the products of X and Z on the qubits of each colored plaquette. This d = 3 color code is identical to the 7-qubit Steane code. However, we emphasize that the techniques used here directly apply to larger-distance color codes [89].
Although the color codes are similar to surface codes, an important difference is that in the color code, the X and Z stabilizers lie directly on top of the same qubits (as opposed to being on dual lattices with respect to each other), and similarly the XL and ZL operators lie on top of each other (as opposed to propagating in the orthogonal directions on the surface code). In other words, the operators here are symmetric and related by a global basis transformation. This has important consequence-
s for the allowed transversal gate set [41, 90]. In particular, although the surface code technically has a transversal H which transforms XL ↔ ZL, it requires a physical 90-degree rotation of the code block. While such lattice rotations are possible using atom motion techniques, for many circuits it is inconvenient. Conversely, in the color code H is transversal: it directly exchanges XL ↔ ZL as well as the X and Z stabilizers. This difference is even more important for the transversal S gate whi-
ch is possible for the color code. Here, transversal S exchanges XL ↔ YL (where YL is given by the product of XL and ZL which lie on top of each other) as intended, and the X stabilizer of a given plaquette returns back to itself by multiplying the Z stabilizer of that same plaquette. (This is in contrast to the surface code, which does not have a transversal S, where the YL operator is a product of horizontally propagating XL and vertically propagating ZL [24].) Since the color code has the entir-
e transversal gate set of {H, S, CNOT} and also does not require tracking any lattice rotations, it is well-suited to exploration of programmable logical Clifford algorithms.
For fault-tolerant preparation of the d = 3 color code we use a modified version of the scheme summarized in Ref. [38], where instead of the 8-gate encoding circuit, we use a 9-gate encoding circuit that is more conveniently mapped to specific atom movements in our system (corresponding to graph state preparation similar to Ref. [7]), followed by a transversal CNOT with an ancilla logical flag. The logical SPAM fidelity is then calculated as the probability of observing |0L⟩ after decoding. We not-
e that in Fig. 3 we could also have made a 5-qubit GHZ state but made a 4-qubit GHZ state for simplicity of performing full tomography. In Fig. 4, when Bell state fidelities with feedforward are reported we estimate the logical coherences as the average of ⟨XLXL⟩ and −⟨YLYL⟩, which we then average with the ZLZL populations (not plotted) for calculating the Bell pair fidelity. Finally, we note that the feedforward Bell state in Fig. 4e could also be performed with a software ZL rotation on either o-
ne of the two qubits allowing one to correct to the appropriate Bell state, but here we do the feedforward S on both qubits to test our feedforward capabilities; this technique is directly compatible with performing magic state teleportation [24].
Clifford and non-Clifford gates, and universality. 2D topological codes such as the surface and color codes have transversal implementation of Clifford gates (e.g., {H, S, CNOT}). This gate set is not universal, i.e. it cannot alone be used to realize an arbitrary quantum computation, and requires a non-Clifford gate such as {T , CCZ} for achieving universal computation. Moreover, circuits composed solely of stabilizer

states and Clifford gates can be simulated in polynomial time due to the Gottesman-Knill theorem [44]. This can be understood as stabilizer tracking: for example, consider a 3-qubit system where a stabilizer of the state is X ⊗ I ⊗ I, where X stabilizes the |+⟩ state and I is the identity. Applying two CZ entangling gates CZ1,2 ⊗ CZ1,3 transforms this stabilizer to X ⊗ Z ⊗ Z, since an X flip before the CZ simply changes whether a Z flip will be applied to the other qubits. Even though Clifford cir-
cuits create superposition and entanglement between qubits, the N initial stabilizers of the state can simply be tracked as they propagate through the circuit (so-called operator spreading [91]), and thereby simulation of the circuit can be easily accomplished.
The effect of non-Clifford gates, however, is significantly more complex. For example, passing the stabilizer X ⊗ I ⊗ I through a CCZ maps into a superposition of Pauli strings, i.e. X ⊗I ⊗I → 1/4(X ⊗I ⊗I +X ⊗Z ⊗I +X ⊗I ⊗Z −X ⊗Z ⊗Z), as an X flip now changes whether a CZ operator will be applied on the other qubits, resulting in 4x more operators to track after the single CCZ. (The CZ operator matrix is simply equal to 1/4 [I ⊗I +Z ⊗I +I ⊗Z −Z ⊗Z]). This causes not only operator spreading, but als-
o so-called operator entanglement [91]. As we apply additional non-Clifford gates, the number of operators to track will grow exponentially, and eventually will become computationally intractable. E.g. state-of-the-art Clifford + T simulators can handle roughly 16 CCZ gates [49]. This is the basis behind our complex sampling circuits, where the 48 CCZs on the 48 logical qubits create a high degree of scrambling and magic (defined below), rendering Clifford + T simulation impractical.
[[8,3,2]] circuit implementation Here we provide additional detail about our [[8,3,2]] circuit implementations. The [[8,3,2]] code blocks are initialized in the |−L, +L, −L⟩ state with the circuit in ED Fig. 6, which can be understood as preparing two 4-qubit GHZ states (corresponding to [[4,2,2]] codes [92]), i.e. GHZ1Z,3,5,7 GHZ2X,4,6,8, and subsequently entangling them as illustrated in ED Fig. 6a (as well as applying Z gates). In our circuit implementations, for system sizes of 3 to 24 logical-
 qubits both for sampling and two-copy measurements, we prepare 8 blocks encoded over 64 physical qubits. For the 48 logical qubit circuit (128 physical qubits total) we encode 8 blocks and entangle them, and then drop them into storage; then, we pick up 64 new physical qubits from storage, encode them into 8 blocks in the entangling zone and entangle them. Finally, we bring the original 8 blocks from storage and entangle them with the second group of 8 blocks in the entangling zone (ED Fig. 6) (s-
ee Supplementary Movie).
The transversal gate set of the [[8,3,2]] code is enabled as follows (see also Refs. [16, 17, 26, 27]). The transversal CNOT between blocks immediately follows from the fact that the [[8,3,2]] code is a CSS code. In-block CZ gates between two logical qubits Li and Lj (CZLi,Lj) can be realized by S, S† gates on the face corresponding to logical qubit Lk. For example, consider applying the pattern of S, S† gates to the top face in Fig. 5, i.e., S1S3†S5†S7, which transforms XL1 = X1X2X3X4 to XL′ 1 = -
−Y1X2Y3X4, which is equal to XL′ 1 = XL1ZL2, and the same applies to give XL′ 2 = XL2ZL1; i.e., a CZ is realized between logical qubits 1 and 2. This procedure can also be used to understand why the pattern of T , T † realizes a CCZ between the three encoded qubits. CCZ gates should map XL3 to XL3 ⊗ CZL1,L2. By applying the pattern of T , T † in Fig. 5a, each X face maps to itself mul-

20

tiplied by a pattern of S, S†, e.g. XL3 = X1X3X5X7 maps to XL′ 3 = XL3S1S3†S5†S7, or then XL′ 3 = XL3 ⊗ CZL2,L3. This happens for all three XL faces, thereby realizing a CCZ gate. Finally we detail the permutation CNOT, which was also developed in Ref. [27]. Physically permuting atoms to swap qubits 4 ↔ 8 and 3 ↔ 7 takes XL1 = X1X2X3X4 to XL′ 1 = X1X2X7X8 or instead XL′ 1 = XL1XL2 (also by multiplying the global X stabilizer), and similarly it can be seen by tracking the qubit permutations that ZL-
′ 2 = ZL2ZL1, i.e. realizing a CNOT. Finally, although these 3D codes do not have a transversal H, as they are CSS codes they can be initialized and measured in either the X or Z basis, effectively allowing H gates at the beginning or end of the circuit.
In-block logical entangling gates are applied block-byblock, and any in-block gate combination can be realized. For conceptual simplicity we apply only two particular local Raman patterns in layers. The first is the gate combination CCZL1,L2,L3 · CZL1,L2 · CZL1,L3 · CZL2,L3 · ZL1 · ZL2 · ZL3 , given by applying T † on the entire physical qubit block, and the second gate combination we apply is CCZL1,L2,L3 · CZL2,L3 · CZL1,L3 · ZL3, given by applying T on the top row and T † on the bottom row. In o-
ur circuits we alternate layers of in-block transversal entangling gates and out-block transversal CNOTs, entangling logical blocks on up to 4D hypercubes (see ED Fig. 6) [19, 93, 94]. We keep the control and target qubits the same throughout the circuit for conceptual simplicity, allowing the local physical H gates on the target qubits to be compiled with the in-block gate layers, but the control-target direction can also be chosen arbitrarily. We ensure that in-block logical entangling gates are-
 applied such that they do not trivially commute through and cancel with earlier entangling gate applications. As an experimental note, we note that for the Clifford states realized in the other parts of this work, stabilizers take on values of either +1 or -1 (due to, e.g., use of physical π/2 rotations instead of H), which is then simply re-defined in software. Since for our [[8,3,2]] circuits we implement non-Cliffords on the physical level, it is important to ensure all stabilizers are initial-
ized and maintained as +1; e.g., if a Z stabilizer is -1, then the logical CCZ implementation sends the X stabilizer expectation value to 0. This can be understood as a physical X√ on a single site transforming to a superposition (X + Y )/ 2 by physical T ’s, going into an equal superposition of X stabilizer being +1 and -1.
Classically hard circuits with [[8,3,2]] codes Our implemented circuits are equivalent to Instantaneous Quantum Polynomial (IQP) circuits [95], which gives a theoretical basis for understanding why our circuits could in principle be classically hard to simulate, for which we also provide numerical evidence of so-called anticoncentration [96, 97]. IQP circuits are defined as initializing |+⟩⊗n on n qubits, applying a diagonal entangling unitary such as those composed by {CCZ, CZ, Z}, and then measu-
ring in the X-basis [20, 95]. A uniform superposition of 2n bitstrings is created, the diagonal gates apply -1 signs in a complicated fashion to the exponentially many bit strings, and then “undoing the superposition” with the final H before measurement now results in an intricate “speckle” interference pattern [18]. Sampling from the output distribution of this speckle pattern can be done efficiently on a quantum device that implements the circuit, but is exponentially costly on a classical devic-
e for certain choices of IQP circuits [20]. The transversal gate-set of the [[8, 3, 2]] code, as described above, contains diagonal gates {CCZ, CZ,

Z} that apply -1 signs to the bitstrings, but is made nondiagonal by the application of CNOTs, which permute bitstrings. Since this bitstring permutation does not break the IQP framework, these circuits are equivalent to an effective IQP circuit, but which is significantly more complex: e.g., circuits with 48 CCZs and 96 CNOTs map to effective IQP circuits with roughly 1000 CCZ gates. Nevertheless, since IQP circuits are a well-understood framework we can discuss our circuit properties with this t-
oolset.
We experimentally probe these circuits with the XEB [18], defined as XEB = 2NL Σip(xiL)q(xiL) − 1, where NL is the number of logical qubits, q(xiL) is the measured probability distribution for our logical qubits and p(xiL) is the calculated probability distribution; here, we normalize the XEB by its ideal value such that the XEB for the noiseless circuit is 1. In typical cases, if noise overwhelms the circuit, the measured distribution will be uniform [18], and the measured XEB will be 0.
The IQP circuits are a good setting for quantumadvantage-type experiments, as the bitstring distribution of IQP circuits with randomly applied {CCZ, CZ, Z} gates (random degree-3 polynomials) is known to be classically hard to simulate [20, 98]. In Ref. [99], we show that the ensemble of random hypercube IQP circuits (hIQP), whose instances are experimentally explored here, converges to the uniform IQP ensemble as the depth and size of the hypercube is increased. In ED Fig. 8a, we show that hIQP c-
ircuits with random inblock operations and randomized control-targets on the outblock CNOT layers (realizing the hypercube) anti-concentrate quickly as the dimension of the hypercube is increased, with XEB eventually reaching the uniform-IQP value of 2. We also find that the presence of non-Clifford CCZ gates, which are critical for the computational hardness here, further improves anti-concentration properties, as we observe the ideal XEB of experimental circuits approach 2 as well, even without -
much randomization.
Moreover, XEB turns out to be a better benchmark for IQP circuits than for generic random circuit sampling settings (such as Haar-random circuits) [100–102]. For IQP, XEB is close to the many-body fidelity and the difference can be theoretically bounded under reasonable noise assumptions [99]. Intuitively, this fact is related to the diagonal structure of the IQP circuits, which allows XEB to capture errors in a manner closer to fidelity, despite being defined only in the computational basis. In o-
ther words, a Z error will always corrupt the X basis measurement, and an X error (except one immediately before measurement) will create new Z errors that also corrupt the X basis measurement. Thus, in the fully postselected regime, where errors at the end of the circuit are well-described by logical errors, we expect the XEB to be a good measure of fidelity. We further note that, in addition to the efficient generation of complex IQP circuits here, the [[8,3,2]] gate set presented here can reali-
ze arbitrary IQP circuits composed of {CCZ, CZ, Z} gates [103]. The in-block {CCZ, CZ, Z} operations can be applied to any groupings of qubits by noting that combining the in-block and out-block CNOTs allow us to compose arbitrary transversal SWAP operations of targeted individual logical qubits between different blocks.
Simulation of bitstring probabilities To calculate the logical bitstring probabilities necessary for evaluating XEB and benchmarking our circuits, we employ a hybrid simulation approach combining wavefunction and

21

tensor-network [104] methods. It works best only when performing all of the entangling gates of the hypercube a single time, and relies on the fact that the final round of CNOTs is immediately followed by a measurement, simplifying network contraction. Concretely, for a D-dimensional logical hypercube, the two subsystems consisting of 2D−1 blocks are simulated independently and then the final layer of CNOTs and in-block operations is combined with the measurement outcomes (the bitstring of interes-
t), which results in a contraction of two 82D−1 tensors (see ED Fig. 8b). This is a square-root reduction in the memory requirement compared to the full wavefunction simulation which uses O(82D ) space. The ideal XEB value is calculated by sampling bitstrings from the ideal output distribution and then averaging the corresponding probabilities. The bitstrings are sampled using a marginal sampling algorithm, which utilizes the same contraction scheme described above.
We next consider if the finite XEB scores in this problem can be easily “spoofed” by foregoing exact simulation of the implemented circuit and using a classical algorithm with fewer resources, similar in spirit to the algorithm introduced in Ref. [100]. For the circuits studied in Fig. 5 of the main text, containing only a single layer of gates on the hypercube, there is only a single round of CNOTs connecting the two 2D−1-block partitions; thus, removing them from the circuit and sampling from th-
e two independent halves might not decrease the XEB substantially while reducing the memory requirement to 82D−2 . In ED Fig. 8c, we study the performance of this spoofing attack and find that the obtained XEB rapidly decreases, once additional gate layers are introduced, for a particular extension of our circuit.
The contraction scheme above, utilized both for the ideal simulation and the XEB spoofing, scales exponentially with the number of qubits. However, the exponent is significantly reduced, by utilizing the fact that the hypercube circuits can be naturally partitioned into smaller blocks, with only a single inter-partition layer of CNOT’s at the end of the circuit. This simulation method therefore becomes less efficient if we introduce additional CNOT layers (within a single partition) after the inte-
r-partition layer, as we estimate in Fig. 5d. Applying l = {0, ..., D−1} additional intra-partition CNOT layers forces the CNOT tensors in ED Fig. 8b to be blocked into groups of 2l, which results in the execution time to scale roughly as O(82l /2l), where the numerator comes from the tensor contraction complexity and the denominator accounts for the reduced number of contractions due to blocking. The explicit times quoted in Fig. 5d as a function of additional CNOT layers are based on the above m-
atrix-multiplication estimate and fitted such that the depth-1 hypercube time matches 1.44 s, which corresponds to our implementation. In practice, the actual run-times might differ due to hardware and software optimization, and additional factors such as the cost of tensor permutations; however, we expect the general trend to hold. Finally, if the 2l blocked tensors were to be stored directly, the memory requirement of this approach would grow as 82l+1 , recovering the full 82D memory complexity -
for l = D − 1.
In this work, we use these circuits and XEB results for benchmarking our logical encoding, which requires the ability to simulate these circuits. Future logical algorithm experimentation can explore quantum-advantage [18, 47, 105– 107] tests with encoded qubits, as will be detailed in Ref. [99].

Physical qubit circuit implementations To compare our logical qubit algorithms with analogous circuits on physical qubits, we work out a concrete implementation of our sampling / scrambling circuits on physical qubits using the same physical gate set, Clifford + T , as used in the logical circuit, which we also then attempt to realize experimentally. We replace each [[8,3,2]] block with a 3-physicalqubit block, decomposing the “in-block” CCZ gates into 6 CNOTs and 7 {T ,T †} gates, and implement “-
transversal” CNOTs directly between the 3-qubit blocks. We note that the CZ can be compiled into the CCZ implementation, but this has minor effect on our analysis and estimates. These physical circuits are complex: 48 qubits with 48 CCZs and 228 two-qubit gates (as realized with our logical qubits) decomposes into an effective 516 two-qubit gates (384 if the CZ gates are compiled into the CCZs). In trying to implement these circuits in practice, the build-up of coherent errors resulted in a vanish-
ing XEB for our physical circuits. These experiments made it clear the logical circuit equivalent was greatly outperforming the physical circuit, thereby providing direct evidence that our logical algorithm outperforms our physical algorithm for this specific sampling circuit.
More quantitatively, with a concrete physical implementation, we calculate an upper-bound by assuming optimistic performance. We assume our best-measured fidelities: SPAM of 99.4% [8], local single-qubit gate fidelity of 99.91% (ED Fig. 2), two-qubit gate fidelity of 99.55% [8], and T2 = 2s. We then count the total number of entangling gate pulses for the CZ gates, the total number of compiled local single-qubit gates, and the estimated circuit duration, and use this to calculate the estimate pres-
ented in Fig. 5f. We further confirm this analysis for small-scale circuit implementations. For a short 3-qubit circuit, we benchmark the XEB for the physical circuit as ≈ 0.87, below the estimated 3-qubit upper-bound of ≈ 0.92. We note that in Fig. 5f we plot estimates of physical qubit fidelity and not XEB, but we expect XEB and fidelity to be closely related as discussed previously.
We note several observations made in comparing physical and logical implementations of these complex circuits. First, empirically it appears that the logical circuit is significantly more tolerant to coherent errors [48, 108, 109], and understanding the manifestations of this is a subject of ongoing investigation. Specifically, it appears that the logical circuit realizes inherently digital operation, where the small coherent errors do not significantly shift / distort the bitstring distribution, -
but just reduce the overall fidelity [48, 108] (see e.g. the agreement in ED Fig. 7a). This is in contrast to the physical implementation, where coherent errors are seen to dramatically alter the shape of the bitstring distribution, e.g. changing relative amplitudes. Second, we note that we optimize our [[8,3,2]] circuits only by optimizing the stabilizer expectation values and not by optimizing the XEB or two-copy result directly. When running complex circuits, the stabilizers serve as useful int-
ermediate fidelity benchmarks, both for optimizing circuit design and ensuring proper execution, especially in regimes where output distributions or other observables cannot be calculated. Overall, we find that these complex circuits appear to perform significantly better with logical qubits than physical qubits.
Two-copy measurements A powerful method to extract various quantities of interest are Bell basis measurements between two copies of the same state [21, 22, 51]. First, we use these measurements to cal-

22

culate the purity or entanglement entropy of the resulting state [7, 21, 51, 110, 111]. Measuring the occurrences of the singlet state |01⟩√−|10⟩ (|11⟩ outcome for our measurements af-
2
ter applying the final pair-wise entangling operations) probes the eigenvalue of the SWAP operator sˆi at a given pair of sites i. This is in turn related to the purity of the state by observing that Tr[ρ2A] = Tr[Πi∈AsˆiρA ⊗ ρA] for any subsystem A. Thus, the average purity can be estimated by the average parity Tr[ρ2A] = ⟨(−1)#observed singlets⟩ within A, and thus also the second-order Renyi entanglement entropy S2(A) = − log2 Tr[ρ2A].
The entanglement entropy calculation only involves the singlet outcomes. By making use of the full outcome distribution, we can also evaluate the absolute value of all 4N Pauli strings, from a single data set, where N is the number of qubits involved in each copy of the state [22]. More concretely, consider a given Pauli string O = i Pi, where Pi ∈ {Xi, Yi, Zi, Ii} are individual Pauli operators on site i (and the identity), and a given observed bit string {⃗a,⃗b}, where ⃗a, ⃗b label the outcomes -
in the control and target copy. The rules of reconstructing the Pauli strings through these Bell basis bit strings can be worked out through considering the computational states that the Bell states are mapped to and considering which operators of XX, Y Y, ZZ have +1 or -1 eigenvalue for the various Bell states. We explicitly list the analysis procedure: for Pauli term Xi, we assign parity +1 if ai = 0 and −1 otherwise; for Pauli term Yi, we assign parity +1 if ai ̸= bi and −1 otherwise; for Pauli-
 term Zi, we assign parity +1 if bi = 0 and −1 otherwise; for Ii we assign parity +1 always. The contribution of the bit string {⃗a,⃗b} to |tr(Oρ)|2 is then given by the product of the individual parities.
We can perform the same analysis as a function of the amount of error detection applied. As shown in ED Fig. 9a, as more error detection is applied, the distribution of Pauli expectation values that are expected to be zero and nonzero separate apart further. This also provides a natural method to perform error mitigation via zero noise extrapolation: by performing sliding-scale error detection, we can extract the Pauli expectation value squared for groups of Pauli strings with the same expected va-
lue, as a function of the logical purity. We perform a linear fit of the Pauli expectation value squared vs. the logical purity, and extrapolate to purity tr(ρ2) = 1, corresponding to the case of zero noise, to estimate the errormitigated values. The choice of a linear fit is motivated by the fact that both |tr(Oρ)|2 and |tr(ρ2)| scale with power 2 of the density matrix. We expect that more detailed considerations of the noise model, using knowledge about the weight of each operator, as well as wh-
ether detected errors in each shot overlap with a given Pauli operator, can further improve the error mitigation results.
We can also compute measures of distance from stabilizer states, also known as “magic”, using the additive Bell magic measure in Ref. [52], which only requires O(1) number of samples and O(N ) classical post-processing time. To do so, we randomly sample subsets of 4 measured Bell basis bit strings r, r′, q, q′ and calculate their contribution to the Bell magic using the check-commute method of Ref. [52]: B = r,r′,q,q′ P (r)P (r′) P (q)P (q′) ∥[σr⊕r′ , σq⊕q′ ]∥∞, with
∈{0,1}2N
∥m[σurt⊕e ra′ ,nσdq⊕2 qo′t]∥h∞ erwbiesien.gr0⊕wrh′ ednentohteestwboitwPiasueliXsOtrRinbgsetwcoementhe two bitstrings. P (r) is the probability of observing bit-

string r. The Pauli string σr is of length N , and the ith element is I, X, Z, Y when the target and control qubit at site i read 00, 01, 10, 11, respectively. We convert this result to additive Bell magic via the formula Ba = − log2(1−B). We use approximately 107 samples to estimate the additive Bell magic for each dataset. The results for the estimated additive Bell magic as a function of the number of non-Clifford gates applied (circuits shown in ED Fig. 9f) are shown in Fig. 6c. These results -
additionally leverage the purity estimates in the same dataset, which is used for error mitigation as described in Eq. (13-15) of Ref. [52]. All additive Bell magic data shown is with full error detection applied.
The same experiments we perform here can also be interpreted as a physical Bell basis measurement. Using this insight, in ED Fig. 9c,d, we show the entanglement entropy for different subsystem sizes, when analyzing the data as physical Bell pair measurements, and applying different levels of stabilizer-based postselection. Interestingly, the full-system parity when postselecting on all stabilizers being correct is identical when analyzing the outcomes as either a physical or logical circuit. This -
is because in this limit, the results of the physical circuit analysis can be viewed as taking the (imperfect) logical state and running a perfect encoding circuit, hence giving identical results.
Data Availability The data that supports the findings of this study are available from the corresponding author on request.
Acknowledgements We thank A. Kubica for pointing us to the connection between our transversal gate set and IQP circuits, J. Campo, S. Haney, T. Wong, T. T. Wang, P. Stroganov, and especially J. Amato-Grill for contributions in the development of the FPGA technology and fast CMOS readout. We gratefully acknowledge useful discussions with B. Braverman, H. Briegel, S. Cantu, S. Choi, J. Cong, M. Devoret, H.-Y. Huang, A. Keesling, H. Levine, A. Lukin, K. V. Kirk, N. Meister, H. Pichler, H. Poulsen, J.-
 Ramette, J. Sinclair, D. Tan and all members of the Lukin group. We acknowledge financial support from the DARPA ONISQ program (grant number W911NF2010021), the US Department of Energy (DOE Quantum Systems Accelerator Center, contract number 7568717 and DE-SC0021013), the Center for Ultracold Atoms (an NSF Physics Frontier Center), the National Science Foundation, the Army Research Office MURI (grant number W911NF-20-1-0082), the Army Research Office (award number W911NF2320219), and QuEra Comput-
ing. D.B. acknowledges support from the NSF Graduate Research Fellowship Program (grant DGE1745303) and The Fannie and John Hertz Foundation. S.J.E. acknowledges support from the National Defense Science and Engineering Graduate (NDSEG) fellowship. T.M. acknowledges support from the Harvard Quantum Initiative Postdoctoral Fellowship in Science and Engineering. M.C. acknowledges support from Department of Energy Computational Science Graduate Fellowship under Award Number DE-SC0020347. D.H. acknowl-
edges support from the US Department of Defense through a QuICS Hartree fellowship. J.P.B.A. acknowledges support from the Generation Q G2 fellowship and the Ramsay Centre for Western Civilisation. N.M. acknowledges support by the Department of Energy Computational Science Graduate Fellowship under award number DE-SC0021110. I.C. acknowledges support from the Alfred Spector and Rhonda Kost Fellowship of the

23
Hertz Foundation, the Paul and Daisy Soros Fellowship, and NDSEG. M.J.G. and D.H. acknowledge support from NSF QLCI (award No. OMA-2120757). The commercial equipment used in this work does not reflect endorsement by NIST.
Author contributions D.B., S.J.E, A.A.G., S.H.L., H.Z., T.M., S.E., and G.S. contributed to the building of the experimental setup, performed the measurements, and analyzed the data. M.C., M.K., D.H., J.P.B.A., N.M., I.C., and X.G. performed theoretical analysis. P.S.R. and T.K. developed the FPGA electronics. All work was supervised by M.J.G., M.G., V.V., and M.D.L. All authors contributed to the logical processor vision, discussed the results, and contributed to the manuscript.
Competing interests: M.G., V.V., M.D.L. are co-founders and shareholders and H.Z., P.S.R., T.K. are employees of QuEra Computing.
Correspondence and requests for materials should be addressed to M.D.L.

a

b

d

CMOS camera

Local

53S1/2

r Rydberg state

Entangling zone

FPGA Imaging

1013-nm

imaging

Rydberg beam beam

Rydberg 1013 nm

35 um

420-nm

objective

6P3/2

Rydberg beam

Vacuum chamber

Atoms

Dichroic

PBS

Global Raman beam

Rydberg 420 nm

20 um

Storage zone

Trapping

5P3/2

2D local Raman AOD

objective

Dichroic

5P1/2

Local imaging 780 nm
Raman

100 um

PBS

Static SLM traps

795 nm

2D Moving AOD traps

5S1/2
6.8 GHz

1 Hyperfine qubit
0 T2 > 1s

c

xy

xy switch

Global Local 6.8 GHz AOM AOM signal

420-nm AOM

1013-nm AOD SLM

AOM

traps traps

TTL TTL

20 um 30 um

Readout zone

Raman AOD AWG Rearrangement Moving AWG AWG (FIFO)

Raman AWG

Rydberg AWG & TTL generator

24

80 total parallel gate sites (up to 160 qubits in parallel)

2 um

10 um

2-6 um

230 um

Extended Data Fig. 1. Neutral atom quantum computer architecture. a, Experimental layout, featuring optical tools including static SLM and 2D moving AOD traps, global and local Raman single-qubit laser beams, 420-nm and 1013-nm Rydberg beams, and imaging system for both global and local imaging. b, Level structure for 87Rb atoms, with the relevant atomic transitions employed in this work. c, Control infrastructure used for programming quantum circuits, featuring several arbitrary waveform generato-
rs (AWGs). In particular, the moving and Raman 2D AODs are each controlled by two waveforms (one for x axis and one for y axis). An additional AWG is used in first-in-first-out (FIFO) mode for rearrangement before the circuit begins, and then the moving AOD control is switched to the Moving AWG. See Ref. [30] for additional SLM and pre-circuit rearrangement details, Ref. [8] for additional Rydberg AWG details and Rydberg excitation details, Refs. [7, 62] for additional Raman laser and microwave co-
ntrol infrastructure details, and Ref. [7] for additional moving AWG details. All AWGs (other than rearrangement AWG) are synchronized to < 10 ns jitter. During Rydberg gates the traps are briefly pulsed off by a TTL. The FPGA processes images from the camera real-time and in this work sends control signals to the Raman 2D AOD for local single-qubit control. d, Example array layout featuring entangling, storage, and readout zones. Zones can be directly reprogrammed and repositioned for different a-
pplications, as well as specific tweezer site locations. Tweezer beams and local Raman control are projected from out-of-plane. The entire objective field-of-view is 400-µm diameter, and consequently we do not expect or observe substantial tweezer deformation near the edges of our processor. During two-qubit Rydberg gates, we place atoms ≲ 2 µm apart within a gate site, and gate sites are separated such that atoms in different gate sites are no closer than 10 µm during the gate. At our present n =-
 53 and two-photon Rabi frequency of 4.6 MHz, the blockade radius is roughly 4.3 µm, such that adjacent atoms are well-within blockade and distant atoms are well-outside blockade.

25

a F =2
5S1/2 F =1

X Raman

Z Raman

γB/2π = 24 MHz

Z Raman
2 MHz

d
0 C1 Z(π/2) C2 Z(π/2)

Z(π/2) Cf

0 C1 Z(π/2) C2 Z(π/2) Z(π/2) Cf

Y(-π/2)

Y(π)

b Global Raman

Local Raman

Z(π/2) Z(π/2)

Y(-π/2) 5µs 3µs 5µs
Z(π/2) Z(π/2)

Return probability

AOD waveform
Row 1 Row 2 Non-addressed site Addressed site

Row n-1 Row n
1 2 3 4

Number of local gates Cn = Random global Clifford
Z(π/2) = Local gate

c

AOD deflection

efficiency

correction

Calibrate y position of
rows

Calibrate x position of each site

Calibrate tone power at each
site

iterate
1

Fitted power scale factor

0 1

Qubit state

0 1

0 1

0

Tone vertical displacement

3.2 µm

Iteration number

Extended Data Fig. 2. Single-qubit Raman addressing. a, 5S1/2 hyperfine level diagram illustrating the two possible implementations of local single-qubit gates: resonant X(θ) (purple) and off-resonant Z(θ) (turquoise) rotations with twophoton Rabi frequencies ΩRaman. In this work, we use the Z rotation√scheme and are blue-detuned by 2 MHz from the two-photon resonance. Due to Clebsch-Gordan coefficients, ΩZRaman = − 3ΩZRaman. b, Schematic showing the conversion of local Z(π/2) into local X(±π/2) g-
ates, where the pulses before (after) the central Y (π) have positive (negative) sign, while leaving non-addressed qubit states unchanged. The Gaussian-smoothed local pulses have duration 2.5 µs for π/4 pulses and 5 µs for π/2 pulses, and are performed on single rows at a time with a 3 µs gap between subsequent gates to allow the RF tones in the AODs to be changed (including this, duration is 5-8 µs per row). In this way, arbitrary patterns of qubits, such as the example drawn, can be addressed. c-
, Calibration procedure used to homogenize the Rabi frequency over a 220 µm × 35 µm array. The position calibration is illustrated for 80 sites: approximate X(π/2) gates are locally performed and the horizontal/vertical position of all tones is scanned in parallel such that a Gaussian fit returns the optimal alignment. After this, powers are iteratively calibrated until the fitted scale factors for the individual RF tones converge to unity. d, Single-qubit randomized benchmarking of local Z(π/2) g-
ates. The local gates are interleaved with random global single-qubit Clifford gates and the final operation Cf is chosen to return to the initial state. Each data point is the average of 100 random sets of Clifford gates, and fitting an exponential decay to the return probability quantifies the fidelity F per local gate. Note that we apply all 51 global Clifford gates for each data point, such that errors from the global Clifford gates (in addition to SPAM errors) do not contribute to the fitted -
value.

26

a Single-shot 500us image

b

Ancilla qubits

5P3/2

e

780 nm

Data qubits e

Trap light shift

5S1/2

g

g

Camera exposure
Local imaging
Ancilla qubit trap depth

200 ns 300 ns
5x depth

500-us exposure 400 ns
300 ns

Data qubit trap depth

2x depth

c
Camera

FPGA

Conditional TTL AOD
Local Raman feedforward

L

Atom detection

1L
Logical state decoding

d

Local

pushout

FPGA

Conditional

decoding local Raman

Local imaging

Camera readout

Data qubit Perr Data qubit Perr Data qubit Perr
Data qubit Perr (XY8)

0

100

Time (us)

600

h Characterization after long local imaging exposure

e
0.8
0.6
0.4
0.2
0.0 0

f 1.0
0.8

20-ms exposure

g
0.7 0.6

20-ms exposure

Exposure used = 500 us

5

10 15 20

Exposure time (ms)

0.6

0.4

0.2

0.0

-50

0

50

100

Relative detuning (MHz)

0.5 0.4

0.3 0.2

10

20

30

Data qubit trap light shift (MHz)

900

0.05 0.04

0.034(5)% per 500us error rate

0.03

0.02

0.01

0 No local Long (10.5 ms) beam local illumination

Extended Data Fig. 3. Midcircuit readout and feedforward. a, Single-shot 500 µs local image in the readout zone, where the peak corresponds to roughly 50 photons collected by the CMOS camera. b, Atomic transition and pulse sequence used for local imaging of ancilla qubits. The data qubit trap light shift suppresses data qubit errors, in addition to the large spatial separation between entangling and readout zones. We avoid quickly losing the readout zone atoms during local imaging by using a 5x hi-
gher trap depth, and we pulse the ancilla qubit traps and local imaging light to image directly on resonance while avoiding negative effects of large trap light shifts. c, Diagram of components involved in midcircuit readout and feedforward steps. Atom detection and logical state decoding occur using the FPGA, which then outputs a conditional TTL to gate local Raman pulses performed on logical qubits in the entangling zone. d, Diagram of approximate timings for a midcircuit feedforward cycle. Firs-
t, F = 2 population is pushed out (in 10 µs), and then the remaining F = 1 population is imaged locally for 500 µs. The 24 rows of pixels covering the readout zone are read out to the FPGA in 200 µs, after which processing is performed. Finally, a conditional TTL output based on the decoded state gates on or off local Raman pulses. The whole readout and feedforward cycle takes less than 1 ms, and can be sped up in the future by optimizing local imaging and camera readout. e-g, Characterization of -
error probability of data qubits during local imaging. e, Data qubit error probability (fraction of population depumped from F = 2 to F = 1) as a function of local imaging duration out to 20 ms to quantify the effect of the local imaging beam on data qubit coherence for very long illumination. f, Data qubit error probability after 20 ms of local imaging, as a function of detuning of the local imaging beam, showing suppression of error both red- or blue-detuned from the data qubit transition. g, Eq-
uivalently, increasing the trap depth of the data qubits enables suppression of decoherence due to the local imaging beam. Since qubits in the readout zone are imaged while their traps are pulsed off, any light shift of the data qubit transition from the traps contributes directly to the relative detuning. h, For a long 10.5 ms local beam illumination with optimal local imaging parameters, we observe a 0.7(1)% increase in data qubit error during an XY8 dynamical decoupling sequence. This suggests -
a roughly 0.034(5)% error probability for the data qubits during the 500 µs midcircuit readout image employed in this work.

27

a

Z stabilizer
ZZ

X stabilizer
XX

ZL
Z

b

+L

ZZ

XX

X/Z

Z

Z

L

X/Z

X X X XZ X X X XL
Z

d = 7

Z Z

c
Stabilizers in other logical block
48

XX basis

Data Ancilla X stab. Z stab.

Stabilizer correlations (data)

0.20

48

ZZ basis

Transversal CNOT and physical error propagation

X

X

X

Z

Z

Z

d

Number of physical qubits per Bell pair

26

74

146

0.20

0.5

Logical Bell pair infidelity upper bound

Logical 2

Logical 2

0.15

0.15

0.4

Stabilizer index

Covariance Covariance

Logical 1

24

0.10

0.05

1

0.00

1

24

48

Logical 1

Logical 2

Stabilizer index

e

X basis logical 1

Data Theory 1
0

Logical 1

24

0.10

0.05

1

0.00

1

24

48

Logical 1

Logical 2

Z basis logical 1

0.3 0.14 0.12
0.1 3

Conventional decoding Correlated decoding

Infidelity upper bound

5

7

Surface code distance d

Probability Stabilizer = +1

X basis logical 2

Z basis logical 2

f
0.11 0.09 0.07
0.05

Data Theory

Logical Bell pair error

0.03 3

5

7

9

11

13

Surface code distance d

Extended Data Fig. 4. Additional surface code data. a, Depiction of Bell state circuit and d = 7 surface codes. b, Diagram showing the transversal CNOT and physical error propagation rules. c, Covariance of the 48 measured stabilizers in both bases. The correlations near the diagonal corresponds to adjacent stabilizers within each block. Strong correlations are also observed with the stabilizers of the other block due to the error propagation in the transversal CNOT. d, Bell pair infidelity upper -
bound (as opposed to estimated Bell pair error in Fig. 2d of Main Text, see Methods text), showing improvement with increasing code distance. e, Probability of no detected error for each of the 96 measured stabilizers, showing agreement when compared to the theoretical values from empirically chosen error rates (experiment average = 77%, theory average = 82%). Note that X basis logical 1 and Z basis logical 2 have higher stabilizer error probability due to the error propagation in the transversal -
CNOT (reducing expectation values relative to if the transversal CNOT is not performed). f, Using the empirical error rates that correspond to data-theory agreement for the measured stabilizers in e, our simulations for improvement in Bell pair error, as a function of code distance, are in good agreement with experiments. The empirical error rates used are consistent with the 99.3% two-qubit gate fidelity, measured for this larger array, as well as the roughly 4% data qubit decoherence error (inte-
grated over the entire circuit and measured by Ramsey method). These dephasing error rates are dominated by a complex moving sequence as we prepare the two surface codes in a serial fashion (see Supplementary Movie), and would be significantly smaller for a repetitive error correction experiment.

Probability Stabilizer = +1 Logical Bell pair error Logical Bell pair error

a Data X basis logical 1
1 0
X basis logical 2

Z basis logical 1 Z basis logical 2

b
0.4 0.3
0.2

28

c

Number of physical qubits per Bell pair

26

74

146

0x inter-logical 0.6

0.4

0.2

0.18

0.5x inter-logical

0.14

Optimizing decoder (inter-logical scaling)

0.1

0.11

1x inter-logical

0.1

0.09

3

5

7

Surface code distance d

No ancilla

0.07

With ancilla

3

5

7

Surface code distance d

Extended Data Fig. 5. Surface code preparation and decoding data. a, Surface code stabilizers for the two independent d = 7 codes following state preparation. The entire movement circuit corresponding to the transversal CNOT is implemented, and the transversal entangling gate pulse is simply turned off. The mean stabilizer probability of success across the 96 total stabilizers is 83%. The high probability of stabilizer success of the two independent codes in both the X and Z bases shows that topol-
ogical surface codes were prepared (and ED Fig. 4 shows that they were preserved during the transversal CNOT). We note that physical fidelities were slightly lower during this measurement due to calibration drift and so these results slightly underestimate performance relative to the data in Fig. 2 and ED Fig. 4. b, Logical Bell pair error while optimizing the decoder by (inversely) scaling the weights of the inter-logical edges and hyperedges that connect the stabilizers of the two logical qubits-
 (higher values correspond to lower pairing weights). More concretely, the probability p of the error mechanism corresponding to the inter-logical edges / hyperedges is scaled and the weights are calculated as log((1 − p)/p). Qualitatively, optimizing this scaling value optimizes with respect to the probability that errors are before or after the transversal CNOT, as errors before the CNOT will lead to correlations between the two logical qubits, corresponding to the inter-logical edges. As the de-
coder is optimized by tuning the inter-logical scaling factor, the performance for all three code distances improves, and the larger code distances improve faster when approaching the optimal decoding configuration, as expected. This data is consistent with the decoder being properly optimized for all three code distances, consistent with the fact that our improvement with code size does not originate from suboptimal decoder performance for low distance. Note the y-axis is log-scale. c, Logical Be-
ll pair error when using (black) and not using (gray) the ancilla stabilizer measurement values, as a function of the scaling of the inter-logical edges and hyperedges that connect the stabilizers of the two logical qubits. The ancilla measurements contribute to the correction procedure, and contribute more for smaller values of the inter-logical scaling as they correspond to errors that happen before the transversal CNOT. 0x inter-logical scaling corresponds to conventional decoding within the tw-
o independent surface codes. For the 1x inter-logical scaling plotted here, the d = 7 inter-logical scaling parameter is chosen slightly different than in Fig. 2d in order to have consistency across the three code distances (which produces measured values within errorbars).

29

a

b

Global T†

1

A

GHZ1Z357 GHZ2X468

1

H

L1

L3

L2

2

A

B

3

A

B

3

4

A

5

H

7

H

2

4

H

6

Z

A

CCZ-CZL1,L2-CZL2,L3-CZL1,L3 -ZL1-ZL2-ZL3

5 6

Local control:

A A

B

Z

Z

7

A

=

Z

8

A

B

Z

8

B CCZ-CZL2,L3-CZL1,L3-ZL3

9

A

B

Encoded state:

L1

Local control:

10

A

11

A

=

L3

L2

Z 12

A

B

13

A

= T = T†

14

A

B

15

A

B

16

A

c
1. Encode group 1

2. Transversal CNOT 1 on group 1

3. Transversal CNOT 2 on group 1

A

A

A

A

A

A

A

A

B

A

B

A

B

A

B

A

4. Transversal CNOT 3 on group 1

H

B

H

B

H

H

B

H

H

H

B

H

B

H

H

H

B

H

H

B

H

B

H

H

5. Swap groups and encode group 2

6. Transversal CNOT 1 on group 2

7. Transversal CNOT 2 on group 2

8. Transversal CNOT 3 on group 2

9. Transversal CNOT 4 between groups 10. Readout

Entangling zone Storage zone

Extended Data Fig. 6. [[8,3,2]] and hypercube encoding. a, State preparation circuit for the [[8,3,2]] code, in which two 4-qubit GHZ states are simultaneously prepared and subsequently entangled. This initializes an [[8,3,2]] code with logical states |−L1, +L2, −L3⟩. b, 4D hypercube circuit performed on 48 logical qubits (128 physical qubits). The circuit is drawn on the block-level, where each block consists of 3 logical qubits and 8 physical qubits. The first in-block gate layer is performed wi-
th a global T †. The local gate patterns, and the corresponding logical gates they execute within each code block, are illustrated in the inset. c, Diagram illustrating the code block movements and use of the processor’s zoned architecture throughout the circuit. Initially, eight [[8,3,2]] code blocks are prepared in the entangling zone and atoms for later state preparation of eight additional code blocks are loaded in the storage zone. The code blocks in the entangling zone are then picked up and-
 interlaced with adjacent blocks to perform three transversal CNOT layers. The two groups of eight code blocks are then swapped and the same procedure is repeated with the second group of code blocks. The first group of code blocks are then moved back into the entangling zone and interleaved with the atoms of the first group to perform a final parallel transversal CNOT. The layers of CNOT gates connect the code blocks such that a 4D hypercube on 16 blocks of [[8,3,2]] codes is constructed. See als-
o Supplementary Movie.

30
Extended Data Fig. 7. Additional [[8,3,2]] circuit sampling data. a, Overlap of error-detected 12-qubit sampling data with the theoretical distribution (same data as fully error-detected case in Fig. 5b). Progressive zoom-in’s show the agreement between theory and experiment, down to the level of 10−4 probability per bit string. This error-detected data set is composed of 23,545 shots (raw data set is 138,626 shots). Note that we simultaneously measure on two groups of 12 logical qubits; plotted h-
ere is only one of the two 12-logical groups with an XEB of 0.69(1), while in plots Figs. 5e,f and ED Fig. 7b we average the two logical groups, which gives a measured XEB of 0.616(7). b, Same data as Fig. 5f of Main Text but with purity (orange), as measured by two-copy measurement, additionally plotted. The measured XEB is slightly below the measured purity, providing evidence that XEB is a faithful fidelity proxy. We further note that under error detection, the logical XEB for these IQP circuit-
s should be a good fidelity proxy. Interestingly, the behavior can be different for the raw, uncorrected data, as the circuit we apply on the physical level is not IQP. Without applying error detection, not all errors are logical errors and therefore the circuit differs from IQP behavior and can lend itself to a different scaling. For systems of 3, 6, and 12 logical qubits, multiple systems are measured in parallel and their results are averaged together. We note that although our preparation of [-
[8,3,2]] code states makes these states on a cube, it does not have CNOTs between two pairs of qubits in the first step and, therefore, does not have the full gate connectivity of a cube. Instead, one can interpret these CNOTs as having been included but then compiled away as they commute with the state. We neglect this in plotting our physical qubit connectivity, which is derived from entangling 3D cubes on a 4D hypercube connectivity, realizing a 7D hypercube. c, 48-qubit XEB sliding-scale error-
-detection data. The point with full postselection on all stabilizers being perfect returned only 8 samples, so we omit this point from the Main Text plot for clarity.

31

a 8
6

b Circuits used in experiment Random hypercube

Ideal XEB

4

2

1

2

3

4

5

Hypercube dimension

Subsystem 2

Subsystem 1

Subsystem 1 Subsystem 2 Spoofed XEB

1 0 0 1
=
0 0 1 0

Non-unitary tensor

1

0

0

0

0

1

1

0

Tensor contraction

c

10 0

10 −1

0

1

2

Additional CNOT layers

Extended Data Fig. 8. Theoretical exploration of hypercube IQP circuits. a, Anti-concentration property of our circuits. The circuit is said to be anti-concentrated if its output distribution is spread almost uniformly amongst all outcomes, without the probability being concentrated on a subset of bitstrings. This property is crucial for many proofs of classical hardness [20, 97] and, thus, it is desired for our sampling circuits to anti-conconcentrate. The plot shows that the output distribution -
of random hypercube circuits (randomized in-block operations and randomized control/target in out-block CNOT layers) anti-concentrates as the dimension of the hypercube is increased and the XEB (which captures the output collision probability) converges to the uniform-IQP value of 2 (here using Clifford circuits; i.e., circuits comprised of random CZ and Z only) [20]. This suggests that sampling from the ideal output distribution can be classically hard. In general, the hypercube IQP circuit ensem-
ble converges to the uniform IQP ensemble in total variation distance as the depth and hypercube dimension are increased [99]. The specific circuit instances implemented in experiment also anticoncentrate quickly with increasing hypercube dimension. b, A single layer of the hypercube circuit admits an efficient tensor-network contraction scheme, which allows us to evaluate the ideal and experimental XEB values. The final out-block CNOT layer is immediately followed by the measurement, which can be-
 incorporated into a non-unitary tensor that is contracted between the two halves of the system (controls and targets of the final CNOT layer). This contraction scheme reduces the memory requirements to half the system size, which enables bitstring amplitude evaluation for the 48-qubit experiment. This simulation approach can be made significantly more expensive by applying additional out-block operations within the two subsystems, forcing the blocking of the intra-partition tensors, which increas-
es the memory and runtime requirements (Fig. 5d). c, To understand the effects of finite XEB on required classical simulation time, we explore if our circuit families can be “spoofed” with cheaper, approximate simulation that achieves moderately high XEB scores [100], studied here for a 24-qubit system with full state-vector simulation. The spoofing algorithm works by independently sampling from the two halves of the system (two groups of 12 qubits), effectively removing the final layer of CNOTs. -
This further reduces the simulation complexity, as each of the halves can, in principle, be independently simulated with the efficient approach from b. The plot shows that the spoofed XEB for the 24-qubit non-Clifford circuit can be exponentially reduced by extending the circuit with additional gate layers (similarly to the approach used to decrease the performance of the efficient hypercube contraction), for a particular extension of our circuit. This result shows that future work can consider ad-
ding additional CNOT layers into these circuits to demonstrate quantum advantage (in the presence of finite experimental noise).

32

a

b

1000

0.16

0.14

0.12

0.10

0.08

0.06

0.04

0.02

-0.10 -0.05 |Tr(Pρ0).|020 0.05 0.10
c

0.00

8 10

0

2

4Thres6hold

d

8 16x2 physical qubits

6

Frequency Signal-to-noise ratio (SNR)

Subsytem size 1 100
Subsystem size 12 10

1

10-2

10-1

100

Accepted fraction

32x2 physical qubits

15

noise floor

4

10

Increasing error detection Physical Entanglement Entropy

Physical Entanglement Entropy

2

5

Logical Entanglement Entropy

0 0

e

12

10

8

6

5

10

Subsystem Size

3 6 Logical system size 12

15 f

0 0

10

20

30

Subsystem Size

4 2

0

0

2

4

6

8

10 12

Subsystem Size

Extended Data Fig. 9. Additional Bell basis measurement results. a, Histogram of |tr(P ρ)|2 for all 46 Pauli strings P in the 6 logical qubit circuit, as a function of stabilizer postselection threshold (i.e. number of correct stabilizers across the 6x2 logical qubits). Blue (red) indicate Pauli strings that are expected to have |tr(P ρ)|2 = 0.0625 (0). The separation between the histograms improves as more postselection is applied. b, Signal-to-noise (purity divided by statistical uncertainty of -
purity) as a function of sliding-scale error detection (converted into accepted fraction), for the 12 logical qubit two-copy measurements, where subsystem size 1 indicates a single logical qubit in one copy, and subsystem size 12 indicates all logical qubits. For subsystem size 1, the signal-to-noise ratio gets worse as data is discarded, since the signal does not change (maximally mixed) but the number of repetitions decreases. In contrast, for the global purity, the signal-to-noise increases as -
near-unity purities are faster to measure [111]. c,d, Entanglement entropy when analyzing the circuit as a physical Bell basis measurement as opposed to a logical Bell basis measurement. For logical entanglement entropy calculations we average over all possible subsystems of that given subsystem size, which we find behaves very similarly to e.g. contiguous subsystems due to the highdimensional hypercube connectivity. In the physical qubit entanglement entropy calculations, we randomly choose from -
the possible subsystems as there are many. c, 6 logical (16 physical) qubits per copy; d, 12 logical (32 physical) qubits per copy. The finite sampling imposes a noise floor for very high entanglement entropy values. e, Entanglement entropy measurements, as in Fig. 6b of main text, but as a function of logical subsystem size. f, Logical circuits used for benchmarking magic. For 1 CCZ, we include U1 and omit U0; for 2 CCZ, we include U0 and omit U1; for the 3 CCZ, we include both U0 and U1.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:14.604Z
- **Text Length:** 161158 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
