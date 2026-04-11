# PDF Document: (Trap Potential - 2011 Littich) Electrostatic Control and Transport of Ions on a Planar Trap for Quantum Information Processing.pdf

**File Path:** (Trap Potential - 2011 Littich) Electrostatic Control and Transport of Ions on a Planar Trap for Quantum Information Processing.pdf

**Processed Date:** 2026-02-10T18:17:43.338Z

**File Size:** 8187.79 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 746

**Title:** (Trap Potential - 2011 Littich) Electrostatic Control and Transport of Ions on a Planar Trap for Quantum Information Processing

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

MASTER’S THESIS
Electrostatic Control and Transport of Ions on a Planar Trap for Quantum Information Processing
ETH Zu¨rich and University of California, Berkeley
Gebhard Littich Berkeley, May 2, 2011

Advisors:

Prof. Dr. Andreas Wallraﬀ Prof. Dr. Hartmut Ha¨ﬀner Dr. Nikos Daniilidis

Abstract
In ion trapping, obtaining full control over the electrostatic trap potentials is of great importance. Manipulating the shape of the potential allows to control ion positions, trapping frequencies and trap depths. Shuttling ions requires all these elements and is a big challenge towards the realization of a large-scale planar ion trap quantum information processor [1]. However, planar trap geometries impose rather diﬃcult electrostatic problems and Laplace’s equation cannot be solved analytically.-
 In this thesis, we outline the theoretical prerequisites for simulating a planar segmented trap with the boundary element method [2]. We describe a method to gain full control over the harmonic trap potential. We do this by expanding the electrostatic potential in a basis of spherical harmonics, and relating the multipole coeﬃcients of the expansion to the voltages that are applied to the dc trap electrodes. We explain an algorithm that allows for the calculation of the voltages that will trap th-
e ion at distinct positions along the axis of trapping. By using the pseudopotential approximation, we analyze the trapping frequencies and trapping depths of the resulting secular potentials [3, 4]. We illustrate how ions can be shuttled by slowly varying the dc voltages and hence shifting the minimum of the dc potential. We analyze the trapping parameters for all positions during transport and elucidate the eﬀect of motional heating during transport [5, 6]. We expand our algorithm to the case of-
 trapping multiple ions and discuss the example of the trapping and successive shuttling of two ions. We describe an experimental setup for trapping ions and outline the principles of experimental control of dc and radio frequency trapping voltages.
iii

Contents

Abstract

v

1. Introduction

1

2. Theory

7

2.1. Trapping Ions in radio frequency traps . . . . . . . . . . . . . . . . . . 7

2.1.1. A mechanical analogue: Trapping a ball on a rotating saddle . . 7

2.1.2. Pseudopotential approximation . . . . . . . . . . . . . . . . . . 10

2.1.3. The 2D quadrupole trap . . . . . . . . . . . . . . . . . . . . . . 13

2.1.4. Linear Paul trap . . . . . . . . . . . . . . . . . . . . . . . . . . 17

2.2. Planar segmented microtraps . . . . . . . . . . . . . . . . . . . . . . . 20

2.2.1. Equations of motion . . . . . . . . . . . . . . . . . . . . . . . . 22

2.2.2. Expansion of the potential in spherical harmonics . . . . . . . . 24

2.2.3. Manipulation of the dc potential . . . . . . . . . . . . . . . . . . 28

2.2.4. Trapping of multiple ions . . . . . . . . . . . . . . . . . . . . . . 32

2.2.5. Renaming the multipole coeﬃcients . . . . . . . . . . . . . . . . 32

2.2.6. Ion transport . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33

3. Calculating Voltage Trajectories for Ion Transport

37

3.1. Boundary Element Method . . . . . . . . . . . . . . . . . . . . . . . . . 38

3.2. Ion Transport . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39

3.2.1. Transport of a single trapped Ion on a microfabricated surface trap 40

3.2.2. Shuttling of two ions . . . . . . . . . . . . . . . . . . . . . . . . 46

4. Experimental Realization of Ion Trapping and Transport

51

4.1. Ion trapping experiments in UHV chambers . . . . . . . . . . . . . . . 51

4.2. Loading and three-step photoionisation of neutral calcium . . . . . . . 52

4.3. Doppler cooling, fuorescence detection and repumping . . . . . . . . . . 53

4.4. Laser systems for trapping calcium . . . . . . . . . . . . . . . . . . . . 55

4.5. Experimental control of dc and rf voltages . . . . . . . . . . . . . . . . 58

4.6. Towards trapping ions with a monolithic surface trap . . . . . . . . . . 61

5. Conclusion and Outlook

67

v

Contents

Acknowledgements

69

Bibliography

I

A. Appendix

VII

A.1. Mathematical Framework of BEM . . . . . . . . . . . . . . . . . . . . . VII

vi

1. Introduction
The invention of the transistor at Bell Labs in 1947 was certainly one of the most ground-breaking eﬀorts that was made in the 20th century. Back then, transistors were several centimeters in size, and only controllable in a lab environment. Since these early stages, continuous improvements of the technology took place, leading to the formation of the semiconductor industry and paving the way for a world of personal computer ubiquity. In 1965 Moore stated a law, that the number of transistors buil-
t in a processor would double every 18 months. Most surprisingly, almost 50 years later, this prediction still holds. Modern photolithographic fabrication techniques allow for reducing the feature size down to 50 nm. Diﬀraction eﬀects limit the optical resolution and hence the minimum feature size that can be achieved with current fabrication methods. In addition, by reducing the size of elements on an integrated circuit and bringing individual transistors close to the size of an atom, quantum mec-
hanical eﬀects can not longer be neglected. Following Moore’s law, the limits of classical computation could be reached within the next few decades.
On the other hand, quantum mechanical eﬀects that spoil classical computation could be of great use when exploiting it for information processing purposes. Richard Feynman published an article in 1982 where he discussed the diﬃculty of simulating quantum mechanical systems with classical computers and suggested using quantum mechanics itself for simulating it, stating “... Let the computer itself be built of quantum mechanical elements which obey quantum mechanical laws”[7]. In the same paper, Fey-
nman also ﬁrst used the nowadays ubiquitous term quantum computer to describe such a machine.
Besides simulating quantum physical systems, certain problems in computer science are assumed to have much lower computational complexity when running quantum algorithms on quantum computers, i.e. these problems can be solved in much less time. For instance, classical factorization of primes is assumed to be NP hard (i.e. there exists a solution but it is hard to calculate). For n-bit integers, classical algorithms typically scale exponentially in time with n. Most classical cryptographic systems,-
 e.g. RSA, are based on this almost-impossibility of decomposing any large integer into primes. In 1994, Peter Shor proposed a quantum algorithm (know as Shor’s algorithm) that allows the ability to solve this problem with O(log(n)3), i.e. running polynomially in time and yielding an exponential speed-up compared to the classical algorithm [8]. Other examples of quantum algorithms that are faster than their classical counterparts
1

1. Introduction

a)

b)

1

z

c) z

5V

y

y

x

x

0

Figure 1.1. – Representation of a classical bit using TTL high and low-pulses (a) and depiction of a
excited and ground state of a qubit on a Bloch-sphere (b), and a superposition of ground- and excited state lying on the equatorial plane (c).

are the Deutsch-Josza- and Grover’s search algorithm that provide an exponential and quadratic speed-up, respectively [9, 10].
Exploiting quantum mechanics for information processing requires sophisticated manipulation and readout methods of single quantum mechanical systems. Control over such systems became available in the late 70’s and early 80’s by isolating single atoms or photons. However, performing experiments that resolve quantum mechanical eﬀects are technically demanding and can only be achieved in well-controlled laboratory environments. Cryogenic temperatures or ultra-high vacuum systems are often considered -
as a prerequisite.

Quantum Mechanics and Quantum Bits
In classical information processing, information typically is encoded in binary form as bits. They can either take values 0 or 1 and are represented in the transistor-transistor logic (TTL) as high- or low-voltage signals of 0 V and 5 V, respectively. Information processing is achieved by manipulating the TTL voltages using logical gates that can be realized by transistors. It can be shown that all logical operations can be represented by one- and two-bit logical gates. One bit gates are the ident-
ity operation that does not alter the bit, and the NOT gate, which inverts the bit from 0 to 1 and 1 to 0 respectively. For two-bit operations it can be shown that the NAND gate is a universal gate. In quantum computing, information will not longer be represented as bits but as quantum bits (qubits) that take values |0 and |1 . The states of the qubit is usually represented by the ground- and excited state of a two-level quantum mechanical system and can be illustrated on the Bloch-sphere, see Fig-
. 1.1 [11]. The exited state is depicted as a vector pointing on the north pole of the sphere and the ground state vice versa. Quantum mechanics allows the qubit to not only remain in either states |0 or |1 , but

2

form a superposition of both, i.e. [11] |Ψ = cos(Θ) |0 + sin(Θ)eiφ |1 ,

(1.1)

where Θ and φ are the polar and azimuthal angles of the state vector on the Bloch

sphere. For Θ = π/2, this superposition state lies in the equatorial plane and perform-

ing a quantum mechanical measurement would map it either to the excited or ground

state with both probabilities being one half. The possibility of forming arbitrary super-

positions between states is an underlying requirement of many quantum information

processing (QIP) and communication protocols. Further, the creation of entangled

states is a major criterion for most QIP applications. An example of an entangled state

is the Bell-state

1 |Φ = (|00 + |11 )
2

(1.2)

where |00 and |11 denote the tensor products |0 ⊗ |0 and |1 ⊗ |1 , respectively.

Entangled states have some remarkable quantum mechanical properties and implica-

tions on the non-classicality of quantum mechanical correlations. If an entangled state

is shared between two space-time separated locations A and B and two independent

measurements are carried out, quantum mechanics predicts strong correlations between

the outcomes of the measurements depending on the choice of measurements bases at A

and B. Also, it can be shown that entangled states maximally violate Bell’s inequality

[12]. Control and generation of entangled states is the most essential prerequisite for

the realization of superdense coding [13], quantum teleportation [14, 15] and quantum

cryptography [16].

Ions as Qubits
Experimental realizations of quantum mechanical two-level systems are found in solidstate physics (superconducting qubits [18], semiconductor quantum dots [19, 20]), atomicand molecular optics (trapped ions [17], trapped neutral atoms [21, 22] and Rydberg atoms [23, 24]) and NMR (nuclear magnetic resonance), where a rudimentary version of Shor’s algorithm has been used to factor 15 [25]. In the last few decades it turned out that trapped ions are a promising candidate for performing quantum comput-
ation operations. They exhibit well deﬁned energy level structure, coherence times many hundred times larger than typical gate operation times of 0.5–500 µs and allow for almost complete fulﬁllment of the DiVincenzo-criteria [17, 26]. Over 50 years of research in the ﬁeld of trapping of charged particles with the linear Paul traps and Penning traps and the availability of ultrastable lasers allows for easy access to these well understood systems. Trapping ions with linear Paul traps recently allow-
ed for sophisticated quantum mechanical experiments such as the creation of a 14-particle GHZ state [27], the realization of a quantum Toﬀoli gate [28] and deterministic quantum teleportation [14].

3

1. Introduction

P3/2 P1/2
397 nm

854 nm 866 nm

D5/2

S1/2

729 nm

D3/2

Figure 1.2. – Energy levels and possible laser-driven transitions of a 40Ca+ ion, omitting Zeeman
splittings. The qubit is formed by the S1/2 and D5/2 states, providing an excited state lifetime of up to 1.2 seconds. After [17].

Two generic types of ionic qubits are availabe: optical qubits (e.g. 40Ca+), where the qubit transition is formed by the electronic ground state and an excited metastable state and radio frequency qubits (e.g. 9Be+), where the two-level system is found within the Zeeman- or hyperﬁne-splitting manifolds of the ion (also called clock states).
For optical qubits, excited state lifetimes (T1) of one second were found for 40Ca+ [29], while the decoherence time T2 is mostly limited by magnetic ﬁeld noise and typically ranges in the order of a few milliseconds [17]. Radio frequency qubits, on the other hand, are so long-lived that T1 times are much larger than any timescales that would limit quantum logical operations [30]. For 9Be+, decoherence times T2 of 14.7 s were observed for a magnetic-ﬁeld insensitive clock transition without applyi-
ng spin-echo techniques [31].
In this work, we will focus on 40Ca+ as an optical qubit. In Fig. 1.2 the electronic energy levels of 40Ca+ ion are depicted (neglecting the Zeeman splitting sublevels). The qubit is formed by the S1/2 and D5/2 levels and provides an excited state lifetime of τ = 1.2 s.
Readout of the qubit state is achieved by detection of ﬂuorescence on the S1/2 ↔ P1/2 transition: if the qubit is in the ground state, the 397 nm laser will transfer the ground state population into the P1/2-state and the ﬂuorescence counts can be detected with a photomultiplier tube. The excited state will not yield ﬂuorescence due to its long lifetime. In order to deplete the excited state population and de-excite the qubit, the D5/2 ↔ P3/2 transition is driven. In order to drive the S1/2 ↔ D5/2-
 transition, extremely narrow band lasers with line widths below 200 mHz are used [17]. Achieving this accuracy requires laser-locking to ultra-high ﬁnesse cavities.
Scalability of quantum computation with linear (three-dimensional) Paul traps is lim-

4

Loading Zone
Logic zone
Memory zone
Figure 1.3. – Wineland’s vision of a surface trap for quantum computing applications. The ions,
denoted by the red dots (not in scale) are trapped at a loading zone, shuttled to logic zones and stored in memory zones. After [1].
ited in the maximum number of qubits that can be formed and adressed in a linear ion crystal. This number will typically be at a few tenths of ions [32]. Recently, it was proposed to employ planar segmented microfabricated traps rather than 3D Paul traps for large-scale quantum computation [1]. Planar segmented traps consist of dc- and radio frequency electrode arrays that allow for trapping of ions at a certain trapping height above the electrode plane, see Fig. 1.3. Typical traps will consist of-
 separate zones that allow for trapping the ions in a loading zone, performing quantum logic operations and coupling that requires laser access in an interaction zone, and storing them in memory zones. Planar traps are highly scalable in terms of fabrication. State-of-the-art semiconductor photolithography methods can be employed to manufacture traps.
Control of Trapping Voltages and Transport of Ions in Segmented traps
In order to conﬁne the ions at certain positions of the trap, an electrostatic potential giving rise to a minimum at the respective positions has to be formed. The axial position of the potential minimum is deﬁned by the voltages applied to the set of dc electrodes, while the vertical and radial conﬁnement is achieved by the radio frequency ﬁeld. By slowly varying the dc voltages while keeping the rf potential ﬁxed, the axial position of the dc potential minimum can be shifted and the ion can be t-
ransported. Careful design of experimental control over the dc voltages is crucial in order to achieve fast and smooth transport. FPGA-controlled digital-to-analog conversion (DAC) boards can be used allowing for sweeping voltages in real time and avoiding delays that could be caused by PCs.
5

1. Introduction In this thesis, the theory of trapping ions with radio frequency traps will be elucidated. Starting with the discussion of the linear Paul trap, we will introduce the physics of planar segmented traps by analyzing a charged particle’s equations of motion. We will explain, how dc voltages giving rise to axial conﬁnement can be estimated. By expanding the electrostatic potential in spherical harmonics, we will derive a relation between the multipole coeﬃcients of the trapping potenti-
al and the dc voltages. In order to obtain the electric potential due to complicated planar trap structures, we will introduce the boundary element method (BEM). The BEM is an alternative to common numerical methods for calculating partial diﬀerential equations as the ﬁnite diﬀerence method or ﬁnite element method that allows for the accurate estimation of electric potentials for the application of ion trapping. We will calculate dc voltage sets that can be used to trap and shuttle ions along the -
axis of trapping. Important trapping parameters, such as trapping frequency and trapping depth will be analyzed during transport. The trapping of two ions will be discussed. A typical experimental setup allowing for trapping ions on planar traps will be introduced. An experimental control software will be outlined that allows for communication and calibration of the DAC board.
6

2. Theory

In this chapter, an introduction to the theory required for understanding the physics of ion trapping will be given. Starting with the basic principles of conﬁning charged particles with radio frequency ﬁelds, we will outline the pseudo-potential approach and discuss the simpler cases of the 2D quadrupole mass ﬁlter and the linear Paul trap. Finally, we will explain how planar surface traps can be used to trap ions and how electrode voltages that give rise to trapping conditions can be calculated.

2.1. Trapping Ions in radio frequency traps
To obtain a basic understanding for trapping ions in rf traps, one can use a counterpart to this purely electrostatic problem in mechanics: trapping a ball on a saddle surface. This analogue was proposed by Nobel laureate Wolgang Paul in 1989 and showed as an experiment during his Nobel lecture [33, 34]. Although we will see that the rotating saddle-potential does not exactly correspond to the physics of an rf trap, it will capture the underlying principles in an intuitive way.

2.1.1. A mechanical analogue: Trapping a ball on a rotating saddle

To conﬁne a particle of mass m stably at a point of space, we require a restoring, i.e. binding force F (cf. Hooke’s law) [34]:

F = −c r,

(2.1)

with c being the spring constant, and r the position variable. A conservative force F can always be written in terms of a scalar potential U :

F = −∇U.

(2.2)

Given the force, we can calculate the potential by integrating once:

c U (x, y, z) =

αx2 + βy2 + γz2

,

2

(2.3)

7

2. Theory

a)

b)

c)

z
x y
Figure 2.1. – Illustration of a rotating saddle potential (a), a ﬂapping potential (b) and the pseu-
dopotential corresponding to the ﬂapping potential depicted in a (c). In ion trapping experiments, oscillating potentials like (b) are used for conﬁning particles. After [33, 34]

where α, β and γ are constants that play the role of c in three spatial directions. In

foresight on the discussion of trapping charged particles in electrostatic potentials, we

