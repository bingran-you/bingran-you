# PDF Document: (Multiplexing Theory - 2022 UP) Multiplexed quantum repeaters based on dual-species trapped-ion systems.pdf

**File Path:** (Multiplexing Theory - 2022 UP) Multiplexed quantum repeaters based on dual-species trapped-ion systems.pdf

**Processed Date:** 2026-02-10T18:16:59.469Z

**File Size:** 1915.27 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 353

**Title:** (Multiplexing Theory - 2022 UP) Multiplexed quantum repeaters based on dual-species trapped-ion systems

**Collection:** Multiplexing > Random

---

## Extracted Text Content

Editors’ Suggestion

PHYSICAL REVIEW A 105, 022623 (2022)
Featured in Physics

Multiplexed quantum repeaters based on dual-species trapped-ion systems
Prajit Dhara ,1 Norbert M. Linke,2 Edo Waks,3 Saikat Guha,1 and Kaushik P. Seshadreesan1,4,* 1Wyant College of Optical Sciences, University of Arizona, Tucson, Arizona 85721, USA
2Joint Quantum Institute and Department of Physics, University of Maryland, College Park, Maryland 20742, USA 3Joint Quantum Institute and Department of Electrical and Computer Engineering, University of Maryland, College Park,
Maryland 20742, USA 4Department of Informatics and Networked Systems, School of Computing and Information, University of Pittsburgh, Pittsburgh,
Pennsylvania 15260, USA
(Received 20 September 2021; accepted 7 January 2022; published 25 February 2022)
Trapped ions form an advanced technology platform for quantum information processing with long qubit coherence times, high-ﬁdelity quantum logic gates, optically active qubits, and a potential to scale up in size while preserving a high level of connectivity between qubits. These traits make them attractive not only for quantum computing, but also for quantum networking. Dedicated, special-purpose trapped-ion processors in conjunction with suitable interconnecting hardware can be used to form quan-
tum repeaters that enable high-rate quantum communications between distant trapped-ion quantum computers in a network. In this regard, hybrid traps with two distinct species of ions, where one ion species can generate ion-photon entanglement that is useful for optically interfacing with the network and the other has long memory lifetimes, useful for qubit storage, have been proposed for entanglement distribution. We consider an architecture for a repeater based on such dual-species trapped-ion sys-
tems. We propose and analyze a protocol based on spatial and temporal mode multiplexing for entanglement distribution across a line network of such repeaters. Our protocol offers enhanced rates compared to rates previously reported for such repeaters. We determine the ion resources required at the repeaters to attain the enhanced rates, and the best rates attainable when constraints are placed on the number of repeaters and the number of ions per repeater. Our results bolster the case for near-ter-
m trapped-ion systems as quantum repeaters for long distance quantum communications.
DOI: 10.1103/PhysRevA.105.022623

I. INTRODUCTION
Quantum information processing is set to revolutionize computation, communication, and sensing technologies [1,2]. Applications of these technologies range from quantum speedups with NISQ processors [3] to quantum key distribution [4], to quantum-enhanced distributed sensors [5]. Quantum technologies are currently being actively developed across different physical platforms—from solid-state systems such as superconducting circuits [6] and nitrogen vacancies [7] in diamond, to trapped ions [8], to -
nanophotonic systems [9]. Quantum networks capable of faithfully transferring quantum states between nodes, including the capability to distribute quantum entanglement [10], are being developed both over short distances to scale up quantum computers in a modular fashion, as well as over long distances to connect remote quantum computers, or a local area network of computers across physical platforms towards building a global quantum internet [11–13].
Given that photons are the best transmitters of quantum information that can be used to implement scalable quantum communications, the primary challenge in quantum networking is the fundamental rate-loss trade-off. This tradeoff exists for quantum communications over a lossy optical
*kausesh@pitt.edu

communication channel that models imperfections such as photon collection, coupling, and detection inefﬁciencies, as well as transmission losses. The entanglement distribution capacity of the pure-loss optical channel with unlimited signal power and unlimited local quantum operations and classical communications (LOCC) is given by C(η) = − log2(1 − η) ebits per channel use [14], where η is the channel transmissivity, and an ebit denotes a pair of maximally entangled qubits. In the limit of low tra-
nsmissivity η 1, this quantity scales as ∝ η [15]. As a result, in long-distance communications, say, over an optical ﬁber link whose transmissivity decreases exponentially with distance as e−αl (α being the ﬁber loss coefﬁcient per unit length), the entanglement distribution capacity drops exponentially with distance independent of the presence or absence of other imperfections. Quantum repeaters [16,17] help overcome this challenge. They are special-purpose quantum computers typically consisting-
 of quantum sources, detectors, elementary logic gates, and quantum memories. Quantum repeater architectures based on different physical platforms [18–23] along successive generations of improved protocols [24,25] have been proposed that can achieve enhanced entanglement distribution rates beyond the direct transmission capacity.
Establishing a large-scale quantum network typically calls for setting up long-distance core networks. Among the large variety of physical systems that can be utilized to realize quantum repeaters for the core quantum network backbone,

2469-9926/2022/105(2)/022623(14)

022623-1

©2022 American Physical Society

PRAJIT DHARA et al.

PHYSICAL REVIEW A 105, 022623 (2022)

trapped-ion based systems form an excellent, robust choice, due to their inherently long memory coherence times [26]. Moreover, trapped ions are known to be an advanced qubit technology [8], and one of the front runners in the race for scalable universal quantum information processing [27]. Repeater networks consisting of single-species trapped-ion nodes have been considered and analyzed in depth in Ref. [28]. More recently, Santra et al. [29] analyzed repeaters based on ion traps consisting of tw-
o species of ions with complementary properties: a communication ion species with good optical properties that enables the network nodes to communicate with one another, and a memory ion species having a long coherence time, and therefore suitable for information storage and efﬁcient local quantum processing. Examples of such complementary pairs of ion species include 138Ba+ and 171Yb+, and 9Be+ and 25Mg+. In the former, e.g., the 138Ba+ ion can emit a photon in the visible part of the spectrum (4-
93 nm) that is entangled with the atomic state of the ion. Entanglement can be heralded between the atomic states of two such 138Ba+ ions by performing an optical Bell-state measurement [30] on the photons they emit. Such optically mediated entanglement, when heralded between adjacent repeater nodes, can be faithfully transferred onto 171Yb+ ions present at the respective nodes, whose atomic states have extremely long coherence times, thus allowing the storage of entanglement between the nodes whi-
ch can later be processed using efﬁcient quantum gate operations [31,32]. Santra et al. [29] presented a repeater architecture based on such dual-species trapped-ion (DSTI) modules, and discussed a set of logic gates needed to implement repeater protocols. They analyzed the quantum communication rates attainable over a line network of such DSTI repeaters using a multiplexed protocol. The rates were shown to exceed those possible with direct transmission.
In the present article, we explore a protocol based on spatial and temporal multiplexing for the trapped-ion repeater architecture involving DSTI modules that is more general than the one considered in Ref. [29]. In spatial multiplexing, multiple communication ions attempt to generate remote entanglement between every pair of adjacent repeater nodes at each time step of a well-deﬁned clock cycle. In time multiplexing, remote entanglement is heralded from entanglement generation attempts across a b-
lock of multiple time steps. While both spatial and time multiplexing were also considered in Ref. [29], the latter was only considered implicitly with a ﬁxed clock-cycle duration for the photon-ion entanglement generation at the repeater nodes determined by the distance between adjacent nodes. Here, we treat the clock-cycle duration as a free parameter, so that ion-photon entanglement generation at the nodes can be attempted at rates independent of the internodal spacing. This enables higher quan-
tum communication rates than the rates supported by the protocol of Ref. [29]. Our protocol warrants a suitably larger number of communication ions and memory ions at the repeater nodes for ion-photon entanglement generation and for storing the unheralded ion qubits, respectively. We determine the enhanced rates enabled by such a general protocol for different spatial multiplexing, numerically optimized over the number of repeaters and temporal multiplexing. We identify the number of repeaters req-
uired and the number of

