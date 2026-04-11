# PDF Document: (Multiplexing Theory - 2023 PRR) Multiplexed telecommunication-band quantum networking with atom arrays in optical cavities.pdf

**File Path:** (Multiplexing Theory - 2023 PRR) Multiplexed telecommunication-band quantum networking with atom arrays in optical cavities.pdf

**Processed Date:** 2026-02-10T18:15:03.069Z

**File Size:** 1112.19 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 354

**Title:** (Multiplexing Theory - 2023 PRR) Multiplexed telecommunication-band quantum networking with atom arrays in optical cavities

**Collection:** Multiplexing > Random

---

## Extracted Text Content

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

Multiplexed telecommunication-band quantum networking with atom arrays in optical cavities
William Huie,1 Shankar G. Menon,2 Hannes Bernien,2,* and Jacob P. Covey 1,† 1Department of Physics, The University of Illinois at Urbana-Champaign, Urbana, Illinois 61801, USA
2Pritzker School of Molecular Engineering, University of Chicago, Chicago, Illinois 60637, USA
(Received 13 July 2021; revised 5 November 2021; accepted 10 November 2021; published 3 December 2021)
The realization of a quantum network node of matter-based qubits compatible with telecommunication-band operation and large-scale quantum information processing is an outstanding challenge that has limited the potential of elementary quantum networks. We propose a platform for interfacing quantum processors comprising neutral atom arrays with telecommunication-band photons in a multiplexed network architecture. The use of a large atom array instead of a single atom mitigates the deleterious effect-
s of two-way communication and improves the entanglement rate between two nodes by nearly two orders of magnitude. Furthermore, this system simultaneously provides the ability to perform high-ﬁdelity deterministic gates and readout within each node, opening the door to quantum repeater and puriﬁcation protocols to enhance the length and ﬁdelity of the network, respectively. Using intermediate nodes as quantum repeaters, we demonstrate the feasibility of entanglement distribution over ≈1500 km base-
d on realistic assumptions, providing a blueprint for a transcontinental network. Finally, we demonstrate that our platform can distribute 25 Bell pairs over metropolitan distances, which could serve as the backbone of a distributed fault-tolerant quantum computer.
DOI: 10.1103/PhysRevResearch.3.043154

I. INTRODUCTION
The development of a robust quantum network [1–3] will usher in an era of cryptographically secured communication [4], distributed and blind quantum computing [5], and sensor and clock networks operating with precision at the fundamental limit [6]. Almost all of these applications require network nodes that are capable of storing, processing, and distributing quantum information and entanglement over large distances [3]. Nodes based on neutral atoms have the potential to combine highly desirable f-
eatures including minute-scale coherence and memory times [7], scalability to hundreds of qubits per node [8], multiqubit processing capabilities [9–11], and efﬁcient light-matter interfaces at telecommunication wavelengths [12–14] based on optical cavities [3,15].
Despite recent work establishing neutral atom-based nodes [16–22], a major bottleneck for the development of such a network is the exponential attenuation and long transit time associated with sending single photons—the quantum bus that distributes entanglement—throughout the network [15]. Since the success probability per entanglement generation attempt is low and success must be “heralded” via two-way communication [23,24], there is intense interest in developing architectures that can “multiple-
x” many signals in parallel on each attempt [25–29]. Multiplexing is necessary to construct networks much larger than the attenuation length in optical
*bernien@uchicago.edu †jcovey@illinois.edu
Published by the American Physical Society under the terms of the Creative Commons Attribution 4.0 International license. Further distribution of this work must maintain attribution to the author(s) and the published article’s title, journal citation, and DOI.

FIG. 1. Overview of the network architecture. (a) Nodes based on arrays of atoms (green circles) in optical cavities generate a Bell pair over each link (blue dashes) to distribute entanglement between end users Alice and Bob. We employ “heralded” entanglement generation based on photon interference on a 50:50 beamsplitter (BS). Fiber-optic switches (FOS) connect adjacent nodes at will by routing the photons from each cavity. (b) The near-concentric optical cavities have a mirror spacing of ≈1 cm -
while the atom array spans a length of only ≈200 μm. (c) The time signature of the photons on the detectors (PD) indicates which atoms at each node are in a Bell state (green check marks). Subsequent, deterministic gates can be achieved by moving these atoms (dashed red arrows) and performing Rydberg entangling operations (purple circle). (d) A standing wave in the cavity traps atoms in a one-dimensional array (blue) to overlap with the highest ﬁeld strength of the telecom mode (red). Atoms are po-
sitioned with auxiliary optical tweezers (yellow) that also move the atoms.

2643-1564/2021/3(4)/043154(14)

043154-1

Published by the American Physical Society

HUIE, MENON, BERNIEN, AND COVEY

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

FIG. 2. Multiplexed remote entanglement generation over L = 100 km with atom arrays. (a) With only a single atom at each node, the low success probability necessitates an average of ≈5800 entanglement attempts. The solid gray bar shows this process with time moving to the right. The zoom shows a single attempt, in which the cooling and initialization of the atom (blue) and signal transmission over the link (purple) dominate the duration of each attempt. The duty cycle (fraction of time) of entangl-
ement-producing operations—qubit rotations (green) and atom-photon entanglement (orange) (see Fig. 3 for details)—is only ≈4%. (b) With an array of N = 100 atoms at each node, the success probability necessitates an average of only ≈60 multiplexed attempts; hence the overall time it takes to create entanglement (gray bar) is much shorter. Each attempt takes longer and has a much greater duty cycle of ≈50% for entanglement-producing operations. (c) A cartoon of the operations required for each atte-
mpt. The two-qubit rotations and atom-photon entanglement operations follow the standard protocol for time-bin entanglement generation [56,57].

ﬁber (≈20 km in the telecommunication-band [30]), but it is not sufﬁcient. Intermediate “repeater” nodes are required to swap the entanglement and teleport quantum information [4,20,23]. Additionally, entanglement “puriﬁcation” protocols [31–33] are often needed to improve the ﬁdelity of the distributed quantum states.
Here, we propose a quantum network and repeater node architecture that is capable of high-rate, multiplexed entanglement generation, deterministic internode quantum gates and Bell-state measurements for puriﬁcation and distribution of many-body states, while at the same time operating at telecommunication wavelengths where low-loss optical ﬁbers permit long-distance entanglement distribution. Our architecture is based on arrays [34,35] of individual neutral ytterbium (Yb) atoms, an alkaline-earth--
like species [36–38], in large (≈1 cm), near-concentric optical cavities [39–42] (see Fig. 1). We consider a time-bin entanglement generation protocol [57] that combines a strong, 1.48-μm-wavelength transition [13,43] and long-lived nuclear-spin-1/2 qubit states of 171Yb with temporal multiplexing along the array of atoms.
Based on recent progress with alkaline-earth atomic arrays [36–38,44–48] and realistic assumptions regarding the operation of these nodes, we show that our multiplexing protocol can generate Bell pairs over >1000 km within the coherence time of the qubits, and is compatible with entanglement

puriﬁcation protocols [31–33] as well as the distribution of many-body states [6,49–51]. Our work lays the foundation for a versatile metropolitan or transcontinental network through an architecture that combines the use of Rydberg atom arrays [9,52], cavity QED with strong atom-photon coupling [15,53–55], and atom-array optical clocks [7,45,46] in one platform.
II. MULTIPLEXED REMOTE ENTANGLEMENT GENERATION
To motivate the proposed architecture, we begin with an overview of our multiplexed time-bin networking protocol. Speciﬁcally, we consider the example of a network link of length L = 100 km. The associated two-way signal transmission time per attempt is τ = 2L/c, where c = c0/n is the speed of light in optical ﬁber (n = 1.4) that includes both the quantum signal and classical heralding signal; τ ≈ 1 ms for this distance. Per the methods described below, we estimate that ≈5800 entanglement attempts-
 will be required if there is only a single qubit (atom) at each node, resulting in an ≈0.16Hz entanglement generation rate. Figure 2(a) shows the full process of successful entanglement generation with a zoomed view of each attempt. The attempt time is dominated by signal transmission (see Appendix D for full timing details) such that

043154-2

MULTIPLEXED TELECOMMUNICATION-BAND QUANTUM …

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

the duty cycle (fraction of time) of entanglement-producing operations is only ≈4%.
If instead we have N = 100 qubits at each node and multiplex their signals as described below, we can drastically decrease the number of required attempts to only ≈60 resulting in an ≈50-fold increase in the entanglement rate to 8 Hz at L = 100 km. Figure 2(b) shows the full process of successful entanglement generation for N = 100 atoms with a zoomed view of each multiplexed attempt. In this case the duty cycle for entanglement-producing operations is ≈50%. Although the time required per attempt -
is longer when multiplexing across a large number of atoms, the favorable scaling in success probability per attempt over long network links leads to substantially improved entanglement generation rates compared with the case of a single atom.
III. DESCRIPTION OF THE NETWORK ARCHITECTURE
Before summarizing these results in more detail in Secs. IV and V, we provide an overview of the atom-array platform and the atom-photon entanglement scheme. Further details on these topics can be found in Appendixes B and C, respectively.
A. Atom arrays in near-concentric optical cavities
There has been intense interest in coupling neutral atoms to optical cavities with small mode volumes such as nanophotonic [14,18,22] and ﬁber-gap Fabry-Pérot [58–60] systems to enhance the atom-photon coupling. However, these systems are not readily compatible with large atom arrays (and singleatom control therein) due to their limited optical accessibility. Additionally, the proximity of dielectric surfaces to the atoms makes the prospect for robust, high-ﬁdelity Rydberg-mediated gates uncertain-
 as stray electric ﬁelds limit the coherence of Rydberg transitions [61,62].
