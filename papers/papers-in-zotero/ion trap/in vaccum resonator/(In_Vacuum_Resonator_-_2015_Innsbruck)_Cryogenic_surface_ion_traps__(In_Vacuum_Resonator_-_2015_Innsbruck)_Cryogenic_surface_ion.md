# PDF Document: (In Vacuum Resonator - 2015 Innsbruck) Cryogenic surface ion traps.pdf

**File Path:** (In Vacuum Resonator - 2015 Innsbruck) Cryogenic surface ion traps.pdf

**Processed Date:** 2026-02-10T18:18:44.284Z

**File Size:** 6368.93 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 12

**Collection:** Ion Trap

---

## Extracted Text Content

Cryogenic surface ion traps
Dissertation
zur Erlangung des Doktorgrades an der
Fakult¨at fu¨r Mathematik, Informatik und Physik der Leopold-Franzens-Universit¨at Innsbruck vorgelegt von
Dipl. Ing. Michael Niedermayr
durchgefu¨hrt am Institut fu¨r Experimentalphysik
unter der Leitung von Univ.-Prof. Dr. Rainer Blatt
July 2015

Abstract
Microfabricated surface traps are a promising architecture to realize a scalable quantum computer based on trapped ions. In principle, hundreds or thousands of surface traps can be located on a single substrate in order to provide large arrays of interacting ions. To this end, trap designs and fabrication methods are required that provide scalable, stable and reproducible ion traps.
This work presents a novel surface-trap design developed for cryogenic applications. Intrinsic silicon is used as the substrate material of the traps. The well-developed microfabrication and structuring methods of silicon are utilized to create simple and reproducible traps. The traps were tested and characterized in a cryogenic setup. Ions could be trapped and their life time and motional heating were investigated. Long ion lifetimes of several hours were observed and the measured heating rates w-
ere reproducibly low at around 1 phonon per second at a trap frequency of 1 MHz.
Kurzfassung
Oberﬂ¨achenfallen bieten eine vielversprechende Fallenarchitektur, um einen skalierbaren Quantencomputer basierend auf Ionenfallen zu realisieren. Ein System aus hunderten oder tausenden Oberﬂ¨achenfallen kann im Prinzip auf einem einzelnen Substrat angeordnet werden. Dieses System erm¨oglicht die Arbeit mit einer großen Anzahl von Ionen, die miteinander wechselwirken k¨onnen. Dazu werden allerdings Fallendesigns und Fertigungsmethoden ben¨otigt, die die Herstellung von skalierbaren, reproduzierba-
ren und zuverl¨assig arbeitenden Fallen gew¨ahrleisten.
In dieser Arbeit wird ein neuartiges Oberﬂ¨achenfallendesign pr¨asentiert, das fu¨r Tieftemperaturanwendungen entwickelt wurde. Intrinsisches Silizum wird als Substratmaterial fu¨r die Fallen verwendet. Die hochentwickelten Mikrofabrikationstechnologien fu¨r Silizium werden eingesetzt, um einfache und reproduzierbare Fallen herzustellen. Die Fallen wurden bei tiefen Temperaturen getestet und charakterisiert. Ionen konnten in den Fallen gefangen werden. Dabei wurde eine Verweildauer der Ionen in de-
n Fallen von mehreren Stunden beobachtet. Außerdem wurden die Heizenraten der Bewegungsmoden untersucht. Eine niedrige, reproduzierbare Heizrate von ungef¨ahr 1 Phonon pro Sekunde bei einer Fallenfrequenz von 1 MHz wurde gemessen.

Contents

1 Introduction

1

2 Ion trapping fundamentals

5

2.1 Radio-frequency ion traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5

2.1.1 Operation principle . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5

2.1.2 Non-ideal traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8

2.2 40Ca+ ion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9

2.3 Laser-ion interaction in a harmonic trap . . . . . . . . . . . . . . . . . . . . 12

2.4 Cooling and detection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14

2.4.1 Doppler cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15

2.4.2 Sideband cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16

2.4.3 Detection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16

3 Scalable ion traps

19

3.1 Microtraps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20

3.1.1 Multi-layer traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21

3.1.2 Surface traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22

3.2 Motional heating . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24

3.2.1 Possible sources . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25

3.2.2 Minimizing the heating . . . . . . . . . . . . . . . . . . . . . . . . . 26

3.2.3 Heating-rate measurement . . . . . . . . . . . . . . . . . . . . . . . . 27

3.3 Traps in a cryogenic environment . . . . . . . . . . . . . . . . . . . . . . . . 29

3.3.1 Reduced motional heating . . . . . . . . . . . . . . . . . . . . . . . . 31

3.3.2 Vacuum and turnaround time . . . . . . . . . . . . . . . . . . . . . . 32

3.3.3 Cryogenic systems . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33

4 Experimental setup

35

4.1 Cryogenic system and vacuum chamber . . . . . . . . . . . . . . . . . . . . 36

4.1.1 Giﬀord McMahon cryostat . . . . . . . . . . . . . . . . . . . . . . . . 36

4.1.2 Vibration isolation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39

4.1.3 Vacuum chamber . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42

4.1.4 Wiring and heater . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45 4.1.5 Oven . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47 4.1.6 Magnetic ﬁelds . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48 4.1.7 Cooling down procedure . . . . . . . . . . . . . . . . . . . . . . . . . 49 4.2 Trap carrier . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50 4.2.1 Trap installation . . . . . . . . . . . . . . . . . . . . . . . . . .-
 . . . 50 4.2.2 RF Resonator . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52 4.2.3 DC Filterboards . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 4.3 Optical setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54 4.3.1 Lasers systems . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54 4.3.2 Ion detection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57 4.4 Experimental control . . . . . . . . . . . . . . . . . . . . -
. . . . . . . . . . . 59

5 Surface trap ‘Yedikule’

63

5.1 Trap geometry . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64

5.2 Trap simulations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66

5.2.1 Electrostatic simulations . . . . . . . . . . . . . . . . . . . . . . . . . 67

5.2.2 Trapping parameters . . . . . . . . . . . . . . . . . . . . . . . . . . . 68

6 Silica traps

73

6.1 Manufacturing traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73

6.1.1 Microfabrication . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 74

6.1.2 Mounting and wire bonding . . . . . . . . . . . . . . . . . . . . . . . 75

6.2 Trap performance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76

6.2.1 Yedikule-1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76

6.2.2 Yedikule-3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78

7 Silicon traps

81

7.1 Silicon ion traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81

7.2 Silicon trap design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83

7.3 Manufacturing traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84

7.3.1 Microfabrication . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84

7.3.2 Mounting and wire bonding . . . . . . . . . . . . . . . . . . . . . . . 88

7.4 RF Resonator performance . . . . . . . . . . . . . . . . . . . . . . . . . . . 89

7.5 Trap performance . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91

7.5.1 Trapped ion lifetime . . . . . . . . . . . . . . . . . . . . . . . . . . . 91

7.5.2 Heating rates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91

7.6 Trap improvements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93

7.6.1 Light-induced charging . . . . . . . . . . . . . . . . . . . . . . . . . . 93

7.6.2 Visions of the future . . . . . . . . . . . . . . . . . . . . . . . . . . . 93

8 Conclusion

97

A Trapping parameters

99

A.1 Mulitpole expansion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 99

B Recipes for trap fabrication

101

B.1 Silica traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101

B.2 Silicon traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104

Chapter 1
Introduction
The transistor is a fundamental and ubiquitous building block of modern electronic systems. It is a semiconductor component that can be used as an electric switch. The ﬁrst patents describing a transistor were independently ﬁled by Julius Edgar Lilienfeld [1] in 1925 and by Oskar Heil [2] 9 years later. The ﬁrst realization of a transistor was built by John Bardeen and Walter H. Brattain at the Bell Laboratories in 1947 [3].
Transistors based on silicon form the basic component of modern computers. Silicon has several advantages over other semiconductors [4]. Silicon, for example, forms a native oxide which is a good insulator. This oxide can be used to create an isolation layer between the silicon and electrodes required for some types of transistors (ﬁeld-eﬀect transistor). Furthermore, silicon is the second most common element in the earth’s crust (26.3%) which facilitates inexpensive manufacturing. A considerable -
eﬀort had been made to improve the transistors’ fabrication during the last 50 years. In particular, the transistors’ physical dimensions have been drastically reduced. On average, the number of transistors per square centimeter in an integrated circuit doubled approximately every two years [5]. In 2014, commercial microprocessors were equipped with transistors with a gate length of 14 nm [6] which corresponds to 26 atomic layers [4]. This fact indicates that the miniaturization of transistors wil-
l be limited in the near future simply by the atomic structure of matter. Furthermore, unwanted quantum eﬀects become increasingly relevant with smaller structures [7].
There exists, however, a diﬀerent approach using a quantum mechanical system instead of transistors to build a completely new type of computer: the quantum computer. The idea was ﬁrst introduced by Richard Feynman and Paul Benioﬀ in 1982 [8, 9]. While a classical computer based on transistors requires information encoded in distinct values, also called bits (0 and 1), the data in a quantum computer can be any superposition of two states; this is called a quantum bit, or qubit. [10]. In multiple qu-
bit systems the states of the qubits are not necessarily independently deﬁned, but can depend on the states of other qubits. This is known as entanglement. Several quantum algorithms
1

Introduction
have been developed which allow mathematical problems to be solved faster. Two of the most famous algorithms are Shor’s [11] and Grover’s [12] algorithm. Shor’s algorithm is an algorithm for integer factorization and runs exponentially faster than its best known classical counterpart. Grover’s algorithm is a searching algorithm for an unsorted database and provides a quadratic speed-up compared to the best possible classical algorithm.
Two-level quantum systems that can be used to realize a quantum computer should fulﬁll some physical requirements. There can be found diﬀerent formulations of these requirements in the literature [13, 14] and only a brief summary is given here. The system must be scalable physically in order to increase the number of qubits. It must be possible to initialize the state of the system, and read out the state of the system in a qubit speciﬁc way. Quantum information is very fragile; the qubits tend to-
 lose their quantum nature and become essentially classical in nature after some characteristic time called the decoherence time. It is important that any logical operations to be performed on the qubits can be done in a time much shorter than this decoherence time. Furthermore, it must be possible to implement a universal set of quantum logic gates. A universal set is the minimum set of gates required to perform any operation possible on a quantum computer. To date a variety of possible candidate-
s of physical quantum systems is under investigation [14]. Among them are solid-state systems such as quantum dots, NV centers, superconducting circuits and nuclear spin systems. Other realizations are based on photons, optically trapped neutral atoms or trapped atomic ions.
Of those systems, trapped ions are one of the preeminent candidates [15]. The ions are conﬁned using a combination of radio-frequency (RF) and static (DC) electric ﬁelds due to voltages applied to the electrodes of a so-called ion trap. [16]. The ions’ quantum states can be initialized and manipulated by lasers or microwaves. They have been used to demonstrate quantum gates, quantum algorithms and quantum error correction [17]. Importantly, there are no in-principle roadblocks foreseen to scaling -
ion traps to process hundreds or thousands of quantum bits. However, the technical realization of a such large trapped-ion quantum processor still provides many open challenges.
One promising approach to scaling up ion traps is the use of microfabricated surface traps. In these traps the electrodes providing the electric ﬁelds are aligned in one plane. They are usually located on the surface of a substrate material. Hundreds of these traps can be aligned on a single substrate in order to provide arrays of ions which can interact with each other. Typical substrates are dielectrics such as fused silica or sapphire which are used because of their low RF losses. However, the -
three dimensional structuring of these substrates which is required for more complex trap designs is very diﬃcult. In contrast, there exist well-developed microfabrication and structuring methods for silicon. The high RF losses of silicon at room temperature, though, have limited its application as the substrate of surface traps. The RF losses, however, decrease when the temperature is reduced, and at cryogenic temperatures (<10 K) they are comparable to the losses of
2

dielectrics. In this thesis, a novel surface trap design for cryogenic applications based on a silicon
substrate is developed and its operation is characterized. The long term goal is to combine ion traps with the sophisticated silicon technologies developed during the last decades.
The thesis is structured as follows. The background information required for this work is covered in chapter 2: A general description of linear radio-frequency ion traps and their working principle are given. To store and manipulate quantum information, certain electronic states and certain motional states of a cold trapped 40Ca+ ion are used which can be manipulated with laser radiation. The atomic properties of 40Ca+ ions are listed, and the interaction of an atom with laser light is discussed i-
n this chapter. Diﬀerent laser cooling techniques and detection methods of trapped ions are introduced. Chapter 3 starts with a description of diﬀerent types of microtraps, namely surface traps and multi-layer traps. One key parameter of the traps is the motional heating of the trapped ions, which describes the coupling of the ions with the environment. This heating reduces the quality of the quantum operations performed on the ions and, therefore, should be as small as possible. Unfortunately, th-
e heating increases with reduced trap dimension, which makes quantum operations in microtraps very challenging. Possible sources of the heating and ways to reduce them are given. Methods to measure the heating are listed. In addition, ions in a cryogenic environment and the associated improvements of the trapping performance are discussed. Chapter 4 gives the experimental setup which was designed and built during the course of this work. It includes the vacuum chamber, the optical and electronic s-
etup to trap ions and a cryogenic system which allows the ion traps to be cooled below 10 K. The geometry of the trap electrodes used in the experiments presented in this thesis is given in chapter 5. It is a linear RF surface trap. Its electrode conﬁguration is discussed and simulations of the potential are presented. Ion traps based on silica substrates and their performance are presented in chapter 6. This type of trap is wellknown for its good performance [18, 19] and was used to characterize -
the experimental setup. A novel trap design based on a silicon substrate is introduced in chapter 7. Its design and fabrication are discussed in detail. Furthermore, the trap performance is investigated. In particular, the motional heating of the ions is characterized and found to be very low, both in absolute terms, and relative to typical heating rates observed in other systems. Finally, a summary and a conclusion are given in chapter 8.
3

Introduction 4

Chapter 2
Ion trapping fundamentals

All of the experiments described in this thesis deal with laser cooled 40Ca+ ions conﬁned in a linear Paul trap. This chapter discusses the basic physics of such a situation. Section 2.1 describes ion traps in general and their principles of operation. The energy levels and the optical transitions of 40Ca+ ions are given in section 2.2. The laser-ion interaction is brieﬂy reviewed in section 2.3. Furthermore, basic ion-trapping techniques like cooling and detection are presented in this section.

2.1 Radio-frequency ion traps
The radio-frequency (RF) ion trap or Paul trap was invented by Wolfgang Paul [20, 21]. It provides a way to trap charged particles such as atomic ions using a combination of static (DC) and time-varying (AC) electric ﬁelds.

2.1.1 Operation principle

Particles can be, in general, trapped in a three-dimensional harmonic potential. This can be expressed by the following equation

U (x, y, z)

=

1 2

(kxx2

+

ky y2

+

kz z 2 ),

(2.1)

where ki is deﬁned as ki = ∂i2U . The associated oscillator frequencies ωTi of a single trapped particle (e.g. ion) with mass m can be calculated using the formula

ωT i =

ki . m

5

(2.2)

Ion trapping fundamentals

Based on eq. (2.1) the following electric potential is necessary for trapping ions with a charge Q in a harmonic trap:

φ(x, y, z)

=

U (x, y, z) Q

=

1 2Q

(kxx2

+

ky y2

+

kz z 2 ).

(2.3)

However, any electrostatic potential in free space has to satisfy Laplace’s equation:

1 ∆φ = 2Q (kx + ky + kz) = 0,

(2.4)

According to this equation, at least one ki has to be negative which, in turn, causes an anti-trapping potential in that direction. Consequently, trapping of ions in an electrostatic potential in free space is not possible. A stable trapping potential can be created using an alternating quadrupole potential. A snap-shot of such a potential in two dimensions is shown in ﬁg. 2.1a. This saddle-shaped potential has a trapping component in the y direction and an anti-trapping component in the x directi-
on. If these components are alternating at the right frequency, the ions see a time-averaged potential with trapping components in both directions. This eﬀective potential is thus a pseudopotential and its potential minimum corresponds to the saddle point of the alternating quadrupole potential.

(a)

(b)

-VRFcos(ΩRFt)/2

VRFcos(ΩRFt)/2

y x

Vendcap
y xz

Vendcap

Figure 2.1: (a) Instantaneous electric quadrupole potential in a Paul trap. This saddleshaped potential alternates at a frequency ΩRF in order to generate the so called pseudopotential. Ions can be trapped at the minimum of the pseudopotential which corresponds to the saddle point of the quadrupole potential (marked). (b) Traditional linear Paul-trap design. To generate a parabolic trapping potential alternating voltages (amplitude ±VRF/2) are applied to the opposing hyperbolically-shaped electrod-
es. This provides trapping in the x,y plane. DC voltages applied to the endcap electrodes generate a conﬁnement along the z axis.

It can be generated in the Paul trap as shown in ﬁg. 2.1b. A sinusoidal voltage with an amplitude of VRF/2 is applied to the four hyperbolically-shaped axial electrodes. To produce the quadrupole potential, there is a phase shift of 180◦ between the two pairs of
6

2.1 Radio-frequency ion traps

opposing electrodes. The resulting potential can be written as

φ(x,

y, z, t)

=

VRF 2R02

(x2

−

y2) cos(ΩRFt),

(2.5)

where 2R0 is the closest distance between two opposing trap electrodes. ΩRF is the alternating frequency of the quadrupole potential, also called the trap-drive frequency. Ignoring end eﬀects, the motion of an ion in the quadrupole potential can be described by these diﬀerential equations [21]:

x¨

−

qΩ2RF 2

cos(ΩRFt)x

=

0

y¨

+

qΩ2RF 2

cos(ΩRFt)y

=

0

z¨ = 0.

(2.6) (2.7) (2.8)

These are a special form of Mathieu’s diﬀerential equation. q is called the stability pa-

rameter and is deﬁned by

q

=

2QVRF mR02Ω2RF

.

(2.9)

It can be shown that stable trapping in the x and y direction is possible for 0 < q < 0.908

assuming no additional DC ﬁelds are applied to the axial electrodes [22]. In this case the

trajectories can be decomposed into two diﬀerent oscillations.

The frequency of the ﬁrst oscillation is equal to the trap drive frequency, ΩRF. The associated motion (micromotion) is typically unwanted because it causes atomic level shifts and reduces the laser cooling eﬃciency [23]. It is smallest when the ion is located at the RF saddle point (pseudopotential minimum), where the electric RF ﬁeld is zero. Stray ﬁelds can push the ion oﬀ this point and increase the micromotion. Therefore, compensation voltages are usually applied with the aim to oﬀset the str-
ay ﬁelds and minimize the micromotion. This is called micromotion compensation. Exactly how it is implemented is discussed in section 5.2.2.

The second oscillation is lower in frequency and typically larger in amplitude. It is called secular motion and its frequency is (assuming q2 1)

ωTx,y

=

qΩ√RF . 22

(2.10)

The secular motion can be understood as the motion of a particle trapped in the pseudopotential (pseudopotential approximation), which is given by

UPseudo(x, y, z)

=

Q2 4mΩ2RF

|∇φeﬀ(x,

y,

z)|2.

(2.11)

7

Ion trapping fundamentals

φeﬀ(x, y, z) corresponds to the potential φ(x, y, z, t) with maximum amplitude [i.e. where cos(ΩRFt) = 1]. Considering the potential in the Paul trap given by eq. (2.5), the corresponding pseudopotential is

UPseudo(x, y, z)

=

1 2

Q2VR2F 2mΩ2RFR04

(x2

+ y2).

(2.12)

This represents a stable harmonic trapping potential in two direction (x and y axes, or radial axes). Trapping in the third direction along the z axis (axial direction) can be accomplished by applying a DC voltage to the two endcap electrodes (see 2.1b) which creates a harmonic potential in the z direction. The endcap voltage is usually chosen in a way that the corresponding axial trap frequency is smaller than the radial trap frequencies, ωTz < ωTx, ωTy. This enables chains of ions to be trapped -
aligned along the axial direction.
In a traditional trap used for trapping atomic ions (e.g. [24]) the typical distance between the center of the trap and the electrodes, R0, is about 0.5 − 1 mm. The amplitude of the alternating voltage, VRF, and frequency, ΩRF , are about 1 kV and 10-100 MHz, respectively. These frequencies are part of the radio frequency (RF) band. Therefore, the drive frequency and amplitude are called RF frequency and RF voltage, respectively.
Typically, an RF voltage of VRF is only applied to one electrode pair, whereas the second pair is kept at ground instead of applying ±VRF/2 to both pairs. On the one hand, this simpliﬁes the experimental setup since only one RF source is necessary and no phase lock is required. On the other hand, the working principle of the trap does not change.

2.1.2 Non-ideal traps
The hyperbolically-shaped electrodes in the traditional Paul trap make sure that the entire electric potential inside the trap corresponds to a well-deﬁned quadrupole potential described by eq. (2.5). This potential forms the harmonic pseudopotential with a minimum in the center for trapping [see eq. (2.12)]. However, the trapping potential does not need to be harmonic over the entire volume enclosed by the electrodes. As the ion is generally conﬁned to within a few microns of the trap axis, the p-
otential only needs to be harmonic (to a good approximation) over a small region where the ions are situated. The idealized hyperbolic geometry can be signiﬁcantly deformed while maintaining a harmonic potential minimum at the trap center. The operation of a generalized non-hyperbolic trap is discussed here, while the details of the kinds of deformations used in practice are discussed in chapter 3.
The physics and equations given in section 2.1.1 can be used to describe the nonhyperbolic trap as well. For the same applied voltage, however, the harmonic term of the potential generated by this trap is smaller than that in a hyperbolic trap of similar dimensions. Therefore, an additional eﬃciency parameter ( ) must be added to accommodate that. The parameter can be understood to describe how much of the applied voltage VRF
8

2.2 40Ca+ ion

