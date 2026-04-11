# PDF Document: (VAET Theory - 2024 Birgitta) Enhancement of vibrationally assisted energy transfer by proximity to exceptional points, probed by fluorescence-detected vibrational spectroscopy.pdf

**File Path:** (VAET Theory - 2024 Birgitta) Enhancement of vibrationally assisted energy transfer by proximity to exceptional points, probed by fluorescence-detected vibrational spectroscopy.pdf

**Processed Date:** 2026-02-10T18:16:04.647Z

**File Size:** 3870.95 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 371

**Title:** (VAET Theory - 2024 Birgitta) Enhancement of vibrationally assisted energy transfer by proximity to exceptional points, probed by fluorescence-detected vibrational spectroscopy

**Collection:** Lattice > VAET

---

## Extracted Text Content

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

Enhancement of vibrationally assisted energy transfer by proximity to exceptional points, probed by ﬂuorescence-detected vibrational spectroscopy
Zeng-Zhao Li * and K. Birgitta Whaley † Department of Chemistry, University of California, Berkeley, California 94720, USA; Berkeley Center for Quantum Information and Computation, Berkeley, California 94720, USA; and Center for Quantum Coherent Science, University of California, Berkeley, California 94720, USA
(Received 1 October 2023; accepted 14 April 2024; published 10 May 2024)
Emulation of energy transfer processes in natural systems on quantum platforms can further our understanding of complex dynamics in nature. One notable example is the demonstration of vibrationally assisted energy transfer (VAET) on a trapped-ion quantum emulator, which offers insights for the energetics of light harvesting. In this work, we expand the study of VAET simulation with trapped ions to a non-Hermitian quantum system comprising a PT -symmetric chromophore dimer weakly coupled to a vibra-
tional mode. We ﬁrst characterize exceptional points (EPs) and non-Hermitian features of the excitation energy transfer processes in the absence of the vibration, ﬁnding a degenerate pair of second-order EPs. Exploring the non-Hermitian dynamics of the whole system including vibrations, we ﬁnd that energy transfer accompanied by absorption of phonons from a vibrational mode can be signiﬁcantly enhanced near such a degenerate EP. Our calculations reveal a unique spectral feature accompanying the co-
alescing of eigenstates and eigenenergies that provides a unique approach to probe the degenerate EP by ﬂuorescence-detected vibrational spectroscopy. Enhancement of the VAET process near the EP is found to be due to maximal favorability of phonon absorption at the degenerate EP, enabling multiple simultaneous excitations. Our work on improving VAET processes in non-Hermitian quantum systems paves the way for leveraging non-Hermiticity in quantum dynamics related to excitation energy transfer.
DOI: 10.1103/PhysRevResearch.6.023149

I. INTRODUCTION
Non-Hermitian Hamiltonians respecting parity-time (PT ) symmetry have been intensively studied over the past two decades [1–5]. A characteristic feature of non-Hermitian PT symmetric systems is a spectral degeneracy known as the exceptional point (EP) at which there is both a degeneracy in eigenenergies and coalescence of eigenvectors. The non-Hermitian physics due to this unique feature has been explored in many classical systems [6–8], with a wide range of applications such as enhanced sensing [-
9–11], laser emission management [12–14], and wave transport control [15–17]. As interest grows also in exploring non-Hermitian physics in the quantum realm, various approaches such as Hamiltonian dilation [18] and dissipation engineering [19] have been exploited to investigate non-Hermitian quantum physics. EPs have been observed in simple systems realized experimentally on platforms such as NV centers [18], superconducting circuits [19,20], trapped ions [21–23], and ultracold atoms [24], and ext-
ension to larger systems appears feasible with NMR systems [25]. Recent developments include an investigation
*zengzhaoli09@gmail.com †whaley@berkeley.edu
Published by the American Physical Society under the terms of the Creative Commons Attribution 4.0 International license. Further distribution of this work must maintain attribution to the author(s) and the published article’s title, journal citation, and DOI.

of the effects of quantum jumps on non-Hermitian dynamics [26], emergence of PT symmetry in open quantum systems [27], exceptional points in Floquet systems [24,28], optimal control of non-Hermitian qubits [29], and entanglement speedup in proximity to high-order exceptional points [30]. In addition, investigation of non-Hermitian physics of topological systems [31–33] has shown that topological phases can be enriched by non-Hermiticity [34–37].
While considerable effort has been dedicated to exploring nontrivial properties of non-Hermitian quantum systems, little attention has been given to applications in the area of excitation energy transfer. One important issue in this ﬁeld is understanding the observed long coherence in photosynthetic light-harvesting systems, which is generally agreed to rely on an interplay between excitonic and vibrational degrees of freedom [38–40]. With the development of controllable quantum platforms for simu-
lating quantum phenomena in nature [41,42], it has become possible to engineer vibrationally assisted energy transfer (VAET) in a trapped-ion quantum simulator, allowing analysis of uphill energy transfer processes [42]. This enabled characterization of the interplay between vibration-assisted and environment-assisted energy transfer [43] as well as identiﬁcation of collective behaviors of vibrations that can give rise to novel mechanisms such as heteroexcitation [44]. However, all demonstrations -
of VAET so far have focused on Hermitian systems. This raises the question of whether the VAET processes are achievable in non-Hermitian quantum systems. If so, it is important to identify what new aspects non-Hermiticity can bring to excitation energy transfer, as well as to determine whether the

2643-1564/2024/6(2)/023149(16)

023149-1

Published by the American Physical Society

ZENG-ZHAO LI AND K. BIRGITTA WHALEY

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

non-Hermitian VAET might offer advantages over its Hermitian counterpart.
To shed light on these questions and explore new research directions in non-Hermitian excitation energy transfer, we study here effects of the non-Hermiticity on the transfer processes assisted by vibrations in a PT -symmetric chromophore dimer, representing a simple VAET system relevant to lightharvesting dynamics of photosynthetic systems. We ﬁrst characterize the EPs of the chromophore dimer in the absence of vibrations, identifying the non-Hermitian features of oscillations induced by gain and-
 loss and nonequilibrium steady states of excitation energy transfer in the PT -symmetric unbroken and broken phase, respectively. The crucial characteristic of these EPs lies in their classiﬁcation as second-order EPs that are twofold degenerate, i.e., each parameter set yielding two distinct second-order EPs. This has signiﬁcant implications for both the non-Hermitian dynamics and the dimer spectroscopy. By then considering the non-Hermitian dynamics of the entire system, including both the PT --
symmetric dimer and a weakly coupled vibration, we show that the energy transfer processes involving absorption of phonons from the vibration can be signiﬁcantly enhanced near such a degenerate EP of the PT -symmetric dimer. This enhancement stands in sharp contrast to the relatively low transfer efﬁciency observed in the corresponding Hermitian case.
In addition to this signiﬁcant enhancement of energy transfer near a degenerate EP, we also observe a unique feature in ﬂuorescence-detected vibrational spectroscopy of the dimer that accompanies the coalescence of eigenstates or eigenenergies of the non-Hermitian dimer at the EP. Observation of this feature constitutes a witness of the EP and of the PT symmetry phase transition, suggesting a unique spectroscopic approach that can further be used to probe the distance of the system from an EP.
We show here that the signiﬁcant enhancement of VAET can be attributed to the increasingly favorable absorption of phonons as the degenerate EP is approached. This EP degeneracy enables multiple simultaneous excitations between eigenstates associated with distinct EPs to be supported. We analyze the robustness of our results by examining the response of the enhanced VAET processes to varying strength of vibrational coupling, temperature, and decoherence effects.
The remainder of the paper is structured as follows. In Sec. II we present the model of a PT -symmetric chromophore dimer weakly coupled to a vibrational mode. In Sec. III we demonstrate the existence of EPs in the dimeric system without coupling to the vibration and analyze the nonHermitian features observed in the excitation energy transfer processes. In Sec. IV we investigate the dynamical and spectral features of the enhanced VAET processes and analyze the phonon-absorption mechanism. The robu-
stness of the results is discussed in Sec. V. Finally, in Sec. VI we summarize our results and discuss experimental feasibility of realizing this model with a trapped ion simulator.
II. VAET DIMER MODEL
A typical system for demonstrating the VAET phenomenon is a chromophore dimer weakly coupled to a vibrational mode,

FIG. 1. (a) Left panel: Schematic of a non-Hermitian chromophore donor-acceptor dimer coupled to a vibration. The dimer consists of a donor (in green) with a tunneling coupling strength J and gain-loss rate γ for its two equal energy states, and an acceptor (in blue) with an energy difference of 2 . The vibration (in purple) with a frequency ν is coupled to the donor with a coupling strength κ. Right panel: Eigenstates of the non-Hermitian dimer and its Hermitian limit. Solid black lines represent-
 the eigenstates |ψi of the non-Hermitian dimer [eigenstates of Eq. (1) with κ = 0] and gray dashed lines represent eigenstates of the corresponding uncoupled Hermitian dimer [eigenstates of Eq. (5) with γ = α = 0]. For the non-Hermitian dimer, at the EP where the frequency differences λ13(42) approach zero, a degeneracy occurs in each of two subspaces spanned by states |ψ1 and |ψ3 , and |ψ2 and |ψ4 , respectively, which is in both cases accompanied by coalescence of the corresponding eigenvector -
pair, i.e., |ψ1 and |ψ3 in the former, as well as |ψ2 and |ψ4 in the latter. This EP is thus a twofold degenerate second-order EP. Also at this point, all other transition frequencies become identical. Up-down arrows between pairs of eigenstates {|ψi , |ψ j } indicate associated transitions with frequency difference λi j (≡ λi − λ j ). These transitions are enhanced by resonant coupling to the vibrational mode ν, enabling VAET [42]. The schematic diagram presented in the right panel is constructed-
 for the parameter values /J = 8, α/J = 1, and κ/J = 0. (b) Schematic of the ion trap and laser beams envisaged in an experimental realization. Two ions are conﬁned within the trap. A global laser beam along the axis of the trap facilitates the interaction responsible for creating the donoracceptor coupling. Another tightly focused laser beam is localized on the donor ion, enabling single-ion quantum state manipulation and generating the site-vibration coupling. Additional laser drives are utilize-
d for laser heating and cooling, to manipulate the gain and loss parameters on the donor ion.

illustrated in the left panel of Fig. 1(a). Adding gain and loss, the system can be described by the Hamiltonian (setting h¯ = 1)

H = Jσx(d ) − iγ σz(d ) + ασx(d )σx(a) + σz(a)

+ κσz(d)(a + a†) + νa†a.

(1)

Here the Pauli operators σr( j) (r = x, y, z) are deﬁned with respect to the two lowest levels (|g j and |e j) of the donor ( j = d) or acceptor ( j = a) chromophore site, i.e., σx( j) = |g j e| + |e j g| and σz( j) = |e j e| − |g j g| where j = d, a.
The parameters in the Hamiltonian are as follows: the two equal energy levels of the donor have gain-loss rates γ and
are coupled with a tunneling of strength J, the acceptor has an energy gap 2 , α represents the excitonic coupling between

023149-2

ENHANCEMENT OF VIBRATIONALLY ASSISTED ENERGY …

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

