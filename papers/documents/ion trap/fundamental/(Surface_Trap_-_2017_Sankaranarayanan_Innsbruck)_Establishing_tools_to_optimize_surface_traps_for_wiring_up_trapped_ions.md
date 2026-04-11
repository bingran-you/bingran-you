# PDF Document: selvarajan-thesis.pdf

**File Path:** selvarajan-thesis.pdf

**Processed Date:** 2026-02-10T18:14:23.988Z

**File Size:** 10216.77 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 176

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Establishing tools to optimize
surface traps for wiring up
trapped ions.
Dissertation
zur Erlangung des Doktorgrades an der
Fakulta ̈t f  ̈ur Mathematik, Informatik und Physik
der Leopold-Franzens-Universit ̈at Innsbruck
vorgelegt von
Sankaranarayanan Selvarajan
durchgef  ̈uhrt am Institut f  ̈ur Experimentalphysik
unter der Leitung von
Dr. Hartmut H ̈affner
Innsbruck, 2017

 

 Abstract
The ability to store, control, split and transport large ion strings and the ease of fabrication, makes surface traps a promising technology for scaling up ion trap quantum computation. However, despite the advantages of this trap architecture, some important issues remain unsolved. On the one hand, well established micromotion compensation methods used in linear Paul trap cannot be easily extended to surface trap setup. On the other hand, the heating rates observed in surface trap are orders high-
er than the predicted value and the theoretical model proposed to explain this still needs vindication. To harness the full potential of the surface traps these problems needs to be addressed. In this work we present the experimental tools we developed to address some of these problems. Conventional methods used to detect micromotion in linear Paul traps use Doppler shift induced by the ion motion to detect micromotion. This requires the laser beam to have a projection on all three directions of t-
he ion motion. In a planar trap setup, the distance of the trapped ions from the surface of the trap is very small compared to the width of the trap. This limits the laser beam alignment to be parallel to the surface of the trap. This implies the projection of the laser beam on the motional mode of the ion perpendicular to the trap surface is almost zero. This makes the extension of these micromotion detection methods to surface traps difficult. In this thesis we present a novel micromotion compen-
sation method well suited for surface traps. This method is simple and does not required ultra stable, low line-width lasers. Another important problem that has to be solved before the surface traps can be used for quantum computation experiments is the excess heating rates. The heating rates observed in the surface traps are more than 3 orders higher than expected from Johnson noise. The different models proposed to explain this observed heating rate are not verified yet. In this thesis we presen-
t the measurements of heating rates carried out at various positions along the axis of the trap. This knowledge can lead to a better understanding of the cause of the electric field fluctuations in the ion trap setup. Lastly, we present a theoretical analysis of a new method to scale-up ion traps by coupling ions using a macroscopic metallic wire. We also present the first experiments performed to assess the influence of the wire on the ion.
i

 

 Zusammenfassung
Oberfla ̈chenfallen eignen sich hervoragend um selbst große Ionenkristalle zu speichern, zu teilen und zu transportieren. Daru ̈ ber hinaus lassen sich mit ihnen auch selbst komplexe Elektrodenkonfiguration leicht herzustellen. Diese Eigenschaften machen Oberfla ̈chenfallen als skalierbare Architektur f  ̈ur Quanteninformationsverarbeitung sehr interessant. Trotz dieser Vorteile, bleiben viele wichtige Fragen offen. Zum Einen, sind die in herko ̈ mmlichen Paulfallen benutzten Techniken zur Mikrobe-
wegungskompensation nicht ohne weiteres auf Oberfla ̈chenfallen u ̈ bertragbar. Zum Anderen sind die gemessenen Heizraten der Ionenbewegung in Oberfla ̈chenfallen um ein Vielfaches ho ̈ her als erwartet und Modelle, die solche erho ̈ hten Heizraten vorhersagen ko ̈ nnen, sind schwer zu  ̈uberpru ̈ fen. Um das volle Potenzial von Oberfla ̈chenfallen auszusch  ̈opfen, mussen diese Fragen angegangen werden. Diese Arbeit etabliert Werkzeuge, die helfen ko ̈ nnen, diese Probleme zu lo ̈ sen. Herko ̈ mm-
liche Methoden, um Mikrobewegung in linearen Paulfallen zu detektieren, benutzen den Dopplereffekt der aus der Bewegung der Ionen resultiert. Dies bedeutet, dass Laserlicht mit einer Projektion auf all Raumrichtungen verf  ̈ugbar sein muss. Allerdings sind die Ionen in einer Oberfla ̈chenfalle im Verha ̈ltnis zur Ausdehnung der Oberfla ̈chenfalle sehr nahe an der Oberfla ̈che gespeichert. Daher ist es schwer, eine signifikante Projektion des Laserlichts senkrecht zur Oberfla ̈che zu erreichen mit -
der Folge, dass die meisten Techniken zur Mikrobewegungskompensation nicht auf Oberfla ̈chenfallen  ̈ubertragbar sind. In dieser Arbeit pra ̈sentieren wir eine neuartige Methode zur Mikrobewegungskompensation, die kompatibel mit Oberfla ̈chenfallen ist. Unsere Technik ist unkompliziert und beno ̈ tigt keine stabilen schmalbandige Laser. Das andere wichtige Problem, bevor Oberfla ̈chenfallen gewinnbringend zur Quanteninformationsverarbeitung eingesetzt werden k  ̈onnen, sind Heizraten, die ca. drei-
 Gro ̈ ßenordnungen ho ̈ her sind als man es von Johnson-Rauschen der Elektronik erwartet. Die verschiedenen theoretischen Modelle, die dies erkla ̈ren sollen, konnten bis jetzt noch nicht experimentell  ̈uberpru ̈ ft werden. In dieser Arbeit pra ̈sentieren wir Heizratenmessungen f  ̈ur Ionen, die  ̈uber verschiedenen Stellen der Fall gespeichert wurden. Unsere Resultate tragen zu einem besseren Versta ̈ndnis der mo ̈ glichen Mechanismen bei, die elektrisches Feldrauschen und damit die erho ̈ hten-
 Heizraten erzeugen. Als letztes diskutieren wir eine theoretische Analyse einer neuartigen Methode bei der Ionen  ̈uber metallische Dra ̈hte gekoppelt werden, um die Ionenfallentechnologie zu skalieren. In diesem Zusammenhang pra ̈sentieren wir erste experimentelle Resultate, die den Einfluss einen Drahtes auf die Ionebewegung charakterisieren.

 

 Contents
Contents i
List of Figures iii
List of Tables v
1 Introduction 1 1.1 Thesis outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
2 Theory 5 2.1 Trapping and controlling ions . . . . . . . . . . . . . . . . . . . . . 5 2.1.1 Linear Paul traps . . . . . . . . . . . . . . . . . . . . . . . . 5 2.1.2 Planar surface traps . . . . . . . . . . . . . . . . . . . . . . 8 2.1.3 Efficient control of DC voltages . . . . . . . . . . . . . . . . 9 2.2 Quantum mechanics of trapped ions coupled to light fields . . . . 14 2.2.1 Motional Hamiltonian . . . . . . . . . . . . . . . . . . . . . 14 2.2.2 Two-level system . . . . . . . . . . . . .-
 . . . . . . . . . . . 15 2.2.3 Laser-Ion interaction . . . . . . . . . . . . . . . . . . . . . . 16 2.3 Laser-cooling of trapped ions . . . . . . . . . . . . . . . . . . . . . 18 2.3.1 level scheme of 40Ca+ . . . . . . . . . . . . . . . . . . . . . 18 2.3.2 Doppler cooling . . . . . . . . . . . . . . . . . . . . . . . . . 19 2.3.3 Sideband cooling . . . . . . . . . . . . . . . . . . . . . . . . 20 2.4 Detection of the motional state . . . . . . . . . . . . . . . . . . . . 22 2.4.1 Motional sideba-
nd methods . . . . . . . . . . . . . . . . . . 22 2.4.2 Doppler recooling method . . . . . . . . . . . . . . . . . . . 24 2.5 Wiring up trapped ions . . . . . . . . . . . . . . . . . . . . . . . . . 24 2.5.1 Coupling mechanism . . . . . . . . . . . . . . . . . . . . . . 25 2.5.2 Sources of decoherence . . . . . . . . . . . . . . . . . . . . 29
3 Experimental setup 31 3.1 General Infrastructure . . . . . . . . . . . . . . . . . . . . . . . . . 31
i

 ii CONTENTS
3.1.1 Surface traps . . . . . . . . . . . . . . . . . . . . . . . . . . 31 3.1.2 Optics and laser system . . . . . . . . . . . . . . . . . . . . 35 3.1.3 Vacuum chamber assembly . . . . . . . . . . . . . . . . . . 39 3.1.4 Coupling wire assembly . . . . . . . . . . . . . . . . . . . . 41 3.1.5 Magnetic field coils . . . . . . . . . . . . . . . . . . . . . . . 43 3.2 Voltage source . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43 3.2.1 RF Voltage . . . . . . . . . . . . . . . . . . . -
. . . . . . . . . 44 3.2.2 DC Voltage . . . . . . . . . . . . . . . . . . . . . . . . . . . 45 3.3 Experimental control . . . . . . . . . . . . . . . . . . . . . . . . . . 45
4 Stray electric field sensing and compensation 49 4.1 Micromotion in ion traps . . . . . . . . . . . . . . . . . . . . . . . . 49 4.1.1 Principle of compensation . . . . . . . . . . . . . . . . . . 50 4.1.2 Implementation . . . . . . . . . . . . . . . . . . . . . . . . . 51 4.2 Electric field sensing . . . . . . . . . . . . . . . . . . . . . . . . . . 55 4.3 Possible sources of the stray electric field . . . . . . . . . . . . . . 59 4.3.1 Abrupt change in the stray fields . . . . . . . . . . . . -
. . . 59 4.3.2 Photoionization . . . . . . . . . . . . . . . . . . . . . . . . 61 4.3.3 Electrical field emission . . . . . . . . . . . . . . . . . . . . 63 4.4 Clean trap surfaces for reduced charging . . . . . . . . . . . . . . 64
5 Heating in ion traps 67 5.1 Heating rate measurement techniques . . . . . . . . . . . . . . . . 67 5.1.1 Sideband comparison method . . . . . . . . . . . . . . . . 69 5.1.2 Rabi flopping . . . . . . . . . . . . . . . . . . . . . . . . . . 69 5.1.3 Doppler recooling method . . . . . . . . . . . . . . . . . . . 71 5.2 Heating rate along the axis of the trap . . . . . . . . . . . . . . . . 76
6 Towards coupling ions using a macroscopic wire 77 6.1 Trapping simultaneously in two independent wells . . . . . . . . 77 6.2 Wire position measurement . . . . . . . . . . . . . . . . . . . . . . 79 6.3 Characterization of potentials . . . . . . . . . . . . . . . . . . . . . 80 6.4 Characterization of secular frequencies . . . . . . . . . . . . . . . . 85 6.5 Characterization of Heating rates . . . . . . . . . . . . . . . . . . . 86
7 Summary 89 7.1 Outlook . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 90
Bibliography 91
A Quantum state transfer between coupled ions 99

 List of Figures
2.1 Paul trap structure and resultant quadrupole . . . . . . . . . . . . . . 6 2.2 Dynamics of Paul trap . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 2.3 Linear trap to surface trap transformation . . . . . . . . . . . . . . . . 8 2.4 Multipole expansion . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 2.5 Coupled energy levels and motional sidebands . . . . . . . . . . . . . 17 2.6 The level structure of a 40Ca+ ion . . . . . . . . . . . . . . . . . . . . . 18 2.7 Schematic o-
f sideband cooling . . . . . . . . . . . . . . . . . . . . . . . 21 2.8 Trapped ion coupling . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 2.9 Coupling rate as a function of wire height . . . . . . . . . . . . . . . . 29
3.1 Trap-GG: schematic of electrode structure . . . . . . . . . . . . . . . . 33 3.2 Trap A: schematic of electrode structure . . . . . . . . . . . . . . . . . 34 3.3 Laser alignment schematic . . . . . . . . . . . . . . . . . . . . . . . . . 36 3.4 Schematic of double-pass assembly . . . . . . . . . . . . . . . . . . . . 38 3.5 Vacuum chamber assembly . . . . . . . . . . . . . . . . . . . . . . . . 40 3.6 Wire holder schematic-single wire . . . . . . . . . . . . . . . . . . . . 41 3.7 Three-wire -
assembly: schematic and pictures . . . . . . . . . . . . . . 42 3.8 Magnetic field coil schematic . . . . . . . . . . . . . . . . . . . . . . . 44 3.9 Schematic of the experimental control . . . . . . . . . . . . . . . . . . 47
4.1 Laser projection on modes of ion micromotion . . . . . . . . . . . . . 50 4.2 Micromotion compensation schematic . . . . . . . . . . . . . . . . . . 52 4.3 Plot showing the excitation dip in the ion fluorescence . . . . . . . . . 53 4.4 Micromotion compensation data . . . . . . . . . . . . . . . . . . . . . 55 4.5 Plot of stray electric field along the axis of the trap . . . . . . . . . . . 57 4.6 Plot showing the gradient of the stray electric field . . . . . . . . . . . 58 4.7 Stray electric-
 map along the axis of the trap . . . . . . . . . . . . . . . 60 4.8 Electric field emission data . . . . . . . . . . . . . . . . . . . . . . . . 63
5.1 Sideband comparison method of temperature measurement . . . . . 68
iii

 iv LIST OF FIGURES
5.2 Carrier Rabi flops for different ion motional states . . . . . . . . . . . 70 5.3 Doppler recooling method . . . . . . . . . . . . . . . . . . . . . . . . . 72 5.4 Calibration of Doppler recooling method . . . . . . . . . . . . . . . . 74 5.5 Heating rate along the axis of the trap . . . . . . . . . . . . . . . . . . 75
6.1 Double-well potential . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78 6.2 Process of loading in two wells . . . . . . . . . . . . . . . . . . . . . . 79 6.3 Artistic view showing the wire shadowing the ion fluorescence . . . 81 6.4 Artistic view showing the wire position above the ion . . . . . . . . . 82 6.5 Vertical compensation voltage as a function of ion-wire distance . . . 83 6.6 Effect of the wire on DC and RF quadrupoles . . . . . . . . . . . . . . 84 6.7 Micromotion compens-
ation in the presence of wire . . . . . . . . . . 85 6.8 Radial frequencies as a function of the ion-wire distance . . . . . . . . 86 6.9 Heating rate as a function of ion-wire distance . . . . . . . . . . . . . 88

 List of Tables
5.1 Motional temperature measurement techniques comparison . . . . . 73
v

 

 List of Abbreviations
Abbreviation Description
AC Alternating Current AOM Acousto-Optic Modulator AR Anti-Reflection BBO Beta Barium Borate BSB Blue Sideband Ca Calcium CCD Charge Coupled Device CLCC Ceramic Leadless Chip Carrier CPGA Ceramic pin grid array DAC Digital Analog Converter DC Direct Current DDS Direct Digital Synthesizers FALC Fast Analog Linewidth Control FPGA Field-Programmable Gate Array FWHM Full Width at Half Maximum GUI Graphical User Interface LD Lamb-Dicke PDH Pound-Drever-Hall PID Proportional-Integral-Derivative PMT Phot-
o-Multiplier Tube PZT Piezo-Electric Transducer RF Radio Frequency QC Quantum Computation RSB Red Sideband TA Tapered Amplifier TCP Transmission Control Protocol Ti-Sub Titanium Sublimation TTL Transistor-Transistor logic UHV Ultra-High Vacuum UV Ultra-Violet
vii

 

 Chapter 1
Introduction
In the early 1980’s Richard Feynman [1] and Yuri Manin [2] separately proposed that certain quantum phenomena associated with entangled particles could be used to simulate quantum systems which are too complicated for classical computers. But Quantum Computation (QC) did not gain a great attraction for more than a decade till Peter Shor in 1992 discovered a quantum algorithm [3, 4] that can factor large numbers exponentially faster than with classical computers. Shortly afterwards Lov Grover found-
 an algorithm [5] in 1996, which can be used to search an unstructured list and scales more efficiently with the size of the search-space than any known classical algorithm.
While the theory of Quantum computation was gaining popularity, considerable progress was made also on actualizing it. In 1995 Ignacio Cirac and Peter Zoller presented an idea on how to realize the essential components of quantum computation [6]. Their idea was to mediate the interaction between the internal degrees of freedom of individual trapped ions via their collective motion. The near perfect isolation of trapped ions from their environments results in long coherence times, of the order of f-
ew seconds, making them ideal candidates for quantum registers. Trapping of ion crystals was first demonstrated by Neuhauser et al. [7] in 1980 using a quadrupole trap, proposed by Wolfgang Paul in the 1950’s. This in combination with laser cooling techniques [8] to cool the ions close to the motional ground state and the means to prepare and manipulate the internal state, made ion traps one of the leading contenders in the experimental realization of quantum computers.
For two decades, so-called linear Paul traps have been an effective workhorse in the field of ion trap quantum computers. They have been used to demonstrate various quantum protocols and algorithms [9, 10, 11, 12, 13, 14, 15, 16] and to perform a variety of simulations of important quantum many-body effects. [17]. But as the complexity of the problems grows the number of ion require to solve
1

 2 CHAPTER 1. INTRODUCTION
these problems also grow. Manipulation of a large number of ions in a single trap present an immense technical challenge and scaling arguments suggest that this scheme is limited to computations on tens of ions [18, 19]. One way to overcome this limitation involves quantum communication between a number of small iontrap quantum registers. A promising proposal to realize this requires splitting, shuttling and recombining the ion crystal [20], which cannot be achieved with ease using simple linear P-
aul traps.
The problem of scalability of ion traps was addressed by the introduction of planar surface traps [19, 20]. Instead of having a three-dimensional structure, the electrodes of the surface trap are arranged in a single plane. The confining quadrupole above the surface and the axial confinement is achieved by a set of segmented electrodes. A detailed discussion of these traps is presented in the following chapters of this thesis. The segmentation of the electrodes allows for flexible potentials to sp-
lit, transport and merge the ion crystals [20]. Unlike the difficulties in achieving the precision in the assembly of the linear Paul traps, surfaces traps can be fabricated using established micro-fabrication techniques [21, 22, 23].
While surface traps solve some of the important problems associated with traditional linear Paul traps, surface traps also bring new problems with them. One of the most important problems is the excessive heating rate observed in surface ion traps [19, 24]. Since ions are charged particles, they are very sensitive to electric fields. If the electric field at the ion position changes with a spectral component matching the frequency of one of the motional modes of the ion, the field excites the ion.-
 We see this as an increase in the temperature of the ion and this process is called heating of the ion. In surface traps, to achieve quadrupole strengths comparable to standard linear Paul traps without increasing the voltages, the ion needs to be trapped much closer to the electrodes. Thus, planar traps with ion-surface separations of less than 100 μm are being pursued. However, ions so close to the surface experience particularly strong electric field noise, up to 3 orders of magnitude higher t-
