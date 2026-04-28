# PDF Document: Kaplan 和 Rajendran - 2022 - A Causal Framework for Non-Linear Quantum Mechanic.pdf

**File Path:** Kaplan 和 Rajendran - 2022 - A Causal Framework for Non-Linear Quantum Mechanic.pdf

**Processed Date:** 2026-02-10T18:15:29.044Z

**File Size:** 317.47 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1082

**Title:** A Causal Framework for Non-Linear Quantum Mechanics

**Collection:** Lattice > NLQM - Trapped Ions

---

## Extracted Text Content

arXiv:2106.10576v1 [hep-th] 19 Jun 2021

A Causal Framework for Non-Linear Quantum Mechanics
David E. Kaplan and Surjeet Rajendran
Department of Physics & Astronomy, The Johns Hopkins University, Baltimore, MD 21218, USA
June 22, 2021
Abstract
We add non-linear and state-dependent terms to quantum ﬁeld theory. We show that the resulting low-energy theory, non-linear quantum mechanics, is causal, preserves probability and permits a consistent description of the process of measurement. We explore the consequences of such terms and show that non-linear quantum eﬀects can be observed in macroscopic systems even in the presence of de-coherence. We ﬁnd that current experimental bounds on these non-linearities are weak and propose several expe-
rimental methods to signiﬁcantly probe these eﬀects. The locally exploitable eﬀects of these non-linearities have enormous technological implications. For example, they would allow large scale parallelization of computing (in fact, any other eﬀort) and enable quantum sensing beyond the standard quantum limit. We also expose a fundamental vulnerability of any non-linear modiﬁcation of quantum mechanics - these modiﬁcations are highly sensitive to cosmic history and their locally exploitable eﬀects -
can dynamically disappear if the observed universe has a tiny overlap with the overall quantum state of the universe, as is predicted in conventional inﬂationary cosmology. We identify observables that persist in this case and discuss opportunities to detect them in cosmic ray experiments, tests of strong ﬁeld general relativity and current probes of the equation of state of the universe. Non-linear quantum mechanics also enables novel gravitational phenomena and may open new directions to solve t-
he black hole information problem and uncover the theory underlying quantum ﬁeld theory and gravitation.
1 Introduction
Quantum Mechanics is the bedrock of physics. Its seemingly ad-hoc and phenomenologically derived axioms have proven to be remarkably resistant to parametrized deviation. Given its central importance to physics, there is a clear need to develop a consistent framework to test deviations from these axioms. What parts of quantum mechanics can we modify? Quantum theory rests on two elements. First, it unavoidably introduces an element of probability into physics due to the act of measurement. Second, i-
t requires time evolution to be linear.
The unease triggered by the fundamental role of probability has prompted several eﬀorts to modify the theory to make its predictions absolutely deterministic. In our view, the elimination of probability as an integral element of describing the outcome of physical processes does not seem likely. This is due to the physical fact that a ﬁnite system is only allowed to have a ﬁnite set of energies, even though its constituents possess continuous observables and symmetries. These aspects of physical sy-
stems are placed in conﬂict when one tries to impose the concept of a deterministic measurement of all the observables of the system. As an example, consider the electron in a hydrogen atom. The electron has a ﬁnite set of energy levels while its position is a continuous observable. Moreover, the system is also endowed with rotational symmetry. If the electron could exist in a state with a deterministic position and energy, application of the rotational symmetry would generate an inﬁnite set of st-
ates that all have the same energy but with diﬀerent electron positions – a continuous degeneracy. This would then contradict the assumption that the system only has a ﬁnite set of energy eigenstates. Probability allows quantum mechanics to retain a ﬁnite set of energy states with the existence of continuous symmetries and observables by sacriﬁcing deterministic measurement. The Bell inequalities [1], the SSC [2] and Kochen-Specker theorems [3] are mathematical illustrations of this conﬂict.
1

Motivated by the above, in this paper we pursue the possibility of modifying the second element of quantum mechanics, namely, linear time evolution. There have been several attempts to introduce nonlinear evolution into quantum mechanics [4] and they generically suﬀer from problems of causality [5, 6].
Additionally, non-linear evolution requires a careful treatment of the concept of measurement. Our goal in this paper is to provide a causal non-linear modiﬁcation of quantum mechanics with a consistent description of measurement. The key ingredients that enable such a description are the following. First, the modiﬁcation proposed by us breaks the basis independence of the Schr¨odinger equation and is explicitly written in terms of the position basis. The basis independence of the Schr¨odinger equ-
ation, while mathematically pleasing, is at odds with the physical fact that interactions are local, resulting in the position basis being a preferred basis to describe the world. The position basis can also manifestly enforce causality - precisely because causality is fundamentally a consequence of the local nature of interactions. Second, we will not describe measurement as a phenomenon that is somehow distinct from any of the other interactions in the theory. Instead, we will adopt the view tha-
t measurement arises as the result of an interaction between a measuring device and a quantum system, with the interaction being described by the time evolution equations that govern any other interaction in the theory.1 Using this concept of measurement, while causally consistent, we will ﬁnd it to be fundamentally in conﬂict with the notion of a measuring device whose measurements are accurate and repeatable. Non-linear evolution continually aﬀects the evolution of a systems in a state-dependent-
 way and introduces a fundamental notion of error into all measurements.
The speciﬁc modiﬁcation that we investigate, described in the next section, is to shift bosonic ﬁeld operators in a quantum ﬁeld theory (such as the photon) by a small parameter times their expectation value in the full quantum state. Thus it can be implemented in any interacting theory with bosonic particles. This additional (state-dependent) expectation value manifests as a background ﬁeld and adds an element of classical time-evolution to the theory. In low-energy single-particle quantum mechan-
ics, it manifests itself as a (causal) non-linear term in the wave function’s time evolution. Our goal in this paper is to establish the viability of this framework and investigate the phenomenological, experimental and cosmological implications of this modiﬁcation.
This paper is organized as follows. In Section 2, we develop a transparent framework to show that the modiﬁcation can be implemented in a causal and gauge invariant manner. We show that this modiﬁcation allows for the existence of stationary states (Section 2.2), an essential element of quantum systems and we develop a consistent notion of measurement (Section 2.4) and derive its consequences. In Section 3, we analyze the consequences of this framework. We show that non-linear quantum eﬀects can b-
e observed even in the presence of decoherence. However, the human ability to exploit these non-linear eﬀects are subject to our cosmic history (Section 3.2) wherein these eﬀects can dynamically disappear if our macroscopic universe was produced as a result of quantum ﬂuctuations as is the case in canonical inﬂationary theories. We highlight that this aspect of non-linear quantum mechanics is not unique to our modiﬁcation but is rather a general feature of any causal non-linear modiﬁcation. Non-li-
near quantum mechanics can lead to unusual gravitational and causal phenomena and we discuss these in Section 3.3. In Section 4 we analyze current experimental limits on such non-linearities and ﬁnd them to be surprisingly weak. In Section 5, we then propose experimental protocols to test these non-linearities for diﬀerent classes of cosmic history - one where our universe originated and evolved as a result of deterministic classical processes and another where it was the result of quantum process-
es. There have been prior investigations of this class of modiﬁcations [7–12] as well as more general investigations of non-linear quantum mechanics [4, 5]. We discuss the ways in which our eﬀorts have advanced these investigations in Section 6. We then conclude in Section 7.
2 The Framework
We begin by describing non-linear quantum evolution in ﬁeld theory prior to describing these eﬀects on single particle quantum mechanics (see Section 2.1). This order, while unconventional, nevertheless adds clarity. Field theory is an accurate description of nature. It naturally describes multi-particle separated systems and by explicitly recognizing the special nature of position, it enforces causality. It thus transparently addresses
1This view parallels the treatment of measurement in the “many-worlds” interpretation of quantum mechanics - one cannot implement, for example, the “Copenhagen interpretation” of measurement with its ad-hoc rule causing the “collapse” of the wave-function since such a collapse causes violence to non-linear terms, and is anyway itself a modiﬁcation of quantum mechanics.
2

issues that have confronted prior non-linear modiﬁcations of quantum mechanics. We ﬁrst consider ﬂat space before generalizing this description to include gravitation. Throughout this paper, we work in the Heisenberg picture where the quantum states |χ are time independent while the operators evolve in time.
Non-linear evolution of the state |χ can be incorporated using the following prescription: take any bosonic ﬁeld operator in the Lagrangian and add to it a term proportional to the expectation value of that operator in the state |χ in a gauge invariant way. The expectation value is treated as a c-number function which eﬀectively provides a background classical ﬁeld upon which the quantum ﬁelds evolve. We demonstrate this in the cases of Yukawa and gauge theories as well as gravity.
Consider the Yukawa theory with the interaction y φ(x)Ψ¯ (x)Ψ(x), depicting a scalar φ interacting with a fermion Ψ with Yukawa coupling y. The non-linear interaction is incorporated into the Lagrangian by replacing:

φ (x)

→ φ (x) + ǫ

χ|φ (x) |χ χ|χ

= Φ (x)

(1)

where ǫ is the strength of the non-linearity. We have divided by the normalization of the state for convenience in deﬁning probability later. The eﬀective Lagrangian of this theory now includes:

L⊃

yΦΨ¯ Ψ = yφΨ¯ Ψ + yǫ

χ|φ|χ χ|χ

Ψ¯ Ψ

(2)

The fermions Ψ now respond to the background classical ﬁeld created by the expectation value

χ|φ|χ χ|χ

.

The

quantization of this theory proceeds by quantizing the ﬁeld operator φ, with

χ|φ|χ χ|χ

treated as a classical

background. The expectation value χ|φ (x) |χ of φ in the state |χ is obtained from the full interacting

theory. With an eye towards the low-energy, single-particle theory, we evaluate it perturbatively in y, and

to zeroth order in ǫ:

χ|φ (x) |χ = y d4x1 χ|Ψ¯ (x1) Ψ (x1) |χ GR (x; x1) + . . .

(3)

where GR (x; x1) is the retarded Green’s function from the space-time point x1 to x of the massless ﬁeld

φ. The ellipsis includes the time-evolved initial condition for the φ ﬁeld itself. In the above, we use the

renormalized expression for χ|Ψ¯ Ψ|χ which removes the vacuum energy divergence in this expression.

For a U (1) gauge theory, the interaction is of the form eJµAµ. The non-linear modiﬁcation is incorporated

by performing the replacement:

Aµ

→

Aµ

+ǫ

χ|Aµ |χ χ|χ

1+ǫ