is contributing to the harmonic component of the potential and how much is going into higher order terms. is 1 for a hyperbolic trap by deﬁnition and 0 < < 1 for most other trap conﬁgurations. For surface traps the eﬃciency parameter is typically around 0.2 − 0.3. To take this into account, the potential used in eq. (2.11) is modiﬁed to

φeﬀ(x, y, z) = φeﬀ(x, y, z). Furthermore, the stability parameter, q , of a non-hyperbolic trap is

(2.13)

q = q.

(2.14)

As mentioned before, for a stable trap operation it is essential to run the trap within a

certain range of q values. Hence, it is useful to determine beforehand. Because there is

not a general analytical solution for in an arbitrary trap geometry, is often calculated

using numerical simulations (see section 5.2). From the simulations, the trap frequencies

ωTi can be retrieved. Comparing them with the trap frequencies of the hyperbolic trap (ωTi) allows the determination of in the pseudopotential approximation:

√

i

=

ωT i ωT i

=

ωT

i

mΩRFR02 QVRF

2 .

(2.15)

Here, eq. (2.10) was used to rewrite ωTi. It should be noted that R0 of a hyperbolic trap is explicitly deﬁned as the shortest
distance between the trap center and the electrodes [see eq. (2.5)]. Due to the symmetry of this trap design the geometric center of the trap is also the minimum of the trapping potential, and the shortest distance between the center and every electrode is the same for all four axial electrodes. That does not hold for an arbitrary trap conﬁguration: the shortest distance can be diﬀerent for diﬀerent electrodes. Therefore, R0 should be understood as the shortest distance between the trapped ions an-
d the nearest trap electrode. This means that deﬁned in eq. (2.15) compares an arbitrary trap to a hyperbolic trap with the same minimum ion-electrode distance.

2.2 40Ca+ ion
Diﬀerent atom species can be used in quantum computing experiments [25]. There are, however, several requirements that have to be considered. The atoms should be stable and have a relatively simple energy-level structure when ionized, which includes a metastable state that can be used together with the ground state to encode a quantum state (electronic qubit). The relevant atomic transitions should be in or near the optical range and a laser system must be available to address them. The traps pres-
ented in this work are operated with 40Ca+ ions. 40Ca is a stable alkaline earth metal. If singly ionized, these atoms
9

Ion trapping fundamentals

have only one valence electron and, therefore, a simple energy level structure similar to hydrogen. All relevant energy transitions are between 390 nm and 870 nm, and commercial diode laser systems are available to drive them. The lowest energy levels are depicted in ﬁg. 2.2.

4²P3/2

τ = 6.9 ns

τ = 7.1 ns
4²P1/2

393.366 nm (92%)

854.209 nm (7%)

866.214 nm (8%)

3²D5/2
τ = 1.17 s

396.847 nm (92%)

τ = 1.20 s

3²D3/2

729.147 nm

4²S1/2
Figure 2.2: The lowest energy levels of the 40Ca+ ion including the Zeeman sublevels. The transition wavelengths, the branching ratios and the natural life times of the excited states, τ , are stated [26–28]. The dipole transition at 397 nm is used for Doppler cooling and state detection. To empty the meta-stable D states repumping lasers at 866 nm and 854 nm can be applied. The quadrupole transition at 729 nm is used for ground-state cooling, heating-rate measurements and encoding the electronic -
qubit.
At ﬁrst, only the basic transitions of 40Ca+ are considered, ignoring Zeeman sublevels. The 42S1/2 state is the electronic ground state of the 40Ca+ ion. The next higher levels are two D-levels (32D3/2, 32D5/2) which are energetically separated due to spin-orbit coupling. The S-D transition is a quadrupole transition and electric-dipole forbidden. The D states have a long life time of about 1 s and are called metastable for that reason. The S1/2 and the D5/2 states are used to encode the electroni-
c qubit. In this context they are also referred to as |S and |D , respectively. Strong laser light at 729 nm can be used to drive the transition.
42P1/2 and 42P3/2 are the next higher levels. There exist dipole transitions to the 4S and 3D states. The life times of the P state are a few ns. The 42S1/2 − 42P1/2 transition, with a linewidth of 22.4 MHz, can be driven with a laser at 397 nm and is used for Doppler cooling and state detection (see section 2.4). The valence electron can also decay from the 42P1/2 state to the metastable 32D3/2 state with a probability of 7.5%. Therefore, a repumping laser at 866 nm is required during Doppler coo-
ling and state detection in order
10

2.2 40Ca+ ion

to suppress the population of the D state. A second repumping laser at 854 nm is used for the state initialization of the electronic qubit. It pumps the population from 32D5/2 to 42P1/2 from where it rapidly decays to the ground state.
Having discussed the gross structure above, the following section considers the eﬀect of
the Zeeman sublevels. In the absence of an externally applied magnetic ﬁeld the Zeeman
levels are degenerate. To lift this degeneracy in the experiments a magnetic ﬁeld of several Gauss is applied. This leads to a splitting of 1.68 MHz/G between each of the 32D5/2 levels and a splitting of 2.80 MHz/G between the 42S1/2 levels [29]. Due to this Zeeman splitting, there are 10 transitions between the states 42S1/2 and 32D5/2, as shown in ﬁg. 2.3.

-5/2 -3/2 -1/2

1/2

3/2

5/2 3²D5/2

sideband cooling

electronic qubit
optical pumping

mJ=-1/2 1/2 4²S1/2
Figure 2.3: Zeeman sublevels of the states 42S1/2 and 32D5/2 and the possible quadrupole transitions. The single transitions can be individually addressed by tuning the wavelength and polarisation of the 729 nm laser. Three transitions are highlighted which are used for diﬀerent procedures during the ion trapping experiments presented in this thesis. Further details on these procedures can be found in the main text.
Three of the transitions are used for special purposes in this work:
 Sideband cooling The transition S1/2(mJ =-1/2)−D5/2(mJ =-5/2) is employed in the sideband-cooling procedure (see section 2.4.2).
 Electronic qubit The transition S1/2(mJ =-1/2)−D5/2(mJ =-1/2) is often used to encode the electronic qubit |S -|D because it is less sensitive to magnetic ﬁeld ﬂuctuation than other transitions1. In this work, the motional heating of the ions is measured with this transition (see section 3.2.3).
 Optical pumping To perform sideband cooling and heating rate measurements on the transitions cho-
1The same is true for the transition S1/2(mJ =1/2)−D5/2(mJ =1/2).
11

Ion trapping fundamentals
sen above requires the ion to be in initial state S1/2(mJ =-1/2). This can be achieved by the so-called optical pumping. Thereby, the transition S1/2(mJ =1/2)−D5/2(mJ =3/2) is used in combination with the repumping laser at 854 nm in order to collect the population of the S1/2(mJ =-1/2) state.

2.3 Laser-ion interaction in a harmonic trap

The quantum mechanical behavior of an ion in a Paul trap is brieﬂy considered in this section. The detailed description is given elsewhere [30]. The ion is treated as a two-level system with ground state |S and excited state |D , which were already introduced as the electronic qubit states in section 2.2. The energy diﬀerence between those states is
ωe. The ion is trapped in a harmonic potential with trapping frequency ωT (see section 2.1.1). This is described by the quantum harmonic oscillator. The motion of the ion is quantized with the energy levels ωT(n+1/2), where n indicates the phonon number. The corresponding quantum states are referred to as |n . Because multiple ions in a trap share the same motion, the phonons can be used as a quantum bus to connect the electronic states of diﬀerent ions. Furthermore, the ion can interact with a la-
ser beam of frequency ωL. The laser can be either in resonance with the electronic qubit transition or detuned by ∆ = ωL − ωe. It can drive the transition between the two states of the electronic qubit. Depending on the detuning it can also couple the electronic qubit with the motional states of the ion in the trap (∆ = ±ωT).
The total Hamiltonian, H, of this system consists of a time-independent and a timedependent part. The time-independent part, H0, describes the electronic two-level system, He, and the ion’s motion in the harmonic potential, Hm. The interaction of the ion with the laser Hi corresponds to the time-dependent part:

H = H0 + Hi = Hm + He + Hi.

(2.16)

The Hamiltonian, He, of the electronic state can be written as

He =

ωe (|S 2

S| − |D

D|).

(2.17)

However, it proves beneﬁcial to represent this Hamiltonian in the spin-1/2 algebra using

the Pauli spin matrices:

He =

ωe 2

σz

.

(2.18)

The motional Hamiltonian, Hm, can be stated as the sum of the kinetic and potential energy of a harmonic oscillator where the displacement, x, and the momentum, p, are

12

2.3 Laser-ion interaction in a harmonic trap

replaced by the operators xˆ and pˆ, respectively:

Hm

=

pˆ2 2m

+

mωT2 xˆ2 . 2

(2.19)

It proves again to be useful to rewrite the Hamiltonian. Using the creation and annihilation operators a and a† eq. (2.19) is modiﬁed to

Hm =

ωT(a†a

+

1 ),
2

(2.20)

where a = mωT/(2 )(xˆ + pˆ · i/(mωT)) and a† = mωT/(2 )(xˆ − pˆ · i/(mωT)). The interaction term for one dimension can be written as

1 Hi = 2

Ω(σ+ + σ−)(ei(kx−ωLt+φ) + e−i(kx−ωLt+φ)).

(2.21)

where σ± = (σx ± iσy)/2. In this case the laser beam is aligned parallel to the x axis of the trap and k is its wave number. Ω is the Rabi frequency which is associated with the coupling strength between the ion and the light ﬁeld. For a better understanding of the interaction, a transformation from the Schr¨odinger picture into the interaction picture is performed by applying the interaction Hamiltonian, HI = U †HiU , where U = e−iH0/ . Furthermore, HI can be simpliﬁed using the so-called rotatin-
g-wave approximation2:

1 HI = 2

Ω(σ+eiη(a˜+a˜†)e−i∆t + σ−e−iη(a˜+a˜†)ei∆t).

(2.22)

In this equation a˜ = ae−iωTt was used and the Lamb-Dicke parameter, η, was introduced

η = kx0 = k

, 2mωT

(2.23)

where x0 corresponds to the extension of the wave function of the trapped ion in the ground state. Eq. (2.22) states that the electronic ground state |S and the motional state |n can be coupled with the excited state |D and a diﬀerent motional state |m (|S, n ↔ |D, m ). In the ion’s rest frame it can also be understood that the laser frequency ωL is modulated with the trap frequency, ωT. By changing the detuning, ∆, the modes which are coupled can be selected. For example if ∆ ≈ (m−n)ωT the states-
 |S, n and |D, m will be coupled. Depending on the detuning the following cases can be distinguished (see ﬁg. 2.4). If m > n (m < n) the transition is called a blue (red) sideband transition. If the motional state does not change (n = m) the transition is referred to as a carrier transition.

The coupling strength of the diﬀerent transitions can be described by their Rabi fre-

2This means that the fast-oscillating terms are neglected since they have very small inﬂuence on the time evolution.
13

Ion trapping fundamentals

ωT
> ωT |D,n-1

red

ωe

sideband

> |S,n-1

> |D,n+1 > |D,n

carrier

blue

sideband

> |S,n+1 > |S,n

Figure 2.4: Carrier and ﬁrst-order sidebands of the quadrupole transition. The motion of the ion in the harmonic trap (frequency ωT) modulates the atomic transition (frequency ωe) and introduces sidebands. Driving the red sideband reduces the phonon number by one and driving the blue sideband increases it by one. The carrier leaves the phonon number unchanged.

quencies [29]

Ωn,m = Ωm,n = Ω0| n| eiη(aˆ+aˆ†) |m |.

(2.24)

This expression can be further simpliﬁed if the ions are cooled into the Lamb-Dicke regime

[η2(2n + 1) 1]. In this limit the probability of higher order transitions (|n − m| > 1)

is small and can be neglected. The Rabi frequency of the carrier transition can then be

written as

Ωcar = Ωn,n = Ω0(1 − η2n)

(2.25)

with the coupling weakly depending on the motional state of the ion. The coupling strength of the ﬁrst red and blue sideband are

√ Ωred = Ωn,n−1 = Ω0η n
√ Ωblue = Ωn,n+1 = Ω0η n + 1.

(2.26) (2.27)

The Rabi frequencies of these two sidebands vary as a function of the phonon number. This eﬀect can be used to measure the phonon number and the motional heating rate of the trapped ions (see section 3.2).

2.4 Cooling and detection
To measure the heating rate of the trapped ions, the motional sideband spectroscopy method [31] is used in this work which is discussed in detail in section 3.2.3. It basically consists of three steps. First, the ion is cooled. The cooling is switched oﬀ and the ion can heat up for a certain time (waiting time). In the last step, the motional sidebands on
14

2.4 Cooling and detection
the quadrupole transition are investigated in order to retrieve the current phonon number [compare eq. (2.26) and eq. (2.27)]. By varying the waiting time, the heating rate can be determined.
Using motional sideband spectroscopy, the phonon number can be measured with a high resolution (< 0.1 phonons). This, however, requires the ion to be cooled close to its motional groundstate (see section 3.2.3) which can be achieved by combining two laser cooling methods: Doppler cooling [30] and sideband cooling [30, 31]. Both methods are brieﬂy discussed below. First, the ion is cooled down in to the Lamb-Dicke regime by Doppler cooling. Further cooling to the ground state can be accomplished by-
 sideband cooling. Both methods are, in principle, similar but use diﬀerent atomic transitions. The natural linewidth of the transition used for Doppler cooling is much larger than the trap frequency (Γ ωT). This is called unresolved-sideband or weak-binding regime. For sideband cooling, the linewidth is much smaller than the trap frequency (Γ ωT), and it is called resolved-sideband or strong-binding regime. Both methods are brieﬂy described in this section.
The S-P transition (see section 2.2) which is used for Doppler cooling also provides a way to image the ions and detect their state. Therefore, the ﬂuorescence light created when driving this transition is detected. This procedure is presented in this section too. A detailed description about the cooling methods and the state detection can be found in the PhD thesis of C. Ross [29].

2.4.1 Doppler cooling

In the weak-binding regime the ion can absorb and emit many photons during one os-

cillation in the harmonic trapping potential. Thereby, its velocity alternates periodically

causing a time-dependent Doppler shift. The rate at which the ion scatters photons de-

pends directly on this time-dependent Doppler shift which means that the scattering rate

is also velocity-dependent and oscillates in time. The momentum transfer from the photon

to the ion during absorption is always in the direction of the laser beam. The emission,

however, is in a random direction and its momentum transfer averages out over time.

These two eﬀects combined can be understood as a velocity-dependent radiation pressure

which cools the ion for red-detuned light and heats it for blue-detuned light. Due to mo-

mentum transfer during photon absorption and emission the ion performs a random walk

in momentum space, which limits its minimum momentum achieved by Doppler cooling

(Doppler limit). The minimum energy in the Doppler limit which is reached for a detuning

∆ = −Γ/2, is [32]

Γ

ED =

. 2

(2.28)

15

Ion trapping fundamentals

The corresponding mean phonon number of the trapped ion is

Γ

nmin

≈

. 2ωT

(2.29)

The optical transition used for Doppler cooling 40Ca+ ions is the S1/2−P1/2 transition with a natural linewidth of 22.4 MHz (see ﬁg. 2.2). For typical trapping parameters (ωT = 2π×1 MHz, Lamb-Dicke parameter η = 0.07), the mean phonon number in the Doppler limit is ∼11 and the Lamb-Dicke regime η2(2n + 1) 1 can be reached.
To Doppler-cool the motion along all three principal axes of the trap, the laser beam must have a component parallel to each axis. Some trap geometries restrict optical access from certain directions such that this condition is not necessarily easy to meet. Especially in surface ion traps, some modiﬁcations may be necessary to enable a proper cooling along the direction of all principal axis. Such modiﬁcations are discussed in detail in section 3.1.2.

2.4.2 Sideband cooling
Further cooling beyond the Doppler limit can be achieved by sideband cooling. The quadrupole transition, S1/2−D5/2, at 729 nm is used for that. The natural linewidth of this transition (<1 Hz) is much smaller than the trap frequencies and, therefore, allows frequency resolved addressing of the motional sidebands. The sideband cooling procedure is depicted in ﬁg. 2.5. The cooling laser is red-detuned by ∆ = −ωTi to couple the states |S, n ↔ |D, n − 1 as shown in ﬁg. 2.4. Thereby, the phonon number -
of the motional state is reduced by one each time the ion is pumped in the D5/2 state.
In order to achieve a reasonably high cooling rate, it is necessary to shorten the long lifetime of the metastable D state (∼1 s). This can be achieved by using laser light at 854 nm which couples the D5/2 state to the short living P3/2 state. The P state decays predominantly to the S state without changing the phonon number (see ﬁg. 2.2). If |n = 0 is reached the coupling strength on the red sideband turns zero and the ion settles in the motional ground state.

2.4.3 Detection
To image the ion in the trap a photomultiplier tube (PMT) and a CCD camera are used. They collect the photons scattered by the ion when the S1/2−P1/2 transition is driven by the 397 nm laser. Due to the short life time of the P3/2 state photons are scattered at a suﬃciently high rate to allow a fast detection of the ion (∼ms).
This setup is also used to retrieve probabilities of occupancy of the S and D states (electron shelving technique). The S state scatters photons via the S-P transition when illuminated with the detection laser. The D states, however, remains dark. This enables
16

2.4 Cooling and detection
n-1 ωT ωe

n
854 nm

n+1

P3/2

D5/2

393 nm

729 nm
S1/2

Figure 2.5: Sideband cooling scheme. The laser at 729 nm is detuned to the red sideband coupling |S, n and |D, n − 1 . The phonon number is reduced by one every time the ion is pumped into the D state. A repumping laser at 854 nm quenches the life time of the D state by pumping the ion in the P state from where it rapidly decays to the S state. The phonon number is conserved with high probability during this decay in the Lamb-Dicke regime.
state discrimination close to 100% [31]. Repeating the state detection measurement many times on the identically prepared state allows then the reconstruction of the occupation probabilities.
The state detection provides a simple way to read out the state of the electronic qubit deﬁned in section 2.2. It is also utilized for spectroscopy measurements on the quadrupole transition such as motional sideband spectroscopy used to determine the heating rate (see section 3.2.3).

17

Ion trapping fundamentals 18

Chapter 3
Scalable ion traps
Ion traps have already been used to demonstrate, in principle, all components necessary for building a quantum computer [17, 33, 34]. This, however, has so far been limited to not more than a few ten ions [35, 36]. To put this number into context, the simulation of quantum systems on a classical computer should be considered. To date, the largest quantum computation system with 42 qubits was simulated on the supercomputer “Jugene” using 262144 CPUs [37]. To create more than 42 qubits and outperfor-
m a supercomputer, an ion-based quantum computer only needs 100-1000 well controlled ions. This takes into account that multiple physical qubits (ions) are used for one logical qubit in order to enable quantum error correction.
There exist diﬀerent approaches to scale ion trapping systems to accommodate hundreds or thousand of individually controllable ions. The most prominent are listed here:
 Segmented trap/shuttling - Several linear traps grouped on a single chip form quantum registers. They are linked by shuttling one or more ions from one trap to the next. The shuttling is accomplished by segmenting the DC electrodes and varying the voltages applied to them. This allows quantum communication between the diﬀerent registers [38, 39].
 Segmented trap/no shuttling - Long changes of ions with uniform spacing are trapped in a segmented trap. Transverse phonon modes are used to realize quantum gate operations without the need for single-mode resolution [40, 41].
 Trap arrays/nearest-neighbor interaction - An array of individual traps is created on a chip. The distances between the adjacent trapping sites are chosen to be small enough to oﬀer adequate coupling between the individual ions. This enables a nearest-neighbor quantum interaction [42, 43]. The basic scheme has already been demonstrated in a 1D array [44], and there are attempts to generalize it to 2D arrays [45, 122].
19

Scalable ion traps
 Modular ion trap quantum-computer - Individual ion traps form single registers, and they are connected with each other via photonic interfaces. In contrast to the other schemes, it is not necessary that the individual trap registers are located next to each other (on the same chip or carrier) [46].
The work in this thesis is directed at segmented traps. It may, however, be noted that several aspects of the work could could ﬁnd application in the other approaches. These connections will be highlighted in the relevant sections.
To realize the segmented-trap architectures diﬀerent trap designs can be used. Due to the fact that a large number of segmented electrodes is needed, the trap features such as electrode width have to be chosen to be rather small (< 1 mm). Such traps are typically referred to as microtraps, however, there exists no general deﬁnition. Diﬀerent types of microtrap designs are presented in section 3.1. As the traps are miniaturized - with the electrodes being moved closer to the ion - the ions are incr-
easingly perturbed by sources of noise related to the electrodes’ proximity. This causes an increased motional heating which is discussed in section 3.2. The increased heating caused by smaller trap sizes can be oﬀset by reducing the temperature of the trap. Indeed, operation of traps at liquid helium temperatures brings a number of advantages, each of which is discussed in section 3.3.

3.1 Microtraps

In general, microtraps can be divided in multi-layer traps and surface traps. A comparison of the diﬀerent electrode conﬁgurations is shown in ﬁg. 3.1. The pseudo-potentials created by these traps are illustrated in ﬁg. 3.2. The diﬀerent types of traps are discussed in this section.

(a) Gnd

(b) VRF

(c) Gnd

VRF

VRF

Gnd

Gnd

y

VRF

Gnd VRF Gnd VRF Gnd

x

z

Figure 3.1: Cross-section of diﬀerent electrode conﬁgurations perpendicular to the trap axis. To create a radial trapping potential, RF-voltage is applied to the green electrodes while the gray electrodes are kept at ground. The crosses indicate the trapping position. (a) Hyperbolic trap, (b) two-layer trap and (c) surface trap.

20

3.1 Microtraps

(a)

(b)

(c)

y

x

z