the donor and acceptor, and κ denotes the coupling strength of the donor to a vibrational mode with frequency ν. This Hamiltonian is speciﬁcally tailored for ion trap emulations of energy transfer, which have proven to be a successful platform for demonstrating the VAET phenomenon [42]. We note that this Hamiltonian design differs in some respects from that of a natural chromophore system [43].
The VAET phenomenon has already been experimentally engineered on a Hermitian trapped-ion platform for a system with two excitonic sites and coupled vibrations [42], while a single non-Hermitian trapped-ion qubit has recently been demonstrated in experiments [21–23]. The non-Hermitian VAET setup proposed in this work can be realized by combining elements of these prior experiments. Speciﬁcally, the energy sites of the chromophore donor-acceptor dimeric system shown in Figs. 1(a) and 1(b) can be en-
coded in the internal electronic state of the ions. The tunneling coupling (J) can be realized and adjusted by a coherent laser drive, while the non-Hermitian terms (±iγ ) can be realized and ﬁne-tuned by manipulating gains and losses of the electronic levels by exchange with sources or sinks provided by additional laser drives [see Fig. 1(b)].
With laser heating, ions can absorb energy from additional laser beams with carefully chosen parameters, gaining kinetic energy. Such heating processes act as a source, supplying energy to the ions and increasing their motion. Using laser cooling, ions can be made to lose energy to the surrounding electromagnetic ﬁeld by carefully tuning the frequency and intensity of the cooling lasers. Such cooling processes effectively act as a sink, removing energy from the ions and providing a damping effect -
on their motion.
The excitonic interaction between the donor and acceptor, quantiﬁed by α, can be engineered and adjusted by using a bichromatic laser beam aligned along the axis of the trap, while the donor-vibration coupling, quantiﬁed by κ, can be achieved and tuned through the design of two tones of a tightly focused laser beam localized on the donor ion. In trapped-ion quantum simulator experiments, the vibrational frequency ν is deﬁned as the difference between the ion-crystal rockingmode frequency and the f-
requency splitting between two tones of a bichromatic laser beam localized to the donor ion [42]. This deﬁnition allows for effective variation of the vibrational frequency in our setup. In addition to this effective tuning, trapped-ion quantum systems in general allow for the control of vibrational frequencies through the application of electromagnetic ﬁelds to the trapped ions, inducing speciﬁc oscillation frequencies. The vibrational frequency ν can be adjusted by modifying the frequency of the-
 dynamic radiofrequency (RF) ﬁeld, which can be accomplished by varying the amplitude and/or frequency of the RF signal directed into the trap [45–47]. We note that, in contrast to the vibrational frequency, the energy gap is more challenging to adjust [42].
The non-Hermiticity of the dimer model in Eq. (1) is inherited from the donor component, i.e., Hd = Jσx(d) − iγ σz(d), which respects the PT -symmetry, i.e., PT Hd PT = Hd with parity operator P = σx(d) and time-reversal operator T being a complex conjugation operation. The non-Hermitian donor system can therefore host an EP, as described in detail in Appendix A. For the dimer consisting of a non-Hermitian

donor and a coupled Hermitian acceptor, we can introduce an expanded PT -symmetry operator, namely, P T with P deﬁned as P = σx(d) ⊗ I(a). In the absence of coupling to vibration, i.e., κ = 0, it is straightforward to show that P T H (κ = 0)P T = H (κ = 0) with P = σx(d) ⊗ I(a), implying that the PT -symmetry of the donor transfers to the dimer without vibration via this expanded operator.
The requirements for VAET can be analyzed by consid-
eration of the energetics of the uncoupled dimer, which are
given in Appendix B. The primary requirement for VAET in our dimer is that > 0. We shall focus on the uphill energy transfer processes, speciﬁcally the excitation transfer from the
donor to the acceptor, as illustrated in Fig. 13 in Appendix B, which occur when − J > α/2.
We note that realizing such a non-Hermitian PT symmetric donor with a balanced distribution of gain and loss (±γ ) can be challenging to achieve in experiments. However, an alternative approach can be adopted by constructing a passive PT -symmetric system (possessing only loss, without gain terms) and relating this to a PT -symmetric system by a loss offset. For example, the passive PT -symmetric Hamiltonian H˜d = −i2γ σ+(d)σ−(d) + Jσx(d) is equivalent to H˜d = −iγ I + Hd where −iγ I represents a -
loss offset and Hd is the PT -symmetric donor with balanced gain and loss.
A mapping between the Pauli-operator-based model, e.g.,
Eq. (1) for quantum simulation with trapped ions, and the
widely used Hamiltonian models for excitonic states of light-
harvesting systems has previously been established [43].
The effective Hamiltonian in the single electronic excita-
tion subspace relevant to excitonic energy transfer can be expressed as H˜ = H = (− − iγ )σ˜z + ασ˜x + κσ˜z(a + a†) + νa†a, where = |eg eg| + |ge ge|, σ˜z = |eg eg| − |ge ge| and σ˜x = |eg ge| + |ge eg| with |eg = |e d ⊗ |g a, |ge = |g d ⊗ |e a, eg| = (|eg )†, and ge| = (|ge )†. In the absence of vibration, the effective two-level non-Hermitian
system within the single excitation subspace exhibits eigen-
values given by ± α2 − (γ − i )2 and still possesses an exceptional point at γ = α when = 0. However, this particular parameter regime does not favor the uphill energy transfer
(i.e., the excitation transfer from the donor to the acceptor)
assisted by vibrational modes that is the focus of the current
work, and we do not consider the single excitation subspace
effective Hamiltonian further in this work.
To demonstrate the effect of the non-Hermiticity on the
VAET processes, we focus on the population transferred from
the donor to the acceptor, which is quantiﬁed by the population of the state |ge (= |g d ⊗ |e a representing the state in which the donor is in its ground state and the acceptor is
in its excited state). All calculations use the initial condition |eg (= |e d ⊗ |g a representing the state where donor is in its excited state and the acceptor is in its ground state), which
can be reached optically from the ground state of the dimer by a π /2 pulse. This population is denoted by Pa(t ) and can be calculated for the dimer as

Pa(t ) = Tr[ρ(t )|ge ge|],

(2)

where ρ(t ) represents the total density matrix. We also deﬁne the transfer efﬁciency, denoted by P¯a, as the average
population accumulation over a given time period t f ,

023149-3

ZENG-ZHAO LI AND K. BIRGITTA WHALEY

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

given by

P¯a

=

1 tf

tf
Pa(t ) dt .
0

(3)

The density matrix ρ(t ) is obtained as

ρ(t ) = U †ρdim (0)ρvU ,

(4)

Tr[U †ρdim (0)ρvU ]

where ρdim(0) = |eg eg| is the initial state of the dimer (i.e., an excitation initially on the donor) and U = e−iHt with H given in Eq. (1) is the nonunitary time evolution operator. For
the vibration, we consider a thermal initial state described by ρv = e−βνa†a/Tr(e−βνa†a ) with β = 1/kBT , where kB denotes the Boltzmann constant and T represents the temperature.
This state is characterized by kBT and is relatively easy to prepare in trapped-ion quantum simulator experiments [42].
Throughout this work, we choose the Fock space size of the vibration as N = 50, which is much larger than the average phonon number. This choice ensures the accuracy and conver-
gence of the results.
In the subsequent numerical calculations, speciﬁc parame-
ter values have been adopted to provide a meaningful context
for our analysis. Unless explicitly speciﬁed, we have cho-
sen typical values within the domain of trapped-ion energy scales, namely, α/J = 1, /J = 8, ν/J = 16.12, κ/J = 0.3, kBT /J = 40, and t f = 22.5/J. These values are motivated by the characteristic kHz frequencies observed in trappedion systems. For example, {J, α, , ν, κ, kBT } = 2π × {2.6, 2.6, 20.8, 41.912, 0.78, 104} kHz, and t f = 1.378 ms [42]. The value of (> J + α/2) ensures the uphill transfer of excitations from the donor to the acceptor, as detailed in Appendix B. The vibrational frequenc-
y ν, nearly resonant with the dimer transition, is determined by the dimeric energy structure (J, α, , and the gain-loss variable γ ). The chosen value of κ places the system in the weak dimer-vibration coupling regime, and the vibrational temperature kBT is set high to ensure that the vibrational mode provides the necessary
phonons to facilitate excitation energy transfer in the dimer. The robustness to different values of κ and kBT is discussed in Sec. V. It is important to note that alternative choices for
the ﬁnal evolution time t f do not affect the primary result of the non-Hermitian VAET spectral features, as discussed in
Sec. IV C.

III. EPs AND DYNAMICS IN THE ABSENCE OF VIBRATIONAL MODES A. Exceptional points
When the non-Hermitian chromophore dimer is decoupled from the vibrational mode (κ = 0), its Hamiltonian is given simply by
Hdim = −iγ σz(d ) + Jσx(d ) + σz(a) + ασx(d )σx(a) (5) with eigenenergies λ j ( j = 1, 2, 3, 4) given by
λ1 = −λ2 = − ξ − 2 α2J2 + (J − γ )(J + γ ) 2, (6)
λ3 = −λ4 = − ξ + 2 α2J2 + (J − γ )(J + γ ) 2, (7)

FIG. 2. (a), (b) Real (a) and imaginary (b) parts of eigenenergies λi for the non-Hermitian chromophore dimer Hdim with /J = 8 and variable donor-acceptor coupling α. Note the occurrence of two pairs of doubly degenerate energies along the line starting at γ /J = 1 for α = 0. (c) Exceptional line composed of two pairs of degenerate eigenvalues for the non-Hermitian chromophore dimer Hdim with /J = 8. The limit α = 0 represents the uncoupled dimer which contains the non-Hermitian donor monomer. (d)-
 Projections at α/J = 1 of eigenstates |ψ j [i.e., |ψ1 (blue), |ψ2 (orange), |ψ3 (green), and |ψ4 (red)] onto the four basis states |ee (dashed lines), |eg (circles), |ge (diamonds), and |gg (down-pointing triangles). It is evident that there is a simultaneous coalescence of eigenvectors |ψ1 and |ψ3 , and of eigenvectors |ψ2 and |ψ4 , with each pair corresponding to a different degenerate eigenvalue [panel (a)], resulting in a twofold degenerate second-order EP. Unless otherwise speciﬁed, all plot-
s are made with parameters α/J = 1, /J = 8, and κ/J = 0.
where ξ = α2 + J2 − γ 2 + 2. The eigenenergies are shown in Fig. 1(a). The corresponding eigenstates are denoted as |ψi . This chromophore dimer can exhibit twofold degenerate second-order EPs, as we discuss in detail below. In this work we shall focus on the second-order EPs found for the parameter ratio /J = 8, analyzing the dynamics in particular for the case where the ratio of excitonic coupling to donor chromophore tunneling is unity, i.e., α/J = 1.
Despite the fact that Hdim in Eq. (5) is not Hermitian (i.e., Hdim = Hd†im), its eigenenergies can still be real, since it is PT -symmetric as noted above. This is evidenced in Figs. 2(a) and 2(b), which display respectively the real and imaginary parts of the eigenenergies λ j, as functions of the gain-loss rate γ and the donor-acceptor coupling α, for /J = 8. It is evident that there are two lines of second-order exceptional points, one representing the simultaneous degeneracy of eigenenergies λ-
1 and λ3, and the other representing the degeneracy of eigenenergies λ2 and λ4. Remarkably, while the real component of the eigenenergies differ on the two lines, in the (γ /J, α/J ) plane the lines are identical, resulting in a single, twofold degenerate, line of second-order exceptional points in the parameter space {γ /J, α/J}. This line is shown explicitly in Fig. 2(c) to more clearly reveal how the secondorder EP of the non-Hermitian monomer donor chromophore, which is located at (γ /J, α/J )-
 = (1, 0) (see Appendix A), is smoothly transformed to the degenerate pair of second-order