han that expected from Johnson noise considerations [19, 24], imposing a major obstacle in developing this approach
Another problem that plagues the surface traps is the laser access. Since the ions are trapped very close to the surface of the trap, it is not possible to have a good overlap of the laser beam with the motional mode of the ions perpendicular to the surface of the trap without scattering laser light off the trap. This makes laser cooling of those modes inefficient on surface traps.

 1.1. THESIS OUTLINE 3
1.1 Thesis outline
The main objective of this thesis is to perform experiments on wiring up distant ions via a metallic electrode. Such a quantum interface could link a number of ion trap quantum processors and thus be a powerful tool in scaling ion trap quantum computation to a useful size. The biggest impediment towards this goal is the lack of well established tools for quantum control in small surface traps. The work of this thesis is focused on the development of tools for ions confined in surface traps. We pre-
sent methods to characterize surface traps and to circumvent laser access restrictions. We also measure heating rates and study how the presence of a nearby electrically isolated electrode modifies the trapping potential. This thesis is divided into five main chapters, excluding the introduction and the concluding chapters. In chapter 2, I discuss in detail the theory related to various aspects of ion traps and laser cooling as well as the idea of ion-wire coupling. In chapter 3, I describe the di-
fferent traps we used, the experimental setup and the configuration of the various laser beam paths. In chapter 4, I describe our method of micromotion compensation in surface ion traps [25], possible sources of stray charges and how the compensation of micromotion can be used to sense the stray fields on the trap. Chapter 5 focuses on the heating rates in surface traps and different methods of measuring the heating rates. Finally in chapter 6, we discuss our experiments towards coupling ions usin-
g the wire.

 

 Chapter 2
Theory
In this chapter we present the theoretical analysis required to understand the experiments discussed in this thesis. We start with the basic theory of trapping and controlling single ions in Radio Frequency (RF) traps. Later we describe the interaction of the ion with laser light and different ways of laser cooling them. We conclude this chapter with the analysis of our proposal to couple two ions using a macroscopic metallic wire.
2.1 Trapping and controlling ions
2.1.1 Linear Paul traps
According to Gauss law, the divergence of an electric force field derived from the potential Φ(r) is always zero [26]
∇2Φ = 0. (2.1)
In 1842 Samuel Earnshaw pointed out that for a static harmonic potential Φ(r) = Φ0 · (αxx2 + αyy2 + αzz2), where Φ0 is in units of volts, at least one of the coefficients αx, αy, αz must be negative to satisfy equation 2.1, i.e. in free space there can be only saddle points and no local minima or maxima of the potential. This implies a point charge cannot be trapped using only static potentials. In 1950s, Wolfgang Paul came up with an idea to confine ions using oscillating electric fields [27, 28]-
. A typical linear Paul trap consists of four cylindrical electrodes as shown in Fig. 2.1a. A pair of diagonally opposing electrodes is connected to an RF voltage while grounding the second pair. This combination of electrodes forms a quadrupole with an RF null in its center where the ions are stored (see Fig. 2.1b). During the first half of the RF drive cycle, the positively charged ion experiences
5

 6 CHAPTER 2. THEORY
(a) (b)
Figure 2.1: Basic Paul trap assembly and the resultant quadrupole a) Schematic of the four rod linear Paul trap, along with a three-ion chain in the center. The RF electrodes are depicted with a shade of red and the ground electrodes in gray. Axial confinement is achieved by splitting the ground electrode and applying a DC voltage in the outer segments. b) The resulting quadrupole in the XY plane at the trapping region
Figure 2.2: Electric potential in the XY plane of a Paul trap, during the peak of the positive and negative cycle of the RF drive is shown on the left. The ion sitting at the saddle point sees an effective potential shown on the right
a local maximum along one of the radial directions and a local minimum along the second (see Fig. 2.2). The frequency of the RF drive is adjusted such that the potential changes sign before the ion moves significantly along the x direction. It can be shown that the ion experiences an effective harmonic potential in both the radial directions x and y [29]. Trapping in the z direction is achieved by adding a DC end-cap electrode or by splitting the ground electrode in to three parts, and connecting -
the ends to a positive voltage. For an applied RF voltage of V cos(ΩRFt), the time dependent quadrupole potential is given by
Φr f (x, y, z) = V cos(ΩRFt)
2
(αr f x2 + βr f y2 + γr f z2), (2.2)
We also apply a static voltage U to the end caps to provide confinement along

 2.1. TRAPPING AND CONTROLLING IONS 7
the z direction given by
Φdc(x, y, z) = U
2
(αdcx2 + βdc y2 + γdcz2). (2.3)
Here γdc has to be a positive in order to achieve confinement in the z direction. The equation of motion of a particle with a charge Q and mass m, in the presence of the resultant potential along the x direction is given by
m ̈x = −2Q(Uαdc + Vαr f cos ΩRFt)x. (2.4)
The above equation can be written in the form of the canonical Mathieu equation [30]
d2u
dξ2 + (a − 2q cos(2ξ))u = 0, (2.5)
with the following substitutions
ξ = ΩRFt
2,
ax = − 8αdcQU
mΩ2
RF
,
qx = 4αr f QV
mΩ2
RF
.
(2.6)
where ax and qx are the dimensionless quantities representing the strength of the static and the oscillating fields respectively. The components of qi, where i = x, y, z for the three directions can be defined as qx = -qy and qz = 0. In the lowest-order approximation, i.e. |a|, q 1, the solution of equation 2.4 is given by
ui(t) = A cos(ωit)[1 + qi
2 cos(ΩRFt)]. (2.7)
According to this equation the ion exhibits an oscillatory motion with the amplitude A and frequency ωi given by
ωi = ΩRF
2
√
ai + q2
i /2. (2.8)
This frequency component of the ion motion is known as secular motion. The second frequency component ΩRF in the solution is the driven motion called micromotion. The amplitude of micromotion is reduced by a factor of qi/2 and is usually neglected for all practical purposes.

 8 CHAPTER 2. THEORY
2.1.2 Planar surface traps
Linear Paul traps described in the Sec. 2.1.1 have been a versatile tool in the field of ion trap quantum computation [9, 10, 11, 12, 13, 14, 15, 16]. But the three dimensional structure and the high precision required for the assembly of Paul traps, makes it less suitable for using it to scale up quantum computers. This shortcoming lead to the invention of planar surface traps [20, 21, 22]. The
(a)
(b) (c)
Figure 2.3: (a) Schematic describing the realignment of the electrodes of a 3D linear Paul trap to form a surface trap. The RF electrodes are moved down till they lie in the same plane as the lower ground electrode. The top ground electrode is duplicated and placed on either sides of the RF electrodes. The electric field lines generated by the corresponding surface trap is shown on the right. Close to the trapping region they can be approximated to a quadrupole (b) Schematic showing the trapping a-
long the axial direction. This is achieved by segmenting the outer ground electrodes on either sides of the RF electrode and applying a set of voltages to form a minimum in the center. (c) A picture of real surface trap provided by Prof. Isaac Chuang at the Massachusetts Institute of Technology. The RF and DC electrodes are clearly marked. The center electrode is connected to the ground plane in this particular design. The gold bonding wires used to make the electrical connections can be seen on t-
he edges of the trap.

 2.1. TRAPPING AND CONTROLLING IONS 9
principle of trapping in surface trap is same as that of the linear trap. But all the electrodes of this trap lie in the same plane, thus, easing high precision fabrication substantially. A schematic of how the electrodes of the a linear trap can be arranged in a plane, to form a surface trap is shown in Fig. 2.3a. The axial confinement can be achieved by splitting the outer DC electrodes into segments and applying static voltages to form a minimum in the center along the axis of the trap as shown-
 in Fig. 2.3b.
By putting all the electrodes in the same plane we can take advantages of well-established micro-fabrication techniques to produce traps with elaborate electrode structures, to perform complex maneuvers required for the scaling up ion traps [21].
2.1.3 Efficient control of DC voltages
In the experiments using planar ion traps various procedures such as excess micromotion compensation (discussed in chapter 4) and secular trap frequency adjustment, require precision control of the DC voltages. During these procedures, it is important that the parameters of the trap, such as the curvature and the direction of the electric field are controlled independently. To achieve this, we expand the DC potential in spherical coordinates and map the DC electrode voltages to the coefficients of-
 the spherical harmonics that affect the various trap parameters. In this section, we present the details of this mapping process. A more detailed explanation of this can be found in the Master thesis of Gebhard Littich [31].
In spherical coordinates the Laplace operator is given by [26]
∆= 1
r2
∂ ∂r
(
r2 ∂
∂r
)
+1
r2 sin2 θ
∂ ∂θ
(
sin θ ∂
∂θ
)
+1
r2 sin2 θ
∂2
∂φ2 , (2.9)
where r, θ and φ represent the radial distance, azimuthal angle, and polar angle with respect to the ion position respectively. The Laplace equation can be solved using separation of variables by writing the potential as
Φ(r, θ, φ) = R(r)Θ(θ)φ(φ). (2.10)
The general solution of this equation is given by
Φ(r, θ, φ) =
∞ ∑
l=0
l ∑
m=−l
AlmrlYlm(θ, φ), (2.11)
where Alm are constants and rlYlm are the spherical harmonics, which are expressed in form of complex exponentials and associated Legendre polynomials.

 10 CHAPTER 2. THEORY
Ylm(θ, φ) =
√
(2l + 1)
4π
(l − m)!
(l + m)! Pm
l (cos θ)eimφ (2.12)
where the associated Legendre function Pm
l for a positive m is defined by the formula
pm
l (x) = (−1)m(1 − x2)m/2 dm
dxmPl(x). (2.13)
The Ylm terms up to the second order can be written as follows.
l=0:
 
Y0,0 =
√
1
4π
l=1:



Y1,−1 =
√
3
8π
(x − iy)
r
Y1,0 =
√
1
4π
z
r
Y1,1 = −
√
3
8π
(x + iy)
r
l=2:



Y2,−2 =
√
15
32π
(x − iy)2
r2
Y2,−1 =
√
15
8π
(x − iy)z
r2
Y2,0 =
√
5
16π
(2z2 − x2 − y2)
r2
Y2,1 = −
√
15
8π
(x + iy)z
r2
Y2,2 =
√
15
32π
(x + iy)2
r2
(2.14)
To simplify further calculations we rewrite the equation 2.11 in a one-indexed real basis defined by the following mapping

 2.1. TRAPPING AND CONTROLLING IONS 11
Yj =



√i
2 rlj (Ylj,mj − (−1)mj Ylj,−mj ) if mj < 0
rlj Ylj,0 if mj = 0
√1
2 rlj ((−1)mj Ylj,mj + Ylj,−mj ) if mj > 0
(2.15)
along with the corresponding complex coefficients
Mj =



−i
√
2 (Alj,mj − (−1)mj Alj,−mj ) ifmj < 0
Alj,0 if mj = 0
√1
2 ((−1)mj Alj,mj + Alj,−mj ) ifmj > 0
(2.16)
In the above equations, lj and mj map the indices j of the single-indexed spherical harmonics Yj to the indices l and m of the double-indexed Yj,m defined in equation 2.12. The mapping is given by
lj =
 

0 if j = 0
b √ j − 1c if j > 0, (2.17)
where b·c is the floor function and
mj = j − (2lj + 1) − lj(lj − 1). (2.18)
The mapping up to the order 2 (j = 9) is given below


j
1 2 3 4 5 6 7 8 9


→


lj mj
00 1 −1 10 11 2 −2 2 −1 20 21 22


(2.19)
Substituting these values and expanding the spherical harmonics up to the second order Legendre polynomials, equation 2.11 takes the form

 12 CHAPTER 2. THEORY
Φ(x, y, z) =M1 + M2
(y
r0
) + M3
(z
r0
) + M4
(x
r0
) + M5
( xy
2r2
0
) + M6
( zy
2r2
0
)
+ M7
( 2z2 − x2 − y2
2r2
0
) + M8
( zx
2r2
0
) + M9
( x2 − y2
2r2
0
) + . . . (2.20)
Φ=
∑9
j=1
MjYj + . . . (2.21)
Here the spherical harmonics are normalized to a dimensionless quantity by dividing it by a constant length r0 (in units of meters) and M1, M2 . . . are the complex coefficients defined in equation 2.16.
The first term is a constant potential term which has no contribution to the electric field. Terms 2 to 4 describe the dipole contributions of the potential,
which in terms of electric fields represent constant fields
E−→x, E−→y, E−→z along x, y, z directions, respectively. Terms 5 to 9 describe the quadrupole contributions of the potential, which are responsible for the curvature of the potential. A pictorial representation of some of the multipoles is shown in Fig. 2.4.
Mapping DC electrode voltages to the multipoles
To control the strengths of the individual multipoles of the trapping potential the multipoles have to be mapped on to the electrode voltages. To achieve this the contributions of the independent electrodes to the total potential is estimated using an electrostatic solver. This corresponds to the potential Φi created when a voltage of 1 V is applied to the ith electrode and 0 V to all the other electrodes, multiplied by the voltage Vi applied on it. The superposition principle dictates that the to-
tal potential Φ due to all the electrodes of the trap is equal to the sum of independent potentials
Φ=
N ∑
i=1
Vi
Φi
V , (2.22)
where N is the number of DC electrodes. It has to be noted that we renormalize Φi into a dimensionless quantity by dividing it by 1 V. This is done to preserve the units of the total potential Φ which is the summation of the products of Φi and Vi. This is justified because Φi corresponds to the potential due to 1 V on the ith electrode.

 2.1. TRAPPING AND CONTROLLING IONS 13
(a) x2−y2
2r2
0 (b) x
r0
(c) xy
2r2
0
Figure 2.4: Electric field lines (blue) and their resultant equipotential surface (gray) of some of the components in the multipole expansion. It is evident from Fig. a and c that by adjusting the strength of the multipoles corresponding to
x2−y2
2r2
0
and xy
2r2
0
the quadrupole component can be tilted in the XY plane.
Φi(x, y, z)/V = M1,i + M2,i
(y
r0
)
+ M3,i
(z
r0
)
+ M4,i
(x
r0
)
+ M5,i
( xy
2r2
0
)
+ M6,i
( zy
2r2
0
)
+ M7,i
( 2z2 − x2 − y2
2r2
0
)
+ M8,i
( zx
2r2
0
)
+ M9,i
( x2 − y2
2r2
0
)
. . . (2.23)
=
9 ∑
j=1
Mj,iYj + . . . (2.24)

 14 CHAPTER 2. THEORY
Here Yj is the jth multipole and Mj,i is the coefficient describing the contribution of the jth multipole to the potential due to ith electrode. Mj,i is a unitless quantity that depends only on the geometry of the electrode. The total potential in Eq. 2.22 can be written as
Φ=
N ∑
i=1
∑9
j=1
Mj,iViYj. (2.25)
Comparing 2.20 and 2.25, the coefficient vector M = {Mj} can be written in terms of the voltage vector V = {Vi} and the individual multipole coefficient matrix M ̃ = {Mj,i} as
M = M ̃ V. (2.26)
This equation can be inverted to compute the voltage vector for a given set of M that determines the contribution of each multipole to the trapping potential
V = M ̃ −1M. (2.27)
This mapping of the multipoles to the voltages enables us to rapidly compute the set of voltages in real time, for any desired set of multi-pole coefficients.
2.2 Quantum mechanics of trapped ions coupled to light
fields
The Hamiltonian, H describing the behavior of a trapped ion interacting with the lasers field consist of three parts [32, 30].
H = Hm + He + Hi. (2.28)
Here Hm and He describes the motional and internal state of the ion respectively and Hi describes the ion-laser interaction.
2.2.1 Motional Hamiltonian
In the pseudo-potential model [33], the motion of the ion is treated as a harmonic oscillator, with the Hamiltonian written as follows
Hm = p2
2m + 1
2 mω2r2. (2.29)
Eq. 2.29 equation can be rewritten in terms of creation and annihilation operators as
Hm = ħω(aˆ†aˆ + 1
2
). (2.30)

 2.2. QUANTUM MECHANICS OF TRAPPED IONS COUPLED TO LIGHT FIELDS 15
where
aˆ =
√
mω
2ħ r + i
√
2mħω p,
aˆ† =
√
mω
2ħ r − i
√
2mħω p.
(2.31)
The position and the momentum operators can be written as
r=
√
ħ
2mω(aˆ + aˆ†), (2.32)
and the spread of the wavefunction can be calculated using
√〈n|r2|n〉 = √(2n + 1)
√ħ
2mω . (2.33)
In a trap with secular frequency ω = 2π·1 MHz, we find that a single 40Ca+ ion in the ground state of the trap has a characteristic wavepacket size of 11 nm.
2.2.2 Two-level system
To interpret the results presented in this thesis the internal electronic structure of 40Ca+ ion is approximated as a two-level system with levels |g〉 and |e〉 with an energy difference of ħω0 = ħ(ωe − ωg). This is justified for the real ions if the detuning of the laser from the transition of interest is much smaller than that from any other transitions that might occur and if the Rabi frequency coupling the two levels is much smaller than the detuning from those other transitions.
The corresponding Hamiltonian is given by
He = ħωg|g〉〈g| + ħωe|e〉〈e|
= ħ ωe + ωg
2
(|g〉〈g| + |e〉〈e|) + ħ ω0
2
(|e〉〈e| − |g〉〈g|).
(2.34)
By mapping the operators onto the spin-1/2 operator basis the above equation can be written in terms of Pauli matrices as
He = ħ ω0
2 σz. (2.35)

 16 CHAPTER 2. THEORY
2.2.3 Laser-Ion interaction
For the laser field E(r, t) = E0
(ei(k·x−ωLt) + e−i(k·x−ωLt)), directed along the x-axis of the trap and tuned close to a transition of the ion described as a two-level systems, the coupling Hamiltonian is given by
Hi = ħ
2 Ω(|g〉〈e|e−i(k·x−ωLt+φ) + |e〉〈g|ei(k·x−ωLt+φ)) (2.36)
where k and ωL are the wave-vector and the frequency of the laser field respectively. The Rabi frequency Ω describes the coupling strength. For a dipoletransition this is defined as (ħ/2)Ω = e〈g|E0 · x|e〉. The interaction Hamiltonian can be obtained by performing the transformation Hint = U†HiU with U = eiH0t/ħ
Hint(t) = ħ
2 Ω ˆσ+e−i
(φ+η(aˆ+aˆ†)−δt
)
+ H.C. (2.37)
where σ+ → |e〉〈g| and H.C. denotes the Hermitian conjugate of the preceding term. Here H0 = Hm + He is the free Hamiltonian of the ion. In this equation we introduce the Lamb-Dicke parameter, η, which is a measure of the ratio between the wavelength and the extent of the ion’s ground state wave function.
η=k
√ħ
2mω (2.38)
Lamb-Dicke regime
The limit where the size of the motional wave function is much less than the wavelength of the light interacting with the ion is defined as Lamb-Dicke regime, i.e. √〈n|r2|n〉 λ. Combining this with Equation 2.33, it can be observed that this limit is satisfied when η
√
2n + 1 1. In this regime the interaction Hamiltonian can be further simplified. By expanding the argument in the exponential in Eq. 2.37 to first order, we find three resonances depending on the values of δ [30]. The resonance for δ = 0 is called the carrier resonance and has the form
Hˆ car = ħ
2 Ω0(σ+eiφ + σ−e−iφ). (2.39)
This Hamiltonian describes the coupling of the electronic ground and excited states of the ion without affecting the motional state, i.e. |n〉|g〉 ↔ |n〉|e〉, with Rabi frequency of Ω0. The resonance at δ = −ω is called the first red sideband, and the Hamiltonian reduces to the Jaynes-Cummings Hamiltonian [34], which has the form
Hˆ rsb = ħ
2 Ω0η(aˆσ+eiφ + aˆ†σ−e−iφ). (2.40)
Assuming the ion in |g〉, this resonance reduces the motional state of the ion by one quanta while driving it between the ground and excited state, |n〉|g〉 ↔

 2.2. QUANTUM MECHANICS OF TRAPPED IONS COUPLED TO LIGHT FIELDS 17
