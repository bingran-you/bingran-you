# PDF Document: (3D Trap minus Cavity - 2019 Reiner Pascal Eich) Single-ion based quantum interfaces for quantum-network applications.pdf

**File Path:** (3D Trap minus Cavity - 2019 Reiner Pascal Eich) Single-ion based quantum interfaces for quantum-network applications.pdf

**Processed Date:** 2026-02-10T18:15:20.489Z

**File Size:** 11301.33 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1022

**Title:** (3D Trap minus Cavity - 2019 Reiner Pascal Eich) Single-ion based quantum interfaces for quantum-network applications

**Collection:** Multiplexing

---

## Extracted Text Content

Single-ion based quantum interfaces for
quantum-network applications
Dissertation
zur Erlangung des Grades des Doktors der Naturwissenschaften der Naturwissenschaftlich-Technischen Fakultät
der Universität des Saarlandes
von
Reiner Pascal Eich
Saarbrücken 2019

Tag des Kolloquiums: 01.08.2019

Dekan:

Univ.-Prof. Dr. Guido Kickelbick

Berichterstatter:
Vorsitz: Akad. Mitarbeiter:

Univ.-Prof. Dr. Jürgen Eschner Univ.-Prof. Dr. Stephan Götzinger Univ.-Prof. Dr. Frank Mücklich Dr. Elke Neu-Rufﬁng

Abstract
Single-atom–based quantum memories have proven to be among the most promising candidates for large-scale quantum networks. This architecture consists of material quantum memories, represented by single trapped atomic ions, interconnected by photonic quantum channels. The communication protocol requires a bi-directional interface between atomic and photonic qubits as well as the implementation of a quantum-repeater scheme for long-haul state transmission.
In the current work, I present experiments that form a fundamental step towards the realization of a quantum network, based on single trapped 40Ca+ ions, in particular the implementation of an atom-photon quantum interface combined with the polarizationstate–preserving single-photon conversion into the telecom regime.
The theoretical part comprises a discussion of the fundamental properties of the 40Ca+ ion, followed by a treatment of the dipole emission pattern to gain a deeper understanding of the absorption and emission process.
Subsequently, the experimental implementation of two protocols for an atom-photon quantum interface at 393 nm and 854 nm is demonstrated. For the latter, I additionally demonstrate the quantum-state–preserving quantum frequency conversion of the single photon into the telecom O-band at 1310 nm.
Finally, we conducted an experiment as a ﬁrst step towards a global entangling atomic two-qubit gate, represented by the Mølmer-Sørensen gate, needed for quantum-repeater applications.
iii

Zusammenfassung
Einzelatombasierte Quantenspeicher gehören zu den aussichtsreichsten Kandidaten für ausgedehnte Quantennetzwerke. Diese Architektur besteht aus ortsgebundenen Quantenspeichern in Form gefangener atomarer Ionen, die durch photonische Quantenkanäle verbunden sind. Das Kommunikationsprotokoll benötigt eine bidirektionale Schnittstelle zwischen atomaren und photonischen Qubits sowie die Implementierung eines Quantenrepeater-Schemas für langreichweitigen Zustandstransfer.
In der vorliegenden Arbeit präsentiere ich Experimente, die einen fundamentalen Schritt hin zur Umsetzung eines auf einzelnen gefangenen 40Ca+-Ionen basierenden Quantennetzwerks darstellen, insbesondere die Implementierung einer Atom-Photon-Schnittstelle, kombiniert mit polarisationserhaltender Einzelphotonenkonversion in den Telecom-Bereich.
Der theoretische Teil umfasst die Diskussion der fundamentalen Eigenschaften des 40Ca+Ions, gefolgt von einer Abhandlung der Dipolemissioncharakteristik, um ein tieferes Verständnis der Absorptions- und Emissionsprozesse zu erlangen.
Anschließend wird die Implementierung zweier Atom-Photon-Schnittstellen-Protokolle bei 393 nm, und 854 nm vorgestellt. Für letztere zeigen wir zudem die Quantenzustandserhaltende Frequenzkonversion des Einzelphotons in das Telecom-O-Band bei 1310 nm.
Letztlich zeigen wir erste Schritte zur Realisierung lokaler verschränkender Zwei-QubitGatter, dargestellt durch ein Mølmer-Sørensen-Gatter, als Baustein zur Umsetzung von Qantenrepeater-Anwendungen.
iv

Contents

Introduction

1

Journal publications

9

1. The 40Ca+ ion

11

1.1. Level scheme . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11

2. Experimental setup

15

2.1. Ion-trap system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15

2.1.1. The Paul trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16

2.1.2. Trap potential . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17

2.1.3. Photo ionization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18

2.1.4. Trap setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19

2.2. Laser system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23

2.2.1. Laser sources . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24

2.2.2. Transfer locking . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26

2.2.3. Pound-Drever-Hall technique . . . . . . . . . . . . . . . . . . . . . . . 27

2.2.4. Qubit laser . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28

2.2.5. High-ﬁnesse ULE cavity . . . . . . . . . . . . . . . . . . . . . . . . . . 30

2.3. Experiment control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31

3. Experimental methods

33

3.1. Laser cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33

3.2. Optical pumping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36

3.3. Coherent manipulations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38

3.3.1. Atomic single-qubit rotations . . . . . . . . . . . . . . . . . . . . . . . 38

3.3.2. Coherent manipulations on the optical quadrupole transition . . . . 41

3.3.3. Coherent manipulations on the radio-frequency transition . . . . . . 41

3.3.4. Light shift . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42

3.4. Atomic state analysis by ﬂuorescence detection . . . . . . . . . . . . . . . . . 43

3.5. Zeeman splitting and Larmor phase . . . . . . . . . . . . . . . . . . . . . . . 47

3.6. Coherence time . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48

4. Single-atom–single-photon interaction

53

4.1. Spontaneous Raman scattering in a three-level system . . . . . . . . . . . . . 54

v

4.2. Emission properties of optical dipoles . . . . . . . . . . . . . . . . . . . . . . 58 4.2.1. Optical dipole transitions . . . . . . . . . . . . . . . . . . . . . . . . . 58 4.2.2. Spatial dependence of the photon polarization . . . . . . . . . . . . . 59 4.2.3. Free-space collection . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61 4.2.4. Single-mode coupling . . . . . . . . . . . . . . . . . . . . . . . . . . . 62 4.2.5. Mode matching . . . . . . . . . . . . . . . . . . . . . . . . -
. . . . . . . 65
4.3. Quantum-mechanical formalism . . . . . . . . . . . . . . . . . . . . . . . . . 66 4.4. Inﬂuence of the polarization directionality . . . . . . . . . . . . . . . . . . . . 69

5. Programmable atom-photon interface

73

5.1. Atom-photon interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73

5.2. Photon-to-atom state transfer . . . . . . . . . . . . . . . . . . . . . . . . . . . 77

5.3. Atom-to-photon state transfer . . . . . . . . . . . . . . . . . . . . . . . . . . . 83

5.4. Atom-photon entanglement at 393 nm . . . . . . . . . . . . . . . . . . . . . . 88

6. Experiments for quantum-repeater applications

93

6.1. The quantum repeater . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94

6.2. Atom-photon entanglement at 854 nm . . . . . . . . . . . . . . . . . . . . . . 96

6.2.1. Generation of an entangled atom-photon state at 854 nm . . . . . . . 96

6.2.2. Atom-photon state tomography . . . . . . . . . . . . . . . . . . . . . 100

6.2.2.1. State reconstruction . . . . . . . . . . . . . . . . . . . . . . . 101

6.2.2.2. Maximum-likelihood estimation . . . . . . . . . . . . . . . . 103

6.2.2.3. Experimental results . . . . . . . . . . . . . . . . . . . . . . . 103

6.2.2.4. Error budget . . . . . . . . . . . . . . . . . . . . . . . . . . . 107

6.3. Quantum frequency conversion . . . . . . . . . . . . . . . . . . . . . . . . . . 108

6.3.1. Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108

6.3.2. Converter setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110

6.3.3. Polarization-independent single-photon conversion . . . . . . . . . . 111

6.4. Atom-photon entanglement in the telecom band . . . . . . . . . . . . . . . . 111

6.5. Atom-to-photon state transfer in the NIR . . . . . . . . . . . . . . . . . . . . 114

6.5.1. Experimental sequence . . . . . . . . . . . . . . . . . . . . . . . . . . 115

6.5.2. Quantum-process tomography . . . . . . . . . . . . . . . . . . . . . . 117

6.5.3. Experimental results . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119

6.5.4. Error budget . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121

7. Prospect: Towards local atomic two-qubit gates

125

7.1. Single-ion addressing and single-qubit gates . . . . . . . . . . . . . . . . . . 125

7.1.1. Addressed single-qubit σx rotations . . . . . . . . . . . . . . . . . . . 126

7.1.2. Addressed single-qubit σz,σx rotations . . . . . . . . . . . . . . . . . . 127

7.2. The Mølmer-Sørensen gate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128

7.2.1. Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129

7.2.2. Numerical simulations . . . . . . . . . . . . . . . . . . . . . . . . . . . 132

vi

7.2.3. Experimental parameters . . . . . . . . . . . . . . . . . . . . . . . . . 137 7.2.4. Experimental results . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137

8. Conclusion and outlook

141

A. Appendix

145

A.1. Dipole-emission properties and photon collection . . . . . . . . . . . . . . . 145

A.1.1. Spatial dependence of the photon polarization . . . . . . . . . . . . . 145

A.1.2. Free-space collection . . . . . . . . . . . . . . . . . . . . . . . . . . . . 148

A.1.3. Single-mode coupling . . . . . . . . . . . . . . . . . . . . . . . . . . . 149

A.1.4. Mode matching . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152

A.2. Single-qubit state reconstruction . . . . . . . . . . . . . . . . . . . . . . . . . 154

A.3. Linear entangled-state reconstruction . . . . . . . . . . . . . . . . . . . . . . 155

A.4. Maximum-likelihood estimation . . . . . . . . . . . . . . . . . . . . . . . . . 158

A.5. Numerical simulation of the Mølmer-Sørensen gate . . . . . . . . . . . . . . 160

A.6. Mølmer-Sørensen gate on the radial sidebands . . . . . . . . . . . . . . . . . 164

Bibliography

177

vii

Introduction
Probably one of the most important technological advancement of the last century is the development of semiconductor-based computers [1, 2] and with it the invention of the internet [3], facilitating the world-wide distribution and availability of information. Of course, the proliferation of the internet in the modern world, comprising nearly all aspects of our daily lives, makes it more and more vulnerable towards malicious cyber-attacks, requiring yet more elaborate cryptographic [4, 5] methods -
for secure communication. At the same time, increasingly complex data processing and computational tasks demand for increasing computational power or novel techniques.
In the early 20th century, a revolutionary new concept appeared with the development of quantum physics [6, 7, 8, 9] that represents a potential solution for both of these challenges. The emergence of quantum technologies around the end of the last and the beginning of the new century initiated a process where new applications for these technologies were sought. One of the founders of quantum computation was Richard Feynman, who, back in 1982, proposed an architecture for quantum gates for computa-
tion purposes [10, 11]. This process eventually led to the development of quantum algorithms, whereof the DeutschJozsa [12], Shor [13], and Grover algorithm [14] are probably the most prominent ones, but also other implementations such as quantum simulators [15, 16, 17, 18, 19] emerged.
First important impulses towards modern quantum-information processing were given when Deutsch presented a method for the implementation of a universal quantum computer [20], based on Feynman’s pioneering work.
Peter Shor realized in 1994 that quantum mechanics can be utilized to ﬁnd the primefactor decomposition and calculate discrete logarithms much more efﬁciently than with any classical computer. This discovery raised quite some attention as the hardness of prime-factor decomposition of large numbers and discrete logarithms were of great importance for some cryptographic principles [5].
Further progress was made when Grover developed a quantum-enhanced algorithm to ﬁnd elements in an unsorted database which proved to be polynomially faster than any classical algorithm known to that point. Over the years, many other, mostly very specialized, quantum algorithms developed and are still being developed. However, for a long period in time, these algorithms remained merely theoretical constructs due to the lack of a suitable platform for the physical implementation.
In recent years, signiﬁcant progress has been made concerning the control of isolated quantum systems such as single trapped ions, single atoms, or single photons, and in that context, the realization of fundamental quantum processors became possible, demonstrating for instance a basic implementation of Shor’s algorithm [21] or the Grover search algo-
1

Introduction
rithm on a programmable quantum computer [22]. Due to their controllability and good isolation from environmental inﬂuences and the
comparably high ﬂexibility and facile programmability of complex quantum gates, single trapped ions arose as one of the most promising platforms for quantum computers and closely related quantum-communication protocols. They were shown to allow for very high gate ﬁdelities [23, 24] and coherence times while simultaneously achieving nearly unlimited storage times [25]. Single-ion–based quantum computers utilize strings of trapped ions as a quantum register [26] for quantum-information processing [2-
7]. Important milestones were achieved with the demonstration of the Deutsch-Jozsa algorithm [28], the quantum Fourier transform [29], and the implementation of a universal quantum computer [30].
Though achieving impressive results concerning the storage and processing of quantum information on the single-ion platform, the size of the quantum registers is limited due to the repulsive interaction between the ions, inherently yielding great challenges regarding the scalability of these systems. Various approaches are pursued to tackle this limitation, including the miniaturization of the ion traps [31, 32, 33] to implement a number of quantum sub-processors [34] that are connected via photon-
ic interaction [35, 36], or shuttling of individual ions to transfer quantum information from one sub-processor to an other [37, 38, 39, 40, 41].
Alternative to these local approaches, other strategies like non-local distributed quantum computing [42, 43], connecting small remote processing units via quantum channels to carry out quantum-computation tasks at different locations, emerged. Thinking this ansatz further results in the idea of a quantum internet as proposed by Kimble in 2008 [44]. A crucial element for distributed quantum computing (DQC) or even a fully developed quantum internet is an efﬁcient quantum channel to establish the c-
onnection between the sub-units. For larger distances, photonic quantum channels represent the only viable possibility for fast, efﬁcient and robust quantum communication.
Quantum communication
The link between the individual nodes of a DQC network or a general large-scale quantum network is typically established via photonic quantum channels that couple the stationary qubits either via direct quantum-state transfer [45, 46, 47], indirectly utilizing photonic interaction in a projective-Bell-state measurement (BSM) [48, 49], or via quantum teleportation [50, 51, 52]. Different strategies for the photon transfer exist, e.g. satellite-based freespace transmission [53, 54, 55] or schemes bu-
ilding upon the already established earthbound ﬁber infrastructure [56].
Apart from applications in the context of DQC, the distribution of quantum information via photonic quantum channels opens the door to a whole range of other applications, of which quantum key distribution (QKD), a technique for the intrinsically secure generation of private keys for the encryption of information sent via (principally vulnerable) classical
2

Introduction
communication channels, is probably the most eminent in times where the exchange of large amounts of sensitive information becomes more and more important.
The perhaps most prominent representatives of QKD protocols are BB84 [57], named after its inventors Charles H. Bennett and Gilles Brassard and the year it was ﬁrst presented, and the similar protocol E91 (proposed by Artur Ekert in 1991 [58]), which shall be brieﬂy discussed in the following. Simply spoken, E91 (and likewise BB84) exploits the no-cloning theorem of quantum mechanics to recognize an attacker eavesdropping the communication channel. For the generation of a secure encryption key, tw-
o communication partners, traditionally named Alice and Bob, share pairs of entangled particles (the original proposal for the E91 protocol assumes entangled photon pairs, but the protocol is as well applicable to other entangled systems like pairs of entangled atomic ions). Both, Alice and Bob, randomly and independently choose a measurement basis and store the outcome of the measurement for later usage. In the case of entangled photon pairs, a typical set of measurement bases are the two linear -
basis pairs H/V (horizontal/vertical) and D/A (diagonal/anti-diagonal). Subsequently, Alice and Bob publish their measurement bases and omit the events where the respective bases did not coincide.
The basic idea to make the protocols tap-proof is the projective nature of a quantummechanical measurement. Therefore, an eavesdropper – called Eve – intercepting Bob’s photon, being fully ignorant of Alice’s and Bob’s basis choice, destroys the quantum state of the measured photon. Hence the photon state which Eve sends to Bob that mimics the original photon, is no longer correlated with Alice’s photon, thus the quantum statistics measured by Alice and Bob is altered and the eavesdropper is detec-
ted when Alice and Bob communicate a (sufﬁciently long) random sub-set of their measured results via a classical communication channel1.
Once the secure communication is veriﬁed, Alice and Bob generate their private keys from the remaining valid measurements (i.e. the measurements where both choose the same measurement basis), knowing their own result and hence, due to the quantum entanglement of the pairs, also the result of their communication partner. This key is utilized to encrypt a massage which is then sent through a (potentially insecure) classical communication channel. Even if the classical channel is exposed to an eavesd-
ropping attack, the massage is still inherently secure as only the two designated communication users Alice and Bob share the key for decryption.
The ability of the QKD protocols to detect an eavesdropping attack relies on the fact that all errors, up to a certain threshold, can be attributed to an eavesdropper and not to information loss like depolarization or detector dark counts. It is therefore essential for the feasibility of the protocols to achieve low-loss photon transmission to attain a high signalto-background ratio. However, exponential damping due to absorption or scattering in
1A number of methods to exploit a weakness in avalanche photo diodes to hack the in principle secure photon-based quantum-cryptography protocols have been proposed and demonstrated [59]. These vulnerabilities can in principle be avoided by, for instance, using pairs of entangled atomic ions instead of photons. However, of course, transfer and storage efﬁciencies then play a crucial role.
3

Introduction
standard optical ﬁbers impedes the fulﬁllment of that requirement, even in the low-loss telecom spectral regime for realistic communication distances of several hundreds of kilometers. A quantum-repeater network might represent a solution for efﬁcient long-haul quantum communication and establishment of entanglement between remote qubits, either photonic or atomic.
Quantum repeaters
Quantum repeaters, especially quantum-memory–based quantum repeaters, provide an elegant method to counteract inevitable photon losses in long photonic quantum channels. Since simple ampliﬁcation of the signal (the single photons) like in classical repeaters, i.e. the creation of an exact copy of the signal photon, is impossible due to the no-cloning theorem (which, if it wasn’t impossible, would render the whole cryptography protocol useless), a solution suitable to the conditions of the quantum -
world has to be found.
Instead of using a single long quantum channel, the deployment of memory-based quantum repeaters allows to split the channel into separate sub-channels, whose length is reduced accordingly, connected via quantum-repeater units. These quantum-repeater units store the quantum information encoded in the photons until the corresponding partner photon has arrived and its state is mapped into the quantum memory as well. Local operations subsequent to the quantum-state storage2 then establish a link betw-
een consecutive repeater nodes (cf. section 6.1). Eventually, entanglement (or state transfer) between the two target qubits is established. Owing to the reduced sub-quantum-channel length, the signal-transmission efﬁciency is, given several circumstances, increased and with it the signal-to-background ratio (SBR), crucial to the viability of the quantum-cryptography protocols.
Of course, a net gain in the SBR is only achieved if the signal-loss reduction due to the lower channel length overcompensates the non-ideal quantum-state–transfer efﬁciency from the photonic qubit to the repeater quantum memory. This requires reliable, efﬁcient and high-rate quantum interfaces between the single photons and the quantum memories (represented e.g. by single trapped ions or single neutral atoms). There exists a number of different platforms for quantum-repeater memories, comprising -
single systems like quantum dots, defects in crystals (like nitrogen-vacancy or silicon-vacancy centers), or single atoms or atomic ions, or ensemble systems like cold atoms. For single atomic ions, several approaches exist for the implementation of quantum interfaces, comprising cavity-coupled systems [63, 64, 65, 66] or free-space coupling using high-numericalaperture lenses [67, 68]. Due to their good isolation from environmental inﬂuences like uncontrolled interactions with nearby atoms and th-
e relatively good controllability, we in our group decided to work with trapped single atomic ions, and hence the following description is tailored to this kind of system.
2The most recent results can be found, e.g., in [60, 61, 62]
4

Introduction
The second requisite, apart from the implementation of a quantum-repeater scheme, to facilitate long-haul QKD is the reduction of channel-transmission losses between the repeater nodes. Building upon an already set-up ﬁber infrastructure, this means that the photon wavelength ideally lies withing the telecom range between between 1260 nm and 1625 nm, where ﬁber losses are particularly low. Depending on the physical system, this condition is not always fulﬁlled. Considering for instance single-ion–-
based quantum repeaters, the transition wavelengths are determined by the atom species and do very often not lie in the desired wavelength region. Nonetheless, there exist tools to resolve that obstacle. An obvious but challenging approach, which has been implemented only recently and is an active ﬁeld of investigation [69, 70, 71, 72], is to deploy quantum frequency conversion to translate the wavelength of the quantum-information–bearing single photon, originally not in the telecom band, into th-
e desired wavelength region.
This work
For the above-mentioned applications, efﬁcient quantum interfaces between the stationary quantum-processing units and the photonic quantum channels as well as low-loss photon transmission play a crucial role for the physical implementation. This thesis primarily focuses on the conception and experimental implementation of single-photon–single-atom entanglement between a single 40Ca+ ion and a telecom photon, employing high-efﬁciency, low-loss quantum-state–preserving single-photon quantum frequenc-
y conversion (QFC) [73, 74] to address the challenge of long-range quantum communication. Furthermore, ﬁrst steps towards local entangling two-ion gates – a prerequisite for the realization of single-ion–based quantum repeaters – are presented.
The 40Ca+ ion itself is the topic of the ﬁrst chapter, where its level structure and all relevant transitions are presented.
The second chapter gives an overview over the experimental setup; at its heart the iontrap apparatus – a linear Paul trap – surrounded by a complex overhead, comprising various diode-laser systems and electronic devices for experimental control. The laser systems are necessary to address the different transitions, lying in the visible and near-infrared (NIR) spectral region, of the 40Ca+ ion which forms the working horse of our experiments. Of particular interest is the narrow-band qubit laser at -
729 nm that coherently drives a quadrupole transition of 40Ca+.
In the third chapter, coherent qubit manipulations on the quadrupole and radio-frequency transitions, as well as the effect of external ﬁelds onto the ion, like Zeeman splitting, light shifts, and magnetic decoherence are treated. Furthermore, common experimental techniques like Doppler cooling and frequency-resolved optical pumping are discussed.
Finally, single-photon-single-atom interaction and the spatial emission and absorption characteristics of dipole transitions are investigated in the fourth chapter before the experimental results are presented in the further course of the thesis.
Chapter 5 brieﬂy recapitulates the experimental implementation of a universal, pro-
5

Introduction
grammable quantum interface, built on the coherent manipulation of a single trapped 40Ca+ ion. The interface is capable of transferring quantum information encoded in the polarization state of a single NIR photon at 854 nm onto the electronic state of the ion by controlled absorption. The process is heralded by the detection of a single 393 nm photon that signals the success of the state mapping. In a similar manner, the mapping of a qubit initially stored in the atomic state onto a single blue ph-
oton at 393 nm is realized. In addition, the interface scheme allows for the generation of an entangled atom-photon state between the ion and the emitted photon at 393 nm.
Due to the rather unfavorable wavelength of the 393 nm photon in the previous scheme, which exhibits adverse properties like strong absorption in optical ﬁbers, an alternative interface protocol has been developed in the course of this work, presented in Chapter 6. Instead of working with single photons in the blue spectrum, we generated atom-photon entanglement and atom-to-photon state mapping in the near infrared at 854 nm. This milestone gave rise to the possibility for the implementation of qu-
antum frequency conversion from 854 nm to 1310 nm to facilitate atom-photon entanglement between the 40Ca+ ion and a photon in the low-loss telecom band.
The greater vision behind this work is the demonstration of a proof-of-principle quantumrepeater–based quantum network. Besides the photonic part and the quantum interface, which both are the topic of the previous chapters, a quantum repeater, which reduces the effective quantum-channel length, requires local entangling multi-qubit gates for the processing of quantum information between single ions3. The last chapter shows ﬁrst steps towards this missing link based on the Mølmer-Sørensen gate, inc-
luding several necessary experimental techniques like single-ion addressing, and discusses possible sources and problem-solving approaches for the observed gate imperfections.
This work forms a substantial advancement within the scope of a series of experiments and developments, which, starting various years ago, still are part of an ongoing process that will extend further into the future. Therefore, all results presented here are not the achievement of a single person, but rather represent the joint effort of a dynamically evolving team and is based on the work of generations of scientists in our group and beyond. Many enthusiastic people contributed over the years to-
 build and improve the technical set-up this work is based upon (chapter 2). Their work formed the fundamental for all results obtained since and is described in detail in their respective theses [75, 76, 77, 78, 79, 80]. Apart from the hardware, the development of methods routinely used in the experiment was of great importance and a very valuable legacy from the former generations of students. These methods are brieﬂy depicted in chapter 3.
