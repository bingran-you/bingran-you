# PDF Document: (QSync - 2024 PRL) Exploring Quantum Synchronization with a Composite Two-Qubit Oscillator.pdf

**File Path:** (QSync - 2024 PRL) Exploring Quantum Synchronization with a Composite Two-Qubit Oscillator.pdf

**Processed Date:** 2026-02-10T18:15:23.985Z

**File Size:** 3917.13 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 362

**Title:** (QSync - 2024 PRL) Exploring Quantum Synchronization with a Composite Two-Qubit Oscillator

**Collection:** Lattice > QSync

---

## Extracted Text Content

Exploring Quantum Synchronization with a Composite Two-Qubit Oscillator
Gaurav M. Vaidya,1, ∗ Arvind Mamgain,2 Samarth Hawaldar,2 Walter Hahn,3, 4, 5 Raphael Kaubruegger,3, 4 Baladitya Suri,2 and Athreya Shankar3, 4, 2, †
1Department of Physics, Indian Institute of Technology Madras, Chennai, India, 600036. 2Department of Instrumentation and Applied Physics, Indian Institute of Science, Bangalore, India, 560012.
3Institute for Theoretical Physics, University of Innsbruck, 6020 Innsbruck, Austria 4Institute for Quantum Optics and Quantum Information of the Austrian Academy of Sciences, 6020 Innsbruck, Austria
5Fraunhofer Institute for Applied Solid State Physics IAF, Tullastr. 72, 79108 Freiburg, Germany (Dated: March 4, 2024)
Synchronization has recently been explored deep in the quantum regime with elementary fewlevel quantum oscillators such as qudits and weakly pumped quantum Van der Pol oscillators. To engineer more complex quantum synchronizing systems, it is practically relevant to study composite oscillators built up from basic quantum units that are commonly available and offer high controllability. Here, we consider a minimal model for a composite oscillator consisting of two interacting qubits coupled to sepa-
rate baths, and show that this system exhibits a wide variety of synchronizing behaviors. We study the phase response of the constituent qubits as well as the system as a whole, when one of the qubits is weakly driven. We consider the thermal baths to have positive as well as effective negative temperatures, and discover effects that occur only when the temperatures of the baths for the two qubits are of opposite signs. We propose and analyze a circuit quantum electrodynamics implementation of thi-
s model, which exploits recent advances in dissipation engineering to realize effective negative temperature baths. Our work demonstrates the potential for assembling complex quantum synchronizing systems from basic building units, which is of pragmatic importance for advancing the field of quantum synchronization.

arXiv:2306.04205v3 [quant-ph] 1 Mar 2024

I. INTRODUCTION
Synchronization is at the heart of a variety of phenomena in nature and finds important practical applications, e.g. in the working of pacemakers and lasers [1]. At its core, synchronization is the tendency of a self-powered, or self-sustained oscillator (SSO) to lock to an external phase reference. Quantum synchronization explores how the synchronizing tendency of SSOs is affected by the strong quantum mechanical effects that arise when the oscillators are scaled down in size and energy [2–20].
A quantum SSO can be realized as the low occupation limit of a classical SSO or as a finite-dimensional system where only a few states are available even in principle. An example for the former is a weakly pumped Van der Pol oscillator [2–5]. On the other hand, a qudit with gain and damping serves as a realization of a finite dimensional quantum SSO [6–9].
An important class of problems in quantum synchronization research is to understand the synchronization of model quantum SSOs to an external drive or the mutual synchronization of two (or more) SSOs when they are coupled. Recent work has uncovered genuine quantum features in the response of quantum SSOs, such as entanglement [4, 6], and quantum interference effects that lead to synchronization blockade [10–12]. Furthermore, quantum synchronization is beginning to gain experimental relevance with t-
he demonstration of elementary synchronizing systems in a vapor of Rb atoms [13], in nuclear
∗ gaurav.vaidya-1@colorado.edu † athreyas@iisc.ac.in

spin systems [14], as well as by a digital simulation on a quantum computer [15].
Going beyond paradigmatic systems, theoretical studies have discovered novel quantum synchronization phenomena in a variety of systems with structured energy levels and exotic gain and loss channels [9, 21]. However, it remains unclear how such systems can be realized in practice. Therefore, complementary efforts are needed that explore how a variety of quantum synchronizing systems can be realized in the lab. With current technology, a promising and scalable approach to achieve this is to conside-
r the assembly of a quantum many-body oscillator— which we refer to as a composite oscillator— using elementary building blocks that are available in today’s experiments, such as qubits. Such a ‘bottom-up’ approach provides a path to assemble quantum synchronizing systems with desired features by tuning the properties of the constituent building blocks.
In this paper, we study a minimal model of a composite many-body quantum SSO made from two interacting qubits. The qubits are each coupled to separate thermal baths that provide local gain and damping to power the SSO. We study the response of this system to a weak synchronizing drive applied to one of the qubits. In addition to characterizing the synchronization of the composite system using global metrics, complementary insights can also be gained by studying local observables that capture the r-
esponse of the individual constituents to the external drive. Besides being easier to measure, local observables also provide a window into how system parameters affect the internal working of the composite system and can reveal interesting features in the response of individual constituents that may not be apparent in global syn-

2

chronization measures, as we will see below. Accordingly, we first study how the phase response of the individual qubits, i.e. their tendency to develop a phase relative to the external drive, is modified by virtue of their mutual interaction. Remarkably, we find that under certain conditions, the interplay of gain, damping and interaction can cause the local phase response to completely vanish, despite the presence of the drive. Next, we explore the tendency of the composite oscillator, as a whol-
e, to synchronize to the drive, using a recently introduced generalized measure of quantum synchronization [16], which quantifies the overall buildup of coherence in the system because of the drive. We find that based on the choice of gain and damping rates, the qubit-qubit interaction can either strongly enhance or suppress the coherence buildup compared to that of a single qubit, thus leading to a diverse range of synchronizing behaviors that can be controlled by the system parameters. Finally, -
in line with our motivation to study experimentally feasible systems, we propose a realization of our model on a circuit quantum electrodynamics (QED) platform, using transmons and microwave resonators. We perform a detailed master equation simulation of our proposed implementation and show that it operates as a two-qubit oscillator under experimentally feasible parameters. Importantly, our implementation is scalable, and can be extended to realize many-body quantum SSOs made of more than two qubi-
ts.
Although a model of two interacting qubits with local thermal baths has been studied before in other contexts [22–25], our work demonstrates a hitherto unexplored aspect of this system, namely, its utility as a tunable testbed to explore quantum synchronization phenomena in composite quantum systems. Accordingly, our study is distinctive in the kind of metrics we consider, the parameter regimes we study, as well as the experimental scheme we propose to access these parameter regimes. First, our in-
terest is not in the intrinsic steady-state of the undriven two-qubit system per se, but instead, we focus on the emergence of coherence in this system when a weak external drive is applied to one of the qubits. Consequently, we study metrics quantifying phase response and quantum synchronization, that are non-zero only when an external drive is applied. Second, in order to explore the full range of possible effects, we allow for the the local baths to have positive (damping dominated) as well as -
negative (gain dominated) temperatures. Remarkably, we uncover effects that only arise when the two baths are inverted, i.e. when their temperatures have opposite signs. Accordingly, a third distinguishing aspect of our work is the proposed implementation, which exploits recent demonstrations of dissipation engineering with transmons [26, 27] in order to realize effective negative temperature baths.
This paper is organized as follows. In Section II, we introduce our two-qubit oscillator model and discuss the metrics we use to quantify the phase response of individual qubits and the synchronization of the composite

(a) (b)

FIG. 1. The composite two-qubit oscillator. (a) Schematic showing two interacting qubits, with each qubit coupled to a thermal bath. Additionally, qubit A is weakly and coherently driven with strength ϵ. (b) Energy level diagram showing the gain and damping channels, and the exchange interaction of the qubits. The right panel illustrates the flip-flop of excitations under the exchange interaction. The white (colored) circles represent the ground (excited) states of the two qubits.

system. We use these metrics to study the two-qubit oscillator as the system parameters are varied in Section III. In Section IV, we propose and simulate a circuit QED realization of the two-qubit oscillator. We conclude with a summary and outlook in Section V. Relevant additional details and extensions are provided in the form of Appendices. In particular, our model can be generalized to higher dimensional spins, which we illustrate with the example of a two-qutrit oscillator in Appendix D.

II. MODEL AND METHODS
In this section, we first describe the system under study. We then discuss the symmetry properties of the undriven steady state, and subsequently introduce the metrics we use to quantify the phase response of individual qubits and the synchronization of the composite oscillator.

A. Model

The model we consider is shown in Fig. 1. We consider two qubits A and B, each with ground (excited) states |↓⟩ (|↑⟩) and with respective natural frequencies ωA, ωB, interacting via an exchange interaction with strength g. The Hamiltonian describing this system is (ℏ = 1)

Hˆ 0

=

ωASˆAz

+

ωB SˆBz

+

g 2

SˆA+SˆB− + SˆA−SˆB+ .

(1)

Here Sˆjz = (|↑⟩j ⟨↑| − |↓⟩j ⟨↓|)/2 for j = A, B and Sˆj± are raising and lowering operators defined as Sˆj+ = |↑⟩j ⟨↓| and Sˆj− = |↓⟩j ⟨↑|. Such a model can be realized on a