023149-4

ENHANCEMENT OF VIBRATIONALLY ASSISTED ENERGY …

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

FIG. 3. (a), (b) Non-Hermitian dynamics of Pa(t ) in PT symmetry unbroken (a) and broken (b) phases. (c) Dependence of the period of slow oscillations in panel (a), T ∗ = 2π /λ42(13), on the gain-loss rate γ when approaching the EP in the unbroken phase. The green dashed curve is an eye guide calculated from y = 2.23(1.00778 − x)−1/2. (d) Dependence of Pa(t f ) (blue solid curve) and P¯a (orange dashed curve) on γ /J, showing the PT -symmetry phase transition at γ /J = 1. Unless otherwise speciﬁed-
, all plots are made with parameters α/J = 1, /J = 8, κ/J = 0, and t f = 22.5/J. The initial state is |eg in all calculations.
EPs of the dimer as the donor-acceptor (excitonic) coupling to the acceptor chromophore, α, is turned on. These EPs of the coupled dimer are only slightly shifted, to larger values of the gain-loss parameter, as α/J is increased. Thus the dimer EP is very close to the donor monomer EP. Physically, this indicates that for the dimer EP, the excitonic coupling α plays a role similar to the internal donor tunneling J in balancing the gain-loss rate γ .
We note that the second-order exceptional line in Fig. 2(c) aligns closely with the vertical line γ /J = 1. This is due to the parameter choice /J = 8, which describes the uphill energy transfer of excitations from donor to acceptor, as discussed in the previous section and in Appendix B. Corresponding exceptional lines for other values of /J, speciﬁcally for
/J = 0 and /J = 2, are shown in Appendix C. Figure 2(d) shows the absolute value of the projection of the eigenstates |ψ j onto the four basis states |k (k = ee, eg, ge, gg), for the parameter choice α/J = 1 and /J = 8. For each basis state, i.e., |ee (dashed lines), |eg (circles), |ge (diamonds), or |gg (down-pointing triangles), it is evident that the eigenstates of both pairs |ψ1 (blue) and |ψ3 (green), and |ψ2 (orange) and |ψ4 (red) coalesce at a common second-order EP, indicating the twofold -
degeneracy of this second-order EP.
B. Non-Hermitian features of excitation energy transfer processes
The time evolution of the acceptor population, denoted as Pa(t ) [see Eq. (2)], is presented in Figs. 3(a) and 3(b). These correspond respectively to the dynamics in PT -symmetry

unbroken phase [Fig. 3(a), with real eigenenergies shown in Figs. 2(a) and 2(b)], and to the dynamics in the broken phase [Fig. 3(b), with complex eigenenergies]. The two phases are separated by an EP, which for the case of α/J = 1 and /J = 8 is located at γ /J = 1.00778 ∼ 1.

1. γ = 0

We ﬁrst analyze the Hermitian case γ = 0 [blue curve in

Fig. 3(a)]. In this case, Pa(t ) exhibits perfect Rabi oscillations with a period close to 0.39/J (25 oscillations in Jt 10),

corresponding to transitions between eigenstates |ψ1(3) and |ψ4(2) with a frequency λ41(23) ≡ λ4(2) − λ1(3) ≈ 16.12J (see the cyan up-down arrows in Fig. 1(a) and eigenenergies λ j at γ = 0 in Appendix C). This fast oscillation of the population

Pa(t ) at the acceptor (in state |ge ) results from the donoracceptor coupling, represented by Hα ≡ ασx(d)σx(a) in Eq. (5),
which transfers the initial excitation from the donor state

(|eg ) to the acceptor state. The eigenstates of the decoupled

Hamiltonian H˜0 ≡ Hdαim,γ →0 = Jσx(d) + σz(a) are

|ψ˜1(3) ≡ |ψ1(3) α,γ →0 = |e d√± |g d ⊗ |g a,

(8)

2

|ψ˜4(2) ≡ |ψ4(2) α,γ →0 = |e d√± |g d ⊗ |e a,

(9)

2

with corresponding eigenenergies λ1(3) = ±J − and λ4(2) = ±J + , respectively, illustrated by gray dashed lines in Fig. 1(a). In the interaction picture with respect to H˜0, the
donor-acceptor coupling becomes

eiH˜0t Hα e−iH˜0 =

ei(λj−λk )t ψ˜ j |Hα|ψ˜k |ψ˜ j ψ˜k |

j,k

= α(eiλ41t |ψ˜4 ψ˜1| + eiλ23t |ψ˜2 ψ˜3|), (10)

indicating that Hα is responsible for the fast oscillations with the oscillating period 2π /λ41(23) observed in the blue cure of Fig. 3(a). Alternatively, we can express the initial
and target states as superpositio√ns of the eigenstates [i.e., |eg = (|ψ1 √α,γ →0 + |ψ3 α,γ →0 )/ 2 or |ge = (|ψ4 α,γ →0 − |ψ2 α,γ →0)/ 2], and calculate the transition matrix element of the interaction ge|ασx(d)σx(a)|eg . This calculation shows that nonzero elements exist only between |ψ1(3) α,γ →0 and |ψ4(2) α,γ →0, corresponding to the fast oscillations induced by the donor-acceptor coupling Hα.

2. γ = 0
Upon entering the PT -symmetry unbroken phase (i.e., 0 < γ /J 1), slow oscillations of Pa(t ) emerge that are superimposed on the fast oscillation, with a reduced amplitude
compared to the Hermitian case. These slow oscillations re-
sult in a longer oscillating period as the system approaches the EP, evidenced by, e.g., the orange (γ /J = 0.8) or green (γ /J = 0.9) curve in Fig. 3(a). These oscillations in the unbroken phase are induced by the non-Hermitian term −iγ σz(d) in Eq. (5). They correspond to transitions between eigenstates |ψ4(1) and |ψ2(3) , with a transition frequency λ42(13) ≡ λ4(1) − λ2(3) [see the orange up-down arrows in Fig. 1(a)]. For example, the transition frequency takes the value of 1.217J for γ /J = 0.-
8, resulting in a period of 5.16/J (approximately two oscillations when Jt 10) for the orange curve in Fig. 3(a).

023149-5

ZENG-ZHAO LI AND K. BIRGITTA WHALEY

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

The longer oscillating period near the EP is due to the decrease of λ13(42) as γ increases, as can be seen from Eqs. (6) and (7) or Fig. 2(a). These slow γ -induced oscillations can be understood by employing the eigenstates of Hdαim,γ →0 in Eq. (8) [or Eq. (9)] for the acceptor at its ground (or excited) state. C√onsidering the initial state |eg = (|ψ1 α,γ →0 + |ψ3 α,γ →0√)/ 2 and the target state |ge = (|ψ4 α,γ →0 − |ψ2 α,γ →0 )/ 2 in terms of these eigenstates, the nonvanishing transition matri-
x elements of the non-Hermitian term ge| − iγ σz(d)|eg appear only between |ψ1(4) α,γ →0 and |ψ3(2) α,γ →0. This, together with Eq. (8) [or Eq. (9)], implies oscillations with an√oscillating period 2√π /λ13(42) between states (|e d + |g d )/ 2 and (|e d − |g d )/ 2 in the donor subspace. Moreover, during each period of the slow oscillation, there is a rapid growth
of Pa(t ) followed by a slow decrease. This behavior can be understood as the gain-loss rate γ more easily promoting the
transfer of an initial excitation at the donor where it is added, than decreasing the excitation at the acceptor. The γ -induced slow oscillations between |ψ1(4) and |ψ3(2) distort the αinduced fast oscillations between |ψ1(3) and |ψ4(2) , giving rise to the modulated Rabi-like oscillations in the unbroken
phase evident in Fig. 3(a). In the PT -symmetry broken phase (i.e., γ /J 1),
Fig. 3(b) shows that the rapid growth of the acceptor pop-
ulation Pa(t ) is followed by approach to a nonequilibrium steady state which is characterized by small amplitude fast
oscillations. The population in this steady state increases slightly with γ /J. Similar to the Hermitian case [γ = 0,
blue curve in Fig. 3(a)], these fast oscillations correspond to transitions between |ψ1(3) and |ψ4(2) . The non-equilibrium steady state arises primarily from the purely imaginary transition frequency between eigenstates |ψ1(4) and |ψ3(2) . For example, the transition frequency is approximately λ13(42) = λ1(4) − λ3(2) ∼ {i0.312J, i0.51J, i0.652J, i0.77J} for γ /J = {1.02, 1.04, 1.06, 1.08}, respectively (see Appendix C). This
steady state can be regarded as the symmetry-broken analog of the γ -induced slow oscillations observed in Fig. 3(a), but
now with an inﬁnite period resulting from the vanishing real
part of the transition frequency in the symmetry-broken phase.
From this perspective, the larger steady-state population for the larger γ value evident in Fig. 3(b) can be attributed to
the more rapid growth resulting from transfer of an initial
excitation promoted by the gain-loss rate, as discussed in the
preceding paragraph.
To conclude this section, in Figs. 3(c) and 3(d) we present, respectively, the period T ∗ of slow oscillations in the unbroken symmetry phase, and the behavior of Pa(t f ) and P¯a over the full range of γ /J. Figure 3(c) displays the dependence of T ∗ = 2π /λ42(13), i.e., the slow oscillations for the λ42 and λ13 transitions of Fig. 1(a), on the gain-loss rate γ close to the exceptional point. On decreasing γ away from the EP in the unbroken phase, T ∗ exhibits an inverse square-root
relation, indicated by the green dashed curve as a visual guide.
This dependence arises from the second-order nature of the EP. Speciﬁcally, the eigenenergies λ j as well as the resulting energy difference λ42(13) are proportional to the square root of a small deviation in γ from the EP at γ /J = 1.00778 ∼ 1, leading to an inverse square root dependence of the period T ∗.
The green dashed curve also aligns with the observation that T ∗ tends to inﬁnity at the EP where λ13 = λ42 → 0.

