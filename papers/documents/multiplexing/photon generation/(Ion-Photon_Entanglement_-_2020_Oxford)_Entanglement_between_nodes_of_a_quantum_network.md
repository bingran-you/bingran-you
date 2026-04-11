# PDF Document: (Ion-Photon Entanglement - 2019 Oxford) Entanglement between nodes of a quantum network.pdf

**File Path:** (Ion-Photon Entanglement - 2019 Oxford) Entanglement between nodes of a quantum network.pdf

**Processed Date:** 2026-02-10T18:17:27.081Z

**File Size:** 34213.80 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 845

**Title:** (Ion-Photon Entanglement - 2020 Oxford) Entanglement between nodes of a quantum network

**Collection:** Multiplexing > Photon Generation

---

## Extracted Text Content

University of Oxford Department of Physics

Entanglement between nodes of a quantum network

Laurent J. Stephenson

〈↓↓| 〈↓↑| 〈↑↓| 〈↑↑| |↓↓⟩ |↓↑⟩ |↑↓⟩ |↑↑⟩

〈↓↓| 〈↓↑| 〈↑↓| 〈↑↑| |↓↓⟩ |↓↑⟩ |↑↓⟩ |↑↑⟩

0.5
0.25
0.1 0.01
i −+
−i

〈↓↓| 〈↓↑| 〈↑↓| 〈↑↑| |↓↓⟩ |↓↑⟩ |↑↓⟩ |↑↑⟩

〈↓↓| 〈↓↑| 〈↑↓| 〈↑↑| |↓↓⟩ |↓↑⟩ |↑↓⟩ |↑↑⟩

A thesis submitted for the degree of Doctor of Philosophy
Wolfson College Trinity term, 2019

Abstract
Entanglement between nodes of a quantum network Laurent J. Stephenson A thesis submitted for the degree of Doctor of Philosophy Trinity term 2019 Wolfson College, Oxford
Quantum devices are rapidly gaining momentum as a technology that will induce a paradigm shift in computing, communication and cryptography. Trapped ion qubits are one of the leading candidates for implementing a quantum computer, having previously demonstrated all of the required criteria. Local gate ﬁdelities between ions exceed those for all other platforms, but the total number of ions in a trap is limited by unavoidable issues – one possibility for scaling the ion trap quantum processor is to-
 create entanglement between ions in separate traps via single photons. The work in this thesis demonstrates the generation of remote entanglement between ions at high ﬁdelity and rate, paving the way towards protocols using multiple entangled pairs for computations.
We describe the construction from scratch of a twin-trap apparatus designed to entangle separated ions. We demonstrate the entanglement of strontium ions in traps separated by ∼ 2 m by swapping entanglement from single photons emitted by the 88Sr+ ions. A novel photon collection geometry is used, maximising the entanglement between the ion and photon without impeding optical access for standard ion trap laser beam geometries. The Bell state ﬁdelity of the ion-photon state, which is itself a valuab-
le entanglement resource for blind computation, is at least 97.70(12) % in either trap, with entangled pairs detected at a rate of at least 3.98 × 103 s−1. The remote ion-ion Bell state ﬁdelity is 94.0(5) %, and is generated at a rate of 182 s−1, representing the highest ﬁdelity remote entanglement reported in ions by a large margin, at a rate more than an order of magnitude faster than previous experiments.
The two identical trap systems are designed with capabilities beyond those demonstrated here. We can co-trap 88Sr+ and 43Ca+ in a microfabricated trap suitable for local ion transport operations, opening up the possibility of performing distillation of remote entanglement in the same apparatus. Entanglement distillation can be used to make remote entanglement with similar ﬁdelity to local operations, and would represent a signiﬁcant step towards a fully scalable ion trap quantum computer architect-
ure.

Acknowledgements
My greatest thanks must go to my supervisor, Prof. David Lucas; his engaging undergraduate atomic physics tutorials were one of the main reasons I chose to continue my studies, and years of experience always provided sage advice on the occasions he poked his head into the lab.
Dr. Chris Ballance led (and still leads) the twin-trap experiment on which I have spent the past few years, and I count myself incredibly lucky to have worked with him. His enthusiasm for science is truly infectious1 and somehow he found the patience to teach me most of what I know about ion trapping. The experiment was very much a team eﬀort, and I owe an enormous amount to the other members past and present, namely Dr. Tim Ballance, David Nadlinger, Beth Nichol, Dr. Shuoming An and Peter Drmota,-
 without whom this would not have been possible – I remain astounded by what we managed to achieve together in such a short time. I’d like to thank Dr. Joe Goodwin for always asking questions that left me utterly ﬂummoxed, inevitably leading to both of us scratching our heads for the next hour, and for being able to reach the elusive ﬁbre coupling Zen state of mind. A special mention goes to Rustin Nourshargh, who, aside from providing ample amounts of levity during his time as a Master’s student -
in the group, also proofread this thesis from cover to cover2. The wider ion trap group proved to be a wonderful bunch to work (and occasionally drink) alongside, so thank you to Dr. Tom Harty, Dr. Martin Sepiol, Dr. Vera Scha¨fer, Dr. James Tarlton, Keshav Thirumalai, Jochen Wolf, Amy Hughes, Clemens Lo¨schnauer, Marius Weber, Shaobo Gao, Will Hughes, and Prof. Andrew Steane.
My friends and family have supported me throughout this endeavour, and deserve thanks for enduring frequent dinner table physics explanations without (visible) signs of indiﬀerence. My grandmother always used to say, “Do your research!” – I suppose research is never complete, but I can deﬁnitively say that I have now done some research.
1Despite a near identical acknowledgment in Vera Sch¨afer’s thesis, this comment was written independently!
2And shall hereafter be blamed for all errata...
i

Finally, I gratefully acknowledge funding from EPSRC and from the Wolfson Harrison scholarship.
ii

Contents

1 Introduction

1

1.1 Quantum information processing and networking . . . . . . . 3

1.2 Trapped ions for quantum computing . . . . . . . . . . . . . . 5

1.3 Thesis outline . . . . . . . . . . . . . . . . . . . . . . . . . . . 9

2 The choice of ions

11

2.1 Strontium . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12

2.1.1 Photoionisation . . . . . . . . . . . . . . . . . . . . . . 14

2.1.2 Doppler cooling . . . . . . . . . . . . . . . . . . . . . . 15

2.1.3 State preparation . . . . . . . . . . . . . . . . . . . . . 16

2.1.4 Single qubit manipulations and readout . . . . . . . . . 18

2.1.5 Entangled photon emission and collection . . . . . . . . 20

2.2 Calcium . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23

3 Dual ion trap apparatus

24

3.1 The ion trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26

3.1.1 Trap design . . . . . . . . . . . . . . . . . . . . . . . . 26

3.1.2 Electrical connections and trap mounting . . . . . . . . 27

3.1.3 DC supply and ﬁltering . . . . . . . . . . . . . . . . . 33

3.1.4 Trap RF supply . . . . . . . . . . . . . . . . . . . . . . 34

3.2 Vacuum system . . . . . . . . . . . . . . . . . . . . . . . . . . 36

3.2.1 Assembly and baking . . . . . . . . . . . . . . . . . . . 38

3.2.2 Pumping . . . . . . . . . . . . . . . . . . . . . . . . . . 41

3.2.3 Atomic ovens . . . . . . . . . . . . . . . . . . . . . . . 43

3.2.4 Vacuum mounting structure . . . . . . . . . . . . . . . 46

3.3 Magnetic ﬁeld coils . . . . . . . . . . . . . . . . . . . . . . . . 46

3.4 Experimental Control . . . . . . . . . . . . . . . . . . . . . . . 47

3.5 Laser systems . . . . . . . . . . . . . . . . . . . . . . . . . . . 49

3.5.1 Diode lasers . . . . . . . . . . . . . . . . . . . . . . . . 50

3.5.2 Ti:Sapphire lasers . . . . . . . . . . . . . . . . . . . . . 51

3.5.3 AOM switching and frequency tuning . . . . . . . . . . 52

iii

3.6 Trap beam paths . . . . . . . . . . . . . . . . . . . . . . . . . 54 3.6.1 Fixed ﬁnal mirrors . . . . . . . . . . . . . . . . . . . . 59 3.6.2 Alignment onto ions . . . . . . . . . . . . . . . . . . . 61
3.7 Rear imaging system . . . . . . . . . . . . . . . . . . . . . . . 64

4 Photon collection and entangling apparatus

68

4.1 Photon collection . . . . . . . . . . . . . . . . . . . . . . . . . 69

4.1.1 Fibre coupling procedure . . . . . . . . . . . . . . . . . 69

4.2 Photonic Bell state analyser . . . . . . . . . . . . . . . . . . . 76

4.2.1 Beam splitters . . . . . . . . . . . . . . . . . . . . . . . 79

4.2.2 Waveplates . . . . . . . . . . . . . . . . . . . . . . . . 80

4.2.3 Optical ﬁbres . . . . . . . . . . . . . . . . . . . . . . . 82

4.3 Experimental control . . . . . . . . . . . . . . . . . . . . . . . 83

4.3.1 The “entangler core” . . . . . . . . . . . . . . . . . . . 83

4.3.2 AOM switching latency . . . . . . . . . . . . . . . . . . 86

5 Ion state manipulation and readout

89

5.1 State preparation . . . . . . . . . . . . . . . . . . . . . . . . . 89

5.2 Readout in the computational basis . . . . . . . . . . . . . . . 91

5.3 Readout in other bases . . . . . . . . . . . . . . . . . . . . . . 94

5.4 Errors in preparation and readout . . . . . . . . . . . . . . . . 95

6 Ion-photon entanglement

96

6.1 Collecting photons from ions . . . . . . . . . . . . . . . . . . . 98

6.2 Ion-photon entanglement . . . . . . . . . . . . . . . . . . . . . 103

6.3 Error sources . . . . . . . . . . . . . . . . . . . . . . . . . . . 110

6.3.1 Ion dephasing . . . . . . . . . . . . . . . . . . . . . . . 111

6.3.2 Ion rotation errors . . . . . . . . . . . . . . . . . . . . 112

6.3.3 Laser leakages . . . . . . . . . . . . . . . . . . . . . . . 113

6.3.4 Photon polarisation errors . . . . . . . . . . . . . . . . 114

6.3.5 Summary of errors . . . . . . . . . . . . . . . . . . . . 115

7 Ion-ion entanglement

116

7.1 Beamsplitter theory . . . . . . . . . . . . . . . . . . . . . . . . 119

7.2 Entangled state phase . . . . . . . . . . . . . . . . . . . . . . 127

7.3 Indistinguishability criteria . . . . . . . . . . . . . . . . . . . . 133

7.3.1 Temporal matching . . . . . . . . . . . . . . . . . . . . 134

7.3.2 Field equalisation . . . . . . . . . . . . . . . . . . . . . 135

7.4 Fibre birefringence compensation . . . . . . . . . . . . . . . . 138

7.5 Remote entanglement . . . . . . . . . . . . . . . . . . . . . . . 139

7.6 Error sources . . . . . . . . . . . . . . . . . . . . . . . . . . . 141

iv

8 Conclusions

147

8.1 Comparison to other experiments with ions . . . . . . . . . . . 149

8.1.1 Ion-photon entanglement . . . . . . . . . . . . . . . . . 149

8.1.2 Ion-ion entanglement . . . . . . . . . . . . . . . . . . . 151

8.2 Comparison with alternative platforms . . . . . . . . . . . . . 151

8.3 Outlook . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152

v

List of Figures
2.1 Diagram of the 88Sr+ level structure . . . . . . . . . . . . . . . 13 2.2 88Sr+ two-step photoionisation scheme . . . . . . . . . . . . . 14 2.3 88Sr+ state preparation . . . . . . . . . . . . . . . . . . . . . . 17 2.4 88Sr+ qubit manipulations and readout . . . . . . . . . . . . . 18 2.5 88Sr+ photon emission and collection . . . . . . . . . . . . . . 20 2.6 43Ca+ level structure and Raman transitions . . . . . . . . . . 22
3.1 Experiment overview block diagram . . . . . . . . . . . . . . . 25 3.2 Photograph of the HOA2 trap . . . . . . . . . . . . . . . . . . 27 3.3 Schematic of the HOA2 electrode layout . . . . . . . . . . . . 28 3.4 DC connection test circuit . . . . . . . . . . . . . . . . . . . . 32 3.5 Trap RF chain . . . . . . . . . . . . . . . . . . . . . . . . . . . 37 3.6 Vacuum system internals . . . . . . . . . . . . . . . . . . . . . 39 3.7 422 nm AOM setup . . . . . . . . . . . . . . . . . . . . . . . .-
 55 3.8 674 nm AOM layout . . . . . . . . . . . . . . . . . . . . . . . 56 3.9 Schematic diagram of 88Sr+ beam paths . . . . . . . . . . . . 57 3.10 Photograph of the ﬁxed ﬁnal mirrors . . . . . . . . . . . . . . 60 3.11 Confocal imaging system . . . . . . . . . . . . . . . . . . . . . 63 3.12 Rear side imaging system . . . . . . . . . . . . . . . . . . . . . 66
4.1 Imaging ion light into a ﬁbre . . . . . . . . . . . . . . . . . . . 71 4.2 Point spread function images and ﬁts . . . . . . . . . . . . . . 73 4.3 Fitted Zernike coeﬃcients of point spread function . . . . . . . 74 4.4 Photonic Bell state analyser layout . . . . . . . . . . . . . . . 78
5.1 Bright and dark readout histograms . . . . . . . . . . . . . . . 92 5.2 Rabi oscillations of the optical qubit . . . . . . . . . . . . . . 94
6.1 Three polarisation-encoded photon emission schemes . . . . . 100 6.2 Fast excitation pulse sequence . . . . . . . . . . . . . . . . . . 104 6.3 Fast preparation of S1/2, m = −1/2 . . . . . . . . . . . . . . . . . . 106 6.4 Pulsed excitation to P1/2, m = +1/2 . . . . . . . . . . . . . . . . . 107
vi

6.5 Ion-photon density matrices . . . . . . . . . . . . . . . . . . . 109 7.1 Two types of photonic Bell state analyser . . . . . . . . . . . . 124 7.2 Energy levels of an arbitrary system for entanglement swapping128 7.3 Photon arrival time distribution and ﬁt . . . . . . . . . . . . . 136 7.4 Ion-ion density matrices for each herald pattern . . . . . . . . 140
vii

List of Tables
3.1 Toroidal resonator parameters . . . . . . . . . . . . . . . . . . 35 3.2 Magnetic ﬁeld coil speciﬁcations . . . . . . . . . . . . . . . . . 47 4.1 Non-polarising beam splitter properties . . . . . . . . . . . . . 79 4.2 Polarising beam splitter extinction ratios . . . . . . . . . . . . 80 4.3 Bell state analyser waveplate properties . . . . . . . . . . . . . 82 4.4 Switching latencies of time-critical beams . . . . . . . . . . . . 88 7.1 Ion-ion error budget . . . . . . . . . . . . . . . . . .-
 . . . . . 146
viii

Chapter 1
Introduction
The history of computing stretches far further back than one might naively expect. As soon as civilisation developed, humans encountered problems that were intractable without some form of assistance; how much grain to levy as taxes from each farmer for example. Tools were invented to aid these calculations, the ﬁrst being the Sumerian abacus. More and more sophisticated ways of problem solving developed – geared mechanisms for calculating the positions of celestial bodies such as the Antikythera -
mechanism, dated from c. 125 BCE, and much later astronomical clocks in China, Europe and the Middle East.
These machines had very speciﬁc tasks, and were not remotely versatile. The language for describing versatile computing machines came with Alonzo Church and Alan Turing in the 1930s, while simultaneously Claude Shannon proved that electric switching circuits could implement Boolean algebra, paving the way for modern computing. The rate of development accelerated with the invention of the transistor in 1959, and today the classical computer
1

