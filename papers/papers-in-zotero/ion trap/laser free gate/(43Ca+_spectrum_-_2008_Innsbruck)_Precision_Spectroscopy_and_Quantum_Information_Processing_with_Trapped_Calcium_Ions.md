# PDF Document: Benhelm - Precision Spectroscopy and Quantum Information Pro.pdf

**File Path:** Benhelm - Precision Spectroscopy and Quantum Information Pro.pdf

**Processed Date:** 2026-02-10T18:13:48.117Z

**File Size:** 3905.82 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 594

**Title:** (43Ca+ spectrum - 2008 Innsbruck) Precision Spectroscopy and Quantum Information Processing with Trapped Calcium Ions

**Collection:** Ion Trap > Laser free gate

---

## Extracted Text Content

Precision Spectroscopy and Quantum Information Processing
with Trapped Calcium Ions
A thesis submitted to the Faculty of Mathematics, Computer Science and Physics
of the University of Innsbruck in partial fulﬁllment of the requirements
for the degree of Doctor rerum naturalium
by
Jan Benhelm
Innsbruck, May 2008

Thesis advisor and referee External referees
Rigorosum committee

Prof. Dr. R. Blatt
Prof. I. L. Chuang (MIT, Cambridge, USA) Dr. D. M. Lucas (Clarendon Laboratory, Oxford, GB)
Prof. Dr. P. Girtler (Chair) Prof. Dr. R. Blatt Prof. Dr. A. Hansel

The work described in this thesis was carried out at the
Universit¨at Innsbruck Institut fu¨r Experimentalphysik Technikerstraße 25 6020 Innsbruck, Austria
and the
Institut fu¨r Quantenoptik und Quanteninformation der O¨ sterreichischen Akademie der Wissenschaften Otto Hittmair-Platz 1 6020 Innsbruck, Austria.
The experiment was funded by grants from the US funding agency IARPA, the European network SCALA, and the Austrian Academy of Sciences.
This document is available online at http://quantumoptics.at.

Abstract Over the last decade quantum information processing (QIP) has exploded into a major ﬁeld of physics, studied both experimentally and theoretically with a universal quantum computer as a long-term vision. Ions stored as strings in linear Paul traps are among the most promising systems for constructing a quantum device harnessing the computing power inherent in the laws of quantum physics.
The two most important challenges in trapped ion quantum computing today are to realize and control systems with large numbers of ions, and to improve and integrate the operations which serve as basic building blocks, in particular universal gate operations. Quite surprisingly, even after many years of intense research with diﬀerent atom species, it is still not evident which ion is best suited for QIP.
This thesis describes the construction of a new experiment built to study a promising candidate qubit, namely the calcium isotope 43Ca+. Due to its nuclear spin of I = 7/2, the isotope 43Ca+ exhibits a relatively complicated level structure, compared to other ions used so far for QIP. This work develops various strategies to successfully control such a complex level scheme.
Initially we investigated the hyperﬁne structure of the 4s 2S1/2 ↔ 3d 2D5/2 quadrupole transition at a wavelength of 729 nm by laser spectroscopy using a single trapped 43Ca+ ion. We determined the hyperﬁne structure constants of the metastable level as AD5/2 = −3.893 12(3) MHz and BD5/2 = −4.239(1) MHz. The isotope shift of this transition with respect to 40Ca+ was measured to be ∆i4s3o,40/(2π) = 4 134 711 720(390) Hz.
Armed with this knowledge, we were able to demonstrate ground-state cooling, robust state initialization and eﬃcient readout of a qubit encoded in the ground-state hyperﬁne structure of a 43Ca+ ion. A microwave and a Raman light ﬁeld were used to drive qubit transitions, and the coherence times for both ﬁelds were compared. Phase errors due to interferometric instabilities in the Raman ﬁeld generation were not limiting the experiments on a time scale of at least 100 ms. Even in the presence of mag-
netic ﬁeld ﬂuctuations we found a quantum information storage time exceeding one second.
We implemented a Mølmer-Sørensen type gate operation, entangling ions with a ﬁdelity of 99.3(1)%. The gate was performed on a pair of qubits encoded in two trapped 40Ca+ ions using an amplitude-modulated laser beam interacting with both ions at the same time. A robust gate operation, mapping separable states onto maximally entangled states was achieved by adiabatically switching the laser-ion coupling on and oﬀ. The performance of a single gate and concatenations of up to 21 gate operations were a-
nalyzed. Concerning the ﬁdelity, this result sets a world record for creating two-qubit entanglement on-demand irrespective of the physical realization considered.

Zusammenfassung Die Quanteninformationsverarbeitung (QIV) als experimentelles und theoretisches Teilgebiet der Physik mit dem universellen Quantencomputer als Fernziel entwickelte sich innerhalb der letzten Dekade geradezu explosionsartig. Fu¨r die technische Realisierung einer Maschine zur Ausnutzung der den Gesetzen der Quantenmechanik eigenen Rechenkraft gibt es eine Vielzahl an M¨oglichkeiten. Ionen, die sich in linearen Paul-Fallen wie auf einer Perlenschnur aufreihen, haben sich dabei mittle-
rweile als sehr vielversprechenden Ansatz etabliert.
Die beiden gr¨oßten Herausforderungen der Ionenfallen-Experimente zur QIV bestehen gegenw¨artig in der Skalierung zu einer Vielzahl kontrollierter Quantenbits und in der Verbesserung und Integration der bereits demonstrierten Grundbausteine, insbesondere universeller Gatteroperationen. U¨ berraschenderweise ist auch nach vielen Jahren intensiver Forschung unklar, welche Ionen-Sorte zu diesem Zweck am besten geeignet ist.
Die vorliegende Arbeit beschreibt den Aufbau eines neuen Experiments zur Untersuchung des Calciumisotops 43Ca+ als attraktiven Kandidaten. Aufgrund des Kernspins von I = 7/2 hat das Isotop 43Ca+, verglichen mit Atomsorten, die bisher fu¨r die QIV verwandt wurden, ein komplizierteres Energieniveauschema. Diese Arbeit diskutiert die daraus resultierenden M¨oglichkeiten und beschreibt deren experimentelle Realisierung, so dass diese Komplexit¨at erfolgreich genutzt werden kann.
Zun¨achst wurde die Hyperfein-Struktur des 4s 2S1/2 ↔ 3d 2D5/2 Quadrupol-U¨ bergangs bei einer Wellenl¨ange von 729 nm mittels Laserspektroskopie an einem einzelnen 43Ca+Ion untersucht. Die Hyperfein-Konstanten des metastabilen Energieniveaus wurden zu AD5/2 = −3.893 12(3) MHz, BD5/2 = −4.239(1) MHz bestimmt. Als Nebenprodukt ergab sich die Isotopieverschiebung auf diesem U¨ bergang bezogen auf 40Ca+ zu ∆i4s3o,40/(2π) = 4 134 711 720(390) Hz.
Mit diesem Wissen gelang es einzelne 43Ca+-Ionen nahe an den Bewegungsgrundzustand einer Mode zu ku¨hlen, sowie 43Ca+-Hyperfein-Qubits mit hoher Gu¨te zu initialisieren und auszulesen. Die Koh¨arenzzeiten dieses Hyperfein-Qubits wurden mit einem Mikrowellenfeld und einem Raman-Lichtfeld gemessen. Trotz der Anwesenheit magnetischer St¨orfelder konnte Quanteninformation u¨ber eine Sekunde gespeichert werden. Außerdem ergaben Messungen, dass die interferometrischen Stabilit¨atsanforderungen der Raman-
-Lichtfelder, auf einer Zeitskala von 100 ms keine Limitierung darstellen.
Die Arbeit schließt mit der Beschreibung einer Mølmer-Sørensen Gatteroperation, die verschr¨ankte Zust¨ande mit einer Gu¨te von 99.3(1)% erzeugte. Dieser Gattertyp wurde erstmals auf einem optischen Qubit mittels eines amplitudenmodulierten Lasers realisiert, der an zwei 40Ca+-Ionen gleichermaßen koppelte. Eine robuste Gatteroperation, die separable in verschr¨ankte Zust¨ande u¨berfu¨hrt, wurde durch adiabatisches An- und Ausschalten dieses Lasers erreicht. Zur Bestimmung m¨oglicher Fehlerquellen -
wurden bis zu 21 aneinandergereihte Gatteroperationen analysiert. Bezu¨glich der erreichten Gu¨te stellt das Ergebnis die momentan beste deterministische Zwei-Qubit-Verschr¨ankungsoperation aller bekannter Systeme dar.

Contents

1 Introduction

1

2 Trapped calcium ions as qubits

7

2.1 Quantum bits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7

2.2 Atomic structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12

2.3 Single ion coherent operation . . . . . . . . . . . . . . . . . . . . . . . . . . 19

2.4 Quadrupole transition . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21

2.5 Raman interactions coupling hyperﬁne structure ground states . . . . . . . 23

2.6 Microwave transitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29

3 Experimental setup

31

3.1 Linear ion trap and radiofrequency drive . . . . . . . . . . . . . . . . . . . . 31

3.2 Laser system and optics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34

3.3 Vacuum vessel . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45

3.4 Magnetic ﬁeld coils and current drivers . . . . . . . . . . . . . . . . . . . . . 45

3.5 Optical access and individual ion addressing . . . . . . . . . . . . . . . . . . 46

3.6 Fluorescence detection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48

3.7 Experiment control and radiofrequency pulses . . . . . . . . . . . . . . . . . 50

4 Experimental techniques

53

4.1 Trap loading by photoionization . . . . . . . . . . . . . . . . . . . . . . . . . 53

4.2 Pulsed mode . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56

4.3 Compensation of excess micromotion . . . . . . . . . . . . . . . . . . . . . . 57

4.4 Referencing the laser at 729 nm to the ions and monitoring of the magnetic

ﬁeld . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60

4.5 Heating rate, shuttling the ions and motional coherence . . . . . . . . . . . 63

4.6 Individual ion detection, addressing and addressing error correction . . . . . 66

5 Precision spectroscopy

69

5.1 Measurement of the hyperﬁne constants of the 43Ca+ D5/2 energy level . . . 69 5.2 Measurement of the isotope shift . . . . . . . . . . . . . . . . . . . . . . . . 76

5.3 Magnetic ﬁeld independent transitions . . . . . . . . . . . . . . . . . . . . . 80

6 Quantum information processing with a single 43Ca+ ion

85

6.1 Initialization of the hyperﬁne clock state qubit . . . . . . . . . . . . . . . . 85

6.2 State discrimination . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91 6.3 Coherent state manipulation on the 43Ca+ hyperﬁne qubit . . . . . . . . . . 92 6.4 Coherence properties of the 43Ca+ hyperﬁne qubit . . . . . . . . . . . . . . 95

7 Entangled states with high ﬁdelity

101

7.1 Review of entanglement creation in ion traps . . . . . . . . . . . . . . . . . 101

7.2 The Mølmer-Sørensen interaction on the optical qubit . . . . . . . . . . . . 103

7.3 Measurement results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105

8 Summary and outlook

115

A Calcium physical and optical properties and hyperﬁne measurement data 119

B Method of separated oscillatory ﬁelds

123

B.1 Errors in frequency determination . . . . . . . . . . . . . . . . . . . . . . . 123

B.2 Ramsey contrast and phase coherence . . . . . . . . . . . . . . . . . . . . . 125

C Spin ﬂip errors during the Mølmer-Sørensen interaction

127

D Journal publications

129

Bibliography

151

Danksagung
Die vorliegende Arbeit ist das Ergebnis einer gemeinsamen Kraftanstrengung. Allen, die zu diesem Erfolg ihren Beitrag geleistet haben, m¨ochte ich an dieser Stelle ganz herzlich danken.
Zu allererst richte ich ein großes Dankesch¨on an Rainer Blatt fu¨r die Herausforderung ein neues Experiment in einem neuen Labor praktisch ohne ﬁnanzielle Grenzen aufzubauen. Das hohe Maß an Entscheidungsfreiheit war fu¨r mich ein entscheidender Spaßfaktor und ließ mich ich in einem Schlaraﬀenland fu¨r Experimentalphysiker w¨ahnen. Aber auch fu¨r die Gelegenheit fast alle “Big Shots” aus unserem Fachgebiet pers¨onlich kennenzulernen m¨ochte ich mich bedanken.
Ferdinand Schmidt-Kaler danke ich besonders dafu¨r, dass er mich auf dieses faszinierende Teilgebiet der Physik aufmerksam gemacht hat. Sein mitreißender Enthusiasmus und die Teilhabe an seinem schier unersch¨opﬂichen Erfahrungsschatz waren ein riesiger Gewinn fu¨r mich. Fu¨r die rasche Integration in das Experiment der “Linearen Falle” und die gemeinsam verbrachten Messn¨achte m¨ochte ich außerdem Hartmut H¨aﬀner, Christian Roos, Wolfgang H¨ansel und Mark Riebe danken.
Bei Umakant Rapol bedanke ich mich fu¨r die hervorragende Zusammenarbeit. Hervorzuheben ist seine große Unterstu¨tzung beim Aufbau des hier beschriebenen Experiments und unsere gemeinsamen Pioniertaten, wie z.B. das erstmalige Laden von 43Ca+Ionen in die neue Falle. Timo K¨orber und Philipp Schindler gebu¨hrt mein Dank fu¨r die Entwicklung und die Implementierung der Experimentsteuerung.
Die meiste Zeit fu¨r diese Arbeit habe ich gemeinsam mit Gerhard Kirchmair bei den Messungen im Labor verbracht. Vielen Dank fu¨r Deinen hohen Einsatz und Deine fantastische Arbeit. Die Zusammenarbeit mit Dir war vom ersten Tag an eine große Bereicherung fu¨r mich. Danke! Gerne m¨ochte ich Christian Roos fu¨r die vielen Diskussionen danken, die mein Physikverst¨andnis entscheidend voranbrachten. Er konnte mich letztlich doch davon u¨berzeugen, dass das Mølmer-Sørensen Gatter auf optischen Qubits “-
einen Versuch wert ist”. Seine Unterstu¨tzung bei der Vorbereitung und Auswertung der Messungen und beim Verfassen diese Arbeit war sehr wertvoll fu¨r mich. Ren´e Gerritsma und Florian Z¨ahringer gilt mein Dank fu¨r die Unterstu¨tzung bei den Messungen von Gatteroperationen auf warmen Ionen.

Ein großer Dank ergeht auch an die Mitarbeiterinnen und Mitarbeiter in den Sekretariaten, der IT-Unterstu¨tzung sowie in den Elektronik- und Mechanikwerkst¨atten an der Uni sowie am IQOQI. Namentlich erw¨ahnen m¨ochte ich Markus Knabl, Elisabeth Huck, Doris Corona, Patricia Moser, Anneliese Werner, Thomas Wachtler, Valentin Staubmann, Andreas Knabl, Gerhard Hendl, Manuel Kluibensch¨adl, Arthur Wander, Stefan Haslwanter, Andreas Strasser, Anton Sch¨onherr, Helmut Jordan und Josef Dummer. Immer stan-
d man mir mit Rat und Tat - und auch einer großen Portion Humor - zur Seite.
Eine wahrhaft dankenswerte Abwechslung von der Arbeit waren die unz¨ahligen gemeinsamen Mittagspausen mit Mike Chwalla. Selten war fu¨r wirklich gutes Essen gesorgt, dafu¨r aber immer fu¨r gute Unterhaltung. Zusammen mit den Kollegen Thomas Deuschle, Herbert Crepaz, Philipp Schindler, Thomas Monz, Daniel Rotter und Mark Riebe haben wir uns den “schwarzen Mensagu¨rtel” durch den Verzehr unz¨ahliger Berner Wu¨rstel redlich verdient. Nicht zu vergessen ist natu¨rlich der Dank an alle Arbeitsgruppenmi-
tglieder fu¨r die oﬀene Diskussionskultur und ihre Geduld, wenn ich’s beim Montag-Morgen-Treﬀ mal wieder etwas genauer wissen wollte.
Ganz herzlich danken m¨ochte ich auch Gabriele Wicker fu¨r ihre Gastfreundschaft sowie die Beratung beim Textsatz dieser Arbeit.
Ein großes Dankesch¨on geht auch an Renate Janssen und meine Eltern fu¨r die kontinuierliche Unterstu¨tzung und die Anteilnahme an meinem Studium und der Promotion - aber vor allem auch fu¨r den sensiblen Umgang mit der Frage, wann ich denn endlich fertig sei.
Jetzt! Das gr¨oßte Glu¨ck fu¨r mich bist Du, liebe Margit. Danke, dass Du mit mir den Weg nach Innsbruck und auf manch hohen Berg und durch manch tiefes Tal bis hierher gegangen bist. Dein großes Herz und Deine Liebe bedeuten eine ganze Welt fu¨r mich!
Vielen Dank!

1 Introduction
Two of the greatest advances in physics and technology of the twentieth century have been the discovery of quantum mechanics and the technological revolution based on classical computing. Quantum computation aims to marry both of these ﬁelds, an idea ﬁrst conceived by Paul Benioﬀ [1, 2] and Richard Feynman [3, 4] in the early 1980s.
Computations harnessing the laws of quantum physics were mainly considered as a curiosity rather than a high priority of experimental physics. This changed in 1994 when Peter Shor discovered an algorithm capable of factoring large numbers much faster than any method known for classical computers [5]. An experimental realization of Shor’s factoring algorithm for large composite numbers would render public key encryption systems obsolete, and is therefore of importance to the intelligence agencies. -
Ironically, quantum mechanics does not only provide an option for eavesdropping but gives a solution for secure communication using quantum key distribution schemes [6, 7]. In contrast to the classical encryption techniques, quantum cryptography is not based on unproven assumptions but has shown to be unconditionally secure.
Another example where a universal quantum computer is more powerful than a classical computer is the search algorithm for unsorted databases found by Lov K. Grover [8] in 1996. However, the application that most physicists currently think will be ﬁrst to surpass a classical computation is the simulation of one quantum system by another. In contrast to other possible applications, here the break-even point concerning the number of qubits needed and the complexity of operations is expected to be muc-
h relaxed; in particular if one concentrates on a certain quantum system omitting the high demands needed to achieve universality. For instance, the simulation of certain quantum systems consisting of 50 qubits is intractable with current computing technology. A quantum computer would need only 50 qubits to perform this task.
One of the most relevant ﬁndings for realizing a large scale universal quantum computer, was the discovery of quantum error correction protocols by Peter Shor [9] and Andrew Steane [10]. These protocols allow the implementation of arbitrary long quantum algorithms with ﬁnite errors in the presence of perturbations. Even better, Shor found that analogous to classical information processing there are methods to perform quantum calculations with arbitrarily small errors even if the operations used ex-
hibit small unknown

2

1. Introduction

imperfections [11]. This technique called fault-tolerant quantum computing requires a signiﬁcant amount of computational overhead though. To achieve fault-tolerance it is currently expected that the error rates should be smaller than 10−2 to 10−4 [12, 13, 14] per individual operation.
The harsh requirements for a physical system to realize a universal quantum computer can be summarized as ﬁve points, often referred to as the DiVincenzo criteria [15]:
1. A scalable physical system with well characterized qubits 2. The ability to initialize the state of the qubits to a simple ﬁducial state, such as
|0000... 3. Long relevant decoherence times, much longer than the gate operation time 4. A “universal” set of quantum gates 5. Qubit-speciﬁc measurement capability
In order to create quantum networks and establish quantum communication with quantum computers, two additional demands need to be fulﬁlled:
6. Ability to interconvert stationary and ﬂying qubits 7. Ability to faithfully transmit ﬂying qubits between speciﬁed locations
Besides trapped ions, there have been a number of physical systems under investigation to meet these requirements, including: nuclear spins [16, 17], quantum dots [18, 19], superconducting Josephson junctions [20], photons [21], and neutral trapped atoms [22, 23, 24].
Quantum computing with nuclear spins is most advanced in a sense that the most complex algorithms involving the highest number of qubits were implemented with this technology [25]. However, it is clear that this technology cannot be scaled to several ten or hundreds of qubits without a technology to produce pure states. The implementations based on solidstate devices come with the appealing promise that once we are able to manufacture and control the basic building blocks, scaling up to many qubit-
s seems to be straightforward akin to integrated circuits in classical computing. Great progress has been made in this ﬁeld over the last decade. Most recently, Bell-states and a controlled-NOT gate were realized with pairs of Josephson junction qubits [26, 27]. But the biggest challenge in the solid-state systems remains to improve the coherence time which is at best on the order of a few microseconds today [28].
The idea to “imprison” charged particles with static electric ﬁelds goes back to K. H. Kingdon in 1923 [29]. Frans M. Penning pioneered a trap design based on static electric and magnetic ﬁelds in 1936 [30]. In the 1950s radiofrequency ion traps were invented by Wolfgang Paul [31, 32] and in 1980 a single atomic ion was trapped and observed by Neuhauser et al. [33] for the ﬁrst time. Trapping of single ions had a huge impact on the development

3
of atomic physics including laser cooling [34], atomic clocks [35], and mass spectrometry [36]. Today there are about 25 research groups working with single ions in radiofrequency traps.
Long before the application of ion traps for QIP was proposed, three out of the ﬁve DiVincenzo criteria had already been demonstrated with trapped ions in the laboratory: initialization [37], readout [38, 39, 40] and long coherence times [41]. Moreover, laser cooled Coulomb crystals with many ions that could serve as a quantum register had been observed [42, 43, 44, 45] and could be interpreted as the ﬁrst step towards scaling the system with well characterized qubits.
The possibility of implementing QIP with trapped ions was ﬁrst described in the seminal paper by Ignacio Cirac and Peter Zoller in 1995 [46]. They proposed coupling individual ions of an ion string by their collective motional degree of freedom with a series of laser pulses acting on each of the ions at the time. They also showed that scalability of this approach is possible because the required resources scale as a polynomial rather than an exponential with the number of qubits. In the same year -
the basic interaction of this two-qubit gate was demonstrated [47], setting the starting point of experimental quantum computing. Since then the ﬁeld has been exploding and a host of theoretical proposals and experimental demonstrations has pushed to make trapped ions one of the most promising technical architectures for QIP [48].
Some of the most important experimental milestones in this ﬁeld are the investigation of various universal gate operations [49, 50, 51, 52, 53, 54, 55], the ﬁrst realization of quantum teleportation with massive particles [56, 57], a quantum error correction protocol [58], the creation of multi-particle entangled states of up to eight ions [59, 60, 61], entanglement puriﬁcation [62] and the implementation of algorithms such as the Deutsch-Josza algorithm [63] and Grover’s search algorithm [64]. Mo-
reover, ions trapped in separate traps [65, 66] have been entangled using ion-photon interaction, a so-called decoherence free subspace [67] was realized. Finally, a nonlinear beam-splitter [68] has been simulated and partial readout of an entangled quantum register was demonstrated [69] as well as a quantum gate and a quantum process tomography [70, 71].
This list attests to the rapid progress that has been achieved to date; but the best prospect for technological applications in the near future is a small-scale quantum computer, designed to carry out a speciﬁc task. In contrast to quantum communication and quantum cryptography, where the applications are clear and ﬁrst products are commercially available, the situation with quantum computing is quite diﬀerent. Most importantly, even after many years of intense study and research the “killer appli-
cation” for quantum information is not yet known, making it a ﬁeld of fundamental research rather than a commercial application.

4

1. Introduction

Today the two most challenging road blocks towards a “quantum computer-science testbed regime” are: ﬁrst, to realize an experimental setup that can handle tens or even hundreds of ions; and second, to improve all basic building blocks and operations to enter the regime of fault-tolerant QIP. The ﬁrst task is pursued in a joint eﬀort by all ion trapping groups, where miniaturization and integration of segmented ion traps is rapidly progressing. It is strongly supported by U.S. funding bodies coordi-
nating diﬀerent approaches and establishing contacts to microfabrication facilities, such as Lucent Technologies and Sandia National Laboratories.
The second task comes with two major challenges. State initialization, readout and singlequbit gates have been demonstrated with suﬃciently high speed and errors of 10−2 or less, also coherence times of many seconds have been shown on various systems. Now, these building blocks have to be integrated into a single machine, run at the same time and under the same conditions. The most diﬃcult operation in ion trap quantum computing remains the implementation of an entangling operation. Many schemes h-
ave been studied but only two of them were able to produce the desired state with an error rate of less than 10−1. A major result of this thesis is the demonstration of a scheme that allows one to produce Bell states with an error of only 7 × 10−3.
Quite remarkably, the ion trap community is still undecided on the question of which ion species to choose for QIP. It seems even possible that diﬀerent ion species could serve different purposes. It is clear that the best storage of quantum information can be achieved with atoms exhibiting a hyperﬁne structure containing energy levels whose frequency splitting does not depend on small changes of the external magnetic ﬁeld. Therefore, the best candidates today are 9Be+, 25Mg+, 43Ca+, 87Sr+, 111Cd+-
, 137Ba+, 171Yb+ and 199Hg+.
The ion 43Ca+ seemed to us particularly attractive for a number of reasons. The Innsbruck ion trapping group has great experience working with 40Ca+ for many years. So, the laser technology required to deal with 43Ca+ is well known. The wavelengths of calcium ions are such that all lasers and optical elements are commercially available. The hyperﬁne structure splitting of 3.2 GHz is still within the range that can be bridged by acousto-optical modulators and the ground-state Zeeman levels oﬀer the-
 ability of long quantum information storage times. The presence of lower lying D-states enables high ﬁdelity initialization, readout and the option to also use the metastable states for quantum information processing as with 40Ca+ ions.
In this thesis a new experiment is described capable of trapping 40Ca+ and 43Ca+ ions, in order to explore the possibilities to improve on quantum information storage times and gate ﬁdelities with calcium ions. The main ﬁndings are also published in the references [72, 73, 74].

5
This thesis is structured as follows: chapter 2 reviews the main ideas of quantum information and introduces the notation. It describes the atomic structure of the 43Ca+ and 40Ca+ ions and the relevant interaction of these ions with the applied electromagnetic ﬁelds. Chapter 3 describes the new setup that has been built consisting of a vacuum chamber housing the ion trap, nine solid-state laser systems and two PCs with software for control of the experiment. Chapter 4 explains a few basic experime-
nts necessary to characterize the apparatus and the experimental steps required to perform QIP experiments with trapped ions. The chapters 5-7 present the main experimental results of this thesis. In chapter 5 high precision spectroscopy measurements on the 4s 2S1/2 ↔ 3d 2D5/2 quadrupole transition are described that were carried out at a wavelength of 729 nm by laser spectroscopy using a single trapped 43Ca+ ion. As a result we obtained the hyperﬁne structure constants of the D5/2-states and the -
isotope shift of the 4s 2S1/2 ↔ 3d 2D5/2 transition with respect to 40Ca+ ions. Chapter 6 describes ground state cooling, robust state initialization and eﬃcient readout of the 43Ca+ hyperﬁne clock states as qubits. A microwave ﬁeld and a Raman light ﬁeld are used to drive qubit transitions, and the coherence times for both ﬁelds are compared. Coherence times of more then 1 s have been observed. Chapter 7 details the ﬁrst implementation of a Mølmer-Sørensen entangling gate on optical qubits. The q-
uantum information is encoded in a S1/2 and a metastable D5/2-state of 40Ca+. Bell states were created and analyzed with an error as small as 7 × 10−3. Moreover, we demonstrate the ﬁrst creation of highly entangled ions in thermal motion with this method. Finally, chapter 8 gives a short summary and outlook to the next possible steps and opportunities.