Figure 3(d) shows that both the acceptor population Pa(t = t f ) at a given time t f , and the acceptor population accumulation P¯a up to this time [Eq. (3)], provide qualitative order parameters for the transition between the unbroken and broken PT -symmetry phases. Apart from the expected difference between these two quantities in the regime γ /J 1 (i.e., with or without oscillating behaviors), it is evident that both Pa(Jt f = 22.5) (blue solid curve) and P¯a (orange dashed curve) undergo signi-
ﬁcant changes at the EP (γ /J ∼ 1), indicating the location of a PT -symmetry phase transition. The monotonically increasing behavior of Pa(t = t f ) or P¯a for γ /J 1 is attributed to the presence of the nonequilibrium steady state with a higher population for larger γ , that was observed in Fig. 3(d) and commented on above.
IV. ENHANCED VIBRATIONALLY ASSISTED ENERGY TRANSFER NEAR AN EP
The relatively low population transported from the donor to the acceptor that is shown in Figs. 3(a), 3(b), and 3(d) can be increased by introducing coupling to vibrations (κ = 0). We show in this section that the resulting excitation energy transfer process by absorption of phonons from a vibrational mode, which is the non-Hermitian extension of VAET in the Hermitian case (γ = 0), can be signiﬁcantly enhanced near an EP. After brieﬂy summarizing the Hermitian VAET features, we shall explicitly an-
alyze the efﬁciency of VAET as a function of the distance from the EP of the system without vibrations that was characterized in the previous section. We ﬁrst present the non-Hermitian dynamics of the entire system including the vibration, under the VAET resonance conditions, which are ν = λ23 = λ41 = 16.12J for one-phonon VAET and 2ν = λ23 = λ41 = 16.12J for two-phonon VAET [see Fig. 1(a)]. We then probe the spectral features of the VAET processes by continuously scanning the vibrational frequenc-
y ν. Our calculations are based on analysis in the weak dimer-vibration coupling κ regime, to avoid population of the vibronic states that characterize the strong coupling regime [44]. We also assume an uphill transfer ( − J > α/2), which we realize with the speciﬁc parameter choice /J = 8 and α/J = 1.
A. Hermitian VAET
Figure 4 summarizes the features of VAET for the Hermitian system. The dynamics in Fig. 4(a) show that, for a speciﬁc dimer-vibration coupling of κ/J = 0.3, the blue and green curves representing ν/J = 18 and ν/J = 14 respectively in Pa(t ), display higher population at the acceptor than both the blue curve (γ = κ = 0) in Fig. 3(a) for the case of no vibration, and the orange curve depicting ν/J = 16, which is nearly resonant with the dimer transition but is not allowed by the phonon absorption me-
chanism (as explained below). This pair of VAET processes, representing transitions in the Hermitian limit between the eigenstates |ψ3 and |ψ4 or between |ψ1 and |ψ2 , are depicted as blue and green updown arrows in Fig. 1(a). These processes correspond to the absorption of a phonon from the vibrational modes ν = λ43 or λ21. This observation implies that the VAET processes (κ = 0) exhibit sensitivity to the chosen vibration frequency. This frequency dependence is further exempliﬁed in Fig. 4(b),

023149-6

ENHANCEMENT OF VIBRATIONALLY ASSISTED ENERGY …

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

FIG. 4. (a) Dynamics of Pa(t ) for the one-phonon VAET in the Hermitian limit with ν/J = 14, 16, 18. (b) Hermitian spectra of the VAET processes as a function of κ/J and ν/J, represented by Pa(t f ) with t f = 22.5/J. Unless otherwise speciﬁed, all plots are made with parameters γ = 0, α/J = 1, /J = 8, κ/J = 0.3, and with the initial state |eg .

which summarizes the dependence of the population transfer Pa(Jt f = 22.5) on the vibrational frequency ν and the vibrational coupling strength κ. Figure 4(b) shows that for a ﬁxed vibration frequency, such as ν/J = 18 or ν/J = 14, the population transfer initially increases with κ, followed by a subsequent, albeit very slight, suppression as κ is further increased to the extent that it causes a departure from the weak dimer-vibration coupling regime and leads to the formation of vibronic states w-
ith strong mixing of excitonic and vibrational degrees of freedom [44].
B. Dynamical features of non-Hermitian VAET
The non-Hermitian dynamics of the one-phonon VAET processes, quantiﬁed by the acceptor population Pa(t ), are shown in Figs. 5(a) and 5(b) (with ν/J = 16.12), while the dynamics of the two-phonon VAET processes are shown in Figs. 5(c) and 5(d) (with ν/J = 8.06). Figures 5(b) and 5(d) show the dynamics for nine speciﬁc values of the gain-loss parameter γ , extracted from Figs. 5(a) and 5(c), respectively.
1. One-phonon VAET dynamics
Figure 5(a) shows that the acceptor population is initially low in the Hermitian limit (γ = 0) and becomes more pronounced on approaching the EP (located at γ /J = 1.00778 ∼ 1 when α/J = 1 and /J = 8) from the unbroken phase. The gradual increase in population as γ moves toward the EP indicates that the one-phonon VAET processes (with ν = λ23 = λ41 = 16.12J) can be enhanced in the presence of non-Hermiticity. As γ is further increased and the system enters the broken symmetry phase, Pa(t ) is supp-
ressed again, in contrast to the nonequilibrium steady state in the absence of vibrations, where a higher population is observed for larger γ [see Fig. 3(b)]. Therefore, there is also an enhancement of the VAET processes as γ approaches the EP from the broken phase. We also see that for a ﬁxed time, i.e., a ﬁxed Jt value, the enhancement on approaching the EP from the unbroken symmetry phase is accompanied by oscillatory behavior with respect to γ . This is further illustrated by the comparison of-
 Pa(t ) over the nine speciﬁc values of γ that is shown in Fig. 5(b). For instance, the ﬁrst peak of Pa(t ) reaches 0.957 at Jt = 17.37 for γ /J = 0.99 (purple curve) or

FIG. 5. (a), (b) Non-Hermitian dynamics represented by Pa(t ), shown as a function of time t for several values of gain-loss parameter γ for one-phonon VAET processes, using ν/J = 16.12. (c, d) Pa(t ) vs time t for several values of gain-loss parameter γ for twophonon VAET processes, using ν/J = 8.06. The white dotted line in panels (a) and (c) represents Jt = 22.5. Panels (b) and (d) show Pa(t ) for nine speciﬁc values of γ , starting with γ = 0 (Hermitian case) and eight values for non-Hermitian-
 systems, with γ /J = 0.9, 0.97, 0.98, 0.99, 1, 1.01, 1.02, 1.03. Unless otherwise speciﬁed, all plots were obtained with the parameter values α/J = 1 and
/J = 8, for which a twofold degenerate second-order EP is located at γ /J = 1.00778 ∼ 1, and κ/J = 0.3, kBT /J = 40. The initial state is |eg in all calculations.
0.895 at Jt = 22.52 for γ /J = 1 (brown curve). These values are at least 40 times greater than the peak value observed in the Hermitian case; see Fig. 5(b), which shows a peak value of ∼0.02 (represented by the blue curve with γ = 0). We refer the reader also to Fig. 4(a), which exhibits similar peak values in the orange curve but with a slightly different vibrational frequency ν/J = 16. Interestingly, we note that the peak population for γ /J = 0.99 is slightly higher than that for γ /J = 1. Thi-
s difference is attributed to a slight shift away from the EP position γ /J = 1.00778 ∼ 1 for the coupling value κ/J = 0.3. To support this interpretation, an additional calculation was made with κ/J = 0.1, which is closer to the EP at γ /J = 1.00778 ∼ 1. This calculation now explicitly shows that the peak population becomes higher, the closer the gain-loss parameter γ is to its value at the EP. We show below that this enhancement of the VAET processes is a result of phonon absorption, resulting f-
rom the donor-vibration interaction in Eq. (1) being maximally favorable at the twofold degenerate second-order EP, allowing four simultaneous transitions between eigenstates associated with distinct EPs to be excited by a single phonon.
2. Two-phonon VAET dynamics
Figure 5(c) presents the two-phonon VAET processes. These also exhibit an enhancement relative to the γ = 0 Hermitian case, but this is now weaker than the enhancement seen in the single-photon VAET of Fig. 5(a). In particular, for a

023149-7

ZENG-ZHAO LI AND K. BIRGITTA WHALEY

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

given value of time t, i.e., ﬁxed Jt value, the oscillations with respect to γ are now relatively far from the EP and also saturate at values of γ /J within the unbroken symmetry phase, i.e., they do not continue to increase on further approach to the EP. This early saturation of the enhancement before the EP is also evident on comparison of the curves in Fig. 5(d). We attribute this saturated enhancement to the coupling strength κ that is relatively strong for the two-phonon process with ν/J = 8.-
06 and thereby enables the dimer-vibration system to arrive quickly to a steady state, compared to the one-phonon VAET case (ν/J = 16.12). To support this interpretation, we have conducted additional calculations with smaller values of κ than used in Figs. 5(c) and 5(d). We observed two-phonon VAET dynamics similar to those in Fig. 5(a) or 5(b), but with reduced populations. Our conclusion that the coupling strength becomes relatively strong for the two-phonon VAET process, with at the same time a-
 smaller frequency than that of the one-phonon case, is further supported by a more pronounced modulation of Rabi-like oscillations in the Hermitian limit [blue curve in Fig. 5(d) with γ = 0] than in the onephonon case [blue curve in Fig. 5(b)] or the no-phonon case κ = γ = 0 [blue curve with Rabi oscillations in Fig. 3(a)].
C. Spectral features
In addition to the two speciﬁc values, ν/J = 16.12 and 8.06, that we have used above for analysis of the one- and two-phonon VAET processes, respectively, it is possible to investigate the dynamics of energy transfer processes across the entire range of the non-Hermitian parameter space by continuously scanning the frequency of the vibrational mode, i.e., ν. Figures 6(a) and 6(b) illustrate the resulting spectra of VAET processes, represented by Pa(t f ) and P¯a, respectively, as a function of γ /-
J and ν/J for a weak phonon coupling value κ/J = 0.3.
1. Hermitian VAET spectrum
In the Hermitian limit (γ = 0), Fig. 6(a) shows one-phonon VAET processes occurring at ν/J ∼ 14 and 18, corresponding to transitions between eigenstates |ψ1 and |ψ2 , or |ψ3 and |ψ4 , respectively, that are accompanied by an absorption of a phonon from the vibrational mode ν = λ21 or λ43. These one-phonon VAET processes, together with their corresponding dynamics displayed in Fig. 4(a), are indicated by green or blue up-down arrows in Fig. 1(a), and the eigenenergies λi are given in Appendix C. Th-
is VAET excitation energy transfer process is distinct from the fast oscillations between |ψ1(3) and |ψ4(2) with λ41(23) ∼ 16.12J [see the blue curve in Fig. 3(a) and cyan up-down arrows in Fig. 1(a)] that are observed in the absence of the vibrational mode.
2. Non-Hermitian VAET spectrum
Interestingly, as γ increases from zero going into the non-Hermitian regime, the two one-phonon VAET processes originating from their respective Hermitian point at ν/J ∼ 18 or 14 move closer to each other and eventually converge at ν/J = 16.12 at the EP (where γ /J = 1.00778 ∼ 1) [see Fig. 6(a)]. Moreover, at the EP, the population of the VAET process becomes more pronounced compared to both the