Meanwhile, near-concentric cavities with large mirror spacings ( 1 cm) have recently been used with great success in myriad cavity QED research directions [39–42] and offer enough optical access to enable single-atom control in cavity-coupled atom arrays. Crucially, the mirror spacing is similar to the size of glass cells used in many recent high-ﬁdelity Rydberg entanglement studies [10,11,47,48]. Furthermore, near-concentric cavities are widely used in trapped ion systems [39] that are also sensi-
tive to transient electric ﬁelds from dielectric surfaces [63]. Therefore it is reasonable to expect that these cavities are compatible with deterministic Rydberg-mediated gates and Bell-state measurements needed in a quantum repeater and puriﬁcation architecture.
We focus on a near-concentric system with = 0.975 cm and radius of curvature R = 5 mm for which the cavity stability parameter G = 1 − /R = −0.95 [40,64]. (G = −1 deﬁnes the concentric limit which is unstable.) We choose a single-sided cavity, where the reﬂectivity of one mirror is much greater than the other to allow photon passage, with a ﬁnesse of 50 000. We couple this cavity to the 3P1 ↔ 3D2 transition with wavelength λnet = 1480 nm and decay rate
= 2π × 318 kHz. Based on these parameters, the coupling strength to the cavity is g34 ≈ 2π × 1.53 MHz, and the

single-atom cooperativity is C ≈ 16 (for a detailed derivation, see Appendix B).
We trap the atoms in a standing wave at λtrap = λnet/2 = 740 nm to ensure maximal coupling with the telecommunication ﬁeld (at λnet) in the cavity [see Fig. 1(d)]. The standing wave at λtrap is fortuitously close to the “magic” wavelength for the optical clock transition ( 1S0 ↔ 3P0) where the two states have equal polarizability [65]: λm = 760 nm. The expected 1/e2 waist radius for this standing wave is wtrap ≈ 14 μm; the trap depth (and frequency) are free parameters. Optical tweezers are employ-
ed to create an atom array from
the magneto-optical trap (MOT) before the standing wave
is turned on, and the tweezers are positioned to overlap the
desired antinodes of the standing wave [see Fig. 1(d)]. The standing wave provides strong axial conﬁnement with λtrap/2 spacing between the antinodes and guaranteed maximal over-
lap with the antinodes of the telecommunication cavity mode at λnet, and the tweezers provide strong transverse conﬁnement.
B. Atom-photon entanglement via four-wave mixing
We entangle the nuclear-spin-1/2 qubit in the ground state of 171Yb with a 1480-nm photon on the 3P1 ↔ 3D2 transition via a four-pulse scheme that uses two Zeeman states within the 3P1 manifold as intermediaries [see Fig. 3(a)]. The target state of our protocol is the atom-√photon Bell state |ψ atom-photon = (|0 a|early p + |1 a|late p)/ 2, in which the atomic qubit states {|0 a, |1 a} are entangled with the photon occupation in an early and late emission time bin {|early p, |late p} [56,57]. Such-
 time-bin encoded states are ideally suited for long-
distance entanglement distribution via optical ﬁbers as they
are robust against birefringence in ﬁbers that would adversely
affect other encodings such as polarization-encoded states. To create |ψ atom-photon, we start by prepa√ring a superposition of the atomic qubit states (|0 a + |1 a)/ 2. Then a coherent atomic pulse sequence results in the emission of a photon into the cavity mode only if the atom is in |1 . The proposed four-level system that allows such a state-selective emission
process is shown in Fig. 3(a), and was inspired by similar se-
quences that have recently been considered for alkali species [14]. After the emission in the early time bin, a π pulse on the qubit states ﬂips |0 a and |1 a, and a second optical pulse sequence causes emission in the late time bin. This
completes the protocol and leaves the system in the target state |ψ atom-photon.
We leverage the F = 3/2 and F = 1/2 hyperﬁne structure of the 3P1 manifold to provide the well-separated intermediate states |2 and |4 , and we assume a magnetic ﬁeld of B 100 G although this is not strictly necessary. Note that we expect
10−4-level ﬁeld inhomogeneity across the array [66,67], corresponding to ∼10-kHz-level shifts of the telecommunication transition. These shifts are at the percent level of the
photon bandwidth and are mitigated by pairing atoms in identical locations within their respective arrays, thus experiencing
similar local environments. We apply Gaussian pulses 12 and 41 on a per-atom basis within the array [Fig. 3(b)] as the
primary mechanism for our time-based multiplexing scheme.
23 and g34 couple to all atoms globally but are distantly off-resonant with negligible differential effect on the qubit

043154-3

HUIE, MENON, BERNIEN, AND COVEY

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

(a)
D F = 3/2

(b)
|3

λ34= 1480 nm g34 Ω23

Ω23

g34

P F = 3/2

|2

5.9 GHz

F = 1/2

|4

Ω41

Ω12

S F = 1/2 |0

|1

Ω12, Ω41

(c)

(d)

FIG. 4. Analysis of a single link. (a) Multiplexed entanglement

δ

generation between two nodes, each containing an array of atoms

in an optical cavity. The mean entanglement distribution rate vs

the length of the link for various numbers of atoms N is shown as

an opacity scale for N = {10, 20, 50, 100, 150, 200} with N = 200

being fully opaque. This scale is used in subsequent ﬁgures. The

dotted line shows the entanglement distribution rate for N = 1. The

horizontal dashed line shows a conservative estimate for the antic-

ipated decoherence rate of the atoms. Here, we focus on the rates

associated with successfully generating a single Bell pair with one

atom at each node (inset).

FIG. 3. Multiplexed remote entanglement via a four-pulse excitation scheme. (a) A minimal diagram of the 171Yb level structure showing two hyperﬁne Zeeman states in the 3P1 manifold as inter-
mediaries. (b) Local application of 12 and 41 on an atom-by-atom
level is the primary mechanism for our time-based multiplexing

scheme. (c) Analysis of the pulses and internal dynamics during the

process as well as the temporal shape of the extracted photon that is

entangled with the nuclear qubit in the ground state. The black arrow

highlights that the relative timing of the two pulses 12 and 41 is a free parameter. The maximum Rabi frequencies (freq.) of these

pulses are {

max 12

,

m34ax} = {13.2γ , 23.0γ }, and γ = 2π × 180 kHz

is the decay rate of 3P1. (d) The resulting atom-photon entanglement

ﬁdelity and success probability vs the relative timing δ of 12 and

41 in units of γ . [(c) corresponds to δ = 0.] We choose δ as shown

by the black dashed line in (d) for the remainder of this work.

|0 − |1 when 12 and 41 are not applied to the atom. Hence we raster the tightly focused 12 and 41 beams across the atoms such that the position of the atom in the array is mapped
to the time stamp of the photon emitted into the cavity.
We describe the optimization and analysis of the pulse
design in Appendix C and summarize our ﬁndings in Fig. 3(c).
We leave 23 at a constant value for the entire duration of the four-wave-mixing (FWM) protocol. We then transfer the population from |1 to |2 with 12. These two ﬁelds populate |3 , which is transferred to |4 by the coherent cavity coupling g34. Note that other schemes for transferring population from |1 to |3 , such as a two-photon π pulse detuned from the intermediate state |2 , are expected to further suppress double excitation due to decay during the ﬁrst half of the FWM proto-
col to below 1%. We then perform 41 to coherently transfer the atomic population back to |1 . The relative timing of the
12 and 41 pulses introduces a trade-off between process

ﬁdelity and success probability [Fig. 3(d)]. Essentially, the process is limited by spontaneous emission from |4 which occurs at a rate 41 ≈ 2π × 180 kHz ≈ g34/8.5. Moving the
41 pulse earlier mitigates the decay but reduces the probability of success. Note that the remote entanglement scheme is heralded, so events that do not produce photons only affect success rates, while events that produce photons but leave the atom in the wrong state are classiﬁed as successful and lead to inﬁdelity. We choose the values shown in Fig. 3(d) for which the ﬁdelity (success probability) of producing |ψ atom-photon with the photon in the ﬁber is ≈0.98 (≈0.39). We assume atom-atom Bell--
state ﬁdelities of Fatom-atom 0.90 (see Appendix E).
IV. ENTANGLEMENT DISTRIBUTION ACROSS A SINGLE LINK
We now return to the discussion of entanglement distribution rates, and we begin by considering a single link between two nodes. Details of the analysis are described in Appendix D. Figure 4 shows the mean entanglement rate in our multiplexed scheme versus the distance between the nodes for different atom numbers N. For distances larger than ≈25 km, we ﬁnd a drastic improvement of the entanglement rate as more atoms per node are used. At a distance of 100 km we see an ≈50-fold faster rate when usi-
ng 100 atoms per node compared with the single-atom case (see also Fig. 2). We ﬁnd that the entanglement rate sees diminishing returns for N 200 due to two main factors. First, the probability of successfully creating a Bell pair asymptotically saturates at 1 such that larger numbers of atoms are not needed for suitably large rates. Second, the time per entanglement attempt becomes dominated by the total time required to perform the fourwave-mixing protocol for all the atoms at each node, rather

043154-4

MULTIPLEXED TELECOMMUNICATION-BAND QUANTUM …

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

than the classical signal transmission time between them (see Fig. 2 and Appendix D). This second effect is clearly visible at short distances below ≈25 km.
We compare the entanglement rate with the coherence time of the qubits in the nodes. We assume a conservative lower bound of T2 = 1 s for our nuclear qubits but note that it could approach the minute scale [7]. Hence we consider distribution rates above coherence = 1/(2π T2) = 0.16 Hz to have a sufﬁciently high link efﬁciency [68] for useful entanglement. This criterion suggests that our platform will enable the generation of entanglement over ≈180 km using N = 200 atoms, which is well within the -
reach of current technology [8]. For context, the current record for matter-based qubits is 1.3 km [69].

(a)
Alice
Group 1

Group 2

Bob m=0 1 2 3

V. ENTANGLEMENT DISTRIBUTION USING

(b)

QUANTUM REPEATER NODES