Of course, the progress did not stop after these people left the group, and so further improvement was undertaken to achieve the next milestones. My dedicated part from a technical perspective was the rearrangement of the optical setup in the proximity of the ion trap, e.g. the replacement of the former photomultiplier tubes (PMT) by two avalanche
3Through entanglement swapping from a local pair of ions onto a remote ion pair (see section 7 for details)
6

Introduction
photo diodes (APD) for improved detection efﬁciency of single 393 nm photons or the implementation of a 729 nm beam line for single-ion addressing to make the experiment suitable for future applications. In addition to the development and implementation of many new experimental sequences, I acquired and installed a new 393 nm diode laser which made most of the experiments presented in chapter 6 possible.
Efﬁcient realization of the quantum-interface protocols treated in this thesis requires a profound understanding of the underlying absorption and emission processes. For that purpose, I did a detailed analysis of the spatial dependence of the polarization of photons emitted on an optical dipole transition, which is presented in chapter 4. Some of these results are based on the work of Philipp Müller, being described in full detail in his PhD thesis [81].
Earlier work in the context of this PhD project lead to the realization of a programmable ion-photon interface at a wavelength of 393 nm, which partially already appeared in Christoph Kurz’ dissertation thesis [79] and is summarized in chapter 5 and in [82].
Chapter 6 constitutes the major content of this thesis and essentially represents my main contribution. Certainly, also other people participated in the success of that experiment. In particular, this comprises the collaboration with Matthias Bock from the group of Christoph Becher, who built and operated the frequency-converter. An overview of the quantum-frequency converter is given in that chapter. The fully-detailed description will be given in Matthias’ thesis [73].
Eventually, the ﬁnal chapter 7 describes ﬁrst steps towards local two-ion gates. Although the chapter itself is short compared to others, Matthias Kreis and I spent a signiﬁcant amount of time in the laboratory while conducting these experiments and searching for the source of the gate-ﬁdelity reduction
7

Journal publications
Part of the work of this thesis has been published in refereed journals: High-ﬁdelity entanglement between a trapped ion and a telecom photon via quantum frequency conversion M. Bock, P. Eich, S. Kucera, M. Kreis, A. Lenhard, C. Becher, J. Eschner Nat. Commun. 9, 1998 (2018)
Programmable atom-photon quantum interface C. Kurz, P. Eich, M. Schug P. Müller, J. Eschner Phys. Rev. A 93, 062348 (2016)
Further associated work: Doubly-heralded single-photon absorption by a single atom J. Brito, S. Kucera, P. Eich, P. MÃ¼ller, J. Eschner Appl. Phys. B, 122:36 (2016)
Telecom-heralded single-photon absorption by a single atom A. Lenhard, M. Bock, C. Becher, S. Kucera, J. Brito, P. Eich, P. Müller, J. Eschner Phys. Rev. A 92, 063827 (2015)
Experimental protocol for high-ﬁdelity heralded photon-to-atom quantum state transfer C. Kurz, M. Schug, P. Eich, J. Huwer, P. Müller, J. Eschner Nat. Commun. 5, 5527 (2014)
Quantum interference in the absorption and emission of single photons by a single ion M. Schug, C. Kurz, P. Eich, J. Huwer, P. Müller, J. Eschner Phys. Rev. A 90, 023829 (2014)
9

1. The 40Ca+ ion
Singly-ionized alkaline-earth-metal atoms are a well-established quantum system for a variety of applications [19, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92], in particular for quantum networks and quantum-repeaters and, very recently, even for the development of commercial quantum computers [93], due to their rather simple and well understood level structure and optical addressability of atomic transitions in the visible or (near) infrared spectral region for laser cooling and qubit manipulations. W-
hat makes these alkaline-earth ions so exceptional is the fact that they exhibit only one valence electron which simpliﬁes theoretical and experimental considerations signiﬁcantly.
In our experiment, we work with singly-charged Calcium-40. 40Ca has a nuclear spin of I = 0 and thus shows no hyperﬁne splitting. Although hyperﬁne splitting (as occurring for instance in 43Ca+) is beneﬁcial for certain aspects like microwave gates and the existence of clock states with long coherence times, it usually requires the presence of additional lasers for cooling and repumping, which makes it impractical for our purposes.
This chapter brieﬂy treats the level structure of the 40Ca+ ion, showing the atomic states and transitions that are relevant in the experimental framework.
1.1. Level scheme
40Ca+ shows ﬁve (easily accessible) states, 42S1/2, 42P1/2, 42P3/2, 32D3/2, and 32D5/2, of which two, 32D3/2 and 32D5/2, are metastable with a lifetime of more than one second. These states are further split by an external magnetic ﬁeld according to the projection of their total angular momentum j, characterized by the magnetic quantum number mj. This Zeeman splitting opens up the possibility of frequency-selective addressing of individual quadrupole transitions and coherent manipulations of the g-
round-state qubit and is therefore crucial for the viability of our experimental protocols, but at the same time entails vulnerability towards magnetic-ﬁeld ﬂuctuations so that additional effort has to be put into the elimination of magnetic noise.
Two short-lived states, 42P3/2 and 42P1/2, with a lifetime in the order of 7 ns, rapidly decay into either the metastable states or, most likely, into the energetic ground state 42S1/2 upon excitation. The short-lived states can be regarded as auxiliary states for cooling, ﬂuorescence-assisted state discrimination on the S1/2 ↔ P1/2 transition at 397 nm, and single-photon generation on the transition from P3/2 to the meta-stable D5/2 state at 854 nm, as explained later in this thesis. In the latte-
r case, the S1/2 ↔ P3/2 transition at 393 nm is used for excitation into the short-lived state.
11

1. The 40Ca+ ion

Additional dipole transitions involved in the experiment are those from D3/2 to P1/2 at 866 nm, which is used for repumping from the meta-stable D3/2 state during Doppler cooling (cf. section 3.1) and ﬂuorescence generation at 397 nm, and the 850 nm transition from D3/2 to P3/2, which is currently used for the alignment of the quantization axis. The quadrupole transition from S1/2 to D5/2 at 729 nm plays a special role in the experiment as it is used for coherent manipulations on the optical S-D q-
ubit. For manipulations of the ground-state qubit between the two Zeeman sublevels in S1/2, typically in the order of 8 MHz, we installed a radio-frequency coil below the trap chamber. There exists an other quadrupole transition S1/2 ↔ D3/2 which is not used in the current experiments.
All states involved in the present experiments are displayed in ﬁg. 1.1 along with their Landé factors, the precise lifetime values, the transitions between these states and their respective (reduced) Einstein coefﬁcients.

P3/2
gj = 4/3, τ = 6.924 ns
P1/2
gj = 2/3, τ = 7.098 ns
S1/2
gj = 2

393 nm
A¯ = 21.49 MHz
397 nm
A¯ = 20.98 MHz

40Ca+

A¯ =815.435nMmHz A¯ =8A16¯.46=48n15M5m02HnkzHmz
A 7A¯=2=911n33m66m6Hmz h

732 nm

D5/2
gj = 6/5, τ = 1.168 s
D3/2
gj = 4/5, τ = 1.176 s

Figure 1.1.: Relevant level scheme of the 40Ca+ ion. gj and τ denote the Landé factors and the natural lifetimes of the states, respectively. Arrows depict optical transitions between the levels, together with their wavelengths and the reduced Einstein coefﬁcients A/2π.

The Einstein coefﬁcients correspond to the oscillator strengths for the transition from an initial state |i into a state |g and were measured with high precision for 40Ca+ [94, 95].

The sum of all Einstein coefﬁcients Ai→g for the decays from |i into all other states gives

the total decay rate Γi (where i denotes the individual states, i.e. P3/2, P1/2 etc.) which

is directly related

to

the

natural lifetime τi

via

Γi

=

1 τi

(and therefore also corresponds to

the linewidth of transitions coupling to the state). The ratio of the Einstein coefﬁcients for

different decays from the same excited state is called the branching ratio and represents

the ratio of the probabilities for decay along the respective channels. A perhaps slightly

more intuitive quantity is the branching fraction Ai→g/Γ which can be interpreted as the probability that the ion "chooses" a certain decay branch.

Non-zero branching ratios, i.e. the existence of multiple decay channels, imply a time-

12

1.1. Level scheme

bandwidth product above the Fourier limit for photons along that transition, as it is particularly the case for single photons emitted on the infrared transitions at 850 nm, 854 nm, and 866 nm. The latter can be understood intuitively in the following picture: if there is more than one decay channel, it takes on average more than one excitation cycle to generate a photon on a particular transition, while the spectral bandwidth of that photon is by the single-photon–generation time, i.e. the time f-
or the generation of a photon on any of the transitions. This circumstance is discussed again in section 4.1.
The decay rates for the relevant levels and their transition wavelengths λ and branching fractions are summarized in tab. 1.1 (as found in [78]).

State τ

Γ

Transitions

λ

Branching fraction

P3/2 6.924 ns 2π·22.986 MHz P3/2 → S1/2 393.4775 nm P3/2 → D5/2 854.4433 nm P3/2 → D3/2 850.0361 nm

93.47% 5.87% 0.66%

P1/2 7.098 ns 2π·22.423 MHz P1/2 → S1/2 396.9590 nm P1/2 → D3/2 866.4515 nm

93.565% 6.435%

D5/2 1.168 s 2π·136 mHz D5/2 → S1/2 729.3473 nm

100%

D3/2 1.176 s 2π·135 mHz D3/2 → S1/2 732.5903 nm

100%

Table 1.1.: Relevant levels, lifetimes τ and total decay rates Γ. The possible decay channels, their wavelengths and the branching fractions for the respective decays are listed.

Within the transition from one state |i to another state |g (e.g. from P3/2 to D5/2 at 854 nm), a substructure appears due to the splitting of the Zeeman sublevels by their magnetic quantum number m. The oscillator strength for the transition |i, mi → |g, mg (as long as it is dipole-allowed, i.e. when ∆m = 0, ±1 is fulﬁlled) is then determined by the Clebsch-Gordan coefﬁcient (CGC) for the transition |mi → |mg . The Clebsch-Gordan coefﬁcients arise due to the coupling of orbital angular momentum a-
nd spin and their re-
spective magnetic quantum numbers (that is, their projections onto the quantization axis)
to the total angular momentum and its magnetic quantum number. In other terms, they
originate from a basis transformation from the uncoupled to the coupled eigenbases of the
system. A detailed discussion is, for example, found in [96], a table of commonly appearing CGCs is given in [97]. Fig. 1.2 shows the Clebsch-Gordan coefﬁcients for the D5/2 ↔ P3/2 (854 nm) and the P3/2 ↔ S1/2 (393 nm) transitions which have the highest relevance for our experimental protocols.

13

1. The 40Ca+ ion

P3/ 2 D5/ 2

−

3 2

+

3 2

10 1 6 3 3 6 1 10 −4 −6 −6 −4

×

1 15

−

5 2

+

5 2

2 31

2 13

×

1 3

S1/ 2

−

1 2

+

1 2

Figure 1.2.: Clebsch-Gordan coefﬁcients for the D5/2 ↔ P3/2 (854 nm) and the P3/2 ↔ S1/2 (393 nm) dipole transition. Note that this representation gives the intensity of the transition, that is the square

modulus of the actual CGC. A – indicates a minus sign in front of the square root. Taking for

instance the transition |P3/2, +1/2 → |D5/2, +1/2 , we ﬁnd a Clebsch-Gordan coefﬁcient of −

6 15

.

14

2. Experimental setup
The heart and soul of each quantum-optical work is the experimental setup which usually grows organically with the complexity of the performed measurements. A (stationary) qubit constitutes the center of all quantum-optical information technology. Single atomic ions have proven to be suitable candidates as stationary qubits or quantum memories in a quantum network [98, 99, 100] due to their long coherence time [101, 102, 103], good isolation from the environment, long storage times (in the order o-
f days to weeks, depending on the experimentalist’s enthusiasm and patience), the relatively easy manipulation of quantum information stored in the ion [77, 104, 105, 106], and their ability to reliably couple to "ﬂying" qubits, i.e. optical photons [82, 107, 108].
The ion used in the experiments presented in this thesis is 40Ca+, which was discussed in more detail in chapter 1. 40Ca+ exhibits six optical transitions that are addressed in the experiments. Furthermore, two additional laser systems for the photo ionization of atomic Calcium (see section 2.1.3) and our laser-locking scheme (section 2.2.2) are needed, summing up to eight laser systems in total.
In addition to the lasers needed to cool and manipulate the ion, the ion-trap apparatus, based on a linear Paul trap in a vacuum chamber, embodies the second building block for the ion experiments.
This ﬁrst part of this chapter treats the linear Paul trap, including a theoretical description, the photo-ionization process of the atomic Calcium, and the optical setup surrounding the trap. In the second part, the diode-laser systems are presented, together with the narrow-band qubit laser and our transfer-locking scheme for laser-frequency stabilization.
2.1. Ion-trap system
The key ingredient for modern single-ion–based quantum-optics technology dates back to the year 1953, when Wolfgang Paul developed an electrical quadrupole mass spectrometer [109] which was later extended to today’s Paul traps [110]. The Paul trap facilitated the storage and manipulation of single ions and has thus become a widely-used tool for quantum optics [111], quantum computation [22, 112, 113], quantum simulations [114, 115, 19], and quantum metrology [116, 117].
Single atomic ions are generated by a laser-assisted two-photon photo-ionization process that will be described in the course of this section.
The integration of single ions into larger-scale quantum networks requires an optical
15

2. Experimental setup
atom-photon interface and the ability of single- and multi-qubit manipulations of the ions. Manipulation of the trapped ions is carried out by laser and radio-frequency pulses, while coupling of the ions to single photons and collection of single photons emitted by the ions is implemented by two high-numerical-aperture laser objectives (HALO) situated in close proximity to the ions. The description of the optical setup represents the ﬁnal part of this section.
2.1.1. The Paul trap
The Paul trap consist of four electrodes aligned along the trap axis to which an oscillating radio-frequency voltage is applied, and two DC electrodes at both ends of the linear trap, generating a quasi-static potential inside the trap. A charged particle, e.g. a single atomic ion, entering the trap potential, is conﬁned inside the trap. The realization of a linear Paul trap in our setup, originally designed and partially manufactured in the group of Prof. Rainer Blatt at the University of Innsbru-
ck [118], is shown in ﬁg. 2.1. The trap is built of two pairs of electrode blades, one pair held at ground, while

Utip Utip

URF cos(WRF t)

Ground

(a)

(b)

Figure 2.1.: (a) Schematic depiction of the linear Paul trap, consisting of four blade electrodes for the radial and two end tips for the axial conﬁnement of the ions. (b) Picture of the actual Paul trap. The distance between two opposite blades is 1.6 mm, the end-tip electrodes are separated by 5 mm. (From [77, 75])

an oscillating radio-frequency voltage is applied to the other blade pair. Two end-tip electrodes add a static electric ﬁeld along the trap axis. The oscillating RF ﬁeld and the static ﬁeld sum up to a quasi-harmonic potential (see ﬁg. 2.2) that gives rise to motional degrees of freedom of the trapped ions in axial and radial trap direction. The oscillation of the trapping ﬁeld with the radio frequency leads to a fast oscillation of the ion in the trap, the so-called micromotion, that yields beneﬁ-
cial [119] and adverse effects [120]. A detailed description of the resulting trap potential and the experimental parameters is given in the next section. Further information about the Paul traps are found in [75].

16

2.1. Ion-trap system

Figure 2.2.: Depiction of the oscillating quadrupole potential of the linear Paul trap. A charged particle such as a single ion (blue circle) experiences an oscillating saddle potential, here shown at two instances separated by half the period of the radio-frequency drive. (From [75])

2.1.2. Trap potential

The necessity for oscillating ﬁelds in order to trap charged particles derives from Earnshaw’s theorem [121], which states that, based on Laplace’s equation, there is no static magnetic or electric ﬁeld that is capable of conﬁning single charged particles in all three spatial dimensions. To overcome this limitation, the linear Paul trap, as described above, uses a combination of a static voltage, applied to the end tips, and a rotating radio-frequency voltage, applied to one pair of the blades, wh-
ile the other pair is connected to ground. Deﬁning the symmetry axis of the trap to point along the z-axis, the resulting time-dependent electric ﬁeld in the vicinity of the origin is then given by

Φ

=

ΦRF + Φendtip

=

URF 2r02

(x2

−

y2)

cos(ΩRFt) +

α

Uendtip 22

(2z2

−

x2

−

y2),

(2.1)

with r0, being the distance from the center of the trap to the RF electrodes and end tips, respectively. The empirically determined geometry factor α takes shielding effects of the
electrodes into account. Using the resulting force F = −e ∇Φ = m · r¨ onto a particle of charge e, the equations of
motion are derived as

Fx

=

−e

∂Φ ∂x

Fy

=

−e

∂Φ ∂y

Fz

=

−e

∂Φ ∂z

= −e

URF r02

cos(ΩRFt) −

α

Uendtip
2

x = m x¨

= −e

URF r02

cos(−ΩRFt) −

α

Uendtip
2

y = m y¨

= −e

2

α

Uendtip
2

z,

(2.2) (2.3) (2.4)

which can be transformed into the Mathieu equation

d2ri dt2

+

(ai

− 2qi

cos(ΩRFt))

Ω2RF 4

ri

=

0

(2.5)

17

2. Experimental setup

by using the substitutions

ax

=

ay

=

−

1 2

az

=

− 4eα m

Uendtip 2 Ω2RF

,

qy

=

−qx

=

2eURF mr02Ω2RF

,

qz = 0 .

(2.6)

A stable (i.e. trapped) solution for eq. (2.5) is obtained for |a|, q2 1 which simpliﬁes the approximate radial solutions of the Mathieu equation to

ri(t) = r0,i cos(ωit)

1

−

qi 2

cos(ΩRFt)

.

(2.7)

This solution describes a slow secular motion of the ion with the radial trap frequency ωi that is superimposed by a fast micromotion at the driving frequency ΩRF. In the pseudopotential approximation [122], the fast micromotion oscillations (ωi ΩRF) are averaged out to obtain the radial secular frequencies

ωx

=

ΩRF 2

ax

+

q2x 2

,

ωy

=

ΩRF 2

ay +

q2y 2

.

In a similar way, the axial trap frequency is calculated as

ωz

=

ΩRF 2

√ az

=

With eq. (2.9), (2.8) can be rewritten as

2eα Uendtip m2

.

(2.8) (2.9)

ωr =

ω02,r

−

1 2

ωz2

,

(2.10)

where ω0,r denotes the bare radial frequency (i.e. for Uendtip = 0). In the present setup, the experimental parameters Uendtip = 400 V, URF = 1449 V, r0 =
0.8 mm, = 2.5 mm, and ΩRF = 26.127 MHz result in the single-ion trap frequencies ωz/2π = 1.1956 MHz and ωr/2π = 3.647 MHz, respectively.
In the case of two trapped ions, additional oscillation modes appear. Besides the center-
of-mass mode (COM), where both ions oscillate in phase with the frequencies ωz and ωx,y, respectively, the axial oscillation (which were used in later experi√ments) reveals an additional ’breathing’ mode which exhibits a frequency of ωzBreath = 3 ωzCOM = 2π · 2.0708 MHz. Accordingly, the two-ion radial motion features four oscillation modes (two
COM modes and two ’rocking’ modes). In contrast to the axial motion, the higher-order
radial modes (i.e. the ’rocking’ modes) show lower energies than the COM modes.

2.1.3. Photo ionization
All work presented in this thesis requires the trapping of single 40Ca+ ions. In our setup, these ions are generated in a two-photon resonance-enhanced photo-ionization process

18

2.1. Ion-trap system
[75], where neutral 40Ca atoms evaporated from an oven are excited by laser light at 423 nm, originating from a frequency-doubled diode laser at 846 nm1, on the 4s2 1S0 → 4s4p 1P1 transition. Subsequent absorption of light at 390 nm, stemming from an LED2 with an emission spectrum centered around 380 nm and a full-width at half maximum (FWHM) of 30 nm, excites the atoms into a Rydberg state from which the atom is ionized by strong electric ﬁelds within the Paul trap. Once ﬂuorescence from a trappe-
d ion is detected on an EMCCD camera3 or photomultiplier tubes4 (PMT), the photo-ionization process is interrupted to avoid trapping of further ions. With this technique, we achieve loading times on the order of several minutes.
2.1.4. Trap setup
To avoid atom loss due to collisions with background gas, the Paul trap is embedded into an ultra-high–vacuum vessel as shown in ﬁg. 2.3.
Figure 2.3.: Photograph of the vacuum chamber that contains the Paul trap. The vacuum inside the chamber is held at a value of about 10−10-10−11 mbar. Optical access is ensured by 8 viewports in the table plane, situated at the faces of the octagonally shaped chamber, and one additional viewport at the bottom of the vessel for the photo-ionization light. The helical resonator for the coupling of the trap radio frequency is placed on top (large copper-colored cylinder in ﬁg. 2.3). Further details o-
n the vacuum setup are found in [75]. 1TOPTICA Photonics, DL pro 2Nichia, NCCU001-LED 3Andor, DV887DCS-BV 4Hamamatsu, H7422P-40 SEL
19

2. Experimental setup
The trap itself is surrounded by two high-numerical-aperture laser objectives5 (HALO) (see ﬁg. 2.4) that serve the purpose to both, tightly focus single photons and laser beams, especially for single-ion addressing, onto the ion, as well as efﬁciently collecting single photons emitted by the ion. The objectives have a numerical aperture (NA) of 0.4, hence covering a solid angle of about 4%. The precise collection efﬁciencies for photons emitted on the different atomic transitions will be discussed-
 in chapter 4.

Figure 2.4.: Paul trap between the two HALOs mounted on their three-directional translation stages. (Adapted from [77])

The HALOs are mounted on three translation stages6 for sub-micrometer positioning. The HALOs consist of an arrangement of four lenses made from different materials that are anti-reﬂective coated for 397 nm, 423 nm and 866 nm and yield a transmittance for the relevant wavelengths between 95.7 % for 397 nm and 98.8 % for 850–866 nm. The working distance ranges from 11.8 mm at 397 nm to 13.2 mm at 866 nm (to avoid contact of the metal housing of the HALO lenses with the RF blade electrodes) which, gi-
ven[123]

d

=

1.22

λ NA

,

(2.11)

leads to focal-spot sizes between d = 1.2 µm (397 nm) and d = 2.6 µm (866 nm). The quantization axis is deﬁned by a magnetic ﬁeld of 2.8 G applied to the ion. This ﬁeld
is generated by a set of three orthogonally oriented coils or coil pairs of which one pair typically determines the main axis while the other coils are used to compensate residual magnetic ﬁelds, e.g. the magnetic ﬁeld of the Earth, that otherwise distort the precise orientation of the quantization axis. In the context of the experiments presented in this thesis,

5Linos Photonics, HALO 25/0.4 6Attocube, ANPx100

20

2.1. Ion-trap system
the B ﬁeld was aligned along the HALO axis for reasons that will become obvious in the course of this work.
Manipulations of the ion are carried out by laser and radio-frequency pulses that enter the vacuum vessel from various directions, as schematically shown in ﬁg. 2.5.
APD

APD

Wollaston prism

Flip mirror

EMCCD camera 393/397 nm photons
B
393 nm

397 854 866

~nm

nm nm

DM BS

SM ﬁber

729 nm

397 nm photons

to PMT MM ﬁber
to APD SM ﬁber