(a)
(b)
Figure 2.5: (a) Schematic depicting the coupling of internal and motional states of the ion. When the 729 nm laser is tuned to resonance with the S1/2 ↔ D5/2 transition the population gets transferred to the excited state without effecting the motional state of the ion (black). If the laser is detuned to the red sideband of the transition by a secular frequency (red), the ion loses a motional quantum while transferring the population to the excited state and similarly it gains a phonon if it is de-
tuned to the blue sideband of the transition(blue) (b) The resultant expected spectrum when the frequency of the 729 nm laser is scanned over the carrier and the red and the blue sidebands of a transition.
|n − 1〉|e〉. This transition can be used to entangle the motional state with the internal state of the ion. We use this transition to perform cooling of the ion close to its motional ground state (section 2.3.3) and to measure its motional state (section 2.4). The Rabi frequency for this transition is given by
Ωn,n−1 = Ω0
√
nη (2.41)
Similarly the resonance at δ = +ω describes the first blue sideband transition and the Hamiltonian has the form

 18 CHAPTER 2. THEORY
Figure 2.6: The level structure of a 40Ca+ ion
Hˆ bsb = ħ
2 Ω0η(aˆ†σ+eiφ + aˆσ−e−iφ). (2.42)
Assuming the ion in |g〉, This transition adds one phonon of secular motion while the ion goes to an excited state, |n〉|g〉 ↔ |n − 1〉|e〉. The Rabi frequency of this transition is given by
Ωn,n+1 = Ω0
√
n + 1η (2.43)
A schematic of the carrier, red and blue sideband transitions, along with the resultant spectral lines is shown in Fig. 2.5
2.3 Laser-cooling of trapped ions
2.3.1 level scheme of 40Ca+
All of the experiments discussed in this thesis were carried out using 40Ca+ . 40Ca+ has a simple level structure amenable for laser cooling as well as a narrow transition allowing us to implement a qubit. Moreover, all transitions can be conveniently driven with commercially available diode-laser systems. A schematic of the relevant energy levels of 40Ca+ with the corresponding laser wavelengths is shown in Fig. 2.6.
The S1/2 ↔ P1/2 is a dipole transition with wavelength λ = 397 nm. The life time of the P1/2 level is about 7.4 ns, and the natural line width of this transition is about 21 MHz. In our experiments we use this transition for Doppler cooling and detection of the ion. The P1/2 state can decay into the metastable D3/2 with a probability of 7%, resulting in the obstruction of Doppler cooling and detection. To prevent this, the ion is repumped out of the D3/2 state using laser light at λ =

 2.3. LASER-COOLING OF TRAPPED IONS 19
866 nm, driving the P1/2 ↔ D3/2 transition and thus emptying the metastable D3/2 state. The state D5/2 is a metastable state with a life time of 1.2 s. We use the long-lived S1/2 and D5/2 states as logical qubit states. The S1/2 ↔ D5/2 transition is a quadrupole transition with wavelength λ = 729 nm and a linewidth of 120 mHz. This transition is used for the coherent manipulation of the logical qubit states. Since the natural linewidth of this transition is much smaller than the motional frequency-
 of the ion, the S1/2 ↔ D5/2 transition is used to resolve the motional modes of the ion to cool them to the motional ground state using sideband cooling method (section 2.3.3). A dressing laser at λ = 854 nm couples the transition P3/2 ↔ D5/2 and ”quenches” the metastable state D5/2 by exciting ion to P3/2 from which it rapidly decays back to the ground state S1/2 [35].
2.3.2 Doppler cooling
For the experiments that utilize trapped ion for quantum information processing it is necessary that the ions are cooled to the Lamb-Dicke regime (see section 2.2). This is achieved using various laser cooling methods and Doppler cooling is the first step in this process. Doppler cooling was first demonstrated in late 70s by different groups [8, 36]. Doppler cooling involves monochromatic light with frequency tuned slightly below an electronic transition in an atom. The atom moving towards the lig-
ht source experiences an increase in the frequency because of the Doppler shift. If the detuning of the light frequency is adjusted such that the increased frequency is in resonance with the electronic transition of the atom it absorbs the photon. In each absorption event, the atom loses a momentum equal to the momentum of the photon. The absorption also transfers the atom from the internal ground state to an excited state. The atom returns to the ground state by spontaneously emitting the photon.-
 Since spontaneous emission is isotropic there is no change in the average momentum of the atom. As a result the atom slows down after multiple absorption and emission cycles. In case of free atoms two laser beams from opposite directions are needed to decelerate the atomic motion in one direction. However, for an ion trapped in a harmonic potential the trap reverses the ion’s velocity every half-cycle of the harmonic motion, so that a single laser beam can cool the ion motion [37] in the directio-
n of the beam. The ion trapped in a 3-dimensional Paul trap can be cooled by choosing the angle of the laser beam to have a projection on all three principal axes of ion’s secular motion, thereby cooling the ion in all 3 directions. A complete analysis of laser cooling including micromotion of the ion was derived by Cirac et.al. [38] and summarized in the review article by Leibfried et.al. [30]. Doppler cooling is carried out using an atomic transition which has a radiative decay rate much higher -
than the motional frequency of the ion,

 20 CHAPTER 2. THEORY
ωi Γ, which implies the absorption and spontaneous emission of photon occurs in a time span in which the velocity v of the ion undergoing harmonic oscillations does not change noticeably. In this limit the harmonic potential has little influence on the laser cooling process [39]. For a given frequency of the laser ωL, detuning by ∆ = ωL − ω0 from the atomic transition ω0 with the Rabi frequency Ω, the radiation pressure force exerted by the laser is given by [30]
F = ħkΓρee (2.44)
where the excited state probability is
ρee = Ω2
Γ2 + 4(∆ − kv)2 . (2.45)
At lower intensities and smaller velocities, with ∆ < 0, the force described in the equation 2.44 acts as a viscous force resulting in the cooling of the ion. Whenever a photon is emitted, the ion recoils and changes its kinetic energy. Even though the recoil kicks averages out to give a mean momentum 〈p〉 = 0, the discrete nature of this process gives rise to a random walk in momentum space. This means that the ion is always moving and does not come to a complete stop. This random walk in momentum-
 space is what sets the lower bound of the cooling process known as Doppler limit and is given by
TDoppler = ħΓ
2kB
(2.46)
where kB is the Boltzmann constant.
2.3.3 Sideband cooling
Sideband cooling is a laser cooling technique employed to cool the ion beyond the Doppler limit. Using this method the ion can be placed in the motional ground state of the trapping potential with a high probability [40, 41]. To achieve sideband cooling the frequency of the laser light is tuned to address the lower motional sideband of the transition ω0−ωi. In the Lamb-Dicke regime, for ωi Γ the spontaneous decay from the excited state will happen primarily at the carrier frequency (see Sec. 2.2.3-
). This cycle results in the loss of a motional excitation every time the atom is excited. This process is repeated until the ground state is reached, where the excitation of the red motional sideband is not possible. An illustration of this process is presented in Fig. 2.7. The linewidth of the laser is chosen to be much smaller than the motional frequency of the ion to suppress the excitation of the blue sideband transition. The cooling rate of the process depends on the scattering rate. Each si-
deband cooling cycle removes one phonon, hence the cooling rate is given by the product of the excited state’s decay rate, Γ and the excited level population, ρee [30],

 2.3. LASER-COOLING OF TRAPPED IONS 21
Figure 2.7: Schematic describing the sideband cooling process. When the atom is excited using the laser addressed to the red sideband transition it loses a phonon and decays at the carrier frequency with a high probability. This process is repeated until the atom reaches the motional ground state.
Rn = Γρee = Γ (Ωη
√
n)2
2(Ωη
√
n)2 + Γ2. (2.47)
Where Ω is the Rabi frequency, η is the Lamb-Dicke parameter and n is the quantum number of the motional state. When the ion reaches the ground state (n = 0), the cooling ceases and there will be no further excitation at the red sideband frequency. In the presence of no other heating mechanism, the lowest temperature that can be attained by the sideband cooling is limited by the non-resonant excitations from the |n = 0〉 state. Considering the non-resonant excitations to the nearest vibrational lev-
els and ηΩ Γ, the steady state temperature is given by [30]
〈n〉 = p1 = Γ2
4ω2
0
( η ̃2
η2 + 1
4
)
. (2.48)
Where η ̃ is the Lamb-Dicke factor for spontaneous decay, which is different from the Lamb-Dicke factor for absorption, η. This is because the emission process is not limited to the same direction as the absorption process and might also be a different frequency. Here only excitations to the nearest motional level are considered. Changes in the motional quantum number by two or more are neglected since they are suppressed by a factor of η4. In the limit where

 22 CHAPTER 2. THEORY
ωi Γ, off-resonant scattering becomes negligible, and the ion can be cooled to the ground state with high probability.
2.4 Detection of the motional state
Many of the experiments discussed in this thesis require estimation of the motional temperature of the ion. The wide range of temperatures in these experiments require us to employ different methods for temperature measurements. In this section we discuss the three different methods we used in our experiments.
2.4.1 Motional sideband methods
For low ion temperatures, the most accurate method to measure the average phonon number of the ion is to map the motional state of the ion onto its internal state, which can be measured with high efficiency. The motional temperature of the ion can be determined by repeated measurement of this mapped internal state of the ion.
The measurement of the motional state by mapping it onto the internal state can be done in two ways. First method is measuring the coupling strength of the carrier and the sideband transitions through Rabi oscillations and second method is comparing the strengths of the red and the blue sidebands of the transition. In this section we describe these methods of ion temperature measurement.
Sideband comparison method
This method relies on the fact that if the ion is in the motional ground state it doesn’t get excited when driven at the red sideband frequency, whereas the blue sideband is still present. By comparing the strengths of both excitations the average number of phonons can be estimated. For the ion in the electronic ground state with a thermal distribution of motional states, the probability of finding the ion in the excited state, after illuminating it with laser pulse at the red sideband frequency f-
or a duration t is given by [30]
ρRSB =
∞ ∑
n=1
〈n〉n
(〈n〉 + 1)n+1 sin2(Ωn,n−1t/2). (2.49)
Similarly the excited state population after the pulse resonant with the blue sideband is given by
ρBSB =
∞ ∑
n=1
〈n〉n
(〈n〉 + 1)n+1 sin2(Ωn,n+1t/2). (2.50)

 2.4. DETECTION OF THE MOTIONAL STATE 23
These two values can be easily measured experimentally. For the excitation time of the order of the sideband Rabi oscillation time period, the ratio of these two values yields [40]
ρRSB
ρBSB
= 〈n〉
〈n〉 + 1 , (2.51)
and the average phonon number can be estimated using
〈n〉 = ρRSB
ρBSB − ρRSB
. (2.52)
This method requires the ion to be close to the motional ground state with average phonon number on the order of few phonons. For high 〈n〉 the strengths of the sidebands become comparable and the method becomes inaccurate.
Rabi oscillation on motional sidebands
In the Lamb-Dicke regime the coupling strength, Ωn,n+s, depends on the motional state of the ion. This dependency can be used to map the motional state onto the internal state of the ion, which can be efficiently measured. To begin with, consider the ion in the electronic ground state, with a thermal distribution of motional states.
|ψ〉 = |g〉
∞ ∑
n=0
cn|n〉 (2.53)
the population of the excited states after driving the ion with a pulse resonant with the carrier (|g〉 ↔ |e〉) for a time t is given by
ρe = 1
2
(
1−
∞ ∑
n=0
Pncos(Ωn,nt/2)
)
, (2.54)
where Pn is the probability of finding the ion in motional level n. Equation 2.54 is used to extract 〈n〉 from the Rabi flops on the carrier. The higher the motional excitation the more motional levels are occupied leading to a larger spread in the effective Rabi frequencies Ωn,n. A similar method can be used to find 〈n〉 from a sideband Rabi oscillation, by using the formula
ρebsb = 1
2
(
1+
∞ ∑
n=0
Pncos(Ωn,n+1t/2)
)
. (2.55)
The advantage of using the sideband flops for estimating the motional temperature over the carrier flops is that the sideband coupling is sensitive to the temperature of that particular mode. We can thus distinguish the temperature in the individual modes.

 24 CHAPTER 2. THEORY
2.4.2 Doppler recooling method
An alternative method to measure the motional temperature of an ion is Doppler recooling. Unlike the previous methods Doppler recooling cannot be used to measure the steady state temperature of the ion. Instead, it is used to measure the motional energy of the ion when it is higher than its Doppler limit. Compared to the other methods this technique is relatively simple to implement and it does not required any ultra stable lasers.
This method takes advantage of the increased Doppler shift for an ion with an increase in its kinetic energy. When the motional energy of the ion is increased the Doppler shift of the laser light perceived by the ion changes, affecting it’s scattering rate, which in turn affects the fluorescence of the ion. This change in fluorescence depends on the saturation parameter and frequency detuning of the cooling laser.
If the frequency of the cooling laser is detuned by less than half the linewidth of the transition from the resonance, the increase in the kinetic energy results in a Doppler shift that on average makes the ion go off-resonant with the laser light. So the fluorescence of the ion decreases. When the Doppler-cooling laser beam is switched on the ion starts to cool down. This brings the ion more in resonance with the laser leading to an increase in the fluorescence until the temperature of the ion re-
aches the Doppler limit. If the cooling laser is red detuned far from the resonance (more than the transition linewidth), the increase in the motional energy results in a increase in the fluorescence. By monitoring the fluorescence as a function of time during Doppler cooling, we can determine the initial temperature of the ion. A detailed analysis of the change in fluorescence and the motional energy of the ion in the Doppler recooling process is presented in [42].
2.5 Wiring up trapped ions
To be able to use quantum computing to solve nontrivial problems, the quantum registers must be scaled up to accommodate large number of qubits. One strategy is to work with small and easy-to-control ion strings and then physically transport ions between different zones [43]. Other schemes transfer quantum information via optical cavities [44, 45] or use long distance entanglement [46, 47]. In this thesis we present a different mechanism of coupling ions in two separate traps by allowing the charg-
es they induce in the electrodes to affect each other’s motion [48, 49]. Related schemes have been proposed for coupling Rydberg atoms [50] and oscillating electrons [51]. In this section we present a theoretical analysis of this coupling mechanism.

 2.5. WIRING UP TRAPPED IONS 25
(a)
(b)
Figure 2.8: a) Schematic representation of the experimental setup used for the trapped-ion coupling experiment. A planar trap with several dc electrode segments provides multiple trapping regions on the same trap chip. An electrically isolated electrode is in proximity to ions in different trapping regions and couples their motional states. b) Schematic of a wire of radius a, length L, and total charge λL at height H and the ion at height y above the grounded plane. In this schematic the wire is a-
ligned perpendicular to the plane of the paper.
2.5.1 Coupling mechanism
The basic idea of this experiment is that the quantum information stored in the electronic degree of freedom of a single ion cooled to the motional ground state can be mapped onto the motional degree of freedom by driving the motional sideband of the electronic transition [6]. Thus the information is stored in superposition of the form α|0〉 + β|1〉, where |n〉 is the quantum number of the harmonic oscillator describing the ion motion. This oscillating motion yields a considerable dipole moment, of o-
rder 1.8×10-27 Cm for a 40Ca+ ion at a secular frequency of 1 MHz, which can be coupled to the motion of an ion in a different trap via their Coulomb interaction. For instance, starting with one ion in (|0〉 + |1〉)/
√
2 and the other ion in |0〉, we expect that after some time tex, the ions have exchanged states with an acquired phase. The main idea of these experiments is to enhance the coupling using a wire and thus provide a valuable means of interconnecting trapped ions. A sketch of the experimental setup is shown in Fig. 2.8a. A planar RF trap is

 26 CHAPTER 2. THEORY
used to confine two ions in two different potential wells above the trap surface. Each oscillating ion induce an image charge on the electrically floating wire mounted above the trap. This results in an oscillating potential on the wire which is transfered to the other ion. This in turn results in a Coulombic coupling of the ions. Here we study the dynamics of the coupled ions system using the Hamiltonian described in [48, 49]
Ion-wire interaction
We start this exercise with the derivation of the electrostatic coupling term under some simplified assumptions. A schematic of the experimental setup is shown in Fig. 2.8b. We consider a metal wire of radius a and length L, situated at height H above a (infinite) ground plane and oriented parallel to the plane. Two point charges, henceforth ions 1 and 2, are located at (x0,i, y0,i), i = 1, 2 and (y0,1, y0,2 < H) above the ground plane parallel to the plane passing through the center of the wire. -
The horizontal distance d, between the ions satisfies y0,1, y0,2, H d < L. The point charges are treated here as infinitesimally small conductors with variable, externally set charge. Consider the situation where the wire is at potential V and carries a charge per unit length λ, while the ’point charge’ conductors carry zero charge. Using Gauss law the voltage on the wire can be written as [26]
V= λ
2π 0
ln
( 2H − a a
)
, (2.56)
and the voltage at the ion positions is given by
φi = λ
4π 0
ln
( (x0,i + xi)2 + (H + y0,i + yi)2
(x0,i + xi)2 + (H − y0,i − yi)2
)
, i = 1, 2. (2.57)
Here xi, yi represents the displacement of the ion i from the equilibrium position. Green’s reciprocity theorem states that if the charge distributions ρ1 and ρ2 produce voltage configuration φ1 and φ2 respectively then [52]
∫
φ1ρ2dV =
∫
φ2ρ1dV (2.58)
In our setup we know one of the combinations. A convenient dual situation is the one in which both point charges carry the same charge, e, while the wire carries zero net charge and is at a potential V’. By applying Green’s reciprocity theorem we can write down the relation as follows
λLV′ = e(φ1 + φ2). (2.59)
By substituting equations 2.57 in the equation 2.59 we can write down the potential on the wire as

 2.5. WIRING UP TRAPPED IONS 27
