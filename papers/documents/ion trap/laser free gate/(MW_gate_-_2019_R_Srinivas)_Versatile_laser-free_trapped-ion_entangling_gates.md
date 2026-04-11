# PDF Document: (MW gate - 2019 R Srinivas) Versatile laser-free trapped-ion entangling gates.pdf

**File Path:** (MW gate - 2019 R Srinivas) Versatile laser-free trapped-ion entangling gates.pdf

**Processed Date:** 2026-02-10T18:17:53.795Z

**File Size:** 756.01 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 367

**Title:** (MW gate - 2019 R Srinivas) Versatile laser-free trapped-ion entangling gates

**Collection:** Ion Trap > Laser free gate

---

## Extracted Text Content

PAPER • OPEN ACCESS
Versatile laser-free trapped-ion entangling gates
To cite this article: R T Sutherland et al 2019 New J. Phys. 21 033033
View the article online for updates and enhancements.

You may also like
- Enhanced qubit readout using locally generated squeezing and inbuilt Purcelldecay suppression Luke C G Govia and Aashish A Clerk
- Laser-free trapped ion entangling gates with AESE: adiabatic elimination of spinmotion entanglement R Tyler Sutherland and Michael Foss-Feig
- Mitigating leakage errors due to cavity modes in a superconducting quantum computer T G McConkey, J H Béjanin, C T Earnest et al.

This content was downloaded from IP address 73.223.132.237 on 15/03/2024 at 07:18

New J. Phys. 21 (2019) 033033

https://doi.org/10.1088/1367-2630/ab0be5

PAPER

OPEN ACCESS
RECEIVED
18 October 2018
REVISED
25 February 2019
ACCEPTED FOR PUBLICATION
1 March 2019
PUBLISHED
28 March 2019

Versatile laser-free trapped-ion entangling gates
R T Sutherland1, R Srinivas2,3, S C Burd2,3, D Leibfried2, A C Wilson2, D J Wineland2,3,4, D T C Allcock2,3,4, D H Slichter2 and S B Libby1
1 Physics Division, Physical and Life Sciences, Lawrence Livermore National Laboratory, Livermore, CA 94550, United States of America 2 Time and Frequency Division, National Institute of Standards and Technology, Boulder, CO 80305, United States of America 3 Department of Physics, University of Colorado, Boulder, CO 80309, United States of America 4 Department of Physics, University of Oregon, Eugene, OR 97403, United States of America E-mail: sutherland11@llnl.gov
Keywords: quantum physics, quantum computing, quantum logic, quantum gates, atomic physics, trapped-ions, geometric phase gates

Original content from this

work may be used under

the terms of the Creative Abstract

Commons Attribution 3.0 licence.

We present a general theory for laser-free entangling gates with trapped-ion hyperﬁne qubits, using

Any further distribution of either static or oscillating magnetic-ﬁeld gradients combined with a pair of uniform microwave ﬁelds

this work must maintain attribution to the

symmetrically detuned about the qubit frequency. By transforming into a ‘bichromatic’ interaction

author(s) and the title of the work, journal citation

picture, we show that either sˆf Ä sˆf or sˆz Ä sˆz geometric phase gates can be performed. The gate

and DOI.

basis is determined by selecting the microwave detuning. The driving parameters can be tuned to

provide intrinsic dynamical decoupling from qubit frequency ﬂuctuations. The sˆz Ä sˆz gates can be

implemented in a novel manner which eases experimental constraints. We present numerical

simulations of gate ﬁdelities assuming realistic parameters.

1. Introduction
Due to their inherent uniformity and exceptional coherence properties, trapped ions are a promising platform for scalable quantum simulations and general purpose quantum computing [1–6]. Quantum entanglement, a necessary component of these two applications, is created in the ions’ internal degrees of freedom via coupling to shared motional modes [1]. This spin-motion coupling is achieved with one or more spatially dependent electromagnetic ﬁelds. One of the critical challenges for trapped-ion quan-
tum logic is obtaining robust, scalable methods for spin-motion coupling with minimal error. The best entangling gate operations to date (ﬁdelity ≈0.999) have been implemented using lasers and hyperﬁne qubits [7, 8]. In this scheme, two interfering noncopropagating laser beams create a moving optical lattice, whose state-dependent force couples the ions’ internal degrees of freedom to their shared motion. The dominant errors reported in [7, 8] are due to photon scattering [9]. An alternative schem-
e uses microwaves and magnetic ﬁeld gradients (static or oscillating) to create the desired spin-motion coupling [10–18]. Such laser-free gates are not limited by photon scattering, and phase control is signiﬁcantly easier than in the optical domain. Furthermore, microwave and rf sources are readily scalable to meet the requirements of larger quantum processors.
Recently, a microwave-based Mølmer-Sørenson (sˆf Ä sˆf, where sˆf º sˆx cos f + sˆy sin f) entangling gate [19–21] was demonstrated with a ﬁdelity of approximately 0.997 [16]. This high-ﬁdelity microwave gate, which relies on magnetic ﬁeld gradients oscillating close to the qubit frequency, was achieved using an additional dynamical decoupling ﬁeld [22–25] to suppress errors due to qubit frequency ﬂuctuations, the main source of decoherence in the system. However, the dynamical decoupling demonstr-
ated in [16] requires an extra ﬁeld that is separate from, and commutes with, the gate Hamiltonian. This increases the experimental complexity as precision phase control of an additional ﬁeld is required.
Proposals for laser-free sˆz Ä sˆz geometric phase gates [11, 26] require an oscillating magnetic ﬁeld gradient close to the ions’ motional frequency. These gates are appealing because static qubit frequency shifts commute with the gate and can be canceled with a spin-echo sequence[27, 28]. However, experimental techniques for generating the necessary gradients usually also result in residual near-resonant electric ﬁelds which excite the ion

© 2019 The Author(s). Published by IOP Publishing Ltd on behalf of the Institute of Physics and Deutsche Physikalische Gesellschaft

New J. Phys. 21 (2019) 033033

R T Sutherland et al