We now turn to the use of intermediate repeater nodes to extend the range of entanglement generation to greater distances. The goal is to connect these intermediate links into a larger chain which we refer to as the “network-level” architecture. We break the length L between end users Alice and Bob into 2m segments with length Lm = L/2m, where m is a non-negative integer we call the “nesting level” of the network.

A. Overview of the protocol
We divide the intermediate links into two groups in alternation such that adjacent links are not in the same group [see Fig. 5(a)]. Our protocol is based on the generation of Bell pairs across all group 1 links in parallel followed by all group 2 links in parallel. Naively, the mean time required to generate Bell pairs across all links is approximately twice the mean time required for a single link. However, the number of attempts required to successfully create entanglement follows a geometric di-
stribution, and both groups must wait for the success of all constituent links. Hence we stochastically sample the distribution of attempts for each link in both groups in order to estimate mean entanglement generation rates at the network level (see Appendix D for details). Note that if N atoms are employed in the multiplexed entanglement generation in group 1, N − 1 atoms are available for generating entanglement in group 2.
After the Bell pairs have been generated on group 1 links, the constituent atom at each node in these Bell pairs— recognized by its time stamp—must be isolated and preserved from the subsequent operations on the group 2 links. Our protocol is based on transferring those qubits from the nuclear-spin-1/2 ground state ( 1S0) to an auxiliary computational basis [70] of the nuclear-spin-1/2 metastable clock state (3P0) that has a lifetime of ≈20 s. Accordingly, we leverage the (nearly-)clock-magic wave-
length of the cavitystanding-wave–optical-tweezer-trap system. The metastable clock state is transparent with respect to the four-wave-mixing sequence, and a negligible relative phase is anticipated on this auxiliary qubit. We expect that transferring the qubit to the auxiliary basis will occur at a rate much faster than the entanglement generation rates over distances of interest and therefore have a negligible effect on the total rate. Rates of

FIG. 5. Network-level entanglement generation. (a) In order to distribute entanglement to end users Alice and Bob over greater distances, 2m − 1 intermediate repeater nodes are used, where m is the nesting level. Bell pairs are generated in parallel within group 1 (blue) and group 2 (red). Intermediate nodes have two atoms involved in Bell pairs. (b) Simulated entanglement distribution rates over the full network vs the network length L for nesting levels m = 2 (blue), 3 (orange), and 4 (yellow) w-
ith the number of atoms per node N shown as the same opacity scale as in Fig. 4. The dashed lines again show conservative estimates of the coherence of the qubits at each nesting level. Note that the number of qubits depends on m, so the estimated coherence is 2m/(2π T2). The black dotted line shows for comparison the direct entanglement distribution rate by sending entangled photon pairs at a rate of 10 GHz [71].
clock ≈ 2π × 100 kHz and a transfer ﬁdelity of 0.99 are anticipated with 171Yb [7]. Alternatively, the atom(s) could be moved away from the array and the laser ﬁelds to preserve coherence during group 2 operations.
With Bell pairs across all neighboring links, we now complete the end-to-end entanglement protocol by entangling atomic pairs and performing deterministic Bell-state measurements at each node to effectively reduce the nesting level of the network by 1. Bell pairs between increasingly distant nodes are traced out of the system through this process (see Appendix A) until end users Alice and Bob directly share a Bell pair. We couple to highly excited Rydberg states to perform the required local deter-
ministic entanglement operations [10,11,47], inspired by a recent approach with alkaline-earth atoms coupling from the clock state to Rydberg states in the

043154-5

HUIE, MENON, BERNIEN, AND COVEY

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

3S1 series [47]. However, this interaction occurs only over short distances, requiring the atomic pairs to be repositioned [see Fig. 1(c)]. The optical tweezers will remove the atoms from the cavity standing wave and translate them to within several micrometers of each other prior to Rydberg excitation. Tweezer-mediated coherent translation of atomic qubits over such distances is routinely performed on the approximately millisecond timescale with minimal decoherence [22,72–74], and Rydberg-mediate-
d gates are on the less than microsecond timescale [10,11,47]. These steps are again much faster than the entanglement distribution rates and are only performed when remote Bell pairs have been successfully created, so we can neglect their effect on the total rate. The expected near-term ﬁdelity of Rydberg-mediated gates and local measurement is 0.99 [44,47], which is high compared with the ﬁdelity of generating Bell pairs: 0.90 [see Fig. 3(d) and Appendix E]. A detailed network ﬁdelity budget is -
outside the scope of this work.

B. Summary of the results

We consider the network-level entanglement distribution

rate based on this protocol for varied network length L, nesting

level m, and atom number per node N. We compare this

rate against a conservative estimate of the coherence of all

qubits in the system. Naturally, this depends on the nest-

ing level, and hence the network-level coherence estimate

is

m coherence

=

2m/(2π T2)

=

0.16

×

2m

Hz.

Figure

5(b)

shows

the network-level generation rate versus the network length

for nesting levels m = 2, 3, 4 with various atom numbers per

node N shown as an opacity scale. We also compare against

direct communication (without intermediate nodes) based on

entangled photon pairs at a wavelength of 1550 nm with a

repetition rate of 10 GHz [71]. The direct communication rate

falls sharply, passing below our coherence time estimates at

a distance of ≈600 km. We ﬁnd that the achievable network

length increases for higher nesting level and saturates for

N ≈ 200 atoms. In particular, for m = 4 our system enables

a network of L ≈ 1500 km.

VI. MULTIPLE BELL PAIRS AND ENTANGLEMENT PURIFICATION
We now consider the generation of multiple Bell pairs with our system, which are needed for more advanced protocols such as puriﬁcation and logical encoding. Entanglement puriﬁcation (also known as distillation) [31–33] is based on taking two (or more) Bell pairs and consuming them to generate a single Bell pair with higher ﬁdelity (see Appendix A). Puriﬁcation requires entanglement operations between the local qubits in the pairs combined with single-qubit readout within each node. The former wil-
l again be accomplished with Rydberg-mediated gates [10,11,47], while the latter will leverage the auxiliary qubit basis in the metastable clock state to perform single-atom readout by scattering photons from the 1S0 ↔ 3P1 transition, to which the 3P0 clock state is transparent [75,76].
To this end, we study the network-level entanglement generation rate versus network length L with m = 4 for various numbers of Bell pairs. We ﬁnd that the rate associated with

(a)

(b)

FIG. 6. Multiple Bell pairs at the network and single-link levels.

(a) The simulated entanglement distribution rate for m = 4 vs net-

work distance for one Bell pair (dot-dashed lines), two Bell pairs

(dot-dot-dashed lines), and ﬁve Bell pairs (lines consisting of ﬁve

dots and a dash) with N = {100, 150, 200} as an opacity scale. The

black dotted line is again direct communication at 10 GHz. The

horizontal dashed lines are the expected coherence associated with

the total number of qubits. For multiple Bell pairs B > 1, this is

m,B coherence

=

B

·

2m/(2π T2 ).

The

maximum

distance

falls

from

≈1500

to ≈1100 km when increasing the number of Bell pairs from 1 to 2.

(b) The entanglement distribution rate of a single link with distance

L = 50 km to represent a metropolitan-scale network. The rate is

plotted vs the number of Bell pairs with N from 10 to 200 as an

opacity scale. This shows a favorable scaling with B, and that B = 26

Bell pairs can be generated with N = 200, where the dashed line is

again the expected coherence associated with the total number of

qubits. Entanglement of B > N pairs is impossible; hence rates for

these data points are omitted.

generating B Bell pairs in a given attempt decays exponentially with B; hence we instead use a “ladder” scheme analogous to the network-level analysis. Speciﬁcally, we create B Bell pairs one at a time on each link [see Fig. 6(a)] and still divide the links into two groups. Here again, we must sample the distribution of attempts before the successful generation of each Bell pair on each link, and both group 1 and group 2 are limited by the time for each constituent link to generate B pairs (see Ap-
pendix D).
We ﬁnd that the simulated mean entanglement generation rate for B = 2 exceeds the decoherence of the B · 2m Bell pairs for distances up to L ≈ 1100 km. These ﬁndings indicate that our platform may be compatible with the development of a transcontinental terrestrial quantum network with sufﬁciently high ﬁdelity—based on entanglement puriﬁcation—for subsequent nontrivial operations. Interestingly, we ﬁnd a favorable scaling with B and include B = 5 in Fig. 6(a), showing rates exceeding decoherence f-
or distances up to L ≈ 500 km.
Finally, we consider the possibility of generating many Bell pairs over a metropolitan-scale link with L = 50 km for advanced error correction protocols or for the distribution of many-body states such as logically encoded qubits [76–78], atomic cluster or graph states [79], spinsqueezed states [49,80,81], or Greenberger-Horne-Zeilinger

043154-6

MULTIPLEXED TELECOMMUNICATION-BAND QUANTUM …

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

