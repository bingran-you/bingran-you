# PDF Document: Vidakovic - 2025 - Quantum Framework for Wavelet Shrinkage.pdf

**File Path:** Vidakovic - 2025 - Quantum Framework for Wavelet Shrinkage.pdf

**Processed Date:** 2026-02-10T18:18:44.606Z

**File Size:** 2053.50 KB

**Total Pages:** 25

**Extracted Pages:** 25

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3471

**Title:** Quantum Framework for Wavelet Shrinkage

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Quantum Framework for Wavelet Shrinkage
Brani Vidakovic
Department of Statistics, Texas A&M University, College Station, TX, USA
Abstract
This paper develops a unified framework for quantum wavelet shrinkage, extending clas
sical denoising ideas into the quantum domain. Shrinkage is interpreted as a completely
positive trace preserving process, so attenuation of coefficients is carried out through con
trolled decoherence rather than nonlinear thresholding. Phase damping and ancilla driven
constructions realize this behavior coherently and show that statistical adaptivity and quan
tum unitarity can be combined within a single circuit model. The same physical mechanisms
that reduce quantum coherence, such as dephasing and amplitude damping, are repurposed
as programmable resources for noise suppression. Practical demonstrations implemented
with Qiskit illustrate how circuits and channels emulate coefficientwise attenuation, and all
examples are provided as Jupyter notebooks in the companion GitHub repository. Encod
ing schemes for amplitude, phase, and hybrid representations are examined in relation to
transform coherence and measurement feasibility, and realizations suited to current noisy
intermediate scale quantum devices are discussed. The work provides a conceptual and
experimental link between wavelet based statistical inference and quantum information pro
cessing, and shows how engineered decoherence can act as an operational surrogate for
classical shrinkage.
1 Introduction
Wavelet shrinkage (Donoho & Johnstone, 1994, 1995; Nason, 1996; Chipman et al., 1997; Vi
dakovic, 1998) is a cornerstone of nonparametric signal estimation. A noisy signal is expanded
in an orthogonal wavelet basis, where the coefficients represent local fluctuations across scales.
Most coefficients are dominated by noise, while a few capture essential structural information.
By attenuating small coefficients and retaining the large ones, shrinkage rules yield adaptive
estimators that preserve edges and discontinuities while achieving near-minimax performance
across broad smoothness classes. This balance between localization, adaptivity, and statistical
optimality has made wavelet shrinkage a central paradigm in statistical signal processing.
Quantum computation provides a fundamentally new substrate for such operations. In this
setting, data are encoded not as classical vectors but as quantum states. Under amplitude
encoding, a signal x ∈ RN is mapped to the normalized state
|x⟩ = 1
∥x∥
N −1
X
j=0
xj|j⟩, (1)
1
arXiv:2511.19855v1 [quant-ph] 25 Nov 2025

and an orthogonal wavelet transform W becomes a unitary operator UW satisfying
UW |x⟩ = |W x⟩. (2)
The entire multiscale decomposition is thus executed coherently in superposition. The chal
lenge is that denoising, traditionally a nonlinear and dissipative process, must now be expressed
through linear and norm-preserving quantum operations.
Quantum analogues of the wavelet transform were first proposed in the late 1990s, when
Fijany & Williams (1998a,b) and Klappenecker (1999) demonstrated that orthogonal wavelet
transforms can be implemented as unitary circuits acting on quantum registers. Other, more
recent, references include Gosal & Lawton (2001); Püschel et al. (2001); Das et al. (2002), to list
just a few. These studies established that the hierarchical structure of classical discrete wavelet
transforms admits efficient quantum realizations with complexity scaling comparable to that of
the Quantum Fourier Transform. Subsequent developments generalized these constructions to
multi-level and multi-dimensional cases (Li et al., 2018a,b, 2019), revealing that the recursive
subband decomposition inherent in wavelet analysis can be encoded as a sequence of controlled
unitaries acting on amplitude-encoded data. The most recent synthesis by Bagherimehrab &
Aspuru-Guzik (2023) provides a unifying framework for all quantum wavelet transforms via the
linear combination of unitaries (LCU) technique, enabling systematic construction of packet-like
and lifting-scheme wavelets within a quantum algorithmic setting.
Applications of QWTs now extend beyond transform synthesis. García-Mata et al. (2009)
employed the quantum wavelet transform to compute multifractal exponents of quantum states,
illustrating its potential for analyzing structural properties of wave functions. Zhang et al. (2019)
used QWTs for dimension reduction, where the wavelet basis served as a multiresolution sub
space projection on amplitude-encoded vectors. The low-frequency subband was retained as a
compressed representation, effectively halving the Hilbert-space support per decomposition level
while preserving most of the signal energy. Further advances include a lifting-based quantum in
teger wavelet transform by Chaurra Gutiérrez et al. (2023) and the implementation of quantum
wavelet-based denoising on physical platforms by Ma et al. (2024), both signaling the transi
tion of QWTs from theoretical constructs to executable quantum routines. While these works
establish the theoretical and algorithmic basis of quantum wavelet transforms, none addresses
how nonlinear shrinkage or denoising could be realized within a physically consistent quantum
framework. The Stinespring dilation results, in our context eauivalent to Kraus representa
tions (Stinespring, 1955; Kraus, 1971; Choi, 1975; Lindblad, 1976) provide a natural language
for incorporating controlled decoherence or amplitude damping as a surrogate for thresholding,
and ancilla-assisted operations offer a mechanism to implement nonlinear attenuation through
completely positive trace-preserving (CPTP) maps (Geller, 2024). Yet, the existing literature
treats the QWT as a strictly linear unitary transform, with no integration of channel-based or
ancilla-driven shrinkage models. The absence of such nonunitary extensions defines an open
frontier in wavelet based quantum signal analysis.
The present work develops a coherent framework for quantum wavelet shrinkage, where sparse
signal estimation is achieved through unitary wavelet transforms followed by channel-based or
2

ancilla-driven attenuation. We construct forward and inverse quantum wavelet transforms as
unitary operations, review circuit-level realizations inspired by the classical fast wavelet trans
form, and examine Givens-based decompositions (Givens, 1958) suitable for near-term hardware.
We then introduce three complementary mechanisms for quantum shrinkage: (i) ancilla-driven
CPTP channels that emulate thresholding and smooth shrinkage; (ii) damping-based channels
that implement shrinkage through controlled decoherence; and (iii) hybrid quantum–classical
schemes that reproduce blockwise or adaptive behavior through shallow entangling layers and
post-measurement processing.
By integrating these components, the framework connects classical adaptivity with quantum
coherence. Sparsity and coherence, rather than conflicting, emerge as complementary aspects of
information representation. The subsequent sections formalize these ideas, beginning with the
unitary construction of quantum wavelet transforms and progressing to channel-based shrinkage
models and their implementations on noisy intermediate-scale quantum (NISQ) hardware.
2 Quantum Forward and Inverse Wavelet Transforms
Wavelet transforms in the quantum domain can be realized through several complementary
constructions that strike a balance between algebraic rigor, circuit depth, and hardware feasi
bility. A straightforward option compiles the entire orthogonal wavelet transform into a single
unitary that reproduces the full matrix exactly. An alternative approach emphasizes modu
larity, decomposing the operation into shallow layers of permutations and local rotations that
mimic the classical fast wavelet transform (FWT). This includes expressing the transform as
a structured sequence of Givens rotations directly matching the native gate sets of quantum
processors. All approaches preserve orthogonality while trading off synthesis cost, circuit depth,
and adaptability to different wavelet families.
Let W ∈ RN×N denote an orthogonal wavelet transform acting on a signal of length N . In
the quantum setting, a real vector x ∈ RN is encoded as
|x⟩ = 1
∥x∥
N −1
X
j=0
xj |j⟩,
and the quantum wavelet transform (QWT) is a unitary UW satisfying
UW |x⟩ = |W x⟩, (3)
U†
W |y⟩ = |W ⊤y⟩. (4)
This mapping executes the entire multiscale decomposition coherently across superposition. For
Daubechies, Coiflet, or Symlet families, it is defined by compactly supported quadrature mirror
filters (Vidakovic, 1999, pp. 115-116). Classically, the FWT computes W x through cascades of
convolution and decimation in O(N ) time; the quantum task is to realize the same operation as
an efficient unitary transformation acting on amplitudes.
3