DM
DM 854 nm photons

729 nm addressing AOD beam

Figure 2.5.: Schematic depiction of the trap setup and its surrounding optical elements, including the beam paths for laser light and single photons. An individual description of the single elements is given in the text.
The cooling-laser beams at 397 nm and 866 nm, being overlapped at a dichroic mirror (DM), incide from 90◦ (where 0◦ is deﬁned as parallel to the B-ﬁeld direction along the HALO axis in ﬁg. 2.5). Their polarization (vertically polarized) is chosen such that no optical pumping, i.e. decoupling from the light ﬁelds, occurs. The 854 nm repumping beam is overlapped with the 866 nm beam at a non-polarizing beam splitter (BS). An additional laser beam at 393 nm for the excitation of the S1/2 → P3/2 trans-
ition is sent from the opposite direction (270◦). The focal-spot sizes for all these lasers are in the order of 100 µm, therefore the alignment of the beams is rather uncritical and robust.
Global excitation, that is, simultaneous excitation of all ions stored in the trap, of the

21

2. Experimental setup
quadrupole qubit transition at 729 nm is realized by a beam under 45◦ with a spot size of about 80 µm. Tilting of the trap by 22.5◦ with respect to the table plane allows for the frequency-selective addressing of all motional modes, i.e. the axial and both radial modes of a single ion by tuning the laser to the respective motional sideband of the bare atomic transition.
Single-ion addressing for operating the trap with multiple ions is achieved by the "AOD beam" under 0◦, i.e. through the HALO (needed to obtain the necessary small focus size), named after the acousto-optic deﬂector7 (shown in the bottom of ﬁg. 2.5). The deﬂection angle varies with the RF frequency applied to the AOD, thus enabling switching between the individual ions. To ensure reliable spatial modes of all laser ﬁelds, the coupling of the beams onto the ion is realized via single-mode optical ﬁ-
bers for the respective wavelengths.
Besides the separate manipulation of the ions via a tightly focused laser beam, the HALOs are predominantly deployed to collect single photons emitted from the ion. Due to different diffraction indices, the focal lengths of the HALO systems differ for the different wavelengths. Therefore, the objectives have to be adjusted for the desired collection wavelength to guarantee the imaging quality of the ion image onto the photon detectors or ﬁber end facets. The HALO at the "Sitges" side8 of the vacuu-
m chamber (the bottom side of the picture) is set to collimate light at 854 nm, whereas additional correction lenses are needed for proper beam shaping of the light paths for photons at other wavelengths, particularly at 393 nm and 397 nm. 854 nm photons collected by the Sitges HALO pass the ﬁrst dichroic mirror that separates red light (854 nm, 729 nm) from blue light at 397 nm and 393 nm, and are then reﬂected by the second dichroic mirror, which is coated to exhibit a high reﬂectivity at 854 nm-
 and a high transmittance at 729 nm. A telescope, built from commercially available off-the-shelf lenses, subsequently reduces the beam diameter to meet the requirements for the following single-mode–ﬁber coupling. Subsequent polarization-state analysis of the photons, if employed, is performed by a usual projection setup, consisting of three waveplates (λ/4 / λ/2 / λ/4) and a polarizer, and an avalanche photo diode (APD)9 for single-photon detection.
Atomic state detection is usually carried out by state-depedent 397 nm ﬂuorescence of the ion. For that purpose, ﬂuorescence is collected by the HALO on the Sitges side and coupled into a multi-mode ﬁber by the ﬁrst dichroic mirror. As mentioned before, the telescope for the 397 nm photons has to be set up in a non-confocal conﬁguration to compensate for the convergence of the light mode, caused by the focusing of the HALO which is optimized for 854 nm collimation. The multi-mode ﬁber is connected-
 to a PMT10 to detect the photons. Depending on the number of photon counts, the ion is either considered
7Gooch & Housego, R46080-3-LTD 8Named after the town of Sitges near Barcelona. The denotation stems from the time when the experiment
was still located at ICFO at that side of the setup pointed towards Sitges. Analogously, the opposite side of the setup is called "Barcelona". 9Perkin Elmer, SPCM-AQR-14 10Hamamatsu, H7422P-40 SEL
22

2.2. Laser system
"dark" or "bright" (see section 3.4). Single-ion–resolved readout of the atomic state is realized by imaging the ﬂuorescence of an ion chain (typically consisting of two ions) onto the surface of an EMCCD camera11 through the HALO (adjusted to 393 nm collimation) on the Barcelona side. By the time the experiment was set up, hardly any to no wavelength-separation mirrors for 393 nm/397 nm where available, therefore we included a ﬂip mirror to switch between the monitoring of 397 nm ﬂuorescence on t-
he camera and the projection and detection of single photons at 393 nm.
The latter is done by removing the ﬂip mirror to let the 393 nm single photons pass through a telescope setup to reduce the diameter of the beam from about 2 cm to roughly 0.5 cm to ﬁt the photons through the Wollaston prism12 placed right behind the telescope13. The prism separates the photons according to their polarization, enabling us to project the photon polarization onto the two Eigenbases of the prism, horizontally and vertically polarized. The two polarizations are split by an angle of 20-
◦ and sent onto two APDs14 (one per output arm).
In addition to the lasers for optical manipulation of the atom, a radio-frequency coil is installed below the trap. The coil is driven by a radio frequency that is tuned to the |S1/2, m = −1/2 ↔ |S1/2, m = +1/2 transition between the two Zeeman-split sublevels of S1/2 for coherent manipulation of the ground-state qubit.
2.2. Laser system
Singly-charged Calcium ions are nearly ideal quantum memories regarding their controllability, as they possess optical transitions in the visible or near-infrared spectral region which can easily be addressed by commercially available diode-laser systems. In the present experiments, we primarily work on four dipole transitions (393 nm, 397 nm, 854 nm, and 866 nm) with spectral widths of about 20 MHz, placing little demands on the laser linewidths. The frequency-locking scheme for these lasers is d-
iscussed later in this section. Moreover, two ancilla lasers for photo ionization (846 nm/423 nm), B-ﬁeld alignment (850 nm), and a laser that serves as master oscillator for our locking scheme (852 nm) are employed.
Aside from the dipole transitions, 40Ca+ features two quadrupole transitions in the visible, |S1/2 ↔ |D3/2 at 732 nm and |S1/2 ↔ |D5/2 at 729 nm, of which we utilize the latter for coherent qubit manipulations. Since this transition exhibits a natural linewidth of 2π · 136 mHz, the requirements for a narrow-band laser linewidth in the Hz regime can no longer be fulﬁlled by the conventional frequency-stabilization technique applied to the
11Andor, DV887DCS-BV 12Thorlabs, WP10 13We learned that it is important to shine a collimated beam onto the Wollaston prism to avoid strong defor-
mation of the beam at the outputs. 14Laser Components, COUNT-50B
23

2. Experimental setup
other lasers, but a more elaborate locking setup has to be deployed. Both, the qubit laser itself as well as its stabilization are presented in the last two sections of this chapter.
2.2.1. Laser sources
The following list provides a brief overview over the laser sources that are operated in the laboratory (with the exception of the qubit laser at 729 nm which will be treated separately in a later section). The laser sources, except for the 845 nm laser, are situated on a separate optical table, where amplitude, frequency (and phase) are adjusted. Frequency matching of the laser light with the resonance frequency of the respective transitions is obtained by tuning the laser frequency using acousto-
-optical modulators (AOMs) that enable us to shift the frequency in a range between 50 and 100 MHz. The light is then coupled into polarization-maintaining single-mode ﬁbers and guided to the optical table where the ion trap is placed.
It is mentioned in the previous chapter that Doppler cooling is employed on the dipole transition |S1/2 ↔ |P1/2 at 397 nm, which is also used for ﬂuorescence generation to detect the internal state of the ion (see section 3.4). To avoid pumping into the metastable |D3/2 manifold, an additional repumping laser at 866 nm that couples onto the |D3/2 ↔ |P1/2 transition, is switched on during cooling and ﬂuorescence generation.
Generation of single photons at 854 nm requires excitation of the ion to |P3/2 and subsequent decay into the meta-stable |D5/2 . A diode laser at 393 nm is used for the excitation from the ground state to |P3/2 . Repumping from |D5/2 is performed by an additional laser at 854 nm, which is also used for optical pumping (see sec. 3.2).
The frequency-stabilization scheme for the lasers resonant on the atomic dipole transitions is based on a master laser at 852 nm which is resonant on an atomic transition of a Cesium vapor cell that serves as a frequency reference. In addition, a laser at 846 nm is employed for photo ionization of the atomic Calcium atoms, and a 850 nm laser, resonant on the |D3/2 -to-|P3/2 dipole transition, is used for the alignment of the magnetic ﬁeld and thus the quantization axis.
The requirements regarding the linewidth of the lasers coupling to the dipole transitions are rather relaxed due to the atomic transition linewidth in the order of 20 MHz, hence laser widths of a few MHz or less are sufﬁcient to achieve adequate coupling. The 729 nm laser, which couples to the narrow-band quadrupole transition |S1/2 ↔ |D5/2 , must be able to frequency-resolve the transitions between the different Zeeman sublevels, resulting in higher demands with concerning the spectral width. The-
refore, this system is described separately in more detail in section 2.2.4.
397 nm
The |S1/2 ↔ |P1/2 transition at 397 nm is used for Doppler cooling and ﬂuorescencebased state readout.
24

2.2. Laser system
Due to the lack of blue laser diodes at the time most of the lasers were purchased, the system15 consists of three stages. Initially a grating-stabilized laser diode produces light at 794 nm which is then ampliﬁed by a tapered ampliﬁer (TA) and subsequently frequencydoubled by second-harmonic generation in a nonlinear crystal inside a bow-tie cavity. We achieve a maximum output power of 200 mW for the blue light, but reduce the power to 40 mW to increase the TA lifetime. The free-running laser lin-
ewidth is speciﬁed by the manufacturer as 300 kHz for 5 µs integration time.
866 nm
Because of spontaneous decay from P1/2 into the metastable D3/2 state during cooling and ﬂuorescence integration, an additional repumping laser16 has to be incorporated that couples to the transition from D3/2 to P1/2 at 866 nm. We typically work with 20 to 50 µW of 866 nm power at the ion, therefore the 30 mW direct output power of the laser diode is by far sufﬁcient for our purposes. The free-running linewidth of 150 kHz allows for the frequency-stabilization of the laser onto an optical cavity -
(see section 2.2.2) without further measures.
854 nm
Repumping from the metastable D5/2 state at the end of an experimental run and generation of single 393 nm photons is carried out by the fundamental light of a TA-SHG pro at 854 nm. The major part of the fundamental light, after ampliﬁcation in a TA, is frequency-doubled to 427 nm to operate the newly built SPDC photon-pair source [124] while 10-15 mW are split off and sent to the ion. After passing two AOMs in double-pass conﬁguration, the remaining power arriving at the ion lies in the order of -
500 µW.
393 nm
The DL pro at 393 nm is the newest system in our setup. It is the ﬁrst laser that is controlled by the novel DLC pro laser-control unit which features an improved temperature stability of the laser head, enabling free-running operation of the laser during the experiments, although a frequency stabilization is currently developed. The diode delivers 40 mW laser power, while the linewidth of <2 MHz is sufﬁciently narrow compared to the atomic linewidth (2π·23 MHz) of the transition from D3/2 to P1/2-
 at 393 nm.
852 nm master laser
The laser-locking scheme, described in section 2.2.2, is based on a atomic Cesium reference
15TOPTICA Photonics, TA-SHG pro 16TOPTICA Photonics, DL pro
25

2. Experimental setup
onto which a master laser is stabilized. The frequency stability of that laser is then transferred onto the other lasers via a locking chain. This scheme requires a laser source that is resonant on the Cs D2 line at 852 nm which is embodied by a diode-laser system 17 whose output power was measured to be around 120 mW.
846 nm photo-ionization laser
Photo ionization, as described in section 2.1.3, is assisted by a free-running laser18 at 846 nm that delivers 120 mW of output power at a linewidth of < 1 MHz. The light is frequency doubling in a single-pass ppKTP crystal for frequency matching with the atomic transition, yielding 35 µW of light power and a bandwidth of < 2 MHz.
850 nm ancilla
The 850 nm ancilla laser19, resonant on the D3/2 ↔ P3/2 transition, is primarily used for the alignment of the quantization axis since the acquisition of the 393 nm laser. It is built of a single grating-stabilized diode.
Some details on the lasers in the context of the frequency-locking scheme and the photo ionization are found in [125] and [126], respectively. A more detailed description is found in [75] (section 2.2) and [78] (section 1.2).
2.2.2. Transfer locking
The stabilization of the lasers onto a common atomic reference requires a sophisticated locking scheme [125], built upon a chain of consecutive cavity locks to indirectly connect the laser frequency to the D2 line of the Cs reference. The chain starts with Doppler-free absorption spectroscopy of a Cs vapor cell by the master laser at 852 nm. Prior to the spectroscopy, the laser is locked to a temperature-stabilized low-ﬁnesse cavity [76] (F = 270, cavity linewidth ∆ = 1.9 MHz) via Pound-Drever-Hal-
l technique (see section 2.2.3) using commercial electronics20. The light is then utilized to lock the cavity itself to the Cs line at 852.33493 nm. The 866 nm laser is directly Pound-Drever-Hall locked to this cavity. To overcome spatial limitations21, two additional cavities22 are installed to bridge the gap between 852 nm and 794 nm (the fundamental laser for 397 nm light) and 854 nm, which are frequency-locked to the 852 nm laser. The lasers are locked to their respective cavities by PDH techn-
ique,
17TOPTICA Photonics DL 100 18TOPTICA Photonics, DL 100 19TOPTICA Photonics, DL pro 20TOPTICA Photonics, DigiLock 110 21Spatial separation of the individual laser beams becomes challenging for more than two beams. 22F794 ≈ 100, F854 ≈ 100
26

2.2. Laser system

where feedback is applied to a piezo actuator controlling the cavity grating of the laser as well as to the diode current for fast feedback up to 5 MHz.
Frequency matching of the cavity modes and the target frequency of the laser (close to the atomic transitions) is achieved by tuning the temperature of the cavities or shifting the frequency of the 852 nm reference light with the help of an auxiliary AOM. The remaining frequency deviation from the laser light to the atomic transitions is compensated by acousto-optical modulators.
An equivalent stabilization setup for the 393 nm laser is currently being set up where stabilized 397 nm light serves as reference for the cavity lock of a blue transfer cavity. The setup for the locking scheme, though slightly modiﬁed in the meantime, is shown in more technical detail in [76].

2.2.3. Pound-Drever-Hall technique

As mentioned in the previous section, laser locking in the present experiments is realized by the commonly used Pound-Drever-Hall technique. This technique was ﬁrst developed for microwave oscillators [127] and later extended to optical frequencies [128]. Here, an optical cavity serves as a frequency-dependent phase shifter. To utilise this property, the laser light is phase-modulated by applying a modulation signal of frequency Ωm/2π = 12.5 MHz or 25 MHz to the diode current or onto an external e-
lectro-optical modulator (EOM) in the case of the 729 nm laser.
Below, a brief derivation, adopted from [129], of the PDH error-signal generation is presented. Let Φ0 be the modulation depth, then the resulting electric laser ﬁeld becomes

E(t) = E0 ei (ωct+Φ0·sin Ωmt)

(2.12)

with the carrier frequency ωc of the laser and the ﬁeld amplitude E0. Using Bessel functions Ji, it is expanded to [129]

E(t) ≈ E0 J0(Φ0) ei ωct + J1(Φ0) ei (ωc+Ωm) t − J1(Φ0) ei (ωc−Ωm) t

(2.13)

for small modulation depths Φ0, representing a carrier and two modulation sidebands at frequencies ±Ωm. An incident light ﬁeld Einc that is reﬂected from a (symmectric and lossless) Fabry-Pérot cavity experiences a modiﬁcation of its magnitude which is characterized by the frequency-dependent reﬂection coefﬁcient F(ω), deﬁned as the ratio of incoming
and reﬂected ﬁeld

F(ω)

=

Einc Ere f

=

r

exp

i

ω ∆νFSR

−1

1 − r2 exp

i

ω ∆νFSR

,

(2.14)

27

2. Experimental setup

where r is the amplitude-reﬂection coefﬁcient (not to be confused with the reﬂection coefﬁcient F(ω)) and ∆νFSR is the free spectral range of the cavity. Applying eq. (2.14) to the modulated ﬁeld (eq. (2.13)), the reﬂected ﬁeld from the optical resonator reads

Ere f ≈ E0 F(ωc)J0(Φ0) ei ωct + F(ωc + Ωm)J1(Φ0) ei (ωc+Ωm) t − F(ωc − Ωm)J1(Φ0) ei (ωc−Ωm) t
and accordingly, using Pre f ∝ |Ere f |2, the reﬂected power becomes

(2.15)

Pre f ∼∝ |E0 J0(Φ0)|2|F(ωc)|2 + |E0 J1(Φ0)|2 |F(ωc + Ωm)|2 + |F(ωc + Ωm)|2 + 2 |E0 J0(Φ0)|2|E0 J1(Φ0)|2 F(ωc)F∗(ωc + Ωm) − F∗(ωc)F(ωc − Ωm) cos Ωmt + (F(ωc)F∗(ωc + Ωm) − F∗(ωc)F(ωc − Ωm)) sin Ωmt .

(2.16)

If the modulation sidebands are far-off resonance, F(ωc ± Ωm) becomes approximately −1 and eq. (2.16) simpliﬁes to

Pre f ∼∝ |E0 J0(Φ0)|2|F(ωc)|2 + 2|E0 J1(Φ0)|2 + 2 − F∗(ωc) sin Ωmt
= |E0 J0(Φ0)|2|F(ωc)|2 + 2|E0 J1(Φ0)|2

|E0 J0(Φ0)|2|E0 J1(Φ0)|2

− 4 |E0 J0(Φ0)|2|E0 J1(Φ0)|2 (F(ωc)) sin Ωmt .

F(ωc)

(2.17)

The reﬂected power is measured with a (sufﬁciently fast) photo diode and fed into an
electronic mixer, where it is mixed with a reference oscillator at the modulation frequency Ωm. Usually, a phase shifter has to be included to match the phases of both inputs. Lowpass ﬁltering of the output, retaining only the sin Ωmt term in eq. (2.17), reveals the error signal

E (ωc) ≈ −4 |E0 J0(Φ0)|2|E0 J1(Φ0)|2 (F(ωc)) sin Ωmt

(2.18)

which features a steep slope around the cavity resonance for small deviations of the laser frequency from that resonance. Feedback onto the laser is then generated from this error signal after prior processing by a controller element, e.g. a PID controller.

2.2.4. Qubit laser
Manipulations on the optical qubit is conducted on the quadrupole transition between S1/2 and D5/2 at 729 nm. Due to the long lifetime of 1.17 s, the according transition reveals

28

2.2. Laser system
a narrow linewidth of 2π·136 mHz. Consequently, the width of the driving laser has to be of the same order of magnitude for efﬁcient coherent manipulation and prevention of excitation of unwanted neighboring transitions. The transfer-locking scheme presented before no longer satisﬁes these requirement, which is why a different approach for the laser stabilization, namely a Pound-Drever-Hall lock onto a high-ﬁnesse cavity, presented in section 2.2.5, is adopted.
The laser itself is composed of a laser diode embedded in a grating-based feedback cavity in Littrow conﬁguration. This way, a free-running linewidth of some 100 kHz is attained. Further reduction of the linewidth to the order of tens of Hz is achieved by a fast feedback loop acting on both, the grating for low-frequency drifts, restricted by the bandwidth of the piezo actuator that controls the angle of the grating, and the current through the diode for noise cancellation at frequencies up to som-
e MHz.
The weak coupling strengths of the atomic quadrupole transmissions requires laser power of 10 to 100 mW. To obtain these powers, laser light coming from the diode has to be ampliﬁed by a tapered ampliﬁer which delivers an output power of about 430 mW behind the optical isolator. Subsequently, the light is distributed among the various AOM lines that serve the different beams guided to the ion.
A small fraction of the light (≈ 2 mW) is split up before the TA and is used to lock the laser to an external high-ﬁnesse ULE cavity. First, the locking beam is sent through an AOM23, running at about 290 MHz and set up in double-passage conﬁguration, to bridge the gap between the target frequency of the laser and the nearest cavity mode. The light is then passing through a self-built EOM, running at 20 MHz, which are generated by the PDH module24 that come with the laser, to imprint the necessary-
 phase-modulation sideband onto the ﬁeld, and then sent onto the ultra-low–expansion (ULE) cavity, described in the next section, for a PDH-type locking. Narrowing of the laser linewidth is facilitated by feedback onto the laser from a fast analog controller25. More details on the qubit-laser system are found in [77].
A well-known phenomenon in closed feedback loops is the emergence of so-called servo bumps. They are caused by the limited bandwidth of the servo loop that leads to a phase shift of the feedback signal for higher frequencies. Once the phase shift exceeds 180◦, noise at that frequency and above is ampliﬁed instead of suppressed. In diode-laser systems, these broad servo bumps typically lie in the vicinity of 1 MHz around the carrier, coinciding with the axial trap frequency, and their magnitude lie-
s between 25 dB and 30 dB below the carrier, if no counter measures are adopted. In the current setup, we observe the appearance of servo bumps as well. They are characterized explicitly in chapter 7 and their inﬂuence on gates that operate on the motional sidebands is investigated.
23Brimrose, TEF-270-100-729 24TOPTICA Photonics, PDD 110 25TOPTICA Photonics, FALC 110
29

2. Experimental setup
2.2.5. High-ﬁnesse ULE cavity
The high-ﬁnesse ULE cavity was set up in the context of Jan Huwer’s doctoral thesis [77] to enable narrow-linewidth frequency stabilization. The cavity is standing upright on three Teﬂon spacers to reduce thermal conductivity from the environment and minimize coupling to mechanical vibrations. To ensure passive stabilization, it is enclosed in a temperature-regulated vacuum chamber which for its part is sitting inside an isolated, temperature-stabilized Aluminum box. Mechanical perturbation is dam-
ped out by a passive vibration-damping platform26 onto which the vacuum chamber is placed. In addition, the vacuum of about 5 · 10−10 mbar provides a considerable isolation against acoustic noise. The inside of the Aluminum box can be seen in ﬁg. 2.7.

Figure 2.6.: 3D model of the high-ﬁnesse cavity. The cavity is mounted upright on three Teﬂon rods for mechanical and thermal decoupling. (From [77])

Figure 2.7.: A picture of the inside of the Aluminum box containing the HF cavity. The vacuum chamber is resting on a vibration-damping platform. Locking light is coupled from below. A vacuum pump, seen on the left, retains the vacuum. (From [77])

The cavity is constructed from ultra-low-expansion–glass spacer27 with a zero-expansion point of 21◦ C. It is built in a Fabry-Pérot-like layout with two mirrors separated by a
26Minus K, 100BM-4 27manufactured by Corning

30

2.3. Experiment control

distance of 77.5 mm in non-confocal conﬁguration. It consists of one planar mirror and
one concave mirror with a radius of curvature (ROC) of 50 cm. The resulting free spectral range was measured to be ∆νFSR = 1.935(3) GHz and the ﬁnesse was determined as F = 479 000 ± 1000, hence

∆νcav

=

∆νFSR F

(2.19)

yields a cavity linewidth of ∆νcav = 4.034(5) kHz. Due to material properties of the ULE glass, the cavity exhibits a linear drift of its reso-

nance frequency of 80 mHz/s or 7 kHz per day. Therefore, the RF-drive frequency of the

compensation AOM for the laser lock is adjusted from time to time.

2.3. Experiment control
Increasing complexity in the protocols for quantum-information application demands precise control over the experimental sequences. Therefore, more and more elaborate control units are required. We deploy a commercially available system that constitutes the second-generation version of its predecessor "HYDRA" [130] originally developed in the group. The device is manufactured and distributed by Keysight28. It is based on FPGA-controlled arbitrarywaveform generators (AWG) to generate RF signals of -
up to 1 GS/s that drive the AOMs for the individual laser beams. Additional digital-input-output (DIO) and time-to-digital– converter (TDC) modules facilitate the usage as single-photon counter with a time resolution of 150 ps, furthermore allowing for conditional operation of the experiment which leads to a tremendous speed-up of the sequential execution time, and to apply feedback to the AOMs for intensity stabilization.