communication and memory ions required per repeater for the optimal implementation of the protocol, and discuss how the rates deteriorate from their optimum values when the number of repeaters, or the number of ions per repeater is constrained.
The article is organized as follows. In Sec. II, we present a general architecture for the trapped-ion repeaters, along with the node operations and an associated error model. We also summarize the different timing parameters of the repeaters here. In Sec. III, we outline the concepts of spatial and time multiplexing-based quantum repeater protocols. Section IV contains our proposed protocol based on spatial and time multiplexing for the DSTI repeaters for the case of 138Ba+ and 171Yb+ ions, along-
 with numerical results. We conclude with a discussion and summary in Sec. V.
II. TRAPPED-ION REPEATER ARCHITECTURE
The general architecture of the trapped-ion repeaters and the overall network analyzed in this work is depicted in Fig. 1. The repeaters consist of multiple DSTI modules containing (i) 138Ba+ ions, which serve as the communication ions, and (ii) 171Yb+ ions, which serve as the memory ions. The DSTI modules may thus be thought of as consisting of two independent ion ensembles. Each repeater node is equipped with lasers and light collection apparatuses for (i) ion-photon entanglement generation usin-
g the communication ions and for (ii) performing qubit logic gates and measurement readouts on the memory ions. Since the qubit states in the two ion species have different transition frequencies, the above functions involve different lasers and thus do not affect each other.
The photons emitted by the communication ions, upon collection, are ﬁrst frequency converted to telecom wavelengths for internodal transmissions [33,34], and then coupled into optical ﬁbers. The communication ions in a DSTI module are assumed to be well spaced out so that the rate of resonant reabsorption of the photon emitted from one communication ion by another is low. Light collection is assumed to be spatially resolved so that light from different communication ions can be ﬁber coupled and tr-
ansmitted over distinct spatial modes. The repeater nodes are assumed to be linked by ﬁber bundles capable of transmitting multiple single photons in distinct spatial modes to support spatial multiplexing.
The qubit logic gate operations on the memory ion qubits in a DSTI module are effected using highly collimated laser beams that address individual ions. However, for technical simplicity of operation of the DSTI modules, the measurement readouts of the memory ions in a module are considered to be global. This is because readouts are effected by stimulating state-dependent ﬂuorescence that can cause high levels of cross talk among the memory ions in the module even when individual ions are addresse-
d for readout. It must be noted, however, that strategies to circumvent this problem have been successfully demonstrated, such as separating and shuttling selective ions into a separate zone for readout [35], which requires a complex trap geometry, or using another species for readout [36], which is challenging to combine with networking as it involves two species already.
Each repeater node also carries a quantum multiplexer (MUX) [37,38], whose functionalities include (i) optical switching and (ii) linear optical Bell-state measurements

022623-2

MULTIPLEXED QUANTUM REPEATERS BASED ON …

PHYSICAL REVIEW A 105, 022623 (2022)

FIG. 1. General architecture of a repeater node based on DSTI modules to support entanglement distribution protocols based on mode multiplexing. The lines denote optical ﬁbers.

(BSMs). With photons transmitted between nodes in wellindexed spatial modes, independent Bell-state measurements (discussed under repeater operations below) over the different multiplexed spatial modes can be effected using the MUX. The detectors are assumed to be ultrafast so that they can be reset and used over successive time steps. In other words, it is assumed that optical BSMs can be effected on successive time-bin modes using the same MUX to support temporal multiplexing. The nodes are assu-
med to share a common clock reference.
Repeater operations—The basic repeater operations between and at the DSTI modules that we consider were proposed in Santra et al. [29], and are summarized below. Interactions between DSTI modules, both within a repeater node as well as between adjacent repeater nodes are optically mediated. Photons emitted by the communication ions are duly collected, coupled into optical ﬁber, and interfered and measured to realize Bell-state measurements. The simplest linear optical Bell-state measurement for ph-
otonic qubits succeeds probabilistically. When a successful optical Bell-state measurement is performed on photons from two ions, it results in entanglement being heralded between the ions. The atomic states of the communication ions are transferred or “swapped” to the memory ions by ion-ion gates based on Coulomb interactions such as the Mølmer-Sørensen gate [39] to store entanglement over the long coherence times of the memory ions. The action of the swap gate Sc→m (where c and m labels denote t-
he communication and memory ions, respectively) on a pair of entangled communication ions is given by
Sc1→m1 ⊗ Sc2→m2 |ψ m1 |β c1c2 |ψ m2 = |ψ c1 |β m1m2 |ψ c2 . (1)
Here, the various quantum states are, |β c1c2 for the entangled communication ions, |ψ mi for the memory ions before the linear optical entanglement swap, and |ψ ci for the communication ions after the ion-ion swapping operation.
Finally, the entanglement swap operation between two entangled memory-ion pairs |β m1m2 and |β m3m4 , when ions m2, m3 are in the same DSTI module, is accomplished by a CNOT gate operation followed by Z and X basis measure-

ments, where the latter may be effected using Hadamard gates

followed by Z basis measurements. This operation extends the

range of entanglement by establishing entanglement between

m1 and m4. With regard to implementing the measurements as

part of the entanglement swap operations, ﬁrstly the gates con-

stituting the entanglement swaps (CNOTs and Hadamards) are

applied on individual memory ions in a DSTI module. Subse-

quently, the Z basis measurements, as mentioned earlier, are

effected via a global measurement readout of all the memory

ions in the module. This forms an important consideration in

our repeater protocol, wherein all the memory ions in a DSTI

module end up being measured in the Z basis periodically as

dictated by the protocol.

Error model—The success probability of optically me-

diated heralded entanglement generation between communi-

cation ions present at two adjacent repeater nodes is given

by

p=

1 2

ηc2

ηd2

e−αL0

.

Here,

ηc

is

the

collection

and

coupling

efﬁciency for the optical elements, ηd is the efﬁciency of the

detectors used in the Bell-state measurement circuit, α is the

ﬁber attenuation parameter, which is typically 0.2 dB/km at

1550 nm, and L0 is the interrepeater spacing (detector dark

counts and frequency conversion inefﬁciencies are neglected

in the present analysis, and will be considered in future

works). When the communication ions are present at the same

repeater node, but in different DSTI modules, the success

probability

is

given

by

p

=

1 2

ηc2ηd2

,

where

it

is

assumed

that

the losses in transmission are negligible. Moreover, the entan-

gled state of the communication ions is generally modeled by

a Werner state of ﬁdelity parameter F0, given by

ρc1,c2 = F0

+ + 1 − F0 ( 3

−+

++

− ),

(2)

where ± = | ± ±| and ± = | ± ±| are maximally entangled qubit Bell-state density operators, with | ± = (|0, 1 ± |1, 0 )/2 and | ± = (|0, 0 ± |1, 1 )/2, and {|0 , |1 } being the computational Z basis eigenstates of the qubits. The Werner-state model accounts for errors in the
communication ions that may be caused by the presence of
dephasing noise in the photonic qubits that undergo optical
Bell-state measurement.

022623-3

PRAJIT DHARA et al.

PHYSICAL REVIEW A 105, 022623 (2022)

TABLE I. Timing parameters associated with trapped-ion repeaters.

Timing parameter
τ τg τo τm

Associated meaning
Clock-cycle duration Ion-ion gate and measurement times
Communication ion lifetime Memory ion lifetime

Errors in the swap gate are compactly modeled jointly for a pair of instances of swap gates acting on two entangled communication ions to store the entanglement in two memory ions. The model is a two-qubit Pauli channel acting on the initial entangled state of the two communication ions resulting in a noisy mapping onto two memory ions (see Santra et al. [29, Eq. 3] for details), and is described as

3

ρm1m2 = (1 −

g )ρc1 c2

+

g
16

σk ⊗ σkρc1c2 σk ⊗ σk (3)

k,k =0

= Fi

+ + 1 − Fi ( 3

−+

++

− ),

(4)

Fi = (1 −

g)F0 +

g, 4

(5)

where {σk}k=0,1,2,3 are the Pauli matrices I, X, Y , and Z, the state ρc1c2 is the Werner state of (2), and g is the error parameter associated with the swap gate.
Finally, imperfections in the entanglement swap operation
are modeled in two parts, namely, errors associated with (i) the CNOT gate and (ii) the X, Z measurement. (i) The action of
a noisy CNOT gate, also of error parameter g, acting on two qubits m2, m3 initially in state ρm2 ⊗ ρm3 , is modeled as