(GHZ) states [6,82]. We analyze the entanglement generation rate versus the number of Bell pairs per link for various N in Fig. 6(b). Crucially, we ﬁnd that 26 Bell pairs can be generated for N = 200—comparable with the largest GHZ states created locally to date [82–84]—offering new opportunities for distributed computing and error-corrected networking.
VII. OUTLOOK AND CONCLUSION
We have proposed a platform that combines the strengths of neutral atoms—efﬁcient light-matter interfaces [15,53– 55] with telecommunication-band operation [12–14], highﬁdelity qubit operations and measurement [10,11,44,47], scalability to many qubits [8,50,52], and long coherence times in state-independent optical traps [7,45,46]—to enable new directions in quantum communication and distributed quantum computing. Moreover, we have demonstrated how this platform can offer dramatic improvements in -
entanglement generation rates over long distances by time-multiplexing across an array of atoms within each entanglement generation attempt.
We show that entanglement generation rates with N ≈ 100 atoms across 100-km links compare favorably with conservative estimates of the atoms’ coherence time. We further demonstrate that multiplexed repeater-based networks with 2(m=4) links and N ≈ 100 atoms at each node can generate entanglement over ≈1500 km. Additionally, we show that our system is well suited for entanglement puriﬁcation [31–33] and can achieve a puriﬁed network range to ≈1100 km, providing a promising architecture for a transc-
ontinental quantum network. This network architecture is also compatible with heterogeneous hardware and may be combined with microwave-to-optical transduction [43,85] to provide a robust network between superconducting quantum processors [86]. Finally, we consider the prospects for generating larger numbers of Bell pairs for more advanced protocols such as distributing logically encoded or other many-body states relevant for quantum computing and metrology. We ﬁnd that 26 Bell pairs can be genera-
ted over a metropolitan link of 50 km.
More generally, the conﬂuence of the associated research thrusts—Rydberg atoms arrays [9,52], cavity QED with strong atom-photon coupling [53–55], and atom-array optical clocks [7,45,46]—into one platform will enable new methods to engineer, measure, and distribute many-body entangled states with single-qubit control. For example, the optical cavity can mediate nondemolition measurements [87,88] that could augment the Rydberg-based quantum computing platform. Conversely, Rydberg-mediated interacti-
ons and single-atom control may help to enhance and distribute spin-squeezed states of optical clock qubits generated via the cavity [49,80,81]. Finally, the marriage of short-ranged (Rydberg-mediated) and inﬁnite-ranged (cavity-mediated) interactions combined with the possibility of atom-selective control and readout will enable new opportunities for the study of quantum many-body phenomena such as the simulation of magnetism [41] and chaotic dynamics [51] in regimes not readily accessible to cla-
ssical computers.

ACKNOWLEDGMENTS We thank Michael Bishof and Liang Jiang for stimulating discussions and Johannes Borregaard for carefully reading this manuscript. We acknowledge funding from the NSF QLCI for Hybrid Quantum Architectures and Networks (NSF Award No. 2016136), the NSF PHY Division (NSF Award No. 2112663), and the NSF Quantum Interconnects Challenges for Transformational Advances in Quantum Systems (NSF Award No. 2137642).
APPENDIX A: QUANTUM REPEATER AND PURIFICATION PROTOCOLS
The repeater protocol [4,23] is based on creating two Bell pairs, where end users Alice and Bob each have half of one pair and the intermediate node has half of both. Then, the combination of a deterministic two-qubit controlled-NOT gate (CNOT), a single-qubit Hadamard gate, and the qubit measurements swaps the entanglement out of the two qubits at the intermediate node and leaves Alice’s and Bob’s halves entangled in a Bell pair with no quantum information remaining at the intermediate node [see -
Fig. 7(a)].
The puriﬁcation protocol [31–33] is based on creating two Bell pairs, where end users Alice and Bob each have half of both pairs. A CNOT gate and a single-qubit measurement at both nodes leave only one Bell pair between Alice and Bob that has higher ﬁdelity than either initial pair. No quantum information remains in the other qubit pair [see Fig. 7(b)]. This protocol could be extended to the case of intermediate nodes and could be combined with the repeater protocol. We note that all necessary inn-
er-node single- and two-qubit
FIG. 7. Schematic overview of quantum (a) repeater and (b) puriﬁcation protocols. See text for details. H, Hadamard gate.

043154-7

HUIE, MENON, BERNIEN, AND COVEY

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

operations and measurements for these protocols have been demonstrated in atomic arrays [10,11,47].

APPENDIX B: ATOMIC AND CAVITY QED PARAMETERS

1. Notes on the Yb telecommunication-band transitions

We begin this section by compiling a list of references

for the Yb 3PJ ↔ 3DJ transitions [89–97]. In the literature,

there appears to be universal agreement that the decay rate

from 3D2 to 3P1 (the transition of interest in this paper) is

= 3 D2 →3 P1 is 3D2→3P2

2× =2

106 s−1 and the × 105 s−1. This

decay rate from 3D2 to 3P2 corresponds to a branching

ratio of the desired decay path of 0.87.

However, there is disagreement about the decay rates

of 3D1 to 3PJ . In particular, the literature is split be-

tween [89,90]

{

3 D1
and

→3P0 , {200,

, 3 D1 →3 P1 10, 3} ×

3 D1
104

→ s−31P2

} = {200, [91]. We

100, 3} × believe

104 that

Ref. [91]—which came after Refs. [89,90]—introduced an

error that has since propagated in the community. References

[13,43,94,96] have propagated this error, though it has not

affected their arguments or conclusions, while Refs. [97] and

others use the correct values.

2. Cavity QED parameters

We consider a cavity characterized by two parameters: the radius of curvature R = 5 mm of its two mirrors and the length
= 9.75 mm between them. For these parameters, the cavity

is near concentric and satisﬁes the stability condition 0 G2 1, where G = 1 − /R is the cavity stability parameter.

We also characterize the principal mode of the cavity by its

waist w0, Rayleigh range z0, and volume Vm using

w0 =

λ3 D2 →3 P1

2 1+G

1/4
,

2π

1−G

(B1)

z0

=

π w02 , λ3 D2 →3 P1

Vm =

π 4

w02

,

(B2) (B3)

where λ3D2→3P1 is the wavelength of the targeted telecommunication transition, 1480 nm. We also assume the cavity to have intrinsic ﬁnesse Fint = 105, transmission linewidth κint = 2π × c/2 Fint ≈ 2π × 154 kHz, and free spectral range FSR = c/2 ≈ 15.4 GHz. For a chosen extrinsic ﬁnesse Fext = 5 × 104 (κext ≈ 2π × 307 kHz), this gives a photon collection efﬁciency of ηcoll ≈ 1 − Fext/Fint = 0.5. Now we
consider the atom-cavity interaction parameters essential to
the proposed scheme. The electric dipole matrix element D
for our chosen transition is

D=

3π ε0h¯c3 ω3
3 D2 →3 P1

3 D2 →3 P1

1/2

JJ1

×

(2F + 1)(2J + 1) ,

F FI

(B4)

where ω3D2→3P1 ≈ 2π × 202 THz,

3D2→3P1 = 2π ×

318 kHz, and the term in braces is the Wigner 6- j symbol,

giving D ≈ 1.96 × 10−29 C m. Using this, the coherent

coupling to the cavity mode is

g34

=

D h¯

h¯ ω3D2→3P1 2ε0Vm

1/2
≈ 2π × 1.53 MHz,

(B5)

which gives cooperativity C = g234/κ 3D2→3P1 ≈ 16.0 with κ = κint + κext. Then the probability of emitting a telecommunication photon into the cavity mode is Pcavity = C/(C + 1) ≈ 0.941, and hence the probability of extracting this photon for
use in our scheme is ηextract = Pcavityηcoll ≈ 0.471.

APPENDIX C: FOUR-WAVE MIXING
1. Numerical model and results
The atom–telecommunication-photon entanglement generation protocol is similar to the four-level scheme previously shown for rubidium and cesium atoms coupled to nanophotonic cavities [14]. The protocol starts with in√itializing an atom in the superposition state (|0 a + |1 a)/ 2. This is followed by a pulse sequence that takes the atom through states |1 → |4 before returning back to the initial state |1 . First, pulse 12 transfers the population from state |1 to |2 . Then the population is excited-
 to state |3 by light ﬁeld
23, which is always on. The population that reaches the state |3 is preferentially transferred to state |4 via the emission of a telecommunication photon into the cavity, which is resonant with the |3 ↔ |4 transition. A second pulse,
41, then transfers the population in the state |4 back to state |1 . The spontaneous decay from excited states (see Fig. 8) limits the coherent completion of this cycle and leads to inﬁdelities. Here, we deﬁne the atom-photon entanglement ﬁdelity as the probability of ﬁnding the atom in the qubit state |1 after the round trip through states |1 → |4 , given the heralding of the telecommunication photon. For simulation purposes, all decays are assumed to accumulate in a dump level that does not cont-
ribute to the coherent evolution.

FIG. 8. Relevant levels of four-wave mixing. States |0 to |4
were considered for the simulation to estimate the success proba-
bility and ﬁdelity. During the excitation cycle, the populations in the levels |2 and |4 decay to state 1S0 with a decay rate γ 1S0 = 2π × 182 kHz, and the population in state |3 decays to state 3P1 and 3P2 with decay rate γ 3P1 = 2π × 318 kHz and γ 3P2 = 2π × 48 kHz, respectively. For simulation purposes, all decays are assumed to
accumulate in a dump level that does not contribute to the coherent
evolution.

043154-8

MULTIPLEXED TELECOMMUNICATION-BAND QUANTUM …

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

The requirement of heralding makes this scheme robust

to any atomic decays preceding the photon emission into the cavity and limits the inﬁdelities to decays from the state |4 .

The optimum parameters for the given pulse sequence are

extracted using a two-step optimization process [14]. The ﬁrst step optimizes the Rabi frequencies 12, 23 and the pulse width of 12 to maximize the population transfer to the state |4 , and the second step optimizes the timing, pulse width,

and Rabi frequency of 41. In both the schemes below, the
success probability accounts for the probability P|1 for the initial population in |1 to emit a telecommunication photon and return to |1 , as well as the probability for the emitted

photon to couple to the external coupling mode of the cavity;

that is,

Success

probability

=

κext κint

P|1

.

(C1)

a. Resonant case

In the ﬁrst case, which we call the “resonant case,” we have the cavity on resonant with the |3 ↔ |4 transition. In this case the corresponding Hamiltonian in an appropriately chosen rotating frame is

Hˆ = 12(t )|1 2| + 12|2 3| + g34aˆ|3 4|

+ 41(t )|4 1| + H.c.

(C2)

