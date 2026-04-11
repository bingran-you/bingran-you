# PDF Document: (Multipole Potentials - 2011 Innsbruck) Classical control of an ion in a  surface trap (PhD Thesis).pdf

**File Path:** (Multipole Potentials - 2011 Innsbruck) Classical control of an ion in a  surface trap (PhD Thesis).pdf

**Processed Date:** 2026-02-10T18:18:46.367Z

**File Size:** 6060.07 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 21

**Collection:** Ion Trap

---

## Extracted Text Content

Classical control of an ion in a surface trap
A diploma thesis submitted to the Faculty for Mathematics, Computer Science and
Physics University of Innsbruck
In partial fulﬁlment of the requirements for the degree of Master of Natural Science Magister Rerum Naturalium
by
Adam Pauli
Supervisor: Prof. Dr. Rainer Blatt Department of Experimental Physics
July 2011

Abstract
This thesis reports on a method developed to improve the control over an ion’s classical motion in a surface trap. The method consists of a numerical simulation of the electric potential of the electrodes, a expansion of this potential in spherical harmonics and a calculation of a speciﬁc voltage set. If this voltage set is applied to the segmented DC electrodes of a surface trap, the generated electric potential is shaped as the potential of a multipole.
In the the second part of this thesis the experimental setup is described which was used to verify the presented method. Finally the results of these experiments are presented and compared with simulations.

Contents

1. Introduction

1

2. Paul traps

3

2.1. Trapping theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3

2.1.1. Pseudopotential approximation . . . . . . . . . . . . . . . . 4

2.1.2. Ideal implementation . . . . . . . . . . . . . . . . . . . . . . 4

2.1.3. Motion of the ions and stability . . . . . . . . . . . . . . . . 5

2.1.4. Deviations from the ideal trap . . . . . . . . . . . . . . . . 6

2.2. Surface-trap theory . . . . . . . . . . . . . . . . . . . . . . . . . . . 8

2.3. Segmented traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10

2.4. Controlling the ion’s motion . . . . . . . . . . . . . . . . . . . . . . 10

2.4.1. Radial position . . . . . . . . . . . . . . . . . . . . . . . . . 11

2.4.2. Axial position . . . . . . . . . . . . . . . . . . . . . . . . . . 11

2.4.3. Trap frequencies . . . . . . . . . . . . . . . . . . . . . . . . 12

3. Computer simulations

13

3.1. Statement of the problem . . . . . . . . . . . . . . . . . . . . . . . 13

3.2. Numerical methods . . . . . . . . . . . . . . . . . . . . . . . . . . . 14

3.2.1. Comparison FEM and BEM . . . . . . . . . . . . . . . . . . 15

3.3. Trap simulations . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16

3.4. Trap control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17

3.4.1. Spherical multipole expansion . . . . . . . . . . . . . . . . . 18

3.4.2. Creating multipole potentials . . . . . . . . . . . . . . . . . 21

4. Experimental implementation

23

4.1. Experimental setup . . . . . . . . . . . . . . . . . . . . . . . . . . . 23

4.1.1. Surface trap Bastille . . . . . . . . . . . . . . . . . . . . . . 23

4.1.2. Electronics . . . . . . . . . . . . . . . . . . . . . . . . . . . 24

4.1.3. Vacuum chamber . . . . . . . . . . . . . . . . . . . . . . . . 26

4.1.4. Laser systems . . . . . . . . . . . . . . . . . . . . . . . . . . 28

4.1.5. Optical setup . . . . . . . . . . . . . . . . . . . . . . . . . . 29

4.1.6. Imaging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31

4.1.7. Loading ions . . . . . . . . . . . . . . . . . . . . . . . . . . 31

4.2. Implementation in TrICS . . . . . . . . . . . . . . . . . . . . . . . 33

4.3. Measurement methods . . . . . . . . . . . . . . . . . . . . . . . . . 34

4.3.1. Measurement of x and z displacement . . . . . . . . . . . . 34

4.3.2. Measurement of y displacement . . . . . . . . . . . . . . . . 35

4.3.3. Measurement of trap frequencies . . . . . . . . . . . . . . . 36

4.4. Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37

i

ii

Contents

5. Results

38

5.1. Simulation results . . . . . . . . . . . . . . . . . . . . . . . . . . . 38

5.1.1. Electric-potential analysis . . . . . . . . . . . . . . . . . . . 38

5.1.2. Trap control voltages at trap center . . . . . . . . . . . . . 39

5.1.3. Trap control voltages dependent on z position . . . . . . . . 48

5.2. Experimental results . . . . . . . . . . . . . . . . . . . . . . . . . . 49

5.2.1. Dipoles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49

5.2.2. Quadrupole . . . . . . . . . . . . . . . . . . . . . . . . . . . 51

5.3. Discussion of the results . . . . . . . . . . . . . . . . . . . . . . . . 52

6. Conclusion and outlook

54

Appendices

A. Trap control voltages

57

B. Source code

59

B.1. Trap-control voltage calculation . . . . . . . . . . . . . . . . . . . . 59

B.2. Implementation in TrICS . . . . . . . . . . . . . . . . . . . . . . . 64

Bibliography

68

List of Figures
2.1. Linear paul trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 2.2. Stability diagram . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 2.3. Common implementation of linear Paul traps . . . . . . . . . . . . 6 2.4. Non-ideal traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 2.5. Surface trap in the ﬁve-wire design . . . . . . . . . . . . . . . . . . 9
3.1. Discretization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15 3.2. Bastille: Electrode designations and subdivisions . . . . . . . . . . 16 3.3. RF pseudopotential . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 3.4. Potential base functions of the DC electrodes . . . . . . . . . . . . 18 3.5. Spherical harmonics . . . . . . . . . . . . . . . . . . . . . . . . . . 20 3.6. Multipole ﬁeld lines . . . . . . . . . . . . . . . . . . . . . . . . . . 21
4.1. Bastille: Photograph and trap dimensions . . . . . . . . . . . . . . 24 4.2. Trap depth . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 4.3. DC supply circuit . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26 4.4. Schematic of the vacuum chamber . . . . . . . . . . . . . . . . . . 27 4.5. Schematic energy-level diagram . . . . . . . . . . . . . . . . . . . . 28 4.6. Optical setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30 4.7. Transmission charact-
eristics of the bandpass ﬁlters . . . . . . . . . 31 4.8. Resonant atomic ﬂuorescence . . . . . . . . . . . . . . . . . . . . . 32 4.9. The ﬁrst trapped ions of this project . . . . . . . . . . . . . . . . . 33 4.10. Calibration of the CCD image . . . . . . . . . . . . . . . . . . . . . 35 4.11. Trap frequency measurement . . . . . . . . . . . . . . . . . . . . . 37
5.1. Radial potential . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38 5.2. Axial potential . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39 5.3. Resulting multipole DC potentials: Y1,1 . . . . . . . . . . . . . . . 40 5.4. Resulting multipole DC potentials: Y1,−1 . . . . . . . . . . . . . . . 41 5.5. Resulting multipole DC potentials: Y1,0 . . . . . . . . . . . . . . . 42 5.6. Resulting multipole DC potentials: Y2,2 . . . . . . . . . . . . . . . 43 5.7. Resulting multipole-
 DC potentials: Y2,0 . . . . . . . . . . . . . . . 44 5.8. Resulting multipole DC potentials: Y2,−2 . . . . . . . . . . . . . . . 45 5.9. Resulting multipole DC potentials: Y2,−1 . . . . . . . . . . . . . . . 46 5.10. Resulting multipole DC potentials: Y2,1 . . . . . . . . . . . . . . . 47 5.11. Voltages needed to create an x-dipole for various positions on the
z-axis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48 5.12. x-dipole . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49 5.13. y-dipole . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50 5.14. z-dipole . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50 5.15. Trap frequency measurement results . . . . . . . . . . . . . . . . . 51
iii

List of Tables
4.1. Trapping parameters . . . . . . . . . . . . . . . . . . . . . . . . . . 33 5.1. Trapping voltages . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49 A.1. Voltages needed to create Y1,1 . . . . . . . . . . . . . . . . . . . . . 57 A.2. Voltages needed to create Y1,−1 . . . . . . . . . . . . . . . . . . . . 57 A.3. Voltages needed to create Y1,0 . . . . . . . . . . . . . . . . . . . . . 57 A.4. Voltages needed to create Y2,2 . . . . . . . . . . . . . . . . . . . . . 57 A.5. Voltages nee-
ded to create Y2,0 . . . . . . . . . . . . . . . . . . . . . 58 A.6. Voltages needed to create Y2,−2 . . . . . . . . . . . . . . . . . . . . 58 A.7. Voltages needed to create Y2,−1 . . . . . . . . . . . . . . . . . . . . 58 A.8. Voltages needed to create Y2,1 . . . . . . . . . . . . . . . . . . . . . 58
iv

1. Introduction
The development of quantum mechanics has drastically changed our understanding of nature’s processes. Although quantum mechanical laws are rather unintuitive and their interpretation has caused much debate among physicists, it is among the most successful physical theories of the last century. The predictions it makes have been veriﬁed in numerous experiments and many of the most important technological innovations of the twentieth and twenty-ﬁrst century are based on the laws of quantum mechanics-
.
However, making predictions about physical systems using these laws is not an easy task. There are only few problems which can be solved analytically. A number of others can be solved by making various approximations or by numerical simulations with computers. However, when it comes to calculating the behavior of systems consisting of many quantum particles, even these approaches fail. In 1982 Richard Feynman argued that many-particle quantum systems cannot be eﬃciently simulated with the help of -
classical computers, because the eﬀort scales exponentially with the number of particles considered. Therefore, he reasoned, a simulation of one quantum system can only be done with the help of another quantum system [1]. In principle there are two distinct ways to do this: In the ﬁrst route a system is found which mimics the evolution of the original system, but which is more easily accessible and controllable. These systems are called analog quantum simulators [2–6]. Alternatively one could perf-
orm a digital simulation using a quantum computer [7, 8]. In such a computer the state of the quantum system is encoded in elementary quantum units called quantum bits (qubits) and the evolution of the system is simulated by elementary quantum operations called quantum gates. In either case a substantial requirement is to have a very high level of control over the relevant degrees of freedom of the simulator-system.
Currently huge eﬀorts are made to ﬁnd suitable systems for quantum computation and quantum simulations. Among them are nuclear spins [9], photons [10], neutral atoms in optical lattices [11], quantum dots [12], Josephson junctions [13] and trapped ions [14]. So far, trapped ions seem to be the most promising candidate [15]. A number of basic ingredients have been already demonstrated in proof-of-principle experiments: one- and two-qubit quantum gates [16–19], quantum teleportation [20, 21], creati-
on of many-particle entangled states [22–24], quantum state tomography [25], quantum process tomography [26] and many others.
Moreover, quantum simulations are not the only application of quantum computers. There exist certain tasks, which a quantum computer could solve significantly faster than a classical computer [27–29]. Some of these algorithms have already been implemented like the Grover algorithm [30] and the Deutsch-Jozsa algorithm [31].
1

2
Still there are some challenges to overcome. One of them is that, to date, these systems are only capable of using a small number of qubits, since the current ion trap architecture allows one to only manipulate a few tens of ions [32, 33]. In 2002 Kielpinski et al. [34] proposed a new architecture, where the ions are localized in an array of trapping zones of a miniaturized trap. Manufacturing of such a trap is made signiﬁcantly easier by using a surface trap architecture [35]. Such a trap, where -
all electrodes lie in the same plane, has great promise for miniaturization and scalability. This geometry has already been shown to work [36–38] and to be capable of trapping large numbers of ions. Nevertheless a few challenges need to be overcome when operating such a trap.
This work aims at one of these challenges, namely at improving the control over the classical motion of a trapped ion. In Paul traps the classical motion of the ion is governed by the electric potential. Two kinds of potentials are used; potentials alternating at a radiofrequency (RF) and static (DC) potentials. The total DC potential consists of a superposition of the potentials of several diﬀerent DC electrodes. The shape of the resulting potential is given by the relative contribution of each e-
lectrode. In contrast to traditional Paul traps, surface Paul traps have very little symmetry – having all the electrodes in a plane on one side of the ion. This means that many simpliﬁcations of control which were previously made on geometrical-symmetry grounds no longer hold. To control the ion’s motion, an experimentalist needs to have highest possible control over the potential’s shape; speciﬁcally over the position of the potential minimum, and of its curvature. In surface traps this requires-
 explicit considerations of the combined eﬀects of all individual electrodes.
This thesis presents a method which determines the relative contributions of each DC electrode in such a way that the resulting potential has the desired predetermined characteristics. This facilitates the complete control of an ion’s classical motion in a segmented surface trap.
The structure of this thesis is as follows: The next chapter gives an overview of the theory of Paul traps, with a focus on segmented surface traps. Chapter 3 introduces the numerical method used for the trap simulations and describes the approach used to improve the control over the ion’s motion. This method has to be veriﬁed experimentally and therefore chapter 4 presents the experimental setup and the measurement methods. Finally in chapter 5 the experimental data is presented and compared to t-
he simulations.

2. Paul traps

Since their invention by Wolfgang Paul in 1953 [39], Paul traps have found wideranging applications in many ﬁelds of physics and developed to be a very promising tool for the physics of quantum information and quantum optics [15, 40–42]. This chapter starts with a short description of the operation principle of a Paul trap, followed by a description of the ideal implementation and deviations from this case in section 2.1. The more recently developed surface traps are discussed in section 2.2 and a-
 motivation for segmented ion traps is given in section 2.3. Finally section 2.4 sets out the objective of this work: the complete control over an ion’s classical motion in a segmented surface ion trap.

2.1. Trapping theory

A comprehensive description of the theory of ion traps can be found in several

references [40, 43–45]. A general overview is given here.

Conﬁnement of a charged particle at a certain point in space requires a force which

is directed towards this particular point (the trap center) from all directions. In

the simplest case the amplitude of this force is assumed to be proportional to

the distance of the particle from the trap center. Since the force F is related to

the potential Φ via F = −e∇Φ, the potential needs to be harmonic in all three

spatial dimensions:

Φ

=

Φ0 r02

αx2 + βy2 + γz2

.

(2.1)

In Paul traps the force is mediated by electric ﬁelds. Φ therefore has to obey the Laplace equation, ∇2Φ = 0, implying the following relation:

α + β + γ = 0.

(2.2)

Accordingly it can be seen that it is not possible to generate a static ﬁeld which conﬁnes in all three directions; at least one coeﬃcient has to be negative and therefore the potential must be repulsive in that direction. However, this problem can be circumvented by using a periodically varying voltage

V (t) = U + V cos(ΩRF t)

where U is a DC voltage and V the amplitude of the voltage component oscillating at the radio frequency (RF) ΩRF . At every instance of time, the potential still has at least one attractive direction and at least one repulsive direction, but for the correct choices of U, V and ΩRF , a time-averaged net attractive potential in all three dimensions remains.

3

4

2.1. Trapping theory

2.1.1. Pseudopotential approximation

In a simpliﬁed picture this conﬁnement can be described as follows: The particle performs fast oscillations at frequency ΩRF driven by the alternating ﬁeld. If this ﬁeld is homogeneous, the integral over the force acting on the ion during one oscillation cycle, averages to zero and the particle comes back to its initial position. In the case of an inhomogeneous ﬁeld, the amplitude of the force depends on the position of the particle. Therefore, after integration of the force over one cycle of the -
oscillation, a resulting net force remains, directed towards the lowest ﬁeld region. The eﬀective potential associated with this is called pseudopotential and is given by

ψ

=

e2 4M Ω2RF

|∇Φ(x,

y, z)|2.

(2.3)

Here e is the charge of the ion and M the ion’s mass. For a detailed derivation

see [44].

2.1.2. Ideal implementation
Despite this approximation, equation 2.2 still needs to be fulﬁlled at all times. One way to reach this is to use a two-dimensional quadrupole ﬁeld, corresponding to coeﬃcients α = −β = 1, γ = 0. Such a ﬁeld is ideally generated by four long rods with hyperbolic cross-section, where one pair of the opposing electrodes is held at the voltage V (t), the other one is grounded1 as depicted in ﬁgure 2.1. With static voltages this conﬁguration conﬁnes in x-direction and repels in ydirection, or vice ver-
sa, depending on the sign of V (t). A rapidly oscillating ﬁeld however, leads to a harmonic two-dimensional pseudopotential in the x-y-plane with no component along the z-axis. Conﬁnement in z-direction can be provided by placing two additional electrodes at either end of the trap. These so-called endcap electrodes are positioned on the z-axis and are held at a positive DC voltage (for positively charged particles).

Figure 2.1.: Linear paul trap: Hyperbolic shaped electrodes at the periodical varying voltage V (t) = U + V cos(ΩRF t) provide radial conﬁnement. Axial conﬁnement is given by positive DC voltages at the endcap electrodes.
1 Strictly speaking, to generate the ﬁeld of equation (2.1) both pairs of electrodes need to be held at V (t) = U + V /2 cos(ΩRF t), where the voltage on one pair is 180◦ out of phase with respect to the other pair. However, ensuring phase stability between two diﬀerent voltage sources is technologically demanding and furthermore the conﬁguration with one pair of electrodes grounded is equivalent for ion trapping purposes.

2. Paul traps

5

2.1.3. Motion of the ions and stability
The equation of motion of a particle placed in such a potential can be expressed by the so-called Mathieu equations [44]. Neglecting the potential from the endcaps they take the following form:

d2x dτ

+

(a

−

2q

cos(2τ ))x

=

0,

d2y dτ

−

(a

−

2q

cos(2τ ))y

=

0,

d2z dτ

=

0.

For simpliﬁcation the following substitutions are used:

(2.4)

4eU M r02Ω2RF

= a;

2eV M r02Ω2RF

= q;

ΩRF t = 2τ

(2.5)

where r0 gives the distance from the trap center to the nearest electrode. As the equations are decoupled in the spatial coordinates, it is suﬃcient to study the
one dimensional case. There are two types of solutions to this equation: Stable
solutions oscillating with ΩRF around a mean value and instable solutions whose amplitude grows exponentially. The behavior depends on the value of the a and
q parameters. Figure 2.2 shows the stability region nearest the origin for a linear Paul trap. Assuming that |a| ≪ q2 ≪ 1 an approximate solution is given by

x(t) = A cos

√q 2

ΩRF 2

t

1

−

q 2

cos(ΩRF

t)

(2.6)

where A is a constant deﬁned by the initial conditions [40]. This motion can be decomposed into two parts: a slow oscillation at the secular frequency

ωr0,hyp

=

√q 2

ΩRF 2

=

√ eV 2M r02ΩRF

and a fast oscillation at the trap drive frequency ΩRF called micromotion. If the micromotion term is neglected, the solution reduces to the motion of a particle in a harmonic trap. The amplitude of this micromotion scales with the distance from the trap center. Since the ion is never completely at rest at the center, but is always oscillating around it, micromotion can never vanish completely. It can only be minimized by ensuring that the ion’s central position coincides with the minimum of the p-
seudopotential [46].
Conﬁnement in the z-direction is obtained by applying a static voltage to the endcap electrodes. Assuming that they are hyperboloids of revolution around the z-axis, the ion performs harmonic oscillations in z-direction with the secular frequency

ωz,hyp =

2eUEC M z02

6

2.1. Trapping theory

where UEC is the applied static voltage and z0 the distance from the ion to the endcap electrodes [47]. Again, this ﬁeld has to obey the constraints of equation (2.2), and therefore trapping axially, it generates a anti-trapping radial potential. Thus the radial trap frequency is reduced to

ωr,hyp =

ωr20,hyp

−

1 2

ωz2,hyp

346 345
13
7345 7346

346

348 2 349

34A

Figure 2.2.: The lowest stability region in a linear Paul trap. The dotted red lines delimit the stability in x-direction, the dashed green lines limit the stability in y-direction and the shaded area gives stability in both directions.

2.1.4. Deviations from the ideal trap
Hyperbolically shaped electrodes provide a highly harmonic potential in the whole volume enclosed by the electrodes, but they have some drawbacks: The shape is not easy to fabricate and the optical access is very limited. Fortunately the potential does not necessarily have to be harmonic in the whole trapping volume. It is suﬃcient if the potential is harmonic at the center of the trap, where the ion is located. Therefore a common implementation of the linear Paul trap is realized with cylindrical-
 rods instead of the hyperbolae [48–50], as shown in ﬁgure 2.3.

2
1 3
Figure 2.3.: Common implementation of linear Paul traps with cylindrical rods and segmented DC electrodes to form the endcaps.
Circular rods might appear a logical choice since they resemble the ideal case at least to ﬁrst order, but it has been shown that traps still work with an even higher degree of deviation. Figure 2.4 shows cross sections of several trap designs with the corresponding numerical simulations for the pseudopotential, starting from the ideal case and moving on to more and more deformed traps.