ρm2m3 = (1 −

g)CNOT(ρm2 ⊗ ρm3 )CNOT† +

g

Im2 m3 4

,

(6)

where m2, m3 are the control and the target qubits, respec-

tively, for the CNOT operation and Im2m3 is the two-qubit identity operator. Note that g is an overestimate for the er-

ror in this gate, since it involves fewer Coulomb gates than

the swap operation. (ii) Errors associated with the X and Z

measurements on the control and target qubits of the CNOT

gate are functions of the gate error parameter g and the initial

ﬁdelity of the entangled Werner state of two communication

ions. When entanglement swaps are performed across a chain of n ∈ Z+ repeater nodes, the ﬁnal noisy entangled state her-

alded between memory ions at the end nodes of the chain can

be described also as a Werner state of the form in (2) with a

ﬁdelity parameter given by

Ff

=

1−

3 2

Q(n),

where

Q(n)

=

1 2

1−

1−2

g−

4 3

(1

−

F0 )

n

.

(7)

Timing parameters—The proposed repeaters have a few
characteristic timing parameters that are summarized in Table I. Firstly, the clock-cycle duration τ (or sometimes denoted as τrep) is the primary time unit, which denotes the rate at which the repeater nodes attempt ion-photon entanglement
generation. This is a tunable parameter for the repeater operation. Secondly, there are the gate and measurement times τg. Typical values for this time are of the order of microseconds.

For example, high-ﬁdelity swap from 138Ba+ to 171Yb+ has been demonstrated in 100 μs [31,32]. Thirdly, there are the lifetimes of the communication and memory ions denoted by τo, τm, respectively. A typical value for the former is 100 μs (as has been reported for 138Ba+ ions), while the latter can be taken to be long; the lifetime of 171Yb+ transitions has
been engineered to run in the order of minutes [40]. The parameters τo, τm, τg are governed by the choice of ions and gate implementation and hence take ﬁxed values in any given
physical realization of the repeaters.

III. REPEATER PROTOCOLS BASED ON SPATIAL AND TEMPORAL MULTIPLEXING

In this section, we provide a brief background on multiplexing-based repeater protocols. To begin with, due to the no-cloning theorem [41], unlike classical communication, the simple strategy of “amplify and retransmit” is not physically viable for entanglement generation between two remote parties, Alice and Bob. The rates for direct transmission of qubits over a M ∈ Z+ quantum channel with a source repetition rate of 1/τ are limited by the repeaterless bound on the entanglement generation capaci-
ty, which for pure loss channels of transmissivity η, is given by [14]

Cdirect(η, M,

τ

)

=

−M τ

log2 (1

−

η)

ebits/s,

(8)

referred to as the PLOB bound hereinafter. The PLOB bound tends to be ∝ η for η 1.
There are multiple paradigmatic approaches using quantum repeaters to beat this bound. A widely recognized classiﬁcation of these approaches is in terms of the socalled one-way versus two-way repeaters. One-way quantum repeaters encode the transmitted qubits using error correcting codes and the task for quantum repeaters is to decode, correct for transmission errors, reencode, and transmit from predetermined locations on the channel. Entanglement can be distributed using these repeaters by encodin-
g and transmitting one share of a logically encoded ebit through the repeater links. This is a similar strategy as repeaters for one-way classical communication. Two-way quantum repeaters, on the other hand, rely on the generation of local entanglement on smaller segments of the network. These locally shared ebits are concatenated with the aid of entanglement swaps to eventually achieve shared entanglement between the end parties on the channel. Such protocols could potentially be interspersed wit-
h entanglement puriﬁcation to improve the quality of the shared ebit that is ultimately generated.
In this work, we focus on two-way repeaters. Two-way repeaters are equipped with sources of photonic entangled pairs, quantum memory (QM) registers (trapped memory ions for our proposed designs in this work), and additional circuitry to perform quantum logic on the qubits stored in the QM register (including entanglement swaps on the memory ions). We begin with the assumption that the sources can produce perfect Bell pairs on demand every τ s. For simplicity, we initially assume arbitrarily large -
QM registers and inﬁnitely long coherence times for the qubits stored in the QM. This is a necessary consideration for a constraint-free analysis of multiplexing.

022623-4

MULTIPLEXED QUANTUM REPEATERS BASED ON …

PHYSICAL REVIEW A 105, 022623 (2022)

For the simplest network topology, namely, a line network connecting two communicating parties, the total link distance L is divided into n + 1 elementary links. The repeater stations occupy the nodes at either end of each elementary link in this segmented network. The core strategy of the protocol is to generate shared entanglement on the elementary links before attempting entanglement swaps (between QMs) internally in the repeater stations. This is achieved by performing a linear optical BSM bet-
ween the transmitted qubits from neighboring repeater stations. The simplest linear optical BSM is a probabilistic operation, which has a probability p 1/2 of succeeding. Note that p is dependent on the length of the elementary links, i.e., increasing the length of the elementary links deteriorates p. Since loss on ﬁber scales exponentially with distance, p ∝ exp[−αL/(n + 1)]. Note that increasing n, i.e., reducing the elementary link length, boosts p. However, this also means that a larger number-
 of elementary links must simultaneously succeed, which shows a clear trade-off. Further we assume that the QM entanglement swap can succeed with a probability q 1, where q = 1 is possible with highﬁdelity entanglement swapping gates for trapped-ion qubits. The achievable rate is given by

R0 (n )

=

pn+1 τ

qn

.

(9)

Since R0(n) < e−αL/τ , we perform worse than with direct transmission.
However, with the aid of multiple parallel attempts, i.e., multiplexing, the entanglement generation rate can be engineered to surpass direct transmission. This is the natural strategy to consider when individual links can only be generated in a probabilistic manner; instead of independent single attempts succeeding simultaneously, we perform multiple parallel attempts for each elementary link and concatenate successful links. Spatial (or equivalently spectral) multiplexing is the easiest modiﬁcat-
ion to this protocol which is based on this paradigm. Here, the design incorporates parallel channels spatially, i.e., with separate optical ﬁbers. With this modiﬁcation, instead of a single BSM attempt every time slot, we can perform M attempts and look for one success. With a spatial multiplexing size of M, and by considering the probability of at least one success per elementary link, the end-to-end entanglement generation rate is given by

R1 (n )

=

[1 −

(1

− p)M τ

]n+1

qn

.

(10)

It has been shown that with optimal choice of n and suitable
M, the rate equation in Eq. (10) can surpass the direct trans-
mission PLOB bound at a given link length. In fact, the rate
envelope for Eq. (10) has been derived in [42], and has been shown to scale as R1 ∝ e−sαL with s < 1, which allows the protocol to surpass rates possible with direct transmission.
Another strategy for multiplexing is to accumulate successes from m ∈ Z+ attempts over blocks of the fundamental time slot of τ seconds. This is called time multiplexing and mimics the effect of using multiple channels without the
necessity for additional physical channels. Hence, we can
perform the entanglement swap between different QMs at a
repeater node only after every m time slots. An achievable

entanglement generation rate for the time multiplexed protocol is given by

R2(n, m)

=

[1

−

(1

− p)m]n+1qn mτ

.

(11)

It has been shown in [25,43] that a time-multiplexed protocol can a√chieve a subexponential rate-vs-distance scaling i.e., R2 ∝ e−t αL with t < 1. This is an improved performance over spatial multiplexing, and it has been shown that a protocol may surpass the PLOB bound with just time multiplexing. However, in a practical implementation, time multiplexing requires highly reliable QMs and large switching trees that scale as log2(m). Imperfections in these components can lead to the loss of the sube-
xponential advantage [25]. In general, with the incorporation of both spatial and temporal multiplexing, a two-way repeater protocol can achieve the rate R(L, n, m) given as

R(L, n, m) = [1 − (1 − p)mM ]n+1qn .

(12)

mτ

