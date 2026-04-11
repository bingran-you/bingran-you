# PDF Document: Wang et al. - 2025 - Scalable photonic quantum technologies.pdf

**File Path:** Wang et al. - 2025 - Scalable photonic quantum technologies.pdf

**Processed Date:** 2026-02-10T18:15:44.559Z

**File Size:** 3463.50 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 260

**Title:** Scalable photonic quantum technologies

**Collection:** Integrated Photonics > Fundamental

---

## Extracted Text Content

Nature Materials
nature materials
Review article https://doi.org/10.1038/s41563-025-02306-7
Scalable photonic quantum technologies
Hui Wang 1,2,3,7, Timothy C. Ralph 4,7, Jelmer J. Renema5, Chao-Yang Lu 1,2,3,6 & Jian-Wei Pan 1,2,3
Photonic quantum technologies are now progressing from demonstrations of fundamental phenomena to systems of sufficient scale and quality to enable practical applications with quantum advantage in communications, computation and metrology. Here we review recent advances in quantum optics that have led to the emergence of such scalable quantum technologies, and outline the road ahead to more general applications with greater potential impact. We first focus on the components that support various ph-
otonic quantum applications, including quantum light sources, linear-optical networks and detectors. We go on to discuss recent experimental demonstrations of quantum communication, quantum computation and simulation, and quantum metrology using photons. Finally, an overview is provided on the manner in which photons fit within both the opportunities and challenges of implementing space-to-ground quantum internet, universal quantum computing and quantum precision measurement.
Quantum technologies exploit the peculiar properties of quantum mechanical systems, and our ability is growing to control and tailor these properties, to produce enhanced and completely novel capabilities in communications, computation and metrology1. In recent years we have gone from proof-of-principle demonstrations to scalable versions with real-world applications. In this Review we will focus specifically on photonic technologies2 (operating at optical frequencies) and look at the progress mad-
e and emerging challenges as the systems become more sophisticated. Owing to the mobility of photons, photonic quantum technologies are the obvious choice for quantum communication applications3, although they are typically married with matter systems to enable memory and other local operations4. In quantum computing5, photonic technologies are one of several possible platforms being developed6, although even for matter-based architectures an optical interface seems essential for communication bet-
ween quantum processors and with databases7. For metrology8, it clearly depends on the application, with situations in which classical optical probes that represent
state-of-the-art in precision are arguably the most likely to benefit from photonic quantum technologies. We will use scalable to mean something that is a little different for each broad application type. For quantum communications, scalable systems are ones that can be operated at high rates, extended to large distances and can be networked without loss of fidelity. That is, given a useful level of fidelity over a short, point-to-point link, scalability means being able to increase the distance a-
nd number of users arbitrarily whilst maintaining the same fidelity. For quantum metrology applications, scalable means the ability to incorporate the quantum enhancement alongside all of the other classical techniques that are used to achieve high precision in state-of-the-art sensors. Finally, for quantum computation systems, scalable means the ability to increase the number of quantum bits (qubits) to large numbers whilst maintaining their coherence and the ability to precisely control them, an-
d the interactions between them, to a level that is consistent with the implementation of fault-tolerant error correction.
Received: 12 March 2024
Accepted: 27 June 2025
Published online: xx xx xxxx
Check for updates
1Hefei National Research Center for Physical Sciences at the Microscale and School of Physical Sciences, University of Science and Technology of China, Hefei, China. 2CAS Center for Excellence in Quantum Information and Quantum Physics, University of Science and Technology of China, Hefei, China. 3Hefei National Laboratory, University of Science and Technology of China, Hefei, China. 4Centre for Quantum Computation and Communication Technology, School of Mathematics and Physics, University of Quee-
nsland, Brisbane, Queensland, Australia. 5Adaptive Quantum Optics Group, Mesa+ Institute for Nanotechnology, University of Twente, Enschede, Netherlands. 6New Cornerstone Science Laboratory, Shenzhen, China. 7These authors contributed equally: Hui Wang, Timothy C. Ralph. e-mail: cylu@ustc.edu.cn; pan@ustc.edu.cn

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
Next we will discuss state-of-the-art implementations—the new capabilities they have demonstrated and their remaining limitations. We will then look towards the future, concentrating especially on the prospects for large-scale quantum computation and the quantum internet.
Components
In this section we look at the various component ideas, techniques and technologies that support photonic quantum protocols and applications.
Quantum light sources
What are the requirements for quantum light sources to be useful and have high performance in quantum information tasks? For dual-rail encoding (or indeed single-rail or parity encodings (Box 1)), we require single-photon sources that are of high purity (that is, the source is a single-photon Fock state, with a vanishing multiphoton probability)
Many of the early demonstrations of quantum information and quantum metrology protocols and components have been via quantum optical systems. Examples include the demonstrations of entanglement9, quantum key distribution (QKD)10, quantum enhancement in interferometry11, quantum teleportation12,13, quantum logic gates14, quantum algorithms15, quantum error correction16 and entanglement distillation17. These initial, mostly proof-of-principle, demonstrations have been discussed in several previous r-
eviews18–20. Our emphasis here will be on more recent breakthroughs in overcoming roadblocks to scalability and surveying the road ahead. We now outline the structure of our review. First we will discuss the components of photonic quantum technology systems, from the various different methods through which quantum information can be encoded on quantum optical systems (Box 1) via the different techniques for producing quantum light sources, to manipulating and controlling them in quantum circuits t-
o the various detection options.
BOX 1
Encoding photonic qubits
Single-rail encoding. In this code, the vacuum state |0⟩ and the one-photon Fock state |1⟩ represent the logical ‘zero’ state (|0⟩ ≡ |0⟩L)
and the logical ‘one’ state (|1⟩ ≡ |1⟩L), respectively, in the form of:
|φ⟩ = μ|0⟩ + ν|1⟩, (1)
where φ is the quantum state, and μ and ν are probability amplitudes. It has the disadvantages that: (1) a bit-flip operation is difficult, requiring a strong optical nonlinearity or probabilistic operations158; and (2) it is more susceptible to loss. One advantage is that entangled states can be produced using a simple beamsplitter18.
Dual-rail encoding. The most popular photonic encoding is where a single photon is shared between two modes. The occupation of the first (second) mode represents the logical zero (one) state, |1〉1|0〉2≡|0〉L (|0〉1|1〉2≡|1〉L). Thus, a qubit takes the form:
|φ⟩ = μ|1⟩1|0⟩2 + ν|0⟩1|1⟩2. (2)
This can be manifested in the path, polarization, time, frequency and orbital angular momentum of single photons and so on. It has the major advantages that: (1) all single-qubit operations can be carried out deterministically using linear optics elements; and (2) loss events can be easily filtered out. The main general disadvantage of dual-rail encoding is that entangling operations between qubits are non-deterministic16.
Parity encoding. The parity code16,158 is usually used in conjunction with dual-rail encoding. It uses two nm modes to represent the zero logical state via |+(m)〉⊗n ≡ |0〉L and the logical one state via |−(m)〉⊗n ≡ |1〉L, where n and m are two positive integers, and
|±(m)⟩ = 1/√2((|1⟩1|0⟩2)⊗m ± (|0⟩1|1⟩2)⊗m). For example, if n=2 and m = 1, we have the four-mode encoding for a qubit:
|φ⟩ = 1
2 (μ (|1⟩1|0⟩2 + |0⟩1|1⟩2) (|1⟩3|0⟩4 + |0⟩3|1⟩4)
+ ν(|1⟩1|0⟩2 − |0⟩1|1⟩2)(|1⟩3|0⟩4 − |0⟩3|1⟩4) ) . (3)
The advantage of this code is that loss errors can be corrected and entangling operations can be made more deterministic via teleportation protocols16. The cost is that multi-mode qubits are less stable and harder to construct.
Squeezed states. The squeezed state |α,Δ〉 is a Gaussian state20 with a mean complex amplitude α. Quadrature measurements of the state can read out the real (q) or imaginary (p) parts of α, with a variance of Δ2 and 1/Δ2, respectively. Continuous-variable quantum information can be encoded on the q and p quadratures. The average photon number in a squeezed state is |α|2+sinh2r, where r=lnΔ. In general, continuous-variable entanglement can be produced by sending squeezed states through beamsplitters-
. A disadvantage of continuous-variable entanglement is that it is only maximized in the unphysical limit of infinite energy.
Cat states. Cat-state encoding is to assign the logical zero (one) to a coherent state of amplitude α (−α) with |α〉≡|0〉L (|−α〉≡|1〉L). A qubit then takes the form:
|φ⟩ = μ|α⟩ + ν| − α⟩. (4)
Such encodings have advantages in terms of the resources needed for entangling operations159 and have a natural resilience to certain types of error, which can be increased by going to superpositions with more coherent state components160. The disadvantages are a greater difficulty in: (1) producing the fundamental superposition states; (2) implementing single-qubit operations; and (3) the fact that diagonal basis measurements require photon counting of multiphoton modes.
GKP states: Physical Gottesman–Kitaev–Preskill (GKP) states131 are superpositions of squeezed states, equally spaced along the q axis with a separation of √2π. The amplitudes of the components decay as we move away from zero. Specifically we can write the GKP logical states as:
|φμ⟩ = N
∞
∑
n=−∞
e− π
2 Δ2 (2n+μ)2
D (√ π
2 (2n + μ)√1 − Δ4) |Δ⟩, (5)
where D is a displacement operator, N is a normalization factor and |Δ〉 is a squeezed state with squeezed variance Δ2. The value of μ determines the logical state, that is, |ψ0〉≡|0〉L is the logical zero state and |ψ1〉≡|1〉L is the logical one state. The major advantage of GKP states is that all Clifford operations can be carried out using linear (Gaussian) transformations that are ‘easy’ to implement in optics. This also means that error correction is straightforward. The major disadvantage of GKP -
states is in the difficulty of producing the logical state.

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
and have a high count rate. The single photons should also be mutually indistinguishable, and be delivered with high efficiency (which includes the generation, extraction and collection efficiencies). There are a number of quantum emitters from nonlinear optics21, atomic systems22 and solid-state systems23 (Fig. 1). Among these, spontaneous parametric down-conversion (SPDC), which utilizes various nonlinear materials such as beta-barium borate, periodically poled potassium titanyl phosphate or per-
iodically poled lithium niobate, has been the workhorse for photonic quantum technologies. In the past two decades, ultrafast laser-pumped SPDC (Fig. 1a) has been used to produce entangled photon sources, where the entanglement fidelity, collection efficiency and indistinguishability between independent photons are simultaneously engineered to be close to unity. Figure 1e summarizes the improvement in two of these key parameters—the collection efficiency and indistinguishability—over the years. Ea-
rly SPDC experiments typically used passive narrowband spectral filtering24 to eliminate the spectral correlation of the photon pairs, which sacrificed the brightness and efficiency. To overcome such an indistinguishability-efficiency trade-off, it is necessary to develop frequency-uncorrelated photon pairs in a pure quantum state25. Beam-like SPDC, as shown in Fig. 1a, where the photon pairs are
created in the form of two separate Gaussian-like beams, was developed to enhance the collection efficiency24,26. An optimal SPDC entangled photon source was demonstrated in 2018 by combining the techniques of frequency-uncorrelated and beam-like SPDC27, which was further used to create 12-photon entanglement. Efforts to simultaneously combine high indistinguishability and efficiency have also been made in spontaneous four-wave mixing in integrated photonics systems (Fig. 1b). As shown in Fig. 1e,-
 the on-chip single-photon heralding efficiency increased from 5% in 201428 to 91% in 202029 with the photon indistinguishability at a level of ∼96%, by engineering the emission of spectrally pure photon pairs. With further engineering of the individual sources and reducing optical loss, the integrated photonic system has the potential to be scaled to large arrays of identical quantum light sources on-chip. The remaining intrinsic problem of the probabilistic photon-pair emission can be overcome u-