2. Paul traps

7

pseudopotential (eV)

pseudopotential (eV)

pseudopotential (eV)

72
98
92
8
2 1234 1235 1236 1237 2 237 236 235 234
distance from center (mm)
(a)
41
32
31
2
1 5167 5168 5169 5164 1 164 169 168 167
distance from center (mm)
(b)
41
32
31
2
1 5167 5168 5169 5164 1 164 169 168 167
distance from center (mm)
(c)
8
126
125
124
123
1 7126 7125 7124 7123 1 123 124 125 126
distance from center (mm)
(d)
Figure 2.4.: Non-ideal traps: The left column shows cross-sections of the electrodes with simulated equipotential lines. The potential along the dashed line is shown in the right hand column, where the dotted line represents the actual potential, the solid line represent a quadratic ﬁt. The simulations are calculated for a RF Voltage of 300 V, a trap drive frequency of ΩRF = 2π × 10.2 MHz and a minimal ion-electrode distance of r0 = 800 µm. The crosses mark the saddle points over which the ions wo-
uld leave the trap. (a) Ideal hyperbolic trap, η = 1, trap depth = 20.6 eV. (b) Typical implementation with circular rods, η = 0.95, trap depth = 15.6 eV. (c) Rectangular electrodes arranged in a square, η = 0.76, trap depth = 5.8 eV. (b) Surface trap, η = 0.32, trap depth = 0.2 eV. Note that the y-axis of the bottom-right plot is scaled by a factor of 20 with respect to the three upper plots as otherwise the shape of the potential cannot be recognized.

pseudopotential (eV)

8

2.2. Surface-trap theory

The trapping principle stays the same, but the region over which the harmonic approximation holds gets smaller, and the traps get shallower. Three parameters characterize how “non-ideal” a trap is: the trap depth, the radial trap eﬃciency η, and the axial trap eﬃciency κ. The depth of a trap is given by the height of the potential energy barrier a particle needs to overcome in order to leave the trap. The radial trap eﬃciency η is a geometrical factor which compares the quadrupole moment of the el-
ectric ﬁeld, generated by a given RF electrode structure with the quadrupole moment of an ideal trap of the same ion-electrode separation. The axial trap eﬃciency κ has a similar meaning, just that the comparison is made for the DC endcap electrodes. The eﬀect of these parameters is a reduction of the corresponding trap frequency:

ωz =

2κeUEC M r02

;

ωr0

=

ηeV 2M r02ΩRF

(2.7)

So far the two radial trap frequencies were considered degenerate. This is only the case if the DC endcap electrodes exhibit a perfect rotational symmetry about the z-axis which is not fulﬁlled in many implementations. For example in the common implementation with cylindrical rods shown in ﬁgure 2.3, only one of the two pairs of rods is segmented and thus only one pair exhibits endcap electrodes. Any asymmetry lifts the degeneracy and leads to distinct radial trap frequencies ωr1 and ωr2 which hav-
e to fulﬁll the following constraint:

ωr21 + ωr22 + ωz2 = 2ωr20

The three frequencies introduced above characterize a trap with respect to three axes, along which the motion of the ion can be regarded as decoupled from each other. These axes are called the principal axes of a trap. Particularly for surface traps these principal axes do not always coincide with the geometrical axes.

2.2. Surface-trap theory
In recent years a novel trap architecture was proposed [35], which is very promising for the development of future quantum computation applications. Instead of using a three-dimensional electrode structure, in a surface trap all electrodes are brought to one plane. A straightforward design approach is the so-called ﬁvewire geometry (cf. ﬁgure 2.5). There one of the DC electrodes is placed between the RF electrodes, the other one is split up and placed laterally on either side. This provides radial-
 conﬁnement just like in a three-dimensional trap, the trap center lies at a certain distance above the central electrode. Axial conﬁnement is achieved by a segmentation of the DC electrodes, where the outermost segments act as the endcaps. In the following various aspects of surface traps are discussed.