can choose

α = −β = 1, γ = 0.

(2.4)

With this choice, Eq. (2.5) forms a potential that has the shape of a saddle surface, see

Fig. 2.1a, i.e.

c U (x, y) =

x2 − y2

.

2

(2.5)

Although potentials of this shape will allow to trap the particle along the x-direction,

there exists no stable minimum and the particle could always escape along the y-

direction. Hence, stable trapping is not possible with these static potentials. However,

as we will show now using the example of a gravitational saddle potential, trapping

becomes feasible when we introduce a time variation.

In a gravitational potential, we can set [34]

c

=

mgh0 r02

,

and obtain the expression of a gravitational saddle potential,

(2.6)

U (x, y)

=

mgh0 2r02

x2 − y2

,

(2.7)

with m the mass of the bead, g the gravity of Earth and h0 and r0 parameters that shape the curvature of the potential. Imagine one could turn on a little motor that rotates the saddle with a angular frequency Ω around the z-axis, see Fig. 2.1a. This transforms the static potential into a time-varying potential that can be described mathematically

8

2.1. Trapping Ions in radio frequency traps

by writing the potential in terms of rotated axes x , y

U (x

,y

)

=

mgh0 2r02

x2 −y 2

.

(2.8)

We can express the rotating saddle potential in the laboratory frame by applying the standard coordinate transformation given by the rotation matrix:

x

cos(Ωt) − sin(Ωt) x

=

.

y

sin(Ωt) cos(Ωt) y

(2.9)

Plugging this into Eq. (2.8), we obtain [34]:

U (x, y, t)

=

mgh0 2r02

(x2 − y2) cos(2Ωt) − 2xy sin(2Ωt)

.

(2.10)

Pictorially one can easily see that a rotation with a frequency Ω prevents the bead from falling out of the trap. In a simpliﬁed picture we can assume that the faster the saddle rotates, the better the bead is conﬁned within the potential. Concisely, it can be shown that the ball will only follow stable trajectories on the saddle if the rotation is faster than a certain threshold value [34]

2gh0 r02

≤

Ω.

(2.11)

Although the rotating-saddle potential illustrates the physics of trapping particles with rapidly oscillating potentials nicely, potentials in ion trapping experiments are qualitatively not exactly of the form presented in Eq. (2.10). We will see that electrostatic potentials in the center of ions traps are typically of a form [35, 36]

Φ(x, y, t) = c (x2 − y2) cos(Ωt), 2

(2.12)

which in a pictorial representation would rather resemble a ﬂapping potential, where the curvature oscillates with time and the wells of the saddle potential ﬂap like the wings of a bird [34], see Fig. 2.1b. The constant c is dependent on the voltage U that is applied to the ion trap electrodes and is typically expressed as

U c = 2r02 ,

(2.13)

where r0 is a length that depends on the geometry of the trap.
To understand mathematically why rapidly oscillating potentials like the rotating-saddle potential or the ﬂapping-saddle potential can be used to conﬁne particles, we will now

9

2. Theory

introduce the concept of the pseudopotential. The following discussion will mostly stick to the formulation of the problem as it was carried out in [3] and [4].

2.1.2. Pseudopotential approximation

In the pseudopotential approximation, we introduce the average potential that acts on a particle in a rapidly oscillating potential as an eﬀective potential. It is calculated by taking the time-average over one period of the fast oscillation. To analyze the trajectory of the particles in such potentials, we write down the equations of motion by applying Newton’s second law of motion and using Eq. (2.2):

F = m¨r = −∇U (r).

(2.14)

We now want to look at a generic type of potential consisting of a stationary and a time-dependent oscillating part. Assuming the time dependent part oscillates with a frequency Ω we can write

U (r) = U0(r) + Urf(r) cos(Ωt).

(2.15)

In the following, we will assume that the frequency of the oscillating part is much larger than the inverse time scale of one period of motion T the particle would carry out only under the inﬂuence of U0(r), i.e. Ω 1/T . Plugging the above equations into each other, we obtain

m¨r = −∇ (U0(r) + Urf(r) cos(Ωt)) = −∇U0(r) −∇Urf(r) cos(Ωt)
≡ F0(r) ≡ Frf (r)
= F0(r) + Frf (r) cos(Ωt).

(2.16)

From these expressions one can already see that the smooth particle trajectory due to

the force F0(r) will be modulated by an oscillating force Frf at frequency Ω. Hence, we can write the total trajectory r(t) as a sum of a smooth part R(t) and rapidly oscillating

part ξ(t):

r(t) = R(t) + ξ(t),

(2.17)

Typically, the amplitude of these oscillations ξ will be much smaller then the smooth part of the trajectory R, i.e. |ξ| |R|. We now expand the forces F0(r) and Frf (r) in a Taylor series up to lowest order in ξ:

F0(R + ξ) = F0(R) + ξ · ∇F0(R) + · · · Frf (R + ξ) = Frf (R) + ξ · ∇Frf (R) + · · ·

(2.18)

10

2.1. Trapping Ions in radio frequency traps

Plugging this and Eq. (2.17) into Eq. (2.16) yields

m(R¨ (t) + ξ¨(t)) = F0(R) + ξ · ∇F0(R) + [Frf (R) + ξ · ∇Frf (R)] cos(Ωt). (2.19)

Remembering that the amplitude of the oscillations ξ are much smaller than R, we can
omit terms that contain this factor. On the other hand, contributions from the smooth part of the equation of motion cancel out, i.e. F0 = mR¨ (t). We ﬁnd that the equation of motion for the oscillating part of the trajectory is given approximately by

mξ¨(t) = Frf cos(Ωt).

(2.20)

This equation can be solved by integrating twice. Its solution reads

ξ(t) = − Frf cos(Ωt). mΩ2

(2.21)

To obtain an expression for a time-averaged pseudopotential, we now plug Eq. (2.21) into Eq. (2.19) and take the time average over one period 2π/Ω. To this end we notice that terms containing a cosine will drop out as their time-average cancels to zero and only terms with a cosine squared will remain. Namely,





m R¨ (t) + 

ξ¨(t)

 

=

F0(R)

+

ξ(t)

·∇F0(R) +

Frf (R) + ξ(t) · ∇Frf (R) cos(Ωt)

=0

=0

cos2(Ωt) = F0(R) − mΩ2 Frf · ∇Frf .

Since F is a conservative force (i.e. it is curl-less) we can now employ a identity from vector calculus

1 ∇ (F · F) = F × (∇ × F) + (F · ∇)F = (F · ∇)F.
2

(2.22)

Together with evaluating the time average over the squared cosine cos2(Ωt) = 1/2 it

directly follows that

mR¨ (t)

=

F0(R)

−

1 4mΩ2

∇(Frf

)2

.

(2.23)

This is the force that acts on a particle in a rapidly oscillating potential on time average

over one period of the fast oscillation. We call this force the secular force,

Fsec = mR¨ = −∇

U0

+

1 4mΩ2

(Frf

)2

.

(2.24)

11

2. Theory

with the corresponding secular potential Usec

Usec

=

U0

+

1 4mΩ2

(Frf )2.

(2.25)

The second term of the above equation is called pseudopotential Ups,

Ups

=

1 4mΩ2

(Frf

)2.

(2.26)

This means the pseudopotential is proportional to the magnitude of the oscillating force Frf . Note that in the literature, the pseudopotential is also known as ponderomotive potential.

To summarize, we analyzed the equations of motion for a particle under the inﬂuence of the sum of a stationary and rapidly oscillating potential. We expanded the corresponding forces in a Taylor series and time-averaged the equation of motion over one period of the fast oscillation. We found out, that on time average, the secular potential can be written as a sum of the stationary potential and the pseudopotential. The pseudopotential is proportional to the square of the magnitude of the oscillati-
ng part of the potential.

Note that the pseudopotential approximation only holds if the parameters Ω, m, r0 etc. fullﬁll certain conditions and the particle’s trajectories are bound, i.e. Eq. (2.11). During the discussion of the stability regions of the quadrupole mass ﬁlter (section 2.1.3) we will derive corresponding relations for trapping ions.

Electric ﬁelds

The force acting on charged particles in electric ﬁelds is given by the product of the elementary charge and the electric ﬁeld, i.e. F = qE. We can deﬁne a scalar electric potential analogously to Eq. (2.2), namely

E = −∇Φ.

(2.27)

The electric potential Φ is related to the potential energy by U = qΦ. In free space, that is a charge density ρ = 0, any electric potential Φ must fulﬁll Laplace’s equation:

∆Φ = 0.

(2.28)

By applying Laplace’s equation to the solution we obtained by integration (i.e. Eq. (2.5))

we ﬁnd that

α + β + γ = 0,

(2.29)

which directly motivates the choice of Eq. (2.4).

12

2.1. Trapping Ions in radio frequency traps

Given a rapidly oscillating electric potential, the electric pseudopotential is given anal-

ogously to Eq. (2.26) by

Ups

=

q2 4mΩ2

(Erf

)2,

(2.30)

i.e. it is related to the squared absolute value of the rf electric ﬁeld. In combination

with a static, i.e. dc potential Φdc, the total (i.e. secular) potential reads

Usec

=

qΦdc

+

q2 4mΩ2

(Erf

)2.

(2.31)

This is an important result. As we will see later, trapping frequencies will relate inversely to Ω due to the 1/Ω2 coeﬃcient.

As an example, we can now calculate the pseudopotential of the ﬂapping saddle poten-

tial Eq. (2.12):

Ups

=

q2U 2 4mr04Ω2

(x2

+

y2).

(2.32)

By calculating the square of the gradient of the ﬂapping potential, we obtain a har-

monic potential well that provides a stable minimum and trapping along both x and y

directions.

Using this result, we will now discuss the potential and the equations of motion in quadrupole mass ﬁlter and a linear Paul trap [35]. We will make the transition to planar surface traps and use the pseudopotential approximation to ﬁnd the trapping frequencies and trapping depths of quadrupolar potentials.

2.1.3. The 2D quadrupole trap

We start the discussion of the diﬀerent ion trap conﬁgurations with the most simple one, the 2D quadrupolar trap (also known as quadrupole mass ﬁlter). The 2D quadrupole trap consists of four hyperbolically-shaped electrodes that are aligned around the trapping axis, see Fig. 2.2. Unlike the 3D Paul trap that will be discussed in the next section, the quadrupole mass ﬁlter does not allow trapping in all three spacial directions. The ion will not be conﬁned along the z-axis and can move freely in t-
his direction, i.e the amplitudes are only bound along the x- and y-directions.
By a applying a voltage U0 to two oppositely mounted electrodes and a voltage −U0 to the two remaining electrodes, we can create a potential that is given by [35]:

x2 − y2 Φ(x, y) = U0 2r02 .

(2.33)

13

2. Theory

y
x z
Figure 2.2. – The quadrupole mass ﬁlter. Applying a positive voltage U0 to two opposite electrodes
and a negative voltage −U0 to the remaining two electrodes yields a 2D quadrupole potential given by Eq. (2.35). The dot in the center of the trap corresponds to the axis on which ions can be trapped [35].

Setting U0

U0 = U − V cos(Ωt),

(2.34)

i.e. applying a radio frequency voltage V driven at frequency Ω with a constant dc oﬀset U to the electrodes, creates an electric potential of the form of the ﬂapping potential depicted in Fig. 2.1b:

x2 − y2 Φ(x, y) = (U − V cos(Ωt)) 2r02 .

(2.35)

In theory, hyperbolical electrodes are required to yield the exact quadrupole potential given in Eq. (2.33). However, real setups often incorporate cylindrically shaped electrodes (ciruclar rods) as they are easier to fabricate and provide an adequate approximation to hyperbolical shapes.

Equations of motion: Mathieu equations

Although the pseudopotential helps us to obtain a good physical understanding of a time-varying potential, it is only valid if certain approximations that were made to derive Eq. (2.31) hold. For analyzing the equations of motion of charged particles in a quadrupole ﬁeld, it is better to calculate the trajectories with the actual nonapproximated potentials, i.e. Eq. (2.35).
To this end, we just apply again Newton’s second law of motion, i.e.

F = m a = m ¨r = q E = −∇Φ,

(2.36)

14

2.1. Trapping Ions in radio frequency traps

or writing the vector components explicitely:

q∂

q∂

q∂

x¨ = − Φ, y¨ = − Φ, z¨ = − Φ.

m ∂x

m ∂y

m ∂z

(2.37)

In these expressions q is the elementary charge and m the mass of the ion. Inserting Eq. (2.35) into Eq. (2.37) yields [35]

q x¨ + (U − V cos(Ωt)) x = 0,
m r0 q
y¨ − (U − V cos(Ωt)) y = 0, m r0 z¨ = 0.

(2.38) (2.39) (2.40)

The last expression z¨ = 0 implies that there is no force acting on the ion along the trapping axis. Therefore we can neither trap it nor manipulate its velocity along this direction. Substituting

4qU ax = ay = mr02Ω2 ,
2qV qx = −qy = mr02Ω2 ,
Ωt = 2ξ,

(2.41)

transforms Eq. (2.38) and Eq. (2.39) into the canonical Mathieu diﬀerential equation

[2, 35, 36]:

d2u dξ2 + (au − 2qu cos(2ξ))u = 0, u = x, y.

(2.42)

Solutions to Mathieu’s diﬀerential equation can be found in mathematical textbooks
(e.g. [37]). Stable particle trajectories inside the trap only exist for certain values of au and qu. Namely, setting βu = au + qu2/2, stability regions are given within 0 ≤ βu ≤ 1. In terms of the parameters a and q, stable particle trajectories in the stability diagram can be found within the limit a, q2 1. Typical parameters for which these conditions are fullﬁlled are U = 10 V, V = 800 V and Ω/2π = 5 MHz, for which a = 9.7054 × 10−4 and q2 = 0.015. In this regime, the solution for Mathieu’s di-
ﬀerential equation in ﬁrst
order simpliﬁes to [2]

u(t) ≈ u(0)(t) = u0 cos

βuΩt 2

1 − qu cos(Ωt) , u = x, y. 2

(2.43)

Eq. (2.43) corresponds to a trajectory that is oscillating at the secular frequency ωu = βuΩ/2 and is superimposed by a high-frequent oscillation cos (Ωt) called micromotion. A trajectory along the x-axis is plotted in Fig. 2.3a and compared against

15

2. Theory

1

x(t) x(t)
∆ x(t)

0.5
0
−0.5
−1 0

1

0.98 0.96

x 10−4 4 3

2
0.94
1

0.92

0 0

0.2 0.4 0.6

t (µ s)

5

10

15

20

25

30

t (µs)

0

0.1 0.2 0.3 0.4 0.5 0.6

t (µs)

(a)

(b)

Figure 2.3. – A x-axis trajectory of a 40Ca+ ion passing a quadrupole mass ﬁlter (a) and zoom into
the ﬁrst period (b). The red dots show an numerical solution obtained by applying a Runge-Kutta type integration. The blue curve is a plot of Eq. (2.43). The inset in (b) displays the diﬀerence ∆x(t) = |x(t) − x(0)(t)| between the integration and the ﬁrst-order approximation. Typical parameters of U = 10 V, V = 800 V, r0 = 0.01 m and Ω/2π = 5 MHz together with an initial condition x(0) = (1 − qu/2) were used in order to obtain these plots.

an explicit solution found by a Runge-Kutta based numerical integration with MATLAB (diﬀerential equation solver ode45). The inset displays the absolute value of the error between those solutions. It shows that the ﬁrst-order solution provides an excellent approximation in the a, q2 1 regime, exhibiting a maximum error of < 0.1%. As discussed before, Fig. 2.3a is strongly dominated by secular motion, with a negligible contribution due to micromotion. Micromotion is only visible by a zoom into the -
ﬁrst period as illustrated in Fig. 2.3b. The amplitude of the secular motion u0 depends only on the boundary condition imposed to Eq. (2.42), i.e. the displacement of the ion from the rf potential minimum. The higher the initial velocity (i.e. the energy) of the ion entering the trap, the larger the displacement (and hence the oscillation amplitude) will be. Typically, the secular motion amplitude of ions cooled close to the Doppler limit can be estimated to ≈ 100 nm. Note, that the amplitude of t-
he micromotion um will always be a factor qu/2 smaller than the amplitude of the secular motion, i.e. um = qu/2 · u0 (see Eq. (2.43)).

By looking at the above deﬁnition for the stability region, it can be easily seen why

the setup discussed in this section is called quadrupole mass ﬁlter. For the x-axis, it

translates to

4qU

2qV 2

0 ≤ mr02Ω2 + mr02Ω2 ≤ 1.

(2.44)

This condition gives an upper and lower bound for the ratio q/m: For given U and V , only charged particles fulﬁlling the above statement will stay on a stable trajectory and

16

2.1. Trapping Ions in radio frequency traps
RF

DC +

DC -

2r0

DC + y

z

x

Figure 2.4. – Three dimensional sketch of a segmented rf Paul trap. Red dots sketch three ions
trapped along the trapping axis (not to scale). In order to create conﬁnement along the x and y directions, a rf voltage is applied to the black shaded rods. The gray rods allow trapping along z and are segmented into three parts; the outer segments are the positive dc electrodes, while the inner segments are kept at negative dc voltages. The diagonal distance between two rods is 2r0 with typical dimensions of r0 = 1 mm. After [36].

can pass the trap; all other particles will not be bound in the trap and will hence be ﬁltered out. Scanning U and V allows for detection for particles. Applications of the quadrupole mass ﬁlter can be found in analytical chemistry where it is an inherent part of modern mass spectrometers.

2.1.4. Linear Paul trap