It is important to note that there is a key difference between the multiplexing degrees in the spatial (M ) and time (m) strategies. Increasing M in a spatially multiplexed protocol requires the use of additional channels, which may be highly constrained (i.e., we may be limited by the number of physical optical ﬁbers). In fact, it is generally something that the network architect cannot modify, and hence it is not practical to optimize the rate with respect to M. Rather, given a certain maximum v-
alue of M, the rate envelope, as derived in Ref. [42], gives us an idea about the viability of the protocol to surpass the PLOB bound. Increasing the time multiplexing degree m is only governed by the lifetime of the QM. As long as the lifetime surpasses a certain threshold governed by the protocol design, we can modify m without the need for additional resources. Unlike spatial multiplexing, time multiplexing can boost the probability of link creation on the elementary link seemingly arbitrarily,-
 by increasing m. However, by increasing m, the effective time step increases from τ to mτ which degrades the rate [see Eq. (11)]. The boost in the success probability of the link, along with the optimization of the number of quantum repeater (QR) nodes n, overcompensates degradation, and an optimal value of m for a given L achieves the subexponential scaling.
Note that the repeater protocol considered in this work belongs to the second generation in the classiﬁcation of successive generations of repeater protocols [24]. This is so, because they do not include intermediate, iterative entanglement distillation steps, but instead are based on multiple redundant entanglement generation attempts across the elementary links over spatial or spectral, and temporal modes, which can be perceived as the use of a repetition-based error correcting code for elementa-
ry entanglement generation. This is followed by identifying the latest successful heralded elementary links across each time multiplexing block and synchronous entanglement swapping of these elementary links at the repeater nodes.

022623-5

PRAJIT DHARA et al.

PHYSICAL REVIEW A 105, 022623 (2022)

TABLE II. Unit distance and multiplexing parameters.

Parameter
L0 M m

Associated meaning
Interrepeater spacing Degree of spatial multiplexing Degree of time multiplexing

IV. MULTIPLEXING-BASED PROTOCOL FOR TRAPPED-ION REPEATERS: PROTOCOL DESIGN
AND EVALUATION
In this section, we present our proposed protocol based on spatial and time multiplexing for entanglement distribution across a line network of trapped-ion repeaters described in Sec. II, followed by numerical performance analyses. The protocol design is independent of the number of repeater nodes, and it is assumed that the ion resource parameters of the repeater nodes are unlimited and can be chosen to be as large as necessary to support any choice of values of the clockcycle duration τ and mult-
iplexing parameters M, m. However, when analyzing the performance of the protocol, we will also consider constraints on these resources since in practice they are often constrained.
The unit distance (interrepeater spacing) and multiplexing parameters used in deﬁning our protocol, and the repeater resource parameters are listed in Tables II and III, respectively. For simplicity, similar to Ref. [29], we will consider the case of one DSTI module per node, i.e., s = 1. However, the protocol leverages the multiple communication ions present within the DSTI modules for multiplexed entanglement generation attempts across elementary links in the network. The fundamental time step τ-
 , or in other words, the clock-cycle duration, multiples of which are used as time multiplexing blocks, is chosen as a free parameter, and not tied to the physical distance between the repeaters. This makes our protocol more general than the one presented in Ref. [29].
A. Protocol design and rates
For n equally spaced repeaters and a total distance L (between the end nodes), consider a (m, M ) repeater protocol with spatial multiplexing M ∈ Z+ and time multiplexing m ∈ Z+. The interrepeater spacing is given by L0 = L/(n + 1). For a given L0, the time it takes for the heralding information of success or failure of optically mediated entanglement generation across adjacent repeater nodes to arrive at the nodes is T = L0/c, where c is the speed of light in the optical ﬁber used for interrepeat-
er node transmissions (henceforth referred to as the heralding time). The protocol aims to successfully herald one elementary link entanglement in

Parameter
s No Nm

TABLE III. Resource parameters.
Associated meaning
DSTI modules per repeater 138Ba+ ions per DSTI module 171Yb+ ions per DSTI module

each elementary link from m × M total attempts spread over mτ s. The heralding time and the gates and measurement time together add up to dictate the rate of generating the elementary link entanglements. Since all the memory ions are in one DSTI module, entanglement swapping across these elementary link entangled memory ions, which can be performed deterministically using CNOT gate followed by X and Z measurement, distributes entanglement between the end nodes.
Rate formulas under ideal repeater operations—Assuming gate operations at the repeaters to be ideal and the optical ﬁbers to be pure loss channels (no dephasing errors) for the moment, the rate in ebits per second attained by the protocol is given by the general formula

[1 − (1 − p)Mm]n+1

R=

,

(13)

T

where the numerator denotes the probability of successfully

heralding at least one entangled ion-ion pair across each of

the n + 1 elementary links (p being the success probability

of optical Bell swap discussed in Sec. II), and the T in the

denominator is the time it takes to complete m time steps of

entanglement generation attempts across the elementary links.

In order to attain optimal rates at any distance L, an opti-

mal number of repeaters nopt would be required to be placed

along the distance. Too few repeaters would result in exces-

sive errors due to photon loss, whereas too many repeaters

would result in excessive operational errors at the repeater

nodes.

Notice that the rate in Eq. (13) is a function of the parame-

ters m, M, and n along with physical system parameters such

as collection and detection efﬁciencies ηc, ηd and the total

distance

L

that

enter

the

formula

through

p=

1 2

ηc2

ηd2

e−αL0

,

where L0 = L/(n + 1). The denominator T is a function of the

time multiplexing block length m and the clock-cycle duration

τ , but also depends on the ion-ion gate and measurement times

τg and the heralding time T , which is in turn a function of L0. The dependence on τg is due to the fact that it takes a nonzero

amount of time to perform the essential entanglement swap

operations at the repeater nodes, which is 2τg s (τg for the CNOT gate and τg for the X, Z measurements).
The precise formula for the rate attainable with an (m, M )

repeater protocol over n repeaters placed along a total dis-

tance L, along with the ion requirements to support the

protocol are tabulated in Table IV. The rate depends on the

clock-cycle duration for ion-photon entanglement generation

attempts at the nodes τ , and the relative values of the herald-

ing time T , ion-ion gate times τg, and the communication ion lifetime τo. Consider T = kτ and the τg = jτ , where and j, k ∈ R+. Values of k, j < 1 clearly lead to suboptimal

rates, since they imply ample idle time at the repeater nodes,

when the ions are not attempting entanglement distribution.

Thus, we focus on operations that correspond to j, k 1. For simplicity of analysis, let us consider j, k ∈ Z+. Values

of j = τg/τ > 1 can in principle be realized with multisector

traps. These are traps with distinct sectors of ions (say j of

them) with each containing a batch of communication ions,

such that at every time step, ions in one of the sectors are

collectively excited, and the different sectors being excited

022623-6

MULTIPLEXED QUANTUM REPEATERS BASED ON …

PHYSICAL REVIEW A 105, 022623 (2022)

TABLE IV. Rates and ion requirements for s = 1 operation of the (m, M ) multiplexed repeater protocol. The rate expressions correspond to ideal gate operations, and the optical ﬁbers are assumed to be a pure loss channel. For realistic gate operations, the overall rate is modiﬁed by the reverse coherent information of the end-to-end state, which is a function of the gate error parameter g and the initial ﬁdelity of the entangled Werner state F0. See Appendix A for detailed timing charts and corres-
ponding timing diagrams.

Table A Table B Table C

Criterion: T τo > τg

Criterion: τo > T τg

Case 1:

T + τg > τo > T

Case 2:

τo T + τg > T

Criterion: τo > τg > T

Case 1:

T + τg > τo > τg

Case 2:

τo T + τg > τg

Required No 2M j
Required No
2(Mk + j) Required No
2M j

Required Nm 2Mm
Required Nm Same as Table A
2m
Required Nm 2Mm
Same as Table B, case 2

Rate
[1−(1−p)Mm ]n+1 (k+m+2 j−1)τ
Rate
[1−(1−p)Mm ]n+1 (k+m+3 j−1)τ
Rate
[1−(1−p)Mm ]n+1 (m+3 j−1)τ

in a cyclical fashion. It is implicitly and reasonably assumed

that (i) τo > τg so that a communication ion’s quantum state can be faithfully transferred to a memory ion with ion-ion