= Bµ

(4)

Note that under a gauge transformation Aµ → Aµ + ∂µα, Bµ → Bµ + ∂µα. The U (1) theory can now be

written using the gauge ﬁeld Bµ, obtaining a gauge invariant non-linear Lagrangian. The quantum theory is

deﬁned by quantizing Aµ and treating

χ|Aµ|χ χ|χ

as a classical background. After gauge ﬁxing, one ﬁnds the

leading order contribution to this expectation value to be (perturbatively):

χ|Aµ|χ = e d4x1 χ|Ψ¯ (x1) γν Ψ (x1) |χ GRµν (x; x1) + . . .

(5)

where GRµν is the retarded Green’s function. The gauge invariance of the Lagrangian implies that we can

still gauge ﬁx Aµ and deﬁne its physical degrees of freedom. It can be checked that a similar construction

can also be performed for non-Abelian gauge theories.

This non-linear construction can also be extended to gravitation. Quantum ﬁeld theory incorporates

gravitation via the Einstein-Hilbert action. We consider the space-time manifold M upon which we deﬁne

the action:

SGR = Mp2l d4x√gR + d4√gLM

(6)

where the metric g and the Ricci scalar R are all operators and LM is the matter Lagrangian. To introduce the non-linear terms, we perform the replacement:

3

gµν

→

gµν

+ǫ

χ|gµν |χ χ|χ

1+ǫ

= g˜µν

(7)

Similar to the construction in gauge theory, both g and g˜ have the same transformations under diﬀeomor-

phisms and by writing the Einstein-Hilbert action using the metric g˜, quantizing g and treating

χ|gµν |χ χ|χ

as a background classical ﬁeld, we obtain a gauge invariant general relativistic action. Super-position is a

fundamental feature of quantum mechanics and the theory admits states that feature linear combinations of

space-time metrics. Our formalism permits an unambiguous computation of these eﬀects - but we defer a

detailed discussion of these points to Section 3.3 where we describe the cosmological consequences of these

non-linearities. For now, we simply note that the elements of the Lagrangian are tensor ﬁelds on the mani-

fold and they have a geometric meaning independent of any speciﬁc metric. There is thus no ambiguity in

deﬁning the action.

A fundamental aspect of this construction is the fact that these non-linear interactions build on existing

interactions in the theory. Moreover, in a gauge theory, the non-linear interactions arise by shifting the gauge

ﬁelds themselves - there is thus a single parameter ǫ that governs the size of the non-linear interactions for

that theory.

In the following subsections, we derive the single particle Schr¨odinger equation (2.1) and show that this

equation allows quantum states to have a conserved norm, permitting a probabilistic interpretation of the

theory. In 2.2 we show that this framework allows quantum systems to have stationary states with well

deﬁned energies. We describe separated systems and show that the theory is causal (2.3), and then describe

measurement (2.4).

2.1 Single Particle Quantum Mechanics

The non-linear evolution proposed by us is interaction (and ﬁeld) dependent. Thus, the single-particle Schr¨odinger equation that results from this modiﬁcation depends on the speciﬁc ﬁeld theory. We describe these eﬀects for a fermion Ψ that interacts via a Yukawa coupling yφΨ¯ Ψ with a scalar φ. The state of a single Ψ quantum is described by its wave-function Ψ (t, x) (where x = (t, x) and three-vectors are in bold). Under the non-linearity, the time evolution of this wave-function is governed b-
y the equation:

i

∂Ψ (t, ∂t

x)

=

H + ǫ˜y

d4x1Ψ∗ (t1, x1) Ψ (t1, x1) GR (x; x1) Ψ (t, x)

(8)

where H is usual Hermitian Hamiltonian of quantum mechanics in the position representation and GR is the relativistic retarded Green’s function between the points (t, x) and (t1, x1). This equation governs the evolution of the position degrees of freedom of the state and we trace over internal quantum numbers (such as spin). Notice that this equation is invariant under the transformation Ψ (t, x) → eiθΨ (t, x). It thus admits a conserved probability current and norm, permitting a probabilistic int-
erpretation of the wave function. The coeﬃcient ˜ǫ is proportional to the non-linear coupling in the ﬁeld theory, ǫ, and absorbs the normalization factor of the state, χ|χ . If the state |χ is simply a direct product of a one-particle state with the rest of the environment, then ˜ǫ = ǫ/N , where N = d3x Ψ∗ (x) Ψ (x).
The above equation has the same form as the Schr¨odinger-Newton equation that is sometimes described as the non-linear Schr¨odinger equation. But, the non-linear Schr¨odinger equation is used to describe the linear quantum mechanical evolution of a particle in the mean ﬁeld of a large number of particles all of whom are in the same quantum state. In (8), we are proposing a non-linear quantum evolution of a single particle state. As we will see below, this non-linear behavior leads to considerably -
diﬀerent physical phenomena than the linear quantum evolution of a multi-particle system.
There is a key mathematical diﬀerence between the Schr¨odinger equation and (8). Formally, this equation requires knowledge of the full past of Ψ (x) in order to describe its future evolution as opposed to simply its value at a given time t0. Alternately, one may specify the value of the wave-function at t0 and specify an additional boundary condition to capture the eﬀects of the past and then perform the non-linear evolution. The latter approach is physically motivated: equation (8) arises from a-
 Yukawa interaction that allows the system to interact with itself via the sourced scalar ﬁeld. The additional boundary condition is then the speciﬁcation of the background value of this scalar ﬁeld at the initial time slice.

4

2.2 Stationary States and Energy Conservation

The existence of stationary states is one of the central consequences of quantum mechanics. It allows for the existence of ground states of quantum systems without which we cannot deﬁne a stable vacuum. Using perturbation theory and induction, it is straightforward to show that non-linear evolution permits the existence of stationary states. We will explicitly demonstrate this for single particle quantum mechanics. It is appropriate to use perturbative arguments since the non-linear corrections do-
 not source instabilities or runaway potentials in the Hamiltonian, as long as the correction is small enough for a given potential (for shallow binding potentials, the existence of bound states can be used to constrain the non-linearity, see Section 4). Similar arguments can also be applied to the ﬁeld theory case where we can perturbatively describe single particle states.
We now show the existence of stationary states in single particle quantum systems of the Yukawa theory described by (8). We will take the scalar ﬁeld to be massless so it is relevant to the cases of the photon and graviton, though the inclusion of a mass is straight forward. In this case, the Green’s function that appears in (8) would be that of a massless Klein-Gordon ﬁeld, GR (t, x; t1, x1) = δ (t1 − t − |x1 − x|) / (4π|x1 − x|).
By a single-particle stationary state, we mean a state that has a wave function whose sole time dependence is an overall phase, Ψ (t, x) = e−iEtΨ (0, x), and thus satisﬁes the equation:





 H + ˜ǫ y


d3x1

Ψ∗

(0, x1) 4π|x1

Ψ (0, − x|

x1)

  


Ψ

(t,

x)

=

E

Ψ

(t,

x)

(9)

VN L

Having done the time integral in the non-linear component, we see this term is a state-dependent, but timeindependent, correction to the eﬀective Hamiltonian. Thus, for Hamiltonians with known spectra (such as the hydrogen atom), one can solve for stationary states perturbatively in ǫ˜ by expanding Ψ, E, and VNL as

Ψ = Ψ0 + ǫ˜Ψ1 + ǫ˜2Ψ2 + · · ·

E = E0 + ǫ˜E1 + ˜ǫ2E2 + · · ·

VNL [Ψ, Ψ∗]

=

VNL [Ψ0, Ψ∗0] + ǫ˜
z1

Ψ1 (0, z1)

δVN L

+ h.c.

δΨ (0, z1) Ψ=Ψ0

+···

and solving equation (9) order by order. Note that the potential term VNL is already at order ǫ˜. Thus, for example, the kth order equation will only involve potential terms with Ψi’s for i < k, and thus the equations will be linear and, in general, solvable.
The existence of stationary states has key implications for the stability of the theory - it ensures that the theory has stable ground states and prevents runaway violations of energy conservation. To see this, observe that the probability densities of stationary states are independent of time. The non-linear terms that appear in their time evolution are time independent. This time translation invariance implies that the energies of these states are conserved. This is reassuring as these are the o-
nly states of the theory that have a well deﬁned energy. A general state that is a linear combination of these stationary states will have time dependent probability densities and the non-linear terms that govern their evolution are time dependent. The energy of these states, as measured by the non-linear Hamiltonian, is not conserved. This is not surprising since these states do not actually have a well deﬁned energy. However, even though the energy of the state is not conserved, one does not exp-
ect disastrous runaway violations of energy conservation since the system possesses a ground state. In linear quantum mechanics this is proven by constructing a positive deﬁnite conserved energy functional - namely, the expectation value of the stress energy tensor. This stress tensor is obtained from a time translation invariant Lagrangian.
We show that an actual conserved energy can be constructed for this non-linear modiﬁcation. Instead of the one particle equation, we use the underlying ﬁeld theory where energy conservation is trivial to show via

5

Noether’s Theorem. Because we are in the Heisenberg picture, the state |χ does not transform under time translations. Thus, under a general translation xµ → xµ + aµ, the ﬁeld plus background transforms as

φ+ǫ

χ|φ|χ χ|χ

→ (1 + aµ∂µ)

φ+ǫ

χ|φ|χ χ|χ

(10)

and thus translation invariance is manifest and the Noether procedure can generate a conserved energymomentum tensor, albeit one that depends on the normalized expectation value of φ. Thus some of the conserved energy can be seen to be stored in the background ﬁeld and in general (as we will see examples later) can move between dynamic ﬁelds and the background

2.3 Separated Systems and Causality
A key obstacle in prior attempts [4] to introduce non-linear evolution in quantum mechanics has been the ability to describe separated but entangled systems while preserving causality. The ﬁeld theoretic underpinnings of our modiﬁcation is local and thus should be causal. It also enables us to handle these issues in a transparent manner in the low-energy theory. It is instructive to demonstrate in our framework this causal evolution explicitly for a two particle system. This demonstration will als-
o illustrate some key features of the non-linear but unitary nature of the time evolution. For deﬁniteness, we again illustrate this in the case of the Yukawa theory in ﬂat space but our results apply more generally. We direct the reader to Section 3.3 for unusual causal phenomena that are possible in curved space-times.
Suppose we have two particles described by the co-ordinates x and y respectively. Following the ﬁeld theory insertion of (3), one can generate a clear prescription for multi-particle states, and it is easy to show that the time evolution of the two-particle wave function Ψ (x, y; t) is described by:

i

∂ ∂t

Ψ

(x,

y;

t)

=

H + y ˜ǫ d3x1d3y1dτ |Ψ (x1, y1; τ )|2

(11)

× [GR (t, x; τ, x1) + GR (t, y; τ, x1) + GR (t, x; τ, y1) + GR (t, y; τ, y1) ] Ψ (x, y; t)

We now show that this prescription preserves causality when we have a well separated entangled state. The second and third Green’s functions serve to causally connect the sub-systems at x and y via non-linear evolution - these terms are thus not a threat to causality. Causal problems could potentially arise from the ﬁrst and last terms. For example, suppose some local operation is performed on the particle in the x region. This would change its wave-function. If the change to this wave-function ch-
anges the time evolution of the particle in the y region solely through the fourth Green’s function in (11) (i.e. without the aid of the second causal Green’s function in (11)), we would have violated causality.
We will show that this is not the case. To see this, focus on the term containing the fourth Green’s function in (11):

d3x1d3y1dτ |Ψ (x1, y1; τ ) |2GR (t, y; τ, y1)

(12)

If a local operation on x changed the integral over the x1 co-ordinates in (12), causality would be violated since the change to the integral will aﬀect the evolution of the particle at y. In the absence of the second term in (11), we will see that the full non-linear time evolution due to local operations on x can be represented by unitary operators of the form U = U1 (x1) ⊗ U2 (y1) and the time evolution results in Ψ (x, y, t) → U [Ψ (x, y, t)] with separate unitary transformations on the separa-
ted systems. When this is the case, the integral over x1 in (12) does not change and causality is preserved.
The unitary, factorized form of this time evolution can be proven using time dependent perturbation theory. At zeroth order, the time evolution of the system is given by linear quantum mechanics. In this case, a local operation on x is indeed represented by a factorized unitary operator on the full system. The ﬁrst order correction from the non-linear dynamics is obtained by using the zeroth order wave-function Ψ0. In the absence of the second and third terms in (11), assuming the systems are caus-
ally disconnected, this ﬁrst order correction is operationally no diﬀerent than computing the ﬁrst order correction due to the time dependent potential

6

V1 (t, x) = ǫ˜ d3x1d3y1dτ Ψ∗0Ψ0GR (t, x; τ, x1)

(13)

That is, the non-linear correction is equivalent to computing the eﬀect of a potential that solely depends on x in linear quantum mechanics. But, in the latter case, since we are now dealing with linear quantum evolution of two separated systems, the time evolution is indeed represented by a factorized unitary operator. Note that in (13) we have only written down the non-linear correction to x. There is a similar additive term that acts on y arising from the fourth Green’s function in (11). The eﬀ-
ective correction is thus of the form V1 (x) + V˜1 (y). Due to its additive and separable form, the unitary evolution from these corrections is of the form U = U1 (x) ⊗ U2 (y) as required. This logic can be extended to show the factorized unitary nature of the time evolution to all orders in perturbation theory.
We note that [5] argued that the non-linear evolution of separated systems must be additive in order to preserve causality. This is precisely the form of (11) where we see that this structure naturally arises from ﬁeld theory.2 The additive nature of non-linear evolution also implies that when a system is entangled with the environment, the environmental degrees of freedom are traced over in the non-linear evolution. This implies that non-linear eﬀects persist even in the presence of decoherence. -
This was pointed out by [5] and we develop the enormous experimental importance of this fact in Section 5.

2.4 Measurement
Our deﬁnition of measurement parallels the operational concept of measurement described by the many worlds interpretation of quantum mechanics. In the many worlds interpretation, measurement is the time evolution of an initial state |Ψ of some sub-systerm that is brought in contact with another sub-system (the measuring device) that is in a suﬃciently stable initial state. This state could either be a stationary state of the sub-system or a coherent state that is robust against environmental decoh-
erence. Label this initial state as |A0 . The system evolves as per the Schr¨odinger equation in a deterministic way. In order to measure an observable associated with a Hermitian operator Oˆ, whose eigenvectors are |i , the interaction Hamiltonian between the state and the measuring device must be such that the initial state |Ψ ⊗ |A0 time evolves into:

|Ψ ⊗ |A0 → ci|i ⊗ |Ai

(14)

i

where |Ψ = i ci|i . The |Ai are a set of convenient (i.e. easily interpretable) states of the measuring device such as stationary or coherent states of the system. When the |Ai are stationary states, Ai|Aj = δij. If the |Ai are taken to be coherent states, the overlap is in general not zero - but for a good measuring device, the states are chosen so that the overlap is exponentially small. Of course, all of this is a prediction of quantum mechanics and not an “interpretation”. Due to the suppresse-
d overlap between the |Ai , the reduced density matrix for the system |Ψ is eﬀectively just i |ci|2|i i|. This reduced density matrix is interpreted classically as the direct sum of many possible outcomes |i each with probability |ci|2 as determined by the states |Ai of the measuring device.
We adopt this operational procedure to deﬁne measurement: we bring the quantum state |Ψ in contact
with a measuring device that is initially in either a nearly stationary state or a coherent state (i.e. a state that is robust against environmental decoherence). Call this state as |α0 . The interaction between these two systems will in general lead to an entangled state where the states of the measuring device are some desired states |αj (such as nearly stationary states or coherent states). We will “intepret” this state in classical probabilistic terms. While the above describes the process of -
measurement, there are important diﬀerences
in the phenomenology of measurement between linear quantum mechanics and this non-linear modiﬁcation.
In linear quantum mechanics, the construction of the desired interaction between the system and the measuring device (the Hamiltonian) only requires knowledge of the eigenstates |i of the operator Oˆ and the relevant states |Aj of the measuring device. Knowledge of the actual state |Ψ that is being measured is not necessary. In non-linear quantum mechanics the non-linear interactions depend on the actual quantum

2This form also violates one of the axions of [13] that proved a no-go theorem for modiﬁcations of quantum mechanics. [13] felt that the additive structure demanded by [5] was not well motivated. We have demonstrated that this additive structure is a natural consequence of ﬁeld theory.

7

state |Ψ . There is thus a more complicated map between the outcomes of the measuring device and the incoming state unlike the simple, direct map in linear quantum mechanics.
But more importantly, unlike linear quantum mechanics, the states |αi of the measuring device will in general overlap with each other at O(ǫ˜). Normally (linear quantum mechanics) when one designs a measurement device, the time evolution is known and the Hamiltonian can be designed to result in orthogonal states. Because the time evolution depends on the (unknown) initial state, one cannot necessarily guarantee this orthogonality. Consequently, we expect αj|αi ∝ ǫ˜.3 This implies that if the state-
 |Ψ ⊗ |α0 evolves into i ci|i |αi , the reduced density matrix that describes |Ψ will not be diagonal in the basis |i , and a partial trace over the measuring device subsystem gives TrM (ρ) = i,j c∗j ci αj|αi |i j| = i |ci|2|i i|. Consequently, even after measurement, interference between the states |i and |j can be observed. This state cannot be cleanly interpreted as the direct sum of many possible outcomes each with probability |ci|2 since the diﬀerent worlds continue to interfere with each oth-
er.
If one wishes to retain the clean interpretation of measurement as the direct sum of many classical worlds, the interaction Hamiltonian would have to evolve the initial state into ci|i |Ai where the |Ai are orthogonal states (for example, the usual energy eigenstates of the linear quantum mechanical hamiltonian governing the measuring device). But, these are not stationary states of the non-linear hamiltonian and thus the measured outcome continues to evolve after the measurement. In this case, wh-
ile the reduced density matrix of the quantum system itself has a ready classical interpretation as the direct sum of many outcomes, the time evolution of the measuring device does not reﬂect this clean interpretation.
Further, in quantum mechanics once there is entanglement between the quantum state |Ψ and a macroscopic measuring device, the system undergoes decoherence. Thus, diﬀerent outcomes of the measurement cannot inﬂuence each other i.e. the world “splits” into many distinct worlds. As we will see in Section 3.1, non-linear eﬀects can persist even in the presence of decoherence and thus the diﬀerent outcomes or “worlds” can continue inﬂuencing each other. In general, these will also cause further time ev-
olution of the states |αj away from their values at the time of measurement.
We thus learn that there isn’t a clean concept of measurement in non-linear quantum mechanics where the state of the measuring device is faithfully correlated with the classical probabilistic reduced density matrix that describes the quantum system after measurement. It is thus the case that measurement in this non-linear system is unavoidably noisy. Our analysis of this non-linear system is perturbative and thus we would like to orient our discussion as close as possible to quantum mechanics. To -
that end, we will deﬁne measurement using the energy eigenstates (or coherent states) |Ai of the linear quantum mechanical Hamiltonian: measurement is a process that takes the quantum state |Ψ ⊗ |A0 → i ci|i |Ai with |Ψ =
i ci|i . This state can be interpreted as a classical direct sum of many possible outcomes |i each with probability c∗i ci/ Ψ|Ψ where Ψ|Ψ is the norm of the full quantum state.
3 Analysis
In this section, we derive the key phenomenological consequences of this non-linear modiﬁcation. This includes the phenomenology of entangled macroscopic states (sub-section 3.1), the sensitivity of this eﬀect to cosmology (sub-section 3.2) and the causal aspects of this scenario in curved space-times (sub-section 3.3).
3.1 Non-linearity and the Macroscopic World
In quantum mechanics, it is diﬃcult to observe quantum eﬀects on macroscopic objects since the interactions of a macroscopic system with its environment leads to rapid decoherence. Upon decoherence, the macroscopic system is described by a classical probability distribution. The subsequent evolution of this system can be described purely in terms of evolving this classical probability distribution where each classical outcome evolves independently of the other outcomes. Interestingly, this is not -
the case for the non-linearities described by us - deviations from classical evolution are possible even in the presence of decoherence.
We focus on the eﬀects in non-relativistic quantum mechanics. The local nature of interactions implies that the position of a macroscopic body is rapidly entangled with the environment – i.e., macroscopic bodies
3This statement can be easily veriﬁed for the stationary states of the system. It might be interesting to explicitly prove this for coherent states as well.
8