To achieve trapping, potentials allowing for particle conﬁnement along all three spatial directions are required. One can generate such a potential by applying dc and rf voltages to a 3D electrode conﬁguration similar to the quadrupole mass ﬁlter, see Fig. 2.4 [38]. This device is called linear Paul trap and typically consists of four intersected cylindrical electrodes. Whereas the quadrupole mass ﬁlter only generated a two-dimensional quadrupole potential, the linear Paul trap also allows for con-
ﬁnement of particles along the trapping axis (z). This is achieved by applying a constant dc voltage to two diagonal rods. As in the quadrupole mass ﬁlter, the time varying rf potential due to such a conﬁguration near the center of the trap is given by (in a lowest-order approximation)

x2 − y2

Φrf = V cos(Ωt)

r02

,

(2.45)

where V is the rf amplitude, Ω the rf drive frequency and 2r0 the diagonal distance between two rods. In Fig. 2.4, the rf is connected to the black shaded electrodes. As the shape of the rods is not hyperbolical, one cannot ﬁnd an exact analytic expression for the dc potential. An approximation for regions close to the trapping center yields

17

2. Theory

[38, 39]

2z2 − x2 − y2

Φdc = κU

2z02

,

(2.46)

where U is the dc voltage and κ and z0 are empirically determined parameters that take the trap geometry (i.e. the cylindrical shape of the electrodes) into account. The

total potential including static and time varying contributions then reads

x2 − y2

2z2 − x2 − y2

Φ = V cos(Ωt)

r02

+ κU

2z02

,

(2.47)

with a corresponding secular potential (i.e the sum of the static potential and pseudopotential deﬁned in Eq. (2.31))

Usec

=

κU q z02

z2

+

q2V 2

κU

4mΩ2r04 − q 2z02

(x2 + y2).

(2.48)

Equations of motion and micromotion compensation

In order to obtain the trajectories for trapped ions in linear Paul traps, we perform similar substitutions as in the case of the 2D quadrupole trap, i.e.

1

4qκU

ax = ay = − 2 az = 2mz02Ω2 ,

2qV qx = −qy = mr02Ω2 ,

qz = 0,

Ωt = 2ξ.

(2.49)
(2.50) (2.51) (2.52)

This transforms the equations of motion into the Mathieu form. The corresponding solutions yield the trajectories of motions of particles along x,y and z and are given (in the lowest-order approximation) by

u(t) = u0 cos(ωut)

1 − qu cos(Ωt) 2

,

u = x, y, z,

(2.53)

where ωu = βuΩ/2 = au + qu2/2 Ω/2. We now analyze the ion trajectory along the trapping axis (z) explicitely: Since the rf ﬁeld does not act along the trapping axis,

i.e. qz = 0 and

z(t) = z0 cos(ωzt).

(2.54)

This motion only consists of harmonic oscillations at the secular frequency ωz and is not inﬂuenced by micromotion. The average kinetic energy of this motion over one period

18

2.1. Trapping Ions in radio frequency traps

of the secular motion is given by [40]

Ekin,z

=

1 m
2

z˙2

=

1 4

mz02ωz2,

(2.55)

Assuming that secular motion is mostly thermal, we can relate this kinetic energy to

temperature Tz:

1 2 kBTz

=

1 4

mz02

ωz2,

(2.56)

where kB is the Boltzmann constant. Along the radial and vertical axes the kinetic energy amounts to [40]

Ekin,u

=

1 m
2

u˙ 2

=

1 4

mu20ωu2

1 + qu2 qu2 + 2au

, u = x, y.

(2.57)

Apparently, ion micromotion only aﬀects the trajectories along the x and y, but not
z-direction. The ﬁrst term in the equation above is due to the secular motion, and the second term due to micromotion. By approximating that qu2 |au|, which is valid for most ion trapping experiments (see Fig. 2.3), we ﬁnd

Ekin,u

≈

1 2

mu20 ωu2 ,

u = x, y.

(2.58)

Remarkably, although the amplitude of the micromotion is typically much smaller than the secular motion, half of the average kinetic energy is due to micromotion. Doppler cooling, which will be described in the experimental part of this thesis, will allow to reduce the amplitude of the secular motion u0 signiﬁcantly and reduce the temperature Tu down to the Doppler cooling limit.
If the minimum of the rf potential (i.e. the rf null) and the minimum of the dc potential coincide, the particle trajectories obey Eq. (2.53) and the potential is said to be compensated. However, stray dc electric ﬁelds inside the trap can shift the dc potential and induce a displacement of the dc minimum. An additional type of micromotion results that cannot be reduced by standard cooling methods. In the following, we will outline this eﬀect theoretically.

Given a stray electric ﬁeld, this excess micromotion (nomenclature in accordance with [40]) shifts the Mathieu equation of motion by a term qEdc · u/m, i.e.

d2u dξ2

+

(au

−

2qu cos(2ξ)) u

=

qEdc · u , m

u = x, y, z

(2.59)

where u is the unit vector. In the solutions to Eq. (2.59), this oﬀset translates to the

19

2. Theory

appearance of an additional micromotion term denoted by us, i.e.

u(t) = (us + u0 cos(ωut))

1 − qu cos(Ωt) 2

,

u = x, y, z,

(2.60)

which corresponds to an additional oscillation at frequency Ω with excess micromotion

amplitude us. It is given by

us

=

qEdc · u . mωu2

(2.61)

Excess micromotion can strongly impair the trapping performance and alter atomic

transition linewidths [40]. Hence, excess micromotion needs to be minimized. By

applying a counteracting electric ﬁeld Ecomp = −Edc, stray electric ﬁelds can be compensated. This procedure is called micromotion compensation and needs to be carried

out experimentally. Experimental control allows for the variation of such electric ﬁelds

by manipulating the voltages that are applied to the dc electrodes. By adding a homo-

geneous electric ﬁeld to the potential and varying its magnitude, the stray electric ﬁelds

can be estimated experimentally. In the next section, we will outline how the dc trap-

ping voltages are obtained and how they are related with the values of the compensation

electric ﬁeld Ex, Ey and Ez.

2.2. Planar segmented microtraps
Both previous types of ion traps discussed incorporate a three dimensional electrode conﬁguration to achieve trapping. Planar trap geometries involving arrays of segmented rf- and dc electrodes that all lie on a common plane have major advantages over 3d-traps in terms of fabrication and scalability [1, 41]. In Wineland’s vision of a quantum chargecoupled device (QCCD), see Fig. 1.3, ions are trapped in loading zones and then shuttled to interaction zones where coupling between the ions arranged i-
n strings is mediated via the Coulomb interaction. Also, qubit state manipulation for quantum logical gates and ﬂuorescence readout and detection will be carried out at the interaction region. The quantum information encoded in the internal states of the ions is then stored in the memory of the QCCD by transporting the ion to memory regions of the planar trap.
Planar traps are typically fabricated in clean-room environments using micro-fabrication techniques as photolithography and evaporative metal deposition. Common materials used in the trap fabrication are aluminum oxide, quartz or silicon as substrates and gold or aluminum for the electrode structures [41, 42, 43].
Most major quantum mechanical and quantum optical experiments could already be implemented for linear 3D traps. In quantum information processing experiments, ﬁdelities of over 99.9% could be achieved [44]. However, the realization of experiments with such high ﬁdelities in planar surface traps is currently limited by technical diﬃcul-

20

2.2. Planar segmented microtraps

600

500

400

y Μm

300

y x
z
(a)

200

100

0 400 200 0

200 400

x Μm

(b)

Figure 2.5. – Typical planar trap geometry consisting of two radio frequency electrodes (colored
in red) and 22 dc electrodes (colored in white). The direction of a Doppler cooling and ﬂuorescence detection laser beam is indicated by the blue arrow (a). Contour plot of a pseudopotential due to a similar geometry as depicted in (a) (omitting the dc electrodes). Rf trap electrodes are symbolized by the red lines, the ground plane by the gray lines. The plot exhibits a clear potential minimum at a typical height y above the trap surface, called trapping height, conﬁning an ion indicated by the w-
hite dot along the axis of trapping. Black indicates low energy, yellow (white) indicates is high energy. For sake of clarity, the pseudopotential is only plotted for values between 0 and 0.2 eV (b). Styled after [50].

ties: in planar traps, the proximity of the ions to the trapping electrodes (i.e. typically 200-50 µm compared to up to 500 µm for linear traps) can cause several adverse eﬀects such as surface-induced anomalous heating and charging of the trapping electrodes [45]. Surface-induced heating eﬀects are most likely caused by a contamination of the electrode surfaces. Although this eﬀect has not been fully understood yet, it is believed that it can be minimized by either cleaning the surfaces or optimi-
zing the materials involved in the microtrap fabrication. Anomalous heating can complicate laser-cooling into the ground state required for some gates in quantum information processing [46, 47]. Electrode charging induces stray ﬁelds that complicate micromotion compensation signiﬁcantly. It is believed that anomalous heating can be reduced by operating planar traps under cryogenic conditions [48]. Most recently, an implementation of the CiracZoller CNOT gate was realized with a ﬁdelity of 91% on a-
 planar surface trap cooled to a temperature of 4 K [49]. However, as an adverse eﬀect, it is believed that cryogenic temperatures may increase charging eﬀects.
In planar traps, ions are trapped by arrays of radio frequency and dc electrodes. As in the linear Paul traps, rf electrodes conﬁne the ions in along the x and y directions, and dc electrodes then allow for trapping along z. A typical planar trap geometry is depicted in Fig. 2.5a. The rf potential will be constrained by the geometry of the rf electrodes (see the red colored area in Fig. 2.5a) and can not changed during trapping.

21

2. Theory
By slowly changing the voltages applied to the dc electrodes, the ion’s axial position can be controlled. The pseudopotential due to a typical rf electrode geometry is depicted in Fig. 2.5b.
Since planar traps often consist of elaborated geometries and contain a much larger number of electrodes than what was the case for the linear Paul trap, the calculation of the electrostatic trapping potentials is complicated signiﬁcantly and cannot by carried out analytically. In particular, dc- and rf-potentials that were created by the linear Paul trap only consisted of one quadrupolar term each, see Eq. (2.47). However, ﬁelds created by planar trap architectures always involve a linear combina-
tion of inﬁnitely many multipoles. In this section, we will elaborate on the equations of motions of ions trapped in planar segmented geometries. In chapter 3, we will then introduce the numerical tools required for the calculation of the electrostatic potentials.

2.2.1. Equations of motion

To discuss the equations of motion in a generic planar surface trap, we will extend the equations of motions found for the linear Paul trap to a general form including potentials of more multipole terms than given in Eq. (2.46). By applying similar substitutions as before, we will transform the resulting diﬀerential equation into a matrix Mathieu equation. Coeﬃcients au and qu will no longer be scalars but appear as matrices a˜ and q˜.
In the next section we will show that a dc potential solving Laplace’s equation can be written as approximately (that is the multipole expansion up to second order)

x2 − y2

2z2 − x2 − y2

Φdc(x, y, z) = U1

2r02

+ U2

2r02

xy

zy

zx

+ U3 2r02 + U4 2r02 + U5 2r02 ,

and for the rf potential similarly,

(2.62)

Φrf(x, y, z, t) =

x2 − y2

2z2 − x2 − y2

V1

2r02

+ V2

2r02

xy

zy

zx

+ V3 2r02 + V4 2r02 + V5 2r02

cos(Ωt),

(2.63)

where Ω is the rf drive frequency. The total potential is then given by Φ = Φdc + Φrf. As for the quadrupole mass ﬁlter and the linear rf Paul trap, we now want to ﬁnd the

22

2.2. Planar segmented microtraps

equations of motion due to this potential. Analogously to before, we obtain

q x¨ = mr02 {(U1 − U2) + (V1 − V2) cos(Ωt)} x

+ U3 + V3 cos(Ωt) y + U5 + V5 cos(Ωt) z ,

22

22

(2.64)

q y¨ = mr02 − {(U1 + U2) + (V1 + V2) cos(Ωt)} y

+ U3 + V3 cos(Ωt) x + U4 + V4 cos(Ωt) z ,

22

22

(2.65)

and

q z¨ = mr02 − {2U2 + 2V2 cos(Ωt)} z

+ U4 + V4 cos(Ωt) y + U5 + V5 cos(Ωt) x ,

22

22

(2.66)

or written in matrix form:

d2 x

q

dt2

y z

=

2mr02

2(U1 − U2)

U3

U5 

 U3

−2(U1 + U2) U4 

U5

U4

4U2

2(V1 − V2)

V3

V5 

+  V3

−2(V1 + V2) V4  cos(Ωt)

V5

V4

4V2

x · y .
z

(2.67)

Substituting Ωt = 2ξ transforms the above into a matrix Mathieu equation:

d2 r = {a˜ + 2q˜cos(2ξ)}r,
dξ2

(2.68)

where

axx axy axz

q 4(U1 − U2)

2U3

2U5

a˜ = ayx azx

ayy azy

ayz  azz

=

mΩ2r02



2U3 2U5

−4(U1 + U2) 2U4 ,

2U4

8U2

(2.69)

and

qxx qxy qxz

q 2(V1 − V2)

V3

V5 

q˜ = qyx qzx

qyy qzy

qyz  qzz

=

mΩ2r02



V3 V5

−2(V1 + V2) V4  .

V4

4V2

(2.70)

23

2. Theory

Note that other than for the equations of motion of the linear Paul trap, this diﬀerential equation is coupled, e.g. the motion along the x direction depend on coordinates y and z. Coupling is caused by the xy, zy and zx parts of the potential solely, i.e. it is only due to the oﬀ-diagonal terms in the matrices a˜ and q˜. By setting corresponding multipoles to zero, coupling can be switched oﬀ and we obtain the regular Mathieu equations (i.e. the ones we obtained for the linear Paul trap).
It can be shown that potentials of a form a(x2 − y2) + b(xy) can be rewritten in terms of rotated axes x , y as c(x 2 − y 2) [45], where the angle of rotation between the tilted and un-tilted axes can be expressed as

1

b

Θ = arctan

.

2

2a

(2.71)

In some experimental situations, it can be advantageous to induce a tilted quadrupole potential, e.g. to improve the eﬃciency of laser cooling by creating a projection of the laser along all three axes. Experimentally, this is realized by setting ﬁrst the multipole U1 and then tilting the axes by adding a U3 contribution. The angle of tilt is controlled by the ratio U3/U1.
To conclude this discussion, we note that in order to have full control over the equations of motions of ions in a planar trap, we must have control over the paramaters Ui and Vi. Whereas Vi will typically be ﬁxed due to the geometry of the rf electrodes, Ui can be tuned by changing the voltages that are applied to the dc trapping electrodes. In the next section, a mathematical relation between the dc trapping voltages and the coeﬃcients Ui (also known as multipole coeﬃcients) will be given.

2.2.2. Expansion of the potential in spherical harmonics

To obtain a general solution to Laplace’s equation, we will expand the potential in terms of spherical harmonics. We will show how linear combinations of electrode voltages relate to the multipole coeﬃcients required for the control of the ion. In the subsequent chapter, we will explain numerical trap simulations and apply the theoretical derivations presented in this section.
A general solution of a electric potential in three dimensions can be found by writing Laplace’s equation in spherical coordinates

1∂ ∆Φ =
r2 ∂r

r2 ∂Φ ∂r

1∂ +
r2 sin θ ∂θ

∂Φ sin θ
∂θ

1 ∂2Φ + r2 sin2 θ ∂ϕ2 = 0,

(2.72)

24

2.2. Planar segmented microtraps

and using a product ansatz (i.e. seperation of variables)

Φ(r, θ, ϕ) = R(r) Θ(θ) φ(ϕ).

(2.73)

Although a direct calculation is not carried out within this context, it can be shown that solutions of this form can be expanded in terms of spherical harmonics, i.e. the multipole expansion [51, 52]:

∞
Φ(r, θ, ϕ) =

A m rl + B m r−l−1 Y m(θ, ϕ).

=0 m=−

In the equation above A m are the expansion coeﬃcients

(2.74)

A m = dΩ Y ∗m(θ, ϕ) Φ(r, θ, ϕ)

(2.75)

and Y m are the spherical harmonics

Y m(θ, ϕ) =

2l + 1 (l − m)! P m(cos θ) eimϕ. 4π (l + m)!

(2.76)

P m(cos θ) are the associated Legendre polynomials P m(cos θ) = (−1)m(sin θ)m dm (P (cos θ)) . d(cos θ)m

(2.77)

A m and B m are determined by the boundary conditions [51]. We require the potential of the multipole expansion to be ﬁnite at the position of the ion, i.e. at r = 0. However, at r = 0, the second term in the expansion, i.e. B mr−l−1 is diverging. Since this will lead to discontinuities that are undesirable in this context and we can discard it. Then, the expansion reads

∞

Φ(r, θ, ϕ) =

A m rl Y m(θ, ϕ).

=0 m=−

(2.78)

The spherical harmonics can be expressed in cartesian coordinates by applying the standard coordinate transformation

x = r sin θ cos ϕ, y = r sin θ sin ϕ, z = r cos θ.

(2.79)

25

2. Theory

Up to second order they are given by [51]:

= 0 : Y0,0 =

1 4π

(2.80)



3 (x − iy)

Y1,−1 =  

8π

r





 = 1 : Y1,0 =


1z 4π r





  Y1,1 = −

3 (x + iy) 8π r

(2.81)



15 (x − iy)2

Y2,−2 =  

32π

r2





  Y2,−1 = 

15 (x − iy)z 8π r2





 

5 (2z2 − x2 − y2)

= 2 : Y2,0 = 

16π

r2



  

15 (x + iy)z

Y2,1 = −  

8π

r2



   Y2,2 =

15 (x + iy)2 32π r2

(2.82)

The coeﬃcients (e.g. 3/8π) will be denoted by N m. To simplify further calculations, we now want to rewrite the expansion in spherical harmonics Eq. (2.78) in an one-index real basis. To this end, we deﬁne the mapping

rlj Y 

j ,0







Yj

=

 

1

√