is embedded in virtually every aspect of our daily lives, from the smartphone in our pocket to the supercomputer calculating the weather forecast.
The early 20th century was a frenzy of scientiﬁc discovery in other areas too – the idea that energy might be quantised was put forward by Planck to solve the “ultraviolet catastrophe”1, where classical statistical mechanics predicts absurdly that an ideal black body would radiate an unbounded amount of energy. This, along with Einstein’s explanation of the photoelectric eﬀect requiring the existence of ﬁnite “energy quanta” (which would eventually become known as photons), led to the birth of qua-
ntum mechanics as we now know it.
This might appear to have nothing at all to do with computing, and indeed quantum mechanics and computing remained apart for several decades, until two observations were made in the early 1980s: (1) we can simulate any classical Turing machine of ﬁnite length with a quantum Hamiltonian [Ben80] and (2) we cannot simulate quantum systems eﬃciently with classical computing [Fey82]. This led to Deutsch describing a quantum Turing machine that he called a ‘universal quantum computer’ [Deu85] that can s-
imulate any physical system, including other quantum systems, and so the link between quantum mechanics and computing was made inextricable.
Demonstrating that a quantum computer can solve an abstract class of problems more eﬃciently than a classical computer is certainly interesting enough for scientists to pursue the goal of creating one, but without more concrete examples it can be diﬃcult to explain the signiﬁcance of this to those outside the ﬁeld. Perhaps the two most famous algorithms that explicitly
1A name I’ve always found amusingly dramatic
2

show a quantum computer outperforming a classical computer are Grover’s quantum database search [Gro97] and Shor’s algorithm [Sho97] for factorising large numbers. The asymmetry in computational diﬃculty between the multiplication (easy) and the factorisation (hard) of large numbers underpins the usefulness of encryption techniques like RSA – thus the person wanting to ﬁnd out the decryption key needs a new abacus.
1.1 Quantum information processing and net-
working
At its core, our quantum computer consists of qubits. A qubit is any quantum system that we can control; we label two states of our choice as |0 and |1 corresponding to the 0 and 1 of a classical bit. The qubits are controlled with quantum gates in exact analogy to Boolean logic gates, and by extension we are motivated to try to implement a “universal gate set” for quantum operations, much like a composition of nand gates can be used to implement any Boolean gate.
A universal gate set may be composed of single qubit operations and one ‘entangling’ gate [Kit97], but other alternatives are possible. If we can initialise an entangled state of two qubits, then with the addition of single qubit gates and a method of measuring the entangled state (a Bell basis measurement) we can construct a diﬀerent universal set [GC99]. Thus it appears that creating entangled two qubit states is an important process in building a quantum computer. Furthermore, if these two qubi-
ts can be
3

entangled at a distance from each other, we can begin to explore new ideas in quantum information processing.
Qubits entangled at a distance can be used to implement a quantum network; one application may be to generate an encryption key [Eke91] with a fundamentally diﬀerent approach to the classical example of RSA given earlier, which is reliant on the properties of quantum mechanics rather than the computability of the factorisation problem. Classical communications over long distance are subject to attenuation of signals, requiring ampliﬁers at intermediate points – quantum communication channels are a-
lso subject to losses and decoherence that degrade the link quality with increasing distance. We might attempt to copy the state of the qubit that we are trying to share, but this is nopt possible, assuming the quantum no-cloning theorem [WZ82, Par70] holds, so how do we extend our link? What we can do is teleport a quantum state [Ben95], consuming an entangled Bell pair in the process. In this way, we can teleport the qubit’s state across many shorter links to get to its eventual destination – th-
e devices in between being called ‘quantum repeaters’. Shared entangled pairs can also be used to implement a ‘blind’ quantum computation, where a client need only make measurements on their qubit while a quantum computing server performs computations on the other qubit [MF13], and in this way the client can execute an algorithm without the server gaining knowledge of what the algorithm, its inputs or its outputs were.
We have established that quantum computers and qubits entangled at a distance may well be very useful, without specifying in detail what a qubit is, beyond calling it a ‘quantum system’. Luckily, nature is quantum, and so
4

many candidates present themselves as potential qubits – from quantum dots, Josephson junctions and nitrogen vacancy centres in diamond to photons, atoms and trapped ions to name but a few.
1.2 Trapped ions for quantum computing
Trapped ions were ﬁrst proposed as an implementation for a quantum computer in 1995 [CZ95]. A qubit is encoded in two energy states of the ion; generally one is chosen in the ground level, while the other may be in a metastable excited level, resulting in an optical frequency qubit, or a diﬀerent state of the ground level, giving a microwave or radio frequency qubit.
A list of the criteria that any qubit must satisfy in order to be suitable for quantum information processing was compiled in 2000 by DiVincenzo [DiV00]. The list consists of ﬁve criteria pertaining to a localised quantum computer, as well as a further two related to quantum networking. The ﬁrst ﬁve have been demonstrated to exceptional standards with trapped ions:
• A scalable physical system with well characterized qubits: Atoms of the same element and isotope are, as far as we know, completely identical, and so any states which we choose our qubit states will always have the same energy. Ionising the atom allows us to conﬁne it in a quasi-electrostatic trap [Pau90]. Electromagnetic ﬁelds such as lasers or microwaves can interact with the electronic state of the ion, allowing us to control the state. While scaling to a useful number of qubits remains to be-
 shown, multiple proposals exist for scaling ion 5

trap systems to large numbers of physical qubits; quantum chargecoupled devices (QCCDs) [KMW02] are one proposal, while photonic interconnects [MRR+14] are the main topic of this thesis. See also reviews such as [MK13, BKM16] for further discussions on scalability.
• The ability to initialize the state of the qubits to a simple ﬁducial state, such as |000 . . . : The interaction of the electrons with electromagnetic ﬁelds allows us to pump population towards a single state [WBID80].
• Long relevant decoherence times, much longer than the gate operation time: The ion is trapped in a vacuum; there are few collisions with background gases and the intensity of blackbody radiation at room temperature is far below that needed to drive transitions2, and so is well isolated from the environment. Coherence times for ground state ion qubits are limited principally by technical noise sources causing dephasing – coherence times exceeding 10 min have been observed in hyperﬁne qubits [WUZ+-
17], while magnetically sensitive Zeeman qubits have coherence times up to 300 ms [RSK+16], compared to typical gate times of 1–100 µs.
• A “universal” set of quantum gates: Quantum gates with high ﬁdelity have been realised in single and multiple ions in many forms: between ground-state qubits and optical qubits; with lasers [BHL+16, GTL+16] or microwaves in near [HSA+16] and far ﬁeld; single qubit gates in isolation or individually addressed within an ion string [ANK+15]; two
2Although it does perturb the energy levels enough to be a concern in ion clocks [AKR+18]
6

qubit gates between ions of the same or diﬀerent [TGL+15] species.
• A qubit-speciﬁc measurement capability: Proof of the above results relies on one crucial task: reading out the state of the qubit. In ion traps this is generally accomplished by state-dependent ﬂuorescence, such that on application of the cooling lasers, the atom will scatter many photons from one state and not the other, which we can detect to make a measurement [MSW+08].
While these ﬁrst ﬁve criteria appear to have been soundly fulﬁlled by trapped ions, we note that while excellent two-qubit gates have been realised in systems with a few ions in a single harmonic trap, this method is not easily scalable to arbitrarily large numbers of ions. Adding more ions to the trap increases the number of motional modes of the ion string used to implement gates; more modes means more oﬀ-resonant excitation of unwanted modes, leading either to slower gates or larger errors. We -
note promising work on longer ion chains does exist [LWL+19], but this is still experimentally limited to some tens of ions.
The natural development then is to have many traps, each with only a few ions, but then we need to be able to link them. One option is to physically move ions between traps [WMI+98], where segmented electrodes can be used to modify the potential such that ions can be split oﬀ from a chain and pushed around in a moving potential well. However, in this case the distances traversed are fairly small; if many trap zones are to be used then the required density of laser beams (for addressing each zone) -
is high. The number of controllable electrodes also presents some diﬃculty, since each
7

needs an independent analogue voltage source. In order to separate the traps further, we can try to use photons to link
them [MK13, NFB14] – noting that this of course can apply to any qubit system that can be interfaced with photons. The state of a photon emitted by spontaneous decay is entangled with the ion it originated from; with two such ions and photons, we can perform entanglement swapping [Coe04, SI03] so that by making a Bell measurement on the photons, we can create an entangled pair of ions at a distance. The entangled ion-photon pair can also be useful in its own right – since measurements of photon po-
larisation qubit states are possible with only linear optics, a blind quantum computer of the type described in section 1.1 can be implemented.
Armed with this knowledge, we examine the ﬁnal two DiVincenzo criteria:
• The ability to interconvert stationary and ﬂying qubits
• The ability to faithfully transmit ﬂying qubits between speciﬁed locations
Bi-directional interconversion between stationary ion qubits and ﬂying photon qubits is possible with schemes emitting/absorbing a photon entangled with the ion’s state [KES+16]; in this thesis we create entangled ion-photon pairs via spontaneous emission, and do not map the photon state directly onto another ion. The entangled ion-photon pairs are then used to create entangled pairs of ions at a distance. The second criterion can be fulﬁlled simply by transmitting photons through optical ﬁbres.
True scalability of the ion trap quantum computer is likely to incorporate a hybrid system, with QCCD-type devices connected with photonic links [BKM16]. Even with noisy links, the entanglement can be puriﬁed by
8

consuming multiple low-quality entangled pairs to create a smaller number of higher-quality pairs [BBP+96]. Demonstrating this entanglement puriﬁcation (also known as distillation) is the principle goal of the apparatus built for this thesis, towards which a photonic link is a key intermediate result.
1.3 Thesis outline
In this thesis, we present the implementation of photonic links between two ion traps. The work appearing here was published in Physical Review Letters on 16th March 2020 [SNN+20]. The thesis is structured as follows.
Chapter 2: The choice of ions gives an introduction to the strontium qubit used throughout, including the ion qubit manipulations and the production of entangled ion-photon pairs.
Chapters 3: Dual ion trap apparatus and 4: Photon collection and entangling apparatus detail the apparatus used in this experiment. Chapter 3 describes apparatus that is common to many ion trap experiments, while chapter 4 is concerned with the photon creation, collection and interference apparatus.
Chapter 5: Ion state manipulation and readout describes the implementation of the ion qubit operations introduced in chapter 2.
Chapter 6: Ion-photon entanglement presents the collection of entangled photons in more detail, expanding on the theory and showing the results of the ion-photon entanglement experiment, with a brief discussion of the errors present.
Chapter 7: Ion-ion entanglement showcases the main experimental
9

result, that is entanglement between separated ions using photons. We discuss the eﬀects of imperfect photonic Bell measurements on the ion-ion entangled state along with other error sources.
Chapter 8: Conclusions summarises the results of the thesis, their relation to other ion-trap experiments and future prospects.
10

Chapter 2
The choice of ions
In this chapter we introduce the ion species – strontium – used throughout this work. Many references discuss both the suitability of ions in general1 and the use of strontium [Ber02] in detail, so we aim only to brieﬂy provide some context and introduce the notation used in the rest of the thesis. An overview of the techniques used to trap, cool and coherently manipulate strontium is given. The mechanism for producing photons entangled with the ion is presented, with detailed discussion deferred -
to chapter 6. We also give a passing mention to calcium, which will be the second species in this experiment. Calcium will be used for local operations and memory – the infrastructure for its trapping and manipulation has been built as part of this project.
1See for example [Ste96] and many references therein.
11

2.1 Strontium
We have extolled the virtues of trapped ions for quantum operations, but thus far have been vague about the nature of the ions themselves. Typically, one of the alkali earth metals is chosen – the full s-orbital of the neutral atom means that the singly ionised form has a simple, hydrogen-like level structure which lends itself to laser cooling and quantum control. Several transition metals (cadmium, mercury, ytterbium, zinc) also share this property and are succesfully employed in other groups.
Current proposals for entanglement distillation of remote Bell pairs require two ion species to be used [NBBB16]; one is used for the remote entangling via a photonic interconnect, and the other for high-ﬁdelity local operations. Using two species allows the use of globally addressing beams, since the transitions of each species are far enough detuned from each other that a laser addressing one species does not disturb the quantum state of the other species. Calcium-43 has proven itself as an exce-
llent performer for gate operations [BHL+16], and as a memory qubit with coherence times approaching a minute without the use of dynamic decoupling sequences [HAB+14], making it the logical choice for our local application qubit and leaving only the selection of the photonic interconnect species. It is desirable to choose two species that are close in mass, since the motional coupling is stronger, making sympathetic cooling and mixed-species quantum gates simpler. The distillation protocol also me-
ans that the qubit formed by the interconnect species is not intended for long term storage, so that this qubit only needs a coherence time long compared to the single gate needed to transfer its state
12

2P3⁄2

1033nm

2P1⁄2
τ = 7.39 ns

1092nm BR = 5.5%

2D5⁄2
τ = 391 ms

422nm BR = 94.5%

674nm

2D3⁄2
τ = 435 ms

2S1⁄2
⏐↓⟩

⏐↑⟩
mJ = 1⁄2

mJ = -1⁄2

ΔE = 28.02 MHz/mT 15.7 MHz @ 0.561 mT

Figure 2.1: Diagram of the 88Sr+ level structure. Relevant branching ratios, lifetimes and wavelengths of transitions are all shown (data collated from [LTGG16, LWGS05, MLN+99, San12]). Note that in this thesis a magnetic ﬁeld of ∼ 0.5 mT was used, so the transitions from P1/2 ↔ S1/2 are not resolved, unlike at higher ﬁelds e.g. in [Sch18].

to one of the memory qubits, rather than compared to the whole computa-
tion. This allows to choose a species with no hyperﬁne structure and use a
Zeeman qubit.
We choose Strontium-88 as the photonic interconnect species, which is
used exclusively throughout this thesis. Strontium-88 is the most common
isotope at 82.58 % [BW11] abundance, with highly enriched sources also available2
This even-even isotope has no nuclear spin, and thus no hyperﬁne struc-
2The radioactive isotope 89Sr+ is used in bone cancer treatment, for delivering beta radiation to bony metastases by replacing calcium due to their similar chemical properties. 89Sr+ is produced by neutron irradiation of 88Sr+, hence highly enriched 88Sr+ is readily available.

13

Continuum
5s5p 1P1 5s2 1S0

378nm 461nm

Figure 2.2: 88Sr+ two-step photoionisation scheme. The 461 nm laser excites the atom to 5s5p 1P1, which is then ionised by the 378 nm laser.

ture; see ﬁgure 2.1. The ground level is split in the presence of a magnetic ﬁeld, forming a Zeeman qubit. We denote the Zeeman qubit states |↓ ≡ |S1/2, m = −1/2 and |↑ ≡ |S . 1/2, m = +1/2 These are split by ∆E = gJ µBB = 28.0 MHz mT−1.
Low-lying metastable D levels provide both a shelf level for readout of the Zeeman qubit, as well as the possibility of an optical qubit. All of the transition wavelengths can be accessed with diode lasers, although in this experiment a mixture of diode and Ti:Sapphire lasers are used. The shortest wavelengths needed are in the visible spectrum3, so conventional optical ﬁbres can be used without having to resort to photonic crystal ﬁbres, and standard optics are available with good transmission pr-
operties.

2.1.1 Photoionisation
To load strontium ions into the trap, we ﬁrst evaporate neutral atoms from a resistively heated oven. The neutral atom beam passes through the trap zone. A two-step photoionisation process, demostrated ﬁrst analogously for
3The one exception being the 378 nm laser used in photoionisation.

14

calcium [GRB+01], and subsequently in strontium [VCLB06, BLW+07], creates singly ionised strontium in the trap zone, where it is then Doppler cooled. The process uses diode lasers at 461 nm (to excite the 5s2 1S0 ↔ 5s5p 1P1 transition of neutral 88Sr) and 378 nm (to excite to the continuum and ionise), as shown in ﬁgure 2.2. These wavelengths are easier to realise than the 293 nm light needed for the single wavelength ionisation process [BLW+07]. The longer wavelengths also cause less undesirable -
charging of the trap. The 378 nm laser has a shorter wavelength than is strictly necessary for strontium; this wavelength allows it to fulﬁl the same purpose for calcium photoionisation [LRH+04].
Photoionisation of a neutral atom beam from a heated oven is not the only way to load an ion trap; however, it has largely superceded electron bombardment as the latter requires a much higher atom ﬂux [KHT+00] and charges the trap electrodes, increasing the variability of the micromotion compensation voltages [BLW+07]. Laser ablation [HGH+07] is another alternative, which may well be better suited to more compact experiments in the future. However, for the present, the chosen method oﬀers tried-an-
dtested reliability and simplicity.
2.1.2 Doppler cooling
Doppler cooling in Strontium-88 is simple due to the lack of hyperﬁne structure; the S1/2, P1/2 and D3/2 form a closed Λ-system (see ﬁgure 2.1). The 422 nm cooling beam is π-polarised, while the 1092 nm beam for clearing the D3/2 level has a mixed σ and π polarisation. The Zeeman splitting of the S1/2
15