gates before it irrecoverably decoheres and (ii) τm mτ for

a large range of values m, so that the memory ions can be

considered to be noise-free. Among the 6 =

3 2

orderings of

the relative values of T, τg, and τo, due to the reasonable

assumption τo > τg, we are left with three possible order-

ings, namely, T τo > τg, τo > T τg, and τo > τg > T .

Table IV discusses the rates and the ion requirements achieved

by the repeater protocol for each of these cases. Timing

charts and timing diagrams that describe the protocol includ-

ing the operations at the repeater nodes from time step to

time step, under these different conditions are elucidated in

Appendix A.

As an example, consider the case T τ0 > τg described in Table V in Appendix A. In this scenario, at every time step,

2M communication ions generate ion-photon entanglement,

with M of the photons being directed towards the left of the

node and the other M towards the right of the node. The mo-

ment these photons are generated, an ion-ion gate is initiated

on each of the communication ions, to swap their atomic state into memory ions. For gate time τg = jτ, j ∈ Z+, at time
t = jτ, the communication ions that were used to generate

ion-photon entanglement at time step t = 0 are freed up due

to the completion of the ion-ion gate, and hence are ready to

be reused. At this point, the ﬁrst 2M atomic states have been loaded into memory ions. At time step t = kτ, k ∈ Z+, the

information about which two (one to the left of the node and

one to the right), if any, of the 2M entanglement generation

attempts at time t = 0 actually heralded an elementary link

entanglement, is received, at which point, the other 2(M − 1)

memory ions are freed up and ready for reuse. At time t =

(k + m − 1)τ , similarly, all potentially successfully heralded

elementary link entanglements across the time multiplexing

block length of m are stored in the memory ions. At this

point, the repeater nodes choose the latest successful heralded

link to the left and to the right and perform entanglement

swap on those corresponding memory ions. Performing the

entanglement swap involves measuring these memory ions,

which takes a time duration 2τg, i.e., 2 jτ . Thus, the rate of

distributing one ebit across the end nodes of the trapped-ion

repeater chain is ∝ 1/(k + m − 1 + 2 j)τ . Since we consider

global measurements that measure all ions in the DSTI, all

the other accumulated entanglement resources at the nodes are

also cleared in the process. The protocol then starts once again

from time step t = 0.

Note that typically with time-multiplexed repeaters the

heralding time only causes latency in the protocol without

affecting the rates [25]. However, in the present scheme of

trapped-ion repeaters, as mentioned above, ion measurements

are considered to be global, full-trap measurements that mea-

sure all ions present in a DSTI, as opposed to measurement of

individual ions in a trap. As a result, all the other accumulated

entangled resources at the nodes are also cleared in the pro-

cess, which negatively impacts the entanglement distribution

rates.

Rate formulas under realistic (noisy) gate operations—

When realistic noisy operations are considered at the repeater

nodes, the rate formulas in Table IV get scaled by the distill-

able entanglement of the noisy end-to-end entangled state ρAB

across the line repeater network. The noisy entangled state is

given

by

a

Werner

state

of

ﬁdelity

parameter

F

=

1

−

3 2

Q(n),

where Q(n) is as given in Eq. (7). A lower bound on the

distillable entanglement is given by the reverse coherent in-

formation of the state ρAB, deﬁned as IR(ρAB) := H (B)ρ −

H (AB)ρ, where H (B)ρ = − Tr(ρB log2 ρB) is the von Neu-

mann entropy of ρB. For Bell diagonal states, and hence for

Werner states, IR can be easily computed, since ρB is the

maximally mixed state of entropy H (B)ρ = 1 and the entropy

H (AB)ρ

=

−F

log2

F

−

(1

−

F)

log2

1−F 3

.

Ion requirements—For the case T τ0 τg, the ion re-

quirements can be identiﬁed from the timing chart in Table V.

The requirement on the number of communication ions is

2 jM, which is the value at which freed ions begin getting reused and the number of loaded Ba+ ions saturates. In other words, 2 jM Ba+ ions are sufﬁcient to support the optimal

(m, M ) repeater protocol. The maximum number of memory

ions required in this case is given by 2mM. The actual number

could be smaller, depending on the value of m and its relation

to j, k, which might allow for some freed memory ions to be

reused. On the other hand, for the cases where τo > (k + j)τ , the communication ion requirement is 2(Mk + j), whereas

the memory ion requirement is independent of M, and given

by 2m. This is because the large τo allows one to wait for the

heralding information and subsequently apply the swap gate

022623-7

PRAJIT DHARA et al.

PHYSICAL REVIEW A 105, 022623 (2022)

TABLE V. Timing chart for Table IV, type A, i.e., when T τo > τg, and Table IV B, case 1, i.e., (τo > T τg) ∧ (T + τg > τo > T ). Both of these involve subcases 1 and 2 corresponding to k − j + 1 m and k − j + 1 < m, respectively, where T = kτ, τg = jτ . The timing diagrams for the different cases of this protocol type are shown in Figs. 11 and 12.

Case 1 Time

Ba+ occupancy

Initialized

Freed

Loaded

Yb+ occupancy

Loaded

Freed

Max. number of heralded ions

0 τ ... ( j − 1)τ jτ ... (m − 1 + j)τ ... kτ ... (k + m − 1)τ
Case 2
Time
0 τ ... ( j − 1)τ jτ ... kτ ... (m − 1 + j)τ ... (k + m − 1)τ

2M
4M ...
2 jM 2( j + 1)M
... 2(m + j)M
... 2(k + 1)M
... 2(k + m)M

0 0 ... 0 2M ... 2mM ... 2(k − j + 1)M ... 2(k + m − j)M

Ba+ occupancy

Initialized

Freed

2M
4M ...
2 jM 2( j + 1)M
... 2(k + 1)M
... 2(m + j)M
... 2(k + m)M

0 0 ... 0 2M ... 2(k − j + 1)M ... 2mM ... 2(k + m − j)M

2M 4M
... 2jM 2 jM
... 2 jM
... 2 jM
... 2 jM
Loaded
2M 4M
... 2jM 2 jM
... 2 jM
... 2 jM
... 2 jM

0 0 ... 0 2M ... 2mM ... 2(k − j + 1)M ... 2(k + m − j)M

0 0 ... 0 0 ... 0 ... 2(M − 1) ... 2m(M − 1)

Yb+ occupancy

Loaded

Freed

0 0 ... 0 2M ... 2(k − j + 1)M ... 2mM ... 2(k + m − j)M

0 0 ... 0 0 ... 2(M − 1) ... 2(m + j − k)(M − 1) ... 2m(M − 1)

0 0 ... 0 0 ... 0 ... 2 ... 2m
Max. number of heralded ions
0 0 ... 0 0 ... 2 ... 2(m + j − k) ... 2m

only between the successfully heralded communication ion and the corresponding memory ions.
B. Performance evaluation: Numerical results
Unconstrained repeaters—Here we numerically analyze the performance of the repeater protocol assuming there are no constraints on the number of repeater nodes, or the number of ions per node. We begin with the rate-vs-distance trade-off. To illustrate the results, we choose operating parameters of the repeater to be τ = 1 μs, τg = 1 μs (i.e., j = 1), τo = 50 μs, ηc = 0.3, ηd = 0.8, and the interrepeater transmissions are assumed to be over optical ﬁber of attenuation α = 0.2 dB/km and refractive i-
ndex 1.47. The operational errors in gates and measurements are chosen as g = 1 − F0, where F0 is the Werner ﬁdelity of the elementary link states. The value of F0 is varied from 0 (for ideal repeaters) to 10−4, 10−3 (with noisy operations). Different values of spatial multiplexing M = 1, 5, 10 are considered. The rates are numerically optimized over the time multiplexing block length m and the number of repeaters n. The maximum of the optimal values of the different rate expressions corresponding-
 to the different cases in Table IV (which for the chosen set of parameters happens to correspond to Table IV B, case 2), is plotted in Fig. 2. The rates are found to show subexponential decay with

respect to distance, primarily owing to deterministic entanglement swapping and additionally due to time multiplexing. The rates are higher for higher M, but the advantage over the

FIG. 2. Entanglement distribution rate as a function of total dis-