2

rlj

(−1)mj Y j,mj + Y j,−mj



    

i √

rlj

2

Y j,mj − (−1)mj Y j,−mj

with the corresponding complex coeﬃcients

if mj = 0 if mj > 0 if mj < 0,

(2.83)



A 

j ,0

Mj

=

  

1 √

2

(−1)mj A j,mj + A j,−mj

   

−i √

2

A j,mj − (−1)mj A j,−m)

if mj = 0 if mj > 0 if mj < 0.

(2.84)

26

2.2. Planar segmented microtraps

In the above equations, j and mj map the indices j of the single-indexed spherical harmonics Yj to the indices , m of the double-index deﬁnition given in Eq. (2.80). They are given by:

0

if j = 0

j= √

,

j − 1 if j > 0

(2.85)

where · is the ﬂoor function and

mj = j − (2 j + 1) − j ( j − 1) .

(2.86)

This assigns each index in the single-index expansion two indices in the two-index expansion. Up to order 2 (j = 9) this gives:

j


j

1  0   2  1  

3

 

1

4 

→

  

1

5  2

 

6  2

 

7  2  

8

 

2

9

2

mj 

0 
−1 

0

 

1



 

.

−2



−1



0 

1

 

2

(2.87)

With this substitution, we can rewrite Eq. (2.78) as

∞
Φ(x, y, z) = Mj Yj(x, y, z).
j=1

(2.88)

If we expand the potential Φ up to order j = 9 (which corresponds to = 2 in the two-index basis) we obtain

y

z

x

Φ(x, y, z) = M1 + M2 r0 + M3 r0 + M4 r0

xy

zy

2z2 − x2 − y2

+ M5 2r02 + M6 2r02 + M7

2r02

+ M8

zx 2r02

+ M9

x2 − y2 2r02

+ O(r3).

(2.89)

In this equation, we normalized the Yj-terms to a dimensionless quantity by dividing by a constant length r0 (in units of meters). Since the electric potential is measured in

27

2. Theory

y

z

x

Figure 2.6. – Equipotential contours (grey) and electric ﬁeld lines (red) of some components of the
expanded multipole potential. The potential xy/2r02 corresponds to a π/2 = 45◦ counterclockwise rotated x2 − y2/2r02 potential.

volts, the multipole coeﬃcients are then also deﬁned in the same unit.
Neglecting higher order contributions, Eq. (2.89) describes the potential that charged particles in a typical planar trap are exposed to. Terms 2–4 describe the dipolar-, and terms 5–9 describe the quadrupolar parts of the potential. The ﬁrst term is just a constant shift of the potential and can be neglected for further considerations. A pictorial representation of some of these terms and the resulting electric ﬁeld lines is given in Fig. 2.6.
We will now show, how the dc trapping voltages are related to a given choice of multipole coeﬃcients Mi.

2.2.3. Manipulation of the dc potential
A typical trap usually consists of a certain number N of dc electrodes (see e.g. Fig. 2.5a for a planar trap consisting of 2 rf and 22 dc electrodes). As will be explained in the next chapter, numerical simulations allow for the obtainment of independent contributions to the total potential Φi due to the i-th individual electrode. Φi then corresponds to the potential created by applying 1 V to the i-th electrode and 0 V to all other electrodes. To get an expression of the potential generated when -
N diﬀerent voltages Vi are applied to N electrodes, we sum up the the product of the potentials due to each individual
28

2.2. Planar segmented microtraps

electrode and the voltage Vi applied to it, i.e. the superposition principle:

N
Φ = Vi Φi/V.
i=1

(2.90)

Note, that, in order to multiply Φi by a voltage Vi and obtain a total potential in units of volts, we have to renormalize the potential due to each electrode into a dimensionless quantity by dividing it by 1 V (this is justiﬁed since Φi corresponds to the potential found by applying 1 V to electrode i). We can write the potential at electrode i per 1 V as

Φi(x, y, z)/V

1

y

z

x

= V M1,i + M2,i r0 + M3,i r0 + M4,i r0

xy

zy

2z2 − x2 − y2

+ M5,i 2r02 + M6,i 2r02 + M7,i

2r02

+ M8,i

zx 2r02

+ M9,i

x2 − y2 2r02

+ O(r3) ,

9

=

MjiYj + O(r3).

j=1

(2.91) (2.92)

In the last equality, the normalization constant 1 V was absorbed into the multipole coeﬃcients yielding Mji to be in unitless, a choice that will simplify the the matrix manipulations explained in the next paragraph.
The expansion will usually be carried out around a point (x0, y0, z0) at which we want to trap. While the rf conﬁnement typically restricts the position of the ion in the vertical and horizontal plane, i.e. x0 and y0 are ﬁxed, the axial position z0 only depends on the dc potential and can be chosen freely.
Combining Eq. (2.91) and Eq. (2.90) yields:

N9

Φ=

Mji Vi Yj.

i=1 j=1

The coeﬃcients can be written in a matrix equation

(2.93)

M˜ V = M,

(2.94)

29

2. Theory

where M˜ = {Mji}, V = {Vi} and M = {Mi} (in units of volts). Explicitly,

M1 M11 . . . M1N   V1 

 

...

= 

...

...

...

· 

...

. 

M9

M91 . . . M9N

VN

(2.95)

The components of the vector M correspond to the total multipole coeﬃcients with contributions from all N electrodes, whereas each column in the matrix M˜ corresponds to the multipole coeﬃcients of the potential generated by a single electrode. M˜ entirely depends on the actual electrode geometry. In order to obtain its elements Mji, a numerical trap simulation yielding the dc potentials generated by each individual electrode is required. The elements Mji are calculated by expanding the simulated -
potentials of each electrode i in the basis of spherical harmonics up to order j = 9.
Typically, we want to ﬁnd the trapping voltages V for a given choice of M, that means,

V = (M˜ )−1M.

(2.96)

To calculate V, the multipole coeﬃcients M can be chosen freely such that the resulting potential yields trapping conditions. For instance, the simplest choice giving rise to trapping conditions would only contain the coeﬃcient M7 (i.e. 2z2 − x2 − y2), while all other coeﬃcients are set to zero.

As the multipole coeﬃcient M1 only yields a constant shift of the potential, it will be neglected and matrix M˜ will be truncated to size 8 × N .

Control voltage method

Instead of directly calculating the voltage vector V for a given choice of M, we will now construct V as a linear combination of so-called control voltage vectors Ci. This is,

9
V = MiCi.
i=2

(2.97)

The unitless control voltage vectors Ci are solutions to Eq. (2.95) where one multipole coeﬃcient Mi is set to 1 V, i.e. Mi = 1 V and all others to zero Mj = 0 V for i = j. For instance, C1 = {C1,i} is given by

 C1,1 

 

...

 

=

1 V

M21

 

...

... ...

M2N −1 1V 

...

 

· 

...

. 

C1,N

M91 . . . M9N

0

(2.98)

30

2.2. Planar segmented microtraps
The potential giving rise to the application of a voltage C1 would only consist of a dipole towards the x-direction, C2 only of a dipole towards the y-direction etc. Given a choice of the multipole coeﬃcients Mi, the linear combination of Ci allows for arbitrary shaping of the resulting dc potential.
The control voltage method has a considerable advantage over calculating V once for a ﬁxed choice of M. For experimental control, we require that the multipole coeﬃcients can be varied in real time to achieve for instance micromotion compensation. The matrix inversion stated above would have to repeated each time the multipole coeﬃcients are changed. However, since the number of electrodes N will typically not equal the the number of multipole coeﬃcients, the problem is ill-deﬁned. To ﬁnd smallest-
 voltages, numerical methods have to be applied to solve the problem. Achieving this in real time could be tedious. With the control voltage method, we instead calculate all matrix inversions once before starting the experiment. During the experiment, the dc trapping voltages for a choice of the multipole coeﬃcients Mi can easily be calculated by loading the control voltage vectors Ci and evaluating Eq. (2.97).

Matrix Regularization

Typically, the number of electrodes will typically exceed the degree of freedom that is given by the free choice of multipole coeﬃcients M1, . . . , M9. Hence, the problem is underdetermined. To obtain voltage vectors V that exhibit minimal voltages, numerical methods have to be employed. This can be achieved by ﬁnding a V that solves Eq. (2.95) in a least-squares sense, i.e. such that it minimizes the norm

M˜ V − M .

(2.99)

However, the voltages V obtained by this method can still be unreasonably large, exceeding the speciﬁcations of digital-to-analog converters. By applying a regularization of the control voltage vectors, this adverse eﬀect can be bypassed. To this end, we substract a linear combination of elements of the kernel from V. Mathematically, we are allowed to do so since M˜ maps elements of its kernel simply to zero, i.e.

Ker(M˜ ) = x ∈ RN : M˜ x = 0 .

(2.100)

After the the orthonormal basis of the kernel of M˜ is found, the voltage vector V is regularized by subtracting linear combinations of the kernel from V:

N
Vr = V − λiKi.
i=1

(2.101)

31

2. Theory
The coeﬃcient λi is chosen such that the norm of the regularized vector Vr is minimized.

2.2.4. Trapping of multiple ions

For experiments requiring the trapping or coupling of of multiple ions, a potential consisting of multiple wells must be formed. Extending the techniques introduced in the previous section allows for calculating voltages that give rise to the respective potential wells. In the following, we will discuss the simplest case of trapping two ions separated by a distance d.

We start by generating a multipole coeﬃcient matrix M˜ (1) for the position of the ﬁrst

ion, i.e. (x, y, z1). Repeating this for the position of the second ion, (x, y, z1 + d = z2), we obtain a second matrix denoted by M˜ (2). Combining both matrices yields a system

of equations

M1(1) M1(11) . . . M1(N1)

 

...

 

 

...

M9(1)

  

M1(2)

 

=

M9(11) M1(12)

 

...

 

 

...

...
... ... ...

...

 

M9(N1)

M1(N2)

...

 

·

 V1

 

...

VN


 

,

 



M9(2)

M9(12) . . . M9(N2)

(2.102)

where Mi(1) and Mi(2) are the total multipole coeﬃcients at positions z1 and z2 with contributions from all N electrodes. The individual contributions to the potential wells conﬁning ions 1 and 2 can be shaped by manipulating both respective multipole coeﬃcient vectors independently. Eq. (2.102) is solved analogously in terms of control voltage vectors. Note, that by combining M˜ (1) and M˜ (2), the matrix inversion problem has become in a sense less ill-deﬁned. This method could be extended for t-
rapping n ions until all degrees of freedom are ﬁlled and n × 9 > N .

2.2.5. Renaming the multipole coeﬃcients
For experimental convenience, we will now rename, reorder and renormalize the multipole coeﬃcients Mi in accordance with other textbooks ([35, 36]) by making following
32

2.2. Planar segmented microtraps

substitution:

  

M1

C

M2/r0

−Ey

 

M3/r0

−Ez

 

M4/r0 −Ex

M5/r02

→

 

U3

 

.

 M6 

/r02

  U4  

M7/r02

 

U2

 

M8/r02

 

U5

 

M9/r02

U1

The potential up to second order then reads

(2.103)

Φ(x, y, z) = C + Ex(−x) + Ey(−y) + Ez(−z)

x2 − y2

2z2 − x2 − y2

+ U1

2

+ U2

2

+ U3

xy 2

+ U4

yz 2

+ U5

xz 2

+ O(r3).

This resembles the form given in the discussion of the equations of motion in a planar
surface trap. Setting e.g. r0 = 1 mm, Ex, Ey and Ez are now given in units of V/mm (i.e. the unit of the electric ﬁeld) and U1, . . . , U5 in units V/mm2. During trapping, Ex, Ey and Ez may be varied to achieve micromotion compensation (see section 2.1.4). In subsequent parts of this text, we will stick to this notation.

2.2.6. Ion transport
For applications in quantum information processing, the shuttling of ions will play an important role towards the realization of large-scale qubit arrays. The number of lasers that interact with the ionic qubits may be limited to certain positions along the trap. In order to move the ions to the respective zones, the dc electrode voltages can be varied in order to displace the corresponding potential minimum along the trapping axis. Voltages that create conﬁnement at an axial position z + z are ob-
tained similarly as before by expanding the potential Φ at the point (x, y, z + z ) in spherical harmonics. To shuttle an ion from position z to z the calculation is carried out repeatedly for a given number of positions between z and z , i.e. at z + n · zstep for n = 1, 2, 3, . . . . In general, zstep will not be constant but depend on a transport function which relates the axial position of the ion to the time during transport. We will see, that there exist speed limitations for ion shuttling. B-
y choosing appropriate transport functions, the minimum transport times can be reduced.
33

2. Theory

|Ξ(t0)/ωz|2

100 10−5 10−10

2t
0

(µs)

100

n = 1

n = 2

90

n = 3

n = 4

80

70

60

50

40

30

20

0

20

40

60

80

100

0

200

400

600

800

1000

ωz

t
0

d (µm)

(a)

(b)

Figure 2.7. – Logarithmic plot of |Ξ˜(t0)/ωz|2 (blue curve) and its envelope 4/(1 − (2ωzt0/π)2) 2
(red curve) (a). Minimal transport tiem 2t0 against transport distance d, plotted for various choices of the maximal motional quanta n that are allowed to be transferred to the ion during transport (b).

Speed limitations of single ion transport

The quantum gates used for quantum information processing (QIP) often require ions that are cooled close to the ground state. However, during ion transport, ions may suﬀer from heating which is dominated by two distinct eﬀects:
1. motional quanta are transferred to the ions because the dc potential well is shifted too fast and the ion can not follow the potential minimum [5, 6],
2. trap surface induced heating (anomalous heating).
In this section, we will explain how the former eﬀect can be minimized by shifting the dc potential in the adiabatic limit with near-optimal transport functions. Results will be compared to transport in the non-adiabatic regime.
Anomalous heating can not be minimized easily. It aﬀects complex algorithms involving the coupling, splitting and shuttling of ions via complicated trap structures. Such algorithms often involve recooling (e.g. achieved by sympathetic cooling [53, 54]) after transport, which may increase the minimum time required for qubit logical operations signiﬁcantly.
For a near-adiabatic transport, i.e. on a timescale T ωz−1, the average number of motional quanta n transferred to an ion can be expressed as [5]

n(t0)

=

md2ωz 8

|Ξ˜ (t0

)/ωz

|2,

(2.104)

34

2.2. Planar segmented microtraps

where m is the mass of the ion, d the distance of transport, ωz the axial secular frequency and the reduced Planck’s constant. Ξ˜(t0) depends on the transport function and is
called energy transfer function. For a sinusodial transport function, i.e.

z(t) = sin(tπ/2t0),

(2.105)

where 2t0 is the transport time, Ξ˜(t0) was found to be [5]

Ξ˜ (t0 )

=

ωz

1

2 cos(ωzt0) − (2ωzt0/π)2

.

(2.106)

We are interested in the minimal time in which we can transport an ion with transferring less than a certain number of motional quanta n, i.e. the lower bound n(t0) < n. We can obtain this lower bound by plugging the above into Eq. (2.104) and solving numerically. For transport of qubits (i.e. quantum information), we ask for the most limiting case that less than one motional quantum is transferred, i.e. n = 1. For this choice of n, assuming a sinusoidal transport a calcium ion over a distance of -
d = 800 µm and an axial trapping frequency of ωz = 2π × 1 MHz, we obtain 2t0 ≈ 95 µs. In Fig. 2.7b the minimal transport time 2t0 is plotted against the transport distance d for various n.
It was reported that transport over the same distance can be achieved much faster by selecting near-optimal transport functions such as the error function, i.e.

z(t) = Erf(2t/tp) , Erf(2t0/tp)

(2.107)

where tp is a parameter chosen such that the energy transfer function decays fast enough such that the condition n(t0) < n is satisﬁed for a minimal time. Finding the corresponding energy transfer function and using the same parameters as in the paragraph above, we can estimate the minimum transport time over 800 µm to ≈ 5 µs, which is more than one magnitude faster than transport with a cosine-type transport function.
From this analysis, we see that the choice of an appropriate transport function is essential in order to approach the limit of fast near-adiabatic transport. However, without requiring an adiabatic shift of the dc potential, we can achieve even faster transport times, i.e. in the non-adiabatic regime [6, 55]. By shifting the potential minimum by the desired transport distance during exactly one half of a secular motion oscillation period T = 1/(2fz), heating will be avoided. Limitations will only -
be due to the secular frequency ωz and can be estimated to T = 500 ns for ωz = 2π × 1 MHz. Due to limitations of dc voltage supplies (DACs), access to this regime has not been possible so far. However, recent advances in experimental control electronics have been reported allowing for voltage update rates of up to 50 MHz [56]. As will be discussed in the experimental section of this thesis, our experimental setup is not yet capable of achieving

35

2. Theory these high update rates.
36

3. Calculating Voltage Trajectories for
Ion Transport
In order to obtain the multipole expansion coeﬃcient matrix M˜ that allows for calculation of the electrode voltages, one has to ﬁrst solve Laplace’s equation in the region of interest. However, typically highly complicated electrode structures make it impossible to achieve this in an analytical way. Recent work has been done to provide a computational framework to carry out numerical calculations of electric potentials induced by ion trap geometries [2]. Solutions to second order diﬀerential equa-
tions such as the Laplace’s equation can be found in various ways. Common methods include the ﬁnite diﬀerence method (FDM), ﬁnite element method (FEM) and boundary element method (BEM). Of these three methods listed, the ﬁnite diﬀerence method is the one that can be implemented most easily. It transforms the diﬀerential equation into a diﬀerence equations and allows for translating the problem into solving matrix equations. They mostly involve block-diagonal matrices that can be solved fairly easi-
ly by employing e.g. LU factorization methods. However, calculations with the ﬁnite diﬀerence methods require very ﬁne grid spacings. Typical scales for ion traps range in the size of millimeters. However, as typical transport calculations would require spacings of down to 100-1000 nm, enormous computational resources are required to deal with such largescale grids. Finite element methods, on the other hand, solve Laplace’s equations by using a linear combination of basis functions and transform t-
he diﬀerential equation into a variational equation.
Although all three described methods allow for ﬁnding solutions, the boundary element method has major advantages over the two other ones. Solutions that are found using FDM or FEM often involve unphysical discontinuities (e.g. at the edges of electrodes). Discontinuous potentials cannot be used to analyze the ion trajectories and would have to be smoothened ﬁrst. Also, since grid spacings of down to 100 nm would hardly be bearable for e.g. the FDM, obtaining a well-spaced potential grid would hav-
e to involve numerical interpolations in addition. The boundary element method, that will be presented in this section, features high precision, smooth potentials and suﬃcient spatial resolution to calculate potentials for ion transport. Compared to the other techniques, BEM is mathematically rather advanced and the technical implementation can be quite demanding.
37