Trap depth and trap frequencies Compared to a standard macroscopic trap the motional frequencies are only slightly lower, by a factor of approximately 3 to 6 [35], i.e. η = 0.3 to 0.15. However the trap depth is signiﬁcantly reduced. An excited ion most probably leaves the trap over the saddle point which lies above the trapping zone (cf. ﬁgure 2.4d. The height of this saddle point deﬁnes

2. Paul traps

9

(a)

(b)

Figure 2.5.: Five-wire design: (a) All electrodes of a linear Paul trap are put into one plane. One of the DC electrodes is split and lies laterally on both sides.(b) Perspective view of a ﬁve-wire trap with segmented DC electrodes.

the trap depth and is typically reduced by a factor of 30 to 200 compared to standard quadrupole traps. However, by adding a DC biased electrode above the trapping zone the trap depth can be dramatically increased [51]. In the simulations presented in ﬁgure 2.4 the reduction factor is ∼ 100.
Fabrication Many applications of ion traps require high secular frequencies. As can be seen from equation (2.7), one way to increase these frequencies is to reduce the dimensions of the trap. However, machining of traditional ion traps to the required precision is a challenging and time consuming task, even with the relatively large sizes typically used, not to mention making them smaller. Here surface traps have a major advantage as they can be fabricated using well established techniques of the -
semiconductor industry. Traps have been fabricated using techniques like printed circuit boards (PCB) [36], metal deposition via electroplating or evaporation [37] or etching of bulk silicon wafers [52]. Besides simpliﬁcation of the fabrication process, also the time needed to design and produce a new trap is much shorter. A traditional trap needs usually over a month to be machined and assembled, whereas a new surface trap can be produced within a week, once the fabrication process is mastered. T-
his speed of prototyping further simpliﬁes the advancement of ion traps.
Versatility Not only is the minimum size of traditional traps restricted, but also the fabrication of complex electrode structures is much more demanding than with surface traps, if not altogether impossible. While the ﬁve-wire geometry introduced above is just the most direct implementation, surface traps provide the possibility to experiment with far more complex structures [53, 54]. Besides the linear trap type architecture there are proposals [55] and preliminary experimental implementations [-
56] of a trap architecture consisting of two-dimensional arrays of traps, which would be a substantial progress in terms of scalability of the system and which would be impossible with standard traps.
Optical access As mentioned before, optical access is a crucial property of a trap and a major motivation for deviation from the ideal hyperbolic geometry. In many experiments with trapped ions good optical access is necessary for the following reasons: The imaging system should cover as much of the solid angle as possible in order to collect the ﬂuorescence light from the ion eﬃciently. Secondly

10

2.4. Controlling the ion’s motion

the ions need to be very well cooled, close to the absolute zero, which is typically done by laser cooling. This cooling mechanism requires the laser beam to have a component along all principal axes of the trap [57].
The problem with the standard ﬁve-wire design surface traps is that having beam components along all principal axes is not easily achievable. Due to the geometry the laser beam can only have a small angle with respect to the plane of the trap. Otherwise the beam hits the trap and thus causes stray light (which is detrimental to good imaging), and induces stray electric ﬁelds due to charging of insulating materials near the trap [58, 59].
These challenges may be solved by the following ideas: In a surface trap architecture parts of the optical system can be implemented directly into the trap, which has already been shown in proof-of-principle experiments [60–62]. Eﬃcient cooling can be achieved by using a slightly diﬀerent trap design with asymmetric RF electrodes. In these traps the principal axes are rotated and therefore the ions can be well cooled by a beam parallel to the trap plane [35]. Neither of these solutions are impleme-
nted in the trap used in this experiment. However the simulations developed here are applicable to such surface trap designs and could be used to simulate them in the future.
2.3. Segmented traps
It was already mentioned in the introduction that one of the research goals of the ion trapping community is to build a large scale ion computer [41, 63]. Simply increasing the number of ions in one trap is not scalable. Gate operations depend strongly on the conﬁnement strength, and if further ions are added while keeping the conﬁnement strength constant, at a certain point the inter-ion separation will get too small for eﬃcient addressing. An alternative approach is to use segmented microtraps [-
34], where the segmentation of the electrodes provides several distinct trapping zones in one trap. These diﬀerent zones can have diﬀering functions, like processing zones where the gate operations are performed and memory zones where the ions are stored in between two operations. The segmented nature of the electrodes allows the ions to be moved from one zone to the other (a process called shuttling) as proposed in [34]. Shuttling can be also used for a new way of realizing gate operations [64] b-
y moving ions in and out of the laser beam instead of addressing the beam onto the ion.
Another application of the additional degrees of freedom provided by segmented electrodes was implemented in recent experiments in Innsbruck [65] and at NIST [66], where coupling between two quantum mechanical oscillators in separate potential wells was shown. The oscillators were ions sitting in two nearby trapping sites of a so-called double-well potential, which was formed by applying speciﬁc DC voltages to the relevant segments of the trap.
2.4. Controlling the ion’s motion
Despite the many opportunities aﬀorded by segmented surface traps, such possibilities do not come without a price. The technical overhead required to understand and control the classical motion of the ion is not inconsiderable. Achieve-

2. Paul traps

11

ment of such a control constitutes the main topic of this work. Speciﬁcally this comprises the control over the three coordinates x, y, z of the potential minimum, and the motional frequencies of the ion ωx, ωy, and ωz.
2.4.1. Radial position
In section 2.1.3 it was mentioned that the ion’s harmonic secular motion in the trap is superimposed on a fast oscillation at the drive frequency. This micromotion is unavoidable even in ideal traps, since the ion is never at rest at the minimum of the pseudopotential (RF null) where the micromotion vanishes, but oscillates back and forth. In a real trap, however, static stray electric ﬁelds can displace the average ion position from the RF null to a point with higher RF ﬁeld amplitude and therefo-
re also bigger micromotion. This so-called excess micromotion has several adverse eﬀects, such as: reduced cooling eﬃciency due to the Doppler shift of the transition line shapes, AC Stark shifts and second-order Doppler shifts. For a detailed description of these eﬀects see [46]. Micromotion therefore needs to be minimized which is done by spatially overlapping the saddle point of the DC ﬁeld with the saddle point of the RF ﬁeld and thus ensuring that the ion’s position is at the minimum of the p-
seudopotential.
There are several methods to minimize micromotion [46], all of them include minimizing some micromotion-related signal by moving the ion to the RF null. To move the ion in the desired way, one needs a uniform static electric ﬁeld. As the ion can be displaced in any arbitrary radial direction, in general two distinct non-parallel ﬁelds are necessary to bring it back to the RF null. Ideally these two ﬁelds are orthogonal with respect to each other and are additionally aligned with the directions alo-
ng which the micromotion is detected. In that case micromotion compensation can be done in two steps: First, micromotion is minimized along one direction, then it is minimized along the other direction. If the two directions are not orthogonal this process has to be repeated iteratively.
The challenge with many commonly used surface trap geometries is that, as opposed to traditional linear traps, it is not possible to generate mutually orthogonal ﬁelds by using only two electrodes. Therefore another solution has to be found where one can use the fact that the segmentation of the DC electrodes oﬀers additional degrees of freedom. Instead of using only two electrodes, one can use a set of DC electrodes and search for a speciﬁc set of voltages such that, by applying these voltages to-
 the corresponding electrodes, all the components in the unwanted directions cancel each other out.
2.4.2. Axial position
Similar requirements need to be satisﬁed for the shuttling of ions. The curvature of the potential can diﬀer during the shuttling process for certain purposes [67], but the ion should deﬁnitely move exactly along the RF axis of the trap in order to not gain excess micromotion. This implies a ﬁeld which has only a z-component. In a three-dimensional segmented trap this is easily achieved by a diﬀerential voltage applied between two pairs of segmented electrodes of the trap. Doing the same in a surf-
ace trap would displace the ion in z-direction as desired, but would additionally aﬀect the ion’s height above the trap. To compensate for that, the

12

2.4. Controlling the ion’s motion

same concept as above can be used, where a speciﬁc set of voltages needs to be found and applied to a set of electrodes such that the emerging ﬁeld is purely axial.
2.4.3. Trap frequencies
Besides the position of the potential minimum, the curvature of the potential determines the classical motion of a trapped ion. It was already shown that the parameters α, β and γ, which determine the curvature of the potential in all three dimensions, cannot be chosen independently. But as the trap frequencies are directly related to these parameters, also the frequencies are not independent. This means that one cannot increase one trap frequency without lowering another one, but at least it woul-
d be desirable to be able to do that in a controlled manner and without inﬂuencing the ion’s position. In a three-dimensional linear trap raising the endcap voltages will give a higher axial conﬁnement and a lower radial conﬁnement but due to the symmetry, the ion’s position would stay constant. In a surface trap however the same naive approach would additionally raise or lower the ion’s height above the trap. Once again this unwanted eﬀect can be avoided by taking more electrodes into account, us-
ing a speciﬁc set of voltages. The procedure of how to ﬁnd these voltages forms the basis of the next chapter.

3. Computer simulations

The rapid evolution in computational power of the last decades has provided an enormously powerful tool for engineers and scientists and opened up numerous new possibilities for theorists and experimentalists alike. Theorists can quickly check if their new ideas make sense, where a veriﬁcation by a real experiment is either not possible or not feasible. Experimentalists can perform preliminary tests of the design of their experiment, before building it, and thereby save time and money. The followi-
ng chapter starts in section 3.1 with the statement of the problem, followed by an introduction to two widely used numerical methods, the ﬁnite element method (FEM) and the boundary element method (BEM) in section 3.2.
Section 3.3 describes the trap simulations performed, including the methods used and some ﬁrst examples. Finally, section 3.4 describes the approach used to calculate voltages for controlling the ion’s motion within the trap.

3.1. Statement of the problem

Solving a scientiﬁc or technological problem often includes solving partial diﬀer-

ential equations (PDAs). In the case of trap simulations we want to calculate

the electric potential Φ generated by the charge distribution surrounding the ion.

Dielectric surfaces are either far away or shielded by the electrodes and thus ne-

glected. Therefore the only contribution to the potential comes from the surface

charges on a set of n electrodes. The governing equation is the Laplace equation

in free space

∇2Φ = 0

(3.1)

with Dirichlet boundary conditions

Φi = Ui

i = 1...n

(3.2)

where Φi is the potential at the ith electrode’s surface and Ui is the voltage applied to the ith electrode.
Recently it has been shown that under certain approximations this equation can be solved analytically for surface traps [68]. One of the approximations is, that there are no gaps between the electrodes, or that any gaps are at least much smaller than the ion-electrode distance. The trap used in this project however has gaps of ∼ 500 µm which is on the same order as the electrode width and the ion-electrode distance. Therefore this method is not applicable, and numerical methods have to be used.

13

14

3.2. Numerical methods

3.2. Numerical methods
Since digital computers cannot handle non-algebraic equations, the PDA needs to be transformed to an algebraic equation, a procedure called discretization. Numerical methods developed to solve these equations are classiﬁed according to the type of the discretization. Two common ones are described here:
Finite element method (FEM)
The ﬁnite element method is a versatile and very popular technique and is implemented in a variety of commercial software packages1. The basic idea is to divide the volume for which one wants to know the solution (the domain) into small but ﬁnite size elements with uniform material properties, cf. ﬁgure 3.1a. Each of these elements approximates the behavior of the region it represents; the smaller the element the more exact the solution, but the higher the computational eﬀort. The set of all of th-
ese subdivisions is called computational mesh. The strength of FEM is the ease of handling complicated structures and the possibility to locally adapt the mesh size, such that more important regions are divided into smaller elements.
In the experiment at hand the boundaries to the domain could be set by the walls of the grounded vacuum chamber which are ∼ 10 cm away. Rather than meshing such a large volume, however, a non-physical grounded metallic bounding box can be introduced. The dimensions of this box are much smaller than the dimensions of the chamber, but still suﬃciently large such that they do not signiﬁcantly inﬂuence the potential at the position of the ion.
Boundary element method (BEM)
The boundary element method follows an alternative approach, unlike the previous method, only the boundary has to be discretized, as illustrated in ﬁgure 3.1b. In the following the general steps are presented, while a comprehensive description is provided in [69–71].
1. At ﬁrst the diﬀerential equation is transformed into an equivalent integral equation which is deﬁned only on the boundary of the domain.
2. In most cases this integral cannot be solved analytically. Therefore the next step is to discretize the boundary and solve the integral by numerical integration. Similar to FEM, the subdivision is done into small elements, each of uniform charge density. The mesh size can also be variably adjusted to the geometry; the only diﬀerence is that the dimension of the elements is reduced by one. The result of this integral is the surface charge σ(xj ) at each boundary element j at position xj.
3. Knowing the surface charges on all boundary elements, the potential inside the domain can be calculated by evaluating Coulomb’s law for each element and summing up all contributions. Two things have to be noted: Firstly, numerical errors in the simulated ﬁelds have their origin only in the
1 e.g.: COMSOL Multiphysics, MEDINA, ADINA Multiphysics

3. Computer simulations

15

discretization of step 2, the calculations of step 3 are analytical. Secondly, the potential can be calculated at any arbitrary point inside the domain, as opposed to FEM where the solution is only known at the nodes of the mesh.

(a)

(b)

Figure 3.1.: Discretization: (a) In FEM the whole domain needs to be meshed. (b) In BEM only the boundary needs to be meshed, which results in a much smaller solution space.

3.2.1. Comparison FEM and BEM
In the following, properties of BEM are discussed and compared to FEM.
• The most striking diﬀerence between the two methods is the discretization. In FEM the whole domain has to be sub-divided (ﬁgure 3.1a), while in BEM only the boundary is subdivided, (ﬁgure 3.1b). This reduces the dimension of the problem space with BEM by one, making the system of equations much smaller and therefore computationally less demanding and faster [72].
• BEM solutions are in principle diﬀerentiable to all orders, while solutions calculated with FEM usually feature numerical artifacts such as discontinuities at the boundaries of meshing regions.
• The matrices of the equation systems produced by BEM are densely populated and asymmetric whereas FEM matrices are sparse and symmetric. This was a major drawback, because algorithms solving dense systems used to be much more demanding. However, recently an algorithm called fast multipole method (FMM) was developed, which dramatically increases the speed of solving dense matrix problems [71].
• BEM can reach higher accuracies due to its semi-analytical approach.
• In a BEM analysis no bounding-box has to be introduced.
Beside the mentioned points above, BEM was used because the points for which the solution is calculated can be chosen on a rectangular grid which facilitates the post-processing with a matrix based program such as MATLAB2. Furthermore an interface connecting the BEM package CPO3 and MATLAB was already written
2 MATLAB 7.11.0, The MathWorks, Inc. 3 CPO3D/Di, Scientiﬁc Instrument Services

16

3.3. Trap simulations

which is easier to use than the available interface between the MATLAB and the FEM package we previously used, COMSOL4.
3.3. Trap simulations
The trap simulations are done using the BEM package CPO. First the trap is drawn in a CAD program5 (cf. ﬁgure 3.2a) and pre-segmented into rectangular parts. The trap and the pre-segmentation of the electrodes is shown in ﬁgure 3.2b. In CPO this segmentation is further reﬁned depending on the initial size of the parts. A ﬁner mesh can thereby be used for the more important regions, the ones in the vicinity of the ion. The ﬁnest division is applied to the RF electrode resulting in 336 segments. In -
total the simulation is done for 844 elements. Gaps between the electrodes are treated as airspaces and the electrodes are assumed to be two-dimensional. The characteristics of BEM allows the potential to be evaluated at every point in the domain, so a rectangular grid around the ion’s position is chosen with 61× 61× 61 points and an extension of 300× 300× 300µm. Thus the grid has a spacing of 5 µm. With these parameters the calculations take about 110 minutes on a standard desktop computer6.
The grid origin is set to be at the trap center, the height above the trap (y-axis) was determined from a primary simulation of the pseudopotential on a bigger grid with smaller accuracy, see ﬁgure 3.3. The origin in the x-z-plane is chosen to be at the geometrical center between electrode 3 and electrode 8, see ﬁgure 3.2.

(a)

(b)

Figure 3.2.: (a) Bastille’s electrodes with their designations. (b) Primary subdivision of the electrode structure, which was passed to CPO. The red cross marks the position of the origin in the x-z-plane, the height of the origin above the trap is 850 µm

DC Potential The simulation of the DC potential should be general in a sense that it should be adaptable for any chosen voltage conﬁguration for the electrodes. Since the underlying diﬀerential equation is linear, the superposition principle holds for the solutions. A general approach is as follows:
4 Comsol Multiphysics 3.4 5 AutoCAD 2009, Autodesk Inc. 6 Intel Core i5 CPU, 3.5 GHz with 8 GB of memory

3. Computer simulations

17

1. Set the RF electrode to ground.
2. Set Ui to 1 V and Uj=i to 0 V.
3. Calculate the potential ϕi at all grid points. ϕi is the so-called base function of electrode i.
4. Iterate step 2 and 3 for all n electrodes.
5. For the total DC potential, weight the base-functions ϕi with the chosen voltages Ui and superpose them.

n
ΦDC = Uiϕi
i=1

(3.3)

RF potential The eﬀective potential generated by the RF voltage can be calculated using the pseudopotential approximation, see section 2.1.1. At ﬁrst only the static amplitude is considered, and the same procedure as above can be used: All the DC electrodes are set to 0 V, the RF electrode is set to 1 V, and the potential ΦRF is calculated. This result needs to be post-processed to get the pseudopotential ψRF via the already known formulation

ψRF

=

e2 4M Ω2RF

|∇ΦRF |2

1.6

1.4

1.2

y(mm)

1

0.8

0.6

−0.8

−0.6

−0.4

−0.2

0

0.2

0.4

0.6

0.8

x (mm)

Figure 3.3.: Equipotential lines of the pseudopotential at the trap center of Bastille in a cross section through z = 0.

Total potential The total potential is obtained by adding the DC potential and

the pseudopotential

Ψ = ψRF + ΦDC

(3.4)

3.4. Trap control
The method used to improve trap control which is presented here, is based on the expansion of the potential in spherical multipole moments. At ﬁrst in section 3.4.1 the theoretical background of this technique is reviewed, details can be

18

3.4. Trap control

        BD F          DE  

232A9

232A

6

23279

A

2327

7

23289

9

2328

8

236 238BA
   238B 2384A 2384 2389A

1234 1235 1236 1237 2

237 236 235 234

BCBDEEF

(a)

1234 1235 1236 1237 2

237 236 235 234

CDEFF 

(b)

Figure 3.4.: (a) Base functions of the DC electrodes on the z-axis (x=y=0) as a function of axial position. Here only electrodes 1 to 5 are plotted, electrodes 6 to 10 show the same behavior due to symmetry. (b) The central electrode DC 11 is plotted in a separate ﬁgure since it is situated closest to the ion and therefore has the biggest inﬂuence. Furthermore it can be seen that the potential has a gradient in the z-direction, more on this follows in section 5.

found in [73]. Then section 3.4.2 describes how this can be used to create the desired potentials.

3.4.1. Spherical multipole expansion

The potential of any charge distribution ρ(r′) at any point r can be expressed as

Φ(r) =

dr′

ρ(r′) |r − r′|

.

(3.5)

The origin is taken to be at the trap center, |r| gives the distance of the ion to the origin whereas |r′| gives the distance of the electrodes to the origin. If either |r| ≫ |r′| or |r′| ≫ |r| the denominator can be expanded using Legendre
Polynomials Pℓ

1 |r − r′|

=

1 r>

∞ l=0

r< r>

l
Pℓ(cos γ).

(3.6)

Here r< and r> are the smaller and the larger of the two distances respectively, and γ is the angle between them. The corresponding physical situations are

the following: Either the charge distribution is centered at the origin and one

is interested in ﬁnding the potential in the far ﬁeld. Or the potential at the

origin needs to be found for sources very far away from it. The corresponding

expansions are called exterior and interior expansion respectively. For us the

second case is valid as the distance between electrode and ion is much larger

than the distance over which the ion oscillates. To express (3.6) in terms of the

spherical coordinates θ and ϕ the Legendre function needs to be rewritten with
the help of spherical harmonic functions Yℓm. For that, the addition theorem for spherical harmonics is used [73]:

Pℓ(cos γ)

=

4π 2ℓ +

1

ℓ

Yℓm∗(θ′, ϕ′)Yℓm(θ, ϕ).

m=−ℓ

(3.7)

3. Computer simulations

19

Combining (3.5), (3.6) and (3.7) gives

∞ℓ
Φ(r) =
ℓ=0 m=−ℓ

dr′ρ(r′)

rℓ (r′)ℓ+1

4π 2l +

1

Yℓm∗(θ′, ϕ′)Yℓm(θ, ϕ)

∞
=

ℓ
Iℓmrℓ

ℓ=0 m=−ℓ

4π 2ℓ +

1

Yℓm

(θ,

ϕ).

(3.8)

For the second equality all the terms with primed variables have been combined
to Ilm. The Ilm are called interior spherical multipole moments and are deﬁned by

Iℓm :=

dr′

ρ(r′) (r′)ℓ+1

4π 2l +

1

Yℓm∗(θ′,

ϕ′

).

(3.9)

Spherical harmonics form a complete set of orthonormal functions, which means

that every complex valued function depending on the angular variables θ and ϕ

can be expressed as a superposition of spherical harmonics. If the function to be

expressed is an electric potential as in this case, the coeﬃcients of the expansion

are given by the multipole moments Iℓm. Physical potentials are real valued

functions, therefore rather than using a complex valued set of functions, it can be

equivalently described by a set of real functions. Such a set is more convenient

for the following calculations, and can be formed in the following way: With

Yℓm∗ = (−1)m Yℓ−m real valued spherical harmonics can be deﬁned as:





√1 2

Yℓm + (−1)m Yℓ−m

if m > 0

Yℓm = Y√1ℓ0
i2

Yℓ−m − (−1)m Yℓm

if m = 0 if m < 0.

(3.10)

Figure 3.5 shows the 9 lowest order real spherical harmonics, which are well known in many ﬁelds of physics. In quantum physics, for example, they give the angular distribution of the atomic orbitals. From a physicist’s view there is an intuitive way to describe multipole expansions. An observer located very far from the origin, cannot distinguish between an arbitrary charge distribution and a point source. Coming nearer he/she will see at ﬁrst a dipole component, then a quadrupole component and s-
o on. Depending on the number of terms taken into account and the distance, or to be precise on the ratio between r and r′, a linear combination of the lowest multipole moments will give a good approximation to the actual potential.
A similar picture can be given for the interior expansion. Electrodes situated very far from the origin, will result in a constant oﬀset ﬁeld only. If they are closer, gradually the dipole and later the quadrupole component become stronger. The electric ﬁeld lines at the origin, generated by multipoles, are shown exemplary in 3.6. A dipole creates a linear gradient ﬁeld which displaces the position of the potential minimum in one direction, but leaves it unchanged in the other two. It also leaves -
the potential’s curvature and thus the ion’s motional frequency unchanged. A quadrupole creates a saddle shaped potential which alters the

20

3.4. Trap control

Figure 3.5.: 9 lowest order real valued spherical harmonics: (a) corresponds to a monopole. (b)-(d) correspond to dipoles (e)-(i) correspond to quadrupoles.

3. Computer simulations

21

motional frequencies but keeps the ion’s position unchanged. These are exactly the shapes we would like to create. The next sections describe how this is done.

2

2

2

1

1

1

(a)

(b)

(c)

Figure 3.6.: Example cross-section of electric ﬁeld lines near the origin generated by multipoles. (a) The x-dipole represented by Y1,1 (cf. ﬁgure 3.5b) creates a linear gradient ﬁeld in x-direction. (b) Quadrupoles have two designated axes, along one of them the ﬁeld lines point towards each other, along the other they point from each other. Here the Y2,−2 is presented (cf. ﬁgure 3.5). (c) Besides having such a structure in the x-z and y-z plane, the quadrupole represented by Y2,0 (cf. ﬁgure 3.5f-
) shows an additional feature: In the x-y-plane the ﬁeld lines point radially towards the center.

3.4.2. Creating multipole potentials
Similar to the trap simulations, the expansion of the potential in real multipole moments is done for each electrode individually. To illustrate this more clearly the expansion for the jth electrode is written out up to second order in Cartesian coordinates. For convenience the coeﬃcients Iℓ,m were combined with all constant prefactors and termed Mi,j. In this notation the indices l and m are mapped onto one index i; this facilitates a matrix notation.

Φj = M0,j + M1,j x + M2,j y + M3,j z + M4,j (x2 − y2) + M5,j (2z2 − x2 − y2) + M6,j xy + M7,j yz + M8,j zx + O(x3, y3, z3)

(3.11)

After doing this for all electrodes j, the obtained multipole moments can be

written as a matrix Mi,j where j indicates the electrodes and i the expansion

terms. The total multipole moment M of the trap for a given set of voltages

{Uj} can be calculated by multiplying Mi,j with the {Uj}:

 

M1 M2
... Mk

  = 

M1,1 ...
Mk,1

··· ...
···

M1,N ...
Mk,N

  

U1 U2 ... UN

  .

(3.12)

22

3.4. Trap control

Here N indicates the total number of electrodes and k the number of terms considered in the expansion. The monopole term M0,j has been neglected as it corresponds to a constant oﬀset.
However, ﬁnding the total multipole moments is not the goal. The goal is to ﬁnd a certain set of voltages {Uj} such that multiplied with the multipole matrix M all but one total multipole moment cancel out. For example if one wants to generate an x-dipole (Y1,1) one needs to ﬁnd a set {Uj} such that only the ﬁrst entry on the left-hand side of equation (3.12) has a nonzero entry:





1
0
0 ...



=

 

M1,1 ...
Mk,1

0

··· ...
···

M1,N ...
Mk,N

  

U1 U2 ... UN

  .

(3.13)

Since M is in general a rectangular matrix the solution has to be found numerically in a least-squares approximation. This means solving the equation M = M U by minimizing the norm

MU − M .

(3.14)

In the case considered, the linear system is underdetermined since 8 expansion terms are taken into account and the trap has 11 electrodes. Therefore either no solution exists or inﬁnitely many solutions. There are several algorithms solving this problem; here the equation is multiplied with the Moore–Penrose pseudoinverse [74, 75] of the matrix M from the left.
In MATLAB the pseudoinverse is calculated by a singular value decomposition [76] and has the following advantage: If the system is underdetermined, the algorithm chooses out of all possible solutions which minimize the norm (3.14), the unique solution which has itself the minimal norm |U |. This means that the individual voltages of U are made as small as possible. That is beneﬁcial in the experiment since practical or technological reasons often limit the voltages which can be applied.

4. Experimental implementation
With the simulations completed, the next step of this project was to verify the results experimentally. The measurements were performed with the surface trap Bastille, as it is a trap which had repeatedly proven to work well and furthermore the vacuum and imaging system were already at hand, so only the optical and electronic setup had to be rebuilt.
This chapter starts with a description of the experimental setup of the Bastille trap in section 4.1. Section 4.2 deals with the implementation of the multipole method into the experiment control software TrICS. Finally the measurement methods are described in section 4.3.
4.1. Experimental setup
In this section the apparatus with which the experiments of this project were performed is described. It consists of a characterization of the trap, the electronics providing the voltages to the trap electrodes, the vacuum chamber, the optical setup and the imaging setup. At the end it describes the procedure of loading the trap.
4.1.1. Surface trap Bastille
Bastille is a printed circuit board (PCB) trap, constructed in the ﬁve-wire design width DC control electrodes on either side of the RF rails, each segmented into 5 parts. It was designed in the group of Prof. Isaac Chuang at the Massachusetts Institute of Technology [77]. Figure 4.1 shows a photograph and drawing with the most important dimensions. It is composed of a 20 µm copper layer on a 635 µm substrate made of a vacuum-compatible dielectric (Rogers 4350). The bare substrate is milled away i-
n the areas near the trap center to minimize dielectric exposure to laser light (and thereby minimize build-up of stray charges [58, 59]) and to prevent shorting due to calcium deposition. The RF and the axial electrode and the gaps in between are designed to have an equal width of 508 µm, but in order to provide further shielding of the ions from the dielectric substrate the copper is wrapped around the edges, making the electrodes wider and the gaps smaller by 40 µm. The trap was typically opera-
ted at 300 V < VRF < 500 V with a frequency of 10.2 MHz.
Height of trap center
The average height of the RF null above the trap is 850 µm. From ﬁgure 4.1 it can be seen that the design of the trap diﬀers from the most basic ﬁve-wire design: There is an additional bar running vertically on each side, one connecting both RF electrodes, the other one is connected to the axial electrode and surrounds
23

24

4.1. Experimental setup

(a)

(b)

Figure 4.1.: Bastille: Photograph and trap dimensions
Surface trap Bastille: (a) Each electrode is bonded with three gold wires, two of which are connected to the feed-through outside of the vacuum chamber. This enables us to test if contacts are still faultless. (b) Sketch with trap measures,
all lengths are given in µm.

the segmented electrodes. This asymmetry leads to varying height of the RF null position along the trap axis. Over the whole trap this variation is on the order of 200 µm.
Trap depth
For a surface trap in ﬁve-wire design the exit path out of the trap is along the y-axis (orthogonal to the trap plane) above the trap center. Figure 4.2 shows a line plot of the simulated pseudopotential along this direction. The simulation was performed without static voltages, with 500 V RF-voltage (0-peak) and a drive frequency of 10.2 MHz. This results in a trap depth of 0.22 eV. With added DC voltages this value increases slightly but is still at a few hundred meV, for a detailed treatment se-
e [78].
Trap frequencies
The secular trap frequencies strongly depend on the DC Voltages. Under typical conditions used in the experiment they take the following values: 0.2 MHz < ωx/2π < 0.4 MHz, 0.8 MHz < ωy/2π < 1.1 MHz and 0.1 MHz < ωz/2π < 0.2 MHz, more details follow in section 5.
4.1.2. Electronics
The generation of stable trapping conditions in the surface trap Bastille requires static voltages up to 50 V and RF voltages up to 500 V. In the following it is described how these voltages are provided.

4. Experimental implementation

25

1

Pseudopotential (eV)

0.8

0.6

0.4

0.2

0

0.6

0.8

1

1.2

1.4

1.6

y (mm)

Figure 4.2.: Numerical simulation of the pseudopotential along the y-axis starting from the center of the axial electrode. The trap depth is 0.22 eV

RF supply
Bastille was operated at RF voltages of 300 V to 500 V at a frequency of 10.2 MHz. This voltage was generated by amplifying the output of a signal generator1 with a 2 W ampliﬁer2 and impedance matched to a λ/4 helical resonator [79]. The resonator consists of a copper tube with a helical wound wire inside. One end of the wire is connected to the trap, the other end to the outer tube which is grounded. The signal is coupled-in via a crocodile clip at the ﬁrst winding. The exact point at which this -
must be connected and the correct drive frequency are tuned by monitoring the reﬂected signal with a standing wave ratio (SWR) meter3 which is connected between the ampliﬁer and the resonator. For perfect coupling and correctly matched frequency the reﬂected signal should vanish. The quality factor of the loaded resonator was measured to be Q ≈ 150. The actual voltage was measured with a 100:1 capacitive divider.
DC supply
Control over an ion’s motion in a trap requires the control over six trap parameters: the three spatial coordinates of the potential-minimum and the three trap frequencies. For a given RF ﬁeld this is achieved by applying speciﬁc static voltages to the DC electrodes. If these voltages are determined with the multipole method described in section 3.4, each electrode needs to be addressed individually. Formerly a diﬀerent approach was used, where the four endcap electrodes (1, 5, 6 & 10) were held a-
t the same voltage, as were the two middle electrodes (3 & 8). Thereby the number of necessary voltage signals was reduced and a data acquisition card (DAQ) with only 8 analog output channels could be used as the voltage source. Since in the new approach 11 electrodes need to be addressed individually a new card4 was installed, oﬀering 16 analog output channels with a 16 bit resolution (∼ 1 part in 3 · 10−4). The output voltage of this card ranges from -10 V to 10 V. As the endcaps usually are ope-
rated in a range from 30 V
1 Marconi Instruments; 2022E 2 Mini Circuits; ZHL-1-2W-S 3 Daiwa; CN-101CL 4 National Instruments; PCI-6703 DAQ

26

4.1. Experimental setup

to 50 V, ampliﬁcation of the signal was necessary. Commonly in ion trap experiments low-pass ﬁlters are placed close to the trap to minimize heating of the ion due to RF pickup. For convenience the previous ﬁlterbox was replaced with a new circuit including the breakout box, the ampliﬁers and the low pass ﬁlters all on one board. A basic unit of the schematic is shown in ﬁgure 4.3, the whole circuit consists of 11 copies of it; one for every electrode.

 , B+*+CF

6    

1234256317

 

 6

& '3 ())3*+BECF -F( 3D   CDE+  )

  3   3  E  E

!" ##$ "  6

6    

 6 9963  

ABCDEF  C

  9

% 

1834896317

ABCDEF  C  F  C

Figure 4.3.: DC supply circuit: A non-inverting ampliﬁer using the high-voltage operational ampliﬁer OPA445 and a passive low pass ﬁlter in T design. Every electrode has two separate wires attached, which are connected to the two ports of the pin header H1. This gives the possibility to check for proper connectivity.

The ampliﬁer itself is built with the operational ampliﬁer OPA445 in a noninverting design with a gain of 11. The OPA445 works with supply voltages up to ±45 V and can also be operated with asymmetric supplies, with a voltage diﬀerence not exceeding 90 V. This is desirable as we need high positive voltages for the endcaps but only small negative values. The low pass ﬁltering was done passively with an RC circuit in T design with a cut-oﬀ frequency of 72 Hz. The T design not only assures that high -
frequency noise is stopped from transmission to the electrodes, but it also prevents the ampliﬁer from being disturbed by RF pickup from the DC electrodes. Additionally three SMA connectors were placed and coupled to electrodes 2, 7, and 11 with 100 pF capacitors. This is needed for trap frequency measurements, as described in section 4.3.3.

4.1.3. Vacuum chamber
In general ion trapping experiments require very low background pressure to prevent loss of ions out of the trap due to collisions with background gas molecules. Therefore our trap is situated in a vacuum chamber as shown in ﬁgure 4.4. The chamber is made out of stainless steel in a six-way cross conﬁguration. The trap is mounted vertically in the center of that cross, parallel to viewport V3 and with the trap axis aligned to the connecting line between viewports V1 and V2. All laser beams enter t-
hrough V1 and leave through V2 under a small angle with respect to the z-axis. In the z-y plane this angle is restricted by the dimensions

4. Experimental implementation

27

of the trap: A beam incident under an angle α > 7◦ would hit the trap and cause stray light and stray charges. In the z-x plane the maximum angle is ∼ 9◦ and is limited by the dimensions of the chamber, in particular by the diameter of viewports V1 and V2 and by the distance in between them. Therefore the propagation direction of the beam has only small components along the x- and y-axis which limits the laser cooling eﬃciency in these directions.
V3 is an inverted viewport, where the inner glass surface is ∼ 5 cm away from the trap. It is used for detection of the ions’ ﬂuorescence light. The upper arm of the cross is used as a feedthrough for the DC wires from the segmented electrodes to the ﬁlterboard. The lower arm contains the calcium oven, which is a thin-walled stainless steel tube of 1.8 mm diameter ﬁlled with granulated calcium. By resistively heating to temperatures over 500 K calcium vapor is evaporated towards the trapping regio-
n.

Figure 4.4.: Schematic of the vacuum chamber. (Courtesy of [78])
The arm opposite of V3 connects the experiment chamber to vacuum measurement and pumping devices. A turbomolecular pump serves as the prepumping stage and reaches pressures of about 10−6 mbar. Further improvement is achieved with a continuously running ion-getter pump5 and a titanium sublimation pump6 which is switched on as necessary. The experiments during this project were performed under typical pressures of 10−10 to 10−11 mbar, measured by a BayardAlpert ionization gauge. Between V1, V2 and t-
he upper arm there is an additional satellite ﬂange S1, which can be used to bring an optical ﬁber to the vicinity of the trapped ions, but this was not used in this project.
5 Varian; StarCell 20L/s 6 Varian; 9160050

28

4.1. Experimental setup

4.1.4. Laser systems
For this project four diﬀerent laser systems were used. They can be subdivided in two groups: Two lasers were used to ionize the atomic calcium and the other two were necessary for laser cooling and detection. All laser systems are build on separate optical tables and are shared between four diﬀerent experimental setups within our group, the light is distributed to each table via optical ﬁbers. An energy-level scheme of calcium with the relevant levels for this experiment is shown in ﬁgure 4.5.
9A5BC5DD6

123456 788456

92A2BA6C7D EC33F21
BCCF678

123453678
   
75     

   
75      

(b) (a)
Figure 4.5.: Schematic energy-level diagram of the relevant levels. (a) Atomic calcium is photoionised in a two-step process, ﬁrst it is excited resonantly to the 4p 1P1 state with a 422 nm laser and then ionized with a 375 nm laser. (b) The ions are Doppler cooled on the short-lived 2P1/2 - 2S1/2 transition at 397 nm. This transition is also used for detection. The 2P1/2 state can also decay to the 2D3/2 state, therefore a second laser at 866 nm is used to bring the ions back to the cooling cycle-
.
The photoionization of calcium is done in two steps [80, 81]. First, the atom is excited from the 4s 1S0 ground state to the 4p 1P1 state. This is a dipole transition with an energy diﬀerence corresponding to a laser wavelength of 422.673 nm in air. Since the output of the previously used laser was slowly degrading with time and the performance could not been improved a new second harmonic generation (SHG) laser system was installed7. The light is generated by frequency doubling of 845 nm light fr-
om a grating stabilized diode laser in a nonlinear crystal (LBO). The output power is around 5 mW. The frequency can be tuned by 10 GHz without mode-hopping by changing the voltage on the piezoelectric transducers of the grating and by varying the diode current. Besides the main output, this system additionally has a separate low power output for measuring the wavelength, which is located before the second harmonic generation (SHG) stage.
In the second photoionization step the atom is excited from the 4p 1P1 state to the continuum by a grating stabilized diode laser at 375 nm8. Here tuning to the exact wavelength is not critical, for the transition to the continuum the wavelength only has to be smaller than 389 nm [81].
7 Toptica; DL-SHG pro 8 Toptica; DL-100

4. Experimental implementation

29

For Doppler cooling and ﬂuorescence detection the ions are excited on the strong dipole transition from 4p 2P1/2 to 4s 2S1/2 by laser light from a frequencydoubled 794 nm Ti:Sa laser9. The laser is pumped by a 532 nm solid state laser10 and frequency stabilized by a Pound-Drever-Hall lock [82] to a reference cavity. The output power of the frequency doubled light is around 50 mW and is divided approximately equally between four diﬀerent projects. In the other projects the light then passes an acou-
sto-optic modulator (AOM) in a double pass conﬁguration [83] shifting the far red detuned light by 160 MHz into resonance. In Bastille’s setup this AOM is omitted for the following reason: Due to the geometry of the trap radial cooling is very ineﬃcient. Thus in the radial direction the ions are hotter, their Doppler proﬁle broader compared to the other experiments and therefore the frequency with the most eﬃcient cooling power farther red detuned.
In 7.5% of the cases the excited ion does not decay back to the ground state, but to the intermediate state 2D3/2, which has a lifetime 8 orders of magnitude longer than the excited state (1 s compared to 7 ns). To maintain high photon scattering- and thus cooling rates the population needs to be “repumped” to the 2P1/2 state on the 866 nm dipole transition. This light is generated by a grating stabilized diode laser,11 and further stabilized to an external reference cavity. After again splitting -
up the light among the four diﬀerent projects, it goes through a double pass AOM which shifts the laser frequency by 200 MHz in each pass.
4.1.5. Optical setup
Once the light is brought by optical ﬁbers to the experimental table, all diﬀerent beams are overlapped and pointed at the trap together. This has the advantage that once they are properly overlapped only one beam path has to be controlled in the trap loading procedure. A sketch of the optical setup is shown in ﬁgure 4.6.
The 397 nm beam coming from the ﬁber ﬁrst passes a λ/2 wave-plate and is then focused into an AOM12 by a f = 300 mm lens. The wave-plate is used to rotate the polarization of the beam as the diﬀraction eﬃciency depends on the incident polarization. Maximal diﬀraction is obtained for vertical polarization. The achieved diﬀraction eﬃciency of the AOM into the ﬁrst order was measured to be ∼ 70%. This diﬀracted light from the AOM contains several transverse modes. All but the T EM00 mode are unwanted-
 as they cause stray-light and therefore hinder ion detection. Therefore the light is coupled into a 150 cm long single-mode ﬁber, where all unwanted modes are ﬁltered out. This technique is called mode cleaning and has the drawback that ∼ 50% of the laser power is lost.
All of the beams are overlapped using very narrow bandpass ﬁlters13 with transmission characteristics as depicted in ﬁgure 4.7. These ﬁlter are optimized for normal incidence. After a rough alignment by eye, the light is reﬂected onto
9 Coherent; CR-899-21 10 Coherent; Verdi V10 11 Toptica; DL-100 12 Brimrose; QZF-80-20-397 13 Semrock; FF01-839/270-25, FF01-395/11-25 and FF01-417/60-25

30

4.1. Experimental setup

a pinhole by a ﬂip mirror. This pinhole is placed at the same distance from the last lens as the trap. A photodiode placed behind the pinhole detects the transmission signal, by maximizing this signal for each individual beam, proper alignment was assured at the ion’s position. Finally, before entering the chamber, the beam-height had to be adjusted with a periscope.
To align the beam on the ion it was at ﬁrst directed onto the trap. With the help of the CCD camera the beam was adjusted in the x-z plane to hit the trap center. Then it was lifted oﬀ the trap in y-direction such that behind the chamber a displacement of 1.6 mm was measured. With that, the beam’s height above the trap was ∼ 800 µm and only ﬁne tuning was necessary to “ﬁnd” the ions.

       

EF3 EFD EF

12D44566

12344566

789

A459BC

12344566

Figure 4.6.: Optical setup for Bastille. The 397 nm light is focused with a f=300 mm lens into a AOM where it is frequency shifted by 80 MHz. The ﬁrst order diﬀracted beam is coupled into a single-mode ﬁber where it is mode cleaned. The 375 nm light is shared with another project (Micreon trap) and can be deﬂected with a ﬂip mirror. The waist of this beam is adjusted with a telescope consisting of a f=300 mm lens followed by a f=100 mm lens. The waists of the 422 nm and 866 nm beam have already ap-
propriate size after the collimation lens of the ﬁber couplers and need therefore no further adaptations. All beams are overlapped on very narrow bandpass ﬁlters (BF). For ﬁne tuning of the alignment the beams can be reﬂected with a ﬂip mirror onto a pinhole. Finally before entering the chamber the beam’s height is adjusted with a periscope.

4. Experimental implementation

31

Transmission (%)
375 397 422 866

1 BF1 BF3
0.8 BF2
0.6
0.4
0.2
0 400 500 600 700 800 900 1000 1100
Wavelength (nm)
Figure 4.7.: Transmission characteristics of the bandpass ﬁlters, the graphs correspond to measured data taken by the company. BF1 was used to overlap the 422 nm and 375 nm beams; BF2 to overlap the 422 nm, 375 nm and the 397 nm beam; and ﬁnally BF3 is used to overlap the 866 nm beam with the 422 nm, 375 nm and 397 nm light.
4.1.6. Imaging
Detection of the ion’s position, and in more advanced experiments also the detection of the internal state [40], is done by imaging the ﬂuorescence light from the cooling transition onto an electron multiplying charge-coupled device (EM-CCD) camera14. For high sensitivity a large solid angle needs to be covered, which is done by placing the imaging lens system as close to the ion as possible. The vacuum chamber has an inverted viewport, therefore the distance from the lens to the ion is ∼ 5.8 cm. -
A lens system was used with f /# = 1.7, N A = 0.28 and focal length 67 mm mounted on an x-y-z translation stage. In front of the camera three bandpass ﬁlters are installed to block any scattered light from the photoionization and repumping lasers as well as ambient light. One ﬁlter has its center frequency at 417 nm with a bandwidth of 60 nm15 the other two are centered at 395 nm and have a width of 11 nm16. The camera uses a EM-CCD chip with 658 × 498 pixels where each pixel has an area of 10 µm -
× 10 µm and has a quantum eﬃciency of ∼ 40% at 397 nm.
4.1.7. Loading ions
When a trap is loaded for the ﬁrst time, or has not been loaded recently, the ﬁrst step is to check if the oven is working and the photoionization light is tuned to the right frequency. This is achieved by looking for resonant atomic ﬂuorescence.

14 Andor; Luca-S DL-658M 15 Semrock; FF01-417/60-25 16 Semrock; FF01-395/11-25

32

4.1. Experimental setup

Atomic ﬂuorescence

Atomic ﬂorescence is observed with only the 422 nm laser turned on. This ensures

high scattering rates as the atom does not get ionized by the 375 nm light but

decays back to the ground state after ∼ 5 ns. With the old 422 nm laser the

power after the ﬁber was as low as ∼ 8 µW, and no ﬂuorescence could be seen

at all. With the new one, the laser power before the vacuum chamber is ∼

400 µW. At an oven current of 5 A and when the 397-ﬁlters are removed, a clear

ﬂuorescence signal is visible (cf. ﬁgure 4.8). The correct laser wavelength is found

by scanning the wavelength and integrating the ﬂuorescence counts on the camera

coming from a rectangular “region of interest” (ROI). The maximum ﬂuorescence

was measured at λair = 845, 3509 nm with a commercial wavemeter17. This

corresponds to the master laser wavelength of the Toptica; DL-SHG pro. The

wavelength

of

the

doubled

light

in

vacuum

is

therefore

λ422

=

λ845,air 2

· n845

=

422.7894 nm where the refractive index n845 is calculated from [84]. Possible

reasons for the slight deviation from the literature value of λair = 422.7918 nm

[85] are: The transition frequency is Doppler shifted as the atomic beam and

the laser beam cross under a small angle. And secondly the wavemeter is not

calibrated to that accuracy.

DEF
9   
8B9A  BC

611234 511234 1234

5422 5622 5322

5522

5222

(a)

52

32

62

42

72

12

89ABC

(b)

Figure 4.8.: Resonant atomic ﬂuorescence. (a) Inverse picture of the calcium beam. (b) Mean number of counts from a “region of interest” versus time. The laser wavelength is scanned over 2 pm. The oven is turned oﬀ at t = 30 s and the ﬂuorescence signal decays to the background level in ∼ 30 s

Trap loading
After successful atomic ﬂuorescence detection the ﬁlters are reinserted and all lasers turned on. From previous experience with the trap, a set of parameters was known, which gives stable trap operation. These settings are listed in table 4.1. The only parameter which needs ﬁne tuning is the beam path. Once it is correctly aligned the trap can be loaded almost instantaneously. Figure 4.9 shows a photograph of the ﬁrst ions which were loaded. The above settings are reliable for loading but the ions-
 are not exactly at the RF null and therefore a micromotion compensation needs to be carried out. This can be achieved by monitoring the position of the ion on the CCD camera while raising and lowering the RF
17 HighFinesse; WS7

4. Experimental implementation

33

DC voltages DC 1 53.17 V DC 2 7.30 V DC 3 17.50 V DC 4 4.42 V DC 5 53.17 V DC 6 53.17 V DC 7 6.06 V DC 8 17.50 V DC 9 3.18 V DC 10 53.17 V DC 11 7.63 V

Laser power 422 nm 400 W 375 nm 233 W 397 nm 650 W 866 nm 400 W
Oven current 4 A RF Amplitude 400 V

Table 4.1.: Trapping parameters

amplitude [46]. If the ion is at the RF null its position is independent of the RF amplitude. But if a DC ﬁeld is pushing it out of this center, by lowering the pseudopotential the DC force will prevail and the ion gets pushed further out. So at a high RF amplitude the position of the ion is marked on the CCD image. Then the amplitude is lowered and if the position changes, the DC ﬁelds are altered in such a way that the ion is pushed back to the center. Then the pseudopotential amplitude is incre-
ased again and the process repeated iteratively. This method only compensates for static ﬁelds in x direction, and is limited by the resolution of the camera. In y direction a rough micromotion compensation is achieved by tuning the ion’s height above trap until the point where the image of the ion can be well localized.

1234 56234

761234

Figure 4.9.: The ﬁrst trapped ions of this project, loaded with the parameters of table 4.1. The ion spacing is 22 µm
4.2. Implementation in TrICS
Previously the experiment was computer controlled with a LabView program, but as this system was unstable for demanding applications, the decision was made to write a control program in C++. This software, TrICS (Trapped Ion Control System), should also include the control over the DC multipoles. Ideally the end user should have simple slider bars which need to fulﬁll the following demands:

34

4.3. Measurement methods

i Each multipole is assigned to a separate slider bar. The strength of the multipole excitation is controlled by varying the value of this slider, which changes the voltage of all DC electrodes according to the n-tuple U from equation (3.13).
ii Each electrode is individually adjustable.
iii The DC voltages were provided by DAQ cards with an analog voltage output range of ±10 V. If one channel reaches this limit, further increasing of the multipole sliders has no eﬀect on any channel, since the ﬁelds generated by this additional voltages will no longer have the aimed characteristics.
iv U is dependent on the z-position of the ion and is thus adjustable at runtime.
The above points were implemented by assigning a “master” slider to each multipole and a “slave” slider to each electrode. Slave sliders are connected to a DAQ output channel; master sliders are not: They only change the values of the slave sliders. Thomas Holleis, the developer of TrICS, provided the routines which are needed to read out the actual value of a slider, write values to a hardware channel and read out the former value of a slider. Reading out the former value of a slider is necessary-
 as slave sliders should change by an amount proportional to the change of the master slider, not to its absolute value.
Task (iii) was worked out by no longer passing new values to the slave slider as soon as one of them is out-of-range and saving the theoretical value of each out-of-range slider in a temporary variable. As long as the slider stays out of range all calculations are performed with the temporary values, as they move back in to the speciﬁed range the actual read-out value is used again.
Lastly, task (iv) was addressed by reading-in all of the simulated U n-tuples in distinct variables at the start up of the program. An additional slider bar lets the user set the actual position of the ion, which is translated into the relevant U value.
4.3. Measurement methods
4.3.1. Measurement of x and z displacement
It was mentioned in section 2.4 that controlled shuttling is one of the main motivations for this work. A requirement for characterizing how good the control is, is the ability to measure displacements of the ion. Measuring them in the x-z-plane is straightforward as one can count the number of pixels the ion moves on the camera. The resolution is of course limited by the pixel size and magniﬁcation of the imaging system. The ion’s absolute position is determined by calibrating the pixel size and -
then setting a reference frame. For the calibration the image section is moved to the middle DC electrode which is narrow enough to ﬁt on one image (c.f. ﬁgure 4.10c). Then the trap is illuminated with a bright halogen lamp such that the edges of the electrodes can be clearly distinguished. A picture of the trap is taken and integrated row wise, such that intensity peaks emerge at the position of the edges. As the electrodes are not perpendicular to the CCD frame, the image needs to be rotated ste-
pwise until the point of minimal peak

4. Experimental implementation

35

width is found. By measuring all possible distance combinations between the four peaks marked in ﬁgure 4.10b and comparing them to the known widths of the electrodes and gaps the calibration is determined to be

1px = 2.46 µm ± 0.10 µm

(4.1)

787945AB71 123145647

x (pix)

50

100

150

200

250

300

350

400

100

200

300

400

500

600

z (pix)

(a)

(b)

counts (cps)

1.3 x 106

1.25

1.2

1.15

1.1

1.05

100

200

300

400

500

600

z (pix)

(c)

z-separation (pix)

600 500 400 300 200 100
0 0

500

1000

1500

z-separation (mm)

(d)

Figure 4.10.: Calibration of the CCD image. (a) shows a picture of the middle electrode, rotated such that the edges are parallel to the image boarders. The section from which the image is taken, is indicated in (b) by a red rectangle. (c) After row-wise integration of the counts, the distances between all 6 combinations of the marked peaks are measured and in (d) they are plotted against the known dimensions. The gradient of this curve is determined by a linear ﬁt constrained to pass through the -
origin.

Now the image section needs to be moved back to the trap center. With its 658 × 498 pixel chip the height of the image section is ∼ 1309 µm. However, the distance from the corner of the middle electrode to the trap center is ∆x = 1758 µm and ∆z = 508 µm. Thus the section needs to be moved at least two times. For this, other intermediate reference points like features (imperfections) on the trap electrodes need to be used.

4.3.2. Measurement of y displacement
Measurement of the y displacement requires a diﬀerent approach as there is no window in the vacuum chamber through which ﬂuorescent light in the x-direction could be observed. As an alternative one can use the fact that the general ﬂuorescence signal decreases when the ion moves in y-direction since the ion moves

36

4.3. Measurement methods

out of the center of the laser beam. By measuring the distance the beam has to be moved in order to maximize the signal again the displacement of the ion can be determined. The resolution of this method is given by the waist of the laser beam (28 µm) and is therefore ∼ 10 times lower than the resolution of the imaging method described above for measurements in the x-z-plane. The beam was shifted by moving the last lens before the vacuum chamber (L4, cf. ﬁgure 4.6) transversally with a long stroke -
piezoelectric actuator18 and calibrated by measuring the change in position on a CCD camera19 just behind viewport V2 (Not shown in ﬁgure 4.6).
4.3.3. Measurement of trap frequencies
There are several possible ways of measuring trap frequencies [46], in our experiment they are measured by resonant excitation of the ions secular motion with an RF voltage additionally applied to a DC electrode. If the frequency of the applied voltage coincides with one of the characteristic trap frequencies the ions perform a driven motion. This motion was detected by choosing a small ROI around the ion on the CCD camera and measuring the integrated signal from that area. At large oscillation am-
plitudes the ion spends less time inside this region and therefore contributes less to its averaged signal. Figure 4.11 shows a typical CCD picture of an ion oscillating at the axial trap frequency and the corresponding integrated signal of the ROI which was obtained by scanning the drive frequency from 120 kHz to 180 kHz. The voltage was applied with a signal generator and capacitively coupled to either electrode 2 or electrode 11 (cf. 3.2). Electrode 11 has a large electric ﬁeld component along -
the y-axis, a small component in z-axis and no component along the x-axis. Therefore it is well suited to measure ωy. The other two secular motions are excited via electrode 2, as it has ﬁeld line components along all three axes.

18 PI; PiezoMove P-601.1S 19 Newport; LBP-4-USB

4. Experimental implementation

37

(a)

2500

counts (cps)

2000

1500

1000

120

130

140

150

160

170

180

frequency (kHz)

(b)

Figure 4.11.: Trap frequency measurement: A RF signal with a power of -30 dBm is applied to electrode 2, and the frequency is scanned by 60 kHz. When the frequency coincides with one of the trap frequencies, the ion’s motion gets excited, resulting in a reduced signal from the ROI. (a) shows the unexcited and excited ion respectively, the red square marks the ROI. (b) shows the averaged count-rate from the ROI as a function of frequency.

4.4. Summary
This chapter has described the apparatus used for trapping and cooling ions, and testing the theoretical work presented before. For the experimental setup consisting of: the trap, the electronics supplying the voltages for the trap, the vacuum and laser systems and the optical setup, the main speciﬁcations have been given. Then it has been shown, how the theoretical results were implemented into the experiment control software TrICS. Finally the measurement methods have been described.

5. Results

The following chapter contains the results of the simulations and the results of the experiments with the surface trap Bastille. Section 5.1 concentrates on the simulation results, beginning with the calculated trap models for the pseudopotential. Then the resulting voltage sets for trap control are given, and presented alongside with the corresponding potential shapes. Section 5.2 deals with the experimental results, where ion displacements and motional frequencies are measured as a function of t-
he multipole excitation strength. Finally the results are discussed.

5.1. Simulation results
The simulation results consist of three parts: The analysis of the RF pseudopotential is given in section 5.1.1. The DC trap control voltages, required to give the desired multipole potentials at the axial center of the trap, are given in section 5.1.2. The DC trap control voltages at diﬀerent points along the z-axis are presented in section 5.1.3.

5.1.1. Electric-potential analysis
Figure 5.1 shows an x-y cross section of the pseudopotential taken at z = 0 and a line plot of the potential along the y-axis (x = z = 0). At an RF voltage of 410 V the resulting radial trap frequencies are: ωx = ωy = 573 kHz. The trap depth is 0.15 eV.

0.3

1.8

1.8

0.25

1.6

1.6

1.4

0.2

1.4

1.2

0.15 1.2

y (mm) y (mm)

1
0.8
0.6 −0.6 −0.4 −0.2 0 0.2 0.4 0.6 x (mm)
(a)

0.1

1

0.8 0.05
0.6 0

0.1

0.2

0.3

0.4

potential (eV)

(b)

Figure 5.1.: Radial potential: (a) shows equipotential lines of the pseudopotential at z = 0. The lines are spaced by 0.01 eV. (b) shows a line plot of the potential along the y-axis.

38

5. Results

39

From a y-z cross section (cf. ﬁgure 5.2) it can be seen that the height of the RF
null varies from 0.75 mm to 0.92 mm over a range of 6 mm across the trap. This results in an angle of 1.5◦. The axial trap frequency due to the RF pseudopotential
alone is 12 kHz.

y (mm)

0.1 1.1

1

0.08

0.9

0.06

0.8

0.04

0.7 0.02
0.6

−3

−2

−1

0

1

2

3

z (mm)

Figure 5.2.: Axial potential: Equipotential lines of the pseudopotential, the lines are spaced by 0.003 eV

5.1.2. Trap control voltages at trap center
The following pages present the calculated voltages which are needed to generate multipole shaped potentials. They were obtained by the methods described in section 3.4. Here they are displayed graphically to aid visualization; in appendix 1 they are listed in tabular form. As a basic check that these voltages generate the desired potentials, simulations are carried out with these voltages applied to the corresponding DC electrodes and the RF electrode held at ground. Cross sections of the resulti-
ng potentials are plotted next to their residuals (diﬀerence between the achieved and the ideal multipole potentials). This is done for the three dipoles and ﬁve quadrupoles. For better comparison the constant oﬀset was subtracted.

40

5.1. Simulation results

Y1,1 =

3x 4π r

voltage (V)

20

0

−20 −40

10

9

5 4

11

3

8 7 6

z

2 1

x

y (mm)

1

0.95

100

0.9

50

0.85

0

0.8

−50

0.75

-100

-150 0.7
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

y (mm)

1 1.5

0.95

1

0.9

0.5

0.85

0

0.8

−0.5

−1 0.75
−1.5 0.7
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

1.5

0.1

100

0.1

1

0.05

50

0.05

0.5

0

0

0

0

z (mm)

−0.05

−50

−0.05

−0.5

z (mm)

−0.1

-100

−0.15

-150
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

−0.1 −0.15

−1
−1.5 −0.1 −0.05 0 0.05 0.1 0.15
x (mm)

y (mm)

1

1

0

0.95

100

0.95

−1

y (mm)

0.9

50

0.9

−2

−3

0.85

0

0.85

−4

0.8

−50

0.8

−5

0.75

-100

0.75

−6

−7

0.7 −0.15 −0.1 −0.05 0 0.05 0.1

-150

0.7 −0.15 −0.1 −0.05 0 0.05 0.1

z (mm)

z (mm)

Figure 5.3.: The top right ﬁgure shows a schematic representation of the voltages. Below, the left column shows cross sections of the resulting DC potentials. The right column shows the residuals of these potentials. The equipotential lines are orthogonal to the xaxis, meaning that the electric ﬁeld points in x-direction. The residuals increase with rising distance from the trap center.

5. Results

41

Y1,−1 =

3y 4π r

voltage (V)

0

−5

−10

−15

−20

10

5

9

4

z

3 2

11

8 7 6

1

x

1

0.95

100

0.9

50

0.85

0

0.8

-50

0.75

-100

-150 0.7
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

y (mm)

1 6
0.95 4
0.9 2
0.85
0 0.8
−2 0.75
−4 0.7
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

y (mm)

z (mm)

0.1

100

0.1

−1

−2

0.05

50

0.05

−3

0

0

0

−4

z (mm)

−0.05

-50

−0.05

−5

−0.1

-100

−0.1

−6

−0.15

-150
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

−0.15

−7
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

1

1

2

0.95

100

0.95

1

0.9

50

0.9

0.85

0

0.85

0

y (mm)

y (mm)

0.8

-50

0.8

−1

0.75

-100

0.75

−2

0.7 −0.15 −0.1 −0.05 0 0.05 0.1
z (mm)

-150

0.7 −0.15 −0.1 −0.05 0 0.05 0.1

z (mm)

Figure 5.4.: The top right ﬁgure shows a schematic representation of the voltages. Below, the left column shows cross sections of the resulting DC potentials. The right column shows the residuals of these potentials. Near the trap center the equipotential lines are orthogonal to the y-axis, meaning that the electric ﬁeld points in y-direction. In the x-y cross section it can be seen that with increasing distance from the trap center the equipotential lines are no longer perfectly parallel to the x-
-axis.

42

5.1. Simulation results

Y1,0 =

3z 4π r

voltage (V)

60

40

20

0

−20

−40

−60

−80

10

5

9

4 3

11

z

2

8 7 6

1

x

1
150 0.95
100 0.9
50 0.85
0 0.8
-50 0.75
-150 0.7
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

y (mm)

1

8

0.95

6

0.9

4

0.85

2

0 0.8
−2 0.75
−4
0.7 −0.1 −0.05 0 0.05 0.1 0.15 x (mm)

y (mm)

z (mm)

0.1 0.05
0 −0.05
−0.1 −0.15

150 100 50 0 -50 -150 −0.1 −0.05 0 0.05 0.1 0.15 x (mm)

z (mm)

0.1

4

0.05

2

0

0

−0.05

−2

−0.1 −0.15

−4
−6 −0.1 −0.05 0 0.05 0.1 0.15
x (mm)

y (mm)

1

1

4

150

0.95

0.95

3

100

2

0.9

0.9

1 50

0.85

0.85

0

y (mm)

0

−1

0.8

0.8

−2 -50

0.75

0.75

−3

-150

−4

0.7 −0.15 −0.1 −0.05 0 0.05 0.1
z (mm)

0.7 −0.15 −0.1 −0.05 0 0.05 0.1
z (mm)

Figure 5.5.: The top right ﬁgure shows a schematic representation of the voltages. Below, the left column shows cross sections of the resulting DC potentials. The right column shows the residuals of these potentials. Near the trap center the equipotential lines are orthogonal to the z-axis, meaning that the electric ﬁeld points in z-direction. In the x-z cross section it can be seen that with increasing distance from the trap center the equipotential lines are no longer perfectly parallel to the x-
-axis.

5. Results

43

Y2,2 =

15 1 x2−y2 4π 2 r2

voltage (V)

0

−2

−4

−6

−8

−10

10

5

4

z

3 2

11

9 8 7 6

1

x

y (mm)

1

12

0.95 7
0.9 2
0.85
−3 0.8

−8 0.75

0.7

−13

−0.1 −0.05 0 0.05 0.1 0.15

x (mm)

y (mm)

1 4

0.95 2

0.9

0

0.85

−2

0.8

−4

0.75

−6

0.7 −0.1 −0.05 0 0.05 0.1 0.15 x (mm)

z (mm)

12
0.1 7
0.05 2
0
−3 −0.05

−0.1

−8

−0.15

−13
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

z (mm)

0.1 0.05
0 −0.05
−0.1 −0.15

0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1 0 −0.1 −0.05 0 0.05 0.1 0.15 x (mm)

y (mm)

1

1

12

0.95

0.95

7

0.9

0.9

2

0.85

0.85

y (mm)

−3

0.8

0.8

0.75

−8

0.75

1.5 1 0.5 0 −0.5 −1 −1.5

0.7

−13

0.7

−0.15 −0.1 −0.05 0 0.05 0.1

−0.15 −0.1 −0.05 0 0.05 0.1

z (mm)

z (mm)

Figure 5.6.: The top right ﬁgure shows a schematic representation of the voltages. Below, the left column shows cross sections of the resulting DC potentials. The right column shows the residuals of these potentials. The equipotential line in the x-y cross section exhibit a quadrupole shape, with the axes of the quadrupole along the x and y direction respectively. From the other two cross sections it can be seen that the equipotential lines are parallel to the z-axis, which means that there is no -
ﬁeld component along the z-direction.

44

5.1. Simulation results

Y2,0 =

5 2z2−x2−y2

16π

r2

voltage (V)

20 0
−20 −40 −60 −80 −100

10

9

5 4

11

z

3 2 1

8 7 6
x

y (mm)

1 20
0.95 10
0.9
0 0.85
−10 0.8
−20 0.75
−30 0.7
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

y (mm)

1 10

0.95

5

0.9

0

0.85

−5

0.8

−10

0.75

−15

0.7

−20

−0.1 −0.05 0 0.05 0.1 0.15

x (mm)

z (mm)

0.1 0.05
0 −0.05
−0.1 −0.15

20
10
0
−10
−20
−30 −0.1 −0.05 0 0.05 0.1 0.15
x (mm)

1 20
0.95 10
0.9
0 0.85
−10 0.8
−20 0.75
−30 0.7 −0.15 −0.1 −0.05 0 0.05 0.1
z (mm)

y (mm)

z (mm)

2
0.1
1.5 0.05

0

1

−0.05 0.5
−0.1

−0.15

0
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

1
6 0.95
4
0.9 2

0.85

0

0.8

−2

0.75

−4

0.7

−6

−0.15 −0.1 −0.05 0 0.05 0.1

z (mm)

y (mm)

Figure 5.7.: The top right ﬁgure shows a schematic representation of the voltages. Below, the left column shows cross sections of the resulting DC potentials. The right column shows the residuals of these potentials. The equipotential lines in the z-y and x-z cross section exhibit a quadrupole shape. From the x-y cross section it can be seen that near the trap center the potential is ring shaped, as expected.

5. Results

45

Y2,−2 =

15 xy 4π r2

voltage (V)

20

0

−20

−40

10

5

4

11

z

3 2

9 8 7 6

1

x

y (mm)

1

0.95

7

0.9 2
0.85
−3 0.8

0.75

−8

0.7 −0.1 −0.05 0 0.05 0.1 0.15 x (mm)

y (mm)

1 1
0.95 0.5
0.9

0.85

0

0.8 −0.5
0.75
−1 0.7
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

z (mm)

0.1 7

0.05 2
0

−0.05

−3

−0.1

−8

−0.15

−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

1

0.95

7

0.9 2
0.85
−3 0.8

y (mm)

z (mm)

0.1 0.05
0 −0.05
−0.1 −0.15

2 1.5 1 0.5 0 −0.5 −1 −1.5 −2 −2.5 −0.1 −0.05 0 0.05 0.1 0.15 x (mm)

1
1 0.95

0.9 0
0.85

0.8

−1

y (mm)

0.75

−8

0.75

0.7 −0.15 −0.1 −0.05 0 0.05 0.1
z (mm)

−2
0.7 −0.15 −0.1 −0.05 0 0.05 0.1
z (mm)

Figure 5.8.: The top right ﬁgure shows a schematic representation of the voltages. Below, the left column shows cross sections of the resulting DC potentials. The right column shows the residuals of these potentials. In the x-y cross section the equipotential lines exhibit a quadrupole shape with the axes aligned along the (x +y)- and (x −y)-direction respectively. While showing perfect symmetry with respect to x = 0 the potential shape is less symmetric with respect to y = 0.85 mm. This eﬀect is -
stronger the bigger the distance from the trap center is, and can by explained by the geometry of the trap (The electrodes are perfectly symmetric with respect to x = 0 and lie all in the y = 0 plane).

46

5.1. Simulation results

Y2,−1 =

15 yz 4π r2

voltage (V)

50

0

−50

−100

5
z

4

3

2

10 11 1

98
x

7

6

y (mm)

1 12
0.95 7
0.9 2
0.85
-3 0.8
-8 0.75
-13 0.7
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

y (mm)

1

8

0.95

6

0.9

4

0.85

2

0.8

0

0.75

−2

0.7

−4

−0.1 −0.05 0 0.05 0.1 0.15

x (mm)

z (mm)

12

0.1

0.1

2

7

0.05

0.05

1

2

0

0

0

z (mm)

−0.05

-3 −0.05

−1

−0.1

-8

−0.1

−2

−0.15

-13
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

−0.15

−3
−0.1 −0.05 0 0.05 0.1 0.15 x (mm)

y (mm)

1

1

12

0.95

0.95

2

7

0.9

0.9

1

y (mm)

2

0.85

0.85

0

-3

0.8

0.8

−1

-8

0.75

0.75

−2

0.7 −0.15 −0.1 −0.05 0 0.05 0.1
z (mm)

-13

0.7

−0.15 −0.1 −0.05 0 0.05 0.1

z (mm)

Figure 5.9.: The top right ﬁgure shows a schematic representation of the voltages. Below, the left column shows cross sections of the resulting DC potentials. The right column shows the residuals of these potentials. In the z-y cross section the equipotential lines exhibit a quadrupole shape with the axes aligned along the (z + y)- and (z − y)-direction respectively. While showing perfect symmetry with respect to z = 0 the potential shape is less symmetric with respect to y = 0.85 mm. This eﬀect i-
s stronger the bigger the distance from the trap center is, and can by explained by the geometry of the trap (The electrodes are nearly symmetric with respect to z = 0 and lie all in the y = 0 plane).

5. Results

47

Y2,1 =

15 xz 4π r2

voltage (V)

5 0 −5 −10

10

9

5 4

11

3

8 7 6

z

2 1

x

y (mm)

1 10
0.95
5 0.9

0.85

0

0.8 −5
0.75 −10
0.7 −0.1 −0.05 0 0.05 0.1 0.15 x (mm)

y (mm)

1 2
0.95 1
0.9 0
0.85 −1
0.8 −2

0.75

−3

0.7 −0.1 −0.05 0 0.05 0.1 0.15 x (mm)

z (mm)

10 0.1
5 0.05

0

0

−0.05 −0.1
−0.15

−5
−10 −0.1 −0.05 0 0.05 0.1 0.15
x (mm)

z (mm)

0.1 0.05
0 −0.05
−0.1 −0.15

1.5 1 0.5 0 −0.5 −1 −1.5 −0.1 −0.05 0 0.05 0.1 0.15 x (mm)

1

1

1

10

0.95

0.95

0.9

5

0.9

0.85

0

0.85

0

y (mm)

y (mm)

0.8

0.8

−5

0.75

0.75

−10

0.7

0.7

−1

−0.15 −0.1 −0.05 0 0.05 0.1

−0.15 −0.1 −0.05 0 0.05 0.1

z (mm)

z (mm)

Figure 5.10.: The top right ﬁgure shows a schematic representation of the voltages. Below, the left column shows cross sections of the resulting DC potentials. The right column shows the residuals of these potentials. In the x-z cross section the equipotential lines exhibit a quadrupole shape with the axes aligned along the (x +z)- and (x −z)-direction respectively. In the other two cross sections no structure can be seen as expected and the residuals are very small. Thus the electric ﬁeld has no -
component along the y-direction.

48

5.1. Simulation results

5.1.3. Trap control voltages dependent on z position
All the calculations shown so for were done for the ion located at the geometrical center of the trap. It has been shown that the generated potentials have the desired shape only in a small area. Thus as the ion is shuttled along the z-axis, the calculations have to be adapted and the multipole expansion has to be carried out for a number of points along this axis. This is done over a range of 2.6 mm, stretching from the middle of electrodes 9 and 4 to the middle of electrodes 2 and 7. The spacing-
 between the points is 10 µm. Looking at the results for neighboring points, it can be seen that the voltages vary smoothly without any discontinuities. In ﬁgure 5.11 this behavior is shown using the example of the xdipole (Y1,1). From inspection of the electrode arrangement of the trap (cf. ﬁgure 3.2a) one would expect certain qualitative relationships to hold when creating an x-dipole: Opposite pairs through the z-y-plane (DC10 & DC5, DC9 & DC4 etc.) should be reﬂections of each other with respe-
ct to voltage, i.e.
DC10(z) = −DC5(z) DC9(z) = −DC4(z)
Opposite pairs through the x-y-plane (DC10 & DC6, DC9 & DC7 etc.) should be approximate reﬂections of each other with respect to the z-position, i.e.
DC10(z) ≃ DC6(−z) DC9(z) ≃ DC7(−z)
The imperfect reﬂection here is due to the broken symmetry of DC11 and the RF electrode. From ﬁgure 5.11 it can be seen that these intuitive expectations are well reproduced by the simulation.

voltage (V) voltage (V)
voltage (V)

30 15
0 −15 −30
−1

DC10 DC6

DC1

DC5

−0.5

0

0.5

1

z (mm)

30

30

DC4

DC 3

15

DC7

15

0

0

DC 11

−15
−30 −1

DC2

DC9

−0.5

0

0.5

1

z (mm)

−15
−30 −1

DC 8

−0.5

0

0.5

1

z (mm)

Figure 5.11.: Voltages needed to create an x-dipole for various positions on the z-axis.

5. Results

49

5.2. Experimental results
To verify the theoretical results experimentally a single ion is loaded into the trap and, as a function of the multipole excitation, displacements of the ion and trap frequencies are measured. The DC voltages used for trapping are listed in table 5.1. The RF voltage is 410 V.
Electrode DC1 DC2 DC3 DC4 DC5 Voltage 30.27 6.82 -0.10 3.11 36.10
Electrode DC6 DC7 DC8 DC9 DC10 DC11 Voltage 30.41 6.77 -0.13 2.68 36.03 1.89
Table 5.1.: Trapping voltages

5.2.1. Dipoles
In the experiment control software a master slider is used to vary the excitation strength of the x-dipole. The value of this master slider (M1) is read out and multiplied with the voltage set presented in the previous section (5.1). Then this scaled voltage set is passed to the output channels of the DAQ card and applied to the DC electrodes. For diﬀerent values of M1 the displacement of the ion in all three directions is measured. The results are plotted in ﬁgure 5.12. To ensure that the ion is -
well cooled along the entire range the laser beam was realigned as needed.
As expected the x-displacement increases linearly with increasing M1. The movement in the other directions is strongly suppressed: movement in the ydirection is suppressed by factor of 4, movement in z-direction is suppressed by factor of 15.

X

75

Y

Z

50

displacement (1m)

25

0

−25

−50 −0.02 −0.01

0

0.01 0.02 0.03 0.04

M1

Figure 5.12.: x-dipole: points are measured data, solid lines are linear ﬁts to the data.

50

5.2. Experimental results

The same approach is used for the y and z-dipole ﬁelds. The results are plotted in ﬁgures 5.13 and 5.14 respectively. For the y-dipole the y-displacement grows linearly with increasing M2, the suppression of the other movements is slightly weaker. The movement in x-direction is suppressed by a factor of -7, the movement in z-direction only by a factor of 3.

75

X

Y

50

Z

displacement (1m)

25

0

−25

−50

−0.03 −0.02 −0.01

0

0.01 0.02 0.03

M2

Figure 5.13.: y-dipole: points are measured data, solid lines are linear ﬁts to the data.

For the z-dipole the z-displacement also grows linearly with increasing M3, The movement in x-direction is suppressed by a factor of -50, the movement in ydirection by a factor of 20.

displacement (µm)

300

X

Y

200

Z

100

0

−100

−200

−300

−400

−0.01

−0.005

0

0.005

0.01

M3

Figure 5.14.: z-dipole: points are measured data, solid lines are linear ﬁts to the data.

5. Results

51

5.2.2. Quadrupole

In the current setup of Bastille, it is only possible to measure trap frequencies

in the x- and z-directions. Therefore the quadrupole Y2,0 =

5 2z2−x2−y2

16π

r2

is

chosen to test the method developed. The other quadrupoles either aﬀect only

one of the measurable frequencies or they cause a rotation of the principal axes.

Before the actual measurement is done, one needs to ensure that the quadrupole

to be applied is centered at the position of the ion (or alternatively, that the

ion’s position is at the quadrupole center). It was shown previously that the

simulations were done for a range of points on the z-axis. Thus one way to

center the quadrupole to the ion’s position is to choose the right simulation.

Alternatively the ion can be simply moved onto the desired (central) spot as

follows: With 4 ions in the trap the coeﬃcient M5 of the Y2,0 quadrupole is made

increasingly negative such that the axial potential becomes repulsive at a certain

moment. Then the ions are pushed away in either one or the other axial direction.

Iteratively the ions are moved using the z-dipole and then it is checked on which

side of the repulsive potential they are. Finally, if they are on the right spot,

decreasing of M5 causes the ion string to split in the middle, with two ions going

one way, and two going the other way. Then the ions are discarded from the trap,

a single ion is loaded and the frequency measurement is carried out as described

in section 4.3.3. Figure 5.15 shows the results.

700 650 600

frequency (kHz)

200

150

100

50

0 -0.04 -0.03 -0.02 -0.01 0.00
M5

0.01

0.02

0.03

0.04

Figure 5.15.: Trap frequency measurement: The lower curve corresponds to ωz the upper one to ωx. Besides the measured values (points with error bars), values obtained from a simulation using the experimental voltage values are plotted for comparison. The measured points were ﬁtted with two linear functions in order to determine the gradients.
In addition to the measurement results, trap frequency values obtained by simulations are plotted for comparison. For the axial frequency they agree to within 3%. Experimentally there is a ∼ 20% systematic uncertainty regarding the actual RF voltage. The RF voltage used for the simulations was chosen to ﬁt the

52

5.3. Discussion of the results

experimental data accordingly. The inferred value of 410 V is consistent with the experimental value of 500 V ± 100 V. From that an estimation of the division ratio R of the capacitive divider can be made:

R

=

410V 5V

= 82

where 5 V is the voltage we measured after the divider.

(5.1)

Looking at the form of the applied ﬁeld, Y2,0 =

5 16π

2z2

−x2−y2 r2

,

it

can

be

seen

that as the coeﬃcient M5 changes, the rate of change of ωz should be −2 times

as high as the rate of change of ωx:

dωx dM5

=

−2 ×

dωz dM5

From linear ﬁts to the measured values the following rates are obtained:

(5.2)

dωx dM5

=

1059 ±

9

dωz = −2083 ± 42 dM5

Thus the ratio of these two rates is:

(5.3) (5.4)

dωz dM5

:

dωx dM5

=

−1.96

±

0.04

(5.5)

5.3. Discussion of the results

The theoretical results show that the multipole method works as expected. The method gives rise to electric ﬁelds which exhibit the shape of either dipoles or quadrupoles in a small area around the trap center. The larger the distance from the center, the bigger are the residuals. This is to be expected, as the multipole expansion only holds for small distances from the trap center. In addition, if the expansion is carried out for multiple points along the z-axis, the results change without discon-
tinuities between the points.
These theoretical results are in principle conﬁrmed in the experiments. For the dipole ﬁelds the ion moves linearly with the strength of the applied dipole. However, these movements are not completely decoupled from each other. Especially for the case of the y-dipole, the ion moves by a notable amount in the two unwanted directions. This could be for the following reasons:

• The model of the trap does not resemble the real trap suﬃciently well. The trap was modeled to be two-dimensional, with rectangular electrodes and without any dielectrics. However the real trap has a ﬁnite thickness, the electrodes are rounded down, the trap is mounted onto a dielectric substrate and additionally a pair of bond wires is connected to each electrode coming from above the trap, which also inﬂuences the potential.

5. Results

53

• Numerical errors in the analysis. Both the BEM calculations and the matrix inversion used for the multipole method are numerical methods and therefore error-prone.
• Inﬂuence of the pseudopotential. The multipole method only takes the DC electrodes into account. If the ion is not located exactly at the RF null and a DC dipole ﬁeld is applied which does not point radially towards, or away from the center, the movement of the ion is governed by a combination of DC potential and RF potential.
The quadrupole measurement showed that the applied ﬁeld alters the motional trap frequencies in the predicted manner. As the strength of the quadrupole changes, ωx and ωz change linearly. The measured ratio of the gradients agrees with the expected value.

6. Conclusion and outlook
The experiments with trapped ions performed in our group require the highest possible control over the ions’ internal and external degrees of freedom. This thesis is concerned with improving the control over the classical motion of an ion in a new generation of traps, namely in surface traps. The classical motion of the ion is determined by six parameters: the three coordinates of the ion’s position x, y, z and the three motional frequencies of the ion ωx, ωy and ωz.
In Paul traps ions are trapped by electric ﬁelds. Control over the ion’s motion therefore requires control over these ﬁelds. One way to gain control over the parameters mentioned above (x, y, z, ωx, ωy and ωz,) is to generate electric ﬁelds which are shaped as either dipoles or quadrupoles. As a ﬁrst step to achieve this, the electric potential generated by the electrodes of the trap was modeled by numerical simulations. Then a multipole expansion was carried out for the potential due to each indi-
vidual electrode. Summing up the weighted contributions of all electrodes gives the multipole moments of the total potential. As it is desired that this total potential only contains one multipole moment, the main task is the following: To ﬁnd out which voltages have to be applied to the DC electrodes, such that all of the total multipole moments but one are equal to zero. The individual moments of the diﬀerent electrodes should cancel each other out. To ﬁnd these voltages an underdetermined linea-
r system of equations needs to be solved, which was done numerically using MATLAB.
To verify this method experimentally, its results are applied to a surface trap which is in use in our group called Bastille. After the installation of the experimental setup, measurements of ion displacements and motional frequencies as a function of multipole excitation strength were performed. The results of these measurements agree well with the theoretical results. In conclusion it can be said that the developed method works and that it signiﬁcantly facilitates the control over the ion’s moti-
on.
Beyond this, there are a number of features which could be implemented to further improve the performance and usability:
• Currently the user has to read out the ion’s position manually and to choose the corresponding simulation. To improve usability, the imaging software could be used to read out the actual position and then automatically choose the right simulation. Currently, this is not possible as diﬀerent programs are used for imaging and voltage output. However, the new experiment control software (TrICS) which is currently developed within our group will in the future include both features in one program, th-
us giving the possibility to implement this idea.
54

6. Conclusion and outlook

55

• With the current setup only a rough micromotion compensation is possible. Higher precision could be reached with the RF correlation technique [46]. This technique usually requires three non-coplanar laser beams at the ﬂuorescence detection transition, in order two compensate for micromotion in all directions. However, in a surface trap the geometry prevents the eﬃcient compensation in both radial directions. Nevertheless, recently a modiﬁcation of this technique was presented, which makes it sui-
table for surface traps [86]. With better micromotion compensation the eﬀect of the applied DC multipoles could be studied with less inﬂuence of the RF pseudopotential.
• Instead of using CPO to simulate the electric potentials, one could use a diﬀerent BEM package where the fast multipole algorithm [71] is implemented. This would cause a substantial reduction of computational eﬀort and therefore would allow the accuracy to be increased.
• Diﬀerences between the modeled trap and the real trap are most likely a limiting factor. Therefore a better veriﬁcation of the presented method could be done when applied to a trap which is easier to model. This means a trap whose electrodes are not rounded down, and where the gaps between the electrodes are small compared to the electrode dimensions and to the ion-electrode distance. Besides being easier to model, such “gapless” traps are also easier to fabricate and they are already in use in -
other experimental setups within our group. Furthermore instead of connecting the electrodes with wires from above, the voltages could be supplied through vias from below the plane of the trap, thereby reducing the inﬂuence of the wires on the potential at the trapping zone.

Appendices
56

A. Trap control voltages
The results of the trap-control calculations presented graphically in section 5.1.2 are given here in tabular form:

Electrode DC1 DC2 DC3 DC4 DC5 DC6 DC7 DC8 DC9 DC10 DC11

Voltage (V) -10.75 -4.72 29.30 -4.90 -10.80 11.69 4.52 -30.31 4.69 11.76 -0.01

Table A.1.: Voltages needed to create Y1,1

Electrode DC1 DC2 DC3 DC4 DC5 DC6 DC7 DC8 DC9 DC10 DC11

Voltage (V) -63.81 55.39 -0.82 -53.69 61.26 -61.01 56.34 -0.82 -54.68 58.61 0.03

Table A.3.: Voltages needed to create Y1,0

Electrode DC1 DC2 DC3 DC4 DC5 DC6 DC7 DC8 DC9 DC10 DC11

Voltage (V) -17.36 -16.41 -12.31 -17.19 -13.11 -17.99 -17.26 -11.36 -18.02 -13.87 -4.85

Table A.2.: Voltages needed to create Y1,−1

Electrode DC1 DC2 DC3 DC4 DC5 DC6 DC7 DC8 DC9 DC10 DC11

Voltage (V) -8.45 -7.18 -6.65 -7.81 -4.93 -9.29 -8.05 -5.19 -8.68 -5.88 -4.29

Table A.4.: Voltages needed to create Y2,2

57

58

Electrode DC1 DC2 DC3 DC4 DC5 DC6 DC7 DC8 DC9 DC10 DC11

Voltage (V) 4.36 -9.84
-89.08 -11.01 13.89
4.78 -11.21 -89.36 -12.34 14.04 -13.02

Table A.5.: Voltages needed to create Y2,0

Electrode DC1 DC2 DC3 DC4 DC5 DC6 DC7 DC8 DC9 DC10 DC11

Voltage (V) -75.01 37.91 -0.79 -36.18 72.11 -72.35 38.26 -0.78 -36.58 69.61 0.02

Table A.7.: Voltages needed to create Y2,−1

Electrode DC1 DC2 DC3 DC4 DC5 DC6 DC7 DC8 DC9 DC10 DC11

Voltage (V) -20.13 -18.34 33.66 -18.59 -20.18 21.47 17.84 -35.14 18.07 21.64 -0.07

Table A.6.: Voltages needed to create Y2,−2

Electrode DC1 DC2 DC3 DC4 DC5 DC6 DC7 DC8 DC9 DC10 DC11

Voltage (V) 2.33 7.50 -0.05 -7.49 -2.33 -1.96 -7.94 0.05 7.92 1.97 0.00

Table A.8.: Voltages needed to create Y2,1

B. Source code

B.1. Trap-control voltage calculation
The calculation of the trap-control voltages are performed in MATLAB. The starting point is a data structure generated by CPO containing the following: Vectors x, y and z which deﬁne a grid and the simulated potential of each electrode, calculated at each grid-point. To cover a range of possible axial ion positions, several such structures are generated at diﬀerent axial position. The spacings are chosen such, that the diﬀerent structures have one grid-point overlap. For the expansion in spherical-
 harmonics, the ion needs to be at the origin of the potential structure. Therefore in order to be able to make this expansion for arbitrary axial positions, the next step is to use two neighboring structures to generate a new data structure which is centered at a particular position. This is done for a given set of positions via the script centering data.m. Then the script multipolemoments.m calculates the multipole matrix by expanding the potential of each electrode in spherical harmonics. Final-
ly the trap-control voltages are obtained by calculating the pseudoinverse of the multipole matrix in the script multipolecontrol.m.

1 function data centered = centering data ( datapath , project name , position , NofGrids ,N, Zlim )
2 % generate the data structure for trap operation around axial position 3 % centered at ” position ”. the consecutive data srtuctures have overlapping 4 % f i r s t and l a s t poi n t s , i . e . p t I . Z( l a s t ) = p t I +1.Z( f i r s t ) 5 % Adam J u l y 2010 b a s e d on Nikos

6

7 I = find ( Zlim>p o s i t i o n , 1 , ’ f i r s t ’ ) −1; %% t h e Ion s i t s i n d a t a s t r u c t u r e #I

8 totNofGR = 2∗ NofGrids+1;

9 i f ( I <1) | | ( I>totNofGR ) ,

10

fprintf( ’ Invalid ion position . Quitting .\n ’ ) ;

11

return

12 end

13 d = load ( s p r i n t f ( ’%s%s%i . mat ’ , datapath , p r o j e c t n a m e , I ) ) ; 14 d a t a 0 = d . data ; 15 S = s i z e ( d a t a 0 . Z , 1 ) ; 16 S2 = c e i l ( S / 2 ) ; 17 S3 = f l o o r ( S / 2 ) ; 18 K = find ( d a t a 0 . Z>=p o s i t i o n , 1 , ’ f i r s t ’ ) −1;

19

20 i f ( i s s c a l a r (K) == f a l s e )

21

K = S;

22 end

23

24 i f (K+S3<S )&&(K−S3 >1)

25

K1 = K−S3 ;

26

K2 = K+S3 ;

27

data1 = data0 ;

28

K3 = 2 ;

29

K4 = 1 ;

30

data2 = data0 ;

31 e l s e i f (K−S3<=1)&&( I ==1)

32

K1 = 1 ;

33

K2 = S ;

34

d = load ( s p r i n t f ( ’%s%s1 . mat ’ , datapath , p r o j e c t n a m e ) ) ;

59

60

B.1. Trap-control voltage calculation

35

data1 = d . data ;

36

K3 = 2 ;

37

K4 = 1 ;

38

data2 = data1 ;

39 e l s e i f (K−S3<=1)&&(I >1)

40

K1 = S+K−S2 ;

41

K2 = S −1;

42

d = load ( s p r i n t f ( ’%s%s%i . mat ’ , datapath , p r o j e c t n a m e , I −1) ) ;

43

data1 = d . data ;

44

K3 = 1 ;

45

K4 = K+S3 ;

46

d = load ( s p r i n t f ( ’%s%s%i . mat ’ , datapath , p r o j e c t n a m e , I ) ) ;

47

data2 = d . data ;

48 e l s e i f (K+S3>=S )&&( I==totNofGR )

49

K1 = 1 ;

50

K2 = S ;

51

d = load ( s p r i n t f ( ’%s%s%i . mat ’ , datapath , p r o j e c t n a m e , totNofGR ) ) ;

52

data1 = d . data ;

53

K3 = 2 ;

54

K4 = 1 ;

55

data2 = data1 ;

56 e l s e i f (K+S3>=S )&&(I<totNofGR )

57

K1 = K−S3 ;

58

K2 = S ;

59

d = load ( s p r i n t f ( ’%s%s%i . mat ’ , datapath , p r o j e c t n a m e , I ) ) ;

60

data1 = d . data ;

61

K3 = 2 ;

62

K4 = K+S2−S ;

63

d = load ( s p r i n t f ( ’%s%s%i . mat ’ , datapath , p r o j e c t n a m e , I +1) ) ;

64

data2 = d . data ;

65 e l s e

66

fprintf ( ’ Problem with creating data .\n ’ ) ;

67

return ;

68 end

69

70 f o r i = K1 : K2

71

d a t a c e n t e r e d . Z ( i −K1+1) = d a ta 1 . Z ( i ) ;

72

d a t a c e n t e r e d . Vrf ( : , : , i −K1+1) = d a ta 1 . Vrf ( : , : , i ) ;

73

d a t a c e n t e r e d . E r f ( : , : , i −K1+1) = d a ta 1 . E r f ( : , : , i ) ;

74

f o r j =1:N;

75

d a t a c e n t e r e d .VDC( j , : , : , i −K1+1) = eval ( s p r i n t f ( ’ dat a1 . Vdc%i ( : , : , i ) ’

,j));

76

end

77 end

78

79 f o r i = K3 : K4

80

d a t a c e n t e r e d . Z ( i −K3+max(K2−K1, −1) +2) = d a ta 2 . Z ( i ) ;

81

d a t a c e n t e r e d . Vrf ( : , : , i −K3+max(K2−K1, −1) +2) = d a ta 2 . Vrf ( : , : , i ) ;

82

d a t a c e n t e r e d . E r f ( : , : , i −K3+max(K2−K1, −1) +2) = d a ta 2 . E r f ( : , : , i ) ;

83

for j = 1:N;

84

d a t a c e n t e r e d .VDC( j , : , : , i −K3+max(K2−K1, −1) +2) = eval ( s p r i n t f ( ’ dat a2

. Vdc%i ( : , : , i ) ’ , j ) ) ;

85

end

86 end

87

88 d a t a c e n t e r e d . Z = d a t a c e n t e r e d . Z ’ ; 89 d a t a c e n t e r e d .X = d a t a 1 .X; 90 d a t a c e n t e r e d .Y = d a t a 1 .Y; 91 d a t a c e n t e r e d . grid = [ min( d a t a c e n t e r e d .X) min( d a t a c e n t e r e d .Y) min(
data centered .Z) data1 . grid (4) data1 . grid (5) data1 . grid (6) ] ; 92 plot ( d a t a c e n t e r e d . Z , ’−−∗ ’ ) ; t i t l e ( ’ g e t t h e d a t a .m: t h i s i s t o c h e c k t h a t t h e
data was generated s u c c e s f u l l y . ’ ) 93 end

Listing B.1: centering data.m: Generation of a data structure centered around the ion’s position.

B. Source code

61

1 function datout = multipolemoments ( data , N, p o s i t i o n , L)

2 % function datout = multipolemoments ( data ,N, position ,L)

3 % L is the order of expansion

4 % N i s t h e Number o f DC e l e c t r o d e s

5 % A l s o r e t u r n a f i e l d d a t o u t .M, which c o n t a i n s t h e

6 % multipole coefficients for all electrodes .

7%

( multipoles

e l e c t r o d e s −>

)

8 %M= (

V

)

9%

(

)

10 % d a t a i s t h e cpo s i m u l a t i o n d a t a s t r u c t u r e .

11 % p o s i t i o n i s t h e a x i a l p o s i t i o n where t h e i o n s i t s .

12 % Adam June 2010 b a s e d on Nikos June 2009

13

14 d a t o u t = data ; 15 X = normalize( data .X) ; 16 Y = normalize( data .Y) ; 17 Z = normalize( data . Z ) ;

18

19 [ y x z ] = meshgrid(Y, X, Z ) ; 20 [ Xrf Yrf Z r f ] = exactsaddle ( data . Vrf , X, Y, Z , 2 , p o s i t i o n ) ; 21 [ I r f J r f Krf ] = findsaddle ( data . Vrf , X, Y, Z , 2 , p o s i t i o n ) ; 22 Qrf = spherharmxp( data . Vrf , Xrf , Yrf , Z r f , L , X, Y, Z ) ; 23 d a to u t . Qrf = 2 ∗ [ Qrf ( 8 ) ∗3 Qrf ( 5 ) /2 Qrf ( 9 ) ∗6 −Qrf ( 7 ) ∗3 −Qrf ( 6 ) ∗ 3 ] ; 24 d a to u t . t h e t a r f = 4 5 ∗ ( sign ( Qrf ( 9 ) ) ) −90∗ atan ( ( 3 ∗ Qrf ( 8 ) ) / (3 ∗ Qrf ( 9 ) ) ) / pi ;

25

26 %u s e d f o r r e o r d e r i n g and r e s c a l l i n g o f t h e c o e f f i c i e n t s 27 c = [ 1 0 0 0 0 0 0 0 0 ; . . .

28

0 0 1 0 0 0 0 0 0; . . .

29

0 0 0 1 0 0 0 0 0; . . .

30

0 −1 0 0 0 0 0 0 0 ; . . .

31

0 0 0 0 0 0 0 6 0; . . .

32

0 0 0 0 1 0 0 0 0; . . .

33

0 0 0 0 0 0 0 0 12; . . .

34

0 0 0 0 0 0 −6 0 0 ; . . .

35

0 0 0 0 0 −6 0 0 0 ] ;

36

37 f o r i = 1 :N

38

Vdc ( : , : , : ) = data .VDC( i , : , : , : ) ;

39

Q = spherharmxp( Vdc , Xrf , Yrf , Z r f , L , X, Y, Z ) ;

40

M1 ( : , i ) = Q( 1 : ( L+1) ˆ 2 ) ;

41 end

42

43 s i z e (M1) ; 44 d a t o u t .Q = Q; 45 %r e o r d e r i n g and r e s c a l l i n g o f t h e c o e f f i c i e n t s 46 d a to u t .M = vertcat ( c ∗M1 ( 1 : 9 , : ) ,M1( 1 0 : ( L+1) ˆ 2 , : ) ) ;

47

48 %%%%%%%%%%%%%%%%%%% A u x i l i a r y f u n c t i o n s

49

50 function out = normalize( i n ) 51 % k e e p o n l y t h e f i r s t 4 s i g n i f i c a n t d i g i t s o f t h e i n c r e m e n t i n v e c t o r 52 % ” i n ” 53 dr = ( i n ( s i z e ( in , 1 ) )−i n ( 1 ) ) / ( s i z e ( in , 1 ) −1) ;

54 p = 0 ; c n t = 0 ;

55 while ( c n t == 0 )

56

dr = 10∗ dr ;

57

cnt = fix ( dr ) ;

58

p = p+1;

59 end

60 out = roundn( in ,−p−4) ;

Listing B.2: multipolemoments.m: Calculation of multipole moments.

62

B.1. Trap-control voltage calculation

1 function f=spherharmxp(V, Xc , Yc , Zc , Order , Xe , Ye , Ze )

2 % f u n c t i o n f=spherharmxp (V, Xc , Yc , Zc , Order , Xe , Ye , Ze ) ;

3 % This function expands the p o te n tia l V in ssphe ric al harmonics , i . e . :

4 % V=C00∗Y00+C10∗Y10+C11c∗Y11c+C11s ∗ Y11s + . . .

5 % he r e t h e Ynm ar e c hos e n t o be r e a l , and s u b s c r i p t c c o r r e s p o n d s t o

6 % c os (m∗ p h i ) dependence , w h i l e s i s s i n (m∗ p h i ) . The e x pan s i on i s c a r r i e d up

7 % to multipoles of order Order .

8 % The i n d i c e s i n V a r e V( i , j , k )<−> V( x , y , z ) .

9 % Xc , Yc , Zc ar e t h e c o o r d i n a t e s o f t h e c e n t e r o f t h e m u l t i p o l e s .

10 % Order i s t h e o r d e r o f t h e e x p a n s i o n

11 % Xe , Ye , Ze a r e t h e v e c t o r s t h a t d e f i n e t h e g r i d i n t h r e e d i r e c t i o n s

12 % The f u n c t i o n r e t u r n s t h e c o e f f i c i e n t s i n t h e o r d e r : [ C00 C10 C11c C11s ] ’

13 % These c o r r e s p o n d t o t h e m u l t i p o l e s i n c a r t e s i a n c o o r d i n a r e s :

14 % [ c z −x −y ( zˆ2−xˆ2/2−y ˆ2/2) −3 z x −3y z 3 xˆ2−3y ˆ2 6 xy ]

15 % 1 2 3 4

5

6

7

8

9

16 % Nikos January 2009

17

18 s = s i z e (V) ; 19 nx = s ( 1 ) ; 20 ny = s ( 2 ) ; 21 nz = s ( 3 ) ; 22 [ y x z ] = meshgrid( Ye−Yc , Xe−Xc , Ze−Zc ) ; 23 x1 = reshape ( x , 1 , nx ∗ny ∗ nz ) ; 24 y1 = reshape ( y , 1 , nx ∗ny ∗ nz ) ; 25 z1 = reshape ( z , 1 , nx ∗ny ∗ nz ) ; 26 r = sqrt ( x1 .ˆ2+ y1 .ˆ2+ z1 . ˆ 2 ) ; r t = sqrt ( x1 .ˆ2+ y1 . ˆ 2 ) ; 27 t h e t a = atan2( r t , z1 ) ;

28 p h i = atan2( y1 , x1 ) ; 29 s c a l e = max(max(max( r ) ) ) ; 30 r = r / s c a l e ;

31

32 % make t h e s p h e r i c a l harmonic m a t r i x i n s e q u e n c e o f [ Y00 Y10 Y11c Y11s 33 % Y20 Y21c Y21s . . . ]

34

35 N = nx∗ ny∗ nz ; 36 Q = ( 1 : N) ’ ;

37 Q( : ) = 1 ;

38

39 f o r n = 1 : Order

40

p = legendre (n , cos( theta ) ) ;

41

c = r . ˆ n . ∗ p ( 1 , : ) ; c=c ’ ; Q=horzcat (Q, c ) ;

42

f o r m=2:n+1

43

c = r . ˆ n . ∗ p (m, : ) . ∗ cos ( (m−1)∗ p h i ) ; c=c ’ ; Q=horzcat (Q, c ) ;

44

s = r . ˆ n . ∗ p (m, : ) . ∗ s i n ( (m−1)∗ p h i ) ; s=s ’ ; Q=horzcat (Q, s ) ;

45

end ;

46 end ;

47

48 W = reshape (V, 1 , nx∗ ny∗ nz ) ’ ; 49 % n u m e r i c a l l y i n v e r t 50 f = Q\W;

51

52 % r e s c a l e t o o r i g i n a l u n i t s 53 i = 1 ;

54 f o r n = 1 : Order

55

f o r m = 1 : 2 ∗ n+1

56

i = i +1;

57

f ( i ) = f ( i )/ scale ˆ(n) ;

58

end

59 end

Listing B.3: spherharmxp.m: Expansion in spherical harmonics.

B. Source code

63

1 function datout = multipolecontrol ( data ) 2 % function datout = multipolecontrol ( data ) 3 % r e t u r n a 8xN f i e l d d a t o u t .C w i t h t h e l i n e a r c o m b i n a t i o n s o f t r a p 4 % e l e c t r o d e v o l t a g e s t h a t g i v e 1 V/mm, or 1 V/mmˆ2 o f t h e m u l t i p o l e number 5 % ii . 6 % dataout .C 7 % The orde r o f m u l t i p o l e c o e f f i c i e n t s i s : 8 % 1/r0 ˆ [ x y z ] and 9 % 1/ r0 ˆ2∗ [ ( xˆ2−y ˆ2) /2 (2 zˆ2−xˆ2−y ˆ2) /2 xy /2 y z /2 x z /2 ] ,-
 where r0 i s 1 mm 10 % ( u n l e s s r e s c a l i n g i s a p p l i e d )

11

12 d a t o u t = data ;

13 SIunits ; 14 M = data .M; 15 Mt = vertcat (M( 2 : 9 , : ) ) ;

16

17 f o r i i =1:8

18

Mf = zeros ( 8 , 1 ) ;

19

Mf( i i ) = 1 ;

20

PP = pinv (Mt) ∗Mf ;

21

C( i i , : ) = PP ’ ;

22 end

23

24 d a t o u t . C = C ’ ;

Listing B.4: multipolecontrol.m: Calculation of trap control voltages out of the multipole matrix.

64

B.2. Implementation in TrICS

B.2. Implementation in TrICS
The experiment control software used in this project is written in C++. The implementation of the multipole method into TrICS is done in the ﬁle channelprocessinghandler.cpp according to the points described in section 4.2. Each of the 11 DC electrodes is connected to a analog ouput channel of the DAQ card. To each of these channels a slave slider is assigned. This enables one to adjust each channel individually and to control each slave channel via master sliders. Master sliders are not assigned -
to hardware output channels, they only control the slave sliders. The following code snippet demonstrates this behavior using the example of the x-dipole which is controlled by the master slider M 1. The value of each slave slider is read in as well as the change of the value of the master slider M 1 (called oﬀset). This oﬀset is multiplied with the corresponding voltage value taken from the vector v1 and added to the old slave value. Now it needs to be checked whether the new values are inside th-
e range of the DAQ card. This is done via the subroutine OutOfRangeCheck and the boolean variable OutOfRange. Then the new values are written to either the output channels or to temporary variables respectively.

1 i f ( m a s t e r I d == ”M1” ) {

2

s t d : : s t r i n g s l a v e Id D C 1= ”DC01” ;

3

s t d : : s t r i n g s l a v e Id D C 2= ”DC02” ;

4

s t d : : s t r i n g s l a v e Id D C 3= ”DC03” ;

5

s t d : : s t r i n g s l a v e Id D C 4= ”DC04” ;

6

s t d : : s t r i n g s l a v e Id D C 5= ”DC05” ;

7

s t d : : s t r i n g s l a v e Id D C 6= ”DC06” ;

8

s t d : : s t r i n g s l a v e Id D C 7= ”DC07” ;

9

s t d : : s t r i n g s l a v e Id D C 8= ”DC08” ;

10

s t d : : s t r i n g s l a v e Id D C 9= ”DC09” ;

11

s t d : : s t r i n g s l a v e Id D C 1 0=”DC10” ;

12

s t d : : s t r i n g s l a v e Id D C 1 1=”DC11” ;

13

14

double slaveValue DC1 = 0 . 0 ;

15

double slaveValue DC2 = 0 . 0 ;

16

double slaveValue DC3 = 0 . 0 ;

17

double slaveValue DC4 = 0 . 0 ;

18

double slaveValue DC5 = 0 . 0 ;

19

double slaveValue DC6 = 0 . 0 ;

20

double slaveValue DC7 = 0 . 0 ;

21

double slaveValue DC8 = 0 . 0 ;

22

double slaveValue DC9 = 0 . 0 ;

23

double slaveValue DC10 = 0 . 0 ;

24

double slaveValue DC11 = 0 . 0 ;

25

26

i f ( isMasterSlaveCandidate ( masterId , slaveId DC1 , srcChannels ,

slaveValue DC1)

27

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id , slaveId DC2 , s r c C h a n n e l s ,

slaveValue DC2)

28

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id , slaveId DC3 , s r c C h a n n e l s ,

slaveValue DC3)

29

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id , slaveId DC4 , s r c C h a n n e l s ,

slaveValue DC4)