2.1 Direct Implementation as a Unitary Gate
The most direct realization of a QWT treats the full orthogonal wavelet matrix W itself as a
unitary operator. Because every real orthogonal matrix satisfies W ⊤W = I, it defines a legiti
mate quantum gate UW acting as UW |ej⟩ = |W ej⟩. The transformation is executed coherently
in a single step, with the inverse obtained immediately from U †
W = UW ⊤. This formulation is
algebraically exact, perfectly reversible, and independent of auxiliary control or permutations,
providing a reference for verifying more modular or approximate circuits.
The limitation is the synthesis cost. Decomposing a dense N × N matrix into native one
and two-qubit gates grows rapidly with N and with filter length, particularly for long-support
Daubechies or Symlet filters. Each choice of wavelet requires recompilation because the en
tries of W depend explicitly on its coefficients. Nevertheless, the compiled unitary serves as
a mathematically pristine baseline. On simulators and future fault-tolerant devices, it offers
the most faithful realization of a QWT, single unitary gate embodying the entire orthogonal
transformation.
Example 2.1. This first example, featured in the Jupyter notebook QWShrink01.ipynb, demon
strates that an orthogonal discrete wavelet transform can be expressed exactly as a single uni
tary quantum gate acting on amplitude-encoded data. The notebook constructs the Daubechies
DAUB2 wavelet transform (equivalent to the Haar transform but parameterized through the
canonical Daubechies filter coefficients) as an 8 × 8 matrix applied to a three-qubit state vector.
The input sequence, as in Vidakovic (1999, p.113, Example 4.3.1), is transformed by this
unitary operator through two decomposition levels, producing approximation and detail coeffi
cients identical to those obtained by Mallat’s classical pyramid algorithm. The notebook con
firms numerical equality between the classical and quantum results, verifying that the UDaub2
gate preserves orthogonality and energy exactly.
Conceptually, this example establishes the foundational link between classical wavelet ma
trices and quantum unitaries: every orthogonal wavelet transform can be implemented as a
reversible quantum operation. Subsequent examples in QWShrink02–06.ipynb build upon this
by embedding shrinkage and channel dynamics into the same framework.
2.2 Modular Quantum Realization via Filterbank Structure
A more hardware-efficient construction mirrors the classical fast wavelet transform and the
organization of the quantum Fourier transform. Here UW is composed of alternating permutation
and rotation layers that act locally on subsets of qubits. Each permutation, such as a perfect
shuffle or bit-reversal, is itself unitary and implemented efficiently by swap networks (Fijany &
Williams, 1998a). These layers rearrange basis states between scales so that adjacent coefficients
are paired for filtering.
Local rotations then perform the filtering. In the Haar case, the averaging and differencing
steps correspond to 2 × 2 rotations acting on the subspaces {|2k⟩, |2k + 1⟩}. For more general
wavelets, the compactly supported filters give rise to 2 × 2 or 4 × 4 unitaries whose entries are
determined by low-pass and high-pass coefficients. Such unitaries can be further decomposed
4

q0
q1
q2
0
1
2
[0.224, 0, 0.671, 0.447, 0.224, 0, 0.224, 0.447]
|
0
1
2
DAUB2_W
statevector
Fig. 1: Quantum implementation of the Daubechies DAUB2 wavelet transform as a single 8 × 8
unitary operation. The input sequence is amplitude-encoded into three qubits and transformed
through two levels of decomposition. The resulting approximation and detail coefficients coincide
exactly with those obtained by the classical wavelet-matrix and Mallat algorithms as in the
example on pages 116-117 of Vidakovic (1999), confirming the correctness and unitarity of the
quantum realization.
into products of Givens rotations (Givens, 1958; Høyer, 1997; Fijany & Williams, 1998b). By
combining these rotations with lightweight arithmetic for lifting-scheme predict–update steps,
one obtains a modular ladder of blocks forming the complete UW . Because many local gates
act on disjoint qubit pairs, substantial parallelism is achievable, and the circuit depth scales
polylogarithmically with N . This design thus provides an analytically transparent and hardware
aligned path to scalable quantum wavelet transforms.
2.3 Givens-Based Quantum Wavelet Transforms
An even more structured representation is obtained by expressing W as a product of elementary
plane rotations, or Givens rotations (Givens, 1958). Any orthogonal matrix W ∈ RN×N can be
written as
W=
K
Y
k=1
G(ik, jk, θk),
where each G(i, j, θ) acts as identity except on span{ei, ej}, performing
G(i, j, θ)[i,j] = cos θ − sin θ
sin θ cos θ
!
.
Each such two-level rotation is a native unitary operation on today’s quantum hardware, allowing
direct physical realization. In this factorization, the Haar transform is a single rotation with
θ = π/4, and multi-level Haar transforms apply it in parallel to all disjoint pairs, followed by
simple permutations that encode scale separation. More complex families (Daubechies, Symlets,
Coiflets) yield small orthogonal blocks—typically 4 × 4 or 6 × 6, each decomposable into a few
Givens rotations determined by the corresponding filter coefficients. The resulting QWT is
a coherent cascade of local rotations interleaved with permutation gates, forming a reversible
multiresolution hierarchy within the register. Because filter supports are short, the number of
required rotations grows linearly with filter length and only logarithmically with signal size,
5

