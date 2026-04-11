# PDF Document: Knollmann 等 - 2024 - Integrated photonic structures for photon-mediated.pdf

**File Path:** Knollmann 等 - 2024 - Integrated photonic structures for photon-mediated.pdf

**Processed Date:** 2026-02-10T18:15:01.151Z

**File Size:** 10591.00 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 368

**Title:** (Integrated photonics QNET - 2024 MIT) Integrated photonic structures for photon-mediated entanglement of trapped ions

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Integrated photonic structures for photon-mediated entanglement of trapped ions
F. W. Knollmann,1, ∗ E. Clements,1 P. T. Callahan,2 M. Gehl,3 J. D. Hunker,3 T. Mahony,2 R. McConnell,2 R. Swint,2 C. Sorace-Agaskar,2 I. L. Chuang,1 J. Chiaverini,1, 2, † and D. Stick3, ‡
1Massachusetts Institute of Technology, Cambridge, Massachusetts 02139, USA 2Lincoln Laboratory, Massachusetts Institute of Technology, Lexington, Massachusetts 02420, USA
3Sandia National Laboratories, Albuquerque, New Mexico 87185, USA (Dated: January 17, 2024)
Trapped atomic ions are natural candidates for quantum information processing and have the potential to realize or improve quantum computing, sensing, and networking. These applications often require the collection of individual photons emitted from ions into guided optical modes, in some cases for the production of entanglement between separated ions. Proof-of-principle demonstrations of such photon collection from trapped ions have been performed using high-numerical-aperture lenses and single-m-
ode fibers, but integrated photonic elements in ion-trap structures offer advantages in scalability and manufacturabilty over traditional optics. In this paper we analyze structures monolithically fabricated with an ion trap for collecting single photons from ions, coupling them into integrated waveguides, and manipulating them via interference. We discuss practical considerations for realizing photon-mediated entanglement between trapped ions using these waveguide-based devices.

arXiv:2401.06850v1 [quant-ph] 12 Jan 2024

1. INTRODUCTION
Systems of trapped atomic ions are among the best prospects for practical quantum computing, as ions of the same species form identical qubits, are well isolated from noise sources, and allow high-fidelity laser- or microwavebased quantum-logic operations [1, 2]. Moreover, their natural ability to interface with photonic flying qubits makes ions a promising technology for applications that require both long memory times and photonic qubit transduction, including quantum networks [3], quantum repea-
ters [4], and quantum sensing [5]. These applications rely on coupling photons emitted from individual ions into single mode structures to mediate entanglement between separate nodes. This procedure is often called remote entanglement generation because it supports large distances between nodes, as in a quantum repeater. More generally, it is known as photon mediated entanglement (PME), for it can also connect separate but nearby modules in a single quantum computer [6] or a more generic quantum i-
nformation processing system.
The traditional technique used in trapped-ion-based PME experiments relies on a high numerical aperture (NA) lens to collect light into a single mode fiber. Early experiments demonstrated 0.4% collection efficiency η of photons from each of two ions into fibers to achieve a remote entanglement rate rent = 2 mHz [7]. Since rent scales with η2, considerable gains are possible by increasing the collection efficiency using large lens elements positioned in close proximity to the emitters. Using this s-
trategy, recent experiments have demonstrated η ≈ 7% and rent = 182 Hz [8]. These experiments involved entangling each ion qubit with photon states distinguished
∗ fwk@mit.edu † john.chiaverini@ll.mit.edu ‡ dlstick@sandia.gov

by their polarization or frequency, though other schemes using the photon number or arrival time are possible.
Recent improvements for PME notwithstanding, these traditional approaches will not easily scale to larger systems, due mainly to the limitations of free-space optics for imaging extended arrays of closely spaced ions [9]. Since the sizes of high-numerical-aperture bulk optics are incommensurate with the attainable array pitch, traditional lenses consume considerably more lateral chip area than they can efficiently image. For a typical lens used for PME [10], a Zemax simulation using the Huygens po-
intspread-function to assess the collection of light from an ion into a single mode fiber shows that -2.7 dB of the light that hits the lens is coupled into the fiber for an onaxis ion. For an ion that is 10 µm off axis, the efficiency drops to -13.0 dB due to increased aberration. Assuming an achievable ion-site array pitch of 250 µm in one or two dimensions, a 25 mm diameter lens that is used to collect photons from only a single site leads to a ∼100to ∼8000-fold reduction in the fraction of ion-
s that can be imaged for light collection, respectively. To address more sites with a single collection optic, a lens may be designed to increase the effective field-of-view by reducing off-axis aberrations, but this will generally result in sacrificing collection efficiency, a major drawback for the PME rate.
Alternatives that are more scalable include miniaturized optics that are hybrid or monolithically integrated with the trap to collect photons emitted from ions into single-mode waveguides or fibers. Examples of hybrid integration of separate optical structures with ion traps include microlens arrays [11], micro-cavities [12], and diffractive elements or metamaterials on separate substrates [13, 14]. Separating the optical elements from the trap simplifies fabrication and eases trap geometry constr-
aints. However, these approaches face significant alignment challenges, since maximizing photon collection efficiency is accompanied by tight positional tolerances.

Monolithically integrated collection optics have a significant advantage because they can be precisely aligned using lithographic techniques. We therefore focus on collection elements based on trap-integrated diffractive waveguide-beam couplers, also known as grating couplers, such as those that have been employed for directing light to ions [15–19]. These demonstrations have shown improvements in beam-pointing and phase stability as well as resilience to vibrations of the ion-trap system [20–22].-
 Beyond scalability, integrated photonic elements based on this technology may also offer similar improvements to the rate and fidelity of PME.