In this resonant excitation scheme, the population transfer to |4 occurs over a time scale that is inversely proportional to atom-cavity coupling g34, and for efﬁcient completion, the second pulse 41 has to be timed to match. As population accumulates in |4 before the second pulse 41, the probability of spontaneous emission increases. To minimize the contribution to inﬁdelity, we transfer the population from |4 at earlier times, trading ﬁdelity gains for reduced efﬁciency, due to incomplete popula-
tion transfer. Here, we achieve this by applying 41 earlier than what is optimal for the complete population transfer shown in Fig. 3(c). The increase in ﬁdelity and corresponding reduction in the efﬁciency are shown in Fig. 3(d). Fixed Gaussian pulses with full widths at half maximum 116 and 58 ns were used for 12 and 41, respectively. Here, the achieved ﬁdelities were conditioned on heralding entanglement using the photons that were emitted before the coherent transfer back to the initial qubit -
state by
41. Detection of photons emitted from the cavity after the completion of 41 leads to additional inﬁdelities.

b. Detuned case

High-ﬁdelity atom–telecommunication-photon entanglement can also be obtained by using an off-resonant scheme, where the population transfer to |4 is minimized, since decay from this state is the dominant error in the heralding protocol. In this case the Hamiltonian considered is

Hˆ = 12(t )|1 2| + 23|2 3| + g34aˆ|3 4| + 41(t )|4 1|

+ δ|4 4| + H.c.

(C3)

In this scheme, the optimal ﬁdelities were also found by
a two-step optimization procedure. For a given detuning, the ﬁrst step maximized the population transfer to |3 by optimizing the Rabi frequencies 12, 23 and the pulse width

(a)

(b)

FIG. 9. Detuned four-wave-mixing scheme. (a) Time evolution of the coherent population in the states |1 to |4 and the photon emitted from the cavity through external coupling parameter κext. The top half of the plot shows pulses 12 and 41. In the simulation, the ﬁrst pulse is assumed to have a constant length of 65 ns, and the length of the second pulse is optimized for each value of the detuning. Here, both pulses have a 20-ns ramp time. (b) Scaling of ﬁdelity and success probability with detunin-
g. Larger detuning leads to lower occupation and decay from state |4 at the cost of lower coherent population transfer back to state |1 .
of 12, and the second step optimizes the duration and Rabi frequency of 41 to maximize the population transfer from |3 to |1 through the two-photon process. Here, we ﬁx the pulse length of 12 to 65 ns including a linear ramp time of 20 ns. The length of 41 varies from 300 to 500 ns according to the varied detuning. Similar to the resonant case we again ﬁnd that higher ﬁdelities can be obtained at the cost of lower success probabilities [see Fig. 9(b)]. Incomplete population transfer in both scheme-
s will lead to some residual population being left behind in the states that are coupled to the cavity, which can lead to photon emission even after the end of the pulse sequence. Detection of these photons will add to inﬁdelity. Overall success probabilities were found to be greater for the resonant scheme that is used in the main text for our calculations.
2. Phase-matching considerations
We consider the importance of phase matching and momentum conservation of the four light ﬁelds that have overlapping amplitude during our four-wave scheme. We perform a qualitative estimate based on classical four-wavemixing analysis in which an outgoing wave is produced by the interaction of three incoming waves with a nonlinear medium [98]. The outgoing ﬁeld intensity is proportional to a phase-matching factor whose argument is ξ = k × L, where
k = |k12 + k23 − k34 − k41| and L is the effective overlap length of the four ﬁelds which in practice is determined by their size or the size of the medium (whichever is smaller). The phase-matching factor is equal to 1 when ξ = 0 and decreases for ξ 0.
For the beam conﬁguration shown in Fig. 3(b) assuming a 180◦ angle between k12 and k41 and a 45◦ a√ngle between k34 and k23, we estimate that k ≈ 2π /(1500 2) nm. The

043154-9

HUIE, MENON, BERNIEN, AND COVEY

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

TABLE I. Rates for constituent steps in the single-link multiplexing protocol. Exact values for rates composing the total rate at which entanglement between two adjacent network nodes link can be attempted [Eq. (D4)] in terms of the per-node atom number N and distance in ﬁber between nodes L. The listed steps correspond chronologically to the colored time windows shown in Figs. 2(a) and 2(b).

Step

Symbol

Description

Global?

Rate (kHz)

1

init

Optical pumping and cooling

Global

10

2

π /2

π /2 pulse

Global

100

3

FWM

FWM protocol

One-by-one

200/N

4

π

π pulse

Global

50

5

FWM

FWM protocol

One-by-one (same order)

200/N

6

comm (L )

Heralded entanglement

Global (atom-unique time stamp)

c/2L

relevant length scale of the single-atom case should be the size of the atomic wave function in the optical trap, which we assume is Lsingle ≈ 50 nm. Hence we estimate that ξ < 1 for the case we consider here, so phase matching of the four light ﬁelds is not crucial. We therefore neglect it in our analysis, but choose a beam geometry to easily minimize k. However, perfect phase matching can be achieved by injecting the pump ﬁeld 23 through the cavity. By careful engineering of the cavity free spec-
tral range and with a judicious choice of magnetic ﬁeld, it is possible to overlap the required frequency for 23 with a cavity resonance, thereby creating a perfectly phase-matched condition.
For an atomic ensemble or a solid-state spin ensemble, this factor would be much higher. Assuming L = 10 μm with the same beam geometry, ξ 10. Hence phase matching is often crucial in ensemble and crystalline environments.

APPENDIX D: ENTANGLEMENT DISTRIBUTION
CALCULATIONS
We start by considering the rate link at which entanglement between two adjacent network nodes can be attempted. This rate comprises all components shown in Fig. 2. The time to cool and initialize all atoms at the nodes (shown in blue in Fig. 2), performed globally and in parallel over the arrays of atoms at both nodes, is assumed to be 1/ init = 1/10 kHz. This is based on the maximum scattering rate from the 3P1 ( 3P1 ≈ 90 kHz) and an assumption about the number of photons required for cooling an-
d optical pumping. The total qubit pulse time comprising globally applied π /2 and π pulses (all time windows shown in green in Fig. 2) is 1/ π/2 + 1/ π = 3/ π/2 = 3/100 kHz, based on an assumed Rabi frequency of 50 kHz via stimulated Raman pulses between the nuclear spin states. The total four-wave-mixing time (shown in orange in Fig. 2) is 2N/ FWM = 2N/200 kHz for all N atoms. The fourwave-mixing rate is determined by the time between when the sequence begins and when the photon leaves the cavit-
y with high probability [see Fig. 3(c)]. Finally, the time to transmit classical signals through ﬁbers and to herald entanglement (shown in purple in Fig. 2) is 1/ comm(L) = c/2L ≈ 108 m/s/L.
Using these quantities, link is

link(L, N ) =

1+
init

3+
π /2

2N +
FWM

1

−1
.

comm (L )

(D1)

The exact values used for these rates are summarized in Table I. We note that the rate between the time bins for cases with a large array of atoms can fall to the kilohertz level and it is necessary to consider possible phase ﬂuctuations that might occur between the time bins. Phase shifts due to path length ﬂuctuations that are induced by thermal and mechanical effects occur with sub-kilohertz bandwidths. Moreover, ﬁber phase noise cancellation [99] could be actively applied to these ﬁber paths w-
ith an additional, classical, cw ﬁeld. The modulator for this phase stabilization loop can be shared with the single photon pulses to noninvasively provide phase stabilization for the quantum interference process. This technique is quite commonplace; the two ﬁelds can be combined with dichroic mirrors if their wavelengths are slightly different, and the modulator can operate with <10% loss.
The probability p of successfully creating a single Bell pair between any given two atoms at adjacent nodes similarly comprises several components;

p(L) =

1 2

2ηF2WM ηﬁ2ber ηd2et ηatt(L).

(D2)

Here, ηFWM ≈ 0.364 is the total success probability of the four-wave-mixing scheme under the condition shown in Fig. 3(d), ηﬁber = ηdet = 0.9 are the efﬁciencies at which photons may be collected by their respective ﬁbers and subsequently detected, and ηatt(L) = exp(−L/λatt) is the attenuation of the telecommunication photons (λatt = 20.7 km at 1480 nm [30]). The two leading factors of 1/2 are due to the overlap between the Bell-state and computational bases
and an assumed complete loss of photon polarization in the
long-distance ﬁbers. Note that we have assumed polarizers
after the ﬁbers to ensure indistinguishably of the photons prior
to interfering them. It follows that the total probability Pmux of creating at least B Bell pairs between adjacent nodes through
multiplexing is

N
Pmux(L, N, B) =

N pk (1 − p)N−k k

k=B

(D3)

for N B and zero otherwise. To calculate the rate mux at which these B or more Bell
pairs can be formed between atoms at adjacent network nodes, we consider a total number of times M that the entire procedure is attempted. While M is in principle unbounded, it is realistic to choose M such that the mean number of successful attempts MPmux(L, N, B) to create B Bell pairs is 1, and hence the average success rate is that at which these M at-

043154-10

MULTIPLEXED TELECOMMUNICATION-BAND QUANTUM …

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

repeated for 2m−1 links in group 2 (for N − 1 atoms at each node), and the two maxima were added to ﬁnd the total time required for the network. The mean of Q = 5000 such trials was then inverted to calculate the average rate for each value of m, N, and L shown. For the multi-Bell case shown in Fig. 6(b), the single single-link procedure described in the previous paragraph was repeated for B Bell pairs following the “ladder” scheme (see Sec. VI), the total time for B linking attempts was averaged -
over Q = 5000 trials, and the average was inverted for each value of N and B shown.