28formerly Signadyne
31

3. Experimental methods
Even the most complex experimental sequence in the context of this work requires a comprehensive set of fundamental experimental methods for reliable initialization, manipulation, and detection of quantum states. This tool box comprises well-established techniques like Doppler cooling [131], Ramsey-type measurements [132] and ﬂuorescence-based state discrimination.
The implementation of some of these techniques in the present experimental setup dates back to earlier work in the group; for instance the Doppler cooling presented in section 3.1 and atomic state analysis by ﬂuorescence detection (sec. 3.4), which were already described in [75], and coherent manipulations on the optical and ground-state qubit (sections 3.3.2 and 3.3.3) as well as the usage of Ramsey experiments for the determination of the atomic coherence time (see section 3.6), that were topic -
of Jan Huwer’s dissertation thesis [77]. A modiﬁed scheme for frequency-resolved optical pumping, presented in section 3.2, the deployment of the atomic light shift for single ion addressing, discussed in sec. 3.3.4, and an approach for the suppression of magnetic-ﬁeld noise, were newly established in the course of this thesis and related work1.
In addition, the concept of Zeeman splitting and the appearance of the (time-dependent) Larmor phase are brieﬂy discussed in sec. 3.5 as they are essential for the understanding of some of the phenomena encountered in the following.
3.1. Laser cooling
Apart from internal electronic states mentioned in chapter 1, the overall quantum state is also characterized by its quantized motional degrees of freedom. For a single ion trapped in a linear Paul trap, these are represented by the motional quantum numbers nax, nrad,x and nrad,y for the axial and both radial trap modes, respectively.
After trapping, the ion is in a high-lying thermal state of motion whose spatial wavepacket is strongly delocalized, making laser cooling necessary. An established cooling technique that combines high cooling rates and moderate experimental effort is Doppler cooling which will be described in the following. Even though it suffers from a minimal achievable temperature well above zero2 and is therefore not suit-
1The feed-forward technique for the magnetic-noise cancellation was developed by Matthias Kreis during his Master’s thesis [133].
2Typically, the number of motional quanta in the system after Doppler cooling lies in the order of 10, depending on the trap frequencies.
33

3. Experimental methods

able for ground-state cooling, it has proven to be sufﬁcient for all tasks in our context of

atom-photon-interfaces so far. In the following, the ion is assumed to be already pre-cooled to the Lamb-Dicke regime3,

where the spread of the atomic wavepacket is small compared to the wavelength of the

external light ﬁeld (or rather its projection onto the motional mode under consideration),

or in other terms, where 2 n + 1 η

1 holds, when η = k

h¯ 2mωT

is

the

Lamb-Dicke

parameter with the laser wave number k, the ion mass m and the trap frequency ωT, and

where n is the mean motional quantum number.

In addition to the carrier transition, a trapped two-level atom exhibits sideband transitions at frequencies N · ωT, N ∈ N, from the carrier, that couple to the motional state of the ion. Hence two competing cooling/heating processes occur when the atom is driven

by laser light: absorption on the red sideband (i.e. at frequency ωC − ωT, where ωC is the transition carrier frequency and ωT is the trap frequency), relieving a phonon and resulting in cooling of the ion, and absorption on the blue sideband (ωC + ωT) or emission on the red sideband, which counteracts the cooling and adds a phonon into the system.

It is intuitive that a net cooling is accomplished when the absorption rate on the red

sideband is higher than the rate on the blue sideband. For a further understanding of

the cooling dynamics, we have to distinguish between two regimes, the resolved-sideband

regime, where ωT Γ holds so that the motional sidebands can be addressed individually, on the one hand, and the case ωT Γ on the other hand, where the transition is much broader than the distance of the sideband from the carrier. Doppler cooling, discussed in

this chapter and deployed in the experiment, operates in the latter regime.

Ideal parameters for Doppler cooling are determined by the ratio of cooling rate vs. heat-

ing rate, i.e. we want to ﬁnd a detuning ∆ for the driving laser for which we achieve large

cooling rates while simultaneously reducing the heating. For that purpose, an analytical

expression for the cooling and heating rates has to be derived. Following the procedure in

[134], we ﬁnd the rates R± for a scattering event on the blue and red sideband, respectively, to be R− = nA− and R+ = (n + 1)A+, with the rate coefﬁcients

A±

=

Ω2 Γ

η2

cos2 θ W(∆ ∓ ωT) + αW(∆)

,

W(∆)

=

1

4

∆2 Γ2

+

1

,

(3.1) (3.2)

the motional quantum number n, and the Rabi frequency Ω in the regime of weak coupling, i.e. for Ω Γ. The angle θ in eq. (3.2) represents the angle between the direction of propagation of the cooling light and the orientation of the motional mode. α describes the average component of the spontaneous-emission recoil energy on the motional axis, weighted with the dipole pattern of spontaneous emission [134, 135]. Isotropic emission

3which is not a necessary condition for Doppler cooling, but it simpliﬁes the mathematical treatment by assuming that two-phonon processes are strongly suppressed.

34

3.1. Laser cooling

results in α = 1/3. The ﬁrst term in R+(R−) corresponds to absorption on the blue (red) sideband and subsequent emission on the carrier, while the second term describes absorption on the carrier and emission of a photon on the blue (red) sideband transition [134]. Note that absorption and subsequent emission on a sideband is strongly suppressed by a factor of η2 and therefore neglected.
The mean vibrational quantum number n is given by

∞
n = ∑ pnn , n=0

(3.3)

where pn represents the probability to ﬁnd the ion in |n when we sum over all electronic states and is typically described by a thermal distribution. The temporal derivative of this
∞
number is then determined by the total cooling rate Rtot = ∑ pn R+(n) − R−(n) , i.e.
n=0

d dt

n

∞
= ∑ pn R+(n) − R−(n) n=0 ∞
= ∑ pn (n + 1)A+ − nA− n=0
= (A+ − A−) n + A+ ,

∞
= ∑ pnn(A+ − A−) + A+ n=0

(3.4)

where we have to take into account that the cooling efﬁciency, i.e. the probability for a cooling event, depends on the motional quantum number. From eq. (3.4) we derive the temporal evolution for the mean vibrational number,

n (t) = n (0) e(A+−A−) t + n (∞) 1 − e(A+−A−) t .

(3.5)

n

(∞)

is

the

steady-state

solution,

assuming

A−

>

A+,

and

is

deduced

from

d dt

n

(∞) = 0

as (cf. eq. (3.4))

n

(∞)

=

A+ (A− − A+)

.

(3.6)

Minimization of eq. (3.6) leads to the optimal detuning for Doppler cooling:

d d∆

n

(∞)

=!

0

⇒

∆opt

=

−Γ 2

.

(3.7)

We see that n (∞) exhibits a ﬁnite value for ∆ = ∆opt. This value represents the Doppler
limit. Cooling below this threshold would require more advanced cooling techniques like resolved-sideband cooling [136] or EIT4 cooling [137].
In the experimental implementation, we employ Doppler cooling on the S1/2 ↔ P1/2 transition at 397 nm. Since the real ion is not an ideal two-level system, but exhibits several

4electromagnetically induced transparency

35

3. Experimental methods
transitions and decay into the metastable D3/2 manifold, an additional laser at 866 nm is required for repumping from D3/2. As mentioned before, both lasers (397 nm and 866 nm) are vertically polarized to avoid optical pumping. From the experimental parameters for cooling of the axial mode, θ = 22.5◦, η = 0.163, ωT = 2π · 1.195 MHz, and α = 1/3 (assuming isotropic spontaneous emission), eq. (3.6) exhibits an expectation value for the population of the axial motional mode of nax (∞) = 6.
Temperature measurements using the red sidebands of the quadrupole transition5 S1/2 ↔ D5/2 reveal a mean population of the (axial) motion of nax ≈ 15. The experimental value is higher than the ideal minimum mean occupation of the motional modes after Doppler cooling. This effect is primarily traced back to the (false) assumption of an ideal twolevel system in the theoretical description. In the actual implementation, the coupling of all 8 levels involved in the cooling process (two sub-levels in S-
1/2, two sub-levels in P1/2, and the four sub-levels in D3/2) by the cooling laser at 397 nm and the repumping laser at 866 nm leads to the occurrence of dark resonances that signiﬁcantly alter the conditions for the cooling dynamics. An analysis of the cooling dynamics in multi-level systems is found in Jan Huwer’s dissertation thesis [77].
Although we also conducted experiments where we used resolved-sideband cooling prior to the actual experimental pulse sequence (speciﬁcally for the Mølmer-Sørensen-type two-qubit gates presented in chapter 7), we saw no improvement in the outcome and thus restricted ourselves to Doppler cooling for all measurements presented henceforth in favor of higher repetition rates.
3.2. Optical pumping
Due to a modiﬁed geometry of the trap-table setup (see chapter 2) compared to earlier experiments [77, 78, 79], polarization-selective optical pumping on the S1/2 ↔ P1/2 transition at 397 nm is no longer applied to avoid damage of the single-photon detectors. For that reason, an alternative pumping scheme, based on the frequency-selective depopulation of one Zeeman sublevel of S1/2 on the narrow quadrupole transition at 729 nm, is implemented. Repumping from D5/2 is provided by simultaneously driv-
ing the ion with 854 nm laser light. Decay from P3/2 to S1/2 either transfers the ion into the target state, where it is decoupled from the 729 nm light, or into the undesired sublevel, where it undergoes the pumping cycle again until the ion eventually ends up in a pure state with high probability. The pumping procedure is again schematically shown in ﬁg. 3.1.
To avoid a lengthy empirical optimization process for the pumping parameters, we estimate the optimal laser powers (or the respective Rabi frequencies) in advance, where we keep in mind that the potential 729 nm power is limited to avoid erroneous excitation of neighboring transitions. A typical scenario restricts the Rabi frequency of the quadrupole laser to a FWHM6 of about 2π·100 kHz and the laser power has to be chosen accordingly.
5for details on the temperature-measurement scheme see [77] 6Full width at half maximum
36

3.2. Optical pumping

a) P3/2
D5/2

−

1 2

σ+

−

3 2

2/3

1/3

b)

+

1 2

σ−

2/3

+

3 2

1/3

S1/2

−

1 2

+

1 2

−

1 2

+

1 2

Figure 3.1.: Frequency-selective optical pumping into |S1/2, −1/2 (a) and |S1/2, +1/2 (b). The 854 nm repumper, incident under 90◦ to the quantization axis, is vertically polarized and couples exclusively to the σ± transitions.

The power broadened FWHM of the line is given by [138]

∆ω1/2 = AS→D

1

+

2

Ω2729 A2S→D

(3.8)

with AS→D = 2π·136 mHz being the Einstein coefﬁcient for the S1/2 → D5/2 transition and Ω729 the Rabi frequency of the driving laser on said transition. If we allow for a FWHM of 250 kHz, we obtain an optimal Rabi frequency of Ω729 = 2π·177 kHz (with the 854 nm laser switched off).
The width of the D5/2 level is determined by its effective lifetime which is directly connected to the resonant repumping rate [78]

RD→S

=

Ω2854 Γ2P3/2 + 2Ω2854

AP→S

,

(3.9)

governed by the 854 nm eq. (3.8), Ω854 and AP→S

laser power, are the Rabi

fvreiaquτePn3/c2 y=(DR5/D1→2 S→foPr 3R/2Dt→raSnsitioΓnD)5/a2 .ndInthaenaEliongsyteitno

coefﬁcient (P3/2 → S1/2 transition), respectively, and ΓP3/2 is the total decay rate for P3/2. Numerical simulations show that the optimal value for the Rabi frequency on D5/2 ↔ P3/2

is Ω854 = 2 · Ω729 = 2π · 344 kHz. The underlying model for the simulation is presented in

section 4.1.

Assuming we start from a symmetrical mixture of both Zeeman sublevels in the S1/2 ground state (which is not entirely true due to the more complex level structure of the

cooling transitions that results in a small population imbalance) and accounting for the

unequal Clebsch-Gordan coefﬁcients of both decay paths, the minimum number of scat-

tering events for a desired pumping efﬁciency ηpump can easily be derived as

N = log3

1 2 · (1 − ηpump)

.

(3.10)

37

3. Experimental methods
For a target efﬁciency of 99.9% we obtain a minimum of 4 scattering events for our given experimental parameters which corresponds to a simulated theoretical pumping time of 33 µs (ﬁg. 3.2). In practice we work with a moderately increased pumping time of 60 µs to 100 µs to be more robust towards imperfections. With that we achieve pumping efﬁciencies of typically 99.6% [139].
Figure 3.2.: Numerical simulation of the populations in |D5/2, −3/2 , |P3/2, −1/2 , and both ground states |S1/2, ±1/2 during optical pumping in a simpliﬁed four-level system. The Rabi frequencies for the simulation were Ω729 = 2π · 177 kHz and Ω854 = 2π · 344 kHz. We assume a balanced initial population in the ground states. The Clebsch-Gordan coefﬁcients for the decay from |P3/2, −1/2 to S1/2, ±1/2 were taken into account. The pumping efﬁciency is limited by off-resonant coupling to neighboring -
transitions.
3.3. Coherent manipulations
Optical pumping prepares the atom in a pure quantum state that forms the basis for further applications. The ability for coherent manipulation of the system plays a key role in most protocols. Over time, we have developed an elaborate quantum-mechanical tool box for these tasks which will be presented in the following sections.
3.3.1. Atomic single-qubit rotations
Despite involving some theory, understanding the atomic dynamics is of particular importance for the experimenter to gain control over its system7. Here we will concentrate on the effect of coherent resonant and off-resonant excitation of an ideal two-level system. Spontaneous emission is neglected for now since it plays no role in the context of quadrupole and RF transitions that are discussed later in the chapter.
7and, of course, also to tackle the various problems that appear in the course of an experiment.
38

3.3. Coherent manipulations

First we treat resonant state rotations and will later see how off-resonant excitation is easily incorporated. Coherent manipulation of a single-qubit quantum state is described by rotations of the quantum-state vector on the Bloch sphere which is a representation of the states that span the one-qubit Hilbert space.
Coherent (near-)resonant excitation in the atomic reference frame (e.g. by a coherent laser ﬁeld or RF drive) is described by the rotation operator

Rˆ (θ, φ) = exp

−

i h¯

θS

= exp

−i θ 2

cos φ σx + sin φ σy



  Σˆ

θ

=

cos φ θ sin φ
0

,

S

=

1 2

h¯ σ

,

σ

=

σx σy 
σz

,

, with

(3.11)

acting on the (pure) qubit state |ψ

0

=

cos

ϑ 2

|0

+

eiϕ sin

ϑ 2

|1

.

σx,y,z are the Pauli matri-

ces. The angle φ deﬁnes the orientation of the rotation axis in the equatorial plane of the

Bloch sphere and θ determines the rotation angle around that axis (see ﬁg. 3.3). In vector

representation, the states |0 and |1 are written as |0 =

1 0

and |1 =

0 1

.

|1

φ

θ |ψ
|0

Figure 3.3.: Depiction of a state rotation on the Bloch sphere. The angle φ deﬁnes rotation axis in the equatorial plane, θ determines the rotation angle along that axis.

To study the effect of Rˆ on |ψ 0, we ﬁrst rewrite |ψ 0 in terms of the eigenvectors of Σˆ , |s1 and |s2 :

|0 = γ1|s1 + γ2|s2 , |1 = δ1|s1 + δ2|s2 ,

γ1, γ2 ∈ C δ1, δ2 ∈ C .

39

3. Experimental methods

With the eigenvalues E1, E2 of Σˆ deﬁned as
Σˆ |s1 = E1|s1 , Σˆ |s2 = E2|s2

we get

Rˆ |s1

=

e−i

θ 2

E1 |s1

,

Rˆ |s2

=

e−i

θ 2

E2 |s2

and hence

Rˆ |ψ 0 = Rˆ

cos ϑ |0 + eiϕ sin ϑ |1

2

2

= Rˆ

cos

ϑ 2

γ1|s1

+

cos

ϑ 2

γ2|s2

+

ei

ϕ

sin

ϑ 2

δ1|s1

+

ei ϕ

sin

ϑ 2

δ2|s2

=

e−i

θ 2

E1

cos

ϑ 2

γ1

+

ei

ϕ

sin

ϑ 2

δ1

|s1

+

e−i

θ 2

E2

cos

ϑ 2

γ2

+

ei ϕ

sin

ϑ 2

δ2

|s2 .

(3.12)

Figure 3.4.: The plot shows a simulation of a resonant single-qubit rotation (blue) with Rabi frequency Ω = 2π · 1 MHz, and an off-resonant excitation at the same Rabi frequency but detuned by ∆ = 4 Ω (red). The off-resonant driving exhibits a fast oscillation of signiﬁcantly decreased
amplitude.

Eq. (3.12) is true for resonant excitation. Including off-resonant driving of the transi-

tion is simply included by making ϑ and ϕ (and consequently also |s1 and |s2 ) time-

dependent.

The

time-derivative

is

directly

given

by

the

relation

dϑ dt

=

Ω

with

the

resonant

Rabi frequency Ω, while the rotation axis deﬁned by ϕ oscillates in the equatorial plane.

The time-varying oscillation angle depends on the detuning ∆ via ϕ(t) = ϕ0 + ∆ · t. The

system dynamics of an initial state are then deduced from these quantities. A simulation

of the temporal evolution of the populations for resonant and off-resonant excitation is

shown in ﬁg. 3.4.

40

3.3. Coherent manipulations

3.3.2. Coherent manipulations on the optical quadrupole transition

Coherent manipulations on the narrow qubit transition at 729 nm pose a very important

tool for state preparation and state analysis. For the success of our protocols it is crucial to

have very good control over these laser pulses and their effect on the ion.

Here we adapt the theory developed in the previous section to optical manipulations of

the real system and investigate their inﬂuence onto the state dynamics. For that purpose,

we prepare the ion in a deﬁned magnetic quantum state, i.e. a speciﬁc m-state, perform a

state-rotation pulse of varying length or power and read out the result by means of ﬂuo-

rescence detection.

Starting in a speciﬁc m-state in S1/2, e.g. |S1/2, −1/2 , the population transfer to D5/2

after

a

time

τ

is

given

by

the

covered

pulse

area

Ω729

·

τ

via

pD

=

sin2

(

Ω729 2

τ)

with

the

Rabi

frequency

Ω729 = γ ·

A2S→D I729 2 Isat

(3.13)

on that transition. As before, AS→D = 2π · 136 mHz is the Einstein coefﬁcient for the

S1/2 → D5/2 quadrupole transition, where the factor γ accounts for the Clebsch-Gordan coefﬁcient on that speciﬁc transition (e.g. |S1/2, −1/2 ↔ |D5/2, −5/2 ). I729 is the laser

intensity at the ion and

Isat

=

AS→D h¯ c 6 λ3

(3.14)

is the saturation intensity of the transition. Full state transfer is performed after a pulse duration τπ = π/Ω729 (a "π pulse"). In the experiment, we usually work with a π-pulse time of 10 µs which has proven to be a good trade-off between transfer inﬁdelity and relatively fast gate times.
To maintain the timings during the experiment, instead of scanning the pulse length, in fact the pulse duration τ is kept ﬁx while the pulse amplitude (and hence Ω729) is varied. Such a pulse-amplitude scan is presented in ﬁg. 3.5. Optimal pulse amplitude and transfer efﬁciency are deduced from a ﬁt to the data.

3.3.3. Coherent manipulations on the radio-frequency transition
Coherent manipulations on the Zeeman-split ground-state qubit in S1/2 can be conducted by far-detuned optical Raman pulses on an electrical dipole transition [140]. In our case, we decided to directly drive the transition with the help of a magnetic RF ﬁeld that is produced by a magnetic-ﬁeld coil located beneath the vacuum chamber. The applied RF drive is tuned to the resonance frequency of the ground-state transition at about 8 MHz. This approach has the advantage that it is very robust and easy-
 to control, as amplitude, frequency, duration and phase of the RF pulse are easily adjusted. Scanning the pulsefrequency over the transition reveals the resonance frequency, optimal pulse parameters for the targeted state rotation are obtained similarly to the procedure described in section

41

3. Experimental methods

Figure 3.5.: Scan of the AOM amplitude the for a pulse resonant on the |S1/2, +1/2 → |D5/2, +3/2 transition while the pulse duration is ﬁxed. The D5/2 population after the optimal pulse is typically in the order of 99%, which, accounting for the pumping efﬁciency of 99.6%, yields a transfer
efﬁciency of approximately 99.4%.

3.3.2, except for another "shelving" pulse at 729 nm at the end of the RF pulse. This pulse

transfers the population in one of the S1/2 Zeeman sublevels into the "dark" (i.e. decoupled from the cooling lasers and therefore dark during ﬂuorescence detection) D5/2 manifold. This shelving pulse is necessary for the ﬂuorescence-based state read-out following the RF

rotation.

With

this

technique,

we

achieve

π-pulse

times

of

up

to

5 µs

(or

2.5 µs

for

a

π 2

basis-

rotation pulse, mentioned in section 3.4). Again, we rather scan the RF amplitude instead

of the pulse duration to obtain the optimal timing in the experimental sequences. Fig. 3.6

shows the result of a typical RF pulse-amplitude scan as performed on a daily basis in the

laboratory.

3.3.4. Light shift
In section 3.3.1 we assumed the energy splitting between the eigenstates of the qubit system to be constant, hence the σz rotation was disregarded. However, in reality, driving a two-level system off-resonantly results in a shift of the energy levels caused by the AC Stark effect, depending on detuning ∆ and (carrier) Rabi frequency Ω of the driving ﬁeld, that gives rise to an additional σz term in the Hamiltonian describing the system. This can be understood quite intuitively: The time-dependent -
phase of a superposition of the eigenstates is determined by the energy difference between these states. Therefore, a change in this energy splitting results in an additional phase after a given time which corresponds to a σz rotation on the Bloch sphere.

42

3.4. Atomic state analysis by ﬂuorescence detection

Figure 3.6.: Result of an RF pulse-amplitude scan. The maximum D5/2 population in this scan was 98.5%. Taking pumping and shelving efﬁciencies into account, this corresponds to a transfer
efﬁciency of 99.5% for the RF pulse.

The magnitude of this light shift is described by the expression [141]

∆AC

=

−

∆ 2

+

sg√n ∆ 22

Ω˜ 2 − Γ2 + 4

Ω˜ 2 − Γ2 4

2
+ ∆2Γ2,

(3.15)

with the effective Rabi frequency Ω˜ = |Ω|2 + ∆2 and the natural transition linewidth Γ. Avoidance of unwanted excitation on the carrier is guaranteed by the condition ∆ Ω, Γ
and is necessary to achieve a pure σz gate. Assuming a Rabi frequency of Ω = 10 kHz, a detuning of ∆ = 100 kHz and a linewidth
of Γ = 2π · 136 mHz, a phase shift of π is accumulated after a time τ = 1 ms which corresponds to a "ﬂipping" of a superposition state in the equatorial plane.8
An experimental implementation of this technique is presented in chapter 7.

3.4. Atomic state analysis by ﬂuorescence detection

Atomic state analysis usually represents the last element of an experimental cycle. In the

context of our setup, it is conducted by an optional basis-rotation pulse followed by state-

dependent ﬂuorescence generation. The basis rotation is required for a full quantum-state

tomography, where measurements in the σz basis are not sufﬁcient. Measurements in the

σx-σy

bases

(i.e.

the

superposition

bases)

are

realized

by

applying

a

π 2

radio-frequency

pulse

prior to the state discrimination to translate the superposition phase into population of

8Remember that the energy shift acts on both levels in opposite direction, hence the factor of 2.

43

3. Experimental methods

the energy eigenstates. If the qubit is encoded into an other state than the ground-state superposition, it is coherently transferred to S1/2 before the further analysis. Fluorescencebased internal-state discrimination is facilitated by shelving the population in one of the two S1/2 states (usually the | + 1/2 population) into the dark D5/2 manifold.
P3/2
D5/2