motion and impact gate ﬁdelity [11]. These technical challenges limit the implementation of high-ﬁdelity laserfree sˆz Ä sˆz gates.
Previous laser-free trapped-ion quantum logic experiments with oscillating gradients used a pair of nearﬁeld microwave gradients, symmetrically detuned about the qubit frequency, to generate the spin-motion coupling required for an entangling gate [13, 16]. To reduce off-resonant qubit excitations and ac Zeeman shifts, the microwave magnetic ﬁeld was minimized at the position of the ions. Recent theoretical work, however, has shown that gates can still be performed in the presence of microwave ﬁel-
ds when the qubits are in the dressed state basis with respect to a monochromatic ﬁeld [18]. In typical implementations of geometric phase gates, the microwave ﬁeld is bichromatic, which complicates analyzing the gate in the dressed-state basis.
In the work reported here, we derive two-qubit gate dynamics in the interaction picture with respect to the bichromatic microwave ﬁeld already present in current experimental implementations of geometric phase gates. We refer to this as the bichromatic interaction picture. We ﬁnd that the dynamics in this interaction picture produce the same ﬁnal state as in the laboratory frame, as long as the bichromatic ﬁelds are turned on and off adiabatically. For some conﬁgurations, the gate basis can be cho-
sen to be either sˆz Ä sˆz or sˆf Ä sˆf simply by changing the detuning of the bichromatic ﬁeld. By analyzing these gates in the bichromatic interaction picture, we show that it is possible to dynamically decouple from qubit frequency shifts without adding an extra ﬁeld. Finally, we show that this technique enables sˆz Ä sˆz gates with all ﬁelds far detuned from the ions’ motional frequencies.
The outline of our paper is as follows. In section 2, we give the theoretical framework for analyzing microwave gates in the bichromatic interaction picture. We then demonstrate how sˆf Ä sˆf gates, sˆz Ä sˆz gates, and intrinsic dynamical decoupling can be implemented using this framework. In section 3, we apply our theory to three experimental situations: a static magnetic ﬁeld gradient, one that is oscillating close to the qubit
frequency, and one that is oscillating close to the motional frequency. In section 4, we present numerical calculations of gate ﬁdelities for the near-motional gradient scheme, showing the impact of experimental
imperfections on gate performance. In section 5, we present conclusions and prospects for future work.

2. Gates in the bichromatic interaction picture

2.1. Interaction picture dynamics We assume a Hamiltonian Hˆ (t ), acting on the state ∣y (t )ñ, consisting of two parts:

Hˆ (t) = Hˆm (t) + Hˆ g (t),

(1)

where we will go into the interaction picture with respect to Hˆm (t ), and Hˆg (t ) is the remainder of the Hamiltonian. We assume that Hˆm (t ) commutes with itself at all times, and make no such assumption about Hˆg (t ). Transforming into the interaction picture with respect to Hˆm gives an interaction picture Hamiltonian HˆI (t ):

HˆI (t) = Uˆ †(t)Hˆ (t)Uˆ (t) + i U˙ˆ †(t)Uˆ (t) = Uˆ †(t)Hˆ g (t)Uˆ (t),

(2)

where

{ } ò Uˆ (t) = exp - i t dt¢Hˆm(t¢) . 0

(3)

In this frame, the time evolution of the transformed state

∣f (t)ñ º Uˆ †(t)∣y (t)ñ,

(4)

is governed by the interaction picture Schrödinger equation

i ∣f˙ (t)ñ = HˆI (t)∣f (t)ñ.

(5)

After applying HˆI (t ) to ∣y (0)ñ for a duration tf, the evolution of ∣y (tf )ñ is described by the unitary propagator TˆI (tf ) obtained by solving equation (5). Thus, the ﬁnal state in the original frame is given by:

∣y (tf )ñ = Uˆ (tf )∣f (tf )ñ = Uˆ (tf )TˆI (tf )∣f (0)ñ = Uˆ (tf )TˆI (tf )Uˆ †(0)∣y (0)ñ.

(6)

If after the time evolution Uˆ (tf )  Iˆ (Uˆ †(0) = Iˆ trivially), where Iˆ is the identity operator, we ﬁnd that

∣y (tf )ñ  TˆI (tf )∣y (0)ñ,

(7)

meaning that the propagator in the interaction picture is equal to the propagator in the original frame. This well-
known result is used extensively in this paper. In section 2.2.3 we show that for this system, the desired limit Uˆ (tf )  Iˆ can be realized by turning Hˆm on and off adiabatically with pulse shaping.

2

New J. Phys. 21 (2019) 033033

R T Sutherland et al

2.2. Microwave-driven bichromatic gates
In this work, we consider a general Hamiltonian for microwave-based gates between n trapped ions with identical qubit frequencies5:

Hˆ lab (t)

=

w0 2

Sˆz

+

wr aˆ†aˆ

+

2 WmSˆi {cos([w0

+

d]t)

+

cos([w0

-

d ] t )}

+

2 Wg

f

(t)Sˆj {aˆ

+

aˆ†}.

(8)

We deﬁne n-ion Pauli spin operators Sˆi º ån sˆi,n, with iä{x, y} and jä{x, y, z}, where z refers to the qubit quantization axis and ω0 is the qubit frequency. We consider an ion crystal whose internal states are coupled via a motional mode with frequency ωr and creation (annihilation) operators aˆ†(aˆ). We assume that all other motional modes are sufﬁciently detuned from ωr that they will not couple to the spins. Here, Ωμ,g are Rabi frequencies. The Ωμ term represents two ﬁelds of equal ampli-
tude, detuned from the qubit frequency by ±δ (with δ=ω0), which only affect the internal states. The Ωg term couples the internal states and the motion and
is implemented with a gradient (along the motional mode) of the j component of a magnetic ﬁeld. The time

dependence f (t) of the gradient can be an arbitrary function of time; here, we take f (t) to be either constant or

sinusoidally oscillating.

We transform equation (8) into the interaction picture with respect to the ‘bare’ ion Hamiltonian Hˆ0 = w0Sˆz 2 + wr aˆ†aˆ, and make a rotating wave approximation to eliminate terms near 2ω0, yielding6:

Hˆ (t) = Hˆm (t) + Hˆ g (t) = 2 WmSˆi cos(dt) + 2 Wg f (t)Sˆj {aˆe-iwr t + aˆ†eiwr t}.