3. Calculating Voltage Trajectories for Ion Transport
3.1. Boundary Element Method
The illustration of this method will mostly follow the discussion in [2]. A concise mathematical description is given in appendix A.1 [57].
The main idea behind the BEM is to divide the electrode surfaces into triangular subsections and place surface charges of charge density σi = ∂Φ(xi)/∂n onto them. This the fundamental diﬀerence to other numerical methods for calculating partial diﬀerential equations: with the boundary element method one only needs to discretize the boundary surfaces (in our case the surfaces of the electrodes) but not the whole space within the calculation is carried out. This principle reduces the dimensionality -
of the problem by one: When simulating a 3D-electrode structure like the linear Paul trap, only the actual (2D-) electrode surfaces needs to be discretized.
In order to simulate trap geometries and solve Laplace’s equation using the BEM, we used a software package presented in [2] called bemsolver. Embedded into the CERNbased data analysis framework ROOT, it provides an eﬃcient and exact implementation of the boundary element method. ASCII AutoCAD ﬁles containing the exact trap geometries can almost directly be imported into bemsolver and the output data can conveniently be post-processed using numerical computing environments as MATLAB. In the follow-
ing, we will outline how we simulated an ion trap with bemsolver and how trapping voltages and potentials were obtained in MATLAB post-processing.
Since bemsolver can only deal with electrode surfaces having polygonal shapes with four corners at maxmimum, the AutoCAD drawing used for the simulation needs to be adapted. Electrodes are split into adjacent rectangles and curvatures are approximated by straight lines. After this step, each electrode (consisting of a number of adjacent polygons) is then placed on distinct AutoCAD layers. Bemsolver then allows for the interpretation of those AutoCAD layers as electrodes. To start the computation, -
a three dimensional grid on which the simulation was carried out has to be deﬁned. Usually, our simulations covered a grid of size 20 µm × 20 µm × 1280 µm. As preparation for later ion transport calculations, a high resolution of 1 µm along all axes was required. In order to minimize computation time, the simulation was split up by dividing the grid into 64 adjacent subgrids. This was necessary since requiring a high resolution along the z-axis would have demanded at least 1280 points for this res-
pective axis. However, bemsolver can only handle cubic grids with equal spacing for all axes. Simulating the ion trap with a cubic grid of 1280 points for all axes would have then required solving the potential at 12803 ≈ 2 × 109 points. Compared to 64 calculations that were run iteratively for 64 subgrids with 20 points each, the single simulation would have taken ≈ 4000 times longer.
For an ion trap consisting of N electrodes, bemsolver solves the potential by setting each loaded electrode alternately to 1 V and all others to 0 V. Iterating the potential
38

Simulation
bemsolver 1

...

...

2

3

Choose trapping position

3.2. Ion Transport

Post-Processing

MATLAB

4

5

Numerical expansion in spherical harmonics to 9th order Multipole coefficient matrix Matrix inversion

N electrodes

...

...
... ...

...

3 dim. arrays (numerical data)
8 Total DC Potential

7

Trapping Voltages

Control voltage vectors

6

Choice of (total)

multipole coefficients

Figure 3.1. – Schematic that illustrates the routine carried out for analyzing bemsolver simulation
results with MATLAB and obtaining trapping voltages. Bemsolver returns N three dimensional potential arrays. Each array was calculated by setting the respective electrode to 1 V and all others to 0 V (1). After a trapping position was chosen (2), for each 3D-array a numerical expansion in spherical harmonics is carried out in MATLAB (3). One obtains for each electrode a multipole coeﬃcient vector with 9 entries (expansion carried out to 9th order). The vectors are combined in a multipole coeﬃcient-
 matrix (4) and a matrix inversion is carried out (5). With the resulting control voltage vectors, one calculates the ﬁnal dc trapping voltages for a given choice of total multipole coeﬃcients Mi (6 and 7). Finally, the total dc potential can be analyzed by employing the superposition principle and multiplying each electrode potential with the respective calculated voltage.

calculation N times, one obtains N three dimensional arrays of potentials. As the

superposition principle holds, a general potential can be obtained by multiplying the

individual potentials with the voltage that was applied to the electrode and summing

up all contributions, i.e. Φ =

N i

ViΦ1i V,

where

Φ1i V

denotes

the

potential

obtained

by setting electrode i to 1 V and all others to 0 V. After the simulation, the adjacent

grids were joined and post processed with MATLAB, see section 2.2.3. A ﬂowchart

illustrating this algorithm is given in Fig. 3.1.

3.2. Ion Transport
In order to transport an ion from a starting position z to an end position z , the secular potential minimum along the z-direction needs to be displaced by manipulating the dc potential. We will now introduce an ion trap design for which corresponding transport calculations were carried out.
39

3. Calculating Voltage Trajectories for Ion Transport
3.2.1. Transport of a single trapped Ion on a microfabricated surface trap
The Eurotrap is a monolithic surface trap that was manufactured by Sandia National Laboratories, see Fig. 3.2 [43]. It contains 42 dc- and 1 rf gold electrodes that are photolithographically fabricated on a silicon substrate. This trap geometry features a 100 µm wide slit that allows for loading the trap with calcium atoms from below. Dc electrodes along the slit allow for variation of the axial potential while a single rf electrode electrostatically conﬁnes the ion radially and vertically (see re-
d colored area in Fig. 3.2). In order to take into account the thickness of the electrodes close the the 100 µm wide slit, we extruded the center electrodes (denoted as 41 (CNT) and 42 (CNT)) in the AutoCAD input ﬁle by 10 µm in the negative z-direction1.
In Fig. 3.3 the voltages that need to be applied to the dc electrodes 1–20 & 41 and 21–40 & 42 for transporting an ion from z = −640 µm to z = 640 µm are depicted. The corresponding simulation took three days on a standard single-core desktop computer. The 3D ribbon plot displays how the voltages need to be changed in order to shuttle an ion. Notice that the ion transport voltages should change smoothly, since abrupt voltage jumps could cause problems with the dc voltage source (i.e. the digital-t-
o-analog converters). In order to obtain these voltages, the multipole coeﬃcient U2, which creates a conﬁnement along the z-axis, was set to 10 V/mm2 and all others were set to zero. At ion positions close to the centers of an electrode, the corresponding electrode voltages have a maximum absolute value. For instance, at z = 0 µm, which is indicated by the black circle in Fig. 3.2c, electrodes 10 and 30 exhibit maximal negative voltages. The electrode voltages for trapping in the center are also i-
llustrated in Fig. 3.4a.
Trapping Frequencies
The secular potential (i.e. sum of the static dc potential and the rf-pseudopotential) formed by applying the voltages shown in Fig. 3.3 to the dc electrodes can be calculated using the superposition principle. The potential contribution due to each individual electrode is multiplied by the respective dc voltage that is applied to it. Summing up all contributions yields the total secular potential. Cuts of the secular potential at z = 0 µm are depicted in Fig. 3.4c, 3.4d and 3.4e. By analyzing the-
se curves, important trapping parameters as trapping frequency, trap depth and trapping height cans be extracted. The trapping height is calculated by ﬁnding the minimum of the potential along the y-direction. It was found to lie at y = 80 µm. The trapping depth,
1At a very late stage of the preparation of this manuscript we became aware that this dimension was wrong by a factor of ﬁve. However, timing limitations did not allow to carry out the simulation again with a corrected extent. Although resulting voltages should allow for trapping, simulated frequencies may not correspond to measured experimental results.
40

3.2. Ion Transport

Ground plane

6 7 8 9 10

11 12 13 14 15

5

16

4

17

3

18

2

19

1

20

41 (CNT)

42 (CNT)

21

40

22

39

23

38

24

37

25

36

26 27 28 29 30

31 32 33 34 35

Ground plane 8100 µm
x

DC RF Slit
RF
a)

z y

b)

70 µm

60 µm 100 µm

2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 RF
RF

41 (CNT) 42 (CNT)

22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 c)
1232 µm

Figure 3.2. – Schematic of Sandia National Labs Eurotrap. Top view, showing all electrodes and
the ground plane (light gray shaded area). The electrodes are numbered 0–42, where 0 denotes the rf electrode (red colored) and 1–42 denotes the dc electrodes (a). Zoom into region of the trap marked by the red square. The 100 µm thick slit is depicted as the gray area (b). More detailed view on the trapping region, showing numbering of the trap electrodes and dc center electrodes 41 and 42. The black dot symbolizes an ion trapped at the center of the trap (c).

41

3. Calculating Voltage Trajectories for Ion Transport

Voltage (V)

5
0
−5
−10 0.6

0.4 0.2

0 −0.2

Axial ion position (mm)

−0.4 −0.6
(a)

DC1 DC2 DC3 DC4 DC5 DC6 DC7 DC8 DC9 DC10 DC11 DC12 DC13 DC14 DC15 DC16 DC17 DC18 DC19 DC20 DC41

DC41 DC18 DC15

DC10

DC5

DC1

Electrode Number

Voltage (V)

5
0
−5
−10 0.6

0.4 0.2

0 −0.2

Axial ion position (mm)

−0.4 −0.6
(b)

DC21 DC22 DC23 DC24 DC25 DC26 DC27 DC28 DC29 DC30 DC31 DC32 DC33 DC34 DC35 DC36 DC37 DC38 DC39 DC40 DC42

DC42 DC38 DC35

DC30

DC25

DC21

Electrode Number

Figure 3.3. – Simulation of voltage trajectories for ion transport. The voltages of the diﬀerent
electrodes are plotted as ribbons against the axial trapping position. Electrodes 1–20 are depicted in (a) and 21–40 in (b). A clear periodicity in position vs. electrode number can be observed: when the ion sits in the the middle of an electrode, the corresponding electrode voltage has a maximal amplitude. Trajectories (a) and (b) resemble each other to a large extent. This fact exhibits a high trap symmetry with respect to the axial direction.

42

3.2. Ion Transport

deﬁned as the distance between this minimum and the escape point, was calculated to

be Udep = 260 meV. The trapping frequencies are determined by the curvature of the potential. In a harmonic approximation, they can be obtained by ﬁtting the potential

to an expression

U

≈

1 2

kx

x2

+

1 2

ky

y2

+

1 2

kz

z2,

(3.1)

where ki are spring constants. The frequency is proportional to the square root of the spring constant and can be calculated by

1 fi = 2π

ki , m

(3.2)

where m is the mass of the ion. By applying the above in a ﬁt, secular frequencies of fx = 3.04 MHz, fy = 3.08 MHz and fz = 1.12 MHz could be determined for the potentials depicted in Fig. 3.4.
The dependency of the secular frequencies on the choice of the multipole coeﬃcient U2 was investigated. To this end, we assume a secular potential that in a harmonic approximation consists of a rf potential of form Eq. (3.1) and a dc potential (2z2 − x2 − y2)/2, i.e.

Usec

≈

1 2

kxx2 + kyy2 + kzz2

+ eU2

2z2 − x2 − y2 2

= kx − e U2 x2 + kx − e U2 y2 + kx + 2eU2 z2.

2

2

2

(3.3) (3.4)

Using Eq. (3.2) one easily arrives at the expression of the secular frequencies depending on U2:

1 fx,y = 2π

(fx,y )2

−

eU2 m

,

1 fz = 2π

(fz )2

+

2

eU2 m

.

(3.5) (3.6)

To analyze the quality of the harmonic approximation, the parameter U2 was now varied and corresponding secular frequencies were obtained with a polynomial ﬁt described in the paragraph before. Fig. 3.4b shows the three secular frequencies for various values of U2. The red curves are plots of fx,y and fz without any ﬁt parameters. They agree well with an maximum error of 0.16 % with the frequencies found in post-processing.

In order to evaluate the trapping characteristics during the transport of an ion, the preceding analysis is repeated for various axial ion positions according to the voltage set presented in Fig. 3.3. The evolution of the secular potential during shuttling an ion from −490 µm to 490 µm is depicted in Fig. 3.5a and Fig. 3.5b. Fig. 3.5a shows a

43

3. Calculating Voltage Trajectories for Ion Transport

Usec (eV)

Voltage (V)

−2

−4

−6

5

10

15

Electrode Number

−2

−4

−6

25

30

35

Electrode Number

(a)

3.5

3

Secular Frequency (MHz)

2.5

20

2

1.5

1

0.5

40

0

2

4

6

Multipole coefficient U

(V/mm82)

2

(b)

fx fy fz
10

Voltage (V)

−1.44 −1.445
−1.45 −0.04 −0.02 0 0.02 0.04 z (mm)
(c)

Usec (eV) Usec (eV)

−1.3 −1.35
−1.4 −1.45
−0.04 −0.02 0 0.02 0.04 x (mm)
(d)

−1.1 −1.2 −1.3 −1.4
0.05 0.1 0.15 0.2 y (mm)
(e)

Figure 3.4. – Voltages against electrode number for trapping an ion close to the center of the trap at
axial position z = 0.01 µm (a). Secular trapping frequencies for a variation of the multipole coeﬃcient U2 (b). Resulting axial (c), radial (d) and vertical (e) cuts of the potential when voltages depicted in (a) are applied. The red dots correspond to the minima that were found during post-processing. Corresponding to (e), a rf minimum at z = 80 µm and a trapping depth of Udep = 260 meV were found. The rf drive frequency to obtain the simulation data for ﬁgures (a)−(e) was chosen to be Ω/2π = 40 -
MHz at an rf amplitude of 150 V.

top view on the potential and Fig. 3.5b shows a cut through the z-axis at x = 0. The position of the ion at each respective position is marked by the white and red circles, respectively.
The trap depth was analyzed for all axial positions and is plotted in Fig. 3.6a. Fluctuations in the trapping depth lie below 14% over the whole range of transport. In the main trapping region between ±0.4 mm, they were calculated to range below 4%, indicating a good trapping stability and a low probability of loosing the ion during transport.
During ion transport, secular trapping frequencies, i.e. the curvature of the potentials can vary. These ﬂuctuations lead to an additional heating eﬀect known as parametric heating [58, 6]. Although a detailed discussion of parametric heating is beyond the scope of this thesis, we can quantify the frequency ﬂuctuations during transport by ap-

44

3.2. Ion Transport

x (mm) U (eV)
sec

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

−0.5

0

0.5

z (mm)

(a)

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1

−1.5

−0.5

0

0.5

z (mm)

(b)

Figure 3.5. – Evolution of the secular potential during transport of an ion from position z = −490 µm
to z = 490 µm. Color-coded top view of the potential, dark red indicates high energy and blue low energy. The ion position is indicated by white markers (a). Vertical cut through the potential at x = 0. Respective ion positions are indicated by the red markers (b).

45

3. Calculating Voltage Trajectories for Ion Transport

300 3
250 2.5
200 2

Trap Depth (meV) Secular Frequency (MHz)

150

1.5

100

50

0

−0.6 −0.4 −0.2

0

0.2 0.4 0.6

Axial ion position (mm)

(a)

1

fx

0.5

fy

fz

0

−0.6 −0.4 −0.2

0

0.2 0.4 0.6

Axial ion position (mm)

(b)

Figure 3.6. – Trap depths against the axial position (a). The trapping depth is roughly constant
over the whole range of transport. In proximity to the large electrodes, we observe a small decrease in trapping depth. Secular frequencies vs. axial position (b).

plying a polynomial ﬁt to the secular potential at all transport positions. The obtained frequencies are plotted against the axial ion position in Fig. 3.6b. As for the trapping depth, the trapping frequencies only exhibit minor ﬂuctuations throughout the whole range of transport. They were calculated to be ∆fx = 5% for the radial frequency, ∆fy = 8% for the vertical frequency and ∆fz = 6% for the axial frequency.

3.2.2. Shuttling of two ions
In order to load, couple and readout ions for quantum computing operations, transport from loading zones to logic zones must be possible while keeping ions stored in memory zones trapped. Applying the theoretical principles discussed in chapter 2.2.4 to our post-processing methods outlined above, multi-ion transport is feasible. Trapping two ions is the simplest case of multi-ion trapping. Rather than expanding the potential at only one distinct position, we perform a second expansion in spherical-
 harmonics to obtain the two-ion multipole coeﬃcient matrix, see Eq. (2.102).
For trapping two ions, two additional eﬀects must be taken into account: the electrodes that achieve trapping of a ﬁrst ion will inﬂuence the trapping potential of the second ion even if it is far away from the ﬁrst ion (cross-talk). This is taken care of by the calculation of the trapping voltages using the multipole coeﬃcient method. Calculating the trapping voltages independently for trapping an ion at position z and repeating the calculation for a position z and adding the voltage sets would n-
ot give rise to trapping conditions. Moreover, the Coulomb interaction must be taken into account. In order to quantify the inﬂuence of the Coulomb interaction at a distance r between two ions,

46

3.2. Ion Transport

we calculate the frequencies of the eigenmodes of the coupled system. To this end, we write the classical Hamiltonian consisting of the kinetic energy contributions T and the potential energy V as