30

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id , slaveId DC5 , s r c C h a n n e l s ,

slaveValue DC5)

31

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id , slaveId DC6 , s r c C h a n n e l s ,

slaveValue DC6)

32

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id , slaveId DC7 , s r c C h a n n e l s ,

slaveValue DC7)

33

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id , slaveId DC8 , s r c C h a n n e l s ,

B. Source code

65

slaveValue DC8)

34

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id , slaveId DC9 , s r c C h a n n e l s ,

slaveValue DC9)

35

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id , s l a v e Id D C 1 0 , s r c C h a n n e l s ,

slaveValue DC10)

36

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id , s l a v e Id D C 1 1 , s r c C h a n n e l s ,

slaveValue DC11) ){

37

38

double newValue DC1 ;

39

double newValue DC2 ;

40

double newValue DC3 ;

41

double newValue DC4 ;

42

double newValue DC5 ;

43

double newValue DC6 ;

44

double newValue DC7 ;

45

double newValue DC8 ;

46

double newValue DC9 ;

47

double newValue DC10 ;

48

double newValue DC11 ;

49

50

i f ( OutOfRange ) {

51

52

newValue DC1 = ( voltTemp DC1 +o f f s e t ∗v1 [ 0 ] ) ;

53

newValue DC2 = ( voltTemp DC2 +o f f s e t ∗v1 [ 1 ] ) ;

54

newValue DC3 = ( voltTemp DC3 +o f f s e t ∗v1 [ 2 ] ) ;

55

newValue DC4 = ( voltTemp DC4 +o f f s e t ∗v1 [ 3 ] ) ;

56

newValue DC5 = ( voltTemp DC5 +o f f s e t ∗v1 [ 4 ] ) ;

57

newValue DC6 = ( voltTemp DC6 +o f f s e t ∗v1 [ 5 ] ) ;

58

newValue DC7 = ( voltTemp DC7 +o f f s e t ∗v1 [ 6 ] ) ;

59

newValue DC8 = ( voltTemp DC8 +o f f s e t ∗v1 [ 7 ] ) ;

60

newValue DC9 = ( voltTemp DC9 +o f f s e t ∗v1 [ 8 ] ) ;

61

newValue DC10= ( voltTemp DC10+o f f s e t ∗ v1 [ 9 ] ) ;

62

newValue DC11= ( voltTemp DC11+o f f s e t ∗ v1 [ 1 0 ] ) ;

63

}

64

else{

65

66

newValue DC1 = ( slaveValue DC1 +o f f s e t ∗v1 [ 0 ] ) ;

67

newValue DC2 = ( slaveValue DC2 +o f f s e t ∗v1 [ 1 ] ) ;

68

newValue DC3 = ( slaveValue DC3 +o f f s e t ∗v1 [ 2 ] ) ;

69

newValue DC4 = ( slaveValue DC4 +o f f s e t ∗v1 [ 3 ] ) ;

70

newValue DC5 = ( slaveValue DC5 +o f f s e t ∗v1 [ 4 ] ) ;

71

newValue DC6 = ( slaveValue DC6 +o f f s e t ∗v1 [ 5 ] ) ;

72

newValue DC7 = ( slaveValue DC7 +o f f s e t ∗v1 [ 6 ] ) ;

73

newValue DC8 = ( slaveValue DC8 +o f f s e t ∗v1 [ 7 ] ) ;

74

newValue DC9 = ( slaveValue DC9 +o f f s e t ∗v1 [ 8 ] ) ;

75

newValue DC10= ( s l a v e V a l u e D C 1 0+o f f s e t ∗ v1 [ 9 ] ) ;

76

newValue DC11= ( s l a v e V a l u e D C 1 1+o f f s e t ∗ v1 [ 1 0 ] ) ;

77

}

78

79

i f ( ! OutOfRangeCheck ( newValue DC1 , newValue DC2 , newValue DC3 ,

newValue DC4 , newValue DC5 , newValue DC6 , newValue DC7 ,

newValue DC8 , newValue DC9 , newValue DC10 , newValue DC11 ) )

80

{

81

OutOfRange=f a l s e ;

82

destChannels . setChannelValue ( slaveId DC1 , newValue DC1 ) ;

83

destChannels . setChannelValue ( slaveId DC2 , newValue DC2 ) ;

84

destChannels . setChannelValue ( slaveId DC3 , newValue DC3 ) ;

85

destChannels . setChannelValue ( slaveId DC4 , newValue DC4 ) ;

86

destChannels . setChannelValue ( slaveId DC5 , newValue DC5 ) ;

87

destChannels . setChannelValue ( slaveId DC6 , newValue DC6 ) ;

88

destChannels . setChannelValue ( slaveId DC7 , newValue DC7 ) ;

89

destChannels . setChannelValue ( slaveId DC8 , newValue DC8 ) ;

90

destChannels . setChannelValue ( slaveId DC9 , newValue DC9 ) ;

91

destChannels . setChannelValue ( slaveId DC10 , newValue DC10) ;

92

destChannels . setChannelValue ( slaveId DC11 , newValue DC11) ;

93

}

94

else

66

B.2. Implementation in TrICS

95

{

96

OutOfRange=true ;

97

voltTemp DC1 = newValue DC1 ;

98

voltTemp DC2 = newValue DC2 ;

99

voltTemp DC3 = newValue DC3 ;

100

voltTemp DC4 = newValue DC4 ;

101

voltTemp DC5 = newValue DC5 ;

102

voltTemp DC6 = newValue DC6 ;

103

voltTemp DC7 = newValue DC7 ;

104

voltTemp DC8 = newValue DC8 ;

105

voltTemp DC9 = newValue DC9 ;

106

voltTemp DC10= newValue DC10 ;

107

voltTemp DC11= newValue DC11 ;

108

}

109

}