(9)

We refer to this reference frame as the ion frame. Hamiltonians Hˆm (t ) and Hˆg (t ), which we refer to as the microwave ﬁeld term and the gradient term, respectively, are the transformed third and fourth terms of equation (8). In equations (8) and (9), the operator Sˆj in the gradient term also implicitly incorporates information about the motional mode, and is deﬁned here so that it corresponds to a center-of-mass mode7. For
simplicity, we assume that all ions are the same, and can be addressed with a single pair of microwave ﬁelds. We
note that the following formalism can be generalized to the case of multiple qubit frequencies—either for
multiple ion species, or for ions of the same species as discussed for example in [14]—by using multiple pairs of
microwave ﬁelds.

2.2.1. Bichromatic interaction picture We now examine the ion frame Hamiltonian from equation (9) in the bichromatic interaction picture with respect to the microwave ﬁeld term Hˆm (t ). This reference frame, rotating at a nonuniform rate, has been utilized in the context of laser-driven gates [21] to accurately quantify the effect of an off-resonant ﬁeld. Here, we are
interested in analyzing gates in the bichromatic interaction picture itself, as motivated in section 2.1. Note that,
for simplicity, we take Ωμ to be constant (i.e. we neglect pulse shaping) until section 2.2.3. We move into the interaction picture with respect to the bichromatic ﬁeld by making the transformation:

{ ò } { ò } Uˆ (t) = exp - i t dt¢Hm(t¢) 0

= exp -2iWmSˆi t dt ¢ cos(dt ¢)
0

= exp{-iF (t)Sˆi}.

(10)

Here F (t )

º

2Wm

sin(dt d

)

.

The

interaction

picture

Hamiltonian

is

then:

HˆI (t) = 2 Wg f (t){aˆe-iwr t + aˆ†eiwr t}eiF (t)Sˆi Sˆj e-iF (t)Sˆi.

(11)

Focusing on the Pauli operators in equation (11):

eiF (t)Sˆi Sˆj e-iF (t)Sˆi = {Iˆ cos(F (t)) + iSˆi sin(F (t))}Sˆj e-iF (t)Sˆi = Sˆj + i[Sˆi, Sˆj]sin(F (t))e-iF (t)Sˆi.

(12)

Inserting this into equation (11) gives:

HˆI (t) = 2 Wg f (t){aˆe-iwr t + aˆ†eiwr t}{Sˆj + i[Sˆi, Sˆj]sin(F (t))e-iF (t)Sˆi}.

(13)

If i=j, then equation (12) Sˆj, and HˆI (t ) is equal to Hˆg (t ). However, if i ¹ j, then equation (13) becomes:

HˆI (t) = 2 Wg f (t){aˆe-iwr t + aˆ†eiwr t}{Sˆj cos(2F (t)) - ijk Sˆk sin(2F (t))}.

(14)

5 We note that this Hamiltonian also describes laser-based gates, but here we only consider microwave-based gates. 6 The result in equation (9) is valid unconditionally for j=z. In the case that jä{x, y}, equation (9) holds as long as the gradient has a bichromatic oscillating time dependence in the lab frame as described in equation (8), i.e. f (t ) = cos([w0 + d¢]t ) + cos([w0 - d¢]t ) for some d¢  w0. After transforming into the ion frame and dropping fast-rotating terms near 2ω0, f (t) be-
comes cos(d¢t ) in equation (9). This form of bichromatic oscillating gradient is seen in section 3.2, with d¢ = d, since the microwave and gradient terms originate from the same ﬁeld. 7 For two identical ions it could be trivially extended to an out-of-phase mode by setting Sˆj º sˆj,1 - sˆj,2.
3

New J. Phys. 21 (2019) 033033

R T Sutherland et al

Figure 1. Relative strengths of the gate Rabi frequencies versus 4Ωμ/δ for the ﬁrst three resonances in the bichromatic interaction picture when the microwave ﬁeld term (µ Sˆi) does not commute with the gradient term (µ Sˆj) in the Hamiltonian. Note that at the point where intrinsic dynamical decoupling occurs (dotted line), the values of the J1,2 Rabi frequencies are near their maximum values.

Using the Jacobi–Anger expansion [29], we obtain:

HˆI (t)

=

2

Wg

f

(t){aˆe-iwr t

+

aˆ†e

iwr

t

}

⎧ ⎪ ⎪ ⎨⎩Sˆj

⎡ ⎣⎢J0

⎛ ⎝⎜

4Wm d

⎞ ⎠⎟

+

å 2

¥
J2n
n=1

⎛ ⎝⎜

4Wm d

⎞ ⎠⎟

cos(2ndt

)

⎤ ⎥ ⎦

-

2ijk Sˆk

å¥

⎛

n=

J2n-1
1

⎝⎜

4Wm d

⎞ ⎠⎟

sin([2n

-

⎫ 1] dt ) ⎬,
⎭

(15)

where Jn is the nth Bessel function, and òijk is the Levi-Civita symbol. We consider two possible functional forms of f (t): sinusoidal, corresponding to the oscillating magnetic ﬁeld gradient from an ac-current-carrying wire
[13, 16], or constant, due to the magnetic ﬁeld gradient induced by a permanent magnet [14, 15, 30] or a dc-
current-carrying wire [31]. When i ¹ j, equation (15) shows an inﬁnite series of resonances in the bichromatic interaction picture, each
with a strength proportional to a Bessel function. We can choose speciﬁc values of ωr, δ, and n with a given f (t) such that one of these terms in equation (15) is resonant, i.e. stationary or slowly varying in time. In typical
schemes δ ? Ωgf (t) [11, 13, 16], such that near any particular resonance, one can ignore the off-resonant terms in equation (15), whose effect scales as (Wg f (t ) d)28 . Further examination reveals that even Bessel function
resonances correspond to gate operations where the spin operator Sˆj for the gate is identical to the spin operator for the gradient term in equation (9). The odd Bessel function resonances correspond to gates whose spin operator Sˆk is orthogonal to both the microwave and gradient spin operators Sˆi and Sˆj, respectively. In the typical case, i ä {x, y} and j=z, this will result in the even and odd Bessel function resonances corresponding to sˆz Ä sˆz and sˆf Ä sˆf gates (speciﬁcally, sˆy Ä sˆy-
 or sˆx Ä sˆx gates, depending on the choice of i). Figure 1 shows the relative Rabi frequencies of the gates corresponding to the ﬁrst three resonances versus 4Ωμ/δ .