maintaining low circuit depth while exactly preserving orthogonality. The Givens approach to
quantum wavelet transform is featured in QWShrink03.ipynb notebook.
2.4 Complexity and Practical Considerations
State preparation remains a dominant cost in quantum signal processing, since encoding x into
amplitudes is typically O(N ). Once prepared, however, both modular and Givens-based cir
cuits achieve polylogarithmic depth for structured transforms, similar to the quantum Fourier
transform. Inversion is immediate because U †
W is simply the reversed circuit with conjugated ro
tation angles. This reversibility is crucial for denoising applications, where the inverse transform
reconstructs a state |x ̃⟩ after shrinkage in the wavelet domain.
Haar transforms admit extremely compact implementations using pairwise rotations and
swaps. Longer-support wavelets require additional routing but remain feasible with structured
decompositions (Li et al., 2018b, 2019; Nakahira, 2021; Bagherimehrab & Aspuru-Guzik, 2023).
Linear-combination-of-unitaries methods provide a general mechanism for embedding arbitrary
orthogonal matrices, though they usually entail a higher synthesis cost. Among the approaches
discussed, the direct-unitary construction offers algebraic precision, the modular design ensures
a scalable structure, and the Givens-based formulation aligns best with current hardware ca
pabilities. Together, they span a flexible spectrum of strategies for implementing forward and
inverse quantum wavelet transforms on near-term and fault-tolerant platforms.
3 Quantum Realizations of Wavelet Shrinkage
Classical wavelet shrinkage relies on nonlinear attenuation of noisy coefficients, a process that is
straightforward in the classical domain but nontrivial to implement within the linear and unitary
framework of quantum mechanics. To translate shrinkage into the quantum setting, one must
reconcile three ingredients: the preservation of coherence, the physical constraints of quantum
operations, and the adaptive suppression of noise-dominated coefficients. These considerations
lead naturally to three distinct paradigms for quantum shrinkage, each grounded in a different
physical mechanism and each suited to different hardware regimes.
The first paradigm uses ancilla-driven completely positive and trace preserving channels.
Here, shrinkage is realized by embedding a nonunitary map inside a larger coherent unitary
acting on an extended system, with attenuation emerging only when the ancilla is traced out.
This approach is mathematically exact and fully reversible prior to taking the trace, and it
allows fine-grained control over the amount of suppression applied to each coefficient.
The second paradigm exploits controlled decoherence, in which hardware-native phase damp
ing serves as a direct physical surrogate for shrinkage. Coherence in selected directions is atten
uated by a known factor determined by the device’s noise parameters. This strategy is simple,
economical in qubits, and aligned with near-term hardware, though it is inherently irreversible
once the phase information is lost.
The third paradigm consists of hybrid and alternative schemes. These include weak mea
surement, shallow entangling layers, feedback-controlled attenuation, and probabilistic uncom
6

putation. Such methods preserve partial coherence while still enabling effective suppression of
small coefficients. They require minimal additional resources and are particularly suitable for
NISQ-era processors where circuit depth and coherence time are limited.
Together, these three approaches form a coherent framework for quantum wavelet shrinkage.
They illustrate how the nonlinear idea of classical thresholding can be reformulated within
quantum mechanics, with attenuation arising from coherent dilation, controlled decoherence, or
adaptive hybrid dynamics depending on the physical capabilities of the device.
3.1 Ancilla-Driven CPTP Shrinkage
Classical wavelet denoising modifies noisy coefficients through nonlinear shrinkage rules Sλ(·)
such as thresholding or smooth shrinkage policies (Donoho & Johnstone, 1994, 1995; Vidakovic,
1999; Vidakovic & Ruggeri, 2001). These rules suppress small coefficients and preserve large
ones, but they do so through an irreversible and nonlinear transformation. A single quantum
unitary cannot produce such an effect, since unitaries preserve norms and do not dissipate
amplitude. If shrinkage is to be carried out in a quantum setting, it must arise as a physically
valid quantum operation, and this leads naturally to completely positive and trace preserving
maps implemented through Stinespring dilations.
CPTP maps and Kraus operators. A CPTP map E acting on a system S may always be
expressed in Stinespring form (Stinespring, 1955). One introduces an ancilla or environment
E, prepares it in a fixed pure state, applies a joint unitary evolution, and discards the ancilla.
This beautifully simple picture captures how irreversible behavior arises from reversible quantum
mechanics. The Stinespring representation is
E(ρS) = TrE
h
USE (ρS ⊗ |0⟩⟨0|E) U †
SE
i
, (5)
where USE is a unitary on S ⊗ E and the partial trace removes the ancilla. The irreversible
behavior of E comes entirely from ignoring the ancilla after the interaction.
To make this expression more concrete, suppose {|ej⟩E}dE−1
j=0 is an orthonormal basis for the
ancilla. The Kraus operators associated with E are
Kj = ⟨ej| USE |0⟩E, j = 0, . . . , dE − 1, (6)
which satisfy the completeness condition
dE −1
X
j=0
K†
j Kj = I. (7)
The map itself becomes
E(ρS) =
dE −1
X
j=0
Kj ρSK†
j . (8)
7

Each Kraus operator represents how the system evolves conditioned on the ancilla ending in
a particular state |ej⟩E. In the context of shrinkage, we craft a pair of Kraus operators that
contract the transverse Bloch components while leaving the longitudinal component untouched,
which is exactly how classical smooth shrinkage behaves on the hidden states represented by
wavelet coefficients.
Ancilla-driven implementation for wavelet coefficients. In a quantum wavelet trans
form, each coefficient dj is encoded as a small state ρj on the coefficient register. To introduce
shrinkage in a gentle and quantum-consistent way, we let ρj interact with a fresh ancilla prepared
in |0⟩E. Only the basis state |j⟩S triggers a rotation on the ancilla. This very local and targeted
interaction creates a small amount of entanglement. When we discard the ancilla, the remaining
effect on ρj becomes a CPTP map that acts like shrinkage.
The controlled transformation is
|j⟩S|0⟩E 7−→ |j⟩S
√sj |0⟩E + p1 − sj |1⟩E , 0 ≤ sj ≤ 1,
while all other basis states of the coefficient register leave the ancilla unchanged. The parameter
sj becomes the amount of shrinkage imposed on the jth coefficient.
After this interaction, we discard the ancilla. The resulting action on the coefficient register
is
Ej(ρj) = sj ρj + (1 − sj) Z ρj Z, (9)
where Z is the Pauli Z operator. A convenient Kraus representation is
K0 = √sj I, K1 = p1 − sj Z,
with K†
0K0 + K†
1K1 = I as required. In geometric terms, the longitudinal Bloch component
remains unchanged while the transverse components are contracted. This contraction is exactly
the type of continuous shrinkage that classical soft thresholding performs. Smaller values of sj
correspond to stronger attenuation.
Unitary representation and control angles. The joint unitary that gives rise to the chan
nel (9) satisfies a compact expression. Let XE denote the Pauli X acting on the ancilla. Then
USE = exp
h
−i
X
j
θj |j⟩⟨j|S ⊗ XE
i
, (10)
where the rotation angle θj determines the shrinkage strength. The relationship
sj = cos2(θj) (11)
8