are most easily described in the position basis. Suppose ΨM (τ, x′) is the wave function of a macroscopic body M (where for notational simplicity, we are using a single position coordinate x′ to represent the position coordinates of all the particles in the macroscopic body). Upon interaction with the environment O, this state evolves into an entangled state whose wave-function is ΨM (τ, x′) ΦO (τ, y′; x′) where ΦO (τ, y′; x′) is the wave-function of the environment at time τ described by the posi-
tion co-ordinate y′ (as with y′, for notational simplicity, we use a single y′ to denote the positions of all the particles in the environment). This wave-function is correlated with the position x′ of M . The non-linear evolution of M is governed by the term
d3x′d3y′dτ Ψ∗M (τ, x′) ΨM (τ, x′) Φ∗O (τ, y′; x′) ΦO (τ, y′; x′) GR (t, x; τ, x′)
The wave-function ΦO (τ, y′; x′) is generically not a stationary state of O. Thus, we expect the product Φ∗O (τ, y′; x′) ΦO (τ, y′; x′) to contain time dependent terms oscillating ∝ ei(Ei−Ej)τ where Ei,j are eigenenergies of O. Since the environment contains a large number of particles, these energy diﬀerences are large and thus these terms will rapidly average out. The terms that survive will be the time independent diagonal terms. The integral thus inherits the time dependence of Ψ∗M (τ, x′) ΨM -
(τ, x′) i.e. the actual time dependence of the probability density of M . This probability density contributes as a time dependent potential that aﬀects the evolution of M , leading to a deviation from classical evolution even in the presence of decoherence. The persistence of these eﬀects even in the presence of decoherence enables potent experimental probes of this scenario since the demands on environmental isolation of the probing systems can be signiﬁcantly relaxed. We comment on these possib-
ilities in Section 5.
3.2 Cosmological Sensitivity
The non-linear eﬀects that we have described are tremendously sensitive to cosmic history - as we show below, even if these terms exist in the theory, many of their eﬀects can become negligible under certain cosmic conditions such as canonical inﬂationary cosmology.
To see this, suppose the quantum state of the universe is such that it is in a macroscopic superposition |χ = α|W + β|V of two states |V and |W , where |V is the vacuum state and |W is the observer’s world. The expectation value χ|φ|χ = |α|2 W |φ|W and thus vanishes as α → 0, suppressing the eﬀect of the non-linearity, independent of the value of ǫ˜. If the origin of the universe was such that the quantum state ended up in such a linear combination with |α| ≪ 1, there is no local operation that ca-
n be performed by the observer in |W to boost the eﬀects of the non-linearity. This is dramatically diﬀerent from the eﬀects of the standard linear evolution terms in quantum mechanics - their eﬀects on the physics of |W are independent of α.
The experimentally testable aspects of this theory are thus highly dependent on cosmology. We illustrate this by considering two scenarios, one where the universe’s macroscopic structure was sensitive to early quantum ﬂuctuations (Scenario A), and the other where the macroscopic structure was determined dominantly by classical evolution (Scenario B). Scenario A includes conventional inﬂationary cosmology in which the origin of structure in the universe is tied to quantum ﬂuctuations of the inﬂaton-
 ﬁeld. These ﬂuctuations decohere as they exit the horizon, giving rise to a quantum state that is the superposition of a very large number of distinct universes all of whom have the same statistical properties. This implies that the quantum state is such that in the vast majority of these universes, the space-time point where the Earth exists is likely to be in interstellar space. Thus, if a terrestrial observer tries to discover the eﬀects of this non-linearity by trying to modify the value of t-
he expectation value χ|φ|χ (such as the experiments in Section 5.1), the observer will have to contend with the tremendous suppression of this eﬀect due to the small probability that the Earth exists at that speciﬁc space-time point (not to mention the observer themselves) in the full quantum state of the theory. The testable aspects of this theory would be along the lines described in Section 5.2. On the other hand, we could consider Scenario B - this could be an inﬂationary scenario where the pe-
rturbations have a classical origin, such as in warm inﬂation models [14] where the ﬂuctuations are thermal. In this case, the evolution would be deterministic and the probability that macroscopic object, such as the earth, is at this space-time point could be non-negligible. The experiments described in Section 5.1 would then be a feasible path towards probing these eﬀects.
9

Importantly, while this cosmological sensitivity is transparent in this non-linear modiﬁcation, it is a generic fact about any local non-linear modiﬁcation of quantum mechanics. This is because the non-linear interactions, by the very nature of non-linearity, will depend upon the coeﬃcients of the quantum state. Local operations cannot undo small coeﬃcients arising due to an unfavorable cosmic superposition. Importantly, in a local theory, one cannot boost these eﬀects by writing down operators th-
at would allow the observer to condition the eﬀect based on the quantum state the observer ﬁnds himself in. This is because there is no local operator that can represent the entire environment. Speciﬁcally, suppose the quantum state is |χ = α1|O1 |E1 + α2|O2 |E2 where the observer is in states |O1,2 corresponding to entanglement with the environmental states E1,2 respectively. If the non-linear terms governing the evolution of these terms were to be divided by a projection operator of the environm-
ental state E1, the observer O1 could hope to see non-linear eﬀects unsuppressed by α1. However, the projection on to the environmental state E1 cannot be performed by a local operator since the environment, by deﬁnition, is a delocalized state.
The generic nature of this cosmological sensitivity raises the interesting possibility that the observed linearity of quantum mechanics is the result of dynamical evolution of the universe (such as inﬂationary cosmology), even if the laws of quantum mechanics are fundamentally non-linear.

3.3 Curved Space
In this section, we consider the possibility that the universe is placed in a linear superposition of metrics i.e. we consider quantum states of the form:

|χ = α1|O1 |M1 + α2|O2 |M2

(15)

where the observers O1,2 are entangled with two diﬀerent metrics M1,2. We clarify our formalism in this case and discuss new phenomena.

3.3.1 Metrics and Contraction
A generic ﬁeld theoretic Lagrangian involves contraction between vectors and tensors that are performed using the metric tensor. We introduce non-linearity via expectation values of bosonic operators - in particular, these bosonic operators can be gauge ﬁelds (or really any tensor, including gravity). In linear quantum mechanics, since M2|M1 = 0 there is never any ambiguity in contracting gauge ﬁelds to obtain the Lagrangian since the entanglement of the observer with a speciﬁc metric forces the o-
bserver to use that metric to contract tensors. In our case, the expectation value of the bosonic ﬁelds will get contributions from terms in (15).
To see how to handle these terms, let us focus on the case of electromagnetism where the non-linear interaction is of the form ǫgµν χ|Aµ|χ Jν . Formally, in this expression gµν is an operator. Further χ|Aµ|χ is simply a vector at a point on the manifold - this vector has an existence that is independent of any particular metric on the manifold. This term is then a well deﬁned mathematical operation which makes the metric tensor operator gµν act on two vectors χ|Aµ|χ and Jν. This operation is thus -
well deﬁned. Now subject the state (15) to non-linear evolution. Treating gravitation semi-classically, the observer Oi will see the term gµν (|Mi ) J ν (|Mi ) χ|Aµ|χ . Now, χ|Aµ|χ = α∗1α1 O1, M1|Aµ|O1, M1 + α∗2α2 O2, M2|Aµ|O2, M2 . These terms are generally described in terms of the co-ordinate systems used to describe the metrics M1, M2 respectively. But, this vector has a geometric meaning independent of the co-ordinate system on the manifold, and thus its components in any one co-ordinate syst-
em can be converted into those of any other co-ordinate system. So if we were interested in observer O1, we would consider the term O2, M2|Aµ|O2, M2 and perform a co-ordinate change that converts both the metric M2 and its Christoﬀel symbols locally to M1. This unambiguously ports the vector across co-ordinate systems. Note that this co-ordinate change is similar to the construction of local Lorentz co-ordinates on a manifold - indeed the local Lorentz co-ordinates can be used to construct this co-
-ordinate change. With this, the contraction is now known in the coordinates used by O1.
An important aspect of non-linearity is that it removes the freedom to independently perform co-ordinate transformations on individual universes (i.e. metrics) Mi. There is still freedom to pick co-ordinates on the space-time manifold (general covariance) - but once these co-ordinates are picked, the co-ordinate change has to be reﬂected on all the parts of the wave-function (i.e. metrics). Unlike linear quantum mechanics

10

where each metric in the superposition evolves independently, the non-linear evolution inextricably links all these metrics together. Non-linearity can thus be naturally embedded into the 3 + 1 Hamiltonian formalism of General Relativity in which gravitation is described as the global time evolution of the metric on a spatial Cauchy surface.

3.3.2 Quantum Wormholes
Non-linear evolution coupled to metric superpositions allows for novel causal phenomena. To illustrate this, suppose the quantum state |χ is in the superposition (15) with the state |M1 being de Sitter space and |M2 being Minkowski space. Pick two space-time points x and y such that they are not causally connected in M1 but are causally connected in M2. In linear quantum mechanics, |M1 and |M2 are two independent universes that do not communicate between each other. Accordingly, the observer O1 ca-
nnot send signals from x to y while the observer O2 can send signals between these two points. Non-linear evolution enables communication between these two “worlds” and allows for a quantum channel of communication. For example, in the Yukawa theory (3), the observer O1 can create an oscillating source of φ using fermions in M1 at x. This oscillating background can give rise to a propagating wave of φ in M2. Since the space-time points x and y are causally connected in M2, this wave can propagate -
in M2 from x to y. This propagating wave contains a non-zero φ and it can thus inﬂuence fermions in M1 at the point y. We call this phenomenon a “quantum wormhole”.
While this causal behavior is unusual, it is fundamentally causal - the quantum state of the universe has to allow the points to be causally connected in at least one of the metrics that are in superposition. The fact that causality on the manifold depends on the quantum state is not unusual - this is true even in linear quantum mechanics where it is possible that two points on a manifold are causally connected in one metric but not in another. The non-linear terms simply prevent a clear demarcati-
on of the quantum state into distinct universes/metrics. Note that this behavior does not require quantum non-linearities in gravitation - it exists even for the non-linear Yukawa theory as long as the quantum state itself is a superposition of diﬀerent metrics.
It is interesting to ask if this kind of non-linear behavior could help solve the black hole information problem. The evaporation of a black hole will spread the position of the black hole over a distance ∼ rs in a Page time. If there are non-linearities, the singularity that is behind the horizon in one metric may ﬁnd itself in contact with a space-time point that is outside the horizon in another metric and that could in principle allow for information to escape from the singularity. While such -
communication is possible, this phenomenon alone cannot solve the black hole information problem - the non-linear terms are cosmologically sensitive. If the black holes were formed in a universe that was produced as a result of quantum inﬂationary perturbations, these non-linear terms will be vanishingly small and black holes formed in such a universe will not be able to lose their information via this mechanism. But, in this case non-linear eﬀects arising from the interference of metrics (see Sec-
tions 3.3.3 and 5.2) can persist. It is possible that this metric interference would treat the event horizon as a special point (since one can no longer perform co-ordinate redeﬁnitions without changing co-ordinates over all the universes) leading to new causal structures at the horizon. These causal structures may induce new vacuum energy divergences (similar to those found at the inner horizons of black holes – see, for example, [15] ) that could potentially result in the appearance of horizon s-
cale singularities similar to the ﬁrewall solutions discussed in [16]. This possibility deserves further study.
Non-linearities may also be useful as theoretical tools to deﬁne gauge invariant observables in gravitation. For example, if the quantum state was a superposition of a gravitating system and Minkowski space, the non-linear terms will allow the Minkowski observer to probe the physics of the gravitating system without this observer’s measuring devices being aﬀected by gravity.