sing active time30 or spatial multiplexing31 (Fig. 1c), transforming it into quasi-deterministic single-photon sources. A scalable implementation relies on a near-optimal photon-pair source, fast and low-loss switches and suitable optical memories. Since the proposals in 2002 and proof-of-principle demonstrations, recent years have witnessed a net enhancement in efficiency,
–4 –2 0 2 4
Top mirror Gaussian beam NA = 0.28
z VH
QD Vg
Bottom mirror xyz nano-positioner
ac d
Pulsed laser
BBO HWP BBO Spatial
compensation
b
Temporal
compensation
x (μm)
(x,y)
ef g
2007 2010 2013 2016 2019 2022
0
0.2
0.4
0.6
0.8
1.0 Unentangled
Entangled On-chip
Heralding efficiency
Year
I = 0.95
I = 0.94
I = 0.82
I = 0.91
I = 0.96
I = 0.96
I = 0.91
ref. 25
ref. 154
ref. 27
ref. 29
ref. 28
ref. 24
ref. 153
2014 2016 2018 2020 2022 2024 2026
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7 Quantum dots
Rydberg ensembles NV centres Single atoms
End-user efficiency
Year
I = 0.9
g2(0) = 0.31, I = 0.9
g2(0) = 0.009, I = 0.97
g2(0) = 0.027, I = 0.94
g2(0) = 0.02, I = 0.97
I ≈ 0.98
ref. 36
ref. 141
ref. 35
ref. 92
ref. 91
ref. 120
g2(0) = 0.02, I = 0.99 ref. 37
2011 2013 2015 2017 2019 2021 2023
10–3
10–2
10–1
100
Effective efficiency
Year
g2(0) = 0.269, I = 0.92
g2(0) = 0.088, I = 0.90
g2(0) = 0.007, I = 0.91
g2(0) ≈ 0.5
g2(0) = 0.48
g2(0) = 0.2, I = 0.91
g2(0) = 0.07, I = 0.89
ref. 156
ref. 32
ref. 157
ref. 155
ref. 48
Pump laser
Extinguish
Single-photon output
Multiplexed single-photon source
Fig. 1 | Summary of single-photon sources. a,b, Illustrations showing the sources for beam-like SPDC (a) and on-chip four-wave mixing (b). BBO, beta-barium borate; HWP, half-wave plate; MC, mode converter; BS, beamsplitter; MM, multimode. c, Schematic showing how to use multiplexing technology to improve single-photon efficiency based on SPDC. d, Single emitter (here, an InAs/GaAs quantum dot (QD)) coupled with a tunable and polarized cavity to boost both the single-photon efficiency and indisting-
uishability. NA, numerical aperture; H, horizontal mode; V, vertical mode; Vg, gate voltage. e, The development of heralded single-photon sources from entangled (cyan circles)24,27 or unentangled (red squares)25,153,154 photon pairs with bulk optics, and on-chip photon pairs (blue triangles)28,29. The heralding efficiency quantifies the probability of signalling the presence of a single photon while detecting another single photon from a photon pair. The state-of-the-art heralding efficiency of bu-
lk optics27 (integrated optics29) is 95% (91%) with an indistinguishability (I) of 96% (96%). The indistinguishability quantifies the spectral overlap of single photons and is
usually measured with a standard Hong–Ou–Mandel interferometer. Error bars represent one standard deviation, derived from Poissonian counting statistics of the raw detection events. f, Number of multiplexed single-photon sources realized via spatial155, temporal32,156 or frequency49,157 multiplexing methods. The effective efficiency refers to the probability of detecting a single photon at a certain time after multiplexing. g2(0), second-order autocorrelation function at zero delay. g, Summary of -
solid-state single-photon sources from self-assembled semiconductor quantum dots (red circles)35–37,141, Rydberg ensembles (blue hexagons)93, single atoms (orange triangles)120 and NV centres (cyan squares) in diamond92. Here, end-user efficiency is the probability of obtaining a single photon from its emission to final detection. NV centres, nitrogen-vacancy centres. Panels reproduced with permission from: a, ref. 24, APS; b, ref. 29 under a Creative Commons license CC BY 4.0; c, ref. 108, AIP; d-
, ref. 33, Springer Nature Limited.

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
as summarized in Fig. 1f. So far, the highest enhancement factor is around ten, yielding an efficiency of ~67% with 90% indistinguishability; however, this is at the cost of the relatively poor g2(0) = 0.269 (ref. 32). Alternatively, one may start from deterministic single-quantum sources. Figure 1g summarizes the development of the single-photon system efficiency and indistinguishability in various systems. One example is semiconductor quantum dots embedded in microcavities33, which have emerged -
as a high-performance single-photon source. High-Purcell-factor and tunable microcavities have been used to funnel the single photons into a single spatial mode (Fig. 1d), enabling generation rates at around gigahertz levels34–37. However, being able to manipulate and detect photons at gigahertz rates still poses a significant challenge. A near-unity purity and indistinguishability of the single-photon sources was achieved via pulsed and resonant excitation34. Polarized microcavities35 were develo-
ped to avoid the photon polarization filtering loss under resonant excitation. So far, a single-photon purity of 0.98, an indistinguishability of 0.98 and a system efficiency of 0.72 have been reported in a single quantum dot deterministically coupled to a tunable open cavity37. An important next challenge is to overcome the inhomogeneity of the self-assembled quantum dots and scale to large arrays of identical quantum dots on-chip23,38,39.
Deterministic entangled photons can be generated by pumping a biexciton in quantum dots or an emitter entangled with emitted photons40. Multiphoton sources of squeezed states are mostly based on the same optical nonlinearity as SPDC but operated at higher intensities and often with the nonlinear crystal in a cavity to enhance the efficiency. Steady progress has been made over the years in increasing the strength and purity of the squeezing both in single- and two-mode
configurations. The current record for the squeezing strength is 15 dB, limited by the 97.5% overall efficiency of the experiment41.
Transforming optical quantum states
We now discuss the different optical platforms used to manipulate optical beams and hence the quantum information carried by them.
Free-space optics. For dual-rail encoding of the quantum information, polarization is typically the encoding of choice given its stability in free space and the availability of high-quality commercial polarization optics. To manipulate the quantum states of individual photons, half- and quarter-wave plates can be used to implement universal single-qubit operations42 (Box 2). To perform gating between different polarization qubits, polarizing and partially polarizing beamsplitters can be deployed t-
o interact with the qubits. A powerful technique is to combine polarizing beam displacers with wave plates to swap polarization modes between different spatial modes, interact them and then put them back whilst maintaining the phase stability14. The combination of a polarization Sagnac interferometer with wave plates has also been used to achieve stable interactions of this kind43. For squeezed-state-type experiments, the phase reference for the quantum states is a classical local oscillator, and -
sophisticated phase-locking techniques typically need to be deployed to ensure that the quantum states and local oscillator are synchronized. Single-rail qubit experiments pose similar phase reference issues, which can be solved via locking techniques or using polarization to maintain a common mode during propagation44. Cat-state experiments are single-rail and thus require the locking techniques of squeezing, but as they are also conditional on the
BOX 2
Quantum computing architectures
Quantum circuit model. An intuitive way of processing information carried by qubits is via the sequential application of transformations of, and interactions between, the qubits. Such transformations and interactions are referred to as quantum gates and, ideally, can be represented by a unitary transformation Uj, such that the processing of some arbitrary initial multi-qubit state |ψi⟩, by a sequence of N quantum gates, leading to some output state |ψo⟩ can be represented by:
|ψo⟩ = ∏N
j=1Uj|ψi⟩. (6)
This is the circuit model and is similar to the way classical computers process information. It turns out that a finite set of single-qubit gates plus an entangling two-qubit gate is universal, for instance, the set {H,T,CNOT}, where H is the Hadamard gate, T represents the π/8 gate and CNOT denotes the controlled-NOT gate. The upper part of panel a shows an H gate and a T gate, which can be implemented in dual-rail polarization encoding by a half-wave plate and a combination of half- and quarter--
wave plates, respectively. The bottom part of panel a shows an illustration of how to generate a Bell state using a CNOT gate. A dual-rail CNOT gate can be implemented non-deterministically with linear optics, photon counting and ancilla photons.
Cluster-state model. A very different way of processing quantum information is via the cluster-state model45. In this technique, a generic entangled state called a cluster state is produced via Ising-type interactions. As illustrated in panel b,
an arbitrary quantum circuit can then be simulated by a particular sequence of parametrized measurements on the cluster state: here, vertical arrows denote the measurement of σx, the circles denote the measurement of σz and the sloping arrows represent the measurement in x–y plane, where σx and σz are Pauli operators. These measurements are, in general, adaptive, in the sense that subsequent measurement parameters depend on previous measurement outcomes. Roughly speaking, an n ×m two-dimensional (-
2D) cluster state can simulate any n qubit circuit with a gate depth of m. From an optics point of view, one attraction of the cluster-state approach is that the cluster can be created and measured ‘on the fly’, such that any particular photon may only need to ‘stay alive’ for a much shorter time than required for an equivalent processing task using a quantum circuit. Given that photons travel fast and are easily lost, this is a useful feature. In addition, powerful error-correction techniques are-
 available in the cluster-state model with greater resilience to imperfections. On the other hand, m times as many qubits need to be produced and measured in a cluster-state protocol versus the equivalent circuit version.