level (15.7 MHz) is comparable to its linewidth (20.1 MHz) at the 0.561 mT

magnetic ﬁelds used, so a single laser frequency at the 422 nm wavelength of

the

S ↔P 1/2

1/2

transition

suﬃces

to

address

both

ground

states.

No resolved-sideband cooling is used in this thesis; the lowest tempera-

ture achievable with Doppler cooling is ∼ Γ/2 [EMSKB03], where Γ here is

the linewidth of the 422 nm transition, equal to 20.1 MHz4. For cooling close

to this Doppler limit, the detuning of the 422 nm laser is set around 16 MHz

red-detuned from the line centre5 and the intensity to a single saturation in-

tensity. The detuning is found by maximising the ﬁdelity of the optical qubit

manipulations described in section 2.1.4. At the Doppler limit, and with

typical trap secular frequencies of 1–5 MHz, the mean motional occupation

number n¯ ∼ 2–8, substantially above the vibrational ground state.

During readout and experiment idle time, the power is increased and

frequency red detuned to maximise ﬂuorescence. The 1092 nm laser is tuned

10–20 MHz above the resonant frequency of the transition to avoid dark states

caused by coherent population trapping, with a power equivalent to several

hundred saturation intensities.

2.1.3 State preparation
The strontium qubit is prepared into |↓ ≡ |S1/2, m = −1/2 by optically pumping with a σ−-polarised 422 nm beam as shown in ﬁgure 2.3. At or below saturation of the σ− transition, the ﬁdelity of this operation is limited only
4Calculated from the value for the Einstein A coeﬃcient given in Ref. [San12]. 5The line centre is found by counting the ﬂuorescence over 30 acquisition windows of 500 µs each, short enough that the ion is not heated and showing the full Lorentzian line shape rather than a half-Lorentzian.
16

2P3⁄2

2P1⁄2

1092

2D5⁄2

σ- (i)
422
(ii) (iii)

2S1⁄2

⏐↑⟩

⏐↓⟩

2D3⁄2

Figure 2.3: 88Sr+ state preparation. The σ−-polarised 422 nm beam excites population from |↑ to P1/2, where it can decay (i) to D3/2, from which it is cleared by a 1092 nm beam; (ii) back to |↑ , where it is re-excited; or (iii) to |↓ . The population in |↓ does not interact with the σ−-polarised beam because there are no ∆m = −1 transitions to P1/2 from this state, and so the population is pumped toward this state.

17

2P3⁄2

2P3⁄2

2P1⁄2

⏐D⟩
mJ = -3⁄2

2D5⁄2

Main
|Δm| = 1
2S1⁄2
⏐↓⟩

674
Map
|Δm| = 2
⏐↑⟩

2D3⁄2

2P1⁄2
422

⏐D⟩ 2D5⁄2
1092

674

2S1⁄2

⏐↑⟩

⏐↓⟩

2D3⁄2

(a)

(b)

Figure 2.4: 88Sr+ (a) qubit manipulations and (b) readout. Population is mapped from |↑ → |D with a π-pulse on the “map” transition. Optical qubit rotations occur on the “main” transition between |↓ ↔ |D . Application of the Doppler beams causes population in |↓ to ﬂuoresce; |D stays dark.

by the polarisation purity of the 422 nm beam, but if the power in this beam is increased above the saturation intensity, then the relative scattering rate of the impurities increases and the ﬁdelity decreases correspondingly.

2.1.4 Single qubit manipulations and readout
To be able to use both the optical and Zeeman qubits, we must be able to map one of the Zeeman qubit states into a state in the D5/2 manifold, as well as performing our main optical qubit operations between that D state and the other Zeeman qubit state.

18

Our choices of a suitable D state are dictated by the available beam propagation directions, with respect to both the trap axis and the applied magnetic ﬁeld. The 674 nm beam must have some projection onto the axial direction to perform multi-qubit motional gates on the axial modes; the magnetic ﬁeld direction is constrained because (a) it must be perpendicular to the imaging direction (see chapter 6) and (b) it is desirable to be able to have other beams both parallel and perpendicular to the ﬁel-
d. The electric quadrupole transition S1/2 ↔ D5/2 selection rules allow transitions with |∆m| ≤ 2. We choose |D ≡ |D5/2, m = −3/2 6, since the relative transition strength from the two Zeeman qubit states can be tuned by adjusting polarisation rather than beam direction [Nad18]. The |∆m| = 1 transition between |↓ ↔ |D is the less magnetically sensitive of the two, so we use these two levels as the optical qubit and call this the “main” optical qubit transition. The |∆m| = 2 transition between |↑ ↔-
 |D is therefore used to transfer between the Zeeman and optical qubits, and is called the “map” transition.
The D5/2 manifold is outside of the Doppler cooling cycle – if we have mapped population into the optical qubit, then all we need do to read out the qubit is apply the Doppler beams (see [MSW+08] for the exactly analogous readout of 40Ca+). If the qubit was in state |↓ (rather than |D ), the ion will ﬂuoresce. To read out the Zeeman qubit, we must ﬁrst map population from |↑ into |D , and then proceed as before. The readout ﬁdelity of the Zeeman qubit will be directly linked to the ﬁdelity of a π--
pulse on the map transition to the optical qubit, since any population remaining in
6The notation |D is potentially ambiguous in this thesis since we also discuss photon polarisations, and |D traditionally denotes diagonal polarisation – the intended meaning should always be obvious from the context.
19

2P3⁄2

2P1⁄2
τ = 7.39 ns
σ+
2⁄3

2D5⁄2

π

5.5%

1⁄3

2D3⁄2

B
σ
π

⏐H⟩

NA 0.6

⏐V⟩

2S1⁄2

⏐↑⟩

⏐↓⟩

(a)

(b)

Figure 2.5: 88Sr+ (a) photon emission and (b) photon collection perpendicular to the applied ﬁeld, with the intensity of the emission patterns for each polarisation represented.

|↑ will ﬂuoresce. The optical qubit readout ﬁdelity is limited fundamentally by the ﬁnite photon collection time and the 391(2) ms lifetime of the D5/2 level [MSW+08, KGA+11], however, since this is much longer than the time typically taken to read out the qubit, it is not a practical limitation.

2.1.5 Entangled photon emission and collection
To produce photons entangled with the state of the ion, we use an ultrafast, coherent pulse at 422 nm to excite the ion from |↓ → |P1/2, 1/2 . On spontaneous decay of the ion, the photon produced is entangled with the ion.
The level structure of Strontium-88 is particularly suitable for the pro-

20

duction of polarisation entangled photons – disregarding the 5.5 % lost to the D3/2, there are only two decay paths, directly into our Zeeman qubit, as shown in ﬁgure 2.5a. If we condition on the presence of a 422 nm photon, then with the Clebsch-Gordan coeﬃcients of the decay the combined ion-photon state in free space is

|ψ =

2 |↓

σ−

+

1 |↑ |π .

3

3

(2.1)

This state is not maximally entangled due to the imbalance in decay channels; its ﬁdelity to the maximally entangled state |Φ+ = 1/2{|↓ |σ− + |↑ |π } is 97 %.
The photons are collected perpendicular to the magnetic ﬁeld into an optical ﬁbre, shown schematically in ﬁgure 2.5b. This geometry was ﬁrst used in free space with 111Cd+ [MMBM04]. Ref. [Nad18] shows that this choice leads to collecting only the maximally entangled fraction of the ionphoton state, such that the state transmitted by the ﬁbre is

1 |ψ = √

|↓ σ− + |↑ |π

.

2

(2.2)

That we can counter the imbalance in overall emission with a suitable choice of observation axis is extremely useful; this is discussed in greater detail in chapter 6.

21

2P3⁄2

854nm

2P1⁄2

2D5⁄2

393nm

866nm 397nm

850nm
2D3⁄2

2S1⁄2

F = 3
ΔE = 3.226 GHz
F = 4

2P3⁄2

2P1⁄2

Δ ∼ 10 THz
2D5⁄2

2S1⁄2

F = 3 F = 4

2D3⁄2

(a)

(b)

Figure 2.6: (a) The 43Ca+ level structure, and (b) a Raman transition for qubit manipulation.

22

2.2 Calcium
Though not used in this work, the infrastructure to trap and manipulate Calcium-43 was built concurrently with the strontium infrastructure. Its level structure is shown in ﬁgure 2.6a. Doppler cooling is performed on the 397 nm and 866 nm transitions between S1/2 ↔ P1/2 ↔ D3/2. State preparation is conducted by optical pumping with a circularly polarised 397 nm beam to S1/2 |F = 4, mF = 4 , followed by optional microwave pulses to prepare other |F, mF states.
The qubit is encoded in the hyperﬁne states of the F = 3 and F = 4 manifolds of the ground level – in intermediate strength applied magnetic ﬁelds the Zeeman and hyperﬁne splittings have comparable magnitude, and so some pairs of states have a vanishing ﬁrst-order ﬁeld dependence, forming ‘atomic clock’ qubits. Qubit manipulations can be achieved with either microwaves or Raman transitions with lasers (see ﬁgure 2.6b).
23

Chapter 3
Dual ion trap apparatus
The apparatus designed for the experiments in this thesis can be broadly divided into a “standard” ion trap apparatus, described in this chapter, and the photon collection and interference apparatus detailed in chapter 4. While we have called this a “standard” experiment, the level of complexity required to build an experiment consisting of two ion trap vacuum chambers, each able to trap two ion species and perform laser-based gates on them, as well as collecting single photons for remote entangle-
ment experiments, is enormous. The two separate trap systems and all of their ancilliary subsystems are denoted (in time-honoured quantum information tradition) as Alice and Bob, by order of construction. An overview of the subsystems appears in ﬁgure 3.1; this also includes the photon apparatus to properly illustrate control ﬂow.
24

MASTER PC

FIBRE TTL/MISC RF BEAM GIG/E USB
GRATING SPECTRUM ANALYSER

KASLI (FPGA) TTL I/O ZOTINO (DAC) SAMPLER (ADC) URUKUL (DDS)

DRTIO

MOTORISED WAVEPLATES
MECHANICAL SHUTTERS
APDs
PHOTONIC BELL STATE ANALYSER

RF MIXING CIRCUIT

FIELD COIL CURRENT SUPPLIES
19" RACK

TOROIDAL DC FILTER RESONATOR

{Z}

{X, Y, Z}

STEPPER PIEZO

PMT EMCCD

NA 0.25

NA 0.6

PULSED LASER
PULSE PICKER
SHG

RF AMPLIFIERS AOM

TI:SAPPH 674nm

AOM NETWORK

RAMAN MASTER
PHASE LOCK
RAMAN SLAVE

AOM NETWORK
ALICE

PHOTODIODES

ATOMIC OVEN CURRENT CONTROL

KASLI (FPGA) SAMPLER (ADC) URUKUL (DDS)
FAST RF SWITCHES
RF AMPLIFIERS
AOM NETWORKS
19" RACK

DRTIO
MECHANICAL SBC SHUTTERS CONTROL PHOTOIONIZATION DIODE LASERS x3

19" RACK

LASER DIAGNOSTICS WAVEMETER/OSA

DIAGNOSTIC PC 1

LOCK

ION CONTROL DIODE LASERS x8

PDH LOCK CAVITIES LOCK x6

LOCK
LASER DIAGNOSTICS WAVEMETER/OSA
DIAGNOSTIC PC 2

Figure 3.1: Block diagram showing an overview of the subsystems used to control the two trap experiment. The grey shaded background shows the section of the experiment duplicated for each of the traps (arbitrarily labelled Alice here); we omit the duplication in this diagram. Subsystems inside teal boxes are housed in standard 19” server racks. Most subsystems are discussed in detail in this chapter, with the exception of the photon collection and interference apparatus.
25

3.1 The ion trap
To reduce development time, we used a trap fabricated by Sandia National Laboratories1, the “High Optical Access 2” trap, henceforth referred to as HOA2 [Mau16]. The trap allows us to image the ion from two directions, one for single photon collection and one for ﬂuorescence detection, and segmented electrodes mean that multiple trap zones are possible for future work on entanglement distillation where shuttling operations are required.
3.1.1 Trap design
The HOA2 trap is a microfabricated planar linear Paul trap, with a total of 94 DC control electrodes, seen schematically in ﬁgure 3.3 and imaged in ﬁgure 3.2. The number of DC electrodes on the trap itself is much larger than this; however, in order to keep the number of control voltages to within the number available on the trap mounting package, many voltages are repeated. The central linear “quantum” region consists of 19 individually controlled electrode pairs, along with 2 electrodes that can-
 be used to produce a compensation ﬁeld. This is separated from a Y-junction at each end by “shuttling” and “transition” regions. The Y-junctions allow deterministic reordering of ion crystals.
The trap die is bow-tie shaped with an isthmus that is 1.2 mm across, allowing laser access in the surface plane with NA 0.11 perpendicular to the isthmus and NA 0.08 at 45◦ and 135◦. A 60 µm slot in the trap substrate allows imaging of the ion with NA 0.25 from underneath the trap.
1Sandia National Laboratories, Albequerque, NM, USA
26

Figure 3.2: A photograph of the HOA2 trap – the bow-tie shape of the trap die and the slot through the trap are clearly visible, allowing excellent laser access and imaging from the rear side of the trap respectively. (Image from [Mau16].)
The trap also incorporates holes for loading ions from the rear side into a region on the ends of the Y-junction. This could be useful for loading separate species into diﬀerent zones and storing them in case of ion loss in the quantum region. However, we chose to load parallel to the trap plane so that the atomic ovens would not obstruct the light cone through the slot for the rear imaging system.
3.1.2 Electrical connections and trap mounting
The trap is mounted in a zero insertion force (ZIF) socket made of PEEK2, allowing easy replacement. The ZIF socket is rigidly mounted with screws to a stainless steel plate, which itself is screwed to a stainless steel pedestal on the vacuum base ﬂange. This mechanically registers the trap to the base ﬂange, placing the trap at the centre of the vacuum chamber. The ZIF socket is soldered to a printed circuit board (PCB). This PCB has no components
2Tactic Electronics PN: 100-4680-001A
27

L07 L01 L02

L07

L01

L02

L03

L03

L04

L04

L05

L05

L08

L06

L06

L08

Y03 Y04 Y01
Y02

Y03 Y01 Y04
Y02

Y07 Y08 Y05
Y06

Y07 Y05 Y08
Y06

Q39

Y17 Y19 Y21 Y23 Y18 Y20 Y22 Y24

T1 T3 T2 T4

T5 G01 G03 G05 G07 G01 G03 G05 G07 G01 G03 G05 G07 G01 G03 Q01 Q03 Q05 Q07 Q09 Q11 Q13 Q15 Q17 Q19 Q21 Q23 Q25 Q27 Q29 Q31 Q33 Q35 Q37 G03 G01 G07 G05 G03 G01 G07 G05 G03 G01 G07 G05 G03 G01 T5 T6 G02 G04 G06 G08 G02 G04 G06 G08 G02 G04 G06 G08 G02 G04 Q02 Q04 Q06 Q08 Q10 Q12 Q14 Q16 Q18 Q20 Q22 Q24 Q26 Q28 Q30 Q32 Q34 Q36 Q38 G04 G02 G08 G06 G04 G02 G08 G06 G04 G02 G08 G06 G04 G02 T6

T3 T1 T4 T2

Y23 Y21 Y24 Y22

Y19 Y17 Y20 Y18

Q40

Y1Y413 Y1Y615

Y1Y516 Y1Y314

Y1Y009 Y1Y211

Y1Y112 Y0Y910 L1L314

L15

L15

L1L211 L1L413

28

L1L112 L0L910 L16

L1L009 L16

Figure 3.3: Schematic of the HOA2 electrode layout. Only the central region is used for trapping in this thesis. The RF trapping voltage is on the electrode leading in from the left of the schematic; the mirror electrode to this one is grounded. (Image from [Mau16].)