110 }

Listing B.5: Code snippet of the ﬁle ”channelprocessinghandler.cpp” which changes the values of the 11 slave slider depending to the change of the master slider M1

1 int IQChannelProcessorHandler : : OutOfRangeCheck ( double v1 , double v2 , double

v3 , double v4 , double v5 , double v6 , double v7 , double v8 , double v9 , double

v10 , double v11 ) 2{

3

int i ;

4

v e c t o r <double> v ;

5

v . push back ( v1 ) ;

6

v . push back ( v2 ) ;

7

v . push back ( v3 ) ;

8

v . push back ( v4 ) ;

9

v . push back ( v5 ) ;

10

v . push back ( v6 ) ;

11

v . push back ( v7 ) ;

12

v . push back ( v8 ) ;

13

v . push back ( v9 ) ;

14

v . push back ( v10 ) ;

15

v . push back ( v11 ) ;

16

17

f o r ( i =0; i <11; i ++){

18

i f ( ( v [ i ] >=10) | | ( v [ i ]<=−10) ) return 1 ;

19

}

20
21 }

return 0;

Listing B.6: Subroutine OutOfRangeCheck

B. Source code

67

To implement the possibility to adjust the calculated voltages to the actual ion position at runtime, a master slider is deﬁned, called ION Z POS. The value of this slider is read in and compared to the entries of a vector containing all the axial positions for which the calculations have been performed. This is done in the subroutine ﬁndIndex. The subroutine returns an index p which determines the corresponding array matrizen(p). All of these arrays were read in at the startup of the program. The-
 rows of chosen this array are the requested voltage sets v1, v2 . . . v8 for the 8 multipoles.