2.2.2. Intrinsic dynamical decoupling Dynamical decoupling [22, 23, 32] is a useful tool for error suppression in trapped-ion quantum logic experiments [16, 24, 25, 33–36]. For example, [16] achieved an entangling gate ﬁdelity of approximately 0.997 by using continuous dynamical decoupling, making the gate operation highly insensitive to qubit frequency ﬂuctuations. This was done by adding an oscillating magnetic ﬁeld at the qubit frequency that commutes with the gate but not with qubit frequency -
ﬂuctuations, thus suppressing the leading source of error while leaving the gate unaffected. Analysis in the bichromatic interaction picture, however, shows it is possible to perform a dynamically decoupled entangling gate operation without adding an extra ﬁeld, simplifying the experimental setup.
We illustrate this intrinsic dynamical decoupling by adding an error term to the Hamiltonian shown in equation (9):

Hˆ z

=

e 2

Sˆz

,

(16)

where ε is a (possibly time-dependent) qubit frequency shift, arising for example from environmental noise, control ﬁeld ﬂuctuations, or miscalibration of the qubit frequency. Assuming i ä {x, y}, transforming this term into the bichromatic interaction picture gives:

8 In the case of multiple qubit frequencies, there will be additional terms in equation (15) at other frequencies. Whether or not these terms can be neglected will depend on the speciﬁc values of the qubit frequencies as well as δ, Ωg, and f (t).

4

New J. Phys. 21 (2019) 033033

R T Sutherland et al

Hˆ I , z

=

e 2

⎧ ⎪ ⎪ ⎨⎩Sˆz

⎡ ⎣⎢J0

⎛ ⎝⎜

4Wm d

⎞ ⎠⎟

+

å 2

¥
J2n
n=1

⎛ ⎝⎜

4Wm d

⎞ ⎠⎟

cos(2ndt

⎤ )⎥ ⎦

+

2ikz

Sˆk

å¥

⎛

J2n-
n=1

1⎝⎜

4Wm d

⎞ ⎠⎟

sin([2n

-

⎫ 1] dt ) ⎬.
⎭

(17)

If ε varies slowly on timescales of 1/δ, then the only term in HˆI,z that is not oscillating near a multiple of δ is ∝ J0(4Ωμ/δ). Therefore, if we set 4Ωμ/δ;2.405, the ﬁrst zero of the J0 Bessel function, we leave only fastoscillating qubit frequency shift terms which contribute negligible dephasing (scaling as (ε/δ)2). Fortunately, the
value of 4Ωμ/δ where dynamical decoupling is achieved occurs near the maxima of the J1 and J2 Bessel functions, so operating here only results in a modest reduction in gate speed of ≈11% relative to the fastest achievable J1
and J2 gates.

2.2.3. Adiabatic pulse shaping
In this section, we show that if the microwave bichromatic ﬁeld is smoothly ramped on and off over a time
τ?2π/δ, the ﬁnal wave function in the ion frame approaches the ﬁnal wave function in the bichromatic
interaction picture. In other words, the unitary transformation deﬁned by equation (3) approaches the identity, Uˆ (tf )  Iˆ.
To model microwave pulse shaping, we modify the microwave ﬁeld term in equation (9) to include a time-
dependent envelope g(t) with a continuous ﬁrst derivative:

Hˆm (t)  2Wmg (t)cos(dt)Sˆi,

(18)

where g(t) is assumed to vary slowly on the timescale 2π/δ. The following assumptions about the pulse shape are also made:

g (t = 0, tf ) = 0

g (t  t  tf - t) = 1,

(19)

where tf is the ﬁnal gate time. In words, this assumes that the microwave Rabi frequency is equal to zero at the beginning and end of the gate operation, and is constant in between the ramps. At the end of the gate operation, the unitary transformation into the bichromatic interaction picture is:

{ ò } Uˆ (tf ) = exp -i tf dt¢2Wmg (t¢)cos(dt¢)Sˆi .

(20)

0

Integrating by parts gives:

ò ò Uˆ

(tf

)

=

exp

⎧ ⎨ ⎩

2iWm d

⎛ ⎝⎜

t
dt¢g (t¢)sin(dt¢) +
0

tf tf -t

dt

¢g

(t

¢)

sin(dt

¢)

⎞⎫ ⎠⎟ Sˆi⎬⎭.

(21)

If g˙ (t ) is a slowly varying function with respect to sin(dt ), then the larger the value of τ is relative to 2π/δ, the smaller the values of the two integrals in equation (21). Thus, in the limit t  2p d, Uˆ (tf )  Iˆ, and the ﬁnal ion frame state approaches the ﬁnal interaction picture state. Note that this effect is independent of the actual
shape of the pulse envelope, provided it is slowly varying. The effect of pulse shaping is discussed for a speciﬁc
example in section 4.1, and shown in ﬁgure 2. We also point out that pulse shaping will slightly change the
optimal gate times due to the changing Rabi frequency during the rise and fall times.

3. Experimental methods of implementation

Depending on the choice of Sˆi, Sˆj, and the ﬁeld gradient function f (t), the preceding derivation can be applied to many experimental systems. In this section, we describe three varieties of microwave-based entangling gates
using this formalism.

3.1. Static gradient A well-studied microwave spin-motion coupling scheme uses a static magnetic ﬁeld gradient in combination with one or more microwave ﬁelds [10]. One previous demonstration of this scheme uses a pair of microwave ﬁelds symmetrically detuned about the qubit frequency [15]. The ion frame Hamiltonian is then:

Hˆ (t) = 2 WmSˆx cos(dt) + 2 Wg Sˆz {aˆe-iwr t + aˆ†eiwr t}.

(22)

This system corresponds to Sˆi = Sˆx, Sˆj = Sˆz, and f (t)=1 in equation (9). With these choices, equation (15) becomes