HT
|0 H
|0
|ψ = |00 + |11
ab
Quantum gate
Information flow

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
measurement outcomes they often require sophisticated modematching between the local oscillator and the conditioning signal to realize high fidelity with the target state. Panel b reproduced with permission from ref. 45, APS.
Fibre optics. Terrestrial quantum communication experiments require transmission over long distances, typically with no line of sight, making fibre optics the only viable option. Compatibility with fibre has meant that many quantum light sources have moved to O- and C-band ranges to coincide with the telecom window of optical fibres46. Dual-rail quantum communication systems using polarization are not compatible with fibre as the propagation is generally not polarization-preserving over long dista-
nces. As a result, time-bin encoding is a popular alternative, whereby the two modes used in the encoding are co-propagating temporal modes, typically separated by a few microseconds3,47, a time window that can sustain qubit coherence across extensive fibre distances. Single-rail systems in optical fibres face similar problems for quantum communications in free space because the local oscillator needs to co-propagate with the signal as much as possible to remain in phase. Time-binning may be used -
to solve this problem too48. Additional problems can arise with ultrashort pulses due to dispersion in the fibre. Moreover, intensities need to be limited to avoid nonlinear processes in the fibre which can generate spurious ‘noise’ photons. Some demonstrations of quantum processing and sensor protocols also use fibre optics. Fibre is often used as a delay or buffer to allow feedforward or heralding electronics time to act, or to synchronize quantum states from different sources49. Fibre can also -
be used to delay sequential pulses from a single source to effectively produce multiple synchronized sources. The latter technique has been used to scale up quantum computing demonstrations50.
Integrated optics. In integrated optics, light is guided by waveguides and the optical components of a photonic device are integrated on-chip51,52. Quantum optical gates, universal circuits and small-scale algorithms have been demonstrated in this way51. Dual-rail qubits can be encoded across two spatial modes with the monolithic nature of the chip preserving phase information between the rails. Single-rail and squeezed-state demonstrations have also been performed51. The advantages of this approa-
ch are inherent phase stability and a high component density, which are necessary to implement the complex circuits required for photonic quantum computing. The elementary components in integrated optics that are of note for photonic quantum information processing include: waveguides, beamsplitters, phase shifters, nonlinear elements and fibre-to-chip couplers53. For waveguides, the important variables are the optical losses per unit length and the minimum bending radius of the waveguide, which is-
 in turn set by the mode confinement in the waveguide (Table 1). Arbitrary optical coupling on-chip between pairs of modes can be realized by encapsulating a phase shifter between two 50/50 beamsplitters, thereby constructing a tunable Mach–Zehnder
interferometer. This construction, together with a phase shifter on one of the input or output waveguides, can produce arbitrary linear-optical transformations. Phase shifters can be realized via the thermo-optic effect, the electro-optic effect or the piezo-optic effect. The advantage of the thermo-optic effect is that it operates in any material; the disadvantages are that it is slow compared with the other two tuning methods and the high power output makes it incompatible with cryogenic operati-
on of the chip. The advantage of piezo-optic and electro-optic tuning is speed and low power dissipation. The disadvantage is that the active material must be placed close to the optical mode, making it hard to achieve low excess loss. Many material platforms have been proposed for quantum photonics, including silicon on insulator54, silicon nitride55, (Al)GaAs (ref. 56), silicon carbide57, femtosecond-laser direct-writing in glass58 and lithium niobate59. Table 1 summarizes some of the figures of-
 merit for a few of these platforms. To manipulate quantum states of light, large-scale photonic meshes called quantum photonic processors are constructed. By utilizing a grid of quadratically tunable Mach–Zehnder interferometers, either in a square or a triangular geometry, it is possible to implement arbitrary linear-optical transformations on a larger set of waveguides. The ultrafast electro-optic effect allows new interferometers to be refreshed at gigahertz rate.
Detectors
Photon detectors can be classed into two types of device: those that are able to measure the photon number of the incoming light field (photon-number-resolving detectors (PNRDs)) and those that can resolve only the presence or absence of photons (threshold detectors). By multiplexing multiple threshold detectors to observe the same optical mode, the effect of a PNRD can be partially mimicked. By demultiplexing a stream of single photons into many spatial modes, this enables the detection of photon-
s in the gigahertz regime. Currently, the preferred technology for threshold detection is superconducting nanowire single-photon detectors (SNSPDs)60. These detectors consist of a thin film (typically ~4 nm) of low-electron-density superconducting material, such as niobium nitride, tungsten silicide and so on, which carries a bias current. Photodetection into the thin film is enhanced using an out-of-plane optical cavity61. When a photon is absorbed, the current flow is disrupted, resulting in a v-
oltage pulse which can be amplified and read out. At a wavelength of 1,550 nm, detection efficiencies as high as 98%, with count rates of tens of megahertz reported62, but these will decrease with higher count rates due to the dead time of the detectors. The big advantage of these detectors is their high operating speed (dead time is on the order of a few nanoseconds) and low timing jitter (as low as 3 ps has been reported63). For PNRDs, the main technology of note is the transition-edge sensor (T-
ES)64. A TES works by voltage-biasing a piece of superconducting material in the superconducting transition, essentially operating it as a bolometer. When photons are absorbed, these increase the
Table 1 | Summary of integrated platforms
Material Refractive index
Transmission loss (dBcm−1) χ(2) susceptibilitya (pmV−1) χ(3) susceptibility (pm2V−2) Electro-optical coefficient (pmV−1)
Allowed operation rate (GHz)
SOI 3.5 1.2 0 100 0 
SiO2 1.4 0.12 0 280 0 
SiN 2.0 0.25 0 50 0 
(Al)GaAs 3.4 0.4 180 3,000 1.4 ≥1
LiNbO3 2.2 0.03 27 200 32.4 ≥40
SiC (4H) 2.6 0.2 12 300 0.6 ≥1
aThe second-order susceptibility (χ(2)) values of silicon on insulator (SOI), SiO2 and SiN are usually nonexistent, but with a strong electric field, χ(2) will appear in these materials. All parameters are considered at 1,550nm.

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
temperature and hence the resistance of the piece of superconducting material. Similar to an SNSPD, an out-of-plane optical cavity ensures a high system detection efficiency65. Detection efficiencies as high as 95% have been reported65. The big disadvantage of the TES is its very slow response: due to the entirely thermal nature of the detection mechanism, the dead time is typically in the microsecond regime. It is currently an active research area to integrate these detectors into waveguide-based-
 photonic devices66–68. So far, on-chip SNSPDs have been fabricated on GaAs, Si, SiN and LiNbO3 waveguides. The state-of-the-art waveguide-integrated SNSPD has a detection
