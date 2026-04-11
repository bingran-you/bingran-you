# PDF Document: (MS Gate - 2008 Roos) Ion trap quantum gates with amplitude-modulated laser beams.pdf

**File Path:** (MS Gate - 2008 Roos) Ion trap quantum gates with amplitude-modulated laser beams.pdf

**Processed Date:** 2026-02-10T18:15:44.272Z

**File Size:** 477.85 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 389

**Title:** (MS Gate - 2008 Roos) Ion trap quantum gates with amplitude-modulated laser beams

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

arXiv:0710.1204v4 [quant-ph] 14 Jan 2008

Ion trap quantum gates with amplitude-modulated laser beams
Christian F. Roos1,2
1Institut fu¨r Experimentalphysik, Universit¨at Innsbruck, Technikerstr. 25, A-6020 Innsbruck, Austria 2Institut fu¨r Quantenoptik und Quanteninformation der O¨ sterreichischen Akademie der Wissenschaften, Otto-Hittmair-Platz 1, A-6020 Innsbruck, Austria
Abstract. In ion traps, entangling gate operations can be realized by a bichromatic pair of laser beams that collectively interact with the ions. In this paper, a new method of modelling the laser-ion interaction is introduced that turns out to be superior to standard techniques for the description of gate operations on optical qubits. The treatment allows for a comparison of the performance of gates based on σz ⊗ σz and σφ ⊗ σφ interactions on optical transitions where the bichromatic laser ﬁeld -
can be realized by an amplitude-modulated laser resonant with the qubit transition. Shaping the amplitude of the bichromatic laser pulse is shown to make the gates more robust against experimental imperfections.
1. Introduction
The processing of information based on the laws of quantum physics [1] has become a very active ﬁeld of research during the last decade. For the experimental demonstration of fundamental key results of quantum information theory, ion-trap based systems have played a major role. The success of ion trap experiments can be attributed to the fact that encoding quantum information in either hyperﬁne ground or metastable excited atomic states provides well-deﬁned quantum bits (qubits) with long coherenc-
e times. The use of lasers for manipulating the qubit state allows for precisely switchable interactions with low decoherence rates. The fundamental operations of qubit initialization, arbitrary single qubit manipulation and quantum state-detection have already been used in atomic clocks with single ions for many years. Contrary to other realizations [1] of quantum information processing, the most demanding operation in ion traps consists in the realization of an entangling gate operation. Because-
 of the repulsive Coulomb force, the inter-ion distance is orders of magnitude bigger than the characteristic length scale of any state-dependent interaction between ions in ground or low-lying excited states. In all current experiments creating entangled ions [2, 3, 4, 5], gate operations rely on interactions that are mediated by the vibrational degrees of freedom of the ion string. These gate operations fall into two categories:

Ion trap quantum gates with amplitude-modulated laser beams

2

(i) Quantum gates induced by a laser beam that interacts with a single ion at a time as originally proposed in the seminal paper by I. Cirac and P. Zoller [6] and later realized by the Innsbruck ion trapping group [2]. In these gates, a single ion is entangled with a vibrational mode [7] of the ion string and the entanglement is subsequently transferred from the vibrational mode to the internal state of a second ion.
(ii) Quantum gates induced by a bichromatic laser that collectively interacts with two or more ions. Here, a vibrational mode becomes transiently entangled with the qubits before getting disentangled at the end of the gate operation, resulting in an eﬀective interactions between the qubits capable of entangling them. Gates of this type were ﬁrst proposed by G. Milburn [8, 9], A. Sørensen, K. Mølmer [10, 11] and E. Solano [12], and subsequently realized by ion trapping groups in Boulder, Ann Arbor -
and Oxford [3, 4, 5].
Even though both classes of gates are applicable to hyperﬁne qubits as well as optical qubits (i.e. qubits encoded in hyperﬁne states or in states linked by a dipole-forbidden transition with an optical wavelength), current experiments with optical qubits have relied on the former and experiments with hyperﬁne qubits on the latter type of interaction. In any case, the main goal consists in demonstrating fast operations creating entanglement with high ﬁdelity.
The purpose of the present paper is to discuss bichromatic gate operations with a focus on implementations using an optical transition. It turns out that for optical transitions, gate operations are achievable by illuminating the ions with an amplitudemodulated laser beam that is resonant with the qubit transition. The paper is organized as follows: section 2 reviews diﬀerent methods of realizing bichromatic quantum gates and discusses properties that are speciﬁc to their application to optical qu-
bits. In section 3, an eﬀective Hamiltonian for the laser-ion interaction will be derived by going into a reference frame rotating at non-uniform speed in order to eliminate non-resonant excitations of the qubit transition that do not couple to the vibrational mode. In this way, it will be shown that for a single ion qubit the interaction is well described by a Hamiltonian H = i (γ(t)a† − γ(t)∗a)σψ where the coupling strength γ is proportional to the laser intensity in the limit of low intensities-
 but starts to saturate at higher intensities and where σψ = σ · nψ is a component of the Pauli spin operator σ coupling to a vibrational mode of the ion described by creation and annihilation operators a†, a. Furthermore, it will be shown that nψ depends not only on the particular type of gate operation but also on the laser intensity and the relative phase between the two frequencies of the bichromatic ﬁeld. Equations (10), (17), (27) describing the action of the gates based on σz ⊗ σz and on σφ-
 ⊗ σφ (Mølmer-Sørensen) interactions are the key results of the paper. For the Mølmer-Sørensen gate, the result will be compared to the analysis presented in [11]. In addition, the performance of σz ⊗ σz and σφ ⊗ σφ gates will be compared. Section 4 shows how to use pulse-shaping of the laser intensity as well as spin echo techniques to make the gates more robust against ﬂuctuations of the control

Ion trap quantum gates with amplitude-modulated laser beams

3

parameters.

2. Quantum gate operations based on bichromatic laser ﬁelds

2.1. Driven quantum harmonic oscillator

The Hamiltonian H˜ = νa†a + Ωi(a†eiωt − ae−iωt) describes a harmonic oscillator

oscillating at frequency ν and driven by a force with frequency ω and coupling strength Ω. Going into an interaction picture deﬁned by H0 = νa†a yields the Hamiltonian H = Ωi(a†eiδt − ae−iδt), where δ = ω − ν. Under the action of the

driving force, an oscillator that is initially in a coherent state remains in a coherent

state. For a force that is slightly detuned from resonance, the coherent state maps out

a circle in phase space and returns to the initial state after a period τ = 2π/δ. This

operation multiplies the oscillator state by a phase factor whose magnitude is given by

the ratio of the strength of the force and the detuning as shown in [3].

In order to allow for variations of the driving ﬁeld’s strength, we generalize the
Hamiltonian to H = i (γ(t)a† − γ∗(t)a) and calculate its propagator U(t) by using the Baker-Campbell-Hausdorﬀ relation Dˆ (α)Dˆ (β) = Dˆ (α + β) exp(iIm(αβ∗)) for the displacement operator Dˆ (α) = eαa†−α∗a. For the propagator, we ﬁnd

U(t) = lim n→∞

n

exp(− i H(tk)∆t) = Dˆ (α(t)) exp(iΦ(t))

(1)

k=1

where ∆t = t/n, tk = k∆t and

t
α(t) = dt′γ(t′),