3

number of platforms. For example, in the case of super-
conducting quantum circuits, a capacitive coupling be-
tween two transmon qubits gives rise to an interaction of the form Hˆint ∝ gSˆAx SˆBx , where Sˆjx = (Sˆj+ + Sˆj−)/2. When g, |∆q| ≪ ωA, ωB, where ∆q = ωB − ωA is the relative qubit detuning, a rotating-wave approximation can be used to discard the SˆA+SˆB+, SˆA−SˆB− terms to arrive at Eq. (1).
Furthermore, each qubit is weakly coupled to a ther-
mal bath which leads to loss (gain) of excitations at rates
γj (wj) with j = A, B. In particular, γj > wj (γj < wj) corresponds to a positive (negative) temperature bath
dominated by loss (gain). These two regimes occur on
either side of an infinite temperature bath correspond-
ing to wj = γj. In order to describe the system using a Markovian master equation, the qubit-bath couplings
have to be weak compared to ωA, ωB [25]. Additionally, if the qubit-qubit coupling g ≪ ωA, ωB as considered here, the system can be accurately described using a local mas-
ter equation [24, 25] given by

dρˆ dt

=

−i

Hˆ0, ρˆ

+

√ D[ wj

Sˆj+]ρˆ

+

√ D[ γj

Sˆj−

]ρˆ,

(2)

j=A,B

j=A,B

where

D[Oˆ]ρˆ

=

OˆρˆOˆ†

−

1 2

Oˆ†Oˆρˆ−

1 2

ρˆOˆ†

Oˆ

is

the

Lindblad

dissipator.

We note that previous studies have considered the mu-

tual synchronization of two quantum units when they are

weakly coupled, i.e., when g is weak compared to the gain

and damping rates of the individual units [6]. In contrast,

here we consider the two-qubit system as a single com-

posite oscillator whose intrinsic dynamics includes the

qubit-qubit coupling, which is not restricted to be weak

compared to the gain wA, wB and damping rates γA, γB

of each qubit. The Lindblad master equation (2) remains

valid even when g ≳ wj, γj, provided all of these parameters are very small compared to ωA, ωB [24, 25].
We study the response of this system to a weak syn-

chronizing drive with frequency ωd and strength ϵ that
is applied to qubit A. When the drive detuning ∆d = ωA − ωd ≪ ωA, the driving can be described under a

rotating-wave approximation by the Hamiltonian

Hˆ d

ϵ =
2

SˆA+e−iωdt + SˆA−eiωdt

.

(3)

To remove the time dependence, we transform the system into a frame rotating at ωd, where the total Hamiltonian is given by

Hˆtot = ∆dSˆAz + (∆d + ∆q) SˆBz

g +
2

SˆA+SˆB− + SˆA−SˆB+

ϵ +
2

SˆA+ + SˆA−

. (4)

The total master equation in the drive frame is given by Eq. (2), with Hˆ0 replaced by Hˆtot. For discussing the
results in Sec. III, we introduce characteristic frequencies

Γj = γj + wj, j = A, B,

(5)

that define the total relaxation rate of a single qubit.
At a formal, mathematical level, the model described
above can also apply to a two-qudit oscillator wherein
each spin has size S > 1/2. In this general case, the
levels of each spin can be labeled using the eigenstates |S, m⟩ of the operator Sˆz, which satisfy Sˆz |S, m⟩ = m |S, m⟩. The operators Sˆ± are raising and lowering operators that transform the states according to Sˆ± |S, m⟩ = (S ∓ m)(S ± m + 1) |S, m ± 1⟩. In Appendix D, we briefly study the case when A and B are
qutrits, i.e. spins with S = 1. We note, however, that
the realization of such a system may be challenging and,
furthermore, the specific form of the exchange interaction
between qudits depends on the implementation.

B. Symmetry properties of the undriven steady state

In order to understand the sense in which quantum

synchronization occurs in the proposed model, it is use-

ful to understand the symmetry properties of the mas-

ter equation and the steady state of this system in the

absence of the external drive. Representing the mas-

ter equation (2) compactly as ∂tρˆ = L0ρˆ, where L0 is the Liouvillian superoperator for the system, we ob-

serve that L0 has a global U (1) symmetry, i.e. it is invariant under the transformation L0 → Uˆ (ϕ)L0Uˆ †(ϕ), where Uˆ (ϕ) = eiϕ(SˆAz +SˆBz ). Consequently the steady state

ρˆu satisfying L0ρˆu = 0 also enjoys this symmetry, i.e. Uˆ (ϕ)ρˆuUˆ †(ϕ) = ρˆu.

Writing the spectral decomposition ρˆu =

4 j=1

λj

|λj

⟩

⟨λj |,

the

global

U (1)

symmetry

im-

plies that each |λj⟩ is an eigenstate of the operator

Sˆz = SˆAz + SˆBz . Accordingly, |λ1⟩ = |↑↑⟩ with eigenvalue Sz = 1, |λ4⟩ = |↓↓⟩ (Sz = −1) and |λ2⟩ , |λ3⟩ are orthog-

onal linear combinations of |↑↓⟩ and |↓↑⟩ (Sz = 0). Their

exact forms depend on the system parameters. Hence,

ρˆu does not feature coherences between subspaces corresponding to different Sz values, implying the absence

of a preferred phase [14, 28] between these subspaces.

Synchronization in this system thus corresponds to the

development of a preferred relative phase between these

subspaces under the influence of an external, global U (1)

symmetry-breaking perturbation. Indeed, it is evident

from the form of the drive in Eq. (4) that, to leading

order in ϵ, it establishes coherences, i.e. phase relations,

between subspaces with ∆Sz = ±1.

C. Phase response metric for individual qubits
In Sec. III A, we study the phase response of the individual qubits constituting the system when a weak external drive is applied to one of them. The metric we use to quantify the phase response is the off-diagonal element, or coherence, of the steady-state reduced density matrix

4

of each qubit. The choice of this metric is based on the phase space representation of the individual qubits using the Husimi Q function, which we define here with respect to the SO(3) coherent states 1. For a general spin-S system, the Q function is defined as the overlap

QS,ρˆ(θ, φ) = ⟨θ, φ| ρˆ|θ, φ⟩ .

(6)

Here, |θ, φ⟩ are the SO(3) coherent states for a spinS system, which are defined via rotations of the state |S, m = S⟩ as |θ, φ⟩ = eiφSˆz eiθSˆy |S, m = S⟩ [30]. The angles θ, φ respectively correspond to the polar and azimuthal angles on a generalized Bloch sphere. The Q function therefore serves as a tool to visualize the state of the system on the surface of this sphere.
For qubits (S = 1/2), the Q function can be expressed as

Q

1 2

,ρˆ(θ,

φ)

=

1 + ⟨Sˆz⟩ cos θ + Re[⟨Sˆ+⟩e−iφ] sin θ. 2

(7)

The external drive introduces a nontrivial azimuthal

phase distribution by establishing coherences in the sys-

tem such that ⟨Sˆ+⟩ ̸= 0. This leads to a marginal dis-

tribution P (φ) = (1/2π)

π 0

dθ

sin

θ

Q

1 2

,ρˆ(θ,

φ)

for

φ

that

deviates from a uniform distribution. In Sec. III A, we

visualize this deviation by plotting the quantity δP (φ)

defined as

δP (φ) = P (φ) − 1 = 1 Re[⟨Sˆ+⟩e−iφ].

(8)

2π 4

Therefore, the phase response of individual qubits can be studied by probing the magnitude of the off-diagonal element of their reduced density matrices.
For a general spin-S system, the Q function can be decomposed into a sum of expectation values of spherical tensors, which is useful in studying the phase response of higher dimensional spin systems. We discuss this in more detail in Appendix A.

D. Synchronization measure for composite oscillator
In Sec. III B, we study the synchronization of the composite two-qubit oscillator, as a whole, when one of the qubits is weakly driven. For this study, we use an information theoretic measure of synchronization proposed in Ref. [16]. This metric is system agnostic, which makes it an attractive choice to study synchronisation of composite systems, where quasiprobability distributions may be inconvenient to compute as well as interpret.

The central idea underlying this metric is to quantify
synchronization as the deviation of the steady state ρˆ in
the presence of the external drive from an appropriate
limit cycle state ρˆlim (described below), measured using a suitable measure of distance D. In particular, when ρˆlim is full rank, the distance D is taken as the relative entropy

D ≡ S(ρˆ||ρˆlim) = Tr [ρˆlog(ρˆ) − ρˆlog(ρˆlim)] . (9)

The limit cycle state ρˆlim is the closest state to ρˆ which does not have the coherences induced by the drive. In general, the limit cycle state ρˆlim is not just the steady state of the system when the drive is turned off. The reason is that, while the drive generally induces changes in populations as well as coherences, a synchronization metric must be sensitive only to the buildup of coherences. This subtlety is accounted for by minimizing D over an appropriate set, Σ, of ‘candidate’ limit cyc-
le states to obtain the synchronization measure, i.e.

Ω(ρˆ) = min D(ρˆ, ρˆlim),
ρˆlim ∈Σ

(10)