2 Trapped calcium ions as qubits

This chapter quickly reviews the most basic ideas of quantum computing and introduces some mathematical notation. Further, the calcium energy level structure is described including shifts of the energy levels caused by external magnetic ﬁelds. Then a number of options for encoding quantum information in calcium ions are discussed. In case of trapped ions, quantum information is encoded, processed and read out by applying electromagnetic ﬁelds to the quantum system. Two energy splittings are of imp-
ortance: the optical domain with a wavelength of 729 nm and the microwave domain with a frequency of 3.2 GHz. For both cases the possible electromagnetic ﬁeld interactions with the ions are detailed.

2.1 Quantum bits
In this section a brief summary of quantum computing and its mathematical description is given. It is strongly inspired by reference [75] which gives an excellent introduction to the ﬁeld and points the reader to numerous references for further reading.

Single qubits

Quantum computing requires quantum information to be stored and manipulated in real physical systems. To get an idea how this can be achieved, let us have a quick look on the classical case: In classical computing information is often stored in the magnetization (up or down) of a certain material. Processing is done with highly integrated electrical circuit elements like transistors that can be either conducting or non-conducting depending on the state of other circuit elements. Typically, each el-
ement is in either of only two states, logically expressed as 0 and 1. Similar, to store quantum information, one needs at least two quantum states, here labeled |0 and |1 . The main diﬀerence from the classical case is that the system can take on not only either of the states but also all linear combinations

|ψ = α|0 + β|1 ,

(2.1)

where α and β are complex numbers. In analogy to the classical case, such two-level quantum systems capable of storing quantum information are termed quantum bits or

8

2. Trapped calcium ions as qubits

|0ñ z

q |yñ

f

x

y

|1ñ
Figure 2.1: Bloch sphere representation of a qubit state.

qubits. However, we cannot directly measure α and β with a single shot. Instead, each

measurement ﬁnds |0 with a probability |α|2 or the state |1 with a probability |β|2. As

the probabilities have to sum up to 1 (|α|2 + |β|2 = 1), it is convenient to rewrite Eq. (2.1)

as

|ψ = eiγ

θ cos |0

+ eiφ sin θ |1

,

(2.2)

2

2

where θ, φ and γ are real numbers and the latter can be set to zero, since it has no observable eﬀect. Equation 2.2 allows us to visualize the qubit state |ψ by interpreting θ and φ as polar coordinates of the so called Bloch vector. The available space for this unit vector is the surface of a sphere usually referred to as Bloch sphere. An example is depicted in Fig. 2.1. Unfortunately, this intuition is limited because there is no simple generalization of the Bloch sphere known for multiple qubit-
s.

Multiple qubits

For N qubits, one possible set of basis states is given by the 2N product states of the individual qubit states |0 and |1 . Basis states are labeled

|n = |iN ⊗ .. ⊗ |i2 ⊗ |i1 ,

where ik ∈ {0, 1} and n =

N k=1

ik

2k−1.

The

vectors

|n

form the computational basis in

which every N qubit quantum state can be represented as

2N −1
|ψ = αk|k
k=0

with state amplitudes αk, satisfying the normalization condition

2N −1 k=0

|αk |2 .

Already

for

a few hundred qubits we end up with such a huge number of state amplitudes αk, that no

classical computer will be able to store, let alone process, them.

2.1 Quantum bits

9

To give an example, any arbitrary two-qubit state can be described by

|ψ = α0|00 + α1|01 + α2|10 + α3|11 ,

where the coeﬃcients αk again fulﬁll the condition

3 k=0

|αk

|2

.

Measurements
An important prerequisite for quantum computation is the ability to make measurements on the system. For trapped ions we conveniently make use of an auxiliary state that is strongly coupled by a dipole transition to one of the qubit levels. By scattering light on this transition the ions’ internal state is projected (i.e. von Neumann measurements) into a particular internal energy state where it either scatters light or not1. As a consequence, to obtain an observable M every measurement process ca-
uses an irreversible collapse of the quantum system onto one of the eigenstates of the measurement operator Mˆ with eigenvalues m. With the corresponding projector Pm this reads
Mˆ = m Pm.
m
The probability to obtain a certain output m is given by
p(m) = ψ|Pm |ψ ,
where after the projection the system is left in the well deﬁned state
|ψˇ = Pm|ψ . p(m)
Typically, a natural measurement basis is given by the structure of the physical system in which the qubits are encoded. For trapped ions this is strongly related to the energy level structure of the ions used. A change of the measurement basis can be achieved though by changing the reference frame with appropriate single and two-qubit rotations prior to the actual projection. One example where this was realized is the measurement with respect to a basis of entangled states in the quantum teleport-
ation experiment described in reference [56].

1This can be also understood as a quantum non-demolition measurement since a large number of photons can be scattered without further perturbing the measurement result.

10

2. Trapped calcium ions as qubits

Entanglement
An important example for a two-qubit state is the Bell state2 or EPR pair 3,
|Ψ = |00 √+ |11 . 2
Measuring the ﬁrst qubit state results in two possible outcomes: in ﬁfty percent of the cases we measure 0 leaving the post measurement state in |00 in the other half of the cases we obtain 1 leaving |11 . So, a measurement of the second qubit gives always the same result as the measurement of the ﬁrst. We say the measurement outcomes are correlated. Furthermore, it is not possible to decompose |Ψ into a product of any two states |a and |b . To generalize this property:
Any multi-qubit state that cannot be written as a product of states of its component systems is called an entangled state, all others are termed separable or product states.
Many experiments have shown that it is not possible to explain entanglement by a classical model and is a purely quantum mechanical phenomenon. The peculiar behavior resulting from the existence of entanglement is nicely described by N. D. Mermin in reference [77], which is addressed to the general reader. Today, entanglement is considered as a physical resource, like energy, that can be measured, transformed and puriﬁed. The entanglement of two remote quantum systems can be utilized as a quantum -
channel in order to exchange quantum information between two sites that are connected only by a classical channel. This is the basic idea of quantum teleportation and other computational and cryptographic tasks. An open question in this context still is how strongly the few quantum algorithms known today that are in principle able to outperform classical computing (i.e. Shor’s factorization algorithm [5] and Grover’s database search algorithm [8]) rely on quantum entanglement.

Quantum gates
The quantum circuit model is a bottom up approach to describe changes of a multiqubit system. In analogy to classical computers, quantum circuits consist of wires (where quantum and classical information is carried around in the system), a set of elementary quantum gates to manipulate the quantum information and measurements with classical information as outcomes that can be further processed and fed back. A sketch of a simple quantum circuit is given in Fig. 8.1 (b).
2named after John Stewart Bell 3named after Einstein, Podolsky and Rosen [76]

2.1 Quantum bits

11

In theory, the simplest operation is the identity, where the state of the system is left unchanged; this implies that the quantum system neither interacts with the environment, nor that unwanted interactions within the system occur. This sets already high demands for physical realizations where the suppression of decoherence is a major task. A prominent example for unwanted interactions within the system is NMR quantum computing where considerable eﬀorts (still polynomial though) are spent on the -
cancelation of permanent interactions between the nuclear spins and so achieve the identity operation.

Interactions with the quantum system that aﬀect only one of the qubits are called singlequbit operations. They have to act linearly and preserve the normalization condition. As a consequence, in the Bloch-sphere representation any single-qubit operation corresponds to a rotation by certain angle around a real unit vector. Mathematically this is conveniently described in terms of unitary matrices as for example the Pauli spin matrices

Iˆ =

10 01

, σx =

01 10

, σy =

0 −i i0

and σz =

10 0 −1

.

(2.3)

Euler’s rotation theorem implies that any arbitrary single-qubit operation can be achieved by a concatenation of at most three rotations around two linear independent axis. The general rotations around x- and the y-axis represented in matrix notation as

Rx(γ)

=

e−i

γ 2

σx

=

cos

γ 2

−i

sin

γ 2

−i

sin

γ 2

cos

γ 2

,

Ry (β )

=

e−i

β 2

σy

=

cos

β 2

−

sin

β 2

sin

β 2

cos

β 2

,

(2.4) (2.5)

shall serve as an example. If we have an arbitrary single-qubit operation available for

each individual qubit, we require only one type of multi-qubit gate in order to construct

all arbitrary operations, in particular all other multi-qubit gates. Multi-qubit gates with

this property are termed universal gates. A prominent example for a universal two-qubit

gate is the controlled-NOT or CNOT gate. One of the two input qubits is known as the

control qubit and is left unchanged by the operation. The other qubit is called target qubit

and is ﬂipped depending on the state of the control qubit. The matrix representation of

a CNOT gate is





1000

UCNOT



=

 



0 0

1 0

0 0

0



 

,

1





0010

(2.6)

where the matrix is notated with respect to the basis order {|00 , |01 , |10 , |11 }. As for single-qubit gates, multi-qubit gates have to preserve a total measurement probability

12

2. Trapped calcium ions as qubits

of one, formally expressed by the fact that they are described by unitary matrices with Ug†ateUgate = Iˆ.

There are many other types of universal quantum gates available. An example is the Mølmer-Sørensen-gate [78, 79], which was experimentally implemented in the framework of this thesis to create entangled states. Its matrix representation is





10 0i

UMS

=

1−i 2

   

0 0

1 −i

−i 1

0

 

 0





i0 01

(2.7)

and introduces population changes of both qubit states simultaneously. The details of the experimental implementation and the underlying theory are given in chapter 7.
With a certain universal set of quantum gates and projective measurements available, all other complex computations are constructed by concatenation of these basic building blocks.

2.2 Atomic structure
Two diﬀerent calcium isotopes were used for quantum information processing in this thesis: 40Ca+ and 43Ca+. This section describes the level structure of both isotopes and their energy level shifts in external magnetic ﬁelds. Various ways to encode quantum information are discussed. Since 43Ca+ is very similar to neutral cesium atoms, large parts of this section are directly taken from reference [80] and adapted to calcium.
Gross structure and wavelengths
Single charged alkali earth ions like Ca+ have a single valence electron and therefore an energy level structure similar to neutral alkali atoms, in particular the hydrogen atom. The energy level scheme showing the three lowest orbitals available to the valence electron of a single 40Ca+ ion is given by Fig. 2.2.
Calcium ions have a gross structure with a ground-state S-orbital. The lowest excited state is the D-orbital, which is metastable with a radiative live time of 1.17 s [81] corresponding to a line width of 0.14 Hz. The S1/2 ↔ D5/2 transition is accessible via an electric quadrupole radiation at 729 nm.
The second lowest excited state is a P -orbital with a radiative lifetime of 7 ns [82]. P1/2 is accessible from the ground-state by electric dipole radiation at 397 nm. This transition

2.2 Atomic structure

13

4 P2 3/2

t = 6.9 ns

gJ = 4/3

6.7 THz

t = 7.1 ns

4 P2

gJ = 2/3

1/2

393.366 nm 92%

854.209 nm 6.8%
849.802 nm 0.76% t = 1.17 s

396.847 nm 92%

866.214 nm 7.5%

gJ = 6/5 t = 1.20 s

gJ = 4/5 729.147 nm

3 D 2 5/2
3/2
1.8 THz
3 D 2 3/2

gJ = 2 mJ=-1/2 1/2

4 S2 1/2

Figure 2.2: Detailed energy level scheme showing all Zeeman sublevels of the three lowest orbitals of a 40Ca+ ion. Laser light at 397 nm is used for Doppler-cooling, optical pumping and detection, the lasers at 866 nm and 854 nm pump out the D-states. An ultra-stable laser at 729 nm is used for spectroscopy on the quadrupole transition, state preparation, optical shelving and ground-state cooling. For the experiments described in chapter 7 the states S1/2(mJ =1/2) and D5/2(mJ =3/2) are chosen to f-
orm an optical qubit. The wavelengths in air, natural lifetimes τ and the branching ratios given are taken from references [82, 83, 81], the Land´e factors gJ result from Eq. (2.9).

has a line width of 21 MHz. The P -levels exhibit a branching ratio such that one out of 13 decays populates the D-levels. Therefore, the dipole transitions connecting the P and the D-levels at wavelengths of 866 nm and 854 nm are of importance to clear out the D-states.

Fine and hyperﬁne structure splitting
Due to coupling between the orbital angular momentum L of the outer electron and its spin angular momentum S calcium ions exhibit a ﬁne structure splitting with a total angular momentum J = L + S. The corresponding quantum number J lies in the range |L − S| ≤ J ≤ L + S where the magnitude of J is J(J + 1) and the eigenvalue of Jz is mJ .
For the calcium ground-state (42S1/2), L = 0 and S = 1/2, so J = 1/2 and for the lowest excited state (32D3/2 and 32D5/2) L = 2 and S = 1/2, so J = 3/2 or J = 5/2; similar for the second lowest excited state (42P1/2 and 42P3/2) we have L = 1 and S = 1/2, so J = 1/2 or J = 3/2. The meaning of the spectroscopic notation is as follows: the

14

2. Trapped calcium ions as qubits

F dhfs (MHz)
2 205.6(1.6) 3 117.5(0.8) 4 -4.5(0.8) 5 -164.5(1.1)

gF
-2/3 0
4/15 2/5

P3/2

3 327.2(2) -1/12 4 -254.5(2) 1/12
3 1814.4046611(18) -1/4 4 -1411.2036253(14) 1/4

P1/2

854 nm

D5/2
866 nm

397 nm

D3/2
729 nm

F dhfs (MHz)
1 41.5267(6) 2 34.9516(4) 3 24.6348(2) 4 10.0312(3) 5 -9.5858(3) 6 -35.1246(4)

gF
-3/2 -1/10
1/4 0.39 0.46
1/2

2 317.3(1.7) -2/5

3 178.0(0.8)

0

4 -10.1(0.9) 0.16

5 -249.3(1.2) 0.24

S1/2

Figure 2.3: 43Ca+ level scheme showing the hyperﬁne splitting of the lowest energy levels. Hyperﬁne shifts δhfs of the levels are quoted in MHz (the splittings are taken from [84, 85] and section 5.1). Laser light at 397 nm is used for Doppler-cooling, optical pumping and detection, the lasers at 866 nm and 854 nm pump out the D-states. An ultra-stable laser at 729 nm is used for spectroscopy on the quadrupole transition, state preparation, optical shelving and ground-state cooling. The Land´e fac-
tors gF follow from Eq. (2.10).

ﬁrst number gives the principal quantum number of the outer electron, the superscript is 2S + 1, the letter refers to L (i.e., S ↔ L = 0, P ↔ L = 1, D ↔ L = 2, etc.) and the last subscript gives the value of J.
In case of 40Ca+, the total nuclear angular momentum I is zero such that each ﬁne structure level splits into 2J + 1 Zeeman substates labeled by the magnetic quantum number −J ≤ mJ ≤ J (see Fig. 2.2). When no external ﬁelds are present, these Zeeman states are degenerate (i.e. they have the same energy).
The isotope 43Ca+ is the only stable calcium isotope with non-zero nuclear spin (see Tab. A.2). It has a total nuclear angular momentum I = 7/2 . The coupling between total electronic angular momentum J and I, to give a total atomic angular momentum F =J +I, results in a hyperﬁne structure. The corresponding quantum number F can take on the values |J − I| ≤ F ≤ J + I. For the ground-state of 43Ca+ (J = 1/2 and I = 7/2) this gives rise to two hyperﬁne states with F = 3 and F = 4. The relevant energ-
y levels are shown in Fig. 2.3.
Compared to the energy shift due to the ﬁne structure splitting which is as large as 6.7 THz

2.2 Atomic structure

15

for the P -states and 1.8 THz for the D-states, the hyperﬁne energy splittings are much smaller and it is useful to have a formalism describing these shifts.

The Hamiltonian describing the relevant spin-spin interactions is

Hhfs

=

AhfsI

·

J

+

Bhfs

3(I

·

J)2

+

3 2

(I

2I (2I

· J) − I(I − 1)J(2J

+ −

1)J (J 1)

+

1) ,

leading to a hyperﬁne energy shift of

∆Ehfs

=

1 2 AhfsK

+

Bhfs

3 2

K

(K

+

1)

−

2I (I

+

1)2J (J

2I(2I − 1)J(2J − 1)

+

1) ,

where

K = F (F + 1) − I(I + 1) − J(J + 1),

Ahfs is the magnetic dipole constant, and Bhfs is the electric quadrupole constant (the latter term does not apply to levels with J = 1/2). The hyperﬁne splitting of the S1/2 ground-state was measured to a high precision by Arbes et al. [84] with a laser microwave double resonance experiment in which 43Ca+ ions were stored in a Paul trap. They found the value for the hyperﬁne splitting of the ground states to be

ωS1/2/(2π) = 3 225 608 286.4(3) Hz
corresponding to magnetic dipole constant AS1/2 = −806.402 071 60(8) MHz. The values for the other energy levels are given in Tab. A.5 and Fig. 2.3.

Interaction with static magnetic ﬁelds

Each of the hyperﬁne energy levels (F ) contains 2F + 1 magnetic sublevels that determine the angular distribution of the electronic wavefunction and are labeled mF . In the absence of external magnetic ﬁelds, these sublevels are degenerate. The Hamiltonian describing the lifting of this degeneracy due to the interaction with an external magnetic ﬁeld B= Bez (assumed to be in z-direction) is given by
HB = µB (gSS + gLL + gI I) · B = µB (gSSz + gLLz + gI Iz) Bz,

where gS, gL and gI are the electron spin, electron orbital and the nuclear g-factors that

account for various modiﬁcations to the corresponding magnetic dipole moments. The

value for gS has been measured very precisely by Tommaseo et al. [86] to be gS =

2.002 256 64(9).

The

value

of

gL

can

be

approximated

as

gL

=

1−

me mnuc

1, which is

correct to lowest order in me/mnuc, where me is the electron mass and mnuc the mass of

16

2. Trapped calcium ions as qubits

the atomic nucleus. The nuclear factor gI accounts for the entire complex structure of the nucleus, and has been measured to be 2.050 32(1) × 10−4 [87]. If the energy shift due to the magnetic ﬁeld is small compared to the ﬁne structure splitting, then J is a good quantum number and the interaction Hamiltonian can be written as

HB = µB (gJ Jz + gI Iz) Bz.

(2.8)

Here, the Land´e factor gJ is given by

J(J + 1) − S(S + 1) + L(L + 1) J(J + 1) + S(S + 1) − L(L + 1)

gJ = gL

2J(J + 1)

+ gS

2J(J + 1)

J(J + 1) + S(S + 1) − L(L + 1)

1+

,

2J(J + 1)

(2.9)

where the second term is an approximation assuming gS 2 and gL 1. This expression does not include corrections due to the complicated multielectron structure of Ca+ and
QED eﬀects.

If the energy shift due to magnetic ﬁeld is small compared to the hyperﬁne splittings, then similarly F is a good quantum number and the interaction Hamiltonian becomes

HB = µBgF FzBz,

where the hyperﬁne Land´e g-factor gF is given by

F (F + 1) − I(I + 1) + J(J + 1) F (F + 1) + I(I + 1) − J(J + 1)

gF = gJ

2F (F + 1)

+ gI

2F (F + 1)

F (F + 1) − I(I + 1) + J(J + 1)

gJ

2F (F + 1)

.

(2.10)

The approximate expression neglects the nuclear term which leads to errors at the level of 0.1%, because gI is much smaller than gJ .

For weak magnetic ﬁelds, the interaction Hamiltonian HB perturbs the zero-ﬁeld eigenstates of Hhfs. To lowest order, the energy of the levels shifts linearly according to

E|F,mF = µBgF mF Bz.

(2.11)

The splitting in this regime is called the anomalous Zeeman eﬀect. For stronger magnetic ﬁelds the interaction term dominates the hyperﬁne energy and Eq. (2.8) gives the

2.2 Atomic structure

17

appropriate description. The resulting energies are then given to lowest order by

E|J,mJ ,I,mI = AhfsmJ mI +

+

Bhfs

3(mJ mI )2

+

3 2

mJ

mI

−

I (I

+

1)J (J

2J(2J − 1)I(2I − 1)

+

1) +

+ µB(gJ mJ + gI mI )Bz.

The energy splitting in this regime is called the Paschen-Back eﬀect.

For most cases there exists no handy approximation for intermediate ﬁelds, so one must

numerically diagonalize

Htot = Hhfs + HB.

(2.12)

One exception are the stretched states, deﬁned by mF = ±(I + J) which are eigenstates of the Hamiltonian (2.12). Their energy changes linearly with the magnetic ﬁeld as

I

1

E|J=1/2,mJ ,I,mI = ∆Ehfs 2I + 1 ± 2 (gJ + 2gI I)µBB.

(2.13)

Another notable exception is the Breit-Rabi formula [88], which applies to the S1/2 groundstate manifold:

E|J=1/2,mJ ,I,mI

=

− ∆Ehfs 2(2I + 1)

+

gI µB(mI

±

1 )B
2

±

∆Ehfs 2

1

+

4(mI

±

1 2

)x

+

x2

1/2

2I + 1

(2.14)

with the hyperﬁne splitting ∆Ehfs = Ahfs(I + 1/2) and x = (gJ − gI )µBB/∆Ehfs. Equa-

tion 2.13 can help to avoid sign ambiguity in evaluating Eq. (2.14). Figure 2.4 shows

the resulting energy dependence of the 43Ca+ 4S1/2 ground level hyperﬁne structure for magnetic ﬁelds up to 200 G.

When it comes to choosing two of the energy levels as a qubit, the sensitivity to external magnetic ﬁeld ﬂuctuations is of major importance. In previous experiments with 40Ca+ ions the quantum information was stored in one of the ground-state levels S1/2(mJ = ±1/2) and one of the metastable D5/2(mJ = ±1/2, ±3/2, ±5/2) states. Since the energy diﬀerence between the qubit states lies in the optical domain, this type of encoding is also termed optical qubit. Similar to Eq. (2.11) we obtain a diﬀerent-
ial splitting of the qubit states
∆ES↔D = µB (mS gS1/2 − mDgD5/2 )Bz.
with a Land´e g-factor gD5/2 1.2. In the best case the lowest sensitivity one could get with respect to changes of the magnetic ﬁeld is 560 kHz/G. A fundamental limitation of this optical qubit is of course the ﬁnite lifetime of the metastable state. If we choose two ground-state Zeeman levels instead, the spontaneous decay problems are avoided at the price that sensitivity to external magnetic ﬁeld ﬂuctuations worsens to 2.8 MHz/G.

18 (a)

mF=-3 mF= 3 mF= 4 mF=-4

Frequency shift (kHz)
Frequency splitting (MHz)

2. Trapped calcium ions as qubits

3220
3215
3210
3205 (c)
3200 0 50 100 150 200 250 Magnetic field (Gauss)

(b)

Figure 2.4: (a) 43Ca+ 4S1/2 ground level hyperﬁne structure in a low external magnetic ﬁeld (anomalous Zeeman regime). (b) The two microwave clock states S1/2(F = 4, mF = 0) and S1/2(F = 3, mF = 0) exhibit only a second order Zeeman shift. The sensitivity to external magnetic ﬁeld ﬂuctuations is given by the parabola’s slope of 2.4 kHz/G2 × B. For a magnetic
ﬁeld of 150 G the transition between the states S1/2(F = 4, mF = 1) and S1/2(F = 3, mF = 0) gets also ﬁeld independent to the ﬁrst order. The inset (c) shows the energy splitting for this
transition as a function of the magnetic ﬁeld. The slope of the parabola is the same as for the
clock states.

For stability under magnetic ﬁeld ﬂuctuations, 43Ca+ oﬀers an important advantage. From the Breit-Rabi formula (2.14) we directly obtain that the two mF = 0 sublevels of the two hyperﬁne ground states exhibit no ﬁrst-order Zeeman shift. This property is also useful when building a clock, hence they are often called clock states. The diﬀerential shift of these two states is given by

∆ω0↔0

=

(gJ − gI )2µ2B B2 2 ∆Ehfs

2π × 1.2 kHz/G2 × B2

in a second order approximation of the magnetic ﬁeld strength. The linear dependence vanishes completely only for zero ﬁelds and increases then linearly with 2.4 kHz/G. Due to the degeneracy of the magnetic sub-levels at zero ﬁeld they cannot be resolved spectrally. Still, for a magnetic ﬁeld of 1 G the sensitivity is suppressed by more than a factor 230 compared to the optical qubit in 40Ca+.

It is also possible to ﬁnd ﬁeld-independent transitions in the ground-state manifold for a non-zero ﬁeld. The one occurring for the lowest magnetic ﬁeld is at 150 G between the states S1/2(F = 4, mF = 1) and S1/2(F = 3, mF = 0). The second order approximation for the frequency change around this point is the same as for the clock states. For both cases the change in transition frequency is plotted over the magnetic ﬁeld in Fig. 2.4 (b).

2.3 Single ion coherent operation

19

2.3 Single ion coherent operation

The standard circuit model of quantum computing requires a set of universal quantum logic gates for the implementation of arbitrary quantum operations. An example is a twoqubit entangling operation in combination with arbitrary single-qubit gates. This section details atom-ﬁeld interactions in order to perform single-qubit operations on optical and hyperﬁne encoded qubits in 43Ca+ ions by means of microwave and laser radiation. A two-qubit entangling operation is discussed in chapter 7.

2.3.1 Single-qubit rotation

Any two-level quantum system can be considered as a qubit. For the mathematical treatment it is convenient to exploit the analogy to a particle with a spin of 1/2. We assign the label |↓ (|↑ ) to the lower (upper) energy level describing a pseudo-spin. For trapped ion based quantum bits the frequency diﬀerence between the two qubit levels can range from a couple of kHz (i.e. for two neighboring Zeeman levels) to the optical frequency domain which is hundreds of THz. The further discussion is restr-
icted to the interaction of a single ion with these two internal energy levels plus one harmonic oscillator mode that models the external motion of the ion in the trapping potential. The Hamiltonian in the absence of interaction with further electromagnetic ﬁelds is then given by

1 H0 = 2 ω0σz +

ωz

a†a + 1 2

where ω0 denotes for the energy splitting of the qubit levels. Moreover, σz is the Pauli spin matrix, the energy splitting of the harmonic oscillator level is ωz and the creation (annihilation) operators for this mode is denoted a† (a). The state vector of the system

can be expressed as

∞
|Ψ(t) = (a↑,n(t)|↑ + a↓,n(t)|↓ ) |n
n=1

with the harmonic oscillators eigenstates |n of energy n ωz. For the moment we assume that single photon transitions between the two qubit levels can be achieved through an

electric dipole coupling. The interaction between the applied electromagnetic ﬁeld E and

the qubit levels is described by the Hamiltonian

HI (t) = −d · E = −d · ε E0 cos(−ωl t + k z˜ + φ),

(2.15)

where d denotes the dipole operator. The ﬁeld has a frequency ωl, an amplitude E0 at the ion’s position and a polarization ε. The propagation direction of the ﬁeld, represented by the vector k, is assumed along the trap axis in z-direction parallel to the harmonic oscillator mode. z˜ is the ions displacement from the equilibrium position and φ denotes

20

2. Trapped calcium ions as qubits

