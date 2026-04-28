# PDF Document: (High Voltage Control - 2010 Innsbruck) Quantum non-demolition measurements and quantum simulation.pdf

**File Path:** (High Voltage Control - 2010 Innsbruck) Quantum non-demolition measurements and quantum simulation.pdf

**Processed Date:** 2026-02-10T18:18:45.126Z

**File Size:** 5383.84 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 83

**Collection:** Multiplexing > Ion Shuttling

---

## Extracted Text Content

Quantum non-demolition measurements and quantum simulation
Thesis submitted to the Faculty of Mathematics, Computer Science and Physics
of the Leopold-Franzens University of Innsbruck in partial fulﬁllment
of the requirements for the degree of Doctor rerum naturalium by
Gerhard Kirchmair
Innsbruck, July 2010

2

Abstract
Quantum information processing (QIP) has developed into one of the “hot topics” in physics during the last decade. More and more experiments appeared aiming at the realization of a quantum computer and/or quantum simulations. Strings of ions stored in a Paul trap are currently one of the most promising systems for realizing quantum algorithms. The great challenges ion traps are facing is the realization of robust high ﬁdelity operations, scalable traps and the combination of all DiVincenzo criteri-
a in one system.
This thesis reports on the realization of simple QIP sequences and a quantum simulation with trapped 40Ca+and 43Ca+ions. For both isotopes the quantum bit (qubit) is encoded in an optical transition. It consists of the ground state S1/2 and the metastable excited state D5/2. The isotope 43Ca+has a nuclear spin of I = 7/2 and thus exhibits a very complicated level structure. The advantage of this isotope is that hyperﬁne levels can be used as a robust memory for quantum information.
In the framework of this thesis a high ﬁdelity Mølmer-Sørensen gate operation was implemented. Two ion Bell states and three ion GHZ states were created with a respective ﬁdelity of 99.3% and 98.4% using 40Ca+ions. It was demonstrated that the Mølmer-Sørensen gate operation works nearly as well for ions cooled to the ground state as for ions in thermal states of motion. The ﬁdelity achieved for thermal ions was still 98.4%. A thorough experimental analysis of the gate mechanism indicated possible -
error sources.
A combination of four DiVincenzo criteria (initialization, long coherence times, a universal set of gates, readout) was realized by utilizing 43Ca+hyperﬁne states. Bell states, created on the optical qubit, were stored in the qubit S1/2, F = 4, mf = 0 ↔ S1/2, F = 3, mf = 0 for 20 ms.
The experience gained with the entangling operation rendered it possible to do non-demolition two-qubit measurements. The non-demolition measurements were used to experimentally test hidden variable theories, more precisely the Kochen Specker theorem. The experiments conducted showed that hidden variables assuming non-contextuality of measurements cannot reproduce the behavior of quantum systems. This was proven by violating an inequality akin to Bell tests. The experimental results also demonstra-
ted the state-independence of the Kochen Specker argument. A possible compatibility loophole was closed by taking into account experimental errors in the theory. The resulting modiﬁed equation was found to be violated in our experiments.
Finally, a proof of principle quantum simulation of the Dirac equation was implemented. Position and momentum of the Dirac particle were mapped onto the respective quadrature components of the ion trap harmonic oscillator. A new method to measure the expectation value of position and momentum was implemented. The particle trajectories obtained showed eﬀects like Zitterbewegung. Using the high degree of control available in the experiment speciﬁc initial states were created showing diﬀerent traject-
ories.
i

Abstract ii

Zusammenfassung
Quanteninformationsverarbeitung (QIV) hat sich in eines der meist diskutierten Themen in der Physik im letzten Jahrzehnt entwickelt. Immer mehr Experimente werden gebaut, die darauf abzielen, einen Quantencomputer oder Quantensimulator zu realisieren. Besonders Ionen, gespeichert in einer Paul-Falle, geh¨oren zu den vielversprechendsten Systemen, um Quanten-Algorithmen zu realisieren. Die großen Herausforderungen, die es bei Ionenfallen zu l¨osen gilt, sind die Realisierung von Quantengattern mit -
hoher Gu¨te, der Bau von skalierbaren Fallen und die Kombination aller DiVincenzo Kriterien in einem System.
Die vorliegende Arbeit beschreibt die Realisierung von einfachen Sequenzen zur QIV und zu Quanten-simulation mit 40Ca+ und 43Ca+ Ionen. Bei beiden Isotopen erfolgt die Kodierung des Quanten-Bits (Qubit) in einem sogenannten optischen Qubit, bestehend aus dem Grundzustand S1/2 und dem metastabilen angeregten Zustand D5/2 . Das Isotop 43Ca+ hat einen Kernspin von I=7/2 und daher ein sehr kompliziertes Termschema. Der Vorteil dieses Isotops ist, dass Hyperfein Niveaus, sogenannte ”Uhrenu¨berg¨ange”, -
als robuste Speicher fu¨r Quanteninformation verwendet werden k¨onnen.
Im Rahmen dieser Doktorarbeit wurde ein Mølmer-Sørensen Gatter hoher Gu¨te realisiert. Es wurden mit diesem Gatter Bell-Zust¨ande mit eine Gu¨te von 99.3% und GHZ-Zust¨ande, bestehend aus drei Ionen, mit einer Gu¨te von 98.4% hergestellt. Weiters wurde gezeigt, dass das MølmerSørensen Gatter auch mit Ionen funktioniert, die nicht in den Grundzustand geku¨hlt wurden. Die erreichte Gu¨te unter diesen Voraussetzungen betrug immer noch 98,4%. M¨ogliche Fehlerquellen der Gatter Operation wurden durch e-
ine gru¨ndliche Untersuchung quantiﬁziert.
Durch Verwendung von 43Ca+ Hyperfein-Zust¨anden war es m¨oglich, vier der fu¨nf DiVincenzo Kriterien (Initialisierung, lange Koh¨arenzzeiten, universeller Satz an Gattern, Zustands- Detektion) in einem System zu vereinen. Bell Zust¨ande, die auf dem optischen Qubit erzeugt wurden, konnten ins Hyperfein-Qubit S1/2, F = 4, mF = 0 ↔ S1/2, F = 3, mF = 0 u¨bertragen werden und fu¨r mehr als 20 ms gespeichert werden.
Die mit den Gatter Operationen gewonnene Erfahrung erm¨oglichte die Realisierung von nicht destruktiven Quantenmessungen. Diese nicht-destruktiven Messungen wurden dazu verwendet um sogenannte Theorien versteckter Variablen zu testen. Die durchgefu¨hrten Experimente zeigten, dass Theorien versteckter Variablen, aufbauend auf nicht kontextuellen Messungen, quantenmechanische Systeme nicht richtig beschreiben. Dies wurde gezeigt durch Verletzung einer Ungleichung sehr ¨ahnlich der Bellschen Ungleich-
ung. Weiters ergaben die Messungen, dass die Verletzung der Ungleichung unabh¨angig vom Quantenzustand ist. Das Kompatibilit¨atsschlupﬂoch wurde geschlossen durch Einbeziehen der experimentellen Fehler in die Theorie.
Letztendlich wurde eine Quantensimulation der Dirac Gleichung experimentell realisiert. Ort und Impuls des simulierten Teilchens wurden auf die betreﬀende Quadraturkomponente des har-
iii

Zusammenfassung
monischen Oszillators abgebildet. Eine neue Methode wurde verwendet, um den Erwartungswert des Orts und Impuls des simulierten Teilchens zu bestimmen. Die gemessene Teilchentrajektorien zeigten relativistische Eﬀekte wie Zitterbewegung. Durch Ausnu¨tzen der außergew¨ohnlichen experimentellen Kontrolle konnten verschiedene Anfangszust¨ande erzeugt werden die unterschiedliche Trajektorien zeigten.

Contents

Abstract

i

Zusammenfassung

iii

1. Introduction

1

2. Trapped calcium ions as qubits

5

2.1. Quantum computation and quantum bits . . . . . . . . . . . . . . . . . . . . . . . 5

2.2. Quantum harmonic oscillator and phase space . . . . . . . . . . . . . . . . . . . . . 10

2.3. Atomic Structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13

3. Laser-ion interaction

19

3.1. Ion laser Hamiltonian . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19

3.2. Non-resonant interactions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21

3.3. The S1/2 → D5/2 transition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23 3.4. Microwave transitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25

3.5. Mølmer-Sørensen gate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25

3.6. Creating a coherent displacement . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30

4. Experimental setup

33

4.1. Linear ion trap and electrode wiring . . . . . . . . . . . . . . . . . . . . . . . . . . 33

4.2. Vacuum vessel . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35

4.3. Magnetic ﬁeld coils . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36

4.4. Optical access and single ion addressing . . . . . . . . . . . . . . . . . . . . . . . . 36

4.5. Fluorescence detection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37

4.6. Laser system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40

4.7. Computer control and RF generation . . . . . . . . . . . . . . . . . . . . . . . . . . 45

5. Experimental techniques

47

5.1. Loading ions by photoionization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47

5.2. Experimental sequence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48

5.3. Referencing the 729 nm laser to the ions . . . . . . . . . . . . . . . . . . . . . . . . 51

5.4. Implementation of arbitrary qubit operations and ion shuttling . . . . . . . . . . . 52

5.5. State tomography . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55

Contents

6. Entangling calcium ions

57

6.1. High ﬁdelity two ion Bell states . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57

6.2. Three ion entangled states and arbitrary operations on three qubits . . . . . . . . 67

6.3. High ﬁdelity entanglement of 43Ca+ hyperﬁne clock states . . . . . . . . . . . . . . 70

6.4. Comparison between 40Ca+ and 43Ca+. . . . . . . . . . . . . . . . . . . . . . . . . 74

7. Experimental test of quantum contextuality

77

7.1. The Kochen-Specker theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78

7.2. Experimental realization of QND measurements . . . . . . . . . . . . . . . . . . . . 81

7.3. Testing the Kochen Specker inequality . . . . . . . . . . . . . . . . . . . . . . . . . 83

7.4. Including imperfect measurements to close loopholes . . . . . . . . . . . . . . . . . 86

7.5. Experimental results on imperfect measurements . . . . . . . . . . . . . . . . . . . 89

8. Quantum simulation of the Dirac equation

91

8.1. Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91

8.2. The Dirac equation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92

8.3. Experimental realization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94

9. Summary and Outlook

101

A. The Kochen Specker measurements

105

A.1. Detailed results for the Kochen Specker measurements . . . . . . . . . . . . . . . . 105

A.2. Hiding the second ion in the Kochen Specker measurements . . . . . . . . . . . . . 106

B. Methods for simulating the Dirac equation

107

B.1. Constructing a pure negative energy spinor . . . . . . . . . . . . . . . . . . . . . . 107

B.2. Setting the phase of the Displacement pulse . . . . . . . . . . . . . . . . . . . . . . 107

C. Physical and optical properties of Calcium

109

D. Journal Publications

111

1. Introduction
Quantum mechanics (QM) was among the greatest developments in the twentieth century. The foundations of this theory were established around 1925 by Werner Heisenberg, Erwin Schr¨odinger, Max Born, Wolfgang Pauli, Niels Bohr, Albert Einstein, Paul Dirac and many others. Initially invented for a better understanding of atomic spectra, quantum mechanics opened the door to a completely new ﬁeld in physics. Nowadays it successfully explains chemical processes, material behavior and semiconductor device-
s, enabling the development of the modern computer technology. Computers in turn helped to numerically solve quantum mechanical problems which could not be solved analytically. In the following decades physicists realized that this approach has its limits as quantum systems consisting of only a few quantum bits (qubits) are already impossible to simulate with current computer technology.
In the early 1980’s Paul Benioﬀ [1] and Richard Feynman [2] came up with the idea of simulating one quantum system by using another one. This so called quantum computer would only need an amount of qubits on the same order as the simulated system. Back in the 80’s these ideas where considered as mere “Gedankenexperimente“ and not as realistic scenarios that could be developed into experiments. It was considered impossible to use a single atom as a carrier for quantum information. Richard Feynman s-
aid in a lecture in 1986: ”. . . we are to be even more ridiculous later and consider bits written on one atom instead of the present 1011 atoms. Such nonsense is very entertaining to professors like me. I hope you will ﬁnd it interesting and entertaining also.“
Today such procedures are experimental routine and quantum information processing as well as quantum simulation are major research ﬁelds in theoretical and experimental physics. The big interest was sparked by the discovery of a factorization algorithm on a quantum computer, which is much faster than its classical counterpart, by Peter Shor in 1994 [3]. A large scale experimental realization of this algorithm would render public key encryption useless. Two years later Lov K. Grover found that a qu-
antum computer can search unsorted databases faster than a classical computer [4]. Barenco et. al. [5] as well as DiVincenzo [6] showed in 1995 that an arbitrary quantum algorithm can be constructed with a limited set of single and two-qubit gates. This “universal“ set of operations is similar to the classical approach of constructing logic circuits out of NAND gates. To actually build a quantum computer certain prerequisites have to be met. These requirements were formulated by DiVincenzo [7] and-
 are often called DiVincenzo criteria, according to which any quantum computer implementation requires
1. A scalable physical system with well characterized qubits
2. The ability to faithfully initialize the qubit to a simple well deﬁned state
3. Long relevant coherence time, much longer than the gate operation time
4. A “universal“ set of quantum gates
1

Introduction
5. Qubit speciﬁc measurement capability
Later two additional requirements were added to incorporate quantum communication between distant nodes of a quantum network
6. The ability to interconvert stationary and ﬂying qubits
7. The ability to faithfully transmit ﬂying qubits between speciﬁed locations
Throughout the last decade research has shown thtat there are several experimental implementations that fulﬁll most or even all of these points and might be considered as candidates for a quantum computer: nuclear spins [8], superconducting Josephson junctions [9, 10], quantum dots [11], neutral atoms [12], photons [13] and ions [14]. While nuclear spins are the most advanced system when it comes to an actual implementation of algorithms and the number of qubits [15], they suﬀer from the inability-
 to create pure states. This prevents scaling of this technology to higher numbers of quantum bits. Solid state implementations oﬀer the promise of easy scalability akin to integrated circuits as soon as one is able to reliably manufacture and control the basic building blocks. In the last few years these devices made remarkable progress realizing Bell states [16], two-qubit gates [17] and quantum process tomography [18]. The limiting factor at the moment is the coherence time of a few microsecond-
s [19]. Recent experiments with neutral atoms demonstrated the extraordinary control physicists have over single atoms [20] and ultracold ensembles [21]. These systems seem to be good candidates for quantum simulations of solid state models [22].
One of the most promising systems for realizing a quantum computer are trapped ions [23]. They already fulﬁlled three of the ﬁve DiVincenzo criteria even before they were considered as a system for quantum information processing (QIP): initialization [24], readout [25–27] and long coherence times [28]. Laser-cooled strings of ions had been observed[29–31] qualifying as well characterized qubits which could be used as a quantum register. The trapping of charged particles in electric ﬁelds was ﬁrst -
proposed by K.H. Kingdon in 1923 [32]. Radio frequency traps were developed by Wolfgang Paul in the 1950’s and a single ion was trapped the ﬁrst time by Neuhauser et al. in 1980. The trapping of ions had a huge inﬂuence on atomic physics and sparked the development of optical clocks and mass spectrometers. Furthermore it opened up the possibility of controlling well-isolated quantum systems for processing quantum information. This point was ﬁrst noticed in the seminal paper by Peter Zoller and Ign-
acio Cirac in 1995 [14]. They proposed to use the collective motion of an ion string as a bus system to couple individual ions. A series of laser pulses acting on one ion at a time can be used to realize a two-qubit gate. This approach is also scalable as the resources increase only polynomially with the number of qubits. Within the same year a two-qubit gate was demonstrated [33] with a single ion which set the starting point for quantum information processing with trapped ions.
In the last years ion trap experiments have shown a tremendous control of experimental parameters. This control was the key to demonstrate the ﬁrst steps towards a quantum computer and/or quantum simulations. Meanwhile all seven DiVincenzo criteria have been achieved in at least proof of principle experiments. Some of the milestones are the investigation of several two-qubit gates [34–40], deterministic quantum teleportation with atoms [41, 42], quantum error correction [43], entanglement puriﬁcat-
ion [44], the creation of six [45] and eight ion entangled states [46]
2

and the implementation of simple algorithms like the Deutsch-Josza algorithm [47] and Grovers search algorithm [48]. Along the way, several analysis techniques were developed like quantum state tomography and quantum process tomography [49, 50]. The so called decoherence-free subspace was investigated [51] and universal ion-trap quantum computation with decoherence-free qubits was realized [52]. Ions trapped in separate traps have been entangled [53] and quantum teleportation has been demonstrated-
 [54] fulﬁlling the additional DiVincenzo criteria.
Today the big challenges on the road towards an ion trap quantum computer are the following: scaling current technology to a few ten or hundred qubits; combining all building blocks in one system; improving all operations to enter the fault tolerant regime. Scaling the trap technology to a high number of ions is a diﬃcult but important task as for a real commercially useful implementation of Shor’s factoring algorithm some 105 qubits are needed. Several research groups are currently constructing a-
nd testing miniaturized traps but progress is slow. Recent experiments have demonstrated the combination of the basic DiVincenzo criteria in one experiment [55, 56].
Entering the fault tolerant regime is important for realizing a large scale quantum computer capable of doing arbitrary long quantum algorithms. For this purpose quantum error correction protocols similar to classical computation are indispensable. The ﬁrst protocols were discovered by Peter Shor [57] and Andrew Steane [58]. Furthermore, Peter Shor showed that it is possible to realize quantum algorithms with arbitrarily small errors even when using imperfect operations [59]. This is possible as s-
oon as all operations enter the fault tolerant regime which means errors below 10−2 . . . 10−4. The exact threshold depends on the overhead in the number of qubits one is willing to accept [60–62].
Even though all building blocks for an ion trap quantum computer have been demonstrated it will still take time until a large scale functioning quantum computer will become reality. Nevertheless, ion trap systems might soon outperform classical computers when it comes to quantum simulations. Here the demands on the quality of the operations and the number of qubits is much less. Decoherence might be even used to mimic the eﬀect of an environment. Recently a proof of principle experiment showed the-
 simulation of a quantum magnet [63], demonstrating a phase transition from a paramagnetic to a ferromagnetic order with two-qubits. Another proof of principle experiment, the simulation of the free Dirac equation will be presented in chapter 8. So even relativistic quantum eﬀects might be simulated with a quantum computer. Soon experiments will be able to control and do simulations with 10-20 interacting qubits which is already a next to impossible problem for a classical computer.
The high control over experimental parameters in ion traps opens up the possibility to do fundamental tests of QM. These test are important as it is still debated whether quantum mechanics can be explained with so called hidden variable models. Hidden variables were introduced as some physicists were unhappy with the Copenhagen interpretation of quantum mechanics which only predicts the probabilities for the outcome of a measurement. Another intriguing attribute of QM are its nonlocal features, e.-
g. a measurement of two entangled particles shows correlations which are bigger than classically possible. This was ﬁrst discovered by Einstein, Podolsky and Rosen in their famous paper from 1935 [64]. This point lead physicists to the conclusion that QM is incomplete and other unknown physical phenomena beyond QM have to be included. In 1964 John Bell showed that hidden variable theories have to be non local to explain all eﬀects of quantum mechanics [65].
3

Introduction
He presented his famous Bell inequality which is satisﬁed by local hidden variables but violated by QM. Several experiments have meanwhile proven that QM violates Bell’s inequality [66–69]. Another class of hidden variable theories are non-contextual theories which are the subject of a theorem developed by Kochen, Specker and Bell [70–72] in the 60’s. Recent experiments [73–75], one of them presented in Chapter 7, have shown that also this model cannot explain QM. So far it seems there is no bette-
r theory than QM covering all observed phenomena.
The thesis is structured as follows: Chapter 2 contains a review of the main ideas and terms of quantum information processing followed by a quick review of the quantum harmonic oscillator. The level structure of 40Ca+ and 43Ca+ ions is described and possible choices for qubits are illustrated. Chapter 3 summarizes the interaction of the ions with electromagnetic ﬁelds with a special focus on the Mølmer-Sørensen entangling gate. Chapter 4 describes the apparatus consisting of the vacuum chamber, t-
he lasers and the electronic control. Chapter 5 explains standard experimental techniques necessary for running the apparatus and realizing the experiments presented in the subsequent chapters. Chapter 6 describes the realization of an entangling operation working on 40Ca+ and 43Ca+ ions. Bell states with ﬁdelities as high as 99.3% were created and the gate operation was analyzed in detail. Furthermore we achieved an entanglement of 40Ca+ ions in thermal states of motion and a mapping of the entan-
glement from the optical qubit onto the hyperﬁne qubit in 43Ca+F˙ inally three-ion entangled states with 40Ca+ were created and the ﬁrst block of a new scheme for universal quantum computation with trapped ions was implemented. Chapter 7 details on a test of the non-contextual hidden variable theory proposed by Kochen, Specker and Bell in a two ion system. Data are presented that demonstrate that QM measurements are contextual even in the presence of experimental noise. Chapter 8 describes the rea-
lization of an experiment with a single ion simulating the free Dirac equation. The particle position measured as a function of time shows Zitterbewegung and other relativistic eﬀects. Chapter 9 concludes the thesis with a summary and outlook to future experiments.
The main ﬁndings of this thesis were published in the references [75–78].
4

2. Trapped calcium ions as qubits

This chapter will quickly review the mathematical notation for a two-level system and the basic ideas of quantum computation. The mathematical excursus is continued by a description of a quantum harmonic oscillator with an emphasis on canonical variables and the phase space description. The energy level structure of the Calcium isotopes 40Ca+ 43Ca+ will be outlined and a number of possible implementations of a qubit in calcium ions will be shown.

2.1. Quantum computation and quantum bits
Inspired by [79] this section will present the mathematical description of a two-level system and will give a brief summary on quantum computation. It will introduce the notions “qubit“ and “entanglement“ as well as single and two-qubit operations.

2.1.1. Qubits
For a real physical implementation of a quantum computer, quantum information has to be stored and manipulated. Akin to classical computation we will make use of two states of a system. These states will represent the quantum states |↓ and |↑ instead of the logical 0 and 1. In trapped ions, a qubit can be realized by identifying two long-lived atomics states with the qubit states |↓ and |↑ . The main diﬀerence from the classical case is that the system cannot only be in one of the two states but a-
lso in a linear superposition

|Ψ = α |↓ + β |↑

(2.1)

with α and β complex numbers and the normalization condition |α|2 + |β|2 = 1. Such a two-level system is called quantum bit/qubit in analogy to the classical case. The numbers |α|2 and |β|2 represent the probability of measuring the qubit in state |↓ or |↑ . A single measurement will just show either |↓ or |↑ . Only by many repetitions the full information about a quantum state can be acquired.
A convenient and often used form of rewriting equation (2.1) is

|Ψ = cos

θ 2

|↓ + sin

θ 2

eiφ |↑

(2.2)

where a global phase factor was dropped that is not observable in experiments. Thus a pure quantum state is completely described by two real numbers θ and φ. This representation allows us to visualize the qubit’s state on sphere a with unit radius, where θ and φ are the rotation angles of the Bloch vector. This sphere, called Bloch sphere, is shown in ﬁgure 2.1.

5

Trapped calcium ions as qubits

Figure 2.1.: Bloch sphere representation of a pure qubit state |Ψ described by the rotation angles θ and φ.

The state description can be extended to N-qubits by using a set of basis states composed of the

2N product states

|n = |iN ⊗ . . . ⊗ |i2 ⊗ |i1

(2.3)

with i {0, 1}. With the vectors |n we can now describe every possible state consisting of N qubits

as
2N −1

ΨN =

αn |n

(2.4)

n=0

where the state amplitudes αn have to satisfy the normalization condition

2N −1 n=0

|αn|2

=

1.

Unfortunately, the convenient Bloch sphere representation is not extendable to more than one

qubit.

2.1.2. Quantum gates

A universal language to describe quantum algorithms is the quantum circuit model. In analogy to classical computing, where a computation is built up of logic gates, in this model a quantum computation consists of concatenations of elementary quantum operations acting on the qubits. It can be shown, that there exists a small set of single qubit operations and a universal two-qubit gate that can be used to perform arbitrary quantum algorithms [79].
The simplest interaction acting on an N-qubit system is a single qubit operation. These operations have to preserve the norm of the state and can be conveniently described by using the Pauli matrices plus the Identity matrix

σx =

01 10

, σy =

0 −i i0

, σz =

10 0 −1

, Iˆ =

10 01

.

(2.5)

In the Bloch sphere representation, single qubit operations can be described as a rotation around the x, y, z axis or an arbitrary axis φ in the equatorial plane by an angle θ. The rotation matrixes

6

2.1 Quantum computation and quantum bits

are given by

Ux(j)(θ)

=

e−i

θ 2

σx

=

Uy(j)(θ)

=

e−i

θ 2

σy

=

Uz(j)(θ)

=

e−i

θ 2

σz

=

cos

θ 2

−i

sin

θ 2

−i

sin

θ 2

cos

θ 2

cos

θ 2

−

sin

θ 2

sin

θ 2

cos

θ 2

e−i

θ 2

0

0

ei

θ 2

U (j)(θ, φ)

=

e−i

θ 2

σφ

=

cos

θ 2

−ie−iφ

sin

θ 2

−ieiφ

sin

θ 2

cos

θ 2

,

(2.6) (2.7) (2.8) (2.9)

where σφ = cos(φ) σx + sin(φ) σy and j denote the ion subject to the rotation. Setting φ = 0 in U (i)(θ, φ) results in a Ux(i)(θ) rotation and similarly setting φ = π/2 results in Uy(i)(θ). If we
can apply these rotations to every qubit of our quantum computer it is suﬃcient to introduce one

particular type of multi-qubit operation to construct all arbitrary operations. There are many

diﬀerent choices for universal gate operations. The best known example is the controlled -NOT

(CNOT) operation where the state of the target qubit is ﬂipped or not depending on the state of

the control qubit. The matrix representation of this operation is





1000

UC N OT

= 

0 0

1 0

0 0

0 1



0010

(2.10)

where the matrix is notated with respect to the basis order {|↓↓ , |↓↑ , |↑↓ , |↑↑ }. Another im-

portant two-qubit operation is the Mølmer-Sørensen [80, 81] (MS) gate operation. This gate was

implemented in this thesis and will be further discussed theoretically in chapter 3 and experimen-

tally in chapter 6. Its matrix representation is





10 0i

UxM S

π 2

=

e−i

π 4

σx

⊗σx

=

1

− 2

i



0 0

1 −i

−i 1

0 0

 .

i0 01

(2.11)

This gate introduces collective spin ﬂips on two ions and can be extended to an N-qubit gate
(see chapter 3.5). The normalization factor in front of the matrix is required because two-qubit operations have to preserve the norm such that Ug†ateUgate = Iˆ. The Mølmer-Sørensen gate is completely equivalent to a CNOT operation up to some single qubit rotations.

2.1.3. Quantum state measurement
At the end of a quantum algorithm/simulation during which the system evolved according to a unitary operation the outcome needs to be determined. This requires a detection of the qubit states by a projective measurement. Its experimental implementation for the case of trapped ions will be

7

Trapped calcium ions as qubits

discussed in chapter 4.5. Mathematically this process can be described by a set of measurement operators {Mm} such that the results m of a measurement occur with a probability

p(m) = Ψ| Mm† Mm |Ψ .

(2.12)

The state of the system after the measurement is one of the eigenstates of the measurement operator

Ψ˜ =

Mm |Ψ Ψ| Mm† Mm |Ψ

(2.13)

The natural measurement basis for trapped ions are the projectors onto the energy eigenstates.
Thus one can only measure the σz components of every qubit state Ψ by a simple ﬂuorescence detection. If projections onto other spin components A = nσ are of interest (where n is the
direction of the desired spin component) a modiﬁed technique has to be employed.
The measurement basis can be changed by applying a unitary state transformation U prior to the state detection on each qubit individually. This means the subspace HA+ = {ψ|Aψ = ψ} is mapped onto the subspace Hσ+z = {ψ |σzψ = ψ }. Thus a σz measurement on the transformed state |Ψ = U |Ψ is equivalent to a measurement of the desired observable A on the original state
|Ψ . The unitary state transformation U satisﬁes

A = U †σzi U

(2.14)

and is given by a rotation around an axis on the Bloch sphere that is both perpendicular to ez and to n. The ﬁnal inverse operation U † maps the projected state onto an eigenstate of the observable A which is in general not necessary. Nevertheless it becomes important when one is interested in doing non-demolition measurements in succession (see chapter 7). The mapping on an eigenstate ensures that subsequent commuting measurements will still determine the right value.
An additional complication appears if e.g. a spin correlation like σz ⊗ σz, the so called parity, of a two ion state should be measured. If exactly this observable should be determined in a nondemolition measurement it is necessary to apply entangling two-qubit gates together with single qubit operations, that map this information on a single qubit. An example for such an operation U is a CNOT gate which will map the parity of the two ions on the state of the target ion.

initial state
|↓↓ |↓↑ |↑↓ |↑↑

mapped state
|↓↑ |↓↓ |↑↓ |↑↑

inital state σz ⊗ σz
(-1) · (-1) = +1 (-1) · 1 = -1 1 · (-1) = -1 1 · 1 = +1

mapped state I ⊗ σz +1 -1 -1 +1

By measuring only the state of the second ion after the mapping, it is ensured, that the parity measurement reveals a single bit of information. It is important to note, that such a measurement is not equivalent to measuring σz on every ion and correlating the results afterwards to get σz ⊗ σz. In the latter case one would not only get the information whether the ions are in the same or opposite spin state but also in which state each ion is.

8

2.1 Quantum computation and quantum bits

2.1.4. Entanglement

Called Spooky Action at a Distance [64] by Einstein, Podolsky and Rosen, entanglement brings up

some of the most striking features of quantum mechanics. Let us consider an entangled state for

two qubits, the so called Bell state

|Ψ = |↑↑ √+ |↓↓ 2

(2.15)

which was created in several experiments described in this thesis (see chapter 6). Whenever the

state of one qubit of this entangled state is measured, one will ﬁnd a perfectly correlated result

when measuring the other. If the ﬁrst qubit is in the state |↓ /(|↑ ) the second qubit will be in

|↓ /(|↑ ) or vice versa so both qubits will always be found in the same state. This behavior will

violate one or both of the assumptions Einstein and Co. made for a physical realistic theory:

• Realism: The assumption that the physical properties of a system have deﬁnite values which exist independent of observation

• Locality: The assumption that a measurement on one particle does not inﬂuence the result of the measurement on the second particle.

These assumptions seem to be intuitively plausible but nevertheless experiments conducted with

these states [66] show that they disobey the so called Bell inequality [72]. This then leads to

the conclusion that they have to disobey one or both of the upper points. There is still a lot of

discussion going on about the results of these experiments that go beyond the scope of this work.

More information about this subject can be found in references [82–84].

A more rigorous criterion for entangled states can be phrased as: A state is entangled if its

composite wavefunction cannot be written as a product of wavefunctions of the subsystems. Math-

ematically this means

|ΨAB = |ΨA ⊗ |ΨB .

(2.16)

Creating entangled states is nowadays a standard procedure which can be employed in several diﬀerent physical systems [46, 85–87]. A single application of a Mølmer-Sørensen-gate to |↓↓ creates already an entangled state of the form shown in equation (2.15) They can be used as resources for secure quantum communication [88] or certain types of quantum computation [89]. Entanglement seems to appear in most quantum algorithms however it is still a matter of debate if the power of an algorithm comes f-
rom entanglement or not.
In chapter 7 of this thesis another peculiar feature of quantum-mechanics, the so called contextualtity of measurements, will be discussed. Contextualtity of measurements means that certain types of measurements inﬂuence another even though they should not. The states measured inherit entanglement not from the beginning but entanglement will be created during the measurement process. Entanglement plays a central role in quantum mechanics.

2.1.5. Density matrix description
So far the description of a qubit is suﬃcient for pure states but fails for states which are mixed or not completely known. Here the density operator language provides a convenient means to describe these systems. All postulates for quantum mechanics regarding state description, state

9

Trapped calcium ions as qubits

evolution and measurement can be reformulated in terms of density operators [79]. For a system which can be in pure states Ψi with a probability pi the density operator is given by

ρ = pi |Ψi Ψi| .
i

(2.17)

One has to note that the probabilities pi are only well deﬁned for an ensemble of states. A density matrix has to satisfy the conditions

1. the trace of ρ is equal to one

2. ρ is a positive operator.

For a d-dimensional quantum system it is possible to expand the density matrix ρ using a basis of d2 hermitian matrices that are mutually orthogonal. A handy choice for a single qubit are the Pauli matrices together with the identity

ρ

=

1 2

λiσi.

i=x,y,z,Iˆ

(2.18)

The parameters λi which completely characterize the state are given by

λi = T r{ρσi}.

(2.19)

So each of these parameters corresponds to the outcome of a projective measurement determining the expectation values of the Pauli operators σi . This will become handy for reconstructing the quantum state in the experiment with a technique called state tomography (chapter 5). As one can see from equation (2.20) it is suﬃcient to determine all λi to get the full knowledge of a quantum state. The parameters λi uniquely deﬁne a vector on the Bloch sphere (similar to ﬁgure 2.1) but not only the angle-
s but also the length of the vector is now of importance. The length of the vector is given by x,y,z λ2i and it shows the purity of a state. A pure state has a unit length vector, a partially mixed state has a vector with a length smaller than 1 and a completely mixed state has a vector with a length equal to zero.
This description can be straightforwardly extended to multi-qubit systems. The density matrix for a N-qubit system is written in terms of tensor products of the Pauli matrices

ρN

=

1 2N

λi1,i2...iN σi1 ⊗ σi2 ⊗ . . . ⊗ σin .

i1,i2...iN ,=x,y,z,Iˆ

(2.20)

Normalization requires that λI,I...I = 1 such that 4N −1 parameters deﬁne the state in the Hilbertspace. Each mi1,i2...iN corresponds again to a projective measurement determining σi1 ⊗ . . . ⊗ σin .

2.2. Quantum harmonic oscillator and phase space
An ion in a trap is one of the best model systems for a perfect quantum harmonic oscillator. Usually the harmonic oscillator is only used to mediate interactions between the ions but is not

10

2.2 Quantum harmonic oscillator and phase space
regarded by itself as an interesting system. In chapter 8 it will be shown that using a single ion in the harmonic oscillator of the trap one can conduct a simulation of the Dirac Equation. The information of the position and the momentum of the Dirac particle will be encoded in the position and momentum observables of the harmonic oscillator. Hence this section will reviwe the analysis of a quantum harmonic oscillator with an emphasis on the phase space description. At the end a classical driving-
 force will be introduced and the eﬀects on the state of the oscillator will be shown. This chapter is strongly inspired by [37, 90, 91].

2.2.1. Harmonic oscillator hamiltonian

A quantum harmonic oscillator is a particle of mass m moving in a 1-d quadratic potential V (xc) = mω2x2c/2. Classically the state of a harmonic oscillator is deﬁned by its position and momentum coordinates xc and pc. A classical harmonic oscillator is best described in phase space which is given by the complex plane spanned by the variable xc + ipc. The motion of the particle can be described by a point in phase space which is rotating with an angular frequency ω along an ellipse
centered at the origin. In quantum mechanics the position and momentum will be replaced by the
observables xˆ and pˆ. They obey the commutation relation

[xˆ, pˆ] = i .

(2.21)

With these operators the Hamiltonian for a quantum harmonic oscillator reads as

Hm

=

pˆ2 2m

+

1 2

mω2xˆ2

.

Introducing the non-hermitian operator a and its conjugate a† such that

(2.22)

xˆ = (a + a†)∆

and

pˆ

=

i

a†

− 2

a

∆

(2.23)

with the characteristic length ∆ = /(2mω) one can rewrite equation (2.22) and arrive at the well known quantized version of the harmonic oscillator Hamiltonian

Hm =

ω

a†a

+

1 2

.

(2.24)

The spectrum of this Hamiltonian is a ladder of equidistant energy levels EN with a spacing of ω starting at the ground state energy of E0 = ω/2. The corresponding wavefunctions |N are
called Fock States and will obey the following relations

a†

|n

√ = n+1

|n + 1

a |n = √n |n − 1

(2.25) (2.26)

11

Trapped calcium ions as qubits

a

Im{a}

D

h

|a|

2D

b Im{a}

Re{a}

wt
Re{a}

Figure 2.2.: (a)Phase space representation of a coherent state |α . The coordinates of the center of the disk correspond to x and p . The size of the disk represents the variance of the state here with unit length along p and x. (b) Time evolution of a coherent state. The state rotates with the trap frequency ω around the origin.

and

√ a†n |0 = n! |n a†a |n = n |n .

(2.27) (2.28)

Often a and a† are called lowering and raising operators, because they can be used to climb up and down the ladder of states. The spatial extension of the ground state |0 is given exactly by ∆.

2.2.2. Driven quantum harmonic oscillator

If a harmonic oscillator is driven by a classical force

F (t) = A

sin(ωdrivet + φ) =

A 2i

(ei(ωdrive

t+φ)

−

e−i(ωdrive t+φ) )

(2.29)

the Hamiltonian is given by

Hforce = −xˆF (t).

(2.30)

The action of this force on the ground state of the harmonic oscillator can be best explained by changing into the interaction picture. A suitable transformation to do this is given by U |Ψ = |Ψ with U = eiHmt/ . The Hamiltonian in the interaction picture then reads as

Hfi orce = −∆(ae−iωt + a†eiωt)F (t).

(2.31)

For ω = ωdrive a resonance appears and using the rotating wave approximation the Hamiltonian

reduces to

Hfi orce

=

−

A∆ 2i

(ae−iφ

+

a†eiφ)

(2.32)

The evolution of the ground state under the action of this Hamiltonian is given by the unitary

operator

D(α) = eα∗a−αa†

(2.33)

12

2.3 Atomic Structure

with α = −A∆t/(2 )e−iφ. This propagator is a so called displacement operator. Applying it to the ground state of motion creates the coherent state |α

D(α) |0 = |α = e−|α2|/2

√αn |n .

n n!

(2.34)

This can be generalized to cover the displacement of a coherent state |β by using the Baker– Campbell–Hausdorﬀ relation D(α)D(β) = D(α + β)ei Im{αβ∗}

D(α) |β = D(α)D(β) |0 = ei Im{αβ∗}|α + β > .

(2.35)

A coherent state obeys the following relations

a |α = α |α α| a† = α∗ α|

(2.36) (2.37)

and

α| xˆ |α = 2∆ Re{α}

(2.38)

α| pˆ|α = ∆ Im{α}.

(2.39)

The real part of α corresponds to the mean position while the imaginary part corresponds to the mean momentum. A convenient way to display these states is a phase space diagram (see ﬁgure 2.2(a)) with α = xˆ + i pˆ with x in units of 2∆ and p in units of /∆. The variance for position and momentum is also given by ∆ as

δx = ∆ and δp = 2∆ .

(2.40)

A coherent state is the closest analogy to classical states one can achieve for a quantum harmonic oscillator and is hence called quasi-classical state. The state evolution, a rotation in phase space (see ﬁgure 2.2(a)), cannot be seen in ion trap experiments because the laser creating the displacement acts as a reference oscillator rotating with the coherent state. How to create a displacement operator with laser ﬁelds will be explained in chapter 3.