V′ = e
4π 0L
(∑
i={1,2}
ln
( (x0,i + xi)2 + (H + y0,i + yi)2
(x0,i + xi)2 + (H − y0,i − yi)2
))
. (2.60)
Given the potential, the linear charge density on the wire can be calculated using the formula
λ′ = 2π 0
V′
α (2.61)
where α = ln((2H − a)/a). The potential energy of each of the ion can be written as
Ui = eV′
2α ln
( (x0,i + xi)2 + (H + y0,i + yi)2
(x0,i + xi)2 + (H − y0,i − yi)2
)
, i = 1, 2. (2.62)
The total potential energy of the system can be written as U = 1/2 (U1 + U2). The factor 1⁄2 is introduced to avoid double counting of the electrostatic energy, as described in [26, pg. 41]. For small oscillation the above potential energy can be expanded around the equilibrium position using a Taylor series
U(y1, y2) = U0 + ∑
i
( ∂U ∂yi
∣∣∣∣∣0
)
yi + 1
2
∑
i, j
( ∂2U
∂ yi ∂ y j
∣∣∣∣∣0
)
yi yj, i& j = 1, 2
≈1 2
∑
i, j
( ∂2U
∂ yi ∂ y j
∣∣∣∣∣0
)
yi yj = 1
2
∑
i, j
γyi yj.
(2.63)
The coupling constant of the vertical (y) mode that enters the Hamiltonian of the system is
γ = ∂2U
∂y1∂y2
. (2.64)
As stated above, each ion is confined in an independent harmonic trap. Thus the Hamiltonian for the coupled ion system in the presence of the floating wire consists of two harmonic oscillator terms corresponding to each ion plus the coupling term
H = P2
1
2m + 1
2 mω2
1 y2
1 + P2
2
2m + 1
2 mω2
2 y2
2 + γy1 y2. (2.65)
The time evolution of the above Hamiltonian has been studied for the resonant case (ω1 = ω2) exactly and also in the rotating wave approximation [53]. It was found that the rotating wave approximation is in almost complete agreement with the exact solution in the limit of small coupling constants (γ/mω2 < 0.1).

 28 CHAPTER 2. THEORY
Another solution in the rotating wave approximation showed that full exchange of motional states occurs only in the resonant case and for specific initial states [54]. Let us consider the case with one ion initially in a superposition of Fock states of the form (|0〉 + |n〉)/
√
2 and the second ion in the ground state. In this case, the inverse time for state exchange of the two ions is (see appendix A)
1
tex
=γ
πωm , (2.66)
where the geometry constant α was defined below equation 2.61. After time tex, the first ion is in the ground state and the second ion is in (|0〉 + e−inΘ|n〉)/
√
2, where Θ = π(mω2/γ + 1/2). In experiments aiming to transfer quantum information, the presence of the acquired phase Θ poses requirements similar to those for preserving the coherence of the motional state of a single ion. Another important case concerns coupling of coherent states in the resonant system. As shown in appendix A, we can verify that if the first ion starts out in a coherent state |μ〉, with complex amplitude μ, and the second ion in the ground state, then after time tex the first i-
on is in the ground state and the second ion is in a coherent state |μe−i2Θ〉, where Θ, defined above, describes the change of the coherent state’s complex amplitude. This effect will be present in the classical regime. It is due to the fact that each oscillator continues to oscillate while the state exchange is in process and thus acquires some phase. The presence of such a phase can most easily be observed by allowing the coupled ions to evolve for time 2tex, so that the first ion has returned to-
 a state |μe−i2Θ〉. An important aspect of the above result is the extraction of the dependence of the coupling rate on experimental parameters. The coupling rate increases with decreasing size of the experimental setup. In the practically interesting case where the ions are much closer to the wire than the trap (y0,1, y0,2 ≈ H) the length of the wire as well as the ion-wire distances enter mainly as 1/[L(H−y0,1)(H−y0,2)]. Fig. 2.9 shows the coupling rate (1/tex) between the ions as a function of t-
he distance of the wire from the trap (H). Dependence on the wire radius is only logarithmic, included in the geometric constant α. Physically, the increased coupling with smaller system sizes corresponds to the fact that for ions closer to the wire the induced charges are larger, and also that for shorter wires the induced charges are distributed over shorter distances. The scaling of tex with system size yields a decrease of tex by roughly an order of magnitude for a decrease of the trap size, i-
.e. H, y0,i , and wire length, L, by a factor of 2. Besides these geometrical considerations, we find an inverse dependence of the coupling rate on the ion secular frequencies, tex ∝ ω. This can be understood physically as the motional dipole moment corresponding to each ion (∝ 1/ω) increases with lower secular frequency. Typical parameters in the current setup are H = 170 μm, y0,i = 90 μm, L = 800 μm, a = 13 μm, ω = 2π · 2.5 MHz. With these values and for two 40Ca+ ions,

 2.5. WIRING UP TRAPPED IONS 29
150 200 250 300 350 400
0
5
10
15
20
25
Distance of the wire from the trap, H (μm)
Coupling rate, 1/tex (s-1)
Figure 2.9: Plot showing the rate of coupling as a function of the distance of the wire from the trap. This plot is calculated using equation 2.66, with the length of the wire L = 800 μm, ion position (x0,i, y0,i) = (30, 90) μm and the secular frequency ω = 2π · 2.5 MHz
one obtains tex ≈ 85 ms. However by reducing the secular frequency of the ion to ω = 2π · 500 kHz, the length of the wire to L = 800 μm and moving it to a distance of 50 μm from the ion, tex can be reduced by a factor of 15. We point out that the direct electrostatic interaction between the ions is smaller than the wire-mediated term by a factor of order (H − y0,1)(H − y0,2)/L2, which for these parameters is ∼3×10−5. Thus, the direct electrostatic interaction between the ions is negligible.
2.5.2 Sources of decoherence
While the theoretical analysis shows that there are no known fundamental obstacles [55], it might be surprising that the quantum information can survive the transfer through the wire. In this subsection we discuss some of the sources of decoherence that contribute to the loss of the quantum information.
One source of decoherence is the dissipation of the induced current inside the wire. Using equation 2.61, the current induced by a single ion with a low motional quantum number will be of order

 30 CHAPTER 2. THEORY
I = eβ  ̇y
H ∼ eβ
√
ħω/m
H . (2.67)
where β = 2H2/α(H2 − (y0,i + yi)2) is the geometry parameter. For the parameters mentioned above, this current amounts to approximately 0.1 fA, so we expect that it takes approximately 2 × 105 s to dissipate one motional quantum on a wire resistance of 0.6 Ω, in the form of heat. Considering the inverse process by which the ion picks up motional quanta from Johnson noise in the wire the heating power P is given by
Pnoise = kT∆ν, (2.68)
where kT is the thermal energy and ∆ν is the frequency bandwidth in which the ion accepts the power. The time τ in which one motional quantum of energy Eq = hν is generated is given by
τ−1 = Pnoise
Eq
= kT∆ν
hν , (2.69)
For the values used above, the expected heating time from Johnson noise is τ ≈ 0.1 s/quantum at room temperature, which is of the same order of the exchange time, tex. However, with the coupling rates that are feasible the Johnson noise is not expected to prevent the coherent transfer of quantum information. Ion-trap experiments usually report heating rates higher than what would be expected from Johnson noise [30, 56]. Experiments hint that coating the electrode surface with contaminants has a st-
rong influence on the observed heating [30, 56, 19]. Recent experiments have shown that the fluctuations can be suppressed many orders of magnitude by cleaning the trap electrodes [57]. Furthermore, it has been observed that cooling the trap electrodes to cryogenic temperatures (∼ 4 K) significantly reduces the heating rate of the trap. Indeed, heating rates as small as a few motional quanta per second have been observed for ions trapped as close as 75 μm to the nearest electrode of a planar trap -
at these temperatures [58, 59]. Finally, we consider the effects of a leakage current from the coupling wire to ground. The insulating material supporting the electrically floating wire has a very high but finite resistance of the order of R ∼ 1015 Ω. In addition to this resistance the coupling wire is capacitively coupled to the ground with capacitance of the order C ∼ 10 fF. We estimate that the RC time constant of this assembly is more than 100 s, which is larger than the motional coupling time-
scale, tex.

 Chapter 3
Experimental setup
This chapter presents a detailed description of the experimental setup which was used to carry out the experiments discussed in this thesis. This chapter is divided into three sections. The first section describes the hardware requirements for the ion trap experiments. In the second section, we describe the RF and static voltages for trapping and the final section describes the software control and the pulse sequencer used to run the experiments.
3.1 General Infrastructure
We start this section with the description of the different surface traps we used in our experiments. In the next subsection we talk about the laser systems and the alignment of the various laser beams on the trap. In the last part of this section we discuss our vacuum chamber and the wire assembly used for the coupling experiments.
3.1.1 Surface traps
The experiments described in this thesis are carried out predominantly using two traps named Trap-GG and Trap-A. The letters GG and A in the trap names are not abbreviations and are chosen to identify the particular trap in a batch of about 25 traps on the chip. Both of these are planar traps with asymmetric (2:1) RF electrodes. These traps are designed and built by Nikos Daniilidis, a post-doctoral researcher in our lab. The design and the operation of these traps are discussed in separate sectio-
ns below. The asymmetric RF design was chosen with the assumption that a tilt in the RF quadrupole will improve Doppler cooling by rotating the motional modes such that neither of them is orthogonal to the trap surface. However, a better
31

 32 CHAPTER 3. EXPERIMENTAL SETUP
understanding revealed that the pseudopotential resulting from a linear electrode configuration is always rotationally symmetric and hence cannot break the symmetry required to rotate the motional modes. Instead, one can use the DC potentials to control the orientation of the motional modes [60].
Trap GG
A detailed description of design and fabrication of Trap-GG is published in Ref. [61] and a schematic of the trap including important dimensions is shown in Fig. 3.1a. This trap consist of 21 independently controlled DC electrodes. The center DC electrode is about 5 mm long, 250 μm wide and is surrounded by the asymmetric RF electrode structure. Ten equal sized DC electrodes are located on each side of the RF electrode structure. These electrodes are 1 mm long and 400 μm wide. The width of the nar-
row and wide RF electrode are 200 μm and 400 μm respectively and both electrodes are about 5.5 mm long. All the electrodes are separated by 10 μm gap from each other and the ground plane surrounding the electrodes. The ions are trapped 200 μm from the surface of the trap and are displaced 15 μm from the middle of the center electrode, towards the narrow RF electrode.
Trap-GG is built by electroplating a 5 μm thick layer of gold on a 500 μm thick sapphire substrate. The trap is glued on a custom made stainless steel mount that covers most of the exposed ceramic region on the CPGA to prevent the accumulation of stray charges. The mount contains an elevated section towards the calcium oven to protect the trap from getting contaminated by the calcium. Quartz slides are glued below the trap to adjust the height of the trap surface with respect to the mount. The mou-
nt is grounded to the vacuum chamber using a 100 nF ceramic capacitor to reduce electrical noise at frequencies of the order of 1 MHz. A picture of the Trap-GG installed on the homemade mounted and wire bonded to the CPGA pads is shown in Fig. 3.1b.
A 100 pin ceramic pin grid array (CPGA)1 is used to mount the trap in the chamber. The CPGA is plugged in to the pin receptacles2 sandwiched between two holders made of UHV compatible plastic3. The electrical connection between the pads of the CPGA and the DC electrodes of the trap are made using a 25 μm gold wire-bonding wire. The wire-bonding section of each electrode is located about 1.5 mm from the actual electrode as shown in Fig. 3.1a. These so-called bonding pad is connected to the electrod-
e through a 50 μm wide strip. This configuration is chosen for better optical access and easy wire bonding of the DC electrodes.
1Kyocera, KD-P85989-A 2Mill-Max, 0672-3-15-15-30-27-10-0 3Dupont, Vespel SP-1

 3.1. GENERAL INFRASTRUCTURE 33
(a)
(b)
Figure 3.1: (a) The drawing showing the details of the electrode structure of TrapGG. Dimensions of the important trap features are included in the drawing. (b) The picture of Trap-GG mounted on a custom made mount fitted on a ceramic pin grid array (CPGA). The wire bond wire used for the electrical connection of the trap can be seen on the edges of the trap. Quartz slides used to adjust the height of the trap surface with respect to the surface of the mount can be seen below the substrate of the -
trap. In this setup the center electrode is grounded, but it can also be used as an additional electrode.

 34 CHAPTER 3. EXPERIMENTAL SETUP
(a)
(b) (c)
Figure 3.2: a) The drawing showing the details of the electrode structure of TrapA. The length of the RF electrode is increased to minimize it’s influence along the axial direction. b) Schematic describing the process of angle evaporation used in fabrication of Trap-A. The substrate is coated with 100 nm of gold at an angle of 45◦ so that the walls of the electrodes are partially covered with gold. c) A picture of the Trap A glued to a CLCC.
DC and the RF voltage break down tests were carried out to determine the maximum voltage that can be applied to this trap. The test was carried out on similar trap produced in the same batch as the one used in the experiments. For the DC voltage the break down occurred at about 500 V. With the RF drive voltage at 10 MHz, we could go as high as 750 V amplitude, before it broke. A typical RF voltage used for this trap has an amplitude of 150 V and a frequency of about 15 MHz. The DC voltages used ar-
e in the range of ±40 V.

 3.1. GENERAL INFRASTRUCTURE 35
Trap A
The second trap we used in our work is named Trap-A. This trap consist of 11 DC electrodes located on either sides of the RF electrodes and a center electrode located in between the two RF electrodes. The length of each of these 11 DC electrodes is 200 μm and their combined width is 2.3 mm. The width of the narrow and wide RF electrode is 100 μm and 200 μm respectively. Unlike the earlier trap the length of the RF electrode is increased to about 4 times the combined width of the 11 DC electrodes o-
n either sides. This is done to reduce micromotion along the axis of the trap when the ion is moved away from the trap center in the axial direction. The width of the bonding pads is increased as well for easy wire bonding and moved away from the trap center to ease optical access. All the electrodes are separated by 5 μm gap from each other and the ground plane surrounding the electrodes. The ions are trapped 100 μm from the surface of the trap and are displaced 15 μm from the middle of the cente-
r electrode, towards the narrow RF electrode. A schematic of the trap including important dimensions is shown in Fig. 3.2a.
The Trap-A is fabricated by evaporating gold on quartz. 25 μm deep and 5 μm wide trenches are made on the substrate that served as gaps between the electrodes. The substrate is coated with 200 nm gold using double angle evaporation method so that the walls of the electrodes in the gaps are coated with gold to prevent the accumulation of the stray charges. Schematic describing the angle evaporation is showing in Fig. 3.2b. The trap is glued to the ceramic lead-less chip carrier (CLCC) using UHV-com-
patible epoxy4 and mounted on a custom made CLCC holder made of alumina. Since the size of the is bigger than the center cavity of the CLCC the trap is elevated using quartz slides to clear the bonding pads on the CLCC. A picture of the trap glued to the CLCC, before any of the wire bonds are made, is shown in Fig. 3.2c.
After the trap is installed in the chamber all the DC and RF electrodes are checked for the connectivity from the feedthrough by touching the trap electrodes with a gold wirebonding wire connected to the test leads of the multimeter. Typical amplitudes of the RF drive voltage are about 150 V at a frequency of about 35 MHz. The DC voltages used are in the range of ±20 V.
3.1.2 Optics and laser system
In this section we describe the optics and laser setup used for the photoionisation, cooling, state control and the detection of the trapped ions. All laser systems discussed in this thesis are installed in a separate room and the laser light is transfered to the experimental setup using independent 22 m long optical fibers. All laser beam out-couplers except for the 729 nm laser are mounted on two
4Epotek, 353-ND

 36 CHAPTER 3. EXPERIMENTAL SETUP
Figure 3.3: The schematic depicting the laser and the Ca oven alignment with respect to the trap. The laser beams at 866 nm and 375 nm are counter propagating along the axis of the trap. The Ca oven is aligned 45◦ to the axis of the trap. The 422 nm laser beam is combined with the 397 nm laser beam and aligned perpendicular to the oven beam. The 729 nm laser beam is counter propagating to the 422 nm laser beam
motorized translation stages, which can be positioned with a 1 μm precision and are controlled using a computer for the fine alignment of the beams. The out-coupler of the 729 nm laser is mounted on a manual translation stage which can be moved in the direction perpendicular to the trap surface. The schematic describing the alignment of the laser beams with respect to the trap is shown in Fig. 3.3
Photoionisation
The ion species used in our experiment is Calcium 40 (40Ca+ ), which is produced by photoionizing neutral Calcium atoms. A resistively heated calcium oven containing 99.99% pure Ca is used to produce the neutral calcium vapor. A 5 cm long stainless steel tube sealed at one end, with an inner diameter of 1 mm and a wall thickness of about 100 μm serves as the calcium oven. To produce a collimated beam of neutral calcium the tube is filled with Ca up to half the length of the tube and the open end o-
f the tube is directed towards the trapping region. The tube is heated by passing a current until the tube starts spraying

 3.1. GENERAL INFRASTRUCTURE 37
Ca atoms. When the Ca oven is heated for the first time after installing in the vacuum chamber, the current of the oven should be increased in small steps in order to avoid the sudden rise in the pressure and sputter of molten calcium and other impurities from the oven. This helps in keeping the trap clean.
The Ca atoms are photoionised using a two-step photoionisation process with the laser light at 422 nm (41S0 to 41P1) and 375 nm (41P1 to continuum). As a 422 nm laser we use a Toptica DL Pro diode laser system at 844 nm, and frequency double it by second harmonic generation using a Beta Barium Borate (BBO) crystal inside a ring cavity setup. To produce the laser light at 375 nm, we use a free running diode laser from Nichia. To make the frequency of the 422 nm laser beam resonant with the atomic t-
ransition, part of the laser light is coupled into a wavelength meter5 and tuned close to the desired frequency. Fine tuning is done by sweeping the frequency of the laser and detecting the neutral atom fluorescence using a photo multiplier tube (PMT)6. In our setup the intensity of the 422 nm laser beam is about 60 μW and the 375 nm beam is about 300 μW with a waist of about 50 μm for both the beams. The 422 nm beam is aligned perpendicular to the Ca oven to minimize the Doppler broadening. The 3-
75 nm beam is aligned such that it overlaps with the 422 nm beam only at the trapping region. This kind of alignment is chosen to reduce the generation of photo-electrons by preventing photoionization of the calcium atoms where it is not required. A schematic of the alignment of all the lasers on the trap is shown in Fig. 3.3.
Cooling and detection lasers
Doppler cooling and detection of the trapped ions is carried out on S1/2 ↔ P1/2 transition, with laser light at 397 nm. We use a Toptica DL-100 system to produce this light. The frequency of this laser is stabilized to a line width of about 100 kHz by locking it to an external cavity using the Pound Drever Hall (PDH) method. For a coarse tuning of the frequency, the length of the cavity is changed by applying a voltage to the pizo transducer attached to one of the mirrors of the cavity. The beam i-
s sent through an acousto-optic modulator (AOM) in a double-pass configuration for the fine tuning of the frequency and switching of the laser beam. The AOM has a central frequency around 220 MHz and the bandwidth of the double-pass setup is 40 MHz. The first order beam after the double-pass is coupled to the same optical fiber carrying the 422 nm beam using a polarizing beam cube and focused on to the trap using a 60 mm focal length collimator 7. The waist of the 397 nm beam is about 10 μm and we-
 reach saturation at about 1 μW of laser power.
5HighFinesse WS-7 6ET enterprises, electron tube 9111B 7Scha ̈fter+Kirchhoff collimator 60FC-4-M60-33

 38 CHAPTER 3. EXPERIMENTAL SETUP