FIG. 10. Comparison of simulation with Eq. (D3). The simulated mean number of attempts M required for the formation of one Bell pair across a single link for various N at L = 100 km (green circles), averaged over 10 000 trials, is compared in the main plot with the expected analytically derived result M = 1/Pmux (black dashed line). The error bars show the one-sided rms deviation from the mean. The inset shows the distribution over values of M associated with the N = 10 data point along with the m-
ean of the distribution (gray dotted line) and analytical result (black dashed line).
tempts can be performed,
mux(L, N, B) = link(L, N ) × Pmux(L, N, B). (D4)
Generalizing to the network-level procedure, the twogroup structure (see Sec. V) requires an extra consideration. The proposed protocol requires that entanglements in group 1 be complete before those in group 2 can be attempted, which precludes the derivation of an analytical formula to describe the expected rates; hence we turn to numerical simulation to calculate the results shown in Figs. 5 and 6. We use a simple simulation scheme based on stochastically sampling the probability distribution ov-
er M attempts required for the formation of Bell pairs across each network link in accordance with Eq. (D3), which gives M = 1/Pmux for one success across a link for given N, L, and B. For our simulations, M—which follows a geometric distribution—is sampled by counting the number of random events required for a single success, which occurs with probability Pmux. The resulting averages of these counts over 10 000 trials are in good agreement with the expected value obtained using Eq. (D3), shown in-
 Fig. 10. The time taken for each linking attempt is then M/ link, and the mean of a set of Q such trials can be inverted to ﬁnd the average entanglement rate. It was found that this scheme could be used for as few as Q = 1000 trials to faithfully reproduce Fig. 4.
At the network level, the results shown in Figs. 5 and 6(a) were calculated following the two-group protocol as described. The single-link linking time M/ link was singly sampled for each of the 2m−1 network links in group 1, from which the maximum was selected. This sampling was

APPENDIX E: PHOTON INDISTINGUISHABILITY
CONSIDERATIONS
In Sec. III B and Appendix C we analyze the atom-photon entanglement protocol and estimate the ﬁdelity of the atomphoton and atom-atom Bell states. We now brieﬂy discuss photon indistinguishability and photon-photon interference contrast, which play a crucial role in generating atom-atom entanglement from two atom-photon pairs. We deﬁne the photon-photon interference contrast as an overlap integral of the two photons’ wave functions, which can be factorized into (1) a spatial function, (2) a tempo-
ral function, and (3) an electric ﬁeld function describing the polarization vector. Accordingly, we deﬁne the two-photon overlap ﬁdelity Fp-p ≡ FRFTFχ as the product of (1) a spatial overlap ﬁdelity FR, (2) a temporal overlap ﬁdelity FT, and (3) a polarization overlap ﬁdelity Fχ .
(1) The temporal proﬁle of the photon—assuming no dispersion and perfect relative timing—is shown in Fig. 3(c). The latter assumption is reasonable at this relatively low, approximately megahertz bandwidth. This temporal proﬁle is determined by the cavity linewidth, which we believe can be replicated between cavities at the several percent level. Hence we assume FT 0.97.
(2) Since we use single-mode optical ﬁber, we assume that imperfections in the spatial wave function are small, where M2 = 0.99 of the TEM0,0 mode should be readily available with ﬁber outcouplers. We assume FR ≈ 0.992 = 0.98.
(3) The polarization purity is determined by the extinction of polarizing beamsplitters after each ﬁber and before the 50:50 beamsplitter. We assume <1/1000 control of the polarization with Glan-Thompson polarizers, such that the polarization overlap will be limited only by angular alignment errors. We believe that Fχ ≈ 0.99 is a realistic assumption.
To estimate the total atom-atom Bell-state ﬁdelity, we include the atom-photon Bell state from the main text Fatom-photon ≈ 0.98 as well as the two-photon overlap ﬁdelity Fp-p ≈ 0.94: Fatom-atom ≈ Fa2tom-photonFp-p 0.90. Further ﬁdelity details and their consequences are outside the scope of this work and are not speciﬁc to our proposed architecture. Moreover, this atom-atom Bell-state ﬁdelity can be enhanced with entanglement puriﬁcation by consuming extra Bell pairs as discussed in the text and -
in Appendix A—a technique that highlights the power of our approach.

[1] J. I. Cirac, P. Zoller, H. J. Kimble, and H. Mabuchi, Quantum State Transfer and Entanglement Distribution among Distant

Nodes in a Quantum Network, Phys. Rev. Lett. 78, 3221 (1997).

043154-11

HUIE, MENON, BERNIEN, AND COVEY

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

[2] S. Wehner, D. Elkouss, and R. Hanson, Quantum internet: A vision for the road ahead, Science 362, eaam9288 (2018).
[3] H. J. Kimble, The quantum internet, Nature (London) 453, 1023 (2008).
[4] S. Pirandola, U. L. Andersen, L. Banchi, M. Berta, D. Bunandar, R. Colbeck, D. Englund, T. Gehring, C. Lupo, C. Ottaviani, J. L. Pereira, M. Razavi, J. Shamsul Shaari, M. Tomamichel, V. C. Usenko, G. Vallone, P. Villoresi, and P. Wallden, Advances in quantum cryptography, Adv. Opt. Photonics 12, 1012 (2020).
[5] L. Jiang, J. M. Taylor, A. S. Sørensen, and M. D. Lukin, Distributed quantum computation based on small quantum registers, Phys. Rev. A 76, 062323 (2007).
[6] P. Kómár, E. M. Kessler, M. Bishof, L. Jiang, A. S. Sørensen, J. Ye, and M. D. Lukin, A quantum network of clocks, Nat. Phys. 10, 582 (2014).
[7] A. W. Young, W. J. Eckner, W. R. Milner, D. Kedar, M. A. Norcia, E. Oelker, N. Schine, J. Ye, and A. M. Kaufman, Halfminute-scale atomic coherence and high relative stability in a tweezer clock, Nature (London) 588, 408 (2020).
[8] S. Ebadi, T. T. Wang, H. Levine, A. Keesling, G. Semeghini, A. Omran, D. Bluvstein, R. Samajdar, H. Pichler, W. W. Ho, S. Choi, S. Sachdev, M. Greiner, V. Vuletic´, and M. D. Lukin, Quantum phases of matter on a 256-atom programmable quantum simulator, Nature (London) 595, 227 (2021).
[9] M. Saffman, T. G. Walker, and K. Mølmer, Quantum information with Rydberg atoms, Rev. Mod. Phys. 82, 2313 (2010).
[10] H. Levine, A. Keesling, G. Semeghini, A. Omran, T. T. Wang, S. Ebadi, H. Bernien, M. Greiner, V. Vuletic´, H. Pichler, and M. D. Lukin, Parallel Implementation of High-Fidelity Multiqubit Gates with Neutral Atoms, Phys. Rev. Lett. 123, 170503 (2019).
[11] T. M. Graham, M. Kwon, B. Grinkemeyer, Z. Marra, X. Jiang, M. T. Lichtman, Y. Sun, M. Ebert, and M. Saffman, RydbergMediated Entanglement in a Two-Dimensional Neutral Atom Qubit Array, Phys. Rev. Lett. 123, 230501 (2019).
[12] M. Uphoff, M. Brekenfeld, G. Rempe, and S. Ritter, An integrated quantum repeater at telecom wavelength with single atoms in optical ﬁber cavities, Appl. Phys. B: Lasers Opt. 122, 46 (2016).
[13] J. P. Covey, A. Sipahigil, S. Szoke, N. Sinclair, M. Endres, and O. Painter, Telecom-Band Quantum Optics with Ytterbium Atoms and Silicon Nanophotonics, Phys. Rev. Appl. 11, 034044 (2019).
[14] S. G. Menon, K. Singh, J. Borregaard, and H. Bernien, Nanophotonic quantum network node with neutral atoms and an integrated telecom interface, New J. Phys. 22, 073033 (2020).
[15] A. Reiserer and G. Rempe, Cavity-based quantum networks with single atoms and optical photons, Rev. Mod. Phys. 87, 1379 (2015).
[16] S. Ritter, C. Nölleke, C. Hahn, A. Reiserer, A. Neuzner, M. Uphoff, M. Mücke, E. Figueroa, J. Bochmann, and G. Rempe, An elementary quantum network of single atoms in optical cavities, Nature (London) 484, 195 (2012).
[17] J. Hofmann, M. Krug, N. Ortegel, L. Gérard, M. Weber, W. Rosenfeld, and H. Weinfurter, Heralded entanglement between widely separated atoms, Science 337, 72 (2012).
[18] P. Samutpraphoot, T. Đorđevic´, P. L. Ocola, H. Bernien, C. Senko, V. Vuletic´, and M. D. Lukin, Strong Coupling of Two In-