an oﬀset phase of the ﬁeld. The dipole operator is proportional to σ+ + σ− where σ+ ≡ |↑ ↓| and σ− ≡ |↓ ↑|. With the creation and annihilation operators, Eq. (2.15) becomes after a rotating wave approximation

HI = Ω eiη(a+a†)σ+e−i(ωlt+φ) + e−iη(a+a†)σ−ei(ωlt+φ) ,

(2.16)

where the coupling strength is given by Ω, also referred to as Rabi frequency. Equation (2.16) contains all details about the exact interaction of the applied ﬁeld and the ion. Moreover, the Lamb-Dicke parameter is deﬁned as η ≡ kz0 = k · ez 2Mωz and describes the ability of the ﬁeld to couple to the harmonic oscillator mode along z-direction where M denotes the mass of the ion. It relates the spread z0 of the ion’s wave function to the wave vector k of the applied ﬁeld. In the Lamb-Dicke limit de-
ﬁned by η2(2n + 1) 1 the extension of the ion’s wave function z0 is much smaller than the applied wavelength. From Eq. (2.16) we then obtain in the interaction frame

HI = (Ωeiφ)σ+e−i(ωl−ω0)t 1 + iη(ae−iωzt + a†eiωzt) + h.c.

(2.17)

where higher order sidebands were omitted.

2.3.2 Coupling internal and external degrees of freedom
A coupling of the external ﬁeld to the motion is required for laser cooling and conditional two-qubit operations. For η > 0 the evaluation of Hamiltonian (2.17) is considered in the resolved sideband limit with Ω ω0. Regarding the frequency ωl of the applied ﬁeld, HI exhibits three spectral components where the coupling strength Ωn,n of the transition |↓ |n ↔ |↑ |n depends on the population of the harmonic oscillator mode n (n ) of the involved states:
1. For ωl = ω0 no coupling to the motion is achieved and ∆n = 0. The coupling strength for these carrier transitions is approximately given by Ωn,n = Ω(1 − η2n) and the interaction Hamiltonian is given by HI(c) = Ωeiφσ+ + h.c.
2. For ωl = ω0 − ωz each transition |↓ → |↑ is accompanied by a decrease in the population of the harmonic oscillator (|n → |n − 1 ). The coupling strength for √ these red sideband transitions is approximately given by Ωn,n−1 = η nΩ and the interaction Hamiltonian is given by HI(rsb) = Ωn,n−1 a eiφσ+ + h.c.
3. For ωl = ω0 + ωz each transition |↓ → |↑ is accompanied by an increase in the population of the harmonic oscillator (|n → |n + 1 ). The coupling strength for √ these blue sideband transitions is approximately given by Ωn,n+1 = η n + 1Ω and the interaction Hamiltonian is given by HI(bsb) = Ωn,n+1 a† eiφσ+ + h.c.

2.4 Quadrupole transition

21

Red sideband transitions can be exploited in order to cool the ions by reducing the population of the harmonic oscillator. Carrier transitions are of particular importance since they are used for single-qubit spin rotations and state transfers. For the further discussion we neglect the coupling to the motion by setting the Lamb-Dicke parameter to zero (e.g. k ⊥ ez). Then the Hamiltonian (2.17) further simpliﬁes to
HI = Ω σ+e−i(δω t+φ) + σ−ei(δω t+φ) ,

with the detuning δω = ωl − ω0 of the ﬁeld from the qubit resonance. The solution to this problem is given by

c˙↑ = −iΩe−i(δω t+φ)c↓ c˙↓ = −iΩei(δω t+φ)c↑,

where cm(t) are the amplitudes of the spin states |↑ and |↓ . In case of a resonant interaction (δω = 0) the time evolution of the quantum state can be expressed in the energy basis by |ψ(t) = Uˆ (t)|ψ(0) , where

Uˆ (t) =

cos(Ωt) −ieiφ sin Ωt

−ie−iφ sin Ωt cos Ωt

= R(θ, φ).

With this interaction at hand, arbitrary single-qubit rotations can be carried out as visualized in the Bloch sphere picture in Fig. 2.1. The direction of the rotation axis is given by cos(φ)ex + sin(φ)ey and lies within the equatorial plane. When the ﬁeld is applied for the ﬁrst time, φ can be set to zero. For all subsequent pulses the axis of rotation is then referenced to the ﬁrst pulse by means of the relative phase of the external ﬁeld. If we set for instance φ = π we directly realize the sin-
gle-qubit rotations around the y-axis as described by Eq. (2.5). The rotation angle θ is then given by the interaction strength Ω and the duration t of the interaction.

The next three sections discuss the coupling strengths Ω and the corresponding coupling to the harmonic oscillator mode η for the three diﬀerent ﬁelds that were experimentally studied.

2.4 Quadrupole transition
In the experiments extensive use is made of the laser at a wavelength of 729 nm. It can be used to coherently drive transitions between the S1/2 and D5/2-state manifold, for instance to initialize the hyperﬁne qubit. Moreover, quantum information can be encoded in a metastable D5/2-state and one of the S1/2-states as has been done with 40Ca+ for many years now. The laser-ion interaction for this optical qubit in 40Ca+ has been discussed

22

2. Trapped calcium ions as qubits

in detail in the references [83, 89]. Here the results are brieﬂy summarized including particularities concerning 43Ca+.

2.4.1 Rabi frequency

The transition under consideration is dipole forbidden. Instead the gradient of the laser ﬁeld applied couples to the induced electric-quadrupole moment Qˆ

HI = −Qˆ ∇E(t).

The coupling of the laser to the ion can be expressed in terms of the Rabi frequency as

Ω=

eE0 4

S1/2, F, mF |(ε · r)(k · r)|D5/2, F , mF

,

(2.18)

where E0 is the electric ﬁeld amplitude, r is the position operator of the valence electron relative to the atomic nucleus. For quadrupole transitions the selection rules allow ∆m = mF − mF = 0, ±1, ±2. In the case of 43Ca+ also ∆F = FS − FD = 0, ±1, ±2 has to be fulﬁlled. The eﬀective coupling strength Ω for a certain transition depends on the atomic transition properties and the geometry of the magnetic ﬁeld, the polarization vector ε and the laser beam direction n = k/|k|. These can be combined-
 into an eﬀective coupling constant

g˜ ≡

(2J + 1)(2F + 1)(2F + 1)

JJ 2 F FI

2 q=−2

F2F m q −m

ci(jq)εinj

(2.19)

where the term in round (curly) brackets represents Wigner 3(6)-j symbols. The sum over q is only non-zero for q = m−m . The second rank tensor4 c(ijq) takes into account both the radiative pattern and the quantization axis deﬁned by the direction of a small magnetic

ﬁeld. Equation 2.18 turns then into

Ω = eE0 4

15 cα

ΓD5/2 k3

g˜

with the ﬁne structure constant α, the speed of light c, the electron charge e and the spontaneous decay rate ΓD5/2. Neglecting the geometry and polarization dependence by

4deﬁned as:

c(1) = − √1 (1, −i, 0), c(0) = (0, 0, 1), c(−1) = √1 (1, i, 0)

2

2

c(ijq) =

10 (−1)q

1

3

m1 ,m2 =−1

112 m1 m2 −q

c(im1 ) c(jm2 )

2.5 Raman interactions coupling hyperﬁne structure ground states

23

omitting the factor c(ijq)εinj, the values of the coupling strengths g˜ for 43Ca+ are listed in Fig. A.1.
Assuming an axial center of mass (COM) mode trapping frequency ωz/(2π) = 1.2 MHz and an angle between trap axis and laser beam of 45◦ we attain a single ion Lamb-Dicke parameter of η = 0.06.

2.5 Raman interactions coupling hyperﬁne structure ground states
The following section discusses quantitatively the aspects of the light-atom interaction on the hyperﬁne structure of the 43Ca+ ground-state with a Raman-type laser setup. Parameters like laser power, detuning and geometry have to be set to ﬁnd a good compromise between a number of, often contradictory, requirements. The choice of the laser detuning from the P -levels, for example, is guided by at least three considerations: The spontaneous emission rate due to non-resonant excitations should be m-
inimal, the light shifts caused by the Raman beams have to be controlled, and the Raman transition rate has to be suﬃciently large. This has been detailed in the references [90, 91] for a number of diﬀerent ion species. In the following three sections their results are summarized regarding coupling strength, light shifts and spontaneous emission that are relevant to the experiments done with 43Ca+. Parts of the text of this section are taken from reference [92].
2.5.1 Resonant Raman transitions: Rabi frequencies and geometries
The goal of this section is to calculate the properties of Raman transitions in the groundstate of 43Ca+, i.e. the Rabi frequencies and their dependence on laser frequencies and polarizations. In preparation, we ﬁrst consider a generic two-state system |0 ≡|j0, m0 and |1 ≡|j1, m1 with intermediate state |i ≡|ji, mi to which dipole amplitudes exist. The light ﬁelds are described as plane waves of the form
E(r, t) = Eε cos(−F ωlt + k · r + φ),
evaluated at the position of the ion r. We make the rotating wave approximation, and set the phase φ = 0 for now. Two such light ﬁelds E1 and E2 are assumed in the resonant case where the detuning δR ≡ ω0 + ω1 − ω2 of the lasers is equal to the energy separation ω0 of |0 and |1 . In the regime where Ω ω0, with Ω being the largest Rabi frequency due to coupling to the intermediate level, the Hamiltonian of this three-level system can be written in terms of an approximate, “eﬀective Hamiltonian” tha-
t captures the dynamics of

24

2. Trapped calcium ions as qubits

the system but only acts on the subspace {|0 , |1 }. The resulting eﬀective Rabi frequency is given in terms of the individual Rabi frequencies

Ω1

=

1 2

E1

0|d · ε(1)|i

Ω2

=

1 2

E2

1|d · ε(2)|i

as

Ω=

Ω1Ω∗2 ∆

=

E1E2 4 2∆

0|d · ε(1)|i

i|d · ε(2)|1 ,

or, with the inclusion of magnetic sublevels,

Ω

=

E1E2 4 2∆

0, m0|d · ε(1)|i, mi i, mi|d · ε(2)|1, m1

mi

To calculate the Raman coupling strength for 43Ca+ regarding the involved frequencies we refer to the conventions of Fig. 2.5 (a). In general the two levels are of the two 4S1/2 hyperﬁne manifolds (F = 3 and F = 4). But in the end we are mostly interested in the clock states with mF = 0 because of their insensitivity to magnetic ﬁeld ﬂuctuations. The Raman Rabi frequency is given by the coherent sum of the couplings via all available intermediate states. In the case of 43Ca+ ions these are the P1/-
2 and P3/2 levels including their hyperﬁne structure and Zeeman levels. We therefore have to calculate the sum

1

I +J

F

Ω= 4 2

J

=

1 2

,

3 2

F =|I−J|

m=−F

E1E2

0|d · ε(1)|J, F, m J, F, m|d · ε(2)|1

(∆J + ωhfs(J, F ))

(2.20)

where again only resonant transitions (δR = 0) are considered.

The scalar product can be written as

+1

d·ε=

(−1)sdsε−s,

s=−1

where ds (and εs) are the spherical components given by

1

d±1

=

√ 2

(∓dx

−

idy )

d0 = dz

The conjugated spherical components can be rewritten according

d∗q = (−1)qd−q ε0 refers to a π-polarized laser ﬁeld, whereas ε± indicate σ±-polarized ﬁelds, respectively.

2.5 Raman interactions coupling hyperﬁne structure ground states

25

(a)

4 P2 3/2

(b)

wF

dR

D

4 P2 1/2

w3/2 w1

w2

|1ñ

4 S2 1/2

|0ñ

w0

E2
magnetic field

E1 ion string

Figure 2.5: (a) Sketch of the energy levels relevant for the calculations for stimulated Raman transitions. Eventually, we are mostly interested in the case where the quantum information is encoded in two states of the S1/2 ground-state manifold labeled |↓ ≡|F = 4, mF = 0 and |↑ ≡|F = 3, mF = 0 . The hyperﬁne splitting of the excited states is not considered in the calculation. (b) Schematic of a possible beam geometry and polarizations for which the coupling between laser ﬁeld and qubit transitio-
n is maximized. In this conﬁguration the Lamb-Dicke parameter is 0.2 for an axial COM mode trapping frequency of ω/(2π) = 1.2 MHz.

Now we can factor out the angular dependence and write the matrix element of Eq. (2.20) using the Wigner-Eckart theorem as

0|d · ε(1)|J, F, m J, F, m|d · ε(2)|1 =

0||d||J, F, m 1||d||J, F, m (2F + 1)×

1
(−1)q+F −1+m0
q=−1

F 1 F0 m q −m0

1

ε(−1q)

(−1)s+F −1+m1

s=−1

F 1 F1 m s −m1

ε(−2s)

where the doubled bars indicate that the matrix element is reduced. This expression is only non-zero if q = mi − m0 and s = m1 − mi.

To obtain a concise expression for the Rabi frequency, we make some additional approximations and substitutions. First, we neglect ωhfs(J, F ) because it is much smaller than the detunings ∆ used in the experiment. Also, we express the reduced hyperﬁne matrix elements that show up in Eq. (2.20) by their corresponding ﬁne structure matrix elements [80]

F ||d||F = (−1)J+I+F +1 J ||d||J

J FI

(2F + 1)(2F + 1)

.

FJ1

Finally, we introduce the coupling constant gi

gi =

Ei 2

P3/2, F

= 5, mF

= 5|d · σ+|S1/2, F

= 4, mF

=4

(2.21)

26

2. Trapped calcium ions as qubits

with a right circular component of the dipole operator d · σ+. Plugging all of this into Eq. (2.20), we get the following equation for a resonant carrier Rabi frequency in 43Ca+ between the hyperﬁne clock states

1 Ω0↔0 = 2 |Λ0,0| g1g2

ε(−11)ε(−21) − ε(11)ε(12)

ωF , ∆(∆ − ωF)

(2.22)

where ωF/(2π) = 6.7 THz denotes the ﬁne structure splitting of the P -states and ΛmF ,mF is the corresponding Clebsch-Gordan coeﬃcient representing the relative coupling strength of the possible transition. The explicit values for |ΛmF ,mF | are given in Tab. 2.1.
The polarization dependence tells us important facts about the geometry of the experiment: First of all, π-polarized light (ε(01), ε(02)) does not contribute to the Rabi frequency as given in Eq. (2.22). This makes sense because for such light, one of the two matrix elements of each coupling in sum Eq. (2.20) has to be of the form F, mF = 0|z|F, mF = 0 , which vanishes because the corresponding 3-j symbol

F 1F = 0.
000
Therefore, both beam polarizations must have a component perpendicular to the quantization axis.
Furthermore, the two beam polarizations must have components which are mutually orthogonal because otherwise the two terms in ε(−11)ε(−21) − ε(11)ε(11) cancel. A possible geometry for beams with perpendicular k-vectors is given in Fig. 2.5 (b).
We can classify the possible Raman transitions between F = 4 and F = 3 by the change in the magnetic quantum number ∆m. We ﬁnd that the following polarizations are required:

∆m 0
+1 −1 ±2

polarizations ε(−11)ε(−21) − ε(11)ε(12) ε(01)ε(−21) − ε(11)ε(02) ε(−11)ε(02) − ε(01)ε(12) — forbidden —