(a)
(b)
Figure 3.4: Schematic showing the two double-pass assemblies we use to switch laser lights and change their frequencies (a) Top and side view of the blue doublepass assembly. (b) Top view of the red double-pass assembly. The side view is not included because the laser beam propagates in the same plane.
The efficiency of the AOM used for switching and fine tuning the 397 nm laser is polarization sensitive. Thus we could not use the standard double-pass configuration relying on rotation of the polarization. Instead, we use a more complicated setup for the double-pass using a prism. The schematic of this setup is shown in Fig. 3.4a
A laser beam at 866 nm is used to repump the ion from the D3/2 to the P1/2 level. Like the 397 nm beam, the 866 nm laser beam is also produced using a Toptical DL-100 system and is also locked to a similar cavity. Switching and frequency tuning of this laser is carried out using an AOM in doublepass configuration. The AOM anti-reflection (AR) coated at this wavelength is not polarization sensitive and we used the AOM in the standard double-pass configuration as shown in Fig. 3.4b. The center frequ-
ency of the AOM is 80 MHz and the bandwidth of the double-pass setup is about 30 MHz. The 866 nm beam has a waist of about 100 μm with a power of about 150 μW and is aligned along

 3.1. GENERAL INFRASTRUCTURE 39
the axis of the trap.
State detection and control
The ground state S1/2 and the metastable excited state D5/2 states constitute the internal qubit state of the ion, as described in Sec. 2.3.1. A laser beam at 729 nm coherently drives the S1/2 - D5/2 transition . This laser light is produced using a tapered amplifier (TA) amplified diode laser system. A DL Pro diode laser system from Toptica, produces seed laser light of about 50 mW at 729 nm. This light is amplified to about 300 mW using a home made TA system. The frequency of this laser is stabi-
lized to about 100 Hz by locking it to an ultra-high finesse cavity using proportional-integral-derivative (PID) and fast phase locking8 methods of stabilization. An AOM in double-pass assembly is used to control its amplitude and frequency of the laser light. The beam is then focused on to the ions using a 60 mm focal length collimator from Scha ̈fter + Kirchhoff. The waist of the beam is about 10 μm with a power of up to 7 mW at the trapping region. The beam is aligned at a 45 ◦ to both x and z -
axes of the trap, as shown in Fig.3.3. The life time of the excited, metastable D5/2 state is about 1.1 s [62]. A quenching laser at 854 nm is used to speed up the spontaneous decay of the ion to the ground state via the P3/2 state. This light is produced and frequency stabilized similar to that of the 866 nm laser and is coupled into the same optical fiber carrying 866 nm light. The waist and power of the 854 nm laser beam is similar to that of the 866 nm laser beam at the trapping region.
Detection and imaging
The fluorescence emitted by the ions is collected and focused on to the photomultiplier tube (PMT) using a custom made objective9 with a focal length of 67 mm and NA of 0.28. A 90:10 beam splitter in front of the PMT splits off 10% of the light for imaging the ions on a CCD camera10. Both devices are fitted with narrow band pass filters11 to select for 397 nm light.
3.1.3 Vacuum chamber assembly
The ion trap experiments are carried out in an ultra-high vacuum (UHV) chamber at a pressures below 10−11 mbar to prevent the collision of ions with background gas molecules. An isometric view of our UHV chamber assembly is shown in Fig. 3.5. The vacuum chamber is a 6” stainless steel spherical octagon from Kimball Physics, which has eight equally spaced horizontal ports and two 6”
8Toptica FALC 110 module 9Silloptics, Germany 10Andor, iXon DV885 JCS-VP 11Semrock FF01-377/50-25 and FF01-417/60-25

 40 CHAPTER 3. EXPERIMENTAL SETUP
Figure 3.5: Schematic of our vacuum chamber assembly. The Ca oven that is missing in this picture is connected to the feedthrough opposite to the RF feedthrough, via a flexible bellow for alignment of the oven. In future setups the ion-pump will have to be moved to the position of the angle valve in an attempt to reduce the current high values of stray magnet fields on the order of 20 G.
vertical ports. The top 6” port is used for imaging. Four of the horizontal ports are fitted with viewports for optical access. Two horizontal ports are fitted with 8 pin high power feedthroughs for oven and RF voltage supply. One horizontal port is fitted with a twin 25 pin D-sub connector for DC voltage supply. The one remaining horizontal port is fitted with a six way cross, which attaches the vacuum chamber to the ion pump12, ion gauge, angle valve and a 12 pin electrical feedthrough to supply-
 the voltage for piezo actuators holding the wire. A titanium sublimation (Ti-Sub) pump13 is attached to the bottom 6” port using a zero length reducer and a three way cross.
To achieve the ultra-high vacuum, the vacuum chamber assembly should be thoroughly checked for leaks. Once the chamber is free of leaks it is baked at 150 ◦ C while pumping with the turbomolecular pump until the pressure inside the chamber drops well below 10−7 mbar. After the bake the ion gauge and the ion pump are switched on. The Ti-Sub pump is heated by passing 50 A of current through one of the filaments for one minute. This is done 4 to 5 times with an interval of half an hour between each r-
un. The angle valve is closed and the turbomolecular pump is disconnected from the angle valve. Now the pressure inside the chamber should be below 10−10 mbar. The Ti-Sub pump should be switched on 2-3 times every day till the pressure stops going down.
12Varian, StarCell 20L/s 13Varian, 9160050

 3.1. GENERAL INFRASTRUCTURE 41
Figure 3.6: Schematic showing the first wire assembly. The earlier version of the wire holder is made using Macor (a machinable glass ceramic), but was replaced by a stainless steel holder fearing the build up of stray charges on the insulator. The wire used for the experiments was a 25 μm gold wire bonding wire connected between the two prongs of the frame. This frame was mounted on a stack of PZT stages to control its alignment in the experiment.
3.1.4 Coupling wire assembly
To carry out the experiment of wire mediated coupling of two ions, described in Sec. 2.5, we need a metallic wire which has a very low resistance and is electrically well insulated from the surroundings. We should be able to control the position of the wire during the experiment to avoid contamination of the wire during loading. It is important that the natural vibrational frequency of the wire is not close to any of the secular frequencies of the ion to prevent motional heating of the ion. In thi-
s section, we describe the two wire assemblies we used to study the ion wire interaction.
Single wire assembly
The first version of the wire assembly consists of a 1 cm long, 25 μm thick gold wire-bond wire held using a frame made of a machinable glass ceramic material called Macor14. A schematic of this assembly is shown in Fig. 3.6. In this setup the ceramic portion was completely exposed and was getting electrically charged, which resulted in the instability of the trapped ion. To overcome this problem, the second version of the wire holder was manufactured using stainless steel instead of Macor, with a-
 small ceramic tip to keep the wire insulated from the frame.
14Corning Inc.

 42 CHAPTER 3. EXPERIMENTAL SETUP
(a) (b)
(c)
Figure 3.7: (a) Schematic depicting the evaporation setup of the three wire assembly. When this structure is evaporated on both sides with gold, the stainless steel rods cast a shadow on the glass fibers, creating a insulating region during evaporation. The wire used for the experiments is the electrically floating portion in between the two insulating regions. (b) The final assembly with three floating wires just before it is mounted on the PZT stacks. (c) The complete assembly. along the trap, m-
ounted inside the vacuum chamber.
The wire holder is mounted on a stack of 4 piezo driven nano-positioning stages from Attocube. The bottom two linear translation stages are used to position the wire in the vertical (y) and horizontal (x) directions. The top two are rotational stages which are used to make the wire parallel to the trap surface and to move the wire away from above the trap. These stages use a stickslip method [63] to achieve the displacement. Independent sawtooth voltages to operate the stages are supplied from a c-
ontrol unit through a 9 pin D-Sub connector. The holder is electrically insulated from the base of the stages, which allows us to apply a voltage on the wire assembly. The length of the piezo stack is about 10 cm, to match the height of the trap with the wire, an extender is connected to the bottom 6” port, of the octagon chamber.
Multiple wire assembly
The newer version of the wire assembly consist of three wires. The coupling wires in this assembly are gold coated, 25 μm thick glass fibers. To produce the

 3.2. VOLTAGE SOURCE 43
wires, the three glass fibers are glued to a stainless steel square frame about 1 cm wide and 1 mm thick using UHV epoxy (cf. Fig. 3.7b). Two pairs of 75 μm thick rods separated by 800 μm, are placed on either sides of the wire to shadow the gold coating, as shown in Fig. 3.7a. The frame along with the wires is evaporated with gold to a thickness of 100 nm. The shadow rods are removed and the frame is left with 3 electrically floating wires, each 800 μm long, held in place by gold coated fibers on-
 both sides. One side of the frame holding the wires is made to be electrically insulated from the other side for measuring the continuity of the wires. This yields useful information on whether the center wire might be electrically connected to the frame.
The wire frame is mounted on the same set of piezo stacks described in Sec. 3.1.4. A picture of the wire frame mounted in the vacuum chamber, along with the surface trap is shown in Fig. 3.7c. Even though the evaporation method results in a wire with a 12-fold increased resistance as compared to a solid gold wire of the same diameter, this method was preferred because it allowed us to make the wire as short as 800 μm without compromising optical access.
3.1.5 Magnetic field coils
In an ion trap setup, magnetic field coils are essential for compensating stray magnetic fields and to define a quantization axis for the experiment. In our setup we found that we have a large stray magnetic field of the order 20 Gauss along the x direction of the trap. To compensate for the magnetic field along the direction of the 729 nm laser beam, we use a 1200 turn coil with a radius of 10 cm. A current of about 1 A is passed through this coil. For the direction perpendicular to the 729 nm la-
ser beam, which is also our direction of quantization, we use 2 coils on each side of the vacuum chamber. One coil has 400 turns and a radius of 3 cm and the other one has 200 turns and a 15 cm radius. A current of about 3 A is passed through these coils, which produces a magnetic field of about 10 Gauss to cancel the stray magnetic field. The combination results in quantization magnetic field of about 3.5 Gauss. A schematic of the magnetic field coil setup is shown in Fig.3.8.
3.2 Voltage source
This section describes the generation of RF and DC voltages required for trapping of ions as well as the stable current supply required to produce the quantization magnetic field.

 44 CHAPTER 3. EXPERIMENTAL SETUP
Figure 3.8: Schematic showing the alignment of the magnetic field coils with respect to the laser beams and the vacuum chamber. Because of the constraints in the space around the vacuum chamber two coils are used for partial cancellation of the magnetic field along the axis of quantization, while one big coil is used in the direction perpendicular to it. Since the stray magnetic field in the third direction is negligible, no coil is used in this direction.
3.2.1 RF Voltage
A 35 MHz radio frequency (RF) voltage with an amplitude up to 200 V is used as a drive for trapping ions. A Rohde & Schwarz SMB100A frequency generator produces the RF signal, which is amplified using a Minicircuits ZHL-1-5W amplifier. This RF voltage is stepped up using a helical resonator [64] and connected to the RF feedthrough of the vacuum chamber. A helical resonator is a quarter wave resonator that converts the RF power to a high voltage low-current signal. It is an LC circuit consisting of-
 a helical coil placed inside a conducting cylindrical can. The resonance frequency of the resonator can be changed by changing the geometry and number of turns of the coil. The RF signal is coupled in to the resonator using a small antenna coil placed inside the helical coil [65]. The incoupling is tuned by changing the position of the antenna coil while monitoring the reflected signal. Good in-coupling is achieved when the reflected power is less than 2 orders of magnitude of the input power. Th-
e inductive coupling into the helical resonator is chosen to keep the helical resonator electrically isolated from the RF amplifier and source. The helical resonator couples to other metallic

 3.3. EXPERIMENTAL CONTROL 45
objects nearby, such as chairs. This resulted in amplitude fluctuations in RF drive when those objects are moved. To prevent this, the resonator along with the amplifier is placed inside a 2 mm thick aluminum can which is grounded to the optical table.
A rough calibration of the output voltage of the helical resonator to the input power is done in the beginning, using a capacitive divider. For dayto-day operations the resonance of the helical resonator is monitored using a directional coupler by connecting the output end of the directional coupler to the RF amplifier and the input end to the helical resonator. The best estimate of the voltage applied is obtained by measuring the radial secular frequency of ions.
3.2.2 DC Voltage
Stable, tunable, ultra low noise static voltages are applied to all the DC electrodes for trapping and control of the ion. To achieve this we built a 24 channel digital analog converter (DAC) board, controlled by a field-programmable gate array (FPGA). Each DAC channel has a range of ±10 V with a resolution of 32 bit. The output of the DACs are amplified using a OP-AMP amplification circuit to achieve a range of ±40 V. The amplified voltages are calibrated for each channel for the whole range and -
the corrected voltages are used for the experiments.
3.3 Experimental control
Efficient running of the experiment requires us to simultaneously switch and vary multiple parameters with a high degree of accuracy. To achieve this we use automated scripts running on computers to control various hardware components and data acquisition. The earlier version of our experimental control was based on LabView, supported by a python back-end. This was effective for the experiment in the initial stages, but as the complexity of the experiment increased the core structure of the progra-
m became very complex and resulted in frequent failures. The intricate nature of the program also made it very hard to modify or troubleshoot the process.
These complications forced us to switch to LabRAD to control our experiments. LabRAD is an open source protocol, developed by the Martinis group at University of California, Santa Barbara (UCSB). Using LabRAD, the experimental control can be written as collection of codes, called servers to control individual hardware components. This decentralized nature of LabRAD makes is possible to run the servers in multiple machines connected using Transmission Control Protocol (TCP), allowing for a high mod-
ularity. The modular nature of this software also makes trouble shooting relatively easy.

 46 CHAPTER 3. EXPERIMENTAL SETUP
The software control for our experiment is located in three independent computers, which are connected using ethernet and communicate via TCP. The schematic of the various hardware components used in our experiment and their connection to the control software is shown in Fig. 3.9. The Graphic User Interface(GUI) for our experimental control is located in the main computer which communicates with the most important hardware used in our experiments such as the pulse sequence generator. A detailed de-
scription of the experimental control based on LabRAD is given in Michael Ramm’s thesis [66]. The pulse sequence generator, or in short Pulser, is a field-programmable gate array (FPGA) based hardware that generates the TTL pulses required to trigger the hardware components. It also controls the frequency, amplitude and phase of various Direct Digital Synthesizers (DDS) used to control the laser fields. Apart from producing pulse sequences the pulser can also be used for the acquisition of digital-
 signals, which we use to read our PMT signal. The Pulser can also be used to control the DAC for the generation of DC voltages required for the trapping. However, we use a second scaled down version of the Pulser for the DC voltages in order to free up some channels in our main pulser. The Pulser communicates with the computer via TCP. A detailed description of this hardware give in Thaned Pruttivarasin’s thesis [67]. Most experiments sensitive to magnetic field noise can be improved by synchroni-
zing them to the frequency of the alternating current (AC) line. To accomplish this, the line signal is stepped down and converted to a square pulse and fed into the pulser. This square pulse is used as a trigger for all the experiments. The main experimental computer also controls two frequency generators, which are connected through a serial port. These signal generators are used to produce the drive frequency for the trap and excitation frequency for the micromotion compensation described in th-
e chapter 4. The second computer in our setup is mainly used for the camera acquisition. This is important for the alignment of the laser beams on the trap and to find the distance of the wire from the ion. This computer also controls the motorized translation stages used to change the position of the laser beams and the piezo stages supporting the wire. The server controlling the piezo communicates with the main computer through the TCP connection as shown in Fig. 3.9. The third computer we use i-
s situated in the laser room and is shared by all the experiments in our lab. This computer monitors the frequency of the lasers by sequentially switching the laser beams going into the wavemeter using a multiplexer. This computer is also used to change the frequency of the laser light by changing the voltage of the piezos connected to the locking-cavity mirrors.

 3.3. EXPERIMENTAL CONTROL 47
Figure 3.9: Schematic showing various components of the experimental control distributed over three computers.The DAC control that supplies the voltages to the DC electrodes, The Rohde and Schwarz frequency generator that produces the radio frequency for the trap drive and the pulsar unit that generates the pulse sequence of the experiment are connected to the main computer. The camera used to monitor the ion is connected to the camera computer. This computer is also used to control the motorized -
translation stages that move the laser beams and the PZT stages that move the wire. A third computer in the laser room control the DACs that supply the DC voltages for tuning the external cavities used for locking the laser frequencies. This computer is also connected to the wavemeter that monitors the frequencies of the laser.

 

 Chapter 4
Stray electric field sensing and
compensation
For a reliable operation of segmented ion traps a complete control over the electrostatic environment in the trapping region is necessary. To achieve this an accurate model of the potential created by the trap electrodes is required. But the stray electric field created by unaccounted charges resting on the insulating regions around the trap cannot be included these simulations. These stray fields cause the ion to displace from the RF null, resulting in a so-called micromotion [68]. In this chapte-
r we discuss how to measure and minimize this micromotion. We also describe how compensation of the micromotion at various positions on the axis of the trap can be used to map the electric field along the axis. We conclude this chapter by discussing various possible sources for the observed stray charges.
4.1 Micromotion in ion traps
In an ideal Paul trap ions are confined to the position where the electric field due to the oscillating RF drive is zero. But in a typical ion trap any additional electric field pushes the ion from the center of the RF quadrupole away. Thus the ion experiences an oscillating force from the RF-drive causing so-called micromotion. Unwanted effects of micromotion include spectral broadening of the atomic transitions via the Doppler effect and heating of the ion motion due to noise present in the RF d-
rive [19]. To avoid those effects, it is important to place the ion close to the RF-node.
Different techniques exist for detecting micromotion [68]. The photon correlation method relies on correlating the ion fluorescence to the phase of the RF
49

 50 CHAPTER 4. STRAY ELECTRIC FIELD SENSING AND COMPENSATION
Figure 4.1: Schematic showing the side view of the alignment of the laser beam on the trap. The laser beam does not have a projection on the ion oscillation along the y direction unless the laser beam is made to bounce off the surface of the trap, which can result in high stray light and the charing of the trap.
field [69]. In the resolved sideband method [70] the sidebands of a narrow atomic transition are compared with the carrier transition to estimate the modulation index. Both methods are widely used to detect micromotion in 3D traps. However, neither of the methods can be easily extended to surface Paul traps because they directly use the Doppler shift induced by the ion motion. This requires the laser beam to have a projection on all three directions of the ion motion. In the case of surface traps,-
 the geometry typically limits the laser alignment to be in the plane parallel to the trap surface (see Fig. 4.1). For such laser alignments, the Doppler effect due to motion perpendicular to the trap surface vanishes making it very difficult to detect such micromotion.
4.1.1 Principle of compensation
In this section we present a method of micromotion compensation that does not depend on the detection of the micromotion using the directly associated Doppler shift. Instead, we test if the voltage applied to the RF electrodes effect the ion.
If the ion is displaced from the center of the RF quadrupole, any voltage applied on the RF electrode applies a force on the ion. If that force has a projection along a secular motion and if it has a frequency component that is resonant with one of the secular frequencies of the ion, the ion motion is excited resonantly [71, 72]. Experimentally, we found that the resulting large oscillation amplitudes of each of the three secular motions can be detected very efficiently as a drop in ion fluorescen-
ce. The dynamics of ion fluorescence as a function of its vibrational energy in the presence of the cooling laser is described in Ref. [42]. Micromotion compensation is achieved by moving the ion until it does not get excited when the external drive frequency is resonant with any of the ion’s secular frequencies. The DC electrode voltages are tuned to move the ion in all the three directions.

 4.1. MICROMOTION IN ION TRAPS 51