efficiency of 91%, a time jitter of 18 ps and a 50 Hz dark count69. Moreover, PNRDs have also been integrated with GaAs, LiNbO3 and SiO2 waveguides, achieving up to 100-photon quasi-PNRD resolution70. Given benefits such as lower loss budgets and simplified scalability, the integration of detectors and other optical components on a single chip is pivotal for the advancement of scalable optical quantum technologies in the future. When multiphoton encodings are used, phase-sensitive measurements of -
the q and p quadratures are often desirable. This typically requires mixing the signal with a strong local oscillator, followed by
BOX 3
Quantum communications and metrology
Quantum communications. Quantum communication embodies a transformative leap in information technology, harnessing the fundamental principles of quantum mechanics to redefine the frontiers of secure data transmission. Two key protocols—QKD and quantum teleportation—are studied in this field. Quantum key distribution. QKD uses quantum phenomena to establish communication channels with theoretically unbreakable security. Many QKD approaches have been developed. Typically, QKD is implemented in prepa-
re-and-measure protocols, leveraging quantum-state superposition. An example is the well-known BB84 protocol71, which involves transmitting photonic qubits encoded in two different bases. Almost every prepare-and-measure protocol has a corresponding, equivalent, entanglement-based protocol72. The unconditional security of prepare-and-measure protocols can be established by analysing the inherent correlations between entangled particles in the equivalent entanglement-based protocol. As well as disc-
rete-variable protocols that are based on photon-number measurements, such as BB84, there are also continuous-variable protocols, which are based on quadrature measurements20. To significantly extend QKD distances, while using weak-coherentstate lasers instead of single photons, decoy-state QKD has been developed75,76. Furthermore, twin-field QKD81 addresses the rate-loss trade-off, facilitating QKD over distances exceeding 1,000km. Quantum satellites enable QKD distances to be extended to more th-
an 1,200km as the loss in free space is significantly smaller than that in fibres98. Ultimately, to scale to arbitrary distances, so-called quantum repeaters89,90 are required, which segment the photonic channel and interconnect all nodes through entanglement swapping with long-lived quantum memory. Quantum teleportation. Quantum teleportation enables the transfer of quantum information from one particle to another, without physical transmission of the particles themselves. To teleport an arbitrar-
y state φ of qubit 1, a Bell-state measurement (BSM) on qubit 1 and qubit 2 from an entangled Einstein–Podolsky–Rosen (EPR) pair is carried out (shown in the image below). By sending the measurement result through a classical channel and another unitary transformation U on qubit 3, the state φ of qubit 1 can be perfectly teleported to qubit 3. Quantum teleportation plays a critical role in quantum communication, quantum computing and quantum networking, demonstrating the profound implications of q-
uantum entanglement for transmitting information securely and efficiently across vast distances. Discrete-variable and continuous-variable versions of teleportation have been developed, depending on whether number or quadrature measurements, respectively, are used to implement the Bell measurement, and these have different advantages and disadvantages depending on the application.
Quantum metrology. In estimating parameters, the error can be reduced by repeating the measurement, whereas it is constrained by the square root of repetitions according to the central limit theorem. With quantum metrology, classical boundaries can be surpassed to achieve exceptional accuracy through the application of quantum techniques such as entanglement, with a quantum limit called the quantum Cramér–Rao bound:
σ2 ≥ 1
mF [ρ] , (7)
where σ is the root-mean-square error of measurement, m is the number of repetitions and F[ρ] denotes the quantum Fisher information of state ρ. The main aim is to find the optimal strategies for minimizing the right-hand side of equation (7). In discrete-variable-based quantum metrology, the use of fixed-number Fock state |N〉 aims to eliminate photon-number noise, a phenomenon known as intensity squeezing. Particularly significant is the case when N=1, defining the single-photon state that is piv-
otal for potentially redefining the international standard unit of luminous intensity, the candela. For entangled states with a fixed number, it has been demonstrated that the N00N state 1/√2(|N0⟩ + |0N⟩) is an optimal solution for phase estimation in an interferometer. Despite this, challenges persist in generating N00N states, impeding their widespread application. Continuous-variable-based quantum metrology capitalizes on squeezed states, a special class of quantum states that reduce uncertaint-
y in one observable while increasing it in its conjugate variable due to Heisenberg’s uncertainty principle. This approach offers the potential to achieve significant improvements in precision in practical scenarios. Figure reproduced with permission from ref. 12, Springer Nature Limited.
Classical
information
ALICE
BOB
EPR source
Teleported state
Entangled pair
Initial
state
BSM
U
12 3

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
photodetection. Unlike photon counters, photodetectors integrate multiple photon events to generate a continuous photocurrent. The technology mirrors telecom systems but prioritizes low electronic noise to resolve quantum noise, and high efficiency to preserve delicate phenomena such as entanglement. For state-of-the-art InGaAs p-i-n (positive intrinsic negative) photodiodes, detection efficiencies of 99.5% at 1,064 nm have been reported and electronic noise floors 28 dB below the vacuum noise lev-
el have been achieved at power values of ~25 mW and sideband frequencies of a few megahertz41. Efficiencies and noise floors are somewhat less than the state-of-the-art under more useful conditions, such as sideband frequencies below a kilohertz (for sensor applications such as gravity wave detectors) or above a gigahertz (for communications applications) or at wavelengths of ~1.5 μm (again for communications), but these are improving steadily.
Demonstrations
This section summarizes the realization of various cutting-edge photonic quantum technologies based on components described in the previous section.
Quantum communication
Typical tasks in quantum communication include QKD71,72, a secure way for distant users to exchange a classical key, and quantum teleportation73, a ‘disembodied’ means of transmitting a quantum state (Box 3). Whereas there have been small-scale demonstrations12,74—two or three decades ago now—the crucial scientific challenge is to make such protocols practical and scale to long distances. Based on telecommunication fibres, point-to-point decoy-state QKD75,76 has achieved distances of up to 421 km -
(ref. 77). Linking point-to-point decoy-state QKD with a trusted relay structure, a 2,000 km quantum communication backbone from Beijing to Shanghai via Jinan and Hefei has been constructed78. On the basis of two-photon interference, measurement-device-independent QKD79 has achieved a fibre distance of 404 km (ref. 80). Exploiting single-rail encoding and single-photon interference, a new protocol, called twin-field QKD81, has surpassed the linear rate-transmittance bound in measurement-device-ind-
ependent QKD. Twin-field QKD has been used to distribute a secure key over a 1,000 km fibre length inside the laboratory82, over a 511 km long-haul fibre trunk that links two distant cities, Jinan and Qingdao83, and over a 254 km commercial telecom network without cryogenic photon detection84. Continuous-variable versions of QKD85,86 using multiphoton Gaussian states and homodyne or heterodyne detection have been demonstrated over distances of up to 200 km in low-loss fibre in the laboratory87. In-
 quantum communications, the qubits cannot be deterministically amplified noiselessly. This is due to the quantum no-cloning theorem88, a double-edged sword that ensures the security of QKD but also limits the range of the QKD. To extend the distances, one solution is quantum repeaters89,90 which use a divide-and-conquer strategy. The basic principle of the first quantum repeater scheme89 is to divide the entire photonic channel into N segments, which are connected through entanglement swapping91,-
 stored in a long-lived quantum memory and purified via local operations17. For extending the distance on the basis of the quantum repeater protocol, recent experiments have created entanglement between two trapped spins in diamond separated by 1.3 km (ref. 92), achieved the atomic-ensemble entanglement of quantum memories separated by 50 km (ref. 93) and demonstrated memory-enhanced quantum communication94 with silicon-vacancy centres in diamond, surpassing the ideal loss-equivalent direct-transm-
ission method. Two-node metropolitan-scale quantum networks also have been demonstrated95–97. A shortcut to global-scale quantum communication is through free space and a satellite. When a photon travels in free space between a satellite and a ground station, most of the photon transmission is
across a near-vacuum environment, with almost no absorption and decoherence. The main loss is caused by beam diffraction, which is approximately proportional to the square of the distance. By contrast, the photon losses in fibre channels are proportional to the exponent of the fibre length. After a decade of ground-based testing, the satellite Micius, dedicated to quantum experiments, was launched in 2016. It enabled space-to-ground decoy-state QKD over a distance of 1,200 km, achieving a final ke-
y rate of a few kilohertz98 (Fig. 2), which was later increased to hundreds of kilohertz78. The satellite-based channel achieved link efficiencies ~20 orders of magnitude higher than direct fibre transmission over the same distance. In addition, Micius sent entangled photon pairs from two onboard telescopes to ground stations 1,200 km apart99. The distributed pairs preserved entanglement, violated Bell inequalities and enabled entanglement-based quantum cryptography100. Beyond downlink transmissio-
n, Micius demonstrated uplink transmission, performing quantum teleportation from a ground station to the satellite over distances of up to 1,400 km (ref. 101).
Quantum computation and simulation
Optics was one of the first physical systems to demonstrate quantum algorithms102–104 and a universal set of quantum gates14, and it continues to be a leading contender as a platform for universal fault-tolerant quantum computation. Key demonstrations of the utility and scalability of photonics platforms have been made in recent years.
Universal quantum computation. Optical quantum computation requires non-Gaussian quantum elements. It has been known since the late 1980s that strong, higher than quadratic, in-line optical nonlinearities were a sufficient non-Gaussian element105. Such nonlinearities were far out of reach at the time, and although significant advances have been made recently they currently remain an extremely challenging solution. Early this century, Knill, Laflamme and Milburn (KLM) suggested an alternative appro-
ach which required only single-photon counting as the non-Gaussian element16. Although this proposal inspired the first demonstrations of small-scale quantum optical circuits and algorithms and subsequent theoretical progress, it soon became clear that scaling up via the original KLM method poses significant challenges.
Dual-rail cluster states. Shortly after the KLM protocol was proposed, it was combined with the cluster-state approach of Raussendorf and Briegel45 by Nielsen106 to enable far more efficient scale-up, and experimental demonstrations soon followed15. It was later shown that the scheme could be made fault-tolerant107, and a powerful time-multiplexed scheme was developed using topological error-correction codes108. Key requirements of the scheme include the probabilistic production of dual-rail clust-
er states and the development of waveguide quantum circuits for their manipulation. There has been a steady development in the performance of programmable quantum circuits, from universal circuits on a silica-on-silicon platform109, to arbitrary two-qubit operations on SOI110 and arbitrary <20-mode devices integrated on SiN thin films111. There has also been significant progress in developing the sources of entangled states that are needed to produce the cluster. The largest dual-rail entangled st-
ate produced so far via SPDC is a 12-qubit Greenberger–Horne–Zeilinger (GHZ) state27. The generation rate for this state was approximately one per hour; however, this can be increased significantly using time-multiplexing techniques as demonstrated in ref. 112, where six-qubit GHZ states were created around 35 times faster. The critical reliance on multiplexing arises from the probabilistic nature of the entangled resource states and the operations that knit them together into large-scale clusters-
. One way to reduce this reliance would be to have deterministic production of the resource states. It was suggested some time ago that this could be achieved using a

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
single-photon emitter113 (Fig. 3a), such as a quantum dot40, where entanglement would first be generated between the emitter and the emitted photon and then transferred to the subsequently emitted photon in an iterative way. This could produce a sequence of emitted photons in a linear cluster or GHZ state (Fig. 3b). A generalization of this approach can produce 2D cluster states114,115. A quantum dot was used to demonstrate this technique, producing three-qubit linear cluster states116, indistingu-
ishable entangled cluster states117 and spin–photon entanglement118. Using a Rydberg ensemble in a cavity as a single emitter enabled the production of a six-qubit GHZ state with higher efficiency119. The highest efficiency, and hence the highest qubit number demonstration of this technique, uses a single trapped rubidium atom in a quantum
electrodynamics cavity120. In this way, up to 12-qubit cluster states or 14-qubit GHZ states can be produced in around a minute. The fusion of two graph states has also been demonstrated121. Furthermore, using the nonlinearity in Fig. 3a, a deterministic CNOT gate122 (Fig. 3c) and GKP states123 (Fig. 3d) have been realized.
Squeezed cluster states. A quite different cluster-state approach was suggested by Menicucci and colleagues124. Here the cluster state can be produced by mixing squeezed states on beamsplitters, and the quantum evolution is induced by continuous-variable measurements of the cluster modes (Fig. 3e). It was subsequently shown that this scheme could also be made fault-tolerant125 and time-multiplexed126. A major
1,400 1,200 1,000 800 600
0
100
200
300
400
500
Sifted key rate QBER
Sifted key rate (kbps)
600 800 1,000 1,200 1,400 Distance (km)
0
0.01
0.02
0.03
0.04
0.05
0.06
QBER
500 600 700 800 900 1,000 1,100 1,200 1,300 1,400 1,500 1,600 1,700 1,800 1,900 2,000 2,100
–400
–350
–300
–250
–200
–150
–100
–50
Link efficiency (dB)
Distance (km)
Satellite to ground (this work)
Via telecommunication fibre
1037
a
b
c
Fig. 2 | Illustration of the experimental set-up and performance of quantum communication. a, Overview of satellite-to-ground QKD. b, The sifted key rate (measured in kilobits per second (kbps)) and the observed quantum bit error rate (QBER) as a function of the physical distance from the satellite to the Nanshan observation station in one orbit. c, Link efficiencies for direct transmission through telecommunication optical fibres (red) and via the satellite-to-ground
approach (blue). The link efficiencies for the latter were calculated by dividing the photon intensity that arrived in front of the detectors at the ground station by that at the output of the satellite’s transmitter. At a distance of 2,000 km, the satellite-to-ground approach (within the satellite coverage time) is more efficient than direct transmission by around 37 orders of magnitude. Panel a adapted with permission from ref. 98, Springer Nature Limited.

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
advantage to this approach is that both the production of the squeezed resource state and the action of the beamsplitters are deterministic. As a result, the time-multiplexing scheme can be implemented efficiently, resulting in the experimental demonstration of very large linear cluster states of over 10,000 modes127. In later work, this approach was generalized to a four squeezer set-up which created a 5 × 1,240-mode square 2D cluster state128. In a simpler scheme using only two squeezed sources -
but two fibre loops and beamsplitters, a 24 × 1,250-mode 2D cluster was created129. Using this system, a reconfigurable three-mode quantum circuit was demonstrated130. The operations are programmable via rapid shifting of the measurement basis of the two homodyne detectors. Unlike dual-rail demonstrations, the entire system operates deterministically and hence is immediately scalable in this sense. The downside of squeezed cluster states is that current demonstrations using Gaussian states and hom-
odyne detection are not universal. In addition, the finite squeezing of the resource states and loss combine to introduce noise to the quantum processing. Thus, in spite of the impressive size of the entangled states that can be produced, effective processing depths are far more limited. One solution to both of these problems is the incorporation of GKP states into the cluster131. These enable universal gates sets to be implemented, and the system discretized to allow a natural encoding of qubits -
and error correction to be implemented. The first optical GKP state has been realized very recently132. Moreover, good-quality cat states have been produced133, which can be good approximations to GKP states in certain regimes.
Boson sampling. As an alternative to a direct path to universal quantum computing, in 2010, Aaronson and Arkhipov proposed boson sampling134—a non-universal form of photonic quantum computing—as an intermediate step. In boson sampling, single photons are fed into a large-scale linear interferometer, and detection takes place in the Fock basis at the output of the interferometer. The computational task is to draw samples from the patterns of detection events at the output of such a device. Since th-
e introduction of this protocol, many modifications to the boson sampling protocol have been proposed. The most significant is Gaussian boson sampling, where the single-photon inputs are replaced by squeezed states135,136. The main motivation behind this modification is the lack of high-efficiency single-photon sources. Experimentally, the implementations of boson sampling have been steadily increasing in size and complexity. Initial demonstrations were limited to a few photons in a handful of mod-
es137–140, but this number has increased rapidly, including implementation using InAs/GaAs quantum dot single-photon sources as opposed to heralded single-photon sources50,141. Four experiments have claimed a quantum advantage using boson sampling, all of which are based on the Gaussian boson sampling variant. These were: first, the photonic quantum computer Jiuzhang 1.0, which sampled up to 76 photons from 100 modes142; then Jiuzhang 2.0, which sampled up to 113 photons from 144 modes143; Jiuzhan-
g 3.0, which scaled up to 255 photons sampled from 1,152 modes144; and Borealis, which sampled up to 219 photons in 216 modes145, albeit at a lower overall efficiency than Jiuzhang 2.0 and 3.0 (see Fig. 4 for more details of Jiuzhang and the Borealis quantum computer).
Y
Y
Z
Photon 1
Photon 5
Electron spin
Output linear cluster state
HHH HHH
p1
p2
ZZ
Z
π
π
π
2 22
↑
ab
c
d
e
κl
κc
0
1
e
gγ
γ
aˆ in
aˆ out
0
++ +
≈ GKP
Set-up:
Resulting graph: Squeezed states EPR states 1D cluster state
2Dclusterstate
Time
OPOA
OPOB
B
1/2 1/4
–1/2
–1
–1/4
A
π/2 τ
τ
Nτ
Nτ
k–1
k+1
k
τ
LOA HDA
HDB
LOB
BS1 BS2
BS2
BS1
BS3
BS3
S D(1) D(N) Rc
Rc
Fig. 3 | Parts of quantum circuits for universal optical quantum computing. a, An (artificial) atom coupled with a cavity provides significant nonlinearity for universal quantum computing. âin and âout denote the optical modes coming into and out of the cavity, respectively. κc (κl), coupling rate between cavity mode and free-space (undesired) mode; γ, emission rate of the atom; |e〉, excited state; g, coupling strength. b–d, From the nonlinearity shown in a, methods to deterministically realize cl-
uster states for the cluster-state model (b), photon–photon
gates (c) and GKP states (d) have been achieved using squeezing S, displacement D and controlled rotation Rc. H, Hadamard gate; Y, Pauli Y; Z, Pauli Z; p1, photon 1; p2, photon 2. e, Circuit to generate 2D continuous-variable cluster states from quantum light sources A and B. OPO, optical parametric oscillator; LO, local oscillator; HD, homodyne detector; τ, time delay; N and k, positive integers. Panels reproduced with permission from: a,d, ref. 123, APS; b, ref. 40, APS; e, ref. 129, AAAS. Panel-
 c adapted with permission from ref. 122, Springer Nature Limited.

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
As boson sampling is a non-universal model of computation, it remains an open problem whether there are any problems of natural interest that can be implemented in it. Many suggestions for boson sampling-based applications have been made, a large fraction of which fail on the crucial but subtle distinction that a boson sampler does not compute the entries of its output probability distribution but merely samples from them.
Quantum metrology
The archetypical quantum metrology application in photonics is phase estimation, whereby a small phase difference between two paths is estimated with improved precision using quantum resources. Typically, the higher precision is achieved by arranging that the light travelling along the two paths is entangled. Two broad approaches are adopted: one is based on discrete measurements and N00N-state entanglement, and the other based on continuous measurements and squeezed-state entanglement (Box 3). In-
 recent years, the development of high-quality, deterministic sources of squeezed light has seen the first demonstrations in which these technologies have been scaled such that a practical advantage under realistic conditions is seen. We highlight two examples here.