where the measure Ω(ρˆ) is called the relative entropy of synchronization.
The set Σ of candidate limit cycle states is chosen according to the system being studied. For our system, the global U (1) symmetry discussed in Sec. II B means that a natural choice of Σ is the set of states that are diagonal in the eigenbasis {|λj⟩} of the steady state ρˆu of the undriven oscillator, since synchronization to the external drive occurs via the buildup of coherences between the different bases {|λj⟩}. For the particular case of such diagonal limit cycle states, the minimization in-
 Eq. (10) can be performed analytically and Ω(ρˆ) reduces to [16]

Ω(ρˆ) = S(ρˆdiag) − S(ρˆ).

(11)

Here, S(ρˆ) = Tr [−ρˆlog(ρˆ)] is the von Neumann entropy and ρˆdiag is a state diagonal in {|λj⟩}, obtained by simply deleting all the off-diagonal elements of ρˆ expressed in this basis.
We note that, for a system of the kind considered here, Ref. [16] prescribes to choose Σ as a set of so-called ‘partially-coherent’ candidate limit cycle states. In Appendix B, we show that such a choice leads to identical results as the ones we have obtained using diagonal limit cycle states, and provide an intuitive explanation for why this is the case.

E. Qualitative expectations

1 We have omitted a normalization factor [7] for simplicity. More generally, the Q function for a spin-S system can also be defined with respect to SU (2S + 1) coherent states [12, 21, 29], but it is not required for our discussion here.

Before turning to the results, we provide some intuition for the behavior of the metrics introduced in the previous two subsections for different regimes of the qubit-qubit coupling. In the following qualitative discussion, we assume that ∆d ≈ ∆q ≈ 0.

5
of the system parameters on their tendency to develop a phase relative to the drive. Subsequently, in Sec. III B, we consider the two-qubit oscillator as a composite oscillator and study its collective response to the drive. An extension of this study to a two-qutrit oscillator is discussed in Appendix D. In the following, we take the total relaxation rate [see Eq. (5)] of each qubit to be the same, i.e. ΓA = ΓB = Γ, and report frequency values (wj, γj, g, ∆d, ∆q, ϵ, j = A, B) in units of Γ, so th-
at γj = 1 − wj when expressed in these units.

A. Phase response of individual qubits

FIG. 2. Effect of the weak drive in the dressed state representation.

For g/Γ ≪ 1 (ΓA ∼ ΓB ∼ Γ), the response of the oscillator to the drive is primarily just the response of qubit A, and the qubit-qubit coupling only leads to corrections of order g/Γ or higher. On the other hand, when g/Γ ≫ 1, the oscillator can be analyzed in the basis formed by the eigenstates of the undrived system Hamiltonian 1. These are the usual dressed state√s, given by |D⟩ = |↓↓⟩, |U ⟩ √= |↑↑⟩, |T ⟩ = (|↑↓⟩ + |↓↑⟩)/ 2 and |S⟩ = (|↑↓⟩ − |↓↑⟩)/ 2. The weak external drive is near resonance wi-
th the bare transition frequency of qubit A. In the dressed state picture, this drive translates to simultaneously driving four transitions as depicted by the black arrows in Fig. 2. This can be seen by expressing the drive term in Eq. (4) in the dressed basis, using the relation

SˆA+

=

√1 2

(|U ⟩ ⟨T |

− |U ⟩ ⟨S| + |T ⟩ ⟨D| +

|S⟩ ⟨D|) .

(12)

For g/Γ ≫ 1 (ΓA ∼ ΓB ∼ Γ), the states |T ⟩ , |S⟩ are shifted from the bare resonance by ±g/2 and hence all four transitions are driven off-resonantly. Hence, the coherence established in the system decreases and consequently the phase response and synchronization metrics asymptotically decay to zero as g/Γ increases.
In the intermediate regime where g/Γ ∼ 1, neither the individual qubit basis nor the dressed basis is particularly well suited for analyzing the system. This is because, while the Hamiltonian (1) is diagonal in the dressed basis, the jumps induced by the local baths are instead diagonal in the individual qubit basis. Hence, when the qubitqubit coupling is comparable to the gain and loss rates, one can expect a complex interplay of these processes, that leads to non-trivial effects on the metrics.

III. RESULTS
In Sec. III A, we study the phase response of the individual qubits to the external drive and explore the role

As described in Sec. II C, the phase response of a qubit is quantified by the magnitude of ⟨Sˆ+⟩, which is just the off-diagonal element, or coherence, of the reduced density matrix of the qubit. In Fig. 3(a), we plot |⟨Sˆ+⟩| normalized to the drive strength ϵ for both qubits as the qubit-qubit coupling strength g is varied. Here, we have set ∆d = ∆q = 0, i.e. the frequencies of the drive and the two qubits are taken to be equal. As g increases, the phase response of qubit A decreases and eventual-
ly vanishes completely at a particular strength g0,A indicated by the purple star. In the case of qubit B, we observe that it develops a non-zero phase response, even though it is not directly driven, by virtue of its coupling with qubit A. Interestingly, the coherence of qubit B also vanishes completely at a specific coupling strength g0,B (orange star). Finally, at large values of g, the coherence of either qubit approaches zero asymptotically, which can be understood as the result of off-resona-
nt driving in the collective spin picture (Sec. II E).
The complete vanishing of |⟨Sˆj+⟩|, j = A, B at g0,j corresponds to a zero crossing of the quantity ⟨Sˆj+⟩, which in turn marks a π phase shift in the phase developed by the corresponding qubit relative to the drive phase. We demonstrate this in Fig. 3(b), where we plot the variation in the azimuthal phase distribution δP (φ) [see Eq. (8)] for the two qubits at coupling strengths before, at, and after the zero-crossing point. The distribution for either qubit is flat right at the zero crossing poi-
nt while a π phase shift is evident in the distributions before and after this point.
The zero-crossing phenomenon occurs as a result of destructive interference from multiple drive pathways. For instance, in the case of qubit A, multiple pathways arise from the direct external driving and the feedback from qubit B as a result of the coupling. Alternatively, one can also interpret this phenomenon as a destructive addition of coherences in the collective spin picture, as discussed in Sec. II E. This phenomenon is intriguing because, for either qubit, the reduced density matrix at it-
s respective zero-crossing point has an azimuthal phase symmetry as seen by the flat profile of δP (φ), a remarkable feature given that the external drive explicitly breaks this symmetry in the system Hamiltonian (4). Hence, in the following we will explore the parameter regimes where such

6
(a)
(a)

(b)

(b)

FIG. 3. Phase response of the individual qubits. (a) |⟨Sˆ+⟩|/ϵ for qubits A and B versus the coupling strength g between the two qubits. Here, we choose wA = 0.4, γA = 0.6 and wB = 0.75, γB = 0.25. Markers (lines) are numerical (analytical) results. (b) The variation in the azimuthal phase distribution δP (φ) [see Eq. (8)] for qubit A (left) and qubit B (right) at the coupling strengths indicated in panel (a).
a zero crossing can be observed.

FIG. 4. Bath parameters over which a zero crossing can be observed. The panels show the coupling strength at which the zero crossing occurs for (a) qubit A, and (b) qubit B, as wA, wB are scanned while fixing γA +wA = γB +wB = 1. The regions in white indicate the absence of a zero crossing, and the regions in red [in panel (a)] indicate values of g0,A > 4.

1. Zero crossing: Interplay of gain and loss rates
The existence of a zero-crossing point is dependent on the temperatures of the local thermal baths coupled to each qubit. In order to rigorously determine the parameter regime where a zero-crossing can be observed, we first obtain an analytic expression for |⟨Sˆj+⟩|, j = A, B as a function of the coupling strength g, treating the drive strength ϵ as a perturbation. The details of this approach are presented in Appendix C. As shown in Fig. 3(a), the analytical expression (solid lines) is in excelle-
nt agreement with numerical results (markers). Next, we determine the existence of a zero-crossing point by solving for the coupling strength g0,j where this expression vanishes.
In Fig. 4, we explore the existence of a zero-crossing point for each qubit as their gain rates (and consequently their bath temperatures) are varied. The color indicates the value of g0, while the regions in white correspond to bath parameters where a zero-crossing point does not exist. We observe that, for both qubits, a zero-crossing point only exists when the baths are inverted with respect to each other, i.e. when wA > γA and wB < γB or

vice-versa. In other words, qubit A (qubit B) must be coupled to a negative (positive) temperature bath or viceversa. While this is a necessary condition to observe a zero crossing in qubit A, it is both necessary and sufficient in the case of qubit B. Furthermore, except in a narrow band (highlighted in red) for qubit A where g0,A rapidly increases, the zero crossing typically occurs for values of g0,j ∼ O(1), j = A, B, corresponding to the regime where qubit-qubit coupling strengths are comparab-
le to the gain and loss rates of the qubits.
2. Phase response to a detuned drive
So far, we assumed that the drive is on resonance with qubit A. In Fig. 5, we explore the phase response of qubit A to the external drive when it is detuned. In Fig. 5(a), we plot |⟨SˆA+⟩| for a detuned drive (purple curve) and find that the coherence no longer passes through a zerocrossing point (purple curve). To understand how this happens, we plot δP (φ) at three different values of g in the left panel of Fig. 5(b). We observe that the location

7

of the peaks and dips gradually shift to the right as g

(a)

increases, without ever passing through a flat profile.

Interestingly, when qubit B is appropriately detuned