S1/2

π 2

,

φ

Figure 3.7.: Atomic state analysis in the ground-state qubit. If measured in a superposition basis,
an (optional) radio-frequency rotation pulse, mapping the superposition phase onto the population of | ± 1/2 , is applied. Subsequently, a 729 nm pulse shelves the | + 1/2 population to D5/2. State discrimination is then performed by ﬂuorescence detection at 397 nm under excitation with the
397nm and 866nm lasers. If the qubit is encoded in a different state (e.g. a superposition in the D5/2 manifold), it is coherently transferred to the ground state beforehand.

Fluorescence detection itself is carried out by switching on the cooling lasers (at higher

power to increase the scattering rate) and detecting the scattered 397 nm photons with a

photo-multiplier tube. The ﬂuorescence is integrated for a time τint with typical values of τint = 100 µs. The integrated number of counts allows for a decision whether the ion
stayed in the (bright) ground state after the shelving pulse or is projected onto the (dark)

D5/2 manifold. If in S1/2, the ion exhibits a detected ﬂuorescence rate rb between 135 000 and 150 000 1/s, while the detected dark rate rd, consisting of detector dark counts and laser stray light, is about 100 1/s. The probabilistic nature of the process yields a distribution of

the detected counts as illustrated in ﬁg. 3.8.

To distinguish between both results we deﬁne a threshold nth up to which the result counts as dark, i.e. the ion is assumed to be in the dark state which is decoupled from the exciting

laser. If the number of detection events exceeds that threshold, the ion is assumed to be

in the corresponding bright state. The goal is to ﬁnd the threshold for which the decision

error is minimized for a given integration time.

The error estimation is based on [79]. For integration times small compared to the nat-

ural life time of D5/2, i.e. where we assume that the ion stays in the dark state over the whole integration process9, and assuming no a-priori information on the atomic state and

uniform temporal distribution of the detection events, the decision error is approximated

as

ε

=

1 2

F(nth ,

nb ) +

1 − F(nth ,

nd )

(3.16)

with the expectation values nb = rbτint and nd = rdτint for the number of detected

9a treatment including decay of the dark state is presented in [79]

44

3.4. Atomic state analysis by ﬂuorescence detection

Figure 3.8.: Distribution of accumulated detection events for 100 µs integration time and bright and dark count rates of 155 000 1/s and 100 1/s, respectively (overlayed for illustration). The computation of the optimal threshold for state distinction is discussed in the main text. (From [77])

counts in the bright and dark case and the Poisson cumulative distribution function

∑ F(nth ,

n ) = e− n

nth k=0

nk k!

(3.17)

which describes the probability of detecting less than nth + 1 events for a Poissonian distribution that exhibits a mean of n events.
For typical experimental parameters rb = 140 000 1/s, rd = 100 1/s and τint = 100 µs, we obtain an optimal threshold nth = 1 with a decision error ε = 3.4 · 10−5.

For a reliable estimation of the populations in a certain basis, the experimental sequence followed by ﬂuorescence detection described above is repeated a number of times. From the outcome of this experiment (k dark results) we deduce the probability p to ﬁnd the atom in the dark state, that is, the probability that p correctly reproduces the observed result. Given k dark decisions, this yields the probability distribution

P(p|k)

=

P(k|p) P(p) P(k)

,

(3.18)

where we deployed Bayes theorem. P(p) denotes the probability that p correctly describes the system. Without any initial knowledge, all p are equally probable and we set P(p) = const. = 1. The probability for ﬁnding k dark events, P(k), is expressed as the

45

3. Experimental methods

probability for k ﬁndings given an underlying probability p, P(k|p), weighted with P(p)

and integrated over all p,

1

P(k) = P(k|p) P(p) dp .

(3.19)

0

The probability P(k|p) is described by the binomial distribution

P(k|p) =

n k

pk (1 − p)n−k

(3.20)

for k dark events out of n measurements. With eq. (3.19) and (3.20), (3.18) is rewritten as

P(p|k) =

n k

pk (1 − p)n−k

=

pk (1 − p)n−k

.

n k

1
pk (1 − p)n−k dp
0

1
pk (1 − p)n−k dp
0

Inserting with the Γ function

1

pk

(1 −

p)n−k

dp

=

Γ(k

+

1) Γ(n − k Γ(n + 2)

+ 1)

0

Γ(x) = (x − 1)!

we obtain

P(p|k)

=

(n + 1)! k! (n − k)!

pk (1 −

p)n−k

.

From that result he expectation value for p is determined:

(3.21)
(3.22) (3.23) (3.24)

p

=

1
p P(p|k) dp =

1

p

(n + 1)! k! (n − k)!

pk

(1

−

p)n−k

dp

0

0

=

(n + 1)! k! (n − k)!

1

pk+1 (1 −

p)n−k dp

=

(n + 1)! (k + 1)! (n − k)! k! (n − k)! (n + 2)!

0

=

k+1 n+2

with the standard deviation

∆p = p2 − p 2 ,

(3.25) (3.26)

46

3.5. Zeeman splitting and Larmor phase

where

p2

=

(n + 1)! k! (n − k)!

1

pk+2 (1 − p)n−k dp =

(n + 1)! (k + 2)! (n − k)! k! (n − k)! (n + 3)!

0

=

(k (n

+ +

2)(k + 1) 3)(n + 2)

.

(3.27)

Equations (3.25)-(3.27) allow for the estimation of the state populations and the respective reliability for that value. As a consequence, (3.25)-(3.27) are used to compute the required number of measurement repetitions for a given desired conﬁdence interval of the result.

3.5. Zeeman splitting and Larmor phase

The quantization axis in the present experiment is deﬁned by a constant magnetic ﬁeld aligned along the HALO axis. A collateral effect is the splitting of the respective substates of the level manifolds according to their magnetic moment in the external ﬁeld due to the Zeeman effect. The frequency shift for a state of magnetic quantum number m in a ﬁeld of magnitude B is given by the well-known formula

∆νZeeman

=

µB h

·g·m·B

(3.28)

with the Landé factor g, depending on the state manifold, and the Bohr magneton µB. For the S1/2 ground state, with a Landé factor of g ≈ 2 and magnetic quantum numbers m = ±1/2, a magnetic ﬁeld of B = 2.8 G results in a ground-state splitting ∆ν = 7.84 MHz,

deﬁning the qubit frequency. Lifting the frequency degeneracy enables coherent qubit ma-

nipulation by RF pulses resonant with the ground-state transition.

A superposition of states |0 and |1 with energies E0 and E1 exhibits a phase that pre-

cesses with the Larmor frequency

ωL

=

E1

−E0 h¯

.

The radio frequency, tuned to the ground-state transition, serves as reference frame in the

experiment that rotates with the atomic qubit frequency in S1/2. However, if a distortion of

the local magnetic ﬁeld causes ﬂuctuations of the qubit frequency which the experimenter

is not aware of, the reference oscillator will start to rotate out of phase, causing decoherence

of the system (see section 3.6).

If the qubit is encoded in a different superposition than the ground state, it acquires an

additional Larmor phase according to the difference in the respective frequency splittings,

until it returns to the ground state. Therefore, the precise instant of the transfer to the

S1/2 qubit has to be known so the additional phase can be taken into account for further

processing. The time-dependent Larmor phase is reﬂected as an oscillatory behavior of the

populations in |S1/2, ±1/2 after the basis-rotation pulse as a function of the return time to the ground state.

47

3. Experimental methods
3.6. Coherence time
Quantum information can only be stored as long as the coherence time of a quantum memory permits. Therefore, for larger quantum networks it is essential to obtain long coherence times to ensure reliable operation.
|1
|0
Figure 3.9.: Illustration of decoherence due to magnetic-ﬁeld ﬂuctuations. The B-ﬁeld noise induces a ﬂuctuating energy splitting between the qubit states, causing the phase of an atomic superposition (depicted as state vector on the Bloch sphere) to oscillate at different frequencies and thus to accumulate differing phases over time. If these phase deviation are unknown to the experimenter, they add up incoherently and drag the atomic state vector towards the origin of the sphere, i.e. towards a -
mixed state.
Decoherence, in a sense, describes the loss of knowledge over the collective quantum state of a system, e.g. due to undetected scattering of photons that carry information about the physical state, or unknown perturbations of the system Hamiltonian. In our case, the storage time of quantum information is primarily limited by the latter effect. In particular, a ﬂuctuating local magnetic ﬁeld leads to a ﬂuctuation of the energy levels due to the Zeeman effect and thus to an additional unknown phase -
contribution to the superposition state in the qubit subspace, reducing the purity of the outcoming state, as depicted in ﬁg. 3.9.
The main sources of B-ﬁeld noise are the electronic overhead surrounding the trap table and noise on the current through the ﬁeld coils, delivered by a DC power supply. The magnetic-ﬁeld noise can be decomposed into two contributions, white noise and harmonically oscillating variations at 50 Hz and higher harmonics thereof. The latter manifests as Bessel "bumps" in visibility–vs.–waiting-time plot of Ramsey-type scans (see ﬁg. 3.10) and is eliminated by applying a phase-shifted ﬁeld of the same fr-
equency and magnitude. A more extensive discussion of both types of B-ﬁeld noise and their effect onto the coherence time is found in [77].
48

3.6. Coherence time

Figure 3.10.: Visibility vs. waiting time for a series of RF Ramsey scans from the "ancient days" (taken from [77]) when no B-ﬁeld–noise elimination was used. The T2∗ coherence time was measured to be 279(9) µs. The Bessel fringes for higher waiting times are clearly visible.

A convenient way to deduce the coherence time is provided by a Ramsey experiment

(or rather a series of Ramsey experiments). A Ramsey experiment or Ramsey phase scan

consists of four steps, illustrated also in ﬁg. 3.11. First, the ion is initialized in an energy

eigenstate by optical pumping, for instance in |0

=

|S1/2, m

=

−1/2

,

followed

by

a

π 2

pulse of deﬁned phase ϕ0 that rotates the state into a symmetric superposition |0 + ei ϕ0 |1

on the equatorial plane of the Bloch sphere. For simplicity we assume ϕ0 = 0. The superpo-

sition now evolves for a time τRamsey, where it might pick up an undesired phase deviation caused by perturbations of the energy distance between |0 and |1 . Subsequently a second

π 2

pulse

with

variable

phase

ϕ

is

applied.

The

phase

offset

between

atomic

superposition

and second pulse determines the resulting rotation. Fluorescence detection ﬁnally reveals

the population in S1/2 and D5/2, respectively (explained in the previous section).

Pumping

RF pulse

π 2

,

0◦

τRamsey

RFπ 2

pulse
,ϕ

Shelving

Fluorescence

t

Figure 3.11.: Schematic visualization of a Ramsey sequenced as explained in the main text. The outcome of this Ramsey-type measurement is shown in ﬁg. 3.12.

Scanning the phase of the second pulse with respect to the ﬁrst one exposes an oscillatory behavior of the excited-state population (ﬁg. 3.12) whose visibility depends on the coherence.

49

3. Experimental methods
Figure 3.12.: Ramsey-type phase scan on the RF transition in S1/2 for a waiting time of 10 µs between the consecutive RF pulses and 500 repetitions per phase point. Shown is the number of dark decisions after the shelving pulse. The slight imbalance derives from imperfect pumping and shelving.
The coherence time is then estimated by a series of these Ramsey phase scans for differing waiting times (ﬁg. 3.10 and 3.13). We achieve a distinct increase of coherence by compensating for periodic magnetic-ﬁeld noise at 50 Hz and higher harmonics, originating from the power line, by installing an additional feed-forward coil along the quantization axis. The coil is driven by an AC current at 50 Hz and 150 Hz, phase-locked to the power line, with adjustable amplitude and phase. Amplitude and phas-
e are then optimized by maximizing the visibility of the Ramsey fringes for a particular waiting time on the ﬁrst negative slope of a signal as the one shown in ﬁg. 3.10. Detail on the feed-forward technique is found in the Master’s thesis of Matthias Kreis [133] who was responsible for the conception and realization. Applying this feed-forward technique increases the coherence time in the ground-state qubit from values as low as ≈ 200 µs to values of typically about 700 µs (as seen in ﬁg. 3.13) o-
r sometimes even up to 1 ms10.
The experimental tools deduced in this chapter are widely used in the work presented in the following. Doppler cooling is employed for trapping of the ion and preparation of the thermal state that allows for coherent manipulation on the optical qubit transition and as such builds the backbone of all experiments demonstrated here. The frequencyselective optical-pumping scheme developed in the course of this thesis allows pure-state preparation of the ion independent of the spatial orientation of th-
e (quadrupole-transition) pumping beam and forms an essential block for the quantum interface presented in chapter
10the actual coherence time varies from day to day and seems to depend on the overall noise on the power line, as we experienced longer coherence times on the weekends.
50

3.6. Coherence time
Figure 3.13.: Visibility vs. waiting time nowadays. The feed-forward compensation for magneticﬁeld–noise cancellation was switched on, improving the coherence time to 647(11) µs. 5 and the two-ion quantum gate (chapter 7). Coherent manipulations of the atomic qubit, either on the optical quadrupole or on the radio-frequency ground-state transition, are, in a sense, the basic tool in in our toolbox. Reliable single-qubit rotations are used for coherentstate preparation and state analysis and are th-
erefore encountered in all of the following chapters. Future multi-ion protocols like ion-to-ion quantum-state teleportation will need (laser-phase independent) single-qubit operations in a string of two or more ions. For the implementation of the latter, we employed a scheme based on the shift of the transition frequency caused by coupling onto a light ﬁeld as described in section 3.3.4. The according measurements are demonstrated in section 7.1.2. Each of the experiments shown in this work requi-
res ﬂuorescence-based atomic state analysis11 described in 3.4. Prediction and reconstruction of the atomic dynamics as needed for all experimental results, presented in the chapters 5, 6, and 7, requires the understanding of the magnetic-ﬁeld dependent splitting of the atomic energy levels, treated in 3.5. Finally, the ability to store quantum information or preserve entanglement in the present experiments is limited by the atomic coherence time. The mechanism for coherence-time reduction, the Ra-
msey phase scan as a tool for the determination of the current coherence time and measures for its improvement are brieﬂy depicted in 3.6.
11Either for the evaluation of the viability of the respective operations or as part of the protocol itself, e.g. as a projective measurement.
51

4. Single-atom–single-photon interaction
Large-scale quantum networks, based on stationary qubits represented by atomic quantum memories for quantum-information storage and processing, and photonic quantum channels between these nodes, inherently require atom-photon interfaces that act as interconnections between ﬂying qubits and their stationary counterpart. Therefore, accurate control over single-photon–emission and absorption processes with high ﬁdelity is of vital interest for every future quantum-network architecture. Understanding -
these processes is the key to gaining control over them and thus an essential element in the realization of a single-atom–single-photon–based quantum interface.
This chapter has two goals in particular. First, we would like to understand the process of spontaneous Raman scattering in a three-level system as an adequate model for the dynamics of the real system and develop a quantum-mechanical model for the absorption and emission of single photons by a single atomic ion. We will encounter the results of this analysis again in chapters 5 and 6 when we estimate the inﬂuence of undesired atomic decay on the ﬁnal quantum state. Hence, the ﬁrst part of this ch-
apter treats spontaneous Raman scattering of a single photon in a simpliﬁed three-level model and investigates the temporal and spectral properties of the emitted photon. The estimation of the single-process success probability for the experiments conducted in the course of this thesis, i.e. atom-to-photon state transfer, photon-to-atom state transfer, and atom-photon entanglement in chapters 5 and 6, requires knowledge about the photon collection efﬁciencies and, in that context, to ﬁnd an analyt-
ical expression for the emission properties of an optical dipole. This represents the second goal of the present chapter. For that purpose, the absorption and emission properties of optical dipole transitions, their spatial dependence and the inﬂuence on the photon polarization is discussed in the second part of this chapter. We will derive an expression for multi-mode and single-mode photoncoupling efﬁciency for different atomic transitions and evaluate this expression for our experimental parame-
ters to ﬁnd the expected values in our implementation. In addition, the effect of the ﬁnite solid angle of the HALO lenses for both cases, single- and multi-mode or free-space coupling, onto the ﬁnal state is discussed.
The formulation of the three-level spontaneous Raman scattering has been treated in a similar way by Michael Schug in his dissertation thesis and builds the basis for section 4.1. The calculation of the dipole-emission characteristics is inspired by the treatment in the same thesis and has been extended to complex ﬁelds and single-mode coupling for this work. The quantum-mechanical description of the single-photon emission and absorption process was originally developed by Philipp Müller and is pu-
blished in [142].
53

4. Single-atom–single-photon interaction

4.1. Spontaneous Raman scattering in a three-level system

In most of our protocols, the atomic dynamics is well approximated by that of a three-level system in Λ conﬁguration, which allows us to develop a simple model for the temporal behavior of the system. The Λ conﬁguration consists of a high-lying, short-lived excited state, representing P3/2, and two stable, low-lying ground states, representing either S1/2 and D5/2, or two Zeeman sublevels in D5/2. The treatment of D5/2 as a stable state is justiﬁed by its lifetime of more than 1 s which is large c-
ompared to the typical time scales involved in the dynamics of the system.
The evolution of atomic populations, more precisely the population of the excited state, reﬂects the temporal properties of the single Raman-scattered photon. The population dynamics, and hence the photonic wave packet, is modeled by means of three-level rate equations that will then be solved numerically, inspired by the treatment in [78].

In the present experiment, we will encounter three excitation schemes,

(1.) initial preparation of the ion in D5/2, excitation to P3/2, and generation of a single 393 nm photon on the P3/2-to-S1/2 transition,

(2.) initial preparation of the ion in S1/2, excitation to P3/2, and generation of a single 854 nm photon on the P3/2-to-D5/2 transition, and

(3.) initial preparation of the ion in D5/2, excitation to P3/2, and generation of a single 854 nm photon on the P3/2-to-D5/2 transition,

that will be discussed in the following.
For the generation of single 393 nm photons (1.), the ion is initialized in D5/2. A laser at 854 nm continuously excites the population to P3/2 with the transfer rate r854 (ﬁg. 4.1 (a)). From there it decays to the ground state S1/2 with rate A393 by emitting a photon at 393 nm or back to D5/2 with rate A854. In addition, the stimulated transfer from P3/2 back to D5/2 must be taken into account. The resulting rate equations for the populations pS, pP and pD for S1/2, P3/2 and D5/2 are then derived-
 as

d dt

pS(t)

=

A393

pP(t)

,

d dt

pP(t)

=

−( A393

+

A854

+

r854)

pP(t)

+

r854

pD(t)

,

d dt

pD(t)

=

−r854

pD(t)

+

A854

pP(t)

+

r854

pP(t)

.

(4.1) (4.2) (4.3)

These rate equations are fed into a numerical simulation whose result is presented in ﬁg. 4.1 (b), where the photon-emission rate rPh is directly proportional to the evolution of pP via rPh,393 ∝ A393 · pP. It should be noted that decay into and reexcitation from other D5/2 Zeeman sublevels is omitted in the simulation and has to be taken into account in a more
realistic model, where additional losses would occur due to this effect. Mainly, it leads to
a reduction of the efﬁciency of photon generation by a few percent.

54

4.1. Spontaneous Raman scattering in a three-level system

P3/2
393 nm

854 nm
D5/2

S1/2

(a)

(b)

Figure 4.1.: (a) Simpliﬁed level scheme for the generation of single 393 nm photons. The ion is
initialized in D5/2 and pumped into S1/2 by applying a 854 nm laser pulse. (b) Temporal evolution of the populations in S1/2 (black), P3/2 (blue) and D5/2 (red). The population-transfer rate r854 from D5/2 to P3/2 is chosen as r854 = 2π · 3 MHz. The temporal shape of the 393 nm-photon wave packet is proportional to the population in P3/2 (see main text).

The rate equations for the generation of single 854 nm photons, starting from S1/2 (2.) are deduced in a similar fashion. We deploy a 393 nm laser, driving the S1/2 ↔ P3/2 transition at rate r393, to scatter a photon at 854 nm via decay from P3/2 to D5/2, as illustrated in
ﬁg. 4.2 (a). Again constraining the considerations to the three-level system, we obtain

d dt

pS(t)

=

( A393

+

r393)

pP(t)

−

r393

pS(t)

,

d dt

pP(t)

=

r393

pS(t)

−

(r393

+

A393

+

A854)

pP(t)

,

d dt

pD(t)

=

A854

pP(t)

.

(4.4) (4.5) (4.6)

The numerical solution for the respective populations is visualized in ﬁg. 4.2 (b). Note that
the photon length of the 854 nm photon, i.e. the decay time constant of the P3/2 population, is substantially increased compared to the 393 nm photon for identical population-transfer rates r854 = r393. This is attributed to the unequal Einstein coefﬁcients A854 and A393. In other words, the ion will decay back to S1/2 several times before it eventually ends up in D5/2. One consequence of this additional scattering is that the time-bandwidth product of the 854 nm photon will not be Fourier limited-
. This effect is extensively discussed in [81].

The third scheme is again the generation of a 854 nm photon, this time starting in D5/2 (3.). More precisely, we start in one of the Zeeman sublevels in D5/2 and transfer the population into a second D5/2 sublevel by switching on a laser at 854 nm that couples the transition from D5/2 to P3/2 (ﬁg. 4.3 (a)) at rate r854. It has to be mentioned that there exists an additional decay channel (shown in the previous ﬁgures), speciﬁcally the (strong) decay
from P3/2 into S1/2 that leads to loss out of the three-level system. Therefore, this loss has

55

4. Single-atom–single-photon interaction

P3/2
393 nm

854 nm
D5/2

S1/2

(a)

(b)

Figure 4.2.: (a) The population S1/2 is coupled to the excited, short-lived P3/2 state via the 393 nm laser, from where it eventually decays to the meta-stable D5/2 state by scattering a Raman photon at 854 nm. (b) Despite the same transfer rate r393 = 2π · 3 MHz of the exciting laser, the population is transferred much slower into its ﬁnal state, implying an increase of the length of the Raman photon.
This is traced back to the repeated decay back into the ground state before the ﬁnal transfer into
D5/2, which means that the ion scatters on average a number of blue photons, corresponding to the branching ratio of both decay channels, before a red photon is emitted, repealing the Fourier
limitation of the time-bandwidth product.

to be taken into account in the rate equation to reproduce reliable results. We obtain the
three-level rate equations for the populations pD,3/2, pP, and pD,5/2 of |D5/2, +3/2 (initial state), P3/2, and |D5/2, +5/2 (ﬁnal state), respectively:

d dt

pP(t)

=

r854

pD,3/2

−

( A393

+

A854

+

r854)

pP(t)

,

d dt

pD,3/2(t)

=

(4 15

A854

+

r854)

pP(t)

−

r854

pD,3/2

,

d dt

pD,5/2(t)

=

10 15

A854

pP(t)

,

(4.7) (4.8) (4.9)

where we included the Clebsch-Gordan coefﬁcients for the P3/2 ↔ D5/2 transitions and the loss into S1/2 given by the term −A393 pP(t) in eq. (4.7). Loss into a third D5/2 Zeeman sublevel is indirectly included in the model by using the full Einstein coefﬁcient for the 854 nm decay in eq. (4.7). Looking at the outcome of the simulation (ﬁg. 4.3 (b)), an interesting effect arises: The time-bandwidth product of the outgoing 854 nm photon wave packet is again (nearly) Fourier limited, as it is apparen-
t from the fact that the wave-packet length at identical coupling rates for 854 nm coincides with the Fourier-limited wave packet at 393 nm from the ﬁrst scheme, albeit at the cost of efﬁciency. From the simulation, we deduce a generation efﬁciency of approximately 4% for 854 nm photons on the desired |P3/2, +3/2 → |D5/2, +5/2 transition.

The aforementioned model can be extended by coupling both ground states via a driving ﬁeld (e.g. a laser ﬁeld at 729 nm), as it has been done to simulate the pumping dynamics in

56

4.1. Spontaneous Raman scattering in a three-level system

P3/2 +3/2
854 nm

854 nm
D5/2
+5/2

D5/2
+3/2

(a)

(b)