FIG. 6. (a), (b) Non-Hermitian spectra of the VAET processes as a function of γ /J and ν/J, represented by Pa(t f ) in panel (a) and by P¯a in panel (b). For these plots we take t f = 22.5/J, corresponding to the time at which Pa is maximal for γ /J = 1 according to the brown curve in Fig. 5(b). (c), (d) One-dimensional spectra of VAET processes at t f = 22.5/J, with ν/J = 16.12 (c) and ν/J = 8.06 (d), taken as cuts through the two-dimensional spectra in panels (a) and (b). Unless otherwise speciﬁ-
ed, all plots were obtained with the parameter values α/J = 1 and /J = 8, for which two second-order EPs are located at γ /J = 1.00778 ∼ 1, and κ/J = 0.3, kBT /J = 40. The initial state is |eg in all calculations.
population in the unbroken phase (γ /J 1) and in the broken phase (γ /J 1) [see the white dotted line Jt = 22.5 in Fig. 5(a)]. This intriguing behavior of the two one-phonon VAET processes in response to changes in γ /J arises from the coalescing of eigenstates and/or eigenenergies, as depicted in Figs. 2(a), 2(b), and 2(d), and is reﬂected in the shape of the maximal probabilities in the upper left quadrants of Figs. 6(a) and 6(b).
This phenomenon suggests a unique ﬂuorescence-detected vibrational spectroscopy approach for probing both EPs and PT -symmetry phase transitions in non-Hermitian quantum systems, namely, by analysis of the spectrum of a weakly coupled vibrational mode. We note that the traditional approach to analysis of vibrational spectra considers the spectral amplitude at a given frequency/wavelength, which measures the intensity of phonons emitted at that speciﬁc frequency/wavelength. Higher spectral amplitud-
es indicate more intense emission, while lower spectral amplitudes correspond to weaker emission. We can take advantage of this in trapped-ion experiments when measuring the acceptor population by ﬂuorescence detection [45], at a given vibrational frequency/wavelength. This population constitutes a measure of the energy transfer that is assisted by phonons emitted from the enabling vibrational mode. Higher acceptor population indicates a more intense emission of phonons, just as in the conventiona-
l vibrational spectrum analysis, thereby providing a measure of the vibrationally assisted energy transfer. Notably, the maximum acceptor population at

023149-8

ENHANCEMENT OF VIBRATIONALLY ASSISTED ENERGY …

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

the EP (γ /J = 1.00778 ∼ 1) that corresponds to the one-

phonon VAET process with ν/J = 16.12 is attributed to the

twofold second-order non-Hermitian degeneracy at this point.

This degeneracy results in four simultaneous transitions (with

λ41 = λ23 = λ21 = λ43 given that λ1 = λ3 and λ2 = λ4 at the

twofold degenerate second-order EP) that are excited by a

single phonon. The phonon-absorption mechanism described

in the next subsection below provides further support for this

interpretation.

Other than single phonons, energy transfer processes in-

volving the absorption of two or even three phonons from

the coupled vibrational mode are also observed. These pro-

cesses occur at ν/J = 8.06 and ν/J = 5.37, respectively, as

shown in Fig. 6(a). Notably, the maximum of Pa(t f ) for the two- or three-phonon VAET process appears at a position

noticeably shifted away from the EP (γ /J = 1.00778 ∼ 1).

This shift is ascribed to the change in EP position induced by

the vibrational coupling strength κ, which becomes relatively

stronger (as indicated

by

the ratio κ/ν

=

κ /J ν/J

)

for

multiphonon

processes with, e.g., 2ν ∼ λ41 = λ23 or 3ν ∼ λ41 = λ23, for

a given dimeric energy structure. To further investigate this

effect, we have recalculated Fig. 6(a) with a weaker cou-

pling, speciﬁcally with κ/J = 0.1, and observed that there

is now no noticeable shift, while the acceptor population is

also reduced because of the weaker vibrational coupling. An-

other consequence of this stronger relative coupling strength

for the two-phonon VAET process can be observed from

the unmarked but clearly visible horizontal line ν/J = 8.06

in Fig. 6(a). This line corresponds to the white dotted line

Jt = 22.5 in Fig. 5(c) and clearly exhibits more pronounced

acceptor population in regions away from the EP than the

corresponding population seen for the one-phonon VAET pro-

cess with ν/J = 16.12 [or, equivalently, the line Jt = 22.5 in

Fig. 5(a)].

Although we have selected Jt f = 22.5 as the time point at which Pa(t ) reaches its maximum value for γ /J = 1 [see

Fig. 5(b)], we emphasize that the main spectral features of the

VAET processes in the presence of the non-Hermiticity that

are shown in Fig. 6(a) are quite universal and independent of

the speciﬁc values of t f . This universality is demonstrated in
Fig. 6(b), which presents the average population accumulation P¯a over a time period t f = 22.5/J [see Eq. (3)]. Like Pa(t f ) in Fig. 6(a), P¯a in Fig. 6(b) also shows two one-phonon VAET

processes with almost identical populations in the unbroken

symmetry phase to the left of the EP (γ /J 1). This similar-

ity is due to the dimer-vibration interaction, which results in

optical transitions that are less dependent on γ , as explained

in Sec. IV D below.

Figures 6(c) and 6(d) display the phase transition charac-

teristics of the one- and two-phonon VAET processes with

ν/J = 16.12 and ν/J = 8.06, respectively. These plots are

constructed from the data in Figs. 6(a) and 6(b) and constitute

an analog of Fig. 3(d) which represents the correspond-

ing one-dimensional spectra for the dimer without vibration.

Importantly, these panels also clearly illustrate the enhance-

ment of VAET near the EP relative to the γ = 0 Hermitian

case. Regarding the one-phonon VAET process, Fig. 6(c)

demonstrates that the transition from PT -symmetry unbro-

ken (γ /J 1) to broken (γ /J 1) phases occurs at the EP

(γ /J = 1.00778 ∼ 1), for both observables, i.e., for Pa(t f )

and the time-averaged P¯a. This independence of the speciﬁc observable indicates that the VAET spectrum can serve as a reliable means of investigating the PT -symmetry phase transition, with both Pa(t f ) and P¯a providing a spectral signature as a function of γ /J. Figure 6(d) also shows a much broader
lineshape of the two-phonon VAET peak at the quantum phase
transition than that seen for the one-phonon VAET peak in
Fig. 6(c). This difference is also attributed to the coupling strength κ being considerably stronger for the two-phonon VAET process (ν/J = 8.06, compared to 16.12 for the one-
photon VAET process).

D. Phonon-absorption mechanism

Since in the absence of vibrations we see fast oscilla-

tions associated with the excitonic transitions λ41 and λ23

[see Fig. 3(a)], it appears surprising that in the presence of

vibrations neither Fig. 6(a) nor Fig. 6(b) shows any dominant

feature of a corresponding one-phonon VAET process. In

particular, there is no evidence of any spectral feature corresponding to enhancement of Pa(t f ) or P¯a when the vibrational frequency is equal to the excitonic transition energy, i.e., ν =

λ41 = λ23 = 16.12J [represented by the cyan up-down arrows

in Fig. 1(a)]. This absence is most clearly evident both in the

Hermitian limit (γ = 0) and in the unbroken symmetry phase

away from the EP. Nevertheless, there is a strong spectral

feature for this vibrational frequency at the location of the EP,

which we shall discuss below, and also a very weak feature in

the broken symmetry phase.

The absence of a clear one-phonon feature away from

the EP can be attributed to the donor-vibration interaction

represented by Hint ≡ κσz(d)(a + a†) in Eq. (1), which leads to nearly vanishing transition matrix elements between eigen-

states |ψ4(2) and |ψ1(3) . Given that the vibration is initially in the thermal state (e.g., kBT /J = 40), this behavior can be

understood analytically by examining the transition matrix el-

ements of Hint between the eigenstates of the decoupled donor

and acceptor in the Hermitian limit, namely, |ψ4

→ |ge√+|ee
2

and |ψ1

→ |gg√+|eg
2

or |ψ2

→ |ge√−|ee
2

and |ψ3

→ |gg√−|eg
2

[see Eqs. (8) and (9) as well as the gray dashed lines in

Fig. 1(a)].

To gain more physical understanding, we numerically cal-

culate the transition matrix elements of the donor operator

σz(d) in Hint between the eigenstates |ψ j and |ψk= j of Eq. (5). These are presented in Fig. 7. The green circles with the

dashed-dotted curve show that the transitions between |ψ1 and |ψ4 and between |ψ2 and |ψ3 , respectively, are forbid-

den in the Hermitian limit, implying that there is no VAET

at γ = 0, while these transitions become maximally favorable

at the EP. This explains why the one-phonon VAET process

with ν/J = 16.12 in Figs. 6(a) and 6(b) is not prominent

in the region away from the EP. At the same time, the or-

ange squares with the dashed-dotted curve indicate that in

the symmetry unbroken phase, the vibration induces instead

transitions between |ψ1 and |ψ3 , and between |ψ2 and |ψ4 with λ13(42) = λ1(4) − λ3(2). This frequency is approximately 1.217J for γ /J = 0.8, which corresponds to the frequency of

oscillations for the orange curve in Fig. 3(a) that are induced

in the Hermitian system by addition of the non-Hermitian

gain/loss γ . However, this small value of vibrational

023149-9

ZENG-ZHAO LI AND K. BIRGITTA WHALEY

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

FIG. 7. Transition matrix elements of the donor operator σz(d) in the donor-vibration interaction [i.e., Hint ≡ κσz(d)(a + a†) in Eq. (1)] between eigenstates |ψ j and |ψk(= j) ( j, k = 1, 2, 3, 4) of the nonHermitian dimer given in Eq. (5). The parameters used are α/J = 1 and /J = 8, and the corresponding twofold degenerate secondorder EP is at γ /J = 1.00778 ∼ 1.
frequency ν implies a relatively large average phonon number that is well beyond the region of validity of the calculations in Figs. 6(a) and 6(b) (see Sec. II). Finally, the blue diamonds with the dashed-dotted curve show the corresponding matrix elements for vibrationally induced transitions between |ψ1 and |ψ2 , and between |ψ3 and |ψ4 . These correspond to the one-phonon VAET processes starting from ν/J = 14 and ν/J = 18, respectively, that are observed in the top left quadrants of Figs. 6(a) -
and 6(b). The lack of any dependence of | ψ2|σz(d)|ψ1 | (blue diamonds) and | ψ4|σz(d)|ψ3 | (blue dashed-dotted curve) on γ accounts for the fact that these two one-phonon VAET processes have nearly identical intensities [see, e.g, the top left quadrant of Fig. 6(b)].
Figure 7 shows that at γ /J ∼ 1 the four transition matrix elements | ψ2|σz(d)|ψ1 |, | ψ4|σz(d)|ψ3 |, | ψ4|σz(d)|ψ1 |, and | ψ3|σz(d)|ψ2 | are identical in magnitude, resulting in four simultaneous transitions (with λ41 = λ23 = λ21 = λ43 for a given dimeric energy structure with the parameters α/J = 1 and /J = 8) that can be resonantly excited by a single phonon from the vibrational mode with ν/J = 16.12. This results in the maximal population, i.e., Pa(t f ) = 0.895 and P¯a = 0.248, seen at the E-
P for the one-phonon VAET processes in Figs. 6(a) and 6(b). To quantify the enhancement of vibrationally assisted energy transfer relative to the Hermitian case, we analyze the population Pa(t f ) or P¯a of the non-Hermitian one-phonon VAET process relative to its corresponding Hermitian case. The enhancement factor can be deﬁned as Pa(t f , γ )/Pa(t f , γ = 0) or P¯a(γ )/P¯a(γ = 0) and is plotted in Fig. 8. This shows that as the EP at γ /J = 1.00778 ∼ 1 is approached, the non-Hermitian one-phono-
n VAET process is signiﬁcantly enhanced compared to the Hermitian case, by a factor up to approximately 57 for Pa(t f , γ )/Pa(t f , γ = 0) (blue solid curve), and up to 27 for P¯a(γ )/P¯a(γ = 0) (orange dashed curve).
This analysis of the mechanism for phonon absorption highlights the simultaneous excitation of multiple one-phonon