5

New J. Phys. 21 (2019) 033033

R T Sutherland et al

Figure 2. Numerical simulation of the ﬁdelity  of the maximally entangled Bell state of equation (30) versus time (normalized to tf), for the sˆf Ä sˆf gate described in this section. In both panels, the high frequency blue line corresponds to equation (26), i.e. the ion frame Hamiltonian, and the the orange line corresponds to equation (28), i.e. the bichromatic interaction picture Hamiltonian. Panel (a) shows a gate with no pulse shaping, where large-amplitude oscillations at δ make the ion fra-
me gate ﬁdelity highly sensitive to the exact value of tf. Panel (b) shows the same gate operation including a τ=10 μs Blackman envelope at the beginning and the end of the gate sequence; the ion frame ﬁdelity smoothly approaches the interaction picture ﬁdelity at the end of the gate.

HˆI (t)

=

2

Wg {aˆe-iwr t

+

aˆ†e

iwr

t

}

⎧ ⎪ ⎪ ⎨⎩Sˆz

⎡ ⎣⎢J0

⎛ ⎝⎜

4Wm d

⎞ ⎠⎟

+

å 2

¥
J2n
n=1

⎛ ⎝⎜

4Wm d

⎞ ⎠⎟

⎤ cos (2ndt ) ⎥
⎦

+

2Sˆy

å¥

⎛

n=1J2n-1⎝⎜

4Wm d

⎞ ⎠⎟

sin([2n

-

⎫ 1] dt ) ⎬.
⎭

(23)

If Ωg = δ, we keep only the near resonant terms in this equation. We obtain a sˆz Ä sˆz gate when 2nd ~ wr, and a sˆf Ä sˆf gate (speciﬁcally, a sˆy Ä sˆy gate), when (2n - 1)d ~ wr.

3.2. Near-qubit-frequency oscillating gradient Another method for spin-motion coupling uses a near-ﬁeld gradient oscillating close to the qubit frequency [11, 13]. Since the gradient and the microwave term are caused by the same ﬁeld, we take them to point in the same direction. The ion frame Hamiltonian is then given by:

Hˆ (t) = 2 Wm cos(dt)Sˆx + 2 Wg cos(dt)Sˆx {aˆe-iwr t + aˆ†eiwr t}.

(24)

This system corresponds to Sˆi = Sˆx, Sˆj = Sˆx, and f (t ) = cos(dt ) in equation (9). Since the microwave term commutes with the gradient term, the bichromatic interaction picture Hamiltonian is simply:

HˆI (t) = 2 Wg cos(dt)Sˆx {aˆe-iwr t + aˆ†eiwr t}.

(25)

This Hamiltonian realizes a sˆf Ä sˆf gate (speciﬁcally, a sˆx Ä sˆx gate); the inﬁnite series of resonances in equation (15) is absent because the microwave term and the gradient term commute (i=j). In the presence of a qubit frequency shift of the form in equation (16), transforming into the bichromatic interaction picture will then add a term to equation (25) of the form shown in equation (17); the same analysis from section 2.2.2
regarding intrinsic dynamical decoupling then applies.

3.3. Near-motional-frequency oscillating gradient Spin-motion coupling can also be accomplished via separate gradient and microwave ﬁelds oscillating at nearmotional and near-qubit frequencies, respectively. This was demonstrated in [37] by using a running optical lattice to create an oscillating gradient of the ac Stark shift near the ion motional frequencies. Another possibility is to superimpose separate near-qubit and near-motional frequency currents on near-ﬁeld electrodes in a surface electr-
ode trap [38]. Choosing the gradient to lie along the quantization axis and the microwave ﬁelds to be perpendicular to the quantization axis gives the ion frame Hamiltonian

Hˆ (t) = 2 Wm cos(dt)Sˆx + 2 Wg cos(wg t)Sˆz {aˆe-iwr t + aˆ†eiwr t},

(26)

where ωg is the frequency of the oscillating gradient ﬁeld. We identify Sˆi = Sˆx, Sˆj = Sˆz, and f (t ) = cos(wg t ); using these choices, equation (15) becomes:

6

New J. Phys. 21 (2019) 033033

R T Sutherland et al

HˆI (t)

=

2

Wg

cos(wg t){aˆe-iwr t

+

aˆ†e

iwr

t

}

⎧ ⎨⎩Sˆz

⎡ ⎣⎢J0

⎛ ⎝⎜

4Wm d

⎞ ⎠⎟

+

2

å¥ ⎛

J2n
n=1

⎝⎜

4Wm d

⎞⎠⎟ cos (2ndt

⎤ )⎥ ⎦

+

2Sˆy

å¥

⎛

n=1J2n-1⎝⎜

4Wm d

⎞ ⎠⎟

sin([2n

-

⎫ 1] dt ) ⎪ ⎬.
⎪ ⎭

(27)

This is similar to the static ﬁeld case of equation (23), only with resonances occurring when δ is an integer multiple of ∣wr  wg∣, rather than ωr. As a result, the Bessel function extrema and roots can be reached with lower Ωμ than for the static or near-qubit frequency gradient cases. For the numerical demonstrations presented in
section 4, we will use this near-motional gradient scheme—relevant to recent experiments [38]—as an example.

4. Numerical demonstrations

4.1. ^sf Ä ^sf gate We numerically demonstrate the main results of this work using the system described in section 3.3, where a pair

of microwave ﬁelds, oscillating near the qubit frequency and polarized in the xˆ direction, are combined with a

gradient ﬁeld oscillating near the motional frequency and polarized in the zˆ direction. The qualitative results demonstrated below apply to all schemes presented in section 3, however. If we set d ~ (wr - wg), only keeping
the resonant terms in equation (27) gives

HˆI (t)



i

Wg

⎛ J1⎝⎜

4Wm d

⎞ ⎠⎟

Sˆy

{aˆ†e-iDt

-

aˆeiDt},

(28)

where D º d - (wr - wg). Equation (28) corresponds to a sˆf Ä sˆf gate (speciﬁcally, a sˆy Ä sˆy gate) with a Rabi frequency of Wf º Wg J1(4Wm d). While the time propagator for the ion frame Hamiltonian (equation (26)) is fairly complicated to solve analytically, the time propagator for this interaction picture Hamiltonian is well-