0

t

t′

Φ(t) = Im dt′γ(t′) dt′′γ∗(t′′).

0

0

In case of a driving force with constant amplitude, γ(t) = Ωeiδt, one obtains α(t) =

i

Ω δ

(1 − eiδt) and Φ =

Ω δ

2 (δt − sin δt).

After a time τN

= 2πN/|δ|, N

= 1, 2, . . .,

the coherent state returns to its initial state in phase space with its phase changed by

an amount Φ(τN ) = 2πN

Ω δ

2 sign(δ).

By making this phase change depend on the

internal states of a pair of ions, an entangling gate operation can be achieved. For

H = i (γ(t)a† − γ∗(t)a)O

(2)

where O is an operator acting on the qubit states, the propagator (1) is replaced by

Uγ(t) = Dˆ (α(t)O) exp(iΦ(t)O2).

(3)

Choosing the interaction time τ such that α(τ ) = 0 thus realizes a propagator that depends nonlinearly on O and does not alter the vibrational state.

Ion trap quantum gates with amplitude-modulated laser beams

4

2.2. Laser-ion interaction

The interaction of a single ion qubit resonantly excited by a monochromatic laser ﬁeld with frequency ωL is usually described by performing a rotating-wave approximation with respect to the optical frequency to obtain the Hamiltonian

H=

Ωσ e e −iδt iη(ae−iνt+a†eiνt) +

+

h.c.,

(4)

Here, δ = ωL − ω0 is the detuning from the qubit transition frequency ω0, ν is the frequency of the ion’s vibrational mode of interest, and σ+ = (σx + iσy)/2 with the Pauli matrices σx,y. The strength of the laser-ion coupling is characterized by the Rabi frequency Ω, and the strength of processes involving changes in the vibrational state

is determined by the value of the Lamb-Dicke parameter η. Equation (4) represents a

Hamiltonian in an interaction picture that is deﬁned with respect to the Hamiltonian

H0 =

νa†a +

ω0 2

σz

describing

the

ion

qubit

in

the

absence

of

any

laser-ion

interactions.

If η ≪ 1, the Lamb-Dicke approximation eiη(ae−iνt+a†eiνt) ≈ 1 + iη(ae−iνt + a†eiνt) is used

to simplify (4). The resulting three terms describe excitations on the carrier, the lower

and the upper motional sideband, respectively. The generalization of the Hamiltonian to

the case of two and more ions is straightforward. For the sake of simplicity, calculations

in section 3 will be limited to the case of the laser coupling to the centre-of-mass mode

along the axis of the ion string where all ions experience the same coupling strength. A

detailed account of laser-ion interactions is given in [13].

2.3. σz ⊗ σz gate
A Hamiltonian as described by (2) was employed for the ﬁrst time in an experiment [14] creating a Schro¨dinger cat state with a single ion using O = σz, i.e. a coupling to the motional mode that depended on the internal energy eigenstate of the ion. Later, it was realized that the same type of coupling could be used to entangle a pair of ions by performing a conditional phase gate [9, 3]. In the experimental realizations [3, 5], spin-dependent forces acting on a pair of hyperﬁne or Zeeman ground s-
tates have been realized by near resonant driving of Raman transitions between vibrational states (see Figure 1). For this purpose, two non-copropagating laser beams with frequencies ωb, ωr form a moving standing wave with diﬀerence frequency ωb − ωr close to the frequency ν of a vibrational mode. The ac-Stark shift of the qubit states | ↓ ,| ↑ results from a non-resonant coupling to another atomic state |e that is made qubit state-dependent by properly chosen polarizations. Since the laser ﬁeld e-
xhibits a strong spatiotemporal modulation, the resulting potential gradients induce a force acting on the qubits that is state-dependent and that couples to the vibrational mode by displacing the qubit along a circle in phase space. When the ions couple to the centre-of-mass mode (stretch mode), the coupling to the mode can be made to disappear when both qubits are in the same quantum state by choosing an ion spacing that is an odd (even) integer multiple of half the wavelength of the moving stan-
ding wave. Disregarding unimportant global and single qubit phases, this coupling is then described by an operator O = Sz where

Ion trap quantum gates with amplitude-modulated laser beams

5

Figure 1. Raman coupling of motional states for a hyperﬁne or Zeeman qubit. (a) The states | ↑, n = 0 , | ↑, n = 1 are coupled via the excited state |e . A similar coupling not shown in the ﬁgure exists for the qubit state | ↓ . The laser detunings ∆1, ∆2 from the mediating states are large compared with trap frequency ν and the qubit level spacing ω0 to avoid spontaneous emission from state |e . Constructive interference of paths 1 and 2 is achieved for counter-propagating laser beams. (b) The co-
upling is maximized for counter-propagating laser beams with frequencies ωb, ωr forming a moving standing wave along the axis of vibration of the motional mode of interest.
Sz = σz(1) + σz(2) is a collective spin component of the qubits. The situation is diﬀerent for qubits encoded in atomic states connected by a narrow
optical transition. For coupling motional states | ↓, n = 0 ↔ | ↓, n = 1 , here, the other qubit state | ↑ serves to mediate the coupling. Similarly, a coupling between the states | ↑, n = 0 ↔ | ↑, n = 1 is mediated by the state | ↓ . To achieve a strong coupling, a detuning ∆i from the intermediate states can be chosen that is smaller than the transition frequency between vibrational states provided that the decay rate of the metastable state is small compared to ν. For ωb,r = ω0 ± ν/2, the two i-
nterfering paths shown in Figure 2a connecting levels | ↓, n = 0 ↔ | ↓, n = 1 have equal strength. Since the detunings from the mediating states now have opposite signs, destructive interference is achieved for counter-propagating beams whereas the coupling is maximized for copropagating beams. In the limit of small excitation (Ω ≪ ν), the coupling strength ΩR,0 on the Raman transition between | ↓, n = 0 and | ↓, n = 1 is given by ΩR,0 = 2ηΩ2/ν. The states | ↑, n = 0 and | ↑, n = 1 are coupled wit-
h equal strength but opposite sign. For stronger excitation, the carrier transition is non-resonantly excited which leads to a saturation of ΩR,0. As long as the intensities of the bichromatic beams are equal, there is no overall ac-Stark shift due to excitation of the carrier transition and the ﬁrst motional sidebands because ac-Stark shifts caused by the two laser ﬁelds exactly cancel each other.
In the case of two ions excited on the centre-of-mass mode, a driven quantum mechanical oscillator is realized with collective atomic oscillator O = Sz. In addition to the coupling of vibrational states, there is another small Mølmer-Sørensen coupling [10] that does not exist for the case of hyperﬁne or Zeeman qubits: collective spin ﬂips between the states | ↓↓, n and | ↑↑, n occur by processes involving a blue and a red photon that are mediated by the states | ↓↑, n ± 1 and | ↑↓, n ± 1 (see Figu-
re 3). A similar process involving either two blue or two red photons couples the states | ↑↓, n

Ion trap quantum gates with amplitude-modulated laser beams

6