Figure 3.2: Simulated pseudopotential in a plane perpendicular to the trap axis created by the diﬀerent electrode conﬁgurations in ﬁg. 3.1. The potentials were simulated in COMSOL 3.4 (see section 5.2).

3.1.1 Multi-layer traps
Multi-layer traps consist of several electrode layers which are stacked (see ﬁg. 3.1b, ﬁg. 3.2b). Typically, two [47–49] or three layer [50] conﬁgurations are used. In the two-layer design RF voltages are applied to two diagonally opposite electrodes, while holding the other electrode pair at RF ground (see ﬁg. 3.1b). This creates a pseudopotential minimum parallel to the RF-electrodes (i.e. parallel to the z-direction), and at the geometric center of the trap in the x-y plane.
The DC electrodes which are held at RF-ground (colored gray in ﬁg. 3.3) are segmented, and a diﬀerent DC voltage can be applied to each segment. By this means an axially conﬁning potential can be generated. If suﬃciently many segments are available, multiple local axial minima can be created. These can be used to independently trap multiple ions or ion strings. Varying the potential applied to the DC electrodes changes the positions of the minima (and so the positions of the trapped ions). This al-
lows shuttling of individual ions or ion strings along the trap axis.
There exist diﬀerent ways to build multi-layer traps [51]. A very simple and basic method is stacking layers of copper and Kapton stripes [52]. The assembly of the strips has to be done manually and all electrodes have to be individually aligned which makes it time-consuming and limits the alignment precision. Another method is using gold-plated alumina wafers [48, 49]. Gold is partially removed by laser cutting in order to create the individual electrodes on the wafers. Thereby, a more precise al-
ignment of the electrodes on a wafer can be achieved. However, to build a multi-layer trap, several wafers have to be stuck together which is still done by hand. To create a monolithic trap which requires no manual assembly steps, technologies from the semiconductor industry are adopted [53, 54]. This includes optical lithography, plasma etching and physical vapor deposition which enable a sub-µm-resolution.
Diﬀerent operations which are necessary for a quantum computer based on the shuttling architecture could be already implemented in multi-layer traps. For example, shuttling along a linear trap and through junctions has been shown [50, 55]. Additionally,
21

Scalable ion traps

y

x

z

Figure 3.3: Two-layer conﬁguration. RF-voltage is applied to the green electrodes, while the gray electrodes are held at RF ground. This creates a radially (x, y) conﬁning potential along the geometrical center of the trap. The gray electrodes are segmented and DC voltages can be applied to them which enables the generation of a conﬁning potential along the axial (z) direction. The minimum of the conﬁning potential can be shifted along the axial direction by changing the applied DC voltages. This -
enables axial shuttling of the trapped ions as well as splitting and combining of the ion strings.

splitting and combining of strings has been demonstrated [56]. Each of these operations is possible with the shuttling of the ions causing very little additional motional heating.

3.1.2 Surface traps
In a surface ion trap all DC and RF electrodes are aligned in one plane [18, 47]. The trapping position is located above the surface as depicted in ﬁg. 3.1c. A typical realization of a linear surface trap is shown in ﬁg. 3.4. Two RF stripe electrodes are arranged parallel to an interjacent center electrode on top of a substrate. Segmented electrodes are located on each side of the two RF electrodes. Applying an RF voltage to the RF electrodes while all other electrodes are RF-grounded generates th-
e pseudopotential to trap ions radially (see ﬁg. 3.2c). Similar to the multi-layer traps, DC voltages are applied to the segmented electrodes in order to create conﬁnement along the axial direction. A DC voltage can also be applied to the center electrode which is usually used for micromotion compensation.
The ﬁrst surface ion trap was tested by Seidelin and co-workers at NIST in 2006 [18]. By means of photolithography, gold structures were created on a quartz substrate in order to form the trap electrodes. Since then, a huge variety of surface traps has been built. In an eﬀort to improve the performance of the traps the materials used were varied. For example, sapphire substrates [57] and superconducting electrodes [58] were tested1. In addition, attempts were made to combine the trap fabrication w-
ith the well established
1However, no signiﬁcantly improved trap performance could be observed for trap using these materials.
22

3.1 Microtraps
Figure 3.4: Schematic of a linear surface trap. All electrodes are located in a single plane on top of a substrate with ions trapped above the surface. The trap consists of two RF electrodes (green) and multiple DC electrodes (gray) which are RF-grounded. Applying an RF voltage to the green electrodes creates the pseudopotential to trap ions in the x − y plane. DC voltages applied to the segmented DC electrodes generate a conﬁnement in the axial (z ) direction.
silicon-patterning technologies. On the one hand, this can help to improve the fabrication resolution. On the other hand, CMOS technology could then be directly implemented on the trap chip in order to control and ﬁlter the trapping voltages. Therefore, highly doped silicon-substrates and silicon-electrodes were tested [59]. Furthermore, CMOS compatible metals like aluminium were used as trap electrodes [60, 61], and an entire trap has been fabricated using 90-nm CMOS foundry processes [62].
The basic elements of the shuttling and the nearest-neighbor interaction architecture could already be realized in surface traps. Shuttling of ions along a linear trap and through junctions as well as the separation and recombination of linear ion strings has been shown [39, 63]. Furthermore, the coupling of ions conﬁned in diﬀerent traps was demonstrated [64].
In comparison to multi-layer traps, the fabrication of surface traps is typically simpler and faster. However, the trap depth - the minimum kinetic energy which an ion requires to exit the trap - is signiﬁcantly smaller due to the strongly modiﬁed electrode conﬁguration compared to the hyperbolic trap (see section 2.1.2). For the same reason, the eﬃciency parameter in surface traps is smaller ( =0.2-0.3) than the one in multi-layer traps ( =0.70.8). For example, a multi-layer trap and a surface tr-
ap with the same ion-electrode separation were simulated in the master’s thesis of A. Pauli [65]. The trap depth in the surface trap was smaller by factor 30. The eﬃciency parameters of the surface trap and the multi-layer trap were 0.32 and 0.76, respectively.
Furthermore, addressing and cooling of all motional modes can be more challenging in surface traps. For surface traps, the laser beams are typically aligned parallel to the surface in order to minimize stray light which otherwise handicaps the ion detection by
23

Scalable ion traps

reducing the signal-to-noise ratio. This, however, precludes the cooling and addressing of the motional mode perpendicular to the surface shown in ﬁg. 3.5a (see also section 2.4.1). There exist diﬀerent approaches to mitigate this issue. An asymmetric trap design can be used where the two RF electrodes diﬀer in width [66]. The corresponding trapping potential is rotated due the asymmetry, so that none of the principal axes are normal to the plane of the trap (see ﬁg. 3.5b). This means that a singl-
e laser beam which is aligned parallel to the surface and non-perpendicular to the trap axis has a projection along all three principal axes. This approach is implemented in the trap design used in this work (see chapter 5). A similar eﬀect can be achieved in a symmetric trap by dividing the center electrode into two [67]. By applying diﬀerent voltages to the two split electrodes the overall potential will be rotated (see ﬁg. 3.5c). Another approach is a through-wafer slot located in the middle of-
 the center electrode [60]. This enables the alignment of laser beams perpendicular to the trap surface without producing additional stray light (see ﬁg. 3.5d).

(a)

(b)

(c)

(d)

Figure 3.5: Cross-section of diﬀerent surface-trap conﬁgurations perpendicular to the trap axis. The straight lines show the principal axes of the radial modes. (a) Symmetric trap. The motional mode perpendicular to the surface cannot be addressed by a cooling laser parallel to the surface. (b) The motional modes are rotated due to the asymmetric RF electrodes. (c) Diﬀerent voltages are applied to the split center DC electrodes which rotates the principal axes. In (b) and (c) a laser parallel to t-
he surface can address both radial modes. (d) A slot in the middle of the center electrode enables the alignment of a laser beam perpendicular to the surface without creating stray light.
3.2 Motional heating
One of the important characteristics of an ion trap is its motional heating rate, n˙ [68]. This heating rate describes how fast uncooled ions heat up in the harmonic potential due to coupling to the environment. In other words, it is the temporal increase of the phonon number for a certain mode. This is especially important for quantum gate operations with ions. As mentioned before, the modes of common motion - shared by all ions in the trap are used to couple the electronic quantum state of diﬀer-
ent ions. To achieve high ﬁdelites on these gate operations, the motional modes used must not appreciably heat up during gate time. For example, the implementation of a Mølmer-Sørensen gate [69] requires a heating rate of less than ∼ 100 phonons/s in order to obtain a gate inﬁdelity smaller than 10−3, which is assumed to be the upper limit for fault-tolerant quantum computation [70].
24

3.2 Motional heating

Diﬀerent causes of motional heating are discussed in the section 3.2.1. Possible techniques to reduce it are introduced in section 3.2.2, and methods to measure the heating rate are presented in the section 3.2.3.

3.2.1 Possible sources

Motional heating of trapped ions is caused by electric ﬁeld noise at the position of the ion.

The frequency component of the ﬁeld noise which is resonant with a certain trap frequency

ωTi can incoherently drive the corresponding mode and thereby heat it. For this reason, the noise is usually described by its spectral density SE(ω) (unit V2/(m2Hz)). Typically, the trap frequencies are 0.5-5 MHz. Knowing the spectral density of the electric-ﬁeld noise,

SE(ωTi), the related heating rate, n˙ , for a single ion can be calculated using the following

equation [68, 71]:

Q2 n˙ = 4m ωTi SE(ωTi).

(3.1)

Q and m are the charge and the mass of the ion, respectively.

The maximum acceptable level of electric ﬁeld noise consistent with quantum computing is now estimated. Consider a 40Ca+ ion which is trapped in a harmonic potential

with a trap frequency ωTi = 2π × 1 MHz. The heating rate of the ion is assumed to be 100 phonons/s, which corresponds to the upper limit for fault-tolerant quantum comput-

ing calculated (see above). According to eq. (3.1) an acceptable spectral density of the ﬁeld noise is then < 10−12 − 10−13 V2/(m2Hz). The level of noise actually observed in a

trap may be signiﬁcantly above this level. The noise can arise from a number of diﬀerent

sources [68], each of which has diﬀerent characteristic scalings with frequency, trap size,

trap geometry and temperature. Some of the sources which are thought to be important

are summarised here.

Electromagnetic interference
Electromagnetic radiation (EMR) propagating through free space is one possible source of electric-ﬁeld noise. A well-known component of the EMR is black-body radiation. However, its spectral density at room temperature and 1 MHz is only ∼10−22 V2/(m2Hz) (irrespective of trap size), and therefore negligibly small [68]. Other sources for EMR can be natural, like thunderstorms [72], or man-made, like power lines [73]. Especially in commercial buildings, where ion trapping experiments are typically pe-
rformed, EMR can be very high at 1 MHz (∼ 10−10 V2/(m2Hz)) [68, 74].
In addition to the direct interaction of EMR with the ions, the radiation can also couple to the wiring of the ion traps. This can cause voltage ﬂuctuations on the trap electrodes which, in turn, create ﬁeld noise at the trapping site.
25

Scalable ion traps

Johnson-Nyquist and technical noise

Johnson–Nyquist noise is the electrical noise which is generated by the thermally induced motion of the charge carriers in an electrical conductor [75, 76]. The electric-ﬁeld noise at the trapping site caused by the trap electrodes scales with D−2 where D is a characteristic trap dimension [68]. The spectral density of electric-ﬁeld noise can be written as

SE(JN)

=

4kBT

RJN D2

(ω,

T

)

,

(3.2)

where kB is the Boltzmann constant. RJN(ω, T ) is the frequency- and temperature dependent resistance and T is the temperature of the conductor. It is important to note that RJN does not only consist of the trap electrodes’ resistance but incorporates the whole electrical system consisting of trap electrodes, wiring and voltages sources. The total resistance which is relevant can be reduced by the integration of appropriate ﬁlters as discussed in section 3.2.2.

Patch potentials
The surface of an ideal conductor forms a perfect equipotential. However, for real materials, the potential on the surface of an electrode is not perfectly homogeneous. Diﬀerent crystal orientations and grain structures in the conductor [77] as well as adsorbates and contaminations on the conductor surface can cause patch potentials [68]. If these patches temporally ﬂuctuate they create electric-ﬁeld noise which can be a further source for motional heating. The absolute magnitude of the ﬁeld noise-
 produced by the patches depends on a wide variety of parameters like the size of the patches and their density.

3.2.2 Minimizing the heating
There exist several methods which are known to reduce the motional heating. Shielding of the setup and ﬁltering of the wiring helps to reduce noise caused by EMR and Johnson noise. Cleaning of the electrodes’ surfaces can also decrease the motional heating. This might be connected to an reduction of the patch potentials on the surface. These eﬀects are discussed in detail in this section. Besides them, it could be shown that cooling of the ion trap to cryogenic temperatures helps to decrease the h-
eating as well. Since ion trapping experiments in a cryogenic environment have further advantages over experiments at room temperature, this is discussed separately in the section 3.3.

Shielding and ﬁlters
Electromagnetic radiation which directly interacts with the ions can be reduced by installing the trap in a shielded environment. The vacuum chamber containing the trap is usually made from metals like stainless steel and hence already provides some shielding.

26

3.2 Motional heating
The shielding can be further improved by enclosing the trap in a Faraday cage made from a highly conducting metal like copper [79, 80]. To avoid EMR coupling to the wiring of the trap, short and shielded cables should be used. For example, coaxial cables are well suited for that purpose.
In addition, low-pass ﬁlters should be installed to ﬁlter any noise in the cables. This noise can be created by EMR pickup as well as Johnson noise due to the intrinsic resistance of the cables and the technical noise created by the voltages sources. The ﬁlters should be located as close as possible to the trap in order to minimize the length of the unﬁltered cables.
Surface cleaning
The in-situ cleaning of the electrode surfaces has proven to be a promising approach to reduce the motional heating of the ions. Adsorbates and contaminants are removed from the electrode surfaces after mounting the trap in the vacuum chamber and evacuating the chamber. Since the trap is under high vacuum for the entire time between cleaning and the ion trapping experiments recontamination of the surfaces can be reduced. One way of in-situ cleaning can be performed by using UV lasers. As shown by -
Allcock et al. [81], the motional heating was halved after illuminating the surfaces with pulsed UV light.
Another way is the implementation of sputter cleaning. This method has been commonly used in surface science research for a long time [82] but was only recently introduced to ion trap preparation. The surface is bombarded by Ar+ ions to remove the top atomic layers of the electrodes including all contaminants located on the electrodes. The motional heating could be reduced by a factor of about 100 using this technique [79, 83]. Besides the in-situ cleaning, an ex-situ plasma cleaning just before i-
nstalling the trap can help to decrease the heating. By this method, the measured heating rate has been reduced by an order of magnitude [84].
3.2.3 Heating-rate measurement
There exist several methods to measure the heating rate of trapped ions. For example, using the temperature-dependent variation of the scattering rate on the Doppler-cooling transition it is possible to infer the temperature and subsequently the heating rate of the ion [85, 86]. This method is technically simple but is not suited for measuring the very low heating rates we observe in our experiments. Low heating can be determined by the technically more complex resolved-sideband techniques.
This method investigates the motional sidebands on the quadrupole transitions to determine the motional state of the ion. Changes of the phonon number state can be resolved that are smaller than 0.1 phonons. To execute this method a frequency-stabilized laser (linewidth: ≤ 1 kHz) for the quadrupole transition is necessary and sideband cooling
27

Scalable ion traps

of the ion close to the ground state is required (see section 2.4.2). The laser-pulse sequence used is shown in ﬁg. 3.6. The ion is ﬁrst cooled to the Lamb-Dicke regime by Doppler cooling. The phonon number is further decreased by sideband cooling to bring it close to the ground state. The cooling lasers are switched oﬀ to let the ion heat up for a certain waiting time. A quadrupole-laser pulse, which is tuned either to the red or the blue sideband of the electronic-qubit transition, is then used -
to drive sideband Rabi ﬂops. This provides information about the ion’s motional state (see section 2.3). Finally, the electronic state of the ion is detected using the shelving technique (see section 2.4.3).

397 nm 866 nm 854 nm 729 nm

optical doppler cooling pumping

sideband cooling

waiting time

blue/red sideband
pluse

OP SBC OP SBC OP

PULSE

detection repumping

Figure 3.6: Pulse sequence for sideband spectroscopy to measure the phonon number of the trapped ion. The heating rate can be determined by varying the waiting time.

The basic physics of this method is summarized here, and a detailed description can

be found elsewhere [30]. Given the randomizing nature of the photon absorption and

emission process on the ion’s motion, it is reasonable to assume that the motional state

of the ion is thermally distributed. The probability of the single phonon states can then

be written as follows:

n¯ n 1

Pn = n¯ + 1

, n¯ + 1

(3.3)

with n¯ being the mean phonon number of the thermal state.

The Rabi ﬂops driven on the red (blue) sideband of a thermally distributed state are a superposition of the ﬂops on the individual Fock states. The occupation probability of the excited state |D is then:

∞
P|RDSB(t) = Pnsin2

Ωn,n−1t 2

n=1

∞
P|BDSB(t) = Pnsin2

Ωn,n+1t 2

.

n=0

(3.4) (3.5)

Ωn,n−1 and Ωn,n+1 are the coupling strength on the ﬁrst red and blue sideband, respectively, and are deﬁned in eq. (2.26) and eq. (2.27). t is the length of the laser pulse driving the ﬂops. The temporal evolution of the occupation probabilities for diﬀerent mean phonon numbers is shown in ﬁg. 3.7. Inserting eq. (3.3) in eq. (3.4) and rearranging the equation

28

3.3 Traps in a cryogenic environment

gives

∞
P|RDSB(t) =

n¯ n 1 sin2 Ωn,n−1t

n¯ + 1 n¯ + 1

2

n=1

n¯ ∞ =

n¯ n 1 sin2 Ωn+1,nt

n¯ + 1

n¯ + 1 n¯ + 1

2

n=0

=

n¯

n¯ +

1 P|BDSB(t).

The ratio, R, of the excitation probability on the red and the blue sidebands can be written

as

R=

P|RDSB P|BDSB

=

n¯ .
n¯ + 1

(3.6)

Rewriting the last equation provides a way to determine the mean phonon number of

the ion by measuring the occupation probabilities for a red and blue sideband pulse,

respectively:

R

n¯ =

.

1−R

(3.7)

Note that R does not depend on the pulse length, t. However, to achieve the highest contrast a pulse length is usually chosen which corresponds to the ﬁrst maximum on the blue sideband transition (see ﬁg. 3.7). Measuring R for diﬀerent waiting times allows the heating rate to be determined. This method works best for small phonon numbers (n¯ < 1). For higher phonon numbers the diﬀerence between Ωn,n−1 and Ωn,n+1 is reduced, and consequently the accuracy of this method decreases as well. This can b-
e seen in in ﬁg. 3.7 for n¯ = 5.

3.3 Traps in a cryogenic environment
Since the original work of Deslauriers et al. [87] in 2006 in which the electrode temperature was signiﬁcantly reduced, numerous groups have implemented traps in cryogenic systems [19, 80, 88–92]. On the one hand, the operation of traps at low temperatures (< 30 K) has several advantages compared to traps running at room temperature (∼ 300 K) which are especially important for microtrap testing. These include a reduction in the rate at which trapped ions are heated; the possibility of achieving hi-
gher vacuum; enabling vacuum to be achieved faster - and in certain respects more simply; and the possibility of using novel materials which are not otherwise suitable for ion trapping. On the other hand, there are several disadvantages linked to cryogenic setups such as higher running costs; mechanical vibration; the need to consider thermal expansion and thermal connections. Both the advantages and disadvantages are discussed in this section.
29

Scalable ion traps

Red sideband
1

Blue sideband
1

Excitation probability

0.8

0.8

0.6

0.6

n=0.01

0.4

0.4

0.2

0.2

0

0

0

0.2

0.4

0.6

0.8

1

0

0.2

0.4

0.6

0.8

1

1

1

Excitation probability

0.8

0.8

0.6

0.6

n=0.5

0.4

0.4

0.2

0.2

0

0

0

0.2

0.4

0.6

0.8

1

0

0.2

0.4

0.6

0.8

1

1

1

Excitation probability

0.8

0.8

0.6

0.6

n=5.0

0.4

0.4

0.2

0.2

0

0

0

0.2

0.4

0.6

0.8

1

0

0.2

0.4

0.6

0.8

1

Pulse duration (ms)

Pulse duration (ms)

Figure 3.7: Simulation of the excitation probabilities, P|RDSB and P|BDSB, as a function of the pulse duration for the red and blue sideband transitions based on eq. (3.4) and eq. (3.5), respectively. The motional states used for the simulation were thermally disturbed with an average phonon number n¯. The Lamb-Dicke parameter, η, was taken to be 0.068 which is a typical value for the ion trapping experiments reported in this thesis.

30

3.3 Traps in a cryogenic environment

3.3.1 Reduced motional heating
The ﬁrst signiﬁcant advantage of operating traps at cryogenic temperatures is the reduction in the heating rate. Several experiments have investigated the temperature dependence of motional heating in ion traps [19, 87, 92, 93]. The ion traps, as well as the attendant apparatus used for these measurements, were far from identical and many of the diﬀerences were not well controlled. Therefore, it is not surprising that the details of the heating rate behavior as a function of the temperature were q-
ualitatively diﬀerent in the diﬀerent experiments. Nevertheless, all experiments showed a signiﬁcant reduction of the heating rate when the trap temperature was reduced. The heating rate of the traps which already showed a good performance at room temperature could typically be lowered by two orders of magnitude if the trap was cooled from 300 K to < 10 K. For traps with a comparatively high heating rate at room temperature a reduction of up to seven orders of magnitude was reported [19].
Fig. 3.8 shows the spectral densities of the electrical ﬁeld noise measured in diﬀerent ion-trap experiments and for diﬀerent temperatures as a function of the ion-electrode separation. The spectral densities are widely spread over several orders of magnitude but there is a clear trend showing that they are lower at cryogenic temperatures.