The results of this experiment are discussed in the following subsections and are published in Ref. [25]. This method is also being used by the NIST [73] and Osaska [72] ion trap groups.
4.1.2 Implementation
First a coarse compensation of micromotion is achieved by changing the RF drive voltage and monitoring the ion displacement. When the RF drive voltage is increased the radial confinement of the ion gets stronger and the ion moves towards the RF null. The electrode voltages should be adjusted such that the ion stops moving when the RF drive voltage is varied. The displacement of the ion in the x direction is detected using the camera (see Fig. 4.1). In the y direction the displacement can be detect-
ed by monitoring the change in the fluorescence level when the ion moves in and out of the laser beam. To achieve the maximum sensitivity, the laser beam is moved in the y direction such that the intensity is half the maximum, to increase the laser intensity gradient. The ion is placed within 1 μm from the RF null using this method.
The micromotion in the x direction is further reduced by monitoring the linewidth of the S1/2 ↔ P1/2 transition of the ion. If the ion is experiencing micromotion, sidebands at the drive frequencies appear on either sides of the atomic transition. This can be used for the detection of the micromotion. To minimize the micromotion, the intensity of the laser is kept at half the saturation of the transition. The laser frequency is red detuned so that the fluorescence drops to one-third of the saturat-
ion value. The electrode voltages are adjusted to move the ion and reduce the fluorescence of the ion. This is repeated until the line width cannot be reduced any further.
After a coarse compensation of micromotion is achieved using the above methods, we proceed with the method of compensation as outlined in Sec. 4.1.1. The schematic of the experimental setup is shown in Fig. 4.2. The bandwidth of the helical resonator used to generate the high voltage for the RF-drive does not allow us to excite the ion at the frequency ωi, so instead of exciting the secular frequency ωi directly, we excite the ion at a frequency ΩRF ± ωi. The RF signal required to excite the ion i-
s supplied by a Rohde & Schwarz frequency generator. This signal is mixed with the RF drive ΩRF before it is amplified and stepped up using the helical resonator as explained in Sec. 3.2.1. This produces sidebands at ΩRF ± ωi on the drive RF voltage. When ωi is scanned around the secular frequencies of the ion, the side bands on the drive voltage become resonant with the micromotion sideband of the ion and the ion gets excited, resulting in a reduction in the ion fluorescence [71, 74]. One of the -
important requirements of this method is that the helical resonator has a large enough bandwidth to apply the secular sidebands of the RF drive. The resonator used in our setup has bandwidth of about 270 kHz and allows compensation at secular frequencies of

 52 CHAPTER 4. STRAY ELECTRIC FIELD SENSING AND COMPENSATION
Figure 4.2: Schematic showing the electrical connections for the implementation of micromotion compensation using the excitation method. The RF signal at the micromotion sideband frequency is mixed with the RF drive for trapping and amplified before connecting it to the step-up resonator. The ion displaced from the RF null gets excited in the direction of the motional mode corresponding to the sideband frequency applied.
2 MHz.
The GPIB cable used to connect the excitation frequency source to the computer has a response time of few 100 ms. Continuous excitation of the ion for such duration at the frequency resonant with the secular sideband of the micromotion of the ion often results in the loss of ion. We overcame this problem by switching on and off the excitation signal by sending it through a switch controlled using a square wave generator at a frequency of 1 kHz. The frequencies of the detection and repump lasers ar-
e kept close to their respective transitions of the ion, to maximize the sensitivity [71]. For the experiments presented in this section the frequency of the 397 nm laser is detuned by 3 MHz to the red, compared to the natural linewidth of about 20 MHz of the S1/2 ↔ P1/2 transition.
Total compensation of micromotion is achieved by compensating the micromotion in x and y directions iteratively. First the compensation of micromotion in the x direction is achieved. For this the excitation frequency is scanned around the secular frequency ωx corresponding to the x direction. When the frequencies are in resonance the ion fluorescence drops. A typical frequency scan resulting in a drop in the ion fluorescence is shown in Fig.4.3. Empirically we observed that a good fit for the drop-
 in the fluorescence is achieved by analyzing it using the following function.

 4.1. MICROMOTION IN ION TRAPS 53
Figure 4.3: Plot showing the drop in the ion fluorescence when the frequency of the excitation signal is in resonance with the secular sideband of the micromotion of the ion, which is not micromotion compensated. The data is fitted with an inverse exponentiated quartic function described in the equation 4.1, empirically chosen for an accurate estimate of the drop in fluorescence.
F(ωs) = Fs − d· exp
(
− (ωs − ω0)2
(w2)2 − (ωs − ω0)4
(w4)4
)
. (4.1)
where F(ωs) is the ion fluorescence at excitation frequency ωs and ω0 is the secular frequency of the ion. The power of the excitation signal is adjusted such that the dip in the fluorescence signal is not saturated. Now the electrode voltages are changed such that the electric field minimum at the ion moves predominantly in the x direction, resulting in a displacement of ion in the x direction. If the depth of the dip is lower than the previous scan, micromotion is reduced. This process is repeat-
ed until the dip in the fluorescence disappears. If the dip in the frequency scans is not visible for more than one ion position, the scans are repeated with a higher power. These sets of frequency scans are repeated with different ion displacement ranges until the best resolution in the displacement is reached. After the micromotion is compensated in the x direction, the ion is kept at a compensated position along the x direction and the same procedure is repeated for the compensation along the y-
 direction.
The results presented in this chapter were obtained with Trap-GG described in Sec. 3.1.1. The outer electrodes 1, 2, 3, 9 and 10 on both sides of the RF along with the center electrode were grounded. The ion was trapped in the middle of

 54 CHAPTER 4. STRAY ELECTRIC FIELD SENSING AND COMPENSATION
electrode 6. To move the ion in the y direction, a constant voltage was added to all DC electrodes. The displacement of ion in the x direction in achieved by adding and subtracting a constant voltage to the voltage on the electrode 6, on either side of the RF, keeping rest of the DC voltages constant.
Results and discussion
The result of this experiment is plotted in the Fig. 4.4. Fig. 4.4a and 4.4b show the change in the depth of the dip when the excitation frequency is in resonance with the micromotion sideband of the ion ΩRF + ωx and ΩRF + ωy respectively, as a function of ion position in x and y direction. For gray regions in Fig. 4.4a there exist no data because the excitation would drive the ion out of the trap. Cross sections of the 2D plots are plotted in Fig. 4.4c and 4.4d. The plots shows the change in the -
strength of the excitation when the ion is moved along x and y direction respectively. The energy gained is expected to be proportional to the square of the electric excitation field [56]. This is consistent with the data which fits well with a parabola, as the excitation of the quadrupole field is linear in the ion position.
The accuracy of the ion position is estimated by calibrating the displacement of the ion as a function of the applied correction voltages. In the x direction the CCD camera is used to determine the displacement. In the y direction the displacement is determined using the position of the laser beam yielding maximum fluorescence. These values were verified by modeling the displacement of the DC minimum with variation of the compensation voltages. By translating the applied voltage into an actual dis-
placement, we determine an accuracy of about 50 nm in the x direction and 300 nm in y direction in positioning the ion at the RF minimum. This corresponds to excess micromotion amplitudes of 6 nm and 40 nm in these respective directions. The accuracies could be further improved by increasing the excitation voltage and decreasing the frequency detuning of the detection laser from resonance [42].
So far in this section we have discussed the micromotion of the ion arising due to the stray charges, which can be compensated by applying counter electric fields using the DC electrodes. But the micromotion can also arise due to the geometry and/or the electrical connections of the trap. In a typical trap setup the drive voltage applied on the RF electrodes gets capacitively coupled to the DC electrodes. Since the quadrupole formed by the DC electrodes is different from the one formed by the RF e-
lectrode, the oscillating voltage picked up by the DC electrodes results in the displacement of the RF null. If the picked up voltage has a different phase than that of the RF drive the position of the RF null oscillates with the frequency of the RF drive. This induces a micromotion depending of the phase difference of the pickup voltage. Since there is no region where the electric field created by these two voltages are zero throughout the oscillation

 4.2. ELECTRIC FIELD SENSING 55
(a) (b)
(c) (d)
Figure 4.4: (a) and (b) plots the depth of the dip as the function of ion position in the x and y directions, when the ion is excited with the frequencies ΩRF + ωx and ΩRF + ωy respectively. The gray area in the plot (a) is the region without data because the excitation might drive the ion out of the trap. Darker color in the plot indicates a smaller dip value. (c) and (d) are the cross section of (a) and (b) respectively, fitted with a parabola.
cycle, the micromotion arising from this effect cannot be compensated.
4.2 Electric field sensing
In this section we explain how the compensation of micromotion can be extended to map the electric field along the axis of a surface trap. This information of the electric field over an extended region of the trap is very important for ion shuttling experiments and can be very useful in determining the mechanism of charging on surface traps. The essential part of the stray field estimation is to perform micromotion compensation as described above. After the compensation parameters have been determ-
ined, we measure the ion position along the z direction using the CCD imaging system. The values of the dc voltages at the compensated configuration

 56 CHAPTER 4. STRAY ELECTRIC FIELD SENSING AND COMPENSATION
and the ion position are then input to a minimization algorithm. The algorithm finds the corresponding stray electric field at that position. We performed this type of analysis over an extensive region along the axis of the trap and the results are plotted in Fig. 4.5. Fig. 4.5a shows the three components of the stray electric field Ex, Ey, Ez plotted in red, green and blue, respectively along with
its magnitude |−→E | plotted in black. Since the scale of the stray electric field is too large to see the error bars a closer view of each of the curves is plotted separately in Fig. 4.5b. It is evident from the plot that the stray electric field values closer to the middle DC electrode of the trap are higher than the field values at the outer DC electrodes. The results of this measurement is analyzed in the subsection 4.3.1.
The accuracy of this measurement scheme was mostly limited by the uncertainty in the determining of the absolute position of the ion along the axis of the trap. This uncertainty arises due to the imprecision in the alignment of the microscope objective used for imaging with respect to the trap and from the size of the trap features used to determine the position of the ion on the trap. This uncertainty was estimated to be ±2.5 μm which translates as an inaccuracy of (δx, δy, δz) = ±(5.5, 3, 15) V/-
m in the measurement of the stray electric field. This was a systematic error, leading mainly to an offset of the entire curve. The precision of the stray electric field measurement was limited by the imperfection in the compensation of the micromotion of the ion. This leads to an uncertainty of ±0.4 V/m in the x direction and ±2.5 V/m in the y direction.
The third factor limiting the measurement of the stray electric fields was the aberration of the imaging system. This introduces an uncertainty in determining the ion position at a given voltage settings with respect to the previous settings as the ion was shuttled along the axis of the trap. This introduces an uncertainty of ±0.1 μm, which leads to an imperfection of ±(2, 4, 0.5) V/m in the measurement of stray electric field. All these above mentioned imperfections sum up to an uncertainty of (δ-
x, δy, δz) = ±(8, 10, 16) V/m. However all these imperfections can be further improved.
These measurement were performed on the trap-GG. The detailed description of the trap is presented in Sec. 3.1.1. The voltages used in the transport of the ion along the axis of the trap were supplied by Prof. Ferdinand Schmidt-kaler’s group, then at University of Ulm, now at University of Mainz. The voltage file consists of about 300 sets of voltages. Each set consists of the voltages for all the trap electrodes required to trap the ion at a certain point along the axis of the trap. When the volt-
ages on the electrodes are switched to the values in the neighboring subset, the ion shifts to a new position, about 7 μm apart. For our experiment the ion was shuttled in steps of 15 μm to 30 μm, as plotted in Fig. 4.5.
In addition the secular frequencies at each position along the axis of the trap are estimated using the electrostatic solver. Since the radial trap axes are tilted we

 4.2. ELECTRIC FIELD SENSING 57
(a)
(b)
Figure 4.5: (a) Stray electric field along the axis of the trap. The three components
Ex, Ey, Ez are plotted in red, green and blue, respectively. The magnitude |−→E | of the stray field is plotted in black (b) Since the scale of the stray electric field is too large to see the error bars a closer view of each of the four curves are plotted separately. The solid curves on the two sides of each curve correspond to the possible systematic offset arising from the uncertainty in the absolute axial position, as described in the text.

 58 CHAPTER 4. STRAY ELECTRIC FIELD SENSING AND COMPENSATION
1000 1500 2000 2500 3000 3500
-1
-0.8
-0.6
-0.4
-0.2
0
0.2
0.4
0.6
0.8
1 x 107
Axial position Z (μm)
Curvature (V/m2)
Figure 4.6: The curvature of the stray electric field along the axis of the trap.The solid line is the estimated gradient using the change in the stray field and the dots (•) represent the curvature of the stray field as determined from the difference between measured and estimated secular frequencies
determine the radial secular frequencies using a two-dimensional polynomial fit in the xy plane. The agreement between the experiment and the measurement was better than 4%, corresponding to a disagreement of 20 kHz for an axial frequency of 500 kHz and 30 kHz for redial frequencies between 1 to 2 MHz. We attribute these disagreements to details of the trap geometry that were not included in the simulations and the unknown curvature of the stray electric field. Only the spatially inhomogeneous par-
t of the stray field was responsible for the discrepancy between the estimated and the measured electric field since the electrostatic stray fields are compensated and included in the simulations. We used this discrepancy induced in the trap frequencies to estimate the curvature in the stray field and compared it with the curvature of the stray field estimated using the change in the stray field. The results are plotted in Fig. 4.6. The data points in the plot denoted by dots (•) represents the cu-
rvature of the stray field as determined from the difference between measured and estimated secular frequencies. The solid line is the estimated gradient using the change in the stray field. The values from both the methods match very well. For the results discussed in this section the electrostatic modeling of the trap was carried out using a boundary element method solver CPO 1.
1www.electronoptics.com

 4.3. POSSIBLE SOURCES OF THE STRAY ELECTRIC FIELD 59
4.3 Possible sources of the stray electric field
In this section we discuss some of our observations and experiments that helped us get an idea about the source and location of the charges causing the stray electric fields. The first subsection analyzes the source and the pattern of the electrical stray field we discussed in Sec. 4.2. In the latter part of this section we present some of our experiments to identify the sources, locations and cure for the stray charges.
4.3.1 Abrupt change in the stray fields
The effect of stray field was first observed on the Trap-GG. A quantitative estimate of stray field and the process of its measurement is presented in Sec. 4.2. These measurements were carried out over a period of several months. In the first couple of months of trap operation we monitored the stray field only at one trapping position close to the center of the trap. During this time we found the mean magnitude of the field to be 47 V/m with a standard deviation of 52 V/m. After about two months o-
f trap operation the ion pump pumping the vacuum chamber stopped working due to an interlock-failure. During this time the pressure inside the chamber went up to 10−7 mbar. The ion pump remained switched off for about a week during which the chamber was not used for any experiment. After a week the vacuum was restored by turning on the ion pump and firing the Ti-Sub pump for a few times.
The new stray field values measured after this incident were about an order of magnitude higher than the field measured earlier and as high as 1300 V/m. The results of this measurement is presented in Sec. 4.2. The mapping of the direction of the measured stray electric field is plotted in Fig. 4.7. It can be clearly seen from the figure that the stray field is pointing strongly close to the center of the trap which happens to be the region where Ca atoms were photoionized frequently, in particula-
r towards the electrode gap highlighted in red in Fig. 4.7a.
A number of effects can be responsible for the change of the stray field. From the geometry of our vacuum apparatus, we expect that possible Ti contamination from the Ti-sub pump was rather homogeneous. Similarly, contamination with atomic Ca from the oven was not expected to peak at the loading zone, located near the center of the trap, but rather to fall off monotonically moving towards the oven direction as a result of the atomic beam flux screening, as discussed in Sec. 3.1.1. One possible mec-
hanism of surface contamination is the bombardment of the trap electrodes by electrons created during trap loading or by 40Ca+ ions, which are created by photoionization. These can impinge on the gold surface with energies of up to 100 eV when accelerated by the RF field. 40Ca+ ions with energies of a few eV can get adsorbed onto the trap electrodes and later form chemical compounds, while ions at higher energies can sputter material from

 60 CHAPTER 4. STRAY ELECTRIC FIELD SENSING AND COMPENSATION
(a)
(b)
(c)
Figure 4.7: Plot showing the magnitude and direction of the stray electric field near the RF null, along the axis of the trap. The direction of the arrows represents the direction of the field and the length of the arrow represents its magnitude. The trap electrodes are plotted in blue and are numbered according to Fig. 3.1. Figures (a), (b) and (c) are the isomeric, side and top views of the stray fields respectively.

 4.3. POSSIBLE SOURCES OF THE STRAY ELECTRIC FIELD 61
the trap surface. This elevated stray field exhibits a slow temporal change on the order of few tens of V/m per week. Measurements were discontinued for 9 days during which the fields changed by about 70 V/m resulting in the discontinuity of the data in Fig. 4.5, at the axial position of 2450 μm along the axis of the trap. Besides this slow drift a variation of the stray field on the order of 100 V/m is observed during typical trap operation. Discharging of this field occurs over the course of few-
 hours when the trap was left unused and the laser lights were switched off. Intuitively, it is conceivable that a strong buildup of negative charges was responsible for the observed stray field pattern. However, a mathematically unique reconstruction of the surface charge distribution from our measurements cannot be carried out without further assumptions about the charge distribution [75, 76]. Finally, the high stray fields also appeared to be spatially and temporally correlated with the observe-
d high heating rate discussed in Sec. 5.2
4.3.2 Photoionization
In our experiments with this trap, we observed that operation of the trap over several hours significantly changes the stray fields and makes the trapping unreliable. While several factors such as field emission of electrons due to the RF drive, photo-electrons from the metal surface due to the presence of near UV light such as 397 nm and 375 nm could have been contributing to these charges, we have observed that the trap degrades the most on the days we load more often than on the days we need to-
 load only a few times. This strongly indicates that the photoionization and/or the calcium oven were responsible for the short term charging of the trap. To narrow down the source of the charges, we performed a series of tests in which we switched on each of the components of the photoionization system independently and monitored the performance of the trap. Since the 375 nm laser used for the second step of photoionization was the farthest in the UV and it was on only during the loading process,-
 we had a strong suspicion that it was the main source of the charging. To verify this we performed a photo-current measurement test. For this we applied a voltage of about 100 V on one of our DC electrodes and measured the current flowing from the electrode to the ground using a pico ampere-meter. We then illuminated the electrode with 375 nm laser light with a power of 2 mW and a beam waist of 100 μm while monitoring the current. We observed no noticeable change in the current which suggests tha-
t the laser light does not generate significant charges. We also performed this test with the RF drive voltage switched on and observed no change in the current. To make sure that the laser lights are not contributing to the stray charges in some other form, we left all the lasers used for trapping switched on over night. No significant effect of the laser light was observed when we started trapping the

 62 CHAPTER 4. STRAY ELECTRIC FIELD SENSING AND COMPENSATION