connects the two. By choosing θj to depend on the wavelet scale or position, one recovers
traditional levelwise or blockwise shrinkage strategies. The important point is that all evolution
is coherent until the ancilla is traced out. The nonlinearity enters only at that last step, just as
it should.
This ancilla-driven scheme requires one ancilla per coefficient, or one per block of coefficients
if the same shrinkage level is applied across a block. The method also needs controlled rotations
whose angles depend on the coefficient index. Although this introduces overhead, it yields a
principled and physically compatible quantum mechanism for shrinkage. All operations remain
linear and unitary on an enlarged space, and the nonlinearity appears only upon tracing out the
ancilla, which is exactly how CPTP maps arise in quantum mechanics.
3.2 Controlled Decoherence as Shrinkage Surrogate
A more hardware-aligned alternative uses intrinsic noise channels as computational primitives.
The phase-damping (pure dephasing) channel acts on a single-qubit density matrix ρ as
Eγ(ρ) = K0ρK†
0 + K1ρK†
1, K0 =
"
10
0 √1 − γ
#
, K1 =
"
00
0 √γ
#
,
where γ ∈ [0, 1] is the dephasing strength (Nielsen & Chuang, 2010; Lidar & Brun, 2013). In
Bloch-vector form (x, y, z), this yields
(x, y, z) 7→ (p1 − γ x, p1 − γ y, z),
so that coherence in the xy-plane is reduced by √1 − γ while populations remain unchanged. If
a coefficient di is encoded as ⟨Xi⟩ = xi, then
⟨Xi⟩after = p1 − γi ⟨Xi⟩before = p1 − γi xi. (12)
Thus, the transformation
xi 7−→ p1 − γi xi
acts as multiplicative shrinkage. Choosing γi in (12) as a function of |xi| emulates classical hard
thresholding, γi = 1(|xi| ≤ λ), or for a smooth rule, γi = 1 − exp(−α|xi|) or γi = cos π
2 |x|α
(as in Fig.3 for α = 4).
This mechanism is physically transparent and very easy to implement on current hardware,
since dephasing is a native noise process and already acts as a legitimate CPTP channel on
the data qubit. No ancillary systems are required to generate the shrinkage itself, because the
attenuation factor √1 − γ arises directly from genuine decoherence rather than from tracing out
a larger coherent system. If an ancilla appears in circuit diagrams for this method, it functions
only as a classical control line that selects when the dephasing channel is applied, not as a
subsystem whose trace produces the CPTP map. The approach integrates naturally with a
quantum wavelet transform circuit and is attractive for near-term devices. At the same time,
it is fundamentally irreversible: once phase information is lost, it cannot be recovered. Thus,
although controlled dephasing provides a simple and hardware-aligned surrogate for classical
shrinkage, it lacks the full reversibility, precision, and tunability of the ancilla-driven model.
9

Example 3.1. This example illustrates how a simple phase damping channel can reproduce
both a hard type thresholding rule and a smooth shrinkage rule, using only a small register
of three qubits. No ancilla qubits are used. The starting point is the coefficient vector d =
(2, 1, 9, 0, 3, −10, 2, 4), which is first rescaled affinely to the interval [−1, 1]. The rescaled values
di serve as target expectations ⟨X⟩ for single qubits. Each value di is encoded into a three
qubit product state as follows. All qubits are prepared in |+⟩⊗3, and then a rotation Rz(φi)
with cos(φi) = di is applied to every qubit. After this step the ideal expectation of the Pauli
X operator on each qubit equals di, and the average over the three qubits recovers di up to
sampling noise.
For the hard type threshold we fix λ = 0.4 on the rescaled scale and define the coefficientwise
phase damping parameter γi = 1(|di| ≤ λ). Large coefficients experience no decoherence, while
small coefficients are fully dephased. The phase damping channel with parameter γi is applied
independently to each qubit. The circuit is closed with another layer of Hadamard gates and
measurement in the computational basis. The empirical average of ⟨X⟩ over the three qubits
and many shots yields the observed shrunk coefficient. Ideally, the channel transforms ⟨X⟩ as
⟨X⟩ 7→ p1 − γi ⟨X⟩,
so in this binary case the theoretical output is either di (when |di| > λ) or 0 (when |di| ≤ λ). The
first accompanying figure shows the original rescaled coefficients, the simulated shrunk values,
and the ideal hard threshold profile that keeps only those entries with |di| > λ, as in Fig. 2.
In the second panel the discontinuous threshold is replaced by a smooth shrinkage rule, again
without ancilla. The phase damping parameter is chosen as
γi = cos4 π
2 |di| ,
so that γi is close to 1 near the origin and approaches 0 as |di| approaches 1. Under this channel
the ideal transformation of the encoded expectation is
di 7→ p1 − γi di,
which continuously attenuates smaller coefficients while leaving the large ones approximately
unchanged, as in Fig.3
The circuit is the same as before, and the measured curve follows the theoretical profile with
small perturbations due to shot noise. The second figure shows the original coefficients, the ideal
curve √1 − γi di, and a simulated measurement trace.
These two constructions, featured in QWShrink07.ipynb, demonstrate that by encoding co
efficients into ⟨X⟩ and selecting suitable phase damping parameters γi one can realize both an
abrupt hard threshold rule and a smooth shrinkage rule as completely positive trace preserving
maps on a small register. The implementation is ancilla free and uses only local Kraus channels
acting on the data qubits.
3.3 Hybrid and Feedback-Assisted Shrinkage Mechanisms
Between the fully coherent ancilla-driven CPTP model and the hardware-native dephasing sur
rogate lies a wide middle ground of hybrid techniques. These strategies use weak measurement,
10

Fig. 2: Phase-based thresholding map in the quantum wavelet framework. We start with wavelet
coefficients d = [2, 1, 9, 0, 3, −10, 2, 4] and rescale them to [−1, 1]. This short sequence of classical values
is used throughout this paper to zoom on the local action of wavelet shrinkage. The compact example
makes each step of the transformation easy to follow, while the same procedures apply without difficulty
to sequences of length in the thousands. Each rescaled wavelet coefficient undergoes a phase rotation
determined by its magnitude, producing an effective thresholding rule in which small coefficients are
strongly displaced toward destructive interference while large coefficients remain nearly unchanged. The
resulting mapping provides a fully unitary realization of coefficient shrinkage.
Fig. 3: Soft-shrinkage behavior emerging from phase-controlled attenuation. The plot relates the input
and output amplitudes under the phase-driven rule, showing a smooth contraction that parallels the
classical soft-threshold function. This unitary realization anticipates the probabilistic shrinkage of later
Kraus and CPTP channel formulations as in Subsection 3.2.
partial feedback, or shallow entangling layers to achieve controlled attenuation while still preserv
ing some degree of quantum coherence. They are flexible, intuitive, and particularly attractive
for NISQ-era demonstrations, where one often wishes to temper the strength of decoherence
without relying on large numbers of ancillary qubits or deep circuits.
11