FIG. 8. Enhancement factor for VAET of the non-Hermitian system, deﬁned as the ratio of the population Pa(t f , γ ) or P¯a(γ ) to the corresponding Hermitian population Pa(t f , γ = 0) or P¯a(γ = 0),
respectively. The twofold degenerate second-order EP is located
at γ /J = 1.00778 ∼ 1. The parameters used here are α/J = 1, /J = 8, t f = 22.5/J, κ/J = 0.3, kBT /J = 40, and the initial state
is |eg .

VAET processes at an EP due to the unique non-Hermitian

degeneracy in this case. It is important to note that the

presence of the twofold degenerate second-order EP is

crucial, since it is this that allows for the occurrence of four

simultaneous excitations. The phenomenon arises from the

fact that these simultaneous transitions occur between eigen-

states associated with distinct EPs. In general, if we consider

an s-fold degenerate nth-order EP, we would have a total of C1sC1nC1s−1C1n/2 = s(s − 1)n2/2 simultaneous transitions
between two eigenstates associated with distinct EPs, where

N s, n > 1 with N the total number of eigenstates and

Cqp

=

p! q!( p−q )!

are

binomial

coefﬁcients.

For

the

current

work

with s = n = 2 and N = 4, this reduces to 4. When there is no

EP degeneracy at the nth-order EP, for example, if n = N , as

in the case of a fourth-order EP in a two-qubit non-Hermitian

system [30], there would be no simultaneous transitions

between eigenstates associated with distinct EPs, resulting in

no absorption of phonons. However, if there is no degeneracy

and the order of the EP is less than the number of eigenstates,

i.e., 1 < n < N , each of the n coalesced eigenstates can

undergo transitions to the N − n additional eigenstates,

resulting in n simultaneous excitations resonantly induced

by a single phonon, equal to the nth-order nature of the EP.

This implies that for a nondegenerate EP, a larger system

than a dimer would be required in order to achieve the four

simultaneous excitations necessary for the VAET enhance-

ment that is observed in the current work. The signiﬁcance

of the degeneracy of the EP is also evident when considering

that a nondegenerate second-order EP, which allows only two

simultaneous excitations, is anticipated to result in a weaker

enhancement compared to what we see here in the case of the

twofold degenerate second-order EP with four simultaneous

excitations. The resulting excitation process is fundamentally

different from not only the corresponding excitation processes

in the presence of Hermitian degeneracy, but also from the

023149-10

ENHANCEMENT OF VIBRATIONALLY ASSISTED ENERGY …

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

FIG. 9. Dependence of the non-Hermitian VAET features quantiﬁed by Pa(t f ) (a), (c) and by P¯a (b), (d) on the exciton-phonon coupling strength κ. One-phonon processes with ν/J = 16.12 are presented in panels (a) and (b). Two-phonon processes with ν/J = 8.06 are presented in panels (c) and (d). The horizontal dashed line κ/J = 0.3 in panels (a) and (c) correspond to the location of the spectral features at ν/J = 16.12 and ν/J = 8.06 in Fig. 6(a), respec-
tively, while the dashed lines in panels (b) and (d) correspond to the spectral features in Fig. 6(b). We use the parameters α/J = 1 and
/J = 8, for which the twofold degenerate second-order EP is located at γ /J = 1.00778 ∼ 1. Other parameters used are t f = 22.5/J and kBT /J = 40. The initial state is |eg in all calculations.

FIG. 10. Dependence of the non-Hermitian VAET features quantiﬁed by Pa(t f ) (a), (c) and P¯a (b), (d) on the temperature kBT of the vibration. One-phonon processes with ν/J = 16.12 are presented in panels (a) and (b). Two-phonon processes with ν/J = 8.06 are presented in panels (c) and (d). The horizontal dashed line kBT /J = 40 in panels (a) and (c) corresponds to the location of the spectral features at ν/J = 16.12 and ν/J = 8.06 in Fig. 6(a), respectively,
while the dashed line in panels (b) and (d) corresponds to the spectral features in Fig. 6(b). We use the parameters α/J = 1 and /J = 8,
for which the twofold degenerate second-order EP is located at γ /J = 1.00778 ∼ 1. Other parameters used are t f = 22.5/J and κ/J = 0.3. The initial state is |eg in all calculations.

coherent excitation of two atoms of identical frequency by one photon [48].
V. ROBUSTNESS
The enhancement of VAET processes in a non-Hermitian quantum system discussed above is based on two considerations: a ﬁxed dimer-vibration coupling strength (κ/J = 0.3) and a vibrational temperature (kBT /J = 40) that is sufﬁciently high for the vibrational mode to provide the required one or two phonons [1/(eν/kBT − 1) 2] to facilitate energy transfer in the chromophore dimer. In order to investigate the robustness of the observed enhancement with regard to these assumptions, we analyze the respo-
nse of the one- and twophonon VAET signals to variations in the coupling strength κ and temperature kBT .
Figure 9 shows that on gradually increasing κ/J from zero to 0.5 while passing through the value of 0.3 used in the previous section, both the acceptor population [Pa(t f = 22.5/J ) in Fig. 9(a)] and the corresponding average population accumulation during this time period [P¯a in Fig. 9(b)] exhibit an enhancement of the one-phonon VAET process (ν/J = 16.12) near the EP (located at γ /J ∼ 1). We note that the oscillations in γ observed for the one-phonon processes in Fig. 9(a) are more pronounced -
than those for the two-phonon processes in Fig. 9(b). For a given value of cou-

pling strength κ, such as the green dashed line at κ/J = 0.3,
Pa(t f ) exhibits oscillations with increasing peak amplitude on approaching the EP, consistent with the observations in
Figs. 6(a) and 6(b). In comparison, the two-phonon VAET process with ν/J = 8.06 in Fig. 9(c) [Pa(t f )] or Fig. 9(d) [P¯a] shows a smaller enhancement over a broad range of γ /J near the EP at γ /J = 1.00778 ∼ 1. This different response of the two-phonon VAET process to varying κ is consistent with the
behavior seen in Figs. 5 and 6.
Figure 10 summarizes the response of the acceptor population Pa(t f ) and the average population accumulation P¯a when varying the temperature kBT , while keeping the coupling strength ﬁxed at κ/J = 0.3. It is evident that the enhancement of the one-phonon VAET process (ν/J = 16.12) near the EP for both Pa(t f ) [Fig. 10(a)] and P¯a [Fig. 10(b)] can be further ampliﬁed by increasing the temperature. In the case of the two-phonon VAET processes (ν/J = 8.06), both Fig. 10(c) for Pa(t f ), and Fig. 1-
0(d) for P¯a, also clearly demonstrate an enhancement over a broad range of γ /J
values around the EP, but with a signiﬁcantly smaller popu-
lation in the acceptor than that achieved by the one-phonon
VAET. However, while the enhanced VAET processes in
Fig. 10 appear qualitatively similar to those in Fig. 9, the
underlying mechanisms of the enhancement are different. In
Fig. 10 the increased enhancement derives from the avail-
ability of a greater number of phonons available at high

023149-11

ZENG-ZHAO LI AND K. BIRGITTA WHALEY

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

FIG. 11. The acceptor population for the one- and two-phonon
VAET processes presented in (a) and (b), respectively, calculated via
the master equation in Eq. (11) for several values of dissipation rate: γa/J = 0, 0.0001, 0.001, 0.01 where γa = 0 (blue circles, same as γ /J = 1 in Fig. 5) is included for reference. Other parameters used are α/J = 1, /J = 8, kBT /J = 40, κ/J = 0.3, and γ /J = 1. The initial state is |eg in all calculations.

temperatures to facilitate the transfer process, while in Fig. 9 the enhancement derives from the stronger exciton-phonon coupling.
In addition to the loss included in the non-Hermitian Hamiltonian, we have also considered the decohering effect of spontaneous emission at the acceptor. To incorporate this effect, we numerically solve the Lindblad master equation

d = −i(H dt

−

H † ) + γa

σ−(a)

σ+(a)

−

1 2

{σ+(a)

σ−(a),

}

,

(11)

with H deﬁned in Eq. (1), and the Lindblad operator σ−(a) = |g a e|. The resulting total density matrix ρ = /Tr[ ] reduces to Eq. (4) when γa = 0. Figure 11 shows the time evolution of acceptor population Pa(t ) [Eq. (2)] obtained from Eq. (11) for the one- and two-phonon VAET processes
presented in Figs. 11(a) and 11(b), respectively. Comparing with the corresponding non-Hermitian dynamics for γa = 0 (the circles in Fig. 11), it is evident that Pa(t ) is not severely suppressed by spontaneous emission from the ac-
ceptor. This implies that these EP-enhanced VAET processes
in the non-Hermitian quantum system should be observ-
able under a reasonable amount of dissipation, as long as γa J, .

VI. SUMMARY AND CONCLUSIONS
We have investigated vibrationally assisted energy transfer processes in a non-Hermitian quantum system involving a PT -symmetric chromophore dimer weakly coupled to a vibrational mode. We ﬁrst demonstrated the existence of EPs and the non-Hermitian features, such as slow oscillations induced by gain and loss in the PT -symmetry unbroken phase and nonequilibrium steady states in the broken phase, for the excitation energy transfer processes in the absence of coupling to vibrational modes. These EP-
s are twofold degenerate second-order EPs, which has signiﬁcant implications for both the non-Hermitian dynamics and the dimer spectra. Adding the vibrational mode, we found that both one- and two-phonon VAET processes are enhanced by the presence

of the non-Hermiticity. The dynamical and spectral features of these enhanced VAET processes were then analyzed. The enhancement near the EP could be attributed to the maximally favorable phonon absorption occurring at the twofold degenerate second-order non-Hermitian degeneracy point, where four simultaneous transitions between eigenstates associated with distinct EPs are excited by a single phonon. This generates a unique spectral feature that indicates the coalescing of multiple eigenstates in -
addition to the degeneracy of the eigenenergies, providing a new way to probe exceptional points and PT -symmetry phase transitions. The results were found to be robust to variations in the exciton-phonon coupling, to the phonon temperature, and to the presence of spontaneous emission on the acceptor.
Our proposed approach of probing EPs via ﬂuorescencedetected vibrational spectroscopy, using the acceptor population measured through ﬂuorescence detection in trapped-ion experiments instead of the traditional spectral amplitude at a given vibrational frequency, offers several advantages. While both approaches can indicate the amount of phonon emission at that speciﬁc frequency, the acceptor population method provides valuable insights into the coalescence of eigenstates or eigenenergies at the EP-
. By continuously scanning the frequency of the vibration, we have shown that one can effectively map and observe the process of eigenstates or eigenenergies converging at the EP. Additionally, by comparing the population data with the spectral amplitude observed in the traditional spectral experiments, one can establish crucial correlations, shedding light on the population transfer processes occurring at the EP. In particular, rapid increases or decreases in the acceptor population, as monitored-
 by ﬂuorescence measurements, imply that there is a corresponding peak or dip in the spectral amplitude data at the precise vibrational frequency that would be observed by traditional spectroscopy experiments, which are, however, challenging to carry out in this setting. In summary, the advantages of utilizing a ﬂuorescence-detected vibrational spectroscopy to probe exceptional points include its capability to map the coalescence of eigenstates or eigenenergies, its sensitivity to non-Hermitian ef-