Figure 2. Raman coupling of motional states for an optical qubit. (a) The coupling for states | ↑, n = 0 , | ↑, n = 1 is mediated by the states | ↓, n = 0 , | ↓, n = 1 and vice versa on the narrow qubit transition. Since spontaneous scattering from the mediating state is small, the detuning can be made small compared to the trap frequency. For ∆1 = ν/2, ∆2 = −ν/2, the coupling is maximized by choosing a copropagating beam geometry. (b) Optimum coupling is achieved for co-propagating laser beams wi-
th frequencies ωb, ωr propagating along the axis of vibration of the motional mode of interest. As the bichromatic laser ﬁeld could also be described by a monochromatic laser ﬁeld that is amplitude-modulated with a frequency ωb −ωr close to the vibrational frequency, no spatially varying ac-Stark shifts are involved in the coupling.

Figure 3. Mølmer-Sørensen gate. A bichromatic laser ﬁeld with frequencies ωb, ωr satisfying 2ω0 = ωb + ωr is tuned close to the upper and lower motional sideband of the qubit transition. The ﬁeld couples the qubit states | ↓↓ ↔ | ↑↑ via the four interfering paths shown in the ﬁgure. Similar processes couple the states | ↑↓ ↔ | ↓↑ with the same strength provided that the Rabi frequencies of the light ﬁelds ωb, ωr are equal.
and | ↓↑, n .
2.4. σφ ⊗ σφ gate
In contrast to σz ⊗ σz gates that do not change the internal states of the ions, the σφ ⊗ σφ gate operations ﬁrst investigated by A. Sørensen, K. Mølmer [10] and others [12] relies on collective spin ﬂips | ↓↓ ↔ | ↑↑ , | ↓↑ ↔ | ↓↑ by processes coupling to the lower and upper motional sidebands as illustrated in Figure 3. It can be shown that the Hamiltonian governing the action of the gate is described by setting O = cos φSx + sin φSy [15, 16]. For a properly chosen coupling strength, the gate

Ion trap quantum gates with amplitude-modulated laser beams

7

operations maps the product state basis {| ↑↑ , | ↑↓ , | ↓↑ , | ↓↓ } onto a basis of entangled states. For hyperﬁne qubits, a detailed discussion of advantageous beam geometries is presented in [18]. In the case of optical qubits, it is again possible to choose a pair of co-propagating beams for performing the gate operation. The only diﬀerence to the σz ⊗σz gate consists in the choice of laser frequencies ωb,r = ω0 ±ν required for achieving a resonant coupling. Formally, the gate operation is equ-
ivalent to a σz ⊗ σz interaction in a rotated basis. To stress this analogy, the Mølmer-Sørensen gate operation is often also called a σφ ⊗ σφ gate.
The possibility of choosing co-propagating laser beams for performing either σz ⊗σz or σφ ⊗ σφ gates is attractive from an experimental point of view. The light ﬁeld could be generated by passing a laser beam through an acousto-optical modulator driven by two radio-frequency ﬁelds and subsequently coupling the ﬁrst-order diﬀracted beams into a single-mode optical ﬁbre, thus realizing a simple and stable setup ‡. If the Rabi frequencies Ωb, Ωr of the blue and the red detuned laser beam are equal, l-
ight shifts due to the non-resonant excitation of the carrier transition and the ﬁrst-order sidebands are exactly cancelled. Light shifts arising from coupling to other Zeeman transitions or far-detuned dipole transitions could be cancelled by suitably balancing the ratio Ωb/Ωr.

3. Eﬀective Hamiltonians for σz ⊗ σz and σφ ⊗ σφ gates

We are interested in deriving an eﬀective Hamiltonian that accurately describes the dynamics on a pair of optical qubits induced by a co-propagating bichromatic laser ﬁeld with frequencies ωb,r = ω0 ± δ, where the detuning is either close to half the vibrational frequency or close to the vibrational frequency, i. e. δ = (ν −ǫ)/2 or δ = ν −ǫ with ǫ ≪ ν. As optical qubits interacting with lasers typically have smaller Lamb-Dicke parameters than hyperﬁne qubits coupled by Raman transitions, transient-
 non-resonant excitation of the carrier transition is expected to play an important role for Ω ν. Whereas usually non-resonant interactions are taken into account only qualitatively after having derived an eﬀective Hamiltonian, in the following calculation they will be eliminated right at the beginning by going into a reference frame rotating at non-uniform speed.
The Hamiltonian for the bichromatic laser ﬁeld we are interested in, is given by

H = Ωe−iφS+(e−i(δt+ζ) + e )e i(δt+ζ) iη(ae−iνt+a†eiνt) + h.c. .

(5)

The laser is assumed to interact collectively with m ions on the axial centre-of-mass

mode. Here, S+ =

m i= 1

σ+(i),

and

a,

a†

denote

operators

annihilating

and

creating

phonons. It is also possible to interpret this interaction as being due to a single resonant

laser beam that is amplitude-modulated with modulation frequency δ. The optical phase

‡ In principle, σφ ⊗ σφ gate operations could also be achieved by phase-modulating a laser with a modulation frequency close to ν by choosing a modulation index where the carrier strength vanishes. However, this approach has the strong disadvantage that even small changes of the modulation index from the desired value give rise to light resonant with the transition which is having desastrous eﬀects on the gate performance. Similarly, modulating at frequency close to 2ν and using the carrier and on-
e of the ﬁrst sidebands is problematic because of light shifts induced by the other sidebands.

Ion trap quantum gates with amplitude-modulated laser beams

8

of the laser ﬁeld is denoted φ, and the phase ζ accounts for a time diﬀerence between the start of the gate operation and the maximum of the amplitude modulation on the laser beam. Using the picture of an amplitude-modulated resonant beam, it is obvious that there are fast dynamical processes on the carrier transition with a periodicity given by τ = 2π/δ that excite the ions to the other state in the ﬁrst half of the period and transfer it back to the original state in the second half. We are not -
really interested in exactly calculating the dynamical evolution of the quantum state on this fast time scale. Rather, we would like to know the time evolution at the instances τ, 2τ, 3τ, . . . , τ = 2π/δ. It is useful to rewrite (5) as

H = f (t)(e−iφS+Dˆ (iηeiνt) + eiφS−Dˆ (−iηeiνt))
= f (t)((Sx cos φ+Sy sin φ)(D+ + D−) + i(Sy cos φ−Sx sin φ)(D+ − D−)) =: f (t)(Sx(φ)(D+ + D−) + iSy(φ)(D+ − D−)) ,
where we used the displacement operator Dˆ (α) = eαa†−a∗a and the deﬁnitions Dˆ ± = D(±iηeiνt)/2, Sx(φ) = Sx cos φ + Sy sin φ, Sy(φ) = Sy cos φ − Sx sin φ and f (t) = 2Ω cos(δt + ζ). For δ = ν/2 or δ = ν as required by either σz ⊗σz or σφ ⊗σφ interactions, the Hamiltonian is periodic in time, i. e. H(t + τ ) = H(t) with period τ = 2π/δ. Note that we assume the two-photon couplings to be strictly resonant for the moment. In the next step, we will get rid of the fast non-resonant carrier oscillation-
 by going into another interaction picture deﬁned by H0 = f (t)Sx(φ). Writing

H = f (t)Sx(φ) + H1, with H1 = f (t)(Sx(φ)(D+ + D− − 1) + iSy(φ)(D+ − D−)) ,