and serves only to carry electrical connections to the trap. A custom PEEK bodied connector3 takes the DC connections from the 100-pin Micro-D pin feedthrough to the PCB.
The ﬁrst iteration of the PCB was gold on an alumina substrate4, with palladium solder pads. This proved diﬃcult to work with, as the gold traces would wick into the solder if any solder overﬂowed the pad. This problem could easily be rectiﬁed in a future iteration with speciﬁcation of larger solder pads. However, a more signiﬁcant issue was that the high density of holes (0.05 inch spacing) for the Micro-D connector made the board fragile and vulnerable to thermal cycling, and the ﬁrst board fail-
ed with a crack across the whole connector region.
The second and ﬁnal version of the PCB was made with a laminate board5. The laminate board had its own drawbacks – being more ﬂexible led to deformation once mounted, with some traces coming very close to the (grounded) support structure, which had been designed with the rigid ceramic substrate in mind. This was not initially noticed when building the ﬁrst system, Alice, and led to shorting issues, excacerbated by the use of an aged ion pump which shed titanium ﬂakes into the system – this theory -
was conﬁrmed on Alice’s disassembly. To rectify this, for the second system, Bob, (and when rebuilding Alice) we wedged in a small strip of kapton as an insulator. We used a lead-free no-clean solder6, however, as a precaution, we cleaned ﬁrst with NaOH, then the standard cleaning procedure outlined in
3Winchester Interconnect, formerly SRI Hermetics, PN: SRIMD220-100-NP 4CMS Circuit Solutions 5Board material: Rogers RT/duroid 6002, board printed by Cirexx International Inc. 6Kester Sn 96.5 Ag 3 Cu 0.5
29

section 3.2.1. The radio-frequency (RF) trapping voltage reaches the trap mounting
PCB via a copper wire connected to a single-sided SMA feedthough7 on the base ﬂange of the vacuum system. A copper wire for grounding is directly connected to the base ﬂange metal. Bare male Sub-D pins are soldered to the PCB to which the RF and grounding wires mate with the appropriate female pin. This arrangement minimises the parasitic capacitance from the trap to ground.
An unintentional consequence of the PCB design was very poor thermal conductivity from the trap to the environment, which is problematic because the power dissipated by the RF trapping voltages will cause a rise of the trap temperature. This is undesirable since trap temperature correlates with the anomalous heating rate [BSC15], as well as causing a local increase in pressure due to outgassing which will reduce the lifetime of ion crystals. The main conduction path for the heat is through the pin-
s of the socket and then into the PCB traces, the cross-sections of which are small and poorly thermally contacted, so conduction is very poor. The HOA2 trap die incorporates a resistive aluminium wire which can be used as either a heater or for temperature measurement. The temperature rise in Bob at steady state induced by the applied RF trapping voltage was measured to be ∼ 105 ◦C. Alice’s trap was an earlier version not equipped with this wire so no measurement could be taken, although a simila-
r change can be assumed. To mitigate this eﬀect, future designs using ZIF sockets should incorporate a thermal grounding strap to contact the ceramic chip carrier.
7Allectra PN: 241-SMA50-NC
30

A ground shield 7.3 mm above the trap protects the trap zone from stray electrostatic ﬁelds from dielectric materials, i.e. the reentrant viewport, which is only 11 mm from the ion. The ground shield is a gold plated alumina substrate PCB8. A 18 mm diameter circular hole through through the PCB allows imaging with at least NA 0.6 over the entire trap region. The PCB also incorporates an open-loop microwave antenna for addressing the Calcium-43 ground levels. An SMPM connector9 on the PCB enables c-
onnection to a semi-rigid cable10 to a double-sided SMA feedthrough11 on the base ﬂange.
DC connection tester
The HOA2 trap requires 100 connections to be made from the DC feedthrough to the trap via the PCB, the manual debugging of which would be rather time consuming. A circuit was designed by Tim Ballance to test all the connections at once from the air side, and is shown schematically in ﬁgure 3.4. The trap incorporates 1 nF trench capacitors, and so by charging a capacitor and measuring the discharge time through a reference resistor, we can infer the capacitance. Any leakage resistance across the ca-
pacitor can be measured because the capacitor will not charge up to the supply voltage. Analogue switches allow each of the 100 connections to be tested in turn, as well as a reference 1 nF capacitor on the test board. Before connecting the PCB and
8CMS Circuit Solutions 9Radiall, PN: R201423110 10Assembled by Microtek Components Ltd., using Radiall PN: R201052000 (SMPM plug), Radiall PN: R127052001 (SMA 2.9 plug, silicon gasket removed) and Coax Co. Ltd., Japan, PN: SC-219/50-SC-C-PEEK (semi-rigid coaxial cable with PEEK insulation) 11Allectra PN: 242-SMAD18G
31

ANALOGUE

RREF

SWITCH NETWORK

AOUT

100K

VR+

VR-

CREF 1nF CC

CFT

RL

CTR

CABLING

VACUUM SYSTEM & TRAP

Figure 3.4: Diagram of the DC connection test circuit and trap model; AOUT is set to 1 V to charge the trap trench capacitor CTR, the feedthrough capacitance CF T and the cable capacitance CC. The voltage measured at VR− is dictated by the voltage divider formed by RREF and the leakage resistance RL. When AOUT is set to zero, the time constant is set by the capacitance and the parallel resistance to ground of the two resistances. A network of analogue switches allows each trap connection to be tes-
ted, as well as a reference capacitor included for veriﬁcation of the test process.

trap, the total capacitance of the cable and feedthrough are measured to be in the range 400–500 pF.
The analogue output AOUT is set to 1 V and the voltage allowed to stabilise for some time. At t = 0 the voltage is

VR−

=

1

·

RL RREF +

RL

,

where ideally RL → ∞ and so VR− → 1. The output is then set to zero, and the voltage decays exponentially

VR−(t) = VR−(t = 0) · exp −t/R C , where the capacitance is C = CC + CF T + CT R and the resistance is R−1 =

32

RR−E1 F + RL−1. Errors can be easily identiﬁed by looking at the value of the capacitance
or resistance to ground with the trap and PCB connected. A capacitance of 1500 pF would be considered normal (trench capacitor plus cabling and feedthrough), with inﬁnite (unmeasurable) resistance to ground. Open circuits result in just the capacitance of the cable being measured. Shorts to ground are easily identiﬁed because the capacitor does not charge, and so zero resistance to ground is measured. Shorts to neighbours are also easily identiﬁed – the trench capacitors will be connected in paral-
lel, so their capacitances add. For two neighbours the capacitance measured is 2500 pF and so on. In this way we can quickly test and debug the DC PCB.
To avoid contamination of the trap during electrical testing, we test the PCB using a sample trap with known electrical failures. By inserting the trap at diﬀerent orientations all connections can be tested.
The laminate PCB was slightly thinner than the original ceramic PCB speciﬁed during the design stage, meaning that for full engagement of the connector to the feedthrough the PCB was ﬂexed downwards. The resulting lateral force on the connector caused intermittent open circuits in the connector to feedthrough interface, which were rectiﬁed by retracting the connector slightly from full engagement.
3.1.3 DC supply and ﬁltering
The DC voltages for the trap electrodes are produced by up to three 32channel 16-bit DACs12. For this work only one DAC is used, controlling the
12ARTIQ Sinara hardware: Zotino
33

central 15 pairs of electrodes and the two compensation electrodes, with all other DC electrodes grounded. The DAC outputs are ﬁltered, however, due to the large length of cabling between the DAC and the trap a dedicated ﬁlter board (designed by Chris Ballance) was placed closer to the trap. One SCSI cable13 per DAC connects the DACs to the ﬁlter board
The ﬁlter board is mounted as close as possible to the feedthrough to minimise the remaining cable length that can pick up electrical noise. The cable to the feedthrough is a 30 cm shielded 2×50-pin Sub-D to 100-pin Micro-D cable14. The ﬁlter circuit is a second order RC low-pass ﬁlter15. On one of the compensation elecrodes (Q40) and one pair of centre region electrodes (Q16 and Q18) a 20 pF capacitor bypasses the ﬁlter to allow an RF voltage to be coupled via a transformer16 to the electrode. Th-
is allows excitation of the secular motion and hence determination of the secular trap frequencies.
3.1.4 Trap RF supply
In order to achieve stable conﬁnement in a Paul trap, an appropriate choice of frequency and voltage of the driving RF voltage must be made [Pau90]. Ideally, we would like to achieve stable conﬁnement for both Strontium-88 and Calcium-43, with a secular frequency of around 4 MHz for Strontium-88 – with this in mind, an appropriate target is 230 V zero-to-peak amplitude at 60 MHz.
13Stonewall Cable, PN: 800-523-3303 14Custom assembly from Axon’ Cable S.A.S. 15490 Ω, 1 nF 16Coilcraft WBC1-1LB
34

Vout/Vin Vout/Vpickoﬀ f0/MHz FWHM/kHz Q

Alice 10.4

73

Bob 8.8

57

28.8

497

57.9

50.3

1355

37.1

Table 3.1: Toroidal resonator parameters for Alice and Bob. Vout/Vin is the step-up ratio and Vout/Vpickoﬀ the ratio of the pick-oﬀ voltage to the voltage at the trap. The centre frequency f0, full-width half-maximum (FWHM) and Q values of the resonance are also listed.

We achieve trapping RF voltages with a resonant transformer impedance matching the (approximately capacitative) trap to the standard 50 Ω RF sources. The transformer is wound on a toroidal carbonyl iron powder core17. Each resonator includes a capacitive pickoﬀ (shown in ﬁgure 3.5) to enable monitoring the RF output voltage in situ with an oscilloscope. The S11 parameter of the transformer connected to the trap is measured over the resonance to determine its properties; these results are summarise-
d in table 3.1. The capacitive pickoﬀ was 50 Ω terminated for these measurements. The pickoﬀ ratio (which is independent of the resonance properties) was measured at multiple frequencies near the resonance with both the transformer’s output and the pickoﬀ measured on an oscilloscope, and found to be independent of frequency over the small range of frequencies near resonance.
We did not achieve the target parameters in either trap, resulting in Alice being unable to trap Strontium-88 and Calcium-43 simultaneously. Trap secular frequencies for Strontium-88were 4.4–4.8 MHz in Alice, and 2.5–3.1 MHz in Bob.
The trap RF originates from a direct digital synthesiser18 (DDS), passes
17Micrometals T50-17 18ARTIQ Sinara hardware: Urukul

35

through a mixing circuit with an auxiliary input, and then is ampliﬁed19 before connecting to the toroidal resonator.
The mixing circuit, shown in detail in ﬁgure 3.5, is used for micromotion compensation by ‘parametric excitation’ [KPBM15]. It consists of a power splitter20, mixer21 and directional coupler22, and allows sidebands to be added to the RF supply, amplitude modulating the RF voltage at the sideband difference frequency. This amplitude modulation translates into a modulation of the secular frequency; if the ion is at the centre of the RF pseudo-potential well, then the net force on it is zero, but if -
it is displaced from the centre, then it experiences a force proportional to the displacement, oscillating at the modulation frequency [ITU11]. Either the change in ﬂuorescence due to heating [TMA+12] or the correlations of photon arrival times [Elt13] can be used as a signal for reducing the excess micromotion.
3.2 Vacuum system
Ion trapping in general requires very high quality vacuum conditions, since collisions with background gas are undesirable regardless of the application. Collisions can cause decoherence, ion loss and, in multi-ion chains, reordering of the crystal [WMI+98, ASS+10]. We built two vacuum systems, necessitating a design that could be assembled to achieve a high standard of vacuum quickly and eﬃciently.
19MiniCircuits ZHL-03-5WH+ 20ZFSC-2-4-S+ (Alice, 0.2–1000 MHz) or MiniCircuits ZFSC-2-1S+ (Bob, 5–500 MHz) 21MiniCircuits ZP-3MH-S+ 22MiniCircuits ZFDC-20-3-S+
36

AD9910

DIGITAL STEP ATTENUATOR

SWITCH DRIVE

AD9910

DIGITAL STEP ATTENUATOR

SWITCH MOD

URUKUL (4ch DDS)

POWER SPLITTER
-3dBm

DIRECTIONAL COUPLER

RF AMPLIFIER

-3dBm

LO

IF

RF

-20dBm
MIXING CIRCUIT

FREQUENCY MIXER

2.2pF 100pF

TOROIDAL RESONATOR

TO OSCILLOSCOPE

Figure 3.5: The trap RF chain. The mixing circuit (components listed in main text) allows a small amplitude modulation of the RF voltage for parametric excitation. A capacitive pickoﬀ is used to monitor the output voltage of the toroid with an oscilloscope.
The trap is housed at the centre of a 6 inch “spherical octagon” chamber23,
with two CF100 ports and eight CF40 ports. Six CF40 anti-reﬂective (AR)
coated viewports24 allow laser access at ±45◦, ±90◦ and ±135◦ to the trap’s
longitudinal axis. A re-entrant CF100 viewport25 allows optical access to the
front side of the trap with the short working distance (∼ 17 mm) required by
the high NA lens.
The CF100 ﬂange26 at the rear side of the trap is custom designed, with
two DC feedthroughs (100-pin Micro-D for DC trap voltages, 15-pin Micro-
23Kimball Physics PN: MCF600-SphOct-F2C8, 316L stainless steel 24Allectra PN: 190-65931-3. Per surface reﬂectance: R < 0.25 % at 397 nm and 422 nm, R < 0.35 % at 674 nm and 729 nm, R < 1 % at 375 nm, 393 nm, 408 nm, 423 nm and 461 nm, R < 5 % at 850 nm, 854 nm, 866 nm, 1004 nm, 1033 nm and 1092 nm and R < 10 % over 375–1092 nm 25Custom made by Torr Scientiﬁc 26Allectra PN: 190-62056-5
37

D for oven current and thermocouple monitoring), two SMA feedthroughs (for trap RF and microwave access) and with an AR coated viewport (same clear aperture and coating as the CF40 viewports above). This ﬂange also incorporates threaded holes for mounting both the trap pedestal and atomic oven subassemblies; mounting all the internal elements in this way allows the assembly to be conducted on the ﬂange rather than inside the vacuum system, with the result shown in ﬁgure 3.6. After the assembly on -
the base ﬂange is complete, it can be simply lifted (using a lab jack) into the vacuum system. Three lengths of studding threaded into the tapped CF holes of the octagon locate in the through holes of the base ﬂange to ensure that it is well aligned to the octagon during the lifting procedure. This eases the process of initial assembly, as well as maintenance such as trap replacement.
Throughout the assembly procedure and baking, the vacuum system is mounted on a welded steel cradle via M6 tapped holes in the spherical octagon. The cradle forms a stable base to work on the vacuum system, with handles to lift the system without stressing any of the CF joints or inadvertently knocking delicate windows or feedthroughs. The cradle also elevates the system to allow the base ﬂange assembly to be inserted from below with a lab jack.
3.2.1 Assembly and baking
Achieving ultra-high vacuum (UHV) pressures of 1 × 10−12 mbar requires careful preparation of all in-vacuum parts. The general cleaning procedure was a four-stage process, using an ultrasonic bath to agitate the parts for
38

Figure 3.6: Render of the vacuum ﬂange assembly, incorporating all necessary feedthroughs, and mechanically mounting all internal components of the vacuum system. The rear view illustrates the window for imaging the ion through the trap slot.
39

5–10 min. Between each stage the parts are rinsed in de-ionised (DI) water. The stages are as follows:
• detergent solution27
• phosphoric acid & detergent solution28
• HPLC grade acetone
• DI water.
The ceramic PCBs were cleaned by gently swilling in HPLC grade acetone, then isopropanol, and ﬁnally DI water. Viewports are supplied clean and cannot be ultrasonically cleaned as they would be damaged. Vacuum valves also cannot be cleaned without disassembly because of the lubricant for the drive screw.
Outgassing from stainless steel parts can be reduced by baking in air at high temperatures before vacuum assembly [WHWM97]. This forms an oxide skin inhibiting the rate of H2 outgassing from the bulk of the metal. We baked all stainless steel parts for a minimum of 4 h at 450 ◦C.
The stainless steel parts were then assembled with the pumps and vacuum gauge, along with blank ﬂanges in place of the viewports, and “hard baked” at 350 ◦C under vacuum. This reduces the outgassing rate of the chamber [CL67], allowing lower ultimate pressures.
The trap itself can only be baked for a limited amount of time because of the formation of “purple plague”, where a brittle alloy is formed at the interface of the gold bond wires and aluminium pads, greatly reducing the
27Decon neutracon R , diluted to ∼ 3 % 28Trimite Deoxidine 624, diluted to ∼ 10 %
40