with respect to qubit A, i.e. ∆q ̸= 0, we find that the zero-crossing point is restored, as seen in the orange curve

in Fig. 5(a). In the right panel of Fig. 5(b), we plot

δP (φ) for g values before, at, and after the zero-crossing

point and find that, in contrast to the ∆q = 0 case, the

distribution passes through a flat profile similar to the

case when ∆q = ∆d = 0 [Fig. 3(b)].

As shown in Fig. 5(c), we find that for every drive

detuning ∆d, there is a unique qubit-qubit detuning ∆q that restores the zero-crossing point. Furthermore, the

coupling strength g0,A at which this zero crossing occurs

(b)

is essentially unchanged as the drive detuning is varied.

These results provide a window into the internal dy-

namics of the composite two-qubit oscillator and demon-

strate the role of system parameters such as bath temper-

atures, qubit-qubit interaction, and detunings in modi-

fying the tendency of the constituent qubits to develop a

preferred phase relative to the drive.

B. Synchronisation of the Composite System

We now shift from the viewpoint of the individual qubits and instead study the response of the two-qubit system as a whole. We study the synchronization of the composite oscillator to the weak external drive applied to qubit A by using the synchronization measure Ω(ρˆ) given in Eq. (11). In the following, we will drop the ρˆ dependency while referring to this measure for notational convenience.
We quantify the effect of qubit-qubit interactions on the synchronization to the drive via a ratio R, defined as the ratio of the values of Ω in the presence (g ̸= 0) and absence (g = 0) of qubit-qubit coupling, i.e.,

R(g)

=

Ω|g Ω|0

.

(13)

In Fig. 6, we plot R versus g for two different sets of bath parameters for the two qubits. The purple curve demonstrates that, for appropriate choices of gain and loss rates, qubit-qubit interactions can significantly enhance the extent of synchronization in a composite oscillator. On the other hand, interactions can also strongly suppress synchronization, as evidenced by the sharp dip in the orange curve.
The synchronization measure is sensitive to the steadystate coherences established by the drive in the composite oscillator. As a qualitative indicator of this sensitivity, in Fig. 6(b) we plot the quantities |⟨T |U ⟩| and |⟨T |D⟩|, corresponding to coherences in the dressed basis, along the curves displayed in Fig. 6(a) 2. The coherences ⟨S|U ⟩

(c)
FIG. 5. Phase response to a detuned drive. (a) |⟨Sˆ+⟩|/ϵ for qubit A versus the coupling strength g for a detuned drive. The purple (orange) curves correspond to the case when qubit B is resonant with (detuned from) qubit A. Markers (lines) are numerical (analytical) results. (b) The variation in the azimuthal phase distribution δP (φ) [see Eq. (8)] for qubit A when qubit B is resonant with (left) and detuned from (right) qubit A, at the coupling strengths indicated in panel (a). (c) The value of -
the qubit-qubit detuning ∆q at which the zero crossing is restored, and the corresponding coupling strength g0,A, as a function of the drive detuning ∆d. Here, we choose wA = 0.25, γA = 0.75 and wB = 0.75, γB = 0.25.
and ⟨S|D⟩ are respectively equal in magnitude to ⟨T |U ⟩ and ⟨T |D⟩. We find that enhancement and suppression of the synchronization measure are qualitatively associated

2 We remind that the actual computation of the synchronization

metric is done in the eigenbasis {|λj ⟩} of the steady state of the undriven oscillator, as discussed in Sec. II D.

8

FIG. 6. Enhancement and suppression of synchronisation of the composite two-qubit oscillator. The ratio R [Eq. (13)] versus the coupling strength g for two different sets of bath parameters, indicated by the wA, wB values in the legend. The total relaxation rate for each qubit is kept fixed at γA + wA = γB + wB = 1. (b) Magnitude of coherences in the collective spin basis (see Sec. II E), |⟨T |U ⟩| and |⟨T |D⟩|, along the curves shown in panel (a). Results are obtained numerically.
with corresponding peaks and dips in the magnitude of individual coherences in the dressed basis, demonstrating that the synchronization measure captures the overall extent of coherence build-up in the system as a result of the drive.
1. Synchronization enhancement: Dependence on gain and loss rates
The enhancement of synchronization as a result of qubit-qubit interaction depends on the parameters of the local thermal baths acting on each qubit. We once again first consider the situation when ∆d = ∆q = 0. In Fig. 7(a) we plot Rmax, the value of R maximized over the coupling strength g, as the gain rates for the two qubits (and consequently their temperatures) are varied. We observe that significant enhancement in synchronization occurs when the gain and loss rates for qubit A are comparable. -
This can be understood by considering the limiting case of wA = γA, which corresponds to an infinite temperature bath. For g = 0, the steady state of qubit A coupled to such a bath is the maximally mixed state, which does not develop any coherence under an external drive. However, coupling it to a second qubit

with wB ̸= γB takes the composite oscillator away from infinite temperature and leads to a build up of non-zero coherence in the system.
To see the effect of the qubit-qubit coupling in the region wA ∼ γA more clearly, we compare the case of coupled and uncoupled (g = 0) qubits in Fig. 7(b). We fix wB = 0 and plot Ω when it is maximized over g (Ωmax), and for g = 0 (Ω|0), as wA is varied. As wA → γA (wA → 0.5 here), the coherence in the uncoupled system vanishes whereas it persists in the presence of interactions with qubit B. In fact, we find that for any non-zero temperature of qubit A, interactions with qubit B with wB = 0 (zero-
 temperature) lead to an enhancement in the synchronization measure, although this is most noticeable when wA ∼ γA.
We note that it is essential to keep in mind the actual value of the synchronization measure when interpreting enhancements in synchronization. For instance, as wA → γA, Rmax → ∞. However, this result is an artefact of Ω|0 → 0 in this limit, whereas Ωmax remains finite, but small. Nevertheless, even a small non-zero buildup of coherences can lead to observable effects in macroscopic systems with a large number of quantum units, as occurs in NMR systems [14].
2. Suppression of Synchronization
For g ≫ Γ, Ω → 0 because of the large detuning of the weak drive, as discussed in Sec. II E. However, Fig. 6(a) shows that for appropriate bath parameters, a non-trivial suppression of Ω can occur at intermediate values of g, which manifests as a local minimum of Ω (or equivalently R) as a function of g. In Fig. 8(a), we explore the range of bath parameters over which such a local minimum exists by plotting the value of Rmin, i.e. the value of R at the local minimum, whenever it exists. The white -
regions indicate the absence of a local minimum for those combinations of bath parameters. Interestingly, we find that a local minimum in synchronization occurs only in regimes where the baths for the two qubits are inverted with respect to each other, analogous to the existence of zero-crossing points in the phase response of the individual qubits. We note that the regimes of bath parameters for observing enhancement [Fig. 7(a)] and suppression of synchronization [Fig. 8(a)] are not mutually excl-
usive, because these effects occur at different values of the qubit-qubit coupling strength g, as can be seen from the orange line plot shown in Fig. 6(a).
To understand how this minimum emerges and disappears, in Fig. 8(b), we plot Ω/ϵ2 versus g for four points chosen along the vertical cut shown in Fig. 8(a). For fixed ωB ≈ 0.82, when ωA is slightly above 0.5, the Ω/ϵ2 versus g curve shows only a single maximum. As ωA is decreased below 0.5 to ωA ≈ 0.46, a local minimum can be observed. Further decreasing ωA to 0.38, the local minima and local maxima (at g ≈ 2) become less pronounced. Finally, for ωA ≈ 0.25, Ω monotonically decays

9

(a)

(a)

(b)

(b)

FIG. 7. Effect of bath parameters on enhancement of synchronisation in the composite two-qubit oscillator. (a) Plot of Rmax, i.e. R [Eq. (13)] maximized over coupling strength g, as wA, wB are scanned. The regions in white correspond to Rmax > 10. (b) Synchronization measure Ω [Eq. (11)] versus wA for wB = 0, γB = 1. The orange dashed (purple solid) line corresponds to Ω maximized over g (Ω at g = 0). In both panels, the total relaxation rate for each qubit is kept fixed at γA + wA = γB + wB = 1. -
Results are obtained numerically.

FIG. 8. Effect of bath parameters on suppression of synchronization in the composite two-qubit oscillator. (a) Plot of Rmin, i.e. R [Eq. (13)] evaluated at a local minimum as g is scanned. White regions indicate absence of a local minimum. (b) Synchronization measure Ω [Eq. (11)] versus g evaluated at four different points along the vertical line shown in panel (a). In both panels, the total relaxation rate for each qubit is kept fixed at γA + wA = γB + wB = 1. Results are obtained numerically.

with g. These results demonstrate how the overall buildup of
coherences in a composite system under external driving can be strongly enhanced or suppressed by tuning the parameters of the constituent quantum units and the interactions between them. More broadly, the variety of quantum synchronizing behaviors observable in our minimal model exemplifies the potential to assemble quantum self-sustained oscillators using basic building blocks such as qubits, which can then be used as a playground to explore aspects and applications of quantum synchronization [2-
8].
C. Experimental considerations
Motivated by practical considerations, we have studied the robustness of the features discussed above to qubit dephasing [see Eq. (C1)] as well as stronger drive