In case the Raman beam diﬀerence frequency δR is set to plus (minus) the harmonic oscillator mode frequency the interaction Hamiltonian (2.17) is valid and oscillations on the blue (red) sideband can be driven. In the experiment, we use two diﬀerent geometries for the Raman beams. For two copropagating laser ﬁelds the Lamb-Dicke parameter is negligible and no coupling to the motional sidebands is obtained. In the other conﬁguration (see Fig. 2.5 (b) the laser beams’ k-vectors enclose an angle of 9-
0◦ and the resulting k-

2.5 Raman interactions coupling hyperﬁne structure ground states

27

hyperﬁne ground-state transition (F = 4, mF ) ↔ (F = 3, mF )

0↔0 0↔1 1↔0 1↔1 1↔2 2↔1 2↔2 2↔3 3↔2 3↔3 4↔3

2 3

√1 6

5

5

1

5

18

12

12

12

1

1

3

6

√

√

7

7

7

12

6

3

Table 2.1: Clebsch-Gordan coeﬃcients |ΛmF ,mF | representing the relative coupling strength for the possible Raman and microwave transitions in the 43Ca+ ground state manifold (F = 4, mF ) ↔ (F = 3, mF ). Coeﬃcients other than the ones listed directly follow from the relation |ΛmF ,mF | = |Λ−mF ,−mF |

vector of both beams added is parallel to the trap axis. That results in a Lamb-Dicke parameter η of 0.2 for an axial COM mode trapping frequency of ωz/(2π) = 1.2 MHz.

2.5.2 Numerical evaluation

For now we assume that the two laser ﬁelds are equally strong (E1 = E2 ≡ E). Then the

coupling constants g1 = g2 ≡ g can be linked to atomic constants and the ﬁeld amplitudes

by

ΓP g2

4 =
3π

ω33/2 0c3E2

where ω3/2 is the frequency of the transition S1/2 ↔ P3/2. Here we assumed an equal decay rate ΓP which leads to a few percent error as the rates are slightly diﬀerent (Γ(P1/2 → S1/2) = 1/(7.7 ns) and Γ(P3/2 → S1/2) = 1/(7.4 ns) [83]).

The electric ﬁeld strength E is linked to the laser power P in the center of a Gaussian

beam with waist size w0 by

E2

=

4P πw02 0c

√

If we choose a detuning ∆ = ( 2−1)ωF where detrimental scattering is largely suppressed

(see below), and assume polarizations such that ε(−11)ε(−21) − ε(11)ε(12) = 1, we ﬁnd for the

resonant carrier Rabi frequency on the clocks states

9 Ω0↔0 = 2

c2 ΓP P ω33/2ωF w02

=

2π × 0.16 MHz ×

P w02

×

10 µm2 1 mW

.

The time it takes for a full population transfer is usually referred to as the corresponding π-time and given by τπ = π/(2Ω).

28

2. Trapped calcium ions as qubits

2.5.3 Light shifts

The oﬀ-resonant light shift of a level |m - also termed AC-Stark shift - due to coupling with a laser of ﬁeld strength E to level |j is given by

δ(m)

=

|E|2 4 2∆|

m|d

·

ε|i

|2.

Here the detuning of the laser ∆ is assumed large compared to the intermediate level’s decay rate ΓP .

In case of 43Ca+, we have to sum over all the intermediate levels and get for the AC-Stark shift of the level |m of each of the laser beams i

δ(m)(i)

=

1 42

j

Ei2 | m|d · ε(i)|j |2 . ∆j

As with calculating the Rabi frequency, we neglect the hyperﬁne splitting in the excited state as an approximation which holds for larger laser detunings ∆. When using the coupling constants of Eq. (2.21) we obtain for the diﬀerential light shift of the clock state qubit due to both Raman beams

δ0↔0

= g2 3

1

2

2

1

−

+

−

∆ + ω0 ∆ − ωF ∆ + ω0 − ωF ∆

+

+ g1

1

2

+

−

2

1 +

3 ω0 − ∆ ∆ − ωF ∆ − ω0 − ωF ∆

≈

−

(g12

+ 3

g22) ω0

1

2

∆2 + (∆ − ωF )2

,

where the approximation holds for ω0 ∆, ωF . The diﬀerential shift is independent from the polarization of the Raman beams.

2.5.4 Spontaneous photon scattering
While the ion is in either one of the two qubit states, spontaneous decay can be neglected completely. However, during Raman transitions the ion is oﬀ-resonantly excited to the P -levels, which decay rather quickly. In a two-level system, the average probability for the ion to be found in the excited state is given by the ratio of the light shift δ and the laser detuning ∆. A multiplication with the decay rate ΓP of the excited state gives an estimate of the decoherence rate RSE due to spontaneous-
 decay. This spontaneous decay limits the coherent operations in a fundamental way since both decay rate and coherent transition rate scale with gi2.

2.6 Microwave transitions

29

With the approximation ω0, ΓP ωF , |∆| the average spontaneous decay rate during the Raman interaction is

RSE

=

ΓP 3

(g12

+

g22)

1

2

∆2 + (∆ − ωF)2

In order to avoid scattering during the coherent operation the ratio

RSE/|Ω|

=

g12 + g22 ΓP g1g2(ε(−11)ε(−21) − ε(11)ε(12))

2

13

−+

∆ − ωF ∆ ωF

has to be minimized. This can be achieved by choosing equal intensities in both Raman

beams and proper polarizations√(e.g.

ε(−11) = ε(−21)

= −ε(11) = ε(12)

√ = 1/ 2).

If we set the

Raman detuning to ∆opt = (1− 2)ωF the probability of spontaneous emission PSE during

a carrier π-pulse is

√

2 PSE =

2 π ΓP = 3 × 10−5. ωF

In order to achieve a π-time of 1 µs Raman beams with a waist of 10 µm would require 1.6 mW of laser power for this detuning. The diﬀerential AC-Stark shift would then be
√ δ0↔0 = −4 2 |Ω| ω0/ωF = −2π × 680 Hz.

In addition to this inelastic scattering also elastic scattering events can occur. It has been shown though that these will not lead to decoherence [93].

2.6 Microwave transitions
The spontaneous scattering problem is not present when driving microwave transitions on the 43Ca+ hyperﬁne ground-state. The magnetic dipole coupling of the ion to electromagnetic radiation in the microwave domain can be expressed in terms of a Rabi frequency as
1 ΩMW = 2 S1/2, F = 4, mF |(µ · BMW)|S1/2, F = 3, mF with the ion’s magnetic dipole moment µ and the magnetic ﬁeld amplitude BMW of the microwave radiation.
Transitions where the magnetic quantum number is not changed (∆m = 0) are driven by a π-polarized AC magnetic ﬁeld, whereas for transitions with a change in magnetic quantum number by one (∆m = ±1) a σ± polarized ﬁeld is needed. The relative strengths of the transitions are given by the corresponding Clebsch-Gordan coeﬃcients and are the same as for the Raman transitions given in Tab. 2.1.

30

2. Trapped calcium ions as qubits

For typical axial COM mode trapping frequencies of ω/(2π) = 1.2 MHz and the hyperﬁne splitting of the ground-state ω0/(2π) = 3.2 GHz, the Lamb-Dicke parameter is ηMW 10−6. The coupling to the ﬁrst motional sideband relative to the carrier is suppressed by that amount, unless large magnetic ﬁeld gradients are applied [94]. This makes the use of this coupling impractical. Another drawback concerning the usage of microwave radiation for QIP is that addressing of single ions cannot be achieved by focu-
sing the radiation since the wavelength is orders of magnitude bigger than typical ion distances. Despite the fact that this could be circumvented by applying large magnetic ﬁeld gradients, such that transitions of ions at diﬀerent sites can be spectrally resolved, we discard this as a impractical solution because at least some of the ions would experience ﬁelds where the transitions become rather sensitive to external magnetic ﬁeld ﬂuctuations. In addition, when moving the ions within the trap, p-
hase tracking would be challenging, too.
Although, microwave driven qubit transitions are a valuable tool for example to study mechanisms of decoherence present for Raman lasers (see section 6.4).

3 Experimental setup
For the experiments reported below a new setup has been constructed consisting of three major building blocks: the ion trap, the lasers and the computer control. The experiment was set up on two optical tables, one accommodating the photoionization lasers, the cooling laser and the repumping lasers as well as their frequency references. The other optical table carries the trap setup and ion detection, the laser source for the Raman beams and a titanium-sapphire laser for the quadrupole transition,-
 including its frequency reference. All laser sources - except the Raman beams - are linked to the ion trap part of the experiment by single-mode glass ﬁbers. The experiment resides at the Institut fu¨r Quantenoptik und Quanteninformation in Innsbruck, Austria.
3.1 Linear ion trap and radiofrequency drive
One of the big advantages of trapped ions as a physical implementation of QIP is the high amount of control for initialization, readout and manipulation of internal and external degrees of freedom by using focused laser beams and microwave radiation. At the same time these interactions can be switched oﬀ almost completely and also environmental perturbations are strongly suppressed. The latter is usually achieved by suspending the ions in a trap, which is mounted in an ultra high vacuum environmen-
t. Our experiments are performed either with a single or a pair of calcium ions held in a linear Paul trap consisting of two tips and four blade-shaped stainless steel electrodes [95, 96]. A picture and schematic drawings of the trap can be seen in Fig. 3.1. A trap of the same type has been intensively investigated over the past years in another experiment of the group and is quite well understood. It has reasonably high trapping frequencies in the radial and axial direction. This design was chose-
n because such a structure can be machined with higher precision than rod-like electrodes which were used in earlier experiments. One advantage over more modern micro-machined segmented traps is the low heating rate (see section 4.5) and ease of optical access.
In order to attain large secular frequencies, two of the trap blades are held at ground while the two others are fed a radiofrequency high voltage Vrf(t). Voltage enhancement is achieved by the use of a helical resonator with a silver plated helix exhibiting a quality

32

3. Experimental setup

C

30

(a)

(b)

A

C A
L=5
B A

90° 3
6 22°
22° r = 0.2

Figure 3.1: (a) Picture of the linear Paul trap used for the experiments. The four bladeelectrodes are connected with twisted OFHC copper wires and the DC-electrodes by a Kapton insulated wire. (b) Schematics of the trap construction. Two of the blade-shaped electrodes (A) are connected to ground, the other two are supplied with radiofrequency high voltage. The minimal distance between the radial electrodes and the ions is r0 = 0.8 mm. The two tip electrodes (B) are connected to high positive volt-
ages of up to 1.5 kV. Moreover, compensation electrodes (C) are placed close to the trap center such that electric stray ﬁelds in radial directions can be compensated. The minimal distance from these electrodes to the ions is for the one(s) on the top (side) 7.3 mm (7.7 mm). The top one is also used to guide microwave and radiofrequency signals close to the ions. All measures of distances and radii are given in mm.

factor of Q = 300. An input signal with a trap drive frequency of Ωrf/(2π) 25.5 MHz is produced by a frequency synthesizer1and then ampliﬁed2 to 5-13 W radiofrequency power which is resonantly coupled into the helical resonator attached to the trap electrodes. By this means a two-dimensional electric quadrupole ﬁeld is generated which provides radial conﬁnement for a charged particle. In case of hyperbolic trap surfaces the time varying quadrupole potential Φrf in the x, y− or radial plane is give-
n by

x2 − y2 Φrf(x, y, t) = Φ0 2r02 cos(Ωrf t),

(3.1)

where r0 = 0.8 mm is the minimal distance from the trap center to the blade-electrodes. Even though the radial electrodes are rather shaped like blades than having a hyperbolic form, Eq. (3.1) can serve as a good approximation in particular for small excursions.

In order to conﬁne the ions in axial direction (along ez), two stainless steel tips are placed L = 5 mm apart in the trap’s symmetry axis and are held at a positive voltage Utip = 500 − 1500 V. The electrodes are electrically isolated by Macor ceramics spacers which assure a 20 µm tolerance in the positioning of the four blades and the tip electrodes. Each tip is separately connected such that the ions can be shuttled along the trap axis by applying diﬀerent voltages to each of the tips (see secti-
on 3.5). Assuming a perfect

1Rohde & Schwarz, SML01 2Mini Circuits ZHL-5W-1 or LZY-1

3.1 Linear ion trap and radiofrequency drive

33

quadrupole ﬁeld and equal tip voltages, the potential imposed by the two tips is given by

Φtip(x,

y, z)

=

Utip [z2 L

−

1 (x2 2

+

y2)].

In the resulting potential Φ = Φrf + Φtip an ion with charge e experiences the force F = −e · ∆Φ. This leads to equations of motion for the trapped particles of mass M in three dimensions that take the form of a Mathieu equation [97]

u¨i

+

[bi

+

2qi

cos(Ωrf

t)] Ω2rf 4

ui

=

0,

(3.2)

where u = uxex + uyey + uzez is the position of the ion. The stability parameter q is

deﬁned for ions with mass M as

q

≡

2eVrf M r02Ω2rf

and stable solutions occur for 0 < q < 0.908 [98]. The components of q are then deﬁned

by qx = −qy = q and qz = 0.

The components of b are given by

bx

=

by

=

1 − 2 bz

=

−

e α˜ Utip M L2Ω2rf

,

where α˜ is a factor taking into account the actual trap geometry.

In case q, |b| 1, a ﬁrst-order solution to Eq. (3.2) is given by

ui(t) ≈ uˇ cos(ωit)

1

+

qi 2

cos(Ωrft)

.

(3.3)

with the amplitude uˇ of the ion motion and a frequency

ωi

=

Ωrf 2

bi + qi2/2.

(3.4)

The solution in the axial direction describes a harmonic motion with a frequency of

ωax = ωz =

e α˜ Utip 2 M L2

.

For a tip voltage of Utip = 1000 V 43Ca+ ions are conﬁned in a harmonic potential with an axial COM mode frequency of ωax/(2π) = 1.2 MHz.

In the radial directions the motion exhibits two frequency components. One is given by the radial components of Eq. (3.4) which can also be written as

ωr = ωx = ωy =

(Ωrfq)2 8

−

1 2

ωz2.

34

3. Experimental setup

Thus it is evident that the frequency, characterizing the secular motion is lowered when the potential along the trap axis is increased.

The second frequency component of the motion along the radial direction is at the trap drive frequency Ωrf and is termed micromotion. The amplitude of this micromotion is by a factor of q/2 smaller than the secular motion and usually not of importance for the experiments.

For our trap parameters we typically obtain secular frequencies of the radial motion between ωr/(2π) = 2 MHz and 4 MHz for calcium ions. From spectroscopic measurements we infer that the degeneracy of the two radial directions is lifted, so we can resolve two radial sideband components which are separated by ∆ωr/(2π) 40 kHz, with a small dependence on the tip voltage. This asymmetry is introduced by the fact that only two of the radial trap electrodes are powered with radiofrequency where the two -
others are attached to ground.

In the presence of external electric stray ﬁelds, the ions’ equilibrium position is shifted out of the radiofrequency potential’s node. This leads to an increased amplitude of the motional component at the trap drive frequency Ωrf termed excess micromotion. The amplitude of this excess micromotion can be largely suppressed by applying voltages to compensation electrodes such that the ions are shifted back to the radiofrequency potential’s node (see section 4.3).

In the experiment we are mostly interested in the regime where multiple ions are aligned in a linear crystal when suﬃciently cold. This is the case for ωr ωz. The equilibrium position in the case of multiple ions is then determined by the trapping potential and the Coulomb repulsion of the ions. For two ions the distances from the center of the trapping potential in axial direction is given by [83]

e2

1/3

∆z = 16π 0M ωz2

.

(3.5)

For an axial COM mode frequency of ωax/(2π) = 1.2 MHz, two 40Ca+ ions exhibit an inter ion spacing of 4.9 µm. Since the trap frequencies can be measured precisely we use the knowledge of the associated ion spacing to calibrate the magniﬁcation of the imaging system.

3.2 Laser system and optics
One big advantage of calcium is the fact that today all laser light sources needed can be derived from commercially available diode lasers. Except for the laser at 729 nm, which

3.2 Laser system and optics

35

(a)

DL

794 nm

SHG 397 nm

wavelength meter reference cavity

l/2

3.2 GHz

PBS

EOM

l/2

220 MHz AO1 +1

AO2 220 MHz +1

(b)

DL

DL

854 nm

866 nm

AO1 AO3

80 MHz +1

80 MHz AO2 +1
+1

PBS

l/2

145 MHz

AO4 245 MHz

+1

viewport SE

viewport SE

viewport SW

50:50

bottom viewport

Figure 3.2: (a) Laser beamline providing light for Doppler-cooling, state detection and optical pumping at a wavelength of 397 nm. The EOM at 3.2 GHz is used to address both hyperﬁne ground states of 43Ca+. (b) In order to pump out the D-states, light at wavelengths 866 nm and 854 nm is needed. Both wavelengths are superimposed on a 50:50 beam splitter before sending them through polarization-maintaining single-mode glass ﬁbers to the experiment. In case of 43Ca+, multiple frequencies of the repum-
per at 866 nm can help to increase the ﬂuorescence rate. Two additional frequencies are modulated onto the beam with two extra AOM’s operated at 145 MHz and 245 MHz as sketched.

is a titanium-sapphire laser3 and was already available, all other coherent light sources are Toptica diode lasers, partially with second harmonic generation. Furthermore, all lenses, waveplates, glass ﬁbers, electro-optical devices, ﬁlters, polarizers, coatings, etc. are commercially available components.

3.2.1 Lasers for Doppler-cooling and optical pumping and repumping
Laser at 397 nm
For Doppler-cooling, state detection and optical pumping the ions are excited on the S1/2 ↔ P1/2 dipole transition (see Fig. 2.3) at a wavelength of 397 nm. At the time when the experiment was set up, there were no laser diodes available at this particular wavelength with suﬃciently low ampliﬁed spontaneous emission. Therefore, the light is produced by second harmonic generation (SHG) from a diode laser at 794 nm4. Approximately 100 µW of the red light is used for frequency stabilization to a refe-
rence cavity (see below). At the output of the doubling cavity we have about 10 mW of blue light, which is
3Coherent, 899 modiﬁed by L. Windholz (Graz University) in company with Radiant Dyes; Pump laser: Coherent, Verdi V-10 4Toptica DL-SHG

36

3. Experimental setup

then split into a σ-beam and a π-beam as depicted in Fig. 3.2 (a). Each of the beamlines has an acousto-optical modulator (AOM) at 220 MHz5 for switching the beams on and oﬀ. Additionally, the σ-beam has an electro-optic phase modulator (EOM)6 in order to generate sidebands at 3.2 GHz, needed to address both hyperﬁne ground-state manifolds of 43Ca+. The beams are then sent through single-mode polarization-maintaining ﬁbers7 to the experiment. Similarly, a second laser system of this type is availa-
ble where the wavelength can be tuned between 393 nm and 397 nm. This laser is used to improve on the 43Ca+ ﬂuorescence rate.

Lasers at 866 nm and 854 nm
For repumping from the 3D3/2 and 3D5/2-states two diode lasers (DL)8 provide light at 866 nm and 854 nm. As sketched in Fig. 3.2 (b) both beams are switched on and oﬀ with AOM’s operating at 80 MHz9. In case of 40Ca+ it is suﬃcient to work with a single laser frequency for eﬃcient repumping. For 43Ca+ though it turns out that the ﬂuorescence that is observed during Doppler-cooling and detection can be increased by adding two more frequencies with AOM’s to the light at 866 nm. Therefore, the two AO-
M’s at 145 MHz and 245 MHz10 (see Fig. 3.2 (b)) are turned on only when 43Ca+ is used. All light ﬁelds of 866 nm and 854 nm are collected and sent to the experiments with two single-mode polarization-maintaining ﬁbers11 to one of the equatorial ports (SE) and one on the bottom ﬂange. For 40Ca+ one of these ports is suﬃcient, whereas for 43Ca+ an increase in ﬂuorescence was observed while Doppler-cooling and state detection when both ports were used. In addition a diode laser 850 nm is available to-
 investigate alternative shelving techniques and potentially improve on the 43Ca+ ﬂuorescence rate.

Laser frequency references
Unlike in neutral atom experiments, for the wavelengths needed for ions usually there are no vapor cells that can be used as laser frequency reference by certain spectroscopy techniques. Therefore, all the lasers described earlier in this chapter are referenced to Fabry-P´erot cavities. The design of such a resonator is always a trade-oﬀ between a number of diﬀerent needs, that partly lead to conﬂicts. For instance it is hard to obtain high stability and tunability at the same time. The frequencie-
s of lasers acting on dipole
5Crystal Technology, 3230-120 6New Focus, 4431 7Sch¨after + Kirchhoﬀ, PMC-400-4.2-NA010-APC 8Toptica, DL-100 9Brimrose, EF-80-20-866 and Crystal Technology, 3080-120 10Brimrose, EF-145-30-866 and EF-250-30-866 11Sch¨after + Kirchhoﬀ, PMC-850-5.2-NA012-3-APC

3.2 Laser system and optics

vacuum can flat mirror

Zerodur spacer

input

37

outer piezo ring

curved mirror

vacuum window

ouput

inner enclosure Viton peg

inner piezo ring Macor ring

Figure 3.3: Cavity setup that is used as a variable, passively stable frequency reference for the lasers at wavelengths of 866 nm, 854 nm and 794 nm. One curved and one ﬂat mirror are kept at distance of 100 mm by a Zerodur spacer whose length is hardly sensitive to temperature changes. In order to gain tunability without compromising the stability too much, the curved mirror is mounted onto two concentric piezo transducers of equal height, interconnected by ceramic rings. The cavity assembly is k-
ept in vacuum to get a better thermal insulation from the environment and to prevent changes in air pressure to change the optical path length between the mirrors. Both vacuum windows are anti-reﬂection coated and the input port is slightly tilted to avoid spurious reﬂections perturbing the error signal.

transitions with a line width on the order of 20 MHz should be deﬁned to better than 1 MHz. Therefore, the resonator stability can be slightly compromised by gaining in the ﬂexibility of frequency tuning. A cavity setup was designed with one ﬂat and one concave mirror12 with a reﬂectivity of 99.1% (ﬁnesse F ≈ 300). The ﬂat mirror is directly glued13 to a 100 mm spacer made of the glass ceramic Zerodur14 and used as input port. The thermal expansion coeﬃcient of the Zerodur used is speciﬁed to be 0-
±0.02 × 10−6 /K at room temperature. As sketched in Fig. 3.3 the curved mirror is mounted to the spacer with two concentric piezo transducers15 of the same height (5 mm). The ceramics of the piezos has a rather high temperature expansion coeﬃcient of 2×10−6 /K. By this assembly thermal drifts can by largely suppressed while having the ﬂexibility to tune the cavity over several free spectral ranges (FSR = 1.5 GHz) by applying voltages up to 300 V to the piezos’ electrodes. After scanning over large-
 ranges, the piezos have to settle. This takes typically a few minutes. For daily operation this is a minor problem. The 397 nm cooling laser is the only laser that needs to be tuned over several GHz during operation. In order to cope with the slow frequency drift while settling, we monitor the amount of ﬂuorescence during Doppler-cooling and feed this signal back to the cavity piezo voltage. Thus, on a time scale of minutes, the cooling laser is directly stabilized to the ions’ S1/2 ↔ P1/2 dipole-
 transition.

12Laseroptik Garbsen, radius of curvature 250 mm 13Norland Products Inc., UV-glue 14Helma Optics, Dehnungsklasse 0 15Ferroperm, Pz27

38

3. Experimental setup

In order to suppress perturbations caused by acoustic noise and changes of the air pressure and to improve the thermal decoupling of the environment, the whole setup is contained in a vacuum can. After pumping with a turbo pump for a day the setup was detached from this pump by means of an all-metal valve, and is pumped using an ion getter pump16. A steady state pressure of 10−8 mbar was reached after one day. The vacuum in combination with the Viton-pegs (see Fig. 3.3) provide a good thermal isol-
ation from the environment and the heat exchange with the environment is dominated by radiation. To avoid gradients that could change over time, an additional metal enclosure inside the vacuum was installed. Thermalization within this inner aluminum shield is expected to occur on much shorter time scales than the radiative heat exchange of this shield with the vacuum can. The whole setup is enclosed in a metal housing and the temperature is stabilized by resistive heating. Servo independent temper-
ature measurements reveal that the averaged temperature inside the box varies by less then ±2 mK within 24 h.
Direct beat note measurements with a referenced laser (see subsection 3.2.2) have shown that for relaxed piezos the drift rates are well below 100 Hz/s, which accumulates to less than half the line width of the transitions of interest within a day. The resulting line width of the lasers referenced to these cavities is mainly limited by acoustic vibrations of the optical setup to about 100 kHz.
The distance and the curvature of one of the mirrors were chosen such that the frequencies of the higher order transversal modes are far oﬀ from the TEM00-mode. As a result, small changes in the coupling eﬃciency of the laser to the cavity have a minor eﬀect to the error signal and hence to the lock performance. All lasers are locked to the cavities with a Pound-Drever-Hall technique [99]. The necessary sidebands are directly modulated onto the light by means of a bias-T that alters the current of-
 the laser diode slightly at a frequency of 20 MHz. Photodiodes with a bandwidth of 125 MHz17 are used for error signal detection.

16Varian, Star Cell 20 l 17New Focus, 1801

3.2 Laser system and optics

39

3.2.2 Ultra-stable titanium-sapphire laser at 729 nm

With a laser at a wavelength of 729 nm we have the opportunity to excite calcium ions on the S1/2 ↔ D5/2 quadrupole transition. This oﬀers a large number of possible applications, including:
• precision spectroscopy on the quadrupole transition • coherent manipulation of optical qubits • sideband cooling to the motional ground-state • state transfer and initialization • optical shelving for state detection • frequency resolved optical pumping
The tasks listed here are very demanding with regard to the laser’s line width, its frequency and output power stability. Furthermore, the ability is needed to tune the laser frequency over 100 MHz within a microsecond and to switch between diﬀerent transitions of 43Ca+and 40Ca+diﬀering by several GHz within minutes. The setup of the laser was part of Gerhard Kirchmair’s Diplomarbeit. A detailed technical description of the laser system and the frequency stabilization scheme can be found in his th-
esis [100], here only the idea is given and the performance is described.
The requirements discussed above are met by stabilizing the laser to a high ﬁnesse cavity18 (F = 410 000, line width = 5 kHz, FSR = 2 GHz) which is vertically mounted [101] in a temperature stabilized (±1 mK) vacuum (10-8 mbar) enclosure. Ideally the expansion coeﬃcient is zero at a certain temperature Tc and the relative length change is then described by ∆l/l ∼ 10−9(T − Tc)2. For cavities from the same batch but operated at a diﬀerent wavelength the quadratic expansion coeﬃcient was measured by -
Janis Alnis et al. [102]. They also determined Tc for two diﬀerent cavities to be 7◦C and 12◦C, respectively. We assume similar values for our system. The temperature of our cavity setup was stabilized though by resistive heating to about 30 ◦C. The sensitivity to temperature changes at this point was measured to be 20 MHz/K. In case we could stabilize the temperature to Tc, a further suppression in sensitivity of two orders of magnitude can be expected where drifts induced by the heating of the m-
irror coatings start becoming important. The typical drift rates of the Fabry-P´erot cavity we obtained with the ions as reference (see section 4.4) are 3 Hz/s or below. It is quite remarkable that a 1 Hz/s drift is equivalent with a change in the cavity mirror distance of less than 6 nm per year for this setup.
This stability comes of course at the price that this reference cavity cannot be tuned since it consists of ﬁxed mirrors optically contacted to a spacer. In order to get the

18Advanced Thin Films, CO, USA

40

3. Experimental setup

80 MHz+1

10%

towards 500 m fiber

l/2 PBS l/2

270 MHz

bottom viewport

viewport

S

viewport NW

AO4

AO1

intensity stabilization

10% PD 1

PBS

+1

l/4

80 MHz mirror

80 MHz

PD 4 AO6 AO7

AO5

to wavelength meter

100 mW 20 mW

galvo plate Ti:Sa 729 nm

500 mW

tweeter

Laser Control
Servo 10 kHz

HV Amp.
Servo 300 kHz

EOM PM25
fast Amp.

Atten.

error signal

+1
PD 5
Cavity
l/4 40 µW PBS

+1 80 MHz mixer

+1
error signal

EOM

~
17 MHz

intensity stabilization

AO3 80 MHz

AO2 PD 2
fiber noise cancelation
PD 3

+1 1.5 GHz
prism

50:50 mirror

Figure 3.4: Schematic of the laser setup to provide light at 729 nm. The light intensity of the laser is stabilized by feeding back the signal of PD1 to the radiofrequency amplitude of AO1. A high ﬁnesse cavity serves as a frequency reference. The feedback to the titanium-sapphire laser is threefold. A slow feedback is applied to the tweeter and the Brewster plate. A mid and a high frequency feedback is applied to an intracavity EOM. In total three diﬀerent beams can be used on the ions. Each of t-
hem is switched on and of by either of AO5-7 and then guided to the experiment with a short single-mode polarization-maintaining glass ﬁber.

laser output to any desired frequency a 1.5 GHz AOM19 in double-pass conﬁguration is used. It has a tuning bandwidth of more than 900 MHz and a diﬀraction eﬃciency to the ﬁrst order of 14% (single-pass) so that enough light can be provided for the frequency stabilization. The drive frequency of the AOM is provided by frequency-doubling20 the output of a synthesizer to which a signal derived from measurements on the ions can be phase-continuously fed back, such that the cavity drift is compensated -
on a time scale of minutes to hours (see section 4.4).
The frequency of the laser is actively locked by means of the Pound-Drever-Hall locking technique. The necessary sidebands for the locking are phase-modulated onto the light with an EOM21 operated at 17 MHz and the obtained error signal describes the phase deviation between the light stored in the cavity and the light send to it. The servo loop consist of three branches and is sketched in Fig. 3.4. For a servo loop bandwidth of 300 kHz and above, the error signal is sent through a proportional amp-
liﬁer22, whose
19Brimrose GPF-1500-1000 20Mini-Circuits, FK-3000 21Linos/Gs¨anger, PM25 22Femto HVA-10M-60-F

3.2 Laser system and optics

41

output is connected to one of the intracavity EOM’s21 electrodes. The other electrode of this EOM receives a feedback signal which is modiﬁed by a loop ﬁlter (proportional part and shunted integrator) and ampliﬁed by a home-made high voltage ampliﬁer23. With an ampliﬁcation of 30 the bandwidth of this branch is about 300 kHz. Slow ﬂuctuations are corrected by modifying the error signal with a loop ﬁlter and feeding back onto the tweeter (piezo transducer to which one of the laser’s cavity mirrors -
is mounted to). This part of the feedback loop is limited by the mechanical resonance of the piezo-mirror assembly to 10 kHz. In addition, an extra servo loop stabilizes the intensity that is transmitted through the reference cavity to prevent small variations in laser polarization, ﬁber coupling eﬃciency, etc. from changing the error signal.
The laser output and the reference cavity setup are linked with a single-mode polarizationmaintaining ﬁber. To prevent acoustical noise coupling into the ﬁber from compromising the frequency stability, we introduced an active ﬁber-noise cancelation [103]. Before sending the laser light through the ﬁber it is split into two branches by a 50:50 beam splitter (see Fig. 3.4). The reference arm is directly reﬂected from a planar mirror to the beam splitter whereas the other part is frequency shifted by-
 AO3 (80 MHz) and then guided to the cavity by a single-mode polarization-maintaining glass ﬁber. The end facet of this ﬁber is polished at a right angle such that about 4% of the light is back reﬂected through the ﬁber where it gets frequency shifted again. A photodiode (PD3) with a bandwidth of 1 GHz24 measures the beat frequency of the reference beam and the laser sent to the cavity which is then compared with the signal of a highly stable frequency reference25 at 160 MHz. Implementing a phase--
locked loop, the frequency of the beat signal is kept in phase by feeding back to the voltage-controlled oscillator providing for AO3’s input frequency signal. The laser’s frequency spectrum was characterized by recording an optical beat note with a similar laser, that is situated in a university building. Two 500 m long single-mode polarization-maintaining glass ﬁbers26 are used to sent the light between the sites, one for each direction. Similar as in the frequency stabilization setup ﬁber noise-
 cancelations are installed for both ﬁbers. In order to measure the laser line width, a beat signal at 10.8 MHz was recorded with a spectrum analyzer27. The relative drift of the two lasers was compensated for the measurement by implementing a phase-continuous linear frequency chirp to AO2 (see Fig. 3.4). Figure 3.5 (a) shows the resulting power spectral density over the frequency for a 4 s integration time and a resolution bandwidth of 1 Hz. A Lorentzian ﬁt yields a full width at half maximum (FW-
HM) line width of 1.8 Hz. Assuming both lasers having the same frequency spectrum, we infer a line width for each of the lasers of 0.9 Hz.

23based on Apex, PA98 24New Focus, 1601 25Rohde & Schwarz, SML01 26Laser 2000, custom-made ﬁber cord 27Rohde & Schwarz, FSP 9 kHz...13.6 GHz

42 (a)

3. Experimental setup (b)
beat signal IQOQI vs. Uni (filtered)

RBW = 1 kHz
Beat frequency-10 792 668.6 Hz
Figure 3.5: (a) Beat measurement of two remote lasers linked over a 500 m glass ﬁber with the ﬁber noise compensated. A Lorentzian ﬁt yields a FWHM of 1.8 Hz, indicating a sub-Hertz line width for each laser within the measurement interval of 4 s. (b) Power spectral density of the laser beat where the reference laser is spectrally cleaned by sending it through a ﬁlter cavity. The transmission function of the ﬁlter cavity is given as the upper trace. By referencing the normalized spectrum of the er-
ror signal to the beat signal we can conclude that the measurement is largely limited by the reference laser and measurement sensitivity. From an integration of the power spectral density we obtain that a fraction of less than 10−4 of laser light power is outside a ±250 Hz interval of the laser’s carrier frequency.
For the experiments described in chapter 7 the spectral purity of the light is of importance. This quantity is also accessible from the beat measurement. Since the control electronics of the two lasers are fairly diﬀerent (e.g. servo oscillation frequencies), we do not expect them to have the same spectrum. In order to characterize our laser, we spectrally ﬁltered the reference laser with a clean-up cavity. The transmission function of this clean-up cavity is given as upper line in Fig. 3.5 (b) an-
d the normalized power spectral density of the laser beat measurement is plotted as middle trace for a resolution bandwidth of 1 kHz. The characteristics of the locking electronics is clearly visible as “servo bumps”. By referencing the normalized spectrum of the error signal to the beat signal we can conclude that the measurement is largely limited by the other laser and the sensitivity of the spectrum analyzer. From an integration of the power spectral density we obtain that a fraction of less t-
han 10−4 of laser light power is outside an ±250 Hz interval of the laser’s carrier frequency.
The output power of the laser is stabilized by diﬀracting a small amount of the light power to the ﬁrst order of AO1. The error signal is derived with photodiode PD128, sent through a loop ﬁlter29, and than fed back to a variable attenuator30 to adjust the radiofrequency amplitude of AO1. The relative power stability was measured to be about 1%.
28Thorlabs, PDA100A-EC 29SRS, SIM960 30Mini Circuits, ZX73-2500

3.2 Laser system and optics

43

3.2.3 Raman beam setup
The purpose of the Raman beams is to manipulate quantum information encoded in the hyperﬁne splitting of the ground-state in 43Ca+ by a bichromatic electromagnetic ﬁeld. For this, two coherent light ﬁelds with a frequency separation of the hyperﬁne qubit’s frequency of about 3.2 GHz are needed. In a conﬁguration where the k-vectors of these two laser ﬁelds diﬀer in angle, momentum can be transferred to and from the ions. For collinear lasers this is largely suppressed. By focusing the laser beams -
tightly, we have the ability to address individual ions in a string. Driving qubit transitions demands a ﬁxed phase relation between the driving ﬁeld and the qubit transition frequency. Assuming a ﬁxed qubit frequency for the Raman interaction, this requires the two Raman light ﬁelds to be stable with respect to each other on the optical wavelength scale for the time of each experiment.
Decoherence by spontaneous scattering can be suppressed by larger detunings from the atomic level mediating the Raman transition while elastic scattering doesn’t lead to decoherence (see subsection 2.5.4). High-speed operations while having large detunings requires a high amount of laser power. Furthermore, it is important that the output power has low amplitude noise and is stable over time. Demands regarding frequency stability are quite relaxed since variations of the absolute frequency of the -
laser give little eﬀects for large detunings.
To meet these requirements light at 794 nm of an external cavity diode laser is ampliﬁed by a master-oscillator power-ampliﬁer (MOPA)31. This light is frequency doubled by second harmonic generation using a LBO crystal in an enhancement cavity. The total output power is about 50 mW. The frequency of the laser can be set between 393 nm and 398 nm. For mode cleaning the light is then sent through a short single-mode polarizationmaintaining ﬁber32.
As discussed in section 2.5 there are four diﬀerent ways to drive the transitions in the microwave domain, depending on whether the change in the magnetic ﬁeld quantum number is zero or ±1 and whether a coupling to the ion motion is needed. Full ﬂexibility is obtained by the generation of two red detuned and two blue detuned light ﬁelds that are sent to the ions from diﬀerent directions.
The frequency splitting of 3.2 GHz is achieved by sending the laser through a cascade of AOM’s (see Fig. 3.6). AO1 operating at 1 GHz33 splits the laser beam into two beamlines. The minus ﬁrst diﬀraction order starts the red beamline and the zeroth diﬀraction order the blue beamline. In the red beamline three AOM’s at frequencies of 300 MHz34 follow, such
31Toptica, TA-SHG 32Sch¨after + Kirchhoﬀ, PMC 33Brimrose, QZF-995-20, maximum diﬀraction eﬃciency to the ﬁrst order is 15% 34Brimrose, QZF-300-50, maximum diﬀraction eﬃciency to the ﬁrst order is 70%

44

3. Experimental setup

AO1 AO5 AO4
AO7

MOPA
SHG 397 nm

DL 794 nm
to wavelength meter

red beam line

PD
-1

+1

AO3

blue

+1 beam line

AO2

-1
AO6 -1 +1

l/2
PBS AO8
+1
R2,B2

R1,B1

Lens

-1

l/2 PBS

Figure 3.6: Schematics of the Raman beam setup and the generation of the 3.2 GHz frequency separation. AO1 and AO2 run at a ﬁxed frequency of 1 GHz. The drive frequencies and radiofrequency amplitudes powering AO3 to AO8 are derived from the versatile frequency source (see section 3.7) in combination with a network of radiofrequency switches. All diﬀraction orders of the AOM’s are given in the ﬁgure. The signal of the photo diode (PD) monitoring the light intensity of the fundamental beam of AO2 i-
s fed back to the current powering the MOPA in order to stabilize the light intensity.

that two beams with a detuning of -1.6 GHz from the incoming light can be individually frequency controlled and switched. The blue beamline consists of another 1 GHz AOM which is then followed by three AOM’s at 300 MHz. The input of the two 1 GHz AOM’s is provided by a signal generator35 with an ampliﬁer36 and kept constant during the experiments. The 300 MHz AOM’s are all connected by a network of radiofrequency switches and ampliﬁers to the radiofrequency output of the versatile frequency source-
 (see section 3.7). So any pair of light ﬁelds can be accurately switched, amplitude-shaped and their relative frequencies can be set within an experimental cycle. The output of the setup consists of two laser beamlines each containing a blue and a red detuned light component which are then sent through a beam expander and a focusing lens to the ions. Typically, about 10% of the light intensity sent into AO1 is eﬀectively used as Raman light ﬁeld.
In order to cope with the high demand of interferometric stability, the whole setup was put as close to the trap as possible. Additionally, all parts were assembled as near to the optical table as possible and enclosed to prevent disturbances from air turbulence. To suppress the sensitivity to acoustical and mechanical noise further, it was built such that it encloses a possibly small area (∼ 0.04 m2). In case momentum has to be exchanged between the Raman light ﬁelds and the ions, a non copropaga-
ting pair of lasers is needed. These are split such that they can be sent to the ions under an angle of 90◦ with the diﬀerential k-vector pointing along the trap axis. From the point of splitting (AO1) to the ions these two beams enclose an area of about 0.15 m2.
Due to the ﬁnite diﬀraction eﬃciencies of the AOM’s a large fraction of the light sent into the frequency separation setup remains in the zeroth order of AO2 (see Fig. 3.6).

35Rohde & Schwarz, SML-01 36Mini Circuits, ZHL-1000 3W

3.3 Vacuum vessel

45

This light is monitored with a photodiode (PD) and the signal is fed back to the current powering the MOPA, in order to stabilize the Raman beams’ power.

3.3 Vacuum vessel
The vacuum system housing the ion trap is all made of stainless steel and consists of an octagon with two conﬂate ﬂanges (CF200) on top and bottom and eight CF63 ﬂanges in the equatorial plane. A schematic drawing is given in Fig. 3.7 (c). A six-way cross is attached to the western CF63 ﬂange and carries an ion pump37, a titanium sublimation pump38 (TSP), a Bayard-Alpert-Gauge39 and an all-metal valve40. Three of the eight CF63 octagon ﬂanges are equipped with inverted viewports41. This enables us-
 to bring lenses close enough to the ions in order to have a good imaging resolution, photon collection eﬃciency and the ability to narrowly focus lasers to individual ions while having the ability to steer or replace the lenses without opening the vacuum can. The other ﬂanges have regular viewports42 attached. The CF200 ﬂange mounted on the bottom side carries two CF40 windows and two CF16 electrical feedthroughs to which the calcium ovens are connected. The CF200 ﬂange atop the octagon provides -
support for the ion trap. Furthermore, it has two CF40 viewports and also a CF16 ﬂange with four electrical feedthroughs for the DC-electrodes (trap tips and compensation electrodes).
After baking the system at a temperature of 350 ◦C for one week the turbopump was detached by closing the all-metal valve. At this time a pressure of 10-10 mbar was measured. Since then the ion pump runs permanently whereas the TSP is used irregularly about once per week. The measurement limit of the Bayard-Alpert-Gauge is 2×10-11 mbar. When the TSP is used every three days, the pressure drops below this limit. Lifetimes of a single trapped ion of up to 13 days (with all lasers oﬀ) have been obser-
ved.

3.4 Magnetic ﬁeld coils and current drivers
To control the magnetic ﬁeld at the trap center two coil pairs are placed symmetrically with an angle of 90◦ in the equatorial plane (see Fig. 3.7 (c)). Though the ratio of their distance (300 mm) and their inner diameter (115 mm) doesn’t fulﬁll the Helmholtz criterium exactly, we expect low gradients at the position of the ions. The coil pair43
37Varian Star Cell, 20 l 38Varian 39Varian, UHV-24 Gauge 40VAT 41Ukaea, fused silica, anti reﬂection coating (Tafelmaier, 397 nm and 720-870 nm) on vacuum side only 42Caburn, fused silica, anti reﬂection coating (Tafelmaier, 397 nm and 720-870 nm) 43Oswald Elektromotoren, copper wire with cross section 2.0 × 1.25 mm2

46

3. Experimental setup

(a) Top view 729 nm
Raman 397 nm
vacuum vessel
397 nm (s+)

Raman 397 nm
N

(b) Side view
W

Trap axis

E

Trap W

E

866/854 nm

729 nm

S

(c) CAD

866/854 nm

W TSP

ion pump

magnetic CCD camera

field

and PMT

397 nm (p) 375/423 nm 729 nm

S

N

E

magnetic

field

Figure 3.7: (a) Schematic top view onto the trap setup. The quantization axis is provided by a small magnetic ﬁeld along SW-NE and most of the laser beams sent to the ions lay within the equatorial plane. Custom made lenses are placed close to the ions by means of three inverted viewports (NW, NE, S). This allows us to focus laser beams tightly, and to achieve a high eﬃciency collecting the ions’ ﬂuorescence. (b) The side view onto the setup shows the two beams sent in through the viewports of the-
 bottom ﬂange in a 60◦ angle with respect to the trap’s symmetry axis. It is a second repumper beam and a laser beam at 729 nm, which typically is used for sideband cooling. (c) Computer aided drawing of the vacuum setup. The TSP and the ion getter pump are mounted to the six-way cross as seen in the back. Two large coils (SW, NE) provide for the magnetic ﬁeld deﬁning the quantization axis. The other coil pair compensates for external magnetic ﬁelds along SE-NW.

deﬁning the quantization axis has 350 windings of copper wire. Sending 1 A through both coils results in a magnetic ﬁeld of 3.4 G. Perpendicular to these a coil pair of 100 windings of copper wire each is used to compensate for external magnetic ﬁelds. In addition, a single large coil (diameter 200 mm) is used to compensate for stray ﬁelds along the direction of gravity.
To set the magnitude and orientation of the magnetic ﬁeld, a single 40Ca+ ion was loaded into the trap. The ambient magnetic ﬁeld was nulled by applying currents to all coils so as to minimize the ion’s ﬂuorescence by varying the current through the ﬁve coils around the trap. After that, the amplitude and the direction of magnetic ﬁeld can be set by changing the current through the pair of coils deﬁning the quantization axis. All coils are powered by home-made current drivers having a relative cur-
rent drift of less than 2 × 10−5 in 24 h. This is achieved by a servo loop with a highly stable resistor44 as reference.

3.5 Optical access and individual ion addressing
Laser light is guided to the ions through seven diﬀerent viewports (see Fig. 3.7). The light for Doppler-cooling, repumping, photoionization and sideband cooling is sent to the ions
44Vishay, VCS 302

Laser intensity (a.u.)

3.5 Optical access and individual ion addressing

729 nm

dichroic mirror

ions

(b)

(a)
telescope lenses

focusing lens

47 3.7 µm

Raman 397 nm

Ion position (µm)

Figure 3.8: (a) Arrangement of the lenses in order to focus light at wavelengths 729 nm and 397 nm through the same focusing lens. A similar setup using a dichroic mirror is used for the imaging port (S) which is simultaneously used for focusing light at a wavelength of 729 nm. (b) Measurement of the intensity proﬁle of the laser beam at 729 nm entering from the southern viewport. For the measurement a single ion was moved witch respect to the position of the laser by changing the tip voltages. At-
 each point Rabi oscillations on a quadrupole transition were recorded with the same laser power. From the π-time we derived the relative laser intensity for eleven diﬀerent tip voltage settings. The ion’s position was measured by observing the shift on the CCD image.

directly by adjusting the output couplers of the optical ﬁbers such that the light is focused at the ions’ position. Typical beams waist are about 100-200 µm, which is a good trade-oﬀ between high enough intensities for the given laser powers, alignment stability and equal illumination of ions for multiple ion crystals.
For the four Raman beams and the light at a wavelength of 729 nm that is sent in within the equatorial plane individual ion addressing should be possible. It is a basic requirement for quantum state tomography and also needed for certain two-qubit gates. Typically, we have to deal with ion distances of 4-5 µm which requires a laser spot size signiﬁcantly smaller, if a Gaussian beam is assumed. For this purpose a lens system was designed that consists of two telescope lenses in order to expand the -
beam. This large and almost collimated beam is then sent through one of the three focusing lenses inside the inverted viewports (see Fig. 3.8 (a)). Ideally the light is focused down to a diﬀraction limited spot size of 1.7 µm (2.9 µm) for light at 397 nm (729 nm). The focusing lens is also used for imaging (see section 3.6). In practice it is quite challenging to adjust the optics properly such that the diﬀraction limit is obtained. So far, only the beam at 729 nm entering from the southern viewpo-
rt has been tightly focused. A single ion was used as a probe and revealed a FWHM resolution of 3.6 µm (see Fig. 3.8 (b)). The ability of single ion addressing for a two ion crystal is demonstrated in section 4.6.
In order to address diﬀerent individual ions lined up in a linear chain, we can either steer the laser beams accordingly or move the ions. In another experiment of the group, the concept of deﬂecting a laser was thoroughly investigated. A number of major disadvantages became evident. First, only electro-optic deﬂectors have proven to be fast and precise

48

3. Experimental setup

enough for the technical implementation. However, these need fast high voltage supply electronics and one deﬂector is needed for each beam. Moreover, the maximum deﬂection angle is rather small whereas at the same time adjustment and focusing gets more involved since these deﬂectors alter the Gaussian modes notably. Last, though the deﬂectors can switch within a few microseconds, experiments have shown that it takes a settling time of more than 200 µs until the optical phase is in a steady state. -
These issues let us conclude that for an experiment, where in the long run more than a single laser beam shall be addressed, a shuttling of the ions by quickly adjusting the two tip voltages while having ﬁxed laser foci seems more attractive. In order to avoid a change of the population in the harmonic oscillator mode, the relative potential of the two tips preferably stays constant during this process such that its curvature of the potential doesn’t change. In a ﬁrst attempt only an adiabatic mov-
ement was considered, where the ion was accelerated slowly compared to the inverse of the lowest trap frequency such that a transfer of energy to the ions’ motional mode is expected to be negligible. Technically this was realized by referencing the electronics providing the diﬀerential tip voltages to a high voltage power supply that provides the axial trapping potential. Analog inputs for setting certain diﬀerent axial trapping positions and the logical inputs, to switch among them during a seque-
nce, are interconnected to the analog and logical output of the experiment control by means of analog and fast logical optocouplers45. The two high voltage outputs are connected to the trap tips with low-pass ﬁlters in between. These have a time constant such that full settling is observed after 40 µs (see section 4.5), which corresponds to roughly 50 axial oscillations of the ions. On one hand the low-pass ﬁlters screen the trap electrodes from high frequency noise heating up the ions. On the oth-
er hand they shield the high voltage electronics from radiofrequency pick-up by the trap’s tip electrodes.

3.6 Fluorescence detection

Light emitted by the ions at a wavelength of 397 nm is collected by a custom-made objective46. Consisting of ﬁve lenses (see Fig. 3.9 (a)), this objective is corrected and antire-

ﬂection coated for the wavelengths 397 nm and 729 nm. Three of the lenses are mounted

outside the vacuum in inverted viewports with a distance of r = 58 mm (ﬁrst lens sur-

face on optical axis) to the ions. The spherical abberation induced by the 6 mm fused

silica window corrected by the lens design. The entrance diameter towards the ions is

d = 38 mm. With these parameters we can calculate the collection eﬃciency of the light

emitted by the ions

dΩ 1

1

1

= 4π 2

1−

1

−

1

+

(

2r d

)2

≈. 40

45Todd P. Meyrath, University of Texas at Austin 46Silloptics, Germany

3.6 Fluorescence detection

49

(a) fused silica inverted viewport

(b)

(c)

ions
vacuum custom lens

to EM-CCD and PMT
air

4.2 µm

pixel size 8 µm Utip = 1500 V 0.327 µm/pixel

Figure 3.9: (a) Schematics of the custom-made lens used to collect ﬂuorescence light for the ion detection with the EM-CCD camera and a PMT. The same type of objective is used to focus light of the wavelengths 729 nm and 397 nm tightly. (b) Ion crystal of two 43Ca+ ions recorded with the EM-CCD camera. The tip voltage was set to Utip = 1500 V which corresponds to an axial trap frequency of about ωax/(2π) = 1.46 MHz and an ion separation of 4.2 µm (c) After deﬁning a region of interest around a sin-
gle ion the pixel counts from a CCD-image were summed up in vertical direction. Small imperfections can be seen on the left side of the peak. These are attributed to imperfect alignment. A least square ﬁt with a sinc-function (solid line) to the data points yields a distance of 2.2 µm from the ﬁrst minimum to the center.

Measurements have shown a 2.2 µm imaging resolution (see Fig. 3.9 (c)) at a wavelength of 397 nm. This enables us to discriminate light emitted from neighboring ions easily (see Fig. 3.9 (b)). The absorptive loss is 4% by the objective and another 6% by a narrow bandpass ﬁlter47 used to suppress stray light leaking to the detection system. As discussed in section 3.5 the same lens is used to achieve small laser spot sizes at the position of the ions for individual addressing.
With a switching box, containing a coated window, a 90 : 10 beam-splitter and a mirror, we can send the light collected by the objective either to a camera or to a photo-multiplier tube48 (PMT) or both of them at the time. In the branch of the PMT, at the place of the image, a variable slit aperture is installed49 to choose a small ﬁeld of view in order to suppress stray light detection. The image plane is about 1.5 m behind the lens which results in a magniﬁcation of 24.5. Unless mentioned otherw-
ise in the text, all experiments were performed with PMT detection. This has foremost the advantage that for state discrimination the data can be directly read out and processed by acquiring a histogram and setting a proper threshold. An example is given in Fig. 3.10. From the observed count-rate, we can distinguish between events, when the ion is projected into the S1/2state where it emits light, and events where the D5/2-state is populated and no ﬂuorescence is observed. By counting the number o-
f events for a total number of measurements N , we determine the probabilities p0 and p1 corresponding to |α|2 and |β|2 of Eq. (2.1). The statistical error in the determination of the state’s population probabilities is also termed

47Semrock, FF01-377/50-23.7-D 48Electron tubes, P25PC, Quantum eﬃciency = 28% at 400 nm 49Owis, Spalt 40

50

3. Experimental setup

Threshold for state discrimination

Counts per 0.5 kcps bin

PMT countrate (kcps)
Figure 3.10: The histogram illustrates the dicrimination of the two electronic states S1/2 and D5/2 of a single 40Ca+ ion by means of a PMT. The ion was prepared in a superposition of the S1/2(mJ = 1/2) and D5/2(mJ = 5/2)-states. For each data point the average ﬂuorescence rate was determined over an interval of 5 ms. The plot shows a total of 3350 measurement results. By setting a threshold at for example 10 kcps, we can distinguish between events, when the ion is projected into the S1/2-state wh-
ere it emits light, and events where the D5/2state is populated and no ﬂuorescence is observed. By comparing the quantities for each of the cases, we determine the probabilities p0 and p1 corresponding to |α|2 and |β|2 of Eq. (2.1).

quantum projection noise ∆pQPN. It depends on the number of measurement repetitions

as

∆pQPN =

pk (1 − pk) . N

(3.6)

This state discrimination scheme works also for multiple ions, where for each set of mea-

surement the probabilities pk to observe k ﬂuorescing ions are estimated.

For experiments with more than one ion the camera brings in the advantage of individual ion detection. The camera used is a Electron Multiplying Charge Coupled Device (EMCCD) camera50. By making use of an extra ampliﬁcation register this technology oﬀers single photon detection sensitivity and suﬃciently short exposure times (∼5 ms). This comes at the overhead of additional complexity since the camera is controlled by an additional computer which takes care of the communication with the camera and-
 the image evaluation. This action has to be synchronized with the experiment control computer.

At this stage, the camera was mainly used to determine the number of ions loaded and to see that they are properly cooled and form a Coulomb crystal.

3.7 Experiment control and radiofrequency pulses
Most of the systems proposed for QIP need modulated electromagnetic waves. In the case of trapped ions this necessitates the control of the frequency and phase of certain laser
50Andor , Ixon DV885JCs-VP, Pixel size 8 × 8 µm, Quantum eﬃciency at 397 nm is 37%

3.7 Experiment control and radiofrequency pulses

51

Camera PC

LabView Camera Control Matlab evaluation

power line
trigger

Andor Bus
EM-CCD Camera

TCP/IP

TCP/IP

VFS Python server 8 logic inputs 16 logic outputs
2 rf outputs

Control PC
DIO64

PCI 6703

PCI 6711
LabView Matlab evaluation

GPIB CAN

detection gating ion shuttle
rf switch network

mechanical shutters cavity piezos, laser
intensities, etc. PMT
signal generators ISEG HV source
AOM 729 nm Raman AOMs
Microwave

Figure 3.11: The experiment is controlled by a software written in LabView running on two Windows PCs. One controls the EM-CCD camera (Camera PC) including data acquisition and evaluation. The other one controls the remaining hardware of the experiment, collects data from the Camera PC and the PMT and programs the versatile frequency source (VFS) which is triggered by the AC power line and autonomously provides all radiofrequency and digital signals in the pulsed mode (see section 4.2) . The sketc-
h shows the diﬀerent hardware components and their interconnections with diﬀerent bus systems.

light ﬁelds. This is achieved by the use of AOM’s, which directly transfer frequency and phase information from the radiofrequency to the optical domain, with a high bandwidth. In this way, the problem is reduced to the generation of precisely timed digital signals (e.g. switching of lasers, trap potentials, etc.) and the generation of various phase-coherent and amplitude-shaped radiofrequency pulses. For this purpose a versatile frequency source [104, 105] was developed. Its working principle is -
based on a direct digital synthesis microchip controlled by a ﬁeld-programable gate array (FPGA). It has two separate radiofrequency outputs that can deliver up to 16 diﬀerent frequencies in each experimental cycle and allows for phase coherent switching between those frequencies. Amplitude shaping of the radiofrequency pulses is achieved by means of a variable-gain ampliﬁer that is also controlled by the FPGA. Typically, the radiofrequency pulse lengths are in a range from 1 µs up to 100 ms. In a-
ddition, the versatile frequency source has 16 logic channels (TTL) with a timing resolution of 10 ns. These are used in combination with a network of radiofrequency switches, ampliﬁers, attenuators and mixers to send the radiofrequency pulses individually or combined to the double pass AOM controlling the frequency of the laser at 729 nm, to the AOM’s controlling the frequency diﬀerence of the Raman light ﬁelds or as direct microwave source at 3.2 GHz. The frequency output is limited to values be-
low 310 MHz. Higher frequencies are achieved by proper mixing and ﬁltering. The frequency resolution is about 0.1 Hz. The versatile frequency source runs a Python51-server and is connected to the experiment control computer by ethernet network cable. It is

51High-level programming language

52

3. Experimental setup

programmed before each experimental sequence. The box is armed by a trigger signal of the experiment computer. Each experiment is then started through a trigger pulse coming from the power line trigger and so every experiment is synchronized to the AC power line’s phase. Both of these trigger signals are connected to one of the eight logical inputs of the versatile frequency source that can also be used to branch sequences depending on an input acquired during each experiment.
The versatile frequency source and the other hardware of the experiment is controlled by a computer using software written in Labview52. There are a number of diﬀerent interfaces to the experimental hardware. Readout of PMT data is performed with a fast counter input card53. Analog outputs are mainly controlled by a 16 channel analog interface PCI card54 and digital outputs that have not to be switched within a sequence are connected to a fast digital input and output card55. Some of the signal ge-
nerators are computer-controlled via a GPIB-bus56. The high voltage source providing the tip voltage57 is connected by CAN-bus58 to the control PC. Figure 3.11 shows the diﬀerent hardware components and their interconnections.

52Programming language by National Instruments 53National Instruments, PCI 6711 54National Instruments, PCI 6703 55United Electronic Industries, DIO 64 56IEEE-488, short-range, digital communications bus 57ISEG, EHQ F020p, up to 2 kV with ripples < 10−5 58Controller Area Network, serial bus standard

4 Experimental techniques
This chapter explains the fundamental techniques and concepts applied in our experiments with trapped calcium ions. Some of them such as the compensation of excess micromotion and the measurement of heating rates are used to further characterize the new experimental setup. Most others are part of a daily experimental routine or hint at future options. The topics are arranged in a natural order reﬂecting their temporal order in the stage of setting up the experiment.
4.1 Trap loading by photoionization
Loading ions into the trap is one of the most basic experimental requirements. Most ion trapping experiments have in common that the traps are loaded from a ﬂux of neutral atoms, which are ionized within the trap volume. Ideally, the atom ﬂux is conﬁned to a small region, such that the trap electrodes are not contaminated, which could lead to small changes in the patch potentials. Moreover, an eﬃcient ionization process helps to reduce the neutral atom ﬂux and associated contaminations. For this p-
articular experiment we want to choose between loading 43Ca+ and 40Ca+ ions.
These requirements are met by an isotope-selective two-step photoionization [95, 106]. The ﬁrst transition from the ground-state 4s 1S0 to the excited state 4p 1P1 in neutral calcium (line width 2π×35 MHz) is driven by an external cavity diode laser in Littrow conﬁguration at 423 nm1. Its frequency is monitored by saturation spectroscopy (see Fig. 4.1 (a)+(b)) on a calcium vapor cell held at a temperature of 300 ◦C. The cell was ﬁlled once, evacuated with a roughing pump while heated to about 400 -
◦C; then the valve was closed and the pump was detached. The cell has been in continuous operation for more than two years now. In order to adjust the frequency for the diﬀerent isotopes, we use a wavelength meter2 with a resolution of 10 MHz. The second excitation step connecting the 4p 1P1-state to continuum states requires light with a wavelength below 389.8 nm (see Fig. 4.1 (c)). In our experiment this is accomplished by a free-running laser diode at 375 nm3. The two beams
1Toptica DL-100, Nichia laser diode, 30 mW 2Toptica WS-7 3Nichia, 5 mW

54

4. Experimental techniques

(a) window

heater

valve

window

(b)

(c) Continuum

probe
423 nm 375 nm

apperture

calcium thermal granules insulation PBS

PBS DL

pump

DL

PD

l/2

423 nm l/2

375 nm

PBS

~ 2 GHz peak

4p1P1 4s1S0

Figure 4.1: (a) Setup of the photoionization lasers and the Doppler-free saturation spectroscopy. The calcium vapor cell is kept at 300 ◦C. Two cold apertures prevent the vacuum windows from being coated with calcium atoms. (b) Typical photodiode signal derived from the saturation spectroscopy on neutral calcium atoms. The peak in the middle has a width of about 35 MHz. The FWHM of the whole proﬁle is given by the Doppler-broadening of about 2 GHz at 300 ◦C. (c) Energy level scheme for the two ste-
p photoionization of neutral calcium as used in the experiment. The ﬁrst stage at a wavelength of 423 nm can be used for isotope selection. The shift for the various isotopes on this transition is given in Tab. 4.1.

are superimposed on a polarizing beam splitting cube4 and then sent through a singlemode glass ﬁber5 to the experiment, where the light is focused at the trap center by the output coupler of the glass ﬁber. 50 µW light power at a wavelength of 423 nm is suﬃcient to achieve saturation on the ﬁrst stage (beam waist ∼ 100 µm). Higher intensities do not increase the loading rate but instead decrease isotope selectivity due to power broadening. Thus, the bottle neck of the process is the light power av-
ailable for the second stage. Typically, we use 500 µW of light power at 375 nm. To demonstrate that a coherent light source is not required we have also tested a light emitting diode (LED)6 for the second stage. The LED was emitting about 2 mW light power in a spectrum of 370-390 nm and provided good loading rates for slightly higher currents as for the laser. Since the emitting surface and angle are rather large the major challenge with the LED is to get enough light intensity inside the small t-
rap volume.
The ﬂux of neutral calcium atoms is provided by a home-build oven construction. It consists of an 8 cm stainless steel tube that is connected to the end of an electric feedthrough of the bottom ﬂange. A tantalum square is spot-welded to the middle of the tube, which is then connected to another electrical feedthrough. The lower part of the tube contains metallic calcium granules. By adjusting the electric current over this lower part of the stainless steel tube, calcium can be easily heated to sev-
eral hundred degrees Celsius. At temperatures slightly below 300 ◦C the neutral atom ﬂux through the trap volume is high enough to achieve loading rates of about one ion per second.
Two of these ovens are built into the vacuum vessel, one of them being ﬁlled with natural metallic calcium granules. It is used to eﬃciently load 40Ca+ ions. Another oven contains
4Lens Optics 5Oz Optics, QSMJ-A3A-400-3/125 6Roithner Lasertechnik, UVLED380-10, directivity 10◦

4.1 Trap loading by photoionization

55

Mass number 40 42 43 44 46 48

Natural abundance 96.9% 0.647% 0.135% 2.09% 0.004% 0.187%

Enriched source 12.8% 0.7% 81.1% 5.4% <0.1% <0.1%

Isotope shift 0 MHz
393.5(2) MHz 611.8(3) MHz 773.8(3) MHz 1159.8(7) MHz 1513.0(4) MHz

Table 4.1: The table shows the fraction of diﬀerent isotopes for a natural source of calcium and a 43Ca enriched sample that is used in a second oven. In addition, the isotope shifts occurring in the ﬁrst stage of the photoionization scheme are given relative to the transition of 40Ca [107].
approximately 5 mg of metallic 43Ca+ isotope-enriched metal granules7. Table 4.1 shows the fractions of diﬀerent isotopes in each of the ovens and the isotope shift on the ﬁrst stage of the photoionization scheme.
At the time when the experiment was set up it was unclear whether the isotope-selectivity due to the transition frequency diﬀerences of the photoionization’s ﬁrst stage was high enough to reliably load 43Ca+, which is of higher importance the larger the ion crystals get. From the relative occurrence of 40Ca and 43Ca in a natural source it was concluded, assuming a Lorentzian line shape, that the relative loading rate for 43Ca+ ions compared to other isotopes is only about 50%. Meanwhile it has bee-
n shown though, that by the proper choice of cooling laser frequencies the selectivity from a natural source can be largely enhanced [106, 108]. A problem that then still remains is isotope replacement by bombardment with neutral atoms due to charge-exchanging collisions. Therefore, in particular when larger ion crystals of a rare isotope are needed, it still makes sense to use an enriched source.
The appearance of ions in the trap is usually monitored by means of the EM-CCD camera with the experiment operated in a continuous mode where all lasers powers, frequencies, etc. can be adjusted manually. In case of 40Ca+ ions, only the laser ﬁelds at 866 nm and 397 nm are required to observe a ﬂuorescence signal. We usually set the loading rate to about one per 20 s. Larger crystals are obtained by waiting for the right number of ions to appear. It happens often that instead of a single ion two o-
r even three are loaded simultaneously. Unfortunately, we can only eject all of them at the same time by switching oﬀ the radiofrequency conﬁnement and have to start loading again if we need a smaller number. After loading the continuous mode is used to optimize the ﬂuorescence signal and to set proper conditions for Doppler-cooling, detection, etc.
In order to load ions for the ﬁrst time and to improve on the signal-to-noise ratio of the
7Oak Ridge National Laboratory

56

4. Experimental techniques

Doppler-cooling optical pumping
397 nm 397 nm (s+)
866 nm 854 nm 729 nm
PMT

sideband cooling

detection

quantum state engineering

0 ms

3 ms

time

10 ms

Figure 4.2: Typical sequence of laser pulses for experiments performed in the pulsed mode. The ﬁve building blocks of the pulsed mode are indicated on top. Usually these sequences are repeated 50, 1000 or 200 times for each setting.

imaging system it is helpful to operate the experiment in a diﬀerential mode. Here the cooling laser at a wavelength of 397 nm illuminates the ions continuously whereas the laser at 866 nm is switched on and oﬀ at a rate of 20 Hz. In the absence of this laser the ions are immediately pumped into a dark state and stop to ﬂuoresce. By subtracting the ﬂuorescence signal for the time the laser at 866 nm is oﬀ from the signal when it is on, we are able to get rid of a possible stray light oﬀset caused -
by the cooling laser at a wavelength of 397 nm. Light at 866 nm is eﬃciently ﬁltered and cannot leak towards the PMT and camera. Ion signals as small as 1000 counts per second have been observed on a background which was 400 times higher. Moreover, with this method we can directly optimize the signal-to-noise ratio of the detection by adjusting laser powers, polarizations and the slit aperture in front of the PMT. For 40Ca+ ions, the signal-to-noise ratio is typically between 100 and 200. In case -
of 43Ca+ ions it is ranging between 30 and 70 due to the higher laser powers required and smaller ﬂuorescence count rate (see subsection 6.1.1).

4.2 Pulsed mode
After the laser frequencies and powers are set properly in the continuous mode, we switch to a pulsed mode which consist of ﬁve basic building blocks. These shall be brieﬂy discussed for 40Ca+ ions as an example:
1. Doppler-cooling: A slightly red detuned laser on the S1/2 ↔ P1/2 transition (397 nm) causes the ions to ﬂuoresce and leads to Doppler-cooling. A laser on the transition D3/2 ↔ P1/2 (866 nm) prevents pumping into a dark state. After 3 ms the ions have a mean vibrational quantum number between about 5 and 20.
2. Optical pumping: A short pulse with a σ+-polarized laser on the S1/2 ↔ P1/2 transition in combination with light at 866 nm and 854 nm transfers the population into S1/2(mJ = 1/2).

4.3 Compensation of excess micromotion

57

3. Ground-state cooling: A certain motional mode can be cooled to the ground-state by tuning a narrow bandwidth laser to the red sideband of the transition S1/2(mJ = 1/2) ↔ D5/2(mJ = 5/2) (729 nm). For every state transfer from S1/2 to D5/2 one motional quantum can be taken away from the ions. By simultaneously exciting the transition D5/2(mJ = 5/2) ↔ P3/2(mJ = 3/2) (854 nm) the population is pumped to the P3/2(mJ = 3/2)-state from where a decay back to S1/2(mJ = 1/2) takes the entropy away. After-
 7 ms enough photons are scattered and the ion is cooled to the ground state. The small leak of this cooling cycle due to the ﬁnite decay probability from the P3/2-state to the D3/2-state is closed by introducing a few steps of optical pumping.
4. Laser spectroscopy/quantum state engineering: With the ions prepared in the motional ground-state and initialized to a distinct electronic state we can start probing the S1/2 ↔ D5/2 quadrupole transition or implement a pulse sequence to realize a certain protocol for QIP.
5. State discrimination: Finally, the lasers at 397 nm and 866 nm are switched on for a few milliseconds and the ﬂuorescence is detected either by a PMT or an EM-CCD camera. We can discriminate only between the S1/2 and the D5/2 levels in this step. Population of other levels can be measured by including appropriate transfer pulses into the step prior to the detection.
The temporal switching of the diﬀerent lasers involved is sketched in Fig. 4.2. Typically, such an experimental cycle is repeated between 50 and 200 times with the same setting to acquire enough statistical signiﬁcance for the measured probability values. This is what we refer to as a single measurement or data point. For the observation of Rabi oscillations on a certain transition, the quantum state engineering would consist of a single laser pulse whose length is increased for every subsequent d-
ata point. An example is given in Fig. 6.4 (a).
For 40Ca+ ions, a more detailed description of the pulsed scheme can be found in the references [89, 96]. For 43Ca+ ions, the same ﬁve building blocks apply but the laser scheme used on each of them is quite diﬀerent and a detailed discussion is given in chapter 6.

4.3 Compensation of excess micromotion
External forces due to electric ﬁelds from the environment but also from geometric imperfections of the trap construction can shift the ions away from the radiofrequency zero line. As a result the ions experience an oscillating electric ﬁeld of the trap drive and start moving with amplitudes that can easily exceed a wavelength of the cooling laser. This gives rise to Doppler-shifts leading to a number of negative consequences, among which

58

4. Experimental techniques

carrier

axial sideband

radial sideband

1.2 MHz

2.2 MHz

Laser frequency detuning (MHz)
Figure 4.3: Spectrum around the carrier transition S1/2(mJ = −1/2) ↔ D5/2(mJ = −3/2) with a 6 MHz span and a resolution of 10 kHz recorded at a magnetic ﬁeld of about 3.5 G. Axial sidebands occur at relative frequencies of ωax/(2π) = 1.2 MHz from the carrier. The radial sidebands are separated by ωr/(2π) = 2.2 MHz from the carrier. The arrows indicate these frequency separations. Some of the lines in the spectrum can be identiﬁed as higher order sidebands.

are a decrease in Doppler-cooling eﬃciency, shortening of the life time of ions in the trap, second order Doppler-shifts as well as AC-Stark shifts leading to errors in high accuracy studies, etc. As a driven motion it cannot be cooled.

A steady state solution to the optical Bloch equations taking into account the Doppler-

eﬀect caused by micromotion [97] results in a probability of the upper level populations

of

P

∝

Ω2

∞ n=−∞

(∆ω

+

Jn2(β) nΩrf)2 +

(Γ/2)2

,

(4.1)

where Ω is the carrier Rabi frequency for the ion at rest, Γ is the line width of the transition

and ∆ω is the detuning between the laser frequency ωL and the atomic transition frequency. For the S1/2 ↔ P1/2 cooling transition we are typically in a regime where ΩSP ≤ ΓSP . An increasing modulation index β eﬀectively broadens the transition line width and leads to

a rise of the Doppler-temperature

TD

=

ΓSP 2kB ωL

where kB is the Boltzmann constant. Particular values of β can even lead to changes of the line structure such that heating of the ions occurs in situations where cooling is expected.

For the quadrupole transition we have ΩSD ΓSD. Therefore, with an increase in β the spectrum develops sidebands at multiples n of the trap drive frequency Ωrf. By probing the coupling strength of these micromotion sidebands, we have a very sensitive method to measure the modulation index β.

When spectroscopy on the quadrupole transition was performed in this new experiment for the ﬁrst time, neither the magnetic ﬁeld inside the trap was known well nor was the laser

4.3 Compensation of excess micromotion
(a)
Modulation index b = 2.335

59 (b)
Linear fit: 19.6 V + 0.02 ´ Utip Horizontal electrodes

Linear fit: -32.7 V - 0.055 ´ Utip

Figure 4.4: (a) Measurement of the micromotion modulation index β using a single 40Ca+ ion with a beam entering from the southern viewport. The relative coupling strengths Ω(n) of spectral components separated by exactly the trap drive frequency Ωrf = 25.483 MHz are mapped out by driving Rabi oscillations on these transitions with the same laser power. The result can be understood in a picture of phase modulation caused by the Doppler-eﬀect. Then the strength of the nth sideband component is descr-
ibed by the Bessel function Jn(β) and a modulation depth β. A ﬁt with this model given by the striped bars matches the measurement data and yields a modulations depth of β = 2.335. (b) Measurement of the compensation voltages in horizontal and vertical direction for diﬀerent tip voltages Utip. The non-zero yintercept of the linear ﬁts are attributed to electric stray ﬁelds present at the trap center. The dependence on the tip voltages is attributed to small geometrical imperfections in the trap el-
ectrode alignment.
frequency exciting the quadrupole transition known precisely enough to address a certain transition. Even for a single 40Ca+ ion there is a huge number of spectral components, including the ten carrier transitions and their axial, radial and micromotional sidebands, and the sidebands thereof (see Fig. 4.3). Since the secular trapping frequencies could only roughly be estimated at that time the only frequency known exactly was the trap drive frequency Ωrf, which determines the frequency separation -
of the micromotion sidebands. Therefore, in a ﬁrst set of measurements we recorded excitation spectra of a single 40Ca+ ion over tens of MHz (similar to the one shown in Fig. 4.3) with the beam entering from the southern viewport (see Fig. 3.7). Driving Rabi oscillations on the strongest spectral component found and the ones separated by multiples n of Ωrf, we mapped out the coupling strengths Ω(n). The result is depicted in Fig. 4.4 (a). It turned out that the strongest spectral component wasn’t -
actually the carrier but the ﬁrst micromotion sideband with n = 1. According to Eq. (4.1) the coupling strength of the nth micromotion sideband is proportional to the Bessel functions Jn(β), analogous to the modulation implied by an electric phase modulator to a monochromatic laser beam. A ﬁt for this set of data yields a modulation index of β = 2.335. In order to reduce β to possibly small values we ﬁrst increased the coupling strength on the carrier and then maximized the ratio between the coupl-
ing strength on the carrier with respect to the ﬁrst sidebands by changing the voltage applied to the vertical compensation electrode. As a typical result we obtain ratios

60

4. Experimental techniques

of Ω(0)/Ω(1) = 100, which corresponds to a modulation index of β = 0.02. This procedure was repeated in order to compensate for the other direction with a beam entering from the bottom viewport. As a result the amplitude of the ion’s micromotion is reduced to uˇmm = λ β/(2π) < 2.3 nm. This compares to a /(2M ωr) 6.1 nm radial spread of the calcium ion’s wave function when cooled to the motional ground state, assuming a radial COM mode trapping frequency of ωr/(2π) = 3.4 MHz. A possible limitation -
set to the compensation of excess micromotion in the radial direction is caused by slightly diﬀerent radiofrequency phases on the two blade electrodes. Then the node of the radiofrequency ﬁeld shifts as a function of time. As a consequence, there is no point in space where the radiofrequency ﬁeld completely vanishes. Along the axial direction, the fact that the blades have a ﬁnite width comes into play and makes the radiofrequency ﬁeld not truly two-dimensional but exhibiting a small curvature alo-
ng the symmetry axis of the linear trap. A single ion can then still be shifted to the ideal position by unbalancing the tip voltages, but strings of ions will exhibit micromotion along the trap axis.
Finally, we repeated the compensation at diﬀerent settings for the tip voltages and found a slight change of the compensation voltages (see Fig. 4.4 (b)). This dependence can be understood when a small displacement of the tip electrodes from the trap axis is assumed. The fact that both ﬁts have a non-zero y-intercept is attributed to electric stray ﬁelds that can change over time for instance by calcium depositions on the electrodes and ceramic pieces nearby the trap center.

4.4 Referencing the laser at 729 nm to the ions and monitoring of the magnetic ﬁeld
The setup of the laser emitting at a wavelength of 729 nm and its spectral properties are described in subsection 3.2.2. In order to make use of the laser in the context of quantum computation but also for precision spectroscopy it is necessary to know the laser’s frequency relative to the atomic transitions involved and compensate for the drift of the laser’s reference cavity. This has been achieved by taking either 43Ca+ or 40Ca+ ions as a reference. For this purpose we single out two of the man-
y diﬀerent possible S1/2 to D5/2 quadrupole transitions. By measuring the two transition frequencies and from the knowledge of the frequency splitting of the involved levels at certain magnetic ﬁelds, we can infer the relative laser frequency and the magnetic ﬁeld. With this knowledge the feedback to the laser frequency can be made independent of small variations of the energy levels caused by the Zeeman eﬀect. In case of 43Ca+ though, the nonlinear behavior of the energy splitting of the D5/2-sta-
tes with respect to the magnetic ﬁeld (see chapter 5) can lead to ambiguities and poor discrimination. These problems can be easily avoided by the right choice of transitions probed for a speciﬁc magnetic ﬁeld.

4.4 Referencing the laser at 729 nm to the ions and monitoring of the magnetic ﬁeld 61

The frequency measurements are realized in the pulsed mode of operation as described in section 4.2. Usually sideband cooling is omitted and two transitions are probed from the stretched state which is initialized by optical pumping. The actual frequency measurement is then achieved by applying a Ramsey scheme. A π/2-pulse creates a superposition of the two levels that are probed, then a waiting time τR and last another (π/2)φ-pulse are applied. In a ﬁrst measurement the last pulse is applied with-
 a phase φ1 = π/2 and then in a second one with φ2 = 3π/2. After each Ramsey experiment, we determine the population of the involved Zeeman states by the state discrimination technique described in section 3.6 and obtain two probability values pφ1 and pφ2 of the D5/2-state population. Each of these sequences is typically repeated a hundred times.

The frequency diﬀerence between laser and the probed transitions of the ion follows from the measured probability values as

∆ν/(2π) =

1

arcsin pφ1 − pφ2 ,

2π(τR + 2 τπ/π)

pφ1 + pφ2

where we make use of an eﬀective Ramsey time (see Appendix B) and τπ is the time it takes to drive a π-pulse with the chosen laser power. Typically τπ is set to values by a factor 10 smaller than τR. From the frequency diﬀerence ν1 − ν2 we ﬁrst calculate the magnitude of the magnetic ﬁeld inside the trap. With the knowledge of the magnetic ﬁeld and one transition frequency we then determine the transition frequency at zero magnetic ﬁeld as a reference for other transitions.

This measurement procedure including the evaluation is fully automated and the measurement of the two transitions takes about 25 s. Typically, a complete set of measurements is repeated every one to two minutes using Ramsey times τR between 0.2 and 1 ms, depending on the magnetic ﬁeld sensitivity of the transitions involved and the accuracy required.

The squares in Fig. 4.5 (a) represent 378 of these measurements taken over an interval of more than four hours. Here, a single 43Ca+ ion was initialized to the Zeeman state S1/2(F = 4, mF = 4) from which the two transitions to the states D5/2(F = 4, mF = 2) and D5/2(F = 4, mF = 4) were probed with a Ramsey time of τR = 0.2 ms. The times τπ for performing a π-pulse were set to 19 µs and 10.6 µs, respectively. A linear ﬁt to the measurement data reveals an average reference cavity drift rate of 0.6 -
Hz/s. In order to keep the laser frequency output stable over time we estimated the reference cavity’s drift between the measurements from a polynomial ﬁt to the last couple of data points. We use this extrapolation as a feedback to the signal generator that controls the high frequency AOM (AO2 in Fig. 3.4). The circles in Fig. 4.5 (a) represent these predictions. Their diﬀerence to the actual measurements is depicted as histogram in Fig. 4.5 (b). Of the 52 Hz standard deviation of the Gaussian ﬁt-
 shown as solid line 19 Hz are attributed to quantum projection noise (see Eq. (3.6)) which could be further reduced by increasing the

62 (a)

4. Experimental techniques (b)

Figure 4.5: Measurement of the frequency drift of the 729 nm laser’s reference cavity relative to a single 43Ca+ ion. (a) The squares represent 378 measurements taken over more than 4 h measurement time with Ramsey experiments where the waiting time was set to τR = 0.2 ms. The circles are our best guess during the experiment for the next measurement outcome derived from a polynomial ﬁt before each measurement. The diﬀerence between the two is plotted in (b) as a histogram. The Gaussian ﬁt given as-
 solid line exhibits a standard deviation of 52 Hz.
number of the measurements and their accuracy by an increase of the Ramsey times τR. Here the coherence time of a few milliseconds sets an upper boundary for robust operation. A further limitation is the actual drift of the laser’s reference cavity. As soon as the cavity drift becomes nonlinear the predictions start getting poorer.
The measurement outcome for the magnetic ﬁeld is shown in Fig. 4.6 (a). A linear ﬁt to the measurement results reveals an average magnetic ﬁeld drift rate of 64 µG/h. Similar to what is done for the frequency of the reference cavity, we also make a prediction for the magnetic ﬁeld expected for the next measurement by a linear extrapolation of the last couple of data points. These predictions are plotted as circles in the graph. The inset of Fig. 4.6 (a) shows the diﬀerence between the measurements-
 and the predictions as a histogram. A Gaussian ﬁt with a standard deviation of 53 µG describes the distribution well. Here, quantum projection noise contributes with 16 µG to the deviation. At the moment we do not use the prediction for the magnetic ﬁeld in order to actively feed back to the current driver supplying the magnetic ﬁeld coils. Instead we recalculate all relevant transition frequencies that are used accordingly.
All Ramsey measurements were carried out with a ﬁxed phase relation φac relative to the 50 Hz AC power line, i.e. each experiment is started by a line trigger pulse. Figure 4.6 (b) shows the change of the magnetic ﬁeld at the trap center with the phase φac. Magnetic ﬁeld components at 50 Hz that have a ﬁxed phase relation to the AC power line exhibit an amplitude of 1.6 mG. Additional tests with a ﬂuxgate magnetometer8 and measurements of the coils’ current spectrum strongly support the hypothesis-
 that the 50 Hz magnetic
8Stefan Mayer Instruments, Fluxmaster

4.5 Heating rate, shuttling the ions and motional coherence

63

(a)

(c)

(b)

1.6 mG

Realtive phase fac to ac power line (deg)
Figure 4.6: Measurement of the magnetic ﬁeld at the trap center by probing two quadrupole transitions of a single 43Ca+ ion. (a) The squares represent 378 measurements recorded over more than 4 h. A linear ﬁt results an average drift of 64 µG/h. The circles are our best guess during the experiment for the next measurement outcome derived from a linear ﬁt to the last few data points before the measurement. The inset (b) plots the diﬀerence between the two as a histogram. The Gaussian ﬁt is characte-
rized by a standard deviation of 53 µG. (c) All experiments are carried out at a ﬁxed phase φac with respect to the 50 Hz AC power line. Changing the phase φac reveals the magnetic ﬁeld noise components at 50 Hz that have a ﬁxed phase relation to the AC power line. These are most likely caused by transformers and other parts of the apparatus.
ﬁeld components are mainly caused by transformers and other lab equipment part of the apparatus. The results shown in panels (a) and (b) of Fig. 4.6 were taken at a diﬀerent magnetic ﬁelds. However, both graphs are scaled to have the same spread along the y-axis. Thus, it becomes immediately obvious, that the magnetic ﬁeld variations within 20 ms are much larger than changes over hours when the phase φac is kept constant. As a result all experiments reported in this thesis are performed with φac b-
eing ﬁxed. Since some of the transitions used exhibit a magnetic ﬁeld sensitivity as high as 2.8 MHz/G, transition frequency changes of more than 4.5 kHz have to be taken into account over the course of a pulse sequence. An active compensation or a passive shielding could help to get rid of this problem.
4.5 Heating rate, shuttling the ions and motional coherence
A critical parameter of an ion trap is the heating rate of the ions’ motional degrees of freedom due to electric ﬁeld noise from the trap electrodes. As most current quantum gates rely on the coupled motion of two or more ions, the motional quantum state needs to be controlled to a degree dependent on the actual scheme. Noise in the motion can degrade this control and lead to a decrease in gate ﬁdelities.
One method to access the heating rate is to cool a single ion close to the motional groundstate of the axial mode. Assuming a thermal state, the mean population of the axial mode

64

4. Experimental techniques

Figure 4.7: The heating rate of the axial COM mode at a trapping frequency of ωax/(2π) = 1.2 MHz was measured using a single 40Ca+ ion cooled close to the motional ground-state. Probing the excitation on the red and the blue axial sideband we infer the population of the motional mode by the ratio given in Eq. (4.2). By introducing and varying a waiting time before the probe pulses we can measure a slow increase of the population. The plot shows two sets of data taken with an 11 month pause in betw-
een. A linear ﬁt to both data sets with a zero y-intercept reveals a heating rate of about one motional quantum in 390(20) ms.

n¯ax can be measured by comparing the excitation of a red sideband prsb with excitation on the blue sideband component pbsb (see Fig. 6.3 (a)) of the same transition [109]

n¯ax

=

prsb . pbsb − prsb

(4.2)

By introducing and varying a waiting time between ground-state cooling and the measurement of motional state population we have mapped out the increase of n¯ax as a function of this time (see Fig. 4.7). From a linear ﬁt to the data, we obtain a heating rate of one motional quantum in 390(20) ms at an axial trapping frequency of ωax/(2π) = 1.2 MHz which is one of the lowest values ever reported.

In section 3.5 we have discussed the advantages of addressing diﬀerent individual ions with various lasers by moving the linear ion crystal along the trap axis. We can quickly imbalance the tip voltages such that the ions move along the symmetry axis of the trap without changing the actual axial trapping frequency. As described in section 3.5, our tip voltage control electronics allows us to add an input voltage signal to one of the tip voltages and subtract it from the other. By using a signal ge-
nerator with a rectangular output pattern of an amplitude of ±10 V we can shift the ions over a distance of 10 µm for an average tip voltage of 1000 V. The shuttling distance was measured by observing the movement on the EM-CCD camera image. The imaging magniﬁcation was calibrated using the known inter-ion distance of a two-ion crystal where the axial COM mode trapping frequency was known (see Eq. (3.5)). Camera pictures of the ions were taken with an acquisition time of 20 ms, which is about thre-
e orders of magnitudes larger than the time the shuttling is expected to take. Setting the signal generator to a frequency of 1 kHz the single ion occurs at two sites on the EM-CCD image and no ﬂuorescence is observed

4.5 Heating rate, shuttling the ions and motional coherence

65

(a) Pulse sequence

(c)

p/2 p move wait move wait p p/2

carrier bsb ions 200 µs ions 200 µs bsb carrier

time

(b) Evolution in Hilbert space

p/2

p

carrier

bsb

shuttle ions

p

wait 200 µs

bsb

shuttle ions

wait 200 µs

(p/2)f carrier

Figure 4.8: (a) Pulse sequence that describes a Ramsey phase experiment where the coherence of the two lowest motional quantum states is probed. (b) A superposition of those is prepared by a π/2-pulse on the carrier followed by a π-pulse on the blue sideband. Then the ion is moved over a distance of 10 µm and a waiting time of 200 µs is introduced. Then the ion is shuttled back and after another waiting time of 200 µs the superposition is analyzed by applying another π-pulse on the blue sideband a-
nd a (π/2)φ-pulse on the carrier. Below is a step-wise illustration of the evolution in the Hilbert space. (c) Measurement results (•) of the Ramsey phase experiment where the phase φ of the last laser pulse is scanned. Also shown are the results from a reference experiment ( ) were the movement of the ion was omitted. From the data we can conclude that neither amplitude nor the phase of the fringe pattern is aﬀected by the shuttling.

from in between. Only if we increased the frequency to above 30 kHz ﬂuorescence was also observed between the two extremal ion sites. Here, the two low-pass ﬁlters prevented the two tip voltages being interchanged fast enough such that the amplitude of the movement decreased. Measurements with two 40Ca+ ions have shown that full settling was achieved after 40 µs. This value corresponds to about 50 oscillations of the ions along the axial direction.

To see if the population of the axial COM mode is aﬀected by this shuttling we performed a Ramsey phase experiment on the two lowest motional states. A single 40Ca+ ion was

initialized to the motional ground-state of the axial mode by sideband cooling. A π/2-

pulse

on

the

transition

from

S

≡

S1/2(mJ

=

1/2)

to the √

D

≡

D5/2(mJ

=

1/2)-state

creates a superposition state of the form (|S0 + |D0 )/ 2. With an additional π-pulse on

the blue sideband of this transition we mapped the superposition of the electronic state √
to the motion and created (|D0 + |D1 )/ 2. Then we moved the ion over a distance of

10 µm along the trap axis. After a waiting time of 200 µs we shuttled the ion back and

waited another 200 µs. In order to probe the coherence we repeated the ﬁrst two pulses in

reverse order and scanned the phase φ of the last carrier pulse to observe a fringe pattern.

In addition we recorded a reference measurement where the ion was not moved. The

pulse sequence, a sketch of the Hilbert space and the measurement results are shown in

Fig. 4.8. Within the accuracy of the measurements both data sets reveal the same fringe

66

4. Experimental techniques

amplitude and no phase shift in the Ramsey pattern is observed. This lets us conclude that the motional coherence is not aﬀected by the movement and that the population of the motional quantum state is unperturbed by the shuttling.

4.6 Individual ion detection, addressing and addressing error correction
To get the maximum information out of each measurement when working with more than one ion, it is necessary to discriminate ﬂuorescing ions from the dark ones. Individual ion detection can be achieved using the EM-CCD camera by deﬁning a region of interest around each of the ions’ images. Two reference pictures are taken, one with all ions dark (omitting 866 nm laser during detection) and another one with all ions ﬂuorescing. For the actual measurement we collect photons for 5 ms to 20 ms, then an-
 evaluation software on the camera PC compares each ion’s region of interest with the reference pictures and decides whether it is considered to be bright or dark and sends this information to the experiment control PC. The whole process is technically quite a bit more demanding than the PMT detection. Thus, the measurements presented here are more about proving the basic working principles for the new setup than demonstrating the ultimate performance.
Arbitrary quantum operations with many qubits require that interactions on individual qubits can be implemented to make the particles distinguishable. In ion trap quantum computing this is equivalent to limiting the laser ion interaction to one ion at the time which can be achieved in various ways. One approach is to use micro-fabricated segmented traps and to shuttle the ions around through diﬀerent trapping zones. In this scheme larger ion crystals can be split up into smaller ones and brought t-
o zones where they can interact with a laser [110]. This requires a very high amount of control concerning the trapping potentials and only a few experiments have demonstrated the fundamental principles of these techniques so far [111, 112]. In particular, the splitting of an ion crystal seems to be a costly operation. If ρ denotes the distance from the ions to the nearest electrodes the time to split a two ion crystal scales with ρ9/10 [113] for a given trap structure. This gets compromised by th-
e fact that the heating rate scales approximately as ρ−4 [109, 114]. Another way to talk to individual ions when using larger ion crystals is to focus light so strongly, that only one of the ions is illuminated. Assuming a Gaussian beam shape, this requires a beam waist at the ions’ position ideally much smaller than the inter-ion distances of a few micrometer. However, even for perfect optical components we expect residual coupling Ωres on the neighboring ions caused by the tail of the Gaussian b-
eam proﬁle and diﬀraction due to ﬁnite apertures. The ratio εae ≡ Ω/Ωres deﬁnes the relative addressing error. In reality it turns out to be quite challenging to adjust the optics properly and reduce this addressing error to a few percent level.

4.6 Individual ion detection, addressing and addressing error correction

67

(a)
q/2 f q/2 f

q f
time

z

q/2

p

f + p

time

z

q/2

p/(1-e2) f + p/(1-e2)

time

z -p/(1-e2)

(b) n
p/(1-e2) ion 1

z y x
ion 2

Figure 4.9: (a) To induce a qubit rotation on a single ion of a two-ion crystal we strongly focus a laser beam. For a single pulse we expect an error on the neighboring ion that scales with the square root of residual laser intensity on this ion. By splitting the single pulse into two an introducing a π-rotation around the z-axis by AC-Stark shift the error is reduced to ≤ πε2 and scales linear with the residual laser intensity on the second ion. In case the relative addressing error is known a fu-
rther reduction of the error is obtained by adapting the phases of the second an the third pulse accordingly. Optionally the residual phase acquired on each ion can be taking into account for the following pulses or a fourth pulse can be used to revert this phase back. For this scheme panel (b) shows a Bloch sphere representation of the two ions after the second pulse. The normal vector n of the plane spanned by the two Bloch vectors lies within the equatorial plane and serves as rotation axis for-
 the third pulse.

Fortunately it is possible to relax the demands concerning the optics quite a bit by a technique termed addressing error correction. Let us consider a simple scenario with two calcium ions trapped and both initialized to the south pole of the Bloch sphere. We want to implement a single-qubit rotation R(1)(θ = π,φ = 0) on the ﬁrst ion and leave the second ion unaﬀected with R(2)(0, 0). Since the coupling strength Ω is proportional to the square root of the laser intensity, a residual laser intensit-
y of only 2% on the second ion leads already to a relative addressing error Ω1/Ω2 as high as 14%. Instead of a single pulse we can use three pulses (see Fig. 4.9 (a)) where the ﬁrst is equivalent to a rotation R(1)(π/2, π) on ion 1. This excites also ion two to about 7%. Also the second pulse acts primarily on the ﬁrst ion but now we detune the laser frequency so far from the transition frequency, that populations do not get exchanged and only a phase shift is introduced due to the AC-Stark eﬀect.-
 In the Bloch sphere representation this is equivalent to a rotation around the z-axis, noted Rz(ψ), where the rotation angle ψ is proportional to the pulse duration and laser intensity of the pulse. For ψ = π on ion 1, we expect a rotation of only π/50 for ion 2. The third pulse again is similar to the ﬁrst with R(1)(π/2, 0). It ﬂips ion 1 completely up to the north pole of the Bloch sphere, where the second ions is almost completely rotated back towards the south pole. For this simple example th-
e addressing error is reduced from πεae to about πε3ae. A measurement result for this scheme is given in Fig. 4.10. In general with this scheme the actually acquired addressing error is dependent on the state of the neighboring second ion. In the worst case, when the second ion’s state is near the equatorial plane of the Bloch sphere, the error can get as large as πε2ae such that the

68 (a)

4. Experimental techniques (b)

Figure 4.10: (a) Exciting mainly one ion of a two ion crystal with the laser at a wavelength at 729 nm. The camera detection was used to discriminate between the states |SD and |DS such that individual ion excitations of ion 1 (•) and ion 2 ( ) were measured. The ratio between the wanted coupling strength on ion 1 and the erroneous coupling strength on ion 2 is about 7. (b) In case the individual pulse was replaced by a composite pulse the excitation on the second ion can be largely suppressed.
maximum error is given by the ratio of the laser intensities on the neighboring ions. One major advantage of this scheme is that it works irrespective of whether εae is a known quantity or not.
In the experiment εae is usually a known quantity on the order of 5% for the nearest neighbors. Moreover, we can tune the laser beam such that both neighboring ions exhibit the same addressing error. Armed with this knowledge the eﬀective addressing error is further reduced by modifying the previous scheme. Now the length of the second pulse is adjusted such that the Bloch vectors of ion 1 and ion 2 span a plane with a normal vector n being in the equatorial plane after the z-rotation (see Fig. 4.-
9 (b)). This is the case for a rotation angle of ψ = π/(1 − ε2ae). Then a rotation R(1)(π/2, π/(1 − ε2ae)) brings ion 2 exactly back to the south pole and ion 1 up to the north pole. Finally, the singlequbit phases can be either taken into account for the subsequent pulses or one additional rotation around the z-axis Rz(1)(−π/(1−ε2)) on ion 1 can make them vanish. Furthermore, this scheme works for arbitrary input states and angles θ and φ. Here, the residual error is no longer given as a function-
 of εae but instead by the balancing of this residual light intensity on the neighboring ions and by the precision of the relative coupling strengths. Thus, addressing error correction relaxes the demands on laser spot sizes by at least an order of magnitude.

5 Precision spectroscopy
This chapter describes the hyperﬁne structure investigation of the 4s 2S1/2 ↔ 3d 2D5/2 quadrupole transition at 729 nm by laser spectroscopy using a single trapped 43Ca+ ion. We determine the hyperﬁne structure constants AD5/2 and BD5/2 of the metastable level and the isotope shift ∆4is3o,40 of this transition with respect to 40Ca+. Moreover, the existence of transitions that become independent of the ﬁrst-order Zeeman shift at nonzero low magnetic ﬁelds is demonstrated. These transition’s abiliti-
es to serve as an optical frequency standard or qubit are brieﬂy discussed and one of them is used as a probe for the spectroscopy laser’s line width and phase stability. The main ﬁndings of this chapter were also published in reference [72].
5.1 Measurement of the hyperﬁne constants of the 43Ca+ D5/2 energy level
In recent years, optical frequency standards based on single trapped ions and neutral atoms held in optical lattices have made remarkable progress [115, 116, 117] towards achieving the elusive goal of a fractional frequency stability of 10−18 [35]. In 199Hg+, 27Al+, 171Yb+, 115In+, and 88Sr+, optical frequencies of dipole-forbidden transitions have been measured [115, 118, 119, 120, 121]. Among the singly-charged alkali-earth ions, the odd isotope 43Ca+ has been discussed as a possible optical fre-
quency standard [122, 123] because of its nuclear spin I = 7/2 giving rise to transitions 4s 2S1/2(F, mF = 0) ↔ 3d 2D5/2(F, mF = 0) that are independent of the ﬁrst-order Zeeman eﬀect. Our major motivation for precision spectroscopy comes from the fact that our scheme to utilize the 43Ca+ hyperﬁne clock states for QIP requires the a precise knowledge of the quadrupole transition frequencies.
From earlier measurements and calculations of the isotope shift [124] and the hyperﬁne splitting of the S1/2 [84] and the D5/2 [85, 125, 126] states, the transition frequencies on the quadrupole transition in 43Ca+ are known to within 20 MHz with respect to the transitions in 40Ca+. This enabled us to unambiguously identify the lines observed in spectra of the S1/2 ↔ D5/2 transition as a starting point.

70

5. Precision spectroscopy

Doppler-cooling

state preparation state detection

optical pumping Ramsey spectroscopy

397 nm 397 nm (s+)

866 nm

854 nm

729 nm

PMT

0 ms

5 ms

time

Figure 5.1: Pulse sequence used to measure the diﬀerent frequencies of the quadrupole transition of 43Ca+and 40Ca+. Each start of a sequence is triggered to the AC power line. Doppler-cooling and optical pumping to a designated Zeeman state is followed by state preparation which can have a diﬀerent number of pulses and vary in length. To start the Ramsey experiment always at the same phase with respect to the AC power line phase a pause was introduced accounting for variations of the state prepara-
tion time.

5.1.1 Measurement scheme and results
In order to set the magnetic ﬁeld precisely, we used a single 40Ca+ ion to determine the ﬁeld strength by measuring the frequency splitting of the two transitions S1/2(mJ = +1/2) ↔ D5/2(mJ = +5/2) and S1/2(mJ = +1/2) ↔ D5/2(mJ = −3/2). Stray magnetic ﬁelds oscillating at multiples of 50 Hz changed the magnitude of the ﬁeld by less than 2 mG over one period of the power line frequency (see section 4.4). Spectroscopy on the quadrupole transition was implemented in the pulsed mode of operation (see s-
ection 4.2). By synchronizing the experiments with the phase of the power line, magnetic ﬁeld ﬂuctuations at multiples of 50 Hz were largely eliminated as a source of measurement error. The duration of a single experimental cycle (see Fig. 5.1) was on the order of 10 ms, such that this procedure slightly slowed down the repetition rate of the experiments.
In a ﬁrst series of measurements after Doppler-cooling the ion was prepared in the state S1/2(F = 4, mF = +4) by optical pumping with σ+-polarized light (see subsection 6.1.1). There are ﬁfteen transitions to the D5/2 levels allowed by the selection rules for quadrupole transitions. Spectra were recorded on all of them with an excitation time of 500 µs in a magnetic ﬁeld of about 3.40 G. In a second measurement series, after pumping the ion into S1/2(F = 4, mF = −4) another ﬁfteen transitions were-
 measured. To obtain the hyperﬁne constants of the D5/2-state, we ﬁtted the set of 30 transition frequencies by diagonalizing the Hamiltonian (2.12) taking the hyperﬁne constants AD5/2, BD5/2, the magnetic ﬁeld and a frequency oﬀset as free parameters. The hyperﬁne constant AS1/2, the g-factors gI and gS1/2 were taken from other references (see Tab. A.5), gD5/2 = 1.2003(1) was measured by us in an experiment with a single 40Ca+ ion. For this set of data (see Fig. 5.2 (a)) a ﬁt yields AD5/2 = −3.89-
31(2) MHz and BD5/2 = −4.241(4) MHz, where the standard deviation of the determination is added in parentheses. The average deviation between

5.1 Measurement of the hyperﬁne constants of the 43Ca+ D5/2 energy level

71

Frequency splitting (MHz) Mean excitation to 5/2 D

60 (a)

F=1

(b)

40
F=2
20 F = 3

0 F=4

-20 F = 5

-40 F = 6

-433(28) Hz

-60

0

1

2

3

4

5

Magnetic field (G)

Frequency deviation (Hz)

Figure 5.2: (a) Hyperﬁne and Zeeman splitting of the 43Ca+ D5/2-state manifold calculated for hyperﬁne constants measured in our experiment. Filled circles (•) and crosses (x) mark
states that were probed starting from the S1/2(F = 4, mF = ±4)-states. The vertical dashed line indicates the magnetic ﬁeld used for measuring the frequency shifts in the experiment. (b)
Result of a Ramsey frequency scan over 5 kHz with τR = 200 µs on the transition S1/2(F = 4, mF = 4) ↔ D5/2(F = 5, mF = 4). The solid line is a sinusoidal ﬁt with the maximum indicating a deviation of −433(28) Hz from what was expected during the experiment from
theoretical calculations based on previous measurements of AD5/2 and BD5/2 .

the measured and the ﬁtted frequencies is about 1 kHz. If gD5/2 is used as a free parameter, we obtain gD5/2 = 1.2002(2) and the ﬁtted values of the hyperﬁne constants do not change. Also, adding a magnetic octupole interaction [127] to the hyperﬁne Hamiltonian does not change the ﬁt values of the hyperﬁne constants.
In a second attempt we probed all D5/2 levels that are accessible from the S1/2(F = 4) manifold. The single 43Ca+ ion was ﬁrst initialized in the S1/2(F = 4, mF = 4)-state by optical pumping. Then the ion is prepared by a series of π-pulses on the quadrupole transition into the desired starting level of the ground-state manifold. Subsequent to the state preparation the frequency measurement was performed by a Ramsey frequency experiment. For this purpose a ﬁrst light pulse created a superposition -
between the two states probed. Then a waiting time τR is introduced before a second light pulse. For each transition two sets of measurements were taken, one with a Ramsey time of τR = 50 µs to avoid ambiguities and another one with τR = 200 µs, limited by the magnetic ﬁeld sensitivity of the most sensitive transition probed. At the end of the experimental cycle, the ion’s quantum state is detected. This measurement cycle is repeated ﬁfty times before setting the probe laser to a diﬀerent frequenc-
y and repeating the experiments all over again. The laser power was set such that the time for a π/2-pulse was between 5 and 20 µs. A sine-curve was ﬁtted to the resulting fringe pattern. The location of maximum determines the frequency diﬀerence between the expected transition frequency and the one measured. A typical result is shown in Fig. 5.2 (b). Before each of these experiments, the two transition frequencies of S1/2(F = 4, mF = 4) ↔ D5/2(F = 4, mF = 2) and S1/2(F = 4, mF = 0) ↔ D5/2(F = 4, -
mF = 2) were measured also with τR = 200 µs. From these the

72

F=2 F=3

F=4
baseline
F=5
-1874 -19.155
-4 | -5 -1.666

F=6

592 -47.920
-4 | -6 -2.799

785 -46.026
-4 | -5 -2.252

812 4.022 -4 | -4 -0.378
-1468 -17.639
-4 | -4 -1.297
574 -44.093
-4 | -4 -1.681

309 22.752 -4 | -3 1.141
496 4.896 -4 | -3 -0.281
-1173 -16.047
-4 | -3 -0.888
647 -42.120
-4 | -3 -1.086

501 38.116 -4 | -2 2.956
-2 22.567 -4 | -2 0.892
(481) 324
5.898 0 | -2 -1.542
-1440 -14.367
0 | -2 -1.831
1066 -40.105
0 | -2 -1.862

-27 36.372 -3 | -1 2.078
-181 22.494
0 | -1 -0.785
(805) 140
7.067 0 | -1 -1.337
6289 -12.599
-3 | -1 -0.268
-7111 -38.038
-3 | -1 -0.163

(-653) -614 34.457 0| 0 0.367
-15 22.637
2| 0 -1.794
80 8.460 0| 0 -1.018

(-326) 43
32.245
0| 1 -0.607 29 (-106) 23.277
0| 1 -1.360
-195 10.154
0| 1 -0.500

247 37.682
0| 2 1.985
-221 25.991
0| 2 0.319
-775 12.229
0| 2 0.333

-118 -10.712
2| 0 -1.439

(103) -310 -8.718
0| 1 -0.078

(-83) -281 -6.602
0| 2 0.665

-522 -35.940
0| 0 -0.533

(-222) -415 -33.790
0| 1 0.177

-538 -31.593
0| 2 0.919

46 29.475
4| 3 0.725
-352 14.667
4| 3 0.013

-666 17.411
4| 4 1.262

+34.952 +24.635 +10.031

-436 -4.363
4| 3 0.089

-159 -2.002
4| 4 1.001

-162 0.478 4| 5 1.987
-9.586

-1244 -29.348
4| 3 0.287

-632 -27.057
4| 4 1.092

-693 -24.717
4| 5 1.930

-565 -22.330
4| 6 2.799

-35.125

(model - isotope shift meas. in Hz) model - measurement in Hz model (MHz)
start mF | target mF sensitivity (MHz/G)

5. Precision spectroscopy

Figure 5.3: In order to determine the hyperﬁne constants of the 43Ca+ D5/2-state we probed all 45 available levels from the S1/2(F = 4) manifold. The results are given as numbers in Hertz as deviation from the model which is stated below as diﬀerence from the D5/2 baseline in MHz. Moreover, the sensitivity for each of the probed transitions is given in MHz/G and was used to apply small correction so that all
frequencies given correspond to the same magnetic ﬁeld of 3.045 524 G. In a later measurement we probed again 8 of these transitions in order to determine the isotope shift on this transition with respect to 40Ca+. The resulting frequency diﬀerences from the model are the values given
in brackets above the other measurements. Alternatively the values are given in Tab. A.6.

5.1 Measurement of the hyperﬁne constants of the 43Ca+ D5/2 energy level

73

magnetic ﬁeld during the measurement of the transition could be determined from the Zeeman splitting of the S1/2-state manifold solely using the g-factor and the hyperﬁne constant AS1/2, which are known with high precision. By introducing small waiting times dependent on the duration of the transfer pulses for state initialization we assured that all frequency measurements occurred at the same phase with respect to the AC power line.
The result of these measurements for the 45 diﬀerent levels probed is given in Fig. 5.3 and Tab. A.6. With the knowledge of the magnetic ﬁeld for each data point, the level shifts were recalculated with respect to the mean magnetic ﬁeld of all measurements which was 3.045 524 G. All of these corrections were below 1 kHz.
We obtain the hyperﬁne constants of the D5/2-state from ﬁtting 41 transition frequencies by diagonalizing the Hamiltonian (2.12) and using the hyperﬁne constants AD5/2, BD5/2 and a frequency oﬀset as free parameters. In the meantime another experiment in the group revealed a more accurate measurement of metastable state’s g-factor gD5/2 = 1.200 334 0(3) by probing a single 40Ca+ ion [128]. As a result of the ﬁt we obtain the values
AD5/2= −3.893 12(3) MHz, BD5/2 = −4.239(1) MHz,
where the statistical error (1σ) of the determination is added in parentheses. The average deviation between the measured and the ﬁtted frequencies is below 600 Hz now and the results are consistent with the ones obtained earlier. If gD5/2 is used as a free parameter, we obtain gD5/2 = 1.200 36(4) and the ﬁtted values of the hyperﬁne constants do not change.

5.1.2 Limitations of the measurement
There is a number of eﬀects that can systematically disturb the precise determination of the transition frequencies. First of all the whole measurement is limited by the ability to stabilize the spectroscopy laser relative to the ion. For the second set of measurements the laser was referenced to the two transitions S1/2(F = 4, mF = 4) ↔ D5/2(F = 4, mF = 4) and S1/2(F = 4, mF = 4) ↔ D5/2(F = 4, mF = 2) with a scheme described in section 4.4. The Ramsey time was set for both transitions to τR =200 -
µs and the times τπ were set to ∼ 15 µs. The whole measurement took about 500 min during which a total of 664 service measurements were taken. The diﬀerence between these service measurements and the predictions is given in Fig. 5.4 (a) as a histogram together with a Gaussian ﬁt. We obtain a standard deviation of 60 Hz. This sets a boundary to the accuracy of all transition frequency measurements. The evaluation of the magnetic ﬁeld measurement is given in Fig. 5.4 (b). The standard deviation desc-
ribing the Gaussian ﬁt to the histogram is 54 µG.

74 (a)

5. Precision spectroscopy (b)

Figure 5.4: Automated service measurements as described in section 4.4 referenced the spectroscopy laser to the 43Ca+ ion during the spectroscopic measurements. In total 664 of these service measurements were taken over a measurement time of 500 min. (a) The histogram shows the frequency deviation between the measurements and our predictions. A Gaussian ﬁts well to the data which exhibit a standard deviation of 60 Hz. (b) From the same set of measurement we also obtain values for the magnetic ﬁeld-
. The histogram shows the deviation from the extrapolation together with a Gaussian ﬁt with a standard deviation of 54 µG.

Transitions to the stretched states come with the highest sensitivity of 2.8 MHz/G which would then lead to an error in frequency estimation of 150 Hz.

Another error source are the radiofrequency currents that supply two of the four trap

blades with high voltage Vrf(t). The trap drive frequency Ωrf is determined by the helical resonator and the capacity of the trap structure. During these measurements the frequency

was set to Ωrf/(2π) = 25.466 MHz. This comes fairly close to the hyperﬁne splitting of the D5/2(F = 6) and D5/2(F = 5)-states. In particular, for the given magnetic ﬁeld the diﬀerence between the transition frequency D5/2(F = 6, mF = −1) ↔ D5/2(F = 5, mF = −1) and the trap drive frequency Vrf(t) is as small as ∆td/(2π) = 14.6 kHz and a magnetic dipole coupling exists. Comparing the model with the measurements of these levels shows

for each of them a shift of approximately δacB/(2π) ≈ 6.7 kHz in opposite direction. If we neglect the coupling to other levels for the moment we can calculate the coupling strength

ΩDD by

ΩDD ≈ δacB(δacB + ∆td) = 2π × 12 kHz.

Similarly, we have ∆td = −270 kHz for the level pair D5/2(F = 6, mF = −2), D5/2(F = 5, mF = −2) and observe a shift of about 1.3 kHz in the opposite direction. For this reason these levels were not taken into account for the determination of the hyperﬁne coeﬃcients AD5/2 and BD5/2. Other inter-level frequency diﬀerences deviate more from Ωrf and we expect these shifts to be less than 1 kHz. In principle we could investigate the polarization and the exact coupling strength of these AC magnetic ﬁeld-
s by varying the static magnetic ﬁeld such that certain of these transitions become resonant. This has not been done so far.

5.1 Measurement of the hyperﬁne constants of the 43Ca+ D5/2 energy level

75

As discussed in Appendix B for the method of separated oscillatory ﬁelds, AC-Stark shifts from other transitions can lead to an additional phase in the observed fringe pattern and hence lead to an error in the frequency determination. For the coupling strength used here the contribution of neighboring dipole transitions is estimated to be less than a few Hertz. Coupling to other levels in the D5/2 and S1/2 manifold strongly depends on the Zeeman splitting of the neighboring levels and can lead to -
much larger shifts. At a magnetic ﬁeld of 3 G, the Zeeman splitting is larger than 1 MHz for most of the levels and so the error is also on the order of a few Hertz. One exception is the level D5/2(F = 3, mF = −2) which is separated by only 73 kHz from the level D5/2(F = 3, mF = −1). Probing the level from the ground-state S1/2(F = 4, mF = 0) led to an error of 4 kHz in frequency determination due to the AC-Stark shift. When instead the D5/2(F = 3, mF = −2)-state was probed from the S1/2(F = 4, mF-
 = −4) ground-state a coupling to the close by D5/2(F = 3, mF = −1)-level is forbidden by the selection rules and the obtained value deviates only by -2 Hz from the model. An exact analysis would require the summation over all possible couplings to neighboring transitions including sidebands due to the motion of the ion.
An AC-Stark shift can also be caused by spurious light ﬁelds that couple to the levels under investigation. Already small amounts of light at the dipole transitions from S1/2 ↔ P1/2, P3/2 and P3/2 ↔ D5/2 can cause large shifts. The light ﬁelds at wavelengths of 397 nm and 854 nm are needed though within the experimental cycle for detection and repumping. Usually these lasers are switched oﬀ by single pass AOM’s in front of a single-mode glass ﬁber which typically gives an extinction ratio on the o-
rder of 10−5. In order to investigate possible light shifts caused by imperfect laser switching additional mechanical shutters were installed to shut these lasers completely oﬀ. The largest shift due to residual laser light observed in a series of measurements using diﬀerent transitions in 43Ca+ and 40Ca+ by a direct comparison was about 10 Hz (see next section).
The D5/2-state’s atomic electric quadrupole moment interacting with residual electric quadrupole ﬁelds gives rise to frequency shifts of a few Hertz [129]. Several series of measurements were performed for diﬀerent voltages on the tip electrodes of the trap. No eﬀect was observed within the accuracy of the measurements which was about 10 Hz.
Other deteriorating eﬀects due to residual micromotion, black body radiation, higher order AC-Stark shifts, etc. are all expected to contribute less than a few Hertz and are also not considered for the evaluation.
Taking all the above error sources into account, deviations from the model of a few hundred Hertz are expected. The measurement results shows a mean deviation of 600 Hz with maximum deviations of up to 1.5 kHz. In order to make use of these transitions for QIP this level of accuracy is suﬃcient. Due to variations of the magnetic ﬁeld of up to 2 mG within 20 ms we determine each transition frequency depending at which particular point of the sequence we use it anyway.

76

5. Precision spectroscopy

reference cavity

Ti:Sa 729 nm
~1.3 GHz AO1

80 MHz AO5

IQOQI

~487 MHz

AO2 80 MHz

optical beat note

500 m

AO3 AO4

80 MHz
40Ca+ 43Ca+

AO3

~1.1 GHz AO10
80 MHz
reference Ti:Sa cavity 729 nm

500 m AO9 -77.76 MHz

Freq. comb & optical beat note

-80 MHz AO6

Cesium fountain
40Ca+

AO7 AO8

University

-80 MHz

~540 MHz

Figure 5.5: For the measurement of the isotope shift on the S1/2 ↔ D5/2 quadrupole transition between the ion species 40Ca+ and 43Ca+ we make use of two independent ion trap experiments. One of them is located at the IQOQI and described in chapter 3. The other experiment and a frequency comb referenced to a cesium fountain is located at the university [130]. We transfer light of our spectroscopy lasers between the two sites over 500 m long single-mode polarization-maintaining glass ﬁbers. Both exp-
eriments continually measure the frequency deviation between their spectroscopy laser and the atomic transition and feed the signal back onto AOM’s in order to stabilize the output frequency of the lasers relative to the ion. Fiber-noise cancelations are installed on all ﬁbers except the ones leading to the ions since here we have to switch the laser on and oﬀ quickly.

5.2 Measurement of the isotope shift

One goal pursued by our group is the precise determination of the absolute frequency of

the 40Ca+ S1/2 ↔ D5/2 transition [128]. The frequency of our spectroscopy laser was measured by means of an optical frequency comb referenced to a mobile cesium fountain

as absolute frequency standard. As a result we obtained for the transition frequency a

value of

ωS40↔D/(2π) = 411 042 129 776 393.2(1.0) Hz.

By an intensive study of the apparatus and the systematic eﬀects we were able to achieve an
inaccuracy as low as ±1 Hz. A detailed description of the apparatus located at a university
building, the measurements and its limitations is given in Michael Chwalla’s thesis [130].
The new experimental setup described in chapter 3 assisted these measurements. As a byproduct we were able to determine the isotope shift ∆4is3o,40 on this quadrupole transition between 40Ca+ and 43Ca+ ions.

5.2 Measurement of the isotope shift

77

5.2.1 Measurement scheme and results

A sketch of the diﬀerent components of the measurement setup and their location is given in Fig. 5.5. Similar to what was described in section 4.4 a laser system at 729 nm is referenced to calcium ions at the experiment in the university building. The lasers of both experiments are sent to a frequency comb1 which can simultaneously measure the absolute frequencies of both light ﬁelds referenced to a mobile cesium fountain2. In addition, light of the spectroscopy laser is sent from the university b-
uilding to the IQOQI where an optical beat measurement was recorded to determine the frequency diﬀerence between both lasers. When both lasers are referenced to 40Ca+ ions this beat signal was about 30 MHz. In case a 43Ca+ ion was used at the IQOQI a beat frequency of typically 5.4 GHz was recorded with a fast photo detector3. In both cases the optical beat frequency was mixed down4 to around 10.7 MHz where it was counted with a frequency counter5. The beat measurement typically takes data over ma-
ny hours (see Fig. 5.6 (a)) which was not the case for the frequency comb. A comparison between the two measurements has shown though that the transfer of the lasers over the 500 m glass ﬁber does not impose changes to the laser frequency on a Hertz level when the ﬁber-noise cancelation (see subsection 3.2.2) is used. On the IQOQI side all relevant radiofrequency sources, the frequency counter and spectrum analyzer were referenced to an ultra-stable quartz which is locked to the global positioning-
 system signal on a long time scale6. All computers recording measurement data are synchronized to within 10 ms by having a common internet time basis.
In a ﬁrst set of measurements we had both experiments running automated frequency measurements on a single 40Ca+ ion. On both experiments we repeatedly probed the two transitions S1/2(mJ = +1/2) ↔ D5/2(mJ = +1/2) and S1/2(mJ = −1/2) ↔ D5/2(mJ = −1/2) with a Ramsey time of τR = 1 ms and feeding back the signal to acousto-optic elements as described in section 4.4. The magnetic ﬁeld in the university experiment was set to 3.4 G and the excitation times were τπ = 400 µs at the experiment located at t-
he IQOQI the values were 0.55 G and τπ = 12 µs respectively. Simultaneously we measured the beat note of the two spectroscopy lasers at a frequency of about 29 MHz as seen in Fig. 5.6 (a). With a gate time of 1 s we acquired in total 8605 frequency measurements. After subtracting the mean value these data are displayed in a histogram (Fig. 5.6 (b)) where a Gaussian ﬁt with a standard deviation of 21.1 Hz describes the distribution of the data well. The center is determined to better than 1 Hz. Sin-
ce both lasers were independently referenced to an atomic transition of known transition frequency
1Menlo Systems, FC 8003 2The cesium fountain was provided and operated by Michel Abgrall, Daniele Rovera, Philippe Laurent and Giorgio Santarelli (LNE-SYRTE, Observatoire de Paris) 3photodiode: Hamamatsu, G4176; bias-tee: Miteq, 40 GHz BT 4000; ampliﬁer: Miteq, AFS42-00101200 4Rohde & Schwarz, SMA 100 A; Miteq, D80118LA2 5Stanford Research Systems, SR-620 6Menlo Systems, GPS 6-12

78 (a)

5. Precision spectroscopy

beat at 28962046 Hz std = 21.1 Hz 8605 measurements
(d)
mean 13.5(7) Hz std = 16 Hz 562 measurements

(b)

(c)

2.0(2)×10-13 Öt

((ae))
mean 5(2) Hz std = 21 Hz 113 measurements

Figure 5.6: (a) Optical beat note at about 29 MHz between the two spectroscopy lasers at a wavelength of 729 nm recorded with a frequency counter. The gate time was set to 1 s and we had a dead time of about 0.3 s between the measurements. Both lasers were referenced to a single 40Ca+ ion in diﬀerent experiments. (b) The standard deviation of the beat frequency from the mean value is 21 Hz and a Gaussian ﬁts well to the histogram. (c) By plotting the Allan deviation we see the expected drop with τ-
 −1/2 after 120 s, indicating the time constant of our feedback loops. (d) In total 562 measurements were taken on the IQOQI site over an interval of 4 h. Comparing these with the beat data reveals 13(2) Hz oﬀset of the transition base line compared to the experiment located at the university. (e) A large fraction of this diﬀerence can be attributed to AC-Stark shifts caused by residual light intensity at wavelengths of 397 and 854 nm. These were eliminated in a set of 113 measurements were mechan-
ical shutters were used in addition. Here a standard deviation of 21 Hz and a relative shift between the two experiments of 5(2) Hz was found.

5.2 Measurement of the isotope shift

79

this measurement can also be seen as the comparison of two atomic clocks. An estimate

of the statistical measurement uncertainty versus the measurement duration is given by

the Allan deviation

σ(τ ) ≡

1 2

<

(yn+1

− yn)2

>

as shown in Fig. 5.6 (c). Here yn denote the normalized frequency departure, averaged over sample period n, and τ is the time per sample period. To be exact, the data have

to be collected without a dead time in between which was not the case for this particular

measurement. Nevertheless, we can obtain from the graph an important time constant of about 120 s after which the expected drop of the Allan deviation with τ −1/2 occurs.

This time constant is caused by the accuracy and the rate at which our measurements for

the feedback occur. The value could be signiﬁcantly reduced if a cavity of lower drift was

used.

About every one to two minutes on the experiment located at the IQOQI we took data on the same transitions where the lasers at wavelengths of 397 nm and 854 nm were closed with a mechanical shutter7 for the time of the Ramsey experiment. The mechanical shutters have a closeing/opening time of about 5 ms with a maximum rate of 10 Hz such that their use slows down experiments signiﬁcantly. Over a total measurement time of three hours we recorded 562 sets of measurements without use of mechanical shu-
tters and only 113 measurements where shutters were used. Only the measurements without shutters were taken to reference the laser to the ion. In order to compare the measurement results we interpolated the data of the beat measurements to the ones taken on the ion. Both measurement results are displayed as histograms in Fig. 5.6 (d)+(e). Gaussians ﬁt well to both distributions and we ﬁnd standard deviations of 16 Hz and 21 Hz respectively. The mean value of the measurements taken without shutter -
is shifted by 13.5(7) Hz from the line center determined from the university setup. With the shutter we still ﬁnd a diﬀerence of 5(2) Hz. This diﬀerence cannot be explained yet and further investigations on the experiment located at the IQOQI would be required.

With the conﬁdence that our measurement technique is accurate to a few Hertz, we repeated these measurements with the spectroscopy laser at the IQOQI referenced to a single 43Ca+ ion. All experimental conditions were chosen to be equal as for the hyperﬁne structure measurement described earlier in this chapter. For the determination of the isotope shift we probed only 8 of the 45 available D5/2-states, all of them starting from S1/2(F = 4, mF = 0). These measurements allow us to determine the line-
 center of the D5/2-state with an 1σ statistical error of ±390 Hz. The individual measurement results are given as diﬀerence to what was expected from the model by values in brackets depicted in Fig. 5.3. Parallel to the measurements we recorded a beat note of the spectroscopy laser with the laser coming from the university which again was referenced to a single 40Ca+

7Densitron

80

5. Precision spectroscopy

ion. The optical beat note had a frequency of 5 464 355 931 Hz. From these results we infer an isotope shift on the S1/2 ↔ D5/2 transition between the species 40Ca+ and 43Ca+ of
∆4is3o,40/(2π) = 4 134 711 720(390) Hz.
with a relative error of 9.4 × 10−8. This value is in good agreement with a previous measurement that determined the value to ∆4is3o,40/(2π) = 4129(18) MHz [84]) and our own previous result of ∆4is3o,40/(2π) = 4134.713(5) MHz [72] which was obtained without the use of a second experiment and derived by the precise knowledge of the free spectral range of our reference cavity.