tance optimized over the number of repeater nodes and the degree

of time multiplexing, for different values of spatial multiplexing M,

noise parameter g, and τg = τ = 1 μs. These rates are compared

against the direct transmission benchmark, namely, the correspond-

ing

PLOB

bounds

(dot-dashed

lines)

given

by

−

M τ

log2 (1

−

η).

022623-8

MULTIPLEXED QUANTUM REPEATERS BASED ON …

PHYSICAL REVIEW A 105, 022623 (2022)

FIG. 3. Optimal degree of time multiplexing as a function of total distance for different values of spatial multiplexing M, noise parameter g, τg = τ = 1 μs, and optimal number of repeaters.
corresponding PLOB bounds calculated as per Eq. (8) also occurs at commensurately longer distances. In the presence of operational errors in the repeaters, the degradation of the rates with distance is more pronounced with increasing values of the noise parameter. Nevertheless, the rate-distance trade-off still beats the PLOB bound.
The optimal time multiplexing block length and the optimal number of repeaters for different degrees of spatial multiplexing M are plotted as functions of the total distance in Figs. 3 and 4, respectively. Notice that the optimal value of m increases with distance, saturating at large distances. The optimal value of m in relation to noise in the gates and measurements is found to behave nonmonotonically, ﬁrst decreasing then increasing with noise at large distances. However, most importantly, the -
values of m are higher for the lower value of M. In fact, at any given distance L and noise parameter, when M is varied, the optimal m (call it mopt) satisﬁes the same mode multiplexing product m = m × M. For a total distance of 150 km and noise parameter g 10−4, the optimal product is found to be mopt ≈ 220. The reason we ﬁnd an optimal value for the product is that the rate (in ebits/s) per spatial mode, i.e., the rate in Eq. (12) divided

FIG. 5. Required number of communication ions as a function of total distance for different values of spatial multiplexing M, noise parameter g, τg = τ = 1 μs, and optimal number of repeaters and time multiplexing.
by M, has a direct dependence on the product of the two multiplexing parameters, i.e., m × M. (The value 220 itself, though, is a function of the choice of system parameters such as the communication ion lifetime, gate times, optical ﬁber attenuation, and coupling and detection efﬁciencies.) As a result, for M = 1, 5, 10, we have mopt = 220, 44, 22, respectively. The optimal number of repeaters is seen to grow with the total distance at a rate proportional to M. It is found to naturally slow down -
with increasing gate and measurement noise, as more QR nodes would add more operational noise to the shared ebits. For example, for M = 10 and a total distance of L = 150 km, the optimal number of repeaters for noise parameter values g = 10−4, 10−3, are found to be 87 and 25, respectively, which amount to interrepeater spacing values of L0 ≈ 1.7 and 6 km, respectively. The number of communication and memory ions per repeater node (No, Nm ) required to support the optimal rates under the proposed m-
ode-multiplexing protocol are shown in Figs. 5 and 6, respectively. The value of No decreases subexponentially with distance so long as the gate and measurement noise g is

FIG. 4. Optimal number of repeater nodes as a function of total distance for different values of spatial multiplexing M, noise parameter g, τg = τ = 1 μs, and optimal time multiplexing.

FIG. 6. Required number of memory ions as a function of total distance for different values of spatial multiplexing M, noise parameter g, τg = τ = 1 μs, and optimal number of repeaters and time multiplexing.

022623-9

PRAJIT DHARA et al.

PHYSICAL REVIEW A 105, 022623 (2022)

FIG. 7. Entanglement distribution rate as a function of total dis-

tance optimized over the number of repeater nodes and the degree

of time multiplexing, for different values of spatial multiplexing

M, with realistic noisy gate operations of inﬁdelity g = 10−4, τ =

1 μs, and τg = 10τ = 10 μs. These rates are compared against the

direct transmission benchmark, namely, the corresponding PLOB

bounds

(dot-dashed

lines)

given

by

−

M τ

log2 (1

−

η).

small. In such a scenario, the required numbers are smallest for protocol with smaller M and increases with M. The value of No tends to increase with distance for g above a threshold. This is because large g drives down the optimal number of repeaters and consequently drives up the inter-repeater spacing. With increasing inter-repeater spacing, the protocol in Table IV B, case 2 warrants higher number of communication ions given by 2(MT + τg)/τ . On the other hand, the required number of memory io-
ns always increases with distance, since the optimal time multiplexing block length m increases, too, and the required number of memory ions is proportional to m. It is higher for lower values of M (or in other words for higher values of m).
We note that the rates attained in Fig. 2 based on the protocol in Sec. IV are higher than those reported in Ref. [29, Fig. 7(b)]. For instance, at a total distance of 150 km, noise

FIG. 9. Entanglement distribution rate as a function of total distance under constrained resource availability, Nomax = 125. The values of M are speciﬁed with realistic noisy gate operations of inﬁdelity g = 10−4 and τg = 1 μs, and j = τg/τ . The operational clock-cycle duration τ is different for the solid (τ = 1 μs) and dotted (τ = 10 μs) lines.
parameter g = 10−4, M = 10 spatial multiplexing, and all other parameters being identical, our protocol attains 20 000 ebits/s, whereas the protocol in Ref. [29] achieves 700 ebits/s. The rate enhancement does come at the cost of higher ion number requirements. For the said parameter values, the required number of communication ions and memory ions per repeater for our protocol are No = 170 and Nm = 55, respectively, whereas the protocol in Ref. [29] required only No = 10, Nm = 2.
To conclude this section, in Fig. 7, we plot the entanglement distribution rates when τ = 1 μs, and τg = 10 μs, i.e., for j = 10. In other words, this refers to a scenario where the gate operations are an order of magnitude slower compared to the clock-cycle duration for ion-photon entanglement generation, which is still retained at 1 μs. The end-to-end entanglement distribution rates are seen to decrease only marginally (compared to the case τg = τ = 1 μs). This is made possible by an increased r-
equirement on the number of

FIG. 8. Entanglement distribution rate as a function of total dis-

tance optimized over the degree of time multiplexing, for spatial multiplexing degree M = 10, noise parameter g = 10−4, τg = τ = 1 μs, and different values of inter-repeater spacing L0. These rates

are compared against the direct transmission benchmark, namely, the

corresponding

PLOB

bound

given

by

−

M τ

log2 (1

−

η).

FIG. 10. Entanglement distribution rate as a function of total
distance under constrained resource availability, Nmmax. For spatial multiplexing M = 5, realistic noisy gate operations of inﬁdelity g = 10−4 and τg = τ = 1 μs, the rates corresponding to different values of Nmmax are plotted.

022623-10

MULTIPLEXED QUANTUM REPEATERS BASED ON …

PHYSICAL REVIEW A 105, 022623 (2022)

TABLE VI. Timing chart for Tables IV B and IV C, case 2, i.e., when (τo > T τg) ∧ (τo T + τg > T ) and (τo > τg > T ) ∧ (τo T + τg > τg), respectively. The timing diagram for this protocol type is shown in Fig. 13.

Case 2

Ba+ occupancy

Yb+ occupancy

0

Time

Initialized

Freed

Loaded

Loaded Freed Max. number of heralded ions

0

2M

0

2M

0

0

0

τ

4M

...

...

0

4M

0

0

0

...

...

...

...

...

kτ

2(k + 1)M

2(M − 1)

2(kM + 1)

0

0

0

...

...

...

...

...

...

...

(k + j)τ

2(k + j + 1)M

2(M − 1)( j + 1) + 2

2(kM + j)

2

0

2

...

...

...

...

...

...

...

(k + j + m − 1)τ 2(k + j + m)M 2(M − 1)( j + m) + 2m 2(kM + j)

2m

−

2m