strength of the bonds [Che67]. Thus, we perform a trial bake, incorporating all components aside the trap and the atomic source metal. We bake at 200 ◦C for approximately one week – this bake’s pressure is initally dominated by the water absorbed by the PCB during the cleaning process. If a satisfactory pressure (about 1 × 10−7 mbar at 200 ◦C) is not reached after a week, this allows us to attempt to diagnose the cause without having wasted a trap.
Finally, the trap is inserted into the ZIF socket, the atomic ovens are ﬁlled and crimped, and the vacuum system is baked again at 200 ◦C for no more than 7 days, or until the rate of pressure decrease has stagnated. During all bakes, the pumps and gauges were degassed appropriately as described in section 3.2.2.
3.2.2 Pumping
Multiple technologies exist for pumping at ultra-high vacuum, no single one of which can pump all gases. Sputter ion pumps are eﬀective at pumping most gases, but ineﬀective for pumping hydrogen, so should be used in conjuction with another pump [Sin71]. Titatium sublimation pumps (TSPs) evaporate titanium onto the walls of the vacuum chamber, which captures chemically reactive gases, but not noble gases or methane. Non-evaporable getters (NEGs) adsorb gases at the surface, but also employ gas diﬀ-
usion into the bulk of the material. NEGs do not pump noble gases or hydrocarbons.
The initial design utilised a combined ion pump and NEG unit29. However, we found analysis of the residual gas traces during the bakeout diﬃcult while activating the NEG as the hydrogen and methane partial pressures in-
29SAES NEXTorr D200-5
41

creased greatly. Despite good pressures when used with previous systems30,
the ultimate pressure after the trial bake was unsatisfactory. This design con-
tains considerably more kapton and PEEK than the previous system, so the
greater outgassing of these may have been the reason for the higher pressure. The design was modiﬁed to add an extra ion pump31. Unfortunately this
ion pump had already seen considerable use – unbeknownst to us it contained
a signiﬁcant amount of titanium ﬂakes, which caused electrical problems later
on as described in section 3.1.2. However, the additional pump did result in
a good ultimate pressure, below the X-ray limit of the nude Bayard-Alpert guage32 used to monitor the system pressure.
For the assembly of the second system (Bob), a third pump system was produced using an ion pump33 and TSP34, mounted to a custom welded chamber35. The welded chamber is more compact than an assembly from
oﬀ-the-shelf components, as well as reducing the number of potential leak
points and weight while remaining lower in cost. Alice was later converted to a copy of this design, with a new ion pump36.
In addition to the main pump systems, small metal strips with getter material ﬁxed on both sides37 were added, one surrounding the metalwork of the reentrant viewport and spot-welded to two “groove grabbers”38, and the
other screwed to the blank CF40 ﬂange at the bottom of the system, near
30Used in the most recent “blade” trap experiment 31Varian VacIon Plus 20 Diode (20 l s−1) 32Varian UHV-24p, X-ray limit 5 × 10−12 mbar 33Varian VacIon Plus 20 Triode (20 l s−1) 34Gamma Vacuum 3-ﬁlament TSP cartridge, PN: 360819 35Supplied by Scanwel Ltd 36Varian VacIon Plus 20 Diode (20 l s−1) 37St707/CTAM/30D 38Kimball Physics, PN: MCF600-GrvGrb-C01
42

the atomic ovens. These are activated passively during the bakeout.
3.2.3 Atomic ovens
A new atomic source was designed by Tim Ballance and characterised extensively in a test vacuum system [BGN+18]. Neutral atoms are delivered to the trap zone by resistive heating of stainless steel tubes containing either calcium or strontium. The distinguishing feature of this design is the inclusion of K-type thermocouples spot-welded close to the oven apertures. This allows closed-loop control of the oven temperature (using a dedicated microcontroller to regulate the current supplied), meaning -
that the ovens can be rapidly heated to their operating temperature. The typical time to produce an appreciable neutral ﬂux is thus reduced from 2–5 min with constant current atomic ovens to around 15 s, enabling much faster loading times. Since the long-term goal of the trap systems is to be used with multi-ion chains, which can be subject to loss events every few minutes, this is vital to improving the experiment duty cycle.
The atomic sources are designed as an easily repeatable assembly. Stainless steel ﬂexure clamps hold the ends of the oven tubes and act as the electrical contacts, while a ceramic39 back piece provides the mounting point for the ﬂexure clamps. Holes in the ceramic back act as collimation apertures for the atomic beam.
Current to the ovens is supplied through the 15-pin Micro-D feedthrough in the base ﬂange, via a Micro-D pig tail assembly40, which is also used for
39Boron nitride was used; this has a higher thermal conductivity than Macor, undesirable for this use case, but better machining properties.
40Winchester Interconnect, formerly SRI Hermetics, PN: SRIMD204-15-9
43

the thermocouple voltages. To minimise the possibility of contaminating the base ﬂange, the wiring of the ovens was completed on an aluminium jig before transferring the completed assembly onto the base ﬂange.
A glass slide was balanced in front of the oven during bakeout and during “cracking” of the atomic oven [All11] to reduce the risk of plating the trap. In Alice, the temperature used in the initial heat treatment of the strontium oven was too conservative and so cracking was not observed until the glass slide had already been removed (by tilting the vacuum system until the slide fell). Cracking of Alice’s strontium oven occured at an indicated temperature of 430 ◦C, while Bob’s occurred at 475 ◦C.
The operational temperature of the ovens is approximately 230–300 ◦C for both calcium and strontium. We would expect that for strontium a given vapour pressure (and hence neutral atom ﬂux) would be achieved at a substantially lower temperature [AIH84], so it seems that the temperature reading from the thermocouple is not a good absolute measure of the temperature of the source metal, probably due to variations in the distribution of source metal within the oven tube. The indicated temperature is, -
however, repeatable on a per oven basis and so can be used for neutral ﬂux regulation.
We elected not to use the loading holes (see section 3.1.1) in favour of loading from the side of the trap. This did result in some plating of the trap in Bob, causing ohmic shorts to ground of some DC electrodes, the lowest resistance of which was measured (both with the trap electrode tester and a digital multimeter) as 32.3 kΩ. This resistance is high enough that the DAC supplying the DC trap voltages (of order 1 V) is not sourcing signiﬁcant amounts of current and so does not experience voltag-
e drop. However, it is
44

unclear what the implications are for the micromotion environment or heating rate due to surface eﬀects. The resistance to ground was not observed to change after a signiﬁcant time running the ovens at their usual temperature, so it is likely that the plating was a one-oﬀ event while attempting to crack the ovens. Plating was not observed in Alice, so it is possible that Bob’s ovens were poorly aligned and plating can be avoided with good alignment, however, loading holes remain the preferred way -
of mitigating this issue.
In operation, a frequency oﬀset of ∼ 50 MHz in peak neutral ﬂuorescence of strontium (and hence optimal loading frequency) between the two systems was observed. This is due to a Doppler shift from the the atomic beam not being directly perpendicular to the laser beam, as the two oven tubes are separated by 4 mm. Since both systems were constructed identically but the beams are in a mirrored conﬁguration, the sign of this shift is reversed thus causing an oﬀset between the systems. A rough estimate-
 of the diﬀerence in frequency (using the modal velocity of the Maxwell-Boltzmann distribution at the oven temperature indicated) is around 60 MHz for strontium, in agreement with the measured value. This oﬀset is larger than the linewidth of the neutral feature, and so to load each system the laser frequency must be tuned on resonance. While this is not overly arduous, the laser in question can be only be tuned globally, so loading simultaneously in both traps was not possible. Therefore, when Al-
ice’s trap was replaced, the ovens were also reﬁlled in a mirror conﬁguration to eliminate this oﬀset.
45

3.2.4 Vacuum mounting structure
The vacuum system is mounted vertically between two 10 mm thick stainless steel plates, which are fastened to the vacuum system via eight M6 screws apiece. These plates attach to a base plate which screws directly to the optical table. The side plates have mounting points for the ﬁnal delivery optics as well as the magnetic ﬁeld coils, which can be mounted in two mirrored orientations.
3.3 Magnetic ﬁeld coils
Magnetic ﬁeld is provided by three orthogonal pairs of coils, wound in-house41 using 0.9 mm enamelled round copper wire. The windings are split into unequal windings, allowing a variety of conﬁgurations, with the properties summarised in table 3.2 For initial experiments, the inner windings of each pair were used in Helmholtz conﬁguration to provide the quantisation ﬁeld and trim its direction.
Current is supplied by a single channel current supply42 for the main coil and one channel each of a triple-channel supply43 for the trim coils – for the output range selected (500 mA), the speciﬁed current noise is 20 µA. The typical ﬁeld strength used is 0.561 mT at a main coil current of 240 mA. The magnetic ﬁelds of the two vacuum systems are at right angles to each other in the lab frame; one of the systems (Bob) required no trim currents, suggesting that its ﬁeld was aligned close to the lab-
’s magnetic ﬁeld. The magnitude of
41With thanks to Tony Hickman 42TTi QL355P 43TTi QL355TP
46

Coil

N

Main Inner

324

Main Outer

96

Circular Trim Inner 128 Circular Trim Outer 76

Square Trim Inner 195 Square Trim Outer 96

d (mm) Sensitivity (mT A−1)

65.5

2.30

0.68

52.8

1.14

0.68

129.5

0.33

0.17

Table 3.2: Magnetic ﬁeld coil speciﬁcations. N gives a median value of the turns per coil (two pairs of each coil type were produced). The displacement d is from the centre of the coil to the ion position, and the sensitivity is calculated by integration of Biot-Savart’s Law, assuming a pair of coils wired in series.

Earth’s magnetic ﬁeld in London is around 0.047 mT [BCM00] – a “square” trim coil current (see ﬁgure 3.9 and table 3.2) of 142 mA would be needed to correct this if aligned exactly in that direction. Alice’s square trim coil current was ∼ 400 mA, with a circular trim coil current < 50 mA.

3.4 Experimental Control
Experimental control is entirely conducted via the ARTIQ44 framework. This is an open-source control system consisting both of hardware and software designed speciﬁcally for quantum information experiments. A high level programming language based on Python is used to write experiments, which can contain real-time sections with strict timing requirements, called kernels, and sections with slacker requirements. The kernels are compiled and executed on an FPGA, while the slack sections are executed o-
n the “host”
44M-Labs, Advanced Real-Time Infrastructure for Quantum Physics, DOI: 10.5281/zenodo.1492176, version 4.0
47

computer CPU. We use ARTIQ’s Sinara hardware family45 for handling real time operations in experiments.
The Sinara family consists of several commonly used generic devices of an atomic physics experiment, of which this experiment uses:
Kasli: The main FPGA carrier used to control the other Sinara devices, executing TTL pulse sequences and handling input events such as photon detection. The Distributed Real-Time Input Output (DRTIO) protocol, transmitted over optical ﬁbre links, allows the “core” Kasli device to delegate control to up to two “slave” Kasli devices. The core device is connected to the host computer by a Gigabit Ethernet link.
Urukul: Frequency synthesiser using four Direct Digital Synthesiser (DDS) chips46 allowing frequency (sub-hertz resolution), phase and amplitude control of signals with an analogue bandwidth of 400 MHz, and a frequency update rate of 500 kHz. The Urukul also incorporates per-channel digital attenuation in 0.5 dB steps to −31.5 dB and RF switches. The Urukuls in this experiment are used to generate RF for the acousto-optic modulators (AOMs) and the trap RF.
Zotino: 32-channel, 16-bit Digital-to-Analogue Converter (DAC) with an update rate of 1 MSPS, used for the DC trapping voltages.
Sampler: 8-channel, 16-bit Analogue-to-Digital Converter (ADC) with an update rate of 1.5 MSPS. The Sampler can be used in combination
45https://m-labs.hk/experiment-control/sinara-core/ 46AD9910 variant used
48

with the Urukul to stabilise laser amplitudes – this was implemented after data collection of this thesis.
TTL I/O: 8 channel isolated digital input/output device, for simple TTL signals. Used for controlling dedicated RF switches and to detect input events from photon detectors.
Clocker: Clock distribution module – to synchronise the Kasli core devices of Alice and Bob.
The above devices are all designed to mount in a Eurocard 3U subrack, and connect to the Kasli using standard IDC ribbon cables – all input/output events are ultimately managed by and synchronised to the Kasli.
Other hardware devices which are normally controlled by a computer can be used during experiments by writing ARTIQ drivers. This allows any computer that has a network connection to the host computer to provide a remote procedure call (RPC) interface to the underlying device. These RPCs are subject to network and other latencies (for example USB communication) so cannot be considered real time.
3.5 Laser systems
A combination of extended cavity diode lasers47 and Ti:Sapphire lasers are used in our experiment. Note that the same lasers are used simultaneously for both traps, necessitating a method of independently tuning the optical frequency at the trap. A small amount of light from each laser (except the
47Toptica DLPro with DLC pro controllers, unless otherwise noted
49

pulsed 422 nm and 378 nm lasers) is directed towards a diagnostic system consisting of optical spectrum analysers48 and a wavelength meter49. The laser to be monitored is selected using a ﬁbre switch50. The switch and diagnostic system are mounted in a standard 19-inch server rack to save space.
3.5.1 Diode lasers
For cooling, state preparation and readout in strontium we have 3 lasers (422 nm, 1033 nm and 1092 nm), and for calcium we have 5 lasers (393 nm, 397 nm, 850 nm, 854 nm and 866 nm). The strontium lasers, the 397 nm laser and their controllers are mounted in drawers [Nou16] in a 19-inch rack, while the remaining diode lasers were used in a pre-existing experiment and set up on a dedicated optical table [Sch18].
Six of the lasers (422 nm, 1092 nm, 393 nm, 397 nm, 850 nm and 866 nm) are frequency stabilised by Pound-Drever-Hall (PDH) locks to low-drift, tunable reference cavities51. The frequency can be tuned by adjusting the highvoltage supply52 for the piezo-electric cavity mirror mounts. However, we restrict this tuning to infrequent coarse adjustments since the relaxation of the piezo-electric material [Arl82] will cause slow drifts of the laser frequency. Fine-tuning is performed with the AOM networks-
 described in section 3.5.3.
Diode lasers for photoionisation (PI) were already set up and shared between multiple experiments in the lab. The 461 nm and 423 nm lasers provide
48Red lasers: Toptica, FPI-100-0980-1 Blue lasers: Thorlabs, SA200-3B 49HighFinesse WS7 50Leoni FiberSwitch 1x16 51NPL Low Drift Etalon or Stable Laser systems, SLS-NPLcav-3 52Thorlabs MDT693B
50

the ﬁrst step of the two-photon ionisation process for strontium and calcium
respectively. These lasers can be coarsely frequency tuned and stabilised
with a PID loop acting on the measured frequency from the diagnostic sys-
tem, allowing automation of the isotope-selective loading process. A 378 nm laser53 completes the excitation into the continuum for both strontium and
calcium. All three of the PI lasers are coupled into the same optical ﬁbre
to the experiment, and individually switched with mechanical shutters. The single board computer (SBC)54 operating the shutters exposes an ARTIQ
RPC interface so that the loading process can be entirely ARTIQ controlled.
3.5.2 Ti:Sapphire lasers
Multiple Ti:Sapphire lasers are shared between the experiments in this lab. Of these, two are used for operations with strontium in this thesis 55.
A mode-locked Ti:Sapphire56 produces a train of 844 nm pulses at 80 MHz,
with a pulse duration of approximately 8 ps. An electro-optical “pulse picker”,
built and extensively characterised by David Nadlinger [Nad17], allows se-
lection of single pulses with good extinction at short timescales. The pulse is picked approximately 200 ns57 after the TTL input trigger signal to the
53Toptica iBeam 54BeagleBone Black 55A further pair of frequency doubled Ti:Sapphire lasers can be to used to perform twophoton Raman transitions in both calcium and strontium. The slave is phase locked to the master with light picked oﬀ before the doubling cavity. Vera Sch¨afer’s thesis [Sch18] contains a more detailed overview; these lasers were not used in this work, but will be used for future mixed-species operations in this apparatus. 56Spectra Physics Tsunami 10ps HP, pumped by Spectra Phys-
ics Millenia eV 25 57This time is between the input signal and the pulse as measured at the exit of the pulse picker, and does not include any of the signal/optical delays present in the experimental setup used. The measured latency between the TTL signal and an optical pulse at the trap in the experiment is 372 ns.
51