3.3.3 Gravitational Phenomena From Interfering Metrics

In this sub-section, we investigate phenomena that may exist when quantum non-linearities are present in

gravitation. The eﬀective metric that is seen by an observer is then the sum g˜µν =

gµν + ǫ

χ|gµν |χ χ|χ

/(1 + ǫ)

where gµν is the metric the observer experiences in the linear theory. With the non-linearity, the observer

sees the eﬀective metric g˜µν but would not be able to identify matter sources in his universe that would

describe the dynamics arising from the term

χ|gµν |χ χ|χ

.

Using

the

linear

theory,

the

observer

would

infer

the

11

existence of “dark matter” - which in this case would be the existence of a parallel universe. It would be interesting to examine this possible explanation for the observed dark matter in our universe - but we leave this investigation for future work.
Novel gravitational dynamics are possible in this situation. For example, in (15) we may consider a quantum state that is a superposition of a crunching metric and a slowly expanding metric. In linear quantum mechanics the crunching metric would collapse to a singularity - but in this case, the contribution from the slowly expanding metric would alter the dynamics of the crunching state and cause it to undergo a bounce and re-expand. The observer in the crunching universe would view the contributi-
on from the expanding metric as a background null energy violating source. But the source of this null energy violation is positive energy matter in the parallel universe. Similarly, metric interference from other universes can manifest itself observationally as a “long distance modiﬁcation” of gravitation (see Section 4) and can be tested with probes of such modiﬁcations.
A key point to highlight in all of the above discussions is that the non-linear quantum terms are genuinely distinct from theoretical attempts to get novel gravitational phenomena by modifying gravity itself (for reviews, see [17, 18]). In the latter, these modiﬁcations introduce additional degrees of freedom. In this non-linear modiﬁcation, there are no additional degrees of freedom since the ﬁeld content is identical to that of conventional quantum mechanics. The additional “freedom” arises pure-
ly from the freedom in the quantum states themselves. While this freedom exists even in linear quantum mechanics, the non-linearity allows these states to inﬂuence their collective behavior. Note that unlike typical modiﬁcations of gravity, this theory does not appear to hit strong coupling at some arbitrary scale. The cutoﬀ is the Planck scale.

4 Constraints

In this section, we discuss current experimental limits on these non-linearities. Owing to the cosmological

sensitivity of non-linear quantum mechanics (see Section 3.2), limits can only be placed within the context of a

given cosmological scenario. We discuss constraints on three non-linear couplings ǫγ, ǫS and ǫG corresponding to electromagnetism, the strong interactions and gravitation that can be placed on this scenario in a classical

universe where there is considerable overlap between the macroscopic observed world and the total wave-

function of the universe. Even in this case, our analysis indicates that that bounds on these scenarios are

rather weak but that they can be considerably improved with dedicated experiments.

Following this, we discuss constraints on the quantum scenario where our observed world has a tiny

overlap with the total wave-function of the universe. That is, we take the quantum state of the universe

to be of the form |Ψ = √1 |U +
N

1

−

1 N

|R

where |U

is our world and |R

represents vastly diﬀerent

worlds. We discuss two kinds of phenomena in this case. First, we consider expectation values sourced

from

our

world.

These

expectation values are suppressed by

1 N

and thus

the

quantity that aﬀects

non-linear

evolution is the combination ǫ/N . These vanish in the limit N → ∞. Second, we consider the eﬀects of the

expectation value of the entire quantum state on physical processes in our universe. These are direct limits

on ǫ but they are dependent on the state of the overall superposition. We focus on limits that exist even when N → ∞ in this case i.e. limits that are resistant to quantum dilution.
Naively, it would seem that violating quantum mechanics would dramatically alter pristine and well

probed quantum systems such as atomic and nuclear states leading to signiﬁcant constraints on ǫγ and ǫS. This expectation fails due to the following reason. In linear quantum mechanics, when confronted with

a two body problem (such as an electron bound to a nucleus), one can simplify the problem by changing

co-ordinates into the center of mass and relative co-ordinates. The center of mass motion of the system

is irrelevant in determining the bound state energies of the system which only depend on the relative co-

ordinates. In non-linear quantum mechanics, the entire wave-function of the particle is relevant. This is true not just in our speciﬁc modiﬁcation but is a general property of non-linear systems. This implies that the center of mass motion of the system would enter in describing the eﬀects of the non-linearity on the energy

levels of the system.

Let us analyze the speciﬁc case of the electromagnetic coupling ǫγ in the hydrogen atom. Suppose we localize the proton to a ﬁxed point in space i.e. we either take its mass to ∞ or localize it so that the
spread of the proton wave-function is much less than the Bohr radius a0 ∼ 100 pm of the atom. In this case, the non-linearity causes a self-interaction in the electron cloud and it can be veriﬁed that it will break

12

the degeneracy between the 2S and 2P levels of Hydrogen and thus contribute to the Lamb shift. But, in a

typical experiment that measures the Lamb shift the center of mass of the hydrogen atom is not localized.

The spread in the center of mass suppresses the expectation value of the electromagnetic ﬁeld which is

ultimately the term responsible for shifting the energy levels in the atom due to the non-linearity. In a

neutral atom that is localized to a distance λ ≫ a0, the expectation value of the electromagnetic potential is non-zero only over a small thickness ∼ a0 at the edge of the region where the atom is localized. In typical measurements, the Lamb shift is measured via spectroscopy in a gas with vapor densities ∼ 1015 cm−3 [19]

yielding λ ∼ 0.1 µm.

We estimate the maximum energy shift as follows4. Treat the hydrogen atom as being conﬁned within

a box of size λ. Let ψ0 be the part of the total wave-function of the atom with the center of mass of the

atom being in the bulk of the box and ψ1 be the part where the center of mass of the atom being at the

surface of the box within a thickness ∼ a0. The quantum state of the atom is of the form ∼ ψ0 + κψ1 with

|κ|2

∼

a0 λ

∼

10−3.

The

electric

ﬁeld

is

only

non-zero

in

the

surface

region

and

is

of

order

δE

∼

e/λ2.

From

perturbation theory, the energy shift is ∼ ǫγe|κ|2 ψ1|δE|ψ1 ∼ ǫγ α|κ|2δEa0. Requiring this energy shift to

be smaller than the current uncertainty in the Lamb shift ∼ 5 × 10−11 eV, we get |ǫγ| 10−4. This is a very

conservative estimate since the atom is in fact not literally conﬁned in a box of size λ - the wave-function may

spread beyond this, weakening this eﬀect, and the boundaries of the region it is in may have canceling eﬀects

from other atoms. The Lamb shift has also been measured in ions [20] where the ions are also localized to

within ∼ 0.1 µm. The charge of the ion is spread over this distance λ and the electric ﬁeld from this charge

can shift the energies of the electron. Requiring this electric ﬁeld to be smaller than the background electric

ﬁelds in these systems ∼ 50V/cm yields |ǫγ| 1. A more stringent but sign-dependent bound on ǫγ can be placed by making use of the fact that traps

have been used to trap ions. When ǫγ is positive, the non-linearity causes the ion’s wave-function to repel itself leading to a repulsive potential ∼ ǫγαEM /L where L is the size of the trap. This repulsive potential must be smaller than the conﬁning potential of the trap. The conﬁning potentials in the L ∼ 200 nm traps

used in [21] are ∼ 100 neV, yielding ǫγ 10−5. When ǫγ is negative, the non-linearity induces an attractive potential and thus the ion is more easily conﬁned. A detailed mapping of the ion’s conﬁnement within the

trap could constrain ǫγ in this case. It would be interesting to analyze data from current ion trap experiments

to probe ǫγ in this case and we leave this possibility for future work. Similarly, in nuclear physics, it can be veriﬁed that the self interaction causes a state of total angular

momentum L to mix with states of total angular momentum L ± 2n (where n ⊂ Z) as long as L = 0. This mixing would lead to enhanced decay of isomers such as 180mTa that are stabilized by high angular

momentum. But, the decay rate is suppressed by the spread of the nuclear wave function in the gas or

material and thus no useful limit can be extracted from the lifetime of such states.

The fact that non-linear quantum eﬀects can persist in macroscopic bodies even in the presence of

decoherence suggests that these superpositions would be the natural way to probe the gravitational non-

linearity ǫG. But, to realize this possibility, a macroscopic superposition needs to be created. There are straightforward ways of engineering such a superposition and, as we discuss in Section 5, these can be used

to experimentally probe ǫG. But, we are not aware of any current experimental data from human-made systems that can be used to constrain ǫG. It is also the case that the quantum spread of the wave-function

of natural bodies whose gravitational eﬀects are well understood are small - this is not a surprise since such

bodies have a large mass and single quantum events, without the intervention of human engineering, do not

back-react signiﬁcantly on the positions of these macroscopic bodies. For example, a natural source of the

spreading of the wave-functions of the Sun or the Earth is the radiation (thermal or particle emission) from

these objects. We estimate that in the lifetime of the universe, these eﬀects cause the wave-functions of the

Sun and the Earth to spread by no more than 10−11 km, a distance that is too small to be of observational

importance. It thus appears that the only limits on ǫS and ǫG are theoretical ones, requiring them to be smaller than O (1) so that we may describe these systems using perturbative techniques and our extension

is well-deﬁned.

All of the above limits on the various ǫ parameters are assuming a classically evolved universe (i.e.,

N = 1), but really should be considered bounds on ˜ǫ ∼ ǫ/N . In the quantum universe, N = 1, we ﬁrst

consider bounds that arise from sources in our universe. In this context, we can robustly constrain the

4The actual limit requires detailed knowledge of the setup - we perform a conservative, order of magnitude estimate.

13