Figure 4.3.: (a) Population in one Zeeman sublevel of D5/2 is depleted by the laser ﬁeld at 854 nm. Deacy into a second D5/2 sublevel re-emits a red photon. (b) Numerically solving eqs. (4.7)–(4.9) for a transfer rate of r854 = 2π · 3 MHz reveals the population of the considered states over time. It is noticeable that the length of the photon wave packet (directly proportional to the population in
P3/2) is of the same length as in ﬁg. 4.1, while the overall transfer efﬁciency, reﬂected in the steadystate population in the ﬁnal D5/2 substate (red) is signiﬁcantly decreased due to population loss into S1/2.

section 3.2. In that case, eqs. (4.1)–(4.3) have to by modiﬁed and we obtain the four-level rate equations

d dt

pS,+(t)

=

2 3

A393

pP(t)

,

d dt

pS,−(t)

=

1 3

A393

pP(t) − r729

pS,−(t) + r729

pD(t)

,

d dt

pP(t)

=

r854

pD(t)

−

( A854

+

r854

+

2 3

A393

+

1 3

A393)

pP(t)

,

d dt

pD(t)

=

r729

pS,+(t)

+

(r854

+

A854)

pP(t)

−

(r729

+

r854)

pD(t)

,

(4.10) (4.11) (4.12) (4.13)

with the populations pS,± for both ground states S1/2, ±1/2 , and pP and pD for the populations in P3/2 and D5/2, respectively. The transition from S1/2, +1/2 to D5/2 at 729 nm is driven at rate r729 and the CGCs for the decay from P3/2 into the respective ground states are taken into account.
The rate equations presented here produce reliable results as long as the coupling to transitions or decay into states not regarded in the model is negligible and effects like light shifts or interference between individuals transition paths [143] do not occur or have negligible inﬂuence. This assumption is justiﬁed for the scenarios presented in this section, at least for reasonably low coupling strength of the driving laser and proper polarization adjustment, such that the coupling to neighborin-
g transitions is very weak. For more complex level schemes, an 18-level Bloch-equation simulation [81] was developed in the group.

57

4. Single-atom–single-photon interaction

4.2. Emission properties of optical dipoles
Aside from the temporal properties, the characterization of single photons comprises the remaining degrees of freedom, spatial direction of propagation and polarization. In the following, we will limit ourselves to photons absorbed and emitted on optical dipole transitions. The dipole-allowed transitions are discussed and their inﬂuence on the photon polarization for different directions of observation are investigated. Eventually, the collection efﬁciencies in our setup for free-space collection -
and single-mode–coupled photon collection are calculated theoretically from the previously-derived models.
The calculations presented in this section are closely related to those in [144] and then extended to a full amplitude-based description, following the recipes mentioned in [100] and [145].

4.2.1. Optical dipole transitions

The probability for spontaneous transition from state i to k in a unit time interval is proportional to the Einstein coefﬁcient [146]

Aik

=

2 3

e28π3νi3k ε0 c2 h

| Mik |2

(4.14)

with the electron charge e, the transition frequency νik and the transition dipole moment

Mik = ψi∗ r ψk d3r .

(4.15)

ψi,k denote the electron’s wave function for the states i and k, respectively. In spherical representation, the electronic wave function ψn m(r) for the principal quan-
tum number n, the angular momentum quantum number and the magnetic quantum
number m, can be decomposed into a radial component Rn (r) and an angular component Y m(θ, ϕ), i.e. ψn m(r) = Rn (r) · Y m(θ, ϕ). Rn (r) and the spherical harmonics Y m(θ, ϕ)
are given by

Rn (r) =

2Z na0

3

(n − − 1)! 2n · (n + 1)!

e−ρ/2 ρ

· L2n−+1−1 (ρ)

,

ρ

=

2Zr n a0

(4.16)

with the Bohr radius a0, the proton number Z and the generalized Laguerre polynomials

L2n−+1−1, and

Y

m(θ, ϕ)

=

√1 2π

Pm(cos θ) ei mφ

,

(4.17)

where Pm(cos θ) is the associated Legendre polynomial.

A (partially) quite lengthy calculation, which is beyond the scope of this section, reveals

the selection rules for optical dipole transitions,

∆ = i − k = ±1

(4.18)

58

4.2. Emission properties of optical dipoles

∆m = mi − mk = 0, ±1 .

(4.19)

For other combinations of |i = |ni i mi and |k = |nk k mk , eq. (4.15) vanishes and hence the transition is "dipole-forbidden". If we additionally demand that ∆s = 0 for the change
in the spin quantum number, we obtain in spin-orbit coupling

∆j = 0, ±1

(4.20)

for the total angular momentum j = + s, whereby j = 0 → j = 0 is forbidden. The case ∆m = 0 (π transition) in eq. (4.19) corresponds to the non-vanishing z com-
ponent of the transition dipole moment ((Mik)x = (Mik)y = 0), i.e. to an atomic dipole oriented along the quantization axis, whereas ∆m = ±1 (σ± transition) correspond to (Mik)x ± i (Mik)y, i.e. dipoles that rotate (counter-)clockwise in the x-y plane perpendicular to the quantization axis. This geometrical interpretation will help to gain an intuitive
picture of the directionality of the polarization properties discussed in the next section.

4.2.2. Spatial dependence of the photon polarization

The goal of this section is the development of a formalism to derive the photon polarization
measured in the reference frame of the observer for a given orientation of the atomic dipole.
A detailed calculation is given in appendix A.1.1, the key results are summarized in this
section.
Naturally there are two reference frames involved in the consideration, the atomic (at) and photonic (ph) frame, which are deﬁned such that eˆ(zat) is oriented along the quantization axis and eˆ(xat) lies in the table plane, and eˆ(zph) k, with the photonic wave vector k being parallel to the propagation direction of the light, as depicted in ﬁg. 4.4.
Deﬁning the right- and left-hand circular-polarization unit vectors eˆ(+ph) and eˆ(−ph), respectively, the horizontal and vertical polarizations are written as

eˆ(Hph)

=

− √1 2

eˆ(+ph) − eˆ(−ph)

, and

eˆV(ph)

=

i

√1 2

eˆ(+ph) + eˆ(−ph)

.

(4.21)

The relation between both reference frames, i.e. the transformation from the atomic to the photonic frame, is described by (c.f. [144])

1

∑ eˆ(qat) = eiq ϕ

d1q ,q(−θ) eˆ(qph) .

q=−1

(4.22)

d describes the Wigner (small) matrices dqj ,q(ϑ), and the (atomic) unit vectors are given by







eˆ0(at)

=

0 0
1

and

eˆ(+at)

=

− √1 2

1 i
0

,

eˆ(−at)

=

√1 2

1 −i
0

.

(4.23)

59

4. Single-atom–single-photon interaction

z(at)

z(ph) y(ph) x(ph)

k

y(at)

x(at)
Figure 4.4.: Coordinate systems for the atomic (at) and photonic (ph) reference frame. The wave vector k coincides with the direction of observation. The transformation rule from the atomic into the photonic frame is described in the main text.

That formalism allows to derive the direction-dependent polarization amplitudes for
a given orientation of the atomic dipole, i.e. for a given atomic transition, of which the π transition, corresponding to eˆ0(at), and the σ+ and σ−, corresponding to eˆ(+at) and eˆ(−at), respectively, are relevant for the present treatment.
A brief calculation (see A.1.1) reveals the (un-normalized) polarization amplitude A(πph) for the atomic π transition in the basis of the linear photonic polarizations H and V:

A(πph) = − sin θ eˆ(Hph) .

(4.24)

Eq. (4.24) shows that light emitted on a π transition exhibits solely a horizontal polarization component (in the photonic frame). The spatial intensity characteristic features a toroidal (or "doughnut"-like) shape, i.e. the intensity of the light is maximal perpendicular to the orientation of the atomic dipole, while emission into the direction of the symmetry axis is entirely suppressed.
Analogously, the polarization amplitudes for the atomic σ± transitions, as seen by a observer whose direction of observation is determined by the angles θ and ϕ, are found as1

A(σp+h)

=

√eiϕ 2

cos θ eˆ(Hph) + i eˆV(ph)

1A detailed derivation is given in A.1.1.

(4.25)

60

4.2. Emission properties of optical dipoles

and

A(σp−h)

=

e√−i ϕ 2

cos θ eˆ(Hph) − i eˆV(ph)

.

(4.26)

Along the symmetry axis of the dipole (the quantization axis), we ﬁnd the polarization of the photon emitted on the σ± transitions to coincide with right- and left-hand polar-
ization R and L, thus being completely distinguishable. For observation perpendicular to
the quantization, on the other hand, only vertically-polarized light is observed for both transitions, σ+ and σ−, leaving the observer fully unaware of which transition took place.
The emitted intensity is maximal along the quantization axis and reduced to 1/2 of the
maximum value perpendicular to the quantization axis. The overall intensity distribution obeys the law I = cos2 θ + 1, reminding of a peanut.
Including the normalization following the derivation in appendix A.1.1, we obtain the normalized polarization amplitudes in the photonic reference frame for the atomic π, σ+ and σ− transitions,

A(πph) = −

3 8π

sin θ eˆ(Hph) ,

A(σp+h) =

3 √eiϕ 8π 2

cos θ eˆ(Hph) + i eˆV(ph)

, and

A(σp−h) =

3 e√−iϕ 8π 2

cos θ eˆ(Hph) − i eˆV(ph)

.

(4.27) (4.28) (4.29)

We have seen that the three atomic dipole transitions result in different emission characteristics, both in intensity and polarization in the photonic or observer reference frame. A π transition results in the emission purely horizontally polarized light, which fully vanishes along the quantization axis and shows maximal intensity perpendicular to it. Light emitted on the σ± transitions exhibits maximal intensity along the quantization axis, where the polarization of the photons corresponds to rig-
ht- and left-hand-circular polarization and is fully distinguishable. Perpendicular to the quantization axis, the intensity is reduced by a factor of 2 and the light is vertically polarized for both cases, resulting in full indistinguishability between both transitions.
These properties are used in the later course of the work, e.g. for the generation of entangled atom-photon-states, where the correlation between atomic transition and photon polarization is employed

4.2.3. Free-space collection
With the polarization amplitudes derived in the previous section, it is now possible to calculate the collection efﬁciencies in our experiment for photons scattered on a certain transition. We have to distinguish between two cases, free-space collection, where the

61

4. Single-atom–single-photon interaction

entire power scattered into a given solid angle is integrated, and single-mode–coupled collection, where spatial interference effects have to be taken into account.
In this section, we investigate the free-space collection, which corresponds to the case where the collected photons are coupled into a multi-mode ﬁber or directly imaged onto the sensitive area of a single-photon detector.
For the sake of compactness, this section recapitulates the essential results and a detailed analysis is left to the appendix A.1.2.
Photons emitted by the single ion are collected by the HALO lens stack with a numerical aperture of 0.4, such that a cone with an opening angle of 2α = 2 · 23.75◦ is covered by the collection setup. From purely geometrical considerations, this corresponds to 4.23% of the full solid angle. For the actual collection efﬁciency, the directionality of the dipole emission, as discussed in section 4.2.2, has to be regarded.
The normalized probability amplitude for photon emission into the direction determined by the angles θ and ϕ is deﬁned as the square modulus of the probability-ﬁeld amplitude, I(θ, ϕ) = |A(θ, ϕ)|2. Inserting the polarization amplitudes from eqs. (4.27)-(4.29) and integrating over the opening angle of the HALOs, the multi-mode-collection efﬁciencies for photon emission on the π and σ± transitions are derived as

α 2π

α=23.75◦

ηπMM =

|Aπ(θ,

ϕ)|2

sin

θ

dθ

dϕ

=

2π

3 8π

sin3 θ dθ ≈ 0.53% .

θ=0 ϕ=0

θ=0

(4.30)

and

α 2π

α=23.75◦

ησMM =

|Aσ(θ,

ϕ)|2

sin θ

dθ

dϕ

=

3 8

cos2 θ + 1 sin θ dθ ≈ 6.09% ,

θ=0 ϕ=0

θ=0

(4.31)

i.e. the collection of π light is suppressed by more than one order of magnitude with respect

to the collection of σ light, while the latter is enhanced compared to the covered solid angle

of

the

HALO

by

a

factor

of

3 2

,

when

the

HALO

is

aligned

along

the

quantization

axis.

The

suppression of collection for π emission is even increased when the light is coupled into a

single-mode ﬁber due to interference effects, as it is demonstrated in the next section.

4.2.4. Single-mode coupling
For some experiments conducted in the context of this thesis, it is of importance to investigate the inﬂuence of single-mode coupling onto the collection efﬁciencies for our single photons. In contrast to the previous section, interference of the individual light ﬁelds becomes important in the case of single-mode collection, i.e. when the collected photons are coupled into a single-mode ﬁber. This section gives an overview of the results. A more elaborate version is given in the appendix (sec. A.1-
.3).

62

4.2. Emission properties of optical dipoles

For reasons of comparability, ﬁrst we assume a single-mode ﬁber whose mode coincides exactly with the non-Gaussian light mode leaving the HALO2. For a more realistic treat-
ment, the mode overlap between the (Gaussian) ﬁber mode and the HALO mode would
have to be included, as it is presented in sec. 4.2.5.
All calculations in this section are conducted in the laboratory (atomic) reference frame, hence the superscripts (at) and (ph) are omitted.
For a non-extended light source in the focus of the HALO, which approximately repre-
sents the situation in our experiment with the ion acting as single point source, the light ﬁeld leaving the HALO becomes ﬂat. Thus, we re-write the electrical-ﬁeld amplitudes3 for atomic π and σ± transitions in cylindrical coordinates (z, ϕ, ):

Eπ = −

i f2 + 2

3 8π

eˆ , f2 + 2

(4.32)

with

Eσ± =

i f2 + 2

3 e√±iϕ 8π 2

f f2 +

eˆ
2

± i eˆϕ

 cos ϕ

−

sin

 ϕ

eˆ = sin ϕ and eˆϕ =  cos ϕ  .

0

0

(4.33) (4.34)

Here, f denotes the focal length of the HALO. In this simpliﬁed treatment we ﬁrst consider the ﬁber mode G [100] to perfectly match the top-hat mode of the HALO, i.e.

 α
G = Θ( 0 − ) β
0

, |α|2 + |β|2 = 1

(4.35)

with the Heaviside function Θ( 0 − ). The coupling efﬁciency into the single-mode ﬁber is determined by the overlap between the electrical-ﬁeld mode E and the ﬁber mode: [100]

ηSM = ∞ 2π

2

E

=0 ϕ=0

0 2π

2

E · G cos(θ( ))d dϕ

=0 ϕ=0

∞ 2π

2

.

cos(θ( ))d dϕ

G cos(θ( ))d dϕ

=0 ϕ=0

(4.36)

2Assuming a point source lying in the focus of the HALO, as it is approximately the case for the the properly
aligned ion-HALO system. 3in the physical dimension of probability per solid angle

63

4. Single-atom–single-photon interaction

Therefore, the single-mode ﬁber coupling efﬁciency for an atomic σ± transition becomes

ησS±M =



0 2π =0 ϕ=0

f f 2+

2

e±iϕ  √ f
f 2+

∞ 2π

f2 (f2 +

2)2

+

1 f2 +

 

  

cos ϕ

− sin ϕ

α

2 sin ϕ ± i  cos ϕ  β d

0

0

0

0 2π

f

f

2

f2 +

d
2

dϕ

f2 +

dϕ d
2

2
dϕ

≈

6.09% .

=0 ϕ=0

=0 ϕ=0

=

8π 3

√

=2π f

f 2+

2 0

−

f

2

(4.37)

Compared to the multi-mode coupling (c.f. eq. (4.31)), the single-mode collection of σ±

photons is unchanged if assuming the idealized ﬁber mode.

In some experiments in this work, e.g. the atom-photon entanglement or atom-to-photon

state transfer in chapter 6, it is essential to collect photons emitted in the σ transitions, while

the detection of π photons reduces the ﬁnal state ﬁdelity signiﬁcantly. In section 4.2.3 we

have seen that, though being reduced due to the spatial emission properties of the atomic

dipole, the collection-efﬁciency for π photons still accounts for about 10% compared to

photons emitted on the σ transitions in the case of multi-mode coupling. For single-mode

coupled photons, however, the collection efﬁciency completely vanishes:

ηπSM =



0 2π

cos ϕ

=0 ϕ=0

√1
f 2+

2

√
f 2+

2

sin ϕ Θ( 0

0−



2

α

) β

√f d
f2+ 2

dϕ

0

∞ 2π

2

( f 2+ 2)2 =0 ϕ=0

√f d
f2+ 2

dϕ

0 2π =0 ϕ=0

√f d
f2+ 2

dϕ

=0

(4.38)

The latter effect can also be understood in a more intuitive picture. Due to the rotational (a-

)symmetry of the ﬁeld amplitude Eπ with respect to the quantization axis, the ﬁeld contributions for ϕ and ϕ + π cancel each other, resulting in an effective destructive interference
for the coupling into the single-mode ﬁber.

Thus, when collection of π light is unwanted, coupling of the emitted photons in a single-mode ﬁber offers enormous advantages as the polarization purity of the single-

mode-coupled photons is signiﬁcantly increased.

It will become obvious in later chapters that it is of particular interest to analyze the situation of a superposition of two atomic dipoles emerging from a σ+ and a σ− transition, respectively. The resulting emitted ﬁeld consequently consists of a superposition of the σ+ and σ− ﬁeld contributions and becomes

Eσ

=

√1 2

Eσ+ + eiφ Eσ−

,

(4.39)

where φ describes the relative phase between the dipoles. An analogue calculation as in eq. (4.37) (see also appendix A.1.3) reveals the coupling efﬁciency ησSM ≈ 6.09%. We see that the collection efﬁciency stays unchanged and is independent of φ.

64

4.2. Emission properties of optical dipoles

For the (slightly unrealistic) scenario investigated here, where we assumed single-mode
coupling into a ﬁber whose mode coincides with the output mode of the HALO for a point
source in the focus of the HALO input, we concluded that coupling of light emitted on a π
transition and collected along the quantization axis is fully suppressed, while the coupling efﬁciency for σ± photons remains unaltered compared to free-space or multi-mode cou-
pling. In addition, we investigated the coupling efﬁciency for a superposition of light from σ+ and σ− transitions. The coupling efﬁciency for the superposition stayed unchanged
compared to the case of emission on a single σ transition. This means that each superposition of light emitted on σ± transitions exhibits a single-mode coupling efﬁciency of 6.09%,
independent of the superposition amplitude and phase.

4.2.5. Mode matching

In reality, the single-mode ﬁber is not so gracious as to provide a mode that perfectly matches our collection mode, but rather exhibits an approximately Gaussian shape. This means, for a realistic estimation of the coupling efﬁciency, the G used in eq. (4.35) has to be modiﬁed accordingly and we obtain [145]

√ G = √2 eiψ exp
w0 π

2
− w2(z)

 α
β .
0

(4.40)

ψ denotes the Gouy phase, w0 is the beam waist, and w(z) describes the beam radius in the measurement plane. In our situation, w(z) coincides with the maximum beam radius 0.
The ﬁber mode G exhibits a rotation symmetry and is therefore independent of ϕ. As in sec. 4.2.4, the ﬁeld contributions of ϕ and ϕ + π cancel out for light emitted on a π transition, resulting in a single-mode coupling efﬁciency of 0.
To evaluate the coupling efﬁciency into the (more realistically modeled) single-mode ﬁber for the case of photons originating from a ∆m = ±1 (σ±) transition, we have to compute eq. (4.36) for the ﬁber mode (4.40) and the ﬁeld amplitude (4.33). The detailed analysis is given in app. A.1.4. Due to reasons of compactness, only the result is given here. We ﬁnd an overall coupling efﬁciency of approximately 2.43% for the Gaussian ﬁber mode, corresponding to a mode-matching efﬁciency of about 40% betwee-
n HALO and ﬁber mode.
The theoretically derived value of 2.43% overall coupling efﬁciency4 for photons from a σ transition (corresponding to 40% mode-matching efﬁciency times 6.09% collection efﬁciency) is in good agreement with the value of 39% mode-matching efﬁciency (or 2.36% overall coupling efﬁciency) observed in the experiment (c.f. sec. 6.2.1), showing that the simple model is indeed too simple to reproduce realistic results, but proves to be useful to learn the fundamental concept.

4i.e. from ion to ﬁber

65

4. Single-atom–single-photon interaction

4.3. Quantum-mechanical formalism

In section 4.1 we introduced the spontaneous Raman scattering in single atoms and derived

a model for the wave packet of the emitted single photon based on three-level rate equations. As that approach only considered the population of the states, the quantum prop-

erties of the photons remained unknown. To gain insight into the quantum mechanical

phase involved in the process of single-photon scattering, here we formulate a quantum-

mechanical description for the absorption and emission of single photons by a single atom

[142].

The underlying motivation for the development of the quantum-mechanical description is

the prediction of the expected quantum state of an atom following the absorption or emis-

sion process of a single photon in the experimental realization of the quantum-interface

operations discussed in chapters 5 and 6.

For the formalism presented in this section, we assume the ion to start in a general su-
perposition between two initial states |i1 and |i2 , |ψi = α|i1 + β|i2 , with |α|2 + |β|2 = 1. Upon absorption of a single photon, the ion is transferred into an auxiliary excited state |e
(or a superposition of two excited states |e1 and |e2 ), from where it decays into a groundstate superposition α |g1 + β |g2 . Again the ﬁnal superposition is normalized5 by the condition |α |2 + |β |2 = 1.

For varying experimental conditions, like different start or end levels, the model is modiﬁed accordingly.

In an alternative form, the complex amplitudes α and β of the initial superposition state |ψi can be written in terms of the populations pi,1 and pi,2 and the (time-dependent) relative phase φi(t) between the states,

|ψi

=

√ pi,1

|i1

+ eiφi(t)√pi,2 |i2

.

(4.41)

Henceforth we assume absorption from and emission into a well-deﬁned spatial direction and effects of the ﬁnite solid angle due to light collection with the HALO are so far neglected.
To account for single-photon absorption, we extend the system under investigation and ﬁnd the joint atom-photon state

|ΨiAP = |ψi ⊗ |ψPabh. , with the polarization state |ψPabh. of the incoming photon, described by

(4.42)

|ψPabh.

= cos ϑ |+ (ph) + eiφPh sin ϑ |− (ph)

2

2

(4.43)

5The normalization assumes an ideal situation where no decay into levels not taken into account in the model
occurs. For the case when loss channels are considered, attenuation of the state populations is incorporated by reducing the factor accordingly, i.e. |α|2 + |β|2 < 1.

66

4.3. Quantum-mechanical formalism

with the photonic states |± (ph), corresponding to eˆ(±ph) from section 4.2.2, and the polar-
ization angle φPh. Following the treatment in [142], we model the absorption of a single photon utilizing the absorption operator6

∑ Aˆ = mi,me | Cmi,m(Pahb.),me me mi| m(Pahb.)| ,

(4.44)

where mi and me denote the magnetic quantum numbers of the initial and excited state and the photonic spin projection m(Pahb.) is determined by m(Pahb.) = me − mi = ±1 (depending on mi and me). The Cmi,m(Pahb.),me are the Clebsch-Gordan coefﬁcients for the transition |i, mi → |e, me .
In general, the absorbed photon can be off-resonant to the transition from mi to me by a
detuning δ, therefore eq. (4.44) has to be expanded by including a factor

cmi,me (δ) = a(δ) eiφδ(δ)

(4.45)

with the detuning-dependent real amplitude factor a(δ) and an additional phase term eiφδ(δ). In sum, the combined absorption operator becomes

∑ Aˆ = mi,me Cmi,m(Pahb.),me cmi,me (δ) |me mi| m(Pahb.)| .

(4.46)

For the sake of coherence of the theoretical description, it is more convenient to introduce a detuning ∆ from the "line center" between two manifolds, i.e. the transition frequency for a vanishing external magnetic ﬁeld. With that, the absorption operator becomes

∑ Aˆ = mi,me Cmi,m(Pahb.),me cmi,me (∆) |me mi| m(Pahb.)| .

(4.47)