5.2.2 Limitations of the measurement
The major limitation to the accuracy of this measurement is given by the precise determination of the 43Ca+ D5/2-state’s line center. The uncertainty of the hyperﬁne constants AD5/2 and BD5/2 contribute with an error of at least 62 Hz and 26 Hz to the determination of the line center. In addition the same errors as described earlier for the determination of the hyperﬁne constants contribute to these measurements. In order to get a better conﬁdence in our result we took a few more data using other -
sets of transitions. The values obtained for the isotope shift ∆4is3o,40 all lay in a range of −268 Hz and +301 Hz of the above given value. In these measurements we again investigated the eﬀects of mechanical shutters for the lasers at 397 nm and 854 nm with about the same result as for 40Ca+. Moreover, we made series of measurements where the magnetic ﬁeld was changed between 0.5 G and 5 G, the tip voltage of the trap set to values between 500 and 1500 V and the radial trapping frequency between-
 2.4 MHz and 4.2 MHz. For none of these measurements we have observed a signiﬁcant shift caused by the change of these parameters.

5.3 Magnetic ﬁeld independent transitions
With a precise knowledge of the hyperﬁne structure constants at hand, the magnetic ﬁeld dependence of the D5/2 Zeeman states is calculated by diagonalizing the Breit-Rabi Hamiltonian (see Fig. 5.2 (a)). It turns out that several transitions starting from one of the stretched states S1/2(F = 4, mF = ±4) become independent of the ﬁrst-order Zeeman shift at ﬁeld values of a few Gauss (see Fig. 5.7 (b)). Transitions with vanishing diﬀerential Zeeman shifts at non-zero ﬁelds have been investigated in e-
xperiments with cold atomic gases [131] to achieve long coherence times and with trapped ions [132] for the purpose of processing quantum information. These transitions are also potentially interesting for building an optical frequency standard.