pulse picker to allow a safe high-voltage switching sequence of the Pockels cell. There is an inherent 12.5 ns jitter in the timing of the pulse because of the repetition rate of the pulses; a comparator circuit monitors a bare photodiode to detect the laser pulse and provide a reference TTL signal for the experiment at the time of the pulse58. The pulse then passes through a second-harmonic generation (SHG) stage to produce the 422 nm light needed to excite the 5 2S1/2 ↔ 5 2P1/2 transition. The l-
ight is split to two AOMs and coupled into ﬁbres to each trap. The AOMs provide additional extinction at long timescales, but cannot be switched quickly enough to select individual pulses.
The 674 nm light to excite the 5 2S1/2 ↔ 4 2D5/2 quadrupole transition of strontium is provided by a commercially stabilised59 Ti:Sapphire laser60. This system is speciﬁed to have less than 10 Hz linewidth, measured over 1 s. The laser is oﬀset sideband locked to a high-ﬁnesse cavity; long-term drifts of the cavity are compensated with a feed-forward on the oﬀset frequency applied to the electro-optic modulator used in the lock. The absolute frequency drift was measured in September 2017 to be 17.-
2 kHz d−1 [Nad17]. By April 2019 this had reduced to 7.27 kHz d−1.
3.5.3 AOM switching and frequency tuning
Acousto-optic modulators (AOMs) oﬀer a standard way of switching laser beams in atomic, molecular and optical physics experiments. Only when an RF tone is applied to the AOM will it deﬂect the laser beam so that
58The circuit introduces a latency of 6 ns, measured at its output. 59Stable Laser Systems 60M Squared SolsTiS
52

is is coupled into the output ﬁbre towards the trap. By varying the frequency of the RF tone, the frequency of the diﬀracted light can be tuned – allowing us to operate the two traps with independent laser frequencies. However, varying the frequency changes the angle of the diﬀracted beam. Using AOMs in a double-pass conﬁguration allows the pointing change to be eliminated [DHL+05] at the expense of reducing the absolute laser power available. For single-pass conﬁgurations, coupling the output int-
o a ﬁbre will transform beam pointing variations into power variations. Power ﬂuctuations can be compensated with a PID loop using photodiodes to monitor the power after the ﬁbre and feeding back on to the AOM RF drive amplitude – this was not yet implemented for the work presented in this thesis.
A reconﬁgurable breadboard to house each diode laser’s AOM setup was designed by Tim Ballance. The use of compact 0.5-inch optics reduced the size scale considerably compared to previous experiments, and allowed the 10 breadboards to be mounted in a second 19-inch server rack, along with the Urukul hardware and ampliﬁers61 supplying the RF. Some conﬁgurations are used for simply switching the beams. Others, for example the 422 nm breadboard (shown in ﬁgure 3.7), have two outputs, one of which has -
two frequency components handled by separate AOMs. Focussed AOMs are used62 for faster switcher times, with the detrimental side eﬀect of Rayleigh scattering of the beam in the AOM reducing extinction. The breadboard used ﬁbre collimators with 5 degrees of freedom63. These were chosen because the mechanical design allowed easy mounting, however, the unnecessary number of
61ARTIQ Sinara hardware: Booster 62UV wavelengths: ISOMET 1250C-829A, IR wavelengths: ISOMET 1206C 63Thorlabs FiberPort, various models for diﬀerent wavelengths
53

degrees of freedom complicated the already time-consuming task of aligning the breadboards. A more prudent choice for future iterations would be ﬁxed collimators, since all the required degrees of freedom are already included with components on the breadboard.
The AOM network for the 674 nm light is mounted on the optical table near to the traps, and splits the supply from the laser towards the two traps. Single- and double-pass conﬁguration focussed AOMs64 are used for each trap beam path; the double-pass allows frequency tuning, while the singlepass oﬀers faster switching, with the layout shown in ﬁgure 3.8. The outputs are coupled into short ﬁbres to the ﬁnal beam delivery optics.
Another AOM network for the calcium Raman beams is mounted on a breadboard on the trap table, built by Shuoming An. This was not used within the scope of this work, although at the time of writing Raman manipulations of Calcium-43 were being performed in one of the traps.
3.6 Trap beam paths
The ﬁnal stage of the beam delivery is as short and simple as possible to minimise any beam pointing drifts. A generic beam path will consist at most of the following exhaustive set of optical elements:
Fibre collimator: provides a collimated beam; with an adjustable focal length this allows ﬁne tuning of the focus position at the ion
Polarising element: ensures stable polarisation by transforming po-
64ISOMET 1205C-848
54

AOM0

FROM 422nm LASER

λ⁄4

λ⁄2

RF

50:50

AOM1

TO DOPPLER COOLING

λ⁄2

AOM2

TO STATE PREP

AOM3

AOM

PBS

NPBS

LENS

MIRROR WAVEPLATE

BEAM DUMP

FIBRE COUPLER

Figure 3.7: Diagram of the 422 nm AOM breadboard setup. A double-pass AOM allows for large common mode frequency tuning of the two output beam paths. Two single-pass AOMs are combined at the ﬁrst output, which is used for the Doppler cooling beam – note that one of the AOMs is used in the ﬁrst order and one in negative ﬁrst order, to give a ∼ 400 MHz frequency diﬀerence between the two components. This far detuned beam is for additional cooling far from resonance when loading multi-ion crystals. T-
he second output is served by its own single-pass AOM and used for the σ−-polarised state preparation beam.
This diagram and others make extensive use of the ComponentLibrary by Alexander
Franzen, licensed under CC BY-NC 3.0.

55

BOB AOMs

DOUBLE-PASS
λ⁄4

λ⁄2
AOM PBS LENS MIRROR WAVEPLATE BEAM DUMP FIBRE COUPLER

FROM 674nm LASER

TO ALICE

SINGLE-PASS RF

Figure 3.8: Diagram of the 674 nm AOM layout; the duplicated section for Bob is omitted.

larisation ﬂuctuations into power ﬂuctuations, usually a PBS65

Photodiode pickoﬀ: a low reﬂectance beam splitter to divert some power to a photodiode, for power stabilisation (not implemented for this work, but pickoﬀs were in place)

Two steering mirrors: enable each beam to be steered independently onto the ion

Polarisation control: i.e. waveplates to transform the polarisation from linear if necessary

Dichroic mirrors: combine diﬀerent wavelengths of laser light along the same beam path

Focussing optics: focus the nominally collimated beams at the ion.
65Thorlabs PBS121/PBS122/PBS123 depending on wavelength

56

674

SQUARTERIM

B

ROUND TRIM

422ps (σ+)

MAIN

Sr

Ca

422σ378/461
1033/1092

ALICE

422π

Figure 3.9: Schematic of 88Sr+ beam paths, shown from the high numerical aperture imaging side for Alice. Where two wavelengths are separated by a slash, they are brought to the trap table down the same optical ﬁbre. The magnetic ﬁeld coils are shown; the applied ﬁeld direction lies along the teal arrow, while trim adjustments are made along the pink arrow with the “square” coils and perpendicular to the plane of the diagram with the orange “round” coils. Bob’s beam layout and ﬁeld direction are m-
irrored so that the majority of the ‘coherent’ beams (674 nm for strontium, and Raman beams eventually for calcium) for the two traps are placed adjacently on the optical table.

57

For some beam paths requiring additional polarisation purity, an additional Glan-Laser polariser66 is used. Given the large number of beams per trap and the need for compactness, a monolithic mount was designed by David Nadlinger to mount the ﬁbre collimator, PBS cube, pickoﬀ, photodiode67 and the ﬁrst steering mirror in an assembly approximately 130 mm in length.
Figure 3.9 shows a schematic view of the ﬁnal beam geometry for Alice, with the trap orientation also shown. Imaging from both the front and rear sides of the trap necessarily places the trap plane vertical68, posing two problems. The ﬁrst is that there are three heights at which beams enter the vacuum system, and so the upper two levels are placed on breadboards, elevated from the optical table on stainless-steel posts. The second is that some beams are oriented at 45◦ to the horizontal; this is -
discussed below in section 3.6.1. Bob’s beam paths (and magnetic ﬁeld) are a mirror image of Alice’s, in order to place as many of the beam paths for coherent manipulations as close as possible to each other and the AOM networks supplying the light.
The focussing elements for all beams (except PI beams) consist of a f = −150 mm meniscus lens69, separated by 150 mm from a f = +100 mm plano-convex lens70. This forms a system with an eﬀective focal length of 75 mm, but with a back focal distance of 150 mm. This allows relatively small diameter collimated beams to be focussed to small spot sizes at the ion, while
66Thorlabs GLB-10 67QLNPD, designed by David Nadlinger 68Clearly other orientations are possible, but large horizontal dimensions are generally easier to work with than vertical ones! 69Thorlabs LF4370-UV 70Thorlabs LA4380-A
58

still being able to position the ﬁnal lens outside the vacuum system. The PI beams are focussed with a single f = 150 mm plano-convex lens71. The 422 nm and 674 nm beams have a 1/e2 beam radius of about 25 µm, while the 1092 nm and 1033 nm beam has a radius of ∼ 40 µm.
The ﬁnal positioning of the pulsed laser beam is performed using a motorised “Picomotor” mirror mount72. This uses the stick-slip phenomenon to directly turn the actuator screws in small increments rather than mounting the mirror directly on piezo-electric actuators, which can suﬀer from relaxation.
3.6.1 Fixed ﬁnal mirrors
The orientation of the vacuum system means that four beam paths enter the vacuum system at 45◦ to the optical table, two of which must be placed on breadboards to elevate them to the required position. One solution could be to use a vertical breadboard, pre-position the optical elements and ﬁnalise alignment in situ, however, this makes it diﬃcult to reposition components. Therefore we place all elements on horizontal breadboards or the optical table and use a ﬁxed arrangement of mirrors to create-
 the angle required.
A single mirror can be used to take the beam from horizontal to 45◦, and would be the simplest solution. However, it is convenient to keep the principal axes of the adjusting mirrors to those of the trap so that adjusting the position of the beam across the trap surface requires turning only one adjuster and not both simultaneously. If using only a single mirror, and imposing the
71Thorlabs LA4874-A 72Newport New Focus 8821
59

Figure 3.10: Photograph of the ﬁxed ﬁnal mirror setup, including the 3D printed servo mirror to perform beam alignment described in section 3.6.2.
constraint that the angle of incidence on the mirror must not exceed 45◦, this requires that the beams propagate outward from the centreline of the system to the mirror before being reﬂected upwards, clearly an impractical solution. Using two mirrors in the conﬁguration shown in ﬁgure 3.10 allows the beam to originate from the front or rear side of the vacuum system. The mirrors73 are glued to ﬁxed mounts74, which attach to a custom machined stainless steel “tombstone”. This part has mirror symmet-
ry so can be conﬁgured in two orientations, and has dowel pins for accurate location when attaching to the vacuum system mounting structure. It also holds the ﬁnal focussing lens in a slotted mount75, with several threaded holes available for coarse positioning. A through hole allows an optional waveplate to be mounted in a high-precision rotation mount76, or an iris for initial alignment.
Usually, one would mount waveplates after any mirrors in the beam path. This ensures that the light at the mirror surface is either p- or s-polarised,
73Semrock BBDM 74Thorlabs Polaris C1G 75Thorlabs Polaris L1G 76Thorlabs PRM05
60

so that any polarisation dependence of the mirror does not change the polarisation of the reﬂected beam. The ﬁxed mirror arrangement means that it is easier to have the waveplates before the ﬁnal mirrors, and so the beam may be circularly polarised at the mirror. The birefringence of the mirrors was tested for thermal stability over 10 ◦C at 422 nm and found to have negligible thermal dependence. Unfortunately we did not check the wavelength dependence of the birefringence – this was later found t-
o be signiﬁcant when using 393 nm and 397 nm copropagating circularly polarised beams for state preparation of Calcium-43. These beams are delivered down the same optical ﬁbre, so any polarising element aﬀects both beams. Using the optional waveplate mounting point for a λ/4 waveplate, the polarisation of the light at the mirrors was kept close to linear on one of the mirror’s axes, mitigating this eﬀect.
3.6.2 Alignment onto ions
The initial alignment of the beams must be conducted without any ions in the trap, the procedure for which is largely similar to that described by David Allcock [All11]. The initial alignment is performed before the insertion of the focussing lenses, using irises ﬁxed to the ﬁnal mirror assembly, ensuring that the beam is approximately parallel to the trap surface and centred on the vacuum windows. For most beams this is not critical; however, the orientation of the state preparation beams is ﬁxed-
 indirectly by the reentrant vacuum window77, so we try to perform this alignment as well as possible. A
77The imaging axis is ﬁxed by the reentrant vacuum window, to which the high NA lens must be aligned to cancel aberrations. The applied magnetic ﬁeld (and hence the circularly polarised state preparation beams) must lie perpendicular to the imaging axis.
61

mirror is inserted just before the vacuum to reﬂect the beam onto a CMOS camera78 placed at the virtual ion position. The focussing lenses are then inserted in their nominal positions (to place the focus at the camera), taking care that the beam passes through the optical centre of each lens to minimise the aberrations in the focussed spot. The beams must now be aligned relative to the trap’s features. The HOA2 trap’s gold coating is highly specular, meaning that oblique illumination is not suﬃcie-
nt to image the trap features. Therefore we use the arrangement shown in ﬁgure 3.11 to provide illumination perpendicular to the trap surface and image the trap; alignment marks allow easy identiﬁcation of the central electrodes. We position the beam so that approximately 50 % is clipping the trap (by observing the exit beam), and then scan the beam across the trap until the scattered light is correctly aligned with the trap electrodes. The mirror is then replaced, and the camera used to raise the-
 beam position by the ion height, 68 µm.
While the algorithm for this beam alignment is simple, in practice the geometry of the beam paths makes it somewhat diﬃcult to place a mirror after the ﬁnal lens. The ﬁnal lens is 150 mm from the centre of the vacuum system, and thus only 45 mm from the outer edge of the vacuum window and 30 mm from the mounting structure. Conventional ﬂip mounts could not be used due to the space restrictions, so a 3D printed adapter was used to attach a small mirror79 to a magnetic mount80. The rare earth magnet-
s used in the mount are not ideal for the uniformity of the magnetic ﬁeld at the trap centre – this is not important for the single-ion experiments reported here
78Thorlabs DCC1545M 79Edmund Optics, 15 × 15 mm UV Enhanced Aluminum, λ/4 Mirror, Stock #45-726 80Thorlabs KB25/M
62

WEAK BS1
ILLUMINATION

L1

A1

NA 0.6

IF1
CMOS
Figure 3.11: The confocal imaging system, used to perform initial alignment of the trap beams. The ﬁbre is deliberately not at the focus of the imaging system so that it provides illumination over a large region of the trap plane. It can also be used to image the ion during initial trapping – the ﬁbre is replaced by a photomultipler tube (PMT) to detect the photons from a trapped ion. That the PMT is not at the focus of the imaging system is inconsequential since it has a large active area.
but is crucial for multi-ion operation. The mounts themselves are also fairly diﬃcult to place, with a non-negligible risk of nudging optics while trying to insert or remove them.
A second design was produced using servo motors to swing a mirror81 into the beam. This used 3D printing extensively and included a second mirror to make the beam path more compact and allow mounting the CMOS camera to the vacuum mounting structure. The servo motors still contain permanent magnets, but these are much weaker than the magnetic mounts. The motors are operated remotely using a Beaglebone, so there is no risk to the optics. A weakness of the design was that if the pivot arm holding the-
 mirror was not mated well to the servo motor spindle, the resulting shift in angle of the
81Edmund Optics, 15 mm Dia. UV Enhanced Aluminum, λ/4 Mirror, Stock #63-168

63