1 if
2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
27
28
29
30
31
32
33
34
35
36
37 {
38 39 40 41 42 43

( m a s te r Id == ”ION Z POS” ) { s t d : : s t r i n g s l a v e Id D C 1= ”DC01” ; s t d : : s t r i n g s l a v e Id D C 2= ”DC02” ; s t d : : s t r i n g s l a v e Id D C 3= ”DC03” ; s t d : : s t r i n g s l a v e Id D C 4= ”DC04” ; s t d : : s t r i n g s l a v e Id D C 5= ”DC05” ; s t d : : s t r i n g s l a v e Id D C 6= ”DC06” ; s t d : : s t r i n g s l a v e Id D C 7= ”DC07” ; s t d : : s t r i n g s l a v e Id D C 8= ”DC08” ; s t d : : s t r i n g s l a v e Id D C 9= ”DC09” ; s t d : -
: s t r i n g s l a v e Id D C 1 0=”DC10” ; s t d : : s t r i n g s l a v e Id D C 1 1=”DC11” ;

double slaveValue DC1 = 0 . 0 ; double slaveValue DC2 = 0 . 0 ; double slaveValue DC3 = 0 . 0 ; double slaveValue DC4 = 0 . 0 ; double slaveValue DC5 = 0 . 0 ; double slaveValue DC6 = 0 . 0 ; double slaveValue DC7 = 0 . 0 ; double slaveValue DC8 = 0 . 0 ; double slaveValue DC9 = 0 . 0 ; double slaveValue DC10 = 0 . 0 ; double slaveValue DC11 = 0 . 0 ;

if

( isMasterSlaveCandidate ( masterId ,

slaveValue DC1 )

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id ,

slaveValue DC2)

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id ,

slaveValue DC3)

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id ,

slaveValue DC4)

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id ,