communication ions in the DSTI modules. For example, for M = 10, g = 10−4, while the required number of communication ions in the case of τg = τ = 1 μs was 170, it is 220 for the case τg = 10τ = 10 μs. Further, the repeater operation in the latter scenario warrants traps with distinct sectors of communication ions ( j = τg/τ = 10 number of sectors) that can be excited successively in a cyclical manner.
Constrained repeaters—Here we numerically analyze how
restrictions on the number of repeater nodes and on the
amount of ion resources at the repeaters affect the entangle-
ment distribution rates supported by the proposed protocol.
To understand how the entanglement distribution rates de-
teriorate upon moving away from the optimal number of
repeaters, the rates for different but ﬁxed values of inter-
repeater spacing L0 are plotted in Fig. 8 for repeater operations with M = 10 and g = 10−4. For L0 larger than the distancedependent L0opt, the rates are seen to be signiﬁcantly smaller. For example, with L0 = 20 km, the rate at a total distance of 150 km drops to ≈ 25% of its value corresponding to the optimal value of L0 ≈ 1.7 km. However, the rate-distance scaling remains unchanged in the limit of large distances,
which implies it is still possible to operate at rates higher than
direct transmission rates even with fewer and farther-spaced
repeaters at large distances.
With regard to the number of communication ions, packing
too many of these ions in a DSTI module can cause issues
with ion-photon entanglement due to resonant reabsorption of

emitted photons by neighboring communication ions. Hence,
the effect of restrictions on the number of communication ions
is an important consideration. Given a limit on the maximum number of communication ions Nomax, a ﬁxed gate operation time τg, and the minimum allowed clock-cycle duration τ min, the rates can be optimized over the number of repeaters and
time multiplexing parameter for different combinations of spatial multiplexing M and j where j = τg/τ can be varied by choosing different values for the clock-cycle duration τ . For Nomax = 125, τg = τ min = 1 μs, and noise parameter g = 10−4, Fig. 9 shows the plots of the repeater performance for a few different allowed M, j combinations, when the number of optical ions is constrained to 125. The solid lines show the repeater performance when j = 1, which appears to allow a maximum M of 5. By cha-
nging τ to 10 μs, i.e., by reducing j = 0.1, the maximum allowable M increases to 50. The performance under this modiﬁed regime of timing parameters is
shown by the dashed line, which is clearly suboptimal. Thus, a
higher degree of spatial multiplexing at the expense of slower clock rate 1/τ does not appear to yield higher rates. Instead, the optimal strategy appears to be to pick the highest possible
j value and then optimally choosing M such that the constraint Nomax is still satisﬁed.
Finally, with regard to the number of memory ions, given
a limit on the maximum number of these ions, the set of
allowed values for the time multiplexing parameter becomes
restricted. The reader may refer to the steady-state value of ion

TABLE VII. Timing chart for Table IV C, case 1, i.e., when (τo > τg > T ) ∧ (T + τg > τo > τg). The timing diagram for this protocol type is shown in Fig. 14.

Case 2 Time

Ba+ occupancy

Initialized

Freed

Loaded

Yb+ occupancy

Loaded

Freed

0 Max. number of heralded ions

0

2M

0

0

0

0

0

τ

4M

0

0

0

0

0

...

...

...

...

...

...

...

kτ

2(k + 1)M

0

0

0

0

0

...

...

...

...

...

...

...

jτ

2( j + 1)M

2M

2jM

2M

2(M − 1)

2

...

...

...

...

...

...

...

(j + m − 1)τ

2( j + m)M

2mM

2 jM

2mM

2m(M − 1)

2m

022623-11

PRAJIT DHARA et al.

PHYSICAL REVIEW A 105, 022623 (2022)

FIG. 11. Timing diagram for Table I, type A, when k − j + 1 m.
occupancy values in Tables V–VII to understand the dependence of various constraints on the protocol and network parameters. As a result the optimal rate drops faster with distance for smaller values of Nmmax as illustrated in Fig. 10. When Nmmax falls below a threshold, the rate-distance scaling no longer beats the direct transmission benchmark.
V. CONCLUSION
To conclude, we presented a general architecture for a repeater node based on DSTI modules, and discussed a repeater protocol based on spatial and time multiplexing. For DSTI modules with 138Ba+ as communication ions and 171Yb+ as memory ions, assuming reasonable values for operating parameters (operation errors under g < 10−4, gate time τg = 1 μs, clock-cycle duration τ = 1 μs, communication ion lifetime τo = 50 μs, coupling efﬁciency ηc = 0.3, and detection efﬁciency ηd = 0.8), the proposed repe-
ater protocols based on spatial and time multiplexing can attain entanglement distribution rate ∼20 000 ebits/s at a distance of 150 km,

FIG. 13. Timing diagram for Table I, type B.
with repeaters placed at ≈ 1.7 km spacing, and each containing about 170 and 55 138Ba+ and 171Yb+ ions, respectively. This constitutes a nearly 30 times improvement over the rate reported in the earlier work of [29] for the same set of operating parameters, but requires a larger number of ions at the repeater nodes. The larger ion number requirements can potentially be met by bootstrapping several DSTI modules at the repeater nodes. However, the modular interactions even within a repeater node wou-
ld then require probabilistic optically mediated entanglement swapping operations, which can cause a degradation of the entanglement distribution rates. This calls for the design of more advanced protocols that can assuage this degradation and optimally leverage multiple DSTI modules at repeater nodes. In this regard, allowing for arbitrary optically heralded intranode ion-ion logic across traps along with universal-capable logic in the traps, we will explore protocols that incorporate block entan-
glement distillation codes [44] as part of future work. These protocols will take advantage of multiple successful, elementary entanglement generation attempts, while alleviating the drawbacks stemming from the constraint of having to measure all the

FIG. 12. Timing diagram for Table I, type A, when k − j + 1 < m.
022623-12

FIG. 14. Timing diagram for Table I, type C.

MULTIPLEXED QUANTUM REPEATERS BASED ON …

PHYSICAL REVIEW A 105, 022623 (2022)

FIG. 15. Decision tree to determine relative timing parameter ordering and associated rate equations.

ions in a trap simultaneously and the probabilistic, optically heralded intranode logic.
ACKNOWLEDGMENTS
This work was supported by the National Science Foundation Convergence Accelerator Program, Award No. 2040695. N.M.L. additionally acknowledges support from the Army Research Ofﬁce, Award No. W911NF1910296. S.G. and K.P.S. additionally acknowledge the NSF Center for Quantum Networks (CQN), Grant No. EEC-1941583. K.P.S. thanks Liang Jiang for helpful discussions.
APPENDIX A: TIMING ANALYSIS FOR RESOURCE COUNT CALCULATION
There are multiple operating regimes for realistic operations with noisy and noninstantaneous quantum gates. The reader may refer to Table IV for a summary of the various

protocol types. We have examined the timing analysis of each protocol type in depth in Tables V–VII. The corresponding timing diagrams are shown in Figs. 11–14.
APPENDIX B: OPTIMIZATION PROCESS
Since the protocol in Sec. IV is determined by a relation between the timing parameters, it is not directly apparent, which rate equation holds true for a given set of protocol parameters (refer to Table II). The number of repeaters plays a primarily role in determining the heralding time T . For the present numerical analysis, we ﬁnd the optimal parameter values for a given set of conditions using standard optimization techniques. Depending on the optimal values calculated, we now have to make a -
decision about which type of rate equation from Table IV is actually applicable. This is done by traversing the decision tree for the optimal parameter values shown in Fig. 15. One can note that based on the conditions (red diamonds) that are satisﬁed, the end leaves of the decision tree indicate which rate equation holds true (blue boxes).

[1] I. H. Deutsch, Harnessing the power of the second quantum revolution, PRX Quantum 1, 020101 (2020).
[2] J. P. Dowling and G. J. Milburn, Quantum technology: The second quantum revolution, Philos. Trans. R. Soc., A 361, 1655 (2003).
[3] K. Bharti, A. Cervera-Lierta, T. H. Kyaw, T. Haug, S. AlperinLea, A. Anand, M. Degroote, H. Heimonen, J. S. Kottmann, T. Menke, W.-K. Mok, S. Sim, L.-C. Kwek, and A. AspuruGuzik, Noisy intermediate-scale quantum (NISQ) algorithms, arXiv:2101.08448.
[4] F. Xu, X. Ma, Q. Zhang, H.-K. Lo, and J.-W. Pan, Secure quantum key distribution with realistic devices, Rev. Mod. Phys. 92, 025002 (2020).
[5] Z. Zhang and Q. Zhuang, Distributed quantum sensing, Quantum Sci. Technol. 6, 043001 (2021).