Gravitational-wave detection. The basic set-up of a gravitational-wave interferometer is an optical Michelson interferometer in which the aim is to detect a small relative phase shift between the two arms. The interferometer is initially balanced such that when laser light is coupled into one of the inputs, one of the output ports is dark, that is, no light exits due to perfectly destructive interference. When a small phase shift is
induced by a passing gravitational wave, a small amount of light exits the dark port. Measuring the amplitude of this light enables the phase shift to be estimated, and hence the characteristics of the gravitational wave. By looking for correlations between two or more detectors, spurious events can be rejected. Increasing the amplitude of the input light will improve the phase estimate, but for a fixed input power the precision of the estimate is ultimately limited by the quantum noise of the vac-
uum entering the interferometer at the empty input port. Injecting squeezed light at this empty input can increase the quality of the estimate for fixed power. As first shown by Caves in the 1980s146, if the signal power, as given by the variance of the phase fluctuations, is Vp, then the signal-to-noise ratio (SN) given by the measurement at the dark output port is
SN = Vp|α|2
4Vsq ,
where α is the amplitude of the light in the interferometer arms and Vsq < 1 is the variance of the squeezed light that is injected. More squeezing means that Vsq is smaller, whereas no squeezing means that Vsq = 1. Clearly, a significant improvement in the SN can be achieved if Vsq ≪ 1. For this to work, the phase of the squeezed light must be locked to that of the pump light in such a way that the squeezing reduces the phase noise at the output. All of the major gravitational-wave detectors arou-
nd the world have implemented squeezed light injection as a means to improve the precision of their devices further. In particular, both LIGO (Laser Interferometer Gravitational-Wave Observatory) detectors in the United States and Virgo detectors in Italy have done so since 2019147.
50 100 150 200
0
0.01
0.02
0.03
Detection probability
Photon-click number
0.72 W 1.01 W 1.30 W
OPO VBS VBS VBS
τ 6τ 36τ
Demux PNRs
60 80 100 120 140 160 180 200 N
0
0.005
0.010
0.015
0.020
0.025
0.030
0.035
Probability
Ground truth Experiment Squashed Thermal Coherent
160 170180190200 N
103
102
1011
Events
1minute
1hour
1day
10days
1year
10years
10
3 years
10
6 years
10
9years
40 50 60 70 80 90 100 110 120 130
Nc
2.0
2.2
2.4
2.6
2.8
3.0
3.1
2.8
2.5
G
2.2
40 60 80 N
100 120
G
a bc
d ef
TMSS arrays
Output
DM
R
ULE
Phase-locking module
Interferometer
Reference path
Borealis Jiuzhang 2.0
1hour
1day
1year
10
3 years
10
6 years
10
10 years
3.1 × 1010years
Fig. 4 | Quantum computational advantage based on Gaussian boson
sampling. a–f, Experimental implementation of boson sampling demonstrated by the Jiuzhang (a–c) and Borealis (d–f) photonic quantum computers. a, Experimental set-up of Jiuzhang, where phase-stable TMSS (two-mode squeezed states) arrays are injected into an ultralow-loss interferometer and then detected by single-photon detectors. R, reflector; DM, dichroic mirror. b, The measured photon distribution of Jiuzhang 3.0 at different pumping laser powers. The maximum number of photon clicks is 255. c, -
Estimated run time on the classical supercomputer Frontier using the best classical algorithm. The blue area represents the distribution of classical simulation time of Jiuzhang 3.0. The hardest sample, marked with a red star, needed a simulation time of 3.1 × 1010 y. N, number of clicked modes; G, collision parameter. d, Experimental set-up
of Borealis, with time-bin encoding and photon-number-resolving detectors (PNRs). Demux, demultiplexer; VBS, variable beamsplitter. e,f, Measured photon distribution (e) and estimated run time on the best supercomputer of Borealis (f). The inset in e shows the detected events for different numbers of clicked modes N. The red and blue shaded areas in f represent the distribution of classical simulation times for Borealis and Jiuzhang 2.0, respectively, as a function of the collision parameter G and-
 the non-zero experimental outcome Nc. The red and blue stars indicate the estimated simulation time for the hardest sample of Borealis and Jiuzhang 2.0, respectively. Panels reproduced with permission from: a, ref. 142, AAAS; b,c, ref. 144, APS; d–f, ref. 145 under a Creative Commons license CC BY 4.0.

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
In practical devices, factors such as additional noise sources and system loss come into play. Nonetheless, a significant boost in SN can still be achieved. Typical values of loss in the LIGO and Virgo detectors is around 40%, leading to overall increases of the SN by up to a factor of two. Such a gain has led to an increase in the detection frequency of the weakest events—binary neutron star mergers—of between 20 and 50%, and has enabled the observation of numerous other events147,148. The potent-
ial for greater enhancement is demonstrated by the smaller GEO600 device in Germany that has achieved a factor of four increase in SN149.
Nonlinear microscopy. From detecting the signal from cataclysmic collisions of black holes and neutron stars that are millions of light years away, we now turn to imaging the organelles of living cells. The basic set-up considered is that of a coherent Raman microscope150,151 in which input pump photons are scattered through absorption and re-emission by molecules in the sample. The frequency shift between the absorbed pump photon and the re-emitted Raman photon is equivalent to the vibrational fr-
equency of the chemical bond of the molecule. This intrinsically weak, nonlinear process can be resonantly enhanced by introducing coherent light at the Raman frequency, but inevitably the enhancement is limited by the damage threshold of the biological material. Once this power threshold is reached, the SN of the microscope is limited by the vacuum quantum noise at the Raman frequency. State-of-the-art systems have reached this limit. In principle, this limit can be surpassed by introducing ampli-
tude squeezing of the Raman enhancement laser. Achieving such a reduction in quantum noise while maintaining all other aspects of the microscope at state of the art is a significant challenge. Such a demonstration was performed recently152 in the observation of a stimulated Raman signal from yeast cells with a quantum-enhanced nonlinear microscope. By introducing squeezing on the Raman probe, a 35% enhancement of the SN was achieved over a shot-noise-limited device when imaging live yeast cells. W-
ithout the squeezing, achieving the same resolution (via increased power) rapidly resulted in cell death due to optical heating, thus demonstrating the practical utility of this type of quantum imaging.
Outlook
In this Review we have summarized the ubiquitous use of photons in QKD, quantum teleportation, quantum computation and precise measurement. Significant improvements in key components, including the quantum light sources, quantum circuits and single-photon detectors, have enabled substantial progress to be made in the overall performance of photonic quantum technologies. In quantum communication, products already exist for short-range and point-to-point applications. Space-based systems such as Mic-
ius herald better scaling, yet their low Earth orbit limits daily ground coverage to mere ten-minute windows. Addressing this, next-generation quantum networks are taking shape: constellations blending dedicated low-Earth-orbit QKD satellites with high-orbit platforms will provide continuous global coverage. This space-to-ground architecture may pioneer quantum technology’s first commercial breakthrough. Crucially, quantum repeater development will underpin this infrastructure, whereas advanced pl-
atforms could enable groundbreaking applications—from ultraprecise satellite time–frequency transfer to geostationary-Earth-orbit-based optical clocks, paving the way for wide-area optical frequency standards. In the field of optical quantum computing, after demonstrations of the quantum computational advantage, the next natural step is to find possible applications based on noisy intermediate-scale quantum devices and, more challengingly, move to error-corrected quantum computing. For universal q-
uantum computing using photons, in both the quantum circuit and cluster-state models, a major challenge is to overcome photon loss, the most significant error source in photonic
systems. Photon loss occurs markedly in the quantum light sources, optical circuits and switches, and detectors, all of which need further extensive engineering efforts such that the overall photon loss drops below the loss-tolerant threshold. The realization of loss-tolerant encoding and decoding will be an important milestone, not only for quantum computing but also for all-photonic quantum repeaters. Quantum metrology enables optical interferometers and sensors to surpass classical limits. Appl-
ications such as enhanced gravitational-wave detection have been implemented, whereas biological imaging, optical clocks and so on are emerging. Integrated photonic circuits and hybrid quantum systems could further enhance scalability and robustness, whereas quantum-enhanced imaging techniques have the potential for advances in subdiffraction microscopy and low-light diagnostics. Challenges such as photon loss, decoherence and detector inefficiencies should be overcome through improved materials, -
error-correction protocols and adaptive measurement schemes. In the future, photonic quantum metrology could redefine the testing of fundamental constants, navigation systems and medical diagnostics, ultimately building a bridge between quantum physics and real-world metrological demands. Looking ahead, with steady advances in technology, we can envision a large-scale and fully quantum network where our secret information is secured by photon-based QKD, measurement precision is enhanced by entangl-
ed photons and classically intractable problems are solved by quantum computers, and all of these are linked by flying photons and quantum teleportation.
References
1. Dowling, J. P. & Milburn, G. J. Quantum technology: the second quantum revolution. Philos. Trans. A Math. Phys. Eng. Sci. 361, 1655–1674 (2003). 2. O’Brien, J. L., Furusawa, A. & Vučković, J. Photonic quantum technologies. Nat. Photon. 3, 687–695 (2009). 3. Gisin, N. & Thew, R. Quantum communication. Nat. Photon. 1, 165–171 (2007). 4. Sangouard, N., Simon, C., de Riedmatten, H. & Gisin, N. Quantum repeaters based on atomic ensembles and linear optics. Rev. Mod. Phys. 83, 33–80 (2011). 5. Nielse-
n, M. A. & Chuang, I. L. Quantum Computation and Quantum Information (Cambridge Univ. Press, 2000) 6. Ralph, T. C. & Pryde, G. J. Optical quantum computation. Prog. Opt. 54, 209–269 (2010). 7. Kimble, H. J. The quantum internet. Nature 453, 1023–1030 (2008). 8. Giovannetti, V., Lloyd, S. & Maccone, L. Quantum-enhanced measurements: beating the standard quantum limit. Science 306, 1330–1336 (2004). 9. Aspect, A., Grangier, P. & Roger, G. Experimental tests of realistic local theories via Bell’s the-
orem. Phys. Rev. Lett. 47, 460–463 (1981). 10. Bennett, C. H., Bessette, F., Brassard, G., Salvail, L. & Smolin, J. Experimental quantum cryptography. J. Cryptol. 5, 3–28 (1992). 11. Xiao, M., Wu, L.-A. & Kimble, H. J. Precision measurement beyond the shot-noise limit. Phys. Rev. Lett. 59, 278–281 (1987). 12. Bouwmeester, D. et al. Experimental quantum teleportation. Nature 390, 575–579 (1997). 13. Furusawa, A. et al. Unconditional quantum teleportation. Science 282, 706–709 (1998). 14. O’Brien, J-
. L., Pryde, G. J., White, A. G., Ralph, T. C. & Branning, D. Demonstration of an all-optical quantum controlled-not gate. Nature 426, 264–267 (2003). 15. Walther, P. et al. Experimental one-way quantum computing. Nature 434, 169–176 (2005). 16. Knill, E., Laflamme, R. & Milburn, G. J. A scheme for efficient quantum computation with linear optics. Nature 409, 46–52 (2001).

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
17. Pan, J.-W., Gasparoni, S., Ursin, R., Weihs, G. & Zeilinger, A. Experimental entanglement purification of arbitrary unknown states. Nature 423, 417–422 (2003). 18. Kok, P. et al. Linear optical quantum computing with photonic qubits. Rev. Mod. Phys. 79, 135–174 (2007). 19. Pan, J.-W. et al. Multiphoton entanglement and interferometry. Rev. Mod. Phys. 84, 777–838 (2012). 20. Weedbrook, C. et al. Gaussian quantum information. Rev. Mod. Phys. 84, 621–669 (2012). 21. Kwiat, P. G. et al. New high-i-
ntensity source of polarization-entangled photon pairs. Phys. Rev. Lett. 75, 43374341 (1995). 22. Kimble, H. J., Dagenais, M. & Mandel, L. Photon antibunching in resonance fluorescence. Phys. Rev. Lett. 39, 691–695 (1977). 23. Senellart, P., Solomon, G. & White, A. High-performance semiconductor quantum-dot single-photon sources. Nat. Nanotechnol. 12, 1026–1039 (2017). 24. Wang, X.-L. et al. Experimental ten-photon entanglement. Phys. Rev. Lett. 117, 210502 (2016). 25. Mosley, P. J. et al. Heralde-
d generation of ultrafast single photons in pure quantum states. Phys. Rev. Lett. 100, 133601 (2008). 26. Takeuchi, S. Beamlike twin-photon generation by use of type II parametric downconversion. Opt. Lett. 26, 843–845 (2001). 27. Zhong, H.-S. et al. 12-photon entanglement and scalable scattershot boson sampling with optimal entangled-photon pairs from parametric down-conversion. Phys. Rev. Lett. 121, 250505 (2018). 28. Silverstone, J. W. et al. On-chip quantum interference between silicon photon--
pair sources. Nat. Photon. 8, 104–108 (2014). 29. Paesani, S. et al. Near-ideal spontaneous photon sources in silicon quantum photonics. Nat. Commun. 11, 2505 (2020). 30. Pittman, T., Jacobs, B. & Franson, J. Single photons on pseudodemand from stored parametric down-conversion. Phys. Rev. A 66, 042303 (2002). 31. Migdall, A. L., Branning, D. & Castelletto, S. Tailoring single-photon and multiphoton probabilities of a single-photon on-demand source. Phys. Rev. A 66, 053805 (2002). 32. Kaneda, F. &-
 Kwiat, P. G. High-efficiency single-photon generation via large-scale active time multiplexing. Sci. Adv. 5, eaaw8586 (2019). 33. Najer, D. et al. A gated quantum dot strongly coupled to an optical microcavity. Nature 575, 622–627 (2019). 34. He, Y.-M. et al. On-demand semiconductor single-photon source with near-unity indistinguishability. Nat. Nanotechnol. 8, 213–217 (2013). 35. Wang, H. et al. Towards optimal single-photon sources from polarized microcavities. Nat. Photon. 13, 770–775 (2019). -