Weak measurement. A weak measurement extracts only partial information about a coeffi
cient observable Aj and therefore avoids a full projective collapse. This permits a gentle, tunable
form of shrinkage. A simple model is
ρj 7−→ (1 − η)ρj + η MjρjM †
j,
where η ∈ [0, 1] controls the measurement strength and Mj is the corresponding measurement
operator (Aharonov et al., 1988; Jacobs, 2014). When η is small, the state remains largely
coherent and only slightly nudged toward the measurement outcome; when η approaches one, the
operation approaches a full projection. By selecting η as a function of the estimated noise level or
coefficient magnitude, small coefficients experience stronger partial collapse and large coefficients
remain nearly untouched. In this way, weak measurement provides a quantum analogue of soft
thresholding: it interpolates smoothly between identity and strong suppression without fully
sacrificing coherence.
Example 3.2. To illustrate the effect of quantum wavelet shrinkage, the accompanying note
book QWShrink05.ipynb generates the Donoho–Johnstone Doppler test-signal and applies con
trolled noise with SNR of 7. The quantum denoising step is implemented as a CPTP channel
that attenuates wavelet coefficients coherently, emulating soft thresholding in a quantum setting.
The notebook visualizes three signals: the original (clean) Doppler, its noisy counterpart, and
the reconstruction obtained by the CPTP channel. These results demonstrate how the method
described in Section 3.1 achieves effective denoising while maintaining the oscillatory structure
of the Doppler signal.
Fig. 4: Comparison of classical soft thresholding with CPTP-based shrinkage. The clean Doppler
signal, its noisy version, the reconstruction via classical soft thresholding, and the reconstruction via
CPTP attenuation of wavelet coefficients are shown. The CPTP method uses ancilla-0 diagonal scaling
to impose coefficientwise attenuation that mimics soft shrinkage while remaining physically admissible
as a quantum channel. The construction of the CPTP shrinkage channel is described in Section 3.1.
The present CPTP formulation expresses shrinkage directly as a density–matrix attenuation
channel, rather than as a sum of explicit operator actions. This abstraction allows parameterized
control of the shrinkage strength and provides a convenient bridge between physical realization
and statistical modeling.
Figure 5 illustrates how CPTP attenuation channel redistributes probability between the data
register and the ancillary system. The blue curve (pre) represents the diagonal elements of the
12

Fig. 5: Ancilla-0 diagonal probabilities before and after CPTP attenuation. The plot displays the
first 200 indices of the diagonal of the reduced density matrix associated with ancilla outcome zero. The
post-attenuation curve shows the multiplicative action of the CPTP channel, confirming that the channel
scales each coefficient level according to the prescribed attenuation factors.
reduced density matrix corresponding to the ancilla state |0⟩ before the channel acts—essentially
the undisturbed, pre-interaction population, which is nearly uniform because the ancilla is ini
tialized in |0⟩. The orange curve (post) shows the same probabilities after the CPTP map has
been applied. Their difference quantifies the local strength of shrinkage: where the orange curve
dips below the blue, probability amplitude has been transferred from the signal register to the
ancilla’s |1⟩ state, indicating stronger damping of the corresponding wavelet coefficients. This
visualization provides an internal diagnostic of how the quantum channel enacts shrinkage across
the coefficient index space.
Neighborhood mixing. Another hybrid approach uses shallow entangling layers to mix
neighboring coefficients prior to any measurement or decoherence step. A simple mixing unitary
is
Umix(α) =
Y
j
exp − iα (XjXj+1 + YjYj+1) ,
which produces effective coefficients of the form d ̃j ≈ dj + α(dj−1 + dj+1) when α is small.
This creates local correlations and spreads information among adjacent wavelet coefficients.
Classical shrinkage or thresholding applied to the mixed coefficients d ̃j then mimics block or
neighborhood-based shrinkage methods (Cai, 1999; Vidakovic, 1999). The important point is
that coherence is preserved throughout the mixing stage; the only irreversible step appears at
the final classical or measurement stage, giving this method a pleasant hybrid character.
Example 3.3. This example introduces smooth probabilistic ancilla shrinkage in which each
coefficient is attenuated according to a data-dependent probability pi, producing the trans
formation xi 7→ pixi. While the method does not explicitly mix neighboring coefficients, it
represents the same intermediate regime: attenuation is nonunitary but remains smooth and
13

adaptive, and coherence is only partially lost. Here, the shrinkage law f (x) can be viewed as a
target amplitude-damping profile, suitable for later realization via CPTP or Kraus channels. It
represents a deterministic shrinkage design stage rather than a physical quantum process.
Fig. 6: Panel (a) shows the application of the mapping f (x) = sign(x)|x|γ with γ = 1.8 to a representa
tive signal, producing gradual amplitude damping that preserves large features while suppressing small
ones. Panel (b) depicts the shrinkage rule itself, illustrating how the power parameter γ controls the
curvature and smoothness of the attenuation.
Feedback and postselection. A more dynamic mechanism combines weak measurement with
conditional unitary rotations. A general feedback map takes the form
ρj 7−→
X
m
Rm Mmρj M †
mR†
m,
where Mm are weak measurement operators and Rm are conditional rotations applied after each
outcome (Wiseman & Milburn, 2009). This scheme can attenuate small coefficients more ag
gressively by applying stronger corrective rotations in outcomes associated with weaker signal
components. Alternatively, one may employ postselection-based protocols: after a weak inter
action, an ancilla is reset or uncomputed only when a desired outcome is obtained. Although
probabilistic, such non-deterministic schemes approximate nonlinear shrinkage without requir
ing full projective measurement or heavy decoherence. They sit between coherent control and
irreversible suppression, and allow a degree of adaptivity that can be quite useful in small-scale
demonstrations.
Example 3.4. This example featured in QWShrink08.ipynb demonstrates a minimal ancilla
driven implementation of quantum shrinkage, where a secondary qubit acts as a flag that iden
tifies coefficients exceeding a selected threshold. We are back to the short sequence of classical
values [2, 1, 9, 0, 3, −10, 2, 4]. The sequence is first normalized to [−1, 1] and each element is
amplitude-encoded as a rotation on a single-qubit register. The ancilla qubit is condition
ally flipped whenever the magnitude of the encoded coefficient exceeds a preassigned threshold
14

λ = 0.4. Measurement of the ancilla then yields a probability P (flag = 1) indicating whether
the coefficient should be retained or shrunk as in Fig. 7(b)
Running the circuit for each coefficient produces a probabilistic analog of classical hard
thresholding: large coefficients correspond to high ancilla excitation probabilities, while smaller
coefficients are suppressed. The results are visualized in two panels in Fig. 7. The left panel dis
plays the normalized data vector, and the right panel shows the corresponding ancilla-activation
probabilities estimated from 1024 simulated shots using the Qiskit 2.x AerSimulator. To
gether, they provide an explicit example of ancilla-driven shrinkage, in which controlled deco
herence replaces deterministic thresholding.
Fig. 7: (a) Original normalized wavelet coefficients dj obtained from the sequence [2, 1, 9, 0, 3, −10, 2, 4].
The dashed lines at ±λ = 0.4 mark the classical shrinkage thresholds; (b) Ancilla-driven shrinkage
results. The bars indicate the measured probability P (flag = 1) for each coefficient, representing the
likelihood that the coefficient exceeds the threshold. Larger coefficients activate the ancilla more strongly,
illustrating a probabilistic quantum surrogate for hard thresholding.
Example 3.5. In this example (QWShrink09.ipynb), a sequence of normalized coefficients is
processed through a two-qubit circuit in which the ancilla qubit acts as a continuously controlled
attenuator. Unlike the binary activation used for hard thresholding, the ancilla rotation angle
here is proportional to the coefficient magnitude, producing a smooth range of excitation prob
abilities between 0 and 1 (Fig. 8(b)). The resulting expectation value of the ancilla represents a
continuous shrinkage factor that weakens small coefficients and preserves large ones, a quantum
analog of the classical smooth shrinkage rule.
This experiment fits smoothly into the theoretical framework developed in this section. Com
pletely positive trace preserving maps were introduced as coherent substitutes for nonlinear
shrinkage rules, and the ancilla in this example offers a concrete realization of that viewpoint.
Its controlled rotation prepares the desired balance of amplitudes, and the partial measurement
transfers just enough probability to produce a Kraus-weighted attenuation on the main register.
The level of shrinkage is carried directly by the excitation probability of the ancilla. In this
way the smooth shrinkage effect arises naturally from the same physical principles that underlie
quantum decoherence and partial entanglement.
15