fects, and its capacity to offer signiﬁcant insights into the dynamics and behavior of the system in close proximity to the EP.
In contrast to Hermitian degeneracy, where degenerate eigenstates are always linearly independent, it is well known that at exceptional points in a non-Hermitian system, the eigenstates coalesce and become degenerate in a nontrivial manner, as is shown for our dimer system in Fig. 2(d). For a PT -symmetric system, this nontrivial coalescence is associated with breaking of the PT symmetry at the exceptional point of the non-Hermitian system. Furthermore, the eigenstates are also continuously depend-
ent on the nonHermitian parameter combination of J and γ . This results in complex and unique non-Hermitian dynamics within both the PT -symmetric unbroken (0 < γ /J < 1) and broken (γ /J > 1) phases, as depicted in Figs. 3(a), 3(b), and 3(d) and in Figs. 5(a)–5(d) in the presence and absence of the vibrational mode, respectively. A remarkable feature of the dimer system studied in this work is that the two pairs of coalesced eigenstates (i.e., |ψ1 with |ψ3 , and |ψ2 with |ψ4 ) result in four tran-
sition matrix elements that are identical in magnitude

023149-12

ENHANCEMENT OF VIBRATIONALLY ASSISTED ENERGY …

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

at the EP, as shown explicitly in Fig. 7. The values of these matrix elements play a crucial role in the acceptor population for the one-phonon VAET process. This degeneracy of the matrix elements at the EP accounts for the observation that the one-phonon VAET process with ν/J = 16.12 is maximized at the EP, with the acceptor population Pa(t f ) showing a marked increase over the corresponding values in both the unbroken and broken PT symmetry phases (see Fig. 6). This behavior deriving from the c-
oalescence of the eigenvectors is not seen in the γ = 0 Hermitian limit.
Realization of the non-Hermitian VAET phenomena reported here is expected to be possible for trapped ions in the near term, given recent advancements in both Hermitian VAET experiments with trapped ions [42] and the realization of non-Hermitian trapped-ion qubits [21–23]. Implementing the non-Hermitian VAET involves encoding the excitonic states in individual ions and adjusting the Hamiltonian parameters of tunneling coupling, excitonic donor-acceptor interaction, and donor-vibration coupling, by -
coherent laser drives, as well as manipulation of the non-Hermitian gain and loss terms by the heating and cooling techniques outlined in Sec. II. The vibrational frequencies can be controlled and tuned via electromagnetic ﬁelds, as described in Sec. II.
In addition to the trapped-ion platform, it is of interest to explore other physical systems for experimental realization of these ﬁndings of enhanced VAET processes near an EP. For instance, in the case of superconducting circuits, nonHermitian systems can be achieved by using systems of qutrits with postselection [19].

ACKNOWLEDGMENTS
We thank M. Sarovar and L. Ko for helpful discussions in the early stages of this work. Z.Z.L also thanks W. Chen for insightful comments and suggestions. This work has been supported by AFOSR MURI Grant No. FA9550-21-1-0202 and by the U.S. Department of Energy, Ofﬁce of Science, Ofﬁce of Basic Energy Sciences under Award No. DE-SC0023277.

APPENDIX A: PT -SYMMETRIC NON-HERMITIAN DONOR
The non-Hermitian donor in the chromophore dimer is modeled as a two-level system subject to gain and loss, and its Hamiltonian is described by

Hd = −iγ σz(d) + Jσx(d),

(A1)

where σx(d) = |g d e| + |e d g| and σz(d) = |e d e| − |g d g|. It is easy to verify that the non-Hermitian Hamiltonian in
Eq. (A1) respects PT symmetry, i.e., PT Hd PT = Hd with P = σx(d) and T being a complex conjugation. The corresponding eigenenergies and eigenstates are obtained as

λ1,2 = ∓ J2 − γ 2 and

⎛√

⎞

|ϕ˜ 1 = ⎝−

J2−γ 2+iγ
J ⎠,

1

⎛√

⎞

J2−γ 2−iγ

|ϕ˜ 2 = ⎝ J ⎠,

1

(A2)

FIG. 12. Left panel: Real and imaginary parts of the eigenen-
ergies λ j presented in (a) and (b), respectively. Right panel: The ﬁrst elements ϕ j,0 and second elements ϕ j,1 of the eigenstates |ϕ j = (ϕ j,0, ϕ j,1)T ( j = 1, 2) are presented in (c) and (d), respectively.

respectively. The normalized eigenstates are then formally

given

by

|ϕ1

=

|ϕ˜ 1 ||ϕ˜ 1

|

=

(ϕ1,0, ϕ1,1 )T

and

|ϕ2

=

|ϕ˜ 2 ||ϕ˜ 2

|

=

(ϕ2,0, ϕ2,1 )T .

The real and imaginary parts of each eigenenergy are

presented in Figs. 12(a) and 12(b), respectively. It is shown

that eigenenergies λ1,2 in Figs. 12(a) and 12(b) are both real when γ /J < 1 in the unbroken symmetry phase, indicating

both levels of the donor are coherently populated. These

two eigenenergies further coalesce at γ /J = 1, signifying

a second-order EP. When γ /J > 1, i.e., in the symmetry

broken phase, the eigenenergies become purely imaginary,

and correspondingly the population at |e d decreases exponentially while the population at the level |g g increases. Figure 12(c) shows the ﬁrst elements, i.e., ϕ1,0 and ϕ2,0, of normalized eigenstates |ϕ1 and |ϕ2 , respectively, with real

and imaginary parts presented separately. Figure 12(d) shows

the second elements, i.e., ϕ1,1 and ϕ2,1, of the normalized

eigenstates. It is evident that the eigenstates of the non-

Hermitian donor coalesce at the EP of the second order, i.e.,

when γ /J = 1.

APPENDIX B: RELATION BETWEEN DONOR-ACCEPTOR
ENERGY LEVELS AND CONDITIONS FOR UPHILL
ENERGY TRANSFER
Figure 13 shows the relative energetics of the uncoupled donor and acceptor chromophores. Here dashed lines represent the energy levels of the donor in the Hermitian limit, while solid lines depict the energy levels of the donor in the PT -symmetric regime. This ﬁgure illustrates the primary requirement for uphill transfer, which is − J > α/2, arising from the fact that t√he energy barrier of 2( −√J ) between the states (|e + |g )/ 2 ⊗ |g and (|e − |g )/ 2 ⊗ |e should surpass the coherent coupling-
 strength α that links them.
We illustrate the effect of a ﬁnite on the energy spectrum by analyzing the eigenenergies for the decoupled dimer, i.e., α = 0, resulting in eigenenergies λ1,α=0 = −λ2,α=0 = −| J2 − γ 2 − | and λ3,α=0 = −λ4,α=0 = −| J2 − γ 2 +
|. These eigenenergies are just a sum of monomer energies: ± J2 − γ 2 (donor) and ± (acceptor).

023149-13

ZENG-ZHAO LI AND K. BIRGITTA WHALEY

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

FIG. 13. Left panel: The energy levels of the donor in the Hermitian limit (dashed lines) and in PT -symmetric regime J > γ (solid lines), with the energy gap 2J and 2 J2 − γ 2, respectively. The eigenstates |ϕ1 = |ϕ˜ 1 /||ϕ˜ 1 | and |ϕ2 = |ϕ˜ 2 /||ϕ˜ 2 | with ϕ˜ 1(2) given in Eq. (A2). Right panel: The energy levels of the acceptor with energy gap 2 . Note that the energy levels of decoupled donor and acceptor are also presented in Fig. 1(a), as gray lines. The parameter values used to generate t-
his ﬁgure are /J = 8 and α = κ = 0.
APPENDIX C: NON-HERMITIAN DIMER ENERGY LEVELS AND EP CHARACTERIZATION FOR OTHER VALUES OF /J
For completeness, we present here the energetics and EP analysis for two other values of the parameter /J, to compare with the case of /J = 8 that favors an uphill transfer for demonstrating the VAET phenomenon discussed in the main text.
Figure 14 presents the real and imaginary components of the eigenenergies λ j as a function of γ and α, for /J = 2 [Figs. 14(a) and 14(b)] and for /J = 0 [Figs. 14(c) and 14(d)]. For the weakly uphill /J = 2 case in Figs. 14(a) and 14(b), the energy spectrum exhibits a reduced separation between λ1, λ3 and λ2, λ4, similar to the /J = 8 case in Figs. 2(a) and 2(b). The non-Hermitian energetics for both of these values host second-order exceptional points.
In contrast, for the case of /J = 0, Figs. 14(c) and 14(d) shows instead the presence of higher-order exceptional points. Physically, when = 0, the two levels of the acceptor

FIG. 14. Real and imaginary components of the eigenenergies λ j for = 2 in panels (a) and (b) and for /J = 0 in panels (c) and (d).
become degenerate, resulting in a negative energy gap for a downhill excitation transfer from the donor to the acceptor. This implies that the energy transfer in the chromophore dimer does not necessarily require assistance from vibrations in this case. The eigenenergies for this case are obtained from Eqs. (6) and (7) as λ1, →0 = −λ2, →0 = − (α − J )2 − γ 2 and λ3, →0 = −λ4, →0 = − (α + J )2 − γ 2, from which it is clear that for the value of = 0, we have a fourth-order EP at γ /J = 1 when α = 0,-
 as well as second- and third-order EPs as shown explicitly in Figs. 14(a) and 14(b). A ﬁnite value of , which is associated with the energy splitting of the acceptor chromophore, is thus critical to lift the degeneracy of the non-Hermitian dimer.
Finally, we provide examples of eigenenergies λ j of the non-Hermitian dimer to support the understanding of the results presented in the main text. We consider the Hermitian case γ = 0 as well as values of γ near the EP, speciﬁcally γ = 0.8, 0.9, 1 or 1.02, 1.04, 1.06, 1.08 for the PT -symmetry unbroken or broken phases, respectively, with J = 1 as the unit. Other parameters used are α = 1 and = 8, consistent with Figs. 2(a) and 2(b). The results are presented in Table I. We note that the eigenen-
ergy in the unbroken phase regime is always real, while the transition frequency λ13 or λ42 in the broken phase becomes purely imaginary, corresponding to the nonequilibrium steady-state reported in the main text.

TABLE I. Examples of non-Hermiitan dimer eigenenergies λ j for several values of γ with α = 1, = 8, and J = 1.

γ

{λ1, λ2, λ3, λ4}

0

{−7.062, 7.062, −9.062, 9.062}

0.8

{−7.453, 7.453, −8.67, 8.67}

0.9

{−7.611, 7.611, −8.511, 8.511}

1.0