36. Tomm, N. et al. A bright and fast source of coherent single photons. Nat. Nanotechnol. 16, 399–403 (2021). 37. Ding, X. et al. High-efficiency single-photon source above the loss-tolerant threshold for efficient linear optical quantum computing. Nat. Photon. 19, 387–391 (2025). 38. Lodahl, P., Mahmoodian, S. & Stobbe, S. Interfacing single photons and single quantum dots with photonic nanostructures. Rev. Mod. Phys. 87, 347–400 (2015). 39. Zhai, L. et al. Quantum interference of identical phot-
ons from remote GaAs quantum dots. Nat. Nanotechnol. 17, 829–833 (2022). 40. Lindner, N. H. & Rudolph, T. A photonic cluster state machine gun. Phys. Rev. Lett. 103, 113602 (2009).
41. Vahlbruch, H., Mehmet, M., Danzmann, K. & Schnabel, R. Detection of 15dB squeezed states of light and their application for the absolute calibration of photoelectric quantum efficiency. Phys. Rev. Lett. 117, 110801 (2016).
42. Dodd, J. L., Ralph, T. C. & Milburn, G. J. Experimental requirements for Grover’s algorithm in optical quantum computation. Phys. Rev. A 68, 042328 (2003). 43. Procopio, L. M. et al. Experimental superposition of orders of quantum gates. Nat. Commun. 6, 7913 (2015). 44. Weston, M. M. et al. Quantum channel correction outperforming direct transmission. Nat. Commun. 13, 1832 (2022). 45. Raussendorf, R. & Briegel, H. J. A one-way quantum computer. Phys. Rev. Lett. 86, 5188–5191 (2001). 46. Jin, R-
.-B. et al. Pulsed Sagnac polarization-entangled photon source with a PPKTP crystal at telecom wavelength. Opt. Express 22, 11498–11507 (2014). 47. Marcikic, I. et al. Time-bin entangled qubits for quantum communication created by femtosecond pulses. Phys. Rev. A 66, 062308 (2002). 48. Jouguet, P., Kunz-Jacques, S., Leverrier, A., Grangier, P. & Diamanti, E. Experimental demonstration of long-distance continuous-variable quantum key distribution. Nat. Photon. 7, 378–381 (2013). 49. Xiong, C. et al-
. Active temporal multiplexing of indistinguishable heralded single photons. Nat. Commun. 7, 10853 (2016). 50. Wang, H. et al. Boson sampling with 20 input photons in 60-mode interferometers at 1014 state spaces. Phys. Rev. Lett. 123, 250503 (2019). 51. Wang, J., Sciarrino, F., Laing, A. & Thompson, M. G. Integrated photonic quantum technologies. Nat. Photon. 14, 273–284 (2020). 52. Pelucchi, E. et al. The potential and global outlook of integrated photonics for quantum technologies. Nat. Rev. Phy-
s. 4, 194–208 (2022). 53. Jeffrey, T. & Hull, D. Integrated Photonics (OP-TEC, Univ. Central Florida, 2016) 54. Silverstone, J. W., Bonneau, D., O’Brien, J. L. & Thompson, M. G. Silicon quantum photonics. IEEE J. Sel. Top. Quantum Electron. 22, 390–402 (2016). 55. Roeloffzen, C. G. H. et al. Low-loss Si3N4 TriPleX optical waveguides: technology and applications overview. IEEE J. Sel. Top. Quantum Electron. 24, 4400321 (2018).
56. Dietrich, C. P., Fiore, A., Thompson, M. G., Kamp, M. & Höfling, S. GaAs integrated quantum photonics: towards compact and multi-functional quantum photonic integrated circuits. Laser Photonics Rev. 10, 870–894 (2016). 57. Lukin, D. M., Guidry, M. A. & Vuckovic, J. Integrated quantum photonics with silicon carbide: challenges and prospects. PRX Quantum 1, 020102 (2020). 58. Meany, T. et al. Laser written circuits for quantum photonics. Laser Photonics Rev. 9, 363–384 (2015). 59. Zhu, D. et al.-
 Integrated photonics on thin-film lithium niobate. Adv. Opt. Photonics 13, 242–352 (2021).