reﬂected beam changed the eﬀective distance to the camera such that the camera was no longer at the virtual ion position. However, in general the use of 3D printing here was a success – the proﬁling mirrors do not need long-term stability as they are generally used for comparative measurements for a few minutes at a time.
Once one beam is aligned on the ion, copropagating beams can be added trivially by ensuring that they coincide at the camera and one other place. Counterpropagating beams of the same wavelength (i.e. the 422σ and pulsed 422 paths) can also be added by coupling the light from the reference beam into the second beam’s coupler.
3.7 Rear imaging system
The rear imaging system82 (see ﬁgure 3.12) is used to collect ﬂuorescence from both species in the trap, imaging the ions through the slot in the HOA2 trap substrate. The main objective is an NA 0.3 5-element lens83 with a working distance of 59 mm. The dimensions of the trap slot restrict the actual imaged NA to 0.25. The objective is mounted on a 3-axis translation stage84 with tip/tilt adjustment provided by a kinematic prism mount85 with a custom adapter. The wavelength-dependence of the focal-
 length for light from each species is compensated by splitting the two wavelengths with a dichroic mirror and using independent lenses to focus them, either recombining the two
82Designed by Chris Ballance 83Sill Optics GmbH 84Thorlabs MT3/M 85Thorlabs KM200PM/M
64

(with a D-shaped mirror) onto an EMCCD86 or diverting them to independent PMTs87 for ﬂuorescence counting. A light tight aluminium enclosure forms the mounting structure for the imaging system’s components, as well as minimising background light.
In Alice, two strontium ions were trapped at a nominal axial frequency of 1 MHz, giving an ion spacing of 4.3 µm. The spacing between the ions in the image plane of the camera was 13 pixels, or 208 µm, indicating a magniﬁcation of 48.4.
We deﬁne the overall detection eﬃciency as the probability of detecting a photon given that a photon was emitted; to measure it we produce single photons from the strontium atom. We pump the ion into the 4 2D3/2 level using the 422 nm laser, before extinguishing the blue laser and turning on the 1092 nm repumper beam, thus emitting a single 422 nm photon. The PMT is gated for a window 5 µs, many times longer than the 5 2P1/2 lifetime, ensuring that a photon is emitted. Background counts are monito-
red with interleaved windows where the ion is not prepared into the 4 2D3/2 level and so does not emit a photon, and subtracted from the result.
Ignoring losses in the collection optics, the maximum possible theoretical detection eﬃciency for this setup is 0.016 · 30 % = 0.48 %, where 0.016 is the fraction of solid angle subtended by an aperture of NA 0.25 and 30 % is the PMT’s quantum eﬃciency. The measured detection eﬃciency of 0.4 % (in both systems) compares favourably with the theoretical prediction, resulting in a peak count rate for strontium of approximately 120 kHz. The background
86Andor iXon 897 Ultra, PN: DU-897U-CSO-#EX 87Hamamatsu H10682-210, quantum eﬃciency @ 400 nm ≈ 30 %
65

EMCCD PMT PMT

M1

L2

A1

F1 F2 F3

L1 NA 0.25

L3

A2

M3 L4

DM1

422

M5

L3'

A2'

M3' L4'

M2

397

M4

Figure 3.12: Schematic view of the rear side imaging system described in section 3.7. The plano-convex lensa L1 directly following the main objective decreases the eﬀective focal length to make the imaging system more compact. Aperture A1 at the prime focus assists coarse alignment of the imaging system; best form lensb L2 nominally collimates both wavelengths, up to chromatic aberration. The dichroic mirrorc DM 1 splits the wavelengths into independent paths. Lens L3 focuses 422 nm light through -
the adjustable apertured A2 to reduce background scattered light from lasers and room lighting; lens L4 focuses the light onto the EMCCD. A D-shaped mirror M 5 recombines the two paths onto the EMCCD. Mirrors M 3 and M 3 can be moved by linear actuatorse to divert each wavelength to a dedicated PMT. Filters F 1–3f reduce background.
aThorlabs LA1779-A (f = 1000 mm) bThorlabs LBF254-100A (f = 100 mm) – lenses L2, L3, L4, L3 and L4 are all identical cSemrock Di03-R405 dOWIS SP 40 eActuonix L12-30-50-6R fSemrock F 1: FF01-433/24, F 2: FF01-392/18, F 3: FF01-440/SP

66

count rate is typically < 0.2 kHz – very little laser scatter makes it through the imaging system because we are imaging through the slot in the trap, so the background is dominated by room light.
67

Chapter 4
Photon collection and
entangling apparatus
In the previous chapter, we described the “standard” ion trapping apparatus, similar to many other existing experiments; here we would like to introduce the apparatus and techniques used for photon collection and interference. This type of experiment has some inherent diﬀerences to the usual ion trapping experiments – namely, our control ﬂow is branched based on the diﬀerent herald patterns we can detect. The heralded events are relatively rare compared to the number of attempts, so we must maximi-
se the probability of a successful attempt, and ensure a high repetition rate of attempts. The ability to stop immediately on detection of a herald is necessary to be able to use the resulting entangled state in some way, which in this thesis is simply performing tomography to characterise the entangled state, but in the future will include further operations to purify the entangled state.
68

4.1 Photon collection
We aim to collect single photons at 422 nm from a strontium ion to use as an entanglement resource. One method of collecting photons from an atom or ion is by coupling to a cavity [SCS+12, SCB+13, SLM+12, KES+16, KHR02, KLH+04, WWKR07, HDLL+08] – this allows excellent collection eﬃciency, since the photon is preferentially emitted into the cavity mode. The use of cavities is technically challenging, as charge accumulating on the dielectric surfaces causes problems with trapping, so we choose to co-
llect photons in free space. Spherical [SDKB09] or parabolic [CAL+17] mirrors and high numerical aperture lenses [RBA+17] have been used in vacuum to collect ﬂuorescence from trapped ions or atoms, achieving high collection eﬃciencies and the potential to couple into optical ﬁbres. As a compomise between simplicity and collection eﬃciency, we chose to use an NA 0.6 lens outside the vacuum chamber, which covers approximately 10 % of the solid angle around an emitter.
4.1.1 Fibre coupling procedure
Single photons from the ion are collected into an optical ﬁbre through the front imaging system. The NA 0.6 main objective1 is mounted to a 2-axis rotation stage2 on top of a 3-axis translation stage3. The working distance from the ion is 17 mm. Cage rods on the objective’s mount allow a f =
1Photon Gear Inc., Atom Imager Relay, 422nm, PGI P/N: 16580 2Newport M36 3Newport M562-XYZ
69

1000 mm cyclindrical lens4 to be placed in a rotation mount5 near (∼ 3 mm) to the ﬁbre tip to remove small amounts of astigmatism, thought to be due to uneven strain on the vacuum window, that cannot be eliminated with adjustment of the objective lens. The Z-axis of the translation stage has a stepper motor actuator6 allowing us to adjust the focus without touching the stage, improving stability and ease of use. The ﬁbre is mounted in an SM1-threaded kinematic mount7. A 3-axis stage with additiona-
l piezoelectric actuators8 allows ﬁne tuning of the ﬁbre tip position.
In order to achieve maximal coupling of the ion light into the ﬁbre, aberrations in the image of the ion must be minimised. The main objective is a multi-element lens designed for near diﬀraction-limited performance at 422 nm, compensating for the spherical aberration introduced by a 4 mm vacuum window9. The lens must be aligned with its axis normal to the window to properly eﬀect this compensation.
Initial alignment consists of placing an EMCCD camera at the prime focus of the objective lens (ﬁgure 4.1a). This is suﬃcient for coarse alignment, but the pixel size of 16 µm is not small enough to resolve the diﬀraction limited image, the Airy disk having its ﬁrst dark ring at 5.7 µm diameter.
To further reduce the aberrations, we must magnify the image of the ion such that the ﬁrst Airy ring is resolvable. Magnifying the image too much will dim the image by spreading it out over many pixels. We choose to magnify
4Thorlabs LJ1516RM-A 5Thorlabs LCRM2/M 6Newport Conex TRA12CC Actuator 7Thorlabs K1T2 8Thorlabs Nanomax 300 9The window on this system is in fact 1/8” (3.18 mm): this diﬀerence has a negligible eﬀect on performance.
70

EMCCD

M1

L1

A2 A1

(a)

NA 0.6
(b)

NA 0.6

NA 0.25

EMCCD

M1

L1

A2 A1

EMCCD

L2
TO PHOTONIC BELL STATE ANALYSER

(c)
NA 0.6
(d)
NA 0.6

Figure 4.1: Setup steps for high numerical aperture imaging into a ﬁbre. Firstly (a), the EMCCD is placed at the prime focus of the objective, for initial alignment of the NA 0.6 objective. A weak collimated beam is used to align the relay lens approximately (b) by overlapping the image of the ﬁbre with that of the ion in the rear imaging system. During ﬁne alignment (c) the relay lens must be adjusted in {x, y, z} to keep it centred and the image focused at the camera. Mirror M 1 allows the image-
 to be steered onto the camera sensor. The ﬁnal setup is shown in (d), with a cylindrical lens (mounted with extensions to the objective mount) ∼ 3 mm from the ﬁbre tip.

71

the image by ∼ 60 so that the diﬀraction limited image has a diameter of approximately 20 pixels on the camera.
Magniﬁcation is provided by a f = 8 mm moulded glass aspheric lens10. This lens is held using adapters in the same SM1 kinematic mount to be used for the ﬁbre. Irises in the same mount allow accurate positioning of the aspheric lens; the ﬁrst is at the prime focus to control position11 while the second is mounted on a 50 mm tube after the lens, ensuring that the relay lens axis is parallel to the objective lens axis. Propagating a low power beam of collimated light (ﬁgure 4.1b) through this system-
 helps to locate where the ion image will be formed, by aligning the image of the ﬁbre to the same position as the ion on the EMCCD camera in the rear imaging system. Then the ﬁbre collimator can be replaced with the EMCCD, and the relay optic moved slightly closer to the ion to form the 60 times magniﬁed image on the EMCCD.
An iterative process follows for correcting aberrations (ﬁgure 4.1c), reducing the dominant type with successive adjustments until another type dominates. Adjustments of the objective cause large changes in the z position of the prime focus; the aluminium base on which the kinematic stages are mounted is left unsecured and slid fore and aft against two reference points. Static friction is suﬃcient to keep the base in place during the alignment procedure.
Scanning through the focus helps to identify the type of aberration more clearly. Residual astigmatism that could not be corrected with the objective
10Thorlabs A240TM-A 11The minimum aperture of this iris is larger than the diameter of the focussed spot, so with the iris fully closed the image should not be dimmed.
72

Raw image

Fit

Defocused

Residuals

At focus
Figure 4.2: Point spread function image, ﬁt and residuals, both for intentionally added defocus and at the focus. The color mapping used for the residuals is magniﬁed ten times compared to the other images, with zero at the midpoint of the mapping. The Zernike coeﬃcients for the defocused ﬁt are shown in ﬁgure 4.3.
lens alignment was corrected using a cylindrical lens close to the prime focus. The cylindrical lens (f = 1000 mm) is easily aligned by moving it further from the prime focus to increase the introduced astigmatism and aligning its axes such that it is opposite in sign to the uncorrected system, before reducing the distance to the focus. Once aberrations have been visually corrected, we verify the alignment by ﬁtting the point spread function with Zernike polynomials [WCJN+16]. Intentional defocus -
of the image increases the eﬀect of any remaining aberrations, so improving the robustness of the ﬁt. Example images, both with and without defocus are shown in ﬁgure 4.2, with the Zernike coeﬃcients for the defocused image shown in ﬁgure 4.3.
The ﬁnal conﬁguration with the ﬁbre collecting light from the ion is shown
73

Waves

Defocus Oblique astigmatism
Vert astigmatism Vert coma Horiz coma Vert trefoil
Oblique trefoil Primary spherical Vert secondary astig Oblique secondary astig
Vert quadrafoil Oblique quadrafoil

0.20 0.15 0.10 0.05 0.00
Figure 4.3: The Zernike coeﬃcients of the defocused point spread function – 1 ‘wave’ corresponds to a 2π phase shift, all parameters (aside the intentional defocus) are < 0.02. Fitting the focused image is less robust.
74

in ﬁgure 4.1d. The detection eﬃciency here is still (see section 3.7) deﬁned by the prob-
ability of detecting a photon given that a photon was emitted; however, in this instance we must sum over the four detectors of the Bell state analyser. Thus the total detection eﬃciency can be written as

Ω

1

ηc = 4π ξmaxχﬁbreTopt · 4

4

χbi .s.a.f.QiE ,

i

(4.1)

where

Ω 4π

=

0.1 is

the fraction of

solid angle

subtended

by the

lens,

ξmax

=

0.80

is the maximum fraction that can be coupled into a single mode ﬁbre12,

χﬁbre is the fraction of ξmax that actually enters the photon collection ﬁbre,

Topt ≈ 0.95 is the transmission through all optical elements13. The term

1 4

4 i

χbi .s.a.f.Qi

gives

the

average

probability

of

detecting

a

photon

given

its

presence at an output of the Bell state analyser, incorporating the quantum

eﬃciency QiE ≈ 65 % of each detector, and the coupling eﬃciency into the single mode ﬁbre preceding the detector χbi .s.a.f. ≈ 0.90 (see section 4.2). With perfect ion-ﬁbre coupling eﬃciency χﬁbre = 1, the detection eﬃcency would then be 4.2 %. The best measured collection eﬃciency in each system was

2.1 % and 2.4 % for Alice and Bob respectively, corresponding to estimated

ion-ﬁbre couplings of 50 % and 57 %14.
12This is discussed further in section 6.1, and is dependent on the numerical aperture. 13Including the Bell state analyser 14The discrepancy here is due to the ﬁnite patience of a graduate student adjusting micrometers in a darkened room. . .

75

4.2 Photonic Bell state analyser
The entanglement swapping procedure to entangle the ions relies on detecting
Bell states of photons. In our case, the photons themselves are not actually
in a Bell state, unlike typical photonics experiments where a pure Bell state
is produced (by parametric downconversion for example) and subsequently
measured. However, since the Bell states form a basis over the combined
states of two two-level systems, we can enact a Bell state measurement to
project the photons into such a state, destroying the photon state in the
process but swapping the entanglement onto the ions. With only linear
optics, a Bell state analyser of photons can only distinguish 2 of the 4 Bell
states unambiguously [MMWZ96], setting a hard limit on the probability of
projecting the photons into a useful state. The Bell state analyser15 is a generalisation of the Hong-Ou-Mandel in-
terferometer [HOM87], with the layout shown in ﬁgure 4.4. The photons are incident on a 50:50 beam splitter16; polarising beam splitters17 follow
each output port. The output ports of the polarising beam splitters are monitored by avalanche photodiodes18 (APDs). Zero-order quarter19- and half-wave plates20 allow arbitrary manipulation of the photon polarisation basis and are mounted in motorised stages21. Mechanical shutters22 allow
15Built with great help from Joe Goodwin 16Thorlabs BS10-A 17Altechna, custom coated 18COUNT BLUE 19Thorlabs WPH05Q-405 20Thorlabs WPH05H-405 21Thorlabs DDR25/M; Thorlabs K10CR1 were used initially, but these were so slow that during the ion-photon tomography experiment an unacceptable percentage of the experiment time would have been taken up by changing waveplate angles. 22Thorlabs SHB05T
76

the light from one of the traps to be blocked while performing single-trap
experiments. The outputs of the beam splitters are coupled into single mode ﬁbres23,
increasing the contrast of the interferometer [SHKW06] by ensuring spatial
mode matching of the photons, at the expense of reducing the overall detec-
tion eﬃciency because of imperfect coupling into the ﬁbres and extra optical elements introducing loss. Fixed air-spaced triplet ﬁbre collimators24 and a 1:1 telescope using f = 250 mm plano-convex lenses25 were used to mode
match back into the output ﬁbres, with ﬁne adjustment of the lens position provided by a zoom mount26 with 4 mm of travel. The ﬁbre coupling was per-
formed with coherent laser light, achieving end-to-end couplings of ∼ 90 %. The interferometer contrast was not measured with classical light27.
The light from the output ﬁbres is focused onto the avalanche photodiodes’ 100 µm active area using a matched achromatic doublet pair28. The lens and ﬁbre can be translated with an XY-mount29 and a zoom mount30
to position the focused spot onto the detector’s active area. The detector
quantum eﬃciencies were measured to be in the range 60–65 % at 422 nm.
The APDs have a typical latency from photon impact to TTL output pulse
of 30 ns, with a resolution of 1 ns.
23Thorlabs S405-XP custom coated: Ravg < 0.75 % over 400–700 nm 24Thorlabs TC06FC-405 25Thorlabs LA1461-A 26Thorlabs SM1ZM; these mounts gave slightly too ﬁne adjustments, necessitating extra lens tube as a coarse adjustment. Coarser adjusters with more travel would be a better choice in future. 27This was an oversight in the rush to get results – we assumed that the very high ﬁbre coupling eﬃciencies would ensure good mode matching, but perhaps we were just lucky! 28Thorlabs MAP051919-A 29Thorlab-
s LM1XY/M 30Thorlabs SM1ZM
77