Fig. 8: (a) Normalized input coefficients used for smooth thresholding demonstration. The data are
scaled to [−1, 1] prior to amplitude encoding, with dashed lines indicating the nominal shrinkage thresh
old. (b) Ancilla expectation values corresponding to each coefficient. The continuous variation of
⟨Z⟩ancilla between 0 and 1 represents a smooth attenuation curve, analogous to classical smooth shrinkage.
Larger coefficients maintain near-unity ancilla excitation, while smaller ones are progressively suppressed.
(c) Shrunk coefficients.
3.4 Comparative Discussion
The three shrinkage mechanisms form a natural spectrum of quantum realizations for wavelet
attenuation. At one end, the ancilla-driven CPTP construction is mathematically exact and
fully coherent until the ancilla is traced out. It offers precise and tunable shrinkage through
controlled rotations but requires additional qubits and accurate control over multiqubit interac
tions. At the opposite end, phase-damping attenuation relies on the hardware’s native dephasing
channel. It is extremely simple to implement and integrates seamlessly with a quantum wavelet
transform, yet it is fundamentally irreversible and offers less flexibility in shaping the attenu
ation profile. Hybrid strategies occupy the middle ground. They rely on weak measurement,
shallow entangling layers, or feedback-conditioned rotations to introduce controlled suppression
while preserving some degree of coherence. These schemes demand fewer resources than the
ancilla-based model and remain more reversible and tunable than raw decoherence, making
them attractive for NISQ-era experiments.
Taken together, these approaches show how the essence of wavelet shrinkage, namely the
adaptive suppression of noise-dominated coefficients, can be reinterpreted in quantum mechan
ical terms. What is nonlinear in the classical domain becomes linear and trace preserving once
the system is viewed as part of a larger or open quantum environment, and adaptivity arises
naturally through controlled decoherence, weak measurement, or feedback. In this sense, quan
tum wavelet shrinkage highlights a productive intersection of statistical inference and quantum
dynamics: attenuation, coherence, and sparsity become aspects of the same physical principle
when viewed through the lens of quantum operations.
16

4 Encoding Classical Data for Quantum Wavelet Shrinkage
Quantum wavelet shrinkage relies on mappings from classical numerical quantities to quantum
states. The form of this encoding governs which unitaries or channels are natural, how attenua
tion manifests as shrinkage, and how denoised estimates are recovered after measurement (Schuld
& Petruccione, 2018; Biamonte et al., 2017). In classical denoising, wavelet coefficients are ex
plicit numerical scalars; in the quantum domain they become amplitudes, phases, or expectation
values of qubit states. This section, which follows the development of quantum shrinkage mech
anisms in Section 3 clarifies how encoding interacts with the ancilla-driven, decoherence-driven,
and hybrid methods introduced earlier, and how these encodings are implemented in the some
of the examples.
Amplitude Encoding. Amplitude encoding maps a real or complex vector x = (x0, . . . , xN−1)
into a normalized quantum state
|x⟩ = 1
∥x∥
N −1
X
j=0
xj|j⟩, (13)
so that each data component appears as a quantum amplitude (Schuld & Petruccione, 2018;
Biamonte et al., 2017). If UW is the unitary implementing an orthogonal wavelet transform W ,
then
UW |x⟩ = |W x⟩, (14)
and the wavelet coefficients are again stored as amplitudes.
This encoding aligns directly with the coherent mechanisms described in Sections 3.1 and 3.3,
since orthogonal matrices lift naturally to unitary operators. It is therefore well suited for
ancilla-driven or Kraus-based CPTP shrinkage, where attenuation is achieved through coherent
unitary interactions on an extended Hilbert space. Challenges include the global normaliza
tion constraint P
j |xj|2 = 1 and the fact that amplitude measurement is destructive. As a
result, amplitude encoding is most powerful when shrinkage is performed coherently and the full
quantum state is preserved until the final readout.
In the ancilla-driven CPTP setting, attenuation factors sj act multiplicatively on amplitudes:
|j⟩|0⟩a 7→ |j⟩ √sj|0⟩a + p1 − sj|1⟩a , (15)
so that discarding the ancilla produces the effective transformation xj 7→ √sj xj. This realizes
wavelet shrinkage as a coherent dilation followed by a trace, in full agreement with the CPTP
formulation of Section 3.1.
Phase or Expectation-Value Encoding. A different representation stores numerical coeffi
cients in expectation values of observables such as Pauli operators. For a scalar xi ∈ [−1, 1], one
prepares a one-qubit state |ψi⟩ satisfying
⟨ψi|X|ψi⟩ = xi, (16)
17

where X is the Pauli X operator. Starting from |+⟩ and applying
Rz(φi) = exp −i φi
2 Z , φi = arccos(xi), (17)
produces ⟨X⟩ = xi. The coefficient is thus encoded in a relative phase.
Expectation encoding interacts naturally with the phase-damping mechanism developed in
Section 3.2. A phase-damping channel transforms Bloch coordinates as
(xi, yi, zi) 7→ (p1 − γi xi, p1 − γi yi, zi), (18)
yielding the contraction
⟨X⟩after,i = p1 − γi xi. (19)
This is exactly the multiplicative shrinkage rule that underpins decoherence-based attenuation,
and it connects directly to the controlled-dephasing. Because each coefficient resides on a sepa
rate qubit, shrinkage can be applied in parallel with scale- or location-dependent strengths.
The main limitation is that global transforms such as UW cannot be directly applied when
coefficients are encoded independently. Even so, expectation encoding is experimentally sim
ple, avoids global normalization issues, and provides a direct route to empirical calibration of
shrinkage via X-basis readouts.
Example 4.1. To make the phase encoding construction more concrete, we consider a signal
from previous examples,
y = (2, 1, 9, 0, 3, −10, 2, 4). (20)
The signal is rescaled into the interval [−1, 1] resulting in a vector (d0, . . . , d7). The dj serve as
the classical inputs that control the phases.
Phase encoding is implemented as a diagonal unitary on the computational basis. We first
prepare a reference state on n = 3 qubits, for example, the uniform superposition
|ψ0⟩ = 2−3/2
7
X
j=0
|j⟩. (21)
Given a scale parameter α > 0, we associate to each coefficient dj a phase
φj = αdj, (22)
and define the phase encoding unitary by
Uφ|j⟩ = eiφj |j⟩, j = 0, . . . , 7. (23)
In the circuit this is realized by a collection of controlled Rz rotations or phase gates that
implement the diagonal operator Uφ in Qiskit. Applying Uφ to |ψ0⟩ produces the encoded state
|ψin⟩ = Uφ|ψ0⟩ = 2−3/2
7
X
j=0
eiφj |j⟩, (24)
18