5.3 Magnetic ﬁeld independent transitions

81

(a)

(c)

(b)

Excitation probability

Magnetic field (G)

Frequency (Hz)

Figure 5.7: (a) Frequency dependence of the S1/2(F = 4, mF = 4) ↔ D5/2(F = 4, mF = 3) transition frequency for low magnetic ﬁelds. The transition frequency becomes ﬁeld-
independent at magnetic ﬁelds of 3.38 G and 4.96 G with a second-order Zeeman shift of ∓16kHz/G2. The measured data are not corrected for the drift of the reference cavity which
may lead to errors in the shift of less than 2 kHz. To match the data with the theoretical curve
based on the previously measured values of AD5/2 , BD5/2 , an overall frequency oﬀset was adjusted. (b) Calculated shift of the ﬁfteen allowed transitions starting from S1/2(F = 4, mF = 4). The thick line shows the transition to the state D5/2(F = 4, mF = 3). (c) Frequency scan over the transition S1/2(F = 4, mF = −4) ↔ D5/2(F = 4, mF = 3) with an interrogation time of 100 ms. A Lorentzian ﬁt (solid line) reveals a width of 16 Hz which is dominated by the line
width of the spectroscopy laser at 729 nm.

To experimentally conﬁrm our calculations we mapped out the ﬁeld-dependence of the transition S1/2(F = 4, mF = 4) ↔ D5/2(F = 4, mF = 3), which experiences the lowest second-order dependence on changes in the magnetic ﬁeld. We measured the change in transition frequency for magnetic ﬁelds ranging from one to six Gauss as shown in Fig. 5.7 (a). The solid line is a theoretical calculation based on the measurement of the hyperﬁne constants described earlier in this chapter. For the data, the frequency-
 oﬀset is the only parameter that was adjusted to ﬁt the calculated curve. Both, the experimental data and the model show that the transition frequency changes by less than 400 kHz when the ﬁeld is varied from one to six Gauss. The transition frequency becomes ﬁeldindependent at magnetic ﬁelds of 3.38 G and 4.96 G with a second order magnetic ﬁeld dependence of ∓16 kHz/G2, which is six times less than the smallest coeﬃcient for a clock transition based on mF = 0 ↔ mF = 0 transitions at zero ﬁeld. -