SE (V2m-2Hz-1) Normalized heating rate (s-1)

10-7

10-8

10-9

10-10

10-11 10-12 10-13

[19]h [19]i

[34]a [61]

[43]n

[43]l [19]g

[22]d [43]i [22]e

[27]

[43]k [43]g
[43]j

[43]m

[34]b

[52] [19]c

[43]h

[56]c [56]a

[22]a [19]d [22]c [31]d

[31]a [30]

[56]b [22]b

[31]c

[31]b

[37]

[19]f [19]e

[58]f [58]b

10-14

[58]d [58]c [58]a [58]e

10-15

30

100

300

Trap size, d (µm)

108

Traps at ~ 300 K

Traps at ~ 6 K

107

106

105

104

103

102

101

100

1000

3000

Figure 3.8: Electrical ﬁeld noise measured in diﬀerent setups and at diﬀerent temperatures as a function of ion-electrode separation, d. Taken from [68] and used with permission. The numbers in square brackets refer to references within the original article.

There are several eﬀects that can contribute to the reduction of heating rate. Cryo-

31

Scalable ion traps
genic setups usually possess black-body shields made from copper or aluminium which enclose the ion trap and are cooled as well. Both metals are good electric conductors at room temperature and their conductivity increases by several orders of magnitude during the cooling [94]. Therefore, these shields provide excellent electric shielding [80] which reduce EMR noise. A second source of noise which is temperature-dependent is Johnson noise. It directly depends on the temperature as shown in eq. (3.-
2). Furthermore, the resistance of the conductors (wiring, electrodes) causing the Johnson noise typically decreases with decreasing temperature. Both eﬀects cause a reduction of the noise when the trap and wiring (at least partially) are cooled to cryogenic temperatures. Furthermore, it is reasonable to expect that the ﬂuctuating dipoles which were listed as a possible cause of the motional heating in section 3.2.1 are thermally driven. Cooling the surfaces then decreases this component of the to-
tal heating rate. The experiments so far do not provide clear evidence to identify which of these three eﬀects (or some other eﬀect) is responsible for the reduction. Nor is it currently possible to exclude any of these eﬀects. Nonetheless, cryogenic temperatures signiﬁcantly reduce the motional heating.
3.3.2 Vacuum and turnaround time
The background-gas pressure at the trapping site should be as low as possible. Collisions with background-gas molecules can heat up the trapped ions. In the worst case, the ions can even be knocked out of the trap. This is especially relevant for surface microtraps which are very shallow (10-50 meV). There are well established methods of achieving suﬃciently high vacuum (i.e. suﬃciently low pressure). The ways in which this is done are very diﬀerent depending on whether the system is to be operate-
d at room temperature (∼300 K) or at cryogenic temperatures (∼6 K).
Ion traps at room temperature are typically operated at pressures of 10−11−10−12 mbar, which corresponds to ultra high vacuum (UHV). To achieve this vacuum, careful design and construction of the vacuum vessel and its interior are absolutely essential. This includes the sole use of materials with low vapor pressures and small outgassing rates. All in-vacuum parts have to be thoroughly cleaned to remove any residues like greases and adhesives. After assembling the vessel it is connected to a molecu-
lar turbo pump and bake-out is done at 100-300 ◦C for several days. This helps to remove the remaining water from the interior of the chamber and accelerates the outgassing of light-weight molecules like hydrogen which otherwise slowly diﬀuse into the vacuum and degrade it.
The situation is diﬀerent for cryogenic setups. An extremely high vacuum (XHV), which corresponds to a pressure < 10−12 mbar, can be achieved by cooling the system to low temperatures since most background-gas molecules freeze out at the cold parts of the setup. Table 3.1 shows the vapor pressure of the most common molecules in a vacuum chamber at diﬀerent temperatures. Besides helium, which condenses only at 4.2 K, the vapor pressure of all other molecules dramatically decreases when cooled below-
 10 K.
32

3.3 Traps in a cryogenic environment

Fortunately, the amount of helium in air is rather small (5.240 ppm [95]) and the partial pressure of helium is usually negligibly small in the vacuum chamber.

gas temperature (K) pressure (mbar)

H2O N2 O2 Ne H2 He

373.15 20
77.25 20
90.05 20
27.05 12.15 20.35 14.55
4.25

1013 [95] < 10−13 [96]
1000 [95] 10−11 [96] 1000 [95] 10−13 [96] 1000 [95]
0.01 [95] 1000 [95]
100 [95] 1000 [95]

Table 3.1: Vapor pressure of the most common gases in ambient air at diﬀerent temperatures.

To reach XHV in a cryogenic system, a rough vacuum (< 10−4 mbar) has to be established in the system ﬁrst. This can be done by operating a molecular turbo pump connected to the system for several hours. Then the cryostat is switched on and the system is cooled down which takes several more hours. There is no bake-out of the system required, which signiﬁcantly reduces the turnaround time of the entire trap-changing cycle2. For example, a turnaround time shorter than 24 h was achieved in this work. -
This makes a cryogenic system to be a good environment for testing trap designs and diﬀerent fabrication parameters. Furthermore, the outgassing of the materials used is suppressed at low temperatures. This allows the use of materials which would otherwise be non-UHVcompatible such as many plastics and adhesives.

3.3.3 Cryogenic systems
There exist several systems which can be used to cool ion traps to low temperatures. For example, there is a bath cryostat which is basically a dewar ﬁlled with the cooling medium (e.g. liquid helium or liquid nitrogen). The cold stage is thermally connected to the tank of the dewar, and it is cooled by evaporating the cooling medium. Another type of cryostat is the ﬂow cryostat. In this case, the cooling medium ﬂows through a heat exchanger which is connected to the cold stage of the system. In c-
ontrast to a bath cryostat, the cooling power (and thereby the temperature) can be tuned by controlling the rate of cooling-medium ﬂow. A third type of cryostat is the closed-cycle cryostat. This is basically an inverted Stirling engine where work is used to pump heat from one stage to
2Trap-changing cycle in a cryogenic system: Warm up the system, break the vacuum, remove the trap and install a new one, cool down the system and retrap ions.
33

Scalable ion traps
another, thereby cooling the ﬁrst stage. This type of cryostat was used in this work and a detailed description of it is given in section 4.1.
As stated above, besides the advantages of cryogenic systems for ion trapping there are also several diﬃculties and disadvantages. The initial setup costs and running costs of a cryogenic system are signiﬁcantly higher than those of a standard room-temperature setup used for ion trapping. In particular, the initial costs of a closed-cycle system are, in general, very high due to the complexity of the system. By contrast, the running costs for a bath or ﬂow cryostat are higher because of the contin-
uous consumption of liquid helium.
The cooling process creates mechanical vibrations in the cryogenic system. In particular in a closed-cycle system, the amplitude of these vibrations caused by moving parts and pressure changes is relatively large (∼ 10 µm [97]). These vibrations can cause oscillations of the ions with respect to the laser beams. From the ions’ point of view the laser beams are moving which generates intensity ﬂuctuations at the ion’s location as it moves through the beam waist. This reduces the ﬁdelity of the quan-
tum gates [29]. Therefore, a special vibration-isolation system must be included to suppress this movement (see section 4.1.2).
Another important point which has to be considered is the thermal coupling. On the one hand, there should be a strong thermal coupling between the sample (ion trap) and the cold stage. On the other hand, the coupling between the cold stage and the hot parts of the cryogenic system should be as small as possible. This can be accomplished by the proper choice of materials (supporting parts and wiring) and a thermal anchoring of the wires (see section 4.1.4).
Furthermore, attention must be paid to the thermal expansion. It can vary signiﬁcantly for the diﬀerent materials used and can cause problems during the cool-down [94]. For example, optical feedthroughs and electrical connectors may break when cooled if not properly designed.
34

Chapter 4
Experimental setup

The experimental setup which was built and used throughout this thesis is described in this chapter. The main components of the setup are shown in ﬁg. 4.1.

optical setup

trap trap carrier cryogenic system

experimental control
Figure 4.1: Overview of the experimental setup.
The ion traps should be operated in vacuum and at low temperatures (about 10 K). Therefore, they are located in a vacuum chamber which is connected to the cold stage of a cryostat. This entire system is referred to as cryogenic system and is described in section 4.1. The experimental setup should facilitate a simple exchange of the traps in order to enable quick testing of diﬀerent traps. For this reason, a special trap carrier was designed which is used to mount the trap in the cryogenic system. -
It is presented in section 4.2. Lasers are used to cool and address the ions, and an optical detection system is needed to detect them. Section 4.3 describes this optical setup. Finally, an experimental control is required to control the diﬀerent components of the experiment. This is introduced in section 4.4.
35

Experimental setup

4.1 Cryogenic system and vacuum chamber
The diﬀerent components of the cryogenic setup are presented in this section. Section 4.1.1 introduces the Giﬀord-McMahon cryostat (closed-cycle cryostat) used to cool the ion traps. The moving parts of the cryostat cause strong vibrations (amplitude 20-30 µm) as mentioned in section 3.3.3. Therefore, a vibration-isolation system is installed. It is described in section 4.1.2. The vacuum chamber and its electric wiring are presented in section 4.1.3 and 4.1.4, respectively. The trapping experiment-
s use calcium ions. These are loaded from a calcium oven which is introduced in section 4.1.5. The magnetic ﬁeld at the trapping site required to split the degenerate Zeeman sublevels is created by pairs of electromagnetic coils. These are presented in section 4.1.6. Details about the cooling down procedure are given in section 4.1.7.

4.1.1 Giﬀord McMahon cryostat

The cryostat used is a closed-cycle Giﬀord-McMahon system (GM). The Giﬀord-McMahon cryostat was invented by William E. Giﬀord and Howard O. McMahon in 1957 [98]. Its mode of operation is similar to an inverted Stirling cycle, where mechanical work is supplied and heat is pumped from a cold stage to a hot stage. The main components of the GM cryostat are depicted in ﬁg. 4.2.

HP

valves

LP

hot stage

regenerator

displacer

cold stage

Figure 4.2: Giﬀord McMahon system. It consists of a hot and a cold stage, connected by a displacer and a regenerator and is ﬁlled with a working ﬂuid. Via valves the system can be either connected to a reservoir of working ﬂuid at high (HP) or low (LP) pressure in order to change the pressure in the system.
There is a hot and a cold stage, connected by a displacer and a regenerator1. The system is ﬁlled with a working ﬂuid (e.g. helium). The displacer either pushes the working ﬂuid from the hot stage, through the regenerator to the cold stage or (reversed) pushes
1Typical regenerator materials are meshes of copper, lead or stainless steel [99].
36

4.1 Cryogenic system and vacuum chamber

the working ﬂuid from the cold stage through the regenerator to the hot stage. The regenerator precools the working ﬂuid on its way from the hot stage to the cold stage and stores its heat. On the way back from the cold stage to the hot stage the working ﬂuid is heated up again by the stored heat. Furthermore, the pressure of the working ﬂuid in the system can be changed be either connecting it to a reservoir of working ﬂuid at high pressure (HP) or a reservoir of working ﬂuid at low pressure (LP)-
.

HP
(1)
LP

HP
(2)
LP

HP
(4)
LP

HP
(3)
LP

Figure 4.3: Giﬀord McMahon cycle.
The GM cooling cycle in which heat is pumped from the cold stage to the hot stage, consists of four steps. They are shown in ﬁg. 4.3 and are explained here:
1. The system starts at high pressure (HP valve is open and LP valve is closed). The displacer moves upwards and pushes the working ﬂuid from the hot stage through the regenerator into the cold stage. The regenerator precools the working ﬂuid and stores its heat.
2. The HP valve closes and the LP valve opens. The pressure in the systems drops and
37

Experimental setup

the working ﬂuid isothermally expands. The heat necessary for that expansion is provided by the cold stage. During this step the actual cooling takes place.
3. The displacer moves downwards and pushes the working ﬂuid back to the hot stage via the regenerator. The stored heat is released and heats the working ﬂuid.
4. The LP valve closes and the HP valve opens. This compresses the working ﬂuid in an isothermal way and heats up the hot stage.

Cryostat used in this work

The cryostat used in this work is a two-stage2 GM cryostat3 The working ﬂuid is 4He. A schematic is given in ﬁg. 4.4. The ﬁrst stage can reach a ﬁnal temperature of <50 K. It

HP compressor
LP

motor

displacer, regenerator

50K stage

10K stage

Figure 4.4: Schematic of cryostat used. It consists of two cooling stages to achieve a ﬁnal temperature <10 K. The displacer and the regenerator are combined. They are moved by a motor located at the top of the cryostat. A compressor provides the high and low pressure reservoirs.
is called the 50 K stage. A temperature of <4 K can be reached at the second stage if no additional heat load is attached. The cooling power of this stage is 500 mW, according to the manufacturer’s speciﬁcations. However, the modiﬁcations necessary to mount and operate an ion trap increase the heat load. The temperature measured at the second stage is typically higher by a few degrees. Therefore, this stage is referred to as the 10 K stage. A compressor4 provides the low- and high-pressure reservo-
irs for the GM cycle and is connected to the cryostat via two 3 m long helium gas lines. The cycle frequency is about 2 Hz. The compressor has to be cooled during operation in order to avoid overheating. Therefore, a chiller5 was installed.
2Two cooling stages in series are required in order to reach a ﬁnal temperature < 10 K. 3Advanced Research Systems, DE-210B 4Advanced Research Systems, ARS-10HW 5KTK, JWA/CL 9 SKP
38

4.1 Cryogenic system and vacuum chamber
4.1.2 Vibration isolation
As mentioned in section 3.3.3, vibrations of the ion trap (and the trapped ion) with respect to the laser beams cause intensity ﬂuctuations at ion’s location. This decreases the ﬁdelity of the quantum gates and should, therefore, be kept to a minimum. The operation of a GM cryostat, however, creates strong vibrations caused by the moving parts in the cryostat (motor and displacer) and the periodic pressure changes at the second stage due to the cooling cycle.
The vibrations at the second stage of GM cryostat are typically of order 20-30 µm along the axis (axial axis) of the cryostat and about 5 µm perpendicular to this axis (radial axes) [97]. For comparison, the typical width of laser beam used is about ∼20 µm, and the corresponding intensity ﬂuctuations caused by the vibrations of a GM cryostat are then >50%.
There exist diﬀerent approaches to minimize the vibrations [100]. The vibration isolation of the cryostat used in this work is accomplished by a method which uses helium buﬀer gas. The buﬀer gas mechanically decouples the cryostat from the sample, while maintaining a good thermal contact. The principle of the vibration-isolation system is shown in ﬁg. 4.5.
The cryostat (see ﬁg. 4.5a) is equipped with the additional adapter6 (GMX-20 ). The adapter, which is slightly larger in diameter, is mounted on the cryostat (see ﬁg. 4.5b). There is a gap of about 5 mm between the cryostat and the adapter, which is ﬁlled with helium (see ﬁg. 4.5c). The adapter is ﬂanged to a vacuum shroud (see ﬁg. 4.5d). Together, the shroud and the adapter form the vacuum chamber in which the trap is mounted (see section 4.1.3 for further details). The cryostat is fastened to th-
e ceiling of the laboratory via aluminum proﬁles, whereas the vacuum chamber is mounted on a ﬂoating optical table (see ﬁg. 4.5d). By this means, the vibrations in the vacuum chamber can be signiﬁcantly reduced. The manufacturer claims that this interface system should reduce the vibrations of the cryostat to an amplitude of 15 nm.
Vibration measurements were performed on the cryogenic system after installation using a laser interferometer7. To measure the vibrations of a target with respect to the interferometer, a laser beam provided by the interferometer is directed to a reﬂecting part of the target. The reﬂected beam is coupled back in the interferometer where it is merged with a reference beam and directed onto a photodetector. The vibration amplitude and frequency are extracted from the modulation of the interference p-
attern detected.
To measure the axial vibrations of the second stage (perpendicular to the optical table in ﬁg. 4.5e), the laser beam is coupled into the chamber from below via the CF160 viewport (see section 4.1.3). In this case, the metal electrodes of the surface trap are used as a mirror to reﬂect the beam. A reference measurement of the axial vibrations with the cryostat
6Advanced Research Systems, GMX-20 7SIOS SP 2000 DI
39

Experimental setup

(a)

(b)

coldhead

50K stage

(c)
rubber bellow GMX20 adapter

He gas

10K stage

(d)

(e)

lab ceiling

CF160 full nipple

vacuum

octagon ion trap

optical table

Figure 4.5: Overview of the vibration-isolation system. (a) The GM cryostat. (b) Cryostat and the GMX-20 adapter. (c) The gap between the cryostat and the adapter is ﬁlled with helium gas which mechanically decouples the cryostat from the adapter, while maintaining a good thermal contact. (d) The adapter and a vacuum shroud (consisting of a CF160 full nipple and an octagon) form the vacuum chamber, where the ion trap is located. (e) The cryostat is attached to the laboratory ceiling and the vacuum-
 chamber is mounted on a ﬂoating optical table in order to mechanically decouple them.

being switched oﬀ is shown in ﬁg. 4.6. The distance changes of the target (ion trap) are recorded for 40 s. In order to couple the beam from below into the vacuum chamber several mirrors were required which increased the total path length of the laser beam to about 2 m. The distance ﬂuctuations of several hundred nm at a time scale of seconds in ﬁg. 4.6 are mainly caused by thermally driven drifts of the mirrors, the ion trap and the interferometer with respect to each other. Fig. 4.7 shows the ax-
ial vibrations when the cryostat is running and cold (temperature at the 10 K stage: 5.2 K). The total vibrations caused by the cryostat are of order 200-300 nm.
To measure the radial component of the vibrations of cold stage, the laser beam was coupled via viewport (4) into the vacuum chamber (the labeling of the viewports is deﬁned
40

4.1 Cryogenic system and vacuum chamber

60

Amplitude (nm)

40

20

Distance (nm)

0 0
400 200
0 -200 -400
0

10 20 30 40 50 60 70 80 90 100 Frequency (Hz)

5

10

15

20

25

30

35

40

Time (s)

Figure 4.6: Axial vibrations of the cold stage as a function of time with the cryostat being switched oﬀ. The bottom plot shows the distance changes of the target with respect to the interferometer. The frequency components of the vibrations are given in the top plot.

60

Amplitude (nm)

40

20

Distance (nm)

0 0
400 200
0 -200 -400
0

10 20 30 40 50 60 70 80 90 100 Frequency (Hz)

5

10

15

20

25

30

35

40

Time (s)

Figure 4.7: Axial vibrations of the cold stage as a function of time with the cryostat being switched on.

in section 4.1.3 and ﬁg.4.9). It was directed onto a mirror which was attached to the cold stage in order to provide a reﬂecting surface. The radial vibrations are shown in ﬁg. 4.8. These vibrations are signiﬁcantly stronger than the axial vibrations. In particular, there is a strong vibration at 11.5 Hz with an amplitude of 190 nm. This is caused by the
41

Experimental setup

single sided mounting of the vacuum chamber (see ﬁg. 4.5e). The mounting posts are only attached to the middle of the vacuum chamber and thereby suboptimally suppress radial vibrations at the bottom of the chamber.
However, the intensity ﬂuctuations of the laser beams at the ion’s location caused by these vibrations are smaller than 0.5% for the typical beam diameters used throughout this work (see table 4.2). This is negligibly small for the measurements performed in this thesis.

200

Amplitude (nm)

150

100

50

0 0
1000

10

20

30

40

50

60

70

Frequency (Hz)

Distance (nm)

500

0

-500 0

5

10

15

20

25

30

35

40

Time (s)

Figure 4.8: Radial vibrations of the cold stage as a function of time with the cryostat being switched on.

4.1.3 Vacuum chamber
The vacuum shroud is illustrated in ﬁg. 4.5d and ﬁg. 4.9. It is built from stainless steel parts (type 304) equipped with CF (ConFlat) ﬂanges. The shroud basically consists of a homemade CF160 full nipple and a CF160 octagon vacuum chamber8. It encloses the GMX-20 adapter, and together they form the vacuum chamber in which the trap is mounted. A pressure gauge9 is ﬂanged to the vacuum shroud. There are eight CF40 ﬂanges on the sides of the octagon. The atomic Ca-beam used to load the ion trap is i-
ntroduced through the CF40 ﬂange labeled (2) in ﬁg. 4.9b (see also section 4.1.5). The other seven CF40 ﬂanges are closed by BK7 viewports10. Another BK7 viewport11 is ﬂanged to the bottom CF160 ﬂange of the octagon. The CF40 viewports are used to couple the laser beams into the
8Kimball Physics Inc., MCF800M-SO2000800 Metric Spherical Octagon 9Pfeiﬀer, PKR 251 10Vacom, VPZ40 11Vacom, VPZ160
42

4.1 Cryogenic system and vacuum chamber

(a)
CF160 full nipple valve pressure gauge

(b)
GMX20 adapter

D-sub feedthrough

(4)

50K shield

(5) BK7 windows (6)

BNC feedthroughs
vacuum
50K shield 10K shield

(3)
10K shield
octagon (2)

(7) ion trap
(8) (1)

octagon

ion trap

Figure 4.9: (a) Cross-section of the cryogenic system. The vacuum shroud (CF160 full nipple, octagon) and GMX-20 adapter form the vacuum chamber. Electric feedthroughs on the CF160 full nipple are used to connect the trap electrodes and the temperature sensors with the outside world. The vacuum pump can be connected to the chamber via the valve and the pressure inside is monitored via a pressure gauge. A 50 K and a 10 K heat shield (non vacuum-tight) enclose the ion trap. They are connected to the-
 50 K (green) and 10 K (blue) stage, respectively. (b) Cross-section of the octagon. There are 8 viewports for optical access and for loading calcium ions labeled (1)-(8).