strengths such that ϵ/Γ ≲ 1. We find that both dephasing and stronger driving only lead to quantitative changes, e.g. in the location of the zero-crossing in Fig. 3(a) or the extent of synchronization enhancement in Fig. 6, but do not change the results qualitatively.
IV. PROPOSAL FOR CIRCUIT QED REALIZATION
In this section, we propose an implementation of our composite two-qubit oscillator model using artificial atoms and resonators made out of superconducting microwave circuits. This platform constitutes a favorable testbed to study synchronization for a number of reasons. These include the high degree of flexibility in the qubit connectivity, the ability to scale up the oscillator size if required, as well as the absence of certain undesirable effects such as motional heating, which often accompa-

10

(a)
κA

(b)

..

|1⟩

|0⟩

AuxA

ΩpA

ΩpB

gA A g B gB ϵ

|f ⟩ gA |e⟩
|g⟩

|f ⟩
|e⟩
g |g⟩

AuxB

κB

.. |1⟩ gB |0⟩

FIG. 9. Circuit QED realization of a composite two-qubit oscillator. (a) Schematic showing two transmons A and B each coupled to a lossy auxiliary resonator as well as to each other, and driven using microwave fields. (b) Level diagram illustrating the working principle of the implementation.

nies gain and loss channels in real atoms. In contrast to digital simulations of synchronizing systems on a superconducting quantum computer [15], here we propose an analog simulation approach to directly engineer the various Hamiltonian and dissipative processes of the oscillator, as discussed below.
Figure 9 shows a schematic of our proposed circuit QED implementation. The two qubits are encoded in the ground (|g⟩) and first excited (|e⟩) states of two tunable frequency transmons, labeled A and B. While the loss channel, i.e. |e⟩ → |g⟩ decay, is intrinsic to each transmon, the gain channel, i.e. incoherent |g⟩ → |e⟩ jumps, need to be artificially engineered. Such a channel can be engineered by utilizing a lossy auxiliary resonator coupled to higher levels of the transmon [26, 27]. Specificall-
y, for each transmon, a resonator with decay rate κj (j = A, B) is coupled resonantly to its |e⟩ ↔ |f ⟩ transition. Exploiting the anharmonicity in the spacing of the transmon levels, two-photon |g⟩ → |f ⟩ transitions can be driven resonantly by using appropriately detuned microwave ‘pump’ fields ΩpA, ΩpB. Consequently, population in |g⟩ is transferred to |f ⟩, which decays rapidly to |e⟩ as a result of coupling to the lossy resonator. The net effect of this process is an incoherent transfer of po-
pulation from |g⟩ to |e⟩, that realizes a gain channel. The qubit-qubit interaction is realized using a tunable coupler (not shown) that introduces spin-exchange interactions with variable coupling strength g. Finally, the external drive ϵ is realized as an additional microwave field applied to transmon A.
To verify the realization of a two-qubit oscillator using this system, we have identified appropriate values for the various system parameters and performed master equation simulations of the circuit QED model. In our modeling, we include the Hilbert space of the transmons as well as the auxiliary resonators, while we choose to model the coupler as a phenomenological tunable coupling term between the two transmons. Our choice is motivated by the multiple demonstrations of tunable couplers [31–33],-
 making them a standard component in circuit QED systems. The details of the master equation simulations are

discussed in Appendix E and the chosen parameter values are listed in Tables I and II. These parameters are feasible with current technology.
The phase response and synchronization metrics can be measured in experiments. The off-diagonal matrix elements of the individual qubits can be straightforwardly measured by coupling individual readout resonators to each qubit (not shown) and performing additional single qubit gates. Furthermore, the complete density matrix of the combined two-qubit system can be extracted in experiment by performing tomography using multiple single and two-qubit gates as done, e.g., in Ref. [34]. To infer the syn-
chronization measure Ω, the steady-state density matrices in the presence (ρˆ) and absence (ρˆu) of the external drive can be extracted, which together enable the construction of ρˆdiag. Subsequently, Ω [Eq. (11)] can be evaluated by computing the entropies of the experimentally estimated ρˆ and ρˆdiag matrices.
We now turn to the simulation results, which demonstrate that our proposed system indeed operates as a composite two-qubit oscillator that can be used to explore the features discussed in Sec. III. In Fig. 10, we study the response of the individual qubits to the external drive by plotting the coherence |⟨Sˆ+⟩| of the two qubits. The two panels correspond to two different sets of gain and loss rates for the two qubits. The results from the circuit QED model (markers) are in very good agreement wit-
h the expectations from the qubit model (lines) studied in Sec. III. In addition, we simulate the system in the presence of intrinsic transmon dephasing (empty markers and dashed lines) and find that it does not change the behavior qualitatively even when the dephasing rates are comparable to the relaxation rates γA, γB. In Fig. 11, we compare the synchronization measure Ω obtained from the circuit QED model to the predictions from the qubit model and once again find excellent agreement for two di-
fferent sets of gain and loss parameters. Our results suggest that features such as the zero crossing in the coherence of the individual qubits and the enhancement or suppression of quantum synchronization as a result of qubit-qubit interactions can be observed in a circuit

11

(a)

(a)

(b)

(b)

FIG. 10. Phase response of individual qubits in the circuit QED implementation. The two panels show |⟨Sˆ+⟩| for the two qubits with (a) wA/γA = 0, wB/γB ≈ 3.2 and (b) wA/γA ≈ 0.27 and wB/γB ≈ 4.5. The filled markers (solid lines) show the results from the circuit QED model (qubit model, discussed in Sec. III). The empty markers (dashed lines) are the corresponding results in the presence of an additional dephasing channel. Parameters for the simulations are presented in Appendix E.

FIG. 11. Synchronization of the composite oscillator in the circuit QED implementation. The two panels show the synchronization measure Ω [Eq. (11)] for (a) wA/γA ≈ 0.27, wB/γB ≈ 4.5 and (b) wA/γA ≈ 0.71, wB/γB ≈ 0.28. The solid markers (solid lines) show the results for the circuit QED model (qubit model, discussed in Sec. III). The empty markers and dashed lines are the corresponding results in the presence of an additional dephasing channel. Parameters for the simulations are presented in Appen-
dix E.

QED experiment, and are robust against effects such as dephasing.
V. CONCLUSION AND OUTLOOK
We have introduced and studied a minimal model of a composite self-sustained oscillator consisting of two interacting qubits coupled to each other as well as to independent thermal baths. Such a model provides a first step towards engineering a wide variety of quantum synchronizing systems from basic units available on current quantum hardware. We studied the response of this system when a weak external drive is applied to one of the qubits. Specifically, we showed how the interplay of gain, loss -
and qubit-qubit interactions affects the phase response of the constituent qubits as well as the tendency of the composite system, as a whole, to synchronize to the drive. Furthermore, we demonstrated the experimen-

tal feasibility of our model by proposing and analyzing a circuit QED implementation using transmons coupled to resonators as well as to each other.
Our study reveals that certain phase response and synchronization effects occur only when the baths for the two qubits are inverted, i.e. when gain dominates loss for one qubit and loss dominates gain for the other. In this situation, the phase response of the individual qubits to the external drive undergoes an abrupt phase shift of π as the qubit-qubit coupling strength increases. Remarkably, at the crossover points for either qubit, which we term as zero-crossing points, we observe a blockade p-
henomenon: The off-diagonal element (coherence) of its reduced density matrix vanishes, restoring an azimuthal phase symmetry in the corresponding phase space distribution. We also studied the behavior of an information theoretic measure of quantum synchronization, which captures the tendency of the oscillator, as a whole, to synchronize to the drive. We find that when the gain and loss rates

12

for the driven qubit are comparable, interactions with the second qubit can significantly enhance the coherence induced in the system by the drive. This enhancement occurs irrespective of whether the baths are inverted or not. On the other hand, a suppression of the synchronization response occurs only in parameter regimes where the baths are inverted, similar to the occurrence of zerocrossing points in the response of the constituent qubits of the system.
Our model naturally generalizes to higher dimensional spins, which may however be more challenging to implement in practice. In Appendix D, we study a two-qutrit oscillator and show that the behavior of this system is qualitatively similar to the two-qubit oscillator. An interesting observation in the qutrit system is the occurrence of a zero crossing in the expectation values of higherorder spherical tensor operators at specific qutrit-qutrit coupling strengths, which can be interpreted as a gene-
ralized blockade phenomenon.
Finally, let us note that our model and circuit QED proposal are complementary to, and build upon, previous studies of quantum synchronization with pairs of qubits in NMR platforms [14]. In contrast to these studies with an Ising interaction between the qubits, our model considers a spin-exchange type interaction between them. Furthermore, the qubit-qubit coupling strength and the individual qubit gain-to-loss ratios in our circuit QED proposal are tunable, allowing for control on the interactions-
 and the local temperatures of each qubit. This enables the exploration of a wide variety of quantum synchronizing behaviors. More broadly, our proposal offers the potential to controllably scale up quantum selfsustained oscillators, and thereby experimentally probe the emergence of classical notions of synchronization from the underlying quantum system. For example, the properties of macroscopic synchronizing systems, such as superradiant lasers composed of several thousands to millions of atoms -