quantities ǫγ/N and ǫS/N from stellar energy loss arguments. The physical location of a star in our universe

is likely to be a part of empty space in the other universes and thus time dependent expectation values

sourced in the stellar interior can excite particles in other universes leading to energy loss. Using standard

astrophysical

results

on

stellar

energy

loss,

we

get

ǫγ N

,

ǫS N

10−13 [22], thus rendering stronger bounds in

this case than terrestrial ones.

We now consider the case where the expectation value of the full quantum state aﬀects the evolution of

objects in our universe. When we have a large number N → ∞ of universes in the full quantum state, we

can only expect homogeneous eﬀects to persist. Unlike any other quantum ﬁeld, the metric is expected to

have a non-vanishing expectation value in every quantum state. Moreover, since the total energy density

in all these quantum states is positive, the expectation value of the metric across the entire quantum state

will not average down to zero - it may, at worst get diluted to the non-zero ﬂat space metric. A strikingly

N − independent bound can be put on ǫG in this scenario. This is because (for example) the Schwarzschild

metric of an astronomical body will be polluted with a nearly locally ﬂat metric from the rest of the wave

function (where no spherical body exists). Combining the Schwarzschild metric with a ﬂat background

metric proportional to ǫG/(1 − 1/N ) ∼ ǫG, one gets:

ds2

=

1

1 + ǫG

−(1

−

rs r

+

ǫG)dt2

+

1

1

−

rs r

+ ǫG

dr2 + r2dΩ2

(16)

By renormalizing the Schwarzschild radius Rs = rs/ (1 + ǫ), and expanding the eﬀective metric in powers of

Rs r

(as

appropriate

in

weak

gravity) and

ǫG,

we

obtain

an

eﬀective

metric:

ds2 ≃

−(1

−

Rs r

)dt2

+

1

+

Rs r

+

Rs r

2
(1 + ǫG)

dr2

+ r2dΩ2

(17)

This metric diﬀers from the Schwarzschild metric of an isolated body and appears as a long-distance modi-

ﬁcation of gravity. Note though that this eﬀect appears in the spatial part of the metric at O

Rs r

2. Since

the non-trivial spatial part of the metric is the ﬁrst order contribution from General Relativity, the ǫG term

only appears at second order in General Relativity (i.e., reduced by ǫG × (Rs/r) compared with relativistic

corrections). For this reason, there do not appear to be signiﬁcant bounds on ǫG from weak ﬁeld tests of

General Relativity. However, these eﬀects may potentially be fruitfully probed in strong ﬁeld tests of Gen-

eral Relativity, and thus there may already be better than O(1) constraints on ǫG from gravitational wave

detectors. We defer a complete discussion of these analyses for future work.

Note, these bounds on the quantum universe scenario are invalid when N = 1 (classically evolved universe)

because energy cannot be lost from the interior of a star to another part of the wave function if a star is

located at the same place in every universe, and metrics are not changed for the same reason.

5 Experimental Opportunities
In this section, we highlight various experimental protocols and noise mitigation strategies that could be used to probe these non-linearities. In a companion paper, we present fully developed experimental proposals with sensitivity estimates. The cosmological sensitivity of the non-linearity necessitates diﬀerent experimental strategies. Accordingly, we consider two possibilities - a classical universe where the observed world has signiﬁcant overlap with the total wave function of the universe an-
d an inﬂationary quantum universe where the universe is in a superposition of states which all have the same statistical properties.
Given the fact that quantum mechanics underlies the basic laws of nature, one may wonder if a classical universe is ever possible. Naively, one could expect quantum phenomena to result in runaway dynamical behavior that would place the universe in vastly diﬀerent structures. But, there are good reasons to think that the world could be classical. While it is possible to engineer single quantum events to dramatically alter the behavior of macroscopic systems (as we propose to do in the following exp-
erimental protocols), there is reason to be skeptical if such events occur naturally. Suppose one needs to aﬀect the state of ∼ n atoms to signiﬁcantly alter the behavior of a macroscopic system. It is not unreasonable to expect n O (10 − 100) (as opposed to n ∼ 1). The macroscopic system is then governed by the average behavior of these n atoms. The quantum mechanical random spread in this distribution is rapidly suppressed with n. The evolution is

14

dominated by that of the expectation value which evolves in a deterministic and classical way. Interestingly, it is possible that n ∼ 1 for biological systems and we comment about this possibility in Section 5.1.3.
The quantum cosmology case could be considerably more complicated than the inﬂationary scenario considered here with the superposition involving states that do not look anything like our universe at all. But some of the generic strategies outlined in the quantum case are likely to be useful in probing these broader scenarios as well.
5.1 Classical Universe
In a classical universe, there is the potential to probe non-linear quantum mechanics via pristine atomic systems and through persistence of non-linear eﬀects in macroscopic superpositions. We describe these in the following and then address the problem of “quantum pollution”, a potentially worrying fact about preserving these non-linearities given their ﬁckle nature.
5.1.1 Atomic Systems
The electromagnetic self-interaction term ǫγ can potentially be probed via single ion interferometry. Take an ion and place it in a spatial superposition with the ion being at location x1 with probability p and x2 with probability 1 − p. Now, hold the ion at those locations for a time T . The non-linear interaction will induce a relative phase shift between these two paths. Such a phase shift is absent in quantum mechanics. Importantly, this non-linear phase shift depends on the intensities p and -
1 − p of the wave-functions at the two positions x1 and x2. This is unlike the case in quantum mechanics where the phase diﬀerence between two arms of an interferometer is independent of the intensity of the arms. In a single ion system, phase diﬀerences arise due to background noise. But, by using the fact that the non-linear signal depends on the intensity of the arms while the noise does not, it should be possible to engineer diﬀerential measurements that can robustly probe this eﬀect. In fact,-
 it is possible that data from current ion experiments could already place limits on these arm intensity dependent eﬀects leading to bounds on ǫγ that are more stringent than the Lamb shift measurements described above. But, it is clear that a dedicated setup will oﬀer a sharper probe. To obtain the maximum signal, it is advantageous to place the two arms of the ions as close as possible but without overlap in the respective probability densities. Note though that the estimated spread in the wavef-
unction of the Earth due to the emission of radiation limits the closest distance the ions can be brought together to around ∼ 10−11 km = 10 nm. The signal also grows linearly with the interrogation time of the experiment.
5.1.2 Macroscopic Superpositions
The persistence of non-linear interactions even in the presence of decoherence enables the dramatic possibility of using macroscopic systems to test this theory. Consider the following protocol. Depending upon the outcome of a single quantum event (such as a spin measurement), we perform dramatically diﬀerent macroscopic operations. In conventional quantum mechanics we will end up in diﬀerent “worlds” with the respective outcomes. In each of those outcomes, we can now test for the existence of the-
 “other world” by suitable sensors. In the following we outline a few experimental concepts to test various interactions.
1. Place a magnetometer next a coil of wire that initially has no current through it. Place the system in a macroscopic superposition by measuring the outcome of a spin measurement. For example, suppose we measure a spin-1/2 system. If we measure spin up, we turn on current into the coil. If we measure spin down, we leave the wire undisturbed. Then we measure the magnetic ﬁeld in the magnetometer and see if there is an unexpected change in the magnetic ﬁeld arising as a result of the current that -
was turned on in the “other world”. Electric systems in this vein may also be similarly constructed. This setup can be used to probe ǫγ. This protocol could be implemented in an experimental setup such as CASPEr [23].
2. The gravitational coupling ǫG can potentially also be probed by using a protocol similar to the one proposed above. Consider an accelerometer, which could be an optical or atomic interferometer, and a large movable mass. Place the system in a superposition by a spin measurement. If we get spin up, we
15

move the mass near the accelerometer. If we get spin down, we move it away from the accelerometer. In the case where we observed spin down, the accelerometer can be interrogated to probe the existence of the world where the spin was measured to be up. This protocol could be implemented in an experimental setup such as MAGIS [24] or LIGO/VIRGO.
3. In both of the systems considered above, it might also be possible to devise resonant systems that would boost the signal. If the measuring devices were resonant at a certain frequency, in all the cases where the spins were measured to be up, the macroscopic objects (currents, charges, masses) can be moved at the resonant frequency of the measuring device, amplifying the eﬀect of the communication between these “worlds”.
4. To probe shorter range interactions such as QCD (and the weak interactions), one might choose to place material in the pathway of a beam depending upon the outcome of a spin measurement. One could look for the anomalous scattering of the beam in the world where the material was not placed in the beam’s path, the origin of the scattering being the material that was along the beam’s path in the “other world”. These phenomena could be tested in beam dump experiments [25]. These kinds of measuremen-
ts can also be performed using coherent electromagnetic sources such as lasers and microwaves, for example, in experiments such as ALPS [26].
In all of the above cases, the experiments can be trivially modiﬁed to ensure that the eﬀects are discovered in both parts of the macroscopic superposition. For example, in the case of the magnetometer experiment, we could have two well shielded coils with magnetometers in each of them. Depending upon the outcome of the spin measurement, the experimentalist can turn on the current in one coil and measure the magnet ﬁeld in the other coil.
5.1.3 Evolutionary Dilution?
It is conceivable that while the large scale structure of the universe and the solar system are classical, signiﬁcant quantum spread could have occurred in the evolution of biological systems. For example, it is conceivable that single quantum events may have had enormous impact on evolutionary dynamics, e.g., mutations triggered by radioactive decays. In this scenario, it is possible that there might be multiple biological civilizations that are currently co-existing on the Earth, all of them wit-
nessing the same macroscopic classical universe. In this case, the macroscopic eﬀects discussed above will be suppressed due to the small overlap of the experiment with the rest of the wave-function.
The following protocol could be used to detect non-linearities in this case. One may construct a shielded room and place a radio telescope inside this room and use it to try and detect bright coherent astronomical radio sources. If evolution had lead to signiﬁcant spread in local dynamics on the Earth, the shielded room would not be present at that spatial location in most of the wave-function. But, in a classical world, the astronomical source will be identical across the entire wave-function and-
 thus lead to an unsuppressed expectation value of the electromagnetic ﬁeld at that spatial point. The non-linear coupling would allow the radio telescope to detect this expectation value without being suppressed by the local spread of the wavefunction. Interestingly, if such an eﬀect were to be observed, not only would we have discovered non-linear quantum mechanics but we would also have unprecedented access to evolutionary dynamics. Intriguingly, in this case even though evolutionary dynamics d-