Another advantage over the transitions with mF = 0 is that state initialization into the stretched states can be easily achieved by optical pumping (see subsection 6.1.1). Moreover, the clock states ideally have to be probed at zero magnetic ﬁeld which makes state initialization and detection even more challenging since the Zeeman states are then degenerate. In addition, to serve as an optical frequency standard, the hyperﬁne structure of the D5/2 energy levels and possible systematics of measurem-
ent errors have to be studied in more detail as it was done here. The fact that the hyperﬁne frequency splitting of the D5/2-states is close to the typical frequencies used to drive Paul traps might be a major disadvantage for this ion

82

5. Precision spectroscopy

species to serve as an absolute frequency reference since systematic errors can be large. The benchmark here is currently set by the frequency ratio measurement of two optical atomic clocks (single 27Al+ and 199Hg+) with a fractional uncertainty of 5.2 ×10−17 [117].

As an application we used the ﬁeld-independence of this transition for investigating the line width of our spectroscopy laser. We set the magnetic ﬁeld to 3.39 G and recorded an excitation spectrum of the transition by scanning the laser over the line with an interrogation time of 100 ms. Each data point consists of 50 measurements. The result is depicted in Fig. 5.7 (c) where the solid line is a Lorentzian least square ﬁt revealing a line width of 16 Hz. The observed line width is neither limited-
 by the D5/2-state’s life time (τ = 1.17 s) nor by the chosen interrogation time. Line broadening caused by magnetic ﬁeld ﬂuctuations can be also excluded on this transition. For the small laser powers ACStark shifts are expected to play only a minor role. During the measurement the drift of the spectroscopy laser’s reference cavity was measured to be 1.5 Hz/s and fully compensated. Therefore, the observed line width is attributed to the emission spectrum of the spectroscopy laser.