2.3. Atomic Structure
There are several ways to experimentally realize a good approximation of a two-level system. Ideally the ion has to be completely separated from the environment and should only interact with the laser. Experimentally this means, that the laser-ion coupling has to be much larger than any coupling to the environment. A suitable choice for a qubit are either hyperﬁne/Zeeman ground states or states connected by a forbidden transition. The element used to realize a qubit in this thesis is the single ch-
arged alkali earth ion Ca+. This section describes the relevant level structure of the two isotopes 40Ca+ and 43Ca+ as well as the qubits realized in these ions. A more detailed description of 40Ca+ can be found in [92] and [93] whereas for 43Ca+ the reference is [94].

13

Trapped calcium ions as qubits
Figure 2.3.: Detailed energy level scheme showing all Zeeman sublevels of the three lowest orbitals of the 40Ca+ ion. Laser light at 397 nm is used for Doppler-cooling, optical pumping and detection. The lasers at 866 nm, 850 nm and 854 nm pump out the D-states. An ultra-stable laser at 729 nm is used for manipulating the qubit encoded in the quadrupole transition, state preparation, optical shelving and ground-state cooling. The qubit is encoded in the states S1/2(mj = 1/2) and D5/2(mj = 3/2). Th-
e wavelength in air, natural lifetimes τ and the branching fractions (denoted as XX% for the respective transition) are taken from references [95–98].
Level scheme, Zeeman splitting and qubit choice
The coarse level structure for 40Ca+ and 43Ca+ is the same. The energy level schemes showing the lowest three orbitals of the valence electron for 40Ca+ and 43Ca+ can be seen in ﬁgure 2.3 and ﬁgure 2.4. The S1/2 ground state is connected via a 397 nm dipole transition with the P1/2 state and a 393 nm dipole transition with the P3/2 state. The P-levels both having a lifetime of about 7 ns exhibit a branching ratio such that one out of 14 decays populates the D-levels.1 To avoid population trapping -
in the long lived D-states one can use the dipole transitions at 854 nm, 850 nm and 866 nm to pump out these levels. These wavelengths connect the two D-states to either a P1/2 or P3/2 level via a dipole transition. A quadrupole transition at 729 nm connects the S1/2 and the D5/2 level. Since this transition is dipole-forbidden, the D5/2 level is metastable and has a lifetime of about 1.2 s which sets an upper time limit for the usefulness of a qubit encoded in this state.
Calcium 40 In a magnetic ﬁeld all levels split up into sublevels due to the Zeeman eﬀect (see ﬁgure 2.3). The splitting of the states is a few MHz for the magnetic ﬁelds typically used in experiments. Thus it is well resolved for the quadrupole transition. For all the other transitions the splitting is hidden within the linewidth of the transition. The S1/2 ground state splits up in two Zeeman sublevels with mS = ±1/2 and the D5/2 level splits up in six Zeeman sublevels with mD = ±1/2, ±3/2, ±5/2.-
 For
1An exact measurement of the P3/2 branching ratio measurements using QIP methods can be found in reference [95].
14

2.3 Atomic Structure

F dhfs(MHz) 2 205.6(1.6) 3 117.5(0.8) 4 -4.5(0.8) 5 -164.5(1.1)

P3/2

3 327.2(2) 4 -254.5(2)
397 nm

854 nm
P1/2
D5/2
866 nm
D3/2
729 nm

F dhfs(MHz) 1 41.5267(6) 2 34.9516(4) 3 24.6348(2) 4 10.0312(3) 5 -9.5858(3) 6 -35.1246(4)
2 317.3(1.7) 3 178.0(0.8) 4 -10.1(0.9) 5 -249.3(1.2)

3 1814.4046611(18) 4 -1411.2036253(14)

S1/2

Figure 2.4.: 43Ca+ level scheme showing the hyperﬁne splitting of the lowest energy levels. Hyperﬁne shifts δhfs of the levels are quoted in MHz (the splittings are taken from [94, 99, 100]). Laser light at 397nm is used for Doppler-cooling, optical pumping and state detection. The lasers at 866 nm, 850 nm and 854 nm pump out the D-states. An ultra stable laser at 729 nm is used for manipulating the qubit encoded in the quadrupole transition, state preparation, optical shelving and ground-state co-
oling.

a quadrupole transition changes in the magnetic quantum number of ∆m = 0, ±1, ±2 are allowed by the selection rules. This results in a total of ten possible transitions from S1/2 to D5/2.

One of these pairs of levels, the S1/2, mj = 1/2 together with the D5/2, mj = 3/2 was used as a qubit for the experiments described in this thesis. The only exception to this choice are some of the experiments presented in chapter 6.1 where the S1/2, mj = 1/2 level together with the D5/2, mj = 5/2 level was used. These kinds of qubit are often termed optical qubits because the transition frequency lies in the optical domain. As already mentioned, the sensitivity of the qubit on the environment, he-
re especially magnetic ﬁeld ﬂuctuations, is of importance. The dependence of the transition frequency on the magnetic ﬁeld B is given by

∆ωS→D = µB (ms gS1/2 − mD gD5/2 )B

(2.41)

where µB denotes the Bohr magneton and gS1/2 /gD5/2 the Lande-g-factor of the S1/2/D5/2 level. In the best case the lowest sensitivity one could get with respect to changes in the magnetic ﬁeld is 560kHz/G for the ∆m = 0 transitions which are usually used as a qubit. The employed S1/2, mj = 1/2 → D5/2, mj = 3/2 transition has a factor of two higher dependence but comes with the advantage that the coupling strength can be maximized by properly setting the polarization and direction of the laser lig-
ht with respect to the magnetic ﬁeld (see chapter 3). This eﬀectively reduces the time needed for operations.

15

Trapped calcium ions as qubits

Calcium 43

The isotope 43Ca+ is the only stable calcium isotope with a non-zero nuclear spin. It has a nuclear spin of I = 7/2. Its level scheme is shown in ﬁgure 2.4. The coupling between electronic angular momentum J and nuclear spin results in a hyperﬁne structure. The total angular momentum F can take on the values |J − I| ≤ F ≤ |J + I|. For the ground state of 43Ca+ we get two hyperﬁne states with F=3 and F=4 split by a frequency diﬀerence of 3.225 GHz [99]. The D state with J = 5/2 consists of 6 hyperﬁ-
ne states ranging from F=1 to F=6. In a magnetic ﬁeld all hyperﬁne levels split up in 2F + 1 Zeeman states.
This huge state manifold opens up several possibilities to encode a qubit. Two choices are implemented in the experiments conducted in this thesis. An encoding in the two hyperﬁne ground states termed hyperﬁne qubit or, similar to 40Ca+, an encoding using an optical qubit.
The ﬁrst choice is interesting because there is no limitation by spontaneous decay. Furthermore we can get a qubit which is insensitive to magnetic ﬁeld ﬂuctuations by choosing the mF = 0 sublevels of the two hyperﬁne ground states. This particular qubit was implemented in this thesis (see chapter 6). From the Breit-Rabi formula [101] one can directly obtain that these sublevels exhibit no ﬁrst order Zeeman shift. However the linear dependence vanishes only for zero magnetic ﬁeld. For a ﬁnite ﬁeld-
 the diﬀerential shift is given by a second order approximation as [94]

∆ω0→0

=

(gJ 2

− gI )2µ2B ∆Ehf s

B2

2π · 1.2 kHz/G2 · B2

(2.42)

with the nuclear g-factor gI accounting for the complex structure of the nucleus and the Land´e

factor

gJ

1

+

J (J

+

1)

+ S(S + 1) − 2J(J + 1)

L(L

+

1) .

(2.43)

This means that for a typical magnetic ﬁeld of 4 G the magnetic ﬁeld sensitivity is 19.2 kHz/G which is much lower than for the best transition in 40Ca+. An additional advantage of hyperﬁne qubits is that the transition frequency is in the GHz range so that the transition can be directly addressed with a µ-wave ﬁeld. Stable frequency sources with computer controlled power, phase and frequency are readily available. If additional single ion addressing is required, one can switch to a Raman laser se-
tup as the microwave ﬁeld cannot be focused. The two laser beams for the Raman setup can be derived from the same laser source. The frequency splitting is achieved by frequency shifting the light ﬁelds with acousto-optical modulators which ensures phase coherence. An example for the implementation of a Raman laser with 43Ca+ ions can be found in [94] and [102]. In this thesis the hyperﬁne qubit is solely manipulated by a microwave ﬁeld.
The second choice, an optical qubit manipulated on the quadrupole transition is also appealing. Although one is still limited by the ﬁnite lifetime of the D-state one can ﬁnd transitions which are insensitive to magnetic ﬁeld ﬂuctuations. This is due to the additional coupling of the nuclear magnetic moment to the electron spin and the magnetic ﬁeld which modiﬁes equation (2.41). The transition frequencies depend in a nonlinear way on the magnetic ﬁeld which gives rise to a number of diﬀerent tran-
sitions which are insensitive to magnetic ﬁeld ﬂuctuations at a non zero magnetic ﬁeld. A good example is the S1/2, F = 4, mF = 4 → D5/2, F = 4, mF = 3 transition which becomes ﬁeld insensitive at 3.38 G and 4.96 G with a second-order Zeeman shift of ∓16kHz/G2.

16

2.3 Atomic Structure A much more detailed explanation of the hyperﬁne splitting in 43Ca+ and the interaction with static magnetic ﬁelds is given in [94]. Although the optical qubit in 43Ca+ is insensitive to magnetic ﬁeld variations one should not forget that the coherence on all optical qubits is still limited by the line width of the laser mediating the coupling. With the currently available quadrupole laser the coherence time for a single ion is limited to about 8 ms (see chapter 4.6.2).
In the experiment two diﬀerent qubits on the quadrupole transition were realized. One qubit was realized using the levels S1/2, F = 4, mF = 0 ↔ D5/2(F = 6, mF = 1) at a magnetic ﬁeld of 6 G. The second qubit was realized using the levels S1/2, F = 4, mF = 0 ↔ D5/2(F = 4, mF = 2) at a magnetic ﬁeld of 3.4 G. Both were chosen because they are separated from other transitions by several MHz, have a moderate magnetic ﬁeld dependence of 350 kHz/G and 220 kHz/G and high coupling strength. Furthermore, t-
heir coupling strength can be maximized by properly setting the polarization and direction of the laser light with respect to the magnetic ﬁeld (see chapter 3).
17

Trapped calcium ions as qubits 18

3. Laser-ion interaction

This chapter summarizes the interactions between an ion trapped in a Paul trap and an incident laser beam. The ﬁrst two parts review resonant and non-resonant single-qubit interactions. The following sections describe the interactions relevant for a quadrupole transition and a microwave transition. Then the focus shifts to the implementation of a two-qubit operation by making use of a bichromatic light ﬁeld. This part was also published in [76]. Finally the bichromatic light ﬁeld will be used to c-
reate coherent displacement forces acting on the ion trap harmonic oscillator. Furthermore, the bichromatic light ﬁeld is used to measure the expectation values of position and momentum for the harmonic oscillator.

3.1. Ion laser Hamiltonian

The Hamiltonian describing the trapped ion consists of two parts. The ﬁrst part describes the ion that can be treated as a two-level system with a laser tuned close to this transition. The second part describes the ion in the external conﬁning potential of the trap that forms a harmonic oscillator. In the following description we assign a pseudo-spin to the qubit. The qubit states can then be identiﬁed with |↓ (|↑ ) for the lower(upper) energy level. For an ion with mass m oscillating with frequen-
cy ω in the harmonic potential the system can be described by the following Hamiltonians

Hm

=

p2 2m

+

1 2

mω2x2

He

=

1 2

ν σz

Hl = Ω(σ+ + σ−)(ei(kx−νlt+φ) + e−i(kx−νlt+φ))

(3.1) (3.2) (3.3)

where

σz, σ+

=

1 2

(σx

+

iσy

),

σ−

=

1 2

(σx

−

iσy

)

are

Pauli

spin

operators

and

ν

denotes

the

frequency

splitting of the qubit levels. Furthermore, Ω includes all details about the exact form of the atom

light interaction and is called the Rabi frequency, while k is the wave vector, νl the laser frequency and φ the phase of the light ﬁeld. Hm describes the motion of the ion in the harmonic potential, while He describes the ions internal state. The laser-ion interaction is contained in the Hamiltonian Hl. Using the creation and annihilation operators a†, a the Hamiltonians Hm and Hl can be reexpressed as

H0 = Hm + He =

ω(a†a

+

1 2

)

+

1 2

νσz

Hl = Ω(σ+ + σ−)(eiη(a+a†)e−i(νlt−φ) + e−iη(a+a†)ei(νlt−φ))

(3.4) (3.5)

19

Laser-ion interaction

Figure 3.1.: Combined energy levels of a two-level system and a harmonic oscillator. The black arrows indicate carrier transitions whereas the red/blue arrows indicate the respective sideband transitions.
Here the Lamb Dicke parameter η is used, which is deﬁned as

η = kez 2mω

(3.6)

where ez denotes the oscillation axis. The Lamb Dicke parameter relates the spatial extension of the harmonic oscillator ground state to the wavelength of the atomic transition. It describes the ability of the light ﬁeld to couple to the motion of the ion in the harmonic oscillator.
Transforming H = H0 + Hl into the interaction picture with Hint = U †HU , U = eiH0t/ and using the rotating wave approximation leads to the Hamiltonian

Hint(t) = Ω(σ+eiη(ae−iωt+a†eiωt)e−i((νl−ν)t−φ) + h.c.).

(3.7)

Depending on the detuning ∆ = νl − ν of the laser from the transition frequency ν, it will couple certain electronic and motional states. If the detuning is exactly ∆ = s ω it will couple the state |↓, n to |↑, n + s , where n is the vibrational quantum number and s ∈ N0. Equation (3.7) contains all details about the laser ion interaction.

3.1.1. Lamb Dicke regime

An ion is said to be in the Lamb Dicke regime if the extension of its wavefunction is small compared

to the wavelength of the light. In this regime, the inequality η2xrms 1 is fulﬁlled with xrms the extent of the vibrational mode’s wave function. Then equation (3.7) can be simpliﬁed by a Taylor

expansion of

eiη(ae−iωt+a†eiωt) = 1 + iη(ae−iωt + a†eiωt) + O(η2).

(3.8)

Only ﬁrst order terms need to be considered, that is transitions which change the vibrational quantum number by no more than ±1. The interaction Hamiltonian is now given by

Hint(t) = Ωσ+(1 + iη(ae−iωt + a†eiωt))e−i((νl−ν)t−φ) + h.c..

(3.9)