which now carries the information in y entirely in the phases of the computational basis com
ponents.
To model shrinkage through decoherence we pass each qubit of |ψin⟩ through the phase
damping channel Φγ with Kraus operators given in (6). The resulting density matrix is
ρout = Φ⊗3
γ |ψin⟩⟨ψin| , (25)
and the attenuation of coherence appears as a multiplicative factor on the off diagonal entries
of ρout compared with |ψin⟩⟨ψin|.
In the notebook QWShrink12.ipynb we summarize the effect of phase damping through
simple observables. For example, we look at the expectation of a Pauli operator X on the first
qubit,
mbefore = ⟨ψin|X ⊗ I ⊗ I|ψin⟩, (26)
mafter = tr ρout X ⊗ I ⊗ I . (27)
For the phase damping channel these expectations satisfy a relation of the form
mafter ≈ s(γ) mbefore, (28)
where s(γ) is a shrinkage factor that depends on the decoherence strength γ.
Fig. 9: Normalized wavelet coefficients dj obtained from the sequence [2, 1, 9, 0, 3, −10, 2, 4]. This exam
ple shows, in a very explicit and low dimensional setting, how phase encoding of a fixed signal together
with phase damping implements a smooth shrinkage of phase based information.
Hybrid and Mixed Encodings. Between amplitude and expectation encoding lies a family
of hybrid schemes that allow wavelet transforms and shrinkage channels to be implemented in
complementary domains. One approach applies the wavelet transform in amplitude encoding
19

and then transfers coefficients into expectation encoding before shrinkage. If UW |x⟩ = |d⟩ =
P
j dj|j⟩, one prepares states |ψj⟩ satisfying ⟨X⟩ψj = dj and applies attenuation independently
across qubits. This hybrid interface is especially useful in NISQ-era protocols where global
unitaries are feasible but CPTP shrinkage is easier to apply locally.
Another hybrid representation encodes magnitude and sign separately: the magnitude |xj|
is stored as an amplitude, while the sign is stored as a relative phase,
|x⟩ = 1
∥x∥
X
j
|xj| |0⟩ + eiπ(1−sgn(xj))|1⟩ |j⟩. (29)
Amplitude damping then regulates magnitudes while dephasing stabilizes or regularizes sign
fluctuations. This representation aligns naturally with Bayesian or SPoM-type shrinkage rules,
where both magnitude and sign uncertainty influence the amount of attenuation.
Amplitude encoding supports global unitary transforms and ancilla-driven CPTP shrinkage;
expectation encoding aligns with localized decoherence-based attenuation; hybrid schemes com
bine the advantages of both. The encoding strategy should therefore be matched to the desired
level of coherence preservation and the quantum resources available. For a broader perspec
tive on encoding choices and noise-aware simulation, see Yuan et al. (2022). Together, these
approaches form a coherent interface between classical signal representation, physical quantum
channels, and statistical inference in quantum wavelet shrinkage.
5 Hardware Realizability and NISQ Constraints
The shrinkage mechanisms developed in Sections 3.1–3.3 can be simulated directly in Qiskit
2.x or Aer, where Kraus operators for channels such as phase damping or amplitude damping
may be applied programmatically. On real hardware, however, arbitrary Kraus maps are not
native operations (as discussed with Nick Broon, from IBM). Present devices provide only uni
tary gates, measurements, and qubit resets. Even so, two experimentally accessible techniques
permit practical realizations of shrinkage dynamics on present noisy intermediate-scale quantum
platforms.
Controlled Dephasing via Calibrated Idling. Superconducting qubits undergo natural
dephasing during idle periods, with characteristic time T2. This process is equivalent to a phase
damping channel with parameter
γ = 1 − e−2t/T2 , (30)
where t is the idle duration. To attenuate ⟨X⟩ by a factor s ∈ [0, 1], one idles for
t ≈ −T2 ln(s), (31)
or, written in terms of √1 − γ,
t ≈ −T2 ln p1 − γ. (32)
20

This converts a desired shrinkage level into a precisely calibrated waiting time. As described in
Section 3.2, the resulting attenuation reproduces the rule ⟨Xi⟩after = √1 − γi ⟨Xi⟩before. By as
signing different idle times to different qubits, one achieves coefficient-specific shrinkage without
extra circuit depth.
Randomized Pauli-Z Flips as Stochastic Dephasing. A digital surrogate for phase damp
ing applies a Pauli-Z gate with probability γ and the identity with probability 1 − γ. Averaging
measurement results over many repetitions produces the ensemble channel
Eγ(ρ) = (1 − γ)ρ + γZρZ, (33)
which contracts off-diagonal elements identically to physical dephasing (Nielsen & Chuang,
2010). This method requires no hardware modification; a classical random bit determines
whether a Z gate is applied in each shot. Ensemble averaging yields the expected contraction
of ⟨X⟩, giving a software-level implementation of controlled shrinkage.
Calibrated idling and randomized Z flips therefore provide hardware-native implementations
of the shrinkage operations developed in Sections 3–4. The first uses actual decoherence dynamics
to tune attenuation continuously; the second achieves the same effect statistically by varying the
probability of Z flips. Both methods require only timing control, conditional gate application,
and repeated sampling, all of which are native to current superconducting and trapped-ion
architectures. In this light, noise becomes not merely a limitation but a functional resource.
By shaping decoherence rates or flip probabilities, one can sculpt shrinkage behavior directly in
hardware, transforming physical noise processes into computational tools for multiscale inference.
6 Conclusions
This work introduces a unified framework for quantum wavelet shrinkage, extending the clas
sical idea of coefficient thresholding into the quantum domain through physically realizable
operations. The central contribution is conceptual: shrinkage, long viewed as a nonlinear post
processing step in classical wavelet denoising, can be reformulated as a completely positive trace
preserving (CPTP) map implemented by controlled decoherence. The equivalence between phase
damping and multiplicative attenuation establishes a direct bridge between statistical inference
and open quantum dynamics.
At the methodological level, ancilla-driven channels and phase-damping surrogates pro
vide coherent, unitary mechanisms for attenuation of wavelet coefficients without measurement.
These constructions demonstrate that statistical adaptivity and quantum unitarity are not in
compatible but can coexist within a properly designed ancilla framework. The link between
shrinkage factors and physical decoherence parameters further enables translation of statistical
tuning into experimental control.
From the practical standpoint, the paper identifies two hardware level realizations, cali
brated idling and randomized Pauli-Z flips, that make the proposed quantum shrinkage schemes
executable on current noisy intermediate-scale quantum (NISQ) devices. Both realize the atten
21