The levels comprising these transitions are certainly attractive candidates to serve as an optical qubit leaving the remaining limitation of these to laser stability and spontaneous decay from the metastable state. From the diﬀerent measurements of the laser line width we obtained the following results:

measurement method
power spectral density of beat note (see Fig. 3.5 (a)) ﬁeld independent transition (see Fig. 5.7 (c))
beat note frequency measurement (see section 5.2)

acquisition time 4s 150 s > 4h

line width ∆νFWHM/(2π)
∼ 1 Hz < 16 Hz < 50 Hz

Assuming a simple noise model where the laser frequency is constant over each experimental cycle but varies from shot-to-shot according to a Gaussian distribution (see Appendix B) we expect a coherence time on the order of 10 ms. We tested the phase coherence with a Ramsey phase experiment at a magnetic ﬁeld of 4.99 G on the transition S1/2(F = 4, mF = 4) ↔ D5/2(F = 4, mF = 3). For two diﬀerent Ramsey waiting times τR of 3 ms and 5 ms the results are given in Fig. 5.8 (a)+(b). Each data point cons-
ists of 100 measurement repetitions with the statistical errors indicated. The weighted least square ﬁts with the function A/2 sin(φ + φ0) reveal fringe amplitudes A = 0.99(1) and 0.81(2). In the simple noise model these results correspond to laser line width ∆νF∗WHM/(2π) of 18 Hz and 49 Hz and are consistent with our previous measurements listed in the table above. For longer Ramsey times a rather wide scatter of data points is observed which cannot be explained with the simple noise model. Measu-
rements taken using a single 40Ca+ ion with the apparatus at the university building which has a magnetic ﬁeld shielding and active magnetic ﬁeld noise compensation give a similar reduction of Ramsey fringe contrast after a few milliseconds.

5.3 Magnetic ﬁeld independent transitions

83

(a)

(b)

Figure 5.8: The optical qubit’s phase coherence was measured by probing the transition S1/2(F = 4, mF = 4) ↔ D5/2(F = 4, mF = 3) with Ramsey phase experiments using waiting times of τR = 3 ms (a) and 5 ms (b). The magnetic ﬁeld was set to 4.98 G. Each data point consists of 100 measurements with the statistical errors indicated. The sinusoidal least square ﬁts give as solid lines reveal amplitudes of A = 0.99(1) and 0.81(2).
We conclude that even with the considerable resources of a narrow bandwidth laser and the use of a magnetic ﬁeld insensitive transition (or alternatively a magnetic ﬁeld noise shielding and active compensation) it seems challenging to further increase the coherence time of the optical qubit signiﬁcantly. Since an entangling gate on the optical qubit takes only 50 µs in our setup it makes sense though to consider the optical qubit as processing qubit and the hyperﬁne clock states as quantum memory.-
 Here 43Ca+ ions oﬀer the advantage that we can beneﬁt from the best of both worlds.

6 Quantum information processing with a single 43Ca+ ion
There are many ways to encode quantum information in the 43Ca+ level structure. An optical qubit with vanishing ﬁrst-order dependence on magnetic ﬁeld ﬂuctuations was proposed in chapter 5. Here, we consider the hyperﬁne ground-state manifold depicted in Fig. 2.4 where the energy splitting between the F = 3 and F = 4 manifold is 3.2 GHz. For low magnetic ﬁelds, the two states |↓ ≡ S1/2(F = 4, mF = 0) and |↑ ≡ S1/2(F = 3, mF = 0) (hyperﬁne clock state qubit) exhibit only a weak linear Zeeman eﬀect -
and are therefore attractive as a robust quantum information carrier. Doppler-cooling, the initialization of external and internal degrees of freedom, state discrimination and the measurement of the qubit’s phase coherence are demonstrated on a single 43Ca+ ion in this chapter. The main ﬁndings of this chapter were also published in reference [74].
6.1 Initialization of the hyperﬁne clock state qubit
Similar to classical computing, also QIP devices need to be initialized. For our experiments using 43Ca+ ions the initialization step comprises Doppler-cooling, optical pumping, cooling to the motional ground-state and state transfer to |↓ .
6.1.1 Doppler-cooling and optical pumping
For Doppler-cooling and ﬂuorescence detection, the ion is excited on the S1/2 ↔ P1/2 dipole transition with two laser beams. The beam entering from SE (see Fig. 3.7) is π-polarized and slightly red detuned from the transition S1/2(F = 4) ↔ P1/2(F = 4). The second beam is σ+-polarized and sent through an electro-optic phase modulator producing sidebands at 3.2 GHz containing about 20% of the carrier intensity. With this beam the ions are excited from the S1/2(F = 3) and S1/2(F = 4) to the P1/2(F = -
4) manifold. Coherent population trapping is avoided by lifting the degeneracy of the Zeeman sub-levels with a magnetic ﬁeld. To avoid population trapping in the D3/2 manifold, repumping laser light at 866 nm is applied. The repumping eﬃciency was improved by tuning the laser close to the D3/2(F = 3) ↔ P1/2(F = 3) transition frequency and providing two additional

86

6. Quantum information processing with a single 43Ca+ ion

... ...
...

(a) (b)

P3/2 F=5 mF=5
393 nm Dn = 0

854 nm Dn = 0

(c)
D5/2 F=6 mF=6

729 nm Dn = -1

S1/2 F=4 mF=4

Figure 6.1: (a) The population in the stretched state S1/2(F = 4, mF = 4) is plotted as a function of the duration of optical pumping. An exponential ﬁt (solid line) reveals a time constant of 1.4 µs. After 10 µs, the population is in the desired state in 98% of the measurements. (b) The inset shows a histogram of the success rate of 100 measurements each containing 100 experiments when two π-pulses on the quadrupole transition are applied and an additional intermediated optical pumping interval i-
s used. This enhances the ﬁdelity of the process to above 99.2%. (c) Sideband cooling on the quadrupole transition involves using the stretched states. For each cooling cycle one phonon can be taken away from the ions and the entropy is carried away by the photon emitted at 393 nm. The same states are also used to enhance the quality of optical pumping.

frequencies shifted by -150 MHz and -395 MHz such that all hyperﬁne D3/2 levels are resonantly coupled to one of the P1/2(F = 3, 4) levels. We observed a maximum ﬂuorescence count-rate of 24 kcps per 43Ca+ ion on the PMT for magnetic ﬁelds ranging from 0.2 to 5 G. This is about 45% of the count-rate we observe for 40Ca+ ions. We tried various other laser polarizations and the use of additional lasers at wavelengths of 393 nm, 397 nm and 850 nm in order to further increase the ﬂuorescence rate. Onl-
y when we replace the EOM sideband by an independent laser at 397 nm we see a small improvement on the order of 5%. It is not yet clear what the bottleneck for the produced photon ﬂux is. Moreover, for loading 43Ca+ ions into the trap we found that the conﬁguration where the laser at 397 nm is tuned to the S1/2(F = 3) ↔ P1/2(F = 4) transition and the polarization of the blue laser beam entering from SW is switched to linear works much more eﬃciently. However, the maximum net count-rate in this con-
ﬁguration is only about 14 kcps per 43Ca+ ion.
After switching oﬀ the π-polarized laser beam, a single 43Ca+ ion is optically pumped into the state S1/2(F = 4, mF = 4). This state’s population is then measured with two consecutive π-pulses exciting the population to diﬀerent Zeeman states of the D5/2 manifold and subsequent ﬂuorescence detection (see section 6.2). Figure 6.1 (a) shows the dynamics of optical pumping and illustrates that the stretched Zeeman state of the ground-state manifold is already strongly populated during Doppler-cooling-
. A least-square exponen-

6.1 Initialization of the hyperﬁne clock state qubit

87

(a)

(b)

Frequency deviation from carrier (kHz)
Figure 6.2: (a) Excitation spectrum of the red and blue axial sideband of the quadrupole transition S1/2(F = 4, mF = 4) ↔ D5/2(F = 6, mF = 6). The excitation on the red sideband is strongly suppressed when sideband cooling is on ( ) compared to when it is omitted ( ). By comparison with the excitation after sideband cooling on the blue sideband (•) we obtain a mean population of the axial mode of n¯ax = 0.06. (b) Rabi oscillations on the blue sideband (ωax/(2π) = 1.18 MHz) of the transition S1/2(F-
 = 4, mF = 4) ↔ D5/2(F = 6, mF = 6) after ground-state cooling. The solid line is a least square ﬁt assuming a thermal state. It yields a mean occupation of the axial mode of n¯ax = 0.06.
tial ﬁt to the data points yields a time constant of 1.4 µs. After 10 µs, the desired state is populated in 98% of the cases.
The pumping eﬃciency can be improved by transferring the population after this ﬁrst step with a π-pulse to the D5/2(F = 6, mF = 6)-state and repeating the optical pumping. By applying another π-pulse on the same transition, the populations in S1/2(F = 4, mF = 4) and D5/2(F = 6, mF = 6) are exchanged. On average 98% should now be in S1/2(F = 4, mF = 4) and the rest in the D5/2-state. Finally the two populations are combined by switching on the 854 nm laser for a short time to clear out the D5/2-sta-
te via the P3/2(F = 5, mF = 5)-state from where it can decay only into the desired stretched state. For this scheme the same states are involved as for sideband cooling (see Fig. 6.1 (c)). The inset Fig. 6.1 (b) shows a histogram built from 100 measurements each comprising 100 experiments indicating a lower bound of the pumping eﬃciency of 99.2%.
After Doppler-cooling and optical pumping, an average population n¯ax = 10(5) of the axial mode is inferred from measuring the decay of Rabi oscillations on an axial sideband. The average number of quanta is heavily dependent on the laser detunings and powers.
6.1.2 Sideband cooling on the quadrupole transition
Cooling the ions to the motional ground-state is mandatory in order to maximize quantum gate ﬁdelities. In our experiment, it has been implemented with a scheme analogous to the one demonstrated with 40Ca+ ions about ten years ago [133]. In order to obtain a

Red sideband excitation to S1/2(F=6,mF=6)

88

6. Quantum information processing with a single 43Ca+ ion

excitation no sb-cooling

Raman detuning from carrier (MHz)
Figure 6.3: Mean excitation on the red sideband of the quadrupole transition S1/2(F = 4, mF = 4) ↔ D5/2(F = 6, mF = 6) after Raman sideband cooling where the relative frequency of the Raman light ﬁelds is scanned over the red sideband. Close to the red sideband resonance we observe a drop of excitation indicating a reduction of the mean phonon number of the axial mode.
closed cooling cycle (see Fig. 6.1 (c)), the frequency of the laser at 729 nm is tuned to the red sideband of the transition S1/2(F = 4, mF = 4) ↔ D5/2(F = 6, mF = 6). An additional quenching laser at 854 nm is required to increase the spontaneous decay rate to the energy level S1/2 by coupling the D5/2(F = 6, mF = 6) to the P3/2(F = 5, mF = 5)-state. Spontaneous decay to the stretched state takes the entropy away from the ion. In each cycle, one motional quantum can be removed.
The residual occupation of the motional mode was inferred from the ratio of the red and the blue sideband excitation (see Fig. 6.3 (a)) using Eq. (4.2). Alternatively, Rabi oscillations on the blue motional sideband of the transition S1/2(F = 4, mF = 4) ↔ D5/2(F = 6, mF = 6) can be observed to measure the average population of the axial mode (see Fig. 6.3 (b)). The solid line is a ﬁtted model function [89] with the average population of the axial mode n¯ax as a free parameter. From both methods, w-
e consistently obtain n¯ax = 0.06.
6.1.3 Raman sideband cooling
A second option for ground-state cooling that has been only brieﬂy studied so far is to use a Raman laser detuned from the S1/2 ↔ P1/2 dipole transition to implement cooling in a similar fashion as demonstrated for beryllium ions [134]. This technique is expected to have a number of advantages over the method exploiting the quadrupole transition. First, since the Lamb-Dicke parameter is larger by about a factor of four, the Raman method should be faster. Moreover, no narrow bandwidth laser stabili-
zed to the ion transitions is required but the relevant frequency is directly determined by setting a microwave signal generator appropriately. In a ﬁrst attempt we tested a continuous scheme where the phonons are taken out by transferring population on the red sideband of the transition

6.1 Initialization of the hyperﬁne clock state qubit

89

S1/2(F = 4, mF = 4) ↔ S1/2(F = 3, mF = 3) with a non-copropagating Raman light ﬁeld. Spontaneous scattering, induced by the light ﬁelds as set for optical pumping, transfers entropy away from the ions. In Fig. 6.3 a ﬁrst shot result is given where subsequently to the Raman sideband cooling the red sideband of the quadrupole transition S1/2(F = 4, mF = 4) ↔ D5/2(F = 6, mF = 6) was probed while the detuning of the two Raman light ﬁelds was varied. Close to the resonance of the red sideband the excit-
ation drops to a lower value indicating a signiﬁcant reduction of the harmonic oscillator mode population. Since the excitation does not vanish completely we have to improve the scheme by a more careful analysis of the used laser detunings and powers. In addition, a pulsed scheme can be tested where optical pumping and driving the red sideband with the Raman ﬁeld are applied alternately.

6.1.4 Transfer to the hyperﬁne clock states
Ground-state cooling on quadrupole transitions requires a closed cooling cycle which can only be achieved eﬃciently when working with the stretched hyperﬁne ground states S1/2(F = 4, mF = ±4). For this reason, methods are needed that allow for a transfer from these to the qubit state |↓ . Ideally, this process should be easy to implement, robust to its input parameters, fast, should not cause heating, and should be applicable to one or many ions at the time. Four diﬀerent techniques were under con-
sideration:

Optical pumping on the S1/2 ↔ P1/2 transition
The state |↓ could be populated by optical pumping with π-polarized light ﬁelds exciting the transitions S1/2(F = 4) ↔ P1/2(F = 4) and S1/2(F = 3) ↔ P1/2(F = 4) within a few microseconds. However, the many scattering events required to pump the population to the desired state are likely to heat up the ion from the motional ground-state. Moreover, the eﬃciency of the optical pumping would probably be fairly poor as small polarization imperfections of the beams and repumping via the S1/2(F = 4) ↔ P1-
/2(F = 3) transition are likely to occur.

Raman light ﬁeld
Transferring the population can also be achieved with a Raman light ﬁeld detuned from the S1/2 ↔ P1/2 dipole transition at 397 nm. In the simplest scenario, a sequence of four π-pulses would be used to populate the state |↓ starting from S1/2(F = 4, mF = ±4) by changing the magnetic quantum number in units of ∆m = ∓1. Use of copropagating beams with properly set beam polarizations can help to suppress unwanted excitations of motional sidebands and transitions to other Zeeman states.

90

6. Quantum information processing with a single 43Ca+ ion

(a)

(b)

Figure 6.4: (a) Pulse length scan of the second transfer pulse on the transition D5/2(F = 6, mF = 2) ↔ |↓ to initialize the hyperﬁne qubit. A weighted least square ﬁt with Eq. (6.1) reveals a fringe amplitude of 1.004(5) consistent with one. (b) Transfer probability measurement of an amplitude-shaped laser pulse on the transition S1/2(mF = 1/2) ↔ D5/2(mF = 3/2) of a single 40Ca+ ion as a function of the coupling strength Ω. Data were taken for four diﬀerent pulse lengths τ and frequency chirp span-
s ∆c as given in the plot legend. The lines indicate our theoretical predictions. With enough laser power available, the transfer probability hardly changes over a wide range of Rabi frequencies.
Microwave
Instead of a Raman light ﬁeld, also a microwave ﬁeld can be used to transfer the ions in a four-step process to |↓ . An additional advantage here is that the ﬁeld’s wavelength is huge compared to the distance of the ions and therefore an equal coupling of all ions to the ﬁeld is guaranteed.
A limitation for the methods based on Raman light ﬁelds and microwave radiation, is the small Clebsch-Gordan coeﬃcient (see Tab. 2.1) on the transitions S1/2(F = 3, mF = ±3) ↔ S1/2(F = 4, mF = ±2). That makes the whole process either slow or necessitates a larger frequency separation of the Zeeman levels in order to suppress non-resonant excitation of neighboring transitions.
Transfer via quadrupole transition
State transfer based on a laser operating on the quadrupole transition S1/2 ↔ D5/2 reduces the transfer process to two steps since the selection rules allow for ∆m = ±2. The duration of a π-pulse can be as short as a few microseconds, and only a single laser beam is needed that can be either focused to a small region or illuminate the whole trap volume. If the D5/2(F = 4) is chosen as intermediate state, a good compromise is achieved between the quadrupole coupling strength of the involved transit-
ions and the frequency separation of the neighboring D5/2-state Zeeman levels. The latter is by a factor 1.6 larger as for the ground states. In particular for low magnetic ﬁelds this method is expected to work

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:48.117Z
- **Text Length:** 225418 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