known [19–21, 39]. At tf=2π /Δ the propagator is

{ } TˆI (tf ) = exp

-

2pi D2

(Wf

Sˆy

)2

.

(29)

For a system starting in the ground state ∣ñ, this gate generates a maximally entangled Bell state when Δ=4Ωf:

∣Bellñ º 1 {∣ñ + i∣ñ},

(30)

2

ignoring an overall phase. The ﬁdelity  º áBell∣rˆ (t )∣Bellñ of this entangling gate is shown in ﬁgure 2, where rˆ (t ) is the reduced

density operator for the qubit subspace. We simulate this gate operation for a two-ion system undergoing the

dynamics caused by the full ion frame Hamiltonian, equation (26), as well as the bichromatic interaction picture

Hamiltonian, equation (28). This is done using realistic experimental parameters of Ωμ/2π=500 kHz,

Ωg/2π=1 kHz, ωr/2π=6.5 MHz and ωg/2π=5 MHz. Figure 2(a) shows the gate ﬁdelity in both the bichromatic interaction picture and the ion frame, without pulse shaping. In the interaction picture (i.e. ∣f (t )ñ

as opposed to ∣y (t )ñ from section 2.1), the state ∣Bellñ is created with  = 1. However, in the ion frame, the

( ) ﬁdelity is oscillating according to  µ cos4

2Wm d

sin{dt}

(see appendix). The peak value of the ion frame

ﬁdelity agrees with the ﬁdelity from the bichromatic interaction picture to within the numerical accuracy of the

simulations (approximately 10−5), indicating that off-resonant terms dropped from equation (27) do not impact

ﬁdelity at this level. Figure 2(b) shows that, as described in section 2.2.3, with sufﬁcient pulse shaping the ion

frame and rotating frame ﬁdelities converge at the end of the gate. These simulations implement a microwave

envelope g(t) with a 10 μs Blackman rising and falling edge [40]. Thus, even in the presence of a strong

bichromatic microwave ﬁeld term, high ﬁdelity gates can be implemented. This will likely enable experimental

simpliﬁcation, since one does not have to minimize the microwave magnetic ﬁeld at the ions’ positions.

Furthermore, the strength of the microwave magnetic ﬁeld can be tuned to decouple the system from qubit

frequency shifts without additional drive ﬁelds.

The effect of this intrinsic dynamical decoupling on the gate is shown in ﬁgure 3(a). Here, we plot  versus

the normalized qubit frequency shift ε/Ωg (for a static ε) assuming the parameters listed above, except that we now vary Ωμ to change the arguments of the Bessel functions. Figure 3(a) shows that for most values of Wm,  is highly sensitive to qubit frequency ﬂuctuations. We plot  for the gate described above (4Ωμ/δ;1.333), and
for a gate where Ωμ is increased to maximize the gate speed (4Ωμ/δ;1.841). For these two plots, we ﬁnd that when ∣e∣ Wg  1, the value of  for the gate drops to ∼0.5. However, when we further increase Ωμ such that 4Ωμ/δ;2.405, i.e. the ﬁrst root of the J0 Bessel function,  becomes signiﬁcantly less sensitive to ε, giving   0.95 for ∣e∣ Wg  5.

7

New J. Phys. 21 (2019) 033033

R T Sutherland et al

Figure 3. (a) Fidelity  of the gate operation creating the maximally entangled Bell state of equation (30) versus static qubit frequency shift ε normalized to gradient strength Ωg. Data in both panels are calculated by numerical integration of the full ion frame Hamiltonian given by equation (26). Here, Sˆi = Sˆx, Sˆj = Sˆz, Wg 2p = 1 kHz, and δ/2π=1.5 MHz (chosen to be experimentally realistic), with varying values of Ωμ. Fidelities are plotted for the intrinsically dynamically decoupled sˆf Ä-
 sˆf gate (4Ωμ/δ;2.405, black solid line), the fastest sˆf Ä sˆf gate (4Ωμ/δ;1.841, red dashed line), the sˆf Ä sˆf gate shown in ﬁgure 2 (4Ωμ/δ;1.333, orange solid line), as well as the fastest sˆz Ä sˆz gate with a spin-echo (4Ωμ/δ;3.054, green dotted line) described in section 4.2. (b) Inﬁdelity 1 -  of the sˆf Ä sˆf gate versus the frequency ωε at which the qubit shift ε oscillates, for the intrinsically dynamically decoupled gate (solid black) and the fastest sˆf Ä sˆf gate (red dash-
ed), for a particular value of ε0=Ωg. This value of ε0 represents a signiﬁcantly larger qubit shift than is typically seen experimentally, where ∣e0∣  Wg [16]. The gray lines show the effect of ±1% relative changes in the ratio 4Ωμ/δ for the intrinsically dynamically decoupled gate.
We can also take the ε to be time-varying, of the form e = e0 cos(wet ). Figure 3(b) shows the dependence of the inﬁdelity 1 -  on ωε, assuming ε0=Ωg. Inﬁdelities are plotted for 4Ωμ/δ;2.405 (intrinsic dynamical decoupling) and 4Ωμ/δ;1.841 (fastest sˆf Ä sˆf gate). Figure 3(b) shows that intrinsic dynamical decoupling protects against qubit energy shifts at frequencies up to ≈10Ωg. This ﬁgure also shows the sensitivity of intrinsic dynamical decoupling to small ﬂuctuations in Ωμ/δ; the gray-
 lines show the inﬁdelity when the ratio 4Ωμ/δ is shifted by 1% above and below the intrinsic dynamical decoupling point respectively. By performing similar simulations for various values of ε0, we determine that the inﬁdelity scales as (e0 Wg)2 for e0  Wg.
Unlike the dynamically decoupled sˆf Ä sˆf gate demonstrated in [16], no additional ﬁeld is required, and the microwave ﬁeld term generating the dynamical decoupling does not have to commute with the gradient term in the Hamiltonian. In fact, as will be discussed in the next section, the inﬁnite series of resonances resulting from the microwave ﬁeld term not commuting with the gradient provides the opportunity for a novel type of sˆz Ä sˆz microwave gate, where all frequencies are detuned from the-
 ions’ motional modes.