dividually Controlled Atoms via a Nanophotonic Cavity, Phys. Rev. Lett. 124, 063602 (2020). [19] S. Langenfeld, S. Welte, L. Hartung, S. Daiss, P. Thomas, O. Morin, E. Distante, and G. Rempe, Quantum Teleportation between Remote Qubit Memories with Only a Single Photon as a Resource, Phys. Rev. Lett. 126, 130502 (2021). [20] S. Langenfeld, P. Thomas, O. Morin, and G. Rempe, Quantum Repeater Node Demonstrating Unconditionally Secure Key Distribution, Phys. Rev. Lett. 126, 230506 (2021). [21] S. Dai-
ss, S. Langenfeld, S. Welte, E. Distante, P. Thomas, L. Hartung, O. Morin, and G. Rempe, A quantum-logic gate between distant quantum-network modules, Science 371, 614 (2021). [22] T. Dordevic´, P. Samutpraphoot, P. L. Ocola, H. Bernien, B. Grinkemeyer, I. Dimitrova, V. Vuletic´, and M. D. Lukin, Entanglement transport and a nanophotonic interface for atoms in optical tweezers, Science 373, 1511 (2021). [23] L.-M. Duan, M. D. Lukin, J. I. Cirac, and P. Zoller, Longdistance quantum communication wi-
th atomic ensembles and linear optics, Nature (London) 414, 413 (2001). [24] W. Pfaff, T. H. Taminiau, L. Robledo, H. Bernien, M. Markham, D. J. Twitchen, and R. Hanson, Demonstration of entanglementby-measurement of solid-state qubits, Nat. Phys. 9, 29 (2013). [25] T. M. Graham, J. T. Barreiro, M. Mohseni, and P. G. Kwiat, Hyperentanglement-Enabled Direct Characterization of Quantum Dynamics, Phys. Rev. Lett. 110, 060404 (2013). [26] N. Sinclair, E. Saglamyurek, H. Mallahzadeh, J. A. Slater, M. G-
eorge, R. Ricken, M. P. Hedges, D. Oblak, C. Simon, W. Sohler, and W. Tittel, Spectral Multiplexing for Scalable Quantum Photonics Using an Atomic Frequency Comb Quantum Memory and Feed-Forward Control, Phys. Rev. Lett. 113, 053603 (2014). [27] F. Kaneda, B. G. Christensen, J. J. Wong, H. S. Park, K. T. McCusker, and P. G. Kwiat, Time-multiplexed heralded singlephoton source, Optica 2, 1010 (2015). [28] T. Zhong, J. M. Kindem, J. G. Bartholomew, J. Rochman, I. Craiciu, E. Miyazono, M. Bettinelli, -
E. Cavalli, V. Verma, S. W. Nam, F. Marsili, M. D. Shaw, A. D. Beyer, and A. Faraon, Nanophotonic rare-earth quantum memory with optically controlled retrieval, Science 357, 1392 (2017). [29] S. Wengerowsky, S. K. Joshi, F. Steinlechner, H. Hübel, and R. Ursin, An entanglement-based wavelength-multiplexed quantum communication network, Nature (London) 564, 225 (2018). [30] Corning SMF-28 Ultra Optical Fiber, Corning SMF-28 Ultra Optical Fiber, https://www.corning.com/. [31] W. Dür and H.-J. Briege-
l, Entanglement Puriﬁcation for Quantum Computation, Phys. Rev. Lett. 90, 067901 (2003). [32] C. H. Bennett, G. Brassard, S. Popescu, B. Schumacher, J. A. Smolin, and W. K. Wootters, Puriﬁcation of Noisy Entanglement and Faithful Teleportation via Noisy Channels, Phys. Rev. Lett. 76, 722 (1996). [33] N. Kalb, A. A. Reiserer, P. C. Humphreys, J. J. W. Bakermans, S. J. Kamerling, N. H. Nickerson, S. C. Benjamin, D. J. Twitchen, M. Markham, and R. Hanson, Entanglement distillation between solid-state-
 quantum network nodes, Science 356, 928 (2017). [34] M. Endres, H. Bernien, A. Keesling, H. Levine, E. R. Anschuetz, A. Krajenbrink, C. Senko, V. Vuletic, M. Greiner,

043154-12

MULTIPLEXED TELECOMMUNICATION-BAND QUANTUM …

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

and M. D. Lukin, Atom-by-atom assembly of defect-free onedimensional cold atom arrays, Science 354, 1024 (2016). [35] D. Barredo, S. de Léséleuc, V. Lienhard, T. Lahaye, and A. Browaeys, An atom-by-atom assembler of defect-free arbitrary two-dimensional atomic arrays, Science 354, 1021 (2016). [36] A. Cooper, J. P. Covey, I. S. Madjarov, S. G. Porsev, M. S. Safronova, and M. Endres, Alkaline-Earth Atoms in Optical Tweezers, Phys. Rev. X 8, 041055 (2018). [37] M. A. Norcia, A. W. Young, and A. M. K-
aufman, Microscopic Control and Detection of Ultracold Strontium in OpticalTweezer Arrays, Phys. Rev. X 8, 041054 (2018). [38] S. Saskin, J. T. Wilson, B. Grinkemeyer, and J. D. Thompson, Narrow-Line Cooling and Imaging of Ytterbium Atoms in an Optical Tweezer Array, Phys. Rev. Lett. 122, 143002 (2019). [39] B. Casabone, A. Stute, K. Friebe, B. Brandstätter, K. Schüppert, R. Blatt, and T. E. Northup, Heralded Entanglement of Two Ions in an Optical Cavity, Phys. Rev. Lett. 111, 100505 (2013). [40] -
C. H. Nguyen, A. N. Utama, N. Lewty, and C. Kurtsiefer, Operating a near-concentric cavity at the last stable resonance, Phys. Rev. A 98, 063833 (2018). [41] E. J. Davis, G. Bentsen, L. Homeier, T. Li, and M. H. SchleierSmith, Photon-Mediated Spin-Exchange Dynamics of Spin-1 Atoms, Phys. Rev. Lett. 122, 010405 (2019). [42] E. Deist, Y.-H. Lu, J. A. Gerber, J. Zeiher, and D. M. Stamper-Kurn, Super-resolution microscopy of optical ﬁelds using tweezer-trapped single atoms, arXiv:2109.08314. [43] J. P-
. Covey, A. Sipahigil, and M. Saffman, Microwave-tooptical conversion via four-wave mixing in a cold ytterbium ensemble, Phys. Rev. A 100, 012307 (2019). [44] J. P. Covey, I. S. Madjarov, A. Cooper, and M. Endres, 2000Times Repeated Imaging of Strontium Atoms in Clock-Magic Tweezer Arrays, Phys. Rev. Lett. 122, 173201 (2019). [45] M. A. Norcia, A. W. Young, W. J. Eckner, E. Oelker, J. Ye, and A. M. Kaufman, Seconds-scale coherence on an optical clock transition in a tweezer array, Science 366, 93 -
(2019). [46] I. S. Madjarov, A. Cooper, A. L. Shaw, J. P. Covey, V. Schkolnik, T. H. Yoon, J. R. Williams, and M. Endres, An Atomic-Array Optical Clock with Single-Atom Readout, Phys. Rev. X 9, 041052 (2019). [47] I. S. Madjarov, J. P. Covey, A. L. Shaw, J. Choi, A. Kale, A. Cooper, H. Pichler, V. Schkolnik, J. R. Williams, and M. Endres, High-ﬁdelity entanglement and detection of alkalineearth Rydberg atoms, Nat. Phys. 16, 857 (2020). [48] J. Wilson, S. Saskin, Y. Meng, S. Ma, R. Dilip, A. Burger-
s, and J. Thompson, Trapped arrays of alkaline earth Rydberg atoms in optical tweezers, arXiv:1912.08754. [49] E. S. Polzik and J. Ye, Entanglement and spin squeezing in a network of distant optical lattice clocks, Phys. Rev. A 93, 021404(R) (2016). [50] H. Bernien, S. Schwartz, A. Keesling, H. Levine, A. Omran, H. Pichler, S. Choi, A. S. Zibrov, M. Endres, M. Greiner, V. Vuletic´, and M. D. Lukin, Probing many-body dynamics on a 51-atom quantum simulator, Nature (London) 551, 579 (2017). [51] J. -
Choi, A. L. Shaw, I. S. Madjarov, X. Xie, J. P. Covey, J. S. Cotler, D. K. Mark, H.-Y. Huang, A. Kale, H. Pichler, F. G. S. L. Brandão, S. Choi, and M. Endres, Emergent Randomness and Benchmarking from Many-Body Quantum Chaos, arXiv:2103.03535. [52] A. Browaeys and T. Lahaye, Many-body physics with individually controlled Rydberg atoms, Nat. Phys. 16, 132 (2020).

[53] J. McKeever, A. Boca, A. D. Boozer, J. R. Buck, and H. J. Kimble, Experimental realization of a one-atom laser in the regime of strong coupling, Nature (London) 425, 268 (2003).
[54] K. M. Birnbaum, A. Boca, R. Miller, A. D. Boozer, T. E. Northup, and H. J. Kimble, Photon blockade in an optical cavity with one trapped atom, Nature (London) 436, 87 (2005).
[55] T. G. Tiecke, J. D. Thompson, N. P. de Leon, L. R. Liu, V. Vuletic´, and M. D. Lukin, Nanophotonic quantum phase switch with a single atom, Nature (London) 508, 241 (2014).
[56] S. D. Barrett and P. Kok, Efﬁcient high-ﬁdelity quantum computation using matter qubits and linear optics, Phys. Rev. A 71, 060310(R) (2005).
[57] H. Bernien, B. Hensen, W. Pfaff, G. Koolstra, M. S. Blok, L. Robledo, T. H. Taminiau, M. Markham, D. J. Twitchen, L. Childress, and R. Hanson, Heralded entanglement between solid-state qubits separated by three metres, Nature (London) 497, 86 (2013).
[58] D. Hunger, T. Steinmetz, Y. Colombe, C. Deutsch, T. W. Hänsch, and J. Reichel, A ﬁber Fabry-Perot cavity with high ﬁnesse, New J. Phys. 12, 065038 (2010).
[59] F. Haas, J. Volz, R. Gehr, J. Reichel, and J. Esteve, Entangled states of more than 40 atoms in an optical ﬁber cavity, Science 344, 180 (2014).
[60] M. Brekenfeld, D. Niemietz, J. D. Christesen, and G. Rempe, A quantum network node with crossed optical ﬁbre cavities, Nat. Phys. 16, 647 (2020).
[61] J. A. Sedlacek, E. Kim, S. T. Rittenhouse, P. F. Weck, H. R. Sadeghpour, and J. P. Shaffer, Electric Field Cancellation on Quartz by Rb Adsorbate-Induced Negative Electron Afﬁnity, Phys. Rev. Lett. 116, 133201 (2016).
[62] T. Thiele, J. Deiglmayr, M. Stammeier, J.-A. Agner, H. Schmutz, F. Merkt, and A. Wallraff, Imaging electric ﬁelds in the vicinity of cryogenic surfaces using Rydberg atoms, Phys. Rev. A 92, 063425 (2015).
[63] M. Teller, D. A. Fioretto, P. C. Holz, P. Schindler, V. Messerer, K. Schüppert, Y. Zou, R. Blatt, J. Chiaverini, J. Sage, and T. E. Northup, Heating of a Trapped Ion Induced by Dielectric Materials, Phys. Rev. Lett. 126, 230505 (2021).
[64] A. Kawasaki, B. Braverman, E. Pedrozo-Peñaﬁel, C. Shu, S. Colombo, Z. Li, Ö. Özel, W. Chen, L. Salvi, A. Heinz, D. Levonian, D. Akamatsu, Y. Xiao, and V. Vuletic´, Geometrically asymmetric optical cavity for strong atom-photon coupling, Phys. Rev. A 99, 013437 (2019).
[65] J. Ye, H. J. Kimble, and H. Katori, Quantum state engineering and precision metrology using state-insensitive light traps, Science 320, 1734 (2008).
[66] S. A. Moses, J. P. Covey, M. T. Miecnikowski, B. Yan, B. Gadway, J. Ye, and D. S. Jin, Creation of a low-entropy quantum gas of polar molecules in an optical lattice, Science 350, 659 (2015).
[67] J. P. Covey, S. A. Moses, M. Gärttner, A. Safavi-Naini, M. T. Miecnikowski, Z. Fu, J. Schachenmayer, P. S. Julienne, A. M. Rey, D. S. Jin, and J. Ye, Doublon dynamics and polar molecule production in an optical lattice, Nat. Commun. 7, 11279 (2016).
[68] D. Hucul, I. V. Inlek, G. Vittorini, C. Crocker, S. Debnath, S. M. Clark, and C. Monroe, Modular entanglement of atomic qubits using photons and phonons, Nat. Phys. 11, 37 (2015).