{−7.937, 7.937, −8.185, 8.185}

1.02

{−8.061 + 0.156i, 8.061 − 0.156i, −8.061 − 0.156ii, 8.061 + 0.156i}

1.04

{−8.061 + 0.255i, 8.061 − 0.255i, −8.061 − 0.255i, 8.061 + 0.255i}

1.06

{−8.061 + 0.326i, 8.061 − 0.326i, −8.061 − 0.326i, 8.061 + 0.326i}

1.08

{−8.061 + 0.385i, 8.061 − 0.385i, −8.061 − 0.385i, 8.061 + 0.385i}

[1] C. M. Bender, PT -Symmetry in Quantum and Classical Physics (World Scientiﬁc, Singapore, 2019).

[2] R. El-Ganainy, K. G. Makris, M. Khajavikhan, Z. H. Musslimani, S. Rotter, and D. N. Christodoulides,

023149-14

ENHANCEMENT OF VIBRATIONALLY ASSISTED ENERGY …

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

Non-Hermitian physics and PT symmetry, Nat. Phys. 14, 11 (2018). [3] S¸ . K. Özdemir, S. Rotter, F. Nori, and L. Yang, Parity–time symmetry and exceptional points in photonics, Nat. Mater. 18, 783 (2019). [4] H. Zhao and L. Feng, Parity–time symmetric photonics, Nat. Sci. Rev. 5, 183 (2018). [5] Y. Ashida, Z. Gong, and M. Ueda, Non-Hermitian physics, Adv. Phys. 69, 249 (2020). [6] C. Dembowski, H. D. Gräf, H. L. Harney, A. Heine, W. D. Heiss, H. Rehfeld, and A. Richter, Experimental observation of-
 the topological structure of exceptional points, Phys. Rev. Lett. 86, 787 (2001). [7] C. E. Rüter, K. G. Makris, R. El-Ganainy, D. N. Christodoulides, M. Segev, and D. Kip, Observation of parity–time symmetry in optics, Nat. Phys. 6, 192 (2010). [8] H. Hodaei, Mohammad-Ali Miri, M. Heinrich, D. N. Christodoulides, and M. Khajavikhan, Parity-time-symmetric microring lasers, Science 346, 975 (2014). [9] J. Wiersig, Enhancing the sensitivity of frequency and energy splitting detection by using excep-
tional points: Application to microcavity sensors for single-particle detection, Phys. Rev. Lett. 112, 203901 (2014). [10] W. Chen, S¸ . K. Özdemir, G. Zhao, J. Wiersig, and L. Yang, Exceptional points enhance sensing in an optical microcavity, Nature (London) 548, 192 (2017). [11] H. Hodaei, A. U. Hassan, S. Wittek, H. Garcia-Gracia, R. El-Ganainy, D. N. Christodoulides, and M. Khajavikhan, Enhanced sensitivity at higher-order exceptional points, Nature (London) 548, 187 (2017). [12] M. Brandstet-
ter, M. Liertzer, C. Deutsch, P. Klang, J. Schöberl, H. E. Türeci, G. Strasser, K. Unterrainer, and S. Rotter, Reversing the pump dependence of a laser at an exceptional point, Nat. Commun. 5, 4034 (2014). [13] B. Peng, S. K. Özdemira, M. Liertzer, W. Chen, J. Kramer, H. Yílmaz, J. Wiersig, S. Rotter, and L. Yang, Chiral modes and directional lasing at exceptional points, Proc. Natl. Acad. Sci. USA 113, 6845 (2016). [14] Z. J. Wong, Y. L. Xu, J. Kim, K. O’Brien, Y. Wang, L. Feng, and X. Zhang, Las-
ing and anti-lasing in a single cavity, Nat. Photon. 10, 796 (2016). [15] H. Xu, D. Mason, L. Jiang, and J. G. E. Harris, Topological energy transfer in an optomechanical system with exceptional points, Nature (London) 537, 80 (2016). [16] J. Doppler, A. A. Mailybaev, J. Böhm, U. Kuhl, A. Girschik, F. DopplerLibisch, T. J. Milburn, P. Rabl, N. Moiseyev, and S. Rotter, Dynamically encircling an exceptional point for asymmetric mode switching, Nature (London) 537, 76 (2016). [17] X. L. Zhang, S. Wan-
g, B. Hou, and C. T. Chan, Dynamically encircling exceptional points: In situ control of encircling loops and the role of the starting point, Phys. Rev. X 8, 021066 (2018). [18] Y. Wu, W. Liu, J. Geng, X. Song, X. Ye, C. K. Duan, X. Rong, and J. Du, Observation of parity-time symmetry breaking in a single-spin system, Science 364, 878 (2019). [19] M. Naghiloo, M. Abbasi, Y. N. Joglekar, and K. W. Murch, Quantum state tomography across the exceptional point in a single dissipative qubit, Nat. Phys.-
 15, 1232 (2019). [20] S. Rotter, Exceptional quantum behaviour, Nat. Phys. 15, 1214 (2019).

[21] L. Ding, K. Shi, Q. Zhang, D. Shen, X. Zhang, and W. Zhang, Experimental determination of PT -symmetric exceptional points in a single trapped ion, Phys. Rev. Lett. 126, 083604 (2021).
[22] W. C. Wang, Y. L. Zhou, H. L. Zhang, J. Zhang, M. C. Zhang, Y. Xie, C. W. Wu, T. Chen, B. Q. Ou, W. Wu et al., Observation of PT -symmetric quantum coherence in a single-ion system, Phys. Rev. A 103, L020201 (2021).
[23] A. Quinn, J. Metzner, J. E. Muldoon, I. D. Moore, S. Brudner, S. Das, D. T. C. Allcock, and Y. N. Joglekar, Observing superquantum correlations across the exceptional point in a single, two-level trapped ion, arXiv:2304.12413.
[24] J. Li, A. K. Harter, J. Liu, L. de Melo, Y. N. Joglekar, and L. Luo, Observation of parity-time symmetry breaking transitions in a dissipative Floquet system of ultracold atoms, Nat. Commun. 10, 855 (2019).
[25] A. Gautam, K. Dorai, and Arvind, Experimental demonstration of the dynamics of quantum coherence evolving under a PT-symmetric Hamiltonian on an NMR quantum processor, Quantum Inf. Proc. 21, 329 (2022).
[26] W. Chen, M. Abbasi, Y. N. Joglekar, and K. W. Murch, Quantum jumps in the non-Hermitian dynamics of a superconducting qubit, Phys. Rev. Lett. 127, 140504 (2021).
[27] J. Huber, P. Kirton, S. Rotter, and P. Rabl, Emergence of PTsymmetry breaking in open quantum systems, SciPost Phys. 9, 052 (2020).
[28] M. Abbasi, W. Chen, M. Naghiloo, Y. N. Joglekar, and K. W. Murch, Topological quantum state control through Floquet exceptional-point proximity, Phys. Rev. Lett. 128, 160401 (2022).
[29] P. Lewalle and K. B. Whaley, Pontryagin-optimal control of a non-Hermitian qubit, Phys. Rev. A 107, 022216 (2023).
[30] Z. Z. Li, W. Chen, M. Abbasi, K. Murch, and K. B. Whaley, Speeding up entanglement generation by proximity to higher-order exceptional points, Phys. Rev. Lett. 131, 100202 (2023).
[31] B. Zhu, R. Lü, and S. Chen, PT symmetry in the non-Hermitian Su-Schrieffer-Heeger model with complex boundary potentials, Phys. Rev. A 89, 062102 (2014).
[32] S. Lieu, Topological phases in the non-Hermitian Su-SchriefferHeeger model, Phys. Rev. B 97, 045106 (2018).
[33] Z. Z. Li, J. Atalaya, and K. B. Whaley, Topological quantum interference in a pumped Su-Schrieffer-Heeger lattice, Phys. Rev. A 105, 052418 (2022).
[34] Z. Gong, Y. Ashida, K. Kawabata, K. Takasan, S. Higashikawa, and M. Ueda, Topological phases of non-Hermitian systems, Phys. Rev. X 8, 031079 (2018).
[35] S. Yao and Z. Wang, Edge states and topological invariants of non-Hermitian systems, Phys. Rev. Lett. 121, 086803 (2018).
[36] K. Kawabata, K. Shiozaki, M. Ueda, and M. Sato, Symmetry and topology in non-Hermitian physics, Phys. Rev. X 9, 041015 (2019).
[37] E. J. Bergholtz, J. C. Budich, and F. K. Kunst, Exceptional topology of non-Hermitian systems, Rev. Mod. Phys. 93, 015005 (2021).
[38] J. A. Cina and G. R. Fleming, Vibrational coherence transfer and trapping as sources for long-lived quantum beats in polarized emission from energy transfer complexes, J. Phys. Chem. A 108, 11196 (2004).

023149-15

ZENG-ZHAO LI AND K. BIRGITTA WHALEY

PHYSICAL REVIEW RESEARCH 6, 023149 (2024)

[39] N. Christensson, H. F. Kauffmann, T. Pullerits, and T. Mancˇal, Origin of long-lived coherences in light-harvesting complexes, J. Phys. Chem. B 116, 7449 (2012).
[40] M. B. Plenio, J. Almeida, and S. F. Huelga, Origin of longlived oscillations in 2D-spectra of a quantum vibronic model: Electronic versus vibrational coherence, J. Chem. Phys. 139, 235102 (2013).
[41] A. Potocˇnik, A. Bargerbos, F. A. Y. N. Schröder, S. A. Khan, M. C. Collodo, S. Gasparinetti, Y. Salathé, C. Creatore, C. Eichler, H. E. Türeci et al., Studying light-harvesting models with superconducting circuits, Nat. Commun. 9, 904 (2018).
[42] D. J. Gorman, B. Hemmerling, E. Megidish, S. A. Moeller, P. Schindler, M. Sarovar, and H. Haeffner, Engineering vibrationally assisted energy transfer in a trapped-ion quantum simulator, Phys. Rev. X 8, 011038 (2018).

[43] Z. Z. Li, L. Ko, Z. Yang, M. Sarovar, and K. B. Whaley, Interplay of vibration- and environment-assisted energy transfer, New J. Phys. 24, 033032 (2022).
[44] Z. Z. Li, L. Ko, Z. Yang, M. Sarovar, and K. B. Whaley, Unraveling excitation energy transfer assisted by collective behaviors of vibrations, New J. Phys. 23, 073012 (2021).
[45] D. Leibfried, R. Blatt, C. Monroe, and D. Wineland, Quantum dynamics of single trapped ions, Rev. Mod. Phys. 75, 281 (2003).
[46] H. Häffner, C. F. Roos, and R. Blatt, Quantum computing with trapped ions, Phys. Rep. 469, 155 (2008).
[47] C. D. Bruzewicz, J. Chiaverini, R. McConnell, and J. M. Sage, Trapped-ion quantum computing: Progress and challenges, Appl. Phys. Rev. 6, 021314 (2019).
[48] L. Garziano, V. Macrì, R. Stassi, O. D. Stefano, F. Nori, and S. Savasta, One photon can simultaneously excite two or more atoms, Phys. Rev. Lett. 117, 043601 (2016).

023149-16

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:04.647Z
- **Text Length:** 86035 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