This Hamiltonian gives rise to three diﬀerent resonances:
• For νl = ν only the electronic state of the ion is altered while ∆n = 0. The transition (|↓, n → |↑, n is called carrier transition where the coupling strength, including a second

20

3.2 Non-resonant interactions

order term, scales as Ωn,n = (1 − η2n)Ω. The small correction ≈ n is obtained going beyond the approximation (3.9). The eﬀective Hamiltonian is given by

Hcar(t) = Ωn,n(σ+eiφ + σ−e−iφ).

(3.10)

Depending on the angle φ one can implement σx, σy interactions realizing two of the three single qubit operations described in chapter 2.1.2.
• For νl = ν − ωz the electronic state of the ion is changed and n decreases by one. The laser couples the states |↓, n → |↑, n − 1 . The coupling strength for this red sideband transition scales as Ωn−1,n = η√nΩ. The Hamiltonian is given by

Hred(t) = i Ωn−1,n(aσ+eiφ − a†σ−e−iφ).

(3.11)

• Similar for νl = ν + ωz the electronic state of the ion is changed and n increases by one. The laser couples |↓,√n → |↑, n + 1 . The coupling strength for this blue sideband transition scales as Ωn+1,n = η n + 1Ω. The Hamiltonian is given by

Hblue(t) = i Ωn+1,n(a†σ+eiφ − aσ−e−iφ).

(3.12)

A graphical illustration of carrier and sideband transitions is shown in ﬁgure 3.1. It shows the combined energy levels of a two-level system and a harmonic oscillator.
With the help of sideband transitions one can convert the internal excitation of one ion into a collective motion of the whole ion string. For example the state |↑↓ . . . ↓, 0 , carrying one electronic excitation, will be transformed into the state |↓↓ . . . ↓, 1 , carrying one phonon, by a π-pulse on the red sideband. This excitation can be transferred onto any other ion in the string by another red sideband pulse. In this way two or more ions can interact with another. The motion acts as a kind -
of bus system mediating the interaction.

3.2. Non-resonant interactions
So far we have only considered resonant interactions. However, also non-resonant interactions play a crucial role in the ion-light interaction. On one hand, they can be used to create desired interactions, on the other hand they cause unwanted eﬀects. Non-resonant interactions become especially important when driving sideband transitions. Due to the small coupling of the sidebands to the laser a lot of light is needed. This causes a frequency shift on the atomic levels due to the carrier and popul-
ation transfer on the carrier.
3.2.1. Light shifts
A light ﬁeld which is oﬀ-resonant from a transition will shift the atomic levels. This eﬀect is known as AC-Stark-eﬀect. Consider a two-level atom with an unperturbed energy diﬀerence E = ν and a detuning of the light ﬁeld by δ = ν − νl from this transition. The amplitude of the light ﬁeld is given by a Rabi frequency Ω. The level shift is calculated by going along the same line of

21

Laser-ion interaction

Figure 3.2.: (a) Rabi oscillations on the sideband (red) with a Rabi frequency Ω = 2π · 45 kHz. The black line with an amplitude of 0.025 are Rabi oscillations with a frequency of 1.2 MHz taking place on the carrier transition. The oscillation frequency and amplitude is given by equation (3.15). (b) Pulse form of a shaped pulse. The slopes are shaped as a Blackman window, the ﬁgure shows the deﬁnitions of pulse and slope duration.

reasoning as done for equation (3.7) and calculating the new eigenenergies of the system from the

Hamiltonian

Hstark =

δ 2

σz

+

Ωσx.

(3.13)

Here only carrier transitions were taken into account. For δ >> Ω one ﬁnds that the upper level

will be shifted by Ω2/δ and the lower level will be shifted by −Ω2/δ. This amounts to a total

frequency shift of the transition by

δstark

=

2

Ω2 δ

.

(3.14)

From the Hamiltonian one can already see that such an interaction is proportional to a σz rotation on a qubit. Thus by shining in a detuned light ﬁeld for a certain amount of time one can perform

an arbitrary rotation around the z-axes realizing the third single qubit operation mentioned in

chapter 2.1.2.

So far it seems that Stark shifts are only desired interactions. This changes when one con-

siders exciting sideband transitions like |↓, 0 → |↑, 1 which are needed for some two-qubit gate

implementations [14]. These gate-operations are similar to interference experiments, thus it is of

utmost importance that the phase relation between pulses does not vary over time. Due to the

AC-Stark shift generated by the carrier, intensity ﬂuctuations would be immediately transferred

into phase ﬂuctuations and thus spoil the quality of the gate operation. A possibility to get rid of

these amplitude-dependent Stark shifts is to shine in a second light ﬁeld detuned in opposite direc-

tion with a Rabi frequency exactly canceling the eﬀect. This light ﬁeld is derived from the same

beam as the driving ﬁeld and thus has the same amplitude ﬂuctuations which together leads to a

common-mode rejection of the Stark shift. A thorough explanation and analysis of this technique

can be found in [93, 103].

3.2.2. Oﬀ resonant excitation
A light ﬁeld resonant with the transition |↓, 0 → |↑, 1 will not only drive Rabi oscillations on this transition but also oﬀ-resonantly drive the carrier transition |↓, 0 → |↑, 0 . This eﬀect can be understood by looking at the time evolution of the |D, 0 population, which is obtained by solving

22

3.3 The S1/2 → D5/2 transition

the optical Bloch equations [104]

P|↑,0

=

(2Ω)2 (2Ω)2 + ∆2

sin2

1 2

(2Ω)2 + ∆2 t .

(3.15)

Typical experimental parameters are Ω = 2π · 45 kHz and an axial trap frequency and thus detuning of ∆ = ωax = 2π · 1.2 MHz. This will result in oﬀ-resonant oscillations with an amplitude of 2.5% and a frequency of 1.2 MHz. Rabi oscillation on the carrier and the sideband are shown in ﬁgure 3.2(a). As gate operations have to reach ﬁdelities exceeding 99% one has to ﬁnd a method to avoid this eﬀect.
The method of choice is to switch pulses adiabatically as shown in ﬁgure 3.2(b). This pulse shaping has two eﬀects. First, it suppresses high frequency components in the Fourier transform of the pulse which are related to the oﬀ-resonant excitations. Second, due to the adiabatic switching which starts and stops with a zero amplitude of the pulse, the oﬀ-resonant excitations are adiabatically transformed to zero. Typical pulse slopes are 5 to 10 µs for a light power equivalent to performing a full -
rabi oscillation within 100 µs on the blue sideband. Further information on pulse shaping and oﬀ-resonant excitations can be found in [105].

3.3. The S1/2 → D5/2 transition
For all but one experiment in this thesis the dipole forbidden transition S1/2 → D5/2 of 40Ca+ and 43Ca+ was used to realize a qubit. In this section the excitation of the quadrupole transition S1/2 ↔ D5/2 by laser light is discussed which is important to understand the experiments presented in chapters 6, 7 and 8.

3.3.1. Rabi frequency and geometrical considerations

For a quadrupole transition, the induced electric quadrupole moment Q couples to the gradient of the applied electric ﬁeld E. The Hamiltonian describing this interaction is given by

HI = −Q · ∇E(t).

(3.16)

This type of interaction takes on the shape of equation (3.3) when the Rabi frequency is deﬁned

as

Ω=

eE0 4

S1/2, F, mF |( · r)(k · r)|D5/2, F , mF

(3.17)

with E0 the electric ﬁeld amplitude and r the position operator of the valence electron relative to the atomic nucleus. For 40Ca+ the quantum numbers F, F can be ignored and mF , mF be replaced by mj, mj. The selection rules allow for ∆m = mj − mj = 0, ±1, ±2. In the case of 43Ca+, the same rules apply for mF , mF but additionally ∆F = F − F = 0, ±1, ±2 has to be fulﬁlled. From the term ( · r)(k · r) one can already guess that the eﬀective coupling strength
depends on the laser beam direction and polarization relative to the quantization axis deﬁned by

23

Laser-ion interaction

the magnetic ﬁeld vector. The expression for the Rabi frequency can be rewritten in the form [94]

Ω

=

eE0 4

15 ΓD5/2 cα k3

Λ(F, m, F

, m ) g∆m(φ, γ)

(3.18)

with the ﬁne structure constant α, the speed of light c, the electron charge e and the spontaneous decay rate ΓD5/2 . The coupling strength Λ(F, m, F , m ) contains all properties of the atomic transition apart from geometrical factors. The coeﬃcients for all transitions in 40Ca+ and 43Ca+ are listed in Appendix C.
The function g∆m(φ, γ) contains the geometry dependence of Ω [92, 98] where φ denotes the angle between the laser beam and the magnetic ﬁeld and γ describes the angle between a linear polarization and the magnetic ﬁeld vector projected onto the plain of incidence. Choosing B = B0(0, 0, 1), one obtains for k = k(sin φ, 0, cos φ)1 and = (cos γ cos φ, sin γ, − cos γ sin φ)

g(0)

=

1 2

| cos γ sin(2φ)|

g(±1) = √1 | cos γ cos(2φ) + i sin γ cos φ| 6

g(±2)

=

√1 6

|

1 2

cos γ sin(2φ) + i sin γ sin φ|

(3.19) (3.20) (3.21)

These terms change for circularly polarized light with

=

√1 2

(p

·

i cos φ, 1, −p

·

i sin φ)

and

p

=

±1

for σ± polarized light to

g(0) = √1 | sin(2φ)| 8

g(±1) = √1 | cos(φ) − ∆m · p · cos(2φ)| 12

g(±2)

=

√1 12

|

1 2

sin(2φ) + sin φ|

(3.22) (3.23) (3.24)

Since any Zeeman transition from S1/2 → D5/2 can be used for coherent manipulation of the ions’ quantum state, it is interesting to look at the possibility to change the coupling strengths of these transitions. Three cases are especially useful when it comes to maximizing the coupling strength of a particular transition and minimize others:

• Linear polarized light with φ = 90◦, γ = 90◦. Exciting only ∆m = +2 and ∆m = −2 transitions. This conﬁguration could be used for sideband cooling (see chapter 5).

• Linear polarized light with φ = 45◦, γ = 0◦. Here the ∆m = 0 transitions couple strongest to the laser while ∆m = ±1 are completely suppressed. In this conﬁguration one would use e.g. the 40Ca+ S1/2(m = +1/2) → D5/2(m = +1/2) transition for storing the qubit while doing the sideband cooling on S1/2(m = +1/2) → D5/2(m = +5/2).
• Circular polarized light along the magnetic ﬁeld axis φ = 0◦. This is the only conﬁguration where a single transition can be selected by using σ± polarized light to excite ∆m = ±1 transitions. This also results in the biggest coupling strength that can be achieved.
1the y-component can be chosen to be zero due to cylindrical symmetry

24

3.4 Microwave transitions
A disadvantage of this conﬁguration is that sideband cooling is not possible as the cooling cycle can only be closed via the P3/2(mj = +3/2) state when the S1/2(mj = +1/2) → D5/2(mj = +5/2) transition is excited.
Conﬁguration 3 is especially interesting in 43Ca+ to reduce the number of possible transitions by a considerable amount. Thereby one can also suppress unwanted oﬀ-resonant excitation and Stark shifts due to other carrier transitions close by. A more mathematical treatment of this subject with equations that are valid for arbitrary polarization and angle can be found in [92].

3.4. Microwave transitions

For the hyperﬁne ground state manifold of 43Ca+ microwave transitions are of importance to manipulate the qubit. A microwave ﬁeld couples to the magnetic dipole moment of the ion. The Rabi frequency can be expressed as

ΩMW =

1 2

S1/2, F = 4, mF µBBMW

S1/2, F = 3, mF

(3.25)

with µB the ion’s magnetic dipole moment and BMW the magnetic ﬁeld of the microwave radiation. Similar to dipole transitions one can drive a ∆mF = 0 transition with a π-polarized AC magnetic ﬁeld, whereas for ∆mF = ±1 transitions σ±-polarized ﬁelds are needed.
With microwave ﬁelds it is impossible to directly drive sideband transitions as the Lamb-Dicke parameter is extremely small. For trapping frequencies of 1 MHz and the ground state hyperﬁne splitting in 43Ca+ of 3.2 GHz the Lamb-Dicke parameter is on the order of 10−6. Another drawback is that microwave ﬁelds can not be used to address single ions. The wavelength is so big that no focussing can be achieved with respect to the few µm distance of the ions. Both problems might be circumvented by eithe-
r using high magnetic ﬁeld gradients [106] and/or oscillating magnetic ﬁelds [107]. These approaches are quite challenging and were not pursued in this thesis.
Although microwave transitions have drawbacks they are a valuable tool for reliably driving the hyperﬁne qubit, especially if all ions in the trap are subject to the same operation. In this thesis the microwave ﬁeld was used to map between the hyperﬁne and the optical qubit (see chapter 6) and to characterize the coherence properties of the hyperﬁne qubit.

3.5. Mølmer-Sørensen gate

A two-qubit quantum gate-operation that is equivalent to a controlled-NOT gate up to local operations is achieved by the action of a Hamiltonian H ∝ σn ⊗σn, where σn = σ · n is a projection of the vector of Pauli spin matrices onto the direction n [108]. Two prominent examples of this type of gate are the conditional phase gate [109, 110] and the Mølmer-Sørensen gate [34, 80, 111] (MSgate). In the latter case, correlated spin ﬂips between the states |↑ |↑ ↔ |↓ |↓ and |↑ |↓ ↔ |↓ |↑ are induced by a-
 Hamiltonian

H ∝ σφ ⊗σφ where σφ = cos φ σx + sin φ σy.

(3.26)

25

Laser-ion interaction

Figure 3.3.: Mølmer-Sørensen interaction scheme. A bichromatic laser ﬁeld couples the
qubit states |↓↓ ↔ |↑↑ via the four interfering paths shown in the ﬁgure. Similar processes
couple the states |↑↓ ↔ |↓↑ . The frequencies ν± of the laser ﬁeld are tuned close to the red and the blue motional sidebands of the qubit transition with frequency ν0, and satisfy the resonance condition 2ν0 = ν+ + ν−. The vibrational quantum number is denoted n.

The

unitary

operation

UφM S

=

exp(i

π 4

σφ

⊗ σφ)

maps

product

states

onto

maximally

entangled

states. In 1999 the proposal was made to realize an eﬀective Hamiltonian [80, 111] taking the

form (3.26) by exciting both ions simultaneously with a bichromatic laser beam with frequencies

ν± = ν0±δ where ν0 is the qubit transition frequency and δ is close to a vibrational mode of the twoion crystal with frequency ω. Figure 3.3 shows the level scheme of two ions in a harmonic oscillator

and the laser ﬁelds applied for a Mølmer-Sørensen interaction. Changing into an interaction picture

and performing a rotating-wave approximation, the time-dependent Hamiltonian

H (t) = Ω(e−iδt + eiδt)eiη(ae−iωt+a†eiωt)(σ+(1) + σ+(2)) + h.c.

(3.27)

is well approximated by

H(t) = − ηΩ(a†ei(ω−δ)t + ae−i(ω−δ)t)Sy

(3.28)

in the Lamb-Dicke regime.

In equation (3.28), we use a collective spin operator Sy = σy(1) + σy(2). In the following we denote

the laser detuning from the motional sidebands by ω − δ = . The whole subsequent treatment

of the MS-interaction can be generalized for N ions by exchanging Sy with SyN =

N i=0

σy(i).

The

Hamiltonian (3.28) can be exactly integrated [81] yielding the propagator

U (t) = Dˆ (α(t)Sy)e(i(λt−χ sin( t))Sy2),

(3.29)

where α(t) = ηΩ (ei t − 1), λ = η2Ω2/ , χ = η2Ω2/ 2, and Dˆ (α) = eαa†−α∗a is a displacement
operator. For a gate time tgate = 2π/| |, the displacement operator vanishes so that the propagator U (tgate) = exp(iλtgateSy2) can be regarded as being the action of an eﬀective Hamiltonian

Heﬀ = − λSy2 = −2 λ(1 + σy ⊗ σy)

(3.30)

inducing the same action up to a global phase as the one given in (3.26). Setting Ω = | |/(4η), a gate is realized, which is capable of maximally entangling ions irrespective of their motional state.
In the description of the gate mechanism given so far, a coupling of the light ﬁeld to the carrier transition was neglected based on the assumption that the Rabi frequency Ω was small compared

26

3.5 Mølmer-Sørensen gate (a) z = 0

(b) z = p/2

gate operation z
y x

gate operation z
y x

Figure 3.4.: Eﬀect of non-resonant excitation of the carrier transition. (a) For ζ = 0, the gate starts at a maximum of the intensity-modulated beam. In this case, a Bloch vector initially centered at the south pole of the Bloch sphere performs oscillations that are symmetric around the initial position. (b) For ζ = π/2, the gate starts at the minimum of the intensity modulation. In this case, the average orientation of the Bloch vector is tilted with respect to its initial position.

to the detuning δ of the laser frequency components from the transition. In this case, small non-

resonant Rabi oscillations that appear on top of the gate dynamics are the main eﬀect of coupling to the carrier transition. Since a maximally entangling gate requires a Rabi frequency Ω ∝ η−1t−ga1te, the question of whether Ω δ holds becomes crucial in the limit of fast gate operations and

small Lamb-Dicke factors. Our experiments [40] are exactly operating in this regime, and it turns

out that non-resonant excitation of the carrier transition has further eﬀects beyond inducing non-

resonant oscillations [112]. This becomes apparent by interpreting terms in the Hamiltonian in a

diﬀerent way: The red- and blue-detuned frequency components E± = E0 cos((ν0 ±δ)t±ζ) of equal intensity may be viewed as a single laser beam E(t) = E+ + E− = 2E0 cos(ν0t) cos(δt + ζ) that is resonant with the qubit transition but amplitude-modulated with frequency δ. Here, the phase ζ

which determines whether the gate operation starts in a maximum (ζ = 0) or a minimum (ζ = π/2)

of the intensity of the amplitude-modulated beam has a crucial inﬂuence on the gate-operation.

This can be intuitively understood by considering the initial action the gate exerts on an input

state in the Bloch sphere picture shown in ﬁgure 3.4. For short times, coupling to the sidebands

can be neglected which justiﬁes the use of a single-ion picture. The dynamics is essentially the

one of two uncoupled qubits. The fast dynamics of the gate is induced by excitation of the ions

on the carrier transition. For ζ = 0, the Bloch vector of an ion initially in state |↓ will oscillate

with frequency δ along a line centered on the south pole of the Bloch sphere. For ζ = π/2, the

oscillation frequency is the same, however, the time-averaged position of the Bloch vector is tilted

by an angle

ψ

=

4Ω δ

sin ζ

(3.31)

with respect to the initial state |↓ . This eﬀect has a profound inﬂuence on the gate action.

A careful analysis of the gate mechanism [112] taking into account the non-resonant oscillations

reveals that the Hamiltonian (3.28) is changed into

H(t) = − ηΩ(a†ei(ω−δ)t + ae−i(ω−δ)t)Sy,ψ ,

(3.32)

27

Laser-ion interaction

where

Sy,ψ = Sy cos ψ + Sz sin ψ ,

and that the propagator (3.29) needs to be replaced by

(3.33)

U (t) = e(−iF (t)Sx)Dˆ (α(t)Sy,ψ)e i(λt − χ sin( t))Sy2,ψ ,

(3.34)

where

the

term

containing

F (t)

=

2Ω δ

(sin(δt

+

ζ)

−

sin

ζ)

describes

non-resonant

excitation

of

the carrier transition. In the derivation of Hamiltonian (3.32), small terms arising from the non-

commutativity of the operators Sy, Sz have been neglected [112]. The dependence of the propagator on the exact value of ζ is inconvenient from an experimental point of view. To realize the desired

gate-operation in an optimal way, precise control over ζ is required. In addition, the gate duration

must be controlled to better than a fraction of the mode oscillation period because of the non-

resonant oscillation. Fortunately, both of these problems can be overcome by shaping the overall

intensity of the laser pulse such that the Rabi frequency Ω(t) smoothly rises within a few cycles 2π/δ

to its maximum value Ωgate ≈ | |/(4η) and smoothly falls oﬀ to zero at the end of the gate. In this case, the non-resonant oscillations vanish and (3.31) shows that the operator Sy,ψ(t) adiabatically follows the laser intensity so that it starts and ends as the desired operator Sy irrespective of the phase ζ. For intensity-shaped pulses, the propagator (3.29) provides therefore an adequate

description of the gate action.

3.5.1. AC-Stark shifts
In the description of the gate mechanism given so far the ion was treated as an ideal two-level system. AC-Stark shifts are completely insigniﬁcant provided that the intensities of the blue- and the red-detuned frequency components are the same since in this case light shifts of the carrier transition caused by the blue-detuned part are exactly canceled by light shifts of the red-detuned light ﬁeld. Similarly, light shifts of the blue-detuned frequency component non-resonantly exciting the upper m-
otional sideband are perfectly canceled by light shifts of the red-detuned frequency component coupling to the lower motional sideband.
For an experimental implementation with calcium ions, we need to consider numerous energy levels (see ﬁgure 2.3). Here, the laser ﬁeld inducing the gate action causes AC-Stark shifts on the qubit transition frequency due to non-resonant excitation of far-detuned dipole transitions and also of other S1/2 ↔ D5/2 Zeeman transitions. The main contributions arise from couplings between the qubit states and the 4p−states that are mediated by the dipole transitions S1/2 ↔ P1/2, S1/2 ↔ P3/2, D5/2 ↔ P3/2. -
Other transitions hardly matter as can be checked by comparing the experimental results obtained in [103] with numerical results based on the transition strengths [98] of the dipole transitions coupling to the 4p−states. For suitably chosen k-vector and polarization of the bichromatic laser beam, these shifts are considerably smaller than the strength λ of the gate interaction.
AC-Stark shifts can be compensated by a suitable detuning of the gate laser. An alternative strategy consists in introducing an additional AC-Stark shift of opposite sign that is also caused by the gate laser beam [103]. This approach has the advantage of making the AC-Stark compensation independent of the gate laser intensity. In contrast to previous gate-operations relying on this

28

3.5 Mølmer-Sørensen gate
technique [113] where the AC-Stark shift was caused by the quadrupole transition and compensated by coupling to dipole transitions, here, the AC-Stark shift is due to dipole transitions and needs to be compensated by coupling to the quadrupole transition.
For ions prepared in the ground state of motion (n = 0), a convenient way of accomplishing this task is to perform the gate operation with slightly imbalanced intensities of the blue- and the reddetuned laser frequency components. Setting the Rabi frequency of the blue-detuned component to Ωb = Ω(1 + ξ) and the one of the red-detuned to Ωr = Ω(1 − ξ), an additional light shift caused by coupling to the carrier transition is induced that amounts to δa(Cc ) = 2(Ω2r − Ω2b)/δ = −8Ω2ξ/δ. Now, the beam -
imbalance parameter ξ needs to be set such that the additional light shift exactly cancels the phase shift φ = δactgate induced by the dipole transitions during the action of the gate. Taking into account that tgate = 2π/ and Ω = | |/(4η), this requires ξ = (δη2/| |)(φ/π).
Apart from introducing light shifts, setting ξ = 0 also slightly changes the gate Hamiltonian (3.30) from Heﬀ = −λSy2 to Heﬀ = −λ(Sy2 + ξ2Sx2) [114] since the coupling between the states |↓↓ , |↑↑ is proportional to 2ΩbΩr = 2Ω2(1 − ξ2) whereas the coupling between |↓↑ , |↑↓ is proportional to Ω2b + Ω2r = 2Ω2(1 + ξ2). However, as long as ξ 1 holds – which is the case in the experiments described in chapter 6 – this eﬀect is extremely small2 as the additional term is only quadratic in ξ.
Another side eﬀect of setting ξ = 0 is the occurrence of an additional term ∝ Sza†a in the Hamiltonian. It is caused by AC-Stark shifts arising from coupling to the upper and lower motional sideband which no longer completely cancel each other. The resulting shift of the qubit transition frequency depends on the vibrational quantum number n and is given by δ(SB) = (8η2Ω2/ )ξn = ( /2)ξn. Simulations of the gate action based on (3.27) including an additional term ∝ Sz accounting for AC-Stark shifts -
of the dipole transitions and power-imbalanced beams show that the unwanted term ∝ Sza†a has no severe eﬀects for ions prepared in the motional ground state as long as ξ 1. However, for ions in Fock states with n > 0, this is not the case. Taking the parameter set ξ = 0.075, ω = (2π) 1230 kHz, and = (2π) 20 kHz as an example, the following numerical results are obtained: applying the gate to ions prepared in | ↓↓ |n = 0 , a Bell state is created with ﬁdelity 0.9993. For n = 1, the ﬁdelity drops to-
 0.985, and for n = 2 to even 0.942. This loss of ﬁdelity can be only partially recovered by shifting the laser frequency by δ(SB), the resulting ﬁdelity being 0.993 and 0.968, for n = 1 and n = 2 respectively. For higher motional states, the eﬀect is even more severe and shows that this kind of AC-Stark compensation is inappropriate when dealing with ions in a thermal state of motion with n¯ 1. Instead of compensating the AC-Stark shift by imbalancing the beam powers, in this case, the laser freq-
uency needs to be adjusted accordingly (see chapter 6 on the experiments with Doppler-cooled ions).

3.5.2. A Mølmer-Sørensen interaction with ions in a thermal state of motion

In theory, the Mølmer-Sørensen gate does not require the ions to be cooled to the ground states of motion since its propagator (3.29) is independent of the vibrational state for t = tgate. For

2The additional term Sx2

changes the gate operation from U

=

exp

(−i

π 8

Sy2 )

to

Uξ

=

exp

(−i

π 8

(Sy2

+ ξ2Sx2)).

A

short calculation shows that the minimum state ﬁdelity Fmin = min{ψ}(| ψ|U †Uξ|ψ |2) is given by Fmin =

1 2

(1

+

cos(

π 2

ξ2))

where

we

used

[Sx2, Sy2]

=0

and

exp(−iγ Sx2 )

=

1+

1 4

(e−i4γ

− 1)SX2 .

Thus,

for

ξ

=

0.075,

one

obtains Fmin ≈ 1 − 2 · 10−5.

29

Laser-ion interaction

t = tgate, however, the interaction entangles qubit states and vibrational states so that the qubits’ ﬁnal state becomes dependent on the initial vibrational state. Therefore, it is of interest to calculate expectation values of observables acting on the qubit state space after applying the propagator for an arbitrary time t. Simple expressions can be derived [76] in the case of a thermally occupied motional state where the mode population probabilities are given by

p˜n

=

1 n¯ +

1

n¯ n¯ + 1

n
.

(3.35)

Not taking into account non-resonant carrier oscillations, one ﬁnds the following expressions for the qubit state populations

p↑↑(t)

=

1 8

(3

+

e−16|α|2

(n¯+

1 2

)

+

4

cos(4γ)e−4|α|2(n¯+

1 2

))

p↑↓(t) + p↓↑(t)

=

1 4

(1

−

e−16|α|2

(n¯+

1 2

)

)

p↓↓(t)

=

1 8

(3

+

e−16|α|2

(n¯+

1 2

)

−

4

cos(4γ)e−4|α|2(n¯+

1 2

))

with α = α(t) and γ = λt − χ sin( t) containing the time dependent terms.

(3.36)

3.6. Creating a coherent displacement

Another application for bichromatic light ﬁelds is to create coherent displacement forces. This can be done by shining in two light ﬁelds resonant with the blue and red sideband transition. Putting together equations (3.12) and (3.11) and calculating a few lines to simplify the expressions one arrives at the following Hamiltonian

HD = ηΩ [σx cos φ+ − σy sin φ+] ⊗ (a + a†) cos φ− + i(a† − a) sin φ− .

(3.37)

Here 2φ+ = φr + φb and 2φ− = φb − φr are the sum and the diﬀerence, respectively, of the phases of the light ﬁelds tuned to the red and blue sideband. One can recognize the position xˆ and

momentum operators pˆ in the second part of the Hamiltonian. The propagator for φ− = φ+ = 0

is then

U = e D

−iηΩt ∆

xσx

(3.38)

which describes a state dependent coherent displacement operator D(ασx) with α = iηΩt/∆ (see chapter 2). The propagator (3.38) displaces an eigenstate of σx along p in phase space. If the initial state was in the ground state a coherent state is created. By properly choosing the phases φ−, φ+ one can create coherent states with arbitrary α.

3.6.1. Measurement of x and p
A lot of ion trap experiments make extensive use of the harmonic oscillator created by the trap conﬁnement for implementing two-qubit interactions. The ion trap system is always referred to as

30

3.6 Creating a coherent displacement

“the“ toy model for a quantum harmonic oscillator. Nevertheless the expectation values for the position and momentum operators x and p have never been measured with trapped ions up to now. Here a method is presented similar to one proposed in [115–117] to measure these quantities without reconstructing the full quantum state.
As already mentioned in chapter 2.1.3 the only observable that can be directly measured in ion trap experiments by ﬂuorescence detection is σz. By using additional laser pulses one can generate a propagator U that maps other observables onto σz. In this case we apply the propagator UD to the state ρ of the ion prior to the state detection which is equivalent to measuring the observable

A(t) = UD† σzUD = cos(2ηxˆΩpt/∆)σz + sin(2ηxˆΩpt/∆)σy

(3.39)

on the initial state because of Tr((U †ρU )σz) = Tr(ρ(U σzU †)). If the ion’s internal initial state is

the eigenstate of σz belonging to eigenvalue +1, A(t) = cos(2ηxˆΩpt/∆) and for the eigenstate of

σy belonging to eigenvalue +1, A(t) = sin(2ηxˆΩpt/∆).

Thus preparing ρ in an eigenstate of σy and taking the ﬁrst derivative of the measured expectation

value

d dt

A(t)

= 2ηΩp/∆ xˆσy
t=0

(3.40)

reveals that the slope of the measured excitation at t = 0 is proportional to x . By changing the

phase φ− from 0 to π/2 it is possible to measure p instead of x . Furthermore all n-momenta of x can be measured by taking the n-th derivative

dn dtn

A(t)

∝
t=0

xˆnσy .

(3.41)

We have applied this technique to determine position and momentum in a simulation of a Dirac particle encoded in position and momentum of the harmonic oscillator (see chapter 8).

31

Laser-ion interaction 32

4. Experimental setup
In this chapter an experimental setup is described used to realize the experiments discussed in the proceeding chapters. A section about the ion trap and the vacuum setup will be followed by a description of the laser system and the computer control.
4.1. Linear ion trap and electrode wiring
The ion trap used in this thesis is the standard Innsbruck design (see ﬁgure 4.1(a)). It is a linear Paul trap where the radio frequency (RF) drive is applied to one of two pairs of blades while the other pair is grounded. This creates the radial conﬁnement. An additional DC voltage applied to the tips generates the axial conﬁnement (see ﬁgure 4.1(b)). A thorough discussion of the speciﬁcations and design of the trap can be found in Jan Benhelm’s thesis [94].
The ion trap is operated at a frequency of about 25.5 MHz produced by a signal generator1 whose output is ampliﬁed2 to 5-13 W. This signal is then coupled into a helical resonator amplifying the voltage to about 1200 V which is applied to the blades. This creates a harmonic potential with trapping frequencies between 2.5 MHz and 4 MHz in the radial directions. The two radial modes are almost degenerate in frequency and measurements showed that they are split by about 50 kHz. The orientation of the-
se modes is along the RF-blades of the trap. This breaking of the radial symmetry is due to the fact that the RF potential is only applied to one blade pair while the other is grounded. The DC voltage applied to the tips ranges between 800-1400 V. A typical voltage of 1200 V creates an axial potential with a trap frequency of 1.36 MHz for a 40Ca+ ion.
1Rohde & Schwarz, SML01 2Mini Circuits LZY-1
Figure 4.1.: (a) Picture of the linear Paul trap used in the experiment. (b) Schematic drawing of the trap. Two opposite blade shaped electrodes (A) are connected to a high voltage radio frequency while the other pair is grounded. The tips (B) are connected to a DC voltage up to 1400 V. The compensation electrodes (C) are used to shift the ions into the RF null compensating stray electric ﬁelds. The upper compensation electrode of the pair used for horizontal micromotion compensation is also used -
to guide microwave signals to the ions. The distance of the tips and electrodes is given in mm.
33

Experimental setup

Figure 4.2.: Wiring of the DC-trap electrodes. Each tip is wired to a circuit that can
change the voltages on the tips by twice the preset voltages U1/U2. A TTL signal switches
between the two voltages and the RC combination is designed such that voltage reaches the
desired value within 40 µs. This time constant is given by the low pass ﬁlters attached to
the tips. The virtual ground Ug for the secondary side is provided by a stable high voltage source (ISEG). The eﬀective voltage on the tips is then given by Utip1 = Ug ± U1/2 and Utip2 = Ug ∓ U1/2.

These voltage values lead to a string of ions in the trap along the direction of the tips. The

equilibrium positions of the ions are determined by the external trapping potential and the Coulomb

repulsion between the ions. For two ions of mass m the distance can be calculated analytically and

is given by

∆z =

e2 2π 0mωz

1/3
.

(4.1)

For an axial center of mass frequency ωz =1.2 MHz this leads to an ion spacing of 4.6 µm. This knowledge is used to calibrate the imaging system in combination with the precisely measurable

trap frequency.

Each tip is wired separately such that it is possible to put them on diﬀerent potentials. By

changing the potentials applied to the tips the ion string can be moved along the trap axis. To

shuttle the ions fast without compromising the stability of the trap potential we designed a circuit

which can change the tip voltage by ±20 V. With a TTL signal one can switch between two preset

values U1, U2 such that the voltage on the tips changes within 40 µs. The time constant is given by the low pass ﬁlters attached to the tips. On the one hand these ﬁlters block noise going to

the trap electrodes and on the other hand they shield the electronics from RF pick up by the

tips. A schematic drawing of the circuit can be seen in ﬁgure 4.2. A stable high voltage3 source provides the virtual ground (Ug = 800 − 1200 V ) for the secondary side of the analog optocoupler4. A power supply referenced to the same high voltage provides the necessary current to drive the

adder/multplier circuit. This design allows one to combine the stability of the high voltage box < 10−5 with a fast switching capability. The instability of the voltages U1, U2 (∆V /V ≈ 10−3) and the noise of the electronic circuit (∆V /V ≈ 10−3) do not harm. This comes from the fact,

that the noise has to be compared to the 800 to 1200 V provided by the high voltage source. The

eﬀective noise is less than 10−5 which is suﬃcient for all experiments in this thesis. The eﬀective

voltage on the tips is given by Utip1 = Ug ± U1/2 and Utip2 = Ug ∓ U1/2. Due to electric stray ﬁelds, the ion position can be pushed out of the RF null leading to a motion

of the ion with a frequency which is the same as the drive frequency. This excess micromotion

3ISEG, EHQ F020p, 0-2kV, ∆V /V < 10−5 4HCNR201 Agilent Tech.

34

4.2 Vacuum vessel
Figure 4.3.: (a) Schematic drawing of the trap setup viewed from atop showing trap orientation, laser beam directions and positioning of the inverted viewports. Most of the laser beams entering the chamber are within the equatorial plane. Two coils in almost Helmholtz conﬁguration generate a magnetic ﬁeld deﬁning the quantization axes along SWNE. An additional coil pair along SE-NW is used for compensating external magnetic stray ﬁelds. The inverted view ports allow us to place custom-made lenses -
close to the ions. The lenses are used to focus laser beams tightly and at the same time collect a big fraction of the ﬂuorescence light emitted by the ions. (b) Side view of the setup. The viewports at the top and the bottom of the vacuum chamber are mounted under an angle of 60◦ with respect to the equatorial plane. Additional beams for Doppler cooling and ion state manipulation are guided through these windows. The single coil on top of the vacuum chamber is used to compensate the earth’s magne-
tic ﬁeld.
can be minimized by compensating for the stray electric ﬁelds and shifting the ion back into the potential node. This can be done by applying small voltages to the compensation electrodes, ranging typically from 1 V to 150 V.
4.2. Vacuum vessel
The vacuum chamber housing the ion trap is a stainless steel octagon with eight CF63 ﬂanges. Three of the eight ﬂanges are equipped with inverted viewports5 the rest have regular viewports attached6. The inverted viewports allow us to place custom made lenses7 close to the ions and to steer or replace them without opening the vacuum chamber. The proximity to the ions guarantees a good imaging resolution, a high photon collection eﬃciency and the ability to tightly focus lasers to address individua-
l ions. The top and the bottom of the chamber consist of two CF200 ﬂanges each carrying two CF40 ﬂanges with windows mounted under an angle of 60◦ relative to the equatorial plane. Additional CF16 feedthroughs are attached to the bottom and top ﬂange for wiring the ion trap and the calcium oven. A schematic drawing can be seen in ﬁgure 4.3a.
Not shown in this drawing are the ion getter pump8, the titanium sublimation pump9 and the Bayard-Alpert-Gauge10 attached to the chamber via a six way cross. The ion pump runs
5Ukaea, fused silica, anti reﬂection coating (Tafelmaier, 397nm and 720-870nm on vacuum side only) 6Ukaea, fused silica, anti reﬂection coating (Tafelmaier, 397nm and 720-870nm) 7Silloptics, Germany 8Varian Star Cell, 20 l 9Varian 10Varian, UHV-24 Gauge
35

Experimental setup
permanently while the titanium sublimation pump is ﬁred once a week. The pressure in the chamber stays below the measurement limit of the Bayard-Alpert gauge of 2 · 10−11 mbar.
4.3. Magnetic ﬁeld coils
Two pairs of magnetic ﬁeld coils are attached to the vacuum chamber (see ﬁgure 4.3a). The coil pair aligned along the SW-NE direction is generating the quantization ﬁeld. The distance of the coils is 300 mm while their inner diameter is 115 mm. This mounting does not quite resemble a Helmholtz conﬁguration but nevertheless we expect only small magnetic ﬁeld gradients at the ion position. Measurements with two entangled ions conﬁrmed that the gradient at the trap center is smaller than 0.2 G/m. Thi-
s means that the frequency change, due to this gradient, is smaller than 1 Hz on the qubit transition for two ions separated by 4 µm. The coils are made out of 300 windings of copper wire. A current of 1 A sent through these coils produces a magnetic ﬁeld of 3.4 G at the ion position. The second pair aligned along the SE-NW11 direction is for compensating external magnetic ﬁelds in order to align the quantization axis with the SW-NE direction. An additional single coil with a 200 mm diameter (see -
ﬁgure 4.3b) is mounted on the top ﬂange to compensate for magnetic ﬁelds in the vertical direction.
All coils are powered by home-built current drivers having a relative current drift of less than 2 · 10−5 in 24 h. This is achieved by actively stabilizing the current by a servo loop. A stable reference voltage is compared with the voltage drop across a highly stable resistor12 and used as a feedback signal.
4.4. Optical access and single ion addressing
Several laser beams enter the vacuum chamber from seven diﬀerent directions (see ﬁgure 4.3). A 397 nm σ+-polarized beam is aligned exactly with the magnetic ﬁeld direction. It is used for optical pumping of 40Ca+ and 43Ca+ and as an additional Doppler cooling beam for 43Ca+. All laser beams for Doppler cooling, repumping and photoionization are sent through the SE port of the chamber. The beams are focused by adjusting the output coupler of the ﬁbers. Typical beam waists are on the order of 100-20-
0 µm. Additional beams for Doppler cooling and repumping are sent in via the viewports in the bottom of the vessel. These beams are used when a second photomultiplier tube (PMT)13 at the NW port is added to the primary PMT located at the south viewport. The only beam that remains operational from the SE corner is the photoionization beam. In order not to damage the second PMT during loading the light is automatically blocked by a shutter in front of the PMT whenever the photoionization lasers are -
on.
Four 729 nm beams for manipulating the qubits are sent onto the ions. The one entering from the inverted viewport S is used for addressing a single ion out of a chain of ions. This is achieved by a custom-made lens system14 and additional telescope lenses to widen the beam prior to the focussing (see ﬁgure 4.4(a)). With this setup the expected diﬀraction limited spot size is 2.9 µm.
11all directions are given according to the compass card in ﬁgure 4.3 12Vishay, VCS 302 13Electron tubes, P25C, Quantum eﬃciency = 28% at 400 nm 14Sill Optics, Germany, antireﬂection coated for 397 nm and 729 nm
36

4.5 Fluorescence detection
Figure 4.4.: (a) Custom-made lens setup for focusing a 729 nm laser down to < 4 µm for addressing a single ion. The same lens system together with a dichroic mirror is used to image the ion string onto the PMT and the camera. The objective covers about 2.5 % of the full solid angle. A dichroic mirror is used to separate the incoming light at 729 nm from the ﬂuorescence light at 397 nm. (b) Measurement of the intensity proﬁle of the laser beam at 729 nm entering from the south port of the vacuum ch-
amber. For this measurement two ions where ﬁrst shifted in position with respect to the laser beam and then excited by a laser pulse. The pulse length was chosen such that the ion undergoes 3π rabi ﬂops when the beam is centered on it. The intensity of the beam was then calculated with the recorded excitation.
Two ions were used to probe the experimentally achieved width of the beam by moving them along the trap axis and exciting them with a laser beam (see ﬁgure 4.4(b)). The pulse length and intensity of the laser pulse were chosen such that the ion undergoes a 3π rotation when the beam is centered on it. The spatial intensity proﬁle of the beam was then deduced from the recorded excitation to the D state. This measurement revealed a FWHM of the beam of 2.6 µm.
Two beams coming from the directions NE and NW are focussed to about 20 µm. The NE beam is σ+ polarized for driving the S1/2, mF = 1/2 to D5/2, mF = 3/2 transition with maximal eﬃciency. The NW beam is linearly polarized for driving ∆m = ±2 transitions with maximal eﬃciency. The beam size is a compromise between maximum intensity and the requirement to illuminate up to three ions equally. Furthermore, the ions should not reside at a position where the intensity proﬁle has a step gradient to minimi-
ze coupling strength ﬂuctuations due to beam steering eﬀects. The two beams are not operated simultaneously. In the experiment we can switch from one to the other by exchanging the ﬁber after the switching AOM (see ﬁgure 4.7 AO3). Another 729 nm beam enters the vacuum chamber from a viewport in the bottom of the chamber under an angle of 60◦ with respect to the equatorial plane. This beam is only focused with the output coupler of the ﬁber to about 150 µm. It is used to illuminate all trapped ions-
 equally.
4.5. Fluorescence detection
To collect the ﬂuorescence light at 397 nm we again utilize the custom made lens design used for focusing the beams at 729 nm (see ﬁgure 4.4(a)). It is a ﬁve-lens objective which is antireﬂection coated for 397 nm and 729 nm. The abberations introduced by the fused silica window of the inverted viewport are corrected by the lens-design. The entrance diameter of the objective is d=38 mm and the distance to the ions from the ﬁrst lens is r=58 mm. The photon collection
37

Experimental setup

Figure 4.5.: (a) Fluorescence histogram for two ions each in a superposition of S and D. In this plot laser intensity and detection time (3 ms) where chosen such that a detection ﬁdelity exceeding 99.9% was achieved. Two thresholds are used to discriminate between three diﬀerent two ion states. Either both ions are in the D state, both are in the S state or one is in the D state and the other in the S state with a respective mean photon count rate of 30, 270, 510 photons in 3 ms. The probabilities-
 of ﬁnding k bright ions are denoted pk. (b) The histogram illustrates the discrimination of the two-qubit states S1/2 and D5/2 for a single ion using two PMTs. For each data point the ﬂuorescence of the ion, prepared in a superposition of the S and D state, was measured for 250 µs. On average we acquire 0.07 photons during this detection time for the ion in the D state. If the ion is in the S state 7.8 photons are detected. By introducing a threshold between one and two detected photons one can d-
iscriminate between the two states. The intensity of the detection laser was chosen such that the ion was not heated beyond the mean phonon number achieved with Doppler cooling. Additionally the time of the detection was made as short as possible to shorten the duration of the sequence. Despite these restrictions a detection inﬁdelity of wrongly assigning a quantum state of 0.32 % was achieved. For an application of this detection technique see chapter 7.

eﬃciency is given by the solid angle of the objective which is

dΩ 4π

=

1 2

1

−

1

+

1

(

2r d

)2

≈

1 40

.

(4.2)

Additional losses of 4% arise due to absorption in the objective and another 6% by a narrow bandpass ﬁlter15 used to suppress all light outside the wavelength range 393 nm to 397 nm. In the present setup we image the ions on two PMT’s whose outputs are combined with a fast adder and then counted with a multi-purpose counter card16. In one of the imaging channels a switching box (mirror, 90:10 beamsplitter, coated window) allows us to send all light to the PMT, to distribute it between a CCD-camera-
 and the PMT or to send all light to the camera. In front of both PMT’s, at the location of the image, a variable slit aperture17 is installed to suppress stray light. The imaging plane is about 1.5 m behind the objective which results in a magniﬁcation of 24.5. For all experiments conducted in this thesis, unless mentioned otherwise, state detection was performed with the PMT.
The quantum state of a single ion is detected with a PMT in the following way. For a given
15PMT II : Semrock FF01-390/18-25; PMT I : Semrock FF01-377/50-23.7-D 16National Instruments, PCI 6711 17Owis, Spalt 40

38

4.5 Fluorescence detection
amount of time, typically 3 ms, the ﬂuorescence lasers at 379 nm and 866 nm are switched on and all photons detected during that time are added up by a counter card18. If the number of detected photons is below a certain threshold we assign the D5/2 state to the result, if it is above the threshold we assign the S1/2 state. The number of events above/below the threshold relative to the total amount of repetitions determines the probabilities p1 and p0 corresponding to |α|2 and |β|2 of equation (2.-
1). This state discrimination also works for multiple ions by setting k thresholds and determining the pk probabilities of k ﬂuorescing ions. A typical histogram for the counts acquired for two ions in 3 ms with 3000 repetitions for an equal superposition of S1/2 and D5/2 can be seen in ﬁgure 4.5(a).
For the experiments conducted in chapter 7 it was important that the ions are not heated during detection as additional entangling operations had to be carried out after the state detection. Up to three state detections were required during one experiment. Thus a short detection time was essential in order to prevent a loss of phase coherence of the unmeasured quantum bits due to decohering processes occurring during the detection interval. Finally the detection ﬁdelity had to stay above 99%. In o-
rder to fulﬁll all requirements we installed a second PMT and added its output to the ﬁrst one and switched oﬀ/shielded all light sources in the lab. With this eﬀort we were able to detect on average 7.8 photons within 250 µs at a dark count rate of 0.07 when using a 397 nm laser that had its power and detuning set as for Doppler cooling. This ensured that the ions stayed at the Doppler limit during the detection. The signal to noise ratio >100 enabled us to get low conditional probabilities for w-
rong quantum state assignments. The probability of detecting 0 or 1 photons even though the ion was in the bright state, was p(D|S) =0.24%. The probability of detecting more than one photon was p(S|D) =0.39% if the ion was in the dark state.
The second device used in some experiments for detecting the quantum state of the ions is an Electron Multiplying Charge Coupled Device (EMCCD)19 camera. The focal plane of the imaging system is chosen such that the ions are imaged onto the camera chip. For state detection it is possible to deﬁne a region of interest (ROI) around the positions of the ions of typically 10 × 40 pixels for two ions. Only this small region has to be read out, digitized and processed instead of the full 1024 × 1024 pix-
els. The spatial information in the ﬂuorescence signal obtained with the camera enables us to determine not only the number of ﬂuorescing ions but also which ion(s) is(are) ﬂuorescing. For a proper state discrimination two reference pictures are taken: One with all ions ﬂuorescing, the other one with switched-oﬀ 866 nm laser for a background picture. These two pictures are subtracted from each other and then all vertical pixels are added up resulting in a ﬂuorescence image of the ion string that i-
s integrated in the direction perpendicular to the string. Then a Gaussian is ﬁtted to every single peak. From these ﬁts the 2N diﬀerent possible states are being built serving as reference pictures to be compared with the picture of an ion string whose quantum states are to be measured. To determine the outcome of an experiment all pictures are treated in a similar way as the reference pictures. First the reference background is subtracted, then all vertical pixels are added up and the result is -
multiplied with all 2N reference states. A maximum likelihood method then determines the outcome of the measurement. With this method single ion state detection can be done within 5 ms with a ﬁdelity exceeding 99%. State discrimination with the camera is technically more demanding than the PMT detection as
18National Instruments, PCI 6711 19Andor iXon DV885JCs-VP, pixel size 8 × 8 µm, quantum eﬃciency at 397nm 37%
39

Experimental setup
Figure 4.6.: (a) 397 nm laser setup providing the light for Doppler cooling, state detection and optical pumping. The EOM at 3.2 GHz generates sidebands on the light to address both of the 43Ca+ hyperﬁne ground states.(b) Laser setup for generating the light at 854 nm and 866 nm for repumping the D-states. Both light sources are combined on a 50:50 beamsplitter and sent with two polarization maintaining ﬁbers to the vacuum vessel. For eﬃciently repumping the D3/2 state in 43Ca+ two additional AOM’-
s modulate frequencies at 145 MHz and 245 MHz onto the 866 nm beam.
an additional program is required for controlling the camera and evaluating the pictures taken. Furthermore this program has to be synchronized with the experiment control software to ensure proper state detection.
4.6. Laser system
An advantage of calcium ions is that all necessary wavelength can be produced by solid state lasers. For all dipole transitions commercial diode laser systems from Toptica were employed in the experiments. The light for driving the S → P transitions was generated by second harmonic generation of near infrared diode lasers. All diode lasers are stabilized to medium ﬁnesse (F=300) cavities (see Jan Benhelms thesis [94]) with the Pound-Drever-Hall method. The error signal is fed back onto the piezo o-
f the diode laser grating as well as on the current driving the diode. This reduces the laser line width to about 100 kHz limited by acoustic vibrations of the cavity mirrors. The frequency of the diode lasers can be tuned by 3 GHz by changing the cavity length with a piezo attached to one of the mirrors. The free-spectral range (FSR) of the cavities is 1.5 GHz. The only laser that is not a diode laser is the narrowband titanium-sapphire (Ti:Sa) laser at 729 nm. It is stabilized to a high ﬁnesse c-
avity in order to achieve a line width below 10 Hz. The experimental setup of all laser sources will be described in the following sections.
40

4.6 Laser system
4.6.1. Lasers for Doppler cooling, state detection, optical pumping and repumping
Laser at 397 nm
For Doppler cooling, state detection, optical pumping and repumping the ions are excited on the 397 nm dipole transition from S1/2 to D5/2 (see ﬁgure 2.3 and ﬁgure 2.4). This light is generated by frequency doubling a diode laser system20 running at 794 nm. At the output of the doubling stage we have between 5 and 10 mW of blue light which is split by a polarizing beamsplitter (PBS) into a σ beam and a π beam (see ﬁgure 4.6(a)). Both beams are switched on and oﬀ by acousto-optical modulators (AOM)-
21 driven at 220 MHz. In the σ beam line there is an additional electro optic modulator (EOM)22 creating sidebands on the light. This is necessary to couple both hyperﬁne manifolds in the S1/2 ground state of 43Ca+ to the P1/2 hyperﬁne states. Both light beams are sent with polarization maintaining single-mode ﬁbers to the vacuum vessel. The σ beam is sent onto the ions from the NW viewport with a σ+ polarization while the π beam enters the vacuum vessel either on the SE-viewport or the bottom vie-
wport. An additional frequency-doubled laser system is available which can be tuned from 393 nm to 397 nm. Currently it is used to generate a 400 MHz red-detuned beam at 397 nm for Doppler cooling. This beam is needed to eﬃciently recrystalize two ions after a melting of the ion crystal e.g. due to a background collision. It is superimposed with the σ beam on a PBS having a 90◦ rotated polarization.
Repumping lasers
For repumping the ion from the D3/2 and P1/2 states light at 854 nm and 866 nm is needed. This light is provided by two diode laser systems23. The 854 nm laser is switched on and oﬀ by an 80 MHz AOM in double pass conﬁguration to ensure proper switch-oﬀ(see ﬁgure 4.6(b)) of the laser beam. The 866 nm laser is switched by a single pass 80 MHz AOM. AOM’s at 145 MHz and 245 MHz create additional light beams that are recombined at beamsplitters for eﬃciently repumping 43Ca+. This increases the Doppler-
 cooling eﬃciency and the ﬂuorescence signal. These AOM’s are only used when running the experiment with 43Ca+ ions. The light beams of both lasers are superimposed on a 50:50 beamsplitter and then sent to the SE and the bottom viewport of the vacuum vessel by two polarization maintaining single-mode ﬁbers.
4.6.2. Ultra-stable titanium-sapphire laser at 729 nm
With a laser at a wavelength of 729 nm we have the capability of exciting the ions on the S1/2 to D5/2 quadrupole transition. Such a laser oﬀers multiple applications, like:
• spectroscopy on the quadrupole transition
• sideband cooling to the motional ground state
• frequency resolved optical pumping
20Toptica DL-SHG 21Crystal Technology, 3220-120 22New Focus, 4431 23Toptica, DL100
41

Experimental setup
Figure 4.7.: Laser setup to provide 3 diﬀerent 729 nm light beams and the light used for stabilizing the laser onto a high ﬁnesse cavity. The light intensity of the Ti:Sa is stabilized by feeding back the signal of PD1 to the RF power driving AO1. AO2 is used for intensity, frequency and phase manipulation of the light sent to the ions. AO3 to 5 are used as switches to guide the light through ﬁbers to diﬀerent ports of the vacuum chamber. The feedback to the Ti:Sa using a Pound Drever Hall scheme -
is threefold. A low frequency feedback onto the tweeter and the Brewster plate as well as a mid and a high frequency feedback to an intracavity EOM is applied.
• coherent manipulation of optical qubits • optical shelving for state detection • state transfer and initialization These tasks are very demanding regarding the laser’s frequency and power stability. Furthermore it necessary to tune the laser over 100 MHz within a microsecond and set it to diﬀerent transitions for 43Ca+ and 40Ca+ which have a frequency diﬀerence of 5.5 GHz. The setup of the laser and its performance is described in [94] and [118]. Here the idea of the locking scheme is recapitula-
ted and the optical setup is described. To meet all requirements listed above, the laser is stabilized to a vertically mounted [119] high ﬁnesse cavity24(F = 412 000, line width = 4.7 kHz, FSR = 2 GHz) made out of ultra low expansion material (ULE). It rests on teﬂon feet inside a temperature stabilized (± 1 mK) vacuum tank (10−8 mbar). The vacuum tank is inside a temperature stabilized wooden box shielding the cavity from acoustical perturbations. Typical drift rates of the cavity measured by ref-
erencing it to the ions (see chapter 5) are 3 Hz/s or less which means that the cavity spacer length changes within a year by no more than 20 nm. This high stability comes at the price of being unable to tune the cavity as both mirrors are optically contacted to the ULE spacer. In order to get the necessary tuning range we use an AOM25 with a center frequency of 1.5 GHz and a tuning range of 1 GHz in double-pass conﬁguration. With
24Advanced Thin Films, CO, USA 25Brimrose GPF-1500-1000
42

4.6 Laser system
this AOM, located between the laser output and the high ﬁnesse cavity (see ﬁgure 4.7 AO6), we are thus able to tune the laser to any desired frequency. The AOM also allows us to cancel the drift of the cavity by comparing the laser frequency with the ions transition frequency and feeding back on the frequency of the AOM.
The optical setup and the servo loop for the Ti:Sa laser are shown in ﬁgure 4.7. The feedback signal is generated by a Pound-Drever-Hall (PDH) [120] locking scheme. An EOM26 modulates sidebands onto the light and the light reﬂected by the cavity creates the error signal detected by a photodiode (P4). The locking scheme of the laser consists of three parts. Slow ﬂuctuations are actively canceled by sending the error signal through a PI-servo and applying it to the piezo (tweeter) moving one of the -
Ti:Sa cavity mirrors and the scanning brewster plate. This loop has a servo bandwidth of 10 kHz limited by the mechanical resonances of the piezo. A higher servo loop bandwidth is achieved by inserting an EOM inside the laser cavity. By changing the refractive index of the EOM the eﬀective cavity length is stabilized. On one electrode of the EOM we apply the error signal sent through a fast proportional ampliﬁer27(10 MHz bandwidth). The other electrode is connected to a high voltage ampliﬁer28 (up-
 to 400 V) which receives as an input the error signal sent through another PI-servo. The grounds of the two ampliﬁers are connected, thus the EOM is ﬂoating. With this setup we get servo bandwidths of 300 kHz for the high voltage part and 1.6 MHz for the fast ampliﬁer.
The laser and the high ﬁnesse cavity are coupled by a polarization maintaining single-mode ﬁber. To avoid a frequency broadening of the light transmitted through the ﬁber by acoustic noise, we implemented an active ﬁber noise cancelation [118, 121]. The light passing the ﬁber is ﬁrst sent through a 50:50 beam splitter. One part is retro-reﬂected by a mirror and sent onto a photodiode. The second part is sent through an 80 MHz AOM (see ﬁgure 4.7 AO7) and then through the ﬁber. The end-facet of the -
ﬁber is at right angle, thus 4% of the light intensity are back-reﬂected. The back-reﬂected light again passes the AOM and hits the same photodiode as the incoming beam. The beat note at 160 MHz contains the phase ﬂuctuation imprinted on the light by the ﬁber. An error signal is created by comparing the beat note to a stable frequency source29. By implementing a phase locked loop, the frequency of the beat signal is kept in phase by feeding back onto a voltage controlled oscillator providing the i-
nput signal of the AOM. The light power sent through the ﬁber is power-stabilized by monitoring the power transmitted through the high ﬁnesse cavity. In this way beam pointing and polarization variations are also canceled such that the PDH error signal is not aﬀected.
For the experiments described in chapters 6 to 8 the line width of the 729 nm laser and its spectral purity plays a crucial role. To determine these quantities we performed a beat measurement with a similar laser located at another institute 500 m away. A ﬁber was used to transmit the light from one building to the other. To avoid any line width broadening of the light we employed a ﬁber noise cancelation. The slow relative drift of the lasers was canceled by applying a continuous slow frequency c-
hange to AO7. The spectrum of the beat signal at a center frequency of 10.8 MHz was recorded with a spectrum analyzer. Figure 4.8(a) shows the power spectrum of the beat for
26Linos/Gs¨anger PM25 27Femto HVA-10M-60-F 28base on Apex, PA98 29Rhode & Schwarz, SML01
43

Experimental setup
Figure 4.8.: (a) Beat measurement of two 729 nm laser connected via a 500 m long noise stabilized ﬁber. A Lorentzian ﬁt yields a FWHM line width of 1.8 Hz within a measurement interval of 4 s. The inset shows the result of Ramsey experiments on the magnetic ﬁeld insensitive transition S1/2, F = 4, mF = 4 → D5/2, F = 4, mF = 3. of 43Ca+. The contrast of the Ramsey experiments is plotted versus the Ramsey waiting time. The red line is a Gaussian ﬁt to the date with a FWHM of 8.1 ms reﬂecting the los-
s of coherence due to the ﬁnite laser line width and additional frequency noise introduced by a 2 m ﬁber guiding the light to the ions.(b) Power spectral density of the laser beat with a resolution bandwidth of 1 kHz where the reference laser was spectrally cleaned with a ﬁlter cavity. The transmission curve of the ﬁlter cavity is given by the blue dashed line. The measurement is limited by the dynamic range of the spectrum analyzer and the reference laser as can be seen from the normalized spectr-
um of the error signal. An integration of the power spectrum shows that a fraction of less than 10−4 of laser light power is outside a ±250 Hz window around the laser’s carrier frequency.
a 4 s acquisition time and a resolution bandwidth of 1 Hz. A Lorentzian ﬁt yields a FWHM line width of 1.8 Hz. If we assume both lasers have the same Lorentzian frequency spectrum we get a line width for each laser of 0.9 Hz.
To get a better picture of the spectral features of our laser, the spectrum of the second laser was cleaned with a ﬁlter cavity. The transmission function of this cavity is given in ﬁgure 4.8(b) together with the normalized power spectral density of the beat measurement for a resolution bandwidth of 1 kHz. The ﬁgure also shows the spectrum of the laser lock error signal. By comparing both spectra we can easily identify the characteristic humps in the spectrum as “servo bumps“ of the laser. Further-
more we can conclude that the beat measurement is limited by the reference laser and the dynamical range of the spectrum analyzer. An integration of the power spectrum shows that a fraction of less than 10−4 of laser light power is outside a ±250 Hz window around the laser’s carrier frequency.
For time scales larger than the 4 s used to determine the spectrum the beat is dominated by an oscillatory frequency variation with a few seconds period. This accumulates to an eﬀective line width of 50 Hz in a 4 h acquisition time. This is also consistent with Ramsey measurements performed on the magnetic ﬁeld insensitive transition S1/2, F = 4, mF = 4 → D5/2, F = 4, mF = 3. of 43Ca+ (see ﬁgure 4.8(a) inset). From the Gaussian ﬁt to the data we determine a FWHM decay time τ1/2 of the Ramsey contr-
ast of 8.1 ms. This decay time can be directly transferred into an
44

4.7 Computer control and RF generation

Figure 4.9.: Sketch showing the interconnection of diﬀerent hardware components. The experiment is controlled by a LabView programm running on a windows computer (main PC). Additionally a computer controlling the camera and performing automatized data evaluation is connect via a TCP/IP connection. The main computer controls the remaining hardware, reads out the counter data of the PMT and programs the versatile frequency source (VFS). The VFS is triggered by the AC power line and provides TTL sign-
als and all phase-synchronous radio frequency signals.

eﬀective laser line width with [122]

∆ν

=

2 ln 2 π

1 τ1/2

.

(4.3)

From this formula we can infer a laser line width on the ions of 55 Hz for a measurement time of

10 Minutes.

The output of the laser is intensity stabilized by monitoring a small portion of the light by a photodiode30 (PD1), comparing it with a stable voltage reference and feeding back the error

signal onto the RF power driving AO1. The frequency and intensity of the light sent to the ions is

controlled by AO2. We can choose between three diﬀerent ﬁber ports which are switched on and

oﬀ by AO3 to 5. AO3 can be driven simultaneously by two frequencies to create a bichromatic

light ﬁeld. Typically the frequency diﬀerence between the two beams is 2.4 MHz which leads to a diﬀraction into slightly diﬀerent directions with an angular separation as small as 0.025◦ such that

the coupling eﬃciency to the single mode ﬁber is reduced by about 15% compared with a single

frequency beam.

4.7. Computer control and RF generation
Qubits in ion trap quantum information experiments are manipulated by laser pulses whose power and length have to be controlled. Furthermore phase coherence has to be ensured for all pulses. This can be achieved by using AOMs which directly transfer the frequency, power and phase information from the radio frequency onto the light. In this way, the problem is reduced to generating precisely timed digital signals and phase-coherent radio frequency pulses with adjustable length and amplitude. For th-
is purpose a versatile frequency source [105, 123] (VFS) was developed. It is based on a ﬁeld programmable gate array (FPGA) which controls a direct digital synthesis (DDS) board. This DDS board can generate pulses with 16 diﬀerent frequencies in the range of
30Thorlabs PDA 100A-EC

45

Experimental setup
0-300 MHz and allows for phase coherent switching between them. The pulses have a minimal duration of 10 ns but are typically in the range of 1 µs to 1 ms. The amplitude and shape of the pulses are controlled by a variable gain ampliﬁer. The frequency range of the DDS board is limited by ﬁlters to 300 MHz. Higher frequencies like the 3.2 GHz for driving the hyperﬁne qubit are created by appropriate mixing and ﬁltering of the signals. The frequency resolution is about 0.1 Hz. Additionally up to 16 -
logic channels (TTL) can be used which are also set by the FPGA controller. These TTLs are used to control all fast and precisely timed switching required during an experimental cycle. Logic signals can be sent to the FPGA via 8 input channels.
The FPGA is connected to a PC (main PC) by an ethernet connection and is programmed via a python31 server. Figure 4.9 shows a sketch of the interconnections between the diﬀerent hardware components. The software running on the main PC controlling the experiment is written in LabView. This program is used to send command sequences to the FPGA board which are executed as soon as it receives a trigger on one of its input channels. Sequences run synchronously with the 50 Hz power line cycle to avoid v-
arying magnetic ﬁelds from one execution to the next. This is again insured by a trigger to one of the input channels. The LabView program also controls several National instrument cards32. They are used to generate analog signals for controlling the power and frequency of the dipole lasers. TTL outputs of these cards are used to switch time-noncritical signals.
The PMT signals acquired by the counter card during an experiment are read out, processed and displayed by the LabView program. The program can be used to run automatized sequences. The data acquired during such sequences can be sent to the camera PC for data evaluation and model ﬁtting. The values determined by these procedures are then fed back into the LabView program. A typical application consists in calibrating the duration of all pulses required in a sequence.
Another LabView program running on the camera PC controls the camera hardware and is responsible for read-out and evaluation of the camera pictures. The programs on both computers are communicating via ethernet.
Signal generators are computer controlled by a GPIB-Bus33. The ISEG high voltage source providing the tip voltage is connected by a CAN-bus34 to the control PC.
To ensure phase-coherence between all RF-signals the signal generators as well as the VFS-box are referenced to a 10 MHz GPS assisted quartz oscillator35.
31High-level programming language 32National Instruments PCI 6711, PCI 6703, DIO 64 33IEEE-488 34Controller area network, serial bus standard 35Menlo Systems GPS 6-12
46

5. Experimental techniques
This chapter will outline techniques used on a daily basis in the laboratory. It will explain how to load ions into the trap and detail the structure of a typical experimental sequence. An important point is the referencing of the 729 nm laser to the ions, which is one of the key elements for doing high precision spectroscopy and QIP experiments. Then implementation of arbitrary qubit operations will be demonstrated with the help of ion shuttling and the capability of single ion addressing. How to-
 analyze the state of an ion by state tomography will be presented at the end of this chapter.
5.1. Loading ions by photoionization
Typically, ions are loaded by photoionization of an atomic beam produced by an oven. The oven consists of a stainless steel tube which is heated by an electric current. The tube is about 8 cm long to ensure a proper collimation of the beam through the trap center, thus avoiding excessive deposition of calcium on the trap electrodes. The photoionization beam is sent through the trap center at a slightly diﬀerent angle. The ions are directly ionized inside the trap volume. Compared to loading by ele-
ctron impact it has several advantages. Electron bombardment creates patch charges on the trap which have to be compensated in order to avoid micromotion. It requires a higher atomic ﬂux to get a decent loading rate because this ionization process is ﬁve orders of magnitude smaller as compared to photoionization. This leads to bigger calcium layers on the trap surfaces which increases the patch charge problem. Furthermore, electron bombardment is not isotope selective and even atoms from the backg-
round gas can be ionized. Especially this point is of importance as we want to load 40Ca+ and 43Ca+ deterministically.
Calcium is photoionized by a two step process (see ﬁgure 5.1(a)). A laser in Littrow conﬁguration at 423 nm resonantly excites the atom from the 4s1S1 to the 4p1P1 state. From there it can be ionized by a second step using light with a wavelength smaller than 390 nm. In the experiment we use a free-running laser diode at 375 nm. Both beams are superimposed on a beamsplitter cube and sent through a single-mode ﬁber towards the ion trap via the SE-viewport of the vacuum chamber (see ﬁgure 4.3). Typi-
cally 50 to 100 µW for the 423 nm laser and about 500 µW for the 375 nm laser are used for eﬃcient loading.
Isotope selective loading can be achieved by tuning the 423 nm laser to the 4s1S0 ↔ 4p1P1 resonance (see ﬁgure 5.1(b)) of the respective isotope. The frequency of the 423 nm laser can be determined either on the wavemeter or by saturation spectroscopy on a calcium vapor cell. The spectroscopy clearly shows the Doppler-free resonance for the most abundant calcium isotope 40Ca. By detuning the laser by 612 MHz to the blue it becomes resonant with the 43Ca resonance. Due to the ﬁnite Lorentzian line -
shape and the natural abundance of calcium the relative loading rate of
47

Experimental techniques
Figure 5.1.: (a) Two step photoionization of calcium. The 423 nm laser can be used to make the process isotope selective. (b) Excitation spectrum of calcium at 423 nm. Figure is taken from [124]. The numbers above the curve show the resonances of the respective calcium isotopes. 43Ca+ has an isotope shift of 612 MHz with respect to the 40Ca+ resonance. The red line is ﬁt to the measured data taking into account a single resonance for 40Ca+. The residuals between the red and the black curve are sho-
wn in green and indicate the resonances of other isotopes.
43Ca+ compared to other isotopes is only 50%. To further increase the isotope selectivity there are two ovens in the apparatus. One is ﬁlled with calcium granules with a natural isotope abundance of 97% 40Ca and the other is ﬁlled with an enriched source consisting of 81% 43Ca, 13% 40Ca and 5% 44Ca.
For loading calcium ions the Doppler cooling laser at 397 nm, the repumper at 866 nm and both photo-ionization lasers are continuously on. The current in the oven is set such that about two ions are loaded per minute. By monitoring the ﬂuorescence signal with the PMT and/or camera, ions appearing in the trap can be detected. Larger crystals are loaded by waiting for longer times. In case that too many ions are in the trap all of them have to be discarded by switching oﬀ the RF drive. Then the load-
ing procedure is started again.
After the intended number of ions has been loaded, the Doppler cooling lasers are adjusted for optimum detuning and power [92]. Two diﬀerent power settings for the 397 nm laser have to be optimized: One for proper Doppler cooling, to get as close as possible to the Doppler-limit and the other for a maximum ﬂuorescence to get a good state detection. The parameters for the two settings will be given in the following section. When all dipole lasers are properly set we can start running experimental s-
equences manipulating the qubit.
5.2. Experimental sequence
All experiments are executed in a pulsed fashion. Such a sequence typically consists of six building blocks (see ﬁgure 5.2) which are described in the following. A single experiment is typically repeated 50-200 times.
48

5.2 Experimental sequence
Figure 5.2.: Typical sequence of laser pulses executed in an experimental cycle. (1) Doppler cooling, (2) optical pumping, (3) sideband cooling, (4) frequency resolved optical pumping, (5) quantum state engineering, (6) state detection. Each sequence is triggered by a TTL pulse (0) synchronized with the line cycle and is typically repeated 50, 100 or 200 times.
(1) Doppler cooling
For 40Ca+, it is suﬃcient for eﬃcient Doppler cooling to use a single 397 nm beam coupling S1/2 → P1/2 and a single 866 nm laser repumping the transition D3/2 → P1/2. To cool all three normal modes of motion of the ion in the trap, care has to be taken that the Doppler-cooling beam has suﬃcient overlap with all modes. The power of the 397 nm laser is set such, that its Rabi frequency is half the saturation intensity [92] of the dipole transition. It is red detuned with respect to the resonance by -
half the linewidth of the transition. The 866 nm laser power is set such that the ﬂuorescence is just below saturation to avoid additional line broadening. It is slightly blue detuned to avoid coherent population trapping. The degeneracy of the Zeeman sublevels is lifted by a magnetic ﬁeld.
For 43Ca+ Doppler cooling is a little bit more complicated. Here three light ﬁelds for the 397 nm laser are necessary. Two of the light ﬁelds are σ+- polarized, where one is coupling the S1/2, F = 4 → P1/2, F = 4 transition and the other one, detuned by 3.2 GHz, is coupling the S1/2, F = 3 → P1/2, F = 4 transition. The 3.2 GHz component is created by modulating sidebands on the light ﬁeld with an EOM (see ﬁgure 4.6). The third light ﬁeld is a π polarized beam which is needed to avoid pumping into -
the dark state S1/2, F = 4, mF = 4.
In the experiment it turned out that the π and the σ+ beam should not have the same frequency. If they do, Doppler cooling is not working properly which might be due to dark states that are ineﬃciently cooled. A detuning of 5 MHz to the red for the π beam, with respect to the σ+ light ﬁeld, turned out to yield the best Doppler cooling results. The 866 nm laser is tuned close to the D3/2, F = 3 → P1/2, F = 3 transition. For eﬃcient repumping additional light ﬁelds shifted by -145 MHz and -395 MHz a-
re provided (see ﬁgure 4.6). In this way all D3/2 hyperﬁne levels are coupled to one of the P1/2 states. Power and detuning from the resonances for both lasers are set the same way as for 40Ca+. A magnetic ﬁeld lifts again the degeneracy of the Zeeman states.
The ﬂuorescence collected during Doppler cooling is used to check if the ions are in a crystal-like structure. If the ﬂuorescence collected for a single sequence falls below a certain threshold the whole experiment is discarded and executed again.
49

Experimental techniques
(2) Optical pumping
A weak short pulse with a σ+ polarized 397 nm laser together with an 866 nm laser pulse is used for optically pumping the ions into either S1/2, mj = 1/2 for 40Ca+ or S1/2, F = 4, mF = 4 for 43Ca+. As for Doppler cooling, more light ﬁelds have to be used for pumping 43Ca+. After this step we achieve a pumping ﬁdelity of 99% into the desired state within 70 µs for 40Ca+ and about 98% for 43Ca+ ions. The pumping ﬁdelities are limited by beam polarization and overlap of the k vector of the light ﬁeld-
 with the magnetic ﬁeld axis.
(3) Sideband cooling
Sideband cooling to the motional ground state is done in the same way for both isotopes. The 729 nm laser is tuned to the red sideband of the stretched state S1/2, mj = 1/2 → D5/2, mj = 5/2 for 40Ca+ and S1/2, F = 4, mF = 4 → D5/2, F = 6, mF = 6 for 43Ca+. Every state transfer from S1/2 to D5/2 reduces the mean phonon number by one quantum. To reduce the lifetime of the D5/2 level a 854 nm laser is switched on at the same time. The population is transferred from the D5/2 state to the P3/2 state fr-
om where it decays back to the ground state. To avoid population leaking from the cooling cycle due to a decay into D3/2, an 866 nm laser is continuously on. This repumping via the P1/2 state does not guarantee a decay into the desired S1/2 state. Additional optical pumping with the 397 nm laser brings the population back into the cooling cycle. After about 7 ms a mean phonon number of n = 0.05(5) is reached.
(4) Frequency resolved optical pumping
To further increase the optical pumping eﬃciency we make use of the 729 nm laser. The scheme for 40Ca+ is similar to sideband cooling. For a duration of 500 µs the 729 nm laser is switched on together with the 866 nm and 854 nm laser. The quadrupole laser couples the states S1/2, mj = −1/2 → D5/2, mj = 3/2 depleting the undesired Zeeman state. Due to the repumping the population piles up in the S1/2, mj = 1/2 and we get pumping eﬃciencies exceeding 99.8% for a single ion.
In 43Ca+ we transfer the population in S1/2, F = 4, mF = 4 to the D5/2, F = 6, mF = 6 state. Then we again apply an optical pumping step with the 397 nm laser. This redistributes the population remaining in the ground state. Another π pulse exchanges the populations in S1/2, F = 4, mF = 4 and D5/2, F = 6, mF = 6. After this step 98% of the population should be in S1/2, F = 4, mF = 4 and the rest in D5/2, F = 6, mF = 6. A light pulse with 854 nm laser clears out the D5/2 state via the P3/2, F = 5, -
mF = 5 from where it can only decay into S1/2, F = 4, mF = 4. With this procedure we achieve pumping ﬁdelities for a single 43Ca+ ion of more than 99.4%.
(5) Quantum state manipulation
After the ions are prepared in the motional ground state and the desired electronic state, the qubit in 40Ca+ and 43Ca+ can be manipulated by 729 nm laser pulses. If the qubit is encoded in the hyperﬁne states of 43Ca+ it can also be manipulated by microwave pulses.
50

5.3 Referencing the 729 nm laser to the ions

Figure 5.3.: Variation of the magnetic ﬁeld over the line cycle. The data points were measured by delaying the start of a Ramsey experiment with respect to the line trigger. The strong 50 Hz component is most likely caused by transformers and other electronics of the setup.

(6) State discrimination
By detecting the ﬂuorescence of the ion on either the camera or the PMT one can distinguish between the S1/2 level and the D5/2 level. The power of the 397 nm laser is increased for a high ﬂuorescence rate to get a good state discrimination within a few milliseconds. To discriminate between the states of the hyperﬁne qubit S1/2, F = 4, mF = 0 and S1/2, F = 3, mF = 0, additional transfer pulses are used to hide the S1/2, F = 4, mF = 0 population in the D5/2 manifold. Two transfer pulses to diﬀerent-
 D5/2 Zeeman states ensure that the detection eﬃciency is above 99%.

5.3. Referencing the 729 nm laser to the ions

In order to make use of the 729 nm laser for QIP experiments an exact knowledge of the magnetic

ﬁeld and the laser frequency is necessary. Therefore the laser is referenced to the ions in the trap.

The referencing is done by probing two diﬀerent transitions (a,b) in either 40Ca+ or 43Ca+. From

the exact knowledge of the Zeeman splitting of the transitions one can then infer the relative laser

frequency and the magnetic ﬁeld. By recording the transitions for several minutes it is possible

to determine the drift of the reference cavity and, by active feed forward, to stabilize the output

frequency of the laser up to some small ﬂuctuations caused by magnetic ﬁeld variations.

The ions are Doppler-cooled and initialized by optical pumping. Then a Ramsey type scheme [125]

is employed to determine the transition frequency. A π/2 pulse creates a superposition of the two

levels to be probed. Then after a Ramsey waiting time τR, a second π/2 pulse is applied. One transition is probed twice in this way. The ﬁrst time the second pulse has a relative phase of φ1 = π/2 and the second time it has a phase of φ2 = 3π/2. After each measurement the population of the levels is measured as described in chapter 4.5. By repeating this sequence a hundred times one can

infer the probabilities of ﬁnding the ion in the excited state pφ1 and pφ2 for the respective phases. From this one can determine the frequency diﬀerence between the laser and the probed transition

as [94]

∆ν/(2π)

=

2π (τR

1 +

2τπ /π)

arcsin

pφ1 pφ1

− +

pφ2 pφ2

.

(5.1)

Where τπ denotes the pulse length to drive a π-pulse on this transition with the chosen laser

51

Experimental techniques
power. Typical values for τπ are between 5 and 20 µs whereas τR is typically 10 times longer, that is 0.1-1 ms.
From the deviation of the transition frequencies ∆νa and ∆νb we ﬁrst determine the magnetic ﬁeld. From this knowledge and the frequency of one transition we then determine the transition frequency at zero magnetic ﬁeld. This serves as a reference from where all other transitions frequencies can be calculated for a given magnetic ﬁeld.
The referencing measurements and the analysis are fully automatized and run about every minute. The measurements are recorded over time and a polynomial ﬁt to the frequency data reveals the drift of the cavity. Usually a ﬁrst order ﬁt is employed and an extrapolation is used to feedback on the signal generator producing the frequency for the AOM set up between laser and cavity (see ﬁgure 4.7 AO6). With this feedback scheme the laser frequency deviates by less than 200 Hz (rms-deviation) from the t-
ransition frequency. The exact value depends on τR which is limited by the coherence time of the ions, the linearity of the cavity drift and the line width of the probe laser.
The magnetic ﬁeld data are averaged over time where data older than 5 min are not taken into account. The average is used as a a best guess for the magnitude of the magnetic-ﬁeld during the next minute. The limiting factor in determining the exact magnetic ﬁeld is given by erratic jumps in the magnetic-ﬁeld by 100-250 µG due to external magnetic ﬁelds (elevator etc.). Without these jumps the magnetic ﬁeld is stable and can be predicted within about 50 µG over several hours if the experiments are t-
riggered to the line cycle.
If the time between the start of an experiment and the line trigger is varied, changes of the magnetic-ﬁeld by about 1.4 mG are visible (see ﬁgure 5.3). To avoid this variation from shot to shot, experiments are always started at a ﬁxed phase of the power line cycle. Nevertheless, since some of the transitions used exhibit a magnetic ﬁeld sensitivity of 2.8 MHz/G frequency corrections of up to 4.5 kHz have to be taken into account over the course of a sequence that lasts several milliseconds. To a-
void these corrections for short sequences the experiments are triggered to the maximum in the line cycle (around 250◦) such that the magnetic ﬁeld does not change in ﬁrst order. Ways to get rid of this limitation are either technical, by active or passive magnetic ﬁeld stabilization, or by choosing a qubit which is insensitive to magnetic ﬁeld changes [102, 126]. Such a magnetic ﬁeld insensitive qubit was used in chapter 6 to store entangled states for tens of milliseconds.
5.4. Implementation of arbitrary qubit operations and ion shuttling
There are diﬀerent approaches to carry out single-qubit rotations. A requirement that is always present is the capability to limit interactions to individual qubits. In the ion trap case this is equivalent to shining in the laser on one ion at a time. One possibility to achieve this is to use micro-fabricated segmented traps to manipulate the ion motion [127]. With the help of diﬀerent trap electrodes a large ion string can be split into smaller ones and brought to trap zones where the selected io-
ns interact with laser ﬁelds [127]. This approach requires a high degree of control and stability on the voltages applied to the trap electrodes. Some experiments have demonstrated
52

5.4 Implementation of arbitrary qubit operations and ion shuttling

Figure 5.4.: (a) Laser beam setup for the 729 nm laser. The tightly focused beam 2 is used for addressed σz rotations. The beams 1 and 3 are for simultaneous operations on up to three ions. Theses beams are either bichromatic light ﬁelds for implementing a MS-interaction or single frequency for carrier rotations on all ions. The NE beam is σ+ polarized for driving ∆m = ±1 transitions with maximal eﬃciency. The NW beam is linearly polarized for driving ∆m = ±2 transitions with maximal eﬃciency. (b)-
 Pulse scheme to perform a π/2 carrier rotation on ion 1 and no rotation on ion 2. Both ions are ﬁrst rotated by π/4, then ion 1 gets a π phase shift with the AC-stark pulse. The second π/4 pulse on both ions rotates ion 2 to the initial state and completes the π/2 rotation on ion 1. (c) Pulse scheme to perform a MS-gate on two out of three ions. The ﬁrst π/4 MS-gate partially entangles all three ions. A stark shift pulse on ion 1 changes the phase of this ion by π. The ﬁnal π/4 MS-gate entangles -
ions 2 and 3 and reverts ion 1 to its initial state.

the ability to deterministically split [128, 129] and reorder an ion string [130]. To do this splitting

fast the traps have to be small as the trap frequencies scale as d−9/10 with d the distance of the

ions to the trap electrodes [131]. A problem all traps face is that the heating rate scales as the

d−4 [132, 133] which is especially bad for micro-fabricated traps. Although experiments showed

that cooling the traps [134] reduces the anomalous heating a considerable technical overhead is

required to do QIP with these traps.

Another way to single out ions from a larger crystal is to use strongly focused light beams.

Ideally the focus should be much smaller than the separation of two ions which is typically a few

µm. However, even for perfect optics the Gaussian beam proﬁle will lead to some light on the

neighboring ion and thus some residual coupling Ωres. With our addressing optics for the 729 nm beam (see ﬁgure 4.4) we are able to get the ratio = Ωres/Ω for carrier pulses down to about 5%. This ratio can be further improved by using Stark shift pulses. As the interaction strength for

these scales with the intensity instead of the ﬁeld strength the addressing error scales now with

2. Addressing errors are thus reduced to below 0.3%. One pays for this increased addressing

capability by an increased sensitivity to intensity ﬂuctuations.

Single-qubit

light-shift

gates

Uz(i)(θ)

=

e−i

θ 2

σz(i)

are

realized

by

an

oﬀ-resonant

strongly

focused

beam impinging (see beam 2 in ﬁgure 5.4(a)) on ion i at a 90◦ angle relative to the trap axis. As

the k-vector of this beam is perpendicular to the trap axis this conﬁguration does not allow to

couple to the axial center of mass motion of the ions and can thus not be used to do two-qubit

gate operations. A second beam at a 45◦ angle relative to the trap axis (see beam 1 or beam 3

in ﬁgure 5.4(a)), illuminating all ions with equal strength serves to carry out gate operations that

are symmetric under qubit exchange.

Collective

single-qubit

gates

U (θ, φ)

=

e , −i

θ 2

(σφ(1)

+σφ(2)

)

are

53

Experimental techniques

Figure 5.5.: (a)Pulse sequence describing a Ramsey experiment on the motional states of the ion. (b) Ramsey contrast of the experiment versus number of events shuttling the ion by 10 µm. The inset shows the contrast of a Ramsey phase experiment on the motion without (•) and with ( ) a single ion shuttle.

realized by resonantly exciting the qubit transition and controlling the phase φ of the laser light.

If instead a bichromatic light ﬁeld is used for implementing a Mølmer-Sørensen interaction, the

propagator

UMS(θ, φ)

=

e−i

θ 2

σφ(1)

⊗σφ(2)

is

realized.

This

interaction

is

used

for

entangling

ions.

As the tightly focused beam is static we still have to move the ion string to address diﬀerent

ions. The shuttling of the ions is done in such a way, that the population of the harmonic oscillator

mode does not change during the transport. The curvature of the trapping potential is kept

constant during the movement of the ions. The movement of the ions is achieved by changing

the tip voltage with the circuit presented in chapter 4.1. To avoid energy transfer the ions are

accelerated adiabatically with respect to the trapping frequencies. Typical shuttling times for

10 µm of 40 µs corresponding to about 50 axial oscillations were achieved without aﬀecting the

population of the COM mode. This was conﬁrmed by performing a Ramsey experiment on the two

lowest motional states in the following way: A single ions was cooled to the motional ground state

by sideband cooling. A π/2 pulse on the carrier followed by a π pulse on the red sideband creates

the superposition state |↓, 0 + |↓, 1 . Then the ions were shuttled over a distance of 10 µm along

the trap axis. After a waiting time of 40 µs the ions were shuttled back to the original position.

Again a waiting time of 40 µs ensured that the voltage on the electrodes was settled. The sequence

applied to the ion is shown in ﬁgure 5.5(a). The ﬁrst two pulses were then applied in reverse order

and the phase of the carrier pulse was scanned to record Ramsey fringes (see ﬁgure 5.5(b) inset).

The contrast of these fringes was then compared to the case where the ion was not transported. If

the ion was heated during the transport, i.e. the occupation of the motional mode was incoherently

changed, the contrast of the Ramsey fringes decreases with respect to the stationary case. No such

eﬀect could be observed even for moving the ion 32 times (see ﬁgure 5.5(b)).

It can be shown [135] that combining this set of elementary gates {Uz(i)(θ), U (θ, φ), UMS(θ, φ)} arbitrary multi-qubit operations and mapping of observables Aij to σz(k) for read-out can be im-
plemented. This is similar to NMR techniques [15] where the spin-spin interaction that is always

present can be switched oﬀ by refocusing techniques. The dynamics of the system is thus controlled

by single qubit operations. In the ion trap case, the spin-spin interaction is replaced by the MS-

gate and the refocusing pulses are implemented with the addressed beam. Two simple examples

for such a pulse sequence with ions and their eﬀective circuit diagram are shown in ﬁgure 5.4 b

54

5.5 State tomography

Figure 5.6.: Absolute values of the density matrices for the states (a) |↑↓ +|↓↑ and (b) |↓↓ +|↑↓ reconstructed by a maximum likelihood method.

and c.

The

sequence

in

ﬁgure

5.4

b

shows

how

to

do

a

π 2

pulse

on

only

one

of

two

ions.

Both

ions

are

ﬁrst

rotated

by

U

(

π 4

,

0),

then

ion

1

gets

a

phase

shift

with

the

AC-stark

pulse

Uz(1)(π).

The

second

U

(

π 4

,

π)

pulse

on

both

ions

rotates

ion

2

to

the

initial

state

and

completes

the

π/2

rotation

on

ion

1. Example c is similar to the NMR case and is used to entangle two out of three ions. The ﬁrst

UM

S

(

π 4

,

0)

MS-gate

partially

entangles

all

three

ions.

A

stark

shift

pulse

on

ion

1

Uz(1)(π)

changes

the

phase

of

this

ion

by

π.

The

ﬁnal

UM

S

(

π 4

,

0)

MS-gate

entangles

ions

2

and

3

and

reverts

ion

1

to its initial state. So by ﬂipping the phase of one of the ions the interaction is switched oﬀ.

5.5. State tomography

State tomography is used to determine the density matrix of a quantum state by measurements on

an ensemble of identically prepared quantum states. As described in chapter 2.1.5, a measurement

of the expectation values λi of the Pauli operators σx, σy, σz is suﬃcient to directly reconstruct a density matrix describing a qubit state. For a qubit encoded in the electronic state of a trapped

ion, σz can be directly measured by detecting the ﬂuorescence of the ion (see chapter 4.5). The other two observables are measured by applying a unitary transformation prior to measuring σz on the transformed state. This transformation maps the eigenvectors corresponding to the eigenvalues

of σx or σy onto the eigenvalues of σz (see chapter 2.1.3). For multi-qubit systems it is necessary to measure observables which are tensor products of

Pauli matrices. The measurement procedure requires single-ion addressing and single-ion detection

capabilities. For two ions, observables like σz1⊗σy2 are determined by applying an addressed rotation on qubit 2 prior to measuring σz1, σz2 (each (±1)) with the CCD-camera. By correlating the results the expectation value for σz1 ⊗ σy2 can be measured by multiplying the ±1 outcomes and averaging over all realizations. To reconstruct the density matrix of two qubits nine measurements have to be carried out to determine the 16 expectation values of all products of σi⊗σi with σi = {Iˆ, σx, σy, σz}.
The unitary transformations we apply to the ions are implemented as shown in the preceding

chapter. A unitary transformation to measure e.g. σz1 ⊗ σy2 would exactly look like the sequence

of pulses shown in ﬁgure 5.4(b)

Ux

π 4

Uz1(π)Ux

π 4

.

(5.2)

55

Experimental techniques

A problem one faces is that in an experiment one can never determine the observables exactly, as an inﬁnite number of measurements is necessary to eliminate the statistical error. Thus a measurement of an expectation value λ¯i is only a best estimate for the actual expectation value. This seemingly small diﬀerence has important consequences as real physical Bloch vectors have to lie inside the Bloch sphere. When a state is reconstructed that is close to the boundary the statistical ﬂuctuations mig-
ht lead to a single-ion Bloch vector lying outside the unitsphere. In this case the corresponding density matrix has one eigenvalue > 1 and one eigenvalue < 1. As this matrix is no longer positive semideﬁnite it does not describe a physical state. This problem gets more severe the higher the dimension of the Hilbert-space becomes as more and more density matrix entries will be close to zero and can easily get negative if not enough data are taken.
This problem can be overcome by making use of the measurement results in another way. The strategy we use to determine the density matrix is based on a maximum likelihood method [136]. This method searches among all physically possible density matrices the one that is most likely to reproduce the observed measurement results. The measurements described above project the quantum state ρex onto a set of diﬀerent bases. For each of these bases, N copies of ρex were used, and in Nfi experiments ρex wa-
s projected onto the state |Ψi . The probability of ﬁnding exactly these results for an arbitrary density matrix ρ is given by the likelihood function

L(ρ) =

Ψj | ρ |Ψj Nfi .

j

(5.3)

The maximum likelihood estimation for an experimentally obtained density matrix is given by the state ρ that maximizes the log-likelihood function

L(ρ) = N fj log Ψi| ρ |Ψi .
j

(5.4)

As L(ρ) is a convex function on a convex set, it has no local maxima which simpliﬁes the task of maximizing L(ρ). If a directly reconstructed density matrix is valid it will also maximize the likelihood function, thus both methods reconstruct the same density matrix. Diﬀerent numerical methods can be used to maximize the log-likelihood function. The method used to reconstruct all density matrixes in this thesis relies on an iterative procedure [137] solving a nonlinear operator equation.
Figure 5.6 shows the absolute values of the density matrices for the states |↑↓ +|↓↑ and |↓↓ +|↑↓ created in the experiment.

56

6. Entangling calcium ions
The most complicated operations needed for QIP in ion traps are universal multi-qubit operations. Most implementations so far lack the performance to carry out gate operations in series without producing too high errors. This chapter will describe experiments on entangling either a pair of 40Ca+ ions or a pair of 43Ca+ ions. The ﬁrst section will focus on a high-ﬁdelity entanglement of 40Ca+ ions cooled to the ground state and to thermal states of motion with n = 0. The entanglement of three 40Ca+-
 ions by means of a MS interaction and the implementation of the ﬁrst steps to do arbitrary quantum circuits on three ions will be discussed in the next section. The chapter will be concluded by the description of an experiment where the knowledge gained with 40Ca+ ions was transferred to the more complicated level structure of 43Ca+ and used to entangle a pair of 43Ca+ ions. Especially interesting is the mapping of the entanglement from the optical onto the hyperﬁne qubit.
6.1. High ﬁdelity two ion Bell states
Recently the ﬁrst application of a Mølmer-Sørensen gate operation to an optical qubit was demonstrated [40]. In this experiment Bell states with a so far unmatched ﬁdelity of 0.993(1) were deterministically created. Here, a further investigation of this universal gate operation acting on optical qubits with an extended experimental analysis is presented. Particular emphasis is put on the compensation of AC-Stark shifts and amplitude pulse shaping to reach high ﬁdelities without compromising the ga-
te speed substantially. The gate characterization is extended further by investigating the ﬁdelity decay for diﬀerent input states after up to 21 individual operations. Possible error sources for the gate operation will be listed at the end.
Moreover, the ﬁrst experiments demonstrating a universal entangling gate operating on Dopplercooled ions are presented. For ions in a thermal state with n¯ = 18(2), Bell states with a ﬁdelity of 0.984(2) were obtained.
The ability to implement high ﬁdelity multi-qubit operations on Doppler-cooled ions is of practical interest in ion trap quantum information processing as the implementation of quantum algorithms demands several techniques that do not conserve the ions’ vibrational quantum state: (i) State detection of ancilla qubits as required by quantum error correction schemes [138] can excite the ion string to a thermal motional state close to the Doppler limit because of the interaction with the laser induci-
ng the ions to ﬂuoresce. (ii) Experiments with segmented trap structures where ion strings are split into smaller strings also tend to heat up the ions slightly [139]. Here, the availability of high-ﬁdelity gate operations even for thermal states may provide a viable alternative to the technically involved re-cooling techniques using a diﬀerent ion species [140, 141].
Note that all experiments, except the measurements shown in ﬁgure 6.4 demonstrating the high
57

Entangling calcium ions

(a)

(b)

slope duration pulse
duration

Light power

Time

Figure 6.1.: Eﬀect of amplitude pulse shaping on non-resonant population transfer caused by a bichromatic light ﬁeld non-resonantly exciting the carrier transition. Experimental results are presented for a gate duration of tgate=25 µs. A comparison of the evolution of the populations p2( ), p1( ), p0(•) for a square-shaped pulse (a) with an amplitude-shaped pulse (b) shows a suppression of the strong non-resonant oscillations for the latter case. The slopes are shaped as a Blackman window with a d-
uration of 2.5 µs, the ﬁgure inset showing the deﬁnitions of pulse and slope duration. Numerical simulations suggest that the actual pulse shape is not so important as long as the switching occurs suﬃciently slowly. The solid lines are calculated from (3.34) and (3.29). To match experimental data and simulations, we allowed for a time oﬀset ∆t = 0.5 µs that accounts for the ﬁnite switching time of the AOM controlling the laser power.
ﬁdelity gate on thermal ions, use the S1/2, mj = 1/2 level together with the D5/2, mj = 5/2 as a qubit instead of D5/2, mj = 3/2. The choice of the qubits was given by the beam geometry and the requirement of a high coupling strength (see chapter 3.3.1). The center of mass trap frequency for all experiments, except the measurements shown in ﬁgure 6.4 (c) (d) , was set to ωax/(2π) = 1.232 MHz which corresponds to a Lamb-Dicke parameter η = 0.044. For the mentioned exception the trap frequency was s-
lightly increased to ωax/(2π) = 1.465 MHz which corresponds to a LambDicke η = 0.04. The main ﬁndings of this chapter were also published in [76].
Two 40Ca+ ions were used to perform the experiments in this section. Doppler cooling and frequency-resolved optical pumping was applied to initialize the ions to |↓↓ . Then the MS interaction is switched on and the appropriate parameters are varied to do the measurements.
6.1.1. Amplitude pulse shaping
The merits of amplitude pulse shaping were studied by observing the time evolution of the populations pk at the beginning of the gate operation when the population transfer is dominated by fast non-resonant coupling to the carrier. For a better visibility of the eﬀect the ions were cooled to the ground state. Figure 6.1 (a) shows the population evolution for the ﬁrst 5 µs of a 25 µs gate operation based on a rectangular pulse shape. Averaging over a randomly varying phase ζ1, strong oscillations w-
ith a period of 2π/δ=0.84 µs were observed. The phase ζ, deﬁned in chapter 3.5, determines whether the gate operation starts in a maximum or a minimum of the intensity of
1ζ determines whether the gate operation starts in a maximum (ζ = 0) or a minimum (ζ = π/2) of the intensity of the amplitude-modulated beam (see chapter 3.5).
58

6.1 High ﬁdelity two ion Bell states

(a)

(b)

Figure 6.2.: (a) Populations p0( ), p1( ), p2(•) after a single gate operation (tgate=25 µs) where the global frequency detuning of the bichromatic entangling pulse is varied by scanning AO 2. A maximally entangled state is achieved for a global frequency detuning of (2π) 37 kHz relative to the qubit transition frequency due to AC-Stark shifts. (b) Introduction of a beam imbalance ξ = 0.08 shifts the pattern of the populations by the required amount to fully compensate for the AC-Stark-shift (note-
 the diﬀerent x-axis oﬀsets in (a) and (b)). The solid lines are calculated by solving the Schr¨odinger equation for the Hamiltonian given in (3.27) amended by a term accounting for the measured AC-Stark shift.
the amplitude modulated beam. Panel (b) shows that the non-resonant excitations vanish completely after application of amplitude pulse shaping with a slope duration of 2.5 µs corresponding to three vibrational periods of the center-of-mass mode. The slopes were shaped as a Blackman window [142], where the form of the shape is chosen such that a shaped and a rectangular pulse of the same duration have the same pulse area (see inset of panel (b)). Diﬀerent pulse lengths are achieved by varying the d-
uration of the central time interval during which the laser power is constant. The solid lines in the ﬁgure are calculated from (3.34) and (3.29).
6.1.2. AC-Stark shift compensation
The AC-Stark shift caused by bichromatic light with spectral components each having a Rabi frequency of Ω/(2π)=220 kHz (for tgate=25µs) is measured by scanning the global laser frequency using AO 2 (see ﬁgure 4.7). The resulting populations after a gate operation, again for ground state cooled ions, are depicted in ﬁgure 6.2 (a). We observe a drop of the population p1 to zero at a detuning of (2π) 37 kHz from the carrier transition. At this setting the ions are maximally entangled. By changing the-
 relative power of the bichromatic ﬁeld’s frequency components such that ξ = 0.08 (see chapter 3.5.1) the AC-Stark shift is compensated. This translates the whole excitation pattern in frequency space as can be seen in ﬁgure 6.2 (b).
A more sensitive method to infer the remaining AC-Stark shift δAC after a coarse pre-compensation consists in concatenating two gates separated by a waiting time τw in a pulse sequence akin to a Ramsey-type experiment [143] and scanning τw. This procedure maps δAC to a phase φ = δAC τw which is converted into a population change p2 = cos2(φ), p0 = sin2(φ) by the second gate pulse. For two ions, the corresponding Ramsey pattern displayed in ﬁgure 6.3 shows oscillations of the populations p0 and p2 -
with a frequency of two times the remaining AC-Stark shift.
59

Entangling calcium ions
Waiting time tw (µs)
Figure 6.3.: Population evolution of |↑↑ (•) and |↓↓ ( ) when scanning the waiting time between two 25 µs gate pulses in a Ramsey-like experiment. For this scan the detuning was set to (2π) 40 kHz. In this set of data, the AC-Stark shift was only partially compensated by imbalancing the power of the two frequency components. From the sinusodial ﬁts shown as solid lines, we infer an oscillation period of 258(4) µs corresponding to a residual AC-Stark shift of (2π) 1.94(3) kHz.
6.1.3. Gate analysis
A full characterization of the gate operation could be achieved by quantum process tomography [50]. At present, however, the errors introduced by the tomography pulse and individual qubit detection are on the few percent level in our experimental setup which renders the detection of small errors diﬃcult in the entangling operation. Instead, the quality of the gate operation was characterized by using it for creating diﬀerent Bell states and determining their ﬁdelities.
For the Bell state Ψ1 = |↓↓ + i |↑↑ , the ﬁdelity is given by F = Ψ1| ρexp |Ψ1 = (ρe↑x↑p,↑↑ + ρe↓x↓p,↓↓)/2 + Imρe↓x↓p,↑↑, with the density matrix ρexp describing the experimentally produced state. To determine F , the populations p2 + p0 need to be measured at the end of the gate operation as well as the oﬀ-diagonal matrix-element ρe↓x↓p,↑↑. To determine the latter, a π/2 pulse was applied to both ions with an optical phase φ to measure σz(1)σz(2) for the resulting state as a function of φ. This p-
rocedure is equivalent to measuring oscillations of the expectation value Tr(P (φ)ρexp) of the parity operator P (φ) = σφ(1)σφ(2) where σφ = σx cos φ + σy sin φ (see ﬁgure 6.4 (b) and (d)). The amplitude A of these oscillations equals 2|ρe↓x↓p,↑↑| and is obtained by ﬁtting them with the function Pﬁt(φ) = A sin(2φ + φ0).
Measurements [40] using |↓↓ as input state have demonstrated Bell state ﬁdelities as high as 0.993(1) (see ﬁgure 6.4 (a) and (b)) for gate times of 50 µs or 61 trap oscillation periods. Figure 6.4 (a) illustrates the population evolution induced by the gate pulse for ground-state cooled ions initially prepared in the qubit states |↓↓ . Figure 6.4 (b) displays parity oscillations for the produced Bell state. By doubling the detuning to /(2π)=40 kHz the gate duration is reduced to only 31 trap oscil-
lation periods and Bell states with a ﬁdelity of 0.971(2) were observed which is remarkable considering the small Lamb-Dicke parameter of η = 0.044. The detrimental eﬀects illustrated in ﬁgure 6.1 (a) are suﬃciently suppressed by amplitude pulse shaping. While many theoretical papers discussing Mølmer-Sørensen and conditional phase gates put much emphasis on
60

6.1 High ﬁdelity two ion Bell states
Figure 6.4.: Measured population evolution for p0(•), p1( ), p2( ) and parity oscillations with (a,b) and without (c,d) ground state cooling. In the latter case, population is transferred faster into |↑↓, n , |↓↑, n as compared to sideband cooled ions due to the higher coupling strength to the sidebands. In (c), the solid lines are a ﬁt to the data points using (3.36) with the mean phonon number n¯ as a free parameter giving n¯ = 18(2). The parity oscillations for the ions in a thermal state of mo-
tion have an amplitude of 0.980(2). Combining this measurement with the independently determined populations p2 + p0 = 0.988(1) results in a Bell state ﬁdelity of 0.984(2). The data appearing in (a) and (b) are taken from [40]. Here the deviation of the dashed lines from the data is caused by the AC-Stark shift compensation using ξ = 0.08. The dashed lines are calculated for n¯com = 0.05 from the propagator (3.29), neglecting pulse shaping and non-resonant carrier excitation. The solid lines are o-
btained from numerically solving the Schr¨odinger equation for time-dependent Ω(t) and imbalanced Rabi frequencies ξ = 0.08. The parity oscillations for the ground state cooled ions have an amplitude of 0.990(1) which leads to a ﬁdelity of 0.993(1). The amplitude of the parity oscillations was obtained by a ﬁt with the function P (φ) = A·sin(2φ+φ0). The value of the phase φ0 is without signiﬁcance. It arises from phase locking the frequencies ν, ν+, ν− and could have been adjusted to zero.
61

Entangling calcium ions

the possibility of entangling ions irrespective of their motional state by using these gates, there

has not been any experimental demonstration of this gate property up to now. The reason for this

is that independence of the motional state, as predicted by (3.29), is achieved only deep within

the Lamb-Dicke regime whereas experiments demonstrating entangling gates on hyperﬁne qubits

usually have Lamb-Dicke factors on the order of η = 0.1−0.2 [34, 109, 144]. Therefore, all previous

experimental gate realizations used laser cooling to prepare at least the motional mode mediating

the gate in its ground state with n = 0.

The corresponding time evolution and parity oscillations for ions that are merely Doppler-cooled

to a thermal state are shown in ﬁgure 6.4 (c) and the upper and lower motional sidebands scale as

(∝d)√rensp+e1ctiavnedly.∝A√s nth, encoonu-rpelsinognasnttresnigdtehbsanodn

excitation transfers population much faster from |↓↓, n into |↓↑, n ± 1 , |↑↓, n ± 1 as compared

to the case of ions prepared in the ground state with n¯ = 0. After the gate time tgate=50 µs, however, the undesired population p1 nearly vanishes as in the case of ground-state cooled ions and the Bell state Ψ1 is again created. In the experiment, we ﬁnd a population p1 = 0.012(1) in the undesired energy eigenstates. The parity oscillations have an amplitude of 0.980(2), resulting

in a Bell state ﬁdelity of 0.984(2). The reasons for the somewhat reduced ﬁdelity as compared

to ground-state cooled ions are only partially understood. In part, the ﬁdelity loss arises from

a variation of the coupling strength on the vibrational sidebands as a function of n caused by

higher-order terms in η. Fitting equations (3.36) to the population evolution data allows us to

determine the mean vibrational quantum number as n¯ = 18(2). This value is consistent with

independent measurements obtained by comparing the time evolution of the ions when exciting

them on the carrier and on the blue motional sideband. For a thermal state with n¯ = 18 and

η = 0.04 calculations show that this eﬀect amounts to additional errors of 5.5 × 10−3, which makes

up for most of the diﬀerence.2

The amplitude of the parity oscillations was obtained by a ﬁt with the function P (φ) = A ·

sin(2φ + φ0). The value of the phase φ0 is without signiﬁcance. It arises from phase locking the frequencies ν, ν+, ν− and could have been adjusted to zero by changing the phase of the signal generators producing ν+ and ν−.
As mentioned in Section 3.5.1, the AC-Stark compensation by unbalancing the power of the

red and blue frequency component is not applicable to ions in a thermal state. Instead, the laser

frequency needs to be adjusted to account for AC-Stark shifts δAC, a technique that works well as long as the AC-Stark shifts are smaller than the coupling strength λ of the gate interaction

appearing in (3.30) (otherwise, in the case δAC λ, small laser power ﬂuctuations give rise to large phase shifts). Therefore, care must be taken to choose the direction and polarization of the

gate laser such that a favorable ratio λ/δAC is obtained. In experiments with a gate duration of tgate=50 µs on the transition S1/2, mj = 1/2 → D5/2, mj = 5/2, we achieved λ/δAC ≈ 3 and needed to shift the laser frequency by about 7.5 kHz for optimal Bell state ﬁdelity. In the

experiments shown in ﬁgure 6.4, a further reduction of the AC-Stark shift could be obtained by

using a σ+-polarized laser beam incident on the ions along the direction of the magnetic ﬁeld. In

this geometry the AC-Stark shift is predominantly caused by the S1/2 ↔ P3/2 dipole transition

2The loss of ﬁdelity due to coupling strength ﬂuctuations is given by 1 − F = (π/2)2(δΩ/Ω)2. The expectation value for δΩ/Ω can be estimated by assuming a thermal state distribution and a coupling strength that depends on n in ﬁrst order as Ω = 1 − η2n.

62

6.1 High ﬁdelity two ion Bell states

Figure 6.5.: Bell state ﬁdelities after n gate operations applied to the input states |↓↓ ( ) and |↓↑ (•) for tgate = 50µs. Taking into account the error for state preparation of the input states |↓↑ and a similar error to measure the parity signal, we conclude that the gate operation works on all tested input states similarly well. The solid lines reﬂect a Gaussian decay of the parity fringe amplitudes as a function of the number of gates and a linear decay in the desired populations caused by th-
e spectral impurity of the laser. For both input states the gate operation implies errors of less than 0.2 after 21 consecutive applications.
since the D5/2, mj = +3/2 state does not couple to any of the 4p Zeeman states. Measurements show that the shift is reduced to about 1.8 kHz without compromising the gate speed.

6.1.4. Diﬀerent input states and multiple gate operations
For a gate time of 50 µs the analysis was extended by applying the gate to the state |↓↑ which is prepared by a π/2 rotation (beam 2) of both ions, followed by a π phase-shift pulse on a single ion performed with the far-detuned focused beam (as explained in chapter 5.4), and another π/2 rotation applied to both ions. This pulse sequence realizes the mapping

|↓↓ −→ | ↓ + ↑ | ↓ + ↑ −→ | ↓ − ↑ | ↓ + ↑ −→ |↓↑

(6.1)

to the desired input state for the gate. Imperfections of single-ion addressing led to an error in state preparation of 0.036(3) (Addressing was improved after these experiments had been performed to the values stated in chapter 5.4). For the Bell state analysis, the population p1 was measured to infer ρe↑x↓p,↑↓ + ρe↓x↑p,↓↑. Unfortunately parity oscillations cannot be introduced by a collective π/2 pulse acting on the state |↑↓ + i |↓↑ . Instead, this state was transferred into |↑↑ + i |↓↓ by repe-
ating the steps of sequence (6.1) as for the state preparation. The coherence was measured again by performing parity oscillations.
Figure 6.5 shows a comparison of the ﬁdelity of the gate starting either in |↓↓ or |↓↑ . The ﬁdelity of a Bell state created by a single gate starting in |↓↑ is 0.95(1). Taking into account the errors for state preparation and the Bell state analysis we conclude that the entangling operation works equally well for |↓↑ as an input state. This hypothesis is supported by the observation that for both states we obtain a similar decay of Bell state ﬁdelities with increasing gate number. The

63

Entangling calcium ions
Figure 6.6.: Fidelity as a function of the global frequency detuning of the bichromatic light pulse from the carrier transition (here, the sideband detuning was set to /(2π)=20 kHz). A maximum ﬁdelity of 0.995(4) was found for a detuning of 500 Hz from the transition center due to a residual AC-Stark shift. The solid line is obtained by numerically solving equation (3.27) and taking into account the AC-Stark shift compensation by diﬀerent powers of the blue and the red laser frequency component. A-
t the maximum the solid line experiences a second order frequency dependence of −9.6(3) × 10−9 Hz2.
application of N gate operations maps the input state |↓↓ to |↓↓ −→ |↓↓ + i |↑↑ −→ |↑↑ −→ |↓↓ + i |↑↑ −→ |↑↑ −→ . . .
and the state |↓↑ to |↓↑ −→ |↓↑ − i |↑↓ −→ |↑↓ −→ |↑↓ − i |↓↑ −→ |↓↑ −→ . . .
Compared with earlier results [40] where multiple gate operations were induced by varying the duration of a single bichromatic pulse, here up to 21 individual amplitude-shaped pulses were applied. Splitting up a long pulse into many shorter gate pulses has no detectable eﬀect on the ﬁdelity of the Bell states produced, and in both cases we obtain a Bell state ﬁdelity larger than 0.80 after 21 gates.
6.1.5. Gate errors
From the preceding measurements the following error sources can be determined and quantiﬁed (see also [40, 76]).
• A bichromatic force with time-dependent Ω(t) acting on ions prepared in an eigenstate of Sy creates coherent states α(t) following trajectories in phase space that generally do not close [145, 146]. For the short rise times used in our experiments, this eﬀect can be made negligibly (< 10−4) small by slightly increasing the gate time.
• Spin ﬂips induced by incoherent oﬀ-resonant light of the bichromatic laser ﬁeld reduce the gate ﬁdelity. The spectrum of the laser determined by a beat measurement (see ﬁgure 4.8(b))
64

6.1 High ﬁdelity two ion Bell states

shows that a fraction γ of about 2·10−7 of the total laser power is contained in a 20 kHz bandwidth B around the carrier transition when the laser is tuned close to a motional sideband. A simple model predicts spin ﬂips to cause a gate error with probability pflip = (πγ| |)/(2η2B). This would correspond to a probability pflip = 8 · 10−4 whereas the state populations measured for ﬁgure 6.5 are consistent with pflip = 2 · 10−3. Spin ﬂip errors could be further reduced by two orders of magnitude by s-
pectrally ﬁltering the laser light and increasing the trap frequency ω/(2π) to above 2 MHz where noise caused by the laser frequency stabilization is much reduced.

• Imperfections due to low frequency noise randomly shifting the laser frequency νL with respect to the atomic transition frequency ν were estimated from Ramsey measurements

on a single ion showing that an average frequency deviation ∆(νL−ν)/(2π) = 160 Hz occurred. From numerical simulations, one can infer that for a single gate operation this

frequency uncertainty gives rise to a ﬁdelity loss of 0.25% (an inﬁdelity of 10−4 would require

∆(νL−ν)/(2π) = 30 Hz). In the parity oscillation experiments shown in ﬁgures 6.4 and 6.5, however, this loss is not directly observable since a small error in the frequency of the bichro-

matic laser beam carrying out the gate operation is correlated with a similar frequency error

of

the

carrier

(

π 2

)φ

pulse

probing

the

entanglement

produced

by

the

gate

so

that

the

phase

φ of the analysing pulse with respect to the qubit state remains well deﬁned.

• Variations in the coupling strength δΩ induced by low-frequency laser intensity noise and ther-

mally occupied radial modes were inferred from an independent measurement by recording

the amplitude decay of carrier oscillations. Assuming a Gaussian decay, a relative variation

of δΩ/Ω = 1.4(1) · 10−2 is found. For m entangling gate operations, the loss of ﬁdelity is

approximately

given

by

1−F

=

(

πm 2

)2(δΩ/Ω)2

and

contributes

with

5 · 10−4

to

the

error

of

a single gate operation. For the multiple gate operations shown in ﬁgure (6.5), this source of

noise explains the Gaussian decay of ﬁdelity whereas laser frequency noise reduces the fringe

amplitude by less than 1% even for 21 gate operations. In combination with error estimates

for state preparation, detection and laser noise, the analysis of multiple gates provides us

with a good understanding of the most important sources of gate inﬁdelity.

• An error that was not investigated in [40] is the dependence of the Bell state ﬁdelity on the global laser frequency detuning from the qubit transition frequency. Experimental results are shown in ﬁgure 6.6. The solid line ﬁtting the data is calculated by numerically solving the full Schr¨odinger equation for diﬀerent global frequency detunings and evaluating the ﬁdelity. A second order frequency dependence of −9.6(3)×10−9 Hz2 is found from calculations at the maximum point. This suggests that o-
ur laser’s typical mean frequency deviation of 160 Hz contributes with 3 × 10−4 to the error budget.

• A further error source arises when the bichromatic beam couples to both ions with diﬀerent strengths. By recording Rabi oscillations simultaneously on the two ions we conclude that both ions experience the same coupling strength Ω to within 4%. From numerical calculations we infer an additional error in the measured Bell state ﬁdelity of less then 1 × 10−4.

• Another possible error source is heating of the COM-mode during the gate operation since

65

Entangling calcium ions
the gate is not insensitive to motional heating in the parameter regime of our implementation. Using the calculation performed in [81], we ﬁnd a ﬁdelity reduction of ∆F = Γhtgate/2 where Γh is the heating rate of the COM-mode. As in our experiments Γh = 3s−1, the ﬁdelity is reduced by ∆F ≈ 10−4 for tgate=50 µs.
6.1.6. Conclusion
Until recently, entangling gates for optical qubits were exclusively of the Cirac-Zoller type which require individual addressing of the ions. Compared to this type of gate the Mølmer-Sørensen gate gives an improvement in ﬁdelity and speed of nearly an order of magnitude. The achieved ﬁdelity sets a record for creating two-qubit entanglement on demand irrespective of the physical realization considered so far. The results with concatenations of 21 of these operations bring the realization of more -
complex algorithms a step closer to reality. The implementation of a gate without the need for ground state cooling is of particular interest in view of quantum algorithms that require entangling gates conditioned on quantum state measurements that do not preserve the ions’ motional quantum state.
When considering gate imperfections, two regimes are of interest: On the one hand, in view of a future implementation of fault-tolerant gate operations, it is important to investigate whether the gate operation allows in principle for gate errors on the order of 10−4 or below. On the other hand, for current experiments aiming at demonstrating certain aspects of quantum information processing, errors on the order of 10−2 are not forbiddingly high. For these experiments, the prospect of carrying out-
 a gate operation using ions that are not in the vibrational ground state of the mode mediating the internal-state entanglement, is appealing as it might allow to perform entangling gates after having split a long ion string into shorter segments (the splitting process has been demonstrated to heat up the ions by no more than a single quantum of motion [42]). Similarly, quantum state detection by light scattering on a cycling transition heats up the vibrational mode. However, if done properly, the-
 ﬁnal mean quantum number stays well below the average of 20 quanta for which we demonstrated entanglement generation. Therefore, experiments involving gates after splitting and detection operations might proﬁt from a quantum gate as demonstrated in chapter 6.1.
For future ion trap experiments in the fault-tolerant domain, the needs are going to be diﬀerent. Here, ground state laser cooling will most likely be indispensable to achieve the highest ﬁdelity possible. Also AC-Stark compensation based on imbalanced bichromatic beam intensities should be avoided as the technique tends to complicate the gate Hamiltonian and to introduce small additional errors. Even though the current experiments are still limited by technical imperfections, simulations predict -
that in principle it should be possible to achieve gate errors of 10−4 or below with a Mølmer-Sørensen gate on a quadrupole transition. Gates with ions in motional states are important in this context as no experiment will cool the ions to the ground state n = 0 perfectly (in current experiments, the ground state is typically occupied with a success rate of 90 to 99%). Our simulations indicate that for ions in n = 1, gate errors could still be as small as 2 · 10−4 so that gate errors of 10−4 or be-
low seem feasible even without perfect initialization of the motional mode.
The optical qubit as used here is certainly not the best solution for long time storage of quantum
66

6.2 Three ion entangled states and arbitrary operations on three qubits
Figure 6.7.: (a) Evolution of the populations oﬀ three ions p0( ), p1(•), p2( ) and p3( ) induced by a Mølmer-Sørensen interaction of pulse length τ . Pulse shaping is used to suppress oﬀ-resonant excitations. At 100 µs the maximally entangled state |↓↓↓ − |↓↑↑ − |↑↓↑ − |↑↑↓ is created. The solid lines are calculated from the propagator (3.29). (b) Populations p0( ), p1(•), p2( ) and p3( ) after a single gate operation (tgate=100 µs) where the global frequency detuning of the bichromatic entanglin-
g pulse is varied by scanning AO 2. A maximally entangled state is achieved at a detuning of 700 Hz relative to the qubit transition frequency due to uncompensated AC-Stark shifts. The solid lines are calculated by solving the Schr¨odinger equation for the Hamiltonian given in (3.27) amended by a term accounting for the measured AC-Stark shift.
information. Instead, qubits encoded in two hyperﬁne ground states whose frequency diﬀerence is insensitive to changes in magnetic ﬁeld are preferable. These magnetic-ﬁeld insensitive hyperﬁne qubits can store quantum information for times exceeding the duration of the gate operation presented here by more than four orders of magnitude [102, 147, 148]. However, on such qubit states no high-ﬁdelity universal gates have been demonstrated so far. By mapping between the hyperﬁne qubit encoded in the i-
on’s ground states and the optical qubit we will beneﬁt from both of their advantages (see chapter 6.3).
6.2. Three ion entangled states and arbitrary operations on three qubits
After entangling two ions with a MS interaction the next obvious step is to entangle more ions. Unfortunately in the current setup we are not able to reliably trap more than three ions in a crystal-like structure with reasonable trapping parameters. The issue is not yet clear, but most likely this is due to a high collision rate of the ions with background gas particles. An indication for this is, that on average every 4 h an ion in a crystal becomes dark due to a chemical reaction with the backgr-
ound gas. Measurements of the axial oscillation frequency of a two ion crystal with one dark ion indicated that an OH group attached itself to a dark ion. As we are not able to trap more than four or more ions the experiments presented in this chapter only deal with entangling three ions. The results are very similar to the ones recently published by Chris Monroe’s group [149]. The diﬀerence is that in this thesis the qubit is an optical one and a single axial oscillator mode is used for mediating-
 the coupling.
67

Entangling calcium ions

Figure 6.8.:

(a)

A

(

π 2

)(−y)

pulse

applied

to

all

ions

maps

the

three

ion

entangled

state

|↓↓↓ − |↓↑↑ − |↑↓↑ − |↑↑↓ onto the GHZ state |↓↓↓ + i |↑↑↑ . A second

π 2

φ analysis pulse

again applied to all ions gives rise to parity oscillations P (φ) = A · sin(3φ) as a function of φ.

The obvious diﬀerence to parity ﬂops with two ions is the diﬀerent period, three oscillations

occurring for φ changing from 0 to 2 π. A ﬁt with the function P (φ) = A · sin(3φ + φ0) yields the parity fringe amplitude A = 0.977(2). The value of the phase φ0 is without signiﬁcance. Together with the independently measured populations p1 + p2 = 0.0189(1) this leads to a GHZ state ﬁdelity of 0.979(2). (b) Parity like oscillations of the states

(|↑↑ 1,2 + i |↓↓ 1,2) ⊗ |↓ 3 (◦) and (|↑↓ 1,2 + |↓↑ 1,2) ⊗ |↓ 3 (♦) created by entangling two out

of three ions. The analysis

π 2

φ pulse was applied to two ions and the state evolution was

analyzed with the camera. The addressing of all operations on two ions is clearly visible

in the states |↑↑ 1,2 ⊗ |↑ 3 , i |↓↓ 1,2 ⊗ |↑ 3 (combined in •) and |↑↓ 1,2 ⊗ |↑ 3 , |↓↑ 1,2 ⊗ |↑ 3 (combined in ) as they show no oscillatory behavior and are not populated. From these

data one can infer a state ﬁdelity of 0.958(2) for entangling two ions and leaving the third

one untouched.

6.2.1. A three ion Mølmer-Sørensen gate
Three 40Ca+ ions were loaded into the linear trap. After Doppler cooling and frequency-resolved optical pumping, the axial center of mass mode is cooled close to the motional ground state. The ions are now initialized to |↓↓↓ . Then, the gate operation is performed with beam 1 (see ﬁgure 5.4)(a) and the probabilities pk of ﬁnding k ions in the state |↓ are measured for a varying pulse duration. A Rabi frequency of Ω/(2π) ≈ 70 kHz is required for performing a gate operation with /(2π) = 10 kHz and -
a three-ion Lamb Dicke parameter of η = 0.036. To make the bichromatic laser pulses independent of the phase ζ, the pulse is switched on and oﬀ by using pulse slopes of 2 µs duration.
The time evolution of the three-ion state populations pk are shown in ﬁgure 6.7 (a). After a gate time of tgate=100 µs the undesired populations p0 and p2 nearly vanish and the state |↓↓↓ − |↓↑↑ − |↑↓↑ − |↑↑↓ is created. In the experiment, we ﬁnd a population p0 + p2 = 0.0189(1) in the undesired energy eigenstates. Contrary to the two ion case, an application of two times the gate does not ﬂip the state of all qubits but rather returns all populations to the initial state.
The AC-Stark shift caused by the bichromatic light is not compensated. A scan of the global laser frequency reveals a vanishing of the undesired populations p0 + p2 at 700 Hz detuning relative to the carrier transition. The resulting frequency dependence of the populations after a gate operation are depicted in ﬁgure 6.7 (b).

68

6.2 Three ion entangled states and arbitrary operations on three qubits

For the state Ψ1 = |↓↓↓ − |↓↑↑ − |↑↓↑ − |↑↑↓ , the ﬁdelity is not directly observable with parity

oscillations.

First

a

Ux

(

π 2

)

pulse

is

applied

to

all

ions

mapping

the

entangled

state

|↓↓↓

− |↓↑↑

−

|↑↓↑

− |↑↑↓

onto the GHZ state |↓↓↓

− i |↑↑↑

.

A

second

U

(

π 2

,

φ)

analysis

pulse

again

applied

to

all ions gives rise to parity oscillations P (φ) = A·sin(3φ) as a function of φ (see ﬁgure 6.8 (a)). The

obvious diﬀerence to parity ﬂops with two ions is the diﬀerent period, three oscillations occurring

for φ changing from 0 to 2 π. A ﬁt with the function P (φ) = A · sin(3φ + φ0) yields the parity fringe amplitude A = 0.977(2). Combining this measurement with the previously measured state

populations a ﬁdelity of 0.979(2) is obtained for Ψ1.

6.2.2. Entangling two out of three ions

The goal for all QIP experiments is to implement arbitrary quantum circuits. Here a ﬁrst step to-

wards that direction is presented by combining a global MS-interaction with addressed σz rotations and global carrier pulses as described in chapter 5.4.

The most important operation is to implement the pulse sequence shown in ﬁgure 5.4(c). This

pulses sequence eﬀectively switches oﬀ the interaction between one ion and the other two. After

the application of these pulses we end up in the state Ψ2 = (|↑↑ 1,2 + i |↓↓ 1,2) ⊗ |↓ 3 where the

subscript denotes the ion. To analyze the ﬁdelity of this state we again apply a

π 2

φ

pulse

to

the two entangled ions by using the same principle. All ions are ﬁrst rotated by

π 4

φ,

then ion

1 experiences a π phase shift by an AC-stark pulse. The second

π 4

φ

pulse rotates ion 2 and 3

by the desired angle and returns ion 1 to the initial state. This pulse sequence induces parity-like

oscillations between the states Ψ2 and (|↑↓ 1,2 + |↓↑ 1,2) ⊗ |↓ 3. The state of the ions was detected with the help of the camera and the recorded oscillations are shown in ﬁgure 6.8. The addressing of

all operations on two ions is clearly visible in the evolution of the states |↑↑ 1,2 ⊗ |↑ 3 , |↓↓ 1,2 ⊗ |↑ 3 and |↑↓ 1,2 ⊗ |↑ 3 , |↓↑ 1,2 ⊗ |↑ 3. These states are not populated, thus they eﬀectively did not participate in any of the operations. From these data combined with the independently measured

population one can infer a state ﬁdelity of 0.958(2) for the state Ψ2. Realizing this pulse sequence opens up the possibility for more complicated sequences as all

the necessary building blocks have been demonstrated. Recent experiments published by the

group of David Wineland demonstrated a diﬀerent approach to implement arbitrary quantum

circuits [55, 56]. They “designed“ their interactions by moving the ions in a segmented trap and

re-cooling them with a diﬀerent ion species.

One particularly interesting algorithm is the one for correcting phase errors on a single qubit as

shown in ﬁgure 6.9. The ﬁrst MS gate encodes qubit 1 in a three ion state that is protected against

phase errors. After the error occurred, the following pulses detect and correct for the error. After

the operation only ion 1 is in the corrected state, ion 2 and 3 are in some arbitrary state. Ion

1 can be again protected by resetting ion 2 and 3 to |↓↓ and applying another entangling pulse.

The phase errors that can be corrected are either a phase ﬂip on one ion or small phase errors on

all of them, e.g. a π/10 phase error on all of them is corrected in more than 99.8% of the cases

assuming perfect operations. In this sequence one can identify a building block very similar to the

one entangling two out of three ions. Meanwhile experiments have been performed implementing

this algorithm and will be published soon. Similar algorithms using the same NMR-like techniques

and building blocks were investigated by Volckmar Nebendahl in his thesis [150]. The sequence for

69

Entangling calcium ions
Figure 6.9.: Error correction sequence for three ions. The ﬁrst MS gate encodes qubit 1 in a three ion state. After this encoding a phase error can occur and the subsequent pulses detect and correct for it. After the operation only ion 1 is in the corrected state, ion 2 and 3 are in some arbitrary state. Ion 1 can be again protected against phase errors by resetting ion 2 and 3 to |↓↓ and applying another entangling pulse. The phase errors that can be corrected are either a phase ﬂip on one ion or-
 smaller phase errors on all of them. The grey box corresponds to the block already implemented, entangling two out of three ions.
the error correction code shown here and multi qubit gates like a Toﬀoli gate [151] can be found in his thesis.
6.3. High ﬁdelity entanglement of 43Ca+ hyperﬁne clock states
In experiments with trapped ions most of the elementary building blocks for quantum information processing have been demonstrated. State initialization, long quantum information storage times, entangling gates and readout have been realized with high ﬁdelity [40, 109, 147, 148, 152, 153]. A major challenge in current experiments is to integrate these building blocks into a single setup and make them work for a given ion species and parameter range set by the trap frequencies, the magnetic ﬁeld str-
ength and further parameters. Quantum information encoded in ground state atomic levels whose energy diﬀerence only weakly depends on changes of the magnetic ﬁeld (“clock“ states) has been stored for more than a second [147, 148, 154, 155].
Most high ﬁdelity entangling operations have been demonstrated on qubits with limited coherence times [102, 109]. One exception is the entanglement of hyperﬁne clock states in a Yb+ system demonstrated by Kim et al. [149].
An attractive way of combining high ﬁdelity entangling gates with long storage times is to coherently map the quantum information from clock states to atomic states which are suitable for performing the entangling operation with high ﬁdelity, and to map the information back at the end of the entangling operation [147]. In case this mapping operation is addressed at individual ions - for instance by using a strongly focused laser - the entanglement operation can be applied to the entire ion string.
The coherence time of the optical qubit used for entangling the ions is limited by magnetic ﬁeld ﬂuctuations, laser linewidth and ultimately the 1.2 s lifetime of the D5/2 state. For the most abundant isotope 40Ca+, encoding the qubit in long-lived hyperﬁne clock states is impossible as this isotope has a nuclear spin I = 0. In the isotope 43Ca+ on the other hand where I = 7/2, coherence times of many seconds have been measured for qubits encoded in the S1/2(F = 4, mF = 0) and S1/2(F = 3, mF = 0) -
states [154, 155].
70

6.3 High ﬁdelity entanglement of 43Ca+ hyperﬁne clock states
Figure 6.10.: (a) Energy levels of 43Ca+ showing the hyperﬁne splitting of the atomic states S1/2 and D5/2. Microwave radiation applied to an electrode close to the ions drives the hyperﬁne qubit encoded in the states |↓ and |↑ . A laser at 729 nm excites the ions on the transition from the S1/2(F = 4) to the D5/2(F = 2, .., 6)-states. It is used for ground state cooling, state initialization, state discrimination and to excite the optical qubit comprised of the states |↓ and |⇑ or |⇑’ . (b) Using-
 a bichromatic laser beam, two 43Ca+ ions are entangled on an optical transition with a maximum target state ﬁdelity of 96.9(3)% at a magnetic ﬁeld of 6 G. By introducing a waiting time between the creation and the analysis of the Bell state we observe a Gaussian decay of the Bell state ﬁdelity (•) (black solid line). Data for the ﬁrst 3 ms are displayed as inset. When the optical qubit is mapped to the hyperﬁne qubit subsequent to the gate operation we obtain a maximum Bell state ﬁdelity of 96.7(-
3)% and the lifetime of the entanglement increases to 96(3) ms ( ). Measurements taken at a magnetic ﬁeld of 3.4 G give similar results ( ) for the coherence time. Here, the optical qubit |↓ ↔ D5/2(F = 4, mF = 2) in combination with the laser beam 3 was used for entangling the ions. Each data point represents 18.000 to 24.000 individual measurements.
In this chapter a combination of the long quantum information storage times observed for the hyperﬁne qubit of a single 43Ca+ ion with the high ﬁdelity gate operation on optical qubits is investigated by mapping between these two qubits. The steps for state initialization and Bell state preparation in the optical qubit are discussed. Then the mapping to the hyperﬁne qubit is described and for both qubits the entanglement decay is measured. Remapping to the optical qubit after a 20 ms storage time -
and the application of further gate operations is demonstrated. Due to the nuclear spin of I = 7/2, the isotope 43Ca+ has a relatively complex energy level structure compared to other ions used for quantum information processing. Magnetic ﬁeld and polarization settings are discussed to reduce errors due to close by Zeeman-levels, which are especially harmful for gate operation in the case when large coupling strengths are required in a relatively short time. The ﬁndings of this chapter were also p-
ublished in reference [77]. Similar techniques were implemented in experiments conducted in David Wineland’s group [55, 56].
6.3.1. Qubit preparation and manipulation
An energy level scheme for 43Ca+ with all relevant hyperﬁne levels is shown in ﬁgure 6.10 (a). In the experiments reported here, the hyperﬁne qubit, comprised of the states |↑ ≡ S1/2(F = 3, mF = 0) and |↓ ≡ S1/2(F = 4, mF = 0), is driven by applying a microwave ﬁeld (3.2 GHz) to one of the electrodes which is also used to compensate for external electric stray ﬁelds (see ﬁgure 4.1
71

Entangling calcium ions
electrodes (C)).
Each experimental sequence starts by Doppler-cooling the ions for 3 ms followed by sideband cooling of both axial modes close to the ground state (n¯com, n¯st ≈ 0.03(3), 0.4(1); 5 ms and 3 ms). Optical pumping (as described in chapter 5.4) initializes both ions in the energy level S1/2(F = 4, mF = 4) in more than 98.9% of the cases.
Subsequently the populations of both ions are transferred by a π-pulse to the energy level D5/2(F = 3, mF = 2) (transfer 1). By turning on the lasers at 397 nm and 866 nm for 500 µs one can detect residual population remaining in the S1/2 state manifold (PMT check). All cases where more than 3 photons are detected are rejected (∼ 20 photons/ms are received per ion in the S1/2-state at a dark count rate of 0.2 photons per ms). The rejection rate is typically 2%. Initialization of the hyperﬁne qubit-
 is completed by another π-pulse (transfer 2) on the transition D5/2(F = 3, mF = 2) ↔ S1/2(F = 4, mF = 0) ≡ |↓ . In total the initialization of internal and external degrees of freedom takes about 12 ms and the qubit state |↓↓ is populated with a ﬁdelity of more than 99.2%. The ﬁdelity of state initialization to |↓↓ is measured by transferring the population with two consecutive π-pulses from |↓↓ to two diﬀerent Zeeman-levels in the D5/2 manifold (D5/2(F = 3, mF = 2) and D5/2(F = 5, mF = 2)) and d-
etermining the remaining population in the S1/2 by ﬂuorescence detection. The ﬁdelity of optical pumping is determined in a similar way.
The magnetic ﬁeld is set to 6.0 G in order to achieve a suﬃciently large frequency separation of the neighboring transition lines in the spectrum of the S1/2 ↔ D5/2 quadrupole transition [126]. The transition |↓ ↔ D5/2(F = 6, mF = 1) ≡ |⇑ is chosen as optical qubit because of its small magnetic ﬁeld sensitivity of 350 kHz/G (which is at least a factor of two lower than the sensitivity of any mF = 0 to mF = 0 transition for the chosen magnetic ﬁeld) and in order to avoid having coinciding resonance-
s with (micro)motional sidebands of other spectral components. Moreover, this choice of optical qubit has the advantage of a comparatively large Clebsch-Gordan coeﬃcient which together with a carefully set laser polarization (for this qubit we use beam 1 as shown in ﬁgure 5.4(a)) suppresses neighboring Zeeman transitions with ∆m = +1. The transitions ∆m = 0 and 2 are suppressed by factors of 38 or more in terms of their Rabi frequencies, the strongest being the |↓ ↔ D5/2(F = 6, mF = 0) transition,-
 whose resonance is more than 4 MHz away from the |↓ ↔ |⇑ transition. The two closest transitions are S1/2(F = 4, mF = ±1) ↔ |⇑ ( 2 MHz away) which are suppressed by a factor of 270 in coupling strength. The high coupling strength on the gate transition reduces the required power for the gate operation and thus the AC-Stark shift caused by oﬀ-resonant coupling to dipole transitions.
After initialization to |↓↓ , a Mølmer-Sørensen entangling operation (MS 1) consisting of a single bichromatic laser pulse is applied to the optical qubit transition to create a Bell state of |↓↓ + i |⇑⇑ . The gate time τgate = 100 µs corresponds to a detuning of 10 kHz from the axial sideband. For the chosen beam geometry, these settings lead to an AC-Stark shift of 3.5 kHz which is fully compensated by using diﬀerent coupling strengths Ωb, Ωr for the red and the blue detuned frequency component -
with ξ = 0.14.
72

6.3 High ﬁdelity entanglement of 43Ca+ hyperﬁne clock states

Table 6.1.: Duration and errors of each experimental step and the achieved state ﬁdelities.

Experiment Duration Error

State

step

(µs)

(%) ﬁdelity (%)

Opt. pumping Transfer 1 PMT check Transfer 2
Total prep. |↓ MS 1 Map Wait Map−1 MS 2 MS 3

600 20 500 20 1140 100 120 20 × 103 120 100 100

< 1.1 0.7 0.7
< 0.1 < 0.8
2.3 0.2 2.2 0.7 3.7 2.9

> 98.9 98.2 99.3
> 99.2 > 99.2
96.9 96.7 94.6 93.9 90.4 87.8

6.3.2. Experimental results
The ﬁdelity of the created Bell state is determined by measuring the populations p0 +p2 in |↓↓ and |⇑⇑ and the coherence between the two states. The coherence is again inferred from the amplitude of parity oscillations. The maximum ﬁdelity was determined to 96.9(3)%. The durations and errors of all experimental steps and the achieved state ﬁdelities are given in table 6.1.
By introducing a waiting time before the Bell state analysis, a Gaussian decay of the parity fringe contrast is observed. From this model a Bell state ﬁdelity of 75% after 3.43(5) ms is extrapolated (see inset of ﬁgure 6.10(b)) corresponding to a loss of 50% of the coherence since the state populations hardly change. The magnetic ﬁeld sensitivity of this optical qubit is 350 kHz/G which is one cause of dephasing. However, in measurements where a single 43Ca+ ion is probed on the ﬁrst order ﬁeld in-
sensitive transition (S1/2(F = 4, mF = 4) ↔ D5/2(F = 4, mF = 3) at 3.4 G) a single qubit coherence times of 8.1(3) ms is obtained (see ﬁgure 4.8(a) inset). This leads to the conclusion that the decoherence on the optical qubit is also caused by acoustical noise picked up by the 2 m ﬁber cord used and the ﬁnite linewidth (∼ 20 Hz) of the laser.
Mapping the optical qubit to the hyperﬁne qubit is achieved by a microwave π-pulse on the hyperﬁne qubit transition followed by a π-pulse on the optical qubit (map) which results in an average error rate of 0.2%. Detection of the hyperﬁne qubit states is done by shelving the population of |↓ to the D5/2 manifold by two consecutive π-pulses to diﬀerent Zeeman states (D5/2(F = 5, mF = 2) and D5/2(F = 6, mF = −2)) followed by ﬂuorescence detection. A Bell state ﬁdelity measurement after the mapping y-
ields a parity fringe contrast of 95.7% - induced by varying the phase of a microwave π/2-pulse - corresponding to a target state ﬁdelity of still 96.7%. By delaying the state analysis a Gaussian decay of the parity fringe pattern is observed (ﬁgure 6.10) corresponding to a 50% loss of phase coherence on a time scale of 96(3) ms which means that a factor 28 in coherence time is gained compared to the optical qubit.
For a successive gate application the Bell state is mapped back to the optical qubit (map−1) after a waiting time of 20 ms and the gate (MS 2) is applied a second time, disentangling the ions to |⇑⇑ in 90.4% of the cases, indicating an error of 3.7%. Another subsequent application of the gate (MS 3) adds an error of 2.9% leading to |↓↓ − i |⇑⇑ with a ﬁdelity of 87.8%.
The results with successive gates suggest that the Bell state ﬁdelity depends slightly on whether

73

Entangling calcium ions
the gate is applied to the input state |↓↓ or |⇑⇑ , an eﬀect already observed in previous experiments. This observation can be explained by the diﬀerent spectator states into which the population can leak by unwanted excitations. The eﬀect is most prominent in a series of measurements where the magnetic ﬁeld was set to 3.4 G. For this ﬁeld strength the Zeeman splitting of the ground state and the axial trap frequency coincide to within 10 kHz. Using the transition |↓ ↔ D5/2(F = 4, mF = 2) ≡ |⇑’ as-
 optical qubit the polarization of beam 3 (see ﬁgure 5.4(a)) is adjusted to suppress the coupling strength to the nearest neighboring transitions. Note that in this geometry and polarization setting, both ∆m = ±2 have optimal coupling, so a higher gate laser power is required as compared to |⇑ . This leads to Bell state ﬁdelities of up to 96.3% after a single gate operation applied to |↓↓ . The decoherence for these Bell states after mapping to the hyperﬁne qubit is also shown in ﬁgure 6.10(b). Ap-
plying the gate operation on the input state |⇑’⇑’ the maximum obtained Bell state ﬁdelity after a single gate operation is only 92%. Further measurements at a magnetic ﬁeld of 1.36 G where we expected no coincidences of spectral components reveal a maximum Bell state ﬁdelity of 95%. For these measurements, beam 1 was used again with |↓ ↔ |⇑ as the optical qubit.
6.4. Comparison between 40Ca+ and 43Ca+.
Several experiments including this thesis have demonstrated that 40Ca+ and 43Ca+ ions are suited for QIP processing. Most DiVincenzo criteria including high ﬁdelity entangling gates have been demonstrated for both isotopes. 40Ca+ has the advantage of a very simple level structure but lacks the possibility to encode qubits in states with low magnetic ﬁeld dependence. Furthermore the coherence time of the optical qubit suﬀers from laser frequency noise. Handling 43Ca+ is much more diﬃcult due to its-
 complicated level structure. The advantage of 43Ca+ is that qubits can be encoded in hyperﬁne and optical states with low magnetic ﬁeld dependence. The hyperﬁne qubit has an additional advantage as it can be manipulated by either a Raman laser or a microwave ﬁeld such that the frequency instability of the driving ﬁeld is negligible.
Comparing the results for entangling 43Ca+ ion with the results obtained for entangling 40Ca+ ions, one can conclude that low errors of the Mølmer-Sørensen interaction on the optical qubit require that the qubit transition is well isolated from other spectral components such that no other transitions are erroneously excited. This view is supported by the observation that the gate mechanism favors a high magnetic ﬁeld, where the transitions to neighboring lines are spectrally well separated. Howeve-
r, the sensitivity to magnetic ﬁeld ﬂuctuations of the hyperﬁne qubit increases for higher ﬁelds. Therefore, a particularly interesting regime for 43Ca+ ions occurs at a magnetic ﬁeld of 150 G where nonlinearities in ground state Zeeman splitting lead to a ﬁrst order magnetic ﬁeld insensitive transition S1/2(F = 4, mF = 0) ↔ S1/2(F = 3, mF = 1). This promises even longer coherence times as well as smaller errors for all spectrum dependent operations since the Zeeman splitting is huge compared to t-
he measurements presented here.
The following points summarize and compare the operations used to handle the optical qubit in 40Ca+ and the optical and hyperﬁne qubit in 43Ca+. Additionally the coherence times achieved in this experiment for diﬀerent qubits are given.
74

6.4 Comparison between 40Ca+ and 43Ca+.
Doppler-cooling is more complicated for 43Ca+: • 40Ca+: One π-polarized 397 nm laser and one 866 nm laser is suﬃcient for Doppler-cooling. • 43Ca+: Multiple frequency components in the σ+-polarized 397 nm laser and the 866 nm laser are necessary for Doppler cooling. Additionally, a second π-polarized 397 nm laser is needed to avoid population trapping in dark states.
State initialization of the 43Ca+ hyperﬁne qubit is more complicated than initializing the optical qubit:
• optical qubit: Optical pumping with a σ+-polarized 397 nm is suﬃcient to initialize the state of 40Ca+ to S1/2, m = 1/2 or the state of 43Ca+ to S1/2, F = 4, mF = 4.
• hyperﬁne qubit: To initialize the state S1/2, F = 4, mF = 0 two additional π pulses on the quadrupole transition or four microwave π pulses are necessary.
The Mølmer-Sørensen gate operation works better for 40Ca+ ions: • 40Ca+: A Mølmer-Sørensen gate operation has been achieved which generated Bell states with ﬁdelities exceeding 99%. [40] • 43Ca+: The gate ﬁdelity is limited by oﬀ-resonant excitation of close-by Zeeman-states to about 97%. [77]
The coherence properties of 43Ca+ qubits are better than the coherence properties of 40Ca+ qubits: • 40Ca+ optical qubit: The coherence time for a single ion is limited to about 3 ms by magnetic ﬁeld ﬂuctuations and laser frequency noise. • 43Ca+ optical qubit: Due to the availability of magnetic ﬁeld independent transitions the coherence time is only limited by the laser stability. For a single ion a coherence time of 8 ms was measured. • 43Ca+ hyperﬁne qubit: For the hyperﬁne qubit S1/2, F = 4, -
mF = 0 ↔ S1/2, F = 3, mF = 0 a coherence time of several seconds has been measured. [154] Which isotope is chosen for a particular experiment depends on what sets the experimental limit
in the sequences that should be run. If the sequence is short and one is interested in the best overall ﬁdelity (considering the current experimental status) and the easiest handling, then 40Ca+ should be used. If the limit is set by the coherence time then one should consider using 43Ca+. It is not absolutely necessary to use the hyperﬁne qubit in 43Ca+. The coherence time can already be increased by choosing a magnetic ﬁeld independent transition on the optical qubit in 43Ca+. This has the advan-
tage that the handling is still quite simple and one avoids the complicated read out and initialization steps of the hyperﬁne qubit.
75

Entangling calcium ions 76

7. Experimental test of quantum
contextuality
Since the beginning of quantum mechanics (QM) it has been debated whether hidden variable (HV) theories can account for the intriguing features of QM [64, 156]. Especially the indeterminism of QM was a feature some physicists could not accept and was one of the reasons why HV theories came up. In the sixties, Bell found that local HV theories cannot reproduce the quantum mechanical correlations for local measurements on entangled states [65]. Later, a series of experiments conﬁrmed a conﬂict betwe-
en HV and QM theories by realizing a reﬁned version of Bell’s “Gedankenexperiment“ [66–69]. These experimental refutations led to additional assumptions and restrictions for the structure of local HV theories.
Kochen, Specker and Bell [70–72] proposed another HV theorem testing for non-contextuality of measurements. Non-contextuality is the property of a HV model that the value of a measurement v(A) is determined, regardless of which other compatible measurement is measured jointly with A. Two or more measurements (A,B,C,. . .) are compatible if they can be measured jointly on the same individual system without disturbing each other. Compatible measurements can be made simultaneously or in any order and-
 can be repeated any number of times on the same individual system and must always give the same result independently of the initial state of the system. A context is a set of compatible measurements. A physical model is called non contextual if it assigns a measurement result independent of which other compatible measurements are carried out on the probed system. Non contextuality is a plausible assumption for all physical models especial for measurements on distant systems or in the case of meas-
urements concerning diﬀerent degrees of freedom on the same system. The KS theorem states that noncontextual HV theories cannot reproduce the predictions of QM.
For some time it has been debated whether the Kochen Specker (KS) theorem could be experimentally tested at all [157, 158]. Nevertheless an experiment has been proposed testing for these HV theories [159]. Here the ﬁrst experiment testing a complete Kochen Specker theorem [75] falsifying non-contextual HV theories is presented. Recently additional results with photons [73] and NMR qubits [74] have shown similar results.
In the following chapter the notions compatibility and contextuality as well as the KS theorem will be discussed. Then the experimental realization of quantum non-demolition measurements and a test of the Kochen Specker theorem will be shown. At the end of this chapter the results will be analyzed and possible loopholes will be discussed. The ﬁrst section is taken from reference [160] whereas the experimental ﬁndings were already published in reference [75].
77

Experimental test of quantum contextuality
7.1. The Kochen-Specker theorem
7.1.1. Measurement scenario
The situation in the experiment will be the following: On an individual system a sequence of dichotomic measurements (outcomes ± 1) will be performed. The question that arises is: under which conditions can the result of such measurements be explained by HV theories? Or more precisely, which conditions a HV model has to violate to reproduce the QM predictions? The HV model will be described by a distribution p(λ) with the hidden variable λ ∈ Λ from a set Λ. The distribution summarizes all informat-
ion about the past, including all preparation steps and all measurements already performed. Causality is assumed, so the distribution is independent of any event in the future. It rather determines all the probabilities of the results of all possible future sequences of measurements. We assume that, for a ﬁxed value of the HV, the outcomes of future sequences of measurements are deterministic, hence all indeterministic behavior stems from the probability distribution.
7.1.2. Notation
In an experiment the state of the system is prepared in a repeatable way. In the language of HVmodels this leads to a probability distribution pexp(λ) that can be repeatedly produced even though its actual form is unknown. In a single instance of an experiment, one obtains a state determined by the HV λexp. Which λexp has been prepared cannot be controlled by the experimentalist and the HV is distributed according to pexp(λ).
The following notation will be used to describe measurements and their outcomes. Ai denotes the measurement of the property A at the position i in the sequence. A sequence of measurements is denoted by A1B2C3 when A is measured ﬁrst, then B and ﬁnally C. The result of a speciﬁc measurement e.g. B2 in such a sequence is written as v(B2|A1B2C3). In addition v(A1B2C3) = v(A1|A1B2C3)v(B2|A1B2C3)v(C3|A1B2C3). For the probability distribution p(λ), one can deﬁne probabilities like p(B2+|A1B2C3) [or p(B2-
+C3−|A1B2C3)] denoting the probability of obtaining the value B2 = +1 [and C3 = −1] when the sequence A1B2C3 is measured. Then, one can also consider mean values like B2|A1B2C3 = p(B2+|A1B2C3) − p(B2−|A1B2C3), or the mean value of the complete sequence, A1B2C3 = p[v(A1B2C3) = +1] − p[v(A1B2C3) = −1].
7.1.3. Compatibility of measurements
First the notion of compatibility has to be deﬁned. In the simplest case, this is a relation between a pair of observables, A and B. For that, let SAB denote the (inﬁnite) set of all sequences, which use only measurements of A and B, that is, SAB = A1, B1, A1A2, A1B2, B1A2, . . .. Then one can formulate:
Deﬁnition 1. Two observables A and B are compatible, denoted by A ∼ B, if the following two conditions are fulﬁlled:
(i) For any instance of a state (that is, for any λexp) and for any sequence S ∈ SAB the obtained
78

7.1 The Kochen-Specker theorem

values of A and B remain the same, i.e.
v(Ak|S) = v(Al|S), v(Bm|S) = v(Bn|S),
where k,l,m,n are all possible indices for which the considered observable is measured at the positions k,l,m,n in the sequence S. (ii) For any state preparation (that is for any pexp(λ)), the mean values of A and B during the measurement of any two sequences S1, S2 ∈ SAB stay the same, i.e.
Ak|S1 = Al|S2 , Bm|S1 = Bn|S2 .

Conditions (i) and (ii) are necessary conditions for compatible observables. Two observables which violate one of them cannot be called compatible.
It is important to note that the compatibility of two observables is experimentally testable by preparing all possible λexp or pexp(λ). The fact that these sets or the set SAB may be inﬁnite is not a speciﬁc problem here, as any measurement device or physical law can only be tested in a ﬁnite number of cases.
One should note, that (ii) does not necessarily follow from (i), as will be illustrated by the following example: Consider a HV model where, for any λ, all v(Ak|S) are +1 when the ﬁrst measurement in S is A1, while they are −1 when the ﬁrst measurement is B1. The values v(Bm|S) are always +1. Then, condition (i) is fulﬁlled, while (ii) is violated, since A = 1 but A2|B1A2 = −1.
Finally, it should be added that the notion of compatibility can be extended to three or more observables. For instance, if three observables A,B,C are investigated, one considers the set SABC of all measurement sequences involving measurement of A,B or C and extends conditions (i) and (ii) in an obvious way.

7.1.4. Operational deﬁnition of noncontextuality
Noncontextuality means that the value of any observable A does not depend on which other compatible observables are measured jointly with A. For the model, noncontextuality is formulated as a condition on a HV model as follows:
Deﬁnition 2. Let A,B,C be observables in a HV model, where A is compatible with B, and A is also compatible with C: The HV model is noncontextual if it assigns, for any λ an outcome of A which is independent of whether B or C is measured before or after A, that is,

v(A1|A1B2) = v(A2|B1A2) = v(A1|A1C2) = v(A2|C1A2).

(7.1)

Hence, for these sequences one can write down v(A) as being independent of the sequence. If the condition is not fulﬁlled, the model is called contextual. If A is an element of several larger sets of compatible observables, the conditions in equation (7.1) can be extended in a straightforward way.

79

Experimental test of quantum contextuality

Note that the most important assumptions in (7.1) are that v(A1|A1B2) = v(A2|B1A2) and v(A1|A1C2) = v(A2|C1A2). If these are fulﬁlled, the remaining equality follows from the physically very plausible assumption, that the result of A1 should not depend on which other observable is measured after A1 (this observable may be compatible with A or not). It is important to note that the condition (7.1) is an assumption about the model and — contrary to the deﬁnition of compatibility — not experimentally-
 testable. This is due to the fact that for a given instance of a state (corresponding to some unknown λ) the experimenter has to decide whether to measure A or B ﬁrst.
In the deﬁnition, condition (7.1) is assumed for any λ. One may wonder whether this requirement is too strong, since in any experiment only certain λexp can be tested. Assuming, however, that there are certain λ which can never occur as a λexp does not make much sense, as in such a HV theory these λ cannot aﬀect any experimentally observed measurement result, as any pexp(λ) has to assign a vanishing probability density to them. Hence, one can disregard this case. Finally, let us add here that if l-
arger sets of compatible observables are considered, deﬁnitions (1) and (2) have to be extended to longer sequences. For instance, if the observables in each of the sets {A, B, C} and {A, a, α} are all compatible, then, the condition that the assignment of a value to A is independent of the context results in conditions similar to equation (7.1), but with sequences of length three.

v(A1|A1B2C3) = v(A2|B1A2C3) = v(A1|A1a2α3) = v(A2|α1A2a3) = . . .

(7.2)

7.1.5. The Kochen Specker inequality for noncontextual models

The KS theorem states that noncontextual HV models cannot reproduce all predictions of QM.

Here one (out of many) possible inequalities is discussed involving compatible measurements, which

holds for the QM case but is violated by noncontextual HV theories.

Let’s consider the following array (Mermin Peres square [161, 162]) of observables of a four-level

quantum

system

(for

instance

two

spin-

1 2

-particles)

A = σz(1) ⊗ I(2) a = I(1) ⊗ σx(2) α = σz(1) ⊗ σx(2)

B = I(1) ⊗ σz(2) b = σx(1) ⊗ I(2) β = σx(1) ⊗ σz(2)

C = σz(1) ⊗ σz(2) c = σx(1) ⊗ σx(2) γ = σy(1) ⊗ σy(2)

(7.3)

and the measurement products of each row Rk and column Ck given by

R1 = v(A) · v(B) · v(C) R2 = v(a) · v(b) · v(c) R3 = v(α) · v(β) · v(γ)

C1 = v(A) · v(a) · v(α) C2 = v(B) · v(b) · v(β) C3 = v(C) · v(c) · v(γ).

(7.4)

Here, σi(k) denotes the Pauli matrix acting on the k-th particle, and all the observables have the outcomes ±1. Moreover, in each of the rows or columns of (7.3), the observables are compatible.
In any row or column, their measurement product Rk or Ck equals 1, except for the third column where it equals −1. Therefore, quantum mechanics yields for the product k=1,2,3 RkCk a value of −1, in contrast to non-contextual models.

80

7.2 Experimental realization of QND measurements

Figure 7.1.: Experimental measurement scheme. a For the measurement of the jth row
(column) of the Mermin-Peres square (7.3), a quantum state is prepared on which three
consecutive QND measurements Mk, k = 1, 2, 3, are performed measuring the observables Ajk (Akj). Each measurement consists of a composite unitary operation Uk that maps the observable of interest onto one of the single-qubit observables σz(1) or σz(2) which are measured by ﬂuorescence detection. The unitary operations U are synthesized from single-
qubit and maximally entangling gates. In the lower line, σi, σ˜i symbolize, respectively, the Hamiltonian acting on the qubit and on the D5/2 Zeeman subspace spanned by {| ↓ , |a } = {S1/2, mj = 1/2, D5/2, mj = 5/2} which is used for hiding one ion’s quantum state from ﬂuorescence light during detection[49].

To test this property, it has to be expressed as an inequality since no experiment yields ideal quantum measurements. Recently, it has been shown that the inequality

XKS = R1 + R2 + R3 + C1 + C2 − C3 ≤ 4

(7.5)

holds for all non-contextual theories [159], where · · · denotes the ensemble average. Quantum mechanics predicts for any state that XKS = 6, thereby violating inequality (7.5). For an experimental test, an ensemble of quantum states Ψ needs to be prepared and each realization subjected to the measurement of one of the possible sets of compatible observables. Here, it is of utmost importance that all measurements of Aij are context-independent [159], i.e., Aij must be detected with a quantum non-d-
emolition (QND) measurement that provides no information whatsoever about any other compatible observable.

7.2. Experimental realization of QND measurements

As pointed out in the preceding theory section QND measurements are necessary to test the Kochen Specker theorem. The two qubit observables listed in table 7.3 can be measured in a non destructive way by applying a unitary transformation U to the state Ψ prior to measuring σz on one ion, and its inverse operation U † after the measurement (see chapter 2.1.3). The gate decompositions of the unitary operations necessary to perform all two qubit observables for the Mermin Peres square are given in ta-
ble 7.1. These pulse sequences will be used in the chapter 7.3 to determine all observables for a test of contextual hidden variable theories. The decompositions of Uij into the elementary gate operations available in our setup were found by a gradient-ascent based numerical search routine [135]. The unitary transformations are designed such that the information about the observable is mapped onto a single ion (in this case ion 1). The state detection of ion 1 only ensures that a single bit of inf-
ormation is acquired. The ﬁnal inverse operation guarantees that

81

Experimental test of quantum contextuality

U [σx

⊗

σx]

=

UyMS (−

π 2

)Uz1(

π 2

)

U

[σx

⊗

σz ]

=

UxMS (−

π 2

)Ux(

π 2

)

U [σy

⊗

σy ]

=

UxM

S

(−

π 2

)Uz1

(

π 2

)

U [σz

⊗

σx]

=

UyM

S

(−

π 2

)Ux

(−

π 2

)

U [σz

⊗

σz ]

=

UyM

S

(−

π 2

)Uz1

(

π 2

)Uy

(

π 2

)

Table 7.1.: Gate decomposition of the mapping operations U [σi ⊗ σj] employed for measuring the ﬁve two-qubit spin correlations in the Mermin Peres square.

the two ions are in an eigenstate of the measurement.

It is important to note that some of the observables listed in table 7.3 require unitary transformations that are two qubit entangling gates (see table 7.1). As it turns out the most complicated series of measurements (row 3 and column 3 in the Mermin Peres square) requires a total of 6 two-qubit gate operations. This, by it self, is already quite demanding but gets even more diﬃcult by the fact that the state of one ion has to be detected in between the unitary transformations. The problem that a-
rises with state detection is that the ions do not remain in the ground state but

get heated to the Doppler limit. Fortunately the Mølmer-Sørensen gate operation is insensitive to

the motional state of the ions (see chapter 6.1). This enabled us to omit complicated re-cooling schemes, as demonstrated in [55], in the experimental realization of the QND measurements.

The measurement scheme that has to be employed to measure one row or column of the Mermin

Peres square can be seen in ﬁgure 7.1. In the following this scheme will be explained in more detail

by an example where (|↓ − |↑ )1 ⊗ (|↓ − |↑ )2 is created as an input state and the last row in the Mermin Peres square is measured.

For this example and the experiment described in the following section, a pair of 40Ca+ ions is

trapped in a linear Paul trap with axial and radial vibrational frequencies of ωax = (2π) 1.465 MHz

and ωr ≈ (2π) 3.4 MHz in a magnetic ﬁeld of B = 4 Gauss. The ions are Doppler-cooled by

exciting the S1/2 ↔ P1/2 and P1/2 ↔ D3/2 dipole transitions. Optical pumping initializes an ion with a ﬁdelity of 99.5% to the qubit state | ↓ ≡ |S1/2, mj = 1/2 , the second qubit state being | ↑ ≡ |D5/2, mj = 3/2 .

The unitary operation to create the input state (|↓ − |↑ )1 ⊗ (|↓ − |↑ )2 is a π/2-pulse on

both

ions

UΨ

=

Uy (

π 2

).

After

the

state

preparation

the

ﬁrst

QND

measurement,

determining

the

parity σz ⊗ σz of the input state, has to be carried out. This can be done by applying a unitary

transformation which is equivalent to a CNOT operation (see chapter 2.1.3) followed by a PMT

detection of ion 1. This unitary operation mapps the parity of the state on ion 1 and is given in

terms

of

gate

operations

available in

the experiment:

U1

=

UyM

S

(−

π 2

)Uz1(

π 2

)Uy

(

π 2

)

which

can be

written in matrix representation as





10 0 1

U1

= 

0 i

1 0

−1 0

0 −i

 .

0i i 0

(7.6)

This operation maps the input state to |↓↓ − i |↑↑ . Detecting the state of ion 1 will result in equally ﬁnding |↓ and |↑ . |↓ will be identiﬁed with the +1 eigenstate and |↑ with the -1

82

7.3 Testing the Kochen Specker inequality

eigenstate. By averaging over many realization the measurement shows that the parity of the

input state is zero.

State detection of ion 1 is achieved by ﬂuorescence detection. Ion 2 is hidden from the ﬂuorescence

laser by transferring the population in the state |↓ = S1/2, mj = 1/2 to the D5/2, mj = 5/2 state.

The hiding is done by using a pulse sequence similar to the one shown in ﬁgure 5.4(b). The only

diﬀerence

is

that

the

π 4

pulses

are

replaced

by

π 2

pulses

such

that

the

pulse

sequence

reads

as

Ux(2)(π)

=

Ux(

π 2

)Uz(1)

(π)Ux(

π 2

).

The same

series of

pulses is used

to un-hide ion

2

after the state

detection. Additional information on the hiding procedure can be found in appendix A.2

The inverse unitary operation to create an eigenstate of the measurement is achieved by ap-

plying

the

pulse

sequence

U1†

=

U−y

(

π 2

)Uz1

(

π 2

)UyM

S

(−

π 2

)Uz1

(π)

which

can

be

written

in

matrix

representation as





i0 10

U1†

= 

0 0

i −i

0 0

1 1

 .

(7.7)

i 0 −1 0

If ion 1 was detected in the state |↓ this operation maps the two ions onto the entangled state |↑↑ +|↓↓ . Similarly if ion 1 was detected in the state |↑ the two ions are mapped onto the state |↑↓ +|↓↑ . Subsequently the other two QND measurements are performed in the same way. With this example one can clearly see that entanglement is created during the measurement process even though the initial state was a product state.

7.3. Testing the Kochen Specker inequality

√ Equipped with the tools described in chapter 5.4 and 6.1, the singlet state Ψ = |↑↓ − |↓↑ / 2

was

created

by

applying

the

gate-operations

Uz(1)(π)U

(

π 2

,

3π 4

)U

M

S

(

π 2

,

0)

to

the

initial

state

|↓↓

.

Then the three observables of a row or column of the Mermin-Peres square were measured con-

secutively (as describe in chapter 7.2). The results obtained for a total of 6,600 copies of Ψ are

visualized in ﬁgure 7.2. The three upper panels show the distribution of measurement results

{v(Ai1), v(Ai2), v(Ai3)} and their products for the observables appearing in the rows of (7.3), the three lower panels show the corresponding results for the columns of the square. Subplot f demonstrates that Ψ is a common eigenstate of the observables σx(1) ⊗ σx(2), σy(1) ⊗ σy(2), σz(1) ⊗ σz(2), as
only one of the spheres has a considerable size. Five of the correlations have a value close to

+1 whereas C3 = −0.91(1). By adding them up and subtracting C3 , one ﬁnds a value of XKS = 5.46(4) > 4, thus violating equation (7.5).
To test the prediction of a state-independent violation, the experiment was repeated for nine

other quantum states of diﬀerent purity and entanglement. Figure 7.3 shows that indeed a state-

independent violation of the Kochen-Specker inequality occurs, XKS ranging from 5.23(5) to 5.46(4). It was also checked that a violation of (7.5) occurs irrespective of the temporal order of

the measurement triples.

Figure 7.4 shows the results for all possible permutations of the rows and columns of (7.3) based

on 39,600 realizations of the singlet state. When combining the correlation results for the 36

possible permutations of operator orderings in equation (7.3), all values for the Kochen-Specker

83

Experimental test of quantum contextuality

a

〈R1〉 = 0.92(1)

b

〈R2〉 = 0.93(1)

c

〈R3〉 = 0.90(1)

0.00

0.00

-0.01

0.02

-0.03

-0.01

σy⊗σy

σx⊗σx

σz⊗σz

-0.92

-0.94

-0.88

Ι ⊗ σ z

σz⊗ Ι

d

〈C1〉 = 0.90(1)

0.06

0.01

σ

x⊗Ι

Ι ⊗ σx

e

〈C2〉 = 0.89(1)

-0.03

-0.07

σ x⊗σ
z

σz⊗ σx

f

〈C3〉 = -0.91(1)

-0.95

-0.92

σy⊗σy

σx⊗σz

σz⊗σx

Ι ⊗ σ x

-0.01

σ

σz⊗ Ι

x⊗Ι

-0.10

Ι ⊗ σz

σ x⊗σ
x

-0.89
σz⊗ σz

Figure 7.2.: Measurement correlations for the singlet state. a This subplot visualizes the consecutive measurement of the three observables A11 = σz(1), A12 = σz(2), A13 = σz(1) ⊗ σz(2) corresponding to row 1 of the Mermin-Peres square. The measurement is carried out on
1,100 preparations of the singlet state. The volume of the spheres on each corner of the cube
represents the relative frequency of ﬁnding the measurement outcome {v1, v2, v3}, vi ∈ {±1}. The exact probabilities for ﬁnding {v1, v2, v3} are given in appendix A.1 . The color of the sphere indicates whether v1v2v3 = +1 (green) or −1 (red). The measured expectation values of the observables A1j are indicated by the intersections of the shaded planes with the axes of the coordinate system. The average of the measurement product R1 is given at the top. b-f Similarly, the other ﬁve subplots repres-
ent measurements of the remaining rows or columns
of the Mermin-Peres square. Subplot f demonstrates that the singlet state is a common eigenstate of the observables σx(1) ⊗ σx(2), σy(1) ⊗ σy(2), σz(1) ⊗ σz(2), as only one of the spheres has a considerable volume. Taking into account all the results, we ﬁnd XKS = 5.46(4) in this measurement. Error bars are 1σ.

84

7.3 Testing the Kochen Specker inequality
Figure 7.3.: State-independence of the Kochen-Specker inequality. The Kochen-Specker inequality was tested for ten diﬀerent quantum states, including maximally entangled (Ψ1Ψ3), partially entangled (Ψ4) and separable (Ψ6-Ψ9) almost pure states as well as an entangled mixed state (ρ5) and an almost completely mixed state (ρ10). All states are analysed by quantum state tomography which yields for the experimentally produced states Ψ1-Ψ4, Ψ6-Ψ9 an average ﬁdelity of 97(2)%. For all states, one obtain-
s a violation of inequality (7.5) which demonstrates its state-independent character, the dashed line indicating the average value of XKS . Error bars are 1σ (6,600 state realizations per data point).
85

Experimental test of quantum contextuality

Correlations

1 0.95
0.9 0.85
0.8 0.75
row 1

row 2

row 3 column 1 column 2 column 3
Set of observables

Figure 7.4.: Permutation within rows and columns of the Mermin-Peres square. As the three observables of a set are commuting, the temporal order of their measurements should have no inﬂuence on the measurement results. The ﬁgure shows the measured absolute values of the products of observables for any of the six possible permutations. The scatter in the experimental data is caused by experimental imperfections that aﬀect diﬀerent permutations diﬀerently. For the measurements shown here, in total 3-
9,600 copies of the singlet state were used.

inequality XKS fall within the range of 5.22 to 5.49. Because of experimental imperfections, the experimental violation of the Kochen-Specker inequality falls short of the quantum-mechanical prediction. The dominating error sources are imperfect unitary operations, in particular the entangling gates applied up to six times in a single experimental run. The errors are discussed further in section 7.5.1

7.4. Including imperfect measurements to close loopholes

All experimental tests of hidden-variable theories are subject to various possible loopholes. In this experiment, the detection loophole does not play a role, as the state of the ions is detected with near-perfect eﬃciency. From the point of view of a hidden variable theory, still objections can be made: In the experiment, the observables are not perfectly compatible and since the observables are measured sequentially, it may be that the hidden variables are disturbed (DHV) during the sequence of -
measurements, weakening the demand to assign to any observable a ﬁxed value independently of the context.
Nevertheless, it is possible to derive inequalities for classical non-contextual models, wherein the hidden variables are disturbed during the measurement process [160]. The starting point to include imperfections is a Clauser-Horne-Shimony-Holt (CHSH) type inequality

XCHSH = AB + CD + AC − BD

one can derive from equation (7.5) by replacing array (7.3) by

I(1) ⊗ I(2) I(1) ⊗ I(2) I(1) ⊗ I(2)

A= C=

I(1) ⊗ σy(2) σx(1) ⊗ I(2)
I(1) ⊗ I(2)

B= D=

σy(1) ⊗ σy(2) σx(1) ⊗ σx(2)
I(1) ⊗ I(2).

(7.8) (7.9)

86

7.4 Including imperfect measurements to close loopholes

All nine observables fulﬁll the condition of compatibility but the inequality, similar to Bell tests, is now violated only by speciﬁc states. As most of the observables are now equal to the identity matrix the relevant measurements are A, B, C, D. A noncontextual HV model has to assign a ﬁxed value to each measurement, and any such model predicts

If we now consider the QM state

| XCHSH | ≤ 2.

(7.10)

Ψ ∝ | ↑↑ + iγ| ↓↑ + γ| ↑↓ + i| ↓↓ √ where γ = 2 − 1, we will ﬁnd for equation 7.8 a value of
√ XCHSH = 2 2

(7.11) (7.12)

violating the HV inequality. The choice of observables is not unique and one can transform all observables by a global unitary transformation and obtain another set. In fact transformations are possible that lead to a maximal violation for unentangled states.
To deal with the case of imperfect measurements consider a HV model with a probability distribution p(λ) and let p[(A+1 |A1) and (B1+|B1)] denote the probability of ﬁnding A+ if A is measured ﬁrst and B+ if B is measured ﬁrst, where these conditions are put onto the same instance of the HV. This probability is well deﬁned in all HV models of the considered type but it is impossible to experimentally measure it directly. The aim is now to connect it to probabilities arising in sequential measuremen-
ts, as this allows one to ﬁnd contradictions between HV models and QM.
First, note that

p[(A+1 |A1) and (B1+|B1)] ≤ p[A+1 , B2+|A1B2] + p[(B1+|B1) and (B2−|A1B2)].

(7.13)

This inequality is valid because if λ is such that it contributes to p[(A+1 |A1) and (B1+|B1)], then either the value of B stays the same when measuring A1B2 (hence λ contributes to p[A+1 , B2+|A1B2]) or the value of B is ﬂipped and λ contributes to p[(B1+|B1) and (B2−|A1B2)]. The ﬁrst term p[A+1 , B2+|A1B2] is directly measurable as a sequence, but the second term is not directly experimentally accessible.
Let us rewrite

AB = 1 − 2p[(A+1 |A1) and (B1−|B1)] − 2p[(A−1 |A1) and (B1+|B1)],

(7.14)

as the mean value obtained from the probabilities p[(A±1 |A1) and (B1±|B1)]. Then, using equation (7.13), it follows that

A1B2 − 2pﬂip[AB] ≤ AB ≤ A1B2 + 2pﬂip[AB],

(7.15)

where we used pﬂip[AB] = p[(B1+|B1) and (B2−|A1B2)] + p[(B1−|B1) and (B2+|A1B2)] which can be interpreted as a probability that A ﬂips a predetermined value of B.

87

Experimental test of quantum contextuality

Furthermore, using (7.8), we obtain within a HV model

| XCHSH | ≤ 2(1 + pﬂip[AB] + pﬂip[CD] + pﬂip[AC] + pﬂip[BD]).

(7.16)

The terms pﬂip[AB], etc. in inequality (7.16) are not experimentally accessible. Now we will discuss how they can be experimentally estimated when some assumptions on the HV model are made.
In order to obtain an experimentally testable version of inequality (7.16), we will assume that

p [(B1+|B1) and (B2−|A1B2)] ≤ p [(B1+|B1) and (B1+, B3−|B1A2B3)] = p [B1+, B3−|B1A2B3]. (7.17)
We must stress at this point that we do not assume that the set of HV values giving [(B1+|B1) and (B2−|A1B2)] is contained in the set giving (B1+, B3−|B1A2B3), the assumption only relates the sizes of these two sets. The motive is the following experimental procedure: Let us assume that one has a physical state, for which one surely ﬁnds B1+, if B1 is measured ﬁrst, but one ﬁnds B2− if the sequence A1B2 is measured. Physically, one would explain this behavior with a disturbance of the system due t-
o the experimental procedures made when measuring A1. The left hand side of (7.17) can be viewed as the amount of this disturbance. The right hand side quantiﬁes the disturbance of B when the sequence B1A2B3 is measured. In real experiments, it can be expected that this disturbance is larger than when measuring A1B2, because of the additional experimental procedures involved. Note that in real experiments, a measurement of B will also disturb the value of B itself, as can be seen from the fact tha-
t sometimes the values of B1 and B2 will not coincide, if the sequence B1B2 is measured (see chapter 7.5.1).
Assumption (7.17) gives a measurable upper bound on pﬂip[AB]. One directly has

| XDHV | = | XCHSH | − 2(perr[B1A2B3] + perr[D1C2D3]+ + perr[C1A2C3] + perr[D1B2D3]) ≤ 2,

(7.18)

where we used perr[B1A2B3] = p[B1+, B3−|B1A2B3] + p[B1−, B3+|B1A2B3], denoting the total disturbance probability of B when measuring B1A2B3.
The point with this inequality is that if the observable pairs (A, B), (C, D), (A, D), and (B, D) fulﬁll approximately the condition (i) of deﬁnition 1 in the deﬁnition of compatibility, the terms perr will become small, and a violation of inequality (7.18) can be observed. To test this inequality we prepared the state Ψ and performed the measurements listed in (7.9). We ﬁnd for the value XDHV = 2.23(5) > 2. This proves that even disturbances of the hidden variables for not perfectly compatible me-
asurements cannot explain the given experimental data. In principle, our analysis of measurement disturbances and dynamical hidden variable models can be extended to the full Mermin-Peres square. The error terms considering now four measurements in a row look like

pﬂip[(AB)C] ≤ perr[(AB)C] = p[C1+C4−|C1A2B3C4 + p[C1−C4+|C1A2B3C4].

(7.19)

Then, if one writes down the generalized form of inequality (7.5) there are more correction terms than in inequality (7.18), moreover they occur now with weight 4. On average, these perr terms have to be smaller than 2/48 ≈ 0.0417 in order to allow a violation. As can be seen in the next

88

7.5 Experimental results on imperfect measurements

Table 7.2.: Measurement correlations AiAj|A1 . . . A5 between repeated measurements of A = σz ⊗ I for a maximally mixed state. Observing a correlation of AiAj|A1 . . . A5 = αij means that the probability for the measurement results of Ai and Aj to coincide equals (αij + 1)/2.

αij

2

3

4

5

1 0.97(1) 0.97(1) 0.96(1) 0.95(1)

2

0.97(1) 0.97(1) 0.96(1)

3

0.98(1) 0.98(1)

4

0.98(1)

Table 7.3.: Measurement correlations AiAj|A1 . . . A5 between repeated measurements of A = σx ⊗ σx for a maximally mixed state. Observing a correlation of AiAj|A1 . . . A5 = αij means that the probability for the measurement results of Ai and Aj to coincide equals (αij + 1)/2.

αij

2

3

4

5

1 0.94(1) 0.88(1) 0.82(2) 0.80(2)

2

0.93(1) 0.87(2) 0.84(2)

3

0.90(1) 0.87(2)

4

0.93(1)

section the experimental techniques have to be improved to get in this regime and ﬁnd a violation.

7.5. Experimental results on imperfect measurements
The fact that the results falls short of the quantum mechanical prediction of XKS = 6 is, as pointed out, due to imperfections in the measurement procedure. These imperfections could be incorrect unitary transformations but also errors occurring during the ﬂuorescence measurement.
An instructive test consists in repeatedly measuring the same observable on a single quantum system and analyzing the measurement correlations. Table 7.2 shows the results of ﬁve consecutive measurements of A = σz ⊗ I on a maximally mixed state based on 1100 experimental repetitions.
As expected, the correlations αi,j = AiAj|A1 . . . A5 for j=i+1 are independent of the measurement number i within the error bars. However, the correlations αi,j for j=i+k become smaller and smaller the bigger k gets. Table 7.3 shows another set of measurements correlations AiAj|A1 . . . A5 where A = σx ⊗ σx. Here, the correlations are smaller, since entangling interactions are needed for mapping A onto σz ⊗ I which is experimentally the most demanding step.
It is also interesting to compare the correlations A1A3|A1A2A3 with the correlations A1A3|A1B2A3 for an observable B that is compatible with A. For A = σx ⊗ σx and B = σz ⊗ σz, we ﬁnd A1A3|A1A2A3 = 0.88(1) and A1A3|A1B2A3 = 0.83(2) when measuring a maximally mixed state, i. e. it seems that the intermediate measurement of B perturbs the correlations slightly more than an intermediate measurement of A. Similar results are found for a singlet state, where A1A3|A1A2A3 = 0.92(1), B1B3|B1B2B3 = 0.91(1)-
, but A1A3|A1B2A3 = 0.90(1), and B1B3|B1A2B3 = 0.89(1). Because of B1B3|B1A2B3 = 1 − 2perr(B1A2B3), correlations of the type B1B3|B1A2B3 are required for checking the inequality (7.18) that takes into account disturbed HVs.

89

Experimental test of quantum contextuality
7.5.1. Experimental limitations
There are a number of error sources contributing to imperfect state correlations, the most important being:
(i) Wrong state assignment based on ﬂuorescence data. As described in chapter 4.5 we use a 250 µs detection time to determine the state of the ion. The photon count distributions slightly overlap. Therefore, if the threshold for discriminating between the dark and the bright state is set properly the probability for wrongly assigning the quantum state is 0.3%. Making the detection period longer would reduce this error but increase errors related to decoherence of the other ion’s quantum state that-
 is not measured.
(ii) Imperfect optical pumping. During ﬂuorescence detection, the ion leaves the computational subspace {|0 , |1 } if it was in state |1 and can also populate the state |S1/2, mS = −1/2 . To prevent this leakage, the ion is brieﬂy pumped on the S1/2 ↔ P1/2 transition with σ+-circularly polarized light to pump the population back to |1 . Due to imperfectly set polarization and misalignment of the pumping beam with respect to the quantization axis, this pumping step fails with a probability of about-
 0.5%.
(iii) Interactions with the environment. Due to the non-zero diﬀerential Zeeman shift of the ion’s states used for storing quantum information, superposition states dephase in the presence of slowly ﬂuctuating magnetic ﬁelds. In particular, while measuring one ion by ﬂuorescence detection, quantum information stored in the other ion dephases. We partially compensate for this eﬀect by spin-echo-like techniques [23] that are based on a transient storage of superposition states in a pair of states ha-
ving an opposite diﬀerential Zeeman shift as compared to the states |0 and |1 1. A second interaction to be taken into account is spontaneous decay of the metastable state |0 which however only contributes an error of smaller than 0.1%.
(iv) Imperfect unitary operations. The mapping operations are not error-free. This concerns in particular the entangling gate operations needed for mapping the eigenstate subspace of a spin correlation σi ⊗σj onto the corresponding subspaces of σz ⊗I. For this purpose, a Mølmer-Sørensen gate operation U MS(π/2, φ) is used. This gate operation has the crucial property of requiring the ions only to be cooled into the Lamb-Dicke regime. In the experiments, the center-of-mass mode used for mediating t-
he gate interaction is in a thermal state with an average of 18 vibrational quanta. In this regime, the gate operation is capable of mapping |11 onto a state |00 + eiφ|11 with a ﬁdelity of about 98% (see chapter 6.1). Taking this ﬁdelity as being indicative of the gate ﬁdelity, one might expect errors of about 4% in each measurement of spin correlations σi ⊗ σj as the gate is carried out twice, once before and once after the ﬂuorescence measurement.
These error sources prevented us from testing a generalization of inequality (7.5). A measurement of the correlations B1B3|B1A2B3 and C1C4|C1A2B3C4 resulted in error terms perr that were about 0.06 for sequences involving three measurements and about 0.1 for sequences with four measurements, i. e. more than twice as big as required for observing a violation of (7.5).
1The state of the ion not to be measured is stored in a superposition of D5/2, m = 3/2 and D5/2, m = 5/2 during the detection. After remapping the state to D5/2, m = 3/2 and S1/2, m = 1/2 a waiting time is implemented during which the states partially rephase.
90

8. Quantum simulation of the Dirac
equation
Quantum simulation aims at simulating a quantum system using a controllable laboratory system with the same underlying mathematical model. In this way, it is possible to simulate quantum systems that can neither be eﬃciently simulated on a classical computer [2] nor easily accessed experimentally, while allowing parameter tunability over a wide range.
Here, a proof-of-principle quantum simulation of the one-dimensional Dirac equation using a single trapped ion [117] is demonstrated. The ion is set to behave as a free relativistic quantum particle. The particle position was measured as a function of time and Zitterbewegung was studied for diﬀerent initial superpositions of positive and negative energy spinor states, as well as the cross-over from relativistic to nonrelativistic dynamics. The high level of control of trapped-ion experimental para-
meters makes it possible to simulate elegantly textbook examples of relativistic quantum physics.
8.1. Introduction
The diﬃculties in observing real quantum relativistic eﬀects have sparked signiﬁcant interest in performing quantum simulations of their dynamics. Examples include black holes in Bose-Einstein condensates [163], and Zitterbewegung for massive fermions in solid state physics [164] none of which have been experimentally realized so far. Graphene is studied widely in connection to the Dirac equation [165–167].
The Dirac equation is a cornerstone in the history of physics [168], merging successfully quantum mechanics with special relativity, providing a natural description of the electron spin and predicting the existence of anti-matter [169]. Furthermore, it is able to reproduce accurately the spectrum of the hydrogen atom and its realm, relativistic quantum mechanics, is considered as the natural transition to quantum ﬁeld theory. However, the Dirac equation also predicts some peculiar eﬀects such as K-
lein’s paradox [170] and Zitterbewegung, an unexpected quivering motion of a free relativistic quantum particle ﬁrst examined by Schr¨odinger [171]. These and other predictions would be diﬃcult to observe in real particles, while constituting key fundamental examples to understand relativistic quantum eﬀects. Recent years have seen an increased interest in simulations of relativistic quantum eﬀects in diﬀerent physical setups [117, 163, 164, 172–175], where parameter tunability allows accessibilit-
y to diﬀerent physical regimes.
Trapped ions are particularly interesting for the purpose of quantum simulation [176–178], as they allow for exceptional control of experimental parameters, and initialization and read-out can be achieved with high ﬁdelity. Recently, for example, a proof-of-principle simulation of a
91

Quantum simulation of the Dirac equation
quantum magnet has been performed [63] using trapped ions. The full three-dimensional Dirac equation Hamiltonian can be simulated with lasers coupling to the three vibrational eigenmodes and the internal states of a single trapped ion [117]. The setup can be signiﬁcantly simpliﬁed when simulating the Dirac equation in 1+1 dimensions.

8.2. The Dirac equation

This section closely follows reference [179] to explain the eﬀects observed in the experiment. The Dirac equation for a spin-1/2 particle with rest mass m is given by

i

∂ψ ∂t

=

(c α ·

pˆ + βmc2)ψ.

(8.1)

Here c is the speed of light, pˆ is the momentum operator, α and β are the Dirac matrices, which are usually given in terms of the Pauli matrices σi [168] and the Identity I2 (as deﬁned in chapter 2.1.2)

αi =

0 σi σi 0

, β = I2 0 . 0 −I2

(8.2)

Each of the entries in these matrices is again a 2 x 2 matrix with i = x, y, z for the three components of the momentum operator. The wave functions ψ are 4-component spinors related on one hand to the spin of the particle and on the other hand to positive and negative energy solutions. The original idea by Dirac was that the negative energy states correspond to anti-particles while positive energy states correspond to the particle. The problem with this interpretation is that by radiative interac-
tion positive energy states could be transformed into negative energy states and atoms would not be stable. Again Dirac proposed a possible solution [180]. All negative energy states are ﬁlled such that no transition is possible due to the Pauli exclusion principle. If one of these negative energy electrons is excited it will leave a hole in this sea of particles with a positive charge representing the anti particle. This interpretation has to be handled with care as a number of problems appear. T-
he ground state has an inﬁnitely high negative energy. There is an asymmetry between particles and anti-particles and we have a multi particle system. A complete solution of these problems is only achieved by using a full quantum electro-dynamics theory.

To describe the realized experiment we restrict ourselves to the 1+1 dimensional case of the

Dirac equation

i

∂ψ ∂t

=

HD ψ

=

(c pˆσx

+ mc2 σz)ψ.

(8.3)

This restriction does not aﬀect the appearance of the most stunning eﬀects of the Dirac equation,

such as Zitterbewegung and the Klein paradox. The two components of the spinor in 1+1 dimension

do not describe the spin as in one dimension all magnetic ﬁelds are pure gauge ﬁelds [179] and spin

does not exist. They rather represent the appearance of positive and negative energy states

Ψ(x, t) = Ψ1(x, t) . Ψ2(x, t)

(8.4)

92

8.2 The Dirac equation

For a further investigation the Dirac Hamiltonian is rewritten in matrix form

HD =

mc2 cpˆ cpˆ −mc2

.

(8.5)

This matrix has two eigenvalues E(p) = ± p2c2 + m2c4 so there are two types of plane wave solutions to the Dirac equation u±(p; x, t)

u±(p; x, t)

=

√1 2π

u±(p)eipx/

∓iE(p)/

t

(8.6)

with u± the eigenvectors to the respective eigenvalues E(p). As a solution for the Dirac equation we hence have plane waves with positive and negative energy

HD u±(p; x, t) = ±E(p) u±(p; x, t).

(8.7)

To account for a real physical situation, that is to ﬁnd the particle between x = +∞ and x = −∞ with probability 1, we have to demand that the integral

+∞
(|Ψ1(x, t)|2 + |Ψ2(x, t)|2)dx = 1
−∞

(8.8)

is equal to one. The same argument holds for the Fourier transformed spinors Ψˆ 1,2(p, t) = F(Ψˆ 1,2(x, t)) reﬂecting the momentum distribution. The unitary time evolution of the Dirac equation guarantees that the normalization of the Dirac spinor is time-independent. One has to note though, that this is not necessarily true for the individual components Ψ1,2. What holds true is, that if there is a particle at the beginning their will be a particle in the end. The Dirac equation cannot describe pa-
rticle creation or annihilation.
Square-integrable wave packets can be obtained by superposition of plane waves

+∞

Ψ(x, t) =

(Ψˆ +(p) u+(p; x, t) + Ψˆ −(p) u−(p; x, t))dp.

−∞

(8.9)

The coeﬃcient functions Ψˆ ±(p) can be obtained by a projection of Ψ(p, 0) onto the positive and

negative energy subspace

Ψˆ ±(p) = P ±(p)Ψ(p, 0).

(8.10)

Ψ(p, 0) is obtained by Fourier transforming the initial wave function Ψ(x, 0). In momentum space, the projection operators are given by

P ±(p)

=

1 2

I2

±

cpˆσx + mc2σz c2pˆ2 + m2c4

.

(8.11)

Note that in general the projection operators do not project onto the spinor basis states except for the case where p = 0. Only in this case the projector (8.11) becomes diagonal in the spinor basis.
In the Dirac equation in 1+1 dimensions, as given in equation (8.3), there is only one motional degree of freedom and the spinor is encoded in two internal levels, related to positive and negative

93

Quantum simulation of the Dirac equation

energy states [117]. The velocity of the free Dirac particle is given by

dxˆ/dt = [xˆ, HD]/i = cσx

(8.12)

in the Heisenberg picture. For a massless particle [σx, HD] = 0 and hence σx is a constant of motion. For a massive particle [σx, HD] = 0, and the evolution of the particle is described by [171]

xˆ(t) = xˆ(0) + pˆc2HD−1t + i ξˆ(e2iHDt/ − 1),

(8.13)

with ξˆ =

1 2

c(σx − pˆcHD−1) HD−1.

The ﬁrst two terms represent an evolution linear in time, as

expected for a free particle, while the last oscillating term may induce Zitterbewegung.

Zitterbewegung is understood as an interference eﬀect between the positive and negative energy

parts of the spinor and does not appear for spinors that consist entirely out of positive (or negative)

energy. Furthermore, it is only present when these parts have signiﬁcant overlap in position and

momentum space and is therefore not a sustained eﬀect under most circumstances [168]. For a

free electron, the Dirac equation predicts the Zitterbewegung to have an amplitude of the order of the Compton wavelength RZB ∼ 10−12 m and a frequency of ωZB ∼ 1021 Hz and has so far been experimentally inaccessible. The real existence of Zitterbewegung, in relativistic quantum

mechanics and in quantum ﬁeld theory, has been a recurrent subject of discussion in the last

years [181, 182].

Note that a particle consisting of positive and negative energy states can have zero average

momentum but a non-zero average velocity. The average velocity of a wave packet is given by the

operator known from classical relativistic mechanics (see equation (8.13))

vˆCL(p) = c2pˆ HD−1.

(8.14)

This relation depends on the sign of the energy. For a wave packet with negative energy, a negative momentum corresponds to a positive velocity. Thus for an equal superposition of positive and negative energy states it is possible that the respective average momenta cancel while the average velocities are the same. Exactly this situation is simulated in ﬁgure 8.1 of the following chapter.

8.3. Experimental realization

For the simulation, a single 40Ca+ ion is trapped in a linear Paul trap [76] with trapping frequencies

ωax = 2π×1.36 MHz axially and ωrad = 2π×3 MHz in the radial directions. Doppler cooling,

optical pumping, and resolved sideband cooling on the S1/2 ↔ D5/2 transition in a magnetic ﬁeld

of 4 G prepare the ion in the axial motional ground state and in the internal state |S1/2, m = 1/2 .

A narrow linewidth laser at 729 nm couples the states

0 1

:= |S1/2, m = 1/2

and

1 0

:= |D5/2, m =

3/2 which we identify as our spinor states. A bichromatic light ﬁeld resonant with the upper and

lower axial motional sidebands of the

1 0

↔

0 1

transition with appropriately set phases [183]

realizes the ﬁrst part, proportional to σxpˆ, of the Hamiltonian (see chapter 3.6)

HD = 2η∆Ω˜ σxpˆ + Ωσz.

(8.15)

94

8.3 Experimental realization

Figure 8.1.: Expectation values xˆ(t) for particles with diﬀerent masses. The linear curve ( ) represents a massless particle (Ω = 0) moving with the speed of light given by c = 2ηΩ˜ ∆ = 0.052 ∆/µs for all curves. The other curves are for particles with increasing mass moving down from the linear curve. Their Compton wavelengths are given by λC := 2ηΩ˜ ∆/Ω = 5.4∆ ( ), 2.5∆ ( ), 1.2∆ (•) and 0.6∆ ( ), respectively. The solid curves represent numerical simulations. The ﬁgure shows Zitterbewegung for-
 the crossover from the relativistic 2ηΩ˜ Ω to the nonrelativistic limit 2ηΩ˜ Ω. The inset shows ﬁtted Zitterbewegung amplitude RZB ( ) and frequency ωZB (•) versus the parameter Ω/ηΩ˜ (which is proportional to the mass). Error bars are 1σ.

The component proportional to σz (equivalent to a light shift) is achieved by detuning the red

and blue light ﬁeld by Ω from resonance1. ∆ = /2m˜ ωax is the size of the ground-state wave

function with m˜ the ion’s mass, not to be confused with the mass m of the simulated particle,

η

=

0.06

is

the

Lamb-Dicke

parameter,

pˆ =

a† −a 2i ∆

is

the

momentum

operator

and

a†

and

a

are

the usual raising and lowering operators for the motional state along the axial direction. The ﬁrst

term in equation 8.15 describes a state-dependent motional excitation with coupling strength ηΩ˜ ,

corresponding to a displacement of the ion’s wave packet in the harmonic trap. The parameter Ω˜

is controlled by setting the intensity of the bichromatic light ﬁeld. The second term is equivalent to

an optical Stark shift and arises when the bichromatic light ﬁeld is detuned from resonance by 2Ω.

Equation (8.15) reduces to the 1+1 dimensional Dirac Hamiltonian if we make the identiﬁcations c := 2ηΩ˜ ∆ and mc2 := Ω. The momentum and position of the Dirac particle are then mapped

onto the corresponding quadratures of the trapped ion harmonic oscillator.

In order to study relativistic eﬀects such as Zitterbewegung it is necessary to measure the expecta-

tion value of the position operator xˆ(t) of the harmonic oscillator. It has been noted theoretically

that such expectation values could be measured using very short probe times, without reconstruct-

ing the full quantum state [115–117]. As pointed out in chapter 3.6.1, for measuring xˆ of a

motional state ρm, we have to (i) prepare the ion’s internal state in an eigenstate of σy, (ii) apply a unitary transformation U (τ ) that maps information about ρm onto the internal states, and (iii) record the changing excitation by a ﬂuorescence measurement [76] as a function of the probe time

1Both light ﬁelds are detuned in the same direction unlike a Mølmer-Sørensen interaction.

95

Quantum simulation of the Dirac equation

Figure 8.2.: Evolution of the expectation value xˆ(t) for particles with mass λc = 1.2∆ and an electronic state which is an eigenstate of σx (•) (data taken from ﬁgure 8.1) or an eigenstate of σy ( ). Zitterbewegung appears again due to interference of positive and negative energy parts of the state. Even though the simulated particles have the same mass
their behavior is completely diﬀerent. For the σy eigenstate the initial velocity is zero (see equation 8.12) whereas the particle in an eigenstate of σx has an initial velocity equal to the speed of light. The solid curve represents a numerical simulation. Error bars are 1σ.

τ (see chapter 3.6.1). In this protocol, the unitary operator U (τ ) = exp(−iηΩpσxxˆτ /∆), with xˆ = (a† + a)∆ and probe Rabi frequency Ωp, eﬀectively transforms the observable σz into sin kxˆ, with k = 2ηΩpτ /∆, so that xˆ can be determined by monitoring the rate of change of sin kxˆ for short probe times (see chapter 3.6.1). Since the Dirac Hamiltonian generally entangles the mo-

tional and internal state of the ion, we ﬁrst incoherently recombine the internal state population in

0 1

before proceeding to (i).2 Then, we apply the Hamiltonian generating U with the probe Rabi

frequency set to Ωp = 2π× 13 kHz and for interaction times τ of up to 14 µs, with 1-2 µs steps.

The change of excitation was obtained by a linear ﬁt each based on 104 to 3 · 104 measurements.

We simulate the Dirac equation by applying HD for varying amounts of time and for diﬀerent particle masses. In the experiment we set Ω˜ = 2π × 68 kHz, corresponding to a simulated speed of

light c = 0.052 ∆/µs. The measured initially prepared in the spinor state

expectation ψ(x; t = 0)

=va(lu√e2sπ2xˆ∆(t))−

are shown

e1
2

−

x2 4∆2

1 1

in ﬁgure 8.1 for a particle by sideband cooling and

application of a π/2-pulse. Zitterbewegung appears for particles with non-zero mass, obtained by

varying Ω in the range of 0 < Ω ≤ 2π× 13 kHz by changing the detuning of the bichromatic lasers.

We investigate the particle dynamics in the cross-over from relativistic to nonrelativistic dynam-

ics. The data in ﬁgure (8.1) match well with numerical simulations based on the Hamiltonian (8.15)

2Ttthrhiaesnpissfoedprou(nlRaetAiboPyn)ﬁ.inrAst|Dsseh5c/eo2lnv,dimnRg=AthP5e/t2proapntousfle|aPrtsi3o/tn2h,eimnpito=ipalu3lyl/a2tiniofn`r01oi´mnt`ow10´|hDitc5oh/`2i01t, ´ms.pA=on15ta0/n02eµoususslilanysgedraepcRauaylspseidtaotA`8d015´ia4.bnTamthiectPrtaraansnsssfaefgeresr eﬃciency is > 99 %, limited by the small branching ratio to the D3/2 state. In the transfer steps a probability exists that the motional state of the ion is changed. This probability is however very small due to the small

Lthaemsbp-iDnoicrksetaptaersam`01e´tearnbdu`t10´co, ualtdtbhee

eliminated expense of

completely by a separate a longer data acquisition

measurement time.

of

the

motional

states

of

96

8.3 Experimental realization

Figure 8.3.: (a) Zitterbewegung for a state with non-zero average momentum. Initially,

Zitterbewegung appears due to interference of positive and negative energy parts of the

state. As these parts separate, the oscillatory motion fades away. The solid curve represents

a numerical simulation. (b) Numerically calculated probability distributions |ψ(x)|2 at the

times t = 0, 75 and 150 µs (as indicated by the arrows in (a)). The probability distribution

corresponding to the state

0 1

is inverted for clarity. The vertical solid line represents

xˆ

as

plotted in (a). The two dashed lines are the expectation values for the positive and negative

energy parts of the spinor. (c) Time evolution for a negative energy eigenstate with λC = 1.2∆. Laser pulses create a negative energy spinor with average momentum pˆ = 2.2 /∆. The corresponding initial momentum distribution |ψ˜(p)|2 is shown in the inset. The solid

lines represent a numerical calculation. The curve in (c) shows no Zitterbewegung. (d)

Simulated probability distributions |ψ(x)|2 for three diﬀerent evolution times are shown (as

indicated by the arrows in (c)). Error bars are 1σ.

shown as solid lines. The error bars are obtained from a linear ﬁt assuming quantum projection noise which dominates over noise caused by ﬂuctuations of control parameters. In addition, the data were ﬁtted with a heuristic model function of the form xˆ(t) = at + RZB sin ωZBt to extract the eﬀective amplitude RZB and frequency ωZB of the Zitterbewegung shown in the inset. As the particle’s initial momentum is not dispersion-free, the amplitude and frequency are only approximate concepts. From these-
 data it can be seen that the frequency grows linearly with increasing mass ωZB ≈ 2Ω, whereas the amplitude decreases as the mass is increased. Since the mass of the particle is increased but the momentum and the simulated speed of light remain constant, the data in ﬁgure (8.1) show the crossover from the far relativistic to nonrelativistic limits. Hence, the data conﬁrm that Zitterbewegung vanishes in both limits, as theoretically expected. In the far relativistic case this is because ωZB goes to-
 zero, and in the nonrelativistic case because RZB vanishes.

The tools used for simulating the Dirac equation can also be applied to precisely set the initial

state of the simulated particle. A ﬁrst simple change is to prepare an electronic

The

wave

function

of

the

particle

is

given

by

ψ(x;

t

=

0)

=

(√2π2∆)−

1 2

e−

x2 4∆2

1 i

.

eigenstate of σy. The evolution of

97

Quantum simulation of the Dirac equation

Figure 8.4.: (a) Blue sideband oscillations after a 100 µs application of Hamiltonian (8.15) with Ω = 0 and Ω˜ = 2π × 68 kHz demonstrating the coherence of the displacement. The oscillations for the coherent state with n = 6.3 die out quickly and revive after 500 µs. The solid line was obtained by simulating the phonon distribution and coherently adding the individual state evolutions. (b) Blue sideband oscillations for the same parameters except λc = 1.2∆. The solid line was again obtained by sim-
ulating the phonon distribution and coherently adding the individual state evolutions.

the expectation values x shown in ﬁgure 8.2 for particles with equal mass λc = 1.2∆ but diﬀerent electronic state is quite diﬀerent. The particle initially in an eigenstate of σy has zero velocity at t=0 (see equation (8.12)) whereas the particle in an eigenstate of σx has an initial velocity equal to the speed of light.

The particle in ﬁgure 8.3a was given an average initial momentum pˆ(t = 0) = /∆ by a displacement operation with the Hamiltonian H = ηΩ˜ σxxˆ/∆. The initial state of this particle is
built up out of a positive energy component with positive velocity and a negative energy component

with negative velocity[179]. The positive energy component moves to the right and both spinor

states can be seen to contribute to this part (see appendix B.1), the negative component moves

to the left. As long as these parts overlap, Zitterbewegung is observed which dies out as the parts

separate. For an additional illustration how the vanishing of the Zitterbewegung comes about the

evolution of the probability distributions are shown in ﬁgure 8.3 b. The solid lines are obtained by

numerical simulations. The probability distribution corresponding to the state

0 1

is inverted for

clarity.

It is also possible to initialize the spinor in a pure negative or positive energy state (see ap-

pendix B.1). In ﬁgure 8.3 c, the time evolution xˆ(t) of a negative energy spinor with average

momentum pˆ = 2.2 /∆ is shown. The corresponding simulated probability distributions are

displayed in ﬁgure 8.3 d and it can be seen that there is indeed no Zitterbewegung or splitting of

the wave function which arises only if there are positive and negative energy contributions to the

wave function.

An additional test to compare experimentally obtained states with theory can be performed by

an excitation on the blue sideband after recombining the internal state population. An excitation

on the blue sideband will lead to oscillations that die out quickly but revive after some time

due to an interference of the coherently populated states |↓, n . This interference occurs because

all phonon states are excited from the S1/2 ground state to the D5/2 excited state at the same

98

8.3 Experimental realization

time however their Rabi frequency is diﬀerent. The populations will thus oscillate at diﬀerent

frequencies between ground and excited state and the sum of these oscillations is quickly decaying.

Figure acting

8.4 on

(a) the

shows oscillations on initial spinor state

the blue ψ(x; t =

s0id)eb=an(d√a2fπte2r∆a)−10210e−µs4x∆a22pp11lic.atTiohneofpHaraammielttoernsiainn

8.15 the

Hamiltonian where set to Ω = 0 and Ω˜ = 2π × 68 kHz. The displacement created a coherent state

with n = 6.3 corresponding to α = 2.5. Similar curves have already been observed in David

Winelands group [184]. Figure 8.4 (b) shows blue sideband oscillations for the same initial state

and parameters, except Ω = 2π ×7 kHz. The solid lines in both ﬁgures were obtained by simulating

the phonon distribution and summing over it,

∞
ρDD(t) = pn sin2(Ωn,n+1t),
n=0

(8.16)

with Ωn,n+1 the Rabi frequency for coupling the motional states n and n+1 and pn the occupation probability of the motional state |n .

99

Quantum simulation of the Dirac equation 100

9. Summary and Outlook
The main results of this thesis can be divided into three topics: QIP with 40Ca+ and 43Ca+ ions realizing high ﬁdelity entangling operations, a test of a hidden variable theory where the test procedure relies on QIP techniques and ﬁnally the quantum simulation of the Dirac equation. All experiments encode the quantum information in Zeeman levels of the S1/2 ground state and the meta-stable D5/2 state of calcium ions.
An entangling gate operation is necessary to meet the DiVincenzo criteria to realize a quantum computer. For this purpose a Mølmer-Sørensen entangling operation was implemented creating Bell states with 40Ca+ ions with a ﬁdelity of 99.3%. Assuming that the Bell state ﬁdelity is a good measure for the gate-operation, the errors are in principle low enough to be in the fault tolerant regime, although the overhead in the number of qubits is enormous. A detailed experimental investigation of the gate -
mechanism identiﬁed possible error sources. The high quality of the gate operation allowed for concatenations of up to 21 individual gate-operations. Furthermore it was shown for the ﬁrst time, that this kind of gate operation does not depend on ground state cooling. Bell states with a ﬁdelity of 98.4(2)% were realized with ions cooled to a thermal state with a mean vibrational quantum number n = 18(2).
Implementing the gate operation with three ions was the next obvious step. GHZ states were created with a ﬁdelity of 97.9(2)%. This is so far the highest achieved ﬁdelity for a three ion GHZ state. By using an oﬀ-resonant tightly focused beam a selective entanglement of two out of three ions was achieved. The oﬀ-resonant beam was used to switch on and oﬀ the MølmerSørensen interaction on each qubit individually. This scheme is an important building block for realizing NMR like techniques in ion tr-
aps. The ideas developed in Volckmar Nebendahls [150] thesis promise simple algorithms realizing e.g. error correction with 9 pulses or a Toﬀoli gate with 11 pulses.
The knowledge gained with 40Ca+ was transferred to the more complicated level structure of 43Ca+. A clever choice of polarization and geometrical dependencies helped to suppress the coupling strength of unwanted transitions. This paved the way to create entangled states using 43Ca+ ions with a ﬁdelity of 96.9(3)% despite the presence of spectator states. To protect the susceptible quantum state against magnetic ﬁeld ﬂuctuations it was mapped onto the hyperﬁne clock state of 43Ca+. The mapping puls-
es work with a ﬁdelity of better than 99% such that the ﬁdelity of the Bell state encoded in the hyperﬁne qubits was 96.7%. After a storage time of 20 ms the state was mapped back to the optical qubit and two additional entangling operations were applied. The ﬁdelity after this sequence was still 87.8%. This result demonstrates the combination of a high ﬁdelity gate operation on an optical qubit with the long coherence times of a hyperﬁne qubit in a single realization.
The improvements that have to be incorporated for future QIP experiments are manifold. One
101

Summary and Outlook
of the main goals is to unify all building blocks: high ﬁdelity gates, long coherence times, high ﬁdelity state initialization and read out, in one scalable system. The focus of current technology development will lie on micro-fabricated traps that provide an environment for ions suitable to do QIP. Along this development progress has to be made on many aspects. All techniques have to be modiﬁed such that they work reliably on a bigger number of ions at the same time. All experimental parameters h-
ave to be controlled with higher precision e.g. laser intensity, trap frequencies and magnetic ﬁeld. Achieving this control of parameters is quite challenging. It might be more fruitful to develop and improve alternative methods like coherent control [185] or an encoding in decoherence free subspaces [52] that are more robust against parameter ﬂuctuations.
As it turned out, ion trap systems are a good test bed for fundamental questions in quantum physics or rather hidden variable theories. For this purpose measurements of the form σi ⊗ σi were realized by mapping the state of two qubits on a single qubit prior to the ﬂuorescence measurement. The non-demolition measurement was completed by a second operation mapping the state projected on |↑ or |↓ onto an eigenstate of the measurement. This technique allowed us to do a series of quantum non-demolitio-
n measurements on a single quantum state. The investigated high ﬁdelity entangling gate working on thermal ions was a necessary prerequisite for this task. This measurement technique was the key ingredient to do, for the ﬁrst time, a state-independent experimental test of the Kochen Specker theorem. A violation of the Kochen Specker inequality was found with XKS = 5.46(4) > 4 indicating that hidden variable theories cannot explain the observed eﬀects. The theory predicts that this violation will b-
e found for all possible quantum states. This prediction was tested by performing the same measurements on 10 diﬀerent input states, ﬁnding a violation for all states. A possible loophole, incompatibility of measurements, was closed by carefully evaluating possible error sources and including them in a reﬁned theory. We found that quantum mechanics violates a CHSH like inequality including the errors such that XDHV = 2.23(5) > 2. For a violation of the original Kochen Specker inequality incorporat-
ing imperfect measurements the errors of the mapping operations have to be improved by more than a factor of two.
Due to the huge success of ion traps with QIP one tends to forget that an ion trap is “the“ model system for a quantum harmonic oscillator. In QIP applications it serves as a mere mediator to couple diﬀerent ions, not exploiting the full available Hilbert space. In this thesis the harmonic oscillator was utilized to realize a simulation of the Dirac equation. Momentum and position of a free Dirac particle were mapped onto the respective observables of the trapped ion harmonic oscillator. The exact-
 Dirac Hamiltonian was implemented and eﬀects like Zitterbewegung could be measured. A new method was used to determine the average position of the wave packets. The amount of control of the system allowed for a preparation of speciﬁc states where the form of the Zitterbewegung is changed, Zitterbewegung dies out or does not occur at all.
As it turned out the observable A(t) = cos(2ηΩpt/∆xˆ)σz + sin(2ηΩpt/∆xˆ)σy used for measuring xˆ can be adopted to reconstruct the probability distribution of the wave function [78, 186]. This possibility increases the information about the evolution of the system. It nicely visualizes the splitting of the wave packet and will be a valuable tool for future simulations.
Possible extensions of the Dirac equation simulation are to add more spatial dimensions or to incorporate potentials to simulate e.g. Klein’s paradox. An interesting example is a Dirac particle
102

on a slope. The Hamiltonian in 1+1 dimensions reads as

Hpot = cpˆσx + mc2σz + caxˆI = HD + caxˆI.

(9.1)

The additional potential caxˆ could be realized with a second ion in the trap. HD will be implemented with the ﬁrst ion using the very same light ﬁelds as already demonstrated. A displacement operator on the second ion working on diﬀerent electronic levels but on the same motional mode creates the desired potential. All that is needed in addition to the presented work is a second bichromatic light ﬁeld tuned to a diﬀerent transition. Simulations suggest that a particle running up this slope could -
tunnel through the potential by switching to the negative energy eigenstate. This eigenstate sees an inverted slope and is thus accelerated away from the turning point into the classically forbidden region. This eﬀect corresponds to Klein’s paradox. Another proposal that could be simulated using similar interactions is the 2+1 dimensional Dirac oscillator [172].
Several other proof of principle quantum simulation experiments have been demonstrated in the last years [63, 186, 187]. So simulations of simple quantum systems are already feasible in ion traps. Besides the already realized experiments a huge variety of quantum simulations has been proposed [178] for trapped ions. Some examples are the Unruh eﬀect [188, 189], spin models [177], spin boson models [190], cosmological particle creation [191] and the Frenkel-Kontorova model [192]. It seems that in t-
he near future more complicated experimental realizations with a few tens of ions are within reach. Such problems would already be hard to simulate with classical computers.

103

Summary and Outlook 104

A. The Kochen Specker measurements

A.1. Detailed results for the Kochen Specker measurements

The measurement correlations shown in ﬁgure 7.2 are based on experiments where measurements

on a total of 6,600 realizations of the quantum state Ψ =

√1 2

(|

↑↓

− | ↓↑ ) were performed.

In

these experiments, the results were observed (v1, v2, v3), vi ∈ {−1, +1}, with the frequencies listed

in the table.

M1

Observables

M2

M3

(−1, −1, −1)

(+1, −1, −1)

(−1, +1, −1)

Measured (+1, +1, −1)

correlations (−1, −1, +1)

(+1, −1, +1)

(−1, +1, +1)

(+1, +1, +1)

Number of experiments

σz(1) σz(2) σz(1) ⊗ σz(2) 17 520 511
8 9 4 13 18 1100

σx(2) σx(1) σx(1) ⊗ σz(2)
3 516 529 18 15 7 10 2 1100

σz(1) ⊗ σx(2) σx(1) ⊗ σz(2) σy(1) ⊗ σy(2)
20 495 511 8 23 16 11 16 1100

Observables

M1 M2 M3 (−1, −1, −1)

(+1, −1, −1)

(−1, +1, −1)

Measured (+1, +1, −1)

correlations (−1, −1, +1)

(+1, −1, +1)

(−1, +1, +1)

(+1, +1, +1)

Number of experiments

σz(1) σx(2) σz(1) ⊗ σx(2) 11 281 250 11 237 16 17 277 1100

σz(2) σx(1) σx(1) ⊗ σz(2) 13 298 276 18 264 13 14 204 1100

σz(1) ⊗ σz(2) σx(1) ⊗ σx(2) σy(1) ⊗ σy(2)
1010 8 14 9 26 11 22 0
1100

105

The Kochen Specker measurements

Figure A.1.: Sequence used in the Kochen Specker measurements to hide one ion and detect the state of the other ion. The waiting time counteracts stepwise magnetic ﬁeld ﬂuctuations.

A.2. Hiding the second ion in the Kochen Specker measurements

The QND measurements performed in chapter 7 required the hiding of the S-state of the second

ion from the ﬂuorescence laser in the D5/2, mj = 5/2 state. The hiding was done by using a pulse

sequence similar to the one shown in ﬁgure 5.4(b) using an addressed AC stark pulse. The pulse

sequence

is

given

by

Ux(2)(π)

=

Ux(

π 2

)Uz(1)

(π)Ux(

π 2

).

The

un-hiding

after

the

detection

is

done

in

the same way. The phases of the two carrier pulses φ that un-hide the ion have to be corrected for

the phase diﬀerence the state D5/2, mj = 5/2 acquires relative to the S1/2, mj = 1/2 state. The whole pulse sequence for a Kochen Specker measurement including the detection, un-hiding and

unitary transformations can be seen in ﬁgure A.1.

One problem we were facing in these measurements was a slow sometimes stepwise variation

of the magnetic ﬁeld. The slow variations are tracked by our automatic measurement scheme

determining the magnetic ﬁeld and laser drift (see chapter 5.3). If a step occurs in the magnetic

ﬁeld by ∆B then the carrier pulses are oﬀ-resonant for some time until the change is detected (in

the worst case this can be up to a minute). Due to the detuning the unitary operations following

the un-hiding will have the wrong phase. This problem can be reduced by the waiting time in the

pulse sequence.

The phase diﬀerence the qubit acquires when stored in the D-states is given by

φDD = µB · gD · ∆B · ∆ t

(A.1)

(see equation 2.41) where ∆t is the time needed for state detection and optical pumping. The phase the qubit acquires during the waiting time ∆t is given by

φSD

=

µB

·

(gS

·

1 2

−

gD

·

3 2

)∆B

·

∆t

.

(A.2)

The total phase the qubit acquires is thus given by φtotal = φSD + φDD . It turns out that this phase can be canceled by choosing

∆t

=

gD 3/2gD −

1/2gS

∆t.

(A.3)

This trick only works if the laser is more stable than the magnetic ﬁeld as the length of the whole pulse sequence is increased. The best compromise in our case was achieved by choosing ∆t = ∆t which results in a partial compensation of the phase.

106

B. Methods for simulating the Dirac equation

B.1. Constructing a pure negative energy spinor

The spinor state in ﬁgure 8.3 c was engineered backwards by projecting out the negative energy

part of a wavepacket with average momentum pˆ = 2.2 /∆ and renormalizing the spinor.

The complete sequence for approximating the negative energy state is conveniently described

in

the

basis

of

the

eigenstates

|± y

=

√1 2

1 ±i

of σy.

After ground state cooling we prepare

the state |+ y, then we displace this state to an average momentum state pˆ = 2.2 /∆ by the

displacement Hamiltonian H = ηΩ˜ σyxˆ/∆. Next, a far detuned laser pulse rotates the internal

state to 0.84|+ y + i0.53|− y. The displacement Hamiltonian H = − ηΩ˜ σyxˆ/∆ shifts these parts

in opposite directions to create the required asymmetry between the average momenta of the

components. A ﬁnal π/2-pulse creates the state shown in ﬁgure 8.3 c. This state has > 99%

overlap with the desired negative energy state.

B.2. Setting the phase of the Displacement pulse
Two phases φ+, φ− have to be set (see Hamiltonian 3.37) to get the right electronic and motional interaction in the displacement Hamiltonian (8.3). The sum phase φ+ can be set by the overall phase of the light ﬁeld (see ﬁgure 4.7 AO2 ). The right value in the massless case (Ω = 0) can be found by a simple experiment. Applying a Uy(π/2) pulse to the ion we create an eigenstate of σx. If we then apply Hamiltonian 8.3 with Ω = 0 the electronic state of the qubit should not change. This was conﬁrmed b-
y a second Uy(π/2) pulse completing the rotation to the excited state. By scanning the overall phase of the bichromatic light ﬁeld we can ﬁnd the phase value that corresponds to a σx interaction and implements the desired Hamiltonian.
In the case where Ω = 0 (simulation of a particle with mass) ﬁnding the right phase was a little bit more complicated. We again perform the same experiment, Uy(π/2) - apply HD - Uy(π/2) and scan the length of the bichromatic pulse. If the phase is set correctly, we ﬁnd a change of excitation as shown in ﬁgure B.1. The parameters of the displacement pulse were set to Ω˜ = 2π × 68 kHz and Ω = 2π× 13 kHz. Comparing these data with simulations (also shown in ﬁgure B.1) we found that the right phase ca-
n be determined by varying the phase φ+ and minimizing the excitation after a 40 µs bichromatic pulse. The diﬀerence phase φ− can be set by changing the relative phases of the RF-signal generators driving AO3 (see ﬁgure 4.7). Setting the absolute value of φ− of the red and blue light ﬁeld is not necessary as we can deﬁne our phase space such that the displacement we do is along x. To get a displacement along p we have to add an additional phase diﬀerence

107

Methods for simulating the Dirac equation

1.0

0.9

Excitation to D 5/2

0.8

0.7

0.6 0

50

100

Displacement length (µs)

150

Figure B.1.: Excitation evolution for a pulse length scan of the bichromatic pulse in the experiment Uy(π/2) - apply HD - Uy(π/2) (•). The parameters of the bichromatic pulse were Ω˜ = 2π × 68 kHz and Ω = 2π× 13 kHz. Here the phase of the bichromatic pulse was set right realizing 8.3. The right phase can be determined by minimizing the excitation after a 40 µs pulse length. The red line is a simulation based in 8.3.
of 90◦ to φ− while keeping the sum frequency φ+ the same. This 90◦ phase shift of φ− can be achieved by introducing a switchable delay line in the RF line supplying the blue light ﬁeld. At the same time we have to change the phase of the light ﬁeld by 90◦ to maintain the same value for φ+ and thus the same electronic interaction. A more sophisticated way to change the motional interaction in a continuous way from x to p can be achieved by opening up the axial conﬁnement. When we change the trap fr-
equency by an amount of ∆ we have to replace the operators a and a† in equation (3.38) by aei∆t and a†e−i∆t. So phase space will start to rotate with respect to the unchanged laser frequency that serves as a reference oscillator. If we change the axial trapping potential by ∆, wait for an appropriate amount of time t and switch back to the initial conﬁnement we have rotated phase space by ∆t.
A fast switching of the axial trap frequency was achieved with the setup used for shifting the ions (see chapter 4.1) but supplying both tips from one of the outputs of the circuit shown in ﬁgure 4.2. We can change the trap frequency by about 6 kHz which corresponds to a switching time from x to p of about 40 µs.

108

C. Physical and optical properties of Calcium

speed of light permeability of vacuum permittivity of vacuum
Planck’s constant elementary charge
Bohr magneton atomic mass unit
electron mass ﬁne structure constant
Boltzmann constant

c µ0
0
h = 2π e µB u me α kB

299 792 458 m/s (exact) 4 π · 107 (exact) 1/(µ0c2) (exact)
6.626 068 96(33) ·10−34 J s 1.602 176 487(40) ·10−19 C 927.400 915(23) ·10−26 J T−1 1.660 538 782(83)·10−27 kg 9.109 382 15(45)·10−31 kg
7.297 352 5376(50)·10−3 1.380 6504(24)·10−23

Table C.1.: Fundamental physical constants relevant to the experiment (2006 CODATA recommended values)

transition
4S1/2 ↔ 3D5/2 4S1/2 ↔ 3D3/2 4S1/2 ↔ 4P1/2 4S1/2 ↔ 4P3/2 3P1/2 ↔ 3D3/2 3P3/2 ↔ 3D3/2 3P3/2 ↔ 3D5/2

λair (nm)
411.042 129 776 393.3(1.0) THz 732.389 396.847 393.366 866.214 849.802 854.209

Isotope shift (MHz)
4134.711 720 (390) 4145(43) 706(42) 713(31)
-3464.3(3.0) -3462.4(2.6) -3465.4(3.7)

reference
[94, 122, 193] [194] [194] [194] [100] [100] [100]

Table C.2.: 40Ca+ wavelength in air (λair) and the corresponding isotope shifts (IS) between 40Ca+ and 43Ca+. The transition frequency for 4S1/2 ↔ 3D5/2 is given in THz.

quantity
life time 3D3/2 life time 3D5/2 life time 4P1/2 life time 4P3/2
gj (4S1/2) gj (3D5/2)

value
1.20(1) s 1.168(7) s 7.098(20) ns 6.924(19) ns 2.00225664(9) 1.200 334 0(3)

reference
[96] [96] [97] [97] [195] [122, 193]

Table C.3.: Atomic properties of calcium

109

Physical and optical properties of Calcium

m

-3/2 -1/2 1/2 3/2 5/2

coeﬃcient 1/5 2/5 3/5 4/5 1

Table C.4.: Clebsch Gordan Coeﬃcients for the 40Ca+ quadrupole transition S1/2, m = 1/2 → D5/2, m . The coupling strength for S1/2, m = −1/2 → D5/2, m can be derived by exchanging mj → −mj.

m´ -6 -5 -4 -3 -2 -1 0 1 2 3 4 5 6

32D 5/2

m = -2 0.03 0.06 0.11 0.17 0.24 m = -1 0.06 0.11 0.15 0.18 0.17 m = 0 0.11 0.15 0.17 0.15 0.11 m = 1 0.17 0.18 0.15 0.11 0.06 m = 2 0.24 0.17 0.11 0.06 0.03

F´= 2

m = -2 0.09 0.17 0.24 0.29 0.31 0.28

m = -1 0.19 0.26 0.26 0.20 0.08 0.10 0.34

m = 0 0.30 0.26 0.14 0.00 0.14 0.26 0.30

m = 1 0.34 0.10 0.08 0.20 0.26 0.26 0.19

m=2

0.28 0.31 0.29 0.24 0.17 0.09

F´= 3

m = -2 0.22 0.33 0.40 0.42 0.40 0.33 0.22

m = -1 0.41 0.39 0.27 0.09 0.09 0.27 0.39 0.41

m = 0 0.48 0.12 0.14 0.29 0.34 0.29 0.14 0.12 0.48

m=1

0.41 0.39 0.27 0.09 0.09 0.27 0.39 0.41

m=2

0.22 0.33 0.40 0.42 0.40 0.33 0.22

F´= 4

m = -2 0.48 0.57 0.57 0.52 0.44 0.34 0.23 0.12 m = -1 0.68 0.31 0.00 0.23 0.39 0.48 0.50 0.44 0.31

F´= 5

m=0

0.53 0.53 0.40 0.22 0.00 0.22 0.40 0.53 0.53

m=1

0.31 0.44 0.50 0.48 0.39 0.23 0.00 0.31 0.68

m=2

0.12 0.23 0.34 0.44 0.52 0.57 0.57 0.48

m = -2 1.00 0.82 0.65 0.50 0.38 0.27 0.17 0.10 0.04

m = -1

0.58 0.70 0.71 0.67 0.59 0.49 0.38 0.25 0.13

F´= 6

m=0

0.30 0.47 0.58 0.65 0.67 0.65 0.58 0.47 0.30

m=1

0.13 0.25 0.38 0.49 0.59 0.67 0.71 0.70 0.58

m=2

0.04 0.10 0.17 0.27 0.38 0.50 0.65 0.82 1.00

Figure C.1.: Coupling strength Λ(F, m, F , m ) for the 43Ca+ quadrupole transitions
S1/2(F = 4, m) ↔ D5/2(F , m ) with ∆m = m −m neglecting the geometry and polarization dependence. Figure taken from [94].

110

D. Journal Publications
The work described in this thesis gave rise to a number of journal publications which are:
1. ”High-ﬁdelity entanglement of 43Ca+ hyperﬁne clock states.” G.Kirchmair, J.Benhelm, F.Z¨ahringer, R.Gerritsma, C.F.Roos & R.Blatt Phys. Rev. A, 79, 020304 (2009)
2. ”Deterministic entanglement of ions in thermal states of motion.” G.Kirchmair, J.Benhelm, F.Z¨ahringer, R.Gerritsma, C.F.Roos & R. Blatt New J. Phys., 11, 023002 (2009)
3. ”State-independent experimental test of quantum contextuality”. G. Kirchmair, F. Z¨ahringer, R. Gerritsma, M. Kleinmann, O.Gu¨hne, A.Cabello, R.Blatt & C.F.Roos Nature 460, 494 (2009).
4. ”Quantum simulation of the Dirac equation.” R. Gerritsma, G.Kirchmair, F. Z¨ahringer, E.Solano, R.Blatt & C.F.Roos Nature 463, 68 (2010)
Further articles that have been published in the framework of this thesis:
5. ”Measurement of the hyperﬁne structure of the S1/2-D5/2 transition in 43Ca+.” J.Benhelm, G.Kirchmair, U. Rapol, T.K¨orber, C.F.Roos & R.Blatt, Phys. Rev. A, 75, 032506 (2007)
6. ”Towards fault-tolerant quantum computing with trapped ions.” J.Benhelm, G.Kirchmair, C.F.Roos & R.Blatt Nat. Phys. 4, 463 (2008)
7. ”Experimental quantum-information processing with 43Ca+ ions.” J.Benhelm, G.Kirchmair, C.F.Roos & R.Blatt Phys. Rev. A 77, 062306 (2008)
8. ”Precision measurement of the branching fractions of the 4P3/2 decay of Ca II.” R. Gerritsma, G. Kirchmair, F. Z¨ahringer, J. Benhelm, R. Blatt, C. F. Roos Eur. Phys. J. D 50,13 (2008)
9. ”Absolute Frequency Measurement of the 40Ca+ 4s2S1/2 − 3d2D5/2 Clock Transition.” M. Chwalla, J. Benhelm, K. Kim, G. Kirchmair, T. Monz, M. Riebe, P. Schindler, A. S. Villar, W. H¨ansel, C. F. Roos, R. Blatt, M. Abgrall, G. Santarelli, G. D. Rovera, Ph. Laurent Phys. Rev. Lett. 102, 023002 (2009).
111

Journal Publications 10. ”Realization of a quantum walk with one and two trapped ions.”
F. Z¨ahringer, G.Kirchmair, R. Gerritsma, E.Solano, R.Blatt & C.F.Roos Phys. Rev. Lett. 104 100503 (2010) 11. ”Compatibility and noncontextuality for sequential measurements.” O. Gu¨hne, M. Kleinmann, A. Cabello, J.-A. Larsson, G. Kirchmair, F. Z¨ahringer, R. Gerritsma, C.F. Roos Phys. Rev. A 81, 022121 (2010)
112

Bibliography
[1] Benioﬀ, P. Phys. Rev. Lett. 48, 1581 (1982). [2] Feynman, R. Int. J. Theoret. Phys. 21, 467–488 (1982). [3] Shor, P. W. In Proceedings of the 35th Annual Symposium on Foundations of Computer
Science, Santa Fe, NM, Nov. 20-22, IEEE Computer Society Press, pp. 124–134, (1994). [4] Grover, L. K. Proceeding of the 28th ACM STOC , 212 (1996). [5] Barenco, A., Bennett, C. H., Cleve, R., DiVincenzo, D. P., Margolus, N., Shor, P., Sleator,
T., Smolin, J. A., and Weinfurter, H. Phys. Rev. A 52(5), 3457–3467 (1995). [6] DiVincenzo, D. P. Phys. Rev. A 51, 1015 (1995). [7] DiVincenzo, D. P. Fortschr. Phys. 48, 771–783 (2000). [8] Gershenfeld, N. A. and Chuang, I. L. Science 275(5298), 350–356 (1997). [9] Makhlin, Y., Sch¨on, G., and Shnirman, A. Rev. Mod. Phys. 73, 357 (2001). [10] Majer, J., Chow, J. M., Gambetta, J. M., Koch, J., Johnson, B. R., Schreier, J. A., Frunzio,
L., Schuster, D. I., Houck, A. A., Wallraﬀ, A., Blais, A., Devoret, M. H., Girvin, S. M., and Schoelkopf, R. J. Nature 449, 443–447 (2007). [11] Loss, D. and DiVincenzo, D. P. Phys. Rev. A 57, 120 (1998). [12] Briegel, H. J., Calarco, T., Jaksch, D., Cirac, J., and Zoller, P. J. Mod. Opt 47, 415 (2000). [13] Knill, E., Laﬂamme, R., and Milburn, G. J. Nature 409, 46–52 (2001). [14] Cirac, J. I. and Zoller, P. Phys. Rev. Lett. 74(20), 4091–4094 (1995). [15] Vandersypen, L. M. K. and Chuang, I. L. Re-
v. Mod. Phys. 76, 1037 (2004). [16] Steﬀen, M., Ansmann, M., Bialczak, R. C., Katz, N., Lucero, E., McDermott, R., Neeley, M., Weig, E. M., Cleland, A. N., and Martinis, J. M. Science 313, 1423–1425 (2006). [17] Plantenberg, J. H., de Groot, P. C., Harmans, C. J. P. M., and Mooij, J. E. Nature 447, 836–839 (2007). [18] DiCarlo, L., Chow, J. M., Gambetta, J. M., Bishop, L. S., Johnson, B. R., Schuster, D. I., Majer, J., Blais, A., Frunzio, L., and Schoelkopf1, S. M. G. . R. J. Nature 460, 240 (2009-
). [19] Clarke, J. and Wilhelm, F. Nature 453, 1031 (2008).
113

Bibliography
[20] Karski, M., F¨orster, L., Choi, J.-M., Steﬀen, A., Alt, W., Meschede, D., and Widera, A. Science 325, 174–177 (2009).
[21] Bloch, I. Nature 453, 1016–1022 (2008). [22] Hofstetter, W., Cirac, J. I., Zoller, P., Demler, E., and Lukin, M. D. Phys. Rev. Lett. 89,
220407 (2002). [23] H¨aﬀner, H., Roos, C., and Blatt, R. Physics Reports 469, 155 (2008). [24] Wineland, D., Bergquist, J., Itano, W., and Drullinger, R. Opt. Lett. 5, 254 (1980). [25] Nagourney, W., Sandberg, J., and Dehmelt, H. Phys. Rev. Lett. 56(26), 2797–2799 (1986). [26] Sauter, T., Neuhauser, W., Blatt, R., and Toschek, P. E. Phys. Rev. Lett. 57(14), 1696–1698
(1986). [27] Bergquist, J. C., Hulet, R. G., Itano, W. M., and Wineland, D. J. Phys. Rev. Lett. 57(14),
1699–1702 (1986). [28] Bollinger, J. J., Heinzen, D. J., Itano, W. M., Gilbert, S. L., and Wineland, D. J. IEEE
Trans. Instr. Meas. 40, 126–128 (1991). [29] Diedrich, F., Peik, E., Chen, J. M., Quint, W., and Walther, H. Phys. Rev. Lett. 59(26),
2931–2934 (1987). [30] Wineland, D. J., Bergquist, J. C., Itano, W. M., Bollinger, J. J., and Manney, C. H.
Phys. Rev. Lett. 59(26), 2935–2938 (1987). [31] Raizen, M. G., Gilligan, J. M., Bergquist, J. C., Itano, W. M., and Wineland, D. J.
Phys. Rev. A 45(9), 6493–6501 (1992). [32] Kingdon, K. Phys. Rev. 21, 408 (1923). [33] Monroe, C., Meekhof, D. M., King, B. E., Itano, W. M., and Wineland, D. J. Phys. Rev. Lett.
75(25), 4714–4717 (1995). [34] Sackett, C. A., Kielpinski, D., King, B. E., Langer, C., Meyer, V., Myatt, C. J., Rowe, M.,
Turchette, Q. A., Itano, W. M., Wineland, D. J., and Monroe, C. Nature 404, 256–259 (2000). [35] DeMarco, B., Ben-Kish, A., Leibfried, D., Meyer, V., Rowe, M., Jelenkovi´c, B. M., Itano, W. M., Britton, J., Langer, C., Rosenband, T., and Wineland, D. J. Phys. Rev. Lett. 89(26), 267901 (2002). [36] Schmidt-Kaler, F., H¨aﬀner, H., Riebe, M., Gulde, S., Lancaster, G. P. T., Deuschle, T., Becher, C., Roos, C. F., Eschner, J., and Blatt, R. Nature 422, 408–411 (2003). [37] Leibfried, D., Blatt, R., Mon-
roe, C., and Wineland, D. Rev. Mod. Phys. 75, 281 (2003). [38] Haljan, P. C., Brickman, K.-A., Deslauriers, L., Lee, P. J., and Monroe, C. Phys. Rev. Lett. 94(15), 153602 (2005).
114

Bibliography
[39] Home, J. P., McDonnell, M. J., Lucas, D. M., Imreh, G., Keitch, B. C., Szwer, D. J., Thomas, N. R., Webster, S. C., Stacey, D. N., and Steane, A. M. New J. Phys. 8, 188 (2006).
[40] Benhelm, J., Kirchmair, G., Roos, C. F., and Blatt, R. Nat. Phys. 4, 463–466 (2008).
[41] Riebe, M., H¨aﬀner, H., Roos, C. F., H¨ansel, W., Benhelm, J., Lancaster, G. P. T., K¨orber, T. W., Becher, C., Schmidt-Kaler, F., James, D. F. V., and Blatt, R. Nature 429, 734–737 (2004).
[42] Barrett, M. D., Chiaverini, J., Schaetz, T., Britton, J., Itano, W. M., Jost, J. D., Knill, E., Langer, C., Leibfried, D., Ozeri, R., and Wineland, D. J. Nature 429, 737–739 (2004).
[43] Chiaverini, J., Leibfried, D., Schaetz, T., Barrett, M. D., Blakestad, R. B., Britton, J., Itano, W. M., Jost, J. D., Knill, E., Langer, C., Ozeri, R., and Wineland, D. J. Nature 432, 602–605 (2004).
[44] Reichle, R., Leibfried, D., Knill, E., Britton, J., Blakestad, R. B., Jost, J. D., Langer, C., Ozeri, R., Seidelin, S., and Wineland, D. J. Nature 443, 838–841 (2006).
[45] Leibfried, D., Knill, E., Seidelin, S., Britton, J., Blakestad, R. B., Chiaverini, J., Hume, D. B., Itano, W. M., Jost, J. D., Langer, C., Ozeri, R., Reichle, R., and Wineland, D. J. Nature 438(7068), 639–642 (2005).
[46] H¨aﬀner, H., H¨ansel, W., Roos, C. F., Benhelm, J., Chek-al-Kar, D., Chwalla, M., K¨orber, T., Rapol, U. D., Riebe, M., Schmidt, P. O., Becher, C., Gu¨hne, O., Du¨r, W., and Blatt, R. Nature 438, 643–646 (2005).
[47] Gulde, S. Experimental realization of quantum gates and the Deutsch-Josza algorithm with trapped 40Ca+–ions. PhD thesis, Universit¨at Innsbruck, (2003).
[48] Brickman, K.-A., Haljan, P. C., Lee, P. J., Acton, M., Deslauriers, L., and Monroe, C. Phys. Rev. A 72, 050306–1 (2005).
[49] Roos, C. F., Lancaster, G. P. T., Riebe, M., H¨aﬀner, H., H¨ansel, W., Gulde, S., Becher, C., Eschner, J., Schmidt-Kaler, F., and Blatt, R. Phys. Rev. Lett. 92, 220402 (2004).
[50] Riebe, M., Kim, K., Schindler, P., Monz, T., Schmidt, P. O., K¨orber, T. K., H¨ansel, W., H¨aﬀner, H., Roos, C. F., and Blatt, R. Phys. Rev. Lett. 97, 220407 (2006).
[51] Kielpinski, D., Meyer, V., Rowe, M. A., Sackett, C. A., Itano, W. M., Monroe, C., and Wineland, D. J. Science 291(5506), 1013–1015 (2001).
[52] Monz, T., Kim, K., Villar, A. S., Schindler, P., Chwalla, M., Riebe, M., Roos, C. F., H¨aﬀner, H., H¨ansel, W., Hennrich, M., and Blatt, R. Phys. Rev. Lett. 103, 200503 (2009).
[53] Moehring, D. L., Maunz, P., Olmschenk, S., Younge, K. C., Matsukevich, D. N., Duan, L.-M., and Monroe, C. Nature 449, 68–71 (2007).
[54] Olmschenk, S., Matsukevich, D. N., Maunz, Hayes, Duan, M., and Monroe, C. Science 323, 486 (2009).
115

Bibliography
[55] Home, J. P., Hanneke, D., Jost, J. D., Amini, J. M., Leibfried, D., and Wineland, D. J. Science 325, 1227–1230 (2009).
[56] Hanneke, D., Home, J. P., Jost, J. D., Amini, J. M., Leibfried, D., and Wineland, D. J. Nat. Phys. 6, 13 (2009).
[57] Shor, P. W. Phys. Rev. A 52(4), R2493–R2496 (1995). [58] Steane, A. M. Phys. Rev. Lett. 77(5), 793–797 (1996). [59] Shor, P. 37th Annual Symposium on Foundations of Computer Science (FOCS ’96) 00, 56
(1996). [60] Knill, E. Nature 434, 39–44 (2005). [61] Raussendorf, R. and Harrington, J. Phys. Rev. Lett. 98, 190504 (2007). [62] Reichardt, B. W. arXiv:quant-ph/0406025 (2004). [63] Friedenauer, H., Schmitz, H., Glueckert, J., Porras, D., and Schaetz, T. Nat. Phys. 4, 757–761
(2008). [64] Einstein, A., Podolsky, B., and Rosen, N. Phys. Rev. 47, 777–780 (1935). [65] Bell, J. Physics 1, 195 (1965). [66] Weihs, G., Jennewein, T., Simon, C., Weinfurter, H., and Zeilinger, A. Phys. Rev. Lett. 81,
5039–5043 (1998). [67] Aspect, A., Grangier, P., and Roger, G. Phys. Rev. Lett. 49, 91–94 (1982). [68] Tittel, W., Brendel, J., Zbinden, H., and Gisin, N. Phys. Rev. Lett. 81, 3563–3566 (1998). [69] Rowe, M. A., Kielpinski, D., Meyer, V., Sackett, C. A., Itano, W. M., Monroe, C., and
Wineland, D. J. Nature 409, 791–794 (2001). [70] Specker, E. Dialectica 14, 239–246 (1960). [71] Kochen, S. and Specker, E. P. J. Math. Mech. 17, 59––87 (1967). [72] Bell, J. S. Rev. Mod. Phys. 38, 447—-452 (1966). [73] Amselem, E., R˚admark, M., Bourennane, M., and Cabello, A. Phys. Rev. Lett. 103, 160405
(2009). [74] Moussa, O., Ryan, C. A., Cory, D. G., and Laﬂamme, R. arXiv:0912.0485 (2009). [75] Kirchmair, G., Z¨ahringer, F., Gerritsma, R., Kleinmann, M., O., G., Cabello, A., Blatt, R.,
and Roos, C. F. Nature 460, 494 (2009). [76] Kirchmair, G., Benhelm, J., Z¨ahringer, F., Gerritsma, R., Roos, C. F., and Blatt, R. New
J. Phys. 11, 023002 (2009).
116

Bibliography
[77] Kirchmair, G., Benhelm, J., Z¨ahringer, F., Gerritsma, R., Roos, C. F., and Blatt, R. Phys. Rev. A 79, 020304(R) (2009).
[78] Gerritsma, R., Kirchmair, G., Z¨ahringer, F., Solano, E., Blatt, R., and Roos, C. F. Nature 463, 68 (2010).
[79] Nielsen, M. A. and Chuang, I. L. Quantum computation and quantum information. Cambridge Univ. Press, Cambridge, (2000).
[80] Sørensen, A. and Mølmer, K. Phys. Rev. Lett. 82, 1971–1974 (1999).
[81] Sørensen, A. and Mølmer, K. Phys. Rev. A 62, 022311 (2000).
[82] Clauser, J. and Shimony, A. Rep. Prog. Phys. 41, 1883 (1978).
[83] Everett, H. Rev. Mod. Phys. 29, 454 (1957).
[84] Gr¨oblacher, S., Paterek, T., Kaltenbaek, R., Brukner, S., Zdotukowski, M., Aspelmeyer, M., and Zeilinger, A. Nature 446, 871 (2007).
[85] Rauschenbeutel, A., Nogues, G., Osnaghi, S., Bertet, P., Brune, M., Raimond, J. M., and Haroche, S. Science 288(5473), 2024–2028 (2000).
[86] Aspelmeyer, M., B¨om, H. R., Gyatso, T., Jennewein, T., Kaltenbaek, R., Lindenthal, M., Molina-Terriza, G., Poppe, A., Resch, K., Taraba, M., Ursin, R., Walther, P., and Zeilinger, A. Science 301, 621–623 (2003).
[87] Mandel, O., Greiner, M., Widera, A., Rom, T., H¨ansch, T. W., and Bloch, I. Phys. Rev. Lett. 91, 010407 (2003).
[88] Jennewein, T., Simon, C., Weihs, G., Weinfurter, H., and Zeilinger, A. Phys. Rev. Lett. 84(20), 4729–4732 (2000).
[89] Raussendorf R., Browne D., B. l. J. Phys. Rev. A 68, 022312 (2003).
[90] Cohen-Tannoudji, Bernhard Diu, F. L. Quantum mechanics I + II. Wiley, (1977).
[91] Haroche, S. and Raimond, J.-M. Exploring the quantum. Oxford Univ. Press, Oxford, (2006).
[92] Roos, C. Controlling the quantum state of trapped ions. PhD thesis, Universit¨at Innsbruck, (2000).
[93] Riebe, M. Preparation of entangled states and quantum teleportation with atomic qubits. PhD thesis, Universit¨at Innsbruck, (2005).
[94] Benhelm, J. Precision spectroscopy and quantum information processsing with trapped calcium ions. PhD thesis, Universit¨at Innsbruck, (2008).
[95] Gerritsma, R., Kirchmair, G., Z¨ahringer, F., Benhelm, J., Blatt, R., and Roos, C. Eur. Phys. J. D 50 (2008).
117

Bibliography
[96] Barton, P. A., Donald, C. J. S., Lucas, D. M., Stevens, D. A., Steane, A. M., and Stacey, D. N. Phys. Rev. A 62, 032503 (2000).
[97] Jin, J. and Church, D. A. Phys. Rev. Lett. 70, 3213–3216 (1993). [98] James, D. F. V. Appl. Phys. B 66, 181–190 (1998). [99] Arbes, F., Benzing, M., Gudjons, T., Kurth, F., and Werth, G. Z. Phys. D 31, 27–30 (1994). [100] N¨ortershauser, W., Blaum, K., Icker, K., Muller, P., Schmitt, A., Wendt, K., and Wiche, B.
Eur. Phys. J. D , 33–39 (1998). [101] Breit, G. and Rabi, I. I. Phys Rev 38, 2082 (1931). [102] Benhelm, J., Kirchmair, G., Roos, C. F., and Blatt, R. Phys. Rev. A 77, 062306 (2008). [103] H¨aﬀner, H., Gulde, S., Riebe, M., Lancaster, G., Becher, C., Eschner, J., Schmidt-Kaler, F.,
and Blatt, R. Phys. Rev. Lett. 90, 143602 (2003). [104] Loudon, R. The Quantum Theory of Light. Oxford Univ. Press, (1973). [105] Schindler, P. Master’s thesis, Universit¨at Innsbruck, (2007). [106] Johanning, M., Braun, A., Timoney, N., Elman, V., Neuhauser, W., and Wunderlich, C.
Phys. Rev. Lett. 102, 073004 (2009). [107] Ospelkaus, C., Langer, C. E., Amini, J. M., Brown, K. R., Leibfried, D., and Wineland, D. J.
Phys. Rev. Lett. 101, 090502 (2008). [108] Lee, P. J., Brickman, K. A., Deslauriers, L., Haljan, P. C., Duan, L., and Monroe, C. J. Opt. B
7, 371 (2005). [109] Leibfried, D., DeMarco, B., Meyer, V., Lucas, D., Barrett, M., Britton, J., Itano, W. M.,
Jelenkovi´c, B., Langer, C., Rosenband, T., and Wineland, D. J. Nature 422, 412–415 (2003). [110] Milburn, G. J., Schneider, S., and James, D. F. Fortschr. Phys. 48, 801–810 (2000). [111] Solano, E., de Matos Filho, R. L., and Zagury, N. Phys. Rev. A 59, R2539–R2543 (1999). [112] Roos, C. F., Monz, T., Kim, K., Riebe, M., H¨aﬀner, H., James, D. F. V., and Blatt, R.
Phys. Rev. A 77, 040302(R) (2008). [113] Schmidt-Kaler, F., H¨aﬀner, H., Gulde, S., Riebe, M., Lancaster, G. P. T., Deuschle, T.,
Becher, C., H¨ansel, W., Eschner, J., Roos, C. F., and Blatt, R. Appl. Phys. B 77, 789 (2003). [114] Unanyan, R. G. and Fleischhauer, M. Phys. Rev. Lett. 90, 133601 (2003). [115] Lougovski, P., Walther, H., and Solano, E. Eur. Phys. J. D 38, 423–426 (2006). [116] Santos, M. F., Giedke, G., and Solano, E. Phys. Rev. Lett. 98, 020401 (2007). [117] Lamata, L., Le´on, J., Sch¨atz, T., and Solano, E. Phys. Rev. Lett. 98, 253005 (2007).
118

Bibliography
[118] Kirchmair, G. Master’s thesis, Universit¨at Innsbruck, (2007). [119] Notcutt, M., Ma, L.-S., Ye, J., and Hall, J. L. Opt. Lett. 30, 1815–1817 (2005). [120] Drever, R. W. P., Hall, J. L., Kowalski, F. V., Hough, J., Ford, G. M., Munley, A. J., and
Ward, H. Appl. Phys. B 31, 97–105 (1983). [121] Ma, L., Jungner, P., Ye, J., and Hall, J. L. Opt. Lett. 19, 1777 (1994). [122] Chwalla, M. Precision spectroscopy with 40Ca+ ions in a Paul trap. PhD thesis, Institute
for Experimental Physics, Innsbruck, (2009). [123] Pham, P. T. T. Master’s thesis, Massachusetts Institute of Technology, (2005). [124] Rotter, D. Master’s thesis, University of Innsbruck, (2003). [125] Ramsey, N. F. Phys. Rev. 78, 695–699 (1950). [126] Benhelm, J., Kirchmair, G., Rapol, U., K¨orber, T., Roos, C. F., and Blatt, R. Phys. Rev. A
75, 032506 (2007). [127] Kielpinski, D., Monroe, C., and Wineland, D. J. Nature 417, 709–711 (2002). [128] Hensinger, W. K., Olmschenk, S., Stick, D., Hucul, D., Yeo, M., Acton, M., Deslauriers, L.,
and Monroe, C. Appl. Phys. Lett. 88, 034101 (2006). [129] Blakestad, R. B., Ospelkaus, C., VanDevender, A. P., Amini, J. M., Britton, J., Leibfried,
D., and Wineland, D. J. Phys. Rev. Lett. 102, 153002 (2009). [130] Splatt, F., Harlander, M., Brownnutt, M., Z¨ahringer, F., Blatt, R., and H¨ansel, W. New
J. Phys. 11, 103008 (2009). [131] Home, J. P. and Steane, A. M. Quant. Inf. Comp. 6, 289 (2006). [132] Turchette, Q. A., Kielpinski, King, B. E., Leibfried, D., Meekhof, D. M., Myatt, C. J.,
Rowe, M. A., Sackett, C. A., Wood, C. S., Itano, W. M., Monroe, C., and Wineland, D. J. Phys. Rev. A 61, 063418 (2000). [133] Deslauriers, L., Haljan, P. C., Lee, P. J., Brickman, K.-A., Blinov, B. B., Madsen, M. J., and Monroe, C. Phys. Rev. A 70, 043408 (2004). [134] Labaziewicz, J., Ge, Y., Antohi, P., Leibrandt, D., Brown, K., and Chuang, I. Phys. Rev. Lett. 100, 013001 (2008). [135] Nebendahl, V., H¨aﬀner, H., and Roos, C. F. Phys. Rev. A 79, 012312 (2009). [136] Hradil, Z., Rˇ eh´aˇcek, J., -
Fiur´aˇsek, J., and Jeˇzek, M. Lect. Notes Phys. 649, 59–112 (2004). [137] Je˘zek, M., Fiur´a˘sek, J., and Hradil, Z. Phys. Rev. A 68, 012305 (2003). [138] Steane, A. Rep. Prog. Phys. 61, 117–173 (1998).
119

Bibliography
[139] Rowe, M. A., Ben-Kish, A., DeMarco, B., Leibfried, D., Meyer, V., Beall, J., Britton, J., Hughes, J., Itano, W. M., Jelenkovi´c, B., Langer, C., Rosenband, T., and Wineland, D. J. Quant. Inf. Comp. 2, 257–271 (2002).
[140] Blinov, B., Deslauriers, L., Lee, P., Madsen, M., Miller, R., and Monroe, C. Phys. Rev. A 65, 040304 (2002).
[141] Barrett, M. D., DeMarco, B., Schaetz, T., Leibfried, D., Britton, J., Chiaverini, J., Itano, W. M., Jelenkovi´c, B., Jost, J. D., Langer, C., Rosenband, T., and Wineland, D. J. Phys. Rev. A 68, 042302 (2003).
[142] Harris, F. J. Proc. IEEE 66, 51–83 (1978).
[143] Leibfried, D., Barrett, M. D., Schaetz, T., Britton, J., Chiaverini, J., Itano, W. M., Jost, J. D., Langer, C., and Wineland, D. J. Science 304, 1476–1478 (2004).
[144] Haljan, P. C., Lee, P. J., Brickman, K.-A., Acton, M., Deslauriers, L., and Monroe, C. Phys. Rev. A 72, 062316 (2005).
[145] Leibfried, D., Knill, E., Ospelkaus, C., and Wineland, D. J. Phys. Rev. A 76, 032324 (2007).
[146] Roos, C. F. New J. Phys. 10, 013002 (2008).
[147] Langer, C., Ozeri, R., Jost, J. D., Chiaverini, J., DeMarco, B., Ben-Kish, A., Blakestad, R. B., Britton, J., Hume, D. B., Itano, W. M., Leibfried, D., Reichle, R., Rosenband, T., Schaetz, T., Schmidt, P. O., and Wineland, D. J. Phys. Rev. Lett. 95, 060502 (2005).
[148] Olmschenk, S., Younge, K. C., Moehring, D. L., Matsukevich, D. N., Maunz, P., and Monroe, C. Phys. Rev. A 76, 052314 (2007).
[149] Kim, K., Chang, M., Islam, R., Korenblit, S., Duan, L., and Monroe, C. Phys. Rev. Lett. 103, 120502 (2009).
[150] Nebendahl, V. Master’s thesis, University of Innsbruck, (2008).
[151] Wang, X., Sørensen, A., and Mølmer, K. Phys. Rev. Lett. 86(17), 3907–3910 (2001).
[152] Myerson, A. H., Szwer, D. J., Webster, S. C., Allcock, D. T. C., Curtis, M. J., Imreh, G., Sherman, J. A., Stacey, D. N., Steane, A. M., and Lucas, D. M. Phys. Rev. Lett. 100, 200502 (2008).
[153] Knill, E., Leibfried, D., Reichle, R., Britton, J., Blakestad, R. B., Jost, J. D., Langer, C., Ozeri, R., Seidelin, S., and Wineland, D. J. Phys. Rev. A 77, 012307 (2008).
[154] Benhelm, J., Kirchmair, G., Roos, C. F., and Blatt, R. arXiv:0804.1261 (2008).
[155] Lucas, D. M., Keitch, B. C., Home, J. P., Imreh, G., McDonnell, M. J., Stacey, D. N., Szwer, D. J., and Steane, A. M. arXiv: 0710.4421v1 (2007).
[156] Bohr, N. Phys. Rev. 48, 696–702 (1935).
120

Bibliography
[157] Cabello, A. and Garc´ıa-Alcaine, G. Phys. Rev. Lett. 80, 1797–1799 (1998). [158] Meyer, D. A. Phys. Rev. Lett. 83, 3751–1754 (1999). [159] Cabello, A. Phys. Rev. Lett. 101, 210401 (2008). [160] Gu¨hne, O., Kleinmann, M., Cabello, A., Larsson, J., Kirchmair, G., Z¨ahringer, F., Gerritsma,
R., and Roos, C. arXiv:0912.4846 (2010). [161] Peres, A. Phys. Lett. A 151, 107–108 (1990). [162] Mermin, N. D. Phys. Rev. Lett. 65, 3373—-3376 (1990). [163] Garay, L. J., Anglin, J. R., Cirac, J. I., and Zoller, P. Phys. Rev. Lett. 85, 4643–4647 (2000). [164] Schliemann, J., Loss, D., and Westervelt, R. M. Phys. Rev. Lett. 94, 206801 (2005). [165] Cserti, J. and D´avid, G. Phys. Rev. B 74, 172305 (2006). [166] Katsnelson, M. I., Novoselov, K. S., and Geim, A. K. Nat. Phys. 2, 620–625 (2006). [167-
] Neto, A. H. C., Guinea, F., Peres, N. M. R., Novoselov, K. S., and Geim, A. K.
Rev. Mod. Phys. 81, 109–162 (2009). [168] Thaller, B. The Dirac equation. Springer-Verlag, (1992). [169] Anderson, C. D. Phys. Rev. 43, 491–494 (1933). [170] Klein, O. Z. Phys. 53, 157–165 (1929). [171] Schr¨odinger, E. Sitz. Preuss. Akad. Wiss. Phys.-Math. Kl. 24, 418–428 (1930). [172] Bermudez, A., Martin-Delgado, M. A., and Solano, E. Phys. Rev. A 76, 041801(R) (2007). [173] Zhang, X. Phys. Rev. Lett. 100, 113903 (2008). [174] Vaishnav, J. Y. and Clark, C. W. Phys. Rev. Lett. 100, 153002 (2008)-
. [175] Otterbach, J., Unanyan, R. G., and Fleischhauer, M. Phys. Rev. Lett. 102, 063602 (2009). [176] Leibfried, D., DeMarco, B., Meyer, V., Rowe, M., Ben-Kish, A., Britton, J., Itano, W. M.,
Jelenkovi´c, B., Langer, C., Rosenband, T., and Wineland, D. J. Phys. Rev. Lett. 89, 247901 (2002). [177] Porras, D. and Cirac, J. I. Phys. Rev. Lett. 92, 207901 (2004). [178] Johanning, M., Var´on, A. F., and Wunderlich, C. J. Phys. B 42, 154009 (2009). [179] Thaller, B. arXiv:quant-ph/0409079 (2004). [180] Schwabl, F. Quantenmechanik fu¨r Fortgeschrittene. Springer, (2005). [181] Krekora, P., Su, Q., and Grobe, R. Phys. Rev. Lett. 93, 043004 (2004).
121

Bibliography [182] Wang, Z.-Y. and Xiong, C.-D. Phys. Rev. A 77, 045402 (2008). [183] Wallentowitz, S. and Vogel, W. Phys. Rev. Lett. 75, 2932–2935 (1995). [184] Meekhof, D. M., Monroe, C., King, B. E., Itano, W. M., and Wineland, D. J. Phys. Rev. Lett.
76(11), 1796–1799 (1996). [185] Garc´ıa-Ripoll, J. J., Zoller, P., and Cirac, J. I. Phys. Rev. Lett. 91(15), 157901 (2003). [186] Z¨ahringer, F., Kirchmair, G., Gerritsma, R., Solano, E., Blatt, R., and Roos, C. F.
arXiv:0911.1876 (2009). [187] Schmitz, H., Matjeschk, R., Schneider, C., Glueckert, J., Enderlein, M., Huber, T., and
Schaetz, T. Phys. Rev. Lett. 103, 090504 (2009). [188] Menicucci, N. C. and Milburn, G. J. Phys. Rev. A 76, 052105 (2007). [189] Alsing, P. M., Dowling, J. P., and Milburn, G. J. Phys. Rev. Lett. 94, 220401 (2005). [190] Porras, D., Marquardt, F., von Delft, J., and Cirac, J. I. Phys. Rev. A 78, 010101 (2008). [191] Schu¨tzhold, R., Uhlmann, M., Petersen, L., Schmitz, H., Friedenauer, A., and Sch¨atz, T.
Phys. Rev. Lett. 99, 201301 (2007). [192] Garc´ıa-Mata, I., Zhirov, O. V., and Shepelyansky, D. L. Eur. Phys. J. D 41, 325–330 (2007). [193] Chwalla, M., Benhelm, J., Kim, K., Kirchmair, G., Monz, T., Riebe, M., Schindler, P., Villar,
A. S., H¨ansel, W., and Roos, C. F. Phys. Rev. Lett. 102, 023002 (2009). [194] Kurth, F., Gudjons, T., Hilbert, B., Reisinger, T., Werth, G., and Martensson-Pendrill,
A. M. Z. Phys. D 34, 227–232 (1995). [195] Tommaseo, G., Pfeil, T., Revalde, G., Werth, G., Indelicato, P., and Desclaux, J.
Eur. Phys. J. D 25, 113–121 (2003).
122

Danksagung
Das Gelingen dieser Arbeit w¨are ohne die Hilfe und Geduld Vieler nicht m¨oglich gewesen. Ihnen allen m¨ochte hiermit herzlich danken.
An erster Stelle m¨ochte ich mich bei Rainer Blatt bedanken, der es mir erm¨oglicht hat meine Diplomarbeit und jetzt auch meine Doktorarbeit in seiner Arbeitsgruppe anzufertigen. Durch sein stetiges Bemu¨hen und seinen großen Einsatz hat er ein Klima und wissenschaftliches Umfeld geschaﬀen indem es eine Freude ist zu arbeiten.
Ein großer Dank gebu¨hrt natu¨rlich Christian Roos. Viele der in dieser Arbeit vorgestellten Experimente waren nur durch seine Ideen und Unterstu¨tzung m¨oglich. Besonders Bedanken m¨ochte ich mich auch fu¨r das Korrekturlesen meiner Arbeit.
Meine Arbeitsweise im Labor wurde am meisten durch Jan Benhelm gepr¨agt. In den vier Jahren unserer Zusammenarbeit konnte ich sehr viel von ihm lernen und meine Doktorarbeit proﬁtierte sehr von seiner sorgf¨altigen Aufbauarbeit.
Weiters Bedanken m¨ochte ich mich bei Rene Gerritsma und Florian Z¨ahringer die mit mir unz¨ahlige Tage im Labor verbracht haben. Die interessanten und witzigen Unterhaltungen w¨ahrend der langen Stunden vor dem Laborrechner werden mir immer in guter Erinnerung bleiben.
Vielen Dank auch an die ganze 40Ca+Crew fu¨r die gute Zusammenarbeit in den letzten Jahren. Besonders bedanken m¨ochte ich mich bei Philipp Schindler fu¨r das betreuen unserer Pulse Box und Michael Chwalla fu¨r die Arbeit an den 729 nm cavities und der ”real laser front”.
Ein großer Dank gebu¨hrt auch der ganzen Kochgruppe die, jeden Tag, fu¨r ein sehr gutes Essen und eine gute Stimmung w¨ahrend der Mittagspause gesorgt hat.
Nicht zu vergessen sind natu¨rlich meine Freunde. Einen Physiker von seiner Arbeit abzulenken ist nicht immer ganz einfach deshalb ist es ihnen zu verdanken, dass meine sozialen Kompetenzen nicht auf der Strecke geblieben sind.
Ohne die Unterstu¨tzung meiner Familie h¨atte ich diese Doktorarbeit wohl nicht so erfolgreich abschliessen k¨onnen. Deshalb will ich mich an dieser Stelle auch recht herzlich bei ihnen bedanken.
Ein besonderer Dank gebu¨hrt meiner Freundin Astrid die mich all die Jahre durch mein Studium und meine Doktorarbeit begleitet hat. Ihr Verst¨andnis und ihre Unterstu¨tzung haben mir geholfen auch die schwierigsten Situationen zu meistern.
123

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:45.126Z
- **Text Length:** 316601 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