[6] M. Kjaergaard, M. E. Schwartz, J. Braumüller, P. Krantz, J. I.J. Wang, S. Gustavsson, and W. D. Oliver, Superconducting qubits: Current state of play, Annu. Rev. Condens. Matter Phys. 11, 369 (2020).
[7] S. Pezzagna and J. Meijer, Quantum computer based on color centers in diamond, Appl. Phys. Rev. 8, 011308 (2021).
[8] C. D. Bruzewicz, J. Chiaverini, R. McConnell, and J. M. Sage, Trapped-ion quantum computing: Progress and challenges, Appl. Phys. Rev. 6, 021314 (2019).
[9] F. Flamini, N. Spagnolo, and F. Sciarrino, Photonic quantum information processing: A review, Rep. Prog. Phys. 82, 016001 (2019).
[10] R. Horodecki, P. Horodecki, M. Horodecki, and K. Horodecki, “Quantum entanglement,” Rev. Mod. Phys. 81, 865 (2009).

022623-13

PRAJIT DHARA et al.

PHYSICAL REVIEW A 105, 022623 (2022)

[11] S. Wehner, D. Elkouss, and R. Hanson, Quantum internet: A vision for the road ahead, Science 362 (2018).
[12] S. Pirandola and S. L. Braunstein, Physics: Unite to build a quantum internet, Nature (London) 532, 169 (2016).
[13] H. J. Kimble, The quantum internet, Nature (London) 453, 1023 (2008).
[14] S. Pirandola, R. Laurenza, C. Ottaviani, and L. Banchi, Fundamental limits of repeaterless quantum communications, Nat. Commun. 8, 15043 (2017).
[15] M. Takeoka, S. Guha, and M. M. Wilde, Fundamental rate-loss tradeoff for optical quantum key distribution, Nat. Commun. 5, 5235 (2014).
[16] H.-J. Briegel, W. Dür, J. I. Cirac, and P. Zoller, Quantum Repeaters: The Role of Imperfect Local Operations in Quantum Communication, Phys. Rev. Lett. 81, 5932 (1998).
[17] W. J. Munro, K. Azuma, K. Tamaki, and K. Nemoto, Inside quantum repeaters, IEEE J. Sel. Top. Quantum Electron. 21, 78 (2015).
[18] M. Ghalaii and S. Pirandola, Capacity-approaching quantum repeaters for quantum communications, Phys. Rev. A 102, 062412 (2020).
[19] J. Dias, M. S. Winnel, N. Hosseinidehaj, and T. C. Ralph, Quantum repeater for continuous-variable entanglement distribution, Phys. Rev. A 102, 052425 (2020).
[20] K. P. Seshadreesan, H. Krovi, and S. Guha, Continuous-variable quantum repeater based on quantum scissors and mode multiplexing, Phys. Rev. Research 2, 013310 (2020).
[21] P. Loock, W. Alt, C. Becher, O. Benson, H. Boche, C. Deppe, J. Eschner, S. Höﬂing, D. Meschede, P. Michler, F. Schmidt, and H. Weinfurter, Extending quantum links: Modules for ﬁber and memory based quantum repeaters, Adv. Quantum Technol. 3, 1900141 (2020).
[22] N. Sangouard, C. Simon, H. de Riedmatten, and N. Gisin, “Quantum repeaters based on atomic ensembles and linear optics,” Rev. Mod. Phys. 83, 33 (2011).
[23] L. Childress, J. M. Taylor, A. S. Sørensen, and M. D. Lukin, Fault-tolerant quantum repeaters with minimal physical resources and implementations based on single-photon emitters, Phys. Rev. A 72, 052330 (2005).
[24] S. Muralidharan, L. Li, J. Kim, N. Lütkenhaus, M. D. Lukin, and L. Jiang, Optimal architectures for long distance quantum communication, Sci. Rep. 6, 20463 (2016).
[25] P. Dhara, A. Patil, H. Krovi, and S. Guha, Subexponential rate versus distance with time-multiplexed quantum repeaters, Phys. Rev. A 104, 052612 (2021).
[26] C. Monroe, Quantum networks with trapped ions, in International Conference on Quantum Information, OSA Technical Digest (CD) (Optica Publishing Group, 2007), paper IThA3.
[27] C. Monroe and J. Kim, Scaling the ion trap quantum processor, Science 339, 1164 (2013).
[28] N. Sangouard, R. Dubessy, and C. Simon, Quantum repeaters based on single trapped ions, Phys. Rev. A 79, 042340 (2009).

[29] S. Santra, S. Muralidharan, M. Lichtman, L. Jiang, C. Monroe, and V. S. Malinovsky, Quantum repeaters based on two species trapped ions, New J. Phys. 21, 073002 (2019).
[30] W. P. Grice, Arbitrarily complete Bell-state measurement using only linear optical elements, Phys. Rev. A 84, 042331 (2011).
[31] I. V. Inlek, C. Crocker, M. Lichtman, K. Sosnova, and C. Monroe, Multispecies Trapped-Ion Node for Quantum Networking, Phys. Rev. Lett. 118, 250502 (2017).
[32] T. R. Tan, J. P. Gaebler, Y. Lin, Y. Wan, R. Bowler, D. Leibfried, and D. J. Wineland, Multi-element logic gates for trapped-ion qubits, Nature (London) 528, 380 (2015).
[33] J. Hannegan, U. Saha, J. D. Siverns, J. Cassell, E. Waks, and Q. Quraishi, C-band single photons from a trapped ion via two-stage frequency conversion, Appl. Phys. Lett. 119, 084001 (2021).
[34] J. D. Siverns, J. Hannegan, and Q. Quraishi, NeutralAtom Wavelength-Compatible 780 nm Single Photons from a Trapped Ion via Quantum Frequency Conversion, Phys. Rev. Applied 11, 014044 (2019).
[35] S. Crain, C. Cahall, G. Vrijsen, E. E. Wollman, M. D. Shaw, V. B. Verma, Sae Woo Nam, and J. Kim, High-speed lowcrosstalk detection of a 171Yb+ qubit using superconducting nanowire single photon detectors, Commun. Phys. 2, 97 (2019).
[36] V. Negnevitsky, M. Marinelli, K. K. Mehta, H.-Y. Lo, C. Flühmann, and J. P. Home, Repeated multi-qubit readout and feedback with a mixed-species trapped-ion register, Nature (London) 563, 527 (2018).
[37] Y. Lee, E. Bersin, A. Dahlberg, S. Wehner, and D. Englund, A quantum router architecture for high-ﬁdelity entanglement ﬂows in multi-user quantum networks, arXiv:2005.01852.
[38] S. Krastanov, H. Raniwala, J. Holzgrafe, K. Jacobs, M. Loncˇar, M. J. Reagor, and D. R. Englund, Optically-Heralded Entanglement of Superconducting Systems in Quantum Networks, Phys. Rev. Lett. 127, 040503 (2021).
[39] K. Molmer and A. Sorensen, Multiparticle Entanglement of Hot Trapped Ions, Phys. Rev. Lett. 82, 1835 (1999).
[40] Y. Wang, M. Um, J. Zhang, S. An, M. Lyu, J.-N. Zhang, L.M. Duan, D. Yum, and K. Kim, Single-qubit quantum memory exceeding ten-minute coherence time, Nat. Photonics 11, 646 (2017).
[41] W. K. Wootters and W. H. Zurek, A single quantum cannot be cloned, Nature (London) 299, 802 (1982).
[42] S. Guha, H. Krovi, C. A. Fuchs, Z. Dutton, J. A. Slater, C. Simon, and W. Tittel, Rate-loss analysis of an efﬁcient quantum repeater architecture, Phys. Rev. A 92, 022357 (2015).
[43] M. Razavi, M. Piani, and N. Lutkenhaus, Quantum repeaters with imperfect memories: Cost and scalability, Phys. Rev. A 80, 032301 (2009).
[44] C. H. Bennett, D. P. Di Vincenzo, J. A. Smolin, and W. K. Wootters, Mixed-state entanglement and quantum error correction, Phys. Rev. A 54, 3824 (1996).

022623-14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:59.469Z
- **Text Length:** 67331 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