slaveValue DC5)

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id ,

slaveValue DC6)

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id ,

slaveValue DC7)

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id ,

slaveValue DC8)

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id ,

slaveValue DC9)

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id ,

slaveValue DC10)

&& i s M a s t e r S l a v e C a n d i d a t e ( m a s te r Id ,

slaveValue DC11) )

int p; p=f i n d I n d e x ( p o s v e c t o r , m a s te r V a l u e ) ; v1=m a t r i z e n . a t ( p ) . a t ( 0 ) ; v2=m a t r i z e n . a t ( p ) . a t ( 1 ) ; v3=m a t r i z e n . a t ( p ) . a t ( 2 ) ;

slaveId DC1 , srcChannels , slaveId DC2 , srcChannels , slaveId DC3 , srcChannels , slaveId DC4 , srcChannels , slaveId DC5 , srcChannels , slaveId DC6 , srcChannels , slaveId DC7 , srcChannels , slaveId DC8 , srcChannels , slaveId DC9 , srcChannels , slaveId DC10 , srcChannels , slaveId DC11 , srcChannels ,

68

B.2. Implementation in TrICS

44

v4=m a t r i z e n . a t ( p ) . a t ( 3 ) ;

45

v5=m a t r i z e n . a t ( p ) . a t ( 4 ) ;

46

v6=m a t r i z e n . a t ( p ) . a t ( 5 ) ;

47

v7=m a t r i z e n . a t ( p ) . a t ( 6 ) ;

48

v8=m a t r i z e n . a t ( p ) . a t ( 7 ) ;

49

}

50 }

Listing B.7: Code snippet of the ﬁle channelprocessinghandler.cpp used to choose the right voltages for a given ION Z POS slider value.

1 i n t I Q C h a n n e l P r o c e s s o r H a n d l e r : : f i n d I n d e x ( s t d : : v e c t o r <double> v , double pos ) 2{

3

int i =0;

4

bool found=f a l s e ;

5

6

while ( ( i < ( i n t ) v . s i z e ( ) ) && ( ! found ) )

7

{

8

i f ( v . a t ( i )>=pos ) {

9

found = true ;

10

return i ;

11

}

12

i ++;

13

}

14
15 }

return 1;

Listing B.8: Subroutine ﬁndIndex

Bibliography
[1] R. Feynman, Simulating physics with computers, Int. J. Theoret. Phys. 21, 467 (1982).
[2] A. Friedenauer, H. Schmitz, J. T. Glu¨ckert, D. Porras, and T. Sch¨atz, Simulating a quantum magnet with trapped ions, Nature Physics 4, 757 (2008).
[3] I. Bloch, Ultracold quantum gases in optical lattices, Nature Physics 1, 23 (2005).
[4] A. Y. Smirnov, S. Savel’ev, L. G. Mourokh, and F. Nori, Modelling chemical reactions using semiconductor quantum dots, Europhys. Lett. 80, 67008 (2007).
[5] K. Kim, M.-S. Chang, S. Korenblit, R. Islam, E. E. Edwards, J. K. Freericks, G.-D. Lin, L.-M. Duan, and C. Monroe, Quantum simulation of frustrated ising spins with trapped ions, Nature 465, 590 (2010).
[6] R. Gerritsma, G. Kirchmair, F. Z¨ahringer, E. Solano, R. Blatt, and C. F. Roos, Quantum simulation of the dirac equation, Nature 463, 68 (2010).
[7] S. Lloyd, Universal quantum simulators, Science 273, 1073 (1996).
[8] J. T. Barreiro, M. Mu¨ller, P. Schindler, D. Nigg, T. Monz, M. Chwalla, M. Hennrich, C. F. Roos, P. Zoller, and R. Blatt, An open-system quantum simulator with trapped ions, Nature 470, 486 (2011).
[9] N. A. Gershenfeld and I. L. Chuang, Bulk spin-resonance quantum computation, Science 275, 350 (1997).
[10] E. Knill, R. Laﬂamme, and G. J. Milburn, A scheme for eﬃcient quantum computation with linear optics, Nature 409, 46 (2001).
[11] H.-J. Briegel, T. Calarco, D. Jaksch, J. I. Cirac, and P. Zoller, Quantum computing with neutral atoms, J. Mod. Opt. 47, 415 (2000).
[12] D. Loss and D. P. DiVincenzo, Quantum computation with quantum dots, Phys. Rev. A 57, 120 (1998).
[13] Y. Makhlin, G. Sch¨on, and A. Shnirman, Quantum-state engineering with Josephson-junction devices, Rev. Mod. Phys. 73, 357 (2001).
[14] J. I. Cirac and P. Zoller, Quantum computations with cold trapped ions, Phys. Rev. Lett. 74, 4091 (1995).
[15] Army Research Oﬃce (USA), A quantum information science and technology roadmap, URL http://qist.lanl.gov/qcrypt_map.shtml, 21.07.2011.
69

70

Bibliography