H

=

p21 2m

+

p22 2m

+

1 2

mωz2z12

+

1 2

mωz2z22

+

1 4π

0

|z1

q2 −

, z2|

(3.7)

where pi is the canonical momentum and zi the coordinates of the ions along the trapping axis. Further, m is the mass of the ions, ωz is the axial trapping frequency in a harmonic approximation, 0 is the electric constant and q is the elementary charge. The frequencies of the normal modes can be found by expanding the potential energy V in a Taylor series up to second order and calculating the Hessian matrix in mass-weightened coordinates which is deﬁned by [59]

Fi(jm)

=

1 m

∂2V .
∂zi∂zj ij

(3.8)

The frequencies of the eigenmodes are then given by the square root of the eigenvectors

of the Hessian matrix

ωi = F˜i(im),

(3.9)

where F˜(m) denotes the diagonalized Hessian matrix. Explicitly, we obtain

ω1 = ωz,

ω2 =

wz2

+

4 m

1 4π

0

|z1

q2 − z2|3

.

(3.10) (3.11)

This means, that the ﬁrst normal mode is just the secular frequency of the corresponding

harmonic potential well. The second normal mode includes the coupling between the

both ions. For distances r = |z1 − z2| which yield the second term in Eq. (3.11) to be

much smaller than the secular frequency ωz, we can perform a Taylor expansion and

approximate ω2 by

2 1 q2 ω2 = ωz + mωz 4π 0 r3 = ωz + ∆ω.

(3.12)

The parameter ∆ω then provides a scale for the coupling between two ions depending on

the inter-ionic distance. For distances r > 100 µm, this number is typically much smaller

than the secular trapping frequencies and can be negelected. At r = 100 µm we obtain

a coupling of ∆ω = 2π × 158 Hz for an axial trapping frequency of ωz = 2π × 1.1 MHz (c.f. [60, 61]).

The principle of two-ion transport is illustrated in Fig. 3.7a and 3.7b. In a preparation transport sequence, an ion was loaded at z = −490 µm and shuttled to z = 490 µm (see the previous discussion for single-ion shuttling and Fig. 3.5a). Then, while keeping

47

3. Calculating Voltage Trajectories for Ion Transport

x (mm) U (eV)
sec

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

0.02

0

−0.02

−0.5

0

0.5

z (mm)

(a)

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1 −1.5

−1

−1.5

−0.5

0

0.5

z (mm)

(b)

Figure 3.7. – Density plot of the secular potential during the transport of an ion from z = −490 µm
to z = 0 µm while keeping a second ion at a ﬁxed position of z = 490 µm. Red indicates high energy, blue indicates low low energy, the white dots indicate the ion positions (a). Z-axis slice of the potential, ion positions are indicated by red markers (b).

48

3.2. Ion Transport the ﬁrst ion at the same position, a second ion is loaded at z = −490 µm and shuttled to the center of the trap, see Fig. 3.7a. To avoid losing the second ion, the depth of the potential well should not reduce when creating a second well. Comparing 3.7b and 3.5b exhibits that the potential well of the ﬁrst ion is not drastically impaired after loading a second ion. Transport can be achieved closely to the ﬁxed ion providing a clear separation of both respective potential wells. -
At a distance of r = 490 µm between the two ions, the Coulomb coupling corresponding to the previous paragraph is fully negligible and amounts to only ∆ω = 2π × 1.34 Hz.
49

4. Experimental Realization of Ion Trapping and Transport
Ion trap quantum computing has the advantage of using natural qubits formed by the electronic states of ions rather than artiﬁcially fabricated two-level atoms. However, manipulation and coherent control over the qubit states requires state-of-the-art experimental equipment and ultra-stable lasers. Trapping needs to be carried out under ultra-high vacuum of below 10−10 mbar. Experimental setups need to be designed carefully allowing baking the vacuum chamber at up to 150◦C. Accessing the qubit tra-
nsition is technically demanding and requires laser with mHz-narrow linewidths. In this chapter the experimental prerequisites for ion trapping will be explained. The experimental setup, including a ultra-high vacuum chamber, photoionization-, detectionand Doppler cooling lasers will be discussed. The experimental control of the trap electrode voltages via a FPGA-based DAC board will be introduced.
4.1. Ion trapping experiments in UHV chambers
In order to create stable trapping conditions, ion traps are placed in ultra-high vacuum chambers allowing for vacuum pressures of down to 10−12 mbar. In order to reach pressures of below 10−10 mbar, the vessel needs to be baked for several weeks in an oven at 150◦C-200◦C. During baking, volatile compounds as hydrocarbons desorb from the trap and the inner surfaces of the UHV vessel and are pumped out with an vacuum pump that is attached via an oven outlet. In our experiment, we used a residual ga-
s analyzer (RGA) to monitor residual volatile molecules during bakeout. Baking was ﬁnished when no more compounds that could spoil vacuum were detected in the RGA mass spectra. After baking, we detached the RGA from the chamber and reduced the pressure to 10−11 −10−12 mbar using an Varian Starcell ion pump and a titanium sublimation pump. The pressure is monitored by an ion gauge, which is attached to one of the vessel feed throughs. Both ion pumps and gauges have the same basic principle [62]: El-
ectrons are emitted from a high-current ﬁlament (typically 1 mA) and ionize residual molecules or atoms by collisions. The ion gauge detects the pressure by measuring the current induced by the ion ﬂow. The
51

4. Experimental Realization of Ion Trapping and Transport
same principle is applied in ion pumps, where instead measuring a current, the ions are directed onto surfaces of the pump where they are chemically bound. Titanium sublimation pumps evaporate titanium and coat the inner surfaces of the chamber with a titanium layer. Acting as a getter material, residual gas molecules (mainly H2) are bound on the surface without requiring ionization. Before trapping for the ﬁrst time, the calcium oven was switched on at high currents of 5 A in order to break oxide-
 layers created by the contact of the calcium particles with air during venting. Pressures will typically rise two orders of magnitude, but converge back to the initial value after a few hours. After having repeated this process 5-10 times, turning on the oven will not give rise to any more pressure increase and loading can be achieved without worrying about impairing the vacuum.
Venting under argon reﬂow
Under certain circumstances, one may want to replace a trap without requiring a baking time of two weeks. In this case, the vessel can be vented under the reﬂow of argon, which is fed into a feed through valve. The presence of argon ﬂowing through the open chamber should prevent the contamination of the chamber and trap surfaces. After mounting a new trap, the vessel can be pumped back down using a regular turbo-pump or RGA. Instead baking the vessel in an oven, the apparatus can be wrapped with h-
eater tapes to bake it for a short time of e.g. one day while remaining ﬁxed on the optical table. By applying this technique, we could achieve pressures down to 10−11 mbar after 24 hours of baking.
4.2. Loading and three-step photoionisation of neutral calcium
In order to trap calcium ions, neutral calcium needs to be evaporated into the chamber and successively ionized. To this end, crystalline calcium is placed into an evaporative oven placed below the trap. High currents up to 4-6 A are applied to the oven, heating the oven walls up and allowing neutral calcium to evaporate. The neutral calcium beam is then directed into the main vacuum chamber and loaded above the trap through a 100 µm wide slit that crosses our trap, see Fig. 3.2. While feeding the-
 vacuum chamber with calcium, the photoionization lasers are directed at the trapping height above the trap surface allowing for excitation of the Ca valence electron beyond the ionization limit. The photoionization process is carried out in three steps (see Fig. 4.1a): First, a blue 423 nm laser excites the atoms from the 1S0 electronic ground state to the 1P1 state, following a second red 732 nm laser exciting them to the 1D2 state. In the last
52

4.3. Doppler cooling, fuorescence detection and repumping

IL 1D2 1P1

832 nm 732 nm

IL 1P1

UV 390 nm

423 nm

423 nm

1S0
(a)

1S0
(b)

Figure 4.1. – Level structure of neutral calcium and transitions required for three-step photoionisa-
tion [65] (a). Two-step photoionization with 390 nm UV laser [63] (b).

step, a 832 nm laser is used for exciting the neutral atoms beyond the ionization limit of 6.1130 eV and creating positively charged 40Ca+ ions.
While loading calcium into the chamber for the ﬁrst time, only the ﬁrst step PI laser (423 nm) is turned on and scanned in a range a few MHz around the transition frequency. While a 423 nm bandpass-ﬁlter reduces the background, a photomultiplier tube allows for detection of a distinct 1S0 ↔ 1P1 neutral atom ﬂuorescence signal. In order to verify the second step of the ionization process, the 732 nm laser is then switched on. The population will then be excited to the 1D2 state and since the light -
emitted by all other transitions is blocked by the 423 nm bandpass-ﬁlter, a clear dip in the ﬂuorescence peak is visible.
Three-step Ca-photoionization is advantageous over other methods as two-step PI, see Fig. 4.1b. Instead using a visible and near-IR laser for exciting from the 1P1 state, two-step PI uses a strong UV laser with wavelength of 390 nm [63, 64]. It is believed that the application of high-energetic UV lasers could cause surface-induced charging eﬀects that may increase the heating rates of trapped ions (also see the discussion of heating eﬀects in section 2.2).

4.3. Doppler cooling, fuorescence detection and repumping
In order to conﬁne ions in an electrostatic potential, Doppler cooling must be applied [66]. Doppler cooling is one of the most basic laser cooling principles utilizing the

53

4. Experimental Realization of Ion Trapping and Transport

P1/2

866 nm

397 nm

S1/2

D3/2

Figure 4.2. – Electronic transitions in ionic calcium required for ﬂuorescence detection and cooling
(397 nm) and repumping to the cooling cycle (866 nm).

Doppler eﬀect: stationary ions will only absorb photons with energies matching the

S1/2 ↔ P1/2 transition depicted in Fig. 4.2. However, if an ion is propagating with a velocity v towards an oppositely directed laser beam with photon momentum k, the

Doppler eﬀect allows the absorption of light that is red-detuned (i.e. lower frequency)

from the resonance frequency of the ion at rest. After absorption, the ion will be slowed

down by k/m due to momentum conservation. Spontaneous emission gives rise to the

re-emission of a photon in a random direction inducing a momentum kick in its opposite

direction. On average, contributions due to spontaneous emission are mostly canceled,

only leaving a small net momentum. This is called the Doppler limit characterized by

the energy [66]

Γ kT = ,
2

(4.1)

where is the reduced Planck’s constant, Γ the linewidth of cooling transition and k

Boltzmann’s constant. For calcium ions with a cooling transition linewidth (397 nm

laser) of Γ 2π × 20 MHz, we calculate the Doppler limit to T 0.5 mK [67].

For trapping of neutral atoms, Doppler cooling along more than one axis is required. However, in ion trapping experiments, strong conﬁnement in all spatial directions is achieved by the electrostatic potential. Cooling ions with one beam is suﬃcient to prevent the ions heating up and escaping the trapping potential. However, for eﬃcient cooling, we require a projection of the cooling laser along all three axes.

Doppler cooling is easily provided by red-detuning the 397 nm detection laser by 5– 100 MHz. In this way, cooling and detection can be carried out with the same laser beam. A larger detuning of up to 100 MHz is desirable for trapping ions for the ﬁrst time. After trapping was successful, the detuning is typically reduced to ≈ 20 MHz to achieve optimal cooling.

54

4.4. Laser systems for trapping calcium
Fluorescence detection
To utilize calcium ions as natural qubits, internal electronic states can be used as a twolevel system. State readout is easily achieved by continuous excitation of the cooling transition S1/2 ↔ P1/2. If the qubit is in the ground state, the ground state population will be excited to the P1/2 state and a light scattering can be recorded. Once in every 15 decays, the population will not decay to the the ground state but rather to the D3/2 state which has a lifetime τ ≈ 1 s. In order to repump into -
the ﬂuorescence-excitation cycle, the ion is exposed to a 866 nm light continuously driving the D3/2 ↔ P1/2 transistion. While trapping ions, switching oﬀ the repumping laser allows to distinguish noise and random light scatter from the actual ﬂuorescence signal that is collected with the CCD camera and PMT.
4.4. Laser systems for trapping calcium
Ion trapping experiment requires in ultra-stable lasers. Electrical equipment, conversations, construction work or vibrations caused by closing doors could interfere with the laser systems. To avoid such perturbations, all laser light in our lab is generated in a separate laser room and directed via single-mode optical ﬁbers to the individual experiments. In the following we will brieﬂy describe the laser systems allowing for photoionisation, doppler cooling and ﬂuorescence detection and repumping-
. A short introduction to laser locking and frequency stabilization using the Pound-Drever-Hall technique will be given. All lasers in our experimental setup are diode lasers, which have considerable advantages over solid-state or dye lasers in terms of stability and maintenance eﬀort. Whereas the replacement of the dye liquid used for dye lasers requires a lot of labor and solidstate lasers cannot be tuned easily, diode lasers provide excellent stability and are easy to setup. Modern diode lasers-
 often incorporate reﬂection gratings attached close to the laser diode. The diode output is collimated and directed onto the grating, only reﬂecting a single wavelength of the emitted light by the ﬁrst diﬀraction order. The reﬂected light is fed back into the gain region of the diode, hence forming a cavity. By tilting the angle of the grating with a piezoelectric motor, the laser frequency can be tuned. In addition, the frequencies can be varied by changing the input laser diode current and temp-
erature. Latter parameters can be controlled via precision current sources and thermoelectric controllers (Peltier-elements). In table 4.1 an overview of our laser systems, including corresponding wavelengths and frequencies (f = λ/c) are given.
55

4. Experimental Realization of Ion Trapping and Transport

Name

Purpose

λ (nm) f (THz) Remarks

Toptica TA-SHG 110 Detect. and Cool. 397 377.61128 freq. doubled

Toptica DL 100

Repump.

866 345.99991

Toptica DL pro

PI step 1

422 345.53917 freq. doubled

Toptica DL 100

PI step 2

732 409.09585

PI step 3

832

no grating

Table 4.1. – Summary of the laser systems used to trap calcium ion. PI denotes photoionisation.
Laser locking with the Pound-Drever-Hall technique
The Pound-Drever-Hall technique is a scheme used for laser frequency stabilization by locking the laser to a resonance mode of a reference cavity via PID-based feedback control [68, 69]. In this scheme, the cavity reﬂection is recorded with a photodiode while scanning the laser frequency, see Fig. 4.3a. If the laser is tuned close to the cavity resonance, we typically do not know on which side of the resonance we are, i.e. if the laser frequency is lower (blue-detuned) or higher (red-detuned) than-
 the cavity resonance frequency. By modulating the laser frequency f0 with a time dependent term f (t), i.e. f = f0 + f (t), and measuring the derivative of the cavity reﬂection, we obtain a signal proportional to the cavity-laser detuning (also see Fig. 4.3b). This signal is suitable as the error signal for the PID controller.
Note that this explanation is oversimpliﬁed for illustrative purposes. The derivative of the reﬂection cannot be measured easily and the actual error signal will look much more complicated than shown in Fig. 4.3b. A rigorous discussion of this topic, which is beyond the scope of this thesis, can be found in [69].
397 nm: Doppler cooling and Detection
A Toptica TA-SHG 110 frequency doubled laser diode system is used for Doppler cooling and ﬂuorescence detection. The laser emits light at a wavelength of 794 nm, which is then frequency doubled to 397 nm using a nonlinear MgO:LN (MgO doped lithium niobate) crystal in a cavity. To frequency stabilize the laser and narrow down its linewidth to ≈ 100 kHz, PIDs are employed to lock the laser to a temperature-stabilized reference cavity and to lock the doubling cavity to the laser. To ﬁnd the right cav-
ity resonance, both PIDs receive error signals that are obtained with the Pound-DreverHall (PDH) technique. All Toptica systems are controlled via a SC 110 scan control, DTC 110 temperature control, and DC 110 diode laser control. Systems with PDHbased laser locking come with an additional PDD 110 Pound-Drever-Hall detector and

56

4.4. Laser systems for trapping calcium

Reflection Derivative of the reflection Reflection

1

0 0

Laser frequency
(a)

Laser frequency
(b)

Figure 4.3. – Reﬂection of an optical cavity vs. laser frequency exhibiting two cavity modes (a).
Cavity reﬂection and derivative of the relection for a laser close to the resonance of a cavity mode (b). A positive derivative implies the laser is blue-detuned whereas a negative derivative indicates that the laser is red-detuned. If the derivative is zero, the laser is on resonance with the cavity mode. After [69].

PID 110 PID regulator unit.

866 nm: Repumping laser
Repumping into the Doppler cooling cycle is achieved by a 866 nm Toptica DL 100 that is locked to a reference cavity (as the 397 nm laser) with a PID and the PDH scheme.

Photoionisation lasers
For the three-step photoionisation process, three lasers are directed onto the atomic calcium cloud. The 422 nm beam is generated by a Toptica DL pro laser frequency doubled with a PPKTP (periodically poled potassium titanyl phosphate) nonlinear crystal in a cavity from 844 nm. Although frequency stabilization is not required for photoionisation, a self-built PID controller is used for locking the doubling cavity to the laser in order to ﬁnd a good cavity mode. Second step PI light is emitted from-
 a Toptica DL 100 laser with 732 nm diode. The last PI laser is a 832 nm diode driven with a Thorlabs LDC 202 C laser diode controller. Since the 832 nm excites above the ionization threshold, no frequency stabilization is required. Wavelengths of all laser are continuously measured with a HighFinesse-Angstrom WS-7 wavelength meter in the laser room. Data is recorded via a PC and sent to an screen next to the experimental optical table to allow for remote frequency control.
57

4. Experimental Realization of Ion Trapping and Transport

GND

Serial port

DAC board

PC

Microcontroller SMA

D-SUB

Amplifier board

UHV Chamber

FPGA