ilutes the local non-linearity, it might be possible for human engineering to recover the full non-linear eﬀect. One may for example consider game theory scenarios similar to those used by SETI to search for extra-terrestrial intelligence to send signals to other civilizations that may quantum mechanically co-exist on the Earth. If suﬃciently many of them had also discovered non-linear quantum mechanics, it may be possible to communicate between these branches of the wavefunction (using game theor-
y scenarios, for example, using frequencies and locations of coherent astronomical sources) to coherently restore the possibility of exploiting quantum non-linearities. For example, a number of civilizations could conceivably agree to pick ﬁxed locations on the earth to create coherent electromagnetic ﬁelds that may then be exploited as a community resource.
16

5.1.4 Quantum Pollution
The non-linearity is sourced by the expectation values of various operators and it is thus dependent on the behavior of the entire quantum state. Even in a hitherto classical world where single quantum events have not signiﬁcantly changed the nature of the quantum state near the observer, there is always the potential that such changes could be caused due to the ease with which the world can be placed in macroscopic superpositions. These changes could dramatically suppress the ability to detect an-
d preserve quantum non-linearities.
To illustrate this worry, suppose an experimentalist A performs the magnetometer experiment and discovers this eﬀect. The results are announced and experimentalist B wants to test these results. Suppose it was the case that A’s initial spin measurement was set to return spin up (down) with probability 0.5 (0.5). This implies that the universe is now in a quantum superposition. B is entangled with these two states of A. When B tries to repeat this experiment in B’s laboratory, unless both versions -
of B in this entangled state have current in their coil turned on at the same time, the eﬀective magnetic ﬁeld that could be detected by B would be lower than the corresponding eﬀect seen by A. It is conceivable that these two entangled states of B may choose to turn on current in their coils at diﬀerent times since it is not unreasonable that the discovery of such an eﬀect could result in single quantum events dramatically altering macroscopic behavior even in an otherwise classical world. To mit-
igate this risk, we suggest the following protocols.
1. The initial macroscopic split by using the spin measurement need not be 0.5. It is likely prudent to sacriﬁce sensitivity and preserve the eﬀect. One could then set up the initial spin measurement so that it returns spin up with a probability p ≪ 1 and spin down with probability 1 − p. In this case, the initial signal is smaller by p and would thus require a more sensitive instrument to detect. However, this protects the non-linearity since the initial split can be repeated without signiﬁcantly-
 changing the wave-function. Indeed, for this reason, it would be wise to operate in the regime p ≪ 1 even when A is trying to search for the non-linearity.
2. It would be advantageous to run experiments for suﬃciently long periods of time so that there is the improved possibility of overlap between the diﬀerent versions of B.
3. The dilution of the non-linearity can also be decreased by communicating between diﬀerent parts of the wave-function. For example, if A discovers these eﬀects, A can use his setup as a way to communicate between diﬀerent parts of the superposition and this communication channel can be used by B to ensure that both versions of B agree on experimental protocols.
5.2 Inﬂationary Quantum Universe
In canonical inﬂationary cosmology, the observed universe is in a macroscopic quantum superposition with a large number N of other universes that all have the same statistical properties, but are locally completely diﬀerent. Local experiments of the kind described in sub Section 5.1 are trying to measure the non-linearity by directly manipulating the expectation values of various ﬁelds. These experiments have to contend with two suppressions - the non-linearity parameter ǫ and a suppression of ∼ 1-
/N from the fact that the experiment is only performed in a tiny part of the overall wave-function. In the large N limit, these eﬀects disappear, even if ǫ ∼ O(1).
In this scenario, our observational strategy must hone in on the fact that in the vast majority of the wave-function, any space-time point, x, is in interstellar space, even though in our universe it may be inside a laboratory, the Earth, or a star. We can thus try to detect signatures that should be observable in interstellar space. Importantly, these observables need to source the expectation value of a bosonic ﬁeld (such as electromagnetism) to be discoverable. The following signatures could be-
 fruitfully pursued.
1. One could build a deep underground cosmic ray proton detector. The atmospheric and terrestrial overburden blocks cosmic ray protons from our universe from penetrating to this underground detector. But, the cosmic ray ﬂux at the point x in the wave-function is non-zero and this ﬂux causes a time dependent electromagnetic ﬁeld which can excite the underground detector. The IceCube experiment could potentially be used to search for this possibility but it would need to be able to distinguish high -
energy neutrino events from events caused by protons.
17

2. One may similarly build a well shielded detector to search for coherent electromagnetic waves such as those produced by pulsars. These instruments would be similar to current dark matter detectors such as ADMX [27] and DMRadio [28] that are looking for coherent dark matter waves.
3. Unfortunately, the dominant source of cosmic rays in the universe, namely the cosmic microwave background and starlight, do not give rise to these signatures. This is because in the quantum states of these particles χ|Aµ|χ is eﬀectively zero as they are in states of nearly well deﬁned number. √
In all of the above cases, the signal would average down with the number of universes as ǫ/ N , more favorably than the experiments described in Section 5.1, bu√t nevertheless vanishing in the large N limit.
The reason that the above signatures average down as 1/ N is because of the fact that they are searching for eﬀects that oscillate in time faster than the Hubble scale and are also varying in space. In a isotropic, homogeneous background these eﬀects are expected to average down. We might thus expect isotropic and homogeneous eﬀects that evolve over cosmological time scales to survive even when we have a large number of universes. This is indeed the case - for example, as we discussed earlier, qua-
ntum non-linearity in gravity would imply that an observer can detect metric interference in this universe. The observer would attribute this metric interference to a source of energy density that he is otherwise unable to detect i.e. some sort of “dark energy”. But this “dark energy” would have an equation of state that tracks the cosmological energy density in the universe. Experiments that probe the equation of state of the universe may thus be well placed to probe these eﬀects. Similarly metri-
c interference also leads to departures from the Schwarzschild metric as discussed in Section 4 and manifests itself as a “long distance modiﬁcation” of gravity. Tests of strong ﬁeld General Relativity may thus be used to further probe this scenario. Moreover, as discussed in Section 3.3 metric interference also likely leads to the creation of ﬁrewalls in black hole geometries and these may lead to signatures in gravitational wave detectors and the Event Horizon Telescope. We defer a detailed disc-
ussion of these eﬀects to future work.
6 Comparison with Prior Eﬀorts
Non-linear modiﬁcations to quantum mechanics have been considered in the past and elements of our approach have been discussed. We now describe the ways in which we have advanced these eﬀorts. The speciﬁc framework for modifying quantum mechanics by incorporating state dependent expectation values in quantum ﬁeld theory was considered by Kibble in [7]. This work was entirely focused on the “measurement problem” and did not investigate the wider consequences of this modiﬁcation. Inspired by [7], th-
is class of modiﬁcations were further pursued by [8–12]. These investigations focused on developing a gauge invariant path integral formalism to describe gravitation and discussed experimental consequences in the interference pattern of a single particle where quantum coherence of the interfering particle needs to be maintained. In our paper, we have shown that gauge invariance can be incorporated in a straightforward manner for both gravitation and gauge theories. The experimental avenues that we-
 pursue in this paper are focused on non-linear quantum eﬀects that can be observed in macroscopic systems even in the presence of decoherence.
Building on the formalism of Weinberg [4], Polchinski proposed [5] a causal, non-linear modiﬁcation of single particle quantum mechanics. The persistence of non-linear quantum mechanical eﬀects in the presence of macroscopic decoherence as well as the potential for the dilution of non-linear eﬀects was pointed out in [5]. In our work, the recognition that non-linear eﬀects can be naturally incorporated in quantum ﬁeld theory signiﬁcantly changes the experimental approach towards probing these non--
linearities. It also leads to a reﬁned understanding of the dilution of non-linear eﬀects where we recognize that this dilution is not inevitable but rather depends upon cosmic history. Further, we also recognize that there are some cosmological non-linear eﬀects that are resistant to dilution. In the following, we elaborate on these aspects:
1. The investigations in [5] were aimed at a general understanding of non-linear single particle quantum mechanics and thus the non-linear observables described were toy models that were single particle contact interactions. We have constructed explicit non-linear observables that arise from existing long range interactions in the theory such as electromagnetism and gravitation. These long range ﬁelds vastly change the experimental approach to detecting non-linear quantum mechanical eﬀects: one ma-
y source long range ﬁelds from macroscopic systems (e.g., the gravitational ﬁeld of a macroscopic body)
18

and use these to search for the non-linearity. This allows for an exciting experimental program since the eﬀects could in principle be large as opposed to suppressed contact interactions.
2. The dilution of non-linearities is not automatic. Non-linear eﬀects arise from the expectation values of quantum ﬁelds and as long as the large scale behavior of the universe is classical, all non-linear quantum eﬀects can be experimentally accessed and exploited.
3. We point out that in canonical inﬂationary cosmology where quantum perturbations are the source of structure in the universe, many non-linear quantum eﬀects can be diluted. The fact that nonlinear eﬀects can be associated with long range ﬁelds implies there are astronomical and cosmological signatures that can persist even in the presence of dilution (see sub-section 5.2). Indeed, some of the most dramatic eﬀects such as metric interference leading to new eﬀective sources of “dark energy” in th-
e universe and the modiﬁcation of the Schwarzschild metric persist even in the presence of extraordinary dilution (Section 3.3.3).
4. [5] did not fully develop a consistent understanding of the concept of measurement in non-linear quantum mechanics. We have developed this framework and pointed out that there is a consistent interpretation of measurement phenomena in non-linear quantum mechanics, albeit at the expense of accepting a fundamental source of error in all measurement processes.
7 Conclusion
In this paper, we have shown that ﬁeld theory permits a natural way to introduce causal non-linear time evolution into quantum mechanics. Surprisingly, despite the existence of pristine quantum environments such as atomic and nuclear systems, these modiﬁcations are presently ill constrained. Moreover, we have also shown that any local non-linear modiﬁcation of quantum mechanics is fundamentally ﬁckle - it is highly sensitive to cosmic history and it also has the potential to dilute itself unless p-
roper protocols are followed to preserve its eﬀects. In addition, these non-linear eﬀects are visible even when the quantum system decoheres. This makes it possible to test them in a variety of experiments, even when the underlying quantum state has a complex cosmic history. These are the key results of this paper.
There are several avenues for continued exploration of these ideas. We have articulated many experimental protocols to test this scenario and it would be interesting to develop corresponding experimental proposals. These proposals should develop strategies to mitigate the potential fallout of the “quantum pollution” possibilities inherent in non-linear modiﬁcations. The sensitivity of this scenario to cosmic history makes these kinds of experiments especially important - a positive result would no-
t just fundamentally overthrow the rules of quantum mechanics but it would also provide an unprecedented experimental probe into cosmic history. For example, a positive signal in an experiment that tests the “classical universe” scenario would show that the entire history of the universe has been deterministic. It would be a serious challenge to the conventional inﬂationary paradigm - at the very least it would call for a classical source of perturbations that produced our universe.
Alternately, if experimental measurements, such as those of the cosmic microwave background [29], prove the quantum origin of structure in our universe, it would dynamically explain the hitherto observed linear nature of quantum mechanics. It would also highlight the important role of cosmological measurements of the equation of state of the universe and tests of strong ﬁeld General Relativity to search for non-linear eﬀects that are resistant to such dilution . There is also a clear case to explo-
re the role of non-linearities during inﬂation itself. If quantum non-linearities in either the inﬂaton or in gravitation are signiﬁcant, it is possible that the many distinct universes that are typically produced in inﬂationary cosmology may signiﬁcantly inﬂuence each other’s evolution resulting in a very diﬀerent quantum state than conventionally assumed. Smaller non-linearities could result in interesting non-gaussian structures where one might see a collision induced in the sky from a particle-
 emerging from another universe, similar to the cosmic ray experiments proposed by us.