4.2. ^sz Ä ^sz gate Dynamical decoupling can be beneﬁcial for high-ﬁdelity sˆf Ä sˆf gates, because the terms in the Hamiltonian that represent qubit frequency shifts do not commute with the gate. However, qubit frequency shifts commute with a sˆz Ä sˆz gate. Because of this, a simple spin-echo sequence completely cancels the effect of static qubit frequency shifts. Unfortunately, until now, the only proposed technique for performing microwave-based sˆz Ä sˆz gates requires generating oscillating -
gradients near the ions’ motional frequencies, where experimental imperfections can give rise to electric ﬁelds that excite the ions’ motion and reduce ﬁdelity. This makes the gate difﬁcult to perform in practice [11]. When considering a gate in the bichromatic interaction picture as shown in equation (27), a sˆz Ä sˆz gate is obtained when 2nd ~ ∣wr - wg∣. The n=0 case corresponds to a sˆz Ä sˆz gate
8

New J. Phys. 21 (2019) 033033

R T Sutherland et al

Figure 4. Inﬁdelity 1 -  of the sˆz Ä sˆz gate versus the frequency ωε at which the qubit shift ε oscillates, for the intrinsically dynamically decoupled gate (solid black) and the fastest sˆz Ä sˆz gate (red dashed), for a particular value of ε0=Ωg. This value of ε0 represents a signiﬁcantly larger qubit shift than is typically seen experimentally, where ∣e0∣  Wg [16]. The gray lines show the effect of
±1% relative changes in the ratio 4Ωμ/δ for the intrinsically dynamically decoupled gate. Data are calculated by numerical integration of the full ion frame Hamiltonian given by equation (26).

with ωg;ωr, as described above. If instead we choose n=1, equation (27) becomes:

HˆI (t)





Wg

J2

⎛ ⎝⎜

4Wm d

⎞ ⎠⎟

Sˆz

{aˆeiDt

+

aˆ†e-iDt},

(31)

where D º 2d - (wr - wg). We have now created a sˆz Ä sˆz gate where both ωg and δ can be far-detuned from ωr, which relaxes the constraints on residual electric ﬁelds9. Performing this gate with a spin-echo pulse after the ﬁrst of two loops in phase space completely cancels the effect of the static shifts. This complete insensitivity to
static qubit shifts is demonstrated in ﬁgure 3(a), while ﬁgure 4 shows this gate’s sensitivity to time-varying qubit shifts. While this sˆz Ä sˆz gate is less sensitive to static (ωε=0) noise, it remains sensitive to noise with larger values of ωε. We note that intrinsic dynamical decoupling can also be applied to this gate, in addition to the spin echo. In ﬁgure 4, we show simulated gate ﬁdelities assuming ε0=Ωg at the intrinsically dynamically decoupled point (solid black) as well as for 4Ωμ-
/δ;3.054 (dashed red), which gives the maximum relative gate speed J2(3.054)  0.49; all other parameters are the same as described in section 4.1. By performing similar simulations for various values of ε0, we determine that the inﬁdelity scales as (e0 Wg)2 for ε0Ωg.

5. Conclusion
This work analyzes microwave entangling gates in the bichromatic interaction picture, as opposed to the ion frame. This change of perspective offers key insights on how to implement experimental simpliﬁcations. If the microwave ﬁeld does not commute with the gradient term in the Hamiltonian, an inﬁnite series of resonances emerges in the bichromatic interaction picture. Individual resonances, selected by changing the microwave frequency, enable either sˆf Ä sˆf or sˆz Ä sˆz gates with all oscillat-
ing ﬁeld frequencies far-detuned from the motional modes of the system. In addition, the bichromatic microwave ﬁeld amplitude can be tuned to provide intrinsic dynamical decoupling from qubit frequency ﬂuctuations without additional ﬁelds.

Acknowledgments

We acknowledge helpful discussions with D Lucas, and thank S Erickson, A Collopy, and Y Rosen for careful reading of the manuscript. RS, SCB, and DTCA are Associates in the Professional Research Experience Program (PREP) operated jointly by NIST and the University of Colorado Boulder under award 70NANB18H006 from the US Department of Commerce, National Institute of Standards and Technology. This work was supported by ARO, ONR, and the NIST Quantum Information Program. This paper is a partial contr-
ibution of NIST and is

9 These electric ﬁelds drive the ion motion off-resonantly at ωg. For a given electric ﬁeld strength, the resulting motional amplitude scales

as 1

(w

2 r

-

w

2 g

).

9

New J. Phys. 21 (2019) 033033

R T Sutherland et al

not subject to US copyright. Part of this work was performed under the auspices of the US Department of Energy by Lawrence Livermore National Laboratory under Contract DE-AC52-07NA27344. LLNL-JRNL-759200.

Appendix

Here, we quantify the ﬁdelity oscillations in ﬁgure 2. We are interested in timescales that are fast compared to the gate speed, and therefore we neglect the gradient term in equation (26). This gives:

Hˆ (t)  2 Wm cos(dt)Sˆx,

(32)

making ∣y (t )ñ = Uˆ (t )∣y (0)ñ, where ∣y (0)ñ = ∣Bellñ. We note that this choice of t=0 (made for increased clarity in this derivation) is distinct from the main text, where t=0 represents the start time of the gate. The state evolution is governed by

{ ò } Uˆ (t) = exp - i 

t dt ¢H (t ¢)
0

=

exp⎧⎨⎩-

2iWm d

sin

(dt

)

Sˆx

⎫ ⎬ ⎭

=

⎧ ⎨Iˆ ⎩

cos

⎛ ⎝⎜

2Wm d

sin(dt

)

⎞ ⎠⎟

-

isˆx,1

sin

⎛ ⎝⎜

2Wm d

sin(dt )

⎞⎠⎟ ⎫⎬⎭

⎧ ⎨Iˆ ⎩

⎛ cos ⎝⎜

2Wm d

sin(dt

)

⎞ ⎠⎟

-

isˆx,2

sin