Figure 4.4. – Sketch of the electronics that allow for control over the dc electrodes. See text for a
detailed explanation.
4.5. Experimental control of dc and rf voltages
In the following, we will explain the dc and rf voltage sources used for generating the respective trapping ﬁelds on the trap.

Dc control via a FPGA-controlled DAC-board
Since ion transport will generically be achieved by shifting the dc potential minimum by varying the dc electrode voltages, dc voltage supplies featuring ultra-fast voltage update rates must be incorporated. This makes the use of FPGA (ﬁeld programmable gate array) controlled digital-to-analog converters (DACs) neccessary. Commercial solutions are available (i.e. from National Instruments); however, they mostly lack in terms of noise and do not meet our speed limitations. Hence, we built a 19 chan-
nel FPGAcontrolled DAC-board. Voltage sets for ion transport can be written on the FPGA and the ion position is stepped by triggering the FPGA with an external TTL pulse. In this setup, the most limiting factor is the voltage settling time of the DACs. Using 16-bit 0–2.5 V DACs, we achieve a voltage settling time of 1 µs, corresponding to a update frequency of 1 MHz. Faster voltage update rates of up to 50 MHz can be obtained [56].
The DAC outputs of 0–2.5 V were diﬀerentially ampliﬁed to -13–13 V using an ampliﬁer board. The ampliﬁed voltages were then fed into the UHV chamber, see Fig. 4.4. Communication between the experimental control computer and the FPGA was achieved by employing a microcontroller on the DAC board as an interface. In order to write voltages or voltage sets on the DACs, a signal was sent to the microcontroller via the serial port of the computer. The microcontroller then transfered this information to t-
he FPGA, which distributed it to the DACs as a bitstring. Our DACs had a resolution of 16 bit, i.e. allowing voltage steps of 2.5/216 = 38 µV. The signal that is sent from the PC to the microcontroller is a character-string that contains the output channel number (i.e. from 1 to 19), the voltage set index (for ion transport) and a number between 1 and

58

4.5. Experimental control of dc and rf voltages

Volt. at amp. board (V) Error (µV) <|∆f|> (kHz)

200
0
−200 10 5 0 −5
−10

1

2

3

4

5

6

Number N sent to microcontroller x 104

(a)

60

f
x

50

fy fz

40

30

20

10

0

0

2

4

6

8

10

Maximum voltage deviation (mV)

(b)

Figure 4.5. – Calibration curve to associate the numbers sent to the DAC (via microcontroller and
FPGA) to the output voltage at the ampliﬁer board. Red dots are the measured ampliﬁed voltages, the blue curve is a second order polynomial ﬁt, i.e. Vout = a + bN + cN 2. The error of this ﬁt is displayed above the plot (b). Absolute averaged frequency error for diﬀerent levels of noise at the
electrode voltages (a).

65355 corresponding to the voltage that should be applied. Sending a number 1 sets the output voltage of the DAC to the lowest voltage, i.e. 0 V, and 65355 to the highest voltage i.e. 2.5 V. The microcontroller received these strings and processed it according to an ANSI-C script that was programmed onto the microcontroller via the PC before. Control of the DAC board was achieved by implementing a Python script that allows for the generation of the character strings and the transmission to the mic-
rocontroller via the serial port into an existing LabView experimental control software.

To obtain the exact ampliﬁcation ratio due to diﬀerential ampliﬁcation, a calibration

routine was programmed. To this end, all DAC output ports were connected to the

ampliﬁer board. Iteratively, each DAC voltage was swept from 0–2.5 V by writing

numbers 1 to 216 − 1 = 65535 to the FPGA. The ampliﬁed output voltage was recorded

by

connecting

the

output

of

the

ampliﬁer

board

to

a

Keithley

2100

6

1 2

digits

digital

multimeter. The multimeter was read out remotely from the computer and a second

order polynomial ﬁt according to Vout = a + bN + cN 2 was applied to relate the number written to the DACs to the ampliﬁed output voltage. In Fig. 4.5a a calibration curve is

depicted for channel 1. Corresponding polynomial coeﬃcients a, b and c were ﬁtted for

all channels and saved in a txt-ﬁle. By solving the polynomial ﬁt equation for N , that is

N = (−b + b2 − 4c(a − Vout))/2c, and rounding to an integer value, the number that has to be sent to the microcontroller could be interpolated for a given output voltage

Vout.

To avoid ﬂuctuations in the trapping frequencies and the ion positions, we require a high stability of the dc voltage supply. Although the voltages at the DAC board were

59

4. Experimental Realization of Ion Trapping and Transport
measured to be stable up to 1 µV for a voltage range of 0–2.5 V, two adverse eﬀects were observed when analyzing the output of the ampliﬁer boards: We found considerable cross-talk between diﬀerent channels of the ampliﬁer board. While keeping the voltage at one port constant, changing the voltages at other channels resulted in voltage changes at the ﬁrst port in the order of up to 100 mV. Moreover, we detected low-frequency drifts in the output voltages in the order of 0.1 mV in the timescale of -
a few Hz.
In order to quantify the eﬀects of noise or ﬂuctuations on the dc electrodes due to bad ampliﬁers, we estimated the variation of the trapping frequencies in our planar trap due to a noisy dc voltage input. A uniformly distributed random noise oﬀset between ±1 mV was added to all simulated trapping voltages and subsequently increased up to a factor of 10. These noisy voltages were then fed into the MATLAB post-processing algorithm and secular trapping frequencies were calculated by performing a pol-
ynomial ﬁt around the minima of the secular potential. The obtained frequencies for noisy dc voltages were compared to the unperturbed simulations. In Fig. 4.5b the absolute value of the diﬀerence between perturbed and unperturbed frequencies are displayed for various noise magnitudes. To obtain this ﬁgure, the calculation was averaged 10000 times.
We traced out the cross-talk issue to a design error of the ampliﬁcation board. Instead of providing an individual voltage reference for all op-amps, our design only consisted of a single voltage reference for all channels (25 op-amps). Diﬀerent voltage outputs changed the resistances of the op-amps. This increased the current that was drawn from the voltage reference. However, the single voltage reference could not deliver this increased currents for all channels. This resulted in a voltage chang-
e depending on the individual channel output voltages, i.e. cross-talk.
Since we only observed minor voltage ﬂuctuations at the output of the DAC-board, we decided to employ an only DAC-based solution without the need of an additional ampliﬁcation board. This is planned to be achieved by DACs allowing an output voltage range of ±10 V rather than 0-2.5 V and requiring diﬀerential ampliﬁcation.
Rf source
A radio frequency (rf) ﬁeld is applied to the rf electrodes of the trap via a vacuum feed through at the bottom of the vacuum vessel (next to the oven current supply), see Fig. 4.6a. The signal is created by a Rohde & Schwarz SMB 100A signal generator with an limited output rf amplitude of 1.77 V. In order to amplify the rf signal to an amplitude of 100-200 V, a helical resonator provides the corresponding voltage step-up. Helical resonators consist of a winded solenoid shielded by a conducting en-
closure, see Fig. 4.6b [70]. The length of the solenoid corresponds to the λ/4, hence resembling a classical coaxial resonator. One end of the solenoid is grounded to the shield while the
60

4.6. Towards trapping ions with a monolithic surface trap

Rohde & Schwarz SMB 100A
Signal Generator

BNC

Rohde & Schwarz Power Meter

R

T

(a)
copper solenoid to chamber

Helical Resonator

Tektronix TDS 1002 Oscilloscope

Capacitive divider

UHV Chamber

Insertion point

Voltage

rf input

GND

grounded shielding
(b)

Solenoid length
(c)

Figure 4.6. – Schematics of our radio frequency setup (a). A helical rf resonator, which is used for
signal ampiﬁcation (b). Voltage across the solenoid depending on the solenoid length. By connecting an rf signal to a given insertion point on the solenoid, the voltage is ampliﬁed according this plot (c). Illustration of the helical resonator after [70].

other is connected to the trap. Ampliﬁcation is achieved by connecting the output of the rf generator to an insertion point on the helix, see Fig. 4.6c. This point is found experimentally by maximizing the step-up.
The optimal rf frequency was found by minimizing the reﬂection measured between the signal generator and the resonator with a Rohde & Schwarz Bidirectional Power Meter NAS. In addition, the corresponding rf amplitude was measured by monitoring the peakto-peak voltage of the signal on a Tektronix TDS 1002 Digital Storage Oscilloscope. This was achieved by splitting the rf signal after the resonator with a capactive voltage divider.

4.6. Towards trapping ions with a monolithic surface trap
In the following, we will describe the work that was done towards trapping ions with the planar surface trap discussed in the previous chapter. Measuring trapping frequencies

61

4. Experimental Realization of Ion Trapping and Transport

a)

optical fiber

b)

collimator to Ti-Sub
pump

optical fiber

866 nm

collimator 397 nm

mirror objective

CCD Slit Filter

PMT

Filter xyz-stage

detection box

trap

to Ion pump

trap oven

collimator

UHV-chamber

optical table

Figure 4.7. – Simpliﬁed illustration of the UHV chamber and laser access to the trap. Top view (a)
and side view with ﬂuorescence detection path (b). Red and blue arrows denote to the beam paths of the red- and blue lasers, respectively.

and comparing them to our theoretical results would have provided a benchmark for our simulation.

Optical access to the UHV chamber
After baking the UHV vessel for approximately 5 weeks at 150◦C, a pressure of ≈ 3·10−11 mbar was reached. Then, the optics and lasers required for photoionisation, cooling and detection were set up according to Fig. 4.7. Fig. 4.8a shows a photograph of the vacuum vessel and the trap inside. 7 viewports allow for the access of the respective laser beams along the trap. Since all beams are coupled into single-mode optical ﬁbers, we employ collimator objectives to collimate the beam after coupling ou-
t of the ﬁber. All blue (i.e. 397 nm, 422 nm) and red (732 nm, 832 nm, 866 nm) lasers were coupled into the same ﬁbers, reducing the number of collimators to two. The collimators are mounted on xyz-translation stages, allowing for alignment of the beam parallel to the trapping surface. The translation stages can be controlled remotely via a measurement PC, allowing for ﬁne adjustment of the position of the laser beams during trapping.
Fluorescence is detected by collecting the light with a NA = 0.27 microscope objective and directing the signal with a 2-inch mirror into a photomultiplier-tube and a Andor Luca EMCCD camera. Both detectors were placed in a box that can be sealed to reduce stray light. Access is given by removing the top- and side covers. In addition, a black cardboard-tube is placed between the mirror and the opening of the detection box. For simultaneous detection with the PMT and the CCD camera, a pellicle beam-
 splitter splits the light into both respective directions. Threads on both CCD and PMT allow for the attachment of optical ﬁlters. PMT and CCD signals are recorded with a PC. To adjust the focus of the objective onto the trap and align the trapping region with

62

4.6. Towards trapping ions with a monolithic surface trap
the slit in front of the PMT, we illuminated the trap with a halogen lamp. By holding a paper sheet in the light path, we could see a clear picture of the trap and adjust the vertical and horizontal alignment. While imaging the trap with the CCD camera and displaying it on the computer, we tuned the focus of the objective. To align the beams parallel to the trap at exactly the trapping height of 80 µm, we grazed the trap with the beams. To this end, we varied the angle and height of the laser beam-
 collimators until no scatter on the electrodes could be detected any more. In order to maximize the photoionization cross section, we increased the laser beam waists to a diameter of roughly the trap slit width.
After aligning the optics, we connected the calcium oven to an Agilent E3614A dc power supply in order to evaporate neutral calcium and direct the beam through the slit of the trap. Switching on the photoionization lasers and recording signals with the PMT, we could observe neutral atom ﬂuorescence with a peak intensity of 2000 kcounts at a current of 4 A. Second step ﬂuorescence was observed by illuminating the trap with the 732 nm beam. While scanning the 1S0 ↔1 P1 transition by approximately 10-
0 – 200 MHz, a clear dip in the ﬂuorescence peak was visible, proving the excitation to the 1D2 state.
Trapping ions
After creating ions with the PI lasers, we directed the Doppler-cooling laser in a 45 degree angle to the slit with the 397 nm laser and illuminated the direction along the slit with the 866 nm beam to achieve repumping into the Doppler cooling cycle, see Fig. 4.7a. Although we attempted trapping at two distinct positions, i.e. in the center of the trap between electrodes 10 and 11 and at the left side of the trap at electrode 4 (see Fig. 3.2), ions could neither be detected in the CCD camera nor -
with the PMT. Due to a lack of benchmarks for the calculated trapping voltages, we doubted the accuracy of our theoretical results. Since the trap had successfully been tested by the manufacturer Sandia National Laboratories before with a set of voltages that was obtained in an independent simulation, we tried to apply their voltages. However, we also failed to trap with those voltages. As a result, we vented the chamber under argon reﬂow (see section 4.1) to verify the connection of all dc electr-
odes with the voltage supply. We also examined the trap surface with a microscope. By gently touching the trap surface with a wire-bond wire, we found out that electrodes 2, 5 and 8 were not connected, and two electrodes were shorted by a piece of metal. We suspect that the reason for these problems arose from the fact that the trap had previously been repaired: During the shipment from Sandia Labs, the connections between the trap electrodes and the bonding pads were disrupted. To ﬁx those damage-
s, corresponding connections were glued with conducting silver epoxy. Presumably during bake-out, some of the repaired connections broke. The short could be due to silver epoxy that had erupted and hit
63

4. Experimental Realization of Ion Trapping and Transport the trap surface. In the following, the damaged trap was removed and replaced with a second copy we had received from Sandia Labs. To check the connections, we also measured the resistances between the vacuum feed through D-SUB connectors and the trap electrode surface. However, resistances between 100 Ω and 200 Ω instead of expected 1 − 10 Ω suggested connection problems for this trap as well. Trapping was not possible with this trap eithe-
r. Since the infrastructure (oven position etc.) in our UHV chamber was prepared to match the Eurotrap and waiting for traps fabricated by our own group would have delayed the project signiﬁcantly, we decided to obtain a third new copy from Sandia. In addition, other groups (e.g. the Oxford Ion Trapping Group) had no troubles and could trap easily. The shorted trap was sent back to Sandia for inspection and exchanged for a new copy. Unfortunately, the trap was not delivered by the time this manusc-
ript was prepared.
64

4.6. Towards trapping ions with a monolithic surface trap

Mirror Objective
UHV Chamber
Trap Ion pump

Cardboard tube
Collimator
(a)

(b)
Figure 4.8. – Photographs of the experimental setup (a) and detailed view onto the trap (b). The
trap is mounted to a Kyocera 100 pin ceramic pin grid array (CPGA). This packaging allows for easy removal and replacement of the trap inside the vacuum apparatus. Electric connection to the dc and rf supplies is given by D-SUBs vacuum feed throughs. Laser access is provided by 7 viewports (three on each side and one on the top for detection). The alignment of the apparatus in (a) corresponds to the schematic illustrated in Fig. 4.7b.
65

5. Conclusion and Outlook
In this thesis, the main principles for simulating a microfabricated surface trap using the boundary element method were elucidated. An algorithm employing a expansion of the potential in spherical harmonics for obtaining dc trapping voltages was explained. Corresponding voltages for trapping at ﬁxed positions and transporting calcium ions in a monolithic silicon trap were calculated. Transport speed limitations due to the heating of the ion by shifting the dc potential well were discussed. We cou-
ld show, that besides trapping a single ion, two-ion trapping can be achieved. We analyzed the trajectories of the trapping voltages during transport and ﬁtted trapping frequencies in a harmonic approximation. Moreover, trapping depths throughout transport were examined. In a near-adiabatic limit, transport within ≈ 100 µs following a sine-type transport function has been shown to have no eﬀects on heating the ions. Although no experimental veriﬁcation for the simulated trapping frequencies could -
be given, a typical experimental setup for trapping ions in a planar trap was elucidated. Experimental control over dc electrodes was achieved by employing FPGA-controlled digital-to-analog-converters. Manipulation of the dc voltages for shuttling was realized by interfacing the FPGA via a microcontroller and the serial port of a computer. The transport of ions is an essential step towards the coupling of the motional states of two ions via a ﬂoating wire [71]. In order to transfer information bet-
ween the ions, shuttling to well-deﬁned positions underneath the wire is essential. For generic ion trap quantum computers, qubit transport will be vital to bring ions together in order to achieve coupling and shuttle from loading- to readout zones to perform quantum logical operations [1]. In future ion trap designs, rf- instead of dc electrodes could be used for shuttling, allowing to reduce micromotion-induced heating during transport through structures incorporating cross-junctions [72].
67

Acknowledgements
I want to thank Hartmut Haeﬀner for providing me the opportunity to carry out my Master’s thesis at his group at UC Berkeley. Without his great eﬀorts and support I would have never been able to grasp a look inside the ion trapping community and work at a so scientiﬁcally regarded university as the UC Berkeley. I want to greatly acknowledge the support of Andreas Wallraﬀ for being my advisor at ETH Zurich and for all his support during my undergraduate studies. Moreover, I want to thank all member-
s of the CCT subgroup, especially Nikos: for his great supervision, reading my thesis, valuable inputs and hints and for allowing me to use his MATLAB-code - without it, this work could never have been completed; Soenke, for assisting me with programming of electronics and soldering; and Sankar for introducing me to the experimental quest of trapping ions. Last but not least thanks to Nicolai for the nice dinners during our cooking-rotation and, of course - for sharing his great LaTeX title page w-
ith me!
69