next morning and we concluded that the lasers by themselves are not responsible for the charging we observed in our experiments.
We also tested the calcium oven because of the suspicion that the hot oven was contributing to the charging through thermionic emission of electrons. We were also worried that the calcium flux from the oven during the loading was making the local vacuum around the ion worse resulting in the instability and the frequent loss of ions. The suspicion that the local vacuum degradation was responsible for the instability of the ion appears less likely as a different group in our laboratory observed that-
 ions can be stably trapped with more than twice the current required for loading. To verify the thermionic emission theory, we left the calcium oven on along with the RF drive, for an hour before loading. We did not see any significant effect on the micromotion compensation voltage or the stability of the ion.
We knew from our experience that on the surfaces traps, where there is an insulating layer caused due to the oxidation of the trap electrodes, loading the trap with ions causes charging. But since neither operating the oven, nor the UV laser lights alone leads to observable charging, we came to a conclusion that the photo-electrons or the ion produced during the photoionization process of calcium were responsible for the charging in our traps. To understand the role of the RF drive in this effect,-
 we left the calcium oven and the two photoionization lasers on for about 90 minutes, while keeping the RF drive off. During this time the ions are being created due to photoionization but they are not trapped because the RF drive is switched off. We then switched on the RF drive and loaded ions without any noticeable change in the micromotion compensation values. This suggests that the surface is not getting charged if the RF is turned off. But during the trap operation we observed that the micro-
motion compensation values change every time we load ions in the trap. This implies that the charging occurs only if the RF drive is on during the photoionization process. From this we concluded that the RF drive voltages accelerates photo electrons and/or ions produced during the photoionization onto insulating surfaces, thus causing charging.
Based on those experiences we took the following measures to reduce the charging during the photoionization process. The calcium oven was mounted on a adjustable bellow so that it can be aimed more precisely at the loading region to minimize the calcium flux while loading. Previously, both photoionization laser lights were coupled into the same fiber and focused on to the trap using the same collimator. This was changed and the 375 nm laser light was coupled using a different fiber and the beam wa-
s aligned 45o to the 422 nm laser beam as shown in Fig. 3.3 to restrict photoionization to the actual trap volume.

 4.3. POSSIBLE SOURCES OF THE STRAY ELECTRIC FIELD 63
-200 -150 -100 -50 0 50 100 150 200
-50
-25
0
25
50
DC voltage (V)
Measured current (pA)
Figure 4.8: Plot showing the current as a function of the voltage applied between the RF and the DC electrodes as discussed in section 4.3.3. The solid line is a liner fit which suggest a simple Ohmic behavior of the IV curve.
4.3.3 Electrical field emission
We have observed that when the voltage of the RF drive is increased beyond a certain value the ion slowly drifts along the axis of the trap. Associated with this micromotion compensation values change so much that the trap becomes instable and not fit for trapping any longer. This effect was first observed on Trap-GG, at an RF drive amplitude of 200 V, whereas our usual amplitude of the trapping voltage was between 100 V and 125 V. It took a few hours of discharging before stable trap operation wa-
s possible again.
While no tests have been performed on the Trap-GG to verify if this charging is due to electrical field emission, we performed a test for field emission on a different surface trap from Sandia national laboratories, similar to the one used in the Ref. [77]. We applied a DC voltage between the RF and the DC electrodes and varied it between the -200 V to 200 V. The current flowing through the electrodes was monitored using a pico ampere-meter connected in series with the voltage supply. The idea was-
 to check for an exponential increase in current with the applied voltage [78, 79]. Since DC electrodes are the onces closest to the RF electrode the measurements were carried out between the DC and the RF electrodes. The results are plotted in the Fig. 4.8. We find a linear dependence of the current with respect to the applied voltage, suggesting that field emission is

 64 CHAPTER 4. STRAY ELECTRIC FIELD SENSING AND COMPENSATION
not relevant. The measured current is supposedly leakage current through the substrate and the feedthrough which has a resistance on the order of 1015 Ω.
4.4 Clean trap surfaces for reduced charging
The trap from Sandia national laboratories, used for the electrical field emission experiments discussed in Sec. 4.3.3 was a multi-layered trap fabricated by coating aluminum on silica (SiO2). This trap was installed after Trap-GG was removed from the chamber. While the charging effect discussed in Sec. 4.3.2 was observed also in Trap-GG, the effect was prominent in the Sandia trap. Considering the rapid oxidation nature of the aluminum, we coated the top surface of the trap with about 100 nm of g-
old, to cover any insulating aluminum oxide layer formed on the surface close to the ion position. The multi-layer structure of the trap, with the wire bonding pads on a different layer than the trap electrodes, prevented us from coating the entire trap with gold and we restricted the coating to a region of 10 mm×10 mm in the center of the trap
When the electrical continuity from the feedthrough to the electrodes was measured, we came to know that the gold layer was electrically floating with respect to the bottom aluminum layer with a resistance of few hundred MΩ. The formation of the aluminum oxide layer is considered to be the most plausible reason for this discontinuity. To resolve this problem we etched the newly coated gold layer along with the aluminum oxide layer and immediately recoated the aluminum layer with gold, before it co-
uld form an aluminum oxide layer. This coating resulted in a gold surface with a good electrical contact with the aluminum surface. However, in this process some of the trap electrodes got shorted with respect to each other and ground. This made it impossible to use the trap for any meaningful experiments and we thus proceeded to install Trap-A.
From various experiences in our group and outside our group, we became aware that dust on the surface of the trap close to the trapping zone can affect the experiment up to the point where no trapping is possible. To prevent such contamination we started taking some precautions while installing the trap. The trap was placed inside an airtight container right from the clean room, where the trap is wirebonded. In case a dust particle were found on the trap during installation, it was removed by gent-
ly blowing compressed air or scraping it using 25 μm wirebond wire.
Heating of the calcium oven for the first time was carried out while the turbo pump was pumping the vacuum chamber. We made sure that the pressure inside the chamber never increased above 10−7 mbar while the oven was heated. When the stack of piezo-actuator stages was left ungrounded by mistake, we could not even load ions in our trap. This prompted us to properly ground all the metal

 4.4. CLEAN TRAP SURFACES FOR REDUCED CHARGING 65
surfaces inside the vacuum chamber and to shield the insulated cables from the trap. By following these measures the problem of charging was greatly reduced and the stray electric field values were less than 25 V/m during day-to-day trap operations.

 

 Chapter 5
Heating in ion traps
Surface traps offer a promising route for the scaling ion trap quantum computing. A promising proposal for this scaling requires splitting, shuttling and recombining the ion crystal [20]. Standard micro-fabrication techniques can be used in the manufacturing of surface traps that eliminates the difficulties of precision assembly of the three-dimensional linear traps. Using these techniques miniaturized surface traps can be produced which can achieve fast ion manipulation and high trap frequencies -
required to increase coupling rates in approaches where ion traps are coupled to solid state elements. Despite these advantages, several unsolved problems keep surface traps from being used in high precision ion trap experiments. The most important of these problems are high heating rates observed in the surface traps. In our traps, where the ion to surface distance is about 100 μm, we observe heating rates of more than 3 orders higher than expected from Johnson noise. Several models have been pro-
posed to explain this observed high heating [24, 56, 19], but none of them are verified yet. In this chapter we describe different techniques used to measure the heating rates and discuss the implications of the measurements.
5.1 Heating rate measurement techniques
Direct measurement of heating rates in an ion trap essentially involves laser cooling the ion down to a steady state, switching off the laser cooling process and measuring the motional temperature of the ion after letting the ion heat for a certain time with the laser cooling switched off. This procedure is repeated with various waiting times allowing one to extract the heating rate from the temperature increase of the ion as the wait time increases. The heating rates in our setups range from a fe-
w phonons per millisecond to a few hundred phonons per millisecond. This makes measuring heating
67

 68 CHAPTER 5. HEATING IN ION TRAPS
Figure 5.1: Plots showing the strengths of the red and the blue sidebands of the axial mode for four different motional temperatures of the ion. The red plots in the left column correspond to the strength of the red sideband transition and the ones in the right to the blue ones. The data is fitted with a Lorentzian model to determine the excitation strength of the sideband accurately. Estimated values of the average phonon number are given in the right side of the each set of the red and the blue -
sideband plots. This corresponds to a heating rate of 250 quanta/s. Details of this measurement are presented in Sec. 5.1.1
rates using a single technique very difficult. For example the Doppler recooling technique [80] is not sensitive enough to detect the temperature of the ion below few hundreds of quanta with a reasonable accuracy. Whereas the motional sideband methods can be used to measure the ion temperatures down to a fraction of a quanta. On the other hand the motional sideband methods require

 5.1. HEATING RATE MEASUREMENT TECHNIQUES 69
ultra stable lasers and trap frequencies for the temperature measurement, while in case of Doppler recooling method the measurements can be done using the Doppler cooling laser light only.
Each of these methods have their own advantages and disadvantages and are suitable for measuring the motional temperature in different regimes. A brief comparison of these methods is listed in the form of table 5.1. In this section we discuss different techniques we used to measure the motional temperature of the ions. The theoretical analysis is presented in Sec. 2.4.
5.1.1 Sideband comparison method
The sideband comparison method is suitable to measure the motional temperature of individual modes of the ion motion. In this method the average number of phonons, 〈n〉 is estimated by comparing the strengths of the red and the blue sidebands transitions. A theoretical analysis of this method is presented in Sec. 2.4.1. This method of motional state measurement is effective only for low temperatures of the ion. For 〈n〉 values greater than about 10 quanta the strengths of the sidebands become compar-
able and the method becomes insensitive. To achieve this low motional temperature, the ion is cooled close to the ground state (〈n〉 <0.5 quanta), using sideband cooling methods described in Sec. 2.3.3. After a waiting time τoff, if the ion is still close to the ground state, the excitation close to the red sideband transition will be much weaker than that of the blue sideband. The energy acquired by the corresponding mode can be estimated using equation 2.52.
A set of plots showing the strengths of red and the blue sidebands is presented in Fig. 5.1. These plots were obtained on the axial sideband at a frequency about 1 MHz, for heating times of τoff = 0, 3, 6 and 9 ms respectively. Each spectrum is fitted with a Lorentzian function for an accurate estimate of the excited state population. The estimated values of the average number of phonons in the axial mode from these curves is 〈n〉 = 0.22, 0.76, 1.64, 2.45 respectively, which corresponds to a heatin-
g rate of 250 quanta/s.
5.1.2 Rabi flopping
Another way to determine the temperature of the ion is to measure the strength of the transition by driving the Rabi flops. Unlike the sideband comparison method, where the strength of the transition is estimated by monitoring the excitation peak, this method relies on analyzing multiple Rabi flops for the estimation of the same. This makes the Rabi flopping method statistically more accurate than the sideband comparison method to measure the temperature of the ion.

 70 CHAPTER 5. HEATING IN ION TRAPS
0 20 40 60 80 100
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
Time (μs)
D-state population
Figure 5.2: Plot showing Rabi flops on the carrier transition calculated for three different average phonon numbers, 〈n〉 = 16 (blue), 25 (black), 34 (red), with η = 0.127.
In Rabi flopping method the effects due to the change in parameters like frequency and intensity of the lasers are distinct from the effects due to the change in the temperature of the ion. This helps in decoupling these effects from the temperature measurement. However this method requires stable secular frequency through out the measurement. Drifts in magnetic field, frequency and intensity of the laser need to be continuously tracked and corrected for a reliable estimation of the temperature of-
 the ion.
The Rabi flopping method of temperature measurement can be carried out by the driving the Rabi flops either on the carrier transition or on the sideband transition depending on our requirement. By driving Rabi flops on the carrier transition we can estimate the overall temperature of the ion from contributions of all the motional modes weighted with their respective projections on the direction of the exciting 729 nm laser beam. Fig. 5.2 shows Rabi flops on the carrier transition calculated for 〈n-
〉 = 16, 25, 34 quanta, with η = 0.127. Rabi flops on the carrier transition are sensitive to the changes in temperature up to a few hundred quanta, significantly increasing the range of the temperature measurement compared to the sideband comparison method. The motional

 5.1. HEATING RATE MEASUREMENT TECHNIQUES 71
temperature of independent modes can be estimated by driving the Rabi flops on the sidebands of the corresponding mode.
5.1.3 Doppler recooling method
The third method, we used to measure the temperature of the ion, is the Doppler recooling method. This method is based on observing the change in the fluorescence of an ion affected by its motional temperature due to the Doppler effect. This method is useful if the temperature of the ion is of the order of few 1000 quanta, temperatures at which the previous methods become very insensitive. To measure the motional temperature of the ion using the Doppler recooling method, first the micromotion of t-
he ion was compensated in both the x and y directions as described in Sec. 4.1.2. The intensity of the Doppler cooling 397 nm laser light was actively stabilized at 38 mW/cm2 using a PID control. This intensity corresponds to a saturation parameter of 1. The frequency of the detection laser was tuned near resonance, in this case 5 MHz to the red side of the S1/2 ↔ P1/2 transition. The intensity of the 866 nm repump laser was adjusted to be close to the saturation of the P1/2 ↔ D3/2 transition whic-
h in our setup was about 115 mW/cm2 and the frequency was tuned close to the transition by maximizing the fluorescence. A schematic of the pulse sequence used for the Doppler recooling experiment is shown in Fig. 5.3a. The Doppler cooling was turned off by switching off the repump laser light for a duration of τoff. During this interval the ion gets pumped into the metastable D3/2 level, and will not be cooled any longer by the Doppler cooling laser light. The time interval it takes to get pumped -
to the D3/2 level is tpump = 0.1 μs τoff. After the repump laser light is turned on the fluorescence of the ion was acquired using time bins of 50 μs. This procedure was repeated 100 times and averaged to improve the statistics. The motional temperature of the ion was extracted from the recooling curve by analyzing it using the procedure described in [42]. A typical Doppler recooling curve fitted for the kinetic energy of the ion as a function of the recooling time is plotted in Fig. 5.3b. Each da-
ta point represented by ◦ is fluorescence acquired during the corresponding time bin, averaged over 100 cycles and normalized to the maximum average value of all the bins. The solid line is the fit to estimate the motional temperature of the ion.
Calibration of Doppler recooling method
Application of the Doppler recooling measurement described in Sec. 5.1.3 is practical in situations where the Doppler cooled mode does not experience significant micromotion, for example, the axial mode of a linear Paul trap. However

 72 CHAPTER 5. HEATING IN ION TRAPS
(a)
0 5 10 15 20 25 30 35 40
0.4
0.5
0.6
0.7
0.8
0.9
1
1.1
t (ms)
normalized fluorescence
(b)
0 0.02 0.04 0.06 0.08 0.1 0.12 0.14 0.16 0.18 0.2
0
0.2
0.4
0.6
0.8
1
τoff (sec)
ε (meV)
(c)
Figure 5.3: Doppler recooling method of estimating the motional temperature of the ion. (a) Pulse sequence of the Doppler recooling experiment. (b) A typical Doppler recooling curve showing the ion fluorescence as a function of recooling time and fitted using the procedure described in [42]. The parameters used to obtain this curve are described in the text. (c) Motional energy of the ion as a function of the heating time τoff.

 5.1. HEATING RATE MEASUREMENT TECHNIQUES 73
Sideband Rabi Doppler comparison flopping recooling
Range 〈n〉<10 phonons 〈n〉<102 phonons 〈n〉>103 phonons Accuracy δn<0.1 phonons δn<0.1 phonons δn>100 phonons
Laser ΓFWHM<100 Hz ΓFWHM<100 Hz ΓFWHM<10 kHz
resolution
Advantages
•High accuracy •Independent mode temperatures
•High accuracy •Independent mode temperatures
•Large range •Carried out using Doppler cooling laser light
Disadvantages
•Need narrow band laser •Slower because of sideband cooling
•Need narrow band laser •Require stable secular frequencies
•Low accuracy •Measures only average temperature of all modes
Table 5.1: Motional temperature measurement techniques comparison
if the laser has a projection onto the radial modes, micromotion contribution to Doppler broadening can be significant and has to be taken into account in determining ion energy from changes in fluorescence. Following the procedure discussed in [42], we numerically find that for our experimental parameters, micromotion contributes significantly to Doppler broadening, and can lead to an overestimation of the ion energy by a factor between 2 and 4. However, the numerical integration required to obta-
in and fit fluorescence recooling curves to experimental data is computationally intense, which makes it cumbersome.
In addition, the Doppler recooling method relies on the accurate knowledge of all saturation parameters and the line width of the resonance. The complicated multi-level dynamics of the 40Ca+ makes it very difficult to estimated these parameters to a high degree of precision. In addition dark resonances and the strength of the repump light field(s) also have significant influence on the line shape. Thus modeling the fluorescence of the ion taking into account the multilevel structure of the 40Ca+ i-
on requires careful measurement of the detuning, intensities and beam widths of the various laser beams involved in Doppler cooling. Instead of modeling the recooling dynamics in the presence of micromotion and multiple atomic levels, we use here a simple workaround. We calibrate the energy scale of the ion with well-defined electric field noise.
To calibrate the effective energy we heat up the ion by introducing external noise supplied by a signal generator that has been calibrated using a spectrum analyzer. The noise is white to a large degree, with the spectral density varying less than 10% at the secular frequencies. We connect the noise to the electrode

 74 CHAPTER 5. HEATING IN ION TRAPS
0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
0
1
2
3
4
5
6
7
8
9
10
Estimated heating rate from applied noise, dE/dt (meV/s)
Heating rate measured using
Doppler recooling, dε/dt (meV/s)
Data obtained four hours apart with the same set of perameters
Figure 5.4: Calibration of the measured motional heating rate of the ion determined using the Doppler recooling curve against the externally applied noise source. Each data point in the plot is a heating rate measured using Doppler recooling at a constant voltage of the external noise. Each curve is plotted by measuring the heating rate at different voltages of the applied noise. The data of these three curves are measured with the same set of parameters four hours apart and the solid lines are th-
eir linear fits. The slopes of the curves vary by a factor of roughly 2. We attribute these discrepancies to the parameters such as the intensity and detuning of the repump laser that are not stabilized. From these curves we estimate the measured motional energy of the ion to be a factor of 8.9±3.6 higher than the actual energy acquired.
that has similar projections of electric field on all three modes of the ion. From our electrostatic model, we estimated that 1 V of DC voltage on this electrode gives an electric field of 68, 73, -56 V/m along the x, y and z directions respectively, at the ion position. The noise is introduced to the electrode through the filter board. We vary the noise voltage spectral density between 4.4×10−16 and 2.5×10−14 V2 Hz−1 corresponding to a noise power spectral density (Se) at the ion position between-
 1.7×10−11 and 1.0×10−9 (Vm)−2Hz−1. The expected motional temperature of the ion due to this noise can be estimated using the equation [56],
E= ∑
i={x,z,y}
e2
4m
(
Se(ωi) + ω2
i
2Ω2
RF
Se(ΩRF ± ωi)
)
τoff, (5.1)
where τoff is the heating time, when the Doppler cooling is switched off and ion is allowed to heat up. ωi is the secular frequency of the ith mode of the ion, and Se(ωi) is the power spectral density of the electric field at that frequency.

 5.1. HEATING RATE MEASUREMENT TECHNIQUES 75