In a similar way, the emission of a photon during decay from the excited-state superpo-
sition into the ground-state manifold is formulated. The emission operator describing the transition from |e to |g and the generation of a single photon is written as

∑ Eˆ

=

mg,me

C
me

,m(Pehm.)

,mg

|m(Pehm.)

|mg

me|

(4.48)

with the spin projection m(Pehm.) = mg − me of the emitted single photon. The effect of a photon absorption followed by emission on an initial joint atom-photon
state

|ΨiAP = |ψi ⊗ |ψPabh. = √pi,1 |mi,1 + eiφi(t)√pi,2 |mi,2

· cos ϑ |+ (ph),ab. + eiφPh sin ϑ |− (ph),ab.

2

2

(4.49)

6We assume the photon to be absorbed along the quantization axis, so that only the σ± transitions are addressed, i.e. |± (ph) directly correspond to the atomic σ± dipoles. For absorption under an arbitrary angle, the photon state (in the atomic reference frame) has to be modiﬁed accordingly, as discussed in section 4.2.2.

67

4. Single-atom–single-photon interaction

is then Eˆ Aˆ |ΨiAP

= Eˆ

∑ mi,me Cmi,m(Pahb.),me cmi,me (∆) |me mi| m(Pahb.)|

cos ϑ |+ (ph),ab. + eiφPh sin ϑ |− (ph),ab.

2

2

√pi,1 |mi,1

+ eiφi(t)√pi,2 |mi,2 · (4.50)

and likewise for the application of the emission operator. For a typical experimental scenario, most transitions do not exist or are not allowed, hence most CGC become zero, simplifying the situation signiﬁcantly, e.g. to the one depicted in ﬁg. 4.5.

m(e1)
|e
m(Pahb.)(1)

m(e2) mP(ahb.)(2)

|i

m(i1)

m(Pehm.)(1)

m(i2) m(Pehm.)(2)

|g

m(g1) m(g2)

Figure 4.5.: Example for a photon-absorption and subsequent emission process inspired by one of the schemes used in the experiment. The atom is initialized in a superposition in |i and transferred into an excited-state superposition via absorption of a single photon in the polarization state |ψPabh. . Note that there exist only two allowed excitation paths (but the sublevels in the respective mani-
folds may be non-degenerate). Subsequent decay to the ground-state manifold releases a second
single photon. The resulting atom-photon state is derived in the main text.

In that case, the resulting state after photon absorption becomes

∑ Aˆ |ΨiAP = C mi,me mi,m(Pahb.),me cmi,me (∆) |me mi| m(Pahb.)| √pi,1 |mi,1 + eiφi(t)√pi,2 |mi,2

·

cos ϑ |+ (ph),ab. + eiφPh sin ϑ |− (ph),ab.

2

2

=

Cmi,1 ,+1,mi,1 +1

cmi,1,mi,1+1(∆) √ pi,1

cos

ϑ 2

|e, mi,1

+

1

+

Cmi,2 ,−1,mi,2 −1

cmi,2 ,mi,2 −1 (∆)

√ pi,2

eiφi (t)

eiφPh

sin

ϑ 2

|e, mi,2 − 1

(4.51)

for m(Pahb.)(1) = +1 and m(Pahb.)(2) = −1. The subsequent decay on the channels |e, m(e1) →

68

4.4. Inﬂuence of the polarization directionality

|g, m(g1) = m(e1) + 1 and |e, m(e2) → |g, m(g2) = m(e2) − 1 creates the atom-photon state

∑ Eˆ Aˆ |ΨiAP

=

mg,me

C
me

,m(Pehm.)

,mg

|m(Pehm.)

|mg

me|Aˆ |ΨiAP

=

Cmi,1 +1,−1,mi,1 +2 Cmi,1 ,+1,mi,1 +1

cmi,1 ,mi,1 +1 (∆)

√ pi,1

cos

ϑ 2

|g,

mi,1

+

2

|−

(ph),em.

+

Cmi,2 −1,+1,mi,2 −2 Cmi,2 ,−1,mi,2 −1

cmi,2 ,mi,2 −1 (∆)

√ pi,2

eiφi (t)

eiφPh

sin

ϑ 2

|g, mi,2 − 2

|+

(ph),em.

,

(4.52)

where we assumed m(Pehm.)(1) = −1 and m(Pehm.)(2) = +1. For g, mi,1 + 2|g, mi,2 − 2 = 0 and photon collection along the quantization axis, eq. (4.52) describes an entangled atom-
photon state whose phase is determined by both, the initial atomic state and the polariza-
tion of the absorbed photon.

The formalism developed here will be adapted to problems treated in the later course of this work to predict the expected quantum state of an atom following the absorption or emission process of a single photon.

4.4. Inﬂuence of the polarization directionality

Entanglement and state transfer in the experiment is carried out by mapping atomic transi-
tions onto photonic polarizations. In section 4.3 we developed a formalism to describe the
generation of an entangled atom-photon state, where collection perfectly along the quanti-
zation axis was assumed. In a realistic implementation, the ﬁnite collection angle has to be
considered. Here we investigate the impact of the off-axis collection onto the mapping process. Ideally, decay on a σ± transition will be translated into right- and left-hand–circular
polarization. From section 4.2.2 we know that |σ± transforms into the polarization states

|σ± =

3 e√±iϕ 8π 2

cos θ |H (ph) ± i |V (ph)

.

(4.53)

With the deﬁnitions for right- and left-hand circular light,

|R (ph) = − √1 |H (ph) + i |V (ph) and |L (ph) = √1 |H (ph) − i |V (ph) ,

2

2

(4.54)

we derive the projections of the ideal onto the actual polarization of the collected photon:

R|σ+ = − =−

3 eiϕ ( 32π

H| − i

V|) (cos θ |H

+ i |V

)

3 32π

eiϕ

(cos θ

+

1)

(4.55)

69

4. Single-atom–single-photon interaction

and

L|σ− = =

3 e−iϕ ( 32π

H| + i

V|) (cos θ |H

− i |V

)

3 32π

e−iϕ

(cos θ + 1)

.

Likewise, we obtain the projections onto the unwanted polarizations:

(4.56)

L|σ+ = =

3 eiϕ ( 32π

H| + i

V|) (cos θ |H

+ i |V

)

3 32π

eiϕ

(cos θ

−

1)

(4.57)

and

R|σ− = − =−

3 e−iϕ ( 32π

H| − i

V|) (cos θ |H

− i |V

)

3 32π

e−iϕ

(cos θ

− 1)

.

With eqs. (4.57) and (4.58) we ﬁnd the probability for a false projection as

(4.58)

α=23.75◦ 2π

α=23.75◦ 2π

pf =

| R|σ− |2 sin θ dθ dϕ =

| L|σ+ |2 sin θ dθ dϕ

θ=0 ϕ=0

θ=0 ϕ=0

α=23.75◦ 2π

=3 32π

(cos θ − 1)2 sin θ dθ dϕ ≈ 0.0038% .

θ=0 ϕ=0

(4.59)

The result shows that the contribution of collection of wrong polarizations to the inﬁdelity of a quantum process is negligible compared to other experimental error sources.

To summarize, two main topics were discussed in this chapter. The ﬁrst part consisted of a derivation of the expected temporal shape of the single-photon wave-packet, based on three-level rate equations, for three excitation schemes that are used in the later course of the work: For the ﬁrst scheme, i.e. the initial preparation of the ion in D5/2, excitation to P3/2, and generation of a single 393 nm photon on the P3/2-to-S1/2 transition, we obtained a nearly Fourier-limited photon with a generati-
on efﬁciency close to 1, but at an unfavorable wavelength of 393 nm. The second scheme, where the ion is initially prepared in S1/2, excited to P3/2, followed by the generation of a single 854 nm photon on the P3/2-to-D5/2 transition, exhibits a photon wavelength in the infra-red regime, more favorable for long-range transmission, and generation efﬁciency close to 1, but the generated photon is not Fourier-limited due to decay

70

4.4. Inﬂuence of the polarization directionality back to the ground state S1/2. The initial preparation of the ion in D5/2, excitation to P3/2, and generation of a single 854 nm photon on the P3/2-to-D5/2 transition represents the third scheme. Here the photon is in the infra-red regime at 854 nm and Fourier-limited, but at the cost of a lowered generation efﬁciency in the order of 4%.
The second part of this chapter treats the spatial characteristics of the atomic dipole emission (sec. 4.2.2) and its inﬂuence on the photon-collection efﬁciency (sections 4.2.3 to 4.2.5) and the process ﬁdelity (sections 4.3 and 4.4). For free-space or multi-mode collection along the quantization axis, as utilized in the experiment, we ﬁnd collection efﬁciencies of approximately 6.1% for photons emitted on atomic σ± (∆m = ±1) transitions and about 0.5% for (in our case unwanted) photons emitted o-
n a π (∆m = 0) transition. It is then shown that photon coupling into a single-mode ﬁber enables full suppression of π-photon collection while the coupling efﬁciency for photons from the ∆m = ±1 is only reduced by a factor of 2.5 to 2.43%. This provides signiﬁcant potential for the improvement of the photon-state purity as long as the detection of photons with the wrong polarization (and not detector dark counts) represents the limiting factor for the purity in the experiment.
The results derived here are used in chapters 5 and 6 to estimate the expected state ﬁdelity and the success rate for the implementation of the quantum-interface protocols discussed there.
71

5. Programmable atom-photon interface
The distribution of quantum information within a quantum network requires an interface to connect stationary qubits that serve for storing and processing the quantum information to photonic ﬂying qubits that transfer information between the nodes. These interfaces have to fulﬁll three requisites to represent a fully operational bidirectional connection between node and communication channels:
• Quantum-state transfer from the memory onto the photon,
• Re-conversion from the quantum information stored in the photonic degrees of freedom into information stored in the memory, and
• Generation of entanglement between the memory and the photon.
In single-atom–based systems, several approaches have been used to address these issues, including deep parabolic mirrors [147, 148], optical resonators [149, 150], and highnumerical-aperture objectives [151, 152]. We deploy the latter for the implementation of our interface.
In the following, the realization of a comprehensive programmable atom-photon quantum interface [82], based on a single trapped ion and high-numerical-aperture optics, is presented. Depending on its mode of operation, the interface allows for photon-to-atom quantum-state transfer, atom-to-photon state transfer, and the generation of atom-photon entanglement.
The measurements were conducted primarily in collaboration with Christoph Kurz, who also wrote the evaluation, and are published in [153] and [82], although a lot of group members contributed to the experiments, ranging from discussions during the conceptional phase to building the basic experimental setup. A comprehensive re-evaluation of the results was performed by Philipp Müller and will be presented in his thesis [81]. In this thesis, a complete summary of the full interface operation, togeth-
er with a theoretical description of the protocol, is given.
5.1. Atom-photon interface
The basis for the atom-photon quantum interface is the development of our versatile interface protocol, employing a coherent superposition in the metastable D5/2 manifold, followed by single-photon absorption and emission. The protocol was initially implemented for high-ﬁdelity heralded transfer of a photonic polarization qubit onto the qubit state of
73

5. Programmable atom-photon interface

a single ion [153] and has later been extended to a programmable, bidirectional interface between a single ion and single photons in order to fulﬁll the aforementioned conditions.
For each operation mode – atom-to-photon state transfer, photon-to-atom state transfer, and atom-photon entanglement – the ion is initially prepared in a superposition of the two Zeeman sublevels | ± 5/2 (or | ± 3/2 ) in D5/2. The state initialization is carried out by optical pumping into a pure state, typically into the | − 1/2 sublevel of the ground state, followed by a radio-frequency pulse, resonant on the transition frequency between both ground-state sublevels, of adjustable phase and pulse-
 area ((1) in ﬁg. 5.1 (a)). The phase of the radio frequency is synchronized with the clock of the control electronics. Thus, the atomic superposition is also in phase with the RF drive (as long as the ion stays in the ground-state superposition and the RF drive is resonant on the ground-state transition). Subsequent application of two resonant π pulses on the narrow-band quadrupole transition at 729 nm coherently transfers the state into D5/2 ((2) and (3) in ﬁg. 5.1 (a)). The initial phase of the-
 D5/2 superposition depends on the phase of the RF drive and the phase difference between the two 729 nm pulses and is controllable via these magnitudes. Depending on the desired application (atom-to-photon state transfer, photon-to-atom state transfer, or atom-photon entanglement), the qubit is either encoded into the atomic state or we start with a known, ﬁxed state, as it will be explained in more detail later.
Once the atom state is transferred to D5/2, the ion is able to absorb photons resonant on the D5/2 ↔ P3/2 transition at 854 nm (see ﬁg. 5.1 (b)).

P3/2 D5/2
S1/2

−

3 2

+

3 2

2

1

3

−

1 2

+

1 2

−

3 2

σ+ 854 nm

−

5 2

σ−

393 nm

+

3 2

σ−

σ+

+

5 2

P3/2 D5/2

−

1 2

+

1 2

S1/2

(a)

(b)

Figure 5.1.: (a) Scheme for the atomic state preparation. The details are explained in the main text.
(b) Scheme for the interface protocol. Initially, the ion is prepared in a general superposition in
the two ±5/2 Zeeman sublevels of the metastable D5/2 state, followed by absorption of a resonant photon at 854 nm in the polarization state |ψ854 . Decay from the excited P3/2 state transfers the ion into the ground-state qubit |ψS in S1/2 and leads to the emission of a single blue photon at 393 nm of polarization |ψ393 . The mode of operation decides which states are ﬁxed, projected, or used as
carrier of quantum information.

74

5.1. Atom-photon interface

Following the formalism from section 4.3, an absorption event is described by applying the absorption operator Aˆ onto the initial atomic statestate 1 (or, to be more precise, onto
the combined initial atom-photon state)

|ψD

=

cos

ϑD 2

|D,

−5/2

+ sin ϑD eiϕD |D, +5/2 2

.

(5.1)

With the polarization state of the absorbed red photon,

|ψ854

= cos ϑ854 |854,R + sin ϑ854 eiϕ854 |854,L

2

2

= cos ϑ854 |854,+ + sin ϑ854 eiϕ854 |854,-

2

2

(5.2)

in the left- and right-hand–circular polarization basis and absorption along the quantization axis2, Aˆ becomes

Aˆ = |P, +3/2 D, +5/2| 854,L| + |P, −3/2 D, −5/2| 854,R| ,

(5.3)

and hence

Aˆ |ψD |ψ854

= cos ϑ854 cos ϑD |P, −3/2

2

2

+ sin ϑ854 sin ϑD eiϕD eiϕ854 |P, −3/2

2

2

.

(5.4)

The detuning-dependent factor in the absorption operator has been neglected as the pho-
ton frequency is constant and equally detuned from the both atomic transitions, such that c(∆) just gives a constant known phase offset. A detailed analysis of the photon-frequency
dependency of the ﬁnal atomic state is found in [141]. Decay on the σ± transitions into a superposition into S1/2 triggers the emission of a sin-
gle photon at 393 nm. The polarization of the blue photon is connected to the transition on
which it was emitted, thus the photon state is correlated to the state of the P3/2 superposition or, eventually, to the ﬁnal atomic ground-state qubit. In a mathematical sense, this process is described by the emission operator Eˆ, which is in that case represented by

Eˆ = |393,L |S, −1/2 P, −3/2| + |393,R |S, +1/2 P, +3/2| .

(5.5)

for emission along the quantization axis3, where the polarizations are deﬁned along the
1In the situation when the ion is initially prepared in a superposition of | ± 3/2 instead of | ± 5/2 , the according D5/2 sub-states have to be substituted.
2For absorptions from other directions, the operator has to be modiﬁed accordingly. For instance, exciting the D5/2 ↔ P3/2 transition under 90◦ with respect to the quantization axis leads to an equivalent expression as (5.3) for vertically polarized photons, while the projection of the input photons onto horizontal polarization couples to the π transition which does not exist in this scheme.
3We have seen in section 4.4 that the effect of the ﬁnite collection angle due to the HALO onto the resulting polarization of the collected photons is negligible, thus it is legitimate to assume collection solely on the quantization axis for the moment.

75

5. Programmable atom-photon interface

direction of propagation. With (5.5), we obtain the resulting joint atom-photon state

|ψﬁnal = Eˆ Aˆ |ψD |ψ854

=

cos

ϑ854 2

cos ϑD |393,L 2

|S, −1/2

+ sin

ϑ854 2

sin

ϑD 2

eiϕD eiϕ854 |393,R

|S, +1/2

.

(5.6)

It is evident that the amplitudes and the phase, i.e. ϑD and ϕD, of the initial atomic state as well as the polarization state of the absorbed photon, i.e. ϑ854 and ϕ854, enter into the ﬁnal atom-photon state. This state forms the basis for the protocol, as we will see in the following sections.

For certain operational modes it is mandatory to project the atomic state via ﬂuorescencebased state detection onto a basis that leaves us ignorant of the qubit states of the remainder of the quantum system, i.e. the polarization state of the blue photon, or vice versa. Very generally, even if no atomic projection is necessary, atomic state analysis has to be conducted in order to evaluate reliability or ﬁdelity of the quantum process or the generated entangled state.
The process of atomic state analysis is depicted in ﬁg. 5.2. After the qubit superposition

a)

P3/2

b)

D5/2 S1/2

729 nm 2

1

π 2

,

φ

Figure 5.2.: Atomic state analysis for state projection and state tomography. An optional basis-
rotation pulse, resonant on the transition between the ground-state sublevels, transforms the superposition phase into populations of | ± 1/2 for projective measurements in the σx and σy bases. A 729 nm π pulse transfers the population in | + 1/2 into the D5/2 manifold, followed by ﬂuorescencebased state discrimination. For a full tomography, the atom is measured in the three different σx, σy, and σz bases.

is

formed

in

the

ground-state

manifold,

an

optional

π 2

radio-frequency

pulse

with

phase

φ is applied to facilitate measurements in the σx and σy superposition bases. This pulse

translates the atomic superposition phase into populations in |S1/2, m = ±1/2 (see section

3.3.1), depending on the relative phase between RF and atomic superposition. State read-

out is then conducted by shelving the population in one of the two substates, typically

76

5.2. Photon-to-atom state transfer
| + 1/2 , into the meta-stable D5/2 state and subsequently performing the state discrimination by ﬂuorescence detection, as described in section 3.4. Full atomic state tomography is carried out by measuring in the three different σx, σy, and σz bases, where the RF pulse is switched off for the σz measurement to solely obtain the state occupations. The reconstructed atomic state is then deduced from the outcome of these measurements (explained in more detail in A.2).
5.2. Photon-to-atom state transfer
The ﬁrst operation under investigation is the transfer of a photonic qubit, imprinted into the polarization state of the photon, onto the stationary node of the quantum network, i.e. onto the state of the single ion. The work is presented in detail in Christoph Kurz’ dissertation thesis [79] and [153], but presented brieﬂy here for reasons of completeness. Additionally, the ideas developed for the evaluation of the state-transfer protocol are fundamental for the understanding of the evaluation pro-
cess for other experiments.
To prove the viability of our interface, we used laser photons as carriers for the polarization state to be transferred [153]. Photon-state transfer with heralded single photons, originating from a photon-pair source based on spontaneous parametric down conversion (SPDC) are presented in [154], [155], and [124].
In the present experiment, a laser beam along the quantization axis provides polarized photons at 854 nm. In fact, the quantization axis was rotated by 90◦ with respect to the HALO axis for the present demonstration, as shown in ﬁg. 5.3. This conﬁguration poses no fundamental difference to the usual alignment, where the quantization axis points along the HALO axis, as we could as well have oriented the B ﬁeld along the HALOs and sent the laser beam through the same, but that beam was not set up at-
 the time the experiment was conducted.
A PBS and two waveplates are inserted into the 854 nm beam to adjust the photonic polarization state. The experimental sequence starts, as described before, with optical pumping of the ion into the |S1/2, m = −1/2 Zeeman sublevel, followed by coherent state preparation in a (ﬁxed) superposition in D5/2 (see section 5.1). Once the atom is initialized, it is exposed to photons resonant on the D5/2 ↔ P3/2 transition, stemming from the laser beam mentioned before. Upon absorption of a photon, the ion -
is excited into P3/2, from where it rapidly decays to the ground state via the emission of a single photon at 393 nm, leaving the atom-photon system in an entangled spin-polarization state. To map the state of the absorbed photon onto the atomic state, the polarization state of the blue photon has to be projected out. The photonic state projection is realized by an adjustable optical polarizer that, conditioned on detection, projects the 393 nm photon onto a linear polarization, i.e. a superpositi-
on of right- and left-hand circular polarization, such that no information on the atomic state is gained due to the photon detection. In addition, the photon detection serves as a herald for a successful transfer event. The latter allows for high-ﬁdelity gate operation even for the low photon-detection efﬁciencies, typically in the order of 1%, which would
77

5. Programmable atom-photon interface
Figure 5.3.: Experimental setup for the photon-to-atom state transfer. The quantization axis, given by the B ﬁeld, is oriented perpendicular to the HALOs to be parallel to the propagation direction of the 854 nm laser photons. A polarizing beam splitter (PBS) and two waveplates (λ/2 and λ/4) are used to adjust the polarization of the 854 nm beam for state transfer. State projection of the scattered 393 nm photons is carried out by a polarizer before they are detected by a photo-multiplier tube (PM-
T). (taken from [79]).
otherwise (i.e. without heralding) lead to nearly complete loss of information and hence to a nearly entirely mixed ﬁnal state. The protocol used here is a slight variation of the one presented in ﬁg. 5.1 as the atomic qubit is imprinted in a superposition in |D5/2, ±3/2 to increase the coherence time, but the operational principle stays the same.
The transfer scheme is again summarized in ﬁg. 5.4. The heralding property of the detection of the blue photon serves a second purpose that has not been mentioned so far. In eq. 5.6 we have neglected the time dependency due to the Larmor precession. In fact, the atomic-phase term eiϕD consists of a constant (and experimentally controllable) part eiϕD,0 and a temporally oscillating phase contribution eiϕL caused by the Zeeman splitting between both D5/2 sub-levels. Since the experimental reference -
frame oscillates with the radio frequency resonant on the ground-state transition, the atom acquires a Larmor phase (relative to the experimental reference) until it returns to the ground-state superposition due to absorption of a 854 nm photon, followed by the emission of a 393 nm photon. Hence, the additional Larmor phase depends on the moment of the photon emission. Without heralding by detection of the 393 nm photon, we are entirely ignorant of the instant when the ion is transferred into the -
ground-state superposition, leading to incoherent mixing of the Larmor phases and thus to a statistical mixture for the ﬁnal atomic state. Therefore, it is a vital requirement to precisely know when the transfer happened, so we can either correct for the acquired Larmor phase by an additional phase-rotating pulse, or take the additional phase into account for further operations. In this experiment, we pursue the second approach. Thus, the phase of the ﬁnal superposi-
78

5.2. Photon-to-atom state transfer

P3/2 D5/2
S1/2

−

1 2

σ+

−

3 2

π

+

1 2

σ−|ψ854 nm , input qubit

+

3 2

π

|ψD , ﬁxed

|ψ393 nm , projected

|ψS , mapped qubit

−

1 2

+

1 2

Figure 5.4.: Schematic protocol for the photon-to-atom state transfer. The qubit is encoded in the polarization of the red photons at 854 nm. The ion starts in a ﬁxed superposition in |D5/2, ±3/2 , enabling the absorption at the D5/2 ↔ P3/2 transition. Upon absorption, the ion releases a photon at 393 nm which transfers the ion into the ground-state superposition. Projection of the blue photon
onto horizontal polarization maps the photonic input state onto the spin qubit in the ground state.