[16] F. Schmidt-Kaler, H. H¨aﬀner, M. Riebe, S. Gulde, G. P. T. Lancaster, T. Deuschle, C. Becher, C. F. Roos, J. Eschner, and R. Blatt, Realization of the Cirac-Zoller controlled-NOT quantum gate, Nature 422, 408 (2003).
[17] J. P. Home, M. J. McDonnell, D. M. Lucas, G. Imreh, B. C. Keitch, D. J. Szwer, N. R. Thomas, S. C. Webster, D. N. Stacey, and A. M. Steane, Deterministic entanglement and tomography of ion–spin qubits, New J. Phys. 8, 188 (2006).
[18] J. Benhelm, G. Kirchmair, C. F. Roos, and R. Blatt, Towards fault-tolerant quantum computing with trapped ions, Nature Physics 4, 463 (2008).
[19] D. J. Wineland, M. Barrett, J. Britton, J. Chiaverini, B. DeMarco, W. M. Itano, B. Jelenkovi´c, C. Langer, D. Leibfried, V. Meyer, T. Rosenband, and T. Sch¨atz, Quantum information processing with trapped ions, Philos. Transact. A Math. Phys. Eng. Sci. 361, 1349 (2003).
[20] M. Riebe, H. H¨aﬀner, C. F. Roos, W. H¨ansel, J. Benhelm, G. P. T. Lancaster, T. W. K¨orber, C. Becher, F. Schmidt-Kaler, D. F. V. James, and R. Blatt, Deterministic quantum teleportation with atoms, Nature 429, 734 (2004).
[21] M. D. Barrett, J. Chiaverini, T. Sch¨atz, J. Britton, W. M. Itano, J. D. Jost, E. Knill, C. Langer, D. Leibfried, R. Ozeri, and D. J. Wineland, Deterministic quantum teleportation of atomic qubits, Nature 429, 737 (2004).
[22] D. Leibfried, E. Knill, S. Seidelin, J. Britton, R. B. Blakestad, J. Chiaverini, D. B. Hume, W. M. Itano, J. D. Jost, C. Langer, R. Ozeri, R. Reichle, and D. J. Wineland, Creation of a six-atom ‘Schr¨odinger cat’ state, Nature 438, 639 (2005).
[23] H. H¨aﬀner, W. H¨ansel, C. F. Roos, J. Benhelm, D. C. al kar, M. Chwalla, T. K¨orber, U. D. Rapol, M. Riebe, P. O. Schmidt, C. Becher, O. Gu¨hne, W. Du¨r, and R. Blatt, Scalable multiparticle entanglement of trapped ions, Nature 438, 643 (2005).
[24] T. Monz, P. Schindler, J. T. Barreiro, M. Chwalla, D. Nigg, W. A. Coish, M. Harlander, W. H¨ansel, M. Hennrich, and R. Blatt, 14-qubit entanglement: Creation and coherence, Phys. Rev. Lett. 106, 130506 (2011).
[25] C. F. Roos, G. P. T. Lancaster, M. Riebe, H. H¨aﬀner, W. H¨ansel, S. Gulde, C. Becher, J. Eschner, F. Schmidt-Kaler, and R. Blatt, Bell states of atoms with ultralong lifetimes and their tomographic state analysis, Phys. Rev. Lett. 92, 220402 (2004).
[26] M. Riebe, K. Kim, P. Schindler, T. Monz, P. O. Schmidt, T. K. K¨orber, W. H¨ansel, H. H¨aﬀner, C. F. Roos, and R. Blatt, Process tomography of ion trap quantum gates, Phys. Rev. Lett. 97, 220407 (2006).
[27] P. W. Shor, Polynomial-time algorithms for prime factorization and discrete logarithms on a quantum computer, SIAM J. Comput. 26, 1484 (1997).

Bibliography

71

[28] D. Deutsch and R. Jozsa, Rapid solution of problems by quantum computation, in Proceedings: Mathematical and Physical Sciences, volume 439, pages pp. 553–558, The Royal Society, 1992.
[29] L. K. Grover, A fast quantum mechanical algorithm for database search, in Proceedings of the twenty-eighth annual ACM symposium on Theory of computing, pages 212–219, New York, NY, USA, 1996, ACM.
[30] K.-A. Brickman, P. C. Haljan, P. J. Lee, M. Acton, L. Deslauriers, and C. Monroe, Implementation of Grover’s quantum search algorithm in a scalable system, Phys. Rev. A 72, 050306 (2005).
[31] S. Gulde, M. Riebe, G. P. T. Lancaster, C. Becher, J. Eschner, H. H¨aﬀner, F. Schmidt-Kaler, I. L. Chuang, and R. Blatt, Implementation of the Deutsch-Jozsa algorithm on an ion-trap quantum computer, Nature 421, 48 (2003).
[32] R. J. Hughes, D. F. V. James, E. H. Knill, R. Laﬂamme, and A. G. Petschek, Decoherence bounds on quantum computation with trapped ions, Phys. Rev. Lett. 77, 3240 (1996).
[33] D. J. Wineland, C. Monroe, W. M. Itano, D. Leibfried, B. E. King, and D. M. Meekhof, Experimental issues in coherent quantum-state manipulation of trapped atomic ions, J. Res. Natl. Inst. Stand. Technol. 103 (1998).
[34] D. Kielpinski, C. Monroe, and D. J. Wineland, Architecture for a large-scale ion-trap quantum computer, Nature 417, 709 (2002).
[35] J. Chiaverini, R. B. Blakestad, J. Britton, J. D. Jost, C. Langer, D. Leibfried, R. Ozeri, and D. J. Wineland, Surface-electrode architecture for ion-trap quantum information processing, Quant. Inf. Comp. 5, 419 (2005).
[36] K. R. Brown, R. J. Clark, J. Labaziewicz, P. Richerme, D. R. Leibrandt, and I. L. Chuang, Loading and characterization of a printed-circuit-board atomic ion trap, Phys. Rev. A 75, 015401 (2007).
[37] S. Seidelin, J. Chiaverini, R. Reichle, J. J. Bollinger, D. Leibfried, J. Britton, J. H. Wesenberg, R. B. Blakestad, R. J. Epstein, D. B. Hume, W. M. Itano, J. D. Jost, C. Langer, R. Ozeri, N. Shiga, and D. J. Wineland, Microfabricated surface-electrode ion trap for scalable quantum information processing, Phys. Rev. Lett. 96, 253003 (2006).
[38] F. Splatt, M. Harlander, M. Brownnutt, F. Z¨ahringer, R. Blatt, and W. H¨ansel, Deterministic reordering of 40Ca+ ions in a linear segmented Paul trap, New J. Phys. 11, 103008 (2009).
[39] W. Paul and H. Steinwedel, Ein neues Massenspektrometer ohne Magnetfeld, Z. Naturforsch. A 8, 448 (1953).
[40] D. Leibfried, R. Blatt, C. Monroe, and D. J. Wineland, Quantum dynamics of single trapped ions, Rev. Mod. Phys. 75, 281 (2003).

72

Bibliography

[41] H. H¨aﬀner, C. Roos, and R. Blatt, Quantum computing with trapped ions, Phys. Rep. 469, 155 (2008).
[42] R. Blatt and D. Wineland, Entangled states of trapped atomic ions, Nature 453, 1008 (2008).
[43] W. Paul, Electromagnetic traps for charged and neutral particles, Rev. Mod. Phys. 62, 531 (1990).
[44] P. K. Ghosh, Ion Traps, volume 90 of The international series of monographs on physics, Clarendon Press, 1995.
[45] F. G. Major, V. N. Gheorghe, and G. Werth, Charged Particle Traps, volume 1 of Atomic, optical and plasma physics, Springer-Verlag, 2005.
[46] D. J. Berkeland, J. D. Miller, J. C. Bergquist, W. M. Itano, and D. J. Wineland, Minimization of ion micromotion in a Paul trap, J. App. Phys. 83, 5025 (1998).
[47] M. J. Madsen, W. K. Hensinger, D. Stick, J. A. Rabchuk, and C. Monroe, Planar ion trap geometry for microfabrication, Appl. Phys. B 78, 639 (2004).
[48] H. C. N¨agerl, W. Bechter, J. Eschner, F. Schmidt-Kaler, and R. Blatt, Ion strings for quantum gates, Appl. Phys. B 66, 603 (1998).
[49] M. Drewsen and A. Brøner, Harmonic linear Paul trap: Stability diagram and eﬀective potentials, Phys. Rev. A 62, 045401 (2000).
[50] D. J. Berkeland, J. D. Miller, J. C. Bergquist, W. M. Itano, and D. J. Wineland, Laser-cooled mercury ion frequency standard, Phys. Rev. Lett. 80, 2089 (1998).
[51] C. E. Pearson, D. R. Leibrandt, W. S. Bakr, W. J. Mallard, K. R. Brown, and I. L. Chuang, Experimental investigation of planar ion traps, Phys. Rev. A 73, 032307 (2006).
[52] J. Britton, D. Leibfried, J. Beall, R. B. Blakestad, J. J. Bollinger, J. Chiaverini, R. J. Epstein, J. D. Jost, D. Kielpinski, C. Langer, R. Ozeri, R. Reichle, S. Seidelin, N. Shiga, J. H. Wesenberg, and D. J. Wineland, A microfabricated surface-electrode ion trap in silicon, arXiv:quant-ph/0605170v1 (2006).
[53] J. M. Amini, H. Uys, J. H. Wesenberg, S. Seidelin, J. Britton, J. J. Bollinger, D. Leibfried, C. Ospelkaus, A. P. VanDevender, and D. J. Wineland, Toward scalable ion traps for quantum information processing, New J. Phys. 12, 033031 (2010).
[54] D. L. Moehring, C. Highstrete, D. Stick, K. M. Fortier, R. Haltli, C. Tigges, and M. G. Blain, Design, fabrication, and experimental demonstration of junction surface ion traps, arXiv (2011).
[55] J. I. Cirac and P. Zoller, A scalable quantum computer with ions in an array of microtraps, Nature 404, 579 (2000).

Bibliography

73

[56] M. Kumph, M. Brownnutt, and R. Blatt, Two–dimensional arrays of RF ion traps with addressable interactions, arXiv:1103.5428v3 (2011).
[57] C. J. Foot, Atomic Physics, Ofxord Master Series in Physics, Oxford University Press, 2005.
[58] M. Harlander, M. Brownnutt, W. H¨ansel, and R. Blatt, Trapped-ion probing of light-induced charging eﬀects on dielectrics, New J. Phys. 12, 093035 (2010).
[59] D. T. C. Allcock, T. P. Harty, H. A. Janacek, N. M. Linke, C. J. Ballance, A. M. Steane, D. M. Lucas, R. L. Jarecki Jr., S. D. Habermehl, M. G. Blain, D. Stick, and D. L. Moehring, Heating rate and electrode charging measurements in a scalable, microfabricated, surface-electrode ion trap, arXiv:1105.4864v1 (2011).
[60] G. Brady, A. Ellis, D. Moehring, D. Stick, C. Highstrete, K. Fortier, M. Blain, R. Haltli, A. Cruz-Cabrera, R. Briggs, J. Wendt, T. Carter, S. Samora, and S. Kemme, Integration of ﬂuorescence collection optics with a microfabricated surface electrode ion trap, Appl. Phys. B 103, 801 (2011).
[61] A. P. VanDevender, Y. Colombe, J. Amini, D. Leibfried, and D. J. Wineland, Eﬃcient ﬁber optic detection of trapped ion ﬂuorescence, Phys. Rev. Lett. 105, 023001 (2010).
[62] T. H. Kim, P. F. Herskind, and I. L. Chuang, Surface-electrode ion trap with integrated light source, Appl. Phys. Lett. 98, 214103 (2011).
[63] A. M. Steane, How to build a 300 bit, 1 giga-operation quantum computer, Quant. Inf. Comp. 7 (2007).
[64] D. Leibfried, E. Knill, C. Ospelkaus, and D. J. Wineland, Transport quantum logic gates for trapped ions, Phys. Rev. A 76, 032324 (2007).
[65] M. Harlander, R. Lechner, M. Brownnutt, R. Blatt, and W. H¨ansel, Trappedion antennae for the transmission of quantum information, Nature 471, 200 (2011).
[66] K. R. Brown, C. Ospelkaus, Y. Colombe, A. C. Wilson, D. Leibfried, and D. J. Wineland, Coupled quantized mechanical oscillators, Nature 471, 196 (2011).
[67] G. Huber, T. Deuschle, W. Schnitzler, R. Reichle, K. Singer, and F. SchmidtKaler, Transport of ions in a segmented linear Paul trap in printed-circuitboard technology, New J. Phys. 10, 013004 (2008).
[68] J. H. Wesenberg, Electrostatics of surface-electrode ion traps, Phys. Rev. A 78, 063410 (2008).
[69] P. K. Banerjee and R. Butterﬁeld, Boundary Element Methods in Engineering Science, McGraw-Hill Book Company (UK) Limited, 1981.

74

Bibliography

[70] L. Gaul and C. Fiedler, Methode der Randelemente in Statik und Dynamik, Grundlagen und Fortschritte der Ingenieurwissenschaften, Vieweg, 1997.
[71] K. Singer, U. Poschinger, M. Murphy, P. Ivanov, F. Ziesel, T. Calarco, and F. Schmidt-Kaler, Colloquium: Trapped ions as quantum bits: Essential numerical tools, Rev. Mod. Phys. 82, 2609 (2010).
[72] D. Cubric, B. Lencova, F. H. Read, and J. Zlamal, Comparison of FDM, FEM and BEM for electrostatic charged particle optics, Nucl. Instrum. Methods Phys. Res., Sect. A 427, 357 (1999).
[73] J. D. Jackson, Klassische Elektrodynamik, Walter de Gruyter, 2 edition, 1982.
[74] R. Penrose, A generalized inverse for matrices, in Mathematical Proceedings of the Cambridge Philosophical Society, volume 51, pages 406–413, 1955.
[75] B.-I. A. and G. T. N. E., Generalized Inverses, CMS Books in Mathematics, Springer-Verlag, 2003.
[76] C. B. Moler, Numerical Computing with MATLAB, Society for Industrial and Applied Mathematics, 2008.
[77] R. J. Clark, An Investigation of Precision and Scaling Issues in Nuclear Spin and Trapped-Ion Quantum Simulators, PhD thesis, Massachusetts Institute of Technology, 2009.
[78] F. E. Splatt, Development and Operation of Miniaturised Ion Traps for Scalable Quantum Computation, PhD thesis, University of Innsbruck, 2009.
[79] W. W. Macalpine and R. O. Schildknecht, Coaxial resonators with helical inner conductor, in Proceedings of the IRE, volume 47, pages 2099–2105, 1959.
[80] S. Gulde, D. Rotter, P. Barton, F. Schmidt-Kaler, R. Blatt, and W. Hogervorst, Simple and eﬃcient photo-ionization loading of ions for precision iontrapping experiments, Appl. Phys. B 73, 861 (2001).
[81] D. M. Lucas, A. Ramos, J. P. Home, M. J. McDonnell, S. Nakayama, J.-P. Stacey, S. C. Webster, D. N. Stacey, and A. M. Steane, Isotope-selective photoionization for calcium ion trapping, Phys. Rev. A 69, 012711 (2004).
[82] R. W. P. Drever, J. L. Hall, F. V. Kowalski, J. Hough, G. M. Ford, A. J. Munley, and H. Ward, Laser phase and frequency stabilization using an optical resonator, Appl. Phys. B 31, 97 (1983).
[83] B. E. A. Saleh and M. C. Teich, Fundamentals of Photonics, John Wiley & Sons, 2007.
[84] J. A. Stone and J. H. Zimmerman, Engineering metrology toolbox, URL http://emtoolbox.nist.gov/Wavelength/Edlen.asp, 20.05.2011.

Bibliography

75

[85] A. A. Radzig and B. M. Smirnov, Reference Data on Atoms, Molecules, and Ions, Springer-Verlag, 1985.
[86] D. T. C. Allcock, J. A. Sherman, D. N. Stacey, A. H. Burrell, M. J. Curtis, G. Imreh, N. M. Linke, D. J. Szwer, S. C. Webster, A. M. Steane, and D. M. Lucas, Implementation of a symmetric surface-electrode ion trap with ﬁeld compensation using a modulated raman eﬀect, New J. Phys. 12, 053026 (2010).

Danksagung
Ich m¨ochte mich an dieser Stelle bei allen bedanken die zum erfolgreichen Gelingen meiner Diplomarbeit und meines Studiums beigetragen haben. Allen voran gilt mein Dank Herrn Prof. Rainer Blatt, der durch seine Vorlesungen schon fru¨h im Studium mein Interesse fu¨r dieses Gebiet geweckt hat und mir schließlich die M¨oglichkeit gab, in seiner Arbeitsgruppe an einem spannenden Projekt zu arbeiten.
Besonderer Dank gilt auch dem Leiter dieses Projektes Mike Brownnutt. Durch seine verst¨andliche und amu¨sierende Art die Welt der Physik zu erkl¨aren hat er mich fu¨r dieses Experiment gewonnen, hat stets Zeit gefunden fu¨r meine Fragen, und schließlich durch sein wiederholtes Zerlegen und Umstrukturieren dieser Arbeit erheblich zu ihrer Verbesserung beigetragen. I’m sorry for giving you a hard time on your transatlantic ﬂights and I’m still dedicatedly looking for a cure for “fullstoperitis”. Th-
anks!!
In diesem Zuge m¨ochte ich mich auch bei den restlichen Mitgliedern der Arbeitsgruppe bedanken die stets bemu¨ht waren meine Fragen zu beantworten und immer wertvolle Ratschl¨age parat hatten. Besonders erw¨ahnen m¨ochte ich die Mitstreiter des CRYOTRAP Teams: Miur fu¨r Rat, Tat und Geduld in allen Fragen bezu¨glich Elektronik und allem was sonst noch ben¨otigt wird auf der Ionenjagd; Michi fu¨r die gelegentlichen Bike Ausritte und meiner Bu¨rokollegin Regina fu¨rs mehrmalige Ermutigen und “fru¨hz-
eitige” Heimschicken. Ein Dank geht auch an Max, der mir bei vielen Fragen rund um Bastille, Ionenfallen an sich und vor allem “ummpf” Angelegenheiten sehr weiter geholfen hat.
Die vergangenen sechs Jahre waren besonders gepr¨agt durch Freundschaften zu den Studienkollegen, vor allem zu Andi und Jogy, mit denen ich viel Zeit an und außerhalb der Uni verbracht habe. Egal ob es das Lernen fu¨r Pru¨fungen, Sonnenaufgangsklettern vor der Uni, Vollmondklettern nach der Uni, Erst(?)besteigen des Viktor-Franz-Hess-Haus Su¨dpfeilers, Mittagspausen Slacklinen, Feierabend Saunieren oder ob es sonstige Winter und Sommer Berg Aktionen waren: Es war immer a Mordsgaudi!! Erw¨ahnenswer-
t ist hier auch die Diplomarbeitszeit, in der eine obligatorische t¨agliche Kaﬀeepause eingefu¨hrt wurde, in der vor allem u¨ber die perfekte Zubereitung eines Campinggaskocher-Mokkamaschinen-Kaﬀees, u¨ber Kletterrouten, Bergtouren und Berge im Allgemeinen und u¨ber außergew¨ohnlich tolle Gesch¨aftsideen debattiert wurde. Dankschia!!
Der gr¨oßte Dank allerdings gilt meiner Familie. Meinem Bruder Arthur dafu¨r, dass er mich immer motiviert und gepusht hat und w¨ahrend der heißen Endphase der Diplomarbeit fu¨r die einzige sportliche Ablenkung gesorgt hat: Mittern¨achtliche Hungerburg-Longboard-sessions. Meiner Freundin Bianca danke ich
76

Danksagung

77

fu¨r die Unterstu¨tzung w¨ahrend der gesamten Studienzeit, fu¨r die Hilfe bei mathematischen Aufgaben, das Zurechtweisen meiner Ignoranz gegenu¨ber mathematischer Exaktheit und fu¨r das Korrekturlesen der Diplomarbeit. Danke fu¨r dein Verst¨andnis, egal ob Auslandssemester oder Laborarbeit bis sp¨at in die Nacht. Schließlich m¨ochte ich mich bei meinen Eltern bedanken: Bardzo wam jestem wdzie֒czny za wasze zaufanie, za pomoc i wsparcie w kaz˙dy moz˙liwy spos´ob i za umoz˙liwienie mi studiowania i -
spelnienia mi moich cel´ow i marzen´. Dzie֒kuje wam bardzo!

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:46.367Z
- **Text Length:** 158776 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