we obtain the interaction Hamiltonian HI = e H e iF (t)Sx(φ) 1 −iF (t)Sx(φ)
= f (t)Sx(φ)(D++D−−1) + f (t) cos(2F (t))Sy(φ) − sin(2F (t))Sz i(D+ −D−),

where

F (t)

=

2Ω δ

(sin(δt

+

ζ) −

sin ζ).

(6)

Now, we can approximate the time evolution over the course of an oscillation period by

a Magnus expansion of the propagator [19] in order to obtain

UI(t) = exp − i

t 0

dt′HI (t′)

−

i 2

t

t′

dt′ dt′′[HI (t′), HI(t′′)] + . . .

0

0

.

(7)

From now on, the phase φ will be set to zero to simplify the notation. The formulas in the remainder of section 3 are easily generalized to the case of arbitrary φ by making the replacements Sx → Sx(φ) and Sy → Sy(φ).
In the following two subsections, eﬀective Hamiltonians for the σz ⊗ σz gate and the σφ ⊗ σφ gate will be derived starting from (7). We are interested in obtaining Hamiltonians of the form given in (2) that are valid in the regime Ω ≪ ν. In addition, the calculation is going to yield correction terms for the case when Ω ≪ ν no longer

Ion trap quantum gates with amplitude-modulated laser beams

9

strictly holds and additional terms that do not commute with the atomic operator O in (2). Towards this aim, terms proportional to higher orders of the expansion parameter (Ω/δ) will be dropped. In the calculation, Bessel functions Jn(x) will be evaluated at x = 4Ω/δ. These functions will be kept till the end of the calculation and expanded in Ω/δ only for the ﬁnal analysis.

3.1. σz ⊗ σz gate

For the σz ⊗ σz gate, we set δ = ν/2. We start by calculating the ﬁrst term

He(fI ,f1)

=

1 τ

τ 0

dt′HI

(t′)

appearing

in

the

exponent

of

(7).

Here, it is important to

note that the integrand HI(t) =

∞ k=−∞

H(k)eikδt

is

a

periodic

function

of

time

with

period τ = 2π/δ so that all its Fourier components except the constant term H(0) will

average to zero when they are integrated over one period. The only non-zero Fourier

components of the function f (t) = Ω(ei(δt+ζ) +e−i(δt+ζ)) =

∞ n=−∞

fneinδt

are

f+1

=

Ωeiζ

and f−1 = Ωe−iζ. Since all non-zero Fourier components of (D++D−−1) are even integer

multiples of δ, the Sx-term of HI averages to zero. Therefore, we obtain

τ

He(fI,f1) = τ

dt f (t) (cos(2F (t))Sy − sin(2F (t))Sz) i(D+ − D−) .
0

In the Lamb-Dicke limit,

∞

i(D+ − D−) ≈ − η(ae−i2δt + a†ei2δt) =:

dneinδt ,

n=−∞

and the components d+2 = −ηa† and d−2 = −ηa are the only relevant ones. Finally, we

have

cos(2F (t))Sy − sin(2F (t))Sz =

1 2

ei2F (t)(Sy + iSz) + e−i2F (t)(Sy − iSz)

=

Aei

4Ω δ

sin(δt+ζ )

+

A†

e−i

4Ω δ

sin(δt+ζ )

=

∞
(AJn
n=−∞

(

4Ω δ

)

+

A†Jn

(−

4Ω δ

))einζ

einδt

∞

=:

aneinδt ,

n=−∞

where

Jn

is

a

Bessel

function,

A

=

1 2

(Sy

+

iSz )e−iψ

with

ψ

=

4Ω δ

sin ζ

,

(8)

and

an

=

(AJn(

4Ω δ

)

+

A†Jn

(−

4Ω δ

))einζ

=

(A

+

(−1)n

A†)Jn(

4Ω δ

)einζ

.

In

the

following,

the

argument 4Ω/δ of the Bessel functions Jn will often be dropped to keep the notation

simple. It is convenient to express A ± A† as

Sy,ψ := Sy cos ψ + Sz sin ψ = A + A† Sz,ψ := Sz cos ψ − Sy sin ψ = −i(A − A†).

(9)

Ion trap quantum gates with amplitude-modulated laser beams

10

Note that the linear transformation (9) preserves the usual Lie algebra commutation

relations for the operators Sx, Sy,ψ, Sz,ψ. The four terms f+1d−2a+1,f−1d+2a−1, and to a lesser degree f+1d+2a−3, f−1d−2a+3, contribute to He(fI)f . Evaluating

f+1d−2a+1

=

(Ωeiζ )(−ηa)(A

−

A†)J1(

4Ω δ

)eiζ

=

−ηΩJ1e2iζ iaSz,ψ

as well as the other terms, we arrive at the eﬀective Hamiltonian

He(fI,f1) = i ηΩ(J1 + J3)(e−2iζ a† − e2iζ a)Sz,ψ ,

where ηΩ(J1 + J3) ≈ (2ηΩ2/δ)(1 − 4Ω2/(3δ2)). This Hamiltonian describes a spindependent force that starts to saturate when the Rabi frequency goes up. While the

atomic operator O = Sz,ψ coincides in the limit of weak excitation with the operator Sz obtained from second-order perturbation theory, it depends on the phase ζ between the

blue- and the red-detuned laser beams in the limit of strong excitation. For the periodic

Hamiltonian HI(t) =

∞ k=−∞

Hkeikδt

,

the

second

order

contribution

to

the

eﬀective

Hamiltonian He(fI)f is given by

He(fI,f2) =

1 δ

∞

1 m

[H(m),

H(−m)]

.

m=1

After evaluating the commutators [H(1), H(−1)], [H(3), H(−3)], the eﬀective Hamiltonian

He(fI )f

=i

ηΩ(J1 + J3)Sz,ψ(a†e−2iζ − ae2iζ ) − 4

η2Ω2 3δ

J0

2Sy2,ψ

is obtained (the contribution of the commutator [H(2), H(−2)] ∝ (ηΩ)2(Ω/δ)6 is insigniﬁcant). If the detuning δ = (ν − ǫ)/2 slightly deviates from half the oscillation

frequency ν, the Hamiltonian is given by

He(fI )f

=i

ηΩ(J1 + J3)Sz,ψ(a†ei(ǫt−2ζ) − ae−i(ǫt−2ζ)) − 4

η2Ω2 3δ

J02Sy2,ψ

(10)

is

obtained.

The

second

order

term

He(fI

,2) f

account

for collective

spin

ﬂip

processes

caused

by a Mølmer-Sørensen interaction. If this interaction did not exist, the propagator could

be calculated in the same way as for the driven harmonic oscillator described by (2). In the limit Ω ≪ ν, where ηΩ(J1 + J3) = 2ηΩ2/δ + O(Ω4), the time evolution from t=0 to t∗ = 2π/|ǫ| would create a mapping of quantum states φ(0) → φ(t∗) described by the

operator

UI (t∗) = exp(iθt∗Sz2,ψ)

with

θt∗

=

π 2

4ηΩ2 ǫδ

2
sign(ǫ).

For m = 2 ions, the operator UI(t∗) performs a conditional phase gate if θt∗ = π/8. For ζ = 0 and weak excitation (Ω ≪ ν), this requires setting the coupling strength Ω = Ωc with

Ω2c

=

|ǫ|δ 8η

(11)