tion state oscillates, depending on the detection time of the blue photon which projects the atom into the ground state. For a ﬁxed angle of the polarizer, this results in an oscillatory pattern in the arrival-time distribution (ATD) of the photon when the polarization is projected onto H (atomic π transitions) and detection events are conditioned on the projection of the ion onto two orthogonal superposition bases, i.e. on a bright or dark ﬂuorescence detection after RF and 729 nm pulse. A repres-
entative photon wave form is shown in ﬁg. 5.5 [153]. As a side-effect, the sharp temporal projection of the photon arrival time erases the spectral distinguishability of the photons scattered on the different decay channels.
Knowing the oscillation period, given by the splitting of the Zeeman states, allows us to merge the detection events into bins of equal phase and calculate the state probabilities (i.e. the probabilities to end up in ±1/2 following the basis-rotation pulse) to obtain a histogram as shown in ﬁg. 5.6. To reduce the effect of erroneous multi-photon absorptions in the case of laser excitation and improve the signal-to-background ratio while simultaneously maintaining reasonable success probabilities, -
we only take the ﬁrst 450 ns of the photon wave packet into consideration.
From the visibility V of the oscillating fringes shown in ﬁg. 5.6 we deduce the projection of the resulting atomic state after the transfer process onto a perfectly symmetric and coherent superposition of the two energy Eigenstates | ± 1/2 . The phase of the atomic state after the transfer is directly reconstructed from the phase of the oscillation fringe. For linear input polarizations, we expect an ideal mapping onto the symmetric atomic superpositions |ψS = | − 1/2 + eiφ| + 1/2 . From that we ﬁ-
nally extract the overlap ﬁdelity F of

79

5. Programmable atom-photon interface

Figure 5.5.: Arrival-time distribution of the emitted 393 nm photon, conditioned on the outcome of the atomic state projection onto two orthogonal superposition bases for linearly polarized 854 nm photons. The prominent oscillation is used to reconstruct the projection of the resulting atomic output state onto the equatorial plane of the Bloch sphere, as explained in the main text (from [153]).

Figure 5.6.: Probability to ﬁnd the ion in | + 1/2 after the basis-rotation RF pulse as a function of the phase equivalent to the arrival time of the heralding photon for different input polarizations. The solid lines represent sinusoidal ﬁts (from [153]).

the resulting states with respect to the atomic target states,

F

=

1 2

(V

+

1)

.

(5.7)

Since we consider deviations between the measured and expected phase values not to result from the mapping process itself, only the fringe visibility enters into the ﬁdelity of the atomic state [79]. For the four linear photonic-qubit polarizations H, V, D, and A, we achieve ﬁdelities of 96.4(1)%, 96.7(1)%, 97.0(2)% and 96.9(1)%, respectively.
For measurements in the σz basis, the RF pulse is simply skipped and the projection onto the energy eigenstates is derived in the same way as explained in section 3.4. A typical arrival-time distribution, analyzed in the σz basis, for right-hand circularly polarized

80

5.2. Photon-to-atom state transfer 854 nm photons is shown in ﬁg. 5.7. The full atomic state for a given photonic input state

Figure 5.7.: Projection onto | + 1/2 (blue) and | − 1/2 (green) for right-hand–circular input polarization without basis-rotation pulse (from [153]).

is reconstructed from the combination of both measurements (see [156] and section A.2).

Including the measurements for the circularly polarized input states, whose ﬁdelities are

analogously to (5.7) given by the probabilities p±1/2 to ﬁnd the ion in the energy eigenstates

| ± 1/2 , as

F±1/2 = p±1/2 ,

(5.8)

we obtain an average state-transfer ﬁdelity F¯ of 96.9(1)%.

For the characterization of the transfer process, the mapped atomic state is evaluated

for four different photonic input polarizations (H, D, R, and L) and the quantum-process

matrix χ is derived from the results. χ describes the modiﬁcation of an initial quantum state due to a quantum process and is deﬁned by the completely positive map ε(ρ) that fully characterizes the transformation of the input state ρ into the output state ε(ρ) after

undergoing the quantum process. ε itself can be re-written in terms of χ as

4
ε(ρ) = ∑ χi,j σi ρ σj i,j=1

(5.9)

with the Pauli matrices σi and σ1 = 1. From the data of the four input polarizations H, D, R,

and L, the quantum-process matrix shown in ﬁg. 5.8 is computed following the procedure

described in [157].

Ideally, a quantum process does not alter the state of a system, therefore we deﬁne the

identity contribution of the process-tomography matrix, χ11, as the quantum-process ﬁ-

delity. From the process matrix, we ﬁnd a quantum-process ﬁdelity of 95.0(2)%.

Note that the average state ﬁdelity and the process ﬁdelity are generally linked by the

relation [81]

F¯

=

2 χ11 + 3

1

.

(5.10)

81

5. Programmable atom-photon interface
Figure 5.8.: Moduli of the entries of the quantum process-tomography matrix for the photon-toatom state transfer. The identity contribution, χ11, is deﬁned as the quantum-process ﬁdelity (adopted from [79]).
The discrepancy between the measured values for F¯ and χ11 derives from the fact that, in the present evaluation, the average state ﬁdelity was evaluated from all six input states, while only four input states entered into the calculation for the process ﬁdelity.
In analogy to the detailed treatment given in chapter 6, decay from P3/2 back to D5/2, releasing an undetected 854 nm photon, followed by re-excitation results in an incoherent contribution to the ﬁnal S1/2 qubit. Neglecting decay to D3/2, this effect accounts for a reduction in the process ﬁdelity of 1.4% for a 450 ns time window and the given photonwave-packet length (see [153] and [79]). In addition, detector dark counts that mimic the detection of a blue photon leave us ignorant of the actual -
time, direction, and polarization of the emitted photon, dragging the transferred state towards a statistical mixture and thus further degrade the transfer ﬁdelity. Overall, another 1.7% decrease of the process ﬁdelity is attributed to dark-count events (see [153, 79]). The remaining reduction of the process ﬁdelity is attributed to decoherence due to magneticﬁeld noise as discussed in 3.6. Brieﬂy estimated, the expected transfer-ﬁdelity reduction in the 450 ns time window and a state-preparation -
time of about 20 µs for the observed atomic-qubit coherence time of about 670 µs (c.f. [79], section 4.1.9, keeping in mind that the sensitivity against magnetic-ﬁeld noise is reduced to 60% for the scheme treated here and assuming a coherence time of 400 µs for the σ scheme presented in [79]) is 1.5%. From eq. (5.10) and assuming linearity4, this value corresponds to a process-ﬁdelity reduction of 2.2%. Further error contributions, like the decay to D3/2 during the excitation process or the
4Which is justiﬁed for the small values treated here.
82

5.3. Atom-to-photon state transfer

erroneous detection of light scattered on the σ transitions that passes the polarizer due to the ﬁnite collection angle of the HALO and the spatial emission characteristics of an optical dipole, have no signiﬁcant inﬂuence on the state ﬁdelity and are neglected. Linearly adding up the error contributions, we obtain an overall process-ﬁdelity reduction of 5.3%, which is in good agreement with the experimental results.

5.3. Atom-to-photon state transfer

Bidirectional operation of the quantum interface requires the ability to release a photon that carries the quantum information formerly encoded in the atom for storage and processing. Again we employ the protocol presented in 5.1. The qubit, initially stored in the ground-state manifold, is coherently transferred into a superposition in |D5/2, ±5/2 by two resonant laser pulses at 729 nm. A laser at 854 nm, driving the transition from D5/2 to P3/2, of ﬁxed linear polarization and incident under 90◦-
 to the quantization axis, triggers the emission of a single photon at 393 nm which is at ﬁrst entangled with the ion. Projection of the atomic state onto a ﬁxed symmetric superposition of both Zeeman sublevels | ± 1/2 maps the atomic state onto the polarization state of the scattered 393 nm Raman photon. Fig. 5.9 shows the experimental setup for the atom-to-photon state transfer.

HALO

Fiber to PMT 393 nm

HALO

Polarizer Wave plates
RF coil

Fiber to PMT 397 nm
B 729 nm

854 nm

Figure 5.9.: Experimental setup for the atom-to-photon state transfer. The quantization axis, given by the B ﬁeld, is oriented along the HALO axis. Upon absorption of a vertically polarized laser photon at 854 nm from 90◦ to the quantization axis, the ion is excited on the D5/2 ↔ P3/2 transition and subsequently releases a single blue photon at 393 nm. For the characterization of the state transfer, two waveplates (λ/2 and λ/4) and a polarizer facilitate photonic-polarization projection before pho-
ton detection on the PMT (from [82]).

The general principle is depicted again in ﬁg. 5.10.
The characterization of the state-transfer process is performed by preparing the atom in both energy eigenstates |D5/2, ±5/2 and in a superposition of variable phase and mea-

83

5. Programmable atom-photon interface

P3/2 D5/2
S1/2

−

3 2

σ+

−

3 2

σ−

+

3 2

σ−|ψ854 nm , ﬁxed

|ψD , input qubit

+

3 2

σ+ |ψ393 nm , mapped qubit

|ψS , projected

−

1 2

+

1 2

Figure 5.10.: The atomic qubit, initially stored in S1/2, is coherently transferred into a superposition in D5/2, |ψD = α | − 5/2 + β | + 5/2 (full green circles). Absorption of a photon at 854 nm of ﬁxed linear polarization, originating from a laser beam from 90◦ with respect to the quantization axis, triggers the emission of a single photon at 393 nm. After projection of the atomic state onto a symmetric superposition basis with the help of a basis-rotation RF pulse and ﬂuorescence-based state d-
etection, the emitted photon carries the atomic qubit state (together with a known additional phase).
suring the polarization state of the Raman photon. The overall atomic phase in |D5/2 before photon emission is composed of a ﬁxed and experimenter-deﬁned contribution that originates from the state preparation and an temporally oscillating part due to the energy splitting of both |D5/2 sublevels. Consequently, the phase of the atomic superposition and hence the phase of the entangled atom-photon state after emission (see eq. (5.6)) depends on the duration between preparation and return into the gr-
ound state, i.e. the time between state transfer to D5/2 and detection of the blue photon5, and also a known and ﬁxed contribution from the polarization of the absorbed 854 nm photon. Projecting the ion onto a symmetric superposition state in S1/2 by applying a basis-rotation RF pulse of known phase and a shelving pulse at 729 nm as before thus maps the atomic qubit state in the D5/2 superposition onto the polarization state of the blue photon. Depending on the result of the projection measurement-
, i.e. which of the two orthogonal ground-state superpositions the ion has been projected on, an additional but known phase of π is imprinted on the mapped photonic state (which becomes evident when we re-write the atomic contribution in eq. (5.6) in the superposition basis and apply a projection onto either of the two possible superposition states |S, −1/2 ± eiϕD |S, +1/2 , while ϑ854 and ϕ854 are kept constant).
For atomic qubits purely encoded into one of the two energy eigenstates | ± 5/2 , it is obvious that the mapped photonic qubit also exhibits purely circular polarization as
5Since the radio frequency, being resonant on the transition between both ground-state sublevels, serves as reference oscillator, the atom effectively does not acquire a phase while residing in the ground-state superposition.

84

5.3. Atom-to-photon state transfer

there are no other decay channels to S1/2. This result becomes apparent when writing

down the effect of the absorption and emission operator from section 5.1 onto the initial

state (c.f. eq. (5.6)) and projecting the 393 nm polarization onto |ψ393

=

cos

ϑ393 2

|393,L

+

sin

ϑ393 2

eiϕ393 |393,R

:

ψ393|Eˆ Aˆ |D, +5/2 |ψ854

= sin ϑ393 sin ϑ854 eiϕ393 |S, +1/2

2

2

(5.11)

and

ψ393|Eˆ Aˆ |D, −5/2 |ψ854

=

cos

ϑ393 2

cos

ϑ854 2

|S,

−1/2

,

(5.12)

where

the

factors

cos

ϑ854 2

and

sin

ϑ854 2

reﬂect

the

relative

absorption

probabilities

in

depen-

dence of the polarization of the 854 nm photon.

If, however, the atom starts in a superposition between | ± 5/2 , the 393 nm polarization

should be in a superposition of R and L after atomic state projection according to (5.6).

The polarization angle of the photonic superposition is determined by the atomic phase

upon photon absorption. This should manifest as a detection-time–dependent rotation of

the blue polarization or an oscillation when the photon is projected onto a linear polar-

ization. In the theoretical description, the respective (normalized) expression according to

(5.6) becomes

1 2

393,L| +

393,R|

Eˆ Aˆ |ψD |ψ854

=

cos

ϑD 2

|S,

−1/2

+ sin ϑD eiϕD eiϕ854 |S, +1/2 2

(5.13)

with the temporally oscillating phase eiϕD

and

cos

ϑD 2

,

sin

ϑD 2

=

0 for projection onto the

linear polarizaztion

1 2

|393,L

+ |393,R

(and analogously for he other linear polariza-

tions). In the experiment, we see exactly that oscillating behavior, as shown in ﬁg. 5.11.

In analogy to section 5.2, we calculate the reduced phase for the oscillation inherent in the

photon from the Larmor period of about 64 ns to deduce the phase histogram presented

in ﬁg. 5.12. As a trade-off between state ﬁdelity and detection efﬁciency, we choose a time

window of 450 ns of the photonic wave-packet (gray shade in ﬁg. 5.11).

Amplitude and phase of the oscillations for the linear bases reveal the projection of the

photonic state onto the plane spanned by the linear polarizations in the Poincaré sphere. As

expected, the oscillation for projections onto the circular polarizations is nearly completely

suppressed, which is seen on the resulting atom-photon state after absorption of the red

and subsequent emission of the 393 nm photon, followed by projection onto the circular

polarizations |393,R/L :

393,R|Eˆ Aˆ |ψD |ψ854

= sin ϑD sin ϑ854 eiϕD |S, +1/2

2

2

(5.14)

and

393,L|Eˆ Aˆ |ψD |ψ854

= cos ϑD cos ϑ854 |S, −1/2

2

2

.

(5.15)

85

5. Programmable atom-photon interface

Figure 5.11.: Photon arrival-time histogram for projection of the photon onto the polarization bases H (blue) and V (green). The events are conditioned on the atomic-state projection onto the | + 1/2 state following the RF basis-rotation pulse. The red curve represents the sum of both histograms and corresponds to the unconditioned arrival-time distribution. The gray-shaded area indicates the time windows of 450 ns used in the evaluation (from [82]).

Figure 5.12.: Poincaré components of the resulting photon state vs. reduced Larmor phase for the atom prepared in a linear superposition in D5/2, extracted from measurements shown in ﬁg. 5.11. The ellipticity of the polarization (R/L component) is close to zero, with a slightly visible oscillation originating from an imperfect calibration of the wave plates. The solid lines are sinusoidal ﬁts (from [82]).

From the measurements in the circular and linear bases we perform a full state tomogra-

phy to reconstruct the mapped photonic states for the different atomic input qubit states (in

both energy eigenstates and the symmetric superpositions thereof with the starting phases

ϕD

=

0,

π 2

,

π,

3 2

π)

to

obtain

the

characterization

of

the

quantum

process

in

the

same

manner

as described in 5.2.

The quantum process-tomography matrix, calculated as described in [153], (ﬁg. 5.13) exhibits a χ11 component, identiﬁed as the process ﬁdelity, of 90(1)%. Averaged over all six input states, the average state ﬁdelity of the transferred state is 92.4(3)%, which, within the error, agrees to the expected value according to eq. (5.10).

86

5.3. Atom-to-photon state transfer

1.0

|χnm|

0.5

0.0
1 σx σy σz

1 σx σy σz

Figure 5.13.: Moduli of the quantum-process matrix characterizing the state mapping. The quantum-process tomography is depicted in the main text (section 5.2) and explained in detail in the appendix. The identity contribution χ11, deﬁned as the process ﬁdelity, is found to be 90(1)% in the present experiment (from [82]).

The main contributions to the inﬁdelity are discussed in the following:
At the time the experiment was conducted, the feed-forward compensation of magneticﬁeld ﬂuctuations was not yet installed, magnetic-ﬁeld noise during the storage time of the atomic state of about 30µs has a non-negligible inﬂuence on the state-transfer ﬁdelity. Further sources of inﬁdelity are the decay from P3/2 back to D5/2, which contributes 1.4%, and detector dark counts that account for additional 1.7% for the 450 ns time window. The remaining inﬁdelity is attributed to imperfect calibration -
of the 393 nm waveplates. It has been shown in section 4.4 that the inﬂuence of collection of the wrong polarization is negligible. Collection of π light is irrelevant as a π transition simply does not appear in this scheme.
One way to improve the quality of the state transfer is the implementation of a magneticﬁeld stabilization, which has been realized in the meantime. The inﬂuence of decay back to D5/2 can be reduced by decreasing the photon time window, which however reduces the success probability at the same time.
More recently, we developed a protocol for atom-to-photon state transfer onto a photon at 854 nm, presented in the next chapter, that allows for conversion of the photonic qubit into the low-loss telecom regime at 1310 nm and inherently exhibits a higher transferredstate ﬁdelity (see section 6.5).
87

5. Programmable atom-photon interface

5.4. Atom-photon entanglement at 393 nm

We have demonstrated the transfer of quantum information from a photon onto a sta-

tionary trapped ion on the one hand and the reverse operation, the atom-to-photon state

transfer, on the other hand. What remains to show is the entanglement between atom and

photon, like it is required as a resource for certain schemes for entanglement distribution

within a quantum network [158].

Our protocol is intrinsically capable of providing atom-photon entanglement. In fact, in

the atom-photon state transfer shown in section 5.3, we already generated atom-photon

entanglement, where we had to project the atomic state in order to map the state onto the

photon.

In this section we investigate the resulting entangled state when neither the atom, nor the

photon is projected. It is not surprising that the experimental setup for the entanglement

operation resembles the one shown in ﬁg. 5.9, although it has to be mentioned that the

waveplates for the polarization analysis of the 393 nm photons were replaced in between.

Actually, in a chronological sense, the entanglement measurement was performed earlier

and the waveplates were replaced for the state-transfer measurement by a set of more

reliable ones after we found out that they acted as a source of inﬁdelity.

We begin by preparing a ﬁxed symmetric superposition in the | ± 5/2 sublevels in D5/2

in the usual manner, i.e. by optically pumping the ion into |S1/2, −1/2 , generating the

coherent

superposition

in

S1/2

by

a

π 2

RF

pulse

and

subsequently

coherently

transferring

the superposition into D5/2 by two consecutive pulses at 729 nm.

After the preparation, a vertically polarized 854 nm laser pulse initiates the emission of a

single 393 nm photon, whose polarization is entangled with the spin state of the atom after

emission, i.e. in the ground-state manifold (see ﬁg. 5.14).

The viability of the entanglement operation is veriﬁed by standard two-qubit tomogra-

phy, following the instruction in [156], through correlation measurements in the product

bases of photonic and atomic qubits. The tomography is explained again in detail in ap-

pendix A.3, but shall be brieﬂy recapitulated here.

Generally, a two-qubit state, described by the density matrix

∑ ρˆ

=

1 4

3
ri1
i1 ,i2 =1

ri2

σˆ i1

⊗ σˆi2

,

ri1, ri2 ∈ R ,

(5.16)

where σˆik denotes the i-th Pauli matrix for the k-th qubit, and ⊗ denotes the tensor product, can be reconstructed by 16 measurements µˆi ⊗ µˆ j (i, j = 0, 1, 2, 3). A typical set of

measurement bases is given in A.3.

Relabeling the 16 measurement bases σˆi ⊗ σˆ j = Γˆ ν, ν = 1, ..., 16 according to [156], appendix A, we ﬁnd the matrices Mˆ ν deﬁned in [156], appendix B, and derive the linearly

reconstructed density matrix

= ρˆ

/ 16
∑

Mˆ νnν

ν=1

4
∑ nν
ν=1

(5.17)

88

5.4. Atom-photon entanglement at 393 nm

P3/2 D5/2
S1/2

−

3 2

σ+

−

3 2

σ−

+

3 2

σ−|ψ854 nm , ﬁxed

|ψD , ﬁxed

+

3 2

σ+ |ψ393 nm , entangled

|ψS , entangled

−

1 2

+

1 2

Figure 5.14.: Protocol for the generation of atom-photon entanglement as part of the programmable
atom-photon quantum interface. Both input states, the atomic and photonic, are ﬁxed in a symmetric superposition of |D5/2, ±5/2 and R/L, respectively. Absorption of the 854 nm and subsequent emission of a 393 nm photon transfers the ion into the ground-state manifold, whose spin state is
entangled with the polarization state of the emitted photon.

from the experimentally obtained coincidence counts nν. ν = 1 to ν = 4 correspond to the coincidence measurements in the bases HH|ρˆ|HH , HV|ρˆ|HV , VV|ρˆ|VV , and V H|ρˆ|V H 6.

We employ a maximum-likelihood approach (described in A.4) to reconstruct the physical quantum state which produces the experimental data with the highest probability.
From the theoretical treatment in 5.1, we expect the ideal entangled state

|ψideal

= √1 |393,L |S, −1/2 2

− √1 eiϕD |393,R |S, +1/2 2

(5.18)

according to eq. 5.6.

The experimentally derived atom-photon density matrix after maximum-likelihood re-

construction is shown in ﬁg. 5.15. From the experimental outcome, we ﬁnd an overlap

ﬁdelity with the expected state (5.18) of 84.6(2)% for the photon time window of 450 ns,

which

clearly

exceeds

the

classical

threshold

of

2 3

by

more

than

80

standard

deviations.

The reduction in ﬁdelity is traced back to, once again, primarily the lack of magnetic-

ﬁeld stability that accounts for a signiﬁcant amount of phase insecurity. For our qubit

storage time of about 30 µs, we estimate a decrease in ﬁdelity to about 96%. Another 1.4%

loss in ﬁdelity result from decay from P3/2 back to D5/2, and further 1.9% originate from detector dark counts (taking into account that signal-to-background ratio is decreased by a

6The notations |H and |V do not necessarily only describe the photonic polarizations, but generally denote the superpositions between the qubit eigenstates |0 and |1 , |H = |0 + |1 and |V = |0 − |1

89

5. Programmable atom-photon interface 0.5

|ρ |
nm

0.0
|+1/2 R〉 |+1/2 L〉 |−1/2 R〉 |−1/2 L〉

〈−1/2 L| 〈−1/2 R| 〈+1/2 L| 〈+1/2 R|

Figure 5.15.: Moduli of the density matrix for the entangled ion-photon state. The generated state exhibits an overlap ﬁdelity with the targeted maximally entangled Bell state of F = 84.6(2)%. The
sources of inﬁdelity are discussed in the main text.

factor of two due to the transmission of photons (signal) through the polarization-analysis setup that result in a signal attenuation of 50%). The remaining inﬁdelity is attributed to imperfect calibration of the waveplates for photonic state analysis, especially for the circular bases.
The photon-detection efﬁciency for this experiment amounts to 0.353(1)%, including that only 50% of the arriving photons are transmitted through the polarization analyzer. With a sequence-repetition rate of 11 kHz and the quantum efﬁciency of 28(1)% of the PMT, we obtain 140(5) ﬁber-coupled photons per second.
In conclusion, we demonstrated a proof-of-principle implementation of a fully programmable atom-photon quantum interface, a key ingredient for a photon-coupled quantum network. The interface offers three operational modes: atom-to-photon state transfer (from the atom onto a 393 nm photon), photon-to-atom state transfer (from a 854 nm photon onto the atom), and the generation of atom-photon entanglement (between atom and 393 nm photon). All operations begin with the controlled generation of a coher-
ent superposition in the meta-stable D5/2 manifold with adjustable population amplitude and phase7, followed by the heralded absorption of a photon at 854 nm (either in e known polarization state in the case of atom-to-photon state transfer and atom-photon entanglement or carrying quantum information encoded in its polarization state in the case of photon-to-atom state transfer).
7In an implementation of the atom-to-photon state transfer within a larger quantum network, the atomic qubit state might already be stored in the ion instead of being generated for the purpose of process characterization.

90

5.4. Atom-photon entanglement at 393 nm Projection of the atomic state onto a symmetric superposition offers the mapping of the initial atomic state onto the blue photon (for the atom-to-photon transfer) or vice versa (for the photon to atom transfer). If the generation of atom-photon entanglement is intended, no projection is conducted and the atom-photon system remains in an entangled state.
In the next chapter, an enhanced variation of such an interface is presented that allows for quantum-interface operations (photon-to-atom state transfer, atom-to-photon state transfer, atom-photon entanglement) in the spectral telecom range at 1310 nm, appropriate for long-haul quantum communication due to strongly decreased loss in optical ﬁbers.
91

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:20.489Z
- **Text Length:** 201656 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