[35–37] and analogous systems [38, 39], can be understood as the response of a large collective dipole, that can be analyzed with semiclassical mean-field type theories. Theoretical analysis of scaled-up extensions of our model can be performed rigorously using recently introduced tools [40]. Our proposal may also find applications in studying complex thermal heat engines [21, 29] and exotic quantum heat engines, e.g., that operate between negative and positive temperature baths [41].
ACKNOWLEDGMENTS
We thank Sai Vinjanampathy and Simon J¨ager for discussions and feedback on the manuscript. We thank Pe-

ter Zoller for initial discussions on quantum synchronization. We acknowledge the use of QuTiP [42] for numerical results. G. M. V. and S. H. acknowledge the support of Kishore Vaigyanik Protsahan Yojana, Department of Science and Technology, Government of India. A. M. acknowledges the support of Ministry of Education, Government of India. W. H. acknowledges support from a research fellowship from the DFG (Grant No. HA 8894/1-1). R. K. acknowledges funding from Large SCale Entangled Matter (LASCEM-
) via the US Air Force Office of Scientific Research grant no. FA9550-19-1-7044. B. S. acknowledges support of the Ministry of Electronics and Information Technology, Government of India, under the Centre for Excellence in Quantum Technology grant to Indian Institute of Science (IISc). A. S. acknowledges the support of a C. V. Raman Post-Doctoral Fellowship, IISc.

Appendix A: Phase response metrics based on the Q function

In Sec. III A, we study the phase response of the individual qubits using the off-diagonal element of the respective reduced density matrices. This metric was motivated in Sec. II C using the Husimi Q function. This approach can be generalized to study the phase response of individual qudits in a two-qudit oscillator by expanding the Q function in terms of spherical tensor operators. Specifically, the Q function can be expressed as the sum [43, 44]

2S k

QS(θ, φ) =

ck,qPkq(cos θ)eiqφ⟨Tˆk−q⟩,

k=0 q=−k

(A1)

where Pkq(cos θ) are associated Legendre polynomials, Tˆkq are spherical tensor operators, ⟨Oˆ⟩ = Tr{Oˆρˆ} denotes the expectation value of an operator Oˆ, and ck,q are weight factors given by

(2k + 1)(k − q)!

(2S)!

ck,q =

. (k + q)! [(2S − k)!(2S + k + 1)!]1/2

(A2)

As a result, the phase response of individual qudits to an

external drive that breaks the azimuthal phase symme-

try can be studied by probing the expectation value of

spherical tensor operators with q different from zero.

In particular, for qubits and qutrits, the Q function can be explicitly expressed as

Q

1 2

,ρˆ(θ,

φ)

=

√1 2

P00⟨Tˆ00⟩

+

√1 2

P10⟨Tˆ10

⟩

+

P11Re

⟨Tˆ11⟩e−iφ

,

Q1,ρˆ(θ, φ)

=

√1 3

P00⟨Tˆ00⟩

+

√1 2

P10⟨Tˆ10

⟩

+

√1 6

P20

⟨Tˆ20

⟩

+Re

P11⟨Tˆ11⟩

+

1 3

P21

⟨Tˆ21⟩

e−iφ

+

1 6

P22⟨Tˆ22⟩e−2iφ

,

13 (A3)

FIG. 12. Synchronisation measure (Ω/ϵ2) of the composite two-qubit oscillator computed using the diagonal limit cycle state and an optimization over the partially-coherent limit cycle states. Here, we choose wA ≈ 0.55, γA ≈ 0.45 and wB ≈ 0.09, γB ≈ 0.91. Results are obtained numerically.
where we have used Pkq ≡ Pkq(cos θ) for compactness and expressed the Q function using only the q ≥ 0 terms. Writing the spherical tensor operators in Q1/2 in terms of spin operators, we obtain Eq. (7). In the case of spin1, two multipoles Tˆ11, Tˆ21 contribute to the first harmonic in φ, while Tˆ22 gives rise to a second harmonic. We study these quantities in the context of a two-qutrit oscillator in Appendix D.
Appendix B: Partially coherent candidate limit cycle states

in our model and for weak driving, the metric (11) essentially coincides with the measure obtained by optimization over such partially coherent limit cycle states.
We first note that, in our model, both sets, {|λj⟩} and {|Ej⟩}, are eigenstates of the operator Sˆz = SˆAz + SˆBz . As a result, ρˆu can be written in a block-diagonal form in the basis {|Ej⟩}, with each block corresponding to a fixed number of total excitations. Under such a situation, Σ must be chosen as a set of partially-coherent candidate limit cycle states that account for the intrinsic coherences in each block that are not established by the drive. On the other hand, the matrix elements of -
the external drive (ϵ term in Eq. (4)) are block off-diagonal in {|Ej⟩}. In other words, ρˆu respects a global U (1) symmetry, i.e. it is invariant under unitary transformations of the form Uˆ (φ) = eiφSˆz , while the weak drive, to leading order, only introduces coherences between different blocks associated with this symmetry. As a result, for weak driving, we expect the synchronization measure computed by choosing Σ as the set of states diagonal in {λj} (as done in the main text) to coincide wi-
th the measure computed using the set of states with partial coherence (as described above) in the {|Ej⟩} basis.
In Fig. 12, we demonstrate the excellent agreement between the two approaches. We compute the synchronization measure using partially-coherent candidate limit cycle states via numerical optimization of the limit cycle after imposing the block-diagonal structure in the {|Ej⟩} basis. Indeed, we find that the optimized partially coherent limit cycle state coincides with ρˆdiag. In the main text, we choose to work with the metric based on diagonal limit cycle states as they are conceptually simpler an-
d more intuitive.

In Sec. II D, we describe a metric [Eq. (11)] for study-
ing the synchronization of the two-qubit oscillator, which
we use to obtain the results in Sec. III B. This metric is
obtained considering a family of limit cycle states Σ that is diagonal in the eigenbasis {|λj⟩} of the undriven steady state ρˆu. We note that the {|λj⟩} are not the eigenstates {|Ej⟩} of the undriven Hamiltonian, i.e. Eq. (4) with ϵ = 0. Under such circumstances, Ref. [16] proposes to
optimize over a more general family of limit cycle states that allow for partial coherence in the {|Ej⟩} basis, such that the resulting family of states respects the structure
of ρˆu expressed in this basis. Here, we demonstrate that

Appendix C: Phase response of individual qubits: Analytical solution
In this appendix, we outline our procedure to obtain analytical expressions for the phase response measures |⟨Sˆj+⟩|, j = A, B, using which we rigorously establish the presence of zero-crossing points in Sec. III.
The master equation for the system, including dephas-

14

ing noise on the qudits for a general treatment, is

dρˆ = −i dt

Hˆtot, ρˆ

+

D[√wj Sˆj+ ]ρˆ

j=A,B

+

√ D[ γj

Sˆj−]ρˆ

+

D[ 2γϕSˆjz]ρˆ,

j=A,B

j=A,B

(C1)

where Hˆtot is given by Eq. (4). We treat the drive as a

perturbation and expand all observables in orders of ϵ as

⟨Oˆ⟩ = ⟨Oˆ⟩0 + ϵ ⟨Oˆ⟩1 + O(ϵ2).

(C2)

At zeroth order in ϵ, the master equation is U (1) sym-
metric, i.e. it is invariant under the transformation SˆA±(B) → SˆA±(B)e±iφ. As a result, only observables that are invariant under this symmetry are non-zero. There
are four such quantities, corresponding (at zeroth order) to ⟨SˆAz ⟩0 , ⟨SˆBz ⟩0 , ⟨SˆAz SˆBz ⟩0 , ⟨SˆA+SˆB−⟩0. Their equations of motion constitute a set of linear equations given by

Re

ig ⟨SˆA−SˆB+⟩0

−

ΓA

⟨SˆAz ⟩0

=

− wA

− 2

γA

Re

ig ⟨SˆA+SˆB−⟩0

−

ΓB

⟨SˆBz ⟩0

=

− wB

− 2

γB

wB

− 2

γB

⟨SˆAz ⟩0

+

wA

− 2

γA

⟨SˆBz ⟩0

−

(ΓA

+

ΓB) ⟨SˆAz SˆBz ⟩0

=

0

g i 2

⟨SˆBz ⟩0 − ⟨SˆAz ⟩0

−

ΓA

+

ΓB 2

+

4γϕ

⟨SˆA+SˆB−⟩0

−

i∆q

⟨SˆA+SˆB−⟩0

=

0,

(C3)

where ΓA(B) = wA(B) + γA(B). At first order in ϵ, observables with broken U (1) symmetry acquire a non-

zero value. In particular, their equations of motion are ‘sourced’ by the zeroth order U (1) symmetric observables as given below:

−ig

⟨SˆAz SˆB+⟩1

−

ΓA

+ 2

2γϕ

⟨SˆA+⟩1

+

i∆d

⟨SˆA+⟩1

=

i ⟨SˆAz ⟩0

(C4)

−ig

⟨SˆA+SˆBz ⟩1

−

ΓB

+ 2

2γϕ

⟨SˆB+⟩1

+

i(∆d

+

∆q )

⟨SˆB+⟩1

=

0

−i g 4

⟨SˆB+⟩1

−

ΓA

+ 2

2γϕ

⟨SˆA+SˆBz ⟩1

+

wB

− 2

γB

⟨SˆA+⟩1

−

ΓB

⟨SˆA+SˆBz ⟩1

+

i∆d

⟨SˆA+SˆBz ⟩1

=