chamber and the ions’ ﬂuorescence light is detected through the CF160 ﬂange. Therefore, they are equipped with a broadband anti-reﬂection (AR) coating12 which improves the optical transmission (transmission > 99.5% for all relevant wavelengths).
Two radiation heat shields are installed in the vacuum chamber (see ﬁg. 4.9 and ﬁg. 4.10). The outer one is connected to the 50 K stage of the GMX-20 adapter whereas the inner one is bolted to the 10 K stage. The purpose of the shields is to reduce the blackbody radiation and the number of the background molecules at the ion trapping site, as they freeze out at the shield walls. The shields were made of Oxygen-Free High thermal Conductivity (OFHC) copper which ensures fast cooling of the shields a-
nd a small temperature gradient along them. Furthermore, the shields provide adequate shielding against electromagnetic ﬁeld ﬂuctuations because of the high electrical conductivity at low temperature. The wall thickness of the shield parts is 5 mm. The parts are bolted together by brass screws. The thermal expansion of brass is higher than that of copper. This ensures that screwed joints do not become loose during cool down. The contact surfaces of the parts are covered with Indium foil (thickness-
: 100 µm), which is a soft and pliable metal at
12Tafelmaier Du¨nnschicht-Technik GmbH
43

Experimental setup
room temperature and ﬁlls any imperfections of the copper surfaces. This creates reliable bonds between the mating surfaces with low thermal and electrical resistance. Both shields possess several venting holes which help to shorten the pumping-down time. The holes are drilled at an angle of 45◦ with respect to the shield surface which prevents molecules from going directly from the room temperature part of the vacuum chamber to the trapping site. Each shield has eight 25 mm holes, aligned with th-
e octagon’s viewports. Each hole has a BK7 window13 clamped over it. The windows are coated with the same broadband AR coating as the vacuum chamber’s viewports.
An open container ﬁlled with activated charcoal is located next to the trap and ﬁxed to the 10 K shield (see ﬁg. 4.10). The activated charcoal is a special form of carbon with a high degree of microporosity that signiﬁcantly increases the surface area available for adsorption of molecules during cool down. The charcoal acts as a cryogenic pump when cooled and helps to improve the vacuum at the trapping site.

ion trap

charcoalpump
10K shield 50K shield

octagon

2 cm

Figure 4.10: The trap loacted in the vacuum chamber is shown. It is enclosed by the octagon and the two heat shields. The charcoal container is located next to the trap.

13Topag Lasertechnik GmbH, BK7 window diameter: 25.0mm, thickness: 3mm, ﬂatness: λ/10
44

4.1 Cryogenic system and vacuum chamber
4.1.4 Wiring and heater
There are 20 electrical lines installed in the cryostat to connect the trap’s DC and RF electrodes with the outside world. The wiring is illustrated in ﬁg. 4.11a. The vacuum shroud is equipped with two coaxial feedthroughs14, as shown in ﬁg. 4.9. The in-vacuum wiring between the feedthroughs at 300 K and the 10 K stage uses stainless steel coaxial cables15 (length ∼50 cm). These are used because the thermal conductivity of stainless steel is small (2-3 orders of magnitude smaller than copper [94])-
, which helps to keep the heat load at the 10 K stage to a minimum. Furthermore, the cables are thermally anchored at the 50 K stage via copper clamps (see ﬁg. 4.11b). The steel coaxial cables are terminated with female coaxial connectors16 at the 10 K stage, which are clamped to the cover of the 10 K shield. In order to ensure electric isolation between the connectors and the copper shield PTFE (Polytetraﬂuoroethylene) spacers are used. Inside the 10 K shield, the coaxial lines are continued by c-
opper coaxial cables17. Their ends are directly soldered to a breakout board (see ﬁg. 4.11c). The plug connections at the 10 K stage enable a simple replacement of the ﬁnal stage without replacing all of the wiring. It should be mentioned that the connectors used are not speciﬁed for cryogenic temperatures. However, no connection failures were detected during temperature cycling so far (> 100 cycles). The individual shields of the diﬀerent coaxial lines are only connected with the common ground at-
 the breakout board. The common ground is provided by the vacuum chamber (including the heat shields) and corresponds to the RF ground of the ion trap. This grounding scheme is used in order to avoid ground loops. To establish separable electric connections between the coaxial lines and the removable trap carrier, pogo pins18 are used which are soldered to the breakout board. The total resistance of the signal lines measured between the feedthrough and the pogo pins is about 15 Ω. This relatively -
high resistance is caused by the high speciﬁc resistance of the steel coaxial cables.
The temperatures inside the cryostat are measured by silicon diode temperature sensors19. One sensor is attached to the 50 K stage. A second one is placed in the charcoal container and a third one is mounted on the trap carrier next to the trap. Twisted-pair wires20 are used to connect the sensors. In order to keep the heat load small, the wires are made up of phosphor bronze which has a thermal conductivity around one order of magnitude smaller than copper. Furthermore, they are thermally anchore-
d to the 50 K and the 10 K stages. The wires are soldered to a D-sub feedthrough21 at the vacuum
14Both of type Accu-Glass, 25D-5CX2-450 15Lakeshore, Type SS 16Microdot, 142-0000-0001 17They are terminated by male coaxial connectors: Microdot, 142-0000-0002 18Mill-Max, 0929-0-15-20-75-14-11-0. They contain spring-loaded pins made from a beryllium-copper alloy which also work at cryogenic temperatures [94]. 19Lakeshore, DT-670-SD-1.4L 20Lakeshore, DT-32 21Accu-Glass, 25D-450
45

Experimental setup

(a)

BNC feedthroughs

vacuum chamber

(b)

microdot connectors 10K shield

steel coaxial cables
50K stage
10K stage
cooper coaxial cables
pogo pins trap carrier

steel coaxial cables

thermal

anchoring

(c)

50K shield

thermal anchoring

(c) microdot

10K shield

connectors

thermal
anchoring 50K shield
(d)

breakout board

breakout board

thermal anchoring pogo pins

copper coaxial cables

Figure 4.11: (a) Overview of the wiring in the cryogenic setup used to apply the trap voltages. (b) The steel coaxial cables are clamped to the 50 K stage (the lower copper disk shown here) by grooved copper plates to achieve a proper thermal anchoring. Microdot connectors mounted to the 10 K stage are connected to the steel coaxial cables. (c) Breakout board at the 10 K stage connecting the coaxial cables with pogo pins which, in turn, establish a connection between the trap carrier and the coaxi-
al lines.
shroud to establish a connection to the outside world. A temperature controller22 is used to operate the sensors. It runs them at a current of 10 µA and measures the voltage drop at the sensors. To increase the measurement accuracy, a four-point conﬁguration is used [94]. This means that two pairs of twisted-pair wires are connected to each sensor. The drive current is sent through one pair and the voltage drop is measured via the second pair. This separation eliminates all voltages drops from the-
 measurement that occur in the wiring and the contacts.
To control the temperature of the 10 K stage, the GMX-20 adapter is equipped with a resistive heater at the 10 K stage. The heater consists of a coil which is wrapped around the GMX-20 and has a resistance of 50 Ω. It is also connected to the temperature controller via twisted-pair wires and the D-sub feedthrough. The temperature controller can drive the heater to stabilize the temperature at the 10 K stage (± 5 mK) and to heat it up when
22Cryocon, Model 24 temperature controller
46

4.1 Cryogenic system and vacuum chamber

thawing the cryostat. Therefore, the temperature measured by the silicon diode on the trap carrier is used as the reference. LabVIEW software was written which allows remote operation of the temperature controller and a logging of the measured temperatures (see section 4.4).

4.1.5 Oven

a

b

c

Figure 4.12: (a) ALVASOURCE 3-Ca-150-C oven. (b) Schematic of the oven setup. An aperture at the 50 K shield blocks the larger portion of the calcium beam. Only a small and well collimated part of the beam can enter the 10 K shield. (c) The oven is located in a bellow full nipple ﬂange which allows a ﬁne alignment of the calcium beam. A gate valve is mounted between the bellows ﬂange and the octagon. This allows the separation of the bellow ﬂange (including the oven) and the the main chamber.
40Ca+ ions are used in the ion trapping experiments in this work. This section explains how they are generated and loaded into the trap. A calcium oven creates a beam of neutral calcium atoms which are then ionized by a two-photon process [101] in the trapping region (see section 4.3.1). The oven23 consists of a small steel tube which is ﬁlled with a calcium powder (see ﬁg. 4.12a). To create a calcium beam a current is sent through the tube. This current heats up the tube until the calcium starts -
to evaporate. To avoid oxidation of the calcium in air the tube is ﬂushed with Argon gas and sealed with a thin indium layer. The indium layer is only melted away when the oven is in vacuum. The oven is located in the vacuum chamber outside of the heat shields as shown in ﬁg. 4.12b in
23Alavatec, ALVASOURCE 3-Ca-150-C
47

Experimental setup
order to minimize the heating of the 10 K stage when the oven is running. It is mounted on a electrical feedthrough which is connected to an adjustable bellow full nipple ﬂange (see ﬁg. 4.12c). The bellows which allows a ﬁne alignment of the calcium beam after the chamber is evacuated is ﬂanged to viewport (2) of the octagon (see ﬁg. 4.9b). A gate valve24 can be closed to separate the bellow ﬂange from the main chamber. Thereby, the oven can be kept in vacuum when the main chamber is opened in ord-
er to replace the trap. An aperture in the 50 K shield lets a small part of the calcium beam pass through. This helps to reduce the heat load at the 10 K stage caused by the oven and prevents the interior from being covered with calcium. The oven is operated at a current between 4 A and 6 A.
4.1.6 Magnetic ﬁelds

3 cm

Figure 4.13: A single coil attached to one of the CF40 viewports of the octagon.
A magnetic ﬁeld at the trapping site is required to split the degenerate Zeeman sublevels and deﬁne the quantisation axis of the ion (see section 2.2). This ﬁeld is generated by two pairs of coils which are attached to opposite CF40 viewports of the octagon. The coil pairs are operated in Helmholtz conﬁguration and are aligned north-south and east-west. This corresponds to the opposed viewports (3)-(7) and (1)-(5) in ﬁg. 4.9, respectively. The coils are home-built with a diameter of 90 mm and 248 -
windings (see ﬁg. 4.13)). Stable current sources designed and built by the internal electronic workshop are used to drive the coils. The magnetic ﬁeld created by each pair was measured to follow this relation

B = 1.86 G/A × I,

(4.1)

with B being the magnetic ﬁeld in gauss and I the current in ampere. It is worth mentioning that in this conﬁguration it is not possible to control the magnetic ﬁeld in up/down
24VAT, Mini UHV gate valve 01032-CE41

48

4.1 Cryogenic system and vacuum chamber
direction, nor fully compensate the earth’s magnetic ﬁeld. This was not necessary for the measurements performed in this work. However, if a full control is required for further work an additional pair of coils can be installed.
4.1.7 Cooling down procedure
The cooling down procedure is described in this section. After installing a new trap the vacuum chamber is closed and connected to a turbomolecular pump25 via the chamber valve (see ﬁg. 4.9a). The heater (see section 4.1.4) is used to heat the 10 K stage to 320 K. This helps to remove the water in the system and speeds up the pump-down time. Higher temperatures would signiﬁcantly enhance these processes but could also damage the varnishes used on the trap carrier (see section 4.2). For this reason-
 they are avoided. At a pressure < 10−4 mbar26 the cryostat is switched on. It takes about 4 hours to achieve this pressure. However, the system is typically pumped over night to ensure good vacuum. The heater is kept running after switching on the cryostat till the temperature at the 50 K stage drops below 240 K which takes about 70 min (see ﬁg. 4.14). In this way, water does not freeze out on the trap surface, but rather on the walls of the 50 K stage. It takes 240 min to reach a temperature bel-
ow 10 K and after about 300 min the 10 K stage is at its ﬁnal temperature of 6 K. This temperature is about 2 K higher than the ﬁnal temperature speciﬁed by the manufacturer. The diﬀerence can be explained by the additional heat load due to the wiring and the optical viewports. The 50 K stage reaches its ﬁnal temperature of 50 K after around 350 minutes.
1000

Temperature (K)

100

10

1

50

100

150

200

250

300

Time (min)

Figure 4.14: Temperature measured at the 50 K stage (red) and the 10 K stage (black) as a function of time during cool down. The heater at the 10 K stage is switched oﬀ at 70 min (when the 50 K stage reaches 240 K). The 10 K stage reaches is ﬁnal temperature of 6 K after about 300 min.
25Pfeiﬀer, HiCube Classic PM S22-33-100 26This pressure is recommend by the manufacturer of the cryostat.

49

Experimental setup
The pressure measured in the room temperature part of the chamber is between 5 ·10−8 mbar and 1 · 10−8 mbar when the cryostat is cold. As this is measured at the room temperature part of the chamber (see ﬁg. 4.9a), it is not an accurate reﬂection of the pressure at the trapping site. It is complicated to directly measure the pressure inside the 10 K shield. However, due to the cryogenic pumping (see section 3.3.2) it is reasonable to assume that the pressure is lower by 3-4 orders of magnitude.
In order to change the trap, or make other adjustments to the apparatus within the chamber, the system must be brought back up to atmospheric pressure. This requires that it is also heated up to room temperature. To do this, the cryostat is switched oﬀ and the temperature controller is set to heat the 10 K stage at a rate of 2 K/min. This rate is a trade-oﬀ between a short heat-up time and avoiding damage to the setup due to thermal expansion. It takes about 145 min until the 10 K stage is back at-
 room temperature. However, only this stage is equipped with a heater, and the thermal connection between the 10 K and 50K stages is - by design - poor. It takes much longer for the 50 K stage to reach room temperature. To speed the thermalization up the vacuum chamber can be disconnected from the turbomolecular pump. This increases the pressure in the chamber and improves the heat transfer between the 10 K and the 50 K stage. The total heat up time of the system is about 8 hours in this case.
4.2 Trap carrier
The trap carrier is a movable and exchangeable H-shaped copper mount for the ion trap. It allows a quick and simple replacement of the traps. The RF resonator and DC ﬁlters are located on printed circuit boards (PCBs) glued27 to the trap carrier. A temperature sensor is mounted on the carrier next to the trap in order to measure the temperature as close to the trap as possible. Pogo pins are used to establish a stable electric connection between the coaxial lines and the carrier, (see section 4.1.-
4 and ﬁg. 4.11a). A schematic of the carrier’s components (without temperature sensor) is given in ﬁg. 4.15. Fig. 4.16 shows the trap carrier mounted in the cryostat. The installation of the trap on the carrier, the RF resonator and the DC ﬁlters are discussed in detail in the following subsections.
4.2.1 Trap installation
The general installation of the trap and its electric connection are presented in this section. Further aspects which are speciﬁc to the mounting of silica traps are discussed in section 6.1.2, while section 7.3.2 describes aspects speciﬁc to the mounting of silicon traps.
The trap is directly mounted to the H-shaped piece of copper in order to ensure a high thermal contact between the trap and the cold stage. To connect the trap to the PCBs,
27Stycast 2850-FT
50

4.2 Trap carrier

pogo pins

x8

x8

x2

resonator + matching network

DC lters

trap

DC lters

cap divider DC lters

trap carrier

10K shield

Figure 4.15: Schematic showing the trap carrier. 20 pogo pins establish the electric connections between the coaxial lines and the trap carrier. One line is used to drive the RF resonator and a another one is used to measure the RF voltage via a capacitive voltage divider. 18 lines are equipped with ﬁlters and can be connected to the DC electrodes.

voltage divider PCB
DC filter PCB

temperature sensor

H-shaped copper carrier
10K shield

ion trap

RF resonator PCB

1 cm

Figure 4.16: Trap carrier mounted at the 10 K stage. It consists of an H-shaped copper support (outlined in orange) and multiple PCBs (DC ﬁlters, RF resonator, voltage divider). The trap is located in the middle. The trap electrodes are connected to the PCBs via bonds. To increase the adhesion of the bonds, the PCBs are partially goldelectroplated.

51

Experimental setup

gold wires with a diameter of 25 µm are used. One end of the wires is wedge-bonded to the trap electrodes and the other one is bonded to the traces of the PCBs. It is necessary to gold-plate the traces before bonding in order to improve the adhesion between them and the wires (see ﬁg. 4.16). Otherwise, the copper traces form a native oxide which makes the bonding diﬃcult.

4.2.2 RF Resonator

The RF voltage used to drive the trap is provided to the system by a function generator. It is ampliﬁed by an RLC resonator located next to the trap. This allows the operation of the trap with a small RF input power (< 100 mW). The basic components of the resonator are brieﬂy discussed here. A detailed description is given elsewhere [89]. The complete RF circuit diagram is depicted in ﬁg. 4.17.

function

matching

generator (50 Ω) network

300 K M2

10 K

RLC resonator with ion trap

R

L

10 K

voltage

divider

D1

10 K

50 Ω terminated oscilloscope
300 K

50 Ω

+

M1

-

Ctrap

D2

(1)

(2)

(3)

(4)

(5)

Figure 4.17: Circuit diagram of the RF resonator used to drive the trap.

The function generator located outside of the cryostat generates the RF signal (1)

which is fed into the resonator via a coaxial line. The RLC resonator (3) consists of a

home-built copper coil with an air (vacuum) core mounted on the resonator PCB and the

ion trap. The coil provides the inductive component (L) and the ion trap provides the

capacitative component (C) of the resonator. Together, L and C deﬁne the resonance

frequency

1 f0 = √ .
2π LC

(4.2)

The quality factor (Q) of the resonator which is a measure used to characterize its perfor-

mance is deﬁned as

Q = 2πf0L = 1

L ,

R RC

(4.3)

where R is resonator’s resistance, which mainly originates from the inductor’s resistance.

The quality factor is proportional to the voltage gain in the resonator. A capacitive voltage

divider (4) is installed next to the trap. It is connected to an oscilloscope (5) by a coaxial

line. This voltage divider enables a direct measurement of the RF voltage at the trap

without aﬀecting the capacitance of the RLC resonator.

To minimize reﬂections of the RF signal, it is necessary to match the impedance of

the RF circuit to that of the function generator (50 Ω). This is achieved using a matching

52

4.2 Trap carrier

network (2) consisting of an inductor M 1 and a capacitor M 2. The capacitor M 2 is tunable and can be used to ﬁne-adjust the total impedance of the RF circuit after installing the trap carrier in the cryostat.
Resonators for resonance frequencies at 8 MHz and 20 MHz were designed and used to operate two diﬀerent trap designs, called YK-1 and YK-3, respectively (see section 6.2). The resonators are depicted in ﬁg. 4.18, and the values of their components are listed in table 4.1.

(a)
inductor (L)

matching network

ion trap (C)

(b)

voltage divider

DC filters

ion trap (C)

matching network

1 cm

inductor (L)

1 cm

Figure 4.18: Trap carriers used for YK-1 and YK-3 equipped with traps and the RLC resonators. (a) This RLC resonator is operated at 8 MHz. The trap carrier in this design has no DC ﬁlters. (b) This RLC resonator is operated at 20 MHz.

8 MHz resonator 20 MHz resonator

f0 (MHz) Q
L (µH) C (pF) M 1 (pF) M 2 (µH) D1 (pF) D2 (pF)

7.6 700
45 5
12-100 64 5
1000

∼20 1200
6.3 7-9.5 12-100
168 2.4 1000

Table 4.1: Component list of the two RLC resonator designs measured at 6 K. Diﬀerent traps were operated using the 20 MHz resonator. The resonance frequency varied by a few percent for the diﬀerent traps due to their diﬀerent capacitances.

4.2.3 DC Filterboards
In order to carry out high-ﬁdelity quantum operations, the ions need to be at (or close to) the motional ground state. Electric-ﬁeld noise can heat the ions’ motion, degrading the ﬁdelity of operations, or making such operations entirely impossible. It is, therefore,
53

Experimental setup

important to ﬁlter the DC lines in order to ensure that the ions are not unduly perturbed by noise on these lines (see section 3.2). For this reason, every DC line is equipped with an RC low-pass ﬁlter on the trap carrier. In addition, pi ﬁlters are installed on the outside of the vacuum chamber. The entire ﬁlter circuit of a single DC line is shown in ﬁg. 4.19.

voltage source

pi filters

RC filters

300 K

C1

300 K

R1

10 K

+ -

C1

C2

DC electrode

C3

C4

Figure 4.19: Filter circuit of a DC line. There are pi ﬁlters located outside of the vacuum chamber and RC ﬁlters on the trap carrier.
When designing the trap-carrier ﬁlters two things have to be taken into account. First, the components used have to be cryo-compatible and should not signiﬁcantly change their properties during cool-down. Therefore, thin-ﬁlm resistors and NP0 capacitors, which were tested to be cryo-compatible, are used. Second, in order to achieve best trapping performance, it is important that all DC electrodes are properly RF-grounded. This can be accomplished by installing capacitors as close as possible to th-
e DC electrodes. For this reason, addtional small capacitors (C4) are positioned ∼15-25 mm from the electrodes. The components of the trap-carrier ﬁlters are: R1: 100 Ω 28, C3: 330 nF 29, C4: 470 pFµF 30. The cut-oﬀ frequency of these ﬁlters is 4.8 kHz.
The components of the pi ﬁlters are: C1: 0.1 µF, L1: 470 µH, C2: 0.68 µF. The cut-oﬀ frequency of these ﬁlters is 17 kHz.
4.3 Optical setup
This section gives an overview of the laser systems used to create, cool and manipulate the ions. Furthermore, the setup to detect the ions and their electronic state is presented.
4.3.1 Lasers systems
There are six lasers used for the experiments with trapped 40Ca+ ions presented in this work. Two lasers are required to ionize the neutral calcium atoms (422 nm and 375 nm). Two are used for Doppler cooling and detection (397 nm and 866 nm), and two are used in relation to the quadrupole transition (729 nm and 854 nm). The level scheme of the 40Ca+ ion is given in ﬁg. 2.2. The laser setups are brieﬂy discussed here as is the alignment of the beams with respect to vacuum chamber (and the ion trap)-
. A detailed description of the
28VPG, Y1625100R000Q9R 29Kemet, C0805C471J1GACTU 30Kemet, C2220C334J1GACTU
54