In this paper we describe monolithic integration of diffractive collection optics to improve photon-mediated entanglement generation in arrayed trapped-ion systems. We further analyze several other integrated optical components needed to support PME, as well as their assembly into photonic integrated circuits (PICs). This analysis is differentiated among relevant PME protocols that use photon interference and erasure of which-path information to create heralded Bell pairs. We show how these protoc-
ols imply particular benefits and limitations when using waveguide-based integrated optical elements, and we suggest avenues to improve the PME rate by leveraging optical integration to perform parallel operations over many ion pairs.
We begin by briefly describing relevant protocols for PME in Sec. 2, then lay out integrated optical components with the potential to realize these protocols in Sec. 3. We describe implications of their use in Sec. 4.
2. PROTOCOLS FOR PHOTON MEDIATED ENTANGLEMENT
Photon mediated entanglement between two ions is typically accomplished with the ions each encoding a qubit in their ground electronic states, labelled |↑⟩, |↓⟩, which can be coupled via photons to an excited state |e⟩. Entanglement between the two ions proceeds by initial ion-photon entanglement in each ion of a pair, the subsequent heralded transfer of that entanglement to the two ions via the erasure of which-path information through photon interference (e.g. the Hong-Ou-Mandel effect [23]) and-
 photon detection. Certain detection patterns project the ions into an entangled state, ge√nerally one of the Bell states |Ψ±⟩ = (| ↑1↓2⟩ ± | ↓1↑2⟩/ 2, conditioned on the measurement result. Several schemes for this process have been devised [24], with the photonic variables used as intermediaries being the most natural way to categorize them. These are briefly described here (see Fig. 1), with particular attention paid to their relative strengths and weaknesses vis-a-vis realizations with PICs (s-
ee Table 1).
Each of these schemes relies on the photons from each ion being indistinguishable, both temporally and spatially, for high fidelity erasure of which-path information. Mode matching in the temporal dimension is determined

(a) ion A |e⟩

ion B |e⟩

(b) |e⟩t1

2

time |e⟩

|e⟩t2

|↑⟩

|↑⟩

|↓⟩

|↓⟩

ion A ion B NPBS

|↑⟩

|↑⟩

|↑⟩

|↓⟩

|↓⟩

|↓⟩

t1

t2

ion A ion B ion A ion B

NPBS

(c) |e⟩

σ+ (H)

π (V)

|↑⟩ |↓⟩

Bell-state analyzer ion A ion B

NPBS

H

V

V

H

PBS

(d) |e⟩

𝜈1

𝜈2

|↑⟩ |↓⟩

Bell-state analyzer ion A ion B

NPBS

𝜈1

𝜈2

𝜈1

𝜈2

freq. selective splitter

Fig. 1. Photon mediated entanglement protocols using four different photonic variables: number (a), time-bin (b), polarization (c), and frequency (d). We show a Bell-state analyzer to double the entanglement rate for the polarization and frequency protocols [8]. Note that discriminating between the two photons based on frequency is nontrivial for typical gigahertz splittings. PBS: Polarizing beam splitter. NPBS: Non-polarizing beam splitter.

by the timing of the excitation pulse, the decay profile of the atomic transition used, and the path length difference between each ion and the photon interference point. The spatial mode matching is determined at the photon interference point. Integrated photonic components are in many cases more capable of meeting these requirements than free-space optics, as we describe below and in Sec. 4.
The PME fidelity F is given by the overlap of the actual state that is generated experimentally, |ψ⟩, with the ideal Bell state |Ψ±⟩: F = |⟨Ψ±|ψ⟩|2. In some cases, such as for poor temporal overlap, one can trade-off entanglement rate and fidelity by changing the post-selection parameters (i.e. by narrowing the acceptance time window for a valid herald pattern [25]). The required entanglement fidelity is ultimately governed by application requirements, and in particular the quantum error cor-

3

Atomic

Photonic variable Initial state for
pulsed excitation Control pulses Probability of
successful herald Main fidelity limitations
Requirement for path length stability
Integrated components
required
Collection angle dependence

Number superposition state
SP, 1Q, PE 2peγϵ
double excitation, loss imbalance wavelength-scale
collection gratings, splitter, detector
rate only

Time-bin

Polarization

Frequency

superposition state

projected state

projected state

SP, 1Q, PE

SP, PE

1 2

(peγ

ϵ)2

1 2

(peγ

ϵ)2

single qubit rotations

mixing of polarization states in PIC

SP, PE

1 2

(pe

γϵ)2

mixing of frequency states

cm-scale

cm-scale

cm-scale

collection gratings, splitter, detector
rate only

polarization selective collection gratings,
mode-dependent splitter/combiner,
mode-agnostic splitter, detector
rate and fidelity

collection gratings, splitter, frequency dependent splitter,
detector
rate only

Photonic

Table 1. A comparison of four schemes (number, time-bin, polarization, and frequency) used for generating PME, specifying

constraints and requirements on the atomic and photonic subsystems involved. The analysis assumes a ground state qubit

encoded in levels |↑⟩ and |↓⟩. Each protocol begins with a form of state preparation (SP) into a definite quantum state. Some

require interleaved single-qubit rotations (1Q) and all rely on pulsed excitation (PE) from the ground state manifold to a fast

decaying excited level with probability pe. The photon used for heralding entanglement is generated by spontaneous decay

from this excited level back to the ground state manifold with probability given by the branching ratio γ. The probability

of a detector click caused by this photon is ϵ =

Ω 4π

pt

ηD

.

This probability is split into the collection probability given by the

detection solid angle Ω, the transmission probability from grating to detector pt and the detector quantum efficiency ηD. There

is a numerical factor based on which fraction of possible outcomes generate viable heralding patterns. Here we assume that a

partial Bell-state analyzer is used for the polarization and frequency protocols.

rection code employed for entanglement distillation [26]. For low-overhead codes, the acceptable infidelity is generally <1%. The PME fidelity does not have to reach this threshold because entanglement distillation can increase the quality of entanglement at the cost of a proportional overhead of lower quality entangled pairs [27]. However, to the extent that additional overhead can greatly increase the resources or time needed to perform a computation, maximizing entanglement fidelity (while stil-
l maintaining a reasonable rent) is highly desirable.
A. Number-based entanglement
The simplest protocol for PME relies on exciting each emitter with low probability pe, followed by detection of a single photon to project one (and ideally only one) ion into the excited state; the simultaneous emission of photons from both ions is unlikely, with a probability p2e [28]. This method has been demonstrated using trapped ions [29] and nitrogen vacancy (NV) centers in diamond [30]. As shown in Fig. 1(a), each ion is prepared
√ in a superposition state (1 − pe)|↓⟩ + pe|↑⟩, where pe ≪ 1. A pulsed excitation couples |↑⟩ → |e⟩ with unit probability. The state |e⟩ then decays back to |↑⟩ via spontaneous emission of a photon. Selection rules are used to guarantee no decay from |e⟩ to |↓⟩. The photon

decay pathways from both ions are combined on a nonpolarizing beamsplitter and measured using two detectors as shown in Fig. 1.(a). If a single count is registered across both detectors, the lack of which-path information results in high probability of an entangled state with only one ion having been transferred to |↑⟩. Due to the low probability of excitation and assuming the overall detection efficiency is small, the resulting (unnormalized) ion state to lowest-order in pe is:

|ψ⟩ =

(1

− 2

pe)

(|↑1

↓2

⟩

±

eiϕ|↓1↑2

⟩)

+

√ pe|↑1↑2⟩,

(1)

where the first term can be converted to a Bell state by

local operations, ϕ depends on the difference in optical

path length from each ion to the non-polarizing beam

splitter (k∆l), and the sign depends on which detector

registered a click.

This protocol requires a trade-off between entangle-

ment rate and fidelity. On the one hand, rent increases

proportionally with pe, since the success probability

scales as psuccess = 2peγϵ, where γ is the branching ratio

and the probability of a detector click with ion emis-

sion

is

ϵ

=

Ω 4π

ptηD

,

with

collection

solid

angle

Ω,

photon

transmission probability pt, and detector quantum effi-

ciency ηD. On the other hand, the excitation probability

pe must be kept low to minimize the probability of both

ions emitting a photon, since double-excitation limits the

4

Ion Ca+ Sr+ Ba+
Yb+

P1/2 λ (nm)
397 422
493
369

P3/2 λ (nm)
393 408
455
329

Ground st. hyperfine (A: splitting [GHz])
43: 3.2
87: 5.0 133: 9.9 137: 8.0 171: 12.6 173: 10.5

Table 2. Common ion species and their transition wavelengths most suitable for given protocols. The S1/2 →P1/2 transitions are favorable for the polarization protocol, while S1/2 →P3/2 transitions are required for number and time-bin entanglement because of the available closed transition. Note that the frequency protocol works for either transition. However, it benefits from the larger ground-state frequency splitting of ions with hyperfine structure. Representative isotopes and their ground-stat-
e hyperfine splitting are shown in the last column (values from refs. [32–37]). The other protocols are more straightforwardly implemented on ions without hyperfine structure. An exception is the polarization protocol as described for 171Yb+ in [24]. We have omitted decay channels with transition wavelengths in the IR since their low branching ratios lead to very low rates without cavity enhancement [25].

fidelity to (1 − pe) under the assumption of low overall detection efficiencies.
There are three further fidelity limitations specific to this protocol. First is that the optical path length difference must remain stable as it determines the relative phase factor of the final state. This requirement should be eased by the inherently better interferometric stability of integrated photonic circuits. Second, the combined probability of exciting and subsequently detecting a photon from either ion must be balanced. Any imbalance leads to partial knowledge of which ion is in state |-
↑⟩ [31]. Finally, the fidelity is limited by the ability to determine which ion scattered a photon because of motional excitation due to photon recoil [28]; this infidelity can be mitigated by decreasing the photon recoil probability with tighter trapping [24].

B. Time-bin entanglement
A second scheme relies on detecting photon emission in two distinct time bins to project the ions into an entangled state. This protocol has primarily been demonstrated using NV centers [38]. In time-bin entanglement, as depicted in Fig. 1(b), only one of the ion ground states (|↑⟩ in the figure) couples to |e⟩. We assume here that both ions begin in an equal superposition of |↑⟩ and |↓⟩. An optical pulse applied to both ions couples |↑⟩ ↔ |e⟩ and leads to emission of a photon from any ion project-
ed into |↑⟩. Next a π pulse applied to both ions inverts the populations of the ground states. A final optical pulse applied to both ions again couples |↑⟩ ↔ |e⟩ and leads

to emission of a photon if an ion is now projected to |↑⟩. The two optical pulses must be separated in time by more than the lifetime of |e⟩ and the recovery time of the detector. Entanglement is heralded by collecting and detecting a photon after both optical pulses. This implies that one of the two ions projected to |↑⟩ after the first optical pulse, was then transferred to |↓⟩ by the π pulse, and then the second ion was projected to |↑⟩ by the second optical pulse. Thus, observing photons in bo-
th time bins results in the entangled state:

|ψ±⟩

=

1

√ 2

(|↑1↓2⟩

±

eiϕ|↓1↑2⟩),

(2)

where ϕ = ∆k∆l + ∆ω∆t and the sign depends on

whether the same detector or different detectors clicked

in the two time-bins. The phase depends on the optical

path length difference between the two arms times the

wavenumber difference between the two photons, which

is small, since ∆k ≪ k. It also depends on the time

between pulses multiplied by the qubit frequency differ-

ence (|↓⟩ → |↑⟩) between ions. The ∆ω∆t term is gen-

erally small, but shows that the qubit frequency differ-

ence should be stable over the course of the experiment.

Overall, ϕ is constant across experiments to good approx-

imation and this state can thus be reliably turned into a

Bell-state by single qubit rotations.

The probability of a successful herald for this and

the other multi-photon entanglement schemes scales as

1 2

(pe

γ

ϵ)2

because

two

photons

must

be

collected

and

de-

tected. However, the excitation probability pe should

approach unity, so the heralding probability can be com-

parable to the number-based entanglement case. Fur-

thermore, path length stability is required only to the

wavelength of the difference frequency between the two

photons 2πc/∆ν, which is typically centimeter-scale or

greater and is thus very relaxed compared to the number-

based entanglement protocol [39].

C. Polarization entanglement
Polarization-based entanglement takes advantage of excited-state decay into two orthogonal polarization states. For this scheme, as depicted in Fig. 1(c), the excited state |e⟩ can decay into either of the possible ground states, |↑⟩ and |↓⟩, via emission of photons of different polarization, such as |π⟩ and |σ+⟩. This protocol is also possible with other photon polarizations, e.g. |σ−⟩ and |σ+⟩, as long as the polarization states used are orthogonal at the point of interference to avoid degraded -
fidelity of the entangled state [8]. Each ion is maximally entangled with the photon it emits. The decay photons are collected from both ions and interfered using a non-polarizing beamsplitter (NPBS). The two output ports can be measured directly or fed into polarizing beamsplitters (PBSs) to create a partial Bellstate analyzer. Due to photon statistics, a measurement of one photon in each output port of the NPBS

5

projects the ions int√o the corresponding anti-symmetric Bell state |Ψ−⟩ = 1/ 2 (|↓1↑2⟩ − |↑1↓2⟩) up to a local relative phase factor eiϕ. A partial Bell state analyzer can improve rent by a factor of 2 by add√itionally identifying the symmetric Bell state |Ψ+⟩ = 1/ 2 (|↓1↑2⟩ + |↑1↓2⟩), where both photons exit the same NPBS output with orthogonal polarizations and can thus be split by the PBS and detected separately. This state and the local phase ϕ = ∆k∆l can be transformed to the anti-symmetric -
Bell state through a single-ion rotation.
D. Frequency-based entanglement
Frequency-based entanglement, as depicted in Fig. 1(d), proceeds analogously to polarization entanglement but with the ion state information encoded in the photon frequency rather than its polarization. The photon frequency difference between decay channels must be sufficient to make the photons distinguishable and preclude interference. If a partial Bell state measurement is desired here, the PBSs that are used in polarization-based entanglement must be replaced by a frequency-selective element, -
such as an interferometer. Because hyperfine ground states are typically separated only by frequencies of order gigahertz (see Table 2), these interferometric structures may be relatively large (compared to pother PIC components) and potentially challenging to incorporate into an integrated platform.

mapped to a path degree of freedom. The waveguides deliver the light into a mode converter which maps the two photon paths, and hence the two polarizations, to a fundamental spatial mode and to a higher order spatial mode that then propagate identically through the system in a multimode waveguide. Which-path information is removed using a mode agnostic beamsplitter which interferes both modes independently and either simultaneously separates the two modes or sends them to a mode de-multiplexer for-
 a partial Bell-state analyzer. In contrast to the polarization case, frequency based PME requires simpler photonic devices because even relatively narrow bandwidth PIC components tend to have bandwidths of a few nanometers, while the frequency splitting of a photonic qubit produced from an ion is typically ∼10 GHz (see Table 2). However, creating a partial Bellstate analyzer to increase the rate by a factor of 2 can be challenging due to this small frequency difference and likely requires a reson-
ant device (see further discussion below).
To maximize PME fidelity and rate, each component in the optical path needs to be designed to optimize performance and minimize loss. Below, we step through the components of the PICs in order and discuss key considerations, performance metrics, and the current state-ofthe-art (cf. also Table 1).
A. Photon collection gratings

3. INTEGRATED OPTICS FOR PHOTON COLLECTION AND INTERFERENCE
The protocols for photon mediated entanglement map to different photonic integrated circuit architectures, each with unique requirements for PIC components and component performance. However, they share a general architecture of collecting photons with diffraction gratings into on-chip waveguides, interfering/combining them with beamsplitters, and detecting them with integrated or off-chip detectors. Fig. 2 shows a conceptual illustration of what PICs for PME integrated into an ion trap might look-
 like. Part (a) shows trap integrated elements in a PIC for the number or time-bin protocols, in this case for ions on a single chip, while part (b) depicts chipto-chip remote entanglement generation. Fig. 2(c) and Fig. 2(d) show circuit diagram examples analogous to that in (a) for polarization based PME and frequency based PME, respectively.
For photon-number or time-bin based PME the photons from both ions can simply be combined on a waveguide beamsplitter before being sent to the detectors. In contrast, polarization based PME requires multiple photon encodings. Light is collected from two orthogonally polarized decay channels using a combined grating coupler, which couples the two photon polarizations into separate waveguides. The polarization degree of freedom is

One of the most promising approaches for monolithic collection optics is based on grating couplers, which can couple light emitted from an ion into single- or multimode waveguides via diffractive and taper structures (see Fig. 3). A grating coupler used for collection can be straightforwardly optimized based on its performance as an out-coupler, due to the absence of elements which break time reversal symmetry. A longitudinal focusing effect can be produced by varying the local grating pitch Λ bas-
ed on the desired emission angle and the relative position of the teeth along the grating length. To minimize the number of diffracted orders, Λ is set to the smallest pitch that will diffract normal to the plane of the grating coupler, which is Λ = λ/2 directly beneath the ion. The guided wavelength is λ = λ0/neff , where λ0 is the free-space wavelength and neff is the effective propagation constant of the grating. For forward diffraction angles away from normal, such as for teeth on the end of t-
he grating between the ion and the collection waveguide, Λ > λ/2, while at backward diffraction angles, for teeth on the grating end opposite the waveguide, Λ < λ/2 (see Fig. 3(b)). Focusing in the lateral dimension can be achieved by curving the grating teeth, analogously to a lens.
Fabrication constraints limit the minimum resolvable grating pitch, thereby limiting the length of a grating coupler on the backward-emitting end. For example, using 193 nm photolithography in many wafer-scale

6

Fig. 2. Depiction of PICs and components for PME based on monolithic integration in a surface-electrode ion-trap chip. (a) Cut-away illustration containing multiple layers of an ion-trap chip with a PIC embodying the concept for same-chip PME: substrate (black), SiO2 cladding (blue), waveguide layer with representative photonic devices (gray), and metal layer for trap electrodes (gold). The PIC layout shown here is compatible with number, time-bin, and frequency (without Bell-state analysis) based-
 PME. Both emission gratings for ion control (top, not discussed here), and collection gratings for photon collection (center), are shown. (b) Potential layout for remote entanglement generation with collection optics for ions A and B on separate chips with a fiber-based photonic interconnect. Specific photonic layouts for polarization-based and frequency-based (with Bell-state analysis via frequency selection) PME can be seen in (c) and (d) respectively. Inset in (d) shows possible options for si-
ngle-photon detection, either via detector integration or waveguide-to-fiber coupling.

research-fabrication facilities, lines and spaces can be limited to approximately 120 nm in width, which corresponds to a minimum pitch of about 240 nm. Grating couplers designed to collect 400 nm light are therefore unable to extend outward from the waveguide much farther than the projected location of the ion in the PIC plane without resorting to the use of higher resolution lithography. The grating length is also limited on the forward-emitting end of the grating. As teeth are placed farther fr-
om the ion, the diffraction angle (with respect to normal) increases. Coupling efficiency decreases at steeper diffraction angles and transmission across the airwaveguide surface can be limited by increased Fresnel reflection. Additionally, for gratings with constant scattering strength as a function of position, increased grating length increases the probability that ion emission is scattered back out of the grating before reaching the waveguide. There is therefore an optimum grating length that -
balances these trade offs.
For gratings that have a constant diffraction efficiency

throughout, the emission of the grating will have exponentially decaying intensity along its length (proportional to the intensity within the grating). This limits the maximum effective length of the grating, as well as reduces the coupling efficiency to the ion due to reduced modematching between the ion emission and grating coupler diffraction. This can be addressed by spatially varying the diffraction strength (apodization) along the length of the grating, which can be effected with a variety o-
f techniques, such as varied etch depths [40, 41], digital patterning of subwavelength features [42], and/or reduced duty cycles [17]. Each of these apodization techniques can be limited by fabrication challenges with accurate partial etching or lithographically resolving small feature sizes, e.g. with electron-beam lithography.
Coupling efficiency is also affected by the vertical structure of a grating. Single-layer waveguide grating couplers with fully etched grating teeth diffract upward and downward with equal efficiency (assuming a vertically symmetric etch profile), limiting the collection/transmission

7

(a)
h

100 µm

(b) (c)

l

b

a

Λ<λ/2

grating

Λ

Λ>λ/2

l

electrode waveguide

Fig. 3. Images and simulations of monolithically fabricated collection gratings integrated into an ion trap. Part (a) shows a conceptual rendering labeled with the dimensions of the RF electrodes (dark green, both electrodes of the same width), control electrodes (light green), and an ion that is centered above the grating (blue). The inset is a scanning-electron micrograph of a fabricated ion trap containing a smaller grating on the left, designed for light delivery, and a test structure of a lar-
ger grating on the right, designed for light collection. Part (b) is a profile of the grating and nearby layers, showing the reduced pitch on the distal end of the waveguide. The main panel of (c) shows the fraction of the full solid angle subtended by the grating as a function of optic length l, for h = 50 µm, a = 62 µm, and b = 50 µm. This is the fraction of ion light, emitted spherically symmetrically, that would strike the grating. The inset in part (c) shows the trade-off between the radial t-
rap frequency (solid line, a measure of trap strength), and solid-angle exposure of the ion to the grating (dashed line), when the trap geometry is varied.
efficiency to 50%. This limitation can be mitigated using dual-waveguide layer gratings with patterning that breaks the symmetry and increases the grating diffraction in the upward direction [43].

The inset in Fig. 3(a) shows a microfabricated ion trap with, on the left, an emission grating for light delivery to an ion, and on the right, a proof-of-principle larger rectangular grating for light collection from an ion, a combined layout partially realizing the concept in Fig. 2. While the collection grating in this initial device did not function as desired due to limitations imposed by photolithography (addressable as described below in Sec. 3 A 2), it demonstrates the feasibility of integr-
ating these devices with functional ion trap chips.
1. Space constraint trade-offs for optical and trapping elements
A fundamental limitation on the amount of light that can be collected by a grating between the RF electrodes in a surface trap is the solid angle exposure to the ion. Since the position of the RF null, and therefore ion height (h, from Fig. 3(a)), scales with the separation a and width b of the RF electrodes for a simple surface trap with a ground plane under the grating, increasing the gap and other dimensions proportionally will not change the solid angle or amount of light collection. An absolu-
te upper bound of π steradians (corresponding to a fractional exposure of 25%) can be calculated using infinitely thin RF electrodes (resulting in a = 2h) and an infinitely long collection surface, though this corresponds to an unrealistic geometry that would require extremely high voltages to trap an ion and consume long axial sections of the trap. If a geometry is chosen to maximize trap strength (i.e. ion motional frequency) for a given voltage, the fractional exposure for an infinitely long sp-
ace between the RF electrodes is reduced to 12.5%. For h = 50 µm , this corresponds to a = 41 µm and b = 100 µm .
The inset in Fig. 3(c) shows this trade-off when the length of the collection optic is also reasonably constrained. The red, solid curve is a calculation of the normalized radial motional frequency for a trap with fixed voltage, drive frequency, and an ion height of h = 50 µm above the electrodes. The ion height is preserved for different RF gaps by varying the RF electrode width. The blue, dashed curve shows the solid angle expo√sure for a grating with length l = 100 µm and gap a = b2 + 4h2 − b (-
derived from [44]). The plot shows how higher collection efficiencies can be achieved for larger gaps a, but at the cost of reduced trap strength for a > 41 µm.
For the purposes of identifying reasonable performance parameters, the rest of the analysis in this section assumes an RF gap of a = 62 µm as a compromise, corresponding to an RF electrode width of b = 50 µm, where the collection optic resides. With a length l = 100 µm this geometry achieves a total exposure fraction of 12.2% (Fig. 3(c), main panel).
While the analysis in this paper assumes opaque electrodes, it should be noted that these geometric collection limits may be surpassed by using transparent con-

8

ducting electrodes [45]. Such an approach would allow a larger solid angle for collection, though there is a tradeoff between electrode conductivity and optical transmission that could lead to excess RF dissipation or reduced collection efficiency, at the respective limits of thin and thick transparent electrode thicknesses.
2. Fabrication and technical limits
The analysis above establishes a reasonable upper bound for total collection efficiency based on trap geometry and solid angle exposure, but several technical challenges can reduce it below this value. Most significantly, gratings are not perfectly efficient at coupling light into single-mode waveguides due to limits in diffraction efficiency, lithographic limits, fabrication imperfections, and optical absorption in the grating material. Many of these shortcomings can be addressed via a combinatio-
n of more advanced lithographic techniques and lower loss waveguide and cladding materials. While alignment of the ion and optic is much more robust using monolithic integration when compared to free-space techniques, fabrication and material variations can nonetheless also lead to deviation from the designed spatial mode.
Fig. 3(c) shows the cost of diffraction inefficiency by comparing the ideal solid-angle collection efficiency to simulations of a single-layer SiNx chirped-grating waveguide. The model simulated here is a single layer, nonapodized, variable pitch grating made from 50 nm thick SiNx , and a simulation wavelength of 493 nm (cf. Table 2). A two-dimensional finite-difference time-domain (FDTD) simulation was first used to design and optimize the focusing grating with a particular maximum length (75 µm -
in this case), and then three-dimensional FDTD simulations with different grating exposure lengths were used to extract the corresponding collection efficiencies. The simulations placed the grating in the same plane as the trap electrodes, though in most monolithically integrated devices demonstrated to date, the grating is placed a few microns below the top surface as shown in part (b) of the figure. Simulation points are only shown to a maximum length of 55 µm because longer lengths have reduced-
 collection efficiency due to scattering, a result of the non-apodized gratings simulated here.
The ion was modeled as a dipole source oriented with its axis perpendicular to the trap axis and parallel to the surface. The location of the dipole source was optimized for the longest grating length using three-dimensional FDTD simulations. For shorter grating lengths, the dipole location was kept constant, while the length of the grating was reduced symmetrically from both ends. It should be noted that each design instance is not strictly optimal, even under the design restrictions, as that wou-
ld have required separate two-dimensional and threedimensional optimizations for each length. A key factor limiting grating collection efficiency in this simple example is the lack of grating directionality afforded in the

single-layer, fully-etched grating (halving the maximum possible collection efficiency). This can be mitigated by using multiply-patterned grating layers [46] and/or reflection techniques [47]. Additional refinements such as optimizing waveguide-core thickness, grating apodization [48], case-specific optimizations (as opposed to a generic example), and application of more sophisticated design optimizations, such as inverse design [49], would improve upon this example illustration.
For gratings integrated into surface-electrode ion traps, the material deposition, patterning, and etching processes that define the waveguides and gratings occur within a many-step process that can include multiple metal levels [16, 17, 50] between which the waveguides and gratings are placed. They therefore must be compatible with the fabrication and geometry of the rest of the trap. For example, the tapers [51] that are needed to match wide collection gratings must avoid the electrical vias, lo-
ading holes, and other integrated elements in a typical chip-scale trap [50]. Other considerations include the compatibility of waveguide-core-material deposition temperatures with metal layers, planarization tolerances, and achievable cladding oxide thickness.
Ion behavior is also an important consideration. As integrated waveguides and gratings have been developed and used to deliver light to ions in ion-trapping structures, one of the primary concerns is dielectric charging that can lead to stray background fields and motional heating. The former effect may be exacerbated when light is delivered through the grating [18], but this effect will likely be negligible for collection gratings due to the relatively insignificant intensity at the grating of li-
ght emitted by the ion. Nevertheless, the presence of control laser beams near the additional dielectrics included in monolithic designs must be considered.
3. Gratings for polarization-based entanglement
Due to the highly polarization-dependent behavior of grating couplers, photon collection for polarization-based PME protocols requires additional consideration compared with the other PME protocols. Fig. 4 illustrates a grating coupler configuration suitable for an integrated approach to polarization-based PME analogous to the approach taken by [8]. Here we define the quantization axis to be aligned with the y axis, as depicted by B in the figure. As highlighted in the blue boundary, the π transit-
ion dominantly radiates energy into the Ey vector-component, which is collected into the TE0 mode of the waveguide running parallel to the x axis. The other vector components of the π emission are not collected into the x-aligned waveguide; the Ez vector-component (upper-right) could be collected into the TM mode, but is suppressed by symmetry, and the Ex vector-component is not supported by the waveguide as it runs parallel to the propagation direction. Conversely, as highlighted in green, the Ex-
 vector-component of the σ transition is

9

Fig. 4. Polarization and intensity of photons emitted via σ and π transitions in a trapped ion. (a) 3D-renderings of the emission profiles from π and σ transitions from an ion trapped 50 µm above the surface of a PIC with collection grating couplers. The relative probability of emission in a given direction is indicated by the radial distance from the origin (ion location) to the surface. (b) The intensity of light emitted from the ion, in arbitrary units, of the π and σ transitions is illustrated-
 in their respective rows, mapped onto the vector components of the PIC reference frame. The electric field vector components are superimposed in white. Dashed outlines of grating coupler apertures and feeding waveguides are also superimposed in the color corresponding to the ion transition that each grating coupler is designed to collect. As described in the body, the π emission is dominantly collected into the TE0 mode of the waveguide running parallel to the x axis (blue), and the σ emission is-
 collected into the TE0 mode of the waveguide running parallel to the y axis (green). The dominant field component contributions from each transition are outlined in the color corresponding to the intended collection grating.

collected into the TE0 mode of the y-aligned waveguide, illustrated in green. In each waveguide, a small fraction of the orthogonal state is undesirably collected into the TM0 mode via the Ez vector-components. This unintended cross-talk arising in the TM-component can be removed with a waveguide polarization filter, though in some cases the grating’s polarization selectivity will serve this function without requiring an additional component.
From the 3D-rendering of the π and σ emission patterns, one can perceive that the π emission radiates toward the PIC with greater probability, such that the net effect is that π emission is twice as likely to be collected by the PIC-waveguide as σ emission. This is exactly offset by the fact that the σ transition is twice as likely as the π transition due to the relevant Clebsch-Gordan factors for a J = 1/2 to J = 1/2 transition in a zeronuclear-spin ion [8], so on average there is roughly equal p-
robability of receiving a photon in the blue x-aligned waveguide and the green y-aligned waveguide. This equal probability is required to create a Bell state.

photons to other locations on the chip and to photonic elements (splitters, combiners, detectors) that make up the circuit. The waveguides need to have low loss at wavelengths of interest to avoid reducing the entanglement rate. Furthermore, to avoid reduction in Bell-state fidelity, they must have low cross-talk between modes, i.e. between neighboring waveguide modes, different spatial modes in the same waveguide, or different frequency modes, depending on PME protocol. A further requirement is f-
or tight and low-loss waveguide bends that work equivalently for the different photon encodings involved in the routing, in particular for the different waveguide modes needed for the polarization-based entanglement protocol. Recent work in visible light integrated photonics for atomic systems has achieved sufficiently low propagation and bending loss so as to be insignificant for typical envisioned circuit sizes [52–54].
C. Splitters and combiners

B. Waveguides and routing
Light is collected from the ion using a grating coupler and is then diffracted into a waveguide to route the

The key aspect of each of the PME protocols considered here is the photon interference that destroys the which-path information and allows the photonic degrees of freedom to be traced out to project the ions into an entangled state. In free space this is achieved with the

10
Hong-Ou-Mandel effect at a non-polarizing beam splitter [23]. After this beam splitter, mode-selective elements can be utilized in the Bell-state analyzer in order to detect both the |Ψ±⟩ states, and thereby maximize the entangled-state production rate. In the integrated case, different protocol-specific components can be employed to achieve these affects, including the Bell-state analysis specific to the frequency and polarization approaches. In this subsection we describe integrated optical comp-
onents that can perform these operations.

1. Standard splitters/combiners

For number and time-bin protocols, which-path information can be destroyed through use of a simple 4-port splitter (combiner). Such splitters should typically be functional for the frequency based protocols as well, since most standard photonic 4-port splitters will treat frequencies separated by a few tens (or even a few hundreds) of gigahertz equally.
There are three main types of 4-port splitters in use in integrated photonic circuits, each with their own advantages and disadvantages: directional couplers, adiabatic couplers, and multi-mode interferometers. Directional couplers benefit from simplicity in design and from the fact that symmetry ensures that the two input waveguides are nominally equivalent. However, of the three options, directional couplers are the most sensitive to optical frequency and fabrication variations owing to their de-
pendence on the exact effective refractive index of the waveguides.
Adiabatic couplers benefit from high tolerance to fabrication variations. However, their adiabatic crosssectional structure requires a larger areal footprint. Additionally, because the two input ports have different dimensions, they may be subject to differential loss or splitting, which can potentially lead to reduction in Bell state fidelity when compared to other splitter designs.
Multi-mode interferometers have the benefits of being compact, symmetric between inputs, and fabrication tolerant. Their main drawback are their abrupt waveguidedimension discontinuities, which are potential sources of scattering loss and back-reflection. However, various techniques have been developed to minimize losses and reflections [55, 56], which would be applicable to PME systems.
2. Integrated optics for polarization-based entanglement
For polarization based protocols that are dependent on the light being emitted into different dipole emission patterns of the ion (e.g. π or σ), light can be collected into the TE0 modes of two different waveguides, as described in Sec. 3 A and Fig. 4. Entanglement requires combining the π and σ light collected by these gratings into a single waveguide while preserving its orthogonal

Fig. 5. Eigenmode expansion simulation of an adiabatic SMMUX implemented in alumina waveguides for a wavelength of 493 nm. Waveguide edges are outlined in white; color, from blue to red, indicates the relative magnitude of the electric field. Overlay shapes depict relative phase and intensity. (a) TE0-TE1 conversion from port 1 to port 4 (conversion loss < 1%), and (b) unconverted TE0 propagation from port 2 to port 4 (transmission loss < 0.1%).
nature. This can be done by mapping the π and σ emissions into orthogonal waveguide modes of a single waveguide using a mode multiplexer (MUX). The photons from both ions must be interfered to erase the which-path information regardless of the photon polarization emitted. This requires a mode-agnostic splitter/combiner (MAS). To create a partial Bell-state analyzer, the spatial modes must be de-multiplexed and sent to different detectors, which can be accomplished using a MUX in an inverted orient-
ation. Designs for exemplary MUX and MAS are described below.
Spatial mode multiplexers
The required MUX may utilize either orthogonal polarizations (TE, TM) or higher-order spatial modes (TE0, TE1) to preserve orthogonality. Conversion between TE and TM modes can be technologically challenging because TE-TM conversion often requires waveguide widths on the order of the waveguide thickness, which can approach lithographic limits. To avoid this challenge, and to address the the aforementioned fabrication sensitivity of directional couplers, we describe in Fig. 5 a spatialmode MUX (SM--
MUX) implemented as an adiabatic coupler; photons entering the two input ports are multi-

11

plexed onto different spatial modes of one of the output ports.
The adiabatic coupler is comprised of two waveguides of varying width that are separated by a variable gap G, together forming a twin waveguide [57, 58]. As shown in Fig. 5(a), a TE0 mode propagating from left to right at port 1 will couple to the TE1 mode of the lower wide multi-mode waveguide, as it is ‘forced’ out of the upper waveguide by the monotonically decreasing waveguide width (w3 < w1). Selection of appropriate width and gap parameters to realize adiabatic conversion is made by assessin-
g the spatial modes of the upper and lower waveguides in isolation (isolated cases), and together as a twin waveguide (combined case). At the center of the device, where the gap is at a minimum G2, the widths should be selected such that the propagation constant of the TE0 mode in the upper guide matches the propagation constant of the TE1 of the lower waveguide. Then widths and gaps at the input (left) and output (right) sides should be selected such that select modes of the combined twin wavegui-
de have high overlap with the desired waveguide modes when assessed in isolation. With width and gap parameters suitably selected, the rate of change along the length the coupler can be analytically optimized following methods similar to Refs. [58, 59] such that scattering losses are below a desired design criterion (e.g. total scattering losses η < 1%). The overall length L scales with the allowed design loss as L ∝ (1/η) [59]. Overall length for a given loss is minimized when the minimum gap G2 -
is set to the minimum feature size suitable for good yield in a fabricated device.
Though described here in the ‘forward’ multiplexing direction, the structure is reciprocal and the same structure will demultiplex TE0 and TE1 modes when operated in reverse.
Mode-agnostic splitters
After mapping the π- and σ-emission onto two spatial modes in a common waveguide, a 2 × 2 coupler is needed to combine signals from two collection sites and mix them equally onto two separate waveguides. Many methods exist to split the fundamental mode of an input waveguide onto two outputs, but for this application the same coupler must work equally well for both the TE0 and TE1 modes, and must also preserve the spatial mode mapping at the output. We therefore choose a 2 × 2 multimode-interferenc-
e splitter architecture for this purpose, due to its inherent self-imaging properties [60] and simplicity of design.
A schematic illustration of a MAS consisting of linear tapers connected to a wide multimode waveguide is shown in Fig. 6 [inset of part (b)]. There is a trade-off with respect to the width of the multimode section – a wider waveguide supporting more modes will present a more complete basis set for the input field at the feed waveguide to project onto, and will therefore result in

Fig. 6. Simulated performance metrics of a mode-agnostic splitter designed for 422 nm wavelength light. (a) Transmission and (b) splitting ratio for TE0 and TE1 mode inputs, as a function of the length of the multimode section. The inset in (b) shows a schematic of the device geometry, with primary design parameters denoted. Simulated field intensities are shown for (c) TE0 and (d) TE1 mode inputs. The color, from dark blue to dark red, indicates the relative amplitude from low to high, respective-
ly.
lower insertion loss. However, the more spatial modes that are excited, the longer the device needs to be in order to obtain the appropriate phase relationship between all modes for equal splitting at the output. We find that a modest number, nine or ten supported modes, strikes a good balance between these considerations. The device performance was simulated using the eigenmode expansion method, and the results for a device designed at 422 nm wavelength are shown in Fig. 6(a,b). It can be seen fr-
om the plots that a length of approximately 185 µm gives good performance in terms of both insertion loss and power balance, for both TE0 and TE1 input modes. Fig. 6 (c,d) shows the simulated electric field intensity distribution in the optimized device, illustrating the mode-agnostic operation of the design.
3. Integrated frequency-selective optics
Frequency-based entanglement relies on the ability to collect photons separated in frequency by several gigahertz and route them through a PIC in a frequency non-discriminating manner. Due to the relatively small frequency spacing compared to the photon frequency, achieving non-discriminating light collection and routing is straightforward using standard components such as grating couplers, tapers, waveguides, and splitters, which have bandwidths >10 THz in the blue.
The main photonics challenge for implementing optimal frequency-based entanglement using PICs is in

12

designing a frequency-selective element for a partial Bell state analyzer that is narrowband, is stable over timescales relevant to performing entanglement operations, can be tuned to the relevant atomic transition frequencies without incurring an overly burdensome control system, and is relatively compact allowing for implementation in a scalable architecture. Due to the relatively narrow frequency spacing of the photons of interest, the frequency-selective element likely requires the use of reso-
nant or interferometric filters employing cascaded ring resonators or Mach Zehnder interferometers (MZIs), though a grating-based filter may also be an option. Because of the many trade-offs and considerations involved with designing narrowband filters for closely spaced signals, we will not go into great depth about filter design here, but instead we will refer the reader to the literature on microwave photonic signal processing where such filters have been discussed extensively, such as in Ref. -
[61].
However, several items are worth noting in our discussion. First, material loss becomes the limiting factor in achieving gigahertz-class narrowband filters at telecom wavelengths, which translates to filters with bandwidths about 4× larger in the visible. Limitations to filter bandwidth may also be exacerbated due to increased material loss and scattering from visible light waveguides compared to telecom. Second, gigahertz-class filters require long path lengths and result in device footprints of -
approximately a few tenths of a square millimeter. Such large devices may place constraints on how widely a frequency-based entanglement PIC could be proliferated in a scaled architecture (see Sec. 4). Finally, many narrowband filters use some of the transmitted photons in feedback loops that control electronics for active devices such as heaters or modulators. In the case of photonmediated entanglement, a pilot tone may need to be added to the filter to provide feedback to the control system. Thi-
s can increase PIC complexity, and great care must be taken to avoid crosstalk between this pilot tone and the photons carrying the entanglement information from trapped ions, as this can lead to Bell-state infidelity.
D. Integrated detectors
Though photon detection may be performed off chip, integrated detectors are necessary to complete the fullstack integration of PME components. These can be employed to generate remote entanglement even when one ion node is off-chip by timing the excitation pulses so that the photon arrival times at the on-chip interference elements are matched for both the remote and the local node [25]. Furthermore, their use can mitigate photon loss associated with off-chip coupling to external detectors, as wav-
eguide-coupled detection has been demonstrated with very low loss [62].
Two types of monolithically integrated single-photon detectors have been demonstrated to date in trappedion systems: superconducting nanowire single photon de-

tectors (SNSPDs) [63, 64] and single photon avalanche diodes (SPADs) [65, 66]. SNSPDs have demonstrated a photon detection efficiency (PDE) of 68% when integrated with an ion trap and have operated at temperatures of up to 6 K, while trap-integrated SPADs can operate at room temperature and have shown PDE up to 40% [66]. The higher detection efficiency attainable with waveguide coupled SNSPDs could substantially increase entanglement generation rates [62]. While dark count rates for both detector -
types would be negligible for the short and deterministic ∼10 ns excitation windows for photon arrival, minimizing stray photons that may arrive at the detector due to the on-chip photonics is crucial to avoid degradation of entanglement fidelity.
It is also possible to couple integrated detectors to a waveguide, such that fluorescence light collected from the ion via diffractive grating coupler can be routed to a detector located at another location on the chip [9]. Benefits of this approach over direct collection of light from the ion into a trap-integrated detector at the ion location as referenced above [63–66] include the ability to remotely place the detector in a part of the chip where it is less likely to be affected by stray light -
(typically concentrated near the ion) or large Paul-trap RF fields that can limit performance [67]. Furthermore, detectors fed by a waveguide could allow filtering of ion fluorescence using other integrated photonic elements to reduce stray light background that can be deleterious to ion-state detection.
4. DISCUSSION
The above treatment of photonics components for the various PME protocols suggests that there are several trade-offs to consider when determining which protocols may benefit (or suffer) the most from optics integration for light collection and manipulation. System-level requirements and cycle-time estimates should be understood for particular architectures in order to make an optimal choice. In this section, we highlight the opportunities and difficulties that integrated PME brings and contrast th-
e protocols with a focus on the ease of photonic integration.
First, we briefly discuss achievable maximum entangling rates. All protocols could in principle achieve > 1 MHz repetition rates, although this may be more challenging for the number and time-bin protocols because they require single-qubit rotations in each excitation cycle. The main difference in rent between PME with integrated components and with bulk optics will be collection efficiency. From geometric arguments, the achievable collection efficiency in the integrated case will be similar to th-
e state of the art with high-NA lenses (see Sec. 3 A). While our simulations (Fig. 3c) do not optimize all parameters (e.g. the grating was not apodized nor was the waveguide thickness optimized), we can expect coupling inefficiencies arising from fabrication limits, chiefly

13

resolution limits and edge-roughness, and the achievable index contrast in realistic materials, to limit the attainable collection efficiency. These reductions would likely result in a lower total collection efficiency compared to highly optimized free-space optics [10]. However, integrated PME elements have a more favorable scaling path that can circumvent this rate limit by multiplexing many ion pairs to achieve a higher overall entangled-pair production rate in a similar trap area.
A. Robustness to differential photon loss
The four protocols have varying susceptibility to differential photon loss before the point of interference of the two photon-collection channels. The number protocol is particularly vulnerable, since entanglement is heralded by a single photon. Therefore, unbalanced losses lead to a bias towards detecting photons from the less lossy node, skewing the state away from the desired Bell state. This differential loss can be compensated by tuning the excitation probabilities in each node to achieve pe1-
ϵ1 = pe2ϵ2 [31], which could be achieved with integrated amplitude modulators [68]. However, this fidelity improvement comes at a substantial cost in rent if the losses are very unbalanced, e.g. when networking between on-chip and remote off-chip nodes.
Because they rely on detecting two photons, the Bellstate fidelity obtained via the other protocols is not affected by unbiased differential loss between channels. It is only affected when the two nodes have different loss rates for each photonic qubit state, i.e. polarization, frequency, or time bin, since this skews the final entangled state in much the same way that differential photon loss does for the number protocol. Unlike the number-protocol case, however, the fidelity loss cannot be strai-
ghtforwardly compensated by tuning the excitation probability between the photonic qubit states. In an integrated platform, such imbalance is a potential concern for polarization-encoded qubits, where mode conversion and propagation are inherently more dependent on the photon properties used for state encoding. Moreover, they are differentially subject to edge roughness and other imperfections and likely less tolerant to fabrication variation. Gigahertz-spaced frequencies or microsecondsplit time--
bins are likely more robust, as extreme frequency sensitivity or periodically varying differential loss between channels is not expected or observed.
B. Potential spatial mode matching gains
All protocols rely on spatial mode overlap to eliminate which-path information and allow measurement of the photon degrees of freedom to project the ions into an entangled state. On a free-space beam splitter, this matching is performed by carefully overlapping the decay paths of the nodes, with typical free-space alignment

tolerances leading to a limitation near ∼99% mode overlap. On the other hand, in a PIC the photons are confined to discrete spatial modes and a much higher degree of spatial mode overlap can be attained. Currently the infidelity contribution from imperfect spatial mode matching in free-space PME is at the 1.3% level [8], suggesting that at least 20% of the total Bell-state error in state-of-the-art experiments could be eliminated via integrated optics. Moreover, the inherent mode matching in waveg-
uide-based devices increases robustness and stability by obviating the need for careful alignment, and frequent re-alignment, of the individual paths. This robustness paves the way for scaling to higher numbers of nodes and for large-scale multiplexing within each node to increase entanglement rates. We note that the properties of integrated beam splitters for PME as described above (Sec. 3 C 1) disincentivize the use of adiabatic couplers in favor of directional couplers or multi-mode interferome-
tric splitters.
C. Ion species and transition choice
The considerations for choosing an ion species and transition for a given protocol include ion level structure, transition wavelengths (and hence lithographic limitations), presence of nuclear spin, and ease of conversion to telecom wavelengths (for long-distance remote entanglement generation). As discussed in Sec. 3 A, lithographic limits can reduce the efficacy of collection gratings for blue light when compared to red/IR, though advances in photolithography (or electron-beam lithography) may a-
llow for the smaller features needed in this case. Additionally, transmission loss in the standard SiNx or alumina waveguides grows rapidly for wavelengths below ∼400 nm [52]. With transition wavelengths of 455 nm and 493 nm, Ba+ is a good choice based on these considerations. However, given the many application-dependent criteria that have to be balanced, other species with wavelengths above ∼400 nm are also viable candidates.
To ease lithographic and transmission limits, one could also use longer wavelength transitions that connect to metastable states in any of these species. However, the branching ratios of these transitions are generally in the γ = 2-27% range and since the PME rate goes as γ2, there must be a useful trade off in a particular application to make this choice tenable. One such situation may be for remote links, where longer wavelengths are also favored for fiber transmission. However, efficient quantu-
m frequency conversion of single photons from the blue wavelengths suited for PME to the telecom band would obviate this benefit [69].
There are pros and cons to choosing an ion with nonzero nuclear spin and thus hyperfine structure. The frequency protocol typically requires ground-state hyperfine structure to provide the frequency separation of photonic qubit states. Hyperfine structure also allows for “clock”

14

states to greatly enhance the qubit coherence time without the need for a co-trapped memory ion. However, the additional atomic levels compared to a zero nuclear spin ion increase the complexity of state preparation and manipulation.

that more control of achievable device geometry may be required, for example to avoid differential photon loss between modes (polarizations or spatial modes) or imperfect mapping of the emitted-photon polarization to different spatial modes.

D. Protocol comparison

The frequency protocol has the potential to achieve

a fast entanglement rate with comparatively simple in-

tegrated photonic elements. However, the presence of

hyperfine structure complicates state preparation and

the typical ∼10 GHz hyperfine splitting requires long,

resonant structures, with concomitant requirements on

path-length stabilization, in order to distinguish be-

tween the photon frequencies in a Bell-state analyzer (see

Sec. 3 C 3).

There is a penalty of a factor of

1 2

in PME

rate when not making this frequency distinction. If this

reduction in rate due to not incorporating a Bell-state

analyzer can be tolerated, the frequency protocol may

be highly promising for integrated PME.

The time-bin protocol places minimal requirements on

the photonic devices and can be implemented using ions

without hyperfine structure. The fidelity for this protocol

is limited by the single qubit rotations used to create the

initial superposition and for inversion of the qubit mani-

fold during the protocol. These high-fidelity, single-qubit

rotations could be provided via an additional integrated

light path (for state-control in this case) for each PME

site—utilizing such an architecture could make the time-

bin protocol promising via integrated optics.

The number protocol gains the most from photonic

integration because the required optical path-length sta-

bility is inherent as long as decay channels are combined

on chip, and thus improved over typical free-space im-

plementations. The photonic elements and required level

structure are the same as for the time-bin protocol and

thus straightforward. The drawbacks of this protocol

are the inherent trade-off between fidelity and rate and

the requirement of balanced photon probability in each

channel. These downsides mean that the number proto-

col is likely not suitable for very high-fidelity, high-rate

PME. However, for devices with low collection efficiency,

e.g. where geometric factors limit collection grating size,

this protocol allows an increase in entanglement rate over

two-photon

schemes,

going

as

4

pe ϵ

[30].

As presented in Sec. 3 C, the polarization protocol re-

quires bespoke photonic devices not needed for the other

schemes. Assuming spatial-mode multiplexing of polar-

ization modes as described here, the additional complex-

ity of adding a partial Bell-state analyzer is marginal and

therefore worth implementing to achieve a factor of two

in entanglement rate. The benefits of this protocol are

that the ion manipulation is straightforward and among

the fastest of all the protocols we consider. There is also

no inherent fidelity limit depending on other operations

(such as single qubit rotations). A unique challenge is

E. Multiplexing and scalability
As discussed at the beginning of this section, the maximum achievable rent will likely not be higher for integrated optics compared to traditional bulk optics that are optimized for collection at a single-site. When considering multi-site PME to enhance overall rate, however, the size of integrated optics relative to the ion array pitch may provide a considerable advantage. A bulk lens consumes significant lateral chip area that precludes collection from neighboring sites, while microfabricated PM-
E elements, like those described in this paper, are scaled to the trap size and do not prevent any other sites from being used for PME. The lower collection efficiency per element in the integrated case could therefore be more than offset by the increased number of sites used for PME. If these sites were used in a coordinated, multiplexed protocol with continuous excitation of many ion pairs in parallel, heralded entanglement between any particular pair could be transferred to computational ions c-
onvenient to all entanglement sites. Thus the overall system entangled-pair creation rate could be increased. This comes at the cost of a larger number of ion sites, but such reproducibility is achievable using microfabricated and integrated elements.
The benefits to PME scalability promised by monolithic integration are an array architecture based on a unit-cell that can be multiplexed for increased entanglement rates, a smaller overall system-scale footprint, and simpler and more robust optical alignment. A unit cell for photon-mediated entanglement would include emission gratings for state preparation and pulsed excitation, collection gratings coupled to waveguides, DC electrodes for ion confinement, and a splitter/combiner and associated de-
tectors. Using this approach, large numbers of PME cells can be integrated on the same chip, improving overall rates of ion-ion entanglement through multiplexing as explained above. Such a configuration could reduce ion shuttling and re-cooling requirements in a quantum computing module [70], allowing rapid establishment and distribution of entangled pairs for quantum algorithms.
In addition to well mode-matched collection gratings, entanglement generation between remote nodes (cf. Fig. 2b) will require scalable, low-loss waveguide-to-fiber interfaces, which is an active area of study [71]. This is an additional consideration for extending processors or quantum networks beyond arrays contained on an individual substrate.

15

5. CONCLUSION
Photon-mediated entanglement is a powerful resource that can enable quantum networking and communication within a trapped-ion system. These photon interactions can also connect different qubit types in a hybrid system to combine the long memory times and high fidelities provided by trapped ions with advantageous properties of other qubits. We have presented paths towards integrating the optical elements for several photon-mediated entanglement protocols. As with other trapped-ion quantum technolog-
ies that have been demonstrated using micro-fabricated, integrated elements, the photonic integration for PME promises benefits including stability, scalability, and manufacturability, while also creating performance challenges to overcome. Nonetheless, these technologies provide a promising approach to higher overall remote entanglement rates and a potential alternative to the current approach of ion shuttling and local Coulomb interactions to produce ion-ion entanglement in a modular quantum com-
puter on a single ion-trapping chip [1].
ACKNOWLEDGMENTS
The authors wish to thank Galen Hoffman and Brian DeMarco for useful discussions. This material is based

upon work supported by the U.S. Department of Energy, Office of Science, National Quantum Information Science Research Centers, Quantum Systems Accelerator. Additional support is acknowledged from the NSF Quantum Leap Challenge Institute for Hybrid Quantum Architectures (award #2016136). This material is based upon work supported by the Department of Energy under Air Force Contract No. FA8702-15-D-0001. Any opinions, findings, conclusions or recommendations expressed in this material are those of -
the author(s) and do not necessarily reflect the views of the the Department of Energy.
Sandia National Laboratories is a multimission laboratory managed and operated by National Technology & Engineering Solutions of Sandia, LLC, a wholly owned subsidiary of Honeywell International Inc., for the U.S. Department of Energy’s National Nuclear Security Administration under contract DE-NA0003525. This paper describes objective technical results and analysis. Any subjective views or opinions that might be expressed in the paper do not necessarily represent the views of the U.S. Department -
of Energy or the United States Government.

[1] D. J. Wineland, C. Monroe, W. M. Itano, D. Leibfried, B. E. King, and D. M. Meekhof, Journal of Research of the National Institute of Standards and Technology 103, 259 (1998).
[2] C. D. Bruzewicz, J. Chiaverini, R. McConnell, and J. M. Sage, Applied Physics Reviews 6, 021314 (2019).
[3] P. Drmota, D. Main, D. P. Nadlinger, B. C. Nichol, M. A. Weber, E. M. Ainley, A. Agrawal, R. Srinivas, G. Araneda, C. J. Ballance, and D. M. Lucas, Phys. Rev. Lett. 130, 090803 (2023).
[4] S. Muralidharan, L. Li, J. Kim, N. Lu¨tkenhaus, M. Lukin, and L. Jiang, Scientific Reports 6, 20463 (2016).
[5] P. Komar, E. M. Kessler, M. Bishof, L. Jiang, A. S. Sørensen, J. Ye, and M. D. Lukin, Nature Physics 10, 582 (2014).
[6] K. Brown, J. Kim, and C. Monroe, njp Quantum Inf 2, 16034 (2016).
[7] D. Moehring, P. Maunz, S. Olmschenk, K. Younge, D. Matsukevich, L.-M. Duan, and C. Monroe, Nature 449, 68 (2007).
[8] L. J. Stephenson, D. P. Nadlinger, B. C. Nichol, S. An, P. Drmota, T. G. Ballance, K. Thirumalai, J. F. Goodwin, D. M. Lucas, and C. J. Ballance, Phys. Rev. Lett. 124, 110501 (2020).
[9] G. Moody, V. J. Sorger, D. J. Blumenthal, P. W. Juodawlkis, W. Loh, C. Sorace-Agaskar, A. E. Jones, K. C. Balram, J. C. F. Matthews, A. Laing, M. Da-

vanco, L. Chang, J. E. Bowers, N. Quack, C. Galland, I. Aharonovich, M. A. Wolff, C. Schuck, N. Sinclair, M. Lonˇcar, T. Komljenovic, D. Weld, S. Mookherjea, S. Buckley, M. Radulaski, S. Reitzenstein, B. Pingault, B. Machielse, D. Mukhopadhyay, A. Akimov, A. Zheltikov, G. S. Agarwal, K. Srinivasan, J. Lu, H. X. Tang, W. Jiang, T. P. McKenna, A. H. Safavi-Naeini, S. Steinhauer, A. W. Elshaari, V. Zwiller, P. S. Davids, N. Martinez, M. Gehl, J. Chiaverini, K. K. Mehta, J. Romero, N. B. Lingaraju, A.-
 M. Weiner, D. Peace, R. Cernansky, M. Lobino, E. Diamanti, L. T. Vidarte, and R. M. Camacho, Journal of Physics: Photonics 4, 012501 (2022). [10] A. L. Carter, J. O’Reilly, G. Toh, S. Saha, M. Shalaev, I. Goetting, and C. Monroe, Ion trap with in-vacuum high numerical aperture imaging for a dual-species modular quantum computer (2023), arXiv:2310.07058 [quantph]. [11] G. Birkl, F. Buchkremer, R. Dumke, and W. Ertmer, Optics Communications 191, 67 (2001). [12] T. Kim, P. Maunz, and J. Kim, Phys. R-
ev. A 84, 063423 (2011). [13] C. R. Clark, C.-w. Chou, A. R. Ellis, J. Hunker, S. A. Kemme, P. Maunz, B. Tabakov, C. Tigges, and D. L. Stick, Phys. Rev. Applied 1, 024004 (2014). [14] C. Ropp, W. Zhu, A. Yulaev, D. Westly, G. Simelgor, A. Rakholia, W. Lunden, D. Sheredy, M. M. Boyd, S. Papp, A. Agrawal, and V. Aksyuk, Light: Science &

16

Applications 12, 83 (2023). [15] K. Mehta, C. Bruzewicz, R. McConnell, R. J. Ram, J. M.
Sage, and J. Chiaverini, Nature Nanotechnology 11, 1066 (2016). [16] R. J. Niffenegger, J. Stuart, C. Sorace-Agaskar, D. Kharas, S. Bramhavar, C. D. Bruzewicz, W. Loh, R. T. Maxson, R. McConnell, D. Reens, G. N. West, J. M. Sage, and J. Chiaverini, Nature 586, 538 (2020). [17] K. K. Mehta, C. Zhang, M. Malinowski, T. L. Nguyen, M. Stadler, and J. P. Home, Nature 586, 533 (2020). [18] M. Ivory, W. J. Setzer, N. Karl, H. McGuinness, C. DeRose, M. Blain, D. Stick, M. Gehl, and L. P. Parazzoli, Phys. -
Rev. X 11, 041033 (2021). [19] A. R. Vasquez, C. Mordini, C. Verni`ere, M. Stadler, M. Malinowski, C. Zhang, D. Kienzler, K. K. Mehta, and J. P. Home, Phys. Rev. Lett. 130, 133201 (2023). [20] P. B. Antohi, D. Schuster, G. M. Akselrod, J. Labaziewicz, Y. Ge, Z. Lin, W. S. Bakr, and I. L. Chuang, Review of Scientific Instruments 80, 013103 (2009). [21] G. Vittorini, K. Wright, K. R. Brown, A. W. Harter, and S. C. Doret, Review of Scientific Instruments 84, 043112 (2013). [22] G. Pagano, P. W. Hess,-
 H. B. Kaplan, W. L. Tan, P. Richerme, P. Becker, A. Kyprianidis, J. Zhang, E. Birckelbaw, M. R. Hernandez, Y. Wu, and C. Monroe, Quantum Science and Technology 4, 014004 (2018). [23] C. K. Hong, Z. Y. Ou, and L. Mandel, Phys. Rev. Lett. 59, 2044 (1987). [24] L. Luo, D. Hayes, T. Manning, D. Matsukevich, P. Maunz, S. Olmschenk, J. Sterk, and C. Monroe, Fortschritte der Physik 57, 1133 (2009). [25] V. Krutyanskiy, M. Galli, V. Krcmarsky, S. Baier, D. A. Fioretto, Y. Pu, A. Mazloom, P. Sekatski, M. -
Canteri, M. Teller, J. Schupp, J. Bate, M. Meraner, N. Sangouard, B. P. Lanyon, and T. E. Northup, Phys. Rev. Lett. 130, 050803 (2023). [26] C. H. Bennett, D. P. DiVincenzo, J. A. Smolin, and W. K. Wootters, Phys. Rev. A 54, 3824 (1996). [27] N. H. Nickerson, J. F. Fitzsimons, and S. C. Benjamin, Phys. Rev. X 4, 041041 (2014). [28] C. Cabrillo, J. I. Cirac, P. Garc´ıa-Ferna´ndez, and P. Zoller, Phys. Rev. A 59, 1025 (1999). [29] L. Slodiˇcka, G. H´etet, N. Ro¨ck, P. Schindler, M. Hennrich, and R. -
Blatt, Phys. Rev. Lett. 110, 083603 (2013). [30] P. C. Humphreys, N. Kalb, J. P. J. Morits, R. N. Schouten, R. F. L. Vermeulen, D. J. Twitchen, M. Markham, and R. Hanson, Nature 558, 268 (2018). [31] S. L. N. Hermans, M. Pompili, L. D. S. Martins, A. R.P. Montblanch, H. K. C. Beukers, S. Baier, J. Borregaard, and R. Hanson, New Journal of Physics 25, 013011 (2023). [32] F. Arbes, M. Benzing, T. Gudjons, F. Kurth, and G. Werth, Zeitschrift fu¨r Physik D Atoms, Molecules and Clusters 31, 27 (1994). -
[33] H. Sunaoshi, Y. Fukashiro, M. Furukawa, M. Yamauchi, S. Hayashibe, T. Shinozuka, M. Fujioka, I. Satoh, M. Wada, and S. Matsuki, Hyperfine Interactions 78, 241 (1993). [34] H. Knab, M. Schupp, and G. Werth, EPL (Europhysics Letters) 4, 1361 (2007). [35] R. Blatt and G. Werth, Phys. Rev. A 25, 1476 (1982). [36] R. Blatt, H. Schnatz, and G. Werth, Zeitschrift fu¨r Physik A Atoms and Nuclei 312, 143 (1983).

[37] A. Mu¨nch, M. Berkler, C. Gerz, D. Wilsdorf, and G. Werth, Phys. Rev. A 35, 4147 (1987).
[38] A. Tchebotareva, S. L. N. Hermans, P. C. Humphreys, D. Voigt, P. J. Harmsma, L. K. Cheng, A. L. Verlaan, N. Dijkhuizen, W. de Jong, A. Dr´eau, and R. Hanson, Phys. Rev. Lett. 123, 063601 (2019).
[39] C. Simon and W. T. M. Irvine, Phys. Rev. Lett. 91, 110405 (2003).
[40] C. Li, H. Zhang, M. Yu, and G. Q. Lo, Opt. Express 21, 7868 (2013).
[41] A. Bozzola, L. Carroll, D. Gerace, I. Cristiani, and L. C. Andreani, Opt. Express 23, 16289 (2015).
[42] S. Li, L. Cai, D. Gao, J. Dong, J. Hou, C. Yang, S. Chen, and X. Zhang, Opt. Express 28, 35395 (2020).
[43] M. T. Wade, R. Kumar, K. Nammari, C. M. Gentry, J. M. Shainline, J. S. Orcutt, A. Tamma, R. Ram, V. Stojanovi´c, and M. A. Popovi´c, in CLEO: 2014 (Optica Publishing Group, 2014) p. STh3M.5.
[44] M. G. House, Phys. Rev. A 78, 033402 (2008). [45] A. M. Eltony, S. X. Wang, G. M. Akselrod, P. F. Her-
skind, and I. L. Chuang, Applied Physics Letters 102, 054106 (2013). [46] J. C. C. Mak, W. D. Sacher, H. Ying, X. Luo, P. G.-Q. Lo, and J. K. S. Poon, Opt. Express 26, 30623 (2018). [47] S. Romero-Garc´ıa, F. Merget, F. Zhong, H. Finkelstein, and J. Witzens, Opt. Lett. 38, 2521 (2013). [48] K. K. Mehta and R. J. Ram, Scientific Reports 7, 2019 (2017). [49] A. M. Hammond, J. B. Slaby, M. J. Probst, and S. E. Ralph, Opt. Express 30, 31058 (2022). [50] M. G. Blain, R. Haltli, P. Maunz, C. D. Nordquis-
t, M. Revelle, and D. Stick, Quantum Science and Technology 6, 034011 (2021). [51] R. Morgan, K. Cahoy, P. Callahan, P. Juodawlkis, D. Kharas, T. Mahony, R. Maxson, A. Medeiros, J. Plant, G. West, R. Swint, J. Chiaverini, R. McConnell, and C. Sorace-Agaskar, in CLEO 2023 (Optica Publishing Group, 2023) p. JW2A.109. [52] G. N. West, W. Loh, D. Kharas, C. Sorace-Agaskar, K. K. Mehta, J. Sage, J. Chiaverini, and R. J. Ram, APL Photonics 4, 026101 (2019). [53] C. Sorace-Agaskar, D. Kharas, S. Yegnanar-
ayanan, R. T. Maxson, G. N. West, W. Loh, S. Bramhavar, R. J. Ram, J. Chiaverini, J. Sage, and P. Juodawlkis, IEEE Journal of Selected Topics in Quantum Electronics 25, 1 (2019). [54] H. J. McGuinness, M. Gehl, C. G. Hogle, W. J. Setzer, N. Karl, N. Jaber, J. Schultz, J. Kwon, M. Ivory, R. R. Kay, D. Dominguez, D. Trotter, M. Eichenfield, and D. L. Stick, in Quantum Nanophotonic Materials, Devices, and Systems 2022 , Vol. 12206, edited by C. Soci, M. T. Sheldon, M. Agio, and I. Aharonovich, Intern-
ational Society for Optics and Photonics (SPIE, 2022) p. 1220604. [55] E. Pennings, R. van Roijen, M. van Stralen, P. de Waard, R. Koumans, and B. Verbeck, IEEE Photonics Technology Letters 6, 715 (1994). [56] A. Frishman and D. Malka, Nanomaterials 13, 2077 (2023). [57] J. Wang, Y. Xuan, M. Qi, H. Huang, Y. Li, M. Li, X. Chen, Z. Sheng, A. Wu, W. Li, X. Wang, S. Zou, and F. Gan, Opt. Lett. 40, 1956 (2015). [58] J.-L. Tambasco and D. F. Siriani, Opt. Express 31, 41987 (2023). [59] D. F. Siriani an-
d J.-L. Tambasco, Opt. Express 29, 3243 (2021).

17

[60] L. Soldano and E. Pennings, Journal of Lightwave Technology 13, 615 (1995).
[61] Y. Liu, A. Choudhary, D. Marpaung, and B. J. Eggleton, Adv. Opt. Photon. 12, 485 (2020).
[62] S. Ferrari, C. Schuck, and W. Pernice, Nanophotonics 7, 1725 (2018).
[63] S. L. Todaro, V. B. Verma, K. C. McCormick, D. T. C. Allcock, R. P. Mirin, D. J. Wineland, S. W. Nam, A. C. Wilson, D. Leibfried, and D. H. Slichter, Phys. Rev. Lett. 126, 010501 (2021).
[64] B. Hampel, D. H. Slichter, D. Leibfried, R. P. Mirin, S. W. Nam, and V. B. Verma, Applied Physics Letters 122 (2023), 174001.
[65] W. J. Setzer, M. Ivory, O. Slobodyan, J. W. Van Der Wall, L. P. Parazzoli, D. Stick, M. Gehl, M. G. Blain, R. R. Kay, and H. J. McGuinness, Applied Physics Letters 119, 154002 (2021).

[66] D. Reens, M. Collins, J. Ciampi, D. Kharas, B. F. Aull, K. Donlon, C. D. Bruzewicz, B. Felton, J. Stuart, R. J. Niffenegger, P. Rich, D. Braje, K. K. Ryu, J. Chiaverini, and R. McConnell, Phys. Rev. Lett. 129, 100502 (2022).
[67] D. H. Slichter, V. B. Verma, D. Leibfried, R. P. Mirin, S. W. Nam, and D. J. Wineland, Opt. Express 25, 8705 (2017).
[68] C. W. Hogle, D. Dominguez, M. Dong, A. Leenheer, H. J. McGuinness, B. P. Ruzic, M. Eichenfield, and D. Stick, npj Quantum Information 9, 74 (2023).
[69] U. Saha, J. D. Siverns, J. Hannegan, Q. Quraishi, and E. Waks, ACS Photonics 10, 2861 (2023).
[70] J. M. Pino, J. M. Dreiling, C. Figgatt, J. P. Gaebler, S. A. Moses, M. S. Allman, C. H. Baldwin, M. Foss-Feig, D. Hayes, K. Mayer, C. Ryan-Anderson, and B. Neyenhuis, Nature 592, 209 (2021).
[71] G. Son, S. Han, J. Park, K. Kwon, and K. Yu, Nanophotonics 7, 1845 (2018).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:01.151Z
- **Text Length:** 82554 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