043154-13

HUIE, MENON, BERNIEN, AND COVEY

PHYSICAL REVIEW RESEARCH 3, 043154 (2021)

[69] B. Hensen, H. Bernien, A. E. Dréau, A. Reiserer, N. Kalb, M. S. Blok, J. Ruitenberg, R. F. L. Vermeulen, R. N. Schouten, C. Abellán, W. Amaya, V. Pruneri, M. W. Mitchell, M. Markham, D. J. Twitchen, D. Elkouss, S. Wehner, T. H. Taminiau, and R. Hanson, Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres, Nature (London) 526, 682 (2015).
[70] A. V. Gorshkov, A. M. Rey, A. J. Daley, M. M. Boyd, J. Ye, P. Zoller, and M. D. Lukin, Alkaline-Earth-Metal Atoms as FewQubit Quantum Registers, Phys. Rev. Lett. 102, 110503 (2009).
[71] S. Pirandola, R. Laurenza, C. Ottaviani, and L. Banchi, Fundamental limits of repeaterless quantum communications, Nat. Commun. 8, 15043 (2017).
[72] J. Beugnon, C. Tuchendler, H. Marion, A. Gaëtan, Y. Miroshnychenko, Y. R. P. Sortais, A. M. Lance, M. P. A. Jones, G. Messin, A. Browaeys, and P. Grangier, Two-dimensional transport and transfer of a single atomic qubit in optical tweezers, Nat. Phys. 3, 696 (2007).
[73] A. Lengwenus, J. Kruse, M. Schlosser, S. Tichelmann, and G. Birkl, Coherent Transport of Atomic Quantum States in a Scalable Shift Register, Phys. Rev. Lett. 105, 170502 (2010).
[74] K.-N. Schymik, V. Lienhard, D. Barredo, P. Scholl, H. Williams, A. Browaeys, and T. Lahaye, Enhanced atom-byatom assembly of arbitrary tweezer arrays, Phys. Rev. A 102, 063107 (2020).
[75] T. Monz, D. Nigg, E. A. Martinez, M. F. Brandl, P. Schindler, R. Rines, S. X. Wang, I. L. Chuang, and R. Blatt, Realization of a scalable Shor algorithm, Science 351, 1068 (2016).
[76] A. Erhard, H. Poulsen Nautrup, M. Meth, L. Postler, R. Stricker, M. Stadler, V. Negnevitsky, M. Ringbauer, P. Schindler, H. J. Briegel, R. Blatt, N. Friis, and T. Monz, Entangling logical qubits with lattice surgery, Nature (London) 589, 220 (2021).
[77] A. G. Fowler, M. Mariantoni, J. M. Martinis, and A. N. Cleland, Surface codes: Towards practical large-scale quantum computation, Phys. Rev. A 86, 032324 (2012).
[78] V. V. Albert, J. P. Covey, and J. Preskill, Robust Encoding of a Qubit in a Molecule, Phys. Rev. X 10, 031050 (2020).
[79] H. Choi, M. Pant, S. Guha, and D. Englund, Percolation-based architecture for cluster state creation using photon-mediated entanglement between atomic memories, npj Quantum Inf. 5, 104 (2019).
[80] L. Pezzè, A. Smerzi, M. K. Oberthaler, R. Schmied, and P. Treutlein, Quantum metrology with nonclassical states of atomic ensembles, Rev. Mod. Phys. 90, 035005 (2018).
[81] E. Pedrozo-Peñaﬁel, S. Colombo, C. Shu, A. F. Adiyatullin, Z. Li, E. Mendez, B. Braverman, A. Kawasaki, D. Akamatsu, Y. Xiao, and V. Vuletic´, Entanglement on an optical atomic-clock transition, Nature (London) 588, 414 (2020).
[82] A. Omran, H. Levine, A. Keesling, G. Semeghini, T. T. Wang, S. Ebadi, H. Bernien, A. S. Zibrov, H. Pichler, S. Choi, J. Cui, M. Rossignolo, P. Rembold, S. Montangero, T. Calarco, M. Endres, M. Greiner, V. Vuletic´, and M. D. Lukin, Generation and manipulation of Schrödinger cat states in Rydberg atom arrays, Science 365, 570 (2019).
[83] C. Song, K. Xu, H. Li, Y.-R. Zhang, X. Zhang, W. Liu, Q. Guo, Z. Wang, W. Ren, J. Hao, H. Feng, H. Fan, D. Zheng, D.-W. Wang, H. Wang, and S.-Y. Zhu, Generation of multicomponent

atomic Schrödinger cat states of up to 20 qubits, Science 365, 574 (2019). [84] C. D. Marciniak, T. Feldker, I. Pogorelov, R. Kaubruegger, D. V. Vasilyev, R. van Bijnen, P. Schindler, P. Zoller, R. Blatt, and T. Monz, Optimal metrology with variational quantum circuits on trapped ions, arXiv:2107.01860. [85] N. Lauk, N. Sinclair, S. Barzanjeh, J. P. Covey, M. Saffman, M. Spiropulu, and C. Simon, Perspectives on quantum transduction, Quantum Sci. Technol. 5, 020501 (2020). [86] F. Arute, K. Arya, R-
. Babbush, D. Bacon, J. C. Bardin, R. Barends, R. Biswas, S. Boixo, F. G. S. L. Brandao, D. A. Buell, B. Burkett, Y. Chen, Z. Chen, B. Chiaro, R. Collins, W. Courtney, A. Dunsworth, E. Farhi, B. Foxen, A. Fowler et al., Quantum supremacy using a programmable superconducting processor, Nature (London) 574, 505 (2019). [87] A. Boca, R. Miller, K. M. Birnbaum, A. D. Boozer, J. McKeever, and H. J. Kimble, Observation of the Vacuum Rabi Spectrum for one Trapped Atom, Phys. Rev. Lett. 93, 233603 (2004).-
 [88] N. Kalb, A. Reiserer, S. Ritter, and G. Rempe, Heralded Storage of a Photonic Quantum Bit in a Single Atom, Phys. Rev. Lett. 114, 220501 (2015). [89] C. J. Bowers, D. Budker, E. D. Commins, D. DeMille, S. J. Freedman, A.-T. Nguyen, S.-Q. Shang, and M. Zolotorev, Experimental investigation of excited-state lifetimes in atomic ytterbium, Phys. Rev. A 53, 3103 (1996). [90] S. G. Porsev, Y. G. Rakhlina, and M. G. Kozlov, Electric-dipole amplitudes, lifetimes, and polarizabilities of the low-lyin-
g levels of atomic ytterbium, Phys. Rev. A 60, 2781 (1999). [91] T. Loftus, J. R. Bochinski, and T. W. Mossberg, Magnetic trapping of ytterbium and the alkaline-earth metals, Phys. Rev. A 66, 013411 (2002). [92] V. A. Dzuba and A. Derevianko, Dynamic polarizabilities and related properties of clock states of the ytterbium atom, J. Phys. B: At., Mol. Opt. Phys. 43, 074011 (2010). [93] K. Guo, G. Wang, and A. Ye, Dipole polarizabilities and magic wavelengths for a Sr and Yb atomic optical lattice cl-
ock, J. Phys. B: At., Mol. Opt. Phys. 43, 135004 (2010). [94] J. W. Cho, H.-g. Lee, S. Lee, J. Ahn, W.-K. Lee, D.-H. Yu, S. K. Lee, and C. Y. Park, Optical repumping of triplet-P states enhances magneto-optical trapping of ytterbium atoms, Phys. Rev. A 85, 035401 (2012). [95] K. Beloy, J. A. Sherman, N. D. Lemke, N. Hinkley, C. W. Oates, and A. D. Ludlow, Determination of the 5d6s 3D1 state lifetime and blackbody-radiation clock shift in Yb, Phys. Rev. A 86, 051404(R) (2012). [96] J. Lee, J. H. Le-
e, J. Noh, and J. Mun, Core-shell magnetooptical trap for alkaline-earth-metal-like atoms, Phys. Rev. A 91, 053405 (2015). [97] D. Antypas, A. Fabricant, J. E. Stalnaker, K. Tsigutkin, V. V. Flambaum, and D. Budker, Isotopic variation of parity violation in atomic ytterbium, Nat. Phys. 15, 120 (2019). [98] D. A. Ender, Doubly-resonant two-photon-absorption-induced four-wave mixing in Tb(OH)3 and LiTbF4, Ph.D. thesis, Montana State University, 1982. [99] L.-S. Ma, P. Jungner, J. Ye, and J. L. Hall,-
 Delivering the same optical frequency at two places: accurate cancellation of phase noise introduced by an optical ﬁber or other time-varying path, Opt. Lett. 19, 1777 (1994).

043154-14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:03.069Z
- **Text Length:** 76395 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