4.3 Optical setup
ionization lasers is given in the master’s thesis of R. Lechner [102], while the PhD thesis of M. Kumph describes the setups of the 397 nm, 866 nm, 854 nm lasers in detail [45]. The 729 nm laser setup is explained at full length in the PhD thesis of M. Chwalla [104].
Photoionization of calcium (422 nm, 375 nm)
To ionize neutral calcium atoms two lasers are used. The ﬁrst laser drives the resonant transition 41S0 − 41P1, and the second laser is required for the transition 41P1 to the continuum [101].
The 422 nm light is generated in a home-built doubling cavity driven by a diode laser31 which is grating stabilized and runs at 844 nm. A wave meter32 is used to monitor the wavelength of this laser. The 375 nm light is provided by a free-running diode-laser33. Both laser beams are coupled via single-mode UV-ﬁbers to the experiment.
Cooling and detection (397 nm, 866 nm)
The dipole transition 42S1/2 − 42P1/2 at a wavelength of 397 nm is used to cool and detect the ions (see section 2.2). Since the ions can also decay from 42P1/2 into the metastable state 32D3/2, an additional repumping laser is required which runs at 866 nm.
397 nm light is generated in a frequency-doubling system34 which consists of a diode master laser at 794 nm, a high power semiconductor tapered ampliﬁer (TA), and a frequencydoubling stage. The 397 nm light is frequency-locked to an external reference cavity using the Pound-Drever-Hall method [103]. In order to tune the resonance frequency of the cavity, its length can be changed by piezoelectric actuators. The 397 nm light is coupled to the experimental table using a polarization-maintaining (PM)-
 single-mode ﬁber. There, an acousto-optic modulator35 (AOM) in double-pass conﬁguration is installed which enables adjustment of the intensity and frequency. Furthermore, the AOM also provides a fast way to switch the laser beam on and oﬀ. The light is then sent via a PM single-mode ﬁber to the vacuum chamber. The alignment of the beam with respect to the chamber is described below.
866 nm light is directly created with a diode laser36. The frequency of the 866 nm light is stabilized and adjusted in a manner analogous to the 397 nm light. 866 nm light is stabilized to an external reference cavity by the Pound-Drever-Hall method and a doublepass AOM37 at the experimental table is used to adjust the frequency and intensity of the light. It is subsequently sent to the vacuum chamber via a PM single-mode ﬁber.
31Toptica, DL pro laser series, LD-0850-0300-4 32High Finesse, WS-7 33Diode: Toptica, LD-0375-0020-1; Laser mount: Thorlabs, TCLDM9 34Topitca, TA-SHG pro 35Brimrose, QZF-80-20-397; center frequency: 80 MHz 36Toptica, DL100 37Crystal Technology, AOM 3200-124; center frequency: 200 MHz
55

Experimental setup
Quadrupole transition (729 nm and 854 nm)
729 nm light is needed to drive the quadrupole transition 42S1/2 −32P5/2. This can be used for coherent manipulations of the ion’s quantum state but also for sideband cooling and heating rate measurements (see sections 2.2 and 3.2.3). Furthermore, the repumping light at 854 nm is required for quenching the life time of the metastable 32D5/2 state. It pumps population from the 32D5/2 state to 42P1/2 from where the population rapidly decays to the ground state 42S1/2.
729 nm light used for the experiments presented in this work is provided by the ‘main’ laboratory38 of Quantum Optics and Spectroscopy group at Innsbruck University and is sent via a 200 m long PM single-mode ﬁber to the ‘cryo’ laboratory located on the fourth ﬂoor of the same building. In the ‘main’ laboratory, the 729 nm light is generated by an optically pumped titanium-sapphire laser39. The laser is stabilized to an external highﬁnesse cavity using the Pound-Drever-Hall method. Thereby, a line-
width <1 Hz on a time scale of 1 s is achieved. The light is ampliﬁed in the ‘cryo laboratory by a tapered ampliﬁer diode laser system40 generating an output power of up to 400 mW. The linewidth measured in the ‘cryo’ laboratory was about 1 kHz caused by frequency broadening due to transport in the 200 m-ﬁber (ﬁber noise). The ampliﬁed light is sent to the experimental table, where an AOM41 in single-pass conﬁguration is used for intensity stabilization. The frequency and intensity of the beam at -
the ion are controlled by an AOM42 in double-pass conﬁguration (located after the intensity stabilization). The radio-frequency signal used to drive this AOM is generated by the pulse sequencer box (see section 4.4). Thereby, it is possible to create phase-coherent 729 nm pulses.
854 nm light is generated by a diode laser43. The optical setup is similar to the one of the 866 nm laser, including the Pound-Drever-Hall lock and the double-pass AOM conﬁguration44 used for controlling the intensity and frequency of the light. The 854 nm beam is overlapped with the 866 nm beam using a polarized beam splitter (PBS) before this beam is coupled to the vacuum chamber via the ﬁber. The alignment of these beams with respect to the chamber is described below.
Beam overlapping and alignment
The cryogenic setup is designed for rapid testing of new trap designs requiring fast turnaround times. Therefore, the beam alignment with respect to the trap should be as simple as possible. To facilitate this, all lasers beams except for 729 nm (i.e. 422 nm, 375 nm,
38Viktor-Franz-Hess building, ground ﬂoor, 0/203 39Coherent, 899 ring laser 40Toptica, TA-100 41Crystal Technologies, 3080-122; center frequency: 80 MHz 42Crystal Technologies, 3270-122; center frequency: 270 MHz 43Toptica, DL100 44Crystal Technology, AOM 3200-124; center frequency: 200 MHz
56

4.3 Optical setup

397 nm, 866 nm and 854 nm) are overlapped before being coupled into vacuum chamber. This is done using a series of notch ﬁlters, as shown in ﬁg. 4.20. A single lens is used to focus the overlapped beams into the vacuum chamber via viewport (1). This lens is mounted on an xyz-translation stage45 which allows a ﬁne-adjustment of the position and the focus of the beams.
It is possible to trap ions with these overlapped beams, and they are typically used for trapping for the ﬁrst time in a new trap. However, the proper focusing of the individual beams at the trap is rather challenging due to the overlapping. Poorly focused beams can cause stray light, especially in microtraps with a small ion-electrode separation. In particular, if the 397 nm beam is not well focused, the stray light can make the imaging and detection of the ion diﬃcult. For this reason, an additi-
onal 397 nm beam was installed which is coupled via viewport (5) in to the chamber. This individual beam can be optimally focused. A ﬂip mirror is used to switch the 397 nm light between viewport (1) and viewport (5). The 729 nm laser beam is coupled into the chamber via a diﬀerent viewport (3). The typical beam diameters and powers at the trap are listed in table 4.2.

laser viewport# power (µW) beam diameter FWHM (µm)

422 nm

(1)

<240

80

375 nm

(1)

<100

80

866 nm

(1)

<60

40

854 nm

(1)

<20

100

397 nm

(2)

<160

50

397 nm

(5)

<60

20

729 nm

(3)

<750

20

Table 4.2: Powers and diameters at full width half maximum (FWHM) at the ion’s position for the diﬀerent laser beams and viewports. The powers and spot sizes of the lasers beams were measured with the powermeter Ophir Vega and the beamproﬁler Spiricon SP620U, respectively.

4.3.2 Ion detection
The ﬂuorescence light of the ions at 397 nm (see section 2.4.3) is collected by an objective located below the vacuum chamber. The objective is custom-made with a focal length of 58 mm and NA = 0.19 [105]. It is attached to an xyz-translation stage46 which allows a simple lateral and axial alignment. The collected light is split by a 50/50 beamsplitter47, with one part being sent to a CCD camera48, and the second part being detected by a
45Laser2000, SIG-123-0144 46Laser2000, SIG-123-0144 47Thorlabs, BSW20 48Andor, iXon+ A-DU897-DCS-BBB
57

Experimental setup

397 λ/2 f250

729

(5)

vacuum chamber

λ/4

λ/2

(4)

(6) coils

f50 f200 f250 (3)

ion

(7)

xyz-stage

(2)

oven

f30

λ/2

f250 SR BLP01-594R-25

866+854

(1) f400

(8) xyz-stage

397

f50

λ/2

f400 SR FF01-395/11-25

422

377 f50

f50

SR FF01-377/50-25 f500

f400

z
y x

Figure 4.20: Beam alignment with respect to the vacuum chamber (as viewed from above). 422 nm, 375 nm, 397 nm, 866 nm and 854 nm beams are overlapped by Semrock (SR) ﬁlters and coupled into the chamber via viewport (1). In addition, a 397 nm beam can be also coupled into chamber via viewport (5). 729 nm light is sent through viewport (3). The coordinate system shown corresponds to the coordinate system of the trap which is mounted trapping side down in the chamber (see ﬁg. 5.2). The calcium oven a-
nd the electromagnetic coils are also shown.

photomultiplier tube49 (PMT). The camera and the PMT are equipped with ﬁlters50 to suppress the detection of stray light from the other lasers and the room light. Furthermore, a slit aperture51 is located in front of the PMT to block lateral stray light. Due to the combination of ﬁlters and the aperture, a signal-to-noise ratio of more than 50 can be achieved for the ion detection with the PMT.

49Hamamatsu, H7360-02 50Semrock, 2x SEM-FF01-395/11-25, 1x SEM-FF01-417/60-25 51OWIS, SP40
58

4.4 Experimental control

4.4 Experimental control
The main components of the experimental setups can be controlled and operated via two personal computers (PC) which are referred to as PC1 and PC2. An overview of the controlling scheme is shown in ﬁg. 4.21, and a detailed description is given in this section.

PMT CCD

DAQs

temperature controller

cryogenic system
temp. sensors heater
pressure gauge

AOMs

Lasers

pulse box

function generator voltage source

LabVIEW software CCD software
PC 2

QFP 2.0 DC voltage control
PC 1

Figure 4.21: Overview of the control scheme used to operate the cryogenic ion-trap experiment.

PC1
PC1 is used to run a LabVIEW program called QFP 2.0. The program was initially written by Timo K¨orber, a former member of the Quantum Optics and Spectroscopy group at Innsbruck University, and was explicitly designed to control trapped ion experiments and log the experimental data. During the course of the work described in this thesis it was modiﬁed to match the special requirements of the cryogenic setup.
Three data acquisition (DAQ) cards52 are controlled by QFP 2.0. They provide analog
52National Instruments, 2x PCI-6733, 1x PCI-6711
59

Experimental setup
voltage outputs and input counters. The voltage outputs are connected to the drivers of the double-pass AOMs for the 397 nm, 854 nm, 866 nm lasers. They are used to tune the power and frequency of the laser beams. One of the counters is used to record the count rate of the PMT and forwards this data to QFP 2.0.
QFP 2.0 also controls a pulse sequencer box (pulse box) [106]. This box generates sequences of digital outputs (TTL) and RF pulses. The TTL pulses are passed on to the drivers of the 397 nm, 854 nm, 866 nm AOMs in order to switch them on and oﬀ and, thereby, turn on and oﬀ the laser beams at the ion. The RF pulses are used to directly control the double-pass AOM of the 729 nm laser. Therefore, it is also possible to change the frequency and power of the 729 nm beam by the pulse sequences. The sequ-
ences are used to realize complex measurements such as the heating rate measurement described in section 3.2.3. The sequence corresponding to this measurement is shown in ﬁg. 3.6.
To control the RF voltage applied to the ion trap, a function generator53 is used, which is in turn controlled via QFP 2.0. The voltages applied to the DC electrodes are provided by a low-noise voltage source54. This voltage source is controlled by an additional LabVIEW program running on PC1. This software was not integrated into QFP 2.0 in order to keep the software infrastructure simple and modular. However, it communicates with QFP 2.0 and forwards data to it.
PC2
PC2 is used to log the temperature and the pressure in the cryogenic system and to run the CCD camera. A LabVIEW program running on this computer allows the remote operation of the temperature controller and a logging of the measured temperatures (see section 4.1.4). Furthermore, this software also logs the data of the pressure gauge connected to the vacuum shroud (see ﬁg. 4.9a).
To operate the CCD camera, the standard program shipped with the camera is used. It is worth mentioning that this stand-alone program cannot communicate with any of the other control software and its data is not logged during an experiment. However, for single-ion experiments the PMT already provides all necessary data to reconstruct the ion’s state and the CCD data is not required. The CCD camera is used for aligning the laser beams and the objective with respect to the trap. Furthermore, the ion-
 and its position in the trap are monitored and a rough micromotion compensation55 can be done with the camera (see section 2.1.1). Therefore, the RF driving power is reduced in order to make the radial trapping potential shallower which causes an additional shift of the ion’s position if stray DC ﬁelds are present. The stray ﬁelds can be compensated
53Marconi Instruments, 2022E 54ISEG, EHS F205x-F-K1 55The micromotion sidebands on the quadropole transition are used for a more accurate compensation in a subsequent step.
60

4.4 Experimental control by applying additional DC oﬀset voltages to the trap electrodes (see section 5.2.2). This method works best for compensation parallel to the trap surface56 but also to some extent for compensation perpendicular to it.
56The CCD camera images the plane parallel to the trap surface.
61

Experimental setup 62

Chapter 5
Surface trap ‘Yedikule’
All of the experiments presented in this thesis were performed in surface ion traps at cryogenic temperatures. To facilitate fair comparison of the many tests performed on diﬀerent trap materials, fabrication processes, drive electronics and so forth, the geometry of the basic trap design was kept constant. This design consisted of a segmented linear surface trap, which is named ‘Yedikule’ (YK). The basic version of this trap has seven segmented DC electrodes on each side1 and was named after the -
Turkish fortress and prison Yedikule Hisari which means ‘Fortress of the Seven Towers’. The fortress is located next to Istanbul and was built in 1458 (see ﬁg. 5.1).
This chapter details the general electrode geometry of the YK traps. Furthermore, electrostatic simulations of the trap potentials are presented. The simulations are used to estimate the DC and RF voltages required for stable trapping. The trap was realized using two diﬀerent fabrication processes. These are described separately in chapters 6 and 7.
Figure 5.1: Yedikule Hisari - fortress of the seven towers (1827)
1There also exists one version with nine segmented electrodes (see ﬁg. 5.4)
63

Surface trap ‘Yedikule’
5.1 Trap geometry
There were four versions of the YK traps, which each were variations on the same basic design. The basic electrode geometry of YK is depicted in ﬁg. 5.2. There is one RF electrode, a center DC electrode labelled C1 and seven segmented DC electrodes on each side. The segmented electrodes on the left (right) hand side next to the RF electrode are called L1-L7 (R1-R7). The coordinate system used is also shown in ﬁg. 5.2. The z axis is along the trap’s axial direction, parallel to the center electrode-
. The x axis and y axis are called radial axes. The x axis is perpendicular to the z axis and parallel to the trap surface while the y axis is perpendicular to it.

GND
L1 L2 L3 L4 L5 L6 L7

RF C1

R1 R2 R3 R4 R5 R6 R7 z

x y
Figure 5.2: Basic electrode geometry of YK. A radial trapping pseudopotential (in the x − y-plane) is set up by the RF voltage applied to the green electrode while the gray electrodes are held at RF ground. The gray electrodes support DC voltages. These DC voltages are used for conﬁnement along the z axis and for micromotion compensation. The trap shown here has asymmetric RF electrodes which means that the radial principal axes are tilted with respect to the x and y directions.

The fact that the RF electrode is of ﬁnite length, and has bars connecting the ends of the two RF rails, produces an axial component of the pseudopotential. This leads to weak axial trapping even in the absence of DC voltages, and to a small amount of axial micromotion at most trapping positions. These eﬀects are, however, negligible for all experiments reported in this thesis and the trap can be treated as a linear trap. If the center electrode is aligned exactly in the middle of the trap, the tr-
ap is called symmetric. If, however, it is shifted towards the −x direction (as it is in ﬁg. 5.2) the trap is referred to as an asymmetric trap. Due to the asymmetry the principal radial trapping axes are tilted with respect to the x and y directions of the trap. That allows cooling and addressing of all motional axes by laser beams aligned parallel to the surface of the trap, as explained in

64

5.1 Trap geometry

detail in section 3.1.2. The paths of the laser beams are illustrated in ﬁg. 5.3. The beams are aligned parallel to the trap surface at an angle of ±45◦ with respect to the z axis.

laser beams

laser beams

trapping region

bonding region

Figure 5.3: Laser paths and bonding regions in the YK traps.

Four diﬀerent versions of the basic geometry were created which diﬀer in their dimensions and symmetry. They are illustrated in ﬁg. 5.4. The dimensions of the asymmetric trap YK-1 are given, which create a trapping region 450 µm above the trap surface. The distance between the electrodes and the trapping region is ﬁxed - to ﬁrst order - by the widths of the RF and the center electrodes. The width of these electrodes were chosen based on experience of earlier trap geometries which were known to hav-
e functioned well [19, 107]. The gap between neighboring electrodes is 20 µm. YK-2 has the same dimensions, though the center electrode is centered (symmetric trap). To create YK-3 and YK-4 the dimension of YK-1 were scaled down by a factor of 2 and 2.9, respectively. In addition, YK-4 was equipped with four additional segmented electrodes. For YK-3 and YK-4, the gaps between neighboring electrodes are 10 µm. The key parameters of the diﬀerent versions are listed in table 5.1.

YK trap ion-electrode # DC RF electrode version separation (µm) segments symmetry

1

450

7

asymmetric

2

450

7

symmetric

3

230

7

asymmetric

4

115

9

asymmetric

Table 5.1: Basic trap parameters of the four YK versions.

65

YK1
700 µm 20 µm
YK4

400 µm 500 µm
800 µm

Surface trap ‘Yedikule’ YK2
YK3

2 mm
Figure 5.4: CAD drawing of the four diﬀerent Yedikule designs. YK-1 dimensions are given. The DC electrodes of YK-2 are the same size as in YK-1, though in YK-2 the center electrode C1 is positioned centrally within the RF ring. To obtain YK-3 and YK-4, the width of the electrodes were scaled down by a factor of 2 and 2.9, respectively.
The individual electrodes of the YK traps are electrically connected to the trap carrier by 25 µm-diameter gold wires which are wire bonded to the outer region of the electrodes (see ﬁg. 5.3). The dimensions of the YK-1 electrodes are suﬃciently large to allow a direct bonding. The center and the segmented electrodes of YK-3 and YK-4 are equipped with additional bonding pads to facilitate the bonding.
5.2 Trap simulations
In order to operate an ion trap, it is helpful to know in advance a number of trapping parameters. The ion-electrode separation is required for the alignment of the laser beams and the ion detection system. The proper set of DC voltages and a suitable RF voltage
66

5.2 Trap simulations

(amplitude, VRF, and frequency, ΩRF) have to be applied to the electrodes to create a stable trapping potential. The RF frequency is deﬁned by the resonance of the RF resonator and can be varied by modifying the resonator (see section 4.2.2). However, it should be considered as given for this section. In order to determine the required DC and RF voltage amplitudes the normalized electric potentials at the trapping site have to be determined ﬁrst. From these potentials the relevant parameters can b-
e deduced. There exists an analytic approach to calculate the potentials of a two-dimensional electrode conﬁguration such as a surface trap [108]. It requires, however, some approximations: the electrodes have to fully cover an inﬁnite plane and the gaps between the electrodes have to be zero. A more general approach to retrieve the potential is by numerical electrostatic simulations. This latter method is used in this thesis and is presented in section 5.2.1. Section 5.2.2 shows, then, how to det-
ermine the trapping parameters from the simulated potentials.

5.2.1 Electrostatic simulations
To determine the trapping parameters, the normalized electric potentials, Θi(x, y, z), at the trapping site created by the individual electrodes are required. The normalized potential of one electrode corresponds to the potential generated if the voltage applied to this electrode is one volt and all other electrodes are grounded. The total trapping potential can be obtained by the following equation:

Vtotal(x, y, z) = Θi(x, y, z)Vi + Θpseudo(x, y, z)VRF,
i

(5.1)

where Vi and VRF are the DC and RF voltages applied to the DC and RF electrodes, respectively. The normalized potential can be directly simulated with electrostatic simulation for all DC electrodes.
To determine the normalized pseudopotential a short detour is necessary. According to eq. (2.11), the pseudopotential is proportional to the square of the electric ﬁeld generated by the RF electrodes. This equation can be rewritten for the normalized pseudopotential:

Θpseudo(x, y, z)

=

Q2 4mΩ2RF

|ERF(x,

y,

z)|2,

(5.2)

where ERF(x, y, z) is the normalized electric ﬁeld generated when the RF electrodes are at one volt and all DC electrodes are at zero volts. Q and m are the charge and the mass of the ion, respectively. ΩRF is the RF frequency.
There exist several software packages to carry out such a simulation. The simulation software used in this thesis was COMSOL Multiphysics 3.4 in combination with MATLAB. COMSOL uses the ﬁnite element method (FEM) for obtaining approximate solutions for various physics and engineering problems. To simulate a potential, the trap electrodes are drawn in COMSOL (see ﬁg. 5.5a) and the desired voltages are applied to them. To simulate

67

Surface trap ‘Yedikule’

the normalized potentials, this is either one or zero volts. The electrodes are located inside a boundary cuboid. The potential of the cuboid’s side walls is set to zero and provides the far-oﬀ ground for the electrostatic simulations. During a real ion trapping experiment this ground is typically deﬁned by the vacuum chamber. The space inside the cuboid is divided by a mesh, as shown in ﬁg. 5.5b. The simulation time can be dramatically reduced without signiﬁcantly decreasing the accuracy of the s-
imulation by adjusting the meshing parameters appropriately. A ﬁne meshing should be chosen for the region around the trapping site and the trap electrodes, whereas a coarse mesh is suﬃcient for the remaining part of the space. The potential at each node of the mesh is then calculated, taking into account the potential at the electrodes and the boundary cuboid. An x − y-cut of the normalized pseudopotential produced by applying 1 V to the RF electrode is shown in ﬁg. 5.5c.