uation rule ⟨Xi⟩after = √1 − γi ⟨Xi⟩before using only native operations such as timing control and
probabilistic gate insertion. In this setting, decoherence ceases to be a limitation and becomes
a programmable computational resource.
While the present framework realizes shrinkage through continuous CPTP attenuation, one
can also view denoising as a quantum decision problem. In that setting, significant and noise
dominated coefficients correspond to two quantum hypotheses, and a Helstrom measurement
provides the minimum-error rule for distinguishing them (Helstrom, 1976). Such measurement
based strategies may complement channel-driven shrinkage by offering an optimal, discrete post
processing stage once the state has evolved through a damping map, thereby linking quantum
detection theory and wavelet-based inference.
All examples in this paper come from the annotated and executable Jupyter notebooks
from the repository (https://github.com/BraniV/QuantumWaveletShrinkage), enabling re
producible experimentation and adaptation to simulators and real hardware backends.
Acknowledgments. The author gratefully acknowledges support from the National Science
Foundation under Grant No. 2515246 at Texas A&M University and from the H. O. Hartley
Chair research funds at Texas A&M. The author also thanks Nick Broon of IBM Quantum for
valuable discussions during his visit to Texas A&M, which helped shape several perspectives on
the interplay between wavelet shrinkage and quantum hardware challenges.
References
Aharonov, Y., Albert, D. Z., & Vaidman, L. (1988). How the result of a measurement of a
component of the spin of a spin- 1
2 particle can turn out to be 100. Physical Review Letters,
60(14), 1351–1354.
Bagherimehrab, M. & Aspuru-Guzik, A. (2023). Efficient quantum algorithm for all quantum
wavelet transforms. Quantum, 7, 1103.
Biamonte, J., Wittek, P., Pancotti, N., Rebentrost, P., Wiebe, N., & Lloyd, S. (2017). Quantum
machine learning. Nature, 549(7671), 195–202.
Cai, T. T. (1999). Adaptive wavelet estimation: A block thresholding and oracle inequality
approach. Annals of Statistics, 27(3), 898–924.
Chaurra Gutiérrez, F. A., Mejía-Lavalle, M., Vásquez-Medina, R., & Muñoz, R. (2023). One
dimensional quantum integer cdf(2,2) wavelet transform. arXiv preprint.
Chipman, H. A., Kolaczyk, E. D., & McCulloch, R. E. (1997). Adaptive Bayesian wavelet
shrinkage. Journal of the American Statistical Association, 92(440), 1413–1421.
Choi, M.-D. (1975). Completely positive linear maps on complex matrices. Linear Algebra and
Its Applications, 10(3), 285–290.
22

Das, S., Datta, A., & Fijany, A. (2002). Quantum multiresolution analysis and quantum wavelet
transforms. In Proceedings of the 2002 International Symposium on Circuits and Systems
(ISCAS) (pp. IV–337–IV–340).
Donoho, D. L. & Johnstone, I. M. (1994). Ideal spatial adaptation by wavelet shrinkage.
Biometrika, 81(3), 425–455.
Donoho, D. L. & Johnstone, I. M. (1995). Adapting to unknown smoothness via wavelet shrink
age. Journal of the American Statistical Association, 90(432), 1200–1224.
Fijany, A. & Williams, C. P. (1998a). Quantum wavelet transforms and their implementation.
In C. P. Williams (Ed.), Quantum Computing and Quantum Communications, volume 1509
of Lecture Notes in Computer Science (pp. 10–33). Berlin, Heidelberg: Springer.
Fijany, A. & Williams, C. P. (1998b). Quantum wavelet transforms: Fast algorithms and com
plete circuits. In Proceedings of the SPIE Conference on Quantum Computing, volume 3076
(pp. 175–183).
García-Mata, I., Giraud, O., & Georgeot, B. (2009). Quantum computation of multifractal
exponents through the quantum wavelet transform. Physical Review A, 79(6), 062324.
Geller, M. R. (2024). Protocol for nonlinear state discrimination in rotating condensate. Ad
vanced Quantum Technologies, 7(4). Nonlinear positive trace-preserving dynamics for en
hanced state discrimination.
Givens, W. (1958). Computation of plane unitary rotations transforming a general matrix to
triangular form. Journal of the Society for Industrial and Applied Mathematics, 6(1), 26–50.
Gosal, D. & Lawton, W. (2001). Quantum Haar Wavelet Transforms and Their Applications.
Technical report, National University of Singapore, Singapore. Technical Report, November
5, 2001.
Helstrom, C. W. (1976). Quantum Detection and Estimation Theory. New York: Academic
Press.
Høyer, P. (1997). Efficient quantum transforms. In Proceedings of the 24th International Collo
quium on Automata, Languages and Programming (ICALP) (pp. 144–155). Berlin, Heidelberg:
Springer.
Jacobs, K. (2014). Quantum Measurement Theory and its Applications. Cambridge University
Press.
Klappenecker, A. (1999). Wavelets and wavelet packets on quantum computers. In Proceedings of
the 3rd International Conference on Computational Intelligence and Multimedia Applications
(ICCIMA) (pp. 169–173).: IEEE.
Kraus, K. (1971). General state changes in quantum theory. Annals of Physics, 64(2), 311–335.
23

Li, H.-S. et al. (2019). Quantum wavelet transforms for general orthogonal wavelets. Quantum
Information Processing, 18(2), 50.
Li, H.-S., Wang, S.-C., et al. (2018a). Multi-level and multi-dimensional quantum wavelet packet
transform. Quantum Information Processing, 17(6), 133.
Li, Z.-H., Li, J., Li, F.-G., & Xu, S.-J. (2018b). The multi-level and multi-dimensional quantum
wavelet transform. Quantum Information Processing, 17(9), 240.
Lidar, D. A. & Brun, T. A. (2013). Quantum Error Correction. Cambridge University Press.
Lindblad, G. (1976). On the generators of quantum dynamical semigroups. Communications in
Mathematical Physics, 48(2), 119–130.
Ma, G., Li, J., Duan, Z., Xu, K., & Zhang, H. (2024). Great-length wavelets on quantum
computing platform. Signal Processing, 216, 109365.
Nakahira, K. (2021). Efficient implementation of quantum orthogonal wavelet transforms.
Preprint.
Nason, G. P. (1996). Wavelet shrinkage using cross-validation. Journal of the American Statis
tical Association, 91(434), 1206–1220.
Nielsen, M. A. & Chuang, I. L. (2010). Quantum Computation and Quantum Information.
Cambridge University Press.
Püschel, M., Moura, J. M. F., & Fijany, A. (2001). Quantum algorithms for wavelet transforms
on quantum computers. In Proceedings of the IEEE International Conference on Acoustics,
Speech, and Signal Processing (ICASSP) (pp. 2129–2132).
Schuld, M. & Petruccione, F. (2018). Supervised Learning with Quantum Computers. Quantum
Science and Technology. Cham: Springer.
Stinespring, W. F. (1955). Positive functions on c*-algebras. Proceedings of the American
Mathematical Society, 6(2), 211–216.
Vidakovic, B. (1998). Nonlinear wavelet shrinkage with Bayes rules and Bayes factors. Journal
of the American Statistical Association, 93(441), 173–179.
Vidakovic, B. (1999). Statistical Modeling by Wavelets. Wiley.
Vidakovic, B. & Ruggeri, F. (2001). BAMS method: Theory and simulations. Sankhy ̄a, Series
B, 63(2), 234–249. Special issue on wavelets.
Wiseman, H. M. & Milburn, G. J. (2009). Quantum Measurement and Control. Cambridge
University Press.
Yuan, X., Endo, S., Zhao, Q., Li, Y., & Benjamin, S. C. (2022). Theory of variational quantum
simulation. Reviews of Modern Physics, 94(1), 015004.
24

Zhang, X., Wang, Y., Zhang, L., & Xu, S. (2019). Dimension reduction using quantum wavelet
transform. Journal of Advanced Computational Intelligence and Intelligent Informatics, 23(2),
194–202.
25

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:44.606Z
- **Text Length:** 60358 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 25 of 25