⎛ ⎝⎜

2Wm d

sin(dt

⎞ ) ⎠⎟

⎫ ⎬. ⎭

(33)

Figure 2 shows the ﬁdelity  of the maximally entangled Bell state ∣Bellñ º 2-1 2(∣ñ - i∣ñ). Here the value of  at time t is given by:

(t) = ∣áBell∣Uˆ (t)∣Bellñ∣2.

(34)

Keeping in mind that áBell∣sˆx,i∣Bellñ = áBell∣sˆx,1sˆx,2∣Bellñ = 0, we obtain

(t )

=

∣áBell∣⎧⎨Iˆcos2 ⎩

⎛ ⎝⎜

2Wm d

sin(dt

)

⎞ ⎠⎟

⎫ ⎬ ⎭

∣Bellñ

∣2

=

cos4

⎛ ⎝⎜

2Wm d

sin(dt

)

⎞ ⎠⎟,

(35)

which corresponds to the frequency and magnitude of the oscillations in ﬁgure 2.

References
[1] Cirac J I and Zoller P 1995 Phys. Rev. Lett. 74 4091 [2] Monroe C, Meekhof D M, King B E, Itano W M and Wineland D J 1995 Phys. Rev. Lett. 75 4714 [3] Nielsen M A and Chuang I L 2010 Quantum Computation and Quantum Information (Cambridge: Cambridge University Press) [4] Häffner H, Roos C F and Blatt R 2008 Phys. Rep. 469 155 [5] Blatt R and Wineland D J 2008 Nature 453 1008 [6] Ladd T D, Jelezko F, Laﬂamme R, Nakamura Y, Monroe C and O’Brien J L 2010 Nature 464 45 [7] Ballance C J, Harty T P, -
Linke N M, Sepiol M A and Lucas D M 2016 Phys. Rev. Lett. 117 060504 [8] Gaebler J P et al 2016 Phys. Rev. Lett. 117 060505 [9] Ozeri R et al 2007 Phys. Rev. A 75 042329 [10] Mintert F and Wunderlich C 2001 Phys. Rev. Lett. 87 257904 [11] Ospelkaus C, Langer C E, Amini J M, Brown K R, Leibfried D and Wineland D J 2008 Phys. Rev. Lett. 101 090502 [12] Chiaverini J and Lybarger W E 2008 Phys. Rev. A 77 022324 [13] Ospelkaus C, Warring U, Colombe Y, Brown K R, Amini J M, Leibfried D and Wineland D J -
2011 Nature 476 181 [14] Khromova A, Piltz C, Scharfenberger B, Gloger T F, Johanning M, Varón A F and Wunderlich C 2012 Phys. Rev. Lett. 108 220502 [15] Lake K, Weidt S, Randall J, Standing E D, Webster S C and Hensinger W K 2015 Phys. Rev. A 91 012319 [16] Harty T P, Sepiol M A, Allcock D T C, Ballance C J, Tarlton J E and Lucas D M 2016 Phys. Rev. Lett. 117 140501 [17] Weidt S, Randall J, Webster S C, Lake K, Webb A E, Cohen I, Navickas T, Lekitsch B, Retzker A and Hensinger W K 2016 Phys. Rev.-
 Lett.
117 220501 [18] Wölk S and Wunderlich C 2017 New J. Phys. 19 083021 [19] Mølmer K and Sørensen A 1999 Phys. Rev. Lett. 82 1835 [20] Sørensen A and Mølmer K 2000 Phys. Rev. A 62 022311 [21] Roos C F 2008 New J. Phys. 10 013002 [22] Viola L and Lloyd S 1998 Phys. Rev. A 58 2733 [23] Viola L, Knill E and Lloyd S 1999 Phys. Rev. Lett. 82 2417 [24] Bermudez A, Schmidt P O, Plenio M and Retzker A 2012 Phys. Rev. A 85 040302 [25] Tan T R, Gaebler J P, Bowler R, Lin Y, Jost J D, Leibfried D and Wineland D-
 J 2013 Phys. Rev. Lett. 110 263002 [26] Leibfried D, Knill E, Ospelkaus C and Wineland D J 2007 Phys. Rev. A 76 032324 [27] Milburn G J, Schneider S and James D F V 2000 Fortschr. Phys. 48 801 [28] Leibfried D et al 2003 Nature 422 412 [29] Abramowitz M and Stegun I A 1972 Handbook of Mathematical Functions (New York: Dover) [30] Weidt S, Randall J, Webster S C, Lake K, Webb A E, Cohen I, Navickas T, Lekitsch B, Retzker A and Hensinger W K 2016 Phys. Rev. Lett.
117 220501 [31] Welzel J, Stopp F and Schmidt-Kaler F 2019 J. Phys. B: At. Mol. Opt. Phys. 52 025301 [32] Uhrig G S 2007 Phys. Rev. Lett. 98 100504 [33] Biercuk M J, Uys H, VanDevender A P, Shiga N, Itano W M and Bollinger J J 2009 Phys. Rev. A 79 062324 [34] Timoney N, Baumgart I, Johanning M, Varón A, Plenio M B, Retzker A and Wunderlich C 2011 Nature 476 185

10

New J. Phys. 21 (2019) 033033

R T Sutherland et al

[35] Piltz C, Scharfenberger B, Khromova A, Varón A and Wunderlich C 2013 Phys. Rev. Lett. 110 200501 [36] Manovitz T, Rotem A, Shaniv R, Cohen I, Shapira Y, Akerman N, Retzker A and Ozeri R 2017 Phys. Rev. Lett. 119 220505 [37] Ding S, Loh H, Hablutzel R, Gao M, Maslennikov G and Matsukevich D 2014 Phys. Rev. Lett. 113 073002 [38] Srinivas R, Burd S, Sutherland R, Wilson A, Wineland D, Leibfried D, Allcock D and Slichter D 2019 Phys. Rev. Lett accepted [39] Solano E, de Matos Filho R L and Zagury-
 N 1999 Phys. Rev. A 59 R2539 [40] Blackman R B and Tukey J W 1958 Bell Syst. Tech. J. 37 185

11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:53.795Z
- **Text Length:** 41555 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