(a)

(b)

(c)

Figure 5.5: Simulation of YK-3 trap using COMSOL. (a) Geometry of the trap, (b) mesh and (c) slice through the simulated pseudopotential.
5.2.2 Trapping parameters
To calculate the trapping parameters (ion-electrode separation, eﬃciency parameter, RF and DC voltages, trap depth and frequencies), the simulated potentials have to be analyzed. The ion-electrode separation and the trap eﬃciency parameter are obtained from the normalized pseudopotential. The required RF voltage can be calculated using the ion-electrode separation and the eﬃciency parameters. The axial conﬁnement of the ions is generated by the voltages applied to the DC electrodes. Furthermore, o-
ﬀset voltages on those electrodes are used for micromotion compensation (see section 2.1). Both can be determined from the simulated DC potentials. If all electrode voltages are identiﬁed, the total potential can be calculated using eq. (5.1). The trap frequencies and the trap depth can then be calculated from this. The procedure to extract the parameters from the simulations are explained in detail below. This can be done by a numerical computing software. MATLAB was used for that purpose in this-
 thesis. The results of the simulation can be found in table 5.2 and table 5.3.
68

5.2 Trap simulations

Ion-electrode separation

The (average) position of the trapped ion is at the pseudopotential minimum if micromotion is minimised. The distance of this point to the nearest electrode is the ion-electrode separation, R0. The position of this minimum and thereby the value of R0 can be determined from the simulated pseudopotential as shown in in ﬁg. 5.6.

y-axis (µm) Pseudopotential (a.u.)

(a)
1000 800 600 400 200
0

-1000 -800 -600 -400 -200 0 200 400 600 800 1000
x-axis (µm)

(b) 0.4
0.35 0.3 0.25 0.2 0.15 0.1 0.05
0 0

100

200

300

400

500

y-axis (µm)

Figure 5.6: (a) Normalized pseudopotential of YK-3 simulated in COMSOL. (b) Pseudopotential along the red line. The ion-electrode separation corresponds to the distance between the electrodes at 0 and the potential minimum at 230 µm which is marked with a cross. The dashed line represents the expansion of the harmonic potential at the pseudopotential minimum. Its curvature is used to calculate the eﬃciency parameter.

Eﬃciency parameter

The eﬃciency parameter was introduced in section 2.1.2. It compares the trap frequency, ωTi, of the trap being analysed with the one of the hyperbolic trap. This is indicated by eq. (2.15) which can be simpliﬁed for the normalized pseudopotential (VRF = 1) to:

i=

2kTim

ΩRFR02 Q

,

(5.3)

where kTi = mωT2 i [see eq. (2.2)]. kTi is the curvature of pseudopotential in the ith direction. To determine the curvatures - and thereby the eﬃciency parameters - a second degree polynomial curve ﬁtting can be performed on the simulated pseudopotential at the trapping site.

RF voltage
Stable trapping of ions in a trap is only possible for a particular range of RF voltages. To calculate the proper RF voltage eq. (2.9) can be used, which connects the RF voltage with the stability parameter, q. For any non-hyperbolic trap the eﬃciency parameter has to be taken into account as well. This means that q is replaced by q = q [see eq. (2.14)]
69

Surface trap ‘Yedikule’

and eq. (2.9) is rewritten to

VRF

=

q

mR02Ω2RF . 2Q

(5.4)

As mentioned in section 2.1.1, the stability parameter q has to be 0 < q < 0.908. However,

for the operation of the YK surface traps the best performance was obtained at values of around 0.2.

DC voltages
The DC voltages applied to the segmented electrodes provide a conﬁnement along the z axis, and they deﬁne the radial principal axes. The pseudopotential created by the RF voltage is symmetric around its minimum in the x − y plane and, therefore, the motional modes are degenerate. The symmetry is only broken by the DC potentials. Due to Laplace’s equation, eq. (2.4), the DC voltages create an anti-conﬁnement in at least one direction in the x − y plane. Typically, a static saddle potential is forme-
d, as shown in ﬁg. 5.7b. The DC saddle point has to overlap with the pseudopotential minimum in order to minimize the micromotion. In case the electric DC ﬁeld is non-zero at the pseudopotential minimum a force is aﬀecting the ion which moves it out of the minimum. This increases the micromotion of the ion. The DC saddle potential deﬁnes then the orientation of the radial motional axes. For asymmetric traps it is possible to rotate the DC saddle by changing DC voltages. Thereby, the radial modes c-
an be rotated out of the trap plane which allows for a cooling and addressing of all motional modes by a laser beam parallel to the trap surface.
In order to determine the DC voltages, the DC potentials of the individual electrodes are combined in such a way to ensure an overlapping of the DC saddle with the pseudopotential minimum and an axial conﬁnement.

DC oﬀset voltages for micromotion compensation
Stray charges on the trap surface can cause electric ﬁelds at the trapping site. As described above, these ﬁelds shift the ion out of the pseudopotential minimum which increases the ion’s micromotion. That eﬀect usually requires an additional DC voltage ﬁne tuning to compensate for the stray ﬁelds and minimize the micromotion. This is done by applying oﬀset voltages to the DC electrodes. The low symmetry of asymmetric surface traps makes this micromotion compensation rather tedious if the single v-
oltages are iteratively changed. Instead, it would be desirable to have sets of DC voltages which provide an overall electric ﬁeld with only a single, speciﬁed component (e.g. Ex) at the position of the ion.
Such sets can be calculated from the simulated DC potentials. Therefore, a multipole expansion is performed. Based on the dipole components of this expansion the required
70

5.2 Trap simulations

y-axis (µm) Potential energy (eV)
y-axis (µm) Potential energy (eV)

(a)

(b)

500 0.25
450

400

0.2

350

0.15

300 0.1
250
0.05 200

-50 0 50 100 150 200 250 300

0

x-axis (µm)

500 -0.2
450
-0.4 400

350

-0.8

300 -1.2
250
-1.6 200

-50 0 50 100 150 200 250 300
x-axis (µm)

Figure 5.7: Energy potentials at the trapping region of YK-3 design in the x − y plane.
(a) Pseudopotential created by a RF voltage with VRF = 140 V and ΩRF = 2π × 20.6 MHz for a 40Ca+ ion. (b) Saddle potential generated by the DC voltages listed in table 5.3.
The DC and the RF saddle points are at the same position, marked with a cross.

voltage sets can be determined. This process is explained in detail in the master’s thesis of A. Pauli [65]. The dipole components of the YK design are listed in appendix A.1.

Trap depth and trap frequencies