i ⟨SˆAz SˆBz ⟩0

−i g 4

⟨SˆA+⟩1

−

ΓB

+ 2

2γϕ

⟨SˆAz SˆB+⟩1

+

wA

− 2

γA

⟨SˆB+⟩1

−

ΓA

⟨SˆAz SˆB+⟩1

+

i(∆d

+

∆q )

⟨SˆAz SˆB+⟩1

=

−i 2

⟨SˆA−SˆB+⟩0

− ΓA

+

ΓB 2

+

4γϕ

⟨SˆA+SˆB+⟩1

+

i(2∆d

+

∆q) ⟨SˆA+SˆB+⟩1

=

0.

Solving these equations, we arrive at analytic expressions for ⟨SˆA+⟩, ⟨SˆB+⟩. However, the general form of these expressions are not compact and hence we do not reproduce them here.
Appendix D: Two-qutrit oscillator
Our model can be generalised to explore higher dimensional spin systems. In this appendix, we briefly study an oscillator composed of two interacting qutrits that are each coupled to separate thermal baths.

1. Phase response of individual qutrits
We study the phase response of the constituent qutrits to an external drive applied to one of them using the spherical tensors framework described in Appendix A. Accordingly, in Fig. 14(a), we plot the quantities |⟨Tˆ11⟩|, |⟨Tˆ21⟩| and |⟨Tˆ22⟩| for qutrit A as a function of the qutrit-qutrit coupling strength and for a fixed set of gain and loss rates for each qutrit. Interestingly, we observe that each of the three quantities undergoes a zero crossing at different coupling strengths. This observa-
tion can be interpreted as a generalized blockade effect, where the expectation values of specific spherical tensor multipoles vanish as a result of destructive interference from the coupling to the second qutrit.

15

FIG. 13. Energy level diagram for the composite two-qutrit oscillator, showing the gain and damping channels and the exchange interaction of the qutrits. The right panel illustrates the exchange interactions. The white, half-colored and colored circles respectively represent the m = −1, 0, 1 states of the two qutrits.

FIG. 15. Enhancement and suppression of synchronisation of the composite two-qutrit oscillator. The ratio R [Eq. (13)] versus the coupling strength g for the two-qutrit oscillator and for two different sets of bath parameters, indicated by the wA, wB values in the legend. Results are obtained numerically.

QuTiP [42] for the system depicted in Fig. 9. We include 3 levels for each transmon and auxiliary resonator for the simulation and choose to work in a frame that is rotating at the frequencies ωpA, ωpB of the two-photon ‘pump’ fields, which are denoted by their Rabi frequencies ΩpA , ΩpB in Fig. 9. The Hamiltonian in such a frame is given by

FIG. 14. Expectation values of spherical tensor operators for qutrit A versus the qutrit-qutrit coupling strength g. Here, we choose wA = 0.25, γA = 0.75 and wB = 0.75, γB = 0.25, while fixing wA + γA = wB + γB = 1. Results are obtained numerically.
2. Synchronisation of the Composite Two-Qutrit oscillator
In Fig. 15, we plot the quantity R, defined in Eq. (13), as a function of the qutrit-qutrit coupling strength for two different sets of gain and loss rates for the qutrits. These curves demonstrate that interactions between the two qutrits can lead to significant enhancement or suppression of synchronization in different parameter regimes, similar to the case of the two-qubit oscillator discussed in the main text.
Appendix E: Simulations of Proposed cQED Realization
In this appendix, we describe the master equation, parameter values and factors considered in choosing these values, for the results presented in Sec. IV.
The master equation simulation is performed using

Hˆ cQED

=

(ωqj − ωpj )ˆb†jˆbj +

αj 2

(ˆb†jˆbj

−

1)ˆb†jˆbj

j=A,B

j=A,B

+

(ωaj − ωpj )aˆ†j aˆj

j=A,B

+

gj (aˆjˆb†j + aˆ†jˆbj )

j=A,B

+g(ˆb†AˆbB ei(ωpA−ωpB)t + h.c.)

+

Ωpj (ˆb†j + ˆbj )

j=A,B

+ϵ(ˆbAe−i(ωpA−ωqA)t + h.c.).

(E1)

Here, aˆj, aˆ†j and ˆbj, ˆb†j, j = A, B, are the ladder operators for the auxiliary resonators and the transmons respectively. We note that the coupling and drive strengths in this model differ by a factor of two in comparison to the spin model Eq. (4). The first two lines in Eq. (E1) describe the free Hamiltonian of the transmons and the auxiliary resonators. The third line describes the coupling between the transmons and their respective auxiliary resonators, the fourth line the coupling between-
 the two transmons, the fifth line the two-photon pump on the transmons, and the last line describes the external drive on transmon A. The master equation for the full

16

Parameter

Symbol

Value

frequency of qubit A*(B*) ωqA(ωqB)/2π 5 GHz

frequency of aux A(B) ωaA(ωaB)/2π 4.6 GHz

anharmonicity of qubit A

αA/2π

400 MHz

anharmonicity of qubit B

αB /2π

500 MHz

qubit-qubit coupling

gAB/2π 0 - 350 kHz

qubit A - aux A coupling

gA/2π

8 MHz

qubit B - aux B coupling

gB /2π

4 MHz

frequency of qubit A pump ωpA/2π

4.8 GHz

frequency of qubit B pump ωpB/2π 4.75 GHz

decay rate of aux A(B) κA(κB)/2π 60 MHz

decay rate of qubit A(B) γ0,A(γ0,B)/2π 53 kHz

dephasing rate of qubit A(B) γϕA(γϕB)/2π 53 kHz

TABLE I. Model parameters. For the quantities marked with a *, the values reported in this Table are approximate and need to be adjusted according to the detunings given in Table II.

system is given by

dρˆ = −i dt

HˆcQED, ρˆ

+

D[√κj aˆj ]ρˆ

j=A,B

+

D[√γ0,jˆbj]ρˆ +

D[√γϕj ˆb†j ˆbj ]ρˆ.

j=A,B

j=A,B

(E2)

Here, κj, γ0,j describe the decay rates of the resonators and the transmons while γϕj describe additional dephasing of the transmons. The values of the parameters entering Eq. (E1) and Eq. (E2) are given in Tables I and II. These values are experimentally achievable with current technology.
A number of factors must be carefully considered in choosing parameters for the cQED model, and in order to match its results with the two-qubit oscillator model discussed in Sec. III. The off-resonant coupling of the |g⟩ ↔ |e⟩ transition to the auxiliary resonator leads to an additional Purcell decay besides the intrinsic decay channels. The total decay rate γj and the effective repump rate wj of each qubit, that are reported in Figs. 10 and 11, are extracted by decoupling the transmons (g = 0) a-
nd fitting the relaxation profiles of the population from an initial state. While the |g⟩ ↔ |e⟩ transitions of the two transmons must be near-resonance, the corresponding |e⟩ ↔ |f ⟩ transitions must be mismatched in frequency, which will require different anharmonicities for

the two transmons. The frequency mismatch ensures that the |f ⟩ → |e⟩ decay of, say transmon A, does not occur through the auxiliary resonator of transmon B or vice versa, by virtue of their coupling. Furthermore, the strength ϵ of the weak drive cannot be made arbitrarily small since its effects must be discernible in the presence of experimental limitations and residual coherences arising from the pump fields.

A further, important factor is that the auxiliary res-

onators and the two-photon pumps introduce shifts to the

|g⟩ ↔ |e⟩ transition frequency of both transmons, which

must be compensated by appropriately tuning their fre-

quencies. The dispersive shift of the |g⟩ ↔ |e⟩ transition

Symbol Fig 10(a) Fig 10(b) and Fig 11(a) Fig 11(b)

ϵ/2π 20 kHz

20 kHz

40 kHz

ΩpA/2π 0.0 MHz

5.5 MHz

7 MHz

ΩpB/2π 8.0 MHz

9.0 MHz

4.1 MHz

∆A/2π 160 kHz

763.3 kHz

1135 kHz

∆B/2π 1013.72 kHz

1230 kHz

300 kHz

TABLE II. Parameters for different figures. ΩpA, ΩpB are the Rabi frequencies of the two-photon pump on qubits A, B respectively. ∆A and ∆B are corrections in the qubit frequency due to the two-photon pump and the auxiliary resonator, such that the shifted frequency of the qubit is given by ωqj + ∆j , j = A, B.

frequency arising from the auxiliary resonator is given by gj2/(ωqj − ωaj). The shift due to the two-photon pump was calculated by considering the Hamiltonian for the
pump acting on the lowest three levels of the transmon.
Because of the coupling to the auxiliary resonator, the decay in the third level, given by γf = 4g2/κ[26], is also included in the Hamiltonian, which, in a frame rotating
at the pump frequency takes the form

 0 Ωp √ 0  H = Ωp √α/2 2Ωp
0 2Ωp −iγf

(E3)

where Ωp is the two-photon pump strength. The shifted |g⟩ ↔ |e⟩ transition frequency is then obtained by diagonalizing this Hamiltonian. The net corrections to
the transmon frequencies arising from the auxiliary res-
onators and the two-photon pumps are listed in Table II.