Ion trap quantum gates with amplitude-modulated laser beams

11

In the limit where Ω ≪ ν no longer holds, saturation eﬀects reduce the geometric phase

Φ picked up in the gate operation. For Ω = Ωc, we would now have

θt∗

≈

π 8

1

−

2 3ηNt

,

(12)

where Nt = ν/|ǫ| counts the number of trap cycles during the gate operation. For

η = 0.1 and a gate time of 100 trap cycles, Φ is reduced by about 7%. The smaller the

Lamb-Dicke factor gets, the more important saturation eﬀects become for a given gate

time. The Mølmer-Sørensen interaction contributes a term to the propagator UI (t∗) which is now approximately described by

UI (t∗) ≈ exp(iθt∗Sz2,ψ) exp(iκt∗Sy2,ψ)

(13)

with

κt∗

=

π 2

4ηΩ2 ǫδ

2

|ǫ|δ 3Ω2

.

(14)

For the ratio κ/θ,

κ θ

=

8 3

η.

(15)

If η ≪ 1, the contribution from the second term ∝ Sy2,ψ is comparatively small.

Up to now, we have disregarded the fact that the eﬀective Hamiltonian is valid only

for

times

T

=

2π δ

N,

N

=

1, 2, . . .

where

δ

=

1 2

(ν

− ǫ).

Therefore,

the

gate

time

T

needs

to fulﬁl |ǫ|T = 2π as well as δT = 2πN, with integer N. Combining both conditions,

we ﬁnd

ǫ

=

ν 2N +

1,

N ∈N

In writing equation (13), terms arising from the non-vanishing commutator

[Sz,ψ, Sy2,ψ] were neglected. Using the abbreviations Ωm = ηΩ(J1 + J3) and ΩMS = 4η2Ω2J02/(3δ), it is convenient to rewrite He(fI)f = HA + HB with

HA = HB =

ΩmiSz,ψ(a†ei(ǫt−2ζ) − ae−i(ǫt−2ζ)) −

ΩM S 2

(Sx2

−

Sy2,ψ ),

ΩM S 2

(Sx2

+

Sy2,ψ )

since HA and HB commute. The time evolution induced by HA is given by the

propagator

UA(t)

=

Dˆ (λ(t)Sz,ψ)

exp(iΦ(t)Sz2,ψ )

exp(i

ΩM S 2

t

(Sx2

+

Sy2,ψ ))

(16)

with λ(t) = −ie−i2ζ (Ωm/ǫ)(eiǫt − 1) and Φ(t) = (Ωm/ǫ)2(ǫt − sin(ǫt)), and for the interaction Hamiltonian HI,B = UA† HBUA one ﬁnds

HI,B =

ΩM S 2

(Cˆ(4λ(t))(Sx2

−

Sy2,ψ )

+

Sˆ(4λ(t)){Sx,

Sy,ψ}).

Here, the displacement operator Dˆ (±α) = Cˆ(α)±iSˆ(α) was expressed by the real-valued

operators Cˆ and Sˆ. For the special case ζ = 0 this is equivalent to

HI,B =

ΩM S 4

(Dˆ (−4λ(t))S+2

+

Dˆ (4λ(t))S−2 ).

Ion trap quantum gates with amplitude-modulated laser beams

12

The last expression shows that the interaction Hamiltonian HI,B describes collective spin ﬂips between the levels | ↓↓ and | ↑↑ that go along with displacements of the vibrational state. For a phase gate operation, max(|4λ(t)|) ≈ 2. Minimum uncertainty states of motion are not conserved by the interaction.

3.2. Mølmer-Sørensen gate operation

The formalism developed so far can be employed to study the Mølmer-Sørensen gate as

Hamiltonian (5) also describes the bichromatic laser ﬁeld of the Mølmer-Sørensen gate.

Since the laser frequencies are set close to the blue and red sideband resonance, the only

diﬀerence

is

that

δ

=

ν

−ǫ

instead

of

δ

=

1 2

(ν

− ǫ),

thus

changing

the

values

of

the

Fourier components dn used to express D±. Taking into account the leading terms in

ﬁrst and second order for the calculation of (7), one ﬁnds the eﬀective Hamiltonian

He(fI )f

=

−ηΩ(J0

+

J2 )Sy,ψ (a† ei(ǫt−ζ )

+

ae−i(ǫt−ζ))

−

η2Ω2 2δ

J02Sy2,ψ

+

2η2Ω2 3δ

J1

2Sz2,ψ

(17)

instead

of

(10).

Integrating

from

t

=

0

to

t∗

=

2π |ǫ|

and

neglecting

commutators

involving

Sz,ψ in the Magnus expansion, yields the propagator

UI (t∗) ≈ exp it∗

η2Ω2 ǫ