FOCUS

50:50

FC0

FC3

FC1
PBS NPBS LENS MIRROR WAVEPLATE FIBRE COUPLER

λ⁄2
λ⁄4
MECHANICAL SHUTTER
FC(B)

FC2

FC(A)

ZOOM HOUSING

MOTORISED ROTATION
MOUNT

Figure 4.4: Diagram of the photonic Bell state analyser layout. The shallow angle of incidence on the 50:50 beam splitter helps to minimise any polarisation dependent diﬀerences in transmission/reﬂection. The approximate position of the focus between the lenses is marked with a dashed circle. Fibre couplers A and B come from Alice and Bob respectively; the labels on the output couplers match the detector number. Detectors 0 and 3 (1 and 2) measure horizontally (vertically) polarised photons.

78

Reﬂected Transmitted AR coating loss R

T

S-pol P-pol

0.4653 0.4649

0.5211 0.5258

0.0018 0.0018

0.4717 0.5283 0.4693 0.5307

Table 4.1: Properties of the selected non-polarising beam splitter. The AR coating loss is the power in the ﬁrst reﬂection only. Note that there are miscellaneous losses of around 1 % for both polarisations. In chapter 7 we argue that any losses aﬀect only the rate, so can be ignored – the ﬁnal two columns show R and T assuming the beam splitter were lossless.

4.2.1 Beam splitters
The Bell state analyser’s eﬀectiveness depends on the qualities of the beam splitters used, as will be discussed in chapter 7 – imperfect beam splitters cause the projective measurements on the photons to no longer be exactly in the Bell basis, and thus the resulting ion state is not a Bell state either. Characterisation of the beam splitters enables us to bound this source of inﬁdelity.
We can minimise the polarisation dependence of the 50:50 beam splitter by using it close to normal incidence; then the only free parameter is the reﬂectance, which we would like to be as close to 50 % as possible. Several nominally identical non-polarising beam splitters from diﬀerent batches were evaluated for their reﬂection/transmission balance and anti-reﬂection coating quality on the non-beam-splitting face. The chosen beam splitter’s properties31 are listed in table 4.1.
The polarising beam splitters (PBSs) are used to measure the polarisation of the photons, so their polarisation purity dictates the ﬁdelity of this
31The non-polarising beam splitter was not tested for any birefringence; this would aﬀect ﬁdelity but appears to be small.

79

PBS1 PBS2 S-pol (reﬂected) 12 500:1 3000:1 P-pol (transmitted) 700:1 1900:1
Table 4.2: Extinction ratios of the two Altechna PBSs used in the entangler board, as measured in situ. The labels correspond to those given in ﬁgure 4.4.
measurement. Cube PBSs from diﬀerent suppliers were evaluated for best polarisation purity ex situ32. The best performing33 were then mounted in a cube mount34. A Glan-Laser polariser35 in a rotating mount was used to maximise and minimise the power in each arm, and so measure the in situ performance. The clamping force signiﬁcantly aﬀected the beam splitters’ performance, necessitating a reduction in the mounting screws’ tightness. Final measurements are shown in table 4.2.
4.2.2 Waveplates
The waveplates of the Bell state analyser are used to rotate the photon state, both to perform tomography on an ion-photon state as in chapter 6 and to rotate the photon into an appropriate basis in chapter 7. Characterising the waveplates ensures that we can calculate the required waveplate angles for a given rotation on the Bloch sphere.
The waveplates’ retardance and the angle of the fast axis were determined using a polarisation analyser36. A cage mount assembly held a ﬁbre coupler,
32Wollaston prisms oﬀer excellent extinction in both polarisations (routinely speciﬁed at 100 000:1), and were only omitted due to oversight.
33Supplied by Altechna 34Thorlabs CCM1-4ER/M with BS127CAM adapter 35Thorlabs GLB10, extinction ratio of transmitted beam measured at 45 000:1 36Sch¨after and Kirchhoﬀ SK010PA-UV
80

the motorised waveplate mount and the polarisation analyser colinear to ensure the waveplate was perpendicular to the beam direction. The input light polarisation was measured by removing the waveplate mount entirely, and then replacing it to measure the output state. The 6 input states of {|H , |V , |A , |D , |L , |R } form an over-complete basis. Measuring the output states with the mount set to 0◦ and 45◦ allows us to unambiguously determine the waveplate’s fast axis relative to the mount.
An in situ measurement can also be performed using the polarisers on the analyser with an additional crossed polariser at the input. The action of a generic waveplate of retardance α at an angle β to the coordinate axes is given by a Jones matrix





cos2 β + e−iα sin2 β (1 − e−iα) cos β sin β

U (α, β) = 

.





(1 − e−iα) cos β sin β e−iα cos2 β + sin2 β

(4.2)

If the waveplate is between crossed polarisers, we select one of the oﬀ diagonal elements; taking the modulus squared to ﬁnd the transmitted intensity yields

I

=

I0

sin2 2β

1 − cos α 2

.

(4.3)

Note that this method cannot distinguish between the fast and slow axes of the waveplates – this must be done separately using the polarisation analyser.
For the in situ measurement, a Glan-Laser polariser is inserted directly after the input ﬁbre coupler, with the waveplates removed. The polariser is rotated until the transmission of laser light through the output polariser is minimal, so that the two polarisers are crossed. Both the transmitted and

81

Retardance (rad) Fast axis (deg)

QWP1 QWP2 HWP1 HWP2

1.364(1) 1.519(2) 2.819(4) 2.957(5)

29.8 165.8 15.4 123.7

Table 4.3: Bell state analyser waveplate retardances and fast axis angles as measured in situ.

reﬂected power from the output polariser are monitored to enable normalisation of the transmitted to total power. The ﬁrst waveplate is put into place and rotated while monitoring the transmitted powers. This waveplate can be set so that its axes are aligned with the input polariser, and so it has no eﬀect on the polarisation state; then inserting the second waveplate, the same measurement can proceed. Results from the in situ measurements are summarised in table 4.3.

4.2.3 Optical ﬁbres
The photon’s polarisation state must be faithfully transported from the collection optics to the Bell state analyser. Single-mode (SM) ﬁbres have no engineered birefringence, although mechanical stresses will inevitably introduce some small birefringence. The birefringence, and hence the phase accumulated between orthogonal polarisations, varies on thermal timescales. These variations are small, with the phase not drifting appreciably over several hours, allowing us to perform tomography to charac-
terise the ﬁbre and use the waveplates to undo the eﬀect of the ﬁbre.
Anti-reﬂection coated ﬁbres37 are used – as explained later in chapter 7,
37Thorlabs S405-XP custom coated: Ravg < 0.75 % over 400–700 nm
82

the rate of ion-ion entanglement heralds is dependent on the square of the single photon detection eﬃciency. With four ﬁbre facets between ion and detector, uncoated ﬁbres would give 16 % loss in detection eﬃciency and thus 32 % lower rate. All of the ﬁbres use FC/APC connectors; this lowers the coupling from the ion into the ﬁbre marginally, but avoids any unintentional optical cavities formed by normal incidence on air-glass interfaces.
4.3 Experimental control
In this thesis, we are presenting the results of “heralded” events; that is, we attempt a procedure that has a low probability of success, and only on detection of a certain combination of photon(s) do we stop our attempts and move to the analysis stage. Therefore we must (a) maximise the speed of our decision making process and (b) minimise the time taken to execute our entanglement attempts. The methods to achieve this are described below.
4.3.1 The “entangler core”
ARTIQ oﬀers the ﬂexibility of controlling an FPGA using just-in-time compiled code, however, the overheads introduced make it unsuitable for the fast loop used to attempt the generation of entangled photons, as several tens of nanoseconds latency are introduced to generate output events. It is also diﬃcult to synchronise the two FPGAs controlling Alice and Bob as is necessary for the two-trap experiment. The “entangler core” was the solution to this problem, and is a section of precompiled logic g-
ates on the Kasli used to control the inputs, outputs and decision branching of the entanglement
83

sequence. The entangler core has a counter which advances with the system clock.
It takes in several values at runtime, which are stored in registers for use in logic operations:
• on and oﬀ times of TTL outputs, namely the TTLs controlling the 422 nm and 1092 nm state preparation beam RF switches (see section 4.3.2) and the pulse picker trigger (see section 3.5.2)
• open and close time of the pulsed laser photodiode input gate
• open and close oﬀsets of the APD input gates – note each APD has its own oﬀset to allow for diﬀerent latencies, both in the APD itself and the beam path to it
• a list of the herald patterns on which to exit, each stored as a 4-bit one-hot encoded number with one bit per detector
• the time at which to restart the cycle if no herald is detected
• The total attempt duration before forcing an exit due to a timeout
Each time the counter advances, a series of comparisons are made. The counter is compared for equality with the TTL on (oﬀ) time and the outputs set high (low) correspondingly. The counter is compared with the open and close time of the pulsed laser photodiode input gate and used to set a ﬂag to accept a rising edge. If a rising edge is detected during this acceptance window, the counter value at the input time is recorded. This counter value is then added to each of the APD gate oﬀsets to give th-
e APD input gate
84

open and close times, which similarly set a ﬂag per detector and record the counter value on a detection event. If the pattern of APD ﬂags matches any of the herald patterns, a ‘stop’ ﬂag is set, the matched herald pattern and the counter value of the last input event stored. Once the counter is equal to the cycle time, the stop ﬂag is checked – if set, the entangler loop exits with the reason for stopping (i.e. the herald pattern) and counter value of the last detection event. If the stop ﬂag is -
not set, the counter is reset to zero and the cycle starts again. A second counter is not reset at the end of the sequence, but compared with the total attempt duration. If this second counter exceeds the total attempt duration, the stop ﬂag is set. The ‘herald pattern’ stored in this case is a value reserved for indicating timeouts.
On exit of the entangler core, it generates an ARTIQ input event, with the timestamp at the exit time of the core and the herald pattern that caused the exit. Diﬀerent analysis sequences can then be chosen in the ARTIQ experiment based on the herald pattern recorded. The APD input time can be retrieved later in the experiment, and is used for setting the phase of the 674 nm analysis pulses.
For the two trap experiments, the master (Alice’s core Kasli) and slave (Bob’s Kasli) must be synchronised to begin the entanglement sequence simultaneously. The two devices are connected with a ribbon cable, to allow each device to set a ready ﬂag that the other device can monitor. When both ready ﬂags are set, the entanglement sequence can begin.
85

4.3.2 AOM switching latency
A typical atomic physics experiment consists of control pulses which trigger events, such as a laser beam switching on, with some latency associated with that action. To make a sequence occur as quickly as possible, the latencies can be measured so that the trigger pulses occur with as little delay between them as desired. Latencies that occur at the beginning of an experiment run can usually be “pre-triggered”, i.e. the trigger pulses are sent before the end of the previous experiment. This exper-
iment is designed to entangle ions across a network, an inherently probabilistic process with a relatively low chance of success. We must be able to stop on detection of entanglement, which rules out pre-triggering as a method to reduce the cycle time, so latencies must be reduced wherever possible.
In this experiment, we use AOMs to switch the laser beams; switching with AOMs has greater latency than with electro-optic modulators, but typically has a superior extinction ratio, lower insertion loss, and a lower setup complexity.
The time-critical section of the entanglement generation experiment involves only two beam paths38 – the 422 nm σ-polarised and 1092 nm beams used for state preparation. The AOMs for these beam paths are situated in the server rack, controlled by the slave Kasli and Urukuls. Controlling the Urukul’s RF switches via the slave Kasli and ﬁbre DRTIO link introduces several hundred ns latency, so dedicated RF switches controlled by TTL channels on the core Kasli are used for these beam paths.
38The 372 ns latency between the pulse picker trigger and transmitted pulse is not signiﬁcant, as there is suﬃcient state preparation time before the pulse is needed.
86

With the dedicated RF switches, an initial latency of about 1 µs was measured for the 422 nm beam. The slave server rack is situated around 8 m from both the core server rack and the experiment table. A ∼ 10 m BNC cable connects to the TTL input of the RF switch, then ∼ 7 m of SMA cabling39 within the rack carries the RF signal from the switch to the ampliﬁer and then to the AOM. Finally, a 17 m optical ﬁbre40 takes the light to the trap delivery optics. This means that a rough estimate for unavoi-
dable signal latency (from the propagation of electrical signals in cables and light in optical ﬁbres) accounts for around 170 ns of the total 1 µs latency.
Clearly there is an additional latency source in play; there is a delay in between the RF signal appearing at the transducer of the AOM and light being diﬀracted oﬀ the acoustic wavefront, which propagates at 4.2 mm µs−1 in the TeO2 AOM crystal. By realigning the AOM with the beam focus position much closer to the transducer, we were able to drastically reduce the latency of the 422 nm beam paths. The 1092 nm beam paths use ﬁbre AOMs, so this optimisation was not possible. The measured latencies a-
fter optimisation are shown in table 4.4.
39A suprising amount of length is required to route the cables around the rack, although there is some slack
40This was ordered before the ﬁnal layout of the experiment was decided, so includes several metres spare.
87

On (ns) Oﬀ (ns)

Alice 1092 nm 440

431

Alice 422 nm 309

304

Bob 1092 nm 380

372

Bob 422 nm 288

283

Table 4.4: On and oﬀ latencies for each of the time-critical beams in both traps. Since the rise time of the AOM is typically tens of nanoseconds, the times quote here are from the control pulse edge to 50 % beam intensity. The optimisation of the 422 nm latencies is discussed in section 4.3.2.

88

Chapter 5
Ion state manipulation and readout
In this chapter we present the initial characterisation work on single strontium ions that is a necessary precursor to both the ion-photon and ion-ion entangling experiments. This is focused on the ion manipulations discussed in section 2.1; initialisation, rotations and readout of the qubit. Preparation of the excited state that produces entangled photons is covered in chapter 6.
5.1 State preparation
To initialise the Zeeman qubit, we optically pump the ion into |↓ using σ−polarised 422 nm light, as outlined in section 2.1.3. The ﬁdelity of the state preparation is directly set by the polarisation purity of the 422 nm beam; a Glan-Taylor polariser1 before a quarter-wave plate ensures control over
1Thorlabs GLB10-A, extinction ratio measured at 50 000:1
89

the polarisation. The state preparation beam and the applied ﬁeld must be colinear to create pure σ− polarisation.
The state preparation beam’s direction is constrained by the single photon collection scheme. The beam and ﬁeld must be colinear, while the ﬁeld must be perpendicular to the imaging axis; The imaging axis is constrained by the need to minimise aberrations from the recessed vacuum window, and so is colinear with the normal to the window, but this is unknown a priori. The best we can do is to assume the window is well registered to the vacuum system, and ﬁx the beam direction relative to the vacuum -
system2. The beam direction is set with the use of irises ﬁxed relative to the vacuum chamber (see section 3.6.1).
To set the polarisation and ﬁeld, the ion is alternately cooled using the usual Doppler cooling beams (422 nm and 1092 nm) and with the σ−polarised 422 nm beam and 1092 nm repumper. The ion ﬂuorescence is monitored during application of the σ− beam, which is set to a high intensity (∼ 100IS, where IS is the saturation intensity); if the ﬁeld and polarisation are correctly set then the ion will be pumped into |↓ and cease to ﬂuoresce. This cessation occurs with a time constant equal to the 5p 2P1/2-
 state lifetime (7.39 ns) multiplied by the inverse of the branching ratio from 5p 2P1/2,−1/2 to the dark state 5s 2S1/2,−1/2 (1/3), approximately 25 ns. Monitoring the ﬂuorescence over a timescale much longer than this (i.e.15 µs) renders the transient ﬂuorescence as the ion is pumped into the dark state insigniﬁcant over the collection window. The increased power allows polarisation impurities in the
2This is a reasonable assumption – a 0.5 mm diﬀerence in vacuum gasket compression would be easily visible over the 152 mm ﬂange diameter, corresponding to less than 0.2◦ misalignment.
90

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:27.081Z
- **Text Length:** 135587 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