[1] A. Pikovsky, M. Rosenblum, and J. Kurths, Synchronization: A universal concept in nonlinear sciences, Self 2, 3 (2001).
[2] T. E. Lee and H. Sadeghpour, Quantum synchronization of quantum van der pol oscillators with trapped ions, Physical review letters 111, 234101 (2013).
[3] S. Walter, A. Nunnenkamp, and C. Bruder, Quantum synchronization of a driven self-sustained oscillator, Physical review letters 112, 094102 (2014).

[4] T. E. Lee, C.-K. Chan, and S. Wang, Entanglement tongue and quantum synchronization of disordered oscillators, Physical Review E 89, 022913 (2014).
[5] S. Sonar, M. Hajduˇsek, M. Mukherjee, R. Fazio, V. Vedral, S. Vinjanampathy, and L.-C. Kwek, Squeezing enhances quantum synchronization, Physical review letters 120, 163601 (2018).
[6] A. Roulet and C. Bruder, Quantum synchronization and entanglement generation, Physical review letters 121,

17

063601 (2018). [7] A. Roulet and C. Bruder, Synchronizing the smallest pos-
sible system, Physical review letters 121, 053601 (2018). [8] M. Koppenho¨fer and A. Roulet, Optimal synchronization
deep in the quantum regime: Resource and fundamental limit, Phys. Rev. A 99, 043804 (2019). [9] R. Tan, C. Bruder, and M. Koppenho¨fer, Half-integer vs. integer effects in quantum synchronization of spin systems, Quantum 6, 885 (2022). [10] N. Lo¨rch, S. E. Nigg, A. Nunnenkamp, R. P. Tiwari, and C. Bruder, Quantum synchronization blockade: Energy quantization hinders synchronization of identical oscillators, Physical Review Letters 118, 243602 (2017). [11] S. E. Nigg, Observing quantum synchroniza-
tion blockade in circuit quantum electrodynamics, Physical Review A 97, 013811 (2018). [12] P. Solanki, F. M. Mehdi, M. Hajduˇsek, and S. Vinjanampathy, Symmetries and synchronization blockade, arXiv preprint arXiv:2212.09388 (2022). [13] A. W. Laskar, P. Adhikary, S. Mondal, P. Katiyar, S. Vinjanampathy, and S. Ghosh, Observation of quantum phase synchronization in spin-1 atoms, Physical review letters 125, 013601 (2020). [14] V. Krithika, P. Solanki, S. Vinjanampathy, and T. Mahesh, Observation -
of quantum phase synchronization in a nuclear-spin system, Physical Review A 105, 062206 (2022). [15] M. Koppenho¨fer, C. Bruder, and A. Roulet, Quantum synchronization on the ibm q system, Physical Review Research 2, 023026 (2020). [16] N. Jaseem, M. Hajduˇsek, P. Solanki, L.-C. Kwek, R. Fazio, and S. Vinjanampathy, Generalized measure of quantum synchronization, Physical Review Research 2, 043287 (2020). [17] V. Ameri, M. Eghbali-Arani, A. Mari, A. Farace, F. Kheirandish, V. Giovannetti, and R. -
Fazio, Mutual information as an order parameter for quantum synchronization, Phys. Rev. A 91, 012301 (2015). [18] Y. Shen, W.-K. Mok, C. Noh, A. Q. Liu, L.-C. Kwek, W. Fan, and A. Chia, Quantum synchronization effects induced by strong nonlinearities, arXiv preprint arXiv:2301.02948 (2023). [19] B. Buˇca, C. Booker, and D. Jaksch, Algebraic theory of quantum synchronization and limit cycles under dissipation, SciPost Phys. 12, 097 (2022). [20] J. Tindall, C. S. Mun˜oz, B. Buˇca, and D. Jaksch, Qua-
ntum synchronisation enabled by dynamical symmetries and dissipation, New Journal of Physics 22, 013026 (2020). [21] T. Murtadho, S. Vinjanampathy, and J. Thingna, Cooperation and competition in synchronous open quantum systems, Phys. Rev. Lett. 131, 030401 (2023). [22] M. Scala, R. Migliore, A. Messina, and L. L. Sa´nchezSoto, Robust stationary entanglement of two coupled qubits inindependent environments, The European Physical Journal D 61, 199 (2011). [23] J. B. Brask, G. Haack, N. Brunner, and-
 M. Huber, Autonomous quantum thermal machine for generating steady-state entanglement, New Journal of Physics 17, 113029 (2015). [24] P. P. Hofer, M. Perarnau-Llobet, L. D. M. Miranda, G. Haack, R. Silva, J. B. Brask, and N. Brunner, Markovian master equations for quantum thermal machines: local versus global approach, New Journal of Physics 19,

123037 (2017). [25] M. Cattaneo, G. L. Giorgi, S. Maniscalco, and R. Zam-
brini, Local versus global master equation with common and separate baths: superiority of the global approach in partial secular approximation, New Journal of Physics 21, 113045 (2019). [26] A. A. Sokolova, G. P. Fedorov, E. V. Il’ichev, and O. V. Astafiev, Single-atom maser with an engineered circuit for population inversion, Phys. Rev. A 103, 013718 (2021). [27] A. A. Sokolova, D. A. Kalacheva, G. P. Fedorov, and O. V. Astafiev, Overcoming photon blockade in a circuitqed single-atom maser with e-
ngineered metastability and strong coupling, Phys. Rev. A 107, L031701 (2023). [28] N. Jaseem, M. Hajduˇsek, V. Vedral, R. Fazio, L.-C. Kwek, and S. Vinjanampathy, Quantum synchronization in nanoscale heat engines, Phys. Rev. E 101, 020201 (2020). [29] T. Murtadho, J. Thingna, and S. Vinjanampathy, Deriving lower bounds on the efficiency of near-degenerate thermal machines via synchronization, Phys. Rev. A 108, 012205 (2023). [30] Y. Lee Loh and M. Kim, Visualizing spin states using the spin coher-
ent state representation, American Journal of Physics 83, 30 (2015). [31] X. Li, T. Cai, H. Yan, Z. Wang, X. Pan, Y. Ma, W. Cai, J. Han, Z. Hua, X. Han, et al., Tunable coupler for realizing a controlled-phase gate with dynamically decoupled regime in a superconducting circuit, Physical Review Applied 14, 024070 (2020). [32] F. Yan, P. Krantz, Y. Sung, M. Kjaergaard, D. L. Campbell, T. P. Orlando, S. Gustavsson, and W. D. Oliver, Tunable coupling scheme for implementing high-fidelity two-qubit gat-
es, Physical Review Applied 10, 054062 (2018). [33] Y. Sung, L. Ding, J. Braumu¨ller, A. Vepsa¨la¨inen, B. Kannan, M. Kjaergaard, A. Greene, G. O. Samach, C. McNally, D. Kim, A. Melville, B. M. Niedzielski, M. E. Schwartz, J. L. Yoder, T. P. Orlando, S. Gustavsson, and W. D. Oliver, Realization of high-fidelity cz and zzfree iswap gates with a tunable coupler, Phys. Rev. X 11, 021058 (2021). [34] M. Li, G. Xue, X. Tan, Q. Liu, K. Dai, K. Zhang, H. Yu, and Y. Yu, Two-qubit state tomography with ens-
emble average in coupled superconducting qubits, Applied Physics Letters 110, 10.1063/1.4979652 (2017), 132602. [35] J. G. Bohnet, Z. Chen, J. M. Weiner, D. Meiser, M. J. Holland, and J. K. Thompson, A steady-state superradiant laser with less than one intracavity photon, Nature 484, 78 (2012). [36] M. Xu, D. A. Tieri, E. Fine, J. K. Thompson, and M. J. Holland, Synchronization of two ensembles of atoms, Physical review letters 113, 154101 (2014). [37] J. M. Weiner, K. C. Cox, J. G. Bohnet, and J.-
 K. Thompson, Phase synchronization inside a superradiant laser, Phys. Rev. A 95, 033808 (2017). [38] B. Zhu, J. Schachenmayer, M. Xu, F. Herrera, J. G. Restrepo, M. J. Holland, and A. M. Rey, Synchronization of interacting quantum dipoles, New Journal of Physics 17, 083063 (2015). [39] A. Shankar, J. Cooper, J. G. Bohnet, J. J. Bollinger, and M. Holland, Steady-state spin synchronization through the collective motion of trapped ions, Phys. Rev. A 95, 033423 (2017).

18

[40] H. Landa and G. Misguich, Nonlocal correlations in noisy multiqubit systems simulated using matrix product operators, SciPost Phys. Core 6, 037 (2023).
[41] M. L. Bera, T. Pandit, K. Chatterjee, V. Singh, M. Lewenstein, U. Bhattacharya, and M. N. Bera, Steady-state quantum thermodynamics with synthetic negative temperatures (2023), arXiv:2305.01215 [quantph].
[42] J. R. Johansson, P. D. Nation, and F. Nori, QuTiP: An open-source Python framework for the dynamics of open

quantum systems, Computer Physics Communications 183, 1760 (2012). [43] J. P. Dowling, G. S. Agarwal, and W. P. Schleich, Wigner distribution of a general angular-momentum state: Applications to a collection of two-level atoms, Physical Review A 49, 4101 (1994). [44] G. S. Agarwal, Relation between atomic coherent-state representation, state multipoles, and generalized phasespace distributions, Physical Review A 24, 2889 (1981).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:23.985Z
- **Text Length:** 73270 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