The implications of discovering non-linearity in quantum mechanics are momentous. It allows for a rewrite of the fundamental rules of physics. We have seen that these non-linearities allow for entirely new causal behavior (such as quantum wormholes) and permit new phenomena in General Relativity (via metric interference) which may help solve the black hole information problem. It would also provide a useful
19

theoretical tool to study strong gravity wherein one may conceive of observers who are co-located in a weakly gravitating parallel universe to probe the physics of strong gravity. The possibility that quantum mechanics itself could be non-linear raises important questions about the pursuit of the ultimate theory of nature that uniﬁes quantum ﬁeld theory with gravitation. These eﬀorts are currently pursued based on the assumption that linear quantum mechanics holds to arbitrary energy. As we have s-
een, modiﬁcations of quantum mechanics can dramatically alter the behavior of physical systems and these modiﬁcations can be ﬁeld dependent. Without experimental knowledge of these facts, it is diﬃcult to see how purely mathematical pursuits of the ultimate theory of nature could result in a unique solution.
There are remarkable technological implications as well: the key advantage oﬀered by quantum computers is their ability to use superpositions to implement multiple computations in parallel. In linear quantum mechanics, this advantage can be realized only if the system is able to retain quantum coherence despite the presence of the environment - a task that has proven to be challenging. The non-linear eﬀects described by us would permit communication between diﬀerent parts of this superposition. On-
e may use a quantum event to place a classical computer into a superposition, run a parallelized algorithm on the classical computer in these “diﬀerent worlds” and then communicate the results of the computation using the non-linearity. While this parallelization realizes some of the beneﬁts of a quantum computer, it does not achieve the full promise of a quantum computer. Unlike linear quantum mechanics, the non-linear eﬀects decrease when the system is placed into a larger superposition. Thus, c-
ommunication of the result of the computation across the entire wave-function requires more energy. There is thus a trade-oﬀ between computation and the energy needed to communicate the results i.e. the power of the protocol increases with the number of times the wave-function is split but this also diminishes the overall strength of the non-linearity. The diminished strength can be compensated for by creating more energetic sources to communicate the non-linearity. This trade oﬀ between informati-
on and energy is useful since the energy necessary for these purposes can be produced by brute force methods (e.g., a power plant) as opposed to the cost associated with computing (e.g., a supercomputer). But, the diminished strength of the non-linearity fundamentally implies that this protocol cannot solve NP problems without a prohibitive increase in the energy associated with communicating the result. This is unlike the case of linear quantum mechanics where the linear eﬀects do not decrease as-
 the system is placed in a large superposition.
These beneﬁts extend beyond just computing - non-linearities can also revolutionize quantum sensing. For example, the fundamental quantum limit on a sensor is set by shot noise. This shot noise limit can be vastly improved by exploiting the non-linearity. Suppose we have a spin 1/2 system where the spin is in the state |S = α|U + β|D and we want to know the coeﬃcients α and β. We can now measure the spin in the bases |U and |D which would place the universe in the superposition α|U |MU + β|D |MD ,-
 where |MU,D are states of the measuring device. In both universes, we now turn on a laser of ﬁxed power and we now try to detect the laser from the other universe. Since the strength of the non-linearity depends on α and β, by measuring the available power, we infer α and β. Interestingly, this phenomenon permits the inference of the full quantum state with a single measurement as opposed to the repeated measurements necessary in linear quantum mechanics. It thus provides an independent realizati-
on of the “Born rule”.
Most stunningly, non-linearities would also make it possible to parallelize large scale human eﬀorts whose purpose is the discovery of information. For example, one may parallelize the search for natural resources. Suppose there is a natural resource in a large area. We may divide the area into a number of individual blocks. We can then appropriately split the wave-function of the universe. In each part of the wave-function we only search for the resource in a particular block. Upon discovery of t-
he resource, the information can be transmitted across the rest of the wave-function using the non-linearity. Given these mind blowing implications and the relatively straightforward experimental program that could be pursued to discover these eﬀects, we believe there is a very strong case to explore this paradigm.
Acknowledgments
We thank Michael Fedderke, Daniel Green, Jason Hogan, Jared Kaplan, Christian Spiering and Raman Sundrum for valuable discussions. SR would like to thank R. Melmon for his friendship and discussions about quantum mechanics.
20

References
[1] J. S. Bell. On the Einstein-Podolsky-Rosen paradox. Physics Physique Fizika, 1:195–200, 1964.
[2] N. David Mermin. What is quantum mechanics trying to tell us? Am. J. Phys., 66:753, 1998.
[3] Simon Kochen and Ernst Specker. The Problem of Hidden Variables in Quantum Mechanics. J. Math. Mech., 17:59–87, 1967.
[4] Steven Weinberg. Testing Quantum Mechanics. Annals Phys., 194:336, 1989.
[5] Joseph Polchinski. Weinberg’s nonlinear quantum mechanics and the EPR paradox. Phys. Rev. Lett., 66:397–400, 1991.
[6] N. Gisin. Weinberg’s non-linear quantum mechanics and supraluminal communications. Physics Letters A, 143(1):1–2, 1990.
[7] T. W. B. Kibble. Relativistic Models of Nonlinear Quantum Mechanics. Commun. Math. Phys., 64:73– 82, 1978.
[8] P. C. E. Stamp. Rationale for a Correlated Worldline Theory of Quantum Gravity. New J. Phys., 17(6):065017, 2015.
[9] Andrei O. Barvinsky, Daniel Carney, and Philip C. E. Stamp. Structure of Correlated Worldline Theories of Quantum Gravity. Phys. Rev. D, 98(8):084052, 2018.
[10] Daniel Carney, Philip C. E. Stamp, and Jacob M. Taylor. Tabletop experiments for quantum gravity: a user’s manual. Class. Quant. Grav., 36(3):034001, 2019.
[11] A. O. Barvinsky, J. Wilson-Gerow, and P. C. E. Stamp. Correlated Worldline theory: Structure and Consistency. Phys. Rev. D, 103(6):064028, 2021.
[12] Jordan Wilson-Gerow and P. C. E. Stamp. Paths and States in the Correlated Worldline Theory of Quantum Gravity. 11 2020.
[13] Anton Kapustin. Is there life beyond Quantum Mechanics? 3 2013.
[14] Kim V. Berghaus, Peter W. Graham, and David E. Kaplan. Minimal Warm Inﬂation. JCAP, 03:034, 2020.
[15] Stefan Hollands, Robert M. Wald, and Jochen Zahn. Quantum instability of the Cauchy horizon in Reissner–Nordstro¨m–deSitter spacetime. Class. Quant. Grav., 37(11):115009, 2020.
[16] David E. Kaplan and Surjeet Rajendran. Firewalls in General Relativity. Phys. Rev. D, 99(4):044033, 2019.
[17] Kurt Hinterbichler. Theoretical Aspects of Massive Gravity. Rev. Mod. Phys., 84:671–710, 2012.
[18] Mich`ele Levi. Eﬀective Field Theories of Post-Newtonian Gravity: A comprehensive review. Rept. Prog. Phys., 83(7):075901, 2020.
[19] D. J. Berkeland, E. A. Hinds, and M. G. Boshier. Precise optical measurement of lamb shifts in atomic hydrogen. Phys. Rev. Lett., 75:2470–2473, Sep 1995.
[20] Musti A. Narasimham and Richard L. Strombotne. Lamb shift in singly ionized helium. Phys. Rev. A, 4:14–32, Jul 1971.
[21] C. Monroe, D. M. Meekhof, B. E. King, W. M. Itano, and D. J. Wineland. Demonstration of a fundamental quantum logic gate. Phys. Rev. Lett., 75:4714–4717, Dec 1995.
[22] Georg G. Raﬀelt. Astrophysical axion bounds. Lect. Notes Phys., 741:51–71, 2008.
21

[23] Dmitry Budker, Peter W. Graham, Micah Ledbetter, Surjeet Rajendran, and Alex Sushkov. Proposal for a Cosmic Axion Spin Precession Experiment (CASPEr). Phys. Rev. X, 4(2):021030, 2014.
[24] Peter W. Graham, Jason M. Hogan, Mark A. Kasevich, and Surjeet Rajendran. A New Method for Gravitational Wave Detection with Atomic Sensors. Phys. Rev. Lett., 110:171102, 2013.
[25] Eder Izaguirre, Gordan Krnjaic, Philip Schuster, and Natalia Toro. New Electron Beam-Dump Experiments to Search for MeV to few-GeV Dark Matter. Phys. Rev. D, 88:114015, 2013.
[26] Klaus Ehret et al. Resonant laser power build-up in ALPS: A ’Light-shining-through-walls’ experiment. Nucl. Instrum. Meth. A, 612:83–96, 2009.
[27] R. Khatiwada et al. Axion Dark Matter eXperiment: Detailed Design and Operations. 9 2020. [28] Saptarshi Chaudhuri, Peter W. Graham, Kent Irwin, Jeremy Mardon, Surjeet Rajendran, and Yue
Zhao. Radio for hidden-photon dark matter detection. Phys. Rev. D, 92(7):075012, 2015. [29] Daniel Green and Rafael A. Porto. Signals of a Quantum Universe. Phys. Rev. Lett., 124(25):251302,
2020.
22

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:29.044Z
- **Text Length:** 96009 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