60. Gol’tsman, G. N. et al. Picosecond superconducting single-photon optical detector. Appl. Phys. Lett. 79, 705–707 (2001). 61. Rosfjord, K. M. et al. Nanowire single-photon detector with an integrated optical cavity and anti-reflection coating. Opt. Express 14, 527–534 (2001). 62. Reddy, D. V., Nerem, R. R., Nam, S. W., Mirin, R. P. & Verma, V. B. Superconducting nanowire single-photon detectors with 98% system detection efficiency at 1550nm. Optica 7, 1649–1653 (2020). 63. Korzh, B. et al. Demo-
nstration of sub-3ps temporal resolution with a superconducting nanowire single-photon detector. Nat. Photon. 14, 250–255 (2020). 64. Andrews, D. H., Brucksch, W. F. Jr., Ziegler, W. T. & Blanchard, E. R. Attenuated superconductors I. For measuring infra-red radiation. Rev. Sci. Instrum. 13, 281–292 (1942).
65. Lita, A. E., Miller, A. J. & Nam, S. W. Counting near-infrared singlephotons with 95% efficiency. Opt. Express 16, 3032–3040 (2008).

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
66. Schuck, C., Pernice, W. H. P. & Tang, H. X. Waveguide integrated low noise NbTiN nanowire single-photon detectors with milli-Hz dark count rate. Sci. Rep. 3, 1893 (2013). 67. Sahin, D. et al. Waveguide photon-number-resolving detectors for quantum photonic integrated circuits. Appl. Phys. Lett. 103, 111116 (2013). 68. Höpker, J. P. et al. Integrated transition edge sensors on titanium in-diffused lithium niobate waveguides. APL Photonics 4, 056103 (2019). 69. Pernice, W. H. P. et al. High-spee-
d and high-efficiency travelling wave single-photon detectors embedded in nanophotonic circuits. Nat. Commun. 3, 1325 (2012). 70. Cheng, R. et al. A 100-pixel photon-number-resolving detector unveiling photon statistics. Nat. Photon. 17, 112–119 (2023). 71. Bennett, C. H. & Brassard, G. Quantum cryptography: public key distribution and coin tossing. In International Conference on Computers, Systems & Signal Processing 175–179 (Theoretical Computer Science, 1984). 72. Ekert, A. K. Quantum cryptogra-
phy based on Bell’s theorem. Phys. Rev. Lett. 67, 661–663 (1991). 73. Bennett, C. H. et al. Teleporting an unknown quantum state via dual classical and Einstein–Podolsky–Rosen channels. Phys. Rev. Lett. 70, 1895–1899 (1993). 74. Bennett, C. H. & Brassard, G. Experimental quantum cryptography: the dawn of a new era for quantum cryptography: the experimental prototype is working. ACM SIGACT News 20, 78–80 (1989). 75. Wang, X.-B. Beating the photon-number-splitting attack in practical quantum cryptog-
raphy. Phys. Rev. Lett. 94, 230503 (2005). 76. Lo, H.-K., Ma, X. & Chen, K. Decoy state quantum key distribution. Phys. Rev. Lett. 94, 230504 (2005).
77. Boaron, A. et al. Secure quantum key distribution over 421km of optical fiber. Phys. Rev. Lett. 121, 190502 (2018). 78. Chen, Y.-A. et al. An integrated space-to-ground quantum communication network over 4,600 kilometres. Nature 589, 214–219 (2021). 79. Lo, H.-K., Curty, M. & Qi, B. Measurement-device-independent quantum key distribution. Phys. Rev. Lett. 108, 130503 (2012). 80. Yin, H.-L. et al. Measurement-device-independent quantum key distribution over a 404km optical fiber. Phys. Rev. Let-
t. 117, 190501 (2016). 81. Lucamarini, M., Yuan, Z. L., Dynes, J. F. & Shields, A. J. Overcoming the rate–distance limit of quantum key distribution without quantum repeaters. Nature 557, 400–403 (2018). 82. Wang, S. et al. Twin-field quantum key distribution over 830-km fibre. Nat. Photon. 16, 154–161 (2022). 83. Chen, J.-P. et al. Twin-field quantum key distribution over a 511km optical fibre linking two distant metropolitan areas. Nat. Photon. 15, 570–575 (2021). 84. Pittaluga, M. et al. Long-d-
istance coherent quantum communications in deployed telecom networks. Nature 640, 911–917 (2025). 85. Grosshans, F. & Grangier, P. Continuous variable quantum cryptography using coherent states. Phys. Rev. Lett. 88, 057902 (2002). 86. Weedbrook, C. et al. Quantum cryptography without switching. Phys. Rev. Lett. 93, 170504 (2004).
87. Zhang, Y. et al. Long-distance continuous-variable quantum key distribution over 202.81km of fiber. Phys. Rev. Lett. 125, 010502 (2020). 88. Wootters, W. K. & Zurek, W. H. A single quantum cannot be cloned. Nature 299, 802–803 (1982). 89. Briegel, H.-J., Dür, W., Cirac, J. I. & Zoller, P. Quantum repeaters: the role of imperfect local operations in quantum communication. Phys. Rev. Lett. 81, 5932–5935 (1998).
90. Duan, L.-M., Lukin, M. D., Cirac, J. I. & Zoller, P. Long-distance quantum communication with atomic ensembles and linear optics. Nature 414, 413–418 (2001). 91. Pan, J.-W., Bouwmeester, D., Weinfurter, H. & Zeilinger, A. Experimental entanglement swapping: entangling photons that never interacted. Phys. Rev. Lett. 80, 3891–3894 (1998). 92. Hensen, B. et al. Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres. Nature 526, 682–686 (2015). 93. Yu, Y. et al. E-
ntanglement of two quantum memories via fibres over dozens of kilometres. Nature 578, 240–245 (2020). 94. Bhaskar, M. K. et al. Experimental demonstration of memory-enhanced quantum communication. Nature 580, 60–64 (2020). 95. Liu, J.-L. et al. Creation of memory–memory entanglement in a metropolitan quantum network. Nature 629, 579–585 (2024). 96. Knaut, C. M. et al. Entanglement of nanophotonic quantum memory nodes in a telecom network. Nature 629, 573–578 (2024). 97. Stolk, A. J. et al. Metropo-
litan-scale heralded entanglement of solid-state qubits. Sci. Adv. 10, eadp6442 (2024). 98. Liao, S.-K. et al. Satellite-to-ground quantum key distribution. Nature 549, 43–47 (2017). 99. Yin, J. et al. Satellite-based entanglement distribution over 1200 kilometers. Science 356, 1140–1144 (2017). 100. Yin, J. et al. Entanglement-based secure quantum cryptography over 1,120 kilometres. Nature 582, 501–505 (2020). 101. Ren, J.-G. et al. Ground-to-satellite quantum teleportation. Nature 549, 70–73 (20-
17). 102. Lu, C.-Y., Browne, D. E., Yang, T. & Pan, J.-W. Demonstration of a compiled version of Shor’s quantum factoring algorithm using photonic qubits. Phys. Rev. Lett. 99, 250504 (2007). 103. Lanyon, B. P. et al. Experimental demonstration of a compiled version of Shor’s algorithm with quantum entanglement. Phys. Rev. Lett. 99, 250505 (2007). 104. Peruzzo, A. et al. A variational eigenvalue solver on a photonic quantum processor. Nat. Commun. 5, 4213 (2014). 105. Milburn, G. J. A quantum Fredk-
in gate. Phys. Rev. Lett. 62, 2124–2127 (1989). 106. Nielsen, M. A. Optical quantum computation using cluster states. Phys. Rev. Lett. 93, 040503 (2004).
107. Dawson, C. M., Haselgrove, H. L. & Nielsen, M. A. Noise thresholds for optical quantum computers. Phys. Rev. Lett. 96, 020501 (2006). 108. Rudolph, T. Why I am optimistic about the silicon-photonic route to quantum computing. APL Photonics 2, 030901 (2017). 109. Carolan, J. et al. Universal linear optics. Science 349, 711–716 (2015). 110. Qiang, X. et al. Large-scale silicon quantum photonics implementing arbitrary two-qubit processing. Nat. Photon. 12, 534–539 (2018). 111. Mennea, P. et al. -
Modular linear optical circuits. Optica 5, 1087–1094 (2018). 112. Meyer-Scott, E. et al. Scalable generation of multiphoton entangled states by active feed-forward and multiplexing. Phys. Rev. Lett. 129, 150501 (2022). 113. Schön, C., Solano, E., Verstraete, F., Cirac, J. I. & Wolf, M. M. Sequential generation of entangled multiqubit states. Phys. Rev. Lett. 95, 110503 (2005). 114. Economou, S. E., Lindner, N. H. & Rudolph, T. Optically generated 2-dimensional photonic cluster state from coupled q-
uantum dots. Phys. Rev. Lett. 105, 093601 (2010). 115. Gimeno-Segovia, M., Rudolph, T. & Economou, S. E. Deterministic generation of large-scale entangled photonic cluster state from interacting solid state emitters. Phys. Rev. Lett. 123, 070501 (2019).

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
116. Schwartz, I. et al. Deterministic generation of a cluster state of entangled photons. Science 354, 434–437 (2016). 117. Cogan, D., Su, Z.-E., Kenneth, O. & Gershoni, D. Deterministic generation of indistinguishable photons in a cluster state. Nat. Photon. 17, 324–329 (2023). 118. Coste, N. et al. High-rate entanglement between a semiconductor spin and indistinguishable photons. Nat. Photon. 17, 582–587 (2023). 119. Yang, C.-W. et al. Highly efficient multiphoton generation with photon-number--
resolving detectors. Nat. Photon. 16, 658–661 (2022). 120. Thomas, P., Ruscio, L., Morin, O. & Rempe, G. Efficient generation of entangled multiphoton graph states from a single atom. Nature 608, 677–681 (2022). 121. Thomas, P., Ruscio, L., Morin, O. & Rempe, G. Fusion of deterministically generated photonic graph states. Nature 629, 567–572 (2024). 122. Hacker, B., Welte, S., Rempe, G. & Ritter, S. A photon–photon quantum gate based on a single atom in an optical resonator. Nature 536, 193–196 (2-
016). 123. Hastrup, J. & Andersen, U. L. Protocol for generating optical Gottesman–Kitaev–Preskill states with cavity QED. Phys. Rev. Lett. 128, 170503 (2022). 124. Menicucci, N. C. et al. Universal quantum computation with continuous-variable cluster states. Phys. Rev. Lett. 97, 110501 (2006). 125. Menicucci, N. C. Fault-tolerant measurement-based quantum computing with continuous-variable cluster states. Phys. Rev. Lett. 112, 120504 (2014). 126. Menicucci, N. C., Ma, X. & Ralph, T. C. Arbitraril-
y large continuous-variable cluster states from a single quantum nondemolition gate. Phys. Rev. Lett. 104, 250503 (2010). 127. Yokoyama, S. et al. Ultra-large-scale continuous-variable cluster states multiplexed in the time domain. Nat. Photon. 7, 982–986 (2013). 128. Asavanant, W. et al. Generation of time-domain-multiplexed two-dimensional cluster state. Science 366, 373–376 (2019). 129. Larsen, M. V., Guo, X., Breum, C. R., Neergaard-Nielsen, J. S. & Andersen, U. L. Deterministic generation of -
a two-dimensional cluster state. Science 366, 369–372 (2019). 130. Larsen, M. V., Guo, X., Breum, C. R., Neergaard-Nielsen, J. S. & Andersen, U. L. Deterministic multi-mode gates on a scalable photonic quantum computing platform. Nat. Phys. 17, 1018–1023 (2021). 131. Gottesman, D., Kitaev, A. & Preskill, J. Encoding a qubit in an oscillator. Phys. Rev. A 64, 012310 (2001). 132. Konno, S. et al. Logical states for fault-tolerant quantum computation with propagating light. Science 383, 289–293 (2024-
). 133. Ourjoumtsev, A., Jeong, H., Tualle-Brouri, R. & Grangier, P. Generation of optical ‘Schrödinger’ cats from photon number states. Nature 448, 784–786 (2007). 134. Aaronson, S. & Arkhipov, A. The computational complexity of linear optics. Theory Comput. 9, 143–252 (2013). 135. Lund, A. et al. Boson sampling from a Gaussian state. Phys. Rev. Lett. 113, 100502 (2014). 136. Hamilton, C. S. et al. Gaussian boson sampling. Phys. Rev. Lett. 119, 170501 (2017). 137. Broome, M. A. et al. Photonic bo-
son sampling in a tunable circuit. Science 339, 794–798 (2013). 138. Spring, J. B. et al. Boson sampling on a photonic chip. Science 339, 798–801 (2013). 139. Crespi, A. et al. Integrated multimode interferometers with arbitrary designs for photonic boson sampling. Nat. Photon. 7, 545–549 (2013).
140. Tillmann, M. et al. Experimental boson sampling. Nat. Photon. 7, 540–544 (2013). 141. Wang, H. et al. High-efficiency multiphoton boson sampling. Nat. Photon. 11, 361–365 (2017). 142. Zhong, H.-S. et al. Quantum computational advantage using photons. Science 370, 1460–1463 (2020). 143. Zhong, H.-S. et al. Phase-programmable gaussian boson sampling using stimulated squeezed light. Phys. Rev. Lett. 127, 180502 (2021). 144. Deng, Y.-H. et al. Gaussian boson sampling with pseudo-photon-number res-
olving detectors and quantum computational advantage. Phys. Rev. Lett. 131, 150601 (2023). 145. Madsen, L. S. et al. Quantum computational advantage with a programmable photonic processor. Nature 606, 75–81 (2022). 146. Caves, C. M. Quantum-mechanical noise in an interferometer. Phys. Rev. D 23, 1693–1708 (1981). 147. Abbott, R. et al. GWTC-2: compact binary coalescences observed by LIGO and Virgo during the first half of the third observing run. Phys. Rev. X 11, 021053 (2021). 148. Abbott, R. et -
al. GWTC-3: compact binary coalescences observed by LIGO and Virgo during the second part of the third observing run. Phys. Rev. X 13, 041039 (2021). 149. Lough, J. et al. First demonstration of 6dB quantum noise reduction in a kilometer scale gravitational wave observatory. Phys. Rev. Lett. 126, 041102 (2021).
150. Cheng, J.-X. & Xie, X. S. Vibrational spectroscopic imaging of living systems: an emerging platform for biology and medicine. Science 350, aaa8870 (2015). 151. Wei, L. et al. Super-multiplex vibrational imaging. Nature 544, 465–470 (2017). 152. Casacio, C. A. et al. Quantum-enhanced nonlinear microscopy. Nature 594, 201–206 (2021). 153. Weston, M. M. et al. Efficient and pure femtosecond-pulse-length source of polarization-entangled photons. Opt. Express 24, 10869–10879 (2016). 154. Kaneda, F-
., Garay-Palmett, K., U’Ren, A. B. & Kwiat, P. G. Heralded single-photon source utilizing highly nondegenerate, spectrally factorable spontaneous parametric down conversion. Opt. Express 24, 10733–10747 (2016). 155. Ma, X.-s., Zotter, S., Kofler, J., Jennewein, T. & Zeilinger, A. Experimental generation of single photons via active multiplexing. Phys. Rev. A 83, 043814 (2011). 156. Kaneda, F. et al. Time-multiplexed heralded single-photon source. Optica 2, 1010–1013 (2015). 157. Joshi, C., Farsi, -
A., Clemmen, S., Ramelow, S. & Gaeta, A. L. Frequency multiplexing for quasi-deterministic heralded single-photon sources. Nat. Commun. 9, 847 (2018). 158. Ralph, T. C., Hayes, A. J. F. & Gilchrist, A. Loss-tolerant optical qubits. Phys. Rev. Lett. 95, 100501 (2005). 159. Ralph, T. C., Gilchrist, A., Milburn, G. J., Munro, W. J. & Glancy, S. Quantum computation with coherent optical states. Phys. Rev. A 68, 042319 (2003). 160. Zurek, W. H. Sub-Planck structure in phase space and its relevance for -
quantum decoherence. Nature 412, 712–717 (2001).
Acknowledgements
H.W., C.-Y.L. and J.-W.P. acknowledge funding from the National Natural Science Foundation of China (T2422024, 12204460), the National Key R&D Program of China (2019YFA0308700), the Chinese Academy of Sciences, the Anhui Initiative in Quantum Information Technologies (AHY060000), the Science and Technology Commission of Shanghai Municipality (2019SHZDZX01), the Innovation Program for Quantum Science and Technology (2021ZD0301400) and the USTC Research Funds of the Double First-Class Initiative (YD-
9990002020). T.C.R. acknowledges the support of the Australian Research Council through the Centre of Excellence for Quantum Computation and

Nature Materials
Review article https://doi.org/10.1038/s41563-025-02306-7
Communication Technology (project no. CE170100012). J.J.R. acknowledges the Vidi project At the Quantum Edge, which is financed by the Dutch Research Council (NWO).
Competing interests
The authors declare no competing interests.
Additional information
Correspondence and requests for materials should be addressed to Chao-Yang Lu or Jian-Wei Pan.
Peer review information Nature Materials thanks the anonymous reviewers for their contribution to the peer review of this work.
Reprints and permissions information is available at www.nature.com/reprints.
Publisher’s note Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.
Springer Nature or its licensor (e.g. a society or other partner) holds exclusive rights to this article under a publishing agreement with the author(s) or other rightsholder(s); author self-archiving of the accepted manuscript version of this article is solely governed by the terms of such publishing agreement and applicable law.
© Springer Nature Limited 2025

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:44.559Z
- **Text Length:** 88063 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