Bibliography
[1] Kielpinski, D., Monroe, C. & Wineland, D. J. Architecture for a large-scale iontrap quantum computer. Nature 417, 709–711 (2002). URL http://dx.doi.org/ 10.1038/nature00784.
[2] Singer, K. et al. Colloquium: Trapped ions as quantum bits: Essential numerical tools. Rev. Mod. Phys. 82, 2609–2632 (2010).
[3] Landau, L. & Lifschitz, E. Mechanik. No. 1 in Lehrbuch der theoretischen Physik (Akademie-Verlag, Berlin, 1976), 9 edn.
[4] Gerlich, D. Inhomogeneous RF Fields: A Versatile Tool for the Study of Processes with Slow Ions, vol. 82, 1–176 (John Wiley Sons, Inc., 2007). URL http://dx. doi.org/10.1002/9780470141397.ch1.
[5] Reichle, R. et al. Transport dynamics of single ions in segmented microstructured paul trap arrays. Fortschr. Phys. 54, 666–685 (2006).
[6] Schulz, S., Poschinger, U., Singer, K. & Schmidt-Kaler, F. Optimization of segmented linear paul traps and transport of stored particles. Fortschr. Phys. 54, 648–665 (2006).
[7] Feynman, R. Simulating physics with computers. International journal of theoretical physics 21, 467–488 (1982).
[8] Shor, P. Algorithms for quantum computation: Discrete log and factoring. In Proceedings of the 35th Annual Symposium on Foundations of Computer Science, 124–134 (Citeseer, 1994).
[9] Deutsch, D. & Jozsa, R. Rapid solution of problems by quantum computation. Proceedings of the Royal Society of London. Series A: Mathematical and Physical Sciences 439, 553–558 (1992). http://rspa.royalsocietypublishing.org/ content/439/1907/553.full.pdf+html.
[10] Grover, L. K. A fast quantum mechanical algorithm for database search. In Proceedings of the twenty-eighth annual ACM symposium on Theory of computing, STOC ’96, 212–219 (ACM, New York, NY, USA, 1996). URL http://doi.acm. org/10.1145/237814.237866.
[11] Nielsen, M. A. & Chuang, I. L. Quantum Computation and Quantum Information
I

Bibliography
(Cambridge University Press, 2000), 1 edn. URL http://www.amazon.com/exec/ obidos/redirect?tag=citeulike07-20&path=ASIN/0521635039. [12] Aspect, A., Grangier, P. & Roger, G. Experimental realization of einsteinpodolsky-rosen-bohm gedankenexperiment: A new violation of bell’s inequalities. Physical Review Letters 49 (1982). URL http://link.aps.org/doi/10.1103/ PhysRevLett.49.91. [13] Bennett, C. H. & Wiesner, S. J. Communication via one- and two-particle operators on einstein-podolsky-rosen states.-
 Phys. Rev. Lett. 69, 2881–2884 (1992). [14] Riebe, M. et al. Deterministic quantum teleportation with atoms. Nature 429, 734–737 (2008). [15] Bouwmeester, D. et al. Experimental quantum teleportation. Nature 390, 575–579 (1997). [16] Ekert, A. K. Quantum cryptography based on bell’s theorem. Phys. Rev. Lett. 67, 661–663 (1991). [17] H¨aﬀner, H., Roos, C. & Blatt, R. Quantum computing with trapped ions. Physics Reports 469, 155 – 203 (2008). URL http://www.sciencedirect.com/science/ article/B6TVP--
4TJTX51-1/2/20e335f01bd298a35ec14f54a234ea19. [18] Wallraﬀ, A. et al. Strong coupling of a single photon to a superconducting qubit using circuit quantum electrodynamics. Nature 431, 162 (2004). [19] Loss, D. & DiVincenzo, D. P. Quantum computation with quantum dots. Phys. Rev. A 57, 120–126 (1998). [20] Imamoglu, A., A et al. Quantum information processing using quantum dot spins and cavity qed. Phys. Rev. Lett. 83, 4204–4207 (1999). [21] Deutsch, I., Brennen, G. & Jessen, P. Quantum computing wi-
th neutral atoms in an optical lattice. Fortschritte der Physik 48, 925–943 (2000). [22] Brennen, G. K., Caves, C. M., Jessen, P. S. & Deutsch, I. H. Quantum logic gates in optical lattices. Phys. Rev. Lett. 82, 1060–1063 (1999). [23] Brune, M., Haroche, S., Lefevre, V., Raimond, J. M. & Zagury, N. Quantum nondemolition measurement of small photon numbers by rydberg-atom phase-sensitive detection. Phys. Rev. Lett. 65, 976–979 (1990). [24] Saﬀman, M., Walker, T. G. & Mølmer, K. Quantum information -
with rydberg atoms. Rev. Mod. Phys. 82, 2313–2363 (2010). [25] Vandersypen, L. M. K. et al. Experimental realization of shor’s quantum factoring algorithm using nuclear magnetic resonance. Nature 414, 883–887 (2001). URL http://dx.doi.org/10.1038/414883a.
II

Bibliography
[26] DiVincenzo, D. Dogma and heresy in quantum computing 1, 1–6. [27] Monz, T. et al. Coherence of large-scale entanglement. ArXiv e-prints (2010).
1009.6126. [28] Monz, T. et al. Realization of the quantum toﬀoli gate with trapped ions. Phys.
Rev. Lett. 102, 040501 (2009). [29] Kreuter, A. et al. Experimental and theoretical study of the 3d2d –level lifetimes
of 40ca+. Phys. Rev. A 71, 032504 (2005). [30] Bollinger, J., Heinzen, D., Itano, W., Gilbert, S. & Wineland, D. A 303-MHz fre-
quency standard based on trapped Be+ ions. In Precision Electromagnetic Measurements, 1990. CPEM’90 Digest., Conference on, 264–265 (IEEE, 1991). [31] Langer, C. et al. Long-lived qubit memory using atomic ions. Phys. Rev. Lett. 95, 060502 (2005). [32] Wineland, D. et al. Experimental issues in coherent quantum-state manipulation of trapped atomic ions. J. Res. NIST 103, 259–328 (1998). [33] Paul, W. Electromagnetic Traps for Charged and Neutral Particles. Nobel Lectures, Physics 1981-1990 (World -
Scientiﬁc Publishing Co., Singapore, 1993). [34] Thompson, R., Harmon, T. & Ball, M. The rotating-saddle trap: a mechanical analogy to rf-electric-quadrupole ion trapping? Canadian Journal of Physics 80, 1433–1448(16) (December 2002). URL http://www.ingentaconnect.com/ content/nrc/cjp/2002/00000080/00000012/art00001. [35] Ghosh, P. K. Ion Traps, vol. 90 of International Series of Monographs on Physics (Oxford University Press, 1995). [36] Leibfried, D., Blatt, R., Monroe, C. & Wineland, D. Quantum-
 dynamics of single trapped ions. Reviews of Modern Physics 75, 281–324 (2003). [37] Abramowitz, M. & Stegun, I. Handbook of Mathematical Functions with Formulas, Graphs, and Mathematical Tables (Dover, New York, 1972). [38] Raizen, M. Ionic crystals in a linear paul trap. Physical Review A 45, 6493–6501 (1992). [39] Drewsen, M. & Brøner, A. Harmonic linear paul trap: Stability diagram and eﬀective potentials. Physical Review A 62 (2000). [40] Berkeland, D. J., Miller, J. D., Bergquist, J. C., Ita-
no, W. M. & Wineland, D. J. Minimization of ion micromotion in a paul trap. J. Appl. Phys. 83, 5025–5033 (1997). [41] Seidelin, S. et al. Microfabricated surface-electrode ion trap for scalable quantum information processing. Physical Review Letters 96, 253003 (2006).
III

Bibliography
[42] Allcock, D. T. C. et al. Implementation of a symmetric surface-electrode ion trap with ﬁeld compensation using a modulated raman eﬀect. New Journal of Physics 12, 053026 (2010). URL http://stacks.iop.org/1367-2630/12/i=5/a=053026.
[43] Stick, D. et al. Demonstration of a microfabricated surface electrode ion trap (2010). arXiv:1008.0990.
[44] Haeﬀner, H. Quantum computing with trapped ions. Journal of the Indian Institute of Science 89 (2009).
[45] Daniilidis, N. et al. Fabrication and heating rate study of microscopic surface electrode ion traps. New Journal of Physics 13, 013032 (2011). URL http: //stacks.iop.org/1367-2630/13/i=1/a=013032.
[46] Cirac, J. I. & Zoller, P. Quantum computations with cold trapped ions. Phys. Rev. Lett. 74, 4091–4094 (1995).
[47] Roos, C. et al. Quantum state engineering on an optical transition and decoherence in a paul trap. Phys. Rev. Lett. 83, 4713–4716 (1999).
[48] Labaziewicz, J. et al. Suppression of heating rates in cryogenic surface-electrode ion traps. Phys. Rev. Lett. 100, 013001 (2008).
[49] Wang, S. X., Labaziewicz, J., Ge, Y., Shewmon, R. & Chuang, I. L. Demonstration of a quantum logic gate in a cryogenic surface-electrode ion trap. Phys. Rev. A 81, 062332 (2010).
[50] Chiaverini, J. et al. Surface-electrode architecture for ion-trap quantum information processing. Quantum Information and Computation 5, 419–439 (2005).
[51] Jackson, J. D. Classical Electrodynamics (Wiley, 1998), third edn. URL http://www.amazon.com/exec/obidos/redirect?tag=citeulike07-20&path= ASIN/047130932X.
[52] Morse, P. & Feshbach, H. Methods of Theoretical Physics Bind 1 (McGraw-Hill, 1953). URL http://books.google.com/books?id=sSRpQwAACAAJ.
[53] Kielpinski, D. et al. Sympathetic cooling of trapped ions for quantum logic. Physical Review A 61, 32310–32310 (2000).
[54] Larson, D. J., Bergquist, J. C., Bollinger, J. J., Itano, W. M. & Wineland, D. J. Sympathetic cooling of trapped ions: A laser-cooled two-species nonneutral ion plasma. Phys. Rev. Lett. 57, 70–73 (1986).
[55] Huber, G. et al. Transport of ions in a segmented linear paul trap in printedcircuit-board technology. New Journal of Physics 10, 013004 (2008). URL http: //stacks.iop.org/1367-2630/10/i=1/a=013004.
[56] Bowler, R. & Wineland, D. Private communication (2011).
IV

Bibliography
[57] Pozrikidis, C. Boundary-element methods for Laplace’s equation in three dimensions, vol. null (CRC Press, 2002). URL http://dx.doi.org/10.1201/ 9781420035254.ch5.
[58] Savard, T. A., O’Hara, K. M. & Thomas, J. E. Laser-noise-induced heating in far-oﬀ resonance optical traps. Phys. Rev. A 56, R1095–R1098 (1997).
[59] Reiher, M. Vorlesungsskript quantum chemistry. ETH Zurich (2010). [60] Harlander, M., Lechner, R., Brownnutt, M., Blatt, R. & Haensel, W. Trapped-ion
antennae for the transmission of quantum information. Nature (2011). [61] Brown, K. et al. Coupled quantized mechanical oscillators. Nature (2011). [62] O’Hanlon, J. F. A User’s Guide to Vacuum Technology (John Wiley & Sons, Inc.,
Hoboken, New Jersey, 2003). [63] Gulde, S. et al. Simple and eﬃcient photo-ionization loading of ions for
precision ion-trapping experiments. Applied Physics B: Lasers and Optics 73, 861–863 (2001). URL http://dx.doi.org/10.1007/s003400100749. 10.1007/s003400100749. [64] Rotter, D. Photoionisation von kalzium. Diploma thesis, Universitaet Innsbruck (2003). [65] Corliss, C. & Sugar, J. Atomic energy levels of the iron period elements: potassium through nickel. J. Phys. Chem. Ref. Data 14 (1985). [66] Phillips, W. Nobel lecture: Laser cooling and trapping of neutral atoms. Rev. Mod. Phys. 70, 721–741 (1-
998). [67] Na¨gerl, H. C. et al. Investigating a qubit candidate: Spectroscopy on the s1/2 to d5/2 transition of a trapped calcium ion in a linear paul trap. Phys. Rev. A 61, 023405 (2000). [68] Drever, R. et al. Laser phase and frequency stabilization using an optical resonator. Applied Physics B: Lasers and Optics 31, 97–105 (1983). [69] Black, E. An introduction to pound–drever–hall laser frequency stabilization. American Journal of Physics 69, 79 (2001). [70] Zverev, A. Handbook of ﬁlter synth-
esis (Wiley New York, 1967). [71] Daniilidis, N., Lee, T., Clark, R., Narayanan, S. & Ha¨ﬀner, H. Wiring up trapped ions to study aspects of quantum information. Journal of Physics B: Atomic, Molecular and Optical Physics 42, 154012 (2009). URL http://stacks.iop. org/0953-4075/42/i=15/a=154012. [72] Karin, T. et al. Transporting particles in three dimensions via adjustable radio frequency ﬁelds and its application to scalable quantum information processing.
V

Bibliography ArXiv e-prints (2010). 1011.6116.
[73] Davey, K. & Hinduja, S. Analytical integration of linear three-dimensional triangular elements in bem. Applied Mathematical Modelling 13, 450–461 (1989). URL http://www.sciencedirect.com/science/article/B6TYC-45D9XBN-G8/ 2/ba3e8e1778c7ac3234fb6f4e8624e929.
[74] Greengard, L. & Rokhlin, V. A fast algorithm for particle simulations. Journal of Computational Physics 135, 280–292 (1997). URL http://www.sciencedirect.com/science/article/B6WHY-45S92D8-43/2/ 2244fcff6eb3fa66f4d601d09c1de53d.
VI

A. Appendix

A.1. Mathematical Framework of BEM

To ﬁnd the solution to Laplace’s equality, we start with Green’s second identity [51],

(φ∆ψ − ψ∆φ) d3x =

∂ψ ∂φ φ − ψ dA,
∂n ∂n

V

S

(A.1)

where ∂φ/∂n is the normal derivative, i.e. ∂φ/∂n = ∇φ·n. We then set ψ = G(x, xj) = −1/|x − xj|, i.e. Green’s function in three dimensions and φ(x) = Φ(x). Then, plugging in ∆Φ = 0 and using the identity

∆G(x, xj) = −4πδ(x − xj)

(A.2)

yields

Φ(xj) =

Φ(x) ∂G(x, xj) ∂n

−

G(x,

∂Φ(x) xj) ∂n

dA

S

N
=

Φ(x) ∂G(x, xj) ∂n

−

G(x,

∂Φ(x) xj) ∂n

dA

i Si

(A.3)

where the second equality holds since for applications of BEM we have to discretize the boundary surface S into N triangular shaped surface elements. One has to do some careful considerations now: If the point xj approaches the boundary surface element Si, the ﬁrst term of the above expression will give rise to discontinuities and has to be written as a principle value integral [57]. That means,

PV

lim Φ(x) ∂G(x, xj) dA =

xj →Si

∂n

Φ(x)

∂G(x, ∂n

xj )

dA

+

Φ(xj )

1 2

.

Si

Si

(A.4)

The second term of Eq.(A.4) arises if the integral is evaluated exactly at the boundary surface Si. This can be directly seen by using the divergence theorem and using identities for Green’s function. Plugging in Eq. (A.4) into Eq. (A.3) then gives us the

VII

A. Appendix

expression of the potential for a point xj that lies on the boundary surface Si:

Φ(xj) = 2

N

 PV  Φ(x) ∂G(x, xj) dA −
∂n

 ∂Φ(x) G(x, xj) ∂n dA .

i

Si

Si

(A.5)

We then assume that both the potential Φ(x) and normal derivative of the potential ∂Φ(x)/∂n are constant for each boundary element and we write them in front of the integral. This approximation is valid since we deal with metallic surfaces that are either kept at constant potential or have a constant surface charge density. This assumption is called local element approximation and is the simplest implementation of the BEM [57]. By substituting

it then follows directly that

PV

βij =

∂G(x, xj) dA ∂n

Si

αij = G(x, xj) dA
Si

(A.6) (A.7)

Φ(xj) = 2

N

Φ(xi)βij − 2

N

∂Φ(xi) ∂n

αij

.

i

i

(A.8)

Solving the above equation gives us the potential at a point that lies on a boundary surface in the local element approximation. In general, however, we are not interested in the potential at the electrode surfaces but rather at some point in space that is enclosed by those surfaces. To this end, one can go back to Eq. (A.3), again use the local element approximation and obtain:

Φ(x) =

N

Φ(xi)βij −

N

∂

Φ(xi) ∂n

αij

,

i

i

(A.9)

which is essentially the same as Eq. (A.8) without the factor 2. For the sake of clarity, the variable xj has been exchanged with x to distinguish this potential from the potential at the surface Si. In practice one will now try to solve Eq. (A.9) to obtain some potential for a given electrode conﬁguration. The coeﬃcients βij and αij can be calculated analytically and can be looked up in [2], [73]. To get a set of Φ(xi) and ∂Φ(xi)/∂n one needs to solve Eq. (A.8) algebraically. To this end, we reca-
st the expression in a

VIII

A.1. Mathematical Framework of BEM

matrix form setting Φ(xj) = Φj:

1

∂Φ

(βij − 2 δij)Φi = αij

, ∂n i

(A.10)

with δij the Kronecker delta. For a given potential at a surface electrode Φ(xi) one can then calculate the surface charge density ∂Φ(xi)/∂n and vice versa. This means, the main diﬃculties in solving potentials with the BEM arise from a matrix inversion problem as stated in Eq. (A.10).
To sum up, one can calculate surface charge densities σi for given potentials Φi on discretized boundary surfaces according to Eq. (A.10), which states a matrix inversion problem. Finally, the free space potential is obtained by summing up all contributions from potentials and surface charge densities according to Eq. (A.9). Matrix inversion using the Gauss-Jordan elimination typically scale with O(n3) for n × n matrices. Employing the fast multipole method for the matrix inversion problem [74] de-
creases the computational complexity to O(n). However, a detailed explanation of the FFM is beyond the scope of this thesis.

IX

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:43.338Z
- **Text Length:** 145741 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