After determining the DC and RF voltages applied to the electrodes, the total potential at the trapping site can be created using eq. (5.1). An example of the total potential (made from the sum of the potentials shown in ﬁg. 5.7 is shown in ﬁg. 5.8. The trap depth and the trap frequencies can be obtained by analyzing this potential. The trap depth is deﬁned as the minimum energy which the ion requires to exit the trap. It corresponds to the potential energy diﬀerence between the saddle point (mark-
ed with a circle in ﬁg. 5.8) and the pseudopotential minimum (marked with a cross in ﬁg. 5.8). In a manner similar to the determination of the eﬃciency parameters, the trap frequencies can be deduced by identifying the curvatures, kTi, of the total potential along the trap axes. Again a second degree polynomial curve ﬁtting is used to ﬁnd the curvatures. The trap frequencies can then be calculated using the equation ωTi = ki/m.

YK trap drive freq.

ion-electrode

trap freq.

#

ΩRF/2π (MHz) separation (µm) ωTi/2π (MHz)

y RF ampl. trap depth VRF (V) (meV)

1

7.6

452

0.27

0.19

89

46

3

20.6

230

1.01

0.21 166

35

Table 5.2: Simulated trapping parameters of YK-1 and YK-3 which were used in the experiments presented in chapter 6 and chapter 7. The drive frequencies chosen correspond to the drive frequencies in the experiments.

71

Surface trap ‘Yedikule’

y-axis (µm) Potential energy (eV) Potential energy (eV)

(a)

500 0.10
450
0 400

350

-0.10

300 -0.20
250
-0.30 200

-50 0

50 100 150 200 250 300
x-axis (µm)

(b)
-0.24
-0.26
-0.28
-0.3
-0.32
-0.34
-0.36 140 160 180 200 220 240 260 280
Position (µm)

Figure 5.8: (a) Total eﬀective potential of YK-3 in the x − y plane. The potential is a combination of the RF pseudopotential and the DC potential shown in ﬁg. 5.7. (b) Energy potential along the red line drawn in (a). The trap depth of 35 meV is is the potential energy diﬀerence between the saddle point (marked with a circle) and the minimum (marked with a cross).

DC voltage (V) YK-1 YK-3

L3 0 L4 -7.6 L5 0 R3 7 R4 -8.134 R5 7 C1 -2.39

5.4 -38 5.4 25.5 -29.3 25.5 -1

Table 5.3: Simulated DC voltages. The labelling of the electrodes is deﬁned in ﬁg. 5.2.

72

Chapter 6
Silica traps
The cryogenic ion-trapping system was set up from scratch as part of the work described in this thesis. Naturally, extended testing and calibrating of the diﬀerent components of the system (e.g. wiring and RF resonator, vacuum chamber and cryostat, beam alignment and detection) were necessary prior to testing new trap designs. One way to test the entire system is by the operation of a simple and known trap, for which the functionality has been previously demonstrated. Therefore, surface traps base-
d on an established fabrication procedure [18, 19] were chosen for the ﬁrst experiments. To simplify the operation, the traps had a larger ion-electrode separation than usual for cryogenic traps in other groups. The traps consisted of gold electrodes on a fused-silica substrate and were fabricated by a lift-oﬀ process. These traps are refereed to throughout this thesis as silica traps. The geometry used for all of the traps was the Yedikule design, which was discussed in chapter 5. The fabrication-
 of the traps is described in section 6.1. The ﬁrst ion trapping experiments and trap characterizations are presented in section 6.2.
6.1 Manufacturing traps
Due to the simple fabrication of the silica traps, they could be produced in-house in our cleanroom1 which was built as part of the work described in this thesis. This fact, and the short fabrication time of about one day for the lift-oﬀ process, made these traps especially convenient for testing the system. Both the microfabrication and the packaging were done in the cleanroom and are presented in this section.
73

(a)

(b)

photoresist

substrate
(d)

Silica traps (c)
(e)

Figure 6.1: Lift-oﬀ process. (a) Spin coating, (b) UV-exposure, (c) development, (d) metal deposition, (e) lift-oﬀ.
6.1.1 Microfabrication
The main steps of the fabrication are shown in ﬁg. 6.1. A detailed list of all steps is given in appendix B.1. The fused silica substrates2 had the dimensions 10 mm × 10 mm × 0.5 mm. To fabricate a trap, a single substrate is coated3 with a positive photoresist4 (ﬁg. 6.1a). Using a mask aligner5, the trap structure is lithographically transferred from a mask6 to the photoresist by exposing the masked resist to UV light (ﬁg. 6.1b). Afterwards, the photoresist is put in a developer which dissolves t-
he exposed parts of the resist (ﬁg. 6.1c). Titanium and gold layers are deposited by thermal evaporation onto the parts of the substrate surface which are not covered by photoresist (ﬁg. 6.1d). The titanium layer is only a few nm thick and serves as an adhesion layer. The gold layer is typically about 500 nm thick and forms the trap electrodes. The ﬁnal step is the lift-oﬀ in which the remaining photoresist and the metals on it are removed by a solvent (ﬁg. 6.1e).
1Viktor-Franz-Hess building, 4th ﬂoor, room 4/17; cleanroom class: ISO 4 (ISO 14644-1 cleanroom standards).
2CrysTec GmbH 3Suss, Delta 6 RC 4AZ 6632 5Suss, MJB3 6Compugraphics Jena GmbH
74

6.1 Manufacturing traps

Edge bead removal
The UV exposure in the mask aligner is a contact lithography, which means that the mask is in direct contact with the photoresist. Hence, the mask structure is transferred to the photoresist with a ratio of 1:1. To achieve the best resolution in the lithography process there should be no gap between the mask and the photoresist. However, the photoresist ﬁlm created by the spin coating is not completely even. Due to the squared shape of the substrates, air turbulences are created at the edges of th-
e substrates during spin coating. These generate photoresist bumps close to the edges, as shown in ﬁg. 6.2a.

(a)

edge bead

(b)

(c)

Figure 6.2: Edge bead removal. (a) Edge beads are formed close to the edges of the substrate due to eﬀects like air turbulences during the spin coating. (b) In order to remove the edge beads, they are exposed to UV light and dissolved in a developer bath. (c) The remaining photoresist is suﬃciently even for high resolution contact lithography.
The bumps are typically called edge beads. They cause a gap between mask and photoresist during the contact lithography which, in turn, leads to reduced resolution. Therefore, they have to be removed before the actual lithography step for the trap electrodes can be carried out. This is done by an additional lithography. A special mask is used which only exposes the edge beads to UV light (ﬁg. 6.2b). The edge beads are then removed by putting the substrate in a developer bath. The remaining photore-
sist forms a suﬃciently even ﬁlm to allows contact lithography with high resolution (ﬁg. 6.2c). Resolution tests show that structures with a width of 2 µm can be generated after the edge bead removal (ﬁg. 6.3).
6.1.2 Mounting and wire bonding
The silica traps are mounted on the trap carrier, as discussed in section 4.2.1. The traps are glued to the H-shaped copper mount by a varnish7 designed for cryogenic applications. The trap electrodes are electrically connected to the resonator and ﬁlter PCBs by 25 µm thick gold wire-bonds. The wiring scheme is depicted in ﬁg. 6.4.
Only three out of the seven segmented DC electrodes on each side are connected to the DC channels of the ﬁlter boards. This is suﬃcient for stable trapping. The other segmented electrodes are wire-bonded to the ground electrode. The reduced number of electrodes used
7Lakeshore, VGE-7031
75

Silica traps

(a)

(b)

5 µm

5 µm

Figure 6.3: Resolution test of the optical lithography combined with edge bead removal. (a) Test mask for resolution tests consisting of 2 µm-stripe patterns. (b) Gold structure formed on a fused silica substrate using the test mask.

allows each DC electrode in use to be connected to two DC channels. Thereby, resistivity measurements from outside the vacuum apparatus can be performed during operation in order to ensure that all lines are working faultlessly. That is especially important in cryogenic setups where diﬀerent thermal expansions in the connector components used can cause open contacts on the electrical lines following cooling. The RF electrode is connected to the resonator on one side and to the voltage divider on t-
he other side. The voltage divider provides a simple way to read out the voltage on the RF electrode without interfering with the resonator. Furthermore, it enables a way to monitor the RF line for breaks and the performance of the resonator. The voltage divider only delivers the proper signal when all connectors, wire-bonds and the resonator are working properly.

6.2 Trap performance
Two diﬀerent silica trap designs (YK-1, YK-3) were tested in the cryogenic setup. The results are presented here.
6.2.1 Yedikule-1
The ﬁrst trap design tested was YK-1. The ion-trap distance is rather large for a surface trap (see table 5.1 and [68]). However, this is beneﬁcial for the initial trapping. Due to the large distance, a rather small heating rate is expected, which facilitates trapping. Furthermore, in such a large trap, stray light due to laser beams clipping the trap surface is typically negligibly small. This relaxes the requirement of tightly focused laser beams and increases the volume over which cooling can b-
e achieved.
One disadvantage connected with larger traps is the fact that higher RF voltages are necessary to operate them. As shown in eq. (5.4), the amplitude of the RF voltage scales with the ion-electrode separation squared. An alternative to higher voltages is the use of
76

6.2 Trap performance
D1 D2 D3 D4 D5 D6 D7 D8
RF C1
volt. divider C2 Gnd
D9 D10 D11 D12 D13 D14 D15 D16
Figure 6.4: Wiring-bonding scheme. Only three segmented electrodes on each side are used for trapping. Every DC electrode (except for the ones that are shorted to ground) is connected to two lines on the PCB board. This allows testing of the DC connections by simply measuring the resistivity between the two lines.
lower RF drive frequencies. Therefore, the trap was initially driven at a RF frequency of about 8 MHz. The components of the RLC resonator are listed in table 4.1. The exact resonance frequency is 7.614 MHz. The trap can be operated at an RF voltage of about 90 V amplitude (see table 5.2). The DC voltages used are in the range -9 V < V < +7 V, and are listed in table 5.3.
The trap YK259 (YK-1) enabled the ﬁrst successful trapping of ions in the cryogenic setup. The trap mounted on the trap carrier is shown in ﬁg. 6.5a. Close-ups of the trap are presented in ﬁg. 6.5b-c. 40Ca+ ions trapped in this trap are shown in ﬁg. 6.6.
For a more detailed characterization of the trap (e.g. spectroscopy, motional heating rate) it was necessary to individually address the quadrupole transitions. This was, however, not possible due to the low drive frequency. At a frequency of 8 MHz the side-
77

(a)

(b)

(c)

Silica traps

1 cm

200 µm

Figure 6.5: YK259 trap (YK-1) used to trap ions for the ﬁrst time in the cryogenic setup. (a) The trap mounted on the trap carrier. There are no DC ﬁlters installed. A detailed description of the individual components is given in ﬁg. 4.18a. (b)-(c) Close-up images of the trap electrodes. The yellow parts are the gold electrodes and the black stripes the silica substrate underneath.

bands caused by the micromotion overlapped signiﬁcantly with the carrier transitions and precluded a proper addressing. Therefore, the resonator coil was replaced by one with a smaller inductance to increase the resonance frequency (drive frequency) to 20 MHz which provided a suﬃciently large separation between the carrier transitions and their micromotion sidebands. However, the RF voltage of 650 V which was required to operate the trap was too high and damaged the electrodes. For this reason, a -
trap based on the YK-3 design (ion-electrdoe separation: 230 µm) was installed for further tests.

Figure 6.6: CCD images of 8 40Ca+ ions trapped in YK259.
6.2.2 Yedikule-3
The ion-electrode separation of the YK-3 design was 230 µm. Therefore, the RF voltage of 140-170 V required for trapping at a drive frequency of 20 MHz was suﬃciently small to not damage the electrodes during operation (compare section 6.2.1). To this end, a new trap carrier was built. The components of the resonator are listed in table 4.1. Furthermore, the trap carrier was equipped with the DC ﬁlters described in section 4.2.3.
78

6.2 Trap performance

Figure 6.7: CCD images of 14 40Ca+ ions trapped in YK331 (YK-3).

The trap YK331 (YK-3) was successfully characterized in this setup. The exact resonance frequency of the resonator in combination with this trap was 21.451 MHz. It was operated at an RF voltage of about 140 V amplitude. The DC voltages used were in the range -38 V < V < +26 V, and are listed in table 5.3. A string of 14 ions held in this trap is shown in ﬁg. 6.7. Due to the higher trap drive frequency the carrier transitions and the micromotion sidebands were well separated. This enabled the reali-
zation of heating-rate measurements based on sideband spectroscopy, as described in section 3.2.3. The motional heating of the axial mode of a single ion was investigated. The frequency of this mode was 1.069 MHz. Fig. 6.8 shows the ﬁrst measurement. In total, the heating rate of this traps was measured over a period of 17 days. The results are listed in table 6.1. The trap’s average heating rate is n¯˙ = 41(5) phonons/s which falls well within the range of heating rates observed in other cryogeni-
c ion traps (see ﬁg. 3.8).

Date Heating rate (phonons/s)

8.5.2013 14.5.2013 24.5.2013

39(5) 37(6) 47(6)

Table 6.1: Heating rates of YK331 (YK-3).

79

Silica traps

1.6

1.4

Mean phonon number

1.2

1

0.8

0.6

0.4

0.2

0

-5

0

5

10

15

20

25

30

35

Waiting time (ms)

Figure 6.8: Heating-rate measurement performed on 8.5.2013. Mean phonon number n¯ of the axial mode (ωz/2π = 1.069 MHz) as a function of the waiting time after ground state cooling. n¯ was determined by measuring the Rabi ﬂops on the blue sideband. In this instance the heating rate, taken to be the gradient of a linear ﬁt to the data, was n¯˙ = 39(5) phonons/s.

80

Chapter 7
Silicon traps
A novel trap concept based on intrinsic (undoped) silicon is presented in this chapter. It was developed for cryogenic applications with a special focus on a very simple and reliable fabrication scheme. Section 7.1 describes the advantages of an ion trap based on a silicon substrate. It then lays out the advantages aﬀorded by use of silicon at cryogenic temperatures, compared to room-temperature silicon traps. Trap design and manufacturing are described in sections 7.2 and 7.3, respectively. The p-
erformance of the RF resonator in combination with silicon traps is shown in section 7.4. The characterization of the trap is given in section 7.5, and possible improvements are discussed in section 7.6. The main results reported in this chapter have been published in [109].
7.1 Silicon ion traps
In principle, arrays with hundreds or thousands of surface traps could be built on a single chip [111]. However, to realize such traps, more complicated trap designs have to be developed than the one described in chapter 6. To individually address all necessary electrodes, three-dimensional interconnections consisting of multilayer structures and vias are essential. In particular, a structure is preferable where the trapping electrodes are located on the top side of the substrate and the interconn-
ections are on the bottom side connected by through-wafer vias [110]. The well-separated conductor paths help to reduce the total capacitance of the trap. This, in turn, is important in order to achieve a high quality factor of the resonator, as well as keeping RF-induced heating to a minimum. A further aspect of realizing large trap arrays is the optical addressing of the individual ions. This can be facilitated by laser beams aligned perpendicular to the trap surface, guided through holes and sl-
ots located underneath the trapping sites.
The precise patterning of dielectric substrates like SiO2 and sapphire is rather complicated and, consequently, these substrates are not suitable for more complex ion trap designs [111]. There exist, however, many standard fabrication technologies for silicon
81

Silicon traps

patterning, which were developed by the computer and communication industries. They

are called very-large-scale integration (VLSI) technologies and contain methods like op-

tical lithography and etching. These techniques provide a fast and reproducible way of

silicon patterning with sub-µm-precision. Furthermore, they facilitate a simple realization

of complex ion-trap designs containing through-wafer-vias, holes for optical access and

integrated electronics.

Unfortunately, there is also a drawback to using silicon as a substrate instead of di-

electrics: the RF loss. It is essential that ion trap substrates have low RF losses: if the

losses are too high the RF power applied in order to trap will be dissipated in the chip.

This heats up the chip on the one hand and reduce the RF resonator’s quality factor and

gain on the other hand. The lower gain, in turn, necessitates that the RF input power

has to be increased in order to achieve a suﬃciently deep trapping potential. However,

the higher input power heats up the trap even further.

The RF loss can be parametrized in terms of the loss tangent, tan δ. Low RF loss

materials have tan δ 1. For a capacitor it can be deﬁned as the inverse of its quality

factor, QC:

1 tan δ = .
QC

(7.1)

The loss tangent of dielectrics is usually rather small. For example in the frequency range of interest for ion trap applications, the loss tangent of fused silica is around 10−4 and

frequency-independent [112]. The consequent RF losses of an ion trap based on fused silica

are suﬃciently small that they can be neglected.

The RF losses of silicon are strongly frequency-dependent and orders of magnitude

higher than the losses in silica at the typical drive frequencies used in ion trapping exper-

iments. Krupka et al. [113] describe the physics behind loss tangents in silicon in detail.

The salient points are summarized here. The loss tangent of silicon can be written as

σ

tan δ

= tan δd

+

ΩRF

0

,
r

(7.2)

where ΩRF is the angular RF frequency, 0 is the permittivity of the vacuum, r and σ are the relative permittivity and the electric conductivity of silicon, respectively. tan δd is the dielectric loss tangent caused by pure dielectric loss mechanisms like ionic and electronic polarization. At RF frequencies, the dominant loss mechanism of intrinsic silicon is linked to its electric conductivity, and tan δ is mainly given by the second term of eq. (7.2). Therefore, the electric resistivity should be-
 as large as possible (i.e. the conductivity, σ, should be as low as possible) in order to minimize the RF losses. However, even for undoped silicon with a speciﬁc resistivity larger than 5000 Ωcm, the loss tangent at a typical trap drive frequency of 20 MHz is still 1.5. This is far too large for a reasonable operation of the RF resonator and, therefore, precludes the direct replacement of dielectric substrates by silicon.

82

7.2 Silicon trap design
Despite the fact that simple, direct substitution is not possible, there exist already two diﬀerent approaches that enable the use of silicon as a trap substrate. In the ﬁrst approach, the issue of RF losses is mitigated by using highly doped silicon for the trap electrodes [54, 59, 114] or substrate [53]. This method is limited to room-temperature applications and would not work in a cryogenic environment because of the silicon’s low electrical conductivity at low temperatures. In the second appr-
oach, an additional ground electrode is used, which shields the silicon from the trapping RF voltage [61, 81, 115, 116]. This type of trap can also be operated at cryogenic temperatures [90], though its trap design necessitates a more complicated fabrication process and precludes vias for RF electrodes. The silicon trap design presented here adopts a diﬀerent approach and is especially built for low-temperature applications. Below 25 K, the charge carriers in intrinsic silicon freeze out, leaving -
the substrate as a good insulator with low RF losses [113]. This obviates the need for a shielding electrode, which in turn reduces the trap capacitance and the power dissipation, as well as permitting the use of a range of new fabrication techniques.
7.2 Silicon trap design
Figure 7.1: Silicon trap design. (a) Schematic showing the surface-trap design based on YK-3. This geometry allows strings of ions to be trapped 230 µm above the surface. (b) Cross section through the trap. Trenches etched to a depth of ∼100 µm separate the individual electrodes. The entire silicon surface is covered by a thermally grown SiO2 layer which prevents metals from diﬀusing into the silicon.
A number of considerations were taken into account for developing the silicon trap design. The trap design should be suitable to scale up the number of trapped ions so that hundreds or thousands of ions can be ﬁnally trapped on a single chip. The fabrication should be simple, fast and reliable. Furthermore, any surface contamination of the electrodes induced by the fabrication should be avoided, since such contamination may cause stray electric ﬁelds which can increase the motional heating of the -
trapped ions (see section 3.2.1).
83

Silicon traps
Based on these considerations the design shown in ﬁg. 7.1 was developed. The electrode structure of the silicon trap is based on the YK-3 design introduced in ﬁg. 5.4. The electrodes are made of gold. They are located on top of the silicon substrate and are separated by trenches with a width of 10 µm, a depth of ∼100 µm and a slight undercut. On the one hand, the undercut trenches are necessary for the fabrication process, which is explained in section 7.3. On the other hand, the trenches help to -
reduce stray ﬁelds at the trapping site caused by any charges which may accumulate on the silicon surface.
A thermally grown SiO2 layer is located between the silicon substrate and the gold electrodes. This prevents diﬀusion of gold into the silicon which is, anyway, assumed to be negligibly small even at the highest temperature the trap is heated to (320 K). The ground plane between the silicon substrate and the electrodes - which would be necessary for operation at room temperature - can be omitted.
7.3 Manufacturing traps
The silicon ion traps were produced in collaboration with the team of Dr. Edlinger at the advanced technical college Vorarlberg (FH Vorarlberg) in Dornbirn. Edlinger’s team specializes in patterning of silicon and has the infrastructure and know-how necessary for the fabrication of complex silicon ion-trap designs. Structuring and dicing of the silicon substrates was performed at the FH Vorarlberg. Creation of the metal electrodes and packing of the trap was done in our cleanroom in Innsbruck.
7.3.1 Microfabrication
This section describes the fabrication process for the silicon traps. Further details are given in appendix B.1. Float-zone silicon wafers1 with a diameter of 100 mm, and a thickness of 525 µm are used. The ﬂoat-zone fabrication method delivers silicon wafers with the highest purity available and, consequently, the smallest conductivity. According to the manufacturer’s speciﬁcation the silicon has a speciﬁc resistivity larger than 5000 Ωcm. The microfabrication procedure consisting of optical lith-
ography, etching and metal deposition is outlined in ﬁg. 7.2. Steps (a)-(f) are performed at the FH Vorarlberg. Step (g) is done in our cleanroom.
The wafers are spin-coated to create a positive photoresist2 layer with a thickness of 2.4 µm (ﬁg. 7.2a). The resist is exposed by UV light through a photomask to transfer the trap pattern from the mask to the resist (ﬁg. 7.2b). Subsequently, the resist is developed to remove its exposed parts (ﬁg. 7.2c). Deep reactive ion etching (DRIE)[117] is used to etch the trenches with slight undercuts into the silicon substrate (ﬁg. 7.2d). The 10 µm gaps between the electrodes are etched to a depth of ∼100-
 µm with an undercut of ∼1 µm.
1Topsil 2AZ 1518
84

7.3 Manufacturing traps
(a)
photoresist
Si substrate
spin coating
(b)

(d)
DRIE etching
(e)

(g)
metal deposition
(h)

UV exposure
(c)

plasma cleaning
(f)

final trap

development

thermal oxidation

Figure 7.2: Microfabrication of the silicon trap. Steps (a)-(f) are performed at the FH Vorarlberg. Metal deposition is carried out in our cleanroom. See the main text for detailed description of the individual steps.

Details of the DRIE process are given below. The next fabrication steps are the removal of the photoresist by O2 plasma cleaning (ﬁg. 7.2e) and thermal oxidation of the silicon surface to grow a 2 µm thick SiO2 layer (ﬁg. 7.2f). The wafers, each containing 52 traps, are cut by laser scribing to separate the individual chips. The chips are then sent to Innsbruck. The actual trap electrodes are formed by metal deposition in our cleanroom (ﬁg. 7.2g). Titanium and gold layers of a thickness of 2 nm an-
d 500 nm respectively are deposited on the substrate surface by electron-beam evaporation. The titanium layer is necessary as an adhesion layer to avoid the gold peeling away from the silicon. The etched undercuts ensure that no electrical connections between the diﬀerent electrodes are formed during the metal deposition.
Many other standard methods used to fabricate ion traps need lift-oﬀ processes [19, 47] which can potentially degrade the surface. Unlike such processes, this fabrication method does not require lift oﬀ and so does not damage the surface. There is no chemical cleaning performed after the metal deposition, and in order to avoid contamination of the surface,
85

the gold electrodes are never brought into contact with liquids.

Details of the DRIE process

(a)

(b)

etching

Silicon traps

passivating

etching
(c)
passivating

...

Figure 7.3: Deep reactive ion etching (DRIE). (a) The DRIE process consists of alternating etching and passivating steps. (b) SEM image of the etched silicon substrate. The bonding pads of the YK-3 design are shown. (c) SEM image of an etched trench. The undulating sidewalls are caused by the alternating etching and passivating steps of the DRIE.
The dry etching method is highly anisotropic and allows the creation of grooves and holes with high aspect ratios up to 160 [118]. It alternates between etching and passivating phases, each of which last for a few seconds (see ﬁg. 7.3a). During the etching phase the exposed silicon is isotropicly etched by an SF6 plasma created in the DRIE machine. The SF6 is then replaced by C4F8 and the second phase starts. A passivation layer is deposited from the C4F8 which protects the silicon surface from fu-
rther etching. Directional ions are created in the plasma during the etching phase with enough energy to sputter oﬀ the passivation layers parallel to the substrate surface. This enables further etching
86

7.3 Manufacturing traps
perpendicular to the substrate surface and accomplishes the anisotropic component in the DRIE process. By tuning the process parameters, the side walls can either be tapered inwards, parallel or undercut. For the ion-trap fabrication undercuts are required to prevent electrical connections between the individual electrodes following the metal deposition.

(a)

12 µm

(b)

107 µm

58 µm

14 µm
Figure 7.4: SEM images of the etched trenches. (a) Cross-section of a trench from wafer #1. The sidewalls of trench are etched with a with 1 µm-undercut. (b) The trenches of wafer #2 have a pear-shaped proﬁle to reduce the eﬀects caused by stray charges which can accumulate on the silicon surface.
Fig. 7.3b-c show the silicon substrate after etching. The bonding pads of the Yedikule-3 DC electrodes are shown in ﬁg. 7.3b. The etched trenches separate the single electrodes. The etching rate depends on the width of the trenches and increases with increasing trench width. A single 10 µm-trench is displayed in ﬁg. 7.3c. The undulating sidewalls of the trench are a typical feature of the DRIE process caused by the alternating etching and passivating steps. The ripples can be decreased at the expe-
nse of the etching rate. For the parameters used to create the trap shown here the etch rate is around 10 µm/min.
Two wafers with diﬀerent etching parameters were produced at the FH Vorarlberg. The etched trench proﬁles of wafer #1 and #2 are illustrated in ﬁg. 7.4a and ﬁg. 7.4b, respectively. The trench sidewalls in wafer #1 were straight and slightly inclined forming an undercut of 1 µm for each sidewall. This ensures that no electrical shorts between two electrodes can be formed during metal deposition. The trenches of wafer #2 had an inverted pear-shaped proﬁle. This was intended to provide better shieldi-
ng of stray charges located on the trench sidewalls.
87

Silicon traps

7.3.2 Mounting and wire bonding

Similarly to the SiO2 traps, the silicon traps are mounted on the H-shaped copper carrier (see section 4.2.1). The bonding scheme discussed in section 6.1.2 is applied to these traps as well. However, gluing the trap to the copper using a varnish does not create a stable bond for the silicon substrate, due to the diﬀerent coeﬃcients of thermal expansion between copper and silicon. The relative contractions from room temperature to 4 K are 0.324% for copper and 0.022% for silicon [94]. This diﬀeren-
ce in contraction creates tension between trap and copper and ﬁnally causes the bond to break.

(a)

(b)

(c)

Figure 7.5: Wire-bonding of the silicon trap. (a) Image of the wire-bonded trap showing two bonds going to the RF electrode. (b) Two steel clamps are used to ﬁx the trap to the copper carrier. (c) Detail of the clamp on the edge of the trap, with two wire bonds from the RF electrode passing between the fork of the clamp.
A more stable connection can be established by using stainless steel clamps to ﬁx the traps (see ﬁg. 7.5). The clamps are bolted down to the copper carrier by brass screws, thereby clamping the silicon trap. This provides a reliable mounting of the trap even over several cooling cycles. The clamping method oﬀers further advantages over the gluing. The installation is faster, since the glue drying time of several hours is omitted. Furthermore, it is cleaner and reversible. The varnish contaminated -
the trap surface sometimes during the gluing and the glued bond can only be removed in an acetone bath which contaminated the trap surface. A disadvantage of the clamping is, however, that overtightening the screws can break the trap. To ensure good thermal contact between the trap and the copper carrier, the traps are coated on the backside with a thin layer of the heat-conducting grease3 before clamping.
3Apiezon N
88

7.4 RF Resonator performance

7.4 RF Resonator performance

The performance of the RF resonator in combination with silicon traps is presented in this section. As mentioned in section 2.1.1, trapping is, in principle, possible even for a stability parameter, q, close to zero. The only limitation given by the Mathieu’s diﬀerential equation is 0 < q < 0.908. According to eq. (2.9), the RF voltage could be, therefore, close to zero as well. However, it turns out that traps, in reality, become unstable for too small q. For example, the most stable trapping in -
the YK traps could be achieved for q to be around 0.2 (see section 5.2.2). Furthermore, the trapping voltage is quadratically proportional to the trap depth [see eq. (2.11)]. Both aspects set a lower limit for the RF voltage which is of the order 100 V for the YK-3 design. The RF voltage provided by a function generator is typically <10 V. Therefore, the RF resonator is used to generate the necessary voltage step-up. Consequently, the quality of the resonator is essential for the operation of the -
traps. If the voltage step-up of the resonator is too small, it is not possible to provide suﬃcient voltage to the RF electrodes, and trapping is not possible.
The resonator used in this setup is a lumped circuit RLC resonator and is described in detail in section 4.2.2. The step-up of the resonator, also called gain, G, linearly depends on the resonator’s quality factor, Q, and can be written as [89]

R G = Q,
Zs

(7.3)

where R is the resistance of the inductor and Zs is the impedance of the matched resonator, which is 50 Ω in our case. The quality factor of the resonator follows the relation

11 1 = +,
Q QL QC

(7.4)

where QL and QC are the quality factors of the inductor and the capacitor of the RLC resonator, respectively. Since the resonator’s capacitance is mainly provided by the capacitance of the trap’s RF electrodes, large RF losses in the silicon substrate reduce the quality factor, QC. This, in turn, limits Q and G.
The resonator’s quality factor when used with a silicon trap was measured as a function of the temperature using an impedance analyser4. The resonance frequency was ω0/2π = 20.6 MHz. The result is shown in ﬁg. 7.6. For this measurement, the trap temperature was slowly increased using a temperature controller and was recorded by the silicon diode mounted on the copper carrier next to the trap (see section 4.1.4). The same characteristic behavior could be observed during cool down. At room temperatu-
re the silicon substrate, which supports the RF electrodes, has a very high loss tangent of 1.5 at the resonator’s resonance frequency of ω0/2π = 20.6 MHz [compare eq. (7.2)]. Due to the high loss tangent,

4AEA Technology, VIA Bravo

89

Silicon traps 103

Quality factor, Q

102

10

30

100

300

Temperature (K)

Figure 7.6: Resonator quality factor with a silicon trap attached as a function of temperature (resonance frequency of ω0/2π = 20.6 MHz). The inductive and capacitive parts of the resonator are predominantly provided by a copper air-coil and the trap RF electrodes, respectively. At room temperature, all of the RF driving power is absorbed by the silicon substrate and there is no measurable resonance. On cooling, the conductivity of the inductor increases (thereby increasing its quality factor, QL)-
. Cooling also reduces the charge-carrier concentration in the silicon and, below 100 K, causes a steep decrease of its electrical conductivity and loss tangent (thereby increasing the capacitive quality factor, QC). These eﬀects all serve to increase the overall Q, with the plateau around 100 K being due to the non-linear response of the material properties. Below 20 K, the quality factor is comparable to that measured with a fused-silica trap, meaning that Q is limited by QL and that QC QL. The -
data shown were measured in trap #1 (see table 7.1).

at room temperature all of the RF driving power is absorbed by the silicon substrate. There is no measurable resonance: the resonator Q was indistinguishable from zero. In contrast, a quality factor of 400 was measured in a similar trap fabricated on a fused-silica substrate and operated at room temperature. Cooling leads to a reduction of the chargecarrier concentration in the silicon and, below 100 K, to a steep decrease of the electrical conductivity and loss tangent. Ultimately, electron-hole -
pairs freeze out at ∼25 K and the silicon becomes an insulator [113]. In addition to these changes in the silicon, the electrical conductivity of the inductor (copper coil) increases with decreasing temperature, and therefore the inductor quality factor, QL, goes up [89]. Increasing QC and QL leads to an increasing overall resonator quality factor, Q, with decreasing temperature. Below 20 K the value of Q > 1200 is comparable to that measured with a fused-silica trap at the same temperature, indic-
ating that Q is then only limited by QL and not by RF absorption in the silicon.
90

7.5 Trap performance
7.5 Trap performance
To characterize the trap performance of the silicon trap design presented in this chapter the trapped ion life time and the motional heating of the trapped ions were measured. In total, six diﬀerent traps from two diﬀerent wafers were investigated (see table 7.1). The traps are labelled #1-6. The fabrication of the two wafers slightly diﬀers, as discussed in section 7.3.1 and illustrated in ﬁg. 7.4. The operation of trap #1 was characterised in detail over a period of 8 weeks. To demonstrate the r-
eproducibility of the results, the other 5 traps were tested for shorter periods.
7.5.1 Trapped ion lifetime
A trapping parameter which becomes especially important with a large number of trapped ions is the length of time for which an ion can be trapped, sometimes called the trappedion lifetime. For example, assuming a mean lifetime of 1 hour which follows an exponential decay, a trap array holding 1000 ions would loose ions at a rate of around one per second.
Cooled and uncooled ion lifetimes were investigated using trap #1. With laser cooling, no ion losses were recorded over a total experimental period of more than 50 h with a single ion. To investigate uncooled lifetimes, the lasers were turned oﬀ and, after some waiting time, turned back on to see if the ion was still trapped. Waiting times of up to 9 h were used, and the ions were never lost. The trap is therefore suitable for scaling up to hundreds of ions without the need for continuous reloadin-
g. The ﬁve further traps were tested for shorter periods and the results from these traps were consistent with the more extended observations made with trap #1.
7.5.2 Heating rates
To measure the heating rate, the resolved-sideband-cooling method described in section 2.4.2 was used. Over a period of six weeks, the heating rate in trap #1 was measured several times. Fig. 7.7 shows one of those measurements. The measured heating rate were found to be constant, within the error bars, at n¯˙ = 0.6(2) phonons/s. The electric-ﬁeld noise inferred to underlie this heating is SE = 4.4 × 10−15 V2m−2Hz−1 [see eq. (3.1)].
Heating rates were measured in ﬁve further traps, with the results given in table 7.1. Trap #4 exhibits a heating rate of 0.33(4) phonons/s, which is the lowest rate ever reported: the lowest previously-reported heating rates are 0.83(10) phonons/s at room temperature, in a trap with a 3.5 mm ion-electrode separation [119], and 2.1(3) phonons/s at cryogenic temperatures in an trap with a 100 µm ion-electrode separation [58]. It is worth mentioning that the traps characterized in this chapter were -
operated under cryogenic conditions, and ≥ 35% larger than any previously fabricated cryogenic traps. When the diﬀerence in size and temperature is taken into account, the heating observed here is comparable with the best results reported elsewhere [68].
91

Silicon traps

0.8

Mean phonon number

0.6

0.4

0.2

0

0

200

400

600

800

1000

Waiting time (ms)

Figure 7.7: Heating-rate measurement of trap #1. Mean phonon number, n¯, of the axial
mode (ωz/2π = 1.069 MHz) as a function of the waiting time after ground state cooling. n¯ was determined by measuring the Rabi ﬂops on the blue sideband. In this instance the heating rate, taken to be the gradient of a linear ﬁt to the data, was n¯˙ = 0.37(6) phonons/s.
Taking data on diﬀerent days over a period of six weeks the trap exhibited a heating rate of n¯˙ = 0.6(2) phonons/s.

Trap # Wafer # Heating rate Axial freq. (phonons/s) (MHz)

1

1

0.6(2)

1.069

2

1

3.3(2)

1.059

3

1

0.96(7)

1.069

4

1

0.95(7)

1.045

5

1

0.33(4)

1.066

6

2

21.5(8)

1.073

Table 7.1: Heating rates of six traps, all of the same design, with an ion-electrode separation of 230 µm. Measurements were made over 84 days. Traps #1-5 were taken from wafer #1, with trap #6 being from wafer #2 (see section 7.3.1). Is it worth mentioning that the error bars given for trap #1 indicate the spread over six weeks of measurements, while the error bars for traps #2-6 indicate the uncertainty in a single heating-rate measurement.

Trap #6 exhibits a heating rate of 21.5(8) phonons/s. This falls well within the range of heating rates observed in other cryogenic ion traps [19, 93], but is is signiﬁcantly higher than the other ﬁve traps tested here. The second wafer, from which trap #6 was taken, was patterned separately from the ﬁrst, using slightly modiﬁed etch parameters. It is conjectured that this may be the reason for the higher heating rate.
92

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:44.284Z
- **Text Length:** 190104 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