1.4 1.6 1.8 2 2.2 2.4 2.6 2.8 3 3.2
1,000
3,000
10,000
30,000
100,000
300,000
axial position (mm)
dn/dt (1/s)
Figure 5.5: Heating rate of the ion at different positions along the axis of the trap. A representative errorbar is shown on the data point at position 1.5 mm. The plot contains two sets of measurements, marked by open triangle and open circles, taken after 8 and 10 months of trap operation respectively. The filled data point at 2.25 mm was measured in the ’pristine’ trap, i.e. after about 45 days of operation in vacuum. the latter measurement shows a change of an order of magnitude in the heating-
 rates at the loading region as compared to the pristine values.
In this estimation the heating due to the secular sidebands of the micromotion, Se(ΩRF ± ωi) in equation 5.1 is omitted as they are estimated to be a weaker by a factor of (ωi/2ΩRF)2 ∼ 0.01.
The heating rates (d /dt) are measured for different voltages of the external noise applied and compared with the heating rate values (dE/dt) estimated using equation 5.1. The results are shown in Fig. 5.4. We plot three curves taken several hours apart. While we find linear dependence on time scales of about an hour, the slopes of the of the curves taken several hours apart vary by a factor of roughly 2. We attribute these discrepancies to the parameters that are not stabilized, namely the intens-
ity and detuning of the repump laser. From the curves plotted in Fig. 5.4 we estimate the measured to be a factor of 8.9±3.6 higher than the actual energy acquired by the ion. The large uncertainty in the calibration is due to the discrepancy of factor of 2 in the measurement of slops. This uncertainty in the calibration of versus E results in a proportional increase of error bars in the measured heating rates of the ion.

 76 CHAPTER 5. HEATING IN ION TRAPS
Apart from the ease of implementation, this method of calibration has the advantage of separating out the effect of the energies of different motional modes on the fluorescence of the ion. This can be achieved by choosing the noise frequency bands and/or the excitation geometry, i.e. an electrode that has a projection on the mode that we are interested in. Thus, one can study or avoid implicit assumptions while extracting a single value for combined heating rate of all three motional modes.
5.2 Heating rate along the axis of the trap
We use this calibrated Doppler recooling method of heating rate measurement to determine the heating rates of an extended region along the axis of the trap. The measurements were performed along with the stray electric field measurements discussed in Sec. 4.2. The results of these measurements are plotted in Fig. 5.5. The heating rate values plotted were renormalized to quanta at a frequency of 1 MHz. The single data point at the axial position of 2250 μm is measured about 6 weeks after the instal-
lation of the trap. The rest of the data points ranging from 1500 μm to 3100 μm along the axis of the trap were measured over a span of three months, starting seven months after trap installation and thus after the ion pump failure discussed in Sec. 4.3.1. As compared to the pristine trap the heating rate appears to have increased by a factor of more than 10, at the center of the trap, with the maximum around the loading region. This region between 1900 μm and 277 μm was extensively used for loadi-
ng ions. Far from the loading region the heating rates seem to retain the pristine trap values. Likewise the uncooled life times of the ion decreased roughly by an order of magnitude to about 20 s where the increase in the heating rates were observed. This pattern of the increase in the heating rates closely matches that of the increased stray field discussed in Sec. 4.3.1 and it is very likely both these effects are caused due to the surface contamination discussed in the same section.

 Chapter 6
Towards coupling ions using a
macroscopic wire
The ultimate goal of the project is to couple two independently trapped ions using a macroscopic metallic wire. The theoretical analysis of the proposal is presented in Sec. 2.5. To achieve a noticeable coupling of ions, we will have to bring the wire as close as 50 μm to the ion. At these ion-wire distances the influence of the wire becomes significant and it has to be taken into account to achieve stable trapping of the ion. In this chapter, we describe experiments we performed to understand the-
 associated challenges.
6.1 Trapping simultaneously in two independent wells
One of the essential requirements of coupling two ions is to trap them simultaneously in two separate potential wells, while compensating for stray electric fields and adjusting their secular frequencies independently. To achieve this we follow the same procedure of estimating the electrode voltages described in Sec. 2.1. But instead of calculating one coefficient matrix M ̃ for a single ion position, we calculated two coefficient matrices M ̃ 1 and M ̃ 2 corresponding to two ion positions and com-
bine them. The equation used to estimate the electrode voltages is then given by
77

 78 CHAPTER 6. TOWARDS COUPLING IONS USING A MACROSCOPIC WIRE
-0.5 -0.25 0 0.25 0.5
-1.5
-1.4
-1.3
-1.2
-1.1
Z(mm)
U(ev)
Figure 6.1: Calculated double well potential for trapping two independent ions for the wire coupling experiment. The two wells are about 1 mm apart and the estimated axial frequencies of the wells are 800 kHz. These wells can be controlled independently. This double well potential is generated using the voltages estimated from the equation 6.1.


M(1)
...1
M(1)
9
M(2)
...1
M(2)
9


=


M(1)
1,1 · · · M(1)
1,N
... . . . ...
M(1)
9,1 · · · M(1)
9,N
M(2)
1,1 · · · M(2)
1,N
... . . . ...
M(2)
9,1 · · · M(2)
9,N


.


V...1
VN


(6.1)
The resultant double-well potential generated by the electrode voltages using equation 6.1 is shown in Fig. 6.1. In this case the two wells are separated by a distance of 1 mm with an estimated axial frequency of 800 kHz. A detailed description of the calculation of the double-well potential is presented in the masters thesis of Gebhard Littich [31]. In the first attempt to load in this double well we used two sets of photoionization and cooling laser beams. While we succeeded in loading in both t-
he wells, the laser beam arrangement crowded the viewports too much and the approach was abandoned.

 6.2. WIRE POSITION MEASUREMENT 79
Figure 6.2: Schematic showing the process of loading in two wells. First the ion is loaded in a single potential well at the loading position. The electrode voltages are cycled through different sets of values that transport the ion to a new position. Now the single-well potential is replaced with the double-well potential and a second ion is loaded in the loading region
Instead, we adopted an ion transport method to load the two potential wells. We first start with loading an ion in a single potential well. We then transport the ion along the axis of the trap to the second well location. We then switch the voltages set to a double-well potential. A second ion is loaded into the empty second potential well. A schematic of this process is shown in Fig. 6.2. The ion was transported using the method presented in Sec. 4.2. A set of voltages for each position of the io-
n along the axis was calculated and stored in the FPGA. A trigger pulsed cycles through all sets to move the potential well from the initial to the final potentials. This method of loading was not thoroughly characterized, but we could transport the ion back and forth for at least five times without losing it. The life time of ions in both wells was up to several minutes on the first trail without any optimization. The ions in the two potentials were monitored using the camera at one of the wells -
and the PMT in the other.
6.2 Wire position measurement
The distance of the wire from the ion is an important factor that determines the coupling of the ions through the wire (see Sec. 2.5.1). This makes knowledge of the wire position essential for the experiments pertaining to the ion-wire interaction. As the wire is moved close to the ion, stray charges and the voltages on the wire due to capacitive coupling to the electrodes displace the ion from the RF null, resulting in micromotion. This is compensated by adjusting the voltage

 80 CHAPTER 6. TOWARDS COUPLING IONS USING A MACROSCOPIC WIRE
of the DC electrodes at various wire positions. The position of the wire is also important for making sure that we do not hit the trap as the wire is moved close to the ion. In this section, we explain how we estimate the position of the wire in our setup.
As explained in Sec. 3.1.4 the wire is mounted on stick-slip PZT translation stage [63]. For a specific frequency and amplitude of the saw tooth wave, the distance moved by the stage is calibrated against the number of cycles. During the calibration we are required to accurately determine the position of the wire with respect to the trap. One way to achieve this is by using Doppler cooling laser. The 397 nm laser beam is lower using the motorized translation stage until it illuminates the trap. Th-
e position of the wire with respect to trap is determined by moving the laser beam vertically up until we scattered light off the wire. The accuracy of this method depends on the width of the laser beam and the step size of the motorized translation stage used for moving the 397 nm laser beam. Using this method we could position the wire with an accuracy of ±5 μm.
Shining laser light on the wire might result in charging of the electrically floating wire. To avoid this, instead of the laser light we used the imaging objective for this measurement. The distance of the wire from the ion is measured by moving the focus of the objective from the ion to the wire. The accuracy we get with this method is comparable to the laser beam method.
The weight on the vertical PZT stage effects the distance traveled for each cycle of the saw tooth wave for the slip-stick drive. Thus the vertical stage should be calibrated independently for up and down directions. With the wire holder assembly in our setup, and for the same number of cycles the distance traveled by the stage while moving up is about a factor of 1.2 smaller than while it is moving down. After moving the wire a few times up and down, the estimated position of the wire becomes unr-
eliable because of the hysteresis in the motion of the stage. To correct this, the position of the wire is measured after moving the wire a few times during the experiment. By following this method the error in the wire position is found to be less than 10 μm.
6.3 Characterization of potentials
Because the wire used to couple the ions is electrically floating it becomes very important to characterize its effect on the DC and RF potentials as the wire approaches the ion. Stray charges accumulated on the floating wire produce a significant DC field at the ion position. Because of its capacitance to ground and to the trap electrodes and as well as its self capacitance, the wire also influences the RF potential. In this section we present the data of various experiments to characterize the i-
nfluence of the wire on the DC and RF potentials.
For the y mode of oscillation, the coupling through the wire is maximum

 6.3. CHARACTERIZATION OF POTENTIALS 81
Figure 6.3: Artistic view showing the wire shadowing the ion fluorescence. The dimensions show in the picture are not to scale. This shadowing resulted in drastic reduction of the observed fluorescence signal when the ion wire distance is less than 500 μm. To overcome this issues we displaced the wire along the x direction as shown in Fig. 6.4.
when the wire is placed exactly above the ion (see Sec. 2.5.1). But while moving the wire close to the ion, we found that the observed fluorescence of the ion drastically decreases, especially when the ion wire distance is less than 500 μm. This is due to the wire shadowing the ion fluorescence as shown in Fig. 6.3. To overcome this issue we laterally displaced the wire in the x direction by about 30 μm. This results in a slight decrease of coupling but eliminates the loss of ion fluorescence almo-
st entirely. A schematic of the placement of the wire is shown in Fig. 6.4. This approach was adopted on all our ion-wire interaction experiments.
The first wire experiments were performed in on the Trap-GG using the single wire assembly described in Sec. 3.1.4. The main objective of these experiments was to map the stray field compensation voltages and see how the ion behaves as the wire approaches it. The wire was moved close to the ion using the PZT translation stage. The closest ion-wire distance we could achieve with this setup was about 230 μm. Micromotion compensation was performed using the method described in the chapter 4 and compe-
nsation voltages were applied to all the outer DC electrodes of the trap. In this setup the center DC electrode was grounded. The position of the ion was monitored using the laser beam in the y direction and the camera in the x and z directions as the wire approached the ion.

 82 CHAPTER 6. TOWARDS COUPLING IONS USING A MACROSCOPIC WIRE
Figure 6.4: Schematic showing the alignment of coupling wire with respect to the ion and the Trap. The trap used for this measurement was Trap-GG. The wire is displace by about 30 μm to prevent it from obstructing the ion fluorescence.
From the schematic of the surface trap (see Fig. 3.1a) it can be seen that the voltage applied on the DC electrodes on either sides of the RF electrodes results in a quadrupole potential similar to RF quadrupole potential. The static voltages on the DC electrodes are adjusted such that the DC and RF nulls overlap. When the wire is moved close to the trap, the capacitive coupling of the wire to the trap electrodes and stray charges on the floating wire distort both RF and DC quadrupole potentials. -
If the effect of the wire on these quadrupoles are and not same then the RF null is displaced from the DC null resulting in micromotion of the ion. The RF and DC nulls are overlapped by performing the micromotion compensation at each wire position.
Fig. 6.5 shows the vertical micromotion compensation voltage as a function of the ion wire distance. The inset in the plot shows how the change in the vertical compensation voltages affects the position of the ion with respect to the trap. This curve was measured with the wire at a distance of about 2000 μm from the ion. The direction and sign of the ion displacement as a function of the vertical compensation voltage remain the same regardless of the wire position.
From the plot in Fig. 6.5 it can be seen that as the wire moves close to the ion the vertical compensation voltage decreases. From the inset this implies that the RF null is above the DC null and the DC null needs to by moved up (away from the trap) for the micromotion compensation. However, the actual position of the ion measured using the laser beam, after micromotion compensation at each wire position suggests that as the wire above the ion is moved downwards, the ion moves closer to the trap. -
An electrostatic modeling of similar trap with a grounded wire used in a different project in our laboratory supports this argument.
One possible explanation for this observation is that when the wire is moved close to the ion, it pushes both the DC and RF nulls close to the trap. But since the

 6.3. CHARACTERIZATION OF POTENTIALS 83
12345
-4.2
-4.1
-4
-3.9
-3.8
-3.7
-3.6
-3.5
Ion wire distance (mm)
Y Compensation voltage, Vy (Volts)
-3 -2.8 -2.6 -2.4
0.19
0.195
0.2
0.205
0.21
0.215
0.22
Vy (Volts)
Ion position(mm)
Figure 6.5: Plot showing the change in the electrode voltage used to compensate the electric field in the y direction. The inset shows the position of the ion with respect to the trap surface as a function of the change in the vertical compensation, when the wire is about 2000 μm away from the ion.
RF quadrupole is stiffer than the DC quadrupole the displacement of the DC null is more than that of the RF null. To compensate this the DC null is moved higher at every wire position by decreasing the vertical compensation. A schematic of this explanation is shown in Fig. 6.6. A complete modeling of the trap with a electrically floating wire is underway to verify this observation.
No such displacements of the ion or the change in stray field compensations were observed along the x direction, in this setup. The relatively negligible projection of the wire on the ion in the x direction compared to y direction could be a reason for this.
Stray field compensation measurements as a function of the ion wire distance were also performed in the new setup with Trap-A featuring the three wire assembly described in Sec. 3.1.4. To compensate for the micromotion the DC voltages were adjusted to minimize the displacement of the ion when the RF drive voltage is increased. This method is described in Sec. 4.1.2.
The results are plotted in Fig. 6.7. The smallest ion wire distance achieved with this setup was 80 μm. The compensation electric fields required to move the ion back to the RF null in the x and the y directions are plotted in Fig. 6.7a and Fig. 6.7b, respectively. It can be seen that as the wire moves close to the ion a stronger positive compensation field pushing the ion away from the trap surface

 84 CHAPTER 6. TOWARDS COUPLING IONS USING A MACROSCOPIC WIRE
Figure 6.6: Schematic showing how the wire affects the DC and RF quadrupole potentials as it is moved close to the ion. The left most situation depicts the positions of the RF and DC null in the absence of the wire. When the wire is moved close to the ion from above, both the RF and DC nulls (red and blue crosses respectively) are pushed towards the trap. The displacement of the DC null appears to be more than that of the RF null. We perform micromotion compensation at each wire position to make t-
he two nulls coincide. In our setup we found out that in the absence of the wire the ion has no observable micromotion and we set the compensation electric fields to zero
is required. At the same time the measured RF saddle point is displaced by about 20 μm towards to trap surface, when the wire is moved to about 150 μm from the ion. This observation is consistent with the results obtained in the earlier setup. In Fig. 6.7a it can be seen that as the ion wire distance is below 500 μm the wire starts to influence the electric field also in the x direction.
As can be seen in Fig. 6.7b, the DC electric fields required to compensate micromotion when the wire is close to the ion are much higher than the fields required in its absence. This resulted in driving the DACs to their limits. To avoid this, we produced the compensation field by applying a voltage on the wire holder and the wires connected to it on both sides of the coupling wire (see Sec. 3.1.4). This method reduces the voltage requirements by a factor of 30. A graph showing the compensation vo-
ltage applied on the wire as a function of the ion-wire distance is plotted in Fig. 6.7c. It can be seen that as the wire moves closer to the ion a stronger negative voltage is required to pull the ion back to the RF null, which points to a fact that the DC null moves more than the RF null as the wire approaches the ion.

 6.4. CHARACTERIZATION OF SECULAR FREQUENCIES 85
0 0.5 1 1.5 2
0
1
2
3
4
5
Ion-wire distance (mm)
Ex (V/mm)
(a)
0 0.5 1 1.5 2
0
1
2
3
4
5
Ion-wire distance (mm)
Ey (V/mm)
(b)
0 0.2 0.4 0.6 0.8 1
-0.8
-0.6
-0.4
-0.2
0
Ion wire distance (mm)
Wire frame voltage (V)
(c)
Figure 6.7: Micromotion compensation as a function of Ion-wire distance on Trap-A. (a) and (b) shows the micromotion compensation along x and y directions respectively as a function of the ion wire distance. The micromotion compensation was achieved by adjusting the voltages of the DC electrodes (c) Micromotion compensation in the y direction as a function of ion-wire distance, achieved by applying a voltage on the wire-holder instead of adjusting DC electrode voltages.
6.4 Characterization of secular frequencies
As explained in Sec. 2.5, for optimum coupling of the ions through the wire it is important that the secular frequency of both ions is the same. With the wire very close to the ion, vibrations of the wire or micromotion due to the RF pickup affect the secular frequencies. Most of this noise is common-mode and thus should not lower the coupling between the ions. However initialization and reading out which is done by driving either the blue or red sideband requires the control of the motional frequ-
encies: If the secular frequency is not sufficiently stable, those standard tools fail. Thus it is important to characterize the stability of the secular frequency as the wire approaches the ion.
We measured the radial frequencies for various wire positions in Trap-GG. The results are plotted in Fig. 6.8. It can be seen that the radial frequencies increase as the wire is moved closer to the ion. This can be understood by

 86 CHAPTER 6. TOWARDS COUPLING IONS USING A MACROSCOPIC WIRE
012345
0
0.5
1
1.5
2
2.5
Ion-wire distance (mm)
Frequency(MHz)
ωy
ωx
Figure 6.8: Plot showing the change in the radial secular frequencies of the ion as a function of the ion-wire distance. As the wire moves closer it appears that the curvature of the RF field increases resulting in an increase of the radial frequencies along the radial directions.
realizing that the wire acts as an additional ground electrode. This argument is verified through an electrostatic modeling of the trap with a grounded wire.
6.5 Characterization of Heating rates
As is discussed in Sec. 2.5.2, heating in the ion traps is probably by far the most prominent source of decoherence in this experiment. We already pointed out that dust particles on the surfaces close to the ion are some of the major contributors for motional heating. With the electrically floating wire at a distance closer than the ion-electrode distance these effects can intensify. These reasons make the characterization of the heating rate in the presence of wire an important prerequisite for t-
he wire-coupling experiment. In this section we present heating rate measurements performed at different ion-wire distances. The measurements were carried out in Trap-A with the wire assembly described in Sec. 3.1.4. For each wire position micromotion compensation was achieved using the RF drive strength method (see Sec. 4.1.2). The axial mode heating rates were measured using the sideband comparison method described in Sec. 2.4.1 and the results are shown in Fig. 6.9a. The measurements were perfo-
rmed with an axial secular frequency of ωz = 2π·1 MHz up to an ion-wire distance of 120 μm. The heating of the axial mode increased

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:23.988Z
- **Text Length:** 172270 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