((J0

+

J2)2

+

η2Ω2 2δ

J0

2

Sy2,ψ

−

2η2Ω2 3δ

J12Sz2,ψ

= exp(iλt∗Sy2,ψ) exp(−iµt∗Sz2,ψ)

(18)

with

λt∗

=

π

2η2Ω2 ǫ|ǫ|

(J0

+

J2)2

+

ǫ 2δ

J02

(19)

µt∗

≈

π

16η2Ω4 3|ǫ|δ3

.

(20)

The contribution ∝ 1/(2δ) comes from the counter-rotating term, the red laser coupling to the blue sideband and vice versa. For weak excitation, we have

UI (t∗) = exp

iπ

2η2Ω2 ǫ|ǫ|

Sy2,ψ

For

m

=

2

ions,

an

entangling

gate

operation

is

achieved

by

setting

|λt∗|

=

π 8

which

amounts to setting the coupling strength Ω to

Ωc

=

|ǫ| 4η

.

(21)

In the limit where Ω ≪ ν is no longer valid but where |ǫ/η| ≪ ν still holds, we ﬁnd for the correction terms in (19) when keeping Ω = Ωc

|λt∗|

≈

π 8

1

−

1 4(ηNt)2

−

sign(ǫ) 2Nt

.

(22)

and for the ratio

µ λ

≈

6(η

1 Nt)2Nt

.

(23)

Ion trap quantum gates with amplitude-modulated laser beams

13

For η = 0.1 and a gate operation that is performed within 100 trap cycles, the correction
terms to λt∗ have a relative strength of 0.25% and 0.5%, respectively, and the Sz2,ψ interaction is less that 10−4 of the Sy2,ψ term. Therefore, the interaction is quite well approximated by using the propagator (18) with µt∗ set to zero. Then, one obtains for
arbitrary t

UI (t) = Dˆ (α(t)Sy,ψ) exp i(λt − χ sin(ǫt))Sy2,ψ

where

α(t)

=

ηΩ ǫ

(J0

+

J2 )e−iζ (eiǫt

−

1)

(24)

λ

=

η2Ω2 ǫ

(J0

+

J2)2

+

ǫ 2δ

J02

(25)

χ

=

η2Ω2 ǫ2

(J0

+

J2)2

(26)

In the reference frame of the original Hamiltonian (5), the laser-ion interaction is

therefore well described by the propagator

U (t) = exp(−iF (t)Sx)Dˆ (α(t)Sy,ψ) exp i(λt − χ sin(ǫt))Sy2,ψ .

(27)

This propagator can be used to calculate the dynamics of expectation values of

interest for the qubits. It is possible to derive simple expressions by tracing over the

motional states if the vibrational mode is in a thermal state. For this, it is useful to note that Dˆ (α(t)Sy,ψ) = λ Dˆ (α(t)λ)Pλ where Pλ denotes the projector onto the subspace spanned by eigenvectors of Sy,ψ with eigenvalue λ. Moreover, the diagonal
elements of the displacement operator in the number-state representation are given by n|Dˆ (α)|n = exp(−|α|2/2)Ln(|α|2) where Ln denotes a Laguerre polynomial [20]. Since
the generating function of Ln(β) is given by [21]

g(x, β) =

∞

Ln(β)xn

=

1

1 −

x

exp

−

1

βx −x

,

n=0

summation

over

a

thermal

state

with

number

state

population

pn

=

1 n¯+1

(

n¯ n¯+1

)n

and

mean phonon number n¯ simply yields

pn n|Dˆ (α)|n = exp

−|α|2(n¯

+

1 2

)

.

n

In the case of two ions, ζ = 0, and an initial qubit state ρA = | ↓↓ ↓↓ |, the expectation

value O(t) = TrQ(Oρ(t)) of the observable O is given by

O(t)

=

1 16

TrQ(OV

{(Sz2

+

Sx2)

−

4Sz

e−4|α|2(n¯+

1 2

)

+

(Sz2

−

Sx2

)e−16|α|2

(n¯ +

1 2

)})

where TrQ refers to the trace of the qubit state space and OV = V OV † with V (t) = exp(−iF (t)Sx) exp(iγ(t)Sy2) and γ(t) = λt−χ sin(ǫt). As an example, the time evolution of ↓↓ |ρ(t)| ↓↓ is explicitely given by

p↓↓(t)

=

1 8

(2

+

cos2(2F )) +

1 2

cos(2F

)

cos(4γ

)e−4|α|2(n¯+

1 2

)

+

1 8

cos2

(2F

)e−16|α|2

(n¯ +

1 2

)

Ion trap quantum gates with amplitude-modulated laser beams

14

Figure 4. (a) Time evolution of the density matrix elements of two ions in a thermal state with n = 2 undergoing a Mølmer-Sørensen interaction with Ω = 0.0885 ν, η = 0.1, ǫ = 0.05 ν and ζ = 0. The calculations are based on (27). The values chosen reproduce the curves shown in Figure 3(b) of reference [11]. Counting from above at νt = 60, the curves represent the populations ρ↓↓,↓↓, ρ↑↑,↑↑ and the coherences Im(ρ↓↓,↑↑) and Re(ρ↓↓,↑↑). At νt ≈ 250 (t = 4π/ǫ), the ions are in a maximally entangled st-
ate. (b) Same as (a) but with ζ = π/2. If the gate operation starts in an intensity minimum of the amplitude-modulated laser beam, the non-resonant carrier oscillations are much stronger. At νt = 250, the quantum state is no longer maximally entangled. (c) Fidelity F = √ψmax|ρ(t)|ψmax of creating the maximally entangled state |ψmax = (| ↓↓ − i| ↑↑ )/ 2 near the optimum calculated from (27). The upper curve corresponds to ζ = 0, the lower one to ζ = π/2. The points on top of the upper curve represe-
nt the ﬁdelity for ζ = 0 and were obtained by a numerical integration of the Hamiltonian (5) after applying the Lamb-Dicke approximation. (d) Inﬁdelity 1 − F of the gate at νt = 250 for ζ = 0 and a state with n = 0. The solid line is a numerical integration of (5) in the Lamb-Dicke approximation, the dash-dotted line is based on the full Hamiltonian. The arrow labelled ’α’ denotes the optimum Rabi frequency predicted by (21), ’β’ the value of Ω chosen in [11], ’γ’ the Rabi frequency predicted by (-
25).

Ion trap quantum gates with amplitude-modulated laser beams

15

Figure 5. Performance of the σφ ⊗ σφ gate as a function of the phase ζ for a gate

operation taking place in 25 trap cycles with η = 0.05, δ = 0.96 ν and Ω = 0.221 ν.

The ﬁgure shows the distance d(Uex, Uid,φ) between the exact propagator Uex obtained

by

numerical

integration

of

(5)

and

the

gate

operation

Uid,φ

=

exp(i

π 8

Sy2,ψ )

(solid

line).

The points on top of the line denote d(Uex, U(27)) where U(27) is the propagator given

by (27), thus demonstrating that this equation is a very good approximation to the

exact

solution.

The

dashed-dotted

line

shows

d(Uex, Uid,φ)

with

Uid,φ

=

exp(i

π 8

Sy2)

and

the dotted line d(Uex, Upert) with Upert = exp(i2πη2Ω2/ǫ2Sy2) as predicted by simple

second-order perturbation theory. More details regarding the distance measure d are

given in the text.

with α(t),γ(t),F (t) containing the time dependent terms. Other quantities of interest

could be calculated in the same way.

A propagator similar to (27) was calculated in ref. [11] for the case ζ = 0. The

authors argued that the non-resonant excitation of the carrier transition could be

neglected in a ﬁrst step and obtained in this way a Hamiltonian of the type described by

(2) that could be integrated exactly. In a second step, they considered the inﬂuence of

the previously neglected non-resonant excitations. While this treatment yields correct

results for ζ = 0, it fails to predict the dependence of the gate operation on ζ via the

angle ψ as given by (27). Figure 4 shows the time evolution of matrix elements for the

same parameters as used in [11] for the cases ζ = 0 and ζ = π/2. In the latter case,

the amplitude of the non-resonant carrier oscillations is considerable and the input state

| ↓↓ is never perfectly mapped to a maximally entangled state. For ζ = 0, the eﬀect of

a non-zero value of ψ is fairly small for current gate realizations using hyperﬁne qubits

where the Lamb-Dicke parameter η is considerable. However, it becomes crucial for the

realization of fast gates on optical qubits with small η since in this case the gate requires

a larger value of Ω to achieve the same gate speed.

Figure 5 shows a comparison of the diﬀerent propagators for the gate operation with

η = 0.05 taking place in 25 trap cycles (δ = 0.96ν). For the prediction of the required

coupling

strength

Ω

for

a

gate

operation

realizing

Uid,φ

=

exp(i

π 8

Sy2,ψ

),

equation

(25)

was iteratively solved to yield λt∗ = π/8. The propagator Uex was obtained from a

numerical integration of (5). Then, Uex was compared to Uid,φ, to the propagator of

(27),

to

Uid

=

exp(i

π 8

Sy2

)

and

to

the

prediction

Upert

=

exp(i2πη2Ω2/ǫ2Sy2)

of

second-

Ion trap quantum gates with amplitude-modulated laser beams

16

Gate type Rabi frequency Saturation strength Coupling ratio

σz ⊗ σ√z Ω/ν = 1/(4 ηNt)
γ = 2/(3ηNt) κ/θ = 8/(3η)

σφ ⊗ σφ
Ω/ν = 1/(4ηNt) γ = 1/(4η2Nt2) µ/λ = 1/(6η2Nt3)

Table 1. Comparison of σz ⊗ σz and σφ ⊗ σφ gates. The ﬁrst row gives the Rabi frequency Ω required to peform an entangling gate operation as a function of η and the gate duration. The latter is expressed as the number of trap oscillation periods Nt. The second row lists the reduction in coupling strength for this kind of gate due to saturation eﬀects. The third row compares the unwanted to the desired coupling strength.

order perturbation theory. Since the exact propagator does not perfectly return the

motional state to the initial state at the end of the gate, the following procedure was

applied for the calculation of the distance d between the propagators: we assume that

the ions are initially in the motional ground state and that a cooling mechanisms returns

the motional state to the ground state at the end of the gate operation without aﬀecting

the qubit states. This turns the unitary evolution into a quantum process acting only

on the internal states of the ions. For the comparison of two quantum processes E1, E2,

the ρ1,

ρp2rofocreswsehsicahrethme adpispteadncuesdin(gρ1t,hρe2)J=am1i−olktro(wsk√i ρis1oρm2√orρp1)hiissmcaolcnutolatdeedns[2it2y,

matrices 23]. The

results show that the propagator given by (27) correctly predicts the coupling strength

as well as the operator realized by the gate operation. It also becomes obvious that

Uid considerably deviates from the operation generated by the Hamiltonian (5) unless ζ = 0.

3.3. Comparison of σz ⊗ σz and σφ ⊗ σφ gates
The main advantage of the σz ⊗ σz interaction on optical qubits appears to be its insensitivity to changes in the optical path length. In the limit of weak excitation, the gate operation tolerates changes that occur within the gate operation as in each elementary process a photon is absorbed and another one emitted into the same laser beam (this property does not hold for hyperﬁne qubits since here Raman beams in a counter-propagating conﬁguration are used). If higher Rabi frequencies are used, th-
e interaction rather becomes σz,ψ ⊗ σz,ψ which make it susceptible to path-length ﬂuctuations within the gate time. Still, if amplitude-shaped pulses are applied (see section 4), the gate operation tolerates changes of the path length that occur between consecutive applications of the gate. This is not the case for the Mølmer-Sørensen gate which becomes robust against changes between gate operations but remains susceptible to changes occurring within the gate when the gate is sandwiched between π/-
2 pulses applied to both qubits.
The σz ⊗ σz gate, however, seems to be much less favorable with respect to the following criteria: (i) the Rabi frequency that is required for performing the gate

Ion trap quantum gates with amplitude-modulated laser beams

17

operation in a given time, (ii) the strength of saturation eﬀects reducing the coupling for the Rabi frequency needed for the gate operation, and (iii) the ratio between the desired and the unwanted spin-spin couplings. Table 1 shows a comparison of the gates with respect to these criteria, thus summarizing the results (11), (12), (15) for the σz ⊗ σz gate and (21), (22), (23) for the σφ ⊗σφ gate. For all three criteria, the Mølmer-Sørensen performs better. Having a low Rabi frequency is also of i-
nterest when it comes to nonresonant excitation of other vibrational modes or light shifts induced by excitation of far-detuned dipole transitions.

4. Amplitude-shaped pulses and spin echos

4.1. Amplitude-shaped laser pulses

In the limit of fast gate operations, the Hamiltonians (10), (17) become sensitive to the

phase ζ which is related to the intensity of the bichromatic laser ﬁeld at the start of the

gate operation. It is therefore interesting to shape the intensity of the bichromatic

laser ﬁeld during the gate operation so that the atomic operator O(t) = Sj,ψ(t),

with

ψ(t)

=

4Ω(t) δ

sin

ζ,

appearing

in

the

Hamiltonians

becomes

time-dependent

but

independent of ζ at the beginning and at the end of the gate when the intensity is low.

In this way, the gate could be made insensitive to ζ by an adiabatic process where O(t)

evolves from Sj at the start of the gate operations to a ζ-dependent operator Sj,ψ(t) and back to Sj. However, the state α(t) of the vibrational mode generally does not return to its original state at the end of the gate under the action of the propagator (3) when

the coupling γ(t) is made time-dependent. There is, however, a class of shaped pulses

with the property α(τ ) = 0 that can be constructed in the following way: By applying

an amplitude-shaped pulse twice with a sign change in the coupling between the two

pulses, i. e. γ2(t) = −γ1(t), one obtains the propagator

U = U−γ(2τ, τ )Uγ(τ, 0) = exp(i2Φ(τ )O2)

because the ﬁrst and the second pulse displace the motional state into opposite directions but by an equal amount (see (3)). A quantum state that is displaced along a circle in phase space by an oﬀ-resonant force of constant magnitude, γ(t) = Ωeiǫt, t ∈ [0, 2π/ǫ], can be viewed as a special case of this pulse form with τ = π/ǫ. For the bichromatic gates based on the interactions (10), (17), the sign change can be accomplished by either shifting the phase ζ during the action of the second pulse by -
an amount π/2 (π), respectively, or by changing the overall phase of the laser by π during the second pulse (i.e. Ω → −Ω).
Figure 6 illustrates the use of amplitude-shaping in order to make the MølmerSørensen gate operation robust against ﬂuctuations in the phase ζ between the blueand the red-detuned laser beam. In this example, an entangling gate is accomplished within N = 50 trap oscillation periods by a pair of laser pulses with Ω(t + τ ) = −Ω(t), for t ≤ τ with τ = πN/ν. As shown in Figure 6a, the pulses are switched on and oﬀ within eight trap cycles. After the ﬁrst pulse, the vibrational state has not returned

Ion trap quantum gates with amplitude-modulated laser beams

18

Figure 6. Mølmer-Sørensen gate operation with two amplitude-shaped laser pulses based on the full Hamiltonian (5) without Lamb-Dicke approximation. For parameters Ωmax = max(|Ω|) = 0.167 ν, η = 0.05, the gate takes place during 50 trap oscillation periods. The pulses are switched on and oﬀ during 8 trap cycles using a cos2proﬁle. During the second pulse, the phase of the blue- and the red-detuned beam is shifted by π with respect to the ﬁrst pulse. (a) Time evolution of the populations p↑↑, p↓↓, p-
↓↑ + p↑↓. when starting from state | ↑↑, n = 0 at time t = 0. The dotted line shows the coupling strength |Ω(t)|/(2Ωmax), the dashed line is the average number of vibrational quanta. (b) Inﬁdelity of the ﬁnal state as a function of the phase ζ. The upper curve shows the strong inﬂuence of the phase for a gate operation with constant coupling strength Ω = 0.147 ν where a high-ﬁdelity operation is achieved only for ζ = 0. For the amplitude-shaped gate, the ﬁdelity is practically independent of ζ. Si-
milar results are also obtained for other input states. For a realistic calculation of F , decoherence caused by spontaneous decay of the metastable state would have to be taken into account.

to its initial state. It is only after the second pulse that the correlations between the

vibrational state and the qubit states vanish again. Using this technique, the initial state

| ↑↑, n = 0

is

mapped

to

the

target

state

√1 2

(|

↑↑

+ i| ↓↓ )|n = 0

with an inﬁdelity of

below 10−5 (see Figure 6b). This is in sharp contrast to the case of an excitation of the

same duration with constant amplitude where the inﬁdelity depends on the phase ζ and

varies between 10−4 and 0.2. Similar results are also obtained for other input states.

4.2. Spin echos
Spin echo pulses can be combined with amplitude-shaped laser pulses to make the σz ⊗σz gate more robust against imperfections. It is possible to implement the conditional phase gate operation by having the motional state perform two circles in phase space so that the gate pulse can be split up into two separate pulses. Since the quantum states | ↑↑ , | ↓↓ as well as the states | ↑↓ , | ↓↑ pick up the same phases Φ↑↑ = Φ↓↓, Φ↑↓ = Φ↓↑, it is possible to exchange the states | ↑↑ ↔ | ↓↓ , | ↓↑ ↔ | ↑↓ -
by a collective π-pulse sandwiched between the two gate pulses and to exchange the populations at the end of the gate sequence again. The ﬁrst spin-echo π-pulse inverts the direction of the force on the motional state so that the motional state returns to the initial state after the second spin-dependent pulse. In contrast to the case of shaped pulses without spin-echo, there is no need for changing the phase ζ of the second pulse or the sign of the coupling

Ion trap quantum gates with amplitude-modulated laser beams

19

strength Ω. The spin echo procedure is advantageous for the following reasons:
(i) The gate becomes more robust against unequal light intensities on the ions.
(ii) Single qubit phases arising from light shifts are transformed into an unimportant global phase. In the context of this gate, light shifts will mainly be due to an imbalance in the power of the blue and the red-detuned laser beams and also due to very oﬀ-resonant excitation of dipole transitions. In addition, a light shift δls occurs if the average frequency ωL of the bichromatic light ﬁeld does not exactly coincide with the atomic transition frequency ω0. However, this light shift will be fai-
rly small as δls ∝ (Ω/δ)2(ωL − ω0).
(iii) Collective spin ﬂips arising from the term Sy2 in (10) can be cancelled to ﬁrst order by choosing rotation axes for the π-pulses on ion 1 and ion 2 that diﬀer by 90◦ (xrotation on ion 1 and y-rotation on ion 2). This eﬀectively changes the sign of the rotation angle κ occurring in (13) for the second pulse and eliminates the spin ﬂip contribution of the interaction. To perform diﬀerent π-pulses on both ions requires, however, either a diﬀerent trap frequency that changes the distance between-
 the ions by λ/4 or an additional laser beam.
In the limit of short gate operations, spin echos become somewhat less eﬃcient in cancelling perturbations described by Sz interactions as the gate interaction ∝ Sz2,ψ no longer commutes with Sz for ψ = 0.
For the Mølmer-Sørensen gate operation, where [Sy2,ψ, Sz] is not a small quantity, spin echos seem to be of limited use. If, however, the gate interaction is sandwiched between a pair of collective π/2 pulses to turn it into a σz ⊗σz interaction, spin echos are helpful for cancelling perturbations occurring between consecutive gates. Also, it should be noted that a spin-echo like technique was already proposed in ref. [10] in order to cope with number-state dependent ac-Stark shifts that arise if -
the gate is implemented by illuminating ion 1 with a red-detuned laser beam and ion 2 with a blue-detuned laser beam instead of using a bichromatic light ﬁeld for both ions.

5. Conclusions
Collective laser-ion interactions with bichromatic laser beams are capable of performing both σz⊗σz gates as well as Mølmer-Sørensen gate operations. The analysis shows that it is important to include non-resonant excitation of the carrier transition for the precise calculation of the gate operation. While the paper was focused on the case of qubit states linked by a weak optical transition, the discussion of the Mølmer-Sørensen gate interaction applies also to hyperﬁne qubits where non-resonant c-
arrier excitation also occurs in the limit of fast gate operations. For optical qubits, the required laser beams can chosen to be co-propagating which allows for a robust and experimentally easily realizable setup where an acousto-optical modulator is used in single-pass conﬁguration to create the bichromatic light ﬁeld. In a direct comparison of the gates, the MølmerSørensen interaction seems to be advantageous in terms of required laser power and

Ion trap quantum gates with amplitude-modulated laser beams

20

gate accuracy while the σz ⊗ σz interaction has the advantage of being robust even against certain path length ﬂuctuations occuring during the gate operation in the limit of weak driving where Sz,ψ ≈ Sz. For gate durations coming close to T = 2π/(ην), control of the phase ζ between the red- and the blue-detuned laser beams is of vital importance unless the gate is performed using amplitude-shaped laser pulses. In this case, the requirements are strongly relaxed and the gates appear to be very prom-
ising for experimental realization. The possibility of using a single laser beam for global single qubit and entangling operations opens also interesting perspectives for creating multi-particle entangled states with more than two ions. The operations using this beam could be combined with an oﬀ-resonant strongly focussed beam capable of inducing σz operations on individual qubits in order to create a larger variety of complex entangled states.

Acknowledgments
This work was supported by the Austrian Science Fund (FWF), DTO and the EU network SCALA. The author wishes to thank W. Du¨r for discussions and J. Benhelm for helpful comments and a critical reading of the manuscript.

References
[1] Nielsen M A, and Chuang I L 2000 Quantum Computation and Quantum Information, Cambridge University Press, Cambridge.
[2] Schmidt–Kaler F et al. 2003 Nature 422 408. [3] Leibfried D et al. 2003 Nature 422 412. [4] Haljan P C et al. 2005 Phys. Rev. A 72 062316. [5] Home J P et al. 2006 New J. Phys. 8 188. [6] Cirac J I, and Zoller P 1995 Phys. Rev. Lett. 74 4091. [7] Monroe C, Meekhoﬀ D M, King B E, Itano W M, and Wineland D J 1995, Phys. Rev. Lett. 75
4714. [8] Milburn G J 1999, preprint, arXiv:quant-ph/9908037. [9] Milburn G J, Schneider S, and James D F V 2000 Fortschr. Phys. 48 801. [10] Sørensen A, and Mølmer K 1999 Phys. Rev. Lett. 82 1971. [11] Sørensen A, and Mølmer K 2000 Phys. Rev. A 62 022311. [12] Solano E, de Matos Filho R L, and Zagury N 1999 Phys. Rev. A 59 R2539. [13] Leibfried D, Blatt R, Monroe C, and Wineland D J 2003 Rev. Mod. Phys. 75 281. [14] Monroe C M, Meekhof D M, King B E, and Wineland D J 1996 Science 272 1131. [15] W-
allentowitz S, and Vogel W 1995 Phys. Rev. Lett. 75 2932. [16] Solano E, de Matos Filho R L, and Zagury N 2001 Phys. Rev. Lett. 87 060402. [17] Kim K et al. 2007, preprint, arXiv:0710.3950. [18] Lee P J, Brickman K-A, Deslauriers L, Haljan P C, Duan L-M, and Monroe C 2005 J. Opt. B:
Quantum Semiclass. Opt. 7 S371. [19] Magnus W 1954 Commun. Pure Appl. Math. 7 649. [20] Cahill K E and Glauber R J 1969 Phys. Rev. 177 1857. [21] Abramowitz M and Stegun I A 1972 Handbook of mathematical functions (New York: Dover
Publications) p 784 [22] Gilchrist A, Langford N. K., and Nielsen M A 2005 Phys. Rev. A 71 062310.

Ion trap quantum gates with amplitude-modulated laser beams

21

[23] Du¨r W, Hein M, Cirac J I, and Briegel H.-J. 2005 Phys. Rev. A 72 052326.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:44.272Z
- **Text Length:** 52576 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
